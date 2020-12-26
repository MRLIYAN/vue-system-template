import settings from '@/settings.js'

let pageTitle = ''

export function setPageTitle(title){
    if(title){
        pageTitle = title + "-" + settings.title||"vue-system-template"
    }else{
        pageTitle = settings.title||"vue-system-template"
    }
    document.title = pageTitle;
}