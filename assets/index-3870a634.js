(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))C(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const B of t.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&C(B)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function C(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gi="155",Ls=0,xi=1,Fs=2,on=1,Ns=2,bI=3,OI=0,AI=1,MI=2,tC=0,Ie=1,vi=2,Yi=3,Ti=4,Us=5,$C=100,ks=101,Gs=102,bi=103,qi=104,ms=200,Ks=201,Js=202,Hs=203,sn=204,rn=205,xs=206,vs=207,Ys=208,Ts=209,bs=210,qs=0,_s=1,Ps=2,KB=3,Os=4,Vs=5,Ws=6,zs=7,an=0,Zs=1,Xs=2,BC=0,js=1,$s=2,Ar=3,gr=4,Ir=5,cn=300,ie=301,Qe=302,JB=303,HB=304,Ht=306,Ee=1e3,nI=1001,Ut=1002,Hg=1003,xB=1004,Rt=1005,$g=1006,hn=1007,pC=1008,iC=1009,Cr=1010,er=1011,Ii=1012,ln=1013,eC=1014,qI=1015,Ye=1016,Dn=1017,dn=1018,uC=1020,tr=1021,oI=1023,Br=1024,ir=1025,yC=1026,ne=1027,Qr=1028,wn=1029,Er=1030,fn=1031,un=1033,jt=33776,$t=33777,AB=33778,gB=33779,_i=35840,Pi=35841,Oi=35842,Vi=35843,nr=36196,Wi=37492,zi=37496,Zi=37808,Xi=37809,ji=37810,$i=37811,AQ=37812,gQ=37813,IQ=37814,CQ=37815,eQ=37816,tQ=37817,BQ=37818,iQ=37819,QQ=37820,EQ=37821,IB=36492,or=36283,nQ=36284,oQ=36285,sQ=36286,Te=2300,oe=2301,CB=2302,rQ=2400,aQ=2401,cQ=2402,sr=2500,rr=0,yn=1,vB=2,Mn=3e3,MC=3001,ar=3200,cr=3201,Sn=0,hr=1,SC="",PA="srgb",RI="srgb-linear",pn="display-p3",eB=7680,lr=519,Dr=512,dr=513,wr=514,fr=515,ur=516,yr=517,Mr=518,Sr=519,YB=35044,hQ="300 es",TB=1035,_I=2e3,kt=2001;class NC{addEventListener(A,g){this._listeners===void 0&&(this._listeners={});const C=this._listeners;C[A]===void 0&&(C[A]=[]),C[A].indexOf(g)===-1&&C[A].push(g)}hasEventListener(A,g){if(this._listeners===void 0)return!1;const C=this._listeners;return C[A]!==void 0&&C[A].indexOf(g)!==-1}removeEventListener(A,g){if(this._listeners===void 0)return;const e=this._listeners[A];if(e!==void 0){const t=e.indexOf(g);t!==-1&&e.splice(t,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const C=this._listeners[A.type];if(C!==void 0){A.target=this;const e=C.slice(0);for(let t=0,B=e.length;t<B;t++)e[t].call(this,A);A.target=null}}}const qg=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lQ=1234567;const He=Math.PI/180,se=180/Math.PI;function dI(){const I=Math.random()*4294967295|0,A=Math.random()*4294967295|0,g=Math.random()*4294967295|0,C=Math.random()*4294967295|0;return(qg[I&255]+qg[I>>8&255]+qg[I>>16&255]+qg[I>>24&255]+"-"+qg[A&255]+qg[A>>8&255]+"-"+qg[A>>16&15|64]+qg[A>>24&255]+"-"+qg[g&63|128]+qg[g>>8&255]+"-"+qg[g>>16&255]+qg[g>>24&255]+qg[C&255]+qg[C>>8&255]+qg[C>>16&255]+qg[C>>24&255]).toLowerCase()}function Yg(I,A,g){return Math.max(A,Math.min(g,I))}function Ci(I,A){return(I%A+A)%A}function pr(I,A,g,C,e){return C+(I-A)*(e-C)/(g-A)}function Rr(I,A,g){return I!==A?(g-I)/(A-I):0}function xe(I,A,g){return(1-g)*I+g*A}function Lr(I,A,g,C){return xe(I,A,1-Math.exp(-g*C))}function Fr(I,A=1){return A-Math.abs(Ci(I,A*2)-A)}function Nr(I,A,g){return I<=A?0:I>=g?1:(I=(I-A)/(g-A),I*I*(3-2*I))}function Ur(I,A,g){return I<=A?0:I>=g?1:(I=(I-A)/(g-A),I*I*I*(I*(I*6-15)+10))}function kr(I,A){return I+Math.floor(Math.random()*(A-I+1))}function Gr(I,A){return I+Math.random()*(A-I)}function mr(I){return I*(.5-Math.random())}function Kr(I){I!==void 0&&(lQ=I);let A=lQ+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Jr(I){return I*He}function Hr(I){return I*se}function bB(I){return(I&I-1)===0&&I!==0}function Rn(I){return Math.pow(2,Math.ceil(Math.log(I)/Math.LN2))}function Gt(I){return Math.pow(2,Math.floor(Math.log(I)/Math.LN2))}function xr(I,A,g,C,e){const t=Math.cos,B=Math.sin,i=t(g/2),Q=B(g/2),E=t((A+C)/2),n=B((A+C)/2),o=t((A-C)/2),s=B((A-C)/2),h=t((C-A)/2),D=B((C-A)/2);switch(e){case"XYX":I.set(i*n,Q*o,Q*s,i*E);break;case"YZY":I.set(Q*s,i*n,Q*o,i*E);break;case"ZXZ":I.set(Q*o,Q*s,i*n,i*E);break;case"XZX":I.set(i*n,Q*D,Q*h,i*E);break;case"YXY":I.set(Q*h,i*n,Q*D,i*E);break;case"ZYZ":I.set(Q*D,Q*h,i*n,i*E);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+e)}}function SI(I,A){switch(A.constructor){case Float32Array:return I;case Uint32Array:return I/4294967295;case Uint16Array:return I/65535;case Uint8Array:return I/255;case Int32Array:return Math.max(I/2147483647,-1);case Int16Array:return Math.max(I/32767,-1);case Int8Array:return Math.max(I/127,-1);default:throw new Error("Invalid component type.")}}function hg(I,A){switch(A.constructor){case Float32Array:return I;case Uint32Array:return Math.round(I*4294967295);case Uint16Array:return Math.round(I*65535);case Uint8Array:return Math.round(I*255);case Int32Array:return Math.round(I*2147483647);case Int16Array:return Math.round(I*32767);case Int8Array:return Math.round(I*127);default:throw new Error("Invalid component type.")}}const Lt={DEG2RAD:He,RAD2DEG:se,generateUUID:dI,clamp:Yg,euclideanModulo:Ci,mapLinear:pr,inverseLerp:Rr,lerp:xe,damp:Lr,pingpong:Fr,smoothstep:Nr,smootherstep:Ur,randInt:kr,randFloat:Gr,randFloatSpread:mr,seededRandom:Kr,degToRad:Jr,radToDeg:Hr,isPowerOfTwo:bB,ceilPowerOfTwo:Rn,floorPowerOfTwo:Gt,setQuaternionFromProperEuler:xr,normalize:hg,denormalize:SI};class Bg{constructor(A=0,g=0){Bg.prototype.isVector2=!0,this.x=A,this.y=g}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,g){return this.x=A,this.y=g,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const g=this.x,C=this.y,e=A.elements;return this.x=e[0]*g+e[3]*C+e[6],this.y=e[1]*g+e[4]*C+e[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this}clampLength(A,g){const C=this.length();return this.divideScalar(C||1).multiplyScalar(Math.max(A,Math.min(g,C)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const g=Math.sqrt(this.lengthSq()*A.lengthSq());if(g===0)return Math.PI/2;const C=this.dot(A)/g;return Math.acos(Yg(C,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const g=this.x-A.x,C=this.y-A.y;return g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this}lerpVectors(A,g,C){return this.x=A.x+(g.x-A.x)*C,this.y=A.y+(g.y-A.y)*C,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this}rotateAround(A,g){const C=Math.cos(g),e=Math.sin(g),t=this.x-A.x,B=this.y-A.y;return this.x=t*C-B*e+A.x,this.y=t*e+B*C+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ag{constructor(A,g,C,e,t,B,i,Q,E){Ag.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,g,C,e,t,B,i,Q,E)}set(A,g,C,e,t,B,i,Q,E){const n=this.elements;return n[0]=A,n[1]=e,n[2]=i,n[3]=g,n[4]=t,n[5]=Q,n[6]=C,n[7]=B,n[8]=E,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const g=this.elements,C=A.elements;return g[0]=C[0],g[1]=C[1],g[2]=C[2],g[3]=C[3],g[4]=C[4],g[5]=C[5],g[6]=C[6],g[7]=C[7],g[8]=C[8],this}extractBasis(A,g,C){return A.setFromMatrix3Column(this,0),g.setFromMatrix3Column(this,1),C.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const g=A.elements;return this.set(g[0],g[4],g[8],g[1],g[5],g[9],g[2],g[6],g[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,g){const C=A.elements,e=g.elements,t=this.elements,B=C[0],i=C[3],Q=C[6],E=C[1],n=C[4],o=C[7],s=C[2],h=C[5],D=C[8],d=e[0],a=e[3],r=e[6],p=e[1],y=e[4],S=e[7],N=e[2],m=e[5],k=e[8];return t[0]=B*d+i*p+Q*N,t[3]=B*a+i*y+Q*m,t[6]=B*r+i*S+Q*k,t[1]=E*d+n*p+o*N,t[4]=E*a+n*y+o*m,t[7]=E*r+n*S+o*k,t[2]=s*d+h*p+D*N,t[5]=s*a+h*y+D*m,t[8]=s*r+h*S+D*k,this}multiplyScalar(A){const g=this.elements;return g[0]*=A,g[3]*=A,g[6]*=A,g[1]*=A,g[4]*=A,g[7]*=A,g[2]*=A,g[5]*=A,g[8]*=A,this}determinant(){const A=this.elements,g=A[0],C=A[1],e=A[2],t=A[3],B=A[4],i=A[5],Q=A[6],E=A[7],n=A[8];return g*B*n-g*i*E-C*t*n+C*i*Q+e*t*E-e*B*Q}invert(){const A=this.elements,g=A[0],C=A[1],e=A[2],t=A[3],B=A[4],i=A[5],Q=A[6],E=A[7],n=A[8],o=n*B-i*E,s=i*Q-n*t,h=E*t-B*Q,D=g*o+C*s+e*h;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/D;return A[0]=o*d,A[1]=(e*E-n*C)*d,A[2]=(i*C-e*B)*d,A[3]=s*d,A[4]=(n*g-e*Q)*d,A[5]=(e*t-i*g)*d,A[6]=h*d,A[7]=(C*Q-E*g)*d,A[8]=(B*g-C*t)*d,this}transpose(){let A;const g=this.elements;return A=g[1],g[1]=g[3],g[3]=A,A=g[2],g[2]=g[6],g[6]=A,A=g[5],g[5]=g[7],g[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const g=this.elements;return A[0]=g[0],A[1]=g[3],A[2]=g[6],A[3]=g[1],A[4]=g[4],A[5]=g[7],A[6]=g[2],A[7]=g[5],A[8]=g[8],this}setUvTransform(A,g,C,e,t,B,i){const Q=Math.cos(t),E=Math.sin(t);return this.set(C*Q,C*E,-C*(Q*B+E*i)+B+A,-e*E,e*Q,-e*(-E*B+Q*i)+i+g,0,0,1),this}scale(A,g){return this.premultiply(tB.makeScale(A,g)),this}rotate(A){return this.premultiply(tB.makeRotation(-A)),this}translate(A,g){return this.premultiply(tB.makeTranslation(A,g)),this}makeTranslation(A,g){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,g,0,0,1),this}makeRotation(A){const g=Math.cos(A),C=Math.sin(A);return this.set(g,-C,0,C,g,0,0,0,1),this}makeScale(A,g){return this.set(A,0,0,0,g,0,0,0,1),this}equals(A){const g=this.elements,C=A.elements;for(let e=0;e<9;e++)if(g[e]!==C[e])return!1;return!0}fromArray(A,g=0){for(let C=0;C<9;C++)this.elements[C]=A[C+g];return this}toArray(A=[],g=0){const C=this.elements;return A[g]=C[0],A[g+1]=C[1],A[g+2]=C[2],A[g+3]=C[3],A[g+4]=C[4],A[g+5]=C[5],A[g+6]=C[6],A[g+7]=C[7],A[g+8]=C[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const tB=new Ag;function Ln(I){for(let A=I.length-1;A>=0;--A)if(I[A]>=65535)return!0;return!1}function be(I){return document.createElementNS("http://www.w3.org/1999/xhtml",I)}const DQ={};function ve(I){I in DQ||(DQ[I]=!0,console.warn(I))}function Ce(I){return I<.04045?I*.0773993808:Math.pow(I*.9478672986+.0521327014,2.4)}function BB(I){return I<.0031308?I*12.92:1.055*Math.pow(I,.41666)-.055}const vr=new Ag().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Yr=new Ag().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Tr(I){return I.convertSRGBToLinear().applyMatrix3(Yr)}function br(I){return I.applyMatrix3(vr).convertLinearToSRGB()}const qr={[RI]:I=>I,[PA]:I=>I.convertSRGBToLinear(),[pn]:Tr},_r={[RI]:I=>I,[PA]:I=>I.convertLinearToSRGB(),[pn]:br},aI={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(I){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!I},get workingColorSpace(){return RI},set workingColorSpace(I){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(I,A,g){if(this.enabled===!1||A===g||!A||!g)return I;const C=qr[A],e=_r[g];if(C===void 0||e===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${g}".`);return e(C(I))},fromWorkingColorSpace:function(I,A){return this.convert(I,this.workingColorSpace,A)},toWorkingColorSpace:function(I,A){return this.convert(I,A,this.workingColorSpace)}};let KC;class Fn{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let g;if(A instanceof HTMLCanvasElement)g=A;else{KC===void 0&&(KC=be("canvas")),KC.width=A.width,KC.height=A.height;const C=KC.getContext("2d");A instanceof ImageData?C.putImageData(A,0,0):C.drawImage(A,0,0,A.width,A.height),g=KC}return g.width>2048||g.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),g.toDataURL("image/jpeg",.6)):g.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const g=be("canvas");g.width=A.width,g.height=A.height;const C=g.getContext("2d");C.drawImage(A,0,0,A.width,A.height);const e=C.getImageData(0,0,A.width,A.height),t=e.data;for(let B=0;B<t.length;B++)t[B]=Ce(t[B]/255)*255;return C.putImageData(e,0,0),g}else if(A.data){const g=A.data.slice(0);for(let C=0;C<g.length;C++)g instanceof Uint8Array||g instanceof Uint8ClampedArray?g[C]=Math.floor(Ce(g[C]/255)*255):g[C]=Ce(g[C]);return{data:g,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let Pr=0;class Nn{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pr++}),this.uuid=dI(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const g=A===void 0||typeof A=="string";if(!g&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const C={uuid:this.uuid,url:""},e=this.data;if(e!==null){let t;if(Array.isArray(e)){t=[];for(let B=0,i=e.length;B<i;B++)e[B].isDataTexture?t.push(iB(e[B].image)):t.push(iB(e[B]))}else t=iB(e);C.url=t}return g||(A.images[this.uuid]=C),C}}function iB(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap?Fn.getDataURL(I):I.data?{data:Array.from(I.data),width:I.width,height:I.height,type:I.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Or=0;class Tg extends NC{constructor(A=Tg.DEFAULT_IMAGE,g=Tg.DEFAULT_MAPPING,C=nI,e=nI,t=$g,B=pC,i=oI,Q=iC,E=Tg.DEFAULT_ANISOTROPY,n=SC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Or++}),this.uuid=dI(),this.name="",this.source=new Nn(A),this.mipmaps=[],this.mapping=g,this.channel=0,this.wrapS=C,this.wrapT=e,this.magFilter=t,this.minFilter=B,this.anisotropy=E,this.format=i,this.internalFormat=null,this.type=Q,this.offset=new Bg(0,0),this.repeat=new Bg(1,1),this.center=new Bg(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ag,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof n=="string"?this.colorSpace=n:(ve("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=n===MC?PA:SC),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const g=A===void 0||typeof A=="string";if(!g&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const C={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(C.userData=this.userData),g||(A.textures[this.uuid]=C),C}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==cn)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Ee:A.x=A.x-Math.floor(A.x);break;case nI:A.x=A.x<0?0:1;break;case Ut:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Ee:A.y=A.y-Math.floor(A.y);break;case nI:A.y=A.y<0?0:1;break;case Ut:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ve("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===PA?MC:Mn}set encoding(A){ve("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===MC?PA:SC}}Tg.DEFAULT_IMAGE=null;Tg.DEFAULT_MAPPING=cn;Tg.DEFAULT_ANISOTROPY=1;class wg{constructor(A=0,g=0,C=0,e=1){wg.prototype.isVector4=!0,this.x=A,this.y=g,this.z=C,this.w=e}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,g,C,e){return this.x=A,this.y=g,this.z=C,this.w=e,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;case 3:this.w=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this.z=A.z+g.z,this.w=A.w+g.w,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this.z+=A.z*g,this.w+=A.w*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this.z=A.z-g.z,this.w=A.w-g.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const g=this.x,C=this.y,e=this.z,t=this.w,B=A.elements;return this.x=B[0]*g+B[4]*C+B[8]*e+B[12]*t,this.y=B[1]*g+B[5]*C+B[9]*e+B[13]*t,this.z=B[2]*g+B[6]*C+B[10]*e+B[14]*t,this.w=B[3]*g+B[7]*C+B[11]*e+B[15]*t,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const g=Math.sqrt(1-A.w*A.w);return g<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/g,this.y=A.y/g,this.z=A.z/g),this}setAxisAngleFromRotationMatrix(A){let g,C,e,t;const Q=A.elements,E=Q[0],n=Q[4],o=Q[8],s=Q[1],h=Q[5],D=Q[9],d=Q[2],a=Q[6],r=Q[10];if(Math.abs(n-s)<.01&&Math.abs(o-d)<.01&&Math.abs(D-a)<.01){if(Math.abs(n+s)<.1&&Math.abs(o+d)<.1&&Math.abs(D+a)<.1&&Math.abs(E+h+r-3)<.1)return this.set(1,0,0,0),this;g=Math.PI;const y=(E+1)/2,S=(h+1)/2,N=(r+1)/2,m=(n+s)/4,k=(o+d)/4,P=(D+a)/4;return y>S&&y>N?y<.01?(C=0,e=.707106781,t=.707106781):(C=Math.sqrt(y),e=m/C,t=k/C):S>N?S<.01?(C=.707106781,e=0,t=.707106781):(e=Math.sqrt(S),C=m/e,t=P/e):N<.01?(C=.707106781,e=.707106781,t=0):(t=Math.sqrt(N),C=k/t,e=P/t),this.set(C,e,t,g),this}let p=Math.sqrt((a-D)*(a-D)+(o-d)*(o-d)+(s-n)*(s-n));return Math.abs(p)<.001&&(p=1),this.x=(a-D)/p,this.y=(o-d)/p,this.z=(s-n)/p,this.w=Math.acos((E+h+r-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this.z=Math.max(A.z,Math.min(g.z,this.z)),this.w=Math.max(A.w,Math.min(g.w,this.w)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this.z=Math.max(A,Math.min(g,this.z)),this.w=Math.max(A,Math.min(g,this.w)),this}clampLength(A,g){const C=this.length();return this.divideScalar(C||1).multiplyScalar(Math.max(A,Math.min(g,C)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this.z+=(A.z-this.z)*g,this.w+=(A.w-this.w)*g,this}lerpVectors(A,g,C){return this.x=A.x+(g.x-A.x)*C,this.y=A.y+(g.y-A.y)*C,this.z=A.z+(g.z-A.z)*C,this.w=A.w+(g.w-A.w)*C,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this.z=A[g+2],this.w=A[g+3],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A[g+2]=this.z,A[g+3]=this.w,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this.z=A.getZ(g),this.w=A.getW(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vr extends NC{constructor(A=1,g=1,C={}){super(),this.isRenderTarget=!0,this.width=A,this.height=g,this.depth=1,this.scissor=new wg(0,0,A,g),this.scissorTest=!1,this.viewport=new wg(0,0,A,g);const e={width:A,height:g,depth:1};C.encoding!==void 0&&(ve("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),C.colorSpace=C.encoding===MC?PA:SC),this.texture=new Tg(e,C.mapping,C.wrapS,C.wrapT,C.magFilter,C.minFilter,C.format,C.type,C.anisotropy,C.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=C.generateMipmaps!==void 0?C.generateMipmaps:!1,this.texture.internalFormat=C.internalFormat!==void 0?C.internalFormat:null,this.texture.minFilter=C.minFilter!==void 0?C.minFilter:$g,this.depthBuffer=C.depthBuffer!==void 0?C.depthBuffer:!0,this.stencilBuffer=C.stencilBuffer!==void 0?C.stencilBuffer:!1,this.depthTexture=C.depthTexture!==void 0?C.depthTexture:null,this.samples=C.samples!==void 0?C.samples:0}setSize(A,g,C=1){(this.width!==A||this.height!==g||this.depth!==C)&&(this.width=A,this.height=g,this.depth=C,this.texture.image.width=A,this.texture.image.height=g,this.texture.image.depth=C,this.dispose()),this.viewport.set(0,0,A,g),this.scissor.set(0,0,A,g)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const g=Object.assign({},A.texture.image);return this.texture.source=new Nn(g),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class RC extends Vr{constructor(A=1,g=1,C={}){super(A,g,C),this.isWebGLRenderTarget=!0}}class Un extends Tg{constructor(A=null,g=1,C=1,e=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:g,height:C,depth:e},this.magFilter=Hg,this.minFilter=Hg,this.wrapR=nI,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr extends Tg{constructor(A=null,g=1,C=1,e=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:g,height:C,depth:e},this.magFilter=Hg,this.minFilter=Hg,this.wrapR=nI,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class QC{constructor(A=0,g=0,C=0,e=1){this.isQuaternion=!0,this._x=A,this._y=g,this._z=C,this._w=e}static slerpFlat(A,g,C,e,t,B,i){let Q=C[e+0],E=C[e+1],n=C[e+2],o=C[e+3];const s=t[B+0],h=t[B+1],D=t[B+2],d=t[B+3];if(i===0){A[g+0]=Q,A[g+1]=E,A[g+2]=n,A[g+3]=o;return}if(i===1){A[g+0]=s,A[g+1]=h,A[g+2]=D,A[g+3]=d;return}if(o!==d||Q!==s||E!==h||n!==D){let a=1-i;const r=Q*s+E*h+n*D+o*d,p=r>=0?1:-1,y=1-r*r;if(y>Number.EPSILON){const N=Math.sqrt(y),m=Math.atan2(N,r*p);a=Math.sin(a*m)/N,i=Math.sin(i*m)/N}const S=i*p;if(Q=Q*a+s*S,E=E*a+h*S,n=n*a+D*S,o=o*a+d*S,a===1-i){const N=1/Math.sqrt(Q*Q+E*E+n*n+o*o);Q*=N,E*=N,n*=N,o*=N}}A[g]=Q,A[g+1]=E,A[g+2]=n,A[g+3]=o}static multiplyQuaternionsFlat(A,g,C,e,t,B){const i=C[e],Q=C[e+1],E=C[e+2],n=C[e+3],o=t[B],s=t[B+1],h=t[B+2],D=t[B+3];return A[g]=i*D+n*o+Q*h-E*s,A[g+1]=Q*D+n*s+E*o-i*h,A[g+2]=E*D+n*h+i*s-Q*o,A[g+3]=n*D-i*o-Q*s-E*h,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,g,C,e){return this._x=A,this._y=g,this._z=C,this._w=e,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,g){const C=A._x,e=A._y,t=A._z,B=A._order,i=Math.cos,Q=Math.sin,E=i(C/2),n=i(e/2),o=i(t/2),s=Q(C/2),h=Q(e/2),D=Q(t/2);switch(B){case"XYZ":this._x=s*n*o+E*h*D,this._y=E*h*o-s*n*D,this._z=E*n*D+s*h*o,this._w=E*n*o-s*h*D;break;case"YXZ":this._x=s*n*o+E*h*D,this._y=E*h*o-s*n*D,this._z=E*n*D-s*h*o,this._w=E*n*o+s*h*D;break;case"ZXY":this._x=s*n*o-E*h*D,this._y=E*h*o+s*n*D,this._z=E*n*D+s*h*o,this._w=E*n*o-s*h*D;break;case"ZYX":this._x=s*n*o-E*h*D,this._y=E*h*o+s*n*D,this._z=E*n*D-s*h*o,this._w=E*n*o+s*h*D;break;case"YZX":this._x=s*n*o+E*h*D,this._y=E*h*o+s*n*D,this._z=E*n*D-s*h*o,this._w=E*n*o-s*h*D;break;case"XZY":this._x=s*n*o-E*h*D,this._y=E*h*o-s*n*D,this._z=E*n*D+s*h*o,this._w=E*n*o+s*h*D;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+B)}return g!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,g){const C=g/2,e=Math.sin(C);return this._x=A.x*e,this._y=A.y*e,this._z=A.z*e,this._w=Math.cos(C),this._onChangeCallback(),this}setFromRotationMatrix(A){const g=A.elements,C=g[0],e=g[4],t=g[8],B=g[1],i=g[5],Q=g[9],E=g[2],n=g[6],o=g[10],s=C+i+o;if(s>0){const h=.5/Math.sqrt(s+1);this._w=.25/h,this._x=(n-Q)*h,this._y=(t-E)*h,this._z=(B-e)*h}else if(C>i&&C>o){const h=2*Math.sqrt(1+C-i-o);this._w=(n-Q)/h,this._x=.25*h,this._y=(e+B)/h,this._z=(t+E)/h}else if(i>o){const h=2*Math.sqrt(1+i-C-o);this._w=(t-E)/h,this._x=(e+B)/h,this._y=.25*h,this._z=(Q+n)/h}else{const h=2*Math.sqrt(1+o-C-i);this._w=(B-e)/h,this._x=(t+E)/h,this._y=(Q+n)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(A,g){let C=A.dot(g)+1;return C<Number.EPSILON?(C=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=C):(this._x=0,this._y=-A.z,this._z=A.y,this._w=C)):(this._x=A.y*g.z-A.z*g.y,this._y=A.z*g.x-A.x*g.z,this._z=A.x*g.y-A.y*g.x,this._w=C),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Yg(this.dot(A),-1,1)))}rotateTowards(A,g){const C=this.angleTo(A);if(C===0)return this;const e=Math.min(1,g/C);return this.slerp(A,e),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,g){const C=A._x,e=A._y,t=A._z,B=A._w,i=g._x,Q=g._y,E=g._z,n=g._w;return this._x=C*n+B*i+e*E-t*Q,this._y=e*n+B*Q+t*i-C*E,this._z=t*n+B*E+C*Q-e*i,this._w=B*n-C*i-e*Q-t*E,this._onChangeCallback(),this}slerp(A,g){if(g===0)return this;if(g===1)return this.copy(A);const C=this._x,e=this._y,t=this._z,B=this._w;let i=B*A._w+C*A._x+e*A._y+t*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=B,this._x=C,this._y=e,this._z=t,this;const Q=1-i*i;if(Q<=Number.EPSILON){const h=1-g;return this._w=h*B+g*this._w,this._x=h*C+g*this._x,this._y=h*e+g*this._y,this._z=h*t+g*this._z,this.normalize(),this._onChangeCallback(),this}const E=Math.sqrt(Q),n=Math.atan2(E,i),o=Math.sin((1-g)*n)/E,s=Math.sin(g*n)/E;return this._w=B*o+this._w*s,this._x=C*o+this._x*s,this._y=e*o+this._y*s,this._z=t*o+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,g,C){return this.copy(A).slerp(g,C)}random(){const A=Math.random(),g=Math.sqrt(1-A),C=Math.sqrt(A),e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random();return this.set(g*Math.cos(e),C*Math.sin(t),C*Math.cos(t),g*Math.sin(e))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,g=0){return this._x=A[g],this._y=A[g+1],this._z=A[g+2],this._w=A[g+3],this._onChangeCallback(),this}toArray(A=[],g=0){return A[g]=this._x,A[g+1]=this._y,A[g+2]=this._z,A[g+3]=this._w,A}fromBufferAttribute(A,g){return this._x=A.getX(g),this._y=A.getY(g),this._z=A.getZ(g),this._w=A.getW(g),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(A=0,g=0,C=0){K.prototype.isVector3=!0,this.x=A,this.y=g,this.z=C}set(A,g,C){return C===void 0&&(C=this.z),this.x=A,this.y=g,this.z=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this.z=A.z+g.z,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this.z+=A.z*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this.z=A.z-g.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,g){return this.x=A.x*g.x,this.y=A.y*g.y,this.z=A.z*g.z,this}applyEuler(A){return this.applyQuaternion(dQ.setFromEuler(A))}applyAxisAngle(A,g){return this.applyQuaternion(dQ.setFromAxisAngle(A,g))}applyMatrix3(A){const g=this.x,C=this.y,e=this.z,t=A.elements;return this.x=t[0]*g+t[3]*C+t[6]*e,this.y=t[1]*g+t[4]*C+t[7]*e,this.z=t[2]*g+t[5]*C+t[8]*e,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const g=this.x,C=this.y,e=this.z,t=A.elements,B=1/(t[3]*g+t[7]*C+t[11]*e+t[15]);return this.x=(t[0]*g+t[4]*C+t[8]*e+t[12])*B,this.y=(t[1]*g+t[5]*C+t[9]*e+t[13])*B,this.z=(t[2]*g+t[6]*C+t[10]*e+t[14])*B,this}applyQuaternion(A){const g=this.x,C=this.y,e=this.z,t=A.x,B=A.y,i=A.z,Q=A.w,E=Q*g+B*e-i*C,n=Q*C+i*g-t*e,o=Q*e+t*C-B*g,s=-t*g-B*C-i*e;return this.x=E*Q+s*-t+n*-i-o*-B,this.y=n*Q+s*-B+o*-t-E*-i,this.z=o*Q+s*-i+E*-B-n*-t,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const g=this.x,C=this.y,e=this.z,t=A.elements;return this.x=t[0]*g+t[4]*C+t[8]*e,this.y=t[1]*g+t[5]*C+t[9]*e,this.z=t[2]*g+t[6]*C+t[10]*e,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this.z=Math.max(A.z,Math.min(g.z,this.z)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this.z=Math.max(A,Math.min(g,this.z)),this}clampLength(A,g){const C=this.length();return this.divideScalar(C||1).multiplyScalar(Math.max(A,Math.min(g,C)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this.z+=(A.z-this.z)*g,this}lerpVectors(A,g,C){return this.x=A.x+(g.x-A.x)*C,this.y=A.y+(g.y-A.y)*C,this.z=A.z+(g.z-A.z)*C,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,g){const C=A.x,e=A.y,t=A.z,B=g.x,i=g.y,Q=g.z;return this.x=e*Q-t*i,this.y=t*B-C*Q,this.z=C*i-e*B,this}projectOnVector(A){const g=A.lengthSq();if(g===0)return this.set(0,0,0);const C=A.dot(this)/g;return this.copy(A).multiplyScalar(C)}projectOnPlane(A){return QB.copy(this).projectOnVector(A),this.sub(QB)}reflect(A){return this.sub(QB.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const g=Math.sqrt(this.lengthSq()*A.lengthSq());if(g===0)return Math.PI/2;const C=this.dot(A)/g;return Math.acos(Yg(C,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const g=this.x-A.x,C=this.y-A.y,e=this.z-A.z;return g*g+C*C+e*e}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,g,C){const e=Math.sin(g)*A;return this.x=e*Math.sin(C),this.y=Math.cos(g)*A,this.z=e*Math.cos(C),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,g,C){return this.x=A*Math.sin(g),this.y=C,this.z=A*Math.cos(g),this}setFromMatrixPosition(A){const g=A.elements;return this.x=g[12],this.y=g[13],this.z=g[14],this}setFromMatrixScale(A){const g=this.setFromMatrixColumn(A,0).length(),C=this.setFromMatrixColumn(A,1).length(),e=this.setFromMatrixColumn(A,2).length();return this.x=g,this.y=C,this.z=e,this}setFromMatrixColumn(A,g){return this.fromArray(A.elements,g*4)}setFromMatrix3Column(A,g){return this.fromArray(A.elements,g*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this.z=A[g+2],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A[g+2]=this.z,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this.z=A.getZ(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,g=Math.random()*Math.PI*2,C=Math.sqrt(1-A**2);return this.x=C*Math.cos(g),this.y=C*Math.sin(g),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const QB=new K,dQ=new QC;class VI{constructor(A=new K(1/0,1/0,1/0),g=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=g}set(A,g){return this.min.copy(A),this.max.copy(g),this}setFromArray(A){this.makeEmpty();for(let g=0,C=A.length;g<C;g+=3)this.expandByPoint(JI.fromArray(A,g));return this}setFromBufferAttribute(A){this.makeEmpty();for(let g=0,C=A.count;g<C;g++)this.expandByPoint(JI.fromBufferAttribute(A,g));return this}setFromPoints(A){this.makeEmpty();for(let g=0,C=A.length;g<C;g++)this.expandByPoint(A[g]);return this}setFromCenterAndSize(A,g){const C=JI.copy(g).multiplyScalar(.5);return this.min.copy(A).sub(C),this.max.copy(A).add(C),this}setFromObject(A,g=!1){return this.makeEmpty(),this.expandByObject(A,g)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,g=!1){if(A.updateWorldMatrix(!1,!1),A.boundingBox!==void 0)A.boundingBox===null&&A.computeBoundingBox(),JC.copy(A.boundingBox),JC.applyMatrix4(A.matrixWorld),this.union(JC);else{const e=A.geometry;if(e!==void 0)if(g&&e.attributes!==void 0&&e.attributes.position!==void 0){const t=e.attributes.position;for(let B=0,i=t.count;B<i;B++)JI.fromBufferAttribute(t,B).applyMatrix4(A.matrixWorld),this.expandByPoint(JI)}else e.boundingBox===null&&e.computeBoundingBox(),JC.copy(e.boundingBox),JC.applyMatrix4(A.matrixWorld),this.union(JC)}const C=A.children;for(let e=0,t=C.length;e<t;e++)this.expandByObject(C[e],g);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,g){return g.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,JI),JI.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let g,C;return A.normal.x>0?(g=A.normal.x*this.min.x,C=A.normal.x*this.max.x):(g=A.normal.x*this.max.x,C=A.normal.x*this.min.x),A.normal.y>0?(g+=A.normal.y*this.min.y,C+=A.normal.y*this.max.y):(g+=A.normal.y*this.max.y,C+=A.normal.y*this.min.y),A.normal.z>0?(g+=A.normal.z*this.min.z,C+=A.normal.z*this.max.z):(g+=A.normal.z*this.max.z,C+=A.normal.z*this.min.z),g<=-A.constant&&C>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(Re),$e.subVectors(this.max,Re),HC.subVectors(A.a,Re),xC.subVectors(A.b,Re),vC.subVectors(A.c,Re),ZI.subVectors(xC,HC),XI.subVectors(vC,xC),oC.subVectors(HC,vC);let g=[0,-ZI.z,ZI.y,0,-XI.z,XI.y,0,-oC.z,oC.y,ZI.z,0,-ZI.x,XI.z,0,-XI.x,oC.z,0,-oC.x,-ZI.y,ZI.x,0,-XI.y,XI.x,0,-oC.y,oC.x,0];return!EB(g,HC,xC,vC,$e)||(g=[1,0,0,0,1,0,0,0,1],!EB(g,HC,xC,vC,$e))?!1:(At.crossVectors(ZI,XI),g=[At.x,At.y,At.z],EB(g,HC,xC,vC,$e))}clampPoint(A,g){return g.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,JI).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(JI).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(KI[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),KI[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),KI[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),KI[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),KI[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),KI[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),KI[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),KI[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(KI),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const KI=[new K,new K,new K,new K,new K,new K,new K,new K],JI=new K,JC=new VI,HC=new K,xC=new K,vC=new K,ZI=new K,XI=new K,oC=new K,Re=new K,$e=new K,At=new K,sC=new K;function EB(I,A,g,C,e){for(let t=0,B=I.length-3;t<=B;t+=3){sC.fromArray(I,t);const i=e.x*Math.abs(sC.x)+e.y*Math.abs(sC.y)+e.z*Math.abs(sC.z),Q=A.dot(sC),E=g.dot(sC),n=C.dot(sC);if(Math.max(-Math.max(Q,E,n),Math.min(Q,E,n))>i)return!1}return!0}const zr=new VI,Le=new K,nB=new K;class LI{constructor(A=new K,g=-1){this.center=A,this.radius=g}set(A,g){return this.center.copy(A),this.radius=g,this}setFromPoints(A,g){const C=this.center;g!==void 0?C.copy(g):zr.setFromPoints(A).getCenter(C);let e=0;for(let t=0,B=A.length;t<B;t++)e=Math.max(e,C.distanceToSquared(A[t]));return this.radius=Math.sqrt(e),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const g=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=g*g}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,g){const C=this.center.distanceToSquared(A);return g.copy(A),C>this.radius*this.radius&&(g.sub(this.center).normalize(),g.multiplyScalar(this.radius).add(this.center)),g}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;Le.subVectors(A,this.center);const g=Le.lengthSq();if(g>this.radius*this.radius){const C=Math.sqrt(g),e=(C-this.radius)*.5;this.center.addScaledVector(Le,e/C),this.radius+=e}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(nB.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(Le.copy(A.center).add(nB)),this.expandByPoint(Le.copy(A.center).sub(nB))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const HI=new K,oB=new K,gt=new K,jI=new K,sB=new K,It=new K,rB=new K;class xt{constructor(A=new K,g=new K(0,0,-1)){this.origin=A,this.direction=g}set(A,g){return this.origin.copy(A),this.direction.copy(g),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,g){return g.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,HI)),this}closestPointToPoint(A,g){g.subVectors(A,this.origin);const C=g.dot(this.direction);return C<0?g.copy(this.origin):g.copy(this.origin).addScaledVector(this.direction,C)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const g=HI.subVectors(A,this.origin).dot(this.direction);return g<0?this.origin.distanceToSquared(A):(HI.copy(this.origin).addScaledVector(this.direction,g),HI.distanceToSquared(A))}distanceSqToSegment(A,g,C,e){oB.copy(A).add(g).multiplyScalar(.5),gt.copy(g).sub(A).normalize(),jI.copy(this.origin).sub(oB);const t=A.distanceTo(g)*.5,B=-this.direction.dot(gt),i=jI.dot(this.direction),Q=-jI.dot(gt),E=jI.lengthSq(),n=Math.abs(1-B*B);let o,s,h,D;if(n>0)if(o=B*Q-i,s=B*i-Q,D=t*n,o>=0)if(s>=-D)if(s<=D){const d=1/n;o*=d,s*=d,h=o*(o+B*s+2*i)+s*(B*o+s+2*Q)+E}else s=t,o=Math.max(0,-(B*s+i)),h=-o*o+s*(s+2*Q)+E;else s=-t,o=Math.max(0,-(B*s+i)),h=-o*o+s*(s+2*Q)+E;else s<=-D?(o=Math.max(0,-(-B*t+i)),s=o>0?-t:Math.min(Math.max(-t,-Q),t),h=-o*o+s*(s+2*Q)+E):s<=D?(o=0,s=Math.min(Math.max(-t,-Q),t),h=s*(s+2*Q)+E):(o=Math.max(0,-(B*t+i)),s=o>0?t:Math.min(Math.max(-t,-Q),t),h=-o*o+s*(s+2*Q)+E);else s=B>0?-t:t,o=Math.max(0,-(B*s+i)),h=-o*o+s*(s+2*Q)+E;return C&&C.copy(this.origin).addScaledVector(this.direction,o),e&&e.copy(oB).addScaledVector(gt,s),h}intersectSphere(A,g){HI.subVectors(A.center,this.origin);const C=HI.dot(this.direction),e=HI.dot(HI)-C*C,t=A.radius*A.radius;if(e>t)return null;const B=Math.sqrt(t-e),i=C-B,Q=C+B;return Q<0?null:i<0?this.at(Q,g):this.at(i,g)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const g=A.normal.dot(this.direction);if(g===0)return A.distanceToPoint(this.origin)===0?0:null;const C=-(this.origin.dot(A.normal)+A.constant)/g;return C>=0?C:null}intersectPlane(A,g){const C=this.distanceToPlane(A);return C===null?null:this.at(C,g)}intersectsPlane(A){const g=A.distanceToPoint(this.origin);return g===0||A.normal.dot(this.direction)*g<0}intersectBox(A,g){let C,e,t,B,i,Q;const E=1/this.direction.x,n=1/this.direction.y,o=1/this.direction.z,s=this.origin;return E>=0?(C=(A.min.x-s.x)*E,e=(A.max.x-s.x)*E):(C=(A.max.x-s.x)*E,e=(A.min.x-s.x)*E),n>=0?(t=(A.min.y-s.y)*n,B=(A.max.y-s.y)*n):(t=(A.max.y-s.y)*n,B=(A.min.y-s.y)*n),C>B||t>e||((t>C||isNaN(C))&&(C=t),(B<e||isNaN(e))&&(e=B),o>=0?(i=(A.min.z-s.z)*o,Q=(A.max.z-s.z)*o):(i=(A.max.z-s.z)*o,Q=(A.min.z-s.z)*o),C>Q||i>e)||((i>C||C!==C)&&(C=i),(Q<e||e!==e)&&(e=Q),e<0)?null:this.at(C>=0?C:e,g)}intersectsBox(A){return this.intersectBox(A,HI)!==null}intersectTriangle(A,g,C,e,t){sB.subVectors(g,A),It.subVectors(C,A),rB.crossVectors(sB,It);let B=this.direction.dot(rB),i;if(B>0){if(e)return null;i=1}else if(B<0)i=-1,B=-B;else return null;jI.subVectors(this.origin,A);const Q=i*this.direction.dot(It.crossVectors(jI,It));if(Q<0)return null;const E=i*this.direction.dot(sB.cross(jI));if(E<0||Q+E>B)return null;const n=-i*jI.dot(rB);return n<0?null:this.at(n/B,t)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gg{constructor(A,g,C,e,t,B,i,Q,E,n,o,s,h,D,d,a){gg.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,g,C,e,t,B,i,Q,E,n,o,s,h,D,d,a)}set(A,g,C,e,t,B,i,Q,E,n,o,s,h,D,d,a){const r=this.elements;return r[0]=A,r[4]=g,r[8]=C,r[12]=e,r[1]=t,r[5]=B,r[9]=i,r[13]=Q,r[2]=E,r[6]=n,r[10]=o,r[14]=s,r[3]=h,r[7]=D,r[11]=d,r[15]=a,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gg().fromArray(this.elements)}copy(A){const g=this.elements,C=A.elements;return g[0]=C[0],g[1]=C[1],g[2]=C[2],g[3]=C[3],g[4]=C[4],g[5]=C[5],g[6]=C[6],g[7]=C[7],g[8]=C[8],g[9]=C[9],g[10]=C[10],g[11]=C[11],g[12]=C[12],g[13]=C[13],g[14]=C[14],g[15]=C[15],this}copyPosition(A){const g=this.elements,C=A.elements;return g[12]=C[12],g[13]=C[13],g[14]=C[14],this}setFromMatrix3(A){const g=A.elements;return this.set(g[0],g[3],g[6],0,g[1],g[4],g[7],0,g[2],g[5],g[8],0,0,0,0,1),this}extractBasis(A,g,C){return A.setFromMatrixColumn(this,0),g.setFromMatrixColumn(this,1),C.setFromMatrixColumn(this,2),this}makeBasis(A,g,C){return this.set(A.x,g.x,C.x,0,A.y,g.y,C.y,0,A.z,g.z,C.z,0,0,0,0,1),this}extractRotation(A){const g=this.elements,C=A.elements,e=1/YC.setFromMatrixColumn(A,0).length(),t=1/YC.setFromMatrixColumn(A,1).length(),B=1/YC.setFromMatrixColumn(A,2).length();return g[0]=C[0]*e,g[1]=C[1]*e,g[2]=C[2]*e,g[3]=0,g[4]=C[4]*t,g[5]=C[5]*t,g[6]=C[6]*t,g[7]=0,g[8]=C[8]*B,g[9]=C[9]*B,g[10]=C[10]*B,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromEuler(A){const g=this.elements,C=A.x,e=A.y,t=A.z,B=Math.cos(C),i=Math.sin(C),Q=Math.cos(e),E=Math.sin(e),n=Math.cos(t),o=Math.sin(t);if(A.order==="XYZ"){const s=B*n,h=B*o,D=i*n,d=i*o;g[0]=Q*n,g[4]=-Q*o,g[8]=E,g[1]=h+D*E,g[5]=s-d*E,g[9]=-i*Q,g[2]=d-s*E,g[6]=D+h*E,g[10]=B*Q}else if(A.order==="YXZ"){const s=Q*n,h=Q*o,D=E*n,d=E*o;g[0]=s+d*i,g[4]=D*i-h,g[8]=B*E,g[1]=B*o,g[5]=B*n,g[9]=-i,g[2]=h*i-D,g[6]=d+s*i,g[10]=B*Q}else if(A.order==="ZXY"){const s=Q*n,h=Q*o,D=E*n,d=E*o;g[0]=s-d*i,g[4]=-B*o,g[8]=D+h*i,g[1]=h+D*i,g[5]=B*n,g[9]=d-s*i,g[2]=-B*E,g[6]=i,g[10]=B*Q}else if(A.order==="ZYX"){const s=B*n,h=B*o,D=i*n,d=i*o;g[0]=Q*n,g[4]=D*E-h,g[8]=s*E+d,g[1]=Q*o,g[5]=d*E+s,g[9]=h*E-D,g[2]=-E,g[6]=i*Q,g[10]=B*Q}else if(A.order==="YZX"){const s=B*Q,h=B*E,D=i*Q,d=i*E;g[0]=Q*n,g[4]=d-s*o,g[8]=D*o+h,g[1]=o,g[5]=B*n,g[9]=-i*n,g[2]=-E*n,g[6]=h*o+D,g[10]=s-d*o}else if(A.order==="XZY"){const s=B*Q,h=B*E,D=i*Q,d=i*E;g[0]=Q*n,g[4]=-o,g[8]=E*n,g[1]=s*o+d,g[5]=B*n,g[9]=h*o-D,g[2]=D*o-h,g[6]=i*n,g[10]=d*o+s}return g[3]=0,g[7]=0,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Zr,A,Xr)}lookAt(A,g,C){const e=this.elements;return gI.subVectors(A,g),gI.lengthSq()===0&&(gI.z=1),gI.normalize(),$I.crossVectors(C,gI),$I.lengthSq()===0&&(Math.abs(C.z)===1?gI.x+=1e-4:gI.z+=1e-4,gI.normalize(),$I.crossVectors(C,gI)),$I.normalize(),Ct.crossVectors(gI,$I),e[0]=$I.x,e[4]=Ct.x,e[8]=gI.x,e[1]=$I.y,e[5]=Ct.y,e[9]=gI.y,e[2]=$I.z,e[6]=Ct.z,e[10]=gI.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,g){const C=A.elements,e=g.elements,t=this.elements,B=C[0],i=C[4],Q=C[8],E=C[12],n=C[1],o=C[5],s=C[9],h=C[13],D=C[2],d=C[6],a=C[10],r=C[14],p=C[3],y=C[7],S=C[11],N=C[15],m=e[0],k=e[4],P=e[8],u=e[12],F=e[1],tA=e[5],iA=e[9],Y=e[13],v=e[2],j=e[6],$=e[10],_=e[14],W=e[3],BA=e[7],gA=e[11],q=e[15];return t[0]=B*m+i*F+Q*v+E*W,t[4]=B*k+i*tA+Q*j+E*BA,t[8]=B*P+i*iA+Q*$+E*gA,t[12]=B*u+i*Y+Q*_+E*q,t[1]=n*m+o*F+s*v+h*W,t[5]=n*k+o*tA+s*j+h*BA,t[9]=n*P+o*iA+s*$+h*gA,t[13]=n*u+o*Y+s*_+h*q,t[2]=D*m+d*F+a*v+r*W,t[6]=D*k+d*tA+a*j+r*BA,t[10]=D*P+d*iA+a*$+r*gA,t[14]=D*u+d*Y+a*_+r*q,t[3]=p*m+y*F+S*v+N*W,t[7]=p*k+y*tA+S*j+N*BA,t[11]=p*P+y*iA+S*$+N*gA,t[15]=p*u+y*Y+S*_+N*q,this}multiplyScalar(A){const g=this.elements;return g[0]*=A,g[4]*=A,g[8]*=A,g[12]*=A,g[1]*=A,g[5]*=A,g[9]*=A,g[13]*=A,g[2]*=A,g[6]*=A,g[10]*=A,g[14]*=A,g[3]*=A,g[7]*=A,g[11]*=A,g[15]*=A,this}determinant(){const A=this.elements,g=A[0],C=A[4],e=A[8],t=A[12],B=A[1],i=A[5],Q=A[9],E=A[13],n=A[2],o=A[6],s=A[10],h=A[14],D=A[3],d=A[7],a=A[11],r=A[15];return D*(+t*Q*o-e*E*o-t*i*s+C*E*s+e*i*h-C*Q*h)+d*(+g*Q*h-g*E*s+t*B*s-e*B*h+e*E*n-t*Q*n)+a*(+g*E*o-g*i*h-t*B*o+C*B*h+t*i*n-C*E*n)+r*(-e*i*n-g*Q*o+g*i*s+e*B*o-C*B*s+C*Q*n)}transpose(){const A=this.elements;let g;return g=A[1],A[1]=A[4],A[4]=g,g=A[2],A[2]=A[8],A[8]=g,g=A[6],A[6]=A[9],A[9]=g,g=A[3],A[3]=A[12],A[12]=g,g=A[7],A[7]=A[13],A[13]=g,g=A[11],A[11]=A[14],A[14]=g,this}setPosition(A,g,C){const e=this.elements;return A.isVector3?(e[12]=A.x,e[13]=A.y,e[14]=A.z):(e[12]=A,e[13]=g,e[14]=C),this}invert(){const A=this.elements,g=A[0],C=A[1],e=A[2],t=A[3],B=A[4],i=A[5],Q=A[6],E=A[7],n=A[8],o=A[9],s=A[10],h=A[11],D=A[12],d=A[13],a=A[14],r=A[15],p=o*a*E-d*s*E+d*Q*h-i*a*h-o*Q*r+i*s*r,y=D*s*E-n*a*E-D*Q*h+B*a*h+n*Q*r-B*s*r,S=n*d*E-D*o*E+D*i*h-B*d*h-n*i*r+B*o*r,N=D*o*Q-n*d*Q-D*i*s+B*d*s+n*i*a-B*o*a,m=g*p+C*y+e*S+t*N;if(m===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/m;return A[0]=p*k,A[1]=(d*s*t-o*a*t-d*e*h+C*a*h+o*e*r-C*s*r)*k,A[2]=(i*a*t-d*Q*t+d*e*E-C*a*E-i*e*r+C*Q*r)*k,A[3]=(o*Q*t-i*s*t-o*e*E+C*s*E+i*e*h-C*Q*h)*k,A[4]=y*k,A[5]=(n*a*t-D*s*t+D*e*h-g*a*h-n*e*r+g*s*r)*k,A[6]=(D*Q*t-B*a*t-D*e*E+g*a*E+B*e*r-g*Q*r)*k,A[7]=(B*s*t-n*Q*t+n*e*E-g*s*E-B*e*h+g*Q*h)*k,A[8]=S*k,A[9]=(D*o*t-n*d*t-D*C*h+g*d*h+n*C*r-g*o*r)*k,A[10]=(B*d*t-D*i*t+D*C*E-g*d*E-B*C*r+g*i*r)*k,A[11]=(n*i*t-B*o*t-n*C*E+g*o*E+B*C*h-g*i*h)*k,A[12]=N*k,A[13]=(n*d*e-D*o*e+D*C*s-g*d*s-n*C*a+g*o*a)*k,A[14]=(D*i*e-B*d*e-D*C*Q+g*d*Q+B*C*a-g*i*a)*k,A[15]=(B*o*e-n*i*e+n*C*Q-g*o*Q-B*C*s+g*i*s)*k,this}scale(A){const g=this.elements,C=A.x,e=A.y,t=A.z;return g[0]*=C,g[4]*=e,g[8]*=t,g[1]*=C,g[5]*=e,g[9]*=t,g[2]*=C,g[6]*=e,g[10]*=t,g[3]*=C,g[7]*=e,g[11]*=t,this}getMaxScaleOnAxis(){const A=this.elements,g=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],C=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],e=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(g,C,e))}makeTranslation(A,g,C){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,g,0,0,1,C,0,0,0,1),this}makeRotationX(A){const g=Math.cos(A),C=Math.sin(A);return this.set(1,0,0,0,0,g,-C,0,0,C,g,0,0,0,0,1),this}makeRotationY(A){const g=Math.cos(A),C=Math.sin(A);return this.set(g,0,C,0,0,1,0,0,-C,0,g,0,0,0,0,1),this}makeRotationZ(A){const g=Math.cos(A),C=Math.sin(A);return this.set(g,-C,0,0,C,g,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,g){const C=Math.cos(g),e=Math.sin(g),t=1-C,B=A.x,i=A.y,Q=A.z,E=t*B,n=t*i;return this.set(E*B+C,E*i-e*Q,E*Q+e*i,0,E*i+e*Q,n*i+C,n*Q-e*B,0,E*Q-e*i,n*Q+e*B,t*Q*Q+C,0,0,0,0,1),this}makeScale(A,g,C){return this.set(A,0,0,0,0,g,0,0,0,0,C,0,0,0,0,1),this}makeShear(A,g,C,e,t,B){return this.set(1,C,t,0,A,1,B,0,g,e,1,0,0,0,0,1),this}compose(A,g,C){const e=this.elements,t=g._x,B=g._y,i=g._z,Q=g._w,E=t+t,n=B+B,o=i+i,s=t*E,h=t*n,D=t*o,d=B*n,a=B*o,r=i*o,p=Q*E,y=Q*n,S=Q*o,N=C.x,m=C.y,k=C.z;return e[0]=(1-(d+r))*N,e[1]=(h+S)*N,e[2]=(D-y)*N,e[3]=0,e[4]=(h-S)*m,e[5]=(1-(s+r))*m,e[6]=(a+p)*m,e[7]=0,e[8]=(D+y)*k,e[9]=(a-p)*k,e[10]=(1-(s+d))*k,e[11]=0,e[12]=A.x,e[13]=A.y,e[14]=A.z,e[15]=1,this}decompose(A,g,C){const e=this.elements;let t=YC.set(e[0],e[1],e[2]).length();const B=YC.set(e[4],e[5],e[6]).length(),i=YC.set(e[8],e[9],e[10]).length();this.determinant()<0&&(t=-t),A.x=e[12],A.y=e[13],A.z=e[14],cI.copy(this);const E=1/t,n=1/B,o=1/i;return cI.elements[0]*=E,cI.elements[1]*=E,cI.elements[2]*=E,cI.elements[4]*=n,cI.elements[5]*=n,cI.elements[6]*=n,cI.elements[8]*=o,cI.elements[9]*=o,cI.elements[10]*=o,g.setFromRotationMatrix(cI),C.x=t,C.y=B,C.z=i,this}makePerspective(A,g,C,e,t,B,i=_I){const Q=this.elements,E=2*t/(g-A),n=2*t/(C-e),o=(g+A)/(g-A),s=(C+e)/(C-e);let h,D;if(i===_I)h=-(B+t)/(B-t),D=-2*B*t/(B-t);else if(i===kt)h=-B/(B-t),D=-B*t/(B-t);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return Q[0]=E,Q[4]=0,Q[8]=o,Q[12]=0,Q[1]=0,Q[5]=n,Q[9]=s,Q[13]=0,Q[2]=0,Q[6]=0,Q[10]=h,Q[14]=D,Q[3]=0,Q[7]=0,Q[11]=-1,Q[15]=0,this}makeOrthographic(A,g,C,e,t,B,i=_I){const Q=this.elements,E=1/(g-A),n=1/(C-e),o=1/(B-t),s=(g+A)*E,h=(C+e)*n;let D,d;if(i===_I)D=(B+t)*o,d=-2*o;else if(i===kt)D=t*o,d=-1*o;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return Q[0]=2*E,Q[4]=0,Q[8]=0,Q[12]=-s,Q[1]=0,Q[5]=2*n,Q[9]=0,Q[13]=-h,Q[2]=0,Q[6]=0,Q[10]=d,Q[14]=-D,Q[3]=0,Q[7]=0,Q[11]=0,Q[15]=1,this}equals(A){const g=this.elements,C=A.elements;for(let e=0;e<16;e++)if(g[e]!==C[e])return!1;return!0}fromArray(A,g=0){for(let C=0;C<16;C++)this.elements[C]=A[C+g];return this}toArray(A=[],g=0){const C=this.elements;return A[g]=C[0],A[g+1]=C[1],A[g+2]=C[2],A[g+3]=C[3],A[g+4]=C[4],A[g+5]=C[5],A[g+6]=C[6],A[g+7]=C[7],A[g+8]=C[8],A[g+9]=C[9],A[g+10]=C[10],A[g+11]=C[11],A[g+12]=C[12],A[g+13]=C[13],A[g+14]=C[14],A[g+15]=C[15],A}}const YC=new K,cI=new gg,Zr=new K(0,0,0),Xr=new K(1,1,1),$I=new K,Ct=new K,gI=new K,wQ=new gg,fQ=new QC;class vt{constructor(A=0,g=0,C=0,e=vt.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=g,this._z=C,this._order=e}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,g,C,e=this._order){return this._x=A,this._y=g,this._z=C,this._order=e,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,g=this._order,C=!0){const e=A.elements,t=e[0],B=e[4],i=e[8],Q=e[1],E=e[5],n=e[9],o=e[2],s=e[6],h=e[10];switch(g){case"XYZ":this._y=Math.asin(Yg(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-n,h),this._z=Math.atan2(-B,t)):(this._x=Math.atan2(s,E),this._z=0);break;case"YXZ":this._x=Math.asin(-Yg(n,-1,1)),Math.abs(n)<.9999999?(this._y=Math.atan2(i,h),this._z=Math.atan2(Q,E)):(this._y=Math.atan2(-o,t),this._z=0);break;case"ZXY":this._x=Math.asin(Yg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-o,h),this._z=Math.atan2(-B,E)):(this._y=0,this._z=Math.atan2(Q,t));break;case"ZYX":this._y=Math.asin(-Yg(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(s,h),this._z=Math.atan2(Q,t)):(this._x=0,this._z=Math.atan2(-B,E));break;case"YZX":this._z=Math.asin(Yg(Q,-1,1)),Math.abs(Q)<.9999999?(this._x=Math.atan2(-n,E),this._y=Math.atan2(-o,t)):(this._x=0,this._y=Math.atan2(i,h));break;case"XZY":this._z=Math.asin(-Yg(B,-1,1)),Math.abs(B)<.9999999?(this._x=Math.atan2(s,E),this._y=Math.atan2(i,t)):(this._x=Math.atan2(-n,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+g)}return this._order=g,C===!0&&this._onChangeCallback(),this}setFromQuaternion(A,g,C){return wQ.makeRotationFromQuaternion(A),this.setFromRotationMatrix(wQ,g,C)}setFromVector3(A,g=this._order){return this.set(A.x,A.y,A.z,g)}reorder(A){return fQ.setFromEuler(this),this.setFromQuaternion(fQ,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],g=0){return A[g]=this._x,A[g+1]=this._y,A[g+2]=this._z,A[g+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vt.DEFAULT_ORDER="XYZ";class kn{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let jr=0;const uQ=new K,TC=new QC,xI=new gg,et=new K,Fe=new K,$r=new K,Aa=new QC,yQ=new K(1,0,0),MQ=new K(0,1,0),SQ=new K(0,0,1),ga={type:"added"},pQ={type:"removed"};class pg extends NC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=dI(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pg.DEFAULT_UP.clone();const A=new K,g=new vt,C=new QC,e=new K(1,1,1);function t(){C.setFromEuler(g,!1)}function B(){g.setFromQuaternion(C,void 0,!1)}g._onChange(t),C._onChange(B),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:g},quaternion:{configurable:!0,enumerable:!0,value:C},scale:{configurable:!0,enumerable:!0,value:e},modelViewMatrix:{value:new gg},normalMatrix:{value:new Ag}}),this.matrix=new gg,this.matrixWorld=new gg,this.matrixAutoUpdate=pg.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pg.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new kn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,g){this.quaternion.setFromAxisAngle(A,g)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,g){return TC.setFromAxisAngle(A,g),this.quaternion.multiply(TC),this}rotateOnWorldAxis(A,g){return TC.setFromAxisAngle(A,g),this.quaternion.premultiply(TC),this}rotateX(A){return this.rotateOnAxis(yQ,A)}rotateY(A){return this.rotateOnAxis(MQ,A)}rotateZ(A){return this.rotateOnAxis(SQ,A)}translateOnAxis(A,g){return uQ.copy(A).applyQuaternion(this.quaternion),this.position.add(uQ.multiplyScalar(g)),this}translateX(A){return this.translateOnAxis(yQ,A)}translateY(A){return this.translateOnAxis(MQ,A)}translateZ(A){return this.translateOnAxis(SQ,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(xI.copy(this.matrixWorld).invert())}lookAt(A,g,C){A.isVector3?et.copy(A):et.set(A,g,C);const e=this.parent;this.updateWorldMatrix(!0,!1),Fe.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xI.lookAt(Fe,et,this.up):xI.lookAt(et,Fe,this.up),this.quaternion.setFromRotationMatrix(xI),e&&(xI.extractRotation(e.matrixWorld),TC.setFromRotationMatrix(xI),this.quaternion.premultiply(TC.invert()))}add(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.add(arguments[g]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(ga)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let C=0;C<arguments.length;C++)this.remove(arguments[C]);return this}const g=this.children.indexOf(A);return g!==-1&&(A.parent=null,this.children.splice(g,1),A.dispatchEvent(pQ)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const g=this.children[A];g.parent=null,g.dispatchEvent(pQ)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),xI.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),xI.multiply(A.parent.matrixWorld)),A.applyMatrix4(xI),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,g){if(this[A]===g)return this;for(let C=0,e=this.children.length;C<e;C++){const B=this.children[C].getObjectByProperty(A,g);if(B!==void 0)return B}}getObjectsByProperty(A,g){let C=[];this[A]===g&&C.push(this);for(let e=0,t=this.children.length;e<t;e++){const B=this.children[e].getObjectsByProperty(A,g);B.length>0&&(C=C.concat(B))}return C}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fe,A,$r),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fe,Aa,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return A.set(g[8],g[9],g[10]).normalize()}raycast(){}traverse(A){A(this);const g=this.children;for(let C=0,e=g.length;C<e;C++)g[C].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const g=this.children;for(let C=0,e=g.length;C<e;C++)g[C].traverseVisible(A)}traverseAncestors(A){const g=this.parent;g!==null&&(A(g),g.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const g=this.children;for(let C=0,e=g.length;C<e;C++){const t=g[C];(t.matrixWorldAutoUpdate===!0||A===!0)&&t.updateMatrixWorld(A)}}updateWorldMatrix(A,g){const C=this.parent;if(A===!0&&C!==null&&C.matrixWorldAutoUpdate===!0&&C.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),g===!0){const e=this.children;for(let t=0,B=e.length;t<B;t++){const i=e[t];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const g=A===void 0||typeof A=="string",C={};g&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},C.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const e={};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.castShadow===!0&&(e.castShadow=!0),this.receiveShadow===!0&&(e.receiveShadow=!0),this.visible===!1&&(e.visible=!1),this.frustumCulled===!1&&(e.frustumCulled=!1),this.renderOrder!==0&&(e.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(e.userData=this.userData),e.layers=this.layers.mask,e.matrix=this.matrix.toArray(),e.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(e.matrixAutoUpdate=!1),this.isInstancedMesh&&(e.type="InstancedMesh",e.count=this.count,e.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(e.instanceColor=this.instanceColor.toJSON()));function t(i,Q){return i[Q.uuid]===void 0&&(i[Q.uuid]=Q.toJSON(A)),Q.uuid}if(this.isScene)this.background&&(this.background.isColor?e.background=this.background.toJSON():this.background.isTexture&&(e.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(e.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){e.geometry=t(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const Q=i.shapes;if(Array.isArray(Q))for(let E=0,n=Q.length;E<n;E++){const o=Q[E];t(A.shapes,o)}else t(A.shapes,Q)}}if(this.isSkinnedMesh&&(e.bindMode=this.bindMode,e.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(t(A.skeletons,this.skeleton),e.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let Q=0,E=this.material.length;Q<E;Q++)i.push(t(A.materials,this.material[Q]));e.material=i}else e.material=t(A.materials,this.material);if(this.children.length>0){e.children=[];for(let i=0;i<this.children.length;i++)e.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){e.animations=[];for(let i=0;i<this.animations.length;i++){const Q=this.animations[i];e.animations.push(t(A.animations,Q))}}if(g){const i=B(A.geometries),Q=B(A.materials),E=B(A.textures),n=B(A.images),o=B(A.shapes),s=B(A.skeletons),h=B(A.animations),D=B(A.nodes);i.length>0&&(C.geometries=i),Q.length>0&&(C.materials=Q),E.length>0&&(C.textures=E),n.length>0&&(C.images=n),o.length>0&&(C.shapes=o),s.length>0&&(C.skeletons=s),h.length>0&&(C.animations=h),D.length>0&&(C.nodes=D)}return C.object=e,C;function B(i){const Q=[];for(const E in i){const n=i[E];delete n.metadata,Q.push(n)}return Q}}clone(A){return new this.constructor().copy(this,A)}copy(A,g=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),g===!0)for(let C=0;C<A.children.length;C++){const e=A.children[C];this.add(e.clone())}return this}}pg.DEFAULT_UP=new K(0,1,0);pg.DEFAULT_MATRIX_AUTO_UPDATE=!0;pg.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hI=new K,vI=new K,aB=new K,YI=new K,bC=new K,qC=new K,RQ=new K,cB=new K,hB=new K,lB=new K;let tt=!1;class DI{constructor(A=new K,g=new K,C=new K){this.a=A,this.b=g,this.c=C}static getNormal(A,g,C,e){e.subVectors(C,g),hI.subVectors(A,g),e.cross(hI);const t=e.lengthSq();return t>0?e.multiplyScalar(1/Math.sqrt(t)):e.set(0,0,0)}static getBarycoord(A,g,C,e,t){hI.subVectors(e,g),vI.subVectors(C,g),aB.subVectors(A,g);const B=hI.dot(hI),i=hI.dot(vI),Q=hI.dot(aB),E=vI.dot(vI),n=vI.dot(aB),o=B*E-i*i;if(o===0)return t.set(-2,-1,-1);const s=1/o,h=(E*Q-i*n)*s,D=(B*n-i*Q)*s;return t.set(1-h-D,D,h)}static containsPoint(A,g,C,e){return this.getBarycoord(A,g,C,e,YI),YI.x>=0&&YI.y>=0&&YI.x+YI.y<=1}static getUV(A,g,C,e,t,B,i,Q){return tt===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tt=!0),this.getInterpolation(A,g,C,e,t,B,i,Q)}static getInterpolation(A,g,C,e,t,B,i,Q){return this.getBarycoord(A,g,C,e,YI),Q.setScalar(0),Q.addScaledVector(t,YI.x),Q.addScaledVector(B,YI.y),Q.addScaledVector(i,YI.z),Q}static isFrontFacing(A,g,C,e){return hI.subVectors(C,g),vI.subVectors(A,g),hI.cross(vI).dot(e)<0}set(A,g,C){return this.a.copy(A),this.b.copy(g),this.c.copy(C),this}setFromPointsAndIndices(A,g,C,e){return this.a.copy(A[g]),this.b.copy(A[C]),this.c.copy(A[e]),this}setFromAttributeAndIndices(A,g,C,e){return this.a.fromBufferAttribute(A,g),this.b.fromBufferAttribute(A,C),this.c.fromBufferAttribute(A,e),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return hI.subVectors(this.c,this.b),vI.subVectors(this.a,this.b),hI.cross(vI).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return DI.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,g){return DI.getBarycoord(A,this.a,this.b,this.c,g)}getUV(A,g,C,e,t){return tt===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tt=!0),DI.getInterpolation(A,this.a,this.b,this.c,g,C,e,t)}getInterpolation(A,g,C,e,t){return DI.getInterpolation(A,this.a,this.b,this.c,g,C,e,t)}containsPoint(A){return DI.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return DI.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,g){const C=this.a,e=this.b,t=this.c;let B,i;bC.subVectors(e,C),qC.subVectors(t,C),cB.subVectors(A,C);const Q=bC.dot(cB),E=qC.dot(cB);if(Q<=0&&E<=0)return g.copy(C);hB.subVectors(A,e);const n=bC.dot(hB),o=qC.dot(hB);if(n>=0&&o<=n)return g.copy(e);const s=Q*o-n*E;if(s<=0&&Q>=0&&n<=0)return B=Q/(Q-n),g.copy(C).addScaledVector(bC,B);lB.subVectors(A,t);const h=bC.dot(lB),D=qC.dot(lB);if(D>=0&&h<=D)return g.copy(t);const d=h*E-Q*D;if(d<=0&&E>=0&&D<=0)return i=E/(E-D),g.copy(C).addScaledVector(qC,i);const a=n*D-h*o;if(a<=0&&o-n>=0&&h-D>=0)return RQ.subVectors(t,e),i=(o-n)/(o-n+(h-D)),g.copy(e).addScaledVector(RQ,i);const r=1/(a+d+s);return B=d*r,i=s*r,g.copy(C).addScaledVector(bC,B).addScaledVector(qC,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let Ia=0;class pI extends NC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ia++}),this.uuid=dI(),this.name="",this.type="Material",this.blending=Ie,this.side=OI,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sn,this.blendDst=rn,this.blendEquation=$C,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=KB,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eB,this.stencilZFail=eB,this.stencilZPass=eB,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const g in A){const C=A[g];if(C===void 0){console.warn(`THREE.Material: parameter '${g}' has value of undefined.`);continue}const e=this[g];if(e===void 0){console.warn(`THREE.Material: '${g}' is not a property of THREE.${this.type}.`);continue}e&&e.isColor?e.set(C):e&&e.isVector3&&C&&C.isVector3?e.copy(C):this[g]=C}}toJSON(A){const g=A===void 0||typeof A=="string";g&&(A={textures:{},images:{}});const C={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.color&&this.color.isColor&&(C.color=this.color.getHex()),this.roughness!==void 0&&(C.roughness=this.roughness),this.metalness!==void 0&&(C.metalness=this.metalness),this.sheen!==void 0&&(C.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(C.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(C.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(C.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(C.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(C.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(C.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(C.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(C.shininess=this.shininess),this.clearcoat!==void 0&&(C.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(C.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(C.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(C.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(C.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,C.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(C.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(C.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(C.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(C.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(C.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(C.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(C.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(C.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(C.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(C.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(C.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(C.lightMap=this.lightMap.toJSON(A).uuid,C.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(C.aoMap=this.aoMap.toJSON(A).uuid,C.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(C.bumpMap=this.bumpMap.toJSON(A).uuid,C.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(C.normalMap=this.normalMap.toJSON(A).uuid,C.normalMapType=this.normalMapType,C.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(C.displacementMap=this.displacementMap.toJSON(A).uuid,C.displacementScale=this.displacementScale,C.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(C.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(C.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(C.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(C.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(C.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(C.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(C.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(C.combine=this.combine)),this.envMapIntensity!==void 0&&(C.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(C.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(C.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(C.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(C.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(C.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(C.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(C.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(C.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(C.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(C.size=this.size),this.shadowSide!==null&&(C.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(C.sizeAttenuation=this.sizeAttenuation),this.blending!==Ie&&(C.blending=this.blending),this.side!==OI&&(C.side=this.side),this.vertexColors&&(C.vertexColors=!0),this.opacity<1&&(C.opacity=this.opacity),this.transparent===!0&&(C.transparent=this.transparent),C.depthFunc=this.depthFunc,C.depthTest=this.depthTest,C.depthWrite=this.depthWrite,C.colorWrite=this.colorWrite,C.stencilWrite=this.stencilWrite,C.stencilWriteMask=this.stencilWriteMask,C.stencilFunc=this.stencilFunc,C.stencilRef=this.stencilRef,C.stencilFuncMask=this.stencilFuncMask,C.stencilFail=this.stencilFail,C.stencilZFail=this.stencilZFail,C.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(C.rotation=this.rotation),this.polygonOffset===!0&&(C.polygonOffset=!0),this.polygonOffsetFactor!==0&&(C.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(C.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(C.linewidth=this.linewidth),this.dashSize!==void 0&&(C.dashSize=this.dashSize),this.gapSize!==void 0&&(C.gapSize=this.gapSize),this.scale!==void 0&&(C.scale=this.scale),this.dithering===!0&&(C.dithering=!0),this.alphaTest>0&&(C.alphaTest=this.alphaTest),this.alphaHash===!0&&(C.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(C.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(C.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(C.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(C.wireframe=this.wireframe),this.wireframeLinewidth>1&&(C.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(C.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(C.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(C.flatShading=this.flatShading),this.visible===!1&&(C.visible=!1),this.toneMapped===!1&&(C.toneMapped=!1),this.fog===!1&&(C.fog=!1),Object.keys(this.userData).length>0&&(C.userData=this.userData);function e(t){const B=[];for(const i in t){const Q=t[i];delete Q.metadata,B.push(Q)}return B}if(g){const t=e(A.textures),B=e(A.images);t.length>0&&(C.textures=t),B.length>0&&(C.images=B)}return C}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const g=A.clippingPlanes;let C=null;if(g!==null){const e=g.length;C=new Array(e);for(let t=0;t!==e;++t)C[t]=g[t].clone()}return this.clippingPlanes=C,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const Gn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lI={h:0,s:0,l:0},Bt={h:0,s:0,l:0};function DB(I,A,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?I+(A-I)*6*g:g<1/2?A:g<2/3?I+(A-I)*6*(2/3-g):I}class zA{constructor(A,g,C){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,g,C)}set(A,g,C){if(g===void 0&&C===void 0){const e=A;e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e)}else this.setRGB(A,g,C);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,g=PA){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,aI.toWorkingColorSpace(this,g),this}setRGB(A,g,C,e=aI.workingColorSpace){return this.r=A,this.g=g,this.b=C,aI.toWorkingColorSpace(this,e),this}setHSL(A,g,C,e=aI.workingColorSpace){if(A=Ci(A,1),g=Yg(g,0,1),C=Yg(C,0,1),g===0)this.r=this.g=this.b=C;else{const t=C<=.5?C*(1+g):C+g-C*g,B=2*C-t;this.r=DB(B,t,A+1/3),this.g=DB(B,t,A),this.b=DB(B,t,A-1/3)}return aI.toWorkingColorSpace(this,e),this}setStyle(A,g=PA){function C(t){t!==void 0&&parseFloat(t)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let e;if(e=/^(\w+)\(([^\)]*)\)/.exec(A)){let t;const B=e[1],i=e[2];switch(B){case"rgb":case"rgba":if(t=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return C(t[4]),this.setRGB(Math.min(255,parseInt(t[1],10))/255,Math.min(255,parseInt(t[2],10))/255,Math.min(255,parseInt(t[3],10))/255,g);if(t=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return C(t[4]),this.setRGB(Math.min(100,parseInt(t[1],10))/100,Math.min(100,parseInt(t[2],10))/100,Math.min(100,parseInt(t[3],10))/100,g);break;case"hsl":case"hsla":if(t=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return C(t[4]),this.setHSL(parseFloat(t[1])/360,parseFloat(t[2])/100,parseFloat(t[3])/100,g);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(e=/^\#([A-Fa-f\d]+)$/.exec(A)){const t=e[1],B=t.length;if(B===3)return this.setRGB(parseInt(t.charAt(0),16)/15,parseInt(t.charAt(1),16)/15,parseInt(t.charAt(2),16)/15,g);if(B===6)return this.setHex(parseInt(t,16),g);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,g);return this}setColorName(A,g=PA){const C=Gn[A.toLowerCase()];return C!==void 0?this.setHex(C,g):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=Ce(A.r),this.g=Ce(A.g),this.b=Ce(A.b),this}copyLinearToSRGB(A){return this.r=BB(A.r),this.g=BB(A.g),this.b=BB(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=PA){return aI.fromWorkingColorSpace(_g.copy(this),A),Math.round(Yg(_g.r*255,0,255))*65536+Math.round(Yg(_g.g*255,0,255))*256+Math.round(Yg(_g.b*255,0,255))}getHexString(A=PA){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,g=aI.workingColorSpace){aI.fromWorkingColorSpace(_g.copy(this),g);const C=_g.r,e=_g.g,t=_g.b,B=Math.max(C,e,t),i=Math.min(C,e,t);let Q,E;const n=(i+B)/2;if(i===B)Q=0,E=0;else{const o=B-i;switch(E=n<=.5?o/(B+i):o/(2-B-i),B){case C:Q=(e-t)/o+(e<t?6:0);break;case e:Q=(t-C)/o+2;break;case t:Q=(C-e)/o+4;break}Q/=6}return A.h=Q,A.s=E,A.l=n,A}getRGB(A,g=aI.workingColorSpace){return aI.fromWorkingColorSpace(_g.copy(this),g),A.r=_g.r,A.g=_g.g,A.b=_g.b,A}getStyle(A=PA){aI.fromWorkingColorSpace(_g.copy(this),A);const g=_g.r,C=_g.g,e=_g.b;return A!==PA?`color(${A} ${g.toFixed(3)} ${C.toFixed(3)} ${e.toFixed(3)})`:`rgb(${Math.round(g*255)},${Math.round(C*255)},${Math.round(e*255)})`}offsetHSL(A,g,C){return this.getHSL(lI),lI.h+=A,lI.s+=g,lI.l+=C,this.setHSL(lI.h,lI.s,lI.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,g){return this.r=A.r+g.r,this.g=A.g+g.g,this.b=A.b+g.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,g){return this.r+=(A.r-this.r)*g,this.g+=(A.g-this.g)*g,this.b+=(A.b-this.b)*g,this}lerpColors(A,g,C){return this.r=A.r+(g.r-A.r)*C,this.g=A.g+(g.g-A.g)*C,this.b=A.b+(g.b-A.b)*C,this}lerpHSL(A,g){this.getHSL(lI),A.getHSL(Bt);const C=xe(lI.h,Bt.h,g),e=xe(lI.s,Bt.s,g),t=xe(lI.l,Bt.l,g);return this.setHSL(C,e,t),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const g=this.r,C=this.g,e=this.b,t=A.elements;return this.r=t[0]*g+t[3]*C+t[6]*e,this.g=t[1]*g+t[4]*C+t[7]*e,this.b=t[2]*g+t[5]*C+t[8]*e,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,g=0){return this.r=A[g],this.g=A[g+1],this.b=A[g+2],this}toArray(A=[],g=0){return A[g]=this.r,A[g+1]=this.g,A[g+2]=this.b,A}fromBufferAttribute(A,g){return this.r=A.getX(g),this.g=A.getY(g),this.b=A.getZ(g),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _g=new zA;zA.NAMES=Gn;class wC extends pI{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=an,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Fg=new K,it=new Bg;class Zg{constructor(A,g,C=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=g,this.count=A!==void 0?A.length/g:0,this.normalized=C,this.usage=YB,this.updateRange={offset:0,count:-1},this.gpuType=qI,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,g,C){A*=this.itemSize,C*=g.itemSize;for(let e=0,t=this.itemSize;e<t;e++)this.array[A+e]=g.array[C+e];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let g=0,C=this.count;g<C;g++)it.fromBufferAttribute(this,g),it.applyMatrix3(A),this.setXY(g,it.x,it.y);else if(this.itemSize===3)for(let g=0,C=this.count;g<C;g++)Fg.fromBufferAttribute(this,g),Fg.applyMatrix3(A),this.setXYZ(g,Fg.x,Fg.y,Fg.z);return this}applyMatrix4(A){for(let g=0,C=this.count;g<C;g++)Fg.fromBufferAttribute(this,g),Fg.applyMatrix4(A),this.setXYZ(g,Fg.x,Fg.y,Fg.z);return this}applyNormalMatrix(A){for(let g=0,C=this.count;g<C;g++)Fg.fromBufferAttribute(this,g),Fg.applyNormalMatrix(A),this.setXYZ(g,Fg.x,Fg.y,Fg.z);return this}transformDirection(A){for(let g=0,C=this.count;g<C;g++)Fg.fromBufferAttribute(this,g),Fg.transformDirection(A),this.setXYZ(g,Fg.x,Fg.y,Fg.z);return this}set(A,g=0){return this.array.set(A,g),this}getComponent(A,g){let C=this.array[A*this.itemSize+g];return this.normalized&&(C=SI(C,this.array)),C}setComponent(A,g,C){return this.normalized&&(C=hg(C,this.array)),this.array[A*this.itemSize+g]=C,this}getX(A){let g=this.array[A*this.itemSize];return this.normalized&&(g=SI(g,this.array)),g}setX(A,g){return this.normalized&&(g=hg(g,this.array)),this.array[A*this.itemSize]=g,this}getY(A){let g=this.array[A*this.itemSize+1];return this.normalized&&(g=SI(g,this.array)),g}setY(A,g){return this.normalized&&(g=hg(g,this.array)),this.array[A*this.itemSize+1]=g,this}getZ(A){let g=this.array[A*this.itemSize+2];return this.normalized&&(g=SI(g,this.array)),g}setZ(A,g){return this.normalized&&(g=hg(g,this.array)),this.array[A*this.itemSize+2]=g,this}getW(A){let g=this.array[A*this.itemSize+3];return this.normalized&&(g=SI(g,this.array)),g}setW(A,g){return this.normalized&&(g=hg(g,this.array)),this.array[A*this.itemSize+3]=g,this}setXY(A,g,C){return A*=this.itemSize,this.normalized&&(g=hg(g,this.array),C=hg(C,this.array)),this.array[A+0]=g,this.array[A+1]=C,this}setXYZ(A,g,C,e){return A*=this.itemSize,this.normalized&&(g=hg(g,this.array),C=hg(C,this.array),e=hg(e,this.array)),this.array[A+0]=g,this.array[A+1]=C,this.array[A+2]=e,this}setXYZW(A,g,C,e,t){return A*=this.itemSize,this.normalized&&(g=hg(g,this.array),C=hg(C,this.array),e=hg(e,this.array),t=hg(t,this.array)),this.array[A+0]=g,this.array[A+1]=C,this.array[A+2]=e,this.array[A+3]=t,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==YB&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}}class mn extends Zg{constructor(A,g,C){super(new Uint16Array(A),g,C)}}class Kn extends Zg{constructor(A,g,C){super(new Uint32Array(A),g,C)}}class PI extends Zg{constructor(A,g,C){super(new Float32Array(A),g,C)}}let Ca=0;const iI=new gg,dB=new pg,_C=new K,II=new VI,Ne=new VI,Jg=new K;class FI extends NC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ca++}),this.uuid=dI(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ln(A)?Kn:mn)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,g){return this.attributes[A]=g,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,g,C=0){this.groups.push({start:A,count:g,materialIndex:C})}clearGroups(){this.groups=[]}setDrawRange(A,g){this.drawRange.start=A,this.drawRange.count=g}applyMatrix4(A){const g=this.attributes.position;g!==void 0&&(g.applyMatrix4(A),g.needsUpdate=!0);const C=this.attributes.normal;if(C!==void 0){const t=new Ag().getNormalMatrix(A);C.applyNormalMatrix(t),C.needsUpdate=!0}const e=this.attributes.tangent;return e!==void 0&&(e.transformDirection(A),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return iI.makeRotationFromQuaternion(A),this.applyMatrix4(iI),this}rotateX(A){return iI.makeRotationX(A),this.applyMatrix4(iI),this}rotateY(A){return iI.makeRotationY(A),this.applyMatrix4(iI),this}rotateZ(A){return iI.makeRotationZ(A),this.applyMatrix4(iI),this}translate(A,g,C){return iI.makeTranslation(A,g,C),this.applyMatrix4(iI),this}scale(A,g,C){return iI.makeScale(A,g,C),this.applyMatrix4(iI),this}lookAt(A){return dB.lookAt(A),dB.updateMatrix(),this.applyMatrix4(dB.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_C).negate(),this.translate(_C.x,_C.y,_C.z),this}setFromPoints(A){const g=[];for(let C=0,e=A.length;C<e;C++){const t=A[C];g.push(t.x,t.y,t.z||0)}return this.setAttribute("position",new PI(g,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new VI);const A=this.attributes.position,g=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),g)for(let C=0,e=g.length;C<e;C++){const t=g[C];II.setFromBufferAttribute(t),this.morphTargetsRelative?(Jg.addVectors(this.boundingBox.min,II.min),this.boundingBox.expandByPoint(Jg),Jg.addVectors(this.boundingBox.max,II.max),this.boundingBox.expandByPoint(Jg)):(this.boundingBox.expandByPoint(II.min),this.boundingBox.expandByPoint(II.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new LI);const A=this.attributes.position,g=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(A){const C=this.boundingSphere.center;if(II.setFromBufferAttribute(A),g)for(let t=0,B=g.length;t<B;t++){const i=g[t];Ne.setFromBufferAttribute(i),this.morphTargetsRelative?(Jg.addVectors(II.min,Ne.min),II.expandByPoint(Jg),Jg.addVectors(II.max,Ne.max),II.expandByPoint(Jg)):(II.expandByPoint(Ne.min),II.expandByPoint(Ne.max))}II.getCenter(C);let e=0;for(let t=0,B=A.count;t<B;t++)Jg.fromBufferAttribute(A,t),e=Math.max(e,C.distanceToSquared(Jg));if(g)for(let t=0,B=g.length;t<B;t++){const i=g[t],Q=this.morphTargetsRelative;for(let E=0,n=i.count;E<n;E++)Jg.fromBufferAttribute(i,E),Q&&(_C.fromBufferAttribute(A,E),Jg.add(_C)),e=Math.max(e,C.distanceToSquared(Jg))}this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,g=this.attributes;if(A===null||g.position===void 0||g.normal===void 0||g.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const C=A.array,e=g.position.array,t=g.normal.array,B=g.uv.array,i=e.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zg(new Float32Array(4*i),4));const Q=this.getAttribute("tangent").array,E=[],n=[];for(let F=0;F<i;F++)E[F]=new K,n[F]=new K;const o=new K,s=new K,h=new K,D=new Bg,d=new Bg,a=new Bg,r=new K,p=new K;function y(F,tA,iA){o.fromArray(e,F*3),s.fromArray(e,tA*3),h.fromArray(e,iA*3),D.fromArray(B,F*2),d.fromArray(B,tA*2),a.fromArray(B,iA*2),s.sub(o),h.sub(o),d.sub(D),a.sub(D);const Y=1/(d.x*a.y-a.x*d.y);isFinite(Y)&&(r.copy(s).multiplyScalar(a.y).addScaledVector(h,-d.y).multiplyScalar(Y),p.copy(h).multiplyScalar(d.x).addScaledVector(s,-a.x).multiplyScalar(Y),E[F].add(r),E[tA].add(r),E[iA].add(r),n[F].add(p),n[tA].add(p),n[iA].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:C.length}]);for(let F=0,tA=S.length;F<tA;++F){const iA=S[F],Y=iA.start,v=iA.count;for(let j=Y,$=Y+v;j<$;j+=3)y(C[j+0],C[j+1],C[j+2])}const N=new K,m=new K,k=new K,P=new K;function u(F){k.fromArray(t,F*3),P.copy(k);const tA=E[F];N.copy(tA),N.sub(k.multiplyScalar(k.dot(tA))).normalize(),m.crossVectors(P,tA);const Y=m.dot(n[F])<0?-1:1;Q[F*4]=N.x,Q[F*4+1]=N.y,Q[F*4+2]=N.z,Q[F*4+3]=Y}for(let F=0,tA=S.length;F<tA;++F){const iA=S[F],Y=iA.start,v=iA.count;for(let j=Y,$=Y+v;j<$;j+=3)u(C[j+0]),u(C[j+1]),u(C[j+2])}}computeVertexNormals(){const A=this.index,g=this.getAttribute("position");if(g!==void 0){let C=this.getAttribute("normal");if(C===void 0)C=new Zg(new Float32Array(g.count*3),3),this.setAttribute("normal",C);else for(let s=0,h=C.count;s<h;s++)C.setXYZ(s,0,0,0);const e=new K,t=new K,B=new K,i=new K,Q=new K,E=new K,n=new K,o=new K;if(A)for(let s=0,h=A.count;s<h;s+=3){const D=A.getX(s+0),d=A.getX(s+1),a=A.getX(s+2);e.fromBufferAttribute(g,D),t.fromBufferAttribute(g,d),B.fromBufferAttribute(g,a),n.subVectors(B,t),o.subVectors(e,t),n.cross(o),i.fromBufferAttribute(C,D),Q.fromBufferAttribute(C,d),E.fromBufferAttribute(C,a),i.add(n),Q.add(n),E.add(n),C.setXYZ(D,i.x,i.y,i.z),C.setXYZ(d,Q.x,Q.y,Q.z),C.setXYZ(a,E.x,E.y,E.z)}else for(let s=0,h=g.count;s<h;s+=3)e.fromBufferAttribute(g,s+0),t.fromBufferAttribute(g,s+1),B.fromBufferAttribute(g,s+2),n.subVectors(B,t),o.subVectors(e,t),n.cross(o),C.setXYZ(s+0,n.x,n.y,n.z),C.setXYZ(s+1,n.x,n.y,n.z),C.setXYZ(s+2,n.x,n.y,n.z);this.normalizeNormals(),C.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let g=0,C=A.count;g<C;g++)Jg.fromBufferAttribute(A,g),Jg.normalize(),A.setXYZ(g,Jg.x,Jg.y,Jg.z)}toNonIndexed(){function A(i,Q){const E=i.array,n=i.itemSize,o=i.normalized,s=new E.constructor(Q.length*n);let h=0,D=0;for(let d=0,a=Q.length;d<a;d++){i.isInterleavedBufferAttribute?h=Q[d]*i.data.stride+i.offset:h=Q[d]*n;for(let r=0;r<n;r++)s[D++]=E[h++]}return new Zg(s,n,o)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const g=new FI,C=this.index.array,e=this.attributes;for(const i in e){const Q=e[i],E=A(Q,C);g.setAttribute(i,E)}const t=this.morphAttributes;for(const i in t){const Q=[],E=t[i];for(let n=0,o=E.length;n<o;n++){const s=E[n],h=A(s,C);Q.push(h)}g.morphAttributes[i]=Q}g.morphTargetsRelative=this.morphTargetsRelative;const B=this.groups;for(let i=0,Q=B.length;i<Q;i++){const E=B[i];g.addGroup(E.start,E.count,E.materialIndex)}return g}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const Q=this.parameters;for(const E in Q)Q[E]!==void 0&&(A[E]=Q[E]);return A}A.data={attributes:{}};const g=this.index;g!==null&&(A.data.index={type:g.array.constructor.name,array:Array.prototype.slice.call(g.array)});const C=this.attributes;for(const Q in C){const E=C[Q];A.data.attributes[Q]=E.toJSON(A.data)}const e={};let t=!1;for(const Q in this.morphAttributes){const E=this.morphAttributes[Q],n=[];for(let o=0,s=E.length;o<s;o++){const h=E[o];n.push(h.toJSON(A.data))}n.length>0&&(e[Q]=n,t=!0)}t&&(A.data.morphAttributes=e,A.data.morphTargetsRelative=this.morphTargetsRelative);const B=this.groups;B.length>0&&(A.data.groups=JSON.parse(JSON.stringify(B)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const g={};this.name=A.name;const C=A.index;C!==null&&this.setIndex(C.clone(g));const e=A.attributes;for(const E in e){const n=e[E];this.setAttribute(E,n.clone(g))}const t=A.morphAttributes;for(const E in t){const n=[],o=t[E];for(let s=0,h=o.length;s<h;s++)n.push(o[s].clone(g));this.morphAttributes[E]=n}this.morphTargetsRelative=A.morphTargetsRelative;const B=A.groups;for(let E=0,n=B.length;E<n;E++){const o=B[E];this.addGroup(o.start,o.count,o.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const Q=A.boundingSphere;return Q!==null&&(this.boundingSphere=Q.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const LQ=new gg,rC=new xt,Qt=new LI,FQ=new K,PC=new K,OC=new K,VC=new K,wB=new K,Et=new K,nt=new Bg,ot=new Bg,st=new Bg,NQ=new K,UQ=new K,kQ=new K,rt=new K,at=new K;class sI extends pg{constructor(A=new FI,g=new wC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=g,this.updateMorphTargets()}copy(A,g){return super.copy(A,g),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const g=this.geometry.morphAttributes,C=Object.keys(g);if(C.length>0){const e=g[C[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,B=e.length;t<B;t++){const i=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=t}}}}getVertexPosition(A,g){const C=this.geometry,e=C.attributes.position,t=C.morphAttributes.position,B=C.morphTargetsRelative;g.fromBufferAttribute(e,A);const i=this.morphTargetInfluences;if(t&&i){Et.set(0,0,0);for(let Q=0,E=t.length;Q<E;Q++){const n=i[Q],o=t[Q];n!==0&&(wB.fromBufferAttribute(o,A),B?Et.addScaledVector(wB,n):Et.addScaledVector(wB.sub(g),n))}g.add(Et)}return g}raycast(A,g){const C=this.geometry,e=this.material,t=this.matrixWorld;e!==void 0&&(C.boundingSphere===null&&C.computeBoundingSphere(),Qt.copy(C.boundingSphere),Qt.applyMatrix4(t),rC.copy(A.ray).recast(A.near),!(Qt.containsPoint(rC.origin)===!1&&(rC.intersectSphere(Qt,FQ)===null||rC.origin.distanceToSquared(FQ)>(A.far-A.near)**2))&&(LQ.copy(t).invert(),rC.copy(A.ray).applyMatrix4(LQ),!(C.boundingBox!==null&&rC.intersectsBox(C.boundingBox)===!1)&&this._computeIntersections(A,g,rC)))}_computeIntersections(A,g,C){let e;const t=this.geometry,B=this.material,i=t.index,Q=t.attributes.position,E=t.attributes.uv,n=t.attributes.uv1,o=t.attributes.normal,s=t.groups,h=t.drawRange;if(i!==null)if(Array.isArray(B))for(let D=0,d=s.length;D<d;D++){const a=s[D],r=B[a.materialIndex],p=Math.max(a.start,h.start),y=Math.min(i.count,Math.min(a.start+a.count,h.start+h.count));for(let S=p,N=y;S<N;S+=3){const m=i.getX(S),k=i.getX(S+1),P=i.getX(S+2);e=ct(this,r,A,C,E,n,o,m,k,P),e&&(e.faceIndex=Math.floor(S/3),e.face.materialIndex=a.materialIndex,g.push(e))}}else{const D=Math.max(0,h.start),d=Math.min(i.count,h.start+h.count);for(let a=D,r=d;a<r;a+=3){const p=i.getX(a),y=i.getX(a+1),S=i.getX(a+2);e=ct(this,B,A,C,E,n,o,p,y,S),e&&(e.faceIndex=Math.floor(a/3),g.push(e))}}else if(Q!==void 0)if(Array.isArray(B))for(let D=0,d=s.length;D<d;D++){const a=s[D],r=B[a.materialIndex],p=Math.max(a.start,h.start),y=Math.min(Q.count,Math.min(a.start+a.count,h.start+h.count));for(let S=p,N=y;S<N;S+=3){const m=S,k=S+1,P=S+2;e=ct(this,r,A,C,E,n,o,m,k,P),e&&(e.faceIndex=Math.floor(S/3),e.face.materialIndex=a.materialIndex,g.push(e))}}else{const D=Math.max(0,h.start),d=Math.min(Q.count,h.start+h.count);for(let a=D,r=d;a<r;a+=3){const p=a,y=a+1,S=a+2;e=ct(this,B,A,C,E,n,o,p,y,S),e&&(e.faceIndex=Math.floor(a/3),g.push(e))}}}}function ea(I,A,g,C,e,t,B,i){let Q;if(A.side===AI?Q=C.intersectTriangle(B,t,e,!0,i):Q=C.intersectTriangle(e,t,B,A.side===OI,i),Q===null)return null;at.copy(i),at.applyMatrix4(I.matrixWorld);const E=g.ray.origin.distanceTo(at);return E<g.near||E>g.far?null:{distance:E,point:at.clone(),object:I}}function ct(I,A,g,C,e,t,B,i,Q,E){I.getVertexPosition(i,PC),I.getVertexPosition(Q,OC),I.getVertexPosition(E,VC);const n=ea(I,A,g,C,PC,OC,VC,rt);if(n){e&&(nt.fromBufferAttribute(e,i),ot.fromBufferAttribute(e,Q),st.fromBufferAttribute(e,E),n.uv=DI.getInterpolation(rt,PC,OC,VC,nt,ot,st,new Bg)),t&&(nt.fromBufferAttribute(t,i),ot.fromBufferAttribute(t,Q),st.fromBufferAttribute(t,E),n.uv1=DI.getInterpolation(rt,PC,OC,VC,nt,ot,st,new Bg),n.uv2=n.uv1),B&&(NQ.fromBufferAttribute(B,i),UQ.fromBufferAttribute(B,Q),kQ.fromBufferAttribute(B,E),n.normal=DI.getInterpolation(rt,PC,OC,VC,NQ,UQ,kQ,new K),n.normal.dot(C.direction)>0&&n.normal.multiplyScalar(-1));const o={a:i,b:Q,c:E,normal:new K,materialIndex:0};DI.getNormal(PC,OC,VC,o.normal),n.face=o}return n}class Oe extends FI{constructor(A=1,g=1,C=1,e=1,t=1,B=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:g,depth:C,widthSegments:e,heightSegments:t,depthSegments:B};const i=this;e=Math.floor(e),t=Math.floor(t),B=Math.floor(B);const Q=[],E=[],n=[],o=[];let s=0,h=0;D("z","y","x",-1,-1,C,g,A,B,t,0),D("z","y","x",1,-1,C,g,-A,B,t,1),D("x","z","y",1,1,A,C,g,e,B,2),D("x","z","y",1,-1,A,C,-g,e,B,3),D("x","y","z",1,-1,A,g,C,e,t,4),D("x","y","z",-1,-1,A,g,-C,e,t,5),this.setIndex(Q),this.setAttribute("position",new PI(E,3)),this.setAttribute("normal",new PI(n,3)),this.setAttribute("uv",new PI(o,2));function D(d,a,r,p,y,S,N,m,k,P,u){const F=S/k,tA=N/P,iA=S/2,Y=N/2,v=m/2,j=k+1,$=P+1;let _=0,W=0;const BA=new K;for(let gA=0;gA<$;gA++){const q=gA*tA-Y;for(let Z=0;Z<j;Z++){const DA=Z*F-iA;BA[d]=DA*p,BA[a]=q*y,BA[r]=v,E.push(BA.x,BA.y,BA.z),BA[d]=0,BA[a]=0,BA[r]=m>0?1:-1,n.push(BA.x,BA.y,BA.z),o.push(Z/k),o.push(1-gA/P),_+=1}}for(let gA=0;gA<P;gA++)for(let q=0;q<k;q++){const Z=s+q+j*gA,DA=s+q+j*(gA+1),EA=s+(q+1)+j*(gA+1),dA=s+(q+1)+j*gA;Q.push(Z,DA,dA),Q.push(DA,EA,dA),W+=6}i.addGroup(h,W,u),h+=W,s+=_}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Oe(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function re(I){const A={};for(const g in I){A[g]={};for(const C in I[g]){const e=I[g][C];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)?e.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[g][C]=null):A[g][C]=e.clone():Array.isArray(e)?A[g][C]=e.slice():A[g][C]=e}}return A}function Wg(I){const A={};for(let g=0;g<I.length;g++){const C=re(I[g]);for(const e in C)A[e]=C[e]}return A}function ta(I){const A=[];for(let g=0;g<I.length;g++)A.push(I[g].clone());return A}function Jn(I){return I.getRenderTarget()===null?I.outputColorSpace:RI}const Ba={clone:re,merge:Wg};var ia=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class LC extends pI{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ia,this.fragmentShader=Qa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=re(A.uniforms),this.uniformsGroups=ta(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const g=super.toJSON(A);g.glslVersion=this.glslVersion,g.uniforms={};for(const e in this.uniforms){const B=this.uniforms[e].value;B&&B.isTexture?g.uniforms[e]={type:"t",value:B.toJSON(A).uuid}:B&&B.isColor?g.uniforms[e]={type:"c",value:B.getHex()}:B&&B.isVector2?g.uniforms[e]={type:"v2",value:B.toArray()}:B&&B.isVector3?g.uniforms[e]={type:"v3",value:B.toArray()}:B&&B.isVector4?g.uniforms[e]={type:"v4",value:B.toArray()}:B&&B.isMatrix3?g.uniforms[e]={type:"m3",value:B.toArray()}:B&&B.isMatrix4?g.uniforms[e]={type:"m4",value:B.toArray()}:g.uniforms[e]={value:B}}Object.keys(this.defines).length>0&&(g.defines=this.defines),g.vertexShader=this.vertexShader,g.fragmentShader=this.fragmentShader,g.lights=this.lights,g.clipping=this.clipping;const C={};for(const e in this.extensions)this.extensions[e]===!0&&(C[e]=!0);return Object.keys(C).length>0&&(g.extensions=C),g}}class Hn extends pg{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gg,this.projectionMatrix=new gg,this.projectionMatrixInverse=new gg,this.coordinateSystem=_I}copy(A,g){return super.copy(A,g),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return A.set(-g[8],-g[9],-g[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,g){super.updateWorldMatrix(A,g),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zg extends Hn{constructor(A=50,g=1,C=.1,e=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=C,this.far=e,this.focus=10,this.aspect=g,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,g){return super.copy(A,g),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const g=.5*this.getFilmHeight()/A;this.fov=se*2*Math.atan(g),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(He*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return se*2*Math.atan(Math.tan(He*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,g,C,e,t,B){this.aspect=A/g,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=g,this.view.offsetX=C,this.view.offsetY=e,this.view.width=t,this.view.height=B,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let g=A*Math.tan(He*.5*this.fov)/this.zoom,C=2*g,e=this.aspect*C,t=-.5*e;const B=this.view;if(this.view!==null&&this.view.enabled){const Q=B.fullWidth,E=B.fullHeight;t+=B.offsetX*e/Q,g-=B.offsetY*C/E,e*=B.width/Q,C*=B.height/E}const i=this.filmOffset;i!==0&&(t+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(t,t+e,g,g-C,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const g=super.toJSON(A);return g.object.fov=this.fov,g.object.zoom=this.zoom,g.object.near=this.near,g.object.far=this.far,g.object.focus=this.focus,g.object.aspect=this.aspect,this.view!==null&&(g.object.view=Object.assign({},this.view)),g.object.filmGauge=this.filmGauge,g.object.filmOffset=this.filmOffset,g}}const WC=-90,zC=1;class Ea extends pg{constructor(A,g,C){super(),this.type="CubeCamera",this.renderTarget=C,this.coordinateSystem=null;const e=new zg(WC,zC,A,g);e.layers=this.layers,this.add(e);const t=new zg(WC,zC,A,g);t.layers=this.layers,this.add(t);const B=new zg(WC,zC,A,g);B.layers=this.layers,this.add(B);const i=new zg(WC,zC,A,g);i.layers=this.layers,this.add(i);const Q=new zg(WC,zC,A,g);Q.layers=this.layers,this.add(Q);const E=new zg(WC,zC,A,g);E.layers=this.layers,this.add(E)}updateCoordinateSystem(){const A=this.coordinateSystem,g=this.children.concat(),[C,e,t,B,i,Q]=g;for(const E of g)this.remove(E);if(A===_I)C.up.set(0,1,0),C.lookAt(1,0,0),e.up.set(0,1,0),e.lookAt(-1,0,0),t.up.set(0,0,-1),t.lookAt(0,1,0),B.up.set(0,0,1),B.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),Q.up.set(0,1,0),Q.lookAt(0,0,-1);else if(A===kt)C.up.set(0,-1,0),C.lookAt(-1,0,0),e.up.set(0,-1,0),e.lookAt(1,0,0),t.up.set(0,0,1),t.lookAt(0,1,0),B.up.set(0,0,-1),B.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),Q.up.set(0,-1,0),Q.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const E of g)this.add(E),E.updateMatrixWorld()}update(A,g){this.parent===null&&this.updateMatrixWorld();const C=this.renderTarget;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[e,t,B,i,Q,E]=this.children,n=A.getRenderTarget(),o=A.xr.enabled;A.xr.enabled=!1;const s=C.texture.generateMipmaps;C.texture.generateMipmaps=!1,A.setRenderTarget(C,0),A.render(g,e),A.setRenderTarget(C,1),A.render(g,t),A.setRenderTarget(C,2),A.render(g,B),A.setRenderTarget(C,3),A.render(g,i),A.setRenderTarget(C,4),A.render(g,Q),C.texture.generateMipmaps=s,A.setRenderTarget(C,5),A.render(g,E),A.setRenderTarget(n),A.xr.enabled=o,C.texture.needsPMREMUpdate=!0}}class xn extends Tg{constructor(A,g,C,e,t,B,i,Q,E,n){A=A!==void 0?A:[],g=g!==void 0?g:ie,super(A,g,C,e,t,B,i,Q,E,n),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class na extends RC{constructor(A=1,g={}){super(A,A,g),this.isWebGLCubeRenderTarget=!0;const C={width:A,height:A,depth:1},e=[C,C,C,C,C,C];g.encoding!==void 0&&(ve("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===MC?PA:SC),this.texture=new xn(e,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:$g}fromEquirectangularTexture(A,g){this.texture.type=g.type,this.texture.colorSpace=g.colorSpace,this.texture.generateMipmaps=g.generateMipmaps,this.texture.minFilter=g.minFilter,this.texture.magFilter=g.magFilter;const C={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},e=new Oe(5,5,5),t=new LC({name:"CubemapFromEquirect",uniforms:re(C.uniforms),vertexShader:C.vertexShader,fragmentShader:C.fragmentShader,side:AI,blending:tC});t.uniforms.tEquirect.value=g;const B=new sI(e,t),i=g.minFilter;return g.minFilter===pC&&(g.minFilter=$g),new Ea(1,10,this).update(A,B),g.minFilter=i,B.geometry.dispose(),B.material.dispose(),this}clear(A,g,C,e){const t=A.getRenderTarget();for(let B=0;B<6;B++)A.setRenderTarget(this,B),A.clear(g,C,e);A.setRenderTarget(t)}}const fB=new K,oa=new K,sa=new Ag;class lC{constructor(A=new K(1,0,0),g=0){this.isPlane=!0,this.normal=A,this.constant=g}set(A,g){return this.normal.copy(A),this.constant=g,this}setComponents(A,g,C,e){return this.normal.set(A,g,C),this.constant=e,this}setFromNormalAndCoplanarPoint(A,g){return this.normal.copy(A),this.constant=-g.dot(this.normal),this}setFromCoplanarPoints(A,g,C){const e=fB.subVectors(C,g).cross(oa.subVectors(A,g)).normalize();return this.setFromNormalAndCoplanarPoint(e,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,g){return g.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,g){const C=A.delta(fB),e=this.normal.dot(C);if(e===0)return this.distanceToPoint(A.start)===0?g.copy(A.start):null;const t=-(A.start.dot(this.normal)+this.constant)/e;return t<0||t>1?null:g.copy(A.start).addScaledVector(C,t)}intersectsLine(A){const g=this.distanceToPoint(A.start),C=this.distanceToPoint(A.end);return g<0&&C>0||C<0&&g>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,g){const C=g||sa.getNormalMatrix(A),e=this.coplanarPoint(fB).applyMatrix4(A),t=this.normal.applyMatrix3(C).normalize();return this.constant=-e.dot(t),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const aC=new LI,ht=new K;class ei{constructor(A=new lC,g=new lC,C=new lC,e=new lC,t=new lC,B=new lC){this.planes=[A,g,C,e,t,B]}set(A,g,C,e,t,B){const i=this.planes;return i[0].copy(A),i[1].copy(g),i[2].copy(C),i[3].copy(e),i[4].copy(t),i[5].copy(B),this}copy(A){const g=this.planes;for(let C=0;C<6;C++)g[C].copy(A.planes[C]);return this}setFromProjectionMatrix(A,g=_I){const C=this.planes,e=A.elements,t=e[0],B=e[1],i=e[2],Q=e[3],E=e[4],n=e[5],o=e[6],s=e[7],h=e[8],D=e[9],d=e[10],a=e[11],r=e[12],p=e[13],y=e[14],S=e[15];if(C[0].setComponents(Q-t,s-E,a-h,S-r).normalize(),C[1].setComponents(Q+t,s+E,a+h,S+r).normalize(),C[2].setComponents(Q+B,s+n,a+D,S+p).normalize(),C[3].setComponents(Q-B,s-n,a-D,S-p).normalize(),C[4].setComponents(Q-i,s-o,a-d,S-y).normalize(),g===_I)C[5].setComponents(Q+i,s+o,a+d,S+y).normalize();else if(g===kt)C[5].setComponents(i,o,d,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+g);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),aC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const g=A.geometry;g.boundingSphere===null&&g.computeBoundingSphere(),aC.copy(g.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(aC)}intersectsSprite(A){return aC.center.set(0,0,0),aC.radius=.7071067811865476,aC.applyMatrix4(A.matrixWorld),this.intersectsSphere(aC)}intersectsSphere(A){const g=this.planes,C=A.center,e=-A.radius;for(let t=0;t<6;t++)if(g[t].distanceToPoint(C)<e)return!1;return!0}intersectsBox(A){const g=this.planes;for(let C=0;C<6;C++){const e=g[C];if(ht.x=e.normal.x>0?A.max.x:A.min.x,ht.y=e.normal.y>0?A.max.y:A.min.y,ht.z=e.normal.z>0?A.max.z:A.min.z,e.distanceToPoint(ht)<0)return!1}return!0}containsPoint(A){const g=this.planes;for(let C=0;C<6;C++)if(g[C].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vn(){let I=null,A=!1,g=null,C=null;function e(t,B){g(t,B),C=I.requestAnimationFrame(e)}return{start:function(){A!==!0&&g!==null&&(C=I.requestAnimationFrame(e),A=!0)},stop:function(){I.cancelAnimationFrame(C),A=!1},setAnimationLoop:function(t){g=t},setContext:function(t){I=t}}}function ra(I,A){const g=A.isWebGL2,C=new WeakMap;function e(E,n){const o=E.array,s=E.usage,h=I.createBuffer();I.bindBuffer(n,h),I.bufferData(n,o,s),E.onUploadCallback();let D;if(o instanceof Float32Array)D=I.FLOAT;else if(o instanceof Uint16Array)if(E.isFloat16BufferAttribute)if(g)D=I.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else D=I.UNSIGNED_SHORT;else if(o instanceof Int16Array)D=I.SHORT;else if(o instanceof Uint32Array)D=I.UNSIGNED_INT;else if(o instanceof Int32Array)D=I.INT;else if(o instanceof Int8Array)D=I.BYTE;else if(o instanceof Uint8Array)D=I.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)D=I.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:h,type:D,bytesPerElement:o.BYTES_PER_ELEMENT,version:E.version}}function t(E,n,o){const s=n.array,h=n.updateRange;I.bindBuffer(o,E),h.count===-1?I.bufferSubData(o,0,s):(g?I.bufferSubData(o,h.offset*s.BYTES_PER_ELEMENT,s,h.offset,h.count):I.bufferSubData(o,h.offset*s.BYTES_PER_ELEMENT,s.subarray(h.offset,h.offset+h.count)),h.count=-1),n.onUploadCallback()}function B(E){return E.isInterleavedBufferAttribute&&(E=E.data),C.get(E)}function i(E){E.isInterleavedBufferAttribute&&(E=E.data);const n=C.get(E);n&&(I.deleteBuffer(n.buffer),C.delete(E))}function Q(E,n){if(E.isGLBufferAttribute){const s=C.get(E);(!s||s.version<E.version)&&C.set(E,{buffer:E.buffer,type:E.type,bytesPerElement:E.elementSize,version:E.version});return}E.isInterleavedBufferAttribute&&(E=E.data);const o=C.get(E);o===void 0?C.set(E,e(E,n)):o.version<E.version&&(t(o.buffer,E,n),o.version=E.version)}return{get:B,remove:i,update:Q}}class ti extends FI{constructor(A=1,g=1,C=1,e=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:g,widthSegments:C,heightSegments:e};const t=A/2,B=g/2,i=Math.floor(C),Q=Math.floor(e),E=i+1,n=Q+1,o=A/i,s=g/Q,h=[],D=[],d=[],a=[];for(let r=0;r<n;r++){const p=r*s-B;for(let y=0;y<E;y++){const S=y*o-t;D.push(S,-p,0),d.push(0,0,1),a.push(y/i),a.push(1-r/Q)}}for(let r=0;r<Q;r++)for(let p=0;p<i;p++){const y=p+E*r,S=p+E*(r+1),N=p+1+E*(r+1),m=p+1+E*r;h.push(y,S,m),h.push(S,N,m)}this.setIndex(h),this.setAttribute("position",new PI(D,3)),this.setAttribute("normal",new PI(d,3)),this.setAttribute("uv",new PI(a,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new ti(A.width,A.height,A.widthSegments,A.heightSegments)}}var aa=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ca=`#ifdef USE_ALPHAHASH
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
#endif`,ha=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,la=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Da=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,da=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wa=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fa=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ua=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ya=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ma=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sa=`#ifdef USE_IRIDESCENCE
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
#endif`,pa=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ra=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,La=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fa=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Na=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ua=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ka=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ga=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ma=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ka=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Ja=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Ha=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xa=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,va=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ya=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ta=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ba="gl_FragColor = linearToOutputTexel( gl_FragColor );",qa=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_a=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pa=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Oa=`#ifdef USE_ENVMAP
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
#endif`,Va=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wa=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,za=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Za=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xa=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ja=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$a=`#ifdef USE_GRADIENTMAP
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
}`,Ac=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ic=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ec=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,tc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Bc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ic=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ec=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,oc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ac=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dc=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,wc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uc=`#if defined( USE_POINTS_UV )
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
#endif`,yc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Rc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Fc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Nc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mc=`#ifdef USE_NORMALMAP
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
#endif`,Kc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_c=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Zc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,$c=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ah=`#ifdef USE_SKINNING
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
#endif`,gh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ih=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ch=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eh=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,th=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ih=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ah=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Dh=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,wh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yh=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sh=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,ph=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Rh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Lh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Nh=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Uh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,mh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Kh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Jh=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hh=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,xh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vh=`uniform float size;
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
}`,Yh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Th=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,bh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,_h=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,XA={alphahash_fragment:aa,alphahash_pars_fragment:ca,alphamap_fragment:ha,alphamap_pars_fragment:la,alphatest_fragment:Da,alphatest_pars_fragment:da,aomap_fragment:wa,aomap_pars_fragment:fa,begin_vertex:ua,beginnormal_vertex:ya,bsdfs:Ma,iridescence_fragment:Sa,bumpmap_pars_fragment:pa,clipping_planes_fragment:Ra,clipping_planes_pars_fragment:La,clipping_planes_pars_vertex:Fa,clipping_planes_vertex:Na,color_fragment:Ua,color_pars_fragment:ka,color_pars_vertex:Ga,color_vertex:ma,common:Ka,cube_uv_reflection_fragment:Ja,defaultnormal_vertex:Ha,displacementmap_pars_vertex:xa,displacementmap_vertex:va,emissivemap_fragment:Ya,emissivemap_pars_fragment:Ta,colorspace_fragment:ba,colorspace_pars_fragment:qa,envmap_fragment:_a,envmap_common_pars_fragment:Pa,envmap_pars_fragment:Oa,envmap_pars_vertex:Va,envmap_physical_pars_fragment:tc,envmap_vertex:Wa,fog_vertex:za,fog_pars_vertex:Za,fog_fragment:Xa,fog_pars_fragment:ja,gradientmap_pars_fragment:$a,lightmap_fragment:Ac,lightmap_pars_fragment:gc,lights_lambert_fragment:Ic,lights_lambert_pars_fragment:Cc,lights_pars_begin:ec,lights_toon_fragment:Bc,lights_toon_pars_fragment:ic,lights_phong_fragment:Qc,lights_phong_pars_fragment:Ec,lights_physical_fragment:nc,lights_physical_pars_fragment:oc,lights_fragment_begin:sc,lights_fragment_maps:rc,lights_fragment_end:ac,logdepthbuf_fragment:cc,logdepthbuf_pars_fragment:hc,logdepthbuf_pars_vertex:lc,logdepthbuf_vertex:Dc,map_fragment:dc,map_pars_fragment:wc,map_particle_fragment:fc,map_particle_pars_fragment:uc,metalnessmap_fragment:yc,metalnessmap_pars_fragment:Mc,morphcolor_vertex:Sc,morphnormal_vertex:pc,morphtarget_pars_vertex:Rc,morphtarget_vertex:Lc,normal_fragment_begin:Fc,normal_fragment_maps:Nc,normal_pars_fragment:Uc,normal_pars_vertex:kc,normal_vertex:Gc,normalmap_pars_fragment:mc,clearcoat_normal_fragment_begin:Kc,clearcoat_normal_fragment_maps:Jc,clearcoat_pars_fragment:Hc,iridescence_pars_fragment:xc,opaque_fragment:vc,packing:Yc,premultiplied_alpha_fragment:Tc,project_vertex:bc,dithering_fragment:qc,dithering_pars_fragment:_c,roughnessmap_fragment:Pc,roughnessmap_pars_fragment:Oc,shadowmap_pars_fragment:Vc,shadowmap_pars_vertex:Wc,shadowmap_vertex:zc,shadowmask_pars_fragment:Zc,skinbase_vertex:Xc,skinning_pars_vertex:jc,skinning_vertex:$c,skinnormal_vertex:Ah,specularmap_fragment:gh,specularmap_pars_fragment:Ih,tonemapping_fragment:Ch,tonemapping_pars_fragment:eh,transmission_fragment:th,transmission_pars_fragment:Bh,uv_pars_fragment:ih,uv_pars_vertex:Qh,uv_vertex:Eh,worldpos_vertex:nh,background_vert:oh,background_frag:sh,backgroundCube_vert:rh,backgroundCube_frag:ah,cube_vert:ch,cube_frag:hh,depth_vert:lh,depth_frag:Dh,distanceRGBA_vert:dh,distanceRGBA_frag:wh,equirect_vert:fh,equirect_frag:uh,linedashed_vert:yh,linedashed_frag:Mh,meshbasic_vert:Sh,meshbasic_frag:ph,meshlambert_vert:Rh,meshlambert_frag:Lh,meshmatcap_vert:Fh,meshmatcap_frag:Nh,meshnormal_vert:Uh,meshnormal_frag:kh,meshphong_vert:Gh,meshphong_frag:mh,meshphysical_vert:Kh,meshphysical_frag:Jh,meshtoon_vert:Hh,meshtoon_frag:xh,points_vert:vh,points_frag:Yh,shadow_vert:Th,shadow_frag:bh,sprite_vert:qh,sprite_frag:_h},hA={common:{diffuse:{value:new zA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ag},alphaMap:{value:null},alphaMapTransform:{value:new Ag},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ag}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ag}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ag}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ag},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ag},normalScale:{value:new Bg(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ag},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ag}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ag}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ag}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ag},alphaTest:{value:0},uvTransform:{value:new Ag}},sprite:{diffuse:{value:new zA(16777215)},opacity:{value:1},center:{value:new Bg(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ag},alphaMap:{value:null},alphaMapTransform:{value:new Ag},alphaTest:{value:0}}},yI={basic:{uniforms:Wg([hA.common,hA.specularmap,hA.envmap,hA.aomap,hA.lightmap,hA.fog]),vertexShader:XA.meshbasic_vert,fragmentShader:XA.meshbasic_frag},lambert:{uniforms:Wg([hA.common,hA.specularmap,hA.envmap,hA.aomap,hA.lightmap,hA.emissivemap,hA.bumpmap,hA.normalmap,hA.displacementmap,hA.fog,hA.lights,{emissive:{value:new zA(0)}}]),vertexShader:XA.meshlambert_vert,fragmentShader:XA.meshlambert_frag},phong:{uniforms:Wg([hA.common,hA.specularmap,hA.envmap,hA.aomap,hA.lightmap,hA.emissivemap,hA.bumpmap,hA.normalmap,hA.displacementmap,hA.fog,hA.lights,{emissive:{value:new zA(0)},specular:{value:new zA(1118481)},shininess:{value:30}}]),vertexShader:XA.meshphong_vert,fragmentShader:XA.meshphong_frag},standard:{uniforms:Wg([hA.common,hA.envmap,hA.aomap,hA.lightmap,hA.emissivemap,hA.bumpmap,hA.normalmap,hA.displacementmap,hA.roughnessmap,hA.metalnessmap,hA.fog,hA.lights,{emissive:{value:new zA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:XA.meshphysical_vert,fragmentShader:XA.meshphysical_frag},toon:{uniforms:Wg([hA.common,hA.aomap,hA.lightmap,hA.emissivemap,hA.bumpmap,hA.normalmap,hA.displacementmap,hA.gradientmap,hA.fog,hA.lights,{emissive:{value:new zA(0)}}]),vertexShader:XA.meshtoon_vert,fragmentShader:XA.meshtoon_frag},matcap:{uniforms:Wg([hA.common,hA.bumpmap,hA.normalmap,hA.displacementmap,hA.fog,{matcap:{value:null}}]),vertexShader:XA.meshmatcap_vert,fragmentShader:XA.meshmatcap_frag},points:{uniforms:Wg([hA.points,hA.fog]),vertexShader:XA.points_vert,fragmentShader:XA.points_frag},dashed:{uniforms:Wg([hA.common,hA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:XA.linedashed_vert,fragmentShader:XA.linedashed_frag},depth:{uniforms:Wg([hA.common,hA.displacementmap]),vertexShader:XA.depth_vert,fragmentShader:XA.depth_frag},normal:{uniforms:Wg([hA.common,hA.bumpmap,hA.normalmap,hA.displacementmap,{opacity:{value:1}}]),vertexShader:XA.meshnormal_vert,fragmentShader:XA.meshnormal_frag},sprite:{uniforms:Wg([hA.sprite,hA.fog]),vertexShader:XA.sprite_vert,fragmentShader:XA.sprite_frag},background:{uniforms:{uvTransform:{value:new Ag},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:XA.background_vert,fragmentShader:XA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:XA.backgroundCube_vert,fragmentShader:XA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:XA.cube_vert,fragmentShader:XA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:XA.equirect_vert,fragmentShader:XA.equirect_frag},distanceRGBA:{uniforms:Wg([hA.common,hA.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:XA.distanceRGBA_vert,fragmentShader:XA.distanceRGBA_frag},shadow:{uniforms:Wg([hA.lights,hA.fog,{color:{value:new zA(0)},opacity:{value:1}}]),vertexShader:XA.shadow_vert,fragmentShader:XA.shadow_frag}};yI.physical={uniforms:Wg([yI.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ag},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ag},clearcoatNormalScale:{value:new Bg(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ag},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ag},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ag},sheen:{value:0},sheenColor:{value:new zA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ag},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ag},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ag},transmissionSamplerSize:{value:new Bg},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ag},attenuationDistance:{value:0},attenuationColor:{value:new zA(0)},specularColor:{value:new zA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ag},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ag},anisotropyVector:{value:new Bg},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ag}}]),vertexShader:XA.meshphysical_vert,fragmentShader:XA.meshphysical_frag};const lt={r:0,b:0,g:0};function Ph(I,A,g,C,e,t,B){const i=new zA(0);let Q=t===!0?0:1,E,n,o=null,s=0,h=null;function D(a,r){let p=!1,y=r.isScene===!0?r.background:null;switch(y&&y.isTexture&&(y=(r.backgroundBlurriness>0?g:A).get(y)),y===null?d(i,Q):y&&y.isColor&&(d(y,1),p=!0),I.xr.getEnvironmentBlendMode()){case"opaque":p=!0;break;case"additive":C.buffers.color.setClear(0,0,0,1,B),p=!0;break;case"alpha-blend":C.buffers.color.setClear(0,0,0,0,B),p=!0;break}(I.autoClear||p)&&I.clear(I.autoClearColor,I.autoClearDepth,I.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ht)?(n===void 0&&(n=new sI(new Oe(1,1,1),new LC({name:"BackgroundCubeMaterial",uniforms:re(yI.backgroundCube.uniforms),vertexShader:yI.backgroundCube.vertexShader,fragmentShader:yI.backgroundCube.fragmentShader,side:AI,depthTest:!1,depthWrite:!1,fog:!1})),n.geometry.deleteAttribute("normal"),n.geometry.deleteAttribute("uv"),n.onBeforeRender=function(m,k,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(n.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),e.update(n)),n.material.uniforms.envMap.value=y,n.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,n.material.uniforms.backgroundBlurriness.value=r.backgroundBlurriness,n.material.uniforms.backgroundIntensity.value=r.backgroundIntensity,n.material.toneMapped=y.colorSpace!==PA,(o!==y||s!==y.version||h!==I.toneMapping)&&(n.material.needsUpdate=!0,o=y,s=y.version,h=I.toneMapping),n.layers.enableAll(),a.unshift(n,n.geometry,n.material,0,0,null)):y&&y.isTexture&&(E===void 0&&(E=new sI(new ti(2,2),new LC({name:"BackgroundMaterial",uniforms:re(yI.background.uniforms),vertexShader:yI.background.vertexShader,fragmentShader:yI.background.fragmentShader,side:OI,depthTest:!1,depthWrite:!1,fog:!1})),E.geometry.deleteAttribute("normal"),Object.defineProperty(E.material,"map",{get:function(){return this.uniforms.t2D.value}}),e.update(E)),E.material.uniforms.t2D.value=y,E.material.uniforms.backgroundIntensity.value=r.backgroundIntensity,E.material.toneMapped=y.colorSpace!==PA,y.matrixAutoUpdate===!0&&y.updateMatrix(),E.material.uniforms.uvTransform.value.copy(y.matrix),(o!==y||s!==y.version||h!==I.toneMapping)&&(E.material.needsUpdate=!0,o=y,s=y.version,h=I.toneMapping),E.layers.enableAll(),a.unshift(E,E.geometry,E.material,0,0,null))}function d(a,r){a.getRGB(lt,Jn(I)),C.buffers.color.setClear(lt.r,lt.g,lt.b,r,B)}return{getClearColor:function(){return i},setClearColor:function(a,r=1){i.set(a),Q=r,d(i,Q)},getClearAlpha:function(){return Q},setClearAlpha:function(a){Q=a,d(i,Q)},render:D}}function Oh(I,A,g,C){const e=I.getParameter(I.MAX_VERTEX_ATTRIBS),t=C.isWebGL2?null:A.get("OES_vertex_array_object"),B=C.isWebGL2||t!==null,i={},Q=a(null);let E=Q,n=!1;function o(v,j,$,_,W){let BA=!1;if(B){const gA=d(_,$,j);E!==gA&&(E=gA,h(E.object)),BA=r(v,_,$,W),BA&&p(v,_,$,W)}else{const gA=j.wireframe===!0;(E.geometry!==_.id||E.program!==$.id||E.wireframe!==gA)&&(E.geometry=_.id,E.program=$.id,E.wireframe=gA,BA=!0)}W!==null&&g.update(W,I.ELEMENT_ARRAY_BUFFER),(BA||n)&&(n=!1,P(v,j,$,_),W!==null&&I.bindBuffer(I.ELEMENT_ARRAY_BUFFER,g.get(W).buffer))}function s(){return C.isWebGL2?I.createVertexArray():t.createVertexArrayOES()}function h(v){return C.isWebGL2?I.bindVertexArray(v):t.bindVertexArrayOES(v)}function D(v){return C.isWebGL2?I.deleteVertexArray(v):t.deleteVertexArrayOES(v)}function d(v,j,$){const _=$.wireframe===!0;let W=i[v.id];W===void 0&&(W={},i[v.id]=W);let BA=W[j.id];BA===void 0&&(BA={},W[j.id]=BA);let gA=BA[_];return gA===void 0&&(gA=a(s()),BA[_]=gA),gA}function a(v){const j=[],$=[],_=[];for(let W=0;W<e;W++)j[W]=0,$[W]=0,_[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:$,attributeDivisors:_,object:v,attributes:{},index:null}}function r(v,j,$,_){const W=E.attributes,BA=j.attributes;let gA=0;const q=$.getAttributes();for(const Z in q)if(q[Z].location>=0){const EA=W[Z];let dA=BA[Z];if(dA===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(dA=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(dA=v.instanceColor)),EA===void 0||EA.attribute!==dA||dA&&EA.data!==dA.data)return!0;gA++}return E.attributesNum!==gA||E.index!==_}function p(v,j,$,_){const W={},BA=j.attributes;let gA=0;const q=$.getAttributes();for(const Z in q)if(q[Z].location>=0){let EA=BA[Z];EA===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(EA=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(EA=v.instanceColor));const dA={};dA.attribute=EA,EA&&EA.data&&(dA.data=EA.data),W[Z]=dA,gA++}E.attributes=W,E.attributesNum=gA,E.index=_}function y(){const v=E.newAttributes;for(let j=0,$=v.length;j<$;j++)v[j]=0}function S(v){N(v,0)}function N(v,j){const $=E.newAttributes,_=E.enabledAttributes,W=E.attributeDivisors;$[v]=1,_[v]===0&&(I.enableVertexAttribArray(v),_[v]=1),W[v]!==j&&((C.isWebGL2?I:A.get("ANGLE_instanced_arrays"))[C.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](v,j),W[v]=j)}function m(){const v=E.newAttributes,j=E.enabledAttributes;for(let $=0,_=j.length;$<_;$++)j[$]!==v[$]&&(I.disableVertexAttribArray($),j[$]=0)}function k(v,j,$,_,W,BA,gA){gA===!0?I.vertexAttribIPointer(v,j,$,W,BA):I.vertexAttribPointer(v,j,$,_,W,BA)}function P(v,j,$,_){if(C.isWebGL2===!1&&(v.isInstancedMesh||_.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;y();const W=_.attributes,BA=$.getAttributes(),gA=j.defaultAttributeValues;for(const q in BA){const Z=BA[q];if(Z.location>=0){let DA=W[q];if(DA===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(DA=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(DA=v.instanceColor)),DA!==void 0){const EA=DA.normalized,dA=DA.itemSize,UA=g.get(DA);if(UA===void 0)continue;const TA=UA.buffer,pA=UA.type,Ig=UA.bytesPerElement,mg=C.isWebGL2===!0&&(pA===I.INT||pA===I.UNSIGNED_INT||DA.gpuType===ln);if(DA.isInterleavedBufferAttribute){const OA=DA.data,H=OA.stride,ng=DA.offset;if(OA.isInstancedInterleavedBuffer){for(let wA=0;wA<Z.locationSize;wA++)N(Z.location+wA,OA.meshPerAttribute);v.isInstancedMesh!==!0&&_._maxInstanceCount===void 0&&(_._maxInstanceCount=OA.meshPerAttribute*OA.count)}else for(let wA=0;wA<Z.locationSize;wA++)S(Z.location+wA);I.bindBuffer(I.ARRAY_BUFFER,TA);for(let wA=0;wA<Z.locationSize;wA++)k(Z.location+wA,dA/Z.locationSize,pA,EA,H*Ig,(ng+dA/Z.locationSize*wA)*Ig,mg)}else{if(DA.isInstancedBufferAttribute){for(let OA=0;OA<Z.locationSize;OA++)N(Z.location+OA,DA.meshPerAttribute);v.isInstancedMesh!==!0&&_._maxInstanceCount===void 0&&(_._maxInstanceCount=DA.meshPerAttribute*DA.count)}else for(let OA=0;OA<Z.locationSize;OA++)S(Z.location+OA);I.bindBuffer(I.ARRAY_BUFFER,TA);for(let OA=0;OA<Z.locationSize;OA++)k(Z.location+OA,dA/Z.locationSize,pA,EA,dA*Ig,dA/Z.locationSize*OA*Ig,mg)}}else if(gA!==void 0){const EA=gA[q];if(EA!==void 0)switch(EA.length){case 2:I.vertexAttrib2fv(Z.location,EA);break;case 3:I.vertexAttrib3fv(Z.location,EA);break;case 4:I.vertexAttrib4fv(Z.location,EA);break;default:I.vertexAttrib1fv(Z.location,EA)}}}}m()}function u(){iA();for(const v in i){const j=i[v];for(const $ in j){const _=j[$];for(const W in _)D(_[W].object),delete _[W];delete j[$]}delete i[v]}}function F(v){if(i[v.id]===void 0)return;const j=i[v.id];for(const $ in j){const _=j[$];for(const W in _)D(_[W].object),delete _[W];delete j[$]}delete i[v.id]}function tA(v){for(const j in i){const $=i[j];if($[v.id]===void 0)continue;const _=$[v.id];for(const W in _)D(_[W].object),delete _[W];delete $[v.id]}}function iA(){Y(),n=!0,E!==Q&&(E=Q,h(E.object))}function Y(){Q.geometry=null,Q.program=null,Q.wireframe=!1}return{setup:o,reset:iA,resetDefaultState:Y,dispose:u,releaseStatesOfGeometry:F,releaseStatesOfProgram:tA,initAttributes:y,enableAttribute:S,disableUnusedAttributes:m}}function Vh(I,A,g,C){const e=C.isWebGL2;let t;function B(E){t=E}function i(E,n){I.drawArrays(t,E,n),g.update(n,t,1)}function Q(E,n,o){if(o===0)return;let s,h;if(e)s=I,h="drawArraysInstanced";else if(s=A.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",s===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}s[h](t,E,n,o),g.update(n,t,o)}this.setMode=B,this.render=i,this.renderInstances=Q}function Wh(I,A,g){let C;function e(){if(C!==void 0)return C;if(A.has("EXT_texture_filter_anisotropic")===!0){const k=A.get("EXT_texture_filter_anisotropic");C=I.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else C=0;return C}function t(k){if(k==="highp"){if(I.getShaderPrecisionFormat(I.VERTEX_SHADER,I.HIGH_FLOAT).precision>0&&I.getShaderPrecisionFormat(I.FRAGMENT_SHADER,I.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&I.getShaderPrecisionFormat(I.VERTEX_SHADER,I.MEDIUM_FLOAT).precision>0&&I.getShaderPrecisionFormat(I.FRAGMENT_SHADER,I.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const B=typeof WebGL2RenderingContext<"u"&&I.constructor.name==="WebGL2RenderingContext";let i=g.precision!==void 0?g.precision:"highp";const Q=t(i);Q!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",Q,"instead."),i=Q);const E=B||A.has("WEBGL_draw_buffers"),n=g.logarithmicDepthBuffer===!0,o=I.getParameter(I.MAX_TEXTURE_IMAGE_UNITS),s=I.getParameter(I.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=I.getParameter(I.MAX_TEXTURE_SIZE),D=I.getParameter(I.MAX_CUBE_MAP_TEXTURE_SIZE),d=I.getParameter(I.MAX_VERTEX_ATTRIBS),a=I.getParameter(I.MAX_VERTEX_UNIFORM_VECTORS),r=I.getParameter(I.MAX_VARYING_VECTORS),p=I.getParameter(I.MAX_FRAGMENT_UNIFORM_VECTORS),y=s>0,S=B||A.has("OES_texture_float"),N=y&&S,m=B?I.getParameter(I.MAX_SAMPLES):0;return{isWebGL2:B,drawBuffers:E,getMaxAnisotropy:e,getMaxPrecision:t,precision:i,logarithmicDepthBuffer:n,maxTextures:o,maxVertexTextures:s,maxTextureSize:h,maxCubemapSize:D,maxAttributes:d,maxVertexUniforms:a,maxVaryings:r,maxFragmentUniforms:p,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:N,maxSamples:m}}function zh(I){const A=this;let g=null,C=0,e=!1,t=!1;const B=new lC,i=new Ag,Q={value:null,needsUpdate:!1};this.uniform=Q,this.numPlanes=0,this.numIntersection=0,this.init=function(o,s){const h=o.length!==0||s||C!==0||e;return e=s,C=o.length,h},this.beginShadows=function(){t=!0,n(null)},this.endShadows=function(){t=!1},this.setGlobalState=function(o,s){g=n(o,s,0)},this.setState=function(o,s,h){const D=o.clippingPlanes,d=o.clipIntersection,a=o.clipShadows,r=I.get(o);if(!e||D===null||D.length===0||t&&!a)t?n(null):E();else{const p=t?0:C,y=p*4;let S=r.clippingState||null;Q.value=S,S=n(D,s,y,h);for(let N=0;N!==y;++N)S[N]=g[N];r.clippingState=S,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=p}};function E(){Q.value!==g&&(Q.value=g,Q.needsUpdate=C>0),A.numPlanes=C,A.numIntersection=0}function n(o,s,h,D){const d=o!==null?o.length:0;let a=null;if(d!==0){if(a=Q.value,D!==!0||a===null){const r=h+d*4,p=s.matrixWorldInverse;i.getNormalMatrix(p),(a===null||a.length<r)&&(a=new Float32Array(r));for(let y=0,S=h;y!==d;++y,S+=4)B.copy(o[y]).applyMatrix4(p,i),B.normal.toArray(a,S),a[S+3]=B.constant}Q.value=a,Q.needsUpdate=!0}return A.numPlanes=d,A.numIntersection=0,a}}function Zh(I){let A=new WeakMap;function g(B,i){return i===JB?B.mapping=ie:i===HB&&(B.mapping=Qe),B}function C(B){if(B&&B.isTexture&&B.isRenderTargetTexture===!1){const i=B.mapping;if(i===JB||i===HB)if(A.has(B)){const Q=A.get(B).texture;return g(Q,B.mapping)}else{const Q=B.image;if(Q&&Q.height>0){const E=new na(Q.height/2);return E.fromEquirectangularTexture(I,B),A.set(B,E),B.addEventListener("dispose",e),g(E.texture,B.mapping)}else return null}}return B}function e(B){const i=B.target;i.removeEventListener("dispose",e);const Q=A.get(i);Q!==void 0&&(A.delete(i),Q.dispose())}function t(){A=new WeakMap}return{get:C,dispose:t}}class Bi extends Hn{constructor(A=-1,g=1,C=1,e=-1,t=.1,B=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=g,this.top=C,this.bottom=e,this.near=t,this.far=B,this.updateProjectionMatrix()}copy(A,g){return super.copy(A,g),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,g,C,e,t,B){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=g,this.view.offsetX=C,this.view.offsetY=e,this.view.width=t,this.view.height=B,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),g=(this.top-this.bottom)/(2*this.zoom),C=(this.right+this.left)/2,e=(this.top+this.bottom)/2;let t=C-A,B=C+A,i=e+g,Q=e-g;if(this.view!==null&&this.view.enabled){const E=(this.right-this.left)/this.view.fullWidth/this.zoom,n=(this.top-this.bottom)/this.view.fullHeight/this.zoom;t+=E*this.view.offsetX,B=t+E*this.view.width,i-=n*this.view.offsetY,Q=i-n*this.view.height}this.projectionMatrix.makeOrthographic(t,B,i,Q,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const g=super.toJSON(A);return g.object.zoom=this.zoom,g.object.left=this.left,g.object.right=this.right,g.object.top=this.top,g.object.bottom=this.bottom,g.object.near=this.near,g.object.far=this.far,this.view!==null&&(g.object.view=Object.assign({},this.view)),g}}const Ae=4,GQ=[.125,.215,.35,.446,.526,.582],dC=20,uB=new Bi,mQ=new zA;let yB=null;const DC=(1+Math.sqrt(5))/2,ZC=1/DC,KQ=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,DC,ZC),new K(0,DC,-ZC),new K(ZC,0,DC),new K(-ZC,0,DC),new K(DC,ZC,0),new K(-DC,ZC,0)];class JQ{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,g=0,C=.1,e=100){yB=this._renderer.getRenderTarget(),this._setSize(256);const t=this._allocateTargets();return t.depthBuffer=!0,this._sceneToCubeUV(A,C,e,t),g>0&&this._blur(t,0,0,g),this._applyPMREM(t),this._cleanup(t),t}fromEquirectangular(A,g=null){return this._fromTexture(A,g)}fromCubemap(A,g=null){return this._fromTexture(A,g)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vQ(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xQ(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(yB),A.scissorTest=!1,Dt(A,0,0,A.width,A.height)}_fromTexture(A,g){A.mapping===ie||A.mapping===Qe?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),yB=this._renderer.getRenderTarget();const C=g||this._allocateTargets();return this._textureToCubeUV(A,C),this._applyPMREM(C),this._cleanup(C),C}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),g=4*this._cubeSize,C={magFilter:$g,minFilter:$g,generateMipmaps:!1,type:Ye,format:oI,colorSpace:RI,depthBuffer:!1},e=HQ(A,g,C);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==g){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=HQ(A,g,C);const{_lodMax:t}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xh(t)),this._blurMaterial=jh(t,A,g)}return e}_compileMaterial(A){const g=new sI(this._lodPlanes[0],A);this._renderer.compile(g,uB)}_sceneToCubeUV(A,g,C,e){const i=new zg(90,1,g,C),Q=[1,-1,1,1,1,1],E=[1,1,1,-1,-1,-1],n=this._renderer,o=n.autoClear,s=n.toneMapping;n.getClearColor(mQ),n.toneMapping=BC,n.autoClear=!1;const h=new wC({name:"PMREM.Background",side:AI,depthWrite:!1,depthTest:!1}),D=new sI(new Oe,h);let d=!1;const a=A.background;a?a.isColor&&(h.color.copy(a),A.background=null,d=!0):(h.color.copy(mQ),d=!0);for(let r=0;r<6;r++){const p=r%3;p===0?(i.up.set(0,Q[r],0),i.lookAt(E[r],0,0)):p===1?(i.up.set(0,0,Q[r]),i.lookAt(0,E[r],0)):(i.up.set(0,Q[r],0),i.lookAt(0,0,E[r]));const y=this._cubeSize;Dt(e,p*y,r>2?y:0,y,y),n.setRenderTarget(e),d&&n.render(D,i),n.render(A,i)}D.geometry.dispose(),D.material.dispose(),n.toneMapping=s,n.autoClear=o,A.background=a}_textureToCubeUV(A,g){const C=this._renderer,e=A.mapping===ie||A.mapping===Qe;e?(this._cubemapMaterial===null&&(this._cubemapMaterial=vQ()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xQ());const t=e?this._cubemapMaterial:this._equirectMaterial,B=new sI(this._lodPlanes[0],t),i=t.uniforms;i.envMap.value=A;const Q=this._cubeSize;Dt(g,0,0,3*Q,2*Q),C.setRenderTarget(g),C.render(B,uB)}_applyPMREM(A){const g=this._renderer,C=g.autoClear;g.autoClear=!1;for(let e=1;e<this._lodPlanes.length;e++){const t=Math.sqrt(this._sigmas[e]*this._sigmas[e]-this._sigmas[e-1]*this._sigmas[e-1]),B=KQ[(e-1)%KQ.length];this._blur(A,e-1,e,t,B)}g.autoClear=C}_blur(A,g,C,e,t){const B=this._pingPongRenderTarget;this._halfBlur(A,B,g,C,e,"latitudinal",t),this._halfBlur(B,A,C,C,e,"longitudinal",t)}_halfBlur(A,g,C,e,t,B,i){const Q=this._renderer,E=this._blurMaterial;B!=="latitudinal"&&B!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const n=3,o=new sI(this._lodPlanes[e],E),s=E.uniforms,h=this._sizeLods[C]-1,D=isFinite(t)?Math.PI/(2*h):2*Math.PI/(2*dC-1),d=t/D,a=isFinite(t)?1+Math.floor(n*d):dC;a>dC&&console.warn(`sigmaRadians, ${t}, is too large and will clip, as it requested ${a} samples when the maximum is set to ${dC}`);const r=[];let p=0;for(let k=0;k<dC;++k){const P=k/d,u=Math.exp(-P*P/2);r.push(u),k===0?p+=u:k<a&&(p+=2*u)}for(let k=0;k<r.length;k++)r[k]=r[k]/p;s.envMap.value=A.texture,s.samples.value=a,s.weights.value=r,s.latitudinal.value=B==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:y}=this;s.dTheta.value=D,s.mipInt.value=y-C;const S=this._sizeLods[e],N=3*S*(e>y-Ae?e-y+Ae:0),m=4*(this._cubeSize-S);Dt(g,N,m,3*S,2*S),Q.setRenderTarget(g),Q.render(o,uB)}}function Xh(I){const A=[],g=[],C=[];let e=I;const t=I-Ae+1+GQ.length;for(let B=0;B<t;B++){const i=Math.pow(2,e);g.push(i);let Q=1/i;B>I-Ae?Q=GQ[B-I+Ae-1]:B===0&&(Q=0),C.push(Q);const E=1/(i-2),n=-E,o=1+E,s=[n,n,o,n,o,o,n,n,o,o,n,o],h=6,D=6,d=3,a=2,r=1,p=new Float32Array(d*D*h),y=new Float32Array(a*D*h),S=new Float32Array(r*D*h);for(let m=0;m<h;m++){const k=m%3*2/3-1,P=m>2?0:-1,u=[k,P,0,k+2/3,P,0,k+2/3,P+1,0,k,P,0,k+2/3,P+1,0,k,P+1,0];p.set(u,d*D*m),y.set(s,a*D*m);const F=[m,m,m,m,m,m];S.set(F,r*D*m)}const N=new FI;N.setAttribute("position",new Zg(p,d)),N.setAttribute("uv",new Zg(y,a)),N.setAttribute("faceIndex",new Zg(S,r)),A.push(N),e>Ae&&e--}return{lodPlanes:A,sizeLods:g,sigmas:C}}function HQ(I,A,g){const C=new RC(I,A,g);return C.texture.mapping=Ht,C.texture.name="PMREM.cubeUv",C.scissorTest=!0,C}function Dt(I,A,g,C,e){I.viewport.set(A,g,C,e),I.scissor.set(A,g,C,e)}function jh(I,A,g){const C=new Float32Array(dC),e=new K(0,1,0);return new LC({name:"SphericalGaussianBlur",defines:{n:dC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/g,CUBEUV_MAX_MIP:`${I}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:C},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:e}},vertexShader:ii(),fragmentShader:`

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
		`,blending:tC,depthTest:!1,depthWrite:!1})}function xQ(){return new LC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ii(),fragmentShader:`

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
		`,blending:tC,depthTest:!1,depthWrite:!1})}function vQ(){return new LC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ii(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tC,depthTest:!1,depthWrite:!1})}function ii(){return`

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
	`}function $h(I){let A=new WeakMap,g=null;function C(i){if(i&&i.isTexture){const Q=i.mapping,E=Q===JB||Q===HB,n=Q===ie||Q===Qe;if(E||n)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let o=A.get(i);return g===null&&(g=new JQ(I)),o=E?g.fromEquirectangular(i,o):g.fromCubemap(i,o),A.set(i,o),o.texture}else{if(A.has(i))return A.get(i).texture;{const o=i.image;if(E&&o&&o.height>0||n&&o&&e(o)){g===null&&(g=new JQ(I));const s=E?g.fromEquirectangular(i):g.fromCubemap(i);return A.set(i,s),i.addEventListener("dispose",t),s.texture}else return null}}}return i}function e(i){let Q=0;const E=6;for(let n=0;n<E;n++)i[n]!==void 0&&Q++;return Q===E}function t(i){const Q=i.target;Q.removeEventListener("dispose",t);const E=A.get(Q);E!==void 0&&(A.delete(Q),E.dispose())}function B(){A=new WeakMap,g!==null&&(g.dispose(),g=null)}return{get:C,dispose:B}}function Al(I){const A={};function g(C){if(A[C]!==void 0)return A[C];let e;switch(C){case"WEBGL_depth_texture":e=I.getExtension("WEBGL_depth_texture")||I.getExtension("MOZ_WEBGL_depth_texture")||I.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":e=I.getExtension("EXT_texture_filter_anisotropic")||I.getExtension("MOZ_EXT_texture_filter_anisotropic")||I.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":e=I.getExtension("WEBGL_compressed_texture_s3tc")||I.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||I.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":e=I.getExtension("WEBGL_compressed_texture_pvrtc")||I.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:e=I.getExtension(C)}return A[C]=e,e}return{has:function(C){return g(C)!==null},init:function(C){C.isWebGL2?g("EXT_color_buffer_float"):(g("WEBGL_depth_texture"),g("OES_texture_float"),g("OES_texture_half_float"),g("OES_texture_half_float_linear"),g("OES_standard_derivatives"),g("OES_element_index_uint"),g("OES_vertex_array_object"),g("ANGLE_instanced_arrays")),g("OES_texture_float_linear"),g("EXT_color_buffer_half_float"),g("WEBGL_multisampled_render_to_texture")},get:function(C){const e=g(C);return e===null&&console.warn("THREE.WebGLRenderer: "+C+" extension not supported."),e}}}function gl(I,A,g,C){const e={},t=new WeakMap;function B(o){const s=o.target;s.index!==null&&A.remove(s.index);for(const D in s.attributes)A.remove(s.attributes[D]);for(const D in s.morphAttributes){const d=s.morphAttributes[D];for(let a=0,r=d.length;a<r;a++)A.remove(d[a])}s.removeEventListener("dispose",B),delete e[s.id];const h=t.get(s);h&&(A.remove(h),t.delete(s)),C.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,g.memory.geometries--}function i(o,s){return e[s.id]===!0||(s.addEventListener("dispose",B),e[s.id]=!0,g.memory.geometries++),s}function Q(o){const s=o.attributes;for(const D in s)A.update(s[D],I.ARRAY_BUFFER);const h=o.morphAttributes;for(const D in h){const d=h[D];for(let a=0,r=d.length;a<r;a++)A.update(d[a],I.ARRAY_BUFFER)}}function E(o){const s=[],h=o.index,D=o.attributes.position;let d=0;if(h!==null){const p=h.array;d=h.version;for(let y=0,S=p.length;y<S;y+=3){const N=p[y+0],m=p[y+1],k=p[y+2];s.push(N,m,m,k,k,N)}}else if(D!==void 0){const p=D.array;d=D.version;for(let y=0,S=p.length/3-1;y<S;y+=3){const N=y+0,m=y+1,k=y+2;s.push(N,m,m,k,k,N)}}else return;const a=new(Ln(s)?Kn:mn)(s,1);a.version=d;const r=t.get(o);r&&A.remove(r),t.set(o,a)}function n(o){const s=t.get(o);if(s){const h=o.index;h!==null&&s.version<h.version&&E(o)}else E(o);return t.get(o)}return{get:i,update:Q,getWireframeAttribute:n}}function Il(I,A,g,C){const e=C.isWebGL2;let t;function B(s){t=s}let i,Q;function E(s){i=s.type,Q=s.bytesPerElement}function n(s,h){I.drawElements(t,h,i,s*Q),g.update(h,t,1)}function o(s,h,D){if(D===0)return;let d,a;if(e)d=I,a="drawElementsInstanced";else if(d=A.get("ANGLE_instanced_arrays"),a="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[a](t,h,i,s*Q,D),g.update(h,t,D)}this.setMode=B,this.setIndex=E,this.render=n,this.renderInstances=o}function Cl(I){const A={geometries:0,textures:0},g={frame:0,calls:0,triangles:0,points:0,lines:0};function C(t,B,i){switch(g.calls++,B){case I.TRIANGLES:g.triangles+=i*(t/3);break;case I.LINES:g.lines+=i*(t/2);break;case I.LINE_STRIP:g.lines+=i*(t-1);break;case I.LINE_LOOP:g.lines+=i*t;break;case I.POINTS:g.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",B);break}}function e(){g.calls=0,g.triangles=0,g.points=0,g.lines=0}return{memory:A,render:g,programs:null,autoReset:!0,reset:e,update:C}}function el(I,A){return I[0]-A[0]}function tl(I,A){return Math.abs(A[1])-Math.abs(I[1])}function Bl(I,A,g){const C={},e=new Float32Array(8),t=new WeakMap,B=new wg,i=[];for(let E=0;E<8;E++)i[E]=[E,0];function Q(E,n,o){const s=E.morphTargetInfluences;if(A.isWebGL2===!0){const D=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,d=D!==void 0?D.length:0;let a=t.get(n);if(a===void 0||a.count!==d){let j=function(){Y.dispose(),t.delete(n),n.removeEventListener("dispose",j)};var h=j;a!==void 0&&a.texture.dispose();const y=n.morphAttributes.position!==void 0,S=n.morphAttributes.normal!==void 0,N=n.morphAttributes.color!==void 0,m=n.morphAttributes.position||[],k=n.morphAttributes.normal||[],P=n.morphAttributes.color||[];let u=0;y===!0&&(u=1),S===!0&&(u=2),N===!0&&(u=3);let F=n.attributes.position.count*u,tA=1;F>A.maxTextureSize&&(tA=Math.ceil(F/A.maxTextureSize),F=A.maxTextureSize);const iA=new Float32Array(F*tA*4*d),Y=new Un(iA,F,tA,d);Y.type=qI,Y.needsUpdate=!0;const v=u*4;for(let $=0;$<d;$++){const _=m[$],W=k[$],BA=P[$],gA=F*tA*4*$;for(let q=0;q<_.count;q++){const Z=q*v;y===!0&&(B.fromBufferAttribute(_,q),iA[gA+Z+0]=B.x,iA[gA+Z+1]=B.y,iA[gA+Z+2]=B.z,iA[gA+Z+3]=0),S===!0&&(B.fromBufferAttribute(W,q),iA[gA+Z+4]=B.x,iA[gA+Z+5]=B.y,iA[gA+Z+6]=B.z,iA[gA+Z+7]=0),N===!0&&(B.fromBufferAttribute(BA,q),iA[gA+Z+8]=B.x,iA[gA+Z+9]=B.y,iA[gA+Z+10]=B.z,iA[gA+Z+11]=BA.itemSize===4?B.w:1)}}a={count:d,texture:Y,size:new Bg(F,tA)},t.set(n,a),n.addEventListener("dispose",j)}let r=0;for(let y=0;y<s.length;y++)r+=s[y];const p=n.morphTargetsRelative?1:1-r;o.getUniforms().setValue(I,"morphTargetBaseInfluence",p),o.getUniforms().setValue(I,"morphTargetInfluences",s),o.getUniforms().setValue(I,"morphTargetsTexture",a.texture,g),o.getUniforms().setValue(I,"morphTargetsTextureSize",a.size)}else{const D=s===void 0?0:s.length;let d=C[n.id];if(d===void 0||d.length!==D){d=[];for(let S=0;S<D;S++)d[S]=[S,0];C[n.id]=d}for(let S=0;S<D;S++){const N=d[S];N[0]=S,N[1]=s[S]}d.sort(tl);for(let S=0;S<8;S++)S<D&&d[S][1]?(i[S][0]=d[S][0],i[S][1]=d[S][1]):(i[S][0]=Number.MAX_SAFE_INTEGER,i[S][1]=0);i.sort(el);const a=n.morphAttributes.position,r=n.morphAttributes.normal;let p=0;for(let S=0;S<8;S++){const N=i[S],m=N[0],k=N[1];m!==Number.MAX_SAFE_INTEGER&&k?(a&&n.getAttribute("morphTarget"+S)!==a[m]&&n.setAttribute("morphTarget"+S,a[m]),r&&n.getAttribute("morphNormal"+S)!==r[m]&&n.setAttribute("morphNormal"+S,r[m]),e[S]=k,p+=k):(a&&n.hasAttribute("morphTarget"+S)===!0&&n.deleteAttribute("morphTarget"+S),r&&n.hasAttribute("morphNormal"+S)===!0&&n.deleteAttribute("morphNormal"+S),e[S]=0)}const y=n.morphTargetsRelative?1:1-p;o.getUniforms().setValue(I,"morphTargetBaseInfluence",y),o.getUniforms().setValue(I,"morphTargetInfluences",e)}}return{update:Q}}function il(I,A,g,C){let e=new WeakMap;function t(Q){const E=C.render.frame,n=Q.geometry,o=A.get(Q,n);if(e.get(o)!==E&&(A.update(o),e.set(o,E)),Q.isInstancedMesh&&(Q.hasEventListener("dispose",i)===!1&&Q.addEventListener("dispose",i),e.get(Q)!==E&&(g.update(Q.instanceMatrix,I.ARRAY_BUFFER),Q.instanceColor!==null&&g.update(Q.instanceColor,I.ARRAY_BUFFER),e.set(Q,E))),Q.isSkinnedMesh){const s=Q.skeleton;e.get(s)!==E&&(s.update(),e.set(s,E))}return o}function B(){e=new WeakMap}function i(Q){const E=Q.target;E.removeEventListener("dispose",i),g.remove(E.instanceMatrix),E.instanceColor!==null&&g.remove(E.instanceColor)}return{update:t,dispose:B}}const Yn=new Tg,Tn=new Un,bn=new Wr,qn=new xn,YQ=[],TQ=[],bQ=new Float32Array(16),qQ=new Float32Array(9),_Q=new Float32Array(4);function le(I,A,g){const C=I[0];if(C<=0||C>0)return I;const e=A*g;let t=YQ[e];if(t===void 0&&(t=new Float32Array(e),YQ[e]=t),A!==0){C.toArray(t,0);for(let B=1,i=0;B!==A;++B)i+=g,I[B].toArray(t,i)}return t}function kg(I,A){if(I.length!==A.length)return!1;for(let g=0,C=I.length;g<C;g++)if(I[g]!==A[g])return!1;return!0}function Gg(I,A){for(let g=0,C=A.length;g<C;g++)I[g]=A[g]}function Yt(I,A){let g=TQ[A];g===void 0&&(g=new Int32Array(A),TQ[A]=g);for(let C=0;C!==A;++C)g[C]=I.allocateTextureUnit();return g}function Ql(I,A){const g=this.cache;g[0]!==A&&(I.uniform1f(this.addr,A),g[0]=A)}function El(I,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y)&&(I.uniform2f(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(kg(g,A))return;I.uniform2fv(this.addr,A),Gg(g,A)}}function nl(I,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z)&&(I.uniform3f(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else if(A.r!==void 0)(g[0]!==A.r||g[1]!==A.g||g[2]!==A.b)&&(I.uniform3f(this.addr,A.r,A.g,A.b),g[0]=A.r,g[1]=A.g,g[2]=A.b);else{if(kg(g,A))return;I.uniform3fv(this.addr,A),Gg(g,A)}}function ol(I,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z||g[3]!==A.w)&&(I.uniform4f(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(kg(g,A))return;I.uniform4fv(this.addr,A),Gg(g,A)}}function sl(I,A){const g=this.cache,C=A.elements;if(C===void 0){if(kg(g,A))return;I.uniformMatrix2fv(this.addr,!1,A),Gg(g,A)}else{if(kg(g,C))return;_Q.set(C),I.uniformMatrix2fv(this.addr,!1,_Q),Gg(g,C)}}function rl(I,A){const g=this.cache,C=A.elements;if(C===void 0){if(kg(g,A))return;I.uniformMatrix3fv(this.addr,!1,A),Gg(g,A)}else{if(kg(g,C))return;qQ.set(C),I.uniformMatrix3fv(this.addr,!1,qQ),Gg(g,C)}}function al(I,A){const g=this.cache,C=A.elements;if(C===void 0){if(kg(g,A))return;I.uniformMatrix4fv(this.addr,!1,A),Gg(g,A)}else{if(kg(g,C))return;bQ.set(C),I.uniformMatrix4fv(this.addr,!1,bQ),Gg(g,C)}}function cl(I,A){const g=this.cache;g[0]!==A&&(I.uniform1i(this.addr,A),g[0]=A)}function hl(I,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y)&&(I.uniform2i(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(kg(g,A))return;I.uniform2iv(this.addr,A),Gg(g,A)}}function ll(I,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z)&&(I.uniform3i(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else{if(kg(g,A))return;I.uniform3iv(this.addr,A),Gg(g,A)}}function Dl(I,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z||g[3]!==A.w)&&(I.uniform4i(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(kg(g,A))return;I.uniform4iv(this.addr,A),Gg(g,A)}}function dl(I,A){const g=this.cache;g[0]!==A&&(I.uniform1ui(this.addr,A),g[0]=A)}function wl(I,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y)&&(I.uniform2ui(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(kg(g,A))return;I.uniform2uiv(this.addr,A),Gg(g,A)}}function fl(I,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z)&&(I.uniform3ui(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else{if(kg(g,A))return;I.uniform3uiv(this.addr,A),Gg(g,A)}}function ul(I,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z||g[3]!==A.w)&&(I.uniform4ui(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(kg(g,A))return;I.uniform4uiv(this.addr,A),Gg(g,A)}}function yl(I,A,g){const C=this.cache,e=g.allocateTextureUnit();C[0]!==e&&(I.uniform1i(this.addr,e),C[0]=e),g.setTexture2D(A||Yn,e)}function Ml(I,A,g){const C=this.cache,e=g.allocateTextureUnit();C[0]!==e&&(I.uniform1i(this.addr,e),C[0]=e),g.setTexture3D(A||bn,e)}function Sl(I,A,g){const C=this.cache,e=g.allocateTextureUnit();C[0]!==e&&(I.uniform1i(this.addr,e),C[0]=e),g.setTextureCube(A||qn,e)}function pl(I,A,g){const C=this.cache,e=g.allocateTextureUnit();C[0]!==e&&(I.uniform1i(this.addr,e),C[0]=e),g.setTexture2DArray(A||Tn,e)}function Rl(I){switch(I){case 5126:return Ql;case 35664:return El;case 35665:return nl;case 35666:return ol;case 35674:return sl;case 35675:return rl;case 35676:return al;case 5124:case 35670:return cl;case 35667:case 35671:return hl;case 35668:case 35672:return ll;case 35669:case 35673:return Dl;case 5125:return dl;case 36294:return wl;case 36295:return fl;case 36296:return ul;case 35678:case 36198:case 36298:case 36306:case 35682:return yl;case 35679:case 36299:case 36307:return Ml;case 35680:case 36300:case 36308:case 36293:return Sl;case 36289:case 36303:case 36311:case 36292:return pl}}function Ll(I,A){I.uniform1fv(this.addr,A)}function Fl(I,A){const g=le(A,this.size,2);I.uniform2fv(this.addr,g)}function Nl(I,A){const g=le(A,this.size,3);I.uniform3fv(this.addr,g)}function Ul(I,A){const g=le(A,this.size,4);I.uniform4fv(this.addr,g)}function kl(I,A){const g=le(A,this.size,4);I.uniformMatrix2fv(this.addr,!1,g)}function Gl(I,A){const g=le(A,this.size,9);I.uniformMatrix3fv(this.addr,!1,g)}function ml(I,A){const g=le(A,this.size,16);I.uniformMatrix4fv(this.addr,!1,g)}function Kl(I,A){I.uniform1iv(this.addr,A)}function Jl(I,A){I.uniform2iv(this.addr,A)}function Hl(I,A){I.uniform3iv(this.addr,A)}function xl(I,A){I.uniform4iv(this.addr,A)}function vl(I,A){I.uniform1uiv(this.addr,A)}function Yl(I,A){I.uniform2uiv(this.addr,A)}function Tl(I,A){I.uniform3uiv(this.addr,A)}function bl(I,A){I.uniform4uiv(this.addr,A)}function ql(I,A,g){const C=this.cache,e=A.length,t=Yt(g,e);kg(C,t)||(I.uniform1iv(this.addr,t),Gg(C,t));for(let B=0;B!==e;++B)g.setTexture2D(A[B]||Yn,t[B])}function _l(I,A,g){const C=this.cache,e=A.length,t=Yt(g,e);kg(C,t)||(I.uniform1iv(this.addr,t),Gg(C,t));for(let B=0;B!==e;++B)g.setTexture3D(A[B]||bn,t[B])}function Pl(I,A,g){const C=this.cache,e=A.length,t=Yt(g,e);kg(C,t)||(I.uniform1iv(this.addr,t),Gg(C,t));for(let B=0;B!==e;++B)g.setTextureCube(A[B]||qn,t[B])}function Ol(I,A,g){const C=this.cache,e=A.length,t=Yt(g,e);kg(C,t)||(I.uniform1iv(this.addr,t),Gg(C,t));for(let B=0;B!==e;++B)g.setTexture2DArray(A[B]||Tn,t[B])}function Vl(I){switch(I){case 5126:return Ll;case 35664:return Fl;case 35665:return Nl;case 35666:return Ul;case 35674:return kl;case 35675:return Gl;case 35676:return ml;case 5124:case 35670:return Kl;case 35667:case 35671:return Jl;case 35668:case 35672:return Hl;case 35669:case 35673:return xl;case 5125:return vl;case 36294:return Yl;case 36295:return Tl;case 36296:return bl;case 35678:case 36198:case 36298:case 36306:case 35682:return ql;case 35679:case 36299:case 36307:return _l;case 35680:case 36300:case 36308:case 36293:return Pl;case 36289:case 36303:case 36311:case 36292:return Ol}}class Wl{constructor(A,g,C){this.id=A,this.addr=C,this.cache=[],this.setValue=Rl(g.type)}}class zl{constructor(A,g,C){this.id=A,this.addr=C,this.cache=[],this.size=g.size,this.setValue=Vl(g.type)}}class Zl{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,g,C){const e=this.seq;for(let t=0,B=e.length;t!==B;++t){const i=e[t];i.setValue(A,g[i.id],C)}}}const MB=/(\w+)(\])?(\[|\.)?/g;function PQ(I,A){I.seq.push(A),I.map[A.id]=A}function Xl(I,A,g){const C=I.name,e=C.length;for(MB.lastIndex=0;;){const t=MB.exec(C),B=MB.lastIndex;let i=t[1];const Q=t[2]==="]",E=t[3];if(Q&&(i=i|0),E===void 0||E==="["&&B+2===e){PQ(g,E===void 0?new Wl(i,I,A):new zl(i,I,A));break}else{let o=g.map[i];o===void 0&&(o=new Zl(i),PQ(g,o)),g=o}}}class Ft{constructor(A,g){this.seq=[],this.map={};const C=A.getProgramParameter(g,A.ACTIVE_UNIFORMS);for(let e=0;e<C;++e){const t=A.getActiveUniform(g,e),B=A.getUniformLocation(g,t.name);Xl(t,B,this)}}setValue(A,g,C,e){const t=this.map[g];t!==void 0&&t.setValue(A,C,e)}setOptional(A,g,C){const e=g[C];e!==void 0&&this.setValue(A,C,e)}static upload(A,g,C,e){for(let t=0,B=g.length;t!==B;++t){const i=g[t],Q=C[i.id];Q.needsUpdate!==!1&&i.setValue(A,Q.value,e)}}static seqWithValue(A,g){const C=[];for(let e=0,t=A.length;e!==t;++e){const B=A[e];B.id in g&&C.push(B)}return C}}function OQ(I,A,g){const C=I.createShader(A);return I.shaderSource(C,g),I.compileShader(C),C}let jl=0;function $l(I,A){const g=I.split(`
`),C=[],e=Math.max(A-6,0),t=Math.min(A+6,g.length);for(let B=e;B<t;B++){const i=B+1;C.push(`${i===A?">":" "} ${i}: ${g[B]}`)}return C.join(`
`)}function AD(I){switch(I){case RI:return["Linear","( value )"];case PA:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",I),["Linear","( value )"]}}function VQ(I,A,g){const C=I.getShaderParameter(A,I.COMPILE_STATUS),e=I.getShaderInfoLog(A).trim();if(C&&e==="")return"";const t=/ERROR: 0:(\d+)/.exec(e);if(t){const B=parseInt(t[1]);return g.toUpperCase()+`

`+e+`

`+$l(I.getShaderSource(A),B)}else return e}function gD(I,A){const g=AD(A);return"vec4 "+I+"( vec4 value ) { return LinearTo"+g[0]+g[1]+"; }"}function ID(I,A){let g;switch(A){case js:g="Linear";break;case $s:g="Reinhard";break;case Ar:g="OptimizedCineon";break;case gr:g="ACESFilmic";break;case Ir:g="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),g="Linear"}return"vec3 "+I+"( vec3 color ) { return "+g+"ToneMapping( color ); }"}function CD(I){return[I.extensionDerivatives||I.envMapCubeUVHeight||I.bumpMap||I.normalMapTangentSpace||I.clearcoatNormalMap||I.flatShading||I.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(I.extensionFragDepth||I.logarithmicDepthBuffer)&&I.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",I.extensionDrawBuffers&&I.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(I.extensionShaderTextureLOD||I.envMap||I.transmission)&&I.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ke).join(`
`)}function eD(I){const A=[];for(const g in I){const C=I[g];C!==!1&&A.push("#define "+g+" "+C)}return A.join(`
`)}function tD(I,A){const g={},C=I.getProgramParameter(A,I.ACTIVE_ATTRIBUTES);for(let e=0;e<C;e++){const t=I.getActiveAttrib(A,e),B=t.name;let i=1;t.type===I.FLOAT_MAT2&&(i=2),t.type===I.FLOAT_MAT3&&(i=3),t.type===I.FLOAT_MAT4&&(i=4),g[B]={type:t.type,location:I.getAttribLocation(A,B),locationSize:i}}return g}function Ke(I){return I!==""}function WQ(I,A){const g=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return I.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,g).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function zQ(I,A){return I.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const BD=/^[ \t]*#include +<([\w\d./]+)>/gm;function qB(I){return I.replace(BD,QD)}const iD=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function QD(I,A){let g=XA[A];if(g===void 0){const C=iD.get(A);if(C!==void 0)g=XA[C],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,C);else throw new Error("Can not resolve #include <"+A+">")}return qB(g)}const ED=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ZQ(I){return I.replace(ED,nD)}function nD(I,A,g,C){let e="";for(let t=parseInt(A);t<parseInt(g);t++)e+=C.replace(/\[\s*i\s*\]/g,"[ "+t+" ]").replace(/UNROLLED_LOOP_INDEX/g,t);return e}function XQ(I){let A="precision "+I.precision+` float;
precision `+I.precision+" int;";return I.precision==="highp"?A+=`
#define HIGH_PRECISION`:I.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:I.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function oD(I){let A="SHADOWMAP_TYPE_BASIC";return I.shadowMapType===on?A="SHADOWMAP_TYPE_PCF":I.shadowMapType===Ns?A="SHADOWMAP_TYPE_PCF_SOFT":I.shadowMapType===bI&&(A="SHADOWMAP_TYPE_VSM"),A}function sD(I){let A="ENVMAP_TYPE_CUBE";if(I.envMap)switch(I.envMapMode){case ie:case Qe:A="ENVMAP_TYPE_CUBE";break;case Ht:A="ENVMAP_TYPE_CUBE_UV";break}return A}function rD(I){let A="ENVMAP_MODE_REFLECTION";if(I.envMap)switch(I.envMapMode){case Qe:A="ENVMAP_MODE_REFRACTION";break}return A}function aD(I){let A="ENVMAP_BLENDING_NONE";if(I.envMap)switch(I.combine){case an:A="ENVMAP_BLENDING_MULTIPLY";break;case Zs:A="ENVMAP_BLENDING_MIX";break;case Xs:A="ENVMAP_BLENDING_ADD";break}return A}function cD(I){const A=I.envMapCubeUVHeight;if(A===null)return null;const g=Math.log2(A)-2,C=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,g),7*16)),texelHeight:C,maxMip:g}}function hD(I,A,g,C){const e=I.getContext(),t=g.defines;let B=g.vertexShader,i=g.fragmentShader;const Q=oD(g),E=sD(g),n=rD(g),o=aD(g),s=cD(g),h=g.isWebGL2?"":CD(g),D=eD(t),d=e.createProgram();let a,r,p=g.glslVersion?"#version "+g.glslVersion+`
`:"";g.isRawShaderMaterial?(a=["#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,D].filter(Ke).join(`
`),a.length>0&&(a+=`
`),r=[h,"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,D].filter(Ke).join(`
`),r.length>0&&(r+=`
`)):(a=[XQ(g),"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,D,g.instancing?"#define USE_INSTANCING":"",g.instancingColor?"#define USE_INSTANCING_COLOR":"",g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+n:"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",g.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",g.displacementMap?"#define USE_DISPLACEMENTMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.anisotropyMap?"#define USE_ANISOTROPYMAP":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",g.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaHash?"#define USE_ALPHAHASH":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",g.mapUv?"#define MAP_UV "+g.mapUv:"",g.alphaMapUv?"#define ALPHAMAP_UV "+g.alphaMapUv:"",g.lightMapUv?"#define LIGHTMAP_UV "+g.lightMapUv:"",g.aoMapUv?"#define AOMAP_UV "+g.aoMapUv:"",g.emissiveMapUv?"#define EMISSIVEMAP_UV "+g.emissiveMapUv:"",g.bumpMapUv?"#define BUMPMAP_UV "+g.bumpMapUv:"",g.normalMapUv?"#define NORMALMAP_UV "+g.normalMapUv:"",g.displacementMapUv?"#define DISPLACEMENTMAP_UV "+g.displacementMapUv:"",g.metalnessMapUv?"#define METALNESSMAP_UV "+g.metalnessMapUv:"",g.roughnessMapUv?"#define ROUGHNESSMAP_UV "+g.roughnessMapUv:"",g.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+g.anisotropyMapUv:"",g.clearcoatMapUv?"#define CLEARCOATMAP_UV "+g.clearcoatMapUv:"",g.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+g.clearcoatNormalMapUv:"",g.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+g.clearcoatRoughnessMapUv:"",g.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+g.iridescenceMapUv:"",g.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+g.iridescenceThicknessMapUv:"",g.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+g.sheenColorMapUv:"",g.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+g.sheenRoughnessMapUv:"",g.specularMapUv?"#define SPECULARMAP_UV "+g.specularMapUv:"",g.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+g.specularColorMapUv:"",g.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+g.specularIntensityMapUv:"",g.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+g.transmissionMapUv:"",g.thicknessMapUv?"#define THICKNESSMAP_UV "+g.thicknessMapUv:"",g.vertexTangents&&g.flatShading===!1?"#define USE_TANGENT":"",g.vertexColors?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUv1s?"#define USE_UV1":"",g.vertexUv2s?"#define USE_UV2":"",g.vertexUv3s?"#define USE_UV3":"",g.pointsUvs?"#define USE_POINTS_UV":"",g.flatShading?"#define FLAT_SHADED":"",g.skinning?"#define USE_SKINNING":"",g.morphTargets?"#define USE_MORPHTARGETS":"",g.morphNormals&&g.flatShading===!1?"#define USE_MORPHNORMALS":"",g.morphColors&&g.isWebGL2?"#define USE_MORPHCOLORS":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+g.morphTextureStride:"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_COUNT "+g.morphTargetsCount:"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+Q:"",g.sizeAttenuation?"#define USE_SIZEATTENUATION":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ke).join(`
`),r=[h,XQ(g),"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,D,g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.matcap?"#define USE_MATCAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+E:"",g.envMap?"#define "+n:"",g.envMap?"#define "+o:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",g.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.anisotropy?"#define USE_ANISOTROPY":"",g.anisotropyMap?"#define USE_ANISOTROPYMAP":"",g.clearcoat?"#define USE_CLEARCOAT":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescence?"#define USE_IRIDESCENCE":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",g.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaTest?"#define USE_ALPHATEST":"",g.alphaHash?"#define USE_ALPHAHASH":"",g.sheen?"#define USE_SHEEN":"",g.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.vertexTangents&&g.flatShading===!1?"#define USE_TANGENT":"",g.vertexColors||g.instancingColor?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUv1s?"#define USE_UV1":"",g.vertexUv2s?"#define USE_UV2":"",g.vertexUv3s?"#define USE_UV3":"",g.pointsUvs?"#define USE_POINTS_UV":"",g.gradientMap?"#define USE_GRADIENTMAP":"",g.flatShading?"#define FLAT_SHADED":"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+Q:"",g.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",g.toneMapping!==BC?"#define TONE_MAPPING":"",g.toneMapping!==BC?XA.tonemapping_pars_fragment:"",g.toneMapping!==BC?ID("toneMapping",g.toneMapping):"",g.dithering?"#define DITHERING":"",g.opaque?"#define OPAQUE":"",XA.colorspace_pars_fragment,gD("linearToOutputTexel",g.outputColorSpace),g.useDepthPacking?"#define DEPTH_PACKING "+g.depthPacking:"",`
`].filter(Ke).join(`
`)),B=qB(B),B=WQ(B,g),B=zQ(B,g),i=qB(i),i=WQ(i,g),i=zQ(i,g),B=ZQ(B),i=ZQ(i),g.isWebGL2&&g.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,a=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+a,r=["#define varying in",g.glslVersion===hQ?"":"layout(location = 0) out highp vec4 pc_fragColor;",g.glslVersion===hQ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const y=p+a+B,S=p+r+i,N=OQ(e,e.VERTEX_SHADER,y),m=OQ(e,e.FRAGMENT_SHADER,S);if(e.attachShader(d,N),e.attachShader(d,m),g.index0AttributeName!==void 0?e.bindAttribLocation(d,0,g.index0AttributeName):g.morphTargets===!0&&e.bindAttribLocation(d,0,"position"),e.linkProgram(d),I.debug.checkShaderErrors){const u=e.getProgramInfoLog(d).trim(),F=e.getShaderInfoLog(N).trim(),tA=e.getShaderInfoLog(m).trim();let iA=!0,Y=!0;if(e.getProgramParameter(d,e.LINK_STATUS)===!1)if(iA=!1,typeof I.debug.onShaderError=="function")I.debug.onShaderError(e,d,N,m);else{const v=VQ(e,N,"vertex"),j=VQ(e,m,"fragment");console.error("THREE.WebGLProgram: Shader Error "+e.getError()+" - VALIDATE_STATUS "+e.getProgramParameter(d,e.VALIDATE_STATUS)+`

Program Info Log: `+u+`
`+v+`
`+j)}else u!==""?console.warn("THREE.WebGLProgram: Program Info Log:",u):(F===""||tA==="")&&(Y=!1);Y&&(this.diagnostics={runnable:iA,programLog:u,vertexShader:{log:F,prefix:a},fragmentShader:{log:tA,prefix:r}})}e.deleteShader(N),e.deleteShader(m);let k;this.getUniforms=function(){return k===void 0&&(k=new Ft(e,d)),k};let P;return this.getAttributes=function(){return P===void 0&&(P=tD(e,d)),P},this.destroy=function(){C.releaseStatesOfProgram(this),e.deleteProgram(d),this.program=void 0},this.type=g.shaderType,this.name=g.shaderName,this.id=jl++,this.cacheKey=A,this.usedTimes=1,this.program=d,this.vertexShader=N,this.fragmentShader=m,this}let lD=0;class DD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const g=A.vertexShader,C=A.fragmentShader,e=this._getShaderStage(g),t=this._getShaderStage(C),B=this._getShaderCacheForMaterial(A);return B.has(e)===!1&&(B.add(e),e.usedTimes++),B.has(t)===!1&&(B.add(t),t.usedTimes++),this}remove(A){const g=this.materialCache.get(A);for(const C of g)C.usedTimes--,C.usedTimes===0&&this.shaderCache.delete(C.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const g=this.materialCache;let C=g.get(A);return C===void 0&&(C=new Set,g.set(A,C)),C}_getShaderStage(A){const g=this.shaderCache;let C=g.get(A);return C===void 0&&(C=new dD(A),g.set(A,C)),C}}class dD{constructor(A){this.id=lD++,this.code=A,this.usedTimes=0}}function wD(I,A,g,C,e,t,B){const i=new kn,Q=new DD,E=[],n=e.isWebGL2,o=e.logarithmicDepthBuffer,s=e.vertexTextures;let h=e.precision;const D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(u){return u===0?"uv":`uv${u}`}function a(u,F,tA,iA,Y){const v=iA.fog,j=Y.geometry,$=u.isMeshStandardMaterial?iA.environment:null,_=(u.isMeshStandardMaterial?g:A).get(u.envMap||$),W=_&&_.mapping===Ht?_.image.height:null,BA=D[u.type];u.precision!==null&&(h=e.getMaxPrecision(u.precision),h!==u.precision&&console.warn("THREE.WebGLProgram.getParameters:",u.precision,"not supported, using",h,"instead."));const gA=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,q=gA!==void 0?gA.length:0;let Z=0;j.morphAttributes.position!==void 0&&(Z=1),j.morphAttributes.normal!==void 0&&(Z=2),j.morphAttributes.color!==void 0&&(Z=3);let DA,EA,dA,UA;if(BA){const cg=yI[BA];DA=cg.vertexShader,EA=cg.fragmentShader}else DA=u.vertexShader,EA=u.fragmentShader,Q.update(u),dA=Q.getVertexShaderID(u),UA=Q.getFragmentShaderID(u);const TA=I.getRenderTarget(),pA=Y.isInstancedMesh===!0,Ig=!!u.map,mg=!!u.matcap,OA=!!_,H=!!u.aoMap,ng=!!u.lightMap,wA=!!u.bumpMap,JA=!!u.normalMap,RA=!!u.displacementMap,ZA=!!u.emissiveMap,SA=!!u.metalnessMap,xA=!!u.roughnessMap,Qg=u.anisotropy>0,Ng=u.clearcoat>0,Lg=u.iridescence>0,R=u.sheen>0,w=u.transmission>0,T=Qg&&!!u.anisotropyMap,oA=Ng&&!!u.clearcoatMap,QA=Ng&&!!u.clearcoatNormalMap,nA=Ng&&!!u.clearcoatRoughnessMap,LA=Lg&&!!u.iridescenceMap,sA=Lg&&!!u.iridescenceThicknessMap,V=R&&!!u.sheenColorMap,mA=R&&!!u.sheenRoughnessMap,kA=!!u.specularMap,FA=!!u.specularColorMap,MA=!!u.specularIntensityMap,yA=w&&!!u.transmissionMap,GA=w&&!!u.thicknessMap,ig=!!u.gradientMap,G=!!u.alphaMap,cA=u.alphaTest>0,O=!!u.alphaHash,rA=!!u.extensions,lA=!!j.attributes.uv1,eg=!!j.attributes.uv2,lg=!!j.attributes.uv3;let Dg=BC;return u.toneMapped&&(TA===null||TA.isXRRenderTarget===!0)&&(Dg=I.toneMapping),{isWebGL2:n,shaderID:BA,shaderType:u.type,shaderName:u.name,vertexShader:DA,fragmentShader:EA,defines:u.defines,customVertexShaderID:dA,customFragmentShaderID:UA,isRawShaderMaterial:u.isRawShaderMaterial===!0,glslVersion:u.glslVersion,precision:h,instancing:pA,instancingColor:pA&&Y.instanceColor!==null,supportsVertexTextures:s,outputColorSpace:TA===null?I.outputColorSpace:TA.isXRRenderTarget===!0?TA.texture.colorSpace:RI,map:Ig,matcap:mg,envMap:OA,envMapMode:OA&&_.mapping,envMapCubeUVHeight:W,aoMap:H,lightMap:ng,bumpMap:wA,normalMap:JA,displacementMap:s&&RA,emissiveMap:ZA,normalMapObjectSpace:JA&&u.normalMapType===hr,normalMapTangentSpace:JA&&u.normalMapType===Sn,metalnessMap:SA,roughnessMap:xA,anisotropy:Qg,anisotropyMap:T,clearcoat:Ng,clearcoatMap:oA,clearcoatNormalMap:QA,clearcoatRoughnessMap:nA,iridescence:Lg,iridescenceMap:LA,iridescenceThicknessMap:sA,sheen:R,sheenColorMap:V,sheenRoughnessMap:mA,specularMap:kA,specularColorMap:FA,specularIntensityMap:MA,transmission:w,transmissionMap:yA,thicknessMap:GA,gradientMap:ig,opaque:u.transparent===!1&&u.blending===Ie,alphaMap:G,alphaTest:cA,alphaHash:O,combine:u.combine,mapUv:Ig&&d(u.map.channel),aoMapUv:H&&d(u.aoMap.channel),lightMapUv:ng&&d(u.lightMap.channel),bumpMapUv:wA&&d(u.bumpMap.channel),normalMapUv:JA&&d(u.normalMap.channel),displacementMapUv:RA&&d(u.displacementMap.channel),emissiveMapUv:ZA&&d(u.emissiveMap.channel),metalnessMapUv:SA&&d(u.metalnessMap.channel),roughnessMapUv:xA&&d(u.roughnessMap.channel),anisotropyMapUv:T&&d(u.anisotropyMap.channel),clearcoatMapUv:oA&&d(u.clearcoatMap.channel),clearcoatNormalMapUv:QA&&d(u.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nA&&d(u.clearcoatRoughnessMap.channel),iridescenceMapUv:LA&&d(u.iridescenceMap.channel),iridescenceThicknessMapUv:sA&&d(u.iridescenceThicknessMap.channel),sheenColorMapUv:V&&d(u.sheenColorMap.channel),sheenRoughnessMapUv:mA&&d(u.sheenRoughnessMap.channel),specularMapUv:kA&&d(u.specularMap.channel),specularColorMapUv:FA&&d(u.specularColorMap.channel),specularIntensityMapUv:MA&&d(u.specularIntensityMap.channel),transmissionMapUv:yA&&d(u.transmissionMap.channel),thicknessMapUv:GA&&d(u.thicknessMap.channel),alphaMapUv:G&&d(u.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(JA||Qg),vertexColors:u.vertexColors,vertexAlphas:u.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:lA,vertexUv2s:eg,vertexUv3s:lg,pointsUvs:Y.isPoints===!0&&!!j.attributes.uv&&(Ig||G),fog:!!v,useFog:u.fog===!0,fogExp2:v&&v.isFogExp2,flatShading:u.flatShading===!0,sizeAttenuation:u.sizeAttenuation===!0,logarithmicDepthBuffer:o,skinning:Y.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:Z,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numClippingPlanes:B.numPlanes,numClipIntersection:B.numIntersection,dithering:u.dithering,shadowMapEnabled:I.shadowMap.enabled&&tA.length>0,shadowMapType:I.shadowMap.type,toneMapping:Dg,useLegacyLights:I._useLegacyLights,premultipliedAlpha:u.premultipliedAlpha,doubleSided:u.side===MI,flipSided:u.side===AI,useDepthPacking:u.depthPacking>=0,depthPacking:u.depthPacking||0,index0AttributeName:u.index0AttributeName,extensionDerivatives:rA&&u.extensions.derivatives===!0,extensionFragDepth:rA&&u.extensions.fragDepth===!0,extensionDrawBuffers:rA&&u.extensions.drawBuffers===!0,extensionShaderTextureLOD:rA&&u.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:n||C.has("EXT_frag_depth"),rendererExtensionDrawBuffers:n||C.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:n||C.has("EXT_shader_texture_lod"),customProgramCacheKey:u.customProgramCacheKey()}}function r(u){const F=[];if(u.shaderID?F.push(u.shaderID):(F.push(u.customVertexShaderID),F.push(u.customFragmentShaderID)),u.defines!==void 0)for(const tA in u.defines)F.push(tA),F.push(u.defines[tA]);return u.isRawShaderMaterial===!1&&(p(F,u),y(F,u),F.push(I.outputColorSpace)),F.push(u.customProgramCacheKey),F.join()}function p(u,F){u.push(F.precision),u.push(F.outputColorSpace),u.push(F.envMapMode),u.push(F.envMapCubeUVHeight),u.push(F.mapUv),u.push(F.alphaMapUv),u.push(F.lightMapUv),u.push(F.aoMapUv),u.push(F.bumpMapUv),u.push(F.normalMapUv),u.push(F.displacementMapUv),u.push(F.emissiveMapUv),u.push(F.metalnessMapUv),u.push(F.roughnessMapUv),u.push(F.anisotropyMapUv),u.push(F.clearcoatMapUv),u.push(F.clearcoatNormalMapUv),u.push(F.clearcoatRoughnessMapUv),u.push(F.iridescenceMapUv),u.push(F.iridescenceThicknessMapUv),u.push(F.sheenColorMapUv),u.push(F.sheenRoughnessMapUv),u.push(F.specularMapUv),u.push(F.specularColorMapUv),u.push(F.specularIntensityMapUv),u.push(F.transmissionMapUv),u.push(F.thicknessMapUv),u.push(F.combine),u.push(F.fogExp2),u.push(F.sizeAttenuation),u.push(F.morphTargetsCount),u.push(F.morphAttributeCount),u.push(F.numDirLights),u.push(F.numPointLights),u.push(F.numSpotLights),u.push(F.numSpotLightMaps),u.push(F.numHemiLights),u.push(F.numRectAreaLights),u.push(F.numDirLightShadows),u.push(F.numPointLightShadows),u.push(F.numSpotLightShadows),u.push(F.numSpotLightShadowsWithMaps),u.push(F.shadowMapType),u.push(F.toneMapping),u.push(F.numClippingPlanes),u.push(F.numClipIntersection),u.push(F.depthPacking)}function y(u,F){i.disableAll(),F.isWebGL2&&i.enable(0),F.supportsVertexTextures&&i.enable(1),F.instancing&&i.enable(2),F.instancingColor&&i.enable(3),F.matcap&&i.enable(4),F.envMap&&i.enable(5),F.normalMapObjectSpace&&i.enable(6),F.normalMapTangentSpace&&i.enable(7),F.clearcoat&&i.enable(8),F.iridescence&&i.enable(9),F.alphaTest&&i.enable(10),F.vertexColors&&i.enable(11),F.vertexAlphas&&i.enable(12),F.vertexUv1s&&i.enable(13),F.vertexUv2s&&i.enable(14),F.vertexUv3s&&i.enable(15),F.vertexTangents&&i.enable(16),F.anisotropy&&i.enable(17),u.push(i.mask),i.disableAll(),F.fog&&i.enable(0),F.useFog&&i.enable(1),F.flatShading&&i.enable(2),F.logarithmicDepthBuffer&&i.enable(3),F.skinning&&i.enable(4),F.morphTargets&&i.enable(5),F.morphNormals&&i.enable(6),F.morphColors&&i.enable(7),F.premultipliedAlpha&&i.enable(8),F.shadowMapEnabled&&i.enable(9),F.useLegacyLights&&i.enable(10),F.doubleSided&&i.enable(11),F.flipSided&&i.enable(12),F.useDepthPacking&&i.enable(13),F.dithering&&i.enable(14),F.transmission&&i.enable(15),F.sheen&&i.enable(16),F.opaque&&i.enable(17),F.pointsUvs&&i.enable(18),u.push(i.mask)}function S(u){const F=D[u.type];let tA;if(F){const iA=yI[F];tA=Ba.clone(iA.uniforms)}else tA=u.uniforms;return tA}function N(u,F){let tA;for(let iA=0,Y=E.length;iA<Y;iA++){const v=E[iA];if(v.cacheKey===F){tA=v,++tA.usedTimes;break}}return tA===void 0&&(tA=new hD(I,F,u,t),E.push(tA)),tA}function m(u){if(--u.usedTimes===0){const F=E.indexOf(u);E[F]=E[E.length-1],E.pop(),u.destroy()}}function k(u){Q.remove(u)}function P(){Q.dispose()}return{getParameters:a,getProgramCacheKey:r,getUniforms:S,acquireProgram:N,releaseProgram:m,releaseShaderCache:k,programs:E,dispose:P}}function fD(){let I=new WeakMap;function A(t){let B=I.get(t);return B===void 0&&(B={},I.set(t,B)),B}function g(t){I.delete(t)}function C(t,B,i){I.get(t)[B]=i}function e(){I=new WeakMap}return{get:A,remove:g,update:C,dispose:e}}function uD(I,A){return I.groupOrder!==A.groupOrder?I.groupOrder-A.groupOrder:I.renderOrder!==A.renderOrder?I.renderOrder-A.renderOrder:I.material.id!==A.material.id?I.material.id-A.material.id:I.z!==A.z?I.z-A.z:I.id-A.id}function jQ(I,A){return I.groupOrder!==A.groupOrder?I.groupOrder-A.groupOrder:I.renderOrder!==A.renderOrder?I.renderOrder-A.renderOrder:I.z!==A.z?A.z-I.z:I.id-A.id}function $Q(){const I=[];let A=0;const g=[],C=[],e=[];function t(){A=0,g.length=0,C.length=0,e.length=0}function B(o,s,h,D,d,a){let r=I[A];return r===void 0?(r={id:o.id,object:o,geometry:s,material:h,groupOrder:D,renderOrder:o.renderOrder,z:d,group:a},I[A]=r):(r.id=o.id,r.object=o,r.geometry=s,r.material=h,r.groupOrder=D,r.renderOrder=o.renderOrder,r.z=d,r.group=a),A++,r}function i(o,s,h,D,d,a){const r=B(o,s,h,D,d,a);h.transmission>0?C.push(r):h.transparent===!0?e.push(r):g.push(r)}function Q(o,s,h,D,d,a){const r=B(o,s,h,D,d,a);h.transmission>0?C.unshift(r):h.transparent===!0?e.unshift(r):g.unshift(r)}function E(o,s){g.length>1&&g.sort(o||uD),C.length>1&&C.sort(s||jQ),e.length>1&&e.sort(s||jQ)}function n(){for(let o=A,s=I.length;o<s;o++){const h=I[o];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:g,transmissive:C,transparent:e,init:t,push:i,unshift:Q,finish:n,sort:E}}function yD(){let I=new WeakMap;function A(C,e){const t=I.get(C);let B;return t===void 0?(B=new $Q,I.set(C,[B])):e>=t.length?(B=new $Q,t.push(B)):B=t[e],B}function g(){I=new WeakMap}return{get:A,dispose:g}}function MD(){const I={};return{get:function(A){if(I[A.id]!==void 0)return I[A.id];let g;switch(A.type){case"DirectionalLight":g={direction:new K,color:new zA};break;case"SpotLight":g={position:new K,direction:new K,color:new zA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":g={position:new K,color:new zA,distance:0,decay:0};break;case"HemisphereLight":g={direction:new K,skyColor:new zA,groundColor:new zA};break;case"RectAreaLight":g={color:new zA,position:new K,halfWidth:new K,halfHeight:new K};break}return I[A.id]=g,g}}}function SD(){const I={};return{get:function(A){if(I[A.id]!==void 0)return I[A.id];let g;switch(A.type){case"DirectionalLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bg};break;case"SpotLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bg};break;case"PointLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bg,shadowCameraNear:1,shadowCameraFar:1e3};break}return I[A.id]=g,g}}}let pD=0;function RD(I,A){return(A.castShadow?2:0)-(I.castShadow?2:0)+(A.map?1:0)-(I.map?1:0)}function LD(I,A){const g=new MD,C=SD(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let n=0;n<9;n++)e.probe.push(new K);const t=new K,B=new gg,i=new gg;function Q(n,o){let s=0,h=0,D=0;for(let tA=0;tA<9;tA++)e.probe[tA].set(0,0,0);let d=0,a=0,r=0,p=0,y=0,S=0,N=0,m=0,k=0,P=0;n.sort(RD);const u=o===!0?Math.PI:1;for(let tA=0,iA=n.length;tA<iA;tA++){const Y=n[tA],v=Y.color,j=Y.intensity,$=Y.distance,_=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)s+=v.r*j*u,h+=v.g*j*u,D+=v.b*j*u;else if(Y.isLightProbe)for(let W=0;W<9;W++)e.probe[W].addScaledVector(Y.sh.coefficients[W],j);else if(Y.isDirectionalLight){const W=g.get(Y);if(W.color.copy(Y.color).multiplyScalar(Y.intensity*u),Y.castShadow){const BA=Y.shadow,gA=C.get(Y);gA.shadowBias=BA.bias,gA.shadowNormalBias=BA.normalBias,gA.shadowRadius=BA.radius,gA.shadowMapSize=BA.mapSize,e.directionalShadow[d]=gA,e.directionalShadowMap[d]=_,e.directionalShadowMatrix[d]=Y.shadow.matrix,S++}e.directional[d]=W,d++}else if(Y.isSpotLight){const W=g.get(Y);W.position.setFromMatrixPosition(Y.matrixWorld),W.color.copy(v).multiplyScalar(j*u),W.distance=$,W.coneCos=Math.cos(Y.angle),W.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),W.decay=Y.decay,e.spot[r]=W;const BA=Y.shadow;if(Y.map&&(e.spotLightMap[k]=Y.map,k++,BA.updateMatrices(Y),Y.castShadow&&P++),e.spotLightMatrix[r]=BA.matrix,Y.castShadow){const gA=C.get(Y);gA.shadowBias=BA.bias,gA.shadowNormalBias=BA.normalBias,gA.shadowRadius=BA.radius,gA.shadowMapSize=BA.mapSize,e.spotShadow[r]=gA,e.spotShadowMap[r]=_,m++}r++}else if(Y.isRectAreaLight){const W=g.get(Y);W.color.copy(v).multiplyScalar(j),W.halfWidth.set(Y.width*.5,0,0),W.halfHeight.set(0,Y.height*.5,0),e.rectArea[p]=W,p++}else if(Y.isPointLight){const W=g.get(Y);if(W.color.copy(Y.color).multiplyScalar(Y.intensity*u),W.distance=Y.distance,W.decay=Y.decay,Y.castShadow){const BA=Y.shadow,gA=C.get(Y);gA.shadowBias=BA.bias,gA.shadowNormalBias=BA.normalBias,gA.shadowRadius=BA.radius,gA.shadowMapSize=BA.mapSize,gA.shadowCameraNear=BA.camera.near,gA.shadowCameraFar=BA.camera.far,e.pointShadow[a]=gA,e.pointShadowMap[a]=_,e.pointShadowMatrix[a]=Y.shadow.matrix,N++}e.point[a]=W,a++}else if(Y.isHemisphereLight){const W=g.get(Y);W.skyColor.copy(Y.color).multiplyScalar(j*u),W.groundColor.copy(Y.groundColor).multiplyScalar(j*u),e.hemi[y]=W,y++}}p>0&&(A.isWebGL2||I.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=hA.LTC_FLOAT_1,e.rectAreaLTC2=hA.LTC_FLOAT_2):I.has("OES_texture_half_float_linear")===!0?(e.rectAreaLTC1=hA.LTC_HALF_1,e.rectAreaLTC2=hA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),e.ambient[0]=s,e.ambient[1]=h,e.ambient[2]=D;const F=e.hash;(F.directionalLength!==d||F.pointLength!==a||F.spotLength!==r||F.rectAreaLength!==p||F.hemiLength!==y||F.numDirectionalShadows!==S||F.numPointShadows!==N||F.numSpotShadows!==m||F.numSpotMaps!==k)&&(e.directional.length=d,e.spot.length=r,e.rectArea.length=p,e.point.length=a,e.hemi.length=y,e.directionalShadow.length=S,e.directionalShadowMap.length=S,e.pointShadow.length=N,e.pointShadowMap.length=N,e.spotShadow.length=m,e.spotShadowMap.length=m,e.directionalShadowMatrix.length=S,e.pointShadowMatrix.length=N,e.spotLightMatrix.length=m+k-P,e.spotLightMap.length=k,e.numSpotLightShadowsWithMaps=P,F.directionalLength=d,F.pointLength=a,F.spotLength=r,F.rectAreaLength=p,F.hemiLength=y,F.numDirectionalShadows=S,F.numPointShadows=N,F.numSpotShadows=m,F.numSpotMaps=k,e.version=pD++)}function E(n,o){let s=0,h=0,D=0,d=0,a=0;const r=o.matrixWorldInverse;for(let p=0,y=n.length;p<y;p++){const S=n[p];if(S.isDirectionalLight){const N=e.directional[s];N.direction.setFromMatrixPosition(S.matrixWorld),t.setFromMatrixPosition(S.target.matrixWorld),N.direction.sub(t),N.direction.transformDirection(r),s++}else if(S.isSpotLight){const N=e.spot[D];N.position.setFromMatrixPosition(S.matrixWorld),N.position.applyMatrix4(r),N.direction.setFromMatrixPosition(S.matrixWorld),t.setFromMatrixPosition(S.target.matrixWorld),N.direction.sub(t),N.direction.transformDirection(r),D++}else if(S.isRectAreaLight){const N=e.rectArea[d];N.position.setFromMatrixPosition(S.matrixWorld),N.position.applyMatrix4(r),i.identity(),B.copy(S.matrixWorld),B.premultiply(r),i.extractRotation(B),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),N.halfWidth.applyMatrix4(i),N.halfHeight.applyMatrix4(i),d++}else if(S.isPointLight){const N=e.point[h];N.position.setFromMatrixPosition(S.matrixWorld),N.position.applyMatrix4(r),h++}else if(S.isHemisphereLight){const N=e.hemi[a];N.direction.setFromMatrixPosition(S.matrixWorld),N.direction.transformDirection(r),a++}}}return{setup:Q,setupView:E,state:e}}function AE(I,A){const g=new LD(I,A),C=[],e=[];function t(){C.length=0,e.length=0}function B(o){C.push(o)}function i(o){e.push(o)}function Q(o){g.setup(C,o)}function E(o){g.setupView(C,o)}return{init:t,state:{lightsArray:C,shadowsArray:e,lights:g},setupLights:Q,setupLightsView:E,pushLight:B,pushShadow:i}}function FD(I,A){let g=new WeakMap;function C(t,B=0){const i=g.get(t);let Q;return i===void 0?(Q=new AE(I,A),g.set(t,[Q])):B>=i.length?(Q=new AE(I,A),i.push(Q)):Q=i[B],Q}function e(){g=new WeakMap}return{get:C,dispose:e}}class ND extends pI{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ar,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class UD extends pI{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const kD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
`+b.replace(/^Error(:[^\n]*)?\n/,""))});return f.prototype=Object.create(c.prototype),f.prototype.constructor=f,f.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},f}var Dg=void 0;function qA(c){throw new Dg(c)}var cg=void 0;function Pg(c){throw new cg(c)}function fg(c,l,f){c.forEach(function(AA){cA[AA]=l});function U(AA){var aA=f(AA);aA.length!==c.length&&Pg("Mismatched type converter count");for(var eA=0;eA<c.length;++eA)eI(c[eA],aA[eA])}var b=new Array(l.length),IA=[],CA=0;l.forEach((AA,aA)=>{G.hasOwnProperty(AA)?b[aA]=G[AA]:(IA.push(AA),ig.hasOwnProperty(AA)||(ig[AA]=[]),ig[AA].push(()=>{b[aA]=G[AA],++CA,CA===IA.length&&U(b)}))}),IA.length===0&&U(b)}function eI(c,l,f={}){if(!("argPackAdvance"in l))throw new TypeError("registerType registeredInstance requires argPackAdvance");var U=l.name;if(c||qA(`type "${U}" must have a positive integer typeid pointer`),G.hasOwnProperty(c)){if(f.ignoreDuplicateRegistrations)return;qA(`Cannot register type '${U}' twice`)}if(G[c]=l,delete cA[c],ig.hasOwnProperty(c)){var b=ig[c];delete ig[c],b.forEach(IA=>IA())}}function We(c,l,f,U,b){var IA=FA(f);l=GA(l),eI(c,{name:l,fromWireType:function(CA){return!!CA},toWireType:function(CA,AA){return AA?U:b},argPackAdvance:8,readValueFromPointer:function(CA){var AA;if(f===1)AA=u;else if(f===2)AA=tA;else if(f===4)AA=Y;else throw new TypeError("Unknown boolean type size: "+l);return this.fromWireType(AA[CA>>IA])},destructorFunction:null})}function Tt(c){if(!(this instanceof sg)||!(c instanceof sg))return!1;for(var l=this.$$.ptrType.registeredClass,f=this.$$.ptr,U=c.$$.ptrType.registeredClass,b=c.$$.ptr;l.baseClass;)f=l.upcast(f),l=l.baseClass;for(;U.baseClass;)b=U.upcast(b),U=U.baseClass;return l===U&&f===b}function UC(c){return{count:c.count,deleteScheduled:c.deleteScheduled,preservePointerOnDelete:c.preservePointerOnDelete,ptr:c.ptr,ptrType:c.ptrType,smartPtr:c.smartPtr,smartPtrType:c.smartPtrType}}function kC(c){function l(f){return f.$$.ptrType.registeredClass.name}qA(l(c)+" instance already deleted")}var WI=!1;function fe(c){}function bt(c){c.smartPtr?c.smartPtrType.rawDestructor(c.smartPtr):c.ptrType.registeredClass.rawDestructor(c.ptr)}function ze(c){c.count.value-=1;var l=c.count.value===0;l&&bt(c)}function Ze(c,l,f){if(l===f)return c;if(f.baseClass===void 0)return null;var U=Ze(c,l,f.baseClass);return U===null?null:f.downcast(U)}var M={};function x(){return Object.keys(HA).length}function X(){var c=[];for(var l in HA)HA.hasOwnProperty(l)&&c.push(HA[l]);return c}var J=[];function z(){for(;J.length;){var c=J.pop();c.$$.deleteScheduled=!1,c.delete()}}var fA=void 0;function KA(c){fA=c,J.length&&fA&&fA(z)}function YA(){t.getInheritedInstanceCount=x,t.getLiveInheritedInstances=X,t.flushPendingDeletes=z,t.setDelayFunction=KA}var HA={};function jA(c,l){for(l===void 0&&qA("ptr should not be undefined");c.baseClass;)l=c.upcast(l),c=c.baseClass;return l}function vA(c,l){return l=jA(c,l),HA[l]}function _A(c,l){(!l.ptrType||!l.ptr)&&Pg("makeClassHandle requires ptr and ptrType");var f=!!l.smartPtrType,U=!!l.smartPtr;return f!==U&&Pg("Both smartPtrType and smartPtr must be specified"),l.count={value:1},dg(Object.create(c,{$$:{value:l}}))}function yg(c){var l=this.getPointee(c);if(!l)return this.destructor(c),null;var f=vA(this.registeredClass,l);if(f!==void 0){if(f.$$.count.value===0)return f.$$.ptr=l,f.$$.smartPtr=c,f.clone();var U=f.clone();return this.destructor(c),U}function b(){return this.isSmartPointer?_A(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:l,smartPtrType:this,smartPtr:c}):_A(this.registeredClass.instancePrototype,{ptrType:this,ptr:c})}var IA=this.registeredClass.getActualType(l),CA=M[IA];if(!CA)return b.call(this);var AA;this.isConst?AA=CA.constPointerType:AA=CA.pointerType;var aA=Ze(l,this.registeredClass,AA.registeredClass);return aA===null?b.call(this):this.isSmartPointer?_A(AA.registeredClass.instancePrototype,{ptrType:AA,ptr:aA,smartPtrType:this,smartPtr:c}):_A(AA.registeredClass.instancePrototype,{ptrType:AA,ptr:aA})}function dg(c){return typeof FinalizationRegistry>"u"?(dg=l=>l,c):(WI=new FinalizationRegistry(l=>{ze(l.$$)}),dg=l=>{var f=l.$$,U=!!f.smartPtr;if(U){var b={$$:f};WI.register(l,b,l)}return l},fe=l=>WI.unregister(l),dg(c))}function Xg(){if(this.$$.ptr||kC(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var c=dg(Object.create(Object.getPrototypeOf(this),{$$:{value:UC(this.$$)}}));return c.$$.count.value+=1,c.$$.deleteScheduled=!1,c}function rI(){this.$$.ptr||kC(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&qA("Object already scheduled for deletion"),fe(this),ze(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Rg(){return!this.$$.ptr}function $A(){return this.$$.ptr||kC(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&qA("Object already scheduled for deletion"),J.push(this),J.length===1&&fA&&fA(z),this.$$.deleteScheduled=!0,this}function ue(){sg.prototype.isAliasOf=Tt,sg.prototype.clone=Xg,sg.prototype.delete=rI,sg.prototype.isDeleted=Rg,sg.prototype.deleteLater=$A}function sg(){}function wI(c,l,f){if(c[l].overloadTable===void 0){var U=c[l];c[l]=function(){return c[l].overloadTable.hasOwnProperty(arguments.length)||qA(`Function '${f}' called with an invalid number of arguments (${arguments.length}) - expects one of (${c[l].overloadTable})!`),c[l].overloadTable[arguments.length].apply(this,arguments)},c[l].overloadTable=[],c[l].overloadTable[U.argCount]=U}}function ye(c,l,f){t.hasOwnProperty(c)?((f===void 0||t[c].overloadTable!==void 0&&t[c].overloadTable[f]!==void 0)&&qA(`Cannot register public name '${c}' twice`),wI(t,c,c),t.hasOwnProperty(f)&&qA(`Cannot register multiple overloads of a function with the same number of arguments (${f})!`),t[c].overloadTable[f]=l):(t[c]=l,f!==void 0&&(t[c].numArguments=f))}function nC(c,l,f,U,b,IA,CA,AA){this.name=c,this.constructor=l,this.instancePrototype=f,this.rawDestructor=U,this.baseClass=b,this.getActualType=IA,this.upcast=CA,this.downcast=AA,this.pureVirtualFunctions=[]}function zI(c,l,f){for(;l!==f;)l.upcast||qA(`Expected null or instance of ${f.name}, got an instance of ${l.name}`),c=l.upcast(c),l=l.baseClass;return c}function vg(c,l){if(l===null)return this.isReference&&qA(`null is not a valid ${this.name}`),0;l.$$||qA(`Cannot pass "${Wt(l)}" as a ${this.name}`),l.$$.ptr||qA(`Cannot pass deleted object as a pointer of type ${this.name}`);var f=l.$$.ptrType.registeredClass,U=zI(l.$$.ptr,f,this.registeredClass);return U}function UI(c,l){var f;if(l===null)return this.isReference&&qA(`null is not a valid ${this.name}`),this.isSmartPointer?(f=this.rawConstructor(),c!==null&&c.push(this.rawDestructor,f),f):0;l.$$||qA(`Cannot pass "${Wt(l)}" as a ${this.name}`),l.$$.ptr||qA(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&l.$$.ptrType.isConst&&qA(`Cannot convert argument of type ${l.$$.smartPtrType?l.$$.smartPtrType.name:l.$$.ptrType.name} to parameter type ${this.name}`);var U=l.$$.ptrType.registeredClass;if(f=zI(l.$$.ptr,U,this.registeredClass),this.isSmartPointer)switch(l.$$.smartPtr===void 0&&qA("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:l.$$.smartPtrType===this?f=l.$$.smartPtr:qA(`Cannot convert argument of type ${l.$$.smartPtrType?l.$$.smartPtrType.name:l.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:f=l.$$.smartPtr;break;case 2:if(l.$$.smartPtrType===this)f=l.$$.smartPtr;else{var b=l.clone();f=this.rawShare(f,Sg.toHandle(function(){b.delete()})),c!==null&&c.push(this.rawDestructor,f)}break;default:qA("Unsupporting sharing policy")}return f}function Me(c,l){if(l===null)return this.isReference&&qA(`null is not a valid ${this.name}`),0;l.$$||qA(`Cannot pass "${Wt(l)}" as a ${this.name}`),l.$$.ptr||qA(`Cannot pass deleted object as a pointer of type ${this.name}`),l.$$.ptrType.isConst&&qA(`Cannot convert argument of type ${l.$$.ptrType.name} to parameter type ${this.name}`);var f=l.$$.ptrType.registeredClass,U=zI(l.$$.ptr,f,this.registeredClass);return U}function Kg(c){return this.fromWireType(Y[c>>2])}function Se(c){return this.rawGetPointee&&(c=this.rawGetPointee(c)),c}function qt(c){this.rawDestructor&&this.rawDestructor(c)}function Xe(c){c!==null&&c.delete()}function fo(){kI.prototype.getPointee=Se,kI.prototype.destructor=qt,kI.prototype.argPackAdvance=8,kI.prototype.readValueFromPointer=Kg,kI.prototype.deleteObject=Xe,kI.prototype.fromWireType=yg}function kI(c,l,f,U,b,IA,CA,AA,aA,eA,NA){this.name=c,this.registeredClass=l,this.isReference=f,this.isConst=U,this.isSmartPointer=b,this.pointeeType=IA,this.sharingPolicy=CA,this.rawGetPointee=AA,this.rawConstructor=aA,this.rawShare=eA,this.rawDestructor=NA,!b&&l.baseClass===void 0?U?(this.toWireType=vg,this.destructorFunction=null):(this.toWireType=Me,this.destructorFunction=null):this.toWireType=UI}function ui(c,l,f){t.hasOwnProperty(c)||Pg("Replacing nonexistant public symbol"),t[c].overloadTable!==void 0&&f!==void 0?t[c].overloadTable[f]=l:(t[c]=l,t[c].argCount=f)}function uo(c,l,f){var U=t["dynCall_"+c];return f&&f.length?U.apply(null,[l].concat(f)):U.call(null,l)}function yi(c){return W.get(c)}function yo(c,l,f){if(c.includes("j"))return uo(c,l,f);var U=yi(l).apply(null,f);return U}function Mo(c,l){var f=[];return function(){return f.length=0,Object.assign(f,arguments),yo(c,l,f)}}function GI(c,l){c=GA(c);function f(){return c.includes("j")?Mo(c,l):yi(l)}var U=f();return typeof U!="function"&&qA(`unknown function pointer with signature ${c}: ${l}`),U}var Mi=void 0;function Si(c){var l=ki(c),f=GA(l);return mI(l),f}function GC(c,l){var f=[],U={};function b(IA){if(!U[IA]&&!G[IA]){if(cA[IA]){cA[IA].forEach(b);return}f.push(IA),U[IA]=!0}}throw l.forEach(b),new Mi(`${c}: `+f.map(Si).join([", "]))}function So(c,l,f,U,b,IA,CA,AA,aA,eA,NA,VA,Cg){NA=GA(NA),IA=GI(b,IA),AA&&(AA=GI(CA,AA)),eA&&(eA=GI(aA,eA)),Cg=GI(VA,Cg);var Eg=lA(NA);ye(Eg,function(){GC(`Cannot construct ${NA} due to unbound types`,[U])}),fg([c,l,f],U?[U]:[],function(Ug){Ug=Ug[0];var Og,bg;U?(Og=Ug.registeredClass,bg=Og.instancePrototype):bg=sg.prototype;var BI=eg(Eg,function(){if(Object.getPrototypeOf(this)!==pe)throw new Dg("Use 'new' to construct "+NA);if(jg.constructor_body===void 0)throw new Dg(NA+" has no accessible constructor");var Hi=jg.constructor_body[arguments.length];if(Hi===void 0)throw new Dg(`Tried to invoke ctor of ${NA} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(jg.constructor_body).toString()}) parameters instead!`);return Hi.apply(this,arguments)}),pe=Object.create(bg,{constructor:{value:BI}});BI.prototype=pe;var jg=new nC(NA,BI,pe,Cg,Og,IA,AA,eA);jg.baseClass&&(jg.baseClass.__derivedClasses===void 0&&(jg.baseClass.__derivedClasses=[]),jg.baseClass.__derivedClasses.push(jg));var Rs=new kI(NA,jg,!0,!1,!1),Ki=new kI(NA+"*",jg,!1,!1,!1),Ji=new kI(NA+" const*",jg,!1,!0,!1);return M[c]={pointerType:Ki,constPointerType:Ji},ui(Eg,BI),[Rs,Ki,Ji]})}function _t(c,l){for(var f=[],U=0;U<c;U++)f.push(v[l+U*4>>2]);return f}function Pt(c){for(;c.length;){var l=c.pop(),f=c.pop();f(l)}}function pi(c,l){if(!(c instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof c} which is not a function`);var f=eg(c.name||"unknownFunctionName",function(){});f.prototype=c.prototype;var U=new f,b=c.apply(U,l);return b instanceof Object?b:U}function Ot(c,l,f,U,b,IA){var CA=l.length;CA<2&&qA("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var AA=l[1]!==null&&f!==null,aA=!1,eA=1;eA<l.length;++eA)if(l[eA]!==null&&l[eA].destructorFunction===void 0){aA=!0;break}for(var NA=l[0].name!=="void",VA="",Cg="",eA=0;eA<CA-2;++eA)VA+=(eA!==0?", ":"")+"arg"+eA,Cg+=(eA!==0?", ":"")+"arg"+eA+"Wired";var Eg=`
        return function ${lA(c)}(${VA}) {
        if (arguments.length !== ${CA-2}) {
          throwBindingError('function ${c} called with ${arguments.length} arguments, expected ${CA-2} args!');
        }`;aA&&(Eg+=`var destructors = [];
`);var Ug=aA?"destructors":"null",Og=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],bg=[qA,U,b,Pt,l[0],l[1]];AA&&(Eg+="var thisWired = classParam.toWireType("+Ug+`, this);
`);for(var eA=0;eA<CA-2;++eA)Eg+="var arg"+eA+"Wired = argType"+eA+".toWireType("+Ug+", arg"+eA+"); // "+l[eA+2].name+`
`,Og.push("argType"+eA),bg.push(l[eA+2]);if(AA&&(Cg="thisWired"+(Cg.length>0?", ":"")+Cg),Eg+=(NA||IA?"var rv = ":"")+"invoker(fn"+(Cg.length>0?", ":"")+Cg+`);
`,aA)Eg+=`runDestructors(destructors);
`;else for(var eA=AA?1:2;eA<l.length;++eA){var BI=eA===1?"thisWired":"arg"+(eA-2)+"Wired";l[eA].destructorFunction!==null&&(Eg+=BI+"_dtor("+BI+"); // "+l[eA].name+`
`,Og.push(BI+"_dtor"),bg.push(l[eA].destructorFunction))}return NA&&(Eg+=`var ret = retType.fromWireType(rv);
return ret;
`),Eg+=`}
`,Og.push(Eg),pi(Function,Og).apply(null,bg)}function po(c,l,f,U,b,IA){P(l>0);var CA=_t(l,f);b=GI(U,b),fg([],[c],function(AA){AA=AA[0];var aA=`constructor ${AA.name}`;if(AA.registeredClass.constructor_body===void 0&&(AA.registeredClass.constructor_body=[]),AA.registeredClass.constructor_body[l-1]!==void 0)throw new Dg(`Cannot register multiple constructors with identical number of parameters (${l-1}) for class '${AA.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return AA.registeredClass.constructor_body[l-1]=()=>{GC(`Cannot construct ${AA.name} due to unbound types`,CA)},fg([],CA,function(eA){return eA.splice(1,0,null),AA.registeredClass.constructor_body[l-1]=Ot(aA,eA,null,b,IA),[]}),[]})}function Ro(c,l,f,U,b,IA,CA,AA,aA){var eA=_t(f,U);l=GA(l),IA=GI(b,IA),fg([],[c],function(NA){NA=NA[0];var VA=`${NA.name}.${l}`;l.startsWith("@@")&&(l=Symbol[l.substring(2)]),AA&&NA.registeredClass.pureVirtualFunctions.push(l);function Cg(){GC(`Cannot call ${VA} due to unbound types`,eA)}var Eg=NA.registeredClass.instancePrototype,Ug=Eg[l];return Ug===void 0||Ug.overloadTable===void 0&&Ug.className!==NA.name&&Ug.argCount===f-2?(Cg.argCount=f-2,Cg.className=NA.name,Eg[l]=Cg):(wI(Eg,l,VA),Eg[l].overloadTable[f-2]=Cg),fg([],eA,function(Og){var bg=Ot(VA,Og,NA,IA,CA,aA);return Eg[l].overloadTable===void 0?(bg.argCount=f-2,Eg[l]=bg):Eg[l].overloadTable[f-2]=bg,[]}),[]})}function Ri(c,l,f){return c instanceof Object||qA(`${f} with invalid "this": ${c}`),c instanceof l.registeredClass.constructor||qA(`${f} incompatible with "this" of type ${c.constructor.name}`),c.$$.ptr||qA(`cannot call emscripten binding method ${f} on deleted object`),zI(c.$$.ptr,c.$$.ptrType.registeredClass,l.registeredClass)}function Lo(c,l,f,U,b,IA,CA,AA,aA,eA){l=GA(l),b=GI(U,b),fg([],[c],function(NA){NA=NA[0];var VA=`${NA.name}.${l}`,Cg={get:function(){GC(`Cannot access ${VA} due to unbound types`,[f,CA])},enumerable:!0,configurable:!0};return aA?Cg.set=()=>{GC(`Cannot access ${VA} due to unbound types`,[f,CA])}:Cg.set=Eg=>{qA(VA+" is a read-only property")},Object.defineProperty(NA.registeredClass.instancePrototype,l,Cg),fg([],aA?[f,CA]:[f],function(Eg){var Ug=Eg[0],Og={get:function(){var BI=Ri(this,NA,VA+" getter");return Ug.fromWireType(b(IA,BI))},enumerable:!0};if(aA){aA=GI(AA,aA);var bg=Eg[1];Og.set=function(BI){var pe=Ri(this,NA,VA+" setter"),jg=[];aA(eA,pe,bg.toWireType(jg,BI)),Pt(jg)}}return Object.defineProperty(NA.registeredClass.instancePrototype,l,Og),[]}),[]})}function Fo(c,l,f){c=GA(c),fg([],[l],function(U){return U=U[0],t[c]=U.fromWireType(f),[]})}function No(){this.allocated=[void 0],this.freelist=[],this.get=function(c){return this.allocated[c]},this.has=function(c){return this.allocated[c]!==void 0},this.allocate=function(c){var l=this.freelist.pop()||this.allocated.length;return this.allocated[l]=c,l},this.free=function(c){this.allocated[c]=void 0,this.freelist.push(c)}}var tI=new No;function Vt(c){c>=tI.reserved&&--tI.get(c).refcount===0&&tI.free(c)}function Uo(){for(var c=0,l=tI.reserved;l<tI.allocated.length;++l)tI.allocated[l]!==void 0&&++c;return c}function ko(){tI.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),tI.reserved=tI.allocated.length,t.count_emval_handles=Uo}var Sg={toValue:c=>(c||qA("Cannot use deleted val. handle = "+c),tI.get(c).value),toHandle:c=>{switch(c){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return tI.allocate({refcount:1,value:c})}}};function Go(c,l){l=GA(l),eI(c,{name:l,fromWireType:function(f){var U=Sg.toValue(f);return Vt(f),U},toWireType:function(f,U){return Sg.toHandle(U)},argPackAdvance:8,readValueFromPointer:Kg,destructorFunction:null})}function Wt(c){if(c===null)return"null";var l=typeof c;return l==="object"||l==="array"||l==="function"?c.toString():""+c}function mo(c,l){switch(l){case 2:return function(f){return this.fromWireType(j[f>>2])};case 3:return function(f){return this.fromWireType($[f>>3])};default:throw new TypeError("Unknown float type: "+c)}}function Ko(c,l,f){var U=FA(f);l=GA(l),eI(c,{name:l,fromWireType:function(b){return b},toWireType:function(b,IA){return IA},argPackAdvance:8,readValueFromPointer:mo(l,U),destructorFunction:null})}function Jo(c,l,f,U,b,IA,CA){var AA=_t(l,f);c=GA(c),b=GI(U,b),ye(c,function(){GC(`Cannot call ${c} due to unbound types`,AA)},l-1),fg([],AA,function(aA){var eA=[aA[0],null].concat(aA.slice(1));return ui(c,Ot(c,eA,null,b,IA,CA),l-1),[]})}function Ho(c,l,f){switch(l){case 0:return f?function(b){return u[b]}:function(b){return F[b]};case 1:return f?function(b){return tA[b>>1]}:function(b){return iA[b>>1]};case 2:return f?function(b){return Y[b>>2]}:function(b){return v[b>>2]};default:throw new TypeError("Unknown integer type: "+c)}}function xo(c,l,f,U,b){l=GA(l);var IA=FA(f),CA=VA=>VA;if(U===0){var AA=32-8*f;CA=VA=>VA<<AA>>>AA}var aA=l.includes("unsigned"),eA=(VA,Cg)=>{},NA;aA?NA=function(VA,Cg){return eA(Cg,this.name),Cg>>>0}:NA=function(VA,Cg){return eA(Cg,this.name),Cg},eI(c,{name:l,fromWireType:CA,toWireType:NA,argPackAdvance:8,readValueFromPointer:Ho(l,IA,U!==0),destructorFunction:null})}function vo(c,l,f){var U=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],b=U[l];function IA(CA){CA=CA>>2;var AA=v,aA=AA[CA],eA=AA[CA+1];return new b(AA.buffer,eA,aA)}f=GA(f),eI(c,{name:f,fromWireType:IA,argPackAdvance:8,readValueFromPointer:IA},{ignoreDuplicateRegistrations:!0})}function Yo(c,l,f,U){if(!(U>0))return 0;for(var b=f,IA=f+U-1,CA=0;CA<c.length;++CA){var AA=c.charCodeAt(CA);if(AA>=55296&&AA<=57343){var aA=c.charCodeAt(++CA);AA=65536+((AA&1023)<<10)|aA&1023}if(AA<=127){if(f>=IA)break;l[f++]=AA}else if(AA<=2047){if(f+1>=IA)break;l[f++]=192|AA>>6,l[f++]=128|AA&63}else if(AA<=65535){if(f+2>=IA)break;l[f++]=224|AA>>12,l[f++]=128|AA>>6&63,l[f++]=128|AA&63}else{if(f+3>=IA)break;l[f++]=240|AA>>18,l[f++]=128|AA>>12&63,l[f++]=128|AA>>6&63,l[f++]=128|AA&63}}return l[f]=0,f-b}function To(c,l,f){return Yo(c,F,l,f)}function bo(c){for(var l=0,f=0;f<c.length;++f){var U=c.charCodeAt(f);U<=127?l++:U<=2047?l+=2:U>=55296&&U<=57343?(l+=4,++f):l+=3}return l}function qo(c,l){l=GA(l);var f=l==="std::string";eI(c,{name:l,fromWireType:function(U){var b=v[U>>2],IA=U+4,CA;if(f)for(var AA=IA,aA=0;aA<=b;++aA){var eA=IA+aA;if(aA==b||F[eA]==0){var NA=eA-AA,VA=LA(AA,NA);CA===void 0?CA=VA:(CA+=String.fromCharCode(0),CA+=VA),AA=eA+1}}else{for(var Cg=new Array(b),aA=0;aA<b;++aA)Cg[aA]=String.fromCharCode(F[IA+aA]);CA=Cg.join("")}return mI(U),CA},toWireType:function(U,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var IA,CA=typeof b=="string";CA||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||qA("Cannot pass non-string to std::string"),f&&CA?IA=bo(b):IA=b.length;var AA=Xt(4+IA+1),aA=AA+4;if(v[AA>>2]=IA,f&&CA)To(b,aA,IA+1);else if(CA)for(var eA=0;eA<IA;++eA){var NA=b.charCodeAt(eA);NA>255&&(mI(aA),qA("String has UTF-16 code units that do not fit in 8 bits")),F[aA+eA]=NA}else for(var eA=0;eA<IA;++eA)F[aA+eA]=b[eA];return U!==null&&U.push(mI,AA),AA},argPackAdvance:8,readValueFromPointer:Kg,destructorFunction:function(U){mI(U)}})}var Li=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function _o(c,l){for(var f=c,U=f>>1,b=U+l/2;!(U>=b)&&iA[U];)++U;if(f=U<<1,f-c>32&&Li)return Li.decode(F.subarray(c,f));for(var IA="",CA=0;!(CA>=l/2);++CA){var AA=tA[c+CA*2>>1];if(AA==0)break;IA+=String.fromCharCode(AA)}return IA}function Po(c,l,f){if(f===void 0&&(f=2147483647),f<2)return 0;f-=2;for(var U=l,b=f<c.length*2?f/2:c.length,IA=0;IA<b;++IA){var CA=c.charCodeAt(IA);tA[l>>1]=CA,l+=2}return tA[l>>1]=0,l-U}function Oo(c){return c.length*2}function Vo(c,l){for(var f=0,U="";!(f>=l/4);){var b=Y[c+f*4>>2];if(b==0)break;if(++f,b>=65536){var IA=b-65536;U+=String.fromCharCode(55296|IA>>10,56320|IA&1023)}else U+=String.fromCharCode(b)}return U}function Wo(c,l,f){if(f===void 0&&(f=2147483647),f<4)return 0;for(var U=l,b=U+f-4,IA=0;IA<c.length;++IA){var CA=c.charCodeAt(IA);if(CA>=55296&&CA<=57343){var AA=c.charCodeAt(++IA);CA=65536+((CA&1023)<<10)|AA&1023}if(Y[l>>2]=CA,l+=4,l+4>b)break}return Y[l>>2]=0,l-U}function zo(c){for(var l=0,f=0;f<c.length;++f){var U=c.charCodeAt(f);U>=55296&&U<=57343&&++f,l+=4}return l}function Zo(c,l,f){f=GA(f);var U,b,IA,CA,AA;l===2?(U=_o,b=Po,CA=Oo,IA=()=>iA,AA=1):l===4&&(U=Vo,b=Wo,CA=zo,IA=()=>v,AA=2),eI(c,{name:f,fromWireType:function(aA){for(var eA=v[aA>>2],NA=IA(),VA,Cg=aA+4,Eg=0;Eg<=eA;++Eg){var Ug=aA+4+Eg*l;if(Eg==eA||NA[Ug>>AA]==0){var Og=Ug-Cg,bg=U(Cg,Og);VA===void 0?VA=bg:(VA+=String.fromCharCode(0),VA+=bg),Cg=Ug+l}}return mI(aA),VA},toWireType:function(aA,eA){typeof eA!="string"&&qA(`Cannot pass non-string to C++ string type ${f}`);var NA=CA(eA),VA=Xt(4+NA+l);return v[VA>>2]=NA>>AA,b(eA,VA+4,NA+l),aA!==null&&aA.push(mI,VA),VA},argPackAdvance:8,readValueFromPointer:Kg,destructorFunction:function(aA){mI(aA)}})}function Xo(c,l){l=GA(l),eI(c,{isVoid:!0,name:l,argPackAdvance:0,fromWireType:function(){},toWireType:function(f,U){}})}function zt(c,l){var f=G[c];return f===void 0&&qA(l+" has unknown type "+Si(c)),f}function jo(c,l,f){c=Sg.toValue(c),l=zt(l,"emval::as");var U=[],b=Sg.toHandle(U);return v[f>>2]=b,l.toWireType(U,c)}function Fi(c,l){for(var f=new Array(c),U=0;U<c;++U)f[U]=zt(v[l+U*4>>2],"parameter "+U);return f}function $o(c,l,f,U){c=Sg.toValue(c);for(var b=Fi(l,f),IA=new Array(l),CA=0;CA<l;++CA){var AA=b[CA];IA[CA]=AA.readValueFromPointer(U),U+=AA.argPackAdvance}var aA=c.apply(void 0,IA);return Sg.toHandle(aA)}var As={};function Ni(c){var l=As[c];return l===void 0?GA(c):l}var Zt=[];function gs(c,l,f,U){c=Zt[c],l=Sg.toValue(l),f=Ni(f),c(l,f,null,U)}function Is(c){var l=Zt.length;return Zt.push(c),l}var Ui=[];function Cs(c,l){var f=Fi(c,l),U=f[0],b=U.name+"_$"+f.slice(1).map(function(Ug){return Ug.name}).join("_")+"$",IA=Ui[b];if(IA!==void 0)return IA;for(var CA=["retType"],AA=[U],aA="",eA=0;eA<c-1;++eA)aA+=(eA!==0?", ":"")+"arg"+eA,CA.push("argType"+eA),AA.push(f[1+eA]);for(var NA=lA("methodCaller_"+b),VA="return function "+NA+`(handle, name, destructors, args) {
`,Cg=0,eA=0;eA<c-1;++eA)VA+="    var arg"+eA+" = argType"+eA+".readValueFromPointer(args"+(Cg?"+"+Cg:"")+`);
`,Cg+=f[eA+1].argPackAdvance;VA+="    var rv = handle[name]("+aA+`);
`;for(var eA=0;eA<c-1;++eA)f[eA+1].deleteObject&&(VA+="    argType"+eA+".deleteObject(arg"+eA+`);
`);U.isVoid||(VA+=`    return retType.toWireType(destructors, rv);
`),VA+=`};
`,CA.push(VA);var Eg=pi(Function,CA).apply(null,AA);return IA=Is(Eg),Ui[b]=IA,IA}function es(c,l){return c=Sg.toValue(c),l=Sg.toValue(l),Sg.toHandle(c[l])}function ts(c){c>4&&(tI.get(c).refcount+=1)}function Bs(){return Sg.toHandle([])}function is(c){return Sg.toHandle(Ni(c))}function Qs(){return Sg.toHandle({})}function Es(c){var l=Sg.toValue(c);Pt(l),Vt(c)}function ns(c,l,f){c=Sg.toValue(c),l=Sg.toValue(l),f=Sg.toValue(f),c[l]=f}function os(c,l){return c=Sg.toValue(c),l=Sg.toValue(l),c===l}function ss(c,l){c=zt(c,"_emval_take_value");var f=c.readValueFromPointer(l);return Sg.toHandle(f)}function rs(c){return c=Sg.toValue(c),Sg.toHandle(typeof c)}function as(){H("")}function cs(c,l,f){F.copyWithin(c,l,l+f)}function hs(c){H("OOM")}function ls(c){F.length,hs()}function Ds(c){return 52}function ds(c,l,f,U){return 52}function ws(c,l,f,U,b){return 70}var fs=[null,[],[]];function us(c,l){var f=fs[c];l===0||l===10?((c===1?y:S)(nA(f,0)),f.length=0):f.push(l)}function ys(c,l,f,U){for(var b=0,IA=0;IA<f;IA++){var CA=v[l>>2],AA=v[l+4>>2];l+=8;for(var aA=0;aA<AA;aA++)us(c,F[CA+aA]);b+=AA}return v[U>>2]=b,0}MA(),Dg=t.BindingError=lg(Error,"BindingError"),cg=t.InternalError=lg(Error,"InternalError"),ue(),YA(),fo(),Mi=t.UnboundTypeError=lg(Error,"UnboundTypeError"),ko();var Ms=typeof atob=="function"?atob:function(c){var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f="",U,b,IA,CA,AA,aA,eA,NA=0;c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");do CA=l.indexOf(c.charAt(NA++)),AA=l.indexOf(c.charAt(NA++)),aA=l.indexOf(c.charAt(NA++)),eA=l.indexOf(c.charAt(NA++)),U=CA<<2|AA>>4,b=(AA&15)<<4|aA>>2,IA=(aA&3)<<6|eA,f=f+String.fromCharCode(U),aA!==64&&(f=f+String.fromCharCode(b)),eA!==64&&(f=f+String.fromCharCode(IA));while(NA<c.length);return f};function Ss(c){if(typeof o=="boolean"&&o){var l=Buffer.from(c,"base64");return new Uint8Array(l.buffer,l.byteOffset,l.byteLength)}try{for(var f=Ms(c),U=new Uint8Array(f.length),b=0;b<f.length;++b)U[b]=f.charCodeAt(b);return U}catch{throw new Error("Converting base64 string to bytes failed.")}}function mC(c){if(wA(c))return Ss(c.slice(ng.length))}var ps={D:oA,y:sA,J:V,K:mA,F:kA,N:We,k:So,C:po,e:Ro,c:Lo,p:Fo,M:Go,A:Ko,b:Jo,q:xo,l:vo,z:qo,u:Zo,O:Xo,h:jo,m:$o,r:gs,a:Vt,s:Cs,j:es,f:ts,B:Bs,i:is,v:Qs,g:Es,n:ns,o:os,d:ss,t:rs,G:as,L:cs,H:ls,w:Ds,I:ds,E:ws,x:ys};Ng();var Xt=function(){return(Xt=t.asm.R).apply(null,arguments)},mI=function(){return(mI=t.asm.S).apply(null,arguments)},ki=function(){return(ki=t.asm.U).apply(null,arguments)};t.__embind_initialize_bindings=function(){return(t.__embind_initialize_bindings=t.asm.V).apply(null,arguments)};var Gi=function(){return(Gi=t.asm.W).apply(null,arguments)};t.dynCall_jiji=function(){return(t.dynCall_jiji=t.asm.X).apply(null,arguments)};var je;Ig=function c(){je||mi(),je||(Ig=c)};function mi(){if(pA>0||(Z(),pA>0))return;function c(){je||(je=!0,t.calledRun=!0,!k&&(DA(),B(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),EA()))}t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),c()},1)):c()}if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return mi(),t.ready}})();I.exports=g});let bA;function Sw(I){return aw(this,void 0,void 0,function*(){return new Promise(A=>{Mw(I).then(g=>{bA=g,A()})})})}function pw(I){return Array.isArray(I)?[I[0],I[1],I[2]]:[I.x,I.y,I.z]}function Rw(I,A){if(Array.isArray(A)){A[0]=I[0],A[1]=I[1],A[2]=I[2];return}A.x=I[0],A.y=I[1],A.z=I[2]}function Lw(I){return Array.isArray(I)?[I[0],I[1],I[2],I[3]||0]:[I.x,I.y,I.z,I.w]}function Fw(I,A){if(Array.isArray(A)){A[0]=I[0],A[1]=I[1],A[2]=I[2],A[3]=I[3];return}A.x=I[0],A.y=I[1],A.z=I[2],A.w=I[3]}function no(I){if(!I)throw new Error}function RE(I){if(!I)throw new Error}function oo(I){return I instanceof qe?I.size:I.length}class qe{constructor(A,g=""){this.size=A,this.buffer=g}}var WB;(function(I){I[I.None=0]="None",I[I.NoTitleBar=1]="NoTitleBar",I[I.NoResize=2]="NoResize",I[I.NoMove=4]="NoMove",I[I.NoScrollbar=8]="NoScrollbar",I[I.NoScrollWithMouse=16]="NoScrollWithMouse",I[I.NoCollapse=32]="NoCollapse",I[I.AlwaysAutoResize=64]="AlwaysAutoResize",I[I.NoBackground=128]="NoBackground",I[I.NoSavedSettings=256]="NoSavedSettings",I[I.NoMouseInputs=512]="NoMouseInputs",I[I.MenuBar=1024]="MenuBar",I[I.HorizontalScrollbar=2048]="HorizontalScrollbar",I[I.NoFocusOnAppearing=4096]="NoFocusOnAppearing",I[I.NoBringToFrontOnFocus=8192]="NoBringToFrontOnFocus",I[I.AlwaysVerticalScrollbar=16384]="AlwaysVerticalScrollbar",I[I.AlwaysHorizontalScrollbar=32768]="AlwaysHorizontalScrollbar",I[I.AlwaysUseWindowPadding=65536]="AlwaysUseWindowPadding",I[I.NoNavInputs=262144]="NoNavInputs",I[I.NoNavFocus=524288]="NoNavFocus",I[I.UnsavedDocument=1048576]="UnsavedDocument",I[I.NoNav=786432]="NoNav",I[I.NoDecoration=43]="NoDecoration",I[I.NoInputs=786944]="NoInputs",I[I.NavFlattened=8388608]="NavFlattened",I[I.ChildWindow=16777216]="ChildWindow",I[I.Tooltip=33554432]="Tooltip",I[I.Popup=67108864]="Popup",I[I.Modal=134217728]="Modal",I[I.ChildMenu=268435456]="ChildMenu"})(WB||(WB={}));var LE;(function(I){I[I.None=0]="None",I[I.CharsDecimal=1]="CharsDecimal",I[I.CharsHexadecimal=2]="CharsHexadecimal",I[I.CharsUppercase=4]="CharsUppercase",I[I.CharsNoBlank=8]="CharsNoBlank",I[I.AutoSelectAll=16]="AutoSelectAll",I[I.EnterReturnsTrue=32]="EnterReturnsTrue",I[I.CallbackCompletion=64]="CallbackCompletion",I[I.CallbackHistory=128]="CallbackHistory",I[I.CallbackAlways=256]="CallbackAlways",I[I.CallbackCharFilter=512]="CallbackCharFilter",I[I.AllowTabInput=1024]="AllowTabInput",I[I.CtrlEnterForNewLine=2048]="CtrlEnterForNewLine",I[I.NoHorizontalScroll=4096]="NoHorizontalScroll",I[I.AlwaysOverwrite=8192]="AlwaysOverwrite",I[I.ReadOnly=16384]="ReadOnly",I[I.Password=32768]="Password",I[I.NoUndoRedo=65536]="NoUndoRedo",I[I.CharsScientific=131072]="CharsScientific",I[I.CallbackResize=262144]="CallbackResize",I[I.CallbackEdit=524288]="CallbackEdit",I[I.Multiline=1048576]="Multiline",I[I.NoMarkEdited=2097152]="NoMarkEdited"})(LE||(LE={}));var FE;(function(I){I[I.None=0]="None",I[I.Selected=1]="Selected",I[I.Framed=2]="Framed",I[I.AllowItemOverlap=4]="AllowItemOverlap",I[I.NoTreePushOnOpen=8]="NoTreePushOnOpen",I[I.NoAutoOpenOnLog=16]="NoAutoOpenOnLog",I[I.DefaultOpen=32]="DefaultOpen",I[I.OpenOnDoubleClick=64]="OpenOnDoubleClick",I[I.OpenOnArrow=128]="OpenOnArrow",I[I.Leaf=256]="Leaf",I[I.Bullet=512]="Bullet",I[I.FramePadding=1024]="FramePadding",I[I.SpanAvailWidth=2048]="SpanAvailWidth",I[I.SpanFullWidth=4096]="SpanFullWidth",I[I.NavLeftJumpsBackHere=8192]="NavLeftJumpsBackHere",I[I.CollapsingHeader=26]="CollapsingHeader"})(FE||(FE={}));var NE;(function(I){I[I.None=0]="None",I[I.MouseButtonLeft=0]="MouseButtonLeft",I[I.MouseButtonRight=1]="MouseButtonRight",I[I.MouseButtonMiddle=2]="MouseButtonMiddle",I[I.MouseButtonMask_=31]="MouseButtonMask_",I[I.MouseButtonDefault_=1]="MouseButtonDefault_",I[I.NoOpenOverExistingPopup=32]="NoOpenOverExistingPopup",I[I.NoOpenOverItems=64]="NoOpenOverItems",I[I.AnyPopupId=128]="AnyPopupId",I[I.AnyPopupLevel=256]="AnyPopupLevel",I[I.AnyPopup=384]="AnyPopup"})(NE||(NE={}));var UE;(function(I){I[I.None=0]="None",I[I.DontClosePopups=1]="DontClosePopups",I[I.SpanAllColumns=2]="SpanAllColumns",I[I.AllowDoubleClick=4]="AllowDoubleClick",I[I.Disabled=8]="Disabled",I[I.AllowItemOverlap=16]="AllowItemOverlap"})(UE||(UE={}));var kE;(function(I){I[I.None=0]="None",I[I.PopupAlignLeft=1]="PopupAlignLeft",I[I.HeightSmall=2]="HeightSmall",I[I.HeightRegular=4]="HeightRegular",I[I.HeightLarge=8]="HeightLarge",I[I.HeightLargest=16]="HeightLargest",I[I.NoArrowButton=32]="NoArrowButton",I[I.NoPreview=64]="NoPreview",I[I.HeightMask_=30]="HeightMask_"})(kE||(kE={}));var GE;(function(I){I[I.None=0]="None",I[I.Reorderable=1]="Reorderable",I[I.AutoSelectNewTabs=2]="AutoSelectNewTabs",I[I.TabListPopupButton=4]="TabListPopupButton",I[I.NoCloseWithMiddleMouseButton=8]="NoCloseWithMiddleMouseButton",I[I.NoTabListScrollingButtons=16]="NoTabListScrollingButtons",I[I.NoTooltip=32]="NoTooltip",I[I.FittingPolicyResizeDown=64]="FittingPolicyResizeDown",I[I.FittingPolicyScroll=128]="FittingPolicyScroll",I[I.FittingPolicyMask_=192]="FittingPolicyMask_",I[I.FittingPolicyDefault_=64]="FittingPolicyDefault_"})(GE||(GE={}));var mE;(function(I){I[I.None=0]="None",I[I.UnsavedDocument=1]="UnsavedDocument",I[I.SetSelected=2]="SetSelected",I[I.NoCloseWithMiddleMouseButton=4]="NoCloseWithMiddleMouseButton",I[I.NoPushId=8]="NoPushId",I[I.NoTooltip=16]="NoTooltip",I[I.NoReorder=32]="NoReorder",I[I.Leading=64]="Leading",I[I.Trailing=128]="Trailing"})(mE||(mE={}));var KE;(function(I){I[I.None=0]="None",I[I.Resizable=1]="Resizable",I[I.Reorderable=2]="Reorderable",I[I.Hideable=4]="Hideable",I[I.Sortable=8]="Sortable",I[I.NoSavedSettings=16]="NoSavedSettings",I[I.ContextMenuInBody=32]="ContextMenuInBody",I[I.RowBg=64]="RowBg",I[I.BordersInnerH=128]="BordersInnerH",I[I.BordersOuterH=256]="BordersOuterH",I[I.BordersInnerV=512]="BordersInnerV",I[I.BordersOuterV=1024]="BordersOuterV",I[I.BordersH=384]="BordersH",I[I.BordersV=1536]="BordersV",I[I.BordersInner=640]="BordersInner",I[I.BordersOuter=1280]="BordersOuter",I[I.Borders=1920]="Borders",I[I.NoBordersInBody=2048]="NoBordersInBody",I[I.NoBordersInBodyUntilResize=4096]="NoBordersInBodyUntilResize",I[I.SizingFixedFit=8192]="SizingFixedFit",I[I.SizingFixedSame=16384]="SizingFixedSame",I[I.SizingStretchProp=24576]="SizingStretchProp",I[I.SizingStretchSame=32768]="SizingStretchSame",I[I.NoHostExtendX=65536]="NoHostExtendX",I[I.NoHostExtendY=131072]="NoHostExtendY",I[I.NoKeepColumnsVisible=262144]="NoKeepColumnsVisible",I[I.PreciseWidths=524288]="PreciseWidths",I[I.NoClip=1048576]="NoClip",I[I.PadOuterX=2097152]="PadOuterX",I[I.NoPadOuterX=4194304]="NoPadOuterX",I[I.NoPadInnerX=8388608]="NoPadInnerX",I[I.ScrollX=16777216]="ScrollX",I[I.ScrollY=33554432]="ScrollY",I[I.SortMulti=67108864]="SortMulti",I[I.SortTristate=134217728]="SortTristate",I[I.SizingMask_=57344]="SizingMask_"})(KE||(KE={}));var JE;(function(I){I[I.None=0]="None",I[I.Disabled=1]="Disabled",I[I.DefaultHide=2]="DefaultHide",I[I.DefaultSort=4]="DefaultSort",I[I.WidthStretch=8]="WidthStretch",I[I.WidthFixed=16]="WidthFixed",I[I.NoResize=32]="NoResize",I[I.NoReorder=64]="NoReorder",I[I.NoHide=128]="NoHide",I[I.NoClip=256]="NoClip",I[I.NoSort=512]="NoSort",I[I.NoSortAscending=1024]="NoSortAscending",I[I.NoSortDescending=2048]="NoSortDescending",I[I.NoHeaderLabel=4096]="NoHeaderLabel",I[I.NoHeaderWidth=8192]="NoHeaderWidth",I[I.PreferSortAscending=16384]="PreferSortAscending",I[I.PreferSortDescending=32768]="PreferSortDescending",I[I.IndentEnable=65536]="IndentEnable",I[I.IndentDisable=131072]="IndentDisable",I[I.IsEnabled=16777216]="IsEnabled",I[I.IsVisible=33554432]="IsVisible",I[I.IsSorted=67108864]="IsSorted",I[I.IsHovered=134217728]="IsHovered",I[I.WidthMask_=24]="WidthMask_",I[I.IndentMask_=196608]="IndentMask_",I[I.StatusMask_=251658240]="StatusMask_",I[I.NoDirectResize_=1073741824]="NoDirectResize_"})(JE||(JE={}));var HE;(function(I){I[I.None=0]="None",I[I.Headers=1]="Headers"})(HE||(HE={}));var xE;(function(I){I[I.None=0]="None",I[I.RowBg0=1]="RowBg0",I[I.RowBg1=2]="RowBg1",I[I.CellBg=3]="CellBg"})(xE||(xE={}));var vE;(function(I){I[I.None=0]="None",I[I.ChildWindows=1]="ChildWindows",I[I.RootWindow=2]="RootWindow",I[I.AnyWindow=4]="AnyWindow",I[I.NoPopupHierarchy=8]="NoPopupHierarchy",I[I.RootAndChildWindows=3]="RootAndChildWindows"})(vE||(vE={}));var YE;(function(I){I[I.None=0]="None",I[I.ChildWindows=1]="ChildWindows",I[I.RootWindow=2]="RootWindow",I[I.AnyWindow=4]="AnyWindow",I[I.NoPopupHierarchy=8]="NoPopupHierarchy",I[I.AllowWhenBlockedByPopup=32]="AllowWhenBlockedByPopup",I[I.AllowWhenBlockedByActiveItem=128]="AllowWhenBlockedByActiveItem",I[I.AllowWhenOverlapped=256]="AllowWhenOverlapped",I[I.AllowWhenDisabled=512]="AllowWhenDisabled",I[I.RectOnly=416]="RectOnly",I[I.RootAndChildWindows=3]="RootAndChildWindows"})(YE||(YE={}));var TE;(function(I){I[I.None=0]="None",I[I.SourceNoPreviewTooltip=1]="SourceNoPreviewTooltip",I[I.SourceNoDisableHover=2]="SourceNoDisableHover",I[I.SourceNoHoldToOpenOthers=4]="SourceNoHoldToOpenOthers",I[I.SourceAllowNullID=8]="SourceAllowNullID",I[I.SourceExtern=16]="SourceExtern",I[I.SourceAutoExpirePayload=32]="SourceAutoExpirePayload",I[I.AcceptBeforeDelivery=1024]="AcceptBeforeDelivery",I[I.AcceptNoDrawDefaultRect=2048]="AcceptNoDrawDefaultRect",I[I.AcceptNoPreviewTooltip=4096]="AcceptNoPreviewTooltip",I[I.AcceptPeekOnly=3072]="AcceptPeekOnly"})(TE||(TE={}));var bE;(function(I){I[I.S8=0]="S8",I[I.U8=1]="U8",I[I.S16=2]="S16",I[I.U16=3]="U16",I[I.S32=4]="S32",I[I.U32=5]="U32",I[I.S64=6]="S64",I[I.U64=7]="U64",I[I.Float=8]="Float",I[I.Double=9]="Double",I[I.COUNT=10]="COUNT"})(bE||(bE={}));var Kt;(function(I){I[I.None=-1]="None",I[I.Left=0]="Left",I[I.Right=1]="Right",I[I.Up=2]="Up",I[I.Down=3]="Down",I[I.COUNT=4]="COUNT"})(Kt||(Kt={}));var qE;(function(I){I[I.None=0]="None",I[I.Ascending=1]="Ascending",I[I.Descending=2]="Descending"})(qE||(qE={}));var ug;(function(I){I[I.Tab=0]="Tab",I[I.LeftArrow=1]="LeftArrow",I[I.RightArrow=2]="RightArrow",I[I.UpArrow=3]="UpArrow",I[I.DownArrow=4]="DownArrow",I[I.PageUp=5]="PageUp",I[I.PageDown=6]="PageDown",I[I.Home=7]="Home",I[I.End=8]="End",I[I.Insert=9]="Insert",I[I.Delete=10]="Delete",I[I.Backspace=11]="Backspace",I[I.Space=12]="Space",I[I.Enter=13]="Enter",I[I.Escape=14]="Escape",I[I.KeyPadEnter=15]="KeyPadEnter",I[I.A=16]="A",I[I.C=17]="C",I[I.V=18]="V",I[I.X=19]="X",I[I.Y=20]="Y",I[I.Z=21]="Z",I[I.COUNT=22]="COUNT"})(ug||(ug={}));var _E;(function(I){I[I.None=0]="None",I[I.Ctrl=1]="Ctrl",I[I.Shift=2]="Shift",I[I.Alt=4]="Alt",I[I.Super=8]="Super"})(_E||(_E={}));var uA;(function(I){I[I.Activate=0]="Activate",I[I.Cancel=1]="Cancel",I[I.Input=2]="Input",I[I.Menu=3]="Menu",I[I.DpadLeft=4]="DpadLeft",I[I.DpadRight=5]="DpadRight",I[I.DpadUp=6]="DpadUp",I[I.DpadDown=7]="DpadDown",I[I.LStickLeft=8]="LStickLeft",I[I.LStickRight=9]="LStickRight",I[I.LStickUp=10]="LStickUp",I[I.LStickDown=11]="LStickDown",I[I.FocusPrev=12]="FocusPrev",I[I.FocusNext=13]="FocusNext",I[I.TweakSlow=14]="TweakSlow",I[I.TweakFast=15]="TweakFast",I[I.KeyLeft_=16]="KeyLeft_",I[I.KeyRight_=17]="KeyRight_",I[I.KeyUp_=18]="KeyUp_",I[I.KeyDown_=19]="KeyDown_",I[I.COUNT=20]="COUNT",I[I.InternalStart_=16]="InternalStart_"})(uA||(uA={}));var zB;(function(I){I[I.None=0]="None",I[I.NavEnableKeyboard=1]="NavEnableKeyboard",I[I.NavEnableGamepad=2]="NavEnableGamepad",I[I.NavEnableSetMousePos=4]="NavEnableSetMousePos",I[I.NavNoCaptureKeyboard=8]="NavNoCaptureKeyboard",I[I.NoMouse=16]="NoMouse",I[I.NoMouseCursorChange=32]="NoMouseCursorChange",I[I.IsSRGB=1048576]="IsSRGB",I[I.IsTouchScreen=2097152]="IsTouchScreen"})(zB||(zB={}));var _e;(function(I){I[I.Text=0]="Text",I[I.TextDisabled=1]="TextDisabled",I[I.WindowBg=2]="WindowBg",I[I.ChildBg=3]="ChildBg",I[I.PopupBg=4]="PopupBg",I[I.Border=5]="Border",I[I.BorderShadow=6]="BorderShadow",I[I.FrameBg=7]="FrameBg",I[I.FrameBgHovered=8]="FrameBgHovered",I[I.FrameBgActive=9]="FrameBgActive",I[I.TitleBg=10]="TitleBg",I[I.TitleBgActive=11]="TitleBgActive",I[I.TitleBgCollapsed=12]="TitleBgCollapsed",I[I.MenuBarBg=13]="MenuBarBg",I[I.ScrollbarBg=14]="ScrollbarBg",I[I.ScrollbarGrab=15]="ScrollbarGrab",I[I.ScrollbarGrabHovered=16]="ScrollbarGrabHovered",I[I.ScrollbarGrabActive=17]="ScrollbarGrabActive",I[I.CheckMark=18]="CheckMark",I[I.SliderGrab=19]="SliderGrab",I[I.SliderGrabActive=20]="SliderGrabActive",I[I.Button=21]="Button",I[I.ButtonHovered=22]="ButtonHovered",I[I.ButtonActive=23]="ButtonActive",I[I.Header=24]="Header",I[I.HeaderHovered=25]="HeaderHovered",I[I.HeaderActive=26]="HeaderActive",I[I.Separator=27]="Separator",I[I.SeparatorHovered=28]="SeparatorHovered",I[I.SeparatorActive=29]="SeparatorActive",I[I.ResizeGrip=30]="ResizeGrip",I[I.ResizeGripHovered=31]="ResizeGripHovered",I[I.ResizeGripActive=32]="ResizeGripActive",I[I.Tab=33]="Tab",I[I.TabHovered=34]="TabHovered",I[I.TabActive=35]="TabActive",I[I.TabUnfocused=36]="TabUnfocused",I[I.TabUnfocusedActive=37]="TabUnfocusedActive",I[I.PlotLines=38]="PlotLines",I[I.PlotLinesHovered=39]="PlotLinesHovered",I[I.PlotHistogram=40]="PlotHistogram",I[I.PlotHistogramHovered=41]="PlotHistogramHovered",I[I.TableHeaderBg=42]="TableHeaderBg",I[I.TableBorderStrong=43]="TableBorderStrong",I[I.TableBorderLight=44]="TableBorderLight",I[I.TableRowBg=45]="TableRowBg",I[I.TableRowBgAlt=46]="TableRowBgAlt",I[I.TextSelectedBg=47]="TextSelectedBg",I[I.DragDropTarget=48]="DragDropTarget",I[I.NavHighlight=49]="NavHighlight",I[I.NavWindowingHighlight=50]="NavWindowingHighlight",I[I.NavWindowingDimBg=51]="NavWindowingDimBg",I[I.ModalWindowDimBg=52]="ModalWindowDimBg",I[I.COUNT=53]="COUNT"})(_e||(_e={}));var PE;(function(I){I[I.Alpha=0]="Alpha",I[I.DisabledAlpha=1]="DisabledAlpha",I[I.WindowPadding=2]="WindowPadding",I[I.WindowRounding=3]="WindowRounding",I[I.WindowBorderSize=4]="WindowBorderSize",I[I.WindowMinSize=5]="WindowMinSize",I[I.WindowTitleAlign=6]="WindowTitleAlign",I[I.ChildRounding=7]="ChildRounding",I[I.ChildBorderSize=8]="ChildBorderSize",I[I.PopupRounding=9]="PopupRounding",I[I.PopupBorderSize=10]="PopupBorderSize",I[I.FramePadding=11]="FramePadding",I[I.FrameRounding=12]="FrameRounding",I[I.FrameBorderSize=13]="FrameBorderSize",I[I.ItemSpacing=14]="ItemSpacing",I[I.ItemInnerSpacing=15]="ItemInnerSpacing",I[I.IndentSpacing=16]="IndentSpacing",I[I.CellPadding=17]="CellPadding",I[I.ScrollbarSize=18]="ScrollbarSize",I[I.ScrollbarRounding=19]="ScrollbarRounding",I[I.GrabMinSize=20]="GrabMinSize",I[I.GrabRounding=21]="GrabRounding",I[I.TabRounding=22]="TabRounding",I[I.ButtonTextAlign=23]="ButtonTextAlign",I[I.SelectableTextAlign=24]="SelectableTextAlign",I[I.COUNT=25]="COUNT"})(PE||(PE={}));var Jt;(function(I){I[I.None=0]="None",I[I.HasGamepad=1]="HasGamepad",I[I.HasMouseCursors=2]="HasMouseCursors",I[I.HasSetMousePos=4]="HasSetMousePos",I[I.RendererHasVtxOffset=8]="RendererHasVtxOffset"})(Jt||(Jt={}));var OE;(function(I){I[I.None=0]="None",I[I.MouseButtonLeft=1]="MouseButtonLeft",I[I.MouseButtonRight=2]="MouseButtonRight",I[I.MouseButtonMiddle=4]="MouseButtonMiddle",I[I.MouseButtonMask_=7]="MouseButtonMask_",I[I.MouseButtonDefault_=1]="MouseButtonDefault_"})(OE||(OE={}));var VE;(function(I){I[I.None=0]="None",I[I.NoAlpha=2]="NoAlpha",I[I.NoPicker=4]="NoPicker",I[I.NoOptions=8]="NoOptions",I[I.NoSmallPreview=16]="NoSmallPreview",I[I.NoInputs=32]="NoInputs",I[I.NoTooltip=64]="NoTooltip",I[I.NoLabel=128]="NoLabel",I[I.NoSidePreview=256]="NoSidePreview",I[I.NoDragDrop=512]="NoDragDrop",I[I.NoBorder=1024]="NoBorder",I[I.AlphaBar=65536]="AlphaBar",I[I.AlphaPreview=131072]="AlphaPreview",I[I.AlphaPreviewHalf=262144]="AlphaPreviewHalf",I[I.HDR=524288]="HDR",I[I.DisplayRGB=1048576]="DisplayRGB",I[I.DisplayHSV=2097152]="DisplayHSV",I[I.DisplayHex=4194304]="DisplayHex",I[I.Uint8=8388608]="Uint8",I[I.Float=16777216]="Float",I[I.PickerHueBar=33554432]="PickerHueBar",I[I.PickerHueWheel=67108864]="PickerHueWheel",I[I.InputRGB=134217728]="InputRGB",I[I.InputHSV=268435456]="InputHSV",I[I.DefaultOptions_=177209344]="DefaultOptions_",I[I.DisplayMask_=7340032]="DisplayMask_",I[I.DataTypeMask_=25165824]="DataTypeMask_",I[I.PickerMask_=100663296]="PickerMask_",I[I.InputMask_=402653184]="InputMask_"})(VE||(VE={}));var WE;(function(I){I[I.None=0]="None",I[I.AlwaysClamp=16]="AlwaysClamp",I[I.Logarithmic=32]="Logarithmic",I[I.NoRoundToFormat=64]="NoRoundToFormat",I[I.NoInput=128]="NoInput",I[I.InvalidMask_=1879048207]="InvalidMask_"})(WE||(WE={}));var zE;(function(I){I[I.Left=0]="Left",I[I.Right=1]="Right",I[I.Middle=2]="Middle",I[I.COUNT=5]="COUNT"})(zE||(zE={}));var QI;(function(I){I[I.None=-1]="None",I[I.Arrow=0]="Arrow",I[I.TextInput=1]="TextInput",I[I.ResizeAll=2]="ResizeAll",I[I.ResizeNS=3]="ResizeNS",I[I.ResizeEW=4]="ResizeEW",I[I.ResizeNESW=5]="ResizeNESW",I[I.ResizeNWSE=6]="ResizeNWSE",I[I.Hand=7]="Hand",I[I.NotAllowed=8]="NotAllowed",I[I.COUNT=9]="COUNT"})(QI||(QI={}));var ZE;(function(I){I[I.None=0]="None",I[I.Always=1]="Always",I[I.Once=2]="Once",I[I.FirstUseEver=4]="FirstUseEver",I[I.Appearing=8]="Appearing"})(ZE||(ZE={}));var ge;(function(I){I[I.None=0]="None",I[I.Closed=1]="Closed",I[I.RoundCornersTopLeft=16]="RoundCornersTopLeft",I[I.RoundCornersTopRight=32]="RoundCornersTopRight",I[I.RoundCornersBottomLeft=64]="RoundCornersBottomLeft",I[I.RoundCornersBottomRight=128]="RoundCornersBottomRight",I[I.RoundCornersNone=256]="RoundCornersNone",I[I.RoundCornersTop=48]="RoundCornersTop",I[I.RoundCornersBottom=192]="RoundCornersBottom",I[I.RoundCornersLeft=80]="RoundCornersLeft",I[I.RoundCornersRight=160]="RoundCornersRight",I[I.RoundCornersAll=240]="RoundCornersAll",I[I.RoundCornersDefault_=240]="RoundCornersDefault_",I[I.RoundCornersMask_=496]="RoundCornersMask_"})(ge||(ge={}));var XE;(function(I){I[I.None=0]="None",I[I.AntiAliasedLines=1]="AntiAliasedLines",I[I.AntiAliasedLinesUseTex=2]="AntiAliasedLinesUseTex",I[I.AntiAliasedFill=4]="AntiAliasedFill",I[I.AllowVtxOffset=8]="AllowVtxOffset"})(XE||(XE={}));class WA{constructor(A=0,g=0){this.x=A,this.y=g}Set(A,g){return this.x=A,this.y=g,this}Copy(A){return this.x=A.x,this.y=A.y,this}Equals(A){return!(this.x!==A.x||this.y!==A.y)}}WA.ZERO=new WA(0,0);WA.UNIT=new WA(1,1);WA.UNIT_X=new WA(1,0);WA.UNIT_Y=new WA(0,1);class xg{constructor(A=0,g=0,C=0,e=1){this.x=A,this.y=g,this.z=C,this.w=e}Set(A,g,C,e){return this.x=A,this.y=g,this.z=C,this.w=e,this}Copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w,this}Equals(A){return!(this.x!==A.x||this.y!==A.y||this.z!==A.z||this.w!==A.w)}}xg.ZERO=new xg(0,0,0,0);xg.UNIT=new xg(1,1,1,1);xg.UNIT_X=new xg(1,0,0,0);xg.UNIT_Y=new xg(0,1,0,0);xg.UNIT_Z=new xg(0,0,1,0);xg.UNIT_W=new xg(0,0,0,1);xg.BLACK=new xg(0,0,0,1);xg.WHITE=new xg(1,1,1,1);class so extends Array{constructor(){super(...arguments),this.Data=this}get Size(){return this.length}empty(){return this.length===0}clear(){this.length=0}pop_back(){return this.pop()}push_back(A){this.push(A)}front(){return RE(this.Size>0),this.Data[0]}back(){return RE(this.Size>0),this.Data[this.Size-1]}size(){return this.Size}resize(A,g){if(g)for(let C=this.length;C<A;++C)this[C]=g(C);else this.length=A}contains(A){return this.includes(A)}find_erase_unsorted(A){const g=this.indexOf(A);g!==-1&&this.splice(g,1)}}const ro=128;class ao{constructor(A,g=null){this.native=A,this.UserData=g}get EventFlag(){return this.native.EventFlag}get Flags(){return this.native.Flags}get EventChar(){return this.native.EventChar}set EventChar(A){this.native.EventChar=A}get EventKey(){return this.native.EventKey}get Buf(){return this.native.Buf}set Buf(A){this.native.Buf=A}get BufTextLen(){return this.native.BufTextLen}set BufTextLen(A){this.native.BufTextLen=A}get BufSize(){return this.native.BufSize}set BufDirty(A){this.native.BufDirty=A}get CursorPos(){return this.native.CursorPos}set CursorPos(A){this.native.CursorPos=A}get SelectionStart(){return this.native.SelectionStart}set SelectionStart(A){this.native.SelectionStart=A}get SelectionEnd(){return this.native.SelectionEnd}set SelectionEnd(A){this.native.SelectionEnd=A}DeleteChars(A,g){return this.native.DeleteChars(A,g)}InsertChars(A,g,C=null){return this.native.InsertChars(A,C!==null?g.substring(0,C):g)}SelectAll(){this.native.SelectAll()}ClearSelection(){this.native.ClearSelection()}HasSelection(){return this.native.HasSelection()}}class jE{constructor(A){this.native=A,this.UserCallback=null,this.UserCallbackData=null}get ElemCount(){return this.native.ElemCount}get ClipRect(){return this.native.ClipRect}get TextureId(){return Mg.getTexture(this.native.TextureId)}get VtxOffset(){return this.native.VtxOffset}get IdxOffset(){return this.native.IdxOffset}}const $E=2,fI=20,Nw=0,Uw=8,kw=16;class hC{constructor(A,g=0){this.pos=new Float32Array(A,g+bA.ImDrawVertPosOffset,2),this.uv=new Float32Array(A,g+bA.ImDrawVertUVOffset,2),this.col=new Uint32Array(A,g+bA.ImDrawVertColOffset,1)}}class wi{constructor(A){this.native=A}IterateDrawCmds(A){this.native.IterateDrawCmds((g,C)=>{A(new jE(g),C)})}get IdxBuffer(){return this.native.IdxBuffer}get VtxBuffer(){return this.native.VtxBuffer}get Flags(){return this.native.Flags}set Flags(A){this.native.Flags=A}PushClipRect(A,g,C=!1){this.native.PushClipRect(A,g,C)}PushClipRectFullScreen(){this.native.PushClipRectFullScreen()}PopClipRect(){this.native.PopClipRect()}PushTextureID(A){this.native.PushTextureID(Mg.setTexture(A))}PopTextureID(){this.native.PopTextureID()}GetClipRectMin(A=new WA){return this.native.GetClipRectMin(A)}GetClipRectMax(A=new WA){return this.native.GetClipRectMax(A)}AddLine(A,g,C,e=1){this.native.AddLine(A,g,C,e)}AddRect(A,g,C,e=0,t=ge.None,B=1){this.native.AddRect(A,g,C,e,t,B)}AddRectFilled(A,g,C,e=0,t=ge.None){this.native.AddRectFilled(A,g,C,e,t)}AddRectFilledMultiColor(A,g,C,e,t,B){this.native.AddRectFilledMultiColor(A,g,C,e,t,B)}AddQuad(A,g,C,e,t,B=1){this.native.AddQuad(A,g,C,e,t,B)}AddQuadFilled(A,g,C,e,t){this.native.AddQuadFilled(A,g,C,e,t)}AddTriangle(A,g,C,e,t=1){this.native.AddTriangle(A,g,C,e,t)}AddTriangleFilled(A,g,C,e){this.native.AddTriangleFilled(A,g,C,e)}AddCircle(A,g,C,e=12,t=1){this.native.AddCircle(A,g,C,e,t)}AddCircleFilled(A,g,C,e=12){this.native.AddCircleFilled(A,g,C,e)}AddNgon(A,g,C,e,t=1){this.native.AddNgon(A,g,C,e,t)}AddNgonFilled(A,g,C,e){this.native.AddNgonFilled(A,g,C,e)}AddText(...A){if(A[0]instanceof te){const g=A[0],C=A[1],e=A[2],t=A[3],B=A[4],i=A[5]||null,Q=A[6]=0,E=A[7]||null;this.native.AddText_B(g.native,C,e,t,i!==null?B.substring(0,i):B,Q,E)}else{const g=A[0],C=A[1],e=A[2],t=A[3]||null;this.native.AddText_A(g,C,t!==null?e.substring(0,t):e)}}AddPolyline(A,g,C,e,t){this.native.AddPolyline(A,g,C,e,t)}AddConvexPolyFilled(A,g,C){this.native.AddConvexPolyFilled(A,g,C)}AddBezierCubic(A,g,C,e,t,B=1,i=0){this.native.AddBezierCubic(A,g,C,e,t,B,i)}AddBezierQuadratic(A,g,C,e,t=1,B=0){this.native.AddBezierQuadratic(A,g,C,e,t,B)}AddImage(A,g,C,e=WA.ZERO,t=WA.UNIT,B=4294967295){this.native.AddImage(Mg.setTexture(A),g,C,e,t,B)}AddImageQuad(A,g,C,e,t,B=WA.ZERO,i=WA.UNIT_X,Q=WA.UNIT,E=WA.UNIT_Y,n=4294967295){this.native.AddImageQuad(Mg.setTexture(A),g,C,e,t,B,i,Q,E,n)}AddImageRounded(A,g,C,e,t,B,i,Q=ge.None){this.native.AddImageRounded(Mg.setTexture(A),g,C,e,t,B,i,Q)}PathClear(){this.native.PathClear()}PathLineTo(A){this.native.PathLineTo(A)}PathLineToMergeDuplicate(A){this.native.PathLineToMergeDuplicate(A)}PathFillConvex(A){this.native.PathFillConvex(A)}PathStroke(A,g,C=1){this.native.PathStroke(A,g,C)}PathArcTo(A,g,C,e,t=0){this.native.PathArcTo(A,g,C,e,t)}PathArcToFast(A,g,C,e){this.native.PathArcToFast(A,g,C,e)}PathBezierCubicCurveTo(A,g,C,e=0){this.native.PathBezierCubicCurveTo(A,g,C,e)}PathBezierQuadraticCurveTo(A,g,C=0){this.native.PathBezierQuadraticCurveTo(A,g,C)}PathRect(A,g,C=0,e=ge.None){this.native.PathRect(A,g,C,e)}ChannelsSplit(A){this.native.ChannelsSplit(A)}ChannelsMerge(){this.native.ChannelsMerge()}ChannelsSetCurrent(A){this.native.ChannelsSetCurrent(A)}AddCallback(A,g){const C=(e,t)=>{A(new wi(e),new jE(t))};this.native.AddCallback(C,g)}AddDrawCmd(){this.native.AddDrawCmd()}PrimReserve(A,g){this.native.PrimReserve(A,g)}PrimUnreserve(A,g){this.native.PrimUnreserve(A,g)}PrimRect(A,g,C){this.native.PrimRect(A,g,C)}PrimRectUV(A,g,C,e,t){this.native.PrimRectUV(A,g,C,e,t)}PrimQuadUV(A,g,C,e,t,B,i,Q,E){this.native.PrimQuadUV(A,g,C,e,t,B,i,Q,E)}PrimWriteVtx(A,g,C){this.native.PrimWriteVtx(A,g,C)}PrimWriteIdx(A){this.native.PrimWriteIdx(A)}PrimVtx(A,g,C){this.native.PrimVtx(A,g,C)}_CalcCircleAutoSegmentCount(A){return this.native._CalcCircleAutoSegmentCount(A)}}class Gw{constructor(A){this.native=A}IterateDrawLists(A){this.native.IterateDrawLists(g=>{A(new wi(g))})}get Valid(){return this.native.Valid}get CmdListsCount(){return this.native.CmdListsCount}get TotalIdxCount(){return this.native.TotalIdxCount}get TotalVtxCount(){return this.native.TotalVtxCount}get DisplayPos(){return this.native.DisplayPos}get DisplaySize(){return this.native.DisplaySize}get FramebufferScale(){return this.native.FramebufferScale}DeIndexAllBuffers(){this.native.DeIndexAllBuffers()}ScaleClipRects(A){this.native.ScaleClipRects(A)}}class mw{constructor(){this.FontData=null,this.FontDataOwnedByAtlas=!0,this.FontNo=0,this.SizePixels=0,this.OversampleH=3,this.OversampleV=1,this.PixelSnapH=!1,this.GlyphExtraSpacing=new WA(0,0),this.GlyphOffset=new WA(0,0),this.GlyphRanges=null,this.GlyphMinAdvanceX=0,this.GlyphMaxAdvanceX=Number.MAX_VALUE,this.MergeMode=!1,this.FontBuilderFlags=0,this.RasterizerMultiply=1,this.EllipsisChar=-1,this.DotChar=-1,this.Name="",this.DstFont=null}}class Kw{constructor(A=new mw){this.internal=A}get FontData(){return this.internal.FontData}get FontDataOwnedByAtlas(){return this.internal.FontDataOwnedByAtlas}get FontNo(){return this.internal.FontNo}get SizePixels(){return this.internal.SizePixels}get OversampleH(){return this.internal.OversampleH}get OversampleV(){return this.internal.OversampleV}get PixelSnapH(){return this.internal.PixelSnapH}get GlyphExtraSpacing(){return this.internal.GlyphExtraSpacing}get GlyphOffset(){return this.internal.GlyphOffset}get GlyphRanges(){return this.internal.GlyphRanges}get GlyphMinAdvanceX(){return this.internal.GlyphMinAdvanceX}get GlyphMaxAdvanceX(){return this.internal.GlyphMaxAdvanceX}get MergeMode(){return this.internal.MergeMode}get FontBuilderFlags(){return this.internal.FontBuilderFlags}get RasterizerMultiply(){return this.internal.RasterizerMultiply}get Name(){return this.internal.Name}set Name(A){this.internal.Name=A}get DstFont(){const A=this.internal.DstFont;return A&&new te(A)}}class Jw{constructor(){this.Colored=!1,this.Visible=!1,this.Codepoint=0,this.AdvanceX=0,this.X0=0,this.Y0=0,this.X1=1,this.Y1=1,this.U0=0,this.V0=0,this.U1=1,this.V1=1}}class Mt{constructor(A=new Jw){this.internal=A}get Colored(){return this.internal.Visible}get Visible(){return this.internal.Visible}get Codepoint(){return this.internal.Codepoint}get AdvanceX(){return this.internal.AdvanceX}get X0(){return this.internal.X0}get Y0(){return this.internal.Y0}get X1(){return this.internal.X1}get Y1(){return this.internal.Y1}get U0(){return this.internal.U0}get V0(){return this.internal.V0}get U1(){return this.internal.U1}get V1(){return this.internal.V1}}var An;(function(I){I[I.None=0]="None",I[I.NoPowerOfTwoHeight=1]="NoPowerOfTwoHeight",I[I.NoMouseCursors=2]="NoMouseCursors",I[I.NoBakedLines=4]="NoBakedLines"})(An||(An={}));class Hw{constructor(A){this.native=A}AddFontDefault(A=null){return new te(this.native.AddFontDefault(A))}AddFontFromMemoryTTF(A,g,C=null,e=null){return new te(this.native.AddFontFromMemoryTTF(new Uint8Array(A),g,C&&C.internal,e))}ClearTexData(){this.native.ClearTexData()}ClearInputData(){this.native.ClearInputData()}ClearFonts(){this.native.ClearFonts()}Clear(){this.native.Clear()}Build(){return this.native.Build()}IsBuilt(){return this.native.IsBuilt()}GetTexDataAsAlpha8(){return this.native.GetTexDataAsAlpha8()}GetTexDataAsRGBA32(){return this.native.GetTexDataAsRGBA32()}SetTexID(A){this.TexID=A}GetGlyphRangesDefault(){return this.native.GetGlyphRangesDefault()}GetGlyphRangesKorean(){return this.native.GetGlyphRangesKorean()}GetGlyphRangesJapanese(){return this.native.GetGlyphRangesJapanese()}GetGlyphRangesChineseFull(){return this.native.GetGlyphRangesChineseFull()}GetGlyphRangesChineseSimplifiedCommon(){return this.native.GetGlyphRangesChineseSimplifiedCommon()}GetGlyphRangesCyrillic(){return this.native.GetGlyphRangesCyrillic()}GetGlyphRangesThai(){return this.native.GetGlyphRangesThai()}GetGlyphRangesVietnamese(){return this.native.GetGlyphRangesVietnamese()}get Locked(){return this.native.Locked}set Locked(A){this.native.Locked=A}get Flags(){return this.native.Flags}set Flags(A){this.native.Flags=A}get TexID(){return Mg.getTexture(this.native.TexID)}set TexID(A){this.native.TexID=Mg.setTexture(A)}get TexDesiredWidth(){return this.native.TexDesiredWidth}set TexDesiredWidth(A){this.native.TexDesiredWidth=A}get TexGlyphPadding(){return this.native.TexGlyphPadding}set TexGlyphPadding(A){this.native.TexGlyphPadding=A}get TexWidth(){return this.native.TexWidth}get TexHeight(){return this.native.TexHeight}get TexUvScale(){return this.native.TexUvScale}get TexUvWhitePixel(){return this.native.TexUvWhitePixel}get Fonts(){const A=new so;return this.native.IterateFonts(g=>{A.push(new te(g))}),A}}class te{constructor(A){this.native=A}get FontSize(){return this.native.FontSize}get Scale(){return this.native.Scale}set Scale(A){this.native.Scale=A}get Glyphs(){const A=new so;return this.native.IterateGlyphs(g=>{A.push(new Mt(g))}),A}get FallbackGlyph(){const A=this.native.FallbackGlyph;return A&&new Mt(A)}set FallbackGlyph(A){this.native.FallbackGlyph=A&&A.internal}get FallbackAdvanceX(){return this.native.FallbackAdvanceX}get FallbackChar(){return this.native.FallbackChar}get EllipsisChar(){return this.native.EllipsisChar}get DotChar(){return this.native.DotChar}get ConfigDataCount(){return this.ConfigData.length}get ConfigData(){const A=[];return this.native.IterateConfigData(g=>{A.push(new Kw(g))}),A}get ContainerAtlas(){return null}get Ascent(){return this.native.Ascent}get Descent(){return this.native.Descent}get MetricsTotalSurface(){return this.native.MetricsTotalSurface}ClearOutputData(){return this.native.ClearOutputData()}BuildLookupTable(){return this.native.BuildLookupTable()}FindGlyph(A){const g=this.native.FindGlyph(A);return g&&new Mt(g)}FindGlyphNoFallback(A){const g=this.native.FindGlyphNoFallback(A);return g&&new Mt(g)}GetCharAdvance(A){return this.native.GetCharAdvance(A)}IsLoaded(){return this.native.IsLoaded()}GetDebugName(){return this.native.GetDebugName()}CalcTextSizeA(A,g,C,e,t=null,B=null){return this.native.CalcTextSizeA(A,g,C,t!==null?e.substring(0,t):e,B,new WA)}CalcWordWrapPositionA(A,g,C=null,e){return this.native.CalcWordWrapPositionA(A,C!==null?g.substring(0,C):g,e)}RenderChar(A,g,C,e,t){this.native.RenderChar(A.native,g,C,e,t)}RenderText(A,g,C,e,t,B,i=null,Q=0,E=!1){}IsGlyphRangeUnused(A,g){return!1}}var gn;(function(I){I[I.None=0]="None",I[I.IsPlatformWindow=1]="IsPlatformWindow",I[I.IsPlatformMonitor=2]="IsPlatformMonitor",I[I.OwnedByApp=4]="OwnedByApp"})(gn||(gn={}));class xw{constructor(){this.Alpha=1,this.DisabledAlpha=.6,this.WindowPadding=new WA(8,8),this.WindowRounding=7,this.WindowBorderSize=0,this.WindowMinSize=new WA(32,32),this.WindowTitleAlign=new WA(0,.5),this.WindowMenuButtonPosition=Kt.Left,this.ChildRounding=0,this.ChildBorderSize=1,this.PopupRounding=0,this.PopupBorderSize=1,this.FramePadding=new WA(4,3),this.FrameRounding=0,this.FrameBorderSize=0,this.ItemSpacing=new WA(8,4),this.ItemInnerSpacing=new WA(4,4),this.CellPadding=new WA(4,2),this.TouchExtraPadding=new WA(0,0),this.IndentSpacing=21,this.ColumnsMinSpacing=6,this.ScrollbarSize=16,this.ScrollbarRounding=9,this.GrabMinSize=10,this.GrabRounding=0,this.LogSliderDeadzone=4,this.TabRounding=0,this.TabBorderSize=0,this.TabMinWidthForCloseButton=0,this.ColorButtonPosition=Kt.Right,this.ButtonTextAlign=new WA(.5,.5),this.SelectableTextAlign=new WA(0,0),this.DisplayWindowPadding=new WA(22,22),this.DisplaySafeAreaPadding=new WA(4,4),this.MouseCursorScale=1,this.AntiAliasedLines=!0,this.AntiAliasedLinesUseTex=!0,this.AntiAliasedFill=!0,this.CurveTessellationTol=1.25,this.CircleTessellationMaxError=1.6,this.Colors=[];for(let e=0;e<_e.COUNT;++e)this.Colors[e]=new xg;const A=new Je(this),g=new bA.ImGuiStyle,C=new Je(g);C.Copy(A),bA.StyleColorsClassic(g),A.Copy(C),g.delete()}_getAt_Colors(A){return this.Colors[A]}_setAt_Colors(A,g){return this.Colors[A].Copy(g),!0}ScaleAllSizes(A){const g=new Je(this),C=new bA.ImGuiStyle,e=new Je(C);e.Copy(g),C.ScaleAllSizes(A),g.Copy(e),C.delete()}}class Je{constructor(A=new xw){this.internal=A,this.Colors=new Proxy([],{get:(g,C)=>C==="length"?_e.COUNT:this.internal._getAt_Colors(Number(C)),set:(g,C,e)=>this.internal._setAt_Colors(Number(C),e)})}get Alpha(){return this.internal.Alpha}set Alpha(A){this.internal.Alpha=A}get DisabledAlpha(){return this.internal.DisabledAlpha}set DisabledAlpha(A){this.internal.DisabledAlpha=A}get WindowPadding(){return this.internal.WindowPadding}get WindowRounding(){return this.internal.WindowRounding}set WindowRounding(A){this.internal.WindowRounding=A}get WindowBorderSize(){return this.internal.WindowBorderSize}set WindowBorderSize(A){this.internal.WindowBorderSize=A}get WindowMinSize(){return this.internal.WindowMinSize}get WindowTitleAlign(){return this.internal.WindowTitleAlign}get WindowMenuButtonPosition(){return this.internal.WindowMenuButtonPosition}set WindowMenuButtonPosition(A){this.internal.WindowMenuButtonPosition=A}get ChildRounding(){return this.internal.ChildRounding}set ChildRounding(A){this.internal.ChildRounding=A}get ChildBorderSize(){return this.internal.ChildBorderSize}set ChildBorderSize(A){this.internal.ChildBorderSize=A}get PopupRounding(){return this.internal.PopupRounding}set PopupRounding(A){this.internal.PopupRounding=A}get PopupBorderSize(){return this.internal.PopupBorderSize}set PopupBorderSize(A){this.internal.PopupBorderSize=A}get FramePadding(){return this.internal.FramePadding}get FrameRounding(){return this.internal.FrameRounding}set FrameRounding(A){this.internal.FrameRounding=A}get FrameBorderSize(){return this.internal.FrameBorderSize}set FrameBorderSize(A){this.internal.FrameBorderSize=A}get ItemSpacing(){return this.internal.ItemSpacing}get ItemInnerSpacing(){return this.internal.ItemInnerSpacing}get CellPadding(){return this.internal.CellPadding}get TouchExtraPadding(){return this.internal.TouchExtraPadding}get IndentSpacing(){return this.internal.IndentSpacing}set IndentSpacing(A){this.internal.IndentSpacing=A}get ColumnsMinSpacing(){return this.internal.ColumnsMinSpacing}set ColumnsMinSpacing(A){this.internal.ColumnsMinSpacing=A}get ScrollbarSize(){return this.internal.ScrollbarSize}set ScrollbarSize(A){this.internal.ScrollbarSize=A}get ScrollbarRounding(){return this.internal.ScrollbarRounding}set ScrollbarRounding(A){this.internal.ScrollbarRounding=A}get GrabMinSize(){return this.internal.GrabMinSize}set GrabMinSize(A){this.internal.GrabMinSize=A}get GrabRounding(){return this.internal.GrabRounding}set GrabRounding(A){this.internal.GrabRounding=A}get LogSliderDeadzone(){return this.internal.LogSliderDeadzone}set LogSliderDeadzone(A){this.internal.LogSliderDeadzone=A}get TabRounding(){return this.internal.TabRounding}set TabRounding(A){this.internal.TabRounding=A}get TabBorderSize(){return this.internal.TabBorderSize}set TabBorderSize(A){this.internal.TabBorderSize=A}get TabMinWidthForCloseButton(){return this.internal.TabMinWidthForCloseButton}set TabMinWidthForCloseButton(A){this.internal.TabMinWidthForCloseButton=A}get ColorButtonPosition(){return this.internal.ColorButtonPosition}set ColorButtonPosition(A){this.internal.ColorButtonPosition=A}get ButtonTextAlign(){return this.internal.ButtonTextAlign}get SelectableTextAlign(){return this.internal.SelectableTextAlign}get DisplayWindowPadding(){return this.internal.DisplayWindowPadding}get DisplaySafeAreaPadding(){return this.internal.DisplaySafeAreaPadding}get MouseCursorScale(){return this.internal.MouseCursorScale}set MouseCursorScale(A){this.internal.MouseCursorScale=A}get AntiAliasedLines(){return this.internal.AntiAliasedLines}set AntiAliasedLines(A){this.internal.AntiAliasedLines=A}get AntiAliasedLinesUseTex(){return this.internal.AntiAliasedLinesUseTex}set AntiAliasedLinesUseTex(A){this.internal.AntiAliasedLinesUseTex=A}get AntiAliasedFill(){return this.internal.AntiAliasedFill}set AntiAliasedFill(A){this.internal.AntiAliasedFill=A}get CurveTessellationTol(){return this.internal.CurveTessellationTol}set CurveTessellationTol(A){this.internal.CurveTessellationTol=A}get CircleTessellationMaxError(){return this.internal.CircleTessellationMaxError}set CircleTessellationMaxError(A){this.internal.CircleTessellationMaxError=A}Copy(A){this.Alpha=A.Alpha,this.DisabledAlpha=A.DisabledAlpha,this.WindowPadding.Copy(A.WindowPadding),this.WindowRounding=A.WindowRounding,this.WindowBorderSize=A.WindowBorderSize,this.WindowMinSize.Copy(A.WindowMinSize),this.WindowTitleAlign.Copy(A.WindowTitleAlign),this.WindowMenuButtonPosition=A.WindowMenuButtonPosition,this.ChildRounding=A.ChildRounding,this.ChildBorderSize=A.ChildBorderSize,this.PopupRounding=A.PopupRounding,this.PopupBorderSize=A.PopupBorderSize,this.FramePadding.Copy(A.FramePadding),this.FrameRounding=A.FrameRounding,this.FrameBorderSize=A.FrameBorderSize,this.ItemSpacing.Copy(A.ItemSpacing),this.ItemInnerSpacing.Copy(A.ItemInnerSpacing),this.CellPadding.Copy(A.CellPadding),this.TouchExtraPadding.Copy(A.TouchExtraPadding),this.IndentSpacing=A.IndentSpacing,this.ColumnsMinSpacing=A.ColumnsMinSpacing,this.ScrollbarSize=A.ScrollbarSize,this.ScrollbarRounding=A.ScrollbarRounding,this.GrabMinSize=A.GrabMinSize,this.GrabRounding=A.GrabRounding,this.LogSliderDeadzone=A.LogSliderDeadzone,this.TabRounding=A.TabRounding,this.TabBorderSize=A.TabBorderSize,this.TabMinWidthForCloseButton=A.TabMinWidthForCloseButton,this.ColorButtonPosition=A.ColorButtonPosition,this.ButtonTextAlign.Copy(A.ButtonTextAlign),this.DisplayWindowPadding.Copy(A.DisplayWindowPadding),this.DisplaySafeAreaPadding.Copy(A.DisplaySafeAreaPadding),this.MouseCursorScale=A.MouseCursorScale,this.AntiAliasedLines=A.AntiAliasedLines,this.AntiAliasedLinesUseTex=A.AntiAliasedLinesUseTex,this.AntiAliasedFill=A.AntiAliasedFill,this.CurveTessellationTol=A.CurveTessellationTol,this.CircleTessellationMaxError=A.CircleTessellationMaxError;for(let g=0;g<_e.COUNT;++g)this.Colors[g].Copy(A.Colors[g]);return this}ScaleAllSizes(A){this.internal.ScaleAllSizes(A)}}class vw{constructor(A){this.native=A,this.KeyMap=new Proxy([],{get:(g,C)=>C==="length"?ug.COUNT:this.native._getAt_KeyMap(Number(C)),set:(g,C,e)=>this.native._setAt_KeyMap(Number(C),e)}),this.MouseDown=new Proxy([],{get:(g,C)=>C==="length"?5:this.native._getAt_MouseDown(Number(C)),set:(g,C,e)=>this.native._setAt_MouseDown(Number(C),e)}),this.KeysDown=new Proxy([],{get:(g,C)=>C==="length"?512:this.native._getAt_KeysDown(Number(C)),set:(g,C,e)=>this.native._setAt_KeysDown(Number(C),e)}),this.NavInputs=new Proxy([],{get:(g,C)=>C==="length"?uA.COUNT:this.native._getAt_NavInputs(Number(C)),set:(g,C,e)=>this.native._setAt_NavInputs(Number(C),e)}),this.MouseClickedPos=new Proxy([],{get:(g,C)=>C==="length"?5:this.native._getAt_MouseClickedPos(Number(C))}),this.MouseDownDuration=new Proxy([],{get:(g,C)=>C==="length"?5:this.native._getAt_MouseDownDuration(Number(C))}),this.KeysDownDuration=new Proxy([],{get:(g,C)=>C==="length"?512:this.native._getAt_KeysDownDuration(Number(C))}),this.NavInputsDownDuration=new Proxy([],{get:(g,C)=>C==="length"?uA.COUNT:this.native._getAt_NavInputsDownDuration(Number(C))})}get ConfigFlags(){return this.native.ConfigFlags}set ConfigFlags(A){this.native.ConfigFlags=A}get BackendFlags(){return this.native.BackendFlags}set BackendFlags(A){this.native.BackendFlags=A}get DisplaySize(){return this.native.DisplaySize}get DeltaTime(){return this.native.DeltaTime}set DeltaTime(A){this.native.DeltaTime=A}get IniSavingRate(){return this.native.IniSavingRate}set IniSavingRate(A){this.native.IniSavingRate=A}get IniFilename(){return this.native.IniFilename}set IniFilename(A){this.native.IniFilename=A}get LogFilename(){return this.native.LogFilename}set LogFilename(A){this.native.LogFilename=A}get MouseDoubleClickTime(){return this.native.MouseDoubleClickTime}set MouseDoubleClickTime(A){this.native.MouseDoubleClickTime=A}get MouseDoubleClickMaxDist(){return this.native.MouseDoubleClickMaxDist}set MouseDoubleClickMaxDist(A){this.native.MouseDoubleClickMaxDist=A}get MouseDragThreshold(){return this.native.MouseDragThreshold}set MouseDragThreshold(A){this.native.MouseDragThreshold=A}get KeyRepeatDelay(){return this.native.KeyRepeatDelay}set KeyRepeatDelay(A){this.native.KeyRepeatDelay=A}get KeyRepeatRate(){return this.native.KeyRepeatRate}set KeyRepeatRate(A){this.native.KeyRepeatRate=A}get UserData(){return this.native.UserData}set UserData(A){this.native.UserData=A}get Fonts(){return new Hw(this.native.Fonts)}get FontGlobalScale(){return this.native.FontGlobalScale}set FontGlobalScale(A){this.native.FontGlobalScale=A}get FontAllowUserScaling(){return this.native.FontAllowUserScaling}set FontAllowUserScaling(A){this.native.FontAllowUserScaling=A}get FontDefault(){const A=this.native.FontDefault;return A===null?null:new te(A)}set FontDefault(A){this.native.FontDefault=A&&A.native}get DisplayFramebufferScale(){return this.native.DisplayFramebufferScale}get ConfigMacOSXBehaviors(){return this.native.ConfigMacOSXBehaviors}set ConfigMacOSXBehaviors(A){this.native.ConfigMacOSXBehaviors=A}get ConfigInputTextCursorBlink(){return this.native.ConfigInputTextCursorBlink}set ConfigInputTextCursorBlink(A){this.native.ConfigInputTextCursorBlink=A}get ConfigDragClickToInputText(){return this.native.ConfigDragClickToInputText}set ConfigDragClickToInputText(A){this.native.ConfigDragClickToInputText=A}get ConfigWindowsResizeFromEdges(){return this.native.ConfigWindowsResizeFromEdges}set ConfigWindowsResizeFromEdges(A){this.native.ConfigWindowsResizeFromEdges=A}get ConfigWindowsMoveFromTitleBarOnly(){return this.native.ConfigWindowsMoveFromTitleBarOnly}set ConfigWindowsMoveFromTitleBarOnly(A){this.native.ConfigWindowsMoveFromTitleBarOnly=A}get ConfigMemoryCompactTimer(){return this.native.ConfigMemoryCompactTimer}set ConfigMemoryCompactTimer(A){this.native.ConfigMemoryCompactTimer=A}get BackendPlatformName(){return this.native.BackendPlatformName}set BackendPlatformName(A){this.native.BackendPlatformName=A}get BackendRendererName(){return this.native.BackendRendererName}set BackendRendererName(A){this.native.BackendRendererName=A}get BackendPlatformUserData(){return this.native.BackendPlatformUserData}set BackendPlatformUserData(A){this.native.BackendPlatformUserData=A}get BackendRendererUserData(){return this.native.BackendRendererUserData}set BackendRendererUserData(A){this.native.BackendRendererUserData=A}get BackendLanguageUserData(){return this.native.BackendLanguageUserData}set BackendLanguageUserData(A){this.native.BackendLanguageUserData=A}get GetClipboardTextFn(){return this.native.GetClipboardTextFn}set GetClipboardTextFn(A){this.native.GetClipboardTextFn=A}get SetClipboardTextFn(){return this.native.SetClipboardTextFn}set SetClipboardTextFn(A){this.native.SetClipboardTextFn=A}get ClipboardUserData(){return this.native.ClipboardUserData}set ClipboardUserData(A){this.native.ClipboardUserData=A}get MousePos(){return this.native.MousePos}get MouseWheel(){return this.native.MouseWheel}set MouseWheel(A){this.native.MouseWheel=A}get MouseWheelH(){return this.native.MouseWheelH}set MouseWheelH(A){this.native.MouseWheelH=A}get MouseDrawCursor(){return this.native.MouseDrawCursor}set MouseDrawCursor(A){this.native.MouseDrawCursor=A}get KeyCtrl(){return this.native.KeyCtrl}set KeyCtrl(A){this.native.KeyCtrl=A}get KeyShift(){return this.native.KeyShift}set KeyShift(A){this.native.KeyShift=A}get KeyAlt(){return this.native.KeyAlt}set KeyAlt(A){this.native.KeyAlt=A}get KeySuper(){return this.native.KeySuper}set KeySuper(A){this.native.KeySuper=A}AddInputCharacter(A){this.native.AddInputCharacter(A)}AddInputCharacterUTF16(A){this.native.AddInputCharacterUTF16(A)}AddInputCharactersUTF8(A){this.native.AddInputCharactersUTF8(A)}ClearInputCharacters(){this.native.ClearInputCharacters()}get WantCaptureMouse(){return this.native.WantCaptureMouse}set WantCaptureMouse(A){this.native.WantCaptureMouse=A}get WantCaptureKeyboard(){return this.native.WantCaptureKeyboard}set WantCaptureKeyboard(A){this.native.WantCaptureKeyboard=A}get WantTextInput(){return this.native.WantTextInput}set WantTextInput(A){this.native.WantTextInput=A}get WantSetMousePos(){return this.native.WantSetMousePos}set WantSetMousePos(A){this.native.WantSetMousePos=A}get WantSaveIniSettings(){return this.native.WantSaveIniSettings}set WantSaveIniSettings(A){this.native.WantSaveIniSettings=A}get NavActive(){return this.native.NavActive}set NavActive(A){this.native.NavActive=A}get NavVisible(){return this.native.NavVisible}set NavVisible(A){this.native.NavVisible=A}get Framerate(){return this.native.Framerate}get MetricsRenderVertices(){return this.native.MetricsRenderVertices}get MetricsRenderIndices(){return this.native.MetricsRenderIndices}get MetricsRenderWindows(){return this.native.MetricsRenderWindows}get MetricsActiveWindows(){return this.native.MetricsActiveWindows}get MetricsActiveAllocations(){return this.native.MetricsActiveAllocations}get MouseDelta(){return this.native.MouseDelta}get WantCaptureMouseUnlessPopupClose(){return this.native.WantCaptureMouseUnlessPopupClose}set WantCaptureMouseUnlessPopupClose(A){this.native.WantCaptureMouseUnlessPopupClose=A}}class Mg{constructor(A){this.native=A}static getTexture(A){if(Mg.current_ctx===null)throw new Error;return Mg.current_ctx._getTexture(A)}static setTexture(A){if(Mg.current_ctx===null)throw new Error;return Mg.current_ctx._setTexture(A)}_getTexture(A){return Mg.textures[A]||null}_setTexture(A){let g=Mg.textures.indexOf(A);if(g===-1){for(let C=0;C<Mg.textures.length;++C)if(Mg.textures[C]===null)return Mg.textures[C]=A,C;g=Mg.textures.length,Mg.textures.push(A)}return g}}Mg.current_ctx=null;Mg.textures=[];function Yw(I=null){const A=new Mg(bA.CreateContext(I!==null?I.native:null));return Mg.current_ctx===null&&(Mg.current_ctx=A),A}function CI(){return new vw(bA.GetIO())}function Tw(){bA.NewFrame()}function bw(){bA.EndFrame()}function qw(){bA.Render()}function co(){const I=bA.GetDrawData();return I===null?null:new Gw(I)}function _w(I=null){if(I===null)bA.StyleColorsDark(null);else if(I.internal instanceof bA.ImGuiStyle)bA.StyleColorsDark(I.internal);else{const A=new bA.ImGuiStyle,g=new Je(A);g.Copy(I),bA.StyleColorsDark(A),I.Copy(g),A.delete()}}function In(I,A=null,g=0){if(A===null)return bA.Begin(I,null,g);if(Array.isArray(A))return bA.Begin(I,A,g);{const C=[A()],e=bA.Begin(I,C,g);return A(C[0]),e}}function Cn(){bA.End()}function en(I=0){return bA.IsWindowFocused(I)}function tn(I,A=0,g=WA.ZERO){bA.SetNextWindowPos(I,A,g)}function Bn(I,A=0){bA.SetNextWindowSize(I,A)}function Pw(I){bA.Text(I)}function Ow(I,A,g=1,C=0,e=0,t="%.3f",B=0){const i=pw(A),Q=bA.DragFloat3(I,i,g,C,e,t,B);return Rw(i,A),Q}function Vw(I,A,g=1,C=0,e=0,t="%.3f",B=0){const i=Lw(A),Q=bA.DragFloat4(I,i,g,C,e,t,B);return Fw(i,A),Q}function Ww(I,A,g=A instanceof qe?A.size:ro,C=0,e=null,t=null){const B=e&&(i=>e(new ao(i,t)))||null;if(Array.isArray(A))return bA.InputText(I,A,g,C,B,null);if(A instanceof qe){const i=[A.buffer],Q=Math.min(g,A.size),E=bA.InputText(I,i,Q,C,B,null);return A.buffer=i[0],E}else{const i=[A()],Q=bA.InputText(I,i,g+1,C,B,null);return A(i[0]),Q}}function zw(I,A,g=A instanceof qe?A.size:ro,C=WA.ZERO,e=0,t=null,B=null){const i=t&&(Q=>t(new ao(Q,B)))||null;if(Array.isArray(A))return bA.InputTextMultiline(I,A,g,C,e,i,null);if(A instanceof qe){const Q=[A.buffer],E=Math.min(g,A.size),n=bA.InputTextMultiline(I,Q,E,C,e,i,null);return A.buffer=Q[0],n}else{const Q=[A()],E=bA.InputTextMultiline(I,Q,g,C,e,i,null);return A(Q[0]),E}}function Zw(...I){if(typeof I[0]=="string")if(I.length===1){const A=I[0];return bA.TreeNode_A(A)}else{const A=I[0],g=I[1];return bA.TreeNode_B(A,g)}else{const A=I[0],g=I[1];return bA.TreeNode_C(A,g)}}function Xw(){bA.TreePop()}function jw(I,...A){if(A.length===0)return bA.Selectable_A(I,!1,0,WA.ZERO);if(typeof A[0]=="boolean"){const g=A[0],C=A[1]||0,e=A[2]||WA.ZERO;return bA.Selectable_A(I,g,C,e)}else{const g=A[0],C=A[1]||0,e=A[2]||WA.ZERO,t=Array.isArray(g)?g:[g()],B=bA.Selectable_B(I,t,C,e);return Array.isArray(g)||g(t[0]),B}}function $w(I=!0){bA.BeginDisabled(I)}function Af(){bA.EndDisabled()}function gf(){return bA.GetMouseCursor()}function If(I,A=0){bA.LoadIniSettingsFromMemory(I)}function Cf(I=null){return bA.SaveIniSettingsToMemory()}class CC{constructor(A,g){this.$private={},this.$noSerialize={display:null},Object.assign(this,A),g&&(this.name=A.name||g)}drawEditor(){const A=JSON.stringify(this,null,2),g=[A],C=new WA(0,-1);zw("JSON",g,A.length,C)}toJSON(){const A={...this};return delete A.$noSerialize,Object.assign(A,A.$private),delete A.$private,A}get display(){return this.$noSerialize.display}set display(A){this.$noSerialize.display=A}get name(){return this.$private.name}set name(A){this.$private.name=A,this.display&&(this.display.name=A)}}function Nt(I,A,g){Ww(I,(C=A[g])=>A[g]=C)}function Qn(I,A,g,C=.001,e=0,t=1){const B={};[B.x,B.y,B.z]=A[g],Ow(I,B,C,e,t),A[g]=[B.x,B.y,B.z]}function ef(I,A,g,C=.001,e=0,t=1){const B={};[B.x,B.y,B.z,B.w]=A[g],Vw(I,B,C,e,t),A[g]=[B.x,B.y,B.z,B.w]}class tf extends CC{constructor(A,g){super(A,g),this.generator=A.generator||"",this.copyright=A.copyright||"",this.version=A.version||"",this.minVersion=A.minVersion||""}drawEditor(){$w(),Nt("Generator",this,"generator"),Nt("Copyright",this,"copyright"),Nt("glTF Version",this,"version"),Af()}}class Bf extends CC{constructor(A,g){super(A,g),this.scale=A.scale||[0,0,0],this.translation=A.translation||[0,0,0],this.rotation=A.rotation||[0,0,0,1]}drawEditor(){Nt("Name",this,"name"),Qn("Position",this,"translation",.1,null,null),ef("Rotation",this,"rotation"),Qn("Scale",this,"scale"),CC.prototype.drawEditor.call(this)}get scale(){return this.$private.scale}set scale(A){this.$private.scale=A,this.display&&([this.display.scale.x,this.display.scale.y,this.display.scale.z]=A)}get translation(){return this.$private.translation}set translation(A){this.$private.translation=A,this.display&&([this.display.position.x,this.display.position.y,this.display.position.z]=A)}get rotation(){return this.$private.rotation}set rotation(A){this.display&&([this.display.quaternion.x,this.display.quaternion.y,this.display.quaternion.z,this.display.quaternion.w]=A,this.display.quaternion.normalize(),A=[this.display.quaternion.x,this.display.quaternion.y,this.display.quaternion.z,this.display.quaternion.w]),this.$private.rotation=A}}class Qf{constructor(){this._isGltfAdded=!1,this._isDisplayAdded=!1}isInitialized(){return this._isGltfAdded&&this._isDisplayAdded}setGltf(A){Object.assign(this,A),this.asset=new tf(this.asset||{},""),this.scenes=(this.scenes||[]).map((g,C)=>new CC(g,C.toString())),this.nodes=(this.nodes||[]).map((g,C)=>new Bf(g,C.toString())),this.meshes=(this.meshes||[]).map((g,C)=>new CC(g,C.toString())),this.materials=(this.materials||[]).map((g,C)=>new CC(g,C.toString())),this.textures=(this.textures||[]).map((g,C)=>new CC(g,C.toString())),this.cameras=(this.cameras||[]).map((g,C)=>new CC(g,C.toString())),this._isGltfAdded=!0}setDisplayModel(A){return Promise.resolve().then(()=>A.parser.associations).then(g=>{g.forEach((C,e)=>{e.isObject3D&&typeof C.nodes<"u"&&(this.nodes[C.nodes].display=e)})}).then(()=>{this._isDisplayAdded=!0})}}let Be="",og=null,L=null,uI=null,St=null,pt=null,ho=null,ZB=null,XB=-1,jB=-1,$B=-1,Ai=null,lo=null,mB=null,rg=null,En=0;function Ef(I){I.clipboardData&&I.clipboardData.setData("text/plain",Be),I.preventDefault()}function nf(I){I.clipboardData&&I.clipboardData.setData("text/plain",Be),I.preventDefault()}function of(I){I.clipboardData&&(Be=I.clipboardData.getData("text/plain")),I.preventDefault()}function nn(){og!==null&&(og.width=og.scrollWidth,og.height=og.scrollHeight)}function sf(I){console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",I.gamepad.index,I.gamepad.id,I.gamepad.buttons.length,I.gamepad.axes.length)}function rf(I){console.log("Gamepad disconnected at index %d: %s.",I.gamepad.index,I.gamepad.id)}function af(I){const A=CI();A.KeyCtrl=!1,A.KeyShift=!1,A.KeyAlt=!1,A.KeySuper=!1;for(let g=0;g<A.KeysDown.length;++g)A.KeysDown[g]=!1;for(let g=0;g<A.MouseDown.length;++g)A.MouseDown[g]=!1}const fi={NumpadEnter:176};function cf(I){const A=CI();A.KeyCtrl=I.ctrlKey,A.KeyShift=I.shiftKey,A.KeyAlt=I.altKey,A.KeySuper=I.metaKey;const g=fi[I.code]||I.keyCode;no(g>=0&&g<oo(A.KeysDown)),A.KeysDown[g]=!0,I.key==="Tab"&&I.preventDefault()}function hf(I){const A=CI();A.KeyCtrl=I.ctrlKey,A.KeyShift=I.shiftKey,A.KeyAlt=I.altKey,A.KeySuper=I.metaKey;const g=fi[I.code]||I.keyCode;no(g>=0&&g<oo(A.KeysDown)),A.KeysDown[g]=!1,A.WantCaptureKeyboard&&I.preventDefault()}function lf(I){const A=CI();A.AddInputCharacter(I.charCode),A.WantCaptureKeyboard&&I.preventDefault()}function Df(I){const A=CI();A.MousePos.x=I.offsetX,A.MousePos.y=I.offsetY,A.WantCaptureMouse&&I.preventDefault()}const Do=[0,2,1,3,4];function df(I){const A=CI();A.MousePos.x=I.offsetX,A.MousePos.y=I.offsetY,A.MouseDown[Do[I.button]]=!0}function wf(I){CI().WantCaptureMouse&&I.preventDefault()}function ff(I){const A=CI();A.MouseDown[Do[I.button]]=!1,A.WantCaptureMouse&&I.preventDefault()}function uf(I){const A=CI();let g=1;switch(I.deltaMode){case I.DOM_DELTA_PIXEL:g=.01;break;case I.DOM_DELTA_LINE:g=.2;break;case I.DOM_DELTA_PAGE:g=1;break}A.MouseWheelH=I.deltaX*g,A.MouseWheel=-I.deltaY*g,A.WantCaptureMouse&&I.preventDefault()}function yf(I){const A=CI();typeof window<"u"?(A.BackendPlatformName="imgui_impl_browser",If(window.localStorage.getItem("imgui.ini")||"")):A.BackendPlatformName="imgui_impl_console",typeof navigator<"u"&&(A.ConfigMacOSXBehaviors=navigator.platform.match(/Mac/)!==null),typeof document<"u"&&(document.body.addEventListener("copy",Ef),document.body.addEventListener("cut",nf),document.body.addEventListener("paste",of)),A.SetClipboardTextFn=(g,C)=>{Be=C,typeof navigator<"u"&&typeof navigator.clipboard<"u"&&navigator.clipboard.writeText(Be).then(()=>{})},A.GetClipboardTextFn=g=>Be,A.ClipboardUserData=null,typeof window<"u"&&(window.addEventListener("resize",nn),window.addEventListener("gamepadconnected",sf),window.addEventListener("gamepaddisconnected",rf)),typeof window<"u"&&(I instanceof HTMLCanvasElement&&(og=I,I=og.getContext("webgl2",{alpha:!1})||og.getContext("webgl",{alpha:!1})||og.getContext("2d")),typeof WebGL2RenderingContext<"u"&&I instanceof WebGL2RenderingContext?(A.BackendRendererName="imgui_impl_webgl2",og=og||I.canvas,L=I):typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext?(A.BackendRendererName="imgui_impl_webgl",og=og||I.canvas,L=I):typeof CanvasRenderingContext2D<"u"&&I instanceof CanvasRenderingContext2D&&(A.BackendRendererName="imgui_impl_2d",og=og||I.canvas,rg=I)),og!==null&&(nn(),og.style.touchAction="none",og.addEventListener("blur",af),og.addEventListener("keydown",cf),og.addEventListener("keyup",hf),og.addEventListener("keypress",lf),og.addEventListener("pointermove",Df),og.addEventListener("pointerdown",df),og.addEventListener("contextmenu",wf),og.addEventListener("pointerup",ff),og.addEventListener("wheel",uf)),A.BackendFlags|=Jt.HasMouseCursors,A.KeyMap[ug.Tab]=9,A.KeyMap[ug.LeftArrow]=37,A.KeyMap[ug.RightArrow]=39,A.KeyMap[ug.UpArrow]=38,A.KeyMap[ug.DownArrow]=40,A.KeyMap[ug.PageUp]=33,A.KeyMap[ug.PageDown]=34,A.KeyMap[ug.Home]=36,A.KeyMap[ug.End]=35,A.KeyMap[ug.Insert]=45,A.KeyMap[ug.Delete]=46,A.KeyMap[ug.Backspace]=8,A.KeyMap[ug.Space]=32,A.KeyMap[ug.Enter]=13,A.KeyMap[ug.Escape]=27,A.KeyMap[ug.KeyPadEnter]=fi.NumpadEnter,A.KeyMap[ug.A]=65,A.KeyMap[ug.C]=67,A.KeyMap[ug.V]=86,A.KeyMap[ug.X]=88,A.KeyMap[ug.Y]=89,A.KeyMap[ug.Z]=90,Rf()}function Mf(I){const A=CI();A.WantSaveIniSettings&&(A.WantSaveIniSettings=!1,typeof window<"u"&&window.localStorage.setItem("imgui.ini",Cf()));const g=og&&og.scrollWidth||640,C=og&&og.scrollHeight||480,e=L&&L.drawingBufferWidth||g,t=L&&L.drawingBufferHeight||C;A.DisplaySize.x=g,A.DisplaySize.y=C,A.DisplayFramebufferScale.x=g>0?e/g:0,A.DisplayFramebufferScale.y=C>0?t/C:0;const B=I-En;if(En=I,A.DeltaTime=B/1e3,A.WantSetMousePos&&console.log("TODO: MousePos",A.MousePos.x,A.MousePos.y),typeof document<"u")if(A.MouseDrawCursor)document.body.style.cursor="none";else switch(gf()){case QI.None:document.body.style.cursor="none";break;default:case QI.Arrow:document.body.style.cursor="default";break;case QI.TextInput:document.body.style.cursor="text";break;case QI.ResizeAll:document.body.style.cursor="all-scroll";break;case QI.ResizeNS:document.body.style.cursor="ns-resize";break;case QI.ResizeEW:document.body.style.cursor="ew-resize";break;case QI.ResizeNESW:document.body.style.cursor="nesw-resize";break;case QI.ResizeNWSE:document.body.style.cursor="nwse-resize";break;case QI.Hand:document.body.style.cursor="move";break;case QI.NotAllowed:document.body.style.cursor="not-allowed";break}for(let E=0;E<A.NavInputs.length;++E);if(A.ConfigFlags&zB.NavEnableGamepad){const E=typeof navigator<"u"&&typeof navigator.getGamepads=="function"?navigator.getGamepads():[];for(let n=0;n<E.length;++n){let D=function(S,N){o&&s>N&&o.buttons[N].pressed&&(A.NavInputs[S]=1)},d=function(S,N,m,k){if(!o)return;let P=h>N?o.axes[N]:m;P=(P-m)/(k-m),P>1&&(P=1),A.NavInputs[S]<P&&(A.NavInputs[S]=P)};var i=D,Q=d;const o=E[n];if(!o)continue;A.BackendFlags|=Jt.HasGamepad;const s=o.buttons.length,h=o.axes.length,a=o.id.match(/^([0-9a-f]{4})-([0-9a-f]{4})-.*$/),r=o.id.match(/^.*\(.*Vendor: ([0-9a-f]{4}) Product: ([0-9a-f]{4})\).*$/),p=a&&a[1]||r&&r[1]||"0000",y=a&&a[2]||r&&r[2]||"0000";switch(p+y){case"046dc216":D(uA.Activate,1),D(uA.Cancel,2),D(uA.Menu,0),D(uA.Input,3),d(uA.DpadLeft,4,-.3,-.9),d(uA.DpadRight,4,.3,.9),d(uA.DpadUp,5,-.3,-.9),d(uA.DpadDown,5,.3,.9),D(uA.FocusPrev,4),D(uA.FocusNext,5),D(uA.TweakSlow,6),D(uA.TweakFast,7),d(uA.LStickLeft,0,-.3,-.9),d(uA.LStickRight,0,.3,.9),d(uA.LStickUp,1,-.3,-.9),d(uA.LStickDown,1,.3,.9);break;case"046dc21d":D(uA.Activate,0),D(uA.Cancel,1),D(uA.Menu,2),D(uA.Input,3),D(uA.DpadLeft,14),D(uA.DpadRight,15),D(uA.DpadUp,12),D(uA.DpadDown,13),D(uA.FocusPrev,4),D(uA.FocusNext,5),d(uA.TweakSlow,6,.3,.9),d(uA.TweakFast,7,.3,.9),d(uA.LStickLeft,0,-.3,-.9),d(uA.LStickRight,0,.3,.9),d(uA.LStickUp,1,-.3,-.9),d(uA.LStickDown,1,.3,.9);break;case"2dc86001":case"2dc86101":D(uA.Activate,1),D(uA.Cancel,0),D(uA.Menu,4),D(uA.Input,3),d(uA.DpadLeft,6,-.3,-.9),d(uA.DpadRight,6,.3,.9),d(uA.DpadUp,7,-.3,-.9),d(uA.DpadDown,7,.3,.9),D(uA.FocusPrev,6),D(uA.FocusNext,7),D(uA.TweakSlow,8),D(uA.TweakFast,9),d(uA.LStickLeft,0,-.3,-.9),d(uA.LStickRight,0,.3,.9),d(uA.LStickUp,1,-.3,-.9),d(uA.LStickDown,1,.3,.9);break;default:D(uA.Activate,0),D(uA.Cancel,1),D(uA.Menu,2),D(uA.Input,3),D(uA.DpadLeft,14),D(uA.DpadRight,15),D(uA.DpadUp,12),D(uA.DpadDown,13),D(uA.FocusPrev,4),D(uA.FocusNext,5),D(uA.TweakSlow,6),D(uA.TweakFast,7),d(uA.LStickLeft,0,-.3,-.9),d(uA.LStickRight,0,.3,.9),d(uA.LStickUp,1,-.3,-.9),d(uA.LStickDown,1,.3,.9);break}}}}function Sf(I=co()){const A=CI();if(I===null)throw new Error;L||rg||console.log(I);const g=A.DisplaySize.x*A.DisplayFramebufferScale.x,C=A.DisplaySize.y*A.DisplayFramebufferScale.y;if(g===0||C===0)return;I.ScaleClipRects(A.DisplayFramebufferScale);const e=typeof WebGL2RenderingContext<"u"&&L instanceof WebGL2RenderingContext&&L||null,t=L&&L.getExtension("OES_vertex_array_object")||null,B=L&&L.getParameter(L.ACTIVE_TEXTURE)||null,i=L&&L.getParameter(L.CURRENT_PROGRAM)||null,Q=L&&L.getParameter(L.TEXTURE_BINDING_2D)||null,E=L&&L.getParameter(L.ARRAY_BUFFER_BINDING)||null,n=L&&L.getParameter(L.ELEMENT_ARRAY_BUFFER_BINDING)||null,o=e&&e.getParameter(e.VERTEX_ARRAY_BINDING)||L&&t&&L.getParameter(t.VERTEX_ARRAY_BINDING_OES)||null,s=L&&L.getParameter(L.VIEWPORT)||null,h=L&&L.getParameter(L.SCISSOR_BOX)||null,D=L&&L.getParameter(L.BLEND_SRC_RGB)||null,d=L&&L.getParameter(L.BLEND_DST_RGB)||null,a=L&&L.getParameter(L.BLEND_SRC_ALPHA)||null,r=L&&L.getParameter(L.BLEND_DST_ALPHA)||null,p=L&&L.getParameter(L.BLEND_EQUATION_RGB)||null,y=L&&L.getParameter(L.BLEND_EQUATION_ALPHA)||null,S=L&&L.getParameter(L.BLEND)||null,N=L&&L.getParameter(L.CULL_FACE)||null,m=L&&L.getParameter(L.DEPTH_TEST)||null,k=L&&L.getParameter(L.SCISSOR_TEST)||null,P=e&&e.createVertexArray()||t&&t.createVertexArrayOES();L&&L.enable(L.BLEND),L&&L.blendEquation(L.FUNC_ADD),L&&L.blendFunc(L.SRC_ALPHA,L.ONE_MINUS_SRC_ALPHA),L&&L.disable(L.CULL_FACE),L&&L.disable(L.DEPTH_TEST),L&&L.enable(L.SCISSOR_TEST),L&&L.viewport(0,0,g,C);const u=I.DisplayPos.x,F=I.DisplayPos.x+I.DisplaySize.x,tA=I.DisplayPos.y,iA=I.DisplayPos.y+I.DisplaySize.y,Y=new Float32Array([2/(F-u),0,0,0,0,2/(tA-iA),0,0,0,0,-1,0,(F+u)/(u-F),(tA+iA)/(iA-tA),0,1]);L&&L.useProgram(uI),L&&L.uniform1i(ho,0),L&&ZB&&L.uniformMatrix4fv(ZB,!1,Y),e&&e.bindVertexArray(P)||t&&t.bindVertexArrayOES(P),L&&L.bindBuffer(L.ARRAY_BUFFER,Ai),L&&L.enableVertexAttribArray(XB),L&&L.enableVertexAttribArray(jB),L&&L.enableVertexAttribArray($B),L&&L.vertexAttribPointer(XB,2,L.FLOAT,!1,fI,Nw),L&&L.vertexAttribPointer(jB,2,L.FLOAT,!1,fI,Uw),L&&L.vertexAttribPointer($B,4,L.UNSIGNED_BYTE,!0,fI,kw);const v=I.DisplayPos,j=L&&L.UNSIGNED_SHORT||0;I.IterateDrawLists($=>{L||rg||console.log($),L||rg||console.log("VtxBuffer.length",$.VtxBuffer.length),L||rg||console.log("IdxBuffer.length",$.IdxBuffer.length),L&&L.bindBuffer(L.ARRAY_BUFFER,Ai),L&&L.bufferData(L.ARRAY_BUFFER,$.VtxBuffer,L.STREAM_DRAW),L&&L.bindBuffer(L.ELEMENT_ARRAY_BUFFER,lo),L&&L.bufferData(L.ELEMENT_ARRAY_BUFFER,$.IdxBuffer,L.STREAM_DRAW),$.IterateDrawCmds(_=>{if(L||rg||console.log(_),L||rg||console.log("ElemCount",_.ElemCount),L||rg||console.log("ClipRect",_.ClipRect.x,C-_.ClipRect.w,_.ClipRect.z-_.ClipRect.x,_.ClipRect.w-_.ClipRect.y),L||rg||console.log("TextureId",_.TextureId),!L&&!rg){console.log("i: pos.x pos.y uv.x uv.y col");for(let W=0;W<Math.min(3,_.ElemCount);++W){const BA=new hC($.VtxBuffer.buffer,$.VtxBuffer.byteOffset+W*fI);console.log(`${W}: ${BA.pos[0].toFixed(2)} ${BA.pos[1].toFixed(2)} ${BA.uv[0].toFixed(5)} ${BA.uv[1].toFixed(5)} ${("00000000"+BA.col[0].toString(16)).substr(-8)}`)}}if(_.UserCallback!==null)_.UserCallback($,_);else{const W=new xg(_.ClipRect.x-v.x,_.ClipRect.y-v.y,_.ClipRect.z-v.x,_.ClipRect.w-v.y);if(W.x<g&&W.y<C&&W.z>=0&&W.w>=0&&(L&&L.scissor(W.x,C-W.w,W.z-W.x,W.w-W.y),L&&L.activeTexture(L.TEXTURE0),L&&L.bindTexture(L.TEXTURE_2D,_.TextureId),L&&L.drawElements(L.TRIANGLES,_.ElemCount,j,_.IdxOffset*$E),rg)){rg.save(),rg.beginPath(),rg.rect(W.x,W.y,W.z-W.x,W.w-W.y),rg.clip();const BA=new Uint16Array($.IdxBuffer.buffer,$.IdxBuffer.byteOffset+_.IdxOffset*$E);for(let gA=0;gA<_.ElemCount;gA+=3){const q=BA[gA+0],Z=BA[gA+1],DA=BA[gA+2],EA=new hC($.VtxBuffer.buffer,$.VtxBuffer.byteOffset+q*fI),dA=new hC($.VtxBuffer.buffer,$.VtxBuffer.byteOffset+Z*fI),UA=new hC($.VtxBuffer.buffer,$.VtxBuffer.byteOffset+DA*fI),TA=BA[gA+3],pA=BA[gA+4],Ig=BA[gA+5],mg=new hC($.VtxBuffer.buffer,$.VtxBuffer.byteOffset+TA*fI),OA=new hC($.VtxBuffer.buffer,$.VtxBuffer.byteOffset+pA*fI),H=new hC($.VtxBuffer.buffer,$.VtxBuffer.byteOffset+Ig*fI);let ng=!0,wA=EA,JA=EA,RA=EA,ZA=EA;for(const SA of[dA,UA,mg,OA,H]){let xA=!1;SA.pos[0]<=wA.pos[0]&&SA.pos[1]<=wA.pos[1]&&(wA=SA,xA=!0),SA.pos[0]<=JA.pos[0]&&SA.pos[1]>=JA.pos[1]&&(JA=SA,xA=!0),SA.pos[0]>=RA.pos[0]&&SA.pos[1]<=RA.pos[1]&&(RA=SA,xA=!0),SA.pos[0]>=ZA.pos[0]&&SA.pos[1]>=ZA.pos[1]&&(ZA=SA,xA=!0),xA||(ng=!1)}if(ng=ng&&wA.pos[0]===JA.pos[0],ng=ng&&RA.pos[0]===ZA.pos[0],ng=ng&&wA.pos[1]===RA.pos[1],ng=ng&&JA.pos[1]===ZA.pos[1],ng){if(wA.uv[0]===ZA.uv[0]||wA.uv[1]===ZA.uv[1])rg.beginPath(),rg.rect(wA.pos[0],wA.pos[1],ZA.pos[0]-wA.pos[0],ZA.pos[1]-wA.pos[1]),rg.fillStyle=`rgba(${EA.col[0]>>0&255}, ${EA.col[0]>>8&255}, ${EA.col[0]>>16&255}, ${(EA.col[0]>>24&255)/255})`,rg.fill();else{const SA=_.TextureId,xA=SA instanceof HTMLVideoElement?SA.videoWidth:SA.width,Qg=SA instanceof HTMLVideoElement?SA.videoHeight:SA.height;SA&&rg.drawImage(SA,wA.uv[0]*xA,wA.uv[1]*Qg,(ZA.uv[0]-wA.uv[0])*xA,(ZA.uv[1]-wA.uv[1])*Qg,wA.pos[0],wA.pos[1],ZA.pos[0]-wA.pos[0],ZA.pos[1]-wA.pos[1])}gA+=3}else rg.beginPath(),rg.moveTo(EA.pos[0],EA.pos[1]),rg.lineTo(dA.pos[0],dA.pos[1]),rg.lineTo(UA.pos[0],UA.pos[1]),rg.closePath(),rg.fillStyle=`rgba(${EA.col[0]>>0&255}, ${EA.col[0]>>8&255}, ${EA.col[0]>>16&255}, ${(EA.col[0]>>24&255)/255})`,rg.fill()}rg.restore()}}})}),e&&e.deleteVertexArray(P)||t&&t.deleteVertexArrayOES(P),L&&i!==null&&L.useProgram(i),L&&Q!==null&&L.bindTexture(L.TEXTURE_2D,Q),L&&B!==null&&L.activeTexture(B),e&&e.bindVertexArray(o)||t&&t.bindVertexArrayOES(o),L&&E!==null&&L.bindBuffer(L.ARRAY_BUFFER,E),L&&n!==null&&L.bindBuffer(L.ELEMENT_ARRAY_BUFFER,n),L&&p!==null&&y!==null&&L.blendEquationSeparate(p,y),L&&D!==null&&a!==null&&d!==null&&r!==null&&L.blendFuncSeparate(D,a,d,r),L&&(S?L.enable(L.BLEND):L.disable(L.BLEND)),L&&(N?L.enable(L.CULL_FACE):L.disable(L.CULL_FACE)),L&&(m?L.enable(L.DEPTH_TEST):L.disable(L.DEPTH_TEST)),L&&(k?L.enable(L.SCISSOR_TEST):L.disable(L.SCISSOR_TEST)),L&&s!==null&&L.viewport(s[0],s[1],s[2],s[3]),L&&h!==null&&L.scissor(h[0],h[1],h[2],h[3])}function pf(){const I=CI(),A=L&&L.getParameter(L.TEXTURE_BINDING_2D),{width:g,height:C,pixels:e}=I.Fonts.GetTexDataAsRGBA32();if(mB=L&&L.createTexture(),L&&L.bindTexture(L.TEXTURE_2D,mB),L&&L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,L.LINEAR),L&&L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,L.LINEAR),L&&L.texImage2D(L.TEXTURE_2D,0,L.RGBA,g,C,0,L.RGBA,L.UNSIGNED_BYTE,e),I.Fonts.TexID=mB||{foo:"bar"},rg){const t=document.createElement("canvas");t.width=g,t.height=C;const B=t.getContext("2d");if(B===null)throw new Error;const i=B.getImageData(0,0,g,C);i.data.set(e),B.putImageData(i,0,0),I.Fonts.TexID=t}L&&A&&L.bindTexture(L.TEXTURE_2D,A)}function Rf(){const I=["uniform mat4 ProjMtx;","attribute vec2 Position;","attribute vec2 UV;","attribute vec4 Color;","varying vec2 Frag_UV;","varying vec4 Frag_Color;","void main() {","	Frag_UV = UV;","	Frag_Color = Color;","	gl_Position = ProjMtx * vec4(Position.xy,0,1);","}"],A=["precision mediump float;","uniform sampler2D Texture;","varying vec2 Frag_UV;","varying vec4 Frag_Color;","void main() {","	gl_FragColor = Frag_Color * texture2D(Texture, Frag_UV);","}"];uI=L&&L.createProgram(),St=L&&L.createShader(L.VERTEX_SHADER),pt=L&&L.createShader(L.FRAGMENT_SHADER),L&&L.shaderSource(St,I.join(`
`)),L&&L.shaderSource(pt,A.join(`
`)),L&&L.compileShader(St),L&&L.compileShader(pt),L&&L.attachShader(uI,St),L&&L.attachShader(uI,pt),L&&L.linkProgram(uI),ho=L&&L.getUniformLocation(uI,"Texture"),ZB=L&&L.getUniformLocation(uI,"ProjMtx"),XB=L&&L.getAttribLocation(uI,"Position")||0,jB=L&&L.getAttribLocation(uI,"UV")||0,$B=L&&L.getAttribLocation(uI,"Color")||0,Ai=L&&L.createBuffer(),lo=L&&L.createBuffer(),pf()}class Lf{constructor(A,g){this.canvas=A,this.dataState=g,this.selection=null,this.width=100,this.height=100,this._isActive=!1}async init(){await Sw(),Yw(),_w(),yf(this.canvas)}render(){Sf(co())}resize(A,g){this.width=A,this.height=g}drawAssetPanel(){const A=["scenes","nodes","meshes","materials","textures","cameras"];tn(new WA(0,0)),Bn(new WA(200,this.height)),In("Assets",null,WB.AlwaysAutoResize),en()&&(this._isActive=!0),this.dataState.isInitialized()?A.forEach(g=>{Zw(g.toUpperCase())&&((this.dataState[g]||[]).forEach((C,e)=>{const t=C.name||e.toString();jw(t)&&(this.selection=C)}),Xw())}):Pw("Loading File"),Cn()}drawDetailPanel(){tn(new WA(this.width-300,0)),Bn(new WA(300,this.height)),In("Details"),en()&&(this._isActive=!0),this.selection&&this.selection.drawEditor(),Cn()}update(A){this._isActive=!1,this.dataState.isInitialized()&&!this.selection&&(this.selection=this.dataState.asset),Mf(A),Tw(),this.drawAssetPanel(),this.drawDetailPanel(),bw(),qw()}isActive(){return this._isActive}}function Ff(I,A){const g=new Gd;return new Promise((C,e)=>{g.parse(I,A,C,e)})}class Nf{constructor(A){this.clock=new ud,this.dataState=new Qf,this.renderer=new rw(A),this.gui=new Lf(A,this.dataState)}async init(){await this.gui.init()}load(A,g){return Promise.resolve(A).then(C=>(this.dataState.setGltf(C),C)).then(C=>Ff(C,g)).then(C=>{this.renderer.scene.add(C.scene);const e=new jn;return e.position.set(0,1,0),e.intensity=5,this.renderer.scene.add(e),C}).then(C=>this.dataState.setDisplayModel(C))}update(){if(this.gui.update(this.clock.elapsedTime),!this.gui.isActive()){const A=this.clock.getDelta();this.renderer.controls.update(A)}this.renderer.update(),this.gui.render()}resize(A,g){this.renderer.resize(A,g),this.gui.resize(A,g)}}const Uf=document.getElementById("viewport"),Pe=new Nf(Uf);window.onresize=()=>Pe.resize(window.innerWidth,window.innerHeight);Pe.resize(window.innerWidth,window.innerHeight);function wo(){Pe.update(),requestAnimationFrame(wo)}Promise.resolve().then(()=>Pe.init()).then(()=>{const I="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Sponza/glTF/";return fetch(`${I}/Sponza.gltf`).then(A=>A.json()).then(A=>Pe.load(A,I))}).then(()=>{wo()});