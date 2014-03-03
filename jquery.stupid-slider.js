(function() {

    function StupidSlider(el, options) {

        var slides, currentIndex, activeSlide, nextCtrl, prevCtrl;

        function init() {

            // Locals
            slides       = el.children();
            activeSlide  = $(); // Default to empty object, prevent blow up
            currentIndex = 0;

            if (options.includeButtons) {
                makeControls();
            }

            // Go To First Slide
            goToSlide(currentIndex);
        }


        /**
         * Create next/prev controls
         * @return {undefiend}
         */
        function makeControls() {
            console.log('controls');
            nextCtrl = $("<button>", {
                "class": options.nextCtrlClass || "stupid-next",
                "text": options.nextText || "Next"
            }).on("click", next);

            prevCtrl = $("<button>", {
                "class": options.prevCtrlClass || "stupid-prev",
                "text": options.nextText || "Previous"
            }).on("click", previous);

            el.after(prevCtrl, nextCtrl);
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
            }
        }


        /**
         * Navigate to previous slide
         * @return undefiend
         */
        function previous() {
            if ((currentIndex - 1) >= 0) {
                goToSlide(currentIndex - 1);
            }
        }


        /**
         * Tear down the slider
         * @return true
         */
        function destroy() {

            // Remove classnames
            el.removeData("stupidSlider").removeClass("no-transition");
            slides.removeClass("visible old");

            // Remove Controls
            if (options.includeButtons) {
                nextCtrl.unbind().remove();
                prevCtrl.unbind().remove();
            }

            // Reset
            activeSlice = slides = nextCtrl = prevCtrl = el = null;

            return true;
        }


        /**
         * Get the current slide index
         * @return {int} slide index
         */
        function getCurrentSlide() {
            return currentIndex;
        }


        // Initialize Slider
        init();

        // Release Public API
        return {
            "next": next,
            "previous": previous,
            "getCurrentSlide": getCurrentSlide,
            "destroy": destroy
        };
    }


    // jQuery Public
    $.fn.stupidSlider = function(options) {
        if (!this.data("stupidSlider")) {
            return this.data("stupidSlider", new StupidSlider(this, options));
        }else if (typeof options === "string") {
            // Slider already instanciated, attempt to run argument as command
            return this.data("stupidSlider")[options]();
        }
    };

}());
