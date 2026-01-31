"use client";
import React, { useCallback, useState } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    // Core Skills - Center
    {
        id: '1',
        type: 'input',
        data: { label: 'Frontend Development' },
        position: { x: 400, y: 50 },
        style: {
            background: '#222222',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            padding: '16px 24px',
            fontSize: '14px',
            fontWeight: '500',
            width: 200,
            fontFamily: 'system-ui, -apple-system, sans-serif',
        },
    },

    // React Ecosystem
    {
        id: '2',
        data: { label: 'React' },
        position: { x: 150, y: 200 },
        style: {
            background: '#FFFFFF',
            color: '#222222',
            border: '1px solid #E5E5E5',
            borderRadius: '8px',
            padding: '14px 20px',
            fontWeight: '500',
            fontSize: '13px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
        },
    },
    {
        id: '3',
        data: { label: 'Next.js' },
        position: { x: 400, y: 200 },
        style: {
            background: '#FFFFFF',
            color: '#222222',
            border: '1px solid #E5E5E5',
            borderRadius: '8px',
            padding: '14px 20px',
            fontWeight: '500',
            fontSize: '13px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
        },
    },

    // Styling
    {
        id: '4',
        data: { label: 'Tailwind CSS' },
        position: { x: 50, y: 350 },
        style: {
            background: '#F8F8F8',
            color: '#222222',
            border: '1px solid #E5E5E5',
            borderRadius: '8px',
            padding: '12px 18px',
            fontWeight: '500',
            fontSize: '12px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
        },
    },
    {
        id: '5',
        data: { label: 'CSS3' },
        position: { x: 250, y: 350 },
        style: {
            background: '#F8F8F8',
            color: '#222222',
            border: '1px solid #E5E5E5',
            borderRadius: '8px',
            padding: '12px 18px',
            fontWeight: '500',
            fontSize: '12px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
        },
    },

    // JavaScript
    {
        id: '6',
        data: { label: 'JavaScript' },
        position: { x: 450, y: 350 },
        style: {
            background: '#F8F8F8',
            color: '#222222',
            border: '1px solid #E5E5E5',
            borderRadius: '8px',
            padding: '12px 18px',
            fontWeight: '500',
            fontSize: '12px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
        },
    },

    // Backend
    {
        id: '7',
        data: { label: 'Node.js' },
        position: { x: 650, y: 200 },
        style: {
            background: '#FFFFFF',
            color: '#222222',
            border: '1px solid #E5E5E5',
            borderRadius: '8px',
            padding: '14px 20px',
            fontWeight: '500',
            fontSize: '13px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
        },
    },

    // Tools
    {
        id: '8',
        data: { label: 'Git' },
        position: { x: 650, y: 350 },
        style: {
            background: '#F8F8F8',
            color: '#222222',
            border: '1px solid #E5E5E5',
            borderRadius: '8px',
            padding: '12px 18px',
            fontWeight: '500',
            fontSize: '12px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
        },
    },

    // Output
    {
        id: '9',
        type: 'output',
        data: { label: 'Beautiful Web Apps' },
        position: { x: 350, y: 500 },
        style: {
            background: '#7B7B7B',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            padding: '16px 24px',
            fontSize: '14px',
            fontWeight: '500',
            width: 200,
            fontFamily: 'system-ui, -apple-system, sans-serif',
        },
    },
];

const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: false,
        style: { stroke: '#222222', strokeWidth: 1.5 },
        type: 'smoothstep',
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3',
        animated: false,
        style: { stroke: '#222222', strokeWidth: 1.5 },
        type: 'smoothstep',
    },
    {
        id: 'e1-7',
        source: '1',
        target: '7',
        animated: false,
        style: { stroke: '#222222', strokeWidth: 1.5 },
        type: 'smoothstep',
    },
    {
        id: 'e2-4',
        source: '2',
        target: '4',
        animated: false,
        style: { stroke: '#7B7B7B', strokeWidth: 1 },
        type: 'smoothstep',
    },
    {
        id: 'e2-5',
        source: '2',
        target: '5',
        animated: false,
        style: { stroke: '#7B7B7B', strokeWidth: 1 },
        type: 'smoothstep',
    },
    {
        id: 'e3-6',
        source: '3',
        target: '6',
        animated: false,
        style: { stroke: '#7B7B7B', strokeWidth: 1 },
        type: 'smoothstep',
    },
    {
        id: 'e7-8',
        source: '7',
        target: '8',
        animated: false,
        style: { stroke: '#7B7B7B', strokeWidth: 1 },
        type: 'smoothstep',
    },
    {
        id: 'e4-9',
        source: '4',
        target: '9',
        animated: false,
        style: { stroke: '#CCCCCC', strokeWidth: 1 },
        type: 'smoothstep',
    },
    {
        id: 'e5-9',
        source: '5',
        target: '9',
        animated: false,
        style: { stroke: '#CCCCCC', strokeWidth: 1 },
        type: 'smoothstep',
    },
    {
        id: 'e6-9',
        source: '6',
        target: '9',
        animated: false,
        style: { stroke: '#CCCCCC', strokeWidth: 1 },
        type: 'smoothstep',
    },
    {
        id: 'e8-9',
        source: '8',
        target: '9',
        animated: false,
        style: { stroke: '#CCCCCC', strokeWidth: 1 },
        type: 'smoothstep',
    },
];

const SkillsFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [isInteractive, setIsInteractive] = useState(true);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <div className="w-full h-[500px] bg-[#F8F8F8] rounded-lg border border-[#E5E5E5] overflow-hidden">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                attributionPosition="bottom-left"
                nodesDraggable={isInteractive}
                nodesConnectable={isInteractive}
                elementsSelectable={isInteractive}
            >
                <Controls
                    className="!bg-white !rounded-lg !border !border-[#E5E5E5]"
                />
                <MiniMap
                    className="!bg-white !rounded-lg !border !border-[#E5E5E5]"
                    nodeColor={(node) => {
                        if (node.type === 'input') return '#222222';
                        if (node.type === 'output') return '#7B7B7B';
                        return '#FFFFFF';
                    }}
                    maskColor="rgba(248, 248, 248, 0.9)"
                />
                <Background
                    variant="dots"
                    gap={16}
                    size={1}
                    color="#CCCCCC"
                />
                <Panel position="top-right" className="!m-4">
                    <div className="bg-white rounded-lg px-5 py-3 border border-[#E5E5E5]">
                        <div className="flex items-center space-x-3">
                            <span className="text-xs font-medium text-[#7B7B7B]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                                {isInteractive ? 'Interactive' : 'View Only'}
                            </span>
                            <button
                                onClick={() => setIsInteractive(!isInteractive)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isInteractive ? 'bg-[#222222]' : 'bg-[#E5E5E5]'
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isInteractive ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </Panel>
            </ReactFlow>
        </div>
    );
};

export default SkillsFlow;
