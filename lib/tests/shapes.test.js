const Shape = require('../shapes.js'); 

describe('Shape', ()=>{
    describe('Circle', ()=>{
        it('returns wheter or not SVG contains characters from user input', ()=>{
            const newLogo = new Shape.Circle('red', 'bma', 'blue');
            const newSvg = newLogo.drawShape();
            expect(newSvg).toContain('bma');
        });
    });
});

describe('Shape', ()=>{
    describe('Triangle', ()=>{
        it('returns wheter or not SVG contains name of shape color from user input', ()=>{
            const newLogo = new Shape.Triangle('red', 'bma', 'blue');
            const newSvg = newLogo.drawShape();
            expect(newSvg).toContain('red');
        });
    });
});

describe('Shape', ()=>{
    describe('Circle', ()=>{
        it('returns whether or not SVG contains name of text color from user input', ()=>{
            const newLogo = new Shape.Square('red', 'bma', 'blue');
            const newSvg = newLogo.drawShape();
            expect(newSvg).toContain('blue');
        });
    });
});