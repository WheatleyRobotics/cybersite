'use client'

import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Box } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

interface ComponentStatus {
  name: string
  status: number
  nextAction: string
  position: [number, number, number]
  labelPosition: [number, number, number]
  color: string
}

function StatusBar({ status, color, position }: { status: number; color: string; position: [number, number, number] }) {
  return (
    <Html position={position} transform occlude>
      <div className="bg-black/90 backdrop-blur-sm border border-gray-600 rounded-lg p-3 min-w-[200px]">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white text-sm font-mono">{status}%</span>
          <div className="flex space-x-1">
            {status > 90 ? (
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            ) : status > 70 ? (
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            ) : (
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            )}
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: `${status}%`,
              backgroundColor: color,
              boxShadow: `0 0 8px ${color}`
            }}
          />
        </div>
      </div>
    </Html>
  )
}

function ComponentLabel({ component, position, isHovered }: { 
  component: ComponentStatus; 
  position: [number, number, number];
  isHovered: boolean;
}) {
  return (
    <Html 
      position={position} 
      transform={false}
      occlude="blending"
      style={{
        pointerEvents: 'none',
        userSelect: 'none'
      }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0.3, 
          scale: isHovered ? 1.1 : 0.9 
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`backdrop-blur-sm border-2 rounded-lg p-3 min-w-[180px] max-w-[200px] ${
          isHovered 
            ? 'bg-black/95 border-red-500 shadow-lg' 
            : 'bg-black/70 border-gray-500/50'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
          boxShadow: isHovered ? `0 0 20px ${component.color}40` : 'none'
        }}
      >
        <h3 className="text-white font-bold text-sm font-mono mb-1">{component.name}</h3>
        <div className="mb-2">
          <div className="flex justify-between mb-1">
            <span className="text-gray-300 text-xs">Status</span>
            <span className="text-white text-xs font-mono">{component.status}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1.5">
            <div
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: `${component.status}%`,
                backgroundColor: component.color,
                boxShadow: isHovered ? `0 0 8px ${component.color}` : `0 0 4px ${component.color}`
              }}
            />
          </div>
        </div>
        <div>
          <span className="text-gray-400 text-xs">Next:</span>
          <p className="text-red-500 text-xs font-mono mt-0.5 leading-tight">{component.nextAction}</p>
        </div>
      </motion.div>
    </Html>
  )
}

// Removed ConnectionLine component - cleaner interface with hover-only identification

function Robot({ 
  components, 
  hoveredComponent, 
  setHoveredComponent 
}: { 
  components: ComponentStatus[];
  hoveredComponent: string | null;
  setHoveredComponent: (name: string | null) => void;
}) {
  const robotRef = useRef<THREE.Group>(null)

  // Removed auto-rotation

  const getComponentColor = (component: ComponentStatus, base: string) => {
    if (hoveredComponent === component.name) return component.color
    if (component.status > 90) return '#22c55e'
    if (component.status > 70) return '#eab308'
    return '#ef4444'
  }

  const getEmissiveIntensity = (component: ComponentStatus) => {
    if (hoveredComponent === component.name) return 0.8
    return component.status > 90 ? 0.1 : component.status > 70 ? 0.2 : 0.3
  }

  return (
    <group ref={robotRef}>

      {/* Main Robot Chassis - Rectangular frame */}
      <Box args={[2.4, 0.2, 2.4]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#2a2a2a" 
          emissive="#ef4444"
          emissiveIntensity={0.05}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>

      {/* Swerve Drive Modules (4 corners) */}
      {[
        [-1, -0.8, -1], [1, -0.8, -1], [-1, -0.8, 1], [1, -0.8, 1]
      ].map((pos, index) => (
        <group key={`swerve-${index}`} position={pos as [number, number, number]}>
          <Box args={[0.3, 0.2, 0.3]}>
            <meshStandardMaterial 
              color={getComponentColor(components[0], '#333')}
              emissive={components[0].color}
              emissiveIntensity={getEmissiveIntensity(components[0])}
              metalness={0.6}
              roughness={0.4}
            />
          </Box>
          {/* Wheels */}
          <mesh position={[0, -0.2, 0]} rotation={[Math.PI/2, 0, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.08]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
        </group>
      ))}

      {/* Shooter/Arm Mechanism - Pivoting arm */}
      <group position={components[1].position}>
        {/* Pivot base */}
        <Box args={[0.4, 0.3, 0.4]} position={[0, -0.4, 0]}>
          <meshStandardMaterial 
            color={getComponentColor(components[1], '#444')}
            emissive={components[1].color}
            emissiveIntensity={getEmissiveIntensity(components[1])}
            metalness={0.7}
            roughness={0.3}
          />
        </Box>
        {/* Arm */}
        <Box args={[0.15, 1.2, 0.15]} position={[0, 0.2, 0]} rotation={[0.3, 0, 0]}>
          <meshStandardMaterial 
            color={getComponentColor(components[1], '#444')}
            emissive={components[1].color}
            emissiveIntensity={getEmissiveIntensity(components[1])}
            metalness={0.7}
            roughness={0.3}
          />
        </Box>
        {/* Shooter wheels */}
        <mesh position={[0, 0.8, -0.3]} rotation={[0, 0, Math.PI/2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.3]} />
          <meshStandardMaterial 
            color={getComponentColor(components[1], '#666')}
            emissive={components[1].color}
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* Intake System - Front roller */}
      <group position={components[2].position}>
        <Box args={[0.8, 0.2, 0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color={getComponentColor(components[2], '#555')}
            emissive={components[2].color}
            emissiveIntensity={getEmissiveIntensity(components[2])}
            metalness={0.5}
            roughness={0.5}
          />
        </Box>
        {/* Intake rollers */}
        <mesh position={[0, 0, 0.15]} rotation={[0, 0, Math.PI/2]}>
          <cylinderGeometry args={[0.08, 0.08, 0.8]} />
          <meshStandardMaterial 
            color={getComponentColor(components[2], '#777')}
            emissive={components[2].color}
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>

      {/* Control Hub - RoboRIO and electronics */}
      <Box args={[0.6, 0.3, 0.4]} position={components[3].position}>
        <meshStandardMaterial 
          color={getComponentColor(components[3], '#666')}
          emissive={components[3].color}
          emissiveIntensity={getEmissiveIntensity(components[3])}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>

      {/* Vision System - Limelight camera */}
      <group position={components[4].position}>
        <Box args={[0.2, 0.15, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color={getComponentColor(components[4], '#777')}
            emissive={components[4].color}
            emissiveIntensity={getEmissiveIntensity(components[4])}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
        {/* Camera lens */}
        <mesh position={[0, 0, 0.08]}>
          <cylinderGeometry args={[0.05, 0.05, 0.04]} />
          <meshStandardMaterial color="#1a1a1a" emissive="#3b82f6" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* Battery */}
      <Box args={[0.4, 0.2, 0.6]} position={[0, 0.15, -0.8]}>
        <meshStandardMaterial 
          color="#2a2a2a" 
          emissive="#ffaa00"
          emissiveIntensity={0.1}
          metalness={0.3}
          roughness={0.7}
        />
      </Box>

      {/* Interactive Areas */}
      {components.map((component) => (
        <mesh
          key={`interactive-${component.name}`}
          position={component.position}
          onPointerEnter={() => setHoveredComponent(component.name)}
          onPointerLeave={() => setHoveredComponent(null)}
        >
          <sphereGeometry args={[0.5]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      ))}
    </group>
  )
}

export default function RobotStatus() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null)

  const components: ComponentStatus[] = [
    {
      name: 'Swerve Drive',
      status: 85,
      nextAction: 'Calibrate wheel encoders',
      position: [0, -0.8, 0],
      labelPosition: [0, 0, 0], // Not used - status panel is fixed
      color: '#ef4444'
    },
    {
      name: 'Shooter/Arm',
      status: 92,
      nextAction: 'Test pivot mechanism',
      position: [0, 0.8, -1.2],
      labelPosition: [0, 0, 0], // Not used - status panel is fixed
      color: '#f97316'
    },
    {
      name: 'Intake',
      status: 78,
      nextAction: 'Replace intake rollers',
      position: [0, 0.2, 1.5],
      labelPosition: [0, 0, 0], // Not used - status panel is fixed
      color: '#eab308'
    },
    {
      name: 'Control Hub',
      status: 96,
      nextAction: 'Deploy final code',
      position: [0, 0.3, 0],
      labelPosition: [0, 0, 0], // Not used - status panel is fixed
      color: '#22c55e'
    },
    {
      name: 'Vision/Limelight',
      status: 88,
      nextAction: 'Calibrate AprilTags',
      position: [0, 0.6, 0.8],
      labelPosition: [0, 0, 0], // Not used - status panel is fixed
      color: '#3b82f6'
    }
  ]

  return (
    <section id="robot" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white mb-4">
            ROBOT <span className="text-red-500">STATUS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-time 3D monitoring of all robot subsystems. Hover over components to view detailed status and next actions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 3D Robot Visualization - Takes up 2/3 of the width */}
          <div className="lg:col-span-2 relative h-[600px] lg:h-[800px] bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg border border-red-500/20 overflow-hidden">
            <Canvas camera={{ position: [8, 5, 8], fov: 60 }}>
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={0.8} />
              <pointLight position={[-10, -10, -10]} color="#ef4444" intensity={0.4} />
              <spotLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />
              <Robot 
                components={components}
                hoveredComponent={hoveredComponent}
                setHoveredComponent={setHoveredComponent}
              />
              <OrbitControls 
                enableZoom={true} 
                enablePan={true} 
                minDistance={4}
                maxDistance={25}
                autoRotate={false}
                enableDamping={true}
                dampingFactor={0.05}
                rotateSpeed={0.8}
                zoomSpeed={1.2}
                panSpeed={0.8}
                touches={{
                  ONE: 2, // Rotate
                  TWO: 1  // Zoom
                }}
              />
            </Canvas>
            
            {/* Overlay instructions */}
            <div className="absolute top-4 left-4 bg-black/90 p-3 lg:p-4 rounded-lg border border-red-500/30 max-w-[200px]">
              <p className="text-white text-xs lg:text-sm font-mono mb-2">CONTROLS:</p>
              <p className="text-gray-400 text-xs font-mono">• Touch/drag to rotate</p>
              <p className="text-gray-400 text-xs font-mono">• Pinch/scroll to zoom</p>
              <p className="text-gray-400 text-xs font-mono hidden lg:block">• Hover components for status</p>
              <p className="text-gray-400 text-xs font-mono lg:hidden">• Tap components for status</p>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-black/90 p-3 lg:p-4 rounded-lg border border-red-500/30 max-w-[180px]">
              <p className="text-white text-xs lg:text-sm font-mono mb-2">STATUS:</p>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded"></div>
                  <span className="text-gray-400 text-xs font-mono">90-100% Optimal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded"></div>
                  <span className="text-gray-400 text-xs font-mono">70-89% Good</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded"></div>
                  <span className="text-gray-400 text-xs font-mono">&lt;70% Attention</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Status Panel - Right Side */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl font-mono mb-6 text-center">SYSTEM STATUS</h3>
            
            {/* Component Status Cards */}
            {components.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border rounded-lg p-4 transition-all duration-300 cursor-pointer ${
                  hoveredComponent === component.name 
                    ? 'bg-black/70 border-red-500 shadow-lg' 
                    : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                }`}
                style={{
                  boxShadow: hoveredComponent === component.name 
                    ? `0 0 20px ${component.color}40` 
                    : 'none'
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-white font-bold text-sm font-mono">{component.name}</h4>
                  <span 
                    className="text-xs font-mono px-2 py-1 rounded"
                    style={{ 
                      backgroundColor: `${component.color}20`,
                      color: component.color,
                      border: `1px solid ${component.color}40`
                    }}
                  >
                    {component.status}%
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        backgroundColor: component.color,
                        boxShadow: hoveredComponent === component.name 
                          ? `0 0 8px ${component.color}` 
                          : `0 0 4px ${component.color}`
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${component.status}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
                
                <div>
                  <span className="text-gray-400 text-xs">Next Action:</span>
                  <p className="text-gray-300 text-xs mt-1 leading-tight">{component.nextAction}</p>
                </div>
              </motion.div>
            ))}

            {/* Overall Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-black/70 border border-red-500/50 rounded-lg p-4 mt-6"
            >
              <h4 className="text-white font-bold text-lg mb-3 font-mono text-center">OVERALL STATUS</h4>
              <div className="flex items-center space-x-3">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 font-mono text-sm">Robot Readiness</span>
                    <span className="text-red-500 font-bold font-mono text-sm">88%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                      style={{ boxShadow: '0 0 8px #ef4444' }}
                      initial={{ width: 0 }}
                      animate={{ width: '88%' }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    />
                  </div>
                </div>
                <div className="text-green-500">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}