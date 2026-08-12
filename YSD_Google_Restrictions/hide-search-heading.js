// Written by Jonah Jenkins with help from Claude AI

(function(){
    'use strict';

    const TARGETS = [
        'AI Overview', // AI Overview in Google Search
        'People also ask' // Contains multiple AI Overviews in Google Search
    ]; 

    const BAD_IDS = ['search','rso','center_col'];

    function hideSearchHeading(){
        const headings = document.querySelectorAll('[role="heading"]');
        for(const TARGET of TARGETS){
            for(const heading of headings){
                if(heading.textContent === TARGET){

                    let node = heading;
                    
                    for(let i = 0; i < 6 && node && node.parentElement; i++){
                        node = node.parentElement;
                        if(!node || BAD_IDS.includes(node.id) || node.tagName === 'BODY'){
                            node = null;
                            break;
                        }else{
                            node.style.setProperty('display', 'none', 'important');
                        }
                    }
                }
            }
        }
    }

    function start(){
        hideSearchHeading();

        const observer = new MutationObserver(hideSearchHeading);

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', start);
    }else{
        start();
    }
})();