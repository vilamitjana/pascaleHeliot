// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
    // add listener to track the current mouse position
    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    // transform the innerCursor to the current mouse position
    // use requestAnimationFrame() for smooth performance
    const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        // if you are already using TweenMax in your project, you might as well
        // use TweenMax.set() instead
        // TweenMax.set(innerCursor, {
        //   x: clientX,
        //   y: clientY
        // });

        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

initCursor();


let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {

    const canvas = document.querySelector(".cursor--canvas");
    const shapeBounds = {
        width: 75,
        height: 75
    };
    paper.setup(canvas);
    const strokeColor = "rgba(255, 0, 0, 1)";
    const strokeWidth = 1;
    const segments = 8;
    const radius = 15;

    // we'll need these later for the noisy circle
    const noiseScale = 150; // speed
    const noiseRange = 4; // range of distortion
    let isNoisy = false; // state

    // the base shape for the noisy circle
    /*   const polygon = new paper.Path.RegularPolygon(
           new paper.Point(0, 0),
           segments,
           radius
       );*/



    // polygon.strokeColor = strokeColor;
    // polygon.strokeWidth = strokeWidth;
    // polygon.smooth();
    // group = new paper.Group([polygon]);
    // group.applyMatrix = false;
    // const noiseObjects = polygon.segments.map(() => new SimplexNoise());


    //  Test circule
    let myCircle = new paper.Path.Circle(new paper.Point(0, 0), radius);
    myCircle.fillColor = "rgba(255, 72, 40, 0)";
    myCircle.strokeColor = "rgba(255, 72, 40, 1)";
    myCircle.strokeWidth = 1;
    myCircle.smooth();
    groupCirclie = new paper.Group([myCircle]);
    groupCirclie.applyMatrix = false;

    const noiseObjectsCircle = myCircle.segments.map(() => new SimplexNoise());





    let bigCoordinates = [];

    // function for linear interpolation of values
    const lerp = (a, b, n) => {
        return (1 - n) * a + n * b;
    };

    // function to map a value from one range to another range
    const map = (value, in_min, in_max, out_min, out_max) => {
        return (
            ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        );
    };

    // the draw loop of Paper.js 
    // (60fps with requestAnimationFrame under the hood)
    paper.view.onFrame = event => {

        // using linear interpolation, the circle will move 0.2 (20%)
        // of the distance between its current position and the mouse
        // coordinates per Frame
        if (!isStuck) {
            // move circle around normally
            lastX = lerp(lastX, clientX, 0.2);
            lastY = lerp(lastY, clientY, 0.2);
            groupCirclie.position = new paper.Point(lastX, lastY);
        } else if (isStuck) {
            // fixed position on a nav item
            lastX = lerp(lastX, stuckX, 0.2);
            lastY = lerp(lastY, stuckY, 0.2);
            groupCirclie.position = new paper.Point(lastX, lastY);
        }




        // if (isStuck && polygon.bounds.width < shapeBounds.width) {
        //     // scale up the shape 
        //     polygon.scale(1.08);
        // } else if (!isStuck && polygon.bounds.width > 30) {
        //     // remove noise
        //     if (isNoisy) {
        //         polygon.segments.forEach((segment, i) => {
        //             segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
        //         });
        //         isNoisy = false;
        //         bigCoordinates = [];
        //     }
        //     // scale down the shape
        //     const scaleDown = 0.92;
        //     polygon.scale(scaleDown);
        // }

        if (isStuck && myCircle.bounds.width < 75 && myCircle.bounds.width > 20) {
            // scale up the shape 
            myCircle.scale(0.92);
            myCircle.fillColor = "rgba(255, 72, 40, 0.5)";
        } else if (!isStuck && myCircle.bounds.width < 30) {
            // remove noise
            if (isNoisy) {
                myCircle.segments.forEach((segment, i) => {
                    segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
                });
                isNoisy = false;
                bigCoordinates = [];
            }
            // scale down the shape
            const scaleup = 1.08;
            myCircle.scale(scaleup);
            myCircle.fillColor = "rgba(255, 72, 40, 0)";
        }



        //  group.position = new paper.Point(lastX, lastY);
        groupCirclie.position = new paper.Point(lastX, lastY);
    }
}

initCanvas();


const initHovers = () => {

    // find the center of the link element and set stuckX and stuckY
    // these are needed to set the position of the noisy circle
    const handleMouseEnter = e => {
        const navItem = e.currentTarget;
        const navItemBox = navItem.getBoundingClientRect();
        stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
        stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
        isStuck = true;
    };

    // reset isStuck on mouseLeave
    const handleMouseLeave = () => {
        isStuck = false;
    };

    // add event listeners to all items
    const linkItems = document.querySelectorAll(".link");
    linkItems.forEach(item => {
        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);
    });
};

initHovers();