window.onload = () => {
    const images = getImages();

    const coverSize = 200;
    const rows = 2;
    const cols = 2;

    const canvasWidth = coverSize * cols;
    const canvasHeight = coverSize * rows;

    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext("2d");

    fillBackground(ctx, canvas, "#AAA");

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * coverSize;
            const y = row * coverSize;

            const img = new Image();
            img.onload = function () {
                ctx.drawImage(img, x, y, coverSize, coverSize);
            };

            // img.src = `https://dummyimage.com/${coverSize}x${coverSize}/000/fff&text=${x},${y}`;
            
            const imageIndex = (row * cols) + col;
            
            console.log(imageIndex)
            
            if (imageIndex + 1 > images.length) {
                break;
            }

            const imageSrc = images[imageIndex];
            img.src = imageSrc;
        }
    }
};

function fillBackground(ctx, canvas, color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function createCanvas(canvasWidth, canvasHeight) {
    const canvasContainer = document.querySelector(".canvas-container");

    const canvas = document.createElement('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    canvasContainer.appendChild(canvas);
    return canvas;
}
