(function() {

    function StupidSlider(el, options) {

        var slides, currentIndex, activeSlide, nextCtrl, prevCtrl;

        function init() {

            // Locals
            slides       = el.children();
            activeSlide  = $(); // Default to empty object, prevent blow up
            currentIndex = 0;

            el.removeClass("no-transition");

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
            nextCtrl = $("<a>", {
                "href": "#",
                "class": options.nextCtrlClass || "stupid-next",
                "text": options.nextText || "Next"
            }).on("click", function(e) {
                e.preventDefault();
                next();
            });

            prevCtrl = $("<a>", {
                "href": "#",
                "class": options.prevCtrlClass || "stupid-prev",
                "text": options.prevText || "Previous"
            }).on("click", function(e) {
                e.preventDefault();
                previous();
            });

            el.after(prevCtrl, nextCtrl);
        }


        /**
         * Go to a slide
         * @param  {int} index Index
         * @return {undefiend}
         */
        function goToSlide(index) {

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
         * Navigate to next slides
         * @return undefined
         */
        function next() {
            if ((currentIndex + 1) < slides.length) {
                goToSlide(currentIndex + 1);
            }else if ((currentIndex + 1) === slides.length && options.loop) {

                // Disable Transitions
                el.addClass("no-transition");

                // Shift Slides Around
                el.prepend(slides.last().remove());
                slides = el.children().removeClass("old");

                // Reset Index
                currentIndex = 0;

                // Trigger Reflow
                el[0].offsetHeight += 0;

                // Allow Transitions
                el.removeClass("no-transition");

                // Go!
                next();
            }
        }


        /**
         * Navigate to previous slide
         * @return undefiend
         */
        function previous() {
            if ((currentIndex - 1) >= 0) {
                goToSlide(currentIndex - 1);
            }else if ((currentIndex - 1) === -1 && options.loop) {
                // Disable Transitions
                el.addClass("no-transition");

                // Shift Slides Around
                slides.removeClass("old");
                el.prepend(slides.last().addClass("old").remove());
                slides = el.children();

                // Reset Index
                currentIndex = 0;

                // Trigger Reflow
                el[0].offsetHeight += 0;

                // Allow Transitions
                el.removeClass("no-transition");

                // Go!
                goToSlide(0);
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
            return this.data("stupidSlider", new StupidSlider(this, options || {}));
        }else if (typeof options === "string") {
            // Slider already instanciated, attempt to run argument as command
            return this.data("stupidSlider")[options]();
        }
    };

}());
