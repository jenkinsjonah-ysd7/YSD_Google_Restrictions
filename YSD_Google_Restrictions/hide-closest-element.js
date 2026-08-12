// Written by Jonah Jenkins with help from Claude AI

(function(){
    'use strict';

    const TARGETS = [
        { // Insert image "By URL" in Slides & Docs
            query: '.goog-menuitem-label[aria-label="By URL b"]',
            closest: '[role="menuitem"]'
        },
        { // "Games From Google" in Google Search
            query: 'div[data-bkt="google_arcade"][data-maindata*="Funbox"]',
            closest: 'block-component'
        }
    ];

    function hideClosestElement(){
        for(const TARGET of TARGETS){
            const elements = document.querySelectorAll(TARGET.query);
        
            for(const element of elements){
                const closest = element.closest(TARGET.closest);
                if(closest) closest.style.setProperty('display', 'none', 'important');
            }
        }   
    }

    function start(){
        hideClosestElement();

        const observer = new MutationObserver(hideClosestElement);

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