### Stupid Slider
A slider built to harness CSS transitions, instead of slow javascript ones. It will toggle classes on your slide elements, and shift the elements around to create a seamless, loopable slider. Wanna see for yourself? Check out this [Live Demo](http://mattgoucher.com/jquery.stupid-slider/)

*Why?* It's 2014, man. Lets add transitions to everything. Also, the plugin is less than **2k**

#### Options

    loop              {bool}      default: false            Should the slider loop back and forth
    includeButtons    {bool}      default: false            Adds "next" and "prev" buttons
        
    nextText          {string}    default: "Next"           What does the next button say
    prevText          {string}    default: "Prev"           What does the prev button say
    nextCtrlClass     {string}    default: "stupid-next"    Classname applied to the next button
    prevCtrlClass     {string}    default: "stupid-prev"    Classname applied to the prev button

#### Notes
* Want to remove the transition to the first slide on init? Add a "no-transition" class to your slider (include the [proper css](https://github.com/mattgoucher/jQuery-Stupid-Slider/blob/master/css/sample.css#L36)). After the plugin is initialized, we'll remove the class for ya.
