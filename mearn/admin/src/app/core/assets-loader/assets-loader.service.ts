import { Injectable } from "@angular/core";
import { ScriptStore, LinkStore } from "./assets-list";

declare var document: any;

@Injectable()
export class ScriptService {

    public scripts: any = {};
    public links: any = {};

    constructor() {
        ScriptStore.forEach((script: any) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
                defer: script.defer
            };
        });

        LinkStore.forEach((links: any) => {
            this.links[links.name] = {
                loaded: false,
                rel: links.rel,
                type: links.type,
                href: links.href
            };
        });

        this.removeExistScript();
    }

    scriptLoad(scripts: string[]) {
        var promises: any[] = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }

    linksLoad(links: string[]) {
        var promises: any[] = [];
        links.forEach((link) => promises.push(this.loadLinks(link)));
        return Promise.all(promises);
    }

    removeExistScript() {
        var elements = document.querySelectorAll('#injected-script');
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
        }

        var elements = document.querySelectorAll('#injected-links');
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
        }
    }

    loadLinks(name: string) {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = this.links[name].rel;
            link.type = this.links[name].type;
            link.href = this.links[name].href;
            link.class = "injected-links";
            link.media = 'all';

            const head = document.getElementsByTagName('head')[0];
            resolve({ link: name, loaded: true });
            document.getElementsByTagName('head')[0].appendChild(link);
        });
    }

    loadScript(name: string) {
        return new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = this.scripts[name].src;
            script.id = 'injected-script';

            if (this.scripts[name].defer) {
                script.defer = true;
            }

            if (script.readyState) {
                script.onreadystatechange = () => {
                    if (script.readyState === "loaded" || script.readyState === "complete") {
                        script.onreadystatechange = null;
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, block: 'IE' });
                    }
                };
            } else {
                script.onload = () => {
                    this.scripts[name].loaded = true;
                    resolve({ script: name, loaded: true, block: 'Other' });
                };
            }
            script.onerror = (error: any) => resolve({ script: name, loaded: false, block: 'OnError' });
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }
}
