// Art page canvas color picker functionality
function setupEditableCanvas(canvasId, imgSrc, whiteInputId, blackInputId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imgSrc;

    const whiteInput = document.getElementById(whiteInputId);
    const blackInput = document.getElementById(blackInputId);

    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        drawCanvas();
    };

    whiteInput.addEventListener('input', drawCanvas);
    blackInput.addEventListener('input', drawCanvas);

    function drawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        const carvedColor = hexToRgb(whiteInput.value);
        const notCarvedColor = hexToRgb(blackInput.value);

        for (let i = 0; i < data.length; i += 4) {
            const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
            if (brightness > 200) {
                data[i] = carvedColor.r;
                data[i + 1] = carvedColor.g;
                data[i + 2] = carvedColor.b;
            } else {
                data[i] = notCarvedColor.r;
                data[i + 1] = notCarvedColor.g;
                data[i + 2] = notCarvedColor.b;
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }

    function hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        let bigint = parseInt(hex, 16);
        if (hex.length === 6) {
            return {r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255};
        } else if (hex.length === 3) {
            return {r: ((bigint >> 8) & 15) * 17, g: ((bigint >> 4) & 15) * 17, b: (bigint & 15) * 17};
        }
    }
}

// Initialize all editable canvases when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setupEditableCanvas('loonCanvas', '../assets/images/art/linocuts/loon.webp', 'loonWhite', 'loonBlack');
    setupEditableCanvas('pygmyowlCanvas', '../assets/images/art/linocuts/pygmyowl.webp', 'whiteColor', 'blackColor');
    setupEditableCanvas('coyoteCanvas', '../assets/images/art/linocuts/wintercoyote.webp', 'coyoteWhite', 'coyoteBlack');
    setupEditableCanvas('cardinalCanvas', '../assets/images/art/linocuts/cardinal.webp', 'cardinalWhite', 'cardinalBlack');
    setupEditableCanvas('barnowlCanvas', '../assets/images/art/linocuts/barnowl.webp', 'barnowlWhite', 'barnowlBlack');
    setupEditableCanvas('creeperCanvas', '../assets/images/art/linocuts/creeper.webp', 'creeperWhite', 'creeperBlack');
    setupEditableCanvas('chickadeeCanvas', '../assets/images/art/linocuts/chickadee.webp', 'chickadeeWhite', 'chickadeeBlack');
    setupEditableCanvas('willowCanvas', '../assets/images/art/linocuts/willowtree.webp', 'willowWhite', 'willowBlack');
});
