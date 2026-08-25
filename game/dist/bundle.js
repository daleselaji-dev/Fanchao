(()=>{var Sh=0,Zl=1,Th=2;var xr=1,qa=2,ws=3,oi=0,rn=1,Se=2,Yn=0,Wi=1,In=2,$l=3,Jl=4,wh=5;var Ti=100,Ah=101,Rh=102,Ch=103,Ph=104,Ih=200,Lh=201,Dh=202,Uh=203,oa=204,la=205,Nh=206,Fh=207,Bh=208,Oh=209,Hh=210,kh=211,zh=212,Vh=213,Gh=214,ca=0,ha=1,ua=2,Xi=3,da=4,fa=5,pa=6,ma=7,Kl=0,Wh=1,Xh=2,wn=0,Ql=1,jl=2,tc=3,ec=4,nc=5,ic=6,sc=7;var rc=300,Pi=301,Ki=302,Ya=303,Za=304,_r=306,li=1e3,Cn=1001,ga=1002,en=1003,qh=1004;var yr=1005;var Be=1006,$a=1007;var Ii=1008;var yn=1009,ac=1010,oc=1011,As=1012,Ja=1013,Hn=1014,Ln=1015,Zn=1016,Ka=1017,Qa=1018,Rs=1020,lc=35902,cc=35899,hc=1021,uc=1022,Dn=1023,Gn=1026,Li=1027,ja=1028,to=1029,Di=1030,eo=1031;var no=1033,vr=33776,Mr=33777,br=33778,Er=33779,io=35840,so=35841,ro=35842,ao=35843,oo=36196,lo=37492,co=37496,ho=37488,uo=37489,Sr=37490,fo=37491,po=37808,mo=37809,go=37810,xo=37811,_o=37812,yo=37813,vo=37814,Mo=37815,bo=37816,Eo=37817,So=37818,To=37819,wo=37820,Ao=37821,Ro=36492,Co=36494,Po=36495,Io=36283,Lo=36284,Tr=36285,Do=36286;var Zs=2300,xa=2301,aa=2302,Bl=2303,Ol=2400,Hl=2401,kl=2402;var Yh=3200;var Uo=0,Zh=1,mi="",Je="srgb",$s="srgb-linear",Js="linear",xe="srgb";var Vi=7680;var zl=519,$h=512,Jh=513,Kh=514,No=515,Qh=516,jh=517,Fo=518,tu=519,Vl=35044;var dc="300 es",On=2e3,vs=2001;function pd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function md(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eu(){let s=Ks("canvas");return s.style.display="block",s}var Jc={},Ms=null;function fc(...s){let t="THREE."+s.shift();Ms?Ms("log",t,...s):console.log(t,...s)}function nu(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Vt(...s){s=nu(s);let t="THREE."+s.shift();if(Ms)Ms("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Yt(...s){s=nu(s);let t="THREE."+s.shift();if(Ms)Ms("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Gi(...s){let t=s.join(" ");t in Jc||(Jc[t]=!0,Vt(...s))}function iu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var su={[ca]:ha,[ua]:pa,[da]:ma,[Xi]:fa,[ha]:ca,[pa]:ua,[ma]:da,[fa]:Xi},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kc=1234567,Ws=Math.PI/180,qi=180/Math.PI;function Cs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[s&255]+ln[s>>8&255]+ln[s>>16&255]+ln[s>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function pc(s,t){return(s%t+t)%t}function gd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function xd(s,t,e){return s!==t?(e-s)/(t-s):0}function Xs(s,t,e){return(1-e)*s+e*t}function _d(s,t,e,n){return Xs(s,t,1-Math.exp(-e*n))}function yd(s,t=1){return t-Math.abs(pc(s,t*2)-t)}function vd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Md(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function bd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ed(s,t){return s+Math.random()*(t-s)}function Sd(s){return s*(.5-Math.random())}function Td(s){s!==void 0&&(Kc=s);let t=Kc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wd(s){return s*Ws}function Ad(s){return s*qi}function Rd(s){return(s&s-1)===0&&s!==0}function Cd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Pd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Id(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _s(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var nn={DEG2RAD:Ws,RAD2DEG:qi,generateUUID:Cs,clamp:jt,euclideanModulo:pc,mapLinear:gd,inverseLerp:xd,lerp:Xs,damp:_d,pingpong:yd,smoothstep:vd,smootherstep:Md,randInt:bd,randFloat:Ed,randFloatSpread:Sd,seededRandom:Td,degToRad:wd,radToDeg:Ad,isPowerOfTwo:Rd,ceilPowerOfTwo:Cd,floorPowerOfTwo:Pd,setQuaternionFromProperEuler:Id,normalize:dn,denormalize:_s},Ct=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],p=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*y;g<0&&(u=-u,f=-f,p=-p,y=-y,g=-g);let m=1-o;if(g<.9995){let b=Math.acos(g),w=Math.sin(b);m=Math.sin(m*b)/w,o=Math.sin(o*b)/w,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+y*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+y*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dl=new R,Qc=new Xn,$t=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],y=i[0],g=i[3],m=i[6],b=i[1],w=i[4],v=i[7],S=i[2],E=i[5],C=i[8];return r[0]=a*y+o*b+l*S,r[3]=a*g+o*w+l*E,r[6]=a*m+o*v+l*C,r[1]=c*y+h*b+d*S,r[4]=c*g+h*w+d*E,r[7]=c*m+h*v+d*C,r[2]=u*y+f*b+p*S,r[5]=u*g+f*w+p*E,r[8]=u*m+f*v+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=d*y,t[1]=(i*c-h*n)*y,t[2]=(o*n-i*a)*y,t[3]=u*y,t[4]=(h*e-i*l)*y,t[5]=(i*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fl.makeScale(t,e)),this}rotate(t){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fl.makeRotation(-t)),this}translate(t,e){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fl=new $t,jc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){let s={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?Js:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[$s]:{primaries:t,whitePoint:n,transfer:Js,toXYZ:jc,fromXYZ:th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:jc,fromXYZ:th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),s}var ae=Ld();function ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var rs,_a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=Ks("canvas")),rs.width=t.width,rs.height=t.height;let i=rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dd=0,bs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(pl(i[a].image)):r.push(pl(i[a]))}else r=pl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function pl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_a.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Ud=0,ml=new R,fn=class s extends Wn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Cn,i=Cn,r=Be,a=Ii,o=Dn,l=yn,c=s.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Cs(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case li:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case li:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=rc;fn.DEFAULT_ANISOTROPY=1;var De=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,S=(m+1)/2,E=(h+u)/4,C=(d+y)/4,_=(p+g)/4;return w>v&&w>S?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=C/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=C/r,i=_/r),this.set(n,i,r,e),this}let b=Math.sqrt((g-p)*(g-p)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(d-y)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ya=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new fn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new bs(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},We=class extends ya{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qs=class extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var va=class extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Me=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,p,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,p,y,g)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,p,y,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),a=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,y=c*d;e[0]=u+y*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,y=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Fd)}lookAt(t,e,n){let i=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),_i.crossVectors(n,vn),_i.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),_i.crossVectors(n,vn)),_i.normalize(),Br.crossVectors(vn,_i),i[0]=_i.x,i[4]=Br.x,i[8]=vn.x,i[1]=_i.y,i[5]=Br.y,i[9]=vn.y,i[2]=_i.z,i[6]=Br.z,i[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],y=n[6],g=n[10],m=n[14],b=n[3],w=n[7],v=n[11],S=n[15],E=i[0],C=i[4],_=i[8],T=i[12],I=i[1],D=i[5],B=i[9],q=i[13],Y=i[2],V=i[6],J=i[10],Z=i[14],st=i[3],ct=i[7],Mt=i[11],At=i[15];return r[0]=a*E+o*I+l*Y+c*st,r[4]=a*C+o*D+l*V+c*ct,r[8]=a*_+o*B+l*J+c*Mt,r[12]=a*T+o*q+l*Z+c*At,r[1]=h*E+d*I+u*Y+f*st,r[5]=h*C+d*D+u*V+f*ct,r[9]=h*_+d*B+u*J+f*Mt,r[13]=h*T+d*q+u*Z+f*At,r[2]=p*E+y*I+g*Y+m*st,r[6]=p*C+y*D+g*V+m*ct,r[10]=p*_+y*B+g*J+m*Mt,r[14]=p*T+y*q+g*Z+m*At,r[3]=b*E+w*I+v*Y+S*st,r[7]=b*C+w*D+v*V+S*ct,r[11]=b*_+w*B+v*J+S*Mt,r[15]=b*T+w*q+v*Z+S*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],y=t[7],g=t[11],m=t[15],b=l*f-c*u,w=o*f-c*d,v=o*u-l*d,S=a*f-c*h,E=a*u-l*h,C=a*d-o*h;return e*(y*b-g*w+m*v)-n*(p*b-g*S+m*E)+i*(p*w-y*S+m*C)-r*(p*v-y*E+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],y=t[13],g=t[14],m=t[15],b=e*o-n*a,w=e*l-i*a,v=e*c-r*a,S=n*l-i*o,E=n*c-r*o,C=i*c-r*l,_=h*y-d*p,T=h*g-u*p,I=h*m-f*p,D=d*g-u*y,B=d*m-f*y,q=u*m-f*g,Y=b*q-w*B+v*D+S*I-E*T+C*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/Y;return t[0]=(o*q-l*B+c*D)*V,t[1]=(i*B-n*q-r*D)*V,t[2]=(y*C-g*E+m*S)*V,t[3]=(u*E-d*C-f*S)*V,t[4]=(l*I-a*q-c*T)*V,t[5]=(e*q-i*I+r*T)*V,t[6]=(g*v-p*C-m*w)*V,t[7]=(h*C-u*v+f*w)*V,t[8]=(a*B-o*I+c*_)*V,t[9]=(n*I-e*B-r*_)*V,t[10]=(p*E-y*v+m*b)*V,t[11]=(d*v-h*E-f*b)*V,t[12]=(o*T-a*D-l*_)*V,t[13]=(e*D-n*T+i*_)*V,t[14]=(y*w-p*S-g*b)*V,t[15]=(h*S-d*w+u*b)*V,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,y=a*h,g=a*d,m=o*d,b=l*c,w=l*h,v=l*d,S=n.x,E=n.y,C=n.z;return i[0]=(1-(y+m))*S,i[1]=(f+v)*S,i[2]=(p-w)*S,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(u+m))*E,i[6]=(g+b)*E,i[7]=0,i[8]=(p+w)*C,i[9]=(g-b)*C,i[10]=(1-(u+y))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=as.set(i[0],i[1],i[2]).length(),o=as.set(i[4],i[5],i[6]).length(),l=as.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Nn.copy(this);let c=1/a,h=1/o,d=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,e.setFromRotationMatrix(Nn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=On,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===On)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===vs)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=On,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===On)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===vs)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},as=new R,Nn=new Me,Nd=new R(0,0,0),Fd=new R(1,1,1),_i=new R,Br=new R,vn=new R,eh=new Me,nh=new Xn,ci=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nh.setFromEuler(this),this.setFromQuaternion(nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bd=0,ih=new R,os=new Xn,ei=new Me,Or=new R,Os=new R,Od=new R,Hd=new Xn,sh=new R(1,0,0),rh=new R(0,1,0),ah=new R(0,0,1),oh={type:"added"},kd={type:"removed"},ls={type:"childadded",child:null},gl={type:"childremoved",child:null},Oe=class s extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new ci,n=new Xn,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new $t}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(sh,t)}rotateY(t){return this.rotateOnAxis(rh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return ih.copy(t).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sh,t)}translateY(t){return this.translateOnAxis(rh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Or.copy(t):Or.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Os,Or,this.up):ei.lookAt(Or,Os,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),os.setFromRotationMatrix(ei),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oh),ls.child=t,this.dispatchEvent(ls),ls.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kd),gl.child=t,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oh),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Oe.DEFAULT_UP=new R(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ie=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},zd={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function xl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=pc(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=xl(a,r,t+1/3),this.g=xl(a,r,t),this.b=xl(a,r,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ae.workingToColorSpace(cn.copy(this),t),Math.round(jt(cn.r*255,0,255))*65536+Math.round(jt(cn.g*255,0,255))*256+Math.round(jt(cn.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(cn.copy(this),e);let n=cn.r,i=cn.g,r=cn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Je){ae.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,i=cn.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Hr);let n=Xs(yi.h,Hr.h,e),i=Xs(yi.s,Hr.s,e),r=Xs(yi.l,Hr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new zt;zt.NAMES=ru;var tr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var hi=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new R,ni=new R,_l=new R,ii=new R,cs=new R,hs=new R,lh=new R,yl=new R,vl=new R,Ml=new R,bl=new De,El=new De,Sl=new De,Si=class s{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Fn.subVectors(t,e),i.cross(Fn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Fn.subVectors(i,e),ni.subVectors(n,e),_l.subVectors(t,e);let a=Fn.dot(Fn),o=Fn.dot(ni),l=Fn.dot(_l),c=ni.dot(ni),h=ni.dot(_l),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return bl.setScalar(0),El.setScalar(0),Sl.setScalar(0),bl.fromBufferAttribute(t,e),El.fromBufferAttribute(t,n),Sl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(bl,r.x),a.addScaledVector(El,r.y),a.addScaledVector(Sl,r.z),a}static isFrontFacing(t,e,n,i){return Fn.subVectors(n,e),ni.subVectors(t,e),Fn.cross(ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Fn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;cs.subVectors(i,n),hs.subVectors(r,n),yl.subVectors(t,n);let l=cs.dot(yl),c=hs.dot(yl);if(l<=0&&c<=0)return e.copy(n);vl.subVectors(t,i);let h=cs.dot(vl),d=hs.dot(vl);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(cs,a);Ml.subVectors(t,r);let f=cs.dot(Ml),p=hs.dot(Ml);if(p>=0&&f<=p)return e.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(hs,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return lh.subVectors(r,i),o=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(lh,o);let m=1/(g+y+u);return a=y*m,o=u*m,e.copy(n).addScaledVector(cs,a).addScaledVector(hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),zr.subVectors(this.max,Hs),us.subVectors(t.a,Hs),ds.subVectors(t.b,Hs),fs.subVectors(t.c,Hs),vi.subVectors(ds,us),Mi.subVectors(fs,ds),Oi.subVectors(us,fs);let e=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-Oi.z,Oi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,Oi.z,0,-Oi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-Oi.y,Oi.x,0];return!Tl(e,us,ds,fs,zr)||(e=[1,0,0,0,1,0,0,0,1],!Tl(e,us,ds,fs,zr))?!1:(Vr.crossVectors(vi,Mi),e=[Vr.x,Vr.y,Vr.z],Tl(e,us,ds,fs,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},si=[new R,new R,new R,new R,new R,new R,new R,new R],Bn=new R,kr=new qn,us=new R,ds=new R,fs=new R,vi=new R,Mi=new R,Oi=new R,Hs=new R,zr=new R,Vr=new R,Hi=new R;function Tl(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Hi.fromArray(s,r);let o=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ze=new R,Gr=new Ct,Vd=0,sn=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),i=dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var er=class extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var nr=class extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var de=class extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gd=new qn,ks=new R,wl=new R,ui=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);let e=ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ks,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(wl)),this.expandByPoint(ks.copy(t.center).sub(wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wd=0,Rn=new Me,Al=new Oe,ps=new R,Mn=new qn,zs=new qn,tn=new R,He=class s extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pd(t)?nr:er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Al.lookAt(t),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Mn.min,zs.min),Mn.expandByPoint(tn),tn.addVectors(Mn.max,zs.max),Mn.expandByPoint(tn)):(Mn.expandByPoint(zs.min),Mn.expandByPoint(zs.max))}Mn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)tn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(tn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)tn.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(t,c),tn.add(ps)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new R,l[_]=new R;let c=new R,h=new R,d=new R,u=new Ct,f=new Ct,p=new Ct,y=new R,g=new R;function m(_,T,I){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),o[_].add(y),o[T].add(y),o[I].add(y),l[_].add(g),l[T].add(g),l[I].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,T=b.length;_<T;++_){let I=b[_],D=I.start,B=I.count;for(let q=D,Y=D+B;q<Y;q+=3)m(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let w=new R,v=new R,S=new R,E=new R;function C(_){S.fromBufferAttribute(i,_),E.copy(S);let T=o[_];w.copy(T),w.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(E,T);let D=v.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,D)}for(let _=0,T=b.length;_<T;++_){let I=b[_],D=I.start,B=I.count;for(let q=D,Y=D+B;q<Y;q+=3)C(t.getX(q+0)),C(t.getX(q+1)),C(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new sn(u,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Xd=0,di=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=Wi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=la,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ri=new R,Rl=new R,Wr=new R,bi=new R,Cl=new R,Xr=new R,Pl=new R,ir=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Rl.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),bi.copy(this.origin).sub(Rl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=bi.dot(this.direction),l=-bi.dot(Wr),c=bi.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Rl).addScaledVector(Wr,u),f}intersectSphere(t,e){ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),i=ri.dot(ri)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,i,r){Cl.subVectors(e,t),Xr.subVectors(n,t),Pl.crossVectors(Cl,Xr);let a=this.direction.dot(Pl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,t);let l=o*this.direction.dot(Xr.crossVectors(bi,Xr));if(l<0)return null;let c=o*this.direction.dot(Cl.cross(bi));if(c<0||l+c>a)return null;let h=-o*bi.dot(Pl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ch=new Me,ki=new ir,qr=new ui,hh=new R,Yr=new R,Zr=new R,$r=new R,Il=new R,Jr=new R,uh=new R,Kr=new R,W=class extends Oe{constructor(t=new He,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Il.fromBufferAttribute(d,t),a?Jr.addScaledVector(Il,h):Jr.addScaledVector(Il.sub(e),h))}e.add(Jr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(qr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(qr,hh)===null||ki.origin.distanceToSquared(hh)>(t.far-t.near)**2))&&(ch.copy(r).invert(),ki.copy(t.ray).applyMatrix4(ch),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=a[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,S=w;v<S;v+=3){let E=o.getX(v),C=o.getX(v+1),_=o.getX(v+2);i=Qr(this,m,t,n,c,h,d,E,C,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let b=o.getX(g),w=o.getX(g+1),v=o.getX(g+2);i=Qr(this,a,t,n,c,h,d,b,w,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=a[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,S=w;v<S;v+=3){let E=v,C=v+1,_=v+2;i=Qr(this,m,t,n,c,h,d,E,C,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let b=g,w=g+1,v=g+2;i=Qr(this,a,t,n,c,h,d,b,w,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function qd(s,t,e,n,i,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===oi,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:s}}function Qr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Yr),s.getVertexPosition(l,Zr),s.getVertexPosition(c,$r);let h=qd(s,t,e,n,Yr,Zr,$r,uh);if(h){let d=new R;Si.getBarycoord(uh,Yr,Zr,$r,d),i&&(h.uv=Si.getInterpolatedAttribute(i,o,l,c,d,new Ct)),r&&(h.uv1=Si.getInterpolatedAttribute(r,o,l,c,d,new Ct)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};Si.getNormal(Yr,Zr,$r,u.normal),h.face=u,h.barycoord=d}return h}var sr=class extends fn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=en,h=en,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rr=class extends sn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ms=new Me,dh=new Me,jr=[],fh=new qn,Yd=new Me,Vs=new W,Gs=new ui,bn=class extends W{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),fh.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(fh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),Gs.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(Gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),t.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ms),dh.multiplyMatrices(n,ms),Vs.matrixWorld=dh,Vs.raycast(t,jr);for(let a=0,o=jr.length;a<o;a++){let l=jr[a];l.instanceId=r,l.object=this,e.push(l)}jr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new sr(new Float32Array(i*this.count),i,this.count,ja,Ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ll=new R,Zd=new R,$d=new $t,Vn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ll.subVectors(n,e).cross(Zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ll),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$d.getNormalMatrix(t),i=this.coplanarPoint(Ll).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new ui,Jd=new Ct(.5,.5),ta=new R,Ss=class{constructor(t=new Vn,e=new Vn,n=new Vn,i=new Vn,r=new Vn,a=new Vn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],y=r[9],g=r[10],m=r[11],b=r[12],w=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-a,f-h,m-p,S-b).normalize(),i[1].setComponents(c+a,f+h,m+p,S+b).normalize(),i[2].setComponents(c+o,f+d,m+y,S+w).normalize(),i[3].setComponents(c-o,f-d,m-y,S-w).normalize(),n)i[4].setComponents(l,u,g,v).normalize(),i[5].setComponents(c-l,f-u,m-g,S-v).normalize();else if(i[4].setComponents(c-l,f-u,m-g,S-v).normalize(),e===On)i[5].setComponents(c+l,f+u,m+g,S+v).normalize();else if(e===vs)i[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);let e=Jd.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ta.x=i.normal.x>0?t.max.x:t.min.x,ta.y=i.normal.y>0?t.max.y:t.min.y,ta.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ma=class extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ph=new Me,Gl=new ir,ea=new ui,na=new R,ar=class extends Oe{constructor(t=new He,e=new Ma){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;ph.copy(i).invert(),Gl.copy(t.ray).applyMatrix4(ph);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,y=f;p<y;p++){let g=c.getX(p);na.fromBufferAttribute(d,g),mh(na,g,l,i,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,y=f;p<y;p++)na.fromBufferAttribute(d,p),mh(na,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mh(s,t,e,n,i,r,a){let o=Gl.distanceSqToPoint(s);if(o<e){let l=new R;Gl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var or=class extends fn{constructor(t=[],e=Pi,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xn=class extends fn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends fn{constructor(t,e,n=Hn,i,r,a,o=en,l=en,c,h=Gn,d=1){if(h!==Gn&&h!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ba=class extends fi{constructor(t,e=Hn,n=Pi,i,r,a=en,o=en,l,c=Gn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},lr=class extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ce=class s extends He{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(d,2));function p(y,g,m,b,w,v,S,E,C,_,T){let I=v/C,D=S/_,B=v/2,q=S/2,Y=E/2,V=C+1,J=_+1,Z=0,st=0,ct=new R;for(let Mt=0;Mt<J;Mt++){let At=Mt*D-q;for(let Pt=0;Pt<V;Pt++){let ue=Pt*I-B;ct[y]=ue*b,ct[g]=At*w,ct[m]=Y,c.push(ct.x,ct.y,ct.z),ct[y]=0,ct[g]=0,ct[m]=E>0?1:-1,h.push(ct.x,ct.y,ct.z),d.push(Pt/C),d.push(1-Mt/_),Z+=1}}for(let Mt=0;Mt<_;Mt++)for(let At=0;At<C;At++){let Pt=u+At+V*Mt,ue=u+At+V*(Mt+1),ge=u+(At+1)+V*(Mt+1),le=u+(At+1)+V*Mt;l.push(Pt,ue,le),l.push(ue,ge,le),st+=6}o.addGroup(f,st,T),f+=st,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ts=class s extends He{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,y=i+1,g=new R,m=new R;for(let b=0;b<=p;b++){let w=0,v=0,S=0,E=0;if(b<=n){let T=b/n,I=T*Math.PI/2;v=-h-t*Math.cos(I),S=t*Math.sin(I),E=-t*Math.cos(I),w=T*d}else if(b<=n+r){let T=(b-n)/r;v=-h+T*e,S=t,E=0,w=d+T*u}else{let T=(b-n-r)/n,I=T*Math.PI/2;v=h+t*Math.sin(I),S=t*Math.cos(I),E=t*Math.sin(I),w=d+u+T*d}let C=Math.max(0,Math.min(1,w/f)),_=0;b===0?_=.5/i:b===p&&(_=-.5/i);for(let T=0;T<=i;T++){let I=T/i,D=I*Math.PI*2,B=Math.sin(D),q=Math.cos(D);m.x=-S*q,m.y=v,m.z=S*B,o.push(m.x,m.y,m.z),g.set(-S*q,E,S*B),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+_,C)}if(b>0){let T=(b-1)*y;for(let I=0;I<i;I++){let D=T+I,B=T+I+1,q=b*y+I,Y=b*y+I+1;a.push(D,B,q),a.push(B,Y,q)}}}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Yi=class s extends He{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new R,h=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Jt=class s extends He{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,y=[],g=n/2,m=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2));function b(){let v=new R,S=new R,E=0,C=(e-t)/n;for(let _=0;_<=r;_++){let T=[],I=_/r,D=I*(e-t)+t;for(let B=0;B<=i;B++){let q=B/i,Y=q*l+o,V=Math.sin(Y),J=Math.cos(Y);S.x=D*V,S.y=-I*n+g,S.z=D*J,d.push(S.x,S.y,S.z),v.set(V,C,J).normalize(),u.push(v.x,v.y,v.z),f.push(q,1-I),T.push(p++)}y.push(T)}for(let _=0;_<i;_++)for(let T=0;T<r;T++){let I=y[T][_],D=y[T+1][_],B=y[T+1][_+1],q=y[T][_+1];(t>0||T!==0)&&(h.push(I,D,q),E+=3),(e>0||T!==r-1)&&(h.push(D,B,q),E+=3)}c.addGroup(m,E,0),m+=E}function w(v){let S=p,E=new Ct,C=new R,_=0,T=v===!0?t:e,I=v===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,g*I,0),u.push(0,I,0),f.push(.5,.5),p++;let D=p;for(let B=0;B<=i;B++){let Y=B/i*l+o,V=Math.cos(Y),J=Math.sin(Y);C.x=T*J,C.y=g*I,C.z=T*V,d.push(C.x,C.y,C.z),u.push(0,I,0),E.x=V*.5+.5,E.y=J*.5*I+.5,f.push(E.x,E.y),p++}for(let B=0;B<i;B++){let q=S+B,Y=D+B;v===!0?h.push(Y,Y+1,q):h.push(Y+1,Y,q),_+=3}c.addGroup(m,_,v===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pn=class s extends Jt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Ct:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,i=[],r=[],a=[],o=new R,l=new Me;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(jt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},cr=class extends Pn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ea=class extends cr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var gh=new R,xh=new R,Dl=new mc,Ul=new mc,Nl=new mc,_n=class extends Pn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(xh.subVectors(i[0],i[1]).add(i[0]),c=xh);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(gh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=gh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),g<1e-4&&(g=y),Dl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,y,g),Ul.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,y,g),Nl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,y,g)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ul.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Nl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Dl.calc(l),Ul.calc(l),Nl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _h(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Kd(s,t){let e=1-s;return e*e*t}function Qd(s,t){return 2*(1-s)*s*t}function jd(s,t){return s*s*t}function qs(s,t,e,n){return Kd(s,t)+Qd(s,e)+jd(s,n)}function tf(s,t){let e=1-s;return e*e*e*t}function ef(s,t){let e=1-s;return 3*e*e*s*t}function nf(s,t){return 3*(1-s)*s*s*t}function sf(s,t){return s*s*s*t}function Ys(s,t,e,n,i){return tf(s,t)+ef(s,e)+nf(s,n)+sf(s,i)}var Sa=class extends Pn{constructor(t=new Ct,e=new Ct,n=new Ct,i=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ct){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ys(t,i.x,r.x,a.x,o.x),Ys(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ta=class extends Pn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ys(t,i.x,r.x,a.x,o.x),Ys(t,i.y,r.y,a.y,o.y),Ys(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wa=class extends Pn{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends Pn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends Pn{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(qs(t,i.x,r.x,a.x),qs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hr=class extends Pn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(qs(t,i.x,r.x,a.x),qs(t,i.y,r.y,a.y),qs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(_h(o,l.x,c.x,h.x,d.x),_h(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Ct().fromArray(i))}return this}},rf=Object.freeze({__proto__:null,ArcCurve:Ea,CatmullRomCurve3:_n,CubicBezierCurve:Sa,CubicBezierCurve3:Ta,EllipseCurve:cr,LineCurve:wa,LineCurve3:Aa,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:hr,SplineCurve:Ca});var pi=class s extends He{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=jt(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new R,u=new Ct,f=new R,p=new R,y=new R,g=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-g,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(p)}for(let b=0;b<=e;b++){let w=n+b*h*i,v=Math.sin(w),S=Math.cos(w);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*v,d.y=t[E].y,d.z=t[E].x*S,a.push(d.x,d.y,d.z),u.x=b/e,u.y=E/(t.length-1),o.push(u.x,u.y);let C=l[3*E+0]*v,_=l[3*E+1],T=l[3*E+0]*S;c.push(C,_,T)}}for(let b=0;b<e;b++)for(let w=0;w<t.length-1;w++){let v=w+b*t.length,S=v,E=v+t.length,C=v+t.length+1,_=v+1;r.push(S,E,_),r.push(C,_,E)}this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("uv",new de(o,2)),this.setAttribute("normal",new de(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var be=class s extends He{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],y=[],g=[];for(let m=0;m<h;m++){let b=m*u-a;for(let w=0;w<c;w++){let v=w*d-r;p.push(v,-b,0),y.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let w=b+c*m,v=b+c*(m+1),S=b+1+c*(m+1),E=b+1+c*m;f.push(w,v,E),f.push(v,S,E)}this.setIndex(f),this.setAttribute("position",new de(p,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var ne=class s extends He{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new R,u=new R,f=[],p=[],y=[],g=[];for(let m=0;m<=n;m++){let b=[],w=m/n,v=a+w*o,S=t*Math.cos(v),E=Math.sqrt(t*t-S*S),C=0;m===0&&a===0?C=.5/e:m===n&&l===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let T=_/e,I=i+T*r;d.x=-E*Math.cos(I),d.y=S,d.z=E*Math.sin(I),p.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(T+C,1-w),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let w=h[m][b+1],v=h[m][b],S=h[m+1][b],E=h[m+1][b+1];(m!==0||a>0)&&f.push(w,v,E),(m!==n-1||l<Math.PI)&&f.push(v,S,E)}this.setIndex(f),this.setAttribute("position",new de(p,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var En=class s extends He{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new R,f=new R,p=new R;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let m=0;m<=i;m++){let b=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(b),f.y=(t+e*Math.cos(g))*Math.sin(b),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=i;g++){let m=(i+1)*y+g-1,b=(i+1)*(y-1)+g-1,w=(i+1)*(y-1)+g,v=(i+1)*y+g;l.push(m,b,v),l.push(b,w,v)}this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Sn=class s extends He{constructor(t=new hr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new Ct,h=new R,d=[],u=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2));function y(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),b(),m()}function g(w){h=t.getPointAt(w/e,h);let v=a.normals[w],S=a.binormals[w];for(let E=0;E<=i;E++){let C=E/i*Math.PI*2,_=Math.sin(C),T=-Math.cos(C);l.x=T*v.x+_*S.x,l.y=T*v.y+_*S.y,l.z=T*v.z+_*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let w=1;w<=e;w++)for(let v=1;v<=i;v++){let S=(i+1)*(w-1)+(v-1),E=(i+1)*w+(v-1),C=(i+1)*w+v,_=(i+1)*(w-1)+v;p.push(S,E,_),p.push(E,C,_)}}function b(){for(let w=0;w<=e;w++)for(let v=0;v<=i;v++)c.x=w/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new rf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Qi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(yh(i))i.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(yh(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function hn(s){let t={};for(let e=0;e<s.length;e++){let n=Qi(s[e]);for(let i in n)t[i]=n[i]}return t}function yh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function af(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var au={clone:Qi,merge:hn},of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ct().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new De().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Pa=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},j=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ur=class extends j{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ia=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},La=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ia(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var wi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Da=class extends wi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hl:r=t,o=2*e-n;break;case kl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hl:a=t,l=2*n-e;break;case kl:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),y=p*p,g=y*p,m=-u*g+2*u*y-u*p,b=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*p+1,w=(-1-f)*g+(1.5+f)*y+.5*p,v=f*g-f*y;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+b*a[c+S]+w*a[l+S]+v*a[d+S];return r}},Ua=class extends wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Na=class extends wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Fa=class extends wi{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),y=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let y=a[c+p],g=a[l+p],m=f*u+p*2,b=d[m],w=d[m+1],v=t*u+p*2,S=h[v],E=h[v+1],C=(n-e)/(i-e),_,T,I,D,B;for(let q=0;q<8;q++){_=C*C,T=_*C,I=1-C,D=I*I,B=D*I;let V=B*e+3*D*C*b+3*I*_*S+T*i-n;if(Math.abs(V)<1e-10)break;let J=3*D*(b-e)+6*I*C*(S-b)+3*_*(i-S);if(Math.abs(J)<1e-10)break;C=C-V/J,C=Math.max(0,Math.min(1,C))}r[p]=B*y+3*D*C*w+3*I*_*E+T*g}return r}},Tn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ia(e,this.TimeBufferType),this.values=ia(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ia(t.times,Array),values:ia(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Fa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case xa:e=this.InterpolantFactoryMethodLinear;break;case aa:e=this.InterpolantFactoryMethodSmooth;break;case Bl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return xa;case this.InterpolantFactoryMethodSmooth:return aa;case this.InterpolantFactoryMethodBezier:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Yt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&md(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===aa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let y=e[d+p];if(y!==e[u+p]||y!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=xa;var Ai=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Zs;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Tn{constructor(t,e,n,i){super(t,e,n,i)}};Ba.prototype.ValueTypeName="color";var Oa=class extends Tn{constructor(t,e,n,i){super(t,e,n,i)}};Oa.prototype.ValueTypeName="number";var Ha=class extends wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Xn.slerpFlat(r,0,a,c-o,a,c,l);return r}},dr=class extends Tn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}};dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Zs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends Tn{constructor(t,e,n,i){super(t,e,n,i)}};ka.prototype.ValueTypeName="vector";var za=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ou=new za,Va=class{constructor(t){this.manager=t!==void 0?t:ou,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Va.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zi=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},fr=class extends Zi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Fl=new Me,vh=new R,Mh=new R,Ga=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(vh),Mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mh),e.updateMatrixWorld(),Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===vs||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},sa=new R,ra=new Xn,zn=new R,pr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(sa,ra,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(sa,ra,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ei=new R,bh=new Ct,Eh=new Ct,$e=class extends pr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,bh,Eh),e.subVectors(Eh,bh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Wl=class extends Ga{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=qi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},mr=class extends Zi{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Wl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Xl=class extends Ga{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}},Ci=class extends Zi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},$i=class extends pr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ji=class extends Zi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var gs=-90,xs=1,Wa=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new $e(gs,xs,t,e);i.layers=this.layers,this.add(i);let r=new $e(gs,xs,t,e);r.layers=this.layers,this.add(r);let a=new $e(gs,xs,t,e);a.layers=this.layers,this.add(a);let o=new $e(gs,xs,t,e);o.layers=this.layers,this.add(o);let l=new $e(gs,xs,t,e);l.layers=this.layers,this.add(l);let c=new $e(gs,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xa=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xc="\\[\\]\\.:\\/",cf=new RegExp("["+xc+"]","g"),_c="[^"+xc+"]",hf="[^"+xc.replace("\\.","")+"]",uf=/((?:WC+[\/:])*)/.source.replace("WC",_c),df=/(WCOD+)?/.source.replace("WCOD",hf),ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),pf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),mf=new RegExp("^"+uf+df+ff+pf+"$"),gf=["material","materials","bones","map"],ql=class{constructor(t,e,n){let i=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cf,"")}static parseTrackName(t){let e=mf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);gf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=ql;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ex=new Float32Array(1);var gr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Yl=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function yc(s,t,e,n){let i=xf(n);switch(e){case hc:return s*t;case ja:return s*t/i.components*i.byteLength;case to:return s*t/i.components*i.byteLength;case Di:return s*t*2/i.components*i.byteLength;case eo:return s*t*2/i.components*i.byteLength;case uc:return s*t*3/i.components*i.byteLength;case Dn:return s*t*4/i.components*i.byteLength;case no:return s*t*4/i.components*i.byteLength;case vr:case Mr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case br:case Er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case so:case ao:return Math.max(s,16)*Math.max(t,8)/4;case io:case ro:return Math.max(s,8)*Math.max(t,8)/2;case oo:case lo:case ho:case uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case co:case Sr:case fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case go:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case _o:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case vo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case bo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case So:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case wo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ro:case Co:case Po:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Io:case Lo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Tr:case Do:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xf(s){switch(s){case yn:case ac:return{byteLength:1,components:1};case As:case oc:case Zn:return{byteLength:2,components:1};case Ka:case Qa:return{byteLength:2,components:4};case Hn:case Ja:case Ln:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Pu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function yf(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],y=d[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let y=d[f];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mf=`#ifdef USE_ALPHAHASH
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
#endif`,bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Df=`#ifdef USE_IRIDESCENCE
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
#endif`,Uf=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gf=`#define PI 3.141592653589793
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
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
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
}`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xp=`PhysicalMaterial material;
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
#endif`,_p=`uniform sampler2D dfgLUT;
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
}`,yp=`
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pp=`#if defined( USE_POINTS_UV )
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
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
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
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rm=`float getShadowMask() {
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
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`#define DISTANCE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,Om=`#define MATCAP
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
}`,Hm=`#define MATCAP
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
}`,km=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define STANDARD
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
}`,qm=`#define TOON
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
}`,Ym=`#define TOON
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
}`,Zm=`uniform float size;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Km=`uniform vec3 color;
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
}`,Qm=`uniform float rotation;
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
}`,jm=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:vf,alphahash_pars_fragment:Mf,alphamap_fragment:bf,alphamap_pars_fragment:Ef,alphatest_fragment:Sf,alphatest_pars_fragment:Tf,aomap_fragment:wf,aomap_pars_fragment:Af,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:Pf,beginnormal_vertex:If,bsdfs:Lf,iridescence_fragment:Df,bumpmap_pars_fragment:Uf,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:Bf,clipping_planes_vertex:Of,color_fragment:Hf,color_pars_fragment:kf,color_pars_vertex:zf,color_vertex:Vf,common:Gf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:qf,displacementmap_vertex:Yf,emissivemap_fragment:Zf,emissivemap_pars_fragment:$f,colorspace_fragment:Jf,colorspace_pars_fragment:Kf,envmap_fragment:Qf,envmap_common_pars_fragment:jf,envmap_pars_fragment:tp,envmap_pars_vertex:ep,envmap_physical_pars_fragment:dp,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:sp,fog_fragment:rp,fog_pars_fragment:ap,gradientmap_pars_fragment:op,lightmap_pars_fragment:lp,lights_lambert_fragment:cp,lights_lambert_pars_fragment:hp,lights_pars_begin:up,lights_toon_fragment:fp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:xp,lights_physical_pars_fragment:_p,lights_fragment_begin:yp,lights_fragment_maps:vp,lights_fragment_end:Mp,lightprobes_pars_fragment:bp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:Sp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:wp,map_fragment:Ap,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:Lp,morphinstance_vertex:Dp,morphcolor_vertex:Up,morphnormal_vertex:Np,morphtarget_pars_vertex:Fp,morphtarget_vertex:Bp,normal_fragment_begin:Op,normal_fragment_maps:Hp,normal_pars_fragment:kp,normal_pars_vertex:zp,normal_vertex:Vp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:Yp,opaque_fragment:Zp,packing:$p,premultiplied_alpha_fragment:Jp,project_vertex:Kp,dithering_fragment:Qp,dithering_pars_fragment:jp,roughnessmap_fragment:tm,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:sm,shadowmask_pars_fragment:rm,skinbase_vertex:am,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:hm,specularmap_pars_fragment:um,tonemapping_fragment:dm,tonemapping_pars_fragment:fm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:xm,uv_vertex:_m,worldpos_vertex:ym,background_vert:vm,background_frag:Mm,backgroundCube_vert:bm,backgroundCube_frag:Em,cube_vert:Sm,cube_frag:Tm,depth_vert:wm,depth_frag:Am,distance_vert:Rm,distance_frag:Cm,equirect_vert:Pm,equirect_frag:Im,linedashed_vert:Lm,linedashed_frag:Dm,meshbasic_vert:Um,meshbasic_frag:Nm,meshlambert_vert:Fm,meshlambert_frag:Bm,meshmatcap_vert:Om,meshmatcap_frag:Hm,meshnormal_vert:km,meshnormal_frag:zm,meshphong_vert:Vm,meshphong_frag:Gm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:qm,meshtoon_frag:Ym,points_vert:Zm,points_frag:$m,shadow_vert:Jm,shadow_frag:Km,sprite_vert:Qm,sprite_frag:jm},St={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Jn={basic:{uniforms:hn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:hn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:hn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:hn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:hn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new zt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:hn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:hn([St.points,St.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:hn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:hn([St.common,St.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:hn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:hn([St.sprite,St.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:hn([St.common,St.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:hn([St.lights,St.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Jn.physical={uniforms:hn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Bo={r:0,b:0,g:0},t0=new Me,Iu=new $t;Iu.set(-1,0,0,0,1,0,0,0,1);function e0(s,t,e,n,i,r){let a=new zt(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let v=b.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(b){let w=!1,v=f(b);v===null?g(a,o):v&&v.isColor&&(g(v,1),w=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(b,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===_r)?(c===void 0&&(c=new W(new Ce(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Qi(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(t0.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Iu),c.material.toneMapped=ae.getTransfer(v.colorSpace)!==xe,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new W(new be(2,2),new Xe({name:"BackgroundMaterial",uniforms:Qi(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ae.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,w){b.getRGB(Bo,gc(s)),e.buffers.color.setClear(Bo.r,Bo.g,Bo.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:p,addToRenderList:y,dispose:m}}function n0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(D,B,q,Y,V){let J=!1,Z=d(D,Y,q,B);r!==Z&&(r=Z,c(r.object)),J=f(D,Y,q,V),J&&p(D,Y,q,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(D,B,q,Y),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,B,q,Y){let V=Y.wireframe===!0,J=n[B.id];J===void 0&&(J={},n[B.id]=J);let Z=D.isInstancedMesh===!0?D.id:0,st=J[Z];st===void 0&&(st={},J[Z]=st);let ct=st[q.id];ct===void 0&&(ct={},st[q.id]=ct);let Mt=ct[V];return Mt===void 0&&(Mt=u(l()),ct[V]=Mt),Mt}function u(D){let B=[],q=[],Y=[];for(let V=0;V<e;V++)B[V]=0,q[V]=0,Y[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:Y,object:D,attributes:{},index:null}}function f(D,B,q,Y){let V=r.attributes,J=B.attributes,Z=0,st=q.getAttributes();for(let ct in st)if(st[ct].location>=0){let At=V[ct],Pt=J[ct];if(Pt===void 0&&(ct==="instanceMatrix"&&D.instanceMatrix&&(Pt=D.instanceMatrix),ct==="instanceColor"&&D.instanceColor&&(Pt=D.instanceColor)),At===void 0||At.attribute!==Pt||Pt&&At.data!==Pt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==Y}function p(D,B,q,Y){let V={},J=B.attributes,Z=0,st=q.getAttributes();for(let ct in st)if(st[ct].location>=0){let At=J[ct];At===void 0&&(ct==="instanceMatrix"&&D.instanceMatrix&&(At=D.instanceMatrix),ct==="instanceColor"&&D.instanceColor&&(At=D.instanceColor));let Pt={};Pt.attribute=At,At&&At.data&&(Pt.data=At.data),V[ct]=Pt,Z++}r.attributes=V,r.attributesNum=Z,r.index=Y}function y(){let D=r.newAttributes;for(let B=0,q=D.length;B<q;B++)D[B]=0}function g(D){m(D,0)}function m(D,B){let q=r.newAttributes,Y=r.enabledAttributes,V=r.attributeDivisors;q[D]=1,Y[D]===0&&(s.enableVertexAttribArray(D),Y[D]=1),V[D]!==B&&(s.vertexAttribDivisor(D,B),V[D]=B)}function b(){let D=r.newAttributes,B=r.enabledAttributes;for(let q=0,Y=B.length;q<Y;q++)B[q]!==D[q]&&(s.disableVertexAttribArray(q),B[q]=0)}function w(D,B,q,Y,V,J,Z){Z===!0?s.vertexAttribIPointer(D,B,q,V,J):s.vertexAttribPointer(D,B,q,Y,V,J)}function v(D,B,q,Y){y();let V=Y.attributes,J=q.getAttributes(),Z=B.defaultAttributeValues;for(let st in J){let ct=J[st];if(ct.location>=0){let Mt=V[st];if(Mt===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor)),Mt!==void 0){let At=Mt.normalized,Pt=Mt.itemSize,ue=t.get(Mt);if(ue===void 0)continue;let ge=ue.buffer,le=ue.type,et=ue.bytesPerElement,ft=le===s.INT||le===s.UNSIGNED_INT||Mt.gpuType===Ja;if(Mt.isInterleavedBufferAttribute){let ht=Mt.data,qt=ht.stride,Zt=Mt.offset;if(ht.isInstancedInterleavedBuffer){for(let It=0;It<ct.locationSize;It++)m(ct.location+It,ht.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let It=0;It<ct.locationSize;It++)g(ct.location+It);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let It=0;It<ct.locationSize;It++)w(ct.location+It,Pt/ct.locationSize,le,At,qt*et,(Zt+Pt/ct.locationSize*It)*et,ft)}else{if(Mt.isInstancedBufferAttribute){for(let ht=0;ht<ct.locationSize;ht++)m(ct.location+ht,Mt.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ht=0;ht<ct.locationSize;ht++)g(ct.location+ht);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let ht=0;ht<ct.locationSize;ht++)w(ct.location+ht,Pt/ct.locationSize,le,At,Pt*et,Pt/ct.locationSize*ht*et,ft)}}else if(Z!==void 0){let At=Z[st];if(At!==void 0)switch(At.length){case 2:s.vertexAttrib2fv(ct.location,At);break;case 3:s.vertexAttrib3fv(ct.location,At);break;case 4:s.vertexAttrib4fv(ct.location,At);break;default:s.vertexAttrib1fv(ct.location,At)}}}}b()}function S(){T();for(let D in n){let B=n[D];for(let q in B){let Y=B[q];for(let V in Y){let J=Y[V];for(let Z in J)h(J[Z].object),delete J[Z];delete Y[V]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let B=n[D.id];for(let q in B){let Y=B[q];for(let V in Y){let J=Y[V];for(let Z in J)h(J[Z].object),delete J[Z];delete Y[V]}}delete n[D.id]}function C(D){for(let B in n){let q=n[B];for(let Y in q){let V=q[Y];if(V[D.id]===void 0)continue;let J=V[D.id];for(let Z in J)h(J[Z].object),delete J[Z];delete V[D.id]}}}function _(D){for(let B in n){let q=n[B],Y=D.isInstancedMesh===!0?D.id:0,V=q[Y];if(V!==void 0){for(let J in V){let Z=V[J];for(let st in Z)h(Z[st].object),delete Z[st];delete V[J]}delete q[Y],Object.keys(q).length===0&&delete n[B]}}}function T(){I(),a=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:b}}function i0(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function s0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Dn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==yn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ln&&!_)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,maxSamples:S,samples:E}}function r0(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Vn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,w=b*4,v=m.clippingState||null;l.value=v,v=h(p,u,w,f);for(let S=0;S!==w;++S)v[S]=e[S];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=f+y*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=f;w!==y;++w,v+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var Ui=4,lu=[.125,.215,.35,.446,.526,.582],ji=20,a0=256,wr=new $i,cu=new zt,vc=null,Mc=0,bc=0,Ec=!1,o0=new R,Ls=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=o0}=r;vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,Mc,bc),this._renderer.xr.enabled=Ec,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:Zn,format:Dn,colorSpace:$s,depthBuffer:!1},i=hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=l0(r)),this._blurMaterial=h0(r,t,e),this._ggxMaterial=c0(r,t,e)}return i}_compileMaterial(t){let e=new W(new He,t);this._renderer.compile(e,wr)}_sceneToCubeUV(t,e,n,i,r){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(cu),d.toneMapping=wn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new Ce,new oe({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,m=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,m=!0):(g.color.copy(cu),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;Ps(i,v*S,w>2?S:0,S,S),d.setRenderTarget(i),m&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Pi||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,wr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:p}=this,y=this._sizeLods[n],g=3*y*(n>p-Ui?n-p+Ui:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Ps(r,g,m,3*y,2*y),i.setRenderTarget(r),i.render(o,wr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ps(t,g,m,3*y,2*y),i.setRenderTarget(t),i.render(o,wr)}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Yt("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[i];d.material=c;let u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),y=r/p,g=isFinite(r)?1+Math.floor(h*y):ji;g>ji&&Vt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ji}`);let m=[],b=0;for(let C=0;C<ji;++C){let _=C/y,T=Math.exp(-_*_/2);m.push(T),C===0?b+=T:C<g&&(b+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/b;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:w}=this;u.dTheta.value=p,u.mipInt.value=w-n;let v=this._sizeLods[i],S=3*v*(i>w-Ui?i-w+Ui:0),E=4*(this._cubeSize-v);Ps(e,S,E,3*v,2*v),l.setRenderTarget(e),l.render(d,wr)}};function l0(s){let t=[],e=[],n=[],i=s,r=s-Ui+1+lu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ui?l=lu[a-s+Ui-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,y=3,g=2,m=1,b=new Float32Array(y*p*f),w=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let E=0;E<f;E++){let C=E%3*2/3-1,_=E>2?0:-1,T=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];b.set(T,y*p*E),w.set(u,g*p*E);let I=[E,E,E,E,E,E];v.set(I,m*p*E)}let S=new He;S.setAttribute("position",new sn(b,y)),S.setAttribute("uv",new sn(w,g)),S.setAttribute("faceIndex",new sn(v,m)),n.push(new W(S,null)),i>Ui&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function hu(s,t,e){let n=new We(s,t,e);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function c0(s,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:a0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function h0(s,t,e){let n=new Float32Array(ji),i=new R(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function uu(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function du(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}var Ho=class extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new or(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ce(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Yn});r.uniforms.tEquirect.value=e;let a=new W(i,r),o=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Be),new Wa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function u0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ya||f===Za)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let y=new Ho(p.height);return y.fromEquirectangularTexture(s,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===Ya||f===Za,y=f===Pi||f===Ki;if(p||y){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Ls(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let b=u.image;return p&&b&&b.height>0||y&&b&&l(b)?(n===null&&(n=new Ls(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Ya?u.mapping=Pi:f===Za&&(u.mapping=Ki),u}function l(u){let f=0,p=6;for(let y=0;y<p;y++)u[y]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function d0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Gi("WebGLRenderer: "+n+" extension not supported."),i}}}function f0(s,t,e,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,y=0;if(p===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let w=0,v=b.length;w<v;w+=3){let S=b[w+0],E=b[w+1],C=b[w+2];u.push(S,E,E,C,C,S)}}else{let b=p.array;y=p.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let S=w+0,E=w+1,C=w+2;u.push(S,E,E,C,C,S)}}let g=new(p.count>=65535?nr:er)(u,1);g.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function p0(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=u[g];e.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function m0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function g0(s,t,e){let n=new WeakMap,i=new De;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*S*4*d),C=new Qs(E,v,S,d);C.type=Ln,C.needsUpdate=!0;let _=w*4;for(let I=0;I<d;I++){let D=g[I],B=m[I],q=b[I],Y=v*S*4*I;for(let V=0;V<D.count;V++){let J=V*_;f===!0&&(i.fromBufferAttribute(D,V),E[Y+J+0]=i.x,E[Y+J+1]=i.y,E[Y+J+2]=i.z,E[Y+J+3]=0),p===!0&&(i.fromBufferAttribute(B,V),E[Y+J+4]=i.x,E[Y+J+5]=i.y,E[Y+J+6]=i.z,E[Y+J+7]=0),y===!0&&(i.fromBufferAttribute(q,V),E[Y+J+8]=i.x,E[Y+J+9]=i.y,E[Y+J+10]=i.z,E[Y+J+11]=q.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new Ct(v,S)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function x0(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var _0={[Ql]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[ec]:"ACES_FILMIC_TONE_MAPPING",[ic]:"AGX_TONE_MAPPING",[sc]:"NEUTRAL_TONE_MAPPING",[nc]:"CUSTOM_TONE_MAPPING"};function y0(s,t,e,n,i,r){let a=new We(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new fi(t,e):void 0}),o=new We(t,e,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new He;l.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new de([0,2,0,0,2,0],2));let c=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new W(l,c),d=new $i(-1,1,1,-1,0,1),u=null,f=null,p=!1,y,g=null,m=[],b=!1;this.setSize=function(w,v){a.setSize(w,v),o.setSize(w,v);for(let S=0;S<m.length;S++){let E=m[S];E.setSize&&E.setSize(w,v)}},this.setEffects=function(w){m=w,b=m.length>0&&m[0].isRenderPass===!0;let v=a.width,S=a.height;for(let E=0;E<m.length;E++){let C=m[E];C.setSize&&C.setSize(v,S)}},this.begin=function(w,v){if(p||w.toneMapping===wn&&m.length===0)return!1;if(g=v,v!==null){let S=v.width,E=v.height;(a.width!==S||a.height!==E)&&this.setSize(S,E)}return b===!1&&w.setRenderTarget(a),y=w.toneMapping,w.toneMapping=wn,!0},this.hasRenderPass=function(){return b},this.end=function(w,v){w.toneMapping=y,p=!0;let S=a,E=o;for(let C=0;C<m.length;C++){let _=m[C];if(_.enabled!==!1&&(_.render(w,E,S,v),_.needsSwap!==!1)){let T=S;S=E,E=T}}if(u!==w.outputColorSpace||f!==w.toneMapping){u=w.outputColorSpace,f=w.toneMapping,c.defines={},ae.getTransfer(u)===xe&&(c.defines.SRGB_TRANSFER="");let C=_0[f];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,w.setRenderTarget(g),w.render(h,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Lu=new fn,wc=new fi(1,1),Du=new Qs,Uu=new va,Nu=new or,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),xu=new Float32Array(4);function Ds(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=fu[i];if(r===void 0&&(r=new Float32Array(i),fu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ke(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Qe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Vo(s,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function v0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function M0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2fv(this.addr,t),Qe(e,t)}}function b0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;s.uniform3fv(this.addr,t),Qe(e,t)}}function E0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4fv(this.addr,t),Qe(e,t)}}function S0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,n))return;xu.set(n),s.uniformMatrix2fv(this.addr,!1,xu),Qe(e,n)}}function T0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,n))return;gu.set(n),s.uniformMatrix3fv(this.addr,!1,gu),Qe(e,n)}}function w0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,n))return;mu.set(n),s.uniformMatrix4fv(this.addr,!1,mu),Qe(e,n)}}function A0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function R0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2iv(this.addr,t),Qe(e,t)}}function C0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;s.uniform3iv(this.addr,t),Qe(e,t)}}function P0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4iv(this.addr,t),Qe(e,t)}}function I0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function L0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2uiv(this.addr,t),Qe(e,t)}}function D0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;s.uniform3uiv(this.addr,t),Qe(e,t)}}function U0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4uiv(this.addr,t),Qe(e,t)}}function N0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wc.compareFunction=e.isReversedDepthBuffer()?Fo:No,r=wc):r=Lu,e.setTexture2D(t||r,i)}function F0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Uu,i)}function B0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Nu,i)}function O0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Du,i)}function H0(s){switch(s){case 5126:return v0;case 35664:return M0;case 35665:return b0;case 35666:return E0;case 35674:return S0;case 35675:return T0;case 35676:return w0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return I0;case 36294:return L0;case 36295:return D0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return O0}}function k0(s,t){s.uniform1fv(this.addr,t)}function z0(s,t){let e=Ds(t,this.size,2);s.uniform2fv(this.addr,e)}function V0(s,t){let e=Ds(t,this.size,3);s.uniform3fv(this.addr,e)}function G0(s,t){let e=Ds(t,this.size,4);s.uniform4fv(this.addr,e)}function W0(s,t){let e=Ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function X0(s,t){let e=Ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function q0(s,t){let e=Ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Y0(s,t){s.uniform1iv(this.addr,t)}function Z0(s,t){s.uniform2iv(this.addr,t)}function $0(s,t){s.uniform3iv(this.addr,t)}function J0(s,t){s.uniform4iv(this.addr,t)}function K0(s,t){s.uniform1uiv(this.addr,t)}function Q0(s,t){s.uniform2uiv(this.addr,t)}function j0(s,t){s.uniform3uiv(this.addr,t)}function tg(s,t){s.uniform4uiv(this.addr,t)}function eg(s,t,e){let n=this.cache,i=t.length,r=Vo(e,i);Ke(n,r)||(s.uniform1iv(this.addr,r),Qe(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=wc:a=Lu;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function ng(s,t,e){let n=this.cache,i=t.length,r=Vo(e,i);Ke(n,r)||(s.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Uu,r[a])}function ig(s,t,e){let n=this.cache,i=t.length,r=Vo(e,i);Ke(n,r)||(s.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Nu,r[a])}function sg(s,t,e){let n=this.cache,i=t.length,r=Vo(e,i);Ke(n,r)||(s.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Du,r[a])}function rg(s){switch(s){case 5126:return k0;case 35664:return z0;case 35665:return V0;case 35666:return G0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return $0;case 35669:case 35673:return J0;case 5125:return K0;case 36294:return Q0;case 36295:return j0;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}var Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=H0(e.type)}},Rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rg(e.type)}},Cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function _u(s,t){s.seq.push(t),s.map[t.id]=t}function ag(s,t,e){let n=s.name,i=n.length;for(Sc.lastIndex=0;;){let r=Sc.exec(n),a=Sc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){_u(e,c===void 0?new Ac(o,s,t):new Rc(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Cc(o),_u(e,d)),e=d}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ag(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function yu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var og=37297,lg=0;function cg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var vu=new $t;function hg(s){ae._getMatrix(vu,ae.workingColorSpace,s);let t=`mat3( ${vu.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(s)){case Js:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Mu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+cg(s.getShaderSource(t),o)}else return r}function ug(s,t){let e=hg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var dg={[Ql]:"Linear",[jl]:"Reinhard",[tc]:"Cineon",[ec]:"ACESFilmic",[ic]:"AgX",[sc]:"Neutral",[nc]:"Custom"};function fg(s,t){let e=dg[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Oo=new R;function pg(){ae.getLuminanceCoefficients(Oo);let s=Oo.x.toFixed(4),t=Oo.y.toFixed(4),e=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function gg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Rr(s){return s!==""}function bu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(s){return s.replace(_g,vg)}var yg=new Map;function vg(s,t){let e=te[t];if(e===void 0){let n=yg.get(t);if(n!==void 0)e=te[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Pc(e)}var Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(s){return s.replace(Mg,bg)}function bg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Eg={[xr]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function Sg(s){return Eg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Tg={[Pi]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE_UV"};function wg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Tg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ag={[Ki]:"ENVMAP_MODE_REFRACTION"};function Rg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ag[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cg={[Kl]:"ENVMAP_BLENDING_MULTIPLY",[Wh]:"ENVMAP_BLENDING_MIX",[Xh]:"ENVMAP_BLENDING_ADD"};function Pg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Cg[s.combine]||"ENVMAP_BLENDING_NONE"}function Ig(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lg(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Sg(e),c=wg(e),h=Rg(e),d=Pg(e),u=Ig(e),f=mg(e),p=gg(r),y=i.createProgram(),g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Rr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Rr).join(`
`),m.length>0&&(m+=`
`)):(g=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),m=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?te.tonemapping_pars_fragment:"",e.toneMapping!==wn?fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,ug("linearToOutputTexel",e.outputColorSpace),pg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),a=Pc(a),a=bu(a,e),a=Eu(a,e),o=Pc(o),o=bu(o,e),o=Eu(o,e),a=Su(a),o=Su(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=b+g+a,v=b+m+o,S=yu(i,i.VERTEX_SHADER,w),E=yu(i,i.FRAGMENT_SHADER,v);i.attachShader(y,S),i.attachShader(y,E),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function C(D){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(y)||"",q=i.getShaderInfoLog(S)||"",Y=i.getShaderInfoLog(E)||"",V=B.trim(),J=q.trim(),Z=Y.trim(),st=!0,ct=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(st=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,S,E);else{let Mt=Mu(i,S,"vertex"),At=Mu(i,E,"fragment");Yt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+Mt+`
`+At)}else V!==""?Vt("WebGLProgram: Program Info Log:",V):(J===""||Z==="")&&(ct=!1);ct&&(D.diagnostics={runnable:st,programLog:V,vertexShader:{log:J,prefix:g},fragmentShader:{log:Z,prefix:m}})}i.deleteShader(S),i.deleteShader(E),_=new Is(i,y),T=xg(i,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(y,og)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=E,this}var Dg=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lc(t),e.set(t,n)),n}},Lc=class{constructor(t){this.id=Dg++,this.code=t,this.usedTimes=0}};function Ug(s){return s===Di||s===Sr||s===Tr}function Ng(s,t,e,n,i,r){let a=new js,o=new Ic,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,T,I,D,B,q){let Y=D.fog,V=B.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,st=t.get(_.envMap||J,Z),ct=st&&st.mapping===_r?st.image.height:null,Mt=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Vt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let At=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Pt=At!==void 0?At.length:0,ue=0;V.morphAttributes.position!==void 0&&(ue=1),V.morphAttributes.normal!==void 0&&(ue=2),V.morphAttributes.color!==void 0&&(ue=3);let ge,le,et,ft;if(Mt){let Ut=Jn[Mt];ge=Ut.vertexShader,le=Ut.fragmentShader}else{ge=_.vertexShader,le=_.fragmentShader;let Ut=o.getVertexShaderStage(_),Le=o.getFragmentShaderStage(_);o.update(_,Ut,Le),et=Ut.id,ft=Le.id}let ht=s.getRenderTarget(),qt=s.state.buffers.depth.getReversed(),Zt=B.isInstancedMesh===!0,It=B.isBatchedMesh===!0,Ne=!!_.map,ee=!!_.matcap,ce=!!st,he=!!_.aoMap,re=!!_.lightMap,Pe=!!_.bumpMap&&_.wireframe===!1,Ve=!!_.normalMap,Ge=!!_.displacementMap,Ye=!!_.emissiveMap,we=!!_.metalnessMap,Ie=!!_.roughnessMap,N=_.anisotropy>0,on=_.clearcoat>0,pe=_.dispersion>0,A=_.iridescence>0,x=_.sheen>0,H=_.transmission>0,G=N&&!!_.anisotropyMap,K=on&&!!_.clearcoatMap,dt=on&&!!_.clearcoatNormalMap,mt=on&&!!_.clearcoatRoughnessMap,Q=A&&!!_.iridescenceMap,nt=A&&!!_.iridescenceThicknessMap,gt=x&&!!_.sheenColorMap,Ft=x&&!!_.sheenRoughnessMap,vt=!!_.specularMap,_t=!!_.specularColorMap,Ht=!!_.specularIntensityMap,Gt=H&&!!_.transmissionMap,Kt=H&&!!_.thicknessMap,U=!!_.gradientMap,pt=!!_.alphaMap,tt=_.alphaTest>0,yt=!!_.alphaHash,wt=!!_.extensions,rt=wn;_.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(rt=s.toneMapping);let Bt={shaderID:Mt,shaderType:_.type,shaderName:_.name,vertexShader:ge,fragmentShader:le,defines:_.defines,customVertexShaderID:et,customFragmentShaderID:ft,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:It,batchingColor:It&&B._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&B.instanceColor!==null,instancingMorph:Zt&&B.morphTexture!==null,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ne,matcap:ee,envMap:ce,envMapMode:ce&&st.mapping,envMapCubeUVHeight:ct,aoMap:he,lightMap:re,bumpMap:Pe,normalMap:Ve,displacementMap:Ge,emissiveMap:Ye,normalMapObjectSpace:Ve&&_.normalMapType===Zh,normalMapTangentSpace:Ve&&_.normalMapType===Uo,packedNormalMap:Ve&&_.normalMapType===Uo&&Ug(_.normalMap.format),metalnessMap:we,roughnessMap:Ie,anisotropy:N,anisotropyMap:G,clearcoat:on,clearcoatMap:K,clearcoatNormalMap:dt,clearcoatRoughnessMap:mt,dispersion:pe,iridescence:A,iridescenceMap:Q,iridescenceThicknessMap:nt,sheen:x,sheenColorMap:gt,sheenRoughnessMap:Ft,specularMap:vt,specularColorMap:_t,specularIntensityMap:Ht,transmission:H,transmissionMap:Gt,thicknessMap:Kt,gradientMap:U,opaque:_.transparent===!1&&_.blending===Wi&&_.alphaToCoverage===!1,alphaMap:pt,alphaTest:tt,alphaHash:yt,combine:_.combine,mapUv:Ne&&p(_.map.channel),aoMapUv:he&&p(_.aoMap.channel),lightMapUv:re&&p(_.lightMap.channel),bumpMapUv:Pe&&p(_.bumpMap.channel),normalMapUv:Ve&&p(_.normalMap.channel),displacementMapUv:Ge&&p(_.displacementMap.channel),emissiveMapUv:Ye&&p(_.emissiveMap.channel),metalnessMapUv:we&&p(_.metalnessMap.channel),roughnessMapUv:Ie&&p(_.roughnessMap.channel),anisotropyMapUv:G&&p(_.anisotropyMap.channel),clearcoatMapUv:K&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&p(_.sheenRoughnessMap.channel),specularMapUv:vt&&p(_.specularMap.channel),specularColorMapUv:_t&&p(_.specularColorMap.channel),specularIntensityMapUv:Ht&&p(_.specularIntensityMap.channel),transmissionMapUv:Gt&&p(_.transmissionMap.channel),thicknessMapUv:Kt&&p(_.thicknessMap.channel),alphaMapUv:pt&&p(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ve||N),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Ne||pt),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&Ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:qt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:Ne&&_.map.isVideoTexture===!0&&ae.getTransfer(_.map.colorSpace)===xe,decodeVideoTextureEmissive:Ye&&_.emissiveMap.isVideoTexture===!0&&ae.getTransfer(_.emissiveMap.colorSpace)===xe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Se,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:wt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&_.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(m(T,_),b(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let T=f[_.type],I;if(T){let D=Jn[T];I=au.clone(D.uniforms)}else I=_.uniforms;return I}function v(_,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new Lg(s,T,_,i),c.push(I),h.set(T,I)),I}function S(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:C}}function Fg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Bg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function wu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Au(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,y,g,m){let b=s[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:m},s[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=p,b.materialVariant=a(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=g,b.group=m),t++,b}function l(u,f,p,y,g,m){let b=o(u,f,p,y,g,m);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):e.push(b)}function c(u,f,p,y,g,m){let b=o(u,f,p,y,g,m);p.transmission>0?n.unshift(b):p.transparent===!0?i.unshift(b):e.unshift(b)}function h(u,f,p){e.length>1&&e.sort(u||Bg),n.length>1&&n.sort(f||wu),i.length>1&&i.sort(f||wu),p&&(e.reverse(),n.reverse(),i.reverse())}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Og(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Au,s.set(n,[a])):i>=r.length?(a=new Au,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Hg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new zt};break;case"SpotLight":e={position:new R,direction:new R,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function kg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var zg=0;function Vg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Gg(s){let t=new Hg,e=kg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,r=new Me,a=new Me;function o(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,p=0,y=0,g=0,m=0,b=0,w=0,v=0,S=0,E=0,C=0;c.sort(Vg);for(let T=0,I=c.length;T<I;T++){let D=c[T],B=D.color,q=D.intensity,Y=D.distance,V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Di?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*q,d+=B.g*q,u+=B.b*q;else if(D.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(D.sh.coefficients[J],q);C++}else if(D.isDirectionalLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,st=e.get(D);st.shadowIntensity=Z.intensity,st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize=Z.mapSize,n.directionalShadow[f]=st,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=D.shadow.matrix,b++}n.directional[f]=J,f++}else if(D.isSpotLight){let J=t.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(B).multiplyScalar(q),J.distance=Y,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,n.spot[y]=J;let Z=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,Z.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[y]=Z.matrix,D.castShadow){let st=e.get(D);st.shadowIntensity=Z.intensity,st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize=Z.mapSize,n.spotShadow[y]=st,n.spotShadowMap[y]=V,v++}y++}else if(D.isRectAreaLight){let J=t.get(D);J.color.copy(B).multiplyScalar(q),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=J,g++}else if(D.isPointLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){let Z=D.shadow,st=e.get(D);st.shadowIntensity=Z.intensity,st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize=Z.mapSize,st.shadowCameraNear=Z.camera.near,st.shadowCameraFar=Z.camera.far,n.pointShadow[p]=st,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=D.shadow.matrix,w++}n.point[p]=J,p++}else if(D.isHemisphereLight){let J=t.get(D);J.skyColor.copy(D.color).multiplyScalar(q),J.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[m]=J,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let _=n.hash;(_.directionalLength!==f||_.pointLength!==p||_.spotLength!==y||_.rectAreaLength!==g||_.hemiLength!==m||_.numDirectionalShadows!==b||_.numPointShadows!==w||_.numSpotShadows!==v||_.numSpotMaps!==S||_.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,_.directionalLength=f,_.pointLength=p,_.spotLength=y,_.rectAreaLength=g,_.hemiLength=m,_.numDirectionalShadows=b,_.numPointShadows=w,_.numSpotShadows=v,_.numSpotMaps=S,_.numLightProbes=C,n.version=zg++)}function l(c,h){let d=0,u=0,f=0,p=0,y=0,g=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let w=c[m];if(w.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(w.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(w.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(w.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),u++}else if(w.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:n}}function Ru(s){let t=new Gg(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Wg(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Ru(s),t.set(i,[o])):r>=a.length?(o=new Ru(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qg=`uniform sampler2D shadow_pass;
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
}`,Yg=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Zg=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Cu=new Me,Ar=new R,Tc=new R;function $g(s,t,e){let n=new Ss,i=new Ct,r=new Ct,a=new De,o=new Ia,l=new La,c={},h=e.maxTextureSize,d={[oi]:rn,[rn]:oi,[Se]:Se},u=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Xg,fragmentShader:qg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new He;p.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new W(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let m=this.type;this.render=function(E,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===qa&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xr);let T=s.getRenderTarget(),I=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Yn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let q=m!==this.type;q&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(V=>V.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,V=E.length;Y<V;Y++){let J=E[Y],Z=J.shadow;if(Z===void 0){Vt("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let st=Z.getFrameExtents();i.multiply(st),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,Z.mapSize.y=r.y));let ct=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=ct,Z.map===null||q===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ws){if(J.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new We(i.x,i.y,{format:Di,type:Zn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new fi(i.x,i.y,Ln),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=Gn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=en,Z.map.depthTexture.magFilter=en}else J.isPointLight?(Z.map=new Ho(i.x),Z.map.depthTexture=new ba(i.x,Hn)):(Z.map=new We(i.x,i.y),Z.map.depthTexture=new fi(i.x,i.y,Hn)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=Gn,this.type===xr?(Z.map.depthTexture.compareFunction=ct?Fo:No,Z.map.depthTexture.minFilter=Be,Z.map.depthTexture.magFilter=Be):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=en,Z.map.depthTexture.magFilter=en);Z.camera.updateProjectionMatrix()}let Mt=Z.map.isWebGLCubeRenderTarget?6:1;for(let At=0;At<Mt;At++){if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,At),s.clear();else{At===0&&(s.setRenderTarget(Z.map),s.clear());let Pt=Z.getViewport(At);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),B.viewport(a)}if(J.isPointLight){let Pt=Z.camera,ue=Z.matrix,ge=J.distance||Pt.far;ge!==Pt.far&&(Pt.far=ge,Pt.updateProjectionMatrix()),Ar.setFromMatrixPosition(J.matrixWorld),Pt.position.copy(Ar),Tc.copy(Pt.position),Tc.add(Yg[At]),Pt.up.copy(Zg[At]),Pt.lookAt(Tc),Pt.updateMatrixWorld(),ue.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Cu.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Cu,Pt.coordinateSystem,Pt.reversedDepth)}else Z.updateMatrices(J);n=Z.getFrustum(),v(C,_,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===ws&&b(Z,_),Z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(T,I,D)};function b(E,C){let _=t.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new We(i.x,i.y,{format:Di,type:Zn})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,_,u,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,_,f,y,null)}function w(E,C,_,T){let I=null,D=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)I=D;else if(I=_.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=I.uuid,q=C.uuid,Y=c[B];Y===void 0&&(Y={},c[B]=Y);let V=Y[q];V===void 0&&(V=I.clone(),Y[q]=V,C.addEventListener("dispose",S)),I=V}if(I.visible=C.visible,I.wireframe=C.wireframe,T===ws?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=s.properties.get(I);B.light=_}return I}function v(E,C,_,T,I){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===ws)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let q=t.update(E),Y=E.material;if(Array.isArray(Y)){let V=q.groups;for(let J=0,Z=V.length;J<Z;J++){let st=V[J],ct=Y[st.materialIndex];if(ct&&ct.visible){let Mt=w(E,ct,T,I);E.onBeforeShadow(s,E,C,_,q,Mt,st),s.renderBufferDirect(_,null,q,Mt,E,st),E.onAfterShadow(s,E,C,_,q,Mt,st)}}}else if(Y.visible){let V=w(E,Y,T,I);E.onBeforeShadow(s,E,C,_,q,V,null),s.renderBufferDirect(_,null,q,V,E,null),E.onAfterShadow(s,E,C,_,q,V,null)}}let B=E.children;for(let q=0,Y=B.length;q<Y;q++)v(B[q],C,_,T,I)}function S(E){E.target.removeEventListener("dispose",S);for(let _ in c){let T=c[_],I=E.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function Jg(s,t){function e(){let U=!1,pt=new De,tt=null,yt=new De(0,0,0,0);return{setMask:function(wt){tt!==wt&&!U&&(s.colorMask(wt,wt,wt,wt),tt=wt)},setLocked:function(wt){U=wt},setClear:function(wt,rt,Bt,Ut,Le){Le===!0&&(wt*=Ut,rt*=Ut,Bt*=Ut),pt.set(wt,rt,Bt,Ut),yt.equals(pt)===!1&&(s.clearColor(wt,rt,Bt,Ut),yt.copy(pt))},reset:function(){U=!1,tt=null,yt.set(-1,0,0,0)}}}function n(){let U=!1,pt=!1,tt=null,yt=null,wt=null;return{setReversed:function(rt){if(pt!==rt){let Bt=t.get("EXT_clip_control");rt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),pt=rt;let Ut=wt;wt=null,this.setClear(Ut)}},getReversed:function(){return pt},setTest:function(rt){rt?ht(s.DEPTH_TEST):qt(s.DEPTH_TEST)},setMask:function(rt){tt!==rt&&!U&&(s.depthMask(rt),tt=rt)},setFunc:function(rt){if(pt&&(rt=su[rt]),yt!==rt){switch(rt){case ca:s.depthFunc(s.NEVER);break;case ha:s.depthFunc(s.ALWAYS);break;case ua:s.depthFunc(s.LESS);break;case Xi:s.depthFunc(s.LEQUAL);break;case da:s.depthFunc(s.EQUAL);break;case fa:s.depthFunc(s.GEQUAL);break;case pa:s.depthFunc(s.GREATER);break;case ma:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=rt}},setLocked:function(rt){U=rt},setClear:function(rt){wt!==rt&&(wt=rt,pt&&(rt=1-rt),s.clearDepth(rt))},reset:function(){U=!1,tt=null,yt=null,wt=null,pt=!1}}}function i(){let U=!1,pt=null,tt=null,yt=null,wt=null,rt=null,Bt=null,Ut=null,Le=null;return{setTest:function(me){U||(me?ht(s.STENCIL_TEST):qt(s.STENCIL_TEST))},setMask:function(me){pt!==me&&!U&&(s.stencilMask(me),pt=me)},setFunc:function(me,An,un){(tt!==me||yt!==An||wt!==un)&&(s.stencilFunc(me,An,un),tt=me,yt=An,wt=un)},setOp:function(me,An,un){(rt!==me||Bt!==An||Ut!==un)&&(s.stencilOp(me,An,un),rt=me,Bt=An,Ut=un)},setLocked:function(me){U=me},setClear:function(me){Le!==me&&(s.clearStencil(me),Le=me)},reset:function(){U=!1,pt=null,tt=null,yt=null,wt=null,rt=null,Bt=null,Ut=null,Le=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],y=null,g=!1,m=null,b=null,w=null,v=null,S=null,E=null,C=null,_=new zt(0,0,0),T=0,I=!1,D=null,B=null,q=null,Y=null,V=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,st=0,ct=s.getParameter(s.VERSION);ct.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(ct)[1]),Z=st>=1):ct.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),Z=st>=2);let Mt=null,At={},Pt=s.getParameter(s.SCISSOR_BOX),ue=s.getParameter(s.VIEWPORT),ge=new De().fromArray(Pt),le=new De().fromArray(ue);function et(U,pt,tt,yt){let wt=new Uint8Array(4),rt=s.createTexture();s.bindTexture(U,rt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<tt;Bt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(pt+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return rt}let ft={};ft[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(s.DEPTH_TEST),a.setFunc(Xi),Pe(!1),Ve(Zl),ht(s.CULL_FACE),he(Yn);function ht(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function qt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Zt(U,pt){return u[U]!==pt?(s.bindFramebuffer(U,pt),u[U]=pt,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function It(U,pt){let tt=p,yt=!1;if(U){tt=f.get(pt),tt===void 0&&(tt=[],f.set(pt,tt));let wt=U.textures;if(tt.length!==wt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,Bt=wt.length;rt<Bt;rt++)tt[rt]=s.COLOR_ATTACHMENT0+rt;tt.length=wt.length,yt=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,yt=!0);yt&&s.drawBuffers(tt)}function Ne(U){return y!==U?(s.useProgram(U),y=U,!0):!1}let ee={[Ti]:s.FUNC_ADD,[Ah]:s.FUNC_SUBTRACT,[Rh]:s.FUNC_REVERSE_SUBTRACT};ee[Ch]=s.MIN,ee[Ph]=s.MAX;let ce={[Ih]:s.ZERO,[Lh]:s.ONE,[Dh]:s.SRC_COLOR,[oa]:s.SRC_ALPHA,[Hh]:s.SRC_ALPHA_SATURATE,[Bh]:s.DST_COLOR,[Nh]:s.DST_ALPHA,[Uh]:s.ONE_MINUS_SRC_COLOR,[la]:s.ONE_MINUS_SRC_ALPHA,[Oh]:s.ONE_MINUS_DST_COLOR,[Fh]:s.ONE_MINUS_DST_ALPHA,[kh]:s.CONSTANT_COLOR,[zh]:s.ONE_MINUS_CONSTANT_COLOR,[Vh]:s.CONSTANT_ALPHA,[Gh]:s.ONE_MINUS_CONSTANT_ALPHA};function he(U,pt,tt,yt,wt,rt,Bt,Ut,Le,me){if(U===Yn){g===!0&&(qt(s.BLEND),g=!1);return}if(g===!1&&(ht(s.BLEND),g=!0),U!==wh){if(U!==m||me!==I){if((b!==Ti||S!==Ti)&&(s.blendEquation(s.FUNC_ADD),b=Ti,S=Ti),me)switch(U){case Wi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case In:s.blendFunc(s.ONE,s.ONE);break;case $l:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Yt("WebGLState: Invalid blending: ",U);break}else switch(U){case Wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case In:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case $l:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",U);break}w=null,v=null,E=null,C=null,_.set(0,0,0),T=0,m=U,I=me}return}wt=wt||pt,rt=rt||tt,Bt=Bt||yt,(pt!==b||wt!==S)&&(s.blendEquationSeparate(ee[pt],ee[wt]),b=pt,S=wt),(tt!==w||yt!==v||rt!==E||Bt!==C)&&(s.blendFuncSeparate(ce[tt],ce[yt],ce[rt],ce[Bt]),w=tt,v=yt,E=rt,C=Bt),(Ut.equals(_)===!1||Le!==T)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Le),_.copy(Ut),T=Le),m=U,I=!1}function re(U,pt){U.side===Se?qt(s.CULL_FACE):ht(s.CULL_FACE);let tt=U.side===rn;pt&&(tt=!tt),Pe(tt),U.blending===Wi&&U.transparent===!1?he(Yn):he(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let yt=U.stencilWrite;o.setTest(yt),yt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):qt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(U){D!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),D=U)}function Ve(U){U!==Sh?(ht(s.CULL_FACE),U!==B&&(U===Zl?s.cullFace(s.BACK):U===Th?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):qt(s.CULL_FACE),B=U}function Ge(U){U!==q&&(Z&&s.lineWidth(U),q=U)}function Ye(U,pt,tt){U?(ht(s.POLYGON_OFFSET_FILL),(Y!==pt||V!==tt)&&(Y=pt,V=tt,a.getReversed()&&(pt=-pt),s.polygonOffset(pt,tt))):qt(s.POLYGON_OFFSET_FILL)}function we(U){U?ht(s.SCISSOR_TEST):qt(s.SCISSOR_TEST)}function Ie(U){U===void 0&&(U=s.TEXTURE0+J-1),Mt!==U&&(s.activeTexture(U),Mt=U)}function N(U,pt,tt){tt===void 0&&(Mt===null?tt=s.TEXTURE0+J-1:tt=Mt);let yt=At[tt];yt===void 0&&(yt={type:void 0,texture:void 0},At[tt]=yt),(yt.type!==U||yt.texture!==pt)&&(Mt!==tt&&(s.activeTexture(tt),Mt=tt),s.bindTexture(U,pt||ft[U]),yt.type=U,yt.texture=pt)}function on(){let U=At[Mt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function pe(){try{s.compressedTexImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function x(){try{s.texSubImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function H(){try{s.texSubImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function K(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function dt(){try{s.texStorage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function mt(){try{s.texStorage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function Q(){try{s.texImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function nt(){try{s.texImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function gt(U){return d[U]!==void 0?d[U]:s.getParameter(U)}function Ft(U,pt){d[U]!==pt&&(s.pixelStorei(U,pt),d[U]=pt)}function vt(U){ge.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ge.copy(U))}function _t(U){le.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),le.copy(U))}function Ht(U,pt){let tt=c.get(pt);tt===void 0&&(tt=new WeakMap,c.set(pt,tt));let yt=tt.get(U);yt===void 0&&(yt=s.getUniformBlockIndex(pt,U.name),tt.set(U,yt))}function Gt(U,pt){let yt=c.get(pt).get(U);l.get(pt)!==yt&&(s.uniformBlockBinding(pt,yt,U.__bindingPointIndex),l.set(pt,yt))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},Mt=null,At={},u={},f=new WeakMap,p=[],y=null,g=!1,m=null,b=null,w=null,v=null,S=null,E=null,C=null,_=new zt(0,0,0),T=0,I=!1,D=null,B=null,q=null,Y=null,V=null,ge.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:qt,bindFramebuffer:Zt,drawBuffers:It,useProgram:Ne,setBlending:he,setMaterial:re,setFlipSided:Pe,setCullFace:Ve,setLineWidth:Ge,setPolygonOffset:Ye,setScissorTest:we,activeTexture:Ie,bindTexture:N,unbindTexture:on,compressedTexImage2D:pe,compressedTexImage3D:A,texImage2D:Q,texImage3D:nt,pixelStorei:Ft,getParameter:gt,updateUBOMapping:Ht,uniformBlockBinding:Gt,texStorage2D:dt,texStorage3D:mt,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:G,compressedTexSubImage3D:K,scissor:vt,viewport:_t,reset:Kt}}function Kg(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,x){return p?new OffscreenCanvas(A,x):Ks("canvas")}function g(A,x,H){let G=1,K=pe(A);if((K.width>H||K.height>H)&&(G=H/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let dt=Math.floor(G*K.width),mt=Math.floor(G*K.height);u===void 0&&(u=y(dt,mt));let Q=x?y(dt,mt):u;return Q.width=dt,Q.height=mt,Q.getContext("2d").drawImage(A,0,0,dt,mt),Vt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+dt+"x"+mt+")."),Q}else return"data"in A&&Vt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function b(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,x,H,G,K,dt=!1){if(A!==null){if(s[A]!==void 0)return s[A];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;G&&(mt=t.get("EXT_texture_norm16"),mt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===s.RED&&(H===s.FLOAT&&(Q=s.R32F),H===s.HALF_FLOAT&&(Q=s.R16F),H===s.UNSIGNED_BYTE&&(Q=s.R8),H===s.UNSIGNED_SHORT&&mt&&(Q=mt.R16_EXT),H===s.SHORT&&mt&&(Q=mt.R16_SNORM_EXT)),x===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Q=s.R8UI),H===s.UNSIGNED_SHORT&&(Q=s.R16UI),H===s.UNSIGNED_INT&&(Q=s.R32UI),H===s.BYTE&&(Q=s.R8I),H===s.SHORT&&(Q=s.R16I),H===s.INT&&(Q=s.R32I)),x===s.RG&&(H===s.FLOAT&&(Q=s.RG32F),H===s.HALF_FLOAT&&(Q=s.RG16F),H===s.UNSIGNED_BYTE&&(Q=s.RG8),H===s.UNSIGNED_SHORT&&mt&&(Q=mt.RG16_EXT),H===s.SHORT&&mt&&(Q=mt.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Q=s.RG8UI),H===s.UNSIGNED_SHORT&&(Q=s.RG16UI),H===s.UNSIGNED_INT&&(Q=s.RG32UI),H===s.BYTE&&(Q=s.RG8I),H===s.SHORT&&(Q=s.RG16I),H===s.INT&&(Q=s.RG32I)),x===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),H===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),H===s.UNSIGNED_INT&&(Q=s.RGB32UI),H===s.BYTE&&(Q=s.RGB8I),H===s.SHORT&&(Q=s.RGB16I),H===s.INT&&(Q=s.RGB32I)),x===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),H===s.UNSIGNED_INT&&(Q=s.RGBA32UI),H===s.BYTE&&(Q=s.RGBA8I),H===s.SHORT&&(Q=s.RGBA16I),H===s.INT&&(Q=s.RGBA32I)),x===s.RGB&&(H===s.UNSIGNED_SHORT&&mt&&(Q=mt.RGB16_EXT),H===s.SHORT&&mt&&(Q=mt.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),x===s.RGBA){let nt=dt?Js:ae.getTransfer(K);H===s.FLOAT&&(Q=s.RGBA32F),H===s.HALF_FLOAT&&(Q=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Q=nt===xe?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&mt&&(Q=mt.RGBA16_EXT),H===s.SHORT&&mt&&(Q=mt.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function S(A,x){let H;return A?x===null||x===Hn||x===Rs?H=s.DEPTH24_STENCIL8:x===Ln?H=s.DEPTH32F_STENCIL8:x===As&&(H=s.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Hn||x===Rs?H=s.DEPTH_COMPONENT24:x===Ln?H=s.DEPTH_COMPONENT32F:x===As&&(H=s.DEPTH_COMPONENT16),H}function E(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==Be?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(A){let x=A.target;x.removeEventListener("dispose",_),D(x)}function T(A){let x=n.get(A);if(x.__webglInit===void 0)return;let H=A.source,G=f.get(H);if(G){let K=G[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(A),Object.keys(G).length===0&&f.delete(H)}n.remove(A)}function I(A){let x=n.get(A);s.deleteTexture(x.__webglTexture);let H=A.source,G=f.get(H);delete G[x.__cacheKey],a.memory.textures--}function D(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let K=0;K<x.__webglFramebuffer[G].length;K++)s.deleteFramebuffer(x.__webglFramebuffer[G][K]);else s.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)s.deleteFramebuffer(x.__webglFramebuffer[G]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=A.textures;for(let G=0,K=H.length;G<K;G++){let dt=n.get(H[G]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(H[G])}n.remove(A)}let B=0;function q(){B=0}function Y(){return B}function V(A){B=A}function J(){let A=B;return A>=i.maxTextures&&Vt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),B+=1,A}function Z(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function st(A,x){let H=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let G=A.image;if(G===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{qt(H,A,x);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+x)}function ct(A,x){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){qt(H,A,x);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+x)}function Mt(A,x){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){qt(H,A,x);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+x)}function At(A,x){let H=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){Zt(H,A,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+x)}let Pt={[li]:s.REPEAT,[Cn]:s.CLAMP_TO_EDGE,[ga]:s.MIRRORED_REPEAT},ue={[en]:s.NEAREST,[qh]:s.NEAREST_MIPMAP_NEAREST,[yr]:s.NEAREST_MIPMAP_LINEAR,[Be]:s.LINEAR,[$a]:s.LINEAR_MIPMAP_NEAREST,[Ii]:s.LINEAR_MIPMAP_LINEAR},ge={[$h]:s.NEVER,[tu]:s.ALWAYS,[Jh]:s.LESS,[No]:s.LEQUAL,[Kh]:s.EQUAL,[Fo]:s.GEQUAL,[Qh]:s.GREATER,[jh]:s.NOTEQUAL};function le(A,x){if(x.type===Ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Be||x.magFilter===$a||x.magFilter===yr||x.magFilter===Ii||x.minFilter===Be||x.minFilter===$a||x.minFilter===yr||x.minFilter===Ii)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Pt[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Pt[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Pt[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ue[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==yr&&x.minFilter!==Ii||x.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function et(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let G=x.source,K=f.get(G);K===void 0&&(K={},f.set(G,K));let dt=Z(x);if(dt!==A.__cacheKey){K[dt]===void 0&&(K[dt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[dt].usedTimes++;let mt=K[A.__cacheKey];mt!==void 0&&(K[A.__cacheKey].usedTimes--,mt.usedTimes===0&&I(x)),A.__cacheKey=dt,A.__webglTexture=K[dt].texture}return H}function ft(A,x,H){return Math.floor(Math.floor(A/H)/x)}function ht(A,x,H,G){let dt=A.updateRanges;if(dt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,H,G,x.data);else{dt.sort((Ft,vt)=>Ft.start-vt.start);let mt=0;for(let Ft=1;Ft<dt.length;Ft++){let vt=dt[mt],_t=dt[Ft],Ht=vt.start+vt.count,Gt=ft(_t.start,x.width,4),Kt=ft(vt.start,x.width,4);_t.start<=Ht+1&&Gt===Kt&&ft(_t.start+_t.count-1,x.width,4)===Gt?vt.count=Math.max(vt.count,_t.start+_t.count-vt.start):(++mt,dt[mt]=_t)}dt.length=mt+1;let Q=e.getParameter(s.UNPACK_ROW_LENGTH),nt=e.getParameter(s.UNPACK_SKIP_PIXELS),gt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Ft=0,vt=dt.length;Ft<vt;Ft++){let _t=dt[Ft],Ht=Math.floor(_t.start/4),Gt=Math.ceil(_t.count/4),Kt=Ht%x.width,U=Math.floor(Ht/x.width),pt=Gt,tt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,Kt,U,pt,tt,H,G,x.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(s.UNPACK_SKIP_ROWS,gt)}}function qt(A,x,H){let G=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=s.TEXTURE_3D);let K=et(A,x),dt=x.source;e.bindTexture(G,A.__webglTexture,s.TEXTURE0+H);let mt=n.get(dt);if(dt.version!==mt.__version||K===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let tt=ae.getPrimaries(ae.workingColorSpace),yt=x.colorSpace===mi?null:ae.getPrimaries(x.colorSpace),wt=x.colorSpace===mi||tt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let nt=g(x.image,!1,i.maxTextureSize);nt=on(x,nt);let gt=r.convert(x.format,x.colorSpace),Ft=r.convert(x.type),vt=v(x.internalFormat,gt,Ft,x.normalized,x.colorSpace,x.isVideoTexture);le(G,x);let _t,Ht=x.mipmaps,Gt=x.isVideoTexture!==!0,Kt=mt.__version===void 0||K===!0,U=dt.dataReady,pt=E(x,nt);if(x.isDepthTexture)vt=S(x.format===Li,x.type),Kt&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,vt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,vt,nt.width,nt.height,0,gt,Ft,null));else if(x.isDataTexture)if(Ht.length>0){Gt&&Kt&&e.texStorage2D(s.TEXTURE_2D,pt,vt,Ht[0].width,Ht[0].height);for(let tt=0,yt=Ht.length;tt<yt;tt++)_t=Ht[tt],Gt?U&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,_t.width,_t.height,gt,Ft,_t.data):e.texImage2D(s.TEXTURE_2D,tt,vt,_t.width,_t.height,0,gt,Ft,_t.data);x.generateMipmaps=!1}else Gt?(Kt&&e.texStorage2D(s.TEXTURE_2D,pt,vt,nt.width,nt.height),U&&ht(x,nt,gt,Ft)):e.texImage2D(s.TEXTURE_2D,0,vt,nt.width,nt.height,0,gt,Ft,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Gt&&Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,vt,Ht[0].width,Ht[0].height,nt.depth);for(let tt=0,yt=Ht.length;tt<yt;tt++)if(_t=Ht[tt],x.format!==Dn)if(gt!==null)if(Gt){if(U)if(x.layerUpdates.size>0){let wt=yc(_t.width,_t.height,x.format,x.type);for(let rt of x.layerUpdates){let Bt=_t.data.subarray(rt*wt/_t.data.BYTES_PER_ELEMENT,(rt+1)*wt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,rt,_t.width,_t.height,1,gt,Bt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,_t.width,_t.height,nt.depth,gt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,vt,_t.width,_t.height,nt.depth,0,_t.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,_t.width,_t.height,nt.depth,gt,Ft,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,vt,_t.width,_t.height,nt.depth,0,gt,Ft,_t.data)}else{Gt&&Kt&&e.texStorage2D(s.TEXTURE_2D,pt,vt,Ht[0].width,Ht[0].height);for(let tt=0,yt=Ht.length;tt<yt;tt++)_t=Ht[tt],x.format!==Dn?gt!==null?Gt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,vt,_t.width,_t.height,0,_t.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?U&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,_t.width,_t.height,gt,Ft,_t.data):e.texImage2D(s.TEXTURE_2D,tt,vt,_t.width,_t.height,0,gt,Ft,_t.data)}else if(x.isDataArrayTexture)if(Gt){if(Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,vt,nt.width,nt.height,nt.depth),U)if(x.layerUpdates.size>0){let tt=yc(nt.width,nt.height,x.format,x.type);for(let yt of x.layerUpdates){let wt=nt.data.subarray(yt*tt/nt.data.BYTES_PER_ELEMENT,(yt+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,nt.width,nt.height,1,gt,Ft,wt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ft,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,nt.width,nt.height,nt.depth,0,gt,Ft,nt.data);else if(x.isData3DTexture)Gt?(Kt&&e.texStorage3D(s.TEXTURE_3D,pt,vt,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ft,nt.data)):e.texImage3D(s.TEXTURE_3D,0,vt,nt.width,nt.height,nt.depth,0,gt,Ft,nt.data);else if(x.isFramebufferTexture){if(Kt)if(Gt)e.texStorage2D(s.TEXTURE_2D,pt,vt,nt.width,nt.height);else{let tt=nt.width,yt=nt.height;for(let wt=0;wt<pt;wt++)e.texImage2D(s.TEXTURE_2D,wt,vt,tt,yt,0,gt,Ft,null),tt>>=1,yt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let tt=s.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),nt.parentNode!==tt){tt.appendChild(nt),d.add(x),tt.onpaint=yt=>{let wt=yt.changedElements;for(let rt of d)wt.includes(rt.image)&&(rt.needsUpdate=!0)},tt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,nt);else{let wt=s.RGBA,rt=s.RGBA,Bt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,wt,rt,Bt,nt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Gt&&Kt){let tt=pe(Ht[0]);e.texStorage2D(s.TEXTURE_2D,pt,vt,tt.width,tt.height)}for(let tt=0,yt=Ht.length;tt<yt;tt++)_t=Ht[tt],Gt?U&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,gt,Ft,_t):e.texImage2D(s.TEXTURE_2D,tt,vt,gt,Ft,_t);x.generateMipmaps=!1}else if(Gt){if(Kt){let tt=pe(nt);e.texStorage2D(s.TEXTURE_2D,pt,vt,tt.width,tt.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Ft,nt)}else e.texImage2D(s.TEXTURE_2D,0,vt,gt,Ft,nt);m(x)&&b(G),mt.__version=dt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Zt(A,x,H){if(x.image.length!==6)return;let G=et(A,x),K=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+H);let dt=n.get(K);if(K.version!==dt.__version||G===!0){e.activeTexture(s.TEXTURE0+H);let mt=ae.getPrimaries(ae.workingColorSpace),Q=x.colorSpace===mi?null:ae.getPrimaries(x.colorSpace),nt=x.colorSpace===mi||mt===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let gt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ft=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let rt=0;rt<6;rt++)!gt&&!Ft?vt[rt]=g(x.image[rt],!0,i.maxCubemapSize):vt[rt]=Ft?x.image[rt].image:x.image[rt],vt[rt]=on(x,vt[rt]);let _t=vt[0],Ht=r.convert(x.format,x.colorSpace),Gt=r.convert(x.type),Kt=v(x.internalFormat,Ht,Gt,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,pt=dt.__version===void 0||G===!0,tt=K.dataReady,yt=E(x,_t);le(s.TEXTURE_CUBE_MAP,x);let wt;if(gt){U&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Kt,_t.width,_t.height);for(let rt=0;rt<6;rt++){wt=vt[rt].mipmaps;for(let Bt=0;Bt<wt.length;Bt++){let Ut=wt[Bt];x.format!==Dn?Ht!==null?U?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,0,0,Ut.width,Ut.height,Ht,Ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,Kt,Ut.width,Ut.height,0,Ut.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,0,0,Ut.width,Ut.height,Ht,Gt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,Kt,Ut.width,Ut.height,0,Ht,Gt,Ut.data)}}}else{if(wt=x.mipmaps,U&&pt){wt.length>0&&yt++;let rt=pe(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Kt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ft){U?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,vt[rt].width,vt[rt].height,Ht,Gt,vt[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,vt[rt].width,vt[rt].height,0,Ht,Gt,vt[rt].data);for(let Bt=0;Bt<wt.length;Bt++){let Le=wt[Bt].image[rt].image;U?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,0,0,Le.width,Le.height,Ht,Gt,Le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,Kt,Le.width,Le.height,0,Ht,Gt,Le.data)}}else{U?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ht,Gt,vt[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,Ht,Gt,vt[rt]);for(let Bt=0;Bt<wt.length;Bt++){let Ut=wt[Bt];U?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,0,0,Ht,Gt,Ut.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,Kt,Ht,Gt,Ut.image[rt])}}}m(x)&&b(s.TEXTURE_CUBE_MAP),dt.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function It(A,x,H,G,K,dt){let mt=r.convert(H.format,H.colorSpace),Q=r.convert(H.type),nt=v(H.internalFormat,mt,Q,H.normalized,H.colorSpace),gt=n.get(x),Ft=n.get(H);if(Ft.__renderTarget=x,!gt.__hasExternalTextures){let vt=Math.max(1,x.width>>dt),_t=Math.max(1,x.height>>dt);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,dt,nt,vt,_t,x.depth,0,mt,Q,null):e.texImage2D(K,dt,nt,vt,_t,0,mt,Q,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Ie(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,K,Ft.__webglTexture,0,we(x)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,K,Ft.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(A,x,H){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){let G=x.depthTexture,K=G&&G.isDepthTexture?G.type:null,dt=S(x.stencilBuffer,K),mt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we(x),dt,x.width,x.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,we(x),dt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,dt,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,A)}else{let G=x.textures;for(let K=0;K<G.length;K++){let dt=G[K],mt=r.convert(dt.format,dt.colorSpace),Q=r.convert(dt.type),nt=v(dt.internalFormat,mt,Q,dt.normalized,dt.colorSpace);Ie(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we(x),nt,x.width,x.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,we(x),nt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,nt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(A,x,H){let G=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),le(s.TEXTURE_CUBE_MAP,x.depthTexture);let gt=r.convert(x.depthTexture.format),Ft=r.convert(x.depthTexture.type),vt;x.depthTexture.format===Gn?vt=s.DEPTH_COMPONENT24:x.depthTexture.format===Li&&(vt=s.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,vt,x.width,x.height,0,gt,Ft,null)}}else st(x.depthTexture,0);let dt=K.__webglTexture,mt=we(x),Q=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,nt=x.depthTexture.format===Li?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Gn)Ie(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,Q,dt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,nt,Q,dt,0);else if(x.depthTexture.format===Li)Ie(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,Q,dt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,nt,Q,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(A){let x=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let G=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=G}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let G=0;G<6;G++)ee(x.__webglFramebuffer[G],A,G);else{let G=A.texture.mipmaps;G&&G.length>0?ee(x.__webglFramebuffer[0],A,0):ee(x.__webglFramebuffer,A,0)}else if(H){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=s.createRenderbuffer(),Ne(x.__webglDepthbuffer[G],A,!1);else{let K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=x.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,dt)}}else{let G=A.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ne(x.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,dt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function he(A,x,H){let G=n.get(A);x!==void 0&&It(G.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&ce(A)}function re(A){let x=A.texture,H=n.get(A),G=n.get(x);A.addEventListener("dispose",_);let K=A.textures,dt=A.isWebGLCubeRenderTarget===!0,mt=K.length>1;if(mt||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=x.version,a.memory.textures++),dt){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let nt=0;nt<x.mipmaps.length;nt++)H.__webglFramebuffer[Q][nt]=s.createFramebuffer()}else H.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)H.__webglFramebuffer[Q]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(mt)for(let Q=0,nt=K.length;Q<nt;Q++){let gt=n.get(K[Q]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Ie(A)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<K.length;Q++){let nt=K[Q];H.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);let gt=r.convert(nt.format,nt.colorSpace),Ft=r.convert(nt.type),vt=v(nt.internalFormat,gt,Ft,nt.normalized,nt.colorSpace,A.isXRRenderTarget===!0),_t=we(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,vt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),le(s.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)It(H.__webglFramebuffer[Q][nt],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,nt);else It(H.__webglFramebuffer[Q],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(x)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let Q=0,nt=K.length;Q<nt;Q++){let gt=K[Q],Ft=n.get(gt),vt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(vt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,Ft.__webglTexture),le(vt,gt),It(H.__webglFramebuffer,A,gt,s.COLOR_ATTACHMENT0+Q,vt,0),m(gt)&&b(vt)}e.unbindTexture()}else{let Q=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,G.__webglTexture),le(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)It(H.__webglFramebuffer[nt],A,x,s.COLOR_ATTACHMENT0,Q,nt);else It(H.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,Q,0);m(x)&&b(Q),e.unbindTexture()}A.depthBuffer&&ce(A)}function Pe(A){let x=A.textures;for(let H=0,G=x.length;H<G;H++){let K=x[H];if(m(K)){let dt=w(A),mt=n.get(K).__webglTexture;e.bindTexture(dt,mt),b(dt),e.unbindTexture()}}}let Ve=[],Ge=[];function Ye(A){if(A.samples>0){if(Ie(A)===!1){let x=A.textures,H=A.width,G=A.height,K=s.COLOR_BUFFER_BIT,dt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=n.get(A),Q=x.length>1;if(Q)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let nt=A.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Ft=n.get(x[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ft,0)}s.blitFramebuffer(0,0,H,G,0,0,H,G,K,s.NEAREST),l===!0&&(Ve.length=0,Ge.length=0,Ve.push(s.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ve.push(dt),Ge.push(dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ve))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Ft=n.get(x[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function we(A){return Math.min(i.maxSamples,A.samples)}function Ie(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function on(A,x){let H=A.colorSpace,G=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==$s&&H!==mi&&(ae.getTransfer(H)===xe?(G!==Dn||K!==yn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",H)),x}function pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=q,this.getTextureUnits=Y,this.setTextureUnits=V,this.setTexture2D=st,this.setTexture2DArray=ct,this.setTexture3D=Mt,this.setTextureCube=At,this.rebindTextures=he,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Qg(s,t){function e(n,i=mi){let r,a=ae.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===Ka)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ac)return s.BYTE;if(n===oc)return s.SHORT;if(n===As)return s.UNSIGNED_SHORT;if(n===Ja)return s.INT;if(n===Hn)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===Zn)return s.HALF_FLOAT;if(n===hc)return s.ALPHA;if(n===uc)return s.RGB;if(n===Dn)return s.RGBA;if(n===Gn)return s.DEPTH_COMPONENT;if(n===Li)return s.DEPTH_STENCIL;if(n===ja)return s.RED;if(n===to)return s.RED_INTEGER;if(n===Di)return s.RG;if(n===eo)return s.RG_INTEGER;if(n===no)return s.RGBA_INTEGER;if(n===vr||n===Mr||n===br||n===Er)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===Sr||n===fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===lo)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===co)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ho)return r.COMPRESSED_R11_EAC;if(n===uo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sr)return r.COMPRESSED_RG11_EAC;if(n===fo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===po||n===mo||n===go||n===xo||n===_o||n===yo||n===vo||n===Mo||n===bo||n===Eo||n===So||n===To||n===wo||n===Ao)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===po)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===So)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Co||n===Po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ro)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Io||n===Lo||n===Tr||n===Do)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
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

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:jg,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new W(new be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uc=class extends Wn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,y=typeof XRWebGLBinding<"u",g=new Dc,m={},b=e.getContextAttributes(),w=null,v=null,S=[],E=[],C=new Ct,_=null,T=new $e;T.viewport=new De;let I=new $e;I.viewport=new De;let D=[T,I],B=new Xa,q=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ft=S[et];return ft===void 0&&(ft=new Es,S[et]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(et){let ft=S[et];return ft===void 0&&(ft=new Es,S[et]=ft),ft.getGripSpace()},this.getHand=function(et){let ft=S[et];return ft===void 0&&(ft=new Es,S[et]=ft),ft.getHandSpace()};function V(et){let ft=E.indexOf(et.inputSource);if(ft===-1)return;let ht=S[ft];ht!==void 0&&(ht.update(et.inputSource,et.frame,c||a),ht.dispatchEvent({type:et.type,data:et.inputSource}))}function J(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",Z);for(let et=0;et<S.length;et++){let ft=E[et];ft!==null&&(E[et]=null,S[et].disconnect(ft))}q=null,Y=null,g.reset();for(let et in m)delete m[et];t.setRenderTarget(w),f=null,u=null,d=null,i=null,v=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(et){if(i=et,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",J),i.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,qt=null,Zt=null;b.depth&&(Zt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=b.stencil?Li:Gn,qt=b.stencil?Rs:Hn);let It={colorFormat:e.RGBA8,depthFormat:Zt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(It),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new We(u.textureWidth,u.textureHeight,{format:Dn,type:yn,depthTexture:new fi(u.textureWidth,u.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ht={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ht),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new We(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(et){for(let ft=0;ft<et.removed.length;ft++){let ht=et.removed[ft],qt=E.indexOf(ht);qt>=0&&(E[qt]=null,S[qt].disconnect(ht))}for(let ft=0;ft<et.added.length;ft++){let ht=et.added[ft],qt=E.indexOf(ht);if(qt===-1){for(let It=0;It<S.length;It++)if(It>=E.length){E.push(ht),qt=It;break}else if(E[It]===null){E[It]=ht,qt=It;break}if(qt===-1)break}let Zt=S[qt];Zt&&Zt.connect(ht)}}let st=new R,ct=new R;function Mt(et,ft,ht){st.setFromMatrixPosition(ft.matrixWorld),ct.setFromMatrixPosition(ht.matrixWorld);let qt=st.distanceTo(ct),Zt=ft.projectionMatrix.elements,It=ht.projectionMatrix.elements,Ne=Zt[14]/(Zt[10]-1),ee=Zt[14]/(Zt[10]+1),ce=(Zt[9]+1)/Zt[5],he=(Zt[9]-1)/Zt[5],re=(Zt[8]-1)/Zt[0],Pe=(It[8]+1)/It[0],Ve=Ne*re,Ge=Ne*Pe,Ye=qt/(-re+Pe),we=Ye*-re;if(ft.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(we),et.translateZ(Ye),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Zt[10]===-1)et.projectionMatrix.copy(ft.projectionMatrix),et.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let Ie=Ne+Ye,N=ee+Ye,on=Ve-we,pe=Ge+(qt-we),A=ce*ee/N*Ie,x=he*ee/N*Ie;et.projectionMatrix.makePerspective(on,pe,A,x,Ie,N),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function At(et,ft){ft===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ft.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(i===null)return;let ft=et.near,ht=et.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(ht=g.depthFar)),B.near=I.near=T.near=ft,B.far=I.far=T.far=ht,(q!==B.near||Y!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),q=B.near,Y=B.far),B.layers.mask=et.layers.mask|6,T.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let qt=et.parent,Zt=B.cameras;At(B,qt);for(let It=0;It<Zt.length;It++)At(Zt[It],qt);Zt.length===2?Mt(B,T,I):B.projectionMatrix.copy(T.projectionMatrix),Pt(et,B,qt)};function Pt(et,ft,ht){ht===null?et.matrix.copy(ft.matrixWorld):(et.matrix.copy(ht.matrixWorld),et.matrix.invert(),et.matrix.multiply(ft.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ft.projectionMatrix),et.projectionMatrixInverse.copy(ft.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=qi*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(et){l=et,u!==null&&(u.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(et){return m[et]};let ue=null;function ge(et,ft){if(h=ft.getViewerPose(c||a),p=ft,h!==null){let ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let qt=!1;ht.length!==B.cameras.length&&(B.cameras.length=0,qt=!0);for(let ee=0;ee<ht.length;ee++){let ce=ht[ee],he=null;if(f!==null)he=f.getViewport(ce);else{let Pe=d.getViewSubImage(u,ce);he=Pe.viewport,ee===0&&(t.setRenderTargetTextures(v,Pe.colorTexture,Pe.depthStencilTexture),t.setRenderTarget(v))}let re=D[ee];re===void 0&&(re=new $e,re.layers.enable(ee),re.viewport=new De,D[ee]=re),re.matrix.fromArray(ce.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ce.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(he.x,he.y,he.width,he.height),ee===0&&(B.matrix.copy(re.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),qt===!0&&B.cameras.push(re)}let Zt=i.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let ee=d.getDepthInformation(ht[0]);ee&&ee.isValid&&ee.texture&&g.init(ee,i.renderState)}if(Zt&&Zt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let ee=0;ee<ht.length;ee++){let ce=ht[ee].camera;if(ce){let he=m[ce];he||(he=new lr,m[ce]=he);let re=d.getCameraImage(ce);he.sourceTexture=re}}}}for(let ht=0;ht<S.length;ht++){let qt=E[ht],Zt=S[ht];qt!==null&&Zt!==void 0&&Zt.update(qt,ft,c||a)}ue&&ue(et,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),p=null}let le=new Pu;le.setAnimationLoop(ge),this.setAnimationLoop=function(et){ue=et},this.dispose=function(){}}},ex=new Me,Fu=new $t;Fu.set(-1,0,0,0,1,0,0,0,1);function nx(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,gc(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,b,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,b,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),w=b.envMap,v=b.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(ex.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Fu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ix(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let E=S.program;n.uniformBlockBinding(v,E)}function c(v,S){let E=i[v.id];E===void 0&&(g(v),E=h(v),i[v.id]=E,v.addEventListener("dispose",b));let C=S.program;n.updateUBOMapping(v,C);let _=t.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){let S=d();v.__bindingPointIndex=S;let E=s.createBuffer(),C=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,E),E}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=i[v.id],E=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,T=E.length;_<T;_++){let I=E[_];if(Array.isArray(I))for(let D=0,B=I.length;D<B;D++)f(I[D],_,D,C);else f(I,_,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,S,E,C){if(y(v,S,E,C)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let I=0;for(let D=0;D<T.length;D++){let B=T[D],q=m(B);p(B,v.__data,I),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function p(v,S,E){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,E)}function y(v,S,E,C){let _=v.value,T=S+"_"+E;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{let I=C[T];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function g(v){let S=v.uniforms,E=0,C=16;for(let T=0,I=S.length;T<I;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let B=0,q=D.length;B<q;B++){let Y=D[B],V=Array.isArray(Y.value)?Y.value:[Y.value];for(let J=0,Z=V.length;J<Z;J++){let st=V[J],ct=m(st),Mt=E%C,At=Mt%ct.boundary,Pt=Mt+At;E+=At,Pt!==0&&C-Pt<ct.storage&&(E+=C-Pt),Y.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=ct.storage}}}let _=E%C;return _>0&&(E+=C-_),v.__size=E,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),S}function b(v){let S=v.target;S.removeEventListener("dispose",b);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function w(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}var sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function rx(){return $n===null&&($n=new sr(sx,16,16,Di,Zn),$n.name="DFG_LUT",$n.minFilter=Be,$n.magFilter=Be,$n.wrapS=Cn,$n.wrapT=Cn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var ko=class{constructor(t={}){let{canvas:e=eu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=yn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=f,g=new Set([no,eo,to]),m=new Set([yn,Hn,As,Rs,Ka,Qa]),b=new Uint32Array(4),w=new Int32Array(4),v=new R,S=null,E=null,C=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,B=null,q=null,Y=null,V=null;this._outputColorSpace=Je;let J=0,Z=0,st=null,ct=-1,Mt=null,At=new De,Pt=new De,ue=null,ge=new zt(0),le=0,et=e.width,ft=e.height,ht=1,qt=null,Zt=null,It=new De(0,0,et,ft),Ne=new De(0,0,et,ft),ee=!1,ce=new Ss,he=!1,re=!1,Pe=new Me,Ve=new R,Ge=new De,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ie(){return st===null?ht:1}let N=n;function on(M,F){return e.getContext(M,F)}try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",An,!1),N===null){let F="webgl2";if(N=on(F,M),N===null)throw on(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Yt("WebGLRenderer: "+M.message),M}let pe,A,x,H,G,K,dt,mt,Q,nt,gt,Ft,vt,_t,Ht,Gt,Kt,U,pt,tt,yt,wt,rt;function Bt(){pe=new d0(N),pe.init(),yt=new Qg(N,pe),A=new s0(N,pe,t,yt),x=new Jg(N,pe),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),q=N.createFramebuffer(),Y=N.createFramebuffer(),V=N.createFramebuffer(),H=new m0(N),G=new Fg,K=new Kg(N,pe,x,G,A,yt,H),dt=new u0(I),mt=new yf(N),wt=new n0(N,mt),Q=new f0(N,mt,H,wt),nt=new x0(N,Q,mt,wt,H),U=new g0(N,A,K),Ht=new r0(G),gt=new Ng(I,dt,pe,A,wt,Ht),Ft=new nx(I,G),vt=new Og,_t=new Wg(pe),Kt=new e0(I,dt,x,nt,p,l),Gt=new $g(I,nt,A),rt=new ix(N,H,A,x),pt=new i0(N,pe,H),tt=new p0(N,pe,H),H.programs=gt.programs,I.capabilities=A,I.extensions=pe,I.properties=G,I.renderLists=vt,I.shadowMap=Gt,I.state=x,I.info=H}Bt(),y!==yn&&(T=new y0(y,e.width,e.height,o,i,r));let Ut=new Uc(I,N);this.xr=Ut,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=pe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=pe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(M){M!==void 0&&(ht=M,this.setSize(et,ft,!1))},this.getSize=function(M){return M.set(et,ft)},this.setSize=function(M,F,X=!0){if(Ut.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}et=M,ft=F,e.width=Math.floor(M*ht),e.height=Math.floor(F*ht),X===!0&&(e.style.width=M+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(et*ht,ft*ht).floor()},this.setDrawingBufferSize=function(M,F,X){et=M,ft=F,ht=X,e.width=Math.floor(M*X),e.height=Math.floor(F*X),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(y===yn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(At)},this.getViewport=function(M){return M.copy(It)},this.setViewport=function(M,F,X,k){M.isVector4?It.set(M.x,M.y,M.z,M.w):It.set(M,F,X,k),x.viewport(At.copy(It).multiplyScalar(ht).round())},this.getScissor=function(M){return M.copy(Ne)},this.setScissor=function(M,F,X,k){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,F,X,k),x.scissor(Pt.copy(Ne).multiplyScalar(ht).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(M){x.setScissorTest(ee=M)},this.setOpaqueSort=function(M){qt=M},this.setTransparentSort=function(M){Zt=M},this.getClearColor=function(M){return M.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,X=!0){let k=0;if(M){let z=!1;if(st!==null){let bt=st.texture.format;z=g.has(bt)}if(z){let bt=st.texture.type,Rt=m.has(bt),Et=Kt.getClearColor(),Lt=Kt.getClearAlpha(),Ot=Et.r,Wt=Et.g,Qt=Et.b;Rt?(b[0]=Ot,b[1]=Wt,b[2]=Qt,b[3]=Lt,N.clearBufferuiv(N.COLOR,0,b)):(w[0]=Ot,w[1]=Wt,w[2]=Qt,w[3]=Lt,N.clearBufferiv(N.COLOR,0,w))}else k|=N.COLOR_BUFFER_BIT}F&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",An,!1),Kt.dispose(),vt.dispose(),_t.dispose(),G.dispose(),dt.dispose(),nt.dispose(),wt.dispose(),rt.dispose(),gt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Lr),Ut.removeEventListener("sessionend",ts),jn.stop()};function Le(M){M.preventDefault(),fc("WebGLRenderer: Context Lost."),D=!0}function me(){fc("WebGLRenderer: Context Restored."),D=!1;let M=H.autoReset,F=Gt.enabled,X=Gt.autoUpdate,k=Gt.needsUpdate,z=Gt.type;Bt(),H.autoReset=M,Gt.enabled=F,Gt.autoUpdate=X,Gt.needsUpdate=k,Gt.type=z}function An(M){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function un(M){let F=M.target;F.removeEventListener("dispose",un),gi(F)}function gi(M){ll(M),G.remove(M)}function ll(M){let F=G.get(M).programs;F!==void 0&&(F.forEach(function(X){gt.releaseProgram(X)}),M.isShaderMaterial&&gt.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,X,k,z,bt){F===null&&(F=Ye);let Rt=z.isMesh&&z.matrixWorld.determinantAffine()<0,Et=Fr(M,F,X,k,z);x.setMaterial(k,Rt);let Lt=X.index,Ot=1;if(k.wireframe===!0){if(Lt=Q.getWireframeAttribute(X),Lt===void 0)return;Ot=2}let Wt=X.drawRange,Qt=X.attributes.position,kt=Wt.start*Ot,fe=(Wt.start+Wt.count)*Ot;bt!==null&&(kt=Math.max(kt,bt.start*Ot),fe=Math.min(fe,(bt.start+bt.count)*Ot)),Lt!==null?(kt=Math.max(kt,0),fe=Math.min(fe,Lt.count)):Qt!=null&&(kt=Math.max(kt,0),fe=Math.min(fe,Qt.count));let Fe=fe-kt;if(Fe<0||Fe===1/0)return;wt.setup(z,k,Et,X,Lt);let Ae,ye=pt;if(Lt!==null&&(Ae=mt.get(Lt),ye=tt,ye.setIndex(Ae)),z.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*Ie()),ye.setMode(N.LINES)):ye.setMode(N.TRIANGLES);else if(z.isLine){let L=k.linewidth;L===void 0&&(L=1),x.setLineWidth(L*Ie()),z.isLineSegments?ye.setMode(N.LINES):z.isLineLoop?ye.setMode(N.LINE_LOOP):ye.setMode(N.LINE_STRIP)}else z.isPoints?ye.setMode(N.POINTS):z.isSprite&&ye.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))ye.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let L=z._multiDrawStarts,P=z._multiDrawCounts,$=z._multiDrawCount,O=Lt?mt.get(Lt).bytesPerElement:1,it=G.get(k).currentProgram.getUniforms();for(let ot=0;ot<$;ot++)it.setValue(N,"_gl_DrawID",ot),ye.render(L[ot]/O,P[ot])}else if(z.isInstancedMesh)ye.renderInstances(kt,Fe,z.count);else if(X.isInstancedBufferGeometry){let L=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,P=Math.min(X.instanceCount,L);ye.renderInstances(kt,Fe,P)}else ye.render(kt,Fe)};function Ir(M,F,X){M.transparent===!0&&M.side===Se&&M.forceSinglePass===!1?(M.side=rn,M.needsUpdate=!0,es(M,F,X),M.side=oi,M.needsUpdate=!0,es(M,F,X),M.side=Se):es(M,F,X)}this.compile=function(M,F,X=null){X===null&&(X=M),E=_t.get(X),E.init(F),_.push(E),X.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),M!==X&&M.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();let k=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let bt=z.material;if(bt)if(Array.isArray(bt))for(let Rt=0;Rt<bt.length;Rt++){let Et=bt[Rt];Ir(Et,X,z),k.add(Et)}else Ir(bt,X,z),k.add(bt)}),E=_.pop(),k},this.compileAsync=function(M,F,X=null){let k=this.compile(M,F,X);return new Promise(z=>{function bt(){if(k.forEach(function(Rt){G.get(Rt).currentProgram.isReady()&&k.delete(Rt)}),k.size===0){z(M);return}setTimeout(bt,10)}pe.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Fs=null;function xi(M){Fs&&Fs(M)}function Lr(){jn.stop()}function ts(){jn.start()}let jn=new Pu;jn.setAnimationLoop(xi),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(M){Fs=M,Ut.setAnimationLoop(M),M===null?jn.stop():jn.start()},Ut.addEventListener("sessionstart",Lr),Ut.addEventListener("sessionend",ts),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(M,F);let X=Ut.enabled===!0&&Ut.isPresenting===!0,k=T!==null&&(st===null||X)&&T.begin(I,st);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(F),F=Ut.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,F,st),E=_t.get(M,_.length),E.init(F),E.state.textureUnits=K.getTextureUnits(),_.push(E),Pe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ce.setFromProjectionMatrix(Pe,On,F.reversedDepth),re=this.localClippingEnabled,he=Ht.init(this.clippingPlanes,re),S=vt.get(M,C.length),S.init(),C.push(S),Ut.enabled===!0&&Ut.isPresenting===!0){let Rt=I.xr.getDepthSensingMesh();Rt!==null&&Bs(Rt,F,-1/0,I.sortObjects)}Bs(M,F,0,I.sortObjects),S.finish(),I.sortObjects===!0&&S.sort(qt,Zt,F.reversedDepth),we=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,we&&Kt.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&Ht.beginShadows();let z=E.state.shadowsArray;if(Gt.render(z,M,F),he===!0&&Ht.endShadows(),(k&&T.hasRenderPass())===!1){let Rt=S.opaque,Et=S.transmissive;if(E.setupLights(),F.isArrayCamera){let Lt=F.cameras;if(Et.length>0)for(let Ot=0,Wt=Lt.length;Ot<Wt;Ot++){let Qt=Lt[Ot];Ur(Rt,Et,M,Qt)}we&&Kt.render(M);for(let Ot=0,Wt=Lt.length;Ot<Wt;Ot++){let Qt=Lt[Ot];Dr(S,M,Qt,Qt.viewport)}}else Et.length>0&&Ur(Rt,Et,M,F),we&&Kt.render(M),Dr(S,M,F)}st!==null&&Z===0&&(K.updateMultisampleRenderTarget(st),K.updateRenderTargetMipmap(st)),k&&T.end(I),M.isScene===!0&&M.onAfterRender(I,M,F),wt.resetDefaultState(),ct=-1,Mt=null,_.pop(),_.length>0?(E=_[_.length-1],K.setTextureUnits(E.state.textureUnits),he===!0&&Ht.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,B!==null&&B.renderEnd()};function Bs(M,F,X,k){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ce.intersectsSprite(M)){k&&Ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Pe);let Rt=nt.update(M),Et=M.material;Et.visible&&S.push(M,Rt,Et,X,Ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ce.intersectsObject(M))){let Rt=nt.update(M),Et=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ge.copy(M.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ge.copy(Rt.boundingSphere.center)),Ge.applyMatrix4(M.matrixWorld).applyMatrix4(Pe)),Array.isArray(Et)){let Lt=Rt.groups;for(let Ot=0,Wt=Lt.length;Ot<Wt;Ot++){let Qt=Lt[Ot],kt=Et[Qt.materialIndex];kt&&kt.visible&&S.push(M,Rt,kt,X,Ge.z,Qt)}}else Et.visible&&S.push(M,Rt,Et,X,Ge.z,null)}}let bt=M.children;for(let Rt=0,Et=bt.length;Rt<Et;Rt++)Bs(bt[Rt],F,X,k)}function Dr(M,F,X,k){let{opaque:z,transmissive:bt,transparent:Rt}=M;E.setupLightsView(X),he===!0&&Ht.setGlobalState(I.clippingPlanes,X),k&&x.viewport(At.copy(k)),z.length>0&&Bi(z,F,X),bt.length>0&&Bi(bt,F,X),Rt.length>0&&Bi(Rt,F,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ur(M,F,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let kt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new We(1,1,{generateMipmaps:!0,type:kt?Zn:yn,minFilter:Ii,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let bt=E.state.transmissionRenderTarget[k.id],Rt=k.viewport||At;bt.setSize(Rt.z*I.transmissionResolutionScale,Rt.w*I.transmissionResolutionScale);let Et=I.getRenderTarget(),Lt=I.getActiveCubeFace(),Ot=I.getActiveMipmapLevel();I.setRenderTarget(bt),I.getClearColor(ge),le=I.getClearAlpha(),le<1&&I.setClearColor(16777215,.5),I.clear(),we&&Kt.render(X);let Wt=I.toneMapping;I.toneMapping=wn;let Qt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),he===!0&&Ht.setGlobalState(I.clippingPlanes,k),Bi(M,X,k),K.updateMultisampleRenderTarget(bt),K.updateRenderTargetMipmap(bt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let fe=0,Fe=F.length;fe<Fe;fe++){let Ae=F[fe],{object:ye,geometry:L,material:P,group:$}=Ae;if(P.side===Se&&ye.layers.test(k.layers)){let O=P.side;P.side=rn,P.needsUpdate=!0,Nr(ye,X,k,L,P,$),P.side=O,P.needsUpdate=!0,kt=!0}}kt===!0&&(K.updateMultisampleRenderTarget(bt),K.updateRenderTargetMipmap(bt))}I.setRenderTarget(Et,Lt,Ot),I.setClearColor(ge,le),Qt!==void 0&&(k.viewport=Qt),I.toneMapping=Wt}function Bi(M,F,X){let k=F.isScene===!0?F.overrideMaterial:null;for(let z=0,bt=M.length;z<bt;z++){let Rt=M[z],{object:Et,geometry:Lt,group:Ot}=Rt,Wt=Rt.material;Wt.allowOverride===!0&&k!==null&&(Wt=k),Et.layers.test(X.layers)&&Nr(Et,F,X,Lt,Wt,Ot)}}function Nr(M,F,X,k,z,bt){M.onBeforeRender(I,F,X,k,z,bt),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(I,F,X,k,M,bt),z.transparent===!0&&z.side===Se&&z.forceSinglePass===!1?(z.side=rn,z.needsUpdate=!0,I.renderBufferDirect(X,F,k,z,M,bt),z.side=oi,z.needsUpdate=!0,I.renderBufferDirect(X,F,k,z,M,bt),z.side=Se):I.renderBufferDirect(X,F,k,z,M,bt),M.onAfterRender(I,F,X,k,z,bt)}function es(M,F,X){F.isScene!==!0&&(F=Ye);let k=G.get(M),z=E.state.lights,bt=E.state.shadowsArray,Rt=z.state.version,Et=gt.getParameters(M,z.state,bt,F,X,E.state.lightProbeGridArray),Lt=gt.getProgramCacheKey(Et),Ot=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let Wt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=dt.get(M.envMap||k.environment,Wt),k.envMapRotation=k.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ot===void 0&&(M.addEventListener("dispose",un),Ot=new Map,k.programs=Ot);let Qt=Ot.get(Lt);if(Qt!==void 0){if(k.currentProgram===Qt&&k.lightsStateVersion===Rt)return cl(M,Et),Qt}else Et.uniforms=gt.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,X,Et),M.onBeforeCompile(Et,I),Qt=gt.acquireProgram(Et,Lt),Ot.set(Lt,Qt),k.uniforms=Et.uniforms;let kt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),cl(M,Et),k.needsLights=is(M),k.lightsStateVersion=Rt,k.needsLights&&(kt.ambientLightColor.value=z.state.ambient,kt.lightProbe.value=z.state.probe,kt.directionalLights.value=z.state.directional,kt.directionalLightShadows.value=z.state.directionalShadow,kt.spotLights.value=z.state.spot,kt.spotLightShadows.value=z.state.spotShadow,kt.rectAreaLights.value=z.state.rectArea,kt.ltc_1.value=z.state.rectAreaLTC1,kt.ltc_2.value=z.state.rectAreaLTC2,kt.pointLights.value=z.state.point,kt.pointLightShadows.value=z.state.pointShadow,kt.hemisphereLights.value=z.state.hemi,kt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,kt.spotLightMatrix.value=z.state.spotLightMatrix,kt.spotLightMap.value=z.state.spotLightMap,kt.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=Qt,k.uniformsList=null,Qt}function ns(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Is.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function cl(M,F){let X=G.get(M);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function hl(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let X=0,k=M.length;X<k;X++){let z=M[X];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function Fr(M,F,X,k,z){F.isScene!==!0&&(F=Ye),K.resetTextureUnits();let bt=F.fog,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,Et=st===null?I.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ae.workingColorSpace,Lt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ot=dt.get(k.envMap||Rt,Lt),Wt=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),kt=!!X.morphAttributes.position,fe=!!X.morphAttributes.normal,Fe=!!X.morphAttributes.color,Ae=wn;k.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ae=I.toneMapping);let ye=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,L=ye!==void 0?ye.length:0,P=G.get(k),$=E.state.lights;if(he===!0&&(re===!0||M!==Mt)){let Xt=M===Mt&&k.id===ct;Ht.setState(k,M,Xt)}let O=!1;k.version===P.__version?(P.needsLights&&P.lightsStateVersion!==$.state.version||P.outputColorSpace!==Et||z.isBatchedMesh&&P.batching===!1||!z.isBatchedMesh&&P.batching===!0||z.isBatchedMesh&&P.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&P.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&P.instancing===!1||!z.isInstancedMesh&&P.instancing===!0||z.isSkinnedMesh&&P.skinning===!1||!z.isSkinnedMesh&&P.skinning===!0||z.isInstancedMesh&&P.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&P.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&P.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&P.instancingMorph===!1&&z.morphTexture!==null||P.envMap!==Ot||k.fog===!0&&P.fog!==bt||P.numClippingPlanes!==void 0&&(P.numClippingPlanes!==Ht.numPlanes||P.numIntersection!==Ht.numIntersection)||P.vertexAlphas!==Wt||P.vertexTangents!==Qt||P.morphTargets!==kt||P.morphNormals!==fe||P.morphColors!==Fe||P.toneMapping!==Ae||P.morphTargetsCount!==L||!!P.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(O=!0):(O=!0,P.__version=k.version);let it=P.currentProgram;O===!0&&(it=es(k,F,z),B&&k.isNodeMaterial&&B.onUpdateProgram(k,it,P));let ot=!1,Nt=!1,at=!1,lt=it.getUniforms(),xt=P.uniforms;if(x.useProgram(it.program)&&(ot=!0,Nt=!0,at=!0),k.id!==ct&&(ct=k.id,Nt=!0),P.needsLights){let Xt=hl(E.state.lightProbeGridArray,z);P.lightProbeGrid!==Xt&&(P.lightProbeGrid=Xt,Nt=!0)}if(ot||Mt!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),lt.setValue(N,"projectionMatrix",M.projectionMatrix),lt.setValue(N,"viewMatrix",M.matrixWorldInverse);let ve=lt.map.cameraPosition;ve!==void 0&&ve.setValue(N,Ve.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&lt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),Mt!==M&&(Mt=M,Nt=!0,at=!0)}if(P.needsLights&&($.state.directionalShadowMap.length>0&&lt.setValue(N,"directionalShadowMap",$.state.directionalShadowMap,K),$.state.spotShadowMap.length>0&&lt.setValue(N,"spotShadowMap",$.state.spotShadowMap,K),$.state.pointShadowMap.length>0&&lt.setValue(N,"pointShadowMap",$.state.pointShadowMap,K)),z.isSkinnedMesh){lt.setOptional(N,z,"bindMatrix"),lt.setOptional(N,z,"bindMatrixInverse");let Xt=z.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),lt.setValue(N,"boneTexture",Xt.boneTexture,K))}z.isBatchedMesh&&(lt.setOptional(N,z,"batchingTexture"),lt.setValue(N,"batchingTexture",z._matricesTexture,K),lt.setOptional(N,z,"batchingIdTexture"),lt.setValue(N,"batchingIdTexture",z._indirectTexture,K),lt.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&lt.setValue(N,"batchingColorTexture",z._colorsTexture,K));let Dt=X.morphAttributes;if((Dt.position!==void 0||Dt.normal!==void 0||Dt.color!==void 0)&&U.update(z,X,it),(Nt||P.receiveShadow!==z.receiveShadow)&&(P.receiveShadow=z.receiveShadow,lt.setValue(N,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(xt.envMapIntensity.value=F.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=rx()),Nt){if(lt.setValue(N,"toneMappingExposure",I.toneMappingExposure),P.needsLights&&ti(xt,at),bt&&k.fog===!0&&Ft.refreshFogUniforms(xt,bt),Ft.refreshMaterialUniforms(xt,k,ht,ft,E.state.transmissionRenderTarget[M.id]),P.needsLights&&P.lightProbeGrid){let Xt=P.lightProbeGrid;xt.probesSH.value=Xt.texture,xt.probesMin.value.copy(Xt.boundingBox.min),xt.probesMax.value.copy(Xt.boundingBox.max),xt.probesResolution.value.copy(Xt.resolution)}Is.upload(N,ns(P),xt,K)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Is.upload(N,ns(P),xt,K),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(N,"center",z.center),lt.setValue(N,"modelViewMatrix",z.modelViewMatrix),lt.setValue(N,"normalMatrix",z.normalMatrix),lt.setValue(N,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let Xt=k.uniformsGroups;for(let ve=0,ze=Xt.length;ve<ze;ve++){let ss=Xt[ve];rt.update(ss,it),rt.bind(ss,it)}}return it}function ti(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function is(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(M,F,X){let k=G.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=F,G.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let X=G.get(M);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,X=0){st=M,J=F,Z=X;let k=null,z=!1,bt=!1;if(M){let Et=G.get(M);if(Et.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,Et.__webglFramebuffer),At.copy(M.viewport),Pt.copy(M.scissor),ue=M.scissorTest,x.viewport(At),x.scissor(Pt),x.setScissorTest(ue),ct=-1;return}else if(Et.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(Et.__hasExternalTextures)K.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Wt=M.depthTexture;if(Et.__boundDepthTexture!==Wt){if(Wt!==null&&G.has(Wt)&&(M.width!==Wt.image.width||M.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}let Lt=M.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(bt=!0);let Ot=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?k=Ot[F][X]:k=Ot[F],z=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?k=G.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?k=Ot[X]:k=Ot,At.copy(M.viewport),Pt.copy(M.scissor),ue=M.scissorTest}else At.copy(It).multiplyScalar(ht).floor(),Pt.copy(Ne).multiplyScalar(ht).floor(),ue=ee;if(X!==0&&(k=q),x.bindFramebuffer(N.FRAMEBUFFER,k)&&x.drawBuffers(M,k),x.viewport(At),x.scissor(Pt),x.setScissorTest(ue),z){let Et=G.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Et.__webglTexture,X)}else if(bt){let Et=F;for(let Lt=0;Lt<M.textures.length;Lt++){let Ot=G.get(M.textures[Lt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Lt,Ot.__webglTexture,X,Et)}}else if(M!==null&&X!==0){let Et=G.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Et.__webglTexture,X)}ct=-1},this.readRenderTargetPixels=function(M,F,X,k,z,bt,Rt,Et=0){if(!(M&&M.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Rt!==void 0&&(Lt=Lt[Rt]),Lt){x.bindFramebuffer(N.FRAMEBUFFER,Lt);try{let Ot=M.textures[Et],Wt=Ot.format,Qt=Ot.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Et),!A.textureFormatReadable(Wt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(Qt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-k&&X>=0&&X<=M.height-z&&N.readPixels(F,X,k,z,yt.convert(Wt),yt.convert(Qt),bt)}finally{let Ot=st!==null?G.get(st).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(M,F,X,k,z,bt,Rt,Et=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Rt!==void 0&&(Lt=Lt[Rt]),Lt)if(F>=0&&F<=M.width-k&&X>=0&&X<=M.height-z){x.bindFramebuffer(N.FRAMEBUFFER,Lt);let Ot=M.textures[Et],Wt=Ot.format,Qt=Ot.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Et),!A.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let kt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,kt),N.bufferData(N.PIXEL_PACK_BUFFER,bt.byteLength,N.STREAM_READ),N.readPixels(F,X,k,z,yt.convert(Wt),yt.convert(Qt),0);let fe=st!==null?G.get(st).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,fe);let Fe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await iu(N,Fe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,kt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,bt),N.deleteBuffer(kt),N.deleteSync(Fe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,X=0){let k=Math.pow(2,-X),z=Math.floor(M.image.width*k),bt=Math.floor(M.image.height*k),Rt=F!==null?F.x:0,Et=F!==null?F.y:0;K.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,Rt,Et,z,bt),x.unbindTexture()},this.copyTextureToTexture=function(M,F,X=null,k=null,z=0,bt=0){let Rt,Et,Lt,Ot,Wt,Qt,kt,fe,Fe,Ae=M.isCompressedTexture?M.mipmaps[bt]:M.image;if(X!==null)Rt=X.max.x-X.min.x,Et=X.max.y-X.min.y,Lt=X.isBox3?X.max.z-X.min.z:1,Ot=X.min.x,Wt=X.min.y,Qt=X.isBox3?X.min.z:0;else{let xt=Math.pow(2,-z);Rt=Math.floor(Ae.width*xt),Et=Math.floor(Ae.height*xt),M.isDataArrayTexture?Lt=Ae.depth:M.isData3DTexture?Lt=Math.floor(Ae.depth*xt):Lt=1,Ot=0,Wt=0,Qt=0}k!==null?(kt=k.x,fe=k.y,Fe=k.z):(kt=0,fe=0,Fe=0);let ye=yt.convert(F.format),L=yt.convert(F.type),P;F.isData3DTexture?(K.setTexture3D(F,0),P=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),P=N.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),P=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let $=x.getParameter(N.UNPACK_ROW_LENGTH),O=x.getParameter(N.UNPACK_IMAGE_HEIGHT),it=x.getParameter(N.UNPACK_SKIP_PIXELS),ot=x.getParameter(N.UNPACK_SKIP_ROWS),Nt=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,Ae.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ae.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),x.pixelStorei(N.UNPACK_SKIP_ROWS,Wt),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Qt);let at=M.isDataArrayTexture||M.isData3DTexture,lt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let xt=G.get(M),Dt=G.get(F),Xt=G.get(xt.__renderTarget),ve=G.get(Dt.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,Xt.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ze=0;ze<Lt;ze++)at&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(M).__webglTexture,z,Qt+ze),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(F).__webglTexture,bt,Fe+ze)),N.blitFramebuffer(Ot,Wt,Rt,Et,kt,fe,Rt,Et,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||G.has(M)){let xt=G.get(M),Dt=G.get(F);x.bindFramebuffer(N.READ_FRAMEBUFFER,Y),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,V);for(let Xt=0;Xt<Lt;Xt++)at?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xt.__webglTexture,z,Qt+Xt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xt.__webglTexture,z),lt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.__webglTexture,bt,Fe+Xt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Dt.__webglTexture,bt),z!==0?N.blitFramebuffer(Ot,Wt,Rt,Et,kt,fe,Rt,Et,N.COLOR_BUFFER_BIT,N.NEAREST):lt?N.copyTexSubImage3D(P,bt,kt,fe,Fe+Xt,Ot,Wt,Rt,Et):N.copyTexSubImage2D(P,bt,kt,fe,Ot,Wt,Rt,Et);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else lt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(P,bt,kt,fe,Fe,Rt,Et,Lt,ye,L,Ae.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(P,bt,kt,fe,Fe,Rt,Et,Lt,ye,Ae.data):N.texSubImage3D(P,bt,kt,fe,Fe,Rt,Et,Lt,ye,L,Ae):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,bt,kt,fe,Rt,Et,ye,L,Ae.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,bt,kt,fe,Ae.width,Ae.height,ye,Ae.data):N.texSubImage2D(N.TEXTURE_2D,bt,kt,fe,Rt,Et,ye,L,Ae);x.pixelStorei(N.UNPACK_ROW_LENGTH,$),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,O),x.pixelStorei(N.UNPACK_SKIP_PIXELS,it),x.pixelStorei(N.UNPACK_SKIP_ROWS,ot),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt),bt===0&&F.generateMipmaps&&N.generateMipmap(P),x.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){J=0,Z=0,st=null,x.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var Go=20010923;function Ee(s){Go=s}function ut(){return Go=Go*1103515245+12345&2147483647,Go/2147483647}function Te(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function an(s,t=1,e=1,n=!0){let i=new xn(s);return i.wrapS=i.wrapT=li,i.repeat.set(t,e),n&&(i.colorSpace=Je),i.anisotropy=4,i}function Ni(s,t=1.5){let e=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,e,n).data,r=Te(e,n),a=r.getContext("2d"),o=a.createImageData(e,n),l=o.data,c=(d,u)=>(d=(d+e)%e,u=(u+n)%n,i[(u*e+d)*4]/255);for(let d=0;d<n;d++)for(let u=0;u<e;u++){let f=(c(u-1,d)-c(u+1,d))*t,p=(c(u,d-1)-c(u,d+1))*t,y=Math.sqrt(f*f+p*p+1),g=(d*e+u)*4;l[g]=(f/y*.5+.5)*255,l[g+1]=(p/y*.5+.5)*255,l[g+2]=(1/y*.5+.5)*255,l[g+3]=255}a.putImageData(o,0,0);let h=new xn(r);return h.wrapS=h.wrapT=li,h.anisotropy=4,h}function Fi(s,t,e,n,i,r=1){for(let a=0;a<e;a+=2)for(let o=0;o<t;o+=2){let l=(ut()-.5)*i;s.fillStyle=`rgba(${Math.max(0,Math.min(255,n[0]+l))|0},${Math.max(0,Math.min(255,n[1]+l))|0},${Math.max(0,Math.min(255,n[2]+l))|0},${r})`,s.fillRect(o,a,2,2)}}function Un(s,t,e,n,i,r,a){for(let o=0;o<n;o++){let l=ut()*t,c=ut()*e,h=(.25+ut()*.75)*r,d=s.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,`rgba(${i[0]},${i[1]},${i[2]},${a})`),d.addColorStop(1,`rgba(${i[0]},${i[1]},${i[2]},0)`),s.fillStyle=d,s.beginPath(),s.arc(l,c,h,0,Math.PI*2),s.fill()}}function Bu(){Ee(11);let s=512,t=512,e=Te(s,t),n=e.getContext("2d");n.fillStyle="#b9ab92",n.fillRect(0,0,s,t),Fi(n,s,t,[185,171,146],18,.5);let i=["#d8cdb8","#9c8f78","#c4b49a","#7e7260","#e2d9c6","#8d6f5a","#5f584c"];for(let o=0;o<2600;o++){let l=ut()*s,c=ut()*t,h=1+ut()*4.5;n.fillStyle=i[ut()*i.length|0],n.beginPath(),n.moveTo(l+h,c);for(let d=1;d<6;d++){let u=d/6*Math.PI*2,f=h*(.6+ut()*.6);n.lineTo(l+Math.cos(u)*f,c+Math.sin(u)*f)}n.closePath(),n.fill()}n.strokeStyle="rgba(90,72,40,0.85)",n.lineWidth=3,n.strokeRect(1,1,s-2,t-2),Un(n,s,t,9,[60,52,40],130,.1),Un(n,s,t,5,[30,30,34],90,.08);let r=Te(s,t),a=r.getContext("2d");a.fillStyle="#808080",a.fillRect(0,0,s,t),Ee(11);for(let o=0;o<2600;o++){let l=ut()*s,c=ut()*t,h=1+ut()*4.5;ut(),a.fillStyle=ut()>.5?"#8a8a8a":"#757575",a.beginPath(),a.arc(l,c,h,0,Math.PI*2),a.fill();for(let d=1;d<6;d++)ut()}return a.fillStyle="#5a5a5a",a.fillRect(0,0,s,3),a.fillRect(0,0,3,t),{map:an(e,6,6),normalMap:Ni(r,1),roughness:.42,metalness:.04}}function Ou(s=.6){Ee(23);let t=512,e=512,n=Te(t,e),i=n.getContext("2d"),r=Te(t,e),a=r.getContext("2d");a.fillStyle="#909090",a.fillRect(0,0,t,e);let o=128,l=128;for(let c=0;c<e;c+=l)for(let h=0;h<t;h+=o){let d=226+(ut()-.5)*14;i.fillStyle=`rgb(${d|0},${d-4|0},${d-12|0})`,i.fillRect(h+3,c+3,o-6,l-6);let u=i.createLinearGradient(h,c,h+o,c+l);u.addColorStop(0,"rgba(255,255,255,0.12)"),u.addColorStop(.5,"rgba(255,255,255,0)"),u.addColorStop(1,"rgba(0,0,0,0.10)"),i.fillStyle=u,i.fillRect(h+3,c+3,o-6,l-6),a.fillStyle="#aaaaaa",a.fillRect(h+4,c+4,o-8,l-8)}i.strokeStyle="rgba(120,112,96,1)",i.lineWidth=5;for(let c=0;c<=e;c+=l)i.beginPath(),i.moveTo(0,c),i.lineTo(t,c),i.stroke();for(let c=0;c<=t;c+=o)i.beginPath(),i.moveTo(c,0),i.lineTo(c,e),i.stroke();return Un(i,t,e,14*s,[92,74,50],90,.22*s),Un(i,t,e,8*s,[40,44,38],60,.18*s),{map:an(n,4,1.6),normalMap:Ni(r,2),roughness:.28,metalness:0}}function Nc(s=[214,206,190],t=.7){Ee(37+s[0]);let e=512,n=512,i=Te(e,n),r=i.getContext("2d");r.fillStyle=`rgb(${s[0]},${s[1]},${s[2]})`,r.fillRect(0,0,e,n),Fi(r,e,n,s,16,.45),Un(r,e,n,16*t,[s[0]-70,s[1]-70,s[2]-66],120,.16*t),Un(r,e,n,6*t,[70,60,45],160,.12*t);for(let l=0;l<8*t;l++){let c=ut()*e,h=60+ut()*200,d=6+ut()*24,u=r.createLinearGradient(c,0,c,h);u.addColorStop(0,`rgba(88,74,54,${.18*t})`),u.addColorStop(1,"rgba(88,74,54,0)"),r.fillStyle=u,r.fillRect(c-d/2,0,d,h)}let a=Te(256,256),o=a.getContext("2d");o.fillStyle="#808080",o.fillRect(0,0,256,256),Ee(9);for(let l=0;l<1400;l++)o.fillStyle=ut()>.5?"#878787":"#797979",o.fillRect(ut()*256,ut()*256,1+ut()*3,1+ut()*3);return{map:an(i,3,1.5),normalMap:Ni(a,.8),roughness:.92,metalness:0}}function Wo(s=0){Ee(53+s);let t=256,e=256,n=Te(t,e),i=n.getContext("2d"),r=132-s*46,a=16-s*5,o=22-s*8;i.fillStyle=`rgb(${r},${a},${o})`,i.fillRect(0,0,t,e),Fi(i,t,e,[r,a,o],26,.55);for(let h=0;h<40;h++){let d=ut()*t,u=ut()*e,f=20+ut()*50,p=i.createRadialGradient(d,u,0,d,u,f);p.addColorStop(0,`rgba(${r+55},${a+14},${o+16},0.10)`),p.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=p,i.beginPath(),i.arc(d,u,f,0,Math.PI*2),i.fill()}let l=Te(128,128),c=l.getContext("2d");c.fillStyle="#808080",c.fillRect(0,0,128,128),Ee(3);for(let h=0;h<900;h++)c.fillStyle=ut()>.5?"#848484":"#7c7c7c",c.fillRect(ut()*128,ut()*128,2,2);return{map:an(n,2,2),normalMap:Ni(l,.6),roughness:.88,metalness:0}}function Hu(){let e=Te(1024,640),n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,640);i.addColorStop(0,"#7e0e14"),i.addColorStop(.5,"#a01820"),i.addColorStop(1,"#6b0a10"),n.fillStyle=i,n.fillRect(0,0,1024,640),Ee(77);for(let o=0;o<1024;o+=18){let l=.1+ut()*.12,c=n.createLinearGradient(o,0,o+18,0);c.addColorStop(0,`rgba(0,0,0,${l})`),c.addColorStop(.5,"rgba(255,80,80,0.05)"),c.addColorStop(1,`rgba(0,0,0,${l})`),n.fillStyle=c,n.fillRect(o,0,18,640)}n.strokeStyle="#d8a83a",n.lineWidth=10,n.beginPath(),n.arc(1024/2,640/2,190,0,Math.PI*2),n.stroke(),n.strokeStyle="rgba(216,168,58,0.5)",n.lineWidth=3,n.beginPath(),n.arc(1024/2,640/2,205,0,Math.PI*2),n.stroke(),n.fillStyle="#e7b64c",n.font='300px "Noto Sans SC","Microsoft YaHei",serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="rgba(0,0,0,0.5)",n.shadowBlur=12,n.shadowOffsetY=6,n.fillText("\u56CD",1024/2,640/2+14),n.shadowColor="transparent",n.font='84px "Noto Sans SC","Microsoft YaHei",serif';let r="\u5929\u8D50\u826F\u7F18",a="\u6C38\u7ED3\u540C\u5FC3";for(let o=0;o<4;o++)n.fillText(r[o],1024*.16,640*.18+o*108),n.fillText(a[o],1024*.84,640*.18+o*108);return an(e,1,1)}function ku(){Ee(91);let s=256,t=256,e=Te(s,t),n=e.getContext("2d");n.fillStyle="#6e1013",n.fillRect(0,0,s,t),Fi(n,s,t,[110,16,19],24,.6),n.strokeStyle="rgba(190,150,60,0.8)",n.lineWidth=6,n.strokeRect(10,10,s-20,t-20),n.strokeStyle="rgba(190,150,60,0.35)",n.lineWidth=2,n.strokeRect(22,22,s-44,t-44),Un(n,s,t,6,[30,20,18],60,.25);let i=Te(128,128),r=i.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,128,128),Ee(7);for(let a=0;a<2e3;a++)r.fillStyle=ut()>.5?"#868686":"#7a7a7a",r.fillRect(ut()*128,ut()*128,1,1);return{map:an(e,1,8),normalMap:Ni(i,.7),roughness:.95,metalness:0}}function zu(){Ee(101);let s=256,t=256,e=Te(s,t),n=e.getContext("2d");n.fillStyle="#3d5a48",n.fillRect(0,0,s,t),Fi(n,s,t,[61,90,72],10,.4);let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"rgba(255,255,255,0.08)"),i.addColorStop(1,"rgba(0,0,0,0.22)"),n.fillStyle=i,n.fillRect(0,0,s,t),Un(n,s,t,10,[24,30,26],70,.25);for(let r=0;r<12;r++){n.fillStyle="rgba(150,140,120,0.10)";let a=ut()*s,o=t*.6+ut()*t*.4;n.beginPath(),n.ellipse(a,o,8+ut()*26,4+ut()*8,ut(),0,Math.PI*2),n.fill()}return{map:an(e,4,1),roughness:.5,metalness:.05}}function Vu(s=0,t=1){Ee(113+s*40|0);let e=256,n=256,i=Te(e,n),r=i.getContext("2d"),a=96-s*40,o=58-s*26,l=36-s*16;r.fillStyle=`rgb(${a},${o},${l})`,r.fillRect(0,0,e,n);let c=Te(e,n),h=c.getContext("2d");h.fillStyle="#808080",h.fillRect(0,0,e,n);for(let d=0;d<e;d++){let u=Math.sin(d*.11)*6+Math.sin(d*.037)*14;for(let f=0;f<n;f+=4){let p=Math.sin((f+u)*.16*t)*.5+.5;r.fillStyle=`rgba(0,0,0,${p*.22})`,r.fillRect(d,f,1,4),h.fillStyle=`rgb(${128-p*34},${128-p*34},${128-p*34})`,h.fillRect(d,f,1,4)}}return Un(r,e,n,5,[20,14,10],60,.2),{map:an(i,2,2),normalMap:Ni(c,1.6),roughness:.62,metalness:.02}}function Xo(s,t=!1){let i=Te(256,160),r=i.getContext("2d");return r.fillStyle=t?"#8e1016":"#a51920",r.fillRect(0,0,256,160),r.strokeStyle="#d8a83a",r.lineWidth=6,r.strokeRect(8,8,240,144),r.fillStyle="#e7c25c",r.font=`${s.length>2?64:84}px "Noto Sans SC","Microsoft YaHei",serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(s,256/2,160/2+4),an(i,1,1)}function kn(s,t="#e8e2d2",e="#233225",n=96){let a=Te(512,160),o=a.getContext("2d");return o.fillStyle=e,o.fillRect(0,0,512,160),o.strokeStyle="rgba(255,255,255,0.25)",o.lineWidth=4,o.strokeRect(6,6,500,148),o.fillStyle=t,o.font=`${n}px "Noto Sans SC","Microsoft YaHei",sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(s,512/2,160/2+4),an(a,1,1)}function Fc(){Ee(131);let s=512,t=512,e=Te(s,t),n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#2a7a86"),i.addColorStop(.45,"#155059"),i.addColorStop(1,"#072028"),n.fillStyle=i,n.fillRect(0,0,s,t);for(let r=0;r<26;r++){let a=ut()*s,o=12+ut()*50,l=n.createLinearGradient(a,0,a+o*.4,t*.55);l.addColorStop(0,`rgba(120,220,210,${.1+ut()*.12})`),l.addColorStop(1,"rgba(120,220,210,0)"),n.fillStyle=l,n.beginPath(),n.moveTo(a,0),n.lineTo(a+o,0),n.lineTo(a+o*.55+26,t*.6),n.lineTo(a+26,t*.6),n.closePath(),n.fill()}for(let r=0;r<700;r++){let a=ut()*t;n.fillStyle=`rgba(140,210,200,${.03+ut()*.09*(1-a/t)})`,n.fillRect(ut()*s,a,1+ut()*2,1+ut()*2)}for(let r=0;r<4;r++){let a=ut()*s,o=t*.35+ut()*t*.5,l=80+ut()*160,c=n.createRadialGradient(a,o,l*.2,a,o,l);c.addColorStop(0,"rgba(0,4,6,0.55)"),c.addColorStop(1,"rgba(0,4,6,0)"),n.fillStyle=c,n.beginPath(),n.arc(a,o,l,0,Math.PI*2),n.fill()}return an(e,2,1)}function qo(){Ee(151);let s=256,t=256,e=Te(s,t),n=e.getContext("2d");n.fillStyle="#54483a",n.fillRect(0,0,s,t);for(let i=0;i<t;i+=8+ut()*10|0){let r=60+ut()*50;n.fillStyle=`rgba(${r+20|0},${r|0},${r*.7|0},0.8)`,n.fillRect(0,i,s,5+ut()*8)}for(let i=0;i<300;i++)n.fillStyle=`rgba(200,190,160,${.06+ut()*.1})`,n.fillRect(ut()*s,ut()*t,2+ut()*5,1+ut()*2);return{map:an(e,1,1),roughness:.9,metalness:0}}function Gu(){let s=Te(64,64),t=s.getContext("2d");return t.fillStyle="#b3121c",t.fillRect(0,0,64,64),t.fillStyle="rgba(255,220,120,0.9)",t.font="40px serif",t.textAlign="center",t.textBaseline="middle",t.fillText("\u56CD",32,34),an(s,1,1)}function Wu(){Ee(171);let s=512,t=512,e=Te(s,t),n=e.getContext("2d");n.fillStyle="#6e6a62",n.fillRect(0,0,s,t),Fi(n,s,t,[110,106,98],18,.5),Un(n,s,t,18,[40,40,40],140,.16),Un(n,s,t,8,[55,62,58],100,.14),n.strokeStyle="rgba(0,0,0,0.28)",n.lineWidth=3;for(let a=0;a<t;a+=170)n.beginPath(),n.moveTo(0,a),n.lineTo(s,a),n.stroke();let i=Te(256,256),r=i.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,256,256),Ee(5);for(let a=0;a<900;a++)r.fillStyle=ut()>.5?"#858585":"#7b7b7b",r.fillRect(ut()*256,ut()*256,2+ut()*4,2+ut()*4);return{map:an(e,3,2),normalMap:Ni(i,1),roughness:.95,metalness:0}}function Xu(s="mc"){Ee(s==="mc"?191:193);let t=512,e=512,n=Te(t,e),i=n.getContext("2d");i.fillStyle="#c8a084",i.fillRect(0,0,t,e),Fi(i,t,e,[200,160,132],12,.4),Un(i,t,e,4,[190,120,105],90,.2),i.fillStyle="rgba(150,140,140,0.16)",i.beginPath(),i.ellipse(t*.38,e*.47,34,14,.1,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.475,34,14,-.1,0,Math.PI*2),i.fill();for(let a=0;a<2600;a++)i.fillStyle=`rgba(120,86,66,${.03+ut()*.05})`,i.fillRect(ut()*t,ut()*e,1.4,1.4);let r=s==="mc"?6:0;if(i.fillStyle="rgba(70,50,44,0.5)",i.beginPath(),i.ellipse(t*.38,e*.42,30,17,.06,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.42+r,30,17,-.06,0,Math.PI*2),i.fill(),s==="mc"?(i.fillStyle="rgba(232,226,214,0.9)",i.beginPath(),i.ellipse(t*.38,e*.42,13,8,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.42+r,13,8,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(20,16,14,0.95)",i.beginPath(),i.ellipse(t*.38,e*.42,6.5,6.5,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.42+r,6.5,6.5,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.5)",i.fillRect(t*.38-2,e*.42-4,3,3),i.fillRect(t*.62-2,e*.42+r-4,3,3),i.strokeStyle="rgba(96,66,54,0.7)",i.lineWidth=3,i.beginPath(),i.moveTo(t*.31,e*.405),i.quadraticCurveTo(t*.38,e*.385,t*.45,e*.405),i.stroke(),i.beginPath(),i.moveTo(t*.55,e*.405+r),i.quadraticCurveTo(t*.62,e*.385+r,t*.69,e*.405+r),i.stroke()):(i.strokeStyle="rgba(88,58,48,0.85)",i.lineWidth=3.4,i.beginPath(),i.moveTo(t*.3,e*.42),i.quadraticCurveTo(t*.38,e*.445,t*.46,e*.42),i.stroke(),i.beginPath(),i.moveTo(t*.54,e*.42),i.quadraticCurveTo(t*.62,e*.445,t*.7,e*.42),i.stroke(),i.strokeStyle="rgba(88,58,48,0.35)",i.lineWidth=6,i.beginPath(),i.moveTo(t*.31,e*.435),i.quadraticCurveTo(t*.38,e*.455,t*.45,e*.435),i.stroke(),i.beginPath(),i.moveTo(t*.55,e*.435),i.quadraticCurveTo(t*.62,e*.455,t*.69,e*.435),i.stroke()),i.strokeStyle="rgba(46,32,26,0.8)",i.lineWidth=5,i.beginPath(),i.moveTo(t*.3,e*.355),i.quadraticCurveTo(t*.38,e*.335,t*.46,e*.35),i.stroke(),i.beginPath(),i.moveTo(t*.54,e*.35+r*.5),i.quadraticCurveTo(t*.62,e*.335+r*.5,t*.7,e*.355+r*.5),i.stroke(),i.fillStyle="rgba(150,110,90,0.4)",i.beginPath(),i.ellipse(t*.5,e*.55,11,24,0,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(140,96,76,0.4)",i.lineWidth=3,i.beginPath(),i.moveTo(t*.44,e*.6),i.quadraticCurveTo(t*.42,e*.66,t*.44,e*.7),i.stroke(),i.beginPath(),i.moveTo(t*.56,e*.6),i.quadraticCurveTo(t*.58,e*.66,t*.56,e*.7),i.stroke(),s==="mc"){for(let o=0;o<480;o++){let l=ut()*Math.PI*2,c=Math.pow(ut(),.7)*62,h=t*.5+Math.cos(l)*c*1.5,d=e*.68+Math.sin(l)*c*.62,u=2.5+ut()*6,f=i.createRadialGradient(h-u*.3,d-u*.3,0,h,d,u);f.addColorStop(0,"rgba(240,231,208,0.96)"),f.addColorStop(.55,"rgba(206,189,158,0.92)"),f.addColorStop(1,"rgba(130,112,88,0.85)"),i.fillStyle=f,i.beginPath(),i.arc(h,d,u,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,252,240,0.5)",i.beginPath(),i.arc(h-u*.3,d-u*.35,u*.22,0,Math.PI*2),i.fill()}let a=i.createRadialGradient(t*.5,e*.68,55,t*.5,e*.68,110);a.addColorStop(0,"rgba(178,92,74,0.3)"),a.addColorStop(1,"rgba(178,92,74,0)"),i.fillStyle=a,i.beginPath(),i.arc(t*.5,e*.68,110,0,Math.PI*2),i.fill()}else i.strokeStyle="rgba(110,70,60,0.85)",i.lineWidth=4,i.beginPath(),i.moveTo(t*.4,e*.68),i.quadraticCurveTo(t*.5,e*.735,t*.6,e*.68),i.stroke(),i.strokeStyle="rgba(190,140,120,0.4)",i.lineWidth=2,i.beginPath(),i.moveTo(t*.41,e*.695),i.quadraticCurveTo(t*.5,e*.75,t*.59,e*.695),i.stroke();return[[.5,.28,60,26],[.5,.5,10,34],[.33,.5,20,10],[.67,.5,20,10]].forEach(([a,o,l,c])=>{let h=i.createRadialGradient(t*a,e*o,0,t*a,e*o,Math.max(l,c));h.addColorStop(0,"rgba(255,238,220,0.18)"),h.addColorStop(1,"rgba(255,238,220,0)"),i.fillStyle=h,i.beginPath(),i.ellipse(t*a,e*o,l,c,0,0,Math.PI*2),i.fill()}),an(n,1,1)}function qu(){Ee(233);let s=256,t=256,e=Te(s,t),n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#a50f16"),i.addColorStop(.6,"#8e0c12"),i.addColorStop(1,"#6b080e"),n.fillStyle=i,n.fillRect(0,0,s,t),Fi(n,s,t,[150,16,22],18,.35);for(let r=0;r<s;r+=10)n.fillStyle=`rgba(255,120,110,${.03+ut()*.05})`,n.fillRect(r,0,3,t);n.fillStyle="rgba(216,168,58,0.9)",n.font="28px serif",n.textAlign="center",n.textBaseline="middle";for(let r=0;r<6;r++)n.fillText("\u56CD",24+r*42,t*.35+r%2*26);n.strokeStyle="#d8a83a",n.lineWidth=4,n.beginPath(),n.moveTo(0,t-26),n.lineTo(s,t-26),n.stroke(),n.lineWidth=2;for(let r=6;r<s;r+=13)n.beginPath(),n.moveTo(r,t-24),n.lineTo(r+(ut()-.5)*4,t-4),n.stroke();return an(e,1,1)}function Yu(){Ee(211);let s=256,t=256,e=Te(s,t),n=e.getContext("2d");n.fillStyle="#8d7a64",n.fillRect(0,0,s,t);let i=Te(s,t),r=i.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,s,t);for(let a=0;a<t;a++){let o=Math.sin(a*.08)*8+Math.sin(a*.023)*20;for(let l=0;l<s;l+=3){let c=Math.sin((l+o)*.22)*.5+.5;n.fillStyle=`rgba(40,30,22,${c*.4})`,n.fillRect(l,a,3,1),r.fillStyle=`rgb(${128-c*52|0},${128-c*52|0},${128-c*52|0})`,r.fillRect(l,a,3,1)}}return{map:an(e,1,1),normalMap:Ni(i,2.2),roughness:.85,metalness:0}}function Zu(s){let t=new hi;t.background=new zt(1708560);let e=new W(new ne(10,16,8),new oe({color:5579288,side:rn}));t.add(e);let n=new W(new ne(1.4,8,8),new oe({color:16767392}));n.position.set(0,6,0),t.add(n);let i=new W(new ne(.9,8,8),new oe({color:16732224}));i.position.set(4,2,-4),t.add(i);let r=new Ls(s),a=r.fromScene(t,.2);return r.dispose(),a.texture}function $u(s,t){let e={colliders:[],regions:[],lights:{hall:[],corridor:[],lobby:[],aqua:[],connector:[]},screens:[],future:{},dyn:{},mats:{}},n=Zu(t);s.environment=n;let i=Bu(),r=e.mats;r.terrazzo=new j({...i,envMapIntensity:.5}),r.terrazzoDark=new j({...i,color:9405817,envMapIntensity:.3});let a=Ou();r.tiles=new j({...a,envMapIntensity:.6}),r.tiles.userData.tileEvery=1.3;let o=Nc();r.plaster=new j({...o}),r.plaster.userData.tileEvery=3.6;let l=Nc([158,96,84],.9);r.plasterHall=new j({...l}),r.plasterHall.userData.tileEvery=4.2;let c=Wo();r.velvet=new j({...c});let h=Wo(1);r.velvetDark=new j({...h});let d=ku();r.carpet=new j({...d}),r.wainscot=new j({...zu()});let u=Vu();r.wood=new j({...u,envMapIntensity:.5});let f=Wu();r.concrete=new j({...f}),r.concrete.userData.tileEvery=3.4,r.concreteWet=new j({...f,color:5658192,roughness:.24,envMapIntensity:1.2}),r.gold=new j({color:13081146,metalness:.9,roughness:.3,envMapIntensity:1.4}),r.steel=new j({color:10133670,metalness:.95,roughness:.22,envMapIntensity:1.6}),r.steelDark=new j({color:3948612,metalness:.8,roughness:.5}),r.black=new j({color:1315860,roughness:.8}),r.white=new j({color:14210248,roughness:.85}),r.ceiling=new j({color:6182476,roughness:.95}),r.ceilingHall=new j({color:4862512,roughness:.95}),r.glassSea=new j({map:Fc(),roughness:.05,metalness:.3,envMapIntensity:2,emissive:667704,emissiveIntensity:.55}),r.sediment=new j({...qo()}),r.porcelain=new j({color:15262938,roughness:.15,envMapIntensity:1.2}),r.bottleGreen=new j({color:1722922,roughness:.05,metalness:.1,envMapIntensity:1.8}),r.calcite=new j({color:14275262,roughness:.65});let p=(L,P,$,O,it,ot,Nt,at={})=>{let lt=new W(new Ce(L,P,$),O);return lt.position.set(it,ot,Nt),at.ry&&(lt.rotation.y=at.ry),at.rx&&(lt.rotation.x=at.rx),lt.castShadow=!!at.cast,lt.receiveShadow=at.recv!==!1,s.add(lt),at.collide&&e.colliders.push({minX:it-L/2-.05,minZ:Nt-$/2-.05,maxX:it+L/2+.05,maxZ:Nt+$/2+.05}),lt},y=(L,P,$,O,it,ot,Nt=0,at=0)=>{let lt=new W(new be(L,P),$);return lt.position.set(O,it,ot),lt.rotation.y=Nt,lt.rotation.x=at,lt.receiveShadow=!0,s.add(lt),lt},g=(L,P,$,O=2.6)=>{let it=L.clone();return it.map&&(it.map=it.map.clone(),it.map.needsUpdate=!0,it.map.repeat.set(P/O,$/O)),it.normalMap&&(it.normalMap=it.normalMap.clone(),it.normalMap.needsUpdate=!0,it.normalMap.repeat.set(P/O,$/O)),it},m=(L,P,$,O)=>e.colliders.push({minX:Math.min(L,$),minZ:Math.min(P,O),maxX:Math.max(L,$),maxZ:Math.max(P,O)}),b=(L,P,$)=>{let O=L.userData.tileEvery;if(!O)return L;let it=`${L.uuid}_${(P/O).toFixed(1)}_${($/O).toFixed(1)}`;if(b.cache=b.cache||{},b.cache[it])return b.cache[it];let ot=L.clone();return ot.map&&(ot.map=ot.map.clone(),ot.map.needsUpdate=!0,ot.map.repeat.set(Math.max(1,P/O),Math.max(.6,$/O))),ot.normalMap&&(ot.normalMap=ot.normalMap.clone(),ot.normalMap.needsUpdate=!0,ot.normalMap.repeat.set(Math.max(1,P/O),Math.max(.6,$/O))),b.cache[it]=ot,ot};function w(L,P,$,O,it,ot=[],Nt=0,at=.3){let lt=[[P,$]];for(let[xt,Dt]of ot){let Xt=[];for(let[ve,ze]of lt){if(Dt<=ve||xt>=ze){Xt.push([ve,ze]);continue}xt>ve&&Xt.push([ve,xt]),Dt<ze&&Xt.push([Dt,ze])}lt=Xt}for(let[xt,Dt]of lt)p(Dt-xt,O,at,b(it,Dt-xt,O),(xt+Dt)/2,Nt+O/2,L,{collide:!0});for(let[xt,Dt]of ot)p(Dt-xt,O-2.3,at,b(it,Dt-xt,O-2.3),(xt+Dt)/2,Nt+2.3+(O-2.3)/2,L)}function v(L,P,$,O,it,ot=[],Nt=0,at=.3){let lt=[[P,$]];for(let[xt,Dt]of ot){let Xt=[];for(let[ve,ze]of lt){if(Dt<=ve||xt>=ze){Xt.push([ve,ze]);continue}xt>ve&&Xt.push([ve,xt]),Dt<ze&&Xt.push([Dt,ze])}lt=Xt}for(let[xt,Dt]of lt)p(at,O,Dt-xt,b(it,Dt-xt,O),L,Nt+O/2,(xt+Dt)/2,{collide:!0});for(let[xt,Dt]of ot)p(at,O-2.3,Dt-xt,b(it,Dt-xt,O-2.3),L,Nt+2.3+(O-2.3)/2,(xt+Dt)/2)}let S=(L,P,$,O,it,ot,Nt,at=!1)=>{let lt=new Ci(L,P,$,1.8);return lt.position.set(O,it,ot),at&&(lt.castShadow=!0,lt.shadow.mapSize.set(512,512),lt.shadow.bias=-.004),s.add(lt),lt.userData.base=P,e.lights[Nt].push(lt),lt};y(30,20,g(r.terrazzo,30,20),0,0,-10,0,-Math.PI/2).receiveShadow=!0,y(30,20,r.ceilingHall,0,7,-10,0,Math.PI/2);let E=y(4.2,17,r.carpet,0,.02,-8.5,0,-Math.PI/2);E.material=r.carpet,w(-20,-15,15,7,r.plasterHall,[[-8,8]]),w(0,-15,15,7,r.plasterHall,[[-1.8,1.8]]),v(-15,-20,0,7,r.plasterHall,[[-7.6,-4.4]]),v(15,-20,0,7,r.plasterHall,[[-7.6,-4.4]]);let C=new ie,_=p(1.7,3.4,.12,r.wood,-.85,1.7,0,{}),T=p(1.7,3.4,.12,r.wood,.85,1.7,0,{});C.userData={dL:_,dR:T},e.dyn.doorS=C,m(-1.8,-.2,1.8,.2),e.dyn.doorSCollider=e.colliders[e.colliders.length-1],p(16,.6,3.2,r.velvetDark,0,.3,-18.4,{collide:!0}),p(4,.15,1.2,r.velvetDark,0,.07,-16.6,{});let I=y(14,5.4,new j({map:Hu(),roughness:.85}),0,3.6,-19.7);I.material.emissive=new zt(1704708),p(1.6,6.4,.4,r.velvet,-7.4,3.2,-19.4,{}),p(1.6,6.4,.4,r.velvet,7.4,3.2,-19.4,{}),p(.7,1.1,.6,r.black,-7.2,1.75,-17.6,{cast:!0}),p(.7,1.1,.6,r.black,7.2,1.75,-17.6,{cast:!0}),p(.12,1.2,.12,r.steelDark,-7.2,.6,-17.6,{}),p(.12,1.2,.12,r.steelDark,7.2,.6,-17.6,{});let D=new oe({color:10336432}),B=y(3.6,2.7,D,-11.5,4,-19.55);e.screens.push({id:"T03",mesh:B,mat:D,kind:"vcr"});let q=[[-6.5,-6],[6.5,-6],[-11,-9.5],[11,-9.5],[-6.5,-12.5],[6.5,-12.5],[-11,-3],[11,-3]],Y=[0,-13.5],V=new Jt(1.15,1.15,.76,20),J=new Jt(1.18,1.45,.76,20,1,!0),Z=new Jt(.62,.62,.04,18),st=new j({color:10135706,roughness:.05,metalness:.4,envMapIntensity:1.6}),ct=new Jt(.22,.26,.52,10),Mt=new Ce(.44,.62,.09),At=new Jt(.12,.09,.025,12),Pt=new Jt(.03,.024,.09,8),ue=new Jt(.04,.045,.3,8),ge=[...q,Y],le=new bn(At,r.porcelain,ge.length*8),et=new bn(Pt,r.porcelain,ge.length*8),ft=new bn(ct,r.velvet,ge.length*6),ht=new bn(Mt,r.velvet,ge.length*6);le.castShadow=et.castShadow=!1,ft.castShadow=!0;let qt=0,Zt=0,It=new Oe;ge.forEach(([L,P],$)=>{let O=$===ge.length-1,it=new W(V,r.wood);it.position.set(L,.38,P),it.castShadow=!0,s.add(it);let ot=new W(J,r.velvet);ot.position.set(L,.38,P),s.add(ot);let Nt=new W(new Jt(1.16,1.16,.03,20),r.velvet);Nt.position.set(L,.775,P),s.add(Nt);let at=new W(Z,st);at.position.set(L,.81,P),s.add(at),m(L-1.25,P-1.25,L+1.25,P+1.25);for(let xt=0;xt<8;xt++){let Dt=xt/8*Math.PI*2;It.position.set(L+Math.cos(Dt)*.92,.8,P+Math.sin(Dt)*.92),It.rotation.set(0,0,0),It.updateMatrix(),le.setMatrixAt(qt,It.matrix),It.position.set(L+Math.cos(Dt)*.78,.85,P+Math.sin(Dt)*.78),It.updateMatrix(),et.setMatrixAt(qt,It.matrix),qt++}for(let xt=0;xt<6;xt++){let Dt=xt/6*Math.PI*2+(O?.5:0),Xt=L+Math.cos(Dt)*1.62,ve=P+Math.sin(Dt)*1.62;It.position.set(Xt,.26,ve),It.rotation.set(0,-Dt+Math.PI/2,0),It.updateMatrix(),ft.setMatrixAt(Zt,It.matrix),It.position.set(Xt+Math.cos(Dt)*.24,.82,ve+Math.sin(Dt)*.24),It.updateMatrix(),ht.setMatrixAt(Zt,It.matrix),Zt++}let lt=new W(ue,r.bottleGreen);lt.position.set(L+.4,.95,P+.2),lt.castShadow=!0,s.add(lt)}),s.add(le,et,ft,ht);let Ne=Y[0]+2.1,ee=Y[1],ce=new ie,he=new W(new Ce(.5,1,.5),r.velvet);he.position.y=.5,ce.add(he);let re=new W(new Ce(.5,.72,.1),r.velvet);re.position.set(0,1.3,.22),ce.add(re);let Pe=new W(new be(.62,.9),new j({color:12587032,roughness:.7,side:Se,emissive:3146762}));Pe.position.set(0,1.35,.28),Pe.rotation.x=-.15,ce.add(Pe),ce.position.set(Ne,0,ee),ce.rotation.y=-Math.PI/2,s.add(ce),e.dyn.vipChair=ce;let Ve=new j({map:Xo("\u4E0A\u5BBE"),roughness:.8,side:Se}),Ge=y(.28,.18,Ve,Y[0]+1,.89,Y[1],-Math.PI/2);Ge.rotation.x=-.3,e.dyn.vipCard=Ge;let Ye=new j({map:Xo("\u4F34\u5A18"),roughness:.8,side:Se}),we=y(.28,.18,Ye,Y[0]-1,.89,Y[1],Math.PI/2);we.rotation.x=-.3,e.dyn.cardYou={mesh:we,mat:Ye,flip:Xo("\u4E0A\u5BBE",!0)};function Ie(L,P,$){let O=new ie,it=new W(new En(.9,.06,8,24),r.gold);it.rotation.x=Math.PI/2,O.add(it);let ot=new W(new En(.5,.05,8,20),r.gold);ot.rotation.x=Math.PI/2,ot.position.y=.4,O.add(ot);let Nt=new j({color:16767392,emissive:16757854,emissiveIntensity:2.2});for(let xt=0;xt<8;xt++){let Dt=xt/8*Math.PI*2,Xt=new W(new ne(.07,8,8),Nt);Xt.position.set(Math.cos(Dt)*.9,.12,Math.sin(Dt)*.9),O.add(Xt)}let at=new W(new Jt(.02,.02,1.4,6),r.gold);at.position.y=1,O.add(at),O.position.set(L,5.4,P),s.add(O);let lt=S(16760952,55,26,L,5,P,$,$==="hall");return{group:O,light:lt,bulbMat:Nt}}e.dyn.chand1=Ie(0,-5,"hall"),e.dyn.chand2=Ie(0,-12,"hall"),[[-14.7,-4],[-14.7,-12],[14.7,-4],[14.7,-12]].forEach(([L,P])=>{let $=p(.24,.5,.18,r.gold,L,3.2,P,{});$.material=r.gold,S(16756832,8,9,L+(L<0?.4:-.4),3.3,P,"hall")});let N=new mr(16769200,260,30,.32,.45,1.4);N.position.set(0,6.6,-12),N.target.position.set(0,1.4,-18.2),N.castShadow=!0,N.shadow.mapSize.set(1024,1024),N.shadow.bias=-.002,s.add(N,N.target),e.lights.hall.push(N),N.userData.base=260,e.dyn.stageSpot=N;let on=new j({color:11538968,emissive:2753542,roughness:.8}),pe=new j({color:13081146,metalness:.6,roughness:.4});e.dyn.garlands=[];for(let L=0;L<5;L++){let O=-17+L*3.6,it=[];for(let Nt=0;Nt<=16;Nt++){let at=Nt/16;it.push(new R(-15+30*at,6.4-Math.sin(at*Math.PI)*.9,O))}let ot=new W(new Sn(new _n(it),24,.035,5),L%2?pe:on);s.add(ot),e.dyn.garlands.push(ot)}let A=new j({color:12589090,roughness:.25,envMapIntensity:1.2}),x=new j({color:14200912,roughness:.25,envMapIntensity:1.2});[[-13.5,-1.5],[13.5,-1.5],[-13.5,-18],[13.5,-18]].forEach(([L,P],$)=>{for(let O=0;O<5;O++){let it=new W(new ne(.16,10,10),O%2?x:A);it.position.set(L+Math.sin(O*2.1)*.3,2.2+O*.28,P+Math.cos(O*1.7)*.3),it.scale.y=1.15,s.add(it)}});let H=new j({map:Gu(),roughness:.9});[[-15,-9,Math.PI/2],[15,-9,-Math.PI/2],[-8,.15-0,0],[8,0,0]].forEach(([L,P,$],O)=>{O<2?y(1.1,1.1,H,L+(L<0?.16:-.16),3.4,P,$):y(1.1,1.1,H,L,3.4,-.16,Math.PI)});let G=new ie,K=new j({color:7031356,roughness:.85,emissive:1182214});for(let L=0;L<7;L++){let P=-16.5+L*2.6,$=10.6-Math.abs(L-3)*.45,O=new W(new En($,.62-.04*Math.abs(L-3),9,26,Math.PI),K);O.position.set(0,.1,P),O.scale.set(1.32,.66,1),O.rotation.z=(L%2?1:-1)*.05,G.add(O)}G.visible=!1,s.add(G),e.dyn.throat=G,e.regions.push({name:"\u5BB4\u4F1A\u5385",box:[-15,-20,15,0],mat:"carpet"}),y(25,3.6,g(r.terrazzoDark,25,3.6),27.5,0,-6.2,0,-Math.PI/2),y(3.6,18.4,g(r.terrazzoDark,3.6,18.4),38.2,0,4.8,0,-Math.PI/2),y(25,3.6,r.ceiling,27.5,3.2,-6.2,0,Math.PI/2),y(3.6,18.4,r.ceiling,38.2,3.2,4.8,0,Math.PI/2);function dt(L,P,$,O=[]){w(L,P,$,1.25,r.tiles,O),w(L,P,$,1.95,r.plaster,O,1.25)}function mt(L,P,$,O=[]){v(L,P,$,1.25,r.tiles,O),v(L,P,$,1.95,r.plaster,O,1.25)}dt(-8,15,40,[]),dt(-4.4,15,36.4,[]),mt(40,-8,14,[]),mt(36.4,-4.4,14,[]);let Q=new j({color:3024416,roughness:.9});[[20,-8],[28,-8],[34,-8]].forEach(([L,P])=>{y(1.1,2.2,Q,L,1.1,P+.16),y(.9,.28,new j({map:kn(L===28?"\u5DE5\u4F5C\u95F4":"\u540E\u53A8","#ddd6c2","#37322a",88),roughness:.9}),L,2.42,P+.17)}),y(.9,.28,new j({map:kn("\u5BB4\u4F1A\u5385 \u2192","#e8e2d2","#233225",80),roughness:.9}),16.5,2.5,-4.6-.16,Math.PI),e.dyn.tubes=[];let nt=()=>new j({color:15397606,emissive:13625560,emissiveIntensity:2.6});[[18,-6.2,0],[25,-6.2,0],[32,-6.2,0],[38.2,-1,1],[38.2,5,1],[38.2,11,1]].forEach(([L,P,$],O)=>{let it=nt(),ot=p($?.12:1.4,.06,$?1.4:.12,it,L,3.12,P,{}),Nt=S(14217436,O%2===0?16:12,11,L,2.8,P,"corridor");e.dyn.tubes.push({mesh:ot,mat:it,light:Nt,flicker:O===2})});function gt(L,P,$){let O=new ie,it=new W(new Ce(1.1,.08,.6),r.steel);it.position.y=.85,O.add(it);let ot=it.clone();ot.position.y=.3,O.add(ot);for(let[at,lt]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]]){let xt=new W(new Jt(.02,.02,.85,6),r.steelDark);xt.position.set(at,.45,lt),O.add(xt)}for(let at=0;at<3;at++){let lt=new W(new Jt(.16,.16,.34,12),r.porcelain);lt.position.set(-.32+at*.32,1.07,0),O.add(lt)}let Nt=new W(new be(.7,.5),r.velvet);return Nt.position.set(.2,.62,.31),Nt.rotation.x=-.2,O.add(Nt),O.position.set(L,0,P),O.rotation.y=$,s.add(O),m(L-.65,P-.4,L+.65,P+.4),O}gt(22,-7.4,0),gt(38.9,2,Math.PI/2);let Ft=new j({color:9312788,roughness:.8});for(let L=0;L<4;L++)p(.6,.35,.42,Ft,30.5+L%2*.65,.18+Math.floor(L/2)*.37,-7.5,{collide:L<2});for(let L=0;L<6;L++){let P=p(1.6+Math.random()*1.2,.1+Math.random()*.14,.24,r.sediment,17+L*3.8,.08,-7.75,{});P.rotation.z=(Math.random()-.5)*.06}p(24.9,.1,.1,r.steelDark,27.5,3,-7.7,{}),p(.1,.1,18.2,r.steelDark,39.7,3,4.8,{}),e.regions.push({name:"\u670D\u52A1\u8D70\u5ECA",box:[15,-8,40,-4.4],mat:"terrazzo"}),e.regions.push({name:"\u670D\u52A1\u8D70\u5ECA",box:[36.4,-4.4,40,14],mat:"terrazzo"}),y(24,16,g(r.terrazzo,24,16),36,0,22,0,-Math.PI/2),y(24,16,r.ceiling,36,8,22,0,Math.PI/2),y(4.5,14,r.carpet,36,.02,22.8,0,-Math.PI/2),w(30,24,48,8,r.plaster,[[33,39]]),w(14,24,48,8,r.plaster,[[36.4,40]]),v(24,14,30,8,r.plaster,[[20,23.2]]),v(48,14,30,8,r.plaster,[]);let vt=new j({color:3160378,roughness:.04,metalness:.4,transparent:!0,opacity:.5,envMapIntensity:2});p(6,3.4,.1,vt,36,1.7,30,{}),m(32.8,29.8,39.2,30.2),p(.14,3.4,.14,r.steel,33,1.7,30,{}),p(.14,3.4,.14,r.steel,39,1.7,30,{}),p(.14,3.4,.14,r.steel,36,1.7,30,{});let _t=new oe({color:13161672,transparent:!0,opacity:.22,depthWrite:!1});y(14,6,_t,36,2.5,36,Math.PI);let Ht=new oe({color:16773836,transparent:!0,opacity:0,depthWrite:!1}),Gt=y(1.2,.7,Ht,33.5,1,35,Math.PI),Kt=y(1.2,.7,Ht,38.5,1,35.5,Math.PI);e.dyn.headlights={mat:Ht,m1:Gt,m2:Kt},[[30,18],[42,18],[30,26],[42,26]].forEach(([L,P])=>{let $=new W(new Jt(.55,.55,8,20),r.steel);$.position.set(L,4,P),$.castShadow=!0,s.add($),m(L-.6,P-.6,L+.6,P+.6);let O=new W(new Jt(.68,.62,.3,20),r.gold);O.position.set(L,.15,P),s.add(O)});let U=Ie(36,22,"lobby");U.group.scale.setScalar(1.8),U.group.position.y=6.2,U.light.position.y=5.8,U.light.intensity=110,U.light.userData.base=110,U.light.castShadow=!0,U.light.shadow.mapSize.set(512,512),e.dyn.lobbyChand=U,p(1.2,1.1,7,r.wood,45.5,.55,22,{collide:!0,cast:!0}),p(1.5,.08,7.4,r.wood,45.5,1.14,22,{});let pt=new W(new pn(.22,.24,12,1,!0),new j({color:1855544,roughness:.4,side:Se}));pt.position.set(45.5,1.5,19.5),s.add(pt),p(.04,.34,.04,r.gold,45.5,1.3,19.5,{}),S(16765072,10,7,45.5,1.45,19.5,"lobby"),p(.26,.1,.2,r.black,45.5,1.22,24,{});let tt=new j({map:kn("\u70ED\u70C8\u795D\u8D3A\u5468\u5E9C\u5343\u91D1\u4E8E\u5F52\u4E4B\u559C","#e7c25c","#8e0c12",60),roughness:.85}),yt=y(14,1.1,tt,36,6.2,29.7,Math.PI);yt.rotation.z=.012;let wt=new j({color:3038260,roughness:.85});[[25.5,28.5],[46.5,28.5],[25.5,15.5]].forEach(([L,P])=>{p(.5,.5,.5,new j({color:8007202,roughness:.9}),L,.25,P,{collide:!0});for(let $=0;$<6;$++){let O=new W(new pn(.09,.9,6),wt);O.position.set(L+Math.sin($*2.4)*.2,.9+$%3*.14,P+Math.cos($*1.9)*.2),O.rotation.set(Math.sin($)*.5,0,Math.cos($*1.3)*.5),s.add(O)}}),p(.7,.5,.45,new j({color:4864040,roughness:.9}),34,.25,28.6,{}),p(.6,.42,.4,new j({color:3490382,roughness:.9}),34.7,.21,28.3,{}),p(2.2,.45,.9,r.velvetDark,27,.32,24.5,{collide:!0}),p(2.2,.7,.24,r.velvetDark,27,.85,24.9,{}),y(1.6,.5,new j({map:kn("\u5458\u5DE5\u901A\u9053 \xB7 \u6D77\u6D0B\u9986\u8FDE\u5ECA","#d8e6dc","#22322a",56),roughness:.9}),24.4,2.7,21.6,Math.PI/2);for(let L=0;L<6;L++)p(3,.18,.34,r.terrazzoDark,47.2-L*0,.2+L*.18,15.6+L*.34,{});p(3,.06,.06,r.gold,47.2,1.05,16.2,{ry:0}),m(45.6,15.3,48,17.8),e.dyn.pits=[];let rt=new j({color:790032,roughness:.15,metalness:.4,envMapIntensity:1.4});[[31,20,2.6,1.5,.4],[39,24.5,3.4,1.8,-.7],[35,17.5,2,1.2,1.9]].forEach(([L,P,$,O,it])=>{let ot=new W(new Yi(1,24),rt);ot.scale.set($,O,1),ot.rotation.x=-Math.PI/2,ot.rotation.z=it,ot.position.set(L,.035,P),ot.visible=!1,s.add(ot),e.dyn.pits.push(ot)}),e.regions.push({name:"\u5927\u5802",box:[24,14,48,30],mat:"terrazzo"}),y(43,4,g(r.concreteWet,43,4,3.2),2.5,0,22,0,-Math.PI/2),y(43,4,r.ceiling,2.5,3.4,22,0,Math.PI/2),w(20,-19,24,1.25,r.tiles,[[-19,-15.2]]),w(20,-19,24,2.15,r.concrete,[[-19,-15.2]],1.25);let Bt=y(46,8,new oe({map:Fc()}),2.5,2.5,26.5,Math.PI);e.dyn.beams=[];let Ut=new oe({color:6740168,transparent:!0,opacity:.14,blending:In,depthWrite:!1,side:Se});for(let L=0;L<5;L++){let P=new W(new be(1.4+L*.4,7),Ut);P.position.set(-14+L*8,2.8,25.4),P.rotation.z=.25,s.add(P),e.dyn.beams.push({mesh:P,phase:L*1.7,x0:-14+L*8})}let Le=new oe({color:133388,transparent:!0,opacity:.85,depthWrite:!1}),me=new W(new ne(2.6,12,8),Le);me.scale.set(2.2,.7,.5),me.position.set(-6,3.4,26.2),s.add(me),e.dyn.seaShade=me;let An=new ur({color:10471618,roughness:.03,metalness:0,transparent:!0,opacity:.18,envMapIntensity:2.2});for(let L=0;L<12;L++){let P=-17.2+L*3.6;y(3.5,3.4,An,P,1.7,24),p(.14,3.4,.2,r.steelDark,P+1.78,1.7,24,{})}m(-19,23.8,24,24.3),p(.14,3.4,.2,r.steelDark,-19,1.7,24,{}),p(.3,3.4,4.2,r.concrete,-19,1.7,22,{collide:!0});let un=document.createElement("canvas");un.width=256,un.height=256;let gi=un.getContext("2d");gi.strokeStyle="rgba(220,240,240,0.9)",gi.lineWidth=2;for(let L=0;L<7;L++){gi.beginPath();let P=128,$=128;gi.moveTo(P,$);for(let O=0;O<6;O++)P+=(Math.random()-.5)*90,$+=(Math.random()-.5)*90,gi.lineTo(P,$);gi.stroke()}let ll=new xn(un),Ir=new oe({map:ll,transparent:!0,opacity:0,depthWrite:!1});e.dyn.cracks=[],[[-2,23.85],[6,23.85],[14,23.85]].forEach(([L,P])=>{let $=y(3.2,3.2,Ir.clone(),L,1.7,P,Math.PI);e.dyn.cracks.push($)});let Fs=new j({map:kn("\u8680\u6E7E\u6D77\u6D0B\u9986","#bfeee8","#0d2b31",88),emissive:1923676,emissiveIntensity:1.6,roughness:.6});y(3.2,.9,Fs,21.5,2.8,20.2,0),S(6736064,9,8,21.5,2.6,21,"aqua"),p(2,1.05,.8,r.wood,21.6,.53,20.7,{collide:!0});let xi=new ie,Lr=new W(new Ce(.16,3.2,3.8),r.steelDark);xi.add(Lr);for(let L=0;L<6;L++){let P=new W(new Ce(.2,3.2,.06),r.steel);P.position.set(0,0,-1.7+L*.68),xi.add(P)}let ts=new W(new be(1.4,.4),new j({map:kn("\u68C0\u4FEE\u95F8 \xB7 \u7981\u6B62\u901A\u884C","#e8d8b0","#5a2018",64),roughness:.9}));ts.rotation.y=Math.PI/2,ts.position.set(.11,.4,0),xi.add(ts),xi.position.set(4,1.6,22),s.add(xi),e.dyn.gate={group:xi,y:1.6,targetY:1.6,collider:{minX:3.7,minZ:20,maxX:4.3,maxZ:24}},e.colliders.push(e.dyn.gate.collider),p(.24,3.4,.24,r.steelDark,4,1.7,20.25,{}),p(.24,3.4,.24,r.steelDark,4,1.7,23.75,{});let jn=new j({color:2777152,emissive:1926724,emissiveIntensity:2.4});[[-16,20.3],[10,20.3],[22,20.3]].forEach(([L,P])=>{p(.34,.16,.1,jn,L,3,P+.05,{})}),S(4168296,7,9,-16,2.8,21,"aqua"),S(4168296,6,9,10,2.8,21,"aqua");let Bs=S(5220512,38,18,-6,2.4,22.3,"aqua"),Dr=S(5220512,34,18,12,2.4,22.3,"aqua"),Ur=S(5220512,30,16,-15,2.4,22.3,"aqua");e.dyn.waterLights=[Bs,Dr,Ur];let Bi=new W(new Ce(43,.1,.16),new j({color:10479836,emissive:6277308,emissiveIntensity:1.8}));Bi.position.set(2.5,3.3,23.85),s.add(Bi);let Nr=new j({color:1712676,roughness:.03,metalness:.5,envMapIntensity:2.4,transparent:!0,opacity:.8});[[-8,22.6,1.6],[2,21.4,1.1],[16,22.8,2]].forEach(([L,P,$])=>{let O=new W(new Yi(1,20),Nr);O.rotation.x=-Math.PI/2,O.scale.set($,$*.55,1),O.position.set(L,.02,P),s.add(O)}),e.regions.push({name:"\u6D77\u6D0B\u9986\u8FDE\u5ECA",box:[-19,20,24,24],mat:"wet"}),y(3.8,27.6,g(r.concrete,3.8,27.6,3.2),-17.1,0,6.2,0,-Math.PI/2),y(3.8,27.6,r.ceiling,-17.1,3,6.2,0,Math.PI/2),v(-19,-7.6,20,3,r.concrete,[]),v(-15.2,-4.4,20,3,r.concrete,[[-7.6,-4.4]]),w(-7.6,-19,-15.2,3,r.concrete,[]),[[-18.8,2],[-18.8,10]].forEach(([L,P])=>{y(1.4,2.2,Q,L+.16,1.1,P,Math.PI/2),p(.1,2.4,1.6,r.steelDark,L+.05,1.2,P,{})}),y(.8,.3,new j({map:kn("\u65E7\u51B7\u5E93 \xB7 3","#cfd8ce","#2e3630",76),roughness:.9}),-18.7,2.3,6,Math.PI/2),p(.12,.12,27,r.steelDark,-18.6,2.6,6.2,{});for(let L=0;L<9;L++){let P=new W(new ne(.09+Math.random()*.1,7,7),r.calcite);P.position.set(-18.55,2.5+Math.random()*.24,-5+L*2.8+Math.random()),P.scale.y=.7,s.add(P)}e.dyn.bulbs=[],[[-17.1,-3],[-17.1,6],[-17.1,15]].forEach(([L,P],$)=>{let O=new ie,it=new W(new Jt(.012,.012,.7,5),r.black);it.position.y=.35,O.add(it);let ot=new W(new ne(.06,8,8),new j({color:16767392,emissive:16760944,emissiveIntensity:2.4}));O.add(ot),O.position.set(L,2.6,P),s.add(O);let Nt=S(16760952,9,8,L,2.4,P,"connector");e.dyn.bulbs.push({group:O,light:Nt,phase:$*2.1})});let es=new W(new Sn(new _n([new R(-17.5,.03,-5.5),new R(-17,.05,-5.8),new R(-16.6,.03,-5.5),new R(-16.4,.04,-6)]),12,.02,5),new j({color:4854292,roughness:.95}));s.add(es),e.regions.push({name:"\u5458\u5DE5\u8FDE\u5ECA",box:[-19,-7.6,-15.2,20],mat:"metal"});function ns(L,P,$,O,it,ot,Nt){let at=new ie,lt=new j({color:3814960,roughness:.55}),xt=new W(new Ce(.62,.5,.5),lt);xt.castShadow=!0,at.add(xt);let Dt=new W(new Ce(.64,.52,.04),new j({color:2893860,roughness:.5}));Dt.position.z=.25,at.add(Dt);let Xt=new oe({color:2241328}),ve=new W(new be(.5,.38),Xt);ve.position.set(-.03,.02,.275),at.add(ve);for(let ss=0;ss<2;ss++){let ul=new W(new Jt(.024,.024,.02,8),r.steelDark);ul.rotation.x=Math.PI/2,ul.position.set(.25,.08-ss*.1,.276),at.add(ul)}at.position.set(L,P,$),at.rotation.y=O,s.add(at);let ze=new Ci(6740172,4,4,2);return ze.position.set(L,P+.1,$),s.add(ze),e.screens.push({id:it,mesh:ve,mat:Xt,kind:"preview",camPos:ot,camLook:Nt,glow:ze,group:at}),at}p(.5,1.15,.5,r.steelDark,26.5,.58,-7.5,{collide:!0}),ns(26.5,1.42,-7.5,.25,"T02",new R(26.5,2.2,-6.8),new R(34,1.2,-5.6)),ns(45.4,1.45,26,-Math.PI/2-.2,"T01",new R(44,3.4,26),new R(34,2.2,21)),ns(21.6,1.3,20.75,Math.PI+.15,"T07",new R(18,1.9,21.2),new R(4,1.6,22.6));let cl=new oe({color:16726064,wireframe:!1}),hl=new oe({color:16732224}),Fr=new oe({color:1316892}),ti=new ie,is=(L,P,$=hl)=>{let O=P.clone().sub(L),it=O.length(),ot=new W(new Jt(.03,.03,it,5),$);return ot.position.copy(L).add(P).multiplyScalar(.5),ot.quaternion.setFromUnitVectors(new R(0,1,0),O.normalize()),ot};ti.add(is(new R(16.2,2.05,-6.2),new R(35.5,2.05,-6.2))),ti.add(is(new R(35.5,2.05,-6.2),new R(38.2,2.05,-3.5))),ti.add(is(new R(38.2,2.05,-3.5),new R(38.2,2.05,11)));let M=new W(new Ts(.24,1.1,4,8),Fr);M.position.set(31,.95,-6.2),ti.add(M),ti.visible=!1,s.add(ti),e.future.corridor=ti;let F=new ie;for(let L=0;L<7;L++){let P=L/6,$=new W(new Ce(2.6-P*.8,.5,1.6-P*.5),Fr);$.position.set(29+P*12,.6+Math.sin(P*Math.PI)*5.4,19+P*5.5),$.rotation.set(P*.8,P*1.2,Math.sin(P*6)*.4),F.add($)}let X=new W(new Ts(.24,1.1,4,8),new oe({color:7213075}));X.position.set(33,.95,24),F.add(X),F.visible=!1,s.add(F),e.future.lobby=F;let k=new ie,z=new W(new ne(4,16,12,0,Math.PI),new oe({color:929848,side:Se}));z.scale.set(1.4,.8,.35),z.position.set(4,1.7,24.4),z.rotation.y=Math.PI,k.add(z),k.add(is(new R(4,3.3,22),new R(10.5,2.6,20.3)));let bt=new W(new Ce(.16,3.2,3.8),new oe({color:3160124,transparent:!0,opacity:.7}));bt.position.set(4,4.4,22),k.add(bt),k.visible=!1,s.add(k),e.future.aqua=k;let Rt=(L,P,$)=>{let O=document.createElement("canvas");O.width=L,O.height=P,$(O.getContext("2d"),L,P);let it=new xn(O);return it.colorSpace=Je,it},Et=new j({color:11735584,emissive:14494232,emissiveIntensity:.85,roughness:.6,transparent:!0,opacity:.96}),Lt=new j({color:13081146,metalness:.7,roughness:.4}),Ot=new j({color:9309202,roughness:.9});e.dyn.lanterns=[],[[-13.2,-3.2],[-13.2,-9.5],[-13.2,-15.8],[13.2,-3.2],[13.2,-9.5],[13.2,-15.8]].forEach(([L,P],$)=>{let O=new ie,it=new W(new ne(.3,14,12),Et);it.scale.y=1.18,O.add(it);for(let xt=0;xt<5;xt++){let Dt=new W(new En(.3,.008,5,20),Lt);Dt.rotation.y=xt/5*Math.PI,Dt.scale.y=1.18,O.add(Dt)}let ot=new W(new Jt(.1,.14,.07,10),Lt);ot.position.y=.38,O.add(ot);let Nt=ot.clone();Nt.position.y=-.38,Nt.rotation.x=Math.PI,O.add(Nt);let at=new W(new pn(.035,.3,8),Ot);at.position.y=-.56,O.add(at);let lt=new W(new Jt(.008,.008,1.1,4),r.black);lt.position.y=.95,O.add(lt),O.position.set(L,4.9,P),s.add(O),e.dyn.lanterns.push({group:O,phase:$*1.3})});let Wt=new j({color:9071156,metalness:.55,roughness:.5});p(30,.14,.14,Wt,0,6.7,-.2,{}),p(30,.14,.14,Wt,0,6.7,-19.8,{}),p(.14,.14,20,Wt,-14.8,6.7,-10,{}),p(.14,.14,20,Wt,14.8,6.7,-10,{}),p(20,.1,.1,Wt,0,6.96,-4.5,{}),p(20,.1,.1,Wt,0,6.96,-15.5,{}),p(.1,.1,11,Wt,-10,6.96,-10,{}),p(.1,.1,11,Wt,10,6.96,-10,{}),y(19.6,10.8,new j({color:3810338,roughness:.95}),0,6.99,-10,0,Math.PI/2);let Qt=new j({...Wo(),color:8261654});for(let L=0;L<22;L++){let P=-7.7+L*.73,$=new W(new Jt(.22+L%3*.05,.3+L%2*.06,6.2,8),Qt);$.position.set(P,3.5,-19.85+L%2*.1),s.add($)}let kt=new ne(.09,10,8),fe=r.porcelain;ge.forEach(([L,P],$)=>{let O=new ie,it=new W(kt,fe);it.scale.y=.82,O.add(it);let ot=new W(new Jt(.012,.02,.1,6),fe);ot.position.set(.09,.02,0),ot.rotation.z=-1,O.add(ot);let Nt=new W(new Jt(.028,.04,.03,8),fe);Nt.position.y=.075,O.add(Nt),O.position.set(L-.35,.885,P-.25),O.rotation.y=$*1.1,s.add(O);let at=new W(new Jt(.09,.06,.03,10),r.porcelain);at.position.set(L+.15,.87,P+.42),s.add(at);for(let lt=0;lt<5;lt++){let xt=new W(new ne(.016,6,5),new j({color:lt%2?12589090:14200912,roughness:.3}));xt.position.set(L+.15+Math.sin(lt*2.2)*.045,.9,P+.42+Math.cos(lt*1.8)*.045),s.add(xt)}});{let L=new bn(new Yi(.035,6),new j({color:12589090,roughness:.9,side:Se}),90),P=new Oe;Ee(313);for(let $=0;$<90;$++)P.position.set((ut()-.5)*5.5,.03,-1-ut()*16),P.rotation.set(-Math.PI/2+(ut()-.5)*.4,0,ut()*6.28),P.scale.setScalar(.6+ut()),P.updateMatrix(),L.setMatrixAt($,P.matrix);s.add(L)}let Fe=()=>Rt(128,96,(L,P,$)=>{L.fillStyle="#b8a583",L.fillRect(0,0,P,$),Ee(Math.random()*999|0),L.fillStyle="rgba(70,58,40,0.85)",L.fillRect(6,$*.55,P-12,$*.38);for(let it=0;it<7;it++){let ot=14+it*((P-28)/6);L.fillStyle="rgba(58,46,34,0.9)",L.beginPath(),L.ellipse(ot,$*.46,6,8,0,0,Math.PI*2),L.fill(),L.fillRect(ot-7,$*.52,14,$*.3)}L.filter="blur(2.5px)",L.drawImage(L.canvas,0,0),L.filter="none";let O=L.createRadialGradient(P/2,$/2,$*.3,P/2,$/2,P*.75);O.addColorStop(0,"rgba(0,0,0,0)"),O.addColorStop(1,"rgba(40,28,14,0.55)"),L.fillStyle=O,L.fillRect(0,0,P,$)});[[-14.7,-6.5,Math.PI/2],[-14.7,-14,Math.PI/2],[14.7,-15.5,-Math.PI/2]].forEach(([L,P,$])=>{let O=p(.06,.66,.9,r.wood,L+(L<0?.02:-.02),2.2,P,{}),it=y(.78,.54,new j({map:Fe(),roughness:.9}),L+(L<0?.08:-.08),2.2,P,$);it.rotation.z=(Math.random()-.5)*.05});{let L=new j({map:kn("\u5C0F\u5FC3\u5730\u6ED1","#3a2f16","#d8c23a",88),roughness:.8}),P=y(.44,.6,L,24.5,.32,-6.9,.5);P.rotation.x=-.22;let $=y(.44,.6,L,24.52,.32,-6.86,.5+Math.PI);$.rotation.x=.22,m(24.3,-7.1,24.75,-6.7);let O=new W(new Jt(.16,.13,.34,10),new j({color:9312788,roughness:.7}));O.position.set(33.4,.17,-7.4),s.add(O);let it=new W(new Jt(.014,.014,1.3,5),r.wood);it.position.set(33.5,.75,-7.45),it.rotation.z=.35,s.add(it);for(let Nt=0;Nt<3;Nt++){let at=new W(new Ce(.46,.1,.46),r.wood);at.position.set(38.9,.3+Nt*.24,11.8),at.rotation.y=Nt*.16,s.add(at);let lt=new W(new Ce(.46,.4,.08),r.wood);lt.position.set(38.9,.5+Nt*.24,12.02),lt.rotation.y=Nt*.16,s.add(lt)}m(38.6,11.5,39.2,12.2);let ot=new W(new En(.09,.018,6,14),r.steelDark);ot.position.set(30,2.86,-7.62),ot.rotation.x=Math.PI/2,s.add(ot)}{let L=Rt(160,160,(at,lt,xt)=>{at.fillStyle="#e6dcc4",at.beginPath(),at.arc(80,80,74,0,Math.PI*2),at.fill(),at.strokeStyle="#3a2f22",at.lineWidth=5,at.stroke(),at.fillStyle="#3a2f22";for(let Dt=0;Dt<12;Dt++){let Xt=Dt/12*Math.PI*2;at.fillRect(80+Math.cos(Xt)*62-2,80+Math.sin(Xt)*62-2,Dt%3===0?6:3,Dt%3===0?6:3)}at.strokeStyle="#2a2018",at.lineWidth=6,at.beginPath(),at.moveTo(80,80),at.lineTo(80+Math.cos(-Math.PI/2-.05)*38,80+Math.sin(-Math.PI/2-.05)*38),at.stroke(),at.lineWidth=4,at.beginPath(),at.moveTo(80,80),at.lineTo(80+Math.cos(-Math.PI/2-.21)*56,80+Math.sin(-Math.PI/2-.21)*56),at.stroke()}),P=y(1.1,1.1,new j({map:L,transparent:!0,roughness:.85}),47.8,5,22,-Math.PI/2);P.rotation.z=.01,p(2.2,1.4,.08,r.wood,47.8,2.2,22,{});for(let at=0;at<4;at++)for(let lt=0;lt<8;lt++){if((at*8+lt)%5===0)continue;let xt=new W(new Ce(.02,.1,.05),Lt);xt.position.set(47.74,2.65-at*.3,21.1+lt*.26),s.add(xt)}let $=new W(new ne(.05,10,8,0,Math.PI*2,0,Math.PI*.6),Lt);$.position.set(45.5,1.2,20.6),s.add($);let O=new j({color:9073730,metalness:.9,roughness:.25,envMapIntensity:1.6});p(1.9,2.6,.12,O,27.5,1.3,14.25,{}),p(.06,2.6,.16,r.steelDark,27.5,1.3,14.22,{}),p(2.3,.2,.2,r.steelDark,27.5,2.75,14.25,{});let it=Rt(64,24,at=>{at.fillStyle="#150e08",at.fillRect(0,0,64,24),at.fillStyle="#e75c2c",at.font="18px monospace",at.textAlign="center",at.textBaseline="middle",at.fillText("\u2014",32,13)}),ot=y(.4,.15,new j({map:it,emissive:10502168,emissiveIntensity:1.2,roughness:.6}),27.5,2.95,14.32,0);e.dyn.elevInd={mesh:ot,tex:it};let Nt=Rt(128,128,(at,lt,xt)=>{let Dt=at.createLinearGradient(0,xt,0,0);Dt.addColorStop(0,"rgba(200,220,210,0.16)"),Dt.addColorStop(.5,"rgba(200,220,210,0.03)"),Dt.addColorStop(1,"rgba(200,220,210,0)"),at.fillStyle=Dt,at.fillRect(0,0,lt,xt);for(let Xt=0;Xt<14;Xt++){let ve=Math.random()*lt,ze=xt-Math.random()*xt*.45;at.strokeStyle="rgba(225,240,235,0.10)",at.lineWidth=1,at.beginPath(),at.moveTo(ve,ze),at.lineTo(ve+(Math.random()-.5)*4,xt),at.stroke()}});y(5.9,3.3,new oe({map:Nt,transparent:!0,depthWrite:!1}),36,1.7,29.85,Math.PI)}{let L=new oe({color:402206,transparent:!0,opacity:.75,depthWrite:!1,side:Se});e.dyn.kelps=[];for(let it=0;it<8;it++){let ot=3+Math.random()*3.5,Nt=new W(new be(.5+Math.random()*.5,ot),L);Nt.position.set(-16+it*5+Math.random()*2,ot/2-.4,25.6+Math.random()*.8),s.add(Nt),e.dyn.kelps.push({mesh:Nt,phase:it*1.4})}let P=new oe({color:135187,transparent:!0,opacity:.9,depthWrite:!1}),$=new W(new Jt(1.1,1.1,.1,14),P);$.position.set(2,.9,25.9),$.rotation.z=.5,$.rotation.x=.3,s.add($);for(let it=0;it<3;it++){let ot=new W(new Ce(.42,.9,.42),P);ot.position.set(.4+it*1.6,.5+it%2*.35,26+it%2*.4),ot.rotation.set(.4*it,it,.3),s.add(ot)}let O=new j({color:1849896,roughness:.9,transparent:!0,opacity:.75});for(let it=0;it<12;it++){let ot=y(3.4,.28+Math.random()*.3,O,-17.2+it*3.6,.2,23.93,Math.PI);ot.rotation.z=(Math.random()-.5)*.06}}{let L=new j({color:12107442,roughness:.35,transparent:!0,opacity:.34,side:Se,envMapIntensity:1.4,depthWrite:!1});e.dyn.strips=[],[[-17.1,19.6],[-17.1,-7.2]].forEach(([$,O])=>{for(let it=0;it<7;it++){let ot=new W(new be(.46,2.6),L);ot.position.set($-1.55+it*.5,1.65,O),s.add(ot),e.dyn.strips.push({mesh:ot,phase:it*.9+O})}});let P=new j({color:14212562,roughness:.95,transparent:!0,opacity:.16});for(let $=0;$<6;$++){let O=y(.8+Math.random()*1.4,.5+Math.random()*.8,P,-18.82,.6+Math.random()*1.6,-4+$*4+Math.random()*2,Math.PI/2);O.rotation.z=Math.random()*3}}s.fog=new tr(854536,.016),e.dyn.fog=s.fog;let Ae=new Ji(3351580,.7);s.add(Ae),e.dyn.ambient=Ae;let ye=new fr(2760728,854536,.5);return s.add(ye),e}var Ju=10817302,Oc=3998727,ax=16722466,Hc=class{constructor(t,e,n=new R(0,0,1)){this.id=t,this.pos=e.clone(),this.normal=n.clone(),this.cords=[],this.group=new ie,this.group.position.copy(e),this._build()}_build(){let t=new j({color:13081146,metalness:.85,roughness:.35,emissive:2759685}),e=new W(new Jt(.055,.07,.03,10),t);e.rotation.x=Math.PI/2,this.group.add(e);let n=new _n([new R(0,0,.015),new R(0,-.01,.09),new R(0,-.075,.115),new R(0,-.12,.07)]),i=new W(new Sn(n,10,.016,6),t);this.group.add(i),this.marker=new W(new ne(.035,8,8),new j({color:14200912,emissive:6703130,emissiveIntensity:1})),this.marker.position.set(0,-.05,.1),this.group.add(this.marker),this.group.quaternion.setFromUnitVectors(new R(0,0,1),this.normal),this.group.position.copy(this.pos)}setHighlight(t){this.highlighted=t,t||(this.marker.material.emissiveIntensity=1,this.marker.scale.setScalar(1))}pop(){this._pop=1}tick(t,e,n){if(this._pop>0){this._pop=Math.max(0,this._pop-t*3.2);let i=1+Math.sin(this._pop*Math.PI)*.9;this.marker.scale.setScalar(i),this.marker.material.emissiveIntensity=1+this._pop*7;return}if(this.highlighted){let i=5+Math.sin(e*9)*2.5;this.marker.material.emissiveIntensity=i,this.marker.scale.setScalar(1.7+Math.sin(e*9)*.25)}else n&&(this.marker.material.emissiveIntensity=2.2+Math.sin(e*4+this.pos.x)*1.4,this.marker.scale.setScalar(1.15+Math.sin(e*4+this.pos.x)*.12))}},ox=0,kc=class{constructor(t,e,n,i={}){this.sys=t,this.id="cord"+ox++,this.a=e,this.b=n,this.slack=i.slack??.5,this.tag=i.tag||"",this.rideable=i.rideable!==!1,this.fixedEnd=i.fixedEnd||null,this.heldEnd=null,this.mat=new j({color:Ju,emissive:Oc,emissiveIntensity:1.2,roughness:.75}),this.mesh=new W(new He,this.mat),this.mesh.castShadow=!1,this.mesh.userData.cord=this;let r=new ne(.05,8,8),a=new j({color:13081146,metalness:.7,roughness:.4}),o=new pn(.035,.16,8),l=new j({color:9309202,roughness:.9});this.knotA=new ie,this.knotA.add(new W(r,a));let c=new W(o,l);c.position.y=-.11,this.knotA.add(c),this.knotB=this.knotA.clone(),this.knotA.userData={cord:this,end:"a"},this.knotB.userData={cord:this,end:"b"},this.knotA.traverse(h=>h.userData={cord:this,end:"a"}),this.knotB.traverse(h=>h.userData={cord:this,end:"b"}),this.curve=null,this.length=1,this._wave=0,e&&e.cords.push(this),n&&n.cords.push(this),this.rebuild()}endPos(t){if(this.heldEnd===t)return this.sys.handPos;let e=t==="a"?this.a:this.b;return e?e.pos:this.sys.handPos}rebuild(){let t=this.endPos("a"),e=this.endPos("b"),n=t.distanceTo(e);this.length=n;let i=this._settle>0?1+Math.sin(this._settle*Math.PI*2.2)*.55*this._settle:1,r=Math.min(1.35,n*.055*(1+this.slack)*i),a=t.clone().lerp(e,.5);a.y-=r;let o=t.clone().lerp(e,.25);o.y-=r*.72;let l=t.clone().lerp(e,.75);l.y-=r*.72,this.curve=new _n([t,o,a,l,e]);let c=this.mesh.geometry;this.mesh.geometry=new Sn(this.curve,16,.024,6),c&&c.dispose(),this.knotA.position.copy(t),this.knotB.position.copy(e)}pointAt(t){return this.curve.getPointAt(nn.clamp(t,0,1))}vibrate(){this._wave=1}update(t){if(this._wave>0){this._wave=Math.max(0,this._wave-t*1.4);let e=1+Math.sin(performance.now()*.04)*.012*this._wave;this.mesh.scale.set(1,e,1),this.mat.emissiveIntensity=1.2+this._wave*1.5}this._settle>0&&(this._settle=Math.max(0,this._settle-t*1.8),this.rebuild()),this.heldEnd&&this.rebuild()}detach(t){let e=t==="a"?this.a:this.b;if(e){let n=e.cords.indexOf(this);n>=0&&e.cords.splice(n,1)}t==="a"?this.a=null:this.b=null,this.heldEnd=t,this.rebuild()}attach(t,e){t==="a"?this.a=e:this.b=e,e.cords.push(this),this.heldEnd=null,this._settle=1,this.rebuild()}otherHook(t){return this.a===t?this.b:this.a}},Yo=class{constructor(t){this.scene=t,this.trail=[],this.maxLen=46,this.segments=4,this.glow=0,this.mat=new j({color:Ju,emissive:Oc,emissiveIntensity:1.4,roughness:.8}),this.mesh=new W(new He,this.mat),this.mesh.frustumCulled=!1,t.add(this.mesh),this._rebuildTimer=0}record(t){let e=t.clone();if(e.y=.06,this.trail.length===0||this.trail[this.trail.length-1].distanceToSquared(e)>.55)for(this.trail.push(e);this.trail.length>this.maxLen;)this.trail.shift()}shorten(){for(this.maxLen=Math.max(10,this.maxLen-12);this.trail.length>this.maxLen;)this.trail.shift();this.segments=Math.max(0,this.segments-1);let t=1-this.segments*.12;this.mat.color.setRGB(.65*(1-t*.5),.05,.07)}update(t,e){if(this.glow=Math.max(0,this.glow-t*.7),this.mat.emissiveIntensity=1.4+this.glow*9,this.mat.emissive.setHex(this.glow>.15?ax:Oc),this._rebuildTimer-=t,this._rebuildTimer>0||this.trail.length<2)return;this._rebuildTimer=.12;let n=this.trail.slice();n.push(e.clone());let i=new _n(n),r=this.mesh.geometry;this.mesh.geometry=new Sn(i,Math.min(64,n.length*2),.016,5),r&&r.dispose()}},Zo=class{constructor(t,e){this.scene=t,this.audio=e,this.hooks=new Map,this.cords=[],this.held=null,this.handPos=new R,this.group=new ie,t.add(this.group),this.onTopologyChange=null,this.onNoise=null}addHook(t,e,n,i,r=0,a=0,o=1,l=!1){let c=new Hc(t,new R(e,n,i),new R(r,a,o).normalize());return c.locked=l,l&&(c.marker.visible=!1),this.hooks.set(t,c),this.group.add(c.group),c}hook(t){return this.hooks.get(t)}addCord(t,e,n={}){let i=new kc(this,this.hooks.get(t),this.hooks.get(e),n);return this.cords.push(i),this.group.add(i.mesh,i.knotA,i.knotB),i}removeCord(t){["a","b"].forEach(n=>{let i=n==="a"?t.a:t.b;if(i){let r=i.cords.indexOf(t);r>=0&&i.cords.splice(r,1)}});let e=this.cords.indexOf(t);e>=0&&this.cords.splice(e,1),this.group.remove(t.mesh,t.knotA,t.knotB),t.mesh.geometry.dispose()}clearAllCords(){[...this.cords].forEach(t=>this.removeCord(t))}grab(t,e){return this.held?!1:(t.detach(e),this.held=t,this.audio?.pluck(70+Math.random()*30,.35),t.vibrate(),this.onTopologyChange?.(t),!0)}hang(t){if(!this.held)return!1;let e=this.held;return e.attach(e.heldEnd===null?"a":e.heldEnd,t),this.held=null,this.audio?.pluck(120+Math.random()*60,.4),this.audio?.ratchet(),t.pop(),e.vibrate(),this.onTopologyChange?.(e),this.onNoise?.(.25,t.pos),!0}nearestTarget(t,e,n=2.7){let i=null,r=.62,a=new R;if(this.held)for(let o of this.hooks.values()){if(o.locked||o.cords.length>=3)continue;a.copy(o.pos).sub(t);let l=a.length();if(l>n)continue;a.normalize();let c=a.dot(e);c>r&&(r=c,i={type:"hook",hook:o,pos:o.pos,dist:l})}else for(let o of this.cords)if(o.tag!=="deco")for(let l of["a","b"]){if(o.fixedEnd===l)continue;let c=o.endPos(l);a.copy(c).sub(t);let h=a.length();if(h>n)continue;a.normalize();let d=a.dot(e);d>r+Math.min(.3,h*.06)&&(r=d,i={type:"cordEnd",cord:o,end:l,pos:c,dist:h})}return i}nearestHook(t,e=2.4){let n=null,i=e;for(let r of this.hooks.values()){if(r.locked)continue;let a=r.pos.distanceTo(t);a<i&&(i=a,n=r)}return n}update(t,e){this.handPos.copy(e),this._t=(this._t||0)+t;for(let n of this.cords)n.update(t);for(let n of this.hooks.values()){if(n.locked)continue;let i=!!this.held&&n.cords.length<3&&n.pos.distanceToSquared(e)<100;n.tick(t,this._t,i)}}};var zc=s=>new j({map:Xu(s),roughness:.6});function Ku({suit:s=2630174,shirt:t=14210248,skin:e="waiter",hair:n=1314828,dress:i=!1,armMat:r=null}){let a=new ie,o=new j({color:s,roughness:.82}),l=new j({color:t,roughness:.85}),c=new j({color:n,roughness:.9}),h=new j({color:1709588,roughness:.9});if(i){let m=[];for(let w=0;w<=8;w++){let v=w/8;m.push(new Ct(.3-v*.14+Math.sin(v*3.14)*.02,v*1.28))}let b=new W(new pi(m,10),o);b.castShadow=!0,a.add(b)}else{for(let S of[-1,1]){let E=new W(new Jt(.075,.085,.72,8),h);E.position.set(S*.1,.42,0),E.castShadow=!0,a.add(E);let C=new W(new Ce(.11,.07,.24),new j({color:854793,roughness:.4}));C.position.set(S*.1,.045,.04),a.add(C)}let m=[],b=[[.16,0],[.19,.12],[.2,.3],[.185,.44],[.21,.5],[.05,.56]];for(let[S,E]of b)m.push(new Ct(S,E));let w=new W(new pi(m,10),o);w.scale.set(1.25,1,.85),w.position.y=.78,w.castShadow=!0,a.add(w);let v=new W(new be(.12,.26),l);v.position.set(0,1.14,.155),a.add(v)}let d=r||o,u={};for(let m of[-1,1]){let b=new ie;b.position.set(m*.24,1.3,0);let w=new W(new Jt(.05,.045,.32,8),o);w.position.y=-.16,b.add(w);let v=new ie;v.position.y=-.33;let S=new W(new Jt(.042,.038,.3,8),d);S.position.y=-.15,v.add(S);let E=new W(new ne(.05,8,8),zc(e));E.position.y=-.32,v.add(E),b.add(v),b.rotation.z=m*.1,a.add(b),u[m<0?"left":"right"]={shoulder:b,elbow:v,hand:E}}let f=new W(new Jt(.045,.05,.09,8),zc(e));f.position.y=1.4,a.add(f);let p=new ie;p.position.y=1.56;let y=new W(new ne(.115,14,12),zc(e));y.scale.set(.92,1.08,.98),y.rotation.y=Math.PI/2,y.castShadow=!0,p.add(y);let g=new W(new ne(.12,12,10,0,Math.PI*2,0,Math.PI*.55),c);return g.scale.set(.95,1.05,1),g.position.set(0,.015,-.015),p.add(g),a.add(p),{group:a,arms:u,head:p}}var $o=class{constructor(t){let e=Ku({suit:7213075,shirt:15261904,skin:"mc",hair:854536});this.group=e.group,this.arms=e.arms,this.head=e.head;let n=new j({color:13081146,metalness:.7,roughness:.35});for(let u of[-1,1]){let f=new W(new pn(.035,.07,6),n);f.rotation.z=u*Math.PI/2,f.position.set(u*.035,1.37,.13),this.group.add(f)}{let u=new ie,f=new j({color:12587032,roughness:.65,emissive:2622986});for(let g=0;g<6;g++){let m=new W(new ne(.022,6,5),f),b=g/6*Math.PI*2;m.position.set(Math.cos(b)*.028,Math.sin(b)*.028,0),m.scale.z=.5,u.add(m)}let p=new W(new ne(.016,6,5),new j({color:14200912,roughness:.5}));p.position.z=.012,u.add(p);let y=new W(new pn(.014,.05,5),new j({color:3038260,roughness:.8}));y.position.set(-.04,-.03,-.005),y.rotation.z=1.1,u.add(y),u.position.set(.13,1.22,.15),this.group.add(u)}let i=new j({color:14998466,roughness:.22,envMapIntensity:1.6,transparent:!0,opacity:.97,emissive:788998}),r=new bn(new ne(1,6,6),i,90),a=new Oe;Ee(404);for(let u=0;u<90;u++){let f=(ut()-.5)*1.5,p=-.35-ut()*.45,y=.115,g=Math.sin(f)*Math.cos(p)*y*.92,m=Math.sin(p)*y*1.08,b=Math.cos(f)*Math.cos(p)*y*.98;a.position.set(g,m+.01,b+.005),a.scale.setScalar(.006+ut()*.012),a.updateMatrix(),r.setMatrixAt(u,a.matrix)}this.head.add(r),this.roe=r;let o=new ie,l=new W(new Jt(.018,.023,.18,8),new j({color:1841688,roughness:.5}));o.add(l);let c=new W(new ne(.035,10,8),new j({color:7829367,metalness:.9,roughness:.35}));c.position.y=.11,o.add(c),o.position.set(0,-.32,.06),o.rotation.x=-.9,this.arms.right.elbow.add(o);let h=new j({color:1118481,roughness:.8}),d=new W(new Sn(new _n([new R(.28,.95,.12),new R(.34,.5,.3),new R(.2,.05,.5),new R(-.3,.01,.7),new R(-.5,-.4,.75)]),16,.012,6),h);this.group.add(d),this.arms.right.shoulder.rotation.x=-.9,this.arms.right.elbow.rotation.x=-.9,this.arms.left.shoulder.rotation.z=-.15,this.group.position.set(0,.6,-18.2),this.group.scale.setScalar(1.06),t.add(this.group),this.gestureT=-1,this.sync=0,this.silenced=!1,this._t=0}gesture(){this.gestureT=0}update(t,e){this._t+=t;let n=1+Math.sin(this._t*1.1)*.008;if(this.group.scale.set(1.06,1.06*n,1.06),e.z<1&&Math.abs(e.x)<16&&!this.silenced){let r=e.x-this.group.position.x,a=e.z-this.group.position.z,o=Math.atan2(r,a);this.head.rotation.y+=(nn.clamp(o,-.9,.9)-this.head.rotation.y)*t*.4}if(this.gestureT>=0){this.gestureT+=t;let r=Math.min(1,this.gestureT/.8),a=Math.sin(r*Math.PI)*.9;this.arms.left.shoulder.rotation.x=-a,this.gestureT>2.2&&(this.gestureT=-1,this.arms.left.shoulder.rotation.x=0)}this.silenced&&(this.head.rotation.x+=(.5-this.head.rotation.x)*t,this.arms.right.shoulder.rotation.x+=(0-this.arms.right.shoulder.rotation.x)*t*2,this.arms.right.elbow.rotation.x+=(0-this.arms.right.elbow.rotation.x)*t*2)}},Us=class{constructor(t,e){this.id=e;let n=Yu(),i=new j({...n}),r=Ku({suit:1513500,shirt:14999764,skin:"waiter",hair:1051914,armMat:i});this.group=r.group,this.arms=r.arms,this.head=r.head;let a=new W(new Jt(.052,.055,.06,8),i);a.position.y=1.44,this.group.add(a);let o=new ie,l=new W(new Jt(.24,.22,.02,14),new j({color:10133670,metalness:.9,roughness:.3}));if(o.add(l),e===0){let h=new W(new Jt(.13,.15,.09,12),new j({...qo()}));h.position.y=.06,o.add(h)}else if(e===1){let h=new j({color:15262938,roughness:.18,envMapIntensity:1.2});for(let d=0;d<6;d++){let u=new W(new Jt(.085-d*.002,.06,.045,10),h);u.position.y=.035+d*.042,u.rotation.y=d*.4,o.add(u)}}else{let h=new W(new ne(.15,14,10,0,Math.PI*2,0,Math.PI*.5),new j({color:12104872,metalness:.95,roughness:.18,envMapIntensity:1.8}));h.position.y=.02,o.add(h);let d=new W(new ne(.02,8,6),new j({color:13081146,metalness:.8,roughness:.3}));d.position.y=.17,o.add(d)}o.position.set(-.22,1.08,.24),this.group.add(o);let c=new W(new be(.34,.42),new j({color:986898,roughness:.9,side:Se}));c.position.set(0,.72,.19),c.rotation.x=.06,this.group.add(c),this.group.scale.setScalar(.98+e*.045),this.head.rotation.z=(e-1)*.06,this.arms.left.shoulder.rotation.x=-.85,this.arms.left.elbow.rotation.x=-.75,this.arms.right.shoulder.rotation.x=Math.PI-.2,this.arms.right.elbow.rotation.x=.25,this.group.rotation.x=.045,t.add(this.group),this.state="idle",this.cord=null,this.t=0,this.dir=1,this.speed=.92,this.standTimer=0,this.targetPos=new R,this.yaw=0,this._bob=Math.random()*6,this.visible=!1,this.group.visible=!1}setVisible(t){this.visible=t,this.group.visible=t}mountNearest(t,e){let n=null,i=1e9;for(let r of t.cords){if(!r.rideable||r.tag==="deco"||!r.a||!r.b)continue;let a=r.pointAt(.5).distanceTo(e);a<i&&(i=a,n=r)}if(n){this.cord=n,this.t=.5,this.dir=Math.random()>.5?1:-1,this.state="ride";let r=n.pointAt(this.t);this.group.position.set(r.x,0,r.z)}else this.state="stand",this.standTimer=3}onTopologyChange(t,e){this.cord===e&&this.state==="ride"&&(this.state="stand",this.standTimer=2.6,this.cord=null)}startChase(t=!1){if(!(this.state==="escorting"||this.state==="chase")){if(t||this.state==="alert"){this.state="chase";return}this.state="alert",this.alertTimer=.9}}stopChase(t){(this.state==="chase"||this.state==="alert")&&(this.state="stand",this.standTimer=1.2)}update(t,e,n,i,r){if(!this.visible)return;this._bob+=t;let a=this.group,o=!1,l=new R;if(this.state==="alert"){this.alertTimer-=t;let h=n.x-a.position.x,d=n.z-a.position.z,f=Math.atan2(h,d)-this.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;this.head.rotation.y+=(nn.clamp(f,-1.2,1.2)-this.head.rotation.y)*Math.min(1,t*14),this._alertSting||(this._alertSting=!0,r?.sting(.3)),this.alertTimer<=0&&(this.state="chase",this._alertSting=!1)}else this.head.rotation.y!==0&&this.state!=="chase"&&(this.head.rotation.y+=(0-this.head.rotation.y)*t*3);if(this.state==="ride"&&this.cord)if(!e.cords.includes(this.cord)||!this.cord.a||!this.cord.b)this.state="stand",this.standTimer=2.6,this.cord=null;else{let h=Math.max(.5,this.cord.length);if(this.t+=this.speed/h*this.dir*t,this.t>=1||this.t<=0){let u=this.t>=1?this.cord.b:this.cord.a;this.t=nn.clamp(this.t,0,1);let f=u.cords.filter(p=>p!==this.cord&&p.rideable&&p.a&&p.b&&p.tag!=="deco");if(f.length>0){let p=f[Math.random()*f.length|0];this.cord=p,this.t=p.a===u?0:1,this.dir=p.a===u?1:-1}else this.dir*=-1,Math.random()<.3&&r&&r.pluck(60,.12)}let d=this.cord.pointAt(this.t);if(l.set(d.x-a.position.x,0,d.z-a.position.z),a.position.set(d.x,0,d.z),o=!0,this.cord.mat.emissiveIntensity=1.6,a.position.distanceTo(n)<.85){i(this);return}}else if(this.state==="stand")this.standTimer-=t,this.standTimer<=0&&(this.state="walk");else if(this.state==="walk"){let h=null,d=1e9,u=null;for(let f of e.cords)if(!(!f.rideable||f.tag==="deco"||!f.a||!f.b))for(let p of["a","b"]){let y=f.endPos(p),g=y.distanceTo(a.position);g<d&&(d=g,h=f,u=y)}h?(l.set(u.x-a.position.x,0,u.z-a.position.z),l.length()<.4?(this.cord=h,this.t=h.endPos("a").distanceTo(a.position)<h.endPos("b").distanceTo(a.position)?0:1,this.dir=this.t===0?1:-1,this.state="ride"):(l.normalize().multiplyScalar(.75*t),a.position.add(l),o=!0)):(this.state="stand",this.standTimer=3)}else if(this.state==="chase"){if(l.set(n.x-a.position.x,0,n.z-a.position.z),l.length()<.95){i(this);return}l.normalize().multiplyScalar(1.5*t),a.position.add(l),o=!0}if(o&&l.lengthSq()>1e-8){let d=Math.atan2(l.x,l.z)-this.yaw;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;this.yaw+=d*Math.min(1,t*6),a.rotation.y=this.yaw}a.position.y=Math.sin(this._bob*2.6)*.018+.01;let c=this.state==="ride"?Math.PI-.2:-.1;this.arms.right.shoulder.rotation.x+=(c-this.arms.right.shoulder.rotation.x)*t*4}},Jo=class{constructor(t,e=44){this.count=e;let n=new pi([[.2,0],[.23,.35],[.2,.8],[.23,1.05],[.2,1.3],[.05,1.42]].map(([l,c])=>new Ct(l,c)),8),i=new ne(.105,10,8),r=new j({roughness:.88}),a=new j({color:14200980,roughness:.65});this.bodies=new bn(n,r,e),this.heads=new bn(i,a,e),this.bodies.castShadow=!0;let o=[6965842,4871272,9318456,6051400,3946052,10111554];this.data=[],Ee(777);for(let l=0;l<e;l++)this.bodies.setColorAt(l,new zt(o[ut()*o.length|0])),this.data.push({pos:new R,yaw:ut()*Math.PI*2,targetYaw:null,phase:ut()*6.28,scale:.94+ut()*.12});t.add(this.bodies,this.heads),this._dum=new Oe,this.mode="hidden"}layoutParty(t){Ee(888);let e=0;for(let n of this.data){let[i,r]=t[e%t.length],a=ut()*Math.PI*2,o=1.9+ut()*.8;n.pos.set(i+Math.cos(a)*o,0,r+Math.sin(a)*o),n.pos.x=nn.clamp(n.pos.x,-14,14),n.pos.z=nn.clamp(n.pos.z,-16.5,-1),n.yaw=a+Math.PI/2+(ut()-.5),n.targetYaw=null,e++}this.mode="party"}layoutFinale(t){Ee(999);let e=0;for(let n of this.data){let i=e%3,r=e/this.count*Math.PI*2+i*.35,a=4.2+i*1.9+ut()*.5;n.pos.set(t[0]+Math.cos(r)*a,0,t[1]+Math.sin(r)*a*.72),n.pos.x=nn.clamp(n.pos.x,-14,14),n.pos.z=nn.clamp(n.pos.z,-19,-1.2),n.yaw=Math.atan2(t[0]-n.pos.x,t[1]-n.pos.z),n.targetYaw=null,e++}this.mode="finale"}hide(){this.mode="hidden"}turnTo(t,e){for(let n of this.data)n.targetYaw=Math.atan2(t-n.pos.x,e-n.pos.z)}update(t,e){let n=this.mode!=="hidden";if(this.bodies.visible=this.heads.visible=n,!n)return;let i=this._dum;for(let r=0;r<this.count;r++){let a=this.data[r];if(a.targetYaw!==null){let c=a.targetYaw-a.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;a.yaw+=c*Math.min(1,t*1.2),Math.abs(c)<.02&&(a.targetYaw=null)}let o=.04+Math.sin(e*.7+a.phase)*.025,l=Math.sin(e*.5+a.phase*2)*.02;i.position.set(a.pos.x,o,a.pos.z),i.rotation.set(l,a.yaw,l*.7),i.scale.setScalar(a.scale),i.updateMatrix(),this.bodies.setMatrixAt(r,i.matrix),i.position.y=o+1.52*a.scale,i.updateMatrix(),this.heads.setMatrixAt(r,i.matrix)}this.bodies.instanceMatrix.needsUpdate=!0,this.heads.instanceMatrix.needsUpdate=!0,this.bodies.instanceColor&&(this.bodies.instanceColor.needsUpdate=!0)}},Ko=class{constructor(t){this.group=new ie;let e=new oe({color:11452356,transparent:!0,opacity:.32,blending:In,depthWrite:!1}),n=e.clone();n.opacity=.14;let i=new pi([[.26,0],[.2,.5],[.17,.95],[.2,1.2],[.17,1.35],[.04,1.45]].map(([u,f])=>new Ct(u,f)),10),r=new W(i,e);this.group.add(r);let a=new W(i,n);a.position.set(.04,0,-.02),this.group.add(a);let o=new W(new ne(.1,10,8),e);o.position.y=1.58,this.group.add(o);let l=new pn(.12,.5,8),c=new W(l,n);c.position.set(0,1.42,-.08),this.group.add(c);let h=new W(new be(.26,.75),n);h.position.set(0,1.15,-.14),h.rotation.x=.08,this.group.add(h);let d=new W(new Jt(.012,.012,.2,5),new oe({color:9311256,transparent:!0,opacity:.6}));d.position.set(.24,.95,.05),d.rotation.z=.4,this.group.add(d),this.group.visible=!1,t.add(this.group),this.opacity=0,this.mats=[e,n],this.fixedYaw=null,this.dissolving=!1}appearAt(t,e,n=null){this.group.position.set(t,.05,e),this.group.visible=!0,this.opacity=0,this.dissolving=!1,this.fixedYaw=n}vanish(){this.dissolving=!0}update(t,e,n){if(!this.group.visible)return;if(this.dissolving){if(this.opacity=Math.max(0,this.opacity-t*1.6),this.opacity<=0){this.group.visible=!1;return}}else this.opacity=Math.min(1,this.opacity+t*.8),this.group.position.distanceTo(e)<2.6&&(this.dissolving=!0);let i=.8+Math.sin(n*9.7)*.1+Math.sin(n*23.3)*.06;this.mats[0].opacity=.32*this.opacity*i,this.mats[1].opacity=.14*this.opacity*i;let r=this.fixedYaw!==null?this.fixedYaw:Math.atan2(e.x-this.group.position.x,e.z-this.group.position.z);this.group.rotation.y+=(r-this.group.rotation.y)*t*2,this.group.position.y=.05+Math.sin(n*.9)*.03}},Qo=class{constructor(t){this.scene=t,this.group=new ie;let e=new j({color:10817302,roughness:.55,emissive:2425866}),n=new W(new pi([[.26,0],[.3,.2],[.24,.5],[.26,.75],[.2,.95],[.06,1.05]].map(([h,d])=>new Ct(h,d)),10),e);n.castShadow=!0,this.group.add(n);let i=new W(new pn(.2,.42,10,3,!0),new j({map:qu(),roughness:.5,side:Se,emissive:3147274}));i.position.y=1.22,this.group.add(i);let r=new j({color:13081146,metalness:.85,roughness:.3,envMapIntensity:1.6}),a=new W(new En(.14,.018,6,18),r);a.rotation.x=Math.PI/2,a.position.y=1.36,this.group.add(a),this.beads=[];for(let h=0;h<7;h++){let d=-.9+h*.3,u=new ie;for(let f=0;f<4;f++){let p=new W(new ne(.011,6,5),r);p.position.y=-.035*(f+1),u.add(p)}u.position.set(Math.sin(d)*.14,1.36,Math.cos(d)*.14),this.group.add(u),this.beads.push({g:u,phase:h*1.1})}let o=new W(new pn(.05,.1,8),r);o.position.y=1.42,this.group.add(o);let l=new W(new ne(.05,8,8),new j({color:13148292,roughness:.7}));l.position.set(.1,.55,.2),this.group.add(l);let c=l.clone();c.position.x=-.1,this.group.add(c),this.group.visible=!1,t.add(this.group),this._t=0}show(t,e,n){if(this.group.position.set(t,.42,e),this.group.rotation.y=n,this.group.visible=!0,!this._knot){this._knot=new ie;let i=new j({color:10817302,emissive:3998727,emissiveIntensity:1.2,roughness:.75}),r=new R(2.1,.1,-13.5),a=new R(.4,.08,-13.6),o=new W(new Sn(new _n([new R(t,.5,e),new R(t+.4,.06,e+.3),a,new R(1.4,.05,-13.4),r]),20,.018,5),i);this._knot.add(o);let l=new W(new ne(.07,8,8),i);l.position.copy(a),this._knot.add(l),this.scene.add(this._knot)}}update(t){if(!this.group.visible)return;this._t+=t;let e=1+Math.sin(this._t*.8)*.01;this.group.scale.set(1,e,1);for(let n of this.beads)n.g.rotation.x=Math.sin(this._t*7.3+n.phase)*.06,n.g.rotation.z=Math.cos(this._t*8.1+n.phase)*.05}};var jo=class{constructor(){this.ctx=null,this.master=null,this.ambientBus=null,this.layers={},this.started=!1,this._noiseBuf=null}init(){if(this.started)return;let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.85,this.verb=this.ctx.createGain(),this.verb.gain.value=.22;let e=this.ctx.createDelay(1);e.delayTime.value=.13;let n=this.ctx.createDelay(1);n.delayTime.value=.211;let i=this.ctx.createGain();i.gain.value=.32;let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=2400,this.verb.connect(e),e.connect(n),n.connect(i),i.connect(r),r.connect(e),n.connect(this.master),this.master.connect(this.ctx.destination),this.ambientBus=this.ctx.createGain(),this.ambientBus.gain.value=1,this.ambientBus.connect(this.master),this._noiseBuf=this._makeNoise(),this.started=!0,this._buildAmbience()}_makeNoise(){let t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0),i=0;for(let r=0;r<t;r++){let a=Math.random()*2-1;i=(i+.02*a)/1.02,n[r]=i*3.5}return e}_noiseSrc(t,e,n,i,r){let a=this.ctx.createBufferSource();a.buffer=this._noiseBuf,a.loop=!0,a.playbackRate.value=.7+Math.random()*.5;let o=this.ctx.createBiquadFilter();o.type=e,o.frequency.value=n,o.Q.value=i;let l=this.ctx.createGain();return l.gain.value=r,a.connect(o),o.connect(l),l.connect(t),a.start(),{src:a,f:o,g:l}}_buildAmbience(){let t=this.ctx;this.layers.roomtone=this._noiseSrc(this.ambientBus,"lowpass",320,.5,.05);let e=t.createOscillator();e.type="sawtooth",e.frequency.value=100;let n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=200,n.Q.value=6;let i=t.createGain();i.gain.value=.006,e.connect(n),n.connect(i),i.connect(this.ambientBus),e.start(),this.layers.hum={g:i};let r=this._noiseSrc(this.ambientBus,"bandpass",480,1.2,0);this.layers.murmur=r,this._murmurLFO(r);let a=t.createOscillator();a.type="sine",a.frequency.value=31;let o=t.createGain();o.gain.value=0,a.connect(o),o.connect(this.master),a.start();let l=this._noiseSrc(this.master,"lowpass",90,.7,0);this.layers.sea={g:o,n:l.g};let c=this._noiseSrc(this.ambientBus,"bandpass",900,.8,0);this.layers.water=c;let h=t.createStereoPanner();h.connect(this.master);let d=this._noiseSrc(h,"bandpass",2600,3.5,0),u=t.createOscillator();u.type="sine",u.frequency.value=52;let f=t.createOscillator();f.frequency.value=4.2;let p=t.createGain();p.gain.value=.5;let y=t.createGain();y.gain.value=0,f.connect(p),p.connect(y.gain),u.connect(y),y.connect(h),u.start(),f.start(),this.threatNodes={pan:h,shim:d.g,pulse:y};let g=t.createStereoPanner();g.connect(this.master);let m=t.createOscillator();m.type="sawtooth",m.frequency.value=82;let b=t.createBiquadFilter();b.type="bandpass",b.frequency.value=164,b.Q.value=9;let w=t.createOscillator();w.frequency.value=6.3;let v=t.createGain();v.gain.value=.5;let S=t.createGain();S.gain.value=0,w.connect(v),v.connect(S.gain),m.connect(b),b.connect(S),S.connect(g),m.start(),w.start(),this.cordHumNodes={pan:g,g:S}}setThreat(t,e=0){if(!this.started||!this.threatNodes)return;let n=this.ctx.currentTime;this.threatNodes.shim.gain.setTargetAtTime(t*.05,n,.18),this.threatNodes.pulse.gain.setTargetAtTime(t*.16,n,.18),this.threatNodes.pan.pan.setTargetAtTime(e,n,.12)}setCordHum(t,e=0){if(!this.started||!this.cordHumNodes)return;let n=this.ctx.currentTime;this.cordHumNodes.g.gain.setTargetAtTime(t*.045,n,.25),this.cordHumNodes.pan.pan.setTargetAtTime(e,n,.15)}_murmurLFO(t){let e=this.ctx,n=()=>{if(!this.started)return;let i=e.currentTime;t.f.frequency.setTargetAtTime(300+Math.random()*700,i,.25),setTimeout(n,300+Math.random()*700)};n()}setLayer(t,e,n=1.5){if(!this.started)return;let i=this.layers[t];if(!i)return;let r=i.g?i.g.gain:null;r&&r.setTargetAtTime(e,this.ctx.currentTime,n),t==="sea"&&i.n&&i.n.gain.setTargetAtTime(e*1.6,this.ctx.currentTime,n)}hush(t=3){if(!this.started)return;let e=this.ctx.currentTime;this.ambientBus.gain.cancelScheduledValues(e),this.ambientBus.gain.setTargetAtTime(.04,e,t*.33)}unhush(t=0){if(!this.started)return;let e=this.ctx.currentTime+t;this.ambientBus.gain.setTargetAtTime(1,e,2.2)}paChime(){if(!this.started)return;let t=this.ctx,e=t.currentTime;[523.25,659.25,783.99].forEach((n,i)=>{let r=t.createOscillator();r.type="sine",r.frequency.value=n;let a=t.createGain();a.gain.setValueAtTime(0,e+i*.42),a.gain.linearRampToValueAtTime(.16,e+i*.42+.03),a.gain.exponentialRampToValueAtTime(.001,e+i*.42+1.4),r.connect(a),a.connect(this.verb),a.connect(this.master),r.start(e+i*.42),r.stop(e+i*.42+1.5)})}broadcast(t=8,e=108,n=null){if(!this.started)return 0;let i=this.ctx,r=i.currentTime,a=n||t*.34+.6,o=i.createOscillator();o.type="sawtooth",o.frequency.value=e;let l=i.createOscillator();l.frequency.value=4.6;let c=i.createGain();c.gain.value=3.5,l.connect(c),c.connect(o.frequency);let h=i.createBiquadFilter();h.type="bandpass",h.Q.value=7;let d=i.createBiquadFilter();d.type="bandpass",d.Q.value=9;let u=i.createGain();u.gain.value=0;let f=i.createBiquadFilter();f.type="highpass",f.frequency.value=280;let p=i.createBiquadFilter();p.type="lowpass",p.frequency.value=2400,o.connect(h),o.connect(d),h.connect(u),d.connect(u),u.connect(f),f.connect(p),p.connect(this.master),p.connect(this.verb),o.start(r),l.start(r),o.stop(r+a+.3),l.stop(r+a+.3);let y=r+.15;for(let g=0;g<t;g++){let m=.16+Math.random()*.2;u.gain.setTargetAtTime(.14,y,.02),u.gain.setTargetAtTime(.004,y+m,.04),h.frequency.setValueAtTime(380+Math.random()*420,y),d.frequency.setValueAtTime(1100+Math.random()*900,y),o.frequency.setValueAtTime(e*(.92+Math.random()*.22),y),y+=m+.06+Math.random()*.1}return u.gain.setTargetAtTime(0,y,.1),a}pluck(t=82,e=.4,n=.996,i=0){if(!this.started)return;let r=this.ctx,a=r.sampleRate,o=Math.round(a/t),l=a*1.6,c=r.createBuffer(1,l,a),h=c.getChannelData(0),d=new Float32Array(o);for(let g=0;g<o;g++)d[g]=Math.random()*2-1;let u=0;for(let g=0;g<l;g++){let m=d[u],b=d[(u+1)%o],w=(m+b)*.5*n;d[u]=w,h[g]=m,u=(u+1)%o}let f=r.createBufferSource();f.buffer=c;let p=r.createGain();p.gain.value=e;let y=r.createBiquadFilter();if(y.type="lowpass",y.frequency.value=2600,f.connect(y),y.connect(p),i!==0){let g=r.createStereoPanner();g.pan.value=i,p.connect(g),g.connect(this.master)}else p.connect(this.master);p.connect(this.verb),f.start()}tension(t=1.6){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(60,n),i.frequency.exponentialRampToValueAtTime(340,n+t);let r=e.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.1,n+t*.7),r.gain.linearRampToValueAtTime(0,n+t);let a=e.createOscillator();a.type="triangle",a.frequency.setValueAtTime(61.5,n),a.frequency.exponentialRampToValueAtTime(345,n+t),i.connect(r),a.connect(r),r.connect(this.master),i.start(n),a.start(n),i.stop(n+t),a.stop(n+t)}footstep(t="terrazzo",e=!1){if(!this.started)return;let n=this.ctx,i=n.currentTime,r=n.createBufferSource();r.buffer=this._noiseBuf,r.playbackRate.value=2+Math.random();let a=n.createBiquadFilter(),o=n.createGain(),l=.07,c=e?.16:.07;if(t==="carpet"?(a.type="lowpass",a.frequency.value=400,c*=.5):t==="metal"?(a.type="bandpass",a.frequency.value=900,a.Q.value=3,l=.14,c*=1.3):t==="wet"?(a.type="bandpass",a.frequency.value=1600,a.Q.value=1,c*=.9):(a.type="bandpass",a.frequency.value=1200,a.Q.value=1.5),o.gain.setValueAtTime(c,i),o.gain.exponentialRampToValueAtTime(.001,i+l+Math.random()*.05),r.connect(a),a.connect(o),o.connect(this.master),r.start(i),r.stop(i+.3),t==="metal"){let h=n.createGain();h.gain.value=c*.6,a.connect(h),h.connect(this.verb)}}thud(t=.5){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(120,n),i.frequency.exponentialRampToValueAtTime(38,n+.28);let r=e.createGain();r.gain.setValueAtTime(t,n),r.gain.exponentialRampToValueAtTime(.001,n+.5),i.connect(r),r.connect(this.master),r.connect(this.verb),i.start(n),i.stop(n+.55);let a=e.createBufferSource();a.buffer=this._noiseBuf;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=500;let l=e.createGain();l.gain.setValueAtTime(t*.7,n),l.gain.exponentialRampToValueAtTime(.001,n+.3),a.connect(o),o.connect(l),l.connect(this.master),a.start(n),a.stop(n+.35)}glassCreak(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="sine";let i=900+Math.random()*1600;n.frequency.setValueAtTime(i,e),n.frequency.linearRampToValueAtTime(i*(.55+Math.random()*.2),e+.9);let r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.035,e+.15),r.gain.linearRampToValueAtTime(0,e+.9+Math.random()*.5),n.connect(r),r.connect(this.master),r.connect(this.verb),n.start(e),n.stop(e+1.6)}creakLow(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(55+Math.random()*30,e),n.frequency.linearRampToValueAtTime(35+Math.random()*15,e+1.4);let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=300;let r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.09,e+.4),r.gain.linearRampToValueAtTime(0,e+1.6),n.connect(i),i.connect(r),r.connect(this.master),r.connect(this.verb),n.start(e),n.stop(e+1.8)}motif(t=!1,e=.06){if(!this.started)return;let n=this.ctx,i=n.currentTime;(t?[523,554,622,740,622,554,523,370,523,494]:[523,587,659,784,659,587,523,392,523,523]).forEach((l,c)=>{let h=i+c*(t?.62:.34),d=n.createOscillator();d.type="sine",d.frequency.value=l;let u=n.createOscillator();u.type="triangle",u.frequency.value=l*2;let f=n.createGain();f.gain.setValueAtTime(0,h),f.gain.linearRampToValueAtTime(e,h+.01),f.gain.exponentialRampToValueAtTime(5e-4,h+(t?1.6:.9)),d.connect(f),u.connect(f),f.connect(this.master),f.connect(this.verb),d.start(h),u.start(h),d.stop(h+2),u.stop(h+2)})}heartbeat(){if(!this.started)return;let t=this.ctx,e=t.currentTime;[0,.18].forEach((n,i)=>{let r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(i?48:60,e+n);let a=t.createGain();a.gain.setValueAtTime(.22-i*.08,e+n),a.gain.exponentialRampToValueAtTime(.001,e+n+.16),r.connect(a),a.connect(this.master),r.start(e+n),r.stop(e+n+.2)})}sting(t=.4){if(!this.started)return;let e=this.ctx,n=e.currentTime;[178,183.5,356].forEach((o,l)=>{let c=e.createOscillator();c.type="sawtooth",c.frequency.value=o,c.frequency.linearRampToValueAtTime(o*1.06,n+1.1);let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=2200;let d=e.createGain();d.gain.setValueAtTime(0,n),d.gain.linearRampToValueAtTime(t*(l===2?.12:.2),n+.02),d.gain.exponentialRampToValueAtTime(.001,n+1.4),c.connect(h),h.connect(d),d.connect(this.master),d.connect(this.verb),c.start(n),c.stop(n+1.6)});let i=e.createBufferSource();i.buffer=this._noiseBuf,i.playbackRate.value=1.6;let r=e.createBiquadFilter();r.type="highpass",r.frequency.value=900;let a=e.createGain();a.gain.setValueAtTime(t*.5,n),a.gain.exponentialRampToValueAtTime(.001,n+.3),i.connect(r),r.connect(a),a.connect(this.master),i.start(n),i.stop(n+.35)}boom(t=.8){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(66,n),i.frequency.exponentialRampToValueAtTime(24,n+1.4);let r=e.createGain();r.gain.setValueAtTime(t,n),r.gain.exponentialRampToValueAtTime(.001,n+2.2),i.connect(r),r.connect(this.master),r.connect(this.verb),i.start(n),i.stop(n+2.4);let a=e.createBufferSource();a.buffer=this._noiseBuf,a.playbackRate.value=.5;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=260;let l=e.createGain();l.gain.setValueAtTime(t*.9,n),l.gain.exponentialRampToValueAtTime(.001,n+1.1),a.connect(o),o.connect(l),l.connect(this.master),l.connect(this.verb),a.start(n),a.stop(n+1.3)}whoosh(t=.2){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this._noiseBuf,i.playbackRate.setValueAtTime(.8,n),i.playbackRate.linearRampToValueAtTime(2.4,n+.5);let r=e.createBiquadFilter();r.type="bandpass",r.Q.value=1.4,r.frequency.setValueAtTime(300,n),r.frequency.exponentialRampToValueAtTime(1600,n+.5);let a=e.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(t,n+.22),a.gain.linearRampToValueAtTime(0,n+.6),i.connect(r),r.connect(a),a.connect(this.master),i.start(n),i.stop(n+.7)}ratchet(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this._noiseBuf,n.playbackRate.value=3.2;let i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=1900,i.Q.value=5;let r=t.createGain();r.gain.setValueAtTime(.09,e),r.gain.exponentialRampToValueAtTime(.001,e+.05),n.connect(i),i.connect(r),r.connect(this.master),n.start(e),n.stop(e+.08);let a=t.createOscillator();a.type="square",a.frequency.value=480;let o=t.createGain();o.gain.setValueAtTime(.02,e),o.gain.exponentialRampToValueAtTime(.001,e+.04),a.connect(o),o.connect(this.master),a.start(e),a.stop(e+.05)}drip(t=0){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine";let r=1400+Math.random()*900;i.frequency.setValueAtTime(r,n),i.frequency.exponentialRampToValueAtTime(r*.45,n+.09);let a=e.createGain();a.gain.setValueAtTime(.055,n),a.gain.exponentialRampToValueAtTime(.001,n+.14);let o=e.createStereoPanner();o.pan.value=t,i.connect(a),a.connect(o),o.connect(this.master),a.connect(this.verb),i.start(n),i.stop(n+.2)}bulbPop(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this._noiseBuf,n.playbackRate.value=2.8;let i=t.createBiquadFilter();i.type="highpass",i.frequency.value=2400;let r=t.createGain();r.gain.setValueAtTime(.5,e),r.gain.exponentialRampToValueAtTime(.001,e+.16),n.connect(i),i.connect(r),r.connect(this.master),r.connect(this.verb),n.start(e),n.stop(e+.2);for(let a=0;a<5;a++){let o=.06+a*.05+Math.random()*.04,l=t.createOscillator();l.type="sine",l.frequency.value=3800+Math.random()*2600;let c=t.createGain();c.gain.setValueAtTime(.028,e+o),c.gain.exponentialRampToValueAtTime(.001,e+o+.07),l.connect(c),c.connect(this.master),l.start(e+o),l.stop(e+o+.1)}}snip(){if(!this.started)return;this.pluck(660,.5,.992),this.pluck(49,.6,.999);let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this._noiseBuf,n.playbackRate.value=3;let i=t.createBiquadFilter();i.type="highpass",i.frequency.value=3e3;let r=t.createGain();r.gain.setValueAtTime(.3,e),r.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(i),i.connect(r),r.connect(this.master),n.start(e),n.stop(e+.15)}};var tl=class{constructor(t,e){this.camera=t,this.dom=e,this.pos=new R(0,0,-3),this.yaw=Math.PI,this.pitch=0,this.vel=new R,this.keys={},this.locked=!1,this.enabled=!1,this.seated=!1,this.radius=.32,this.eyeHeight=1.62,this.bobT=0,this.stepDist=0,this.onStep=null,this.holdE=0,this.eDown=!1,this.ePressed=!1,this.kickV=0,this.kickRoll=0,window.addEventListener("keydown",n=>{this.keys[n.code]=!0,n.code==="KeyE"&&!this.eDown&&(this.eDown=!0,this.ePressed=!0)}),window.addEventListener("keyup",n=>{this.keys[n.code]=!1,n.code==="KeyE"&&(this.eDown=!1,this.holdE=0)}),document.addEventListener("mousemove",n=>{!this.locked||!this.enabled||(this.yaw-=n.movementX*.0021,this.pitch-=n.movementY*.0021,this.pitch=nn.clamp(this.pitch,-1.35,1.35))}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.dom})}lock(){this.dom.requestPointerLock?.()}get forward(){return new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}get lookDir(){let t=new R;return this.camera.getWorldDirection(t),t}teleport(t,e,n=null){this.pos.set(t,0,e),this.vel.set(0,0,0),n!==null&&(this.yaw=n)}kick(t,e=0){this.kickV=t,this.kickRoll=e}update(t,e,n){if(this.ePressedThisFrame=this.ePressed,this.ePressed=!1,this.eDown?this.holdE+=t:this.holdE=0,!this.enabled||this.seated){this._applyCamera(t,!0);return}let i=this.keys.ShiftLeft||this.keys.ShiftRight,r=i?4.6:2.9,a=this.forward,o=new R(-a.z,0,a.x),l=new R;(this.keys.KeyW||this.keys.ArrowUp)&&l.add(a),(this.keys.KeyS||this.keys.ArrowDown)&&l.sub(a),(this.keys.KeyA||this.keys.ArrowLeft)&&l.sub(o),(this.keys.KeyD||this.keys.ArrowRight)&&l.add(o),l.lengthSq()>0&&l.normalize().multiplyScalar(r),this.vel.lerp(l,Math.min(1,t*10));let c=this.vel.clone().multiplyScalar(t);this.pos.x+=c.x,this._resolve(e,"x"),this.pos.z+=c.z,this._resolve(e,"z");let h=Math.hypot(c.x,c.z);this.stepDist+=h;let d=i?2.2:1.7;this.stepDist>d&&h>.001&&(this.stepDist=0,this.onStep?.(n(this.pos),i)),h>.005&&(this.bobT+=t*(i?11:7.5)),this._applyCamera(t,!1)}_resolve(t,e){for(let n of t){if(n.disabled)continue;let i=Math.max(n.minX,Math.min(this.pos.x,n.maxX)),r=Math.max(n.minZ,Math.min(this.pos.z,n.maxZ)),a=this.pos.x-i,o=this.pos.z-r,l=a*a+o*o;if(l<this.radius*this.radius){let c=Math.sqrt(Math.max(l,1e-6)),h=(this.radius-c)/c;e==="x"?this.pos.x+=a*h:this.pos.z+=o*h,l<1e-6&&(e==="x"?this.pos.x=this.pos.x<(n.minX+n.maxX)/2?n.minX-this.radius:n.maxX+this.radius:this.pos.z=this.pos.z<(n.minZ+n.maxZ)/2?n.minZ-this.radius:n.maxZ+this.radius)}}}_applyCamera(t,e){let n=e?0:Math.sin(this.bobT)*.035,i=e?0:Math.cos(this.bobT*.5)*.02;this.kickV*=Math.max(0,1-t*7),this.kickRoll*=Math.max(0,1-t*5),this.camera.position.set(this.pos.x+i*Math.cos(this.yaw),this.pos.y+this.eyeHeight+n,this.pos.z+i*Math.sin(this.yaw)),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch+this.kickV,this.camera.rotation.z=this.kickRoll}handPos(){let t=this.lookDir;return new R(this.pos.x+t.x*.5,this.pos.y+this.eyeHeight-.35+t.y*.3,this.pos.z+t.z*.5)}};var Vc=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,lx=`
uniform sampler2D tScene;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tScene, vUv).rgb;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  float k = smoothstep(0.5, 1.05, l);
  gl_FragColor = vec4(c * k, 1.0);
}`,cx=`
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
}`,hx=`
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
}`,el=class{constructor(t,e,n){this.renderer=t,this.scene=new hi,this.cam=new $i(-1,1,1,-1,0,1),this.quadGeo=new be(2,2),this.resize(e,n,!0),this.brightMat=new Xe({uniforms:{tScene:{value:null}},vertexShader:Vc,fragmentShader:lx}),this.blurMat=new Xe({uniforms:{tInput:{value:null},uDir:{value:new Ct}},vertexShader:Vc,fragmentShader:cx}),this.compMat=new Xe({uniforms:{tScene:{value:null},tBloomA:{value:null},tBloomB:{value:null},uTime:{value:0},uRedPulse:{value:0},uShock:{value:0},uFlash:{value:0},uLetterbox:{value:0},uExposure:{value:1.18}},vertexShader:Vc,fragmentShader:hx}),this.quad=new W(this.quadGeo,this.compMat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.redPulse=0,this.shock=0,this.flash=0,this.letterbox=0,this.letterboxTarget=0,this.exposure=1.18}resize(t,e,n=!1){let i={minFilter:Be,magFilter:Be};n||(this.rtScene.dispose(),this.rtA.dispose(),this.rtB.dispose(),this.rtC.dispose(),this.rtD.dispose()),this.rtScene=new We(t,e,{...i,samples:2}),this.rtA=new We(t>>2,e>>2,i),this.rtB=new We(t>>2,e>>2,i),this.rtC=new We(t>>3,e>>3,i),this.rtD=new We(t>>3,e>>3,i),this.w=t,this.h=e}_blur(t,e,n,i,r){let a=this.renderer;this.quad.material=this.blurMat,this.blurMat.uniforms.tInput.value=t.texture,this.blurMat.uniforms.uDir.value.set(1/i,0),a.setRenderTarget(n),a.render(this.scene,this.cam),this.blurMat.uniforms.tInput.value=n.texture,this.blurMat.uniforms.uDir.value.set(0,1/r),a.setRenderTarget(e),a.render(this.scene,this.cam)}render(t,e,n,i){let r=this.renderer;this.redPulse=Math.max(0,this.redPulse-n*.8),this.shock=Math.max(0,this.shock-n*.5),this.flash=Math.max(0,this.flash-n*2.2),this.letterbox+=(this.letterboxTarget-this.letterbox)*Math.min(1,n*3),r.setRenderTarget(this.rtScene),r.render(t,e),this.quad.material=this.brightMat,this.brightMat.uniforms.tScene.value=this.rtScene.texture,r.setRenderTarget(this.rtA),r.render(this.scene,this.cam),this._blur(this.rtA,this.rtA,this.rtB,this.w>>2,this.h>>2),this.quad.material=this.blurMat,this.blurMat.uniforms.tInput.value=this.rtA.texture,this.blurMat.uniforms.uDir.value.set(1/(this.w>>3),0),r.setRenderTarget(this.rtC),r.render(this.scene,this.cam),this.blurMat.uniforms.tInput.value=this.rtC.texture,this.blurMat.uniforms.uDir.value.set(0,1/(this.h>>3)),r.setRenderTarget(this.rtD),r.render(this.scene,this.cam),this._blur(this.rtD,this.rtD,this.rtC,this.w>>3,this.h>>3),this.quad.material=this.compMat;let a=this.compMat.uniforms;a.tScene.value=this.rtScene.texture,a.tBloomA.value=this.rtA.texture,a.tBloomB.value=this.rtD.texture,a.uTime.value=i,a.uRedPulse.value=this.redPulse,a.uShock.value=this.shock,a.uFlash.value=this.flash,a.uLetterbox.value=this.letterbox,a.uExposure.value=this.exposure,r.setRenderTarget(null),r.render(this.scene,this.cam)}};var ux=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,dx=`
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
}`,nl=class{constructor(t,e,n,i){this.renderer=t,this.scene=e,this.screens=[],this.future=i,this.activeFuture=[],this.time=0,this._idx=0,this.previewBoost=new Ji(10136251,4.5);for(let r of n){let a=r.kind==="preview"?new We(256,192,{minFilter:Be,magFilter:Be}):null,o=null,l=null;r.kind==="vcr"&&(l=document.createElement("canvas"),l.width=256,l.height=192,o=new xn(l));let c=new Xe({uniforms:{tDiffuse:{value:a?a.texture:o},uTime:{value:0},uStatic:{value:0},uPower:{value:1}},vertexShader:ux,fragmentShader:dx});r.mesh.material=c;let h=r.kind==="preview"?new $e(52,256/192,.1,60):null;h&&(h.position.copy(r.camPos),h.lookAt(r.camLook)),this.screens.push({def:r,rt:a,mat:c,cam:h,vcrCanvas:l,vcrTex:o,static:!1,power:!0})}}setFutureActive(t){this.activeFuture=t}setStatic(t,e){let n=this.screens.find(i=>i.def.id===t);n&&(n.static=e)}setPower(t,e){let n=this.screens.find(i=>i.def.id===t);n&&(n.power=e)}_drawVCR(t){let e=t.vcrCanvas.getContext("2d"),n=this.time;e.fillStyle="#5a0e12",e.fillRect(0,0,256,192);let i=128+Math.sin(n*.4)*40,r=e.createRadialGradient(i,90,10,i,90,120);if(r.addColorStop(0,"rgba(255,190,120,0.5)"),r.addColorStop(1,"rgba(255,190,120,0)"),e.fillStyle=r,e.fillRect(0,0,256,192),e.fillStyle="#e7b64c",e.font="90px serif",e.textAlign="center",e.textBaseline="middle",e.fillText("\u56CD",128,92),e.font="18px sans-serif",e.fillText("\u65B0\u5A5A\u5FEB\u4E50 \u767E\u5E74\u597D\u5408",128,160),Math.sin(n*.7)>.965||n%11>10.6){e.fillStyle="#0c0e10",e.fillRect(0,0,256,192),e.strokeStyle="rgba(90,64,56,0.9)",e.lineWidth=8;for(let a=0;a<5;a++)e.beginPath(),e.arc(128,210,40+a*34,Math.PI*1.15,Math.PI*1.85),e.stroke();e.fillStyle="rgba(231,182,76,0.6)",e.font="90px serif",e.fillText("\u56CD",128,92)}t.vcrTex.needsUpdate=!0}update(t,e){this.time+=t;for(let o of this.screens)o.mat.uniforms.uTime.value=this.time,o.mat.uniforms.uStatic.value+=((o.static?1:0)-o.mat.uniforms.uStatic.value)*t*3,o.mat.uniforms.uPower.value+=((o.power?1:0)-o.mat.uniforms.uPower.value)*t*4;let n=this.screens.filter(o=>{let l=new R;return o.def.mesh.getWorldPosition(l),l.distanceTo(e)<16&&o.power});if(n.length===0)return;this._idx=(this._idx+1)%n.length;let i=n[this._idx];if(i.def.kind==="vcr"){this._drawVCR(i);return}if(i.static)return;let r=[];for(let o of this.activeFuture){let l=this.future[o];l&&!l.visible&&(l.visible=!0,r.push(l))}this.scene.add(this.previewBoost);let a=this.scene.fog;this.scene.fog=null,this.renderer.setRenderTarget(i.rt),this.renderer.render(this.scene,i.cam),this.renderer.setRenderTarget(null),this.scene.fog=a,this.scene.remove(this.previewBoost);for(let o of r)o.visible=!1;i.def.glow&&(i.def.glow.intensity=3+Math.sin(this.time*13.7)*.8+Math.random()*.5)}};var il=class{constructor(){this.el={};for(let t of["subtitle","objective","prompt","card","fade","end","endTitle","endBody","endBtn","timerbar","timerfill","callHint","reticleWrap","cutring","endCard"])this.el[t]=document.getElementById(t);this.ringFg=this.el.cutring.querySelector(".fg"),this._subT=null,this._cardT=null,this._retState=""}subtitle(t,e=4){let n=this.el.subtitle;n.textContent=t,n.style.opacity=1,clearTimeout(this._subT),this._subT=setTimeout(()=>{n.style.opacity=0},e*1e3)}objective(t){let e=this.el.objective;e.innerHTML='<span class="obj-mark">\u25C6</span> '+t,e.style.opacity=1,e.classList.remove("obj-flash"),e.offsetWidth,e.classList.add("obj-flash")}prompt(t,e=null){let n=this.el.prompt;if(!t){n.style.opacity=0;return}n.innerHTML=(e?`<span class="key">${e}</span>`:"")+`<span>${t}</span>`,n.style.opacity=1}reticle(t){this._retState!==t&&(this._retState=t,this.el.reticleWrap.className=t?"ret-"+t:"")}cutRing(t){if(t<=0){this.el.cutring.style.opacity=0;return}this.el.cutring.style.opacity=1,this.ringFg.style.strokeDashoffset=(188.5*(1-Math.min(1,t))).toFixed(1)}card(t,e="",n=3.4){let i=this.el.card;i.innerHTML=`<div class="card-title">${t}</div><div class="card-sub">${e}</div>`,i.style.opacity=1,clearTimeout(this._cardT),this._cardT=setTimeout(()=>{i.style.opacity=0},n*1e3)}fade(t,e=.6){let n=this.el.fade;n.style.transition=`opacity ${e}s ease`,n.style.opacity=t}callHint(t){this.el.callHint.style.opacity=t?1:0}timer(t,e=1){this.el.timerbar.style.opacity=t?1:0,this.el.timerfill.style.width=(e*100).toFixed(1)+"%"}end(t,e,n,i,r=!1){this.el.endTitle.textContent=t,this.el.endBody.innerHTML=e,this.el.endBtn.textContent=n,this.el.endCard.style.display=r?"block":"none",this.el.end.style.display="flex",requestAnimationFrame(()=>{this.el.end.style.opacity=1}),this.el.endBtn.onclick=i}hideEnd(){this.el.end.style.opacity=0,setTimeout(()=>{this.el.end.style.display="none"},600)}};var fx={\u5BB4\u4F1A\u5385:"\u4E1C\u5385",\u670D\u52A1\u8D70\u5ECA:"\u8D70\u5ECA",\u5927\u5802:"\u5927\u5802",\u6D77\u6D0B\u9986\u8FDE\u5ECA:"\u8FDE\u5ECA",\u5458\u5DE5\u8FDE\u5ECA:"\u540E\u5ECA"},sl=class{constructor(t){this.g=t,this.beat=0,this.noise=0,this.noiseCooldown=0,this.call={active:!1,waiter:null},this.escorting=!1,this.grace=0,this.finaleTimer=-1,this.cutT=0,this.gateNoiseDone=!1,this.lightMult={hall:1,corridor:1,lobby:1,aqua:1,connector:1},this.hallColor=new zt(16760952),this.ended=!1,this._pending=[]}after(t,e){this._pending.push({t,fn:e})}announce(t,e,n=null,i=""){let{audio:r,ui:a,mc:o,post:l}=this.g;r.hush(3),l.shock=.8,l.letterboxTarget=1,this.after(2.2,()=>r.paChime()),this.after(3.4,()=>{r.broadcast(e,104+this.beat*4),a.subtitle("\u3010\u5E7F\u64AD\u3011"+t,Math.max(3.5,e*.4)),n&&a.card(n,i);let c=1.4*(1-o.sync);this.after(3.4+c,()=>o.gesture())}),this.after(7.5,()=>{r.unhush(),l.letterboxTarget=this._lbBase||0})}addNoise(t,e=!1){this.beat<2||this.ended||(this.noise=Math.min(1.6,this.noise+t),!e&&this.noise>=1&&this.noiseCooldown<=0&&!this.call.active&&!this.escorting&&this.triggerCall(!1))}triggerCall(t=!1){if(this.call.active||this.ended)return;let{audio:e,ui:n,waiters:i,player:r}=this.g;this.call.active=!0,this.noise=0,this.noiseCooldown=26,e.tension(1.8);let a=this.g.regionNameAt(r.pos)||"\u5927\u5802",o=fx[a]||a;this.after(1.2,()=>{e.broadcast(9,96),n.subtitle(`\u3010\u5E7F\u64AD\u3011${o}\u7684\u8FD9\u4F4D\u6765\u5BBE\u2014\u2014\u8BF7\u5165\u5E2D\u3002`,4)}),n.callHint(!0),t&&n.objective("\u53F8\u4EEA\u70B9\u4E86\u4F60\u7684\u540D \u2014\u2014 \u8155\u7EF3\u4EAE\u4E86\u3002\u51B2\u5230\u4EFB\u610F<b>\u793C\u94A9</b>\u524D\u6309 E\uFF0C\u628A\u8155\u7EF3<b>\u5BC4\u6302</b>\u4E0A\u53BB\uFF01");let l=null,c=1e9;for(let h of i){if(!h.visible)continue;let d=h.group.position.distanceTo(r.pos);d<c&&(c=d,l=h)}l&&(l.startChase(),this.call.waiter=l)}resolveCall(){let{audio:t,ui:e,wrist:n}=this.g;this.call.active=!1,e.callHint(!1),n.shorten(),t.pluck(140,.5),t.pluck(52,.4),this.call.waiter&&(this.call.waiter.stopChase(this.g.sys),this.call.waiter=null),e.subtitle("\u8155\u7EF3\u5BC4\u6302\u4E0A\u4E86\u3002\u5B83\u53C8\u77ED\u4E86\u4E00\u622A\u3002",3.5),this.beat===3&&!this._doorCObjGiven&&(this._doorCObjGiven=!0,this.after(2,()=>e.objective("\u53BB\u897F\u5899\u7684<b>\u8FDE\u5ECA\u95E8</b>\u2014\u2014\u6458\u4E0B\u62E6\u95E8\u7EF3\uFF0C\u8FDB\u6D77\u6D0B\u9986\u8FDE\u5ECA\u3002")))}escort(t){if(this.escorting||this.grace>0||this.ended)return;let{ui:e,player:n,audio:i,post:r}=this.g;this.escorting=!0,this.call.active=!1,e.callHint(!1),e.reticle(""),this.call.waiter&&(this.call.waiter.stopChase(this.g.sys),this.call.waiter=null);let a=t.group.position;n.yaw=Math.atan2(n.pos.x-a.x,n.pos.z-a.z),n.pitch=-.06,n.kick(-.05,.03),i.thud(.25),i.sting(.22),r.shock=1,e.fade(1,.9),e.subtitle("\u300C\u60A8\u7684\u4F4D\u7F6E\u5728\u8FD9\u8FB9\u3002\u300D",4),this.after(1.6,()=>{if(!this.escorting||this.ended){e.fade(0,.8);return}n.teleport(-1.7,-10.2,0),n.pitch=.14,n.seated=!0,t.group.position.set(-2.6,0,-10.2),t.state="stand",t.standTimer=5,e.fade(0,.8),e.prompt("\u4F60\u88AB\u6309\u8FDB\u4E86\u4E00\u628A\u7A7A\u6905\u5B50 \u2014\u2014 <b>\u957F\u6309</b>\u7AD9\u8D77\u6765","E")})}standUp(){let{ui:t,player:e}=this.g;e.seated=!1,this.escorting=!1,this.grace=7,e.pitch=0,e.kick(.04),t.fade(0,.6),t.prompt(""),t.subtitle("\u8D81\u4ED6\u4EEC\u6CA1\u770B\u7740\u2014\u2014\u8D70\u3002",3)}_shockCorridor(){this._shock1=!0;let{audio:t,ui:e,post:n,L:i,waiters:r,sys:a}=this.g;t.setLayer("roomtone",0,.5);let o=this.lightMult.corridor;this.lightMult.corridor=.02;let l=i.dyn.tubes.filter(c=>c.light.position.z<0);l.sort((c,h)=>h.light.position.x-c.light.position.x),l.forEach((c,h)=>{this.after(.4+h*.5,()=>{c.light.intensity=0,c.mat.emissiveIntensity=0,t.ratchet(),t.thud(.12)})}),this.after(.4+l.length*.5,()=>{n.shock=1.2,t.boom(.35),e.subtitle("\u706F\u706D\u4E0B\u6765\u7684\u987A\u5E8F\u2014\u2014\u662F\u671D\u7740\u4F60\u6765\u7684\u3002",4);let c=r[0];c.setVisible(!0);let h=a.cords.filter(d=>d.rideable&&d.a&&d.b&&d.pointAt(.5).x>17&&d.pointAt(.5).x<31);if(h.length){c.cord=h[0],c.t=.95,c.dir=-1,c.state="ride";let d=h[0].pointAt(c.t);c.group.position.set(d.x,0,d.z)}t.sting(.5),t.pluck(60,.5,.998)}),this.after(3.6+l.length*.5,()=>{this.beat<3&&(this.lightMult.corridor=o),i.dyn.tubes.forEach(c=>{c.mat.emissiveIntensity=2.6}),n.flash=.5,t.setLayer("roomtone",.05,2),e.subtitle("\u706F\u56DE\u6765\u7684\u65F6\u5019\uFF0C\u6258\u76D8\u4E0A\u7684\u83DC\u6362\u8FC7\u4E86\u3002",4.5)})}_shockGlass(){this._shock2=!0;let{audio:t,ui:e,post:n,L:i}=this.g,r=i.dyn.seaShade;this._shadeLunge={t:0,fromX:r.position.x,fromY:r.position.y},this.after(.5,()=>{t.boom(.95),n.shock=1.6,n.flash=.55,this.g.player.kick(-.09,.05),i.dyn.cracks.forEach(o=>{o.material.opacity=Math.max(o.material.opacity,.3)});let a=this.lightMult.aqua;this.lightMult.aqua=.08,e.subtitle("\u73BB\u7483\u95F7\u54CD\u4E86\u4E00\u58F0\u3002\u90A3\u4E2A\u5F71\u5B50\u6BD4\u6574\u9762\u5899\u8FD8\u957F\u3002",5);for(let o=0;o<3;o++)this.after(.6+o*.8,()=>t.glassCreak());this.after(3.2,()=>{this.lightMult.aqua=a}),this.addNoise(.3,!0)})}_shockBulb(){this._shock3=!0;let{audio:t,post:e,L:n,gazer:i,player:r}=this.g,a=null,o=1e9;for(let l of n.dyn.bulbs){let c=Math.abs(l.light.position.z-r.pos.z);c<o&&(o=c,a=l)}a&&(a.light.intensity=0,a.light.userData.base=0,a.group.visible=!1,t.bulbPop(),e.flash=.45,e.shock=1,r.kick(-.05,-.03)),this.after(.7,()=>{i.appearAt(-17.1,Math.max(r.pos.z-6,-5),null),t.sting(.4),this.g.ui.subtitle("\u706F\u788E\u7684\u90A3\u4E00\u4E0B\uFF0C\u5979\u5F80\u524D\u7AD9\u4E86\u4E00\u6B65\u3002\u6CA1\u6709\u811A\u6B65\u58F0\u3002",5)})}start(){let{ui:t}=this.g;t.fade(0,2.5),this.beat=1,t.card("\u8BAE\u7A0B\u4E00 \xB7 \u8FCE\u5BBE","\u5357\u65B9\u5927\u9152\u5E97 \xB7 2001\u5E74 \u79CB"),this.g.wrist.glow=1.4,this.after(2.5,()=>t.subtitle('\u5A5A\u5BB4\u5F00\u59CB\u524D\uFF0C\u5468\u7D6E\u62C9\u7740\u4F60\u7684\u624B\u8155\u7CFB\u4E86\u6839\u7EA2\u7EF3\uFF1A"\u5168\u4E4E\u4EBA\u3002\u522B\u6458\u3002"',6)),this.after(9,()=>t.subtitle("\u5168\u573A\u5BBE\u5BA2\u7684\u8155\u4E0A\u90FD\u6709\u4E00\u6839\u3002\u4ED6\u4EEC\u7684\u90FD\u5782\u5230\u5730\u4E0A\uFF0C\u63A5\u8FDB\u4E86\u540C\u4E00\u5F20\u7F51\u3002",6)),this.after(16,()=>t.objective("\u5230<b>\u4E3B\u684C</b>\u524D\u542C\u53F8\u4EEA\u62A5\u5E55\uFF08WASD \u79FB\u52A8 / \u9F20\u6807\u73AF\u987E\uFF09")),this.g.guests.layoutParty([[-6.5,-6],[6.5,-6],[-11,-9.5],[11,-9.5],[-6.5,-12.5],[6.5,-12.5],[-11,-3],[11,-3]]),this.g.audio.setLayer("murmur",.045,3),this.g.audio.setLayer("roomtone",.05,1),this.g.audio.motif(!1)}_beat1\u5230\u4E3B\u684C(){this.beat=1.5;let{ui:t,guests:e}=this.g;this.announce("\u5404\u4F4D\u6765\u5BBE\uFF0C\u6B22\u8FCE\u5149\u4E34\u5468\u5E9C\u559C\u5BB4\u3002\u8BF7\u5404\u4F4D\u6765\u5BBE\u2014\u2014\u5165\u5E2D\u3002",14,"\u8BAE\u7A0B\u4E8C \xB7 \u5165\u5E2D"),e.turnTo(0,-18),this.after(8,()=>t.subtitle('\u5468\u7D6E\u7684\u6BCD\u4EB2\u585E\u7ED9\u4F60\u4E00\u5F20\u5355\u5B50\uFF1A"\u4E56\uFF0C\u53BB\u540E\u5934\u5E2E\u62FF\u559C\u7CD6\u3002\u8D70\u5ECA\u76F4\u8D70\u5C31\u662F\u3002"',6.5)),this.after(15,()=>t.objective("\u4ECE<b>\u4E1C\u95E8</b>\u53BB\u670D\u52A1\u8D70\u5ECA \u2014\u2014 \u95E8\u88AB<b>\u62E6\u95E8\u7EF3</b>\u62F4\u7740\uFF1A\u5BF9\u51C6\u7EA2\u7EF3\u7AEF\u5934\u6309 E <b>\u6458</b>\u4E0B\uFF0C\u518D\u5BF9\u51C6\u65C1\u8FB9\u7684\u7A7A\u94A9\u6309 E <b>\u6302</b>\u4E0A"))}_beat2\u5F00\u5E2D(){this.beat=2;let{ui:t,waiters:e,sys:n,crt:i}=this.g;this.announce("\u5409\u65F6\u5DF2\u5230\uFF0C\u559C\u5BB4\u2014\u2014\u5F00\u5E2D\u3002",10,"\u8BAE\u7A0B\u4E09 \xB7 \u4E0A\u83DC"),e[0].setVisible(!0),e[0].mountNearest(n,new R(24,0,-6.2)),e[1].setVisible(!0),e[1].mountNearest(n,new R(38.2,0,6)),i.setFutureActive(["corridor"]),this.after(6,()=>t.objective("\u7A7F\u8FC7\u670D\u52A1\u8D70\u5ECA\u53BB<b>\u5927\u5802</b>\u3002\u4F8D\u5E94\u53EA\u6CBF\u7EA2\u7EF3\u6ED1\u2014\u2014\u7EF3\u7F51\u5C31\u662F\u4ED6\u4EEC\u7684\u5168\u90E8\u8DEF\u7EBF\u3002\u53EF\u4EE5<b>\u6539\u6302\u7EA2\u7EF3</b>\u6539\u5199\u5B83\u3002")),this.after(12,()=>t.subtitle("\u4F20\u83DC\u53E3\u7684\u7535\u89C6\u6BD4\u73B0\u5B9E\u65E9\u4E00\u6863\u2014\u2014\u5B83\u5728\u64AD\u8FD9\u6761\u8D70\u5ECA\u63A5\u4E0B\u6765\u7684\u7EF3\u7F51\u3002",6))}_beat3\u656C\u9152\u70B9\u706B(){this.beat=3;let{ui:t,audio:e,L:n,crt:i}=this.g;e.hush(4.5),this.g.post.shock=1.2,t.subtitle("\u5168\u697C\u7684\u58F0\u97F3\u9000\u6F6E\u5F0F\u5730\u6536\u4E86\u2014\u2014\u50CF\u6D77\u5728\u5438\u6C14\u3002",5),this.after(4.5,()=>{e.paChime(),this.after(1.2,()=>{e.broadcast(12,100),t.subtitle("\u3010\u5E7F\u64AD\u3011\u6709\u8BF7\u65B0\u4EBA\uFF0C\u5411\u5404\u4F4D\u6765\u5BBE\u2014\u2014\u656C\u9152\u3002",5),t.card("\u8BAE\u7A0B\u56DB \xB7 \u656C\u9152","\u8FD4\u6F6E")})}),this.after(7.5,()=>{e.motif(!0,.05),e.setLayer("sea",.6,4),e.setLayer("murmur",0,2),e.unhush(1),this.lightMult={hall:.4,corridor:.55,lobby:.42,aqua:.8,connector:.8},n.dyn.fog.density=.026,n.dyn.pits.forEach(r=>r.visible=!0),n.dyn.headlights.mat.opacity=.12,i.setFutureActive(["lobby"]),t.subtitle("\u706F\u6CA1\u706D\u3002\u53EF\u5927\u5802\u50CF\u4E00\u95F4\u88AB\u4F4F\u4E86\u51E0\u5341\u5E74\u7684\u6DF1\u6D77\u3002\u5730\u4E0A\u6709\u51E0\u5757\u4E4C\u4EAE\u7684\u51F9\u5751\u2014\u2014\u6709\u4EC0\u4E48\u4E1C\u897F\u4ECE\u5EFA\u7B51\u91CC\u8D77\u8EAB\u8D70\u4E86\u3002",8),this.g.post.shock=1}),this.after(15,()=>this.triggerCall(!0))}_beat4\u4E0A\u5934(){this.beat=4;let{ui:t,waiters:e,sys:n,crt:i}=this.g;this.announce("\u5409\u65F6\u5DF2\u5230\uFF0C\u8BF7\u5168\u798F\u4EBA\u2014\u2014\u4E0A\u524D\u3002",11,"\u8BAE\u7A0B\u4E94 \xB7 \u4E0A\u5934"),e[2].setVisible(!0),e[2].mountNearest(n,new R(15,0,22)),i.setFutureActive(["aqua"]),this.after(7,()=>t.objective("\u901A\u8FC7<b>\u68C0\u4FEE\u95F8</b>\uFF1A\u95F8\u95E8\u7684\u7EA2\u7EF3\u5361\u5728\u9519\u94A9\u4E0A\u3002\u6302\u5230\u9AD8\u5904<b>\u7EDE\u76D8\u94A9</b>\uFF1D\u6162\u800C\u5B89\u9759\uFF1B\u6302\u5230\u8FD1\u5904<b>\u5361\u6263\u94A9</b>\uFF1D\u5FEB\u4F46\u5DE8\u54CD\u2014\u2014\u73BB\u7483\u53D7\u4E0D\u4E86\u5DE8\u54CD\u3002")),this.after(14,()=>this.g.ui.subtitle("\u552E\u7968\u53F0\u7684\u7535\u89C6\u91CC\uFF0C\u8FD9\u9762\u73BB\u7483\u5DF2\u7ECF\u9677\u8FDB\u6765\u4E86\u3002\u5B83\u5728\u7B49\u4E00\u4E2A\u54CD\u3002",6))}_beat4b\u8FDE\u5ECA(){this.beat=4.5;let{ui:t,gazer:e}=this.g;t.objective("\u6CBF<b>\u5458\u5DE5\u8FDE\u5ECA</b>\u56DE\u5BB4\u4F1A\u5385\u3002"),e.appearAt(-17.1,8,null),t.subtitle("\u8FDE\u5ECA\u5C3D\u5934\u7AD9\u7740\u4E2A\u7A7F\u65E7\u5F0F\u793C\u670D\u7684\u5973\u4EBA\u3002\u5979\u8155\u4E0A\u7684\u7EA2\u7EF3\u2014\u2014\u662F\u526A\u65AD\u7684\u3002",6.5)}_beat5\u9001\u5165\u6D1E\u623F(){this.beat=5;let{ui:t,sys:e,L:n,crt:i,guests:r,bride:a,waiters:o,mc:l,audio:c,post:h}=this.g;l.sync=1,this._lbBase=.6,this.announce("\u9001\u2014\u2014\u5165\u2014\u2014\u6D1E\u2014\u2014\u623F\u2014\u2014",8,"\u8BAE\u7A0B\u516D \xB7 \u9001\u5165\u6D1E\u623F","\u559C\u4E8B\u4E0D\u8BB8\u9000\u5E2D"),this.after(1.2,()=>{c.thud(.7),this.g.player.kick(-.05)}),this.after(5,()=>{n.dyn.throat.visible=!0,this._garlandDrop=0,c.whoosh(.35),h.flash=.35,this.lightMult.hall=.45,this.hallColor.setHex(16734264),n.dyn.fog.density=.03,i.setStatic("T03",!0),i.setFutureActive([]),c.setLayer("sea",1,3),r.layoutFinale([0,-13.5]),a.show(-.9,-14.6,.6),e.clearAllCords(),e.addCord("hW_wall","hStageR",{slack:.3}),e.addCord("hE_wall","hStageL",{slack:.3}),e.addCord("hW_free","hMainA",{slack:.4}),e.addCord("hMainA","hMainB",{slack:.1,tag:"seatlock",rideable:!1}),this._candle||(this._candle=new Ci(16751184,14,9,1.6),this._candle.position.set(0,1.8,-13.5),this.g.scene.add(this._candle));for(let d=0;d<3;d++)o[d].setVisible(!0),o[d].group.position.set(-6+d*6,0,-6),o[d].mountNearest(e,o[d].group.position);this.g.gazer.appearAt(-5.5,-16.2,Math.atan2(2.1- -5.5,-13.5- -16.2)),this.finaleTimer=110,t.objective("\u4E3B\u684C\u4E1C\u4FA7\u7684<b>\u4E0A\u5BBE\u5E2D</b>\u5C31\u662F\u7559\u7ED9\u4F60\u7684\u5E2D\u4F4D \u2014\u2014 \u6458\u4E0B\u6346\u5E2D\u7684\u7EA2\u7EF3\uFF0C\u5230\u5E2D\u524D<b>\u957F\u6309 E \u526A\u65AD\u4F60\u7684\u8155\u7EF3</b>\u3002\u56DE\u7738\u5BA2\u76EF\u7740\u7684\u65B9\u5411\u5C31\u662F\u90A3\u628A\u6905\u5B50\u3002"),this.g.post.shock=1.4})}_cut(){if(this.ended)return;this.ended=!0;let{ui:t,audio:e,mc:n,waiters:i,guests:r,L:a,crt:o,post:l,player:c}=this.g;this.finaleTimer=-1,this.call.active=!1,this.call.waiter=null,t.callHint(!1),t.timer(!1),t.prompt(""),t.cutRing(0),t.reticle(""),e.snip(),e.hush(.5),e.setLayer("sea",0,6),e.setThreat(0,0),l.flash=.8,l.shock=1.6,c.kick(-.1,.05),this._lbBase=1,l.letterboxTarget=1,n.silenced=!0,i.forEach(h=>{h.state="stand",h.standTimer=1e9}),r.turnTo(0,8),o.setStatic("T01",!0),o.setStatic("T02",!0),o.setStatic("T07",!0),this.g.wrist.mat.color.setHex(2761766),this.g.wrist.mat.emissive.setHex(0),t.subtitle("\u7EF3\u65AD\u7684\u90A3\u4E00\u58F0\u4E4B\u540E\u2014\u2014\u6574\u680B\u697C\u7B2C\u4E00\u6B21\u6CA1\u6709\u58F0\u97F3\u3002\u53F8\u4EEA\u5F20\u7740\u5C01\u6B7B\u7684\u53E3\uFF0C\u5E7F\u64AD\u91CC\u4EC0\u4E48\u4E5F\u6CA1\u6709\u3002",8),this.after(4,()=>{e.motif(!0,.035),t.subtitle("\u8EAB\u540E\uFF0C\u7EA2\u5E55\u540E\u9762\uFF0C\u6709\u5F88\u957F\u5F88\u957F\u7684\u4E1C\u897F\u6781\u6162\u5730\u677E\u5F00\u4E86\u8FD9\u680B\u697C\u3002",7),a.dyn.doorSOpen=!0,a.dyn.doorSCollider.disabled=!0,a.dyn.headlights.mat.opacity=.9,this._lbBase=.6,l.letterboxTarget=.6,t.objective("\u6563\u573A\u4E86 \u2014\u2014 \u4ECE<b>\u6B63\u95E8</b>\u51FA\u53BB\u3002")})}_goodEnd(){if(this._finished)return;this._finished=!0;let{ui:t,audio:e,L:n,post:i}=this.g;n.dyn.headlights.mat.opacity=1,i.flash=1.2,i.letterboxTarget=1,e.motif(!1,.045),t.fade(1,3),e.setLayer("roomtone",0,2),this.after(3.2,()=>{t.end("\u6563 \u573A",'\u6D77\u96FE\u91CC\u505C\u7740\u4E00\u6392\u8F66\uFF0C\u8F66\u706F\u5168\u4EAE\u7740\u3002<br>\u6CA1\u6709\u4EBA\u6309\u5587\u53ED\u3002\u6CA1\u6709\u4EBA\u50AC\u3002<br><br>\u4F60\u8155\u4E0A\u7684\u7EF3\u5934\u8FD8\u5728\uFF0C\u526A\u65AD\u7684\u3002<br>\u548C\u90A3\u4E2A\u5973\u4EBA\u7684\u4E00\u6837\u3002<br><br><div class="credits">\u300A\u8FD4\u6F6E FANCHAO\u300B\xB7\u300C\u559C\u5BB4\u300D\u5782\u76F4\u5207\u7247 v1.0<br>\u8BBE\u8BA1 / \u7A0B\u5E8F / \u7F8E\u672F / \u97F3\u9891 \u2014\u2014 \u8FD4\u6F6E\u5236\u4F5C\u7EC4<br>\u672C\u5305\u5168\u90E8\u8D44\u4EA7\uFF08\u7EB9\u7406\xB7\u6A21\u578B\xB7\u5149\u7167\xB7\u97F3\u9891\uFF09\u5747\u4E3A\u7A0B\u5E8F\u5316\u751F\u6210<br>2001 \xB7 \u8680\u6E7E \xB7 \u5357\u65B9\u5927\u9152\u5E97</div>',"\u518D\u6765\u4E00\u904D",()=>location.reload())})}_badEnd(){if(this.ended)return;this.ended=!0;let{ui:t,audio:e,L:n,post:i}=this.g;t.timer(!1),t.cutRing(0),t.fade(1,1.2),i.letterboxTarget=1,e.broadcast(6,92),e.sting(.5),n.dyn.cardYou.mat.map=n.dyn.cardYou.flip,n.dyn.cardYou.mat.needsUpdate=!0,this.after(1.6,()=>{t.end("\u60A8\u7684\u4F4D\u7F6E\u5728\u8FD9\u8FB9","\u8BAE\u7A0B\u8D70\u5B8C\u7684\u65F6\u5019\uFF0C\u4F60\u8FD8\u5750\u5728\u5E2D\u4E0A\u3002<br><br>\u4F8D\u5E94\u628A\u4F60\u9762\u524D\u7684\u684C\u724C\u8F7B\u8F7B\u7FFB\u4E86\u8FC7\u6765\u3002<br>\u724C\u9762\u4E0A\u5199\u7684\u4E0D\u662F\u4F60\u7684\u540D\u5B57\u3002<br>","\u91CD\u6765\u8FD9\u4E00\u6BB5",()=>this._retryFinale(),!0)})}_retryFinale(){let{ui:t,player:e}=this.g;t.hideEnd(),this.ended=!1,this._finished=!1,e.seated=!1,this.escorting=!1,e.teleport(-13.8,-6,-Math.PI/2),t.fade(0,1.5),this.beat=4.9,this.after(.8,()=>this._beat5\u9001\u5165\u6D1E\u623F())}update(t){let e=this.g,n=e.player.pos;for(let i=this._pending.length-1;i>=0;i--)if(this._pending[i].t-=t,this._pending[i].t<=0){let r=this._pending[i].fn;this._pending.splice(i,1),r()}if(this.noise=Math.max(0,this.noise-t*.1),this.noiseCooldown=Math.max(0,this.noiseCooldown-t),this.grace=Math.max(0,this.grace-t),this.beat===1&&n.distanceTo(new R(0,0,-11.5))<3.4?this._beat1\u5230\u4E3B\u684C():this.beat===1.5&&n.x>15.4?this._beat2\u5F00\u5E2D():this.beat===2&&n.z>14.5?this._beat3\u656C\u9152\u70B9\u706B():this.beat===3&&n.x<23.5&&n.z>19?this._beat4\u4E0A\u5934():this.beat===4&&n.x<2.5&&n.z>19?this._beat4b\u8FDE\u5ECA():this.beat===4.5&&n.x>-15&&n.z<0&&n.z>-20?this._beat5\u9001\u5165\u6D1E\u623F():this.ended&&this._doorOpen()&&n.z>5.5&&this._goodEnd(),this.beat===2&&!this._shock1&&n.x>25&&n.z<0&&this._shockCorridor(),this.beat>=4&&this.beat<5&&!this._shock2&&n.z>20.5&&n.x<16&&n.x>-10&&this._shockGlass(),this.beat===4.5&&!this._shock3&&n.x<-15&&n.z<12&&n.z>-4&&this._shockBulb(),this._shadeLunge){let i=this._shadeLunge,r=e.L.dyn.seaShade;if(i.t+=t,i.t<.55){let a=i.t/.55;r.position.x+=(n.x+2-r.position.x)*a*.4,r.position.z=26.2-a*1.5,r.position.y=i.fromY+(1.7-i.fromY)*a,r.scale.setScalar(1+a*.4)}else i.t<4?(r.position.z+=(26.2-r.position.z)*t*.7,r.position.y+=(3.2-r.position.y)*t*.5):(r.scale.setScalar(1),this._shadeLunge=null)}if(this._garlandDrop!==void 0&&this._garlandDrop<1){this._garlandDrop=Math.min(1,this._garlandDrop+t*.7);let i=this._garlandDrop,r=1.70158,o=1+(r+1)*Math.pow(i-1,3)+r*Math.pow(i-1,2);e.L.dyn.garlands.forEach((l,c)=>{l.position.y=(-1.4-c%2*.5)*o})}this.call.active&&(e.wrist.glow=1,e.post.redPulse=.5+Math.sin(performance.now()*.008)*.3,Math.floor(performance.now()/800)!==this._hb&&(this._hb=Math.floor(performance.now()/800),e.audio.heartbeat())),this.finaleTimer>0&&!this.ended&&(this.finaleTimer-=t,e.ui.timer(!0,this.finaleTimer/110),this.finaleTimer<30&&!this._warn30&&(this._warn30=!0,e.ui.subtitle("\u53F8\u4EEA\u7684\u624B\u52BF\u548C\u5E7F\u64AD\u5DF2\u7ECF\u5B8C\u5168\u540C\u6B65\u4E86\u3002\u5FEB\u3002",4)),this.finaleTimer<=0&&(this.finaleTimer=-1,this._badEnd()));for(let i of Object.keys(e.L.lights))for(let r of e.L.lights[i]){let a=(r.userData.base??r.intensity)*(this.lightMult[i]??1);r.intensity+=(a-r.intensity)*t*1.5,i==="hall"&&this.beat>=5&&r.color.lerp(this.hallColor,t*.8)}}_doorOpen(){return!!this.g.L.dyn.doorSOpen}};function px(s,t=128,e=128){let n=document.createElement("canvas");n.width=t,n.height=e,s(n.getContext("2d"),t,e);let i=new xn(n);return i.wrapS=i.wrapT=Cn,i}var Gc={};function Qu(s="255,228,180"){if(Gc[s])return Gc[s];let t=px((e,n,i)=>{e.fillStyle="#000",e.fillRect(0,0,n,i);let r=e.createLinearGradient(0,0,0,i);r.addColorStop(0,`rgba(${s},0.7)`),r.addColorStop(.35,`rgba(${s},0.3)`),r.addColorStop(1,`rgba(${s},0)`),e.fillStyle=r,e.fillRect(0,0,n,i)},64,256);return Gc[s]=t,t}var rl=class{constructor(t){this.scene=t,this.cones=[],this.dust=[],this.caustics=[],this.time=0}addCone(t,e,n,i,r,a,o,l,c="255,228,180",h=null){let d=new Jt(i,r,a,14,1,!0),u=new oe({map:Qu(c),transparent:!0,opacity:o,blending:In,depthWrite:!1,side:Se,fog:!1}),f=new W(d,u);return f.position.set(t,e-a/2,n),f.renderOrder=5,this.scene.add(f),this.cones.push({mesh:f,mat:u,base:o,group:l,light:h}),f}addShaft(t,e,n,i,r,a,o,l,c,h="210,235,225"){let d=new oe({map:Qu(h),transparent:!0,opacity:l,blending:In,depthWrite:!1,side:Se,fog:!1}),u=new W(new be(i,r),d);return u.position.set(t,e,n),u.rotation.y=a,u.rotation.z=o,u.renderOrder=5,this.scene.add(u),this.cones.push({mesh:u,mat:d,base:l,group:c,light:null}),u}addDust(t,e,n=.035,i=14207144,r=.5,a="hall"){let[o,l,c,h,d,u]=t,f=new Float32Array(e*3),p=new Float32Array(e);for(let b=0;b<e;b++)f[b*3]=o+Math.random()*(h-o),f[b*3+1]=l+Math.random()*(d-l),f[b*3+2]=c+Math.random()*(u-c),p[b]=Math.random()*6.28;let y=new He;y.setAttribute("position",new sn(f,3)),y.setAttribute("aPhase",new sn(p,1));let g=new Xe({uniforms:{uTime:{value:0},uSize:{value:n*500},uColor:{value:new zt(i)},uOpacity:{value:r}},vertexShader:`
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
        }`,transparent:!0,depthWrite:!1,blending:In}),m=new ar(y,g);return m.renderOrder=6,m.frustumCulled=!1,this.scene.add(m),this.dust.push({points:m,mat:g,group:a,base:r}),m}_causticTex(){if(this._ct)return this._ct;let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,256),e.strokeStyle="rgba(150,255,235,0.55)",e.lineWidth=2.4;let n=[];for(let r=0;r<42;r++)n.push([Math.random()*256,Math.random()*256]);for(let[r,a]of n){e.beginPath();let o=5+(Math.random()*3|0);for(let l=0;l<=o;l++){let c=l/o*Math.PI*2,h=14+Math.random()*26,d=r+Math.cos(c)*h,u=a+Math.sin(c)*h;l===0?e.moveTo(d,u):e.quadraticCurveTo(r+Math.cos(c-.4)*h*1.35,a+Math.sin(c-.4)*h*1.35,d,u)}e.stroke()}e.filter="blur(2px)",e.drawImage(t,0,0),e.filter="none";let i=new xn(t);return i.wrapS=i.wrapT=li,this._ct=i,i}addCaustics(t,e,n,i,r,a,o,l=.1,c="aqua"){for(let h=0;h<2;h++){let d=this._causticTex().clone();d.needsUpdate=!0,d.repeat.set(i/6,r/6);let u=new oe({map:d,transparent:!0,opacity:l*(h?.6:1),blending:In,depthWrite:!1,color:5888200,fog:!1}),f=new W(new be(i,r),u);f.position.set(t,e+h*.012,n),f.rotation.x=a,f.rotation.y=o,f.renderOrder=4,this.scene.add(f),this.caustics.push({mesh:f,mat:u,tex:d,dir:h?-1:1,base:l*(h?.6:1),group:c})}}update(t,e){this.time+=t;for(let n of this.cones){let r=e[n.group]??1;n.light&&(r*=nn.clamp(n.light.intensity/Math.max(.01,n.light.userData.base??n.light.intensity),0,1.4)),n.mat.opacity=n.base*r*(.94+Math.sin(this.time*1.7+n.mesh.position.x)*.06)}for(let n of this.dust)n.mat.uniforms.uTime.value=this.time,n.mat.uniforms.uOpacity.value=n.base*(.4+.6*(e[n.group]??1));for(let n of this.caustics){n.tex.offset.x+=t*.021*n.dir,n.tex.offset.y+=t*.013*n.dir;let i=1+Math.sin(this.time*.5*n.dir)*.06;n.mat.opacity=n.base*(e[n.group]??1)*(.8+Math.sin(this.time*1.1+n.dir)*.2)*i}}};var Zc=document.getElementById("c"),Qn=new ko({canvas:Zc,antialias:!1,powerPreference:"high-performance"});Qn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Qn.setSize(window.innerWidth,window.innerHeight);Qn.shadowMap.enabled=!0;Qn.shadowMap.type=qa;Qn.outputColorSpace=Je;Qn.toneMapping=wn;var qe=new hi;qe.background=new zt(854536);var Cr=new $e(66,window.innerWidth/window.innerHeight,.05,140),_e=$u(qe,Qn);{let s=new W(new be(40,24),new j({color:1841688,roughness:.95}));s.rotation.x=-Math.PI/2,s.position.set(0,-.01,12),qe.add(s);let t=new W(new be(30,8),new oe({color:12108990,transparent:!0,opacity:.18,depthWrite:!1}));t.position.set(0,3,16),t.rotation.y=Math.PI,qe.add(t);for(let e=0;e<4;e++){let n=new W(new be(1.1,.6),_e.dyn.headlights.mat);n.position.set(-6+e*4+e%2,.9,13+e%2*1.5),n.rotation.y=Math.PI,qe.add(n)}_e.colliders.push({minX:-7,minZ:0,maxX:-6.5,maxZ:12}),_e.colliders.push({minX:6.5,minZ:0,maxX:7,maxZ:12})}var je=new jo,Ue=new il,se=new tl(Cr,Zc);se.yaw=0;var Tt=new Zo(qe,je);Tt.addHook("hE_doorL",14.72,1.5,-4,-1,0,0);Tt.addHook("hE_doorR",14.72,1.5,-8.2,-1,0,0);Tt.addHook("hE_free",14.72,1.6,-1.6,-1,0,0);Tt.addHook("hStageL",-6,2.3,-16.85,0,0,1);Tt.addHook("hStageR",6,2.3,-16.85,0,0,1);Tt.addHook("hW_wall",-14.72,1.6,-10,1,0,0);Tt.addHook("hE_wall",14.72,1.6,-10,-1,0,0);Tt.addHook("hW_free",-14.72,1.6,-2.5,1,0,0);Tt.addHook("hMainA",1.1,.95,-12.2,0,0,1);Tt.addHook("hMainB",3.2,.95,-14.6,1,0,0);Tt.addHook("hC1",17,2,-7.75,0,0,1);Tt.addHook("hC2",23,2,-4.65,0,0,-1);Tt.addHook("hC3",29,2,-7.75,0,0,1);Tt.addHook("hC4",35,2,-4.65,0,0,-1);Tt.addHook("hC5",39.7,2,-6.4,-1,0,0);Tt.addHook("hC6",36.7,2,2,1,0,0);Tt.addHook("hC7",39.7,2,8,-1,0,0);Tt.addHook("hC8",36.7,2,13.4,1,0,0);Tt.addHook("hAlcove",19.5,2,-7.75,0,0,1);Tt.addHook("hDesk",44.7,1.3,24,-1,0,0);Tt.addHook("hCol1",30.7,1.7,18,1,0,0);Tt.addHook("hCol2",41.3,1.7,26,-1,0,0);Tt.addHook("hWest1",24.35,1.6,19.8,1,0,0);Tt.addHook("hWest2",24.35,1.6,23.4,1,0,0);Tt.addHook("hLFree",28,1.7,29.6,0,0,-1);Tt.addHook("hGateTop",4,3.25,22,0,0,1,!0);Tt.addHook("hJam",7.5,1.5,20.42,0,0,1);Tt.addHook("hWinch",11,2.7,20.42,0,0,1);Tt.addHook("hSnap",5.6,1.1,23.5,0,0,-1);Tt.addHook("hAqP1",21,2,20.42,0,0,1);Tt.addHook("hAqP2",15,2,23.5,0,0,-1);Tt.addHook("hAqP3",9,2,20.42,0,0,1);{let s=new W(new En(.12,.03,8,16),new j({color:13081146,metalness:.85,roughness:.35}));s.position.set(11,2.85,20.45),qe.add(s);let t=new W(new be(.9,.26),new j({map:kn("\u7EDE \u76D8","#e8d8b0","#33403a",80),roughness:.9}));t.position.set(11,2.2,20.48),qe.add(t)}Tt.addCord("hE_doorL","hE_doorR",{tag:"doorE",slack:.25,rideable:!1});Tt.addCord("hC1","hC2");Tt.addCord("hC2","hC3");Tt.addCord("hC3","hC4");Tt.addCord("hC4","hC5");Tt.addCord("hC5","hC6");Tt.addCord("hC6","hC7");Tt.addCord("hC7","hC8");Tt.addCord("hWest1","hWest2",{tag:"doorC",slack:.25,rideable:!1});Tt.addCord("hCol1","hCol2");Tt.addCord("hCol2","hDesk");Tt.addCord("hGateTop","hJam",{tag:"gate",slack:.15,rideable:!1,fixedEnd:"a"});Tt.addCord("hAqP1","hAqP2");Tt.addCord("hAqP2","hAqP3");var sd=[{tag:"doorE",a:"hE_doorL",b:"hE_doorR",col:{minX:14.4,minZ:-8.2,maxX:15.6,maxZ:-4,disabled:!1}},{tag:"doorC",a:"hWest1",b:"hWest2",col:{minX:23.9,minZ:19.8,maxX:24.9,maxZ:23.4,disabled:!1}}];sd.forEach(s=>_e.colliders.push(s.col));var al=new Yo(qe);for(let s=0;s<=12;s++){let t=s/12;al.trail.push(new R(2.1*(1-t),.06,-13.5+t*10.5))}var rd=new $o(qe),Pr=[new Us(qe,0),new Us(qe,1),new Us(qe,2)],ad=new Jo(qe,44),od=new Ko(qe),ld=new Qo(qe),$c=new nl(Qn,qe,_e.screens,_e.future),Ns=new el(Qn,window.innerWidth,window.innerHeight),gn=new rl(qe);gn.addCone(0,5.2,-5,.75,3.4,5.2,.055,"hall");gn.addCone(0,5.2,-12,.75,3.4,5.2,.055,"hall");{let s=gn.addCone(0,0,0,.35,2.5,8.4,.06,"hall");s.position.set(0,4,-15.1);let t=new R(0,1.4-6.6,-18.2+12).normalize();s.quaternion.setFromUnitVectors(new R(0,-1,0),t)}gn.addCone(36,6.4,22,1.5,5.4,6.6,.05,"lobby");gn.addShaft(36,2.4,28.6,6.2,4.6,Math.PI,0,.045,"lobby","185,210,200");for(let s of _e.dyn.tubes){let t=s.light.position;gn.addCone(t.x,3.1,t.z,.45,1.35,3,.05,"corridor","208,238,218",s.light)}for(let s of _e.dyn.bulbs)gn.addCone(s.light.position.x,2.65,s.light.position.z,.1,.7,2.5,.035,"connector","255,214,150",s.light);gn.addCaustics(2.5,.045,22,43,4.2,-Math.PI/2,0,.16,"aqua");gn.addCaustics(2.5,1.6,20.2,43,3,0,0,.07,"aqua");gn.addDust([-14,.3,-19,14,6.4,-.5],320,.035,14207144,.5,"hall");gn.addDust([25,.3,15,47,7.4,29],260,.035,13681828,.45,"lobby");gn.addDust([-18,.2,20.3,23,3.2,23.8],240,.03,10475724,.55,"aqua");gn.addDust([16,.3,-7.6,39.5,3,13.5],170,.028,13162686,.4,"corridor");gn.addDust([-18.6,.3,-7,-15.6,2.8,19],120,.03,14207144,.4,"connector");function cd(s){for(let t of _e.regions)if(s.x>=t.box[0]&&s.z>=t.box[1]&&s.x<=t.box[2]&&s.z<=t.box[3])return t;return{name:"",mat:"terrazzo"}}function hd(s){return cd(s).name}var ud={scene:qe,L:_e,sys:Tt,wrist:al,player:se,audio:je,ui:Ue,crt:$c,mc:rd,waiters:Pr,guests:ad,gazer:od,bride:ld,post:Ns,regionNameAt:hd},ke=new sl(ud);Tt.onTopologyChange=s=>{Pr.forEach(t=>t.onTopologyChange(Tt,s))};Tt.onNoise=s=>ke.addNoise(s);se.onStep=(s,t)=>{let e=s.mat;s.name==="\u5BB4\u4F1A\u5385"&&Math.abs(se.pos.x)>2.2&&(e="terrazzo"),s.name==="\u5927\u5802"&&Math.abs(se.pos.x-36)>2.4?e="terrazzo":s.name==="\u5927\u5802"&&(e="carpet"),je.footstep(e,t),ke.addNoise(t?.07:.016)};var mx=s=>ke.escort(s),ju=!1;function gx(s){let t=_e.dyn.gate,e=Tt.cords.find(i=>i.tag==="gate"),n=.55;if(e&&!e.heldEnd){let i=e.b===Tt.hook("hGateTop")?e.a:e.b;if(i===Tt.hook("hJam"))t.targetY=1.6;else if(i===Tt.hook("hWinch"))t.targetY=4.9,n=.5,Math.abs(t.y-t.targetY)>.02&&Math.floor(t.y*6)!==Math.floor((t.y-n*s)*6)&&je.ratchet();else if(i===Tt.hook("hSnap")){if(t.targetY=4.9,n=6,!ju&&t.y<4.5){ju=!0,je.thud(.9),ke.addNoise(1.3),Ue.subtitle("\u95F8\u95E8\u5F39\u4E0A\u53BB\u7684\u5DE8\u54CD\u649E\u5728\u73BB\u7483\u4E0A\u2014\u2014\u88C2\u7EB9\u6CBF\u7740\u9884\u73B0\u91CC\u7684\u5F27\u7EBF\u722C\u4E86\u51FA\u6765\u3002",6),_e.dyn.cracks.forEach(r=>{r.material.opacity=.85}),$c.setStatic("T07",!0);for(let r=0;r<4;r++)setTimeout(()=>je.glassCreak(),r*700);Ns.shock=1.4}}else t.targetY=t.y}if(Math.abs(t.y-t.targetY)>.01){let i=Math.sign(t.targetY-t.y);t.y+=i*n*s,i>0&&t.y>t.targetY&&(t.y=t.targetY),i<0&&t.y<t.targetY&&(t.y=t.targetY),t.group.position.y=t.y,n<1&&Math.random()<s*3&&je.creakLow()}t.collider.disabled=t.y>3.1}var td=new R(2.1,0,-13.5),mn=0;function xx(s){if(se.seated){Ue.reticle(""),se.holdE>1.2&&ke.standUp();return}if(ke.beat>=5&&!ke.ended){let n=Tt.cords.find(a=>a.tag==="seatlock"),i=!(n&&!n.heldEnd&&(n.a===Tt.hook("hMainA")&&n.b===Tt.hook("hMainB")||n.a===Tt.hook("hMainB")&&n.b===Tt.hook("hMainA"))),r=se.pos.distanceTo(td);if(window.__cut={d:+r.toFixed(2),seatFree:i,eDown:se.eDown,cutHold:+mn.toFixed(2),seated:se.seated,escorting:ke.escorting,callActive:ke.call.active,held:!!Tt.held,lockEnds:n?[n.a?.id||"held",n.b?.id||"held"].join("~"):"none"},r<2)if(!i)Ue.prompt("\u5E2D\u4F4D\u88AB\u7EA2\u7EF3\u6346\u7740 \u2014\u2014 \u5148<b>\u6458\u4E0B</b>\u6346\u5E2D\u7684\u7EF3\uFF08\u5BF9\u51C6\u7EF3\u7AEF\u6309 E\uFF09"),Ue.cutRing(0);else if(se.eDown){mn+=s,Ue.prompt("\u522B\u677E\u624B \u2014\u2014 <b>\u526A\u65AD\u8155\u7EF3</b>","E"),Ue.reticle("park"),Ue.cutRing(mn/2.2),se.kick((Math.random()-.5)*.02*(1+mn),(Math.random()-.5)*.012*mn),Ns.redPulse=Math.max(Ns.redPulse,mn/2.2*.7),Pr.forEach(a=>{a.visible&&a.startChase()}),Math.floor(mn*3)!==Math.floor((mn-s)*3)&&je.heartbeat(),Math.floor(mn*6)!==Math.floor((mn-s)*6)&&je.pluck(300+mn*300,.12,.99),mn>=2.2&&(ke._cut(),mn=0,Ue.cutRing(0));return}else mn=0,Ue.cutRing(0),Ue.prompt("\u5728\u4F60\u7684\u5E2D\u4F4D\u524D\uFF0C<b>\u957F\u6309</b>\u526A\u65AD\u8155\u7EF3","E");else mn=0,Ue.cutRing(0)}if(ke.call.active){let n=Tt.nearestHook(se.pos,2.4);if(Tt.hooks.forEach(i=>i.setHighlight(!1)),n){if(n.setHighlight(!0),Ue.reticle("park"),Ue.prompt("\u628A\u8155\u7EF3<b>\u5BC4\u6302</b>\u5230\u8FD9\u53EA\u793C\u94A9\u4E0A","E"),se.ePressedThisFrame){ke.resolveCall(),n.pop(),se.kick(-.03);let i=new W(new ne(.045,8,8),new j({color:9309202,roughness:.8}));i.position.copy(n.pos),qe.add(i),Ue.prompt(""),Ue.reticle("")}return}}let t=Cr.position,e=Tt.nearestTarget(t,se.lookDir,2.8);if(Tt.hooks.forEach(n=>n.setHighlight(!1)),e){if(e.type==="cordEnd"){e.cord.mat.emissiveIntensity=2.8,Ue.reticle("grab");let n={doorE:"\uFF08\u62E6\u95E8\u7EF3\uFF09",doorC:"\uFF08\u62E6\u95E8\u7EF3\uFF09",gate:"\uFF08\u95F8\u95E8\u540A\u7EF3\uFF09",seatlock:"\uFF08\u6346\u5E2D\u7EF3\uFF09"}[e.cord.tag]||"";Ue.prompt(`<b>\u6458</b>\u4E0B\u7EA2\u7EF3${n}`,"E"),se.ePressedThisFrame&&(Tt.grab(e.cord,e.end),je.whoosh(.14),se.kick(-.035,.012))}else if(e.type==="hook"){e.hook.setHighlight(!0),Ue.reticle("hang");let n={hWinch:"\uFF08\u7EDE\u76D8 \xB7 \u5B89\u9759\uFF09",hSnap:"\uFF08\u5361\u6263 \xB7 \u5DE8\u54CD\uFF09",hJam:"\uFF08\u5361\u6B7B\u4F4D\uFF09"}[e.hook.id]||"";Ue.prompt(`\u628A\u7EF3<b>\u6302</b>\u4E0A\u793C\u94A9${n}`,"E"),se.ePressedThisFrame&&(Tt.hang(e.hook),se.kick(.028,-.01))}}else Tt.held?(Ue.reticle(""),Ue.prompt("\u62FF\u7740\u7EA2\u7EF3 \u2014\u2014 \u8D70\u5411<b>\u547C\u5438\u53D1\u4EAE</b>\u7684\u793C\u94A9\u6302\u4E0A","E")):!ke.call.active&&!(ke.beat>=5&&se.pos.distanceTo(td)<2)&&(Ue.reticle(""),Ue.prompt(""))}var Wc=new R;function _x(){let s=null,t=1e9;for(let a of Pr){if(!a.visible)continue;let o=a.group.position.distanceTo(se.pos);o<t&&(t=o,s=a)}if(!s||t>14){je.setThreat(0,0),je.setCordHum(0,0);return}Wc.copy(s.group.position).sub(se.pos);let e=se.forward,n=nn.clamp(Wc.x*-e.z-Wc.z*-e.x,-8,8)/8,i=s.state==="chase"||s.state==="alert",r=nn.clamp(1-t/14,0,1);je.setThreat(i?Math.min(1,r*1.6+.25):r*.4,n),je.setCordHum(s.state==="ride"?r*r:0,n)}function yx(){for(let s of sd){let t=Tt.cords.find(n=>n.tag===s.tag),e=!!(t&&!t.heldEnd&&(t.a===Tt.hook(s.a)&&t.b===Tt.hook(s.b)||t.a===Tt.hook(s.b)&&t.b===Tt.hook(s.a)));s.col.disabled=!e}}var Xc=5,qc=7;function vx(s,t){for(let i of _e.dyn.tubes)if((i.flicker||ke.beat>=3)&&Math.random()<s*(i.flicker?2.2:.5)){let a=.25+Math.random()*.75;i.mat.emissiveIntensity=2.6*a,i.light.intensity=i.light.userData.base*a*(ke.lightMult.corridor??1)}if(ke.beat>=3){let i=_e.dyn.lobbyChand;i.group.rotation.z=Math.sin(t*.6)*.05,i.group.rotation.x=Math.cos(t*.43)*.04,i.group.position.x=36+Math.sin(t*.6)*.3}_e.dyn.waterLights.forEach((i,r)=>{i.intensity=i.userData.base*(.7+Math.sin(t*(.8+r*.3)+r*2)*.3),i.position.x+=Math.sin(t*.22+r*3)*s*1.2});for(let i of _e.dyn.bulbs)i.group.rotation.x=Math.sin(t*1.1+i.phase)*.14,i.group.rotation.z=Math.cos(t*.9+i.phase)*.1;let e=ke.beat>=3?.12:.04;for(let i of _e.dyn.lanterns)i.group.rotation.x=Math.sin(t*.7+i.phase)*e,i.group.rotation.z=Math.cos(t*.55+i.phase)*e*.7;if(_e.dyn.kelps)for(let i of _e.dyn.kelps)i.mesh.rotation.z=Math.sin(t*.4+i.phase)*.12,i.mesh.position.x+=Math.sin(t*.23+i.phase)*s*.15;if(_e.dyn.strips)for(let i of _e.dyn.strips)i.mesh.rotation.x=Math.sin(t*.8+i.phase)*.05;if(_e.dyn.beams){for(let i of _e.dyn.beams)i.mesh.position.x=i.x0+Math.sin(t*.18+i.phase)*2.4,i.mesh.rotation.z=.25+Math.sin(t*.22+i.phase)*.1,i.mesh.material.opacity=.1+Math.sin(t*.35+i.phase)*.05;_e.dyn.seaShade.position.x=-6+Math.sin(t*.05)*12,_e.dyn.seaShade.position.y=3.2+Math.sin(t*.11)*.8}let n=hd(se.pos);if(je.setLayer("water",n==="\u6D77\u6D0B\u9986\u8FDE\u5ECA"?.05:0,1.5),n==="\u5458\u5DE5\u8FDE\u5ECA"&&(Xc-=s,Xc<=0&&(Xc=4+Math.random()*6,je.creakLow())),n==="\u6D77\u6D0B\u9986\u8FDE\u5ECA"&&ke.beat>=4&&(qc-=s,qc<=0&&(qc=5+Math.random()*7,je.glassCreak())),_e.dyn.doorSOpen){let{dL:i,dR:r}=_e.dyn.doorS.userData;i.position.x+=(-3.2-i.position.x)*s*.8,r.position.x+=(3.2-r.position.x)*s*.8}for(let i of Object.keys(_e.lights))for(let r of _e.lights[i]){let a=r.position.distanceTo(se.pos);r.visible=a<55}}var ed=document.getElementById("title"),Mx=document.getElementById("startBtn"),dd=document.getElementById("resume"),bx=document.getElementById("ctlBtn"),nd=document.getElementById("ctlPanel"),ol=!1;bx.addEventListener("click",()=>{nd.style.display=nd.style.display==="block"?"none":"block"});Mx.addEventListener("click",()=>{je.init(),ed.style.opacity=0,setTimeout(()=>{ed.style.display="none"},900),se.enabled=!0,se.lock(),ol||(ol=!0,ke.start())});document.addEventListener("pointerlockchange",()=>{ol&&(dd.style.display=document.pointerLockElement===Zc?"none":"flex")});dd.addEventListener("click",()=>se.lock());document.getElementById("pauseRestart").addEventListener("click",s=>{s.stopPropagation(),location.reload()});window.addEventListener("resize",()=>{Cr.aspect=window.innerWidth/window.innerHeight,Cr.updateProjectionMatrix(),Qn.setSize(window.innerWidth,window.innerHeight),Ns.resize(window.innerWidth,window.innerHeight)});window.__game=ud;window.__agenda=ke;var Yc=new gr,id=0;function fd(){requestAnimationFrame(fd);let s,t;if(window.__fixedDt!==void 0?(s=window.__fixedDt,id+=s,t=id,Yc.getDelta()):(s=Math.min(.05,Yc.getDelta())*(window.__timeScale||1),t=Yc.elapsedTime),se.update(s,_e.colliders,cd),ol){ke.update(s),gx(s),yx(),xx(s),_x(),vx(s,t),Tt.update(s,se.handPos()),al.record(se.pos),al.update(s,se.handPos()),rd.update(s,se.pos);for(let e of Pr)e.update(s,Tt,se.pos,mx,je);ad.update(s,t),od.update(s,se.pos,t),ld.update(s),$c.update(s,se.pos),gn.update(s,ke.lightMult)}Ns.render(qe,Cr,s,t)}fd();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
