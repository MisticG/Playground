var myLibrary = function() {
    
    
    /**Calculates the rectangle Area*
     * 
     * @param width {number}
     * @param height {number}
     * @returns the area of the rectangle
    */


    function rectangleCalc(width, height) {
        return width * height;
    }

    /**Calculates the triangle area *
     * @param base {number}
     * @param height {number}
     * @param divided by 2
     * @returns the area of triangle
     */

    function triangleCalc(base, height) {
        return base * height / 2;
    }

    /**Calculates the circle Area *
     *@param MathPi {Math.PI} 
    *@param radius {number}
    *@returns the area of circle
    */

    function circleCalc(radius) {
        return Math.PI * radius * radius;
    }

   return {
    rectangleCalc: rectangleCalc,
    triangleCalc: triangleCalc,
    circleCalc: circleCalc
   };


};
