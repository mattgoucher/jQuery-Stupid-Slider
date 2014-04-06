### Stupid Slider
A slider built to harness CSS transitions, instead of slow javascript ones. It will toggle classes on your slide elements, and shift the elements around to create a seamless, loopable slider. Wanna see for yourself? Check out this [Live Demo](http://mattgoucher.com/jquery.stupid-slider/)

*Why?* It's 2014, man. Lets add transitions to everything.

#### Options

	interval          {integer}   default: false            Number of milliseconds before going to next slide
	hoverPause        {bool}      default: false            Stop the timer (interval) when hovering over the slider
    loop              {bool}      default: false            Should the slider loop back and forth
    nextAndPrev       {bool}      default: false            Adds "next" and "prev" buttons
    controls          {bool}      default: false            "1 2 3" style controls
        
    nextText          {string}    default: "Next"               What does the next button say
    prevText          {string}    default: "Prev"               What does the prev button say
    nextCtrlClass     {string}    default: "stupid-next"        Classname applied to the next button
    prevCtrlClass     {string}    default: "stupid-prev"        Classname applied to the prev button
	controlsClass     {string}    default: "stupid-controls"    Classname applied to the controls wrapper
	controlItemClass  {string}    default: "stupid-control"     Classname applied to each control
	controlItemText   {string}    default: slide index (int)    The text (or innerHtml) of each control

#### Contributing
This project utilizes [Grunt JS](http://gruntjs.com/) to compile/minify javascripts. If you haven't already, read the [getting started guide](http://gruntjs.com/getting-started). After Grunt has been installed, open your terminal, and cd into the project directory. Then:

```shell
$ sudo npm install
$ grunt
```

Running ``grunt`` will minify javascripts, and place them in the correct directories, **once**. If you would like to "watch" for changes as you work, run ``grunt watch``.


#### Notes
* Want to remove the transition to the first slide on init? Add a "no-transition" class to your slider (include the [proper css](https://github.com/mattgoucher/jQuery-Stupid-Slider/blob/master/css/sample.css#L36)). After the plugin is initialized, we'll remove the class for ya.
