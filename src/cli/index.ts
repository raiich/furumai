import * as fs from 'fs'
import * as process from 'process'
import {makeSnapshots} from '../furumai/main'
import {toSVGElement} from '../svg'
import {JSDOM} from 'jsdom'

const dom = new JSDOM()
const d = dom.window.document

//const content = fs.readFileSync(process.stdin.fd, 'utf8')
const content = `
---
mode: snapshot
style: |
 .group, .zone { label: ''; }
---

group clients {
  zone real {
    User[shape='person'];
  };
  zone pc {
    Browser;
  }
};

group servers {
  zone AS {
    Authorizer;
  };
  zone RP {
    Service;
  }
}
---

Browser -> Service [t='request a service',dx=-16px];
Service -> Browser [t='reply: 303 https://[authorizer url..]', dx=16px];
---

Browser -> Authorizer[t='request auth page', dx=-20px, dy=-20px];
Authorizer -> Browser [t='reply input form', dx='10', dy='20'];
---

User -> Browser [t='input id/password'];
Browser -> Authorizer[t='send id/password'];
`



let snapshots = makeSnapshots(content)
snapshots.forEach((snapshot) => {
  console.log(toSVGElement(snapshot, d).outerHTML)
})
