// Written by Jonah Jenkins with help from Claude AI

(function(){
    'use strict';

    const TARGETS = [
        'button[aria-label="Add YouTube video"]', // Button to add YouTube video to Classroom announcement 
        '[role="button"][aria-label="Add video"]', // Button to add YouTube video to Forms
        '[role="button"][aria-label="Thumbnail preview for the linked URL."]' // Link previews in Docs, Slides, and Sheets
    ];

    function hideSimpleElement(){
        const elements = document.querySelectorAll(TARGETS);

        for(const element of elements){
            element.style.setProperty('display', 'none', 'important');
        }
    }

    function start(){
        hideSimpleElement();

        const observer = new MutationObserver(hideSimpleElement);

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