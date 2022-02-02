import './style.css'
import * as THREE from 'three'

//**************Creazione elemento canvas

const canvas = document.querySelector('canvas.webgl')
//Assegnazione dimensioni
const sizes = {
    height: window.innerHeight, //stessa altezza della finestra
    width: window.innerWidth //stessa larghezza della finestra
}
//ridimensionamento finestra
window.addEventListener('resize', () => {
    //update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    //update renderer
    renderer.setSize(sizes.width, sizes.height)
    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
})

//renderer

const renderer = new THREE.WebGLRenderer({canvas:canvas})
renderer.setSize(sizes.width, sizes.height)

//scena

const scene = new THREE.Scene()

//camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)


//************creazione cubino
//geometry + material = mesh

//geometry

const geometry = new THREE.BoxGeometry(1, 1, 1)

//material

const material = new THREE.MeshBasicMaterial({color: 'red'})

//mesh

const mesh = new THREE.Mesh(geometry, material)
mesh.rotation.y = 45
scene.add(mesh)




//rendering

const clock = new THREE.Clock()

const rendering = () => {
    //clock
    const elapsedTime = clock.getElapsedTime()
    //update object
    mesh.rotation.y = elapsedTime
    mesh.rotation.x = elapsedTime
    mesh.position.y = Math.sin(elapsedTime)
    mesh.position.x = Math.cos(elapsedTime)
    //render
    renderer.render(scene, camera)
    //call rendering
    window.requestAnimationFrame(rendering)
}
rendering()


