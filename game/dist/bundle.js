(()=>{var Ih=0,tc=1,Lh=2;var vr=1,Za=2,Is=3,gi=0,un=1,Te=2,ti=0,Ki=1,In=2,ec=3,nc=4,Dh=5;var Di=100,Uh=101,Nh=102,Fh=103,Bh=104,Oh=200,Hh=201,kh=202,zh=203,ca=204,ha=205,Gh=206,Vh=207,Wh=208,Xh=209,qh=210,Yh=211,Zh=212,$h=213,Jh=214,ua=0,da=1,fa=2,Qi=3,pa=4,ma=5,ga=6,xa=7,ic=0,Kh=1,Qh=2,Ln=0,sc=1,rc=2,ac=3,oc=4,lc=5,cc=6,hc=7;var uc=300,Oi=301,ss=302,$a=303,Ja=304,Mr=306,$n=1e3,Bn=1001,_a=1002,on=1003,jh=1004;var br=1005;var He=1006,Ka=1007;var Hi=1008;var En=1009,dc=1010,fc=1011,Ls=1012,Qa=1013,Xn=1014,Hn=1015,ei=1016,ja=1017,to=1018,Ds=1020,pc=35902,mc=35899,gc=1021,xc=1022,kn=1023,Jn=1026,ki=1027,eo=1028,no=1029,zi=1030,io=1031;var so=1033,Sr=33776,Er=33777,Tr=33778,wr=33779,ro=35840,ao=35841,oo=35842,lo=35843,co=36196,ho=37492,uo=37496,fo=37488,po=37489,Ar=37490,mo=37491,go=37808,xo=37809,_o=37810,yo=37811,vo=37812,Mo=37813,bo=37814,So=37815,Eo=37816,To=37817,wo=37818,Ao=37819,Ro=37820,Co=37821,Po=36492,Io=36494,Lo=36495,Do=36283,Uo=36284,Rr=36285,No=36286;var Ks=2300,ya=2301,la=2302,Vl=2303,Wl=2400,Xl=2401,ql=2402;var tu=3200;var Fo=0,eu=1,Si="",je="srgb",Qs="srgb-linear",js="linear",_e="srgb";var $i=7680;var Yl=519,nu=512,iu=513,su=514,Bo=515,ru=516,au=517,Oo=518,ou=519,Zl=35044;var _c="300 es",Wn=2e3,Ts=2001;function Sd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ed(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lu(){let s=tr("canvas");return s.style.display="block",s}var ih={},ws=null;function yc(...s){let t="THREE."+s.shift();ws?ws("log",t,...s):console.log(t,...s)}function cu(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Vt(...s){s=cu(s);let t="THREE."+s.shift();if(ws)ws("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Yt(...s){s=cu(s);let t="THREE."+s.shift();if(ws)ws("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ji(...s){let t=s.join(" ");t in ih||(ih[t]=!0,Vt(...s))}function hu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var uu={[ua]:da,[fa]:ga,[pa]:xa,[Qi]:ma,[da]:ua,[ga]:fa,[xa]:pa,[ma]:Qi},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=1234567,Ys=Math.PI/180,ji=180/Math.PI;function Us(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function ne(s,t,e){return Math.max(t,Math.min(e,s))}function vc(s,t){return(s%t+t)%t}function Td(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function wd(s,t,e){return s!==t?(e-s)/(t-s):0}function Zs(s,t,e){return(1-e)*s+e*t}function Ad(s,t,e,n){return Zs(s,t,1-Math.exp(-e*n))}function Rd(s,t=1){return t-Math.abs(vc(s,t*2)-t)}function Cd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Pd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Id(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ld(s,t){return s+Math.random()*(t-s)}function Dd(s){return s*(.5-Math.random())}function Ud(s){s!==void 0&&(sh=s);let t=sh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(s){return s*Ys}function Fd(s){return s*ji}function Bd(s){return(s&s-1)===0&&s!==0}function Od(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Hd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kd(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ss(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ln={DEG2RAD:Ys,RAD2DEG:ji,generateUUID:Us,clamp:ne,euclideanModulo:vc,mapLinear:Td,inverseLerp:wd,lerp:Zs,damp:Ad,pingpong:Rd,smoothstep:Cd,smootherstep:Pd,randInt:Id,randFloat:Ld,randFloatSpread:Dd,seededRandom:Ud,degToRad:Nd,radToDeg:Fd,isPowerOfTwo:Bd,ceilPowerOfTwo:Od,floorPowerOfTwo:Hd,setQuaternionFromProperEuler:kd,normalize:yn,denormalize:Ss},Ct=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,o=Math.sin(o*b)/w,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+y*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+y*o;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_l=new R,rh=new Qn,Kt=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=i[0],m=i[3],p=i[6],b=i[1],w=i[4],v=i[7],T=i[2],S=i[5],C=i[8];return r[0]=a*y+o*b+l*T,r[3]=a*m+o*w+l*S,r[6]=a*p+o*v+l*C,r[1]=c*y+h*b+u*T,r[4]=c*m+h*w+u*S,r[7]=c*p+h*v+u*C,r[2]=d*y+f*b+g*T,r[5]=d*m+f*w+g*S,r[8]=d*p+f*v+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(i*c-h*n)*y,t[2]=(o*n-i*a)*y,t[3]=d*y,t[4]=(h*e-i*l)*y,t[5]=(i*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yl.makeScale(t,e)),this}rotate(t){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yl=new Kt,ah=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oh=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zd(){let s={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_e&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_e&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Si?js:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Qs]:{primaries:t,whitePoint:n,transfer:js,toXYZ:ah,fromXYZ:oh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:ah,fromXYZ:oh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),s}var ce=zd();function mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var hs,va=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hs===void 0&&(hs=tr("canvas")),hs.width=t.width,hs.height=t.height;let i=hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gd=0,As=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(vl(i[a].image)):r.push(vl(i[a]))}else r=vl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function vl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?va.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Vd=0,Ml=new R,vn=class s extends Kn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Bn,i=Bn,r=He,a=Hi,o=kn,l=En,c=s.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Us(),this.name="",this.source=new As(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $n:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $n:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=uc;vn.DEFAULT_ANISOTROPY=1;var Ue=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,T=(p+1)/2,S=(h+d)/4,C=(u+y)/4,_=(g+m)/4;return w>v&&w>T?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=S/n,r=C/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=_/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=C/r,i=_/r),this.set(n,i,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-y)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ma=class extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new vn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new As(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends Ma{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},er=class extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Se=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,y,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wd,t,Xd)}lookAt(t,e,n){let i=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),wi.crossVectors(n,Tn),wi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),wi.crossVectors(n,Tn)),wi.normalize(),Hr.crossVectors(Tn,wi),i[0]=wi.x,i[4]=Hr.x,i[8]=Tn.x,i[1]=wi.y,i[5]=Hr.y,i[9]=Tn.y,i[2]=wi.z,i[6]=Hr.z,i[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],b=n[3],w=n[7],v=n[11],T=n[15],S=i[0],C=i[4],_=i[8],E=i[12],P=i[1],I=i[5],N=i[9],Y=i[13],K=i[2],z=i[6],Z=i[10],$=i[14],rt=i[3],ht=i[7],Mt=i[11],Tt=i[15];return r[0]=a*S+o*P+l*K+c*rt,r[4]=a*C+o*I+l*z+c*ht,r[8]=a*_+o*N+l*Z+c*Mt,r[12]=a*E+o*Y+l*$+c*Tt,r[1]=h*S+u*P+d*K+f*rt,r[5]=h*C+u*I+d*z+f*ht,r[9]=h*_+u*N+d*Z+f*Mt,r[13]=h*E+u*Y+d*$+f*Tt,r[2]=g*S+y*P+m*K+p*rt,r[6]=g*C+y*I+m*z+p*ht,r[10]=g*_+y*N+m*Z+p*Mt,r[14]=g*E+y*Y+m*$+p*Tt,r[3]=b*S+w*P+v*K+T*rt,r[7]=b*C+w*I+v*z+T*ht,r[11]=b*_+w*N+v*Z+T*Mt,r[15]=b*E+w*Y+v*$+T*Tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],b=l*f-c*d,w=o*f-c*u,v=o*d-l*u,T=a*f-c*h,S=a*d-l*h,C=a*u-o*h;return e*(y*b-m*w+p*v)-n*(g*b-m*T+p*S)+i*(g*w-y*T+p*C)-r*(g*v-y*S+m*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],b=e*o-n*a,w=e*l-i*a,v=e*c-r*a,T=n*l-i*o,S=n*c-r*o,C=i*c-r*l,_=h*y-u*g,E=h*m-d*g,P=h*p-f*g,I=u*m-d*y,N=u*p-f*y,Y=d*p-f*m,K=b*Y-w*N+v*I+T*P-S*E+C*_;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/K;return t[0]=(o*Y-l*N+c*I)*z,t[1]=(i*N-n*Y-r*I)*z,t[2]=(y*C-m*S+p*T)*z,t[3]=(d*S-u*C-f*T)*z,t[4]=(l*P-a*Y-c*E)*z,t[5]=(e*Y-i*P+r*E)*z,t[6]=(m*v-g*C-p*w)*z,t[7]=(h*C-d*v+f*w)*z,t[8]=(a*N-o*P+c*_)*z,t[9]=(n*P-e*N-r*_)*z,t[10]=(g*S-y*v+p*b)*z,t[11]=(u*v-h*S-f*b)*z,t[12]=(o*E-a*I-l*_)*z,t[13]=(e*I-n*E+i*_)*z,t[14]=(y*w-g*T-m*b)*z,t[15]=(h*T-u*w+d*b)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,m=a*u,p=o*u,b=l*c,w=l*h,v=l*u,T=n.x,S=n.y,C=n.z;return i[0]=(1-(y+p))*T,i[1]=(f+v)*T,i[2]=(g-w)*T,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(d+p))*S,i[6]=(m+b)*S,i[7]=0,i[8]=(g+w)*C,i[9]=(m-b)*C,i[10]=(1-(d+y))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=us.set(i[0],i[1],i[2]).length(),o=us.set(i[4],i[5],i[6]).length(),l=us.set(i[8],i[9],i[10]).length();r<0&&(a=-a),zn.copy(this);let c=1/a,h=1/o,u=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Wn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Wn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ts)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Wn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Wn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ts)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},us=new R,zn=new Se,Wd=new R(0,0,0),Xd=new R(1,1,1),wi=new R,Hr=new R,Tn=new R,lh=new Se,ch=new Qn,xi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qd=0,hh=new R,ds=new Qn,hi=new Se,kr=new R,zs=new R,Yd=new R,Zd=new Qn,uh=new R(1,0,0),dh=new R(0,1,0),fh=new R(0,0,1),ph={type:"added"},$d={type:"removed"},fs={type:"childadded",child:null},bl={type:"childremoved",child:null},ke=class s extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new xi,n=new Qn,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new Kt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(uh,t)}rotateY(t){return this.rotateOnAxis(dh,t)}rotateZ(t){return this.rotateOnAxis(fh,t)}translateOnAxis(t,e){return hh.copy(t).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uh,t)}translateY(t){return this.translateOnAxis(dh,t)}translateZ(t){return this.translateOnAxis(fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(zs,kr,this.up):hi.lookAt(kr,zs,this.up),this.quaternion.setFromRotationMatrix(hi),i&&(hi.extractRotation(i.matrixWorld),ds.setFromRotationMatrix(hi),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ph),fs.child=t,this.dispatchEvent(fs),fs.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($d),bl.child=t,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ph),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,Yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ke.DEFAULT_UP=new R(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ae=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jd={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Sl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=vc(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Sl(a,r,t+1/3),this.g=Sl(a,r,t),this.b=Sl(a,r,t-1/3)}return ce.colorSpaceToWorking(this,i),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){let n=du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return ce.workingToColorSpace(fn.copy(this),t),Math.round(ne(fn.r*255,0,255))*65536+Math.round(ne(fn.g*255,0,255))*256+Math.round(ne(fn.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(fn.copy(this),e);let n=fn.r,i=fn.g,r=fn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=je){ce.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,i=fn.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(zr);let n=Zs(Ai.h,zr.h,e),i=Zs(Ai.s,zr.s,e),r=Zs(Ai.l,zr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new zt;zt.NAMES=du;var ir=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var _i=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new R,ui=new R,El=new R,di=new R,ps=new R,ms=new R,mh=new R,Tl=new R,wl=new R,Al=new R,Rl=new Ue,Cl=new Ue,Pl=new Ue,Li=class s{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gn.subVectors(t,e),i.cross(Gn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Gn.subVectors(i,e),ui.subVectors(n,e),El.subVectors(t,e);let a=Gn.dot(Gn),o=Gn.dot(ui),l=Gn.dot(El),c=ui.dot(ui),h=ui.dot(El),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Rl.setScalar(0),Cl.setScalar(0),Pl.setScalar(0),Rl.fromBufferAttribute(t,e),Cl.fromBufferAttribute(t,n),Pl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Rl,r.x),a.addScaledVector(Cl,r.y),a.addScaledVector(Pl,r.z),a}static isFrontFacing(t,e,n,i){return Gn.subVectors(n,e),ui.subVectors(t,e),Gn.cross(ui).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Gn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;ps.subVectors(i,n),ms.subVectors(r,n),Tl.subVectors(t,n);let l=ps.dot(Tl),c=ms.dot(Tl);if(l<=0&&c<=0)return e.copy(n);wl.subVectors(t,i);let h=ps.dot(wl),u=ms.dot(wl);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ps,a);Al.subVectors(t,r);let f=ps.dot(Al),g=ms.dot(Al);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ms,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return mh.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(mh,o);let p=1/(m+y+d);return a=y*p,o=d*p,e.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Vr.subVectors(this.max,Gs),gs.subVectors(t.a,Gs),xs.subVectors(t.b,Gs),_s.subVectors(t.c,Gs),Ri.subVectors(xs,gs),Ci.subVectors(_s,xs),Xi.subVectors(gs,_s);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Xi.z,Xi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Xi.z,0,-Xi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Xi.y,Xi.x,0];return!Il(e,gs,xs,_s,Vr)||(e=[1,0,0,0,1,0,0,0,1],!Il(e,gs,xs,_s,Vr))?!1:(Wr.crossVectors(Ri,Ci),e=[Wr.x,Wr.y,Wr.z],Il(e,gs,xs,_s,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},fi=[new R,new R,new R,new R,new R,new R,new R,new R],Vn=new R,Gr=new jn,gs=new R,xs=new R,_s=new R,Ri=new R,Ci=new R,Xi=new R,Gs=new R,Vr=new R,Wr=new R,qi=new R;function Il(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){qi.fromArray(s,r);let o=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ze=new R,Xr=new Ct,Kd=0,hn=class extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zl,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),i=yn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var sr=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var rr=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qd=new jn,Vs=new R,Ll=new R,yi=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Ll)),this.expandByPoint(Vs.copy(t.center).sub(Ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},jd=0,Fn=new Se,Dl=new ke,ys=new R,wn=new jn,Ws=new jn,an=new R,ze=class s extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?rr:sr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return Dl.lookAt(t),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(wn.min,Ws.min),wn.expandByPoint(an),an.addVectors(wn.max,Ws.max),wn.expandByPoint(an)):(wn.expandByPoint(Ws.min),wn.expandByPoint(Ws.max))}wn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)an.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(an));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)an.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(t,c),an.add(ys)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new R,l[_]=new R;let c=new R,h=new R,u=new R,d=new Ct,f=new Ct,g=new Ct,y=new R,m=new R;function p(_,E,P){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,P),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[_].add(y),o[E].add(y),o[P].add(y),l[_].add(m),l[E].add(m),l[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,E=b.length;_<E;++_){let P=b[_],I=P.start,N=P.count;for(let Y=I,K=I+N;Y<K;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let w=new R,v=new R,T=new R,S=new R;function C(_){T.fromBufferAttribute(i,_),S.copy(T);let E=o[_];w.copy(E),w.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(S,E);let I=v.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,I)}for(let _=0,E=b.length;_<E;++_){let P=b[_],I=P.start,N=P.count;for(let Y=I,K=I+N;Y<K;Y+=3)C(t.getX(Y+0)),C(t.getX(Y+1)),C(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new hn(d,h,u)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tf=0,vi=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Ki,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var pi=new R,Ul=new R,qr=new R,Pi=new R,Nl=new R,Yr=new R,Fl=new R,ar=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ul.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(Ul);let r=t.distanceTo(e)*.5,a=-this.direction.dot(qr),o=Pi.dot(this.direction),l=-Pi.dot(qr),c=Pi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ul).addScaledVector(qr,d),f}intersectSphere(t,e){pi.subVectors(t.center,this.origin);let n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,i,r){Nl.subVectors(e,t),Yr.subVectors(n,t),Fl.crossVectors(Nl,Yr);let a=this.direction.dot(Fl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,t);let l=o*this.direction.dot(Yr.crossVectors(Pi,Yr));if(l<0)return null;let c=o*this.direction.dot(Nl.cross(Pi));if(c<0||l+c>a)return null;let h=-o*Pi.dot(Fl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gh=new Se,Yi=new ar,Zr=new yi,xh=new R,$r=new R,Jr=new R,Kr=new R,Bl=new R,Qr=new R,_h=new R,jr=new R,W=class extends ke{constructor(t=new ze,e=new se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Bl.fromBufferAttribute(u,t),a?Qr.addScaledVector(Bl,h):Qr.addScaledVector(Bl.sub(e),h))}e.add(Qr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(Zr.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Zr,xh)===null||Yi.origin.distanceToSquared(xh)>(t.far-t.near)**2))&&(gh.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(gh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,T=w;v<T;v+=3){let S=o.getX(v),C=o.getX(v+1),_=o.getX(v+2);i=ta(this,p,t,n,c,h,u,S,C,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=o.getX(m),w=o.getX(m+1),v=o.getX(m+2);i=ta(this,a,t,n,c,h,u,b,w,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,T=w;v<T;v+=3){let S=v,C=v+1,_=v+2;i=ta(this,p,t,n,c,h,u,S,C,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=m,w=m+1,v=m+2;i=ta(this,a,t,n,c,h,u,b,w,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function ef(s,t,e,n,i,r,a,o){let l;if(t.side===un?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===gi,o),l===null)return null;jr.copy(o),jr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(jr);return c<e.near||c>e.far?null:{distance:c,point:jr.clone(),object:s}}function ta(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,$r),s.getVertexPosition(l,Jr),s.getVertexPosition(c,Kr);let h=ef(s,t,e,n,$r,Jr,Kr,_h);if(h){let u=new R;Li.getBarycoord(_h,$r,Jr,Kr,u),i&&(h.uv=Li.getInterpolatedAttribute(i,o,l,c,u,new Ct)),r&&(h.uv1=Li.getInterpolatedAttribute(r,o,l,c,u,new Ct)),a&&(h.normal=Li.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};Li.getNormal($r,Jr,Kr,d.normal),h.face=d,h.barycoord=u}return h}var or=class extends vn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=on,h=on,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lr=class extends hn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vs=new Se,yh=new Se,ea=[],vh=new jn,nf=new Se,Xs=new W,qs=new yi,An=class extends W{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,nf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),vh.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(vh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),qs.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vs),yh.multiplyMatrices(n,vs),Xs.matrixWorld=yh,Xs.raycast(t,ea);for(let a=0,o=ea.length;a<o;a++){let l=ea[a];l.instanceId=r,l.object=this,e.push(l)}ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new or(new Float32Array(i*this.count),i,this.count,eo,Hn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ol=new R,sf=new R,rf=new Kt,Zn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ol.subVectors(n,e).cross(sf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||rf.getNormalMatrix(t),i=this.coplanarPoint(Ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new yi,af=new Ct(.5,.5),na=new R,Cs=class{constructor(t=new Zn,e=new Zn,n=new Zn,i=new Zn,r=new Zn,a=new Zn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],b=r[12],w=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-a,f-h,p-g,T-b).normalize(),i[1].setComponents(c+a,f+h,p+g,T+b).normalize(),i[2].setComponents(c+o,f+u,p+y,T+w).normalize(),i[3].setComponents(c-o,f-u,p-y,T-w).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,f-d,p-m,T-v).normalize();else if(i[4].setComponents(c-l,f-d,p-m,T-v).normalize(),e===Wn)i[5].setComponents(c+l,f+d,p+m,T+v).normalize();else if(e===Ts)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);let e=af.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(na.x=i.normal.x>0?t.max.x:t.min.x,na.y=i.normal.y>0?t.max.y:t.min.y,na.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Sa=class extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mh=new Se,$l=new ar,ia=new yi,sa=new R,cr=class extends ke{constructor(t=new ze,e=new Sa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(i),ia.radius+=r,t.ray.intersectsSphere(ia)===!1)return;Mh.copy(i).invert(),$l.copy(t.ray).applyMatrix4(Mh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);sa.fromBufferAttribute(u,m),bh(sa,m,l,i,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)sa.fromBufferAttribute(u,g),bh(sa,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bh(s,t,e,n,i,r,a){let o=$l.distanceSqToPoint(s);if(o<e){let l=new R;$l.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var hr=class extends vn{constructor(t=[],e=Oi,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pn=class extends vn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Mi=class extends vn{constructor(t,e,n=Xn,i,r,a,o=on,l=on,c,h=Jn,u=1){if(h!==Jn&&h!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new As(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ea=class extends Mi{constructor(t,e=Xn,n=Oi,i,r,a=on,o=on,l,c=Jn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ur=class extends vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ce=class s extends ze{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(y,m,p,b,w,v,T,S,C,_,E){let P=v/C,I=T/_,N=v/2,Y=T/2,K=S/2,z=C+1,Z=_+1,$=0,rt=0,ht=new R;for(let Mt=0;Mt<Z;Mt++){let Tt=Mt*I-Y;for(let Lt=0;Lt<z;Lt++){let de=Lt*P-N;ht[y]=de*b,ht[m]=Tt*w,ht[p]=K,c.push(ht.x,ht.y,ht.z),ht[y]=0,ht[m]=0,ht[p]=S>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Lt/C),u.push(1-Mt/_),$+=1}}for(let Mt=0;Mt<_;Mt++)for(let Tt=0;Tt<C;Tt++){let Lt=d+Tt+z*Mt,de=d+Tt+z*(Mt+1),Pe=d+(Tt+1)+z*(Mt+1),fe=d+(Tt+1)+z*Mt;l.push(Lt,de,fe),l.push(de,Pe,fe),rt+=6}o.addGroup(f,rt,E),f+=rt,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ps=class s extends ze{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=n*2+r,y=i+1,m=new R,p=new R;for(let b=0;b<=g;b++){let w=0,v=0,T=0,S=0;if(b<=n){let E=b/n,P=E*Math.PI/2;v=-h-t*Math.cos(P),T=t*Math.sin(P),S=-t*Math.cos(P),w=E*u}else if(b<=n+r){let E=(b-n)/r;v=-h+E*e,T=t,S=0,w=u+E*d}else{let E=(b-n-r)/n,P=E*Math.PI/2;v=h+t*Math.sin(P),T=t*Math.cos(P),S=t*Math.sin(P),w=u+d+E*u}let C=Math.max(0,Math.min(1,w/f)),_=0;b===0?_=.5/i:b===g&&(_=-.5/i);for(let E=0;E<=i;E++){let P=E/i,I=P*Math.PI*2,N=Math.sin(I),Y=Math.cos(I);p.x=-T*Y,p.y=v,p.z=T*N,o.push(p.x,p.y,p.z),m.set(-T*Y,S,T*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+_,C)}if(b>0){let E=(b-1)*y;for(let P=0;P<i;P++){let I=E+P,N=E+P+1,Y=b*y+P,K=b*y+P+1;a.push(I,N,Y),a.push(N,K,Y)}}}this.setIndex(a),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ts=class s extends ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new R,h=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qt=class s extends ze{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function b(){let v=new R,T=new R,S=0,C=(e-t)/n;for(let _=0;_<=r;_++){let E=[],P=_/r,I=P*(e-t)+t;for(let N=0;N<=i;N++){let Y=N/i,K=Y*l+o,z=Math.sin(K),Z=Math.cos(K);T.x=I*z,T.y=-P*n+m,T.z=I*Z,u.push(T.x,T.y,T.z),v.set(z,C,Z).normalize(),d.push(v.x,v.y,v.z),f.push(Y,1-P),E.push(g++)}y.push(E)}for(let _=0;_<i;_++)for(let E=0;E<r;E++){let P=y[E][_],I=y[E+1][_],N=y[E+1][_+1],Y=y[E][_+1];(t>0||E!==0)&&(h.push(P,I,Y),S+=3),(e>0||E!==r-1)&&(h.push(I,N,Y),S+=3)}c.addGroup(p,S,0),p+=S}function w(v){let T=g,S=new Ct,C=new R,_=0,E=v===!0?t:e,P=v===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),g++;let I=g;for(let N=0;N<=i;N++){let K=N/i*l+o,z=Math.cos(K),Z=Math.sin(K);C.x=E*Z,C.y=m*P,C.z=E*z,u.push(C.x,C.y,C.z),d.push(0,P,0),S.x=z*.5+.5,S.y=Z*.5*P+.5,f.push(S.x,S.y),g++}for(let N=0;N<i;N++){let Y=T+N,K=I+N;v===!0?h.push(K,K+1,Y):h.push(K+1,K,Y),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mn=class s extends Qt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Ct:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,i=[],r=[],a=[],o=new R,l=new Se;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ne(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ne(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},dr=class extends On{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ta=class extends dr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Mc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Sh=new R,Eh=new R,Hl=new Mc,kl=new Mc,zl=new Mc,Sn=class extends On{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Eh.subVectors(i[0],i[1]).add(i[0]),c=Eh);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Sh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Sh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Hl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),kl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),zl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Hl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),kl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),zl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Hl.calc(l),kl.calc(l),zl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Th(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function of(s,t){let e=1-s;return e*e*t}function lf(s,t){return 2*(1-s)*s*t}function cf(s,t){return s*s*t}function $s(s,t,e,n){return of(s,t)+lf(s,e)+cf(s,n)}function hf(s,t){let e=1-s;return e*e*e*t}function uf(s,t){let e=1-s;return 3*e*e*s*t}function df(s,t){return 3*(1-s)*s*s*t}function ff(s,t){return s*s*s*t}function Js(s,t,e,n,i){return hf(s,t)+uf(s,e)+df(s,n)+ff(s,i)}var wa=class extends On{constructor(t=new Ct,e=new Ct,n=new Ct,i=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ct){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(t,i.x,r.x,a.x,o.x),Js(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Aa=class extends On{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(t,i.x,r.x,a.x,o.x),Js(t,i.y,r.y,a.y,o.y),Js(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ra=class extends On{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends On{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pa=class extends On{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set($s(t,i.x,r.x,a.x),$s(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fr=class extends On{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set($s(t,i.x,r.x,a.x),$s(t,i.y,r.y,a.y),$s(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Th(o,l.x,c.x,h.x,u.x),Th(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Ct().fromArray(i))}return this}},pf=Object.freeze({__proto__:null,ArcCurve:Ta,CatmullRomCurve3:Sn,CubicBezierCurve:wa,CubicBezierCurve3:Aa,EllipseCurve:dr,LineCurve:Ra,LineCurve3:Ca,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:fr,SplineCurve:Ia});var bi=class s extends ze{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ne(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new R,d=new Ct,f=new R,g=new R,y=new R,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let b=0;b<=e;b++){let w=n+b*h*i,v=Math.sin(w),T=Math.cos(w);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*T,a.push(u.x,u.y,u.z),d.x=b/e,d.y=S/(t.length-1),o.push(d.x,d.y);let C=l[3*S+0]*v,_=l[3*S+1],E=l[3*S+0]*T;c.push(C,_,E)}}for(let b=0;b<e;b++)for(let w=0;w<t.length-1;w++){let v=w+b*t.length,T=v,S=v+t.length,C=v+t.length+1,_=v+1;r.push(T,S,_),r.push(C,_,S)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var ge=class s extends ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let b=p*d-a;for(let w=0;w<c;w++){let v=w*u-r;g.push(v,-b,0),y.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let w=b+c*p,v=b+c*(p+1),T=b+1+c*(p+1),S=b+1+c*p;f.push(w,v,S),f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var re=class s extends ze{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let b=[],w=p/n,v=a+w*o,T=t*Math.cos(v),S=Math.sqrt(t*t-T*T),C=0;p===0&&a===0?C=.5/e:p===n&&l===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let E=_/e,P=i+E*r;u.x=-S*Math.cos(P),u.y=T,u.z=S*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(E+C,1-w),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let w=h[p][b+1],v=h[p][b],T=h[p+1][b],S=h[p+1][b+1];(p!==0||a>0)&&f.push(w,v,S),(p!==n-1||l<Math.PI)&&f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Rn=class s extends ze{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new R,f=new R,g=new R;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=i;p++){let b=p/i*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/i),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=i;m++){let p=(i+1)*y+m-1,b=(i+1)*(y-1)+m-1,w=(i+1)*(y-1)+m,v=(i+1)*y+m;l.push(p,b,v),l.push(b,w,v)}this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Cn=class s extends ze{constructor(t=new fr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new Ct,h=new R,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function y(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),b(),p()}function m(w){h=t.getPointAt(w/e,h);let v=a.normals[w],T=a.binormals[w];for(let S=0;S<=i;S++){let C=S/i*Math.PI*2,_=Math.sin(C),E=-Math.cos(C);l.x=E*v.x+_*T.x,l.y=E*v.y+_*T.y,l.z=E*v.z+_*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let v=1;v<=i;v++){let T=(i+1)*(w-1)+(v-1),S=(i+1)*w+(v-1),C=(i+1)*w+v,_=(i+1)*(w-1)+v;g.push(T,S,_),g.push(S,C,_)}}function b(){for(let w=0;w<=e;w++)for(let v=0;v<=i;v++)c.x=w/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new pf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function rs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(wh(i))i.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(wh(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function mn(s){let t={};for(let e=0;e<s.length;e++){let n=rs(s[e]);for(let i in n)t[i]=n[i]}return t}function wh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function mf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function bc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var fu={clone:rs,merge:mn},gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ct().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},La=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},j=class extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},pr=class extends j{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Da=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ua=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ra(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var Ui=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Na=class extends Ui{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xl:r=t,o=2*e-n;break;case ql:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xl:a=t,l=2*n-e;break;case ql:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,b=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+b*a[c+T]+w*a[l+T]+v*a[u+T];return r}},Fa=class extends Ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ba=class extends Ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Oa=class extends Ui{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(i-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*d+g*2,b=u[p],w=u[p+1],v=t*d+g*2,T=h[v],S=h[v+1],C=(n-e)/(i-e),_,E,P,I,N;for(let Y=0;Y<8;Y++){_=C*C,E=_*C,P=1-C,I=P*P,N=I*P;let z=N*e+3*I*C*b+3*P*_*T+E*i-n;if(Math.abs(z)<1e-10)break;let Z=3*I*(b-e)+6*P*C*(T-b)+3*_*(i-T);if(Math.abs(Z)<1e-10)break;C=C-z/Z,C=Math.max(0,Math.min(1,C))}r[g]=N*y+3*I*C*w+3*P*_*S+E*m}return r}},Pn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ra(e,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ra(t.times,Array),values:ra(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Oa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case ya:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break;case Vl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Vl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Yt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Ed(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===la,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=ya;var Ni=class extends Pn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Ks;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Pn{constructor(t,e,n,i){super(t,e,n,i)}};Ha.prototype.ValueTypeName="color";var ka=class extends Pn{constructor(t,e,n,i){super(t,e,n,i)}};ka.prototype.ValueTypeName="number";var za=class extends Ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Qn.slerpFlat(r,0,a,c-o,a,c,l);return r}},mr=class extends Pn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new za(this.times,this.values,this.getValueSize(),t)}};mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Ks;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends Pn{constructor(t,e,n,i){super(t,e,n,i)}};Ga.prototype.ValueTypeName="vector";var Va=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pu=new Va,Wa=class{constructor(t){this.manager=t!==void 0?t:pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var es=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},gr=class extends es{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gl=new Se,Ah=new R,Rh=new R,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ah),Rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rh),e.updateMatrixWorld(),Gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ts||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},aa=new R,oa=new Qn,Yn=new R,xr=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(aa,oa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(aa,oa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new R,Ch=new Ct,Ph=new Ct,$e=class extends xr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Ph),e.subVectors(Ph,Ch)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Jl=class extends Xa{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ji*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},_r=class extends es{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Jl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Kl=class extends Xa{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}},Bi=class extends es{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ns=class extends xr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var is=class extends es{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ms=-90,bs=1,qa=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new $e(Ms,bs,t,e);i.layers=this.layers,this.add(i);let r=new $e(Ms,bs,t,e);r.layers=this.layers,this.add(r);let a=new $e(Ms,bs,t,e);a.layers=this.layers,this.add(a);let o=new $e(Ms,bs,t,e);o.layers=this.layers,this.add(o);let l=new $e(Ms,bs,t,e);l.layers=this.layers,this.add(l);let c=new $e(Ms,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ya=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Sc="\\[\\]\\.:\\/",_f=new RegExp("["+Sc+"]","g"),Ec="[^"+Sc+"]",yf="[^"+Sc.replace("\\.","")+"]",vf=/((?:WC+[\/:])*)/.source.replace("WC",Ec),Mf=/(WCOD+)?/.source.replace("WCOD",yf),bf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ec),Sf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ec),Ef=new RegExp("^"+vf+Mf+bf+Sf+"$"),Tf=["material","materials","bones","map"],Ql=class{constructor(t,e,n){let i=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_f,"")}static parseTrackName(t){let e=Ef.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Tf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Ql;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lx=new Float32Array(1);var yr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var jl=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function Tc(s,t,e,n){let i=wf(n);switch(e){case gc:return s*t;case eo:return s*t/i.components*i.byteLength;case no:return s*t/i.components*i.byteLength;case zi:return s*t*2/i.components*i.byteLength;case io:return s*t*2/i.components*i.byteLength;case xc:return s*t*3/i.components*i.byteLength;case kn:return s*t*4/i.components*i.byteLength;case so:return s*t*4/i.components*i.byteLength;case Sr:case Er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tr:case wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ao:case lo:return Math.max(s,16)*Math.max(t,8)/4;case ro:case oo:return Math.max(s,8)*Math.max(t,8)/2;case co:case ho:case fo:case po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case uo:case Ar:case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _o:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case yo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case vo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case bo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case So:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case wo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Co:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Po:case Io:case Lo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Do:case Uo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Rr:case No:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wf(s){switch(s){case En:case dc:return{byteLength:1,components:1};case Ls:case fc:case ei:return{byteLength:2,components:1};case ja:case to:return{byteLength:2,components:4};case Xn:case Qa:case Hn:return{byteLength:4,components:1};case pc:case mc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Bu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Rf(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nf=`#ifdef USE_AOMAP
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
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bf=`#ifdef USE_BATCHING
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
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gf=`#ifdef USE_IRIDESCENCE
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
#endif`,Vf=`#ifdef USE_BUMPMAP
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tp=`vec3 transformedNormal = objectNormal;
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
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,op=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
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
#endif`,Ap=`uniform sampler2D dfgLUT;
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
}`,Rp=`
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hp=`#if defined( USE_POINTS_UV )
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
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`#ifdef USE_MORPHTARGETS
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
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p0=`float getShadowMask() {
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
}`,m0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#ifdef USE_TRANSMISSION
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P0=`uniform sampler2D t2D;
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
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
}`,F0=`#if DEPTH_PACKING == 3200
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
}`,B0=`#define DISTANCE
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
}`,O0=`#define DISTANCE
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,G0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define LAMBERT
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
}`,Y0=`#define MATCAP
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
}`,Z0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,J0=`#define NORMAL
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
}`,K0=`#define PHONG
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
}`,Q0=`#define PHONG
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
}`,j0=`#define STANDARD
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
}`,tm=`#define STANDARD
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
}`,em=`#define TOON
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
}`,nm=`#define TOON
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
}`,im=`uniform float size;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,am=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,lm=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:Cf,alphahash_pars_fragment:Pf,alphamap_fragment:If,alphamap_pars_fragment:Lf,alphatest_fragment:Df,alphatest_pars_fragment:Uf,aomap_fragment:Nf,aomap_pars_fragment:Ff,batching_pars_vertex:Bf,batching_vertex:Of,begin_vertex:Hf,beginnormal_vertex:kf,bsdfs:zf,iridescence_fragment:Gf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Wf,clipping_planes_pars_fragment:Xf,clipping_planes_pars_vertex:qf,clipping_planes_vertex:Yf,color_fragment:Zf,color_pars_fragment:$f,color_pars_vertex:Jf,color_vertex:Kf,common:Qf,cube_uv_reflection_fragment:jf,defaultnormal_vertex:tp,displacementmap_pars_vertex:ep,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:sp,colorspace_fragment:rp,colorspace_pars_fragment:ap,envmap_fragment:op,envmap_common_pars_fragment:lp,envmap_pars_fragment:cp,envmap_pars_vertex:hp,envmap_physical_pars_fragment:Mp,envmap_vertex:up,fog_vertex:dp,fog_pars_vertex:fp,fog_fragment:pp,fog_pars_fragment:mp,gradientmap_pars_fragment:gp,lightmap_pars_fragment:xp,lights_lambert_fragment:_p,lights_lambert_pars_fragment:yp,lights_pars_begin:vp,lights_toon_fragment:bp,lights_toon_pars_fragment:Sp,lights_phong_fragment:Ep,lights_phong_pars_fragment:Tp,lights_physical_fragment:wp,lights_physical_pars_fragment:Ap,lights_fragment_begin:Rp,lights_fragment_maps:Cp,lights_fragment_end:Pp,lightprobes_pars_fragment:Ip,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Dp,logdepthbuf_pars_vertex:Up,logdepthbuf_vertex:Np,map_fragment:Fp,map_pars_fragment:Bp,map_particle_fragment:Op,map_particle_pars_fragment:Hp,metalnessmap_fragment:kp,metalnessmap_pars_fragment:zp,morphinstance_vertex:Gp,morphcolor_vertex:Vp,morphnormal_vertex:Wp,morphtarget_pars_vertex:Xp,morphtarget_vertex:qp,normal_fragment_begin:Yp,normal_fragment_maps:Zp,normal_pars_fragment:$p,normal_pars_vertex:Jp,normal_vertex:Kp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:jp,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:e0,iridescence_pars_fragment:n0,opaque_fragment:i0,packing:s0,premultiplied_alpha_fragment:r0,project_vertex:a0,dithering_fragment:o0,dithering_pars_fragment:l0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:h0,shadowmap_pars_fragment:u0,shadowmap_pars_vertex:d0,shadowmap_vertex:f0,shadowmask_pars_fragment:p0,skinbase_vertex:m0,skinning_pars_vertex:g0,skinning_vertex:x0,skinnormal_vertex:_0,specularmap_fragment:y0,specularmap_pars_fragment:v0,tonemapping_fragment:M0,tonemapping_pars_fragment:b0,transmission_fragment:S0,transmission_pars_fragment:E0,uv_pars_fragment:T0,uv_pars_vertex:w0,uv_vertex:A0,worldpos_vertex:R0,background_vert:C0,background_frag:P0,backgroundCube_vert:I0,backgroundCube_frag:L0,cube_vert:D0,cube_frag:U0,depth_vert:N0,depth_frag:F0,distance_vert:B0,distance_frag:O0,equirect_vert:H0,equirect_frag:k0,linedashed_vert:z0,linedashed_frag:G0,meshbasic_vert:V0,meshbasic_frag:W0,meshlambert_vert:X0,meshlambert_frag:q0,meshmatcap_vert:Y0,meshmatcap_frag:Z0,meshnormal_vert:$0,meshnormal_frag:J0,meshphong_vert:K0,meshphong_frag:Q0,meshphysical_vert:j0,meshphysical_frag:tm,meshtoon_vert:em,meshtoon_frag:nm,points_vert:im,points_frag:sm,shadow_vert:rm,shadow_frag:am,sprite_vert:om,sprite_frag:lm},bt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},ii={basic:{uniforms:mn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:mn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:mn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:mn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:mn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new zt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:mn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:mn([bt.points,bt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:mn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:mn([bt.common,bt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:mn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:mn([bt.sprite,bt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:mn([bt.common,bt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:mn([bt.lights,bt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};ii.physical={uniforms:mn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Ho={r:0,b:0,g:0},cm=new Se,Ou=new Kt;Ou.set(-1,0,0,0,1,0,0,0,1);function hm(s,t,e,n,i,r){let a=new zt(0),o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let v=b.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(b){let w=!1,v=f(b);v===null?m(a,o):v&&v.isColor&&(m(v,1),w=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(b,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===Mr)?(c===void 0&&(c=new W(new Ce(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:rs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cm.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ou),c.material.toneMapped=ce.getTransfer(v.colorSpace)!==_e,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new W(new ge(2,2),new Xe({name:"BackgroundMaterial",uniforms:rs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ce.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(Ho,bc(s)),e.buffers.color.setClear(Ho.r,Ho.g,Ho.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:y,dispose:p}}function um(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(I,N,Y,K,z){let Z=!1,$=u(I,K,Y,N);r!==$&&(r=$,c(r.object)),Z=f(I,K,Y,z),Z&&g(I,K,Y,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(I,N,Y,K),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,N,Y,K){let z=K.wireframe===!0,Z=n[N.id];Z===void 0&&(Z={},n[N.id]=Z);let $=I.isInstancedMesh===!0?I.id:0,rt=Z[$];rt===void 0&&(rt={},Z[$]=rt);let ht=rt[Y.id];ht===void 0&&(ht={},rt[Y.id]=ht);let Mt=ht[z];return Mt===void 0&&(Mt=d(l()),ht[z]=Mt),Mt}function d(I){let N=[],Y=[],K=[];for(let z=0;z<e;z++)N[z]=0,Y[z]=0,K[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Y,attributeDivisors:K,object:I,attributes:{},index:null}}function f(I,N,Y,K){let z=r.attributes,Z=N.attributes,$=0,rt=Y.getAttributes();for(let ht in rt)if(rt[ht].location>=0){let Tt=z[ht],Lt=Z[ht];if(Lt===void 0&&(ht==="instanceMatrix"&&I.instanceMatrix&&(Lt=I.instanceMatrix),ht==="instanceColor"&&I.instanceColor&&(Lt=I.instanceColor)),Tt===void 0||Tt.attribute!==Lt||Lt&&Tt.data!==Lt.data)return!0;$++}return r.attributesNum!==$||r.index!==K}function g(I,N,Y,K){let z={},Z=N.attributes,$=0,rt=Y.getAttributes();for(let ht in rt)if(rt[ht].location>=0){let Tt=Z[ht];Tt===void 0&&(ht==="instanceMatrix"&&I.instanceMatrix&&(Tt=I.instanceMatrix),ht==="instanceColor"&&I.instanceColor&&(Tt=I.instanceColor));let Lt={};Lt.attribute=Tt,Tt&&Tt.data&&(Lt.data=Tt.data),z[ht]=Lt,$++}r.attributes=z,r.attributesNum=$,r.index=K}function y(){let I=r.newAttributes;for(let N=0,Y=I.length;N<Y;N++)I[N]=0}function m(I){p(I,0)}function p(I,N){let Y=r.newAttributes,K=r.enabledAttributes,z=r.attributeDivisors;Y[I]=1,K[I]===0&&(s.enableVertexAttribArray(I),K[I]=1),z[I]!==N&&(s.vertexAttribDivisor(I,N),z[I]=N)}function b(){let I=r.newAttributes,N=r.enabledAttributes;for(let Y=0,K=N.length;Y<K;Y++)N[Y]!==I[Y]&&(s.disableVertexAttribArray(Y),N[Y]=0)}function w(I,N,Y,K,z,Z,$){$===!0?s.vertexAttribIPointer(I,N,Y,z,Z):s.vertexAttribPointer(I,N,Y,K,z,Z)}function v(I,N,Y,K){y();let z=K.attributes,Z=Y.getAttributes(),$=N.defaultAttributeValues;for(let rt in Z){let ht=Z[rt];if(ht.location>=0){let Mt=z[rt];if(Mt===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(Mt=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(Mt=I.instanceColor)),Mt!==void 0){let Tt=Mt.normalized,Lt=Mt.itemSize,de=t.get(Mt);if(de===void 0)continue;let Pe=de.buffer,fe=de.type,tt=de.bytesPerElement,ft=fe===s.INT||fe===s.UNSIGNED_INT||Mt.gpuType===Qa;if(Mt.isInterleavedBufferAttribute){let ct=Mt.data,qt=ct.stride,Jt=Mt.offset;if(ct.isInstancedInterleavedBuffer){for(let Gt=0;Gt<ht.locationSize;Gt++)p(ht.location+Gt,ct.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Gt=0;Gt<ht.locationSize;Gt++)m(ht.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Gt=0;Gt<ht.locationSize;Gt++)w(ht.location+Gt,Lt/ht.locationSize,fe,Tt,qt*tt,(Jt+Lt/ht.locationSize*Gt)*tt,ft)}else{if(Mt.isInstancedBufferAttribute){for(let ct=0;ct<ht.locationSize;ct++)p(ht.location+ct,Mt.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ct=0;ct<ht.locationSize;ct++)m(ht.location+ct);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let ct=0;ct<ht.locationSize;ct++)w(ht.location+ct,Lt/ht.locationSize,fe,Tt,Lt*tt,Lt/ht.locationSize*ct*tt,ft)}}else if($!==void 0){let Tt=$[rt];if(Tt!==void 0)switch(Tt.length){case 2:s.vertexAttrib2fv(ht.location,Tt);break;case 3:s.vertexAttrib3fv(ht.location,Tt);break;case 4:s.vertexAttrib4fv(ht.location,Tt);break;default:s.vertexAttrib1fv(ht.location,Tt)}}}}b()}function T(){E();for(let I in n){let N=n[I];for(let Y in N){let K=N[Y];for(let z in K){let Z=K[z];for(let $ in Z)h(Z[$].object),delete Z[$];delete K[z]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let Y in N){let K=N[Y];for(let z in K){let Z=K[z];for(let $ in Z)h(Z[$].object),delete Z[$];delete K[z]}}delete n[I.id]}function C(I){for(let N in n){let Y=n[N];for(let K in Y){let z=Y[K];if(z[I.id]===void 0)continue;let Z=z[I.id];for(let $ in Z)h(Z[$].object),delete Z[$];delete z[I.id]}}}function _(I){for(let N in n){let Y=n[N],K=I.isInstancedMesh===!0?I.id:0,z=Y[K];if(z!==void 0){for(let Z in z){let $=z[Z];for(let rt in $)h($[rt].object),delete $[rt];delete z[Z]}delete Y[K],Object.keys(Y).length===0&&delete n[N]}}}function E(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function dm(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==kn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==En&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hn&&!_)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,maxSamples:T,samples:S}}function pm(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Zn,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,w=b*4,v=p.clippingState||null;l.value=v,v=h(g,d,w,f);for(let T=0;T!==w;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==y;++w,v+=4)a.copy(u[w]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Gi=4,mu=[.125,.215,.35,.446,.526,.582],as=20,mm=256,Cr=new ns,gu=new zt,wc=null,Ac=0,Rc=0,Cc=!1,gm=new R,Bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=gm}=r;wc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wc,Ac,Rc),this._renderer.xr.enabled=Cc,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:ei,format:kn,colorSpace:Qs,depthBuffer:!1},i=xu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xm(r)),this._blurMaterial=ym(r,t,e),this._ggxMaterial=_m(r,t,e)}return i}_compileMaterial(t){let e=new W(new ze,t);this._renderer.compile(e,Cr)}_sceneToCubeUV(t,e,n,i,r){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(gu),u.toneMapping=Ln,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new Ce,new se({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(gu),p=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let T=this._cubeSize;Ns(i,v*T,w>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(y,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Oi||t.mapping===ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Cr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Gi?n-g+Gi:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ns(r,m,p,3*y,2*y),i.setRenderTarget(r),i.render(o,Cr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ns(t,m,p,3*y,2*y),i.setRenderTarget(t),i.render(o,Cr)}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Yt("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*as-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):as;m>as&&Vt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);let p=[],b=0;for(let C=0;C<as;++C){let _=C/y,E=Math.exp(-_*_/2);p.push(E),C===0?b+=E:C<m&&(b+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let v=this._sizeLods[i],T=3*v*(i>w-Gi?i-w+Gi:0),S=4*(this._cubeSize-v);Ns(e,T,S,3*v,2*v),l.setRenderTarget(e),l.render(u,Cr)}};function xm(s){let t=[],e=[],n=[],i=s,r=s-Gi+1+mu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Gi?l=mu[a-s+Gi-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,b=new Float32Array(y*g*f),w=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let S=0;S<f;S++){let C=S%3*2/3-1,_=S>2?0:-1,E=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];b.set(E,y*g*S),w.set(d,m*g*S);let P=[S,S,S,S,S,S];v.set(P,p*g*S)}let T=new ze;T.setAttribute("position",new hn(b,y)),T.setAttribute("uv",new hn(w,m)),T.setAttribute("faceIndex",new hn(v,p)),n.push(new W(T,null)),i>Gi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function xu(s,t,e){let n=new qe(s,t,e);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function _m(s,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ym(s,t,e){let n=new Float32Array(as),i=new R(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function _u(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function yu(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Vo(){return`

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
	`}var zo=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ce(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:ti});r.uniforms.tEquirect.value=e;let a=new W(i,r),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=He),new qa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function vm(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===$a||f===Ja)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new zo(g.height);return y.fromEquirectangularTexture(s,d),t.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===$a||f===Ja,y=f===Oi||f===ss;if(g||y){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Bs(s)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let b=d.image;return g&&b&&b.height>0||y&&b&&l(b)?(n===null&&(n=new Bs(s)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===$a?d.mapping=Oi:f===Ja&&(d.mapping=ss),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Mm(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ji("WebGLRenderer: "+n+" extension not supported."),i}}}function bm(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let w=0,v=b.length;w<v;w+=3){let T=b[w+0],S=b[w+1],C=b[w+2];d.push(T,S,S,C,C,T)}}else{let b=g.array;y=g.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let T=w+0,S=w+1,C=w+2;d.push(T,S,S,C,C,T)}}let m=new(g.count>=65535?rr:sr)(d,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Sm(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];e.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Em(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Tm(s,t,e){let n=new WeakMap,i=new Ue;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*T*4*u),C=new er(S,v,T,u);C.type=Hn,C.needsUpdate=!0;let _=w*4;for(let P=0;P<u;P++){let I=m[P],N=p[P],Y=b[P],K=v*T*4*P;for(let z=0;z<I.count;z++){let Z=z*_;f===!0&&(i.fromBufferAttribute(I,z),S[K+Z+0]=i.x,S[K+Z+1]=i.y,S[K+Z+2]=i.z,S[K+Z+3]=0),g===!0&&(i.fromBufferAttribute(N,z),S[K+Z+4]=i.x,S[K+Z+5]=i.y,S[K+Z+6]=i.z,S[K+Z+7]=0),y===!0&&(i.fromBufferAttribute(Y,z),S[K+Z+8]=i.x,S[K+Z+9]=i.y,S[K+Z+10]=i.z,S[K+Z+11]=Y.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Ct(v,T)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function wm(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Am={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[ac]:"CINEON_TONE_MAPPING",[oc]:"ACES_FILMIC_TONE_MAPPING",[cc]:"AGX_TONE_MAPPING",[hc]:"NEUTRAL_TONE_MAPPING",[lc]:"CUSTOM_TONE_MAPPING"};function Rm(s,t,e,n,i,r){let a=new qe(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new Mi(t,e):void 0}),o=new qe(t,e,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new ze;l.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new me([0,2,0,0,2,0],2));let c=new La({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new W(l,c),u=new ns(-1,1,1,-1,0,1),d=null,f=null,g=!1,y,m=null,p=[],b=!1;this.setSize=function(w,v){a.setSize(w,v),o.setSize(w,v);for(let T=0;T<p.length;T++){let S=p[T];S.setSize&&S.setSize(w,v)}},this.setEffects=function(w){p=w,b=p.length>0&&p[0].isRenderPass===!0;let v=a.width,T=a.height;for(let S=0;S<p.length;S++){let C=p[S];C.setSize&&C.setSize(v,T)}},this.begin=function(w,v){if(g||w.toneMapping===Ln&&p.length===0)return!1;if(m=v,v!==null){let T=v.width,S=v.height;(a.width!==T||a.height!==S)&&this.setSize(T,S)}return b===!1&&w.setRenderTarget(a),y=w.toneMapping,w.toneMapping=Ln,!0},this.hasRenderPass=function(){return b},this.end=function(w,v){w.toneMapping=y,g=!0;let T=a,S=o;for(let C=0;C<p.length;C++){let _=p[C];if(_.enabled!==!1&&(_.render(w,S,T,v),_.needsSwap!==!1)){let E=T;T=S,S=E}}if(d!==w.outputColorSpace||f!==w.toneMapping){d=w.outputColorSpace,f=w.toneMapping,c.defines={},ce.getTransfer(d)===_e&&(c.defines.SRGB_TRANSFER="");let C=Am[f];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(m),w.render(h,u),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Hu=new vn,Lc=new Mi(1,1),ku=new er,zu=new ba,Gu=new hr,vu=[],Mu=[],bu=new Float32Array(16),Su=new Float32Array(9),Eu=new Float32Array(4);function Os(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=vu[i];if(r===void 0&&(r=new Float32Array(i),vu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function tn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function en(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Wo(s,t){let e=Mu[t];e===void 0&&(e=new Int32Array(t),Mu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Cm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Pm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;s.uniform2fv(this.addr,t),en(e,t)}}function Im(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;s.uniform3fv(this.addr,t),en(e,t)}}function Lm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;s.uniform4fv(this.addr,t),en(e,t)}}function Dm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Eu.set(n),s.uniformMatrix2fv(this.addr,!1,Eu),en(e,n)}}function Um(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Su.set(n),s.uniformMatrix3fv(this.addr,!1,Su),en(e,n)}}function Nm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;bu.set(n),s.uniformMatrix4fv(this.addr,!1,bu),en(e,n)}}function Fm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Bm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;s.uniform2iv(this.addr,t),en(e,t)}}function Om(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;s.uniform3iv(this.addr,t),en(e,t)}}function Hm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;s.uniform4iv(this.addr,t),en(e,t)}}function km(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function zm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;s.uniform2uiv(this.addr,t),en(e,t)}}function Gm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;s.uniform3uiv(this.addr,t),en(e,t)}}function Vm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;s.uniform4uiv(this.addr,t),en(e,t)}}function Wm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Lc.compareFunction=e.isReversedDepthBuffer()?Oo:Bo,r=Lc):r=Hu,e.setTexture2D(t||r,i)}function Xm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||zu,i)}function qm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gu,i)}function Ym(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ku,i)}function Zm(s){switch(s){case 5126:return Cm;case 35664:return Pm;case 35665:return Im;case 35666:return Lm;case 35674:return Dm;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Fm;case 35667:case 35671:return Bm;case 35668:case 35672:return Om;case 35669:case 35673:return Hm;case 5125:return km;case 36294:return zm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}function $m(s,t){s.uniform1fv(this.addr,t)}function Jm(s,t){let e=Os(t,this.size,2);s.uniform2fv(this.addr,e)}function Km(s,t){let e=Os(t,this.size,3);s.uniform3fv(this.addr,e)}function Qm(s,t){let e=Os(t,this.size,4);s.uniform4fv(this.addr,e)}function jm(s,t){let e=Os(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function tg(s,t){let e=Os(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function eg(s,t){let e=Os(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ng(s,t){s.uniform1iv(this.addr,t)}function ig(s,t){s.uniform2iv(this.addr,t)}function sg(s,t){s.uniform3iv(this.addr,t)}function rg(s,t){s.uniform4iv(this.addr,t)}function ag(s,t){s.uniform1uiv(this.addr,t)}function og(s,t){s.uniform2uiv(this.addr,t)}function lg(s,t){s.uniform3uiv(this.addr,t)}function cg(s,t){s.uniform4uiv(this.addr,t)}function hg(s,t,e){let n=this.cache,i=t.length,r=Wo(e,i);tn(n,r)||(s.uniform1iv(this.addr,r),en(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Lc:a=Hu;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function ug(s,t,e){let n=this.cache,i=t.length,r=Wo(e,i);tn(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||zu,r[a])}function dg(s,t,e){let n=this.cache,i=t.length,r=Wo(e,i);tn(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Gu,r[a])}function fg(s,t,e){let n=this.cache,i=t.length,r=Wo(e,i);tn(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ku,r[a])}function pg(s){switch(s){case 5126:return $m;case 35664:return Jm;case 35665:return Km;case 35666:return Qm;case 35674:return jm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}var Dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zm(e.type)}},Uc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pg(e.type)}},Nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Pc=/(\w+)(\])?(\[|\.)?/g;function Tu(s,t){s.seq.push(t),s.map[t.id]=t}function mg(s,t,e){let n=s.name,i=n.length;for(Pc.lastIndex=0;;){let r=Pc.exec(n),a=Pc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Tu(e,c===void 0?new Dc(o,s,t):new Uc(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Nc(o),Tu(e,u)),e=u}}}var Fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);mg(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function wu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var gg=37297,xg=0;function _g(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Au=new Kt;function yg(s){ce._getMatrix(Au,ce.workingColorSpace,s);let t=`mat3( ${Au.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(s)){case js:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ru(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+_g(s.getShaderSource(t),o)}else return r}function vg(s,t){let e=yg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Mg={[sc]:"Linear",[rc]:"Reinhard",[ac]:"Cineon",[oc]:"ACESFilmic",[cc]:"AgX",[hc]:"Neutral",[lc]:"Custom"};function bg(s,t){let e=Mg[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ko=new R;function Sg(){ce.getLuminanceCoefficients(ko);let s=ko.x.toFixed(4),t=ko.y.toFixed(4),e=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Tg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ir(s){return s!==""}function Cu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(s){return s.replace(Ag,Cg)}var Rg=new Map;function Cg(s,t){let e=ie[t];if(e===void 0){let n=Rg.get(t);if(n!==void 0)e=ie[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fc(e)}var Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(s){return s.replace(Pg,Ig)}function Ig(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Lg={[vr]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function Dg(s){return Lg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ug={[Oi]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE_UV"};function Ng(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Ug[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fg={[ss]:"ENVMAP_MODE_REFRACTION"};function Bg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Fg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Og={[ic]:"ENVMAP_BLENDING_MULTIPLY",[Kh]:"ENVMAP_BLENDING_MIX",[Qh]:"ENVMAP_BLENDING_ADD"};function Hg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Og[s.combine]||"ENVMAP_BLENDING_NONE"}function kg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zg(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Dg(e),c=Ng(e),h=Bg(e),u=Hg(e),d=kg(e),f=Eg(e),g=Tg(r),y=i.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?ie.tonemapping_pars_fragment:"",e.toneMapping!==Ln?bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),Sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Fc(a),a=Cu(a,e),a=Pu(a,e),o=Fc(o),o=Cu(o,e),o=Pu(o,e),a=Iu(a),o=Iu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=b+m+a,v=b+p+o,T=wu(i,i.VERTEX_SHADER,w),S=wu(i,i.FRAGMENT_SHADER,v);i.attachShader(y,T),i.attachShader(y,S),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function C(I){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(y)||"",Y=i.getShaderInfoLog(T)||"",K=i.getShaderInfoLog(S)||"",z=N.trim(),Z=Y.trim(),$=K.trim(),rt=!0,ht=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(rt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,T,S);else{let Mt=Ru(i,T,"vertex"),Tt=Ru(i,S,"fragment");Yt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+Mt+`
`+Tt)}else z!==""?Vt("WebGLProgram: Program Info Log:",z):(Z===""||$==="")&&(ht=!1);ht&&(I.diagnostics={runnable:rt,programLog:z,vertexShader:{log:Z,prefix:m},fragmentShader:{log:$,prefix:p}})}i.deleteShader(T),i.deleteShader(S),_=new Fs(i,y),E=wg(i,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(y,gg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=S,this}var Gg=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Oc(t),e.set(t,n)),n}},Oc=class{constructor(t){this.id=Gg++,this.code=t,this.usedTimes=0}};function Vg(s){return s===zi||s===Ar||s===Rr}function Wg(s,t,e,n,i,r){let a=new nr,o=new Bc,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,E,P,I,N,Y){let K=I.fog,z=N.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,rt=t.get(_.envMap||Z,$),ht=rt&&rt.mapping===Mr?rt.image.height:null,Mt=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Vt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let Tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Lt=Tt!==void 0?Tt.length:0,de=0;z.morphAttributes.position!==void 0&&(de=1),z.morphAttributes.normal!==void 0&&(de=2),z.morphAttributes.color!==void 0&&(de=3);let Pe,fe,tt,ft;if(Mt){let Dt=ii[Mt];Pe=Dt.vertexShader,fe=Dt.fragmentShader}else{Pe=_.vertexShader,fe=_.fragmentShader;let Dt=o.getVertexShaderStage(_),Ie=o.getFragmentShaderStage(_);o.update(_,Dt,Ie),tt=Dt.id,ft=Ie.id}let ct=s.getRenderTarget(),qt=s.state.buffers.depth.getReversed(),Jt=N.isInstancedMesh===!0,Gt=N.isBatchedMesh===!0,we=!!_.map,Xt=!!_.matcap,Me=!!rt,pe=!!_.aoMap,te=!!_.lightMap,Be=!!_.bumpMap&&_.wireframe===!1,Ve=!!_.normalMap,We=!!_.displacementMap,Ke=!!_.emissiveMap,Ae=!!_.metalnessMap,Oe=!!_.roughnessMap,U=_.anisotropy>0,sn=_.clearcoat>0,ee=_.dispersion>0,A=_.iridescence>0,x=_.sheen>0,B=_.transmission>0,V=U&&!!_.anisotropyMap,J=sn&&!!_.clearcoatMap,ut=sn&&!!_.clearcoatNormalMap,mt=sn&&!!_.clearcoatRoughnessMap,Q=A&&!!_.iridescenceMap,et=A&&!!_.iridescenceThicknessMap,gt=x&&!!_.sheenColorMap,Bt=x&&!!_.sheenRoughnessMap,yt=!!_.specularMap,_t=!!_.specularColorMap,Ht=!!_.specularIntensityMap,Wt=B&&!!_.transmissionMap,Zt=B&&!!_.thicknessMap,D=!!_.gradientMap,dt=!!_.alphaMap,nt=_.alphaTest>0,pt=!!_.alphaHash,Et=!!_.extensions,at=Ln;_.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(at=s.toneMapping);let It={shaderID:Mt,shaderType:_.type,shaderName:_.name,vertexShader:Pe,fragmentShader:fe,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:ft,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Gt,batchingColor:Gt&&N._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&N.instanceColor!==null,instancingMorph:Jt&&N.morphTexture!==null,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:we,matcap:Xt,envMap:Me,envMapMode:Me&&rt.mapping,envMapCubeUVHeight:ht,aoMap:pe,lightMap:te,bumpMap:Be,normalMap:Ve,displacementMap:We,emissiveMap:Ke,normalMapObjectSpace:Ve&&_.normalMapType===eu,normalMapTangentSpace:Ve&&_.normalMapType===Fo,packedNormalMap:Ve&&_.normalMapType===Fo&&Vg(_.normalMap.format),metalnessMap:Ae,roughnessMap:Oe,anisotropy:U,anisotropyMap:V,clearcoat:sn,clearcoatMap:J,clearcoatNormalMap:ut,clearcoatRoughnessMap:mt,dispersion:ee,iridescence:A,iridescenceMap:Q,iridescenceThicknessMap:et,sheen:x,sheenColorMap:gt,sheenRoughnessMap:Bt,specularMap:yt,specularColorMap:_t,specularIntensityMap:Ht,transmission:B,transmissionMap:Wt,thicknessMap:Zt,gradientMap:D,opaque:_.transparent===!1&&_.blending===Ki&&_.alphaToCoverage===!1,alphaMap:dt,alphaTest:nt,alphaHash:pt,combine:_.combine,mapUv:we&&g(_.map.channel),aoMapUv:pe&&g(_.aoMap.channel),lightMapUv:te&&g(_.lightMap.channel),bumpMapUv:Be&&g(_.bumpMap.channel),normalMapUv:Ve&&g(_.normalMap.channel),displacementMapUv:We&&g(_.displacementMap.channel),emissiveMapUv:Ke&&g(_.emissiveMap.channel),metalnessMapUv:Ae&&g(_.metalnessMap.channel),roughnessMapUv:Oe&&g(_.roughnessMap.channel),anisotropyMapUv:V&&g(_.anisotropyMap.channel),clearcoatMapUv:J&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&g(_.sheenRoughnessMap.channel),specularMapUv:yt&&g(_.specularMap.channel),specularColorMapUv:_t&&g(_.specularColorMap.channel),specularIntensityMapUv:Ht&&g(_.specularIntensityMap.channel),transmissionMapUv:Wt&&g(_.transmissionMap.channel),thicknessMapUv:Zt&&g(_.thicknessMap.channel),alphaMapUv:dt&&g(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ve||U),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(we||dt),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&Ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:qt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:de,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:we&&_.map.isVideoTexture===!0&&ce.getTransfer(_.map.colorSpace)===_e,decodeVideoTextureEmissive:Ke&&_.emissiveMap.isVideoTexture===!0&&ce.getTransfer(_.emissiveMap.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Te,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Et&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&_.extensions.multiDraw===!0||Gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)E.push(P),E.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(E,_),b(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let E=f[_.type],P;if(E){let I=ii[E];P=fu.clone(I.uniforms)}else P=_.uniforms;return P}function v(_,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new zg(s,E,_,i),c.push(P),h.set(E,P)),P}function T(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:T,releaseShaderCache:S,programs:c,dispose:C}}function Xg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function qg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Du(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Uu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,m,p){let b=s[t];return b===void 0?(b={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},s[t]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=g,b.materialVariant=a(d),b.groupOrder=y,b.renderOrder=d.renderOrder,b.z=m,b.group=p),t++,b}function l(d,f,g,y,m,p){let b=o(d,f,g,y,m,p);g.transmission>0?n.push(b):g.transparent===!0?i.push(b):e.push(b)}function c(d,f,g,y,m,p){let b=o(d,f,g,y,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):e.unshift(b)}function h(d,f,g){e.length>1&&e.sort(d||qg),n.length>1&&n.sort(f||Du),i.length>1&&i.sort(f||Du),g&&(e.reverse(),n.reverse(),i.reverse())}function u(){for(let d=t,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Yg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Uu,s.set(n,[a])):i>=r.length?(a=new Uu,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Zg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new zt};break;case"SpotLight":e={position:new R,direction:new R,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function $g(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Jg=0;function Kg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Qg(s){let t=new Zg,e=$g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,r=new Se,a=new Se;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,b=0,w=0,v=0,T=0,S=0,C=0;c.sort(Kg);for(let E=0,P=c.length;E<P;E++){let I=c[E],N=I.color,Y=I.intensity,K=I.distance,z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===zi?z=I.shadow.map.texture:z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=N.r*Y,u+=N.g*Y,d+=N.b*Y;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],Y);C++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,rt=e.get(I);rt.shadowIntensity=$.intensity,rt.shadowBias=$.bias,rt.shadowNormalBias=$.normalBias,rt.shadowRadius=$.radius,rt.shadowMapSize=$.mapSize,n.directionalShadow[f]=rt,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=I.shadow.matrix,b++}n.directional[f]=Z,f++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(N).multiplyScalar(Y),Z.distance=K,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[y]=Z;let $=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,$.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[y]=$.matrix,I.castShadow){let rt=e.get(I);rt.shadowIntensity=$.intensity,rt.shadowBias=$.bias,rt.shadowNormalBias=$.normalBias,rt.shadowRadius=$.radius,rt.shadowMapSize=$.mapSize,n.spotShadow[y]=rt,n.spotShadowMap[y]=z,v++}y++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(N).multiplyScalar(Y),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Z,m++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let $=I.shadow,rt=e.get(I);rt.shadowIntensity=$.intensity,rt.shadowBias=$.bias,rt.shadowNormalBias=$.normalBias,rt.shadowRadius=$.radius,rt.shadowMapSize=$.mapSize,rt.shadowCameraNear=$.camera.near,rt.shadowCameraFar=$.camera.far,n.pointShadow[g]=rt,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=Z,g++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(Y),Z.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[p]=Z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==b||_.numPointShadows!==w||_.numSpotShadows!==v||_.numSpotMaps!==T||_.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,_.directionalLength=f,_.pointLength=g,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=b,_.numPointShadows=w,_.numSpotShadows=v,_.numSpotMaps=T,_.numLightProbes=C,n.version=Jg++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let w=c[p];if(w.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(w.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function Nu(s){let t=new Qg(s),e=[],n=[],i=[];function r(d){u.camera=d,e.length=0,n.length=0,i.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function jg(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Nu(s),t.set(i,[o])):r>=a.length?(o=new Nu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
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
}`,nx=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],ix=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Fu=new Se,Pr=new R,Ic=new R;function sx(s,t,e){let n=new Cs,i=new Ct,r=new Ct,a=new Ue,o=new Da,l=new Ua,c={},h=e.maxTextureSize,u={[gi]:un,[un]:gi,[Te]:Te},d=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:tx,fragmentShader:ex}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new W(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vr;let p=this.type;this.render=function(S,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Za&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vr);let E=s.getRenderTarget(),P=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(ti),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let Y=p!==this.type;Y&&C.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(z=>z.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,z=S.length;K<z;K++){let Z=S[K],$=Z.shadow;if($===void 0){Vt("WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let rt=$.getFrameExtents();i.multiply(rt),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,$.mapSize.y=r.y));let ht=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=ht,$.map===null||Y===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Is){if(Z.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new qe(i.x,i.y,{format:zi,type:ei,minFilter:He,magFilter:He,generateMipmaps:!1}),$.map.texture.name=Z.name+".shadowMap",$.map.depthTexture=new Mi(i.x,i.y,Hn),$.map.depthTexture.name=Z.name+".shadowMapDepth",$.map.depthTexture.format=Jn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=on,$.map.depthTexture.magFilter=on}else Z.isPointLight?($.map=new zo(i.x),$.map.depthTexture=new Ea(i.x,Xn)):($.map=new qe(i.x,i.y),$.map.depthTexture=new Mi(i.x,i.y,Xn)),$.map.depthTexture.name=Z.name+".shadowMap",$.map.depthTexture.format=Jn,this.type===vr?($.map.depthTexture.compareFunction=ht?Oo:Bo,$.map.depthTexture.minFilter=He,$.map.depthTexture.magFilter=He):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=on,$.map.depthTexture.magFilter=on);$.camera.updateProjectionMatrix()}let Mt=$.map.isWebGLCubeRenderTarget?6:1;for(let Tt=0;Tt<Mt;Tt++){if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,Tt),s.clear();else{Tt===0&&(s.setRenderTarget($.map),s.clear());let Lt=$.getViewport(Tt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),N.viewport(a)}if(Z.isPointLight){let Lt=$.camera,de=$.matrix,Pe=Z.distance||Lt.far;Pe!==Lt.far&&(Lt.far=Pe,Lt.updateProjectionMatrix()),Pr.setFromMatrixPosition(Z.matrixWorld),Lt.position.copy(Pr),Ic.copy(Lt.position),Ic.add(nx[Tt]),Lt.up.copy(ix[Tt]),Lt.lookAt(Ic),Lt.updateMatrixWorld(),de.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Fu.multiplyMatrices(Lt.projectionMatrix,Lt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Fu,Lt.coordinateSystem,Lt.reversedDepth)}else $.updateMatrices(Z);n=$.getFrustum(),v(C,_,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===Is&&b($,_),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,P,I)};function b(S,C){let _=t.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new qe(i.x,i.y,{format:zi,type:ei})),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(C,null,_,d,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(C,null,_,f,y,null)}function w(S,C,_,E){let P=null,I=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=P.uuid,Y=C.uuid,K=c[N];K===void 0&&(K={},c[N]=K);let z=K[Y];z===void 0&&(z=P.clone(),K[Y]=z,C.addEventListener("dispose",T)),P=z}if(P.visible=C.visible,P.wireframe=C.wireframe,E===Is?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=s.properties.get(P);N.light=_}return P}function v(S,C,_,E,P){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Is)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let Y=t.update(S),K=S.material;if(Array.isArray(K)){let z=Y.groups;for(let Z=0,$=z.length;Z<$;Z++){let rt=z[Z],ht=K[rt.materialIndex];if(ht&&ht.visible){let Mt=w(S,ht,E,P);S.onBeforeShadow(s,S,C,_,Y,Mt,rt),s.renderBufferDirect(_,null,Y,Mt,S,rt),S.onAfterShadow(s,S,C,_,Y,Mt,rt)}}}else if(K.visible){let z=w(S,K,E,P);S.onBeforeShadow(s,S,C,_,Y,z,null),s.renderBufferDirect(_,null,Y,z,S,null),S.onAfterShadow(s,S,C,_,Y,z,null)}}let N=S.children;for(let Y=0,K=N.length;Y<K;Y++)v(N[Y],C,_,E,P)}function T(S){S.target.removeEventListener("dispose",T);for(let _ in c){let E=c[_],P=S.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function rx(s,t){function e(){let D=!1,dt=new Ue,nt=null,pt=new Ue(0,0,0,0);return{setMask:function(Et){nt!==Et&&!D&&(s.colorMask(Et,Et,Et,Et),nt=Et)},setLocked:function(Et){D=Et},setClear:function(Et,at,It,Dt,Ie){Ie===!0&&(Et*=Dt,at*=Dt,It*=Dt),dt.set(Et,at,It,Dt),pt.equals(dt)===!1&&(s.clearColor(Et,at,It,Dt),pt.copy(dt))},reset:function(){D=!1,nt=null,pt.set(-1,0,0,0)}}}function n(){let D=!1,dt=!1,nt=null,pt=null,Et=null;return{setReversed:function(at){if(dt!==at){let It=t.get("EXT_clip_control");at?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),dt=at;let Dt=Et;Et=null,this.setClear(Dt)}},getReversed:function(){return dt},setTest:function(at){at?ct(s.DEPTH_TEST):qt(s.DEPTH_TEST)},setMask:function(at){nt!==at&&!D&&(s.depthMask(at),nt=at)},setFunc:function(at){if(dt&&(at=uu[at]),pt!==at){switch(at){case ua:s.depthFunc(s.NEVER);break;case da:s.depthFunc(s.ALWAYS);break;case fa:s.depthFunc(s.LESS);break;case Qi:s.depthFunc(s.LEQUAL);break;case pa:s.depthFunc(s.EQUAL);break;case ma:s.depthFunc(s.GEQUAL);break;case ga:s.depthFunc(s.GREATER);break;case xa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=at}},setLocked:function(at){D=at},setClear:function(at){Et!==at&&(Et=at,dt&&(at=1-at),s.clearDepth(at))},reset:function(){D=!1,nt=null,pt=null,Et=null,dt=!1}}}function i(){let D=!1,dt=null,nt=null,pt=null,Et=null,at=null,It=null,Dt=null,Ie=null;return{setTest:function(be){D||(be?ct(s.STENCIL_TEST):qt(s.STENCIL_TEST))},setMask:function(be){dt!==be&&!D&&(s.stencilMask(be),dt=be)},setFunc:function(be,Dn,Un){(nt!==be||pt!==Dn||Et!==Un)&&(s.stencilFunc(be,Dn,Un),nt=be,pt=Dn,Et=Un)},setOp:function(be,Dn,Un){(at!==be||It!==Dn||Dt!==Un)&&(s.stencilOp(be,Dn,Un),at=be,It=Dn,Dt=Un)},setLocked:function(be){D=be},setClear:function(be){Ie!==be&&(s.clearStencil(be),Ie=be)},reset:function(){D=!1,dt=null,nt=null,pt=null,Et=null,at=null,It=null,Dt=null,Ie=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,b=null,w=null,v=null,T=null,S=null,C=null,_=new zt(0,0,0),E=0,P=!1,I=null,N=null,Y=null,K=null,z=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,rt=0,ht=s.getParameter(s.VERSION);ht.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(ht)[1]),$=rt>=1):ht.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),$=rt>=2);let Mt=null,Tt={},Lt=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),Pe=new Ue().fromArray(Lt),fe=new Ue().fromArray(de);function tt(D,dt,nt,pt){let Et=new Uint8Array(4),at=s.createTexture();s.bindTexture(D,at),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<nt;It++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(dt+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return at}let ft={};ft[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(s.DEPTH_TEST),a.setFunc(Qi),Be(!1),Ve(tc),ct(s.CULL_FACE),pe(ti);function ct(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function qt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Jt(D,dt){return d[D]!==dt?(s.bindFramebuffer(D,dt),d[D]=dt,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=dt),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Gt(D,dt){let nt=g,pt=!1;if(D){nt=f.get(dt),nt===void 0&&(nt=[],f.set(dt,nt));let Et=D.textures;if(nt.length!==Et.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let at=0,It=Et.length;at<It;at++)nt[at]=s.COLOR_ATTACHMENT0+at;nt.length=Et.length,pt=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,pt=!0);pt&&s.drawBuffers(nt)}function we(D){return y!==D?(s.useProgram(D),y=D,!0):!1}let Xt={[Di]:s.FUNC_ADD,[Uh]:s.FUNC_SUBTRACT,[Nh]:s.FUNC_REVERSE_SUBTRACT};Xt[Fh]=s.MIN,Xt[Bh]=s.MAX;let Me={[Oh]:s.ZERO,[Hh]:s.ONE,[kh]:s.SRC_COLOR,[ca]:s.SRC_ALPHA,[qh]:s.SRC_ALPHA_SATURATE,[Wh]:s.DST_COLOR,[Gh]:s.DST_ALPHA,[zh]:s.ONE_MINUS_SRC_COLOR,[ha]:s.ONE_MINUS_SRC_ALPHA,[Xh]:s.ONE_MINUS_DST_COLOR,[Vh]:s.ONE_MINUS_DST_ALPHA,[Yh]:s.CONSTANT_COLOR,[Zh]:s.ONE_MINUS_CONSTANT_COLOR,[$h]:s.CONSTANT_ALPHA,[Jh]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(D,dt,nt,pt,Et,at,It,Dt,Ie,be){if(D===ti){m===!0&&(qt(s.BLEND),m=!1);return}if(m===!1&&(ct(s.BLEND),m=!0),D!==Dh){if(D!==p||be!==P){if((b!==Di||T!==Di)&&(s.blendEquation(s.FUNC_ADD),b=Di,T=Di),be)switch(D){case Ki:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case In:s.blendFunc(s.ONE,s.ONE);break;case ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Yt("WebGLState: Invalid blending: ",D);break}else switch(D){case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case In:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ec:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",D);break}w=null,v=null,S=null,C=null,_.set(0,0,0),E=0,p=D,P=be}return}Et=Et||dt,at=at||nt,It=It||pt,(dt!==b||Et!==T)&&(s.blendEquationSeparate(Xt[dt],Xt[Et]),b=dt,T=Et),(nt!==w||pt!==v||at!==S||It!==C)&&(s.blendFuncSeparate(Me[nt],Me[pt],Me[at],Me[It]),w=nt,v=pt,S=at,C=It),(Dt.equals(_)===!1||Ie!==E)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Ie),_.copy(Dt),E=Ie),p=D,P=!1}function te(D,dt){D.side===Te?qt(s.CULL_FACE):ct(s.CULL_FACE);let nt=D.side===un;dt&&(nt=!nt),Be(nt),D.blending===Ki&&D.transparent===!1?pe(ti):pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let pt=D.stencilWrite;o.setTest(pt),pt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ke(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):qt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){I!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),I=D)}function Ve(D){D!==Ih?(ct(s.CULL_FACE),D!==N&&(D===tc?s.cullFace(s.BACK):D===Lh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):qt(s.CULL_FACE),N=D}function We(D){D!==Y&&($&&s.lineWidth(D),Y=D)}function Ke(D,dt,nt){D?(ct(s.POLYGON_OFFSET_FILL),(K!==dt||z!==nt)&&(K=dt,z=nt,a.getReversed()&&(dt=-dt),s.polygonOffset(dt,nt))):qt(s.POLYGON_OFFSET_FILL)}function Ae(D){D?ct(s.SCISSOR_TEST):qt(s.SCISSOR_TEST)}function Oe(D){D===void 0&&(D=s.TEXTURE0+Z-1),Mt!==D&&(s.activeTexture(D),Mt=D)}function U(D,dt,nt){nt===void 0&&(Mt===null?nt=s.TEXTURE0+Z-1:nt=Mt);let pt=Tt[nt];pt===void 0&&(pt={type:void 0,texture:void 0},Tt[nt]=pt),(pt.type!==D||pt.texture!==dt)&&(Mt!==nt&&(s.activeTexture(nt),Mt=nt),s.bindTexture(D,dt||ft[D]),pt.type=D,pt.texture=dt)}function sn(){let D=Tt[Mt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ee(){try{s.compressedTexImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function x(){try{s.texSubImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function B(){try{s.texSubImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function J(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function ut(){try{s.texStorage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function mt(){try{s.texStorage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function Q(){try{s.texImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function et(){try{s.texImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function gt(D){return u[D]!==void 0?u[D]:s.getParameter(D)}function Bt(D,dt){u[D]!==dt&&(s.pixelStorei(D,dt),u[D]=dt)}function yt(D){Pe.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Pe.copy(D))}function _t(D){fe.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),fe.copy(D))}function Ht(D,dt){let nt=c.get(dt);nt===void 0&&(nt=new WeakMap,c.set(dt,nt));let pt=nt.get(D);pt===void 0&&(pt=s.getUniformBlockIndex(dt,D.name),nt.set(D,pt))}function Wt(D,dt){let pt=c.get(dt).get(D);l.get(dt)!==pt&&(s.uniformBlockBinding(dt,pt,D.__bindingPointIndex),l.set(dt,pt))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Mt=null,Tt={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,b=null,w=null,v=null,T=null,S=null,C=null,_=new zt(0,0,0),E=0,P=!1,I=null,N=null,Y=null,K=null,z=null,Pe.set(0,0,s.canvas.width,s.canvas.height),fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:qt,bindFramebuffer:Jt,drawBuffers:Gt,useProgram:we,setBlending:pe,setMaterial:te,setFlipSided:Be,setCullFace:Ve,setLineWidth:We,setPolygonOffset:Ke,setScissorTest:Ae,activeTexture:Oe,bindTexture:U,unbindTexture:sn,compressedTexImage2D:ee,compressedTexImage3D:A,texImage2D:Q,texImage3D:et,pixelStorei:Bt,getParameter:gt,updateUBOMapping:Ht,uniformBlockBinding:Wt,texStorage2D:ut,texStorage3D:mt,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:J,scissor:yt,viewport:_t,reset:Zt}}function ax(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,x){return g?new OffscreenCanvas(A,x):tr("canvas")}function m(A,x,B){let V=1,J=ee(A);if((J.width>B||J.height>B)&&(V=B/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ut=Math.floor(V*J.width),mt=Math.floor(V*J.height);d===void 0&&(d=y(ut,mt));let Q=x?y(ut,mt):d;return Q.width=ut,Q.height=mt,Q.getContext("2d").drawImage(A,0,0,ut,mt),Vt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ut+"x"+mt+")."),Q}else return"data"in A&&Vt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function p(A){return A.generateMipmaps}function b(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,x,B,V,J,ut=!1){if(A!==null){if(s[A]!==void 0)return s[A];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;V&&(mt=t.get("EXT_texture_norm16"),mt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===s.RED&&(B===s.FLOAT&&(Q=s.R32F),B===s.HALF_FLOAT&&(Q=s.R16F),B===s.UNSIGNED_BYTE&&(Q=s.R8),B===s.UNSIGNED_SHORT&&mt&&(Q=mt.R16_EXT),B===s.SHORT&&mt&&(Q=mt.R16_SNORM_EXT)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Q=s.R8UI),B===s.UNSIGNED_SHORT&&(Q=s.R16UI),B===s.UNSIGNED_INT&&(Q=s.R32UI),B===s.BYTE&&(Q=s.R8I),B===s.SHORT&&(Q=s.R16I),B===s.INT&&(Q=s.R32I)),x===s.RG&&(B===s.FLOAT&&(Q=s.RG32F),B===s.HALF_FLOAT&&(Q=s.RG16F),B===s.UNSIGNED_BYTE&&(Q=s.RG8),B===s.UNSIGNED_SHORT&&mt&&(Q=mt.RG16_EXT),B===s.SHORT&&mt&&(Q=mt.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Q=s.RG8UI),B===s.UNSIGNED_SHORT&&(Q=s.RG16UI),B===s.UNSIGNED_INT&&(Q=s.RG32UI),B===s.BYTE&&(Q=s.RG8I),B===s.SHORT&&(Q=s.RG16I),B===s.INT&&(Q=s.RG32I)),x===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),B===s.UNSIGNED_INT&&(Q=s.RGB32UI),B===s.BYTE&&(Q=s.RGB8I),B===s.SHORT&&(Q=s.RGB16I),B===s.INT&&(Q=s.RGB32I)),x===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),B===s.UNSIGNED_INT&&(Q=s.RGBA32UI),B===s.BYTE&&(Q=s.RGBA8I),B===s.SHORT&&(Q=s.RGBA16I),B===s.INT&&(Q=s.RGBA32I)),x===s.RGB&&(B===s.UNSIGNED_SHORT&&mt&&(Q=mt.RGB16_EXT),B===s.SHORT&&mt&&(Q=mt.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),x===s.RGBA){let et=ut?js:ce.getTransfer(J);B===s.FLOAT&&(Q=s.RGBA32F),B===s.HALF_FLOAT&&(Q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Q=et===_e?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&mt&&(Q=mt.RGBA16_EXT),B===s.SHORT&&mt&&(Q=mt.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function T(A,x){let B;return A?x===null||x===Xn||x===Ds?B=s.DEPTH24_STENCIL8:x===Hn?B=s.DEPTH32F_STENCIL8:x===Ls&&(B=s.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xn||x===Ds?B=s.DEPTH_COMPONENT24:x===Hn?B=s.DEPTH_COMPONENT32F:x===Ls&&(B=s.DEPTH_COMPONENT16),B}function S(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==He?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),E(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function _(A){let x=A.target;x.removeEventListener("dispose",_),I(x)}function E(A){let x=n.get(A);if(x.__webglInit===void 0)return;let B=A.source,V=f.get(B);if(V){let J=V[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(A),Object.keys(V).length===0&&f.delete(B)}n.remove(A)}function P(A){let x=n.get(A);s.deleteTexture(x.__webglTexture);let B=A.source,V=f.get(B);delete V[x.__cacheKey],a.memory.textures--}function I(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let J=0;J<x.__webglFramebuffer[V].length;J++)s.deleteFramebuffer(x.__webglFramebuffer[V][J]);else s.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)s.deleteFramebuffer(x.__webglFramebuffer[V]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=A.textures;for(let V=0,J=B.length;V<J;V++){let ut=n.get(B[V]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(B[V])}n.remove(A)}let N=0;function Y(){N=0}function K(){return N}function z(A){N=A}function Z(){let A=N;return A>=i.maxTextures&&Vt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),N+=1,A}function $(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function rt(A,x){let B=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let V=A.image;if(V===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{qt(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function ht(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){qt(B,A,x);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function Mt(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){qt(B,A,x);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function Tt(A,x){let B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Jt(B,A,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}let Lt={[$n]:s.REPEAT,[Bn]:s.CLAMP_TO_EDGE,[_a]:s.MIRRORED_REPEAT},de={[on]:s.NEAREST,[jh]:s.NEAREST_MIPMAP_NEAREST,[br]:s.NEAREST_MIPMAP_LINEAR,[He]:s.LINEAR,[Ka]:s.LINEAR_MIPMAP_NEAREST,[Hi]:s.LINEAR_MIPMAP_LINEAR},Pe={[nu]:s.NEVER,[ou]:s.ALWAYS,[iu]:s.LESS,[Bo]:s.LEQUAL,[su]:s.EQUAL,[Oo]:s.GEQUAL,[ru]:s.GREATER,[au]:s.NOTEQUAL};function fe(A,x){if(x.type===Hn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===He||x.magFilter===Ka||x.magFilter===br||x.magFilter===Hi||x.minFilter===He||x.minFilter===Ka||x.minFilter===br||x.minFilter===Hi)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Lt[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Lt[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Lt[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,de[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Pe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==br&&x.minFilter!==Hi||x.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function tt(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let V=x.source,J=f.get(V);J===void 0&&(J={},f.set(V,J));let ut=$(x);if(ut!==A.__cacheKey){J[ut]===void 0&&(J[ut]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[ut].usedTimes++;let mt=J[A.__cacheKey];mt!==void 0&&(J[A.__cacheKey].usedTimes--,mt.usedTimes===0&&P(x)),A.__cacheKey=ut,A.__webglTexture=J[ut].texture}return B}function ft(A,x,B){return Math.floor(Math.floor(A/B)/x)}function ct(A,x,B,V){let ut=A.updateRanges;if(ut.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,B,V,x.data);else{ut.sort((Bt,yt)=>Bt.start-yt.start);let mt=0;for(let Bt=1;Bt<ut.length;Bt++){let yt=ut[mt],_t=ut[Bt],Ht=yt.start+yt.count,Wt=ft(_t.start,x.width,4),Zt=ft(yt.start,x.width,4);_t.start<=Ht+1&&Wt===Zt&&ft(_t.start+_t.count-1,x.width,4)===Wt?yt.count=Math.max(yt.count,_t.start+_t.count-yt.start):(++mt,ut[mt]=_t)}ut.length=mt+1;let Q=e.getParameter(s.UNPACK_ROW_LENGTH),et=e.getParameter(s.UNPACK_SKIP_PIXELS),gt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Bt=0,yt=ut.length;Bt<yt;Bt++){let _t=ut[Bt],Ht=Math.floor(_t.start/4),Wt=Math.ceil(_t.count/4),Zt=Ht%x.width,D=Math.floor(Ht/x.width),dt=Wt,nt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,Zt,D,dt,nt,B,V,x.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,et),e.pixelStorei(s.UNPACK_SKIP_ROWS,gt)}}function qt(A,x,B){let V=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=s.TEXTURE_3D);let J=tt(A,x),ut=x.source;e.bindTexture(V,A.__webglTexture,s.TEXTURE0+B);let mt=n.get(ut);if(ut.version!==mt.__version||J===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let nt=ce.getPrimaries(ce.workingColorSpace),pt=x.colorSpace===Si?null:ce.getPrimaries(x.colorSpace),Et=x.colorSpace===Si||nt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let et=m(x.image,!1,i.maxTextureSize);et=sn(x,et);let gt=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type),yt=v(x.internalFormat,gt,Bt,x.normalized,x.colorSpace,x.isVideoTexture);fe(V,x);let _t,Ht=x.mipmaps,Wt=x.isVideoTexture!==!0,Zt=mt.__version===void 0||J===!0,D=ut.dataReady,dt=S(x,et);if(x.isDepthTexture)yt=T(x.format===ki,x.type),Zt&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,yt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,yt,et.width,et.height,0,gt,Bt,null));else if(x.isDataTexture)if(Ht.length>0){Wt&&Zt&&e.texStorage2D(s.TEXTURE_2D,dt,yt,Ht[0].width,Ht[0].height);for(let nt=0,pt=Ht.length;nt<pt;nt++)_t=Ht[nt],Wt?D&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,_t.width,_t.height,gt,Bt,_t.data):e.texImage2D(s.TEXTURE_2D,nt,yt,_t.width,_t.height,0,gt,Bt,_t.data);x.generateMipmaps=!1}else Wt?(Zt&&e.texStorage2D(s.TEXTURE_2D,dt,yt,et.width,et.height),D&&ct(x,et,gt,Bt)):e.texImage2D(s.TEXTURE_2D,0,yt,et.width,et.height,0,gt,Bt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Wt&&Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,yt,Ht[0].width,Ht[0].height,et.depth);for(let nt=0,pt=Ht.length;nt<pt;nt++)if(_t=Ht[nt],x.format!==kn)if(gt!==null)if(Wt){if(D)if(x.layerUpdates.size>0){let Et=Tc(_t.width,_t.height,x.format,x.type);for(let at of x.layerUpdates){let It=_t.data.subarray(at*Et/_t.data.BYTES_PER_ELEMENT,(at+1)*Et/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,at,_t.width,_t.height,1,gt,It)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,et.depth,gt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,yt,_t.width,_t.height,et.depth,0,_t.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,et.depth,gt,Bt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,yt,_t.width,_t.height,et.depth,0,gt,Bt,_t.data)}else{Wt&&Zt&&e.texStorage2D(s.TEXTURE_2D,dt,yt,Ht[0].width,Ht[0].height);for(let nt=0,pt=Ht.length;nt<pt;nt++)_t=Ht[nt],x.format!==kn?gt!==null?Wt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,yt,_t.width,_t.height,0,_t.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?D&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,_t.width,_t.height,gt,Bt,_t.data):e.texImage2D(s.TEXTURE_2D,nt,yt,_t.width,_t.height,0,gt,Bt,_t.data)}else if(x.isDataArrayTexture)if(Wt){if(Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,yt,et.width,et.height,et.depth),D)if(x.layerUpdates.size>0){let nt=Tc(et.width,et.height,x.format,x.type);for(let pt of x.layerUpdates){let Et=et.data.subarray(pt*nt/et.data.BYTES_PER_ELEMENT,(pt+1)*nt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pt,et.width,et.height,1,gt,Bt,Et)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,Bt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,et.width,et.height,et.depth,0,gt,Bt,et.data);else if(x.isData3DTexture)Wt?(Zt&&e.texStorage3D(s.TEXTURE_3D,dt,yt,et.width,et.height,et.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,Bt,et.data)):e.texImage3D(s.TEXTURE_3D,0,yt,et.width,et.height,et.depth,0,gt,Bt,et.data);else if(x.isFramebufferTexture){if(Zt)if(Wt)e.texStorage2D(s.TEXTURE_2D,dt,yt,et.width,et.height);else{let nt=et.width,pt=et.height;for(let Et=0;Et<dt;Et++)e.texImage2D(s.TEXTURE_2D,Et,yt,nt,pt,0,gt,Bt,null),nt>>=1,pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let nt=s.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),et.parentNode!==nt){nt.appendChild(et),u.add(x),nt.onpaint=pt=>{let Et=pt.changedElements;for(let at of u)Et.includes(at.image)&&(at.needsUpdate=!0)},nt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,et);else{let Et=s.RGBA,at=s.RGBA,It=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Et,at,It,et)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Wt&&Zt){let nt=ee(Ht[0]);e.texStorage2D(s.TEXTURE_2D,dt,yt,nt.width,nt.height)}for(let nt=0,pt=Ht.length;nt<pt;nt++)_t=Ht[nt],Wt?D&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,gt,Bt,_t):e.texImage2D(s.TEXTURE_2D,nt,yt,gt,Bt,_t);x.generateMipmaps=!1}else if(Wt){if(Zt){let nt=ee(et);e.texStorage2D(s.TEXTURE_2D,dt,yt,nt.width,nt.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Bt,et)}else e.texImage2D(s.TEXTURE_2D,0,yt,gt,Bt,et);p(x)&&b(V),mt.__version=ut.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Jt(A,x,B){if(x.image.length!==6)return;let V=tt(A,x),J=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let ut=n.get(J);if(J.version!==ut.__version||V===!0){e.activeTexture(s.TEXTURE0+B);let mt=ce.getPrimaries(ce.workingColorSpace),Q=x.colorSpace===Si?null:ce.getPrimaries(x.colorSpace),et=x.colorSpace===Si||mt===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let gt=x.isCompressedTexture||x.image[0].isCompressedTexture,Bt=x.image[0]&&x.image[0].isDataTexture,yt=[];for(let at=0;at<6;at++)!gt&&!Bt?yt[at]=m(x.image[at],!0,i.maxCubemapSize):yt[at]=Bt?x.image[at].image:x.image[at],yt[at]=sn(x,yt[at]);let _t=yt[0],Ht=r.convert(x.format,x.colorSpace),Wt=r.convert(x.type),Zt=v(x.internalFormat,Ht,Wt,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,dt=ut.__version===void 0||V===!0,nt=J.dataReady,pt=S(x,_t);fe(s.TEXTURE_CUBE_MAP,x);let Et;if(gt){D&&dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Zt,_t.width,_t.height);for(let at=0;at<6;at++){Et=yt[at].mipmaps;for(let It=0;It<Et.length;It++){let Dt=Et[It];x.format!==kn?Ht!==null?D?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,Dt.width,Dt.height,Ht,Dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,Zt,Dt.width,Dt.height,0,Dt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,Dt.width,Dt.height,Ht,Wt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,Zt,Dt.width,Dt.height,0,Ht,Wt,Dt.data)}}}else{if(Et=x.mipmaps,D&&dt){Et.length>0&&pt++;let at=ee(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Zt,at.width,at.height)}for(let at=0;at<6;at++)if(Bt){D?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,yt[at].width,yt[at].height,Ht,Wt,yt[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Zt,yt[at].width,yt[at].height,0,Ht,Wt,yt[at].data);for(let It=0;It<Et.length;It++){let Ie=Et[It].image[at].image;D?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,Ie.width,Ie.height,Ht,Wt,Ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,Zt,Ie.width,Ie.height,0,Ht,Wt,Ie.data)}}else{D?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ht,Wt,yt[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Zt,Ht,Wt,yt[at]);for(let It=0;It<Et.length;It++){let Dt=Et[It];D?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,Ht,Wt,Dt.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,Zt,Ht,Wt,Dt.image[at])}}}p(x)&&b(s.TEXTURE_CUBE_MAP),ut.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Gt(A,x,B,V,J,ut){let mt=r.convert(B.format,B.colorSpace),Q=r.convert(B.type),et=v(B.internalFormat,mt,Q,B.normalized,B.colorSpace),gt=n.get(x),Bt=n.get(B);if(Bt.__renderTarget=x,!gt.__hasExternalTextures){let yt=Math.max(1,x.width>>ut),_t=Math.max(1,x.height>>ut);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,ut,et,yt,_t,x.depth,0,mt,Q,null):e.texImage2D(J,ut,et,yt,_t,0,mt,Q,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Oe(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,J,Bt.__webglTexture,0,Ae(x)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,J,Bt.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function we(A,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){let V=x.depthTexture,J=V&&V.isDepthTexture?V.type:null,ut=T(x.stencilBuffer,J),mt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Oe(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae(x),ut,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae(x),ut,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ut,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,A)}else{let V=x.textures;for(let J=0;J<V.length;J++){let ut=V[J],mt=r.convert(ut.format,ut.colorSpace),Q=r.convert(ut.type),et=v(ut.internalFormat,mt,Q,ut.normalized,ut.colorSpace);Oe(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae(x),et,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae(x),et,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,et,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(A,x,B){let V=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),fe(s.TEXTURE_CUBE_MAP,x.depthTexture);let gt=r.convert(x.depthTexture.format),Bt=r.convert(x.depthTexture.type),yt;x.depthTexture.format===Jn?yt=s.DEPTH_COMPONENT24:x.depthTexture.format===ki&&(yt=s.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,yt,x.width,x.height,0,gt,Bt,null)}}else rt(x.depthTexture,0);let ut=J.__webglTexture,mt=Ae(x),Q=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,et=x.depthTexture.format===ki?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Jn)Oe(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,Q,ut,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,et,Q,ut,0);else if(x.depthTexture.format===ki)Oe(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,Q,ut,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,et,Q,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Me(A){let x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=V}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)Xt(x.__webglFramebuffer[V],A,V);else{let V=A.texture.mipmaps;V&&V.length>0?Xt(x.__webglFramebuffer[0],A,0):Xt(x.__webglFramebuffer,A,0)}else if(B){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=s.createRenderbuffer(),we(x.__webglDepthbuffer[V],A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,ut)}}else{let V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),we(x.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,ut)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(A,x,B){let V=n.get(A);x!==void 0&&Gt(V.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Me(A)}function te(A){let x=A.texture,B=n.get(A),V=n.get(x);A.addEventListener("dispose",_);let J=A.textures,ut=A.isWebGLCubeRenderTarget===!0,mt=J.length>1;if(mt||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=x.version,a.memory.textures++),ut){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let et=0;et<x.mipmaps.length;et++)B.__webglFramebuffer[Q][et]=s.createFramebuffer()}else B.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)B.__webglFramebuffer[Q]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(mt)for(let Q=0,et=J.length;Q<et;Q++){let gt=n.get(J[Q]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Oe(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){let et=J[Q];B.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);let gt=r.convert(et.format,et.colorSpace),Bt=r.convert(et.type),yt=v(et.internalFormat,gt,Bt,et.normalized,et.colorSpace,A.isXRRenderTarget===!0),_t=Ae(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,yt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),we(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),fe(s.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)Gt(B.__webglFramebuffer[Q][et],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,et);else Gt(B.__webglFramebuffer[Q],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(x)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let Q=0,et=J.length;Q<et;Q++){let gt=J[Q],Bt=n.get(gt),yt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(yt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,Bt.__webglTexture),fe(yt,gt),Gt(B.__webglFramebuffer,A,gt,s.COLOR_ATTACHMENT0+Q,yt,0),p(gt)&&b(yt)}e.unbindTexture()}else{let Q=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,V.__webglTexture),fe(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)Gt(B.__webglFramebuffer[et],A,x,s.COLOR_ATTACHMENT0,Q,et);else Gt(B.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,Q,0);p(x)&&b(Q),e.unbindTexture()}A.depthBuffer&&Me(A)}function Be(A){let x=A.textures;for(let B=0,V=x.length;B<V;B++){let J=x[B];if(p(J)){let ut=w(A),mt=n.get(J).__webglTexture;e.bindTexture(ut,mt),b(ut),e.unbindTexture()}}}let Ve=[],We=[];function Ke(A){if(A.samples>0){if(Oe(A)===!1){let x=A.textures,B=A.width,V=A.height,J=s.COLOR_BUFFER_BIT,ut=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=n.get(A),Q=x.length>1;if(Q)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let et=A.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Bt=n.get(x[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Bt,0)}s.blitFramebuffer(0,0,B,V,0,0,B,V,J,s.NEAREST),l===!0&&(Ve.length=0,We.length=0,Ve.push(s.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ve.push(ut),We.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,We)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ve))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Bt=n.get(x[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Bt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Ae(A){return Math.min(i.maxSamples,A.samples)}function Oe(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function sn(A,x){let B=A.colorSpace,V=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Qs&&B!==Si&&(ce.getTransfer(B)===_e?(V!==kn||J!==En)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",B)),x}function ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.getTextureUnits=K,this.setTextureUnits=z,this.setTexture2D=rt,this.setTexture2DArray=ht,this.setTexture3D=Mt,this.setTextureCube=Tt,this.rebindTextures=pe,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ox(s,t){function e(n,i=Si){let r,a=ce.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===ja)return s.UNSIGNED_SHORT_4_4_4_4;if(n===to)return s.UNSIGNED_SHORT_5_5_5_1;if(n===pc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===mc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===dc)return s.BYTE;if(n===fc)return s.SHORT;if(n===Ls)return s.UNSIGNED_SHORT;if(n===Qa)return s.INT;if(n===Xn)return s.UNSIGNED_INT;if(n===Hn)return s.FLOAT;if(n===ei)return s.HALF_FLOAT;if(n===gc)return s.ALPHA;if(n===xc)return s.RGB;if(n===kn)return s.RGBA;if(n===Jn)return s.DEPTH_COMPONENT;if(n===ki)return s.DEPTH_STENCIL;if(n===eo)return s.RED;if(n===no)return s.RED_INTEGER;if(n===zi)return s.RG;if(n===io)return s.RG_INTEGER;if(n===so)return s.RGBA_INTEGER;if(n===Sr||n===Er||n===Tr||n===wr)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===ao||n===oo||n===lo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===Ar||n===mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===co||n===ho)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fo)return r.COMPRESSED_R11_EAC;if(n===po)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ar)return r.COMPRESSED_RG11_EAC;if(n===mo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===go||n===xo||n===_o||n===yo||n===vo||n===Mo||n===bo||n===So||n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===go)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ro)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===Io||n===Lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Uo||n===Rr||n===No)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
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

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:lx,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new W(new ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kc=class extends Kn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Hc,p={},b=e.getContextAttributes(),w=null,v=null,T=[],S=[],C=new Ct,_=null,E=new $e;E.viewport=new Ue;let P=new $e;P.viewport=new Ue;let I=[E,P],N=new Ya,Y=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ft=T[tt];return ft===void 0&&(ft=new Rs,T[tt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(tt){let ft=T[tt];return ft===void 0&&(ft=new Rs,T[tt]=ft),ft.getGripSpace()},this.getHand=function(tt){let ft=T[tt];return ft===void 0&&(ft=new Rs,T[tt]=ft),ft.getHandSpace()};function z(tt){let ft=S.indexOf(tt.inputSource);if(ft===-1)return;let ct=T[ft];ct!==void 0&&(ct.update(tt.inputSource,tt.frame,c||a),ct.dispatchEvent({type:tt.type,data:tt.inputSource}))}function Z(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",$);for(let tt=0;tt<T.length;tt++){let ft=S[tt];ft!==null&&(S[tt]=null,T[tt].disconnect(ft))}Y=null,K=null,m.reset();for(let tt in p)delete p[tt];t.setRenderTarget(w),f=null,d=null,u=null,i=null,v=null,fe.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,qt=null,Jt=null;b.depth&&(Jt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=b.stencil?ki:Jn,qt=b.stencil?Ds:Xn);let Gt={colorFormat:e.RGBA8,depthFormat:Jt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new qe(d.textureWidth,d.textureHeight,{format:kn,type:En,depthTexture:new Mi(d.textureWidth,d.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ct={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ct),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new qe(f.framebufferWidth,f.framebufferHeight,{format:kn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(tt){for(let ft=0;ft<tt.removed.length;ft++){let ct=tt.removed[ft],qt=S.indexOf(ct);qt>=0&&(S[qt]=null,T[qt].disconnect(ct))}for(let ft=0;ft<tt.added.length;ft++){let ct=tt.added[ft],qt=S.indexOf(ct);if(qt===-1){for(let Gt=0;Gt<T.length;Gt++)if(Gt>=S.length){S.push(ct),qt=Gt;break}else if(S[Gt]===null){S[Gt]=ct,qt=Gt;break}if(qt===-1)break}let Jt=T[qt];Jt&&Jt.connect(ct)}}let rt=new R,ht=new R;function Mt(tt,ft,ct){rt.setFromMatrixPosition(ft.matrixWorld),ht.setFromMatrixPosition(ct.matrixWorld);let qt=rt.distanceTo(ht),Jt=ft.projectionMatrix.elements,Gt=ct.projectionMatrix.elements,we=Jt[14]/(Jt[10]-1),Xt=Jt[14]/(Jt[10]+1),Me=(Jt[9]+1)/Jt[5],pe=(Jt[9]-1)/Jt[5],te=(Jt[8]-1)/Jt[0],Be=(Gt[8]+1)/Gt[0],Ve=we*te,We=we*Be,Ke=qt/(-te+Be),Ae=Ke*-te;if(ft.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ae),tt.translateZ(Ke),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Jt[10]===-1)tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let Oe=we+Ke,U=Xt+Ke,sn=Ve-Ae,ee=We+(qt-Ae),A=Me*Xt/U*Oe,x=pe*Xt/U*Oe;tt.projectionMatrix.makePerspective(sn,ee,A,x,Oe,U),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Tt(tt,ft){ft===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ft.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;let ft=tt.near,ct=tt.far;m.texture!==null&&(m.depthNear>0&&(ft=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),N.near=P.near=E.near=ft,N.far=P.far=E.far=ct,(Y!==N.near||K!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),Y=N.near,K=N.far),N.layers.mask=tt.layers.mask|6,E.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let qt=tt.parent,Jt=N.cameras;Tt(N,qt);for(let Gt=0;Gt<Jt.length;Gt++)Tt(Jt[Gt],qt);Jt.length===2?Mt(N,E,P):N.projectionMatrix.copy(E.projectionMatrix),Lt(tt,N,qt)};function Lt(tt,ft,ct){ct===null?tt.matrix.copy(ft.matrixWorld):(tt.matrix.copy(ct.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ft.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ft.projectionMatrix),tt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=ji*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(tt){return p[tt]};let de=null;function Pe(tt,ft){if(h=ft.getViewerPose(c||a),g=ft,h!==null){let ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let qt=!1;ct.length!==N.cameras.length&&(N.cameras.length=0,qt=!0);for(let Xt=0;Xt<ct.length;Xt++){let Me=ct[Xt],pe=null;if(f!==null)pe=f.getViewport(Me);else{let Be=u.getViewSubImage(d,Me);pe=Be.viewport,Xt===0&&(t.setRenderTargetTextures(v,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(v))}let te=I[Xt];te===void 0&&(te=new $e,te.layers.enable(Xt),te.viewport=new Ue,I[Xt]=te),te.matrix.fromArray(Me.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Me.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(pe.x,pe.y,pe.width,pe.height),Xt===0&&(N.matrix.copy(te.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),qt===!0&&N.cameras.push(te)}let Jt=i.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Xt=u.getDepthInformation(ct[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,i.renderState)}if(Jt&&Jt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let Xt=0;Xt<ct.length;Xt++){let Me=ct[Xt].camera;if(Me){let pe=p[Me];pe||(pe=new ur,p[Me]=pe);let te=u.getCameraImage(Me);pe.sourceTexture=te}}}}for(let ct=0;ct<T.length;ct++){let qt=S[ct],Jt=T[ct];qt!==null&&Jt!==void 0&&Jt.update(qt,ft,c||a)}de&&de(tt,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),g=null}let fe=new Bu;fe.setAnimationLoop(Pe),this.setAnimationLoop=function(tt){de=tt},this.dispose=function(){}}},hx=new Se,Vu=new Kt;Vu.set(-1,0,0,0,1,0,0,0,1);function ux(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),w=b.envMap,v=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dx(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let S=T.program;n.uniformBlockBinding(v,S)}function c(v,T){let S=i[v.id];S===void 0&&(m(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",b));let C=T.program;n.updateUBOMapping(v,C);let _=t.render.frame;r[v.id]!==_&&(d(v),r[v.id]=_)}function h(v){let T=u();v.__bindingPointIndex=T;let S=s.createBuffer(),C=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,S),S}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let T=i[v.id],S=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let _=0,E=S.length;_<E;_++){let P=S[_];if(Array.isArray(P))for(let I=0,N=P.length;I<N;I++)f(P[I],_,I,C);else f(P,_,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,T,S,C){if(y(v,T,S,C)===!0){let _=v.__offset,E=v.value;if(Array.isArray(E)){let P=0;for(let I=0;I<E.length;I++){let N=E[I],Y=p(N);g(N,v.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function g(v,T,S){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,S)}function y(v,T,S,C){let _=v.value,E=T+"_"+S;if(C[E]===void 0)return typeof _=="number"||typeof _=="boolean"?C[E]=_:ArrayBuffer.isView(_)?C[E]=_.slice():C[E]=_.clone(),!0;{let P=C[E];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return C[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(v){let T=v.uniforms,S=0,C=16;for(let E=0,P=T.length;E<P;E++){let I=Array.isArray(T[E])?T[E]:[T[E]];for(let N=0,Y=I.length;N<Y;N++){let K=I[N],z=Array.isArray(K.value)?K.value:[K.value];for(let Z=0,$=z.length;Z<$;Z++){let rt=z[Z],ht=p(rt),Mt=S%C,Tt=Mt%ht.boundary,Lt=Mt+Tt;S+=Tt,Lt!==0&&C-Lt<ht.storage&&(S+=C-Lt),K.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=S,S+=ht.storage}}}let _=S%C;return _>0&&(S+=C-_),v.__size=S,v.__cache={},this}function p(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),T}function b(v){let T=v.target;T.removeEventListener("dispose",b);let S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function w(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}var fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function px(){return ni===null&&(ni=new or(fx,16,16,zi,ei),ni.name="DFG_LUT",ni.minFilter=He,ni.magFilter=He,ni.wrapS=Bn,ni.wrapT=Bn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var Go=class{constructor(t={}){let{canvas:e=lu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=En}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([so,io,no]),p=new Set([En,Xn,Ls,Ds,ja,to]),b=new Uint32Array(4),w=new Int32Array(4),v=new R,T=null,S=null,C=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,N=null,Y=null,K=null,z=null;this._outputColorSpace=je;let Z=0,$=0,rt=null,ht=-1,Mt=null,Tt=new Ue,Lt=new Ue,de=null,Pe=new zt(0),fe=0,tt=e.width,ft=e.height,ct=1,qt=null,Jt=null,Gt=new Ue(0,0,tt,ft),we=new Ue(0,0,tt,ft),Xt=!1,Me=new Cs,pe=!1,te=!1,Be=new Se,Ve=new R,We=new Ue,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Oe(){return rt===null?ct:1}let U=n;function sn(M,F){return e.getContext(M,F)}try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Dn,!1),U===null){let F="webgl2";if(U=sn(F,M),U===null)throw sn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Yt("WebGLRenderer: "+M.message),M}let ee,A,x,B,V,J,ut,mt,Q,et,gt,Bt,yt,_t,Ht,Wt,Zt,D,dt,nt,pt,Et,at;function It(){ee=new Mm(U),ee.init(),pt=new ox(U,ee),A=new fm(U,ee,t,pt),x=new rx(U,ee),A.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),Y=U.createFramebuffer(),K=U.createFramebuffer(),z=U.createFramebuffer(),B=new Em(U),V=new Xg,J=new ax(U,ee,x,V,A,pt,B),ut=new vm(P),mt=new Rf(U),Et=new um(U,mt),Q=new bm(U,mt,B,Et),et=new wm(U,Q,mt,Et,B),D=new Tm(U,A,J),Ht=new pm(V),gt=new Wg(P,ut,ee,A,Et,Ht),Bt=new ux(P,V),yt=new Yg,_t=new jg(ee),Zt=new hm(P,ut,x,et,g,l),Wt=new sx(P,et,A),at=new dx(U,B,A,x),dt=new dm(U,ee,B),nt=new Sm(U,ee,B),B.programs=gt.programs,P.capabilities=A,P.extensions=ee,P.properties=V,P.renderLists=yt,P.shadowMap=Wt,P.state=x,P.info=B}It(),y!==En&&(E=new Rm(y,e.width,e.height,o,i,r));let Dt=new kc(P,U);this.xr=Dt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(M){M!==void 0&&(ct=M,this.setSize(tt,ft,!1))},this.getSize=function(M){return M.set(tt,ft)},this.setSize=function(M,F,q=!0){if(Dt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=M,ft=F,e.width=Math.floor(M*ct),e.height=Math.floor(F*ct),q===!0&&(e.style.width=M+"px",e.style.height=F+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(tt*ct,ft*ct).floor()},this.setDrawingBufferSize=function(M,F,q){tt=M,ft=F,ct=q,e.width=Math.floor(M*q),e.height=Math.floor(F*q),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(y===En){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Tt)},this.getViewport=function(M){return M.copy(Gt)},this.setViewport=function(M,F,q,G){M.isVector4?Gt.set(M.x,M.y,M.z,M.w):Gt.set(M,F,q,G),x.viewport(Tt.copy(Gt).multiplyScalar(ct).round())},this.getScissor=function(M){return M.copy(we)},this.setScissor=function(M,F,q,G){M.isVector4?we.set(M.x,M.y,M.z,M.w):we.set(M,F,q,G),x.scissor(Lt.copy(we).multiplyScalar(ct).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(M){x.setScissorTest(Xt=M)},this.setOpaqueSort=function(M){qt=M},this.setTransparentSort=function(M){Jt=M},this.getClearColor=function(M){return M.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,q=!0){let G=0;if(M){let H=!1;if(rt!==null){let vt=rt.texture.format;H=m.has(vt)}if(H){let vt=rt.texture.type,wt=p.has(vt),xt=Zt.getClearColor(),Nt=Zt.getClearAlpha(),Ut=xt.r,$t=xt.g,jt=xt.b;wt?(b[0]=Ut,b[1]=$t,b[2]=jt,b[3]=Nt,U.clearBufferuiv(U.COLOR,0,b)):(w[0]=Ut,w[1]=$t,w[2]=jt,w[3]=Nt,U.clearBufferiv(U.COLOR,0,w))}else G|=U.COLOR_BUFFER_BIT}F&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),Zt.dispose(),yt.dispose(),_t.dispose(),V.dispose(),ut.dispose(),et.dispose(),Et.dispose(),at.dispose(),gt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Wi),Dt.removeEventListener("sessionend",oi),li.stop()};function Ie(M){M.preventDefault(),yc("WebGLRenderer: Context Lost."),I=!0}function be(){yc("WebGLRenderer: Context Restored."),I=!1;let M=B.autoReset,F=Wt.enabled,q=Wt.autoUpdate,G=Wt.needsUpdate,H=Wt.type;It(),B.autoReset=M,Wt.enabled=F,Wt.autoUpdate=q,Wt.needsUpdate=G,Wt.type=H}function Dn(M){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Un(M){let F=M.target;F.removeEventListener("dispose",Un),nh(F)}function nh(M){ul(M),V.remove(M)}function ul(M){let F=V.get(M).programs;F!==void 0&&(F.forEach(function(q){gt.releaseProgram(q)}),M.isShaderMaterial&&gt.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,q,G,H,vt){F===null&&(F=Ke);let wt=H.isMesh&&H.matrixWorld.determinantAffine()<0,xt=Or(M,F,q,G,H);x.setMaterial(G,wt);let Nt=q.index,Ut=1;if(G.wireframe===!0){if(Nt=Q.getWireframeAttribute(q),Nt===void 0)return;Ut=2}let $t=q.drawRange,jt=q.attributes.position,Ft=$t.start*Ut,xe=($t.start+$t.count)*Ut;vt!==null&&(Ft=Math.max(Ft,vt.start*Ut),xe=Math.min(xe,(vt.start+vt.count)*Ut)),Nt!==null?(Ft=Math.max(Ft,0),xe=Math.min(xe,Nt.count)):jt!=null&&(Ft=Math.max(Ft,0),xe=Math.min(xe,jt.count));let Ee=xe-Ft;if(Ee<0||Ee===1/0)return;Et.setup(H,G,xt,q,Nt);let Le,le=dt;if(Nt!==null&&(Le=mt.get(Nt),le=nt,le.setIndex(Le)),H.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*Oe()),le.setMode(U.LINES)):le.setMode(U.TRIANGLES);else if(H.isLine){let rn=G.linewidth;rn===void 0&&(rn=1),x.setLineWidth(rn*Oe()),H.isLineSegments?le.setMode(U.LINES):H.isLineLoop?le.setMode(U.LINE_LOOP):le.setMode(U.LINE_STRIP)}else H.isPoints?le.setMode(U.POINTS):H.isSprite&&le.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))le.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let rn=H._multiDrawStarts,At=H._multiDrawCounts,cn=H._multiDrawCount,he=Nt?mt.get(Nt).bytesPerElement:1,xn=V.get(G).currentProgram.getUniforms();for(let Nn=0;Nn<cn;Nn++)xn.setValue(U,"_gl_DrawID",Nn),le.render(rn[Nn]/he,At[Nn])}else if(H.isInstancedMesh)le.renderInstances(Ft,Ee,H.count);else if(q.isInstancedBufferGeometry){let rn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,At=Math.min(q.instanceCount,rn);le.renderInstances(Ft,Ee,At)}else le.render(Ft,Ee)};function Ur(M,F,q){M.transparent===!0&&M.side===Te&&M.forceSinglePass===!1?(M.side=un,M.needsUpdate=!0,cs(M,F,q),M.side=gi,M.needsUpdate=!0,cs(M,F,q),M.side=Te):cs(M,F,q)}this.compile=function(M,F,q=null){q===null&&(q=M),S=_t.get(q),S.init(F),_.push(S),q.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),M!==q&&M.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),S.setupLights();let G=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let vt=H.material;if(vt)if(Array.isArray(vt))for(let wt=0;wt<vt.length;wt++){let xt=vt[wt];Ur(xt,q,H),G.add(xt)}else Ur(vt,q,H),G.add(vt)}),S=_.pop(),G},this.compileAsync=function(M,F,q=null){let G=this.compile(M,F,q);return new Promise(H=>{function vt(){if(G.forEach(function(wt){V.get(wt).currentProgram.isReady()&&G.delete(wt)}),G.size===0){H(M);return}setTimeout(vt,10)}ee.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ti=null;function dl(M){Ti&&Ti(M)}function Wi(){li.stop()}function oi(){li.start()}let li=new Bu;li.setAnimationLoop(dl),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(M){Ti=M,Dt.setAnimationLoop(M),M===null?li.stop():li.start()},Dt.addEventListener("sessionstart",Wi),Dt.addEventListener("sessionend",oi),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(M,F);let q=Dt.enabled===!0&&Dt.isPresenting===!0,G=E!==null&&(rt===null||q)&&E.begin(P,rt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(F),F=Dt.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,F,rt),S=_t.get(M,_.length),S.init(F),S.state.textureUnits=J.getTextureUnits(),_.push(S),Be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Me.setFromProjectionMatrix(Be,Wn,F.reversedDepth),te=this.localClippingEnabled,pe=Ht.init(this.clippingPlanes,te),T=yt.get(M,C.length),T.init(),C.push(T),Dt.enabled===!0&&Dt.isPresenting===!0){let wt=P.xr.getDepthSensingMesh();wt!==null&&ks(wt,F,-1/0,P.sortObjects)}ks(M,F,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(qt,Jt,F.reversedDepth),Ae=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Ae&&Zt.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&Ht.beginShadows();let H=S.state.shadowsArray;if(Wt.render(H,M,F),pe===!0&&Ht.endShadows(),(G&&E.hasRenderPass())===!1){let wt=T.opaque,xt=T.transmissive;if(S.setupLights(),F.isArrayCamera){let Nt=F.cameras;if(xt.length>0)for(let Ut=0,$t=Nt.length;Ut<$t;Ut++){let jt=Nt[Ut];ci(wt,xt,M,jt)}Ae&&Zt.render(M);for(let Ut=0,$t=Nt.length;Ut<$t;Ut++){let jt=Nt[Ut];Nr(T,M,jt,jt.viewport)}}else xt.length>0&&ci(wt,xt,M,F),Ae&&Zt.render(M),Nr(T,M,F)}rt!==null&&$===0&&(J.updateMultisampleRenderTarget(rt),J.updateRenderTargetMipmap(rt)),G&&E.end(P),M.isScene===!0&&M.onAfterRender(P,M,F),Et.resetDefaultState(),ht=-1,Mt=null,_.pop(),_.length>0?(S=_[_.length-1],J.setTextureUnits(S.state.textureUnits),pe===!0&&Ht.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,N!==null&&N.renderEnd()};function ks(M,F,q,G){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)S.pushLightProbeGrid(M);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Me.intersectsSprite(M)){G&&We.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Be);let wt=et.update(M),xt=M.material;xt.visible&&T.push(M,wt,xt,q,We.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Me.intersectsObject(M))){let wt=et.update(M),xt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),We.copy(M.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),We.copy(wt.boundingSphere.center)),We.applyMatrix4(M.matrixWorld).applyMatrix4(Be)),Array.isArray(xt)){let Nt=wt.groups;for(let Ut=0,$t=Nt.length;Ut<$t;Ut++){let jt=Nt[Ut],Ft=xt[jt.materialIndex];Ft&&Ft.visible&&T.push(M,wt,Ft,q,We.z,jt)}}else xt.visible&&T.push(M,wt,xt,q,We.z,null)}}let vt=M.children;for(let wt=0,xt=vt.length;wt<xt;wt++)ks(vt[wt],F,q,G)}function Nr(M,F,q,G){let{opaque:H,transmissive:vt,transparent:wt}=M;S.setupLightsView(q),pe===!0&&Ht.setGlobalState(P.clippingPlanes,q),G&&x.viewport(Tt.copy(G)),H.length>0&&os(H,F,q),vt.length>0&&os(vt,F,q),wt.length>0&&os(wt,F,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ci(M,F,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[G.id]===void 0){let Ft=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[G.id]=new qe(1,1,{generateMipmaps:!0,type:Ft?ei:En,minFilter:Hi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let vt=S.state.transmissionRenderTarget[G.id],wt=G.viewport||Tt;vt.setSize(wt.z*P.transmissionResolutionScale,wt.w*P.transmissionResolutionScale);let xt=P.getRenderTarget(),Nt=P.getActiveCubeFace(),Ut=P.getActiveMipmapLevel();P.setRenderTarget(vt),P.getClearColor(Pe),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),P.clear(),Ae&&Zt.render(q);let $t=P.toneMapping;P.toneMapping=Ln;let jt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),S.setupLightsView(G),pe===!0&&Ht.setGlobalState(P.clippingPlanes,G),os(M,q,G),J.updateMultisampleRenderTarget(vt),J.updateRenderTargetMipmap(vt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let xe=0,Ee=F.length;xe<Ee;xe++){let Le=F[xe],{object:le,geometry:rn,material:At,group:cn}=Le;if(At.side===Te&&le.layers.test(G.layers)){let he=At.side;At.side=un,At.needsUpdate=!0,ls(le,q,G,rn,At,cn),At.side=he,At.needsUpdate=!0,Ft=!0}}Ft===!0&&(J.updateMultisampleRenderTarget(vt),J.updateRenderTargetMipmap(vt))}P.setRenderTarget(xt,Nt,Ut),P.setClearColor(Pe,fe),jt!==void 0&&(G.viewport=jt),P.toneMapping=$t}function os(M,F,q){let G=F.isScene===!0?F.overrideMaterial:null;for(let H=0,vt=M.length;H<vt;H++){let wt=M[H],{object:xt,geometry:Nt,group:Ut}=wt,$t=wt.material;$t.allowOverride===!0&&G!==null&&($t=G),xt.layers.test(q.layers)&&ls(xt,F,q,Nt,$t,Ut)}}function ls(M,F,q,G,H,vt){M.onBeforeRender(P,F,q,G,H,vt),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(P,F,q,G,M,vt),H.transparent===!0&&H.side===Te&&H.forceSinglePass===!1?(H.side=un,H.needsUpdate=!0,P.renderBufferDirect(q,F,G,H,M,vt),H.side=gi,H.needsUpdate=!0,P.renderBufferDirect(q,F,G,H,M,vt),H.side=Te):P.renderBufferDirect(q,F,G,H,M,vt),M.onAfterRender(P,F,q,G,H,vt)}function cs(M,F,q){F.isScene!==!0&&(F=Ke);let G=V.get(M),H=S.state.lights,vt=S.state.shadowsArray,wt=H.state.version,xt=gt.getParameters(M,H.state,vt,F,q,S.state.lightProbeGridArray),Nt=gt.getProgramCacheKey(xt),Ut=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let $t=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=ut.get(M.envMap||G.environment,$t),G.envMapRotation=G.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",Un),Ut=new Map,G.programs=Ut);let jt=Ut.get(Nt);if(jt!==void 0){if(G.currentProgram===jt&&G.lightsStateVersion===wt)return Br(M,xt),jt}else xt.uniforms=gt.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,q,xt),M.onBeforeCompile(xt,P),jt=gt.acquireProgram(xt,Nt),Ut.set(Nt,jt),G.uniforms=xt.uniforms;let Ft=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ft.clippingPlanes=Ht.uniform),Br(M,xt),G.needsLights=ml(M),G.lightsStateVersion=wt,G.needsLights&&(Ft.ambientLightColor.value=H.state.ambient,Ft.lightProbe.value=H.state.probe,Ft.directionalLights.value=H.state.directional,Ft.directionalLightShadows.value=H.state.directionalShadow,Ft.spotLights.value=H.state.spot,Ft.spotLightShadows.value=H.state.spotShadow,Ft.rectAreaLights.value=H.state.rectArea,Ft.ltc_1.value=H.state.rectAreaLTC1,Ft.ltc_2.value=H.state.rectAreaLTC2,Ft.pointLights.value=H.state.point,Ft.pointLightShadows.value=H.state.pointShadow,Ft.hemisphereLights.value=H.state.hemi,Ft.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ft.spotLightMatrix.value=H.state.spotLightMatrix,Ft.spotLightMap.value=H.state.spotLightMap,Ft.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=S.state.lightProbeGridArray.length>0,G.currentProgram=jt,G.uniformsList=null,jt}function Fr(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Fs.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Br(M,F){let q=V.get(M);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function fl(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let q=0,G=M.length;q<G;q++){let H=M[q];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function Or(M,F,q,G,H){F.isScene!==!0&&(F=Ke),J.resetTextureUnits();let vt=F.fog,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,xt=rt===null?P.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ce.workingColorSpace,Nt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ut=ut.get(G.envMap||wt,Nt),$t=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,jt=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ft=!!q.morphAttributes.position,xe=!!q.morphAttributes.normal,Ee=!!q.morphAttributes.color,Le=Ln;G.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Le=P.toneMapping);let le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,rn=le!==void 0?le.length:0,At=V.get(G),cn=S.state.lights;if(pe===!0&&(te===!0||M!==Mt)){let it=M===Mt&&G.id===ht;Ht.setState(G,M,it)}let he=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==cn.state.version||At.outputColorSpace!==xt||H.isBatchedMesh&&At.batching===!1||!H.isBatchedMesh&&At.batching===!0||H.isBatchedMesh&&At.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&At.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&At.instancing===!1||!H.isInstancedMesh&&At.instancing===!0||H.isSkinnedMesh&&At.skinning===!1||!H.isSkinnedMesh&&At.skinning===!0||H.isInstancedMesh&&At.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&At.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&At.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&At.instancingMorph===!1&&H.morphTexture!==null||At.envMap!==Ut||G.fog===!0&&At.fog!==vt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ht.numPlanes||At.numIntersection!==Ht.numIntersection)||At.vertexAlphas!==$t||At.vertexTangents!==jt||At.morphTargets!==Ft||At.morphNormals!==xe||At.morphColors!==Ee||At.toneMapping!==Le||At.morphTargetsCount!==rn||!!At.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,At.__version=G.version);let xn=At.currentProgram;he===!0&&(xn=cs(G,F,H),N&&G.isNodeMaterial&&N.onUpdateProgram(G,xn,At));let Nn=!1,L=!1,k=!1,X=xn.getUniforms(),O=At.uniforms;if(x.useProgram(xn.program)&&(Nn=!0,L=!0,k=!0),G.id!==ht&&(ht=G.id,L=!0),At.needsLights){let it=fl(S.state.lightProbeGridArray,H);At.lightProbeGrid!==it&&(At.lightProbeGrid=it,L=!0)}if(Nn||Mt!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),X.setValue(U,"projectionMatrix",M.projectionMatrix),X.setValue(U,"viewMatrix",M.matrixWorldInverse);let Pt=X.map.cameraPosition;Pt!==void 0&&Pt.setValue(U,Ve.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&X.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&X.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),Mt!==M&&(Mt=M,L=!0,k=!0)}if(At.needsLights&&(cn.state.directionalShadowMap.length>0&&X.setValue(U,"directionalShadowMap",cn.state.directionalShadowMap,J),cn.state.spotShadowMap.length>0&&X.setValue(U,"spotShadowMap",cn.state.spotShadowMap,J),cn.state.pointShadowMap.length>0&&X.setValue(U,"pointShadowMap",cn.state.pointShadowMap,J)),H.isSkinnedMesh){X.setOptional(U,H,"bindMatrix"),X.setOptional(U,H,"bindMatrixInverse");let it=H.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),X.setValue(U,"boneTexture",it.boneTexture,J))}H.isBatchedMesh&&(X.setOptional(U,H,"batchingTexture"),X.setValue(U,"batchingTexture",H._matricesTexture,J),X.setOptional(U,H,"batchingIdTexture"),X.setValue(U,"batchingIdTexture",H._indirectTexture,J),X.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&X.setValue(U,"batchingColorTexture",H._colorsTexture,J));let ot=q.morphAttributes;if((ot.position!==void 0||ot.normal!==void 0||ot.color!==void 0)&&D.update(H,q,xn),(L||At.receiveShadow!==H.receiveShadow)&&(At.receiveShadow=H.receiveShadow,X.setValue(U,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(O.envMapIntensity.value=F.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=px()),L){if(X.setValue(U,"toneMappingExposure",P.toneMappingExposure),At.needsLights&&pl(O,k),vt&&G.fog===!0&&Bt.refreshFogUniforms(O,vt),Bt.refreshMaterialUniforms(O,G,ct,ft,S.state.transmissionRenderTarget[M.id]),At.needsLights&&At.lightProbeGrid){let it=At.lightProbeGrid;O.probesSH.value=it.texture,O.probesMin.value.copy(it.boundingBox.min),O.probesMax.value.copy(it.boundingBox.max),O.probesResolution.value.copy(it.resolution)}Fs.upload(U,Fr(At),O,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fs.upload(U,Fr(At),O,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&X.setValue(U,"center",H.center),X.setValue(U,"modelViewMatrix",H.modelViewMatrix),X.setValue(U,"normalMatrix",H.normalMatrix),X.setValue(U,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){let it=G.uniformsGroups;for(let Pt=0,lt=it.length;Pt<lt;Pt++){let Rt=it[Pt];at.update(Rt,xn),at.bind(Rt,xn)}}return xn}function pl(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function ml(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(M,F,q){let G=V.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=F,V.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let q=V.get(M);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,q=0){rt=M,Z=F,$=q;let G=null,H=!1,vt=!1;if(M){let xt=V.get(M);if(xt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,xt.__webglFramebuffer),Tt.copy(M.viewport),Lt.copy(M.scissor),de=M.scissorTest,x.viewport(Tt),x.scissor(Lt),x.setScissorTest(de),ht=-1;return}else if(xt.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(xt.__hasExternalTextures)J.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let $t=M.depthTexture;if(xt.__boundDepthTexture!==$t){if($t!==null&&V.has($t)&&(M.width!==$t.image.width||M.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(vt=!0);let Ut=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?G=Ut[F][q]:G=Ut[F],H=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?G=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?G=Ut[q]:G=Ut,Tt.copy(M.viewport),Lt.copy(M.scissor),de=M.scissorTest}else Tt.copy(Gt).multiplyScalar(ct).floor(),Lt.copy(we).multiplyScalar(ct).floor(),de=Xt;if(q!==0&&(G=Y),x.bindFramebuffer(U.FRAMEBUFFER,G)&&x.drawBuffers(M,G),x.viewport(Tt),x.scissor(Lt),x.setScissorTest(de),H){let xt=V.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,xt.__webglTexture,q)}else if(vt){let xt=F;for(let Nt=0;Nt<M.textures.length;Nt++){let Ut=V.get(M.textures[Nt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Nt,Ut.__webglTexture,q,xt)}}else if(M!==null&&q!==0){let xt=V.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xt.__webglTexture,q)}ht=-1},this.readRenderTargetPixels=function(M,F,q,G,H,vt,wt,xt=0){if(!(M&&M.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){x.bindFramebuffer(U.FRAMEBUFFER,Nt);try{let Ut=M.textures[xt],$t=Ut.format,jt=Ut.type;if(M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xt),!A.textureFormatReadable($t)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(jt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-G&&q>=0&&q<=M.height-H&&U.readPixels(F,q,G,H,pt.convert($t),pt.convert(jt),vt)}finally{let Ut=rt!==null?V.get(rt).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(M,F,q,G,H,vt,wt,xt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt)if(F>=0&&F<=M.width-G&&q>=0&&q<=M.height-H){x.bindFramebuffer(U.FRAMEBUFFER,Nt);let Ut=M.textures[xt],$t=Ut.format,jt=Ut.type;if(M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xt),!A.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ft=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ft),U.bufferData(U.PIXEL_PACK_BUFFER,vt.byteLength,U.STREAM_READ),U.readPixels(F,q,G,H,pt.convert($t),pt.convert(jt),0);let xe=rt!==null?V.get(rt).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,xe);let Ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await hu(U,Ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ft),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,vt),U.deleteBuffer(Ft),U.deleteSync(Ee),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,q=0){let G=Math.pow(2,-q),H=Math.floor(M.image.width*G),vt=Math.floor(M.image.height*G),wt=F!==null?F.x:0,xt=F!==null?F.y:0;J.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,wt,xt,H,vt),x.unbindTexture()},this.copyTextureToTexture=function(M,F,q=null,G=null,H=0,vt=0){let wt,xt,Nt,Ut,$t,jt,Ft,xe,Ee,Le=M.isCompressedTexture?M.mipmaps[vt]:M.image;if(q!==null)wt=q.max.x-q.min.x,xt=q.max.y-q.min.y,Nt=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,$t=q.min.y,jt=q.isBox3?q.min.z:0;else{let O=Math.pow(2,-H);wt=Math.floor(Le.width*O),xt=Math.floor(Le.height*O),M.isDataArrayTexture?Nt=Le.depth:M.isData3DTexture?Nt=Math.floor(Le.depth*O):Nt=1,Ut=0,$t=0,jt=0}G!==null?(Ft=G.x,xe=G.y,Ee=G.z):(Ft=0,xe=0,Ee=0);let le=pt.convert(F.format),rn=pt.convert(F.type),At;F.isData3DTexture?(J.setTexture3D(F,0),At=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(J.setTexture2DArray(F,0),At=U.TEXTURE_2D_ARRAY):(J.setTexture2D(F,0),At=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let cn=x.getParameter(U.UNPACK_ROW_LENGTH),he=x.getParameter(U.UNPACK_IMAGE_HEIGHT),xn=x.getParameter(U.UNPACK_SKIP_PIXELS),Nn=x.getParameter(U.UNPACK_SKIP_ROWS),L=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,Le.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Le.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Ut),x.pixelStorei(U.UNPACK_SKIP_ROWS,$t),x.pixelStorei(U.UNPACK_SKIP_IMAGES,jt);let k=M.isDataArrayTexture||M.isData3DTexture,X=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let O=V.get(M),ot=V.get(F),it=V.get(O.__renderTarget),Pt=V.get(ot.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,it.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let lt=0;lt<Nt;lt++)k&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(M).__webglTexture,H,jt+lt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(F).__webglTexture,vt,Ee+lt)),U.blitFramebuffer(Ut,$t,wt,xt,Ft,xe,wt,xt,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||V.has(M)){let O=V.get(M),ot=V.get(F);x.bindFramebuffer(U.READ_FRAMEBUFFER,K),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let it=0;it<Nt;it++)k?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,O.__webglTexture,H,jt+it):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,O.__webglTexture,H),X?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ot.__webglTexture,vt,Ee+it):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ot.__webglTexture,vt),H!==0?U.blitFramebuffer(Ut,$t,wt,xt,Ft,xe,wt,xt,U.COLOR_BUFFER_BIT,U.NEAREST):X?U.copyTexSubImage3D(At,vt,Ft,xe,Ee+it,Ut,$t,wt,xt):U.copyTexSubImage2D(At,vt,Ft,xe,Ut,$t,wt,xt);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else X?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(At,vt,Ft,xe,Ee,wt,xt,Nt,le,rn,Le.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(At,vt,Ft,xe,Ee,wt,xt,Nt,le,Le.data):U.texSubImage3D(At,vt,Ft,xe,Ee,wt,xt,Nt,le,rn,Le):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,vt,Ft,xe,wt,xt,le,rn,Le.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,vt,Ft,xe,Le.width,Le.height,le,Le.data):U.texSubImage2D(U.TEXTURE_2D,vt,Ft,xe,wt,xt,le,rn,Le);x.pixelStorei(U.UNPACK_ROW_LENGTH,cn),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he),x.pixelStorei(U.UNPACK_SKIP_PIXELS,xn),x.pixelStorei(U.UNPACK_SKIP_ROWS,Nn),x.pixelStorei(U.UNPACK_SKIP_IMAGES,L),vt===0&&F.generateMipmaps&&U.generateMipmap(At),x.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){Z=0,$=0,rt=null,x.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var Xo=20010923;function ye(s){Xo=s}function st(){return Xo=Xo*1103515245+12345&2147483647,Xo/2147483647}function ue(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e.getContext("2d",{willReadFrequently:!0}),e}function nn(s,t=1,e=1,n=!0){let i=new pn(s);return i.wrapS=i.wrapT=$n,i.repeat.set(t,e),n&&(i.colorSpace=je),i.anisotropy=8,i}function qo(s,t=1,e=1){let n=new pn(s);return n.wrapS=n.wrapT=$n,n.repeat.set(t,e),n.anisotropy=4,n}function ri(s,t=1.5){let e=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,e,n).data,r=ue(e,n),a=r.getContext("2d"),o=a.createImageData(e,n),l=o.data,c=(u,d)=>(u=(u+e)%e,d=(d+n)%n,i[(d*e+u)*4]/255);for(let u=0;u<n;u++)for(let d=0;d<e;d++){let f=(c(d-1,u)-c(d+1,u))*t,g=(c(d,u-1)-c(d,u+1))*t,y=Math.sqrt(f*f+g*g+1),m=(u*e+d)*4;l[m]=(f/y*.5+.5)*255,l[m+1]=(g/y*.5+.5)*255,l[m+2]=(1/y*.5+.5)*255,l[m+3]=255}a.putImageData(o,0,0);let h=new pn(r);return h.wrapS=h.wrapT=$n,h.anisotropy=4,h}function Ei(s,t,e,n,i,r=1){for(let a=0;a<e;a+=2)for(let o=0;o<t;o+=2){let l=(st()-.5)*i;s.fillStyle=`rgba(${Math.max(0,Math.min(255,n[0]+l))|0},${Math.max(0,Math.min(255,n[1]+l))|0},${Math.max(0,Math.min(255,n[2]+l))|0},${r})`,s.fillRect(o,a,2,2)}}function gn(s,t,e,n,i,r,a){for(let o=0;o<n;o++){let l=st()*t,c=st()*e,h=(.25+st()*.75)*r,u=s.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,`rgba(${i[0]},${i[1]},${i[2]},${a})`),u.addColorStop(1,`rgba(${i[0]},${i[1]},${i[2]},0)`),s.fillStyle=u,s.beginPath(),s.arc(l,c,h,0,Math.PI*2),s.fill()}}function Wu(){ye(11);let s=1024,t=1024,e=ue(s,t),n=e.getContext("2d");n.fillStyle="#b9ab92",n.fillRect(0,0,s,t),Ei(n,s,t,[185,171,146],18,.5);let i=["#d8cdb8","#9c8f78","#c4b49a","#7e7260","#e2d9c6","#8d6f5a","#5f584c"],r=[];for(let u=0;u<8200;u++){let d=st()*s,f=st()*t,g=1.5+st()*8,y=st()*i.length|0,m=[];for(let p=0;p<6;p++){let b=p/6*Math.PI*2;m.push([Math.cos(b)*g*(.6+st()*.6),Math.sin(b)*g*(.6+st()*.6)])}r.push({x:d,y:f,r:g,ci:y,verts:m,hi:st()})}let a=(u,d)=>{for(let f of r){u.fillStyle=d(f),u.beginPath(),u.moveTo(f.x+f.verts[0][0],f.y+f.verts[0][1]);for(let g=1;g<6;g++)u.lineTo(f.x+f.verts[g][0],f.y+f.verts[g][1]);u.closePath(),u.fill()}};a(n,u=>i[u.ci]);for(let u of r)u.hi<.6||(n.fillStyle="rgba(255,250,238,0.14)",n.beginPath(),n.arc(u.x-u.r*.25,u.y-u.r*.25,u.r*.32,0,Math.PI*2),n.fill());n.strokeStyle="rgba(112,88,46,0.9)",n.lineWidth=5,n.strokeRect(2,2,s-4,t-4),n.beginPath(),n.moveTo(s/2,0),n.lineTo(s/2,t),n.moveTo(0,t/2),n.lineTo(s,t/2),n.stroke(),n.strokeStyle="rgba(196,164,96,0.5)",n.lineWidth=1.5,n.strokeRect(4,4,s-8,t-8),gn(n,s,t,14,[60,52,40],240,.1),gn(n,s,t,8,[30,30,34],170,.08);let o=ue(s,t),l=o.getContext("2d");l.fillStyle="#808080",l.fillRect(0,0,s,t),a(l,u=>u.hi>.5?"#8a8a8a":"#757575"),l.fillStyle="#5a5a5a",l.fillRect(0,0,s,5),l.fillRect(0,0,5,t),l.fillRect(s/2-2,0,4,t),l.fillRect(0,t/2-2,s,4);let c=ue(s,t),h=c.getContext("2d");return h.fillStyle="#6a6a6a",h.fillRect(0,0,s,t),a(h,u=>u.hi>.5?"#4e4e4e":"#5e5e5e"),ye(311),gn(h,s,t,16,[188,188,188],220,.35),gn(h,s,t,10,[40,40,40],150,.3),h.fillStyle="#b0b0b0",h.fillRect(0,0,s,5),h.fillRect(0,0,5,t),h.fillRect(s/2-2,0,4,t),h.fillRect(0,t/2-2,s,4),{map:nn(e,3,3),normalMap:ri(o,1.15),roughnessMap:qo(c,3,3),roughness:1,metalness:.04}}function Xu(s=.6){ye(23);let t=1024,e=1024,n=ue(t,e),i=n.getContext("2d"),r=ue(t,e),a=r.getContext("2d"),o=ue(t,e),l=o.getContext("2d");a.fillStyle="#909090",a.fillRect(0,0,t,e),l.fillStyle="#c8c8c8",l.fillRect(0,0,t,e);let c=256,h=256;for(let u=0;u<e;u+=h)for(let d=0;d<t;d+=c){let f=226+(st()-.5)*14;i.fillStyle=`rgb(${f|0},${f-4|0},${f-12|0})`,i.fillRect(d+6,u+6,c-12,h-12);let g=i.createLinearGradient(d,u,d+c,u+h);if(g.addColorStop(0,"rgba(255,255,255,0.14)"),g.addColorStop(.5,"rgba(255,255,255,0)"),g.addColorStop(1,"rgba(0,0,0,0.10)"),i.fillStyle=g,i.fillRect(d+6,u+6,c-12,h-12),st()>.55){i.strokeStyle="rgba(150,140,120,0.28)",i.lineWidth=1;let m=d+st()*c,p=u+st()*h;i.beginPath(),i.moveTo(m,p);for(let b=0;b<5;b++)m+=(st()-.5)*70,p+=(st()-.5)*70,i.lineTo(m,p);i.stroke()}let y=a.createRadialGradient(d+c/2,u+h/2,10,d+c/2,u+h/2,c*.7);y.addColorStop(0,"#b2b2b2"),y.addColorStop(1,"#9a9a9a"),a.fillStyle=y,a.fillRect(d+8,u+8,c-16,h-16),l.fillStyle=`rgb(${52+st()*26|0},${52+st()*26|0},${52+st()*26|0})`,l.fillRect(d+8,u+8,c-16,h-16)}i.strokeStyle="rgba(120,112,96,1)",i.lineWidth=9;for(let u=0;u<=e;u+=h)i.beginPath(),i.moveTo(0,u),i.lineTo(t,u),i.stroke();for(let u=0;u<=t;u+=c)i.beginPath(),i.moveTo(u,0),i.lineTo(u,e),i.stroke();i.strokeStyle=`rgba(78,66,46,${.5*s})`,i.lineWidth=3;for(let u=0;u<=e;u+=h)i.beginPath(),i.moveTo(0,u+4),i.lineTo(t,u+4),i.stroke();gn(i,t,e,26*s,[92,74,50],160,.22*s),gn(i,t,e,15*s,[40,44,38],110,.18*s);for(let u=0;u<7*s;u++){let d=st()*t,f=200+st()*500,g=10+st()*30,y=i.createLinearGradient(d,0,d,f);y.addColorStop(0,`rgba(96,88,70,${.22*s})`),y.addColorStop(.7,`rgba(110,104,88,${.1*s})`),y.addColorStop(1,"rgba(96,88,70,0)"),i.fillStyle=y,i.fillRect(d-g/2,0,g,f);let m=l.createLinearGradient(d,0,d,f);m.addColorStop(0,"rgba(30,30,30,0.5)"),m.addColorStop(1,"rgba(30,30,30,0)"),l.fillStyle=m,l.fillRect(d-g/2,0,g,f)}return{map:nn(n,2,.8),normalMap:ri(r,2.2),roughnessMap:qo(o,2,.8),roughness:1,metalness:0}}function zc(s=[214,206,190],t=.7){ye(37+s[0]);let e=512,n=512,i=ue(e,n),r=i.getContext("2d");r.fillStyle=`rgb(${s[0]},${s[1]},${s[2]})`,r.fillRect(0,0,e,n),Ei(r,e,n,s,16,.45),gn(r,e,n,16*t,[s[0]-70,s[1]-70,s[2]-66],120,.16*t),gn(r,e,n,6*t,[70,60,45],160,.12*t);for(let l=0;l<8*t;l++){let c=st()*e,h=60+st()*200,u=6+st()*24,d=r.createLinearGradient(c,0,c,h);d.addColorStop(0,`rgba(88,74,54,${.18*t})`),d.addColorStop(1,"rgba(88,74,54,0)"),r.fillStyle=d,r.fillRect(c-u/2,0,u,h)}let a=ue(256,256),o=a.getContext("2d");o.fillStyle="#808080",o.fillRect(0,0,256,256),ye(9);for(let l=0;l<1400;l++)o.fillStyle=st()>.5?"#878787":"#797979",o.fillRect(st()*256,st()*256,1+st()*3,1+st()*3);return{map:nn(i,3,1.5),normalMap:ri(a,.8),roughness:.92,metalness:0}}function Yo(s=0){ye(53+s);let t=512,e=512,n=ue(t,e),i=n.getContext("2d"),r=132-s*46,a=16-s*5,o=22-s*8;i.fillStyle=`rgb(${r},${a},${o})`,i.fillRect(0,0,t,e),Ei(i,t,e,[r,a,o],26,.55);for(let h=0;h<26;h++){let u=st()*t,d=st()*e,f=40+st()*120,g=st()*Math.PI;i.save(),i.translate(u,d),i.rotate(g);let y=i.createLinearGradient(-f,0,f,0);y.addColorStop(0,"rgba(0,0,0,0)"),y.addColorStop(.5,`rgba(${Math.min(255,r+62)},${a+16},${o+18},0.13)`),y.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=y,i.beginPath(),i.ellipse(0,0,f,f*.38,0,0,Math.PI*2),i.fill(),i.restore()}for(let h=0;h<60;h++){let u=st()*t,d=st()*e,f=30+st()*80,g=i.createRadialGradient(u,d,0,u,d,f);g.addColorStop(0,`rgba(${Math.min(255,r+55)},${a+14},${o+16},0.08)`),g.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=g,i.beginPath(),i.arc(u,d,f,0,Math.PI*2),i.fill()}let l=ue(256,256),c=l.getContext("2d");c.fillStyle="#808080",c.fillRect(0,0,256,256),ye(3);for(let h=0;h<3400;h++)c.fillStyle=st()>.5?"#848484":"#7c7c7c",c.fillRect(st()*256,st()*256,2,2);return{map:nn(n,2,2),normalMap:ri(l,.6),roughness:.88,metalness:0}}function qu(){ye(61);let s=512,t=512,e=ue(s,t),n=e.getContext("2d"),i=ue(s,t),r=i.getContext("2d"),a=ue(s,t),o=a.getContext("2d");n.fillStyle="#a01018",n.fillRect(0,0,s,t),r.fillStyle="#808080",r.fillRect(0,0,s,t),o.fillStyle="#9a9a9a",o.fillRect(0,0,s,t),Ei(n,s,t,[160,16,24],14,.4);for(let l=0;l<s;l+=4){let h=(Math.sin(l*.1)*.5+Math.sin(l*.031+1.7)*.35+Math.sin(l*.007)*.15)*.5+.5;n.fillStyle=`rgba(${h>.5?255:0},${h>.5?90:0},${h>.5?80:0},${Math.abs(h-.5)*.5})`,n.fillRect(l,0,4,t),r.fillStyle=`rgb(${104+h*62|0},${104+h*62|0},${104+h*62|0})`,r.fillRect(l,0,4,t),o.fillStyle=`rgb(${176-h*88|0},${176-h*88|0},${176-h*88|0})`,o.fillRect(l,0,4,t)}n.strokeStyle="rgba(255,120,110,0.16)",n.lineWidth=3,n.beginPath(),n.moveTo(0,t*.5),n.lineTo(s,t*.5),n.stroke(),r.strokeStyle="#989898",r.lineWidth=3,r.beginPath(),r.moveTo(0,t*.5),r.lineTo(s,t*.5),r.stroke(),ye(67),gn(n,s,t,5,[70,8,12],46,.35),gn(o,s,t,5,[30,30,30],46,.5);for(let l=0;l<4200;l++)n.fillStyle=`rgba(255,150,140,${.02+st()*.03})`,n.fillRect(st()*s,st()*t,1.5,1.5);return{map:nn(e,2,1),normalMap:ri(i,2.6),roughnessMap:qo(a,2,1),roughness:1,metalness:0}}function Yu(){ye(71);let s=256,t=256,e=ue(s,t),n=e.getContext("2d"),i=ue(s,t),r=i.getContext("2d"),a=ue(s,t),o=a.getContext("2d");n.fillStyle="#c79a3a",n.fillRect(0,0,s,t),r.fillStyle="#808080",r.fillRect(0,0,s,t),o.fillStyle="#4a4a4a",o.fillRect(0,0,s,t);let l=64;for(let c=0;c<t;c+=l)for(let h=0;h<s;h+=l){let u=190+st()*40;n.fillStyle=`rgba(${u|0},${u*.76|0},${u*.3|0},0.5)`,n.fillRect(h+1,c+1,l-2,l-2),n.strokeStyle="rgba(96,66,20,0.5)",n.lineWidth=1.5,n.strokeRect(h+.5,c+.5,l-1,l-1),r.fillStyle=st()>.5?"#868686":"#7a7a7a",r.fillRect(h+1,c+1,l-2,l-2)}for(let c=0;c<130;c++){let h=st()*s,u=st()*t,d=3+st()*9;n.fillStyle=`rgba(${120+st()*60|0},${80+st()*40|0},${20+st()*20|0},0.3)`,n.beginPath(),n.arc(h,u,d,0,Math.PI*2),n.fill(),r.fillStyle="#727272",r.beginPath(),r.arc(h,u,d,0,Math.PI*2),r.fill(),o.fillStyle="rgba(150,150,150,0.55)",o.beginPath(),o.arc(h,u,d,0,Math.PI*2),o.fill()}return{map:nn(e,1,1),normalMap:ri(i,1.4),roughnessMap:qo(a,1,1),roughness:1,metalness:.9}}function Zu(){let e=ue(1024,640),n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,640);i.addColorStop(0,"#7e0e14"),i.addColorStop(.5,"#a01820"),i.addColorStop(1,"#6b0a10"),n.fillStyle=i,n.fillRect(0,0,1024,640),ye(77);for(let o=0;o<1024;o+=18){let l=.1+st()*.12,c=n.createLinearGradient(o,0,o+18,0);c.addColorStop(0,`rgba(0,0,0,${l})`),c.addColorStop(.5,"rgba(255,80,80,0.05)"),c.addColorStop(1,`rgba(0,0,0,${l})`),n.fillStyle=c,n.fillRect(o,0,18,640)}n.strokeStyle="#d8a83a",n.lineWidth=10,n.beginPath(),n.arc(1024/2,640/2,190,0,Math.PI*2),n.stroke(),n.strokeStyle="rgba(216,168,58,0.5)",n.lineWidth=3,n.beginPath(),n.arc(1024/2,640/2,205,0,Math.PI*2),n.stroke(),n.fillStyle="#e7b64c",n.font='300px "Noto Sans SC","Microsoft YaHei",serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="rgba(0,0,0,0.5)",n.shadowBlur=12,n.shadowOffsetY=6,n.fillText("\u56CD",1024/2,640/2+14),n.shadowColor="transparent",n.font='84px "Noto Sans SC","Microsoft YaHei",serif';let r="\u5929\u8D50\u826F\u7F18",a="\u6C38\u7ED3\u540C\u5FC3";for(let o=0;o<4;o++)n.fillText(r[o],1024*.16,640*.18+o*108),n.fillText(a[o],1024*.84,640*.18+o*108);return nn(e,1,1)}function $u(){ye(91);let s=512,t=512,e=ue(s,t),n=e.getContext("2d");n.fillStyle="#6e1013",n.fillRect(0,0,s,t),Ei(n,s,t,[110,16,19],24,.6),n.strokeStyle="rgba(190,150,60,0.8)",n.lineWidth=10,n.strokeRect(20,20,s-40,t-40),n.strokeStyle="rgba(190,150,60,0.35)",n.lineWidth=4,n.strokeRect(44,44,s-88,t-88),n.strokeStyle="rgba(190,150,60,0.55)",n.lineWidth=4,[[64,64],[s-64,64],[64,t-64],[s-64,t-64]].forEach(([o,l])=>{n.strokeRect(o-18,l-18,36,36),n.strokeRect(o-8,l-8,16,16)}),n.strokeStyle="rgba(190,150,60,0.45)",n.lineWidth=3,n.beginPath(),n.arc(s/2,t/2,92,0,Math.PI*2),n.stroke(),n.beginPath(),n.arc(s/2,t/2,70,0,Math.PI*2),n.stroke();for(let o=0;o<8;o++){let l=o/8*Math.PI*2,c=s/2+Math.cos(l)*81,h=t/2+Math.sin(l)*81;n.beginPath(),n.arc(c,h,13,0,Math.PI*2),n.stroke()}n.fillStyle="rgba(190,150,60,0.4)",n.font="52px serif",n.textAlign="center",n.textBaseline="middle",n.fillText("\u56CD",s/2,t/2+2);let i=n.createLinearGradient(0,0,s,0);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.5,"rgba(30,6,6,0.28)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,s,t),gn(n,s,t,9,[30,20,18],110,.25);let r=ue(256,256),a=r.getContext("2d");a.fillStyle="#808080",a.fillRect(0,0,256,256),ye(7);for(let o=0;o<7e3;o++)a.fillStyle=st()>.5?"#868686":"#7a7a7a",a.fillRect(st()*256,st()*256,1.5,1.5);return{map:nn(e,1,4),normalMap:ri(r,.7),roughness:.95,metalness:0}}function Ju(){ye(101);let s=256,t=256,e=ue(s,t),n=e.getContext("2d");n.fillStyle="#3d5a48",n.fillRect(0,0,s,t),Ei(n,s,t,[61,90,72],10,.4);let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"rgba(255,255,255,0.08)"),i.addColorStop(1,"rgba(0,0,0,0.22)"),n.fillStyle=i,n.fillRect(0,0,s,t),gn(n,s,t,10,[24,30,26],70,.25);for(let r=0;r<12;r++){n.fillStyle="rgba(150,140,120,0.10)";let a=st()*s,o=t*.6+st()*t*.4;n.beginPath(),n.ellipse(a,o,8+st()*26,4+st()*8,st(),0,Math.PI*2),n.fill()}return{map:nn(e,4,1),roughness:.5,metalness:.05}}function Ku(s=0,t=1){ye(113+s*40|0);let e=256,n=256,i=ue(e,n),r=i.getContext("2d"),a=96-s*40,o=58-s*26,l=36-s*16;r.fillStyle=`rgb(${a},${o},${l})`,r.fillRect(0,0,e,n);let c=ue(e,n),h=c.getContext("2d");h.fillStyle="#808080",h.fillRect(0,0,e,n);for(let u=0;u<e;u++){let d=Math.sin(u*.11)*6+Math.sin(u*.037)*14;for(let f=0;f<n;f+=4){let g=Math.sin((f+d)*.16*t)*.5+.5;r.fillStyle=`rgba(0,0,0,${g*.22})`,r.fillRect(u,f,1,4),h.fillStyle=`rgb(${128-g*34},${128-g*34},${128-g*34})`,h.fillRect(u,f,1,4)}}return gn(r,e,n,5,[20,14,10],60,.2),{map:nn(i,2,2),normalMap:ri(c,1.6),roughness:.62,metalness:.02}}function Zo(s,t=!1){let i=ue(256,160),r=i.getContext("2d");return r.fillStyle=t?"#8e1016":"#a51920",r.fillRect(0,0,256,160),r.strokeStyle="#d8a83a",r.lineWidth=6,r.strokeRect(8,8,240,144),r.fillStyle="#e7c25c",r.font=`${s.length>2?64:84}px "Noto Sans SC","Microsoft YaHei",serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(s,256/2,160/2+4),nn(i,1,1)}function qn(s,t="#e8e2d2",e="#233225",n=96){let a=ue(512,160),o=a.getContext("2d");return o.fillStyle=e,o.fillRect(0,0,512,160),o.strokeStyle="rgba(255,255,255,0.25)",o.lineWidth=4,o.strokeRect(6,6,500,148),o.fillStyle=t,o.font=`${n}px "Noto Sans SC","Microsoft YaHei",sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(s,512/2,160/2+4),nn(a,1,1)}function Gc(){ye(131);let s=1024,t=1024,e=ue(s,t),n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#2a7a86"),i.addColorStop(.45,"#155059"),i.addColorStop(1,"#072028"),n.fillStyle=i,n.fillRect(0,0,s,t);for(let r=0;r<44;r++){let a=st()*s,o=18+st()*90,l=n.createLinearGradient(a,0,a+o*.4,t*.55);l.addColorStop(0,`rgba(120,220,210,${.1+st()*.12})`),l.addColorStop(1,"rgba(120,220,210,0)"),n.fillStyle=l,n.beginPath(),n.moveTo(a,0),n.lineTo(a+o,0),n.lineTo(a+o*.55+26,t*.6),n.lineTo(a+26,t*.6),n.closePath(),n.fill()}for(let r=0;r<2600;r++){let a=st()*t;n.fillStyle=`rgba(140,210,200,${.03+st()*.09*(1-a/t)})`,n.fillRect(st()*s,a,1+st()*2.5,1+st()*2.5)}for(let r=0;r<6;r++){let a=st()*s,o=t*.35+st()*t*.5,l=140+st()*300,c=n.createRadialGradient(a,o,l*.2,a,o,l);c.addColorStop(0,"rgba(0,4,6,0.55)"),c.addColorStop(1,"rgba(0,4,6,0)"),n.fillStyle=c,n.beginPath(),n.arc(a,o,l,0,Math.PI*2),n.fill()}return nn(e,2,1)}function $o(){ye(151);let s=256,t=256,e=ue(s,t),n=e.getContext("2d");n.fillStyle="#54483a",n.fillRect(0,0,s,t);for(let i=0;i<t;i+=8+st()*10|0){let r=60+st()*50;n.fillStyle=`rgba(${r+20|0},${r|0},${r*.7|0},0.8)`,n.fillRect(0,i,s,5+st()*8)}for(let i=0;i<300;i++)n.fillStyle=`rgba(200,190,160,${.06+st()*.1})`,n.fillRect(st()*s,st()*t,2+st()*5,1+st()*2);return{map:nn(e,1,1),roughness:.9,metalness:0}}function Qu(){let s=ue(64,64),t=s.getContext("2d");return t.fillStyle="#b3121c",t.fillRect(0,0,64,64),t.fillStyle="rgba(255,220,120,0.9)",t.font="40px serif",t.textAlign="center",t.textBaseline="middle",t.fillText("\u56CD",32,34),nn(s,1,1)}function ju(){ye(171);let s=512,t=512,e=ue(s,t),n=e.getContext("2d");n.fillStyle="#6e6a62",n.fillRect(0,0,s,t),Ei(n,s,t,[110,106,98],18,.5),gn(n,s,t,18,[40,40,40],140,.16),gn(n,s,t,8,[55,62,58],100,.14),n.strokeStyle="rgba(0,0,0,0.28)",n.lineWidth=3;for(let a=0;a<t;a+=170)n.beginPath(),n.moveTo(0,a),n.lineTo(s,a),n.stroke();let i=ue(256,256),r=i.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,256,256),ye(5);for(let a=0;a<900;a++)r.fillStyle=st()>.5?"#858585":"#7b7b7b",r.fillRect(st()*256,st()*256,2+st()*4,2+st()*4);return{map:nn(e,3,2),normalMap:ri(i,1),roughness:.95,metalness:0}}function td(s="mc"){ye(s==="mc"?191:193);let t=512,e=512,n=ue(t,e),i=n.getContext("2d");i.fillStyle="#c8a084",i.fillRect(0,0,t,e),Ei(i,t,e,[200,160,132],12,.4),gn(i,t,e,4,[190,120,105],90,.2),i.fillStyle="rgba(150,140,140,0.16)",i.beginPath(),i.ellipse(t*.38,e*.47,34,14,.1,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.475,34,14,-.1,0,Math.PI*2),i.fill();for(let a=0;a<2600;a++)i.fillStyle=`rgba(120,86,66,${.03+st()*.05})`,i.fillRect(st()*t,st()*e,1.4,1.4);let r=s==="mc"?6:0;if(i.fillStyle="rgba(70,50,44,0.5)",i.beginPath(),i.ellipse(t*.38,e*.42,30,17,.06,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.42+r,30,17,-.06,0,Math.PI*2),i.fill(),s==="mc"?(i.fillStyle="rgba(232,226,214,0.9)",i.beginPath(),i.ellipse(t*.38,e*.42,13,8,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.42+r,13,8,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(20,16,14,0.95)",i.beginPath(),i.ellipse(t*.38,e*.42,6.5,6.5,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.42+r,6.5,6.5,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.5)",i.fillRect(t*.38-2,e*.42-4,3,3),i.fillRect(t*.62-2,e*.42+r-4,3,3),i.strokeStyle="rgba(96,66,54,0.7)",i.lineWidth=3,i.beginPath(),i.moveTo(t*.31,e*.405),i.quadraticCurveTo(t*.38,e*.385,t*.45,e*.405),i.stroke(),i.beginPath(),i.moveTo(t*.55,e*.405+r),i.quadraticCurveTo(t*.62,e*.385+r,t*.69,e*.405+r),i.stroke()):(i.strokeStyle="rgba(88,58,48,0.85)",i.lineWidth=3.4,i.beginPath(),i.moveTo(t*.3,e*.42),i.quadraticCurveTo(t*.38,e*.445,t*.46,e*.42),i.stroke(),i.beginPath(),i.moveTo(t*.54,e*.42),i.quadraticCurveTo(t*.62,e*.445,t*.7,e*.42),i.stroke(),i.strokeStyle="rgba(88,58,48,0.35)",i.lineWidth=6,i.beginPath(),i.moveTo(t*.31,e*.435),i.quadraticCurveTo(t*.38,e*.455,t*.45,e*.435),i.stroke(),i.beginPath(),i.moveTo(t*.55,e*.435),i.quadraticCurveTo(t*.62,e*.455,t*.69,e*.435),i.stroke()),i.strokeStyle="rgba(46,32,26,0.8)",i.lineWidth=5,i.beginPath(),i.moveTo(t*.3,e*.355),i.quadraticCurveTo(t*.38,e*.335,t*.46,e*.35),i.stroke(),i.beginPath(),i.moveTo(t*.54,e*.35+r*.5),i.quadraticCurveTo(t*.62,e*.335+r*.5,t*.7,e*.355+r*.5),i.stroke(),i.fillStyle="rgba(150,110,90,0.4)",i.beginPath(),i.ellipse(t*.5,e*.55,11,24,0,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(140,96,76,0.4)",i.lineWidth=3,i.beginPath(),i.moveTo(t*.44,e*.6),i.quadraticCurveTo(t*.42,e*.66,t*.44,e*.7),i.stroke(),i.beginPath(),i.moveTo(t*.56,e*.6),i.quadraticCurveTo(t*.58,e*.66,t*.56,e*.7),i.stroke(),s==="mc"){for(let o=0;o<480;o++){let l=st()*Math.PI*2,c=Math.pow(st(),.7)*62,h=t*.5+Math.cos(l)*c*1.5,u=e*.68+Math.sin(l)*c*.62,d=2.5+st()*6,f=i.createRadialGradient(h-d*.3,u-d*.3,0,h,u,d);f.addColorStop(0,"rgba(240,231,208,0.96)"),f.addColorStop(.55,"rgba(206,189,158,0.92)"),f.addColorStop(1,"rgba(130,112,88,0.85)"),i.fillStyle=f,i.beginPath(),i.arc(h,u,d,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,252,240,0.5)",i.beginPath(),i.arc(h-d*.3,u-d*.35,d*.22,0,Math.PI*2),i.fill()}let a=i.createRadialGradient(t*.5,e*.68,55,t*.5,e*.68,110);a.addColorStop(0,"rgba(178,92,74,0.3)"),a.addColorStop(1,"rgba(178,92,74,0)"),i.fillStyle=a,i.beginPath(),i.arc(t*.5,e*.68,110,0,Math.PI*2),i.fill()}else i.strokeStyle="rgba(110,70,60,0.85)",i.lineWidth=4,i.beginPath(),i.moveTo(t*.4,e*.68),i.quadraticCurveTo(t*.5,e*.735,t*.6,e*.68),i.stroke(),i.strokeStyle="rgba(190,140,120,0.4)",i.lineWidth=2,i.beginPath(),i.moveTo(t*.41,e*.695),i.quadraticCurveTo(t*.5,e*.75,t*.59,e*.695),i.stroke();return[[.5,.28,60,26],[.5,.5,10,34],[.33,.5,20,10],[.67,.5,20,10]].forEach(([a,o,l,c])=>{let h=i.createRadialGradient(t*a,e*o,0,t*a,e*o,Math.max(l,c));h.addColorStop(0,"rgba(255,238,220,0.18)"),h.addColorStop(1,"rgba(255,238,220,0)"),i.fillStyle=h,i.beginPath(),i.ellipse(t*a,e*o,l,c,0,0,Math.PI*2),i.fill()}),nn(n,1,1)}function ed(){ye(233);let s=256,t=256,e=ue(s,t),n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#a50f16"),i.addColorStop(.6,"#8e0c12"),i.addColorStop(1,"#6b080e"),n.fillStyle=i,n.fillRect(0,0,s,t),Ei(n,s,t,[150,16,22],18,.35);for(let r=0;r<s;r+=10)n.fillStyle=`rgba(255,120,110,${.03+st()*.05})`,n.fillRect(r,0,3,t);n.fillStyle="rgba(216,168,58,0.9)",n.font="28px serif",n.textAlign="center",n.textBaseline="middle";for(let r=0;r<6;r++)n.fillText("\u56CD",24+r*42,t*.35+r%2*26);n.strokeStyle="#d8a83a",n.lineWidth=4,n.beginPath(),n.moveTo(0,t-26),n.lineTo(s,t-26),n.stroke(),n.lineWidth=2;for(let r=6;r<s;r+=13)n.beginPath(),n.moveTo(r,t-24),n.lineTo(r+(st()-.5)*4,t-4),n.stroke();return nn(e,1,1)}function nd(){ye(211);let s=256,t=256,e=ue(s,t),n=e.getContext("2d");n.fillStyle="#8d7a64",n.fillRect(0,0,s,t);let i=ue(s,t),r=i.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,s,t);for(let a=0;a<t;a++){let o=Math.sin(a*.08)*8+Math.sin(a*.023)*20;for(let l=0;l<s;l+=3){let c=Math.sin((l+o)*.22)*.5+.5;n.fillStyle=`rgba(40,30,22,${c*.4})`,n.fillRect(l,a,3,1),r.fillStyle=`rgb(${128-c*52|0},${128-c*52|0},${128-c*52|0})`,r.fillRect(l,a,3,1)}}return{map:nn(e,1,1),normalMap:ri(i,2.2),roughness:.85,metalness:0}}function id(s){let t=new _i;t.background=new zt(1708560);let e=new W(new re(10,16,8),new se({color:5579288,side:un}));t.add(e);let n=new W(new re(1.4,8,8),new se({color:16767392}));n.position.set(0,6,0),t.add(n);let i=new W(new re(.9,8,8),new se({color:16732224}));i.position.set(4,2,-4),t.add(i);let r=new Bs(s),a=r.fromScene(t,.2);return r.dispose(),a.texture}function sd(s,t){let e={colliders:[],regions:[],lights:{hall:[],corridor:[],lobby:[],aqua:[],connector:[]},screens:[],future:{},dyn:{},mats:{}},n=id(t);s.environment=n;let i=Wu(),r=e.mats;r.terrazzo=new j({...i,envMapIntensity:.5}),r.terrazzoDark=new j({...i,color:9405817,envMapIntensity:.3});let a=Xu();r.tiles=new j({...a,envMapIntensity:.6}),r.tiles.userData.tileEvery=1.3;let o=zc();r.plaster=new j({...o}),r.plaster.userData.tileEvery=3.6;let l=zc([158,96,84],.9);r.plasterHall=new j({...l}),r.plasterHall.userData.tileEvery=4.2;let c=Yo();r.velvet=new j({...c});let h=Yo(1);r.velvetDark=new j({...h});let u=qu();r.tablecloth=new j({...u});let d=Yu();r.goldFoil=new j({...d,envMapIntensity:1.5});let f=$u();r.carpet=new j({...f}),r.wainscot=new j({...Ju()});let g=Ku();r.wood=new j({...g,envMapIntensity:.5});let y=ju();r.concrete=new j({...y}),r.concrete.userData.tileEvery=3.4,r.concreteWet=new j({...y,color:5658192,roughness:.24,envMapIntensity:1.2}),r.gold=new j({color:13081146,metalness:.9,roughness:.3,envMapIntensity:1.4}),r.steel=new j({color:10133670,metalness:.95,roughness:.22,envMapIntensity:1.6}),r.steelDark=new j({color:3948612,metalness:.8,roughness:.5}),r.black=new j({color:1315860,roughness:.8}),r.white=new j({color:14210248,roughness:.85}),r.ceiling=new j({color:6182476,roughness:.95}),r.ceilingHall=new j({color:4862512,roughness:.95}),r.glassSea=new j({map:Gc(),roughness:.05,metalness:.3,envMapIntensity:2,emissive:667704,emissiveIntensity:.55}),r.sediment=new j({...$o()}),r.porcelain=new j({color:15262938,roughness:.15,envMapIntensity:1.2}),r.bottleGreen=new j({color:1722922,roughness:.05,metalness:.1,envMapIntensity:1.8}),r.calcite=new j({color:14275262,roughness:.65});let m=(L,k,X,O,ot,it,Pt,lt={})=>{let Rt=new W(new Ce(L,k,X),O);return Rt.position.set(ot,it,Pt),lt.ry&&(Rt.rotation.y=lt.ry),lt.rx&&(Rt.rotation.x=lt.rx),Rt.castShadow=!!lt.cast,Rt.receiveShadow=lt.recv!==!1,s.add(Rt),lt.collide&&e.colliders.push({minX:ot-L/2-.05,minZ:Pt-X/2-.05,maxX:ot+L/2+.05,maxZ:Pt+X/2+.05}),Rt},p=(L,k,X,O,ot,it,Pt=0,lt=0)=>{let Rt=new W(new ge(L,k),X);return Rt.position.set(O,ot,it),Rt.rotation.y=Pt,Rt.rotation.x=lt,Rt.receiveShadow=!0,s.add(Rt),Rt},b=(L,k,X,O=2.6)=>{let ot=L.clone();for(let it of["map","normalMap","roughnessMap"])ot[it]&&(ot[it]=ot[it].clone(),ot[it].needsUpdate=!0,ot[it].repeat.set(k/O,X/O));return ot},w=(L,k,X,O)=>e.colliders.push({minX:Math.min(L,X),minZ:Math.min(k,O),maxX:Math.max(L,X),maxZ:Math.max(k,O)}),v=(L,k,X)=>{let O=L.userData.tileEvery;if(!O)return L;let ot=`${L.uuid}_${(k/O).toFixed(1)}_${(X/O).toFixed(1)}`;if(v.cache=v.cache||{},v.cache[ot])return v.cache[ot];let it=L.clone();for(let Pt of["map","normalMap","roughnessMap"])it[Pt]&&(it[Pt]=it[Pt].clone(),it[Pt].needsUpdate=!0,it[Pt].repeat.set(Math.max(1,k/O),Math.max(.6,X/O)));return v.cache[ot]=it,it};function T(L,k,X,O,ot,it=[],Pt=0,lt=.3){let Rt=[[k,X]];for(let[Ot,kt]of it){let De=[];for(let[Qe,_n]of Rt){if(kt<=Qe||Ot>=_n){De.push([Qe,_n]);continue}Ot>Qe&&De.push([Qe,Ot]),kt<_n&&De.push([kt,_n])}Rt=De}for(let[Ot,kt]of Rt)m(kt-Ot,O,lt,v(ot,kt-Ot,O),(Ot+kt)/2,Pt+O/2,L,{collide:!0});for(let[Ot,kt]of it)m(kt-Ot,O-2.3,lt,v(ot,kt-Ot,O-2.3),(Ot+kt)/2,Pt+2.3+(O-2.3)/2,L)}function S(L,k,X,O,ot,it=[],Pt=0,lt=.3){let Rt=[[k,X]];for(let[Ot,kt]of it){let De=[];for(let[Qe,_n]of Rt){if(kt<=Qe||Ot>=_n){De.push([Qe,_n]);continue}Ot>Qe&&De.push([Qe,Ot]),kt<_n&&De.push([kt,_n])}Rt=De}for(let[Ot,kt]of Rt)m(lt,O,kt-Ot,v(ot,kt-Ot,O),L,Pt+O/2,(Ot+kt)/2,{collide:!0});for(let[Ot,kt]of it)m(lt,O-2.3,kt-Ot,v(ot,kt-Ot,O-2.3),L,Pt+2.3+(O-2.3)/2,(Ot+kt)/2)}let C=(L,k,X,O,ot,it,Pt,lt=!1)=>{let Rt=new Bi(L,k,X,1.8);return Rt.position.set(O,ot,it),lt&&(Rt.castShadow=!0,Rt.shadow.mapSize.set(512,512),Rt.shadow.bias=-.004),s.add(Rt),Rt.userData.base=k,e.lights[Pt].push(Rt),Rt};p(30,20,b(r.terrazzo,30,20),0,0,-10,0,-Math.PI/2).receiveShadow=!0,p(30,20,r.ceilingHall,0,7,-10,0,Math.PI/2);let _=p(4.2,17,r.carpet,0,.02,-8.5,0,-Math.PI/2);_.material=r.carpet,T(-20,-15,15,7,r.plasterHall,[[-8,8]]),T(0,-15,15,7,r.plasterHall,[[-1.8,1.8]]),S(-15,-20,0,7,r.plasterHall,[[-7.6,-4.4]]),S(15,-20,0,7,r.plasterHall,[[-7.6,-4.4]]);let E=new ae,P=m(1.7,3.4,.12,r.wood,-.85,1.7,0,{}),I=m(1.7,3.4,.12,r.wood,.85,1.7,0,{});E.userData={dL:P,dR:I},e.dyn.doorS=E,w(-1.8,-.2,1.8,.2),e.dyn.doorSCollider=e.colliders[e.colliders.length-1],m(16,.6,3.2,r.velvetDark,0,.3,-18.4,{collide:!0}),m(16.1,.1,3.26,r.goldFoil,0,.62,-18.4,{}),m(4,.15,1.2,r.velvetDark,0,.07,-16.6,{}),m(4.04,.04,1.24,r.goldFoil,0,.155,-16.6,{});let N=p(14,5.4,new j({map:Zu(),roughness:.85}),0,3.6,-19.7);N.material.emissive=new zt(1704708),m(1.6,6.4,.4,r.velvet,-7.4,3.2,-19.4,{}),m(1.6,6.4,.4,r.velvet,7.4,3.2,-19.4,{}),m(.7,1.1,.6,r.black,-7.2,1.75,-17.6,{cast:!0}),m(.7,1.1,.6,r.black,7.2,1.75,-17.6,{cast:!0}),m(.12,1.2,.12,r.steelDark,-7.2,.6,-17.6,{}),m(.12,1.2,.12,r.steelDark,7.2,.6,-17.6,{});let Y=new se({color:10336432}),K=p(3.6,2.7,Y,-11.5,4,-19.55);e.screens.push({id:"T03",mesh:K,mat:Y,kind:"vcr"});let z=[[-6.5,-6],[6.5,-6],[-11,-9.5],[11,-9.5],[-6.5,-12.5],[6.5,-12.5],[-11,-3],[11,-3]],Z=[0,-13.5],$=new Qt(1.15,1.15,.76,20),rt=new Qt(1.18,1.45,.76,20,1,!0),ht=new Qt(.62,.62,.04,18),Mt=new j({color:10135706,roughness:.05,metalness:.4,envMapIntensity:1.6}),Tt=new Qt(.22,.26,.52,10),Lt=new Ce(.44,.62,.09),de=new Qt(.12,.09,.025,12),Pe=new Qt(.03,.024,.09,8),fe=new Qt(.04,.045,.3,8),tt=[...z,Z],ft=new An(de,r.porcelain,tt.length*8),ct=new An(Pe,r.porcelain,tt.length*8),qt=new An(Tt,r.velvet,tt.length*6),Jt=new An(Lt,r.velvet,tt.length*6);ft.castShadow=ct.castShadow=!1,qt.castShadow=!0;let Gt=0,we=0,Xt=new ke;tt.forEach(([L,k],X)=>{let O=X===tt.length-1,ot=new W($,r.wood);ot.position.set(L,.38,k),ot.castShadow=!0,s.add(ot);let it=new W(rt,r.tablecloth);it.position.set(L,.38,k),it.rotation.y=X*.9,s.add(it);let Pt=new W(new Qt(1.16,1.16,.03,20),r.tablecloth);Pt.position.set(L,.775,k),s.add(Pt);let lt=new W(ht,Mt);lt.position.set(L,.81,k),s.add(lt),w(L-1.25,k-1.25,L+1.25,k+1.25);for(let Ot=0;Ot<8;Ot++){let kt=Ot/8*Math.PI*2;Xt.position.set(L+Math.cos(kt)*.92,.8,k+Math.sin(kt)*.92),Xt.rotation.set(0,0,0),Xt.updateMatrix(),ft.setMatrixAt(Gt,Xt.matrix),Xt.position.set(L+Math.cos(kt)*.78,.85,k+Math.sin(kt)*.78),Xt.updateMatrix(),ct.setMatrixAt(Gt,Xt.matrix),Gt++}for(let Ot=0;Ot<6;Ot++){let kt=Ot/6*Math.PI*2+(O?.5:0),De=L+Math.cos(kt)*1.62,Qe=k+Math.sin(kt)*1.62;Xt.position.set(De,.26,Qe),Xt.rotation.set(0,-kt+Math.PI/2,0),Xt.updateMatrix(),qt.setMatrixAt(we,Xt.matrix),Xt.position.set(De+Math.cos(kt)*.24,.82,Qe+Math.sin(kt)*.24),Xt.updateMatrix(),Jt.setMatrixAt(we,Xt.matrix),we++}let Rt=new W(fe,r.bottleGreen);Rt.position.set(L+.4,.95,k+.2),Rt.castShadow=!0,s.add(Rt)}),s.add(ft,ct,qt,Jt);let Me=Z[0]+2.1,pe=Z[1],te=new ae,Be=new W(new Ce(.5,1,.5),r.velvet);Be.position.y=.5,te.add(Be);let Ve=new W(new Ce(.5,.72,.1),r.velvet);Ve.position.set(0,1.3,.22),te.add(Ve);let We=new W(new ge(.62,.9),new j({color:12587032,roughness:.7,side:Te,emissive:3146762}));We.position.set(0,1.35,.28),We.rotation.x=-.15,te.add(We),te.position.set(Me,0,pe),te.rotation.y=-Math.PI/2,s.add(te),e.dyn.vipChair=te;let Ke=new j({map:Zo("\u4E0A\u5BBE"),roughness:.8,side:Te}),Ae=p(.28,.18,Ke,Z[0]+1,.89,Z[1],-Math.PI/2);Ae.rotation.x=-.3,e.dyn.vipCard=Ae;let Oe=new j({map:Zo("\u4F34\u5A18"),roughness:.8,side:Te}),U=p(.28,.18,Oe,Z[0]-1,.89,Z[1],Math.PI/2);U.rotation.x=-.3,e.dyn.cardYou={mesh:U,mat:Oe,flip:Zo("\u4E0A\u5BBE",!0)};function sn(L,k,X){let O=new ae,ot=new W(new Rn(.9,.06,8,24),r.gold);ot.rotation.x=Math.PI/2,O.add(ot);let it=new W(new Rn(.5,.05,8,20),r.gold);it.rotation.x=Math.PI/2,it.position.y=.4,O.add(it);let Pt=new j({color:16767392,emissive:16757854,emissiveIntensity:2.2});for(let Ot=0;Ot<8;Ot++){let kt=Ot/8*Math.PI*2,De=new W(new re(.07,8,8),Pt);De.position.set(Math.cos(kt)*.9,.12,Math.sin(kt)*.9),O.add(De)}let lt=new W(new Qt(.02,.02,1.4,6),r.gold);lt.position.y=1,O.add(lt),O.position.set(L,5.4,k),s.add(O);let Rt=C(16760952,55,26,L,5,k,X,X==="hall");return{group:O,light:Rt,bulbMat:Pt}}e.dyn.chand1=sn(0,-5,"hall"),e.dyn.chand2=sn(0,-12,"hall"),[[-14.7,-4],[-14.7,-12],[14.7,-4],[14.7,-12]].forEach(([L,k])=>{let X=m(.24,.5,.18,r.gold,L,3.2,k,{});X.material=r.gold,C(16756832,8,9,L+(L<0?.4:-.4),3.3,k,"hall")});let ee=new _r(16769200,260,30,.32,.45,1.4);ee.position.set(0,6.6,-12),ee.target.position.set(0,1.4,-18.2),ee.castShadow=!0,ee.shadow.mapSize.set(1024,1024),ee.shadow.bias=-.002,s.add(ee,ee.target),e.lights.hall.push(ee),ee.userData.base=260,e.dyn.stageSpot=ee;let A=new j({color:11538968,emissive:2753542,roughness:.8}),x=new j({color:13081146,metalness:.6,roughness:.4});e.dyn.garlands=[];for(let L=0;L<5;L++){let O=-17+L*3.6,ot=[];for(let Pt=0;Pt<=16;Pt++){let lt=Pt/16;ot.push(new R(-15+30*lt,6.4-Math.sin(lt*Math.PI)*.9,O))}let it=new W(new Cn(new Sn(ot),24,.035,5),L%2?x:A);s.add(it),e.dyn.garlands.push(it)}let B=new j({color:12589090,roughness:.25,envMapIntensity:1.2}),V=new j({color:14200912,roughness:.25,envMapIntensity:1.2});[[-13.5,-1.5],[13.5,-1.5],[-13.5,-18],[13.5,-18]].forEach(([L,k],X)=>{for(let O=0;O<5;O++){let ot=new W(new re(.16,10,10),O%2?V:B);ot.position.set(L+Math.sin(O*2.1)*.3,2.2+O*.28,k+Math.cos(O*1.7)*.3),ot.scale.y=1.15,s.add(ot)}});let J=new j({map:Qu(),roughness:.9});[[-15,-9,Math.PI/2],[15,-9,-Math.PI/2],[-8,.15-0,0],[8,0,0]].forEach(([L,k,X],O)=>{O<2?p(1.1,1.1,J,L+(L<0?.16:-.16),3.4,k,X):p(1.1,1.1,J,L,3.4,-.16,Math.PI)});let ut=new ae,mt=new j({color:7031356,roughness:.85,emissive:1182214});for(let L=0;L<7;L++){let k=-16.5+L*2.6,X=10.6-Math.abs(L-3)*.45,O=new W(new Rn(X,.62-.04*Math.abs(L-3),9,26,Math.PI),mt);O.position.set(0,.1,k),O.scale.set(1.32,.66,1),O.rotation.z=(L%2?1:-1)*.05,ut.add(O)}ut.visible=!1,s.add(ut),e.dyn.throat=ut,e.regions.push({name:"\u5BB4\u4F1A\u5385",box:[-15,-20,15,0],mat:"carpet"}),p(25,3.6,b(r.terrazzoDark,25,3.6),27.5,0,-6.2,0,-Math.PI/2),p(3.6,18.4,b(r.terrazzoDark,3.6,18.4),38.2,0,4.8,0,-Math.PI/2),p(25,3.6,r.ceiling,27.5,3.2,-6.2,0,Math.PI/2),p(3.6,18.4,r.ceiling,38.2,3.2,4.8,0,Math.PI/2);function Q(L,k,X,O=[]){T(L,k,X,1.25,r.tiles,O),T(L,k,X,1.95,r.plaster,O,1.25)}function et(L,k,X,O=[]){S(L,k,X,1.25,r.tiles,O),S(L,k,X,1.95,r.plaster,O,1.25)}Q(-8,15,40,[]),Q(-4.4,15,36.4,[]),et(40,-8,14,[]),et(36.4,-4.4,14,[]);let gt=new j({color:3024416,roughness:.9});[[20,-8],[28,-8],[34,-8]].forEach(([L,k])=>{p(1.1,2.2,gt,L,1.1,k+.16),p(.9,.28,new j({map:qn(L===28?"\u5DE5\u4F5C\u95F4":"\u540E\u53A8","#ddd6c2","#37322a",88),roughness:.9}),L,2.42,k+.17)}),p(.9,.28,new j({map:qn("\u5BB4\u4F1A\u5385 \u2192","#e8e2d2","#233225",80),roughness:.9}),16.5,2.5,-4.6-.16,Math.PI),e.dyn.tubes=[];let Bt=()=>new j({color:15397606,emissive:13625560,emissiveIntensity:2.6});[[18,-6.2,0],[25,-6.2,0],[32,-6.2,0],[38.2,-1,1],[38.2,5,1],[38.2,11,1]].forEach(([L,k,X],O)=>{let ot=Bt(),it=m(X?.12:1.4,.06,X?1.4:.12,ot,L,3.12,k,{}),Pt=C(14217436,O%2===0?16:12,11,L,2.8,k,"corridor");e.dyn.tubes.push({mesh:it,mat:ot,light:Pt,flicker:O===2})});function yt(L,k,X){let O=new ae,ot=new W(new Ce(1.1,.08,.6),r.steel);ot.position.y=.85,O.add(ot);let it=ot.clone();it.position.y=.3,O.add(it);for(let[lt,Rt]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]]){let Ot=new W(new Qt(.02,.02,.85,6),r.steelDark);Ot.position.set(lt,.45,Rt),O.add(Ot)}for(let lt=0;lt<3;lt++){let Rt=new W(new Qt(.16,.16,.34,12),r.porcelain);Rt.position.set(-.32+lt*.32,1.07,0),O.add(Rt)}let Pt=new W(new ge(.7,.5),r.velvet);return Pt.position.set(.2,.62,.31),Pt.rotation.x=-.2,O.add(Pt),O.position.set(L,0,k),O.rotation.y=X,s.add(O),w(L-.65,k-.4,L+.65,k+.4),O}yt(22,-7.4,0),yt(38.9,2,Math.PI/2);let _t=new j({color:9312788,roughness:.8});for(let L=0;L<4;L++)m(.6,.35,.42,_t,30.5+L%2*.65,.18+Math.floor(L/2)*.37,-7.5,{collide:L<2});for(let L=0;L<6;L++){let k=m(1.6+Math.random()*1.2,.1+Math.random()*.14,.24,r.sediment,17+L*3.8,.08,-7.75,{});k.rotation.z=(Math.random()-.5)*.06}m(24.9,.1,.1,r.steelDark,27.5,3,-7.7,{}),m(.1,.1,18.2,r.steelDark,39.7,3,4.8,{}),e.regions.push({name:"\u670D\u52A1\u8D70\u5ECA",box:[15,-8,40,-4.4],mat:"terrazzo"}),e.regions.push({name:"\u670D\u52A1\u8D70\u5ECA",box:[36.4,-4.4,40,14],mat:"terrazzo"}),p(24,16,b(r.terrazzo,24,16),36,0,22,0,-Math.PI/2),p(24,16,r.ceiling,36,8,22,0,Math.PI/2),p(4.5,14,r.carpet,36,.02,22.8,0,-Math.PI/2),T(30,24,48,8,r.plaster,[[33,39]]),T(14,24,48,8,r.plaster,[[36.4,40]]),S(24,14,30,8,r.plaster,[[20,23.2]]),S(48,14,30,8,r.plaster,[]);let Ht=new j({color:3160378,roughness:.04,metalness:.4,transparent:!0,opacity:.5,envMapIntensity:2});m(6,3.4,.1,Ht,36,1.7,30,{}),w(32.8,29.8,39.2,30.2),m(.14,3.4,.14,r.steel,33,1.7,30,{}),m(.14,3.4,.14,r.steel,39,1.7,30,{}),m(.14,3.4,.14,r.steel,36,1.7,30,{});let Wt=new se({color:13161672,transparent:!0,opacity:.22,depthWrite:!1});p(14,6,Wt,36,2.5,36,Math.PI);let Zt=document.createElement("canvas");Zt.width=Zt.height=128;let D=Zt.getContext("2d"),dt=D.createRadialGradient(64,64,2,64,64,62);dt.addColorStop(0,"rgba(255,244,210,1)"),dt.addColorStop(.25,"rgba(255,236,190,0.55)"),dt.addColorStop(.6,"rgba(220,200,160,0.14)"),dt.addColorStop(1,"rgba(0,0,0,0)"),D.fillStyle=dt,D.fillRect(0,0,128,128);let nt=new pn(Zt),pt=new se({map:nt,color:16773836,transparent:!0,opacity:0,depthWrite:!1,blending:In,fog:!1}),Et=p(2.6,1.7,pt,33.5,1,35,Math.PI),at=p(2.6,1.7,pt,38.5,1,35.5,Math.PI);e.dyn.headlights={mat:pt,m1:Et,m2:at},[[30,18],[42,18],[30,26],[42,26]].forEach(([L,k])=>{let X=new W(new Qt(.55,.55,8,20),r.steel);X.position.set(L,4,k),X.castShadow=!0,s.add(X),w(L-.6,k-.6,L+.6,k+.6);let O=new W(new Qt(.68,.62,.3,20),r.gold);O.position.set(L,.15,k),s.add(O)});let It=sn(36,22,"lobby");It.group.scale.setScalar(1.8),It.group.position.y=6.2,It.light.position.y=5.8,It.light.intensity=110,It.light.userData.base=110,It.light.castShadow=!0,It.light.shadow.mapSize.set(512,512),e.dyn.lobbyChand=It,m(1.2,1.1,7,r.wood,45.5,.55,22,{collide:!0,cast:!0}),m(1.5,.08,7.4,r.wood,45.5,1.14,22,{});let Dt=new W(new Mn(.22,.24,12,1,!0),new j({color:1855544,roughness:.4,side:Te}));Dt.position.set(45.5,1.5,19.5),s.add(Dt),m(.04,.34,.04,r.gold,45.5,1.3,19.5,{}),C(16765072,10,7,45.5,1.45,19.5,"lobby"),m(.26,.1,.2,r.black,45.5,1.22,24,{});let Ie=new j({map:qn("\u70ED\u70C8\u795D\u8D3A\u5468\u5E9C\u5343\u91D1\u4E8E\u5F52\u4E4B\u559C","#e7c25c","#8e0c12",60),roughness:.85}),be=p(14,1.1,Ie,36,6.2,29.7,Math.PI);be.rotation.z=.012;let Dn=new j({color:3038260,roughness:.85});[[25.5,28.5],[46.5,28.5],[25.5,15.5]].forEach(([L,k])=>{m(.5,.5,.5,new j({color:8007202,roughness:.9}),L,.25,k,{collide:!0});for(let X=0;X<6;X++){let O=new W(new Mn(.09,.9,6),Dn);O.position.set(L+Math.sin(X*2.4)*.2,.9+X%3*.14,k+Math.cos(X*1.9)*.2),O.rotation.set(Math.sin(X)*.5,0,Math.cos(X*1.3)*.5),s.add(O)}}),m(.7,.5,.45,new j({color:4864040,roughness:.9}),34,.25,28.6,{}),m(.6,.42,.4,new j({color:3490382,roughness:.9}),34.7,.21,28.3,{}),m(2.2,.45,.9,r.velvetDark,27,.32,24.5,{collide:!0}),m(2.2,.7,.24,r.velvetDark,27,.85,24.9,{}),p(1.6,.5,new j({map:qn("\u5458\u5DE5\u901A\u9053 \xB7 \u6D77\u6D0B\u9986\u8FDE\u5ECA","#d8e6dc","#22322a",56),roughness:.9}),24.4,2.7,21.6,Math.PI/2);for(let L=0;L<6;L++)m(3,.18,.34,r.terrazzoDark,47.2-L*0,.2+L*.18,15.6+L*.34,{});m(3,.06,.06,r.gold,47.2,1.05,16.2,{ry:0}),w(45.6,15.3,48,17.8),e.dyn.pits=[];let Un=new j({color:790032,roughness:.15,metalness:.4,envMapIntensity:1.4});[[31,20,2.6,1.5,.4],[39,24.5,3.4,1.8,-.7],[35,17.5,2,1.2,1.9]].forEach(([L,k,X,O,ot])=>{let it=new W(new ts(1,24),Un);it.scale.set(X,O,1),it.rotation.x=-Math.PI/2,it.rotation.z=ot,it.position.set(L,.035,k),it.visible=!1,s.add(it),e.dyn.pits.push(it)}),e.regions.push({name:"\u5927\u5802",box:[24,14,48,30],mat:"terrazzo"}),p(43,4,b(r.concreteWet,43,4,3.2),2.5,0,22,0,-Math.PI/2),p(43,4,r.ceiling,2.5,3.4,22,0,Math.PI/2),T(20,-19,24,1.25,r.tiles,[[-19,-15.2]]),T(20,-19,24,2.15,r.concrete,[[-19,-15.2]],1.25);let nh=p(46,8,new se({map:Gc()}),2.5,2.5,26.5,Math.PI);e.dyn.beams=[];let ul=new se({color:6740168,transparent:!0,opacity:.14,blending:In,depthWrite:!1,side:Te});for(let L=0;L<5;L++){let k=new W(new ge(1.4+L*.4,7),ul);k.position.set(-14+L*8,2.8,25.4),k.rotation.z=.25,s.add(k),e.dyn.beams.push({mesh:k,phase:L*1.7,x0:-14+L*8})}let Ur=new se({color:133388,transparent:!0,opacity:.85,depthWrite:!1}),Ti=new W(new re(2.6,12,8),Ur);Ti.scale.set(2.2,.7,.5),Ti.position.set(-6,3.4,26.2),s.add(Ti),e.dyn.seaShade=Ti;let dl=new pr({color:10471618,roughness:.03,metalness:0,transparent:!0,opacity:.18,envMapIntensity:2.2});for(let L=0;L<12;L++){let k=-17.2+L*3.6;p(3.5,3.4,dl,k,1.7,24),m(.14,3.4,.2,r.steelDark,k+1.78,1.7,24,{})}w(-19,23.8,24,24.3),m(.14,3.4,.2,r.steelDark,-19,1.7,24,{}),m(.3,3.4,4.2,r.concrete,-19,1.7,22,{collide:!0});let Wi=document.createElement("canvas");Wi.width=256,Wi.height=256;let oi=Wi.getContext("2d");oi.strokeStyle="rgba(220,240,240,0.9)",oi.lineWidth=2;for(let L=0;L<7;L++){oi.beginPath();let k=128,X=128;oi.moveTo(k,X);for(let O=0;O<6;O++)k+=(Math.random()-.5)*90,X+=(Math.random()-.5)*90,oi.lineTo(k,X);oi.stroke()}let li=new pn(Wi),ks=new se({map:li,transparent:!0,opacity:0,depthWrite:!1});e.dyn.cracks=[],[[-2,23.85],[6,23.85],[14,23.85]].forEach(([L,k])=>{let X=p(3.2,3.2,ks.clone(),L,1.7,k,Math.PI);e.dyn.cracks.push(X)});let Nr=new j({map:qn("\u8680\u6E7E\u6D77\u6D0B\u9986","#bfeee8","#0d2b31",88),emissive:1923676,emissiveIntensity:1.6,roughness:.6});p(3.2,.9,Nr,21.5,2.8,20.2,0),C(6736064,9,8,21.5,2.6,21,"aqua"),m(2,1.05,.8,r.wood,21.6,.53,20.7,{collide:!0});let ci=new ae,os=new W(new Ce(.16,3.2,3.8),r.steelDark);ci.add(os);for(let L=0;L<6;L++){let k=new W(new Ce(.2,3.2,.06),r.steel);k.position.set(0,0,-1.7+L*.68),ci.add(k)}let ls=new W(new ge(1.4,.4),new j({map:qn("\u68C0\u4FEE\u95F8 \xB7 \u7981\u6B62\u901A\u884C","#e8d8b0","#5a2018",64),roughness:.9}));ls.rotation.y=Math.PI/2,ls.position.set(.11,.4,0),ci.add(ls),ci.position.set(4,1.6,22),s.add(ci),e.dyn.gate={group:ci,y:1.6,targetY:1.6,collider:{minX:3.7,minZ:20,maxX:4.3,maxZ:24}},e.colliders.push(e.dyn.gate.collider),m(.24,3.4,.24,r.steelDark,4,1.7,20.25,{}),m(.24,3.4,.24,r.steelDark,4,1.7,23.75,{});let cs=new j({color:2777152,emissive:1926724,emissiveIntensity:2.4});[[-16,20.3],[10,20.3],[22,20.3]].forEach(([L,k])=>{m(.34,.16,.1,cs,L,3,k+.05,{})}),C(4168296,7,9,-16,2.8,21,"aqua"),C(4168296,6,9,10,2.8,21,"aqua");let Fr=C(5220512,38,18,-6,2.4,22.3,"aqua"),Br=C(5220512,34,18,12,2.4,22.3,"aqua"),fl=C(5220512,30,16,-15,2.4,22.3,"aqua");e.dyn.waterLights=[Fr,Br,fl];let Or=new W(new Ce(43,.1,.16),new j({color:10479836,emissive:6277308,emissiveIntensity:1.8}));Or.position.set(2.5,3.3,23.85),s.add(Or);let pl=new j({color:1712676,roughness:.03,metalness:.5,envMapIntensity:2.4,transparent:!0,opacity:.8});[[-8,22.6,1.6],[2,21.4,1.1],[16,22.8,2]].forEach(([L,k,X])=>{let O=new W(new ts(1,20),pl);O.rotation.x=-Math.PI/2,O.scale.set(X,X*.55,1),O.position.set(L,.02,k),s.add(O)}),e.regions.push({name:"\u6D77\u6D0B\u9986\u8FDE\u5ECA",box:[-19,20,24,24],mat:"wet"}),p(3.8,27.6,b(r.concrete,3.8,27.6,3.2),-17.1,0,6.2,0,-Math.PI/2),p(3.8,27.6,r.ceiling,-17.1,3,6.2,0,Math.PI/2),S(-19,-7.6,20,3,r.concrete,[]),S(-15.2,-4.4,20,3,r.concrete,[[-7.6,-4.4]]),T(-7.6,-19,-15.2,3,r.concrete,[]),[[-18.8,2],[-18.8,10]].forEach(([L,k])=>{p(1.4,2.2,gt,L+.16,1.1,k,Math.PI/2),m(.1,2.4,1.6,r.steelDark,L+.05,1.2,k,{})}),p(.8,.3,new j({map:qn("\u65E7\u51B7\u5E93 \xB7 3","#cfd8ce","#2e3630",76),roughness:.9}),-18.7,2.3,6,Math.PI/2),m(.12,.12,27,r.steelDark,-18.6,2.6,6.2,{});for(let L=0;L<9;L++){let k=new W(new re(.09+Math.random()*.1,7,7),r.calcite);k.position.set(-18.55,2.5+Math.random()*.24,-5+L*2.8+Math.random()),k.scale.y=.7,s.add(k)}e.dyn.bulbs=[],[[-17.1,-3],[-17.1,6],[-17.1,15]].forEach(([L,k],X)=>{let O=new ae,ot=new W(new Qt(.012,.012,.7,5),r.black);ot.position.y=.35,O.add(ot);let it=new W(new re(.06,8,8),new j({color:16767392,emissive:16760944,emissiveIntensity:2.4}));O.add(it),O.position.set(L,2.6,k),s.add(O);let Pt=C(16760952,9,8,L,2.4,k,"connector");e.dyn.bulbs.push({group:O,light:Pt,phase:X*2.1})});let ml=new W(new Cn(new Sn([new R(-17.5,.03,-5.5),new R(-17,.05,-5.8),new R(-16.6,.03,-5.5),new R(-16.4,.04,-6)]),12,.02,5),new j({color:4854292,roughness:.95}));s.add(ml),e.regions.push({name:"\u5458\u5DE5\u8FDE\u5ECA",box:[-19,-7.6,-15.2,20],mat:"metal"});function M(L,k,X,O,ot,it,Pt){let lt=new ae,Rt=new j({color:3814960,roughness:.55}),Ot=new W(new Ce(.62,.5,.5),Rt);Ot.castShadow=!0,lt.add(Ot);let kt=new W(new Ce(.64,.52,.04),new j({color:2893860,roughness:.5}));kt.position.z=.25,lt.add(kt);let De=new se({color:2241328}),Qe=new W(new ge(.5,.38),De);Qe.position.set(-.03,.02,.275),lt.add(Qe);for(let gl=0;gl<2;gl++){let xl=new W(new Qt(.024,.024,.02,8),r.steelDark);xl.rotation.x=Math.PI/2,xl.position.set(.25,.08-gl*.1,.276),lt.add(xl)}lt.position.set(L,k,X),lt.rotation.y=O,s.add(lt);let _n=new Bi(6740172,4,4,2);return _n.position.set(L,k+.1,X),s.add(_n),e.screens.push({id:ot,mesh:Qe,mat:De,kind:"preview",camPos:it,camLook:Pt,glow:_n,group:lt}),lt}m(.5,1.15,.5,r.steelDark,26.5,.58,-7.5,{collide:!0}),M(26.5,1.42,-7.5,.25,"T02",new R(26.5,2.2,-6.8),new R(34,1.2,-5.6)),M(45.4,1.45,26,-Math.PI/2-.2,"T01",new R(44,3.4,26),new R(34,2.2,21)),M(21.6,1.3,20.75,Math.PI+.15,"T07",new R(18,1.9,21.2),new R(4,1.6,22.6));let F=new se({color:16726064,wireframe:!1}),q=new se({color:16732224}),G=new se({color:1316892}),H=new ae,vt=(L,k,X=q)=>{let O=k.clone().sub(L),ot=O.length(),it=new W(new Qt(.03,.03,ot,5),X);return it.position.copy(L).add(k).multiplyScalar(.5),it.quaternion.setFromUnitVectors(new R(0,1,0),O.normalize()),it};H.add(vt(new R(16.2,2.05,-6.2),new R(35.5,2.05,-6.2))),H.add(vt(new R(35.5,2.05,-6.2),new R(38.2,2.05,-3.5))),H.add(vt(new R(38.2,2.05,-3.5),new R(38.2,2.05,11)));let wt=new W(new Ps(.24,1.1,4,8),G);wt.position.set(31,.95,-6.2),H.add(wt),H.visible=!1,s.add(H),e.future.corridor=H;let xt=new ae;for(let L=0;L<7;L++){let k=L/6,X=new W(new Ce(2.6-k*.8,.5,1.6-k*.5),G);X.position.set(29+k*12,.6+Math.sin(k*Math.PI)*5.4,19+k*5.5),X.rotation.set(k*.8,k*1.2,Math.sin(k*6)*.4),xt.add(X)}let Nt=new W(new Ps(.24,1.1,4,8),new se({color:7213075}));Nt.position.set(33,.95,24),xt.add(Nt),xt.visible=!1,s.add(xt),e.future.lobby=xt;let Ut=new ae,$t=new W(new re(4,16,12,0,Math.PI),new se({color:929848,side:Te}));$t.scale.set(1.4,.8,.35),$t.position.set(4,1.7,24.4),$t.rotation.y=Math.PI,Ut.add($t),Ut.add(vt(new R(4,3.3,22),new R(10.5,2.6,20.3)));let jt=new W(new Ce(.16,3.2,3.8),new se({color:3160124,transparent:!0,opacity:.7}));jt.position.set(4,4.4,22),Ut.add(jt),Ut.visible=!1,s.add(Ut),e.future.aqua=Ut;let Ft=(L,k,X)=>{let O=document.createElement("canvas");O.width=L,O.height=k,X(O.getContext("2d"),L,k);let ot=new pn(O);return ot.colorSpace=je,ot},xe=new j({color:11735584,emissive:14494232,emissiveIntensity:.85,roughness:.6,transparent:!0,opacity:.96}),Ee=new j({color:13081146,metalness:.7,roughness:.4}),Le=new j({color:9309202,roughness:.9});e.dyn.lanterns=[],[[-13.2,-3.2],[-13.2,-9.5],[-13.2,-15.8],[13.2,-3.2],[13.2,-9.5],[13.2,-15.8]].forEach(([L,k],X)=>{let O=new ae,ot=new W(new re(.3,14,12),xe);ot.scale.y=1.18,O.add(ot);for(let Ot=0;Ot<5;Ot++){let kt=new W(new Rn(.3,.008,5,20),Ee);kt.rotation.y=Ot/5*Math.PI,kt.scale.y=1.18,O.add(kt)}let it=new W(new Qt(.1,.14,.07,10),Ee);it.position.y=.38,O.add(it);let Pt=it.clone();Pt.position.y=-.38,Pt.rotation.x=Math.PI,O.add(Pt);let lt=new W(new Mn(.035,.3,8),Le);lt.position.y=-.56,O.add(lt);let Rt=new W(new Qt(.008,.008,1.1,4),r.black);Rt.position.y=.95,O.add(Rt),O.position.set(L,4.9,k),s.add(O),e.dyn.lanterns.push({group:O,phase:X*1.3})});let le=r.goldFoil;m(30,.14,.14,le,0,6.7,-.2,{}),m(30,.14,.14,le,0,6.7,-19.8,{}),m(.14,.14,20,le,-14.8,6.7,-10,{}),m(.14,.14,20,le,14.8,6.7,-10,{}),m(20,.1,.1,le,0,6.96,-4.5,{}),m(20,.1,.1,le,0,6.96,-15.5,{}),m(.1,.1,11,le,-10,6.96,-10,{}),m(.1,.1,11,le,10,6.96,-10,{}),p(19.6,10.8,new j({color:3810338,roughness:.95}),0,6.99,-10,0,Math.PI/2);let rn=new j({...Yo(),color:8261654});for(let L=0;L<22;L++){let k=-7.7+L*.73,X=new W(new Qt(.22+L%3*.05,.3+L%2*.06,6.2,8),rn);X.position.set(k,3.5,-19.85+L%2*.1),s.add(X)}let At=new re(.09,10,8),cn=r.porcelain;tt.forEach(([L,k],X)=>{let O=new ae,ot=new W(At,cn);ot.scale.y=.82,O.add(ot);let it=new W(new Qt(.012,.02,.1,6),cn);it.position.set(.09,.02,0),it.rotation.z=-1,O.add(it);let Pt=new W(new Qt(.028,.04,.03,8),cn);Pt.position.y=.075,O.add(Pt),O.position.set(L-.35,.885,k-.25),O.rotation.y=X*1.1,s.add(O);let lt=new W(new Qt(.09,.06,.03,10),r.porcelain);lt.position.set(L+.15,.87,k+.42),s.add(lt);for(let Rt=0;Rt<5;Rt++){let Ot=new W(new re(.016,6,5),new j({color:Rt%2?12589090:14200912,roughness:.3}));Ot.position.set(L+.15+Math.sin(Rt*2.2)*.045,.9,k+.42+Math.cos(Rt*1.8)*.045),s.add(Ot)}});{let L=new An(new ts(.035,6),new j({color:12589090,roughness:.9,side:Te}),90),k=new ke;ye(313);for(let X=0;X<90;X++)k.position.set((st()-.5)*5.5,.03,-1-st()*16),k.rotation.set(-Math.PI/2+(st()-.5)*.4,0,st()*6.28),k.scale.setScalar(.6+st()),k.updateMatrix(),L.setMatrixAt(X,k.matrix);s.add(L)}let he=()=>Ft(128,96,(L,k,X)=>{L.fillStyle="#b8a583",L.fillRect(0,0,k,X),ye(Math.random()*999|0),L.fillStyle="rgba(70,58,40,0.85)",L.fillRect(6,X*.55,k-12,X*.38);for(let ot=0;ot<7;ot++){let it=14+ot*((k-28)/6);L.fillStyle="rgba(58,46,34,0.9)",L.beginPath(),L.ellipse(it,X*.46,6,8,0,0,Math.PI*2),L.fill(),L.fillRect(it-7,X*.52,14,X*.3)}L.filter="blur(2.5px)",L.drawImage(L.canvas,0,0),L.filter="none";let O=L.createRadialGradient(k/2,X/2,X*.3,k/2,X/2,k*.75);O.addColorStop(0,"rgba(0,0,0,0)"),O.addColorStop(1,"rgba(40,28,14,0.55)"),L.fillStyle=O,L.fillRect(0,0,k,X)});[[-14.7,-6.5,Math.PI/2],[-14.7,-14,Math.PI/2],[14.7,-15.5,-Math.PI/2]].forEach(([L,k,X])=>{let O=m(.06,.66,.9,r.wood,L+(L<0?.02:-.02),2.2,k,{}),ot=p(.78,.54,new j({map:he(),roughness:.9}),L+(L<0?.08:-.08),2.2,k,X);ot.rotation.z=(Math.random()-.5)*.05});{let L=new j({map:qn("\u5C0F\u5FC3\u5730\u6ED1","#3a2f16","#d8c23a",88),roughness:.8}),k=p(.44,.6,L,24.5,.32,-6.9,.5);k.rotation.x=-.22;let X=p(.44,.6,L,24.52,.32,-6.86,.5+Math.PI);X.rotation.x=.22,w(24.3,-7.1,24.75,-6.7);let O=new W(new Qt(.16,.13,.34,10),new j({color:9312788,roughness:.7}));O.position.set(33.4,.17,-7.4),s.add(O);let ot=new W(new Qt(.014,.014,1.3,5),r.wood);ot.position.set(33.5,.75,-7.45),ot.rotation.z=.35,s.add(ot);for(let Pt=0;Pt<3;Pt++){let lt=new W(new Ce(.46,.1,.46),r.wood);lt.position.set(38.9,.3+Pt*.24,11.8),lt.rotation.y=Pt*.16,s.add(lt);let Rt=new W(new Ce(.46,.4,.08),r.wood);Rt.position.set(38.9,.5+Pt*.24,12.02),Rt.rotation.y=Pt*.16,s.add(Rt)}w(38.6,11.5,39.2,12.2);let it=new W(new Rn(.09,.018,6,14),r.steelDark);it.position.set(30,2.86,-7.62),it.rotation.x=Math.PI/2,s.add(it)}{let L=Ft(160,160,(lt,Rt,Ot)=>{lt.fillStyle="#e6dcc4",lt.beginPath(),lt.arc(80,80,74,0,Math.PI*2),lt.fill(),lt.strokeStyle="#3a2f22",lt.lineWidth=5,lt.stroke(),lt.fillStyle="#3a2f22";for(let kt=0;kt<12;kt++){let De=kt/12*Math.PI*2;lt.fillRect(80+Math.cos(De)*62-2,80+Math.sin(De)*62-2,kt%3===0?6:3,kt%3===0?6:3)}lt.strokeStyle="#2a2018",lt.lineWidth=6,lt.beginPath(),lt.moveTo(80,80),lt.lineTo(80+Math.cos(-Math.PI/2-.05)*38,80+Math.sin(-Math.PI/2-.05)*38),lt.stroke(),lt.lineWidth=4,lt.beginPath(),lt.moveTo(80,80),lt.lineTo(80+Math.cos(-Math.PI/2-.21)*56,80+Math.sin(-Math.PI/2-.21)*56),lt.stroke()}),k=p(1.1,1.1,new j({map:L,transparent:!0,roughness:.85}),47.8,5,22,-Math.PI/2);k.rotation.z=.01,m(2.2,1.4,.08,r.wood,47.8,2.2,22,{});for(let lt=0;lt<4;lt++)for(let Rt=0;Rt<8;Rt++){if((lt*8+Rt)%5===0)continue;let Ot=new W(new Ce(.02,.1,.05),Ee);Ot.position.set(47.74,2.65-lt*.3,21.1+Rt*.26),s.add(Ot)}let X=new W(new re(.05,10,8,0,Math.PI*2,0,Math.PI*.6),Ee);X.position.set(45.5,1.2,20.6),s.add(X);let O=new j({color:9073730,metalness:.9,roughness:.25,envMapIntensity:1.6});m(1.9,2.6,.12,O,27.5,1.3,14.25,{}),m(.06,2.6,.16,r.steelDark,27.5,1.3,14.22,{}),m(2.3,.2,.2,r.steelDark,27.5,2.75,14.25,{});let ot=Ft(64,24,lt=>{lt.fillStyle="#150e08",lt.fillRect(0,0,64,24),lt.fillStyle="#e75c2c",lt.font="18px monospace",lt.textAlign="center",lt.textBaseline="middle",lt.fillText("\u2014",32,13)}),it=p(.4,.15,new j({map:ot,emissive:10502168,emissiveIntensity:1.2,roughness:.6}),27.5,2.95,14.32,0);e.dyn.elevInd={mesh:it,tex:ot};let Pt=Ft(128,128,(lt,Rt,Ot)=>{let kt=lt.createLinearGradient(0,Ot,0,0);kt.addColorStop(0,"rgba(200,220,210,0.16)"),kt.addColorStop(.5,"rgba(200,220,210,0.03)"),kt.addColorStop(1,"rgba(200,220,210,0)"),lt.fillStyle=kt,lt.fillRect(0,0,Rt,Ot);for(let De=0;De<14;De++){let Qe=Math.random()*Rt,_n=Ot-Math.random()*Ot*.45;lt.strokeStyle="rgba(225,240,235,0.10)",lt.lineWidth=1,lt.beginPath(),lt.moveTo(Qe,_n),lt.lineTo(Qe+(Math.random()-.5)*4,Ot),lt.stroke()}});p(5.9,3.3,new se({map:Pt,transparent:!0,depthWrite:!1}),36,1.7,29.85,Math.PI)}{let L=new se({color:402206,transparent:!0,opacity:.75,depthWrite:!1,side:Te});e.dyn.kelps=[];for(let ot=0;ot<8;ot++){let it=3+Math.random()*3.5,Pt=new W(new ge(.5+Math.random()*.5,it),L);Pt.position.set(-16+ot*5+Math.random()*2,it/2-.4,25.6+Math.random()*.8),s.add(Pt),e.dyn.kelps.push({mesh:Pt,phase:ot*1.4})}let k=new se({color:135187,transparent:!0,opacity:.9,depthWrite:!1}),X=new W(new Qt(1.1,1.1,.1,14),k);X.position.set(2,.9,25.9),X.rotation.z=.5,X.rotation.x=.3,s.add(X);for(let ot=0;ot<3;ot++){let it=new W(new Ce(.42,.9,.42),k);it.position.set(.4+ot*1.6,.5+ot%2*.35,26+ot%2*.4),it.rotation.set(.4*ot,ot,.3),s.add(it)}let O=new j({color:1849896,roughness:.9,transparent:!0,opacity:.75});for(let ot=0;ot<12;ot++){let it=p(3.4,.28+Math.random()*.3,O,-17.2+ot*3.6,.2,23.93,Math.PI);it.rotation.z=(Math.random()-.5)*.06}}{let L=new j({color:12107442,roughness:.35,transparent:!0,opacity:.34,side:Te,envMapIntensity:1.4,depthWrite:!1});e.dyn.strips=[],[[-17.1,19.6],[-17.1,-7.2]].forEach(([X,O])=>{for(let ot=0;ot<7;ot++){let it=new W(new ge(.46,2.6),L);it.position.set(X-1.55+ot*.5,1.65,O),s.add(it),e.dyn.strips.push({mesh:it,phase:ot*.9+O})}});let k=new j({color:14212562,roughness:.95,transparent:!0,opacity:.16});for(let X=0;X<6;X++){let O=p(.8+Math.random()*1.4,.5+Math.random()*.8,k,-18.82,.6+Math.random()*1.6,-4+X*4+Math.random()*2,Math.PI/2);O.rotation.z=Math.random()*3}}s.fog=new ir(854536,.016),e.dyn.fog=s.fog;let xn=new is(3351580,.7);s.add(xn),e.dyn.ambient=xn;let Nn=new gr(2760728,854536,.5);return s.add(Nn),e}var rd=10817302,Wc=3998727,mx=16722466,Xc=class{constructor(t,e,n=new R(0,0,1)){this.id=t,this.pos=e.clone(),this.normal=n.clone(),this.cords=[],this.group=new ae,this.group.position.copy(e),this._build()}_build(){let t=new j({color:13081146,metalness:.85,roughness:.35,emissive:2759685}),e=new W(new Qt(.055,.07,.03,10),t);e.rotation.x=Math.PI/2,this.group.add(e);let n=new Sn([new R(0,0,.015),new R(0,-.01,.09),new R(0,-.075,.115),new R(0,-.12,.07)]),i=new W(new Cn(n,10,.016,6),t);this.group.add(i),this.marker=new W(new re(.035,8,8),new j({color:14200912,emissive:6703130,emissiveIntensity:1})),this.marker.position.set(0,-.05,.1),this.group.add(this.marker),this.group.quaternion.setFromUnitVectors(new R(0,0,1),this.normal),this.group.position.copy(this.pos)}setHighlight(t){this.highlighted=t,t||(this.marker.material.emissiveIntensity=1,this.marker.scale.setScalar(1))}pop(){this._pop=1}tick(t,e,n){if(this._pop>0){this._pop=Math.max(0,this._pop-t*3.2);let i=1+Math.sin(this._pop*Math.PI)*.9;this.marker.scale.setScalar(i),this.marker.material.emissiveIntensity=1+this._pop*7;return}if(this.highlighted){let i=5+Math.sin(e*9)*2.5;this.marker.material.emissiveIntensity=i,this.marker.scale.setScalar(1.7+Math.sin(e*9)*.25)}else n&&(this.marker.material.emissiveIntensity=2.2+Math.sin(e*4+this.pos.x)*1.4,this.marker.scale.setScalar(1.15+Math.sin(e*4+this.pos.x)*.12))}},gx=0,qc=class{constructor(t,e,n,i={}){this.sys=t,this.id="cord"+gx++,this.a=e,this.b=n,this.slack=i.slack??.5,this.tag=i.tag||"",this.rideable=i.rideable!==!1,this.fixedEnd=i.fixedEnd||null,this.heldEnd=null,this.mat=new j({color:rd,emissive:Wc,emissiveIntensity:1.2,roughness:.75}),this.mesh=new W(new ze,this.mat),this.mesh.castShadow=!1,this.mesh.userData.cord=this;let r=new re(.05,8,8),a=new j({color:13081146,metalness:.7,roughness:.4}),o=new Mn(.035,.16,8),l=new j({color:9309202,roughness:.9});this.knotA=new ae,this.knotA.add(new W(r,a));let c=new W(o,l);c.position.y=-.11,this.knotA.add(c),this.knotB=this.knotA.clone(),this.knotA.userData={cord:this,end:"a"},this.knotB.userData={cord:this,end:"b"},this.knotA.traverse(h=>h.userData={cord:this,end:"a"}),this.knotB.traverse(h=>h.userData={cord:this,end:"b"}),this.curve=null,this.length=1,this._wave=0,e&&e.cords.push(this),n&&n.cords.push(this),this.rebuild()}endPos(t){if(this.heldEnd===t)return this.sys.handPos;let e=t==="a"?this.a:this.b;return e?e.pos:this.sys.handPos}rebuild(){let t=this.endPos("a"),e=this.endPos("b"),n=t.distanceTo(e);this.length=n;let i=this._settle>0?1+Math.sin(this._settle*Math.PI*2.2)*.55*this._settle:1,r=Math.min(1.35,n*.055*(1+this.slack)*i),a=t.clone().lerp(e,.5);a.y-=r;let o=t.clone().lerp(e,.25);o.y-=r*.72;let l=t.clone().lerp(e,.75);l.y-=r*.72,this.curve=new Sn([t,o,a,l,e]);let c=this.mesh.geometry;this.mesh.geometry=new Cn(this.curve,16,.024,6),c&&c.dispose(),this.knotA.position.copy(t),this.knotB.position.copy(e)}pointAt(t){return this.curve.getPointAt(ln.clamp(t,0,1))}vibrate(){this._wave=1}update(t){if(this._wave>0){this._wave=Math.max(0,this._wave-t*1.4);let e=1+Math.sin(performance.now()*.04)*.012*this._wave;this.mesh.scale.set(1,e,1),this.mat.emissiveIntensity=1.2+this._wave*1.5}this._settle>0&&(this._settle=Math.max(0,this._settle-t*1.8),this.rebuild()),this.heldEnd&&this.rebuild()}detach(t){let e=t==="a"?this.a:this.b;if(e){let n=e.cords.indexOf(this);n>=0&&e.cords.splice(n,1)}t==="a"?this.a=null:this.b=null,this.heldEnd=t,this.rebuild()}attach(t,e){t==="a"?this.a=e:this.b=e,e.cords.push(this),this.heldEnd=null,this._settle=1,this.rebuild()}otherHook(t){return this.a===t?this.b:this.a}},Jo=class{constructor(t){this.scene=t,this.trail=[],this.maxLen=46,this.segments=4,this.glow=0,this.mat=new j({color:rd,emissive:Wc,emissiveIntensity:1.4,roughness:.8}),this.mesh=new W(new ze,this.mat),this.mesh.frustumCulled=!1,t.add(this.mesh),this._rebuildTimer=0}record(t){let e=t.clone();if(e.y=.06,this.trail.length===0||this.trail[this.trail.length-1].distanceToSquared(e)>.55)for(this.trail.push(e);this.trail.length>this.maxLen;)this.trail.shift()}shorten(){for(this.maxLen=Math.max(10,this.maxLen-12);this.trail.length>this.maxLen;)this.trail.shift();this.segments=Math.max(0,this.segments-1);let t=1-this.segments*.12;this.mat.color.setRGB(.65*(1-t*.5),.05,.07)}update(t,e){if(this.glow=Math.max(0,this.glow-t*.7),this.mat.emissiveIntensity=1.4+this.glow*9,this.mat.emissive.setHex(this.glow>.15?mx:Wc),this._rebuildTimer-=t,this._rebuildTimer>0||this.trail.length<2)return;this._rebuildTimer=.12;let n=this.trail.slice();n.push(e.clone());let i=new Sn(n),r=this.mesh.geometry;this.mesh.geometry=new Cn(i,Math.min(64,n.length*2),.016,5),r&&r.dispose()}},Ko=class{constructor(t,e){this.scene=t,this.audio=e,this.hooks=new Map,this.cords=[],this.held=null,this.handPos=new R,this.group=new ae,t.add(this.group),this.onTopologyChange=null,this.onNoise=null}addHook(t,e,n,i,r=0,a=0,o=1,l=!1){let c=new Xc(t,new R(e,n,i),new R(r,a,o).normalize());return c.locked=l,l&&(c.marker.visible=!1),this.hooks.set(t,c),this.group.add(c.group),c}hook(t){return this.hooks.get(t)}addCord(t,e,n={}){let i=new qc(this,this.hooks.get(t),this.hooks.get(e),n);return this.cords.push(i),this.group.add(i.mesh,i.knotA,i.knotB),i}removeCord(t){["a","b"].forEach(n=>{let i=n==="a"?t.a:t.b;if(i){let r=i.cords.indexOf(t);r>=0&&i.cords.splice(r,1)}});let e=this.cords.indexOf(t);e>=0&&this.cords.splice(e,1),this.group.remove(t.mesh,t.knotA,t.knotB),t.mesh.geometry.dispose()}clearAllCords(){[...this.cords].forEach(t=>this.removeCord(t))}grab(t,e){return this.held?!1:(t.detach(e),this.held=t,this.audio?.pluck(70+Math.random()*30,.35),t.vibrate(),this.onTopologyChange?.(t),!0)}hang(t){if(!this.held)return!1;let e=this.held;return e.attach(e.heldEnd===null?"a":e.heldEnd,t),this.held=null,this.audio?.pluck(120+Math.random()*60,.4),this.audio?.ratchet(),t.pop(),e.vibrate(),this.onTopologyChange?.(e),this.onNoise?.(.25,t.pos),!0}nearestTarget(t,e,n=2.7){let i=null,r=.62,a=new R;if(this.held)for(let o of this.hooks.values()){if(o.locked||o.cords.length>=3)continue;a.copy(o.pos).sub(t);let l=a.length();if(l>n)continue;a.normalize();let c=a.dot(e);c>r&&(r=c,i={type:"hook",hook:o,pos:o.pos,dist:l})}else for(let o of this.cords)if(o.tag!=="deco")for(let l of["a","b"]){if(o.fixedEnd===l)continue;let c=o.endPos(l);a.copy(c).sub(t);let h=a.length();if(h>n)continue;a.normalize();let u=a.dot(e);u>r+Math.min(.3,h*.06)&&(r=u,i={type:"cordEnd",cord:o,end:l,pos:c,dist:h})}return i}nearestHook(t,e=2.4){let n=null,i=e;for(let r of this.hooks.values()){if(r.locked)continue;let a=r.pos.distanceTo(t);a<i&&(i=a,n=r)}return n}update(t,e){this.handPos.copy(e),this._t=(this._t||0)+t;for(let n of this.cords)n.update(t);for(let n of this.hooks.values()){if(n.locked)continue;let i=!!this.held&&n.cords.length<3&&n.pos.distanceToSquared(e)<100;n.tick(t,this._t,i)}}};var Yc=s=>new j({map:td(s),roughness:.6});function ad({suit:s=2630174,shirt:t=14210248,skin:e="waiter",hair:n=1314828,dress:i=!1,armMat:r=null}){let a=new ae,o=new j({color:s,roughness:.82}),l=new j({color:t,roughness:.85}),c=new j({color:n,roughness:.9}),h=new j({color:1709588,roughness:.9});if(i){let p=[];for(let w=0;w<=8;w++){let v=w/8;p.push(new Ct(.3-v*.14+Math.sin(v*3.14)*.02,v*1.28))}let b=new W(new bi(p,10),o);b.castShadow=!0,a.add(b)}else{for(let T of[-1,1]){let S=new W(new Qt(.075,.085,.72,8),h);S.position.set(T*.1,.42,0),S.castShadow=!0,a.add(S);let C=new W(new Ce(.11,.07,.24),new j({color:854793,roughness:.4}));C.position.set(T*.1,.045,.04),a.add(C)}let p=[],b=[[.16,0],[.19,.12],[.2,.3],[.185,.44],[.21,.5],[.05,.56]];for(let[T,S]of b)p.push(new Ct(T,S));let w=new W(new bi(p,10),o);w.scale.set(1.25,1,.85),w.position.y=.78,w.castShadow=!0,a.add(w);let v=new W(new ge(.12,.26),l);v.position.set(0,1.14,.155),a.add(v)}let u=r||o,d={};for(let p of[-1,1]){let b=new ae;b.position.set(p*.24,1.3,0);let w=new W(new Qt(.05,.045,.32,8),o);w.position.y=-.16,b.add(w);let v=new ae;v.position.y=-.33;let T=new W(new Qt(.042,.038,.3,8),u);T.position.y=-.15,v.add(T);let S=new W(new re(.05,8,8),Yc(e));S.position.y=-.32,v.add(S),b.add(v),b.rotation.z=p*.1,a.add(b),d[p<0?"left":"right"]={shoulder:b,elbow:v,hand:S}}let f=new W(new Qt(.045,.05,.09,8),Yc(e));f.position.y=1.4,a.add(f);let g=new ae;g.position.y=1.56;let y=new W(new re(.115,14,12),Yc(e));y.scale.set(.92,1.08,.98),y.rotation.y=Math.PI/2,y.castShadow=!0,g.add(y);let m=new W(new re(.12,12,10,0,Math.PI*2,0,Math.PI*.55),c);return m.scale.set(.95,1.05,1),m.position.set(0,.015,-.015),g.add(m),a.add(g),{group:a,arms:d,head:g}}var Qo=class{constructor(t){let e=ad({suit:7213075,shirt:15261904,skin:"mc",hair:854536});this.group=e.group,this.arms=e.arms,this.head=e.head;let n=new j({color:13081146,metalness:.7,roughness:.35});for(let d of[-1,1]){let f=new W(new Mn(.035,.07,6),n);f.rotation.z=d*Math.PI/2,f.position.set(d*.035,1.37,.13),this.group.add(f)}{let d=new ae,f=new j({color:12587032,roughness:.65,emissive:2622986});for(let m=0;m<6;m++){let p=new W(new re(.022,6,5),f),b=m/6*Math.PI*2;p.position.set(Math.cos(b)*.028,Math.sin(b)*.028,0),p.scale.z=.5,d.add(p)}let g=new W(new re(.016,6,5),new j({color:14200912,roughness:.5}));g.position.z=.012,d.add(g);let y=new W(new Mn(.014,.05,5),new j({color:3038260,roughness:.8}));y.position.set(-.04,-.03,-.005),y.rotation.z=1.1,d.add(y),d.position.set(.13,1.22,.15),this.group.add(d)}let i=new j({color:14998466,roughness:.22,envMapIntensity:1.6,transparent:!0,opacity:.97,emissive:788998}),r=new An(new re(1,6,6),i,90),a=new ke;ye(404);for(let d=0;d<90;d++){let f=(st()-.5)*1.5,g=-.35-st()*.45,y=.115,m=Math.sin(f)*Math.cos(g)*y*.92,p=Math.sin(g)*y*1.08,b=Math.cos(f)*Math.cos(g)*y*.98;a.position.set(m,p+.01,b+.005),a.scale.setScalar(.006+st()*.012),a.updateMatrix(),r.setMatrixAt(d,a.matrix)}this.head.add(r),this.roe=r;let o=new ae,l=new W(new Qt(.018,.023,.18,8),new j({color:1841688,roughness:.5}));o.add(l);let c=new W(new re(.035,10,8),new j({color:7829367,metalness:.9,roughness:.35}));c.position.y=.11,o.add(c),o.position.set(0,-.32,.06),o.rotation.x=-.9,this.arms.right.elbow.add(o);let h=new j({color:1118481,roughness:.8}),u=new W(new Cn(new Sn([new R(.28,.95,.12),new R(.34,.5,.3),new R(.2,.05,.5),new R(-.3,.01,.7),new R(-.5,-.4,.75)]),16,.012,6),h);this.group.add(u),this.arms.right.shoulder.rotation.x=-.9,this.arms.right.elbow.rotation.x=-.9,this.arms.left.shoulder.rotation.z=-.15,this.group.position.set(0,.6,-18.2),this.group.scale.setScalar(1.06),t.add(this.group),this.gestureT=-1,this.sync=0,this.silenced=!1,this._t=0}gesture(){this.gestureT=0}update(t,e){this._t+=t;let n=1+Math.sin(this._t*1.1)*.008;if(this.group.scale.set(1.06,1.06*n,1.06),e.z<1&&Math.abs(e.x)<16&&!this.silenced){let r=e.x-this.group.position.x,a=e.z-this.group.position.z,o=Math.atan2(r,a);this.head.rotation.y+=(ln.clamp(o,-.9,.9)-this.head.rotation.y)*t*.4}if(this.gestureT>=0){this.gestureT+=t;let r=Math.min(1,this.gestureT/.8),a=Math.sin(r*Math.PI)*.9;this.arms.left.shoulder.rotation.x=-a,this.gestureT>2.2&&(this.gestureT=-1,this.arms.left.shoulder.rotation.x=0)}this.silenced&&(this.head.rotation.x+=(.5-this.head.rotation.x)*t,this.arms.right.shoulder.rotation.x+=(0-this.arms.right.shoulder.rotation.x)*t*2,this.arms.right.elbow.rotation.x+=(0-this.arms.right.elbow.rotation.x)*t*2)}},Hs=class{constructor(t,e){this.id=e;let n=nd(),i=new j({...n}),r=ad({suit:1513500,shirt:14999764,skin:"waiter",hair:1051914,armMat:i});this.group=r.group,this.arms=r.arms,this.head=r.head;let a=new W(new Qt(.052,.055,.06,8),i);a.position.y=1.44,this.group.add(a);let o=new ae,l=new W(new Qt(.24,.22,.02,14),new j({color:10133670,metalness:.9,roughness:.3}));if(o.add(l),e===0){let h=new W(new Qt(.13,.15,.09,12),new j({...$o()}));h.position.y=.06,o.add(h)}else if(e===1){let h=new j({color:15262938,roughness:.18,envMapIntensity:1.2});for(let u=0;u<6;u++){let d=new W(new Qt(.085-u*.002,.06,.045,10),h);d.position.y=.035+u*.042,d.rotation.y=u*.4,o.add(d)}}else{let h=new W(new re(.15,14,10,0,Math.PI*2,0,Math.PI*.5),new j({color:12104872,metalness:.95,roughness:.18,envMapIntensity:1.8}));h.position.y=.02,o.add(h);let u=new W(new re(.02,8,6),new j({color:13081146,metalness:.8,roughness:.3}));u.position.y=.17,o.add(u)}o.position.set(-.22,1.08,.24),this.group.add(o);let c=new W(new ge(.34,.42),new j({color:986898,roughness:.9,side:Te}));c.position.set(0,.72,.19),c.rotation.x=.06,this.group.add(c),this.group.scale.setScalar(.98+e*.045),this.head.rotation.z=(e-1)*.06,this.arms.left.shoulder.rotation.x=-.85,this.arms.left.elbow.rotation.x=-.75,this.arms.right.shoulder.rotation.x=Math.PI-.2,this.arms.right.elbow.rotation.x=.25,this.group.rotation.x=.045,t.add(this.group),this.state="idle",this.cord=null,this.t=0,this.dir=1,this.speed=.92,this.standTimer=0,this.targetPos=new R,this.yaw=0,this._bob=Math.random()*6,this.visible=!1,this.group.visible=!1}setVisible(t){this.visible=t,this.group.visible=t}mountNearest(t,e){let n=null,i=1e9;for(let r of t.cords){if(!r.rideable||r.tag==="deco"||!r.a||!r.b)continue;let a=r.pointAt(.5).distanceTo(e);a<i&&(i=a,n=r)}if(n){this.cord=n,this.t=.5,this.dir=Math.random()>.5?1:-1,this.state="ride";let r=n.pointAt(this.t);this.group.position.set(r.x,0,r.z)}else this.state="stand",this.standTimer=3}onTopologyChange(t,e){this.cord===e&&this.state==="ride"&&(this.state="stand",this.standTimer=2.6,this.cord=null)}startChase(t=!1){if(!(this.state==="escorting"||this.state==="chase")){if(t||this.state==="alert"){this.state="chase";return}this.state="alert",this.alertTimer=.9}}stopChase(t){(this.state==="chase"||this.state==="alert")&&(this.state="stand",this.standTimer=1.2)}update(t,e,n,i,r){if(!this.visible)return;this._bob+=t;let a=this.group,o=!1,l=new R;if(this.state==="alert"){this.alertTimer-=t;let h=n.x-a.position.x,u=n.z-a.position.z,f=Math.atan2(h,u)-this.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;this.head.rotation.y+=(ln.clamp(f,-1.2,1.2)-this.head.rotation.y)*Math.min(1,t*14),this._alertSting||(this._alertSting=!0,r?.sting(.3)),this.alertTimer<=0&&(this.state="chase",this._alertSting=!1)}else this.head.rotation.y!==0&&this.state!=="chase"&&(this.head.rotation.y+=(0-this.head.rotation.y)*t*3);if(this.state==="ride"&&this.cord)if(!e.cords.includes(this.cord)||!this.cord.a||!this.cord.b)this.state="stand",this.standTimer=2.6,this.cord=null;else{let h=Math.max(.5,this.cord.length);if(this.t+=this.speed/h*this.dir*t,this.t>=1||this.t<=0){let d=this.t>=1?this.cord.b:this.cord.a;this.t=ln.clamp(this.t,0,1);let f=d.cords.filter(g=>g!==this.cord&&g.rideable&&g.a&&g.b&&g.tag!=="deco");if(f.length>0){let g=f[Math.random()*f.length|0];this.cord=g,this.t=g.a===d?0:1,this.dir=g.a===d?1:-1}else this.dir*=-1,Math.random()<.3&&r&&r.pluck(60,.12)}let u=this.cord.pointAt(this.t);if(l.set(u.x-a.position.x,0,u.z-a.position.z),a.position.set(u.x,0,u.z),o=!0,this.cord.mat.emissiveIntensity=1.6,a.position.distanceTo(n)<.85){i(this);return}}else if(this.state==="stand")this.standTimer-=t,this.standTimer<=0&&(this.state="walk");else if(this.state==="walk"){let h=null,u=1e9,d=null;for(let f of e.cords)if(!(!f.rideable||f.tag==="deco"||!f.a||!f.b))for(let g of["a","b"]){let y=f.endPos(g),m=y.distanceTo(a.position);m<u&&(u=m,h=f,d=y)}h?(l.set(d.x-a.position.x,0,d.z-a.position.z),l.length()<.4?(this.cord=h,this.t=h.endPos("a").distanceTo(a.position)<h.endPos("b").distanceTo(a.position)?0:1,this.dir=this.t===0?1:-1,this.state="ride"):(l.normalize().multiplyScalar(.75*t),a.position.add(l),o=!0)):(this.state="stand",this.standTimer=3)}else if(this.state==="chase"){if(l.set(n.x-a.position.x,0,n.z-a.position.z),l.length()<.95){i(this);return}l.normalize().multiplyScalar(1.5*t),a.position.add(l),o=!0}if(o&&l.lengthSq()>1e-8){let u=Math.atan2(l.x,l.z)-this.yaw;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;this.yaw+=u*Math.min(1,t*6),a.rotation.y=this.yaw}a.position.y=Math.sin(this._bob*2.6)*.018+.01;let c=this.state==="ride"?Math.PI-.2:-.1;this.arms.right.shoulder.rotation.x+=(c-this.arms.right.shoulder.rotation.x)*t*4}},jo=class{constructor(t,e=44){this.count=e;let n=new bi([[.2,0],[.23,.35],[.2,.8],[.23,1.05],[.2,1.3],[.05,1.42]].map(([l,c])=>new Ct(l,c)),8),i=new re(.105,10,8),r=new j({roughness:.88}),a=new j({color:14200980,roughness:.65});this.bodies=new An(n,r,e),this.heads=new An(i,a,e),this.bodies.castShadow=!0;let o=[6965842,4871272,9318456,6051400,3946052,10111554];this.data=[],ye(777);for(let l=0;l<e;l++)this.bodies.setColorAt(l,new zt(o[st()*o.length|0])),this.data.push({pos:new R,yaw:st()*Math.PI*2,targetYaw:null,phase:st()*6.28,scale:.94+st()*.12});t.add(this.bodies,this.heads),this._dum=new ke,this.mode="hidden"}layoutParty(t){ye(888);let e=0;for(let n of this.data){let[i,r]=t[e%t.length],a=st()*Math.PI*2,o=1.9+st()*.8;n.pos.set(i+Math.cos(a)*o,0,r+Math.sin(a)*o),n.pos.x=ln.clamp(n.pos.x,-14,14),n.pos.z=ln.clamp(n.pos.z,-16.5,-1),n.yaw=a+Math.PI/2+(st()-.5),n.targetYaw=null,e++}this.mode="party"}layoutFinale(t){ye(999);let e=0;for(let n of this.data){let i=e%3,r=e/this.count*Math.PI*2+i*.35,a=4.2+i*1.9+st()*.5;n.pos.set(t[0]+Math.cos(r)*a,0,t[1]+Math.sin(r)*a*.72),n.pos.x=ln.clamp(n.pos.x,-14,14),n.pos.z=ln.clamp(n.pos.z,-19,-1.2),n.yaw=Math.atan2(t[0]-n.pos.x,t[1]-n.pos.z),n.targetYaw=null,e++}this.mode="finale"}hide(){this.mode="hidden"}turnTo(t,e){for(let n of this.data)n.targetYaw=Math.atan2(t-n.pos.x,e-n.pos.z)}update(t,e){let n=this.mode!=="hidden";if(this.bodies.visible=this.heads.visible=n,!n)return;let i=this._dum;for(let r=0;r<this.count;r++){let a=this.data[r];if(a.targetYaw!==null){let c=a.targetYaw-a.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;a.yaw+=c*Math.min(1,t*1.2),Math.abs(c)<.02&&(a.targetYaw=null)}let o=.04+Math.sin(e*.7+a.phase)*.025,l=Math.sin(e*.5+a.phase*2)*.02;i.position.set(a.pos.x,o,a.pos.z),i.rotation.set(l,a.yaw,l*.7),i.scale.setScalar(a.scale),i.updateMatrix(),this.bodies.setMatrixAt(r,i.matrix),i.position.y=o+1.52*a.scale,i.updateMatrix(),this.heads.setMatrixAt(r,i.matrix)}this.bodies.instanceMatrix.needsUpdate=!0,this.heads.instanceMatrix.needsUpdate=!0,this.bodies.instanceColor&&(this.bodies.instanceColor.needsUpdate=!0)}},tl=class{constructor(t){this.group=new ae;let e=new se({color:11452356,transparent:!0,opacity:.32,blending:In,depthWrite:!1}),n=e.clone();n.opacity=.14;let i=new bi([[.26,0],[.2,.5],[.17,.95],[.2,1.2],[.17,1.35],[.04,1.45]].map(([d,f])=>new Ct(d,f)),10),r=new W(i,e);this.group.add(r);let a=new W(i,n);a.position.set(.04,0,-.02),this.group.add(a);let o=new W(new re(.1,10,8),e);o.position.y=1.58,this.group.add(o);let l=new Mn(.12,.5,8),c=new W(l,n);c.position.set(0,1.42,-.08),this.group.add(c);let h=new W(new ge(.26,.75),n);h.position.set(0,1.15,-.14),h.rotation.x=.08,this.group.add(h);let u=new W(new Qt(.012,.012,.2,5),new se({color:9311256,transparent:!0,opacity:.6}));u.position.set(.24,.95,.05),u.rotation.z=.4,this.group.add(u),this.group.visible=!1,t.add(this.group),this.opacity=0,this.mats=[e,n],this.fixedYaw=null,this.dissolving=!1}appearAt(t,e,n=null){this.group.position.set(t,.05,e),this.group.visible=!0,this.opacity=0,this.dissolving=!1,this.fixedYaw=n}vanish(){this.dissolving=!0}update(t,e,n){if(!this.group.visible)return;if(this.dissolving){if(this.opacity=Math.max(0,this.opacity-t*1.6),this.opacity<=0){this.group.visible=!1;return}}else this.opacity=Math.min(1,this.opacity+t*.8),this.group.position.distanceTo(e)<2.6&&(this.dissolving=!0);let i=.8+Math.sin(n*9.7)*.1+Math.sin(n*23.3)*.06;this.mats[0].opacity=.42*this.opacity*i,this.mats[1].opacity=.2*this.opacity*i;let r=this.fixedYaw!==null?this.fixedYaw:Math.atan2(e.x-this.group.position.x,e.z-this.group.position.z);this.group.rotation.y+=(r-this.group.rotation.y)*t*2,this.group.position.y=.05+Math.sin(n*.9)*.03}},el=class{constructor(t){this.scene=t,this.group=new ae;let e=new j({color:10817302,roughness:.55,emissive:2425866}),n=new W(new bi([[.26,0],[.3,.2],[.24,.5],[.26,.75],[.2,.95],[.06,1.05]].map(([h,u])=>new Ct(h,u)),10),e);n.castShadow=!0,this.group.add(n);let i=new W(new Mn(.2,.42,10,3,!0),new j({map:ed(),roughness:.5,side:Te,emissive:3147274}));i.position.y=1.22,this.group.add(i);let r=new j({color:13081146,metalness:.85,roughness:.3,envMapIntensity:1.6}),a=new W(new Rn(.14,.018,6,18),r);a.rotation.x=Math.PI/2,a.position.y=1.36,this.group.add(a),this.beads=[];for(let h=0;h<7;h++){let u=-.9+h*.3,d=new ae;for(let f=0;f<4;f++){let g=new W(new re(.011,6,5),r);g.position.y=-.035*(f+1),d.add(g)}d.position.set(Math.sin(u)*.14,1.36,Math.cos(u)*.14),this.group.add(d),this.beads.push({g:d,phase:h*1.1})}let o=new W(new Mn(.05,.1,8),r);o.position.y=1.42,this.group.add(o);let l=new W(new re(.05,8,8),new j({color:13148292,roughness:.7}));l.position.set(.1,.55,.2),this.group.add(l);let c=l.clone();c.position.x=-.1,this.group.add(c),this.group.visible=!1,t.add(this.group),this._t=0}show(t,e,n){if(this.group.position.set(t,.42,e),this.group.rotation.y=n,this.group.visible=!0,!this._knot){this._knot=new ae;let i=new j({color:10817302,emissive:3998727,emissiveIntensity:1.2,roughness:.75}),r=new R(2.1,.1,-13.5),a=new R(.4,.08,-13.6),o=new W(new Cn(new Sn([new R(t,.5,e),new R(t+.4,.06,e+.3),a,new R(1.4,.05,-13.4),r]),20,.018,5),i);this._knot.add(o);let l=new W(new re(.07,8,8),i);l.position.copy(a),this._knot.add(l),this.scene.add(this._knot)}}update(t){if(!this.group.visible)return;this._t+=t;let e=1+Math.sin(this._t*.8)*.01;this.group.scale.set(1,e,1);for(let n of this.beads)n.g.rotation.x=Math.sin(this._t*7.3+n.phase)*.06,n.g.rotation.z=Math.cos(this._t*8.1+n.phase)*.05}};var nl=class{constructor(){this.ctx=null,this.master=null,this.ambientBus=null,this.layers={},this.started=!1,this._noiseBuf=null}init(){if(this.started)return;let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.85,this.verb=this.ctx.createGain(),this.verb.gain.value=.22;let e=this.ctx.createDelay(1);e.delayTime.value=.13;let n=this.ctx.createDelay(1);n.delayTime.value=.211;let i=this.ctx.createGain();i.gain.value=.32;let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=2400,this.verb.connect(e),e.connect(n),n.connect(i),i.connect(r),r.connect(e),n.connect(this.master),this.master.connect(this.ctx.destination),this.ambientBus=this.ctx.createGain(),this.ambientBus.gain.value=1,this.ambientBus.connect(this.master),this._noiseBuf=this._makeNoise(),this.started=!0,this._buildAmbience()}_makeNoise(){let t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0),i=0;for(let r=0;r<t;r++){let a=Math.random()*2-1;i=(i+.02*a)/1.02,n[r]=i*3.5}return e}_noiseSrc(t,e,n,i,r){let a=this.ctx.createBufferSource();a.buffer=this._noiseBuf,a.loop=!0,a.playbackRate.value=.7+Math.random()*.5;let o=this.ctx.createBiquadFilter();o.type=e,o.frequency.value=n,o.Q.value=i;let l=this.ctx.createGain();return l.gain.value=r,a.connect(o),o.connect(l),l.connect(t),a.start(),{src:a,f:o,g:l}}_buildAmbience(){let t=this.ctx;this.layers.roomtone=this._noiseSrc(this.ambientBus,"lowpass",320,.5,.05);let e=t.createOscillator();e.type="sawtooth",e.frequency.value=100;let n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=200,n.Q.value=6;let i=t.createGain();i.gain.value=.006,e.connect(n),n.connect(i),i.connect(this.ambientBus),e.start(),this.layers.hum={g:i};let r=this._noiseSrc(this.ambientBus,"bandpass",480,1.2,0);this.layers.murmur=r,this._murmurLFO(r);let a=t.createOscillator();a.type="sine",a.frequency.value=31;let o=t.createGain();o.gain.value=0,a.connect(o),o.connect(this.master),a.start();let l=this._noiseSrc(this.master,"lowpass",90,.7,0);this.layers.sea={g:o,n:l.g};let c=this._noiseSrc(this.ambientBus,"bandpass",900,.8,0);this.layers.water=c;let h=t.createStereoPanner();h.connect(this.master);let u=this._noiseSrc(h,"bandpass",2600,3.5,0),d=t.createOscillator();d.type="sine",d.frequency.value=52;let f=t.createOscillator();f.frequency.value=4.2;let g=t.createGain();g.gain.value=.5;let y=t.createGain();y.gain.value=0,f.connect(g),g.connect(y.gain),d.connect(y),y.connect(h),d.start(),f.start(),this.threatNodes={pan:h,shim:u.g,pulse:y};let m=t.createStereoPanner();m.connect(this.master);let p=t.createOscillator();p.type="sawtooth",p.frequency.value=82;let b=t.createBiquadFilter();b.type="bandpass",b.frequency.value=164,b.Q.value=9;let w=t.createOscillator();w.frequency.value=6.3;let v=t.createGain();v.gain.value=.5;let T=t.createGain();T.gain.value=0,w.connect(v),v.connect(T.gain),p.connect(b),b.connect(T),T.connect(m),p.start(),w.start(),this.cordHumNodes={pan:m,g:T}}setThreat(t,e=0){if(!this.started||!this.threatNodes)return;let n=this.ctx.currentTime;this.threatNodes.shim.gain.setTargetAtTime(t*.05,n,.18),this.threatNodes.pulse.gain.setTargetAtTime(t*.16,n,.18),this.threatNodes.pan.pan.setTargetAtTime(e,n,.12)}setCordHum(t,e=0){if(!this.started||!this.cordHumNodes)return;let n=this.ctx.currentTime;this.cordHumNodes.g.gain.setTargetAtTime(t*.045,n,.25),this.cordHumNodes.pan.pan.setTargetAtTime(e,n,.15)}_murmurLFO(t){let e=this.ctx,n=()=>{if(!this.started)return;let i=e.currentTime;t.f.frequency.setTargetAtTime(300+Math.random()*700,i,.25),setTimeout(n,300+Math.random()*700)};n()}setLayer(t,e,n=1.5){if(!this.started)return;let i=this.layers[t];if(!i)return;let r=i.g?i.g.gain:null;r&&r.setTargetAtTime(e,this.ctx.currentTime,n),t==="sea"&&i.n&&i.n.gain.setTargetAtTime(e*1.6,this.ctx.currentTime,n)}hush(t=3){if(this.hushed=!0,!this.started)return;let e=this.ctx.currentTime;this.ambientBus.gain.cancelScheduledValues(e),this.ambientBus.gain.setTargetAtTime(.04,e,t*.33)}unhush(t=0){if(this.hushed=!1,!this.started)return;let e=this.ctx.currentTime+t;this.ambientBus.gain.setTargetAtTime(1,e,2.2)}paChime(){if(!this.started)return;let t=this.ctx,e=t.currentTime;[523.25,659.25,783.99].forEach((n,i)=>{let r=t.createOscillator();r.type="sine",r.frequency.value=n;let a=t.createGain();a.gain.setValueAtTime(0,e+i*.42),a.gain.linearRampToValueAtTime(.16,e+i*.42+.03),a.gain.exponentialRampToValueAtTime(.001,e+i*.42+1.4),r.connect(a),a.connect(this.verb),a.connect(this.master),r.start(e+i*.42),r.stop(e+i*.42+1.5)})}broadcast(t=8,e=108,n=null){if(!this.started)return 0;let i=this.ctx,r=i.currentTime,a=n||t*.34+.6,o=i.createOscillator();o.type="sawtooth",o.frequency.value=e;let l=i.createOscillator();l.frequency.value=4.6;let c=i.createGain();c.gain.value=3.5,l.connect(c),c.connect(o.frequency);let h=i.createBiquadFilter();h.type="bandpass",h.Q.value=7;let u=i.createBiquadFilter();u.type="bandpass",u.Q.value=9;let d=i.createGain();d.gain.value=0;let f=i.createBiquadFilter();f.type="highpass",f.frequency.value=280;let g=i.createBiquadFilter();g.type="lowpass",g.frequency.value=2400,o.connect(h),o.connect(u),h.connect(d),u.connect(d),d.connect(f),f.connect(g),g.connect(this.master),g.connect(this.verb),o.start(r),l.start(r),o.stop(r+a+.3),l.stop(r+a+.3);let y=r+.15;for(let m=0;m<t;m++){let p=.16+Math.random()*.2;d.gain.setTargetAtTime(.14,y,.02),d.gain.setTargetAtTime(.004,y+p,.04),h.frequency.setValueAtTime(380+Math.random()*420,y),u.frequency.setValueAtTime(1100+Math.random()*900,y),o.frequency.setValueAtTime(e*(.92+Math.random()*.22),y),y+=p+.06+Math.random()*.1}return d.gain.setTargetAtTime(0,y,.1),a}pluck(t=82,e=.4,n=.996,i=0){if(!this.started)return;let r=this.ctx,a=r.sampleRate,o=Math.round(a/t),l=a*1.6,c=r.createBuffer(1,l,a),h=c.getChannelData(0),u=new Float32Array(o);for(let m=0;m<o;m++)u[m]=Math.random()*2-1;let d=0;for(let m=0;m<l;m++){let p=u[d],b=u[(d+1)%o],w=(p+b)*.5*n;u[d]=w,h[m]=p,d=(d+1)%o}let f=r.createBufferSource();f.buffer=c;let g=r.createGain();g.gain.value=e;let y=r.createBiquadFilter();if(y.type="lowpass",y.frequency.value=2600,f.connect(y),y.connect(g),i!==0){let m=r.createStereoPanner();m.pan.value=i,g.connect(m),m.connect(this.master)}else g.connect(this.master);g.connect(this.verb),f.start()}tension(t=1.6){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(60,n),i.frequency.exponentialRampToValueAtTime(340,n+t);let r=e.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.1,n+t*.7),r.gain.linearRampToValueAtTime(0,n+t);let a=e.createOscillator();a.type="triangle",a.frequency.setValueAtTime(61.5,n),a.frequency.exponentialRampToValueAtTime(345,n+t),i.connect(r),a.connect(r),r.connect(this.master),i.start(n),a.start(n),i.stop(n+t),a.stop(n+t)}footstep(t="terrazzo",e=!1){if(!this.started)return;let n=this.ctx,i=n.currentTime,r=n.createBufferSource();r.buffer=this._noiseBuf,r.playbackRate.value=2+Math.random();let a=n.createBiquadFilter(),o=n.createGain(),l=.07,c=e?.16:.07;if(t==="carpet"?(a.type="lowpass",a.frequency.value=400,c*=.5):t==="metal"?(a.type="bandpass",a.frequency.value=900,a.Q.value=3,l=.14,c*=1.3):t==="wet"?(a.type="bandpass",a.frequency.value=1600,a.Q.value=1,c*=.9):(a.type="bandpass",a.frequency.value=1200,a.Q.value=1.5),o.gain.setValueAtTime(c,i),o.gain.exponentialRampToValueAtTime(.001,i+l+Math.random()*.05),r.connect(a),a.connect(o),o.connect(this.master),r.start(i),r.stop(i+.3),t==="metal"){let h=n.createGain();h.gain.value=c*.6,a.connect(h),h.connect(this.verb)}}thud(t=.5){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(120,n),i.frequency.exponentialRampToValueAtTime(38,n+.28);let r=e.createGain();r.gain.setValueAtTime(t,n),r.gain.exponentialRampToValueAtTime(.001,n+.5),i.connect(r),r.connect(this.master),r.connect(this.verb),i.start(n),i.stop(n+.55);let a=e.createBufferSource();a.buffer=this._noiseBuf;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=500;let l=e.createGain();l.gain.setValueAtTime(t*.7,n),l.gain.exponentialRampToValueAtTime(.001,n+.3),a.connect(o),o.connect(l),l.connect(this.master),a.start(n),a.stop(n+.35)}glassCreak(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="sine";let i=900+Math.random()*1600;n.frequency.setValueAtTime(i,e),n.frequency.linearRampToValueAtTime(i*(.55+Math.random()*.2),e+.9);let r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.035,e+.15),r.gain.linearRampToValueAtTime(0,e+.9+Math.random()*.5),n.connect(r),r.connect(this.master),r.connect(this.verb),n.start(e),n.stop(e+1.6)}creakLow(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(55+Math.random()*30,e),n.frequency.linearRampToValueAtTime(35+Math.random()*15,e+1.4);let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=300;let r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.09,e+.4),r.gain.linearRampToValueAtTime(0,e+1.6),n.connect(i),i.connect(r),r.connect(this.master),r.connect(this.verb),n.start(e),n.stop(e+1.8)}motif(t=!1,e=.06){if(!this.started)return;let n=this.ctx,i=n.currentTime;(t?[523,554,622,740,622,554,523,370,523,494]:[523,587,659,784,659,587,523,392,523,523]).forEach((l,c)=>{let h=i+c*(t?.62:.34),u=n.createOscillator();u.type="sine",u.frequency.value=l;let d=n.createOscillator();d.type="triangle",d.frequency.value=l*2;let f=n.createGain();f.gain.setValueAtTime(0,h),f.gain.linearRampToValueAtTime(e,h+.01),f.gain.exponentialRampToValueAtTime(5e-4,h+(t?1.6:.9)),u.connect(f),d.connect(f),f.connect(this.master),f.connect(this.verb),u.start(h),d.start(h),u.stop(h+2),d.stop(h+2)})}heartbeat(){if(!this.started)return;let t=this.ctx,e=t.currentTime;[0,.18].forEach((n,i)=>{let r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(i?48:60,e+n);let a=t.createGain();a.gain.setValueAtTime(.22-i*.08,e+n),a.gain.exponentialRampToValueAtTime(.001,e+n+.16),r.connect(a),a.connect(this.master),r.start(e+n),r.stop(e+n+.2)})}sting(t=.4){if(!this.started)return;let e=this.ctx,n=e.currentTime;[178,183.5,356].forEach((o,l)=>{let c=e.createOscillator();c.type="sawtooth",c.frequency.value=o,c.frequency.linearRampToValueAtTime(o*1.06,n+1.1);let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=2200;let u=e.createGain();u.gain.setValueAtTime(0,n),u.gain.linearRampToValueAtTime(t*(l===2?.12:.2),n+.02),u.gain.exponentialRampToValueAtTime(.001,n+1.4),c.connect(h),h.connect(u),u.connect(this.master),u.connect(this.verb),c.start(n),c.stop(n+1.6)});let i=e.createBufferSource();i.buffer=this._noiseBuf,i.playbackRate.value=1.6;let r=e.createBiquadFilter();r.type="highpass",r.frequency.value=900;let a=e.createGain();a.gain.setValueAtTime(t*.5,n),a.gain.exponentialRampToValueAtTime(.001,n+.3),i.connect(r),r.connect(a),a.connect(this.master),i.start(n),i.stop(n+.35)}boom(t=.8){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(66,n),i.frequency.exponentialRampToValueAtTime(24,n+1.4);let r=e.createGain();r.gain.setValueAtTime(t,n),r.gain.exponentialRampToValueAtTime(.001,n+2.2),i.connect(r),r.connect(this.master),r.connect(this.verb),i.start(n),i.stop(n+2.4);let a=e.createBufferSource();a.buffer=this._noiseBuf,a.playbackRate.value=.5;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=260;let l=e.createGain();l.gain.setValueAtTime(t*.9,n),l.gain.exponentialRampToValueAtTime(.001,n+1.1),a.connect(o),o.connect(l),l.connect(this.master),l.connect(this.verb),a.start(n),a.stop(n+1.3)}whoosh(t=.2){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this._noiseBuf,i.playbackRate.setValueAtTime(.8,n),i.playbackRate.linearRampToValueAtTime(2.4,n+.5);let r=e.createBiquadFilter();r.type="bandpass",r.Q.value=1.4,r.frequency.setValueAtTime(300,n),r.frequency.exponentialRampToValueAtTime(1600,n+.5);let a=e.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(t,n+.22),a.gain.linearRampToValueAtTime(0,n+.6),i.connect(r),r.connect(a),a.connect(this.master),i.start(n),i.stop(n+.7)}ratchet(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this._noiseBuf,n.playbackRate.value=3.2;let i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=1900,i.Q.value=5;let r=t.createGain();r.gain.setValueAtTime(.09,e),r.gain.exponentialRampToValueAtTime(.001,e+.05),n.connect(i),i.connect(r),r.connect(this.master),n.start(e),n.stop(e+.08);let a=t.createOscillator();a.type="square",a.frequency.value=480;let o=t.createGain();o.gain.setValueAtTime(.02,e),o.gain.exponentialRampToValueAtTime(.001,e+.04),a.connect(o),o.connect(this.master),a.start(e),a.stop(e+.05)}drip(t=0){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine";let r=1400+Math.random()*900;i.frequency.setValueAtTime(r,n),i.frequency.exponentialRampToValueAtTime(r*.45,n+.09);let a=e.createGain();a.gain.setValueAtTime(.055,n),a.gain.exponentialRampToValueAtTime(.001,n+.14);let o=e.createStereoPanner();o.pan.value=t,i.connect(a),a.connect(o),o.connect(this.master),a.connect(this.verb),i.start(n),i.stop(n+.2)}bulbPop(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this._noiseBuf,n.playbackRate.value=2.8;let i=t.createBiquadFilter();i.type="highpass",i.frequency.value=2400;let r=t.createGain();r.gain.setValueAtTime(.5,e),r.gain.exponentialRampToValueAtTime(.001,e+.16),n.connect(i),i.connect(r),r.connect(this.master),r.connect(this.verb),n.start(e),n.stop(e+.2);for(let a=0;a<5;a++){let o=.06+a*.05+Math.random()*.04,l=t.createOscillator();l.type="sine",l.frequency.value=3800+Math.random()*2600;let c=t.createGain();c.gain.setValueAtTime(.028,e+o),c.gain.exponentialRampToValueAtTime(.001,e+o+.07),l.connect(c),c.connect(this.master),l.start(e+o),l.stop(e+o+.1)}}snip(){if(!this.started)return;this.pluck(660,.5,.992),this.pluck(49,.6,.999);let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this._noiseBuf,n.playbackRate.value=3;let i=t.createBiquadFilter();i.type="highpass",i.frequency.value=3e3;let r=t.createGain();r.gain.setValueAtTime(.3,e),r.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(i),i.connect(r),r.connect(this.master),n.start(e),n.stop(e+.15)}};var il=class{constructor(t,e){this.camera=t,this.dom=e,this.pos=new R(0,0,-3),this.yaw=Math.PI,this.pitch=0,this.vel=new R,this.keys={},this.locked=!1,this.enabled=!1,this.seated=!1,this.radius=.32,this.eyeHeight=1.62,this.bobT=0,this.stepDist=0,this.onStep=null,this.holdE=0,this.eDown=!1,this.ePressed=!1,this.kickV=0,this.kickRoll=0,window.addEventListener("keydown",n=>{this.keys[n.code]=!0,n.code==="KeyE"&&!this.eDown&&(this.eDown=!0,this.ePressed=!0)}),window.addEventListener("keyup",n=>{this.keys[n.code]=!1,n.code==="KeyE"&&(this.eDown=!1,this.holdE=0)}),document.addEventListener("mousemove",n=>{!this.locked||!this.enabled||(this.yaw-=n.movementX*.0021,this.pitch-=n.movementY*.0021,this.pitch=ln.clamp(this.pitch,-1.35,1.35))}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.dom})}lock(){this.dom.requestPointerLock?.()}get forward(){return new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}get lookDir(){let t=new R;return this.camera.getWorldDirection(t),t}teleport(t,e,n=null){this.pos.set(t,0,e),this.vel.set(0,0,0),n!==null&&(this.yaw=n)}kick(t,e=0){this.kickV=t,this.kickRoll=e}update(t,e,n){if(this.ePressedThisFrame=this.ePressed,this.ePressed=!1,this.eDown?this.holdE+=t:this.holdE=0,!this.enabled||this.seated){this._applyCamera(t,!0);return}let i=this.keys.ShiftLeft||this.keys.ShiftRight,r=i?4.6:2.9,a=this.forward,o=new R(-a.z,0,a.x),l=new R;(this.keys.KeyW||this.keys.ArrowUp)&&l.add(a),(this.keys.KeyS||this.keys.ArrowDown)&&l.sub(a),(this.keys.KeyA||this.keys.ArrowLeft)&&l.sub(o),(this.keys.KeyD||this.keys.ArrowRight)&&l.add(o),l.lengthSq()>0&&l.normalize().multiplyScalar(r),this.vel.lerp(l,Math.min(1,t*10));let c=this.vel.clone().multiplyScalar(t);this.pos.x+=c.x,this._resolve(e,"x"),this.pos.z+=c.z,this._resolve(e,"z");let h=Math.hypot(c.x,c.z);this.stepDist+=h;let u=i?2.2:1.7;this.stepDist>u&&h>.001&&(this.stepDist=0,this.onStep?.(n(this.pos),i)),h>.005&&(this.bobT+=t*(i?11:7.5)),this._applyCamera(t,!1)}_resolve(t,e){for(let n of t){if(n.disabled)continue;let i=Math.max(n.minX,Math.min(this.pos.x,n.maxX)),r=Math.max(n.minZ,Math.min(this.pos.z,n.maxZ)),a=this.pos.x-i,o=this.pos.z-r,l=a*a+o*o;if(l<this.radius*this.radius){let c=Math.sqrt(Math.max(l,1e-6)),h=(this.radius-c)/c;e==="x"?this.pos.x+=a*h:this.pos.z+=o*h,l<1e-6&&(e==="x"?this.pos.x=this.pos.x<(n.minX+n.maxX)/2?n.minX-this.radius:n.maxX+this.radius:this.pos.z=this.pos.z<(n.minZ+n.maxZ)/2?n.minZ-this.radius:n.maxZ+this.radius)}}}_applyCamera(t,e){let n=e?0:Math.sin(this.bobT)*.035,i=e?0:Math.cos(this.bobT*.5)*.02;this.kickV*=Math.max(0,1-t*7),this.kickRoll*=Math.max(0,1-t*5),this.camera.position.set(this.pos.x+i*Math.cos(this.yaw),this.pos.y+this.eyeHeight+n,this.pos.z+i*Math.sin(this.yaw)),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch+this.kickV,this.camera.rotation.z=this.kickRoll}handPos(){let t=this.lookDir;return new R(this.pos.x+t.x*.5,this.pos.y+this.eyeHeight-.35+t.y*.3,this.pos.z+t.z*.5)}};var Zc=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,xx=`
uniform sampler2D tScene;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tScene, vUv).rgb;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  float k = smoothstep(0.5, 1.05, l);
  gl_FragColor = vec4(c * k, 1.0);
}`,_x=`
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
}`,yx=`
uniform sampler2D tScene;
uniform sampler2D tBloomA;  // \u7A84\u6CDB\u5149\uFF08\u4EAE\u5FC3\uFF09
uniform sampler2D tBloomB;  // \u5BBD\u8F89\u5149\uFF08\u96FE\u611F/halation\uFF09
uniform float uTime;
uniform float uRedPulse;   // \u70B9\u540D\u65F6\u7684\u7EA2\u8109\u51B2
uniform float uShock;      // \u4E8B\u4EF6\u51B2\u51FB\uFF08\u6536\u58F0/\u70B9\u706B\uFF09
uniform float uFlash;      // \u9707\u60CA\u8282\u62CD\u95EA\u767D
uniform float uLetterbox;  // \u7535\u5F71\u9ED1\u8FB9 0~1
uniform float uExposure;
uniform float uDread;      // \u9759\u9ED8\u4F4E\u538B\uFF1A0=\u6B63\u5E38 1=\u6536\u58F0\u4E2D\uFF08\u53BB\u9971\u548C+\u8FB9\u7F18\u4E0B\u6C89\uFF09
uniform vec2 uTexel;       // 1/\u5206\u8FA8\u7387\uFF08\u9510\u5316\u7528\uFF09
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
  // \u9510\u5316\uFF08unsharp mask\u2014\u2014\u628A 1.5x \u50CF\u7D20\u6BD4\u7684\u753B\u9762\u9510\u56DE"\u6570\u5B57\u827A\u672F"\u7EA7\u6E05\u6670\u5EA6\uFF09
  {
    vec3 n1 = texture2D(tScene, uv + vec2(uTexel.x, 0.0)).rgb;
    vec3 n2 = texture2D(tScene, uv - vec2(uTexel.x, 0.0)).rgb;
    vec3 n3 = texture2D(tScene, uv + vec2(0.0, uTexel.y)).rgb;
    vec3 n4 = texture2D(tScene, uv - vec2(0.0, uTexel.y)).rgb;
    vec3 blur4 = (n1 + n2 + n3 + n4) * 0.25;
    col += (col - blur4) * 0.55;
  }
  // \u53CC\u5C3A\u5EA6\u6CDB\u5149\uFF1A\u7A84\u4EAE\u5FC3\u4E2D\u6027\uFF1B\u5BBD\u8F89\u5149\u504F\u6696\u7EA2\u2014\u2014\u80F6\u7247 halation\uFF08\u9AD8\u5149\u8FB9\u7F18\u6E17\u7EA2\uFF0C\u6797\u5947\u5F0F\u8FC7\u66DD\u7B7E\u540D\uFF09
  vec3 bloomA = texture2D(tBloomA, uv).rgb;
  vec3 bloomB = texture2D(tBloomB, uv).rgb;
  col += bloomA * 0.66;
  col += bloomB * 0.55 * vec3(1.06, 0.74, 0.52);
  // \u66DD\u5149 + ACES \u8C03\u8272
  col *= uExposure * (1.0 + uFlash * 1.6);
  col = aces(col);
  // \u6696\u9ED1\uFF08\u9634\u5F71\u5F80\u7425\u73C0\u504F\uFF0C\u7EDD\u4E0D\u504F\u84DD\uFF09
  col = pow(col, vec3(0.96, 1.0, 1.06));
  col += vec3(0.014, 0.009, 0.006);
  // \u8F7B vibrance\uFF08\u4F4E\u9971\u548C\u50CF\u7D20\u8865\u9971\u548C\u2014\u2014\u7EA2\u91D1\u66F4\u5B9E\uFF0C\u4E0D\u52A8\u80A4\u8272\u9AD8\u5149\uFF09
  {
    float lum0 = dot(col, vec3(0.299, 0.587, 0.114));
    float sat = length(col - vec3(lum0));
    col = mix(vec3(lum0), col, 1.0 + (0.18 - sat * 0.3) * (1.0 - uDread * 0.6));
  }
  // \u9759\u9ED8\u4F4E\u538B\uFF1A\u6536\u58F0\u65F6\u753B\u9762\u5FAE\u5FAE\u5931\u8840\u3001\u8FB9\u7F18\u4E0B\u6C89\u2014\u2014\u9759\u9ED8=\u6700\u5927\u8B66\u62A5\u7684\u89C6\u89C9\u7248
  {
    float lum1 = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(col, vec3(lum1) * vec3(1.0, 0.97, 0.94), uDread * 0.22);
    col *= 1.0 - uDread * smoothstep(0.06, 0.42, r2) * 0.22;
  }
  // \u53CC\u5C42\u9897\u7C92\uFF08\u7C97+\u7EC6\uFF0C\u6697\u90E8\u66F4\u91CD\u2014\u2014\u80F6\u7247\u7279\u6027\uFF09
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  float g1 = hash(uv * vec2(1920.0, 1080.0) + fract(uTime * 7.0));
  float g2 = hash(uv * vec2(640.0, 360.0) + fract(uTime * 13.0) * 3.0);
  col += (g1 - 0.5) * mix(0.05, 0.016, lum);
  col += (g2 - 0.5) * mix(0.022, 0.006, lum);
  // \u6697\u89D2\uFF08\u547C\u5438\u611F\uFF1A\u6781\u6162\u7684 0.5% \u8D77\u4F0F\u2014\u2014\u623F\u95F4\u5728\u6781\u8F7B\u5730\u5598\uFF09
  float breathe = 1.0 + sin(uTime * 0.23) * 0.005;
  float vig = (1.0 - r2 * (1.08 + uShock * 0.8)) * breathe;
  col *= vig;
  // \u70B9\u540D\u7EA2\u8109\u51B2\uFF08\u753B\u9762\u56DB\u5468\u6E17\u7EA2\u2014\u2014\u8155\u7EF3\u7684\u989C\u8272\uFF09
  float edge = smoothstep(0.18, 0.5, r2);
  col = mix(col, vec3(0.42, 0.03, 0.04), edge * uRedPulse * 0.55);
  // \u95EA\u767D\uFF08\u9707\u60CA\u8282\u62CD\uFF09
  col = mix(col, vec3(0.9, 0.86, 0.8), clamp(uFlash, 0.0, 1.0) * 0.55);
  // \u7535\u5F71\u9ED1\u8FB9\uFF08\u8F6F\u8FB9\u7F18\uFF09
  float bar = 0.085 * uLetterbox;
  float lb = smoothstep(bar, bar + 0.004, uv.y) * smoothstep(bar, bar + 0.004, 1.0 - uv.y);
  col *= mix(1.0, lb, step(0.001, uLetterbox));
  gl_FragColor = vec4(col, 1.0);
}`,sl=class{constructor(t,e,n){this.renderer=t,this.scene=new _i,this.cam=new ns(-1,1,1,-1,0,1),this.quadGeo=new ge(2,2),this.resize(e,n,!0),this.brightMat=new Xe({uniforms:{tScene:{value:null}},vertexShader:Zc,fragmentShader:xx}),this.blurMat=new Xe({uniforms:{tInput:{value:null},uDir:{value:new Ct}},vertexShader:Zc,fragmentShader:_x}),this.compMat=new Xe({uniforms:{tScene:{value:null},tBloomA:{value:null},tBloomB:{value:null},uTime:{value:0},uRedPulse:{value:0},uShock:{value:0},uFlash:{value:0},uLetterbox:{value:0},uExposure:{value:1.18},uDread:{value:0},uTexel:{value:new Ct(1/e,1/n)}},vertexShader:Zc,fragmentShader:yx}),this.quad=new W(this.quadGeo,this.compMat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.redPulse=0,this.shock=0,this.flash=0,this.letterbox=0,this.letterboxTarget=0,this.exposure=1.18,this.exposureTarget=1.18,this.dread=0,this.dreadTarget=0}resize(t,e,n=!1){let i={minFilter:He,magFilter:He};n||(this.rtScene.dispose(),this.rtA.dispose(),this.rtB.dispose(),this.rtC.dispose(),this.rtD.dispose()),this.rtScene=new qe(t,e,{...i,samples:2}),this.rtA=new qe(t>>2,e>>2,i),this.rtB=new qe(t>>2,e>>2,i),this.rtC=new qe(t>>3,e>>3,i),this.rtD=new qe(t>>3,e>>3,i),this.w=t,this.h=e}_blur(t,e,n,i,r){let a=this.renderer;this.quad.material=this.blurMat,this.blurMat.uniforms.tInput.value=t.texture,this.blurMat.uniforms.uDir.value.set(1/i,0),a.setRenderTarget(n),a.render(this.scene,this.cam),this.blurMat.uniforms.tInput.value=n.texture,this.blurMat.uniforms.uDir.value.set(0,1/r),a.setRenderTarget(e),a.render(this.scene,this.cam)}render(t,e,n,i){let r=this.renderer;this.redPulse=Math.max(0,this.redPulse-n*.8),this.shock=Math.max(0,this.shock-n*.5),this.flash=Math.max(0,this.flash-n*2.2),this.letterbox+=(this.letterboxTarget-this.letterbox)*Math.min(1,n*3),this.exposure+=(this.exposureTarget-this.exposure)*Math.min(1,n*.9),this.dread+=(this.dreadTarget-this.dread)*Math.min(1,n*1.4),r.setRenderTarget(this.rtScene),r.render(t,e),this.quad.material=this.brightMat,this.brightMat.uniforms.tScene.value=this.rtScene.texture,r.setRenderTarget(this.rtA),r.render(this.scene,this.cam),this._blur(this.rtA,this.rtA,this.rtB,this.w>>2,this.h>>2),this.quad.material=this.blurMat,this.blurMat.uniforms.tInput.value=this.rtA.texture,this.blurMat.uniforms.uDir.value.set(1/(this.w>>3),0),r.setRenderTarget(this.rtC),r.render(this.scene,this.cam),this.blurMat.uniforms.tInput.value=this.rtC.texture,this.blurMat.uniforms.uDir.value.set(0,1/(this.h>>3)),r.setRenderTarget(this.rtD),r.render(this.scene,this.cam),this._blur(this.rtD,this.rtD,this.rtC,this.w>>3,this.h>>3),this.quad.material=this.compMat;let a=this.compMat.uniforms;a.tScene.value=this.rtScene.texture,a.tBloomA.value=this.rtA.texture,a.tBloomB.value=this.rtD.texture,a.uTime.value=i,a.uRedPulse.value=this.redPulse,a.uShock.value=this.shock,a.uFlash.value=this.flash,a.uLetterbox.value=this.letterbox,a.uExposure.value=this.exposure,a.uDread.value=this.dread,a.uTexel.value.set(1/this.w,1/this.h),r.setRenderTarget(null),r.render(this.scene,this.cam)}};var vx=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Mx=`
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
}`,rl=class{constructor(t,e,n,i){this.renderer=t,this.scene=e,this.screens=[],this.future=i,this.activeFuture=[],this.time=0,this._idx=0,this.previewBoost=new is(10136251,4.5);for(let r of n){let a=r.kind==="preview"?new qe(256,192,{minFilter:He,magFilter:He}):null,o=null,l=null;r.kind==="vcr"&&(l=document.createElement("canvas"),l.width=256,l.height=192,o=new pn(l));let c=new Xe({uniforms:{tDiffuse:{value:a?a.texture:o},uTime:{value:0},uStatic:{value:0},uPower:{value:1}},vertexShader:vx,fragmentShader:Mx});r.mesh.material=c;let h=r.kind==="preview"?new $e(52,256/192,.1,60):null;h&&(h.position.copy(r.camPos),h.lookAt(r.camLook)),this.screens.push({def:r,rt:a,mat:c,cam:h,vcrCanvas:l,vcrTex:o,static:!1,power:!0})}}setFutureActive(t){this.activeFuture=t}setStatic(t,e){let n=this.screens.find(i=>i.def.id===t);n&&(n.static=e)}setPower(t,e){let n=this.screens.find(i=>i.def.id===t);n&&(n.power=e)}_drawVCR(t){let e=t.vcrCanvas.getContext("2d"),n=this.time;e.fillStyle="#5a0e12",e.fillRect(0,0,256,192);let i=128+Math.sin(n*.4)*40,r=e.createRadialGradient(i,90,10,i,90,120);if(r.addColorStop(0,"rgba(255,190,120,0.5)"),r.addColorStop(1,"rgba(255,190,120,0)"),e.fillStyle=r,e.fillRect(0,0,256,192),e.fillStyle="#e7b64c",e.font="90px serif",e.textAlign="center",e.textBaseline="middle",e.fillText("\u56CD",128,92),e.font="18px sans-serif",e.fillText("\u65B0\u5A5A\u5FEB\u4E50 \u767E\u5E74\u597D\u5408",128,160),Math.sin(n*.7)>.965||n%11>10.6){e.fillStyle="#0c0e10",e.fillRect(0,0,256,192),e.strokeStyle="rgba(90,64,56,0.9)",e.lineWidth=8;for(let a=0;a<5;a++)e.beginPath(),e.arc(128,210,40+a*34,Math.PI*1.15,Math.PI*1.85),e.stroke();e.fillStyle="rgba(231,182,76,0.6)",e.font="90px serif",e.fillText("\u56CD",128,92)}t.vcrTex.needsUpdate=!0}update(t,e){this.time+=t;for(let o of this.screens)o.mat.uniforms.uTime.value=this.time,o.mat.uniforms.uStatic.value+=((o.static?1:0)-o.mat.uniforms.uStatic.value)*t*3,o.mat.uniforms.uPower.value+=((o.power?1:0)-o.mat.uniforms.uPower.value)*t*4;let n=this.screens.filter(o=>{let l=new R;return o.def.mesh.getWorldPosition(l),l.distanceTo(e)<16&&o.power});if(n.length===0)return;this._idx=(this._idx+1)%n.length;let i=n[this._idx];if(i.def.kind==="vcr"){this._drawVCR(i);return}if(i.static)return;let r=[];for(let o of this.activeFuture){let l=this.future[o];l&&!l.visible&&(l.visible=!0,r.push(l))}this.scene.add(this.previewBoost);let a=this.scene.fog;this.scene.fog=null,this.renderer.setRenderTarget(i.rt),this.renderer.render(this.scene,i.cam),this.renderer.setRenderTarget(null),this.scene.fog=a,this.scene.remove(this.previewBoost);for(let o of r)o.visible=!1;i.def.glow&&(i.def.glow.intensity=3+Math.sin(this.time*13.7)*.8+Math.random()*.5)}};var al=class{constructor(){this.el={};for(let t of["subtitle","objective","prompt","card","fade","end","endTitle","endBody","endBtn","timerbar","timerfill","callHint","reticleWrap","cutring","endCard"])this.el[t]=document.getElementById(t);this.ringFg=this.el.cutring.querySelector(".fg"),this._subT=null,this._cardT=null,this._retState=""}subtitle(t,e=4){let n=this.el.subtitle;n.textContent=t,n.style.opacity=1,clearTimeout(this._subT),this._subT=setTimeout(()=>{n.style.opacity=0},e*1e3)}objective(t){let e=this.el.objective;e.innerHTML='<span class="obj-mark">\u25C6</span> '+t,e.style.opacity=1,e.classList.remove("obj-flash"),e.offsetWidth,e.classList.add("obj-flash")}prompt(t,e=null){let n=this.el.prompt;if(!t){n.style.opacity=0;return}n.innerHTML=(e?`<span class="key">${e}</span>`:"")+`<span>${t}</span>`,n.style.opacity=1}reticle(t){this._retState!==t&&(this._retState=t,this.el.reticleWrap.className=t?"ret-"+t:"")}cutRing(t){if(t<=0){this.el.cutring.style.opacity=0;return}this.el.cutring.style.opacity=1,this.ringFg.style.strokeDashoffset=(188.5*(1-Math.min(1,t))).toFixed(1)}card(t,e="",n=3.4){let i=this.el.card;i.innerHTML=`<div class="card-title">${t}</div><div class="card-sub">${e}</div>`,i.style.opacity=1,clearTimeout(this._cardT),this._cardT=setTimeout(()=>{i.style.opacity=0},n*1e3)}fade(t,e=.6){let n=this.el.fade;n.style.transition=`opacity ${e}s ease`,n.style.opacity=t}callHint(t){this.el.callHint.style.opacity=t?1:0}timer(t,e=1){this.el.timerbar.style.opacity=t?1:0,this.el.timerfill.style.width=(e*100).toFixed(1)+"%"}end(t,e,n,i,r=!1){this.el.endTitle.textContent=t,this.el.endBody.innerHTML=e,this.el.endBtn.textContent=n,this.el.endCard.style.display=r?"block":"none",this.el.end.style.display="flex",requestAnimationFrame(()=>{this.el.end.style.opacity=1}),this.el.endBtn.onclick=i}hideEnd(){this.el.end.style.opacity=0,setTimeout(()=>{this.el.end.style.display="none"},600)}};var bx={\u5BB4\u4F1A\u5385:"\u4E1C\u5385",\u670D\u52A1\u8D70\u5ECA:"\u8D70\u5ECA",\u5927\u5802:"\u5927\u5802",\u6D77\u6D0B\u9986\u8FDE\u5ECA:"\u8FDE\u5ECA",\u5458\u5DE5\u8FDE\u5ECA:"\u540E\u5ECA"},ol=class{constructor(t){this.g=t,this.beat=0,this.noise=0,this.noiseCooldown=0,this.call={active:!1,waiter:null},this.escorting=!1,this.grace=0,this.finaleTimer=-1,this.cutT=0,this.gateNoiseDone=!1,this.lightMult={hall:1,corridor:1,lobby:1,aqua:1,connector:1},this.hallColor=new zt(16760952),this.ended=!1,this._pending=[]}after(t,e){this._pending.push({t,fn:e})}announce(t,e,n=null,i=""){let{audio:r,ui:a,mc:o,post:l}=this.g;r.hush(3),l.shock=.8,l.letterboxTarget=1,this.after(2.2,()=>r.paChime()),this.after(3.4,()=>{r.broadcast(e,104+this.beat*4),a.subtitle("\u3010\u5E7F\u64AD\u3011"+t,Math.max(3.5,e*.4)),n&&a.card(n,i);let c=1.4*(1-o.sync);this.after(3.4+c,()=>o.gesture())}),this.after(7.5,()=>{r.unhush(),l.letterboxTarget=this._lbBase||0})}addNoise(t,e=!1){this.beat<2||this.ended||(this.noise=Math.min(1.6,this.noise+t),!e&&this.noise>=1&&this.noiseCooldown<=0&&!this.call.active&&!this.escorting&&this.triggerCall(!1))}triggerCall(t=!1){if(this.call.active||this.ended)return;let{audio:e,ui:n,waiters:i,player:r}=this.g;this.call.active=!0,this.noise=0,this.noiseCooldown=26,e.tension(1.8);let a=this.g.regionNameAt(r.pos)||"\u5927\u5802",o=bx[a]||a;this.after(1.2,()=>{e.broadcast(9,96),n.subtitle(`\u3010\u5E7F\u64AD\u3011${o}\u7684\u8FD9\u4F4D\u6765\u5BBE\u2014\u2014\u8BF7\u5165\u5E2D\u3002`,4)}),n.callHint(!0),t&&n.objective("\u53F8\u4EEA\u70B9\u4E86\u4F60\u7684\u540D \u2014\u2014 \u8155\u7EF3\u4EAE\u4E86\u3002\u51B2\u5230\u4EFB\u610F<b>\u793C\u94A9</b>\u524D\u6309 E\uFF0C\u628A\u8155\u7EF3<b>\u5BC4\u6302</b>\u4E0A\u53BB\uFF01");let l=null,c=1e9;for(let h of i){if(!h.visible)continue;let u=h.group.position.distanceTo(r.pos);u<c&&(c=u,l=h)}l&&(l.startChase(),this.call.waiter=l)}resolveCall(){let{audio:t,ui:e,wrist:n}=this.g;this.call.active=!1,e.callHint(!1),n.shorten(),t.pluck(140,.5),t.pluck(52,.4),this.call.waiter&&(this.call.waiter.stopChase(this.g.sys),this.call.waiter=null),e.subtitle("\u8155\u7EF3\u5BC4\u6302\u4E0A\u4E86\u3002\u5B83\u53C8\u77ED\u4E86\u4E00\u622A\u3002",3.5),this.beat===3&&!this._doorCObjGiven&&(this._doorCObjGiven=!0,this.after(2,()=>e.objective("\u53BB\u897F\u5899\u7684<b>\u8FDE\u5ECA\u95E8</b>\u2014\u2014\u6458\u4E0B\u62E6\u95E8\u7EF3\uFF0C\u8FDB\u6D77\u6D0B\u9986\u8FDE\u5ECA\u3002")))}escort(t){if(this.escorting||this.grace>0||this.ended)return;let{ui:e,player:n,audio:i,post:r}=this.g;this.escorting=!0,this.call.active=!1,e.callHint(!1),e.reticle(""),this.call.waiter&&(this.call.waiter.stopChase(this.g.sys),this.call.waiter=null);let a=t.group.position;n.yaw=Math.atan2(n.pos.x-a.x,n.pos.z-a.z),n.pitch=-.06,n.kick(-.05,.03),i.thud(.25),i.sting(.22),r.shock=1,e.fade(1,.9),e.subtitle("\u300C\u60A8\u7684\u4F4D\u7F6E\u5728\u8FD9\u8FB9\u3002\u300D",4),this.after(1.6,()=>{if(!this.escorting||this.ended){e.fade(0,.8);return}n.teleport(-1.7,-10.2,0),n.pitch=.14,n.seated=!0,t.group.position.set(-2.6,0,-10.2),t.state="stand",t.standTimer=5,e.fade(0,.8),e.prompt("\u4F60\u88AB\u6309\u8FDB\u4E86\u4E00\u628A\u7A7A\u6905\u5B50 \u2014\u2014 <b>\u957F\u6309</b>\u7AD9\u8D77\u6765","E")})}standUp(){let{ui:t,player:e}=this.g;e.seated=!1,this.escorting=!1,this.grace=7,e.pitch=0,e.kick(.04),t.fade(0,.6),t.prompt(""),t.subtitle("\u8D81\u4ED6\u4EEC\u6CA1\u770B\u7740\u2014\u2014\u8D70\u3002",3)}_shockCorridor(){this._shock1=!0;let{audio:t,ui:e,post:n,L:i,waiters:r,sys:a}=this.g;t.setLayer("roomtone",0,.5);let o=this.lightMult.corridor;this.lightMult.corridor=.02;let l=i.dyn.tubes.filter(c=>c.light.position.z<0);l.sort((c,h)=>h.light.position.x-c.light.position.x),l.forEach((c,h)=>{this.after(.4+h*.5,()=>{c.light.intensity=0,c.mat.emissiveIntensity=0,t.ratchet(),t.thud(.12)})}),this.after(.4+l.length*.5,()=>{n.shock=1.2,t.boom(.35),e.subtitle("\u706F\u706D\u4E0B\u6765\u7684\u987A\u5E8F\u2014\u2014\u662F\u671D\u7740\u4F60\u6765\u7684\u3002",4);let c=r[0];c.setVisible(!0);let h=a.cords.filter(u=>u.rideable&&u.a&&u.b&&u.pointAt(.5).x>17&&u.pointAt(.5).x<31);if(h.length){c.cord=h[0],c.t=.95,c.dir=-1,c.state="ride";let u=h[0].pointAt(c.t);c.group.position.set(u.x,0,u.z)}t.sting(.5),t.pluck(60,.5,.998),a.cords.forEach(u=>{u.mat.emissiveIntensity=2.6})}),this.after(3.6+l.length*.5,()=>{this.beat<3&&(this.lightMult.corridor=o),i.dyn.tubes.forEach(c=>{c.mat.emissiveIntensity=2.6}),a.cords.forEach(c=>{c.mat.emissiveIntensity=1.2}),n.flash=.5,t.setLayer("roomtone",.05,2),e.subtitle("\u706F\u56DE\u6765\u7684\u65F6\u5019\uFF0C\u6258\u76D8\u4E0A\u7684\u83DC\u6362\u8FC7\u4E86\u3002",4.5)})}_shockGlass(){this._shock2=!0;let{audio:t,ui:e,post:n,L:i}=this.g,r=i.dyn.seaShade;this._shadeLunge={t:0,fromX:r.position.x,fromY:r.position.y},this.after(.5,()=>{t.boom(.95),n.shock=1.6,n.flash=.55,this.g.player.kick(-.09,.05),i.dyn.cracks.forEach(o=>{o.material.opacity=Math.max(o.material.opacity,.3)});let a=this.lightMult.aqua;this.lightMult.aqua=.08,e.subtitle("\u73BB\u7483\u95F7\u54CD\u4E86\u4E00\u58F0\u3002\u90A3\u4E2A\u5F71\u5B50\u6BD4\u6574\u9762\u5899\u8FD8\u957F\u3002",5);for(let o=0;o<3;o++)this.after(.6+o*.8,()=>t.glassCreak());this.after(3.2,()=>{this.lightMult.aqua=a}),this.addNoise(.3,!0)})}_shockBulb(){this._shock3=!0;let{audio:t,post:e,L:n,gazer:i,player:r}=this.g,a=null,o=1e9;for(let l of n.dyn.bulbs){let c=Math.abs(l.light.position.z-r.pos.z);c<o&&(o=c,a=l)}a&&(a.light.intensity=0,a.light.userData.base=0,a.group.visible=!1,t.bulbPop(),e.flash=.45,e.shock=1,r.kick(-.05,-.03)),this.after(.7,()=>{i.appearAt(-17.1,Math.max(r.pos.z-6,-5),null),t.sting(.4),this.g.ui.subtitle("\u706F\u788E\u7684\u90A3\u4E00\u4E0B\uFF0C\u5979\u5F80\u524D\u7AD9\u4E86\u4E00\u6B65\u3002\u6CA1\u6709\u811A\u6B65\u58F0\u3002",5)})}start(){let{ui:t}=this.g;t.fade(0,2.5),this.beat=1,t.card("\u8BAE\u7A0B\u4E00 \xB7 \u8FCE\u5BBE","\u5357\u65B9\u5927\u9152\u5E97 \xB7 2001\u5E74 \u79CB"),this.g.wrist.glow=1.4,this.after(2.5,()=>t.subtitle('\u5A5A\u5BB4\u5F00\u59CB\u524D\uFF0C\u5468\u7D6E\u62C9\u7740\u4F60\u7684\u624B\u8155\u7CFB\u4E86\u6839\u7EA2\u7EF3\uFF1A"\u5168\u4E4E\u4EBA\u3002\u522B\u6458\u3002"',6)),this.after(9,()=>t.subtitle("\u5168\u573A\u5BBE\u5BA2\u7684\u8155\u4E0A\u90FD\u6709\u4E00\u6839\u3002\u4ED6\u4EEC\u7684\u90FD\u5782\u5230\u5730\u4E0A\uFF0C\u63A5\u8FDB\u4E86\u540C\u4E00\u5F20\u7F51\u3002",6)),this.after(16,()=>t.objective("\u5230<b>\u4E3B\u684C</b>\u524D\u542C\u53F8\u4EEA\u62A5\u5E55\uFF08WASD \u79FB\u52A8 / \u9F20\u6807\u73AF\u987E\uFF09")),this.g.guests.layoutParty([[-6.5,-6],[6.5,-6],[-11,-9.5],[11,-9.5],[-6.5,-12.5],[6.5,-12.5],[-11,-3],[11,-3]]),this.g.audio.setLayer("murmur",.045,3),this.g.audio.setLayer("roomtone",.05,1),this.g.audio.motif(!1)}_beat1\u5230\u4E3B\u684C(){this.beat=1.5;let{ui:t,guests:e}=this.g;this.announce("\u5404\u4F4D\u6765\u5BBE\uFF0C\u6B22\u8FCE\u5149\u4E34\u5468\u5E9C\u559C\u5BB4\u3002\u8BF7\u5404\u4F4D\u6765\u5BBE\u2014\u2014\u5165\u5E2D\u3002",14,"\u8BAE\u7A0B\u4E8C \xB7 \u5165\u5E2D"),e.turnTo(0,-18),this.after(8,()=>t.subtitle('\u5468\u7D6E\u7684\u6BCD\u4EB2\u585E\u7ED9\u4F60\u4E00\u5F20\u5355\u5B50\uFF1A"\u4E56\uFF0C\u53BB\u540E\u5934\u5E2E\u62FF\u559C\u7CD6\u3002\u8D70\u5ECA\u76F4\u8D70\u5C31\u662F\u3002"',6.5)),this.after(15,()=>t.objective("\u4ECE<b>\u4E1C\u95E8</b>\u53BB\u670D\u52A1\u8D70\u5ECA \u2014\u2014 \u95E8\u88AB<b>\u62E6\u95E8\u7EF3</b>\u62F4\u7740\uFF1A\u5BF9\u51C6\u7EA2\u7EF3\u7AEF\u5934\u6309 E <b>\u6458</b>\u4E0B\uFF0C\u518D\u5BF9\u51C6\u65C1\u8FB9\u7684\u7A7A\u94A9\u6309 E <b>\u6302</b>\u4E0A"))}_beat2\u5F00\u5E2D(){this.beat=2;let{ui:t,waiters:e,sys:n,crt:i}=this.g;this.announce("\u5409\u65F6\u5DF2\u5230\uFF0C\u559C\u5BB4\u2014\u2014\u5F00\u5E2D\u3002",10,"\u8BAE\u7A0B\u4E09 \xB7 \u4E0A\u83DC"),e[0].setVisible(!0),e[0].mountNearest(n,new R(24,0,-6.2)),e[1].setVisible(!0),e[1].mountNearest(n,new R(38.2,0,6)),i.setFutureActive(["corridor"]),this.after(6,()=>t.objective("\u7A7F\u8FC7\u670D\u52A1\u8D70\u5ECA\u53BB<b>\u5927\u5802</b>\u3002\u4F8D\u5E94\u53EA\u6CBF\u7EA2\u7EF3\u6ED1\u2014\u2014\u7EF3\u7F51\u5C31\u662F\u4ED6\u4EEC\u7684\u5168\u90E8\u8DEF\u7EBF\u3002\u53EF\u4EE5<b>\u6539\u6302\u7EA2\u7EF3</b>\u6539\u5199\u5B83\u3002")),this.after(12,()=>t.subtitle("\u4F20\u83DC\u53E3\u7684\u7535\u89C6\u6BD4\u73B0\u5B9E\u65E9\u4E00\u6863\u2014\u2014\u5B83\u5728\u64AD\u8FD9\u6761\u8D70\u5ECA\u63A5\u4E0B\u6765\u7684\u7EF3\u7F51\u3002",6))}_beat3\u656C\u9152\u70B9\u706B(){this.beat=3;let{ui:t,audio:e,L:n,crt:i}=this.g;e.hush(4.5),this.g.post.shock=1.2,t.subtitle("\u5168\u697C\u7684\u58F0\u97F3\u9000\u6F6E\u5F0F\u5730\u6536\u4E86\u2014\u2014\u50CF\u6D77\u5728\u5438\u6C14\u3002",5),this.after(4.5,()=>{e.paChime(),this.after(1.2,()=>{e.broadcast(12,100),t.subtitle("\u3010\u5E7F\u64AD\u3011\u6709\u8BF7\u65B0\u4EBA\uFF0C\u5411\u5404\u4F4D\u6765\u5BBE\u2014\u2014\u656C\u9152\u3002",5),t.card("\u8BAE\u7A0B\u56DB \xB7 \u656C\u9152","\u8FD4\u6F6E")})}),this.after(7.5,()=>{e.motif(!0,.05),e.setLayer("sea",.6,4),e.setLayer("murmur",0,2),e.unhush(1),this.lightMult={hall:.4,corridor:.55,lobby:.42,aqua:.8,connector:.8},n.dyn.fog.density=.022,n.dyn.pits.forEach(r=>r.visible=!0),n.dyn.headlights.mat.opacity=.12,i.setFutureActive(["lobby"]),t.subtitle("\u706F\u6CA1\u706D\u3002\u53EF\u5927\u5802\u50CF\u4E00\u95F4\u88AB\u4F4F\u4E86\u51E0\u5341\u5E74\u7684\u6DF1\u6D77\u3002\u5730\u4E0A\u6709\u51E0\u5757\u4E4C\u4EAE\u7684\u51F9\u5751\u2014\u2014\u6709\u4EC0\u4E48\u4E1C\u897F\u4ECE\u5EFA\u7B51\u91CC\u8D77\u8EAB\u8D70\u4E86\u3002",8),this.g.post.shock=1}),this.after(15,()=>this.triggerCall(!0))}_beat4\u4E0A\u5934(){this.beat=4;let{ui:t,waiters:e,sys:n,crt:i}=this.g;this.announce("\u5409\u65F6\u5DF2\u5230\uFF0C\u8BF7\u5168\u798F\u4EBA\u2014\u2014\u4E0A\u524D\u3002",11,"\u8BAE\u7A0B\u4E94 \xB7 \u4E0A\u5934"),e[2].setVisible(!0),e[2].mountNearest(n,new R(15,0,22)),i.setFutureActive(["aqua"]),this.after(7,()=>t.objective("\u901A\u8FC7<b>\u68C0\u4FEE\u95F8</b>\uFF1A\u95F8\u95E8\u7684\u7EA2\u7EF3\u5361\u5728\u9519\u94A9\u4E0A\u3002\u6302\u5230\u9AD8\u5904<b>\u7EDE\u76D8\u94A9</b>\uFF1D\u6162\u800C\u5B89\u9759\uFF1B\u6302\u5230\u8FD1\u5904<b>\u5361\u6263\u94A9</b>\uFF1D\u5FEB\u4F46\u5DE8\u54CD\u2014\u2014\u73BB\u7483\u53D7\u4E0D\u4E86\u5DE8\u54CD\u3002")),this.after(14,()=>this.g.ui.subtitle("\u552E\u7968\u53F0\u7684\u7535\u89C6\u91CC\uFF0C\u8FD9\u9762\u73BB\u7483\u5DF2\u7ECF\u9677\u8FDB\u6765\u4E86\u3002\u5B83\u5728\u7B49\u4E00\u4E2A\u54CD\u3002",6))}_beat4b\u8FDE\u5ECA(){this.beat=4.5;let{ui:t,gazer:e}=this.g;t.objective("\u6CBF<b>\u5458\u5DE5\u8FDE\u5ECA</b>\u56DE\u5BB4\u4F1A\u5385\u3002"),e.appearAt(-17.1,8,null),t.subtitle("\u8FDE\u5ECA\u5C3D\u5934\u7AD9\u7740\u4E2A\u7A7F\u65E7\u5F0F\u793C\u670D\u7684\u5973\u4EBA\u3002\u5979\u8155\u4E0A\u7684\u7EA2\u7EF3\u2014\u2014\u662F\u526A\u65AD\u7684\u3002",6.5)}_beat5\u9001\u5165\u6D1E\u623F(){this.beat=5;let{ui:t,sys:e,L:n,crt:i,guests:r,bride:a,waiters:o,mc:l,audio:c,post:h}=this.g;l.sync=1,this._lbBase=.6,this.announce("\u9001\u2014\u2014\u5165\u2014\u2014\u6D1E\u2014\u2014\u623F\u2014\u2014",8,"\u8BAE\u7A0B\u516D \xB7 \u9001\u5165\u6D1E\u623F","\u559C\u4E8B\u4E0D\u8BB8\u9000\u5E2D"),this.after(1.2,()=>{c.thud(.7),this.g.player.kick(-.05)}),this.after(5,()=>{n.dyn.throat.visible=!0,this._garlandDrop=0,c.whoosh(.35),h.flash=.35,this.lightMult.hall=.45,this.hallColor.setHex(16734264),n.dyn.fog.density=.03,i.setStatic("T03",!0),i.setFutureActive([]),c.setLayer("sea",1,3),r.layoutFinale([0,-13.5]),a.show(-.9,-14.6,.6),e.clearAllCords(),e.addCord("hW_wall","hStageR",{slack:.3}),e.addCord("hE_wall","hStageL",{slack:.3}),e.addCord("hW_free","hMainA",{slack:.4}),e.addCord("hMainA","hMainB",{slack:.1,tag:"seatlock",rideable:!1}),this._candle||(this._candle=new Bi(16751184,14,9,1.6),this._candle.position.set(0,1.8,-13.5),this.g.scene.add(this._candle));for(let u=0;u<3;u++)o[u].setVisible(!0),o[u].group.position.set(-6+u*6,0,-6),o[u].mountNearest(e,o[u].group.position);this.g.gazer.appearAt(-5.5,-16.2,Math.atan2(2.1- -5.5,-13.5- -16.2)),this.finaleTimer=110,t.objective("\u4E3B\u684C\u4E1C\u4FA7\u7684<b>\u4E0A\u5BBE\u5E2D</b>\u5C31\u662F\u7559\u7ED9\u4F60\u7684\u5E2D\u4F4D \u2014\u2014 \u6458\u4E0B\u6346\u5E2D\u7684\u7EA2\u7EF3\uFF0C\u5230\u5E2D\u524D<b>\u957F\u6309 E \u526A\u65AD\u4F60\u7684\u8155\u7EF3</b>\u3002\u56DE\u7738\u5BA2\u76EF\u7740\u7684\u65B9\u5411\u5C31\u662F\u90A3\u628A\u6905\u5B50\u3002"),this.g.post.shock=1.4})}_cut(){if(this.ended)return;this.ended=!0;let{ui:t,audio:e,mc:n,waiters:i,guests:r,L:a,crt:o,post:l,player:c}=this.g;this.finaleTimer=-1,this.call.active=!1,this.call.waiter=null,t.callHint(!1),t.timer(!1),t.prompt(""),t.cutRing(0),t.reticle(""),e.snip(),e.hush(.5),e.setLayer("sea",0,6),e.setThreat(0,0),l.flash=.8,l.shock=1.6,c.kick(-.1,.05),this._lbBase=1,l.letterboxTarget=1,n.silenced=!0,i.forEach(h=>{h.state="stand",h.standTimer=1e9}),r.turnTo(0,8),o.setStatic("T01",!0),o.setStatic("T02",!0),o.setStatic("T07",!0),this.g.wrist.mat.color.setHex(2761766),this.g.wrist.mat.emissive.setHex(0),t.subtitle("\u7EF3\u65AD\u7684\u90A3\u4E00\u58F0\u4E4B\u540E\u2014\u2014\u6574\u680B\u697C\u7B2C\u4E00\u6B21\u6CA1\u6709\u58F0\u97F3\u3002\u53F8\u4EEA\u5F20\u7740\u5C01\u6B7B\u7684\u53E3\uFF0C\u5E7F\u64AD\u91CC\u4EC0\u4E48\u4E5F\u6CA1\u6709\u3002",8),this.after(4,()=>{e.motif(!0,.035),t.subtitle("\u8EAB\u540E\uFF0C\u7EA2\u5E55\u540E\u9762\uFF0C\u6709\u5F88\u957F\u5F88\u957F\u7684\u4E1C\u897F\u6781\u6162\u5730\u677E\u5F00\u4E86\u8FD9\u680B\u697C\u3002",7),a.dyn.doorSOpen=!0,a.dyn.doorSCollider.disabled=!0,a.dyn.headlights.mat.opacity=.9,this._lbBase=.6,l.letterboxTarget=.6,t.objective("\u6563\u573A\u4E86 \u2014\u2014 \u4ECE<b>\u6B63\u95E8</b>\u51FA\u53BB\u3002")})}_goodEnd(){if(this._finished)return;this._finished=!0;let{ui:t,audio:e,L:n,post:i}=this.g;n.dyn.headlights.mat.opacity=1,i.flash=1.2,i.letterboxTarget=1,e.motif(!1,.045),t.fade(1,3),e.setLayer("roomtone",0,2),this.after(3.2,()=>{t.end("\u6563 \u573A",'\u6D77\u96FE\u91CC\u505C\u7740\u4E00\u6392\u8F66\uFF0C\u8F66\u706F\u5168\u4EAE\u7740\u3002<br>\u6CA1\u6709\u4EBA\u6309\u5587\u53ED\u3002\u6CA1\u6709\u4EBA\u50AC\u3002<br><br>\u4F60\u8155\u4E0A\u7684\u7EF3\u5934\u8FD8\u5728\uFF0C\u526A\u65AD\u7684\u3002<br>\u548C\u90A3\u4E2A\u5973\u4EBA\u7684\u4E00\u6837\u3002<br><br><div class="credits">\u300A\u8FD4\u6F6E FANCHAO\u300B\xB7\u300C\u559C\u5BB4\u300D\u5782\u76F4\u5207\u7247 v1.0<br>\u8BBE\u8BA1 / \u7A0B\u5E8F / \u7F8E\u672F / \u97F3\u9891 \u2014\u2014 \u8FD4\u6F6E\u5236\u4F5C\u7EC4<br>\u672C\u5305\u5168\u90E8\u8D44\u4EA7\uFF08\u7EB9\u7406\xB7\u6A21\u578B\xB7\u5149\u7167\xB7\u97F3\u9891\uFF09\u5747\u4E3A\u7A0B\u5E8F\u5316\u751F\u6210<br>2001 \xB7 \u8680\u6E7E \xB7 \u5357\u65B9\u5927\u9152\u5E97</div>',"\u518D\u6765\u4E00\u904D",()=>location.reload())})}_badEnd(){if(this.ended)return;this.ended=!0;let{ui:t,audio:e,L:n,post:i}=this.g;t.timer(!1),t.cutRing(0),t.fade(1,1.2),i.letterboxTarget=1,e.broadcast(6,92),e.sting(.5),n.dyn.cardYou.mat.map=n.dyn.cardYou.flip,n.dyn.cardYou.mat.needsUpdate=!0,this.after(1.6,()=>{t.end("\u60A8\u7684\u4F4D\u7F6E\u5728\u8FD9\u8FB9","\u8BAE\u7A0B\u8D70\u5B8C\u7684\u65F6\u5019\uFF0C\u4F60\u8FD8\u5750\u5728\u5E2D\u4E0A\u3002<br><br>\u4F8D\u5E94\u628A\u4F60\u9762\u524D\u7684\u684C\u724C\u8F7B\u8F7B\u7FFB\u4E86\u8FC7\u6765\u3002<br>\u724C\u9762\u4E0A\u5199\u7684\u4E0D\u662F\u4F60\u7684\u540D\u5B57\u3002<br>","\u91CD\u6765\u8FD9\u4E00\u6BB5",()=>this._retryFinale(),!0)})}_retryFinale(){let{ui:t,player:e}=this.g;t.hideEnd(),this.ended=!1,this._finished=!1,e.seated=!1,this.escorting=!1,e.teleport(-13.8,-6,-Math.PI/2),t.fade(0,1.5),this.beat=4.9,this.after(.8,()=>this._beat5\u9001\u5165\u6D1E\u623F())}update(t){let e=this.g,n=e.player.pos;for(let i=this._pending.length-1;i>=0;i--)if(this._pending[i].t-=t,this._pending[i].t<=0){let r=this._pending[i].fn;this._pending.splice(i,1),r()}if(this.noise=Math.max(0,this.noise-t*.1),this.noiseCooldown=Math.max(0,this.noiseCooldown-t),this.grace=Math.max(0,this.grace-t),this.beat===1&&n.distanceTo(new R(0,0,-11.5))<3.4?this._beat1\u5230\u4E3B\u684C():this.beat===1.5&&n.x>15.4?this._beat2\u5F00\u5E2D():this.beat===2&&n.z>14.5?this._beat3\u656C\u9152\u70B9\u706B():this.beat===3&&n.x<23.5&&n.z>19?this._beat4\u4E0A\u5934():this.beat===4&&n.x<2.5&&n.z>19?this._beat4b\u8FDE\u5ECA():this.beat===4.5&&n.x>-15&&n.z<0&&n.z>-20?this._beat5\u9001\u5165\u6D1E\u623F():this.ended&&this._doorOpen()&&n.z>5.5&&this._goodEnd(),this.beat===2&&!this._shock1&&n.x>25&&n.z<0&&this._shockCorridor(),this.beat>=4&&this.beat<5&&!this._shock2&&n.z>20.5&&n.x<16&&n.x>-10&&this._shockGlass(),this.beat===4.5&&!this._shock3&&n.x<-15&&n.z<12&&n.z>-4&&this._shockBulb(),this._shadeLunge){let i=this._shadeLunge,r=e.L.dyn.seaShade;if(i.t+=t,i.t<.55){let a=i.t/.55;r.position.x+=(n.x+2-r.position.x)*a*.4,r.position.z=26.2-a*1.5,r.position.y=i.fromY+(1.7-i.fromY)*a,r.scale.setScalar(1+a*.4)}else i.t<4?(r.position.z+=(26.2-r.position.z)*t*.7,r.position.y+=(3.2-r.position.y)*t*.5):(r.scale.setScalar(1),this._shadeLunge=null)}if(this._garlandDrop!==void 0&&this._garlandDrop<1){this._garlandDrop=Math.min(1,this._garlandDrop+t*.7);let i=this._garlandDrop,r=1.70158,o=1+(r+1)*Math.pow(i-1,3)+r*Math.pow(i-1,2);e.L.dyn.garlands.forEach((l,c)=>{l.position.y=(-1.4-c%2*.5)*o})}this.call.active&&(e.wrist.glow=1,e.post.redPulse=.5+Math.sin(performance.now()*.008)*.3,Math.floor(performance.now()/800)!==this._hb&&(this._hb=Math.floor(performance.now()/800),e.audio.heartbeat())),this.finaleTimer>0&&!this.ended&&(this.finaleTimer-=t,e.ui.timer(!0,this.finaleTimer/110),this.finaleTimer<30&&!this._warn30&&(this._warn30=!0,e.ui.subtitle("\u53F8\u4EEA\u7684\u624B\u52BF\u548C\u5E7F\u64AD\u5DF2\u7ECF\u5B8C\u5168\u540C\u6B65\u4E86\u3002\u5FEB\u3002",4)),this.finaleTimer<=0&&(this.finaleTimer=-1,this._badEnd()));for(let i of Object.keys(e.L.lights))for(let r of e.L.lights[i]){let a=(r.userData.base??r.intensity)*(this.lightMult[i]??1);r.intensity+=(a-r.intensity)*t*1.5,i==="hall"&&this.beat>=5&&r.color.lerp(this.hallColor,t*.8)}}_doorOpen(){return!!this.g.L.dyn.doorSOpen}};function Sx(s,t=128,e=128){let n=document.createElement("canvas");n.width=t,n.height=e,s(n.getContext("2d"),t,e);let i=new pn(n);return i.wrapS=i.wrapT=Bn,i}var $c={};function od(s="255,228,180"){if($c[s])return $c[s];let t=Sx((e,n,i)=>{e.fillStyle="#000",e.fillRect(0,0,n,i);let r=e.createLinearGradient(0,0,0,i);r.addColorStop(0,`rgba(${s},0.7)`),r.addColorStop(.35,`rgba(${s},0.3)`),r.addColorStop(1,`rgba(${s},0)`),e.fillStyle=r,e.fillRect(0,0,n,i)},64,256);return $c[s]=t,t}var ll=class{constructor(t){this.scene=t,this.cones=[],this.dust=[],this.caustics=[],this.time=0}addCone(t,e,n,i,r,a,o,l,c="255,228,180",h=null){let u=new Qt(i,r,a,14,1,!0),d=new se({map:od(c),transparent:!0,opacity:o,blending:In,depthWrite:!1,side:Te,fog:!1}),f=new W(u,d);return f.position.set(t,e-a/2,n),f.renderOrder=5,this.scene.add(f),this.cones.push({mesh:f,mat:d,base:o,group:l,light:h}),f}addShaft(t,e,n,i,r,a,o,l,c,h="210,235,225"){let u=new se({map:od(h),transparent:!0,opacity:l,blending:In,depthWrite:!1,side:Te,fog:!1}),d=new W(new ge(i,r),u);return d.position.set(t,e,n),d.rotation.y=a,d.rotation.z=o,d.renderOrder=5,this.scene.add(d),this.cones.push({mesh:d,mat:u,base:l,group:c,light:null}),d}addGroundFog(t,e,n,i,r,a,o,l="200,190,170"){this._fogMats||(this._fogMats=[]);let c=new Xe({uniforms:{uTime:{value:0},uColor:{value:new zt(`rgb(${l})`)},uOpacity:{value:a}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
                     mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
        }
        void main() {
          vec2 p = vUv * 6.0;
          float n = noise(p + vec2(uTime * 0.05, uTime * 0.023)) * 0.55
                  + noise(p * 2.3 - vec2(uTime * 0.035, 0.0)) * 0.3
                  + noise(p * 5.1 + vec2(0.0, uTime * 0.06)) * 0.15;
          // \u8FB9\u7F18\u7FBD\u5316
          float fx = smoothstep(0.0, 0.16, vUv.x) * smoothstep(0.0, 0.16, 1.0 - vUv.x);
          float fy = smoothstep(0.0, 0.16, vUv.y) * smoothstep(0.0, 0.16, 1.0 - vUv.y);
          float a = smoothstep(0.32, 0.85, n) * fx * fy * uOpacity;
          gl_FragColor = vec4(uColor, a);
        }`,transparent:!0,depthWrite:!1}),h=new W(new ge(i,r),c);return h.rotation.x=-Math.PI/2,h.position.set(t,e,n),h.renderOrder=4,this.scene.add(h),this._fogMats.push({mat:c,base:a,group:o}),h}addDust(t,e,n=.035,i=14207144,r=.5,a="hall"){let[o,l,c,h,u,d]=t,f=new Float32Array(e*3),g=new Float32Array(e);for(let b=0;b<e;b++)f[b*3]=o+Math.random()*(h-o),f[b*3+1]=l+Math.random()*(u-l),f[b*3+2]=c+Math.random()*(d-c),g[b]=Math.random()*6.28;let y=new ze;y.setAttribute("position",new hn(f,3)),y.setAttribute("aPhase",new hn(g,1));let m=new Xe({uniforms:{uTime:{value:0},uSize:{value:n*500},uColor:{value:new zt(i)},uOpacity:{value:r}},vertexShader:`
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
        }`,transparent:!0,depthWrite:!1,blending:In}),p=new cr(y,m);return p.renderOrder=6,p.frustumCulled=!1,this.scene.add(p),this.dust.push({points:p,mat:m,group:a,base:r}),p}_causticTex(){if(this._ct)return this._ct;let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,256),e.strokeStyle="rgba(150,255,235,0.55)",e.lineWidth=2.4;let n=[];for(let r=0;r<42;r++)n.push([Math.random()*256,Math.random()*256]);for(let[r,a]of n){e.beginPath();let o=5+(Math.random()*3|0);for(let l=0;l<=o;l++){let c=l/o*Math.PI*2,h=14+Math.random()*26,u=r+Math.cos(c)*h,d=a+Math.sin(c)*h;l===0?e.moveTo(u,d):e.quadraticCurveTo(r+Math.cos(c-.4)*h*1.35,a+Math.sin(c-.4)*h*1.35,u,d)}e.stroke()}e.filter="blur(2px)",e.drawImage(t,0,0),e.filter="none";let i=new pn(t);return i.wrapS=i.wrapT=$n,this._ct=i,i}addCaustics(t,e,n,i,r,a,o,l=.1,c="aqua"){for(let h=0;h<2;h++){let u=this._causticTex().clone();u.needsUpdate=!0,u.repeat.set(i/6,r/6);let d=new se({map:u,transparent:!0,opacity:l*(h?.6:1),blending:In,depthWrite:!1,color:5888200,fog:!1}),f=new W(new ge(i,r),d);f.position.set(t,e+h*.012,n),f.rotation.x=a,f.rotation.y=o,f.renderOrder=4,this.scene.add(f),this.caustics.push({mesh:f,mat:d,tex:u,dir:h?-1:1,base:l*(h?.6:1),group:c})}}update(t,e){if(this.time+=t,this._fogMats)for(let n of this._fogMats){n.mat.uniforms.uTime.value=this.time;let i=e[n.group]??1;n.mat.uniforms.uOpacity.value=n.base*(1.35-i*.35)}for(let n of this.cones){let r=e[n.group]??1;n.light&&(r*=ln.clamp(n.light.intensity/Math.max(.01,n.light.userData.base??n.light.intensity),0,1.4)),n.mat.opacity=n.base*r*(.94+Math.sin(this.time*1.7+n.mesh.position.x)*.06)}for(let n of this.dust)n.mat.uniforms.uTime.value=this.time,n.mat.uniforms.uOpacity.value=n.base*(.4+.6*(e[n.group]??1));for(let n of this.caustics){n.tex.offset.x+=t*.021*n.dir,n.tex.offset.y+=t*.013*n.dir;let i=1+Math.sin(this.time*.5*n.dir)*.06;n.mat.opacity=n.base*(e[n.group]??1)*(.8+Math.sin(this.time*1.1+n.dir)*.2)*i}}};var th=document.getElementById("c"),ai=new Go({canvas:th,antialias:!1,powerPreference:"high-performance"});ai.setPixelRatio(Math.min(window.devicePixelRatio,1.5));ai.setSize(window.innerWidth,window.innerHeight);ai.shadowMap.enabled=!0;ai.shadowMap.type=Za;ai.outputColorSpace=je;ai.toneMapping=Ln;var Ge=new _i;Ge.background=new zt(854536);var Lr=new $e(66,window.innerWidth/window.innerHeight,.05,140),ve=sd(Ge,ai);{let s=new W(new ge(40,24),new j({color:1841688,roughness:.95}));s.rotation.x=-Math.PI/2,s.position.set(0,-.01,12),Ge.add(s);let t=new W(new ge(70,20),new se({color:329482,fog:!1}));t.position.set(0,6,19.6),t.rotation.y=Math.PI,Ge.add(t);let e=new W(new ge(34,9),new se({color:12108990,transparent:!0,opacity:.3,depthWrite:!1}));e.position.set(0,3.2,16.5),e.rotation.y=Math.PI,Ge.add(e);let n=new W(new ge(26,5),new se({color:9411732,transparent:!0,opacity:.2,depthWrite:!1}));n.position.set(2,1.6,13),n.rotation.y=Math.PI,Ge.add(n);for(let i=0;i<4;i++){let r=new W(new ge(2.4,1.6),ve.dyn.headlights.mat);r.position.set(-6+i*4+i%2,.9,13+i%2*1.5),r.rotation.y=Math.PI,Ge.add(r)}ve.colliders.push({minX:-7,minZ:0,maxX:-6.5,maxZ:12}),ve.colliders.push({minX:6.5,minZ:0,maxX:7,maxZ:12})}var Je=new nl,Ne=new al,oe=new il(Lr,th);oe.yaw=0;var St=new Ko(Ge,Je);St.addHook("hE_doorL",14.72,1.5,-4,-1,0,0);St.addHook("hE_doorR",14.72,1.5,-8.2,-1,0,0);St.addHook("hE_free",14.72,1.6,-1.6,-1,0,0);St.addHook("hStageL",-6,2.3,-16.85,0,0,1);St.addHook("hStageR",6,2.3,-16.85,0,0,1);St.addHook("hW_wall",-14.72,1.6,-10,1,0,0);St.addHook("hE_wall",14.72,1.6,-10,-1,0,0);St.addHook("hW_free",-14.72,1.6,-2.5,1,0,0);St.addHook("hMainA",1.1,.95,-12.2,0,0,1);St.addHook("hMainB",3.2,.95,-14.6,1,0,0);St.addHook("hC1",17,2,-7.75,0,0,1);St.addHook("hC2",23,2,-4.65,0,0,-1);St.addHook("hC3",29,2,-7.75,0,0,1);St.addHook("hC4",35,2,-4.65,0,0,-1);St.addHook("hC5",39.7,2,-6.4,-1,0,0);St.addHook("hC6",36.7,2,2,1,0,0);St.addHook("hC7",39.7,2,8,-1,0,0);St.addHook("hC8",36.7,2,13.4,1,0,0);St.addHook("hAlcove",19.5,2,-7.75,0,0,1);St.addHook("hDesk",44.7,1.3,24,-1,0,0);St.addHook("hCol1",30.7,1.7,18,1,0,0);St.addHook("hCol2",41.3,1.7,26,-1,0,0);St.addHook("hWest1",24.35,1.6,19.8,1,0,0);St.addHook("hWest2",24.35,1.6,23.4,1,0,0);St.addHook("hLFree",28,1.7,29.6,0,0,-1);St.addHook("hGateTop",4,3.25,22,0,0,1,!0);St.addHook("hJam",7.5,1.5,20.42,0,0,1);St.addHook("hWinch",11,2.7,20.42,0,0,1);St.addHook("hSnap",5.6,1.1,23.5,0,0,-1);St.addHook("hAqP1",21,2,20.42,0,0,1);St.addHook("hAqP2",15,2,23.5,0,0,-1);St.addHook("hAqP3",9,2,20.42,0,0,1);{let s=new W(new Rn(.12,.03,8,16),new j({color:13081146,metalness:.85,roughness:.35}));s.position.set(11,2.85,20.45),Ge.add(s);let t=new W(new ge(.9,.26),new j({map:qn("\u7EDE \u76D8","#e8d8b0","#33403a",80),roughness:.9}));t.position.set(11,2.2,20.48),Ge.add(t)}St.addCord("hE_doorL","hE_doorR",{tag:"doorE",slack:.25,rideable:!1});St.addCord("hC1","hC2");St.addCord("hC2","hC3");St.addCord("hC3","hC4");St.addCord("hC4","hC5");St.addCord("hC5","hC6");St.addCord("hC6","hC7");St.addCord("hC7","hC8");St.addCord("hWest1","hWest2",{tag:"doorC",slack:.25,rideable:!1});St.addCord("hCol1","hCol2");St.addCord("hCol2","hDesk");St.addCord("hGateTop","hJam",{tag:"gate",slack:.15,rideable:!1,fixedEnd:"a"});St.addCord("hAqP1","hAqP2");St.addCord("hAqP2","hAqP3");var fd=[{tag:"doorE",a:"hE_doorL",b:"hE_doorR",col:{minX:14.4,minZ:-8.2,maxX:15.6,maxZ:-4,disabled:!1}},{tag:"doorC",a:"hWest1",b:"hWest2",col:{minX:23.9,minZ:19.8,maxX:24.9,maxZ:23.4,disabled:!1}}];fd.forEach(s=>ve.colliders.push(s.col));var cl=new Jo(Ge);for(let s=0;s<=12;s++){let t=s/12;cl.trail.push(new R(2.1*(1-t),.06,-13.5+t*10.5))}var pd=new Qo(Ge),Dr=[new Hs(Ge,0),new Hs(Ge,1),new Hs(Ge,2)],md=new jo(Ge,44),gd=new tl(Ge),xd=new el(Ge),eh=new rl(ai,Ge,ve.screens,ve.future),Vi=new sl(ai,window.innerWidth,window.innerHeight),Ye=new ll(Ge);Ye.addCone(0,5.2,-5,.75,3.4,5.2,.055,"hall");Ye.addCone(0,5.2,-12,.75,3.4,5.2,.055,"hall");{let s=Ye.addCone(0,0,0,.35,2.5,8.4,.06,"hall");s.position.set(0,4,-15.1);let t=new R(0,1.4-6.6,-18.2+12).normalize();s.quaternion.setFromUnitVectors(new R(0,-1,0),t)}Ye.addCone(36,6.4,22,1.5,5.4,6.6,.05,"lobby");Ye.addShaft(36,2.4,28.6,6.2,4.6,Math.PI,0,.045,"lobby","185,210,200");for(let s of ve.dyn.tubes){let t=s.light.position;Ye.addCone(t.x,3.1,t.z,.45,1.35,3,.05,"corridor","208,238,218",s.light)}for(let s of ve.dyn.bulbs)Ye.addCone(s.light.position.x,2.65,s.light.position.z,.1,.7,2.5,.035,"connector","255,214,150",s.light);Ye.addCaustics(2.5,.045,22,43,4.2,-Math.PI/2,0,.16,"aqua");Ye.addCaustics(2.5,1.6,20.2,43,3,0,0,.07,"aqua");Ye.addDust([-14,.3,-19,14,6.4,-.5],320,.035,14207144,.5,"hall");Ye.addDust([25,.3,15,47,7.4,29],260,.035,13681828,.45,"lobby");Ye.addDust([-18,.2,20.3,23,3.2,23.8],240,.03,10475724,.55,"aqua");Ye.addDust([16,.3,-7.6,39.5,3,13.5],170,.028,13162686,.4,"corridor");Ye.addDust([-18.6,.3,-7,-15.6,2.8,19],120,.03,14207144,.4,"connector");Ye.addGroundFog(0,.28,-10,30,20,.14,"hall","186,140,110");Ye.addGroundFog(0,.85,-14,26,11,.08,"hall","200,130,100");Ye.addGroundFog(2.5,.32,22,43,4.4,.2,"aqua","140,196,186");Ye.addGroundFog(36,.3,26.5,22,8,.16,"lobby","176,186,176");Ye.addGroundFog(-17.1,.26,6,4.2,26,.15,"connector","190,200,196");Ye.addGroundFog(0,.4,11,30,15,.24,"lobby","168,182,172");function _d(s){for(let t of ve.regions)if(s.x>=t.box[0]&&s.z>=t.box[1]&&s.x<=t.box[2]&&s.z<=t.box[3])return t;return{name:"",mat:"terrazzo"}}function yd(s){return _d(s).name}var vd={scene:Ge,L:ve,sys:St,wrist:cl,player:oe,audio:Je,ui:Ne,crt:eh,mc:pd,waiters:Dr,guests:md,gazer:gd,bride:xd,post:Vi,regionNameAt:yd},Fe=new ol(vd);St.onTopologyChange=s=>{Dr.forEach(t=>t.onTopologyChange(St,s))};St.onNoise=s=>Fe.addNoise(s);oe.onStep=(s,t)=>{let e=s.mat;s.name==="\u5BB4\u4F1A\u5385"&&Math.abs(oe.pos.x)>2.2&&(e="terrazzo"),s.name==="\u5927\u5802"&&Math.abs(oe.pos.x-36)>2.4?e="terrazzo":s.name==="\u5927\u5802"&&(e="carpet"),Je.footstep(e,t),Fe.addNoise(t?.07:.016)};var Ex=s=>Fe.escort(s),ld=!1;function Tx(s){let t=ve.dyn.gate,e=St.cords.find(i=>i.tag==="gate"),n=.55;if(e&&!e.heldEnd){let i=e.b===St.hook("hGateTop")?e.a:e.b;if(i===St.hook("hJam"))t.targetY=1.6;else if(i===St.hook("hWinch"))t.targetY=4.9,n=.5,Math.abs(t.y-t.targetY)>.02&&Math.floor(t.y*6)!==Math.floor((t.y-n*s)*6)&&Je.ratchet();else if(i===St.hook("hSnap")){if(t.targetY=4.9,n=6,!ld&&t.y<4.5){ld=!0,Je.thud(.9),Fe.addNoise(1.3),Ne.subtitle("\u95F8\u95E8\u5F39\u4E0A\u53BB\u7684\u5DE8\u54CD\u649E\u5728\u73BB\u7483\u4E0A\u2014\u2014\u88C2\u7EB9\u6CBF\u7740\u9884\u73B0\u91CC\u7684\u5F27\u7EBF\u722C\u4E86\u51FA\u6765\u3002",6),ve.dyn.cracks.forEach(r=>{r.material.opacity=.85}),eh.setStatic("T07",!0);for(let r=0;r<4;r++)setTimeout(()=>Je.glassCreak(),r*700);Vi.shock=1.4}}else t.targetY=t.y}if(Math.abs(t.y-t.targetY)>.01){let i=Math.sign(t.targetY-t.y);t.y+=i*n*s,i>0&&t.y>t.targetY&&(t.y=t.targetY),i<0&&t.y<t.targetY&&(t.y=t.targetY),t.group.position.y=t.y,n<1&&Math.random()<s*3&&Je.creakLow()}t.collider.disabled=t.y>3.1}var cd=new R(2.1,0,-13.5),bn=0;function wx(s){if(oe.seated){Ne.reticle(""),oe.holdE>1.2&&Fe.standUp();return}if(Fe.beat>=5&&!Fe.ended){let n=St.cords.find(a=>a.tag==="seatlock"),i=!(n&&!n.heldEnd&&(n.a===St.hook("hMainA")&&n.b===St.hook("hMainB")||n.a===St.hook("hMainB")&&n.b===St.hook("hMainA"))),r=oe.pos.distanceTo(cd);if(window.__cut={d:+r.toFixed(2),seatFree:i,eDown:oe.eDown,cutHold:+bn.toFixed(2),seated:oe.seated,escorting:Fe.escorting,callActive:Fe.call.active,held:!!St.held,lockEnds:n?[n.a?.id||"held",n.b?.id||"held"].join("~"):"none"},r<2)if(!i)Ne.prompt("\u5E2D\u4F4D\u88AB\u7EA2\u7EF3\u6346\u7740 \u2014\u2014 \u5148<b>\u6458\u4E0B</b>\u6346\u5E2D\u7684\u7EF3\uFF08\u5BF9\u51C6\u7EF3\u7AEF\u6309 E\uFF09"),Ne.cutRing(0);else if(oe.eDown){bn+=s,Ne.prompt("\u522B\u677E\u624B \u2014\u2014 <b>\u526A\u65AD\u8155\u7EF3</b>","E"),Ne.reticle("park"),Ne.cutRing(bn/2.2),oe.kick((Math.random()-.5)*.02*(1+bn),(Math.random()-.5)*.012*bn),Vi.redPulse=Math.max(Vi.redPulse,bn/2.2*.7),Dr.forEach(a=>{a.visible&&a.startChase()}),Math.floor(bn*3)!==Math.floor((bn-s)*3)&&Je.heartbeat(),Math.floor(bn*6)!==Math.floor((bn-s)*6)&&Je.pluck(300+bn*300,.12,.99),bn>=2.2&&(Fe._cut(),bn=0,Ne.cutRing(0));return}else bn=0,Ne.cutRing(0),Ne.prompt("\u5728\u4F60\u7684\u5E2D\u4F4D\u524D\uFF0C<b>\u957F\u6309</b>\u526A\u65AD\u8155\u7EF3","E");else bn=0,Ne.cutRing(0)}if(Fe.call.active){let n=St.nearestHook(oe.pos,2.4);if(St.hooks.forEach(i=>i.setHighlight(!1)),n){if(n.setHighlight(!0),Ne.reticle("park"),Ne.prompt("\u628A\u8155\u7EF3<b>\u5BC4\u6302</b>\u5230\u8FD9\u53EA\u793C\u94A9\u4E0A","E"),oe.ePressedThisFrame){Fe.resolveCall(),n.pop(),oe.kick(-.03);let i=new W(new re(.045,8,8),new j({color:9309202,roughness:.8}));i.position.copy(n.pos),Ge.add(i),Ne.prompt(""),Ne.reticle("")}return}}let t=Lr.position,e=St.nearestTarget(t,oe.lookDir,2.8);if(St.hooks.forEach(n=>n.setHighlight(!1)),e){if(e.type==="cordEnd"){e.cord.mat.emissiveIntensity=2.8,Ne.reticle("grab");let n={doorE:"\uFF08\u62E6\u95E8\u7EF3\uFF09",doorC:"\uFF08\u62E6\u95E8\u7EF3\uFF09",gate:"\uFF08\u95F8\u95E8\u540A\u7EF3\uFF09",seatlock:"\uFF08\u6346\u5E2D\u7EF3\uFF09"}[e.cord.tag]||"";Ne.prompt(`<b>\u6458</b>\u4E0B\u7EA2\u7EF3${n}`,"E"),oe.ePressedThisFrame&&(St.grab(e.cord,e.end),Je.whoosh(.14),oe.kick(-.035,.012))}else if(e.type==="hook"){e.hook.setHighlight(!0),Ne.reticle("hang");let n={hWinch:"\uFF08\u7EDE\u76D8 \xB7 \u5B89\u9759\uFF09",hSnap:"\uFF08\u5361\u6263 \xB7 \u5DE8\u54CD\uFF09",hJam:"\uFF08\u5361\u6B7B\u4F4D\uFF09"}[e.hook.id]||"";Ne.prompt(`\u628A\u7EF3<b>\u6302</b>\u4E0A\u793C\u94A9${n}`,"E"),oe.ePressedThisFrame&&(St.hang(e.hook),oe.kick(.028,-.01))}}else St.held?(Ne.reticle(""),Ne.prompt("\u62FF\u7740\u7EA2\u7EF3 \u2014\u2014 \u8D70\u5411<b>\u547C\u5438\u53D1\u4EAE</b>\u7684\u793C\u94A9\u6302\u4E0A","E")):!Fe.call.active&&!(Fe.beat>=5&&oe.pos.distanceTo(cd)<2)&&(Ne.reticle(""),Ne.prompt(""))}var Jc=new R;function Ax(){let s=null,t=1e9;for(let a of Dr){if(!a.visible)continue;let o=a.group.position.distanceTo(oe.pos);o<t&&(t=o,s=a)}if(!s||t>14){Je.setThreat(0,0),Je.setCordHum(0,0);return}Jc.copy(s.group.position).sub(oe.pos);let e=oe.forward,n=ln.clamp(Jc.x*-e.z-Jc.z*-e.x,-8,8)/8,i=s.state==="chase"||s.state==="alert",r=ln.clamp(1-t/14,0,1);Je.setThreat(i?Math.min(1,r*1.6+.25):r*.4,n),Je.setCordHum(s.state==="ride"?r*r:0,n)}function Rx(){for(let s of fd){let t=St.cords.find(n=>n.tag===s.tag),e=!!(t&&!t.heldEnd&&(t.a===St.hook(s.a)&&t.b===St.hook(s.b)||t.a===St.hook(s.b)&&t.b===St.hook(s.a)));s.col.disabled=!e}}var Kc=5,Qc=7;function Cx(s,t){for(let i of ve.dyn.tubes)if((i.flicker||Fe.beat>=3)&&Math.random()<s*(i.flicker?2.2:.5)){let a=.25+Math.random()*.75;i.mat.emissiveIntensity=2.6*a,i.light.intensity=i.light.userData.base*a*(Fe.lightMult.corridor??1)}if(Fe.beat>=3){let i=ve.dyn.lobbyChand;i.group.rotation.z=Math.sin(t*.6)*.05,i.group.rotation.x=Math.cos(t*.43)*.04,i.group.position.x=36+Math.sin(t*.6)*.3}ve.dyn.waterLights.forEach((i,r)=>{i.intensity=i.userData.base*(.7+Math.sin(t*(.8+r*.3)+r*2)*.3),i.position.x+=Math.sin(t*.22+r*3)*s*1.2});for(let i of ve.dyn.bulbs)i.group.rotation.x=Math.sin(t*1.1+i.phase)*.14,i.group.rotation.z=Math.cos(t*.9+i.phase)*.1;let e=Fe.beat>=3?.12:.04;for(let i of ve.dyn.lanterns)i.group.rotation.x=Math.sin(t*.7+i.phase)*e,i.group.rotation.z=Math.cos(t*.55+i.phase)*e*.7;if(ve.dyn.kelps)for(let i of ve.dyn.kelps)i.mesh.rotation.z=Math.sin(t*.4+i.phase)*.12,i.mesh.position.x+=Math.sin(t*.23+i.phase)*s*.15;if(ve.dyn.strips)for(let i of ve.dyn.strips)i.mesh.rotation.x=Math.sin(t*.8+i.phase)*.05;if(ve.dyn.beams){for(let i of ve.dyn.beams)i.mesh.position.x=i.x0+Math.sin(t*.18+i.phase)*2.4,i.mesh.rotation.z=.25+Math.sin(t*.22+i.phase)*.1,i.mesh.material.opacity=.1+Math.sin(t*.35+i.phase)*.05;ve.dyn.seaShade.position.x=-6+Math.sin(t*.05)*12,ve.dyn.seaShade.position.y=3.2+Math.sin(t*.11)*.8}let n=yd(oe.pos);Je.setLayer("water",n==="\u6D77\u6D0B\u9986\u8FDE\u5ECA"?.05:0,1.5);{let r=Fe.beat>=5?{\u5BB4\u4F1A\u5385:1.1,\u670D\u52A1\u8D70\u5ECA:.98,\u5927\u5802:1.04,\u6D77\u6D0B\u9986\u8FDE\u5ECA:1.02,\u5458\u5DE5\u8FDE\u5ECA:.94}:{\u5BB4\u4F1A\u5385:1.32,\u670D\u52A1\u8D70\u5ECA:1,\u5927\u5802:1.16,\u6D77\u6D0B\u9986\u8FDE\u5ECA:1.06,\u5458\u5DE5\u8FDE\u5ECA:.95};Vi.exposureTarget=r[n]??1.12}if(Vi.dreadTarget=Je.hushed?1:0,n==="\u5458\u5DE5\u8FDE\u5ECA"&&(Kc-=s,Kc<=0&&(Kc=4+Math.random()*6,Je.creakLow())),n==="\u6D77\u6D0B\u9986\u8FDE\u5ECA"&&Fe.beat>=4&&(Qc-=s,Qc<=0&&(Qc=5+Math.random()*7,Je.glassCreak())),ve.dyn.doorSOpen){let{dL:i,dR:r}=ve.dyn.doorS.userData;i.position.x+=(-3.2-i.position.x)*s*.8,r.position.x+=(3.2-r.position.x)*s*.8}for(let i of Object.keys(ve.lights))for(let r of ve.lights[i]){let a=r.position.distanceTo(oe.pos);r.visible=a<55}}var hd=document.getElementById("title"),Px=document.getElementById("startBtn"),Md=document.getElementById("resume"),Ix=document.getElementById("ctlBtn"),ud=document.getElementById("ctlPanel"),hl=!1;Ix.addEventListener("click",()=>{ud.style.display=ud.style.display==="block"?"none":"block"});Px.addEventListener("click",()=>{Je.init(),hd.style.opacity=0,setTimeout(()=>{hd.style.display="none"},900),oe.enabled=!0,oe.lock(),hl||(hl=!0,Fe.start())});document.addEventListener("pointerlockchange",()=>{hl&&(Md.style.display=document.pointerLockElement===th?"none":"flex")});Md.addEventListener("click",()=>oe.lock());document.getElementById("pauseRestart").addEventListener("click",s=>{s.stopPropagation(),location.reload()});window.addEventListener("resize",()=>{Lr.aspect=window.innerWidth/window.innerHeight,Lr.updateProjectionMatrix(),ai.setSize(window.innerWidth,window.innerHeight),Vi.resize(window.innerWidth,window.innerHeight)});window.__game=vd;window.__agenda=Fe;var jc=new yr,dd=0;function bd(){requestAnimationFrame(bd);let s,t;if(window.__fixedDt!==void 0?(s=window.__fixedDt,dd+=s,t=dd,jc.getDelta()):(s=Math.min(.05,jc.getDelta())*(window.__timeScale||1),t=jc.elapsedTime),oe.update(s,ve.colliders,_d),hl){Fe.update(s),Tx(s),Rx(),wx(s),Ax(),Cx(s,t),St.update(s,oe.handPos()),cl.record(oe.pos),cl.update(s,oe.handPos()),pd.update(s,oe.pos);for(let e of Dr)e.update(s,St,oe.pos,Ex,Je);md.update(s,t),gd.update(s,oe.pos,t),xd.update(s),eh.update(s,oe.pos),Ye.update(s,Fe.lightMult)}Vi.render(Ge,Lr,s,t)}bd();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
