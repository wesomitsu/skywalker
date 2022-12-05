if(jQuery('.card.current--card').attr('style').indexOf('z-index: 0') > 9){
    jQuery('.card.current--card').attr('style','--card-translateY-offset:0%; --current-card-rotation-offset:0; z-index:99999;');
}