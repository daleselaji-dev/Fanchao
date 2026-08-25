(()=>{var Rh=0,Kl=1,Ch=2;var yr=1,Za=2,Rs=3,ui=0,on=1,Te=2,Qn=0,Yi=1,Cn=2,Ql=3,jl=4,Ph=5;var Ci=100,Ih=101,Lh=102,Dh=103,Uh=104,Nh=200,Fh=201,Bh=202,Oh=203,ca=204,ha=205,Hh=206,kh=207,zh=208,Vh=209,Gh=210,Wh=211,Xh=212,qh=213,Yh=214,ua=0,da=1,fa=2,Zi=3,pa=4,ma=5,ga=6,xa=7,tc=0,Zh=1,$h=2,Pn=0,ec=1,nc=2,ic=3,sc=4,rc=5,ac=6,oc=7;var lc=300,Ui=301,ts=302,$a=303,Ja=304,vr=306,di=1e3,Dn=1001,_a=1002,sn=1003,Jh=1004;var Mr=1005;var Oe=1006,Ka=1007;var Ni=1008;var bn=1009,cc=1010,hc=1011,Cs=1012,Qa=1013,Gn=1014,Nn=1015,jn=1016,ja=1017,to=1018,Ps=1020,uc=35902,dc=35899,fc=1021,pc=1022,Fn=1023,Zn=1026,Fi=1027,eo=1028,no=1029,Bi=1030,io=1031;var so=1033,br=33776,Er=33777,Sr=33778,Tr=33779,ro=35840,ao=35841,oo=35842,lo=35843,co=36196,ho=37492,uo=37496,fo=37488,po=37489,wr=37490,mo=37491,go=37808,xo=37809,_o=37810,yo=37811,vo=37812,Mo=37813,bo=37814,Eo=37815,So=37816,To=37817,wo=37818,Ao=37819,Ro=37820,Co=37821,Po=36492,Io=36494,Lo=36495,Do=36283,Uo=36284,Ar=36285,No=36286;var Js=2300,ya=2301,la=2302,kl=2303,zl=2400,Vl=2401,Gl=2402;var Kh=3200;var Fo=0,Qh=1,yi="",Qe="srgb",Ks="srgb-linear",Qs="linear",_e="srgb";var Xi=7680;var Wl=519,jh=512,tu=513,eu=514,Bo=515,nu=516,iu=517,Oo=518,su=519,Xl=35044;var mc="300 es",Vn=2e3,bs=2001;function _d(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function yd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ru(){let s=js("canvas");return s.style.display="block",s}var th={},Es=null;function gc(...s){let t="THREE."+s.shift();Es?Es("log",t,...s):console.log(t,...s)}function au(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Wt(...s){s=au(s);let t="THREE."+s.shift();if(Es)Es("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function qt(...s){s=au(s);let t="THREE."+s.shift();if(Es)Es("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function qi(...s){let t=s.join(" ");t in th||(th[t]=!0,Wt(...s))}function ou(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var lu={[ua]:da,[fa]:ga,[pa]:xa,[Zi]:ma,[da]:ua,[ga]:fa,[xa]:pa,[ma]:Zi},$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=1234567,qs=Math.PI/180,$i=180/Math.PI;function Is(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[s&255]+un[s>>8&255]+un[s>>16&255]+un[s>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function xc(s,t){return(s%t+t)%t}function vd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Md(s,t,e){return s!==t?(e-s)/(t-s):0}function Ys(s,t,e){return(1-e)*s+e*t}function bd(s,t,e,n){return Ys(s,t,1-Math.exp(-e*n))}function Ed(s,t=1){return t-Math.abs(xc(s,t*2)-t)}function Sd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Td(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function wd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ad(s,t){return s+Math.random()*(t-s)}function Rd(s){return s*(.5-Math.random())}function Cd(s){s!==void 0&&(eh=s);let t=eh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pd(s){return s*qs}function Id(s){return s*$i}function Ld(s){return(s&s-1)===0&&s!==0}function Dd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ud(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Nd(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rn={DEG2RAD:qs,RAD2DEG:$i,generateUUID:Is,clamp:jt,euclideanModulo:xc,mapLinear:vd,inverseLerp:Md,lerp:Ys,damp:bd,pingpong:Ed,smoothstep:Sd,smootherstep:Td,randInt:wd,randFloat:Ad,randFloatSpread:Rd,seededRandom:Cd,degToRad:Pd,radToDeg:Id,isPowerOfTwo:Ld,ceilPowerOfTwo:Dd,floorPowerOfTwo:Ud,setQuaternionFromProperEuler:Nd,normalize:mn,denormalize:vs},Ct=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],p=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*y;g<0&&(u=-u,f=-f,p=-p,y=-y,g=-g);let m=1-o;if(g<.9995){let b=Math.acos(g),w=Math.sin(b);m=Math.sin(m*b)/w,o=Math.sin(o*b)/w,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+y*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+y*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ml.copy(this).projectOnVector(t),this.sub(ml)}reflect(t){return this.sub(ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ml=new R,nh=new Jn,Jt=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],y=i[0],g=i[3],m=i[6],b=i[1],w=i[4],v=i[7],S=i[2],E=i[5],C=i[8];return r[0]=a*y+o*b+l*S,r[3]=a*g+o*w+l*E,r[6]=a*m+o*v+l*C,r[1]=c*y+h*b+d*S,r[4]=c*g+h*w+d*E,r[7]=c*m+h*v+d*C,r[2]=u*y+f*b+p*S,r[5]=u*g+f*w+p*E,r[8]=u*m+f*v+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=d*y,t[1]=(i*c-h*n)*y,t[2]=(o*n-i*a)*y,t[3]=u*y,t[4]=(h*e-i*l)*y,t[5]=(i*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gl.makeScale(t,e)),this}rotate(t){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gl.makeRotation(-t)),this}translate(t,e){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},gl=new Jt,ih=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fd(){let s={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_e&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_e&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?Qs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ks]:{primaries:t,whitePoint:n,transfer:Qs,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),s}var oe=Fd();function hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var os,va=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{os===void 0&&(os=js("canvas")),os.width=t.width,os.height=t.height;let i=os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=js("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,Ss=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xl(i[a].image)):r.push(xl(i[a]))}else r=xl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function xl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?va.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var Od=0,_l=new R,gn=class s extends $n{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Dn,i=Dn,r=Oe,a=Ni,o=Fn,l=bn,c=s.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Is(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=lc;gn.DEFAULT_ANISOTROPY=1;var Ne=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,S=(m+1)/2,E=(h+u)/4,C=(d+y)/4,_=(p+g)/4;return w>v&&w>S?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=C/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=C/r,i=_/r),this.set(n,i,r,e),this}let b=Math.sqrt((g-p)*(g-p)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(d-y)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ma=class extends $n{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new gn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ss(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends Ma{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},tr=class extends gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ee=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,p,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,p,y,g)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,p,y,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,y=c*d;e[0]=u+y*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,y=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hd,t,kd)}lookAt(t,e,n){let i=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),bi.crossVectors(n,En),bi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),bi.crossVectors(n,En)),bi.normalize(),Hr.crossVectors(En,bi),i[0]=bi.x,i[4]=Hr.x,i[8]=En.x,i[1]=bi.y,i[5]=Hr.y,i[9]=En.y,i[2]=bi.z,i[6]=Hr.z,i[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],y=n[6],g=n[10],m=n[14],b=n[3],w=n[7],v=n[11],S=n[15],E=i[0],C=i[4],_=i[8],T=i[12],P=i[1],L=i[5],F=i[9],q=i[13],Y=i[2],k=i[6],$=i[10],Z=i[14],rt=i[3],lt=i[7],bt=i[11],wt=i[15];return r[0]=a*E+o*P+l*Y+c*rt,r[4]=a*C+o*L+l*k+c*lt,r[8]=a*_+o*F+l*$+c*bt,r[12]=a*T+o*q+l*Z+c*wt,r[1]=h*E+d*P+u*Y+f*rt,r[5]=h*C+d*L+u*k+f*lt,r[9]=h*_+d*F+u*$+f*bt,r[13]=h*T+d*q+u*Z+f*wt,r[2]=p*E+y*P+g*Y+m*rt,r[6]=p*C+y*L+g*k+m*lt,r[10]=p*_+y*F+g*$+m*bt,r[14]=p*T+y*q+g*Z+m*wt,r[3]=b*E+w*P+v*Y+S*rt,r[7]=b*C+w*L+v*k+S*lt,r[11]=b*_+w*F+v*$+S*bt,r[15]=b*T+w*q+v*Z+S*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],y=t[7],g=t[11],m=t[15],b=l*f-c*u,w=o*f-c*d,v=o*u-l*d,S=a*f-c*h,E=a*u-l*h,C=a*d-o*h;return e*(y*b-g*w+m*v)-n*(p*b-g*S+m*E)+i*(p*w-y*S+m*C)-r*(p*v-y*E+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],y=t[13],g=t[14],m=t[15],b=e*o-n*a,w=e*l-i*a,v=e*c-r*a,S=n*l-i*o,E=n*c-r*o,C=i*c-r*l,_=h*y-d*p,T=h*g-u*p,P=h*m-f*p,L=d*g-u*y,F=d*m-f*y,q=u*m-f*g,Y=b*q-w*F+v*L+S*P-E*T+C*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/Y;return t[0]=(o*q-l*F+c*L)*k,t[1]=(i*F-n*q-r*L)*k,t[2]=(y*C-g*E+m*S)*k,t[3]=(u*E-d*C-f*S)*k,t[4]=(l*P-a*q-c*T)*k,t[5]=(e*q-i*P+r*T)*k,t[6]=(g*v-p*C-m*w)*k,t[7]=(h*C-u*v+f*w)*k,t[8]=(a*F-o*P+c*_)*k,t[9]=(n*P-e*F-r*_)*k,t[10]=(p*E-y*v+m*b)*k,t[11]=(d*v-h*E-f*b)*k,t[12]=(o*T-a*L-l*_)*k,t[13]=(e*L-n*T+i*_)*k,t[14]=(y*w-p*S-g*b)*k,t[15]=(h*S-d*w+u*b)*k,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,y=a*h,g=a*d,m=o*d,b=l*c,w=l*h,v=l*d,S=n.x,E=n.y,C=n.z;return i[0]=(1-(y+m))*S,i[1]=(f+v)*S,i[2]=(p-w)*S,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(u+m))*E,i[6]=(g+b)*E,i[7]=0,i[8]=(p+w)*C,i[9]=(g-b)*C,i[10]=(1-(u+y))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ls.set(i[0],i[1],i[2]).length(),o=ls.set(i[4],i[5],i[6]).length(),l=ls.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Hn.copy(this);let c=1/a,h=1/o,d=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,e.setFromRotationMatrix(Hn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Vn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===Vn)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===bs)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Vn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===Vn)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===bs)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ls=new R,Hn=new Ee,Hd=new R(0,0,0),kd=new R(1,1,1),bi=new R,Hr=new R,En=new R,rh=new Ee,ah=new Jn,fi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zd=0,oh=new R,cs=new Jn,ri=new Ee,kr=new R,ks=new R,Vd=new R,Gd=new Jn,lh=new R(1,0,0),ch=new R(0,1,0),hh=new R(0,0,1),uh={type:"added"},Wd={type:"removed"},hs={type:"childadded",child:null},yl={type:"childremoved",child:null},He=class s extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new fi,n=new Jn,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Jt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(ch,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return oh.copy(t).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(ch,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ks,kr,this.up):ri.lookAt(kr,ks,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(ri),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),hs.child=t,this.dispatchEvent(hs),hs.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wd),yl.child=t,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};He.DEFAULT_UP=new R(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xd={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},zr={h:0,s:0,l:0};function vl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=xc(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vl(a,r,t+1/3),this.g=vl(a,r,t),this.b=vl(a,r,t-1/3)}return oe.colorSpaceToWorking(this,i),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return oe.workingToColorSpace(dn.copy(this),t),Math.round(jt(dn.r*255,0,255))*65536+Math.round(jt(dn.g*255,0,255))*256+Math.round(jt(dn.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(dn.copy(this),e);let n=dn.r,i=dn.g,r=dn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Qe){oe.workingToColorSpace(dn.copy(this),t);let e=dn.r,n=dn.g,i=dn.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(zr);let n=Ys(Ei.h,zr.h,e),i=Ys(Ei.s,zr.s,e),r=Ys(Ei.l,zr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Gt;Gt.NAMES=cu;var nr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var pi=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},kn=new R,ai=new R,Ml=new R,oi=new R,us=new R,ds=new R,dh=new R,bl=new R,El=new R,Sl=new R,Tl=new Ne,wl=new Ne,Al=new Ne,Ri=class s{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),kn.subVectors(t,e),i.cross(kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){kn.subVectors(i,e),ai.subVectors(n,e),Ml.subVectors(t,e);let a=kn.dot(kn),o=kn.dot(ai),l=kn.dot(Ml),c=ai.dot(ai),h=ai.dot(Ml),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Tl.setScalar(0),wl.setScalar(0),Al.setScalar(0),Tl.fromBufferAttribute(t,e),wl.fromBufferAttribute(t,n),Al.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Tl,r.x),a.addScaledVector(wl,r.y),a.addScaledVector(Al,r.z),a}static isFrontFacing(t,e,n,i){return kn.subVectors(n,e),ai.subVectors(t,e),kn.cross(ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),kn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;us.subVectors(i,n),ds.subVectors(r,n),bl.subVectors(t,n);let l=us.dot(bl),c=ds.dot(bl);if(l<=0&&c<=0)return e.copy(n);El.subVectors(t,i);let h=us.dot(El),d=ds.dot(El);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(us,a);Sl.subVectors(t,r);let f=us.dot(Sl),p=ds.dot(Sl);if(p>=0&&f<=p)return e.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(ds,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return dh.subVectors(r,i),o=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(dh,o);let m=1/(g+y+u);return a=y*m,o=u*m,e.copy(n).addScaledVector(us,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(t.matrixWorld),this.union(Vr)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Gr.subVectors(this.max,zs),fs.subVectors(t.a,zs),ps.subVectors(t.b,zs),ms.subVectors(t.c,zs),Si.subVectors(ps,fs),Ti.subVectors(ms,ps),zi.subVectors(fs,ms);let e=[0,-Si.z,Si.y,0,-Ti.z,Ti.y,0,-zi.z,zi.y,Si.z,0,-Si.x,Ti.z,0,-Ti.x,zi.z,0,-zi.x,-Si.y,Si.x,0,-Ti.y,Ti.x,0,-zi.y,zi.x,0];return!Rl(e,fs,ps,ms,Gr)||(e=[1,0,0,0,1,0,0,0,1],!Rl(e,fs,ps,ms,Gr))?!1:(Wr.crossVectors(Si,Ti),e=[Wr.x,Wr.y,Wr.z],Rl(e,fs,ps,ms,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},li=[new R,new R,new R,new R,new R,new R,new R,new R],zn=new R,Vr=new Kn,fs=new R,ps=new R,ms=new R,Si=new R,Ti=new R,zi=new R,zs=new R,Gr=new R,Wr=new R,Vi=new R;function Rl(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Vi.fromArray(s,r);let o=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var $e=new R,Xr=new Ct,qd=0,an=class extends $n{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),i=mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var ir=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var sr=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yd=new Kn,Vs=new R,Cl=new R,mi=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Cl)),this.expandByPoint(Vs.copy(t.center).sub(Cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zd=0,Ln=new Ee,Pl=new He,gs=new R,Sn=new Kn,Gs=new Kn,nn=new R,ke=class s extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_d(t)?sr:ir)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Pl.lookAt(t),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Sn.min,Gs.min),Sn.expandByPoint(nn),nn.addVectors(Sn.max,Gs.max),Sn.expandByPoint(nn)):(Sn.expandByPoint(Gs.min),Sn.expandByPoint(Gs.max))}Sn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)nn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(nn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)nn.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(t,c),nn.add(gs)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new R,l[_]=new R;let c=new R,h=new R,d=new R,u=new Ct,f=new Ct,p=new Ct,y=new R,g=new R;function m(_,T,P){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),o[_].add(y),o[T].add(y),o[P].add(y),l[_].add(g),l[T].add(g),l[P].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,T=b.length;_<T;++_){let P=b[_],L=P.start,F=P.count;for(let q=L,Y=L+F;q<Y;q+=3)m(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let w=new R,v=new R,S=new R,E=new R;function C(_){S.fromBufferAttribute(i,_),E.copy(S);let T=o[_];w.copy(T),w.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(E,T);let L=v.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,L)}for(let _=0,T=b.length;_<T;++_){let P=b[_],L=P.start,F=P.count;for(let q=L,Y=L+F;q<Y;q+=3)C(t.getX(q+0)),C(t.getX(q+1)),C(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new an(u,h,d)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $d=0,gi=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=Yi,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ci=new R,Il=new R,qr=new R,wi=new R,Ll=new R,Yr=new R,Dl=new R,rr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Il.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(Il);let r=t.distanceTo(e)*.5,a=-this.direction.dot(qr),o=wi.dot(this.direction),l=-wi.dot(qr),c=wi.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Il).addScaledVector(qr,u),f}intersectSphere(t,e){ci.subVectors(t.center,this.origin);let n=ci.dot(this.direction),i=ci.dot(ci)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,i,r){Ll.subVectors(e,t),Yr.subVectors(n,t),Dl.crossVectors(Ll,Yr);let a=this.direction.dot(Dl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,t);let l=o*this.direction.dot(Yr.crossVectors(wi,Yr));if(l<0)return null;let c=o*this.direction.dot(Ll.cross(wi));if(c<0||l+c>a)return null;let h=-o*wi.dot(Dl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},fh=new Ee,Gi=new rr,Zr=new mi,ph=new R,$r=new R,Jr=new R,Kr=new R,Ul=new R,Qr=new R,mh=new R,jr=new R,X=class extends He{constructor(t=new ke,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Ul.fromBufferAttribute(d,t),a?Qr.addScaledVector(Ul,h):Qr.addScaledVector(Ul.sub(e),h))}e.add(Qr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(Zr.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Zr,ph)===null||Gi.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(fh.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(fh),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=a[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,S=w;v<S;v+=3){let E=o.getX(v),C=o.getX(v+1),_=o.getX(v+2);i=ta(this,m,t,n,c,h,d,E,C,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let b=o.getX(g),w=o.getX(g+1),v=o.getX(g+2);i=ta(this,a,t,n,c,h,d,b,w,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=a[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,S=w;v<S;v+=3){let E=v,C=v+1,_=v+2;i=ta(this,m,t,n,c,h,d,E,C,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let b=g,w=g+1,v=g+2;i=ta(this,a,t,n,c,h,d,b,w,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Jd(s,t,e,n,i,r,a,o){let l;if(t.side===on?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ui,o),l===null)return null;jr.copy(o),jr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(jr);return c<e.near||c>e.far?null:{distance:c,point:jr.clone(),object:s}}function ta(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,$r),s.getVertexPosition(l,Jr),s.getVertexPosition(c,Kr);let h=Jd(s,t,e,n,$r,Jr,Kr,mh);if(h){let d=new R;Ri.getBarycoord(mh,$r,Jr,Kr,d),i&&(h.uv=Ri.getInterpolatedAttribute(i,o,l,c,d,new Ct)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,o,l,c,d,new Ct)),a&&(h.normal=Ri.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};Ri.getNormal($r,Jr,Kr,u.normal),h.face=u,h.barycoord=d}return h}var ar=class extends gn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=sn,h=sn,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var or=class extends an{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new Ee,gh=new Ee,ea=[],xh=new Kn,Kd=new Ee,Ws=new X,Xs=new mi,Tn=class extends X{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new or(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Kd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),xh.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),Xs.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),t.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xs),gh.multiplyMatrices(n,xs),Ws.matrixWorld=gh,Ws.raycast(t,ea);for(let a=0,o=ea.length;a<o;a++){let l=ea[a];l.instanceId=r,l.object=this,e.push(l)}ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new or(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(i*this.count),i,this.count,eo,Nn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nl=new R,Qd=new R,jd=new Jt,Yn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Nl.subVectors(n,e).cross(Qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Nl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jd.getNormalMatrix(t),i=this.coplanarPoint(Nl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new mi,tf=new Ct(.5,.5),na=new R,ws=class{constructor(t=new Yn,e=new Yn,n=new Yn,i=new Yn,r=new Yn,a=new Yn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],y=r[9],g=r[10],m=r[11],b=r[12],w=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-a,f-h,m-p,S-b).normalize(),i[1].setComponents(c+a,f+h,m+p,S+b).normalize(),i[2].setComponents(c+o,f+d,m+y,S+w).normalize(),i[3].setComponents(c-o,f-d,m-y,S-w).normalize(),n)i[4].setComponents(l,u,g,v).normalize(),i[5].setComponents(c-l,f-u,m-g,S-v).normalize();else if(i[4].setComponents(c-l,f-u,m-g,S-v).normalize(),e===Vn)i[5].setComponents(c+l,f+u,m+g,S+v).normalize();else if(e===bs)i[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){Wi.center.set(0,0,0);let e=tf.distanceTo(t.center);return Wi.radius=.7071067811865476+e,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(na.x=i.normal.x>0?t.max.x:t.min.x,na.y=i.normal.y>0?t.max.y:t.min.y,na.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ea=class extends gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_h=new Ee,ql=new rr,ia=new mi,sa=new R,lr=class extends He{constructor(t=new ke,e=new Ea){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(i),ia.radius+=r,t.ray.intersectsSphere(ia)===!1)return;_h.copy(i).invert(),ql.copy(t.ray).applyMatrix4(_h);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,y=f;p<y;p++){let g=c.getX(p);sa.fromBufferAttribute(d,g),yh(sa,g,l,i,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,y=f;p<y;p++)sa.fromBufferAttribute(d,p),yh(sa,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yh(s,t,e,n,i,r,a){let o=ql.distanceSqToPoint(s);if(o<e){let l=new R;ql.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var cr=class extends gn{constructor(t=[],e=Ui,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xn=class extends gn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xi=class extends gn{constructor(t,e,n=Gn,i,r,a,o=sn,l=sn,c,h=Zn,d=1){if(h!==Zn&&h!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Sa=class extends xi{constructor(t,e=Gn,n=Ui,i,r,a=sn,o=sn,l,c=Zn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},hr=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ce=class s extends ke{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2));function p(y,g,m,b,w,v,S,E,C,_,T){let P=v/C,L=S/_,F=v/2,q=S/2,Y=E/2,k=C+1,$=_+1,Z=0,rt=0,lt=new R;for(let bt=0;bt<$;bt++){let wt=bt*L-q;for(let Pt=0;Pt<k;Pt++){let de=Pt*P-F;lt[y]=de*b,lt[g]=wt*w,lt[m]=Y,c.push(lt.x,lt.y,lt.z),lt[y]=0,lt[g]=0,lt[m]=E>0?1:-1,h.push(lt.x,lt.y,lt.z),d.push(Pt/C),d.push(1-bt/_),Z+=1}}for(let bt=0;bt<_;bt++)for(let wt=0;wt<C;wt++){let Pt=u+wt+k*bt,de=u+wt+k*(bt+1),me=u+(wt+1)+k*(bt+1),le=u+(wt+1)+k*bt;l.push(Pt,de,le),l.push(de,me,le),rt+=6}o.addGroup(f,rt,T),f+=rt,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},As=class s extends ke{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,y=i+1,g=new R,m=new R;for(let b=0;b<=p;b++){let w=0,v=0,S=0,E=0;if(b<=n){let T=b/n,P=T*Math.PI/2;v=-h-t*Math.cos(P),S=t*Math.sin(P),E=-t*Math.cos(P),w=T*d}else if(b<=n+r){let T=(b-n)/r;v=-h+T*e,S=t,E=0,w=d+T*u}else{let T=(b-n-r)/n,P=T*Math.PI/2;v=h+t*Math.sin(P),S=t*Math.cos(P),E=t*Math.sin(P),w=d+u+T*d}let C=Math.max(0,Math.min(1,w/f)),_=0;b===0?_=.5/i:b===p&&(_=-.5/i);for(let T=0;T<=i;T++){let P=T/i,L=P*Math.PI*2,F=Math.sin(L),q=Math.cos(L);m.x=-S*q,m.y=v,m.z=S*F,o.push(m.x,m.y,m.z),g.set(-S*q,E,S*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(P+_,C)}if(b>0){let T=(b-1)*y;for(let P=0;P<i;P++){let L=T+P,F=T+P+1,q=b*y+P,Y=b*y+P+1;a.push(L,F,q),a.push(F,Y,q)}}}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ji=class s extends ke{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new R,h=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(o,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Kt=class s extends ke{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,y=[],g=n/2,m=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(f,2));function b(){let v=new R,S=new R,E=0,C=(e-t)/n;for(let _=0;_<=r;_++){let T=[],P=_/r,L=P*(e-t)+t;for(let F=0;F<=i;F++){let q=F/i,Y=q*l+o,k=Math.sin(Y),$=Math.cos(Y);S.x=L*k,S.y=-P*n+g,S.z=L*$,d.push(S.x,S.y,S.z),v.set(k,C,$).normalize(),u.push(v.x,v.y,v.z),f.push(q,1-P),T.push(p++)}y.push(T)}for(let _=0;_<i;_++)for(let T=0;T<r;T++){let P=y[T][_],L=y[T+1][_],F=y[T+1][_+1],q=y[T][_+1];(t>0||T!==0)&&(h.push(P,L,q),E+=3),(e>0||T!==r-1)&&(h.push(L,F,q),E+=3)}c.addGroup(m,E,0),m+=E}function w(v){let S=p,E=new Ct,C=new R,_=0,T=v===!0?t:e,P=v===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,g*P,0),u.push(0,P,0),f.push(.5,.5),p++;let L=p;for(let F=0;F<=i;F++){let Y=F/i*l+o,k=Math.cos(Y),$=Math.sin(Y);C.x=T*$,C.y=g*P,C.z=T*k,d.push(C.x,C.y,C.z),u.push(0,P,0),E.x=k*.5+.5,E.y=$*.5*P+.5,f.push(E.x,E.y),p++}for(let F=0;F<i;F++){let q=S+F,Y=L+F;v===!0?h.push(Y,Y+1,q):h.push(Y+1,Y,q),_+=3}c.addGroup(m,_,v===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_n=class s extends Kt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Ct:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,i=[],r=[],a=[],o=new R,l=new Ee;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(jt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ur=class extends Un{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ta=class extends ur{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function _c(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var vh=new R,Mh=new R,Fl=new _c,Bl=new _c,Ol=new _c,Mn=class extends Un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Mh.subVectors(i[0],i[1]).add(i[0]),c=Mh);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(vh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=vh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),g<1e-4&&(g=y),Fl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,y,g),Bl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,y,g),Ol.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,y,g)}else this.curveType==="catmullrom"&&(Fl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Bl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ol.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Fl.calc(l),Bl.calc(l),Ol.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bh(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function ef(s,t){let e=1-s;return e*e*t}function nf(s,t){return 2*(1-s)*s*t}function sf(s,t){return s*s*t}function Zs(s,t,e,n){return ef(s,t)+nf(s,e)+sf(s,n)}function rf(s,t){let e=1-s;return e*e*e*t}function af(s,t){let e=1-s;return 3*e*e*s*t}function of(s,t){return 3*(1-s)*s*s*t}function lf(s,t){return s*s*s*t}function $s(s,t,e,n,i){return rf(s,t)+af(s,e)+of(s,n)+lf(s,i)}var wa=class extends Un{constructor(t=new Ct,e=new Ct,n=new Ct,i=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ct){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,i.x,r.x,a.x,o.x),$s(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Aa=class extends Un{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,i.x,r.x,a.x,o.x),$s(t,i.y,r.y,a.y,o.y),$s(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ra=class extends Un{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends Un{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pa=class extends Un{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Zs(t,i.x,r.x,a.x),Zs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dr=class extends Un{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Zs(t,i.x,r.x,a.x),Zs(t,i.y,r.y,a.y),Zs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(bh(o,l.x,c.x,h.x,d.x),bh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Ct().fromArray(i))}return this}},cf=Object.freeze({__proto__:null,ArcCurve:Ta,CatmullRomCurve3:Mn,CubicBezierCurve:wa,CubicBezierCurve3:Aa,EllipseCurve:ur,LineCurve:Ra,LineCurve3:Ca,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:dr,SplineCurve:Ia});var _i=class s extends ke{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=jt(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new R,u=new Ct,f=new R,p=new R,y=new R,g=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-g,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(p)}for(let b=0;b<=e;b++){let w=n+b*h*i,v=Math.sin(w),S=Math.cos(w);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*v,d.y=t[E].y,d.z=t[E].x*S,a.push(d.x,d.y,d.z),u.x=b/e,u.y=E/(t.length-1),o.push(u.x,u.y);let C=l[3*E+0]*v,_=l[3*E+1],T=l[3*E+0]*S;c.push(C,_,T)}}for(let b=0;b<e;b++)for(let w=0;w<t.length-1;w++){let v=w+b*t.length,S=v,E=v+t.length,C=v+t.length+1,_=v+1;r.push(S,E,_),r.push(C,_,E)}this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("uv",new fe(o,2)),this.setAttribute("normal",new fe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var ye=class s extends ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],y=[],g=[];for(let m=0;m<h;m++){let b=m*u-a;for(let w=0;w<c;w++){let v=w*d-r;p.push(v,-b,0),y.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let w=b+c*m,v=b+c*(m+1),S=b+1+c*(m+1),E=b+1+c*m;f.push(w,v,E),f.push(v,S,E)}this.setIndex(f),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(y,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var ie=class s extends ke{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new R,u=new R,f=[],p=[],y=[],g=[];for(let m=0;m<=n;m++){let b=[],w=m/n,v=a+w*o,S=t*Math.cos(v),E=Math.sqrt(t*t-S*S),C=0;m===0&&a===0?C=.5/e:m===n&&l===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let T=_/e,P=i+T*r;d.x=-E*Math.cos(P),d.y=S,d.z=E*Math.sin(P),p.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(T+C,1-w),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let w=h[m][b+1],v=h[m][b],S=h[m+1][b],E=h[m+1][b+1];(m!==0||a>0)&&f.push(w,v,E),(m!==n-1||l<Math.PI)&&f.push(v,S,E)}this.setIndex(f),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(y,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wn=class s extends ke{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new R,f=new R,p=new R;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let m=0;m<=i;m++){let b=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(b),f.y=(t+e*Math.cos(g))*Math.sin(b),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=i;g++){let m=(i+1)*y+g-1,b=(i+1)*(y-1)+g-1,w=(i+1)*(y-1)+g,v=(i+1)*y+g;l.push(m,b,v),l.push(b,w,v)}this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var An=class s extends ke{constructor(t=new dr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new Ct,h=new R,d=[],u=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(f,2));function y(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),b(),m()}function g(w){h=t.getPointAt(w/e,h);let v=a.normals[w],S=a.binormals[w];for(let E=0;E<=i;E++){let C=E/i*Math.PI*2,_=Math.sin(C),T=-Math.cos(C);l.x=T*v.x+_*S.x,l.y=T*v.y+_*S.y,l.z=T*v.z+_*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let w=1;w<=e;w++)for(let v=1;v<=i;v++){let S=(i+1)*(w-1)+(v-1),E=(i+1)*w+(v-1),C=(i+1)*w+v,_=(i+1)*(w-1)+v;p.push(S,E,_),p.push(E,C,_)}}function b(){for(let w=0;w<=e;w++)for(let v=0;v<=i;v++)c.x=w/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new cf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function es(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Eh(i))i.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Eh(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function fn(s){let t={};for(let e=0;e<s.length;e++){let n=es(s[e]);for(let i in n)t[i]=n[i]}return t}function Eh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function hf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function yc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var hu={clone:es,merge:fn},uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qe=class extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ct().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},La=class extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},et=class extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fr=class extends et{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Da=class extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ua=class extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ra(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var Pi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Na=class extends Pi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vl:r=t,o=2*e-n;break;case Gl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vl:a=t,l=2*n-e;break;case Gl:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),y=p*p,g=y*p,m=-u*g+2*u*y-u*p,b=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*p+1,w=(-1-f)*g+(1.5+f)*y+.5*p,v=f*g-f*y;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+b*a[c+S]+w*a[l+S]+v*a[d+S];return r}},Fa=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Ba=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Oa=class extends Pi{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),y=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let y=a[c+p],g=a[l+p],m=f*u+p*2,b=d[m],w=d[m+1],v=t*u+p*2,S=h[v],E=h[v+1],C=(n-e)/(i-e),_,T,P,L,F;for(let q=0;q<8;q++){_=C*C,T=_*C,P=1-C,L=P*P,F=L*P;let k=F*e+3*L*C*b+3*P*_*S+T*i-n;if(Math.abs(k)<1e-10)break;let $=3*L*(b-e)+6*P*C*(S-b)+3*_*(i-S);if(Math.abs($)<1e-10)break;C=C-k/$,C=Math.max(0,Math.min(1,C))}r[p]=F*y+3*L*C*w+3*P*_*E+T*g}return r}},Rn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ra(e,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ra(t.times,Array),values:ra(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Oa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Js:e=this.InterpolantFactoryMethodDiscrete;break;case ya:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break;case kl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return kl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&yd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===la,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let y=e[d+p];if(y!==e[u+p]||y!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=ya;var Ii=class extends Rn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Js;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}};Ha.prototype.ValueTypeName="color";var ka=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}};ka.prototype.ValueTypeName="number";var za=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Jn.slerpFlat(r,0,a,c-o,a,c,l);return r}},pr=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new za(this.times,this.values,this.getValueSize(),t)}};pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends Rn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Js;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Rn{constructor(t,e,n,i){super(t,e,n,i)}};Va.prototype.ValueTypeName="vector";var Ga=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},uu=new Ga,Wa=class{constructor(t){this.manager=t!==void 0?t:uu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},mr=class extends Ki{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Hl=new Ee,Sh=new R,Th=new R,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),Th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Th),e.updateMatrixWorld(),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===bs||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},aa=new R,oa=new Jn,qn=new R,gr=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(aa,oa,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(aa,oa,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new R,wh=new Ct,Ah=new Ct,Je=class extends gr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$i*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,wh,Ah),e.subVectors(Ah,wh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yl=class extends Xa{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=$i*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},xr=class extends Ki{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Yl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Zl=class extends Xa{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0}},Di=class extends Ki{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Qi=class extends gr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ji=class extends Ki{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var _s=-90,ys=1,qa=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Je(_s,ys,t,e);i.layers=this.layers,this.add(i);let r=new Je(_s,ys,t,e);r.layers=this.layers,this.add(r);let a=new Je(_s,ys,t,e);a.layers=this.layers,this.add(a);let o=new Je(_s,ys,t,e);o.layers=this.layers,this.add(o);let l=new Je(_s,ys,t,e);l.layers=this.layers,this.add(l);let c=new Je(_s,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ya=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var vc="\\[\\]\\.:\\/",ff=new RegExp("["+vc+"]","g"),Mc="[^"+vc+"]",pf="[^"+vc.replace("\\.","")+"]",mf=/((?:WC+[\/:])*)/.source.replace("WC",Mc),gf=/(WCOD+)?/.source.replace("WCOD",pf),xf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mc),_f=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mc),yf=new RegExp("^"+mf+gf+xf+_f+"$"),vf=["material","materials","bones","map"],$l=class{constructor(t,e,n){let i=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ff,"")}static parseTrackName(t){let e=yf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);vf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=$l;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ax=new Float32Array(1);var _r=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Wt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Jl=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function bc(s,t,e,n){let i=Mf(n);switch(e){case fc:return s*t;case eo:return s*t/i.components*i.byteLength;case no:return s*t/i.components*i.byteLength;case Bi:return s*t*2/i.components*i.byteLength;case io:return s*t*2/i.components*i.byteLength;case pc:return s*t*3/i.components*i.byteLength;case Fn:return s*t*4/i.components*i.byteLength;case so:return s*t*4/i.components*i.byteLength;case br:case Er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sr:case Tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ao:case lo:return Math.max(s,16)*Math.max(t,8)/4;case ro:case oo:return Math.max(s,8)*Math.max(t,8)/2;case co:case ho:case fo:case po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case uo:case wr:case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _o:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case yo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case vo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case bo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case So:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case wo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Co:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Po:case Io:case Lo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Do:case Uo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ar:case No:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mf(s){switch(s){case bn:case cc:return{byteLength:1,components:1};case Cs:case hc:case jn:return{byteLength:2,components:1};case ja:case to:return{byteLength:2,components:4};case Gn:case Qa:case Nn:return{byteLength:4,components:1};case uc:case dc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Uu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ef(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],y=d[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let y=d[f];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,If=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$f=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,gp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ym=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Sf,alphahash_pars_fragment:Tf,alphamap_fragment:wf,alphamap_pars_fragment:Af,alphatest_fragment:Rf,alphatest_pars_fragment:Cf,aomap_fragment:Pf,aomap_pars_fragment:If,batching_pars_vertex:Lf,batching_vertex:Df,begin_vertex:Uf,beginnormal_vertex:Nf,bsdfs:Ff,iridescence_fragment:Bf,bumpmap_pars_fragment:Of,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:kf,clipping_planes_pars_vertex:zf,clipping_planes_vertex:Vf,color_fragment:Gf,color_pars_fragment:Wf,color_pars_vertex:Xf,color_vertex:qf,common:Yf,cube_uv_reflection_fragment:Zf,defaultnormal_vertex:$f,displacementmap_pars_vertex:Jf,displacementmap_vertex:Kf,emissivemap_fragment:Qf,emissivemap_pars_fragment:jf,colorspace_fragment:tp,colorspace_pars_fragment:ep,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:sp,envmap_pars_vertex:rp,envmap_physical_pars_fragment:gp,envmap_vertex:ap,fog_vertex:op,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:hp,gradientmap_pars_fragment:up,lightmap_pars_fragment:dp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:xp,lights_toon_pars_fragment:_p,lights_phong_fragment:yp,lights_phong_pars_fragment:vp,lights_physical_fragment:Mp,lights_physical_pars_fragment:bp,lights_fragment_begin:Ep,lights_fragment_maps:Sp,lights_fragment_end:Tp,lightprobes_pars_fragment:wp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Pp,map_fragment:Ip,map_pars_fragment:Lp,map_particle_fragment:Dp,map_particle_pars_fragment:Up,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Bp,morphcolor_vertex:Op,morphnormal_vertex:Hp,morphtarget_pars_vertex:kp,morphtarget_vertex:zp,normal_fragment_begin:Vp,normal_fragment_maps:Gp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:qp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:Kp,opaque_fragment:Qp,packing:jp,premultiplied_alpha_fragment:tm,project_vertex:em,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:am,shadowmap_pars_vertex:om,shadowmap_vertex:lm,shadowmask_pars_fragment:cm,skinbase_vertex:hm,skinning_pars_vertex:um,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:xm,transmission_fragment:_m,transmission_pars_fragment:ym,uv_pars_fragment:vm,uv_pars_vertex:Mm,uv_vertex:bm,worldpos_vertex:Em,background_vert:Sm,background_frag:Tm,backgroundCube_vert:wm,backgroundCube_frag:Am,cube_vert:Rm,cube_frag:Cm,depth_vert:Pm,depth_frag:Im,distance_vert:Lm,distance_frag:Dm,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Fm,linedashed_frag:Bm,meshbasic_vert:Om,meshbasic_frag:Hm,meshlambert_vert:km,meshlambert_frag:zm,meshmatcap_vert:Vm,meshmatcap_frag:Gm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:qm,meshphong_frag:Ym,meshphysical_vert:Zm,meshphysical_frag:$m,meshtoon_vert:Jm,meshtoon_frag:Km,points_vert:Qm,points_frag:jm,shadow_vert:t0,shadow_frag:e0,sprite_vert:n0,sprite_frag:i0},St={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ei={basic:{uniforms:fn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:fn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:fn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:fn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:fn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Gt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:fn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:fn([St.points,St.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:fn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:fn([St.common,St.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:fn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:fn([St.sprite,St.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:fn([St.common,St.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:fn([St.lights,St.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ei.physical={uniforms:fn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Ho={r:0,b:0,g:0},s0=new Ee,Nu=new Jt;Nu.set(-1,0,0,0,1,0,0,0,1);function r0(s,t,e,n,i,r){let a=new Gt(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let v=b.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(b){let w=!1,v=f(b);v===null?g(a,o):v&&v.isColor&&(g(v,1),w=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(b,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===vr)?(c===void 0&&(c=new X(new Ce(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:es(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(s0.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nu),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==_e,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new X(new ye(2,2),new qe({name:"BackgroundMaterial",uniforms:es(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,w){b.getRGB(Ho,yc(s)),e.buffers.color.setClear(Ho.r,Ho.g,Ho.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:p,addToRenderList:y,dispose:m}}function a0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(L,F,q,Y,k){let $=!1,Z=d(L,Y,q,F);r!==Z&&(r=Z,c(r.object)),$=f(L,Y,q,k),$&&p(L,Y,q,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(L,F,q,Y),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function d(L,F,q,Y){let k=Y.wireframe===!0,$=n[F.id];$===void 0&&($={},n[F.id]=$);let Z=L.isInstancedMesh===!0?L.id:0,rt=$[Z];rt===void 0&&(rt={},$[Z]=rt);let lt=rt[q.id];lt===void 0&&(lt={},rt[q.id]=lt);let bt=lt[k];return bt===void 0&&(bt=u(l()),lt[k]=bt),bt}function u(L){let F=[],q=[],Y=[];for(let k=0;k<e;k++)F[k]=0,q[k]=0,Y[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:Y,object:L,attributes:{},index:null}}function f(L,F,q,Y){let k=r.attributes,$=F.attributes,Z=0,rt=q.getAttributes();for(let lt in rt)if(rt[lt].location>=0){let wt=k[lt],Pt=$[lt];if(Pt===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(Pt=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(Pt=L.instanceColor)),wt===void 0||wt.attribute!==Pt||Pt&&wt.data!==Pt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==Y}function p(L,F,q,Y){let k={},$=F.attributes,Z=0,rt=q.getAttributes();for(let lt in rt)if(rt[lt].location>=0){let wt=$[lt];wt===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(wt=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(wt=L.instanceColor));let Pt={};Pt.attribute=wt,wt&&wt.data&&(Pt.data=wt.data),k[lt]=Pt,Z++}r.attributes=k,r.attributesNum=Z,r.index=Y}function y(){let L=r.newAttributes;for(let F=0,q=L.length;F<q;F++)L[F]=0}function g(L){m(L,0)}function m(L,F){let q=r.newAttributes,Y=r.enabledAttributes,k=r.attributeDivisors;q[L]=1,Y[L]===0&&(s.enableVertexAttribArray(L),Y[L]=1),k[L]!==F&&(s.vertexAttribDivisor(L,F),k[L]=F)}function b(){let L=r.newAttributes,F=r.enabledAttributes;for(let q=0,Y=F.length;q<Y;q++)F[q]!==L[q]&&(s.disableVertexAttribArray(q),F[q]=0)}function w(L,F,q,Y,k,$,Z){Z===!0?s.vertexAttribIPointer(L,F,q,k,$):s.vertexAttribPointer(L,F,q,Y,k,$)}function v(L,F,q,Y){y();let k=Y.attributes,$=q.getAttributes(),Z=F.defaultAttributeValues;for(let rt in $){let lt=$[rt];if(lt.location>=0){let bt=k[rt];if(bt===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(bt=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(bt=L.instanceColor)),bt!==void 0){let wt=bt.normalized,Pt=bt.itemSize,de=t.get(bt);if(de===void 0)continue;let me=de.buffer,le=de.type,it=de.bytesPerElement,ft=le===s.INT||le===s.UNSIGNED_INT||bt.gpuType===Qa;if(bt.isInterleavedBufferAttribute){let ct=bt.data,Xt=ct.stride,$t=bt.offset;if(ct.isInstancedInterleavedBuffer){for(let It=0;It<lt.locationSize;It++)m(lt.location+It,ct.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let It=0;It<lt.locationSize;It++)g(lt.location+It);s.bindBuffer(s.ARRAY_BUFFER,me);for(let It=0;It<lt.locationSize;It++)w(lt.location+It,Pt/lt.locationSize,le,wt,Xt*it,($t+Pt/lt.locationSize*It)*it,ft)}else{if(bt.isInstancedBufferAttribute){for(let ct=0;ct<lt.locationSize;ct++)m(lt.location+ct,bt.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ct=0;ct<lt.locationSize;ct++)g(lt.location+ct);s.bindBuffer(s.ARRAY_BUFFER,me);for(let ct=0;ct<lt.locationSize;ct++)w(lt.location+ct,Pt/lt.locationSize,le,wt,Pt*it,Pt/lt.locationSize*ct*it,ft)}}else if(Z!==void 0){let wt=Z[rt];if(wt!==void 0)switch(wt.length){case 2:s.vertexAttrib2fv(lt.location,wt);break;case 3:s.vertexAttrib3fv(lt.location,wt);break;case 4:s.vertexAttrib4fv(lt.location,wt);break;default:s.vertexAttrib1fv(lt.location,wt)}}}}b()}function S(){T();for(let L in n){let F=n[L];for(let q in F){let Y=F[q];for(let k in Y){let $=Y[k];for(let Z in $)h($[Z].object),delete $[Z];delete Y[k]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let F=n[L.id];for(let q in F){let Y=F[q];for(let k in Y){let $=Y[k];for(let Z in $)h($[Z].object),delete $[Z];delete Y[k]}}delete n[L.id]}function C(L){for(let F in n){let q=n[F];for(let Y in q){let k=q[Y];if(k[L.id]===void 0)continue;let $=k[L.id];for(let Z in $)h($[Z].object),delete $[Z];delete k[L.id]}}}function _(L){for(let F in n){let q=n[F],Y=L.isInstancedMesh===!0?L.id:0,k=q[Y];if(k!==void 0){for(let $ in k){let Z=k[$];for(let rt in Z)h(Z[rt].object),delete Z[rt];delete k[$]}delete q[Y],Object.keys(q).length===0&&delete n[F]}}}function T(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:b}}function o0(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function l0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Fn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==bn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nn&&!_)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,maxSamples:S,samples:E}}function c0(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Yn,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,w=b*4,v=m.clippingState||null;l.value=v,v=h(p,u,w,f);for(let S=0;S!==w;++S)v[S]=e[S];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=f+y*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=f;w!==y;++w,v+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var Oi=4,du=[.125,.215,.35,.446,.526,.582],ns=20,h0=256,Rr=new Qi,fu=new Gt,Ec=null,Sc=0,Tc=0,wc=!1,u0=new R,Us=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=u0}=r;Ec=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ec,Sc,Tc),this._renderer.xr.enabled=wc,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ec=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:jn,format:Fn,colorSpace:Ks,depthBuffer:!1},i=pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=d0(r)),this._blurMaterial=p0(r,t,e),this._ggxMaterial=f0(r,t,e)}return i}_compileMaterial(t){let e=new X(new ke,t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,i,r){let l=new Je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(fu),d.toneMapping=Pn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new X(new Ce,new ne({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,m=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,m=!0):(g.color.copy(fu),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;Ls(i,v*S,w>2?S:0,S,S),d.setRenderTarget(i),m&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ui||t.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Rr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:p}=this,y=this._sizeLods[n],g=3*y*(n>p-Oi?n-p+Oi:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Ls(r,g,m,3*y,2*y),i.setRenderTarget(r),i.render(o,Rr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ls(t,g,m,3*y,2*y),i.setRenderTarget(t),i.render(o,Rr)}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qt("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[i];d.material=c;let u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ns-1),y=r/p,g=isFinite(r)?1+Math.floor(h*y):ns;g>ns&&Wt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ns}`);let m=[],b=0;for(let C=0;C<ns;++C){let _=C/y,T=Math.exp(-_*_/2);m.push(T),C===0?b+=T:C<g&&(b+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/b;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:w}=this;u.dTheta.value=p,u.mipInt.value=w-n;let v=this._sizeLods[i],S=3*v*(i>w-Oi?i-w+Oi:0),E=4*(this._cubeSize-v);Ls(e,S,E,3*v,2*v),l.setRenderTarget(e),l.render(d,Rr)}};function d0(s){let t=[],e=[],n=[],i=s,r=s-Oi+1+du.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Oi?l=du[a-s+Oi-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,y=3,g=2,m=1,b=new Float32Array(y*p*f),w=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let E=0;E<f;E++){let C=E%3*2/3-1,_=E>2?0:-1,T=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];b.set(T,y*p*E),w.set(u,g*p*E);let P=[E,E,E,E,E,E];v.set(P,m*p*E)}let S=new ke;S.setAttribute("position",new an(b,y)),S.setAttribute("uv",new an(w,g)),S.setAttribute("faceIndex",new an(v,m)),n.push(new X(S,null)),i>Oi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function pu(s,t,e){let n=new Xe(s,t,e);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function f0(s,t,e){return new qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function p0(s,t,e){let n=new Float32Array(ns),i=new R(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function mu(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function gu(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var zo=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new cr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ce(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Qn});r.uniforms.tEquirect.value=e;let a=new X(i,r),o=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Oe),new qa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function m0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===$a||f===Ja)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let y=new zo(p.height);return y.fromEquirectangularTexture(s,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===$a||f===Ja,y=f===Ui||f===ts;if(p||y){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Us(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let b=u.image;return p&&b&&b.height>0||y&&b&&l(b)?(n===null&&(n=new Us(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===$a?u.mapping=Ui:f===Ja&&(u.mapping=ts),u}function l(u){let f=0,p=6;for(let y=0;y<p;y++)u[y]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function g0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&qi("WebGLRenderer: "+n+" extension not supported."),i}}}function x0(s,t,e,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,y=0;if(p===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let w=0,v=b.length;w<v;w+=3){let S=b[w+0],E=b[w+1],C=b[w+2];u.push(S,E,E,C,C,S)}}else{let b=p.array;y=p.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let S=w+0,E=w+1,C=w+2;u.push(S,E,E,C,C,S)}}let g=new(p.count>=65535?sr:ir)(u,1);g.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function _0(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=u[g];e.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function y0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function v0(s,t,e){let n=new WeakMap,i=new Ne;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*S*4*d),C=new tr(E,v,S,d);C.type=Nn,C.needsUpdate=!0;let _=w*4;for(let P=0;P<d;P++){let L=g[P],F=m[P],q=b[P],Y=v*S*4*P;for(let k=0;k<L.count;k++){let $=k*_;f===!0&&(i.fromBufferAttribute(L,k),E[Y+$+0]=i.x,E[Y+$+1]=i.y,E[Y+$+2]=i.z,E[Y+$+3]=0),p===!0&&(i.fromBufferAttribute(F,k),E[Y+$+4]=i.x,E[Y+$+5]=i.y,E[Y+$+6]=i.z,E[Y+$+7]=0),y===!0&&(i.fromBufferAttribute(q,k),E[Y+$+8]=i.x,E[Y+$+9]=i.y,E[Y+$+10]=i.z,E[Y+$+11]=q.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new Ct(v,S)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function M0(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var b0={[ec]:"LINEAR_TONE_MAPPING",[nc]:"REINHARD_TONE_MAPPING",[ic]:"CINEON_TONE_MAPPING",[sc]:"ACES_FILMIC_TONE_MAPPING",[ac]:"AGX_TONE_MAPPING",[oc]:"NEUTRAL_TONE_MAPPING",[rc]:"CUSTOM_TONE_MAPPING"};function E0(s,t,e,n,i,r){let a=new Xe(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new xi(t,e):void 0}),o=new Xe(t,e,{type:jn,depthBuffer:!1,stencilBuffer:!1}),l=new ke;l.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fe([0,2,0,0,2,0],2));let c=new La({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new X(l,c),d=new Qi(-1,1,1,-1,0,1),u=null,f=null,p=!1,y,g=null,m=[],b=!1;this.setSize=function(w,v){a.setSize(w,v),o.setSize(w,v);for(let S=0;S<m.length;S++){let E=m[S];E.setSize&&E.setSize(w,v)}},this.setEffects=function(w){m=w,b=m.length>0&&m[0].isRenderPass===!0;let v=a.width,S=a.height;for(let E=0;E<m.length;E++){let C=m[E];C.setSize&&C.setSize(v,S)}},this.begin=function(w,v){if(p||w.toneMapping===Pn&&m.length===0)return!1;if(g=v,v!==null){let S=v.width,E=v.height;(a.width!==S||a.height!==E)&&this.setSize(S,E)}return b===!1&&w.setRenderTarget(a),y=w.toneMapping,w.toneMapping=Pn,!0},this.hasRenderPass=function(){return b},this.end=function(w,v){w.toneMapping=y,p=!0;let S=a,E=o;for(let C=0;C<m.length;C++){let _=m[C];if(_.enabled!==!1&&(_.render(w,E,S,v),_.needsSwap!==!1)){let T=S;S=E,E=T}}if(u!==w.outputColorSpace||f!==w.toneMapping){u=w.outputColorSpace,f=w.toneMapping,c.defines={},oe.getTransfer(u)===_e&&(c.defines.SRGB_TRANSFER="");let C=b0[f];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,w.setRenderTarget(g),w.render(h,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Fu=new gn,Cc=new xi(1,1),Bu=new tr,Ou=new ba,Hu=new cr,xu=[],_u=[],yu=new Float32Array(16),vu=new Float32Array(9),Mu=new Float32Array(4);function Ns(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=xu[i];if(r===void 0&&(r=new Float32Array(i),xu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function je(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function tn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Wo(s,t){let e=_u[t];e===void 0&&(e=new Int32Array(t),_u[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function S0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function T0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;s.uniform2fv(this.addr,t),tn(e,t)}}function w0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;s.uniform3fv(this.addr,t),tn(e,t)}}function A0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;s.uniform4fv(this.addr,t),tn(e,t)}}function R0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(je(e,n))return;Mu.set(n),s.uniformMatrix2fv(this.addr,!1,Mu),tn(e,n)}}function C0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(je(e,n))return;vu.set(n),s.uniformMatrix3fv(this.addr,!1,vu),tn(e,n)}}function P0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(je(e,n))return;yu.set(n),s.uniformMatrix4fv(this.addr,!1,yu),tn(e,n)}}function I0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function L0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;s.uniform2iv(this.addr,t),tn(e,t)}}function D0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;s.uniform3iv(this.addr,t),tn(e,t)}}function U0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;s.uniform4iv(this.addr,t),tn(e,t)}}function N0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function F0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;s.uniform2uiv(this.addr,t),tn(e,t)}}function B0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;s.uniform3uiv(this.addr,t),tn(e,t)}}function O0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;s.uniform4uiv(this.addr,t),tn(e,t)}}function H0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Cc.compareFunction=e.isReversedDepthBuffer()?Oo:Bo,r=Cc):r=Fu,e.setTexture2D(t||r,i)}function k0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ou,i)}function z0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Hu,i)}function V0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Bu,i)}function G0(s){switch(s){case 5126:return S0;case 35664:return T0;case 35665:return w0;case 35666:return A0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return I0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return U0;case 5125:return N0;case 36294:return F0;case 36295:return B0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return V0}}function W0(s,t){s.uniform1fv(this.addr,t)}function X0(s,t){let e=Ns(t,this.size,2);s.uniform2fv(this.addr,e)}function q0(s,t){let e=Ns(t,this.size,3);s.uniform3fv(this.addr,e)}function Y0(s,t){let e=Ns(t,this.size,4);s.uniform4fv(this.addr,e)}function Z0(s,t){let e=Ns(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function $0(s,t){let e=Ns(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function J0(s,t){let e=Ns(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function K0(s,t){s.uniform1iv(this.addr,t)}function Q0(s,t){s.uniform2iv(this.addr,t)}function j0(s,t){s.uniform3iv(this.addr,t)}function tg(s,t){s.uniform4iv(this.addr,t)}function eg(s,t){s.uniform1uiv(this.addr,t)}function ng(s,t){s.uniform2uiv(this.addr,t)}function ig(s,t){s.uniform3uiv(this.addr,t)}function sg(s,t){s.uniform4uiv(this.addr,t)}function rg(s,t,e){let n=this.cache,i=t.length,r=Wo(e,i);je(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Cc:a=Fu;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function ag(s,t,e){let n=this.cache,i=t.length,r=Wo(e,i);je(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ou,r[a])}function og(s,t,e){let n=this.cache,i=t.length,r=Wo(e,i);je(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Hu,r[a])}function lg(s,t,e){let n=this.cache,i=t.length,r=Wo(e,i);je(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Bu,r[a])}function cg(s){switch(s){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return Z0;case 35675:return $0;case 35676:return J0;case 5124:case 35670:return K0;case 35667:case 35671:return Q0;case 35668:case 35672:return j0;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}var Pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=G0(e.type)}},Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}},Lc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Ac=/(\w+)(\])?(\[|\.)?/g;function bu(s,t){s.seq.push(t),s.map[t.id]=t}function hg(s,t,e){let n=s.name,i=n.length;for(Ac.lastIndex=0;;){let r=Ac.exec(n),a=Ac.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){bu(e,c===void 0?new Pc(o,s,t):new Ic(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Lc(o),bu(e,d)),e=d}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);hg(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Eu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var ug=37297,dg=0;function fg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Su=new Jt;function pg(s){oe._getMatrix(Su,oe.workingColorSpace,s);let t=`mat3( ${Su.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case Qs:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Tu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+fg(s.getShaderSource(t),o)}else return r}function mg(s,t){let e=pg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var gg={[ec]:"Linear",[nc]:"Reinhard",[ic]:"Cineon",[sc]:"ACESFilmic",[ac]:"AgX",[oc]:"Neutral",[rc]:"Custom"};function xg(s,t){let e=gg[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ko=new R;function _g(){oe.getLuminanceCoefficients(ko);let s=ko.x.toFixed(4),t=ko.y.toFixed(4),e=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function vg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Pr(s){return s!==""}function wu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Au(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(s){return s.replace(bg,Sg)}var Eg=new Map;function Sg(s,t){let e=te[t];if(e===void 0){let n=Eg.get(t);if(n!==void 0)e=te[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Dc(e)}var Tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(s){return s.replace(Tg,wg)}function wg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ag={[yr]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function Rg(s){return Ag[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Cg={[Ui]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE_UV"};function Pg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Cg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ig={[ts]:"ENVMAP_MODE_REFRACTION"};function Lg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ig[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Dg={[tc]:"ENVMAP_BLENDING_MULTIPLY",[Zh]:"ENVMAP_BLENDING_MIX",[$h]:"ENVMAP_BLENDING_ADD"};function Ug(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Dg[s.combine]||"ENVMAP_BLENDING_NONE"}function Ng(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fg(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Rg(e),c=Pg(e),h=Lg(e),d=Ug(e),u=Ng(e),f=yg(e),p=vg(r),y=i.createProgram(),g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Pr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(g=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?te.tonemapping_pars_fragment:"",e.toneMapping!==Pn?xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,mg("linearToOutputTexel",e.outputColorSpace),_g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),a=Dc(a),a=wu(a,e),a=Au(a,e),o=Dc(o),o=wu(o,e),o=Au(o,e),a=Ru(a),o=Ru(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=b+g+a,v=b+m+o,S=Eu(i,i.VERTEX_SHADER,w),E=Eu(i,i.FRAGMENT_SHADER,v);i.attachShader(y,S),i.attachShader(y,E),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function C(L){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(y)||"",q=i.getShaderInfoLog(S)||"",Y=i.getShaderInfoLog(E)||"",k=F.trim(),$=q.trim(),Z=Y.trim(),rt=!0,lt=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(rt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,S,E);else{let bt=Tu(i,S,"vertex"),wt=Tu(i,E,"fragment");qt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+bt+`
`+wt)}else k!==""?Wt("WebGLProgram: Program Info Log:",k):($===""||Z==="")&&(lt=!1);lt&&(L.diagnostics={runnable:rt,programLog:k,vertexShader:{log:$,prefix:g},fragmentShader:{log:Z,prefix:m}})}i.deleteShader(S),i.deleteShader(E),_=new Ds(i,y),T=Mg(i,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(y,ug)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=E,this}var Bg=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Nc(t),e.set(t,n)),n}},Nc=class{constructor(t){this.id=Bg++,this.code=t,this.usedTimes=0}};function Og(s){return s===Bi||s===wr||s===Ar}function Hg(s,t,e,n,i,r){let a=new er,o=new Uc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,T,P,L,F,q){let Y=L.fog,k=F.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,rt=t.get(_.envMap||$,Z),lt=rt&&rt.mapping===vr?rt.image.height:null,bt=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let wt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Pt=wt!==void 0?wt.length:0,de=0;k.morphAttributes.position!==void 0&&(de=1),k.morphAttributes.normal!==void 0&&(de=2),k.morphAttributes.color!==void 0&&(de=3);let me,le,it,ft;if(bt){let Ut=ei[bt];me=Ut.vertexShader,le=Ut.fragmentShader}else{me=_.vertexShader,le=_.fragmentShader;let Ut=o.getVertexShaderStage(_),Le=o.getFragmentShaderStage(_);o.update(_,Ut,Le),it=Ut.id,ft=Le.id}let ct=s.getRenderTarget(),Xt=s.state.buffers.depth.getReversed(),$t=F.isInstancedMesh===!0,It=F.isBatchedMesh===!0,Be=!!_.map,ee=!!_.matcap,ce=!!rt,ue=!!_.aoMap,ae=!!_.lightMap,Pe=!!_.bumpMap&&_.wireframe===!1,Ge=!!_.normalMap,We=!!_.displacementMap,Ye=!!_.emissiveMap,Ae=!!_.metalnessMap,Ie=!!_.roughnessMap,D=_.anisotropy>0,cn=_.clearcoat>0,pe=_.dispersion>0,A=_.iridescence>0,x=_.sheen>0,B=_.transmission>0,V=D&&!!_.anisotropyMap,J=cn&&!!_.clearcoatMap,ut=cn&&!!_.clearcoatNormalMap,pt=cn&&!!_.clearcoatRoughnessMap,Q=A&&!!_.iridescenceMap,st=A&&!!_.iridescenceThicknessMap,xt=x&&!!_.sheenColorMap,Ht=x&&!!_.sheenRoughnessMap,Mt=!!_.specularMap,_t=!!_.specularColorMap,kt=!!_.specularIntensityMap,Vt=B&&!!_.transmissionMap,Yt=B&&!!_.thicknessMap,U=!!_.gradientMap,dt=!!_.alphaMap,nt=_.alphaTest>0,yt=!!_.alphaHash,mt=!!_.extensions,at=Pn;_.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(at=s.toneMapping);let Bt={shaderID:bt,shaderType:_.type,shaderName:_.name,vertexShader:me,fragmentShader:le,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:ft,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:It,batchingColor:It&&F._colorsTexture!==null,instancing:$t,instancingColor:$t&&F.instanceColor!==null,instancingMorph:$t&&F.morphTexture!==null,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:ee,envMap:ce,envMapMode:ce&&rt.mapping,envMapCubeUVHeight:lt,aoMap:ue,lightMap:ae,bumpMap:Pe,normalMap:Ge,displacementMap:We,emissiveMap:Ye,normalMapObjectSpace:Ge&&_.normalMapType===Qh,normalMapTangentSpace:Ge&&_.normalMapType===Fo,packedNormalMap:Ge&&_.normalMapType===Fo&&Og(_.normalMap.format),metalnessMap:Ae,roughnessMap:Ie,anisotropy:D,anisotropyMap:V,clearcoat:cn,clearcoatMap:J,clearcoatNormalMap:ut,clearcoatRoughnessMap:pt,dispersion:pe,iridescence:A,iridescenceMap:Q,iridescenceThicknessMap:st,sheen:x,sheenColorMap:xt,sheenRoughnessMap:Ht,specularMap:Mt,specularColorMap:_t,specularIntensityMap:kt,transmission:B,transmissionMap:Vt,thicknessMap:Yt,gradientMap:U,opaque:_.transparent===!1&&_.blending===Yi&&_.alphaToCoverage===!1,alphaMap:dt,alphaTest:nt,alphaHash:yt,combine:_.combine,mapUv:Be&&p(_.map.channel),aoMapUv:ue&&p(_.aoMap.channel),lightMapUv:ae&&p(_.lightMap.channel),bumpMapUv:Pe&&p(_.bumpMap.channel),normalMapUv:Ge&&p(_.normalMap.channel),displacementMapUv:We&&p(_.displacementMap.channel),emissiveMapUv:Ye&&p(_.emissiveMap.channel),metalnessMapUv:Ae&&p(_.metalnessMap.channel),roughnessMapUv:Ie&&p(_.roughnessMap.channel),anisotropyMapUv:V&&p(_.anisotropyMap.channel),clearcoatMapUv:J&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:st&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&p(_.sheenRoughnessMap.channel),specularMapUv:Mt&&p(_.specularMap.channel),specularColorMapUv:_t&&p(_.specularColorMap.channel),specularIntensityMapUv:kt&&p(_.specularIntensityMap.channel),transmissionMapUv:Vt&&p(_.transmissionMap.channel),thicknessMapUv:Yt&&p(_.thicknessMap.channel),alphaMapUv:dt&&p(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ge||D),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(Be||dt),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&Ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Xt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:de,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===_e,decodeVideoTextureEmissive:Ye&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Te,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:mt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&_.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(T,_),b(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let T=f[_.type],P;if(T){let L=ei[T];P=hu.clone(L.uniforms)}else P=_.uniforms;return P}function v(_,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Fg(s,T,_,i),c.push(P),h.set(T,P)),P}function S(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:C}}function kg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function zg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Pu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Iu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,y,g,m){let b=s[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:m},s[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=p,b.materialVariant=a(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=g,b.group=m),t++,b}function l(u,f,p,y,g,m){let b=o(u,f,p,y,g,m);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):e.push(b)}function c(u,f,p,y,g,m){let b=o(u,f,p,y,g,m);p.transmission>0?n.unshift(b):p.transparent===!0?i.unshift(b):e.unshift(b)}function h(u,f,p){e.length>1&&e.sort(u||zg),n.length>1&&n.sort(f||Pu),i.length>1&&i.sort(f||Pu),p&&(e.reverse(),n.reverse(),i.reverse())}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Vg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Iu,s.set(n,[a])):i>=r.length?(a=new Iu,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Gg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Gt};break;case"SpotLight":e={position:new R,direction:new R,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Wg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Xg=0;function qg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Yg(s){let t=new Gg,e=Wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,r=new Ee,a=new Ee;function o(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,p=0,y=0,g=0,m=0,b=0,w=0,v=0,S=0,E=0,C=0;c.sort(qg);for(let T=0,P=c.length;T<P;T++){let L=c[T],F=L.color,q=L.intensity,Y=L.distance,k=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Bi?k=L.shadow.map.texture:k=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*q,d+=F.g*q,u+=F.b*q;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],q);C++}else if(L.isDirectionalLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,rt=e.get(L);rt.shadowIntensity=Z.intensity,rt.shadowBias=Z.bias,rt.shadowNormalBias=Z.normalBias,rt.shadowRadius=Z.radius,rt.shadowMapSize=Z.mapSize,n.directionalShadow[f]=rt,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=L.shadow.matrix,b++}n.directional[f]=$,f++}else if(L.isSpotLight){let $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(F).multiplyScalar(q),$.distance=Y,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[y]=$;let Z=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,Z.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[y]=Z.matrix,L.castShadow){let rt=e.get(L);rt.shadowIntensity=Z.intensity,rt.shadowBias=Z.bias,rt.shadowNormalBias=Z.normalBias,rt.shadowRadius=Z.radius,rt.shadowMapSize=Z.mapSize,n.spotShadow[y]=rt,n.spotShadowMap[y]=k,v++}y++}else if(L.isRectAreaLight){let $=t.get(L);$.color.copy(F).multiplyScalar(q),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=$,g++}else if(L.isPointLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){let Z=L.shadow,rt=e.get(L);rt.shadowIntensity=Z.intensity,rt.shadowBias=Z.bias,rt.shadowNormalBias=Z.normalBias,rt.shadowRadius=Z.radius,rt.shadowMapSize=Z.mapSize,rt.shadowCameraNear=Z.camera.near,rt.shadowCameraFar=Z.camera.far,n.pointShadow[p]=rt,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=L.shadow.matrix,w++}n.point[p]=$,p++}else if(L.isHemisphereLight){let $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(q),$.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[m]=$,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let _=n.hash;(_.directionalLength!==f||_.pointLength!==p||_.spotLength!==y||_.rectAreaLength!==g||_.hemiLength!==m||_.numDirectionalShadows!==b||_.numPointShadows!==w||_.numSpotShadows!==v||_.numSpotMaps!==S||_.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,_.directionalLength=f,_.pointLength=p,_.spotLength=y,_.rectAreaLength=g,_.hemiLength=m,_.numDirectionalShadows=b,_.numPointShadows=w,_.numSpotShadows=v,_.numSpotMaps=S,_.numLightProbes=C,n.version=Xg++)}function l(c,h){let d=0,u=0,f=0,p=0,y=0,g=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let w=c[m];if(w.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(w.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(w.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(w.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),u++}else if(w.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:n}}function Lu(s){let t=new Yg(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Zg(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Lu(s),t.set(i,[o])):r>=a.length?(o=new Lu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var $g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kg=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Qg=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Du=new Ee,Cr=new R,Rc=new R;function jg(s,t,e){let n=new ws,i=new Ct,r=new Ct,a=new Ne,o=new Da,l=new Ua,c={},h=e.maxTextureSize,d={[ui]:on,[on]:ui,[Te]:Te},u=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:$g,fragmentShader:Jg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new ke;p.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new X(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yr;let m=this.type;this.render=function(E,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Za&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yr);let T=s.getRenderTarget(),P=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Qn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let q=m!==this.type;q&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(k=>k.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,k=E.length;Y<k;Y++){let $=E[Y],Z=$.shadow;if(Z===void 0){Wt("WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let rt=Z.getFrameExtents();i.multiply(rt),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,Z.mapSize.y=r.y));let lt=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=lt,Z.map===null||q===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Rs){if($.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Xe(i.x,i.y,{format:Bi,type:jn,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),Z.map.texture.name=$.name+".shadowMap",Z.map.depthTexture=new xi(i.x,i.y,Nn),Z.map.depthTexture.name=$.name+".shadowMapDepth",Z.map.depthTexture.format=Zn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=sn,Z.map.depthTexture.magFilter=sn}else $.isPointLight?(Z.map=new zo(i.x),Z.map.depthTexture=new Sa(i.x,Gn)):(Z.map=new Xe(i.x,i.y),Z.map.depthTexture=new xi(i.x,i.y,Gn)),Z.map.depthTexture.name=$.name+".shadowMap",Z.map.depthTexture.format=Zn,this.type===yr?(Z.map.depthTexture.compareFunction=lt?Oo:Bo,Z.map.depthTexture.minFilter=Oe,Z.map.depthTexture.magFilter=Oe):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=sn,Z.map.depthTexture.magFilter=sn);Z.camera.updateProjectionMatrix()}let bt=Z.map.isWebGLCubeRenderTarget?6:1;for(let wt=0;wt<bt;wt++){if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,wt),s.clear();else{wt===0&&(s.setRenderTarget(Z.map),s.clear());let Pt=Z.getViewport(wt);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),F.viewport(a)}if($.isPointLight){let Pt=Z.camera,de=Z.matrix,me=$.distance||Pt.far;me!==Pt.far&&(Pt.far=me,Pt.updateProjectionMatrix()),Cr.setFromMatrixPosition($.matrixWorld),Pt.position.copy(Cr),Rc.copy(Pt.position),Rc.add(Kg[wt]),Pt.up.copy(Qg[wt]),Pt.lookAt(Rc),Pt.updateMatrixWorld(),de.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Du.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Du,Pt.coordinateSystem,Pt.reversedDepth)}else Z.updateMatrices($);n=Z.getFrustum(),v(C,_,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===Rs&&b(Z,_),Z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(T,P,L)};function b(E,C){let _=t.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xe(i.x,i.y,{format:Bi,type:jn})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,_,u,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,_,f,y,null)}function w(E,C,_,T){let P=null,L=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)P=L;else if(P=_.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=P.uuid,q=C.uuid,Y=c[F];Y===void 0&&(Y={},c[F]=Y);let k=Y[q];k===void 0&&(k=P.clone(),Y[q]=k,C.addEventListener("dispose",S)),P=k}if(P.visible=C.visible,P.wireframe=C.wireframe,T===Rs?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=s.properties.get(P);F.light=_}return P}function v(E,C,_,T,P){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Rs)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let q=t.update(E),Y=E.material;if(Array.isArray(Y)){let k=q.groups;for(let $=0,Z=k.length;$<Z;$++){let rt=k[$],lt=Y[rt.materialIndex];if(lt&&lt.visible){let bt=w(E,lt,T,P);E.onBeforeShadow(s,E,C,_,q,bt,rt),s.renderBufferDirect(_,null,q,bt,E,rt),E.onAfterShadow(s,E,C,_,q,bt,rt)}}}else if(Y.visible){let k=w(E,Y,T,P);E.onBeforeShadow(s,E,C,_,q,k,null),s.renderBufferDirect(_,null,q,k,E,null),E.onAfterShadow(s,E,C,_,q,k,null)}}let F=E.children;for(let q=0,Y=F.length;q<Y;q++)v(F[q],C,_,T,P)}function S(E){E.target.removeEventListener("dispose",S);for(let _ in c){let T=c[_],P=E.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function tx(s,t){function e(){let U=!1,dt=new Ne,nt=null,yt=new Ne(0,0,0,0);return{setMask:function(mt){nt!==mt&&!U&&(s.colorMask(mt,mt,mt,mt),nt=mt)},setLocked:function(mt){U=mt},setClear:function(mt,at,Bt,Ut,Le){Le===!0&&(mt*=Ut,at*=Ut,Bt*=Ut),dt.set(mt,at,Bt,Ut),yt.equals(dt)===!1&&(s.clearColor(mt,at,Bt,Ut),yt.copy(dt))},reset:function(){U=!1,nt=null,yt.set(-1,0,0,0)}}}function n(){let U=!1,dt=!1,nt=null,yt=null,mt=null;return{setReversed:function(at){if(dt!==at){let Bt=t.get("EXT_clip_control");at?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),dt=at;let Ut=mt;mt=null,this.setClear(Ut)}},getReversed:function(){return dt},setTest:function(at){at?ct(s.DEPTH_TEST):Xt(s.DEPTH_TEST)},setMask:function(at){nt!==at&&!U&&(s.depthMask(at),nt=at)},setFunc:function(at){if(dt&&(at=lu[at]),yt!==at){switch(at){case ua:s.depthFunc(s.NEVER);break;case da:s.depthFunc(s.ALWAYS);break;case fa:s.depthFunc(s.LESS);break;case Zi:s.depthFunc(s.LEQUAL);break;case pa:s.depthFunc(s.EQUAL);break;case ma:s.depthFunc(s.GEQUAL);break;case ga:s.depthFunc(s.GREATER);break;case xa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=at}},setLocked:function(at){U=at},setClear:function(at){mt!==at&&(mt=at,dt&&(at=1-at),s.clearDepth(at))},reset:function(){U=!1,nt=null,yt=null,mt=null,dt=!1}}}function i(){let U=!1,dt=null,nt=null,yt=null,mt=null,at=null,Bt=null,Ut=null,Le=null;return{setTest:function(be){U||(be?ct(s.STENCIL_TEST):Xt(s.STENCIL_TEST))},setMask:function(be){dt!==be&&!U&&(s.stencilMask(be),dt=be)},setFunc:function(be,On,In){(nt!==be||yt!==On||mt!==In)&&(s.stencilFunc(be,On,In),nt=be,yt=On,mt=In)},setOp:function(be,On,In){(at!==be||Bt!==On||Ut!==In)&&(s.stencilOp(be,On,In),at=be,Bt=On,Ut=In)},setLocked:function(be){U=be},setClear:function(be){Le!==be&&(s.clearStencil(be),Le=be)},reset:function(){U=!1,dt=null,nt=null,yt=null,mt=null,at=null,Bt=null,Ut=null,Le=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],y=null,g=!1,m=null,b=null,w=null,v=null,S=null,E=null,C=null,_=new Gt(0,0,0),T=0,P=!1,L=null,F=null,q=null,Y=null,k=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,rt=0,lt=s.getParameter(s.VERSION);lt.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(lt)[1]),Z=rt>=1):lt.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),Z=rt>=2);let bt=null,wt={},Pt=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),me=new Ne().fromArray(Pt),le=new Ne().fromArray(de);function it(U,dt,nt,yt){let mt=new Uint8Array(4),at=s.createTexture();s.bindTexture(U,at),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<nt;Bt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(dt+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return at}let ft={};ft[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(s.DEPTH_TEST),a.setFunc(Zi),Pe(!1),Ge(Kl),ct(s.CULL_FACE),ue(Qn);function ct(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Xt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function $t(U,dt){return u[U]!==dt?(s.bindFramebuffer(U,dt),u[U]=dt,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function It(U,dt){let nt=p,yt=!1;if(U){nt=f.get(dt),nt===void 0&&(nt=[],f.set(dt,nt));let mt=U.textures;if(nt.length!==mt.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let at=0,Bt=mt.length;at<Bt;at++)nt[at]=s.COLOR_ATTACHMENT0+at;nt.length=mt.length,yt=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,yt=!0);yt&&s.drawBuffers(nt)}function Be(U){return y!==U?(s.useProgram(U),y=U,!0):!1}let ee={[Ci]:s.FUNC_ADD,[Ih]:s.FUNC_SUBTRACT,[Lh]:s.FUNC_REVERSE_SUBTRACT};ee[Dh]=s.MIN,ee[Uh]=s.MAX;let ce={[Nh]:s.ZERO,[Fh]:s.ONE,[Bh]:s.SRC_COLOR,[ca]:s.SRC_ALPHA,[Gh]:s.SRC_ALPHA_SATURATE,[zh]:s.DST_COLOR,[Hh]:s.DST_ALPHA,[Oh]:s.ONE_MINUS_SRC_COLOR,[ha]:s.ONE_MINUS_SRC_ALPHA,[Vh]:s.ONE_MINUS_DST_COLOR,[kh]:s.ONE_MINUS_DST_ALPHA,[Wh]:s.CONSTANT_COLOR,[Xh]:s.ONE_MINUS_CONSTANT_COLOR,[qh]:s.CONSTANT_ALPHA,[Yh]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(U,dt,nt,yt,mt,at,Bt,Ut,Le,be){if(U===Qn){g===!0&&(Xt(s.BLEND),g=!1);return}if(g===!1&&(ct(s.BLEND),g=!0),U!==Ph){if(U!==m||be!==P){if((b!==Ci||S!==Ci)&&(s.blendEquation(s.FUNC_ADD),b=Ci,S=Ci),be)switch(U){case Yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cn:s.blendFunc(s.ONE,s.ONE);break;case Ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qt("WebGLState: Invalid blending: ",U);break}else switch(U){case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ql:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",U);break}w=null,v=null,E=null,C=null,_.set(0,0,0),T=0,m=U,P=be}return}mt=mt||dt,at=at||nt,Bt=Bt||yt,(dt!==b||mt!==S)&&(s.blendEquationSeparate(ee[dt],ee[mt]),b=dt,S=mt),(nt!==w||yt!==v||at!==E||Bt!==C)&&(s.blendFuncSeparate(ce[nt],ce[yt],ce[at],ce[Bt]),w=nt,v=yt,E=at,C=Bt),(Ut.equals(_)===!1||Le!==T)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Le),_.copy(Ut),T=Le),m=U,P=!1}function ae(U,dt){U.side===Te?Xt(s.CULL_FACE):ct(s.CULL_FACE);let nt=U.side===on;dt&&(nt=!nt),Pe(nt),U.blending===Yi&&U.transparent===!1?ue(Qn):ue(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let yt=U.stencilWrite;o.setTest(yt),yt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):Xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(U){L!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),L=U)}function Ge(U){U!==Rh?(ct(s.CULL_FACE),U!==F&&(U===Kl?s.cullFace(s.BACK):U===Ch?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Xt(s.CULL_FACE),F=U}function We(U){U!==q&&(Z&&s.lineWidth(U),q=U)}function Ye(U,dt,nt){U?(ct(s.POLYGON_OFFSET_FILL),(Y!==dt||k!==nt)&&(Y=dt,k=nt,a.getReversed()&&(dt=-dt),s.polygonOffset(dt,nt))):Xt(s.POLYGON_OFFSET_FILL)}function Ae(U){U?ct(s.SCISSOR_TEST):Xt(s.SCISSOR_TEST)}function Ie(U){U===void 0&&(U=s.TEXTURE0+$-1),bt!==U&&(s.activeTexture(U),bt=U)}function D(U,dt,nt){nt===void 0&&(bt===null?nt=s.TEXTURE0+$-1:nt=bt);let yt=wt[nt];yt===void 0&&(yt={type:void 0,texture:void 0},wt[nt]=yt),(yt.type!==U||yt.texture!==dt)&&(bt!==nt&&(s.activeTexture(nt),bt=nt),s.bindTexture(U,dt||ft[U]),yt.type=U,yt.texture=dt)}function cn(){let U=wt[bt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function pe(){try{s.compressedTexImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function x(){try{s.texSubImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function B(){try{s.texSubImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function J(){try{s.compressedTexSubImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function ut(){try{s.texStorage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function pt(){try{s.texStorage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function Q(){try{s.texImage2D(...arguments)}catch(U){qt("WebGLState:",U)}}function st(){try{s.texImage3D(...arguments)}catch(U){qt("WebGLState:",U)}}function xt(U){return d[U]!==void 0?d[U]:s.getParameter(U)}function Ht(U,dt){d[U]!==dt&&(s.pixelStorei(U,dt),d[U]=dt)}function Mt(U){me.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),me.copy(U))}function _t(U){le.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),le.copy(U))}function kt(U,dt){let nt=c.get(dt);nt===void 0&&(nt=new WeakMap,c.set(dt,nt));let yt=nt.get(U);yt===void 0&&(yt=s.getUniformBlockIndex(dt,U.name),nt.set(U,yt))}function Vt(U,dt){let yt=c.get(dt).get(U);l.get(dt)!==yt&&(s.uniformBlockBinding(dt,yt,U.__bindingPointIndex),l.set(dt,yt))}function Yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},bt=null,wt={},u={},f=new WeakMap,p=[],y=null,g=!1,m=null,b=null,w=null,v=null,S=null,E=null,C=null,_=new Gt(0,0,0),T=0,P=!1,L=null,F=null,q=null,Y=null,k=null,me.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:Xt,bindFramebuffer:$t,drawBuffers:It,useProgram:Be,setBlending:ue,setMaterial:ae,setFlipSided:Pe,setCullFace:Ge,setLineWidth:We,setPolygonOffset:Ye,setScissorTest:Ae,activeTexture:Ie,bindTexture:D,unbindTexture:cn,compressedTexImage2D:pe,compressedTexImage3D:A,texImage2D:Q,texImage3D:st,pixelStorei:Ht,getParameter:xt,updateUBOMapping:kt,uniformBlockBinding:Vt,texStorage2D:ut,texStorage3D:pt,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:J,scissor:Mt,viewport:_t,reset:Yt}}function ex(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,x){return p?new OffscreenCanvas(A,x):js("canvas")}function g(A,x,B){let V=1,J=pe(A);if((J.width>B||J.height>B)&&(V=B/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ut=Math.floor(V*J.width),pt=Math.floor(V*J.height);u===void 0&&(u=y(ut,pt));let Q=x?y(ut,pt):u;return Q.width=ut,Q.height=pt,Q.getContext("2d").drawImage(A,0,0,ut,pt),Wt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ut+"x"+pt+")."),Q}else return"data"in A&&Wt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function b(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,x,B,V,J,ut=!1){if(A!==null){if(s[A]!==void 0)return s[A];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pt;V&&(pt=t.get("EXT_texture_norm16"),pt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===s.RED&&(B===s.FLOAT&&(Q=s.R32F),B===s.HALF_FLOAT&&(Q=s.R16F),B===s.UNSIGNED_BYTE&&(Q=s.R8),B===s.UNSIGNED_SHORT&&pt&&(Q=pt.R16_EXT),B===s.SHORT&&pt&&(Q=pt.R16_SNORM_EXT)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Q=s.R8UI),B===s.UNSIGNED_SHORT&&(Q=s.R16UI),B===s.UNSIGNED_INT&&(Q=s.R32UI),B===s.BYTE&&(Q=s.R8I),B===s.SHORT&&(Q=s.R16I),B===s.INT&&(Q=s.R32I)),x===s.RG&&(B===s.FLOAT&&(Q=s.RG32F),B===s.HALF_FLOAT&&(Q=s.RG16F),B===s.UNSIGNED_BYTE&&(Q=s.RG8),B===s.UNSIGNED_SHORT&&pt&&(Q=pt.RG16_EXT),B===s.SHORT&&pt&&(Q=pt.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Q=s.RG8UI),B===s.UNSIGNED_SHORT&&(Q=s.RG16UI),B===s.UNSIGNED_INT&&(Q=s.RG32UI),B===s.BYTE&&(Q=s.RG8I),B===s.SHORT&&(Q=s.RG16I),B===s.INT&&(Q=s.RG32I)),x===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),B===s.UNSIGNED_INT&&(Q=s.RGB32UI),B===s.BYTE&&(Q=s.RGB8I),B===s.SHORT&&(Q=s.RGB16I),B===s.INT&&(Q=s.RGB32I)),x===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),B===s.UNSIGNED_INT&&(Q=s.RGBA32UI),B===s.BYTE&&(Q=s.RGBA8I),B===s.SHORT&&(Q=s.RGBA16I),B===s.INT&&(Q=s.RGBA32I)),x===s.RGB&&(B===s.UNSIGNED_SHORT&&pt&&(Q=pt.RGB16_EXT),B===s.SHORT&&pt&&(Q=pt.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),x===s.RGBA){let st=ut?Qs:oe.getTransfer(J);B===s.FLOAT&&(Q=s.RGBA32F),B===s.HALF_FLOAT&&(Q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Q=st===_e?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&pt&&(Q=pt.RGBA16_EXT),B===s.SHORT&&pt&&(Q=pt.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function S(A,x){let B;return A?x===null||x===Gn||x===Ps?B=s.DEPTH24_STENCIL8:x===Nn?B=s.DEPTH32F_STENCIL8:x===Cs&&(B=s.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gn||x===Ps?B=s.DEPTH_COMPONENT24:x===Nn?B=s.DEPTH_COMPONENT32F:x===Cs&&(B=s.DEPTH_COMPONENT16),B}function E(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==Oe?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(A){let x=A.target;x.removeEventListener("dispose",_),L(x)}function T(A){let x=n.get(A);if(x.__webglInit===void 0)return;let B=A.source,V=f.get(B);if(V){let J=V[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(A),Object.keys(V).length===0&&f.delete(B)}n.remove(A)}function P(A){let x=n.get(A);s.deleteTexture(x.__webglTexture);let B=A.source,V=f.get(B);delete V[x.__cacheKey],a.memory.textures--}function L(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let J=0;J<x.__webglFramebuffer[V].length;J++)s.deleteFramebuffer(x.__webglFramebuffer[V][J]);else s.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)s.deleteFramebuffer(x.__webglFramebuffer[V]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=A.textures;for(let V=0,J=B.length;V<J;V++){let ut=n.get(B[V]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(B[V])}n.remove(A)}let F=0;function q(){F=0}function Y(){return F}function k(A){F=A}function $(){let A=F;return A>=i.maxTextures&&Wt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),F+=1,A}function Z(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function rt(A,x){let B=n.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let V=A.image;if(V===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function lt(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Xt(B,A,x);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function bt(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Xt(B,A,x);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function wt(A,x){let B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){$t(B,A,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}let Pt={[di]:s.REPEAT,[Dn]:s.CLAMP_TO_EDGE,[_a]:s.MIRRORED_REPEAT},de={[sn]:s.NEAREST,[Jh]:s.NEAREST_MIPMAP_NEAREST,[Mr]:s.NEAREST_MIPMAP_LINEAR,[Oe]:s.LINEAR,[Ka]:s.LINEAR_MIPMAP_NEAREST,[Ni]:s.LINEAR_MIPMAP_LINEAR},me={[jh]:s.NEVER,[su]:s.ALWAYS,[tu]:s.LESS,[Bo]:s.LEQUAL,[eu]:s.EQUAL,[Oo]:s.GEQUAL,[nu]:s.GREATER,[iu]:s.NOTEQUAL};function le(A,x){if(x.type===Nn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Oe||x.magFilter===Ka||x.magFilter===Mr||x.magFilter===Ni||x.minFilter===Oe||x.minFilter===Ka||x.minFilter===Mr||x.minFilter===Ni)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Pt[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Pt[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Pt[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,de[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===sn||x.minFilter!==Mr&&x.minFilter!==Ni||x.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function it(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let V=x.source,J=f.get(V);J===void 0&&(J={},f.set(V,J));let ut=Z(x);if(ut!==A.__cacheKey){J[ut]===void 0&&(J[ut]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[ut].usedTimes++;let pt=J[A.__cacheKey];pt!==void 0&&(J[A.__cacheKey].usedTimes--,pt.usedTimes===0&&P(x)),A.__cacheKey=ut,A.__webglTexture=J[ut].texture}return B}function ft(A,x,B){return Math.floor(Math.floor(A/B)/x)}function ct(A,x,B,V){let ut=A.updateRanges;if(ut.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,B,V,x.data);else{ut.sort((Ht,Mt)=>Ht.start-Mt.start);let pt=0;for(let Ht=1;Ht<ut.length;Ht++){let Mt=ut[pt],_t=ut[Ht],kt=Mt.start+Mt.count,Vt=ft(_t.start,x.width,4),Yt=ft(Mt.start,x.width,4);_t.start<=kt+1&&Vt===Yt&&ft(_t.start+_t.count-1,x.width,4)===Vt?Mt.count=Math.max(Mt.count,_t.start+_t.count-Mt.start):(++pt,ut[pt]=_t)}ut.length=pt+1;let Q=e.getParameter(s.UNPACK_ROW_LENGTH),st=e.getParameter(s.UNPACK_SKIP_PIXELS),xt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Ht=0,Mt=ut.length;Ht<Mt;Ht++){let _t=ut[Ht],kt=Math.floor(_t.start/4),Vt=Math.ceil(_t.count/4),Yt=kt%x.width,U=Math.floor(kt/x.width),dt=Vt,nt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,Yt,U,dt,nt,B,V,x.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,st),e.pixelStorei(s.UNPACK_SKIP_ROWS,xt)}}function Xt(A,x,B){let V=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=s.TEXTURE_3D);let J=it(A,x),ut=x.source;e.bindTexture(V,A.__webglTexture,s.TEXTURE0+B);let pt=n.get(ut);if(ut.version!==pt.__version||J===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let nt=oe.getPrimaries(oe.workingColorSpace),yt=x.colorSpace===yi?null:oe.getPrimaries(x.colorSpace),mt=x.colorSpace===yi||nt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let st=g(x.image,!1,i.maxTextureSize);st=cn(x,st);let xt=r.convert(x.format,x.colorSpace),Ht=r.convert(x.type),Mt=v(x.internalFormat,xt,Ht,x.normalized,x.colorSpace,x.isVideoTexture);le(V,x);let _t,kt=x.mipmaps,Vt=x.isVideoTexture!==!0,Yt=pt.__version===void 0||J===!0,U=ut.dataReady,dt=E(x,st);if(x.isDepthTexture)Mt=S(x.format===Fi,x.type),Yt&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,Mt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Mt,st.width,st.height,0,xt,Ht,null));else if(x.isDataTexture)if(kt.length>0){Vt&&Yt&&e.texStorage2D(s.TEXTURE_2D,dt,Mt,kt[0].width,kt[0].height);for(let nt=0,yt=kt.length;nt<yt;nt++)_t=kt[nt],Vt?U&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,_t.width,_t.height,xt,Ht,_t.data):e.texImage2D(s.TEXTURE_2D,nt,Mt,_t.width,_t.height,0,xt,Ht,_t.data);x.generateMipmaps=!1}else Vt?(Yt&&e.texStorage2D(s.TEXTURE_2D,dt,Mt,st.width,st.height),U&&ct(x,st,xt,Ht)):e.texImage2D(s.TEXTURE_2D,0,Mt,st.width,st.height,0,xt,Ht,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Vt&&Yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Mt,kt[0].width,kt[0].height,st.depth);for(let nt=0,yt=kt.length;nt<yt;nt++)if(_t=kt[nt],x.format!==Fn)if(xt!==null)if(Vt){if(U)if(x.layerUpdates.size>0){let mt=bc(_t.width,_t.height,x.format,x.type);for(let at of x.layerUpdates){let Bt=_t.data.subarray(at*mt/_t.data.BYTES_PER_ELEMENT,(at+1)*mt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,at,_t.width,_t.height,1,xt,Bt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,st.depth,xt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,Mt,_t.width,_t.height,st.depth,0,_t.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,st.depth,xt,Ht,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,Mt,_t.width,_t.height,st.depth,0,xt,Ht,_t.data)}else{Vt&&Yt&&e.texStorage2D(s.TEXTURE_2D,dt,Mt,kt[0].width,kt[0].height);for(let nt=0,yt=kt.length;nt<yt;nt++)_t=kt[nt],x.format!==Fn?xt!==null?Vt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,Mt,_t.width,_t.height,0,_t.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?U&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,_t.width,_t.height,xt,Ht,_t.data):e.texImage2D(s.TEXTURE_2D,nt,Mt,_t.width,_t.height,0,xt,Ht,_t.data)}else if(x.isDataArrayTexture)if(Vt){if(Yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Mt,st.width,st.height,st.depth),U)if(x.layerUpdates.size>0){let nt=bc(st.width,st.height,x.format,x.type);for(let yt of x.layerUpdates){let mt=st.data.subarray(yt*nt/st.data.BYTES_PER_ELEMENT,(yt+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,st.width,st.height,1,xt,Ht,mt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Ht,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,st.width,st.height,st.depth,0,xt,Ht,st.data);else if(x.isData3DTexture)Vt?(Yt&&e.texStorage3D(s.TEXTURE_3D,dt,Mt,st.width,st.height,st.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Ht,st.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,st.width,st.height,st.depth,0,xt,Ht,st.data);else if(x.isFramebufferTexture){if(Yt)if(Vt)e.texStorage2D(s.TEXTURE_2D,dt,Mt,st.width,st.height);else{let nt=st.width,yt=st.height;for(let mt=0;mt<dt;mt++)e.texImage2D(s.TEXTURE_2D,mt,Mt,nt,yt,0,xt,Ht,null),nt>>=1,yt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let nt=s.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),st.parentNode!==nt){nt.appendChild(st),d.add(x),nt.onpaint=yt=>{let mt=yt.changedElements;for(let at of d)mt.includes(at.image)&&(at.needsUpdate=!0)},nt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,st);else{let mt=s.RGBA,at=s.RGBA,Bt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,mt,at,Bt,st)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Vt&&Yt){let nt=pe(kt[0]);e.texStorage2D(s.TEXTURE_2D,dt,Mt,nt.width,nt.height)}for(let nt=0,yt=kt.length;nt<yt;nt++)_t=kt[nt],Vt?U&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,xt,Ht,_t):e.texImage2D(s.TEXTURE_2D,nt,Mt,xt,Ht,_t);x.generateMipmaps=!1}else if(Vt){if(Yt){let nt=pe(st);e.texStorage2D(s.TEXTURE_2D,dt,Mt,nt.width,nt.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Ht,st)}else e.texImage2D(s.TEXTURE_2D,0,Mt,xt,Ht,st);m(x)&&b(V),pt.__version=ut.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function $t(A,x,B){if(x.image.length!==6)return;let V=it(A,x),J=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let ut=n.get(J);if(J.version!==ut.__version||V===!0){e.activeTexture(s.TEXTURE0+B);let pt=oe.getPrimaries(oe.workingColorSpace),Q=x.colorSpace===yi?null:oe.getPrimaries(x.colorSpace),st=x.colorSpace===yi||pt===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let xt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ht=x.image[0]&&x.image[0].isDataTexture,Mt=[];for(let at=0;at<6;at++)!xt&&!Ht?Mt[at]=g(x.image[at],!0,i.maxCubemapSize):Mt[at]=Ht?x.image[at].image:x.image[at],Mt[at]=cn(x,Mt[at]);let _t=Mt[0],kt=r.convert(x.format,x.colorSpace),Vt=r.convert(x.type),Yt=v(x.internalFormat,kt,Vt,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,dt=ut.__version===void 0||V===!0,nt=J.dataReady,yt=E(x,_t);le(s.TEXTURE_CUBE_MAP,x);let mt;if(xt){U&&dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Yt,_t.width,_t.height);for(let at=0;at<6;at++){mt=Mt[at].mipmaps;for(let Bt=0;Bt<mt.length;Bt++){let Ut=mt[Bt];x.format!==Fn?kt!==null?U?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,0,0,Ut.width,Ut.height,kt,Ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,Yt,Ut.width,Ut.height,0,Ut.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,0,0,Ut.width,Ut.height,kt,Vt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,Yt,Ut.width,Ut.height,0,kt,Vt,Ut.data)}}}else{if(mt=x.mipmaps,U&&dt){mt.length>0&&yt++;let at=pe(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Yt,at.width,at.height)}for(let at=0;at<6;at++)if(Ht){U?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Mt[at].width,Mt[at].height,kt,Vt,Mt[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Yt,Mt[at].width,Mt[at].height,0,kt,Vt,Mt[at].data);for(let Bt=0;Bt<mt.length;Bt++){let Le=mt[Bt].image[at].image;U?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,0,0,Le.width,Le.height,kt,Vt,Le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,Yt,Le.width,Le.height,0,kt,Vt,Le.data)}}else{U?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,kt,Vt,Mt[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Yt,kt,Vt,Mt[at]);for(let Bt=0;Bt<mt.length;Bt++){let Ut=mt[Bt];U?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,0,0,kt,Vt,Ut.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,Yt,kt,Vt,Ut.image[at])}}}m(x)&&b(s.TEXTURE_CUBE_MAP),ut.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function It(A,x,B,V,J,ut){let pt=r.convert(B.format,B.colorSpace),Q=r.convert(B.type),st=v(B.internalFormat,pt,Q,B.normalized,B.colorSpace),xt=n.get(x),Ht=n.get(B);if(Ht.__renderTarget=x,!xt.__hasExternalTextures){let Mt=Math.max(1,x.width>>ut),_t=Math.max(1,x.height>>ut);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,ut,st,Mt,_t,x.depth,0,pt,Q,null):e.texImage2D(J,ut,st,Mt,_t,0,pt,Q,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Ie(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,J,Ht.__webglTexture,0,Ae(x)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,J,Ht.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(A,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){let V=x.depthTexture,J=V&&V.isDepthTexture?V.type:null,ut=S(x.stencilBuffer,J),pt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae(x),ut,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae(x),ut,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ut,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,A)}else{let V=x.textures;for(let J=0;J<V.length;J++){let ut=V[J],pt=r.convert(ut.format,ut.colorSpace),Q=r.convert(ut.type),st=v(ut.internalFormat,pt,Q,ut.normalized,ut.colorSpace);Ie(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae(x),st,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae(x),st,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,st,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(A,x,B){let V=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),le(s.TEXTURE_CUBE_MAP,x.depthTexture);let xt=r.convert(x.depthTexture.format),Ht=r.convert(x.depthTexture.type),Mt;x.depthTexture.format===Zn?Mt=s.DEPTH_COMPONENT24:x.depthTexture.format===Fi&&(Mt=s.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Mt,x.width,x.height,0,xt,Ht,null)}}else rt(x.depthTexture,0);let ut=J.__webglTexture,pt=Ae(x),Q=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,st=x.depthTexture.format===Fi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Zn)Ie(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,Q,ut,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,st,Q,ut,0);else if(x.depthTexture.format===Fi)Ie(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,Q,ut,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,st,Q,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(A){let x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=V}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)ee(x.__webglFramebuffer[V],A,V);else{let V=A.texture.mipmaps;V&&V.length>0?ee(x.__webglFramebuffer[0],A,0):ee(x.__webglFramebuffer,A,0)}else if(B){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=s.createRenderbuffer(),Be(x.__webglDepthbuffer[V],A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,ut)}}else{let V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Be(x.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,ut)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(A,x,B){let V=n.get(A);x!==void 0&&It(V.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&ce(A)}function ae(A){let x=A.texture,B=n.get(A),V=n.get(x);A.addEventListener("dispose",_);let J=A.textures,ut=A.isWebGLCubeRenderTarget===!0,pt=J.length>1;if(pt||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=x.version,a.memory.textures++),ut){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let st=0;st<x.mipmaps.length;st++)B.__webglFramebuffer[Q][st]=s.createFramebuffer()}else B.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)B.__webglFramebuffer[Q]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(pt)for(let Q=0,st=J.length;Q<st;Q++){let xt=n.get(J[Q]);xt.__webglTexture===void 0&&(xt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Ie(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){let st=J[Q];B.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);let xt=r.convert(st.format,st.colorSpace),Ht=r.convert(st.type),Mt=v(st.internalFormat,xt,Ht,st.normalized,st.colorSpace,A.isXRRenderTarget===!0),_t=Ae(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,Mt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),le(s.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)It(B.__webglFramebuffer[Q][st],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st);else It(B.__webglFramebuffer[Q],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(x)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let Q=0,st=J.length;Q<st;Q++){let xt=J[Q],Ht=n.get(xt),Mt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Mt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Ht.__webglTexture),le(Mt,xt),It(B.__webglFramebuffer,A,xt,s.COLOR_ATTACHMENT0+Q,Mt,0),m(xt)&&b(Mt)}e.unbindTexture()}else{let Q=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,V.__webglTexture),le(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)It(B.__webglFramebuffer[st],A,x,s.COLOR_ATTACHMENT0,Q,st);else It(B.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,Q,0);m(x)&&b(Q),e.unbindTexture()}A.depthBuffer&&ce(A)}function Pe(A){let x=A.textures;for(let B=0,V=x.length;B<V;B++){let J=x[B];if(m(J)){let ut=w(A),pt=n.get(J).__webglTexture;e.bindTexture(ut,pt),b(ut),e.unbindTexture()}}}let Ge=[],We=[];function Ye(A){if(A.samples>0){if(Ie(A)===!1){let x=A.textures,B=A.width,V=A.height,J=s.COLOR_BUFFER_BIT,ut=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=n.get(A),Q=x.length>1;if(Q)for(let xt=0;xt<x.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let st=A.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pt.__webglColorRenderbuffer[xt]);let Ht=n.get(x[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ht,0)}s.blitFramebuffer(0,0,B,V,0,0,B,V,J,s.NEAREST),l===!0&&(Ge.length=0,We.length=0,Ge.push(s.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ge.push(ut),We.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,We)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ge))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let xt=0;xt<x.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,pt.__webglColorRenderbuffer[xt]);let Ht=n.get(x[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Ae(A){return Math.min(i.maxSamples,A.samples)}function Ie(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function cn(A,x){let B=A.colorSpace,V=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ks&&B!==yi&&(oe.getTransfer(B)===_e?(V!==Fn||J!==bn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",B)),x}function pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=q,this.getTextureUnits=Y,this.setTextureUnits=k,this.setTexture2D=rt,this.setTexture2DArray=lt,this.setTexture3D=bt,this.setTextureCube=wt,this.rebindTextures=ue,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function nx(s,t){function e(n,i=yi){let r,a=oe.getTransfer(i);if(n===bn)return s.UNSIGNED_BYTE;if(n===ja)return s.UNSIGNED_SHORT_4_4_4_4;if(n===to)return s.UNSIGNED_SHORT_5_5_5_1;if(n===uc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===cc)return s.BYTE;if(n===hc)return s.SHORT;if(n===Cs)return s.UNSIGNED_SHORT;if(n===Qa)return s.INT;if(n===Gn)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===jn)return s.HALF_FLOAT;if(n===fc)return s.ALPHA;if(n===pc)return s.RGB;if(n===Fn)return s.RGBA;if(n===Zn)return s.DEPTH_COMPONENT;if(n===Fi)return s.DEPTH_STENCIL;if(n===eo)return s.RED;if(n===no)return s.RED_INTEGER;if(n===Bi)return s.RG;if(n===io)return s.RG_INTEGER;if(n===so)return s.RGBA_INTEGER;if(n===br||n===Er||n===Sr||n===Tr)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===ao||n===oo||n===lo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===wr||n===mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===co||n===ho)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fo)return r.COMPRESSED_R11_EAC;if(n===po)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wr)return r.COMPRESSED_RG11_EAC;if(n===mo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===go||n===xo||n===_o||n===yo||n===vo||n===Mo||n===bo||n===Eo||n===So||n===To||n===wo||n===Ao||n===Ro||n===Co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===go)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ro)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===Io||n===Lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Uo||n===Ar||n===No)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new qe({vertexShader:ix,fragmentShader:sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends $n{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,y=typeof XRWebGLBinding<"u",g=new Fc,m={},b=e.getContextAttributes(),w=null,v=null,S=[],E=[],C=new Ct,_=null,T=new Je;T.viewport=new Ne;let P=new Je;P.viewport=new Ne;let L=[T,P],F=new Ya,q=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ft=S[it];return ft===void 0&&(ft=new Ts,S[it]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(it){let ft=S[it];return ft===void 0&&(ft=new Ts,S[it]=ft),ft.getGripSpace()},this.getHand=function(it){let ft=S[it];return ft===void 0&&(ft=new Ts,S[it]=ft),ft.getHandSpace()};function k(it){let ft=E.indexOf(it.inputSource);if(ft===-1)return;let ct=S[ft];ct!==void 0&&(ct.update(it.inputSource,it.frame,c||a),ct.dispatchEvent({type:it.type,data:it.inputSource}))}function $(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",Z);for(let it=0;it<S.length;it++){let ft=E[it];ft!==null&&(E[it]=null,S[it].disconnect(ft))}q=null,Y=null,g.reset();for(let it in m)delete m[it];t.setRenderTarget(w),f=null,u=null,d=null,i=null,v=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(it){if(i=it,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",$),i.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Xt=null,$t=null;b.depth&&($t=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=b.stencil?Fi:Zn,Xt=b.stencil?Ps:Gn);let It={colorFormat:e.RGBA8,depthFormat:$t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(It),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Xe(u.textureWidth,u.textureHeight,{format:Fn,type:bn,depthTexture:new xi(u.textureWidth,u.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ct={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ct),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Xe(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(it){for(let ft=0;ft<it.removed.length;ft++){let ct=it.removed[ft],Xt=E.indexOf(ct);Xt>=0&&(E[Xt]=null,S[Xt].disconnect(ct))}for(let ft=0;ft<it.added.length;ft++){let ct=it.added[ft],Xt=E.indexOf(ct);if(Xt===-1){for(let It=0;It<S.length;It++)if(It>=E.length){E.push(ct),Xt=It;break}else if(E[It]===null){E[It]=ct,Xt=It;break}if(Xt===-1)break}let $t=S[Xt];$t&&$t.connect(ct)}}let rt=new R,lt=new R;function bt(it,ft,ct){rt.setFromMatrixPosition(ft.matrixWorld),lt.setFromMatrixPosition(ct.matrixWorld);let Xt=rt.distanceTo(lt),$t=ft.projectionMatrix.elements,It=ct.projectionMatrix.elements,Be=$t[14]/($t[10]-1),ee=$t[14]/($t[10]+1),ce=($t[9]+1)/$t[5],ue=($t[9]-1)/$t[5],ae=($t[8]-1)/$t[0],Pe=(It[8]+1)/It[0],Ge=Be*ae,We=Be*Pe,Ye=Xt/(-ae+Pe),Ae=Ye*-ae;if(ft.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ae),it.translateZ(Ye),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),$t[10]===-1)it.projectionMatrix.copy(ft.projectionMatrix),it.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let Ie=Be+Ye,D=ee+Ye,cn=Ge-Ae,pe=We+(Xt-Ae),A=ce*ee/D*Ie,x=ue*ee/D*Ie;it.projectionMatrix.makePerspective(cn,pe,A,x,Ie,D),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function wt(it,ft){ft===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ft.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(i===null)return;let ft=it.near,ct=it.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(ct=g.depthFar)),F.near=P.near=T.near=ft,F.far=P.far=T.far=ct,(q!==F.near||Y!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),q=F.near,Y=F.far),F.layers.mask=it.layers.mask|6,T.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let Xt=it.parent,$t=F.cameras;wt(F,Xt);for(let It=0;It<$t.length;It++)wt($t[It],Xt);$t.length===2?bt(F,T,P):F.projectionMatrix.copy(T.projectionMatrix),Pt(it,F,Xt)};function Pt(it,ft,ct){ct===null?it.matrix.copy(ft.matrixWorld):(it.matrix.copy(ct.matrixWorld),it.matrix.invert(),it.matrix.multiply(ft.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ft.projectionMatrix),it.projectionMatrixInverse.copy(ft.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=$i*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(it){l=it,u!==null&&(u.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(it){return m[it]};let de=null;function me(it,ft){if(h=ft.getViewerPose(c||a),p=ft,h!==null){let ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Xt=!1;ct.length!==F.cameras.length&&(F.cameras.length=0,Xt=!0);for(let ee=0;ee<ct.length;ee++){let ce=ct[ee],ue=null;if(f!==null)ue=f.getViewport(ce);else{let Pe=d.getViewSubImage(u,ce);ue=Pe.viewport,ee===0&&(t.setRenderTargetTextures(v,Pe.colorTexture,Pe.depthStencilTexture),t.setRenderTarget(v))}let ae=L[ee];ae===void 0&&(ae=new Je,ae.layers.enable(ee),ae.viewport=new Ne,L[ee]=ae),ae.matrix.fromArray(ce.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(ue.x,ue.y,ue.width,ue.height),ee===0&&(F.matrix.copy(ae.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Xt===!0&&F.cameras.push(ae)}let $t=i.enabledFeatures;if($t&&$t.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let ee=d.getDepthInformation(ct[0]);ee&&ee.isValid&&ee.texture&&g.init(ee,i.renderState)}if($t&&$t.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let ee=0;ee<ct.length;ee++){let ce=ct[ee].camera;if(ce){let ue=m[ce];ue||(ue=new hr,m[ce]=ue);let ae=d.getCameraImage(ce);ue.sourceTexture=ae}}}}for(let ct=0;ct<S.length;ct++){let Xt=E[ct],$t=S[ct];Xt!==null&&$t!==void 0&&$t.update(Xt,ft,c||a)}de&&de(it,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),p=null}let le=new Uu;le.setAnimationLoop(me),this.setAnimationLoop=function(it){de=it},this.dispose=function(){}}},rx=new Ee,ku=new Jt;ku.set(-1,0,0,0,1,0,0,0,1);function ax(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,yc(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,b,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,b,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===on&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===on&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),w=b.envMap,v=b.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ku),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ox(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let E=S.program;n.uniformBlockBinding(v,E)}function c(v,S){let E=i[v.id];E===void 0&&(g(v),E=h(v),i[v.id]=E,v.addEventListener("dispose",b));let C=S.program;n.updateUBOMapping(v,C);let _=t.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){let S=d();v.__bindingPointIndex=S;let E=s.createBuffer(),C=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,E),E}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=i[v.id],E=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,T=E.length;_<T;_++){let P=E[_];if(Array.isArray(P))for(let L=0,F=P.length;L<F;L++)f(P[L],_,L,C);else f(P,_,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,S,E,C){if(y(v,S,E,C)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let L=0;L<T.length;L++){let F=T[L],q=m(F);p(F,v.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function p(v,S,E){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,E)}function y(v,S,E,C){let _=v.value,T=S+"_"+E;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{let P=C[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(v){let S=v.uniforms,E=0,C=16;for(let T=0,P=S.length;T<P;T++){let L=Array.isArray(S[T])?S[T]:[S[T]];for(let F=0,q=L.length;F<q;F++){let Y=L[F],k=Array.isArray(Y.value)?Y.value:[Y.value];for(let $=0,Z=k.length;$<Z;$++){let rt=k[$],lt=m(rt),bt=E%C,wt=bt%lt.boundary,Pt=bt+wt;E+=wt,Pt!==0&&C-Pt<lt.storage&&(E+=C-Pt),Y.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=lt.storage}}}let _=E%C;return _>0&&(E+=C-_),v.__size=E,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",v),S}function b(v){let S=v.target;S.removeEventListener("dispose",b);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function w(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}var lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function cx(){return ti===null&&(ti=new ar(lx,16,16,Bi,jn),ti.name="DFG_LUT",ti.minFilter=Oe,ti.magFilter=Oe,ti.wrapS=Dn,ti.wrapT=Dn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var Vo=class{constructor(t={}){let{canvas:e=ru(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=bn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=f,g=new Set([so,io,no]),m=new Set([bn,Gn,Cs,Ps,ja,to]),b=new Uint32Array(4),w=new Int32Array(4),v=new R,S=null,E=null,C=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,F=null,q=null,Y=null,k=null;this._outputColorSpace=Qe;let $=0,Z=0,rt=null,lt=-1,bt=null,wt=new Ne,Pt=new Ne,de=null,me=new Gt(0),le=0,it=e.width,ft=e.height,ct=1,Xt=null,$t=null,It=new Ne(0,0,it,ft),Be=new Ne(0,0,it,ft),ee=!1,ce=new ws,ue=!1,ae=!1,Pe=new Ee,Ge=new R,We=new Ne,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Ie(){return rt===null?ct:1}let D=n;function cn(M,N){return e.getContext(M,N)}try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",On,!1),D===null){let N="webgl2";if(D=cn(N,M),D===null)throw cn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw qt("WebGLRenderer: "+M.message),M}let pe,A,x,B,V,J,ut,pt,Q,st,xt,Ht,Mt,_t,kt,Vt,Yt,U,dt,nt,yt,mt,at;function Bt(){pe=new g0(D),pe.init(),yt=new nx(D,pe),A=new l0(D,pe,t,yt),x=new tx(D,pe),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),q=D.createFramebuffer(),Y=D.createFramebuffer(),k=D.createFramebuffer(),B=new y0(D),V=new kg,J=new ex(D,pe,x,V,A,yt,B),ut=new m0(P),pt=new Ef(D),mt=new a0(D,pt),Q=new x0(D,pt,B,mt),st=new M0(D,Q,pt,mt,B),U=new v0(D,A,J),kt=new c0(V),xt=new Hg(P,ut,pe,A,mt,kt),Ht=new ax(P,V),Mt=new Vg,_t=new Zg(pe),Yt=new r0(P,ut,x,st,p,l),Vt=new jg(P,st,A),at=new ox(D,B,A,x),dt=new o0(D,pe,B),nt=new _0(D,pe,B),B.programs=xt.programs,P.capabilities=A,P.extensions=pe,P.properties=V,P.renderLists=Mt,P.shadowMap=Vt,P.state=x,P.info=B}Bt(),y!==bn&&(T=new E0(y,e.width,e.height,o,i,r));let Ut=new Bc(P,D);this.xr=Ut,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=pe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=pe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(M){M!==void 0&&(ct=M,this.setSize(it,ft,!1))},this.getSize=function(M){return M.set(it,ft)},this.setSize=function(M,N,W=!0){if(Ut.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}it=M,ft=N,e.width=Math.floor(M*ct),e.height=Math.floor(N*ct),W===!0&&(e.style.width=M+"px",e.style.height=N+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(it*ct,ft*ct).floor()},this.setDrawingBufferSize=function(M,N,W){it=M,ft=N,ct=W,e.width=Math.floor(M*W),e.height=Math.floor(N*W),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(y===bn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(wt)},this.getViewport=function(M){return M.copy(It)},this.setViewport=function(M,N,W,H){M.isVector4?It.set(M.x,M.y,M.z,M.w):It.set(M,N,W,H),x.viewport(wt.copy(It).multiplyScalar(ct).round())},this.getScissor=function(M){return M.copy(Be)},this.setScissor=function(M,N,W,H){M.isVector4?Be.set(M.x,M.y,M.z,M.w):Be.set(M,N,W,H),x.scissor(Pt.copy(Be).multiplyScalar(ct).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(M){x.setScissorTest(ee=M)},this.setOpaqueSort=function(M){Xt=M},this.setTransparentSort=function(M){$t=M},this.getClearColor=function(M){return M.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,W=!0){let H=0;if(M){let z=!1;if(rt!==null){let vt=rt.texture.format;z=g.has(vt)}if(z){let vt=rt.texture.type,At=m.has(vt),gt=Yt.getClearColor(),Lt=Yt.getClearAlpha(),Ot=gt.r,Zt=gt.g,Qt=gt.b;At?(b[0]=Ot,b[1]=Zt,b[2]=Qt,b[3]=Lt,D.clearBufferuiv(D.COLOR,0,b)):(w[0]=Ot,w[1]=Zt,w[2]=Qt,w[3]=Lt,D.clearBufferiv(D.COLOR,0,w))}else H|=D.COLOR_BUFFER_BIT}N&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",On,!1),Yt.dispose(),Mt.dispose(),_t.dispose(),V.dispose(),ut.dispose(),st.dispose(),mt.dispose(),at.dispose(),xt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Ur),Ut.removeEventListener("sessionend",Nr),si.stop()};function Le(M){M.preventDefault(),gc("WebGLRenderer: Context Lost."),L=!0}function be(){gc("WebGLRenderer: Context Restored."),L=!1;let M=B.autoReset,N=Vt.enabled,W=Vt.autoUpdate,H=Vt.needsUpdate,z=Vt.type;Bt(),B.autoReset=M,Vt.enabled=N,Vt.autoUpdate=W,Vt.needsUpdate=H,Vt.type=z}function On(M){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function In(M){let N=M.target;N.removeEventListener("dispose",In),hl(N)}function hl(M){is(M),V.remove(M)}function is(M){let N=V.get(M).programs;N!==void 0&&(N.forEach(function(W){xt.releaseProgram(W)}),M.isShaderMaterial&&xt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,W,H,z,vt){N===null&&(N=Ye);let At=z.isMesh&&z.matrixWorld.determinantAffine()<0,gt=dl(M,N,W,H,z);x.setMaterial(H,At);let Lt=W.index,Ot=1;if(H.wireframe===!0){if(Lt=Q.getWireframeAttribute(W),Lt===void 0)return;Ot=2}let Zt=W.drawRange,Qt=W.attributes.position,Ft=Zt.start*Ot,ge=(Zt.start+Zt.count)*Ot;vt!==null&&(Ft=Math.max(Ft,vt.start*Ot),ge=Math.min(ge,(vt.start+vt.count)*Ot)),Lt!==null?(Ft=Math.max(Ft,0),ge=Math.min(ge,Lt.count)):Qt!=null&&(Ft=Math.max(Ft,0),ge=Math.min(ge,Qt.count));let xe=ge-Ft;if(xe<0||xe===1/0)return;mt.setup(z,H,gt,W,Lt);let De,Me=dt;if(Lt!==null&&(De=pt.get(Lt),Me=nt,Me.setIndex(De)),z.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*Ie()),Me.setMode(D.LINES)):Me.setMode(D.TRIANGLES);else if(z.isLine){let Ze=H.linewidth;Ze===void 0&&(Ze=1),x.setLineWidth(Ze*Ie()),z.isLineSegments?Me.setMode(D.LINES):z.isLineLoop?Me.setMode(D.LINE_LOOP):Me.setMode(D.LINE_STRIP)}else z.isPoints?Me.setMode(D.POINTS):z.isSprite&&Me.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Me.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ze=z._multiDrawStarts,Rt=z._multiDrawCounts,hn=z._multiDrawCount,he=Lt?pt.get(Lt).bytesPerElement:1,I=V.get(H).currentProgram.getUniforms();for(let O=0;O<hn;O++)I.setValue(D,"_gl_DrawID",O),Me.render(Ze[O]/he,Rt[O])}else if(z.isInstancedMesh)Me.renderInstances(Ft,xe,z.count);else if(W.isInstancedBufferGeometry){let Ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Rt=Math.min(W.instanceCount,Ze);Me.renderInstances(Ft,xe,Rt)}else Me.render(Ft,xe)};function Dr(M,N,W){M.transparent===!0&&M.side===Te&&M.forceSinglePass===!1?(M.side=on,M.needsUpdate=!0,as(M,N,W),M.side=ui,M.needsUpdate=!0,as(M,N,W),M.side=Te):as(M,N,W)}this.compile=function(M,N,W=null){W===null&&(W=M),E=_t.get(W),E.init(N),_.push(E),W.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),M!==W&&M.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();let H=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let vt=z.material;if(vt)if(Array.isArray(vt))for(let At=0;At<vt.length;At++){let gt=vt[At];Dr(gt,W,z),H.add(gt)}else Dr(vt,W,z),H.add(vt)}),E=_.pop(),H},this.compileAsync=function(M,N,W=null){let H=this.compile(M,N,W);return new Promise(z=>{function vt(){if(H.forEach(function(At){V.get(At).currentProgram.isReady()&&H.delete(At)}),H.size===0){z(M);return}setTimeout(vt,10)}pe.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let vi=null;function Mi(M){vi&&vi(M)}function Ur(){si.stop()}function Nr(){si.start()}let si=new Uu;si.setAnimationLoop(Mi),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(M){vi=M,Ut.setAnimationLoop(M),M===null?si.stop():si.start()},Ut.addEventListener("sessionstart",Ur),Ut.addEventListener("sessionend",Nr),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(M,N);let W=Ut.enabled===!0&&Ut.isPresenting===!0,H=T!==null&&(rt===null||W)&&T.begin(P,rt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(N),N=Ut.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,N,rt),E=_t.get(M,_.length),E.init(N),E.state.textureUnits=J.getTextureUnits(),_.push(E),Pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ce.setFromProjectionMatrix(Pe,Vn,N.reversedDepth),ae=this.localClippingEnabled,ue=kt.init(this.clippingPlanes,ae),S=Mt.get(M,C.length),S.init(),C.push(S),Ut.enabled===!0&&Ut.isPresenting===!0){let At=P.xr.getDepthSensingMesh();At!==null&&Xn(At,N,-1/0,P.sortObjects)}Xn(M,N,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(Xt,$t,N.reversedDepth),Ae=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Ae&&Yt.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&kt.beginShadows();let z=E.state.shadowsArray;if(Vt.render(z,M,N),ue===!0&&kt.endShadows(),(H&&T.hasRenderPass())===!1){let At=S.opaque,gt=S.transmissive;if(E.setupLights(),N.isArrayCamera){let Lt=N.cameras;if(gt.length>0)for(let Ot=0,Zt=Lt.length;Ot<Zt;Ot++){let Qt=Lt[Ot];ss(At,gt,M,Qt)}Ae&&Yt.render(M);for(let Ot=0,Zt=Lt.length;Ot<Zt;Ot++){let Qt=Lt[Ot];Fr(S,M,Qt,Qt.viewport)}}else gt.length>0&&ss(At,gt,M,N),Ae&&Yt.render(M),Fr(S,M,N)}rt!==null&&Z===0&&(J.updateMultisampleRenderTarget(rt),J.updateRenderTargetMipmap(rt)),H&&T.end(P),M.isScene===!0&&M.onAfterRender(P,M,N),mt.resetDefaultState(),lt=-1,bt=null,_.pop(),_.length>0?(E=_[_.length-1],J.setTextureUnits(E.state.textureUnits),ue===!0&&kt.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,F!==null&&F.renderEnd()};function Xn(M,N,W,H){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ce.intersectsSprite(M)){H&&We.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Pe);let At=st.update(M),gt=M.material;gt.visible&&S.push(M,At,gt,W,We.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ce.intersectsObject(M))){let At=st.update(M),gt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),We.copy(M.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),We.copy(At.boundingSphere.center)),We.applyMatrix4(M.matrixWorld).applyMatrix4(Pe)),Array.isArray(gt)){let Lt=At.groups;for(let Ot=0,Zt=Lt.length;Ot<Zt;Ot++){let Qt=Lt[Ot],Ft=gt[Qt.materialIndex];Ft&&Ft.visible&&S.push(M,At,Ft,W,We.z,Qt)}}else gt.visible&&S.push(M,At,gt,W,We.z,null)}}let vt=M.children;for(let At=0,gt=vt.length;At<gt;At++)Xn(vt[At],N,W,H)}function Fr(M,N,W,H){let{opaque:z,transmissive:vt,transparent:At}=M;E.setupLightsView(W),ue===!0&&kt.setGlobalState(P.clippingPlanes,W),H&&x.viewport(wt.copy(H)),z.length>0&&rs(z,N,W),vt.length>0&&rs(vt,N,W),At.length>0&&rs(At,N,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ss(M,N,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let Ft=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Xe(1,1,{generateMipmaps:!0,type:Ft?jn:bn,minFilter:Ni,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let vt=E.state.transmissionRenderTarget[H.id],At=H.viewport||wt;vt.setSize(At.z*P.transmissionResolutionScale,At.w*P.transmissionResolutionScale);let gt=P.getRenderTarget(),Lt=P.getActiveCubeFace(),Ot=P.getActiveMipmapLevel();P.setRenderTarget(vt),P.getClearColor(me),le=P.getClearAlpha(),le<1&&P.setClearColor(16777215,.5),P.clear(),Ae&&Yt.render(W);let Zt=P.toneMapping;P.toneMapping=Pn;let Qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),ue===!0&&kt.setGlobalState(P.clippingPlanes,H),rs(M,W,H),J.updateMultisampleRenderTarget(vt),J.updateRenderTargetMipmap(vt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ge=0,xe=N.length;ge<xe;ge++){let De=N[ge],{object:Me,geometry:Ze,material:Rt,group:hn}=De;if(Rt.side===Te&&Me.layers.test(H.layers)){let he=Rt.side;Rt.side=on,Rt.needsUpdate=!0,Br(Me,W,H,Ze,Rt,hn),Rt.side=he,Rt.needsUpdate=!0,Ft=!0}}Ft===!0&&(J.updateMultisampleRenderTarget(vt),J.updateRenderTargetMipmap(vt))}P.setRenderTarget(gt,Lt,Ot),P.setClearColor(me,le),Qt!==void 0&&(H.viewport=Qt),P.toneMapping=Zt}function rs(M,N,W){let H=N.isScene===!0?N.overrideMaterial:null;for(let z=0,vt=M.length;z<vt;z++){let At=M[z],{object:gt,geometry:Lt,group:Ot}=At,Zt=At.material;Zt.allowOverride===!0&&H!==null&&(Zt=H),gt.layers.test(W.layers)&&Br(gt,N,W,Lt,Zt,Ot)}}function Br(M,N,W,H,z,vt){M.onBeforeRender(P,N,W,H,z,vt),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(P,N,W,H,M,vt),z.transparent===!0&&z.side===Te&&z.forceSinglePass===!1?(z.side=on,z.needsUpdate=!0,P.renderBufferDirect(W,N,H,z,M,vt),z.side=ui,z.needsUpdate=!0,P.renderBufferDirect(W,N,H,z,M,vt),z.side=Te):P.renderBufferDirect(W,N,H,z,M,vt),M.onAfterRender(P,N,W,H,z,vt)}function as(M,N,W){N.isScene!==!0&&(N=Ye);let H=V.get(M),z=E.state.lights,vt=E.state.shadowsArray,At=z.state.version,gt=xt.getParameters(M,z.state,vt,N,W,E.state.lightProbeGridArray),Lt=xt.getProgramCacheKey(gt),Ot=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let Zt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=ut.get(M.envMap||H.environment,Zt),H.envMapRotation=H.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ot===void 0&&(M.addEventListener("dispose",In),Ot=new Map,H.programs=Ot);let Qt=Ot.get(Lt);if(Qt!==void 0){if(H.currentProgram===Qt&&H.lightsStateVersion===At)return Os(M,gt),Qt}else gt.uniforms=xt.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,W,gt),M.onBeforeCompile(gt,P),Qt=xt.acquireProgram(gt,Lt),Ot.set(Lt,Qt),H.uniforms=gt.uniforms;let Ft=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ft.clippingPlanes=kt.uniform),Os(M,gt),H.needsLights=jc(M),H.lightsStateVersion=At,H.needsLights&&(Ft.ambientLightColor.value=z.state.ambient,Ft.lightProbe.value=z.state.probe,Ft.directionalLights.value=z.state.directional,Ft.directionalLightShadows.value=z.state.directionalShadow,Ft.spotLights.value=z.state.spot,Ft.spotLightShadows.value=z.state.spotShadow,Ft.rectAreaLights.value=z.state.rectArea,Ft.ltc_1.value=z.state.rectAreaLTC1,Ft.ltc_2.value=z.state.rectAreaLTC2,Ft.pointLights.value=z.state.point,Ft.pointLightShadows.value=z.state.pointShadow,Ft.hemisphereLights.value=z.state.hemi,Ft.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ft.spotLightMatrix.value=z.state.spotLightMatrix,Ft.spotLightMap.value=z.state.spotLightMap,Ft.pointShadowMatrix.value=z.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=Qt,H.uniformsList=null,Qt}function Or(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Ds.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Os(M,N){let W=V.get(M);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function ul(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let W=0,H=M.length;W<H;W++){let z=M[W];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function dl(M,N,W,H,z){N.isScene!==!0&&(N=Ye),J.resetTextureUnits();let vt=N.fog,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,gt=rt===null?P.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:oe.workingColorSpace,Lt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ot=ut.get(H.envMap||At,Lt),Zt=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ft=!!W.morphAttributes.position,ge=!!W.morphAttributes.normal,xe=!!W.morphAttributes.color,De=Pn;H.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(De=P.toneMapping);let Me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ze=Me!==void 0?Me.length:0,Rt=V.get(H),hn=E.state.lights;if(ue===!0&&(ae===!0||M!==bt)){let tt=M===bt&&H.id===lt;kt.setState(H,M,tt)}let he=!1;H.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==hn.state.version||Rt.outputColorSpace!==gt||z.isBatchedMesh&&Rt.batching===!1||!z.isBatchedMesh&&Rt.batching===!0||z.isBatchedMesh&&Rt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Rt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Rt.instancing===!1||!z.isInstancedMesh&&Rt.instancing===!0||z.isSkinnedMesh&&Rt.skinning===!1||!z.isSkinnedMesh&&Rt.skinning===!0||z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null||Rt.envMap!==Ot||H.fog===!0&&Rt.fog!==vt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==kt.numPlanes||Rt.numIntersection!==kt.numIntersection)||Rt.vertexAlphas!==Zt||Rt.vertexTangents!==Qt||Rt.morphTargets!==Ft||Rt.morphNormals!==ge||Rt.morphColors!==xe||Rt.toneMapping!==De||Rt.morphTargetsCount!==Ze||!!Rt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Rt.__version=H.version);let I=Rt.currentProgram;he===!0&&(I=as(H,N,z),F&&H.isNodeMaterial&&F.onUpdateProgram(H,I,Rt));let O=!1,j=!1,G=!1,K=I.getUniforms(),ot=Rt.uniforms;if(x.useProgram(I.program)&&(O=!0,j=!0,G=!0),H.id!==lt&&(lt=H.id,j=!0),Rt.needsLights){let tt=ul(E.state.lightProbeGridArray,z);Rt.lightProbeGrid!==tt&&(Rt.lightProbeGrid=tt,j=!0)}if(O||bt!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),K.setValue(D,"projectionMatrix",M.projectionMatrix),K.setValue(D,"viewMatrix",M.matrixWorldInverse);let Et=K.map.cameraPosition;Et!==void 0&&Et.setValue(D,Ge.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&K.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&K.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),bt!==M&&(bt=M,j=!0,G=!0)}if(Rt.needsLights&&(hn.state.directionalShadowMap.length>0&&K.setValue(D,"directionalShadowMap",hn.state.directionalShadowMap,J),hn.state.spotShadowMap.length>0&&K.setValue(D,"spotShadowMap",hn.state.spotShadowMap,J),hn.state.pointShadowMap.length>0&&K.setValue(D,"pointShadowMap",hn.state.pointShadowMap,J)),z.isSkinnedMesh){K.setOptional(D,z,"bindMatrix"),K.setOptional(D,z,"bindMatrixInverse");let tt=z.skeleton;tt&&(tt.boneTexture===null&&tt.computeBoneTexture(),K.setValue(D,"boneTexture",tt.boneTexture,J))}z.isBatchedMesh&&(K.setOptional(D,z,"batchingTexture"),K.setValue(D,"batchingTexture",z._matricesTexture,J),K.setOptional(D,z,"batchingIdTexture"),K.setValue(D,"batchingIdTexture",z._indirectTexture,J),K.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&K.setValue(D,"batchingColorTexture",z._colorsTexture,J));let Nt=W.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&U.update(z,W,I),(j||Rt.receiveShadow!==z.receiveShadow)&&(Rt.receiveShadow=z.receiveShadow,K.setValue(D,"receiveShadow",z.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(ot.envMapIntensity.value=N.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=cx()),j){if(K.setValue(D,"toneMappingExposure",P.toneMappingExposure),Rt.needsLights&&Hs(ot,G),vt&&H.fog===!0&&Ht.refreshFogUniforms(ot,vt),Ht.refreshMaterialUniforms(ot,H,ct,ft,E.state.transmissionRenderTarget[M.id]),Rt.needsLights&&Rt.lightProbeGrid){let tt=Rt.lightProbeGrid;ot.probesSH.value=tt.texture,ot.probesMin.value.copy(tt.boundingBox.min),ot.probesMax.value.copy(tt.boundingBox.max),ot.probesResolution.value.copy(tt.resolution)}Ds.upload(D,Or(Rt),ot,J)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ds.upload(D,Or(Rt),ot,J),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&K.setValue(D,"center",z.center),K.setValue(D,"modelViewMatrix",z.modelViewMatrix),K.setValue(D,"normalMatrix",z.normalMatrix),K.setValue(D,"modelMatrix",z.matrixWorld),H.uniformsGroups!==void 0){let tt=H.uniformsGroups;for(let Et=0,Dt=tt.length;Et<Dt;Et++){let zt=tt[Et];at.update(zt,I),at.bind(zt,I)}}return I}function Hs(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function jc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(M,N,W){let H=V.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=N,V.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let W=V.get(M);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,W=0){rt=M,$=N,Z=W;let H=null,z=!1,vt=!1;if(M){let gt=V.get(M);if(gt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,gt.__webglFramebuffer),wt.copy(M.viewport),Pt.copy(M.scissor),de=M.scissorTest,x.viewport(wt),x.scissor(Pt),x.setScissorTest(de),lt=-1;return}else if(gt.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(gt.__hasExternalTextures)J.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Zt=M.depthTexture;if(gt.__boundDepthTexture!==Zt){if(Zt!==null&&V.has(Zt)&&(M.width!==Zt.image.width||M.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let Lt=M.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(vt=!0);let Ot=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[N])?H=Ot[N][W]:H=Ot[N],z=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?H=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?H=Ot[W]:H=Ot,wt.copy(M.viewport),Pt.copy(M.scissor),de=M.scissorTest}else wt.copy(It).multiplyScalar(ct).floor(),Pt.copy(Be).multiplyScalar(ct).floor(),de=ee;if(W!==0&&(H=q),x.bindFramebuffer(D.FRAMEBUFFER,H)&&x.drawBuffers(M,H),x.viewport(wt),x.scissor(Pt),x.setScissorTest(de),z){let gt=V.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,gt.__webglTexture,W)}else if(vt){let gt=N;for(let Lt=0;Lt<M.textures.length;Lt++){let Ot=V.get(M.textures[Lt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Lt,Ot.__webglTexture,W,gt)}}else if(M!==null&&W!==0){let gt=V.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gt.__webglTexture,W)}lt=-1},this.readRenderTargetPixels=function(M,N,W,H,z,vt,At,gt=0){if(!(M&&M.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){x.bindFramebuffer(D.FRAMEBUFFER,Lt);try{let Ot=M.textures[gt],Zt=Ot.format,Qt=Ot.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+gt),!A.textureFormatReadable(Zt)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(Qt)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-H&&W>=0&&W<=M.height-z&&D.readPixels(N,W,H,z,yt.convert(Zt),yt.convert(Qt),vt)}finally{let Ot=rt!==null?V.get(rt).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(M,N,W,H,z,vt,At,gt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt)if(N>=0&&N<=M.width-H&&W>=0&&W<=M.height-z){x.bindFramebuffer(D.FRAMEBUFFER,Lt);let Ot=M.textures[gt],Zt=Ot.format,Qt=Ot.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+gt),!A.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ft=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ft),D.bufferData(D.PIXEL_PACK_BUFFER,vt.byteLength,D.STREAM_READ),D.readPixels(N,W,H,z,yt.convert(Zt),yt.convert(Qt),0);let ge=rt!==null?V.get(rt).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,ge);let xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ou(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ft),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,vt),D.deleteBuffer(Ft),D.deleteSync(xe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,W=0){let H=Math.pow(2,-W),z=Math.floor(M.image.width*H),vt=Math.floor(M.image.height*H),At=N!==null?N.x:0,gt=N!==null?N.y:0;J.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,At,gt,z,vt),x.unbindTexture()},this.copyTextureToTexture=function(M,N,W=null,H=null,z=0,vt=0){let At,gt,Lt,Ot,Zt,Qt,Ft,ge,xe,De=M.isCompressedTexture?M.mipmaps[vt]:M.image;if(W!==null)At=W.max.x-W.min.x,gt=W.max.y-W.min.y,Lt=W.isBox3?W.max.z-W.min.z:1,Ot=W.min.x,Zt=W.min.y,Qt=W.isBox3?W.min.z:0;else{let ot=Math.pow(2,-z);At=Math.floor(De.width*ot),gt=Math.floor(De.height*ot),M.isDataArrayTexture?Lt=De.depth:M.isData3DTexture?Lt=Math.floor(De.depth*ot):Lt=1,Ot=0,Zt=0,Qt=0}H!==null?(Ft=H.x,ge=H.y,xe=H.z):(Ft=0,ge=0,xe=0);let Me=yt.convert(N.format),Ze=yt.convert(N.type),Rt;N.isData3DTexture?(J.setTexture3D(N,0),Rt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),Rt=D.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),Rt=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let hn=x.getParameter(D.UNPACK_ROW_LENGTH),he=x.getParameter(D.UNPACK_IMAGE_HEIGHT),I=x.getParameter(D.UNPACK_SKIP_PIXELS),O=x.getParameter(D.UNPACK_SKIP_ROWS),j=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,De.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,De.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Ot),x.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),x.pixelStorei(D.UNPACK_SKIP_IMAGES,Qt);let G=M.isDataArrayTexture||M.isData3DTexture,K=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let ot=V.get(M),Nt=V.get(N),tt=V.get(ot.__renderTarget),Et=V.get(Nt.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,tt.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Dt=0;Dt<Lt;Dt++)G&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(M).__webglTexture,z,Qt+Dt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(N).__webglTexture,vt,xe+Dt)),D.blitFramebuffer(Ot,Zt,At,gt,Ft,ge,At,gt,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||V.has(M)){let ot=V.get(M),Nt=V.get(N);x.bindFramebuffer(D.READ_FRAMEBUFFER,Y),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,k);for(let tt=0;tt<Lt;tt++)G?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ot.__webglTexture,z,Qt+tt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ot.__webglTexture,z),K?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,vt,xe+tt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nt.__webglTexture,vt),z!==0?D.blitFramebuffer(Ot,Zt,At,gt,Ft,ge,At,gt,D.COLOR_BUFFER_BIT,D.NEAREST):K?D.copyTexSubImage3D(Rt,vt,Ft,ge,xe+tt,Ot,Zt,At,gt):D.copyTexSubImage2D(Rt,vt,Ft,ge,Ot,Zt,At,gt);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else K?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Rt,vt,Ft,ge,xe,At,gt,Lt,Me,Ze,De.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,vt,Ft,ge,xe,At,gt,Lt,Me,De.data):D.texSubImage3D(Rt,vt,Ft,ge,xe,At,gt,Lt,Me,Ze,De):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,vt,Ft,ge,At,gt,Me,Ze,De.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,vt,Ft,ge,De.width,De.height,Me,De.data):D.texSubImage2D(D.TEXTURE_2D,vt,Ft,ge,At,gt,Me,Ze,De);x.pixelStorei(D.UNPACK_ROW_LENGTH,hn),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),x.pixelStorei(D.UNPACK_SKIP_PIXELS,I),x.pixelStorei(D.UNPACK_SKIP_ROWS,O),x.pixelStorei(D.UNPACK_SKIP_IMAGES,j),vt===0&&N.generateMipmaps&&D.generateMipmap(Rt),x.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){$=0,Z=0,rt=null,x.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var Xo=20010923;function Se(s){Xo=s}function ht(){return Xo=Xo*1103515245+12345&2147483647,Xo/2147483647}function we(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function ln(s,t=1,e=1,n=!0){let i=new xn(s);return i.wrapS=i.wrapT=di,i.repeat.set(t,e),n&&(i.colorSpace=Qe),i.anisotropy=4,i}function Hi(s,t=1.5){let e=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,e,n).data,r=we(e,n),a=r.getContext("2d"),o=a.createImageData(e,n),l=o.data,c=(d,u)=>(d=(d+e)%e,u=(u+n)%n,i[(u*e+d)*4]/255);for(let d=0;d<n;d++)for(let u=0;u<e;u++){let f=(c(u-1,d)-c(u+1,d))*t,p=(c(u,d-1)-c(u,d+1))*t,y=Math.sqrt(f*f+p*p+1),g=(d*e+u)*4;l[g]=(f/y*.5+.5)*255,l[g+1]=(p/y*.5+.5)*255,l[g+2]=(1/y*.5+.5)*255,l[g+3]=255}a.putImageData(o,0,0);let h=new xn(r);return h.wrapS=h.wrapT=di,h.anisotropy=4,h}function ki(s,t,e,n,i,r=1){for(let a=0;a<e;a+=2)for(let o=0;o<t;o+=2){let l=(ht()-.5)*i;s.fillStyle=`rgba(${Math.max(0,Math.min(255,n[0]+l))|0},${Math.max(0,Math.min(255,n[1]+l))|0},${Math.max(0,Math.min(255,n[2]+l))|0},${r})`,s.fillRect(o,a,2,2)}}function Bn(s,t,e,n,i,r,a){for(let o=0;o<n;o++){let l=ht()*t,c=ht()*e,h=(.25+ht()*.75)*r,d=s.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,`rgba(${i[0]},${i[1]},${i[2]},${a})`),d.addColorStop(1,`rgba(${i[0]},${i[1]},${i[2]},0)`),s.fillStyle=d,s.beginPath(),s.arc(l,c,h,0,Math.PI*2),s.fill()}}function zu(){Se(11);let s=512,t=512,e=we(s,t),n=e.getContext("2d");n.fillStyle="#b9ab92",n.fillRect(0,0,s,t),ki(n,s,t,[185,171,146],18,.5);let i=["#d8cdb8","#9c8f78","#c4b49a","#7e7260","#e2d9c6","#8d6f5a","#5f584c"];for(let o=0;o<2600;o++){let l=ht()*s,c=ht()*t,h=1+ht()*4.5;n.fillStyle=i[ht()*i.length|0],n.beginPath(),n.moveTo(l+h,c);for(let d=1;d<6;d++){let u=d/6*Math.PI*2,f=h*(.6+ht()*.6);n.lineTo(l+Math.cos(u)*f,c+Math.sin(u)*f)}n.closePath(),n.fill()}n.strokeStyle="rgba(90,72,40,0.85)",n.lineWidth=3,n.strokeRect(1,1,s-2,t-2),Bn(n,s,t,9,[60,52,40],130,.1),Bn(n,s,t,5,[30,30,34],90,.08);let r=we(s,t),a=r.getContext("2d");a.fillStyle="#808080",a.fillRect(0,0,s,t),Se(11);for(let o=0;o<2600;o++){let l=ht()*s,c=ht()*t,h=1+ht()*4.5;ht(),a.fillStyle=ht()>.5?"#8a8a8a":"#757575",a.beginPath(),a.arc(l,c,h,0,Math.PI*2),a.fill();for(let d=1;d<6;d++)ht()}return a.fillStyle="#5a5a5a",a.fillRect(0,0,s,3),a.fillRect(0,0,3,t),{map:ln(e,6,6),normalMap:Hi(r,1),roughness:.42,metalness:.04}}function Vu(s=.6){Se(23);let t=512,e=512,n=we(t,e),i=n.getContext("2d"),r=we(t,e),a=r.getContext("2d");a.fillStyle="#909090",a.fillRect(0,0,t,e);let o=128,l=128;for(let c=0;c<e;c+=l)for(let h=0;h<t;h+=o){let d=226+(ht()-.5)*14;i.fillStyle=`rgb(${d|0},${d-4|0},${d-12|0})`,i.fillRect(h+3,c+3,o-6,l-6);let u=i.createLinearGradient(h,c,h+o,c+l);u.addColorStop(0,"rgba(255,255,255,0.12)"),u.addColorStop(.5,"rgba(255,255,255,0)"),u.addColorStop(1,"rgba(0,0,0,0.10)"),i.fillStyle=u,i.fillRect(h+3,c+3,o-6,l-6),a.fillStyle="#aaaaaa",a.fillRect(h+4,c+4,o-8,l-8)}i.strokeStyle="rgba(120,112,96,1)",i.lineWidth=5;for(let c=0;c<=e;c+=l)i.beginPath(),i.moveTo(0,c),i.lineTo(t,c),i.stroke();for(let c=0;c<=t;c+=o)i.beginPath(),i.moveTo(c,0),i.lineTo(c,e),i.stroke();return Bn(i,t,e,14*s,[92,74,50],90,.22*s),Bn(i,t,e,8*s,[40,44,38],60,.18*s),{map:ln(n,4,1.6),normalMap:Hi(r,2),roughness:.28,metalness:0}}function Oc(s=[214,206,190],t=.7){Se(37+s[0]);let e=512,n=512,i=we(e,n),r=i.getContext("2d");r.fillStyle=`rgb(${s[0]},${s[1]},${s[2]})`,r.fillRect(0,0,e,n),ki(r,e,n,s,16,.45),Bn(r,e,n,16*t,[s[0]-70,s[1]-70,s[2]-66],120,.16*t),Bn(r,e,n,6*t,[70,60,45],160,.12*t);for(let l=0;l<8*t;l++){let c=ht()*e,h=60+ht()*200,d=6+ht()*24,u=r.createLinearGradient(c,0,c,h);u.addColorStop(0,`rgba(88,74,54,${.18*t})`),u.addColorStop(1,"rgba(88,74,54,0)"),r.fillStyle=u,r.fillRect(c-d/2,0,d,h)}let a=we(256,256),o=a.getContext("2d");o.fillStyle="#808080",o.fillRect(0,0,256,256),Se(9);for(let l=0;l<1400;l++)o.fillStyle=ht()>.5?"#878787":"#797979",o.fillRect(ht()*256,ht()*256,1+ht()*3,1+ht()*3);return{map:ln(i,3,1.5),normalMap:Hi(a,.8),roughness:.92,metalness:0}}function qo(s=0){Se(53+s);let t=256,e=256,n=we(t,e),i=n.getContext("2d"),r=132-s*46,a=16-s*5,o=22-s*8;i.fillStyle=`rgb(${r},${a},${o})`,i.fillRect(0,0,t,e),ki(i,t,e,[r,a,o],26,.55);for(let h=0;h<40;h++){let d=ht()*t,u=ht()*e,f=20+ht()*50,p=i.createRadialGradient(d,u,0,d,u,f);p.addColorStop(0,`rgba(${r+55},${a+14},${o+16},0.10)`),p.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=p,i.beginPath(),i.arc(d,u,f,0,Math.PI*2),i.fill()}let l=we(128,128),c=l.getContext("2d");c.fillStyle="#808080",c.fillRect(0,0,128,128),Se(3);for(let h=0;h<900;h++)c.fillStyle=ht()>.5?"#848484":"#7c7c7c",c.fillRect(ht()*128,ht()*128,2,2);return{map:ln(n,2,2),normalMap:Hi(l,.6),roughness:.88,metalness:0}}function Gu(){let e=we(1024,640),n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,640);i.addColorStop(0,"#7e0e14"),i.addColorStop(.5,"#a01820"),i.addColorStop(1,"#6b0a10"),n.fillStyle=i,n.fillRect(0,0,1024,640),Se(77);for(let o=0;o<1024;o+=18){let l=.1+ht()*.12,c=n.createLinearGradient(o,0,o+18,0);c.addColorStop(0,`rgba(0,0,0,${l})`),c.addColorStop(.5,"rgba(255,80,80,0.05)"),c.addColorStop(1,`rgba(0,0,0,${l})`),n.fillStyle=c,n.fillRect(o,0,18,640)}n.strokeStyle="#d8a83a",n.lineWidth=10,n.beginPath(),n.arc(1024/2,640/2,190,0,Math.PI*2),n.stroke(),n.strokeStyle="rgba(216,168,58,0.5)",n.lineWidth=3,n.beginPath(),n.arc(1024/2,640/2,205,0,Math.PI*2),n.stroke(),n.fillStyle="#e7b64c",n.font='300px "Noto Sans SC","Microsoft YaHei",serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="rgba(0,0,0,0.5)",n.shadowBlur=12,n.shadowOffsetY=6,n.fillText("\u56CD",1024/2,640/2+14),n.shadowColor="transparent",n.font='84px "Noto Sans SC","Microsoft YaHei",serif';let r="\u5929\u8D50\u826F\u7F18",a="\u6C38\u7ED3\u540C\u5FC3";for(let o=0;o<4;o++)n.fillText(r[o],1024*.16,640*.18+o*108),n.fillText(a[o],1024*.84,640*.18+o*108);return ln(e,1,1)}function Wu(){Se(91);let s=256,t=256,e=we(s,t),n=e.getContext("2d");n.fillStyle="#6e1013",n.fillRect(0,0,s,t),ki(n,s,t,[110,16,19],24,.6),n.strokeStyle="rgba(190,150,60,0.8)",n.lineWidth=6,n.strokeRect(10,10,s-20,t-20),n.strokeStyle="rgba(190,150,60,0.35)",n.lineWidth=2,n.strokeRect(22,22,s-44,t-44),Bn(n,s,t,6,[30,20,18],60,.25);let i=we(128,128),r=i.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,128,128),Se(7);for(let a=0;a<2e3;a++)r.fillStyle=ht()>.5?"#868686":"#7a7a7a",r.fillRect(ht()*128,ht()*128,1,1);return{map:ln(e,1,8),normalMap:Hi(i,.7),roughness:.95,metalness:0}}function Xu(){Se(101);let s=256,t=256,e=we(s,t),n=e.getContext("2d");n.fillStyle="#3d5a48",n.fillRect(0,0,s,t),ki(n,s,t,[61,90,72],10,.4);let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"rgba(255,255,255,0.08)"),i.addColorStop(1,"rgba(0,0,0,0.22)"),n.fillStyle=i,n.fillRect(0,0,s,t),Bn(n,s,t,10,[24,30,26],70,.25);for(let r=0;r<12;r++){n.fillStyle="rgba(150,140,120,0.10)";let a=ht()*s,o=t*.6+ht()*t*.4;n.beginPath(),n.ellipse(a,o,8+ht()*26,4+ht()*8,ht(),0,Math.PI*2),n.fill()}return{map:ln(e,4,1),roughness:.5,metalness:.05}}function qu(s=0,t=1){Se(113+s*40|0);let e=256,n=256,i=we(e,n),r=i.getContext("2d"),a=96-s*40,o=58-s*26,l=36-s*16;r.fillStyle=`rgb(${a},${o},${l})`,r.fillRect(0,0,e,n);let c=we(e,n),h=c.getContext("2d");h.fillStyle="#808080",h.fillRect(0,0,e,n);for(let d=0;d<e;d++){let u=Math.sin(d*.11)*6+Math.sin(d*.037)*14;for(let f=0;f<n;f+=4){let p=Math.sin((f+u)*.16*t)*.5+.5;r.fillStyle=`rgba(0,0,0,${p*.22})`,r.fillRect(d,f,1,4),h.fillStyle=`rgb(${128-p*34},${128-p*34},${128-p*34})`,h.fillRect(d,f,1,4)}}return Bn(r,e,n,5,[20,14,10],60,.2),{map:ln(i,2,2),normalMap:Hi(c,1.6),roughness:.62,metalness:.02}}function Yo(s,t=!1){let i=we(256,160),r=i.getContext("2d");return r.fillStyle=t?"#8e1016":"#a51920",r.fillRect(0,0,256,160),r.strokeStyle="#d8a83a",r.lineWidth=6,r.strokeRect(8,8,240,144),r.fillStyle="#e7c25c",r.font=`${s.length>2?64:84}px "Noto Sans SC","Microsoft YaHei",serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(s,256/2,160/2+4),ln(i,1,1)}function Wn(s,t="#e8e2d2",e="#233225",n=96){let a=we(512,160),o=a.getContext("2d");return o.fillStyle=e,o.fillRect(0,0,512,160),o.strokeStyle="rgba(255,255,255,0.25)",o.lineWidth=4,o.strokeRect(6,6,500,148),o.fillStyle=t,o.font=`${n}px "Noto Sans SC","Microsoft YaHei",sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(s,512/2,160/2+4),ln(a,1,1)}function Hc(){Se(131);let s=512,t=512,e=we(s,t),n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#2a7a86"),i.addColorStop(.45,"#155059"),i.addColorStop(1,"#072028"),n.fillStyle=i,n.fillRect(0,0,s,t);for(let r=0;r<26;r++){let a=ht()*s,o=12+ht()*50,l=n.createLinearGradient(a,0,a+o*.4,t*.55);l.addColorStop(0,`rgba(120,220,210,${.1+ht()*.12})`),l.addColorStop(1,"rgba(120,220,210,0)"),n.fillStyle=l,n.beginPath(),n.moveTo(a,0),n.lineTo(a+o,0),n.lineTo(a+o*.55+26,t*.6),n.lineTo(a+26,t*.6),n.closePath(),n.fill()}for(let r=0;r<700;r++){let a=ht()*t;n.fillStyle=`rgba(140,210,200,${.03+ht()*.09*(1-a/t)})`,n.fillRect(ht()*s,a,1+ht()*2,1+ht()*2)}for(let r=0;r<4;r++){let a=ht()*s,o=t*.35+ht()*t*.5,l=80+ht()*160,c=n.createRadialGradient(a,o,l*.2,a,o,l);c.addColorStop(0,"rgba(0,4,6,0.55)"),c.addColorStop(1,"rgba(0,4,6,0)"),n.fillStyle=c,n.beginPath(),n.arc(a,o,l,0,Math.PI*2),n.fill()}return ln(e,2,1)}function Zo(){Se(151);let s=256,t=256,e=we(s,t),n=e.getContext("2d");n.fillStyle="#54483a",n.fillRect(0,0,s,t);for(let i=0;i<t;i+=8+ht()*10|0){let r=60+ht()*50;n.fillStyle=`rgba(${r+20|0},${r|0},${r*.7|0},0.8)`,n.fillRect(0,i,s,5+ht()*8)}for(let i=0;i<300;i++)n.fillStyle=`rgba(200,190,160,${.06+ht()*.1})`,n.fillRect(ht()*s,ht()*t,2+ht()*5,1+ht()*2);return{map:ln(e,1,1),roughness:.9,metalness:0}}function Yu(){let s=we(64,64),t=s.getContext("2d");return t.fillStyle="#b3121c",t.fillRect(0,0,64,64),t.fillStyle="rgba(255,220,120,0.9)",t.font="40px serif",t.textAlign="center",t.textBaseline="middle",t.fillText("\u56CD",32,34),ln(s,1,1)}function Zu(){Se(171);let s=512,t=512,e=we(s,t),n=e.getContext("2d");n.fillStyle="#6e6a62",n.fillRect(0,0,s,t),ki(n,s,t,[110,106,98],18,.5),Bn(n,s,t,18,[40,40,40],140,.16),Bn(n,s,t,8,[55,62,58],100,.14),n.strokeStyle="rgba(0,0,0,0.28)",n.lineWidth=3;for(let a=0;a<t;a+=170)n.beginPath(),n.moveTo(0,a),n.lineTo(s,a),n.stroke();let i=we(256,256),r=i.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,256,256),Se(5);for(let a=0;a<900;a++)r.fillStyle=ht()>.5?"#858585":"#7b7b7b",r.fillRect(ht()*256,ht()*256,2+ht()*4,2+ht()*4);return{map:ln(e,3,2),normalMap:Hi(i,1),roughness:.95,metalness:0}}function $u(s="mc"){Se(s==="mc"?191:193);let t=512,e=512,n=we(t,e),i=n.getContext("2d");i.fillStyle="#c8a084",i.fillRect(0,0,t,e),ki(i,t,e,[200,160,132],12,.4),Bn(i,t,e,4,[190,120,105],90,.2),i.fillStyle="rgba(150,140,140,0.16)",i.beginPath(),i.ellipse(t*.38,e*.47,34,14,.1,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.475,34,14,-.1,0,Math.PI*2),i.fill();for(let a=0;a<2600;a++)i.fillStyle=`rgba(120,86,66,${.03+ht()*.05})`,i.fillRect(ht()*t,ht()*e,1.4,1.4);let r=s==="mc"?6:0;if(i.fillStyle="rgba(70,50,44,0.5)",i.beginPath(),i.ellipse(t*.38,e*.42,30,17,.06,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.42+r,30,17,-.06,0,Math.PI*2),i.fill(),s==="mc"?(i.fillStyle="rgba(232,226,214,0.9)",i.beginPath(),i.ellipse(t*.38,e*.42,13,8,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.42+r,13,8,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(20,16,14,0.95)",i.beginPath(),i.ellipse(t*.38,e*.42,6.5,6.5,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.42+r,6.5,6.5,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.5)",i.fillRect(t*.38-2,e*.42-4,3,3),i.fillRect(t*.62-2,e*.42+r-4,3,3),i.strokeStyle="rgba(96,66,54,0.7)",i.lineWidth=3,i.beginPath(),i.moveTo(t*.31,e*.405),i.quadraticCurveTo(t*.38,e*.385,t*.45,e*.405),i.stroke(),i.beginPath(),i.moveTo(t*.55,e*.405+r),i.quadraticCurveTo(t*.62,e*.385+r,t*.69,e*.405+r),i.stroke()):(i.strokeStyle="rgba(88,58,48,0.85)",i.lineWidth=3.4,i.beginPath(),i.moveTo(t*.3,e*.42),i.quadraticCurveTo(t*.38,e*.445,t*.46,e*.42),i.stroke(),i.beginPath(),i.moveTo(t*.54,e*.42),i.quadraticCurveTo(t*.62,e*.445,t*.7,e*.42),i.stroke(),i.strokeStyle="rgba(88,58,48,0.35)",i.lineWidth=6,i.beginPath(),i.moveTo(t*.31,e*.435),i.quadraticCurveTo(t*.38,e*.455,t*.45,e*.435),i.stroke(),i.beginPath(),i.moveTo(t*.55,e*.435),i.quadraticCurveTo(t*.62,e*.455,t*.69,e*.435),i.stroke()),i.strokeStyle="rgba(46,32,26,0.8)",i.lineWidth=5,i.beginPath(),i.moveTo(t*.3,e*.355),i.quadraticCurveTo(t*.38,e*.335,t*.46,e*.35),i.stroke(),i.beginPath(),i.moveTo(t*.54,e*.35+r*.5),i.quadraticCurveTo(t*.62,e*.335+r*.5,t*.7,e*.355+r*.5),i.stroke(),i.fillStyle="rgba(150,110,90,0.4)",i.beginPath(),i.ellipse(t*.5,e*.55,11,24,0,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(140,96,76,0.4)",i.lineWidth=3,i.beginPath(),i.moveTo(t*.44,e*.6),i.quadraticCurveTo(t*.42,e*.66,t*.44,e*.7),i.stroke(),i.beginPath(),i.moveTo(t*.56,e*.6),i.quadraticCurveTo(t*.58,e*.66,t*.56,e*.7),i.stroke(),s==="mc"){for(let o=0;o<480;o++){let l=ht()*Math.PI*2,c=Math.pow(ht(),.7)*62,h=t*.5+Math.cos(l)*c*1.5,d=e*.68+Math.sin(l)*c*.62,u=2.5+ht()*6,f=i.createRadialGradient(h-u*.3,d-u*.3,0,h,d,u);f.addColorStop(0,"rgba(240,231,208,0.96)"),f.addColorStop(.55,"rgba(206,189,158,0.92)"),f.addColorStop(1,"rgba(130,112,88,0.85)"),i.fillStyle=f,i.beginPath(),i.arc(h,d,u,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,252,240,0.5)",i.beginPath(),i.arc(h-u*.3,d-u*.35,u*.22,0,Math.PI*2),i.fill()}let a=i.createRadialGradient(t*.5,e*.68,55,t*.5,e*.68,110);a.addColorStop(0,"rgba(178,92,74,0.3)"),a.addColorStop(1,"rgba(178,92,74,0)"),i.fillStyle=a,i.beginPath(),i.arc(t*.5,e*.68,110,0,Math.PI*2),i.fill()}else i.strokeStyle="rgba(110,70,60,0.85)",i.lineWidth=4,i.beginPath(),i.moveTo(t*.4,e*.68),i.quadraticCurveTo(t*.5,e*.735,t*.6,e*.68),i.stroke(),i.strokeStyle="rgba(190,140,120,0.4)",i.lineWidth=2,i.beginPath(),i.moveTo(t*.41,e*.695),i.quadraticCurveTo(t*.5,e*.75,t*.59,e*.695),i.stroke();return[[.5,.28,60,26],[.5,.5,10,34],[.33,.5,20,10],[.67,.5,20,10]].forEach(([a,o,l,c])=>{let h=i.createRadialGradient(t*a,e*o,0,t*a,e*o,Math.max(l,c));h.addColorStop(0,"rgba(255,238,220,0.18)"),h.addColorStop(1,"rgba(255,238,220,0)"),i.fillStyle=h,i.beginPath(),i.ellipse(t*a,e*o,l,c,0,0,Math.PI*2),i.fill()}),ln(n,1,1)}function Ju(){Se(233);let s=256,t=256,e=we(s,t),n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#a50f16"),i.addColorStop(.6,"#8e0c12"),i.addColorStop(1,"#6b080e"),n.fillStyle=i,n.fillRect(0,0,s,t),ki(n,s,t,[150,16,22],18,.35);for(let r=0;r<s;r+=10)n.fillStyle=`rgba(255,120,110,${.03+ht()*.05})`,n.fillRect(r,0,3,t);n.fillStyle="rgba(216,168,58,0.9)",n.font="28px serif",n.textAlign="center",n.textBaseline="middle";for(let r=0;r<6;r++)n.fillText("\u56CD",24+r*42,t*.35+r%2*26);n.strokeStyle="#d8a83a",n.lineWidth=4,n.beginPath(),n.moveTo(0,t-26),n.lineTo(s,t-26),n.stroke(),n.lineWidth=2;for(let r=6;r<s;r+=13)n.beginPath(),n.moveTo(r,t-24),n.lineTo(r+(ht()-.5)*4,t-4),n.stroke();return ln(e,1,1)}function Ku(){Se(211);let s=256,t=256,e=we(s,t),n=e.getContext("2d");n.fillStyle="#8d7a64",n.fillRect(0,0,s,t);let i=we(s,t),r=i.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,s,t);for(let a=0;a<t;a++){let o=Math.sin(a*.08)*8+Math.sin(a*.023)*20;for(let l=0;l<s;l+=3){let c=Math.sin((l+o)*.22)*.5+.5;n.fillStyle=`rgba(40,30,22,${c*.4})`,n.fillRect(l,a,3,1),r.fillStyle=`rgb(${128-c*52|0},${128-c*52|0},${128-c*52|0})`,r.fillRect(l,a,3,1)}}return{map:ln(e,1,1),normalMap:Hi(i,2.2),roughness:.85,metalness:0}}function Qu(s){let t=new pi;t.background=new Gt(1708560);let e=new X(new ie(10,16,8),new ne({color:5579288,side:on}));t.add(e);let n=new X(new ie(1.4,8,8),new ne({color:16767392}));n.position.set(0,6,0),t.add(n);let i=new X(new ie(.9,8,8),new ne({color:16732224}));i.position.set(4,2,-4),t.add(i);let r=new Us(s),a=r.fromScene(t,.2);return r.dispose(),a.texture}function ju(s,t){let e={colliders:[],regions:[],lights:{hall:[],corridor:[],lobby:[],aqua:[],connector:[]},screens:[],future:{},dyn:{},mats:{}},n=Qu(t);s.environment=n;let i=zu(),r=e.mats;r.terrazzo=new et({...i,envMapIntensity:.5}),r.terrazzoDark=new et({...i,color:9405817,envMapIntensity:.3});let a=Vu();r.tiles=new et({...a,envMapIntensity:.6}),r.tiles.userData.tileEvery=1.3;let o=Oc();r.plaster=new et({...o}),r.plaster.userData.tileEvery=3.6;let l=Oc([158,96,84],.9);r.plasterHall=new et({...l}),r.plasterHall.userData.tileEvery=4.2;let c=qo();r.velvet=new et({...c});let h=qo(1);r.velvetDark=new et({...h});let d=Wu();r.carpet=new et({...d}),r.wainscot=new et({...Xu()});let u=qu();r.wood=new et({...u,envMapIntensity:.5});let f=Zu();r.concrete=new et({...f}),r.concrete.userData.tileEvery=3.4,r.concreteWet=new et({...f,color:5658192,roughness:.24,envMapIntensity:1.2}),r.gold=new et({color:13081146,metalness:.9,roughness:.3,envMapIntensity:1.4}),r.steel=new et({color:10133670,metalness:.95,roughness:.22,envMapIntensity:1.6}),r.steelDark=new et({color:3948612,metalness:.8,roughness:.5}),r.black=new et({color:1315860,roughness:.8}),r.white=new et({color:14210248,roughness:.85}),r.ceiling=new et({color:6182476,roughness:.95}),r.ceilingHall=new et({color:4862512,roughness:.95}),r.glassSea=new et({map:Hc(),roughness:.05,metalness:.3,envMapIntensity:2,emissive:667704,emissiveIntensity:.55}),r.sediment=new et({...Zo()}),r.porcelain=new et({color:15262938,roughness:.15,envMapIntensity:1.2}),r.bottleGreen=new et({color:1722922,roughness:.05,metalness:.1,envMapIntensity:1.8}),r.calcite=new et({color:14275262,roughness:.65});let p=(I,O,j,G,K,ot,Nt,tt={})=>{let Et=new X(new Ce(I,O,j),G);return Et.position.set(K,ot,Nt),tt.ry&&(Et.rotation.y=tt.ry),tt.rx&&(Et.rotation.x=tt.rx),Et.castShadow=!!tt.cast,Et.receiveShadow=tt.recv!==!1,s.add(Et),tt.collide&&e.colliders.push({minX:K-I/2-.05,minZ:Nt-j/2-.05,maxX:K+I/2+.05,maxZ:Nt+j/2+.05}),Et},y=(I,O,j,G,K,ot,Nt=0,tt=0)=>{let Et=new X(new ye(I,O),j);return Et.position.set(G,K,ot),Et.rotation.y=Nt,Et.rotation.x=tt,Et.receiveShadow=!0,s.add(Et),Et},g=(I,O,j,G=2.6)=>{let K=I.clone();return K.map&&(K.map=K.map.clone(),K.map.needsUpdate=!0,K.map.repeat.set(O/G,j/G)),K.normalMap&&(K.normalMap=K.normalMap.clone(),K.normalMap.needsUpdate=!0,K.normalMap.repeat.set(O/G,j/G)),K},m=(I,O,j,G)=>e.colliders.push({minX:Math.min(I,j),minZ:Math.min(O,G),maxX:Math.max(I,j),maxZ:Math.max(O,G)}),b=(I,O,j)=>{let G=I.userData.tileEvery;if(!G)return I;let K=`${I.uuid}_${(O/G).toFixed(1)}_${(j/G).toFixed(1)}`;if(b.cache=b.cache||{},b.cache[K])return b.cache[K];let ot=I.clone();return ot.map&&(ot.map=ot.map.clone(),ot.map.needsUpdate=!0,ot.map.repeat.set(Math.max(1,O/G),Math.max(.6,j/G))),ot.normalMap&&(ot.normalMap=ot.normalMap.clone(),ot.normalMap.needsUpdate=!0,ot.normalMap.repeat.set(Math.max(1,O/G),Math.max(.6,j/G))),b.cache[K]=ot,ot};function w(I,O,j,G,K,ot=[],Nt=0,tt=.3){let Et=[[O,j]];for(let[Dt,zt]of ot){let Ue=[];for(let[Ke,pn]of Et){if(zt<=Ke||Dt>=pn){Ue.push([Ke,pn]);continue}Dt>Ke&&Ue.push([Ke,Dt]),zt<pn&&Ue.push([zt,pn])}Et=Ue}for(let[Dt,zt]of Et)p(zt-Dt,G,tt,b(K,zt-Dt,G),(Dt+zt)/2,Nt+G/2,I,{collide:!0});for(let[Dt,zt]of ot)p(zt-Dt,G-2.3,tt,b(K,zt-Dt,G-2.3),(Dt+zt)/2,Nt+2.3+(G-2.3)/2,I)}function v(I,O,j,G,K,ot=[],Nt=0,tt=.3){let Et=[[O,j]];for(let[Dt,zt]of ot){let Ue=[];for(let[Ke,pn]of Et){if(zt<=Ke||Dt>=pn){Ue.push([Ke,pn]);continue}Dt>Ke&&Ue.push([Ke,Dt]),zt<pn&&Ue.push([zt,pn])}Et=Ue}for(let[Dt,zt]of Et)p(tt,G,zt-Dt,b(K,zt-Dt,G),I,Nt+G/2,(Dt+zt)/2,{collide:!0});for(let[Dt,zt]of ot)p(tt,G-2.3,zt-Dt,b(K,zt-Dt,G-2.3),I,Nt+2.3+(G-2.3)/2,(Dt+zt)/2)}let S=(I,O,j,G,K,ot,Nt,tt=!1)=>{let Et=new Di(I,O,j,1.8);return Et.position.set(G,K,ot),tt&&(Et.castShadow=!0,Et.shadow.mapSize.set(512,512),Et.shadow.bias=-.004),s.add(Et),Et.userData.base=O,e.lights[Nt].push(Et),Et};y(30,20,g(r.terrazzo,30,20),0,0,-10,0,-Math.PI/2).receiveShadow=!0,y(30,20,r.ceilingHall,0,7,-10,0,Math.PI/2);let E=y(4.2,17,r.carpet,0,.02,-8.5,0,-Math.PI/2);E.material=r.carpet,w(-20,-15,15,7,r.plasterHall,[[-8,8]]),w(0,-15,15,7,r.plasterHall,[[-1.8,1.8]]),v(-15,-20,0,7,r.plasterHall,[[-7.6,-4.4]]),v(15,-20,0,7,r.plasterHall,[[-7.6,-4.4]]);let C=new se,_=p(1.7,3.4,.12,r.wood,-.85,1.7,0,{}),T=p(1.7,3.4,.12,r.wood,.85,1.7,0,{});C.userData={dL:_,dR:T},e.dyn.doorS=C,m(-1.8,-.2,1.8,.2),e.dyn.doorSCollider=e.colliders[e.colliders.length-1],p(16,.6,3.2,r.velvetDark,0,.3,-18.4,{collide:!0}),p(4,.15,1.2,r.velvetDark,0,.07,-16.6,{});let P=y(14,5.4,new et({map:Gu(),roughness:.85}),0,3.6,-19.7);P.material.emissive=new Gt(1704708),p(1.6,6.4,.4,r.velvet,-7.4,3.2,-19.4,{}),p(1.6,6.4,.4,r.velvet,7.4,3.2,-19.4,{}),p(.7,1.1,.6,r.black,-7.2,1.75,-17.6,{cast:!0}),p(.7,1.1,.6,r.black,7.2,1.75,-17.6,{cast:!0}),p(.12,1.2,.12,r.steelDark,-7.2,.6,-17.6,{}),p(.12,1.2,.12,r.steelDark,7.2,.6,-17.6,{});let L=new ne({color:10336432}),F=y(3.6,2.7,L,-11.5,4,-19.55);e.screens.push({id:"T03",mesh:F,mat:L,kind:"vcr"});let q=[[-6.5,-6],[6.5,-6],[-11,-9.5],[11,-9.5],[-6.5,-12.5],[6.5,-12.5],[-11,-3],[11,-3]],Y=[0,-13.5],k=new Kt(1.15,1.15,.76,20),$=new Kt(1.18,1.45,.76,20,1,!0),Z=new Kt(.62,.62,.04,18),rt=new et({color:10135706,roughness:.05,metalness:.4,envMapIntensity:1.6}),lt=new Kt(.22,.26,.52,10),bt=new Ce(.44,.62,.09),wt=new Kt(.12,.09,.025,12),Pt=new Kt(.03,.024,.09,8),de=new Kt(.04,.045,.3,8),me=[...q,Y],le=new Tn(wt,r.porcelain,me.length*8),it=new Tn(Pt,r.porcelain,me.length*8),ft=new Tn(lt,r.velvet,me.length*6),ct=new Tn(bt,r.velvet,me.length*6);le.castShadow=it.castShadow=!1,ft.castShadow=!0;let Xt=0,$t=0,It=new He;me.forEach(([I,O],j)=>{let G=j===me.length-1,K=new X(k,r.wood);K.position.set(I,.38,O),K.castShadow=!0,s.add(K);let ot=new X($,r.velvet);ot.position.set(I,.38,O),s.add(ot);let Nt=new X(new Kt(1.16,1.16,.03,20),r.velvet);Nt.position.set(I,.775,O),s.add(Nt);let tt=new X(Z,rt);tt.position.set(I,.81,O),s.add(tt),m(I-1.25,O-1.25,I+1.25,O+1.25);for(let Dt=0;Dt<8;Dt++){let zt=Dt/8*Math.PI*2;It.position.set(I+Math.cos(zt)*.92,.8,O+Math.sin(zt)*.92),It.rotation.set(0,0,0),It.updateMatrix(),le.setMatrixAt(Xt,It.matrix),It.position.set(I+Math.cos(zt)*.78,.85,O+Math.sin(zt)*.78),It.updateMatrix(),it.setMatrixAt(Xt,It.matrix),Xt++}for(let Dt=0;Dt<6;Dt++){let zt=Dt/6*Math.PI*2+(G?.5:0),Ue=I+Math.cos(zt)*1.62,Ke=O+Math.sin(zt)*1.62;It.position.set(Ue,.26,Ke),It.rotation.set(0,-zt+Math.PI/2,0),It.updateMatrix(),ft.setMatrixAt($t,It.matrix),It.position.set(Ue+Math.cos(zt)*.24,.82,Ke+Math.sin(zt)*.24),It.updateMatrix(),ct.setMatrixAt($t,It.matrix),$t++}let Et=new X(de,r.bottleGreen);Et.position.set(I+.4,.95,O+.2),Et.castShadow=!0,s.add(Et)}),s.add(le,it,ft,ct);let Be=Y[0]+2.1,ee=Y[1],ce=new se,ue=new X(new Ce(.5,1,.5),r.velvet);ue.position.y=.5,ce.add(ue);let ae=new X(new Ce(.5,.72,.1),r.velvet);ae.position.set(0,1.3,.22),ce.add(ae);let Pe=new X(new ye(.62,.9),new et({color:12587032,roughness:.7,side:Te,emissive:3146762}));Pe.position.set(0,1.35,.28),Pe.rotation.x=-.15,ce.add(Pe),ce.position.set(Be,0,ee),ce.rotation.y=-Math.PI/2,s.add(ce),e.dyn.vipChair=ce;let Ge=new et({map:Yo("\u4E0A\u5BBE"),roughness:.8,side:Te}),We=y(.28,.18,Ge,Y[0]+1,.89,Y[1],-Math.PI/2);We.rotation.x=-.3,e.dyn.vipCard=We;let Ye=new et({map:Yo("\u4F34\u5A18"),roughness:.8,side:Te}),Ae=y(.28,.18,Ye,Y[0]-1,.89,Y[1],Math.PI/2);Ae.rotation.x=-.3,e.dyn.cardYou={mesh:Ae,mat:Ye,flip:Yo("\u4E0A\u5BBE",!0)};function Ie(I,O,j){let G=new se,K=new X(new wn(.9,.06,8,24),r.gold);K.rotation.x=Math.PI/2,G.add(K);let ot=new X(new wn(.5,.05,8,20),r.gold);ot.rotation.x=Math.PI/2,ot.position.y=.4,G.add(ot);let Nt=new et({color:16767392,emissive:16757854,emissiveIntensity:2.2});for(let Dt=0;Dt<8;Dt++){let zt=Dt/8*Math.PI*2,Ue=new X(new ie(.07,8,8),Nt);Ue.position.set(Math.cos(zt)*.9,.12,Math.sin(zt)*.9),G.add(Ue)}let tt=new X(new Kt(.02,.02,1.4,6),r.gold);tt.position.y=1,G.add(tt),G.position.set(I,5.4,O),s.add(G);let Et=S(16760952,55,26,I,5,O,j,j==="hall");return{group:G,light:Et,bulbMat:Nt}}e.dyn.chand1=Ie(0,-5,"hall"),e.dyn.chand2=Ie(0,-12,"hall"),[[-14.7,-4],[-14.7,-12],[14.7,-4],[14.7,-12]].forEach(([I,O])=>{let j=p(.24,.5,.18,r.gold,I,3.2,O,{});j.material=r.gold,S(16756832,8,9,I+(I<0?.4:-.4),3.3,O,"hall")});let D=new xr(16769200,260,30,.32,.45,1.4);D.position.set(0,6.6,-12),D.target.position.set(0,1.4,-18.2),D.castShadow=!0,D.shadow.mapSize.set(1024,1024),D.shadow.bias=-.002,s.add(D,D.target),e.lights.hall.push(D),D.userData.base=260,e.dyn.stageSpot=D;let cn=new et({color:11538968,emissive:2753542,roughness:.8}),pe=new et({color:13081146,metalness:.6,roughness:.4});e.dyn.garlands=[];for(let I=0;I<5;I++){let G=-17+I*3.6,K=[];for(let Nt=0;Nt<=16;Nt++){let tt=Nt/16;K.push(new R(-15+30*tt,6.4-Math.sin(tt*Math.PI)*.9,G))}let ot=new X(new An(new Mn(K),24,.035,5),I%2?pe:cn);s.add(ot),e.dyn.garlands.push(ot)}let A=new et({color:12589090,roughness:.25,envMapIntensity:1.2}),x=new et({color:14200912,roughness:.25,envMapIntensity:1.2});[[-13.5,-1.5],[13.5,-1.5],[-13.5,-18],[13.5,-18]].forEach(([I,O],j)=>{for(let G=0;G<5;G++){let K=new X(new ie(.16,10,10),G%2?x:A);K.position.set(I+Math.sin(G*2.1)*.3,2.2+G*.28,O+Math.cos(G*1.7)*.3),K.scale.y=1.15,s.add(K)}});let B=new et({map:Yu(),roughness:.9});[[-15,-9,Math.PI/2],[15,-9,-Math.PI/2],[-8,.15-0,0],[8,0,0]].forEach(([I,O,j],G)=>{G<2?y(1.1,1.1,B,I+(I<0?.16:-.16),3.4,O,j):y(1.1,1.1,B,I,3.4,-.16,Math.PI)});let V=new se,J=new et({color:7031356,roughness:.85,emissive:1182214});for(let I=0;I<7;I++){let O=-16.5+I*2.6,j=10.6-Math.abs(I-3)*.45,G=new X(new wn(j,.62-.04*Math.abs(I-3),9,26,Math.PI),J);G.position.set(0,.1,O),G.scale.set(1.32,.66,1),G.rotation.z=(I%2?1:-1)*.05,V.add(G)}V.visible=!1,s.add(V),e.dyn.throat=V,e.regions.push({name:"\u5BB4\u4F1A\u5385",box:[-15,-20,15,0],mat:"carpet"}),y(25,3.6,g(r.terrazzoDark,25,3.6),27.5,0,-6.2,0,-Math.PI/2),y(3.6,18.4,g(r.terrazzoDark,3.6,18.4),38.2,0,4.8,0,-Math.PI/2),y(25,3.6,r.ceiling,27.5,3.2,-6.2,0,Math.PI/2),y(3.6,18.4,r.ceiling,38.2,3.2,4.8,0,Math.PI/2);function ut(I,O,j,G=[]){w(I,O,j,1.25,r.tiles,G),w(I,O,j,1.95,r.plaster,G,1.25)}function pt(I,O,j,G=[]){v(I,O,j,1.25,r.tiles,G),v(I,O,j,1.95,r.plaster,G,1.25)}ut(-8,15,40,[]),ut(-4.4,15,36.4,[]),pt(40,-8,14,[]),pt(36.4,-4.4,14,[]);let Q=new et({color:3024416,roughness:.9});[[20,-8],[28,-8],[34,-8]].forEach(([I,O])=>{y(1.1,2.2,Q,I,1.1,O+.16),y(.9,.28,new et({map:Wn(I===28?"\u5DE5\u4F5C\u95F4":"\u540E\u53A8","#ddd6c2","#37322a",88),roughness:.9}),I,2.42,O+.17)}),y(.9,.28,new et({map:Wn("\u5BB4\u4F1A\u5385 \u2192","#e8e2d2","#233225",80),roughness:.9}),16.5,2.5,-4.6-.16,Math.PI),e.dyn.tubes=[];let st=()=>new et({color:15397606,emissive:13625560,emissiveIntensity:2.6});[[18,-6.2,0],[25,-6.2,0],[32,-6.2,0],[38.2,-1,1],[38.2,5,1],[38.2,11,1]].forEach(([I,O,j],G)=>{let K=st(),ot=p(j?.12:1.4,.06,j?1.4:.12,K,I,3.12,O,{}),Nt=S(14217436,G%2===0?16:12,11,I,2.8,O,"corridor");e.dyn.tubes.push({mesh:ot,mat:K,light:Nt,flicker:G===2})});function xt(I,O,j){let G=new se,K=new X(new Ce(1.1,.08,.6),r.steel);K.position.y=.85,G.add(K);let ot=K.clone();ot.position.y=.3,G.add(ot);for(let[tt,Et]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]]){let Dt=new X(new Kt(.02,.02,.85,6),r.steelDark);Dt.position.set(tt,.45,Et),G.add(Dt)}for(let tt=0;tt<3;tt++){let Et=new X(new Kt(.16,.16,.34,12),r.porcelain);Et.position.set(-.32+tt*.32,1.07,0),G.add(Et)}let Nt=new X(new ye(.7,.5),r.velvet);return Nt.position.set(.2,.62,.31),Nt.rotation.x=-.2,G.add(Nt),G.position.set(I,0,O),G.rotation.y=j,s.add(G),m(I-.65,O-.4,I+.65,O+.4),G}xt(22,-7.4,0),xt(38.9,2,Math.PI/2);let Ht=new et({color:9312788,roughness:.8});for(let I=0;I<4;I++)p(.6,.35,.42,Ht,30.5+I%2*.65,.18+Math.floor(I/2)*.37,-7.5,{collide:I<2});for(let I=0;I<6;I++){let O=p(1.6+Math.random()*1.2,.1+Math.random()*.14,.24,r.sediment,17+I*3.8,.08,-7.75,{});O.rotation.z=(Math.random()-.5)*.06}p(24.9,.1,.1,r.steelDark,27.5,3,-7.7,{}),p(.1,.1,18.2,r.steelDark,39.7,3,4.8,{}),e.regions.push({name:"\u670D\u52A1\u8D70\u5ECA",box:[15,-8,40,-4.4],mat:"terrazzo"}),e.regions.push({name:"\u670D\u52A1\u8D70\u5ECA",box:[36.4,-4.4,40,14],mat:"terrazzo"}),y(24,16,g(r.terrazzo,24,16),36,0,22,0,-Math.PI/2),y(24,16,r.ceiling,36,8,22,0,Math.PI/2),y(4.5,14,r.carpet,36,.02,22.8,0,-Math.PI/2),w(30,24,48,8,r.plaster,[[33,39]]),w(14,24,48,8,r.plaster,[[36.4,40]]),v(24,14,30,8,r.plaster,[[20,23.2]]),v(48,14,30,8,r.plaster,[]);let Mt=new et({color:3160378,roughness:.04,metalness:.4,transparent:!0,opacity:.5,envMapIntensity:2});p(6,3.4,.1,Mt,36,1.7,30,{}),m(32.8,29.8,39.2,30.2),p(.14,3.4,.14,r.steel,33,1.7,30,{}),p(.14,3.4,.14,r.steel,39,1.7,30,{}),p(.14,3.4,.14,r.steel,36,1.7,30,{});let _t=new ne({color:13161672,transparent:!0,opacity:.22,depthWrite:!1});y(14,6,_t,36,2.5,36,Math.PI);let kt=document.createElement("canvas");kt.width=kt.height=128;let Vt=kt.getContext("2d"),Yt=Vt.createRadialGradient(64,64,2,64,64,62);Yt.addColorStop(0,"rgba(255,244,210,1)"),Yt.addColorStop(.25,"rgba(255,236,190,0.55)"),Yt.addColorStop(.6,"rgba(220,200,160,0.14)"),Yt.addColorStop(1,"rgba(0,0,0,0)"),Vt.fillStyle=Yt,Vt.fillRect(0,0,128,128);let U=new xn(kt),dt=new ne({map:U,color:16773836,transparent:!0,opacity:0,depthWrite:!1,blending:Cn,fog:!1}),nt=y(2.6,1.7,dt,33.5,1,35,Math.PI),yt=y(2.6,1.7,dt,38.5,1,35.5,Math.PI);e.dyn.headlights={mat:dt,m1:nt,m2:yt},[[30,18],[42,18],[30,26],[42,26]].forEach(([I,O])=>{let j=new X(new Kt(.55,.55,8,20),r.steel);j.position.set(I,4,O),j.castShadow=!0,s.add(j),m(I-.6,O-.6,I+.6,O+.6);let G=new X(new Kt(.68,.62,.3,20),r.gold);G.position.set(I,.15,O),s.add(G)});let mt=Ie(36,22,"lobby");mt.group.scale.setScalar(1.8),mt.group.position.y=6.2,mt.light.position.y=5.8,mt.light.intensity=110,mt.light.userData.base=110,mt.light.castShadow=!0,mt.light.shadow.mapSize.set(512,512),e.dyn.lobbyChand=mt,p(1.2,1.1,7,r.wood,45.5,.55,22,{collide:!0,cast:!0}),p(1.5,.08,7.4,r.wood,45.5,1.14,22,{});let at=new X(new _n(.22,.24,12,1,!0),new et({color:1855544,roughness:.4,side:Te}));at.position.set(45.5,1.5,19.5),s.add(at),p(.04,.34,.04,r.gold,45.5,1.3,19.5,{}),S(16765072,10,7,45.5,1.45,19.5,"lobby"),p(.26,.1,.2,r.black,45.5,1.22,24,{});let Bt=new et({map:Wn("\u70ED\u70C8\u795D\u8D3A\u5468\u5E9C\u5343\u91D1\u4E8E\u5F52\u4E4B\u559C","#e7c25c","#8e0c12",60),roughness:.85}),Ut=y(14,1.1,Bt,36,6.2,29.7,Math.PI);Ut.rotation.z=.012;let Le=new et({color:3038260,roughness:.85});[[25.5,28.5],[46.5,28.5],[25.5,15.5]].forEach(([I,O])=>{p(.5,.5,.5,new et({color:8007202,roughness:.9}),I,.25,O,{collide:!0});for(let j=0;j<6;j++){let G=new X(new _n(.09,.9,6),Le);G.position.set(I+Math.sin(j*2.4)*.2,.9+j%3*.14,O+Math.cos(j*1.9)*.2),G.rotation.set(Math.sin(j)*.5,0,Math.cos(j*1.3)*.5),s.add(G)}}),p(.7,.5,.45,new et({color:4864040,roughness:.9}),34,.25,28.6,{}),p(.6,.42,.4,new et({color:3490382,roughness:.9}),34.7,.21,28.3,{}),p(2.2,.45,.9,r.velvetDark,27,.32,24.5,{collide:!0}),p(2.2,.7,.24,r.velvetDark,27,.85,24.9,{}),y(1.6,.5,new et({map:Wn("\u5458\u5DE5\u901A\u9053 \xB7 \u6D77\u6D0B\u9986\u8FDE\u5ECA","#d8e6dc","#22322a",56),roughness:.9}),24.4,2.7,21.6,Math.PI/2);for(let I=0;I<6;I++)p(3,.18,.34,r.terrazzoDark,47.2-I*0,.2+I*.18,15.6+I*.34,{});p(3,.06,.06,r.gold,47.2,1.05,16.2,{ry:0}),m(45.6,15.3,48,17.8),e.dyn.pits=[];let be=new et({color:790032,roughness:.15,metalness:.4,envMapIntensity:1.4});[[31,20,2.6,1.5,.4],[39,24.5,3.4,1.8,-.7],[35,17.5,2,1.2,1.9]].forEach(([I,O,j,G,K])=>{let ot=new X(new Ji(1,24),be);ot.scale.set(j,G,1),ot.rotation.x=-Math.PI/2,ot.rotation.z=K,ot.position.set(I,.035,O),ot.visible=!1,s.add(ot),e.dyn.pits.push(ot)}),e.regions.push({name:"\u5927\u5802",box:[24,14,48,30],mat:"terrazzo"}),y(43,4,g(r.concreteWet,43,4,3.2),2.5,0,22,0,-Math.PI/2),y(43,4,r.ceiling,2.5,3.4,22,0,Math.PI/2),w(20,-19,24,1.25,r.tiles,[[-19,-15.2]]),w(20,-19,24,2.15,r.concrete,[[-19,-15.2]],1.25);let On=y(46,8,new ne({map:Hc()}),2.5,2.5,26.5,Math.PI);e.dyn.beams=[];let In=new ne({color:6740168,transparent:!0,opacity:.14,blending:Cn,depthWrite:!1,side:Te});for(let I=0;I<5;I++){let O=new X(new ye(1.4+I*.4,7),In);O.position.set(-14+I*8,2.8,25.4),O.rotation.z=.25,s.add(O),e.dyn.beams.push({mesh:O,phase:I*1.7,x0:-14+I*8})}let hl=new ne({color:133388,transparent:!0,opacity:.85,depthWrite:!1}),is=new X(new ie(2.6,12,8),hl);is.scale.set(2.2,.7,.5),is.position.set(-6,3.4,26.2),s.add(is),e.dyn.seaShade=is;let Dr=new fr({color:10471618,roughness:.03,metalness:0,transparent:!0,opacity:.18,envMapIntensity:2.2});for(let I=0;I<12;I++){let O=-17.2+I*3.6;y(3.5,3.4,Dr,O,1.7,24),p(.14,3.4,.2,r.steelDark,O+1.78,1.7,24,{})}m(-19,23.8,24,24.3),p(.14,3.4,.2,r.steelDark,-19,1.7,24,{}),p(.3,3.4,4.2,r.concrete,-19,1.7,22,{collide:!0});let vi=document.createElement("canvas");vi.width=256,vi.height=256;let Mi=vi.getContext("2d");Mi.strokeStyle="rgba(220,240,240,0.9)",Mi.lineWidth=2;for(let I=0;I<7;I++){Mi.beginPath();let O=128,j=128;Mi.moveTo(O,j);for(let G=0;G<6;G++)O+=(Math.random()-.5)*90,j+=(Math.random()-.5)*90,Mi.lineTo(O,j);Mi.stroke()}let Ur=new xn(vi),Nr=new ne({map:Ur,transparent:!0,opacity:0,depthWrite:!1});e.dyn.cracks=[],[[-2,23.85],[6,23.85],[14,23.85]].forEach(([I,O])=>{let j=y(3.2,3.2,Nr.clone(),I,1.7,O,Math.PI);e.dyn.cracks.push(j)});let si=new et({map:Wn("\u8680\u6E7E\u6D77\u6D0B\u9986","#bfeee8","#0d2b31",88),emissive:1923676,emissiveIntensity:1.6,roughness:.6});y(3.2,.9,si,21.5,2.8,20.2,0),S(6736064,9,8,21.5,2.6,21,"aqua"),p(2,1.05,.8,r.wood,21.6,.53,20.7,{collide:!0});let Xn=new se,Fr=new X(new Ce(.16,3.2,3.8),r.steelDark);Xn.add(Fr);for(let I=0;I<6;I++){let O=new X(new Ce(.2,3.2,.06),r.steel);O.position.set(0,0,-1.7+I*.68),Xn.add(O)}let ss=new X(new ye(1.4,.4),new et({map:Wn("\u68C0\u4FEE\u95F8 \xB7 \u7981\u6B62\u901A\u884C","#e8d8b0","#5a2018",64),roughness:.9}));ss.rotation.y=Math.PI/2,ss.position.set(.11,.4,0),Xn.add(ss),Xn.position.set(4,1.6,22),s.add(Xn),e.dyn.gate={group:Xn,y:1.6,targetY:1.6,collider:{minX:3.7,minZ:20,maxX:4.3,maxZ:24}},e.colliders.push(e.dyn.gate.collider),p(.24,3.4,.24,r.steelDark,4,1.7,20.25,{}),p(.24,3.4,.24,r.steelDark,4,1.7,23.75,{});let rs=new et({color:2777152,emissive:1926724,emissiveIntensity:2.4});[[-16,20.3],[10,20.3],[22,20.3]].forEach(([I,O])=>{p(.34,.16,.1,rs,I,3,O+.05,{})}),S(4168296,7,9,-16,2.8,21,"aqua"),S(4168296,6,9,10,2.8,21,"aqua");let Br=S(5220512,38,18,-6,2.4,22.3,"aqua"),as=S(5220512,34,18,12,2.4,22.3,"aqua"),Or=S(5220512,30,16,-15,2.4,22.3,"aqua");e.dyn.waterLights=[Br,as,Or];let Os=new X(new Ce(43,.1,.16),new et({color:10479836,emissive:6277308,emissiveIntensity:1.8}));Os.position.set(2.5,3.3,23.85),s.add(Os);let ul=new et({color:1712676,roughness:.03,metalness:.5,envMapIntensity:2.4,transparent:!0,opacity:.8});[[-8,22.6,1.6],[2,21.4,1.1],[16,22.8,2]].forEach(([I,O,j])=>{let G=new X(new Ji(1,20),ul);G.rotation.x=-Math.PI/2,G.scale.set(j,j*.55,1),G.position.set(I,.02,O),s.add(G)}),e.regions.push({name:"\u6D77\u6D0B\u9986\u8FDE\u5ECA",box:[-19,20,24,24],mat:"wet"}),y(3.8,27.6,g(r.concrete,3.8,27.6,3.2),-17.1,0,6.2,0,-Math.PI/2),y(3.8,27.6,r.ceiling,-17.1,3,6.2,0,Math.PI/2),v(-19,-7.6,20,3,r.concrete,[]),v(-15.2,-4.4,20,3,r.concrete,[[-7.6,-4.4]]),w(-7.6,-19,-15.2,3,r.concrete,[]),[[-18.8,2],[-18.8,10]].forEach(([I,O])=>{y(1.4,2.2,Q,I+.16,1.1,O,Math.PI/2),p(.1,2.4,1.6,r.steelDark,I+.05,1.2,O,{})}),y(.8,.3,new et({map:Wn("\u65E7\u51B7\u5E93 \xB7 3","#cfd8ce","#2e3630",76),roughness:.9}),-18.7,2.3,6,Math.PI/2),p(.12,.12,27,r.steelDark,-18.6,2.6,6.2,{});for(let I=0;I<9;I++){let O=new X(new ie(.09+Math.random()*.1,7,7),r.calcite);O.position.set(-18.55,2.5+Math.random()*.24,-5+I*2.8+Math.random()),O.scale.y=.7,s.add(O)}e.dyn.bulbs=[],[[-17.1,-3],[-17.1,6],[-17.1,15]].forEach(([I,O],j)=>{let G=new se,K=new X(new Kt(.012,.012,.7,5),r.black);K.position.y=.35,G.add(K);let ot=new X(new ie(.06,8,8),new et({color:16767392,emissive:16760944,emissiveIntensity:2.4}));G.add(ot),G.position.set(I,2.6,O),s.add(G);let Nt=S(16760952,9,8,I,2.4,O,"connector");e.dyn.bulbs.push({group:G,light:Nt,phase:j*2.1})});let dl=new X(new An(new Mn([new R(-17.5,.03,-5.5),new R(-17,.05,-5.8),new R(-16.6,.03,-5.5),new R(-16.4,.04,-6)]),12,.02,5),new et({color:4854292,roughness:.95}));s.add(dl),e.regions.push({name:"\u5458\u5DE5\u8FDE\u5ECA",box:[-19,-7.6,-15.2,20],mat:"metal"});function Hs(I,O,j,G,K,ot,Nt){let tt=new se,Et=new et({color:3814960,roughness:.55}),Dt=new X(new Ce(.62,.5,.5),Et);Dt.castShadow=!0,tt.add(Dt);let zt=new X(new Ce(.64,.52,.04),new et({color:2893860,roughness:.5}));zt.position.z=.25,tt.add(zt);let Ue=new ne({color:2241328}),Ke=new X(new ye(.5,.38),Ue);Ke.position.set(-.03,.02,.275),tt.add(Ke);for(let fl=0;fl<2;fl++){let pl=new X(new Kt(.024,.024,.02,8),r.steelDark);pl.rotation.x=Math.PI/2,pl.position.set(.25,.08-fl*.1,.276),tt.add(pl)}tt.position.set(I,O,j),tt.rotation.y=G,s.add(tt);let pn=new Di(6740172,4,4,2);return pn.position.set(I,O+.1,j),s.add(pn),e.screens.push({id:K,mesh:Ke,mat:Ue,kind:"preview",camPos:ot,camLook:Nt,glow:pn,group:tt}),tt}p(.5,1.15,.5,r.steelDark,26.5,.58,-7.5,{collide:!0}),Hs(26.5,1.42,-7.5,.25,"T02",new R(26.5,2.2,-6.8),new R(34,1.2,-5.6)),Hs(45.4,1.45,26,-Math.PI/2-.2,"T01",new R(44,3.4,26),new R(34,2.2,21)),Hs(21.6,1.3,20.75,Math.PI+.15,"T07",new R(18,1.9,21.2),new R(4,1.6,22.6));let jc=new ne({color:16726064,wireframe:!1}),M=new ne({color:16732224}),N=new ne({color:1316892}),W=new se,H=(I,O,j=M)=>{let G=O.clone().sub(I),K=G.length(),ot=new X(new Kt(.03,.03,K,5),j);return ot.position.copy(I).add(O).multiplyScalar(.5),ot.quaternion.setFromUnitVectors(new R(0,1,0),G.normalize()),ot};W.add(H(new R(16.2,2.05,-6.2),new R(35.5,2.05,-6.2))),W.add(H(new R(35.5,2.05,-6.2),new R(38.2,2.05,-3.5))),W.add(H(new R(38.2,2.05,-3.5),new R(38.2,2.05,11)));let z=new X(new As(.24,1.1,4,8),N);z.position.set(31,.95,-6.2),W.add(z),W.visible=!1,s.add(W),e.future.corridor=W;let vt=new se;for(let I=0;I<7;I++){let O=I/6,j=new X(new Ce(2.6-O*.8,.5,1.6-O*.5),N);j.position.set(29+O*12,.6+Math.sin(O*Math.PI)*5.4,19+O*5.5),j.rotation.set(O*.8,O*1.2,Math.sin(O*6)*.4),vt.add(j)}let At=new X(new As(.24,1.1,4,8),new ne({color:7213075}));At.position.set(33,.95,24),vt.add(At),vt.visible=!1,s.add(vt),e.future.lobby=vt;let gt=new se,Lt=new X(new ie(4,16,12,0,Math.PI),new ne({color:929848,side:Te}));Lt.scale.set(1.4,.8,.35),Lt.position.set(4,1.7,24.4),Lt.rotation.y=Math.PI,gt.add(Lt),gt.add(H(new R(4,3.3,22),new R(10.5,2.6,20.3)));let Ot=new X(new Ce(.16,3.2,3.8),new ne({color:3160124,transparent:!0,opacity:.7}));Ot.position.set(4,4.4,22),gt.add(Ot),gt.visible=!1,s.add(gt),e.future.aqua=gt;let Zt=(I,O,j)=>{let G=document.createElement("canvas");G.width=I,G.height=O,j(G.getContext("2d"),I,O);let K=new xn(G);return K.colorSpace=Qe,K},Qt=new et({color:11735584,emissive:14494232,emissiveIntensity:.85,roughness:.6,transparent:!0,opacity:.96}),Ft=new et({color:13081146,metalness:.7,roughness:.4}),ge=new et({color:9309202,roughness:.9});e.dyn.lanterns=[],[[-13.2,-3.2],[-13.2,-9.5],[-13.2,-15.8],[13.2,-3.2],[13.2,-9.5],[13.2,-15.8]].forEach(([I,O],j)=>{let G=new se,K=new X(new ie(.3,14,12),Qt);K.scale.y=1.18,G.add(K);for(let Dt=0;Dt<5;Dt++){let zt=new X(new wn(.3,.008,5,20),Ft);zt.rotation.y=Dt/5*Math.PI,zt.scale.y=1.18,G.add(zt)}let ot=new X(new Kt(.1,.14,.07,10),Ft);ot.position.y=.38,G.add(ot);let Nt=ot.clone();Nt.position.y=-.38,Nt.rotation.x=Math.PI,G.add(Nt);let tt=new X(new _n(.035,.3,8),ge);tt.position.y=-.56,G.add(tt);let Et=new X(new Kt(.008,.008,1.1,4),r.black);Et.position.y=.95,G.add(Et),G.position.set(I,4.9,O),s.add(G),e.dyn.lanterns.push({group:G,phase:j*1.3})});let xe=new et({color:9071156,metalness:.55,roughness:.5});p(30,.14,.14,xe,0,6.7,-.2,{}),p(30,.14,.14,xe,0,6.7,-19.8,{}),p(.14,.14,20,xe,-14.8,6.7,-10,{}),p(.14,.14,20,xe,14.8,6.7,-10,{}),p(20,.1,.1,xe,0,6.96,-4.5,{}),p(20,.1,.1,xe,0,6.96,-15.5,{}),p(.1,.1,11,xe,-10,6.96,-10,{}),p(.1,.1,11,xe,10,6.96,-10,{}),y(19.6,10.8,new et({color:3810338,roughness:.95}),0,6.99,-10,0,Math.PI/2);let De=new et({...qo(),color:8261654});for(let I=0;I<22;I++){let O=-7.7+I*.73,j=new X(new Kt(.22+I%3*.05,.3+I%2*.06,6.2,8),De);j.position.set(O,3.5,-19.85+I%2*.1),s.add(j)}let Me=new ie(.09,10,8),Ze=r.porcelain;me.forEach(([I,O],j)=>{let G=new se,K=new X(Me,Ze);K.scale.y=.82,G.add(K);let ot=new X(new Kt(.012,.02,.1,6),Ze);ot.position.set(.09,.02,0),ot.rotation.z=-1,G.add(ot);let Nt=new X(new Kt(.028,.04,.03,8),Ze);Nt.position.y=.075,G.add(Nt),G.position.set(I-.35,.885,O-.25),G.rotation.y=j*1.1,s.add(G);let tt=new X(new Kt(.09,.06,.03,10),r.porcelain);tt.position.set(I+.15,.87,O+.42),s.add(tt);for(let Et=0;Et<5;Et++){let Dt=new X(new ie(.016,6,5),new et({color:Et%2?12589090:14200912,roughness:.3}));Dt.position.set(I+.15+Math.sin(Et*2.2)*.045,.9,O+.42+Math.cos(Et*1.8)*.045),s.add(Dt)}});{let I=new Tn(new Ji(.035,6),new et({color:12589090,roughness:.9,side:Te}),90),O=new He;Se(313);for(let j=0;j<90;j++)O.position.set((ht()-.5)*5.5,.03,-1-ht()*16),O.rotation.set(-Math.PI/2+(ht()-.5)*.4,0,ht()*6.28),O.scale.setScalar(.6+ht()),O.updateMatrix(),I.setMatrixAt(j,O.matrix);s.add(I)}let Rt=()=>Zt(128,96,(I,O,j)=>{I.fillStyle="#b8a583",I.fillRect(0,0,O,j),Se(Math.random()*999|0),I.fillStyle="rgba(70,58,40,0.85)",I.fillRect(6,j*.55,O-12,j*.38);for(let K=0;K<7;K++){let ot=14+K*((O-28)/6);I.fillStyle="rgba(58,46,34,0.9)",I.beginPath(),I.ellipse(ot,j*.46,6,8,0,0,Math.PI*2),I.fill(),I.fillRect(ot-7,j*.52,14,j*.3)}I.filter="blur(2.5px)",I.drawImage(I.canvas,0,0),I.filter="none";let G=I.createRadialGradient(O/2,j/2,j*.3,O/2,j/2,O*.75);G.addColorStop(0,"rgba(0,0,0,0)"),G.addColorStop(1,"rgba(40,28,14,0.55)"),I.fillStyle=G,I.fillRect(0,0,O,j)});[[-14.7,-6.5,Math.PI/2],[-14.7,-14,Math.PI/2],[14.7,-15.5,-Math.PI/2]].forEach(([I,O,j])=>{let G=p(.06,.66,.9,r.wood,I+(I<0?.02:-.02),2.2,O,{}),K=y(.78,.54,new et({map:Rt(),roughness:.9}),I+(I<0?.08:-.08),2.2,O,j);K.rotation.z=(Math.random()-.5)*.05});{let I=new et({map:Wn("\u5C0F\u5FC3\u5730\u6ED1","#3a2f16","#d8c23a",88),roughness:.8}),O=y(.44,.6,I,24.5,.32,-6.9,.5);O.rotation.x=-.22;let j=y(.44,.6,I,24.52,.32,-6.86,.5+Math.PI);j.rotation.x=.22,m(24.3,-7.1,24.75,-6.7);let G=new X(new Kt(.16,.13,.34,10),new et({color:9312788,roughness:.7}));G.position.set(33.4,.17,-7.4),s.add(G);let K=new X(new Kt(.014,.014,1.3,5),r.wood);K.position.set(33.5,.75,-7.45),K.rotation.z=.35,s.add(K);for(let Nt=0;Nt<3;Nt++){let tt=new X(new Ce(.46,.1,.46),r.wood);tt.position.set(38.9,.3+Nt*.24,11.8),tt.rotation.y=Nt*.16,s.add(tt);let Et=new X(new Ce(.46,.4,.08),r.wood);Et.position.set(38.9,.5+Nt*.24,12.02),Et.rotation.y=Nt*.16,s.add(Et)}m(38.6,11.5,39.2,12.2);let ot=new X(new wn(.09,.018,6,14),r.steelDark);ot.position.set(30,2.86,-7.62),ot.rotation.x=Math.PI/2,s.add(ot)}{let I=Zt(160,160,(tt,Et,Dt)=>{tt.fillStyle="#e6dcc4",tt.beginPath(),tt.arc(80,80,74,0,Math.PI*2),tt.fill(),tt.strokeStyle="#3a2f22",tt.lineWidth=5,tt.stroke(),tt.fillStyle="#3a2f22";for(let zt=0;zt<12;zt++){let Ue=zt/12*Math.PI*2;tt.fillRect(80+Math.cos(Ue)*62-2,80+Math.sin(Ue)*62-2,zt%3===0?6:3,zt%3===0?6:3)}tt.strokeStyle="#2a2018",tt.lineWidth=6,tt.beginPath(),tt.moveTo(80,80),tt.lineTo(80+Math.cos(-Math.PI/2-.05)*38,80+Math.sin(-Math.PI/2-.05)*38),tt.stroke(),tt.lineWidth=4,tt.beginPath(),tt.moveTo(80,80),tt.lineTo(80+Math.cos(-Math.PI/2-.21)*56,80+Math.sin(-Math.PI/2-.21)*56),tt.stroke()}),O=y(1.1,1.1,new et({map:I,transparent:!0,roughness:.85}),47.8,5,22,-Math.PI/2);O.rotation.z=.01,p(2.2,1.4,.08,r.wood,47.8,2.2,22,{});for(let tt=0;tt<4;tt++)for(let Et=0;Et<8;Et++){if((tt*8+Et)%5===0)continue;let Dt=new X(new Ce(.02,.1,.05),Ft);Dt.position.set(47.74,2.65-tt*.3,21.1+Et*.26),s.add(Dt)}let j=new X(new ie(.05,10,8,0,Math.PI*2,0,Math.PI*.6),Ft);j.position.set(45.5,1.2,20.6),s.add(j);let G=new et({color:9073730,metalness:.9,roughness:.25,envMapIntensity:1.6});p(1.9,2.6,.12,G,27.5,1.3,14.25,{}),p(.06,2.6,.16,r.steelDark,27.5,1.3,14.22,{}),p(2.3,.2,.2,r.steelDark,27.5,2.75,14.25,{});let K=Zt(64,24,tt=>{tt.fillStyle="#150e08",tt.fillRect(0,0,64,24),tt.fillStyle="#e75c2c",tt.font="18px monospace",tt.textAlign="center",tt.textBaseline="middle",tt.fillText("\u2014",32,13)}),ot=y(.4,.15,new et({map:K,emissive:10502168,emissiveIntensity:1.2,roughness:.6}),27.5,2.95,14.32,0);e.dyn.elevInd={mesh:ot,tex:K};let Nt=Zt(128,128,(tt,Et,Dt)=>{let zt=tt.createLinearGradient(0,Dt,0,0);zt.addColorStop(0,"rgba(200,220,210,0.16)"),zt.addColorStop(.5,"rgba(200,220,210,0.03)"),zt.addColorStop(1,"rgba(200,220,210,0)"),tt.fillStyle=zt,tt.fillRect(0,0,Et,Dt);for(let Ue=0;Ue<14;Ue++){let Ke=Math.random()*Et,pn=Dt-Math.random()*Dt*.45;tt.strokeStyle="rgba(225,240,235,0.10)",tt.lineWidth=1,tt.beginPath(),tt.moveTo(Ke,pn),tt.lineTo(Ke+(Math.random()-.5)*4,Dt),tt.stroke()}});y(5.9,3.3,new ne({map:Nt,transparent:!0,depthWrite:!1}),36,1.7,29.85,Math.PI)}{let I=new ne({color:402206,transparent:!0,opacity:.75,depthWrite:!1,side:Te});e.dyn.kelps=[];for(let K=0;K<8;K++){let ot=3+Math.random()*3.5,Nt=new X(new ye(.5+Math.random()*.5,ot),I);Nt.position.set(-16+K*5+Math.random()*2,ot/2-.4,25.6+Math.random()*.8),s.add(Nt),e.dyn.kelps.push({mesh:Nt,phase:K*1.4})}let O=new ne({color:135187,transparent:!0,opacity:.9,depthWrite:!1}),j=new X(new Kt(1.1,1.1,.1,14),O);j.position.set(2,.9,25.9),j.rotation.z=.5,j.rotation.x=.3,s.add(j);for(let K=0;K<3;K++){let ot=new X(new Ce(.42,.9,.42),O);ot.position.set(.4+K*1.6,.5+K%2*.35,26+K%2*.4),ot.rotation.set(.4*K,K,.3),s.add(ot)}let G=new et({color:1849896,roughness:.9,transparent:!0,opacity:.75});for(let K=0;K<12;K++){let ot=y(3.4,.28+Math.random()*.3,G,-17.2+K*3.6,.2,23.93,Math.PI);ot.rotation.z=(Math.random()-.5)*.06}}{let I=new et({color:12107442,roughness:.35,transparent:!0,opacity:.34,side:Te,envMapIntensity:1.4,depthWrite:!1});e.dyn.strips=[],[[-17.1,19.6],[-17.1,-7.2]].forEach(([j,G])=>{for(let K=0;K<7;K++){let ot=new X(new ye(.46,2.6),I);ot.position.set(j-1.55+K*.5,1.65,G),s.add(ot),e.dyn.strips.push({mesh:ot,phase:K*.9+G})}});let O=new et({color:14212562,roughness:.95,transparent:!0,opacity:.16});for(let j=0;j<6;j++){let G=y(.8+Math.random()*1.4,.5+Math.random()*.8,O,-18.82,.6+Math.random()*1.6,-4+j*4+Math.random()*2,Math.PI/2);G.rotation.z=Math.random()*3}}s.fog=new nr(854536,.016),e.dyn.fog=s.fog;let hn=new ji(3351580,.7);s.add(hn),e.dyn.ambient=hn;let he=new mr(2760728,854536,.5);return s.add(he),e}var td=10817302,zc=3998727,hx=16722466,Vc=class{constructor(t,e,n=new R(0,0,1)){this.id=t,this.pos=e.clone(),this.normal=n.clone(),this.cords=[],this.group=new se,this.group.position.copy(e),this._build()}_build(){let t=new et({color:13081146,metalness:.85,roughness:.35,emissive:2759685}),e=new X(new Kt(.055,.07,.03,10),t);e.rotation.x=Math.PI/2,this.group.add(e);let n=new Mn([new R(0,0,.015),new R(0,-.01,.09),new R(0,-.075,.115),new R(0,-.12,.07)]),i=new X(new An(n,10,.016,6),t);this.group.add(i),this.marker=new X(new ie(.035,8,8),new et({color:14200912,emissive:6703130,emissiveIntensity:1})),this.marker.position.set(0,-.05,.1),this.group.add(this.marker),this.group.quaternion.setFromUnitVectors(new R(0,0,1),this.normal),this.group.position.copy(this.pos)}setHighlight(t){this.highlighted=t,t||(this.marker.material.emissiveIntensity=1,this.marker.scale.setScalar(1))}pop(){this._pop=1}tick(t,e,n){if(this._pop>0){this._pop=Math.max(0,this._pop-t*3.2);let i=1+Math.sin(this._pop*Math.PI)*.9;this.marker.scale.setScalar(i),this.marker.material.emissiveIntensity=1+this._pop*7;return}if(this.highlighted){let i=5+Math.sin(e*9)*2.5;this.marker.material.emissiveIntensity=i,this.marker.scale.setScalar(1.7+Math.sin(e*9)*.25)}else n&&(this.marker.material.emissiveIntensity=2.2+Math.sin(e*4+this.pos.x)*1.4,this.marker.scale.setScalar(1.15+Math.sin(e*4+this.pos.x)*.12))}},ux=0,Gc=class{constructor(t,e,n,i={}){this.sys=t,this.id="cord"+ux++,this.a=e,this.b=n,this.slack=i.slack??.5,this.tag=i.tag||"",this.rideable=i.rideable!==!1,this.fixedEnd=i.fixedEnd||null,this.heldEnd=null,this.mat=new et({color:td,emissive:zc,emissiveIntensity:1.2,roughness:.75}),this.mesh=new X(new ke,this.mat),this.mesh.castShadow=!1,this.mesh.userData.cord=this;let r=new ie(.05,8,8),a=new et({color:13081146,metalness:.7,roughness:.4}),o=new _n(.035,.16,8),l=new et({color:9309202,roughness:.9});this.knotA=new se,this.knotA.add(new X(r,a));let c=new X(o,l);c.position.y=-.11,this.knotA.add(c),this.knotB=this.knotA.clone(),this.knotA.userData={cord:this,end:"a"},this.knotB.userData={cord:this,end:"b"},this.knotA.traverse(h=>h.userData={cord:this,end:"a"}),this.knotB.traverse(h=>h.userData={cord:this,end:"b"}),this.curve=null,this.length=1,this._wave=0,e&&e.cords.push(this),n&&n.cords.push(this),this.rebuild()}endPos(t){if(this.heldEnd===t)return this.sys.handPos;let e=t==="a"?this.a:this.b;return e?e.pos:this.sys.handPos}rebuild(){let t=this.endPos("a"),e=this.endPos("b"),n=t.distanceTo(e);this.length=n;let i=this._settle>0?1+Math.sin(this._settle*Math.PI*2.2)*.55*this._settle:1,r=Math.min(1.35,n*.055*(1+this.slack)*i),a=t.clone().lerp(e,.5);a.y-=r;let o=t.clone().lerp(e,.25);o.y-=r*.72;let l=t.clone().lerp(e,.75);l.y-=r*.72,this.curve=new Mn([t,o,a,l,e]);let c=this.mesh.geometry;this.mesh.geometry=new An(this.curve,16,.024,6),c&&c.dispose(),this.knotA.position.copy(t),this.knotB.position.copy(e)}pointAt(t){return this.curve.getPointAt(rn.clamp(t,0,1))}vibrate(){this._wave=1}update(t){if(this._wave>0){this._wave=Math.max(0,this._wave-t*1.4);let e=1+Math.sin(performance.now()*.04)*.012*this._wave;this.mesh.scale.set(1,e,1),this.mat.emissiveIntensity=1.2+this._wave*1.5}this._settle>0&&(this._settle=Math.max(0,this._settle-t*1.8),this.rebuild()),this.heldEnd&&this.rebuild()}detach(t){let e=t==="a"?this.a:this.b;if(e){let n=e.cords.indexOf(this);n>=0&&e.cords.splice(n,1)}t==="a"?this.a=null:this.b=null,this.heldEnd=t,this.rebuild()}attach(t,e){t==="a"?this.a=e:this.b=e,e.cords.push(this),this.heldEnd=null,this._settle=1,this.rebuild()}otherHook(t){return this.a===t?this.b:this.a}},$o=class{constructor(t){this.scene=t,this.trail=[],this.maxLen=46,this.segments=4,this.glow=0,this.mat=new et({color:td,emissive:zc,emissiveIntensity:1.4,roughness:.8}),this.mesh=new X(new ke,this.mat),this.mesh.frustumCulled=!1,t.add(this.mesh),this._rebuildTimer=0}record(t){let e=t.clone();if(e.y=.06,this.trail.length===0||this.trail[this.trail.length-1].distanceToSquared(e)>.55)for(this.trail.push(e);this.trail.length>this.maxLen;)this.trail.shift()}shorten(){for(this.maxLen=Math.max(10,this.maxLen-12);this.trail.length>this.maxLen;)this.trail.shift();this.segments=Math.max(0,this.segments-1);let t=1-this.segments*.12;this.mat.color.setRGB(.65*(1-t*.5),.05,.07)}update(t,e){if(this.glow=Math.max(0,this.glow-t*.7),this.mat.emissiveIntensity=1.4+this.glow*9,this.mat.emissive.setHex(this.glow>.15?hx:zc),this._rebuildTimer-=t,this._rebuildTimer>0||this.trail.length<2)return;this._rebuildTimer=.12;let n=this.trail.slice();n.push(e.clone());let i=new Mn(n),r=this.mesh.geometry;this.mesh.geometry=new An(i,Math.min(64,n.length*2),.016,5),r&&r.dispose()}},Jo=class{constructor(t,e){this.scene=t,this.audio=e,this.hooks=new Map,this.cords=[],this.held=null,this.handPos=new R,this.group=new se,t.add(this.group),this.onTopologyChange=null,this.onNoise=null}addHook(t,e,n,i,r=0,a=0,o=1,l=!1){let c=new Vc(t,new R(e,n,i),new R(r,a,o).normalize());return c.locked=l,l&&(c.marker.visible=!1),this.hooks.set(t,c),this.group.add(c.group),c}hook(t){return this.hooks.get(t)}addCord(t,e,n={}){let i=new Gc(this,this.hooks.get(t),this.hooks.get(e),n);return this.cords.push(i),this.group.add(i.mesh,i.knotA,i.knotB),i}removeCord(t){["a","b"].forEach(n=>{let i=n==="a"?t.a:t.b;if(i){let r=i.cords.indexOf(t);r>=0&&i.cords.splice(r,1)}});let e=this.cords.indexOf(t);e>=0&&this.cords.splice(e,1),this.group.remove(t.mesh,t.knotA,t.knotB),t.mesh.geometry.dispose()}clearAllCords(){[...this.cords].forEach(t=>this.removeCord(t))}grab(t,e){return this.held?!1:(t.detach(e),this.held=t,this.audio?.pluck(70+Math.random()*30,.35),t.vibrate(),this.onTopologyChange?.(t),!0)}hang(t){if(!this.held)return!1;let e=this.held;return e.attach(e.heldEnd===null?"a":e.heldEnd,t),this.held=null,this.audio?.pluck(120+Math.random()*60,.4),this.audio?.ratchet(),t.pop(),e.vibrate(),this.onTopologyChange?.(e),this.onNoise?.(.25,t.pos),!0}nearestTarget(t,e,n=2.7){let i=null,r=.62,a=new R;if(this.held)for(let o of this.hooks.values()){if(o.locked||o.cords.length>=3)continue;a.copy(o.pos).sub(t);let l=a.length();if(l>n)continue;a.normalize();let c=a.dot(e);c>r&&(r=c,i={type:"hook",hook:o,pos:o.pos,dist:l})}else for(let o of this.cords)if(o.tag!=="deco")for(let l of["a","b"]){if(o.fixedEnd===l)continue;let c=o.endPos(l);a.copy(c).sub(t);let h=a.length();if(h>n)continue;a.normalize();let d=a.dot(e);d>r+Math.min(.3,h*.06)&&(r=d,i={type:"cordEnd",cord:o,end:l,pos:c,dist:h})}return i}nearestHook(t,e=2.4){let n=null,i=e;for(let r of this.hooks.values()){if(r.locked)continue;let a=r.pos.distanceTo(t);a<i&&(i=a,n=r)}return n}update(t,e){this.handPos.copy(e),this._t=(this._t||0)+t;for(let n of this.cords)n.update(t);for(let n of this.hooks.values()){if(n.locked)continue;let i=!!this.held&&n.cords.length<3&&n.pos.distanceToSquared(e)<100;n.tick(t,this._t,i)}}};var Wc=s=>new et({map:$u(s),roughness:.6});function ed({suit:s=2630174,shirt:t=14210248,skin:e="waiter",hair:n=1314828,dress:i=!1,armMat:r=null}){let a=new se,o=new et({color:s,roughness:.82}),l=new et({color:t,roughness:.85}),c=new et({color:n,roughness:.9}),h=new et({color:1709588,roughness:.9});if(i){let m=[];for(let w=0;w<=8;w++){let v=w/8;m.push(new Ct(.3-v*.14+Math.sin(v*3.14)*.02,v*1.28))}let b=new X(new _i(m,10),o);b.castShadow=!0,a.add(b)}else{for(let S of[-1,1]){let E=new X(new Kt(.075,.085,.72,8),h);E.position.set(S*.1,.42,0),E.castShadow=!0,a.add(E);let C=new X(new Ce(.11,.07,.24),new et({color:854793,roughness:.4}));C.position.set(S*.1,.045,.04),a.add(C)}let m=[],b=[[.16,0],[.19,.12],[.2,.3],[.185,.44],[.21,.5],[.05,.56]];for(let[S,E]of b)m.push(new Ct(S,E));let w=new X(new _i(m,10),o);w.scale.set(1.25,1,.85),w.position.y=.78,w.castShadow=!0,a.add(w);let v=new X(new ye(.12,.26),l);v.position.set(0,1.14,.155),a.add(v)}let d=r||o,u={};for(let m of[-1,1]){let b=new se;b.position.set(m*.24,1.3,0);let w=new X(new Kt(.05,.045,.32,8),o);w.position.y=-.16,b.add(w);let v=new se;v.position.y=-.33;let S=new X(new Kt(.042,.038,.3,8),d);S.position.y=-.15,v.add(S);let E=new X(new ie(.05,8,8),Wc(e));E.position.y=-.32,v.add(E),b.add(v),b.rotation.z=m*.1,a.add(b),u[m<0?"left":"right"]={shoulder:b,elbow:v,hand:E}}let f=new X(new Kt(.045,.05,.09,8),Wc(e));f.position.y=1.4,a.add(f);let p=new se;p.position.y=1.56;let y=new X(new ie(.115,14,12),Wc(e));y.scale.set(.92,1.08,.98),y.rotation.y=Math.PI/2,y.castShadow=!0,p.add(y);let g=new X(new ie(.12,12,10,0,Math.PI*2,0,Math.PI*.55),c);return g.scale.set(.95,1.05,1),g.position.set(0,.015,-.015),p.add(g),a.add(p),{group:a,arms:u,head:p}}var Ko=class{constructor(t){let e=ed({suit:7213075,shirt:15261904,skin:"mc",hair:854536});this.group=e.group,this.arms=e.arms,this.head=e.head;let n=new et({color:13081146,metalness:.7,roughness:.35});for(let u of[-1,1]){let f=new X(new _n(.035,.07,6),n);f.rotation.z=u*Math.PI/2,f.position.set(u*.035,1.37,.13),this.group.add(f)}{let u=new se,f=new et({color:12587032,roughness:.65,emissive:2622986});for(let g=0;g<6;g++){let m=new X(new ie(.022,6,5),f),b=g/6*Math.PI*2;m.position.set(Math.cos(b)*.028,Math.sin(b)*.028,0),m.scale.z=.5,u.add(m)}let p=new X(new ie(.016,6,5),new et({color:14200912,roughness:.5}));p.position.z=.012,u.add(p);let y=new X(new _n(.014,.05,5),new et({color:3038260,roughness:.8}));y.position.set(-.04,-.03,-.005),y.rotation.z=1.1,u.add(y),u.position.set(.13,1.22,.15),this.group.add(u)}let i=new et({color:14998466,roughness:.22,envMapIntensity:1.6,transparent:!0,opacity:.97,emissive:788998}),r=new Tn(new ie(1,6,6),i,90),a=new He;Se(404);for(let u=0;u<90;u++){let f=(ht()-.5)*1.5,p=-.35-ht()*.45,y=.115,g=Math.sin(f)*Math.cos(p)*y*.92,m=Math.sin(p)*y*1.08,b=Math.cos(f)*Math.cos(p)*y*.98;a.position.set(g,m+.01,b+.005),a.scale.setScalar(.006+ht()*.012),a.updateMatrix(),r.setMatrixAt(u,a.matrix)}this.head.add(r),this.roe=r;let o=new se,l=new X(new Kt(.018,.023,.18,8),new et({color:1841688,roughness:.5}));o.add(l);let c=new X(new ie(.035,10,8),new et({color:7829367,metalness:.9,roughness:.35}));c.position.y=.11,o.add(c),o.position.set(0,-.32,.06),o.rotation.x=-.9,this.arms.right.elbow.add(o);let h=new et({color:1118481,roughness:.8}),d=new X(new An(new Mn([new R(.28,.95,.12),new R(.34,.5,.3),new R(.2,.05,.5),new R(-.3,.01,.7),new R(-.5,-.4,.75)]),16,.012,6),h);this.group.add(d),this.arms.right.shoulder.rotation.x=-.9,this.arms.right.elbow.rotation.x=-.9,this.arms.left.shoulder.rotation.z=-.15,this.group.position.set(0,.6,-18.2),this.group.scale.setScalar(1.06),t.add(this.group),this.gestureT=-1,this.sync=0,this.silenced=!1,this._t=0}gesture(){this.gestureT=0}update(t,e){this._t+=t;let n=1+Math.sin(this._t*1.1)*.008;if(this.group.scale.set(1.06,1.06*n,1.06),e.z<1&&Math.abs(e.x)<16&&!this.silenced){let r=e.x-this.group.position.x,a=e.z-this.group.position.z,o=Math.atan2(r,a);this.head.rotation.y+=(rn.clamp(o,-.9,.9)-this.head.rotation.y)*t*.4}if(this.gestureT>=0){this.gestureT+=t;let r=Math.min(1,this.gestureT/.8),a=Math.sin(r*Math.PI)*.9;this.arms.left.shoulder.rotation.x=-a,this.gestureT>2.2&&(this.gestureT=-1,this.arms.left.shoulder.rotation.x=0)}this.silenced&&(this.head.rotation.x+=(.5-this.head.rotation.x)*t,this.arms.right.shoulder.rotation.x+=(0-this.arms.right.shoulder.rotation.x)*t*2,this.arms.right.elbow.rotation.x+=(0-this.arms.right.elbow.rotation.x)*t*2)}},Fs=class{constructor(t,e){this.id=e;let n=Ku(),i=new et({...n}),r=ed({suit:1513500,shirt:14999764,skin:"waiter",hair:1051914,armMat:i});this.group=r.group,this.arms=r.arms,this.head=r.head;let a=new X(new Kt(.052,.055,.06,8),i);a.position.y=1.44,this.group.add(a);let o=new se,l=new X(new Kt(.24,.22,.02,14),new et({color:10133670,metalness:.9,roughness:.3}));if(o.add(l),e===0){let h=new X(new Kt(.13,.15,.09,12),new et({...Zo()}));h.position.y=.06,o.add(h)}else if(e===1){let h=new et({color:15262938,roughness:.18,envMapIntensity:1.2});for(let d=0;d<6;d++){let u=new X(new Kt(.085-d*.002,.06,.045,10),h);u.position.y=.035+d*.042,u.rotation.y=d*.4,o.add(u)}}else{let h=new X(new ie(.15,14,10,0,Math.PI*2,0,Math.PI*.5),new et({color:12104872,metalness:.95,roughness:.18,envMapIntensity:1.8}));h.position.y=.02,o.add(h);let d=new X(new ie(.02,8,6),new et({color:13081146,metalness:.8,roughness:.3}));d.position.y=.17,o.add(d)}o.position.set(-.22,1.08,.24),this.group.add(o);let c=new X(new ye(.34,.42),new et({color:986898,roughness:.9,side:Te}));c.position.set(0,.72,.19),c.rotation.x=.06,this.group.add(c),this.group.scale.setScalar(.98+e*.045),this.head.rotation.z=(e-1)*.06,this.arms.left.shoulder.rotation.x=-.85,this.arms.left.elbow.rotation.x=-.75,this.arms.right.shoulder.rotation.x=Math.PI-.2,this.arms.right.elbow.rotation.x=.25,this.group.rotation.x=.045,t.add(this.group),this.state="idle",this.cord=null,this.t=0,this.dir=1,this.speed=.92,this.standTimer=0,this.targetPos=new R,this.yaw=0,this._bob=Math.random()*6,this.visible=!1,this.group.visible=!1}setVisible(t){this.visible=t,this.group.visible=t}mountNearest(t,e){let n=null,i=1e9;for(let r of t.cords){if(!r.rideable||r.tag==="deco"||!r.a||!r.b)continue;let a=r.pointAt(.5).distanceTo(e);a<i&&(i=a,n=r)}if(n){this.cord=n,this.t=.5,this.dir=Math.random()>.5?1:-1,this.state="ride";let r=n.pointAt(this.t);this.group.position.set(r.x,0,r.z)}else this.state="stand",this.standTimer=3}onTopologyChange(t,e){this.cord===e&&this.state==="ride"&&(this.state="stand",this.standTimer=2.6,this.cord=null)}startChase(t=!1){if(!(this.state==="escorting"||this.state==="chase")){if(t||this.state==="alert"){this.state="chase";return}this.state="alert",this.alertTimer=.9}}stopChase(t){(this.state==="chase"||this.state==="alert")&&(this.state="stand",this.standTimer=1.2)}update(t,e,n,i,r){if(!this.visible)return;this._bob+=t;let a=this.group,o=!1,l=new R;if(this.state==="alert"){this.alertTimer-=t;let h=n.x-a.position.x,d=n.z-a.position.z,f=Math.atan2(h,d)-this.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;this.head.rotation.y+=(rn.clamp(f,-1.2,1.2)-this.head.rotation.y)*Math.min(1,t*14),this._alertSting||(this._alertSting=!0,r?.sting(.3)),this.alertTimer<=0&&(this.state="chase",this._alertSting=!1)}else this.head.rotation.y!==0&&this.state!=="chase"&&(this.head.rotation.y+=(0-this.head.rotation.y)*t*3);if(this.state==="ride"&&this.cord)if(!e.cords.includes(this.cord)||!this.cord.a||!this.cord.b)this.state="stand",this.standTimer=2.6,this.cord=null;else{let h=Math.max(.5,this.cord.length);if(this.t+=this.speed/h*this.dir*t,this.t>=1||this.t<=0){let u=this.t>=1?this.cord.b:this.cord.a;this.t=rn.clamp(this.t,0,1);let f=u.cords.filter(p=>p!==this.cord&&p.rideable&&p.a&&p.b&&p.tag!=="deco");if(f.length>0){let p=f[Math.random()*f.length|0];this.cord=p,this.t=p.a===u?0:1,this.dir=p.a===u?1:-1}else this.dir*=-1,Math.random()<.3&&r&&r.pluck(60,.12)}let d=this.cord.pointAt(this.t);if(l.set(d.x-a.position.x,0,d.z-a.position.z),a.position.set(d.x,0,d.z),o=!0,this.cord.mat.emissiveIntensity=1.6,a.position.distanceTo(n)<.85){i(this);return}}else if(this.state==="stand")this.standTimer-=t,this.standTimer<=0&&(this.state="walk");else if(this.state==="walk"){let h=null,d=1e9,u=null;for(let f of e.cords)if(!(!f.rideable||f.tag==="deco"||!f.a||!f.b))for(let p of["a","b"]){let y=f.endPos(p),g=y.distanceTo(a.position);g<d&&(d=g,h=f,u=y)}h?(l.set(u.x-a.position.x,0,u.z-a.position.z),l.length()<.4?(this.cord=h,this.t=h.endPos("a").distanceTo(a.position)<h.endPos("b").distanceTo(a.position)?0:1,this.dir=this.t===0?1:-1,this.state="ride"):(l.normalize().multiplyScalar(.75*t),a.position.add(l),o=!0)):(this.state="stand",this.standTimer=3)}else if(this.state==="chase"){if(l.set(n.x-a.position.x,0,n.z-a.position.z),l.length()<.95){i(this);return}l.normalize().multiplyScalar(1.5*t),a.position.add(l),o=!0}if(o&&l.lengthSq()>1e-8){let d=Math.atan2(l.x,l.z)-this.yaw;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;this.yaw+=d*Math.min(1,t*6),a.rotation.y=this.yaw}a.position.y=Math.sin(this._bob*2.6)*.018+.01;let c=this.state==="ride"?Math.PI-.2:-.1;this.arms.right.shoulder.rotation.x+=(c-this.arms.right.shoulder.rotation.x)*t*4}},Qo=class{constructor(t,e=44){this.count=e;let n=new _i([[.2,0],[.23,.35],[.2,.8],[.23,1.05],[.2,1.3],[.05,1.42]].map(([l,c])=>new Ct(l,c)),8),i=new ie(.105,10,8),r=new et({roughness:.88}),a=new et({color:14200980,roughness:.65});this.bodies=new Tn(n,r,e),this.heads=new Tn(i,a,e),this.bodies.castShadow=!0;let o=[6965842,4871272,9318456,6051400,3946052,10111554];this.data=[],Se(777);for(let l=0;l<e;l++)this.bodies.setColorAt(l,new Gt(o[ht()*o.length|0])),this.data.push({pos:new R,yaw:ht()*Math.PI*2,targetYaw:null,phase:ht()*6.28,scale:.94+ht()*.12});t.add(this.bodies,this.heads),this._dum=new He,this.mode="hidden"}layoutParty(t){Se(888);let e=0;for(let n of this.data){let[i,r]=t[e%t.length],a=ht()*Math.PI*2,o=1.9+ht()*.8;n.pos.set(i+Math.cos(a)*o,0,r+Math.sin(a)*o),n.pos.x=rn.clamp(n.pos.x,-14,14),n.pos.z=rn.clamp(n.pos.z,-16.5,-1),n.yaw=a+Math.PI/2+(ht()-.5),n.targetYaw=null,e++}this.mode="party"}layoutFinale(t){Se(999);let e=0;for(let n of this.data){let i=e%3,r=e/this.count*Math.PI*2+i*.35,a=4.2+i*1.9+ht()*.5;n.pos.set(t[0]+Math.cos(r)*a,0,t[1]+Math.sin(r)*a*.72),n.pos.x=rn.clamp(n.pos.x,-14,14),n.pos.z=rn.clamp(n.pos.z,-19,-1.2),n.yaw=Math.atan2(t[0]-n.pos.x,t[1]-n.pos.z),n.targetYaw=null,e++}this.mode="finale"}hide(){this.mode="hidden"}turnTo(t,e){for(let n of this.data)n.targetYaw=Math.atan2(t-n.pos.x,e-n.pos.z)}update(t,e){let n=this.mode!=="hidden";if(this.bodies.visible=this.heads.visible=n,!n)return;let i=this._dum;for(let r=0;r<this.count;r++){let a=this.data[r];if(a.targetYaw!==null){let c=a.targetYaw-a.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;a.yaw+=c*Math.min(1,t*1.2),Math.abs(c)<.02&&(a.targetYaw=null)}let o=.04+Math.sin(e*.7+a.phase)*.025,l=Math.sin(e*.5+a.phase*2)*.02;i.position.set(a.pos.x,o,a.pos.z),i.rotation.set(l,a.yaw,l*.7),i.scale.setScalar(a.scale),i.updateMatrix(),this.bodies.setMatrixAt(r,i.matrix),i.position.y=o+1.52*a.scale,i.updateMatrix(),this.heads.setMatrixAt(r,i.matrix)}this.bodies.instanceMatrix.needsUpdate=!0,this.heads.instanceMatrix.needsUpdate=!0,this.bodies.instanceColor&&(this.bodies.instanceColor.needsUpdate=!0)}},jo=class{constructor(t){this.group=new se;let e=new ne({color:11452356,transparent:!0,opacity:.32,blending:Cn,depthWrite:!1}),n=e.clone();n.opacity=.14;let i=new _i([[.26,0],[.2,.5],[.17,.95],[.2,1.2],[.17,1.35],[.04,1.45]].map(([u,f])=>new Ct(u,f)),10),r=new X(i,e);this.group.add(r);let a=new X(i,n);a.position.set(.04,0,-.02),this.group.add(a);let o=new X(new ie(.1,10,8),e);o.position.y=1.58,this.group.add(o);let l=new _n(.12,.5,8),c=new X(l,n);c.position.set(0,1.42,-.08),this.group.add(c);let h=new X(new ye(.26,.75),n);h.position.set(0,1.15,-.14),h.rotation.x=.08,this.group.add(h);let d=new X(new Kt(.012,.012,.2,5),new ne({color:9311256,transparent:!0,opacity:.6}));d.position.set(.24,.95,.05),d.rotation.z=.4,this.group.add(d),this.group.visible=!1,t.add(this.group),this.opacity=0,this.mats=[e,n],this.fixedYaw=null,this.dissolving=!1}appearAt(t,e,n=null){this.group.position.set(t,.05,e),this.group.visible=!0,this.opacity=0,this.dissolving=!1,this.fixedYaw=n}vanish(){this.dissolving=!0}update(t,e,n){if(!this.group.visible)return;if(this.dissolving){if(this.opacity=Math.max(0,this.opacity-t*1.6),this.opacity<=0){this.group.visible=!1;return}}else this.opacity=Math.min(1,this.opacity+t*.8),this.group.position.distanceTo(e)<2.6&&(this.dissolving=!0);let i=.8+Math.sin(n*9.7)*.1+Math.sin(n*23.3)*.06;this.mats[0].opacity=.42*this.opacity*i,this.mats[1].opacity=.2*this.opacity*i;let r=this.fixedYaw!==null?this.fixedYaw:Math.atan2(e.x-this.group.position.x,e.z-this.group.position.z);this.group.rotation.y+=(r-this.group.rotation.y)*t*2,this.group.position.y=.05+Math.sin(n*.9)*.03}},tl=class{constructor(t){this.scene=t,this.group=new se;let e=new et({color:10817302,roughness:.55,emissive:2425866}),n=new X(new _i([[.26,0],[.3,.2],[.24,.5],[.26,.75],[.2,.95],[.06,1.05]].map(([h,d])=>new Ct(h,d)),10),e);n.castShadow=!0,this.group.add(n);let i=new X(new _n(.2,.42,10,3,!0),new et({map:Ju(),roughness:.5,side:Te,emissive:3147274}));i.position.y=1.22,this.group.add(i);let r=new et({color:13081146,metalness:.85,roughness:.3,envMapIntensity:1.6}),a=new X(new wn(.14,.018,6,18),r);a.rotation.x=Math.PI/2,a.position.y=1.36,this.group.add(a),this.beads=[];for(let h=0;h<7;h++){let d=-.9+h*.3,u=new se;for(let f=0;f<4;f++){let p=new X(new ie(.011,6,5),r);p.position.y=-.035*(f+1),u.add(p)}u.position.set(Math.sin(d)*.14,1.36,Math.cos(d)*.14),this.group.add(u),this.beads.push({g:u,phase:h*1.1})}let o=new X(new _n(.05,.1,8),r);o.position.y=1.42,this.group.add(o);let l=new X(new ie(.05,8,8),new et({color:13148292,roughness:.7}));l.position.set(.1,.55,.2),this.group.add(l);let c=l.clone();c.position.x=-.1,this.group.add(c),this.group.visible=!1,t.add(this.group),this._t=0}show(t,e,n){if(this.group.position.set(t,.42,e),this.group.rotation.y=n,this.group.visible=!0,!this._knot){this._knot=new se;let i=new et({color:10817302,emissive:3998727,emissiveIntensity:1.2,roughness:.75}),r=new R(2.1,.1,-13.5),a=new R(.4,.08,-13.6),o=new X(new An(new Mn([new R(t,.5,e),new R(t+.4,.06,e+.3),a,new R(1.4,.05,-13.4),r]),20,.018,5),i);this._knot.add(o);let l=new X(new ie(.07,8,8),i);l.position.copy(a),this._knot.add(l),this.scene.add(this._knot)}}update(t){if(!this.group.visible)return;this._t+=t;let e=1+Math.sin(this._t*.8)*.01;this.group.scale.set(1,e,1);for(let n of this.beads)n.g.rotation.x=Math.sin(this._t*7.3+n.phase)*.06,n.g.rotation.z=Math.cos(this._t*8.1+n.phase)*.05}};var el=class{constructor(){this.ctx=null,this.master=null,this.ambientBus=null,this.layers={},this.started=!1,this._noiseBuf=null}init(){if(this.started)return;let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.85,this.verb=this.ctx.createGain(),this.verb.gain.value=.22;let e=this.ctx.createDelay(1);e.delayTime.value=.13;let n=this.ctx.createDelay(1);n.delayTime.value=.211;let i=this.ctx.createGain();i.gain.value=.32;let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=2400,this.verb.connect(e),e.connect(n),n.connect(i),i.connect(r),r.connect(e),n.connect(this.master),this.master.connect(this.ctx.destination),this.ambientBus=this.ctx.createGain(),this.ambientBus.gain.value=1,this.ambientBus.connect(this.master),this._noiseBuf=this._makeNoise(),this.started=!0,this._buildAmbience()}_makeNoise(){let t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0),i=0;for(let r=0;r<t;r++){let a=Math.random()*2-1;i=(i+.02*a)/1.02,n[r]=i*3.5}return e}_noiseSrc(t,e,n,i,r){let a=this.ctx.createBufferSource();a.buffer=this._noiseBuf,a.loop=!0,a.playbackRate.value=.7+Math.random()*.5;let o=this.ctx.createBiquadFilter();o.type=e,o.frequency.value=n,o.Q.value=i;let l=this.ctx.createGain();return l.gain.value=r,a.connect(o),o.connect(l),l.connect(t),a.start(),{src:a,f:o,g:l}}_buildAmbience(){let t=this.ctx;this.layers.roomtone=this._noiseSrc(this.ambientBus,"lowpass",320,.5,.05);let e=t.createOscillator();e.type="sawtooth",e.frequency.value=100;let n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=200,n.Q.value=6;let i=t.createGain();i.gain.value=.006,e.connect(n),n.connect(i),i.connect(this.ambientBus),e.start(),this.layers.hum={g:i};let r=this._noiseSrc(this.ambientBus,"bandpass",480,1.2,0);this.layers.murmur=r,this._murmurLFO(r);let a=t.createOscillator();a.type="sine",a.frequency.value=31;let o=t.createGain();o.gain.value=0,a.connect(o),o.connect(this.master),a.start();let l=this._noiseSrc(this.master,"lowpass",90,.7,0);this.layers.sea={g:o,n:l.g};let c=this._noiseSrc(this.ambientBus,"bandpass",900,.8,0);this.layers.water=c;let h=t.createStereoPanner();h.connect(this.master);let d=this._noiseSrc(h,"bandpass",2600,3.5,0),u=t.createOscillator();u.type="sine",u.frequency.value=52;let f=t.createOscillator();f.frequency.value=4.2;let p=t.createGain();p.gain.value=.5;let y=t.createGain();y.gain.value=0,f.connect(p),p.connect(y.gain),u.connect(y),y.connect(h),u.start(),f.start(),this.threatNodes={pan:h,shim:d.g,pulse:y};let g=t.createStereoPanner();g.connect(this.master);let m=t.createOscillator();m.type="sawtooth",m.frequency.value=82;let b=t.createBiquadFilter();b.type="bandpass",b.frequency.value=164,b.Q.value=9;let w=t.createOscillator();w.frequency.value=6.3;let v=t.createGain();v.gain.value=.5;let S=t.createGain();S.gain.value=0,w.connect(v),v.connect(S.gain),m.connect(b),b.connect(S),S.connect(g),m.start(),w.start(),this.cordHumNodes={pan:g,g:S}}setThreat(t,e=0){if(!this.started||!this.threatNodes)return;let n=this.ctx.currentTime;this.threatNodes.shim.gain.setTargetAtTime(t*.05,n,.18),this.threatNodes.pulse.gain.setTargetAtTime(t*.16,n,.18),this.threatNodes.pan.pan.setTargetAtTime(e,n,.12)}setCordHum(t,e=0){if(!this.started||!this.cordHumNodes)return;let n=this.ctx.currentTime;this.cordHumNodes.g.gain.setTargetAtTime(t*.045,n,.25),this.cordHumNodes.pan.pan.setTargetAtTime(e,n,.15)}_murmurLFO(t){let e=this.ctx,n=()=>{if(!this.started)return;let i=e.currentTime;t.f.frequency.setTargetAtTime(300+Math.random()*700,i,.25),setTimeout(n,300+Math.random()*700)};n()}setLayer(t,e,n=1.5){if(!this.started)return;let i=this.layers[t];if(!i)return;let r=i.g?i.g.gain:null;r&&r.setTargetAtTime(e,this.ctx.currentTime,n),t==="sea"&&i.n&&i.n.gain.setTargetAtTime(e*1.6,this.ctx.currentTime,n)}hush(t=3){if(!this.started)return;let e=this.ctx.currentTime;this.ambientBus.gain.cancelScheduledValues(e),this.ambientBus.gain.setTargetAtTime(.04,e,t*.33)}unhush(t=0){if(!this.started)return;let e=this.ctx.currentTime+t;this.ambientBus.gain.setTargetAtTime(1,e,2.2)}paChime(){if(!this.started)return;let t=this.ctx,e=t.currentTime;[523.25,659.25,783.99].forEach((n,i)=>{let r=t.createOscillator();r.type="sine",r.frequency.value=n;let a=t.createGain();a.gain.setValueAtTime(0,e+i*.42),a.gain.linearRampToValueAtTime(.16,e+i*.42+.03),a.gain.exponentialRampToValueAtTime(.001,e+i*.42+1.4),r.connect(a),a.connect(this.verb),a.connect(this.master),r.start(e+i*.42),r.stop(e+i*.42+1.5)})}broadcast(t=8,e=108,n=null){if(!this.started)return 0;let i=this.ctx,r=i.currentTime,a=n||t*.34+.6,o=i.createOscillator();o.type="sawtooth",o.frequency.value=e;let l=i.createOscillator();l.frequency.value=4.6;let c=i.createGain();c.gain.value=3.5,l.connect(c),c.connect(o.frequency);let h=i.createBiquadFilter();h.type="bandpass",h.Q.value=7;let d=i.createBiquadFilter();d.type="bandpass",d.Q.value=9;let u=i.createGain();u.gain.value=0;let f=i.createBiquadFilter();f.type="highpass",f.frequency.value=280;let p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2400,o.connect(h),o.connect(d),h.connect(u),d.connect(u),u.connect(f),f.connect(p),p.connect(this.master),p.connect(this.verb),o.start(r),l.start(r),o.stop(r+a+.3),l.stop(r+a+.3);let y=r+.15;for(let g=0;g<t;g++){let m=.16+Math.random()*.2;u.gain.setTargetAtTime(.14,y,.02),u.gain.setTargetAtTime(.004,y+m,.04),h.frequency.setValueAtTime(380+Math.random()*420,y),d.frequency.setValueAtTime(1100+Math.random()*900,y),o.frequency.setValueAtTime(e*(.92+Math.random()*.22),y),y+=m+.06+Math.random()*.1}return u.gain.setTargetAtTime(0,y,.1),a}pluck(t=82,e=.4,n=.996,i=0){if(!this.started)return;let r=this.ctx,a=r.sampleRate,o=Math.round(a/t),l=a*1.6,c=r.createBuffer(1,l,a),h=c.getChannelData(0),d=new Float32Array(o);for(let g=0;g<o;g++)d[g]=Math.random()*2-1;let u=0;for(let g=0;g<l;g++){let m=d[u],b=d[(u+1)%o],w=(m+b)*.5*n;d[u]=w,h[g]=m,u=(u+1)%o}let f=r.createBufferSource();f.buffer=c;let p=r.createGain();p.gain.value=e;let y=r.createBiquadFilter();if(y.type="lowpass",y.frequency.value=2600,f.connect(y),y.connect(p),i!==0){let g=r.createStereoPanner();g.pan.value=i,p.connect(g),g.connect(this.master)}else p.connect(this.master);p.connect(this.verb),f.start()}tension(t=1.6){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(60,n),i.frequency.exponentialRampToValueAtTime(340,n+t);let r=e.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.1,n+t*.7),r.gain.linearRampToValueAtTime(0,n+t);let a=e.createOscillator();a.type="triangle",a.frequency.setValueAtTime(61.5,n),a.frequency.exponentialRampToValueAtTime(345,n+t),i.connect(r),a.connect(r),r.connect(this.master),i.start(n),a.start(n),i.stop(n+t),a.stop(n+t)}footstep(t="terrazzo",e=!1){if(!this.started)return;let n=this.ctx,i=n.currentTime,r=n.createBufferSource();r.buffer=this._noiseBuf,r.playbackRate.value=2+Math.random();let a=n.createBiquadFilter(),o=n.createGain(),l=.07,c=e?.16:.07;if(t==="carpet"?(a.type="lowpass",a.frequency.value=400,c*=.5):t==="metal"?(a.type="bandpass",a.frequency.value=900,a.Q.value=3,l=.14,c*=1.3):t==="wet"?(a.type="bandpass",a.frequency.value=1600,a.Q.value=1,c*=.9):(a.type="bandpass",a.frequency.value=1200,a.Q.value=1.5),o.gain.setValueAtTime(c,i),o.gain.exponentialRampToValueAtTime(.001,i+l+Math.random()*.05),r.connect(a),a.connect(o),o.connect(this.master),r.start(i),r.stop(i+.3),t==="metal"){let h=n.createGain();h.gain.value=c*.6,a.connect(h),h.connect(this.verb)}}thud(t=.5){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(120,n),i.frequency.exponentialRampToValueAtTime(38,n+.28);let r=e.createGain();r.gain.setValueAtTime(t,n),r.gain.exponentialRampToValueAtTime(.001,n+.5),i.connect(r),r.connect(this.master),r.connect(this.verb),i.start(n),i.stop(n+.55);let a=e.createBufferSource();a.buffer=this._noiseBuf;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=500;let l=e.createGain();l.gain.setValueAtTime(t*.7,n),l.gain.exponentialRampToValueAtTime(.001,n+.3),a.connect(o),o.connect(l),l.connect(this.master),a.start(n),a.stop(n+.35)}glassCreak(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="sine";let i=900+Math.random()*1600;n.frequency.setValueAtTime(i,e),n.frequency.linearRampToValueAtTime(i*(.55+Math.random()*.2),e+.9);let r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.035,e+.15),r.gain.linearRampToValueAtTime(0,e+.9+Math.random()*.5),n.connect(r),r.connect(this.master),r.connect(this.verb),n.start(e),n.stop(e+1.6)}creakLow(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(55+Math.random()*30,e),n.frequency.linearRampToValueAtTime(35+Math.random()*15,e+1.4);let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=300;let r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.09,e+.4),r.gain.linearRampToValueAtTime(0,e+1.6),n.connect(i),i.connect(r),r.connect(this.master),r.connect(this.verb),n.start(e),n.stop(e+1.8)}motif(t=!1,e=.06){if(!this.started)return;let n=this.ctx,i=n.currentTime;(t?[523,554,622,740,622,554,523,370,523,494]:[523,587,659,784,659,587,523,392,523,523]).forEach((l,c)=>{let h=i+c*(t?.62:.34),d=n.createOscillator();d.type="sine",d.frequency.value=l;let u=n.createOscillator();u.type="triangle",u.frequency.value=l*2;let f=n.createGain();f.gain.setValueAtTime(0,h),f.gain.linearRampToValueAtTime(e,h+.01),f.gain.exponentialRampToValueAtTime(5e-4,h+(t?1.6:.9)),d.connect(f),u.connect(f),f.connect(this.master),f.connect(this.verb),d.start(h),u.start(h),d.stop(h+2),u.stop(h+2)})}heartbeat(){if(!this.started)return;let t=this.ctx,e=t.currentTime;[0,.18].forEach((n,i)=>{let r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(i?48:60,e+n);let a=t.createGain();a.gain.setValueAtTime(.22-i*.08,e+n),a.gain.exponentialRampToValueAtTime(.001,e+n+.16),r.connect(a),a.connect(this.master),r.start(e+n),r.stop(e+n+.2)})}sting(t=.4){if(!this.started)return;let e=this.ctx,n=e.currentTime;[178,183.5,356].forEach((o,l)=>{let c=e.createOscillator();c.type="sawtooth",c.frequency.value=o,c.frequency.linearRampToValueAtTime(o*1.06,n+1.1);let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=2200;let d=e.createGain();d.gain.setValueAtTime(0,n),d.gain.linearRampToValueAtTime(t*(l===2?.12:.2),n+.02),d.gain.exponentialRampToValueAtTime(.001,n+1.4),c.connect(h),h.connect(d),d.connect(this.master),d.connect(this.verb),c.start(n),c.stop(n+1.6)});let i=e.createBufferSource();i.buffer=this._noiseBuf,i.playbackRate.value=1.6;let r=e.createBiquadFilter();r.type="highpass",r.frequency.value=900;let a=e.createGain();a.gain.setValueAtTime(t*.5,n),a.gain.exponentialRampToValueAtTime(.001,n+.3),i.connect(r),r.connect(a),a.connect(this.master),i.start(n),i.stop(n+.35)}boom(t=.8){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(66,n),i.frequency.exponentialRampToValueAtTime(24,n+1.4);let r=e.createGain();r.gain.setValueAtTime(t,n),r.gain.exponentialRampToValueAtTime(.001,n+2.2),i.connect(r),r.connect(this.master),r.connect(this.verb),i.start(n),i.stop(n+2.4);let a=e.createBufferSource();a.buffer=this._noiseBuf,a.playbackRate.value=.5;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=260;let l=e.createGain();l.gain.setValueAtTime(t*.9,n),l.gain.exponentialRampToValueAtTime(.001,n+1.1),a.connect(o),o.connect(l),l.connect(this.master),l.connect(this.verb),a.start(n),a.stop(n+1.3)}whoosh(t=.2){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this._noiseBuf,i.playbackRate.setValueAtTime(.8,n),i.playbackRate.linearRampToValueAtTime(2.4,n+.5);let r=e.createBiquadFilter();r.type="bandpass",r.Q.value=1.4,r.frequency.setValueAtTime(300,n),r.frequency.exponentialRampToValueAtTime(1600,n+.5);let a=e.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(t,n+.22),a.gain.linearRampToValueAtTime(0,n+.6),i.connect(r),r.connect(a),a.connect(this.master),i.start(n),i.stop(n+.7)}ratchet(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this._noiseBuf,n.playbackRate.value=3.2;let i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=1900,i.Q.value=5;let r=t.createGain();r.gain.setValueAtTime(.09,e),r.gain.exponentialRampToValueAtTime(.001,e+.05),n.connect(i),i.connect(r),r.connect(this.master),n.start(e),n.stop(e+.08);let a=t.createOscillator();a.type="square",a.frequency.value=480;let o=t.createGain();o.gain.setValueAtTime(.02,e),o.gain.exponentialRampToValueAtTime(.001,e+.04),a.connect(o),o.connect(this.master),a.start(e),a.stop(e+.05)}drip(t=0){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine";let r=1400+Math.random()*900;i.frequency.setValueAtTime(r,n),i.frequency.exponentialRampToValueAtTime(r*.45,n+.09);let a=e.createGain();a.gain.setValueAtTime(.055,n),a.gain.exponentialRampToValueAtTime(.001,n+.14);let o=e.createStereoPanner();o.pan.value=t,i.connect(a),a.connect(o),o.connect(this.master),a.connect(this.verb),i.start(n),i.stop(n+.2)}bulbPop(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this._noiseBuf,n.playbackRate.value=2.8;let i=t.createBiquadFilter();i.type="highpass",i.frequency.value=2400;let r=t.createGain();r.gain.setValueAtTime(.5,e),r.gain.exponentialRampToValueAtTime(.001,e+.16),n.connect(i),i.connect(r),r.connect(this.master),r.connect(this.verb),n.start(e),n.stop(e+.2);for(let a=0;a<5;a++){let o=.06+a*.05+Math.random()*.04,l=t.createOscillator();l.type="sine",l.frequency.value=3800+Math.random()*2600;let c=t.createGain();c.gain.setValueAtTime(.028,e+o),c.gain.exponentialRampToValueAtTime(.001,e+o+.07),l.connect(c),c.connect(this.master),l.start(e+o),l.stop(e+o+.1)}}snip(){if(!this.started)return;this.pluck(660,.5,.992),this.pluck(49,.6,.999);let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this._noiseBuf,n.playbackRate.value=3;let i=t.createBiquadFilter();i.type="highpass",i.frequency.value=3e3;let r=t.createGain();r.gain.setValueAtTime(.3,e),r.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(i),i.connect(r),r.connect(this.master),n.start(e),n.stop(e+.15)}};var nl=class{constructor(t,e){this.camera=t,this.dom=e,this.pos=new R(0,0,-3),this.yaw=Math.PI,this.pitch=0,this.vel=new R,this.keys={},this.locked=!1,this.enabled=!1,this.seated=!1,this.radius=.32,this.eyeHeight=1.62,this.bobT=0,this.stepDist=0,this.onStep=null,this.holdE=0,this.eDown=!1,this.ePressed=!1,this.kickV=0,this.kickRoll=0,window.addEventListener("keydown",n=>{this.keys[n.code]=!0,n.code==="KeyE"&&!this.eDown&&(this.eDown=!0,this.ePressed=!0)}),window.addEventListener("keyup",n=>{this.keys[n.code]=!1,n.code==="KeyE"&&(this.eDown=!1,this.holdE=0)}),document.addEventListener("mousemove",n=>{!this.locked||!this.enabled||(this.yaw-=n.movementX*.0021,this.pitch-=n.movementY*.0021,this.pitch=rn.clamp(this.pitch,-1.35,1.35))}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.dom})}lock(){this.dom.requestPointerLock?.()}get forward(){return new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}get lookDir(){let t=new R;return this.camera.getWorldDirection(t),t}teleport(t,e,n=null){this.pos.set(t,0,e),this.vel.set(0,0,0),n!==null&&(this.yaw=n)}kick(t,e=0){this.kickV=t,this.kickRoll=e}update(t,e,n){if(this.ePressedThisFrame=this.ePressed,this.ePressed=!1,this.eDown?this.holdE+=t:this.holdE=0,!this.enabled||this.seated){this._applyCamera(t,!0);return}let i=this.keys.ShiftLeft||this.keys.ShiftRight,r=i?4.6:2.9,a=this.forward,o=new R(-a.z,0,a.x),l=new R;(this.keys.KeyW||this.keys.ArrowUp)&&l.add(a),(this.keys.KeyS||this.keys.ArrowDown)&&l.sub(a),(this.keys.KeyA||this.keys.ArrowLeft)&&l.sub(o),(this.keys.KeyD||this.keys.ArrowRight)&&l.add(o),l.lengthSq()>0&&l.normalize().multiplyScalar(r),this.vel.lerp(l,Math.min(1,t*10));let c=this.vel.clone().multiplyScalar(t);this.pos.x+=c.x,this._resolve(e,"x"),this.pos.z+=c.z,this._resolve(e,"z");let h=Math.hypot(c.x,c.z);this.stepDist+=h;let d=i?2.2:1.7;this.stepDist>d&&h>.001&&(this.stepDist=0,this.onStep?.(n(this.pos),i)),h>.005&&(this.bobT+=t*(i?11:7.5)),this._applyCamera(t,!1)}_resolve(t,e){for(let n of t){if(n.disabled)continue;let i=Math.max(n.minX,Math.min(this.pos.x,n.maxX)),r=Math.max(n.minZ,Math.min(this.pos.z,n.maxZ)),a=this.pos.x-i,o=this.pos.z-r,l=a*a+o*o;if(l<this.radius*this.radius){let c=Math.sqrt(Math.max(l,1e-6)),h=(this.radius-c)/c;e==="x"?this.pos.x+=a*h:this.pos.z+=o*h,l<1e-6&&(e==="x"?this.pos.x=this.pos.x<(n.minX+n.maxX)/2?n.minX-this.radius:n.maxX+this.radius:this.pos.z=this.pos.z<(n.minZ+n.maxZ)/2?n.minZ-this.radius:n.maxZ+this.radius)}}}_applyCamera(t,e){let n=e?0:Math.sin(this.bobT)*.035,i=e?0:Math.cos(this.bobT*.5)*.02;this.kickV*=Math.max(0,1-t*7),this.kickRoll*=Math.max(0,1-t*5),this.camera.position.set(this.pos.x+i*Math.cos(this.yaw),this.pos.y+this.eyeHeight+n,this.pos.z+i*Math.sin(this.yaw)),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch+this.kickV,this.camera.rotation.z=this.kickRoll}handPos(){let t=this.lookDir;return new R(this.pos.x+t.x*.5,this.pos.y+this.eyeHeight-.35+t.y*.3,this.pos.z+t.z*.5)}};var Xc=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,dx=`
uniform sampler2D tScene;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tScene, vUv).rgb;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  float k = smoothstep(0.5, 1.05, l);
  gl_FragColor = vec4(c * k, 1.0);
}`,fx=`
uniform sampler2D tInput;
uniform vec2 uDir;
varying vec2 vUv;
void main() {
  vec3 acc = vec3(0.0);
  float w[5];
  w[0] = 0.227; w[1] = 0.194; w[2] = 0.121; w[3] = 0.054; w[4] = 0.016;
  acc += texture2D(tInput, vUv).rgb * w[0];
  for (int i = 1; i < 5; i++) {
    vec2 off = uDir * float(i) * 1.6;
    acc += texture2D(tInput, vUv + off).rgb * w[i];
    acc += texture2D(tInput, vUv - off).rgb * w[i];
  }
  gl_FragColor = vec4(acc, 1.0);
}`,px=`
uniform sampler2D tScene;
uniform sampler2D tBloomA;  // \u7A84\u6CDB\u5149\uFF08\u4EAE\u5FC3\uFF09
uniform sampler2D tBloomB;  // \u5BBD\u8F89\u5149\uFF08\u96FE\u611F\uFF09
uniform float uTime;
uniform float uRedPulse;   // \u70B9\u540D\u65F6\u7684\u7EA2\u8109\u51B2
uniform float uShock;      // \u4E8B\u4EF6\u51B2\u51FB\uFF08\u6536\u58F0/\u70B9\u706B\uFF09
uniform float uFlash;      // \u9707\u60CA\u8282\u62CD\u95EA\u767D
uniform float uLetterbox;  // \u7535\u5F71\u9ED1\u8FB9 0~1
uniform float uExposure;
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

// ACES \u8FD1\u4F3C\uFF08Narkowicz\uFF09
vec3 aces(vec3 x) {
  const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

void main() {
  vec2 uv = vUv;
  // \u8F7B\u8272\u5DEE\uFF08\u8FB9\u7F18\uFF0C\u51B2\u51FB\u65F6\u52A0\u5267\uFF09
  vec2 d = uv - 0.5;
  float r2 = dot(d, d);
  float ca = 0.0014 + uShock * 0.004;
  vec3 col;
  col.r = texture2D(tScene, uv + d * ca).r;
  col.g = texture2D(tScene, uv).g;
  col.b = texture2D(tScene, uv - d * ca).b;
  // \u53CC\u5C3A\u5EA6\u6CDB\u5149
  vec3 bloomA = texture2D(tBloomA, uv).rgb;
  vec3 bloomB = texture2D(tBloomB, uv).rgb;
  col += bloomA * 0.7 + bloomB * 0.55;
  // \u66DD\u5149 + ACES \u8C03\u8272
  col *= uExposure * (1.0 + uFlash * 1.6);
  col = aces(col);
  // \u6696\u9ED1\uFF08\u9634\u5F71\u5F80\u7425\u73C0\u504F\uFF0C\u7EDD\u4E0D\u504F\u84DD\uFF09
  col = pow(col, vec3(0.96, 1.0, 1.06));
  col += vec3(0.014, 0.009, 0.006);
  // \u9897\u7C92\uFF08\u6697\u90E8\u66F4\u91CD\u2014\u2014\u80F6\u7247\u7279\u6027\uFF09
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  float g = hash(uv * vec2(1920.0, 1080.0) + fract(uTime * 7.0));
  col += (g - 0.5) * mix(0.065, 0.02, lum);
  // \u6697\u89D2
  float vig = 1.0 - r2 * (1.1 + uShock * 0.8);
  col *= vig;
  // \u70B9\u540D\u7EA2\u8109\u51B2\uFF08\u753B\u9762\u56DB\u5468\u6E17\u7EA2\u2014\u2014\u8155\u7EF3\u7684\u989C\u8272\uFF09
  float edge = smoothstep(0.18, 0.5, r2);
  col = mix(col, vec3(0.42, 0.03, 0.04), edge * uRedPulse * 0.55);
  // \u95EA\u767D\uFF08\u9707\u60CA\u8282\u62CD\uFF09
  col = mix(col, vec3(0.9, 0.86, 0.8), clamp(uFlash, 0.0, 1.0) * 0.55);
  // \u7535\u5F71\u9ED1\u8FB9
  float bar = 0.085 * uLetterbox;
  if (uv.y < bar || uv.y > 1.0 - bar) col = vec3(0.0);
  gl_FragColor = vec4(col, 1.0);
}`,il=class{constructor(t,e,n){this.renderer=t,this.scene=new pi,this.cam=new Qi(-1,1,1,-1,0,1),this.quadGeo=new ye(2,2),this.resize(e,n,!0),this.brightMat=new qe({uniforms:{tScene:{value:null}},vertexShader:Xc,fragmentShader:dx}),this.blurMat=new qe({uniforms:{tInput:{value:null},uDir:{value:new Ct}},vertexShader:Xc,fragmentShader:fx}),this.compMat=new qe({uniforms:{tScene:{value:null},tBloomA:{value:null},tBloomB:{value:null},uTime:{value:0},uRedPulse:{value:0},uShock:{value:0},uFlash:{value:0},uLetterbox:{value:0},uExposure:{value:1.18}},vertexShader:Xc,fragmentShader:px}),this.quad=new X(this.quadGeo,this.compMat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.redPulse=0,this.shock=0,this.flash=0,this.letterbox=0,this.letterboxTarget=0,this.exposure=1.18}resize(t,e,n=!1){let i={minFilter:Oe,magFilter:Oe};n||(this.rtScene.dispose(),this.rtA.dispose(),this.rtB.dispose(),this.rtC.dispose(),this.rtD.dispose()),this.rtScene=new Xe(t,e,{...i,samples:2}),this.rtA=new Xe(t>>2,e>>2,i),this.rtB=new Xe(t>>2,e>>2,i),this.rtC=new Xe(t>>3,e>>3,i),this.rtD=new Xe(t>>3,e>>3,i),this.w=t,this.h=e}_blur(t,e,n,i,r){let a=this.renderer;this.quad.material=this.blurMat,this.blurMat.uniforms.tInput.value=t.texture,this.blurMat.uniforms.uDir.value.set(1/i,0),a.setRenderTarget(n),a.render(this.scene,this.cam),this.blurMat.uniforms.tInput.value=n.texture,this.blurMat.uniforms.uDir.value.set(0,1/r),a.setRenderTarget(e),a.render(this.scene,this.cam)}render(t,e,n,i){let r=this.renderer;this.redPulse=Math.max(0,this.redPulse-n*.8),this.shock=Math.max(0,this.shock-n*.5),this.flash=Math.max(0,this.flash-n*2.2),this.letterbox+=(this.letterboxTarget-this.letterbox)*Math.min(1,n*3),r.setRenderTarget(this.rtScene),r.render(t,e),this.quad.material=this.brightMat,this.brightMat.uniforms.tScene.value=this.rtScene.texture,r.setRenderTarget(this.rtA),r.render(this.scene,this.cam),this._blur(this.rtA,this.rtA,this.rtB,this.w>>2,this.h>>2),this.quad.material=this.blurMat,this.blurMat.uniforms.tInput.value=this.rtA.texture,this.blurMat.uniforms.uDir.value.set(1/(this.w>>3),0),r.setRenderTarget(this.rtC),r.render(this.scene,this.cam),this.blurMat.uniforms.tInput.value=this.rtC.texture,this.blurMat.uniforms.uDir.value.set(0,1/(this.h>>3)),r.setRenderTarget(this.rtD),r.render(this.scene,this.cam),this._blur(this.rtD,this.rtD,this.rtC,this.w>>3,this.h>>3),this.quad.material=this.compMat;let a=this.compMat.uniforms;a.tScene.value=this.rtScene.texture,a.tBloomA.value=this.rtA.texture,a.tBloomB.value=this.rtD.texture,a.uTime.value=i,a.uRedPulse.value=this.redPulse,a.uShock.value=this.shock,a.uFlash.value=this.flash,a.uLetterbox.value=this.letterbox,a.uExposure.value=this.exposure,r.setRenderTarget(null),r.render(this.scene,this.cam)}};var mx=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,gx=`
uniform sampler2D tDiffuse;
uniform float uTime;
uniform float uStatic;   // 0=\u6B63\u5E38\u9884\u73B0 1=\u7EAF\u96EA\u82B1\uFF08\u7A7A\u95F4\u5B8C\u6210\u6001\uFF09
uniform float uPower;    // 0=\u9ED1\u5C4F
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

void main() {
  // \u6876\u5F62\u7578\u53D8
  vec2 uv = vUv * 2.0 - 1.0;
  uv *= 1.0 + 0.08 * dot(uv, uv);
  uv = uv * 0.5 + 0.5;
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }
  // \u884C\u6EDA\u52A8\u6761
  float roll = fract(uTime * 0.11);
  float rollBar = smoothstep(0.0, 0.08, abs(uv.y - roll)) * 0.25 + 0.75;
  // \u8272\u504F\u79FB\uFF08\u62D6\u5F71\uFF09
  float ca = 0.0035;
  vec3 col;
  col.r = texture2D(tDiffuse, uv + vec2(ca, 0.0)).r;
  col.g = texture2D(tDiffuse, uv).g;
  col.b = texture2D(tDiffuse, uv - vec2(ca, 0.0)).b;
  // CRT \u84DD\u7EFF\u8367\u5149\u504F\u8272\uFF08\u7F8E\u672F\u9501\u5B9A\uFF1A\u552F\u4E00\u5141\u8BB8\u7684\u504F\u8272\uFF09
  col = col * vec3(0.72, 1.02, 0.95) + vec3(0.015, 0.05, 0.045);
  // \u9694\u884C\u626B\u63CF
  float scan = sin(uv.y * 240.0 * 3.14159) * 0.5 + 0.5;
  col *= 0.78 + scan * 0.3;
  // \u884C\u9891\u566A\u70B9
  float n = hash(vec2(floor(uv.y * 240.0), floor(uTime * 60.0)));
  col += (n - 0.5) * 0.10;
  // \u96EA\u82B1
  float snow = hash(uv * vec2(320.0, 240.0) + fract(uTime) * 100.0);
  col = mix(col, vec3(snow * 0.8 + 0.1), uStatic);
  // \u6697\u89D2
  float vig = 1.0 - dot(vUv - 0.5, vUv - 0.5) * 1.6;
  col *= vig * rollBar;
  col *= uPower;
  gl_FragColor = vec4(col, 1.0);
}`,sl=class{constructor(t,e,n,i){this.renderer=t,this.scene=e,this.screens=[],this.future=i,this.activeFuture=[],this.time=0,this._idx=0,this.previewBoost=new ji(10136251,4.5);for(let r of n){let a=r.kind==="preview"?new Xe(256,192,{minFilter:Oe,magFilter:Oe}):null,o=null,l=null;r.kind==="vcr"&&(l=document.createElement("canvas"),l.width=256,l.height=192,o=new xn(l));let c=new qe({uniforms:{tDiffuse:{value:a?a.texture:o},uTime:{value:0},uStatic:{value:0},uPower:{value:1}},vertexShader:mx,fragmentShader:gx});r.mesh.material=c;let h=r.kind==="preview"?new Je(52,256/192,.1,60):null;h&&(h.position.copy(r.camPos),h.lookAt(r.camLook)),this.screens.push({def:r,rt:a,mat:c,cam:h,vcrCanvas:l,vcrTex:o,static:!1,power:!0})}}setFutureActive(t){this.activeFuture=t}setStatic(t,e){let n=this.screens.find(i=>i.def.id===t);n&&(n.static=e)}setPower(t,e){let n=this.screens.find(i=>i.def.id===t);n&&(n.power=e)}_drawVCR(t){let e=t.vcrCanvas.getContext("2d"),n=this.time;e.fillStyle="#5a0e12",e.fillRect(0,0,256,192);let i=128+Math.sin(n*.4)*40,r=e.createRadialGradient(i,90,10,i,90,120);if(r.addColorStop(0,"rgba(255,190,120,0.5)"),r.addColorStop(1,"rgba(255,190,120,0)"),e.fillStyle=r,e.fillRect(0,0,256,192),e.fillStyle="#e7b64c",e.font="90px serif",e.textAlign="center",e.textBaseline="middle",e.fillText("\u56CD",128,92),e.font="18px sans-serif",e.fillText("\u65B0\u5A5A\u5FEB\u4E50 \u767E\u5E74\u597D\u5408",128,160),Math.sin(n*.7)>.965||n%11>10.6){e.fillStyle="#0c0e10",e.fillRect(0,0,256,192),e.strokeStyle="rgba(90,64,56,0.9)",e.lineWidth=8;for(let a=0;a<5;a++)e.beginPath(),e.arc(128,210,40+a*34,Math.PI*1.15,Math.PI*1.85),e.stroke();e.fillStyle="rgba(231,182,76,0.6)",e.font="90px serif",e.fillText("\u56CD",128,92)}t.vcrTex.needsUpdate=!0}update(t,e){this.time+=t;for(let o of this.screens)o.mat.uniforms.uTime.value=this.time,o.mat.uniforms.uStatic.value+=((o.static?1:0)-o.mat.uniforms.uStatic.value)*t*3,o.mat.uniforms.uPower.value+=((o.power?1:0)-o.mat.uniforms.uPower.value)*t*4;let n=this.screens.filter(o=>{let l=new R;return o.def.mesh.getWorldPosition(l),l.distanceTo(e)<16&&o.power});if(n.length===0)return;this._idx=(this._idx+1)%n.length;let i=n[this._idx];if(i.def.kind==="vcr"){this._drawVCR(i);return}if(i.static)return;let r=[];for(let o of this.activeFuture){let l=this.future[o];l&&!l.visible&&(l.visible=!0,r.push(l))}this.scene.add(this.previewBoost);let a=this.scene.fog;this.scene.fog=null,this.renderer.setRenderTarget(i.rt),this.renderer.render(this.scene,i.cam),this.renderer.setRenderTarget(null),this.scene.fog=a,this.scene.remove(this.previewBoost);for(let o of r)o.visible=!1;i.def.glow&&(i.def.glow.intensity=3+Math.sin(this.time*13.7)*.8+Math.random()*.5)}};var rl=class{constructor(){this.el={};for(let t of["subtitle","objective","prompt","card","fade","end","endTitle","endBody","endBtn","timerbar","timerfill","callHint","reticleWrap","cutring","endCard"])this.el[t]=document.getElementById(t);this.ringFg=this.el.cutring.querySelector(".fg"),this._subT=null,this._cardT=null,this._retState=""}subtitle(t,e=4){let n=this.el.subtitle;n.textContent=t,n.style.opacity=1,clearTimeout(this._subT),this._subT=setTimeout(()=>{n.style.opacity=0},e*1e3)}objective(t){let e=this.el.objective;e.innerHTML='<span class="obj-mark">\u25C6</span> '+t,e.style.opacity=1,e.classList.remove("obj-flash"),e.offsetWidth,e.classList.add("obj-flash")}prompt(t,e=null){let n=this.el.prompt;if(!t){n.style.opacity=0;return}n.innerHTML=(e?`<span class="key">${e}</span>`:"")+`<span>${t}</span>`,n.style.opacity=1}reticle(t){this._retState!==t&&(this._retState=t,this.el.reticleWrap.className=t?"ret-"+t:"")}cutRing(t){if(t<=0){this.el.cutring.style.opacity=0;return}this.el.cutring.style.opacity=1,this.ringFg.style.strokeDashoffset=(188.5*(1-Math.min(1,t))).toFixed(1)}card(t,e="",n=3.4){let i=this.el.card;i.innerHTML=`<div class="card-title">${t}</div><div class="card-sub">${e}</div>`,i.style.opacity=1,clearTimeout(this._cardT),this._cardT=setTimeout(()=>{i.style.opacity=0},n*1e3)}fade(t,e=.6){let n=this.el.fade;n.style.transition=`opacity ${e}s ease`,n.style.opacity=t}callHint(t){this.el.callHint.style.opacity=t?1:0}timer(t,e=1){this.el.timerbar.style.opacity=t?1:0,this.el.timerfill.style.width=(e*100).toFixed(1)+"%"}end(t,e,n,i,r=!1){this.el.endTitle.textContent=t,this.el.endBody.innerHTML=e,this.el.endBtn.textContent=n,this.el.endCard.style.display=r?"block":"none",this.el.end.style.display="flex",requestAnimationFrame(()=>{this.el.end.style.opacity=1}),this.el.endBtn.onclick=i}hideEnd(){this.el.end.style.opacity=0,setTimeout(()=>{this.el.end.style.display="none"},600)}};var xx={\u5BB4\u4F1A\u5385:"\u4E1C\u5385",\u670D\u52A1\u8D70\u5ECA:"\u8D70\u5ECA",\u5927\u5802:"\u5927\u5802",\u6D77\u6D0B\u9986\u8FDE\u5ECA:"\u8FDE\u5ECA",\u5458\u5DE5\u8FDE\u5ECA:"\u540E\u5ECA"},al=class{constructor(t){this.g=t,this.beat=0,this.noise=0,this.noiseCooldown=0,this.call={active:!1,waiter:null},this.escorting=!1,this.grace=0,this.finaleTimer=-1,this.cutT=0,this.gateNoiseDone=!1,this.lightMult={hall:1,corridor:1,lobby:1,aqua:1,connector:1},this.hallColor=new Gt(16760952),this.ended=!1,this._pending=[]}after(t,e){this._pending.push({t,fn:e})}announce(t,e,n=null,i=""){let{audio:r,ui:a,mc:o,post:l}=this.g;r.hush(3),l.shock=.8,l.letterboxTarget=1,this.after(2.2,()=>r.paChime()),this.after(3.4,()=>{r.broadcast(e,104+this.beat*4),a.subtitle("\u3010\u5E7F\u64AD\u3011"+t,Math.max(3.5,e*.4)),n&&a.card(n,i);let c=1.4*(1-o.sync);this.after(3.4+c,()=>o.gesture())}),this.after(7.5,()=>{r.unhush(),l.letterboxTarget=this._lbBase||0})}addNoise(t,e=!1){this.beat<2||this.ended||(this.noise=Math.min(1.6,this.noise+t),!e&&this.noise>=1&&this.noiseCooldown<=0&&!this.call.active&&!this.escorting&&this.triggerCall(!1))}triggerCall(t=!1){if(this.call.active||this.ended)return;let{audio:e,ui:n,waiters:i,player:r}=this.g;this.call.active=!0,this.noise=0,this.noiseCooldown=26,e.tension(1.8);let a=this.g.regionNameAt(r.pos)||"\u5927\u5802",o=xx[a]||a;this.after(1.2,()=>{e.broadcast(9,96),n.subtitle(`\u3010\u5E7F\u64AD\u3011${o}\u7684\u8FD9\u4F4D\u6765\u5BBE\u2014\u2014\u8BF7\u5165\u5E2D\u3002`,4)}),n.callHint(!0),t&&n.objective("\u53F8\u4EEA\u70B9\u4E86\u4F60\u7684\u540D \u2014\u2014 \u8155\u7EF3\u4EAE\u4E86\u3002\u51B2\u5230\u4EFB\u610F<b>\u793C\u94A9</b>\u524D\u6309 E\uFF0C\u628A\u8155\u7EF3<b>\u5BC4\u6302</b>\u4E0A\u53BB\uFF01");let l=null,c=1e9;for(let h of i){if(!h.visible)continue;let d=h.group.position.distanceTo(r.pos);d<c&&(c=d,l=h)}l&&(l.startChase(),this.call.waiter=l)}resolveCall(){let{audio:t,ui:e,wrist:n}=this.g;this.call.active=!1,e.callHint(!1),n.shorten(),t.pluck(140,.5),t.pluck(52,.4),this.call.waiter&&(this.call.waiter.stopChase(this.g.sys),this.call.waiter=null),e.subtitle("\u8155\u7EF3\u5BC4\u6302\u4E0A\u4E86\u3002\u5B83\u53C8\u77ED\u4E86\u4E00\u622A\u3002",3.5),this.beat===3&&!this._doorCObjGiven&&(this._doorCObjGiven=!0,this.after(2,()=>e.objective("\u53BB\u897F\u5899\u7684<b>\u8FDE\u5ECA\u95E8</b>\u2014\u2014\u6458\u4E0B\u62E6\u95E8\u7EF3\uFF0C\u8FDB\u6D77\u6D0B\u9986\u8FDE\u5ECA\u3002")))}escort(t){if(this.escorting||this.grace>0||this.ended)return;let{ui:e,player:n,audio:i,post:r}=this.g;this.escorting=!0,this.call.active=!1,e.callHint(!1),e.reticle(""),this.call.waiter&&(this.call.waiter.stopChase(this.g.sys),this.call.waiter=null);let a=t.group.position;n.yaw=Math.atan2(n.pos.x-a.x,n.pos.z-a.z),n.pitch=-.06,n.kick(-.05,.03),i.thud(.25),i.sting(.22),r.shock=1,e.fade(1,.9),e.subtitle("\u300C\u60A8\u7684\u4F4D\u7F6E\u5728\u8FD9\u8FB9\u3002\u300D",4),this.after(1.6,()=>{if(!this.escorting||this.ended){e.fade(0,.8);return}n.teleport(-1.7,-10.2,0),n.pitch=.14,n.seated=!0,t.group.position.set(-2.6,0,-10.2),t.state="stand",t.standTimer=5,e.fade(0,.8),e.prompt("\u4F60\u88AB\u6309\u8FDB\u4E86\u4E00\u628A\u7A7A\u6905\u5B50 \u2014\u2014 <b>\u957F\u6309</b>\u7AD9\u8D77\u6765","E")})}standUp(){let{ui:t,player:e}=this.g;e.seated=!1,this.escorting=!1,this.grace=7,e.pitch=0,e.kick(.04),t.fade(0,.6),t.prompt(""),t.subtitle("\u8D81\u4ED6\u4EEC\u6CA1\u770B\u7740\u2014\u2014\u8D70\u3002",3)}_shockCorridor(){this._shock1=!0;let{audio:t,ui:e,post:n,L:i,waiters:r,sys:a}=this.g;t.setLayer("roomtone",0,.5);let o=this.lightMult.corridor;this.lightMult.corridor=.02;let l=i.dyn.tubes.filter(c=>c.light.position.z<0);l.sort((c,h)=>h.light.position.x-c.light.position.x),l.forEach((c,h)=>{this.after(.4+h*.5,()=>{c.light.intensity=0,c.mat.emissiveIntensity=0,t.ratchet(),t.thud(.12)})}),this.after(.4+l.length*.5,()=>{n.shock=1.2,t.boom(.35),e.subtitle("\u706F\u706D\u4E0B\u6765\u7684\u987A\u5E8F\u2014\u2014\u662F\u671D\u7740\u4F60\u6765\u7684\u3002",4);let c=r[0];c.setVisible(!0);let h=a.cords.filter(d=>d.rideable&&d.a&&d.b&&d.pointAt(.5).x>17&&d.pointAt(.5).x<31);if(h.length){c.cord=h[0],c.t=.95,c.dir=-1,c.state="ride";let d=h[0].pointAt(c.t);c.group.position.set(d.x,0,d.z)}t.sting(.5),t.pluck(60,.5,.998),a.cords.forEach(d=>{d.mat.emissiveIntensity=2.6})}),this.after(3.6+l.length*.5,()=>{this.beat<3&&(this.lightMult.corridor=o),i.dyn.tubes.forEach(c=>{c.mat.emissiveIntensity=2.6}),a.cords.forEach(c=>{c.mat.emissiveIntensity=1.2}),n.flash=.5,t.setLayer("roomtone",.05,2),e.subtitle("\u706F\u56DE\u6765\u7684\u65F6\u5019\uFF0C\u6258\u76D8\u4E0A\u7684\u83DC\u6362\u8FC7\u4E86\u3002",4.5)})}_shockGlass(){this._shock2=!0;let{audio:t,ui:e,post:n,L:i}=this.g,r=i.dyn.seaShade;this._shadeLunge={t:0,fromX:r.position.x,fromY:r.position.y},this.after(.5,()=>{t.boom(.95),n.shock=1.6,n.flash=.55,this.g.player.kick(-.09,.05),i.dyn.cracks.forEach(o=>{o.material.opacity=Math.max(o.material.opacity,.3)});let a=this.lightMult.aqua;this.lightMult.aqua=.08,e.subtitle("\u73BB\u7483\u95F7\u54CD\u4E86\u4E00\u58F0\u3002\u90A3\u4E2A\u5F71\u5B50\u6BD4\u6574\u9762\u5899\u8FD8\u957F\u3002",5);for(let o=0;o<3;o++)this.after(.6+o*.8,()=>t.glassCreak());this.after(3.2,()=>{this.lightMult.aqua=a}),this.addNoise(.3,!0)})}_shockBulb(){this._shock3=!0;let{audio:t,post:e,L:n,gazer:i,player:r}=this.g,a=null,o=1e9;for(let l of n.dyn.bulbs){let c=Math.abs(l.light.position.z-r.pos.z);c<o&&(o=c,a=l)}a&&(a.light.intensity=0,a.light.userData.base=0,a.group.visible=!1,t.bulbPop(),e.flash=.45,e.shock=1,r.kick(-.05,-.03)),this.after(.7,()=>{i.appearAt(-17.1,Math.max(r.pos.z-6,-5),null),t.sting(.4),this.g.ui.subtitle("\u706F\u788E\u7684\u90A3\u4E00\u4E0B\uFF0C\u5979\u5F80\u524D\u7AD9\u4E86\u4E00\u6B65\u3002\u6CA1\u6709\u811A\u6B65\u58F0\u3002",5)})}start(){let{ui:t}=this.g;t.fade(0,2.5),this.beat=1,t.card("\u8BAE\u7A0B\u4E00 \xB7 \u8FCE\u5BBE","\u5357\u65B9\u5927\u9152\u5E97 \xB7 2001\u5E74 \u79CB"),this.g.wrist.glow=1.4,this.after(2.5,()=>t.subtitle('\u5A5A\u5BB4\u5F00\u59CB\u524D\uFF0C\u5468\u7D6E\u62C9\u7740\u4F60\u7684\u624B\u8155\u7CFB\u4E86\u6839\u7EA2\u7EF3\uFF1A"\u5168\u4E4E\u4EBA\u3002\u522B\u6458\u3002"',6)),this.after(9,()=>t.subtitle("\u5168\u573A\u5BBE\u5BA2\u7684\u8155\u4E0A\u90FD\u6709\u4E00\u6839\u3002\u4ED6\u4EEC\u7684\u90FD\u5782\u5230\u5730\u4E0A\uFF0C\u63A5\u8FDB\u4E86\u540C\u4E00\u5F20\u7F51\u3002",6)),this.after(16,()=>t.objective("\u5230<b>\u4E3B\u684C</b>\u524D\u542C\u53F8\u4EEA\u62A5\u5E55\uFF08WASD \u79FB\u52A8 / \u9F20\u6807\u73AF\u987E\uFF09")),this.g.guests.layoutParty([[-6.5,-6],[6.5,-6],[-11,-9.5],[11,-9.5],[-6.5,-12.5],[6.5,-12.5],[-11,-3],[11,-3]]),this.g.audio.setLayer("murmur",.045,3),this.g.audio.setLayer("roomtone",.05,1),this.g.audio.motif(!1)}_beat1\u5230\u4E3B\u684C(){this.beat=1.5;let{ui:t,guests:e}=this.g;this.announce("\u5404\u4F4D\u6765\u5BBE\uFF0C\u6B22\u8FCE\u5149\u4E34\u5468\u5E9C\u559C\u5BB4\u3002\u8BF7\u5404\u4F4D\u6765\u5BBE\u2014\u2014\u5165\u5E2D\u3002",14,"\u8BAE\u7A0B\u4E8C \xB7 \u5165\u5E2D"),e.turnTo(0,-18),this.after(8,()=>t.subtitle('\u5468\u7D6E\u7684\u6BCD\u4EB2\u585E\u7ED9\u4F60\u4E00\u5F20\u5355\u5B50\uFF1A"\u4E56\uFF0C\u53BB\u540E\u5934\u5E2E\u62FF\u559C\u7CD6\u3002\u8D70\u5ECA\u76F4\u8D70\u5C31\u662F\u3002"',6.5)),this.after(15,()=>t.objective("\u4ECE<b>\u4E1C\u95E8</b>\u53BB\u670D\u52A1\u8D70\u5ECA \u2014\u2014 \u95E8\u88AB<b>\u62E6\u95E8\u7EF3</b>\u62F4\u7740\uFF1A\u5BF9\u51C6\u7EA2\u7EF3\u7AEF\u5934\u6309 E <b>\u6458</b>\u4E0B\uFF0C\u518D\u5BF9\u51C6\u65C1\u8FB9\u7684\u7A7A\u94A9\u6309 E <b>\u6302</b>\u4E0A"))}_beat2\u5F00\u5E2D(){this.beat=2;let{ui:t,waiters:e,sys:n,crt:i}=this.g;this.announce("\u5409\u65F6\u5DF2\u5230\uFF0C\u559C\u5BB4\u2014\u2014\u5F00\u5E2D\u3002",10,"\u8BAE\u7A0B\u4E09 \xB7 \u4E0A\u83DC"),e[0].setVisible(!0),e[0].mountNearest(n,new R(24,0,-6.2)),e[1].setVisible(!0),e[1].mountNearest(n,new R(38.2,0,6)),i.setFutureActive(["corridor"]),this.after(6,()=>t.objective("\u7A7F\u8FC7\u670D\u52A1\u8D70\u5ECA\u53BB<b>\u5927\u5802</b>\u3002\u4F8D\u5E94\u53EA\u6CBF\u7EA2\u7EF3\u6ED1\u2014\u2014\u7EF3\u7F51\u5C31\u662F\u4ED6\u4EEC\u7684\u5168\u90E8\u8DEF\u7EBF\u3002\u53EF\u4EE5<b>\u6539\u6302\u7EA2\u7EF3</b>\u6539\u5199\u5B83\u3002")),this.after(12,()=>t.subtitle("\u4F20\u83DC\u53E3\u7684\u7535\u89C6\u6BD4\u73B0\u5B9E\u65E9\u4E00\u6863\u2014\u2014\u5B83\u5728\u64AD\u8FD9\u6761\u8D70\u5ECA\u63A5\u4E0B\u6765\u7684\u7EF3\u7F51\u3002",6))}_beat3\u656C\u9152\u70B9\u706B(){this.beat=3;let{ui:t,audio:e,L:n,crt:i}=this.g;e.hush(4.5),this.g.post.shock=1.2,t.subtitle("\u5168\u697C\u7684\u58F0\u97F3\u9000\u6F6E\u5F0F\u5730\u6536\u4E86\u2014\u2014\u50CF\u6D77\u5728\u5438\u6C14\u3002",5),this.after(4.5,()=>{e.paChime(),this.after(1.2,()=>{e.broadcast(12,100),t.subtitle("\u3010\u5E7F\u64AD\u3011\u6709\u8BF7\u65B0\u4EBA\uFF0C\u5411\u5404\u4F4D\u6765\u5BBE\u2014\u2014\u656C\u9152\u3002",5),t.card("\u8BAE\u7A0B\u56DB \xB7 \u656C\u9152","\u8FD4\u6F6E")})}),this.after(7.5,()=>{e.motif(!0,.05),e.setLayer("sea",.6,4),e.setLayer("murmur",0,2),e.unhush(1),this.lightMult={hall:.4,corridor:.55,lobby:.42,aqua:.8,connector:.8},n.dyn.fog.density=.022,n.dyn.pits.forEach(r=>r.visible=!0),n.dyn.headlights.mat.opacity=.12,i.setFutureActive(["lobby"]),t.subtitle("\u706F\u6CA1\u706D\u3002\u53EF\u5927\u5802\u50CF\u4E00\u95F4\u88AB\u4F4F\u4E86\u51E0\u5341\u5E74\u7684\u6DF1\u6D77\u3002\u5730\u4E0A\u6709\u51E0\u5757\u4E4C\u4EAE\u7684\u51F9\u5751\u2014\u2014\u6709\u4EC0\u4E48\u4E1C\u897F\u4ECE\u5EFA\u7B51\u91CC\u8D77\u8EAB\u8D70\u4E86\u3002",8),this.g.post.shock=1}),this.after(15,()=>this.triggerCall(!0))}_beat4\u4E0A\u5934(){this.beat=4;let{ui:t,waiters:e,sys:n,crt:i}=this.g;this.announce("\u5409\u65F6\u5DF2\u5230\uFF0C\u8BF7\u5168\u798F\u4EBA\u2014\u2014\u4E0A\u524D\u3002",11,"\u8BAE\u7A0B\u4E94 \xB7 \u4E0A\u5934"),e[2].setVisible(!0),e[2].mountNearest(n,new R(15,0,22)),i.setFutureActive(["aqua"]),this.after(7,()=>t.objective("\u901A\u8FC7<b>\u68C0\u4FEE\u95F8</b>\uFF1A\u95F8\u95E8\u7684\u7EA2\u7EF3\u5361\u5728\u9519\u94A9\u4E0A\u3002\u6302\u5230\u9AD8\u5904<b>\u7EDE\u76D8\u94A9</b>\uFF1D\u6162\u800C\u5B89\u9759\uFF1B\u6302\u5230\u8FD1\u5904<b>\u5361\u6263\u94A9</b>\uFF1D\u5FEB\u4F46\u5DE8\u54CD\u2014\u2014\u73BB\u7483\u53D7\u4E0D\u4E86\u5DE8\u54CD\u3002")),this.after(14,()=>this.g.ui.subtitle("\u552E\u7968\u53F0\u7684\u7535\u89C6\u91CC\uFF0C\u8FD9\u9762\u73BB\u7483\u5DF2\u7ECF\u9677\u8FDB\u6765\u4E86\u3002\u5B83\u5728\u7B49\u4E00\u4E2A\u54CD\u3002",6))}_beat4b\u8FDE\u5ECA(){this.beat=4.5;let{ui:t,gazer:e}=this.g;t.objective("\u6CBF<b>\u5458\u5DE5\u8FDE\u5ECA</b>\u56DE\u5BB4\u4F1A\u5385\u3002"),e.appearAt(-17.1,8,null),t.subtitle("\u8FDE\u5ECA\u5C3D\u5934\u7AD9\u7740\u4E2A\u7A7F\u65E7\u5F0F\u793C\u670D\u7684\u5973\u4EBA\u3002\u5979\u8155\u4E0A\u7684\u7EA2\u7EF3\u2014\u2014\u662F\u526A\u65AD\u7684\u3002",6.5)}_beat5\u9001\u5165\u6D1E\u623F(){this.beat=5;let{ui:t,sys:e,L:n,crt:i,guests:r,bride:a,waiters:o,mc:l,audio:c,post:h}=this.g;l.sync=1,this._lbBase=.6,this.announce("\u9001\u2014\u2014\u5165\u2014\u2014\u6D1E\u2014\u2014\u623F\u2014\u2014",8,"\u8BAE\u7A0B\u516D \xB7 \u9001\u5165\u6D1E\u623F","\u559C\u4E8B\u4E0D\u8BB8\u9000\u5E2D"),this.after(1.2,()=>{c.thud(.7),this.g.player.kick(-.05)}),this.after(5,()=>{n.dyn.throat.visible=!0,this._garlandDrop=0,c.whoosh(.35),h.flash=.35,this.lightMult.hall=.45,this.hallColor.setHex(16734264),n.dyn.fog.density=.03,i.setStatic("T03",!0),i.setFutureActive([]),c.setLayer("sea",1,3),r.layoutFinale([0,-13.5]),a.show(-.9,-14.6,.6),e.clearAllCords(),e.addCord("hW_wall","hStageR",{slack:.3}),e.addCord("hE_wall","hStageL",{slack:.3}),e.addCord("hW_free","hMainA",{slack:.4}),e.addCord("hMainA","hMainB",{slack:.1,tag:"seatlock",rideable:!1}),this._candle||(this._candle=new Di(16751184,14,9,1.6),this._candle.position.set(0,1.8,-13.5),this.g.scene.add(this._candle));for(let d=0;d<3;d++)o[d].setVisible(!0),o[d].group.position.set(-6+d*6,0,-6),o[d].mountNearest(e,o[d].group.position);this.g.gazer.appearAt(-5.5,-16.2,Math.atan2(2.1- -5.5,-13.5- -16.2)),this.finaleTimer=110,t.objective("\u4E3B\u684C\u4E1C\u4FA7\u7684<b>\u4E0A\u5BBE\u5E2D</b>\u5C31\u662F\u7559\u7ED9\u4F60\u7684\u5E2D\u4F4D \u2014\u2014 \u6458\u4E0B\u6346\u5E2D\u7684\u7EA2\u7EF3\uFF0C\u5230\u5E2D\u524D<b>\u957F\u6309 E \u526A\u65AD\u4F60\u7684\u8155\u7EF3</b>\u3002\u56DE\u7738\u5BA2\u76EF\u7740\u7684\u65B9\u5411\u5C31\u662F\u90A3\u628A\u6905\u5B50\u3002"),this.g.post.shock=1.4})}_cut(){if(this.ended)return;this.ended=!0;let{ui:t,audio:e,mc:n,waiters:i,guests:r,L:a,crt:o,post:l,player:c}=this.g;this.finaleTimer=-1,this.call.active=!1,this.call.waiter=null,t.callHint(!1),t.timer(!1),t.prompt(""),t.cutRing(0),t.reticle(""),e.snip(),e.hush(.5),e.setLayer("sea",0,6),e.setThreat(0,0),l.flash=.8,l.shock=1.6,c.kick(-.1,.05),this._lbBase=1,l.letterboxTarget=1,n.silenced=!0,i.forEach(h=>{h.state="stand",h.standTimer=1e9}),r.turnTo(0,8),o.setStatic("T01",!0),o.setStatic("T02",!0),o.setStatic("T07",!0),this.g.wrist.mat.color.setHex(2761766),this.g.wrist.mat.emissive.setHex(0),t.subtitle("\u7EF3\u65AD\u7684\u90A3\u4E00\u58F0\u4E4B\u540E\u2014\u2014\u6574\u680B\u697C\u7B2C\u4E00\u6B21\u6CA1\u6709\u58F0\u97F3\u3002\u53F8\u4EEA\u5F20\u7740\u5C01\u6B7B\u7684\u53E3\uFF0C\u5E7F\u64AD\u91CC\u4EC0\u4E48\u4E5F\u6CA1\u6709\u3002",8),this.after(4,()=>{e.motif(!0,.035),t.subtitle("\u8EAB\u540E\uFF0C\u7EA2\u5E55\u540E\u9762\uFF0C\u6709\u5F88\u957F\u5F88\u957F\u7684\u4E1C\u897F\u6781\u6162\u5730\u677E\u5F00\u4E86\u8FD9\u680B\u697C\u3002",7),a.dyn.doorSOpen=!0,a.dyn.doorSCollider.disabled=!0,a.dyn.headlights.mat.opacity=.9,this._lbBase=.6,l.letterboxTarget=.6,t.objective("\u6563\u573A\u4E86 \u2014\u2014 \u4ECE<b>\u6B63\u95E8</b>\u51FA\u53BB\u3002")})}_goodEnd(){if(this._finished)return;this._finished=!0;let{ui:t,audio:e,L:n,post:i}=this.g;n.dyn.headlights.mat.opacity=1,i.flash=1.2,i.letterboxTarget=1,e.motif(!1,.045),t.fade(1,3),e.setLayer("roomtone",0,2),this.after(3.2,()=>{t.end("\u6563 \u573A",'\u6D77\u96FE\u91CC\u505C\u7740\u4E00\u6392\u8F66\uFF0C\u8F66\u706F\u5168\u4EAE\u7740\u3002<br>\u6CA1\u6709\u4EBA\u6309\u5587\u53ED\u3002\u6CA1\u6709\u4EBA\u50AC\u3002<br><br>\u4F60\u8155\u4E0A\u7684\u7EF3\u5934\u8FD8\u5728\uFF0C\u526A\u65AD\u7684\u3002<br>\u548C\u90A3\u4E2A\u5973\u4EBA\u7684\u4E00\u6837\u3002<br><br><div class="credits">\u300A\u8FD4\u6F6E FANCHAO\u300B\xB7\u300C\u559C\u5BB4\u300D\u5782\u76F4\u5207\u7247 v1.0<br>\u8BBE\u8BA1 / \u7A0B\u5E8F / \u7F8E\u672F / \u97F3\u9891 \u2014\u2014 \u8FD4\u6F6E\u5236\u4F5C\u7EC4<br>\u672C\u5305\u5168\u90E8\u8D44\u4EA7\uFF08\u7EB9\u7406\xB7\u6A21\u578B\xB7\u5149\u7167\xB7\u97F3\u9891\uFF09\u5747\u4E3A\u7A0B\u5E8F\u5316\u751F\u6210<br>2001 \xB7 \u8680\u6E7E \xB7 \u5357\u65B9\u5927\u9152\u5E97</div>',"\u518D\u6765\u4E00\u904D",()=>location.reload())})}_badEnd(){if(this.ended)return;this.ended=!0;let{ui:t,audio:e,L:n,post:i}=this.g;t.timer(!1),t.cutRing(0),t.fade(1,1.2),i.letterboxTarget=1,e.broadcast(6,92),e.sting(.5),n.dyn.cardYou.mat.map=n.dyn.cardYou.flip,n.dyn.cardYou.mat.needsUpdate=!0,this.after(1.6,()=>{t.end("\u60A8\u7684\u4F4D\u7F6E\u5728\u8FD9\u8FB9","\u8BAE\u7A0B\u8D70\u5B8C\u7684\u65F6\u5019\uFF0C\u4F60\u8FD8\u5750\u5728\u5E2D\u4E0A\u3002<br><br>\u4F8D\u5E94\u628A\u4F60\u9762\u524D\u7684\u684C\u724C\u8F7B\u8F7B\u7FFB\u4E86\u8FC7\u6765\u3002<br>\u724C\u9762\u4E0A\u5199\u7684\u4E0D\u662F\u4F60\u7684\u540D\u5B57\u3002<br>","\u91CD\u6765\u8FD9\u4E00\u6BB5",()=>this._retryFinale(),!0)})}_retryFinale(){let{ui:t,player:e}=this.g;t.hideEnd(),this.ended=!1,this._finished=!1,e.seated=!1,this.escorting=!1,e.teleport(-13.8,-6,-Math.PI/2),t.fade(0,1.5),this.beat=4.9,this.after(.8,()=>this._beat5\u9001\u5165\u6D1E\u623F())}update(t){let e=this.g,n=e.player.pos;for(let i=this._pending.length-1;i>=0;i--)if(this._pending[i].t-=t,this._pending[i].t<=0){let r=this._pending[i].fn;this._pending.splice(i,1),r()}if(this.noise=Math.max(0,this.noise-t*.1),this.noiseCooldown=Math.max(0,this.noiseCooldown-t),this.grace=Math.max(0,this.grace-t),this.beat===1&&n.distanceTo(new R(0,0,-11.5))<3.4?this._beat1\u5230\u4E3B\u684C():this.beat===1.5&&n.x>15.4?this._beat2\u5F00\u5E2D():this.beat===2&&n.z>14.5?this._beat3\u656C\u9152\u70B9\u706B():this.beat===3&&n.x<23.5&&n.z>19?this._beat4\u4E0A\u5934():this.beat===4&&n.x<2.5&&n.z>19?this._beat4b\u8FDE\u5ECA():this.beat===4.5&&n.x>-15&&n.z<0&&n.z>-20?this._beat5\u9001\u5165\u6D1E\u623F():this.ended&&this._doorOpen()&&n.z>5.5&&this._goodEnd(),this.beat===2&&!this._shock1&&n.x>25&&n.z<0&&this._shockCorridor(),this.beat>=4&&this.beat<5&&!this._shock2&&n.z>20.5&&n.x<16&&n.x>-10&&this._shockGlass(),this.beat===4.5&&!this._shock3&&n.x<-15&&n.z<12&&n.z>-4&&this._shockBulb(),this._shadeLunge){let i=this._shadeLunge,r=e.L.dyn.seaShade;if(i.t+=t,i.t<.55){let a=i.t/.55;r.position.x+=(n.x+2-r.position.x)*a*.4,r.position.z=26.2-a*1.5,r.position.y=i.fromY+(1.7-i.fromY)*a,r.scale.setScalar(1+a*.4)}else i.t<4?(r.position.z+=(26.2-r.position.z)*t*.7,r.position.y+=(3.2-r.position.y)*t*.5):(r.scale.setScalar(1),this._shadeLunge=null)}if(this._garlandDrop!==void 0&&this._garlandDrop<1){this._garlandDrop=Math.min(1,this._garlandDrop+t*.7);let i=this._garlandDrop,r=1.70158,o=1+(r+1)*Math.pow(i-1,3)+r*Math.pow(i-1,2);e.L.dyn.garlands.forEach((l,c)=>{l.position.y=(-1.4-c%2*.5)*o})}this.call.active&&(e.wrist.glow=1,e.post.redPulse=.5+Math.sin(performance.now()*.008)*.3,Math.floor(performance.now()/800)!==this._hb&&(this._hb=Math.floor(performance.now()/800),e.audio.heartbeat())),this.finaleTimer>0&&!this.ended&&(this.finaleTimer-=t,e.ui.timer(!0,this.finaleTimer/110),this.finaleTimer<30&&!this._warn30&&(this._warn30=!0,e.ui.subtitle("\u53F8\u4EEA\u7684\u624B\u52BF\u548C\u5E7F\u64AD\u5DF2\u7ECF\u5B8C\u5168\u540C\u6B65\u4E86\u3002\u5FEB\u3002",4)),this.finaleTimer<=0&&(this.finaleTimer=-1,this._badEnd()));for(let i of Object.keys(e.L.lights))for(let r of e.L.lights[i]){let a=(r.userData.base??r.intensity)*(this.lightMult[i]??1);r.intensity+=(a-r.intensity)*t*1.5,i==="hall"&&this.beat>=5&&r.color.lerp(this.hallColor,t*.8)}}_doorOpen(){return!!this.g.L.dyn.doorSOpen}};function _x(s,t=128,e=128){let n=document.createElement("canvas");n.width=t,n.height=e,s(n.getContext("2d"),t,e);let i=new xn(n);return i.wrapS=i.wrapT=Dn,i}var qc={};function nd(s="255,228,180"){if(qc[s])return qc[s];let t=_x((e,n,i)=>{e.fillStyle="#000",e.fillRect(0,0,n,i);let r=e.createLinearGradient(0,0,0,i);r.addColorStop(0,`rgba(${s},0.7)`),r.addColorStop(.35,`rgba(${s},0.3)`),r.addColorStop(1,`rgba(${s},0)`),e.fillStyle=r,e.fillRect(0,0,n,i)},64,256);return qc[s]=t,t}var ol=class{constructor(t){this.scene=t,this.cones=[],this.dust=[],this.caustics=[],this.time=0}addCone(t,e,n,i,r,a,o,l,c="255,228,180",h=null){let d=new Kt(i,r,a,14,1,!0),u=new ne({map:nd(c),transparent:!0,opacity:o,blending:Cn,depthWrite:!1,side:Te,fog:!1}),f=new X(d,u);return f.position.set(t,e-a/2,n),f.renderOrder=5,this.scene.add(f),this.cones.push({mesh:f,mat:u,base:o,group:l,light:h}),f}addShaft(t,e,n,i,r,a,o,l,c,h="210,235,225"){let d=new ne({map:nd(h),transparent:!0,opacity:l,blending:Cn,depthWrite:!1,side:Te,fog:!1}),u=new X(new ye(i,r),d);return u.position.set(t,e,n),u.rotation.y=a,u.rotation.z=o,u.renderOrder=5,this.scene.add(u),this.cones.push({mesh:u,mat:d,base:l,group:c,light:null}),u}addDust(t,e,n=.035,i=14207144,r=.5,a="hall"){let[o,l,c,h,d,u]=t,f=new Float32Array(e*3),p=new Float32Array(e);for(let b=0;b<e;b++)f[b*3]=o+Math.random()*(h-o),f[b*3+1]=l+Math.random()*(d-l),f[b*3+2]=c+Math.random()*(u-c),p[b]=Math.random()*6.28;let y=new ke;y.setAttribute("position",new an(f,3)),y.setAttribute("aPhase",new an(p,1));let g=new qe({uniforms:{uTime:{value:0},uSize:{value:n*500},uColor:{value:new Gt(i)},uOpacity:{value:r}},vertexShader:`
        uniform float uTime;
        uniform float uSize;
        attribute float aPhase;
        varying float vTw;
        void main() {
          vec3 p = position;
          p.x += sin(uTime * 0.13 + aPhase) * 0.55 + sin(uTime * 0.31 + aPhase * 2.0) * 0.2;
          p.y += sin(uTime * 0.09 + aPhase * 1.7) * 0.4;
          p.z += cos(uTime * 0.11 + aPhase) * 0.55;
          vTw = 0.55 + 0.45 * sin(uTime * (0.8 + fract(aPhase) * 1.6) + aPhase * 7.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = uSize / max(1.0, -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vTw;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.05, d) * uOpacity * vTw;
          gl_FragColor = vec4(uColor, a);
        }`,transparent:!0,depthWrite:!1,blending:Cn}),m=new lr(y,g);return m.renderOrder=6,m.frustumCulled=!1,this.scene.add(m),this.dust.push({points:m,mat:g,group:a,base:r}),m}_causticTex(){if(this._ct)return this._ct;let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,256),e.strokeStyle="rgba(150,255,235,0.55)",e.lineWidth=2.4;let n=[];for(let r=0;r<42;r++)n.push([Math.random()*256,Math.random()*256]);for(let[r,a]of n){e.beginPath();let o=5+(Math.random()*3|0);for(let l=0;l<=o;l++){let c=l/o*Math.PI*2,h=14+Math.random()*26,d=r+Math.cos(c)*h,u=a+Math.sin(c)*h;l===0?e.moveTo(d,u):e.quadraticCurveTo(r+Math.cos(c-.4)*h*1.35,a+Math.sin(c-.4)*h*1.35,d,u)}e.stroke()}e.filter="blur(2px)",e.drawImage(t,0,0),e.filter="none";let i=new xn(t);return i.wrapS=i.wrapT=di,this._ct=i,i}addCaustics(t,e,n,i,r,a,o,l=.1,c="aqua"){for(let h=0;h<2;h++){let d=this._causticTex().clone();d.needsUpdate=!0,d.repeat.set(i/6,r/6);let u=new ne({map:d,transparent:!0,opacity:l*(h?.6:1),blending:Cn,depthWrite:!1,color:5888200,fog:!1}),f=new X(new ye(i,r),u);f.position.set(t,e+h*.012,n),f.rotation.x=a,f.rotation.y=o,f.renderOrder=4,this.scene.add(f),this.caustics.push({mesh:f,mat:u,tex:d,dir:h?-1:1,base:l*(h?.6:1),group:c})}}update(t,e){this.time+=t;for(let n of this.cones){let r=e[n.group]??1;n.light&&(r*=rn.clamp(n.light.intensity/Math.max(.01,n.light.userData.base??n.light.intensity),0,1.4)),n.mat.opacity=n.base*r*(.94+Math.sin(this.time*1.7+n.mesh.position.x)*.06)}for(let n of this.dust)n.mat.uniforms.uTime.value=this.time,n.mat.uniforms.uOpacity.value=n.base*(.4+.6*(e[n.group]??1));for(let n of this.caustics){n.tex.offset.x+=t*.021*n.dir,n.tex.offset.y+=t*.013*n.dir;let i=1+Math.sin(this.time*.5*n.dir)*.06;n.mat.opacity=n.base*(e[n.group]??1)*(.8+Math.sin(this.time*1.1+n.dir)*.2)*i}}};var Kc=document.getElementById("c"),ii=new Vo({canvas:Kc,antialias:!1,powerPreference:"high-performance"});ii.setPixelRatio(Math.min(window.devicePixelRatio,1.5));ii.setSize(window.innerWidth,window.innerHeight);ii.shadowMap.enabled=!0;ii.shadowMap.type=Za;ii.outputColorSpace=Qe;ii.toneMapping=Pn;var Ve=new pi;Ve.background=new Gt(854536);var Ir=new Je(66,window.innerWidth/window.innerHeight,.05,140),ve=ju(Ve,ii);{let s=new X(new ye(40,24),new et({color:1841688,roughness:.95}));s.rotation.x=-Math.PI/2,s.position.set(0,-.01,12),Ve.add(s);let t=new X(new ye(70,20),new ne({color:329482,fog:!1}));t.position.set(0,6,19.6),t.rotation.y=Math.PI,Ve.add(t);let e=new X(new ye(34,9),new ne({color:12108990,transparent:!0,opacity:.3,depthWrite:!1}));e.position.set(0,3.2,16.5),e.rotation.y=Math.PI,Ve.add(e);let n=new X(new ye(26,5),new ne({color:9411732,transparent:!0,opacity:.2,depthWrite:!1}));n.position.set(2,1.6,13),n.rotation.y=Math.PI,Ve.add(n);for(let i=0;i<4;i++){let r=new X(new ye(2.4,1.6),ve.dyn.headlights.mat);r.position.set(-6+i*4+i%2,.9,13+i%2*1.5),r.rotation.y=Math.PI,Ve.add(r)}ve.colliders.push({minX:-7,minZ:0,maxX:-6.5,maxZ:12}),ve.colliders.push({minX:6.5,minZ:0,maxX:7,maxZ:12})}var en=new el,Fe=new rl,re=new nl(Ir,Kc);re.yaw=0;var Tt=new Jo(Ve,en);Tt.addHook("hE_doorL",14.72,1.5,-4,-1,0,0);Tt.addHook("hE_doorR",14.72,1.5,-8.2,-1,0,0);Tt.addHook("hE_free",14.72,1.6,-1.6,-1,0,0);Tt.addHook("hStageL",-6,2.3,-16.85,0,0,1);Tt.addHook("hStageR",6,2.3,-16.85,0,0,1);Tt.addHook("hW_wall",-14.72,1.6,-10,1,0,0);Tt.addHook("hE_wall",14.72,1.6,-10,-1,0,0);Tt.addHook("hW_free",-14.72,1.6,-2.5,1,0,0);Tt.addHook("hMainA",1.1,.95,-12.2,0,0,1);Tt.addHook("hMainB",3.2,.95,-14.6,1,0,0);Tt.addHook("hC1",17,2,-7.75,0,0,1);Tt.addHook("hC2",23,2,-4.65,0,0,-1);Tt.addHook("hC3",29,2,-7.75,0,0,1);Tt.addHook("hC4",35,2,-4.65,0,0,-1);Tt.addHook("hC5",39.7,2,-6.4,-1,0,0);Tt.addHook("hC6",36.7,2,2,1,0,0);Tt.addHook("hC7",39.7,2,8,-1,0,0);Tt.addHook("hC8",36.7,2,13.4,1,0,0);Tt.addHook("hAlcove",19.5,2,-7.75,0,0,1);Tt.addHook("hDesk",44.7,1.3,24,-1,0,0);Tt.addHook("hCol1",30.7,1.7,18,1,0,0);Tt.addHook("hCol2",41.3,1.7,26,-1,0,0);Tt.addHook("hWest1",24.35,1.6,19.8,1,0,0);Tt.addHook("hWest2",24.35,1.6,23.4,1,0,0);Tt.addHook("hLFree",28,1.7,29.6,0,0,-1);Tt.addHook("hGateTop",4,3.25,22,0,0,1,!0);Tt.addHook("hJam",7.5,1.5,20.42,0,0,1);Tt.addHook("hWinch",11,2.7,20.42,0,0,1);Tt.addHook("hSnap",5.6,1.1,23.5,0,0,-1);Tt.addHook("hAqP1",21,2,20.42,0,0,1);Tt.addHook("hAqP2",15,2,23.5,0,0,-1);Tt.addHook("hAqP3",9,2,20.42,0,0,1);{let s=new X(new wn(.12,.03,8,16),new et({color:13081146,metalness:.85,roughness:.35}));s.position.set(11,2.85,20.45),Ve.add(s);let t=new X(new ye(.9,.26),new et({map:Wn("\u7EDE \u76D8","#e8d8b0","#33403a",80),roughness:.9}));t.position.set(11,2.2,20.48),Ve.add(t)}Tt.addCord("hE_doorL","hE_doorR",{tag:"doorE",slack:.25,rideable:!1});Tt.addCord("hC1","hC2");Tt.addCord("hC2","hC3");Tt.addCord("hC3","hC4");Tt.addCord("hC4","hC5");Tt.addCord("hC5","hC6");Tt.addCord("hC6","hC7");Tt.addCord("hC7","hC8");Tt.addCord("hWest1","hWest2",{tag:"doorC",slack:.25,rideable:!1});Tt.addCord("hCol1","hCol2");Tt.addCord("hCol2","hDesk");Tt.addCord("hGateTop","hJam",{tag:"gate",slack:.15,rideable:!1,fixedEnd:"a"});Tt.addCord("hAqP1","hAqP2");Tt.addCord("hAqP2","hAqP3");var ld=[{tag:"doorE",a:"hE_doorL",b:"hE_doorR",col:{minX:14.4,minZ:-8.2,maxX:15.6,maxZ:-4,disabled:!1}},{tag:"doorC",a:"hWest1",b:"hWest2",col:{minX:23.9,minZ:19.8,maxX:24.9,maxZ:23.4,disabled:!1}}];ld.forEach(s=>ve.colliders.push(s.col));var ll=new $o(Ve);for(let s=0;s<=12;s++){let t=s/12;ll.trail.push(new R(2.1*(1-t),.06,-13.5+t*10.5))}var cd=new Ko(Ve),Lr=[new Fs(Ve,0),new Fs(Ve,1),new Fs(Ve,2)],hd=new Qo(Ve,44),ud=new jo(Ve),dd=new tl(Ve),Qc=new sl(ii,Ve,ve.screens,ve.future),Bs=new il(ii,window.innerWidth,window.innerHeight),vn=new ol(Ve);vn.addCone(0,5.2,-5,.75,3.4,5.2,.055,"hall");vn.addCone(0,5.2,-12,.75,3.4,5.2,.055,"hall");{let s=vn.addCone(0,0,0,.35,2.5,8.4,.06,"hall");s.position.set(0,4,-15.1);let t=new R(0,1.4-6.6,-18.2+12).normalize();s.quaternion.setFromUnitVectors(new R(0,-1,0),t)}vn.addCone(36,6.4,22,1.5,5.4,6.6,.05,"lobby");vn.addShaft(36,2.4,28.6,6.2,4.6,Math.PI,0,.045,"lobby","185,210,200");for(let s of ve.dyn.tubes){let t=s.light.position;vn.addCone(t.x,3.1,t.z,.45,1.35,3,.05,"corridor","208,238,218",s.light)}for(let s of ve.dyn.bulbs)vn.addCone(s.light.position.x,2.65,s.light.position.z,.1,.7,2.5,.035,"connector","255,214,150",s.light);vn.addCaustics(2.5,.045,22,43,4.2,-Math.PI/2,0,.16,"aqua");vn.addCaustics(2.5,1.6,20.2,43,3,0,0,.07,"aqua");vn.addDust([-14,.3,-19,14,6.4,-.5],320,.035,14207144,.5,"hall");vn.addDust([25,.3,15,47,7.4,29],260,.035,13681828,.45,"lobby");vn.addDust([-18,.2,20.3,23,3.2,23.8],240,.03,10475724,.55,"aqua");vn.addDust([16,.3,-7.6,39.5,3,13.5],170,.028,13162686,.4,"corridor");vn.addDust([-18.6,.3,-7,-15.6,2.8,19],120,.03,14207144,.4,"connector");function fd(s){for(let t of ve.regions)if(s.x>=t.box[0]&&s.z>=t.box[1]&&s.x<=t.box[2]&&s.z<=t.box[3])return t;return{name:"",mat:"terrazzo"}}function pd(s){return fd(s).name}var md={scene:Ve,L:ve,sys:Tt,wrist:ll,player:re,audio:en,ui:Fe,crt:Qc,mc:cd,waiters:Lr,guests:hd,gazer:ud,bride:dd,post:Bs,regionNameAt:pd},ze=new al(md);Tt.onTopologyChange=s=>{Lr.forEach(t=>t.onTopologyChange(Tt,s))};Tt.onNoise=s=>ze.addNoise(s);re.onStep=(s,t)=>{let e=s.mat;s.name==="\u5BB4\u4F1A\u5385"&&Math.abs(re.pos.x)>2.2&&(e="terrazzo"),s.name==="\u5927\u5802"&&Math.abs(re.pos.x-36)>2.4?e="terrazzo":s.name==="\u5927\u5802"&&(e="carpet"),en.footstep(e,t),ze.addNoise(t?.07:.016)};var yx=s=>ze.escort(s),id=!1;function vx(s){let t=ve.dyn.gate,e=Tt.cords.find(i=>i.tag==="gate"),n=.55;if(e&&!e.heldEnd){let i=e.b===Tt.hook("hGateTop")?e.a:e.b;if(i===Tt.hook("hJam"))t.targetY=1.6;else if(i===Tt.hook("hWinch"))t.targetY=4.9,n=.5,Math.abs(t.y-t.targetY)>.02&&Math.floor(t.y*6)!==Math.floor((t.y-n*s)*6)&&en.ratchet();else if(i===Tt.hook("hSnap")){if(t.targetY=4.9,n=6,!id&&t.y<4.5){id=!0,en.thud(.9),ze.addNoise(1.3),Fe.subtitle("\u95F8\u95E8\u5F39\u4E0A\u53BB\u7684\u5DE8\u54CD\u649E\u5728\u73BB\u7483\u4E0A\u2014\u2014\u88C2\u7EB9\u6CBF\u7740\u9884\u73B0\u91CC\u7684\u5F27\u7EBF\u722C\u4E86\u51FA\u6765\u3002",6),ve.dyn.cracks.forEach(r=>{r.material.opacity=.85}),Qc.setStatic("T07",!0);for(let r=0;r<4;r++)setTimeout(()=>en.glassCreak(),r*700);Bs.shock=1.4}}else t.targetY=t.y}if(Math.abs(t.y-t.targetY)>.01){let i=Math.sign(t.targetY-t.y);t.y+=i*n*s,i>0&&t.y>t.targetY&&(t.y=t.targetY),i<0&&t.y<t.targetY&&(t.y=t.targetY),t.group.position.y=t.y,n<1&&Math.random()<s*3&&en.creakLow()}t.collider.disabled=t.y>3.1}var sd=new R(2.1,0,-13.5),yn=0;function Mx(s){if(re.seated){Fe.reticle(""),re.holdE>1.2&&ze.standUp();return}if(ze.beat>=5&&!ze.ended){let n=Tt.cords.find(a=>a.tag==="seatlock"),i=!(n&&!n.heldEnd&&(n.a===Tt.hook("hMainA")&&n.b===Tt.hook("hMainB")||n.a===Tt.hook("hMainB")&&n.b===Tt.hook("hMainA"))),r=re.pos.distanceTo(sd);if(window.__cut={d:+r.toFixed(2),seatFree:i,eDown:re.eDown,cutHold:+yn.toFixed(2),seated:re.seated,escorting:ze.escorting,callActive:ze.call.active,held:!!Tt.held,lockEnds:n?[n.a?.id||"held",n.b?.id||"held"].join("~"):"none"},r<2)if(!i)Fe.prompt("\u5E2D\u4F4D\u88AB\u7EA2\u7EF3\u6346\u7740 \u2014\u2014 \u5148<b>\u6458\u4E0B</b>\u6346\u5E2D\u7684\u7EF3\uFF08\u5BF9\u51C6\u7EF3\u7AEF\u6309 E\uFF09"),Fe.cutRing(0);else if(re.eDown){yn+=s,Fe.prompt("\u522B\u677E\u624B \u2014\u2014 <b>\u526A\u65AD\u8155\u7EF3</b>","E"),Fe.reticle("park"),Fe.cutRing(yn/2.2),re.kick((Math.random()-.5)*.02*(1+yn),(Math.random()-.5)*.012*yn),Bs.redPulse=Math.max(Bs.redPulse,yn/2.2*.7),Lr.forEach(a=>{a.visible&&a.startChase()}),Math.floor(yn*3)!==Math.floor((yn-s)*3)&&en.heartbeat(),Math.floor(yn*6)!==Math.floor((yn-s)*6)&&en.pluck(300+yn*300,.12,.99),yn>=2.2&&(ze._cut(),yn=0,Fe.cutRing(0));return}else yn=0,Fe.cutRing(0),Fe.prompt("\u5728\u4F60\u7684\u5E2D\u4F4D\u524D\uFF0C<b>\u957F\u6309</b>\u526A\u65AD\u8155\u7EF3","E");else yn=0,Fe.cutRing(0)}if(ze.call.active){let n=Tt.nearestHook(re.pos,2.4);if(Tt.hooks.forEach(i=>i.setHighlight(!1)),n){if(n.setHighlight(!0),Fe.reticle("park"),Fe.prompt("\u628A\u8155\u7EF3<b>\u5BC4\u6302</b>\u5230\u8FD9\u53EA\u793C\u94A9\u4E0A","E"),re.ePressedThisFrame){ze.resolveCall(),n.pop(),re.kick(-.03);let i=new X(new ie(.045,8,8),new et({color:9309202,roughness:.8}));i.position.copy(n.pos),Ve.add(i),Fe.prompt(""),Fe.reticle("")}return}}let t=Ir.position,e=Tt.nearestTarget(t,re.lookDir,2.8);if(Tt.hooks.forEach(n=>n.setHighlight(!1)),e){if(e.type==="cordEnd"){e.cord.mat.emissiveIntensity=2.8,Fe.reticle("grab");let n={doorE:"\uFF08\u62E6\u95E8\u7EF3\uFF09",doorC:"\uFF08\u62E6\u95E8\u7EF3\uFF09",gate:"\uFF08\u95F8\u95E8\u540A\u7EF3\uFF09",seatlock:"\uFF08\u6346\u5E2D\u7EF3\uFF09"}[e.cord.tag]||"";Fe.prompt(`<b>\u6458</b>\u4E0B\u7EA2\u7EF3${n}`,"E"),re.ePressedThisFrame&&(Tt.grab(e.cord,e.end),en.whoosh(.14),re.kick(-.035,.012))}else if(e.type==="hook"){e.hook.setHighlight(!0),Fe.reticle("hang");let n={hWinch:"\uFF08\u7EDE\u76D8 \xB7 \u5B89\u9759\uFF09",hSnap:"\uFF08\u5361\u6263 \xB7 \u5DE8\u54CD\uFF09",hJam:"\uFF08\u5361\u6B7B\u4F4D\uFF09"}[e.hook.id]||"";Fe.prompt(`\u628A\u7EF3<b>\u6302</b>\u4E0A\u793C\u94A9${n}`,"E"),re.ePressedThisFrame&&(Tt.hang(e.hook),re.kick(.028,-.01))}}else Tt.held?(Fe.reticle(""),Fe.prompt("\u62FF\u7740\u7EA2\u7EF3 \u2014\u2014 \u8D70\u5411<b>\u547C\u5438\u53D1\u4EAE</b>\u7684\u793C\u94A9\u6302\u4E0A","E")):!ze.call.active&&!(ze.beat>=5&&re.pos.distanceTo(sd)<2)&&(Fe.reticle(""),Fe.prompt(""))}var Yc=new R;function bx(){let s=null,t=1e9;for(let a of Lr){if(!a.visible)continue;let o=a.group.position.distanceTo(re.pos);o<t&&(t=o,s=a)}if(!s||t>14){en.setThreat(0,0),en.setCordHum(0,0);return}Yc.copy(s.group.position).sub(re.pos);let e=re.forward,n=rn.clamp(Yc.x*-e.z-Yc.z*-e.x,-8,8)/8,i=s.state==="chase"||s.state==="alert",r=rn.clamp(1-t/14,0,1);en.setThreat(i?Math.min(1,r*1.6+.25):r*.4,n),en.setCordHum(s.state==="ride"?r*r:0,n)}function Ex(){for(let s of ld){let t=Tt.cords.find(n=>n.tag===s.tag),e=!!(t&&!t.heldEnd&&(t.a===Tt.hook(s.a)&&t.b===Tt.hook(s.b)||t.a===Tt.hook(s.b)&&t.b===Tt.hook(s.a)));s.col.disabled=!e}}var Zc=5,$c=7;function Sx(s,t){for(let i of ve.dyn.tubes)if((i.flicker||ze.beat>=3)&&Math.random()<s*(i.flicker?2.2:.5)){let a=.25+Math.random()*.75;i.mat.emissiveIntensity=2.6*a,i.light.intensity=i.light.userData.base*a*(ze.lightMult.corridor??1)}if(ze.beat>=3){let i=ve.dyn.lobbyChand;i.group.rotation.z=Math.sin(t*.6)*.05,i.group.rotation.x=Math.cos(t*.43)*.04,i.group.position.x=36+Math.sin(t*.6)*.3}ve.dyn.waterLights.forEach((i,r)=>{i.intensity=i.userData.base*(.7+Math.sin(t*(.8+r*.3)+r*2)*.3),i.position.x+=Math.sin(t*.22+r*3)*s*1.2});for(let i of ve.dyn.bulbs)i.group.rotation.x=Math.sin(t*1.1+i.phase)*.14,i.group.rotation.z=Math.cos(t*.9+i.phase)*.1;let e=ze.beat>=3?.12:.04;for(let i of ve.dyn.lanterns)i.group.rotation.x=Math.sin(t*.7+i.phase)*e,i.group.rotation.z=Math.cos(t*.55+i.phase)*e*.7;if(ve.dyn.kelps)for(let i of ve.dyn.kelps)i.mesh.rotation.z=Math.sin(t*.4+i.phase)*.12,i.mesh.position.x+=Math.sin(t*.23+i.phase)*s*.15;if(ve.dyn.strips)for(let i of ve.dyn.strips)i.mesh.rotation.x=Math.sin(t*.8+i.phase)*.05;if(ve.dyn.beams){for(let i of ve.dyn.beams)i.mesh.position.x=i.x0+Math.sin(t*.18+i.phase)*2.4,i.mesh.rotation.z=.25+Math.sin(t*.22+i.phase)*.1,i.mesh.material.opacity=.1+Math.sin(t*.35+i.phase)*.05;ve.dyn.seaShade.position.x=-6+Math.sin(t*.05)*12,ve.dyn.seaShade.position.y=3.2+Math.sin(t*.11)*.8}let n=pd(re.pos);if(en.setLayer("water",n==="\u6D77\u6D0B\u9986\u8FDE\u5ECA"?.05:0,1.5),n==="\u5458\u5DE5\u8FDE\u5ECA"&&(Zc-=s,Zc<=0&&(Zc=4+Math.random()*6,en.creakLow())),n==="\u6D77\u6D0B\u9986\u8FDE\u5ECA"&&ze.beat>=4&&($c-=s,$c<=0&&($c=5+Math.random()*7,en.glassCreak())),ve.dyn.doorSOpen){let{dL:i,dR:r}=ve.dyn.doorS.userData;i.position.x+=(-3.2-i.position.x)*s*.8,r.position.x+=(3.2-r.position.x)*s*.8}for(let i of Object.keys(ve.lights))for(let r of ve.lights[i]){let a=r.position.distanceTo(re.pos);r.visible=a<55}}var rd=document.getElementById("title"),Tx=document.getElementById("startBtn"),gd=document.getElementById("resume"),wx=document.getElementById("ctlBtn"),ad=document.getElementById("ctlPanel"),cl=!1;wx.addEventListener("click",()=>{ad.style.display=ad.style.display==="block"?"none":"block"});Tx.addEventListener("click",()=>{en.init(),rd.style.opacity=0,setTimeout(()=>{rd.style.display="none"},900),re.enabled=!0,re.lock(),cl||(cl=!0,ze.start())});document.addEventListener("pointerlockchange",()=>{cl&&(gd.style.display=document.pointerLockElement===Kc?"none":"flex")});gd.addEventListener("click",()=>re.lock());document.getElementById("pauseRestart").addEventListener("click",s=>{s.stopPropagation(),location.reload()});window.addEventListener("resize",()=>{Ir.aspect=window.innerWidth/window.innerHeight,Ir.updateProjectionMatrix(),ii.setSize(window.innerWidth,window.innerHeight),Bs.resize(window.innerWidth,window.innerHeight)});window.__game=md;window.__agenda=ze;var Jc=new _r,od=0;function xd(){requestAnimationFrame(xd);let s,t;if(window.__fixedDt!==void 0?(s=window.__fixedDt,od+=s,t=od,Jc.getDelta()):(s=Math.min(.05,Jc.getDelta())*(window.__timeScale||1),t=Jc.elapsedTime),re.update(s,ve.colliders,fd),cl){ze.update(s),vx(s),Ex(),Mx(s),bx(),Sx(s,t),Tt.update(s,re.handPos()),ll.record(re.pos),ll.update(s,re.handPos()),cd.update(s,re.pos);for(let e of Lr)e.update(s,Tt,re.pos,yx,en);hd.update(s,t),ud.update(s,re.pos,t),dd.update(s),Qc.update(s,re.pos),vn.update(s,ze.lightMult)}Bs.render(Ve,Ir,s,t)}xd();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
