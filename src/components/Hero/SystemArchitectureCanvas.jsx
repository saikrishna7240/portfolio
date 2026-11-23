import React, { useEffect, useRef, useState } from 'react';

export default function SystemArchitectureCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    nodes: 24,
    transfers: 1420,
    status: "SYNCED"
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    const mouse = { x: -1000, y: -1000, active: false };

    // Set canvas dimensions
    const resize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Architectural System Nodes definition
    const nodeTypes = [
      { label: "API GATEWAY", type: "core" },
      { label: "STATE MESH", type: "engine" },
      { label: "NEURAL RUNTIME", type: "ai" },
      { label: "DISTRIBUTED CACHE", type: "db" },
      { label: "EVENT STREAM", type: "stream" },
      { label: "GRAPH QUERY", type: "db" },
      { label: "CLIENT COMPONENT", type: "client" },
      { label: "WORKER POOL", type: "worker" }
    ];

    // Node count
    const numNodes = Math.max(16, Math.min(26, Math.floor(width / 35)));
    const nodes = [];

    for (let i = 0; i < numNodes; i++) {
      const typeInfo = nodeTypes[i % nodeTypes.length];
      nodes.push({
        x: Math.random() * (width - 80) + 40,
        y: Math.random() * (height - 80) + 40,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: i % 4 === 0 ? 4.5 : 3,
        label: i < 8 ? typeInfo.label : '',
        type: typeInfo.type,
        pulse: Math.random() * Math.PI * 2,
        connections: []
      });
    }

    // Interactive Packet Pulses travelling between nodes
    const packets = [];
    const maxPackets = 18;

    const createPacket = (from, to) => {
      packets.push({
        fromNode: from,
        toNode: to,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
        color: Math.random() > 0.4 ? '#10f59b' : '#ffffff'
      });
    };

    // Mouse movement listener
    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('mouseleave', handlePointerLeave);

    let lastTime = performance.now();
    let frameCount = 0;
    let fpsUpdateTime = 0;

    // Render loop
    const render = (currentTime) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;
      frameCount++;

      if (currentTime - fpsUpdateTime > 1000) {
        setTelemetry(prev => ({
          ...prev,
          fps: Math.min(60, Math.round((frameCount * 1000) / (currentTime - fpsUpdateTime))),
          transfers: prev.transfers + Math.floor(Math.random() * 5 + 1)
        }));
        frameCount = 0;
        fpsUpdateTime = currentTime;
      }

      ctx.clearRect(0, 0, width, height);

      // Subtle architectural background grid
      const gridSize = 48;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw node positions
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundaries
        if (node.x < 30 || node.x > width - 30) node.vx *= -1;
        if (node.y < 30 || node.y > height - 30) node.vy *= -1;

        // Mouse attraction / displacement
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            node.x -= (dx / dist) * force * 1.5;
            node.y -= (dy / dist) * force * 1.5;
          }
        }

        node.pulse += 0.03;
      }

      // Draw connection lines
      const maxConnectDist = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.28;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            // If mouse is near line, highlight it with electric lime
            const midX = (nodes[i].x + nodes[j].x) / 2;
            const midY = (nodes[i].y + nodes[j].y) / 2;
            const mouseDist = Math.hypot(mouse.x - midX, mouse.y - midY);

            if (mouseDist < 80) {
              ctx.strokeStyle = `rgba(16, 245, 155, ${alpha * 2.5})`;
              ctx.lineWidth = 1.2;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = 0.8;
            }
            ctx.stroke();

            // Chance to spawn packet between connected nodes
            if (packets.length < maxPackets && Math.random() < 0.003) {
              createPacket(nodes[i], nodes[j]);
            }
          }
        }
      }

      // Draw and update active data packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const packet = packets[p];
        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const px = packet.fromNode.x + (packet.toNode.x - packet.fromNode.x) * packet.progress;
        const py = packet.fromNode.y + (packet.toNode.y - packet.fromNode.y) * packet.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = packet.color;
        ctx.shadowColor = '#10f59b';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw nodes and label tags
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulseVal = Math.sin(node.pulse);
        const currentRadius = node.radius + pulseVal * 0.8;

        // Glow ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius + 3, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(16, 245, 155, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.label ? '#10f59b' : 'rgba(255, 255, 255, 0.7)';
        ctx.fill();

        // Technical Node Labels (editorial blueprint feel)
        if (node.label) {
          ctx.font = '600 9px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(245, 245, 247, 0.7)';
          ctx.fillText(node.label, node.x + 8, node.y + 3);

          ctx.fillStyle = 'rgba(16, 245, 155, 0.45)';
          ctx.fillText(`0x${(i * 17).toString(16).toUpperCase()}`, node.x + 8, node.y + 13);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handlePointerMove);
      canvas.removeEventListener('mouseleave', handlePointerLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="system-canvas-wrapper" ref={containerRef}>
      <canvas ref={canvasRef} className="architecture-canvas" />

      {/* Top HUD Telemetry Banner */}
      <div className="canvas-hud-header">
        <div className="hud-metric">
          <span className="hud-label">SYSTEM_STATUS</span>
          <span className="hud-val text-lime">● OPERATIONAL</span>
        </div>
        <div className="hud-metric">
          <span className="hud-label">LATENCY</span>
          <span className="hud-val">12ms</span>
        </div>
        <div className="hud-metric">
          <span className="hud-label">TELEMETRY</span>
          <span className="hud-val">{telemetry.fps} FPS</span>
        </div>
        <div className="hud-metric">
          <span className="hud-label">PACKETS_DISPATCHED</span>
          <span className="hud-val">{telemetry.transfers.toLocaleString()}</span>
        </div>
      </div>

      {/* Floating System Architecture Card */}
      <div className="canvas-system-tag">
        <span className="system-tag-label">INTERACTIVE ARCHITECTURE RUNTIME</span>
        <span className="system-tag-desc">Interactive Node Topology • Real-time Event Streaming</span>
      </div>
    </div>
  );
}
