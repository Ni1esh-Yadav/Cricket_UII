import { useSphere } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const count = 1
const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.SphereGeometry(3, 32, 32) // Base size
const baubleMaterial = new THREE.MeshStandardMaterial({ color: "white", roughness: 0, envMapIntensity: 1 })

export default function Clump({ mat = new THREE.Matrix4(), vec = new THREE.Vector3(), ...props }) {

    const { size, viewport } = useThree() // Access window size and viewport
    const texture = useTexture('logo.jpeg')

    // Dynamically adjust the sphere scale based on window size
    const dynamicScale = Math.min(viewport.width / 10, viewport.height / 10) // Adjust scale based on width and height

    const [ref, api] = useSphere(() => ({
        args: [1], // Sphere radius
        mass: 1,
        angularDamping: 0.1,
        linearDamping: 0.65,
        position: [rfs(20), rfs(20), rfs(20)],
    }))

    useFrame(() => {
        for (let i = 0; i < count; i++) {
            // Get current sphere
            ref.current.getMatrixAt(i, mat)
            // Apply force towards the center
            api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(), [0, 0, 0])
        }
    })

    return (
        <instancedMesh
            ref={ref}
            castShadow
            receiveShadow
            args={[sphereGeometry, baubleMaterial, count]}
            material-map={texture}
            scale={dynamicScale} // Scale the sphere based on the window size
        >
        </instancedMesh>
    )
}
