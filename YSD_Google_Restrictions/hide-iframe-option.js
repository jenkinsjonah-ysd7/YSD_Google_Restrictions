// Written by Jonah Jenkins with help from Claude AI

(function(){
    'use strict';
    const TARGETS = [
        { // Add YouTube video in Slides
            tabName: 'YouTube',
            iFrameName: 'Insert video',
            newTab: 'Google Drive'
        },
        { // Add image by URL in Forms
            tabName: 'By URL',
            iFrameName: 'Insert image',
            newTab: 'Upload'
        },
        { // Add image by URL in Sheets
            tabName: 'Link',
            iFrameName: 'Insert image',
            newTab: 'Upload'
        }
    ];

    function hideiFrameOption(){
        for(const TARGET of TARGETS){
            if(!document.querySelectorAll(`[role="dialog"][aria-label="${TARGET.iFrameName}"]`)) break;

            const options = document.querySelectorAll('[role="option"]');

            for(const option of options){
                if(option.textContent === TARGET.tabName && option.getAttribute('aria-selected') === 'true'){
                    option.style.setProperty('display', 'none', 'important');
                    const newTab = [...options].find(o => o.textContent === TARGET.newTab);
                    if(newTab) newTab.click();
                }
            }
        }
    }

    function start(){
        hideiFrameOption();

        const observer = new MutationObserver(hideiFrameOption);

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