export default class Canvas {
    static setCanvas() {
        const element = document.getElementById('canvas')
        
        if (!element || !(element instanceof HTMLCanvasElement)) {
            throw new Error('Canvas element not found or is not a canvas element')
        }
        
        const canvas = element
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        window.onresize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener("orientationchange", () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }, false)

        return canvas
    }
}