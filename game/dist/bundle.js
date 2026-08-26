(()=>{var Gh=0,hc=1,Vh=2;var Cr=1,ao=2,Fs=3,Ei=0,_n=1,we=2,ci=0,rs=1,In=2,uc=3,dc=4,Wh=5;var ki=100,Xh=101,qh=102,Yh=103,Zh=104,$h=200,Jh=201,Kh=202,Qh=203,Ma=204,Ea=205,jh=206,tu=207,eu=208,nu=209,iu=210,su=211,ru=212,au=213,ou=214,ba=0,Sa=1,Ta=2,as=3,wa=4,Ra=5,Aa=6,Ca=7,fc=0,lu=1,cu=2,kn=0,pc=1,mc=2,gc=3,xc=4,_c=5,yc=6,vc=7;var Mc=300,qi=301,us=302,oo=303,lo=304,Pr=306,si=1e3,Xn=1001,Pa=1002,dn=1003,hu=1004;var Ir=1005;var We=1006,co=1007;var Yi=1008;var Nn=1009,Ec=1010,bc=1011,Bs=1012,ho=1013,ti=1014,Yn=1015,hi=1016,uo=1017,fo=1018,Hs=1020,Sc=35902,Tc=35899,wc=1021,Rc=1022,Zn=1023,ri=1026,Zi=1027,po=1028,mo=1029,$i=1030,go=1031;var xo=1033,Lr=33776,Dr=33777,Ur=33778,Nr=33779,_o=35840,yo=35841,vo=35842,Mo=35843,Eo=36196,bo=37492,So=37496,To=37488,wo=37489,Fr=37490,Ro=37491,Ao=37808,Co=37809,Po=37810,Io=37811,Lo=37812,Do=37813,Uo=37814,No=37815,Fo=37816,Bo=37817,Ho=37818,Oo=37819,ko=37820,zo=37821,Go=36492,Vo=36494,Wo=36495,Xo=36283,qo=36284,Br=36285,Yo=36286;var ar=2300,Ia=2301,va=2302,jl=2303,tc=2400,ec=2401,nc=2402;var uu=3200;var Zo=0,du=1,Ci="",an="srgb",or="srgb-linear",lr="linear",Se="srgb";var is=7680;var ic=519,fu=512,pu=513,mu=514,$o=515,gu=516,xu=517,Jo=518,_u=519,sc=35044;var Ac="300 es",jn=2e3,Ps=2001;function Dd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ud(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yu(){let s=cr("canvas");return s.style.display="block",s}var ph={},Is=null;function Cc(...s){let t="THREE."+s.shift();Is?Is("log",t,...s):console.log(t,...s)}function vu(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Xt(...s){s=vu(s);let t="THREE."+s.shift();if(Is)Is("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function $t(...s){s=vu(s);let t="THREE."+s.shift();if(Is)Is("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ss(...s){let t=s.join(" ");t in ph||(ph[t]=!0,Xt(...s))}function Mu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Eu={[ba]:Sa,[Ta]:Aa,[wa]:Ca,[as]:Ra,[Sa]:ba,[Aa]:Ta,[Ca]:wa,[Ra]:as},ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mh=1234567,nr=Math.PI/180,os=180/Math.PI;function Os(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function le(s,t,e){return Math.max(t,Math.min(e,s))}function Pc(s,t){return(s%t+t)%t}function Nd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Fd(s,t,e){return s!==t?(e-s)/(t-s):0}function ir(s,t,e){return(1-e)*s+e*t}function Bd(s,t,e,n){return ir(s,t,1-Math.exp(-e*n))}function Hd(s,t=1){return t-Math.abs(Pc(s,t*2)-t)}function Od(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function kd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function zd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Gd(s,t){return s+Math.random()*(t-s)}function Vd(s){return s*(.5-Math.random())}function Wd(s){s!==void 0&&(mh=s);let t=mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xd(s){return s*nr}function qd(s){return s*os}function Yd(s){return(s&s-1)===0&&s!==0}function Zd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $d(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Jd(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function As(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function An(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var je={DEG2RAD:nr,RAD2DEG:os,generateUUID:Os,clamp:le,euclideanModulo:Pc,mapLinear:Nd,inverseLerp:Fd,lerp:ir,damp:Bd,pingpong:Hd,smoothstep:Od,smootherstep:kd,randInt:zd,randFloat:Gd,randFloatSpread:Vd,seededRandom:Wd,degToRad:Xd,radToDeg:qd,isPowerOfTwo:Yd,ceilPowerOfTwo:Zd,floorPowerOfTwo:$d,setQuaternionFromProperEuler:Jd,normalize:An,denormalize:As},Lt=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*y;p<0&&(d=-d,f=-f,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let b=Math.acos(p),R=Math.sin(b);m=Math.sin(m*b)/R,o=Math.sin(o*b)/R,l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+y*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+y*o;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Al.copy(this).projectOnVector(t),this.sub(Al)}reflect(t){return this.sub(Al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Al=new A,gh=new oi,Qt=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=i[0],p=i[3],m=i[6],b=i[1],R=i[4],M=i[7],S=i[2],E=i[5],C=i[8];return r[0]=a*y+o*b+l*S,r[3]=a*p+o*R+l*E,r[6]=a*m+o*M+l*C,r[1]=c*y+h*b+u*S,r[4]=c*p+h*R+u*E,r[7]=c*m+h*M+u*C,r[2]=d*y+f*b+g*S,r[5]=d*p+f*R+g*E,r[8]=d*m+f*M+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(i*c-h*n)*y,t[2]=(o*n-i*a)*y,t[3]=d*y,t[4]=(h*e-i*l)*y,t[5]=(i*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cl.makeScale(t,e)),this}rotate(t){return ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cl.makeRotation(-t)),this}translate(t,e){return ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new Qt,xh=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kd(){let s={enabled:!0,workingColorSpace:or,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ci?lr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[or]:{primaries:t,whitePoint:n,transfer:lr,toXYZ:xh,fromXYZ:_h,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:xh,fromXYZ:_h,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),s}var pe=Kd();function Mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ms,La=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ms===void 0&&(ms=cr("canvas")),ms.width=t.width,ms.height=t.height;let i=ms.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ms}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=cr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qd=0,Ls=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Pl(i[a].image)):r.push(Pl(i[a]))}else r=Pl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Pl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?La.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var jd=0,Il=new A,Cn=class s extends ai{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Xn,i=Xn,r=We,a=Yi,o=Zn,l=Nn,c=s.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Os(),this.name="",this.source=new Ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case si:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case si:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Mc;Cn.DEFAULT_ANISOTROPY=1;var Oe=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,M=(f+1)/2,S=(m+1)/2,E=(h+d)/4,C=(u+y)/4,_=(g+p)/4;return R>M&&R>S?R<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(R),i=E/n,r=C/n):M>S?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=C/r,i=_/r),this.set(n,i,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-y)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Da=class extends ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Cn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ls(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends Da{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},hr=class extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ua=class extends Cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ce=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,y,p)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),a=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,n){let i=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Di.crossVectors(n,Bn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Di.crossVectors(n,Bn)),Di.normalize(),Kr.crossVectors(Bn,Di),i[0]=Di.x,i[4]=Kr.x,i[8]=Bn.x,i[1]=Di.y,i[5]=Kr.y,i[9]=Bn.y,i[2]=Di.z,i[6]=Kr.z,i[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],p=n[10],m=n[14],b=n[3],R=n[7],M=n[11],S=n[15],E=i[0],C=i[4],_=i[8],T=i[12],D=i[1],I=i[5],N=i[9],Z=i[13],Q=i[2],V=i[6],j=i[10],J=i[14],ot=i[3],dt=i[7],Tt=i[11],At=i[15];return r[0]=a*E+o*D+l*Q+c*ot,r[4]=a*C+o*I+l*V+c*dt,r[8]=a*_+o*N+l*j+c*Tt,r[12]=a*T+o*Z+l*J+c*At,r[1]=h*E+u*D+d*Q+f*ot,r[5]=h*C+u*I+d*V+f*dt,r[9]=h*_+u*N+d*j+f*Tt,r[13]=h*T+u*Z+d*J+f*At,r[2]=g*E+y*D+p*Q+m*ot,r[6]=g*C+y*I+p*V+m*dt,r[10]=g*_+y*N+p*j+m*Tt,r[14]=g*T+y*Z+p*J+m*At,r[3]=b*E+R*D+M*Q+S*ot,r[7]=b*C+R*I+M*V+S*dt,r[11]=b*_+R*N+M*j+S*Tt,r[15]=b*T+R*Z+M*J+S*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],p=t[11],m=t[15],b=l*f-c*d,R=o*f-c*u,M=o*d-l*u,S=a*f-c*h,E=a*d-l*h,C=a*u-o*h;return e*(y*b-p*R+m*M)-n*(g*b-p*S+m*E)+i*(g*R-y*S+m*C)-r*(g*M-y*E+p*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],p=t[14],m=t[15],b=e*o-n*a,R=e*l-i*a,M=e*c-r*a,S=n*l-i*o,E=n*c-r*o,C=i*c-r*l,_=h*y-u*g,T=h*p-d*g,D=h*m-f*g,I=u*p-d*y,N=u*m-f*y,Z=d*m-f*p,Q=b*Z-R*N+M*I+S*D-E*T+C*_;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/Q;return t[0]=(o*Z-l*N+c*I)*V,t[1]=(i*N-n*Z-r*I)*V,t[2]=(y*C-p*E+m*S)*V,t[3]=(d*E-u*C-f*S)*V,t[4]=(l*D-a*Z-c*T)*V,t[5]=(e*Z-i*D+r*T)*V,t[6]=(p*M-g*C-m*R)*V,t[7]=(h*C-d*M+f*R)*V,t[8]=(a*N-o*D+c*_)*V,t[9]=(n*D-e*N-r*_)*V,t[10]=(g*E-y*M+m*b)*V,t[11]=(u*M-h*E-f*b)*V,t[12]=(o*T-a*I-l*_)*V,t[13]=(e*I-n*T+i*_)*V,t[14]=(y*R-g*S-p*b)*V,t[15]=(h*S-u*R+d*b)*V,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,p=a*u,m=o*u,b=l*c,R=l*h,M=l*u,S=n.x,E=n.y,C=n.z;return i[0]=(1-(y+m))*S,i[1]=(f+M)*S,i[2]=(g-R)*S,i[3]=0,i[4]=(f-M)*E,i[5]=(1-(d+m))*E,i[6]=(p+b)*E,i[7]=0,i[8]=(g+R)*C,i[9]=(p-b)*C,i[10]=(1-(d+y))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=gs.set(i[0],i[1],i[2]).length(),o=gs.set(i[4],i[5],i[6]).length(),l=gs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Jn.copy(this);let c=1/a,h=1/o,u=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=jn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===jn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ps)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=jn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===jn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ps)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},gs=new A,Jn=new Ce,tf=new A(0,0,0),ef=new A(1,1,1),Di=new A,Kr=new A,Bn=new A,yh=new Ce,vh=new oi,bi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vh.setFromEuler(this),this.setFromQuaternion(vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nf=0,Mh=new A,xs=new oi,gi=new Ce,Qr=new A,Js=new A,sf=new A,rf=new oi,Eh=new A(1,0,0),bh=new A(0,1,0),Sh=new A(0,0,1),Th={type:"added"},af={type:"removed"},_s={type:"childadded",child:null},Ll={type:"childremoved",child:null},ke=class s extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new A,e=new bi,n=new oi,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Qt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(Eh,t)}rotateY(t){return this.rotateOnAxis(bh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,e){return Mh.copy(t).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eh,t)}translateY(t){return this.translateOnAxis(bh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Js,Qr,this.up):gi.lookAt(Qr,Js,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(gi),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Th),_s.child=t,this.dispatchEvent(_s),_s.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(af),Ll.child=t,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Th),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ke.DEFAULT_UP=new A(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ae=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},of={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(of)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Dl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=Pc(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Dl(a,r,t+1/3),this.g=Dl(a,r,t),this.b=Dl(a,r,t-1/3)}return pe.colorSpaceToWorking(this,i),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let n=bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return pe.workingToColorSpace(vn.copy(this),t),Math.round(le(vn.r*255,0,255))*65536+Math.round(le(vn.g*255,0,255))*256+Math.round(le(vn.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(vn.copy(this),e);let n=vn.r,i=vn.g,r=vn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=an){pe.workingToColorSpace(vn.copy(this),t);let e=vn.r,n=vn.g,i=vn.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(jr);let n=ir(Ui.h,jr.h,e),i=ir(Ui.s,jr.s,e),r=ir(Ui.l,jr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Vt;Vt.NAMES=bu;var dr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Si=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Kn=new A,xi=new A,Ul=new A,_i=new A,ys=new A,vs=new A,wh=new A,Nl=new A,Fl=new A,Bl=new A,Hl=new Oe,Ol=new Oe,kl=new Oe,Oi=class s{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Kn.subVectors(t,e),i.cross(Kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Kn.subVectors(i,e),xi.subVectors(n,e),Ul.subVectors(t,e);let a=Kn.dot(Kn),o=Kn.dot(xi),l=Kn.dot(Ul),c=xi.dot(xi),h=xi.dot(Ul),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Hl.setScalar(0),Ol.setScalar(0),kl.setScalar(0),Hl.fromBufferAttribute(t,e),Ol.fromBufferAttribute(t,n),kl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Hl,r.x),a.addScaledVector(Ol,r.y),a.addScaledVector(kl,r.z),a}static isFrontFacing(t,e,n,i){return Kn.subVectors(n,e),xi.subVectors(t,e),Kn.cross(xi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Kn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;ys.subVectors(i,n),vs.subVectors(r,n),Nl.subVectors(t,n);let l=ys.dot(Nl),c=vs.dot(Nl);if(l<=0&&c<=0)return e.copy(n);Fl.subVectors(t,i);let h=ys.dot(Fl),u=vs.dot(Fl);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ys,a);Bl.subVectors(t,r);let f=ys.dot(Bl),g=vs.dot(Bl);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(vs,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return wh.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(wh,o);let m=1/(p+y+d);return a=y*m,o=d*m,e.copy(n).addScaledVector(ys,a).addScaledVector(vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},li=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),ea.subVectors(this.max,Ks),Ms.subVectors(t.a,Ks),Es.subVectors(t.b,Ks),bs.subVectors(t.c,Ks),Ni.subVectors(Es,Ms),Fi.subVectors(bs,Es),ji.subVectors(Ms,bs);let e=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-ji.z,ji.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,ji.z,0,-ji.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-ji.y,ji.x,0];return!zl(e,Ms,Es,bs,ea)||(e=[1,0,0,0,1,0,0,0,1],!zl(e,Ms,Es,bs,ea))?!1:(na.crossVectors(Ni,Fi),e=[na.x,na.y,na.z],zl(e,Ms,Es,bs,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yi=[new A,new A,new A,new A,new A,new A,new A,new A],Qn=new A,ta=new li,Ms=new A,Es=new A,bs=new A,Ni=new A,Fi=new A,ji=new A,Ks=new A,ea=new A,na=new A,ts=new A;function zl(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ts.fromArray(s,r);let o=i.x*Math.abs(ts.x)+i.y*Math.abs(ts.y)+i.z*Math.abs(ts.z),l=t.dot(ts),c=e.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var nn=new A,ia=new Lt,lf=0,xn=class extends ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sc,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=As(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=As(e,this.array)),e}setX(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=As(e,this.array)),e}setY(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=As(e,this.array)),e}setZ(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=As(e,this.array)),e}setW(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array),i=An(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var fr=class extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pr=class extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ee=class extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}},cf=new li,Qs=new A,Gl=new A,Ti=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Gl)),this.expandByPoint(Qs.copy(t.center).sub(Gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hf=0,Wn=new Ce,Vl=new ke,Ss=new A,Hn=new li,js=new li,un=new A,Xe=class s extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dd(t)?pr:fr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return Vl.lookAt(t),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ee(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(Hn.min,js.min),Hn.expandByPoint(un),un.addVectors(Hn.max,js.max),Hn.expandByPoint(un)):(Hn.expandByPoint(js.min),Hn.expandByPoint(js.max))}Hn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)un.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(un));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)un.fromBufferAttribute(o,c),l&&(Ss.fromBufferAttribute(t,c),un.add(Ss)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new A,l[_]=new A;let c=new A,h=new A,u=new A,d=new Lt,f=new Lt,g=new Lt,y=new A,p=new A;function m(_,T,D){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,D),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,D),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[_].add(y),o[T].add(y),o[D].add(y),l[_].add(p),l[T].add(p),l[D].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,T=b.length;_<T;++_){let D=b[_],I=D.start,N=D.count;for(let Z=I,Q=I+N;Z<Q;Z+=3)m(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let R=new A,M=new A,S=new A,E=new A;function C(_){S.fromBufferAttribute(i,_),E.copy(S);let T=o[_];R.copy(T),R.sub(S.multiplyScalar(S.dot(T))).normalize(),M.crossVectors(E,T);let I=M.dot(l[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,I)}for(let _=0,T=b.length;_<T;++_){let D=b[_],I=D.start,N=D.count;for(let Z=I,Q=I+N;Z<Q;Z+=3)C(t.getX(Z+0)),C(t.getX(Z+1)),C(t.getX(Z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new xn(d,h,u)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var uf=0,wi=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=rs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Ea,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==Ea&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vi=new A,Wl=new A,sa=new A,Bi=new A,Xl=new A,ra=new A,ql=new A,mr=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Wl.copy(t).add(e).multiplyScalar(.5),sa.copy(e).sub(t).normalize(),Bi.copy(this.origin).sub(Wl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(sa),o=Bi.dot(this.direction),l=-Bi.dot(sa),c=Bi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Wl).addScaledVector(sa,d),f}intersectSphere(t,e){vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),i=vi.dot(vi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,i,r){Xl.subVectors(e,t),ra.subVectors(n,t),ql.crossVectors(Xl,ra);let a=this.direction.dot(ql),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,t);let l=o*this.direction.dot(ra.crossVectors(Bi,ra));if(l<0)return null;let c=o*this.direction.dot(Xl.cross(Bi));if(c<0||l+c>a)return null;let h=-o*Bi.dot(ql);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rh=new Ce,es=new mr,aa=new Ti,Ah=new A,oa=new A,la=new A,ca=new A,Yl=new A,ha=new A,Ch=new A,ua=new A,U=class extends ke{constructor(t=new Xe,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Yl.fromBufferAttribute(u,t),a?ha.addScaledVector(Yl,h):ha.addScaledVector(Yl.sub(e),h))}e.add(ha)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(aa.containsPoint(es.origin)===!1&&(es.intersectSphere(aa,Ah)===null||es.origin.distanceToSquared(Ah)>(t.far-t.near)**2))&&(Rh.copy(r).invert(),es.copy(t.ray).applyMatrix4(Rh),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),R=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,S=R;M<S;M+=3){let E=o.getX(M),C=o.getX(M+1),_=o.getX(M+2);i=da(this,m,t,n,c,h,u,E,C,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let b=o.getX(p),R=o.getX(p+1),M=o.getX(p+2);i=da(this,a,t,n,c,h,u,b,R,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),R=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,S=R;M<S;M+=3){let E=M,C=M+1,_=M+2;i=da(this,m,t,n,c,h,u,E,C,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let b=p,R=p+1,M=p+2;i=da(this,a,t,n,c,h,u,b,R,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function df(s,t,e,n,i,r,a,o){let l;if(t.side===_n?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ei,o),l===null)return null;ua.copy(o),ua.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ua);return c<e.near||c>e.far?null:{distance:c,point:ua.clone(),object:s}}function da(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,oa),s.getVertexPosition(l,la),s.getVertexPosition(c,ca);let h=df(s,t,e,n,oa,la,ca,Ch);if(h){let u=new A;Oi.getBarycoord(Ch,oa,la,ca,u),i&&(h.uv=Oi.getInterpolatedAttribute(i,o,l,c,u,new Lt)),r&&(h.uv1=Oi.getInterpolatedAttribute(r,o,l,c,u,new Lt)),a&&(h.normal=Oi.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new A,materialIndex:0};Oi.getNormal(oa,la,ca,d.normal),h.face=d,h.barycoord=u}return h}var gr=class extends Cn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=dn,h=dn,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class extends xn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ts=new Ce,Ph=new Ce,fa=[],Ih=new li,ff=new Ce,tr=new U,er=new Ti,Mn=class extends U{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ff)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),Ih.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Ih)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),er.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ts),Ph.multiplyMatrices(n,Ts),tr.matrixWorld=Ph,tr.raycast(t,fa);for(let a=0,o=fa.length;a<o;a++){let l=fa[a];l.instanceId=r,l.object=this,e.push(l)}fa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gr(new Float32Array(i*this.count),i,this.count,po,Yn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zl=new A,pf=new A,mf=new Qt,ii=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Zl.subVectors(n,e).cross(pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Zl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mf.getNormalMatrix(t),i=this.coplanarPoint(Zl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ns=new Ti,gf=new Lt(.5,.5),pa=new A,Us=class{constructor(t=new ii,e=new ii,n=new ii,i=new ii,r=new ii,a=new ii){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],p=r[10],m=r[11],b=r[12],R=r[13],M=r[14],S=r[15];if(i[0].setComponents(c-a,f-h,m-g,S-b).normalize(),i[1].setComponents(c+a,f+h,m+g,S+b).normalize(),i[2].setComponents(c+o,f+u,m+y,S+R).normalize(),i[3].setComponents(c-o,f-u,m-y,S-R).normalize(),n)i[4].setComponents(l,d,p,M).normalize(),i[5].setComponents(c-l,f-d,m-p,S-M).normalize();else if(i[4].setComponents(c-l,f-d,m-p,S-M).normalize(),e===jn)i[5].setComponents(c+l,f+d,m+p,S+M).normalize();else if(e===Ps)i[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){ns.center.set(0,0,0);let e=gf.distanceTo(t.center);return ns.radius=.7071067811865476+e,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(pa.x=i.normal.x>0?t.max.x:t.min.x,pa.y=i.normal.y>0?t.max.y:t.min.y,pa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Na=class extends wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Lh=new Ce,rc=new mr,ma=new Ti,ga=new A,_r=class extends ke{constructor(t=new Xe,e=new Na){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,t.ray.intersectsSphere(ma)===!1)return;Lh.copy(i).invert(),rc.copy(t.ray).applyMatrix4(Lh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let p=c.getX(g);ga.fromBufferAttribute(u,p),Dh(ga,p,l,i,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)ga.fromBufferAttribute(u,g),Dh(ga,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Dh(s,t,e,n,i,r,a){let o=rc.distanceSqToPoint(s);if(o<e){let l=new A;rc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var yr=class extends Cn{constructor(t=[],e=qi,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},En=class extends Cn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ri=class extends Cn{constructor(t,e,n=ti,i,r,a,o=dn,l=dn,c,h=ri,u=1){if(h!==ri&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fa=class extends Ri{constructor(t,e=ti,n=qi,i,r,a=dn,o=dn,l,c=ri){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},vr=class extends Cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},de=class s extends Xe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function g(y,p,m,b,R,M,S,E,C,_,T){let D=M/C,I=S/_,N=M/2,Z=S/2,Q=E/2,V=C+1,j=_+1,J=0,ot=0,dt=new A;for(let Tt=0;Tt<j;Tt++){let At=Tt*I-Z;for(let Nt=0;Nt<V;Nt++){let _e=Nt*D-N;dt[y]=_e*b,dt[p]=At*R,dt[m]=Q,c.push(dt.x,dt.y,dt.z),dt[y]=0,dt[p]=0,dt[m]=E>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(Nt/C),u.push(1-Tt/_),J+=1}}for(let Tt=0;Tt<_;Tt++)for(let At=0;At<C;At++){let Nt=d+At+V*Tt,_e=d+At+V*(Tt+1),Be=d+(At+1)+V*(Tt+1),ye=d+(At+1)+V*Tt;l.push(Nt,_e,ye),l.push(_e,Be,ye),ot+=6}o.addGroup(f,ot,T),f+=ot,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ns=class s extends Xe{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=n*2+r,y=i+1,p=new A,m=new A;for(let b=0;b<=g;b++){let R=0,M=0,S=0,E=0;if(b<=n){let T=b/n,D=T*Math.PI/2;M=-h-t*Math.cos(D),S=t*Math.sin(D),E=-t*Math.cos(D),R=T*u}else if(b<=n+r){let T=(b-n)/r;M=-h+T*e,S=t,E=0,R=u+T*d}else{let T=(b-n-r)/n,D=T*Math.PI/2;M=h+t*Math.sin(D),S=t*Math.cos(D),E=t*Math.sin(D),R=u+d+T*u}let C=Math.max(0,Math.min(1,R/f)),_=0;b===0?_=.5/i:b===g&&(_=-.5/i);for(let T=0;T<=i;T++){let D=T/i,I=D*Math.PI*2,N=Math.sin(I),Z=Math.cos(I);m.x=-S*Z,m.y=M,m.z=S*N,o.push(m.x,m.y,m.z),p.set(-S*Z,E,S*N),p.normalize(),l.push(p.x,p.y,p.z),c.push(D+_,C)}if(b>0){let T=(b-1)*y;for(let D=0;D<i;D++){let I=T+D,N=T+D+1,Z=b*y+D,Q=b*y+D+1;a.push(I,N,Z),a.push(N,Q,Z)}}}this.setIndex(a),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},zi=class s extends Xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new A,h=new Lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ft=class s extends Xe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],p=n/2,m=0;b(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(f,2));function b(){let M=new A,S=new A,E=0,C=(e-t)/n;for(let _=0;_<=r;_++){let T=[],D=_/r,I=D*(e-t)+t;for(let N=0;N<=i;N++){let Z=N/i,Q=Z*l+o,V=Math.sin(Q),j=Math.cos(Q);S.x=I*V,S.y=-D*n+p,S.z=I*j,u.push(S.x,S.y,S.z),M.set(V,C,j).normalize(),d.push(M.x,M.y,M.z),f.push(Z,1-D),T.push(g++)}y.push(T)}for(let _=0;_<i;_++)for(let T=0;T<r;T++){let D=y[T][_],I=y[T+1][_],N=y[T+1][_+1],Z=y[T][_+1];(t>0||T!==0)&&(h.push(D,I,Z),E+=3),(e>0||T!==r-1)&&(h.push(I,N,Z),E+=3)}c.addGroup(m,E,0),m+=E}function R(M){let S=g,E=new Lt,C=new A,_=0,T=M===!0?t:e,D=M===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,p*D,0),d.push(0,D,0),f.push(.5,.5),g++;let I=g;for(let N=0;N<=i;N++){let Q=N/i*l+o,V=Math.cos(Q),j=Math.sin(Q);C.x=T*j,C.y=p*D,C.z=T*V,u.push(C.x,C.y,C.z),d.push(0,D,0),E.x=V*.5+.5,E.y=j*.5*D+.5,f.push(E.x,E.y),g++}for(let N=0;N<i;N++){let Z=S+N,Q=I+N;M===!0?h.push(Q,Q+1,Z):h.push(Q+1,Q,Z),_+=3}c.addGroup(m,_,M===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fn=class s extends Ft{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Lt:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new A,i=[],r=[],a=[],o=new A,l=new Ce;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(le(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Mr=class extends qn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Lt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ba=class extends Mr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ic(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Uh=new A,Nh=new A,$l=new Ic,Jl=new Ic,Kl=new Ic,bn=class extends qn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Nh.subVectors(i[0],i[1]).add(i[0]),c=Nh);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Uh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Uh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),$l.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,p),Jl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,p),Kl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&($l.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Jl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Kl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set($l.calc(l),Jl.calc(l),Kl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fh(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function xf(s,t){let e=1-s;return e*e*t}function _f(s,t){return 2*(1-s)*s*t}function yf(s,t){return s*s*t}function sr(s,t,e,n){return xf(s,t)+_f(s,e)+yf(s,n)}function vf(s,t){let e=1-s;return e*e*e*t}function Mf(s,t){let e=1-s;return 3*e*e*s*t}function Ef(s,t){return 3*(1-s)*s*s*t}function bf(s,t){return s*s*s*t}function rr(s,t,e,n,i){return vf(s,t)+Mf(s,e)+Ef(s,n)+bf(s,i)}var Ha=class extends qn{constructor(t=new Lt,e=new Lt,n=new Lt,i=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Lt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(t,i.x,r.x,a.x,o.x),rr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oa=class extends qn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(t,i.x,r.x,a.x,o.x),rr(t,i.y,r.y,a.y,o.y),rr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ka=class extends qn{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends qn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends qn{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(sr(t,i.x,r.x,a.x),sr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends qn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(sr(t,i.x,r.x,a.x),sr(t,i.y,r.y,a.y),sr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Fh(o,l.x,c.x,h.x,u.x),Fh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Lt().fromArray(i))}return this}},Sf=Object.freeze({__proto__:null,ArcCurve:Ba,CatmullRomCurve3:bn,CubicBezierCurve:Ha,CubicBezierCurve3:Oa,EllipseCurve:Mr,LineCurve:ka,LineCurve3:za,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:Er,SplineCurve:Va});var Ai=class s extends Xe{constructor(t=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=le(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new A,d=new Lt,f=new A,g=new A,y=new A,p=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-p,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let b=0;b<=e;b++){let R=n+b*h*i,M=Math.sin(R),S=Math.cos(R);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*M,u.y=t[E].y,u.z=t[E].x*S,a.push(u.x,u.y,u.z),d.x=b/e,d.y=E/(t.length-1),o.push(d.x,d.y);let C=l[3*E+0]*M,_=l[3*E+1],T=l[3*E+0]*S;c.push(C,_,T)}}for(let b=0;b<e;b++)for(let R=0;R<t.length-1;R++){let M=R+b*t.length,S=M,E=M+t.length,C=M+t.length+1,_=M+1;r.push(S,E,_),r.push(C,_,E)}this.setIndex(r),this.setAttribute("position",new Ee(a,3)),this.setAttribute("uv",new Ee(o,2)),this.setAttribute("normal",new Ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var se=class s extends Xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let b=m*d-a;for(let R=0;R<c;R++){let M=R*u-r;g.push(M,-b,0),y.push(0,0,1),p.push(R/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let R=b+c*m,M=b+c*(m+1),S=b+1+c*(m+1),E=b+1+c*m;f.push(R,M,E),f.push(M,S,E)}this.setIndex(f),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(y,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Kt=class s extends Xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,f=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let b=[],R=m/n,M=a+R*o,S=t*Math.cos(M),E=Math.sqrt(t*t-S*S),C=0;m===0&&a===0?C=.5/e:m===n&&l===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let T=_/e,D=i+T*r;u.x=-E*Math.cos(D),u.y=S,u.z=E*Math.sin(D),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(T+C,1-R),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let R=h[m][b+1],M=h[m][b],S=h[m+1][b],E=h[m+1][b+1];(m!==0||a>0)&&f.push(R,M,E),(m!==n-1||l<Math.PI)&&f.push(M,S,E)}this.setIndex(f),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(y,3)),this.setAttribute("uv",new Ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var on=class s extends Xe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new A,f=new A,g=new A;for(let y=0;y<=n;y++){let p=a+y/n*o;for(let m=0;m<=i;m++){let b=m/i*r;f.x=(t+e*Math.cos(p))*Math.cos(b),f.y=(t+e*Math.cos(p))*Math.sin(b),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/i),u.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=i;p++){let m=(i+1)*y+p-1,b=(i+1)*(y-1)+p-1,R=(i+1)*(y-1)+p,M=(i+1)*y+p;l.push(m,b,M),l.push(b,R,M)}this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Pn=class s extends Xe{constructor(t=new Er(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new Lt,h=new A,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(f,2));function y(){for(let R=0;R<e;R++)p(R);p(r===!1?e:0),b(),m()}function p(R){h=t.getPointAt(R/e,h);let M=a.normals[R],S=a.binormals[R];for(let E=0;E<=i;E++){let C=E/i*Math.PI*2,_=Math.sin(C),T=-Math.cos(C);l.x=T*M.x+_*S.x,l.y=T*M.y+_*S.y,l.z=T*M.z+_*S.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let R=1;R<=e;R++)for(let M=1;M<=i;M++){let S=(i+1)*(R-1)+(M-1),E=(i+1)*R+(M-1),C=(i+1)*R+M,_=(i+1)*(R-1)+M;g.push(S,E,_),g.push(E,C,_)}}function b(){for(let R=0;R<=e;R++)for(let M=0;M<=i;M++)c.x=R/e,c.y=M/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Sf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ds(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Bh(i))i.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Bh(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Sn(s){let t={};for(let e=0;e<s.length;e++){let n=ds(s[e]);for(let i in n)t[i]=n[i]}return t}function Bh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Tf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Lc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Su={clone:ds,merge:Sn},wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=Tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new A().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ce().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wa=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},G=class extends wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},br=class extends G{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Xa=class extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xa(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var Gi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ya=class extends Gi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ec:r=t,o=2*e-n;break;case nc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ec:a=t,l=2*n-e;break;case nc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),y=g*g,p=y*g,m=-d*p+2*d*y-d*g,b=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*g+1,R=(-1-f)*p+(1.5+f)*y+.5*g,M=f*p-f*y;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+b*a[c+S]+R*a[l+S]+M*a[u+S];return r}},Za=class extends Gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},$a=class extends Gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ja=class extends Gi{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(i-e),y=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],p=a[l+g],m=f*d+g*2,b=u[m],R=u[m+1],M=t*d+g*2,S=h[M],E=h[M+1],C=(n-e)/(i-e),_,T,D,I,N;for(let Z=0;Z<8;Z++){_=C*C,T=_*C,D=1-C,I=D*D,N=I*D;let V=N*e+3*I*C*b+3*D*_*S+T*i-n;if(Math.abs(V)<1e-10)break;let j=3*I*(b-e)+6*D*C*(S-b)+3*_*(i-S);if(Math.abs(j)<1e-10)break;C=C-V/j,C=Math.max(0,Math.min(1,C))}r[g]=N*y+3*I*C*R+3*D*_*E+T*p}return r}},On=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xa(e,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xa(t.times,Array),values:xa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ar:e=this.InterpolantFactoryMethodDiscrete;break;case Ia:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break;case jl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return jl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){$t("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Ud(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===va,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Ia;var Vi=class extends On{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=ar;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends On{constructor(t,e,n,i){super(t,e,n,i)}};Ka.prototype.ValueTypeName="color";var Qa=class extends On{constructor(t,e,n,i){super(t,e,n,i)}};Qa.prototype.ValueTypeName="number";var ja=class extends Gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)oi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Sr=class extends On{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends On{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=ar;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends On{constructor(t,e,n,i){super(t,e,n,i)}};to.prototype.ValueTypeName="vector";var eo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tu=new eo,no=class{constructor(t){this.manager=t!==void 0?t:Tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};no.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Tr=class extends ls{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ql=new Ce,Hh=new A,Oh=new A,io=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hh),Oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oh),e.updateMatrixWorld(),Ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ps||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_a=new A,ya=new oi,ni=new A,wr=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_a,ya,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,ya,ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(_a,ya,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,ya,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new A,kh=new Lt,zh=new Lt,sn=class extends wr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,kh,zh),e.subVectors(zh,kh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ac=class extends io{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=os*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Rr=class extends ls{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ac}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},oc=class extends io{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},Xi=class extends ls{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new oc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},cs=class extends wr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var hs=class extends ls{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ws=-90,Rs=1,so=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new sn(ws,Rs,t,e);i.layers=this.layers,this.add(i);let r=new sn(ws,Rs,t,e);r.layers=this.layers,this.add(r);let a=new sn(ws,Rs,t,e);a.layers=this.layers,this.add(a);let o=new sn(ws,Rs,t,e);o.layers=this.layers,this.add(o);let l=new sn(ws,Rs,t,e);l.layers=this.layers,this.add(l);let c=new sn(ws,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ro=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dc="\\[\\]\\.:\\/",Af=new RegExp("["+Dc+"]","g"),Uc="[^"+Dc+"]",Cf="[^"+Dc.replace("\\.","")+"]",Pf=/((?:WC+[\/:])*)/.source.replace("WC",Uc),If=/(WCOD+)?/.source.replace("WCOD",Cf),Lf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),Df=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),Uf=new RegExp("^"+Pf+If+Lf+Df+"$"),Nf=["material","materials","bones","map"],lc=class{constructor(t,e,n){let i=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Af,"")}static parseTrackName(t){let e=Uf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Nf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=lc;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wx=new Float32Array(1);var Ar=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Xt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var cc=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function Nc(s,t,e,n){let i=Ff(n);switch(e){case wc:return s*t;case po:return s*t/i.components*i.byteLength;case mo:return s*t/i.components*i.byteLength;case $i:return s*t*2/i.components*i.byteLength;case go:return s*t*2/i.components*i.byteLength;case Rc:return s*t*3/i.components*i.byteLength;case Zn:return s*t*4/i.components*i.byteLength;case xo:return s*t*4/i.components*i.byteLength;case Lr:case Dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yo:case Mo:return Math.max(s,16)*Math.max(t,8)/4;case _o:case vo:return Math.max(s,8)*Math.max(t,8)/2;case Eo:case bo:case To:case wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case So:case Fr:case Ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Io:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Do:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ko:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case zo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Go:case Vo:case Wo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Xo:case qo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Br:case Yo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ff(s){switch(s){case Nn:case Ec:return{byteLength:1,components:1};case Bs:case bc:case hi:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case ti:case ho:case Yn:return{byteLength:4,components:1};case Sc:case Tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Zu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hf(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kf=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
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
#endif`,Zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fp=`PhysicalMaterial material;
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
#endif`,Bp=`uniform sampler2D dfgLUT;
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
}`,Hp=`
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$p=`#if defined( USE_POINTS_UV )
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
#endif`,Jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`#ifdef USE_MORPHTARGETS
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
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
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
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S0=`float getShadowMask() {
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
}`,T0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k0=`uniform sampler2D t2D;
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`#include <common>
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
}`,q0=`#if DEPTH_PACKING == 3200
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
}`,Y0=`#define DISTANCE
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
}`,Z0=`#define DISTANCE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#define LAMBERT
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
}`,nm=`#define LAMBERT
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
}`,im=`#define MATCAP
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
}`,sm=`#define MATCAP
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
}`,rm=`#define NORMAL
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
}`,am=`#define NORMAL
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
}`,om=`#define PHONG
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
}`,lm=`#define PHONG
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
}`,cm=`#define STANDARD
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
}`,hm=`#define STANDARD
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
}`,um=`#define TOON
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
}`,dm=`#define TOON
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
}`,fm=`uniform float size;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,_m=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Of,alphahash_pars_fragment:kf,alphamap_fragment:zf,alphamap_pars_fragment:Gf,alphatest_fragment:Vf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:Zf,begin_vertex:$f,beginnormal_vertex:Jf,bsdfs:Kf,iridescence_fragment:Qf,bumpmap_pars_fragment:jf,clipping_planes_fragment:tp,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:ap,color_vertex:op,common:lp,cube_uv_reflection_fragment:cp,defaultnormal_vertex:hp,displacementmap_pars_vertex:up,displacementmap_vertex:dp,emissivemap_fragment:fp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:xp,envmap_common_pars_fragment:_p,envmap_pars_fragment:yp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Ip,envmap_vertex:Mp,fog_vertex:Ep,fog_pars_vertex:bp,fog_fragment:Sp,fog_pars_fragment:Tp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Rp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Cp,lights_pars_begin:Pp,lights_toon_fragment:Lp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Up,lights_phong_pars_fragment:Np,lights_physical_fragment:Fp,lights_physical_pars_fragment:Bp,lights_fragment_begin:Hp,lights_fragment_maps:Op,lights_fragment_end:kp,lightprobes_pars_fragment:zp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Wp,logdepthbuf_vertex:Xp,map_fragment:qp,map_pars_fragment:Yp,map_particle_fragment:Zp,map_particle_pars_fragment:$p,metalnessmap_fragment:Jp,metalnessmap_pars_fragment:Kp,morphinstance_vertex:Qp,morphcolor_vertex:jp,morphnormal_vertex:t0,morphtarget_pars_vertex:e0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:s0,normal_pars_fragment:r0,normal_pars_vertex:a0,normal_vertex:o0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:u0,iridescence_pars_fragment:d0,opaque_fragment:f0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:x0,dithering_pars_fragment:_0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:E0,shadowmap_vertex:b0,shadowmask_pars_fragment:S0,skinbase_vertex:T0,skinning_pars_vertex:w0,skinning_vertex:R0,skinnormal_vertex:A0,specularmap_fragment:C0,specularmap_pars_fragment:P0,tonemapping_fragment:I0,tonemapping_pars_fragment:L0,transmission_fragment:D0,transmission_pars_fragment:U0,uv_pars_fragment:N0,uv_pars_vertex:F0,uv_vertex:B0,worldpos_vertex:H0,background_vert:O0,background_frag:k0,backgroundCube_vert:z0,backgroundCube_frag:G0,cube_vert:V0,cube_frag:W0,depth_vert:X0,depth_frag:q0,distance_vert:Y0,distance_frag:Z0,equirect_vert:$0,equirect_frag:J0,linedashed_vert:K0,linedashed_frag:Q0,meshbasic_vert:j0,meshbasic_frag:tm,meshlambert_vert:em,meshlambert_frag:nm,meshmatcap_vert:im,meshmatcap_frag:sm,meshnormal_vert:rm,meshnormal_frag:am,meshphong_vert:om,meshphong_frag:lm,meshphysical_vert:cm,meshphysical_frag:hm,meshtoon_vert:um,meshtoon_frag:dm,points_vert:fm,points_frag:pm,shadow_vert:mm,shadow_frag:gm,sprite_vert:xm,sprite_frag:_m},Rt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},di={basic:{uniforms:Sn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Sn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Sn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Sn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Sn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Sn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Sn([Rt.points,Rt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Sn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Sn([Rt.common,Rt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Sn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Sn([Rt.sprite,Rt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:Sn([Rt.common,Rt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:Sn([Rt.lights,Rt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};di.physical={uniforms:Sn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var Ko={r:0,b:0,g:0},ym=new Ce,$u=new Qt;$u.set(-1,0,0,0,1,0,0,0,1);function vm(s,t,e,n,i,r){let a=new Vt(0),o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){let M=b.backgroundBlurriness>0;R=t.get(R,M)}return R}function g(b){let R=!1,M=f(b);M===null?p(a,o):M&&M.isColor&&(p(M,1),R=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(b,R){let M=f(R);M&&(M.isCubeTexture||M.mapping===Pr)?(c===void 0&&(c=new U(new de(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:ds(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($u),c.material.toneMapped=pe.getTransfer(M.colorSpace)!==Se,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new U(new se(2,2),new $e({name:"BackgroundMaterial",uniforms:ds(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=pe.getTransfer(M.colorSpace)!==Se,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,R){b.getRGB(Ko,Lc(s)),e.buffers.color.setClear(Ko.r,Ko.g,Ko.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:g,addToRenderList:y,dispose:m}}function Mm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(I,N,Z,Q,V){let j=!1,J=u(I,Q,Z,N);r!==J&&(r=J,c(r.object)),j=f(I,Q,Z,V),j&&g(I,Q,Z,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(I,N,Z,Q),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,N,Z,Q){let V=Q.wireframe===!0,j=n[N.id];j===void 0&&(j={},n[N.id]=j);let J=I.isInstancedMesh===!0?I.id:0,ot=j[J];ot===void 0&&(ot={},j[J]=ot);let dt=ot[Z.id];dt===void 0&&(dt={},ot[Z.id]=dt);let Tt=dt[V];return Tt===void 0&&(Tt=d(l()),dt[V]=Tt),Tt}function d(I){let N=[],Z=[],Q=[];for(let V=0;V<e;V++)N[V]=0,Z[V]=0,Q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Z,attributeDivisors:Q,object:I,attributes:{},index:null}}function f(I,N,Z,Q){let V=r.attributes,j=N.attributes,J=0,ot=Z.getAttributes();for(let dt in ot)if(ot[dt].location>=0){let At=V[dt],Nt=j[dt];if(Nt===void 0&&(dt==="instanceMatrix"&&I.instanceMatrix&&(Nt=I.instanceMatrix),dt==="instanceColor"&&I.instanceColor&&(Nt=I.instanceColor)),At===void 0||At.attribute!==Nt||Nt&&At.data!==Nt.data)return!0;J++}return r.attributesNum!==J||r.index!==Q}function g(I,N,Z,Q){let V={},j=N.attributes,J=0,ot=Z.getAttributes();for(let dt in ot)if(ot[dt].location>=0){let At=j[dt];At===void 0&&(dt==="instanceMatrix"&&I.instanceMatrix&&(At=I.instanceMatrix),dt==="instanceColor"&&I.instanceColor&&(At=I.instanceColor));let Nt={};Nt.attribute=At,At&&At.data&&(Nt.data=At.data),V[dt]=Nt,J++}r.attributes=V,r.attributesNum=J,r.index=Q}function y(){let I=r.newAttributes;for(let N=0,Z=I.length;N<Z;N++)I[N]=0}function p(I){m(I,0)}function m(I,N){let Z=r.newAttributes,Q=r.enabledAttributes,V=r.attributeDivisors;Z[I]=1,Q[I]===0&&(s.enableVertexAttribArray(I),Q[I]=1),V[I]!==N&&(s.vertexAttribDivisor(I,N),V[I]=N)}function b(){let I=r.newAttributes,N=r.enabledAttributes;for(let Z=0,Q=N.length;Z<Q;Z++)N[Z]!==I[Z]&&(s.disableVertexAttribArray(Z),N[Z]=0)}function R(I,N,Z,Q,V,j,J){J===!0?s.vertexAttribIPointer(I,N,Z,V,j):s.vertexAttribPointer(I,N,Z,Q,V,j)}function M(I,N,Z,Q){y();let V=Q.attributes,j=Z.getAttributes(),J=N.defaultAttributeValues;for(let ot in j){let dt=j[ot];if(dt.location>=0){let Tt=V[ot];if(Tt===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(Tt=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(Tt=I.instanceColor)),Tt!==void 0){let At=Tt.normalized,Nt=Tt.itemSize,_e=t.get(Tt);if(_e===void 0)continue;let Be=_e.buffer,ye=_e.type,at=_e.bytesPerElement,ft=ye===s.INT||ye===s.UNSIGNED_INT||Tt.gpuType===ho;if(Tt.isInterleavedBufferAttribute){let ut=Tt.data,Yt=ut.stride,Jt=Tt.offset;if(ut.isInstancedInterleavedBuffer){for(let Wt=0;Wt<dt.locationSize;Wt++)m(dt.location+Wt,ut.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Wt=0;Wt<dt.locationSize;Wt++)p(dt.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let Wt=0;Wt<dt.locationSize;Wt++)R(dt.location+Wt,Nt/dt.locationSize,ye,At,Yt*at,(Jt+Nt/dt.locationSize*Wt)*at,ft)}else{if(Tt.isInstancedBufferAttribute){for(let ut=0;ut<dt.locationSize;ut++)m(dt.location+ut,Tt.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let ut=0;ut<dt.locationSize;ut++)p(dt.location+ut);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let ut=0;ut<dt.locationSize;ut++)R(dt.location+ut,Nt/dt.locationSize,ye,At,Nt*at,Nt/dt.locationSize*ut*at,ft)}}else if(J!==void 0){let At=J[ot];if(At!==void 0)switch(At.length){case 2:s.vertexAttrib2fv(dt.location,At);break;case 3:s.vertexAttrib3fv(dt.location,At);break;case 4:s.vertexAttrib4fv(dt.location,At);break;default:s.vertexAttrib1fv(dt.location,At)}}}}b()}function S(){T();for(let I in n){let N=n[I];for(let Z in N){let Q=N[Z];for(let V in Q){let j=Q[V];for(let J in j)h(j[J].object),delete j[J];delete Q[V]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let Z in N){let Q=N[Z];for(let V in Q){let j=Q[V];for(let J in j)h(j[J].object),delete j[J];delete Q[V]}}delete n[I.id]}function C(I){for(let N in n){let Z=n[N];for(let Q in Z){let V=Z[Q];if(V[I.id]===void 0)continue;let j=V[I.id];for(let J in j)h(j[J].object),delete j[J];delete V[I.id]}}}function _(I){for(let N in n){let Z=n[N],Q=I.isInstancedMesh===!0?I.id:0,V=Z[Q];if(V!==void 0){for(let j in V){let J=V[j];for(let ot in J)h(J[ot].object),delete J[ot];delete V[j]}delete Z[Q],Object.keys(Z).length===0&&delete n[N]}}}function T(){D(),a=!0,r!==i&&(r=i,c(r.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:p,disableUnusedAttributes:b}}function Em(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function bm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Zn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Nn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Yn&&!_)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:M,maxSamples:S,samples:E}}function Sm(s){let t=this,e=null,n=0,i=!1,r=!1,a=new ii,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,R=b*4,M=m.clippingState||null;l.value=M,M=h(g,d,R,f);for(let S=0;S!==R;++S)M[S]=e[S];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,M=f;R!==y;++R,M+=4)a.copy(u[R]).applyMatrix4(b,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Ji=4,wu=[.125,.215,.35,.446,.526,.582],fs=20,Tm=256,Hr=new cs,Ru=new Vt,Fc=null,Bc=0,Hc=0,Oc=!1,wm=new A,Gs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=wm}=r;Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fc,Bc,Hc),this._renderer.xr.enabled=Oc,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:hi,format:Zn,colorSpace:or,depthBuffer:!1},i=Au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Rm(r)),this._blurMaterial=Cm(r,t,e),this._ggxMaterial=Am(r,t,e)}return i}_compileMaterial(t){let e=new U(new Xe,t);this._renderer.compile(e,Hr)}_sceneToCubeUV(t,e,n,i,r){let l=new sn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ru),u.toneMapping=kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new U(new de,new ne({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,b=t.background;b?b.isColor&&(p.color.copy(b),t.background=null,m=!0):(p.color.copy(Ru),m=!0);for(let R=0;R<6;R++){let M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let S=this._cubeSize;ks(i,M*S,R>2?S:0,S,S),u.setRenderTarget(i),m&&u.render(y,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===qi||t.mapping===us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Hr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,y=this._sizeLods[n],p=3*y*(n>g-Ji?n-g+Ji:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,ks(r,p,m,3*y,2*y),i.setRenderTarget(r),i.render(o,Hr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ks(t,p,m,3*y,2*y),i.setRenderTarget(t),i.render(o,Hr)}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$t("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fs-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):fs;p>fs&&Xt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fs}`);let m=[],b=0;for(let C=0;C<fs;++C){let _=C/y,T=Math.exp(-_*_/2);m.push(T),C===0?b+=T:C<p&&(b+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:R}=this;d.dTheta.value=g,d.mipInt.value=R-n;let M=this._sizeLods[i],S=3*M*(i>R-Ji?i-R+Ji:0),E=4*(this._cubeSize-M);ks(e,S,E,3*M,2*M),l.setRenderTarget(e),l.render(u,Hr)}};function Rm(s){let t=[],e=[],n=[],i=s,r=s-Ji+1+wu.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ji?l=wu[a-s+Ji-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,p=2,m=1,b=new Float32Array(y*g*f),R=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let E=0;E<f;E++){let C=E%3*2/3-1,_=E>2?0:-1,T=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];b.set(T,y*g*E),R.set(d,p*g*E);let D=[E,E,E,E,E,E];M.set(D,m*g*E)}let S=new Xe;S.setAttribute("position",new xn(b,y)),S.setAttribute("uv",new xn(R,p)),S.setAttribute("faceIndex",new xn(M,m)),n.push(new U(S,null)),i>Ji&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Au(s,t,e){let n=new Qe(s,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Am(s,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:el(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Cm(s,t,e){let n=new Float32Array(fs),i=new A(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:el(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Cu(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Pu(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}var jo=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new yr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new de(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:ci});r.uniforms.tEquirect.value=e;let a=new U(i,r),o=e.minFilter;return e.minFilter===Yi&&(e.minFilter=We),new so(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function Pm(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===oo||f===lo)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new jo(g.height);return y.fromEquirectangularTexture(s,d),t.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===oo||f===lo,y=f===qi||f===us;if(g||y){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Gs(s)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let b=d.image;return g&&b&&b.height>0||y&&b&&l(b)?(n===null&&(n=new Gs(s)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===oo?d.mapping=qi:f===lo&&(d.mapping=us),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Im(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ss("WebGLRenderer: "+n+" extension not supported."),i}}}function Lm(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let R=0,M=b.length;R<M;R+=3){let S=b[R+0],E=b[R+1],C=b[R+2];d.push(S,E,E,C,C,S)}}else{let b=g.array;y=g.version;for(let R=0,M=b.length/3-1;R<M;R+=3){let S=R+0,E=R+1,C=R+2;d.push(S,E,E,C,C,S)}}let p=new(g.count>=65535?pr:fr)(d,1);p.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Dm(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let p=0;p<f;p++)y+=d[p];e.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Um(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:$t("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Nm(s,t,e){let n=new WeakMap,i=new Oe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),y===!0&&(R=3);let M=o.attributes.position.count*R,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*S*4*u),C=new hr(E,M,S,u);C.type=Yn,C.needsUpdate=!0;let _=R*4;for(let D=0;D<u;D++){let I=p[D],N=m[D],Z=b[D],Q=M*S*4*D;for(let V=0;V<I.count;V++){let j=V*_;f===!0&&(i.fromBufferAttribute(I,V),E[Q+j+0]=i.x,E[Q+j+1]=i.y,E[Q+j+2]=i.z,E[Q+j+3]=0),g===!0&&(i.fromBufferAttribute(N,V),E[Q+j+4]=i.x,E[Q+j+5]=i.y,E[Q+j+6]=i.z,E[Q+j+7]=0),y===!0&&(i.fromBufferAttribute(Z,V),E[Q+j+8]=i.x,E[Q+j+9]=i.y,E[Q+j+10]=i.z,E[Q+j+11]=Z.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Lt(M,S)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Fm(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Bm={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[gc]:"CINEON_TONE_MAPPING",[xc]:"ACES_FILMIC_TONE_MAPPING",[yc]:"AGX_TONE_MAPPING",[vc]:"NEUTRAL_TONE_MAPPING",[_c]:"CUSTOM_TONE_MAPPING"};function Hm(s,t,e,n,i,r){let a=new Qe(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new Ri(t,e):void 0}),o=new Qe(t,e,{type:hi,depthBuffer:!1,stencilBuffer:!1}),l=new Xe;l.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ee([0,2,0,0,2,0],2));let c=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new U(l,c),u=new cs(-1,1,1,-1,0,1),d=null,f=null,g=!1,y,p=null,m=[],b=!1;this.setSize=function(R,M){a.setSize(R,M),o.setSize(R,M);for(let S=0;S<m.length;S++){let E=m[S];E.setSize&&E.setSize(R,M)}},this.setEffects=function(R){m=R,b=m.length>0&&m[0].isRenderPass===!0;let M=a.width,S=a.height;for(let E=0;E<m.length;E++){let C=m[E];C.setSize&&C.setSize(M,S)}},this.begin=function(R,M){if(g||R.toneMapping===kn&&m.length===0)return!1;if(p=M,M!==null){let S=M.width,E=M.height;(a.width!==S||a.height!==E)&&this.setSize(S,E)}return b===!1&&R.setRenderTarget(a),y=R.toneMapping,R.toneMapping=kn,!0},this.hasRenderPass=function(){return b},this.end=function(R,M){R.toneMapping=y,g=!0;let S=a,E=o;for(let C=0;C<m.length;C++){let _=m[C];if(_.enabled!==!1&&(_.render(R,E,S,M),_.needsSwap!==!1)){let T=S;S=E,E=T}}if(d!==R.outputColorSpace||f!==R.toneMapping){d=R.outputColorSpace,f=R.toneMapping,c.defines={},pe.getTransfer(d)===Se&&(c.defines.SRGB_TRANSFER="");let C=Bm[f];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,R.setRenderTarget(p),R.render(h,u),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Ju=new Cn,Gc=new Ri(1,1),Ku=new hr,Qu=new Ua,ju=new yr,Iu=[],Lu=[],Du=new Float32Array(16),Uu=new Float32Array(9),Nu=new Float32Array(4);function Vs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Iu[i];if(r===void 0&&(r=new Float32Array(i),Iu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ln(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function cn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function nl(s,t){let e=Lu[t];e===void 0&&(e=new Int32Array(t),Lu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Om(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;s.uniform2fv(this.addr,t),cn(e,t)}}function zm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;s.uniform3fv(this.addr,t),cn(e,t)}}function Gm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;s.uniform4fv(this.addr,t),cn(e,t)}}function Vm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Nu.set(n),s.uniformMatrix2fv(this.addr,!1,Nu),cn(e,n)}}function Wm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Uu.set(n),s.uniformMatrix3fv(this.addr,!1,Uu),cn(e,n)}}function Xm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Du.set(n),s.uniformMatrix4fv(this.addr,!1,Du),cn(e,n)}}function qm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ym(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;s.uniform2iv(this.addr,t),cn(e,t)}}function Zm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;s.uniform3iv(this.addr,t),cn(e,t)}}function $m(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;s.uniform4iv(this.addr,t),cn(e,t)}}function Jm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;s.uniform2uiv(this.addr,t),cn(e,t)}}function Qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;s.uniform3uiv(this.addr,t),cn(e,t)}}function jm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;s.uniform4uiv(this.addr,t),cn(e,t)}}function tg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Gc.compareFunction=e.isReversedDepthBuffer()?Jo:$o,r=Gc):r=Ju,e.setTexture2D(t||r,i)}function eg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qu,i)}function ng(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ju,i)}function ig(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ku,i)}function sg(s){switch(s){case 5126:return Om;case 35664:return km;case 35665:return zm;case 35666:return Gm;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return Ym;case 35668:case 35672:return Zm;case 35669:case 35673:return $m;case 5125:return Jm;case 36294:return Km;case 36295:return Qm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function rg(s,t){s.uniform1fv(this.addr,t)}function ag(s,t){let e=Vs(t,this.size,2);s.uniform2fv(this.addr,e)}function og(s,t){let e=Vs(t,this.size,3);s.uniform3fv(this.addr,e)}function lg(s,t){let e=Vs(t,this.size,4);s.uniform4fv(this.addr,e)}function cg(s,t){let e=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function hg(s,t){let e=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ug(s,t){let e=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function dg(s,t){s.uniform1iv(this.addr,t)}function fg(s,t){s.uniform2iv(this.addr,t)}function pg(s,t){s.uniform3iv(this.addr,t)}function mg(s,t){s.uniform4iv(this.addr,t)}function gg(s,t){s.uniform1uiv(this.addr,t)}function xg(s,t){s.uniform2uiv(this.addr,t)}function _g(s,t){s.uniform3uiv(this.addr,t)}function yg(s,t){s.uniform4uiv(this.addr,t)}function vg(s,t,e){let n=this.cache,i=t.length,r=nl(e,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Gc:a=Ju;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Mg(s,t,e){let n=this.cache,i=t.length,r=nl(e,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Qu,r[a])}function Eg(s,t,e){let n=this.cache,i=t.length,r=nl(e,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ju,r[a])}function bg(s,t,e){let n=this.cache,i=t.length,r=nl(e,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ku,r[a])}function Sg(s){switch(s){case 5126:return rg;case 35664:return ag;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return xg;case 36295:return _g;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return bg}}var Vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sg(e.type)}},Wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sg(e.type)}},Xc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},kc=/(\w+)(\])?(\[|\.)?/g;function Fu(s,t){s.seq.push(t),s.map[t.id]=t}function Tg(s,t,e){let n=s.name,i=n.length;for(kc.lastIndex=0;;){let r=kc.exec(n),a=kc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Fu(e,c===void 0?new Vc(o,s,t):new Wc(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Xc(o),Fu(e,u)),e=u}}}var zs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Tg(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Bu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var wg=37297,Rg=0;function Ag(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Hu=new Qt;function Cg(s){pe._getMatrix(Hu,pe.workingColorSpace,s);let t=`mat3( ${Hu.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(s)){case lr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ou(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ag(s.getShaderSource(t),o)}else return r}function Pg(s,t){let e=Cg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ig={[pc]:"Linear",[mc]:"Reinhard",[gc]:"Cineon",[xc]:"ACESFilmic",[yc]:"AgX",[vc]:"Neutral",[_c]:"Custom"};function Lg(s,t){let e=Ig[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qo=new A;function Dg(){pe.getLuminanceCoefficients(Qo);let s=Qo.x.toFixed(4),t=Qo.y.toFixed(4),e=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function Ng(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function kr(s){return s!==""}function ku(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(s){return s.replace(Bg,Og)}var Hg=new Map;function Og(s,t){let e=ce[t];if(e===void 0){let n=Hg.get(t);if(n!==void 0)e=ce[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return qc(e)}var kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(s){return s.replace(kg,zg)}function zg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Gg={[Cr]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function Vg(s){return Gg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wg={[qi]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE_UV"};function Xg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Wg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var qg={[us]:"ENVMAP_MODE_REFRACTION"};function Yg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":qg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zg={[fc]:"ENVMAP_BLENDING_MULTIPLY",[lu]:"ENVMAP_BLENDING_MIX",[cu]:"ENVMAP_BLENDING_ADD"};function $g(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Zg[s.combine]||"ENVMAP_BLENDING_NONE"}function Jg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Kg(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Vg(e),c=Xg(e),h=Yg(e),u=$g(e),d=Jg(e),f=Ug(e),g=Ng(r),y=i.createProgram(),p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),m.length>0&&(m+=`
`)):(p=[Vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),m=[Vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?ce.tonemapping_pars_fragment:"",e.toneMapping!==kn?Lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Pg("linearToOutputTexel",e.outputColorSpace),Dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),a=qc(a),a=ku(a,e),a=zu(a,e),o=qc(o),o=ku(o,e),o=zu(o,e),a=Gu(a),o=Gu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=b+p+a,M=b+m+o,S=Bu(i,i.VERTEX_SHADER,R),E=Bu(i,i.FRAGMENT_SHADER,M);i.attachShader(y,S),i.attachShader(y,E),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function C(I){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(y)||"",Z=i.getShaderInfoLog(S)||"",Q=i.getShaderInfoLog(E)||"",V=N.trim(),j=Z.trim(),J=Q.trim(),ot=!0,dt=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(ot=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,S,E);else{let Tt=Ou(i,S,"vertex"),At=Ou(i,E,"fragment");$t("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+Tt+`
`+At)}else V!==""?Xt("WebGLProgram: Program Info Log:",V):(j===""||J==="")&&(dt=!1);dt&&(I.diagnostics={runnable:ot,programLog:V,vertexShader:{log:j,prefix:p},fragmentShader:{log:J,prefix:m}})}i.deleteShader(S),i.deleteShader(E),_=new zs(i,y),T=Fg(i,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(y,wg)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=E,this}var Qg=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zc(t),e.set(t,n)),n}},Zc=class{constructor(t){this.id=Qg++,this.code=t,this.usedTimes=0}};function jg(s){return s===$i||s===Fr||s===Br}function tx(s,t,e,n,i,r){let a=new ur,o=new Yc,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,T,D,I,N,Z){let Q=I.fog,V=N.geometry,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ot=t.get(_.envMap||j,J),dt=ot&&ot.mapping===Pr?ot.image.height:null,Tt=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Xt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let At=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Nt=At!==void 0?At.length:0,_e=0;V.morphAttributes.position!==void 0&&(_e=1),V.morphAttributes.normal!==void 0&&(_e=2),V.morphAttributes.color!==void 0&&(_e=3);let Be,ye,at,ft;if(Tt){let Pt=di[Tt];Be=Pt.vertexShader,ye=Pt.fragmentShader}else{Be=_.vertexShader,ye=_.fragmentShader;let Pt=o.getVertexShaderStage(_),Ue=o.getFragmentShaderStage(_);o.update(_,Pt,Ue),at=Pt.id,ft=Ue.id}let ut=s.getRenderTarget(),Yt=s.state.buffers.depth.getReversed(),Jt=N.isInstancedMesh===!0,Wt=N.isBatchedMesh===!0,De=!!_.map,oe=!!_.matcap,ie=!!ot,ve=!!_.aoMap,me=!!_.lightMap,Re=!!_.bumpMap&&_.wireframe===!1,Ye=!!_.normalMap,Je=!!_.displacementMap,Ke=!!_.emissiveMap,He=!!_.metalnessMap,Ge=!!_.roughnessMap,H=_.anisotropy>0,mn=_.clearcoat>0,Me=_.dispersion>0,w=_.iridescence>0,x=_.sheen>0,z=_.transmission>0,Y=H&&!!_.anisotropyMap,tt=mn&&!!_.clearcoatMap,pt=mn&&!!_.clearcoatNormalMap,gt=mn&&!!_.clearcoatRoughnessMap,nt=w&&!!_.iridescenceMap,rt=w&&!!_.iridescenceThicknessMap,yt=x&&!!_.sheenColorMap,Bt=x&&!!_.sheenRoughnessMap,bt=!!_.specularMap,vt=!!_.specularColorMap,Gt=!!_.specularIntensityMap,qt=z&&!!_.transmissionMap,jt=z&&!!_.thicknessMap,F=!!_.gradientMap,xt=!!_.alphaMap,it=_.alphaTest>0,Mt=!!_.alphaHash,wt=!!_.extensions,lt=kn;_.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(lt=s.toneMapping);let Ht={shaderID:Tt,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:ye,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:ft,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Wt,batchingColor:Wt&&N._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&N.instanceColor!==null,instancingMorph:Jt&&N.morphTexture!==null,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:oe,envMap:ie,envMapMode:ie&&ot.mapping,envMapCubeUVHeight:dt,aoMap:ve,lightMap:me,bumpMap:Re,normalMap:Ye,displacementMap:Je,emissiveMap:Ke,normalMapObjectSpace:Ye&&_.normalMapType===du,normalMapTangentSpace:Ye&&_.normalMapType===Zo,packedNormalMap:Ye&&_.normalMapType===Zo&&jg(_.normalMap.format),metalnessMap:He,roughnessMap:Ge,anisotropy:H,anisotropyMap:Y,clearcoat:mn,clearcoatMap:tt,clearcoatNormalMap:pt,clearcoatRoughnessMap:gt,dispersion:Me,iridescence:w,iridescenceMap:nt,iridescenceThicknessMap:rt,sheen:x,sheenColorMap:yt,sheenRoughnessMap:Bt,specularMap:bt,specularColorMap:vt,specularIntensityMap:Gt,transmission:z,transmissionMap:qt,thicknessMap:jt,gradientMap:F,opaque:_.transparent===!1&&_.blending===rs&&_.alphaToCoverage===!1,alphaMap:xt,alphaTest:it,alphaHash:Mt,combine:_.combine,mapUv:De&&g(_.map.channel),aoMapUv:ve&&g(_.aoMap.channel),lightMapUv:me&&g(_.lightMap.channel),bumpMapUv:Re&&g(_.bumpMap.channel),normalMapUv:Ye&&g(_.normalMap.channel),displacementMapUv:Je&&g(_.displacementMap.channel),emissiveMapUv:Ke&&g(_.emissiveMap.channel),metalnessMapUv:He&&g(_.metalnessMap.channel),roughnessMapUv:Ge&&g(_.roughnessMap.channel),anisotropyMapUv:Y&&g(_.anisotropyMap.channel),clearcoatMapUv:tt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&g(_.sheenRoughnessMap.channel),specularMapUv:bt&&g(_.specularMap.channel),specularColorMapUv:vt&&g(_.specularColorMap.channel),specularIntensityMapUv:Gt&&g(_.specularIntensityMap.channel),transmissionMapUv:qt&&g(_.transmissionMap.channel),thicknessMapUv:jt&&g(_.thicknessMap.channel),alphaMapUv:xt&&g(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ye||H),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(De||xt),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&Ye===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Yt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:_e,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&pe.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:Ke&&_.emissiveMap.isVideoTexture===!0&&pe.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===we,flipSided:_.side===_n,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:wt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&_.extensions.multiDraw===!0||Wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function p(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)T.push(D),T.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(T,_),b(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){let T=f[_.type],D;if(T){let I=di[T];D=Su.clone(I.uniforms)}else D=_.uniforms;return D}function M(_,T){let D=h.get(T);return D!==void 0?++D.usedTimes:(D=new Kg(s,T,_,i),c.push(D),h.set(T,D)),D}function S(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:R,acquireProgram:M,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:C}}function ex(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function nx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Wu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,p,m){let b=s[t];return b===void 0?(b={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:p,group:m},s[t]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=g,b.materialVariant=a(d),b.groupOrder=y,b.renderOrder=d.renderOrder,b.z=p,b.group=m),t++,b}function l(d,f,g,y,p,m){let b=o(d,f,g,y,p,m);g.transmission>0?n.push(b):g.transparent===!0?i.push(b):e.push(b)}function c(d,f,g,y,p,m){let b=o(d,f,g,y,p,m);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):e.unshift(b)}function h(d,f,g){e.length>1&&e.sort(d||nx),n.length>1&&n.sort(f||Wu),i.length>1&&i.sort(f||Wu),g&&(e.reverse(),n.reverse(),i.reverse())}function u(){for(let d=t,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function ix(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Xu,s.set(n,[a])):i>=r.length?(a=new Xu,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function sx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Vt};break;case"SpotLight":e={position:new A,direction:new A,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function rx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ax=0;function ox(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function lx(s){let t=new sx,e=rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let i=new A,r=new Ce,a=new Ce;function o(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,b=0,R=0,M=0,S=0,E=0,C=0;c.sort(ox);for(let T=0,D=c.length;T<D;T++){let I=c[T],N=I.color,Z=I.intensity,Q=I.distance,V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===$i?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=N.r*Z,u+=N.g*Z,d+=N.b*Z;else if(I.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(I.sh.coefficients[j],Z);C++}else if(I.isDirectionalLight){let j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,ot=e.get(I);ot.shadowIntensity=J.intensity,ot.shadowBias=J.bias,ot.shadowNormalBias=J.normalBias,ot.shadowRadius=J.radius,ot.shadowMapSize=J.mapSize,n.directionalShadow[f]=ot,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=I.shadow.matrix,b++}n.directional[f]=j,f++}else if(I.isSpotLight){let j=t.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(N).multiplyScalar(Z),j.distance=Q,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,n.spot[y]=j;let J=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,J.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[y]=J.matrix,I.castShadow){let ot=e.get(I);ot.shadowIntensity=J.intensity,ot.shadowBias=J.bias,ot.shadowNormalBias=J.normalBias,ot.shadowRadius=J.radius,ot.shadowMapSize=J.mapSize,n.spotShadow[y]=ot,n.spotShadowMap[y]=V,M++}y++}else if(I.isRectAreaLight){let j=t.get(I);j.color.copy(N).multiplyScalar(Z),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=j,p++}else if(I.isPointLight){let j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){let J=I.shadow,ot=e.get(I);ot.shadowIntensity=J.intensity,ot.shadowBias=J.bias,ot.shadowNormalBias=J.normalBias,ot.shadowRadius=J.radius,ot.shadowMapSize=J.mapSize,ot.shadowCameraNear=J.camera.near,ot.shadowCameraFar=J.camera.far,n.pointShadow[g]=ot,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=I.shadow.matrix,R++}n.point[g]=j,g++}else if(I.isHemisphereLight){let j=t.get(I);j.skyColor.copy(I.color).multiplyScalar(Z),j.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[m]=j,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==p||_.hemiLength!==m||_.numDirectionalShadows!==b||_.numPointShadows!==R||_.numSpotShadows!==M||_.numSpotMaps!==S||_.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=M+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,_.directionalLength=f,_.pointLength=g,_.spotLength=y,_.rectAreaLength=p,_.hemiLength=m,_.numDirectionalShadows=b,_.numPointShadows=R,_.numSpotShadows=M,_.numSpotMaps=S,_.numLightProbes=C,n.version=ax++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let R=c[m];if(R.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(R.matrixWorld),i.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(R.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(R.matrixWorld),i.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(R.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(R.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(R.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(p),d++}else if(R.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:o,setupView:l,state:n}}function qu(s){let t=new lx(s),e=[],n=[],i=[];function r(d){u.camera=d,e.length=0,n.length=0,i.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function cx(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new qu(s),t.set(i,[o])):r>=a.length?(o=new qu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`,dx=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],fx=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Yu=new Ce,Or=new A,zc=new A;function px(s,t,e){let n=new Us,i=new Lt,r=new Lt,a=new Oe,o=new Xa,l=new qa,c={},h=e.maxTextureSize,u={[Ei]:_n,[_n]:Ei,[we]:we},d=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Xe;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new U(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let m=this.type;this.render=function(E,C,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===ao&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cr);let T=s.getRenderTarget(),D=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(ci),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let Z=m!==this.type;Z&&C.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(V=>V.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,V=E.length;Q<V;Q++){let j=E[Q],J=j.shadow;if(J===void 0){Xt("WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);let ot=J.getFrameExtents();i.multiply(ot),r.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ot.x),i.x=r.x*ot.x,J.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ot.y),i.y=r.y*ot.y,J.mapSize.y=r.y));let dt=s.state.buffers.depth.getReversed();if(J.camera._reversedDepth=dt,J.map===null||Z===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Fs){if(j.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Qe(i.x,i.y,{format:$i,type:hi,minFilter:We,magFilter:We,generateMipmaps:!1}),J.map.texture.name=j.name+".shadowMap",J.map.depthTexture=new Ri(i.x,i.y,Yn),J.map.depthTexture.name=j.name+".shadowMapDepth",J.map.depthTexture.format=ri,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=dn,J.map.depthTexture.magFilter=dn}else j.isPointLight?(J.map=new jo(i.x),J.map.depthTexture=new Fa(i.x,ti)):(J.map=new Qe(i.x,i.y),J.map.depthTexture=new Ri(i.x,i.y,ti)),J.map.depthTexture.name=j.name+".shadowMap",J.map.depthTexture.format=ri,this.type===Cr?(J.map.depthTexture.compareFunction=dt?Jo:$o,J.map.depthTexture.minFilter=We,J.map.depthTexture.magFilter=We):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=dn,J.map.depthTexture.magFilter=dn);J.camera.updateProjectionMatrix()}let Tt=J.map.isWebGLCubeRenderTarget?6:1;for(let At=0;At<Tt;At++){if(J.map.isWebGLCubeRenderTarget)s.setRenderTarget(J.map,At),s.clear();else{At===0&&(s.setRenderTarget(J.map),s.clear());let Nt=J.getViewport(At);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),N.viewport(a)}if(j.isPointLight){let Nt=J.camera,_e=J.matrix,Be=j.distance||Nt.far;Be!==Nt.far&&(Nt.far=Be,Nt.updateProjectionMatrix()),Or.setFromMatrixPosition(j.matrixWorld),Nt.position.copy(Or),zc.copy(Nt.position),zc.add(dx[At]),Nt.up.copy(fx[At]),Nt.lookAt(zc),Nt.updateMatrixWorld(),_e.makeTranslation(-Or.x,-Or.y,-Or.z),Yu.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Yu,Nt.coordinateSystem,Nt.reversedDepth)}else J.updateMatrices(j);n=J.getFrustum(),M(C,_,J.camera,j,this.type)}J.isPointLightShadow!==!0&&this.type===Fs&&b(J,_),J.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(T,D,I)};function b(E,C){let _=t.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qe(i.x,i.y,{format:$i,type:hi})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,_,d,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,_,f,y,null)}function R(E,C,_,T){let D=null,I=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)D=I;else if(D=_.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=D.uuid,Z=C.uuid,Q=c[N];Q===void 0&&(Q={},c[N]=Q);let V=Q[Z];V===void 0&&(V=D.clone(),Q[Z]=V,C.addEventListener("dispose",S)),D=V}if(D.visible=C.visible,D.wireframe=C.wireframe,T===Fs?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:u[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let N=s.properties.get(D);N.light=_}return D}function M(E,C,_,T,D){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Fs)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let Z=t.update(E),Q=E.material;if(Array.isArray(Q)){let V=Z.groups;for(let j=0,J=V.length;j<J;j++){let ot=V[j],dt=Q[ot.materialIndex];if(dt&&dt.visible){let Tt=R(E,dt,T,D);E.onBeforeShadow(s,E,C,_,Z,Tt,ot),s.renderBufferDirect(_,null,Z,Tt,E,ot),E.onAfterShadow(s,E,C,_,Z,Tt,ot)}}}else if(Q.visible){let V=R(E,Q,T,D);E.onBeforeShadow(s,E,C,_,Z,V,null),s.renderBufferDirect(_,null,Z,V,E,null),E.onAfterShadow(s,E,C,_,Z,V,null)}}let N=E.children;for(let Z=0,Q=N.length;Z<Q;Z++)M(N[Z],C,_,T,D)}function S(E){E.target.removeEventListener("dispose",S);for(let _ in c){let T=c[_],D=E.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function mx(s,t){function e(){let F=!1,xt=new Oe,it=null,Mt=new Oe(0,0,0,0);return{setMask:function(wt){it!==wt&&!F&&(s.colorMask(wt,wt,wt,wt),it=wt)},setLocked:function(wt){F=wt},setClear:function(wt,lt,Ht,Pt,Ue){Ue===!0&&(wt*=Pt,lt*=Pt,Ht*=Pt),xt.set(wt,lt,Ht,Pt),Mt.equals(xt)===!1&&(s.clearColor(wt,lt,Ht,Pt),Mt.copy(xt))},reset:function(){F=!1,it=null,Mt.set(-1,0,0,0)}}}function n(){let F=!1,xt=!1,it=null,Mt=null,wt=null;return{setReversed:function(lt){if(xt!==lt){let Ht=t.get("EXT_clip_control");lt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),xt=lt;let Pt=wt;wt=null,this.setClear(Pt)}},getReversed:function(){return xt},setTest:function(lt){lt?ut(s.DEPTH_TEST):Yt(s.DEPTH_TEST)},setMask:function(lt){it!==lt&&!F&&(s.depthMask(lt),it=lt)},setFunc:function(lt){if(xt&&(lt=Eu[lt]),Mt!==lt){switch(lt){case ba:s.depthFunc(s.NEVER);break;case Sa:s.depthFunc(s.ALWAYS);break;case Ta:s.depthFunc(s.LESS);break;case as:s.depthFunc(s.LEQUAL);break;case wa:s.depthFunc(s.EQUAL);break;case Ra:s.depthFunc(s.GEQUAL);break;case Aa:s.depthFunc(s.GREATER);break;case Ca:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Mt=lt}},setLocked:function(lt){F=lt},setClear:function(lt){wt!==lt&&(wt=lt,xt&&(lt=1-lt),s.clearDepth(lt))},reset:function(){F=!1,it=null,Mt=null,wt=null,xt=!1}}}function i(){let F=!1,xt=null,it=null,Mt=null,wt=null,lt=null,Ht=null,Pt=null,Ue=null;return{setTest:function(Ae){F||(Ae?ut(s.STENCIL_TEST):Yt(s.STENCIL_TEST))},setMask:function(Ae){xt!==Ae&&!F&&(s.stencilMask(Ae),xt=Ae)},setFunc:function(Ae,Gn,Vn){(it!==Ae||Mt!==Gn||wt!==Vn)&&(s.stencilFunc(Ae,Gn,Vn),it=Ae,Mt=Gn,wt=Vn)},setOp:function(Ae,Gn,Vn){(lt!==Ae||Ht!==Gn||Pt!==Vn)&&(s.stencilOp(Ae,Gn,Vn),lt=Ae,Ht=Gn,Pt=Vn)},setLocked:function(Ae){F=Ae},setClear:function(Ae){Ue!==Ae&&(s.clearStencil(Ae),Ue=Ae)},reset:function(){F=!1,xt=null,it=null,Mt=null,wt=null,lt=null,Ht=null,Pt=null,Ue=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,p=!1,m=null,b=null,R=null,M=null,S=null,E=null,C=null,_=new Vt(0,0,0),T=0,D=!1,I=null,N=null,Z=null,Q=null,V=null,j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ot=0,dt=s.getParameter(s.VERSION);dt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(dt)[1]),J=ot>=1):dt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),J=ot>=2);let Tt=null,At={},Nt=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),Be=new Oe().fromArray(Nt),ye=new Oe().fromArray(_e);function at(F,xt,it,Mt){let wt=new Uint8Array(4),lt=s.createTexture();s.bindTexture(F,lt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<it;Ht++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,Mt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(xt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return lt}let ft={};ft[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(s.DEPTH_TEST),a.setFunc(as),Re(!1),Ye(hc),ut(s.CULL_FACE),ve(ci);function ut(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Yt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Jt(F,xt){return d[F]!==xt?(s.bindFramebuffer(F,xt),d[F]=xt,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=xt),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function Wt(F,xt){let it=g,Mt=!1;if(F){it=f.get(xt),it===void 0&&(it=[],f.set(xt,it));let wt=F.textures;if(it.length!==wt.length||it[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Ht=wt.length;lt<Ht;lt++)it[lt]=s.COLOR_ATTACHMENT0+lt;it.length=wt.length,Mt=!0}}else it[0]!==s.BACK&&(it[0]=s.BACK,Mt=!0);Mt&&s.drawBuffers(it)}function De(F){return y!==F?(s.useProgram(F),y=F,!0):!1}let oe={[ki]:s.FUNC_ADD,[Xh]:s.FUNC_SUBTRACT,[qh]:s.FUNC_REVERSE_SUBTRACT};oe[Yh]=s.MIN,oe[Zh]=s.MAX;let ie={[$h]:s.ZERO,[Jh]:s.ONE,[Kh]:s.SRC_COLOR,[Ma]:s.SRC_ALPHA,[iu]:s.SRC_ALPHA_SATURATE,[eu]:s.DST_COLOR,[jh]:s.DST_ALPHA,[Qh]:s.ONE_MINUS_SRC_COLOR,[Ea]:s.ONE_MINUS_SRC_ALPHA,[nu]:s.ONE_MINUS_DST_COLOR,[tu]:s.ONE_MINUS_DST_ALPHA,[su]:s.CONSTANT_COLOR,[ru]:s.ONE_MINUS_CONSTANT_COLOR,[au]:s.CONSTANT_ALPHA,[ou]:s.ONE_MINUS_CONSTANT_ALPHA};function ve(F,xt,it,Mt,wt,lt,Ht,Pt,Ue,Ae){if(F===ci){p===!0&&(Yt(s.BLEND),p=!1);return}if(p===!1&&(ut(s.BLEND),p=!0),F!==Wh){if(F!==m||Ae!==D){if((b!==ki||S!==ki)&&(s.blendEquation(s.FUNC_ADD),b=ki,S=ki),Ae)switch(F){case rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case In:s.blendFunc(s.ONE,s.ONE);break;case uc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:$t("WebGLState: Invalid blending: ",F);break}else switch(F){case rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case In:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case uc:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",F);break}R=null,M=null,E=null,C=null,_.set(0,0,0),T=0,m=F,D=Ae}return}wt=wt||xt,lt=lt||it,Ht=Ht||Mt,(xt!==b||wt!==S)&&(s.blendEquationSeparate(oe[xt],oe[wt]),b=xt,S=wt),(it!==R||Mt!==M||lt!==E||Ht!==C)&&(s.blendFuncSeparate(ie[it],ie[Mt],ie[lt],ie[Ht]),R=it,M=Mt,E=lt,C=Ht),(Pt.equals(_)===!1||Ue!==T)&&(s.blendColor(Pt.r,Pt.g,Pt.b,Ue),_.copy(Pt),T=Ue),m=F,D=!1}function me(F,xt){F.side===we?Yt(s.CULL_FACE):ut(s.CULL_FACE);let it=F.side===_n;xt&&(it=!it),Re(it),F.blending===rs&&F.transparent===!1?ve(ci):ve(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let Mt=F.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):Yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Re(F){I!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),I=F)}function Ye(F){F!==Gh?(ut(s.CULL_FACE),F!==N&&(F===hc?s.cullFace(s.BACK):F===Vh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Yt(s.CULL_FACE),N=F}function Je(F){F!==Z&&(J&&s.lineWidth(F),Z=F)}function Ke(F,xt,it){F?(ut(s.POLYGON_OFFSET_FILL),(Q!==xt||V!==it)&&(Q=xt,V=it,a.getReversed()&&(xt=-xt),s.polygonOffset(xt,it))):Yt(s.POLYGON_OFFSET_FILL)}function He(F){F?ut(s.SCISSOR_TEST):Yt(s.SCISSOR_TEST)}function Ge(F){F===void 0&&(F=s.TEXTURE0+j-1),Tt!==F&&(s.activeTexture(F),Tt=F)}function H(F,xt,it){it===void 0&&(Tt===null?it=s.TEXTURE0+j-1:it=Tt);let Mt=At[it];Mt===void 0&&(Mt={type:void 0,texture:void 0},At[it]=Mt),(Mt.type!==F||Mt.texture!==xt)&&(Tt!==it&&(s.activeTexture(it),Tt=it),s.bindTexture(F,xt||ft[F]),Mt.type=F,Mt.texture=xt)}function mn(){let F=At[Tt];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Me(){try{s.compressedTexImage2D(...arguments)}catch(F){$t("WebGLState:",F)}}function w(){try{s.compressedTexImage3D(...arguments)}catch(F){$t("WebGLState:",F)}}function x(){try{s.texSubImage2D(...arguments)}catch(F){$t("WebGLState:",F)}}function z(){try{s.texSubImage3D(...arguments)}catch(F){$t("WebGLState:",F)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(F){$t("WebGLState:",F)}}function tt(){try{s.compressedTexSubImage3D(...arguments)}catch(F){$t("WebGLState:",F)}}function pt(){try{s.texStorage2D(...arguments)}catch(F){$t("WebGLState:",F)}}function gt(){try{s.texStorage3D(...arguments)}catch(F){$t("WebGLState:",F)}}function nt(){try{s.texImage2D(...arguments)}catch(F){$t("WebGLState:",F)}}function rt(){try{s.texImage3D(...arguments)}catch(F){$t("WebGLState:",F)}}function yt(F){return u[F]!==void 0?u[F]:s.getParameter(F)}function Bt(F,xt){u[F]!==xt&&(s.pixelStorei(F,xt),u[F]=xt)}function bt(F){Be.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Be.copy(F))}function vt(F){ye.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),ye.copy(F))}function Gt(F,xt){let it=c.get(xt);it===void 0&&(it=new WeakMap,c.set(xt,it));let Mt=it.get(F);Mt===void 0&&(Mt=s.getUniformBlockIndex(xt,F.name),it.set(F,Mt))}function qt(F,xt){let Mt=c.get(xt).get(F);l.get(xt)!==Mt&&(s.uniformBlockBinding(xt,Mt,F.__bindingPointIndex),l.set(xt,Mt))}function jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Tt=null,At={},d={},f=new WeakMap,g=[],y=null,p=!1,m=null,b=null,R=null,M=null,S=null,E=null,C=null,_=new Vt(0,0,0),T=0,D=!1,I=null,N=null,Z=null,Q=null,V=null,Be.set(0,0,s.canvas.width,s.canvas.height),ye.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:Yt,bindFramebuffer:Jt,drawBuffers:Wt,useProgram:De,setBlending:ve,setMaterial:me,setFlipSided:Re,setCullFace:Ye,setLineWidth:Je,setPolygonOffset:Ke,setScissorTest:He,activeTexture:Ge,bindTexture:H,unbindTexture:mn,compressedTexImage2D:Me,compressedTexImage3D:w,texImage2D:nt,texImage3D:rt,pixelStorei:Bt,getParameter:yt,updateUBOMapping:Gt,uniformBlockBinding:qt,texStorage2D:pt,texStorage3D:gt,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:tt,scissor:bt,viewport:vt,reset:jt}}function gx(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,x){return g?new OffscreenCanvas(w,x):cr("canvas")}function p(w,x,z){let Y=1,tt=Me(w);if((tt.width>z||tt.height>z)&&(Y=z/Math.max(tt.width,tt.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let pt=Math.floor(Y*tt.width),gt=Math.floor(Y*tt.height);d===void 0&&(d=y(pt,gt));let nt=x?y(pt,gt):d;return nt.width=pt,nt.height=gt,nt.getContext("2d").drawImage(w,0,0,pt,gt),Xt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+pt+"x"+gt+")."),nt}else return"data"in w&&Xt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function m(w){return w.generateMipmaps}function b(w){s.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(w,x,z,Y,tt,pt=!1){if(w!==null){if(s[w]!==void 0)return s[w];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let gt;Y&&(gt=t.get("EXT_texture_norm16"),gt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=x;if(x===s.RED&&(z===s.FLOAT&&(nt=s.R32F),z===s.HALF_FLOAT&&(nt=s.R16F),z===s.UNSIGNED_BYTE&&(nt=s.R8),z===s.UNSIGNED_SHORT&&gt&&(nt=gt.R16_EXT),z===s.SHORT&&gt&&(nt=gt.R16_SNORM_EXT)),x===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.R8UI),z===s.UNSIGNED_SHORT&&(nt=s.R16UI),z===s.UNSIGNED_INT&&(nt=s.R32UI),z===s.BYTE&&(nt=s.R8I),z===s.SHORT&&(nt=s.R16I),z===s.INT&&(nt=s.R32I)),x===s.RG&&(z===s.FLOAT&&(nt=s.RG32F),z===s.HALF_FLOAT&&(nt=s.RG16F),z===s.UNSIGNED_BYTE&&(nt=s.RG8),z===s.UNSIGNED_SHORT&&gt&&(nt=gt.RG16_EXT),z===s.SHORT&&gt&&(nt=gt.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.RG8UI),z===s.UNSIGNED_SHORT&&(nt=s.RG16UI),z===s.UNSIGNED_INT&&(nt=s.RG32UI),z===s.BYTE&&(nt=s.RG8I),z===s.SHORT&&(nt=s.RG16I),z===s.INT&&(nt=s.RG32I)),x===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.RGB8UI),z===s.UNSIGNED_SHORT&&(nt=s.RGB16UI),z===s.UNSIGNED_INT&&(nt=s.RGB32UI),z===s.BYTE&&(nt=s.RGB8I),z===s.SHORT&&(nt=s.RGB16I),z===s.INT&&(nt=s.RGB32I)),x===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(nt=s.RGBA16UI),z===s.UNSIGNED_INT&&(nt=s.RGBA32UI),z===s.BYTE&&(nt=s.RGBA8I),z===s.SHORT&&(nt=s.RGBA16I),z===s.INT&&(nt=s.RGBA32I)),x===s.RGB&&(z===s.UNSIGNED_SHORT&&gt&&(nt=gt.RGB16_EXT),z===s.SHORT&&gt&&(nt=gt.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(nt=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(nt=s.R11F_G11F_B10F)),x===s.RGBA){let rt=pt?lr:pe.getTransfer(tt);z===s.FLOAT&&(nt=s.RGBA32F),z===s.HALF_FLOAT&&(nt=s.RGBA16F),z===s.UNSIGNED_BYTE&&(nt=rt===Se?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&gt&&(nt=gt.RGBA16_EXT),z===s.SHORT&&gt&&(nt=gt.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function S(w,x){let z;return w?x===null||x===ti||x===Hs?z=s.DEPTH24_STENCIL8:x===Yn?z=s.DEPTH32F_STENCIL8:x===Bs&&(z=s.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ti||x===Hs?z=s.DEPTH_COMPONENT24:x===Yn?z=s.DEPTH_COMPONENT32F:x===Bs&&(z=s.DEPTH_COMPONENT16),z}function E(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==dn&&w.minFilter!==We?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function C(w){let x=w.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function _(w){let x=w.target;x.removeEventListener("dispose",_),I(x)}function T(w){let x=n.get(w);if(x.__webglInit===void 0)return;let z=w.source,Y=f.get(z);if(Y){let tt=Y[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&D(w),Object.keys(Y).length===0&&f.delete(z)}n.remove(w)}function D(w){let x=n.get(w);s.deleteTexture(x.__webglTexture);let z=w.source,Y=f.get(z);delete Y[x.__cacheKey],a.memory.textures--}function I(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let tt=0;tt<x.__webglFramebuffer[Y].length;tt++)s.deleteFramebuffer(x.__webglFramebuffer[Y][tt]);else s.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[Y]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=w.textures;for(let Y=0,tt=z.length;Y<tt;Y++){let pt=n.get(z[Y]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(z[Y])}n.remove(w)}let N=0;function Z(){N=0}function Q(){return N}function V(w){N=w}function j(){let w=N;return w>=i.maxTextures&&Xt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),N+=1,w}function J(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function ot(w,x){let z=n.get(w);if(w.isVideoTexture&&H(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){let Y=w.image;if(Y===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(z,w,x);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+x)}function dt(w,x){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){Yt(z,w,x);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+x)}function Tt(w,x){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){Yt(z,w,x);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+x)}function At(w,x){let z=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&z.__version!==w.version){Jt(z,w,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+x)}let Nt={[si]:s.REPEAT,[Xn]:s.CLAMP_TO_EDGE,[Pa]:s.MIRRORED_REPEAT},_e={[dn]:s.NEAREST,[hu]:s.NEAREST_MIPMAP_NEAREST,[Ir]:s.NEAREST_MIPMAP_LINEAR,[We]:s.LINEAR,[co]:s.LINEAR_MIPMAP_NEAREST,[Yi]:s.LINEAR_MIPMAP_LINEAR},Be={[fu]:s.NEVER,[_u]:s.ALWAYS,[pu]:s.LESS,[$o]:s.LEQUAL,[mu]:s.EQUAL,[Jo]:s.GEQUAL,[gu]:s.GREATER,[xu]:s.NOTEQUAL};function ye(w,x){if(x.type===Yn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===We||x.magFilter===co||x.magFilter===Ir||x.magFilter===Yi||x.minFilter===We||x.minFilter===co||x.minFilter===Ir||x.minFilter===Yi)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,Nt[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Nt[x.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Nt[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,_e[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Be[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===dn||x.minFilter!==Ir&&x.minFilter!==Yi||x.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function at(w,x){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",C));let Y=x.source,tt=f.get(Y);tt===void 0&&(tt={},f.set(Y,tt));let pt=J(x);if(pt!==w.__cacheKey){tt[pt]===void 0&&(tt[pt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),tt[pt].usedTimes++;let gt=tt[w.__cacheKey];gt!==void 0&&(tt[w.__cacheKey].usedTimes--,gt.usedTimes===0&&D(x)),w.__cacheKey=pt,w.__webglTexture=tt[pt].texture}return z}function ft(w,x,z){return Math.floor(Math.floor(w/z)/x)}function ut(w,x,z,Y){let pt=w.updateRanges;if(pt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,z,Y,x.data);else{pt.sort((Bt,bt)=>Bt.start-bt.start);let gt=0;for(let Bt=1;Bt<pt.length;Bt++){let bt=pt[gt],vt=pt[Bt],Gt=bt.start+bt.count,qt=ft(vt.start,x.width,4),jt=ft(bt.start,x.width,4);vt.start<=Gt+1&&qt===jt&&ft(vt.start+vt.count-1,x.width,4)===qt?bt.count=Math.max(bt.count,vt.start+vt.count-bt.start):(++gt,pt[gt]=vt)}pt.length=gt+1;let nt=e.getParameter(s.UNPACK_ROW_LENGTH),rt=e.getParameter(s.UNPACK_SKIP_PIXELS),yt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Bt=0,bt=pt.length;Bt<bt;Bt++){let vt=pt[Bt],Gt=Math.floor(vt.start/4),qt=Math.ceil(vt.count/4),jt=Gt%x.width,F=Math.floor(Gt/x.width),xt=qt,it=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,jt,F,xt,it,z,Y,x.data)}w.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,nt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(s.UNPACK_SKIP_ROWS,yt)}}function Yt(w,x,z){let Y=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=s.TEXTURE_3D);let tt=at(w,x),pt=x.source;e.bindTexture(Y,w.__webglTexture,s.TEXTURE0+z);let gt=n.get(pt);if(pt.version!==gt.__version||tt===!0){if(e.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let it=pe.getPrimaries(pe.workingColorSpace),Mt=x.colorSpace===Ci?null:pe.getPrimaries(x.colorSpace),wt=x.colorSpace===Ci||it===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let rt=p(x.image,!1,i.maxTextureSize);rt=mn(x,rt);let yt=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type),bt=M(x.internalFormat,yt,Bt,x.normalized,x.colorSpace,x.isVideoTexture);ye(Y,x);let vt,Gt=x.mipmaps,qt=x.isVideoTexture!==!0,jt=gt.__version===void 0||tt===!0,F=pt.dataReady,xt=E(x,rt);if(x.isDepthTexture)bt=S(x.format===Zi,x.type),jt&&(qt?e.texStorage2D(s.TEXTURE_2D,1,bt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,bt,rt.width,rt.height,0,yt,Bt,null));else if(x.isDataTexture)if(Gt.length>0){qt&&jt&&e.texStorage2D(s.TEXTURE_2D,xt,bt,Gt[0].width,Gt[0].height);for(let it=0,Mt=Gt.length;it<Mt;it++)vt=Gt[it],qt?F&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,vt.width,vt.height,yt,Bt,vt.data):e.texImage2D(s.TEXTURE_2D,it,bt,vt.width,vt.height,0,yt,Bt,vt.data);x.generateMipmaps=!1}else qt?(jt&&e.texStorage2D(s.TEXTURE_2D,xt,bt,rt.width,rt.height),F&&ut(x,rt,yt,Bt)):e.texImage2D(s.TEXTURE_2D,0,bt,rt.width,rt.height,0,yt,Bt,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qt&&jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,bt,Gt[0].width,Gt[0].height,rt.depth);for(let it=0,Mt=Gt.length;it<Mt;it++)if(vt=Gt[it],x.format!==Zn)if(yt!==null)if(qt){if(F)if(x.layerUpdates.size>0){let wt=Nc(vt.width,vt.height,x.format,x.type);for(let lt of x.layerUpdates){let Ht=vt.data.subarray(lt*wt/vt.data.BYTES_PER_ELEMENT,(lt+1)*wt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,lt,vt.width,vt.height,1,yt,Ht)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,vt.width,vt.height,rt.depth,yt,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,bt,vt.width,vt.height,rt.depth,0,vt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,vt.width,vt.height,rt.depth,yt,Bt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,bt,vt.width,vt.height,rt.depth,0,yt,Bt,vt.data)}else{qt&&jt&&e.texStorage2D(s.TEXTURE_2D,xt,bt,Gt[0].width,Gt[0].height);for(let it=0,Mt=Gt.length;it<Mt;it++)vt=Gt[it],x.format!==Zn?yt!==null?qt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,vt.width,vt.height,yt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,it,bt,vt.width,vt.height,0,vt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?F&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,vt.width,vt.height,yt,Bt,vt.data):e.texImage2D(s.TEXTURE_2D,it,bt,vt.width,vt.height,0,yt,Bt,vt.data)}else if(x.isDataArrayTexture)if(qt){if(jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,bt,rt.width,rt.height,rt.depth),F)if(x.layerUpdates.size>0){let it=Nc(rt.width,rt.height,x.format,x.type);for(let Mt of x.layerUpdates){let wt=rt.data.subarray(Mt*it/rt.data.BYTES_PER_ELEMENT,(Mt+1)*it/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Mt,rt.width,rt.height,1,yt,Bt,wt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,yt,Bt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,rt.width,rt.height,rt.depth,0,yt,Bt,rt.data);else if(x.isData3DTexture)qt?(jt&&e.texStorage3D(s.TEXTURE_3D,xt,bt,rt.width,rt.height,rt.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,yt,Bt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,bt,rt.width,rt.height,rt.depth,0,yt,Bt,rt.data);else if(x.isFramebufferTexture){if(jt)if(qt)e.texStorage2D(s.TEXTURE_2D,xt,bt,rt.width,rt.height);else{let it=rt.width,Mt=rt.height;for(let wt=0;wt<xt;wt++)e.texImage2D(s.TEXTURE_2D,wt,bt,it,Mt,0,yt,Bt,null),it>>=1,Mt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let it=s.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),rt.parentNode!==it){it.appendChild(rt),u.add(x),it.onpaint=Mt=>{let wt=Mt.changedElements;for(let lt of u)wt.includes(lt.image)&&(lt.needsUpdate=!0)},it.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,rt);else{let wt=s.RGBA,lt=s.RGBA,Ht=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,wt,lt,Ht,rt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(qt&&jt){let it=Me(Gt[0]);e.texStorage2D(s.TEXTURE_2D,xt,bt,it.width,it.height)}for(let it=0,Mt=Gt.length;it<Mt;it++)vt=Gt[it],qt?F&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,yt,Bt,vt):e.texImage2D(s.TEXTURE_2D,it,bt,yt,Bt,vt);x.generateMipmaps=!1}else if(qt){if(jt){let it=Me(rt);e.texStorage2D(s.TEXTURE_2D,xt,bt,it.width,it.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Bt,rt)}else e.texImage2D(s.TEXTURE_2D,0,bt,yt,Bt,rt);m(x)&&b(Y),gt.__version=pt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Jt(w,x,z){if(x.image.length!==6)return;let Y=at(w,x),tt=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+z);let pt=n.get(tt);if(tt.version!==pt.__version||Y===!0){e.activeTexture(s.TEXTURE0+z);let gt=pe.getPrimaries(pe.workingColorSpace),nt=x.colorSpace===Ci?null:pe.getPrimaries(x.colorSpace),rt=x.colorSpace===Ci||gt===nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let yt=x.isCompressedTexture||x.image[0].isCompressedTexture,Bt=x.image[0]&&x.image[0].isDataTexture,bt=[];for(let lt=0;lt<6;lt++)!yt&&!Bt?bt[lt]=p(x.image[lt],!0,i.maxCubemapSize):bt[lt]=Bt?x.image[lt].image:x.image[lt],bt[lt]=mn(x,bt[lt]);let vt=bt[0],Gt=r.convert(x.format,x.colorSpace),qt=r.convert(x.type),jt=M(x.internalFormat,Gt,qt,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,xt=pt.__version===void 0||Y===!0,it=tt.dataReady,Mt=E(x,vt);ye(s.TEXTURE_CUBE_MAP,x);let wt;if(yt){F&&xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,jt,vt.width,vt.height);for(let lt=0;lt<6;lt++){wt=bt[lt].mipmaps;for(let Ht=0;Ht<wt.length;Ht++){let Pt=wt[Ht];x.format!==Zn?Gt!==null?F?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,0,0,Pt.width,Pt.height,Gt,Pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,jt,Pt.width,Pt.height,0,Pt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,0,0,Pt.width,Pt.height,Gt,qt,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht,jt,Pt.width,Pt.height,0,Gt,qt,Pt.data)}}}else{if(wt=x.mipmaps,F&&xt){wt.length>0&&Mt++;let lt=Me(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,jt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Bt){F?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,bt[lt].width,bt[lt].height,Gt,qt,bt[lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,jt,bt[lt].width,bt[lt].height,0,Gt,qt,bt[lt].data);for(let Ht=0;Ht<wt.length;Ht++){let Ue=wt[Ht].image[lt].image;F?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,0,0,Ue.width,Ue.height,Gt,qt,Ue.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,jt,Ue.width,Ue.height,0,Gt,qt,Ue.data)}}else{F?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Gt,qt,bt[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,jt,Gt,qt,bt[lt]);for(let Ht=0;Ht<wt.length;Ht++){let Pt=wt[Ht];F?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,0,0,Gt,qt,Pt.image[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ht+1,jt,Gt,qt,Pt.image[lt])}}}m(x)&&b(s.TEXTURE_CUBE_MAP),pt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Wt(w,x,z,Y,tt,pt){let gt=r.convert(z.format,z.colorSpace),nt=r.convert(z.type),rt=M(z.internalFormat,gt,nt,z.normalized,z.colorSpace),yt=n.get(x),Bt=n.get(z);if(Bt.__renderTarget=x,!yt.__hasExternalTextures){let bt=Math.max(1,x.width>>pt),vt=Math.max(1,x.height>>pt);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,pt,rt,bt,vt,x.depth,0,gt,nt,null):e.texImage2D(tt,pt,rt,bt,vt,0,gt,nt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),Ge(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,tt,Bt.__webglTexture,0,He(x)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,tt,Bt.__webglTexture,pt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function De(w,x,z){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){let Y=x.depthTexture,tt=Y&&Y.isDepthTexture?Y.type:null,pt=S(x.stencilBuffer,tt),gt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ge(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He(x),pt,x.width,x.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,He(x),pt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,pt,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,w)}else{let Y=x.textures;for(let tt=0;tt<Y.length;tt++){let pt=Y[tt],gt=r.convert(pt.format,pt.colorSpace),nt=r.convert(pt.type),rt=M(pt.internalFormat,gt,nt,pt.normalized,pt.colorSpace);Ge(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He(x),rt,x.width,x.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,He(x),rt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,rt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(w,x,z){let Y=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(x.depthTexture);if(tt.__renderTarget=x,(!tt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),tt.__webglTexture===void 0){tt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),ye(s.TEXTURE_CUBE_MAP,x.depthTexture);let yt=r.convert(x.depthTexture.format),Bt=r.convert(x.depthTexture.type),bt;x.depthTexture.format===ri?bt=s.DEPTH_COMPONENT24:x.depthTexture.format===Zi&&(bt=s.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,bt,x.width,x.height,0,yt,Bt,null)}}else ot(x.depthTexture,0);let pt=tt.__webglTexture,gt=He(x),nt=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,rt=x.depthTexture.format===Zi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===ri)Ge(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,nt,pt,0,gt):s.framebufferTexture2D(s.FRAMEBUFFER,rt,nt,pt,0);else if(x.depthTexture.format===Zi)Ge(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,nt,pt,0,gt):s.framebufferTexture2D(s.FRAMEBUFFER,rt,nt,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(w){let x=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let Y=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",tt)};Y.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=Y}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)oe(x.__webglFramebuffer[Y],w,Y);else{let Y=w.texture.mipmaps;Y&&Y.length>0?oe(x.__webglFramebuffer[0],w,0):oe(x.__webglFramebuffer,w,0)}else if(z){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=s.createRenderbuffer(),De(x.__webglDepthbuffer[Y],w,!1);else{let tt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=x.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,pt)}}else{let Y=w.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),De(x.__webglDepthbuffer,w,!1);else{let tt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,pt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(w,x,z){let Y=n.get(w);x!==void 0&&Wt(Y.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&ie(w)}function me(w){let x=w.texture,z=n.get(w),Y=n.get(x);w.addEventListener("dispose",_);let tt=w.textures,pt=w.isWebGLCubeRenderTarget===!0,gt=tt.length>1;if(gt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=x.version,a.memory.textures++),pt){z.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[nt]=[];for(let rt=0;rt<x.mipmaps.length;rt++)z.__webglFramebuffer[nt][rt]=s.createFramebuffer()}else z.__webglFramebuffer[nt]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let nt=0;nt<x.mipmaps.length;nt++)z.__webglFramebuffer[nt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(gt)for(let nt=0,rt=tt.length;nt<rt;nt++){let yt=n.get(tt[nt]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&Ge(w)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let nt=0;nt<tt.length;nt++){let rt=tt[nt];z.__webglColorRenderbuffer[nt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[nt]);let yt=r.convert(rt.format,rt.colorSpace),Bt=r.convert(rt.type),bt=M(rt.internalFormat,yt,Bt,rt.normalized,rt.colorSpace,w.isXRRenderTarget===!0),vt=He(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,bt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,z.__webglColorRenderbuffer[nt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),De(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ye(s.TEXTURE_CUBE_MAP,x);for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)Wt(z.__webglFramebuffer[nt][rt],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,rt);else Wt(z.__webglFramebuffer[nt],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(x)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let nt=0,rt=tt.length;nt<rt;nt++){let yt=tt[nt],Bt=n.get(yt),bt=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(bt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,Bt.__webglTexture),ye(bt,yt),Wt(z.__webglFramebuffer,w,yt,s.COLOR_ATTACHMENT0+nt,bt,0),m(yt)&&b(bt)}e.unbindTexture()}else{let nt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(nt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(nt,Y.__webglTexture),ye(nt,x),x.mipmaps&&x.mipmaps.length>0)for(let rt=0;rt<x.mipmaps.length;rt++)Wt(z.__webglFramebuffer[rt],w,x,s.COLOR_ATTACHMENT0,nt,rt);else Wt(z.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,nt,0);m(x)&&b(nt),e.unbindTexture()}w.depthBuffer&&ie(w)}function Re(w){let x=w.textures;for(let z=0,Y=x.length;z<Y;z++){let tt=x[z];if(m(tt)){let pt=R(w),gt=n.get(tt).__webglTexture;e.bindTexture(pt,gt),b(pt),e.unbindTexture()}}}let Ye=[],Je=[];function Ke(w){if(w.samples>0){if(Ge(w)===!1){let x=w.textures,z=w.width,Y=w.height,tt=s.COLOR_BUFFER_BIT,pt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(w),nt=x.length>1;if(nt)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let rt=w.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),nt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let Bt=n.get(x[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Bt,0)}s.blitFramebuffer(0,0,z,Y,0,0,z,Y,tt,s.NEAREST),l===!0&&(Ye.length=0,Je.length=0,Ye.push(s.COLOR_ATTACHMENT0+yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ye.push(pt),Je.push(pt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Je)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ye))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),nt)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let Bt=n.get(x[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,Bt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function He(w){return Math.min(i.maxSamples,w.samples)}function Ge(w){let x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function H(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function mn(w,x){let z=w.colorSpace,Y=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==or&&z!==Ci&&(pe.getTransfer(z)===Se?(Y!==Zn||tt!==Nn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",z)),x}function Me(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=Z,this.getTextureUnits=Q,this.setTextureUnits=V,this.setTexture2D=ot,this.setTexture2DArray=dt,this.setTexture3D=Tt,this.setTextureCube=At,this.rebindTextures=ve,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Wt,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function xx(s,t){function e(n,i=Ci){let r,a=pe.getTransfer(i);if(n===Nn)return s.UNSIGNED_BYTE;if(n===uo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Sc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ec)return s.BYTE;if(n===bc)return s.SHORT;if(n===Bs)return s.UNSIGNED_SHORT;if(n===ho)return s.INT;if(n===ti)return s.UNSIGNED_INT;if(n===Yn)return s.FLOAT;if(n===hi)return s.HALF_FLOAT;if(n===wc)return s.ALPHA;if(n===Rc)return s.RGB;if(n===Zn)return s.RGBA;if(n===ri)return s.DEPTH_COMPONENT;if(n===Zi)return s.DEPTH_STENCIL;if(n===po)return s.RED;if(n===mo)return s.RED_INTEGER;if(n===$i)return s.RG;if(n===go)return s.RG_INTEGER;if(n===xo)return s.RGBA_INTEGER;if(n===Lr||n===Dr||n===Ur||n===Nr)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===yo||n===vo||n===Mo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===bo||n===So||n===To||n===wo||n===Fr||n===Ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===bo)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===To)return r.COMPRESSED_R11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fr)return r.COMPRESSED_RG11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ao||n===Co||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===No||n===Fo||n===Bo||n===Ho||n===Oo||n===ko||n===zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ho)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Vo||n===Wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xo||n===qo||n===Br||n===Yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yx=`
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

}`,$c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new vr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:_x,fragmentShader:yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new U(new se(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jc=class extends ai{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",p=new $c,m={},b=e.getContextAttributes(),R=null,M=null,S=[],E=[],C=new Lt,_=null,T=new sn;T.viewport=new Oe;let D=new sn;D.viewport=new Oe;let I=[T,D],N=new ro,Z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ft=S[at];return ft===void 0&&(ft=new Ds,S[at]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(at){let ft=S[at];return ft===void 0&&(ft=new Ds,S[at]=ft),ft.getGripSpace()},this.getHand=function(at){let ft=S[at];return ft===void 0&&(ft=new Ds,S[at]=ft),ft.getHandSpace()};function V(at){let ft=E.indexOf(at.inputSource);if(ft===-1)return;let ut=S[ft];ut!==void 0&&(ut.update(at.inputSource,at.frame,c||a),ut.dispatchEvent({type:at.type,data:at.inputSource}))}function j(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",J);for(let at=0;at<S.length;at++){let ft=E[at];ft!==null&&(E[at]=null,S[at].disconnect(ft))}Z=null,Q=null,p.reset();for(let at in m)delete m[at];t.setRenderTarget(R),f=null,d=null,u=null,i=null,M=null,ye.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){o=at,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(at){c=at},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(at){if(i=at,i!==null){if(R=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",j),i.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Yt=null,Jt=null;b.depth&&(Jt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=b.stencil?Zi:ri,Yt=b.stencil?Hs:ti);let Wt={colorFormat:e.RGBA8,depthFormat:Jt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Wt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Qe(d.textureWidth,d.textureHeight,{format:Zn,type:Nn,depthTexture:new Ri(d.textureWidth,d.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ut={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ut),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Qe(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(at){for(let ft=0;ft<at.removed.length;ft++){let ut=at.removed[ft],Yt=E.indexOf(ut);Yt>=0&&(E[Yt]=null,S[Yt].disconnect(ut))}for(let ft=0;ft<at.added.length;ft++){let ut=at.added[ft],Yt=E.indexOf(ut);if(Yt===-1){for(let Wt=0;Wt<S.length;Wt++)if(Wt>=E.length){E.push(ut),Yt=Wt;break}else if(E[Wt]===null){E[Wt]=ut,Yt=Wt;break}if(Yt===-1)break}let Jt=S[Yt];Jt&&Jt.connect(ut)}}let ot=new A,dt=new A;function Tt(at,ft,ut){ot.setFromMatrixPosition(ft.matrixWorld),dt.setFromMatrixPosition(ut.matrixWorld);let Yt=ot.distanceTo(dt),Jt=ft.projectionMatrix.elements,Wt=ut.projectionMatrix.elements,De=Jt[14]/(Jt[10]-1),oe=Jt[14]/(Jt[10]+1),ie=(Jt[9]+1)/Jt[5],ve=(Jt[9]-1)/Jt[5],me=(Jt[8]-1)/Jt[0],Re=(Wt[8]+1)/Wt[0],Ye=De*me,Je=De*Re,Ke=Yt/(-me+Re),He=Ke*-me;if(ft.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(He),at.translateZ(Ke),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Jt[10]===-1)at.projectionMatrix.copy(ft.projectionMatrix),at.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let Ge=De+Ke,H=oe+Ke,mn=Ye-He,Me=Je+(Yt-He),w=ie*oe/H*Ge,x=ve*oe/H*Ge;at.projectionMatrix.makePerspective(mn,Me,w,x,Ge,H),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function At(at,ft){ft===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ft.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(i===null)return;let ft=at.near,ut=at.far;p.texture!==null&&(p.depthNear>0&&(ft=p.depthNear),p.depthFar>0&&(ut=p.depthFar)),N.near=D.near=T.near=ft,N.far=D.far=T.far=ut,(Z!==N.near||Q!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),Z=N.near,Q=N.far),N.layers.mask=at.layers.mask|6,T.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;let Yt=at.parent,Jt=N.cameras;At(N,Yt);for(let Wt=0;Wt<Jt.length;Wt++)At(Jt[Wt],Yt);Jt.length===2?Tt(N,T,D):N.projectionMatrix.copy(T.projectionMatrix),Nt(at,N,Yt)};function Nt(at,ft,ut){ut===null?at.matrix.copy(ft.matrixWorld):(at.matrix.copy(ut.matrixWorld),at.matrix.invert(),at.matrix.multiply(ft.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ft.projectionMatrix),at.projectionMatrixInverse.copy(ft.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=os*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(at){l=at,d!==null&&(d.fixedFoveation=at),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=at)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(at){return m[at]};let _e=null;function Be(at,ft){if(h=ft.getViewerPose(c||a),g=ft,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Yt=!1;ut.length!==N.cameras.length&&(N.cameras.length=0,Yt=!0);for(let oe=0;oe<ut.length;oe++){let ie=ut[oe],ve=null;if(f!==null)ve=f.getViewport(ie);else{let Re=u.getViewSubImage(d,ie);ve=Re.viewport,oe===0&&(t.setRenderTargetTextures(M,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(M))}let me=I[oe];me===void 0&&(me=new sn,me.layers.enable(oe),me.viewport=new Oe,I[oe]=me),me.matrix.fromArray(ie.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(ie.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ve.x,ve.y,ve.width,ve.height),oe===0&&(N.matrix.copy(me.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Yt===!0&&N.cameras.push(me)}let Jt=i.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let oe=u.getDepthInformation(ut[0]);oe&&oe.isValid&&oe.texture&&p.init(oe,i.renderState)}if(Jt&&Jt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let oe=0;oe<ut.length;oe++){let ie=ut[oe].camera;if(ie){let ve=m[ie];ve||(ve=new vr,m[ie]=ve);let me=u.getCameraImage(ie);ve.sourceTexture=me}}}}for(let ut=0;ut<S.length;ut++){let Yt=E[ut],Jt=S[ut];Yt!==null&&Jt!==void 0&&Jt.update(Yt,ft,c||a)}_e&&_e(at,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),g=null}let ye=new Zu;ye.setAnimationLoop(Be),this.setAnimationLoop=function(at){_e=at},this.dispose=function(){}}},vx=new Ce,td=new Qt;td.set(-1,0,0,0,1,0,0,0,1);function Mx(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Lc(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,R,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,R):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=t.get(m),R=b.envMap,M=b.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(vx.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(td),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=R*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ex(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let E=S.program;n.uniformBlockBinding(M,E)}function c(M,S){let E=i[M.id];E===void 0&&(p(M),E=h(M),i[M.id]=E,M.addEventListener("dispose",b));let C=S.program;n.updateUBOMapping(M,C);let _=t.render.frame;r[M.id]!==_&&(d(M),r[M.id]=_)}function h(M){let S=u();M.__bindingPointIndex=S;let E=s.createBuffer(),C=M.__size,_=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,E),E}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let S=i[M.id],E=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,T=E.length;_<T;_++){let D=E[_];if(Array.isArray(D))for(let I=0,N=D.length;I<N;I++)f(D[I],_,I,C);else f(D,_,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,S,E,C){if(y(M,S,E,C)===!0){let _=M.__offset,T=M.value;if(Array.isArray(T)){let D=0;for(let I=0;I<T.length;I++){let N=T[I],Z=m(N);g(N,M.__data,D),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,M.__data)}}function g(M,S,E){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,E)}function y(M,S,E,C){let _=M.value,T=S+"_"+E;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{let D=C[T];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(D.equals(_)===!1)return D.copy(_),!0}}return!1}function p(M){let S=M.uniforms,E=0,C=16;for(let T=0,D=S.length;T<D;T++){let I=Array.isArray(S[T])?S[T]:[S[T]];for(let N=0,Z=I.length;N<Z;N++){let Q=I[N],V=Array.isArray(Q.value)?Q.value:[Q.value];for(let j=0,J=V.length;j<J;j++){let ot=V[j],dt=m(ot),Tt=E%C,At=Tt%dt.boundary,Nt=Tt+At;E+=At,Nt!==0&&C-Nt<dt.storage&&(E+=C-Nt),Q.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=E,E+=dt.storage}}}let _=E%C;return _>0&&(E+=C-_),M.__size=E,M.__cache={},this}function m(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",M),S}function b(M){let S=M.target;S.removeEventListener("dispose",b);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function R(){for(let M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:R}}var bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function Sx(){return ui===null&&(ui=new gr(bx,16,16,$i,hi),ui.name="DFG_LUT",ui.minFilter=We,ui.magFilter=We,ui.wrapS=Xn,ui.wrapT=Xn,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var tl=class{constructor(t={}){let{canvas:e=yu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Nn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,p=new Set([xo,go,mo]),m=new Set([Nn,ti,Bs,Hs,uo,fo]),b=new Uint32Array(4),R=new Int32Array(4),M=new A,S=null,E=null,C=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,I=!1,N=null,Z=null,Q=null,V=null;this._outputColorSpace=an;let j=0,J=0,ot=null,dt=-1,Tt=null,At=new Oe,Nt=new Oe,_e=null,Be=new Vt(0),ye=0,at=e.width,ft=e.height,ut=1,Yt=null,Jt=null,Wt=new Oe(0,0,at,ft),De=new Oe(0,0,at,ft),oe=!1,ie=new Us,ve=!1,me=!1,Re=new Ce,Ye=new A,Je=new Oe,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function Ge(){return ot===null?ut:1}let H=n;function mn(v,k){return e.getContext(v,k)}try{let v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Ue,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",Gn,!1),H===null){let k="webgl2";if(H=mn(k,v),H===null)throw mn(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw $t("WebGLRenderer: "+v.message),v}let Me,w,x,z,Y,tt,pt,gt,nt,rt,yt,Bt,bt,vt,Gt,qt,jt,F,xt,it,Mt,wt,lt;function Ht(){Me=new Im(H),Me.init(),Mt=new xx(H,Me),w=new bm(H,Me,t,Mt),x=new mx(H,Me),w.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),Z=H.createFramebuffer(),Q=H.createFramebuffer(),V=H.createFramebuffer(),z=new Um(H),Y=new ex,tt=new gx(H,Me,x,Y,w,Mt,z),pt=new Pm(D),gt=new Hf(H),wt=new Mm(H,gt),nt=new Lm(H,gt,z,wt),rt=new Fm(H,nt,gt,wt,z),F=new Nm(H,w,tt),Gt=new Sm(Y),yt=new tx(D,pt,Me,w,wt,Gt),Bt=new Mx(D,Y),bt=new ix,vt=new cx(Me),jt=new vm(D,pt,x,rt,g,l),qt=new px(D,rt,w),lt=new Ex(H,z,w,x),xt=new Em(H,Me,z),it=new Dm(H,Me,z),z.programs=yt.programs,D.capabilities=w,D.extensions=Me,D.properties=Y,D.renderLists=bt,D.shadowMap=qt,D.state=x,D.info=z}Ht(),y!==Nn&&(T=new Hm(y,e.width,e.height,o,i,r));let Pt=new Jc(D,H);this.xr=Pt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let v=Me.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Me.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(v){v!==void 0&&(ut=v,this.setSize(at,ft,!1))},this.getSize=function(v){return v.set(at,ft)},this.setSize=function(v,k,$=!0){if(Pt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}at=v,ft=k,e.width=Math.floor(v*ut),e.height=Math.floor(k*ut),$===!0&&(e.style.width=v+"px",e.style.height=k+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,v,k)},this.getDrawingBufferSize=function(v){return v.set(at*ut,ft*ut).floor()},this.setDrawingBufferSize=function(v,k,$){at=v,ft=k,ut=$,e.width=Math.floor(v*$),e.height=Math.floor(k*$),this.setViewport(0,0,v,k)},this.setEffects=function(v){if(y===Nn){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let k=0;k<v.length;k++)if(v[k].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(At)},this.getViewport=function(v){return v.copy(Wt)},this.setViewport=function(v,k,$,W){v.isVector4?Wt.set(v.x,v.y,v.z,v.w):Wt.set(v,k,$,W),x.viewport(At.copy(Wt).multiplyScalar(ut).round())},this.getScissor=function(v){return v.copy(De)},this.setScissor=function(v,k,$,W){v.isVector4?De.set(v.x,v.y,v.z,v.w):De.set(v,k,$,W),x.scissor(Nt.copy(De).multiplyScalar(ut).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(v){x.setScissorTest(oe=v)},this.setOpaqueSort=function(v){Yt=v},this.setTransparentSort=function(v){Jt=v},this.getClearColor=function(v){return v.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(v=!0,k=!0,$=!0){let W=0;if(v){let X=!1;if(ot!==null){let _t=ot.texture.format;X=p.has(_t)}if(X){let _t=ot.texture.type,Ct=m.has(_t),St=jt.getClearColor(),Ut=jt.getClearAlpha(),Ot=St.r,Zt=St.g,te=St.b;Ct?(b[0]=Ot,b[1]=Zt,b[2]=te,b[3]=Ut,H.clearBufferuiv(H.COLOR,0,b)):(R[0]=Ot,R[1]=Zt,R[2]=te,R[3]=Ut,H.clearBufferiv(H.COLOR,0,R))}else W|=H.COLOR_BUFFER_BIT}k&&(W|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),jt.dispose(),bt.dispose(),vt.dispose(),Y.dispose(),pt.dispose(),rt.dispose(),wt.dispose(),lt.dispose(),yt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Wr),Pt.removeEventListener("sessionend",Qi),Dn.stop()};function Ue(v){v.preventDefault(),Cc("WebGLRenderer: Context Lost."),I=!0}function Ae(){Cc("WebGLRenderer: Context Restored."),I=!1;let v=z.autoReset,k=qt.enabled,$=qt.autoUpdate,W=qt.needsUpdate,X=qt.type;Ht(),z.autoReset=v,qt.enabled=k,qt.autoUpdate=$,qt.needsUpdate=W,qt.type=X}function Gn(v){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Vn(v){let k=v.target;k.removeEventListener("dispose",Vn),Sl(k)}function Sl(v){fh(v),Y.remove(v)}function fh(v){let k=Y.get(v).programs;k!==void 0&&(k.forEach(function($){yt.releaseProgram($)}),v.isShaderMaterial&&yt.releaseShaderCache(v))}this.renderBufferDirect=function(v,k,$,W,X,_t){k===null&&(k=Ke);let Ct=X.isMesh&&X.matrixWorld.determinantAffine()<0,St=wl(v,k,$,W,X);x.setMaterial(W,Ct);let Ut=$.index,Ot=1;if(W.wireframe===!0){if(Ut=nt.getWireframeAttribute($),Ut===void 0)return;Ot=2}let Zt=$.drawRange,te=$.attributes.position,kt=Zt.start*Ot,fe=(Zt.start+Zt.count)*Ot;_t!==null&&(kt=Math.max(kt,_t.start*Ot),fe=Math.min(fe,(_t.start+_t.count)*Ot)),Ut!==null?(kt=Math.max(kt,0),fe=Math.min(fe,Ut.count)):te!=null&&(kt=Math.max(kt,0),fe=Math.min(fe,te.count));let Ve=fe-kt;if(Ve<0||Ve===1/0)return;wt.setup(X,W,St,$,Ut);let Ie,Te=xt;if(Ut!==null&&(Ie=gt.get(Ut),Te=it,Te.setIndex(Ie)),X.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*Ge()),Te.setMode(H.LINES)):Te.setMode(H.TRIANGLES);else if(X.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),x.setLineWidth(Ne*Ge()),X.isLineSegments?Te.setMode(H.LINES):X.isLineLoop?Te.setMode(H.LINE_LOOP):Te.setMode(H.LINE_STRIP)}else X.isPoints?Te.setMode(H.POINTS):X.isSprite&&Te.setMode(H.TRIANGLES);if(X.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))Te.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ne=X._multiDrawStarts,It=X._multiDrawCounts,wn=X._multiDrawCount,ue=Ut?gt.get(Ut).bytesPerElement:1,Un=Y.get(W).currentProgram.getUniforms();for(let Fn=0;Fn<wn;Fn++)Un.setValue(H,"_gl_DrawID",Fn),Te.render(Ne[Fn]/ue,It[Fn])}else if(X.isInstancedMesh)Te.renderInstances(kt,Ve,X.count);else if($.isInstancedBufferGeometry){let Ne=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,It=Math.min($.instanceCount,Ne);Te.renderInstances(kt,Ve,It)}else Te.render(kt,Ve)};function Vr(v,k,$){v.transparent===!0&&v.side===we&&v.forceSinglePass===!1?(v.side=_n,v.needsUpdate=!0,Ii(v,k,$),v.side=Ei,v.needsUpdate=!0,Ii(v,k,$),v.side=we):Ii(v,k,$)}this.compile=function(v,k,$=null){$===null&&($=v),E=vt.get($),E.init(k),_.push(E),$.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),v!==$&&v.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights();let W=new Set;return v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let _t=X.material;if(_t)if(Array.isArray(_t))for(let Ct=0;Ct<_t.length;Ct++){let St=_t[Ct];Vr(St,$,X),W.add(St)}else Vr(_t,$,X),W.add(_t)}),E=_.pop(),W},this.compileAsync=function(v,k,$=null){let W=this.compile(v,k,$);return new Promise(X=>{function _t(){if(W.forEach(function(Ct){Y.get(Ct).currentProgram.isReady()&&W.delete(Ct)}),W.size===0){X(v);return}setTimeout(_t,10)}Me.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let qs=null;function ps(v){qs&&qs(v)}function Wr(){Dn.stop()}function Qi(){Dn.start()}let Dn=new Zu;Dn.setAnimationLoop(ps),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(v){qs=v,Pt.setAnimationLoop(v),v===null?Dn.stop():Dn.start()},Pt.addEventListener("sessionstart",Wr),Pt.addEventListener("sessionend",Qi),this.render=function(v,k){if(k!==void 0&&k.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(v,k);let $=Pt.enabled===!0&&Pt.isPresenting===!0,W=T!==null&&(ot===null||$)&&T.begin(D,ot);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(k),k=Pt.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,k,ot),E=vt.get(v,_.length),E.init(k),E.state.textureUnits=tt.getTextureUnits(),_.push(E),Re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ie.setFromProjectionMatrix(Re,jn,k.reversedDepth),me=this.localClippingEnabled,ve=Gt.init(this.clippingPlanes,me),S=bt.get(v,C.length),S.init(),C.push(S),Pt.enabled===!0&&Pt.isPresenting===!0){let Ct=D.xr.getDepthSensingMesh();Ct!==null&&Ys(Ct,k,-1/0,D.sortObjects)}Ys(v,k,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Yt,Jt,k.reversedDepth),He=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,He&&jt.addToRenderList(S,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&Gt.beginShadows();let X=E.state.shadowsArray;if(qt.render(X,v,k),ve===!0&&Gt.endShadows(),(W&&T.hasRenderPass())===!1){let Ct=S.opaque,St=S.transmissive;if(E.setupLights(),k.isArrayCamera){let Ut=k.cameras;if(St.length>0)for(let Ot=0,Zt=Ut.length;Ot<Zt;Ot++){let te=Ut[Ot];qr(Ct,St,v,te)}He&&jt.render(v);for(let Ot=0,Zt=Ut.length;Ot<Zt;Ot++){let te=Ut[Ot];Xr(S,v,te,te.viewport)}}else St.length>0&&qr(Ct,St,v,k),He&&jt.render(v),Xr(S,v,k)}ot!==null&&J===0&&(tt.updateMultisampleRenderTarget(ot),tt.updateRenderTargetMipmap(ot)),W&&T.end(D),v.isScene===!0&&v.onAfterRender(D,v,k),wt.resetDefaultState(),dt=-1,Tt=null,_.pop(),_.length>0?(E=_[_.length-1],tt.setTextureUnits(E.state.textureUnits),ve===!0&&Gt.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,N!==null&&N.renderEnd()};function Ys(v,k,$,W){if(v.visible===!1)return;if(v.layers.test(k.layers)){if(v.isGroup)$=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(k);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ie.intersectsSprite(v)){W&&Je.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Re);let Ct=rt.update(v),St=v.material;St.visible&&S.push(v,Ct,St,$,Je.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ie.intersectsObject(v))){let Ct=rt.update(v),St=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Je.copy(v.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Je.copy(Ct.boundingSphere.center)),Je.applyMatrix4(v.matrixWorld).applyMatrix4(Re)),Array.isArray(St)){let Ut=Ct.groups;for(let Ot=0,Zt=Ut.length;Ot<Zt;Ot++){let te=Ut[Ot],kt=St[te.materialIndex];kt&&kt.visible&&S.push(v,Ct,kt,$,Je.z,te)}}else St.visible&&S.push(v,Ct,St,$,Je.z,null)}}let _t=v.children;for(let Ct=0,St=_t.length;Ct<St;Ct++)Ys(_t[Ct],k,$,W)}function Xr(v,k,$,W){let{opaque:X,transmissive:_t,transparent:Ct}=v;E.setupLightsView($),ve===!0&&Gt.setGlobalState(D.clippingPlanes,$),W&&x.viewport(At.copy(W)),X.length>0&&$n(X,k,$),_t.length>0&&$n(_t,k,$),Ct.length>0&&$n(Ct,k,$),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function qr(v,k,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let kt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Qe(1,1,{generateMipmaps:!0,type:kt?hi:Nn,minFilter:Yi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let _t=E.state.transmissionRenderTarget[W.id],Ct=W.viewport||At;_t.setSize(Ct.z*D.transmissionResolutionScale,Ct.w*D.transmissionResolutionScale);let St=D.getRenderTarget(),Ut=D.getActiveCubeFace(),Ot=D.getActiveMipmapLevel();D.setRenderTarget(_t),D.getClearColor(Be),ye=D.getClearAlpha(),ye<1&&D.setClearColor(16777215,.5),D.clear(),He&&jt.render($);let Zt=D.toneMapping;D.toneMapping=kn;let te=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),ve===!0&&Gt.setGlobalState(D.clippingPlanes,W),$n(v,$,W),tt.updateMultisampleRenderTarget(_t),tt.updateRenderTargetMipmap(_t),Me.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let fe=0,Ve=k.length;fe<Ve;fe++){let Ie=k[fe],{object:Te,geometry:Ne,material:It,group:wn}=Ie;if(It.side===we&&Te.layers.test(W.layers)){let ue=It.side;It.side=_n,It.needsUpdate=!0,Yr(Te,$,W,Ne,It,wn),It.side=ue,It.needsUpdate=!0,kt=!0}}kt===!0&&(tt.updateMultisampleRenderTarget(_t),tt.updateRenderTargetMipmap(_t))}D.setRenderTarget(St,Ut,Ot),D.setClearColor(Be,ye),te!==void 0&&(W.viewport=te),D.toneMapping=Zt}function $n(v,k,$){let W=k.isScene===!0?k.overrideMaterial:null;for(let X=0,_t=v.length;X<_t;X++){let Ct=v[X],{object:St,geometry:Ut,group:Ot}=Ct,Zt=Ct.material;Zt.allowOverride===!0&&W!==null&&(Zt=W),St.layers.test($.layers)&&Yr(St,k,$,Ut,Zt,Ot)}}function Yr(v,k,$,W,X,_t){v.onBeforeRender(D,k,$,W,X,_t),v.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(D,k,$,W,v,_t),X.transparent===!0&&X.side===we&&X.forceSinglePass===!1?(X.side=_n,X.needsUpdate=!0,D.renderBufferDirect($,k,W,X,v,_t),X.side=Ei,X.needsUpdate=!0,D.renderBufferDirect($,k,W,X,v,_t),X.side=we):D.renderBufferDirect($,k,W,X,v,_t),v.onAfterRender(D,k,$,W,X,_t)}function Ii(v,k,$){k.isScene!==!0&&(k=Ke);let W=Y.get(v),X=E.state.lights,_t=E.state.shadowsArray,Ct=X.state.version,St=yt.getParameters(v,X.state,_t,k,$,E.state.lightProbeGridArray),Ut=yt.getProgramCacheKey(St),Ot=W.programs;W.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;let Zt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;W.envMap=pt.get(v.envMap||W.environment,Zt),W.envMapRotation=W.environment!==null&&v.envMap===null?k.environmentRotation:v.envMapRotation,Ot===void 0&&(v.addEventListener("dispose",Vn),Ot=new Map,W.programs=Ot);let te=Ot.get(Ut);if(te!==void 0){if(W.currentProgram===te&&W.lightsStateVersion===Ct)return $r(v,St),te}else St.uniforms=yt.getUniforms(v),N!==null&&v.isNodeMaterial&&N.build(v,$,St),v.onBeforeCompile(St,D),te=yt.acquireProgram(St,Ut),Ot.set(Ut,te),W.uniforms=St.uniforms;let kt=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(kt.clippingPlanes=Gt.uniform),$r(v,St),W.needsLights=Rl(v),W.lightsStateVersion=Ct,W.needsLights&&(kt.ambientLightColor.value=X.state.ambient,kt.lightProbe.value=X.state.probe,kt.directionalLights.value=X.state.directional,kt.directionalLightShadows.value=X.state.directionalShadow,kt.spotLights.value=X.state.spot,kt.spotLightShadows.value=X.state.spotShadow,kt.rectAreaLights.value=X.state.rectArea,kt.ltc_1.value=X.state.rectAreaLTC1,kt.ltc_2.value=X.state.rectAreaLTC2,kt.pointLights.value=X.state.point,kt.pointLightShadows.value=X.state.pointShadow,kt.hemisphereLights.value=X.state.hemi,kt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,kt.spotLightMatrix.value=X.state.spotLightMatrix,kt.spotLightMap.value=X.state.spotLightMap,kt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=te,W.uniformsList=null,te}function Zr(v){if(v.uniformsList===null){let k=v.currentProgram.getUniforms();v.uniformsList=zs.seqWithValue(k.seq,v.uniforms)}return v.uniformsList}function $r(v,k){let $=Y.get(v);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Tl(v,k){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(k.matrixWorld);for(let $=0,W=v.length;$<W;$++){let X=v[$];if(X.texture!==null&&X.boundingBox.containsPoint(M))return X}return null}function wl(v,k,$,W,X){k.isScene!==!0&&(k=Ke),tt.resetTextureUnits();let _t=k.fog,Ct=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,St=ot===null?D.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:pe.workingColorSpace,Ut=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ot=pt.get(W.envMap||Ct,Ut),Zt=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,te=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),kt=!!$.morphAttributes.position,fe=!!$.morphAttributes.normal,Ve=!!$.morphAttributes.color,Ie=kn;W.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ie=D.toneMapping);let Te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ne=Te!==void 0?Te.length:0,It=Y.get(W),wn=E.state.lights;if(ve===!0&&(me===!0||v!==Tt)){let q=v===Tt&&W.id===dt;Gt.setState(W,v,q)}let ue=!1;W.version===It.__version?(It.needsLights&&It.lightsStateVersion!==wn.state.version||It.outputColorSpace!==St||X.isBatchedMesh&&It.batching===!1||!X.isBatchedMesh&&It.batching===!0||X.isBatchedMesh&&It.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&It.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&It.instancing===!1||!X.isInstancedMesh&&It.instancing===!0||X.isSkinnedMesh&&It.skinning===!1||!X.isSkinnedMesh&&It.skinning===!0||X.isInstancedMesh&&It.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&It.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&It.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&It.instancingMorph===!1&&X.morphTexture!==null||It.envMap!==Ot||W.fog===!0&&It.fog!==_t||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Gt.numPlanes||It.numIntersection!==Gt.numIntersection)||It.vertexAlphas!==Zt||It.vertexTangents!==te||It.morphTargets!==kt||It.morphNormals!==fe||It.morphColors!==Ve||It.toneMapping!==Ie||It.morphTargetsCount!==Ne||!!It.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,It.__version=W.version);let Un=It.currentProgram;ue===!0&&(Un=Ii(W,k,X),N&&W.isNodeMaterial&&N.onUpdateProgram(W,Un,It));let Fn=!1,ei=!1,P=!1,L=Un.getUniforms(),B=It.uniforms;if(x.useProgram(Un.program)&&(Fn=!0,ei=!0,P=!0),W.id!==dt&&(dt=W.id,ei=!0),It.needsLights){let q=Tl(E.state.lightProbeGridArray,X);It.lightProbeGrid!==q&&(It.lightProbeGrid=q,ei=!0)}if(Fn||Tt!==v){x.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),L.setValue(H,"projectionMatrix",v.projectionMatrix),L.setValue(H,"viewMatrix",v.matrixWorldInverse);let K=L.map.cameraPosition;K!==void 0&&K.setValue(H,Ye.setFromMatrixPosition(v.matrixWorld)),w.logarithmicDepthBuffer&&L.setValue(H,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&L.setValue(H,"isOrthographic",v.isOrthographicCamera===!0),Tt!==v&&(Tt=v,ei=!0,P=!0)}if(It.needsLights&&(wn.state.directionalShadowMap.length>0&&L.setValue(H,"directionalShadowMap",wn.state.directionalShadowMap,tt),wn.state.spotShadowMap.length>0&&L.setValue(H,"spotShadowMap",wn.state.spotShadowMap,tt),wn.state.pointShadowMap.length>0&&L.setValue(H,"pointShadowMap",wn.state.pointShadowMap,tt)),X.isSkinnedMesh){L.setOptional(H,X,"bindMatrix"),L.setOptional(H,X,"bindMatrixInverse");let q=X.skeleton;q&&(q.boneTexture===null&&q.computeBoneTexture(),L.setValue(H,"boneTexture",q.boneTexture,tt))}X.isBatchedMesh&&(L.setOptional(H,X,"batchingTexture"),L.setValue(H,"batchingTexture",X._matricesTexture,tt),L.setOptional(H,X,"batchingIdTexture"),L.setValue(H,"batchingIdTexture",X._indirectTexture,tt),L.setOptional(H,X,"batchingColorTexture"),X._colorsTexture!==null&&L.setValue(H,"batchingColorTexture",X._colorsTexture,tt));let O=$.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&F.update(X,$,Un),(ei||It.receiveShadow!==X.receiveShadow)&&(It.receiveShadow=X.receiveShadow,L.setValue(H,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(B.envMapIntensity.value=k.environmentIntensity),B.dfgLUT!==void 0&&(B.dfgLUT.value=Sx()),ei){if(L.setValue(H,"toneMappingExposure",D.toneMappingExposure),It.needsLights&&Jr(B,P),_t&&W.fog===!0&&Bt.refreshFogUniforms(B,_t),Bt.refreshMaterialUniforms(B,W,ut,ft,E.state.transmissionRenderTarget[v.id]),It.needsLights&&It.lightProbeGrid){let q=It.lightProbeGrid;B.probesSH.value=q.texture,B.probesMin.value.copy(q.boundingBox.min),B.probesMax.value.copy(q.boundingBox.max),B.probesResolution.value.copy(q.resolution)}zs.upload(H,Zr(It),B,tt)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(zs.upload(H,Zr(It),B,tt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&L.setValue(H,"center",X.center),L.setValue(H,"modelViewMatrix",X.modelViewMatrix),L.setValue(H,"normalMatrix",X.normalMatrix),L.setValue(H,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let q=W.uniformsGroups;for(let K=0,ht=q.length;K<ht;K++){let st=q[K];lt.update(st,Un),lt.bind(st,Un)}}return Un}function Jr(v,k){v.ambientLightColor.needsUpdate=k,v.lightProbe.needsUpdate=k,v.directionalLights.needsUpdate=k,v.directionalLightShadows.needsUpdate=k,v.pointLights.needsUpdate=k,v.pointLightShadows.needsUpdate=k,v.spotLights.needsUpdate=k,v.spotLightShadows.needsUpdate=k,v.rectAreaLights.needsUpdate=k,v.hemisphereLights.needsUpdate=k}function Rl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(v,k,$){let W=Y.get(v);W.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(v.texture).__webglTexture=k,Y.get(v.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,k){let $=Y.get(v);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(v,k=0,$=0){ot=v,j=k,J=$;let W=null,X=!1,_t=!1;if(v){let St=Y.get(v);if(St.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(H.FRAMEBUFFER,St.__webglFramebuffer),At.copy(v.viewport),Nt.copy(v.scissor),_e=v.scissorTest,x.viewport(At),x.scissor(Nt),x.setScissorTest(_e),dt=-1;return}else if(St.__webglFramebuffer===void 0)tt.setupRenderTarget(v);else if(St.__hasExternalTextures)tt.rebindTextures(v,Y.get(v.texture).__webglTexture,Y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Zt=v.depthTexture;if(St.__boundDepthTexture!==Zt){if(Zt!==null&&Y.has(Zt)&&(v.width!==Zt.image.width||v.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(v)}}let Ut=v.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(_t=!0);let Ot=Y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ot[k])?W=Ot[k][$]:W=Ot[k],X=!0):v.samples>0&&tt.useMultisampledRTT(v)===!1?W=Y.get(v).__webglMultisampledFramebuffer:Array.isArray(Ot)?W=Ot[$]:W=Ot,At.copy(v.viewport),Nt.copy(v.scissor),_e=v.scissorTest}else At.copy(Wt).multiplyScalar(ut).floor(),Nt.copy(De).multiplyScalar(ut).floor(),_e=oe;if($!==0&&(W=Z),x.bindFramebuffer(H.FRAMEBUFFER,W)&&x.drawBuffers(v,W),x.viewport(At),x.scissor(Nt),x.setScissorTest(_e),X){let St=Y.get(v.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,St.__webglTexture,$)}else if(_t){let St=k;for(let Ut=0;Ut<v.textures.length;Ut++){let Ot=Y.get(v.textures[Ut]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ut,Ot.__webglTexture,$,St)}}else if(v!==null&&$!==0){let St=Y.get(v.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,St.__webglTexture,$)}dt=-1},this.readRenderTargetPixels=function(v,k,$,W,X,_t,Ct,St=0){if(!(v&&v.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){x.bindFramebuffer(H.FRAMEBUFFER,Ut);try{let Ot=v.textures[St],Zt=Ot.format,te=Ot.type;if(v.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+St),!w.textureFormatReadable(Zt)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(te)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=v.width-W&&$>=0&&$<=v.height-X&&H.readPixels(k,$,W,X,Mt.convert(Zt),Mt.convert(te),_t)}finally{let Ot=ot!==null?Y.get(ot).__webglFramebuffer:null;x.bindFramebuffer(H.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(v,k,$,W,X,_t,Ct,St=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut)if(k>=0&&k<=v.width-W&&$>=0&&$<=v.height-X){x.bindFramebuffer(H.FRAMEBUFFER,Ut);let Ot=v.textures[St],Zt=Ot.format,te=Ot.type;if(v.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+St),!w.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let kt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,kt),H.bufferData(H.PIXEL_PACK_BUFFER,_t.byteLength,H.STREAM_READ),H.readPixels(k,$,W,X,Mt.convert(Zt),Mt.convert(te),0);let fe=ot!==null?Y.get(ot).__webglFramebuffer:null;x.bindFramebuffer(H.FRAMEBUFFER,fe);let Ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Mu(H,Ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,kt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,_t),H.deleteBuffer(kt),H.deleteSync(Ve),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,k=null,$=0){let W=Math.pow(2,-$),X=Math.floor(v.image.width*W),_t=Math.floor(v.image.height*W),Ct=k!==null?k.x:0,St=k!==null?k.y:0;tt.setTexture2D(v,0),H.copyTexSubImage2D(H.TEXTURE_2D,$,0,0,Ct,St,X,_t),x.unbindTexture()},this.copyTextureToTexture=function(v,k,$=null,W=null,X=0,_t=0){let Ct,St,Ut,Ot,Zt,te,kt,fe,Ve,Ie=v.isCompressedTexture?v.mipmaps[_t]:v.image;if($!==null)Ct=$.max.x-$.min.x,St=$.max.y-$.min.y,Ut=$.isBox3?$.max.z-$.min.z:1,Ot=$.min.x,Zt=$.min.y,te=$.isBox3?$.min.z:0;else{let B=Math.pow(2,-X);Ct=Math.floor(Ie.width*B),St=Math.floor(Ie.height*B),v.isDataArrayTexture?Ut=Ie.depth:v.isData3DTexture?Ut=Math.floor(Ie.depth*B):Ut=1,Ot=0,Zt=0,te=0}W!==null?(kt=W.x,fe=W.y,Ve=W.z):(kt=0,fe=0,Ve=0);let Te=Mt.convert(k.format),Ne=Mt.convert(k.type),It;k.isData3DTexture?(tt.setTexture3D(k,0),It=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(tt.setTexture2DArray(k,0),It=H.TEXTURE_2D_ARRAY):(tt.setTexture2D(k,0),It=H.TEXTURE_2D),x.activeTexture(H.TEXTURE0),x.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),x.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),x.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let wn=x.getParameter(H.UNPACK_ROW_LENGTH),ue=x.getParameter(H.UNPACK_IMAGE_HEIGHT),Un=x.getParameter(H.UNPACK_SKIP_PIXELS),Fn=x.getParameter(H.UNPACK_SKIP_ROWS),ei=x.getParameter(H.UNPACK_SKIP_IMAGES);x.pixelStorei(H.UNPACK_ROW_LENGTH,Ie.width),x.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie.height),x.pixelStorei(H.UNPACK_SKIP_PIXELS,Ot),x.pixelStorei(H.UNPACK_SKIP_ROWS,Zt),x.pixelStorei(H.UNPACK_SKIP_IMAGES,te);let P=v.isDataArrayTexture||v.isData3DTexture,L=k.isDataArrayTexture||k.isData3DTexture;if(v.isDepthTexture){let B=Y.get(v),O=Y.get(k),q=Y.get(B.__renderTarget),K=Y.get(O.__renderTarget);x.bindFramebuffer(H.READ_FRAMEBUFFER,q.__webglFramebuffer),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let ht=0;ht<Ut;ht++)P&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Y.get(v).__webglTexture,X,te+ht),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Y.get(k).__webglTexture,_t,Ve+ht)),H.blitFramebuffer(Ot,Zt,Ct,St,kt,fe,Ct,St,H.DEPTH_BUFFER_BIT,H.NEAREST);x.bindFramebuffer(H.READ_FRAMEBUFFER,null),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||Y.has(v)){let B=Y.get(v),O=Y.get(k);x.bindFramebuffer(H.READ_FRAMEBUFFER,Q),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,V);for(let q=0;q<Ut;q++)P?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,B.__webglTexture,X,te+q):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,B.__webglTexture,X),L?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,O.__webglTexture,_t,Ve+q):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,O.__webglTexture,_t),X!==0?H.blitFramebuffer(Ot,Zt,Ct,St,kt,fe,Ct,St,H.COLOR_BUFFER_BIT,H.NEAREST):L?H.copyTexSubImage3D(It,_t,kt,fe,Ve+q,Ot,Zt,Ct,St):H.copyTexSubImage2D(It,_t,kt,fe,Ot,Zt,Ct,St);x.bindFramebuffer(H.READ_FRAMEBUFFER,null),x.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else L?v.isDataTexture||v.isData3DTexture?H.texSubImage3D(It,_t,kt,fe,Ve,Ct,St,Ut,Te,Ne,Ie.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(It,_t,kt,fe,Ve,Ct,St,Ut,Te,Ie.data):H.texSubImage3D(It,_t,kt,fe,Ve,Ct,St,Ut,Te,Ne,Ie):v.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,_t,kt,fe,Ct,St,Te,Ne,Ie.data):v.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,_t,kt,fe,Ie.width,Ie.height,Te,Ie.data):H.texSubImage2D(H.TEXTURE_2D,_t,kt,fe,Ct,St,Te,Ne,Ie);x.pixelStorei(H.UNPACK_ROW_LENGTH,wn),x.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ue),x.pixelStorei(H.UNPACK_SKIP_PIXELS,Un),x.pixelStorei(H.UNPACK_SKIP_ROWS,Fn),x.pixelStorei(H.UNPACK_SKIP_IMAGES,ei),_t===0&&k.generateMipmaps&&H.generateMipmap(It),x.unbindTexture()},this.initRenderTarget=function(v){Y.get(v).__webglFramebuffer===void 0&&tt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?tt.setTextureCube(v,0):v.isData3DTexture?tt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?tt.setTexture2DArray(v,0):tt.setTexture2D(v,0),x.unbindTexture()},this.resetState=function(){j=0,J=0,ot=null,x.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var il=20010923;function be(s){il=s}function et(){return il=il*1103515245+12345&2147483647,il/2147483647}function ge(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e.getContext("2d",{willReadFrequently:!0}),e}function hn(s,t=1,e=1,n=!0){let i=new En(s);return i.wrapS=i.wrapT=si,i.repeat.set(t,e),n&&(i.colorSpace=an),i.anisotropy=8,i}function sl(s,t=1,e=1){let n=new En(s);return n.wrapS=n.wrapT=si,n.repeat.set(t,e),n.anisotropy=4,n}function pi(s,t=1.5){let e=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,e,n).data,r=ge(e,n),a=r.getContext("2d"),o=a.createImageData(e,n),l=o.data,c=(u,d)=>(u=(u+e)%e,d=(d+n)%n,i[(d*e+u)*4]/255);for(let u=0;u<n;u++)for(let d=0;d<e;d++){let f=(c(d-1,u)-c(d+1,u))*t,g=(c(d,u-1)-c(d,u+1))*t,y=Math.sqrt(f*f+g*g+1),p=(u*e+d)*4;l[p]=(f/y*.5+.5)*255,l[p+1]=(g/y*.5+.5)*255,l[p+2]=(1/y*.5+.5)*255,l[p+3]=255}a.putImageData(o,0,0);let h=new En(r);return h.wrapS=h.wrapT=si,h.anisotropy=4,h}function Pi(s,t,e,n,i,r=1){for(let a=0;a<e;a+=2)for(let o=0;o<t;o+=2){let l=(et()-.5)*i;s.fillStyle=`rgba(${Math.max(0,Math.min(255,n[0]+l))|0},${Math.max(0,Math.min(255,n[1]+l))|0},${Math.max(0,Math.min(255,n[2]+l))|0},${r})`,s.fillRect(o,a,2,2)}}function Tn(s,t,e,n,i,r,a){for(let o=0;o<n;o++){let l=et()*t,c=et()*e,h=(.25+et()*.75)*r,u=s.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,`rgba(${i[0]},${i[1]},${i[2]},${a})`),u.addColorStop(1,`rgba(${i[0]},${i[1]},${i[2]},0)`),s.fillStyle=u,s.beginPath(),s.arc(l,c,h,0,Math.PI*2),s.fill()}}function ed(){be(11);let s=1024,t=1024,e=ge(s,t),n=e.getContext("2d");n.fillStyle="#b9ab92",n.fillRect(0,0,s,t),Pi(n,s,t,[185,171,146],18,.5);let i=["#d8cdb8","#9c8f78","#c4b49a","#7e7260","#e2d9c6","#8d6f5a","#5f584c"],r=[];for(let u=0;u<8200;u++){let d=et()*s,f=et()*t,g=1.5+et()*8,y=et()*i.length|0,p=[];for(let m=0;m<6;m++){let b=m/6*Math.PI*2;p.push([Math.cos(b)*g*(.6+et()*.6),Math.sin(b)*g*(.6+et()*.6)])}r.push({x:d,y:f,r:g,ci:y,verts:p,hi:et()})}let a=(u,d)=>{for(let f of r){u.fillStyle=d(f),u.beginPath(),u.moveTo(f.x+f.verts[0][0],f.y+f.verts[0][1]);for(let g=1;g<6;g++)u.lineTo(f.x+f.verts[g][0],f.y+f.verts[g][1]);u.closePath(),u.fill()}};a(n,u=>i[u.ci]);for(let u of r)u.hi<.6||(n.fillStyle="rgba(255,250,238,0.14)",n.beginPath(),n.arc(u.x-u.r*.25,u.y-u.r*.25,u.r*.32,0,Math.PI*2),n.fill());n.strokeStyle="rgba(112,88,46,0.9)",n.lineWidth=5,n.strokeRect(2,2,s-4,t-4),n.beginPath(),n.moveTo(s/2,0),n.lineTo(s/2,t),n.moveTo(0,t/2),n.lineTo(s,t/2),n.stroke(),n.strokeStyle="rgba(196,164,96,0.5)",n.lineWidth=1.5,n.strokeRect(4,4,s-8,t-8),Tn(n,s,t,14,[60,52,40],240,.1),Tn(n,s,t,8,[30,30,34],170,.08);let o=ge(s,t),l=o.getContext("2d");l.fillStyle="#808080",l.fillRect(0,0,s,t),a(l,u=>u.hi>.5?"#8a8a8a":"#757575"),l.fillStyle="#5a5a5a",l.fillRect(0,0,s,5),l.fillRect(0,0,5,t),l.fillRect(s/2-2,0,4,t),l.fillRect(0,t/2-2,s,4);let c=ge(s,t),h=c.getContext("2d");return h.fillStyle="#6a6a6a",h.fillRect(0,0,s,t),a(h,u=>u.hi>.5?"#4e4e4e":"#5e5e5e"),be(311),Tn(h,s,t,16,[188,188,188],220,.35),Tn(h,s,t,10,[40,40,40],150,.3),h.fillStyle="#b0b0b0",h.fillRect(0,0,s,5),h.fillRect(0,0,5,t),h.fillRect(s/2-2,0,4,t),h.fillRect(0,t/2-2,s,4),{map:hn(e,3,3),normalMap:pi(o,1.15),roughnessMap:sl(c,3,3),roughness:1,metalness:.04}}function nd(s=.6){be(23);let t=1024,e=1024,n=ge(t,e),i=n.getContext("2d"),r=ge(t,e),a=r.getContext("2d"),o=ge(t,e),l=o.getContext("2d");a.fillStyle="#909090",a.fillRect(0,0,t,e),l.fillStyle="#c8c8c8",l.fillRect(0,0,t,e);let c=256,h=256;for(let u=0;u<e;u+=h)for(let d=0;d<t;d+=c){let f=226+(et()-.5)*14;i.fillStyle=`rgb(${f|0},${f-4|0},${f-12|0})`,i.fillRect(d+6,u+6,c-12,h-12);let g=i.createLinearGradient(d,u,d+c,u+h);if(g.addColorStop(0,"rgba(255,255,255,0.14)"),g.addColorStop(.5,"rgba(255,255,255,0)"),g.addColorStop(1,"rgba(0,0,0,0.10)"),i.fillStyle=g,i.fillRect(d+6,u+6,c-12,h-12),et()>.55){i.strokeStyle="rgba(150,140,120,0.28)",i.lineWidth=1;let p=d+et()*c,m=u+et()*h;i.beginPath(),i.moveTo(p,m);for(let b=0;b<5;b++)p+=(et()-.5)*70,m+=(et()-.5)*70,i.lineTo(p,m);i.stroke()}let y=a.createRadialGradient(d+c/2,u+h/2,10,d+c/2,u+h/2,c*.7);y.addColorStop(0,"#b2b2b2"),y.addColorStop(1,"#9a9a9a"),a.fillStyle=y,a.fillRect(d+8,u+8,c-16,h-16),l.fillStyle=`rgb(${52+et()*26|0},${52+et()*26|0},${52+et()*26|0})`,l.fillRect(d+8,u+8,c-16,h-16)}i.strokeStyle="rgba(120,112,96,1)",i.lineWidth=9;for(let u=0;u<=e;u+=h)i.beginPath(),i.moveTo(0,u),i.lineTo(t,u),i.stroke();for(let u=0;u<=t;u+=c)i.beginPath(),i.moveTo(u,0),i.lineTo(u,e),i.stroke();i.strokeStyle=`rgba(78,66,46,${.5*s})`,i.lineWidth=3;for(let u=0;u<=e;u+=h)i.beginPath(),i.moveTo(0,u+4),i.lineTo(t,u+4),i.stroke();Tn(i,t,e,26*s,[92,74,50],160,.22*s),Tn(i,t,e,15*s,[40,44,38],110,.18*s);for(let u=0;u<7*s;u++){let d=et()*t,f=200+et()*500,g=10+et()*30,y=i.createLinearGradient(d,0,d,f);y.addColorStop(0,`rgba(96,88,70,${.22*s})`),y.addColorStop(.7,`rgba(110,104,88,${.1*s})`),y.addColorStop(1,"rgba(96,88,70,0)"),i.fillStyle=y,i.fillRect(d-g/2,0,g,f);let p=l.createLinearGradient(d,0,d,f);p.addColorStop(0,"rgba(30,30,30,0.5)"),p.addColorStop(1,"rgba(30,30,30,0)"),l.fillStyle=p,l.fillRect(d-g/2,0,g,f)}return{map:hn(n,2,.8),normalMap:pi(r,2.2),roughnessMap:sl(o,2,.8),roughness:1,metalness:0}}function Kc(s=[214,206,190],t=.7){be(37+s[0]);let e=512,n=512,i=ge(e,n),r=i.getContext("2d");r.fillStyle=`rgb(${s[0]},${s[1]},${s[2]})`,r.fillRect(0,0,e,n),Pi(r,e,n,s,16,.45),Tn(r,e,n,16*t,[s[0]-70,s[1]-70,s[2]-66],120,.16*t),Tn(r,e,n,6*t,[70,60,45],160,.12*t);for(let l=0;l<8*t;l++){let c=et()*e,h=60+et()*200,u=6+et()*24,d=r.createLinearGradient(c,0,c,h);d.addColorStop(0,`rgba(88,74,54,${.18*t})`),d.addColorStop(1,"rgba(88,74,54,0)"),r.fillStyle=d,r.fillRect(c-u/2,0,u,h)}let a=ge(256,256),o=a.getContext("2d");o.fillStyle="#808080",o.fillRect(0,0,256,256),be(9);for(let l=0;l<1400;l++)o.fillStyle=et()>.5?"#878787":"#797979",o.fillRect(et()*256,et()*256,1+et()*3,1+et()*3);return{map:hn(i,3,1.5),normalMap:pi(a,.8),roughness:.92,metalness:0}}function rl(s=0){be(53+s);let t=512,e=512,n=ge(t,e),i=n.getContext("2d"),r=132-s*46,a=16-s*5,o=22-s*8;i.fillStyle=`rgb(${r},${a},${o})`,i.fillRect(0,0,t,e),Pi(i,t,e,[r,a,o],26,.55);for(let h=0;h<26;h++){let u=et()*t,d=et()*e,f=40+et()*120,g=et()*Math.PI;i.save(),i.translate(u,d),i.rotate(g);let y=i.createLinearGradient(-f,0,f,0);y.addColorStop(0,"rgba(0,0,0,0)"),y.addColorStop(.5,`rgba(${Math.min(255,r+62)},${a+16},${o+18},0.13)`),y.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=y,i.beginPath(),i.ellipse(0,0,f,f*.38,0,0,Math.PI*2),i.fill(),i.restore()}for(let h=0;h<60;h++){let u=et()*t,d=et()*e,f=30+et()*80,g=i.createRadialGradient(u,d,0,u,d,f);g.addColorStop(0,`rgba(${Math.min(255,r+55)},${a+14},${o+16},0.08)`),g.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=g,i.beginPath(),i.arc(u,d,f,0,Math.PI*2),i.fill()}let l=ge(256,256),c=l.getContext("2d");c.fillStyle="#808080",c.fillRect(0,0,256,256),be(3);for(let h=0;h<3400;h++)c.fillStyle=et()>.5?"#848484":"#7c7c7c",c.fillRect(et()*256,et()*256,2,2);return{map:hn(n,2,2),normalMap:pi(l,.6),roughness:.88,metalness:0}}function id(){be(61);let s=512,t=512,e=ge(s,t),n=e.getContext("2d"),i=ge(s,t),r=i.getContext("2d"),a=ge(s,t),o=a.getContext("2d");n.fillStyle="#a01018",n.fillRect(0,0,s,t),r.fillStyle="#808080",r.fillRect(0,0,s,t),o.fillStyle="#9a9a9a",o.fillRect(0,0,s,t),Pi(n,s,t,[160,16,24],14,.4);for(let l=0;l<s;l+=4){let h=(Math.sin(l*.1)*.5+Math.sin(l*.031+1.7)*.35+Math.sin(l*.007)*.15)*.5+.5;n.fillStyle=`rgba(${h>.5?255:0},${h>.5?90:0},${h>.5?80:0},${Math.abs(h-.5)*.5})`,n.fillRect(l,0,4,t),r.fillStyle=`rgb(${104+h*62|0},${104+h*62|0},${104+h*62|0})`,r.fillRect(l,0,4,t),o.fillStyle=`rgb(${176-h*88|0},${176-h*88|0},${176-h*88|0})`,o.fillRect(l,0,4,t)}n.strokeStyle="rgba(255,120,110,0.16)",n.lineWidth=3,n.beginPath(),n.moveTo(0,t*.5),n.lineTo(s,t*.5),n.stroke(),r.strokeStyle="#989898",r.lineWidth=3,r.beginPath(),r.moveTo(0,t*.5),r.lineTo(s,t*.5),r.stroke(),be(67),Tn(n,s,t,5,[70,8,12],46,.35),Tn(o,s,t,5,[30,30,30],46,.5);for(let l=0;l<4200;l++)n.fillStyle=`rgba(255,150,140,${.02+et()*.03})`,n.fillRect(et()*s,et()*t,1.5,1.5);return{map:hn(e,2,1),normalMap:pi(i,2.6),roughnessMap:sl(a,2,1),roughness:1,metalness:0}}function sd(){be(71);let s=256,t=256,e=ge(s,t),n=e.getContext("2d"),i=ge(s,t),r=i.getContext("2d"),a=ge(s,t),o=a.getContext("2d");n.fillStyle="#c79a3a",n.fillRect(0,0,s,t),r.fillStyle="#808080",r.fillRect(0,0,s,t),o.fillStyle="#4a4a4a",o.fillRect(0,0,s,t);let l=64;for(let c=0;c<t;c+=l)for(let h=0;h<s;h+=l){let u=190+et()*40;n.fillStyle=`rgba(${u|0},${u*.76|0},${u*.3|0},0.5)`,n.fillRect(h+1,c+1,l-2,l-2),n.strokeStyle="rgba(96,66,20,0.5)",n.lineWidth=1.5,n.strokeRect(h+.5,c+.5,l-1,l-1),r.fillStyle=et()>.5?"#868686":"#7a7a7a",r.fillRect(h+1,c+1,l-2,l-2)}for(let c=0;c<130;c++){let h=et()*s,u=et()*t,d=3+et()*9;n.fillStyle=`rgba(${120+et()*60|0},${80+et()*40|0},${20+et()*20|0},0.3)`,n.beginPath(),n.arc(h,u,d,0,Math.PI*2),n.fill(),r.fillStyle="#727272",r.beginPath(),r.arc(h,u,d,0,Math.PI*2),r.fill(),o.fillStyle="rgba(150,150,150,0.55)",o.beginPath(),o.arc(h,u,d,0,Math.PI*2),o.fill()}return{map:hn(e,1,1),normalMap:pi(i,1.4),roughnessMap:sl(a,1,1),roughness:1,metalness:.9}}function rd(){let e=ge(1024,640),n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,640);i.addColorStop(0,"#7e0e14"),i.addColorStop(.5,"#a01820"),i.addColorStop(1,"#6b0a10"),n.fillStyle=i,n.fillRect(0,0,1024,640),be(77);for(let o=0;o<1024;o+=18){let l=.1+et()*.12,c=n.createLinearGradient(o,0,o+18,0);c.addColorStop(0,`rgba(0,0,0,${l})`),c.addColorStop(.5,"rgba(255,80,80,0.05)"),c.addColorStop(1,`rgba(0,0,0,${l})`),n.fillStyle=c,n.fillRect(o,0,18,640)}n.strokeStyle="#d8a83a",n.lineWidth=10,n.beginPath(),n.arc(1024/2,640/2,190,0,Math.PI*2),n.stroke(),n.strokeStyle="rgba(216,168,58,0.5)",n.lineWidth=3,n.beginPath(),n.arc(1024/2,640/2,205,0,Math.PI*2),n.stroke(),n.fillStyle="#e7b64c",n.font='300px "Noto Sans SC","Microsoft YaHei",serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="rgba(0,0,0,0.5)",n.shadowBlur=12,n.shadowOffsetY=6,n.fillText("\u56CD",1024/2,640/2+14),n.shadowColor="transparent",n.font='84px "Noto Sans SC","Microsoft YaHei",serif';let r="\u5929\u8D50\u826F\u7F18",a="\u6C38\u7ED3\u540C\u5FC3";for(let o=0;o<4;o++)n.fillText(r[o],1024*.16,640*.18+o*108),n.fillText(a[o],1024*.84,640*.18+o*108);return hn(e,1,1)}function ad(){be(91);let s=512,t=512,e=ge(s,t),n=e.getContext("2d");n.fillStyle="#6e1013",n.fillRect(0,0,s,t),Pi(n,s,t,[110,16,19],24,.6),n.strokeStyle="rgba(190,150,60,0.8)",n.lineWidth=10,n.strokeRect(20,20,s-40,t-40),n.strokeStyle="rgba(190,150,60,0.35)",n.lineWidth=4,n.strokeRect(44,44,s-88,t-88),n.strokeStyle="rgba(190,150,60,0.55)",n.lineWidth=4,[[64,64],[s-64,64],[64,t-64],[s-64,t-64]].forEach(([o,l])=>{n.strokeRect(o-18,l-18,36,36),n.strokeRect(o-8,l-8,16,16)}),n.strokeStyle="rgba(190,150,60,0.45)",n.lineWidth=3,n.beginPath(),n.arc(s/2,t/2,92,0,Math.PI*2),n.stroke(),n.beginPath(),n.arc(s/2,t/2,70,0,Math.PI*2),n.stroke();for(let o=0;o<8;o++){let l=o/8*Math.PI*2,c=s/2+Math.cos(l)*81,h=t/2+Math.sin(l)*81;n.beginPath(),n.arc(c,h,13,0,Math.PI*2),n.stroke()}n.fillStyle="rgba(190,150,60,0.4)",n.font="52px serif",n.textAlign="center",n.textBaseline="middle",n.fillText("\u56CD",s/2,t/2+2);let i=n.createLinearGradient(0,0,s,0);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.5,"rgba(30,6,6,0.28)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,s,t),Tn(n,s,t,9,[30,20,18],110,.25);let r=ge(256,256),a=r.getContext("2d");a.fillStyle="#808080",a.fillRect(0,0,256,256),be(7);for(let o=0;o<7e3;o++)a.fillStyle=et()>.5?"#868686":"#7a7a7a",a.fillRect(et()*256,et()*256,1.5,1.5);return{map:hn(e,1,4),normalMap:pi(r,.7),roughness:.95,metalness:0}}function od(){be(101);let s=256,t=256,e=ge(s,t),n=e.getContext("2d");n.fillStyle="#3d5a48",n.fillRect(0,0,s,t),Pi(n,s,t,[61,90,72],10,.4);let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"rgba(255,255,255,0.08)"),i.addColorStop(1,"rgba(0,0,0,0.22)"),n.fillStyle=i,n.fillRect(0,0,s,t),Tn(n,s,t,10,[24,30,26],70,.25);for(let r=0;r<12;r++){n.fillStyle="rgba(150,140,120,0.10)";let a=et()*s,o=t*.6+et()*t*.4;n.beginPath(),n.ellipse(a,o,8+et()*26,4+et()*8,et(),0,Math.PI*2),n.fill()}return{map:hn(e,4,1),roughness:.5,metalness:.05}}function Qc(s=0,t=1){be(113+s*40|0);let e=256,n=256,i=ge(e,n),r=i.getContext("2d"),a=96-s*40,o=58-s*26,l=36-s*16;r.fillStyle=`rgb(${a},${o},${l})`,r.fillRect(0,0,e,n);let c=ge(e,n),h=c.getContext("2d");h.fillStyle="#808080",h.fillRect(0,0,e,n);for(let u=0;u<e;u++){let d=Math.sin(u*.11)*6+Math.sin(u*.037)*14;for(let f=0;f<n;f+=4){let g=Math.sin((f+d)*.16*t)*.5+.5;r.fillStyle=`rgba(0,0,0,${g*.22})`,r.fillRect(u,f,1,4),h.fillStyle=`rgb(${128-g*34},${128-g*34},${128-g*34})`,h.fillRect(u,f,1,4)}}return Tn(r,e,n,5,[20,14,10],60,.2),{map:hn(i,2,2),normalMap:pi(c,1.6),roughness:.62,metalness:.02}}function al(s,t=!1){let i=ge(256,160),r=i.getContext("2d");return r.fillStyle=t?"#8e1016":"#a51920",r.fillRect(0,0,256,160),r.strokeStyle="#d8a83a",r.lineWidth=6,r.strokeRect(8,8,240,144),r.fillStyle="#e7c25c",r.font=`${s.length>2?64:84}px "Noto Sans SC","Microsoft YaHei",serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(s,256/2,160/2+4),hn(i,1,1)}function pn(s,t="#e8e2d2",e="#233225",n=96){let a=ge(512,160),o=a.getContext("2d");return o.fillStyle=e,o.fillRect(0,0,512,160),o.strokeStyle="rgba(255,255,255,0.25)",o.lineWidth=4,o.strokeRect(6,6,500,148),o.fillStyle=t,o.font=`${n}px "Noto Sans SC","Microsoft YaHei",sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(s,512/2,160/2+4),hn(a,1,1)}function jc(){be(131);let s=1024,t=1024,e=ge(s,t),n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#2a7a86"),i.addColorStop(.45,"#155059"),i.addColorStop(1,"#072028"),n.fillStyle=i,n.fillRect(0,0,s,t);for(let r=0;r<44;r++){let a=et()*s,o=18+et()*90,l=n.createLinearGradient(a,0,a+o*.4,t*.55);l.addColorStop(0,`rgba(120,220,210,${.1+et()*.12})`),l.addColorStop(1,"rgba(120,220,210,0)"),n.fillStyle=l,n.beginPath(),n.moveTo(a,0),n.lineTo(a+o,0),n.lineTo(a+o*.55+26,t*.6),n.lineTo(a+26,t*.6),n.closePath(),n.fill()}for(let r=0;r<2600;r++){let a=et()*t;n.fillStyle=`rgba(140,210,200,${.03+et()*.09*(1-a/t)})`,n.fillRect(et()*s,a,1+et()*2.5,1+et()*2.5)}for(let r=0;r<6;r++){let a=et()*s,o=t*.35+et()*t*.5,l=140+et()*300,c=n.createRadialGradient(a,o,l*.2,a,o,l);c.addColorStop(0,"rgba(0,4,6,0.55)"),c.addColorStop(1,"rgba(0,4,6,0)"),n.fillStyle=c,n.beginPath(),n.arc(a,o,l,0,Math.PI*2),n.fill()}return hn(e,2,1)}function ol(){be(151);let s=256,t=256,e=ge(s,t),n=e.getContext("2d");n.fillStyle="#54483a",n.fillRect(0,0,s,t);for(let i=0;i<t;i+=8+et()*10|0){let r=60+et()*50;n.fillStyle=`rgba(${r+20|0},${r|0},${r*.7|0},0.8)`,n.fillRect(0,i,s,5+et()*8)}for(let i=0;i<300;i++)n.fillStyle=`rgba(200,190,160,${.06+et()*.1})`,n.fillRect(et()*s,et()*t,2+et()*5,1+et()*2);return{map:hn(e,1,1),roughness:.9,metalness:0}}function th(){let s=ge(64,64),t=s.getContext("2d");return t.fillStyle="#b3121c",t.fillRect(0,0,64,64),t.fillStyle="rgba(255,220,120,0.9)",t.font="40px serif",t.textAlign="center",t.textBaseline="middle",t.fillText("\u56CD",32,34),hn(s,1,1)}function ld(){be(171);let s=512,t=512,e=ge(s,t),n=e.getContext("2d");n.fillStyle="#6e6a62",n.fillRect(0,0,s,t),Pi(n,s,t,[110,106,98],18,.5),Tn(n,s,t,18,[40,40,40],140,.16),Tn(n,s,t,8,[55,62,58],100,.14),n.strokeStyle="rgba(0,0,0,0.28)",n.lineWidth=3;for(let a=0;a<t;a+=170)n.beginPath(),n.moveTo(0,a),n.lineTo(s,a),n.stroke();let i=ge(256,256),r=i.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,256,256),be(5);for(let a=0;a<900;a++)r.fillStyle=et()>.5?"#858585":"#7b7b7b",r.fillRect(et()*256,et()*256,2+et()*4,2+et()*4);return{map:hn(e,3,2),normalMap:pi(i,1),roughness:.95,metalness:0}}function cd(s="mc"){be(s==="mc"?191:193);let t=512,e=512,n=ge(t,e),i=n.getContext("2d");i.fillStyle="#c8a084",i.fillRect(0,0,t,e),Pi(i,t,e,[200,160,132],12,.4),Tn(i,t,e,4,[190,120,105],90,.2),i.fillStyle="rgba(150,140,140,0.16)",i.beginPath(),i.ellipse(t*.38,e*.47,34,14,.1,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.475,34,14,-.1,0,Math.PI*2),i.fill();for(let a=0;a<2600;a++)i.fillStyle=`rgba(120,86,66,${.03+et()*.05})`,i.fillRect(et()*t,et()*e,1.4,1.4);let r=s==="mc"?6:0;if(i.fillStyle="rgba(70,50,44,0.5)",i.beginPath(),i.ellipse(t*.38,e*.42,30,17,.06,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.42+r,30,17,-.06,0,Math.PI*2),i.fill(),s==="mc"?(i.fillStyle="rgba(232,226,214,0.9)",i.beginPath(),i.ellipse(t*.38,e*.42,13,8,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.42+r,13,8,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(20,16,14,0.95)",i.beginPath(),i.ellipse(t*.38,e*.42,6.5,6.5,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.62,e*.42+r,6.5,6.5,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.5)",i.fillRect(t*.38-2,e*.42-4,3,3),i.fillRect(t*.62-2,e*.42+r-4,3,3),i.strokeStyle="rgba(96,66,54,0.7)",i.lineWidth=3,i.beginPath(),i.moveTo(t*.31,e*.405),i.quadraticCurveTo(t*.38,e*.385,t*.45,e*.405),i.stroke(),i.beginPath(),i.moveTo(t*.55,e*.405+r),i.quadraticCurveTo(t*.62,e*.385+r,t*.69,e*.405+r),i.stroke()):(i.strokeStyle="rgba(74,46,38,0.95)",i.lineWidth=5.5,i.beginPath(),i.moveTo(t*.3,e*.42),i.quadraticCurveTo(t*.38,e*.45,t*.46,e*.42),i.stroke(),i.beginPath(),i.moveTo(t*.54,e*.42),i.quadraticCurveTo(t*.62,e*.45,t*.7,e*.42),i.stroke(),i.strokeStyle="rgba(88,58,48,0.4)",i.lineWidth=9,i.beginPath(),i.moveTo(t*.31,e*.44),i.quadraticCurveTo(t*.38,e*.465,t*.45,e*.44),i.stroke(),i.beginPath(),i.moveTo(t*.55,e*.44),i.quadraticCurveTo(t*.62,e*.465,t*.69,e*.44),i.stroke(),i.fillStyle="rgba(140,96,76,0.22)",i.beginPath(),i.ellipse(t*.27,e*.56,26,44,.2,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.73,e*.56,26,44,-.2,0,Math.PI*2),i.fill()),i.strokeStyle="rgba(46,32,26,0.8)",i.lineWidth=5,i.beginPath(),i.moveTo(t*.3,e*.355),i.quadraticCurveTo(t*.38,e*.335,t*.46,e*.35),i.stroke(),i.beginPath(),i.moveTo(t*.54,e*.35+r*.5),i.quadraticCurveTo(t*.62,e*.335+r*.5,t*.7,e*.355+r*.5),i.stroke(),i.fillStyle="rgba(150,110,90,0.4)",i.beginPath(),i.ellipse(t*.5,e*.55,11,24,0,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(140,96,76,0.4)",i.lineWidth=3,i.beginPath(),i.moveTo(t*.44,e*.6),i.quadraticCurveTo(t*.42,e*.66,t*.44,e*.7),i.stroke(),i.beginPath(),i.moveTo(t*.56,e*.6),i.quadraticCurveTo(t*.58,e*.66,t*.56,e*.7),i.stroke(),s==="mc"){for(let o=0;o<480;o++){let l=et()*Math.PI*2,c=Math.pow(et(),.7)*62,h=t*.5+Math.cos(l)*c*1.5,u=e*.68+Math.sin(l)*c*.62,d=2.5+et()*6,f=i.createRadialGradient(h-d*.3,u-d*.3,0,h,u,d);f.addColorStop(0,"rgba(240,231,208,0.96)"),f.addColorStop(.55,"rgba(206,189,158,0.92)"),f.addColorStop(1,"rgba(130,112,88,0.85)"),i.fillStyle=f,i.beginPath(),i.arc(h,u,d,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,252,240,0.5)",i.beginPath(),i.arc(h-d*.3,u-d*.35,d*.22,0,Math.PI*2),i.fill()}let a=i.createRadialGradient(t*.5,e*.68,55,t*.5,e*.68,110);a.addColorStop(0,"rgba(178,92,74,0.3)"),a.addColorStop(1,"rgba(178,92,74,0)"),i.fillStyle=a,i.beginPath(),i.arc(t*.5,e*.68,110,0,Math.PI*2),i.fill()}else i.strokeStyle="rgba(96,58,48,0.95)",i.lineWidth=5.5,i.beginPath(),i.moveTo(t*.4,e*.68),i.quadraticCurveTo(t*.5,e*.735,t*.6,e*.68),i.stroke(),i.strokeStyle="rgba(190,140,120,0.5)",i.lineWidth=2.5,i.beginPath(),i.moveTo(t*.41,e*.695),i.quadraticCurveTo(t*.5,e*.75,t*.59,e*.695),i.stroke(),i.fillStyle="rgba(120,76,62,0.5)",i.beginPath(),i.arc(t*.385,e*.682,3.4,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(t*.615,e*.682,3.4,0,Math.PI*2),i.fill();if([[.5,.28,60,26],[.5,.5,10,34],[.33,.5,20,10],[.67,.5,20,10]].forEach(([a,o,l,c])=>{let h=i.createRadialGradient(t*a,e*o,0,t*a,e*o,Math.max(l,c));h.addColorStop(0,"rgba(255,238,220,0.18)"),h.addColorStop(1,"rgba(255,238,220,0)"),i.fillStyle=h,i.beginPath(),i.ellipse(t*a,e*o,l,c,0,0,Math.PI*2),i.fill()}),s==="mc"){for(let a=0;a<900;a++){let o=t*(.3+et()*.4),l=e*(.74+et()*.16),c=(o-t*.5)/(t*.22),h=(l-e*.8)/(e*.12);c*c+h*h>1.4||(i.fillStyle=`rgba(52,44,40,${.1+et()*.14})`,i.fillRect(o,l,1.2,1.6))}for(let[a,o]of[[.24,.36],[.76,.37],[.27,.46]])i.strokeStyle="rgba(255,244,228,0.28)",i.lineWidth=2.5,i.beginPath(),i.moveTo(t*a,e*o),i.quadraticCurveTo(t*a+3,e*(o+.05),t*a-2,e*(o+.1)),i.stroke(),i.fillStyle="rgba(255,248,236,0.5)",i.beginPath(),i.arc(t*a-2,e*(o+.1),2.2,0,Math.PI*2),i.fill();i.fillStyle="rgba(196,96,72,0.3)",i.beginPath(),i.ellipse(t*.09,e*.5,18,30,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(t*.91,e*.5,18,30,0,0,Math.PI*2),i.fill()}else{i.strokeStyle="rgba(180,180,190,0.22)",i.lineWidth=3,i.beginPath(),i.moveTo(t*.375,e*.455),i.quadraticCurveTo(t*.37,e*.55,t*.385,e*.64),i.stroke(),i.strokeStyle="rgba(150,140,150,0.14)",i.lineWidth=6,i.beginPath(),i.moveTo(t*.376,e*.47),i.quadraticCurveTo(t*.372,e*.55,t*.386,e*.62),i.stroke();for(let a=0;a<60;a++){let o=t*(.62+et()*.14),l=e*(.86+et()*.1);i.fillStyle=`rgba(228,224,214,${.08+et()*.1})`,i.fillRect(o,l,1.5+et()*2,1.2)}}return hn(n,1,1)}function hd(){be(233);let s=256,t=256,e=ge(s,t),n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#a50f16"),i.addColorStop(.6,"#8e0c12"),i.addColorStop(1,"#6b080e"),n.fillStyle=i,n.fillRect(0,0,s,t),Pi(n,s,t,[150,16,22],18,.35);for(let r=0;r<s;r+=10)n.fillStyle=`rgba(255,120,110,${.03+et()*.05})`,n.fillRect(r,0,3,t);n.textAlign="center",n.textBaseline="middle";for(let r=0;r<6;r++){let a=24+r*42,o=t*.35+r%2*26;n.fillStyle="rgba(120,84,20,0.8)",n.font="30px serif",n.fillText("\u56CD",a+1,o+1.5),n.fillStyle="rgba(224,176,64,0.95)",n.font="28px serif",n.fillText("\u56CD",a,o);for(let l=0;l<7;l++)n.fillStyle=`rgba(255,226,150,${.3+et()*.4})`,n.fillRect(a-12+et()*24,o-12+et()*24,1.4,1.4)}n.strokeStyle="rgba(120,10,16,0.55)",n.lineWidth=2.5;for(let r=0;r<4;r++){n.beginPath(),n.moveTo(0,t*.55+r*18);for(let a=0;a<=s;a+=8)n.lineTo(a,t*.55+r*18+Math.sin(a*.11+r*2)*6);n.stroke()}n.strokeStyle="#d8a83a",n.lineWidth=4,n.beginPath(),n.moveTo(0,t-26),n.lineTo(s,t-26),n.stroke(),n.strokeStyle="#a87c22",n.lineWidth=1.5,n.beginPath(),n.moveTo(0,t-31),n.lineTo(s,t-31),n.stroke(),n.strokeStyle="#d8a83a",n.lineWidth=2;for(let r=6;r<s;r+=13)n.beginPath(),n.moveTo(r,t-24),n.lineTo(r+(et()-.5)*4,t-4),n.stroke();return hn(e,1,1)}function ud(){be(211);let s=256,t=256,e=ge(s,t),n=e.getContext("2d");n.fillStyle="#8d7a64",n.fillRect(0,0,s,t);let i=ge(s,t),r=i.getContext("2d");r.fillStyle="#808080",r.fillRect(0,0,s,t);for(let a=0;a<t;a++){let o=Math.sin(a*.08)*8+Math.sin(a*.023)*20;for(let l=0;l<s;l+=3){let c=Math.sin((l+o)*.22)*.5+.5;n.fillStyle=`rgba(40,30,22,${c*.4})`,n.fillRect(l,a,3,1),r.fillStyle=`rgb(${128-c*52|0},${128-c*52|0},${128-c*52|0})`,r.fillRect(l,a,3,1)}}return{map:hn(e,1,1),normalMap:pi(i,2.2),roughness:.85,metalness:0}}function dd(s){let t=new Si;t.background=new Vt(1708560);let e=new U(new Kt(10,16,8),new ne({color:5579288,side:_n}));t.add(e);let n=new U(new Kt(1.4,8,8),new ne({color:16767392}));n.position.set(0,6,0),t.add(n);let i=new U(new Kt(.9,8,8),new ne({color:16732224}));i.position.set(4,2,-4),t.add(i);let r=new Gs(s),a=r.fromScene(t,.2);return r.dispose(),a.texture}function fd(s,t){let e={colliders:[],regions:[],lights:{hall:[],corridor:[],lobby:[],aqua:[],connector:[]},screens:[],future:{},dyn:{},mats:{}},n=dd(t);s.environment=n;let i=ed(),r=e.mats;r.terrazzo=new G({...i,envMapIntensity:.5}),r.terrazzoDark=new G({...i,color:9405817,envMapIntensity:.3});let a=nd();r.tiles=new G({...a,envMapIntensity:.6}),r.tiles.userData.tileEvery=1.3;let o=Kc();r.plaster=new G({...o}),r.plaster.userData.tileEvery=3.6;let l=Kc([158,96,84],.9);r.plasterHall=new G({...l}),r.plasterHall.userData.tileEvery=4.2;let c=rl();r.velvet=new G({...c});let h=rl(1);r.velvetDark=new G({...h});let u=id();r.tablecloth=new G({...u});let d=sd();r.goldFoil=new G({...d,envMapIntensity:1.5});let f=ad();r.carpet=new G({...f}),r.wainscot=new G({...od()});let g=Qc();r.wood=new G({...g,envMapIntensity:.5});let y=ld();r.concrete=new G({...y}),r.concrete.userData.tileEvery=3.4,r.concreteWet=new G({...y,color:5658192,roughness:.24,envMapIntensity:1.2}),r.gold=new G({color:13081146,metalness:.9,roughness:.3,envMapIntensity:1.4}),r.steel=new G({color:10133670,metalness:.95,roughness:.22,envMapIntensity:1.6}),r.steelDark=new G({color:3948612,metalness:.8,roughness:.5}),r.black=new G({color:1315860,roughness:.8}),r.white=new G({color:14210248,roughness:.85}),r.ceiling=new G({color:6182476,roughness:.95}),r.ceilingHall=new G({color:4862512,roughness:.95}),r.glassSea=new G({map:jc(),roughness:.05,metalness:.3,envMapIntensity:2,emissive:667704,emissiveIntensity:.55}),r.sediment=new G({...ol()}),r.porcelain=new G({color:15262938,roughness:.15,envMapIntensity:1.2}),r.bottleGreen=new G({color:1722922,roughness:.05,metalness:.1,envMapIntensity:1.8}),r.calcite=new G({color:14275262,roughness:.65});let p=(P,L,B,O,q,K,ht,st={})=>{let mt=new U(new de(P,L,B),O);return mt.position.set(q,K,ht),st.ry&&(mt.rotation.y=st.ry),st.rx&&(mt.rotation.x=st.rx),mt.castShadow=!!st.cast,mt.receiveShadow=st.recv!==!1,s.add(mt),st.collide&&e.colliders.push({minX:q-P/2-.05,minZ:ht-B/2-.05,maxX:q+P/2+.05,maxZ:ht+B/2+.05}),mt},m=(P,L,B,O,q,K,ht=0,st=0)=>{let mt=new U(new se(P,L),B);return mt.position.set(O,q,K),mt.rotation.y=ht,mt.rotation.x=st,mt.receiveShadow=!0,s.add(mt),mt},b=(P,L,B,O=2.6)=>{let q=P.clone();for(let K of["map","normalMap","roughnessMap"])q[K]&&(q[K]=q[K].clone(),q[K].needsUpdate=!0,q[K].repeat.set(L/O,B/O));return q},R=(P,L,B,O)=>e.colliders.push({minX:Math.min(P,B),minZ:Math.min(L,O),maxX:Math.max(P,B),maxZ:Math.max(L,O)}),M=(P,L,B)=>{let O=P.userData.tileEvery;if(!O)return P;let q=`${P.uuid}_${(L/O).toFixed(1)}_${(B/O).toFixed(1)}`;if(M.cache=M.cache||{},M.cache[q])return M.cache[q];let K=P.clone();for(let ht of["map","normalMap","roughnessMap"])K[ht]&&(K[ht]=K[ht].clone(),K[ht].needsUpdate=!0,K[ht].repeat.set(Math.max(1,L/O),Math.max(.6,B/O)));return M.cache[q]=K,K};function S(P,L,B,O,q,K=[],ht=0,st=.3){let mt=[[L,B]];for(let[Dt,ct]of K){let zt=[];for(let[ee,he]of mt){if(ct<=ee||Dt>=he){zt.push([ee,he]);continue}Dt>ee&&zt.push([ee,Dt]),ct<he&&zt.push([ct,he])}mt=zt}for(let[Dt,ct]of mt)p(ct-Dt,O,st,M(q,ct-Dt,O),(Dt+ct)/2,ht+O/2,P,{collide:!0});for(let[Dt,ct]of K)p(ct-Dt,O-2.3,st,M(q,ct-Dt,O-2.3),(Dt+ct)/2,ht+2.3+(O-2.3)/2,P)}function E(P,L,B,O,q,K=[],ht=0,st=.3){let mt=[[L,B]];for(let[Dt,ct]of K){let zt=[];for(let[ee,he]of mt){if(ct<=ee||Dt>=he){zt.push([ee,he]);continue}Dt>ee&&zt.push([ee,Dt]),ct<he&&zt.push([ct,he])}mt=zt}for(let[Dt,ct]of mt)p(st,O,ct-Dt,M(q,ct-Dt,O),P,ht+O/2,(Dt+ct)/2,{collide:!0});for(let[Dt,ct]of K)p(st,O-2.3,ct-Dt,M(q,ct-Dt,O-2.3),P,ht+2.3+(O-2.3)/2,(Dt+ct)/2)}let C=(P,L,B,O,q,K,ht,st=!1)=>{let mt=new Xi(P,L,B,1.8);return mt.position.set(O,q,K),st&&(mt.castShadow=!0,mt.shadow.mapSize.set(512,512),mt.shadow.bias=-.004),s.add(mt),mt.userData.base=L,e.lights[ht].push(mt),mt};m(30,20,b(r.terrazzo,30,20),0,0,-10,0,-Math.PI/2).receiveShadow=!0,m(30,20,r.ceilingHall,0,7,-10,0,Math.PI/2);let _=m(4.2,17,r.carpet,0,.02,-8.5,0,-Math.PI/2);_.material=r.carpet,S(-20,-15,15,7,r.plasterHall,[[-8,8]]),S(0,-15,15,7,r.plasterHall,[[-1.8,1.8]]),E(-15,-20,0,7,r.plasterHall,[[-7.6,-4.4]]),E(15,-20,0,7,r.plasterHall,[[-7.6,-4.4]]);let T=new ae,D=P=>{let L=new ae,B=new U(new de(1.7,3.4,.12),r.wood);L.add(B);for(let[K,ht]of[[.9,1.35],[-.75,1.5]]){let st=new U(new de(1.3,ht,.05),r.wood);st.position.set(0,K,.06),L.add(st);let mt=new U(new de(1.38,ht+.08,.02),r.goldFoil);mt.position.set(0,K,.045),L.add(mt)}let O=new U(new Ft(.022,.022,.75,8),r.gold);O.position.set(P<0?.66:-.66,.05,.14),L.add(O);let q=new U(new se(.5,.5),new G({map:th(),roughness:.85}));return q.position.set(0,1.55,.09),q.rotation.z=.06*(P<0?1:-1),L.add(q),L.position.set(P,1.7,0),s.add(L),L},I=D(-.85),N=D(.85);p(.22,3.6,.4,r.wood,-1.85,1.8,0,{}),p(.22,3.6,.4,r.wood,1.85,1.8,0,{}),p(4.1,.24,.4,r.wood,0,3.7,0,{}),m(2.6,.5,new G({map:pn("\u767E\u5E74\u597D\u5408","#e7c25c","#6e0d12",96),roughness:.8}),0,3.1,-.22,Math.PI),T.userData={dL:I,dR:N},e.dyn.doorS=T,R(-1.8,-.2,1.8,.2),e.dyn.doorSCollider=e.colliders[e.colliders.length-1],p(16,.6,3.2,r.velvetDark,0,.3,-18.4,{collide:!0}),p(16.1,.1,3.26,r.goldFoil,0,.62,-18.4,{}),p(4,.15,1.2,r.velvetDark,0,.07,-16.6,{}),p(4.04,.04,1.24,r.goldFoil,0,.155,-16.6,{});let Z=m(14,5.4,new G({map:rd(),roughness:.85}),0,3.6,-19.7);Z.material.emissive=new Vt(1704708),p(1.6,6.4,.4,r.velvet,-7.4,3.2,-19.4,{}),p(1.6,6.4,.4,r.velvet,7.4,3.2,-19.4,{}),p(.7,1.1,.6,r.black,-7.2,1.75,-17.6,{cast:!0}),p(.7,1.1,.6,r.black,7.2,1.75,-17.6,{cast:!0}),p(.12,1.2,.12,r.steelDark,-7.2,.6,-17.6,{}),p(.12,1.2,.12,r.steelDark,7.2,.6,-17.6,{});let Q=new ne({color:10336432}),V=m(3.6,2.7,Q,-11.5,4,-19.55);e.screens.push({id:"T03",mesh:V,mat:Q,kind:"vcr"});let j=[[-6.5,-6],[6.5,-6],[-11,-9.5],[11,-9.5],[-6.5,-12.5],[6.5,-12.5],[-11,-3],[11,-3]],J=[0,-13.5],ot=new Ft(1.15,1.15,.76,20),dt=new Ft(1.18,1.45,.76,20,1,!0),Tt=new Ft(.62,.62,.04,18),At=new G({color:10135706,roughness:.05,metalness:.4,envMapIntensity:1.6}),Nt=new Ft(.22,.26,.52,10),_e=new de(.44,.62,.09),Be=new Ft(.12,.09,.025,12),ye=new Ft(.03,.024,.09,8),at=new Ft(.04,.045,.3,8),ft=[...j,J],ut=new Mn(Be,r.porcelain,ft.length*8),Yt=new Mn(ye,r.porcelain,ft.length*8),Jt=new Mn(Nt,r.velvet,ft.length*6),Wt=new Mn(_e,r.velvet,ft.length*6);ut.castShadow=Yt.castShadow=!1,Jt.castShadow=!0;let De=0,oe=0,ie=new ke;ft.forEach(([P,L],B)=>{let O=B===ft.length-1,q=new U(ot,r.wood);q.position.set(P,.38,L),q.castShadow=!0,s.add(q);let K=new U(dt,r.tablecloth);K.position.set(P,.38,L),K.rotation.y=B*.9,s.add(K);let ht=new U(new Ft(1.16,1.16,.03,20),r.tablecloth);ht.position.set(P,.775,L),s.add(ht);let st=new U(Tt,At);st.position.set(P,.81,L),s.add(st),R(P-1.25,L-1.25,P+1.25,L+1.25);for(let Dt=0;Dt<8;Dt++){let ct=Dt/8*Math.PI*2;ie.position.set(P+Math.cos(ct)*.92,.8,L+Math.sin(ct)*.92),ie.rotation.set(0,0,0),ie.updateMatrix(),ut.setMatrixAt(De,ie.matrix),ie.position.set(P+Math.cos(ct)*.78,.85,L+Math.sin(ct)*.78),ie.updateMatrix(),Yt.setMatrixAt(De,ie.matrix),De++}for(let Dt=0;Dt<6;Dt++){let ct=Dt/6*Math.PI*2+(O?.5:0),zt=P+Math.cos(ct)*1.62,ee=L+Math.sin(ct)*1.62;ie.position.set(zt,.26,ee),ie.rotation.set(0,-ct+Math.PI/2,0),ie.updateMatrix(),Jt.setMatrixAt(oe,ie.matrix),ie.position.set(zt+Math.cos(ct)*.24,.82,ee+Math.sin(ct)*.24),ie.updateMatrix(),Wt.setMatrixAt(oe,ie.matrix),oe++}let mt=new U(at,r.bottleGreen);mt.position.set(P+.4,.95,L+.2),mt.castShadow=!0,s.add(mt)}),s.add(ut,Yt,Jt,Wt);let ve=J[0]+2.1,me=J[1],Re=new ae,Ye=new U(new de(.5,1,.5),r.velvet);Ye.position.y=.5,Re.add(Ye);let Je=new U(new de(.5,.72,.1),r.velvet);Je.position.set(0,1.3,.22),Re.add(Je);let Ke=new U(new se(.62,.9),new G({color:12587032,roughness:.7,side:we,emissive:3146762}));Ke.position.set(0,1.35,.28),Ke.rotation.x=-.15,Re.add(Ke),Re.position.set(ve,0,me),Re.rotation.y=-Math.PI/2,s.add(Re),e.dyn.vipChair=Re;let He=new G({map:al("\u4E0A\u5BBE"),roughness:.8,side:we}),Ge=m(.28,.18,He,J[0]+1,.89,J[1],-Math.PI/2);Ge.rotation.x=-.3,e.dyn.vipCard=Ge;let H=new G({map:al("\u4F34\u5A18"),roughness:.8,side:we}),mn=m(.28,.18,H,J[0]-1,.89,J[1],Math.PI/2);mn.rotation.x=-.3,e.dyn.cardYou={mesh:mn,mat:H,flip:al("\u4E0A\u5BBE",!0)};function Me(P,L,B){let O=new ae,q=new U(new on(.9,.06,8,24),r.gold);q.rotation.x=Math.PI/2,O.add(q);let K=new U(new on(.5,.05,8,20),r.gold);K.rotation.x=Math.PI/2,K.position.y=.4,O.add(K);let ht=new G({color:16767392,emissive:16757854,emissiveIntensity:2.2});for(let Dt=0;Dt<8;Dt++){let ct=Dt/8*Math.PI*2,zt=new U(new Kt(.07,8,8),ht);zt.position.set(Math.cos(ct)*.9,.12,Math.sin(ct)*.9),O.add(zt)}let st=new U(new Ft(.02,.02,1.4,6),r.gold);st.position.y=1,O.add(st),O.position.set(P,5.4,L),s.add(O);let mt=C(16760952,55,26,P,5,L,B,B==="hall");return{group:O,light:mt,bulbMat:ht}}e.dyn.chand1=Me(0,-5,"hall"),e.dyn.chand2=Me(0,-12,"hall"),[[-14.7,-4],[-14.7,-12],[14.7,-4],[14.7,-12]].forEach(([P,L])=>{let B=p(.24,.5,.18,r.gold,P,3.2,L,{});B.material=r.gold,C(16756832,8,9,P+(P<0?.4:-.4),3.3,L,"hall")});let w=new Rr(16769200,260,30,.32,.45,1.4);w.position.set(0,6.6,-12),w.target.position.set(0,1.4,-18.2),w.castShadow=!0,w.shadow.mapSize.set(1024,1024),w.shadow.bias=-.002,s.add(w,w.target),e.lights.hall.push(w),w.userData.base=260,e.dyn.stageSpot=w;let x=new G({color:11538968,emissive:2753542,roughness:.8}),z=new G({color:13081146,metalness:.6,roughness:.4});e.dyn.garlands=[];for(let P=0;P<5;P++){let O=-17+P*3.6,q=[];for(let ht=0;ht<=16;ht++){let st=ht/16;q.push(new A(-15+30*st,6.4-Math.sin(st*Math.PI)*.9,O))}let K=new U(new Pn(new bn(q),24,.035,5),P%2?z:x);s.add(K),e.dyn.garlands.push(K)}let Y=new G({color:12589090,roughness:.25,envMapIntensity:1.2}),tt=new G({color:14200912,roughness:.25,envMapIntensity:1.2});[[-13.5,-1.5],[13.5,-1.5],[-13.5,-18],[13.5,-18]].forEach(([P,L],B)=>{for(let O=0;O<5;O++){let q=new U(new Kt(.16,10,10),O%2?tt:Y);q.position.set(P+Math.sin(O*2.1)*.3,2.2+O*.28,L+Math.cos(O*1.7)*.3),q.scale.y=1.15,s.add(q)}});let pt=new G({map:th(),roughness:.9});[[-15,-9,Math.PI/2],[15,-9,-Math.PI/2],[-8,.15-0,0],[8,0,0]].forEach(([P,L,B],O)=>{O<2?m(1.1,1.1,pt,P+(P<0?.16:-.16),3.4,L,B):m(1.1,1.1,pt,P,3.4,-.16,Math.PI)});let gt=new ae,nt=new G({color:7031356,roughness:.85,emissive:1182214});for(let P=0;P<7;P++){let L=-16.5+P*2.6,B=10.6-Math.abs(P-3)*.45,O=new U(new on(B,.62-.04*Math.abs(P-3),9,26,Math.PI),nt);O.position.set(0,.1,L),O.scale.set(1.32,.66,1),O.rotation.z=(P%2?1:-1)*.05,gt.add(O)}gt.visible=!1,s.add(gt),e.dyn.throat=gt,e.regions.push({name:"\u5BB4\u4F1A\u5385",box:[-15,-20,15,0],mat:"carpet"}),m(25,3.6,b(r.terrazzoDark,25,3.6),27.5,0,-6.2,0,-Math.PI/2),m(3.6,18.4,b(r.terrazzoDark,3.6,18.4),38.2,0,4.8,0,-Math.PI/2),m(25,3.6,r.ceiling,27.5,3.2,-6.2,0,Math.PI/2),m(3.6,18.4,r.ceiling,38.2,3.2,4.8,0,Math.PI/2);function rt(P,L,B,O=[]){S(P,L,B,1.25,r.tiles,O),S(P,L,B,1.95,r.plaster,O,1.25)}function yt(P,L,B,O=[]){E(P,L,B,1.25,r.tiles,O),E(P,L,B,1.95,r.plaster,O,1.25)}rt(-8,15,40,[]),rt(-4.4,15,36.4,[]),yt(40,-8,14,[]),yt(36.4,-4.4,14,[]);let Bt=new G({color:3024416,roughness:.9});[[20,-8],[28,-8],[34,-8]].forEach(([P,L])=>{m(1.1,2.2,Bt,P,1.1,L+.16),m(.9,.28,new G({map:pn(P===28?"\u5DE5\u4F5C\u95F4":"\u540E\u53A8","#ddd6c2","#37322a",88),roughness:.9}),P,2.42,L+.17)}),m(.9,.28,new G({map:pn("\u5BB4\u4F1A\u5385 \u2192","#e8e2d2","#233225",80),roughness:.9}),16.5,2.5,-4.6-.16,Math.PI),e.dyn.tubes=[];let bt=()=>new G({color:15397606,emissive:13625560,emissiveIntensity:2.6});[[18,-6.2,0],[25,-6.2,0],[32,-6.2,0],[38.2,-1,1],[38.2,5,1],[38.2,11,1]].forEach(([P,L,B],O)=>{let q=bt(),K=p(B?.12:1.4,.06,B?1.4:.12,q,P,3.12,L,{}),ht=C(14217436,O%2===0?16:12,11,P,2.8,L,"corridor");e.dyn.tubes.push({mesh:K,mat:q,light:ht,flicker:O===2})});function vt(P,L,B){let O=new ae,q=new U(new de(1.1,.08,.6),r.steel);q.position.y=.85,O.add(q);let K=q.clone();K.position.y=.3,O.add(K);for(let[st,mt]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]]){let Dt=new U(new Ft(.02,.02,.85,6),r.steelDark);Dt.position.set(st,.45,mt),O.add(Dt)}for(let st=0;st<3;st++){let mt=new U(new Ft(.16,.16,.34,12),r.porcelain);mt.position.set(-.32+st*.32,1.07,0),O.add(mt)}let ht=new U(new se(.7,.5),r.velvet);return ht.position.set(.2,.62,.31),ht.rotation.x=-.2,O.add(ht),O.position.set(P,0,L),O.rotation.y=B,s.add(O),R(P-.65,L-.4,P+.65,L+.4),O}vt(22,-7.4,0),vt(38.9,2,Math.PI/2);let Gt=new G({color:9312788,roughness:.8});for(let P=0;P<4;P++)p(.6,.35,.42,Gt,30.5+P%2*.65,.18+Math.floor(P/2)*.37,-7.5,{collide:P<2});for(let P=0;P<6;P++){let L=p(1.6+Math.random()*1.2,.1+Math.random()*.14,.24,r.sediment,17+P*3.8,.08,-7.75,{});L.rotation.z=(Math.random()-.5)*.06}p(24.9,.1,.1,r.steelDark,27.5,3,-7.7,{}),p(.1,.1,18.2,r.steelDark,39.7,3,4.8,{}),e.regions.push({name:"\u670D\u52A1\u8D70\u5ECA",box:[15,-8,40,-4.4],mat:"terrazzo"}),e.regions.push({name:"\u670D\u52A1\u8D70\u5ECA",box:[36.4,-4.4,40,14],mat:"terrazzo"}),m(24,16,b(r.terrazzo,24,16),36,0,22,0,-Math.PI/2),m(24,16,r.ceiling,36,8,22,0,Math.PI/2),m(4.5,14,r.carpet,36,.02,22.8,0,-Math.PI/2),S(30,24,48,8,r.plaster,[[33,39]]),S(14,24,48,8,r.plaster,[[36.4,40]]),E(24,14,30,8,r.plaster,[[20,23.2]]),E(48,14,30,8,r.plaster,[]);let qt=new G({color:3160378,roughness:.04,metalness:.4,transparent:!0,opacity:.5,envMapIntensity:2});p(6,3.4,.1,qt,36,1.7,30,{}),R(32.8,29.8,39.2,30.2),p(.14,3.4,.14,r.steel,33,1.7,30,{}),p(.14,3.4,.14,r.steel,39,1.7,30,{}),p(.14,3.4,.14,r.steel,36,1.7,30,{});let jt=new ne({color:13161672,transparent:!0,opacity:.22,depthWrite:!1});m(14,6,jt,36,2.5,36,Math.PI);let F=document.createElement("canvas");F.width=F.height=128;let xt=F.getContext("2d"),it=xt.createRadialGradient(64,64,2,64,64,62);it.addColorStop(0,"rgba(255,244,210,1)"),it.addColorStop(.25,"rgba(255,236,190,0.55)"),it.addColorStop(.6,"rgba(220,200,160,0.14)"),it.addColorStop(1,"rgba(0,0,0,0)"),xt.fillStyle=it,xt.fillRect(0,0,128,128);let Mt=new En(F),wt=new ne({map:Mt,color:16773836,transparent:!0,opacity:0,depthWrite:!1,blending:In,fog:!1}),lt=m(2.6,1.7,wt,33.5,1,35,Math.PI),Ht=m(2.6,1.7,wt,38.5,1,35.5,Math.PI);e.dyn.headlights={mat:wt,m1:lt,m2:Ht},[[30,18],[42,18],[30,26],[42,26]].forEach(([P,L])=>{let B=new U(new Ft(.55,.55,8,20),r.steel);B.position.set(P,4,L),B.castShadow=!0,s.add(B),R(P-.6,L-.6,P+.6,L+.6);let O=new U(new Ft(.68,.62,.3,20),r.gold);O.position.set(P,.15,L),s.add(O)});let Pt=Me(36,22,"lobby");Pt.group.scale.setScalar(1.8),Pt.group.position.y=6.2,Pt.light.position.y=5.8,Pt.light.intensity=110,Pt.light.userData.base=110,Pt.light.castShadow=!0,Pt.light.shadow.mapSize.set(512,512),e.dyn.lobbyChand=Pt,p(1.2,1.1,7,r.wood,45.5,.55,22,{collide:!0,cast:!0}),p(1.5,.08,7.4,r.wood,45.5,1.14,22,{});let Ue=new U(new fn(.22,.24,12,1,!0),new G({color:1855544,roughness:.4,side:we}));Ue.position.set(45.5,1.5,19.5),s.add(Ue),p(.04,.34,.04,r.gold,45.5,1.3,19.5,{}),C(16765072,10,7,45.5,1.45,19.5,"lobby"),p(.26,.1,.2,r.black,45.5,1.22,24,{});let Ae=new G({map:pn("\u70ED\u70C8\u795D\u8D3A\u5468\u5E9C\u5343\u91D1\u4E8E\u5F52\u4E4B\u559C","#e7c25c","#8e0c12",60),roughness:.85}),Gn=m(14,1.1,Ae,36,6.2,29.7,Math.PI);Gn.rotation.z=.012;let Vn=new G({color:3038260,roughness:.85});[[25.5,28.5],[46.5,28.5],[25.5,15.5]].forEach(([P,L])=>{p(.5,.5,.5,new G({color:8007202,roughness:.9}),P,.25,L,{collide:!0});for(let B=0;B<6;B++){let O=new U(new fn(.09,.9,6),Vn);O.position.set(P+Math.sin(B*2.4)*.2,.9+B%3*.14,L+Math.cos(B*1.9)*.2),O.rotation.set(Math.sin(B)*.5,0,Math.cos(B*1.3)*.5),s.add(O)}}),p(.7,.5,.45,new G({color:4864040,roughness:.9}),34,.25,28.6,{}),p(.6,.42,.4,new G({color:3490382,roughness:.9}),34.7,.21,28.3,{}),p(2.2,.45,.9,r.velvetDark,27,.32,24.5,{collide:!0}),p(2.2,.7,.24,r.velvetDark,27,.85,24.9,{}),m(1.6,.5,new G({map:pn("\u5458\u5DE5\u901A\u9053 \xB7 \u6D77\u6D0B\u9986\u8FDE\u5ECA","#d8e6dc","#22322a",56),roughness:.9}),24.4,2.7,21.6,Math.PI/2);for(let P=0;P<6;P++)p(3,.18,.34,r.terrazzoDark,47.2-P*0,.2+P*.18,15.6+P*.34,{});p(3,.06,.06,r.gold,47.2,1.05,16.2,{ry:0}),R(45.6,15.3,48,17.8),e.dyn.pits=[];let Sl=new G({color:790032,roughness:.15,metalness:.4,envMapIntensity:1.4});[[31,20,2.6,1.5,.4],[39,24.5,3.4,1.8,-.7],[35,17.5,2,1.2,1.9]].forEach(([P,L,B,O,q])=>{let K=new U(new zi(1,24),Sl);K.scale.set(B,O,1),K.rotation.x=-Math.PI/2,K.rotation.z=q,K.position.set(P,.035,L),K.visible=!1,s.add(K),e.dyn.pits.push(K)}),e.regions.push({name:"\u5927\u5802",box:[24,14,48,30],mat:"terrazzo"}),m(43,4,b(r.concreteWet,43,4,3.2),2.5,0,22,0,-Math.PI/2),m(43,4,r.ceiling,2.5,3.4,22,0,Math.PI/2),S(20,-19,24,1.25,r.tiles,[[-19,-15.2]]),S(20,-19,24,2.15,r.concrete,[[-19,-15.2]],1.25);let fh=m(46,8,new ne({map:jc()}),2.5,2.5,26.5,Math.PI);e.dyn.beams=[];let Vr=new ne({color:6740168,transparent:!0,opacity:.14,blending:In,depthWrite:!1,side:we});for(let P=0;P<5;P++){let L=new U(new se(1.4+P*.4,7),Vr);L.position.set(-14+P*8,2.8,25.4),L.rotation.z=.25,s.add(L),e.dyn.beams.push({mesh:L,phase:P*1.7,x0:-14+P*8})}let qs=new ne({color:133388,transparent:!0,opacity:.85,depthWrite:!1}),ps=new U(new Kt(2.6,12,8),qs);ps.scale.set(2.2,.7,.5),ps.position.set(-6,3.4,26.2),s.add(ps),e.dyn.seaShade=ps;let Wr=new br({color:10471618,roughness:.03,metalness:0,transparent:!0,opacity:.18,envMapIntensity:2.2});for(let P=0;P<12;P++){let L=-17.2+P*3.6;m(3.5,3.4,Wr,L,1.7,24),p(.14,3.4,.2,r.steelDark,L+1.78,1.7,24,{})}R(-19,23.8,24,24.3),p(.14,3.4,.2,r.steelDark,-19,1.7,24,{}),p(.3,3.4,4.2,r.concrete,-19,1.7,22,{collide:!0});let Qi=document.createElement("canvas");Qi.width=256,Qi.height=256;let Dn=Qi.getContext("2d");Dn.strokeStyle="rgba(220,240,240,0.9)",Dn.lineWidth=2;for(let P=0;P<7;P++){Dn.beginPath();let L=128,B=128;Dn.moveTo(L,B);for(let O=0;O<6;O++)L+=(Math.random()-.5)*90,B+=(Math.random()-.5)*90,Dn.lineTo(L,B);Dn.stroke()}let Ys=new En(Qi),Xr=new ne({map:Ys,transparent:!0,opacity:0,depthWrite:!1});e.dyn.cracks=[],[[-2,23.85],[6,23.85],[14,23.85]].forEach(([P,L])=>{let B=m(3.2,3.2,Xr.clone(),P,1.7,L,Math.PI);e.dyn.cracks.push(B)});let qr=new G({map:pn("\u8680\u6E7E\u6D77\u6D0B\u9986","#bfeee8","#0d2b31",88),emissive:1923676,emissiveIntensity:1.6,roughness:.6});m(3.2,.9,qr,21.5,2.8,20.2,0),C(6736064,9,8,21.5,2.6,21,"aqua"),p(2,1.05,.8,r.wood,21.6,.53,20.7,{collide:!0});let $n=new ae,Yr=new U(new de(.16,3.2,3.8),r.steelDark);$n.add(Yr);for(let P=0;P<6;P++){let L=new U(new de(.2,3.2,.06),r.steel);L.position.set(0,0,-1.7+P*.68),$n.add(L)}let Ii=new U(new se(1.4,.4),new G({map:pn("\u68C0\u4FEE\u95F8 \xB7 \u7981\u6B62\u901A\u884C","#e8d8b0","#5a2018",64),roughness:.9}));Ii.rotation.y=Math.PI/2,Ii.position.set(.11,.4,0),$n.add(Ii),$n.position.set(4,1.6,22),s.add($n),e.dyn.gate={group:$n,y:1.6,targetY:1.6,collider:{minX:3.7,minZ:20,maxX:4.3,maxZ:24}},e.colliders.push(e.dyn.gate.collider),p(.24,3.4,.24,r.steelDark,4,1.7,20.25,{}),p(.24,3.4,.24,r.steelDark,4,1.7,23.75,{});let Zr=new G({color:2777152,emissive:1926724,emissiveIntensity:2.4});[[-16,20.3],[10,20.3],[22,20.3]].forEach(([P,L])=>{p(.34,.16,.1,Zr,P,3,L+.05,{})}),C(4168296,7,9,-16,2.8,21,"aqua"),C(4168296,6,9,10,2.8,21,"aqua");let $r=C(5220512,38,18,-6,2.4,22.3,"aqua"),Tl=C(5220512,34,18,12,2.4,22.3,"aqua"),wl=C(5220512,30,16,-15,2.4,22.3,"aqua");e.dyn.waterLights=[$r,Tl,wl];let Jr=new U(new de(43,.1,.16),new G({color:10479836,emissive:6277308,emissiveIntensity:1.8}));Jr.position.set(2.5,3.3,23.85),s.add(Jr);let Rl=new G({color:1712676,roughness:.03,metalness:.5,envMapIntensity:2.4,transparent:!0,opacity:.8});[[-8,22.6,1.6],[2,21.4,1.1],[16,22.8,2]].forEach(([P,L,B])=>{let O=new U(new zi(1,20),Rl);O.rotation.x=-Math.PI/2,O.scale.set(B,B*.55,1),O.position.set(P,.02,L),s.add(O)}),e.regions.push({name:"\u6D77\u6D0B\u9986\u8FDE\u5ECA",box:[-19,20,24,24],mat:"wet"}),m(3.8,27.6,b(r.concrete,3.8,27.6,3.2),-17.1,0,6.2,0,-Math.PI/2),m(3.8,27.6,r.ceiling,-17.1,3,6.2,0,Math.PI/2),E(-19,-7.6,20,3,r.concrete,[]),E(-15.2,-4.4,20,3,r.concrete,[[-7.6,-4.4]]),S(-7.6,-19,-15.2,3,r.concrete,[]),[[-18.8,2],[-18.8,10]].forEach(([P,L])=>{m(1.4,2.2,Bt,P+.16,1.1,L,Math.PI/2),p(.1,2.4,1.6,r.steelDark,P+.05,1.2,L,{})}),m(.8,.3,new G({map:pn("\u65E7\u51B7\u5E93 \xB7 3","#cfd8ce","#2e3630",76),roughness:.9}),-18.7,2.3,6,Math.PI/2),p(.12,.12,27,r.steelDark,-18.6,2.6,6.2,{});for(let P=0;P<9;P++){let L=new U(new Kt(.09+Math.random()*.1,7,7),r.calcite);L.position.set(-18.55,2.5+Math.random()*.24,-5+P*2.8+Math.random()),L.scale.y=.7,s.add(L)}e.dyn.bulbs=[],[[-17.1,-3],[-17.1,6],[-17.1,15]].forEach(([P,L],B)=>{let O=new ae,q=new U(new Ft(.012,.012,.7,5),r.black);q.position.y=.35,O.add(q);let K=new U(new Kt(.06,8,8),new G({color:16767392,emissive:16760944,emissiveIntensity:2.4}));O.add(K),O.position.set(P,2.6,L),s.add(O);let ht=C(16760952,9,8,P,2.4,L,"connector");e.dyn.bulbs.push({group:O,light:ht,phase:B*2.1})});let v=new U(new Pn(new bn([new A(-17.5,.03,-5.5),new A(-17,.05,-5.8),new A(-16.6,.03,-5.5),new A(-16.4,.04,-6)]),12,.02,5),new G({color:4854292,roughness:.95}));s.add(v),e.regions.push({name:"\u5458\u5DE5\u8FDE\u5ECA",box:[-19,-7.6,-15.2,20],mat:"metal"});function k(P,L,B,O,q,K,ht){let st=new ae,mt=new G({color:3814960,roughness:.55}),Dt=new U(new de(.62,.5,.5),mt);Dt.castShadow=!0,st.add(Dt);let ct=new U(new de(.64,.52,.04),new G({color:2893860,roughness:.5}));ct.position.z=.25,st.add(ct);let zt=new ne({color:2241328}),ee=new U(new se(.5,.38),zt);ee.position.set(-.03,.02,.275),st.add(ee);for(let Le=0;Le<2;Le++){let Ze=new U(new Ft(.024,.024,.02,8),r.steelDark);Ze.rotation.x=Math.PI/2,Ze.position.set(.25,.08-Le*.1,.276),st.add(Ze)}st.position.set(P,L,B),st.rotation.y=O,s.add(st);let he=new Xi(6740172,4,4,2);return he.position.set(P,L+.1,B),s.add(he),e.screens.push({id:q,mesh:ee,mat:zt,kind:"preview",camPos:K,camLook:ht,glow:he,group:st}),st}p(.5,1.15,.5,r.steelDark,26.5,.58,-7.5,{collide:!0}),k(26.5,1.42,-7.5,.25,"T02",new A(26.5,2.2,-6.8),new A(34,1.2,-5.6)),k(45.4,1.45,26,-Math.PI/2-.2,"T01",new A(44,3.4,26),new A(34,2.2,21)),k(21.6,1.3,20.75,Math.PI+.15,"T07",new A(18,1.9,21.2),new A(4,1.6,22.6));let $=new ne({color:16726064,wireframe:!1}),W=new ne({color:16732224}),X=new ne({color:1316892}),_t=new ae,Ct=(P,L,B=W)=>{let O=L.clone().sub(P),q=O.length(),K=new U(new Ft(.03,.03,q,5),B);return K.position.copy(P).add(L).multiplyScalar(.5),K.quaternion.setFromUnitVectors(new A(0,1,0),O.normalize()),K};_t.add(Ct(new A(16.2,2.05,-6.2),new A(35.5,2.05,-6.2))),_t.add(Ct(new A(35.5,2.05,-6.2),new A(38.2,2.05,-3.5))),_t.add(Ct(new A(38.2,2.05,-3.5),new A(38.2,2.05,11)));let St=new U(new Ns(.24,1.1,4,8),X);St.position.set(31,.95,-6.2),_t.add(St),_t.visible=!1,s.add(_t),e.future.corridor=_t;let Ut=new ae;for(let P=0;P<7;P++){let L=P/6,B=new U(new de(2.6-L*.8,.5,1.6-L*.5),X);B.position.set(29+L*12,.6+Math.sin(L*Math.PI)*5.4,19+L*5.5),B.rotation.set(L*.8,L*1.2,Math.sin(L*6)*.4),Ut.add(B)}let Ot=new U(new Ns(.24,1.1,4,8),new ne({color:7213075}));Ot.position.set(33,.95,24),Ut.add(Ot),Ut.visible=!1,s.add(Ut),e.future.lobby=Ut;let Zt=new ae,te=new U(new Kt(4,16,12,0,Math.PI),new ne({color:929848,side:we}));te.scale.set(1.4,.8,.35),te.position.set(4,1.7,24.4),te.rotation.y=Math.PI,Zt.add(te),Zt.add(Ct(new A(4,3.3,22),new A(10.5,2.6,20.3)));let kt=new U(new de(.16,3.2,3.8),new ne({color:3160124,transparent:!0,opacity:.7}));kt.position.set(4,4.4,22),Zt.add(kt),Zt.visible=!1,s.add(Zt),e.future.aqua=Zt;let fe=(P,L,B)=>{let O=document.createElement("canvas");O.width=P,O.height=L,B(O.getContext("2d"),P,L);let q=new En(O);return q.colorSpace=an,q},Ve=new G({color:11735584,emissive:14494232,emissiveIntensity:.85,roughness:.6,transparent:!0,opacity:.96}),Ie=new G({color:13081146,metalness:.7,roughness:.4}),Te=new G({color:9309202,roughness:.9});e.dyn.lanterns=[],[[-13.2,-3.2],[-13.2,-9.5],[-13.2,-15.8],[13.2,-3.2],[13.2,-9.5],[13.2,-15.8]].forEach(([P,L],B)=>{let O=new ae,q=new U(new Kt(.3,14,12),Ve);q.scale.y=1.18,O.add(q);for(let ee=0;ee<5;ee++){let he=new U(new on(.3,.008,5,20),Ie);he.rotation.y=ee/5*Math.PI,he.scale.y=1.18,O.add(he)}let K=new U(new Ft(.1,.14,.07,10),Ie);K.position.y=.38,O.add(K);let ht=K.clone();ht.position.y=-.38,ht.rotation.x=Math.PI,O.add(ht);let st=new U(new fn(.035,.3,8),Te);st.position.y=-.56,O.add(st);let mt=new U(new Ft(.008,.008,1.1,4),r.black);mt.position.y=.95,O.add(mt);let Dt=new U(new Kt(.07,8,8),new ne({color:16767392,fog:!1}));O.add(Dt);let ct=fe(64,64,ee=>{let he=ee.createRadialGradient(32,32,2,32,32,30);he.addColorStop(0,"rgba(255,150,90,0.85)"),he.addColorStop(.5,"rgba(230,60,40,0.3)"),he.addColorStop(1,"rgba(200,40,30,0)"),ee.fillStyle=he,ee.fillRect(0,0,64,64)}),zt=new U(new se(1.1,1.25),new ne({map:ct,transparent:!0,blending:In,depthWrite:!1,fog:!1}));O.add(zt),zt.onBeforeRender=(ee,he,Le)=>{zt.quaternion.copy(Le.quaternion)},O.position.set(P,4.9,L),s.add(O),e.dyn.lanterns.push({group:O,phase:B*1.3,glowMat:zt.material})});let Ne=r.goldFoil;p(30,.14,.14,Ne,0,6.7,-.2,{}),p(30,.14,.14,Ne,0,6.7,-19.8,{}),p(.14,.14,20,Ne,-14.8,6.7,-10,{}),p(.14,.14,20,Ne,14.8,6.7,-10,{}),p(20,.1,.1,Ne,0,6.96,-4.5,{}),p(20,.1,.1,Ne,0,6.96,-15.5,{}),p(.1,.1,11,Ne,-10,6.96,-10,{}),p(.1,.1,11,Ne,10,6.96,-10,{}),m(19.6,10.8,new G({color:3810338,roughness:.95}),0,6.99,-10,0,Math.PI/2);let It=new G({...rl(),color:8261654});for(let P=0;P<22;P++){let L=-7.7+P*.73,B=new U(new Ft(.22+P%3*.05,.3+P%2*.06,6.2,8),It);B.position.set(L,3.5,-19.85+P%2*.1),s.add(B)}let wn=new Kt(.09,10,8),ue=r.porcelain;ft.forEach(([P,L],B)=>{let O=new ae,q=new U(wn,ue);q.scale.y=.82,O.add(q);let K=new U(new Ft(.012,.02,.1,6),ue);K.position.set(.09,.02,0),K.rotation.z=-1,O.add(K);let ht=new U(new Ft(.028,.04,.03,8),ue);ht.position.y=.075,O.add(ht),O.position.set(P-.35,.885,L-.25),O.rotation.y=B*1.1,s.add(O);let st=new U(new Ft(.09,.06,.03,10),r.porcelain);st.position.set(P+.15,.87,L+.42),s.add(st);for(let mt=0;mt<5;mt++){let Dt=new U(new Kt(.016,6,5),new G({color:mt%2?12589090:14200912,roughness:.3}));Dt.position.set(P+.15+Math.sin(mt*2.2)*.045,.9,L+.42+Math.cos(mt*1.8)*.045),s.add(Dt)}});{let P=new Mn(new zi(.035,6),new G({color:12589090,roughness:.9,side:we}),90),L=new ke;be(313);for(let B=0;B<90;B++)L.position.set((et()-.5)*5.5,.03,-1-et()*16),L.rotation.set(-Math.PI/2+(et()-.5)*.4,0,et()*6.28),L.scale.setScalar(.6+et()),L.updateMatrix(),P.setMatrixAt(B,L.matrix);s.add(P)}let Un=()=>fe(128,96,(P,L,B)=>{P.fillStyle="#b8a583",P.fillRect(0,0,L,B),be(Math.random()*999|0),P.fillStyle="rgba(70,58,40,0.85)",P.fillRect(6,B*.55,L-12,B*.38);for(let q=0;q<7;q++){let K=14+q*((L-28)/6);P.fillStyle="rgba(58,46,34,0.9)",P.beginPath(),P.ellipse(K,B*.46,6,8,0,0,Math.PI*2),P.fill(),P.fillRect(K-7,B*.52,14,B*.3)}P.filter="blur(2.5px)",P.drawImage(P.canvas,0,0),P.filter="none";let O=P.createRadialGradient(L/2,B/2,B*.3,L/2,B/2,L*.75);O.addColorStop(0,"rgba(0,0,0,0)"),O.addColorStop(1,"rgba(40,28,14,0.55)"),P.fillStyle=O,P.fillRect(0,0,L,B)});[[-14.7,-6.5,Math.PI/2],[-14.7,-14,Math.PI/2],[14.7,-15.5,-Math.PI/2]].forEach(([P,L,B])=>{let O=p(.06,.66,.9,r.wood,P+(P<0?.02:-.02),2.2,L,{}),q=m(.78,.54,new G({map:Un(),roughness:.9}),P+(P<0?.08:-.08),2.2,L,B);q.rotation.z=(Math.random()-.5)*.05});{let P=new G({map:pn("\u5C0F\u5FC3\u5730\u6ED1","#3a2f16","#d8c23a",88),roughness:.8}),L=m(.44,.6,P,24.5,.32,-6.9,.5);L.rotation.x=-.22;let B=m(.44,.6,P,24.52,.32,-6.86,.5+Math.PI);B.rotation.x=.22,R(24.3,-7.1,24.75,-6.7);let O=new U(new Ft(.16,.13,.34,10),new G({color:9312788,roughness:.7}));O.position.set(33.4,.17,-7.4),s.add(O);let q=new U(new Ft(.014,.014,1.3,5),r.wood);q.position.set(33.5,.75,-7.45),q.rotation.z=.35,s.add(q);for(let ht=0;ht<3;ht++){let st=new U(new de(.46,.1,.46),r.wood);st.position.set(38.9,.3+ht*.24,11.8),st.rotation.y=ht*.16,s.add(st);let mt=new U(new de(.46,.4,.08),r.wood);mt.position.set(38.9,.5+ht*.24,12.02),mt.rotation.y=ht*.16,s.add(mt)}R(38.6,11.5,39.2,12.2);let K=new U(new on(.09,.018,6,14),r.steelDark);K.position.set(30,2.86,-7.62),K.rotation.x=Math.PI/2,s.add(K)}{let P=fe(160,160,(st,mt,Dt)=>{st.fillStyle="#e6dcc4",st.beginPath(),st.arc(80,80,74,0,Math.PI*2),st.fill(),st.strokeStyle="#3a2f22",st.lineWidth=5,st.stroke(),st.fillStyle="#3a2f22";for(let ct=0;ct<12;ct++){let zt=ct/12*Math.PI*2;st.fillRect(80+Math.cos(zt)*62-2,80+Math.sin(zt)*62-2,ct%3===0?6:3,ct%3===0?6:3)}st.strokeStyle="#2a2018",st.lineWidth=6,st.beginPath(),st.moveTo(80,80),st.lineTo(80+Math.cos(-Math.PI/2-.05)*38,80+Math.sin(-Math.PI/2-.05)*38),st.stroke(),st.lineWidth=4,st.beginPath(),st.moveTo(80,80),st.lineTo(80+Math.cos(-Math.PI/2-.21)*56,80+Math.sin(-Math.PI/2-.21)*56),st.stroke()}),L=m(1.1,1.1,new G({map:P,transparent:!0,roughness:.85}),47.8,5,22,-Math.PI/2);L.rotation.z=.01,p(2.2,1.4,.08,r.wood,47.8,2.2,22,{});for(let st=0;st<4;st++)for(let mt=0;mt<8;mt++){if((st*8+mt)%5===0)continue;let Dt=new U(new de(.02,.1,.05),Ie);Dt.position.set(47.74,2.65-st*.3,21.1+mt*.26),s.add(Dt)}let B=new U(new Kt(.05,10,8,0,Math.PI*2,0,Math.PI*.6),Ie);B.position.set(45.5,1.2,20.6),s.add(B);let O=new G({color:9073730,metalness:.9,roughness:.25,envMapIntensity:1.6});p(1.9,2.6,.12,O,27.5,1.3,14.25,{}),p(.06,2.6,.16,r.steelDark,27.5,1.3,14.22,{}),p(2.3,.2,.2,r.steelDark,27.5,2.75,14.25,{});let q=fe(64,24,st=>{st.fillStyle="#150e08",st.fillRect(0,0,64,24),st.fillStyle="#e75c2c",st.font="18px monospace",st.textAlign="center",st.textBaseline="middle",st.fillText("\u2014",32,13)}),K=m(.4,.15,new G({map:q,emissive:10502168,emissiveIntensity:1.2,roughness:.6}),27.5,2.95,14.32,0);e.dyn.elevInd={mesh:K,tex:q};let ht=fe(128,128,(st,mt,Dt)=>{let ct=st.createLinearGradient(0,Dt,0,0);ct.addColorStop(0,"rgba(200,220,210,0.16)"),ct.addColorStop(.5,"rgba(200,220,210,0.03)"),ct.addColorStop(1,"rgba(200,220,210,0)"),st.fillStyle=ct,st.fillRect(0,0,mt,Dt);for(let zt=0;zt<14;zt++){let ee=Math.random()*mt,he=Dt-Math.random()*Dt*.45;st.strokeStyle="rgba(225,240,235,0.10)",st.lineWidth=1,st.beginPath(),st.moveTo(ee,he),st.lineTo(ee+(Math.random()-.5)*4,Dt),st.stroke()}});m(5.9,3.3,new ne({map:ht,transparent:!0,depthWrite:!1}),36,1.7,29.85,Math.PI)}{let P=new ne({color:402206,transparent:!0,opacity:.75,depthWrite:!1,side:we});e.dyn.kelps=[];for(let q=0;q<8;q++){let K=3+Math.random()*3.5,ht=new U(new se(.5+Math.random()*.5,K),P);ht.position.set(-16+q*5+Math.random()*2,K/2-.4,25.6+Math.random()*.8),s.add(ht),e.dyn.kelps.push({mesh:ht,phase:q*1.4})}let L=new ne({color:135187,transparent:!0,opacity:.9,depthWrite:!1}),B=new U(new Ft(1.1,1.1,.1,14),L);B.position.set(2,.9,25.9),B.rotation.z=.5,B.rotation.x=.3,s.add(B);for(let q=0;q<3;q++){let K=new U(new de(.42,.9,.42),L);K.position.set(.4+q*1.6,.5+q%2*.35,26+q%2*.4),K.rotation.set(.4*q,q,.3),s.add(K)}let O=new G({color:1849896,roughness:.9,transparent:!0,opacity:.75});for(let q=0;q<12;q++){let K=m(3.4,.28+Math.random()*.3,O,-17.2+q*3.6,.2,23.93,Math.PI);K.rotation.z=(Math.random()-.5)*.06}}{let P=new G({color:12107442,roughness:.35,transparent:!0,opacity:.34,side:we,envMapIntensity:1.4,depthWrite:!1});e.dyn.strips=[],[[-17.1,19.6],[-17.1,-7.2]].forEach(([B,O])=>{for(let q=0;q<7;q++){let K=new U(new se(.46,2.6),P);K.position.set(B-1.55+q*.5,1.65,O),s.add(K),e.dyn.strips.push({mesh:K,phase:q*.9+O})}});let L=new G({color:14212562,roughness:.95,transparent:!0,opacity:.09,depthWrite:!1});for(let B=0;B<6;B++){let O=m(.5+Math.random()*.7,.4+Math.random()*.5,L,-18.82,.6+Math.random()*1.6,-4+B*4+Math.random()*2,Math.PI/2);O.rotation.z=Math.random()*3}}{let P=new G({...Qc(.55,.7),envMapIntensity:.4});P.userData.tileEvery=2.2;let L=(B,O,q,K,ht=0)=>p(B,1,O,M(P,Math.max(B,O),1),q,.5,K,{ry:ht});L(29.4,.08,0,-.34),L(29.4,.08,0,-19.66),L(.08,19.4,-14.66,-10),L(.08,19.4,14.66,-10),p(29.4,.05,.1,r.goldFoil,0,1.02,-.36,{}),p(29.4,.05,.1,r.goldFoil,0,1.02,-19.64,{}),p(.1,.05,19.4,r.goldFoil,-14.64,1.02,-10,{}),p(.1,.05,19.4,r.goldFoil,14.64,1.02,-10,{})}{let P=new G({color:10358808,roughness:.62,emissive:1835781,side:we}),L=(B,O,q,K,ht)=>{let st=[];for(let Dt=0;Dt<=10;Dt++){let ct=Dt/10;st.push(new A(B+(q-B)*ct,ht-Math.sin(ct*Math.PI)*.55,O+(K-O)*ct))}let mt=new U(new Pn(new bn(st),16,.09,7),P);s.add(mt);for(let[Dt,ct]of[[B,O],[q,K]]){let zt=new U(new fn(.05,.34,7),new G({color:13081146,metalness:.5,roughness:.5}));zt.position.set(Dt,ht-.2,ct),s.add(zt)}};for(let B=0;B<4;B++)L(-14.62,-2-B*4.4,-14.62,-6-B*4.4,4.3),L(14.62,-2-B*4.4,14.62,-6-B*4.4,4.3);L(-6.5,-.34,-2.4,-.34,4.6),L(2.4,-.34,6.5,-.34,4.6)}{e.dyn.flames=[];let P=new G({color:11043886,metalness:.85,roughness:.35}),L=new G({color:12587032,roughness:.45,emissive:4195850}),B=fe(64,96,(Ze,gn,Rn)=>{let en=Ze.createRadialGradient(gn/2,Rn*.62,2,gn/2,Rn*.55,gn*.55);en.addColorStop(0,"rgba(255,246,214,1)"),en.addColorStop(.35,"rgba(255,196,110,0.85)"),en.addColorStop(.75,"rgba(235,110,40,0.3)"),en.addColorStop(1,"rgba(200,60,20,0)"),Ze.fillStyle=en,Ze.beginPath(),Ze.ellipse(gn/2,Rn*.55,gn*.32,Rn*.46,0,0,Math.PI*2),Ze.fill()}),O=new ne({map:B,transparent:!0,blending:In,depthWrite:!1,fog:!1});ft.forEach(([Ze,gn],Rn)=>{let en=new U(new Ft(.035,.055,.05,10),P);en.position.set(Ze-.12,.885,gn+.3),s.add(en);let Zs=new U(new Ft(.016,.016,.16,8),L);Zs.position.set(Ze-.12,.985,gn+.3),s.add(Zs);let $s=O.clone(),Li=new U(new se(.09,.14),$s);Li.position.set(Ze-.12,1.115,gn+.3),Li.onBeforeRender=(Gx,Vx,Ld)=>{Li.quaternion.copy(Ld.quaternion)},s.add(Li),e.dyn.flames.push({mesh:Li,mat:$s,phase:Rn*1.7,y0:1.115})});let q=new de(.012,.012,.24),K=new G({color:7223840,roughness:.5}),ht=new Mn(q,K,ft.length*16),st=new Ft(.02,.025,.05,6),mt=new Mn(st,r.porcelain,ft.length*8),Dt=new fn(.06,.16,5,1,!0),ct=new G({color:14168618,roughness:.7,side:we}),zt=new Mn(Dt,ct,ft.length*8),ee=0,he=0,Le=new ke;ft.forEach(([Ze,gn])=>{for(let Rn=0;Rn<8;Rn++){let en=Rn/8*Math.PI*2,Zs=Ze+Math.cos(en)*.98,$s=gn+Math.sin(en)*.98;for(let Li of[-.012,.012])Le.position.set(Zs+Math.cos(en+Math.PI/2)*Li,.805,$s+Math.sin(en+Math.PI/2)*Li),Le.rotation.set(0,-en+Math.PI/2,0),Le.updateMatrix(),ht.setMatrixAt(ee++,Le.matrix);Le.position.set(Zs+Math.cos(en)*.1,.81,$s+Math.sin(en)*.1),Le.rotation.set(0,-en,0),Le.updateMatrix(),mt.setMatrixAt(he,Le.matrix),Le.position.set(Ze+Math.cos(en)*.78,.9,gn+Math.sin(en)*.78),Le.rotation.set(0,-en+Math.PI,0),Le.updateMatrix(),zt.setMatrixAt(he,Le.matrix),he++}}),s.add(ht,mt,zt)}{let P=new G({color:9068596,roughness:.8}),L=[14168618,15185484,14183066].map(B=>new G({color:B,roughness:.65}));[[-4.6,-17.2],[4.6,-17.2]].forEach(([B,O])=>{let q=new U(new Ft(.22,.13,.36,10),P);q.position.set(B,.78,O),s.add(q);let K=new U(new Ft(.02,.14,.6,8),r.steelDark);K.position.set(B,.3,O),s.add(K),be(B*7+100);for(let ht=0;ht<14;ht++){let st=new U(new Kt(.05+et()*.035,7,6),L[ht%3]);st.position.set(B+(et()-.5)*.4,1.02+et()*.22,O+(et()-.5)*.35),st.scale.y=.8,s.add(st)}})}{let P=new G({color:10490392,roughness:.35,envMapIntensity:.9}),L=new U(new Ft(.07,.07,.4,10),P);L.position.set(18.5,.62,-7.72),s.add(L);let B=new U(new Ft(.014,.014,.12,6),r.steelDark);B.position.set(18.55,.86,-7.7),B.rotation.z=.7,s.add(B),m(.3,.36,new G({map:pn("\u706D\u706B\u5668","#e8e2d2","#8e1016",100),roughness:.9}),18.5,1.35,-7.79,0),p(.28,.36,.12,new G({color:3817544,roughness:.5}),39.9,1.5,12.5,{}),m(.5,.2,new G({map:pn("\u4E0A\u5DE5\u6253\u5361","#d8d2c2","#2e3630",72),roughness:.9}),39.83,1.85,12.5,-Math.PI/2);for(let K=0;K<2;K++)for(let ht=0;ht<5;ht++){let st=new U(new de(.008,.12,.07),new G({color:14208952,roughness:.9}));st.position.set(39.9,1.1-K*.18,12.2+ht*.12),s.add(st)}let O=new G({color:1316890,roughness:.04,metalness:.4,envMapIntensity:2.2,transparent:!0,opacity:.72});[[21,-5.2,1.1],[36.8,6.5,1.4]].forEach(([K,ht,st])=>{let mt=new U(new zi(1,18),O);mt.rotation.x=-Math.PI/2,mt.scale.set(st,st*.5,1),mt.position.set(K,.015,ht),s.add(mt)});let q=new G({color:3945514,roughness:.95,transparent:!0,opacity:.5});for(let K=0;K<4;K++){let ht=m(.14+Math.random()*.2,.7+Math.random()*1.2,q,19+K*5.2,2.4,-7.79,0);ht.rotation.z=(Math.random()-.5)*.06}}{p(.34,.03,.24,new G({color:14208952,roughness:.9}),45.4,1.2,22.8,{}),p(.3,.015,.2,new G({color:9310230,roughness:.8}),45.42,1.225,22.78,{ry:.12});for(let ct=0;ct<4;ct++)p(.16,.012,.09,new G({color:11735580,roughness:.7}),45.45,1.2+ct*.014,21.4+ct%2*.02,{ry:ct*.14});let P=new U(new Ft(.07,.08,.34,12),new G({color:3047496,roughness:.3,envMapIntensity:1.2}));P.position.set(45.6,1.35,25.2),s.add(P);let L=new U(new de(.3,.03,.14),r.wood);L.position.set(45.35,1.19,23.6),L.rotation.y=-.2,s.add(L);let B=new ae,O=new U(new Ft(.025,.03,1.35,10),r.gold);O.position.y=.68,B.add(O);let q=new U(new Ft(.2,.24,.05,12),r.gold);q.position.y=.03,B.add(q);let K=new U(new de(.7,.5,.03),new G({map:pn("\u559C\u5BB4 \xB7 \u5BB4\u4F1A\u5385 \u2192","#e7c25c","#6e0d12",56),roughness:.5,metalness:.3}));K.position.y=1.45,B.add(K),B.position.set(33.5,0,20.5),B.rotation.y=.5,s.add(B),R(33.2,20.2,33.8,20.8);let ht=new ae,st=new U(new de(1.1,.06,.6),r.wood);st.position.y=.28,ht.add(st);for(let ct of[-.5,.5]){let zt=new U(new on(.55,.022,8,20,Math.PI),r.gold);zt.position.set(ct,.3,0),zt.rotation.y=Math.PI/2,ht.add(zt)}let mt=new U(new Ft(.02,.02,1.1,8),r.gold);mt.rotation.z=Math.PI/2,mt.position.y=.85,ht.add(mt);for(let[ct,zt,ee,he]of[[-.25,.42,0,4864040],[.2,.4,.1,3490382],[.05,.62,-.05,7227950]]){let Le=new U(new de(.5,.22,.34),new G({color:he,roughness:.85}));Le.position.set(ct,zt,ee),Le.rotation.y=ct,ht.add(Le)}ht.position.set(29.5,0,16.5),ht.rotation.y=-.4,s.add(ht),R(28.9,16,30.1,17),[[30,18],[42,18],[30,26],[42,26]].forEach(([ct,zt])=>{let ee=new G({color:11735580,roughness:.6,emissive:2098182}),he=new U(new Kt(.09,8,8),ee);he.position.set(ct,2.6,zt+.56),s.add(he);for(let Ze of[-1,1]){let gn=new U(new on(.12,.035,6,12),ee);gn.position.set(ct+Ze*.13,2.62,zt+.56),gn.rotation.y=Ze*.7,gn.rotation.z=Ze*.5,s.add(gn);let Rn=new U(new se(.09,.5),ee);Rn.position.set(ct+Ze*.09,2.3,zt+.55),Rn.rotation.z=Ze*.25,Rn.rotation.y=.2,s.add(Rn)}let Le=new U(new Ft(.57,.57,.14,20,1,!0),ee);Le.position.set(ct,2.6,zt),s.add(Le)});let Dt=fe(256,200,(ct,zt,ee)=>{ct.fillStyle="#26201a",ct.fillRect(0,0,zt,ee),ct.strokeStyle="#8a6a34",ct.lineWidth=4,ct.strokeRect(6,6,zt-12,ee-12),ct.fillStyle="#d8c9a2",ct.font='22px "Noto Sans SC","Microsoft YaHei",sans-serif',ct.textAlign="center",ct.fillText("\u5BA2 \u623F \u4EF7 \u76EE",zt/2,34),ct.font='15px "Noto Sans SC","Microsoft YaHei",sans-serif',ct.textAlign="left",["\u6807\u51C6\u95F4 \u2026\u2026 128 \u5143","\u8C6A\u534E\u95F4 \u2026\u2026 188 \u5143","\u5957\u3000\u623F \u2026\u2026 288 \u5143","\u949F\u70B9\u623F \u2026\u2026 40 \u5143"].forEach((he,Le)=>{ct.fillText(he,30,72+Le*30)}),ct.fillStyle="#9a8a6a",ct.font="12px sans-serif",ct.textAlign="center",ct.fillText("\u4ECA\u65E5\u559C\u5BB4\u5305\u573A \xB7 \u6055\u4E0D\u63A5\u5F85\u6563\u5BA2",zt/2,ee-16)});m(1.15,.9,new G({map:Dt,roughness:.85}),47.8,3.4,24.6,-Math.PI/2)}{let P=new ne({color:135187,transparent:!0,opacity:.85,depthWrite:!1}),L=new ae,B=new U(new on(.9,.07,6,20),P);B.rotation.x=Math.PI/2+.5,L.add(B);let O=new U(new on(.5,.06,6,16),P);O.rotation.x=Math.PI/2+.5,O.position.y=.35,L.add(O);let q=new U(new Ft(.02,.02,2.4,5),P);q.position.y=1.4,q.rotation.z=.3,L.add(q),L.position.set(-11,1.6,26.4),s.add(L);let K=new ne({color:7212306,transparent:!0,opacity:.55,side:we,depthWrite:!1}),ht=new U(new se(.9,.9,4,4),K);ht.position.set(8,2.2,26),s.add(ht),e.dyn.veilDrift=ht,[[19.5,21.4],[17.5,21.4]].forEach(([ct,zt])=>{let ee=new U(new Ft(.03,.03,.9,8),r.steel);ee.position.set(ct,.45,zt),s.add(ee);let he=new U(new Kt(.045,8,6),r.steel);he.position.set(ct,.92,zt),s.add(he)});let st=[];for(let ct=0;ct<=8;ct++){let zt=ct/8;st.push(new A(19.5-zt*2,.86-Math.sin(zt*Math.PI)*.1,21.4))}let mt=new U(new Pn(new bn(st),10,.035,6),new G({color:7213075,roughness:.8}));s.add(mt);let Dt=new G({color:4861984,roughness:.95,transparent:!0,opacity:.6});for(let ct=0;ct<12;ct++){let zt=m(.32,.4+Math.random()*.3,Dt,-17.2+ct*3.6+1.78,.28,23.9,Math.PI);zt.rotation.z=(Math.random()-.5)*.2}}{let P=new G({color:4867648,metalness:.6,roughness:.6});for(let B=0;B<3;B++)p(.4,.04,2.4,P,-18.7,.4+B*.55,16.5,{});for(let B of[-1.15,1.15])p(.05,1.7,.05,P,-18.7,.85,16.5+B,{});R(-19,15.2,-18.4,17.8),be(505);for(let B=0;B<7;B++){let O=B%3,q=B%3;if(q===0){let K=new U(new Ft(.14,.1,.09,12),new G({color:15262938,roughness:.25,envMapIntensity:1}));K.position.set(-18.7,.47+O*.55,15.6+et()*1.8),s.add(K)}else if(q===1){let K=new U(new Ft(.07,.07,.16,10),new G({color:9075274,roughness:.4}));K.position.set(-18.7,.5+O*.55,15.6+et()*1.8),s.add(K)}else{let K=new U(new de(.3,.2,.34),new G({color:8019e3,roughness:.95}));K.position.set(-18.7,.53+O*.55,15.7+et()*1.6),K.rotation.y=et()*.4,s.add(K)}}m(2.2,.5,new G({map:pn("\u5B89\u5168\u751F\u4EA7 \xB7 \u4EBA\u4EBA\u6709\u8D23","#9aa294","#3a4038",60),roughness:.95,transparent:!0,opacity:.8}),-15.38,2.2,4,-Math.PI/2);let L=new U(new on(.22,.055,8,20),new G({color:7217176,roughness:.8}));L.position.set(-15.4,1.4,12),L.rotation.y=Math.PI/2,s.add(L),p(.06,.7,.7,new G({color:9310230,roughness:.7}),-15.36,1.4,12,{})}{let P=new G({color:790032,roughness:.6,metalness:.3});[[-5.5,14.5,.3],[.5,15.5,-.2],[5.5,14,.15]].forEach(([L,B,O])=>{let q=new U(new de(1.8,.5,4.2),P);q.position.set(L,.45,B),q.rotation.y=O,s.add(q);let K=new U(new de(1.6,.42,2.2),P);K.position.set(L,.9,B+.2),K.rotation.y=O,s.add(K)})}s.fog=new dr(854536,.016),e.dyn.fog=s.fog;let Fn=new hs(3351580,.7);s.add(Fn),e.dyn.ambient=Fn;let ei=new Tr(2760728,854536,.5);return s.add(ei),e}var pd=10817302,nh=3998727,Tx=16722466,ih=class{constructor(t,e,n=new A(0,0,1)){this.id=t,this.pos=e.clone(),this.normal=n.clone(),this.cords=[],this.group=new ae,this.group.position.copy(e),this._build()}_build(){let t=new G({color:13081146,metalness:.85,roughness:.35,emissive:2759685}),e=new U(new Ft(.055,.07,.03,10),t);e.rotation.x=Math.PI/2,this.group.add(e);let n=new bn([new A(0,0,.015),new A(0,-.01,.09),new A(0,-.075,.115),new A(0,-.12,.07)]),i=new U(new Pn(n,10,.016,6),t);this.group.add(i),this.marker=new U(new Kt(.035,8,8),new G({color:14200912,emissive:6703130,emissiveIntensity:1})),this.marker.position.set(0,-.05,.1),this.group.add(this.marker),this.group.quaternion.setFromUnitVectors(new A(0,0,1),this.normal),this.group.position.copy(this.pos)}setHighlight(t){this.highlighted=t,t||(this.marker.material.emissiveIntensity=1,this.marker.scale.setScalar(1))}pop(){this._pop=1}tick(t,e,n){if(this._pop>0){this._pop=Math.max(0,this._pop-t*3.2);let i=1+Math.sin(this._pop*Math.PI)*.9;this.marker.scale.setScalar(i),this.marker.material.emissiveIntensity=1+this._pop*7;return}if(this.highlighted){let i=5+Math.sin(e*9)*2.5;this.marker.material.emissiveIntensity=i,this.marker.scale.setScalar(1.7+Math.sin(e*9)*.25)}else n&&(this.marker.material.emissiveIntensity=2.2+Math.sin(e*4+this.pos.x)*1.4,this.marker.scale.setScalar(1.15+Math.sin(e*4+this.pos.x)*.12))}},wx=0,sh=class{constructor(t,e,n,i={}){this.sys=t,this.id="cord"+wx++,this.a=e,this.b=n,this.slack=i.slack??.5,this.tag=i.tag||"",this.rideable=i.rideable!==!1,this.fixedEnd=i.fixedEnd||null,this.heldEnd=null,this.mat=new G({color:pd,emissive:nh,emissiveIntensity:1.2,roughness:.75}),this.mesh=new U(new Xe,this.mat),this.mesh.castShadow=!1,this.mesh.userData.cord=this;let r=new Kt(.05,8,8),a=new G({color:13081146,metalness:.7,roughness:.4}),o=new fn(.035,.16,8),l=new G({color:9309202,roughness:.9});this.knotA=new ae,this.knotA.add(new U(r,a));let c=new U(o,l);c.position.y=-.11,this.knotA.add(c),this.knotB=this.knotA.clone(),this.knotA.userData={cord:this,end:"a"},this.knotB.userData={cord:this,end:"b"},this.knotA.traverse(h=>h.userData={cord:this,end:"a"}),this.knotB.traverse(h=>h.userData={cord:this,end:"b"}),this.curve=null,this.length=1,this._wave=0,e&&e.cords.push(this),n&&n.cords.push(this),this.rebuild()}endPos(t){if(this.heldEnd===t)return this.sys.handPos;let e=t==="a"?this.a:this.b;return e?e.pos:this.sys.handPos}rebuild(){let t=this.endPos("a"),e=this.endPos("b"),n=t.distanceTo(e);this.length=n;let i=this._settle>0?1+Math.sin(this._settle*Math.PI*2.2)*.55*this._settle:1,r=Math.min(1.35,n*.055*(1+this.slack)*i),a=t.clone().lerp(e,.5);a.y-=r;let o=t.clone().lerp(e,.25);o.y-=r*.72;let l=t.clone().lerp(e,.75);l.y-=r*.72,this.curve=new bn([t,o,a,l,e]);let c=this.mesh.geometry;this.mesh.geometry=new Pn(this.curve,16,.024,6),c&&c.dispose(),this.knotA.position.copy(t),this.knotB.position.copy(e)}pointAt(t){return this.curve.getPointAt(je.clamp(t,0,1))}vibrate(){this._wave=1}update(t){if(this._wave>0){this._wave=Math.max(0,this._wave-t*1.4);let e=1+Math.sin(performance.now()*.04)*.012*this._wave;this.mesh.scale.set(1,e,1),this.mat.emissiveIntensity=1.2+this._wave*1.5}this._settle>0&&(this._settle=Math.max(0,this._settle-t*1.8),this.rebuild()),this.heldEnd&&this.rebuild()}detach(t){let e=t==="a"?this.a:this.b;if(e){let n=e.cords.indexOf(this);n>=0&&e.cords.splice(n,1)}t==="a"?this.a=null:this.b=null,this.heldEnd=t,this.rebuild()}attach(t,e){t==="a"?this.a=e:this.b=e,e.cords.push(this),this.heldEnd=null,this._settle=1,this.rebuild()}otherHook(t){return this.a===t?this.b:this.a}},ll=class{constructor(t){this.scene=t,this.trail=[],this.maxLen=46,this.segments=4,this.glow=0,this.mat=new G({color:pd,emissive:nh,emissiveIntensity:1.4,roughness:.8}),this.mesh=new U(new Xe,this.mat),this.mesh.frustumCulled=!1,t.add(this.mesh),this._rebuildTimer=0}record(t){let e=t.clone();if(e.y=.06,this.trail.length===0||this.trail[this.trail.length-1].distanceToSquared(e)>.55)for(this.trail.push(e);this.trail.length>this.maxLen;)this.trail.shift()}shorten(){for(this.maxLen=Math.max(10,this.maxLen-12);this.trail.length>this.maxLen;)this.trail.shift();this.segments=Math.max(0,this.segments-1);let t=1-this.segments*.12;this.mat.color.setRGB(.65*(1-t*.5),.05,.07)}update(t,e){if(this.glow=Math.max(0,this.glow-t*.7),this.mat.emissiveIntensity=1.4+this.glow*9,this.mat.emissive.setHex(this.glow>.15?Tx:nh),this._rebuildTimer-=t,this._rebuildTimer>0||this.trail.length<2)return;this._rebuildTimer=.12;let n=this.trail.slice();n.push(e.clone());let i=new bn(n),r=this.mesh.geometry;this.mesh.geometry=new Pn(i,Math.min(64,n.length*2),.016,5),r&&r.dispose()}},cl=class{constructor(t,e){this.scene=t,this.audio=e,this.hooks=new Map,this.cords=[],this.held=null,this.handPos=new A,this.group=new ae,t.add(this.group),this.onTopologyChange=null,this.onNoise=null}addHook(t,e,n,i,r=0,a=0,o=1,l=!1){let c=new ih(t,new A(e,n,i),new A(r,a,o).normalize());return c.locked=l,l&&(c.marker.visible=!1),this.hooks.set(t,c),this.group.add(c.group),c}hook(t){return this.hooks.get(t)}addCord(t,e,n={}){let i=new sh(this,this.hooks.get(t),this.hooks.get(e),n);return this.cords.push(i),this.group.add(i.mesh,i.knotA,i.knotB),i}removeCord(t){["a","b"].forEach(n=>{let i=n==="a"?t.a:t.b;if(i){let r=i.cords.indexOf(t);r>=0&&i.cords.splice(r,1)}});let e=this.cords.indexOf(t);e>=0&&this.cords.splice(e,1),this.group.remove(t.mesh,t.knotA,t.knotB),t.mesh.geometry.dispose()}clearAllCords(){[...this.cords].forEach(t=>this.removeCord(t))}grab(t,e){return this.held?!1:(t.detach(e),this.held=t,this.audio?.pluck(70+Math.random()*30,.35),t.vibrate(),this.onTopologyChange?.(t),!0)}hang(t){if(!this.held)return!1;let e=this.held;return e.attach(e.heldEnd===null?"a":e.heldEnd,t),this.held=null,this.audio?.pluck(120+Math.random()*60,.4),this.audio?.ratchet(),t.pop(),e.vibrate(),this.onTopologyChange?.(e),this.onNoise?.(.25,t.pos),!0}nearestTarget(t,e,n=2.7){let i=null,r=.62,a=new A;if(this.held)for(let o of this.hooks.values()){if(o.locked||o.cords.length>=3)continue;a.copy(o.pos).sub(t);let l=a.length();if(l>n)continue;a.normalize();let c=a.dot(e);c>r&&(r=c,i={type:"hook",hook:o,pos:o.pos,dist:l})}else for(let o of this.cords)if(o.tag!=="deco")for(let l of["a","b"]){if(o.fixedEnd===l)continue;let c=o.endPos(l);a.copy(c).sub(t);let h=a.length();if(h>n)continue;a.normalize();let u=a.dot(e);u>r+Math.min(.3,h*.06)&&(r=u,i={type:"cordEnd",cord:o,end:l,pos:c,dist:h})}return i}nearestHook(t,e=2.4){let n=null,i=e;for(let r of this.hooks.values()){if(r.locked)continue;let a=r.pos.distanceTo(t);a<i&&(i=a,n=r)}return n}update(t,e){this.handPos.copy(e),this._t=(this._t||0)+t;for(let n of this.cords)n.update(t);for(let n of this.hooks.values()){if(n.locked)continue;let i=!!this.held&&n.cords.length<3&&n.pos.distanceToSquared(e)<100;n.tick(t,this._t,i)}}};var hl=s=>new G({map:cd(s),roughness:.6});function md({suit:s=2630174,shirt:t=14210248,skin:e="waiter",hair:n=1314828,dress:i=!1,armMat:r=null,gloves:a=null,lapelTrim:o=null}){let l=new ae,c=new G({color:s,roughness:.82}),h=new G({color:t,roughness:.85}),u=new G({color:n,roughness:.9}),d=new G({color:1709588,roughness:.9});if(i){let S=[];for(let C=0;C<=8;C++){let _=C/8;S.push(new Lt(.3-_*.14+Math.sin(_*3.14)*.02,_*1.28))}let E=new U(new Ai(S,10),c);E.castShadow=!0,l.add(E)}else{for(let I of[-1,1]){let N=new U(new Ft(.075,.085,.72,8),d);N.position.set(I*.1,.42,0),N.castShadow=!0,l.add(N);let Z=new U(new de(.11,.07,.24),new G({color:854793,roughness:.4}));Z.position.set(I*.1,.045,.04),l.add(Z);let Q=new U(new Ft(.088,.088,.03,8),new G({color:1314830,roughness:.95}));Q.position.set(I*.1,.1,0),l.add(Q)}let S=[],E=[[.16,0],[.19,.12],[.2,.3],[.185,.44],[.21,.5],[.05,.56]];for(let[I,N]of E)S.push(new Lt(I,N));let C=new U(new Ai(S,10),c);C.scale.set(1.25,1,.85),C.position.y=.78,C.castShadow=!0,l.add(C);let _=new U(new se(.12,.26),h);_.position.set(0,1.14,.155),l.add(_);let T=new G({color:s,roughness:.6,envMapIntensity:.8});for(let I of[-1,1]){let N=new U(new se(.085,.24),T);if(N.position.set(I*.085,1.16,.165),N.rotation.z=I*-.32,N.rotation.y=I*.28,l.add(N),o){let Z=new U(new se(.016,.24),new G({color:o,metalness:.65,roughness:.35}));Z.position.set(I*.052,1.16,.172),Z.rotation.z=I*-.32,Z.rotation.y=I*.28,l.add(Z)}}let D=new G({color:789e3,metalness:.4,roughness:.4});for(let I=0;I<3;I++){let N=new U(new Ft(.011,.011,.006,8),D);N.rotation.x=Math.PI/2,N.position.set(.015,1-I*.09,.185-I*.012),l.add(N)}}let f=r||c,g={},y=a?new G({color:a,roughness:.55}):hl(e);for(let S of[-1,1]){let E=new ae;E.position.set(S*.24,1.3,0);let C=new U(new Ft(.05,.045,.32,8),c);C.position.y=-.16,E.add(C);let _=new ae;_.position.y=-.33;let T=new U(new Ft(.042,.038,.3,8),f);T.position.y=-.15,_.add(T);let D=new U(new Ft(.041,.041,.022,8),h);D.position.y=-.29,_.add(D);let I=new U(new Kt(.05,8,8),y);I.position.y=-.32,I.scale.set(.85,1.1,.95),_.add(I),E.add(_),E.rotation.z=S*.1,l.add(E),g[S<0?"left":"right"]={shoulder:E,elbow:_,hand:I}}let p=new U(new Ft(.045,.05,.09,8),hl(e));p.position.y=1.4,l.add(p);let m=new ae;m.position.y=1.56;let b=new U(new Kt(.115,14,12),hl(e));b.scale.set(.92,1.08,.98),b.rotation.y=Math.PI/2,b.castShadow=!0,m.add(b);for(let S of[-1,1]){let E=new U(new Kt(.022,6,6),hl(e));E.position.set(S*.105,-.01,-.01),E.scale.set(.5,1,.7),m.add(E)}let R=new U(new Kt(.118,12,10,0,Math.PI*2,0,Math.PI*.42),u);R.scale.set(.96,1,1.06),R.position.set(0,.03,-.035),R.rotation.x=-.22,m.add(R);let M=new U(new Kt(.119,12,10,Math.PI*.55,Math.PI*.9,0,Math.PI*.8),u);M.rotation.y=Math.PI,M.scale.set(.98,1.03,1),M.position.set(0,.014,-.012),m.add(M);for(let S of[-1,1]){let E=new U(new se(.03,.06),u);E.position.set(S*.108,-.03,.02),E.rotation.y=S*Math.PI/2,m.add(E)}return l.add(m),{group:l,arms:g,head:m}}var ul=class{constructor(t){let e=md({suit:7213075,shirt:15261904,skin:"mc",hair:854536,lapelTrim:13081146});this.group=e.group,this.arms=e.arms,this.head=e.head;let n=new G({color:13081146,metalness:.7,roughness:.35});for(let f of[-1,1]){let g=new U(new fn(.035,.07,6),n);g.rotation.z=f*Math.PI/2,g.position.set(f*.035,1.37,.13),this.group.add(g)}let i=new U(new se(.045,.05),new G({color:11538968,roughness:.5,emissive:1835780}));i.position.set(-.14,1.2,.168),i.rotation.z=.5,this.group.add(i);for(let f of[-1,1]){let g=new U(new Kt(.008,6,6),n);g.position.y=-.29,g.position.x=f*.043,this.arms[f<0?"left":"right"].elbow.add(g)}{let f=new ae,g=new G({color:12587032,roughness:.65,emissive:2622986});for(let m=0;m<6;m++){let b=new U(new Kt(.022,6,5),g),R=m/6*Math.PI*2;b.position.set(Math.cos(R)*.028,Math.sin(R)*.028,0),b.scale.z=.5,f.add(b)}let y=new U(new Kt(.016,6,5),new G({color:14200912,roughness:.5}));y.position.z=.012,f.add(y);let p=new U(new fn(.014,.05,5),new G({color:3038260,roughness:.8}));p.position.set(-.04,-.03,-.005),p.rotation.z=1.1,f.add(p),f.position.set(.13,1.22,.15),this.group.add(f)}let r=new G({color:14998466,roughness:.22,envMapIntensity:1.6,transparent:!0,opacity:.97,emissive:788998}),a=new Mn(new Kt(1,6,6),r,90),o=new ke;be(404);for(let f=0;f<90;f++){let g=(et()-.5)*1.5,y=-.35-et()*.45,p=.115,m=Math.sin(g)*Math.cos(y)*p*.92,b=Math.sin(y)*p*1.08,R=Math.cos(g)*Math.cos(y)*p*.98;o.position.set(m,b+.01,R+.005),o.scale.setScalar(.006+et()*.012),o.updateMatrix(),a.setMatrixAt(f,o.matrix)}this.head.add(a),this.roe=a;let l=new ae,c=new U(new Ft(.018,.023,.18,8),new G({color:1841688,roughness:.5}));l.add(c);let h=new U(new Kt(.035,10,8),new G({color:7829367,metalness:.9,roughness:.35}));h.position.y=.11,l.add(h),l.position.set(0,-.32,.06),l.rotation.x=-.9,this.arms.right.elbow.add(l);let u=new G({color:1118481,roughness:.8}),d=new U(new Pn(new bn([new A(.28,.95,.12),new A(.34,.5,.3),new A(.2,.05,.5),new A(-.3,.01,.7),new A(-.5,-.4,.75)]),16,.012,6),u);this.group.add(d),this.arms.right.shoulder.rotation.x=-.9,this.arms.right.elbow.rotation.x=-.9,this.arms.left.shoulder.rotation.z=-.15,this.group.position.set(0,.6,-18.2),this.group.scale.setScalar(1.06),t.add(this.group),this.gestureT=-1,this.sync=0,this.silenced=!1,this.speakT=0,this._t=0,this._bowT=-1,this._nextBow=11+Math.random()*8}gesture(){this.gestureT=0}speak(t){this.speakT=Math.max(this.speakT,t)}update(t,e){this._t+=t;let n=1+Math.sin(this._t*1.1)*.008;if(this.group.scale.set(1.06,1.06*n,1.06),this.group.rotation.z=Math.sin(this._t*.23)*.012,e.z<1&&Math.abs(e.x)<16&&!this.silenced){let r=e.x-this.group.position.x,a=e.z-this.group.position.z,o=Math.atan2(r,a),l=.4+this.sync*2.2;this.head.rotation.y+=(je.clamp(o,-.9,.9)-this.head.rotation.y)*t*l,this.group.rotation.y+=(je.clamp(o*.3,-.25,.25)-this.group.rotation.y)*t*.15}if(this.speakT>0&&!this.silenced){this.speakT-=t;let r=Math.sin(this._t*11)*.5+Math.sin(this._t*17.3)*.3;this.roe.material.emissiveIntensity=.4+Math.max(0,r)*1.6,this.roe.material.emissive.setHex(3812888),this.head.rotation.x=.04+Math.max(0,r)*.045,this.roe.scale.setScalar(1+Math.max(0,r)*.05)}else this.silenced||(this.roe.material.emissiveIntensity+=(1-this.roe.material.emissiveIntensity)*t*3,this.roe.scale.setScalar(1),this.head.rotation.x+=(0-this.head.rotation.x)*t*2);if(this.gestureT>=0){this.gestureT+=t;let r=Math.min(1,this.gestureT/.8),a=Math.sin(r*Math.PI)*.9;this.arms.left.shoulder.rotation.x=-a,this.gestureT>2.2&&(this.gestureT=-1,this.arms.left.shoulder.rotation.x=0)}if(!this.silenced&&this.gestureT<0&&this.speakT<=0)if(this._bowT<0)this._nextBow-=t,this._nextBow<=0&&(this._bowT=0,this._nextBow=16+Math.random()*14);else{this._bowT+=t;let r=Math.min(1,this._bowT/2.4),a=Math.sin(r*Math.PI)*.42;this.group.rotation.x=a,this._bowT>=2.4&&(this._bowT=-1,this.group.rotation.x=0)}this.silenced||(this.arms.right.elbow.rotation.z=Math.sin(this._t*.7)*.04),this.silenced&&(this.head.rotation.x+=(.5-this.head.rotation.x)*t,this.arms.right.shoulder.rotation.x+=(0-this.arms.right.shoulder.rotation.x)*t*2,this.arms.right.elbow.rotation.x+=(0-this.arms.right.elbow.rotation.x)*t*2,this.roe.material.emissiveIntensity+=(.05-this.roe.material.emissiveIntensity)*t)}},Ws=class{constructor(t,e){this.id=e;let n=ud(),i=new G({...n}),r=md({suit:1513500,shirt:14999764,skin:"waiter",hair:1051914,armMat:i,gloves:15263454});this.group=r.group,this.arms=r.arms,this.head=r.head;let a=new U(new Ft(.052,.055,.06,8),i);a.position.y=1.44,this.group.add(a);let o=new G({color:789520,roughness:.6});for(let g of[-1,1]){let y=new U(new fn(.03,.06,6),o);y.rotation.z=g*Math.PI/2,y.position.set(g*.03,1.37,.135),this.group.add(y)}let l=["08","11","14"][e]||String(e),c=new U(new se(.055,.026),new G({map:pn("\u5BB4\xB7"+l,"#e8e0cc","#403830",22),roughness:.4,metalness:.3}));c.position.set(.12,1.26,.163),c.rotation.y=.06,this.group.add(c);let h=new G({color:658190,roughness:.7});for(let g of[-1,1]){let y=new U(new se(.02,.3),h);y.position.set(g*.062,1.1,.162),y.rotation.z=g*-.18,this.group.add(y)}let u=new ae,d=new U(new Ft(.24,.22,.02,14),new G({color:10133670,metalness:.9,roughness:.3}));if(u.add(d),e===0){let g=new U(new Ft(.13,.15,.09,12),new G({...ol()}));g.position.y=.06,u.add(g)}else if(e===1){let g=new G({color:15262938,roughness:.18,envMapIntensity:1.2});for(let y=0;y<6;y++){let p=new U(new Ft(.085-y*.002,.06,.045,10),g);p.position.y=.035+y*.042,p.rotation.y=y*.4,u.add(p)}}else{let g=new U(new Kt(.15,14,10,0,Math.PI*2,0,Math.PI*.5),new G({color:12104872,metalness:.95,roughness:.18,envMapIntensity:1.8}));g.position.y=.02,u.add(g);let y=new U(new Kt(.02,8,6),new G({color:13081146,metalness:.8,roughness:.3}));y.position.y=.17,u.add(y)}u.position.set(-.22,1.08,.24),this.group.add(u),this.tray=u;let f=new U(new se(.34,.42),new G({color:986898,roughness:.9,side:we}));f.position.set(0,.72,.19),f.rotation.x=.06,this.group.add(f),this.group.scale.setScalar(.98+e*.045),this.head.rotation.z=(e-1)*.06,this.arms.left.shoulder.rotation.x=-.85,this.arms.left.elbow.rotation.x=-.75,this.arms.right.shoulder.rotation.x=Math.PI-.2,this.arms.right.elbow.rotation.x=.25,this.group.rotation.x=.045,t.add(this.group),this.state="idle",this.cord=null,this.t=0,this.dir=1,this.speed=.92,this.standTimer=0,this.targetPos=new A,this.yaw=0,this._bob=Math.random()*6,this.visible=!1,this.group.visible=!1}setVisible(t){this.visible=t,this.group.visible=t}mountNearest(t,e){let n=null,i=1e9;for(let r of t.cords){if(!r.rideable||r.tag==="deco"||!r.a||!r.b)continue;let a=r.pointAt(.5).distanceTo(e);a<i&&(i=a,n=r)}if(n){this.cord=n,this.t=.5,this.dir=Math.random()>.5?1:-1,this.state="ride";let r=n.pointAt(this.t);this.group.position.set(r.x,0,r.z)}else this.state="stand",this.standTimer=3}onTopologyChange(t,e){this.cord===e&&this.state==="ride"&&(this.state="stand",this.standTimer=2.6,this.cord=null)}startChase(t=!1){if(!(this.state==="escorting"||this.state==="chase")){if(t||this.state==="alert"){this.state="chase";return}this.state="alert",this.alertTimer=.9}}stopChase(t){(this.state==="chase"||this.state==="alert")&&(this.state="stand",this.standTimer=1.2)}update(t,e,n,i,r){if(!this.visible)return;this._bob+=t;let a=this.group,o=!1,l=new A;if(this.state==="alert"){this.alertTimer-=t;let d=n.x-a.position.x,f=n.z-a.position.z,y=Math.atan2(d,f)-this.yaw;for(;y>Math.PI;)y-=Math.PI*2;for(;y<-Math.PI;)y+=Math.PI*2;this.head.rotation.y+=(je.clamp(y,-1.2,1.2)-this.head.rotation.y)*Math.min(1,t*14),this.tray.position.y=1.08+Math.sin(this._bob*46)*.004,this.tray.rotation.z=Math.sin(this._bob*39)*.012,this._alertSting||(this._alertSting=!0,r?.sting(.3),r?.porcelainRattle?.(.9)),this.alertTimer<=0&&(this.state="chase",this._alertSting=!1)}else this.head.rotation.y!==0&&this.state!=="chase"&&(this.head.rotation.y+=(0-this.head.rotation.y)*t*3,this.tray.position.y+=(1.08-this.tray.position.y)*t*6,this.tray.rotation.z+=(0-this.tray.rotation.z)*t*6);if(this.state==="ride"&&this.cord)if(!e.cords.includes(this.cord)||!this.cord.a||!this.cord.b)this.state="stand",this.standTimer=2.6,this.cord=null;else{let d=Math.max(.5,this.cord.length);if(this.t+=this.speed/d*this.dir*t,this.t>=1||this.t<=0){let g=this.t>=1?this.cord.b:this.cord.a;this.t=je.clamp(this.t,0,1);let y=g.cords.filter(p=>p!==this.cord&&p.rideable&&p.a&&p.b&&p.tag!=="deco");if(y.length>0){let p=y[Math.random()*y.length|0];this.cord=p,this.t=p.a===g?0:1,this.dir=p.a===g?1:-1}else this.dir*=-1,Math.random()<.3&&r&&r.pluck(60,.12)}let f=this.cord.pointAt(this.t);if(l.set(f.x-a.position.x,0,f.z-a.position.z),a.position.set(f.x,0,f.z),o=!0,this.cord.mat.emissiveIntensity=1.6,a.position.distanceTo(n)<.85){i(this);return}}else if(this.state==="stand")this.standTimer-=t,this.standTimer<=0&&(this.state="walk");else if(this.state==="walk"){let d=null,f=1e9,g=null;for(let y of e.cords)if(!(!y.rideable||y.tag==="deco"||!y.a||!y.b))for(let p of["a","b"]){let m=y.endPos(p),b=m.distanceTo(a.position);b<f&&(f=b,d=y,g=m)}d?(l.set(g.x-a.position.x,0,g.z-a.position.z),l.length()<.4?(this.cord=d,this.t=d.endPos("a").distanceTo(a.position)<d.endPos("b").distanceTo(a.position)?0:1,this.dir=this.t===0?1:-1,this.state="ride"):(l.normalize().multiplyScalar(.75*t),a.position.add(l),o=!0)):(this.state="stand",this.standTimer=3)}else if(this.state==="chase"){if(l.set(n.x-a.position.x,0,n.z-a.position.z),l.length()<.95){i(this);return}l.normalize().multiplyScalar(1.5*t),a.position.add(l),o=!0}if(o&&l.lengthSq()>1e-8){let f=Math.atan2(l.x,l.z)-this.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;this.yaw+=f*Math.min(1,t*6),a.rotation.y=this.yaw}a.position.y=Math.sin(this._bob*2.6)*.018+.01;let c=this.state==="chase"?.16:.045;a.rotation.x+=(c-a.rotation.x)*t*3,this.tray.rotation.x=-a.rotation.x;let h=this.state==="chase"?1.16:1.08;this.state!=="alert"&&(this.tray.position.y+=(h-this.tray.position.y)*t*2.5);let u=this.state==="ride"?Math.PI-.2:-.1;this.arms.right.shoulder.rotation.x+=(u-this.arms.right.shoulder.rotation.x)*t*4,this.state==="ride"&&(this.head.rotation.x=-.03+Math.sin(this._bob*1.9)*.015)}},dl=class{constructor(t,e=44){this.count=e;let n=new Ai([[.2,0],[.23,.35],[.2,.8],[.23,1.05],[.2,1.3],[.05,1.42]].map(([c,h])=>new Lt(c,h)),8),i=new Kt(.105,10,8),r=new G({roughness:.88}),a=new G({color:14200980,roughness:.65});this.bodies=new Mn(n,r,e),this.heads=new Mn(i,a,e),this.bodies.castShadow=!0;let o=[6965842,4871272,9318456,6051400,3946052,10111554],l=[14200980,13214084,14859680,13609099,12555896];this.data=[],be(777);for(let c=0;c<e;c++)this.bodies.setColorAt(c,new Vt(o[et()*o.length|0])),this.heads.setColorAt(c,new Vt(l[et()*l.length|0])),this.data.push({pos:new A,yaw:et()*Math.PI*2,targetYaw:null,phase:et()*6.28,scale:.94+et()*.12});t.add(this.bodies,this.heads),this._dum=new ke,this.mode="hidden",this._glitchTimer=14+Math.random()*10}layoutParty(t){be(888);let e=0;for(let n of this.data){let[i,r]=t[e%t.length],a=et()*Math.PI*2,o=1.9+et()*.8;n.pos.set(i+Math.cos(a)*o,0,r+Math.sin(a)*o),n.pos.x=je.clamp(n.pos.x,-14,14),n.pos.z=je.clamp(n.pos.z,-16.5,-1),n.yaw=a+Math.PI/2+(et()-.5),n.targetYaw=null,e++}this.mode="party"}layoutFinale(t){be(999);let e=0;for(let n of this.data){let i=e%3,r=e/this.count*Math.PI*2+i*.35,a=4.2+i*1.9+et()*.5;n.pos.set(t[0]+Math.cos(r)*a,0,t[1]+Math.sin(r)*a*.72),n.pos.x=je.clamp(n.pos.x,-14,14),n.pos.z=je.clamp(n.pos.z,-19,-1.2),n.yaw=Math.atan2(t[0]-n.pos.x,t[1]-n.pos.z),n.targetYaw=null,e++}this.mode="finale"}hide(){this.mode="hidden"}turnTo(t,e){for(let n of this.data)n.targetYaw=Math.atan2(t-n.pos.x,e-n.pos.z)}update(t,e){let n=this.mode!=="hidden";if(this.bodies.visible=this.heads.visible=n,!n)return;if(this._glitchTimer-=t,this._glitchTimer<=0){this._glitchTimer=17+Math.random()*16;let r=this.data[Math.random()*this.count|0];r.yaw+=Math.PI*(.55+Math.random()*.6)*(Math.random()>.5?1:-1),r.targetYaw=null}let i=this._dum;for(let r=0;r<this.count;r++){let a=this.data[r];if(a.targetYaw!==null){let c=a.targetYaw-a.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;a.yaw+=c*Math.min(1,t*1.2),Math.abs(c)<.02&&(a.targetYaw=null)}let o=.04+Math.sin(e*.7+a.phase)*.025,l=Math.sin(e*.5+a.phase*2)*.02;i.position.set(a.pos.x,o,a.pos.z),i.rotation.set(l,a.yaw,l*.7),i.scale.setScalar(a.scale),i.updateMatrix(),this.bodies.setMatrixAt(r,i.matrix),i.position.y=o+1.52*a.scale,i.updateMatrix(),this.heads.setMatrixAt(r,i.matrix)}this.bodies.instanceMatrix.needsUpdate=!0,this.heads.instanceMatrix.needsUpdate=!0,this.bodies.instanceColor&&(this.bodies.instanceColor.needsUpdate=!0)}},fl=class{constructor(t){this.group=new ae;let e=new ne({color:11452356,transparent:!0,opacity:.32,blending:In,depthWrite:!1}),n=e.clone();n.opacity=.14;let i=new Ai([[.26,0],[.2,.5],[.17,.95],[.2,1.2],[.17,1.35],[.04,1.45]].map(([y,p])=>new Lt(y,p)),10),r=new ne({color:658962,transparent:!0,opacity:0,depthWrite:!1}),a=new U(i,r);a.scale.setScalar(.985),this.group.add(a);let o=new U(new Kt(.098,10,8),r);o.position.y=1.58,this.group.add(o);let l=new U(i,e);this.group.add(l);let c=new U(i,n);c.position.set(.04,0,-.02),this.group.add(c),this.matShadow=r;let h=new U(new Kt(.1,10,8),e);h.position.y=1.58,this.group.add(h);let u=new fn(.12,.5,8),d=new U(u,n);d.position.set(0,1.42,-.08),this.group.add(d);let f=new U(new se(.26,.75),n);f.position.set(0,1.15,-.14),f.rotation.x=.08,this.group.add(f),this.longHair=f;let g=new U(new Ft(.012,.012,.2,5),new ne({color:9311256,transparent:!0,opacity:.6}));g.position.set(.24,.95,.05),g.rotation.z=.4,this.group.add(g),this.stub=g,this.b2=c,this.group.visible=!1,t.add(this.group),this.opacity=0,this.mats=[e,n],this.fixedYaw=null,this.dissolving=!1,this.lookDot=0}appearAt(t,e,n=null){this.group.position.set(t,.05,e),this.group.visible=!0,this.opacity=0,this.dissolving=!1,this.fixedYaw=n}vanish(){this.dissolving=!0}update(t,e,n){if(!this.group.visible)return;if(this.dissolving){if(this.opacity=Math.max(0,this.opacity-t*1.6),this.opacity<=0){this.group.visible=!1;return}}else this.opacity=Math.min(1,this.opacity+t*.8),this.group.position.distanceTo(e)<2.6&&(this.dissolving=!0);let i=.8+Math.sin(n*9.7)*.1+Math.sin(n*23.3)*.06,r=1-Math.max(0,this.lookDot-.96)*5;this.mats[0].opacity=.5*this.opacity*i*r,this.mats[1].opacity=.24*this.opacity*i*r,this.matShadow.opacity=.34*this.opacity*r;let a=this.fixedYaw!==null?this.fixedYaw:Math.atan2(e.x-this.group.position.x,e.z-this.group.position.z);this.group.rotation.y+=(a-this.group.rotation.y)*t*2,this.group.position.y=.05+Math.sin(n*.9)*.03,this.longHair.rotation.z=Math.sin(n*.6)*.16,this.longHair.rotation.x=.08+Math.sin(n*.43)*.1,this.b2.position.x=.04+Math.sin(n*.31)*.03,this.b2.position.z=-.02+Math.cos(n*.27)*.02,this.stub.rotation.z=.4+Math.sin(n*5.3)*.05}},pl=class{constructor(t){this.scene=t,this.group=new ae;let e=new G({color:10817302,roughness:.55,emissive:2425866}),n=new U(new Ai([[.26,0],[.3,.2],[.24,.5],[.26,.75],[.2,.95],[.06,1.05]].map(([u,d])=>new Lt(u,d)),10),e);n.castShadow=!0,this.group.add(n);let i=new U(new fn(.2,.42,10,3,!0),new G({map:hd(),roughness:.5,side:we,emissive:3147274}));i.position.y=1.22,this.group.add(i),this.veil=i;let r=new G({color:13081146,metalness:.85,roughness:.3,envMapIntensity:1.6}),a=new U(new on(.14,.018,6,18),r);a.rotation.x=Math.PI/2,a.position.y=1.36,this.group.add(a),this.beads=[];for(let u=0;u<7;u++){let d=-.9+u*.3,f=new ae;for(let g=0;g<4;g++){let y=new U(new Kt(.011,6,5),r);y.position.y=-.035*(g+1),f.add(y)}f.position.set(Math.sin(d)*.14,1.36,Math.cos(d)*.14),this.group.add(f),this.beads.push({g:f,phase:u*1.1})}let o=new U(new fn(.05,.1,8),r);o.position.y=1.42,this.group.add(o);let l=new U(new Kt(.05,8,8),new G({color:13148292,roughness:.7}));l.position.set(.1,.55,.2),this.group.add(l);let c=l.clone();c.position.x=-.1,this.group.add(c),this.hands=[l,c];let h=new U(new on(.055,.008,5,10),new G({color:10817302,emissive:3998727,roughness:.8}));h.position.set(.1,.56,.2),h.rotation.x=Math.PI/2.2,this.group.add(h),this.group.visible=!1,t.add(this.group),this._t=0}show(t,e,n){if(this.group.position.set(t,.42,e),this.group.rotation.y=n,this.group.visible=!0,!this._knot){this._knot=new ae;let i=new G({color:10817302,emissive:3998727,emissiveIntensity:1.2,roughness:.75}),r=new A(2.1,.1,-13.5),a=new A(.4,.08,-13.6),o=new U(new Pn(new bn([new A(t,.5,e),new A(t+.4,.06,e+.3),a,new A(1.4,.05,-13.4),r]),20,.018,5),i);this._knot.add(o);let l=new U(new Kt(.07,8,8),i);l.position.copy(a),this._knot.add(l),this.scene.add(this._knot)}}update(t,e=null){if(!this.group.visible)return;this._t+=t;let n=1+Math.sin(this._t*.8)*.01;this.group.scale.set(1,n,1);let i=0;if(e){let o=this.group.position.distanceTo(e);if(i=je.clamp(1-(o-1.2)/2.6,0,1),i>.05){let l=e.x-this.group.position.x,c=e.z-this.group.position.z,h=Math.atan2(l,c)-this.group.rotation.y,u=je.clamp(Math.sin(h),-1,1)*.14*i;this.veil.rotation.y+=(u-this.veil.rotation.y)*t*.5}else this.veil.rotation.y+=(0-this.veil.rotation.y)*t*.8}let r=.06+i*.08,a=1+i*.7;for(let o of this.beads)o.g.rotation.x=Math.sin(this._t*7.3*a+o.phase)*r,o.g.rotation.z=Math.cos(this._t*8.1*a+o.phase)*r*.85;for(let o=0;o<this.hands.length;o++){let l=1+Math.sin(this._t*(9+o*2.3))*.05*i;this.hands[o].scale.setScalar(l)}}};var ml=class{constructor(){this.ctx=null,this.master=null,this.ambientBus=null,this.layers={},this.started=!1,this._noiseBuf=null}init(){if(this.started)return;let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.85,this.verb=this.ctx.createGain(),this.verb.gain.value=.22;let e=this.ctx.createDelay(1);e.delayTime.value=.13;let n=this.ctx.createDelay(1);n.delayTime.value=.211;let i=this.ctx.createGain();i.gain.value=.32;let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=2400,this.verb.connect(e),e.connect(n),n.connect(i),i.connect(r),r.connect(e),n.connect(this.master),this.master.connect(this.ctx.destination),this.ambientBus=this.ctx.createGain(),this.ambientBus.gain.value=1,this.ambientBus.connect(this.master),this._noiseBuf=this._makeNoise(),this.started=!0,this._buildAmbience()}_makeNoise(){let t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0),i=0;for(let r=0;r<t;r++){let a=Math.random()*2-1;i=(i+.02*a)/1.02,n[r]=i*3.5}return e}_noiseSrc(t,e,n,i,r){let a=this.ctx.createBufferSource();a.buffer=this._noiseBuf,a.loop=!0,a.playbackRate.value=.7+Math.random()*.5;let o=this.ctx.createBiquadFilter();o.type=e,o.frequency.value=n,o.Q.value=i;let l=this.ctx.createGain();return l.gain.value=r,a.connect(o),o.connect(l),l.connect(t),a.start(),{src:a,f:o,g:l}}_buildAmbience(){let t=this.ctx;this.layers.roomtone=this._noiseSrc(this.ambientBus,"lowpass",320,.5,.05);let e=t.createOscillator();e.type="sawtooth",e.frequency.value=100;let n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=200,n.Q.value=6;let i=t.createGain();i.gain.value=.006,e.connect(n),n.connect(i),i.connect(this.ambientBus),e.start(),this.layers.hum={g:i};let r=this._noiseSrc(this.ambientBus,"bandpass",480,1.2,0);this.layers.murmur=r,this._murmurLFO(r);let a=t.createOscillator();a.type="sine",a.frequency.value=31;let o=t.createGain();o.gain.value=0,a.connect(o),o.connect(this.master),a.start();let l=this._noiseSrc(this.master,"lowpass",90,.7,0);this.layers.sea={g:o,n:l.g};let c=this._noiseSrc(this.ambientBus,"bandpass",900,.8,0);this.layers.water=c;let h=t.createStereoPanner();h.connect(this.master);let u=this._noiseSrc(h,"bandpass",2600,3.5,0),d=t.createOscillator();d.type="sine",d.frequency.value=52;let f=t.createOscillator();f.frequency.value=4.2;let g=t.createGain();g.gain.value=.5;let y=t.createGain();y.gain.value=0,f.connect(g),g.connect(y.gain),d.connect(y),y.connect(h),d.start(),f.start(),this.threatNodes={pan:h,shim:u.g,pulse:y};let p=t.createStereoPanner();p.connect(this.master);let m=t.createOscillator();m.type="sawtooth",m.frequency.value=82;let b=t.createBiquadFilter();b.type="bandpass",b.frequency.value=164,b.Q.value=9;let R=t.createOscillator();R.frequency.value=6.3;let M=t.createGain();M.gain.value=.5;let S=t.createGain();S.gain.value=0,R.connect(M),M.connect(S.gain),m.connect(b),b.connect(S),S.connect(p),m.start(),R.start(),this.cordHumNodes={pan:p,g:S}}setThreat(t,e=0){if(!this.started||!this.threatNodes)return;let n=this.ctx.currentTime;this.threatNodes.shim.gain.setTargetAtTime(t*.05,n,.18),this.threatNodes.pulse.gain.setTargetAtTime(t*.16,n,.18),this.threatNodes.pan.pan.setTargetAtTime(e,n,.12)}setCordHum(t,e=0){if(!this.started||!this.cordHumNodes)return;let n=this.ctx.currentTime;this.cordHumNodes.g.gain.setTargetAtTime(t*.045,n,.25),this.cordHumNodes.pan.pan.setTargetAtTime(e,n,.15)}_murmurLFO(t){let e=this.ctx,n=()=>{if(!this.started)return;let i=e.currentTime;t.f.frequency.setTargetAtTime(300+Math.random()*700,i,.25),setTimeout(n,300+Math.random()*700)};n()}setLayer(t,e,n=1.5){if(!this.started)return;let i=this.layers[t];if(!i)return;let r=i.g?i.g.gain:null;r&&r.setTargetAtTime(e,this.ctx.currentTime,n),t==="sea"&&i.n&&i.n.gain.setTargetAtTime(e*1.6,this.ctx.currentTime,n)}hush(t=3){if(this.hushed=!0,!this.started)return;let e=this.ctx.currentTime;this.ambientBus.gain.cancelScheduledValues(e),this.ambientBus.gain.setTargetAtTime(.04,e,t*.33)}unhush(t=0){if(this.hushed=!1,!this.started)return;let e=this.ctx.currentTime+t;this.ambientBus.gain.setTargetAtTime(1,e,2.2)}paChime(){if(!this.started)return;let t=this.ctx,e=t.currentTime;[523.25,659.25,783.99].forEach((n,i)=>{let r=t.createOscillator();r.type="sine",r.frequency.value=n;let a=t.createGain();a.gain.setValueAtTime(0,e+i*.42),a.gain.linearRampToValueAtTime(.16,e+i*.42+.03),a.gain.exponentialRampToValueAtTime(.001,e+i*.42+1.4),r.connect(a),a.connect(this.verb),a.connect(this.master),r.start(e+i*.42),r.stop(e+i*.42+1.5)})}broadcast(t=8,e=108,n=null){if(!this.started)return 0;let i=this.ctx,r=i.currentTime,a=n||t*.34+.6,o=i.createOscillator();o.type="sawtooth",o.frequency.value=e;let l=i.createOscillator();l.frequency.value=4.6;let c=i.createGain();c.gain.value=3.5,l.connect(c),c.connect(o.frequency);let h=i.createBiquadFilter();h.type="bandpass",h.Q.value=7;let u=i.createBiquadFilter();u.type="bandpass",u.Q.value=9;let d=i.createGain();d.gain.value=0;let f=i.createBiquadFilter();f.type="highpass",f.frequency.value=280;let g=i.createBiquadFilter();g.type="lowpass",g.frequency.value=2400,o.connect(h),o.connect(u),h.connect(d),u.connect(d),d.connect(f),f.connect(g),g.connect(this.master),g.connect(this.verb),o.start(r),l.start(r),o.stop(r+a+.3),l.stop(r+a+.3);let y=r+.15;for(let p=0;p<t;p++){let m=.16+Math.random()*.2;d.gain.setTargetAtTime(.14,y,.02),d.gain.setTargetAtTime(.004,y+m,.04),h.frequency.setValueAtTime(380+Math.random()*420,y),u.frequency.setValueAtTime(1100+Math.random()*900,y),o.frequency.setValueAtTime(e*(.92+Math.random()*.22),y),y+=m+.06+Math.random()*.1}return d.gain.setTargetAtTime(0,y,.1),a}pluck(t=82,e=.4,n=.996,i=0){if(!this.started)return;let r=this.ctx,a=r.sampleRate,o=Math.round(a/t),l=a*1.6,c=r.createBuffer(1,l,a),h=c.getChannelData(0),u=new Float32Array(o);for(let p=0;p<o;p++)u[p]=Math.random()*2-1;let d=0;for(let p=0;p<l;p++){let m=u[d],b=u[(d+1)%o],R=(m+b)*.5*n;u[d]=R,h[p]=m,d=(d+1)%o}let f=r.createBufferSource();f.buffer=c;let g=r.createGain();g.gain.value=e;let y=r.createBiquadFilter();if(y.type="lowpass",y.frequency.value=2600,f.connect(y),y.connect(g),i!==0){let p=r.createStereoPanner();p.pan.value=i,g.connect(p),p.connect(this.master)}else g.connect(this.master);g.connect(this.verb),f.start()}tension(t=1.6){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(60,n),i.frequency.exponentialRampToValueAtTime(340,n+t);let r=e.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.1,n+t*.7),r.gain.linearRampToValueAtTime(0,n+t);let a=e.createOscillator();a.type="triangle",a.frequency.setValueAtTime(61.5,n),a.frequency.exponentialRampToValueAtTime(345,n+t),i.connect(r),a.connect(r),r.connect(this.master),i.start(n),a.start(n),i.stop(n+t),a.stop(n+t)}footstep(t="terrazzo",e=!1){if(!this.started)return;let n=this.ctx,i=n.currentTime,r=n.createBufferSource();r.buffer=this._noiseBuf,r.playbackRate.value=2+Math.random();let a=n.createBiquadFilter(),o=n.createGain(),l=.07,c=e?.16:.07;if(t==="carpet"?(a.type="lowpass",a.frequency.value=400,c*=.5):t==="metal"?(a.type="bandpass",a.frequency.value=900,a.Q.value=3,l=.14,c*=1.3):t==="wet"?(a.type="bandpass",a.frequency.value=1600,a.Q.value=1,c*=.9):(a.type="bandpass",a.frequency.value=1200,a.Q.value=1.5),o.gain.setValueAtTime(c,i),o.gain.exponentialRampToValueAtTime(.001,i+l+Math.random()*.05),r.connect(a),a.connect(o),o.connect(this.master),r.start(i),r.stop(i+.3),t==="metal"){let h=n.createGain();h.gain.value=c*.6,a.connect(h),h.connect(this.verb)}}thud(t=.5){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(120,n),i.frequency.exponentialRampToValueAtTime(38,n+.28);let r=e.createGain();r.gain.setValueAtTime(t,n),r.gain.exponentialRampToValueAtTime(.001,n+.5),i.connect(r),r.connect(this.master),r.connect(this.verb),i.start(n),i.stop(n+.55);let a=e.createBufferSource();a.buffer=this._noiseBuf;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=500;let l=e.createGain();l.gain.setValueAtTime(t*.7,n),l.gain.exponentialRampToValueAtTime(.001,n+.3),a.connect(o),o.connect(l),l.connect(this.master),a.start(n),a.stop(n+.35)}glassCreak(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="sine";let i=900+Math.random()*1600;n.frequency.setValueAtTime(i,e),n.frequency.linearRampToValueAtTime(i*(.55+Math.random()*.2),e+.9);let r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.035,e+.15),r.gain.linearRampToValueAtTime(0,e+.9+Math.random()*.5),n.connect(r),r.connect(this.master),r.connect(this.verb),n.start(e),n.stop(e+1.6)}creakLow(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(55+Math.random()*30,e),n.frequency.linearRampToValueAtTime(35+Math.random()*15,e+1.4);let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=300;let r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.09,e+.4),r.gain.linearRampToValueAtTime(0,e+1.6),n.connect(i),i.connect(r),r.connect(this.master),r.connect(this.verb),n.start(e),n.stop(e+1.8)}motif(t=!1,e=.06){if(!this.started)return;let n=this.ctx,i=n.currentTime;(t?[523,554,622,740,622,554,523,370,523,494]:[523,587,659,784,659,587,523,392,523,523]).forEach((l,c)=>{let h=i+c*(t?.62:.34),u=n.createOscillator();u.type="sine",u.frequency.value=l;let d=n.createOscillator();d.type="triangle",d.frequency.value=l*2;let f=n.createGain();f.gain.setValueAtTime(0,h),f.gain.linearRampToValueAtTime(e,h+.01),f.gain.exponentialRampToValueAtTime(5e-4,h+(t?1.6:.9)),u.connect(f),d.connect(f),f.connect(this.master),f.connect(this.verb),u.start(h),d.start(h),u.stop(h+2),d.stop(h+2)})}heartbeat(){if(!this.started)return;let t=this.ctx,e=t.currentTime;[0,.18].forEach((n,i)=>{let r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(i?48:60,e+n);let a=t.createGain();a.gain.setValueAtTime(.22-i*.08,e+n),a.gain.exponentialRampToValueAtTime(.001,e+n+.16),r.connect(a),a.connect(this.master),r.start(e+n),r.stop(e+n+.2)})}sting(t=.4){if(!this.started)return;let e=this.ctx,n=e.currentTime;[178,183.5,356].forEach((o,l)=>{let c=e.createOscillator();c.type="sawtooth",c.frequency.value=o,c.frequency.linearRampToValueAtTime(o*1.06,n+1.1);let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=2200;let u=e.createGain();u.gain.setValueAtTime(0,n),u.gain.linearRampToValueAtTime(t*(l===2?.12:.2),n+.02),u.gain.exponentialRampToValueAtTime(.001,n+1.4),c.connect(h),h.connect(u),u.connect(this.master),u.connect(this.verb),c.start(n),c.stop(n+1.6)});let i=e.createBufferSource();i.buffer=this._noiseBuf,i.playbackRate.value=1.6;let r=e.createBiquadFilter();r.type="highpass",r.frequency.value=900;let a=e.createGain();a.gain.setValueAtTime(t*.5,n),a.gain.exponentialRampToValueAtTime(.001,n+.3),i.connect(r),r.connect(a),a.connect(this.master),i.start(n),i.stop(n+.35)}boom(t=.8){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(66,n),i.frequency.exponentialRampToValueAtTime(24,n+1.4);let r=e.createGain();r.gain.setValueAtTime(t,n),r.gain.exponentialRampToValueAtTime(.001,n+2.2),i.connect(r),r.connect(this.master),r.connect(this.verb),i.start(n),i.stop(n+2.4);let a=e.createBufferSource();a.buffer=this._noiseBuf,a.playbackRate.value=.5;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=260;let l=e.createGain();l.gain.setValueAtTime(t*.9,n),l.gain.exponentialRampToValueAtTime(.001,n+1.1),a.connect(o),o.connect(l),l.connect(this.master),l.connect(this.verb),a.start(n),a.stop(n+1.3)}whoosh(t=.2){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this._noiseBuf,i.playbackRate.setValueAtTime(.8,n),i.playbackRate.linearRampToValueAtTime(2.4,n+.5);let r=e.createBiquadFilter();r.type="bandpass",r.Q.value=1.4,r.frequency.setValueAtTime(300,n),r.frequency.exponentialRampToValueAtTime(1600,n+.5);let a=e.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(t,n+.22),a.gain.linearRampToValueAtTime(0,n+.6),i.connect(r),r.connect(a),a.connect(this.master),i.start(n),i.stop(n+.7)}ratchet(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this._noiseBuf,n.playbackRate.value=3.2;let i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=1900,i.Q.value=5;let r=t.createGain();r.gain.setValueAtTime(.09,e),r.gain.exponentialRampToValueAtTime(.001,e+.05),n.connect(i),i.connect(r),r.connect(this.master),n.start(e),n.stop(e+.08);let a=t.createOscillator();a.type="square",a.frequency.value=480;let o=t.createGain();o.gain.setValueAtTime(.02,e),o.gain.exponentialRampToValueAtTime(.001,e+.04),a.connect(o),o.connect(this.master),a.start(e),a.stop(e+.05)}porcelainRattle(t=.9){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=Math.floor(t*14);for(let r=0;r<i;r++){let a=n+r/i*t+Math.random()*.02,o=e.createOscillator();o.type="sine",o.frequency.value=2400+Math.random()*1800;let l=e.createGain();l.gain.setValueAtTime(.014+Math.random()*.02,a),l.gain.exponentialRampToValueAtTime(8e-4,a+.03),o.connect(l),l.connect(this.master),l.connect(this.verb),o.start(a),o.stop(a+.04)}}drip(t=0){if(!this.started)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine";let r=1400+Math.random()*900;i.frequency.setValueAtTime(r,n),i.frequency.exponentialRampToValueAtTime(r*.45,n+.09);let a=e.createGain();a.gain.setValueAtTime(.055,n),a.gain.exponentialRampToValueAtTime(.001,n+.14);let o=e.createStereoPanner();o.pan.value=t,i.connect(a),a.connect(o),o.connect(this.master),a.connect(this.verb),i.start(n),i.stop(n+.2)}bulbPop(){if(!this.started)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this._noiseBuf,n.playbackRate.value=2.8;let i=t.createBiquadFilter();i.type="highpass",i.frequency.value=2400;let r=t.createGain();r.gain.setValueAtTime(.5,e),r.gain.exponentialRampToValueAtTime(.001,e+.16),n.connect(i),i.connect(r),r.connect(this.master),r.connect(this.verb),n.start(e),n.stop(e+.2);for(let a=0;a<5;a++){let o=.06+a*.05+Math.random()*.04,l=t.createOscillator();l.type="sine",l.frequency.value=3800+Math.random()*2600;let c=t.createGain();c.gain.setValueAtTime(.028,e+o),c.gain.exponentialRampToValueAtTime(.001,e+o+.07),l.connect(c),c.connect(this.master),l.start(e+o),l.stop(e+o+.1)}}snip(){if(!this.started)return;this.pluck(660,.5,.992),this.pluck(49,.6,.999);let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this._noiseBuf,n.playbackRate.value=3;let i=t.createBiquadFilter();i.type="highpass",i.frequency.value=3e3;let r=t.createGain();r.gain.setValueAtTime(.3,e),r.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(i),i.connect(r),r.connect(this.master),n.start(e),n.stop(e+.15)}};var gl=class{constructor(t,e){this.camera=t,this.dom=e,this.pos=new A(0,0,-3),this.yaw=Math.PI,this.pitch=0,this.vel=new A,this.keys={},this.locked=!1,this.enabled=!1,this.seated=!1,this.radius=.32,this.eyeHeight=1.62,this.bobT=0,this.stepDist=0,this.onStep=null,this.holdE=0,this.eDown=!1,this.ePressed=!1,this.kickV=0,this.kickRoll=0,this.fovKick=0,this._baseFov=t.fov,window.addEventListener("keydown",n=>{this.keys[n.code]=!0,n.code==="KeyE"&&!this.eDown&&(this.eDown=!0,this.ePressed=!0)}),window.addEventListener("keyup",n=>{this.keys[n.code]=!1,n.code==="KeyE"&&(this.eDown=!1,this.holdE=0)}),document.addEventListener("mousemove",n=>{!this.locked||!this.enabled||(this.yaw-=n.movementX*.0021,this.pitch-=n.movementY*.0021,this.pitch=je.clamp(this.pitch,-1.35,1.35))}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.dom})}lock(){this.dom.requestPointerLock?.()}get forward(){return new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}get lookDir(){let t=new A;return this.camera.getWorldDirection(t),t}teleport(t,e,n=null){this.pos.set(t,0,e),this.vel.set(0,0,0),n!==null&&(this.yaw=n)}kick(t,e=0){this.kickV=t,this.kickRoll=e}punchFov(t){this.fovKick=t}update(t,e,n){if(this.ePressedThisFrame=this.ePressed,this.ePressed=!1,this.eDown?this.holdE+=t:this.holdE=0,!this.enabled||this.seated){this._applyCamera(t,!0);return}let i=this.keys.ShiftLeft||this.keys.ShiftRight,r=i?4.6:2.9,a=this.forward,o=new A(-a.z,0,a.x),l=new A;(this.keys.KeyW||this.keys.ArrowUp)&&l.add(a),(this.keys.KeyS||this.keys.ArrowDown)&&l.sub(a),(this.keys.KeyA||this.keys.ArrowLeft)&&l.sub(o),(this.keys.KeyD||this.keys.ArrowRight)&&l.add(o),l.lengthSq()>0&&l.normalize().multiplyScalar(r),this.vel.lerp(l,Math.min(1,t*10));let c=this.vel.clone().multiplyScalar(t);this.pos.x+=c.x,this._resolve(e,"x"),this.pos.z+=c.z,this._resolve(e,"z");let h=Math.hypot(c.x,c.z);this.stepDist+=h;let u=i?2.2:1.7;this.stepDist>u&&h>.001&&(this.stepDist=0,this.onStep?.(n(this.pos),i)),h>.005&&(this.bobT+=t*(i?11:7.5)),this._applyCamera(t,!1)}_resolve(t,e){for(let n of t){if(n.disabled)continue;let i=Math.max(n.minX,Math.min(this.pos.x,n.maxX)),r=Math.max(n.minZ,Math.min(this.pos.z,n.maxZ)),a=this.pos.x-i,o=this.pos.z-r,l=a*a+o*o;if(l<this.radius*this.radius){let c=Math.sqrt(Math.max(l,1e-6)),h=(this.radius-c)/c;e==="x"?this.pos.x+=a*h:this.pos.z+=o*h,l<1e-6&&(e==="x"?this.pos.x=this.pos.x<(n.minX+n.maxX)/2?n.minX-this.radius:n.maxX+this.radius:this.pos.z=this.pos.z<(n.minZ+n.maxZ)/2?n.minZ-this.radius:n.maxZ+this.radius)}}}_applyCamera(t,e){let n=e?0:Math.sin(this.bobT)*.035,i=e?0:Math.cos(this.bobT*.5)*.02;this.kickV*=Math.max(0,1-t*7),this.kickRoll*=Math.max(0,1-t*5),Math.abs(this.fovKick)>.02?(this.fovKick*=Math.max(0,1-t*6),this.camera.fov=this._baseFov+this.fovKick,this.camera.updateProjectionMatrix()):this.fovKick!==0&&(this.fovKick=0,this.camera.fov=this._baseFov,this.camera.updateProjectionMatrix()),this.camera.position.set(this.pos.x+i*Math.cos(this.yaw),this.pos.y+this.eyeHeight+n,this.pos.z+i*Math.sin(this.yaw)),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch+this.kickV,this.camera.rotation.z=this.kickRoll}handPos(){let t=this.lookDir;return new A(this.pos.x+t.x*.5,this.pos.y+this.eyeHeight-.35+t.y*.3,this.pos.z+t.z*.5)}};var rh=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Rx=`
uniform sampler2D tScene;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tScene, vUv).rgb;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  float k = smoothstep(0.5, 1.05, l);
  gl_FragColor = vec4(c * k, 1.0);
}`,Ax=`
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
}`,Cx=`
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
}`,xl=class{constructor(t,e,n){this.renderer=t,this.scene=new Si,this.cam=new cs(-1,1,1,-1,0,1),this.quadGeo=new se(2,2),this.resize(e,n,!0),this.brightMat=new $e({uniforms:{tScene:{value:null}},vertexShader:rh,fragmentShader:Rx}),this.blurMat=new $e({uniforms:{tInput:{value:null},uDir:{value:new Lt}},vertexShader:rh,fragmentShader:Ax}),this.compMat=new $e({uniforms:{tScene:{value:null},tBloomA:{value:null},tBloomB:{value:null},uTime:{value:0},uRedPulse:{value:0},uShock:{value:0},uFlash:{value:0},uLetterbox:{value:0},uExposure:{value:1.18},uDread:{value:0},uTexel:{value:new Lt(1/e,1/n)}},vertexShader:rh,fragmentShader:Cx}),this.quad=new U(this.quadGeo,this.compMat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.redPulse=0,this.shock=0,this.flash=0,this.letterbox=0,this.letterboxTarget=0,this.exposure=1.18,this.exposureTarget=1.18,this.dread=0,this.dreadTarget=0}resize(t,e,n=!1){let i={minFilter:We,magFilter:We};n||(this.rtScene.dispose(),this.rtA.dispose(),this.rtB.dispose(),this.rtC.dispose(),this.rtD.dispose()),this.rtScene=new Qe(t,e,{...i,samples:2}),this.rtA=new Qe(t>>2,e>>2,i),this.rtB=new Qe(t>>2,e>>2,i),this.rtC=new Qe(t>>3,e>>3,i),this.rtD=new Qe(t>>3,e>>3,i),this.w=t,this.h=e}_blur(t,e,n,i,r){let a=this.renderer;this.quad.material=this.blurMat,this.blurMat.uniforms.tInput.value=t.texture,this.blurMat.uniforms.uDir.value.set(1/i,0),a.setRenderTarget(n),a.render(this.scene,this.cam),this.blurMat.uniforms.tInput.value=n.texture,this.blurMat.uniforms.uDir.value.set(0,1/r),a.setRenderTarget(e),a.render(this.scene,this.cam)}render(t,e,n,i){let r=this.renderer;this.redPulse=Math.max(0,this.redPulse-n*.8),this.shock=Math.max(0,this.shock-n*.5),this.flash=Math.max(0,this.flash-n*2.2),this.letterbox+=(this.letterboxTarget-this.letterbox)*Math.min(1,n*3),this.exposure+=(this.exposureTarget-this.exposure)*Math.min(1,n*.9),this.dread+=(this.dreadTarget-this.dread)*Math.min(1,n*1.4),r.setRenderTarget(this.rtScene),r.render(t,e),this.quad.material=this.brightMat,this.brightMat.uniforms.tScene.value=this.rtScene.texture,r.setRenderTarget(this.rtA),r.render(this.scene,this.cam),this._blur(this.rtA,this.rtA,this.rtB,this.w>>2,this.h>>2),this.quad.material=this.blurMat,this.blurMat.uniforms.tInput.value=this.rtA.texture,this.blurMat.uniforms.uDir.value.set(1/(this.w>>3),0),r.setRenderTarget(this.rtC),r.render(this.scene,this.cam),this.blurMat.uniforms.tInput.value=this.rtC.texture,this.blurMat.uniforms.uDir.value.set(0,1/(this.h>>3)),r.setRenderTarget(this.rtD),r.render(this.scene,this.cam),this._blur(this.rtD,this.rtD,this.rtC,this.w>>3,this.h>>3),this.quad.material=this.compMat;let a=this.compMat.uniforms;a.tScene.value=this.rtScene.texture,a.tBloomA.value=this.rtA.texture,a.tBloomB.value=this.rtD.texture,a.uTime.value=i,a.uRedPulse.value=this.redPulse,a.uShock.value=this.shock,a.uFlash.value=this.flash,a.uLetterbox.value=this.letterbox,a.uExposure.value=this.exposure,a.uDread.value=this.dread,a.uTexel.value.set(1/this.w,1/this.h),r.setRenderTarget(null),r.render(this.scene,this.cam)}};var Px=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ix=`
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
}`,_l=class{constructor(t,e,n,i){this.renderer=t,this.scene=e,this.screens=[],this.future=i,this.activeFuture=[],this.time=0,this._idx=0,this.previewBoost=new hs(10136251,4.5);for(let r of n){let a=r.kind==="preview"?new Qe(256,192,{minFilter:We,magFilter:We}):null,o=null,l=null;r.kind==="vcr"&&(l=document.createElement("canvas"),l.width=256,l.height=192,o=new En(l));let c=new $e({uniforms:{tDiffuse:{value:a?a.texture:o},uTime:{value:0},uStatic:{value:0},uPower:{value:1}},vertexShader:Px,fragmentShader:Ix});r.mesh.material=c;let h=r.kind==="preview"?new sn(52,256/192,.1,60):null;h&&(h.position.copy(r.camPos),h.lookAt(r.camLook)),this.screens.push({def:r,rt:a,mat:c,cam:h,vcrCanvas:l,vcrTex:o,static:!1,power:!0})}}setFutureActive(t){this.activeFuture=t}setStatic(t,e){let n=this.screens.find(i=>i.def.id===t);n&&(n.static=e)}setPower(t,e){let n=this.screens.find(i=>i.def.id===t);n&&(n.power=e)}_drawVCR(t){let e=t.vcrCanvas.getContext("2d"),n=this.time;e.fillStyle="#5a0e12",e.fillRect(0,0,256,192);let i=128+Math.sin(n*.4)*40,r=e.createRadialGradient(i,90,10,i,90,120);if(r.addColorStop(0,"rgba(255,190,120,0.5)"),r.addColorStop(1,"rgba(255,190,120,0)"),e.fillStyle=r,e.fillRect(0,0,256,192),e.fillStyle="#e7b64c",e.font="90px serif",e.textAlign="center",e.textBaseline="middle",e.fillText("\u56CD",128,92),e.font="18px sans-serif",e.fillText("\u65B0\u5A5A\u5FEB\u4E50 \u767E\u5E74\u597D\u5408",128,160),Math.sin(n*.7)>.965||n%11>10.6){e.fillStyle="#0c0e10",e.fillRect(0,0,256,192),e.strokeStyle="rgba(90,64,56,0.9)",e.lineWidth=8;for(let a=0;a<5;a++)e.beginPath(),e.arc(128,210,40+a*34,Math.PI*1.15,Math.PI*1.85),e.stroke();e.fillStyle="rgba(231,182,76,0.6)",e.font="90px serif",e.fillText("\u56CD",128,92)}t.vcrTex.needsUpdate=!0}update(t,e){this.time+=t;for(let o of this.screens)o.mat.uniforms.uTime.value=this.time,o.mat.uniforms.uStatic.value+=((o.static?1:0)-o.mat.uniforms.uStatic.value)*t*3,o.mat.uniforms.uPower.value+=((o.power?1:0)-o.mat.uniforms.uPower.value)*t*4;let n=this.screens.filter(o=>{let l=new A;return o.def.mesh.getWorldPosition(l),l.distanceTo(e)<16&&o.power});if(n.length===0)return;this._idx=(this._idx+1)%n.length;let i=n[this._idx];if(i.def.kind==="vcr"){this._drawVCR(i);return}if(i.static)return;let r=[];for(let o of this.activeFuture){let l=this.future[o];l&&!l.visible&&(l.visible=!0,r.push(l))}this.scene.add(this.previewBoost);let a=this.scene.fog;this.scene.fog=null,this.renderer.setRenderTarget(i.rt),this.renderer.render(this.scene,i.cam),this.renderer.setRenderTarget(null),this.scene.fog=a,this.scene.remove(this.previewBoost);for(let o of r)o.visible=!1;i.def.glow&&(i.def.glow.intensity=3+Math.sin(this.time*13.7)*.8+Math.random()*.5)}};var yl=class{constructor(){this.el={};for(let t of["subtitle","objective","prompt","card","fade","end","endTitle","endBody","endBtn","timerbar","timerfill","callHint","reticleWrap","cutring","endCard","ripple","threatL","threatR"])this.el[t]=document.getElementById(t);this.ringFg=this.el.cutring.querySelector(".fg"),this._subT=null,this._cardT=null,this._retState=""}subtitle(t,e=4){let n=this.el.subtitle;n.textContent=t,n.style.opacity=1,clearTimeout(this._subT),this._subT=setTimeout(()=>{n.style.opacity=0},e*1e3)}objective(t){let e=this.el.objective;e.innerHTML='<span class="obj-mark">\u25C6</span> '+t,e.style.opacity=1,e.classList.remove("obj-flash"),e.offsetWidth,e.classList.add("obj-flash")}prompt(t,e=null){let n=this.el.prompt;if(!t){n.style.opacity=0;return}n.innerHTML=(e?`<span class="key">${e}</span>`:"")+`<span>${t}</span>`,n.style.opacity=1}reticle(t){this._retState!==t&&(this._retState=t,this.el.reticleWrap.className=t?"ret-"+t:"")}ripple(){let t=this.el.ripple;t&&(t.classList.remove("go"),t.offsetWidth,t.classList.add("go"))}threat(t,e){let n=this.el.threatL,i=this.el.threatR;if(!n||!i)return;let r=t*.55;n.style.opacity=(r*(e<0?1:1-e*.85)).toFixed(2),i.style.opacity=(r*(e>0?1:1+e*.85)).toFixed(2)}cutRing(t){if(t<=0){this.el.cutring.style.opacity=0;return}this.el.cutring.style.opacity=1,this.ringFg.style.strokeDashoffset=(188.5*(1-Math.min(1,t))).toFixed(1)}card(t,e="",n=3.4){let i=this.el.card;i.innerHTML=`<div class="card-title">${t}</div><div class="card-sub">${e}</div>`,i.style.opacity=1,clearTimeout(this._cardT),this._cardT=setTimeout(()=>{i.style.opacity=0},n*1e3)}fade(t,e=.6){let n=this.el.fade;n.style.transition=`opacity ${e}s ease`,n.style.opacity=t}callHint(t){this.el.callHint.style.opacity=t?1:0}timer(t,e=1){this.el.timerbar.style.opacity=t?1:0,this.el.timerfill.style.width=(e*100).toFixed(1)+"%"}end(t,e,n,i,r=!1){this.el.endTitle.textContent=t,this.el.endBody.innerHTML=e,this.el.endBtn.textContent=n,this.el.endCard.style.display=r?"block":"none",this.el.end.style.display="flex",requestAnimationFrame(()=>{this.el.end.style.opacity=1}),this.el.endBtn.onclick=i}hideEnd(){this.el.end.style.opacity=0,setTimeout(()=>{this.el.end.style.display="none"},600)}};var Lx={\u5BB4\u4F1A\u5385:"\u4E1C\u5385",\u670D\u52A1\u8D70\u5ECA:"\u8D70\u5ECA",\u5927\u5802:"\u5927\u5802",\u6D77\u6D0B\u9986\u8FDE\u5ECA:"\u8FDE\u5ECA",\u5458\u5DE5\u8FDE\u5ECA:"\u540E\u5ECA"},vl=class{constructor(t){this.g=t,this.beat=0,this.noise=0,this.noiseCooldown=0,this.call={active:!1,waiter:null},this.escorting=!1,this.grace=0,this.finaleTimer=-1,this.cutT=0,this.gateNoiseDone=!1,this.lightMult={hall:1,corridor:1,lobby:1,aqua:1,connector:1},this.hallColor=new Vt(16760952),this.ended=!1,this._pending=[]}after(t,e){this._pending.push({t,fn:e})}announce(t,e,n=null,i=""){let{audio:r,ui:a,mc:o,post:l}=this.g;r.hush(3),l.shock=.8,l.letterboxTarget=1,this.after(2.2,()=>r.paChime()),this.after(3.4,()=>{r.broadcast(e,104+this.beat*4),a.subtitle("\u3010\u5E7F\u64AD\u3011"+t,Math.max(3.5,e*.4)),n&&a.card(n,i),o.speak(Math.max(3,e*.42));let c=1.4*(1-o.sync);this.after(3.4+c,()=>o.gesture())}),this.after(7.5,()=>{r.unhush(),l.letterboxTarget=this._lbBase||0})}addNoise(t,e=!1){this.beat<2||this.ended||(this.noise=Math.min(1.6,this.noise+t),!e&&this.noise>=1&&this.noiseCooldown<=0&&!this.call.active&&!this.escorting&&this.triggerCall(!1))}triggerCall(t=!1){if(this.call.active||this.ended)return;let{audio:e,ui:n,waiters:i,player:r}=this.g;this.call.active=!0,this.noise=0,this.noiseCooldown=26,e.tension(1.8);let a=this.g.regionNameAt(r.pos)||"\u5927\u5802",o=Lx[a]||a;this.after(1.2,()=>{e.broadcast(9,96),this.g.mc.speak(3.8),n.subtitle(`\u3010\u5E7F\u64AD\u3011${o}\u7684\u8FD9\u4F4D\u6765\u5BBE\u2014\u2014\u8BF7\u5165\u5E2D\u3002`,4)}),n.callHint(!0),t&&n.objective("\u53F8\u4EEA\u70B9\u4E86\u4F60\u7684\u540D \u2014\u2014 \u8155\u7EF3\u4EAE\u4E86\u3002\u51B2\u5230\u4EFB\u610F<b>\u793C\u94A9</b>\u524D\u6309 E\uFF0C\u628A\u8155\u7EF3<b>\u5BC4\u6302</b>\u4E0A\u53BB\uFF01");let l=null,c=1e9;for(let h of i){if(!h.visible)continue;let u=h.group.position.distanceTo(r.pos);u<c&&(c=u,l=h)}l&&(l.startChase(),this.call.waiter=l)}resolveCall(){let{audio:t,ui:e,wrist:n}=this.g;this.call.active=!1,e.callHint(!1),n.shorten(),t.pluck(140,.5),t.pluck(52,.4),this.call.waiter&&(this.call.waiter.stopChase(this.g.sys),this.call.waiter=null),e.subtitle("\u8155\u7EF3\u5BC4\u6302\u4E0A\u4E86\u3002\u5B83\u53C8\u77ED\u4E86\u4E00\u622A\u3002",3.5),this.beat===3&&!this._doorCObjGiven&&(this._doorCObjGiven=!0,this.after(2,()=>e.objective("\u53BB\u897F\u5899\u7684<b>\u8FDE\u5ECA\u95E8</b>\u2014\u2014\u6458\u4E0B\u62E6\u95E8\u7EF3\uFF0C\u8FDB\u6D77\u6D0B\u9986\u8FDE\u5ECA\u3002")))}escort(t){if(this.escorting||this.grace>0||this.ended)return;let{ui:e,player:n,audio:i,post:r}=this.g;this.escorting=!0,this.call.active=!1,e.callHint(!1),e.reticle(""),this.call.waiter&&(this.call.waiter.stopChase(this.g.sys),this.call.waiter=null);let a=t.group.position;n.yaw=Math.atan2(n.pos.x-a.x,n.pos.z-a.z),n.pitch=-.06,n.kick(-.05,.03),i.thud(.25),i.sting(.22),r.shock=1,e.fade(1,.9),e.subtitle("\u300C\u60A8\u7684\u4F4D\u7F6E\u5728\u8FD9\u8FB9\u3002\u300D",4),this.after(1.6,()=>{if(!this.escorting||this.ended){e.fade(0,.8);return}n.teleport(-1.7,-10.2,0),n.pitch=.14,n.seated=!0,t.group.position.set(-2.6,0,-10.2),t.state="stand",t.standTimer=5,e.fade(0,.8),e.prompt("\u4F60\u88AB\u6309\u8FDB\u4E86\u4E00\u628A\u7A7A\u6905\u5B50 \u2014\u2014 <b>\u957F\u6309</b>\u7AD9\u8D77\u6765","E")})}standUp(){let{ui:t,player:e}=this.g;e.seated=!1,this.escorting=!1,this.grace=7,e.pitch=0,e.kick(.04),t.fade(0,.6),t.prompt(""),t.subtitle("\u8D81\u4ED6\u4EEC\u6CA1\u770B\u7740\u2014\u2014\u8D70\u3002",3)}_shockCorridor(){this._shock1=!0;let{audio:t,ui:e,post:n,L:i,waiters:r,sys:a}=this.g;t.setLayer("roomtone",0,.5);let o=this.lightMult.corridor;this.lightMult.corridor=.02;let l=i.dyn.tubes.filter(c=>c.light.position.z<0);l.sort((c,h)=>h.light.position.x-c.light.position.x),l.forEach((c,h)=>{this.after(.4+h*.5,()=>{c.light.intensity=0,c.mat.emissiveIntensity=0,t.ratchet(),t.thud(.12)})}),this.after(.4+l.length*.5,()=>{n.shock=1.2,t.boom(.35),e.subtitle("\u706F\u706D\u4E0B\u6765\u7684\u987A\u5E8F\u2014\u2014\u662F\u671D\u7740\u4F60\u6765\u7684\u3002",4);let c=r[0];c.setVisible(!0);let h=a.cords.filter(u=>u.rideable&&u.a&&u.b&&u.pointAt(.5).x>17&&u.pointAt(.5).x<31);if(h.length){c.cord=h[0],c.t=.95,c.dir=-1,c.state="ride";let u=h[0].pointAt(c.t);c.group.position.set(u.x,0,u.z)}t.sting(.5),t.pluck(60,.5,.998),a.cords.forEach(u=>{u.mat.emissiveIntensity=2.6})}),this.after(3.6+l.length*.5,()=>{this.beat<3&&(this.lightMult.corridor=o),i.dyn.tubes.forEach(c=>{c.mat.emissiveIntensity=2.6}),a.cords.forEach(c=>{c.mat.emissiveIntensity=1.2}),n.flash=.5,t.setLayer("roomtone",.05,2),e.subtitle("\u706F\u56DE\u6765\u7684\u65F6\u5019\uFF0C\u6258\u76D8\u4E0A\u7684\u83DC\u6362\u8FC7\u4E86\u3002",4.5)})}_shockGlass(){this._shock2=!0;let{audio:t,ui:e,post:n,L:i}=this.g,r=i.dyn.seaShade;this._shadeLunge={t:0,fromX:r.position.x,fromY:r.position.y},this.after(.5,()=>{t.boom(.95),n.shock=1.6,n.flash=.55,this.g.player.kick(-.09,.05),i.dyn.cracks.forEach(o=>{o.material.opacity=Math.max(o.material.opacity,.3)});let a=this.lightMult.aqua;this.lightMult.aqua=.08,e.subtitle("\u73BB\u7483\u95F7\u54CD\u4E86\u4E00\u58F0\u3002\u90A3\u4E2A\u5F71\u5B50\u6BD4\u6574\u9762\u5899\u8FD8\u957F\u3002",5);for(let o=0;o<3;o++)this.after(.6+o*.8,()=>t.glassCreak());this.after(3.2,()=>{this.lightMult.aqua=a}),this.addNoise(.3,!0)})}_shockBulb(){this._shock3=!0;let{audio:t,post:e,L:n,gazer:i,player:r}=this.g,a=null,o=1e9;for(let l of n.dyn.bulbs){let c=Math.abs(l.light.position.z-r.pos.z);c<o&&(o=c,a=l)}a&&(a.light.intensity=0,a.light.userData.base=0,a.group.visible=!1,t.bulbPop(),e.flash=.45,e.shock=1,r.kick(-.05,-.03)),this.after(.7,()=>{i.appearAt(-17.1,Math.max(r.pos.z-6,-5),null),t.sting(.4),this.g.ui.subtitle("\u706F\u788E\u7684\u90A3\u4E00\u4E0B\uFF0C\u5979\u5F80\u524D\u7AD9\u4E86\u4E00\u6B65\u3002\u6CA1\u6709\u811A\u6B65\u58F0\u3002",5)})}start(){let{ui:t}=this.g;t.fade(0,2.5),this.beat=1,t.card("\u8BAE\u7A0B\u4E00 \xB7 \u8FCE\u5BBE","\u5357\u65B9\u5927\u9152\u5E97 \xB7 2001\u5E74 \u79CB"),this.g.wrist.glow=1.4,this.after(2.5,()=>t.subtitle('\u5A5A\u5BB4\u5F00\u59CB\u524D\uFF0C\u5468\u7D6E\u62C9\u7740\u4F60\u7684\u624B\u8155\u7CFB\u4E86\u6839\u7EA2\u7EF3\uFF1A"\u5168\u4E4E\u4EBA\u3002\u522B\u6458\u3002"',6)),this.after(9,()=>t.subtitle("\u5168\u573A\u5BBE\u5BA2\u7684\u8155\u4E0A\u90FD\u6709\u4E00\u6839\u3002\u4ED6\u4EEC\u7684\u90FD\u5782\u5230\u5730\u4E0A\uFF0C\u63A5\u8FDB\u4E86\u540C\u4E00\u5F20\u7F51\u3002",6)),this.after(16,()=>t.objective("\u5230<b>\u4E3B\u684C</b>\u524D\u542C\u53F8\u4EEA\u62A5\u5E55\uFF08WASD \u79FB\u52A8 / \u9F20\u6807\u73AF\u987E\uFF09")),this.g.guests.layoutParty([[-6.5,-6],[6.5,-6],[-11,-9.5],[11,-9.5],[-6.5,-12.5],[6.5,-12.5],[-11,-3],[11,-3]]),this.g.audio.setLayer("murmur",.045,3),this.g.audio.setLayer("roomtone",.05,1),this.g.audio.motif(!1)}_beat1\u5230\u4E3B\u684C(){this.beat=1.5;let{ui:t,guests:e}=this.g;this.announce("\u5404\u4F4D\u6765\u5BBE\uFF0C\u6B22\u8FCE\u5149\u4E34\u5468\u5E9C\u559C\u5BB4\u3002\u8BF7\u5404\u4F4D\u6765\u5BBE\u2014\u2014\u5165\u5E2D\u3002",14,"\u8BAE\u7A0B\u4E8C \xB7 \u5165\u5E2D"),e.turnTo(0,-18),this.after(8,()=>t.subtitle('\u5468\u7D6E\u7684\u6BCD\u4EB2\u585E\u7ED9\u4F60\u4E00\u5F20\u5355\u5B50\uFF1A"\u4E56\uFF0C\u53BB\u540E\u5934\u5E2E\u62FF\u559C\u7CD6\u3002\u8D70\u5ECA\u76F4\u8D70\u5C31\u662F\u3002"',6.5)),this.after(15,()=>t.objective("\u4ECE<b>\u4E1C\u95E8</b>\u53BB\u670D\u52A1\u8D70\u5ECA \u2014\u2014 \u95E8\u88AB<b>\u62E6\u95E8\u7EF3</b>\u62F4\u7740\u3002\u770B\u51C6\u7EF3\u7AEF\u6309 <b>E</b> \u6458\uFF0C\u518D\u6302\u4E0A\u65C1\u8FB9\u7684\u7A7A\u94A9"))}_beat2\u5F00\u5E2D(){this.beat=2;let{ui:t,waiters:e,sys:n,crt:i}=this.g;this.announce("\u5409\u65F6\u5DF2\u5230\uFF0C\u559C\u5BB4\u2014\u2014\u5F00\u5E2D\u3002",10,"\u8BAE\u7A0B\u4E09 \xB7 \u4E0A\u83DC"),e[0].setVisible(!0),e[0].mountNearest(n,new A(24,0,-6.2)),e[1].setVisible(!0),e[1].mountNearest(n,new A(38.2,0,6)),i.setFutureActive(["corridor"]),this.after(6,()=>t.objective("\u7A7F\u8FC7\u670D\u52A1\u8D70\u5ECA\u53BB<b>\u5927\u5802</b>\u3002\u4F8D\u5E94\u53EA\u6CBF\u7EA2\u7EF3\u6ED1\u2014\u2014\u7EF3\u7F51\u5C31\u662F\u4ED6\u4EEC\u7684\u5168\u90E8\u8DEF\u7EBF\u3002\u53EF\u4EE5<b>\u6539\u6302\u7EA2\u7EF3</b>\u6539\u5199\u5B83\u3002")),this.after(12,()=>t.subtitle("\u4F20\u83DC\u53E3\u7684\u7535\u89C6\u6BD4\u73B0\u5B9E\u65E9\u4E00\u6863\u2014\u2014\u5B83\u5728\u64AD\u8FD9\u6761\u8D70\u5ECA\u63A5\u4E0B\u6765\u7684\u7EF3\u7F51\u3002",6))}_beat3\u656C\u9152\u70B9\u706B(){this.beat=3;let{ui:t,audio:e,L:n,crt:i}=this.g;e.hush(4.5),this.g.post.shock=1.2,t.subtitle("\u5168\u697C\u7684\u58F0\u97F3\u9000\u6F6E\u5F0F\u5730\u6536\u4E86\u2014\u2014\u50CF\u6D77\u5728\u5438\u6C14\u3002",5),this.after(4.5,()=>{e.paChime(),this.after(1.2,()=>{e.broadcast(12,100),this.g.mc.speak(5),t.subtitle("\u3010\u5E7F\u64AD\u3011\u6709\u8BF7\u65B0\u4EBA\uFF0C\u5411\u5404\u4F4D\u6765\u5BBE\u2014\u2014\u656C\u9152\u3002",5),t.card("\u8BAE\u7A0B\u56DB \xB7 \u656C\u9152","\u8FD4\u6F6E")})}),this.after(7.5,()=>{e.motif(!0,.05),e.setLayer("sea",.6,4),e.setLayer("murmur",0,2),e.unhush(1),this.lightMult={hall:.4,corridor:.55,lobby:.42,aqua:.8,connector:.8},n.dyn.fog.density=.022,n.dyn.pits.forEach(r=>r.visible=!0),n.dyn.headlights.mat.opacity=.12,i.setFutureActive(["lobby"]),t.subtitle("\u706F\u6CA1\u706D\u3002\u53EF\u5927\u5802\u50CF\u4E00\u95F4\u88AB\u4F4F\u4E86\u51E0\u5341\u5E74\u7684\u6DF1\u6D77\u3002\u5730\u4E0A\u6709\u51E0\u5757\u4E4C\u4EAE\u7684\u51F9\u5751\u2014\u2014\u6709\u4EC0\u4E48\u4E1C\u897F\u4ECE\u5EFA\u7B51\u91CC\u8D77\u8EAB\u8D70\u4E86\u3002",8),this.g.post.shock=1}),this.after(15,()=>this.triggerCall(!0))}_beat4\u4E0A\u5934(){this.beat=4;let{ui:t,waiters:e,sys:n,crt:i}=this.g;this.announce("\u5409\u65F6\u5DF2\u5230\uFF0C\u8BF7\u5168\u798F\u4EBA\u2014\u2014\u4E0A\u524D\u3002",11,"\u8BAE\u7A0B\u4E94 \xB7 \u4E0A\u5934"),e[2].setVisible(!0),e[2].mountNearest(n,new A(15,0,22)),i.setFutureActive(["aqua"]),this.after(7,()=>t.objective("\u901A\u8FC7<b>\u68C0\u4FEE\u95F8</b>\uFF1A\u95F8\u95E8\u7684\u7EA2\u7EF3\u5361\u5728\u9519\u94A9\u4E0A\u3002\u6302\u5230\u9AD8\u5904<b>\u7EDE\u76D8\u94A9</b>\uFF1D\u6162\u800C\u5B89\u9759\uFF1B\u6302\u5230\u8FD1\u5904<b>\u5361\u6263\u94A9</b>\uFF1D\u5FEB\u4F46\u5DE8\u54CD\u2014\u2014\u73BB\u7483\u53D7\u4E0D\u4E86\u5DE8\u54CD\u3002")),this.after(14,()=>this.g.ui.subtitle("\u552E\u7968\u53F0\u7684\u7535\u89C6\u91CC\uFF0C\u8FD9\u9762\u73BB\u7483\u5DF2\u7ECF\u9677\u8FDB\u6765\u4E86\u3002\u5B83\u5728\u7B49\u4E00\u4E2A\u54CD\u3002",6))}_beat4b\u8FDE\u5ECA(){this.beat=4.5;let{ui:t,gazer:e}=this.g;t.objective("\u6CBF<b>\u5458\u5DE5\u8FDE\u5ECA</b>\u56DE\u5BB4\u4F1A\u5385\u3002"),e.appearAt(-17.1,8,null),t.subtitle("\u8FDE\u5ECA\u5C3D\u5934\u7AD9\u7740\u4E2A\u7A7F\u65E7\u5F0F\u793C\u670D\u7684\u5973\u4EBA\u3002\u5979\u8155\u4E0A\u7684\u7EA2\u7EF3\u2014\u2014\u662F\u526A\u65AD\u7684\u3002",6.5)}_beat5\u9001\u5165\u6D1E\u623F(){this.beat=5;let{ui:t,sys:e,L:n,crt:i,guests:r,bride:a,waiters:o,mc:l,audio:c,post:h}=this.g;l.sync=1,this._lbBase=.6,this.announce("\u9001\u2014\u2014\u5165\u2014\u2014\u6D1E\u2014\u2014\u623F\u2014\u2014",8,"\u8BAE\u7A0B\u516D \xB7 \u9001\u5165\u6D1E\u623F","\u559C\u4E8B\u4E0D\u8BB8\u9000\u5E2D"),this.after(1.2,()=>{c.thud(.7),this.g.player.kick(-.05)}),this.after(5,()=>{n.dyn.throat.visible=!0,this._garlandDrop=0,c.whoosh(.35),h.flash=.35,this.lightMult.hall=.45,this.hallColor.setHex(16734264),n.dyn.fog.density=.03,i.setStatic("T03",!0),i.setFutureActive([]),c.setLayer("sea",1,3),r.layoutFinale([0,-13.5]),a.show(-.9,-14.6,.6),e.clearAllCords(),e.addCord("hW_wall","hStageR",{slack:.3}),e.addCord("hE_wall","hStageL",{slack:.3}),e.addCord("hW_free","hMainA",{slack:.4}),e.addCord("hMainA","hMainB",{slack:.1,tag:"seatlock",rideable:!1}),this._candle||(this._candle=new Xi(16751184,14,9,1.6),this._candle.position.set(0,1.8,-13.5),this.g.scene.add(this._candle));for(let u=0;u<3;u++)o[u].setVisible(!0),o[u].group.position.set(-6+u*6,0,-6),o[u].mountNearest(e,o[u].group.position);this.g.gazer.appearAt(-5.5,-16.2,Math.atan2(2.1- -5.5,-13.5- -16.2)),this.finaleTimer=110,t.objective("\u4E3B\u684C\u4E1C\u4FA7\u7684<b>\u4E0A\u5BBE\u5E2D</b>\u5C31\u662F\u7559\u7ED9\u4F60\u7684\u5E2D\u4F4D \u2014\u2014 \u6458\u4E0B\u6346\u5E2D\u7684\u7EA2\u7EF3\uFF0C\u5230\u5E2D\u524D<b>\u957F\u6309 E \u526A\u65AD\u4F60\u7684\u8155\u7EF3</b>\u3002\u56DE\u7738\u5BA2\u76EF\u7740\u7684\u65B9\u5411\u5C31\u662F\u90A3\u628A\u6905\u5B50\u3002"),this.g.post.shock=1.4})}_cut(){if(this.ended)return;this.ended=!0;let{ui:t,audio:e,mc:n,waiters:i,guests:r,L:a,crt:o,post:l,player:c}=this.g;this.finaleTimer=-1,this.call.active=!1,this.call.waiter=null,t.callHint(!1),t.timer(!1),t.prompt(""),t.cutRing(0),t.reticle(""),e.snip(),e.hush(.5),e.setLayer("sea",0,6),e.setThreat(0,0),l.flash=.8,l.shock=1.6,c.kick(-.1,.05),this._lbBase=1,l.letterboxTarget=1,n.silenced=!0,i.forEach(h=>{h.state="stand",h.standTimer=1e9}),r.turnTo(0,8),o.setStatic("T01",!0),o.setStatic("T02",!0),o.setStatic("T07",!0),this.g.wrist.mat.color.setHex(2761766),this.g.wrist.mat.emissive.setHex(0),t.subtitle("\u7EF3\u65AD\u7684\u90A3\u4E00\u58F0\u4E4B\u540E\u2014\u2014\u6574\u680B\u697C\u7B2C\u4E00\u6B21\u6CA1\u6709\u58F0\u97F3\u3002\u53F8\u4EEA\u5F20\u7740\u5C01\u6B7B\u7684\u53E3\uFF0C\u5E7F\u64AD\u91CC\u4EC0\u4E48\u4E5F\u6CA1\u6709\u3002",8),this.after(4,()=>{e.motif(!0,.035),t.subtitle("\u8EAB\u540E\uFF0C\u7EA2\u5E55\u540E\u9762\uFF0C\u6709\u5F88\u957F\u5F88\u957F\u7684\u4E1C\u897F\u6781\u6162\u5730\u677E\u5F00\u4E86\u8FD9\u680B\u697C\u3002",7),a.dyn.doorSOpen=!0,a.dyn.doorSCollider.disabled=!0,a.dyn.headlights.mat.opacity=.9,this._lbBase=.6,l.letterboxTarget=.6,t.objective("\u6563\u573A\u4E86 \u2014\u2014 \u4ECE<b>\u6B63\u95E8</b>\u51FA\u53BB\u3002")})}_goodEnd(){if(this._finished)return;this._finished=!0;let{ui:t,audio:e,L:n,post:i}=this.g;n.dyn.headlights.mat.opacity=1,i.flash=1.2,i.letterboxTarget=1,e.motif(!1,.045),t.fade(1,3),e.setLayer("roomtone",0,2),this.after(3.2,()=>{t.end("\u6563 \u573A",'\u6D77\u96FE\u91CC\u505C\u7740\u4E00\u6392\u8F66\uFF0C\u8F66\u706F\u5168\u4EAE\u7740\u3002<br>\u6CA1\u6709\u4EBA\u6309\u5587\u53ED\u3002\u6CA1\u6709\u4EBA\u50AC\u3002<br><br>\u4F60\u8155\u4E0A\u7684\u7EF3\u5934\u8FD8\u5728\uFF0C\u526A\u65AD\u7684\u3002<br>\u548C\u90A3\u4E2A\u5973\u4EBA\u7684\u4E00\u6837\u3002<br><br><div class="credits">\u300A\u8FD4\u6F6E FANCHAO\u300B\xB7\u300C\u559C\u5BB4\u300D\u5782\u76F4\u5207\u7247 v1.0<br>\u8BBE\u8BA1 / \u7A0B\u5E8F / \u7F8E\u672F / \u97F3\u9891 \u2014\u2014 \u8FD4\u6F6E\u5236\u4F5C\u7EC4<br>\u672C\u5305\u5168\u90E8\u8D44\u4EA7\uFF08\u7EB9\u7406\xB7\u6A21\u578B\xB7\u5149\u7167\xB7\u97F3\u9891\uFF09\u5747\u4E3A\u7A0B\u5E8F\u5316\u751F\u6210<br>2001 \xB7 \u8680\u6E7E \xB7 \u5357\u65B9\u5927\u9152\u5E97</div>',"\u518D\u6765\u4E00\u904D",()=>location.reload())})}_badEnd(){if(this.ended)return;this.ended=!0;let{ui:t,audio:e,L:n,post:i}=this.g;t.timer(!1),t.cutRing(0),t.fade(1,1.2),i.letterboxTarget=1,e.broadcast(6,92),e.sting(.5),n.dyn.cardYou.mat.map=n.dyn.cardYou.flip,n.dyn.cardYou.mat.needsUpdate=!0,this.after(1.6,()=>{t.end("\u60A8\u7684\u4F4D\u7F6E\u5728\u8FD9\u8FB9","\u8BAE\u7A0B\u8D70\u5B8C\u7684\u65F6\u5019\uFF0C\u4F60\u8FD8\u5750\u5728\u5E2D\u4E0A\u3002<br><br>\u4F8D\u5E94\u628A\u4F60\u9762\u524D\u7684\u684C\u724C\u8F7B\u8F7B\u7FFB\u4E86\u8FC7\u6765\u3002<br>\u724C\u9762\u4E0A\u5199\u7684\u4E0D\u662F\u4F60\u7684\u540D\u5B57\u3002<br>","\u91CD\u6765\u8FD9\u4E00\u6BB5",()=>this._retryFinale(),!0)})}_retryFinale(){let{ui:t,player:e}=this.g;t.hideEnd(),this.ended=!1,this._finished=!1,e.seated=!1,this.escorting=!1,e.teleport(-13.8,-6,-Math.PI/2),t.fade(0,1.5),this.beat=4.9,this.after(.8,()=>this._beat5\u9001\u5165\u6D1E\u623F())}update(t){let e=this.g,n=e.player.pos;for(let i=this._pending.length-1;i>=0;i--)if(this._pending[i].t-=t,this._pending[i].t<=0){let r=this._pending[i].fn;this._pending.splice(i,1),r()}if(this.noise=Math.max(0,this.noise-t*.1),this.noiseCooldown=Math.max(0,this.noiseCooldown-t),this.grace=Math.max(0,this.grace-t),this.beat===1&&n.distanceTo(new A(0,0,-11.5))<3.4?this._beat1\u5230\u4E3B\u684C():this.beat===1.5&&n.x>15.4?this._beat2\u5F00\u5E2D():this.beat===2&&n.z>14.5?this._beat3\u656C\u9152\u70B9\u706B():this.beat===3&&n.x<23.5&&n.z>19?this._beat4\u4E0A\u5934():this.beat===4&&n.x<2.5&&n.z>19?this._beat4b\u8FDE\u5ECA():this.beat===4.5&&n.x>-15&&n.z<0&&n.z>-20?this._beat5\u9001\u5165\u6D1E\u623F():this.ended&&this._doorOpen()&&n.z>5.5&&this._goodEnd(),this.beat===2&&!this._shock1&&n.x>25&&n.z<0&&this._shockCorridor(),this.beat>=4&&this.beat<5&&!this._shock2&&n.z>20.5&&n.x<16&&n.x>-10&&this._shockGlass(),this.beat===4.5&&!this._shock3&&n.x<-15&&n.z<12&&n.z>-4&&this._shockBulb(),this._shadeLunge){let i=this._shadeLunge,r=e.L.dyn.seaShade;if(i.t+=t,i.t<.55){let a=i.t/.55;r.position.x+=(n.x+2-r.position.x)*a*.4,r.position.z=26.2-a*1.5,r.position.y=i.fromY+(1.7-i.fromY)*a,r.scale.setScalar(1+a*.4)}else i.t<4?(r.position.z+=(26.2-r.position.z)*t*.7,r.position.y+=(3.2-r.position.y)*t*.5):(r.scale.setScalar(1),this._shadeLunge=null)}if(this._garlandDrop!==void 0&&this._garlandDrop<1){this._garlandDrop=Math.min(1,this._garlandDrop+t*.7);let i=this._garlandDrop,r=1.70158,o=1+(r+1)*Math.pow(i-1,3)+r*Math.pow(i-1,2);e.L.dyn.garlands.forEach((l,c)=>{l.position.y=(-1.4-c%2*.5)*o})}this.call.active&&(e.wrist.glow=1,e.post.redPulse=.5+Math.sin(performance.now()*.008)*.3,Math.floor(performance.now()/800)!==this._hb&&(this._hb=Math.floor(performance.now()/800),e.audio.heartbeat())),this.finaleTimer>0&&!this.ended&&(this.finaleTimer-=t,e.ui.timer(!0,this.finaleTimer/110),this.finaleTimer<30&&!this._warn30&&(this._warn30=!0,e.ui.subtitle("\u53F8\u4EEA\u7684\u624B\u52BF\u548C\u5E7F\u64AD\u5DF2\u7ECF\u5B8C\u5168\u540C\u6B65\u4E86\u3002\u5FEB\u3002",4)),this.finaleTimer<=0&&(this.finaleTimer=-1,this._badEnd()));for(let i of Object.keys(e.L.lights))for(let r of e.L.lights[i]){let a=(r.userData.base??r.intensity)*(this.lightMult[i]??1);r.intensity+=(a-r.intensity)*t*1.5,i==="hall"&&this.beat>=5&&r.color.lerp(this.hallColor,t*.8)}}_doorOpen(){return!!this.g.L.dyn.doorSOpen}};function Dx(s,t=128,e=128){let n=document.createElement("canvas");n.width=t,n.height=e,s(n.getContext("2d"),t,e);let i=new En(n);return i.wrapS=i.wrapT=Xn,i}var ah={};function gd(s="255,228,180"){if(ah[s])return ah[s];let t=Dx((e,n,i)=>{e.fillStyle="#000",e.fillRect(0,0,n,i);let r=e.createLinearGradient(0,0,0,i);r.addColorStop(0,`rgba(${s},0.7)`),r.addColorStop(.35,`rgba(${s},0.3)`),r.addColorStop(1,`rgba(${s},0)`),e.fillStyle=r,e.fillRect(0,0,n,i)},64,256);return ah[s]=t,t}var Ml=class{constructor(t){this.scene=t,this.cones=[],this.dust=[],this.caustics=[],this.time=0}addCone(t,e,n,i,r,a,o,l,c="255,228,180",h=null){let u=new Ft(i,r,a,14,1,!0),d=new ne({map:gd(c),transparent:!0,opacity:o,blending:In,depthWrite:!1,side:we,fog:!1}),f=new U(u,d);return f.position.set(t,e-a/2,n),f.renderOrder=5,this.scene.add(f),this.cones.push({mesh:f,mat:d,base:o,group:l,light:h}),f}addShaft(t,e,n,i,r,a,o,l,c,h="210,235,225"){let u=new ne({map:gd(h),transparent:!0,opacity:l,blending:In,depthWrite:!1,side:we,fog:!1}),d=new U(new se(i,r),u);return d.position.set(t,e,n),d.rotation.y=a,d.rotation.z=o,d.renderOrder=5,this.scene.add(d),this.cones.push({mesh:d,mat:u,base:l,group:c,light:null}),d}addGroundFog(t,e,n,i,r,a,o,l="200,190,170"){this._fogMats||(this._fogMats=[]);let c=new $e({uniforms:{uTime:{value:0},uColor:{value:new Vt(`rgb(${l})`)},uOpacity:{value:a}},vertexShader:`
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
        }`,transparent:!0,depthWrite:!1}),h=new U(new se(i,r),c);return h.rotation.x=-Math.PI/2,h.position.set(t,e,n),h.renderOrder=4,this.scene.add(h),this._fogMats.push({mat:c,base:a,group:o}),h}addDust(t,e,n=.035,i=14207144,r=.5,a="hall"){let[o,l,c,h,u,d]=t,f=new Float32Array(e*3),g=new Float32Array(e);for(let b=0;b<e;b++)f[b*3]=o+Math.random()*(h-o),f[b*3+1]=l+Math.random()*(u-l),f[b*3+2]=c+Math.random()*(d-c),g[b]=Math.random()*6.28;let y=new Xe;y.setAttribute("position",new xn(f,3)),y.setAttribute("aPhase",new xn(g,1));let p=new $e({uniforms:{uTime:{value:0},uSize:{value:n*500},uColor:{value:new Vt(i)},uOpacity:{value:r}},vertexShader:`
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
        }`,transparent:!0,depthWrite:!1,blending:In}),m=new _r(y,p);return m.renderOrder=6,m.frustumCulled=!1,this.scene.add(m),this.dust.push({points:m,mat:p,group:a,base:r}),m}_causticTex(){if(this._ct)return this._ct;let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,256),e.strokeStyle="rgba(150,255,235,0.55)",e.lineWidth=2.4;let n=[];for(let r=0;r<42;r++)n.push([Math.random()*256,Math.random()*256]);for(let[r,a]of n){e.beginPath();let o=5+(Math.random()*3|0);for(let l=0;l<=o;l++){let c=l/o*Math.PI*2,h=14+Math.random()*26,u=r+Math.cos(c)*h,d=a+Math.sin(c)*h;l===0?e.moveTo(u,d):e.quadraticCurveTo(r+Math.cos(c-.4)*h*1.35,a+Math.sin(c-.4)*h*1.35,u,d)}e.stroke()}e.filter="blur(2px)",e.drawImage(t,0,0),e.filter="none";let i=new En(t);return i.wrapS=i.wrapT=si,this._ct=i,i}addCaustics(t,e,n,i,r,a,o,l=.1,c="aqua"){for(let h=0;h<2;h++){let u=this._causticTex().clone();u.needsUpdate=!0,u.repeat.set(i/6,r/6);let d=new ne({map:u,transparent:!0,opacity:l*(h?.6:1),blending:In,depthWrite:!1,color:5888200,fog:!1}),f=new U(new se(i,r),d);f.position.set(t,e+h*.012,n),f.rotation.x=a,f.rotation.y=o,f.renderOrder=4,this.scene.add(f),this.caustics.push({mesh:f,mat:d,tex:u,dir:h?-1:1,base:l*(h?.6:1),group:c})}}update(t,e){if(this.time+=t,this._fogMats)for(let n of this._fogMats){n.mat.uniforms.uTime.value=this.time;let i=e[n.group]??1;n.mat.uniforms.uOpacity.value=n.base*(1.35-i*.35)}for(let n of this.cones){let r=e[n.group]??1;n.light&&(r*=je.clamp(n.light.intensity/Math.max(.01,n.light.userData.base??n.light.intensity),0,1.4)),n.mat.opacity=n.base*r*(.94+Math.sin(this.time*1.7+n.mesh.position.x)*.06)}for(let n of this.dust)n.mat.uniforms.uTime.value=this.time,n.mat.uniforms.uOpacity.value=n.base*(.4+.6*(e[n.group]??1));for(let n of this.caustics){n.tex.offset.x+=t*.021*n.dir,n.tex.offset.y+=t*.013*n.dir;let i=1+Math.sin(this.time*.5*n.dir)*.06;n.mat.opacity=n.base*(e[n.group]??1)*(.8+Math.sin(this.time*1.1+n.dir)*.2)*i}}};var uh=document.getElementById("c"),mi=new tl({canvas:uh,antialias:!1,powerPreference:"high-performance"});mi.setPixelRatio(Math.min(window.devicePixelRatio,1.5));mi.setSize(window.innerWidth,window.innerHeight);mi.shadowMap.enabled=!0;mi.shadowMap.type=ao;mi.outputColorSpace=an;mi.toneMapping=kn;var qe=new Si;qe.background=new Vt(854536);var Xs=new sn(66,window.innerWidth/window.innerHeight,.05,140),xe=fd(qe,mi);{let s=new U(new se(40,24),new G({color:1841688,roughness:.95}));s.rotation.x=-Math.PI/2,s.position.set(0,-.01,12),qe.add(s);let t=new U(new se(70,20),new ne({color:329482,fog:!1}));t.position.set(0,6,19.6),t.rotation.y=Math.PI,qe.add(t);let e=new U(new se(34,9),new ne({color:12108990,transparent:!0,opacity:.3,depthWrite:!1}));e.position.set(0,3.2,16.5),e.rotation.y=Math.PI,qe.add(e);let n=new U(new se(26,5),new ne({color:9411732,transparent:!0,opacity:.2,depthWrite:!1}));n.position.set(2,1.6,13),n.rotation.y=Math.PI,qe.add(n);for(let i=0;i<4;i++){let r=new U(new se(2.4,1.6),xe.dyn.headlights.mat);r.position.set(-6+i*4+i%2,.9,13+i%2*1.5),r.rotation.y=Math.PI,qe.add(r)}xe.colliders.push({minX:-7,minZ:0,maxX:-6.5,maxZ:12}),xe.colliders.push({minX:6.5,minZ:0,maxX:7,maxZ:12})}var rn=new ml,Pe=new yl,re=new gl(Xs,uh);re.yaw=0;var Et=new cl(qe,rn);Et.addHook("hE_doorL",14.72,1.5,-4,-1,0,0);Et.addHook("hE_doorR",14.72,1.5,-8.2,-1,0,0);Et.addHook("hE_free",14.72,1.6,-1.6,-1,0,0);Et.addHook("hStageL",-6,2.3,-16.85,0,0,1);Et.addHook("hStageR",6,2.3,-16.85,0,0,1);Et.addHook("hW_wall",-14.72,1.6,-10,1,0,0);Et.addHook("hE_wall",14.72,1.6,-10,-1,0,0);Et.addHook("hW_free",-14.72,1.6,-2.5,1,0,0);Et.addHook("hMainA",1.1,.95,-12.2,0,0,1);Et.addHook("hMainB",3.2,.95,-14.6,1,0,0);Et.addHook("hC1",17,2,-7.75,0,0,1);Et.addHook("hC2",23,2,-4.65,0,0,-1);Et.addHook("hC3",29,2,-7.75,0,0,1);Et.addHook("hC4",35,2,-4.65,0,0,-1);Et.addHook("hC5",39.7,2,-6.4,-1,0,0);Et.addHook("hC6",36.7,2,2,1,0,0);Et.addHook("hC7",39.7,2,8,-1,0,0);Et.addHook("hC8",36.7,2,13.4,1,0,0);Et.addHook("hAlcove",19.5,2,-7.75,0,0,1);Et.addHook("hDesk",44.7,1.3,24,-1,0,0);Et.addHook("hCol1",30.7,1.7,18,1,0,0);Et.addHook("hCol2",41.3,1.7,26,-1,0,0);Et.addHook("hWest1",24.35,1.6,19.8,1,0,0);Et.addHook("hWest2",24.35,1.6,23.4,1,0,0);Et.addHook("hLFree",28,1.7,29.6,0,0,-1);Et.addHook("hGateTop",4,3.25,22,0,0,1,!0);Et.addHook("hJam",7.5,1.5,20.42,0,0,1);Et.addHook("hWinch",11,2.7,20.42,0,0,1);Et.addHook("hSnap",5.6,1.1,23.5,0,0,-1);Et.addHook("hAqP1",21,2,20.42,0,0,1);Et.addHook("hAqP2",15,2,23.5,0,0,-1);Et.addHook("hAqP3",9,2,20.42,0,0,1);{let s=new U(new on(.12,.03,8,16),new G({color:13081146,metalness:.85,roughness:.35}));s.position.set(11,2.85,20.45),qe.add(s);let t=new U(new se(.9,.26),new G({map:pn("\u7EDE \u76D8","#e8d8b0","#33403a",80),roughness:.9}));t.position.set(11,2.2,20.48),qe.add(t)}Et.addCord("hE_doorL","hE_doorR",{tag:"doorE",slack:.25,rideable:!1});Et.addCord("hC1","hC2");Et.addCord("hC2","hC3");Et.addCord("hC3","hC4");Et.addCord("hC4","hC5");Et.addCord("hC5","hC6");Et.addCord("hC6","hC7");Et.addCord("hC7","hC8");Et.addCord("hWest1","hWest2",{tag:"doorC",slack:.25,rideable:!1});Et.addCord("hCol1","hCol2");Et.addCord("hCol2","hDesk");Et.addCord("hGateTop","hJam",{tag:"gate",slack:.15,rideable:!1,fixedEnd:"a"});Et.addCord("hAqP1","hAqP2");Et.addCord("hAqP2","hAqP3");var bd=[{tag:"doorE",a:"hE_doorL",b:"hE_doorR",col:{minX:14.4,minZ:-8.2,maxX:15.6,maxZ:-4,disabled:!1}},{tag:"doorC",a:"hWest1",b:"hWest2",col:{minX:23.9,minZ:19.8,maxX:24.9,maxZ:23.4,disabled:!1}}];bd.forEach(s=>xe.colliders.push(s.col));var El=new ll(qe);for(let s=0;s<=12;s++){let t=s/12;El.trail.push(new A(2.1*(1-t),.06,-13.5+t*10.5))}var Sd=new ul(qe),Gr=[new Ws(qe,0),new Ws(qe,1),new Ws(qe,2)],Td=new dl(qe,44),zr=new fl(qe),wd=new pl(qe),dh=new _l(mi,qe,xe.screens,xe.future),Ki=new xl(mi,window.innerWidth,window.innerHeight),tn=new Ml(qe);tn.addCone(0,5.2,-5,.75,3.4,5.2,.055,"hall");tn.addCone(0,5.2,-12,.75,3.4,5.2,.055,"hall");{let s=tn.addCone(0,0,0,.35,2.5,8.4,.06,"hall");s.position.set(0,4,-15.1);let t=new A(0,1.4-6.6,-18.2+12).normalize();s.quaternion.setFromUnitVectors(new A(0,-1,0),t)}tn.addCone(36,6.4,22,1.5,5.4,6.6,.05,"lobby");tn.addShaft(36,2.4,28.6,6.2,4.6,Math.PI,0,.045,"lobby","185,210,200");for(let s of xe.dyn.tubes){let t=s.light.position;tn.addCone(t.x,3.1,t.z,.45,1.35,3,.05,"corridor","208,238,218",s.light)}for(let s of xe.dyn.bulbs)tn.addCone(s.light.position.x,2.65,s.light.position.z,.1,.7,2.5,.035,"connector","255,214,150",s.light);tn.addCaustics(2.5,.045,22,43,4.2,-Math.PI/2,0,.16,"aqua");tn.addCaustics(2.5,1.6,20.2,43,3,0,0,.07,"aqua");tn.addDust([-14,.3,-19,14,6.4,-.5],320,.035,14207144,.5,"hall");tn.addDust([25,.3,15,47,7.4,29],260,.035,13681828,.45,"lobby");tn.addDust([-18,.2,20.3,23,3.2,23.8],240,.03,10475724,.55,"aqua");tn.addDust([16,.3,-7.6,39.5,3,13.5],170,.028,13162686,.4,"corridor");tn.addDust([-18.6,.3,-7,-15.6,2.8,19],120,.03,14207144,.4,"connector");tn.addGroundFog(0,.28,-10,30,20,.14,"hall","186,140,110");tn.addGroundFog(0,.85,-14,26,11,.08,"hall","200,130,100");tn.addGroundFog(2.5,.32,22,43,4.4,.2,"aqua","140,196,186");tn.addGroundFog(36,.3,26.5,22,8,.16,"lobby","176,186,176");tn.addGroundFog(-17.1,.26,6,4.2,26,.15,"connector","190,200,196");tn.addGroundFog(0,.4,11,30,15,.24,"lobby","168,182,172");function Rd(s){for(let t of xe.regions)if(s.x>=t.box[0]&&s.z>=t.box[1]&&s.x<=t.box[2]&&s.z<=t.box[3])return t;return{name:"",mat:"terrazzo"}}function Ad(s){return Rd(s).name}var Cd={scene:qe,L:xe,sys:Et,wrist:El,player:re,audio:rn,ui:Pe,crt:dh,mc:Sd,waiters:Gr,guests:Td,gazer:zr,bride:wd,post:Ki,regionNameAt:Ad},ze=new vl(Cd);Et.onTopologyChange=s=>{Gr.forEach(t=>t.onTopologyChange(Et,s))};Et.onNoise=s=>ze.addNoise(s);re.onStep=(s,t)=>{let e=s.mat;s.name==="\u5BB4\u4F1A\u5385"&&Math.abs(re.pos.x)>2.2&&(e="terrazzo"),s.name==="\u5927\u5802"&&Math.abs(re.pos.x-36)>2.4?e="terrazzo":s.name==="\u5927\u5802"&&(e="carpet"),rn.footstep(e,t),ze.addNoise(t?.07:.016)};var Ux=s=>ze.escort(s),xd=!1;function Nx(s){let t=xe.dyn.gate,e=Et.cords.find(i=>i.tag==="gate"),n=.55;if(e&&!e.heldEnd){let i=e.b===Et.hook("hGateTop")?e.a:e.b;if(i===Et.hook("hJam"))t.targetY=1.6;else if(i===Et.hook("hWinch"))t.targetY=4.9,n=.5,Math.abs(t.y-t.targetY)>.02&&Math.floor(t.y*6)!==Math.floor((t.y-n*s)*6)&&rn.ratchet();else if(i===Et.hook("hSnap")){if(t.targetY=4.9,n=6,!xd&&t.y<4.5){xd=!0,rn.thud(.9),ze.addNoise(1.3),Pe.subtitle("\u95F8\u95E8\u5F39\u4E0A\u53BB\u7684\u5DE8\u54CD\u649E\u5728\u73BB\u7483\u4E0A\u2014\u2014\u88C2\u7EB9\u6CBF\u7740\u9884\u73B0\u91CC\u7684\u5F27\u7EBF\u722C\u4E86\u51FA\u6765\u3002",6),xe.dyn.cracks.forEach(r=>{r.material.opacity=.85}),dh.setStatic("T07",!0);for(let r=0;r<4;r++)setTimeout(()=>rn.glassCreak(),r*700);Ki.shock=1.4}}else t.targetY=t.y}if(Math.abs(t.y-t.targetY)>.01){let i=Math.sign(t.targetY-t.y);t.y+=i*n*s,i>0&&t.y>t.targetY&&(t.y=t.targetY),i<0&&t.y<t.targetY&&(t.y=t.targetY),t.group.position.y=t.y,n<1&&Math.random()<s*3&&rn.creakLow()}t.collider.disabled=t.y>3.1}var _d=new A(2.1,0,-13.5),Ln=0;function Fx(s){if(re.seated){Pe.reticle(""),re.holdE>1.2&&ze.standUp();return}if(ze.beat>=5&&!ze.ended){let n=Et.cords.find(a=>a.tag==="seatlock"),i=!(n&&!n.heldEnd&&(n.a===Et.hook("hMainA")&&n.b===Et.hook("hMainB")||n.a===Et.hook("hMainB")&&n.b===Et.hook("hMainA"))),r=re.pos.distanceTo(_d);if(window.__cut={d:+r.toFixed(2),seatFree:i,eDown:re.eDown,cutHold:+Ln.toFixed(2),seated:re.seated,escorting:ze.escorting,callActive:ze.call.active,held:!!Et.held,lockEnds:n?[n.a?.id||"held",n.b?.id||"held"].join("~"):"none"},r<2)if(!i)Pe.prompt("\u5E2D\u4F4D\u88AB\u7EA2\u7EF3\u6346\u7740 \u2014\u2014 \u5148<b>\u6458\u4E0B</b>\u6346\u5E2D\u7684\u7EF3\uFF08\u5BF9\u51C6\u7EF3\u7AEF\u6309 E\uFF09"),Pe.cutRing(0);else if(re.eDown){Ln+=s,Pe.prompt("\u522B\u677E\u624B \u2014\u2014 <b>\u526A\u65AD\u8155\u7EF3</b>","E"),Pe.reticle("park"),Pe.cutRing(Ln/2.2),re.kick((Math.random()-.5)*.02*(1+Ln),(Math.random()-.5)*.012*Ln),Ki.redPulse=Math.max(Ki.redPulse,Ln/2.2*.7),Gr.forEach(a=>{a.visible&&a.startChase()}),Math.floor(Ln*3)!==Math.floor((Ln-s)*3)&&rn.heartbeat(),Math.floor(Ln*6)!==Math.floor((Ln-s)*6)&&rn.pluck(300+Ln*300,.12,.99),Ln>=2.2&&(ze._cut(),Ln=0,Pe.cutRing(0));return}else Ln=0,Pe.cutRing(0),Pe.prompt("\u5728\u4F60\u7684\u5E2D\u4F4D\u524D\uFF0C<b>\u957F\u6309</b>\u526A\u65AD\u8155\u7EF3","E");else Ln=0,Pe.cutRing(0)}if(ze.call.active){let n=Et.nearestHook(re.pos,2.4);if(Et.hooks.forEach(i=>i.setHighlight(!1)),n){if(n.setHighlight(!0),Pe.reticle("park"),Pe.prompt("\u628A\u8155\u7EF3<b>\u5BC4\u6302</b>\u5230\u8FD9\u53EA\u793C\u94A9\u4E0A","E"),re.ePressedThisFrame){ze.resolveCall(),n.pop(),re.kick(-.03);let i=new U(new Kt(.045,8,8),new G({color:9309202,roughness:.8}));i.position.copy(n.pos),qe.add(i),Pe.prompt(""),Pe.reticle("")}return}}let t=Xs.position,e=Et.nearestTarget(t,re.lookDir,2.8);if(!e&&zn){let n=zn.type==="cordEnd"?zn.cord.endPos(zn.end):zn.hook.pos,i=n.clone().sub(t),r=i.length();(zn.type==="cordEnd"?!Et.held&&Et.cords.includes(zn.cord)&&zn.cord.fixedEnd!==zn.end:Et.held&&!zn.hook.locked&&zn.hook.cords.length<3)&&r<2.9&&i.normalize().dot(re.lookDir)>.5&&(e={...zn,pos:n,dist:r})}zn=e,Et.hooks.forEach(n=>n.setHighlight(!1)),yd+=s;for(let n of Et.cords)n.knotA.scale.setScalar(1),n.knotB.scale.setScalar(1);if(e){if(e.type==="cordEnd"){e.cord.mat.emissiveIntensity=2.8,(e.end==="a"?e.cord.knotA:e.cord.knotB).scale.setScalar(1.35+Math.sin(yd*9)*.14),Pe.reticle("grab");let i={doorE:"\uFF08\u62E6\u95E8\u7EF3\uFF09",doorC:"\uFF08\u62E6\u95E8\u7EF3\uFF09",gate:"\uFF08\u95F8\u95E8\u540A\u7EF3\uFF09",seatlock:"\uFF08\u6346\u5E2D\u7EF3\uFF09"}[e.cord.tag]||"";Pe.prompt(`<b>\u6458</b>\u4E0B\u7EA2\u7EF3${i}`,"E"),re.ePressedThisFrame&&(Et.grab(e.cord,e.end),rn.whoosh(.14),re.kick(-.035,.012),re.punchFov(-3.2),Pe.ripple())}else if(e.type==="hook"){e.hook.setHighlight(!0),Pe.reticle("hang");let n={hWinch:"\uFF08\u7EDE\u76D8 \xB7 \u5B89\u9759\uFF09",hSnap:"\uFF08\u5361\u6263 \xB7 \u5DE8\u54CD\uFF09",hJam:"\uFF08\u5361\u6B7B\u4F4D\uFF09"}[e.hook.id]||"";Pe.prompt(`\u628A\u7EF3<b>\u6302</b>\u4E0A\u793C\u94A9${n}`,"E"),re.ePressedThisFrame&&(Et.hang(e.hook),re.kick(.028,-.01),re.punchFov(2.6),Pe.ripple())}}else Et.held?(Pe.reticle(""),Pe.prompt("\u62FF\u7740\u7EA2\u7EF3 \u2014\u2014 \u8D70\u5411<b>\u547C\u5438\u53D1\u4EAE</b>\u7684\u793C\u94A9\u6302\u4E0A","E")):!ze.call.active&&!(ze.beat>=5&&re.pos.distanceTo(_d)<2)&&(Pe.reticle(""),Pe.prompt(""))}var zn=null,yd=0,oh=new A;function Bx(){let s=null,t=1e9;for(let a of Gr){if(!a.visible)continue;let o=a.group.position.distanceTo(re.pos);o<t&&(t=o,s=a)}if(!s||t>14){rn.setThreat(0,0),rn.setCordHum(0,0),Pe.threat(0,0);return}oh.copy(s.group.position).sub(re.pos);let e=re.forward,n=je.clamp(oh.x*-e.z-oh.z*-e.x,-8,8)/8,i=s.state==="chase"||s.state==="alert",r=je.clamp(1-t/14,0,1);rn.setThreat(i?Math.min(1,r*1.6+.25):r*.4,n),rn.setCordHum(s.state==="ride"?r*r:0,n),Pe.threat(i?Math.min(1,r*1.3+.15):0,n)}function Hx(){for(let s of bd){let t=Et.cords.find(n=>n.tag===s.tag),e=!!(t&&!t.heldEnd&&(t.a===Et.hook(s.a)&&t.b===Et.hook(s.b)||t.a===Et.hook(s.b)&&t.b===Et.hook(s.a)));s.col.disabled=!e}}var lh=5,ch=7;function Ox(s,t){for(let i of xe.dyn.tubes)if((i.flicker||ze.beat>=3)&&Math.random()<s*(i.flicker?2.2:.5)){let a=.25+Math.random()*.75;i.mat.emissiveIntensity=2.6*a,i.light.intensity=i.light.userData.base*a*(ze.lightMult.corridor??1)}if(ze.beat>=3){let i=xe.dyn.lobbyChand;i.group.rotation.z=Math.sin(t*.6)*.05,i.group.rotation.x=Math.cos(t*.43)*.04,i.group.position.x=36+Math.sin(t*.6)*.3}xe.dyn.waterLights.forEach((i,r)=>{i.intensity=i.userData.base*(.7+Math.sin(t*(.8+r*.3)+r*2)*.3),i.position.x+=Math.sin(t*.22+r*3)*s*1.2});for(let i of xe.dyn.bulbs)i.group.rotation.x=Math.sin(t*1.1+i.phase)*.14,i.group.rotation.z=Math.cos(t*.9+i.phase)*.1;let e=ze.beat>=3?.12:.04;for(let i of xe.dyn.lanterns)i.group.rotation.x=Math.sin(t*.7+i.phase)*e,i.group.rotation.z=Math.cos(t*.55+i.phase)*e*.7,i.glowMat&&(i.glowMat.opacity=.8+Math.sin(t*2.3+i.phase*3)*.12+Math.sin(t*7.1+i.phase)*.06);if(xe.dyn.flames)for(let i of xe.dyn.flames){let r=1+Math.sin(t*9+i.phase)*.12+Math.sin(t*23+i.phase*2)*.07;i.mesh.scale.set(r,1/r*(1+Math.sin(t*5.7+i.phase)*.1),1),i.mesh.position.y=i.y0+Math.sin(t*11+i.phase)*.004,i.mat.opacity=.85+Math.sin(t*13+i.phase)*.12}if(xe.dyn.veilDrift){let i=xe.dyn.veilDrift;i.rotation.x=t*.11,i.rotation.y=Math.sin(t*.07)*1.2,i.rotation.z=t*.05,i.position.y=2+Math.sin(t*.13)*.5,i.position.x=8+Math.sin(t*.05)*2.5}if(xe.dyn.kelps)for(let i of xe.dyn.kelps)i.mesh.rotation.z=Math.sin(t*.4+i.phase)*.12,i.mesh.position.x+=Math.sin(t*.23+i.phase)*s*.15;if(xe.dyn.strips)for(let i of xe.dyn.strips)i.mesh.rotation.x=Math.sin(t*.8+i.phase)*.05;if(xe.dyn.beams){for(let i of xe.dyn.beams)i.mesh.position.x=i.x0+Math.sin(t*.18+i.phase)*2.4,i.mesh.rotation.z=.25+Math.sin(t*.22+i.phase)*.1,i.mesh.material.opacity=.1+Math.sin(t*.35+i.phase)*.05;xe.dyn.seaShade.position.x=-6+Math.sin(t*.05)*12,xe.dyn.seaShade.position.y=3.2+Math.sin(t*.11)*.8}let n=Ad(re.pos);rn.setLayer("water",n==="\u6D77\u6D0B\u9986\u8FDE\u5ECA"?.05:0,1.5);{let r=ze.beat>=5?{\u5BB4\u4F1A\u5385:1.1,\u670D\u52A1\u8D70\u5ECA:.98,\u5927\u5802:1.04,\u6D77\u6D0B\u9986\u8FDE\u5ECA:1.02,\u5458\u5DE5\u8FDE\u5ECA:.94}:{\u5BB4\u4F1A\u5385:1.32,\u670D\u52A1\u8D70\u5ECA:1,\u5927\u5802:1.16,\u6D77\u6D0B\u9986\u8FDE\u5ECA:1.06,\u5458\u5DE5\u8FDE\u5ECA:.95};Ki.exposureTarget=r[n]??1.12}if(Ki.dreadTarget=rn.hushed?1:0,n==="\u5458\u5DE5\u8FDE\u5ECA"&&(lh-=s,lh<=0&&(lh=4+Math.random()*6,rn.creakLow())),n==="\u6D77\u6D0B\u9986\u8FDE\u5ECA"&&ze.beat>=4&&(ch-=s,ch<=0&&(ch=5+Math.random()*7,rn.glassCreak())),xe.dyn.doorSOpen){let{dL:i,dR:r}=xe.dyn.doorS.userData;i.position.x+=(-3.2-i.position.x)*s*.8,r.position.x+=(3.2-r.position.x)*s*.8}for(let i of Object.keys(xe.lights))for(let r of xe.lights[i]){let a=r.position.distanceTo(re.pos);r.visible=a<55}}var vd=document.getElementById("title"),kx=document.getElementById("startBtn"),Pd=document.getElementById("resume"),zx=document.getElementById("ctlBtn"),Md=document.getElementById("ctlPanel"),bl=!1;zx.addEventListener("click",()=>{Md.style.display=Md.style.display==="block"?"none":"block"});kx.addEventListener("click",()=>{rn.init(),vd.style.opacity=0,setTimeout(()=>{vd.style.display="none"},900),re.enabled=!0,re.lock(),bl||(bl=!0,ze.start())});document.addEventListener("pointerlockchange",()=>{bl&&(Pd.style.display=document.pointerLockElement===uh?"none":"flex")});Pd.addEventListener("click",()=>re.lock());document.getElementById("pauseRestart").addEventListener("click",s=>{s.stopPropagation(),location.reload()});window.addEventListener("resize",()=>{Xs.aspect=window.innerWidth/window.innerHeight,Xs.updateProjectionMatrix(),mi.setSize(window.innerWidth,window.innerHeight),Ki.resize(window.innerWidth,window.innerHeight)});window.__game=Cd;window.__agenda=ze;var hh=new Ar,Ed=0;function Id(){requestAnimationFrame(Id);let s,t;if(window.__fixedDt!==void 0?(s=window.__fixedDt,Ed+=s,t=Ed,hh.getDelta()):(s=Math.min(.05,hh.getDelta())*(window.__timeScale||1),t=hh.elapsedTime),re.update(s,xe.colliders,Rd),bl){ze.update(s),Nx(s),Hx(),Fx(s),Bx(),Ox(s,t),Et.update(s,re.handPos()),El.record(re.pos),El.update(s,re.handPos()),Sd.update(s,re.pos);for(let e of Gr)e.update(s,Et,re.pos,Ux,rn);if(Td.update(s,t),zr.group.visible){let e=zr.group.position.clone().setY(1.3).sub(Xs.position).normalize();zr.lookDot=e.dot(re.lookDir)}zr.update(s,re.pos,t),wd.update(s,re.pos),dh.update(s,re.pos),tn.update(s,ze.lightMult)}Ki.render(qe,Xs,s,t)}Id();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
