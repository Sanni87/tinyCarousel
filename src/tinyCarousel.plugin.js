const TinyCarousel = function (paramOptions) {
    const AUTO_MOVE_TIME_MS = 5000;
    const defaultOptions = {
        sliderSelector: '.jslider',
        itemSelector: '.jitem',
        loop: true,
        autoMove: true
    };
    const options = Object.assign({}, defaultOptions, paramOptions);
    let currentItem = getsliderItems()[0];
    let autoMoveTimer;

    if (options.loop){
        configureLoop();
    }

    if (options.autoMove){
        initAutoMoveTimer();
    }


    function configureLoop(){
        //TODO
    }

    function initAutoMoveTimer(){
        clearTimeout(autoMoveTimer);
        autoMoveTimer = setInterval(viewNextItem, AUTO_MOVE_TIME_MS);
    }

    function viewNextItem(){
        let nextCandidate = currentItem.nextElementSibling;
        if (nextCandidate){
            currentItem = getsliderItems()[0];
        }
        viewItem(currentItem);
    }

    function viewItem(element) {
        let widthToScroll = 0;

        const allItems = getsliderItems();
        if (allItems?.length){
            for (const item of allItems) {
                if (item == element) {
                    break;
                } else {
                    widthToScroll += outerWidthWithMargin(item);
                }
            }
        }

        animateLeft(widthToScroll);
    }

    function animateLeft(widthToScroll){
        getSlider().scroll({
            left: widthToScroll,
            behavior: 'smooth'
        });
    }

    function getSlider(){
        return document.querySelector(options.sliderSelector);
    }

    function getsliderItems(){
        return getSlider().querySelectorAll(options.itemSelector);
    }

    function outerWidthWithMargin(el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
      
        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
        return width;
    }

    return {
        //Test public functions
        getSlider,
        getsliderItems,
        viewItem
    };
};

export default TinyCarousel;