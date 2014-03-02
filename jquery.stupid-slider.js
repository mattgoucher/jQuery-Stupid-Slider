(function() {

    function StupidSlider(el, options) {

        var slides, currentIndex, activeSlide;

        function init() {

            // Locals
            slides       = el.children();
            activeSlide  = $(); // Default to empty object, prevent blow up
            currentIndex = 0;

            // Go To First Slide
            goToSlide(currentIndex);
        }


        /**
         * Go to a slide
         * @param  {int} index Index
         * @return {undefiend}
         */
        function goToSlide(index, direction) {

            // We're OK to transition
            el.removeClass("no-transition");

            // Are we going left or right?
            if (index > currentIndex) {
                activeSlide.removeClass("visible").addClass("old");
                activeSlide = slides.eq(index).addClass("visible").removeClass("old");
            }else{
                activeSlide.removeClass("visible");
                activeSlide = slides.eq(index).addClass("visible").removeClass("old");
            }

            // Make Sure We Remeber Where We Are
            currentIndex = index;
        }


        /**
         * Navigate to next slide
         * @return undefined
         */
        function next() {
            if ((currentIndex + 1) < slides.length) {
                goToSlide(currentIndex + 1);
            }else{
                // We need to loop back to the beginging
            }
        }


        /**
         * Navigate to previous slide
         * @return undefiend
         */
        function previous() {
            if ((currentIndex - 1) >= 0) {
                goToSlide(currentIndex - 1);
            }else{
                // We need to loop back to the beginging
            }
        }


        // Initialize Slider
        init();

        // Release Public API
        return {
            "next": next,
            "previous": previous
        };
    }


    // jQuery Public
    $.fn.stupidSlider = function(options) {
        if (!this.data("stupidSlider")) {
            return this.data("stupidSlider", new StupidSlider(this, options));
        }
    };

}());
