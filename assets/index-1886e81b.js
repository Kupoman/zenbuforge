(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const I of document.querySelectorAll('link[rel="modulepreload"]'))e(I);new MutationObserver(I=>{for(const C of I)if(C.type==="childList")for(const i of C.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function g(I){const C={};return I.integrity&&(C.integrity=I.integrity),I.referrerPolicy&&(C.referrerPolicy=I.referrerPolicy),I.crossOrigin==="use-credentials"?C.credentials="include":I.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function e(I){if(I.ep)return;I.ep=!0;const C=g(I);fetch(I.href,C)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kn="161",Xh=0,mE=1,jh=2,mr=1,$h=2,ae=3,we=0,st=1,Ot=2,ve=0,AC=1,KE=2,JE=3,HE=4,Al=5,CI=100,gl=101,tl=102,vE=103,xE=104,el=200,Il=201,Cl=202,il=203,jQ=204,$Q=205,Bl=206,Ql=207,nl=208,El=209,ol=210,sl=211,rl=212,al=213,cl=214,hl=0,ll=1,Dl=2,QB=3,dl=4,fl=5,ul=6,wl=7,Kr=0,yl=1,pl=2,xe=0,Sl=1,Ml=2,Rl=3,Ll=4,Fl=5,Nl=6,YE="attached",Ul="detached",Jr=300,BC=301,QC=302,An=303,gn=304,RB=306,nC=1e3,Rt=1001,nB=1002,Og=1003,tn=1004,WI=1005,et=1006,AB=1007,he=1008,Ye=1009,kl=1010,Gl=1011,Jn=1012,Hr=1013,Ke=1014,Vt=1015,PC=1016,vr=1017,xr=1018,QI=1020,ml=1021,Lt=1023,Kl=1024,Jl=1025,nI=1026,EC=1027,Hl=1028,Yr=1029,vl=1030,br=1031,Tr=1033,AQ=33776,gQ=33777,tQ=33778,eQ=33779,bE=35840,TE=35841,_E=35842,qE=35843,_r=36196,PE=37492,OE=37496,VE=37808,WE=37809,zE=37810,ZE=37811,XE=37812,jE=37813,$E=37814,Ao=37815,go=37816,to=37817,eo=37818,Io=37819,Co=37820,io=37821,IQ=36492,Bo=36494,Qo=36495,xl=36283,no=36284,Eo=36285,oo=36286,OC=2300,oC=2301,CQ=2302,so=2400,ro=2401,ao=2402,Yl=2500,bl=0,qr=1,en=2,Pr=3e3,EI=3001,Tl=3200,_l=3201,Or=0,ql=1,Ft="",vg="srgb",kt="srgb-linear",Hn="display-p3",LB="display-p3-linear",EB="linear",Ng="srgb",oB="rec709",sB="p3",UI=7680,co=519,Pl=512,Ol=513,Vl=514,Vr=515,Wl=516,zl=517,Zl=518,Xl=519,In=35044,ho="300 es",Cn=1035,le=2e3,rB=2001;class uI{addEventListener(A,g){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[A]===void 0&&(e[A]=[]),e[A].indexOf(g)===-1&&e[A].push(g)}hasEventListener(A,g){if(this._listeners===void 0)return!1;const e=this._listeners;return e[A]!==void 0&&e[A].indexOf(g)!==-1}removeEventListener(A,g){if(this._listeners===void 0)return;const I=this._listeners[A];if(I!==void 0){const C=I.indexOf(g);C!==-1&&I.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const e=this._listeners[A.type];if(e!==void 0){A.target=this;const I=e.slice(0);for(let C=0,i=I.length;C<i;C++)I[C].call(this,A);A.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lo=1234567;const YC=Math.PI/180,VC=180/Math.PI;function Yt(){const t=Math.random()*4294967295|0,A=Math.random()*4294967295|0,g=Math.random()*4294967295|0,e=Math.random()*4294967295|0;return(gt[t&255]+gt[t>>8&255]+gt[t>>16&255]+gt[t>>24&255]+"-"+gt[A&255]+gt[A>>8&255]+"-"+gt[A>>16&15|64]+gt[A>>24&255]+"-"+gt[g&63|128]+gt[g>>8&255]+"-"+gt[g>>16&255]+gt[g>>24&255]+gt[e&255]+gt[e>>8&255]+gt[e>>16&255]+gt[e>>24&255]).toLowerCase()}function It(t,A,g){return Math.max(A,Math.min(g,t))}function vn(t,A){return(t%A+A)%A}function jl(t,A,g,e,I){return e+(t-A)*(I-e)/(g-A)}function $l(t,A,g){return t!==A?(g-t)/(A-t):0}function bC(t,A,g){return(1-g)*t+g*A}function AD(t,A,g,e){return bC(t,A,1-Math.exp(-g*e))}function gD(t,A=1){return A-Math.abs(vn(t,A*2)-A)}function tD(t,A,g){return t<=A?0:t>=g?1:(t=(t-A)/(g-A),t*t*(3-2*t))}function eD(t,A,g){return t<=A?0:t>=g?1:(t=(t-A)/(g-A),t*t*t*(t*(t*6-15)+10))}function ID(t,A){return t+Math.floor(Math.random()*(A-t+1))}function CD(t,A){return t+Math.random()*(A-t)}function iD(t){return t*(.5-Math.random())}function BD(t){t!==void 0&&(lo=t);let A=lo+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function QD(t){return t*YC}function nD(t){return t*VC}function Bn(t){return(t&t-1)===0&&t!==0}function ED(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function aB(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function oD(t,A,g,e,I){const C=Math.cos,i=Math.sin,B=C(g/2),Q=i(g/2),n=C((A+e)/2),E=i((A+e)/2),o=C((A-e)/2),s=i((A-e)/2),r=C((e-A)/2),h=i((e-A)/2);switch(I){case"XYX":t.set(B*E,Q*o,Q*s,B*n);break;case"YZY":t.set(Q*s,B*E,Q*o,B*n);break;case"ZXZ":t.set(Q*o,Q*s,B*E,B*n);break;case"XZX":t.set(B*E,Q*h,Q*r,B*n);break;case"YXY":t.set(Q*r,B*E,Q*h,B*n);break;case"ZYZ":t.set(Q*h,Q*r,B*E,B*n);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+I)}}function vt(t,A){switch(A.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ug(t,A){switch(A.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const gB={DEG2RAD:YC,RAD2DEG:VC,generateUUID:Yt,clamp:It,euclideanModulo:vn,mapLinear:jl,inverseLerp:$l,lerp:bC,damp:AD,pingpong:gD,smoothstep:tD,smootherstep:eD,randInt:ID,randFloat:CD,randFloatSpread:iD,seededRandom:BD,degToRad:QD,radToDeg:nD,isPowerOfTwo:Bn,ceilPowerOfTwo:ED,floorPowerOfTwo:aB,setQuaternionFromProperEuler:oD,normalize:ug,denormalize:vt};class Eg{constructor(A=0,g=0){Eg.prototype.isVector2=!0,this.x=A,this.y=g}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,g){return this.x=A,this.y=g,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const g=this.x,e=this.y,I=A.elements;return this.x=I[0]*g+I[3]*e+I[6],this.y=I[1]*g+I[4]*e+I[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this}clampLength(A,g){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(A,Math.min(g,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const g=Math.sqrt(this.lengthSq()*A.lengthSq());if(g===0)return Math.PI/2;const e=this.dot(A)/g;return Math.acos(It(e,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const g=this.x-A.x,e=this.y-A.y;return g*g+e*e}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this}lerpVectors(A,g,e){return this.x=A.x+(g.x-A.x)*e,this.y=A.y+(g.y-A.y)*e,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this}rotateAround(A,g){const e=Math.cos(g),I=Math.sin(g),C=this.x-A.x,i=this.y-A.y;return this.x=C*e-i*I+A.x,this.y=C*I+i*e+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gg{constructor(A,g,e,I,C,i,B,Q,n){gg.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,g,e,I,C,i,B,Q,n)}set(A,g,e,I,C,i,B,Q,n){const E=this.elements;return E[0]=A,E[1]=I,E[2]=B,E[3]=g,E[4]=C,E[5]=Q,E[6]=e,E[7]=i,E[8]=n,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const g=this.elements,e=A.elements;return g[0]=e[0],g[1]=e[1],g[2]=e[2],g[3]=e[3],g[4]=e[4],g[5]=e[5],g[6]=e[6],g[7]=e[7],g[8]=e[8],this}extractBasis(A,g,e){return A.setFromMatrix3Column(this,0),g.setFromMatrix3Column(this,1),e.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const g=A.elements;return this.set(g[0],g[4],g[8],g[1],g[5],g[9],g[2],g[6],g[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,g){const e=A.elements,I=g.elements,C=this.elements,i=e[0],B=e[3],Q=e[6],n=e[1],E=e[4],o=e[7],s=e[2],r=e[5],h=e[8],d=I[0],a=I[3],c=I[6],R=I[1],y=I[4],M=I[7],K=I[2],G=I[5],U=I[8];return C[0]=i*d+B*R+Q*K,C[3]=i*a+B*y+Q*G,C[6]=i*c+B*M+Q*U,C[1]=n*d+E*R+o*K,C[4]=n*a+E*y+o*G,C[7]=n*c+E*M+o*U,C[2]=s*d+r*R+h*K,C[5]=s*a+r*y+h*G,C[8]=s*c+r*M+h*U,this}multiplyScalar(A){const g=this.elements;return g[0]*=A,g[3]*=A,g[6]*=A,g[1]*=A,g[4]*=A,g[7]*=A,g[2]*=A,g[5]*=A,g[8]*=A,this}determinant(){const A=this.elements,g=A[0],e=A[1],I=A[2],C=A[3],i=A[4],B=A[5],Q=A[6],n=A[7],E=A[8];return g*i*E-g*B*n-e*C*E+e*B*Q+I*C*n-I*i*Q}invert(){const A=this.elements,g=A[0],e=A[1],I=A[2],C=A[3],i=A[4],B=A[5],Q=A[6],n=A[7],E=A[8],o=E*i-B*n,s=B*Q-E*C,r=n*C-i*Q,h=g*o+e*s+I*r;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/h;return A[0]=o*d,A[1]=(I*n-E*e)*d,A[2]=(B*e-I*i)*d,A[3]=s*d,A[4]=(E*g-I*Q)*d,A[5]=(I*C-B*g)*d,A[6]=r*d,A[7]=(e*Q-n*g)*d,A[8]=(i*g-e*C)*d,this}transpose(){let A;const g=this.elements;return A=g[1],g[1]=g[3],g[3]=A,A=g[2],g[2]=g[6],g[6]=A,A=g[5],g[5]=g[7],g[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const g=this.elements;return A[0]=g[0],A[1]=g[3],A[2]=g[6],A[3]=g[1],A[4]=g[4],A[5]=g[7],A[6]=g[2],A[7]=g[5],A[8]=g[8],this}setUvTransform(A,g,e,I,C,i,B){const Q=Math.cos(C),n=Math.sin(C);return this.set(e*Q,e*n,-e*(Q*i+n*B)+i+A,-I*n,I*Q,-I*(-n*i+Q*B)+B+g,0,0,1),this}scale(A,g){return this.premultiply(iQ.makeScale(A,g)),this}rotate(A){return this.premultiply(iQ.makeRotation(-A)),this}translate(A,g){return this.premultiply(iQ.makeTranslation(A,g)),this}makeTranslation(A,g){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,g,0,0,1),this}makeRotation(A){const g=Math.cos(A),e=Math.sin(A);return this.set(g,-e,0,e,g,0,0,0,1),this}makeScale(A,g){return this.set(A,0,0,0,g,0,0,0,1),this}equals(A){const g=this.elements,e=A.elements;for(let I=0;I<9;I++)if(g[I]!==e[I])return!1;return!0}fromArray(A,g=0){for(let e=0;e<9;e++)this.elements[e]=A[e+g];return this}toArray(A=[],g=0){const e=this.elements;return A[g]=e[0],A[g+1]=e[1],A[g+2]=e[2],A[g+3]=e[3],A[g+4]=e[4],A[g+5]=e[5],A[g+6]=e[6],A[g+7]=e[7],A[g+8]=e[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const iQ=new gg;function Wr(t){for(let A=t.length-1;A>=0;--A)if(t[A]>=65535)return!0;return!1}function WC(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sD(){const t=WC("canvas");return t.style.display="block",t}const Do={};function oI(t){t in Do||(Do[t]=!0,console.warn(t))}const fo=new gg().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uo=new gg().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fi={[kt]:{transfer:EB,primaries:oB,toReference:t=>t,fromReference:t=>t},[vg]:{transfer:Ng,primaries:oB,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[LB]:{transfer:EB,primaries:sB,toReference:t=>t.applyMatrix3(uo),fromReference:t=>t.applyMatrix3(fo)},[Hn]:{transfer:Ng,primaries:sB,toReference:t=>t.convertSRGBToLinear().applyMatrix3(uo),fromReference:t=>t.applyMatrix3(fo).convertLinearToSRGB()}},rD=new Set([kt,LB]),dg={enabled:!0,_workingColorSpace:kt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!rD.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,A,g){if(this.enabled===!1||A===g||!A||!g)return t;const e=fi[A].toReference,I=fi[g].fromReference;return I(e(t))},fromWorkingColorSpace:function(t,A){return this.convert(t,this._workingColorSpace,A)},toWorkingColorSpace:function(t,A){return this.convert(t,A,this._workingColorSpace)},getPrimaries:function(t){return fi[t].primaries},getTransfer:function(t){return t===Ft?EB:fi[t].transfer}};function gC(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function BQ(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kI;class zr{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let g;if(A instanceof HTMLCanvasElement)g=A;else{kI===void 0&&(kI=WC("canvas")),kI.width=A.width,kI.height=A.height;const e=kI.getContext("2d");A instanceof ImageData?e.putImageData(A,0,0):e.drawImage(A,0,0,A.width,A.height),g=kI}return g.width>2048||g.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),g.toDataURL("image/jpeg",.6)):g.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const g=WC("canvas");g.width=A.width,g.height=A.height;const e=g.getContext("2d");e.drawImage(A,0,0,A.width,A.height);const I=e.getImageData(0,0,A.width,A.height),C=I.data;for(let i=0;i<C.length;i++)C[i]=gC(C[i]/255)*255;return e.putImageData(I,0,0),g}else if(A.data){const g=A.data.slice(0);for(let e=0;e<g.length;e++)g instanceof Uint8Array||g instanceof Uint8ClampedArray?g[e]=Math.floor(gC(g[e]/255)*255):g[e]=gC(g[e]);return{data:g,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let aD=0;class Zr{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aD++}),this.uuid=Yt(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const g=A===void 0||typeof A=="string";if(!g&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const e={uuid:this.uuid,url:""},I=this.data;if(I!==null){let C;if(Array.isArray(I)){C=[];for(let i=0,B=I.length;i<B;i++)I[i].isDataTexture?C.push(QQ(I[i].image)):C.push(QQ(I[i]))}else C=QQ(I);e.url=C}return g||(A.images[this.uuid]=e),e}}function QQ(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zr.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cD=0;class Wg extends uI{constructor(A=Wg.DEFAULT_IMAGE,g=Wg.DEFAULT_MAPPING,e=Rt,I=Rt,C=et,i=he,B=Lt,Q=Ye,n=Wg.DEFAULT_ANISOTROPY,E=Ft){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cD++}),this.uuid=Yt(),this.name="",this.source=new Zr(A),this.mipmaps=[],this.mapping=g,this.channel=0,this.wrapS=e,this.wrapT=I,this.magFilter=C,this.minFilter=i,this.anisotropy=n,this.format=B,this.internalFormat=null,this.type=Q,this.offset=new Eg(0,0),this.repeat=new Eg(1,1),this.center=new Eg(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gg,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof E=="string"?this.colorSpace=E:(oI("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=E===EI?vg:Ft),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const g=A===void 0||typeof A=="string";if(!g&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const e={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(e.userData=this.userData),g||(A.textures[this.uuid]=e),e}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Jr)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case nC:A.x=A.x-Math.floor(A.x);break;case Rt:A.x=A.x<0?0:1;break;case nB:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case nC:A.y=A.y-Math.floor(A.y);break;case Rt:A.y=A.y<0?0:1;break;case nB:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return oI("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vg?EI:Pr}set encoding(A){oI("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===EI?vg:Ft}}Wg.DEFAULT_IMAGE=null;Wg.DEFAULT_MAPPING=Jr;Wg.DEFAULT_ANISOTROPY=1;class pg{constructor(A=0,g=0,e=0,I=1){pg.prototype.isVector4=!0,this.x=A,this.y=g,this.z=e,this.w=I}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,g,e,I){return this.x=A,this.y=g,this.z=e,this.w=I,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;case 3:this.w=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this.z=A.z+g.z,this.w=A.w+g.w,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this.z+=A.z*g,this.w+=A.w*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this.z=A.z-g.z,this.w=A.w-g.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const g=this.x,e=this.y,I=this.z,C=this.w,i=A.elements;return this.x=i[0]*g+i[4]*e+i[8]*I+i[12]*C,this.y=i[1]*g+i[5]*e+i[9]*I+i[13]*C,this.z=i[2]*g+i[6]*e+i[10]*I+i[14]*C,this.w=i[3]*g+i[7]*e+i[11]*I+i[15]*C,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const g=Math.sqrt(1-A.w*A.w);return g<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/g,this.y=A.y/g,this.z=A.z/g),this}setAxisAngleFromRotationMatrix(A){let g,e,I,C;const Q=A.elements,n=Q[0],E=Q[4],o=Q[8],s=Q[1],r=Q[5],h=Q[9],d=Q[2],a=Q[6],c=Q[10];if(Math.abs(E-s)<.01&&Math.abs(o-d)<.01&&Math.abs(h-a)<.01){if(Math.abs(E+s)<.1&&Math.abs(o+d)<.1&&Math.abs(h+a)<.1&&Math.abs(n+r+c-3)<.1)return this.set(1,0,0,0),this;g=Math.PI;const y=(n+1)/2,M=(r+1)/2,K=(c+1)/2,G=(E+s)/4,U=(o+d)/4,W=(h+a)/4;return y>M&&y>K?y<.01?(e=0,I=.707106781,C=.707106781):(e=Math.sqrt(y),I=G/e,C=U/e):M>K?M<.01?(e=.707106781,I=0,C=.707106781):(I=Math.sqrt(M),e=G/I,C=W/I):K<.01?(e=.707106781,I=.707106781,C=0):(C=Math.sqrt(K),e=U/C,I=W/C),this.set(e,I,C,g),this}let R=Math.sqrt((a-h)*(a-h)+(o-d)*(o-d)+(s-E)*(s-E));return Math.abs(R)<.001&&(R=1),this.x=(a-h)/R,this.y=(o-d)/R,this.z=(s-E)/R,this.w=Math.acos((n+r+c-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this.z=Math.max(A.z,Math.min(g.z,this.z)),this.w=Math.max(A.w,Math.min(g.w,this.w)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this.z=Math.max(A,Math.min(g,this.z)),this.w=Math.max(A,Math.min(g,this.w)),this}clampLength(A,g){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(A,Math.min(g,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this.z+=(A.z-this.z)*g,this.w+=(A.w-this.w)*g,this}lerpVectors(A,g,e){return this.x=A.x+(g.x-A.x)*e,this.y=A.y+(g.y-A.y)*e,this.z=A.z+(g.z-A.z)*e,this.w=A.w+(g.w-A.w)*e,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this.z=A[g+2],this.w=A[g+3],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A[g+2]=this.z,A[g+3]=this.w,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this.z=A.getZ(g),this.w=A.getW(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hD extends uI{constructor(A=1,g=1,e={}){super(),this.isRenderTarget=!0,this.width=A,this.height=g,this.depth=1,this.scissor=new pg(0,0,A,g),this.scissorTest=!1,this.viewport=new pg(0,0,A,g);const I={width:A,height:g,depth:1};e.encoding!==void 0&&(oI("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===EI?vg:Ft),e=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:et,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},e),this.texture=new Wg(I,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=e.generateMipmaps,this.texture.internalFormat=e.internalFormat,this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.samples=e.samples}setSize(A,g,e=1){(this.width!==A||this.height!==g||this.depth!==e)&&(this.width=A,this.height=g,this.depth=e,this.texture.image.width=A,this.texture.image.height=g,this.texture.image.depth=e,this.dispose()),this.viewport.set(0,0,A,g),this.scissor.set(0,0,A,g)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const g=Object.assign({},A.texture.image);return this.texture.source=new Zr(g),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cI extends hD{constructor(A=1,g=1,e={}){super(A,g,e),this.isWebGLRenderTarget=!0}}class Xr extends Wg{constructor(A=null,g=1,e=1,I=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:g,height:e,depth:I},this.magFilter=Og,this.minFilter=Og,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lD extends Wg{constructor(A=null,g=1,e=1,I=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:g,height:e,depth:I},this.magFilter=Og,this.minFilter=Og,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wI{constructor(A=0,g=0,e=0,I=1){this.isQuaternion=!0,this._x=A,this._y=g,this._z=e,this._w=I}static slerpFlat(A,g,e,I,C,i,B){let Q=e[I+0],n=e[I+1],E=e[I+2],o=e[I+3];const s=C[i+0],r=C[i+1],h=C[i+2],d=C[i+3];if(B===0){A[g+0]=Q,A[g+1]=n,A[g+2]=E,A[g+3]=o;return}if(B===1){A[g+0]=s,A[g+1]=r,A[g+2]=h,A[g+3]=d;return}if(o!==d||Q!==s||n!==r||E!==h){let a=1-B;const c=Q*s+n*r+E*h+o*d,R=c>=0?1:-1,y=1-c*c;if(y>Number.EPSILON){const K=Math.sqrt(y),G=Math.atan2(K,c*R);a=Math.sin(a*G)/K,B=Math.sin(B*G)/K}const M=B*R;if(Q=Q*a+s*M,n=n*a+r*M,E=E*a+h*M,o=o*a+d*M,a===1-B){const K=1/Math.sqrt(Q*Q+n*n+E*E+o*o);Q*=K,n*=K,E*=K,o*=K}}A[g]=Q,A[g+1]=n,A[g+2]=E,A[g+3]=o}static multiplyQuaternionsFlat(A,g,e,I,C,i){const B=e[I],Q=e[I+1],n=e[I+2],E=e[I+3],o=C[i],s=C[i+1],r=C[i+2],h=C[i+3];return A[g]=B*h+E*o+Q*r-n*s,A[g+1]=Q*h+E*s+n*o-B*r,A[g+2]=n*h+E*r+B*s-Q*o,A[g+3]=E*h-B*o-Q*s-n*r,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,g,e,I){return this._x=A,this._y=g,this._z=e,this._w=I,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,g=!0){const e=A._x,I=A._y,C=A._z,i=A._order,B=Math.cos,Q=Math.sin,n=B(e/2),E=B(I/2),o=B(C/2),s=Q(e/2),r=Q(I/2),h=Q(C/2);switch(i){case"XYZ":this._x=s*E*o+n*r*h,this._y=n*r*o-s*E*h,this._z=n*E*h+s*r*o,this._w=n*E*o-s*r*h;break;case"YXZ":this._x=s*E*o+n*r*h,this._y=n*r*o-s*E*h,this._z=n*E*h-s*r*o,this._w=n*E*o+s*r*h;break;case"ZXY":this._x=s*E*o-n*r*h,this._y=n*r*o+s*E*h,this._z=n*E*h+s*r*o,this._w=n*E*o-s*r*h;break;case"ZYX":this._x=s*E*o-n*r*h,this._y=n*r*o+s*E*h,this._z=n*E*h-s*r*o,this._w=n*E*o+s*r*h;break;case"YZX":this._x=s*E*o+n*r*h,this._y=n*r*o+s*E*h,this._z=n*E*h-s*r*o,this._w=n*E*o-s*r*h;break;case"XZY":this._x=s*E*o-n*r*h,this._y=n*r*o-s*E*h,this._z=n*E*h+s*r*o,this._w=n*E*o+s*r*h;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return g===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,g){const e=g/2,I=Math.sin(e);return this._x=A.x*I,this._y=A.y*I,this._z=A.z*I,this._w=Math.cos(e),this._onChangeCallback(),this}setFromRotationMatrix(A){const g=A.elements,e=g[0],I=g[4],C=g[8],i=g[1],B=g[5],Q=g[9],n=g[2],E=g[6],o=g[10],s=e+B+o;if(s>0){const r=.5/Math.sqrt(s+1);this._w=.25/r,this._x=(E-Q)*r,this._y=(C-n)*r,this._z=(i-I)*r}else if(e>B&&e>o){const r=2*Math.sqrt(1+e-B-o);this._w=(E-Q)/r,this._x=.25*r,this._y=(I+i)/r,this._z=(C+n)/r}else if(B>o){const r=2*Math.sqrt(1+B-e-o);this._w=(C-n)/r,this._x=(I+i)/r,this._y=.25*r,this._z=(Q+E)/r}else{const r=2*Math.sqrt(1+o-e-B);this._w=(i-I)/r,this._x=(C+n)/r,this._y=(Q+E)/r,this._z=.25*r}return this._onChangeCallback(),this}setFromUnitVectors(A,g){let e=A.dot(g)+1;return e<Number.EPSILON?(e=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=e):(this._x=0,this._y=-A.z,this._z=A.y,this._w=e)):(this._x=A.y*g.z-A.z*g.y,this._y=A.z*g.x-A.x*g.z,this._z=A.x*g.y-A.y*g.x,this._w=e),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(It(this.dot(A),-1,1)))}rotateTowards(A,g){const e=this.angleTo(A);if(e===0)return this;const I=Math.min(1,g/e);return this.slerp(A,I),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,g){const e=A._x,I=A._y,C=A._z,i=A._w,B=g._x,Q=g._y,n=g._z,E=g._w;return this._x=e*E+i*B+I*n-C*Q,this._y=I*E+i*Q+C*B-e*n,this._z=C*E+i*n+e*Q-I*B,this._w=i*E-e*B-I*Q-C*n,this._onChangeCallback(),this}slerp(A,g){if(g===0)return this;if(g===1)return this.copy(A);const e=this._x,I=this._y,C=this._z,i=this._w;let B=i*A._w+e*A._x+I*A._y+C*A._z;if(B<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,B=-B):this.copy(A),B>=1)return this._w=i,this._x=e,this._y=I,this._z=C,this;const Q=1-B*B;if(Q<=Number.EPSILON){const r=1-g;return this._w=r*i+g*this._w,this._x=r*e+g*this._x,this._y=r*I+g*this._y,this._z=r*C+g*this._z,this.normalize(),this}const n=Math.sqrt(Q),E=Math.atan2(n,B),o=Math.sin((1-g)*E)/n,s=Math.sin(g*E)/n;return this._w=i*o+this._w*s,this._x=e*o+this._x*s,this._y=I*o+this._y*s,this._z=C*o+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,g,e){return this.copy(A).slerp(g,e)}random(){const A=Math.random(),g=Math.sqrt(1-A),e=Math.sqrt(A),I=2*Math.PI*Math.random(),C=2*Math.PI*Math.random();return this.set(g*Math.cos(I),e*Math.sin(C),e*Math.cos(C),g*Math.sin(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,g=0){return this._x=A[g],this._y=A[g+1],this._z=A[g+2],this._w=A[g+3],this._onChangeCallback(),this}toArray(A=[],g=0){return A[g]=this._x,A[g+1]=this._y,A[g+2]=this._z,A[g+3]=this._w,A}fromBufferAttribute(A,g){return this._x=A.getX(g),this._y=A.getY(g),this._z=A.getZ(g),this._w=A.getW(g),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(A=0,g=0,e=0){J.prototype.isVector3=!0,this.x=A,this.y=g,this.z=e}set(A,g,e){return e===void 0&&(e=this.z),this.x=A,this.y=g,this.z=e,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this.z=A.z+g.z,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this.z+=A.z*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this.z=A.z-g.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,g){return this.x=A.x*g.x,this.y=A.y*g.y,this.z=A.z*g.z,this}applyEuler(A){return this.applyQuaternion(wo.setFromEuler(A))}applyAxisAngle(A,g){return this.applyQuaternion(wo.setFromAxisAngle(A,g))}applyMatrix3(A){const g=this.x,e=this.y,I=this.z,C=A.elements;return this.x=C[0]*g+C[3]*e+C[6]*I,this.y=C[1]*g+C[4]*e+C[7]*I,this.z=C[2]*g+C[5]*e+C[8]*I,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const g=this.x,e=this.y,I=this.z,C=A.elements,i=1/(C[3]*g+C[7]*e+C[11]*I+C[15]);return this.x=(C[0]*g+C[4]*e+C[8]*I+C[12])*i,this.y=(C[1]*g+C[5]*e+C[9]*I+C[13])*i,this.z=(C[2]*g+C[6]*e+C[10]*I+C[14])*i,this}applyQuaternion(A){const g=this.x,e=this.y,I=this.z,C=A.x,i=A.y,B=A.z,Q=A.w,n=2*(i*I-B*e),E=2*(B*g-C*I),o=2*(C*e-i*g);return this.x=g+Q*n+i*o-B*E,this.y=e+Q*E+B*n-C*o,this.z=I+Q*o+C*E-i*n,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const g=this.x,e=this.y,I=this.z,C=A.elements;return this.x=C[0]*g+C[4]*e+C[8]*I,this.y=C[1]*g+C[5]*e+C[9]*I,this.z=C[2]*g+C[6]*e+C[10]*I,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this.z=Math.max(A.z,Math.min(g.z,this.z)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this.z=Math.max(A,Math.min(g,this.z)),this}clampLength(A,g){const e=this.length();return this.divideScalar(e||1).multiplyScalar(Math.max(A,Math.min(g,e)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this.z+=(A.z-this.z)*g,this}lerpVectors(A,g,e){return this.x=A.x+(g.x-A.x)*e,this.y=A.y+(g.y-A.y)*e,this.z=A.z+(g.z-A.z)*e,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,g){const e=A.x,I=A.y,C=A.z,i=g.x,B=g.y,Q=g.z;return this.x=I*Q-C*B,this.y=C*i-e*Q,this.z=e*B-I*i,this}projectOnVector(A){const g=A.lengthSq();if(g===0)return this.set(0,0,0);const e=A.dot(this)/g;return this.copy(A).multiplyScalar(e)}projectOnPlane(A){return nQ.copy(this).projectOnVector(A),this.sub(nQ)}reflect(A){return this.sub(nQ.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const g=Math.sqrt(this.lengthSq()*A.lengthSq());if(g===0)return Math.PI/2;const e=this.dot(A)/g;return Math.acos(It(e,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const g=this.x-A.x,e=this.y-A.y,I=this.z-A.z;return g*g+e*e+I*I}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,g,e){const I=Math.sin(g)*A;return this.x=I*Math.sin(e),this.y=Math.cos(g)*A,this.z=I*Math.cos(e),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,g,e){return this.x=A*Math.sin(g),this.y=e,this.z=A*Math.cos(g),this}setFromMatrixPosition(A){const g=A.elements;return this.x=g[12],this.y=g[13],this.z=g[14],this}setFromMatrixScale(A){const g=this.setFromMatrixColumn(A,0).length(),e=this.setFromMatrixColumn(A,1).length(),I=this.setFromMatrixColumn(A,2).length();return this.x=g,this.y=e,this.z=I,this}setFromMatrixColumn(A,g){return this.fromArray(A.elements,g*4)}setFromMatrix3Column(A,g){return this.fromArray(A.elements,g*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this.z=A[g+2],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A[g+2]=this.z,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this.z=A.getZ(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,g=Math.random()*Math.PI*2,e=Math.sqrt(1-A**2);return this.x=e*Math.cos(g),this.y=e*Math.sin(g),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nQ=new J,wo=new wI;class yI{constructor(A=new J(1/0,1/0,1/0),g=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=g}set(A,g){return this.min.copy(A),this.max.copy(g),this}setFromArray(A){this.makeEmpty();for(let g=0,e=A.length;g<e;g+=3)this.expandByPoint(mt.fromArray(A,g));return this}setFromBufferAttribute(A){this.makeEmpty();for(let g=0,e=A.count;g<e;g++)this.expandByPoint(mt.fromBufferAttribute(A,g));return this}setFromPoints(A){this.makeEmpty();for(let g=0,e=A.length;g<e;g++)this.expandByPoint(A[g]);return this}setFromCenterAndSize(A,g){const e=mt.copy(g).multiplyScalar(.5);return this.min.copy(A).sub(e),this.max.copy(A).add(e),this}setFromObject(A,g=!1){return this.makeEmpty(),this.expandByObject(A,g)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,g=!1){A.updateWorldMatrix(!1,!1);const e=A.geometry;if(e!==void 0){const C=e.getAttribute("position");if(g===!0&&C!==void 0&&A.isInstancedMesh!==!0)for(let i=0,B=C.count;i<B;i++)A.isMesh===!0?A.getVertexPosition(i,mt):mt.fromBufferAttribute(C,i),mt.applyMatrix4(A.matrixWorld),this.expandByPoint(mt);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),ui.copy(A.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ui.copy(e.boundingBox)),ui.applyMatrix4(A.matrixWorld),this.union(ui)}const I=A.children;for(let C=0,i=I.length;C<i;C++)this.expandByObject(I[C],g);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,g){return g.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,mt),mt.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let g,e;return A.normal.x>0?(g=A.normal.x*this.min.x,e=A.normal.x*this.max.x):(g=A.normal.x*this.max.x,e=A.normal.x*this.min.x),A.normal.y>0?(g+=A.normal.y*this.min.y,e+=A.normal.y*this.max.y):(g+=A.normal.y*this.max.y,e+=A.normal.y*this.min.y),A.normal.z>0?(g+=A.normal.z*this.min.z,e+=A.normal.z*this.max.z):(g+=A.normal.z*this.max.z,e+=A.normal.z*this.min.z),g<=-A.constant&&e>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(kC),wi.subVectors(this.max,kC),GI.subVectors(A.a,kC),mI.subVectors(A.b,kC),KI.subVectors(A.c,kC),Re.subVectors(mI,GI),Le.subVectors(KI,mI),ze.subVectors(GI,KI);let g=[0,-Re.z,Re.y,0,-Le.z,Le.y,0,-ze.z,ze.y,Re.z,0,-Re.x,Le.z,0,-Le.x,ze.z,0,-ze.x,-Re.y,Re.x,0,-Le.y,Le.x,0,-ze.y,ze.x,0];return!EQ(g,GI,mI,KI,wi)||(g=[1,0,0,0,1,0,0,0,1],!EQ(g,GI,mI,KI,wi))?!1:(yi.crossVectors(Re,Le),g=[yi.x,yi.y,yi.z],EQ(g,GI,mI,KI,wi))}clampPoint(A,g){return g.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,mt).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(mt).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(ie[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),ie[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),ie[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),ie[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),ie[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),ie[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),ie[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),ie[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(ie),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const ie=[new J,new J,new J,new J,new J,new J,new J,new J],mt=new J,ui=new yI,GI=new J,mI=new J,KI=new J,Re=new J,Le=new J,ze=new J,kC=new J,wi=new J,yi=new J,Ze=new J;function EQ(t,A,g,e,I){for(let C=0,i=t.length-3;C<=i;C+=3){Ze.fromArray(t,C);const B=I.x*Math.abs(Ze.x)+I.y*Math.abs(Ze.y)+I.z*Math.abs(Ze.z),Q=A.dot(Ze),n=g.dot(Ze),E=e.dot(Ze);if(Math.max(-Math.max(Q,n,E),Math.min(Q,n,E))>B)return!1}return!0}const DD=new yI,GC=new J,oQ=new J;class qe{constructor(A=new J,g=-1){this.isSphere=!0,this.center=A,this.radius=g}set(A,g){return this.center.copy(A),this.radius=g,this}setFromPoints(A,g){const e=this.center;g!==void 0?e.copy(g):DD.setFromPoints(A).getCenter(e);let I=0;for(let C=0,i=A.length;C<i;C++)I=Math.max(I,e.distanceToSquared(A[C]));return this.radius=Math.sqrt(I),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const g=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=g*g}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,g){const e=this.center.distanceToSquared(A);return g.copy(A),e>this.radius*this.radius&&(g.sub(this.center).normalize(),g.multiplyScalar(this.radius).add(this.center)),g}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;GC.subVectors(A,this.center);const g=GC.lengthSq();if(g>this.radius*this.radius){const e=Math.sqrt(g),I=(e-this.radius)*.5;this.center.addScaledVector(GC,I/e),this.radius+=I}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(oQ.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(GC.copy(A.center).add(oQ)),this.expandByPoint(GC.copy(A.center).sub(oQ))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Be=new J,sQ=new J,pi=new J,Fe=new J,rQ=new J,Si=new J,aQ=new J;class FB{constructor(A=new J,g=new J(0,0,-1)){this.origin=A,this.direction=g}set(A,g){return this.origin.copy(A),this.direction.copy(g),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,g){return g.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,Be)),this}closestPointToPoint(A,g){g.subVectors(A,this.origin);const e=g.dot(this.direction);return e<0?g.copy(this.origin):g.copy(this.origin).addScaledVector(this.direction,e)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const g=Be.subVectors(A,this.origin).dot(this.direction);return g<0?this.origin.distanceToSquared(A):(Be.copy(this.origin).addScaledVector(this.direction,g),Be.distanceToSquared(A))}distanceSqToSegment(A,g,e,I){sQ.copy(A).add(g).multiplyScalar(.5),pi.copy(g).sub(A).normalize(),Fe.copy(this.origin).sub(sQ);const C=A.distanceTo(g)*.5,i=-this.direction.dot(pi),B=Fe.dot(this.direction),Q=-Fe.dot(pi),n=Fe.lengthSq(),E=Math.abs(1-i*i);let o,s,r,h;if(E>0)if(o=i*Q-B,s=i*B-Q,h=C*E,o>=0)if(s>=-h)if(s<=h){const d=1/E;o*=d,s*=d,r=o*(o+i*s+2*B)+s*(i*o+s+2*Q)+n}else s=C,o=Math.max(0,-(i*s+B)),r=-o*o+s*(s+2*Q)+n;else s=-C,o=Math.max(0,-(i*s+B)),r=-o*o+s*(s+2*Q)+n;else s<=-h?(o=Math.max(0,-(-i*C+B)),s=o>0?-C:Math.min(Math.max(-C,-Q),C),r=-o*o+s*(s+2*Q)+n):s<=h?(o=0,s=Math.min(Math.max(-C,-Q),C),r=s*(s+2*Q)+n):(o=Math.max(0,-(i*C+B)),s=o>0?C:Math.min(Math.max(-C,-Q),C),r=-o*o+s*(s+2*Q)+n);else s=i>0?-C:C,o=Math.max(0,-(i*s+B)),r=-o*o+s*(s+2*Q)+n;return e&&e.copy(this.origin).addScaledVector(this.direction,o),I&&I.copy(sQ).addScaledVector(pi,s),r}intersectSphere(A,g){Be.subVectors(A.center,this.origin);const e=Be.dot(this.direction),I=Be.dot(Be)-e*e,C=A.radius*A.radius;if(I>C)return null;const i=Math.sqrt(C-I),B=e-i,Q=e+i;return Q<0?null:B<0?this.at(Q,g):this.at(B,g)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const g=A.normal.dot(this.direction);if(g===0)return A.distanceToPoint(this.origin)===0?0:null;const e=-(this.origin.dot(A.normal)+A.constant)/g;return e>=0?e:null}intersectPlane(A,g){const e=this.distanceToPlane(A);return e===null?null:this.at(e,g)}intersectsPlane(A){const g=A.distanceToPoint(this.origin);return g===0||A.normal.dot(this.direction)*g<0}intersectBox(A,g){let e,I,C,i,B,Q;const n=1/this.direction.x,E=1/this.direction.y,o=1/this.direction.z,s=this.origin;return n>=0?(e=(A.min.x-s.x)*n,I=(A.max.x-s.x)*n):(e=(A.max.x-s.x)*n,I=(A.min.x-s.x)*n),E>=0?(C=(A.min.y-s.y)*E,i=(A.max.y-s.y)*E):(C=(A.max.y-s.y)*E,i=(A.min.y-s.y)*E),e>i||C>I||((C>e||isNaN(e))&&(e=C),(i<I||isNaN(I))&&(I=i),o>=0?(B=(A.min.z-s.z)*o,Q=(A.max.z-s.z)*o):(B=(A.max.z-s.z)*o,Q=(A.min.z-s.z)*o),e>Q||B>I)||((B>e||e!==e)&&(e=B),(Q<I||I!==I)&&(I=Q),I<0)?null:this.at(e>=0?e:I,g)}intersectsBox(A){return this.intersectBox(A,Be)!==null}intersectTriangle(A,g,e,I,C){rQ.subVectors(g,A),Si.subVectors(e,A),aQ.crossVectors(rQ,Si);let i=this.direction.dot(aQ),B;if(i>0){if(I)return null;B=1}else if(i<0)B=-1,i=-i;else return null;Fe.subVectors(this.origin,A);const Q=B*this.direction.dot(Si.crossVectors(Fe,Si));if(Q<0)return null;const n=B*this.direction.dot(rQ.cross(Fe));if(n<0||Q+n>i)return null;const E=-B*Fe.dot(aQ);return E<0?null:this.at(E/i,C)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class og{constructor(A,g,e,I,C,i,B,Q,n,E,o,s,r,h,d,a){og.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,g,e,I,C,i,B,Q,n,E,o,s,r,h,d,a)}set(A,g,e,I,C,i,B,Q,n,E,o,s,r,h,d,a){const c=this.elements;return c[0]=A,c[4]=g,c[8]=e,c[12]=I,c[1]=C,c[5]=i,c[9]=B,c[13]=Q,c[2]=n,c[6]=E,c[10]=o,c[14]=s,c[3]=r,c[7]=h,c[11]=d,c[15]=a,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new og().fromArray(this.elements)}copy(A){const g=this.elements,e=A.elements;return g[0]=e[0],g[1]=e[1],g[2]=e[2],g[3]=e[3],g[4]=e[4],g[5]=e[5],g[6]=e[6],g[7]=e[7],g[8]=e[8],g[9]=e[9],g[10]=e[10],g[11]=e[11],g[12]=e[12],g[13]=e[13],g[14]=e[14],g[15]=e[15],this}copyPosition(A){const g=this.elements,e=A.elements;return g[12]=e[12],g[13]=e[13],g[14]=e[14],this}setFromMatrix3(A){const g=A.elements;return this.set(g[0],g[3],g[6],0,g[1],g[4],g[7],0,g[2],g[5],g[8],0,0,0,0,1),this}extractBasis(A,g,e){return A.setFromMatrixColumn(this,0),g.setFromMatrixColumn(this,1),e.setFromMatrixColumn(this,2),this}makeBasis(A,g,e){return this.set(A.x,g.x,e.x,0,A.y,g.y,e.y,0,A.z,g.z,e.z,0,0,0,0,1),this}extractRotation(A){const g=this.elements,e=A.elements,I=1/JI.setFromMatrixColumn(A,0).length(),C=1/JI.setFromMatrixColumn(A,1).length(),i=1/JI.setFromMatrixColumn(A,2).length();return g[0]=e[0]*I,g[1]=e[1]*I,g[2]=e[2]*I,g[3]=0,g[4]=e[4]*C,g[5]=e[5]*C,g[6]=e[6]*C,g[7]=0,g[8]=e[8]*i,g[9]=e[9]*i,g[10]=e[10]*i,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromEuler(A){const g=this.elements,e=A.x,I=A.y,C=A.z,i=Math.cos(e),B=Math.sin(e),Q=Math.cos(I),n=Math.sin(I),E=Math.cos(C),o=Math.sin(C);if(A.order==="XYZ"){const s=i*E,r=i*o,h=B*E,d=B*o;g[0]=Q*E,g[4]=-Q*o,g[8]=n,g[1]=r+h*n,g[5]=s-d*n,g[9]=-B*Q,g[2]=d-s*n,g[6]=h+r*n,g[10]=i*Q}else if(A.order==="YXZ"){const s=Q*E,r=Q*o,h=n*E,d=n*o;g[0]=s+d*B,g[4]=h*B-r,g[8]=i*n,g[1]=i*o,g[5]=i*E,g[9]=-B,g[2]=r*B-h,g[6]=d+s*B,g[10]=i*Q}else if(A.order==="ZXY"){const s=Q*E,r=Q*o,h=n*E,d=n*o;g[0]=s-d*B,g[4]=-i*o,g[8]=h+r*B,g[1]=r+h*B,g[5]=i*E,g[9]=d-s*B,g[2]=-i*n,g[6]=B,g[10]=i*Q}else if(A.order==="ZYX"){const s=i*E,r=i*o,h=B*E,d=B*o;g[0]=Q*E,g[4]=h*n-r,g[8]=s*n+d,g[1]=Q*o,g[5]=d*n+s,g[9]=r*n-h,g[2]=-n,g[6]=B*Q,g[10]=i*Q}else if(A.order==="YZX"){const s=i*Q,r=i*n,h=B*Q,d=B*n;g[0]=Q*E,g[4]=d-s*o,g[8]=h*o+r,g[1]=o,g[5]=i*E,g[9]=-B*E,g[2]=-n*E,g[6]=r*o+h,g[10]=s-d*o}else if(A.order==="XZY"){const s=i*Q,r=i*n,h=B*Q,d=B*n;g[0]=Q*E,g[4]=-o,g[8]=n*E,g[1]=s*o+d,g[5]=i*E,g[9]=r*o-h,g[2]=h*o-r,g[6]=B*E,g[10]=d*o+s}return g[3]=0,g[7]=0,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromQuaternion(A){return this.compose(dD,A,fD)}lookAt(A,g,e){const I=this.elements;return at.subVectors(A,g),at.lengthSq()===0&&(at.z=1),at.normalize(),Ne.crossVectors(e,at),Ne.lengthSq()===0&&(Math.abs(e.z)===1?at.x+=1e-4:at.z+=1e-4,at.normalize(),Ne.crossVectors(e,at)),Ne.normalize(),Mi.crossVectors(at,Ne),I[0]=Ne.x,I[4]=Mi.x,I[8]=at.x,I[1]=Ne.y,I[5]=Mi.y,I[9]=at.y,I[2]=Ne.z,I[6]=Mi.z,I[10]=at.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,g){const e=A.elements,I=g.elements,C=this.elements,i=e[0],B=e[4],Q=e[8],n=e[12],E=e[1],o=e[5],s=e[9],r=e[13],h=e[2],d=e[6],a=e[10],c=e[14],R=e[3],y=e[7],M=e[11],K=e[15],G=I[0],U=I[4],W=I[8],BA=I[12],f=I[1],N=I[5],j=I[9],IA=I[13],m=I[2],V=I[6],x=I[10],z=I[14],O=I[3],X=I[7],$=I[11],EA=I[15];return C[0]=i*G+B*f+Q*m+n*O,C[4]=i*U+B*N+Q*V+n*X,C[8]=i*W+B*j+Q*x+n*$,C[12]=i*BA+B*IA+Q*z+n*EA,C[1]=E*G+o*f+s*m+r*O,C[5]=E*U+o*N+s*V+r*X,C[9]=E*W+o*j+s*x+r*$,C[13]=E*BA+o*IA+s*z+r*EA,C[2]=h*G+d*f+a*m+c*O,C[6]=h*U+d*N+a*V+c*X,C[10]=h*W+d*j+a*x+c*$,C[14]=h*BA+d*IA+a*z+c*EA,C[3]=R*G+y*f+M*m+K*O,C[7]=R*U+y*N+M*V+K*X,C[11]=R*W+y*j+M*x+K*$,C[15]=R*BA+y*IA+M*z+K*EA,this}multiplyScalar(A){const g=this.elements;return g[0]*=A,g[4]*=A,g[8]*=A,g[12]*=A,g[1]*=A,g[5]*=A,g[9]*=A,g[13]*=A,g[2]*=A,g[6]*=A,g[10]*=A,g[14]*=A,g[3]*=A,g[7]*=A,g[11]*=A,g[15]*=A,this}determinant(){const A=this.elements,g=A[0],e=A[4],I=A[8],C=A[12],i=A[1],B=A[5],Q=A[9],n=A[13],E=A[2],o=A[6],s=A[10],r=A[14],h=A[3],d=A[7],a=A[11],c=A[15];return h*(+C*Q*o-I*n*o-C*B*s+e*n*s+I*B*r-e*Q*r)+d*(+g*Q*r-g*n*s+C*i*s-I*i*r+I*n*E-C*Q*E)+a*(+g*n*o-g*B*r-C*i*o+e*i*r+C*B*E-e*n*E)+c*(-I*B*E-g*Q*o+g*B*s+I*i*o-e*i*s+e*Q*E)}transpose(){const A=this.elements;let g;return g=A[1],A[1]=A[4],A[4]=g,g=A[2],A[2]=A[8],A[8]=g,g=A[6],A[6]=A[9],A[9]=g,g=A[3],A[3]=A[12],A[12]=g,g=A[7],A[7]=A[13],A[13]=g,g=A[11],A[11]=A[14],A[14]=g,this}setPosition(A,g,e){const I=this.elements;return A.isVector3?(I[12]=A.x,I[13]=A.y,I[14]=A.z):(I[12]=A,I[13]=g,I[14]=e),this}invert(){const A=this.elements,g=A[0],e=A[1],I=A[2],C=A[3],i=A[4],B=A[5],Q=A[6],n=A[7],E=A[8],o=A[9],s=A[10],r=A[11],h=A[12],d=A[13],a=A[14],c=A[15],R=o*a*n-d*s*n+d*Q*r-B*a*r-o*Q*c+B*s*c,y=h*s*n-E*a*n-h*Q*r+i*a*r+E*Q*c-i*s*c,M=E*d*n-h*o*n+h*B*r-i*d*r-E*B*c+i*o*c,K=h*o*Q-E*d*Q-h*B*s+i*d*s+E*B*a-i*o*a,G=g*R+e*y+I*M+C*K;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/G;return A[0]=R*U,A[1]=(d*s*C-o*a*C-d*I*r+e*a*r+o*I*c-e*s*c)*U,A[2]=(B*a*C-d*Q*C+d*I*n-e*a*n-B*I*c+e*Q*c)*U,A[3]=(o*Q*C-B*s*C-o*I*n+e*s*n+B*I*r-e*Q*r)*U,A[4]=y*U,A[5]=(E*a*C-h*s*C+h*I*r-g*a*r-E*I*c+g*s*c)*U,A[6]=(h*Q*C-i*a*C-h*I*n+g*a*n+i*I*c-g*Q*c)*U,A[7]=(i*s*C-E*Q*C+E*I*n-g*s*n-i*I*r+g*Q*r)*U,A[8]=M*U,A[9]=(h*o*C-E*d*C-h*e*r+g*d*r+E*e*c-g*o*c)*U,A[10]=(i*d*C-h*B*C+h*e*n-g*d*n-i*e*c+g*B*c)*U,A[11]=(E*B*C-i*o*C-E*e*n+g*o*n+i*e*r-g*B*r)*U,A[12]=K*U,A[13]=(E*d*I-h*o*I+h*e*s-g*d*s-E*e*a+g*o*a)*U,A[14]=(h*B*I-i*d*I-h*e*Q+g*d*Q+i*e*a-g*B*a)*U,A[15]=(i*o*I-E*B*I+E*e*Q-g*o*Q-i*e*s+g*B*s)*U,this}scale(A){const g=this.elements,e=A.x,I=A.y,C=A.z;return g[0]*=e,g[4]*=I,g[8]*=C,g[1]*=e,g[5]*=I,g[9]*=C,g[2]*=e,g[6]*=I,g[10]*=C,g[3]*=e,g[7]*=I,g[11]*=C,this}getMaxScaleOnAxis(){const A=this.elements,g=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],e=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],I=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(g,e,I))}makeTranslation(A,g,e){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,g,0,0,1,e,0,0,0,1),this}makeRotationX(A){const g=Math.cos(A),e=Math.sin(A);return this.set(1,0,0,0,0,g,-e,0,0,e,g,0,0,0,0,1),this}makeRotationY(A){const g=Math.cos(A),e=Math.sin(A);return this.set(g,0,e,0,0,1,0,0,-e,0,g,0,0,0,0,1),this}makeRotationZ(A){const g=Math.cos(A),e=Math.sin(A);return this.set(g,-e,0,0,e,g,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,g){const e=Math.cos(g),I=Math.sin(g),C=1-e,i=A.x,B=A.y,Q=A.z,n=C*i,E=C*B;return this.set(n*i+e,n*B-I*Q,n*Q+I*B,0,n*B+I*Q,E*B+e,E*Q-I*i,0,n*Q-I*B,E*Q+I*i,C*Q*Q+e,0,0,0,0,1),this}makeScale(A,g,e){return this.set(A,0,0,0,0,g,0,0,0,0,e,0,0,0,0,1),this}makeShear(A,g,e,I,C,i){return this.set(1,e,C,0,A,1,i,0,g,I,1,0,0,0,0,1),this}compose(A,g,e){const I=this.elements,C=g._x,i=g._y,B=g._z,Q=g._w,n=C+C,E=i+i,o=B+B,s=C*n,r=C*E,h=C*o,d=i*E,a=i*o,c=B*o,R=Q*n,y=Q*E,M=Q*o,K=e.x,G=e.y,U=e.z;return I[0]=(1-(d+c))*K,I[1]=(r+M)*K,I[2]=(h-y)*K,I[3]=0,I[4]=(r-M)*G,I[5]=(1-(s+c))*G,I[6]=(a+R)*G,I[7]=0,I[8]=(h+y)*U,I[9]=(a-R)*U,I[10]=(1-(s+d))*U,I[11]=0,I[12]=A.x,I[13]=A.y,I[14]=A.z,I[15]=1,this}decompose(A,g,e){const I=this.elements;let C=JI.set(I[0],I[1],I[2]).length();const i=JI.set(I[4],I[5],I[6]).length(),B=JI.set(I[8],I[9],I[10]).length();this.determinant()<0&&(C=-C),A.x=I[12],A.y=I[13],A.z=I[14],Kt.copy(this);const n=1/C,E=1/i,o=1/B;return Kt.elements[0]*=n,Kt.elements[1]*=n,Kt.elements[2]*=n,Kt.elements[4]*=E,Kt.elements[5]*=E,Kt.elements[6]*=E,Kt.elements[8]*=o,Kt.elements[9]*=o,Kt.elements[10]*=o,g.setFromRotationMatrix(Kt),e.x=C,e.y=i,e.z=B,this}makePerspective(A,g,e,I,C,i,B=le){const Q=this.elements,n=2*C/(g-A),E=2*C/(e-I),o=(g+A)/(g-A),s=(e+I)/(e-I);let r,h;if(B===le)r=-(i+C)/(i-C),h=-2*i*C/(i-C);else if(B===rB)r=-i/(i-C),h=-i*C/(i-C);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+B);return Q[0]=n,Q[4]=0,Q[8]=o,Q[12]=0,Q[1]=0,Q[5]=E,Q[9]=s,Q[13]=0,Q[2]=0,Q[6]=0,Q[10]=r,Q[14]=h,Q[3]=0,Q[7]=0,Q[11]=-1,Q[15]=0,this}makeOrthographic(A,g,e,I,C,i,B=le){const Q=this.elements,n=1/(g-A),E=1/(e-I),o=1/(i-C),s=(g+A)*n,r=(e+I)*E;let h,d;if(B===le)h=(i+C)*o,d=-2*o;else if(B===rB)h=C*o,d=-1*o;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+B);return Q[0]=2*n,Q[4]=0,Q[8]=0,Q[12]=-s,Q[1]=0,Q[5]=2*E,Q[9]=0,Q[13]=-r,Q[2]=0,Q[6]=0,Q[10]=d,Q[14]=-h,Q[3]=0,Q[7]=0,Q[11]=0,Q[15]=1,this}equals(A){const g=this.elements,e=A.elements;for(let I=0;I<16;I++)if(g[I]!==e[I])return!1;return!0}fromArray(A,g=0){for(let e=0;e<16;e++)this.elements[e]=A[e+g];return this}toArray(A=[],g=0){const e=this.elements;return A[g]=e[0],A[g+1]=e[1],A[g+2]=e[2],A[g+3]=e[3],A[g+4]=e[4],A[g+5]=e[5],A[g+6]=e[6],A[g+7]=e[7],A[g+8]=e[8],A[g+9]=e[9],A[g+10]=e[10],A[g+11]=e[11],A[g+12]=e[12],A[g+13]=e[13],A[g+14]=e[14],A[g+15]=e[15],A}}const JI=new J,Kt=new og,dD=new J(0,0,0),fD=new J(1,1,1),Ne=new J,Mi=new J,at=new J,yo=new og,po=new wI;class NB{constructor(A=0,g=0,e=0,I=NB.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=g,this._z=e,this._order=I}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,g,e,I=this._order){return this._x=A,this._y=g,this._z=e,this._order=I,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,g=this._order,e=!0){const I=A.elements,C=I[0],i=I[4],B=I[8],Q=I[1],n=I[5],E=I[9],o=I[2],s=I[6],r=I[10];switch(g){case"XYZ":this._y=Math.asin(It(B,-1,1)),Math.abs(B)<.9999999?(this._x=Math.atan2(-E,r),this._z=Math.atan2(-i,C)):(this._x=Math.atan2(s,n),this._z=0);break;case"YXZ":this._x=Math.asin(-It(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(B,r),this._z=Math.atan2(Q,n)):(this._y=Math.atan2(-o,C),this._z=0);break;case"ZXY":this._x=Math.asin(It(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-o,r),this._z=Math.atan2(-i,n)):(this._y=0,this._z=Math.atan2(Q,C));break;case"ZYX":this._y=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(s,r),this._z=Math.atan2(Q,C)):(this._x=0,this._z=Math.atan2(-i,n));break;case"YZX":this._z=Math.asin(It(Q,-1,1)),Math.abs(Q)<.9999999?(this._x=Math.atan2(-E,n),this._y=Math.atan2(-o,C)):(this._x=0,this._y=Math.atan2(B,r));break;case"XZY":this._z=Math.asin(-It(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(s,n),this._y=Math.atan2(B,C)):(this._x=Math.atan2(-E,r),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+g)}return this._order=g,e===!0&&this._onChangeCallback(),this}setFromQuaternion(A,g,e){return yo.makeRotationFromQuaternion(A),this.setFromRotationMatrix(yo,g,e)}setFromVector3(A,g=this._order){return this.set(A.x,A.y,A.z,g)}reorder(A){return po.setFromEuler(this),this.setFromQuaternion(po,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],g=0){return A[g]=this._x,A[g+1]=this._y,A[g+2]=this._z,A[g+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}NB.DEFAULT_ORDER="XYZ";class jr{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let uD=0;const So=new J,HI=new wI,Qe=new og,Ri=new J,mC=new J,wD=new J,yD=new wI,Mo=new J(1,0,0),Ro=new J(0,1,0),Lo=new J(0,0,1),pD={type:"added"},SD={type:"removed"};class zg extends uI{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uD++}),this.uuid=Yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zg.DEFAULT_UP.clone();const A=new J,g=new NB,e=new wI,I=new J(1,1,1);function C(){e.setFromEuler(g,!1)}function i(){g.setFromQuaternion(e,void 0,!1)}g._onChange(C),e._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:g},quaternion:{configurable:!0,enumerable:!0,value:e},scale:{configurable:!0,enumerable:!0,value:I},modelViewMatrix:{value:new og},normalMatrix:{value:new gg}}),this.matrix=new og,this.matrixWorld=new og,this.matrixAutoUpdate=zg.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zg.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,g){this.quaternion.setFromAxisAngle(A,g)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,g){return HI.setFromAxisAngle(A,g),this.quaternion.multiply(HI),this}rotateOnWorldAxis(A,g){return HI.setFromAxisAngle(A,g),this.quaternion.premultiply(HI),this}rotateX(A){return this.rotateOnAxis(Mo,A)}rotateY(A){return this.rotateOnAxis(Ro,A)}rotateZ(A){return this.rotateOnAxis(Lo,A)}translateOnAxis(A,g){return So.copy(A).applyQuaternion(this.quaternion),this.position.add(So.multiplyScalar(g)),this}translateX(A){return this.translateOnAxis(Mo,A)}translateY(A){return this.translateOnAxis(Ro,A)}translateZ(A){return this.translateOnAxis(Lo,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(A,g,e){A.isVector3?Ri.copy(A):Ri.set(A,g,e);const I=this.parent;this.updateWorldMatrix(!0,!1),mC.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(mC,Ri,this.up):Qe.lookAt(Ri,mC,this.up),this.quaternion.setFromRotationMatrix(Qe),I&&(Qe.extractRotation(I.matrixWorld),HI.setFromRotationMatrix(Qe),this.quaternion.premultiply(HI.invert()))}add(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.add(arguments[g]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(pD)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const g=this.children.indexOf(A);return g!==-1&&(A.parent=null,this.children.splice(g,1),A.dispatchEvent(SD)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Qe.multiply(A.parent.matrixWorld)),A.applyMatrix4(Qe),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,g){if(this[A]===g)return this;for(let e=0,I=this.children.length;e<I;e++){const i=this.children[e].getObjectByProperty(A,g);if(i!==void 0)return i}}getObjectsByProperty(A,g,e=[]){this[A]===g&&e.push(this);const I=this.children;for(let C=0,i=I.length;C<i;C++)I[C].getObjectsByProperty(A,g,e);return e}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mC,A,wD),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mC,yD,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return A.set(g[8],g[9],g[10]).normalize()}raycast(){}traverse(A){A(this);const g=this.children;for(let e=0,I=g.length;e<I;e++)g[e].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const g=this.children;for(let e=0,I=g.length;e<I;e++)g[e].traverseVisible(A)}traverseAncestors(A){const g=this.parent;g!==null&&(A(g),g.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const g=this.children;for(let e=0,I=g.length;e<I;e++){const C=g[e];(C.matrixWorldAutoUpdate===!0||A===!0)&&C.updateMatrixWorld(A)}}updateWorldMatrix(A,g){const e=this.parent;if(A===!0&&e!==null&&e.matrixWorldAutoUpdate===!0&&e.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),g===!0){const I=this.children;for(let C=0,i=I.length;C<i;C++){const B=I[C];B.matrixWorldAutoUpdate===!0&&B.updateWorldMatrix(!1,!0)}}}toJSON(A){const g=A===void 0||typeof A=="string",e={};g&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},e.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const I={};I.uuid=this.uuid,I.type=this.type,this.name!==""&&(I.name=this.name),this.castShadow===!0&&(I.castShadow=!0),this.receiveShadow===!0&&(I.receiveShadow=!0),this.visible===!1&&(I.visible=!1),this.frustumCulled===!1&&(I.frustumCulled=!1),this.renderOrder!==0&&(I.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(I.userData=this.userData),I.layers=this.layers.mask,I.matrix=this.matrix.toArray(),I.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(I.matrixAutoUpdate=!1),this.isInstancedMesh&&(I.type="InstancedMesh",I.count=this.count,I.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(I.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(I.type="BatchedMesh",I.perObjectFrustumCulled=this.perObjectFrustumCulled,I.sortObjects=this.sortObjects,I.drawRanges=this._drawRanges,I.reservedRanges=this._reservedRanges,I.visibility=this._visibility,I.active=this._active,I.bounds=this._bounds.map(B=>({boxInitialized:B.boxInitialized,boxMin:B.box.min.toArray(),boxMax:B.box.max.toArray(),sphereInitialized:B.sphereInitialized,sphereRadius:B.sphere.radius,sphereCenter:B.sphere.center.toArray()})),I.maxGeometryCount=this._maxGeometryCount,I.maxVertexCount=this._maxVertexCount,I.maxIndexCount=this._maxIndexCount,I.geometryInitialized=this._geometryInitialized,I.geometryCount=this._geometryCount,I.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(I.boundingSphere={center:I.boundingSphere.center.toArray(),radius:I.boundingSphere.radius}),this.boundingBox!==null&&(I.boundingBox={min:I.boundingBox.min.toArray(),max:I.boundingBox.max.toArray()}));function C(B,Q){return B[Q.uuid]===void 0&&(B[Q.uuid]=Q.toJSON(A)),Q.uuid}if(this.isScene)this.background&&(this.background.isColor?I.background=this.background.toJSON():this.background.isTexture&&(I.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(I.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){I.geometry=C(A.geometries,this.geometry);const B=this.geometry.parameters;if(B!==void 0&&B.shapes!==void 0){const Q=B.shapes;if(Array.isArray(Q))for(let n=0,E=Q.length;n<E;n++){const o=Q[n];C(A.shapes,o)}else C(A.shapes,Q)}}if(this.isSkinnedMesh&&(I.bindMode=this.bindMode,I.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(C(A.skeletons,this.skeleton),I.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const B=[];for(let Q=0,n=this.material.length;Q<n;Q++)B.push(C(A.materials,this.material[Q]));I.material=B}else I.material=C(A.materials,this.material);if(this.children.length>0){I.children=[];for(let B=0;B<this.children.length;B++)I.children.push(this.children[B].toJSON(A).object)}if(this.animations.length>0){I.animations=[];for(let B=0;B<this.animations.length;B++){const Q=this.animations[B];I.animations.push(C(A.animations,Q))}}if(g){const B=i(A.geometries),Q=i(A.materials),n=i(A.textures),E=i(A.images),o=i(A.shapes),s=i(A.skeletons),r=i(A.animations),h=i(A.nodes);B.length>0&&(e.geometries=B),Q.length>0&&(e.materials=Q),n.length>0&&(e.textures=n),E.length>0&&(e.images=E),o.length>0&&(e.shapes=o),s.length>0&&(e.skeletons=s),r.length>0&&(e.animations=r),h.length>0&&(e.nodes=h)}return e.object=I,e;function i(B){const Q=[];for(const n in B){const E=B[n];delete E.metadata,Q.push(E)}return Q}}clone(A){return new this.constructor().copy(this,A)}copy(A,g=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),g===!0)for(let e=0;e<A.children.length;e++){const I=A.children[e];this.add(I.clone())}return this}}zg.DEFAULT_UP=new J(0,1,0);zg.DEFAULT_MATRIX_AUTO_UPDATE=!0;zg.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new J,ne=new J,cQ=new J,Ee=new J,vI=new J,xI=new J,Fo=new J,hQ=new J,lQ=new J,DQ=new J;class Wt{constructor(A=new J,g=new J,e=new J){this.a=A,this.b=g,this.c=e}static getNormal(A,g,e,I){I.subVectors(e,g),Jt.subVectors(A,g),I.cross(Jt);const C=I.lengthSq();return C>0?I.multiplyScalar(1/Math.sqrt(C)):I.set(0,0,0)}static getBarycoord(A,g,e,I,C){Jt.subVectors(I,g),ne.subVectors(e,g),cQ.subVectors(A,g);const i=Jt.dot(Jt),B=Jt.dot(ne),Q=Jt.dot(cQ),n=ne.dot(ne),E=ne.dot(cQ),o=i*n-B*B;if(o===0)return C.set(0,0,0),null;const s=1/o,r=(n*Q-B*E)*s,h=(i*E-B*Q)*s;return C.set(1-r-h,h,r)}static containsPoint(A,g,e,I){return this.getBarycoord(A,g,e,I,Ee)===null?!1:Ee.x>=0&&Ee.y>=0&&Ee.x+Ee.y<=1}static getInterpolation(A,g,e,I,C,i,B,Q){return this.getBarycoord(A,g,e,I,Ee)===null?(Q.x=0,Q.y=0,"z"in Q&&(Q.z=0),"w"in Q&&(Q.w=0),null):(Q.setScalar(0),Q.addScaledVector(C,Ee.x),Q.addScaledVector(i,Ee.y),Q.addScaledVector(B,Ee.z),Q)}static isFrontFacing(A,g,e,I){return Jt.subVectors(e,g),ne.subVectors(A,g),Jt.cross(ne).dot(I)<0}set(A,g,e){return this.a.copy(A),this.b.copy(g),this.c.copy(e),this}setFromPointsAndIndices(A,g,e,I){return this.a.copy(A[g]),this.b.copy(A[e]),this.c.copy(A[I]),this}setFromAttributeAndIndices(A,g,e,I){return this.a.fromBufferAttribute(A,g),this.b.fromBufferAttribute(A,e),this.c.fromBufferAttribute(A,I),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Jt.subVectors(this.c,this.b),ne.subVectors(this.a,this.b),Jt.cross(ne).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Wt.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,g){return Wt.getBarycoord(A,this.a,this.b,this.c,g)}getInterpolation(A,g,e,I,C){return Wt.getInterpolation(A,this.a,this.b,this.c,g,e,I,C)}containsPoint(A){return Wt.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Wt.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,g){const e=this.a,I=this.b,C=this.c;let i,B;vI.subVectors(I,e),xI.subVectors(C,e),hQ.subVectors(A,e);const Q=vI.dot(hQ),n=xI.dot(hQ);if(Q<=0&&n<=0)return g.copy(e);lQ.subVectors(A,I);const E=vI.dot(lQ),o=xI.dot(lQ);if(E>=0&&o<=E)return g.copy(I);const s=Q*o-E*n;if(s<=0&&Q>=0&&E<=0)return i=Q/(Q-E),g.copy(e).addScaledVector(vI,i);DQ.subVectors(A,C);const r=vI.dot(DQ),h=xI.dot(DQ);if(h>=0&&r<=h)return g.copy(C);const d=r*n-Q*h;if(d<=0&&n>=0&&h<=0)return B=n/(n-h),g.copy(e).addScaledVector(xI,B);const a=E*h-r*o;if(a<=0&&o-E>=0&&r-h>=0)return Fo.subVectors(C,I),B=(o-E)/(o-E+(r-h)),g.copy(I).addScaledVector(Fo,B);const c=1/(a+d+s);return i=d*c,B=s*c,g.copy(e).addScaledVector(vI,i).addScaledVector(xI,B)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const $r={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ue={h:0,s:0,l:0},Li={h:0,s:0,l:0};function dQ(t,A,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?t+(A-t)*6*g:g<1/2?A:g<2/3?t+(A-t)*6*(2/3-g):t}class Bg{constructor(A,g,e){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,g,e)}set(A,g,e){if(g===void 0&&e===void 0){const I=A;I&&I.isColor?this.copy(I):typeof I=="number"?this.setHex(I):typeof I=="string"&&this.setStyle(I)}else this.setRGB(A,g,e);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,g=vg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,dg.toWorkingColorSpace(this,g),this}setRGB(A,g,e,I=dg.workingColorSpace){return this.r=A,this.g=g,this.b=e,dg.toWorkingColorSpace(this,I),this}setHSL(A,g,e,I=dg.workingColorSpace){if(A=vn(A,1),g=It(g,0,1),e=It(e,0,1),g===0)this.r=this.g=this.b=e;else{const C=e<=.5?e*(1+g):e+g-e*g,i=2*e-C;this.r=dQ(i,C,A+1/3),this.g=dQ(i,C,A),this.b=dQ(i,C,A-1/3)}return dg.toWorkingColorSpace(this,I),this}setStyle(A,g=vg){function e(C){C!==void 0&&parseFloat(C)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let I;if(I=/^(\w+)\(([^\)]*)\)/.exec(A)){let C;const i=I[1],B=I[2];switch(i){case"rgb":case"rgba":if(C=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(B))return e(C[4]),this.setRGB(Math.min(255,parseInt(C[1],10))/255,Math.min(255,parseInt(C[2],10))/255,Math.min(255,parseInt(C[3],10))/255,g);if(C=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(B))return e(C[4]),this.setRGB(Math.min(100,parseInt(C[1],10))/100,Math.min(100,parseInt(C[2],10))/100,Math.min(100,parseInt(C[3],10))/100,g);break;case"hsl":case"hsla":if(C=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(B))return e(C[4]),this.setHSL(parseFloat(C[1])/360,parseFloat(C[2])/100,parseFloat(C[3])/100,g);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(I=/^\#([A-Fa-f\d]+)$/.exec(A)){const C=I[1],i=C.length;if(i===3)return this.setRGB(parseInt(C.charAt(0),16)/15,parseInt(C.charAt(1),16)/15,parseInt(C.charAt(2),16)/15,g);if(i===6)return this.setHex(parseInt(C,16),g);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,g);return this}setColorName(A,g=vg){const e=$r[A.toLowerCase()];return e!==void 0?this.setHex(e,g):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=gC(A.r),this.g=gC(A.g),this.b=gC(A.b),this}copyLinearToSRGB(A){return this.r=BQ(A.r),this.g=BQ(A.g),this.b=BQ(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=vg){return dg.fromWorkingColorSpace(tt.copy(this),A),Math.round(It(tt.r*255,0,255))*65536+Math.round(It(tt.g*255,0,255))*256+Math.round(It(tt.b*255,0,255))}getHexString(A=vg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,g=dg.workingColorSpace){dg.fromWorkingColorSpace(tt.copy(this),g);const e=tt.r,I=tt.g,C=tt.b,i=Math.max(e,I,C),B=Math.min(e,I,C);let Q,n;const E=(B+i)/2;if(B===i)Q=0,n=0;else{const o=i-B;switch(n=E<=.5?o/(i+B):o/(2-i-B),i){case e:Q=(I-C)/o+(I<C?6:0);break;case I:Q=(C-e)/o+2;break;case C:Q=(e-I)/o+4;break}Q/=6}return A.h=Q,A.s=n,A.l=E,A}getRGB(A,g=dg.workingColorSpace){return dg.fromWorkingColorSpace(tt.copy(this),g),A.r=tt.r,A.g=tt.g,A.b=tt.b,A}getStyle(A=vg){dg.fromWorkingColorSpace(tt.copy(this),A);const g=tt.r,e=tt.g,I=tt.b;return A!==vg?`color(${A} ${g.toFixed(3)} ${e.toFixed(3)} ${I.toFixed(3)})`:`rgb(${Math.round(g*255)},${Math.round(e*255)},${Math.round(I*255)})`}offsetHSL(A,g,e){return this.getHSL(Ue),this.setHSL(Ue.h+A,Ue.s+g,Ue.l+e)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,g){return this.r=A.r+g.r,this.g=A.g+g.g,this.b=A.b+g.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,g){return this.r+=(A.r-this.r)*g,this.g+=(A.g-this.g)*g,this.b+=(A.b-this.b)*g,this}lerpColors(A,g,e){return this.r=A.r+(g.r-A.r)*e,this.g=A.g+(g.g-A.g)*e,this.b=A.b+(g.b-A.b)*e,this}lerpHSL(A,g){this.getHSL(Ue),A.getHSL(Li);const e=bC(Ue.h,Li.h,g),I=bC(Ue.s,Li.s,g),C=bC(Ue.l,Li.l,g);return this.setHSL(e,I,C),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const g=this.r,e=this.g,I=this.b,C=A.elements;return this.r=C[0]*g+C[3]*e+C[6]*I,this.g=C[1]*g+C[4]*e+C[7]*I,this.b=C[2]*g+C[5]*e+C[8]*I,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,g=0){return this.r=A[g],this.g=A[g+1],this.b=A[g+2],this}toArray(A=[],g=0){return A[g]=this.r,A[g+1]=this.g,A[g+2]=this.b,A}fromBufferAttribute(A,g){return this.r=A.getX(g),this.g=A.getY(g),this.b=A.getZ(g),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tt=new Bg;Bg.NAMES=$r;let MD=0;class Zt extends uI{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MD++}),this.uuid=Yt(),this.name="",this.type="Material",this.blending=AC,this.side=we,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jQ,this.blendDst=$Q,this.blendEquation=CI,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bg(0,0,0),this.blendAlpha=0,this.depthFunc=QB,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=co,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=UI,this.stencilZFail=UI,this.stencilZPass=UI,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const g in A){const e=A[g];if(e===void 0){console.warn(`THREE.Material: parameter '${g}' has value of undefined.`);continue}const I=this[g];if(I===void 0){console.warn(`THREE.Material: '${g}' is not a property of THREE.${this.type}.`);continue}I&&I.isColor?I.set(e):I&&I.isVector3&&e&&e.isVector3?I.copy(e):this[g]=e}}toJSON(A){const g=A===void 0||typeof A=="string";g&&(A={textures:{},images:{}});const e={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),this.roughness!==void 0&&(e.roughness=this.roughness),this.metalness!==void 0&&(e.metalness=this.metalness),this.sheen!==void 0&&(e.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(e.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(e.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(e.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(e.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(e.shininess=this.shininess),this.clearcoat!==void 0&&(e.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(e.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(e.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(e.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(e.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,e.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(e.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(e.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(e.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(e.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(e.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(e.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(e.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(e.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(e.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(A).uuid,e.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(A).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(A).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(A).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(A).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(e.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(e.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(e.combine=this.combine)),this.envMapIntensity!==void 0&&(e.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(e.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(e.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(e.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(e.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(e.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(e.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(e.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(e.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(e.size=this.size),this.shadowSide!==null&&(e.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==AC&&(e.blending=this.blending),this.side!==we&&(e.side=this.side),this.vertexColors===!0&&(e.vertexColors=!0),this.opacity<1&&(e.opacity=this.opacity),this.transparent===!0&&(e.transparent=!0),this.blendSrc!==jQ&&(e.blendSrc=this.blendSrc),this.blendDst!==$Q&&(e.blendDst=this.blendDst),this.blendEquation!==CI&&(e.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(e.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(e.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(e.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(e.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(e.blendAlpha=this.blendAlpha),this.depthFunc!==QB&&(e.depthFunc=this.depthFunc),this.depthTest===!1&&(e.depthTest=this.depthTest),this.depthWrite===!1&&(e.depthWrite=this.depthWrite),this.colorWrite===!1&&(e.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(e.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==co&&(e.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(e.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(e.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==UI&&(e.stencilFail=this.stencilFail),this.stencilZFail!==UI&&(e.stencilZFail=this.stencilZFail),this.stencilZPass!==UI&&(e.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(e.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(e.rotation=this.rotation),this.polygonOffset===!0&&(e.polygonOffset=!0),this.polygonOffsetFactor!==0&&(e.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(e.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(e.linewidth=this.linewidth),this.dashSize!==void 0&&(e.dashSize=this.dashSize),this.gapSize!==void 0&&(e.gapSize=this.gapSize),this.scale!==void 0&&(e.scale=this.scale),this.dithering===!0&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),this.alphaHash===!0&&(e.alphaHash=!0),this.alphaToCoverage===!0&&(e.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(e.premultipliedAlpha=!0),this.forceSinglePass===!0&&(e.forceSinglePass=!0),this.wireframe===!0&&(e.wireframe=!0),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(e.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(e.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(e.flatShading=!0),this.visible===!1&&(e.visible=!1),this.toneMapped===!1&&(e.toneMapped=!1),this.fog===!1&&(e.fog=!1),Object.keys(this.userData).length>0&&(e.userData=this.userData);function I(C){const i=[];for(const B in C){const Q=C[B];delete Q.metadata,i.push(Q)}return i}if(g){const C=I(A.textures),i=I(A.images);C.length>0&&(e.textures=C),i.length>0&&(e.images=i)}return e}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const g=A.clippingPlanes;let e=null;if(g!==null){const I=g.length;e=new Array(I);for(let C=0;C!==I;++C)e[C]=g[C].clone()}return this.clippingPlanes=e,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class ZI extends Zt{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bg(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Jg=new J,Fi=new Eg;class rt{constructor(A,g,e=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=g,this.count=A!==void 0?A.length/g:0,this.normalized=e,this.usage=In,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vt,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return oI("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,g){this.updateRanges.push({start:A,count:g})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,g,e){A*=this.itemSize,e*=g.itemSize;for(let I=0,C=this.itemSize;I<C;I++)this.array[A+I]=g.array[e+I];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let g=0,e=this.count;g<e;g++)Fi.fromBufferAttribute(this,g),Fi.applyMatrix3(A),this.setXY(g,Fi.x,Fi.y);else if(this.itemSize===3)for(let g=0,e=this.count;g<e;g++)Jg.fromBufferAttribute(this,g),Jg.applyMatrix3(A),this.setXYZ(g,Jg.x,Jg.y,Jg.z);return this}applyMatrix4(A){for(let g=0,e=this.count;g<e;g++)Jg.fromBufferAttribute(this,g),Jg.applyMatrix4(A),this.setXYZ(g,Jg.x,Jg.y,Jg.z);return this}applyNormalMatrix(A){for(let g=0,e=this.count;g<e;g++)Jg.fromBufferAttribute(this,g),Jg.applyNormalMatrix(A),this.setXYZ(g,Jg.x,Jg.y,Jg.z);return this}transformDirection(A){for(let g=0,e=this.count;g<e;g++)Jg.fromBufferAttribute(this,g),Jg.transformDirection(A),this.setXYZ(g,Jg.x,Jg.y,Jg.z);return this}set(A,g=0){return this.array.set(A,g),this}getComponent(A,g){let e=this.array[A*this.itemSize+g];return this.normalized&&(e=vt(e,this.array)),e}setComponent(A,g,e){return this.normalized&&(e=ug(e,this.array)),this.array[A*this.itemSize+g]=e,this}getX(A){let g=this.array[A*this.itemSize];return this.normalized&&(g=vt(g,this.array)),g}setX(A,g){return this.normalized&&(g=ug(g,this.array)),this.array[A*this.itemSize]=g,this}getY(A){let g=this.array[A*this.itemSize+1];return this.normalized&&(g=vt(g,this.array)),g}setY(A,g){return this.normalized&&(g=ug(g,this.array)),this.array[A*this.itemSize+1]=g,this}getZ(A){let g=this.array[A*this.itemSize+2];return this.normalized&&(g=vt(g,this.array)),g}setZ(A,g){return this.normalized&&(g=ug(g,this.array)),this.array[A*this.itemSize+2]=g,this}getW(A){let g=this.array[A*this.itemSize+3];return this.normalized&&(g=vt(g,this.array)),g}setW(A,g){return this.normalized&&(g=ug(g,this.array)),this.array[A*this.itemSize+3]=g,this}setXY(A,g,e){return A*=this.itemSize,this.normalized&&(g=ug(g,this.array),e=ug(e,this.array)),this.array[A+0]=g,this.array[A+1]=e,this}setXYZ(A,g,e,I){return A*=this.itemSize,this.normalized&&(g=ug(g,this.array),e=ug(e,this.array),I=ug(I,this.array)),this.array[A+0]=g,this.array[A+1]=e,this.array[A+2]=I,this}setXYZW(A,g,e,I,C){return A*=this.itemSize,this.normalized&&(g=ug(g,this.array),e=ug(e,this.array),I=ug(I,this.array),C=ug(C,this.array)),this.array[A+0]=g,this.array[A+1]=e,this.array[A+2]=I,this.array[A+3]=C,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==In&&(A.usage=this.usage),A}}class Aa extends rt{constructor(A,g,e){super(new Uint16Array(A),g,e)}}class ga extends rt{constructor(A,g,e){super(new Uint32Array(A),g,e)}}class de extends rt{constructor(A,g,e){super(new Float32Array(A),g,e)}}let RD=0;const St=new og,fQ=new zg,YI=new J,ct=new yI,KC=new yI,qg=new J;class ge extends uI{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RD++}),this.uuid=Yt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Wr(A)?ga:Aa)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,g){return this.attributes[A]=g,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,g,e=0){this.groups.push({start:A,count:g,materialIndex:e})}clearGroups(){this.groups=[]}setDrawRange(A,g){this.drawRange.start=A,this.drawRange.count=g}applyMatrix4(A){const g=this.attributes.position;g!==void 0&&(g.applyMatrix4(A),g.needsUpdate=!0);const e=this.attributes.normal;if(e!==void 0){const C=new gg().getNormalMatrix(A);e.applyNormalMatrix(C),e.needsUpdate=!0}const I=this.attributes.tangent;return I!==void 0&&(I.transformDirection(A),I.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return St.makeRotationFromQuaternion(A),this.applyMatrix4(St),this}rotateX(A){return St.makeRotationX(A),this.applyMatrix4(St),this}rotateY(A){return St.makeRotationY(A),this.applyMatrix4(St),this}rotateZ(A){return St.makeRotationZ(A),this.applyMatrix4(St),this}translate(A,g,e){return St.makeTranslation(A,g,e),this.applyMatrix4(St),this}scale(A,g,e){return St.makeScale(A,g,e),this.applyMatrix4(St),this}lookAt(A){return fQ.lookAt(A),fQ.updateMatrix(),this.applyMatrix4(fQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(YI).negate(),this.translate(YI.x,YI.y,YI.z),this}setFromPoints(A){const g=[];for(let e=0,I=A.length;e<I;e++){const C=A[e];g.push(C.x,C.y,C.z||0)}return this.setAttribute("position",new de(g,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yI);const A=this.attributes.position,g=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),g)for(let e=0,I=g.length;e<I;e++){const C=g[e];ct.setFromBufferAttribute(C),this.morphTargetsRelative?(qg.addVectors(this.boundingBox.min,ct.min),this.boundingBox.expandByPoint(qg),qg.addVectors(this.boundingBox.max,ct.max),this.boundingBox.expandByPoint(qg)):(this.boundingBox.expandByPoint(ct.min),this.boundingBox.expandByPoint(ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qe);const A=this.attributes.position,g=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(A){const e=this.boundingSphere.center;if(ct.setFromBufferAttribute(A),g)for(let C=0,i=g.length;C<i;C++){const B=g[C];KC.setFromBufferAttribute(B),this.morphTargetsRelative?(qg.addVectors(ct.min,KC.min),ct.expandByPoint(qg),qg.addVectors(ct.max,KC.max),ct.expandByPoint(qg)):(ct.expandByPoint(KC.min),ct.expandByPoint(KC.max))}ct.getCenter(e);let I=0;for(let C=0,i=A.count;C<i;C++)qg.fromBufferAttribute(A,C),I=Math.max(I,e.distanceToSquared(qg));if(g)for(let C=0,i=g.length;C<i;C++){const B=g[C],Q=this.morphTargetsRelative;for(let n=0,E=B.count;n<E;n++)qg.fromBufferAttribute(B,n),Q&&(YI.fromBufferAttribute(A,n),qg.add(YI)),I=Math.max(I,e.distanceToSquared(qg))}this.boundingSphere.radius=Math.sqrt(I),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,g=this.attributes;if(A===null||g.position===void 0||g.normal===void 0||g.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const e=A.array,I=g.position.array,C=g.normal.array,i=g.uv.array,B=I.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rt(new Float32Array(4*B),4));const Q=this.getAttribute("tangent").array,n=[],E=[];for(let f=0;f<B;f++)n[f]=new J,E[f]=new J;const o=new J,s=new J,r=new J,h=new Eg,d=new Eg,a=new Eg,c=new J,R=new J;function y(f,N,j){o.fromArray(I,f*3),s.fromArray(I,N*3),r.fromArray(I,j*3),h.fromArray(i,f*2),d.fromArray(i,N*2),a.fromArray(i,j*2),s.sub(o),r.sub(o),d.sub(h),a.sub(h);const IA=1/(d.x*a.y-a.x*d.y);isFinite(IA)&&(c.copy(s).multiplyScalar(a.y).addScaledVector(r,-d.y).multiplyScalar(IA),R.copy(r).multiplyScalar(d.x).addScaledVector(s,-a.x).multiplyScalar(IA),n[f].add(c),n[N].add(c),n[j].add(c),E[f].add(R),E[N].add(R),E[j].add(R))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.length}]);for(let f=0,N=M.length;f<N;++f){const j=M[f],IA=j.start,m=j.count;for(let V=IA,x=IA+m;V<x;V+=3)y(e[V+0],e[V+1],e[V+2])}const K=new J,G=new J,U=new J,W=new J;function BA(f){U.fromArray(C,f*3),W.copy(U);const N=n[f];K.copy(N),K.sub(U.multiplyScalar(U.dot(N))).normalize(),G.crossVectors(W,N);const IA=G.dot(E[f])<0?-1:1;Q[f*4]=K.x,Q[f*4+1]=K.y,Q[f*4+2]=K.z,Q[f*4+3]=IA}for(let f=0,N=M.length;f<N;++f){const j=M[f],IA=j.start,m=j.count;for(let V=IA,x=IA+m;V<x;V+=3)BA(e[V+0]),BA(e[V+1]),BA(e[V+2])}}computeVertexNormals(){const A=this.index,g=this.getAttribute("position");if(g!==void 0){let e=this.getAttribute("normal");if(e===void 0)e=new rt(new Float32Array(g.count*3),3),this.setAttribute("normal",e);else for(let s=0,r=e.count;s<r;s++)e.setXYZ(s,0,0,0);const I=new J,C=new J,i=new J,B=new J,Q=new J,n=new J,E=new J,o=new J;if(A)for(let s=0,r=A.count;s<r;s+=3){const h=A.getX(s+0),d=A.getX(s+1),a=A.getX(s+2);I.fromBufferAttribute(g,h),C.fromBufferAttribute(g,d),i.fromBufferAttribute(g,a),E.subVectors(i,C),o.subVectors(I,C),E.cross(o),B.fromBufferAttribute(e,h),Q.fromBufferAttribute(e,d),n.fromBufferAttribute(e,a),B.add(E),Q.add(E),n.add(E),e.setXYZ(h,B.x,B.y,B.z),e.setXYZ(d,Q.x,Q.y,Q.z),e.setXYZ(a,n.x,n.y,n.z)}else for(let s=0,r=g.count;s<r;s+=3)I.fromBufferAttribute(g,s+0),C.fromBufferAttribute(g,s+1),i.fromBufferAttribute(g,s+2),E.subVectors(i,C),o.subVectors(I,C),E.cross(o),e.setXYZ(s+0,E.x,E.y,E.z),e.setXYZ(s+1,E.x,E.y,E.z),e.setXYZ(s+2,E.x,E.y,E.z);this.normalizeNormals(),e.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let g=0,e=A.count;g<e;g++)qg.fromBufferAttribute(A,g),qg.normalize(),A.setXYZ(g,qg.x,qg.y,qg.z)}toNonIndexed(){function A(B,Q){const n=B.array,E=B.itemSize,o=B.normalized,s=new n.constructor(Q.length*E);let r=0,h=0;for(let d=0,a=Q.length;d<a;d++){B.isInterleavedBufferAttribute?r=Q[d]*B.data.stride+B.offset:r=Q[d]*E;for(let c=0;c<E;c++)s[h++]=n[r++]}return new rt(s,E,o)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const g=new ge,e=this.index.array,I=this.attributes;for(const B in I){const Q=I[B],n=A(Q,e);g.setAttribute(B,n)}const C=this.morphAttributes;for(const B in C){const Q=[],n=C[B];for(let E=0,o=n.length;E<o;E++){const s=n[E],r=A(s,e);Q.push(r)}g.morphAttributes[B]=Q}g.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let B=0,Q=i.length;B<Q;B++){const n=i[B];g.addGroup(n.start,n.count,n.materialIndex)}return g}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const Q=this.parameters;for(const n in Q)Q[n]!==void 0&&(A[n]=Q[n]);return A}A.data={attributes:{}};const g=this.index;g!==null&&(A.data.index={type:g.array.constructor.name,array:Array.prototype.slice.call(g.array)});const e=this.attributes;for(const Q in e){const n=e[Q];A.data.attributes[Q]=n.toJSON(A.data)}const I={};let C=!1;for(const Q in this.morphAttributes){const n=this.morphAttributes[Q],E=[];for(let o=0,s=n.length;o<s;o++){const r=n[o];E.push(r.toJSON(A.data))}E.length>0&&(I[Q]=E,C=!0)}C&&(A.data.morphAttributes=I,A.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(A.data.groups=JSON.parse(JSON.stringify(i)));const B=this.boundingSphere;return B!==null&&(A.data.boundingSphere={center:B.center.toArray(),radius:B.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const g={};this.name=A.name;const e=A.index;e!==null&&this.setIndex(e.clone(g));const I=A.attributes;for(const n in I){const E=I[n];this.setAttribute(n,E.clone(g))}const C=A.morphAttributes;for(const n in C){const E=[],o=C[n];for(let s=0,r=o.length;s<r;s++)E.push(o[s].clone(g));this.morphAttributes[n]=E}this.morphTargetsRelative=A.morphTargetsRelative;const i=A.groups;for(let n=0,E=i.length;n<E;n++){const o=i[n];this.addGroup(o.start,o.count,o.materialIndex)}const B=A.boundingBox;B!==null&&(this.boundingBox=B.clone());const Q=A.boundingSphere;return Q!==null&&(this.boundingSphere=Q.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const No=new og,Xe=new FB,Ni=new qe,Uo=new J,bI=new J,TI=new J,_I=new J,uQ=new J,Ui=new J,ki=new Eg,Gi=new Eg,mi=new Eg,ko=new J,Go=new J,mo=new J,Ki=new J,Ji=new J;class xt extends zg{constructor(A=new ge,g=new ZI){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=g,this.updateMorphTargets()}copy(A,g){return super.copy(A,g),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const g=this.geometry.morphAttributes,e=Object.keys(g);if(e.length>0){const I=g[e[0]];if(I!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,i=I.length;C<i;C++){const B=I[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[B]=C}}}}getVertexPosition(A,g){const e=this.geometry,I=e.attributes.position,C=e.morphAttributes.position,i=e.morphTargetsRelative;g.fromBufferAttribute(I,A);const B=this.morphTargetInfluences;if(C&&B){Ui.set(0,0,0);for(let Q=0,n=C.length;Q<n;Q++){const E=B[Q],o=C[Q];E!==0&&(uQ.fromBufferAttribute(o,A),i?Ui.addScaledVector(uQ,E):Ui.addScaledVector(uQ.sub(g),E))}g.add(Ui)}return g}raycast(A,g){const e=this.geometry,I=this.material,C=this.matrixWorld;I!==void 0&&(e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere),Ni.applyMatrix4(C),Xe.copy(A.ray).recast(A.near),!(Ni.containsPoint(Xe.origin)===!1&&(Xe.intersectSphere(Ni,Uo)===null||Xe.origin.distanceToSquared(Uo)>(A.far-A.near)**2))&&(No.copy(C).invert(),Xe.copy(A.ray).applyMatrix4(No),!(e.boundingBox!==null&&Xe.intersectsBox(e.boundingBox)===!1)&&this._computeIntersections(A,g,Xe)))}_computeIntersections(A,g,e){let I;const C=this.geometry,i=this.material,B=C.index,Q=C.attributes.position,n=C.attributes.uv,E=C.attributes.uv1,o=C.attributes.normal,s=C.groups,r=C.drawRange;if(B!==null)if(Array.isArray(i))for(let h=0,d=s.length;h<d;h++){const a=s[h],c=i[a.materialIndex],R=Math.max(a.start,r.start),y=Math.min(B.count,Math.min(a.start+a.count,r.start+r.count));for(let M=R,K=y;M<K;M+=3){const G=B.getX(M),U=B.getX(M+1),W=B.getX(M+2);I=Hi(this,c,A,e,n,E,o,G,U,W),I&&(I.faceIndex=Math.floor(M/3),I.face.materialIndex=a.materialIndex,g.push(I))}}else{const h=Math.max(0,r.start),d=Math.min(B.count,r.start+r.count);for(let a=h,c=d;a<c;a+=3){const R=B.getX(a),y=B.getX(a+1),M=B.getX(a+2);I=Hi(this,i,A,e,n,E,o,R,y,M),I&&(I.faceIndex=Math.floor(a/3),g.push(I))}}else if(Q!==void 0)if(Array.isArray(i))for(let h=0,d=s.length;h<d;h++){const a=s[h],c=i[a.materialIndex],R=Math.max(a.start,r.start),y=Math.min(Q.count,Math.min(a.start+a.count,r.start+r.count));for(let M=R,K=y;M<K;M+=3){const G=M,U=M+1,W=M+2;I=Hi(this,c,A,e,n,E,o,G,U,W),I&&(I.faceIndex=Math.floor(M/3),I.face.materialIndex=a.materialIndex,g.push(I))}}else{const h=Math.max(0,r.start),d=Math.min(Q.count,r.start+r.count);for(let a=h,c=d;a<c;a+=3){const R=a,y=a+1,M=a+2;I=Hi(this,i,A,e,n,E,o,R,y,M),I&&(I.faceIndex=Math.floor(a/3),g.push(I))}}}}function LD(t,A,g,e,I,C,i,B){let Q;if(A.side===st?Q=e.intersectTriangle(i,C,I,!0,B):Q=e.intersectTriangle(I,C,i,A.side===we,B),Q===null)return null;Ji.copy(B),Ji.applyMatrix4(t.matrixWorld);const n=g.ray.origin.distanceTo(Ji);return n<g.near||n>g.far?null:{distance:n,point:Ji.clone(),object:t}}function Hi(t,A,g,e,I,C,i,B,Q,n){t.getVertexPosition(B,bI),t.getVertexPosition(Q,TI),t.getVertexPosition(n,_I);const E=LD(t,A,g,e,bI,TI,_I,Ki);if(E){I&&(ki.fromBufferAttribute(I,B),Gi.fromBufferAttribute(I,Q),mi.fromBufferAttribute(I,n),E.uv=Wt.getInterpolation(Ki,bI,TI,_I,ki,Gi,mi,new Eg)),C&&(ki.fromBufferAttribute(C,B),Gi.fromBufferAttribute(C,Q),mi.fromBufferAttribute(C,n),E.uv1=Wt.getInterpolation(Ki,bI,TI,_I,ki,Gi,mi,new Eg),E.uv2=E.uv1),i&&(ko.fromBufferAttribute(i,B),Go.fromBufferAttribute(i,Q),mo.fromBufferAttribute(i,n),E.normal=Wt.getInterpolation(Ki,bI,TI,_I,ko,Go,mo,new J),E.normal.dot(e.direction)>0&&E.normal.multiplyScalar(-1));const o={a:B,b:Q,c:n,normal:new J,materialIndex:0};Wt.getNormal(bI,TI,_I,o.normal),E.face=o}return E}class Ci extends ge{constructor(A=1,g=1,e=1,I=1,C=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:g,depth:e,widthSegments:I,heightSegments:C,depthSegments:i};const B=this;I=Math.floor(I),C=Math.floor(C),i=Math.floor(i);const Q=[],n=[],E=[],o=[];let s=0,r=0;h("z","y","x",-1,-1,e,g,A,i,C,0),h("z","y","x",1,-1,e,g,-A,i,C,1),h("x","z","y",1,1,A,e,g,I,i,2),h("x","z","y",1,-1,A,e,-g,I,i,3),h("x","y","z",1,-1,A,g,e,I,C,4),h("x","y","z",-1,-1,A,g,-e,I,C,5),this.setIndex(Q),this.setAttribute("position",new de(n,3)),this.setAttribute("normal",new de(E,3)),this.setAttribute("uv",new de(o,2));function h(d,a,c,R,y,M,K,G,U,W,BA){const f=M/U,N=K/W,j=M/2,IA=K/2,m=G/2,V=U+1,x=W+1;let z=0,O=0;const X=new J;for(let $=0;$<x;$++){const EA=$*N-IA;for(let cA=0;cA<V;cA++){const xA=cA*f-j;X[d]=xA*R,X[a]=EA*y,X[c]=m,n.push(X.x,X.y,X.z),X[d]=0,X[a]=0,X[c]=G>0?1:-1,E.push(X.x,X.y,X.z),o.push(cA/U),o.push(1-$/W),z+=1}}for(let $=0;$<W;$++)for(let EA=0;EA<U;EA++){const cA=s+EA+V*$,xA=s+EA+V*($+1),Y=s+(EA+1)+V*($+1),eA=s+(EA+1)+V*$;Q.push(cA,xA,eA),Q.push(xA,Y,eA),O+=6}B.addGroup(r,O,BA),r+=O,s+=z}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Ci(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function sC(t){const A={};for(const g in t){A[g]={};for(const e in t[g]){const I=t[g][e];I&&(I.isColor||I.isMatrix3||I.isMatrix4||I.isVector2||I.isVector3||I.isVector4||I.isTexture||I.isQuaternion)?I.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[g][e]=null):A[g][e]=I.clone():Array.isArray(I)?A[g][e]=I.slice():A[g][e]=I}}return A}function Qt(t){const A={};for(let g=0;g<t.length;g++){const e=sC(t[g]);for(const I in e)A[I]=e[I]}return A}function FD(t){const A=[];for(let g=0;g<t.length;g++)A.push(t[g].clone());return A}function ta(t){return t.getRenderTarget()===null?t.outputColorSpace:dg.workingColorSpace}const ND={clone:sC,merge:Qt};var UD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class be extends Zt{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UD,this.fragmentShader=kD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=sC(A.uniforms),this.uniformsGroups=FD(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const g=super.toJSON(A);g.glslVersion=this.glslVersion,g.uniforms={};for(const I in this.uniforms){const i=this.uniforms[I].value;i&&i.isTexture?g.uniforms[I]={type:"t",value:i.toJSON(A).uuid}:i&&i.isColor?g.uniforms[I]={type:"c",value:i.getHex()}:i&&i.isVector2?g.uniforms[I]={type:"v2",value:i.toArray()}:i&&i.isVector3?g.uniforms[I]={type:"v3",value:i.toArray()}:i&&i.isVector4?g.uniforms[I]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?g.uniforms[I]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?g.uniforms[I]={type:"m4",value:i.toArray()}:g.uniforms[I]={value:i}}Object.keys(this.defines).length>0&&(g.defines=this.defines),g.vertexShader=this.vertexShader,g.fragmentShader=this.fragmentShader,g.lights=this.lights,g.clipping=this.clipping;const e={};for(const I in this.extensions)this.extensions[I]===!0&&(e[I]=!0);return Object.keys(e).length>0&&(g.extensions=e),g}}class ea extends zg{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new og,this.projectionMatrix=new og,this.projectionMatrixInverse=new og,this.coordinateSystem=le}copy(A,g){return super.copy(A,g),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,g){super.updateWorldMatrix(A,g),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ke=new J,Ko=new Eg,Jo=new Eg;class ot extends ea{constructor(A=50,g=1,e=.1,I=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=e,this.far=I,this.focus=10,this.aspect=g,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,g){return super.copy(A,g),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const g=.5*this.getFilmHeight()/A;this.fov=VC*2*Math.atan(g),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(YC*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return VC*2*Math.atan(Math.tan(YC*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,g,e){ke.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(ke.x,ke.y).multiplyScalar(-A/ke.z),ke.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ke.x,ke.y).multiplyScalar(-A/ke.z)}getViewSize(A,g){return this.getViewBounds(A,Ko,Jo),g.subVectors(Jo,Ko)}setViewOffset(A,g,e,I,C,i){this.aspect=A/g,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=g,this.view.offsetX=e,this.view.offsetY=I,this.view.width=C,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let g=A*Math.tan(YC*.5*this.fov)/this.zoom,e=2*g,I=this.aspect*e,C=-.5*I;const i=this.view;if(this.view!==null&&this.view.enabled){const Q=i.fullWidth,n=i.fullHeight;C+=i.offsetX*I/Q,g-=i.offsetY*e/n,I*=i.width/Q,e*=i.height/n}const B=this.filmOffset;B!==0&&(C+=A*B/this.getFilmWidth()),this.projectionMatrix.makePerspective(C,C+I,g,g-e,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const g=super.toJSON(A);return g.object.fov=this.fov,g.object.zoom=this.zoom,g.object.near=this.near,g.object.far=this.far,g.object.focus=this.focus,g.object.aspect=this.aspect,this.view!==null&&(g.object.view=Object.assign({},this.view)),g.object.filmGauge=this.filmGauge,g.object.filmOffset=this.filmOffset,g}}const qI=-90,PI=1;class GD extends zg{constructor(A,g,e){super(),this.type="CubeCamera",this.renderTarget=e,this.coordinateSystem=null,this.activeMipmapLevel=0;const I=new ot(qI,PI,A,g);I.layers=this.layers,this.add(I);const C=new ot(qI,PI,A,g);C.layers=this.layers,this.add(C);const i=new ot(qI,PI,A,g);i.layers=this.layers,this.add(i);const B=new ot(qI,PI,A,g);B.layers=this.layers,this.add(B);const Q=new ot(qI,PI,A,g);Q.layers=this.layers,this.add(Q);const n=new ot(qI,PI,A,g);n.layers=this.layers,this.add(n)}updateCoordinateSystem(){const A=this.coordinateSystem,g=this.children.concat(),[e,I,C,i,B,Q]=g;for(const n of g)this.remove(n);if(A===le)e.up.set(0,1,0),e.lookAt(1,0,0),I.up.set(0,1,0),I.lookAt(-1,0,0),C.up.set(0,0,-1),C.lookAt(0,1,0),i.up.set(0,0,1),i.lookAt(0,-1,0),B.up.set(0,1,0),B.lookAt(0,0,1),Q.up.set(0,1,0),Q.lookAt(0,0,-1);else if(A===rB)e.up.set(0,-1,0),e.lookAt(-1,0,0),I.up.set(0,-1,0),I.lookAt(1,0,0),C.up.set(0,0,1),C.lookAt(0,1,0),i.up.set(0,0,-1),i.lookAt(0,-1,0),B.up.set(0,-1,0),B.lookAt(0,0,1),Q.up.set(0,-1,0),Q.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const n of g)this.add(n),n.updateMatrixWorld()}update(A,g){this.parent===null&&this.updateMatrixWorld();const{renderTarget:e,activeMipmapLevel:I}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[C,i,B,Q,n,E]=this.children,o=A.getRenderTarget(),s=A.getActiveCubeFace(),r=A.getActiveMipmapLevel(),h=A.xr.enabled;A.xr.enabled=!1;const d=e.texture.generateMipmaps;e.texture.generateMipmaps=!1,A.setRenderTarget(e,0,I),A.render(g,C),A.setRenderTarget(e,1,I),A.render(g,i),A.setRenderTarget(e,2,I),A.render(g,B),A.setRenderTarget(e,3,I),A.render(g,Q),A.setRenderTarget(e,4,I),A.render(g,n),e.texture.generateMipmaps=d,A.setRenderTarget(e,5,I),A.render(g,E),A.setRenderTarget(o,s,r),A.xr.enabled=h,e.texture.needsPMREMUpdate=!0}}class Ia extends Wg{constructor(A,g,e,I,C,i,B,Q,n,E){A=A!==void 0?A:[],g=g!==void 0?g:BC,super(A,g,e,I,C,i,B,Q,n,E),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class mD extends cI{constructor(A=1,g={}){super(A,A,g),this.isWebGLCubeRenderTarget=!0;const e={width:A,height:A,depth:1},I=[e,e,e,e,e,e];g.encoding!==void 0&&(oI("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===EI?vg:Ft),this.texture=new Ia(I,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:et}fromEquirectangularTexture(A,g){this.texture.type=g.type,this.texture.colorSpace=g.colorSpace,this.texture.generateMipmaps=g.generateMipmaps,this.texture.minFilter=g.minFilter,this.texture.magFilter=g.magFilter;const e={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},I=new Ci(5,5,5),C=new be({name:"CubemapFromEquirect",uniforms:sC(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:st,blending:ve});C.uniforms.tEquirect.value=g;const i=new xt(I,C),B=g.minFilter;return g.minFilter===he&&(g.minFilter=et),new GD(1,10,this).update(A,i),g.minFilter=B,i.geometry.dispose(),i.material.dispose(),this}clear(A,g,e,I){const C=A.getRenderTarget();for(let i=0;i<6;i++)A.setRenderTarget(this,i),A.clear(g,e,I);A.setRenderTarget(C)}}const wQ=new J,KD=new J,JD=new gg;class tI{constructor(A=new J(1,0,0),g=0){this.isPlane=!0,this.normal=A,this.constant=g}set(A,g){return this.normal.copy(A),this.constant=g,this}setComponents(A,g,e,I){return this.normal.set(A,g,e),this.constant=I,this}setFromNormalAndCoplanarPoint(A,g){return this.normal.copy(A),this.constant=-g.dot(this.normal),this}setFromCoplanarPoints(A,g,e){const I=wQ.subVectors(e,g).cross(KD.subVectors(A,g)).normalize();return this.setFromNormalAndCoplanarPoint(I,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,g){return g.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,g){const e=A.delta(wQ),I=this.normal.dot(e);if(I===0)return this.distanceToPoint(A.start)===0?g.copy(A.start):null;const C=-(A.start.dot(this.normal)+this.constant)/I;return C<0||C>1?null:g.copy(A.start).addScaledVector(e,C)}intersectsLine(A){const g=this.distanceToPoint(A.start),e=this.distanceToPoint(A.end);return g<0&&e>0||e<0&&g>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,g){const e=g||JD.getNormalMatrix(A),I=this.coplanarPoint(wQ).applyMatrix4(A),C=this.normal.applyMatrix3(e).normalize();return this.constant=-I.dot(C),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const je=new qe,vi=new J;class xn{constructor(A=new tI,g=new tI,e=new tI,I=new tI,C=new tI,i=new tI){this.planes=[A,g,e,I,C,i]}set(A,g,e,I,C,i){const B=this.planes;return B[0].copy(A),B[1].copy(g),B[2].copy(e),B[3].copy(I),B[4].copy(C),B[5].copy(i),this}copy(A){const g=this.planes;for(let e=0;e<6;e++)g[e].copy(A.planes[e]);return this}setFromProjectionMatrix(A,g=le){const e=this.planes,I=A.elements,C=I[0],i=I[1],B=I[2],Q=I[3],n=I[4],E=I[5],o=I[6],s=I[7],r=I[8],h=I[9],d=I[10],a=I[11],c=I[12],R=I[13],y=I[14],M=I[15];if(e[0].setComponents(Q-C,s-n,a-r,M-c).normalize(),e[1].setComponents(Q+C,s+n,a+r,M+c).normalize(),e[2].setComponents(Q+i,s+E,a+h,M+R).normalize(),e[3].setComponents(Q-i,s-E,a-h,M-R).normalize(),e[4].setComponents(Q-B,s-o,a-d,M-y).normalize(),g===le)e[5].setComponents(Q+B,s+o,a+d,M+y).normalize();else if(g===rB)e[5].setComponents(B,o,d,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+g);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),je.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const g=A.geometry;g.boundingSphere===null&&g.computeBoundingSphere(),je.copy(g.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(je)}intersectsSprite(A){return je.center.set(0,0,0),je.radius=.7071067811865476,je.applyMatrix4(A.matrixWorld),this.intersectsSphere(je)}intersectsSphere(A){const g=this.planes,e=A.center,I=-A.radius;for(let C=0;C<6;C++)if(g[C].distanceToPoint(e)<I)return!1;return!0}intersectsBox(A){const g=this.planes;for(let e=0;e<6;e++){const I=g[e];if(vi.x=I.normal.x>0?A.max.x:A.min.x,vi.y=I.normal.y>0?A.max.y:A.min.y,vi.z=I.normal.z>0?A.max.z:A.min.z,I.distanceToPoint(vi)<0)return!1}return!0}containsPoint(A){const g=this.planes;for(let e=0;e<6;e++)if(g[e].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ca(){let t=null,A=!1,g=null,e=null;function I(C,i){g(C,i),e=t.requestAnimationFrame(I)}return{start:function(){A!==!0&&g!==null&&(e=t.requestAnimationFrame(I),A=!0)},stop:function(){t.cancelAnimationFrame(e),A=!1},setAnimationLoop:function(C){g=C},setContext:function(C){t=C}}}function HD(t,A){const g=A.isWebGL2,e=new WeakMap;function I(n,E){const o=n.array,s=n.usage,r=o.byteLength,h=t.createBuffer();t.bindBuffer(E,h),t.bufferData(E,o,s),n.onUploadCallback();let d;if(o instanceof Float32Array)d=t.FLOAT;else if(o instanceof Uint16Array)if(n.isFloat16BufferAttribute)if(g)d=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else d=t.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=t.SHORT;else if(o instanceof Uint32Array)d=t.UNSIGNED_INT;else if(o instanceof Int32Array)d=t.INT;else if(o instanceof Int8Array)d=t.BYTE;else if(o instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:n.version,size:r}}function C(n,E,o){const s=E.array,r=E._updateRange,h=E.updateRanges;if(t.bindBuffer(o,n),r.count===-1&&h.length===0&&t.bufferSubData(o,0,s),h.length!==0){for(let d=0,a=h.length;d<a;d++){const c=h[d];g?t.bufferSubData(o,c.start*s.BYTES_PER_ELEMENT,s,c.start,c.count):t.bufferSubData(o,c.start*s.BYTES_PER_ELEMENT,s.subarray(c.start,c.start+c.count))}E.clearUpdateRanges()}r.count!==-1&&(g?t.bufferSubData(o,r.offset*s.BYTES_PER_ELEMENT,s,r.offset,r.count):t.bufferSubData(o,r.offset*s.BYTES_PER_ELEMENT,s.subarray(r.offset,r.offset+r.count)),r.count=-1),E.onUploadCallback()}function i(n){return n.isInterleavedBufferAttribute&&(n=n.data),e.get(n)}function B(n){n.isInterleavedBufferAttribute&&(n=n.data);const E=e.get(n);E&&(t.deleteBuffer(E.buffer),e.delete(n))}function Q(n,E){if(n.isGLBufferAttribute){const s=e.get(n);(!s||s.version<n.version)&&e.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version});return}n.isInterleavedBufferAttribute&&(n=n.data);const o=e.get(n);if(o===void 0)e.set(n,I(n,E));else if(o.version<n.version){if(o.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");C(o.buffer,n,E),o.version=n.version}}return{get:i,remove:B,update:Q}}class UB extends ge{constructor(A=1,g=1,e=1,I=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:g,widthSegments:e,heightSegments:I};const C=A/2,i=g/2,B=Math.floor(e),Q=Math.floor(I),n=B+1,E=Q+1,o=A/B,s=g/Q,r=[],h=[],d=[],a=[];for(let c=0;c<E;c++){const R=c*s-i;for(let y=0;y<n;y++){const M=y*o-C;h.push(M,-R,0),d.push(0,0,1),a.push(y/B),a.push(1-c/Q)}}for(let c=0;c<Q;c++)for(let R=0;R<B;R++){const y=R+n*c,M=R+n*(c+1),K=R+1+n*(c+1),G=R+1+n*c;r.push(y,M,G),r.push(M,K,G)}this.setIndex(r),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(a,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new UB(A.width,A.height,A.widthSegments,A.heightSegments)}}var vD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xD=`#ifdef USE_ALPHAHASH
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
#endif`,YD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_D=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qD=`#ifdef USE_AOMAP
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
#endif`,PD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OD=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,VD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,WD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZD=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XD=`#ifdef USE_IRIDESCENCE
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
#endif`,jD=`#ifdef USE_BUMPMAP
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
#endif`,$D=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bd=`#define PI 3.141592653589793
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
} // validated`,Qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nd=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",cd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,hd=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
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
}`,Md=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
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
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hd=`struct PhysicalMaterial {
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,vd=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jd=`#ifdef USE_MORPHNORMALS
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
#endif`,$d=`#ifdef USE_MORPHTARGETS
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
#endif`,Af=`#ifdef USE_MORPHTARGETS
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
#endif`,gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bf=`#ifdef USE_NORMALMAP
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
#endif`,Qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yf=`float getShadowMask() {
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
}`,pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rf=`#ifdef USE_SKINNING
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
#endif`,Lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kf=`#ifdef USE_TRANSMISSION
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
#endif`,Gf=`#ifdef USE_TRANSMISSION
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xf=`uniform sampler2D t2D;
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`#include <common>
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
}`,Pf=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Of=`#define DISTANCE
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
}`,Vf=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`uniform float scale;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,jf=`#include <common>
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
}`,$f=`uniform vec3 diffuse;
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
}`,Au=`#define LAMBERT
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
}`,gu=`#define LAMBERT
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
}`,tu=`#define MATCAP
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
}`,eu=`#define MATCAP
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
}`,Iu=`#define NORMAL
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
}`,Cu=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iu=`#define PHONG
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
}`,Bu=`#define PHONG
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
}`,Qu=`#define STANDARD
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
}`,nu=`#define STANDARD
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Eu=`#define TOON
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
}`,ou=`#define TOON
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
}`,su=`uniform float size;
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
}`,ru=`uniform vec3 diffuse;
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
}`,au=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,cu=`uniform vec3 color;
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
}`,hu=`uniform float rotation;
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
}`,lu=`uniform vec3 diffuse;
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
}`,$A={alphahash_fragment:vD,alphahash_pars_fragment:xD,alphamap_fragment:YD,alphamap_pars_fragment:bD,alphatest_fragment:TD,alphatest_pars_fragment:_D,aomap_fragment:qD,aomap_pars_fragment:PD,batching_pars_vertex:OD,batching_vertex:VD,begin_vertex:WD,beginnormal_vertex:zD,bsdfs:ZD,iridescence_fragment:XD,bumpmap_pars_fragment:jD,clipping_planes_fragment:$D,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:gd,clipping_planes_vertex:td,color_fragment:ed,color_pars_fragment:Id,color_pars_vertex:Cd,color_vertex:id,common:Bd,cube_uv_reflection_fragment:Qd,defaultnormal_vertex:nd,displacementmap_pars_vertex:Ed,displacementmap_vertex:od,emissivemap_fragment:sd,emissivemap_pars_fragment:rd,colorspace_fragment:ad,colorspace_pars_fragment:cd,envmap_fragment:hd,envmap_common_pars_fragment:ld,envmap_pars_fragment:Dd,envmap_pars_vertex:dd,envmap_physical_pars_fragment:Ud,envmap_vertex:fd,fog_vertex:ud,fog_pars_vertex:wd,fog_fragment:yd,fog_pars_fragment:pd,gradientmap_pars_fragment:Sd,lightmap_fragment:Md,lightmap_pars_fragment:Rd,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Fd,lights_pars_begin:Nd,lights_toon_fragment:kd,lights_toon_pars_fragment:Gd,lights_phong_fragment:md,lights_phong_pars_fragment:Kd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Hd,lights_fragment_begin:vd,lights_fragment_maps:xd,lights_fragment_end:Yd,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:_d,logdepthbuf_vertex:qd,map_fragment:Pd,map_pars_fragment:Od,map_particle_fragment:Vd,map_particle_pars_fragment:Wd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Zd,morphcolor_vertex:Xd,morphnormal_vertex:jd,morphtarget_pars_vertex:$d,morphtarget_vertex:Af,normal_fragment_begin:gf,normal_fragment_maps:tf,normal_pars_fragment:ef,normal_pars_vertex:If,normal_vertex:Cf,normalmap_pars_fragment:Bf,clearcoat_normal_fragment_begin:Qf,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:of,opaque_fragment:sf,packing:rf,premultiplied_alpha_fragment:af,project_vertex:cf,dithering_fragment:hf,dithering_pars_fragment:lf,roughnessmap_fragment:Df,roughnessmap_pars_fragment:df,shadowmap_pars_fragment:ff,shadowmap_pars_vertex:uf,shadowmap_vertex:wf,shadowmask_pars_fragment:yf,skinbase_vertex:pf,skinning_pars_vertex:Sf,skinning_vertex:Mf,skinnormal_vertex:Rf,specularmap_fragment:Lf,specularmap_pars_fragment:Ff,tonemapping_fragment:Nf,tonemapping_pars_fragment:Uf,transmission_fragment:kf,transmission_pars_fragment:Gf,uv_pars_fragment:mf,uv_pars_vertex:Kf,uv_vertex:Jf,worldpos_vertex:Hf,background_vert:vf,background_frag:xf,backgroundCube_vert:Yf,backgroundCube_frag:bf,cube_vert:Tf,cube_frag:_f,depth_vert:qf,depth_frag:Pf,distanceRGBA_vert:Of,distanceRGBA_frag:Vf,equirect_vert:Wf,equirect_frag:zf,linedashed_vert:Zf,linedashed_frag:Xf,meshbasic_vert:jf,meshbasic_frag:$f,meshlambert_vert:Au,meshlambert_frag:gu,meshmatcap_vert:tu,meshmatcap_frag:eu,meshnormal_vert:Iu,meshnormal_frag:Cu,meshphong_vert:iu,meshphong_frag:Bu,meshphysical_vert:Qu,meshphysical_frag:nu,meshtoon_vert:Eu,meshtoon_frag:ou,points_vert:su,points_frag:ru,shadow_vert:au,shadow_frag:cu,sprite_vert:hu,sprite_frag:lu},aA={common:{diffuse:{value:new Bg(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gg},alphaMap:{value:null},alphaMapTransform:{value:new gg},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gg}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gg}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gg}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gg},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gg},normalScale:{value:new Eg(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gg},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gg}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gg}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gg}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bg(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bg(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gg},alphaTest:{value:0},uvTransform:{value:new gg}},sprite:{diffuse:{value:new Bg(16777215)},opacity:{value:1},center:{value:new Eg(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gg},alphaMap:{value:null},alphaMapTransform:{value:new gg},alphaTest:{value:0}}},Pt={basic:{uniforms:Qt([aA.common,aA.specularmap,aA.envmap,aA.aomap,aA.lightmap,aA.fog]),vertexShader:$A.meshbasic_vert,fragmentShader:$A.meshbasic_frag},lambert:{uniforms:Qt([aA.common,aA.specularmap,aA.envmap,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.fog,aA.lights,{emissive:{value:new Bg(0)}}]),vertexShader:$A.meshlambert_vert,fragmentShader:$A.meshlambert_frag},phong:{uniforms:Qt([aA.common,aA.specularmap,aA.envmap,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.fog,aA.lights,{emissive:{value:new Bg(0)},specular:{value:new Bg(1118481)},shininess:{value:30}}]),vertexShader:$A.meshphong_vert,fragmentShader:$A.meshphong_frag},standard:{uniforms:Qt([aA.common,aA.envmap,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.roughnessmap,aA.metalnessmap,aA.fog,aA.lights,{emissive:{value:new Bg(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$A.meshphysical_vert,fragmentShader:$A.meshphysical_frag},toon:{uniforms:Qt([aA.common,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.gradientmap,aA.fog,aA.lights,{emissive:{value:new Bg(0)}}]),vertexShader:$A.meshtoon_vert,fragmentShader:$A.meshtoon_frag},matcap:{uniforms:Qt([aA.common,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.fog,{matcap:{value:null}}]),vertexShader:$A.meshmatcap_vert,fragmentShader:$A.meshmatcap_frag},points:{uniforms:Qt([aA.points,aA.fog]),vertexShader:$A.points_vert,fragmentShader:$A.points_frag},dashed:{uniforms:Qt([aA.common,aA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$A.linedashed_vert,fragmentShader:$A.linedashed_frag},depth:{uniforms:Qt([aA.common,aA.displacementmap]),vertexShader:$A.depth_vert,fragmentShader:$A.depth_frag},normal:{uniforms:Qt([aA.common,aA.bumpmap,aA.normalmap,aA.displacementmap,{opacity:{value:1}}]),vertexShader:$A.meshnormal_vert,fragmentShader:$A.meshnormal_frag},sprite:{uniforms:Qt([aA.sprite,aA.fog]),vertexShader:$A.sprite_vert,fragmentShader:$A.sprite_frag},background:{uniforms:{uvTransform:{value:new gg},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$A.background_vert,fragmentShader:$A.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$A.backgroundCube_vert,fragmentShader:$A.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$A.cube_vert,fragmentShader:$A.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$A.equirect_vert,fragmentShader:$A.equirect_frag},distanceRGBA:{uniforms:Qt([aA.common,aA.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$A.distanceRGBA_vert,fragmentShader:$A.distanceRGBA_frag},shadow:{uniforms:Qt([aA.lights,aA.fog,{color:{value:new Bg(0)},opacity:{value:1}}]),vertexShader:$A.shadow_vert,fragmentShader:$A.shadow_frag}};Pt.physical={uniforms:Qt([Pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gg},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gg},clearcoatNormalScale:{value:new Eg(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gg},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gg},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gg},sheen:{value:0},sheenColor:{value:new Bg(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gg},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gg},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gg},transmissionSamplerSize:{value:new Eg},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gg},attenuationDistance:{value:0},attenuationColor:{value:new Bg(0)},specularColor:{value:new Bg(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gg},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gg},anisotropyVector:{value:new Eg},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gg}}]),vertexShader:$A.meshphysical_vert,fragmentShader:$A.meshphysical_frag};const xi={r:0,b:0,g:0};function Du(t,A,g,e,I,C,i){const B=new Bg(0);let Q=C===!0?0:1,n,E,o=null,s=0,r=null;function h(a,c){let R=!1,y=c.isScene===!0?c.background:null;y&&y.isTexture&&(y=(c.backgroundBlurriness>0?g:A).get(y)),y===null?d(B,Q):y&&y.isColor&&(d(y,1),R=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,i):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,i),(t.autoClear||R)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===RB)?(E===void 0&&(E=new xt(new Ci(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:sC(Pt.backgroundCube.uniforms),vertexShader:Pt.backgroundCube.vertexShader,fragmentShader:Pt.backgroundCube.fragmentShader,side:st,depthTest:!1,depthWrite:!1,fog:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(K,G,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),I.update(E)),E.material.uniforms.envMap.value=y,E.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,E.material.toneMapped=dg.getTransfer(y.colorSpace)!==Ng,(o!==y||s!==y.version||r!==t.toneMapping)&&(E.material.needsUpdate=!0,o=y,s=y.version,r=t.toneMapping),E.layers.enableAll(),a.unshift(E,E.geometry,E.material,0,0,null)):y&&y.isTexture&&(n===void 0&&(n=new xt(new UB(2,2),new be({name:"BackgroundMaterial",uniforms:sC(Pt.background.uniforms),vertexShader:Pt.background.vertexShader,fragmentShader:Pt.background.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),n.geometry.deleteAttribute("normal"),Object.defineProperty(n.material,"map",{get:function(){return this.uniforms.t2D.value}}),I.update(n)),n.material.uniforms.t2D.value=y,n.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,n.material.toneMapped=dg.getTransfer(y.colorSpace)!==Ng,y.matrixAutoUpdate===!0&&y.updateMatrix(),n.material.uniforms.uvTransform.value.copy(y.matrix),(o!==y||s!==y.version||r!==t.toneMapping)&&(n.material.needsUpdate=!0,o=y,s=y.version,r=t.toneMapping),n.layers.enableAll(),a.unshift(n,n.geometry,n.material,0,0,null))}function d(a,c){a.getRGB(xi,ta(t)),e.buffers.color.setClear(xi.r,xi.g,xi.b,c,i)}return{getClearColor:function(){return B},setClearColor:function(a,c=1){B.set(a),Q=c,d(B,Q)},getClearAlpha:function(){return Q},setClearAlpha:function(a){Q=a,d(B,Q)},render:h}}function du(t,A,g,e){const I=t.getParameter(t.MAX_VERTEX_ATTRIBS),C=e.isWebGL2?null:A.get("OES_vertex_array_object"),i=e.isWebGL2||C!==null,B={},Q=a(null);let n=Q,E=!1;function o(m,V,x,z,O){let X=!1;if(i){const $=d(z,x,V);n!==$&&(n=$,r(n.object)),X=c(m,z,x,O),X&&R(m,z,x,O)}else{const $=V.wireframe===!0;(n.geometry!==z.id||n.program!==x.id||n.wireframe!==$)&&(n.geometry=z.id,n.program=x.id,n.wireframe=$,X=!0)}O!==null&&g.update(O,t.ELEMENT_ARRAY_BUFFER),(X||E)&&(E=!1,W(m,V,x,z),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,g.get(O).buffer))}function s(){return e.isWebGL2?t.createVertexArray():C.createVertexArrayOES()}function r(m){return e.isWebGL2?t.bindVertexArray(m):C.bindVertexArrayOES(m)}function h(m){return e.isWebGL2?t.deleteVertexArray(m):C.deleteVertexArrayOES(m)}function d(m,V,x){const z=x.wireframe===!0;let O=B[m.id];O===void 0&&(O={},B[m.id]=O);let X=O[V.id];X===void 0&&(X={},O[V.id]=X);let $=X[z];return $===void 0&&($=a(s()),X[z]=$),$}function a(m){const V=[],x=[],z=[];for(let O=0;O<I;O++)V[O]=0,x[O]=0,z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:x,attributeDivisors:z,object:m,attributes:{},index:null}}function c(m,V,x,z){const O=n.attributes,X=V.attributes;let $=0;const EA=x.getAttributes();for(const cA in EA)if(EA[cA].location>=0){const Y=O[cA];let eA=X[cA];if(eA===void 0&&(cA==="instanceMatrix"&&m.instanceMatrix&&(eA=m.instanceMatrix),cA==="instanceColor"&&m.instanceColor&&(eA=m.instanceColor)),Y===void 0||Y.attribute!==eA||eA&&Y.data!==eA.data)return!0;$++}return n.attributesNum!==$||n.index!==z}function R(m,V,x,z){const O={},X=V.attributes;let $=0;const EA=x.getAttributes();for(const cA in EA)if(EA[cA].location>=0){let Y=X[cA];Y===void 0&&(cA==="instanceMatrix"&&m.instanceMatrix&&(Y=m.instanceMatrix),cA==="instanceColor"&&m.instanceColor&&(Y=m.instanceColor));const eA={};eA.attribute=Y,Y&&Y.data&&(eA.data=Y.data),O[cA]=eA,$++}n.attributes=O,n.attributesNum=$,n.index=z}function y(){const m=n.newAttributes;for(let V=0,x=m.length;V<x;V++)m[V]=0}function M(m){K(m,0)}function K(m,V){const x=n.newAttributes,z=n.enabledAttributes,O=n.attributeDivisors;x[m]=1,z[m]===0&&(t.enableVertexAttribArray(m),z[m]=1),O[m]!==V&&((e.isWebGL2?t:A.get("ANGLE_instanced_arrays"))[e.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](m,V),O[m]=V)}function G(){const m=n.newAttributes,V=n.enabledAttributes;for(let x=0,z=V.length;x<z;x++)V[x]!==m[x]&&(t.disableVertexAttribArray(x),V[x]=0)}function U(m,V,x,z,O,X,$){$===!0?t.vertexAttribIPointer(m,V,x,O,X):t.vertexAttribPointer(m,V,x,z,O,X)}function W(m,V,x,z){if(e.isWebGL2===!1&&(m.isInstancedMesh||z.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;y();const O=z.attributes,X=x.getAttributes(),$=V.defaultAttributeValues;for(const EA in X){const cA=X[EA];if(cA.location>=0){let xA=O[EA];if(xA===void 0&&(EA==="instanceMatrix"&&m.instanceMatrix&&(xA=m.instanceMatrix),EA==="instanceColor"&&m.instanceColor&&(xA=m.instanceColor)),xA!==void 0){const Y=xA.normalized,eA=xA.itemSize,dA=g.get(xA);if(dA===void 0)continue;const KA=dA.buffer,NA=dA.type,wA=dA.bytesPerElement,Qg=e.isWebGL2===!0&&(NA===t.INT||NA===t.UNSIGNED_INT||xA.gpuType===Hr);if(xA.isInterleavedBufferAttribute){const qA=xA.data,v=qA.stride,hg=xA.offset;if(qA.isInstancedInterleavedBuffer){for(let hA=0;hA<cA.locationSize;hA++)K(cA.location+hA,qA.meshPerAttribute);m.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=qA.meshPerAttribute*qA.count)}else for(let hA=0;hA<cA.locationSize;hA++)M(cA.location+hA);t.bindBuffer(t.ARRAY_BUFFER,KA);for(let hA=0;hA<cA.locationSize;hA++)U(cA.location+hA,eA/cA.locationSize,NA,Y,v*wA,(hg+eA/cA.locationSize*hA)*wA,Qg)}else{if(xA.isInstancedBufferAttribute){for(let qA=0;qA<cA.locationSize;qA++)K(cA.location+qA,xA.meshPerAttribute);m.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xA.meshPerAttribute*xA.count)}else for(let qA=0;qA<cA.locationSize;qA++)M(cA.location+qA);t.bindBuffer(t.ARRAY_BUFFER,KA);for(let qA=0;qA<cA.locationSize;qA++)U(cA.location+qA,eA/cA.locationSize,NA,Y,eA*wA,eA/cA.locationSize*qA*wA,Qg)}}else if($!==void 0){const Y=$[EA];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(cA.location,Y);break;case 3:t.vertexAttrib3fv(cA.location,Y);break;case 4:t.vertexAttrib4fv(cA.location,Y);break;default:t.vertexAttrib1fv(cA.location,Y)}}}}G()}function BA(){j();for(const m in B){const V=B[m];for(const x in V){const z=V[x];for(const O in z)h(z[O].object),delete z[O];delete V[x]}delete B[m]}}function f(m){if(B[m.id]===void 0)return;const V=B[m.id];for(const x in V){const z=V[x];for(const O in z)h(z[O].object),delete z[O];delete V[x]}delete B[m.id]}function N(m){for(const V in B){const x=B[V];if(x[m.id]===void 0)continue;const z=x[m.id];for(const O in z)h(z[O].object),delete z[O];delete x[m.id]}}function j(){IA(),E=!0,n!==Q&&(n=Q,r(n.object))}function IA(){Q.geometry=null,Q.program=null,Q.wireframe=!1}return{setup:o,reset:j,resetDefaultState:IA,dispose:BA,releaseStatesOfGeometry:f,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:M,disableUnusedAttributes:G}}function fu(t,A,g,e){const I=e.isWebGL2;let C;function i(E){C=E}function B(E,o){t.drawArrays(C,E,o),g.update(o,C,1)}function Q(E,o,s){if(s===0)return;let r,h;if(I)r=t,h="drawArraysInstanced";else if(r=A.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",r===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}r[h](C,E,o,s),g.update(o,C,s)}function n(E,o,s){if(s===0)return;const r=A.get("WEBGL_multi_draw");if(r===null)for(let h=0;h<s;h++)this.render(E[h],o[h]);else{r.multiDrawArraysWEBGL(C,E,0,o,0,s);let h=0;for(let d=0;d<s;d++)h+=o[d];g.update(h,C,1)}}this.setMode=i,this.render=B,this.renderInstances=Q,this.renderMultiDraw=n}function uu(t,A,g){let e;function I(){if(e!==void 0)return e;if(A.has("EXT_texture_filter_anisotropic")===!0){const U=A.get("EXT_texture_filter_anisotropic");e=t.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else e=0;return e}function C(U){if(U==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const i=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let B=g.precision!==void 0?g.precision:"highp";const Q=C(B);Q!==B&&(console.warn("THREE.WebGLRenderer:",B,"not supported, using",Q,"instead."),B=Q);const n=i||A.has("WEBGL_draw_buffers"),E=g.logarithmicDepthBuffer===!0,o=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),s=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),r=t.getParameter(t.MAX_TEXTURE_SIZE),h=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),R=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=s>0,M=i||A.has("OES_texture_float"),K=y&&M,G=i?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:i,drawBuffers:n,getMaxAnisotropy:I,getMaxPrecision:C,precision:B,logarithmicDepthBuffer:E,maxTextures:o,maxVertexTextures:s,maxTextureSize:r,maxCubemapSize:h,maxAttributes:d,maxVertexUniforms:a,maxVaryings:c,maxFragmentUniforms:R,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:K,maxSamples:G}}function wu(t){const A=this;let g=null,e=0,I=!1,C=!1;const i=new tI,B=new gg,Q={value:null,needsUpdate:!1};this.uniform=Q,this.numPlanes=0,this.numIntersection=0,this.init=function(o,s){const r=o.length!==0||s||e!==0||I;return I=s,e=o.length,r},this.beginShadows=function(){C=!0,E(null)},this.endShadows=function(){C=!1},this.setGlobalState=function(o,s){g=E(o,s,0)},this.setState=function(o,s,r){const h=o.clippingPlanes,d=o.clipIntersection,a=o.clipShadows,c=t.get(o);if(!I||h===null||h.length===0||C&&!a)C?E(null):n();else{const R=C?0:e,y=R*4;let M=c.clippingState||null;Q.value=M,M=E(h,s,y,r);for(let K=0;K!==y;++K)M[K]=g[K];c.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=R}};function n(){Q.value!==g&&(Q.value=g,Q.needsUpdate=e>0),A.numPlanes=e,A.numIntersection=0}function E(o,s,r,h){const d=o!==null?o.length:0;let a=null;if(d!==0){if(a=Q.value,h!==!0||a===null){const c=r+d*4,R=s.matrixWorldInverse;B.getNormalMatrix(R),(a===null||a.length<c)&&(a=new Float32Array(c));for(let y=0,M=r;y!==d;++y,M+=4)i.copy(o[y]).applyMatrix4(R,B),i.normal.toArray(a,M),a[M+3]=i.constant}Q.value=a,Q.needsUpdate=!0}return A.numPlanes=d,A.numIntersection=0,a}}function yu(t){let A=new WeakMap;function g(i,B){return B===An?i.mapping=BC:B===gn&&(i.mapping=QC),i}function e(i){if(i&&i.isTexture){const B=i.mapping;if(B===An||B===gn)if(A.has(i)){const Q=A.get(i).texture;return g(Q,i.mapping)}else{const Q=i.image;if(Q&&Q.height>0){const n=new mD(Q.height);return n.fromEquirectangularTexture(t,i),A.set(i,n),i.addEventListener("dispose",I),g(n.texture,i.mapping)}else return null}}return i}function I(i){const B=i.target;B.removeEventListener("dispose",I);const Q=A.get(B);Q!==void 0&&(A.delete(B),Q.dispose())}function C(){A=new WeakMap}return{get:e,dispose:C}}class ia extends ea{constructor(A=-1,g=1,e=1,I=-1,C=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=g,this.top=e,this.bottom=I,this.near=C,this.far=i,this.updateProjectionMatrix()}copy(A,g){return super.copy(A,g),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,g,e,I,C,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=g,this.view.offsetX=e,this.view.offsetY=I,this.view.width=C,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),g=(this.top-this.bottom)/(2*this.zoom),e=(this.right+this.left)/2,I=(this.top+this.bottom)/2;let C=e-A,i=e+A,B=I+g,Q=I-g;if(this.view!==null&&this.view.enabled){const n=(this.right-this.left)/this.view.fullWidth/this.zoom,E=(this.top-this.bottom)/this.view.fullHeight/this.zoom;C+=n*this.view.offsetX,i=C+n*this.view.width,B-=E*this.view.offsetY,Q=B-E*this.view.height}this.projectionMatrix.makeOrthographic(C,i,B,Q,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const g=super.toJSON(A);return g.object.zoom=this.zoom,g.object.left=this.left,g.object.right=this.right,g.object.top=this.top,g.object.bottom=this.bottom,g.object.near=this.near,g.object.far=this.far,this.view!==null&&(g.object.view=Object.assign({},this.view)),g}}const XI=4,Ho=[.125,.215,.35,.446,.526,.582],iI=20,yQ=new ia,vo=new Bg;let pQ=null,SQ=0,MQ=0;const eI=(1+Math.sqrt(5))/2,OI=1/eI,xo=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,eI,OI),new J(0,eI,-OI),new J(OI,0,eI),new J(-OI,0,eI),new J(eI,OI,0),new J(-eI,OI,0)];class Yo{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,g=0,e=.1,I=100){pQ=this._renderer.getRenderTarget(),SQ=this._renderer.getActiveCubeFace(),MQ=this._renderer.getActiveMipmapLevel(),this._setSize(256);const C=this._allocateTargets();return C.depthBuffer=!0,this._sceneToCubeUV(A,e,I,C),g>0&&this._blur(C,0,0,g),this._applyPMREM(C),this._cleanup(C),C}fromEquirectangular(A,g=null){return this._fromTexture(A,g)}fromCubemap(A,g=null){return this._fromTexture(A,g)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=To(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(pQ,SQ,MQ),A.scissorTest=!1,Yi(A,0,0,A.width,A.height)}_fromTexture(A,g){A.mapping===BC||A.mapping===QC?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),pQ=this._renderer.getRenderTarget(),SQ=this._renderer.getActiveCubeFace(),MQ=this._renderer.getActiveMipmapLevel();const e=g||this._allocateTargets();return this._textureToCubeUV(A,e),this._applyPMREM(e),this._cleanup(e),e}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),g=4*this._cubeSize,e={magFilter:et,minFilter:et,generateMipmaps:!1,type:PC,format:Lt,colorSpace:kt,depthBuffer:!1},I=bo(A,g,e);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==g){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bo(A,g,e);const{_lodMax:C}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pu(C)),this._blurMaterial=Su(C,A,g)}return I}_compileMaterial(A){const g=new xt(this._lodPlanes[0],A);this._renderer.compile(g,yQ)}_sceneToCubeUV(A,g,e,I){const B=new ot(90,1,g,e),Q=[1,-1,1,1,1,1],n=[1,1,1,-1,-1,-1],E=this._renderer,o=E.autoClear,s=E.toneMapping;E.getClearColor(vo),E.toneMapping=xe,E.autoClear=!1;const r=new ZI({name:"PMREM.Background",side:st,depthWrite:!1,depthTest:!1}),h=new xt(new Ci,r);let d=!1;const a=A.background;a?a.isColor&&(r.color.copy(a),A.background=null,d=!0):(r.color.copy(vo),d=!0);for(let c=0;c<6;c++){const R=c%3;R===0?(B.up.set(0,Q[c],0),B.lookAt(n[c],0,0)):R===1?(B.up.set(0,0,Q[c]),B.lookAt(0,n[c],0)):(B.up.set(0,Q[c],0),B.lookAt(0,0,n[c]));const y=this._cubeSize;Yi(I,R*y,c>2?y:0,y,y),E.setRenderTarget(I),d&&E.render(h,B),E.render(A,B)}h.geometry.dispose(),h.material.dispose(),E.toneMapping=s,E.autoClear=o,A.background=a}_textureToCubeUV(A,g){const e=this._renderer,I=A.mapping===BC||A.mapping===QC;I?(this._cubemapMaterial===null&&(this._cubemapMaterial=_o()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=To());const C=I?this._cubemapMaterial:this._equirectMaterial,i=new xt(this._lodPlanes[0],C),B=C.uniforms;B.envMap.value=A;const Q=this._cubeSize;Yi(g,0,0,3*Q,2*Q),e.setRenderTarget(g),e.render(i,yQ)}_applyPMREM(A){const g=this._renderer,e=g.autoClear;g.autoClear=!1;for(let I=1;I<this._lodPlanes.length;I++){const C=Math.sqrt(this._sigmas[I]*this._sigmas[I]-this._sigmas[I-1]*this._sigmas[I-1]),i=xo[(I-1)%xo.length];this._blur(A,I-1,I,C,i)}g.autoClear=e}_blur(A,g,e,I,C){const i=this._pingPongRenderTarget;this._halfBlur(A,i,g,e,I,"latitudinal",C),this._halfBlur(i,A,e,e,I,"longitudinal",C)}_halfBlur(A,g,e,I,C,i,B){const Q=this._renderer,n=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const E=3,o=new xt(this._lodPlanes[I],n),s=n.uniforms,r=this._sizeLods[e]-1,h=isFinite(C)?Math.PI/(2*r):2*Math.PI/(2*iI-1),d=C/h,a=isFinite(C)?1+Math.floor(E*d):iI;a>iI&&console.warn(`sigmaRadians, ${C}, is too large and will clip, as it requested ${a} samples when the maximum is set to ${iI}`);const c=[];let R=0;for(let U=0;U<iI;++U){const W=U/d,BA=Math.exp(-W*W/2);c.push(BA),U===0?R+=BA:U<a&&(R+=2*BA)}for(let U=0;U<c.length;U++)c[U]=c[U]/R;s.envMap.value=A.texture,s.samples.value=a,s.weights.value=c,s.latitudinal.value=i==="latitudinal",B&&(s.poleAxis.value=B);const{_lodMax:y}=this;s.dTheta.value=h,s.mipInt.value=y-e;const M=this._sizeLods[I],K=3*M*(I>y-XI?I-y+XI:0),G=4*(this._cubeSize-M);Yi(g,K,G,3*M,2*M),Q.setRenderTarget(g),Q.render(o,yQ)}}function pu(t){const A=[],g=[],e=[];let I=t;const C=t-XI+1+Ho.length;for(let i=0;i<C;i++){const B=Math.pow(2,I);g.push(B);let Q=1/B;i>t-XI?Q=Ho[i-t+XI-1]:i===0&&(Q=0),e.push(Q);const n=1/(B-2),E=-n,o=1+n,s=[E,E,o,E,o,o,E,E,o,o,E,o],r=6,h=6,d=3,a=2,c=1,R=new Float32Array(d*h*r),y=new Float32Array(a*h*r),M=new Float32Array(c*h*r);for(let G=0;G<r;G++){const U=G%3*2/3-1,W=G>2?0:-1,BA=[U,W,0,U+2/3,W,0,U+2/3,W+1,0,U,W,0,U+2/3,W+1,0,U,W+1,0];R.set(BA,d*h*G),y.set(s,a*h*G);const f=[G,G,G,G,G,G];M.set(f,c*h*G)}const K=new ge;K.setAttribute("position",new rt(R,d)),K.setAttribute("uv",new rt(y,a)),K.setAttribute("faceIndex",new rt(M,c)),A.push(K),I>XI&&I--}return{lodPlanes:A,sizeLods:g,sigmas:e}}function bo(t,A,g){const e=new cI(t,A,g);return e.texture.mapping=RB,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Yi(t,A,g,e,I){t.viewport.set(A,g,e,I),t.scissor.set(A,g,e,I)}function Su(t,A,g){const e=new Float32Array(iI),I=new J(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:iI,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/g,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:I}},vertexShader:Yn(),fragmentShader:`

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
		`,blending:ve,depthTest:!1,depthWrite:!1})}function To(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yn(),fragmentShader:`

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
		`,blending:ve,depthTest:!1,depthWrite:!1})}function _o(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ve,depthTest:!1,depthWrite:!1})}function Yn(){return`

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
	`}function Mu(t){let A=new WeakMap,g=null;function e(B){if(B&&B.isTexture){const Q=B.mapping,n=Q===An||Q===gn,E=Q===BC||Q===QC;if(n||E)if(B.isRenderTargetTexture&&B.needsPMREMUpdate===!0){B.needsPMREMUpdate=!1;let o=A.get(B);return g===null&&(g=new Yo(t)),o=n?g.fromEquirectangular(B,o):g.fromCubemap(B,o),A.set(B,o),o.texture}else{if(A.has(B))return A.get(B).texture;{const o=B.image;if(n&&o&&o.height>0||E&&o&&I(o)){g===null&&(g=new Yo(t));const s=n?g.fromEquirectangular(B):g.fromCubemap(B);return A.set(B,s),B.addEventListener("dispose",C),s.texture}else return null}}}return B}function I(B){let Q=0;const n=6;for(let E=0;E<n;E++)B[E]!==void 0&&Q++;return Q===n}function C(B){const Q=B.target;Q.removeEventListener("dispose",C);const n=A.get(Q);n!==void 0&&(A.delete(Q),n.dispose())}function i(){A=new WeakMap,g!==null&&(g.dispose(),g=null)}return{get:e,dispose:i}}function Ru(t){const A={};function g(e){if(A[e]!==void 0)return A[e];let I;switch(e){case"WEBGL_depth_texture":I=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":I=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":I=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":I=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:I=t.getExtension(e)}return A[e]=I,I}return{has:function(e){return g(e)!==null},init:function(e){e.isWebGL2?(g("EXT_color_buffer_float"),g("WEBGL_clip_cull_distance")):(g("WEBGL_depth_texture"),g("OES_texture_float"),g("OES_texture_half_float"),g("OES_texture_half_float_linear"),g("OES_standard_derivatives"),g("OES_element_index_uint"),g("OES_vertex_array_object"),g("ANGLE_instanced_arrays")),g("OES_texture_float_linear"),g("EXT_color_buffer_half_float"),g("WEBGL_multisampled_render_to_texture")},get:function(e){const I=g(e);return I===null&&console.warn("THREE.WebGLRenderer: "+e+" extension not supported."),I}}}function Lu(t,A,g,e){const I={},C=new WeakMap;function i(o){const s=o.target;s.index!==null&&A.remove(s.index);for(const h in s.attributes)A.remove(s.attributes[h]);for(const h in s.morphAttributes){const d=s.morphAttributes[h];for(let a=0,c=d.length;a<c;a++)A.remove(d[a])}s.removeEventListener("dispose",i),delete I[s.id];const r=C.get(s);r&&(A.remove(r),C.delete(s)),e.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,g.memory.geometries--}function B(o,s){return I[s.id]===!0||(s.addEventListener("dispose",i),I[s.id]=!0,g.memory.geometries++),s}function Q(o){const s=o.attributes;for(const h in s)A.update(s[h],t.ARRAY_BUFFER);const r=o.morphAttributes;for(const h in r){const d=r[h];for(let a=0,c=d.length;a<c;a++)A.update(d[a],t.ARRAY_BUFFER)}}function n(o){const s=[],r=o.index,h=o.attributes.position;let d=0;if(r!==null){const R=r.array;d=r.version;for(let y=0,M=R.length;y<M;y+=3){const K=R[y+0],G=R[y+1],U=R[y+2];s.push(K,G,G,U,U,K)}}else if(h!==void 0){const R=h.array;d=h.version;for(let y=0,M=R.length/3-1;y<M;y+=3){const K=y+0,G=y+1,U=y+2;s.push(K,G,G,U,U,K)}}else return;const a=new(Wr(s)?ga:Aa)(s,1);a.version=d;const c=C.get(o);c&&A.remove(c),C.set(o,a)}function E(o){const s=C.get(o);if(s){const r=o.index;r!==null&&s.version<r.version&&n(o)}else n(o);return C.get(o)}return{get:B,update:Q,getWireframeAttribute:E}}function Fu(t,A,g,e){const I=e.isWebGL2;let C;function i(r){C=r}let B,Q;function n(r){B=r.type,Q=r.bytesPerElement}function E(r,h){t.drawElements(C,h,B,r*Q),g.update(h,C,1)}function o(r,h,d){if(d===0)return;let a,c;if(I)a=t,c="drawElementsInstanced";else if(a=A.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",a===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}a[c](C,h,B,r*Q,d),g.update(h,C,d)}function s(r,h,d){if(d===0)return;const a=A.get("WEBGL_multi_draw");if(a===null)for(let c=0;c<d;c++)this.render(r[c]/Q,h[c]);else{a.multiDrawElementsWEBGL(C,h,0,B,r,0,d);let c=0;for(let R=0;R<d;R++)c+=h[R];g.update(c,C,1)}}this.setMode=i,this.setIndex=n,this.render=E,this.renderInstances=o,this.renderMultiDraw=s}function Nu(t){const A={geometries:0,textures:0},g={frame:0,calls:0,triangles:0,points:0,lines:0};function e(C,i,B){switch(g.calls++,i){case t.TRIANGLES:g.triangles+=B*(C/3);break;case t.LINES:g.lines+=B*(C/2);break;case t.LINE_STRIP:g.lines+=B*(C-1);break;case t.LINE_LOOP:g.lines+=B*C;break;case t.POINTS:g.points+=B*C;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function I(){g.calls=0,g.triangles=0,g.points=0,g.lines=0}return{memory:A,render:g,programs:null,autoReset:!0,reset:I,update:e}}function Uu(t,A){return t[0]-A[0]}function ku(t,A){return Math.abs(A[1])-Math.abs(t[1])}function Gu(t,A,g){const e={},I=new Float32Array(8),C=new WeakMap,i=new pg,B=[];for(let n=0;n<8;n++)B[n]=[n,0];function Q(n,E,o){const s=n.morphTargetInfluences;if(A.isWebGL2===!0){const h=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,d=h!==void 0?h.length:0;let a=C.get(E);if(a===void 0||a.count!==d){let V=function(){IA.dispose(),C.delete(E),E.removeEventListener("dispose",V)};var r=V;a!==void 0&&a.texture.dispose();const y=E.morphAttributes.position!==void 0,M=E.morphAttributes.normal!==void 0,K=E.morphAttributes.color!==void 0,G=E.morphAttributes.position||[],U=E.morphAttributes.normal||[],W=E.morphAttributes.color||[];let BA=0;y===!0&&(BA=1),M===!0&&(BA=2),K===!0&&(BA=3);let f=E.attributes.position.count*BA,N=1;f>A.maxTextureSize&&(N=Math.ceil(f/A.maxTextureSize),f=A.maxTextureSize);const j=new Float32Array(f*N*4*d),IA=new Xr(j,f,N,d);IA.type=Vt,IA.needsUpdate=!0;const m=BA*4;for(let x=0;x<d;x++){const z=G[x],O=U[x],X=W[x],$=f*N*4*x;for(let EA=0;EA<z.count;EA++){const cA=EA*m;y===!0&&(i.fromBufferAttribute(z,EA),j[$+cA+0]=i.x,j[$+cA+1]=i.y,j[$+cA+2]=i.z,j[$+cA+3]=0),M===!0&&(i.fromBufferAttribute(O,EA),j[$+cA+4]=i.x,j[$+cA+5]=i.y,j[$+cA+6]=i.z,j[$+cA+7]=0),K===!0&&(i.fromBufferAttribute(X,EA),j[$+cA+8]=i.x,j[$+cA+9]=i.y,j[$+cA+10]=i.z,j[$+cA+11]=X.itemSize===4?i.w:1)}}a={count:d,texture:IA,size:new Eg(f,N)},C.set(E,a),E.addEventListener("dispose",V)}let c=0;for(let y=0;y<s.length;y++)c+=s[y];const R=E.morphTargetsRelative?1:1-c;o.getUniforms().setValue(t,"morphTargetBaseInfluence",R),o.getUniforms().setValue(t,"morphTargetInfluences",s),o.getUniforms().setValue(t,"morphTargetsTexture",a.texture,g),o.getUniforms().setValue(t,"morphTargetsTextureSize",a.size)}else{const h=s===void 0?0:s.length;let d=e[E.id];if(d===void 0||d.length!==h){d=[];for(let M=0;M<h;M++)d[M]=[M,0];e[E.id]=d}for(let M=0;M<h;M++){const K=d[M];K[0]=M,K[1]=s[M]}d.sort(ku);for(let M=0;M<8;M++)M<h&&d[M][1]?(B[M][0]=d[M][0],B[M][1]=d[M][1]):(B[M][0]=Number.MAX_SAFE_INTEGER,B[M][1]=0);B.sort(Uu);const a=E.morphAttributes.position,c=E.morphAttributes.normal;let R=0;for(let M=0;M<8;M++){const K=B[M],G=K[0],U=K[1];G!==Number.MAX_SAFE_INTEGER&&U?(a&&E.getAttribute("morphTarget"+M)!==a[G]&&E.setAttribute("morphTarget"+M,a[G]),c&&E.getAttribute("morphNormal"+M)!==c[G]&&E.setAttribute("morphNormal"+M,c[G]),I[M]=U,R+=U):(a&&E.hasAttribute("morphTarget"+M)===!0&&E.deleteAttribute("morphTarget"+M),c&&E.hasAttribute("morphNormal"+M)===!0&&E.deleteAttribute("morphNormal"+M),I[M]=0)}const y=E.morphTargetsRelative?1:1-R;o.getUniforms().setValue(t,"morphTargetBaseInfluence",y),o.getUniforms().setValue(t,"morphTargetInfluences",I)}}return{update:Q}}function mu(t,A,g,e){let I=new WeakMap;function C(Q){const n=e.render.frame,E=Q.geometry,o=A.get(Q,E);if(I.get(o)!==n&&(A.update(o),I.set(o,n)),Q.isInstancedMesh&&(Q.hasEventListener("dispose",B)===!1&&Q.addEventListener("dispose",B),I.get(Q)!==n&&(g.update(Q.instanceMatrix,t.ARRAY_BUFFER),Q.instanceColor!==null&&g.update(Q.instanceColor,t.ARRAY_BUFFER),I.set(Q,n))),Q.isSkinnedMesh){const s=Q.skeleton;I.get(s)!==n&&(s.update(),I.set(s,n))}return o}function i(){I=new WeakMap}function B(Q){const n=Q.target;n.removeEventListener("dispose",B),g.remove(n.instanceMatrix),n.instanceColor!==null&&g.remove(n.instanceColor)}return{update:C,dispose:i}}class Ba extends Wg{constructor(A,g,e,I,C,i,B,Q,n,E){if(E=E!==void 0?E:nI,E!==nI&&E!==EC)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");e===void 0&&E===nI&&(e=Ke),e===void 0&&E===EC&&(e=QI),super(null,I,C,i,B,Q,E,e,n),this.isDepthTexture=!0,this.image={width:A,height:g},this.magFilter=B!==void 0?B:Og,this.minFilter=Q!==void 0?Q:Og,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const g=super.toJSON(A);return this.compareFunction!==null&&(g.compareFunction=this.compareFunction),g}}const Qa=new Wg,na=new Ba(1,1);na.compareFunction=Vr;const Ea=new Xr,oa=new lD,sa=new Ia,qo=[],Po=[],Oo=new Float32Array(16),Vo=new Float32Array(9),Wo=new Float32Array(4);function fC(t,A,g){const e=t[0];if(e<=0||e>0)return t;const I=A*g;let C=qo[I];if(C===void 0&&(C=new Float32Array(I),qo[I]=C),A!==0){e.toArray(C,0);for(let i=1,B=0;i!==A;++i)B+=g,t[i].toArray(C,B)}return C}function Yg(t,A){if(t.length!==A.length)return!1;for(let g=0,e=t.length;g<e;g++)if(t[g]!==A[g])return!1;return!0}function bg(t,A){for(let g=0,e=A.length;g<e;g++)t[g]=A[g]}function kB(t,A){let g=Po[A];g===void 0&&(g=new Int32Array(A),Po[A]=g);for(let e=0;e!==A;++e)g[e]=t.allocateTextureUnit();return g}function Ku(t,A){const g=this.cache;g[0]!==A&&(t.uniform1f(this.addr,A),g[0]=A)}function Ju(t,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y)&&(t.uniform2f(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(Yg(g,A))return;t.uniform2fv(this.addr,A),bg(g,A)}}function Hu(t,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z)&&(t.uniform3f(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else if(A.r!==void 0)(g[0]!==A.r||g[1]!==A.g||g[2]!==A.b)&&(t.uniform3f(this.addr,A.r,A.g,A.b),g[0]=A.r,g[1]=A.g,g[2]=A.b);else{if(Yg(g,A))return;t.uniform3fv(this.addr,A),bg(g,A)}}function vu(t,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z||g[3]!==A.w)&&(t.uniform4f(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(Yg(g,A))return;t.uniform4fv(this.addr,A),bg(g,A)}}function xu(t,A){const g=this.cache,e=A.elements;if(e===void 0){if(Yg(g,A))return;t.uniformMatrix2fv(this.addr,!1,A),bg(g,A)}else{if(Yg(g,e))return;Wo.set(e),t.uniformMatrix2fv(this.addr,!1,Wo),bg(g,e)}}function Yu(t,A){const g=this.cache,e=A.elements;if(e===void 0){if(Yg(g,A))return;t.uniformMatrix3fv(this.addr,!1,A),bg(g,A)}else{if(Yg(g,e))return;Vo.set(e),t.uniformMatrix3fv(this.addr,!1,Vo),bg(g,e)}}function bu(t,A){const g=this.cache,e=A.elements;if(e===void 0){if(Yg(g,A))return;t.uniformMatrix4fv(this.addr,!1,A),bg(g,A)}else{if(Yg(g,e))return;Oo.set(e),t.uniformMatrix4fv(this.addr,!1,Oo),bg(g,e)}}function Tu(t,A){const g=this.cache;g[0]!==A&&(t.uniform1i(this.addr,A),g[0]=A)}function _u(t,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y)&&(t.uniform2i(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(Yg(g,A))return;t.uniform2iv(this.addr,A),bg(g,A)}}function qu(t,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z)&&(t.uniform3i(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else{if(Yg(g,A))return;t.uniform3iv(this.addr,A),bg(g,A)}}function Pu(t,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z||g[3]!==A.w)&&(t.uniform4i(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(Yg(g,A))return;t.uniform4iv(this.addr,A),bg(g,A)}}function Ou(t,A){const g=this.cache;g[0]!==A&&(t.uniform1ui(this.addr,A),g[0]=A)}function Vu(t,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y)&&(t.uniform2ui(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(Yg(g,A))return;t.uniform2uiv(this.addr,A),bg(g,A)}}function Wu(t,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z)&&(t.uniform3ui(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else{if(Yg(g,A))return;t.uniform3uiv(this.addr,A),bg(g,A)}}function zu(t,A){const g=this.cache;if(A.x!==void 0)(g[0]!==A.x||g[1]!==A.y||g[2]!==A.z||g[3]!==A.w)&&(t.uniform4ui(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(Yg(g,A))return;t.uniform4uiv(this.addr,A),bg(g,A)}}function Zu(t,A,g){const e=this.cache,I=g.allocateTextureUnit();e[0]!==I&&(t.uniform1i(this.addr,I),e[0]=I);const C=this.type===t.SAMPLER_2D_SHADOW?na:Qa;g.setTexture2D(A||C,I)}function Xu(t,A,g){const e=this.cache,I=g.allocateTextureUnit();e[0]!==I&&(t.uniform1i(this.addr,I),e[0]=I),g.setTexture3D(A||oa,I)}function ju(t,A,g){const e=this.cache,I=g.allocateTextureUnit();e[0]!==I&&(t.uniform1i(this.addr,I),e[0]=I),g.setTextureCube(A||sa,I)}function $u(t,A,g){const e=this.cache,I=g.allocateTextureUnit();e[0]!==I&&(t.uniform1i(this.addr,I),e[0]=I),g.setTexture2DArray(A||Ea,I)}function Aw(t){switch(t){case 5126:return Ku;case 35664:return Ju;case 35665:return Hu;case 35666:return vu;case 35674:return xu;case 35675:return Yu;case 35676:return bu;case 5124:case 35670:return Tu;case 35667:case 35671:return _u;case 35668:case 35672:return qu;case 35669:case 35673:return Pu;case 5125:return Ou;case 36294:return Vu;case 36295:return Wu;case 36296:return zu;case 35678:case 36198:case 36298:case 36306:case 35682:return Zu;case 35679:case 36299:case 36307:return Xu;case 35680:case 36300:case 36308:case 36293:return ju;case 36289:case 36303:case 36311:case 36292:return $u}}function gw(t,A){t.uniform1fv(this.addr,A)}function tw(t,A){const g=fC(A,this.size,2);t.uniform2fv(this.addr,g)}function ew(t,A){const g=fC(A,this.size,3);t.uniform3fv(this.addr,g)}function Iw(t,A){const g=fC(A,this.size,4);t.uniform4fv(this.addr,g)}function Cw(t,A){const g=fC(A,this.size,4);t.uniformMatrix2fv(this.addr,!1,g)}function iw(t,A){const g=fC(A,this.size,9);t.uniformMatrix3fv(this.addr,!1,g)}function Bw(t,A){const g=fC(A,this.size,16);t.uniformMatrix4fv(this.addr,!1,g)}function Qw(t,A){t.uniform1iv(this.addr,A)}function nw(t,A){t.uniform2iv(this.addr,A)}function Ew(t,A){t.uniform3iv(this.addr,A)}function ow(t,A){t.uniform4iv(this.addr,A)}function sw(t,A){t.uniform1uiv(this.addr,A)}function rw(t,A){t.uniform2uiv(this.addr,A)}function aw(t,A){t.uniform3uiv(this.addr,A)}function cw(t,A){t.uniform4uiv(this.addr,A)}function hw(t,A,g){const e=this.cache,I=A.length,C=kB(g,I);Yg(e,C)||(t.uniform1iv(this.addr,C),bg(e,C));for(let i=0;i!==I;++i)g.setTexture2D(A[i]||Qa,C[i])}function lw(t,A,g){const e=this.cache,I=A.length,C=kB(g,I);Yg(e,C)||(t.uniform1iv(this.addr,C),bg(e,C));for(let i=0;i!==I;++i)g.setTexture3D(A[i]||oa,C[i])}function Dw(t,A,g){const e=this.cache,I=A.length,C=kB(g,I);Yg(e,C)||(t.uniform1iv(this.addr,C),bg(e,C));for(let i=0;i!==I;++i)g.setTextureCube(A[i]||sa,C[i])}function dw(t,A,g){const e=this.cache,I=A.length,C=kB(g,I);Yg(e,C)||(t.uniform1iv(this.addr,C),bg(e,C));for(let i=0;i!==I;++i)g.setTexture2DArray(A[i]||Ea,C[i])}function fw(t){switch(t){case 5126:return gw;case 35664:return tw;case 35665:return ew;case 35666:return Iw;case 35674:return Cw;case 35675:return iw;case 35676:return Bw;case 5124:case 35670:return Qw;case 35667:case 35671:return nw;case 35668:case 35672:return Ew;case 35669:case 35673:return ow;case 5125:return sw;case 36294:return rw;case 36295:return aw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return dw}}class uw{constructor(A,g,e){this.id=A,this.addr=e,this.cache=[],this.type=g.type,this.setValue=Aw(g.type)}}class ww{constructor(A,g,e){this.id=A,this.addr=e,this.cache=[],this.type=g.type,this.size=g.size,this.setValue=fw(g.type)}}class yw{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,g,e){const I=this.seq;for(let C=0,i=I.length;C!==i;++C){const B=I[C];B.setValue(A,g[B.id],e)}}}const RQ=/(\w+)(\])?(\[|\.)?/g;function zo(t,A){t.seq.push(A),t.map[A.id]=A}function pw(t,A,g){const e=t.name,I=e.length;for(RQ.lastIndex=0;;){const C=RQ.exec(e),i=RQ.lastIndex;let B=C[1];const Q=C[2]==="]",n=C[3];if(Q&&(B=B|0),n===void 0||n==="["&&i+2===I){zo(g,n===void 0?new uw(B,t,A):new ww(B,t,A));break}else{let o=g.map[B];o===void 0&&(o=new yw(B),zo(g,o)),g=o}}}class tB{constructor(A,g){this.seq=[],this.map={};const e=A.getProgramParameter(g,A.ACTIVE_UNIFORMS);for(let I=0;I<e;++I){const C=A.getActiveUniform(g,I),i=A.getUniformLocation(g,C.name);pw(C,i,this)}}setValue(A,g,e,I){const C=this.map[g];C!==void 0&&C.setValue(A,e,I)}setOptional(A,g,e){const I=g[e];I!==void 0&&this.setValue(A,e,I)}static upload(A,g,e,I){for(let C=0,i=g.length;C!==i;++C){const B=g[C],Q=e[B.id];Q.needsUpdate!==!1&&B.setValue(A,Q.value,I)}}static seqWithValue(A,g){const e=[];for(let I=0,C=A.length;I!==C;++I){const i=A[I];i.id in g&&e.push(i)}return e}}function Zo(t,A,g){const e=t.createShader(A);return t.shaderSource(e,g),t.compileShader(e),e}const Sw=37297;let Mw=0;function Rw(t,A){const g=t.split(`
`),e=[],I=Math.max(A-6,0),C=Math.min(A+6,g.length);for(let i=I;i<C;i++){const B=i+1;e.push(`${B===A?">":" "} ${B}: ${g[i]}`)}return e.join(`
`)}function Lw(t){const A=dg.getPrimaries(dg.workingColorSpace),g=dg.getPrimaries(t);let e;switch(A===g?e="":A===sB&&g===oB?e="LinearDisplayP3ToLinearSRGB":A===oB&&g===sB&&(e="LinearSRGBToLinearDisplayP3"),t){case kt:case LB:return[e,"LinearTransferOETF"];case vg:case Hn:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[e,"LinearTransferOETF"]}}function Xo(t,A,g){const e=t.getShaderParameter(A,t.COMPILE_STATUS),I=t.getShaderInfoLog(A).trim();if(e&&I==="")return"";const C=/ERROR: 0:(\d+)/.exec(I);if(C){const i=parseInt(C[1]);return g.toUpperCase()+`

`+I+`

`+Rw(t.getShaderSource(A),i)}else return I}function Fw(t,A){const g=Lw(A);return`vec4 ${t}( vec4 value ) { return ${g[0]}( ${g[1]}( value ) ); }`}function Nw(t,A){let g;switch(A){case Sl:g="Linear";break;case Ml:g="Reinhard";break;case Rl:g="OptimizedCineon";break;case Ll:g="ACESFilmic";break;case Nl:g="AgX";break;case Fl:g="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),g="Linear"}return"vec3 "+t+"( vec3 color ) { return "+g+"ToneMapping( color ); }"}function Uw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(jI).join(`
`)}function kw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jI).join(`
`)}function Gw(t){const A=[];for(const g in t){const e=t[g];e!==!1&&A.push("#define "+g+" "+e)}return A.join(`
`)}function mw(t,A){const g={},e=t.getProgramParameter(A,t.ACTIVE_ATTRIBUTES);for(let I=0;I<e;I++){const C=t.getActiveAttrib(A,I),i=C.name;let B=1;C.type===t.FLOAT_MAT2&&(B=2),C.type===t.FLOAT_MAT3&&(B=3),C.type===t.FLOAT_MAT4&&(B=4),g[i]={type:C.type,location:t.getAttribLocation(A,i),locationSize:B}}return g}function jI(t){return t!==""}function jo(t,A){const g=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,g).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function $o(t,A){return t.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const Kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qn(t){return t.replace(Kw,Hw)}const Jw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hw(t,A){let g=$A[A];if(g===void 0){const e=Jw.get(A);if(e!==void 0)g=$A[e],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,e);else throw new Error("Can not resolve #include <"+A+">")}return Qn(g)}const vw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function As(t){return t.replace(vw,xw)}function xw(t,A,g,e){let I="";for(let C=parseInt(A);C<parseInt(g);C++)I+=e.replace(/\[\s*i\s*\]/g,"[ "+C+" ]").replace(/UNROLLED_LOOP_INDEX/g,C);return I}function gs(t){let A=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(A+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?A+=`
#define HIGH_PRECISION`:t.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function Yw(t){let A="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===mr?A="SHADOWMAP_TYPE_PCF":t.shadowMapType===$h?A="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ae&&(A="SHADOWMAP_TYPE_VSM"),A}function bw(t){let A="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case BC:case QC:A="ENVMAP_TYPE_CUBE";break;case RB:A="ENVMAP_TYPE_CUBE_UV";break}return A}function Tw(t){let A="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case QC:A="ENVMAP_MODE_REFRACTION";break}return A}function _w(t){let A="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Kr:A="ENVMAP_BLENDING_MULTIPLY";break;case yl:A="ENVMAP_BLENDING_MIX";break;case pl:A="ENVMAP_BLENDING_ADD";break}return A}function qw(t){const A=t.envMapCubeUVHeight;if(A===null)return null;const g=Math.log2(A)-2,e=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,g),7*16)),texelHeight:e,maxMip:g}}function Pw(t,A,g,e){const I=t.getContext(),C=g.defines;let i=g.vertexShader,B=g.fragmentShader;const Q=Yw(g),n=bw(g),E=Tw(g),o=_w(g),s=qw(g),r=g.isWebGL2?"":Uw(g),h=kw(g),d=Gw(C),a=I.createProgram();let c,R,y=g.glslVersion?"#version "+g.glslVersion+`
`:"";g.isRawShaderMaterial?(c=["#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,d].filter(jI).join(`
`),c.length>0&&(c+=`
`),R=[r,"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,d].filter(jI).join(`
`),R.length>0&&(R+=`
`)):(c=[gs(g),"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,d,g.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",g.batching?"#define USE_BATCHING":"",g.instancing?"#define USE_INSTANCING":"",g.instancingColor?"#define USE_INSTANCING_COLOR":"",g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+E:"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",g.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",g.displacementMap?"#define USE_DISPLACEMENTMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.anisotropy?"#define USE_ANISOTROPY":"",g.anisotropyMap?"#define USE_ANISOTROPYMAP":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",g.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaHash?"#define USE_ALPHAHASH":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",g.mapUv?"#define MAP_UV "+g.mapUv:"",g.alphaMapUv?"#define ALPHAMAP_UV "+g.alphaMapUv:"",g.lightMapUv?"#define LIGHTMAP_UV "+g.lightMapUv:"",g.aoMapUv?"#define AOMAP_UV "+g.aoMapUv:"",g.emissiveMapUv?"#define EMISSIVEMAP_UV "+g.emissiveMapUv:"",g.bumpMapUv?"#define BUMPMAP_UV "+g.bumpMapUv:"",g.normalMapUv?"#define NORMALMAP_UV "+g.normalMapUv:"",g.displacementMapUv?"#define DISPLACEMENTMAP_UV "+g.displacementMapUv:"",g.metalnessMapUv?"#define METALNESSMAP_UV "+g.metalnessMapUv:"",g.roughnessMapUv?"#define ROUGHNESSMAP_UV "+g.roughnessMapUv:"",g.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+g.anisotropyMapUv:"",g.clearcoatMapUv?"#define CLEARCOATMAP_UV "+g.clearcoatMapUv:"",g.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+g.clearcoatNormalMapUv:"",g.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+g.clearcoatRoughnessMapUv:"",g.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+g.iridescenceMapUv:"",g.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+g.iridescenceThicknessMapUv:"",g.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+g.sheenColorMapUv:"",g.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+g.sheenRoughnessMapUv:"",g.specularMapUv?"#define SPECULARMAP_UV "+g.specularMapUv:"",g.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+g.specularColorMapUv:"",g.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+g.specularIntensityMapUv:"",g.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+g.transmissionMapUv:"",g.thicknessMapUv?"#define THICKNESSMAP_UV "+g.thicknessMapUv:"",g.vertexTangents&&g.flatShading===!1?"#define USE_TANGENT":"",g.vertexColors?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUv1s?"#define USE_UV1":"",g.vertexUv2s?"#define USE_UV2":"",g.vertexUv3s?"#define USE_UV3":"",g.pointsUvs?"#define USE_POINTS_UV":"",g.flatShading?"#define FLAT_SHADED":"",g.skinning?"#define USE_SKINNING":"",g.morphTargets?"#define USE_MORPHTARGETS":"",g.morphNormals&&g.flatShading===!1?"#define USE_MORPHNORMALS":"",g.morphColors&&g.isWebGL2?"#define USE_MORPHCOLORS":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+g.morphTextureStride:"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_COUNT "+g.morphTargetsCount:"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+Q:"",g.sizeAttenuation?"#define USE_SIZEATTENUATION":"",g.numLightProbes>0?"#define USE_LIGHT_PROBES":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jI).join(`
`),R=[r,gs(g),"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,d,g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",g.map?"#define USE_MAP":"",g.matcap?"#define USE_MATCAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+n:"",g.envMap?"#define "+E:"",g.envMap?"#define "+o:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",g.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.anisotropy?"#define USE_ANISOTROPY":"",g.anisotropyMap?"#define USE_ANISOTROPYMAP":"",g.clearcoat?"#define USE_CLEARCOAT":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescence?"#define USE_IRIDESCENCE":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",g.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaTest?"#define USE_ALPHATEST":"",g.alphaHash?"#define USE_ALPHAHASH":"",g.sheen?"#define USE_SHEEN":"",g.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.vertexTangents&&g.flatShading===!1?"#define USE_TANGENT":"",g.vertexColors||g.instancingColor?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUv1s?"#define USE_UV1":"",g.vertexUv2s?"#define USE_UV2":"",g.vertexUv3s?"#define USE_UV3":"",g.pointsUvs?"#define USE_POINTS_UV":"",g.gradientMap?"#define USE_GRADIENTMAP":"",g.flatShading?"#define FLAT_SHADED":"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+Q:"",g.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",g.numLightProbes>0?"#define USE_LIGHT_PROBES":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",g.toneMapping!==xe?"#define TONE_MAPPING":"",g.toneMapping!==xe?$A.tonemapping_pars_fragment:"",g.toneMapping!==xe?Nw("toneMapping",g.toneMapping):"",g.dithering?"#define DITHERING":"",g.opaque?"#define OPAQUE":"",$A.colorspace_pars_fragment,Fw("linearToOutputTexel",g.outputColorSpace),g.useDepthPacking?"#define DEPTH_PACKING "+g.depthPacking:"",`
`].filter(jI).join(`
`)),i=Qn(i),i=jo(i,g),i=$o(i,g),B=Qn(B),B=jo(B,g),B=$o(B,g),i=As(i),B=As(B),g.isWebGL2&&g.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,c=[h,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,R=["precision mediump sampler2DArray;","#define varying in",g.glslVersion===ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",g.glslVersion===ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);const M=y+c+i,K=y+R+B,G=Zo(I,I.VERTEX_SHADER,M),U=Zo(I,I.FRAGMENT_SHADER,K);I.attachShader(a,G),I.attachShader(a,U),g.index0AttributeName!==void 0?I.bindAttribLocation(a,0,g.index0AttributeName):g.morphTargets===!0&&I.bindAttribLocation(a,0,"position"),I.linkProgram(a);function W(j){if(t.debug.checkShaderErrors){const IA=I.getProgramInfoLog(a).trim(),m=I.getShaderInfoLog(G).trim(),V=I.getShaderInfoLog(U).trim();let x=!0,z=!0;if(I.getProgramParameter(a,I.LINK_STATUS)===!1)if(x=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(I,a,G,U);else{const O=Xo(I,G,"vertex"),X=Xo(I,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+I.getError()+" - VALIDATE_STATUS "+I.getProgramParameter(a,I.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+IA+`
`+O+`
`+X)}else IA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",IA):(m===""||V==="")&&(z=!1);z&&(j.diagnostics={runnable:x,programLog:IA,vertexShader:{log:m,prefix:c},fragmentShader:{log:V,prefix:R}})}I.deleteShader(G),I.deleteShader(U),BA=new tB(I,a),f=mw(I,a)}let BA;this.getUniforms=function(){return BA===void 0&&W(this),BA};let f;this.getAttributes=function(){return f===void 0&&W(this),f};let N=g.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=I.getProgramParameter(a,Sw)),N},this.destroy=function(){e.releaseStatesOfProgram(this),I.deleteProgram(a),this.program=void 0},this.type=g.shaderType,this.name=g.shaderName,this.id=Mw++,this.cacheKey=A,this.usedTimes=1,this.program=a,this.vertexShader=G,this.fragmentShader=U,this}let Ow=0;class Vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const g=A.vertexShader,e=A.fragmentShader,I=this._getShaderStage(g),C=this._getShaderStage(e),i=this._getShaderCacheForMaterial(A);return i.has(I)===!1&&(i.add(I),I.usedTimes++),i.has(C)===!1&&(i.add(C),C.usedTimes++),this}remove(A){const g=this.materialCache.get(A);for(const e of g)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const g=this.materialCache;let e=g.get(A);return e===void 0&&(e=new Set,g.set(A,e)),e}_getShaderStage(A){const g=this.shaderCache;let e=g.get(A);return e===void 0&&(e=new Ww(A),g.set(A,e)),e}}class Ww{constructor(A){this.id=Ow++,this.code=A,this.usedTimes=0}}function zw(t,A,g,e,I,C,i){const B=new jr,Q=new Vw,n=new Set,E=[],o=I.isWebGL2,s=I.logarithmicDepthBuffer,r=I.vertexTextures;let h=I.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function a(f){return n.add(f),f===0?"uv":`uv${f}`}function c(f,N,j,IA,m){const V=IA.fog,x=m.geometry,z=f.isMeshStandardMaterial?IA.environment:null,O=(f.isMeshStandardMaterial?g:A).get(f.envMap||z),X=O&&O.mapping===RB?O.image.height:null,$=d[f.type];f.precision!==null&&(h=I.getMaxPrecision(f.precision),h!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",h,"instead."));const EA=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,cA=EA!==void 0?EA.length:0;let xA=0;x.morphAttributes.position!==void 0&&(xA=1),x.morphAttributes.normal!==void 0&&(xA=2),x.morphAttributes.color!==void 0&&(xA=3);let Y,eA,dA,KA;if($){const MA=Pt[$];Y=MA.vertexShader,eA=MA.fragmentShader}else Y=f.vertexShader,eA=f.fragmentShader,Q.update(f),dA=Q.getVertexShaderID(f),KA=Q.getFragmentShaderID(f);const NA=t.getRenderTarget(),wA=m.isInstancedMesh===!0,Qg=m.isBatchedMesh===!0,qA=!!f.map,v=!!f.matcap,hg=!!O,hA=!!f.aoMap,GA=!!f.lightMap,uA=!!f.bumpMap,jA=!!f.normalMap,yA=!!f.displacementMap,S=!!f.emissiveMap,u=!!f.metalnessMap,b=!!f.roughnessMap,QA=f.anisotropy>0,CA=f.clearcoat>0,nA=f.iridescence>0,FA=f.sheen>0,lA=f.transmission>0,pA=QA&&!!f.anisotropyMap,HA=CA&&!!f.clearcoatMap,XA=CA&&!!f.clearcoatNormalMap,iA=CA&&!!f.clearcoatRoughnessMap,lg=nA&&!!f.iridescenceMap,Ag=nA&&!!f.iridescenceThicknessMap,PA=FA&&!!f.sheenColorMap,kA=FA&&!!f.sheenRoughnessMap,SA=!!f.specularMap,zA=!!f.specularColorMap,_A=!!f.specularIntensityMap,rg=lA&&!!f.transmissionMap,OA=lA&&!!f.thicknessMap,ag=!!f.gradientMap,F=!!f.alphaMap,sA=f.alphaTest>0,oA=!!f.alphaHash,RA=!!f.extensions;let mA=xe;f.toneMapped&&(NA===null||NA.isXRRenderTarget===!0)&&(mA=t.toneMapping);const Cg={isWebGL2:o,shaderID:$,shaderType:f.type,shaderName:f.name,vertexShader:Y,fragmentShader:eA,defines:f.defines,customVertexShaderID:dA,customFragmentShaderID:KA,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:h,batching:Qg,instancing:wA,instancingColor:wA&&m.instanceColor!==null,supportsVertexTextures:r,outputColorSpace:NA===null?t.outputColorSpace:NA.isXRRenderTarget===!0?NA.texture.colorSpace:kt,alphaToCoverage:!!f.alphaToCoverage,map:qA,matcap:v,envMap:hg,envMapMode:hg&&O.mapping,envMapCubeUVHeight:X,aoMap:hA,lightMap:GA,bumpMap:uA,normalMap:jA,displacementMap:r&&yA,emissiveMap:S,normalMapObjectSpace:jA&&f.normalMapType===ql,normalMapTangentSpace:jA&&f.normalMapType===Or,metalnessMap:u,roughnessMap:b,anisotropy:QA,anisotropyMap:pA,clearcoat:CA,clearcoatMap:HA,clearcoatNormalMap:XA,clearcoatRoughnessMap:iA,iridescence:nA,iridescenceMap:lg,iridescenceThicknessMap:Ag,sheen:FA,sheenColorMap:PA,sheenRoughnessMap:kA,specularMap:SA,specularColorMap:zA,specularIntensityMap:_A,transmission:lA,transmissionMap:rg,thicknessMap:OA,gradientMap:ag,opaque:f.transparent===!1&&f.blending===AC&&f.alphaToCoverage===!1,alphaMap:F,alphaTest:sA,alphaHash:oA,combine:f.combine,mapUv:qA&&a(f.map.channel),aoMapUv:hA&&a(f.aoMap.channel),lightMapUv:GA&&a(f.lightMap.channel),bumpMapUv:uA&&a(f.bumpMap.channel),normalMapUv:jA&&a(f.normalMap.channel),displacementMapUv:yA&&a(f.displacementMap.channel),emissiveMapUv:S&&a(f.emissiveMap.channel),metalnessMapUv:u&&a(f.metalnessMap.channel),roughnessMapUv:b&&a(f.roughnessMap.channel),anisotropyMapUv:pA&&a(f.anisotropyMap.channel),clearcoatMapUv:HA&&a(f.clearcoatMap.channel),clearcoatNormalMapUv:XA&&a(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:iA&&a(f.clearcoatRoughnessMap.channel),iridescenceMapUv:lg&&a(f.iridescenceMap.channel),iridescenceThicknessMapUv:Ag&&a(f.iridescenceThicknessMap.channel),sheenColorMapUv:PA&&a(f.sheenColorMap.channel),sheenRoughnessMapUv:kA&&a(f.sheenRoughnessMap.channel),specularMapUv:SA&&a(f.specularMap.channel),specularColorMapUv:zA&&a(f.specularColorMap.channel),specularIntensityMapUv:_A&&a(f.specularIntensityMap.channel),transmissionMapUv:rg&&a(f.transmissionMap.channel),thicknessMapUv:OA&&a(f.thicknessMap.channel),alphaMapUv:F&&a(f.alphaMap.channel),vertexTangents:!!x.attributes.tangent&&(jA||QA),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!x.attributes.uv&&(qA||F),fog:!!V,useFog:f.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:s,skinning:m.isSkinnedMesh===!0,morphTargets:x.morphAttributes.position!==void 0,morphNormals:x.morphAttributes.normal!==void 0,morphColors:x.morphAttributes.color!==void 0,morphTargetsCount:cA,morphTextureStride:xA,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:f.dithering,shadowMapEnabled:t.shadowMap.enabled&&j.length>0,shadowMapType:t.shadowMap.type,toneMapping:mA,useLegacyLights:t._useLegacyLights,decodeVideoTexture:qA&&f.map.isVideoTexture===!0&&dg.getTransfer(f.map.colorSpace)===Ng,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===Ot,flipSided:f.side===st,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:RA&&f.extensions.derivatives===!0,extensionFragDepth:RA&&f.extensions.fragDepth===!0,extensionDrawBuffers:RA&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:RA&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:RA&&f.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:RA&&f.extensions.multiDraw===!0&&e.has("WEBGL_multi_draw"),rendererExtensionFragDepth:o||e.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||e.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||e.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Cg.vertexUv1s=n.has(1),Cg.vertexUv2s=n.has(2),Cg.vertexUv3s=n.has(3),n.clear(),Cg}function R(f){const N=[];if(f.shaderID?N.push(f.shaderID):(N.push(f.customVertexShaderID),N.push(f.customFragmentShaderID)),f.defines!==void 0)for(const j in f.defines)N.push(j),N.push(f.defines[j]);return f.isRawShaderMaterial===!1&&(y(N,f),M(N,f),N.push(t.outputColorSpace)),N.push(f.customProgramCacheKey),N.join()}function y(f,N){f.push(N.precision),f.push(N.outputColorSpace),f.push(N.envMapMode),f.push(N.envMapCubeUVHeight),f.push(N.mapUv),f.push(N.alphaMapUv),f.push(N.lightMapUv),f.push(N.aoMapUv),f.push(N.bumpMapUv),f.push(N.normalMapUv),f.push(N.displacementMapUv),f.push(N.emissiveMapUv),f.push(N.metalnessMapUv),f.push(N.roughnessMapUv),f.push(N.anisotropyMapUv),f.push(N.clearcoatMapUv),f.push(N.clearcoatNormalMapUv),f.push(N.clearcoatRoughnessMapUv),f.push(N.iridescenceMapUv),f.push(N.iridescenceThicknessMapUv),f.push(N.sheenColorMapUv),f.push(N.sheenRoughnessMapUv),f.push(N.specularMapUv),f.push(N.specularColorMapUv),f.push(N.specularIntensityMapUv),f.push(N.transmissionMapUv),f.push(N.thicknessMapUv),f.push(N.combine),f.push(N.fogExp2),f.push(N.sizeAttenuation),f.push(N.morphTargetsCount),f.push(N.morphAttributeCount),f.push(N.numDirLights),f.push(N.numPointLights),f.push(N.numSpotLights),f.push(N.numSpotLightMaps),f.push(N.numHemiLights),f.push(N.numRectAreaLights),f.push(N.numDirLightShadows),f.push(N.numPointLightShadows),f.push(N.numSpotLightShadows),f.push(N.numSpotLightShadowsWithMaps),f.push(N.numLightProbes),f.push(N.shadowMapType),f.push(N.toneMapping),f.push(N.numClippingPlanes),f.push(N.numClipIntersection),f.push(N.depthPacking)}function M(f,N){B.disableAll(),N.isWebGL2&&B.enable(0),N.supportsVertexTextures&&B.enable(1),N.instancing&&B.enable(2),N.instancingColor&&B.enable(3),N.matcap&&B.enable(4),N.envMap&&B.enable(5),N.normalMapObjectSpace&&B.enable(6),N.normalMapTangentSpace&&B.enable(7),N.clearcoat&&B.enable(8),N.iridescence&&B.enable(9),N.alphaTest&&B.enable(10),N.vertexColors&&B.enable(11),N.vertexAlphas&&B.enable(12),N.vertexUv1s&&B.enable(13),N.vertexUv2s&&B.enable(14),N.vertexUv3s&&B.enable(15),N.vertexTangents&&B.enable(16),N.anisotropy&&B.enable(17),N.alphaHash&&B.enable(18),N.batching&&B.enable(19),f.push(B.mask),B.disableAll(),N.fog&&B.enable(0),N.useFog&&B.enable(1),N.flatShading&&B.enable(2),N.logarithmicDepthBuffer&&B.enable(3),N.skinning&&B.enable(4),N.morphTargets&&B.enable(5),N.morphNormals&&B.enable(6),N.morphColors&&B.enable(7),N.premultipliedAlpha&&B.enable(8),N.shadowMapEnabled&&B.enable(9),N.useLegacyLights&&B.enable(10),N.doubleSided&&B.enable(11),N.flipSided&&B.enable(12),N.useDepthPacking&&B.enable(13),N.dithering&&B.enable(14),N.transmission&&B.enable(15),N.sheen&&B.enable(16),N.opaque&&B.enable(17),N.pointsUvs&&B.enable(18),N.decodeVideoTexture&&B.enable(19),N.alphaToCoverage&&B.enable(20),f.push(B.mask)}function K(f){const N=d[f.type];let j;if(N){const IA=Pt[N];j=ND.clone(IA.uniforms)}else j=f.uniforms;return j}function G(f,N){let j;for(let IA=0,m=E.length;IA<m;IA++){const V=E[IA];if(V.cacheKey===N){j=V,++j.usedTimes;break}}return j===void 0&&(j=new Pw(t,N,f,C),E.push(j)),j}function U(f){if(--f.usedTimes===0){const N=E.indexOf(f);E[N]=E[E.length-1],E.pop(),f.destroy()}}function W(f){Q.remove(f)}function BA(){Q.dispose()}return{getParameters:c,getProgramCacheKey:R,getUniforms:K,acquireProgram:G,releaseProgram:U,releaseShaderCache:W,programs:E,dispose:BA}}function Zw(){let t=new WeakMap;function A(C){let i=t.get(C);return i===void 0&&(i={},t.set(C,i)),i}function g(C){t.delete(C)}function e(C,i,B){t.get(C)[i]=B}function I(){t=new WeakMap}return{get:A,remove:g,update:e,dispose:I}}function Xw(t,A){return t.groupOrder!==A.groupOrder?t.groupOrder-A.groupOrder:t.renderOrder!==A.renderOrder?t.renderOrder-A.renderOrder:t.material.id!==A.material.id?t.material.id-A.material.id:t.z!==A.z?t.z-A.z:t.id-A.id}function ts(t,A){return t.groupOrder!==A.groupOrder?t.groupOrder-A.groupOrder:t.renderOrder!==A.renderOrder?t.renderOrder-A.renderOrder:t.z!==A.z?A.z-t.z:t.id-A.id}function es(){const t=[];let A=0;const g=[],e=[],I=[];function C(){A=0,g.length=0,e.length=0,I.length=0}function i(o,s,r,h,d,a){let c=t[A];return c===void 0?(c={id:o.id,object:o,geometry:s,material:r,groupOrder:h,renderOrder:o.renderOrder,z:d,group:a},t[A]=c):(c.id=o.id,c.object=o,c.geometry=s,c.material=r,c.groupOrder=h,c.renderOrder=o.renderOrder,c.z=d,c.group=a),A++,c}function B(o,s,r,h,d,a){const c=i(o,s,r,h,d,a);r.transmission>0?e.push(c):r.transparent===!0?I.push(c):g.push(c)}function Q(o,s,r,h,d,a){const c=i(o,s,r,h,d,a);r.transmission>0?e.unshift(c):r.transparent===!0?I.unshift(c):g.unshift(c)}function n(o,s){g.length>1&&g.sort(o||Xw),e.length>1&&e.sort(s||ts),I.length>1&&I.sort(s||ts)}function E(){for(let o=A,s=t.length;o<s;o++){const r=t[o];if(r.id===null)break;r.id=null,r.object=null,r.geometry=null,r.material=null,r.group=null}}return{opaque:g,transmissive:e,transparent:I,init:C,push:B,unshift:Q,finish:E,sort:n}}function jw(){let t=new WeakMap;function A(e,I){const C=t.get(e);let i;return C===void 0?(i=new es,t.set(e,[i])):I>=C.length?(i=new es,C.push(i)):i=C[I],i}function g(){t=new WeakMap}return{get:A,dispose:g}}function $w(){const t={};return{get:function(A){if(t[A.id]!==void 0)return t[A.id];let g;switch(A.type){case"DirectionalLight":g={direction:new J,color:new Bg};break;case"SpotLight":g={position:new J,direction:new J,color:new Bg,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":g={position:new J,color:new Bg,distance:0,decay:0};break;case"HemisphereLight":g={direction:new J,skyColor:new Bg,groundColor:new Bg};break;case"RectAreaLight":g={color:new Bg,position:new J,halfWidth:new J,halfHeight:new J};break}return t[A.id]=g,g}}}function A0(){const t={};return{get:function(A){if(t[A.id]!==void 0)return t[A.id];let g;switch(A.type){case"DirectionalLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Eg};break;case"SpotLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Eg};break;case"PointLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Eg,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[A.id]=g,g}}}let g0=0;function t0(t,A){return(A.castShadow?2:0)-(t.castShadow?2:0)+(A.map?1:0)-(t.map?1:0)}function e0(t,A){const g=new $w,e=A0(),I={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let E=0;E<9;E++)I.probe.push(new J);const C=new J,i=new og,B=new og;function Q(E,o){let s=0,r=0,h=0;for(let j=0;j<9;j++)I.probe[j].set(0,0,0);let d=0,a=0,c=0,R=0,y=0,M=0,K=0,G=0,U=0,W=0,BA=0;E.sort(t0);const f=o===!0?Math.PI:1;for(let j=0,IA=E.length;j<IA;j++){const m=E[j],V=m.color,x=m.intensity,z=m.distance,O=m.shadow&&m.shadow.map?m.shadow.map.texture:null;if(m.isAmbientLight)s+=V.r*x*f,r+=V.g*x*f,h+=V.b*x*f;else if(m.isLightProbe){for(let X=0;X<9;X++)I.probe[X].addScaledVector(m.sh.coefficients[X],x);BA++}else if(m.isDirectionalLight){const X=g.get(m);if(X.color.copy(m.color).multiplyScalar(m.intensity*f),m.castShadow){const $=m.shadow,EA=e.get(m);EA.shadowBias=$.bias,EA.shadowNormalBias=$.normalBias,EA.shadowRadius=$.radius,EA.shadowMapSize=$.mapSize,I.directionalShadow[d]=EA,I.directionalShadowMap[d]=O,I.directionalShadowMatrix[d]=m.shadow.matrix,M++}I.directional[d]=X,d++}else if(m.isSpotLight){const X=g.get(m);X.position.setFromMatrixPosition(m.matrixWorld),X.color.copy(V).multiplyScalar(x*f),X.distance=z,X.coneCos=Math.cos(m.angle),X.penumbraCos=Math.cos(m.angle*(1-m.penumbra)),X.decay=m.decay,I.spot[c]=X;const $=m.shadow;if(m.map&&(I.spotLightMap[U]=m.map,U++,$.updateMatrices(m),m.castShadow&&W++),I.spotLightMatrix[c]=$.matrix,m.castShadow){const EA=e.get(m);EA.shadowBias=$.bias,EA.shadowNormalBias=$.normalBias,EA.shadowRadius=$.radius,EA.shadowMapSize=$.mapSize,I.spotShadow[c]=EA,I.spotShadowMap[c]=O,G++}c++}else if(m.isRectAreaLight){const X=g.get(m);X.color.copy(V).multiplyScalar(x),X.halfWidth.set(m.width*.5,0,0),X.halfHeight.set(0,m.height*.5,0),I.rectArea[R]=X,R++}else if(m.isPointLight){const X=g.get(m);if(X.color.copy(m.color).multiplyScalar(m.intensity*f),X.distance=m.distance,X.decay=m.decay,m.castShadow){const $=m.shadow,EA=e.get(m);EA.shadowBias=$.bias,EA.shadowNormalBias=$.normalBias,EA.shadowRadius=$.radius,EA.shadowMapSize=$.mapSize,EA.shadowCameraNear=$.camera.near,EA.shadowCameraFar=$.camera.far,I.pointShadow[a]=EA,I.pointShadowMap[a]=O,I.pointShadowMatrix[a]=m.shadow.matrix,K++}I.point[a]=X,a++}else if(m.isHemisphereLight){const X=g.get(m);X.skyColor.copy(m.color).multiplyScalar(x*f),X.groundColor.copy(m.groundColor).multiplyScalar(x*f),I.hemi[y]=X,y++}}R>0&&(A.isWebGL2?t.has("OES_texture_float_linear")===!0?(I.rectAreaLTC1=aA.LTC_FLOAT_1,I.rectAreaLTC2=aA.LTC_FLOAT_2):(I.rectAreaLTC1=aA.LTC_HALF_1,I.rectAreaLTC2=aA.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(I.rectAreaLTC1=aA.LTC_FLOAT_1,I.rectAreaLTC2=aA.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(I.rectAreaLTC1=aA.LTC_HALF_1,I.rectAreaLTC2=aA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),I.ambient[0]=s,I.ambient[1]=r,I.ambient[2]=h;const N=I.hash;(N.directionalLength!==d||N.pointLength!==a||N.spotLength!==c||N.rectAreaLength!==R||N.hemiLength!==y||N.numDirectionalShadows!==M||N.numPointShadows!==K||N.numSpotShadows!==G||N.numSpotMaps!==U||N.numLightProbes!==BA)&&(I.directional.length=d,I.spot.length=c,I.rectArea.length=R,I.point.length=a,I.hemi.length=y,I.directionalShadow.length=M,I.directionalShadowMap.length=M,I.pointShadow.length=K,I.pointShadowMap.length=K,I.spotShadow.length=G,I.spotShadowMap.length=G,I.directionalShadowMatrix.length=M,I.pointShadowMatrix.length=K,I.spotLightMatrix.length=G+U-W,I.spotLightMap.length=U,I.numSpotLightShadowsWithMaps=W,I.numLightProbes=BA,N.directionalLength=d,N.pointLength=a,N.spotLength=c,N.rectAreaLength=R,N.hemiLength=y,N.numDirectionalShadows=M,N.numPointShadows=K,N.numSpotShadows=G,N.numSpotMaps=U,N.numLightProbes=BA,I.version=g0++)}function n(E,o){let s=0,r=0,h=0,d=0,a=0;const c=o.matrixWorldInverse;for(let R=0,y=E.length;R<y;R++){const M=E[R];if(M.isDirectionalLight){const K=I.directional[s];K.direction.setFromMatrixPosition(M.matrixWorld),C.setFromMatrixPosition(M.target.matrixWorld),K.direction.sub(C),K.direction.transformDirection(c),s++}else if(M.isSpotLight){const K=I.spot[h];K.position.setFromMatrixPosition(M.matrixWorld),K.position.applyMatrix4(c),K.direction.setFromMatrixPosition(M.matrixWorld),C.setFromMatrixPosition(M.target.matrixWorld),K.direction.sub(C),K.direction.transformDirection(c),h++}else if(M.isRectAreaLight){const K=I.rectArea[d];K.position.setFromMatrixPosition(M.matrixWorld),K.position.applyMatrix4(c),B.identity(),i.copy(M.matrixWorld),i.premultiply(c),B.extractRotation(i),K.halfWidth.set(M.width*.5,0,0),K.halfHeight.set(0,M.height*.5,0),K.halfWidth.applyMatrix4(B),K.halfHeight.applyMatrix4(B),d++}else if(M.isPointLight){const K=I.point[r];K.position.setFromMatrixPosition(M.matrixWorld),K.position.applyMatrix4(c),r++}else if(M.isHemisphereLight){const K=I.hemi[a];K.direction.setFromMatrixPosition(M.matrixWorld),K.direction.transformDirection(c),a++}}}return{setup:Q,setupView:n,state:I}}function Is(t,A){const g=new e0(t,A),e=[],I=[];function C(){e.length=0,I.length=0}function i(o){e.push(o)}function B(o){I.push(o)}function Q(o){g.setup(e,o)}function n(o){g.setupView(e,o)}return{init:C,state:{lightsArray:e,shadowsArray:I,lights:g},setupLights:Q,setupLightsView:n,pushLight:i,pushShadow:B}}function I0(t,A){let g=new WeakMap;function e(C,i=0){const B=g.get(C);let Q;return B===void 0?(Q=new Is(t,A),g.set(C,[Q])):i>=B.length?(Q=new Is(t,A),B.push(Q)):Q=B[i],Q}function I(){g=new WeakMap}return{get:e,dispose:I}}class C0 extends Zt{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class i0 extends Zt{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
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
}`;function n0(t,A,g){let e=new xn;const I=new Eg,C=new Eg,i=new pg,B=new C0({depthPacking:_l}),Q=new i0,n={},E=g.maxTextureSize,o={[we]:st,[st]:we,[Ot]:Ot},s=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Eg},radius:{value:4}},vertexShader:B0,fragmentShader:Q0}),r=s.clone();r.defines.HORIZONTAL_PASS=1;const h=new ge;h.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new xt(h,s),a=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let c=this.type;this.render=function(G,U,W){if(a.enabled===!1||a.autoUpdate===!1&&a.needsUpdate===!1||G.length===0)return;const BA=t.getRenderTarget(),f=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),j=t.state;j.setBlending(ve),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const IA=c!==ae&&this.type===ae,m=c===ae&&this.type!==ae;for(let V=0,x=G.length;V<x;V++){const z=G[V],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;I.copy(O.mapSize);const X=O.getFrameExtents();if(I.multiply(X),C.copy(O.mapSize),(I.x>E||I.y>E)&&(I.x>E&&(C.x=Math.floor(E/X.x),I.x=C.x*X.x,O.mapSize.x=C.x),I.y>E&&(C.y=Math.floor(E/X.y),I.y=C.y*X.y,O.mapSize.y=C.y)),O.map===null||IA===!0||m===!0){const EA=this.type!==ae?{minFilter:Og,magFilter:Og}:{};O.map!==null&&O.map.dispose(),O.map=new cI(I.x,I.y,EA),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const $=O.getViewportCount();for(let EA=0;EA<$;EA++){const cA=O.getViewport(EA);i.set(C.x*cA.x,C.y*cA.y,C.x*cA.z,C.y*cA.w),j.viewport(i),O.updateMatrices(z,EA),e=O.getFrustum(),M(U,W,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===ae&&R(O,W),O.needsUpdate=!1}c=this.type,a.needsUpdate=!1,t.setRenderTarget(BA,f,N)};function R(G,U){const W=A.update(d);s.defines.VSM_SAMPLES!==G.blurSamples&&(s.defines.VSM_SAMPLES=G.blurSamples,r.defines.VSM_SAMPLES=G.blurSamples,s.needsUpdate=!0,r.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new cI(I.x,I.y)),s.uniforms.shadow_pass.value=G.map.texture,s.uniforms.resolution.value=G.mapSize,s.uniforms.radius.value=G.radius,t.setRenderTarget(G.mapPass),t.clear(),t.renderBufferDirect(U,null,W,s,d,null),r.uniforms.shadow_pass.value=G.mapPass.texture,r.uniforms.resolution.value=G.mapSize,r.uniforms.radius.value=G.radius,t.setRenderTarget(G.map),t.clear(),t.renderBufferDirect(U,null,W,r,d,null)}function y(G,U,W,BA){let f=null;const N=W.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(N!==void 0)f=N;else if(f=W.isPointLight===!0?Q:B,t.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const j=f.uuid,IA=U.uuid;let m=n[j];m===void 0&&(m={},n[j]=m);let V=m[IA];V===void 0&&(V=f.clone(),m[IA]=V,U.addEventListener("dispose",K)),f=V}if(f.visible=U.visible,f.wireframe=U.wireframe,BA===ae?f.side=U.shadowSide!==null?U.shadowSide:U.side:f.side=U.shadowSide!==null?U.shadowSide:o[U.side],f.alphaMap=U.alphaMap,f.alphaTest=U.alphaTest,f.map=U.map,f.clipShadows=U.clipShadows,f.clippingPlanes=U.clippingPlanes,f.clipIntersection=U.clipIntersection,f.displacementMap=U.displacementMap,f.displacementScale=U.displacementScale,f.displacementBias=U.displacementBias,f.wireframeLinewidth=U.wireframeLinewidth,f.linewidth=U.linewidth,W.isPointLight===!0&&f.isMeshDistanceMaterial===!0){const j=t.properties.get(f);j.light=W}return f}function M(G,U,W,BA,f){if(G.visible===!1)return;if(G.layers.test(U.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&f===ae)&&(!G.frustumCulled||e.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,G.matrixWorld);const IA=A.update(G),m=G.material;if(Array.isArray(m)){const V=IA.groups;for(let x=0,z=V.length;x<z;x++){const O=V[x],X=m[O.materialIndex];if(X&&X.visible){const $=y(G,X,BA,f);G.onBeforeShadow(t,G,U,W,IA,$,O),t.renderBufferDirect(W,null,IA,$,G,O),G.onAfterShadow(t,G,U,W,IA,$,O)}}}else if(m.visible){const V=y(G,m,BA,f);G.onBeforeShadow(t,G,U,W,IA,V,null),t.renderBufferDirect(W,null,IA,V,G,null),G.onAfterShadow(t,G,U,W,IA,V,null)}}const j=G.children;for(let IA=0,m=j.length;IA<m;IA++)M(j[IA],U,W,BA,f)}function K(G){G.target.removeEventListener("dispose",K);for(const W in n){const BA=n[W],f=G.target.uuid;f in BA&&(BA[f].dispose(),delete BA[f])}}}function E0(t,A,g){const e=g.isWebGL2;function I(){let F=!1;const sA=new pg;let oA=null;const RA=new pg(0,0,0,0);return{setMask:function(mA){oA!==mA&&!F&&(t.colorMask(mA,mA,mA,mA),oA=mA)},setLocked:function(mA){F=mA},setClear:function(mA,Cg,MA,mg,Xg){Xg===!0&&(mA*=mg,Cg*=mg,MA*=mg),sA.set(mA,Cg,MA,mg),RA.equals(sA)===!1&&(t.clearColor(mA,Cg,MA,mg),RA.copy(sA))},reset:function(){F=!1,oA=null,RA.set(-1,0,0,0)}}}function C(){let F=!1,sA=null,oA=null,RA=null;return{setTest:function(mA){mA?wA(t.DEPTH_TEST):Qg(t.DEPTH_TEST)},setMask:function(mA){sA!==mA&&!F&&(t.depthMask(mA),sA=mA)},setFunc:function(mA){if(oA!==mA){switch(mA){case hl:t.depthFunc(t.NEVER);break;case ll:t.depthFunc(t.ALWAYS);break;case Dl:t.depthFunc(t.LESS);break;case QB:t.depthFunc(t.LEQUAL);break;case dl:t.depthFunc(t.EQUAL);break;case fl:t.depthFunc(t.GEQUAL);break;case ul:t.depthFunc(t.GREATER);break;case wl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oA=mA}},setLocked:function(mA){F=mA},setClear:function(mA){RA!==mA&&(t.clearDepth(mA),RA=mA)},reset:function(){F=!1,sA=null,oA=null,RA=null}}}function i(){let F=!1,sA=null,oA=null,RA=null,mA=null,Cg=null,MA=null,mg=null,Xg=null;return{setTest:function(ig){F||(ig?wA(t.STENCIL_TEST):Qg(t.STENCIL_TEST))},setMask:function(ig){sA!==ig&&!F&&(t.stencilMask(ig),sA=ig)},setFunc:function(ig,Mg,ft){(oA!==ig||RA!==Mg||mA!==ft)&&(t.stencilFunc(ig,Mg,ft),oA=ig,RA=Mg,mA=ft)},setOp:function(ig,Mg,ft){(Cg!==ig||MA!==Mg||mg!==ft)&&(t.stencilOp(ig,Mg,ft),Cg=ig,MA=Mg,mg=ft)},setLocked:function(ig){F=ig},setClear:function(ig){Xg!==ig&&(t.clearStencil(ig),Xg=ig)},reset:function(){F=!1,sA=null,oA=null,RA=null,mA=null,Cg=null,MA=null,mg=null,Xg=null}}}const B=new I,Q=new C,n=new i,E=new WeakMap,o=new WeakMap;let s={},r={},h=new WeakMap,d=[],a=null,c=!1,R=null,y=null,M=null,K=null,G=null,U=null,W=null,BA=new Bg(0,0,0),f=0,N=!1,j=null,IA=null,m=null,V=null,x=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,X=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),O=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=X>=2);let EA=null,cA={};const xA=t.getParameter(t.SCISSOR_BOX),Y=t.getParameter(t.VIEWPORT),eA=new pg().fromArray(xA),dA=new pg().fromArray(Y);function KA(F,sA,oA,RA){const mA=new Uint8Array(4),Cg=t.createTexture();t.bindTexture(F,Cg),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let MA=0;MA<oA;MA++)e&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(sA,0,t.RGBA,1,1,RA,0,t.RGBA,t.UNSIGNED_BYTE,mA):t.texImage2D(sA+MA,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,mA);return Cg}const NA={};NA[t.TEXTURE_2D]=KA(t.TEXTURE_2D,t.TEXTURE_2D,1),NA[t.TEXTURE_CUBE_MAP]=KA(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),e&&(NA[t.TEXTURE_2D_ARRAY]=KA(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),NA[t.TEXTURE_3D]=KA(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),B.setClear(0,0,0,1),Q.setClear(1),n.setClear(0),wA(t.DEPTH_TEST),Q.setFunc(QB),yA(!1),S(mE),wA(t.CULL_FACE),uA(ve);function wA(F){s[F]!==!0&&(t.enable(F),s[F]=!0)}function Qg(F){s[F]!==!1&&(t.disable(F),s[F]=!1)}function qA(F,sA){return r[F]!==sA?(t.bindFramebuffer(F,sA),r[F]=sA,e&&(F===t.DRAW_FRAMEBUFFER&&(r[t.FRAMEBUFFER]=sA),F===t.FRAMEBUFFER&&(r[t.DRAW_FRAMEBUFFER]=sA)),!0):!1}function v(F,sA){let oA=d,RA=!1;if(F)if(oA=h.get(sA),oA===void 0&&(oA=[],h.set(sA,oA)),F.isWebGLMultipleRenderTargets){const mA=F.texture;if(oA.length!==mA.length||oA[0]!==t.COLOR_ATTACHMENT0){for(let Cg=0,MA=mA.length;Cg<MA;Cg++)oA[Cg]=t.COLOR_ATTACHMENT0+Cg;oA.length=mA.length,RA=!0}}else oA[0]!==t.COLOR_ATTACHMENT0&&(oA[0]=t.COLOR_ATTACHMENT0,RA=!0);else oA[0]!==t.BACK&&(oA[0]=t.BACK,RA=!0);RA&&(g.isWebGL2?t.drawBuffers(oA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(oA))}function hg(F){return a!==F?(t.useProgram(F),a=F,!0):!1}const hA={[CI]:t.FUNC_ADD,[gl]:t.FUNC_SUBTRACT,[tl]:t.FUNC_REVERSE_SUBTRACT};if(e)hA[vE]=t.MIN,hA[xE]=t.MAX;else{const F=A.get("EXT_blend_minmax");F!==null&&(hA[vE]=F.MIN_EXT,hA[xE]=F.MAX_EXT)}const GA={[el]:t.ZERO,[Il]:t.ONE,[Cl]:t.SRC_COLOR,[jQ]:t.SRC_ALPHA,[ol]:t.SRC_ALPHA_SATURATE,[nl]:t.DST_COLOR,[Bl]:t.DST_ALPHA,[il]:t.ONE_MINUS_SRC_COLOR,[$Q]:t.ONE_MINUS_SRC_ALPHA,[El]:t.ONE_MINUS_DST_COLOR,[Ql]:t.ONE_MINUS_DST_ALPHA,[sl]:t.CONSTANT_COLOR,[rl]:t.ONE_MINUS_CONSTANT_COLOR,[al]:t.CONSTANT_ALPHA,[cl]:t.ONE_MINUS_CONSTANT_ALPHA};function uA(F,sA,oA,RA,mA,Cg,MA,mg,Xg,ig){if(F===ve){c===!0&&(Qg(t.BLEND),c=!1);return}if(c===!1&&(wA(t.BLEND),c=!0),F!==Al){if(F!==R||ig!==N){if((y!==CI||G!==CI)&&(t.blendEquation(t.FUNC_ADD),y=CI,G=CI),ig)switch(F){case AC:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case KE:t.blendFunc(t.ONE,t.ONE);break;case JE:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case HE:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case AC:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case KE:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case JE:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case HE:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,K=null,U=null,W=null,BA.set(0,0,0),f=0,R=F,N=ig}return}mA=mA||sA,Cg=Cg||oA,MA=MA||RA,(sA!==y||mA!==G)&&(t.blendEquationSeparate(hA[sA],hA[mA]),y=sA,G=mA),(oA!==M||RA!==K||Cg!==U||MA!==W)&&(t.blendFuncSeparate(GA[oA],GA[RA],GA[Cg],GA[MA]),M=oA,K=RA,U=Cg,W=MA),(mg.equals(BA)===!1||Xg!==f)&&(t.blendColor(mg.r,mg.g,mg.b,Xg),BA.copy(mg),f=Xg),R=F,N=!1}function jA(F,sA){F.side===Ot?Qg(t.CULL_FACE):wA(t.CULL_FACE);let oA=F.side===st;sA&&(oA=!oA),yA(oA),F.blending===AC&&F.transparent===!1?uA(ve):uA(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),Q.setFunc(F.depthFunc),Q.setTest(F.depthTest),Q.setMask(F.depthWrite),B.setMask(F.colorWrite);const RA=F.stencilWrite;n.setTest(RA),RA&&(n.setMask(F.stencilWriteMask),n.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),n.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),b(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?wA(t.SAMPLE_ALPHA_TO_COVERAGE):Qg(t.SAMPLE_ALPHA_TO_COVERAGE)}function yA(F){j!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),j=F)}function S(F){F!==Xh?(wA(t.CULL_FACE),F!==IA&&(F===mE?t.cullFace(t.BACK):F===jh?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Qg(t.CULL_FACE),IA=F}function u(F){F!==m&&(O&&t.lineWidth(F),m=F)}function b(F,sA,oA){F?(wA(t.POLYGON_OFFSET_FILL),(V!==sA||x!==oA)&&(t.polygonOffset(sA,oA),V=sA,x=oA)):Qg(t.POLYGON_OFFSET_FILL)}function QA(F){F?wA(t.SCISSOR_TEST):Qg(t.SCISSOR_TEST)}function CA(F){F===void 0&&(F=t.TEXTURE0+z-1),EA!==F&&(t.activeTexture(F),EA=F)}function nA(F,sA,oA){oA===void 0&&(EA===null?oA=t.TEXTURE0+z-1:oA=EA);let RA=cA[oA];RA===void 0&&(RA={type:void 0,texture:void 0},cA[oA]=RA),(RA.type!==F||RA.texture!==sA)&&(EA!==oA&&(t.activeTexture(oA),EA=oA),t.bindTexture(F,sA||NA[F]),RA.type=F,RA.texture=sA)}function FA(){const F=cA[EA];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function lA(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pA(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function HA(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function XA(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function iA(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lg(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ag(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function PA(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kA(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function SA(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zA(F){eA.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),eA.copy(F))}function _A(F){dA.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),dA.copy(F))}function rg(F,sA){let oA=o.get(sA);oA===void 0&&(oA=new WeakMap,o.set(sA,oA));let RA=oA.get(F);RA===void 0&&(RA=t.getUniformBlockIndex(sA,F.name),oA.set(F,RA))}function OA(F,sA){const RA=o.get(sA).get(F);E.get(sA)!==RA&&(t.uniformBlockBinding(sA,RA,F.__bindingPointIndex),E.set(sA,RA))}function ag(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),e===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),s={},EA=null,cA={},r={},h=new WeakMap,d=[],a=null,c=!1,R=null,y=null,M=null,K=null,G=null,U=null,W=null,BA=new Bg(0,0,0),f=0,N=!1,j=null,IA=null,m=null,V=null,x=null,eA.set(0,0,t.canvas.width,t.canvas.height),dA.set(0,0,t.canvas.width,t.canvas.height),B.reset(),Q.reset(),n.reset()}return{buffers:{color:B,depth:Q,stencil:n},enable:wA,disable:Qg,bindFramebuffer:qA,drawBuffers:v,useProgram:hg,setBlending:uA,setMaterial:jA,setFlipSided:yA,setCullFace:S,setLineWidth:u,setPolygonOffset:b,setScissorTest:QA,activeTexture:CA,bindTexture:nA,unbindTexture:FA,compressedTexImage2D:lA,compressedTexImage3D:pA,texImage2D:kA,texImage3D:SA,updateUBOMapping:rg,uniformBlockBinding:OA,texStorage2D:Ag,texStorage3D:PA,texSubImage2D:HA,texSubImage3D:XA,compressedTexSubImage2D:iA,compressedTexSubImage3D:lg,scissor:zA,viewport:_A,reset:ag}}function o0(t,A,g,e,I,C,i){const B=I.isWebGL2,Q=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,n=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let o;const s=new WeakMap;let r=!1;try{r=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(S,u){return r?new OffscreenCanvas(S,u):WC("canvas")}function d(S,u,b,QA){let CA=1;if((S.width>QA||S.height>QA)&&(CA=QA/Math.max(S.width,S.height)),CA<1||u===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const nA=u?aB:Math.floor,FA=nA(CA*S.width),lA=nA(CA*S.height);o===void 0&&(o=h(FA,lA));const pA=b?h(FA,lA):o;return pA.width=FA,pA.height=lA,pA.getContext("2d").drawImage(S,0,0,FA,lA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+FA+"x"+lA+")."),pA}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function a(S){return Bn(S.width)&&Bn(S.height)}function c(S){return B?!1:S.wrapS!==Rt||S.wrapT!==Rt||S.minFilter!==Og&&S.minFilter!==et}function R(S,u){return S.generateMipmaps&&u&&S.minFilter!==Og&&S.minFilter!==et}function y(S){t.generateMipmap(S)}function M(S,u,b,QA,CA=!1){if(B===!1)return u;if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let nA=u;if(u===t.RED&&(b===t.FLOAT&&(nA=t.R32F),b===t.HALF_FLOAT&&(nA=t.R16F),b===t.UNSIGNED_BYTE&&(nA=t.R8)),u===t.RED_INTEGER&&(b===t.UNSIGNED_BYTE&&(nA=t.R8UI),b===t.UNSIGNED_SHORT&&(nA=t.R16UI),b===t.UNSIGNED_INT&&(nA=t.R32UI),b===t.BYTE&&(nA=t.R8I),b===t.SHORT&&(nA=t.R16I),b===t.INT&&(nA=t.R32I)),u===t.RG&&(b===t.FLOAT&&(nA=t.RG32F),b===t.HALF_FLOAT&&(nA=t.RG16F),b===t.UNSIGNED_BYTE&&(nA=t.RG8)),u===t.RGBA){const FA=CA?EB:dg.getTransfer(QA);b===t.FLOAT&&(nA=t.RGBA32F),b===t.HALF_FLOAT&&(nA=t.RGBA16F),b===t.UNSIGNED_BYTE&&(nA=FA===Ng?t.SRGB8_ALPHA8:t.RGBA8),b===t.UNSIGNED_SHORT_4_4_4_4&&(nA=t.RGBA4),b===t.UNSIGNED_SHORT_5_5_5_1&&(nA=t.RGB5_A1)}return(nA===t.R16F||nA===t.R32F||nA===t.RG16F||nA===t.RG32F||nA===t.RGBA16F||nA===t.RGBA32F)&&A.get("EXT_color_buffer_float"),nA}function K(S,u,b){return R(S,b)===!0||S.isFramebufferTexture&&S.minFilter!==Og&&S.minFilter!==et?Math.log2(Math.max(u.width,u.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?u.mipmaps.length:1}function G(S){return S===Og||S===tn||S===WI?t.NEAREST:t.LINEAR}function U(S){const u=S.target;u.removeEventListener("dispose",U),BA(u),u.isVideoTexture&&E.delete(u)}function W(S){const u=S.target;u.removeEventListener("dispose",W),N(u)}function BA(S){const u=e.get(S);if(u.__webglInit===void 0)return;const b=S.source,QA=s.get(b);if(QA){const CA=QA[u.__cacheKey];CA.usedTimes--,CA.usedTimes===0&&f(S),Object.keys(QA).length===0&&s.delete(b)}e.remove(S)}function f(S){const u=e.get(S);t.deleteTexture(u.__webglTexture);const b=S.source,QA=s.get(b);delete QA[u.__cacheKey],i.memory.textures--}function N(S){const u=S.texture,b=e.get(S),QA=e.get(u);if(QA.__webglTexture!==void 0&&(t.deleteTexture(QA.__webglTexture),i.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let CA=0;CA<6;CA++){if(Array.isArray(b.__webglFramebuffer[CA]))for(let nA=0;nA<b.__webglFramebuffer[CA].length;nA++)t.deleteFramebuffer(b.__webglFramebuffer[CA][nA]);else t.deleteFramebuffer(b.__webglFramebuffer[CA]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[CA])}else{if(Array.isArray(b.__webglFramebuffer))for(let CA=0;CA<b.__webglFramebuffer.length;CA++)t.deleteFramebuffer(b.__webglFramebuffer[CA]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let CA=0;CA<b.__webglColorRenderbuffer.length;CA++)b.__webglColorRenderbuffer[CA]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[CA]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let CA=0,nA=u.length;CA<nA;CA++){const FA=e.get(u[CA]);FA.__webglTexture&&(t.deleteTexture(FA.__webglTexture),i.memory.textures--),e.remove(u[CA])}e.remove(u),e.remove(S)}let j=0;function IA(){j=0}function m(){const S=j;return S>=I.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+I.maxTextures),j+=1,S}function V(S){const u=[];return u.push(S.wrapS),u.push(S.wrapT),u.push(S.wrapR||0),u.push(S.magFilter),u.push(S.minFilter),u.push(S.anisotropy),u.push(S.internalFormat),u.push(S.format),u.push(S.type),u.push(S.generateMipmaps),u.push(S.premultiplyAlpha),u.push(S.flipY),u.push(S.unpackAlignment),u.push(S.colorSpace),u.join()}function x(S,u){const b=e.get(S);if(S.isVideoTexture&&jA(S),S.isRenderTargetTexture===!1&&S.version>0&&b.__version!==S.version){const QA=S.image;if(QA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(QA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{eA(b,S,u);return}}g.bindTexture(t.TEXTURE_2D,b.__webglTexture,t.TEXTURE0+u)}function z(S,u){const b=e.get(S);if(S.version>0&&b.__version!==S.version){eA(b,S,u);return}g.bindTexture(t.TEXTURE_2D_ARRAY,b.__webglTexture,t.TEXTURE0+u)}function O(S,u){const b=e.get(S);if(S.version>0&&b.__version!==S.version){eA(b,S,u);return}g.bindTexture(t.TEXTURE_3D,b.__webglTexture,t.TEXTURE0+u)}function X(S,u){const b=e.get(S);if(S.version>0&&b.__version!==S.version){dA(b,S,u);return}g.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+u)}const $={[nC]:t.REPEAT,[Rt]:t.CLAMP_TO_EDGE,[nB]:t.MIRRORED_REPEAT},EA={[Og]:t.NEAREST,[tn]:t.NEAREST_MIPMAP_NEAREST,[WI]:t.NEAREST_MIPMAP_LINEAR,[et]:t.LINEAR,[AB]:t.LINEAR_MIPMAP_NEAREST,[he]:t.LINEAR_MIPMAP_LINEAR},cA={[Pl]:t.NEVER,[Xl]:t.ALWAYS,[Ol]:t.LESS,[Vr]:t.LEQUAL,[Vl]:t.EQUAL,[Zl]:t.GEQUAL,[Wl]:t.GREATER,[zl]:t.NOTEQUAL};function xA(S,u,b){if(u.type===Vt&&A.has("OES_texture_float_linear")===!1&&(u.magFilter===et||u.magFilter===AB||u.magFilter===WI||u.magFilter===he||u.minFilter===et||u.minFilter===AB||u.minFilter===WI||u.minFilter===he)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),b?(t.texParameteri(S,t.TEXTURE_WRAP_S,$[u.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,$[u.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,$[u.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,EA[u.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,EA[u.minFilter])):(t.texParameteri(S,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(S,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(u.wrapS!==Rt||u.wrapT!==Rt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(S,t.TEXTURE_MAG_FILTER,G(u.magFilter)),t.texParameteri(S,t.TEXTURE_MIN_FILTER,G(u.minFilter)),u.minFilter!==Og&&u.minFilter!==et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),u.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,cA[u.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const QA=A.get("EXT_texture_filter_anisotropic");if(u.magFilter===Og||u.minFilter!==WI&&u.minFilter!==he||u.type===Vt&&A.has("OES_texture_float_linear")===!1||B===!1&&u.type===PC&&A.has("OES_texture_half_float_linear")===!1)return;(u.anisotropy>1||e.get(u).__currentAnisotropy)&&(t.texParameterf(S,QA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,I.getMaxAnisotropy())),e.get(u).__currentAnisotropy=u.anisotropy)}}function Y(S,u){let b=!1;S.__webglInit===void 0&&(S.__webglInit=!0,u.addEventListener("dispose",U));const QA=u.source;let CA=s.get(QA);CA===void 0&&(CA={},s.set(QA,CA));const nA=V(u);if(nA!==S.__cacheKey){CA[nA]===void 0&&(CA[nA]={texture:t.createTexture(),usedTimes:0},i.memory.textures++,b=!0),CA[nA].usedTimes++;const FA=CA[S.__cacheKey];FA!==void 0&&(CA[S.__cacheKey].usedTimes--,FA.usedTimes===0&&f(u)),S.__cacheKey=nA,S.__webglTexture=CA[nA].texture}return b}function eA(S,u,b){let QA=t.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&(QA=t.TEXTURE_2D_ARRAY),u.isData3DTexture&&(QA=t.TEXTURE_3D);const CA=Y(S,u),nA=u.source;g.bindTexture(QA,S.__webglTexture,t.TEXTURE0+b);const FA=e.get(nA);if(nA.version!==FA.__version||CA===!0){g.activeTexture(t.TEXTURE0+b);const lA=dg.getPrimaries(dg.workingColorSpace),pA=u.colorSpace===Ft?null:dg.getPrimaries(u.colorSpace),HA=u.colorSpace===Ft||lA===pA?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,u.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,u.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,HA);const XA=c(u)&&a(u.image)===!1;let iA=d(u.image,XA,!1,I.maxTextureSize);iA=yA(u,iA);const lg=a(iA)||B,Ag=C.convert(u.format,u.colorSpace);let PA=C.convert(u.type),kA=M(u.internalFormat,Ag,PA,u.colorSpace,u.isVideoTexture);xA(QA,u,lg);let SA;const zA=u.mipmaps,_A=B&&u.isVideoTexture!==!0&&kA!==_r,rg=FA.__version===void 0||CA===!0,OA=nA.dataReady,ag=K(u,iA,lg);if(u.isDepthTexture)kA=t.DEPTH_COMPONENT,B?u.type===Vt?kA=t.DEPTH_COMPONENT32F:u.type===Ke?kA=t.DEPTH_COMPONENT24:u.type===QI?kA=t.DEPTH24_STENCIL8:kA=t.DEPTH_COMPONENT16:u.type===Vt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),u.format===nI&&kA===t.DEPTH_COMPONENT&&u.type!==Jn&&u.type!==Ke&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),u.type=Ke,PA=C.convert(u.type)),u.format===EC&&kA===t.DEPTH_COMPONENT&&(kA=t.DEPTH_STENCIL,u.type!==QI&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),u.type=QI,PA=C.convert(u.type))),rg&&(_A?g.texStorage2D(t.TEXTURE_2D,1,kA,iA.width,iA.height):g.texImage2D(t.TEXTURE_2D,0,kA,iA.width,iA.height,0,Ag,PA,null));else if(u.isDataTexture)if(zA.length>0&&lg){_A&&rg&&g.texStorage2D(t.TEXTURE_2D,ag,kA,zA[0].width,zA[0].height);for(let F=0,sA=zA.length;F<sA;F++)SA=zA[F],_A?OA&&g.texSubImage2D(t.TEXTURE_2D,F,0,0,SA.width,SA.height,Ag,PA,SA.data):g.texImage2D(t.TEXTURE_2D,F,kA,SA.width,SA.height,0,Ag,PA,SA.data);u.generateMipmaps=!1}else _A?(rg&&g.texStorage2D(t.TEXTURE_2D,ag,kA,iA.width,iA.height),OA&&g.texSubImage2D(t.TEXTURE_2D,0,0,0,iA.width,iA.height,Ag,PA,iA.data)):g.texImage2D(t.TEXTURE_2D,0,kA,iA.width,iA.height,0,Ag,PA,iA.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){_A&&rg&&g.texStorage3D(t.TEXTURE_2D_ARRAY,ag,kA,zA[0].width,zA[0].height,iA.depth);for(let F=0,sA=zA.length;F<sA;F++)SA=zA[F],u.format!==Lt?Ag!==null?_A?OA&&g.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,SA.width,SA.height,iA.depth,Ag,SA.data,0,0):g.compressedTexImage3D(t.TEXTURE_2D_ARRAY,F,kA,SA.width,SA.height,iA.depth,0,SA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_A?OA&&g.texSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,SA.width,SA.height,iA.depth,Ag,PA,SA.data):g.texImage3D(t.TEXTURE_2D_ARRAY,F,kA,SA.width,SA.height,iA.depth,0,Ag,PA,SA.data)}else{_A&&rg&&g.texStorage2D(t.TEXTURE_2D,ag,kA,zA[0].width,zA[0].height);for(let F=0,sA=zA.length;F<sA;F++)SA=zA[F],u.format!==Lt?Ag!==null?_A?OA&&g.compressedTexSubImage2D(t.TEXTURE_2D,F,0,0,SA.width,SA.height,Ag,SA.data):g.compressedTexImage2D(t.TEXTURE_2D,F,kA,SA.width,SA.height,0,SA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_A?OA&&g.texSubImage2D(t.TEXTURE_2D,F,0,0,SA.width,SA.height,Ag,PA,SA.data):g.texImage2D(t.TEXTURE_2D,F,kA,SA.width,SA.height,0,Ag,PA,SA.data)}else if(u.isDataArrayTexture)_A?(rg&&g.texStorage3D(t.TEXTURE_2D_ARRAY,ag,kA,iA.width,iA.height,iA.depth),OA&&g.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,iA.width,iA.height,iA.depth,Ag,PA,iA.data)):g.texImage3D(t.TEXTURE_2D_ARRAY,0,kA,iA.width,iA.height,iA.depth,0,Ag,PA,iA.data);else if(u.isData3DTexture)_A?(rg&&g.texStorage3D(t.TEXTURE_3D,ag,kA,iA.width,iA.height,iA.depth),OA&&g.texSubImage3D(t.TEXTURE_3D,0,0,0,0,iA.width,iA.height,iA.depth,Ag,PA,iA.data)):g.texImage3D(t.TEXTURE_3D,0,kA,iA.width,iA.height,iA.depth,0,Ag,PA,iA.data);else if(u.isFramebufferTexture){if(rg)if(_A)g.texStorage2D(t.TEXTURE_2D,ag,kA,iA.width,iA.height);else{let F=iA.width,sA=iA.height;for(let oA=0;oA<ag;oA++)g.texImage2D(t.TEXTURE_2D,oA,kA,F,sA,0,Ag,PA,null),F>>=1,sA>>=1}}else if(zA.length>0&&lg){_A&&rg&&g.texStorage2D(t.TEXTURE_2D,ag,kA,zA[0].width,zA[0].height);for(let F=0,sA=zA.length;F<sA;F++)SA=zA[F],_A?OA&&g.texSubImage2D(t.TEXTURE_2D,F,0,0,Ag,PA,SA):g.texImage2D(t.TEXTURE_2D,F,kA,Ag,PA,SA);u.generateMipmaps=!1}else _A?(rg&&g.texStorage2D(t.TEXTURE_2D,ag,kA,iA.width,iA.height),OA&&g.texSubImage2D(t.TEXTURE_2D,0,0,0,Ag,PA,iA)):g.texImage2D(t.TEXTURE_2D,0,kA,Ag,PA,iA);R(u,lg)&&y(QA),FA.__version=nA.version,u.onUpdate&&u.onUpdate(u)}S.__version=u.version}function dA(S,u,b){if(u.image.length!==6)return;const QA=Y(S,u),CA=u.source;g.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+b);const nA=e.get(CA);if(CA.version!==nA.__version||QA===!0){g.activeTexture(t.TEXTURE0+b);const FA=dg.getPrimaries(dg.workingColorSpace),lA=u.colorSpace===Ft?null:dg.getPrimaries(u.colorSpace),pA=u.colorSpace===Ft||FA===lA?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,u.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,u.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pA);const HA=u.isCompressedTexture||u.image[0].isCompressedTexture,XA=u.image[0]&&u.image[0].isDataTexture,iA=[];for(let F=0;F<6;F++)!HA&&!XA?iA[F]=d(u.image[F],!1,!0,I.maxCubemapSize):iA[F]=XA?u.image[F].image:u.image[F],iA[F]=yA(u,iA[F]);const lg=iA[0],Ag=a(lg)||B,PA=C.convert(u.format,u.colorSpace),kA=C.convert(u.type),SA=M(u.internalFormat,PA,kA,u.colorSpace),zA=B&&u.isVideoTexture!==!0,_A=nA.__version===void 0||QA===!0,rg=CA.dataReady;let OA=K(u,lg,Ag);xA(t.TEXTURE_CUBE_MAP,u,Ag);let ag;if(HA){zA&&_A&&g.texStorage2D(t.TEXTURE_CUBE_MAP,OA,SA,lg.width,lg.height);for(let F=0;F<6;F++){ag=iA[F].mipmaps;for(let sA=0;sA<ag.length;sA++){const oA=ag[sA];u.format!==Lt?PA!==null?zA?rg&&g.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,sA,0,0,oA.width,oA.height,PA,oA.data):g.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,sA,SA,oA.width,oA.height,0,oA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zA?rg&&g.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,sA,0,0,oA.width,oA.height,PA,kA,oA.data):g.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,sA,SA,oA.width,oA.height,0,PA,kA,oA.data)}}}else{ag=u.mipmaps,zA&&_A&&(ag.length>0&&OA++,g.texStorage2D(t.TEXTURE_CUBE_MAP,OA,SA,iA[0].width,iA[0].height));for(let F=0;F<6;F++)if(XA){zA?rg&&g.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,iA[F].width,iA[F].height,PA,kA,iA[F].data):g.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,SA,iA[F].width,iA[F].height,0,PA,kA,iA[F].data);for(let sA=0;sA<ag.length;sA++){const RA=ag[sA].image[F].image;zA?rg&&g.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,sA+1,0,0,RA.width,RA.height,PA,kA,RA.data):g.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,sA+1,SA,RA.width,RA.height,0,PA,kA,RA.data)}}else{zA?rg&&g.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,PA,kA,iA[F]):g.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,SA,PA,kA,iA[F]);for(let sA=0;sA<ag.length;sA++){const oA=ag[sA];zA?rg&&g.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,sA+1,0,0,PA,kA,oA.image[F]):g.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,sA+1,SA,PA,kA,oA.image[F])}}}R(u,Ag)&&y(t.TEXTURE_CUBE_MAP),nA.__version=CA.version,u.onUpdate&&u.onUpdate(u)}S.__version=u.version}function KA(S,u,b,QA,CA,nA){const FA=C.convert(b.format,b.colorSpace),lA=C.convert(b.type),pA=M(b.internalFormat,FA,lA,b.colorSpace);if(!e.get(u).__hasExternalTextures){const XA=Math.max(1,u.width>>nA),iA=Math.max(1,u.height>>nA);CA===t.TEXTURE_3D||CA===t.TEXTURE_2D_ARRAY?g.texImage3D(CA,nA,pA,XA,iA,u.depth,0,FA,lA,null):g.texImage2D(CA,nA,pA,XA,iA,0,FA,lA,null)}g.bindFramebuffer(t.FRAMEBUFFER,S),uA(u)?Q.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,QA,CA,e.get(b).__webglTexture,0,GA(u)):(CA===t.TEXTURE_2D||CA>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&CA<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,QA,CA,e.get(b).__webglTexture,nA),g.bindFramebuffer(t.FRAMEBUFFER,null)}function NA(S,u,b){if(t.bindRenderbuffer(t.RENDERBUFFER,S),u.depthBuffer&&!u.stencilBuffer){let QA=B===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(b||uA(u)){const CA=u.depthTexture;CA&&CA.isDepthTexture&&(CA.type===Vt?QA=t.DEPTH_COMPONENT32F:CA.type===Ke&&(QA=t.DEPTH_COMPONENT24));const nA=GA(u);uA(u)?Q.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,nA,QA,u.width,u.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,nA,QA,u.width,u.height)}else t.renderbufferStorage(t.RENDERBUFFER,QA,u.width,u.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,S)}else if(u.depthBuffer&&u.stencilBuffer){const QA=GA(u);b&&uA(u)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,QA,t.DEPTH24_STENCIL8,u.width,u.height):uA(u)?Q.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,QA,t.DEPTH24_STENCIL8,u.width,u.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,u.width,u.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,S)}else{const QA=u.isWebGLMultipleRenderTargets===!0?u.texture:[u.texture];for(let CA=0;CA<QA.length;CA++){const nA=QA[CA],FA=C.convert(nA.format,nA.colorSpace),lA=C.convert(nA.type),pA=M(nA.internalFormat,FA,lA,nA.colorSpace),HA=GA(u);b&&uA(u)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,HA,pA,u.width,u.height):uA(u)?Q.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,HA,pA,u.width,u.height):t.renderbufferStorage(t.RENDERBUFFER,pA,u.width,u.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function wA(S,u){if(u&&u.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(g.bindFramebuffer(t.FRAMEBUFFER,S),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!e.get(u.depthTexture).__webglTexture||u.depthTexture.image.width!==u.width||u.depthTexture.image.height!==u.height)&&(u.depthTexture.image.width=u.width,u.depthTexture.image.height=u.height,u.depthTexture.needsUpdate=!0),x(u.depthTexture,0);const QA=e.get(u.depthTexture).__webglTexture,CA=GA(u);if(u.depthTexture.format===nI)uA(u)?Q.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,QA,0,CA):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,QA,0);else if(u.depthTexture.format===EC)uA(u)?Q.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,QA,0,CA):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,QA,0);else throw new Error("Unknown depthTexture format")}function Qg(S){const u=e.get(S),b=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!u.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");wA(u.__webglFramebuffer,S)}else if(b){u.__webglDepthbuffer=[];for(let QA=0;QA<6;QA++)g.bindFramebuffer(t.FRAMEBUFFER,u.__webglFramebuffer[QA]),u.__webglDepthbuffer[QA]=t.createRenderbuffer(),NA(u.__webglDepthbuffer[QA],S,!1)}else g.bindFramebuffer(t.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer=t.createRenderbuffer(),NA(u.__webglDepthbuffer,S,!1);g.bindFramebuffer(t.FRAMEBUFFER,null)}function qA(S,u,b){const QA=e.get(S);u!==void 0&&KA(QA.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),b!==void 0&&Qg(S)}function v(S){const u=S.texture,b=e.get(S),QA=e.get(u);S.addEventListener("dispose",W),S.isWebGLMultipleRenderTargets!==!0&&(QA.__webglTexture===void 0&&(QA.__webglTexture=t.createTexture()),QA.__version=u.version,i.memory.textures++);const CA=S.isWebGLCubeRenderTarget===!0,nA=S.isWebGLMultipleRenderTargets===!0,FA=a(S)||B;if(CA){b.__webglFramebuffer=[];for(let lA=0;lA<6;lA++)if(B&&u.mipmaps&&u.mipmaps.length>0){b.__webglFramebuffer[lA]=[];for(let pA=0;pA<u.mipmaps.length;pA++)b.__webglFramebuffer[lA][pA]=t.createFramebuffer()}else b.__webglFramebuffer[lA]=t.createFramebuffer()}else{if(B&&u.mipmaps&&u.mipmaps.length>0){b.__webglFramebuffer=[];for(let lA=0;lA<u.mipmaps.length;lA++)b.__webglFramebuffer[lA]=t.createFramebuffer()}else b.__webglFramebuffer=t.createFramebuffer();if(nA)if(I.drawBuffers){const lA=S.texture;for(let pA=0,HA=lA.length;pA<HA;pA++){const XA=e.get(lA[pA]);XA.__webglTexture===void 0&&(XA.__webglTexture=t.createTexture(),i.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(B&&S.samples>0&&uA(S)===!1){const lA=nA?u:[u];b.__webglMultisampledFramebuffer=t.createFramebuffer(),b.__webglColorRenderbuffer=[],g.bindFramebuffer(t.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let pA=0;pA<lA.length;pA++){const HA=lA[pA];b.__webglColorRenderbuffer[pA]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,b.__webglColorRenderbuffer[pA]);const XA=C.convert(HA.format,HA.colorSpace),iA=C.convert(HA.type),lg=M(HA.internalFormat,XA,iA,HA.colorSpace,S.isXRRenderTarget===!0),Ag=GA(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ag,lg,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pA,t.RENDERBUFFER,b.__webglColorRenderbuffer[pA])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(b.__webglDepthRenderbuffer=t.createRenderbuffer(),NA(b.__webglDepthRenderbuffer,S,!0)),g.bindFramebuffer(t.FRAMEBUFFER,null)}}if(CA){g.bindTexture(t.TEXTURE_CUBE_MAP,QA.__webglTexture),xA(t.TEXTURE_CUBE_MAP,u,FA);for(let lA=0;lA<6;lA++)if(B&&u.mipmaps&&u.mipmaps.length>0)for(let pA=0;pA<u.mipmaps.length;pA++)KA(b.__webglFramebuffer[lA][pA],S,u,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+lA,pA);else KA(b.__webglFramebuffer[lA],S,u,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+lA,0);R(u,FA)&&y(t.TEXTURE_CUBE_MAP),g.unbindTexture()}else if(nA){const lA=S.texture;for(let pA=0,HA=lA.length;pA<HA;pA++){const XA=lA[pA],iA=e.get(XA);g.bindTexture(t.TEXTURE_2D,iA.__webglTexture),xA(t.TEXTURE_2D,XA,FA),KA(b.__webglFramebuffer,S,XA,t.COLOR_ATTACHMENT0+pA,t.TEXTURE_2D,0),R(XA,FA)&&y(t.TEXTURE_2D)}g.unbindTexture()}else{let lA=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(B?lA=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),g.bindTexture(lA,QA.__webglTexture),xA(lA,u,FA),B&&u.mipmaps&&u.mipmaps.length>0)for(let pA=0;pA<u.mipmaps.length;pA++)KA(b.__webglFramebuffer[pA],S,u,t.COLOR_ATTACHMENT0,lA,pA);else KA(b.__webglFramebuffer,S,u,t.COLOR_ATTACHMENT0,lA,0);R(u,FA)&&y(lA),g.unbindTexture()}S.depthBuffer&&Qg(S)}function hg(S){const u=a(S)||B,b=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let QA=0,CA=b.length;QA<CA;QA++){const nA=b[QA];if(R(nA,u)){const FA=S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,lA=e.get(nA).__webglTexture;g.bindTexture(FA,lA),y(FA),g.unbindTexture()}}}function hA(S){if(B&&S.samples>0&&uA(S)===!1){const u=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],b=S.width,QA=S.height;let CA=t.COLOR_BUFFER_BIT;const nA=[],FA=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,lA=e.get(S),pA=S.isWebGLMultipleRenderTargets===!0;if(pA)for(let HA=0;HA<u.length;HA++)g.bindFramebuffer(t.FRAMEBUFFER,lA.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+HA,t.RENDERBUFFER,null),g.bindFramebuffer(t.FRAMEBUFFER,lA.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+HA,t.TEXTURE_2D,null,0);g.bindFramebuffer(t.READ_FRAMEBUFFER,lA.__webglMultisampledFramebuffer),g.bindFramebuffer(t.DRAW_FRAMEBUFFER,lA.__webglFramebuffer);for(let HA=0;HA<u.length;HA++){nA.push(t.COLOR_ATTACHMENT0+HA),S.depthBuffer&&nA.push(FA);const XA=lA.__ignoreDepthValues!==void 0?lA.__ignoreDepthValues:!1;if(XA===!1&&(S.depthBuffer&&(CA|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&(CA|=t.STENCIL_BUFFER_BIT)),pA&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,lA.__webglColorRenderbuffer[HA]),XA===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[FA]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[FA])),pA){const iA=e.get(u[HA]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,iA,0)}t.blitFramebuffer(0,0,b,QA,0,0,b,QA,CA,t.NEAREST),n&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,nA)}if(g.bindFramebuffer(t.READ_FRAMEBUFFER,null),g.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pA)for(let HA=0;HA<u.length;HA++){g.bindFramebuffer(t.FRAMEBUFFER,lA.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+HA,t.RENDERBUFFER,lA.__webglColorRenderbuffer[HA]);const XA=e.get(u[HA]).__webglTexture;g.bindFramebuffer(t.FRAMEBUFFER,lA.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+HA,t.TEXTURE_2D,XA,0)}g.bindFramebuffer(t.DRAW_FRAMEBUFFER,lA.__webglMultisampledFramebuffer)}}function GA(S){return Math.min(I.maxSamples,S.samples)}function uA(S){const u=e.get(S);return B&&S.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function jA(S){const u=i.render.frame;E.get(S)!==u&&(E.set(S,u),S.update())}function yA(S,u){const b=S.colorSpace,QA=S.format,CA=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Cn||b!==kt&&b!==Ft&&(dg.getTransfer(b)===Ng?B===!1?A.has("EXT_sRGB")===!0&&QA===Lt?(S.format=Cn,S.minFilter=et,S.generateMipmaps=!1):u=zr.sRGBToLinear(u):(QA!==Lt||CA!==Ye)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",b)),u}this.allocateTextureUnit=m,this.resetTextureUnits=IA,this.setTexture2D=x,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=X,this.rebindTextures=qA,this.setupRenderTarget=v,this.updateRenderTargetMipmap=hg,this.updateMultisampleRenderTarget=hA,this.setupDepthRenderbuffer=Qg,this.setupFrameBufferTexture=KA,this.useMultisampledRTT=uA}function s0(t,A,g){const e=g.isWebGL2;function I(C,i=Ft){let B;const Q=dg.getTransfer(i);if(C===Ye)return t.UNSIGNED_BYTE;if(C===vr)return t.UNSIGNED_SHORT_4_4_4_4;if(C===xr)return t.UNSIGNED_SHORT_5_5_5_1;if(C===kl)return t.BYTE;if(C===Gl)return t.SHORT;if(C===Jn)return t.UNSIGNED_SHORT;if(C===Hr)return t.INT;if(C===Ke)return t.UNSIGNED_INT;if(C===Vt)return t.FLOAT;if(C===PC)return e?t.HALF_FLOAT:(B=A.get("OES_texture_half_float"),B!==null?B.HALF_FLOAT_OES:null);if(C===ml)return t.ALPHA;if(C===Lt)return t.RGBA;if(C===Kl)return t.LUMINANCE;if(C===Jl)return t.LUMINANCE_ALPHA;if(C===nI)return t.DEPTH_COMPONENT;if(C===EC)return t.DEPTH_STENCIL;if(C===Cn)return B=A.get("EXT_sRGB"),B!==null?B.SRGB_ALPHA_EXT:null;if(C===Hl)return t.RED;if(C===Yr)return t.RED_INTEGER;if(C===vl)return t.RG;if(C===br)return t.RG_INTEGER;if(C===Tr)return t.RGBA_INTEGER;if(C===AQ||C===gQ||C===tQ||C===eQ)if(Q===Ng)if(B=A.get("WEBGL_compressed_texture_s3tc_srgb"),B!==null){if(C===AQ)return B.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(C===gQ)return B.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(C===tQ)return B.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(C===eQ)return B.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(B=A.get("WEBGL_compressed_texture_s3tc"),B!==null){if(C===AQ)return B.COMPRESSED_RGB_S3TC_DXT1_EXT;if(C===gQ)return B.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(C===tQ)return B.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(C===eQ)return B.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(C===bE||C===TE||C===_E||C===qE)if(B=A.get("WEBGL_compressed_texture_pvrtc"),B!==null){if(C===bE)return B.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(C===TE)return B.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(C===_E)return B.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(C===qE)return B.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(C===_r)return B=A.get("WEBGL_compressed_texture_etc1"),B!==null?B.COMPRESSED_RGB_ETC1_WEBGL:null;if(C===PE||C===OE)if(B=A.get("WEBGL_compressed_texture_etc"),B!==null){if(C===PE)return Q===Ng?B.COMPRESSED_SRGB8_ETC2:B.COMPRESSED_RGB8_ETC2;if(C===OE)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:B.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(C===VE||C===WE||C===zE||C===ZE||C===XE||C===jE||C===$E||C===Ao||C===go||C===to||C===eo||C===Io||C===Co||C===io)if(B=A.get("WEBGL_compressed_texture_astc"),B!==null){if(C===VE)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:B.COMPRESSED_RGBA_ASTC_4x4_KHR;if(C===WE)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:B.COMPRESSED_RGBA_ASTC_5x4_KHR;if(C===zE)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:B.COMPRESSED_RGBA_ASTC_5x5_KHR;if(C===ZE)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:B.COMPRESSED_RGBA_ASTC_6x5_KHR;if(C===XE)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:B.COMPRESSED_RGBA_ASTC_6x6_KHR;if(C===jE)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:B.COMPRESSED_RGBA_ASTC_8x5_KHR;if(C===$E)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:B.COMPRESSED_RGBA_ASTC_8x6_KHR;if(C===Ao)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:B.COMPRESSED_RGBA_ASTC_8x8_KHR;if(C===go)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:B.COMPRESSED_RGBA_ASTC_10x5_KHR;if(C===to)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:B.COMPRESSED_RGBA_ASTC_10x6_KHR;if(C===eo)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:B.COMPRESSED_RGBA_ASTC_10x8_KHR;if(C===Io)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:B.COMPRESSED_RGBA_ASTC_10x10_KHR;if(C===Co)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:B.COMPRESSED_RGBA_ASTC_12x10_KHR;if(C===io)return Q===Ng?B.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:B.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(C===IQ||C===Bo||C===Qo)if(B=A.get("EXT_texture_compression_bptc"),B!==null){if(C===IQ)return Q===Ng?B.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:B.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(C===Bo)return B.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(C===Qo)return B.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(C===xl||C===no||C===Eo||C===oo)if(B=A.get("EXT_texture_compression_rgtc"),B!==null){if(C===IQ)return B.COMPRESSED_RED_RGTC1_EXT;if(C===no)return B.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(C===Eo)return B.COMPRESSED_RED_GREEN_RGTC2_EXT;if(C===oo)return B.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return C===QI?e?t.UNSIGNED_INT_24_8:(B=A.get("WEBGL_depth_texture"),B!==null?B.UNSIGNED_INT_24_8_WEBGL:null):t[C]!==void 0?t[C]:null}return{convert:I}}class r0 extends ot{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class De extends zg{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a0={type:"move"};class LQ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const g=this._hand;if(g)for(const e of A.hand.values())this._getHandJoint(g,e)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,g,e){let I=null,C=null,i=null;const B=this._targetRay,Q=this._grip,n=this._hand;if(A&&g.session.visibilityState!=="visible-blurred"){if(n&&A.hand){i=!0;for(const d of A.hand.values()){const a=g.getJointPose(d,e),c=this._getHandJoint(n,d);a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=a.radius),c.visible=a!==null}const E=n.joints["index-finger-tip"],o=n.joints["thumb-tip"],s=E.position.distanceTo(o.position),r=.02,h=.005;n.inputState.pinching&&s>r+h?(n.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!n.inputState.pinching&&s<=r-h&&(n.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else Q!==null&&A.gripSpace&&(C=g.getPose(A.gripSpace,e),C!==null&&(Q.matrix.fromArray(C.transform.matrix),Q.matrix.decompose(Q.position,Q.rotation,Q.scale),Q.matrixWorldNeedsUpdate=!0,C.linearVelocity?(Q.hasLinearVelocity=!0,Q.linearVelocity.copy(C.linearVelocity)):Q.hasLinearVelocity=!1,C.angularVelocity?(Q.hasAngularVelocity=!0,Q.angularVelocity.copy(C.angularVelocity)):Q.hasAngularVelocity=!1));B!==null&&(I=g.getPose(A.targetRaySpace,e),I===null&&C!==null&&(I=C),I!==null&&(B.matrix.fromArray(I.transform.matrix),B.matrix.decompose(B.position,B.rotation,B.scale),B.matrixWorldNeedsUpdate=!0,I.linearVelocity?(B.hasLinearVelocity=!0,B.linearVelocity.copy(I.linearVelocity)):B.hasLinearVelocity=!1,I.angularVelocity?(B.hasAngularVelocity=!0,B.angularVelocity.copy(I.angularVelocity)):B.hasAngularVelocity=!1,this.dispatchEvent(a0)))}return B!==null&&(B.visible=I!==null),Q!==null&&(Q.visible=C!==null),n!==null&&(n.visible=i!==null),this}_getHandJoint(A,g){if(A.joints[g.jointName]===void 0){const e=new De;e.matrixAutoUpdate=!1,e.visible=!1,A.joints[g.jointName]=e,A.add(e)}return A.joints[g.jointName]}}const c0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

`+q.replace(/^Error(:[^\n]*)?\n/,""))});return w.prototype=Object.create(l.prototype),w.prototype.constructor=w,w.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},w}var Cg=void 0;function MA(l){throw new Cg(l)}var mg=void 0;function Xg(l){throw new mg(l)}function ig(l,D,w){l.forEach(function(Z){ag[Z]=D});function k(Z){var rA=w(Z);rA.length!==l.length&&Xg("Mismatched type converter count");for(var tA=0;tA<l.length;++tA)Mg(l[tA],rA[tA])}var q=new Array(D.length),AA=[],gA=0;D.forEach((Z,rA)=>{OA.hasOwnProperty(Z)?q[rA]=OA[Z]:(AA.push(Z),rg.hasOwnProperty(Z)||(rg[Z]=[]),rg[Z].push(()=>{q[rA]=OA[Z],++gA,gA===AA.length&&k(q)}))}),AA.length===0&&k(q)}function Mg(l,D,w={}){if(!("argPackAdvance"in D))throw new TypeError("registerType registeredInstance requires argPackAdvance");var k=D.name;if(l||MA(`type "${k}" must have a positive integer typeid pointer`),OA.hasOwnProperty(l)){if(w.ignoreDuplicateRegistrations)return;MA(`Cannot register type '${k}' twice`)}if(OA[l]=D,delete ag[l],rg.hasOwnProperty(l)){var q=rg[l];delete rg[l],q.forEach(AA=>AA())}}function ft(l,D,w,k,q){var AA=kA(w);D=_A(D),Mg(l,{name:D,fromWireType:function(gA){return!!gA},toWireType:function(gA,Z){return Z?k:q},argPackAdvance:8,readValueFromPointer:function(gA){var Z;if(w===1)Z=BA;else if(w===2)Z=N;else if(w===4)Z=IA;else throw new TypeError("Unknown boolean type size: "+D);return this.fromWireType(Z[gA>>AA])},destructorFunction:null})}function ci(l){if(!(this instanceof TA)||!(l instanceof TA))return!1;for(var D=this.$$.ptrType.registeredClass,w=this.$$.ptr,k=l.$$.ptrType.registeredClass,q=l.$$.ptr;D.baseClass;)w=D.upcast(w),D=D.baseClass;for(;k.baseClass;)q=k.upcast(q),k=k.baseClass;return D===k&&w===q}function _B(l){return{count:l.count,deleteScheduled:l.deleteScheduled,preservePointerOnDelete:l.preservePointerOnDelete,ptr:l.ptr,ptrType:l.ptrType,smartPtr:l.smartPtr,smartPtrType:l.smartPtrType}}function Me(l){function D(w){return w.$$.ptrType.registeredClass.name}MA(D(l)+" instance already deleted")}var RI=!1;function Oe(l){}function hi(l){l.smartPtr?l.smartPtrType.rawDestructor(l.smartPtr):l.ptrType.registeredClass.rawDestructor(l.ptr)}function RC(l){l.count.value-=1;var D=l.count.value===0;D&&hi(l)}function li(l,D,w){if(D===w)return l;if(w.baseClass===void 0)return null;var k=li(l,D,w.baseClass);return k===null?null:w.downcast(k)}var Di={};function qB(){return Object.keys(LA).length}function p(){var l=[];for(var D in LA)LA.hasOwnProperty(D)&&l.push(LA[D]);return l}var H=[];function T(){for(;H.length;){var l=H.pop();l.$$.deleteScheduled=!1,l.delete()}}var P=void 0;function _(l){P=l,H.length&&P&&P(T)}function DA(){C.getInheritedInstanceCount=qB,C.getLiveInheritedInstances=p,C.flushPendingDeletes=T,C.setDelayFunction=_}var LA={};function vA(l,D){for(D===void 0&&MA("ptr should not be undefined");l.baseClass;)D=l.upcast(D),l=l.baseClass;return D}function YA(l,D){return D=vA(l,D),LA[D]}function VA(l,D){(!D.ptrType||!D.ptr)&&Xg("makeClassHandle requires ptr and ptrType");var w=!!D.smartPtrType,k=!!D.smartPtr;return w!==k&&Xg("Both smartPtrType and smartPtr must be specified"),D.count={value:1},bA(Object.create(l,{$$:{value:D}}))}function WA(l){var D=this.getPointee(l);if(!D)return this.destructor(l),null;var w=YA(this.registeredClass,D);if(w!==void 0){if(w.$$.count.value===0)return w.$$.ptr=D,w.$$.smartPtr=l,w.clone();var k=w.clone();return this.destructor(l),k}function q(){return this.isSmartPointer?VA(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:D,smartPtrType:this,smartPtr:l}):VA(this.registeredClass.instancePrototype,{ptrType:this,ptr:l})}var AA=this.registeredClass.getActualType(D),gA=Di[AA];if(!gA)return q.call(this);var Z;this.isConst?Z=gA.constPointerType:Z=gA.pointerType;var rA=li(D,this.registeredClass,Z.registeredClass);return rA===null?q.call(this):this.isSmartPointer?VA(Z.registeredClass.instancePrototype,{ptrType:Z,ptr:rA,smartPtrType:this,smartPtr:l}):VA(Z.registeredClass.instancePrototype,{ptrType:Z,ptr:rA})}function bA(l){return typeof FinalizationRegistry>"u"?(bA=D=>D,l):(RI=new FinalizationRegistry(D=>{RC(D.$$)}),bA=D=>{var w=D.$$,k=!!w.smartPtr;if(k){var q={$$:w};RI.register(D,q,D)}return D},Oe=D=>RI.unregister(D),bA(l))}function kg(){if(this.$$.ptr||Me(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var l=bA(Object.create(Object.getPrototypeOf(this),{$$:{value:_B(this.$$)}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l}function Ct(){this.$$.ptr||Me(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&MA("Object already scheduled for deletion"),Oe(this),RC(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Kg(){return!this.$$.ptr}function Gt(){return this.$$.ptr||Me(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&MA("Object already scheduled for deletion"),H.push(this),H.length===1&&P&&P(T),this.$$.deleteScheduled=!0,this}function Rg(){TA.prototype.isAliasOf=ci,TA.prototype.clone=kg,TA.prototype.delete=Ct,TA.prototype.isDeleted=Kg,TA.prototype.deleteLater=Gt}function TA(){}function LI(l,D,w){if(l[D].overloadTable===void 0){var k=l[D];l[D]=function(){return l[D].overloadTable.hasOwnProperty(arguments.length)||MA(`Function '${w}' called with an invalid number of arguments (${arguments.length}) - expects one of (${l[D].overloadTable})!`),l[D].overloadTable[arguments.length].apply(this,arguments)},l[D].overloadTable=[],l[D].overloadTable[k.argCount]=k}}function Lg(l,D,w){C.hasOwnProperty(l)?((w===void 0||C[l].overloadTable!==void 0&&C[l].overloadTable[w]!==void 0)&&MA(`Cannot register public name '${l}' twice`),LI(C,l,l),C.hasOwnProperty(w)&&MA(`Cannot register multiple overloads of a function with the same number of arguments (${w})!`),C[l].overloadTable[w]=D):(C[l]=D,w!==void 0&&(C[l].numArguments=w))}function ee(l,D,w,k,q,AA,gA,Z){this.name=l,this.constructor=D,this.instancePrototype=w,this.rawDestructor=k,this.baseClass=q,this.getActualType=AA,this.upcast=gA,this.downcast=Z,this.pureVirtualFunctions=[]}function Ve(l,D,w){for(;D!==w;)D.upcast||MA(`Expected null or instance of ${w.name}, got an instance of ${D.name}`),l=D.upcast(l),D=D.baseClass;return l}function We(l,D){if(D===null)return this.isReference&&MA(`null is not a valid ${this.name}`),0;D.$$||MA(`Cannot pass "${ZB(D)}" as a ${this.name}`),D.$$.ptr||MA(`Cannot pass deleted object as a pointer of type ${this.name}`);var w=D.$$.ptrType.registeredClass,k=Ve(D.$$.ptr,w,this.registeredClass);return k}function LC(l,D){var w;if(D===null)return this.isReference&&MA(`null is not a valid ${this.name}`),this.isSmartPointer?(w=this.rawConstructor(),l!==null&&l.push(this.rawDestructor,w),w):0;D.$$||MA(`Cannot pass "${ZB(D)}" as a ${this.name}`),D.$$.ptr||MA(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&D.$$.ptrType.isConst&&MA(`Cannot convert argument of type ${D.$$.smartPtrType?D.$$.smartPtrType.name:D.$$.ptrType.name} to parameter type ${this.name}`);var k=D.$$.ptrType.registeredClass;if(w=Ve(D.$$.ptr,k,this.registeredClass),this.isSmartPointer)switch(D.$$.smartPtr===void 0&&MA("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:D.$$.smartPtrType===this?w=D.$$.smartPtr:MA(`Cannot convert argument of type ${D.$$.smartPtrType?D.$$.smartPtrType.name:D.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:w=D.$$.smartPtr;break;case 2:if(D.$$.smartPtrType===this)w=D.$$.smartPtr;else{var q=D.clone();w=this.rawShare(w,Gg.toHandle(function(){q.delete()})),l!==null&&l.push(this.rawDestructor,w)}break;default:MA("Unsupporting sharing policy")}return w}function _g(l,D){if(D===null)return this.isReference&&MA(`null is not a valid ${this.name}`),0;D.$$||MA(`Cannot pass "${ZB(D)}" as a ${this.name}`),D.$$.ptr||MA(`Cannot pass deleted object as a pointer of type ${this.name}`),D.$$.ptrType.isConst&&MA(`Cannot convert argument of type ${D.$$.ptrType.name} to parameter type ${this.name}`);var w=D.$$.ptrType.registeredClass,k=Ve(D.$$.ptr,w,this.registeredClass);return k}function ut(l){return this.fromWireType(IA[l>>2])}function FC(l){return this.rawGetPointee&&(l=this.rawGetPointee(l)),l}function nt(l){this.rawDestructor&&this.rawDestructor(l)}function NC(l){l!==null&&l.delete()}function PB(){wt.prototype.getPointee=FC,wt.prototype.destructor=nt,wt.prototype.argPackAdvance=8,wt.prototype.readValueFromPointer=ut,wt.prototype.deleteObject=NC,wt.prototype.fromWireType=WA}function wt(l,D,w,k,q,AA,gA,Z,rA,tA,UA){this.name=l,this.registeredClass=D,this.isReference=w,this.isConst=k,this.isSmartPointer=q,this.pointeeType=AA,this.sharingPolicy=gA,this.rawGetPointee=Z,this.rawConstructor=rA,this.rawShare=tA,this.rawDestructor=UA,!q&&D.baseClass===void 0?k?(this.toWireType=We,this.destructorFunction=null):(this.toWireType=_g,this.destructorFunction=null):this.toWireType=LC}function DE(l,D,w){C.hasOwnProperty(l)||Xg("Replacing nonexistant public symbol"),C[l].overloadTable!==void 0&&w!==void 0?C[l].overloadTable[w]=D:(C[l]=D,C[l].argCount=w)}function Pc(l,D,w){var k=C["dynCall_"+l];return w&&w.length?k.apply(null,[D].concat(w)):k.call(null,D)}function dE(l){return O.get(l)}function Oc(l,D,w){if(l.includes("j"))return Pc(l,D,w);var k=dE(D).apply(null,w);return k}function Vc(l,D){var w=[];return function(){return w.length=0,Object.assign(w,arguments),Oc(l,D,w)}}function Ie(l,D){l=_A(l);function w(){return l.includes("j")?Vc(l,D):dE(D)}var k=w();return typeof k!="function"&&MA(`unknown function pointer with signature ${l}: ${D}`),k}var fE=void 0;function uE(l){var D=LE(l),w=_A(D);return Ce(D),w}function FI(l,D){var w=[],k={};function q(AA){if(!k[AA]&&!OA[AA]){if(ag[AA]){ag[AA].forEach(q);return}w.push(AA),k[AA]=!0}}throw D.forEach(q),new fE(`${l}: `+w.map(uE).join([", "]))}function Wc(l,D,w,k,q,AA,gA,Z,rA,tA,UA,ZA,eg){UA=_A(UA),AA=Ie(q,AA),Z&&(Z=Ie(gA,Z)),tA&&(tA=Ie(rA,tA)),eg=Ie(ZA,eg);var cg=oA(UA);Lg(cg,function(){FI(`Cannot construct ${UA} due to unbound types`,[k])}),ig([l,D,w],k?[k]:[],function(Hg){Hg=Hg[0];var it,At;k?(it=Hg.registeredClass,At=it.instancePrototype):At=TA.prototype;var pt=RA(cg,function(){if(Object.getPrototypeOf(this)!==UC)throw new Cg("Use 'new' to construct "+UA);if(Et.constructor_body===void 0)throw new Cg(UA+" has no accessible constructor");var GE=Et.constructor_body[arguments.length];if(GE===void 0)throw new Cg(`Tried to invoke ctor of ${UA} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(Et.constructor_body).toString()}) parameters instead!`);return GE.apply(this,arguments)}),UC=Object.create(At,{constructor:{value:pt}});pt.prototype=UC;var Et=new ee(UA,pt,UC,eg,it,AA,Z,tA);Et.baseClass&&(Et.baseClass.__derivedClasses===void 0&&(Et.baseClass.__derivedClasses=[]),Et.baseClass.__derivedClasses.push(Et));var Zh=new wt(UA,Et,!0,!1,!1),UE=new wt(UA+"*",Et,!1,!1,!1),kE=new wt(UA+" const*",Et,!1,!0,!1);return Di[l]={pointerType:UE,constPointerType:kE},DE(cg,pt),[Zh,UE,kE]})}function OB(l,D){for(var w=[],k=0;k<l;k++)w.push(m[D+k*4>>2]);return w}function VB(l){for(;l.length;){var D=l.pop(),w=l.pop();w(D)}}function wE(l,D){if(!(l instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof l} which is not a function`);var w=RA(l.name||"unknownFunctionName",function(){});w.prototype=l.prototype;var k=new w,q=l.apply(k,D);return q instanceof Object?q:k}function WB(l,D,w,k,q,AA){var gA=D.length;gA<2&&MA("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Z=D[1]!==null&&w!==null,rA=!1,tA=1;tA<D.length;++tA)if(D[tA]!==null&&D[tA].destructorFunction===void 0){rA=!0;break}for(var UA=D[0].name!=="void",ZA="",eg="",tA=0;tA<gA-2;++tA)ZA+=(tA!==0?", ":"")+"arg"+tA,eg+=(tA!==0?", ":"")+"arg"+tA+"Wired";var cg=`
        return function ${oA(l)}(${ZA}) {
        if (arguments.length !== ${gA-2}) {
          throwBindingError('function ${l} called with ${arguments.length} arguments, expected ${gA-2} args!');
        }`;rA&&(cg+=`var destructors = [];
`);var Hg=rA?"destructors":"null",it=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],At=[MA,k,q,VB,D[0],D[1]];Z&&(cg+="var thisWired = classParam.toWireType("+Hg+`, this);
`);for(var tA=0;tA<gA-2;++tA)cg+="var arg"+tA+"Wired = argType"+tA+".toWireType("+Hg+", arg"+tA+"); // "+D[tA+2].name+`
`,it.push("argType"+tA),At.push(D[tA+2]);if(Z&&(eg="thisWired"+(eg.length>0?", ":"")+eg),cg+=(UA||AA?"var rv = ":"")+"invoker(fn"+(eg.length>0?", ":"")+eg+`);
`,rA)cg+=`runDestructors(destructors);
`;else for(var tA=Z?1:2;tA<D.length;++tA){var pt=tA===1?"thisWired":"arg"+(tA-2)+"Wired";D[tA].destructorFunction!==null&&(cg+=pt+"_dtor("+pt+"); // "+D[tA].name+`
`,it.push(pt+"_dtor"),At.push(D[tA].destructorFunction))}return UA&&(cg+=`var ret = retType.fromWireType(rv);
return ret;
`),cg+=`}
`,it.push(cg),wE(Function,it).apply(null,At)}function zc(l,D,w,k,q,AA){W(D>0);var gA=OB(D,w);q=Ie(k,q),ig([],[l],function(Z){Z=Z[0];var rA=`constructor ${Z.name}`;if(Z.registeredClass.constructor_body===void 0&&(Z.registeredClass.constructor_body=[]),Z.registeredClass.constructor_body[D-1]!==void 0)throw new Cg(`Cannot register multiple constructors with identical number of parameters (${D-1}) for class '${Z.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Z.registeredClass.constructor_body[D-1]=()=>{FI(`Cannot construct ${Z.name} due to unbound types`,gA)},ig([],gA,function(tA){return tA.splice(1,0,null),Z.registeredClass.constructor_body[D-1]=WB(rA,tA,null,q,AA),[]}),[]})}function Zc(l,D,w,k,q,AA,gA,Z,rA){var tA=OB(w,k);D=_A(D),AA=Ie(q,AA),ig([],[l],function(UA){UA=UA[0];var ZA=`${UA.name}.${D}`;D.startsWith("@@")&&(D=Symbol[D.substring(2)]),Z&&UA.registeredClass.pureVirtualFunctions.push(D);function eg(){FI(`Cannot call ${ZA} due to unbound types`,tA)}var cg=UA.registeredClass.instancePrototype,Hg=cg[D];return Hg===void 0||Hg.overloadTable===void 0&&Hg.className!==UA.name&&Hg.argCount===w-2?(eg.argCount=w-2,eg.className=UA.name,cg[D]=eg):(LI(cg,D,ZA),cg[D].overloadTable[w-2]=eg),ig([],tA,function(it){var At=WB(ZA,it,UA,AA,gA,rA);return cg[D].overloadTable===void 0?(At.argCount=w-2,cg[D]=At):cg[D].overloadTable[w-2]=At,[]}),[]})}function yE(l,D,w){return l instanceof Object||MA(`${w} with invalid "this": ${l}`),l instanceof D.registeredClass.constructor||MA(`${w} incompatible with "this" of type ${l.constructor.name}`),l.$$.ptr||MA(`cannot call emscripten binding method ${w} on deleted object`),Ve(l.$$.ptr,l.$$.ptrType.registeredClass,D.registeredClass)}function Xc(l,D,w,k,q,AA,gA,Z,rA,tA){D=_A(D),q=Ie(k,q),ig([],[l],function(UA){UA=UA[0];var ZA=`${UA.name}.${D}`,eg={get:function(){FI(`Cannot access ${ZA} due to unbound types`,[w,gA])},enumerable:!0,configurable:!0};return rA?eg.set=()=>{FI(`Cannot access ${ZA} due to unbound types`,[w,gA])}:eg.set=cg=>{MA(ZA+" is a read-only property")},Object.defineProperty(UA.registeredClass.instancePrototype,D,eg),ig([],rA?[w,gA]:[w],function(cg){var Hg=cg[0],it={get:function(){var pt=yE(this,UA,ZA+" getter");return Hg.fromWireType(q(AA,pt))},enumerable:!0};if(rA){rA=Ie(Z,rA);var At=cg[1];it.set=function(pt){var UC=yE(this,UA,ZA+" setter"),Et=[];rA(tA,UC,At.toWireType(Et,pt)),VB(Et)}}return Object.defineProperty(UA.registeredClass.instancePrototype,D,it),[]}),[]})}function jc(l,D,w){l=_A(l),ig([],[D],function(k){return k=k[0],C[l]=k.fromWireType(w),[]})}function $c(){this.allocated=[void 0],this.freelist=[],this.get=function(l){return this.allocated[l]},this.has=function(l){return this.allocated[l]!==void 0},this.allocate=function(l){var D=this.freelist.pop()||this.allocated.length;return this.allocated[D]=l,D},this.free=function(l){this.allocated[l]=void 0,this.freelist.push(l)}}var yt=new $c;function zB(l){l>=yt.reserved&&--yt.get(l).refcount===0&&yt.free(l)}function Ah(){for(var l=0,D=yt.reserved;D<yt.allocated.length;++D)yt.allocated[D]!==void 0&&++l;return l}function gh(){yt.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),yt.reserved=yt.allocated.length,C.count_emval_handles=Ah}var Gg={toValue:l=>(l||MA("Cannot use deleted val. handle = "+l),yt.get(l).value),toHandle:l=>{switch(l){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return yt.allocate({refcount:1,value:l})}}};function th(l,D){D=_A(D),Mg(l,{name:D,fromWireType:function(w){var k=Gg.toValue(w);return zB(w),k},toWireType:function(w,k){return Gg.toHandle(k)},argPackAdvance:8,readValueFromPointer:ut,destructorFunction:null})}function ZB(l){if(l===null)return"null";var D=typeof l;return D==="object"||D==="array"||D==="function"?l.toString():""+l}function eh(l,D){switch(D){case 2:return function(w){return this.fromWireType(V[w>>2])};case 3:return function(w){return this.fromWireType(x[w>>3])};default:throw new TypeError("Unknown float type: "+l)}}function Ih(l,D,w){var k=kA(w);D=_A(D),Mg(l,{name:D,fromWireType:function(q){return q},toWireType:function(q,AA){return AA},argPackAdvance:8,readValueFromPointer:eh(D,k),destructorFunction:null})}function Ch(l,D,w,k,q,AA,gA){var Z=OB(D,w);l=_A(l),q=Ie(k,q),Lg(l,function(){FI(`Cannot call ${l} due to unbound types`,Z)},D-1),ig([],Z,function(rA){var tA=[rA[0],null].concat(rA.slice(1));return DE(l,WB(l,tA,null,q,AA,gA),D-1),[]})}function ih(l,D,w){switch(D){case 0:return w?function(q){return BA[q]}:function(q){return f[q]};case 1:return w?function(q){return N[q>>1]}:function(q){return j[q>>1]};case 2:return w?function(q){return IA[q>>2]}:function(q){return m[q>>2]};default:throw new TypeError("Unknown integer type: "+l)}}function Bh(l,D,w,k,q){D=_A(D);var AA=kA(w),gA=ZA=>ZA;if(k===0){var Z=32-8*w;gA=ZA=>ZA<<Z>>>Z}var rA=D.includes("unsigned"),tA=(ZA,eg)=>{},UA;rA?UA=function(ZA,eg){return tA(eg,this.name),eg>>>0}:UA=function(ZA,eg){return tA(eg,this.name),eg},Mg(l,{name:D,fromWireType:gA,toWireType:UA,argPackAdvance:8,readValueFromPointer:ih(D,AA,k!==0),destructorFunction:null})}function Qh(l,D,w){var k=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],q=k[D];function AA(gA){gA=gA>>2;var Z=m,rA=Z[gA],tA=Z[gA+1];return new q(Z.buffer,tA,rA)}w=_A(w),Mg(l,{name:w,fromWireType:AA,argPackAdvance:8,readValueFromPointer:AA},{ignoreDuplicateRegistrations:!0})}function nh(l,D,w,k){if(!(k>0))return 0;for(var q=w,AA=w+k-1,gA=0;gA<l.length;++gA){var Z=l.charCodeAt(gA);if(Z>=55296&&Z<=57343){var rA=l.charCodeAt(++gA);Z=65536+((Z&1023)<<10)|rA&1023}if(Z<=127){if(w>=AA)break;D[w++]=Z}else if(Z<=2047){if(w+1>=AA)break;D[w++]=192|Z>>6,D[w++]=128|Z&63}else if(Z<=65535){if(w+2>=AA)break;D[w++]=224|Z>>12,D[w++]=128|Z>>6&63,D[w++]=128|Z&63}else{if(w+3>=AA)break;D[w++]=240|Z>>18,D[w++]=128|Z>>12&63,D[w++]=128|Z>>6&63,D[w++]=128|Z&63}}return D[w]=0,w-q}function Eh(l,D,w){return nh(l,f,D,w)}function oh(l){for(var D=0,w=0;w<l.length;++w){var k=l.charCodeAt(w);k<=127?D++:k<=2047?D+=2:k>=55296&&k<=57343?(D+=4,++w):D+=3}return D}function sh(l,D){D=_A(D);var w=D==="std::string";Mg(l,{name:D,fromWireType:function(k){var q=m[k>>2],AA=k+4,gA;if(w)for(var Z=AA,rA=0;rA<=q;++rA){var tA=AA+rA;if(rA==q||f[tA]==0){var UA=tA-Z,ZA=XA(Z,UA);gA===void 0?gA=ZA:(gA+=String.fromCharCode(0),gA+=ZA),Z=tA+1}}else{for(var eg=new Array(q),rA=0;rA<q;++rA)eg[rA]=String.fromCharCode(f[AA+rA]);gA=eg.join("")}return Ce(k),gA},toWireType:function(k,q){q instanceof ArrayBuffer&&(q=new Uint8Array(q));var AA,gA=typeof q=="string";gA||q instanceof Uint8Array||q instanceof Uint8ClampedArray||q instanceof Int8Array||MA("Cannot pass non-string to std::string"),w&&gA?AA=oh(q):AA=q.length;var Z=$B(4+AA+1),rA=Z+4;if(m[Z>>2]=AA,w&&gA)Eh(q,rA,AA+1);else if(gA)for(var tA=0;tA<AA;++tA){var UA=q.charCodeAt(tA);UA>255&&(Ce(rA),MA("String has UTF-16 code units that do not fit in 8 bits")),f[rA+tA]=UA}else for(var tA=0;tA<AA;++tA)f[rA+tA]=q[tA];return k!==null&&k.push(Ce,Z),Z},argPackAdvance:8,readValueFromPointer:ut,destructorFunction:function(k){Ce(k)}})}var pE=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function rh(l,D){for(var w=l,k=w>>1,q=k+D/2;!(k>=q)&&j[k];)++k;if(w=k<<1,w-l>32&&pE)return pE.decode(f.subarray(l,w));for(var AA="",gA=0;!(gA>=D/2);++gA){var Z=N[l+gA*2>>1];if(Z==0)break;AA+=String.fromCharCode(Z)}return AA}function ah(l,D,w){if(w===void 0&&(w=2147483647),w<2)return 0;w-=2;for(var k=D,q=w<l.length*2?w/2:l.length,AA=0;AA<q;++AA){var gA=l.charCodeAt(AA);N[D>>1]=gA,D+=2}return N[D>>1]=0,D-k}function ch(l){return l.length*2}function hh(l,D){for(var w=0,k="";!(w>=D/4);){var q=IA[l+w*4>>2];if(q==0)break;if(++w,q>=65536){var AA=q-65536;k+=String.fromCharCode(55296|AA>>10,56320|AA&1023)}else k+=String.fromCharCode(q)}return k}function lh(l,D,w){if(w===void 0&&(w=2147483647),w<4)return 0;for(var k=D,q=k+w-4,AA=0;AA<l.length;++AA){var gA=l.charCodeAt(AA);if(gA>=55296&&gA<=57343){var Z=l.charCodeAt(++AA);gA=65536+((gA&1023)<<10)|Z&1023}if(IA[D>>2]=gA,D+=4,D+4>q)break}return IA[D>>2]=0,D-k}function Dh(l){for(var D=0,w=0;w<l.length;++w){var k=l.charCodeAt(w);k>=55296&&k<=57343&&++w,D+=4}return D}function dh(l,D,w){w=_A(w);var k,q,AA,gA,Z;D===2?(k=rh,q=ah,gA=ch,AA=()=>j,Z=1):D===4&&(k=hh,q=lh,gA=Dh,AA=()=>m,Z=2),Mg(l,{name:w,fromWireType:function(rA){for(var tA=m[rA>>2],UA=AA(),ZA,eg=rA+4,cg=0;cg<=tA;++cg){var Hg=rA+4+cg*D;if(cg==tA||UA[Hg>>Z]==0){var it=Hg-eg,At=k(eg,it);ZA===void 0?ZA=At:(ZA+=String.fromCharCode(0),ZA+=At),eg=Hg+D}}return Ce(rA),ZA},toWireType:function(rA,tA){typeof tA!="string"&&MA(`Cannot pass non-string to C++ string type ${w}`);var UA=gA(tA),ZA=$B(4+UA+D);return m[ZA>>2]=UA>>Z,q(tA,ZA+4,UA+D),rA!==null&&rA.push(Ce,ZA),ZA},argPackAdvance:8,readValueFromPointer:ut,destructorFunction:function(rA){Ce(rA)}})}function fh(l,D){D=_A(D),Mg(l,{isVoid:!0,name:D,argPackAdvance:0,fromWireType:function(){},toWireType:function(w,k){}})}function XB(l,D){var w=OA[l];return w===void 0&&MA(D+" has unknown type "+uE(l)),w}function uh(l,D,w){l=Gg.toValue(l),D=XB(D,"emval::as");var k=[],q=Gg.toHandle(k);return m[w>>2]=q,D.toWireType(k,l)}function SE(l,D){for(var w=new Array(l),k=0;k<l;++k)w[k]=XB(m[D+k*4>>2],"parameter "+k);return w}function wh(l,D,w,k){l=Gg.toValue(l);for(var q=SE(D,w),AA=new Array(D),gA=0;gA<D;++gA){var Z=q[gA];AA[gA]=Z.readValueFromPointer(k),k+=Z.argPackAdvance}var rA=l.apply(void 0,AA);return Gg.toHandle(rA)}var yh={};function ME(l){var D=yh[l];return D===void 0?_A(l):D}var jB=[];function ph(l,D,w,k){l=jB[l],D=Gg.toValue(D),w=ME(w),l(D,w,null,k)}function Sh(l){var D=jB.length;return jB.push(l),D}var RE=[];function Mh(l,D){var w=SE(l,D),k=w[0],q=k.name+"_$"+w.slice(1).map(function(Hg){return Hg.name}).join("_")+"$",AA=RE[q];if(AA!==void 0)return AA;for(var gA=["retType"],Z=[k],rA="",tA=0;tA<l-1;++tA)rA+=(tA!==0?", ":"")+"arg"+tA,gA.push("argType"+tA),Z.push(w[1+tA]);for(var UA=oA("methodCaller_"+q),ZA="return function "+UA+`(handle, name, destructors, args) {
`,eg=0,tA=0;tA<l-1;++tA)ZA+="    var arg"+tA+" = argType"+tA+".readValueFromPointer(args"+(eg?"+"+eg:"")+`);
`,eg+=w[tA+1].argPackAdvance;ZA+="    var rv = handle[name]("+rA+`);
`;for(var tA=0;tA<l-1;++tA)w[tA+1].deleteObject&&(ZA+="    argType"+tA+".deleteObject(arg"+tA+`);
`);k.isVoid||(ZA+=`    return retType.toWireType(destructors, rv);
`),ZA+=`};
`,gA.push(ZA);var cg=wE(Function,gA).apply(null,Z);return AA=Sh(cg),RE[q]=AA,AA}function Rh(l,D){return l=Gg.toValue(l),D=Gg.toValue(D),Gg.toHandle(l[D])}function Lh(l){l>4&&(yt.get(l).refcount+=1)}function Fh(){return Gg.toHandle([])}function Nh(l){return Gg.toHandle(ME(l))}function Uh(){return Gg.toHandle({})}function kh(l){var D=Gg.toValue(l);VB(D),zB(l)}function Gh(l,D,w){l=Gg.toValue(l),D=Gg.toValue(D),w=Gg.toValue(w),l[D]=w}function mh(l,D){return l=Gg.toValue(l),D=Gg.toValue(D),l===D}function Kh(l,D){l=XB(l,"_emval_take_value");var w=l.readValueFromPointer(D);return Gg.toHandle(w)}function Jh(l){return l=Gg.toValue(l),Gg.toHandle(typeof l)}function Hh(){v("")}function vh(l,D,w){f.copyWithin(l,D,D+w)}function xh(l){v("OOM")}function Yh(l){f.length,xh()}function bh(l){return 52}function Th(l,D,w,k){return 52}function _h(l,D,w,k,q){return 70}var qh=[null,[],[]];function Ph(l,D){var w=qh[l];D===0||D===10?((l===1?y:M)(HA(w,0)),w.length=0):w.push(D)}function Oh(l,D,w,k){for(var q=0,AA=0;AA<w;AA++){var gA=m[D>>2],Z=m[D+4>>2];D+=8;for(var rA=0;rA<Z;rA++)Ph(l,f[gA+rA]);q+=Z}return m[k>>2]=q,0}SA(),Cg=C.BindingError=mA(Error,"BindingError"),mg=C.InternalError=mA(Error,"InternalError"),Rg(),DA(),PB(),fE=C.UnboundTypeError=mA(Error,"UnboundTypeError"),gh();var Vh=typeof atob=="function"?atob:function(l){var D="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",w="",k,q,AA,gA,Z,rA,tA,UA=0;l=l.replace(/[^A-Za-z0-9\+\/\=]/g,"");do gA=D.indexOf(l.charAt(UA++)),Z=D.indexOf(l.charAt(UA++)),rA=D.indexOf(l.charAt(UA++)),tA=D.indexOf(l.charAt(UA++)),k=gA<<2|Z>>4,q=(Z&15)<<4|rA>>2,AA=(rA&3)<<6|tA,w=w+String.fromCharCode(k),rA!==64&&(w=w+String.fromCharCode(q)),tA!==64&&(w=w+String.fromCharCode(AA));while(UA<l.length);return w};function Wh(l){if(typeof o=="boolean"&&o){var D=Buffer.from(l,"base64");return new Uint8Array(D.buffer,D.byteOffset,D.byteLength)}try{for(var w=Vh(l),k=new Uint8Array(w.length),q=0;q<w.length;++q)k[q]=w.charCodeAt(q);return k}catch{throw new Error("Converting base64 string to bytes failed.")}}function NI(l){if(hA(l))return Wh(l.slice(hg.length))}var zh={D:lA,y:iA,J:lg,K:Ag,F:PA,N:ft,k:Wc,C:zc,e:Zc,c:Xc,p:jc,M:th,A:Ih,b:Ch,q:Bh,l:Qh,z:sh,u:dh,O:fh,h:uh,m:wh,r:ph,a:zB,s:Mh,j:Rh,f:Lh,B:Fh,i:Nh,v:Uh,g:kh,n:Gh,o:mh,d:Kh,t:Jh,G:Hh,L:vh,H:Yh,w:bh,I:Th,E:_h,x:Oh};b();var $B=function(){return($B=C.asm.R).apply(null,arguments)},Ce=function(){return(Ce=C.asm.S).apply(null,arguments)},LE=function(){return(LE=C.asm.U).apply(null,arguments)};C.__embind_initialize_bindings=function(){return(C.__embind_initialize_bindings=C.asm.V).apply(null,arguments)};var FE=function(){return(FE=C.asm.W).apply(null,arguments)};C.dynCall_jiji=function(){return(C.dynCall_jiji=C.asm.X).apply(null,arguments)};var di;wA=function l(){di||NE(),di||(wA=l)};function NE(){if(NA>0||(cA(),NA>0))return;function l(){di||(di=!0,C.calledRun=!0,!U&&(xA(),i(C),C.onRuntimeInitialized&&C.onRuntimeInitialized(),Y()))}C.setStatus?(C.setStatus("Running..."),setTimeout(function(){setTimeout(function(){C.setStatus("")},1),l()},1)):l()}if(C.preInit)for(typeof C.preInit=="function"&&(C.preInit=[C.preInit]);C.preInit.length>0;)C.preInit.pop()();return NE(),C.ready}})();t.exports=g});let JA;function Dy(t){return By(this,void 0,void 0,function*(){return new Promise(A=>{ly(t).then(g=>{JA=g,A()})})})}function dy(t){return Array.isArray(t)?[t[0]]:typeof t=="function"?[t()]:[t.x]}function fy(t,A){if(Array.isArray(A)){A[0]=t[0];return}if(typeof A=="function"){A(t[0]);return}A.x=t[0]}function uy(t){return Array.isArray(t)?[t[0],t[1],t[2]]:[t.x,t.y,t.z]}function wy(t,A){if(Array.isArray(A)){A[0]=t[0],A[1]=t[1],A[2]=t[2];return}A.x=t[0],A.y=t[1],A.z=t[2]}function yy(t){return Array.isArray(t)?[t[0],t[1],t[2],t[3]||0]:[t.x,t.y,t.z,t.w]}function py(t,A){if(Array.isArray(A)){A[0]=t[0],A[1]=t[1],A[2]=t[2],A[3]=t[3];return}A.x=t[0],A.y=t[1],A.z=t[2],A.w=t[3]}function Sy(t){return Array.isArray(t)?[t[0],t[1],t[2],t[3]]:"r"in t?[t.r,t.g,t.b,t.a]:[t.x,t.y,t.z,t.w]}function My(t,A){if(Array.isArray(A)){A[0]=t[0],A[1]=t[1],A[2]=t[2],A[3]=t[3];return}if("r"in A){A.r=t[0],A.g=t[1],A.b=t[2],A.a=t[3];return}A.x=t[0],A.y=t[1],A.z=t[2],A.w=t[3]}function Fa(t){if(!t)throw new Error}function Ss(t){if(!t)throw new Error}function Na(t){return t instanceof En?t.size:t.length}class En{constructor(A,g=""){this.size=A,this.buffer=g}}var on;(function(t){t[t.None=0]="None",t[t.NoTitleBar=1]="NoTitleBar",t[t.NoResize=2]="NoResize",t[t.NoMove=4]="NoMove",t[t.NoScrollbar=8]="NoScrollbar",t[t.NoScrollWithMouse=16]="NoScrollWithMouse",t[t.NoCollapse=32]="NoCollapse",t[t.AlwaysAutoResize=64]="AlwaysAutoResize",t[t.NoBackground=128]="NoBackground",t[t.NoSavedSettings=256]="NoSavedSettings",t[t.NoMouseInputs=512]="NoMouseInputs",t[t.MenuBar=1024]="MenuBar",t[t.HorizontalScrollbar=2048]="HorizontalScrollbar",t[t.NoFocusOnAppearing=4096]="NoFocusOnAppearing",t[t.NoBringToFrontOnFocus=8192]="NoBringToFrontOnFocus",t[t.AlwaysVerticalScrollbar=16384]="AlwaysVerticalScrollbar",t[t.AlwaysHorizontalScrollbar=32768]="AlwaysHorizontalScrollbar",t[t.AlwaysUseWindowPadding=65536]="AlwaysUseWindowPadding",t[t.NoNavInputs=262144]="NoNavInputs",t[t.NoNavFocus=524288]="NoNavFocus",t[t.UnsavedDocument=1048576]="UnsavedDocument",t[t.NoNav=786432]="NoNav",t[t.NoDecoration=43]="NoDecoration",t[t.NoInputs=786944]="NoInputs",t[t.NavFlattened=8388608]="NavFlattened",t[t.ChildWindow=16777216]="ChildWindow",t[t.Tooltip=33554432]="Tooltip",t[t.Popup=67108864]="Popup",t[t.Modal=134217728]="Modal",t[t.ChildMenu=268435456]="ChildMenu"})(on||(on={}));var Ms;(function(t){t[t.None=0]="None",t[t.CharsDecimal=1]="CharsDecimal",t[t.CharsHexadecimal=2]="CharsHexadecimal",t[t.CharsUppercase=4]="CharsUppercase",t[t.CharsNoBlank=8]="CharsNoBlank",t[t.AutoSelectAll=16]="AutoSelectAll",t[t.EnterReturnsTrue=32]="EnterReturnsTrue",t[t.CallbackCompletion=64]="CallbackCompletion",t[t.CallbackHistory=128]="CallbackHistory",t[t.CallbackAlways=256]="CallbackAlways",t[t.CallbackCharFilter=512]="CallbackCharFilter",t[t.AllowTabInput=1024]="AllowTabInput",t[t.CtrlEnterForNewLine=2048]="CtrlEnterForNewLine",t[t.NoHorizontalScroll=4096]="NoHorizontalScroll",t[t.AlwaysOverwrite=8192]="AlwaysOverwrite",t[t.ReadOnly=16384]="ReadOnly",t[t.Password=32768]="Password",t[t.NoUndoRedo=65536]="NoUndoRedo",t[t.CharsScientific=131072]="CharsScientific",t[t.CallbackResize=262144]="CallbackResize",t[t.CallbackEdit=524288]="CallbackEdit",t[t.Multiline=1048576]="Multiline",t[t.NoMarkEdited=2097152]="NoMarkEdited"})(Ms||(Ms={}));var BI;(function(t){t[t.None=0]="None",t[t.Selected=1]="Selected",t[t.Framed=2]="Framed",t[t.AllowItemOverlap=4]="AllowItemOverlap",t[t.NoTreePushOnOpen=8]="NoTreePushOnOpen",t[t.NoAutoOpenOnLog=16]="NoAutoOpenOnLog",t[t.DefaultOpen=32]="DefaultOpen",t[t.OpenOnDoubleClick=64]="OpenOnDoubleClick",t[t.OpenOnArrow=128]="OpenOnArrow",t[t.Leaf=256]="Leaf",t[t.Bullet=512]="Bullet",t[t.FramePadding=1024]="FramePadding",t[t.SpanAvailWidth=2048]="SpanAvailWidth",t[t.SpanFullWidth=4096]="SpanFullWidth",t[t.NavLeftJumpsBackHere=8192]="NavLeftJumpsBackHere",t[t.CollapsingHeader=26]="CollapsingHeader"})(BI||(BI={}));var Rs;(function(t){t[t.None=0]="None",t[t.MouseButtonLeft=0]="MouseButtonLeft",t[t.MouseButtonRight=1]="MouseButtonRight",t[t.MouseButtonMiddle=2]="MouseButtonMiddle",t[t.MouseButtonMask_=31]="MouseButtonMask_",t[t.MouseButtonDefault_=1]="MouseButtonDefault_",t[t.NoOpenOverExistingPopup=32]="NoOpenOverExistingPopup",t[t.NoOpenOverItems=64]="NoOpenOverItems",t[t.AnyPopupId=128]="AnyPopupId",t[t.AnyPopupLevel=256]="AnyPopupLevel",t[t.AnyPopup=384]="AnyPopup"})(Rs||(Rs={}));var Ls;(function(t){t[t.None=0]="None",t[t.DontClosePopups=1]="DontClosePopups",t[t.SpanAllColumns=2]="SpanAllColumns",t[t.AllowDoubleClick=4]="AllowDoubleClick",t[t.Disabled=8]="Disabled",t[t.AllowItemOverlap=16]="AllowItemOverlap"})(Ls||(Ls={}));var Fs;(function(t){t[t.None=0]="None",t[t.PopupAlignLeft=1]="PopupAlignLeft",t[t.HeightSmall=2]="HeightSmall",t[t.HeightRegular=4]="HeightRegular",t[t.HeightLarge=8]="HeightLarge",t[t.HeightLargest=16]="HeightLargest",t[t.NoArrowButton=32]="NoArrowButton",t[t.NoPreview=64]="NoPreview",t[t.HeightMask_=30]="HeightMask_"})(Fs||(Fs={}));var Ns;(function(t){t[t.None=0]="None",t[t.Reorderable=1]="Reorderable",t[t.AutoSelectNewTabs=2]="AutoSelectNewTabs",t[t.TabListPopupButton=4]="TabListPopupButton",t[t.NoCloseWithMiddleMouseButton=8]="NoCloseWithMiddleMouseButton",t[t.NoTabListScrollingButtons=16]="NoTabListScrollingButtons",t[t.NoTooltip=32]="NoTooltip",t[t.FittingPolicyResizeDown=64]="FittingPolicyResizeDown",t[t.FittingPolicyScroll=128]="FittingPolicyScroll",t[t.FittingPolicyMask_=192]="FittingPolicyMask_",t[t.FittingPolicyDefault_=64]="FittingPolicyDefault_"})(Ns||(Ns={}));var Us;(function(t){t[t.None=0]="None",t[t.UnsavedDocument=1]="UnsavedDocument",t[t.SetSelected=2]="SetSelected",t[t.NoCloseWithMiddleMouseButton=4]="NoCloseWithMiddleMouseButton",t[t.NoPushId=8]="NoPushId",t[t.NoTooltip=16]="NoTooltip",t[t.NoReorder=32]="NoReorder",t[t.Leading=64]="Leading",t[t.Trailing=128]="Trailing"})(Us||(Us={}));var ks;(function(t){t[t.None=0]="None",t[t.Resizable=1]="Resizable",t[t.Reorderable=2]="Reorderable",t[t.Hideable=4]="Hideable",t[t.Sortable=8]="Sortable",t[t.NoSavedSettings=16]="NoSavedSettings",t[t.ContextMenuInBody=32]="ContextMenuInBody",t[t.RowBg=64]="RowBg",t[t.BordersInnerH=128]="BordersInnerH",t[t.BordersOuterH=256]="BordersOuterH",t[t.BordersInnerV=512]="BordersInnerV",t[t.BordersOuterV=1024]="BordersOuterV",t[t.BordersH=384]="BordersH",t[t.BordersV=1536]="BordersV",t[t.BordersInner=640]="BordersInner",t[t.BordersOuter=1280]="BordersOuter",t[t.Borders=1920]="Borders",t[t.NoBordersInBody=2048]="NoBordersInBody",t[t.NoBordersInBodyUntilResize=4096]="NoBordersInBodyUntilResize",t[t.SizingFixedFit=8192]="SizingFixedFit",t[t.SizingFixedSame=16384]="SizingFixedSame",t[t.SizingStretchProp=24576]="SizingStretchProp",t[t.SizingStretchSame=32768]="SizingStretchSame",t[t.NoHostExtendX=65536]="NoHostExtendX",t[t.NoHostExtendY=131072]="NoHostExtendY",t[t.NoKeepColumnsVisible=262144]="NoKeepColumnsVisible",t[t.PreciseWidths=524288]="PreciseWidths",t[t.NoClip=1048576]="NoClip",t[t.PadOuterX=2097152]="PadOuterX",t[t.NoPadOuterX=4194304]="NoPadOuterX",t[t.NoPadInnerX=8388608]="NoPadInnerX",t[t.ScrollX=16777216]="ScrollX",t[t.ScrollY=33554432]="ScrollY",t[t.SortMulti=67108864]="SortMulti",t[t.SortTristate=134217728]="SortTristate",t[t.SizingMask_=57344]="SizingMask_"})(ks||(ks={}));var TC;(function(t){t[t.None=0]="None",t[t.Disabled=1]="Disabled",t[t.DefaultHide=2]="DefaultHide",t[t.DefaultSort=4]="DefaultSort",t[t.WidthStretch=8]="WidthStretch",t[t.WidthFixed=16]="WidthFixed",t[t.NoResize=32]="NoResize",t[t.NoReorder=64]="NoReorder",t[t.NoHide=128]="NoHide",t[t.NoClip=256]="NoClip",t[t.NoSort=512]="NoSort",t[t.NoSortAscending=1024]="NoSortAscending",t[t.NoSortDescending=2048]="NoSortDescending",t[t.NoHeaderLabel=4096]="NoHeaderLabel",t[t.NoHeaderWidth=8192]="NoHeaderWidth",t[t.PreferSortAscending=16384]="PreferSortAscending",t[t.PreferSortDescending=32768]="PreferSortDescending",t[t.IndentEnable=65536]="IndentEnable",t[t.IndentDisable=131072]="IndentDisable",t[t.IsEnabled=16777216]="IsEnabled",t[t.IsVisible=33554432]="IsVisible",t[t.IsSorted=67108864]="IsSorted",t[t.IsHovered=134217728]="IsHovered",t[t.WidthMask_=24]="WidthMask_",t[t.IndentMask_=196608]="IndentMask_",t[t.StatusMask_=251658240]="StatusMask_",t[t.NoDirectResize_=1073741824]="NoDirectResize_"})(TC||(TC={}));var Gs;(function(t){t[t.None=0]="None",t[t.Headers=1]="Headers"})(Gs||(Gs={}));var ms;(function(t){t[t.None=0]="None",t[t.RowBg0=1]="RowBg0",t[t.RowBg1=2]="RowBg1",t[t.CellBg=3]="CellBg"})(ms||(ms={}));var Ks;(function(t){t[t.None=0]="None",t[t.ChildWindows=1]="ChildWindows",t[t.RootWindow=2]="RootWindow",t[t.AnyWindow=4]="AnyWindow",t[t.NoPopupHierarchy=8]="NoPopupHierarchy",t[t.RootAndChildWindows=3]="RootAndChildWindows"})(Ks||(Ks={}));var Js;(function(t){t[t.None=0]="None",t[t.ChildWindows=1]="ChildWindows",t[t.RootWindow=2]="RootWindow",t[t.AnyWindow=4]="AnyWindow",t[t.NoPopupHierarchy=8]="NoPopupHierarchy",t[t.AllowWhenBlockedByPopup=32]="AllowWhenBlockedByPopup",t[t.AllowWhenBlockedByActiveItem=128]="AllowWhenBlockedByActiveItem",t[t.AllowWhenOverlapped=256]="AllowWhenOverlapped",t[t.AllowWhenDisabled=512]="AllowWhenDisabled",t[t.RectOnly=416]="RectOnly",t[t.RootAndChildWindows=3]="RootAndChildWindows"})(Js||(Js={}));var Hs;(function(t){t[t.None=0]="None",t[t.SourceNoPreviewTooltip=1]="SourceNoPreviewTooltip",t[t.SourceNoDisableHover=2]="SourceNoDisableHover",t[t.SourceNoHoldToOpenOthers=4]="SourceNoHoldToOpenOthers",t[t.SourceAllowNullID=8]="SourceAllowNullID",t[t.SourceExtern=16]="SourceExtern",t[t.SourceAutoExpirePayload=32]="SourceAutoExpirePayload",t[t.AcceptBeforeDelivery=1024]="AcceptBeforeDelivery",t[t.AcceptNoDrawDefaultRect=2048]="AcceptNoDrawDefaultRect",t[t.AcceptNoPreviewTooltip=4096]="AcceptNoPreviewTooltip",t[t.AcceptPeekOnly=3072]="AcceptPeekOnly"})(Hs||(Hs={}));var vs;(function(t){t[t.S8=0]="S8",t[t.U8=1]="U8",t[t.S16=2]="S16",t[t.U16=3]="U16",t[t.S32=4]="S32",t[t.U32=5]="U32",t[t.S64=6]="S64",t[t.U64=7]="U64",t[t.Float=8]="Float",t[t.Double=9]="Double",t[t.COUNT=10]="COUNT"})(vs||(vs={}));var hB;(function(t){t[t.None=-1]="None",t[t.Left=0]="Left",t[t.Right=1]="Right",t[t.Up=2]="Up",t[t.Down=3]="Down",t[t.COUNT=4]="COUNT"})(hB||(hB={}));var xs;(function(t){t[t.None=0]="None",t[t.Ascending=1]="Ascending",t[t.Descending=2]="Descending"})(xs||(xs={}));var Fg;(function(t){t[t.Tab=0]="Tab",t[t.LeftArrow=1]="LeftArrow",t[t.RightArrow=2]="RightArrow",t[t.UpArrow=3]="UpArrow",t[t.DownArrow=4]="DownArrow",t[t.PageUp=5]="PageUp",t[t.PageDown=6]="PageDown",t[t.Home=7]="Home",t[t.End=8]="End",t[t.Insert=9]="Insert",t[t.Delete=10]="Delete",t[t.Backspace=11]="Backspace",t[t.Space=12]="Space",t[t.Enter=13]="Enter",t[t.Escape=14]="Escape",t[t.KeyPadEnter=15]="KeyPadEnter",t[t.A=16]="A",t[t.C=17]="C",t[t.V=18]="V",t[t.X=19]="X",t[t.Y=20]="Y",t[t.Z=21]="Z",t[t.COUNT=22]="COUNT"})(Fg||(Fg={}));var Ys;(function(t){t[t.None=0]="None",t[t.Ctrl=1]="Ctrl",t[t.Shift=2]="Shift",t[t.Alt=4]="Alt",t[t.Super=8]="Super"})(Ys||(Ys={}));var fA;(function(t){t[t.Activate=0]="Activate",t[t.Cancel=1]="Cancel",t[t.Input=2]="Input",t[t.Menu=3]="Menu",t[t.DpadLeft=4]="DpadLeft",t[t.DpadRight=5]="DpadRight",t[t.DpadUp=6]="DpadUp",t[t.DpadDown=7]="DpadDown",t[t.LStickLeft=8]="LStickLeft",t[t.LStickRight=9]="LStickRight",t[t.LStickUp=10]="LStickUp",t[t.LStickDown=11]="LStickDown",t[t.FocusPrev=12]="FocusPrev",t[t.FocusNext=13]="FocusNext",t[t.TweakSlow=14]="TweakSlow",t[t.TweakFast=15]="TweakFast",t[t.KeyLeft_=16]="KeyLeft_",t[t.KeyRight_=17]="KeyRight_",t[t.KeyUp_=18]="KeyUp_",t[t.KeyDown_=19]="KeyDown_",t[t.COUNT=20]="COUNT",t[t.InternalStart_=16]="InternalStart_"})(fA||(fA={}));var sn;(function(t){t[t.None=0]="None",t[t.NavEnableKeyboard=1]="NavEnableKeyboard",t[t.NavEnableGamepad=2]="NavEnableGamepad",t[t.NavEnableSetMousePos=4]="NavEnableSetMousePos",t[t.NavNoCaptureKeyboard=8]="NavNoCaptureKeyboard",t[t.NoMouse=16]="NoMouse",t[t.NoMouseCursorChange=32]="NoMouseCursorChange",t[t.IsSRGB=1048576]="IsSRGB",t[t.IsTouchScreen=2097152]="IsTouchScreen"})(sn||(sn={}));var zC;(function(t){t[t.Text=0]="Text",t[t.TextDisabled=1]="TextDisabled",t[t.WindowBg=2]="WindowBg",t[t.ChildBg=3]="ChildBg",t[t.PopupBg=4]="PopupBg",t[t.Border=5]="Border",t[t.BorderShadow=6]="BorderShadow",t[t.FrameBg=7]="FrameBg",t[t.FrameBgHovered=8]="FrameBgHovered",t[t.FrameBgActive=9]="FrameBgActive",t[t.TitleBg=10]="TitleBg",t[t.TitleBgActive=11]="TitleBgActive",t[t.TitleBgCollapsed=12]="TitleBgCollapsed",t[t.MenuBarBg=13]="MenuBarBg",t[t.ScrollbarBg=14]="ScrollbarBg",t[t.ScrollbarGrab=15]="ScrollbarGrab",t[t.ScrollbarGrabHovered=16]="ScrollbarGrabHovered",t[t.ScrollbarGrabActive=17]="ScrollbarGrabActive",t[t.CheckMark=18]="CheckMark",t[t.SliderGrab=19]="SliderGrab",t[t.SliderGrabActive=20]="SliderGrabActive",t[t.Button=21]="Button",t[t.ButtonHovered=22]="ButtonHovered",t[t.ButtonActive=23]="ButtonActive",t[t.Header=24]="Header",t[t.HeaderHovered=25]="HeaderHovered",t[t.HeaderActive=26]="HeaderActive",t[t.Separator=27]="Separator",t[t.SeparatorHovered=28]="SeparatorHovered",t[t.SeparatorActive=29]="SeparatorActive",t[t.ResizeGrip=30]="ResizeGrip",t[t.ResizeGripHovered=31]="ResizeGripHovered",t[t.ResizeGripActive=32]="ResizeGripActive",t[t.Tab=33]="Tab",t[t.TabHovered=34]="TabHovered",t[t.TabActive=35]="TabActive",t[t.TabUnfocused=36]="TabUnfocused",t[t.TabUnfocusedActive=37]="TabUnfocusedActive",t[t.PlotLines=38]="PlotLines",t[t.PlotLinesHovered=39]="PlotLinesHovered",t[t.PlotHistogram=40]="PlotHistogram",t[t.PlotHistogramHovered=41]="PlotHistogramHovered",t[t.TableHeaderBg=42]="TableHeaderBg",t[t.TableBorderStrong=43]="TableBorderStrong",t[t.TableBorderLight=44]="TableBorderLight",t[t.TableRowBg=45]="TableRowBg",t[t.TableRowBgAlt=46]="TableRowBgAlt",t[t.TextSelectedBg=47]="TextSelectedBg",t[t.DragDropTarget=48]="DragDropTarget",t[t.NavHighlight=49]="NavHighlight",t[t.NavWindowingHighlight=50]="NavWindowingHighlight",t[t.NavWindowingDimBg=51]="NavWindowingDimBg",t[t.ModalWindowDimBg=52]="ModalWindowDimBg",t[t.COUNT=53]="COUNT"})(zC||(zC={}));var bs;(function(t){t[t.Alpha=0]="Alpha",t[t.DisabledAlpha=1]="DisabledAlpha",t[t.WindowPadding=2]="WindowPadding",t[t.WindowRounding=3]="WindowRounding",t[t.WindowBorderSize=4]="WindowBorderSize",t[t.WindowMinSize=5]="WindowMinSize",t[t.WindowTitleAlign=6]="WindowTitleAlign",t[t.ChildRounding=7]="ChildRounding",t[t.ChildBorderSize=8]="ChildBorderSize",t[t.PopupRounding=9]="PopupRounding",t[t.PopupBorderSize=10]="PopupBorderSize",t[t.FramePadding=11]="FramePadding",t[t.FrameRounding=12]="FrameRounding",t[t.FrameBorderSize=13]="FrameBorderSize",t[t.ItemSpacing=14]="ItemSpacing",t[t.ItemInnerSpacing=15]="ItemInnerSpacing",t[t.IndentSpacing=16]="IndentSpacing",t[t.CellPadding=17]="CellPadding",t[t.ScrollbarSize=18]="ScrollbarSize",t[t.ScrollbarRounding=19]="ScrollbarRounding",t[t.GrabMinSize=20]="GrabMinSize",t[t.GrabRounding=21]="GrabRounding",t[t.TabRounding=22]="TabRounding",t[t.ButtonTextAlign=23]="ButtonTextAlign",t[t.SelectableTextAlign=24]="SelectableTextAlign",t[t.COUNT=25]="COUNT"})(bs||(bs={}));var lB;(function(t){t[t.None=0]="None",t[t.HasGamepad=1]="HasGamepad",t[t.HasMouseCursors=2]="HasMouseCursors",t[t.HasSetMousePos=4]="HasSetMousePos",t[t.RendererHasVtxOffset=8]="RendererHasVtxOffset"})(lB||(lB={}));var Ts;(function(t){t[t.None=0]="None",t[t.MouseButtonLeft=1]="MouseButtonLeft",t[t.MouseButtonRight=2]="MouseButtonRight",t[t.MouseButtonMiddle=4]="MouseButtonMiddle",t[t.MouseButtonMask_=7]="MouseButtonMask_",t[t.MouseButtonDefault_=1]="MouseButtonDefault_"})(Ts||(Ts={}));var _s;(function(t){t[t.None=0]="None",t[t.NoAlpha=2]="NoAlpha",t[t.NoPicker=4]="NoPicker",t[t.NoOptions=8]="NoOptions",t[t.NoSmallPreview=16]="NoSmallPreview",t[t.NoInputs=32]="NoInputs",t[t.NoTooltip=64]="NoTooltip",t[t.NoLabel=128]="NoLabel",t[t.NoSidePreview=256]="NoSidePreview",t[t.NoDragDrop=512]="NoDragDrop",t[t.NoBorder=1024]="NoBorder",t[t.AlphaBar=65536]="AlphaBar",t[t.AlphaPreview=131072]="AlphaPreview",t[t.AlphaPreviewHalf=262144]="AlphaPreviewHalf",t[t.HDR=524288]="HDR",t[t.DisplayRGB=1048576]="DisplayRGB",t[t.DisplayHSV=2097152]="DisplayHSV",t[t.DisplayHex=4194304]="DisplayHex",t[t.Uint8=8388608]="Uint8",t[t.Float=16777216]="Float",t[t.PickerHueBar=33554432]="PickerHueBar",t[t.PickerHueWheel=67108864]="PickerHueWheel",t[t.InputRGB=134217728]="InputRGB",t[t.InputHSV=268435456]="InputHSV",t[t.DefaultOptions_=177209344]="DefaultOptions_",t[t.DisplayMask_=7340032]="DisplayMask_",t[t.DataTypeMask_=25165824]="DataTypeMask_",t[t.PickerMask_=100663296]="PickerMask_",t[t.InputMask_=402653184]="InputMask_"})(_s||(_s={}));var qs;(function(t){t[t.None=0]="None",t[t.AlwaysClamp=16]="AlwaysClamp",t[t.Logarithmic=32]="Logarithmic",t[t.NoRoundToFormat=64]="NoRoundToFormat",t[t.NoInput=128]="NoInput",t[t.InvalidMask_=1879048207]="InvalidMask_"})(qs||(qs={}));var Ps;(function(t){t[t.Left=0]="Left",t[t.Right=1]="Right",t[t.Middle=2]="Middle",t[t.COUNT=5]="COUNT"})(Ps||(Ps={}));var Mt;(function(t){t[t.None=-1]="None",t[t.Arrow=0]="Arrow",t[t.TextInput=1]="TextInput",t[t.ResizeAll=2]="ResizeAll",t[t.ResizeNS=3]="ResizeNS",t[t.ResizeEW=4]="ResizeEW",t[t.ResizeNESW=5]="ResizeNESW",t[t.ResizeNWSE=6]="ResizeNWSE",t[t.Hand=7]="Hand",t[t.NotAllowed=8]="NotAllowed",t[t.COUNT=9]="COUNT"})(Mt||(Mt={}));var Os;(function(t){t[t.None=0]="None",t[t.Always=1]="Always",t[t.Once=2]="Once",t[t.FirstUseEver=4]="FirstUseEver",t[t.Appearing=8]="Appearing"})(Os||(Os={}));var $I;(function(t){t[t.None=0]="None",t[t.Closed=1]="Closed",t[t.RoundCornersTopLeft=16]="RoundCornersTopLeft",t[t.RoundCornersTopRight=32]="RoundCornersTopRight",t[t.RoundCornersBottomLeft=64]="RoundCornersBottomLeft",t[t.RoundCornersBottomRight=128]="RoundCornersBottomRight",t[t.RoundCornersNone=256]="RoundCornersNone",t[t.RoundCornersTop=48]="RoundCornersTop",t[t.RoundCornersBottom=192]="RoundCornersBottom",t[t.RoundCornersLeft=80]="RoundCornersLeft",t[t.RoundCornersRight=160]="RoundCornersRight",t[t.RoundCornersAll=240]="RoundCornersAll",t[t.RoundCornersDefault_=240]="RoundCornersDefault_",t[t.RoundCornersMask_=496]="RoundCornersMask_"})($I||($I={}));var Vs;(function(t){t[t.None=0]="None",t[t.AntiAliasedLines=1]="AntiAliasedLines",t[t.AntiAliasedLinesUseTex=2]="AntiAliasedLinesUseTex",t[t.AntiAliasedFill=4]="AntiAliasedFill",t[t.AllowVtxOffset=8]="AllowVtxOffset"})(Vs||(Vs={}));class Ig{constructor(A=0,g=0){this.x=A,this.y=g}Set(A,g){return this.x=A,this.y=g,this}Copy(A){return this.x=A.x,this.y=A.y,this}Equals(A){return!(this.x!==A.x||this.y!==A.y)}}Ig.ZERO=new Ig(0,0);Ig.UNIT=new Ig(1,1);Ig.UNIT_X=new Ig(1,0);Ig.UNIT_Y=new Ig(0,1);class Zg{constructor(A=0,g=0,e=0,I=1){this.x=A,this.y=g,this.z=e,this.w=I}Set(A,g,e,I){return this.x=A,this.y=g,this.z=e,this.w=I,this}Copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w,this}Equals(A){return!(this.x!==A.x||this.y!==A.y||this.z!==A.z||this.w!==A.w)}}Zg.ZERO=new Zg(0,0,0,0);Zg.UNIT=new Zg(1,1,1,1);Zg.UNIT_X=new Zg(1,0,0,0);Zg.UNIT_Y=new Zg(0,1,0,0);Zg.UNIT_Z=new Zg(0,0,1,0);Zg.UNIT_W=new Zg(0,0,0,1);Zg.BLACK=new Zg(0,0,0,1);Zg.WHITE=new Zg(1,1,1,1);class Ua extends Array{constructor(){super(...arguments),this.Data=this}get Size(){return this.length}empty(){return this.length===0}clear(){this.length=0}pop_back(){return this.pop()}push_back(A){this.push(A)}front(){return Ss(this.Size>0),this.Data[0]}back(){return Ss(this.Size>0),this.Data[this.Size-1]}size(){return this.Size}resize(A,g){if(g)for(let e=this.length;e<A;++e)this[e]=g(e);else this.length=A}contains(A){return this.includes(A)}find_erase_unsorted(A){const g=this.indexOf(A);g!==-1&&this.splice(g,1)}}const Ry=128;class Ly{constructor(A,g=null){this.native=A,this.UserData=g}get EventFlag(){return this.native.EventFlag}get Flags(){return this.native.Flags}get EventChar(){return this.native.EventChar}set EventChar(A){this.native.EventChar=A}get EventKey(){return this.native.EventKey}get Buf(){return this.native.Buf}set Buf(A){this.native.Buf=A}get BufTextLen(){return this.native.BufTextLen}set BufTextLen(A){this.native.BufTextLen=A}get BufSize(){return this.native.BufSize}set BufDirty(A){this.native.BufDirty=A}get CursorPos(){return this.native.CursorPos}set CursorPos(A){this.native.CursorPos=A}get SelectionStart(){return this.native.SelectionStart}set SelectionStart(A){this.native.SelectionStart=A}get SelectionEnd(){return this.native.SelectionEnd}set SelectionEnd(A){this.native.SelectionEnd=A}DeleteChars(A,g){return this.native.DeleteChars(A,g)}InsertChars(A,g,e=null){return this.native.InsertChars(A,e!==null?g.substring(0,e):g)}SelectAll(){this.native.SelectAll()}ClearSelection(){this.native.ClearSelection()}HasSelection(){return this.native.HasSelection()}}class Ws{constructor(A){this.native=A,this.UserCallback=null,this.UserCallbackData=null}get ElemCount(){return this.native.ElemCount}get ClipRect(){return this.native.ClipRect}get TextureId(){return Ug.getTexture(this.native.TextureId)}get VtxOffset(){return this.native.VtxOffset}get IdxOffset(){return this.native.IdxOffset}}const zs=2,Tt=20,Fy=0,Ny=8,Uy=16;class $e{constructor(A,g=0){this.pos=new Float32Array(A,g+JA.ImDrawVertPosOffset,2),this.uv=new Float32Array(A,g+JA.ImDrawVertUVOffset,2),this.col=new Uint32Array(A,g+JA.ImDrawVertColOffset,1)}}class Zn{constructor(A){this.native=A}IterateDrawCmds(A){this.native.IterateDrawCmds((g,e)=>{A(new Ws(g),e)})}get IdxBuffer(){return this.native.IdxBuffer}get VtxBuffer(){return this.native.VtxBuffer}get Flags(){return this.native.Flags}set Flags(A){this.native.Flags=A}PushClipRect(A,g,e=!1){this.native.PushClipRect(A,g,e)}PushClipRectFullScreen(){this.native.PushClipRectFullScreen()}PopClipRect(){this.native.PopClipRect()}PushTextureID(A){this.native.PushTextureID(Ug.setTexture(A))}PopTextureID(){this.native.PopTextureID()}GetClipRectMin(A=new Ig){return this.native.GetClipRectMin(A)}GetClipRectMax(A=new Ig){return this.native.GetClipRectMax(A)}AddLine(A,g,e,I=1){this.native.AddLine(A,g,e,I)}AddRect(A,g,e,I=0,C=$I.None,i=1){this.native.AddRect(A,g,e,I,C,i)}AddRectFilled(A,g,e,I=0,C=$I.None){this.native.AddRectFilled(A,g,e,I,C)}AddRectFilledMultiColor(A,g,e,I,C,i){this.native.AddRectFilledMultiColor(A,g,e,I,C,i)}AddQuad(A,g,e,I,C,i=1){this.native.AddQuad(A,g,e,I,C,i)}AddQuadFilled(A,g,e,I,C){this.native.AddQuadFilled(A,g,e,I,C)}AddTriangle(A,g,e,I,C=1){this.native.AddTriangle(A,g,e,I,C)}AddTriangleFilled(A,g,e,I){this.native.AddTriangleFilled(A,g,e,I)}AddCircle(A,g,e,I=12,C=1){this.native.AddCircle(A,g,e,I,C)}AddCircleFilled(A,g,e,I=12){this.native.AddCircleFilled(A,g,e,I)}AddNgon(A,g,e,I,C=1){this.native.AddNgon(A,g,e,I,C)}AddNgonFilled(A,g,e,I){this.native.AddNgonFilled(A,g,e,I)}AddText(...A){if(A[0]instanceof tC){const g=A[0],e=A[1],I=A[2],C=A[3],i=A[4],B=A[5]||null,Q=A[6]=0,n=A[7]||null;this.native.AddText_B(g.native,e,I,C,B!==null?i.substring(0,B):i,Q,n)}else{const g=A[0],e=A[1],I=A[2],C=A[3]||null;this.native.AddText_A(g,e,C!==null?I.substring(0,C):I)}}AddPolyline(A,g,e,I,C){this.native.AddPolyline(A,g,e,I,C)}AddConvexPolyFilled(A,g,e){this.native.AddConvexPolyFilled(A,g,e)}AddBezierCubic(A,g,e,I,C,i=1,B=0){this.native.AddBezierCubic(A,g,e,I,C,i,B)}AddBezierQuadratic(A,g,e,I,C=1,i=0){this.native.AddBezierQuadratic(A,g,e,I,C,i)}AddImage(A,g,e,I=Ig.ZERO,C=Ig.UNIT,i=4294967295){this.native.AddImage(Ug.setTexture(A),g,e,I,C,i)}AddImageQuad(A,g,e,I,C,i=Ig.ZERO,B=Ig.UNIT_X,Q=Ig.UNIT,n=Ig.UNIT_Y,E=4294967295){this.native.AddImageQuad(Ug.setTexture(A),g,e,I,C,i,B,Q,n,E)}AddImageRounded(A,g,e,I,C,i,B,Q=$I.None){this.native.AddImageRounded(Ug.setTexture(A),g,e,I,C,i,B,Q)}PathClear(){this.native.PathClear()}PathLineTo(A){this.native.PathLineTo(A)}PathLineToMergeDuplicate(A){this.native.PathLineToMergeDuplicate(A)}PathFillConvex(A){this.native.PathFillConvex(A)}PathStroke(A,g,e=1){this.native.PathStroke(A,g,e)}PathArcTo(A,g,e,I,C=0){this.native.PathArcTo(A,g,e,I,C)}PathArcToFast(A,g,e,I){this.native.PathArcToFast(A,g,e,I)}PathBezierCubicCurveTo(A,g,e,I=0){this.native.PathBezierCubicCurveTo(A,g,e,I)}PathBezierQuadraticCurveTo(A,g,e=0){this.native.PathBezierQuadraticCurveTo(A,g,e)}PathRect(A,g,e=0,I=$I.None){this.native.PathRect(A,g,e,I)}ChannelsSplit(A){this.native.ChannelsSplit(A)}ChannelsMerge(){this.native.ChannelsMerge()}ChannelsSetCurrent(A){this.native.ChannelsSetCurrent(A)}AddCallback(A,g){const e=(I,C)=>{A(new Zn(I),new Ws(C))};this.native.AddCallback(e,g)}AddDrawCmd(){this.native.AddDrawCmd()}PrimReserve(A,g){this.native.PrimReserve(A,g)}PrimUnreserve(A,g){this.native.PrimUnreserve(A,g)}PrimRect(A,g,e){this.native.PrimRect(A,g,e)}PrimRectUV(A,g,e,I,C){this.native.PrimRectUV(A,g,e,I,C)}PrimQuadUV(A,g,e,I,C,i,B,Q,n){this.native.PrimQuadUV(A,g,e,I,C,i,B,Q,n)}PrimWriteVtx(A,g,e){this.native.PrimWriteVtx(A,g,e)}PrimWriteIdx(A){this.native.PrimWriteIdx(A)}PrimVtx(A,g,e){this.native.PrimVtx(A,g,e)}_CalcCircleAutoSegmentCount(A){return this.native._CalcCircleAutoSegmentCount(A)}}class ky{constructor(A){this.native=A}IterateDrawLists(A){this.native.IterateDrawLists(g=>{A(new Zn(g))})}get Valid(){return this.native.Valid}get CmdListsCount(){return this.native.CmdListsCount}get TotalIdxCount(){return this.native.TotalIdxCount}get TotalVtxCount(){return this.native.TotalVtxCount}get DisplayPos(){return this.native.DisplayPos}get DisplaySize(){return this.native.DisplaySize}get FramebufferScale(){return this.native.FramebufferScale}DeIndexAllBuffers(){this.native.DeIndexAllBuffers()}ScaleClipRects(A){this.native.ScaleClipRects(A)}}class Gy{constructor(){this.FontData=null,this.FontDataOwnedByAtlas=!0,this.FontNo=0,this.SizePixels=0,this.OversampleH=3,this.OversampleV=1,this.PixelSnapH=!1,this.GlyphExtraSpacing=new Ig(0,0),this.GlyphOffset=new Ig(0,0),this.GlyphRanges=null,this.GlyphMinAdvanceX=0,this.GlyphMaxAdvanceX=Number.MAX_VALUE,this.MergeMode=!1,this.FontBuilderFlags=0,this.RasterizerMultiply=1,this.EllipsisChar=-1,this.DotChar=-1,this.Name="",this.DstFont=null}}class my{constructor(A=new Gy){this.internal=A}get FontData(){return this.internal.FontData}get FontDataOwnedByAtlas(){return this.internal.FontDataOwnedByAtlas}get FontNo(){return this.internal.FontNo}get SizePixels(){return this.internal.SizePixels}get OversampleH(){return this.internal.OversampleH}get OversampleV(){return this.internal.OversampleV}get PixelSnapH(){return this.internal.PixelSnapH}get GlyphExtraSpacing(){return this.internal.GlyphExtraSpacing}get GlyphOffset(){return this.internal.GlyphOffset}get GlyphRanges(){return this.internal.GlyphRanges}get GlyphMinAdvanceX(){return this.internal.GlyphMinAdvanceX}get GlyphMaxAdvanceX(){return this.internal.GlyphMaxAdvanceX}get MergeMode(){return this.internal.MergeMode}get FontBuilderFlags(){return this.internal.FontBuilderFlags}get RasterizerMultiply(){return this.internal.RasterizerMultiply}get Name(){return this.internal.Name}set Name(A){this.internal.Name=A}get DstFont(){const A=this.internal.DstFont;return A&&new tC(A)}}class Ky{constructor(){this.Colored=!1,this.Visible=!1,this.Codepoint=0,this.AdvanceX=0,this.X0=0,this.Y0=0,this.X1=1,this.Y1=1,this.U0=0,this.V0=0,this.U1=1,this.V1=1}}class Oi{constructor(A=new Ky){this.internal=A}get Colored(){return this.internal.Visible}get Visible(){return this.internal.Visible}get Codepoint(){return this.internal.Codepoint}get AdvanceX(){return this.internal.AdvanceX}get X0(){return this.internal.X0}get Y0(){return this.internal.Y0}get X1(){return this.internal.X1}get Y1(){return this.internal.Y1}get U0(){return this.internal.U0}get V0(){return this.internal.V0}get U1(){return this.internal.U1}get V1(){return this.internal.V1}}var Zs;(function(t){t[t.None=0]="None",t[t.NoPowerOfTwoHeight=1]="NoPowerOfTwoHeight",t[t.NoMouseCursors=2]="NoMouseCursors",t[t.NoBakedLines=4]="NoBakedLines"})(Zs||(Zs={}));class Jy{constructor(A){this.native=A}AddFontDefault(A=null){return new tC(this.native.AddFontDefault(A))}AddFontFromMemoryTTF(A,g,e=null,I=null){return new tC(this.native.AddFontFromMemoryTTF(new Uint8Array(A),g,e&&e.internal,I))}ClearTexData(){this.native.ClearTexData()}ClearInputData(){this.native.ClearInputData()}ClearFonts(){this.native.ClearFonts()}Clear(){this.native.Clear()}Build(){return this.native.Build()}IsBuilt(){return this.native.IsBuilt()}GetTexDataAsAlpha8(){return this.native.GetTexDataAsAlpha8()}GetTexDataAsRGBA32(){return this.native.GetTexDataAsRGBA32()}SetTexID(A){this.TexID=A}GetGlyphRangesDefault(){return this.native.GetGlyphRangesDefault()}GetGlyphRangesKorean(){return this.native.GetGlyphRangesKorean()}GetGlyphRangesJapanese(){return this.native.GetGlyphRangesJapanese()}GetGlyphRangesChineseFull(){return this.native.GetGlyphRangesChineseFull()}GetGlyphRangesChineseSimplifiedCommon(){return this.native.GetGlyphRangesChineseSimplifiedCommon()}GetGlyphRangesCyrillic(){return this.native.GetGlyphRangesCyrillic()}GetGlyphRangesThai(){return this.native.GetGlyphRangesThai()}GetGlyphRangesVietnamese(){return this.native.GetGlyphRangesVietnamese()}get Locked(){return this.native.Locked}set Locked(A){this.native.Locked=A}get Flags(){return this.native.Flags}set Flags(A){this.native.Flags=A}get TexID(){return Ug.getTexture(this.native.TexID)}set TexID(A){this.native.TexID=Ug.setTexture(A)}get TexDesiredWidth(){return this.native.TexDesiredWidth}set TexDesiredWidth(A){this.native.TexDesiredWidth=A}get TexGlyphPadding(){return this.native.TexGlyphPadding}set TexGlyphPadding(A){this.native.TexGlyphPadding=A}get TexWidth(){return this.native.TexWidth}get TexHeight(){return this.native.TexHeight}get TexUvScale(){return this.native.TexUvScale}get TexUvWhitePixel(){return this.native.TexUvWhitePixel}get Fonts(){const A=new Ua;return this.native.IterateFonts(g=>{A.push(new tC(g))}),A}}class tC{constructor(A){this.native=A}get FontSize(){return this.native.FontSize}get Scale(){return this.native.Scale}set Scale(A){this.native.Scale=A}get Glyphs(){const A=new Ua;return this.native.IterateGlyphs(g=>{A.push(new Oi(g))}),A}get FallbackGlyph(){const A=this.native.FallbackGlyph;return A&&new Oi(A)}set FallbackGlyph(A){this.native.FallbackGlyph=A&&A.internal}get FallbackAdvanceX(){return this.native.FallbackAdvanceX}get FallbackChar(){return this.native.FallbackChar}get EllipsisChar(){return this.native.EllipsisChar}get DotChar(){return this.native.DotChar}get ConfigDataCount(){return this.ConfigData.length}get ConfigData(){const A=[];return this.native.IterateConfigData(g=>{A.push(new my(g))}),A}get ContainerAtlas(){return null}get Ascent(){return this.native.Ascent}get Descent(){return this.native.Descent}get MetricsTotalSurface(){return this.native.MetricsTotalSurface}ClearOutputData(){return this.native.ClearOutputData()}BuildLookupTable(){return this.native.BuildLookupTable()}FindGlyph(A){const g=this.native.FindGlyph(A);return g&&new Oi(g)}FindGlyphNoFallback(A){const g=this.native.FindGlyphNoFallback(A);return g&&new Oi(g)}GetCharAdvance(A){return this.native.GetCharAdvance(A)}IsLoaded(){return this.native.IsLoaded()}GetDebugName(){return this.native.GetDebugName()}CalcTextSizeA(A,g,e,I,C=null,i=null){return this.native.CalcTextSizeA(A,g,e,C!==null?I.substring(0,C):I,i,new Ig)}CalcWordWrapPositionA(A,g,e=null,I){return this.native.CalcWordWrapPositionA(A,e!==null?g.substring(0,e):g,I)}RenderChar(A,g,e,I,C){this.native.RenderChar(A.native,g,e,I,C)}RenderText(A,g,e,I,C,i,B=null,Q=0,n=!1){}IsGlyphRangeUnused(A,g){return!1}}var Xs;(function(t){t[t.None=0]="None",t[t.IsPlatformWindow=1]="IsPlatformWindow",t[t.IsPlatformMonitor=2]="IsPlatformMonitor",t[t.OwnedByApp=4]="OwnedByApp"})(Xs||(Xs={}));class Hy{constructor(){this.Alpha=1,this.DisabledAlpha=.6,this.WindowPadding=new Ig(8,8),this.WindowRounding=7,this.WindowBorderSize=0,this.WindowMinSize=new Ig(32,32),this.WindowTitleAlign=new Ig(0,.5),this.WindowMenuButtonPosition=hB.Left,this.ChildRounding=0,this.ChildBorderSize=1,this.PopupRounding=0,this.PopupBorderSize=1,this.FramePadding=new Ig(4,3),this.FrameRounding=0,this.FrameBorderSize=0,this.ItemSpacing=new Ig(8,4),this.ItemInnerSpacing=new Ig(4,4),this.CellPadding=new Ig(4,2),this.TouchExtraPadding=new Ig(0,0),this.IndentSpacing=21,this.ColumnsMinSpacing=6,this.ScrollbarSize=16,this.ScrollbarRounding=9,this.GrabMinSize=10,this.GrabRounding=0,this.LogSliderDeadzone=4,this.TabRounding=0,this.TabBorderSize=0,this.TabMinWidthForCloseButton=0,this.ColorButtonPosition=hB.Right,this.ButtonTextAlign=new Ig(.5,.5),this.SelectableTextAlign=new Ig(0,0),this.DisplayWindowPadding=new Ig(22,22),this.DisplaySafeAreaPadding=new Ig(4,4),this.MouseCursorScale=1,this.AntiAliasedLines=!0,this.AntiAliasedLinesUseTex=!0,this.AntiAliasedFill=!0,this.CurveTessellationTol=1.25,this.CircleTessellationMaxError=1.6,this.Colors=[];for(let I=0;I<zC.COUNT;++I)this.Colors[I]=new Zg;const A=new vC(this),g=new JA.ImGuiStyle,e=new vC(g);e.Copy(A),JA.StyleColorsClassic(g),A.Copy(e),g.delete()}_getAt_Colors(A){return this.Colors[A]}_setAt_Colors(A,g){return this.Colors[A].Copy(g),!0}ScaleAllSizes(A){const g=new vC(this),e=new JA.ImGuiStyle,I=new vC(e);I.Copy(g),e.ScaleAllSizes(A),g.Copy(I),e.delete()}}class vC{constructor(A=new Hy){this.internal=A,this.Colors=new Proxy([],{get:(g,e)=>e==="length"?zC.COUNT:this.internal._getAt_Colors(Number(e)),set:(g,e,I)=>this.internal._setAt_Colors(Number(e),I)})}get Alpha(){return this.internal.Alpha}set Alpha(A){this.internal.Alpha=A}get DisabledAlpha(){return this.internal.DisabledAlpha}set DisabledAlpha(A){this.internal.DisabledAlpha=A}get WindowPadding(){return this.internal.WindowPadding}get WindowRounding(){return this.internal.WindowRounding}set WindowRounding(A){this.internal.WindowRounding=A}get WindowBorderSize(){return this.internal.WindowBorderSize}set WindowBorderSize(A){this.internal.WindowBorderSize=A}get WindowMinSize(){return this.internal.WindowMinSize}get WindowTitleAlign(){return this.internal.WindowTitleAlign}get WindowMenuButtonPosition(){return this.internal.WindowMenuButtonPosition}set WindowMenuButtonPosition(A){this.internal.WindowMenuButtonPosition=A}get ChildRounding(){return this.internal.ChildRounding}set ChildRounding(A){this.internal.ChildRounding=A}get ChildBorderSize(){return this.internal.ChildBorderSize}set ChildBorderSize(A){this.internal.ChildBorderSize=A}get PopupRounding(){return this.internal.PopupRounding}set PopupRounding(A){this.internal.PopupRounding=A}get PopupBorderSize(){return this.internal.PopupBorderSize}set PopupBorderSize(A){this.internal.PopupBorderSize=A}get FramePadding(){return this.internal.FramePadding}get FrameRounding(){return this.internal.FrameRounding}set FrameRounding(A){this.internal.FrameRounding=A}get FrameBorderSize(){return this.internal.FrameBorderSize}set FrameBorderSize(A){this.internal.FrameBorderSize=A}get ItemSpacing(){return this.internal.ItemSpacing}get ItemInnerSpacing(){return this.internal.ItemInnerSpacing}get CellPadding(){return this.internal.CellPadding}get TouchExtraPadding(){return this.internal.TouchExtraPadding}get IndentSpacing(){return this.internal.IndentSpacing}set IndentSpacing(A){this.internal.IndentSpacing=A}get ColumnsMinSpacing(){return this.internal.ColumnsMinSpacing}set ColumnsMinSpacing(A){this.internal.ColumnsMinSpacing=A}get ScrollbarSize(){return this.internal.ScrollbarSize}set ScrollbarSize(A){this.internal.ScrollbarSize=A}get ScrollbarRounding(){return this.internal.ScrollbarRounding}set ScrollbarRounding(A){this.internal.ScrollbarRounding=A}get GrabMinSize(){return this.internal.GrabMinSize}set GrabMinSize(A){this.internal.GrabMinSize=A}get GrabRounding(){return this.internal.GrabRounding}set GrabRounding(A){this.internal.GrabRounding=A}get LogSliderDeadzone(){return this.internal.LogSliderDeadzone}set LogSliderDeadzone(A){this.internal.LogSliderDeadzone=A}get TabRounding(){return this.internal.TabRounding}set TabRounding(A){this.internal.TabRounding=A}get TabBorderSize(){return this.internal.TabBorderSize}set TabBorderSize(A){this.internal.TabBorderSize=A}get TabMinWidthForCloseButton(){return this.internal.TabMinWidthForCloseButton}set TabMinWidthForCloseButton(A){this.internal.TabMinWidthForCloseButton=A}get ColorButtonPosition(){return this.internal.ColorButtonPosition}set ColorButtonPosition(A){this.internal.ColorButtonPosition=A}get ButtonTextAlign(){return this.internal.ButtonTextAlign}get SelectableTextAlign(){return this.internal.SelectableTextAlign}get DisplayWindowPadding(){return this.internal.DisplayWindowPadding}get DisplaySafeAreaPadding(){return this.internal.DisplaySafeAreaPadding}get MouseCursorScale(){return this.internal.MouseCursorScale}set MouseCursorScale(A){this.internal.MouseCursorScale=A}get AntiAliasedLines(){return this.internal.AntiAliasedLines}set AntiAliasedLines(A){this.internal.AntiAliasedLines=A}get AntiAliasedLinesUseTex(){return this.internal.AntiAliasedLinesUseTex}set AntiAliasedLinesUseTex(A){this.internal.AntiAliasedLinesUseTex=A}get AntiAliasedFill(){return this.internal.AntiAliasedFill}set AntiAliasedFill(A){this.internal.AntiAliasedFill=A}get CurveTessellationTol(){return this.internal.CurveTessellationTol}set CurveTessellationTol(A){this.internal.CurveTessellationTol=A}get CircleTessellationMaxError(){return this.internal.CircleTessellationMaxError}set CircleTessellationMaxError(A){this.internal.CircleTessellationMaxError=A}Copy(A){this.Alpha=A.Alpha,this.DisabledAlpha=A.DisabledAlpha,this.WindowPadding.Copy(A.WindowPadding),this.WindowRounding=A.WindowRounding,this.WindowBorderSize=A.WindowBorderSize,this.WindowMinSize.Copy(A.WindowMinSize),this.WindowTitleAlign.Copy(A.WindowTitleAlign),this.WindowMenuButtonPosition=A.WindowMenuButtonPosition,this.ChildRounding=A.ChildRounding,this.ChildBorderSize=A.ChildBorderSize,this.PopupRounding=A.PopupRounding,this.PopupBorderSize=A.PopupBorderSize,this.FramePadding.Copy(A.FramePadding),this.FrameRounding=A.FrameRounding,this.FrameBorderSize=A.FrameBorderSize,this.ItemSpacing.Copy(A.ItemSpacing),this.ItemInnerSpacing.Copy(A.ItemInnerSpacing),this.CellPadding.Copy(A.CellPadding),this.TouchExtraPadding.Copy(A.TouchExtraPadding),this.IndentSpacing=A.IndentSpacing,this.ColumnsMinSpacing=A.ColumnsMinSpacing,this.ScrollbarSize=A.ScrollbarSize,this.ScrollbarRounding=A.ScrollbarRounding,this.GrabMinSize=A.GrabMinSize,this.GrabRounding=A.GrabRounding,this.LogSliderDeadzone=A.LogSliderDeadzone,this.TabRounding=A.TabRounding,this.TabBorderSize=A.TabBorderSize,this.TabMinWidthForCloseButton=A.TabMinWidthForCloseButton,this.ColorButtonPosition=A.ColorButtonPosition,this.ButtonTextAlign.Copy(A.ButtonTextAlign),this.DisplayWindowPadding.Copy(A.DisplayWindowPadding),this.DisplaySafeAreaPadding.Copy(A.DisplaySafeAreaPadding),this.MouseCursorScale=A.MouseCursorScale,this.AntiAliasedLines=A.AntiAliasedLines,this.AntiAliasedLinesUseTex=A.AntiAliasedLinesUseTex,this.AntiAliasedFill=A.AntiAliasedFill,this.CurveTessellationTol=A.CurveTessellationTol,this.CircleTessellationMaxError=A.CircleTessellationMaxError;for(let g=0;g<zC.COUNT;++g)this.Colors[g].Copy(A.Colors[g]);return this}ScaleAllSizes(A){this.internal.ScaleAllSizes(A)}}class vy{constructor(A){this.native=A,this.KeyMap=new Proxy([],{get:(g,e)=>e==="length"?Fg.COUNT:this.native._getAt_KeyMap(Number(e)),set:(g,e,I)=>this.native._setAt_KeyMap(Number(e),I)}),this.MouseDown=new Proxy([],{get:(g,e)=>e==="length"?5:this.native._getAt_MouseDown(Number(e)),set:(g,e,I)=>this.native._setAt_MouseDown(Number(e),I)}),this.KeysDown=new Proxy([],{get:(g,e)=>e==="length"?512:this.native._getAt_KeysDown(Number(e)),set:(g,e,I)=>this.native._setAt_KeysDown(Number(e),I)}),this.NavInputs=new Proxy([],{get:(g,e)=>e==="length"?fA.COUNT:this.native._getAt_NavInputs(Number(e)),set:(g,e,I)=>this.native._setAt_NavInputs(Number(e),I)}),this.MouseClickedPos=new Proxy([],{get:(g,e)=>e==="length"?5:this.native._getAt_MouseClickedPos(Number(e))}),this.MouseDownDuration=new Proxy([],{get:(g,e)=>e==="length"?5:this.native._getAt_MouseDownDuration(Number(e))}),this.KeysDownDuration=new Proxy([],{get:(g,e)=>e==="length"?512:this.native._getAt_KeysDownDuration(Number(e))}),this.NavInputsDownDuration=new Proxy([],{get:(g,e)=>e==="length"?fA.COUNT:this.native._getAt_NavInputsDownDuration(Number(e))})}get ConfigFlags(){return this.native.ConfigFlags}set ConfigFlags(A){this.native.ConfigFlags=A}get BackendFlags(){return this.native.BackendFlags}set BackendFlags(A){this.native.BackendFlags=A}get DisplaySize(){return this.native.DisplaySize}get DeltaTime(){return this.native.DeltaTime}set DeltaTime(A){this.native.DeltaTime=A}get IniSavingRate(){return this.native.IniSavingRate}set IniSavingRate(A){this.native.IniSavingRate=A}get IniFilename(){return this.native.IniFilename}set IniFilename(A){this.native.IniFilename=A}get LogFilename(){return this.native.LogFilename}set LogFilename(A){this.native.LogFilename=A}get MouseDoubleClickTime(){return this.native.MouseDoubleClickTime}set MouseDoubleClickTime(A){this.native.MouseDoubleClickTime=A}get MouseDoubleClickMaxDist(){return this.native.MouseDoubleClickMaxDist}set MouseDoubleClickMaxDist(A){this.native.MouseDoubleClickMaxDist=A}get MouseDragThreshold(){return this.native.MouseDragThreshold}set MouseDragThreshold(A){this.native.MouseDragThreshold=A}get KeyRepeatDelay(){return this.native.KeyRepeatDelay}set KeyRepeatDelay(A){this.native.KeyRepeatDelay=A}get KeyRepeatRate(){return this.native.KeyRepeatRate}set KeyRepeatRate(A){this.native.KeyRepeatRate=A}get UserData(){return this.native.UserData}set UserData(A){this.native.UserData=A}get Fonts(){return new Jy(this.native.Fonts)}get FontGlobalScale(){return this.native.FontGlobalScale}set FontGlobalScale(A){this.native.FontGlobalScale=A}get FontAllowUserScaling(){return this.native.FontAllowUserScaling}set FontAllowUserScaling(A){this.native.FontAllowUserScaling=A}get FontDefault(){const A=this.native.FontDefault;return A===null?null:new tC(A)}set FontDefault(A){this.native.FontDefault=A&&A.native}get DisplayFramebufferScale(){return this.native.DisplayFramebufferScale}get ConfigMacOSXBehaviors(){return this.native.ConfigMacOSXBehaviors}set ConfigMacOSXBehaviors(A){this.native.ConfigMacOSXBehaviors=A}get ConfigInputTextCursorBlink(){return this.native.ConfigInputTextCursorBlink}set ConfigInputTextCursorBlink(A){this.native.ConfigInputTextCursorBlink=A}get ConfigDragClickToInputText(){return this.native.ConfigDragClickToInputText}set ConfigDragClickToInputText(A){this.native.ConfigDragClickToInputText=A}get ConfigWindowsResizeFromEdges(){return this.native.ConfigWindowsResizeFromEdges}set ConfigWindowsResizeFromEdges(A){this.native.ConfigWindowsResizeFromEdges=A}get ConfigWindowsMoveFromTitleBarOnly(){return this.native.ConfigWindowsMoveFromTitleBarOnly}set ConfigWindowsMoveFromTitleBarOnly(A){this.native.ConfigWindowsMoveFromTitleBarOnly=A}get ConfigMemoryCompactTimer(){return this.native.ConfigMemoryCompactTimer}set ConfigMemoryCompactTimer(A){this.native.ConfigMemoryCompactTimer=A}get BackendPlatformName(){return this.native.BackendPlatformName}set BackendPlatformName(A){this.native.BackendPlatformName=A}get BackendRendererName(){return this.native.BackendRendererName}set BackendRendererName(A){this.native.BackendRendererName=A}get BackendPlatformUserData(){return this.native.BackendPlatformUserData}set BackendPlatformUserData(A){this.native.BackendPlatformUserData=A}get BackendRendererUserData(){return this.native.BackendRendererUserData}set BackendRendererUserData(A){this.native.BackendRendererUserData=A}get BackendLanguageUserData(){return this.native.BackendLanguageUserData}set BackendLanguageUserData(A){this.native.BackendLanguageUserData=A}get GetClipboardTextFn(){return this.native.GetClipboardTextFn}set GetClipboardTextFn(A){this.native.GetClipboardTextFn=A}get SetClipboardTextFn(){return this.native.SetClipboardTextFn}set SetClipboardTextFn(A){this.native.SetClipboardTextFn=A}get ClipboardUserData(){return this.native.ClipboardUserData}set ClipboardUserData(A){this.native.ClipboardUserData=A}get MousePos(){return this.native.MousePos}get MouseWheel(){return this.native.MouseWheel}set MouseWheel(A){this.native.MouseWheel=A}get MouseWheelH(){return this.native.MouseWheelH}set MouseWheelH(A){this.native.MouseWheelH=A}get MouseDrawCursor(){return this.native.MouseDrawCursor}set MouseDrawCursor(A){this.native.MouseDrawCursor=A}get KeyCtrl(){return this.native.KeyCtrl}set KeyCtrl(A){this.native.KeyCtrl=A}get KeyShift(){return this.native.KeyShift}set KeyShift(A){this.native.KeyShift=A}get KeyAlt(){return this.native.KeyAlt}set KeyAlt(A){this.native.KeyAlt=A}get KeySuper(){return this.native.KeySuper}set KeySuper(A){this.native.KeySuper=A}AddInputCharacter(A){this.native.AddInputCharacter(A)}AddInputCharacterUTF16(A){this.native.AddInputCharacterUTF16(A)}AddInputCharactersUTF8(A){this.native.AddInputCharactersUTF8(A)}ClearInputCharacters(){this.native.ClearInputCharacters()}get WantCaptureMouse(){return this.native.WantCaptureMouse}set WantCaptureMouse(A){this.native.WantCaptureMouse=A}get WantCaptureKeyboard(){return this.native.WantCaptureKeyboard}set WantCaptureKeyboard(A){this.native.WantCaptureKeyboard=A}get WantTextInput(){return this.native.WantTextInput}set WantTextInput(A){this.native.WantTextInput=A}get WantSetMousePos(){return this.native.WantSetMousePos}set WantSetMousePos(A){this.native.WantSetMousePos=A}get WantSaveIniSettings(){return this.native.WantSaveIniSettings}set WantSaveIniSettings(A){this.native.WantSaveIniSettings=A}get NavActive(){return this.native.NavActive}set NavActive(A){this.native.NavActive=A}get NavVisible(){return this.native.NavVisible}set NavVisible(A){this.native.NavVisible=A}get Framerate(){return this.native.Framerate}get MetricsRenderVertices(){return this.native.MetricsRenderVertices}get MetricsRenderIndices(){return this.native.MetricsRenderIndices}get MetricsRenderWindows(){return this.native.MetricsRenderWindows}get MetricsActiveWindows(){return this.native.MetricsActiveWindows}get MetricsActiveAllocations(){return this.native.MetricsActiveAllocations}get MouseDelta(){return this.native.MouseDelta}get WantCaptureMouseUnlessPopupClose(){return this.native.WantCaptureMouseUnlessPopupClose}set WantCaptureMouseUnlessPopupClose(A){this.native.WantCaptureMouseUnlessPopupClose=A}}class Ug{constructor(A){this.native=A}static getTexture(A){if(Ug.current_ctx===null)throw new Error;return Ug.current_ctx._getTexture(A)}static setTexture(A){if(Ug.current_ctx===null)throw new Error;return Ug.current_ctx._setTexture(A)}_getTexture(A){return Ug.textures[A]||null}_setTexture(A){let g=Ug.textures.indexOf(A);if(g===-1){for(let e=0;e<Ug.textures.length;++e)if(Ug.textures[e]===null)return Ug.textures[e]=A,e;g=Ug.textures.length,Ug.textures.push(A)}return g}}Ug.current_ctx=null;Ug.textures=[];function xy(t=null){const A=new Ug(JA.CreateContext(t!==null?t.native:null));return Ug.current_ctx===null&&(Ug.current_ctx=A),A}function dt(){return new vy(JA.GetIO())}function Yy(){JA.NewFrame()}function by(){JA.EndFrame()}function Ty(){JA.Render()}function ka(){const t=JA.GetDrawData();return t===null?null:new ky(t)}function _y(t=null){if(t===null)JA.StyleColorsDark(null);else if(t.internal instanceof JA.ImGuiStyle)JA.StyleColorsDark(t.internal);else{const A=new JA.ImGuiStyle,g=new vC(A);g.Copy(t),JA.StyleColorsDark(A),t.Copy(g),A.delete()}}function qy(t,A=null,g=0){if(A===null)return JA.Begin(t,null,g);if(Array.isArray(A))return JA.Begin(t,A,g);{const e=[A()],I=JA.Begin(t,e,g);return A(e[0]),I}}function Py(){JA.End()}function Oy(t,A=Ig.ZERO,g=!1,e=0){return JA.BeginChild(t,A,g,e)}function Vy(){JA.EndChild()}function Wy(t,A=0,g=Ig.ZERO){JA.SetNextWindowPos(t,A,g)}function zy(t,A=0){JA.SetNextWindowSize(t,A)}function Zy(t){JA.PushID(t)}function Xy(){JA.PopID()}function rn(t){JA.Text(t)}function Vi(t,A=Ig.ZERO){return JA.Button(t,A)}function jy(t,A,g=1,e=0,I=0,C="%.3f",i=0){const B=dy(A),Q=JA.DragFloat(t,B,g,e,I,C,i);return fy(B,A),Q}function $y(t,A,g=1,e=0,I=0,C="%.3f",i=0){const B=uy(A),Q=JA.DragFloat3(t,B,g,e,I,C,i);return wy(B,A),Q}function Ap(t,A,g=1,e=0,I=0,C="%.3f",i=0){const B=yy(A),Q=JA.DragFloat4(t,B,g,e,I,C,i);return py(B,A),Q}function gp(t,A,g=A instanceof En?A.size:Ry,e=0,I=null,C=null){const i=I&&(B=>I(new Ly(B,C)))||null;if(Array.isArray(A))return JA.InputText(t,A,g,e,i,null);if(A instanceof En){const B=[A.buffer],Q=Math.min(g,A.size),n=JA.InputText(t,B,Q,e,i,null);return A.buffer=B[0],n}else{const B=[A()],Q=JA.InputText(t,B,g+1,e,i,null);return A(B[0]),Q}}function tp(t,A,g=0){const e=Sy(A),I=JA.ColorEdit4(t,e,g);return My(e,A),I}function ep(...t){if(typeof t[0]=="string")if(t.length<3){const A=t[0],g=t[1]||0;return JA.TreeNodeEx_A(A,g)}else{const A=t[0],g=t[1],e=t[2];return JA.TreeNodeEx_B(A,g,e)}else{const A=t[0],g=t[1],e=t[2];return JA.TreeNodeEx_C(A,g,e)}}function Ip(){JA.TreePop()}function Cp(t,A,g=0,e=Ig.ZERO,I=0){return JA.BeginTable(t,A,g,e,I)}function ip(){JA.EndTable()}function js(t=0,A=0){JA.TableNextRow(t,A)}function VI(){return JA.TableNextColumn()}function mQ(t,A=0,g=0,e=0){JA.TableSetupColumn(t,A,g,e)}function Bp(t=0){return JA.IsItemClicked(t)}function Qp(){return JA.IsAnyItemActive()}function np(){return JA.GetMouseCursor()}function Ep(t,A=0){JA.LoadIniSettingsFromMemory(t)}function op(t=null){return JA.SaveIniSettingsToMemory()}let eC="",Dg=null,L=null,qt=null,Wi=null,zi=null,Ga=null,an=null,cn=-1,hn=-1,ln=-1,Dn=null,ma=null,KQ=null,fg=null,$s=0;function sp(t){t.clipboardData&&t.clipboardData.setData("text/plain",eC),t.preventDefault()}function rp(t){t.clipboardData&&t.clipboardData.setData("text/plain",eC),t.preventDefault()}function ap(t){t.clipboardData&&(eC=t.clipboardData.getData("text/plain")),t.preventDefault()}function Ar(){Dg!==null&&(Dg.width=Dg.scrollWidth,Dg.height=Dg.scrollHeight)}function cp(t){console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",t.gamepad.index,t.gamepad.id,t.gamepad.buttons.length,t.gamepad.axes.length)}function hp(t){console.log("Gamepad disconnected at index %d: %s.",t.gamepad.index,t.gamepad.id)}function lp(t){const A=dt();A.KeyCtrl=!1,A.KeyShift=!1,A.KeyAlt=!1,A.KeySuper=!1;for(let g=0;g<A.KeysDown.length;++g)A.KeysDown[g]=!1;for(let g=0;g<A.MouseDown.length;++g)A.MouseDown[g]=!1}const Xn={NumpadEnter:176};function Dp(t){const A=dt();A.KeyCtrl=t.ctrlKey,A.KeyShift=t.shiftKey,A.KeyAlt=t.altKey,A.KeySuper=t.metaKey;const g=Xn[t.code]||t.keyCode;Fa(g>=0&&g<Na(A.KeysDown)),A.KeysDown[g]=!0,t.key==="Tab"&&t.preventDefault()}function dp(t){const A=dt();A.KeyCtrl=t.ctrlKey,A.KeyShift=t.shiftKey,A.KeyAlt=t.altKey,A.KeySuper=t.metaKey;const g=Xn[t.code]||t.keyCode;Fa(g>=0&&g<Na(A.KeysDown)),A.KeysDown[g]=!1,A.WantCaptureKeyboard&&t.preventDefault()}function fp(t){const A=dt();A.AddInputCharacter(t.charCode),A.WantCaptureKeyboard&&t.preventDefault()}function up(t){const A=dt();A.MousePos.x=t.offsetX,A.MousePos.y=t.offsetY,A.WantCaptureMouse&&t.preventDefault()}const Ka=[0,2,1,3,4];function wp(t){const A=dt();A.MousePos.x=t.offsetX,A.MousePos.y=t.offsetY,A.MouseDown[Ka[t.button]]=!0}function yp(t){dt().WantCaptureMouse&&t.preventDefault()}function pp(t){const A=dt();A.MouseDown[Ka[t.button]]=!1,A.WantCaptureMouse&&t.preventDefault()}function Sp(t){const A=dt();let g=1;switch(t.deltaMode){case t.DOM_DELTA_PIXEL:g=.01;break;case t.DOM_DELTA_LINE:g=.2;break;case t.DOM_DELTA_PAGE:g=1;break}A.MouseWheelH=t.deltaX*g,A.MouseWheel=-t.deltaY*g,A.WantCaptureMouse&&t.preventDefault()}function Mp(t){const A=dt();typeof window<"u"?(A.BackendPlatformName="imgui_impl_browser",Ep(window.localStorage.getItem("imgui.ini")||"")):A.BackendPlatformName="imgui_impl_console",typeof navigator<"u"&&(A.ConfigMacOSXBehaviors=navigator.platform.match(/Mac/)!==null),typeof document<"u"&&(document.body.addEventListener("copy",sp),document.body.addEventListener("cut",rp),document.body.addEventListener("paste",ap)),A.SetClipboardTextFn=(g,e)=>{eC=e,typeof navigator<"u"&&typeof navigator.clipboard<"u"&&navigator.clipboard.writeText(eC).then(()=>{})},A.GetClipboardTextFn=g=>eC,A.ClipboardUserData=null,typeof window<"u"&&(window.addEventListener("resize",Ar),window.addEventListener("gamepadconnected",cp),window.addEventListener("gamepaddisconnected",hp)),typeof window<"u"&&(t instanceof HTMLCanvasElement&&(Dg=t,t=Dg.getContext("webgl2",{alpha:!1})||Dg.getContext("webgl",{alpha:!1})||Dg.getContext("2d")),typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext?(A.BackendRendererName="imgui_impl_webgl2",Dg=Dg||t.canvas,L=t):typeof WebGLRenderingContext<"u"&&t instanceof WebGLRenderingContext?(A.BackendRendererName="imgui_impl_webgl",Dg=Dg||t.canvas,L=t):typeof CanvasRenderingContext2D<"u"&&t instanceof CanvasRenderingContext2D&&(A.BackendRendererName="imgui_impl_2d",Dg=Dg||t.canvas,fg=t)),Dg!==null&&(Ar(),Dg.style.touchAction="none",Dg.addEventListener("blur",lp),Dg.addEventListener("keydown",Dp),Dg.addEventListener("keyup",dp),Dg.addEventListener("keypress",fp),Dg.addEventListener("pointermove",up),Dg.addEventListener("pointerdown",wp),Dg.addEventListener("contextmenu",yp),Dg.addEventListener("pointerup",pp),Dg.addEventListener("wheel",Sp)),A.BackendFlags|=lB.HasMouseCursors,A.KeyMap[Fg.Tab]=9,A.KeyMap[Fg.LeftArrow]=37,A.KeyMap[Fg.RightArrow]=39,A.KeyMap[Fg.UpArrow]=38,A.KeyMap[Fg.DownArrow]=40,A.KeyMap[Fg.PageUp]=33,A.KeyMap[Fg.PageDown]=34,A.KeyMap[Fg.Home]=36,A.KeyMap[Fg.End]=35,A.KeyMap[Fg.Insert]=45,A.KeyMap[Fg.Delete]=46,A.KeyMap[Fg.Backspace]=8,A.KeyMap[Fg.Space]=32,A.KeyMap[Fg.Enter]=13,A.KeyMap[Fg.Escape]=27,A.KeyMap[Fg.KeyPadEnter]=Xn.NumpadEnter,A.KeyMap[Fg.A]=65,A.KeyMap[Fg.C]=67,A.KeyMap[Fg.V]=86,A.KeyMap[Fg.X]=88,A.KeyMap[Fg.Y]=89,A.KeyMap[Fg.Z]=90,Np()}function Rp(t){const A=dt();A.WantSaveIniSettings&&(A.WantSaveIniSettings=!1,typeof window<"u"&&window.localStorage.setItem("imgui.ini",op()));const g=Dg&&Dg.scrollWidth||640,e=Dg&&Dg.scrollHeight||480,I=L&&L.drawingBufferWidth||g,C=L&&L.drawingBufferHeight||e;A.DisplaySize.x=g,A.DisplaySize.y=e,A.DisplayFramebufferScale.x=g>0?I/g:0,A.DisplayFramebufferScale.y=e>0?C/e:0;const i=t-$s;if($s=t,A.DeltaTime=i/1e3,A.WantSetMousePos&&console.log("TODO: MousePos",A.MousePos.x,A.MousePos.y),typeof document<"u")if(A.MouseDrawCursor)document.body.style.cursor="none";else switch(np()){case Mt.None:document.body.style.cursor="none";break;default:case Mt.Arrow:document.body.style.cursor="default";break;case Mt.TextInput:document.body.style.cursor="text";break;case Mt.ResizeAll:document.body.style.cursor="all-scroll";break;case Mt.ResizeNS:document.body.style.cursor="ns-resize";break;case Mt.ResizeEW:document.body.style.cursor="ew-resize";break;case Mt.ResizeNESW:document.body.style.cursor="nesw-resize";break;case Mt.ResizeNWSE:document.body.style.cursor="nwse-resize";break;case Mt.Hand:document.body.style.cursor="move";break;case Mt.NotAllowed:document.body.style.cursor="not-allowed";break}for(let n=0;n<A.NavInputs.length;++n);if(A.ConfigFlags&sn.NavEnableGamepad){const n=typeof navigator<"u"&&typeof navigator.getGamepads=="function"?navigator.getGamepads():[];for(let E=0;E<n.length;++E){let h=function(M,K){o&&s>K&&o.buttons[K].pressed&&(A.NavInputs[M]=1)},d=function(M,K,G,U){if(!o)return;let W=r>K?o.axes[K]:G;W=(W-G)/(U-G),W>1&&(W=1),A.NavInputs[M]<W&&(A.NavInputs[M]=W)};var B=h,Q=d;const o=n[E];if(!o)continue;A.BackendFlags|=lB.HasGamepad;const s=o.buttons.length,r=o.axes.length,a=o.id.match(/^([0-9a-f]{4})-([0-9a-f]{4})-.*$/),c=o.id.match(/^.*\(.*Vendor: ([0-9a-f]{4}) Product: ([0-9a-f]{4})\).*$/),R=a&&a[1]||c&&c[1]||"0000",y=a&&a[2]||c&&c[2]||"0000";switch(R+y){case"046dc216":h(fA.Activate,1),h(fA.Cancel,2),h(fA.Menu,0),h(fA.Input,3),d(fA.DpadLeft,4,-.3,-.9),d(fA.DpadRight,4,.3,.9),d(fA.DpadUp,5,-.3,-.9),d(fA.DpadDown,5,.3,.9),h(fA.FocusPrev,4),h(fA.FocusNext,5),h(fA.TweakSlow,6),h(fA.TweakFast,7),d(fA.LStickLeft,0,-.3,-.9),d(fA.LStickRight,0,.3,.9),d(fA.LStickUp,1,-.3,-.9),d(fA.LStickDown,1,.3,.9);break;case"046dc21d":h(fA.Activate,0),h(fA.Cancel,1),h(fA.Menu,2),h(fA.Input,3),h(fA.DpadLeft,14),h(fA.DpadRight,15),h(fA.DpadUp,12),h(fA.DpadDown,13),h(fA.FocusPrev,4),h(fA.FocusNext,5),d(fA.TweakSlow,6,.3,.9),d(fA.TweakFast,7,.3,.9),d(fA.LStickLeft,0,-.3,-.9),d(fA.LStickRight,0,.3,.9),d(fA.LStickUp,1,-.3,-.9),d(fA.LStickDown,1,.3,.9);break;case"2dc86001":case"2dc86101":h(fA.Activate,1),h(fA.Cancel,0),h(fA.Menu,4),h(fA.Input,3),d(fA.DpadLeft,6,-.3,-.9),d(fA.DpadRight,6,.3,.9),d(fA.DpadUp,7,-.3,-.9),d(fA.DpadDown,7,.3,.9),h(fA.FocusPrev,6),h(fA.FocusNext,7),h(fA.TweakSlow,8),h(fA.TweakFast,9),d(fA.LStickLeft,0,-.3,-.9),d(fA.LStickRight,0,.3,.9),d(fA.LStickUp,1,-.3,-.9),d(fA.LStickDown,1,.3,.9);break;default:h(fA.Activate,0),h(fA.Cancel,1),h(fA.Menu,2),h(fA.Input,3),h(fA.DpadLeft,14),h(fA.DpadRight,15),h(fA.DpadUp,12),h(fA.DpadDown,13),h(fA.FocusPrev,4),h(fA.FocusNext,5),h(fA.TweakSlow,6),h(fA.TweakFast,7),d(fA.LStickLeft,0,-.3,-.9),d(fA.LStickRight,0,.3,.9),d(fA.LStickUp,1,-.3,-.9),d(fA.LStickDown,1,.3,.9);break}}}}function Lp(t=ka()){const A=dt();if(t===null)throw new Error;L||fg||console.log(t);const g=A.DisplaySize.x*A.DisplayFramebufferScale.x,e=A.DisplaySize.y*A.DisplayFramebufferScale.y;if(g===0||e===0)return;t.ScaleClipRects(A.DisplayFramebufferScale);const I=typeof WebGL2RenderingContext<"u"&&L instanceof WebGL2RenderingContext&&L||null,C=L&&L.getExtension("OES_vertex_array_object")||null,i=L&&L.getParameter(L.ACTIVE_TEXTURE)||null,B=L&&L.getParameter(L.CURRENT_PROGRAM)||null,Q=L&&L.getParameter(L.TEXTURE_BINDING_2D)||null,n=L&&L.getParameter(L.ARRAY_BUFFER_BINDING)||null,E=L&&L.getParameter(L.ELEMENT_ARRAY_BUFFER_BINDING)||null,o=I&&I.getParameter(I.VERTEX_ARRAY_BINDING)||L&&C&&L.getParameter(C.VERTEX_ARRAY_BINDING_OES)||null,s=L&&L.getParameter(L.VIEWPORT)||null,r=L&&L.getParameter(L.SCISSOR_BOX)||null,h=L&&L.getParameter(L.BLEND_SRC_RGB)||null,d=L&&L.getParameter(L.BLEND_DST_RGB)||null,a=L&&L.getParameter(L.BLEND_SRC_ALPHA)||null,c=L&&L.getParameter(L.BLEND_DST_ALPHA)||null,R=L&&L.getParameter(L.BLEND_EQUATION_RGB)||null,y=L&&L.getParameter(L.BLEND_EQUATION_ALPHA)||null,M=L&&L.getParameter(L.BLEND)||null,K=L&&L.getParameter(L.CULL_FACE)||null,G=L&&L.getParameter(L.DEPTH_TEST)||null,U=L&&L.getParameter(L.SCISSOR_TEST)||null,W=I&&I.createVertexArray()||C&&C.createVertexArrayOES();L&&L.enable(L.BLEND),L&&L.blendEquation(L.FUNC_ADD),L&&L.blendFunc(L.SRC_ALPHA,L.ONE_MINUS_SRC_ALPHA),L&&L.disable(L.CULL_FACE),L&&L.disable(L.DEPTH_TEST),L&&L.enable(L.SCISSOR_TEST),L&&L.viewport(0,0,g,e);const BA=t.DisplayPos.x,f=t.DisplayPos.x+t.DisplaySize.x,N=t.DisplayPos.y,j=t.DisplayPos.y+t.DisplaySize.y,IA=new Float32Array([2/(f-BA),0,0,0,0,2/(N-j),0,0,0,0,-1,0,(f+BA)/(BA-f),(N+j)/(j-N),0,1]);L&&L.useProgram(qt),L&&L.uniform1i(Ga,0),L&&an&&L.uniformMatrix4fv(an,!1,IA),I&&I.bindVertexArray(W)||C&&C.bindVertexArrayOES(W),L&&L.bindBuffer(L.ARRAY_BUFFER,Dn),L&&L.enableVertexAttribArray(cn),L&&L.enableVertexAttribArray(hn),L&&L.enableVertexAttribArray(ln),L&&L.vertexAttribPointer(cn,2,L.FLOAT,!1,Tt,Fy),L&&L.vertexAttribPointer(hn,2,L.FLOAT,!1,Tt,Ny),L&&L.vertexAttribPointer(ln,4,L.UNSIGNED_BYTE,!0,Tt,Uy);const m=t.DisplayPos,V=L&&L.UNSIGNED_SHORT||0;t.IterateDrawLists(x=>{L||fg||console.log(x),L||fg||console.log("VtxBuffer.length",x.VtxBuffer.length),L||fg||console.log("IdxBuffer.length",x.IdxBuffer.length),L&&L.bindBuffer(L.ARRAY_BUFFER,Dn),L&&L.bufferData(L.ARRAY_BUFFER,x.VtxBuffer,L.STREAM_DRAW),L&&L.bindBuffer(L.ELEMENT_ARRAY_BUFFER,ma),L&&L.bufferData(L.ELEMENT_ARRAY_BUFFER,x.IdxBuffer,L.STREAM_DRAW),x.IterateDrawCmds(z=>{if(L||fg||console.log(z),L||fg||console.log("ElemCount",z.ElemCount),L||fg||console.log("ClipRect",z.ClipRect.x,e-z.ClipRect.w,z.ClipRect.z-z.ClipRect.x,z.ClipRect.w-z.ClipRect.y),L||fg||console.log("TextureId",z.TextureId),!L&&!fg){console.log("i: pos.x pos.y uv.x uv.y col");for(let O=0;O<Math.min(3,z.ElemCount);++O){const X=new $e(x.VtxBuffer.buffer,x.VtxBuffer.byteOffset+O*Tt);console.log(`${O}: ${X.pos[0].toFixed(2)} ${X.pos[1].toFixed(2)} ${X.uv[0].toFixed(5)} ${X.uv[1].toFixed(5)} ${("00000000"+X.col[0].toString(16)).substr(-8)}`)}}if(z.UserCallback!==null)z.UserCallback(x,z);else{const O=new Zg(z.ClipRect.x-m.x,z.ClipRect.y-m.y,z.ClipRect.z-m.x,z.ClipRect.w-m.y);if(O.x<g&&O.y<e&&O.z>=0&&O.w>=0&&(L&&L.scissor(O.x,e-O.w,O.z-O.x,O.w-O.y),L&&L.activeTexture(L.TEXTURE0),L&&L.bindTexture(L.TEXTURE_2D,z.TextureId),L&&L.drawElements(L.TRIANGLES,z.ElemCount,V,z.IdxOffset*zs),fg)){fg.save(),fg.beginPath(),fg.rect(O.x,O.y,O.z-O.x,O.w-O.y),fg.clip();const X=new Uint16Array(x.IdxBuffer.buffer,x.IdxBuffer.byteOffset+z.IdxOffset*zs);for(let $=0;$<z.ElemCount;$+=3){const EA=X[$+0],cA=X[$+1],xA=X[$+2],Y=new $e(x.VtxBuffer.buffer,x.VtxBuffer.byteOffset+EA*Tt),eA=new $e(x.VtxBuffer.buffer,x.VtxBuffer.byteOffset+cA*Tt),dA=new $e(x.VtxBuffer.buffer,x.VtxBuffer.byteOffset+xA*Tt),KA=X[$+3],NA=X[$+4],wA=X[$+5],Qg=new $e(x.VtxBuffer.buffer,x.VtxBuffer.byteOffset+KA*Tt),qA=new $e(x.VtxBuffer.buffer,x.VtxBuffer.byteOffset+NA*Tt),v=new $e(x.VtxBuffer.buffer,x.VtxBuffer.byteOffset+wA*Tt);let hg=!0,hA=Y,GA=Y,uA=Y,jA=Y;for(const yA of[eA,dA,Qg,qA,v]){let S=!1;yA.pos[0]<=hA.pos[0]&&yA.pos[1]<=hA.pos[1]&&(hA=yA,S=!0),yA.pos[0]<=GA.pos[0]&&yA.pos[1]>=GA.pos[1]&&(GA=yA,S=!0),yA.pos[0]>=uA.pos[0]&&yA.pos[1]<=uA.pos[1]&&(uA=yA,S=!0),yA.pos[0]>=jA.pos[0]&&yA.pos[1]>=jA.pos[1]&&(jA=yA,S=!0),S||(hg=!1)}if(hg=hg&&hA.pos[0]===GA.pos[0],hg=hg&&uA.pos[0]===jA.pos[0],hg=hg&&hA.pos[1]===uA.pos[1],hg=hg&&GA.pos[1]===jA.pos[1],hg){if(hA.uv[0]===jA.uv[0]||hA.uv[1]===jA.uv[1])fg.beginPath(),fg.rect(hA.pos[0],hA.pos[1],jA.pos[0]-hA.pos[0],jA.pos[1]-hA.pos[1]),fg.fillStyle=`rgba(${Y.col[0]>>0&255}, ${Y.col[0]>>8&255}, ${Y.col[0]>>16&255}, ${(Y.col[0]>>24&255)/255})`,fg.fill();else{const yA=z.TextureId,S=yA instanceof HTMLVideoElement?yA.videoWidth:yA.width,u=yA instanceof HTMLVideoElement?yA.videoHeight:yA.height;yA&&fg.drawImage(yA,hA.uv[0]*S,hA.uv[1]*u,(jA.uv[0]-hA.uv[0])*S,(jA.uv[1]-hA.uv[1])*u,hA.pos[0],hA.pos[1],jA.pos[0]-hA.pos[0],jA.pos[1]-hA.pos[1])}$+=3}else fg.beginPath(),fg.moveTo(Y.pos[0],Y.pos[1]),fg.lineTo(eA.pos[0],eA.pos[1]),fg.lineTo(dA.pos[0],dA.pos[1]),fg.closePath(),fg.fillStyle=`rgba(${Y.col[0]>>0&255}, ${Y.col[0]>>8&255}, ${Y.col[0]>>16&255}, ${(Y.col[0]>>24&255)/255})`,fg.fill()}fg.restore()}}})}),I&&I.deleteVertexArray(W)||C&&C.deleteVertexArrayOES(W),L&&B!==null&&L.useProgram(B),L&&Q!==null&&L.bindTexture(L.TEXTURE_2D,Q),L&&i!==null&&L.activeTexture(i),I&&I.bindVertexArray(o)||C&&C.bindVertexArrayOES(o),L&&n!==null&&L.bindBuffer(L.ARRAY_BUFFER,n),L&&E!==null&&L.bindBuffer(L.ELEMENT_ARRAY_BUFFER,E),L&&R!==null&&y!==null&&L.blendEquationSeparate(R,y),L&&h!==null&&a!==null&&d!==null&&c!==null&&L.blendFuncSeparate(h,a,d,c),L&&(M?L.enable(L.BLEND):L.disable(L.BLEND)),L&&(K?L.enable(L.CULL_FACE):L.disable(L.CULL_FACE)),L&&(G?L.enable(L.DEPTH_TEST):L.disable(L.DEPTH_TEST)),L&&(U?L.enable(L.SCISSOR_TEST):L.disable(L.SCISSOR_TEST)),L&&s!==null&&L.viewport(s[0],s[1],s[2],s[3]),L&&r!==null&&L.scissor(r[0],r[1],r[2],r[3])}function Fp(){const t=dt(),A=L&&L.getParameter(L.TEXTURE_BINDING_2D),{width:g,height:e,pixels:I}=t.Fonts.GetTexDataAsRGBA32();if(KQ=L&&L.createTexture(),L&&L.bindTexture(L.TEXTURE_2D,KQ),L&&L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,L.LINEAR),L&&L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,L.LINEAR),L&&L.texImage2D(L.TEXTURE_2D,0,L.RGBA,g,e,0,L.RGBA,L.UNSIGNED_BYTE,I),t.Fonts.TexID=KQ||{foo:"bar"},fg){const C=document.createElement("canvas");C.width=g,C.height=e;const i=C.getContext("2d");if(i===null)throw new Error;const B=i.getImageData(0,0,g,e);B.data.set(I),i.putImageData(B,0,0),t.Fonts.TexID=C}L&&A&&L.bindTexture(L.TEXTURE_2D,A)}function Np(){const t=["uniform mat4 ProjMtx;","attribute vec2 Position;","attribute vec2 UV;","attribute vec4 Color;","varying vec2 Frag_UV;","varying vec4 Frag_Color;","void main() {","	Frag_UV = UV;","	Frag_Color = Color;","	gl_Position = ProjMtx * vec4(Position.xy,0,1);","}"],A=["precision mediump float;","uniform sampler2D Texture;","varying vec2 Frag_UV;","varying vec4 Frag_Color;","void main() {","	gl_FragColor = Frag_Color * texture2D(Texture, Frag_UV);","}"];qt=L&&L.createProgram(),Wi=L&&L.createShader(L.VERTEX_SHADER),zi=L&&L.createShader(L.FRAGMENT_SHADER),L&&L.shaderSource(Wi,t.join(`
`)),L&&L.shaderSource(zi,A.join(`
`)),L&&L.compileShader(Wi),L&&L.compileShader(zi),L&&L.attachShader(qt,Wi),L&&L.attachShader(qt,zi),L&&L.linkProgram(qt),Ga=L&&L.getUniformLocation(qt,"Texture"),an=L&&L.getUniformLocation(qt,"ProjMtx"),cn=L&&L.getAttribLocation(qt,"Position")||0,hn=L&&L.getAttribLocation(qt,"UV")||0,ln=L&&L.getAttribLocation(qt,"Color")||0,Dn=L&&L.createBuffer(),ma=L&&L.createBuffer(),Fp()}let Zi;const Up=new Uint8Array(16);function kp(){if(!Zi&&(Zi=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Zi))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Zi(Up)}const jg=[];for(let t=0;t<256;++t)jg.push((t+256).toString(16).slice(1));function Gp(t,A=0){return jg[t[A+0]]+jg[t[A+1]]+jg[t[A+2]]+jg[t[A+3]]+"-"+jg[t[A+4]]+jg[t[A+5]]+"-"+jg[t[A+6]]+jg[t[A+7]]+"-"+jg[t[A+8]]+jg[t[A+9]]+"-"+jg[t[A+10]]+jg[t[A+11]]+jg[t[A+12]]+jg[t[A+13]]+jg[t[A+14]]+jg[t[A+15]]}const mp=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),gr={randomUUID:mp};function DB(t,A,g){if(gr.randomUUID&&!A&&!t)return gr.randomUUID();t=t||{};const e=t.random||(t.rng||kp)();if(e[6]=e[6]&15|64,e[8]=e[8]&63|128,A){g=g||0;for(let I=0;I<16;++I)A[g+I]=e[I];return A}return Gp(e)}function Sg(t){return typeof t<"u"&&t!==null}function Ja(t,A){if(!Sg(t)||!Sg(A))return!1;if(Object.keys(t).length!==Object.keys(A).length)return!0;let g=!1;return Object.entries(t).forEach(([e,I])=>{const C=A[e];if(typeof I=="object"){g=g||Ja(I,C);return}g=g||I!==C}),g}const Kp=["extensionsUsed","extensionsRequired"],eB=["buffers","bufferViews","accessors","animations","skins","images","samplers","textures","materials","meshes","cameras","nodes","scenes"],Jp=["asset","extensions","extras"];function Ht(t){var A,g;return"get"in t?t.get("extensions").ZF_id.id:(g=(A=t==null?void 0:t.extensions)==null?void 0:A.ZF_id)==null?void 0:g.id}function Hp(t){const A=t;return this.COLLECTION_PROPS.forEach(g=>{(A[g]||[]).forEach(e=>{if(e.extensions=e.extensions||{},!(Sg(e.extensions.ZF_id)&&!e.extensions.ZF_id.invalid)){if(e.extensions.ZF_id=e.extensions.ZF_id||{},e.extensions.ZF_id.id=e.extensions.ZF_id.id||DB(),g==="bufferViews"){const I=A.buffers[e.buffer],C=Ht(I);e.extensions.ZF_id.buffer=C}if(g==="accessors"){const I=A.bufferViews[e.bufferView],C=Ht(I);e.extensions.ZF_id.bufferView=C}if(g==="meshes"&&(e.extensions.ZF_id.primitives=(e.primitives||[]).map(I=>{const C={};return Sg(I.material)&&(C.material=Ht(A.materials[I.material])),Sg(I.indices)&&(C.indices=Ht(A.accessors[I.indices])),C.attributes=Object.fromEntries(Object.entries(I.attributes).map(([i,B])=>[i,Ht(A.accessors[B])])),C})),g==="nodes"){if(Sg(e.mesh)){const I=A.meshes[e.mesh],C=Ht(I);e.extensions.ZF_id.mesh=C}Sg(e.children)&&(e.extensions.ZF_id.children=[]),(e.children||[]).forEach(I=>{const C=A.nodes[I];let i=Ht(C);Sg(i)||(i=DB(),C.extensions=C.extensions||{},C.extensions.ZF_id=C.extensions.ZF_id||{},C.extensions.ZF_id.id=i,C.extensions.ZF_id.invalid=!0),e.extensions.ZF_id.children.push(i)}),e.extensions.ZF_id.invalid&&delete e.extensions.ZF_id.invalid}g==="scenes"&&Sg(e.nodes)&&(e.extensions.ZF_id.nodes=e.nodes.map(I=>A.nodes[I].extensions.ZF_id.id))}})}),A}function vp(t){const A=t;this.COLLECTION_PROPS.forEach(g=>{(A[g]||[]).forEach(e=>{e.name=e.name||""})})}function xp(t){(t.nodes||[]).forEach(g=>{Sg(g.matrix)&&(g.translation=[0,0,0],g.rotation=[0,0,0,1],g.scale=[1,1,1],delete g.matrix)})}class jn{constructor(A,g,e){const I=e??{};this.name=A,this.key=g,this.size=I.size??1,this.isVisible=!0}update(A,g,e){const I=[];if(!this.isVisible)return[];Wy(g),zy(e),qy(this.name,null,on.AlwaysAutoResize);const C=JSON.parse(JSON.stringify(A));if(Sg(A)){const i=this.draw(C);I.push(...i)}return Py(),Ja(A,C)&&I.push({action:"update",key:this.key,id:Ht(C),data:C}),I}draw(A){}}function Qi(t,A){let g=t;return A.split(".").forEach(e=>{typeof g>"u"||(g=g[e])}),g}function ni(t,A,g){const e=A.split("."),I=e[e.length-1],C=e.slice(0,e.length-1);let i=t;return C.forEach(B=>{i=i[B]}),i[I]=g,g}function $n(t,A,g){gp(t,(e=Qi(A,g))=>ni(A,g,e),100)}function Ha(t,A,g,e=.001,I=0,C=1){const i=[Qi(A,g)];jy(t,i,e,I,C),ni(A,g,i[0])}function va(t,A,g,e=.001,I=0,C=1){const i={};[i.x,i.y,i.z]=Qi(A,g),$y(t,i,e,I,C),ni(A,g,[i.x,i.y,i.z])}function xa(t,A,g,e=.001,I=0,C=1){const i={};[i.x,i.y,i.z,i.w]=Qi(A,g),Ap(t,i,e,I,C),ni(A,g,[i.x,i.y,i.z,i.w])}function Ya(t,A,g,e=.001,I=0,C=1){const i={};[i.x,i.y,i.z,i.w]=Qi(A,g),tp(t,i,e),ni(A,g,[i.x,i.y,i.z,i.w])}function Yp(t){rn("JSON"),Oy("JSON"),rn(JSON.stringify(t,null,2)),Vy()}function ba(t,A,g){$n(t,A,g)}function bp(t,A,g,e){Ha(t,A,g,e==null?void 0:e.step,e==null?void 0:e.min,e==null?void 0:e.max)}function Tp(t,A,g,e){va(t,A,g,e==null?void 0:e.step,e==null?void 0:e.min,e==null?void 0:e.max)}function _p(t,A,g,e){xa(t,A,g,e==null?void 0:e.step,e==null?void 0:e.min,e==null?void 0:e.max)}function qp(t,A,g,e){Ya(t,A,g,e==null?void 0:e.step,e==null?void 0:e.min,e==null?void 0:e.max)}const Pp=Object.freeze(Object.defineProperty({__proto__:null,Color4:Ya,Json:Yp,Scalar:Ha,Text:$n,Vec3:va,Vec4:xa,color4:qp,float:bp,float3:Tp,float4:_p,text:ba},Symbol.toStringTag,{value:"Module"}));class HC extends jn{constructor(A,g){super(A.name,A.key,g),this.properties=A.properties}draw(A){return(this.properties??[]).forEach(g=>{var e;A[e=g.key]??(A[e]=g.default),Pp[g.type](g.label??"",A,g.key,g.args)}),[]}}class Op extends jn{constructor(A){super("Projects","",A),this.importUrl="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Embedded/Box.gltf",this.newProjectName="Untitled"}draw(A){const g=[];return Cp("Projects",3)&&(mQ("FirstButton",TC.WidthFixed),mQ("SecondButton",TC.WidthFixed),mQ("Name",TC.WidthStretch),VI(),VI(),Vi("Create")&&(g.push({action:"add",id:this.newProjectName,data:{id:DB()}}),this.newProjectName=""),VI(),$n("",this,"newProjectName"),js(),Object.entries(A).forEach(([e,I])=>{Zy(e),VI(),Vi("Switch")&&g.push({action:"rpc",id:"loadProject",data:[I.id]}),VI(),Vi("Delete")&&g.push({action:"delete",id:e}),VI(),rn(e),js(),Xy()}),ip()),Vi("Import")&&g.push({action:"rpc",id:"loadUrl",data:[this.importUrl]}),g}}class Ta extends jn{draw(A){const g=[],e=I=>{let C=BI.OpenOnArrow|BI.OpenOnDoubleClick|BI.SpanAvailWidth;I.id===A.selection&&(C|=BI.Selected),(!I.children||I.children.length===0)&&(C|=BI.Leaf);const i=I.name!==""?I.name??"":"---",B=ep(I.id,C,i);Bp()&&I.id!==A.selection&&g.push({action:"update",key:"selection",data:I.id}),B&&((I.children??[]).forEach(Q=>e(Q)),Ip())};return(A.items??[]).forEach(I=>e(I)),g}}class Vp extends Ta{constructor(A){super("Scene Graph","sceneGraph",A)}draw(A){const g=[];return A.name??(A.name=""),ba("Name",A,"name"),g.concat(super.draw(A))}}class Wp{constructor(A){this.canvas=A,this.containers=[{getSize:(g,e)=>[g*.17,e],getPos:(g,e)=>[0,0],views:{scenes:new Ta("Scenes","scenes",{size:1}),sceneGraph:new Vp({size:4}),projectList:new Op({size:1})}},{getSize:(g,e)=>[g*.17,e],getPos:(g,e)=>[g-g*.17,0],views:{node:new HC({name:"Node",key:"nodes",properties:[{label:"Name",type:"text",default:"",key:"name"},{label:"Position",key:"translation",default:[0,0,0],type:"float3",args:{step:.1,min:null,max:null}},{label:"Rotation",type:"float4",default:[0,0,0],key:"rotation"},{label:"Scale",type:"float3",default:[0,0,0],key:"scale"}]}),mesh:new HC({name:"Mesh",key:"meshes",properties:[{label:"Name",type:"text",default:"",key:"name"}]}),material:new HC({name:"Material",key:"materials",properties:[{label:"Name",type:"text",default:"",key:"name"},{label:"Base Color Factor",type:"color4",default:[0,0,0,1],key:"pbrMetallicRoughness.baseColorFactor"},{label:"Roughness Factor",type:"float",default:0,key:"pbrMetallicRoughness.roughnessFactor"},{label:"Metallic Factor",type:"float",default:0,key:"pbrMetallicRoughness.metallicFactor"}]}),texture:new HC({name:"Texture",key:"textures",properties:[{}]}),sampler:new HC({name:"Sampler",key:"samplers",properties:[{}]})}}]}isActive(){return Qp()}async init(){await Dy(),xy(),_y(),Mp(this.canvas)}update(A,g,e,I){Rp(A),Yy();const C={};return this.containers.forEach(i=>{const B=i.getSize(e,I),Q=i.getPos(e,I),n=Object.values(i.views).reduce((s,r)=>s+r.size,0),E=B[1]/n;let o=0;Object.entries(i.views).forEach(([s,r])=>{const h=g[s]??null,d=E*r.size,a=new Ig(Q[0],o),c=new Ig(B[0],d);C[s]=r.update(h,a,c),o+=d})}),by(),Ty(),C}render(){Lp(ka())}}const bt=()=>new Map,dn=t=>{const A=bt();return t.forEach((g,e)=>{A.set(e,g)}),A},Pe=(t,A,g)=>{let e=t.get(A);return e===void 0&&t.set(A,e=g()),e},zp=(t,A)=>{const g=[];for(const[e,I]of t)g.push(A(I,e));return g},Zp=(t,A)=>{for(const[g,e]of t)if(A(e,g))return!0;return!1},cC=()=>new Set,JQ=t=>t[t.length-1],Xp=(t,A)=>{for(let g=0;g<A.length;g++)t.push(A[g])},lI=Array.from,jp=Array.isArray;class _a{constructor(){this._observers=bt()}on(A,g){Pe(this._observers,A,cC).add(g)}once(A,g){const e=(...I)=>{this.off(A,e),g(...I)};this.on(A,e)}off(A,g){const e=this._observers.get(A);e!==void 0&&(e.delete(g),e.size===0&&this._observers.delete(A))}emit(A,g){return lI((this._observers.get(A)||bt()).values()).forEach(e=>e(...g))}destroy(){this._observers=bt()}}const Te=Math.floor,IB=Math.abs,qa=(t,A)=>t<A?t:A,pI=(t,A)=>t>A?t:A,Pa=t=>t!==0?t<0:1/t<0,tr=1,er=2,HQ=4,vQ=8,ZC=32,fe=64,Dt=128,GB=31,fn=63,sI=127,$p=2147483647,Oa=Number.MAX_SAFE_INTEGER,AS=Number.isInteger||(t=>typeof t=="number"&&isFinite(t)&&Te(t)===t),gS=t=>t.toLowerCase(),tS=/^\s*/g,eS=t=>t.replace(tS,""),IS=/([A-Z])/g,Ir=(t,A)=>eS(t.replace(IS,g=>`${A}${gS(g)}`)),CS=t=>{const A=unescape(encodeURIComponent(t)),g=A.length,e=new Uint8Array(g);for(let I=0;I<g;I++)e[I]=A.codePointAt(I);return e},XC=typeof TextEncoder<"u"?new TextEncoder:null,iS=t=>XC.encode(t),BS=XC?iS:CS;let _C=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});_C&&_C.decode(new Uint8Array).length===1&&(_C=null);class Ei{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}}const mB=()=>new Ei,QS=t=>{let A=t.cpos;for(let g=0;g<t.bufs.length;g++)A+=t.bufs[g].length;return A},zt=t=>{const A=new Uint8Array(QS(t));let g=0;for(let e=0;e<t.bufs.length;e++){const I=t.bufs[e];A.set(I,g),g+=I.length}return A.set(new Uint8Array(t.cbuf.buffer,0,t.cpos),g),A},nS=(t,A)=>{const g=t.cbuf.length;g-t.cpos<A&&(t.bufs.push(new Uint8Array(t.cbuf.buffer,0,t.cpos)),t.cbuf=new Uint8Array(pI(g,A)*2),t.cpos=0)},Pg=(t,A)=>{const g=t.cbuf.length;t.cpos===g&&(t.bufs.push(t.cbuf),t.cbuf=new Uint8Array(g*2),t.cpos=0),t.cbuf[t.cpos++]=A},un=Pg,sg=(t,A)=>{for(;A>sI;)Pg(t,Dt|sI&A),A=Te(A/128);Pg(t,sI&A)},AE=(t,A)=>{const g=Pa(A);for(g&&(A=-A),Pg(t,(A>fn?Dt:0)|(g?fe:0)|fn&A),A=Te(A/64);A>0;)Pg(t,(A>sI?Dt:0)|sI&A),A=Te(A/128)},wn=new Uint8Array(3e4),ES=wn.length/3,oS=(t,A)=>{if(A.length<ES){const g=XC.encodeInto(A,wn).written||0;sg(t,g);for(let e=0;e<g;e++)Pg(t,wn[e])}else ht(t,BS(A))},sS=(t,A)=>{const g=unescape(encodeURIComponent(A)),e=g.length;sg(t,e);for(let I=0;I<e;I++)Pg(t,g.codePointAt(I))},IC=XC&&XC.encodeInto?oS:sS,KB=(t,A)=>{const g=t.cbuf.length,e=t.cpos,I=qa(g-e,A.length),C=A.length-I;t.cbuf.set(A.subarray(0,I),e),t.cpos+=I,C>0&&(t.bufs.push(t.cbuf),t.cbuf=new Uint8Array(pI(g*2,C)),t.cbuf.set(A.subarray(I)),t.cpos=C)},ht=(t,A)=>{sg(t,A.byteLength),KB(t,A)},gE=(t,A)=>{nS(t,A);const g=new DataView(t.cbuf.buffer,t.cpos,A);return t.cpos+=A,g},rS=(t,A)=>gE(t,4).setFloat32(0,A,!1),aS=(t,A)=>gE(t,8).setFloat64(0,A,!1),cS=(t,A)=>gE(t,8).setBigInt64(0,A,!1),Cr=new DataView(new ArrayBuffer(4)),hS=t=>(Cr.setFloat32(0,t),Cr.getFloat32(0)===t),jC=(t,A)=>{switch(typeof A){case"string":Pg(t,119),IC(t,A);break;case"number":AS(A)&&IB(A)<=$p?(Pg(t,125),AE(t,A)):hS(A)?(Pg(t,124),rS(t,A)):(Pg(t,123),aS(t,A));break;case"bigint":Pg(t,122),cS(t,A);break;case"object":if(A===null)Pg(t,126);else if(jp(A)){Pg(t,117),sg(t,A.length);for(let g=0;g<A.length;g++)jC(t,A[g])}else if(A instanceof Uint8Array)Pg(t,116),ht(t,A);else{Pg(t,118);const g=Object.keys(A);sg(t,g.length);for(let e=0;e<g.length;e++){const I=g[e];IC(t,I),jC(t,A[I])}}break;case"boolean":Pg(t,A?120:121);break;default:Pg(t,127)}};class ir extends Ei{constructor(A){super(),this.w=A,this.s=null,this.count=0}write(A){this.s===A?this.count++:(this.count>0&&sg(this,this.count-1),this.count=1,this.w(this,A),this.s=A)}}const Br=t=>{t.count>0&&(AE(t.encoder,t.count===1?t.s:-t.s),t.count>1&&sg(t.encoder,t.count-2))};class CB{constructor(){this.encoder=new Ei,this.s=0,this.count=0}write(A){this.s===A?this.count++:(Br(this),this.count=1,this.s=A)}toUint8Array(){return Br(this),zt(this.encoder)}}const Qr=t=>{if(t.count>0){const A=t.diff*2+(t.count===1?0:1);AE(t.encoder,A),t.count>1&&sg(t.encoder,t.count-2)}};class xQ{constructor(){this.encoder=new Ei,this.s=0,this.count=0,this.diff=0}write(A){this.diff===A-this.s?(this.s=A,this.count++):(Qr(this),this.count=1,this.diff=A-this.s,this.s=A)}toUint8Array(){return Qr(this),zt(this.encoder)}}class lS{constructor(){this.sarr=[],this.s="",this.lensE=new CB}write(A){this.s+=A,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(A.length)}toUint8Array(){const A=new Ei;return this.sarr.push(this.s),this.s="",IC(A,this.sarr.join("")),KB(A,this.lensE.toUint8Array()),zt(A)}}const ye=t=>new Error(t),Xt=()=>{throw ye("Method unimplemented")},jt=()=>{throw ye("Unexpected case")},Va=ye("Unexpected end of array"),Wa=ye("Integer out of Range");class JB{constructor(A){this.arr=A,this.pos=0}}const yC=t=>new JB(t),DS=t=>t.pos!==t.arr.length,dS=(t,A)=>{const g=new Uint8Array(t.arr.buffer,t.pos+t.arr.byteOffset,A);return t.pos+=A,g},lt=t=>dS(t,tg(t)),hC=t=>t.arr[t.pos++],tg=t=>{let A=0,g=1;const e=t.arr.length;for(;t.pos<e;){const I=t.arr[t.pos++];if(A=A+(I&sI)*g,g*=128,I<Dt)return A;if(A>Oa)throw Wa}throw Va},tE=t=>{let A=t.arr[t.pos++],g=A&fn,e=64;const I=(A&fe)>0?-1:1;if(!(A&Dt))return I*g;const C=t.arr.length;for(;t.pos<C;){if(A=t.arr[t.pos++],g=g+(A&sI)*e,e*=128,A<Dt)return I*g;if(g>Oa)throw Wa}throw Va},fS=t=>{let A=tg(t);if(A===0)return"";{let g=String.fromCodePoint(hC(t));if(--A<100)for(;A--;)g+=String.fromCodePoint(hC(t));else for(;A>0;){const e=A<1e4?A:1e4,I=t.arr.subarray(t.pos,t.pos+e);t.pos+=e,g+=String.fromCodePoint.apply(null,I),A-=e}return decodeURIComponent(escape(g))}},uS=t=>_C.decode(lt(t)),CC=_C?uS:fS,eE=(t,A)=>{const g=new DataView(t.arr.buffer,t.arr.byteOffset+t.pos,A);return t.pos+=A,g},wS=t=>eE(t,4).getFloat32(0,!1),yS=t=>eE(t,8).getFloat64(0,!1),pS=t=>eE(t,8).getBigInt64(0,!1),SS=[t=>{},t=>null,tE,wS,yS,pS,t=>!1,t=>!0,CC,t=>{const A=tg(t),g={};for(let e=0;e<A;e++){const I=CC(t);g[I]=$C(t)}return g},t=>{const A=tg(t),g=[];for(let e=0;e<A;e++)g.push($C(t));return g},lt],$C=t=>SS[127-hC(t)](t);class nr extends JB{constructor(A,g){super(A),this.reader=g,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),DS(this)?this.count=tg(this)+1:this.count=-1),this.count--,this.s}}class iB extends JB{constructor(A){super(A),this.s=0,this.count=0}read(){if(this.count===0){this.s=tE(this);const A=Pa(this.s);this.count=1,A&&(this.s=-this.s,this.count=tg(this)+2)}return this.count--,this.s}}class YQ extends JB{constructor(A){super(A),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){const A=tE(this),g=A&1;this.diff=Te(A/2),this.count=1,g&&(this.count=tg(this)+2)}return this.s+=this.diff,this.count--,this.s}}class MS{constructor(A){this.decoder=new iB(A),this.str=CC(this.decoder),this.spos=0}read(){const A=this.spos+this.decoder.read(),g=this.str.slice(this.spos,A);return this.spos=A,g}}const RS=crypto.getRandomValues.bind(crypto),za=()=>RS(new Uint32Array(1))[0],LS=[1e7]+-1e3+-4e3+-8e3+-1e11,FS=()=>LS.replace(/[018]/g,t=>(t^za()&15>>t/4).toString(16)),lC=t=>new Promise(t);Promise.all.bind(Promise);const Er=t=>t===void 0?null:t;class NS{constructor(){this.map=new Map}setItem(A,g){this.map.set(A,g)}getItem(A){return this.map.get(A)}}let Za=new NS,US=!0;try{typeof localStorage<"u"&&localStorage&&(Za=localStorage,US=!1)}catch{}const kS=Za,GS=Object.assign,mS=Object.keys,KS=(t,A)=>{for(const g in t)A(t[g],g)},or=t=>mS(t).length,JS=t=>{for(const A in t)return!1;return!0},HS=(t,A)=>{for(const g in t)if(!A(t[g],g))return!1;return!0},vS=(t,A)=>Object.prototype.hasOwnProperty.call(t,A),xS=(t,A)=>t===A||or(t)===or(A)&&HS(t,(g,e)=>(g!==void 0||vS(A,e))&&A[e]===g),IE=(t,A,g=0)=>{try{for(;g<t.length;g++)t[g](...A)}finally{g<t.length&&IE(t,A,g+1)}},YS=t=>t,bS=(t,A)=>A.includes(t),Ai=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]";let _t;const TS=()=>{if(_t===void 0)if(Ai){_t=bt();const t=process.argv;let A=null;for(let g=0;g<t.length;g++){const e=t[g];e[0]==="-"?(A!==null&&_t.set(A,""),A=e):A!==null&&(_t.set(A,e),A=null)}A!==null&&_t.set(A,"")}else typeof location=="object"?(_t=bt(),(location.search||"?").slice(1).split("&").forEach(t=>{if(t.length!==0){const[A,g]=t.split("=");_t.set(`--${Ir(A,"-")}`,g),_t.set(`-${Ir(A,"-")}`,g)}})):_t=bt();return _t},yn=t=>TS().has(t),pn=t=>Er(Ai?process.env[t.toUpperCase()]:kS.getItem(t)),_S=t=>yn("--"+t)||pn(t)!==null;_S("production");const sr=Ai&&bS({}.FORCE_COLOR,["true","1","2"]),qS=!yn("no-colors")&&(!Ai||process.stdout.isTTY||sr)&&(!Ai||yn("color")||sr||pn("COLORTERM")!==null||(pn("TERM")||"").includes("color")),PS=t=>new Uint8Array(t),OS=t=>{const A=PS(t.byteLength);return A.set(t),A};class VS{constructor(A,g){this.left=A,this.right=g}}const se=(t,A)=>new VS(t,A);typeof DOMParser<"u"&&new DOMParser;const WS=t=>zp(t,(A,g)=>`${g}:${A};`).join(""),pe=Symbol,Xa=pe(),ja=pe(),zS=pe(),ZS=pe(),XS=pe(),$a=pe(),jS=pe(),Ac=pe(),$S=pe(),AM=t=>{const A=[];let g=0;for(;g<t.length;g++){const e=t[g];e.constructor===String||e.constructor===Number||e.constructor===Object&&A.push(JSON.stringify(e))}return A},gM={[Xa]:se("font-weight","bold"),[ja]:se("font-weight","normal"),[zS]:se("color","blue"),[XS]:se("color","green"),[ZS]:se("color","grey"),[$a]:se("color","red"),[jS]:se("color","purple"),[Ac]:se("color","orange"),[$S]:se("color","black")},tM=t=>{const A=[],g=[],e=bt();let I=[],C=0;for(;C<t.length;C++){const i=t[C],B=gM[i];if(B!==void 0)e.set(B.left,B.right);else if(i.constructor===String||i.constructor===Number){const Q=WS(e);C>0||Q.length>0?(A.push("%c"+i),g.push(Q)):A.push(i)}else break}for(C>0&&(I=g,I.unshift(A.join("")));C<t.length;C++){const i=t[C];i instanceof Symbol||I.push(i)}return I},eM=qS?tM:AM,IM=(...t)=>{console.log(...eM(t)),CM.forEach(A=>A.print(t))},CM=cC(),gc=t=>({[Symbol.iterator](){return this},next:t}),iM=(t,A)=>gc(()=>{let g;do g=t.next();while(!g.done&&!A(g.value));return g}),bQ=(t,A)=>gc(()=>{const{done:g,value:e}=t.next();return{done:g,value:g?void 0:A(e)}});class CE{constructor(A,g){this.clock=A,this.len=g}}class oi{constructor(){this.clients=new Map}}const tc=(t,A,g)=>A.clients.forEach((e,I)=>{const C=t.doc.store.clients.get(I);for(let i=0;i<e.length;i++){const B=e[i];rc(t,C,B.clock,B.len,g)}}),BM=(t,A)=>{let g=0,e=t.length-1;for(;g<=e;){const I=Te((g+e)/2),C=t[I],i=C.clock;if(i<=A){if(A<i+C.len)return I;g=I+1}else e=I-1}return null},ec=(t,A)=>{const g=t.clients.get(A.client);return g!==void 0&&BM(g,A.clock)!==null},iE=t=>{t.clients.forEach(A=>{A.sort((I,C)=>I.clock-C.clock);let g,e;for(g=1,e=1;g<A.length;g++){const I=A[e-1],C=A[g];I.clock+I.len>=C.clock?I.len=pI(I.len,C.clock+C.len-I.clock):(e<g&&(A[e]=C),e++)}A.length=e})},QM=t=>{const A=new oi;for(let g=0;g<t.length;g++)t[g].clients.forEach((e,I)=>{if(!A.clients.has(I)){const C=e.slice();for(let i=g+1;i<t.length;i++)Xp(C,t[i].clients.get(I)||[]);A.clients.set(I,C)}});return iE(A),A},dB=(t,A,g,e)=>{Pe(t.clients,A,()=>[]).push(new CE(g,e))},nM=()=>new oi,EM=t=>{const A=nM();return t.clients.forEach((g,e)=>{const I=[];for(let C=0;C<g.length;C++){const i=g[C];if(i.deleted){const B=i.id.clock;let Q=i.length;if(C+1<g.length)for(let n=g[C+1];C+1<g.length&&n.deleted;n=g[++C+1])Q+=n.length;I.push(new CE(B,Q))}}I.length>0&&A.clients.set(e,I)}),A},pC=(t,A)=>{sg(t.restEncoder,A.clients.size),lI(A.clients.entries()).sort((g,e)=>e[0]-g[0]).forEach(([g,e])=>{t.resetDsCurVal(),sg(t.restEncoder,g);const I=e.length;sg(t.restEncoder,I);for(let C=0;C<I;C++){const i=e[C];t.writeDsClock(i.clock),t.writeDsLen(i.len)}})},BE=t=>{const A=new oi,g=tg(t.restDecoder);for(let e=0;e<g;e++){t.resetDsCurVal();const I=tg(t.restDecoder),C=tg(t.restDecoder);if(C>0){const i=Pe(A.clients,I,()=>[]);for(let B=0;B<C;B++)i.push(new CE(t.readDsClock(),t.readDsLen()))}}return A},rr=(t,A,g)=>{const e=new oi,I=tg(t.restDecoder);for(let C=0;C<I;C++){t.resetDsCurVal();const i=tg(t.restDecoder),B=tg(t.restDecoder),Q=g.clients.get(i)||[],n=Vg(g,i);for(let E=0;E<B;E++){const o=t.readDsClock(),s=o+t.readDsLen();if(o<n){n<s&&dB(e,i,n,s-n);let r=$t(Q,o),h=Q[r];for(!h.deleted&&h.id.clock<o&&(Q.splice(r+1,0,MB(A,h,o-h.id.clock)),r++);r<Q.length&&(h=Q[r++],h.id.clock<s);)h.deleted||(s<h.id.clock+h.length&&Q.splice(r,0,MB(A,h,s-h.id.clock)),h.delete(A))}else dB(e,i,o,s-o)}}if(e.clients.size>0){const C=new DI;return sg(C.restEncoder,0),pC(C,e),C.toUint8Array()}return null},Ic=za;class SC extends _a{constructor({guid:A=FS(),collectionid:g=null,gc:e=!0,gcFilter:I=()=>!0,meta:C=null,autoLoad:i=!1,shouldLoad:B=!0}={}){super(),this.gc=e,this.gcFilter=I,this.clientID=Ic(),this.guid=A,this.collectionid=g,this.share=new Map,this.store=new oc,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=B,this.autoLoad=i,this.meta=C,this.isLoaded=!1,this.isSynced=!1,this.whenLoaded=lC(n=>{this.on("load",()=>{this.isLoaded=!0,n(this)})});const Q=()=>lC(n=>{const E=o=>{(o===void 0||o===!0)&&(this.off("sync",E),n())};this.on("sync",E)});this.on("sync",n=>{n===!1&&this.isSynced&&(this.whenSynced=Q()),this.isSynced=n===void 0||n===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[])}),this.whenSynced=Q()}load(){const A=this._item;A!==null&&!this.shouldLoad&&yg(A.parent.doc,g=>{g.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(lI(this.subdocs).map(A=>A.guid))}transact(A,g=null){return yg(this,A,g)}get(A,g=$g){const e=Pe(this.share,A,()=>{const C=new g;return C._integrate(this,null),C}),I=e.constructor;if(g!==$g&&I!==g)if(I===$g){const C=new g;C._map=e._map,e._map.forEach(i=>{for(;i!==null;i=i.left)i.parent=C}),C._start=e._start;for(let i=C._start;i!==null;i=i.right)i.parent=C;return C._length=e._length,this.share.set(A,C),C._integrate(this,null),C}else throw new Error(`Type with the name ${A} has already been defined with a different constructor`);return e}getArray(A=""){return this.get(A,rI)}getText(A=""){return this.get(A,dC)}getMap(A=""){return this.get(A,ue)}getXmlFragment(A=""){return this.get(A,dI)}toJSON(){const A={};return this.share.forEach((g,e)=>{A[e]=g.toJSON()}),A}destroy(){lI(this.subdocs).forEach(g=>g.destroy());const A=this._item;if(A!==null){this._item=null;const g=A.content;g.doc=new SC({guid:this.guid,...g.opts,shouldLoad:!1}),g.doc._item=A,yg(A.parent.doc,e=>{const I=g.doc;A.deleted||e.subdocsAdded.add(I),e.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}on(A,g){super.on(A,g)}off(A,g){super.off(A,g)}}class Cc{constructor(A){this.restDecoder=A}resetDsCurVal(){}readDsClock(){return tg(this.restDecoder)}readDsLen(){return tg(this.restDecoder)}}class ic extends Cc{readLeftID(){return ng(tg(this.restDecoder),tg(this.restDecoder))}readRightID(){return ng(tg(this.restDecoder),tg(this.restDecoder))}readClient(){return tg(this.restDecoder)}readInfo(){return hC(this.restDecoder)}readString(){return CC(this.restDecoder)}readParentInfo(){return tg(this.restDecoder)===1}readTypeRef(){return tg(this.restDecoder)}readLen(){return tg(this.restDecoder)}readAny(){return $C(this.restDecoder)}readBuf(){return OS(lt(this.restDecoder))}readJSON(){return JSON.parse(CC(this.restDecoder))}readKey(){return CC(this.restDecoder)}}class oM{constructor(A){this.dsCurrVal=0,this.restDecoder=A}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=tg(this.restDecoder),this.dsCurrVal}readDsLen(){const A=tg(this.restDecoder)+1;return this.dsCurrVal+=A,A}}class DC extends oM{constructor(A){super(A),this.keys=[],tg(A),this.keyClockDecoder=new YQ(lt(A)),this.clientDecoder=new iB(lt(A)),this.leftClockDecoder=new YQ(lt(A)),this.rightClockDecoder=new YQ(lt(A)),this.infoDecoder=new nr(lt(A),hC),this.stringDecoder=new MS(lt(A)),this.parentInfoDecoder=new nr(lt(A),hC),this.typeRefDecoder=new iB(lt(A)),this.lenDecoder=new iB(lt(A))}readLeftID(){return new iC(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new iC(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return $C(this.restDecoder)}readBuf(){return lt(this.restDecoder)}readJSON(){return $C(this.restDecoder)}readKey(){const A=this.keyClockDecoder.read();if(A<this.keys.length)return this.keys[A];{const g=this.stringDecoder.read();return this.keys.push(g),g}}}class sM{constructor(){this.restEncoder=mB()}toUint8Array(){return zt(this.restEncoder)}resetDsCurVal(){}writeDsClock(A){sg(this.restEncoder,A)}writeDsLen(A){sg(this.restEncoder,A)}}class si extends sM{writeLeftID(A){sg(this.restEncoder,A.client),sg(this.restEncoder,A.clock)}writeRightID(A){sg(this.restEncoder,A.client),sg(this.restEncoder,A.clock)}writeClient(A){sg(this.restEncoder,A)}writeInfo(A){un(this.restEncoder,A)}writeString(A){IC(this.restEncoder,A)}writeParentInfo(A){sg(this.restEncoder,A?1:0)}writeTypeRef(A){sg(this.restEncoder,A)}writeLen(A){sg(this.restEncoder,A)}writeAny(A){jC(this.restEncoder,A)}writeBuf(A){ht(this.restEncoder,A)}writeJSON(A){IC(this.restEncoder,JSON.stringify(A))}writeKey(A){IC(this.restEncoder,A)}}class rM{constructor(){this.restEncoder=mB(),this.dsCurrVal=0}toUint8Array(){return zt(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(A){const g=A-this.dsCurrVal;this.dsCurrVal=A,sg(this.restEncoder,g)}writeDsLen(A){A===0&&jt(),sg(this.restEncoder,A-1),this.dsCurrVal+=A}}class DI extends rM{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new xQ,this.clientEncoder=new CB,this.leftClockEncoder=new xQ,this.rightClockEncoder=new xQ,this.infoEncoder=new ir(un),this.stringEncoder=new lS,this.parentInfoEncoder=new ir(un),this.typeRefEncoder=new CB,this.lenEncoder=new CB}toUint8Array(){const A=mB();return sg(A,0),ht(A,this.keyClockEncoder.toUint8Array()),ht(A,this.clientEncoder.toUint8Array()),ht(A,this.leftClockEncoder.toUint8Array()),ht(A,this.rightClockEncoder.toUint8Array()),ht(A,zt(this.infoEncoder)),ht(A,this.stringEncoder.toUint8Array()),ht(A,zt(this.parentInfoEncoder)),ht(A,this.typeRefEncoder.toUint8Array()),ht(A,this.lenEncoder.toUint8Array()),KB(A,zt(this.restEncoder)),zt(A)}writeLeftID(A){this.clientEncoder.write(A.client),this.leftClockEncoder.write(A.clock)}writeRightID(A){this.clientEncoder.write(A.client),this.rightClockEncoder.write(A.clock)}writeClient(A){this.clientEncoder.write(A)}writeInfo(A){this.infoEncoder.write(A)}writeString(A){this.stringEncoder.write(A)}writeParentInfo(A){this.parentInfoEncoder.write(A?1:0)}writeTypeRef(A){this.typeRefEncoder.write(A)}writeLen(A){this.lenEncoder.write(A)}writeAny(A){jC(this.restEncoder,A)}writeBuf(A){ht(this.restEncoder,A)}writeJSON(A){jC(this.restEncoder,A)}writeKey(A){const g=this.keyMap.get(A);g===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(A)):this.keyClockEncoder.write(g)}}const aM=(t,A,g,e)=>{e=pI(e,A[0].id.clock);const I=$t(A,e);sg(t.restEncoder,A.length-I),t.writeClient(g),sg(t.restEncoder,e);const C=A[I];C.write(t,e-C.id.clock);for(let i=I+1;i<A.length;i++)A[i].write(t,0)},QE=(t,A,g)=>{const e=new Map;g.forEach((I,C)=>{Vg(A,C)>I&&e.set(C,I)}),nE(A).forEach((I,C)=>{g.has(C)||e.set(C,0)}),sg(t.restEncoder,e.size),lI(e.entries()).sort((I,C)=>C[0]-I[0]).forEach(([I,C])=>{aM(t,A.clients.get(I),I,C)})},cM=(t,A)=>{const g=bt(),e=tg(t.restDecoder);for(let I=0;I<e;I++){const C=tg(t.restDecoder),i=new Array(C),B=t.readClient();let Q=tg(t.restDecoder);g.set(B,{i:0,refs:i});for(let n=0;n<C;n++){const E=t.readInfo();switch(GB&E){case 0:{const o=t.readLen();i[n]=new Nt(ng(B,Q),o),Q+=o;break}case 10:{const o=tg(t.restDecoder);i[n]=new Ut(ng(B,Q),o),Q+=o;break}default:{const o=(E&(fe|Dt))===0,s=new xg(ng(B,Q),null,(E&Dt)===Dt?t.readLeftID():null,null,(E&fe)===fe?t.readRightID():null,o?t.readParentInfo()?A.get(t.readString()):t.readLeftID():null,o&&(E&ZC)===ZC?t.readString():null,kc(t,E));i[n]=s,Q+=s.length}}}}return g},hM=(t,A,g)=>{const e=[];let I=lI(g.keys()).sort((r,h)=>r-h);if(I.length===0)return null;const C=()=>{if(I.length===0)return null;let r=g.get(I[I.length-1]);for(;r.refs.length===r.i;)if(I.pop(),I.length>0)r=g.get(I[I.length-1]);else return null;return r};let i=C();if(i===null)return null;const B=new oc,Q=new Map,n=(r,h)=>{const d=Q.get(r);(d==null||d>h)&&Q.set(r,h)};let E=i.refs[i.i++];const o=new Map,s=()=>{for(const r of e){const h=r.id.client,d=g.get(h);d?(d.i--,B.clients.set(h,d.refs.slice(d.i)),g.delete(h),d.i=0,d.refs=[]):B.clients.set(h,[r]),I=I.filter(a=>a!==h)}e.length=0};for(;;){if(E.constructor!==Ut){const h=Pe(o,E.id.client,()=>Vg(A,E.id.client))-E.id.clock;if(h<0)e.push(E),n(E.id.client,E.id.clock-1),s();else{const d=E.getMissing(t,A);if(d!==null){e.push(E);const a=g.get(d)||{refs:[],i:0};if(a.refs.length===a.i)n(d,Vg(A,d)),s();else{E=a.refs[a.i++];continue}}else(h===0||h<E.length)&&(E.integrate(t,h),o.set(E.id.client,E.id.clock+E.length))}}if(e.length>0)E=e.pop();else if(i!==null&&i.i<i.refs.length)E=i.refs[i.i++];else{if(i=C(),i===null)break;E=i.refs[i.i++]}}if(B.clients.size>0){const r=new DI;return QE(r,B,new Map),sg(r.restEncoder,0),{missing:Q,update:r.toUint8Array()}}return null},lM=(t,A)=>QE(t,A.doc.store,A.beforeState),DM=(t,A,g,e=new DC(t))=>yg(A,I=>{I.local=!1;let C=!1;const i=I.doc,B=i.store,Q=cM(e,i),n=hM(I,B,Q),E=B.pendingStructs;if(E){for(const[s,r]of E.missing)if(r<Vg(B,s)){C=!0;break}if(n){for(const[s,r]of n.missing){const h=E.missing.get(s);(h==null||h>r)&&E.missing.set(s,r)}E.update=fB([E.update,n.update])}}else B.pendingStructs=n;const o=rr(e,I,B);if(B.pendingDs){const s=new DC(yC(B.pendingDs));tg(s.restDecoder);const r=rr(s,I,B);o&&r?B.pendingDs=fB([o,r]):B.pendingDs=o||r}else B.pendingDs=o;if(C){const s=B.pendingStructs.update;B.pendingStructs=null,Bc(I.doc,s)}},g,!1),Bc=(t,A,g,e=DC)=>{const I=yC(A);DM(I,t,g,new e(I))},dM=(t,A,g)=>Bc(t,A,g,ic),fM=(t,A,g=new Map)=>{QE(t,A.store,g),pC(t,EM(A.store))},uM=(t,A=new Uint8Array([0]),g=new DI)=>{const e=nc(A);fM(g,t,e);const I=[g.toUint8Array()];if(t.store.pendingDs&&I.push(t.store.pendingDs),t.store.pendingStructs&&I.push(GM(t.store.pendingStructs.update,A)),I.length>1){if(g.constructor===si)return UM(I.map((C,i)=>i===0?C:KM(C)));if(g.constructor===DI)return fB(I)}return I[0]},Qc=(t,A)=>uM(t,A,new si),wM=t=>{const A=new Map,g=tg(t.restDecoder);for(let e=0;e<g;e++){const I=tg(t.restDecoder),C=tg(t.restDecoder);A.set(I,C)}return A},nc=t=>wM(new Cc(yC(t)));class yM{constructor(){this.l=[]}}const ar=()=>new yM,cr=(t,A)=>t.l.push(A),hr=(t,A)=>{const g=t.l,e=g.length;t.l=g.filter(I=>A!==I),e===t.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},Ec=(t,A,g)=>IE(t.l,[A,g]);class iC{constructor(A,g){this.client=A,this.clock=g}}const Xi=(t,A)=>t===A||t!==null&&A!==null&&t.client===A.client&&t.clock===A.clock,ng=(t,A)=>new iC(t,A),pM=t=>{for(const[A,g]of t.doc.share.entries())if(g===t)return A;throw jt()},zI=(t,A)=>A===void 0?!t.deleted:A.sv.has(t.id.client)&&(A.sv.get(t.id.client)||0)>t.id.clock&&!ec(A.ds,t.id),Sn=(t,A)=>{const g=Pe(t.meta,Sn,cC),e=t.doc.store;g.has(A)||(A.sv.forEach((I,C)=>{I<Vg(e,C)&&_e(t,ng(C,I))}),tc(t,A.ds,I=>{}),g.add(A))};class oc{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}}const nE=t=>{const A=new Map;return t.clients.forEach((g,e)=>{const I=g[g.length-1];A.set(e,I.id.clock+I.length)}),A},Vg=(t,A)=>{const g=t.clients.get(A);if(g===void 0)return 0;const e=g[g.length-1];return e.id.clock+e.length},sc=(t,A)=>{let g=t.clients.get(A.id.client);if(g===void 0)g=[],t.clients.set(A.id.client,g);else{const e=g[g.length-1];if(e.id.clock+e.length!==A.id.clock)throw jt()}g.push(A)},$t=(t,A)=>{let g=0,e=t.length-1,I=t[e],C=I.id.clock;if(C===A)return e;let i=Te(A/(C+I.length-1)*e);for(;g<=e;){if(I=t[i],C=I.id.clock,C<=A){if(A<C+I.length)return i;g=i+1}else e=i-1;i=Te((g+e)/2)}throw jt()},SM=(t,A)=>{const g=t.clients.get(A.client);return g[$t(g,A.clock)]},TQ=SM,Mn=(t,A,g)=>{const e=$t(A,g),I=A[e];return I.id.clock<g&&I instanceof xg?(A.splice(e+1,0,MB(t,I,g-I.id.clock)),e+1):e},_e=(t,A)=>{const g=t.doc.store.clients.get(A.client);return g[Mn(t,g,A.clock)]},lr=(t,A,g)=>{const e=A.clients.get(g.client),I=$t(e,g.clock),C=e[I];return g.clock!==C.id.clock+C.length-1&&C.constructor!==Nt&&e.splice(I+1,0,MB(t,C,g.clock-C.id.clock+1)),C},MM=(t,A,g)=>{const e=t.clients.get(A.id.client);e[$t(e,A.id.clock)]=g},rc=(t,A,g,e,I)=>{if(e===0)return;const C=g+e;let i=Mn(t,A,g),B;do B=A[i++],C<B.id.clock+B.length&&Mn(t,A,C),I(B);while(i<A.length&&A[i].id.clock<C)};class RM{constructor(A,g,e){this.doc=A,this.deleteSet=new oi,this.beforeState=nE(A.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=g,this.meta=new Map,this.local=e,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}}const Dr=(t,A)=>A.deleteSet.clients.size===0&&!Zp(A.afterState,(g,e)=>A.beforeState.get(e)!==g)?!1:(iE(A.deleteSet),lM(t,A),pC(t,A.deleteSet),!0),dr=(t,A,g)=>{const e=A._item;(e===null||e.id.clock<(t.beforeState.get(e.id.client)||0)&&!e.deleted)&&Pe(t.changed,A,cC).add(g)},BB=(t,A)=>{let g=t[A],e=t[A-1],I=A;for(;I>0;g=e,e=t[--I-1]){if(e.deleted===g.deleted&&e.constructor===g.constructor&&e.mergeWith(g)){g instanceof xg&&g.parentSub!==null&&g.parent._map.get(g.parentSub)===g&&g.parent._map.set(g.parentSub,e);continue}break}const C=A-I;return C&&t.splice(A+1-C,C),C},LM=(t,A,g)=>{for(const[e,I]of t.clients.entries()){const C=A.clients.get(e);for(let i=I.length-1;i>=0;i--){const B=I[i],Q=B.clock+B.len;for(let n=$t(C,B.clock),E=C[n];n<C.length&&E.id.clock<Q;E=C[++n]){const o=C[n];if(B.clock+B.len<=o.id.clock)break;o instanceof xg&&o.deleted&&!o.keep&&g(o)&&o.gc(A,!1)}}}},FM=(t,A)=>{t.clients.forEach((g,e)=>{const I=A.clients.get(e);for(let C=g.length-1;C>=0;C--){const i=g[C],B=qa(I.length-1,1+$t(I,i.clock+i.len-1));for(let Q=B,n=I[Q];Q>0&&n.id.clock>=i.clock;n=I[Q])Q-=1+BB(I,Q)}})},ac=(t,A)=>{if(A<t.length){const g=t[A],e=g.doc,I=e.store,C=g.deleteSet,i=g._mergeStructs;try{iE(C),g.afterState=nE(g.doc.store),e.emit("beforeObserverCalls",[g,e]);const B=[];g.changed.forEach((Q,n)=>B.push(()=>{(n._item===null||!n._item.deleted)&&n._callObserver(g,Q)})),B.push(()=>{g.changedParentTypes.forEach((Q,n)=>{n._dEH.l.length>0&&(n._item===null||!n._item.deleted)&&(Q=Q.filter(E=>E.target._item===null||!E.target._item.deleted),Q.forEach(E=>{E.currentTarget=n,E._path=null}),Q.sort((E,o)=>E.path.length-o.path.length),Ec(n._dEH,Q,g))})}),B.push(()=>e.emit("afterTransaction",[g,e])),IE(B,[]),g._needFormattingCleanup&&zM(g)}finally{e.gc&&LM(C,I,e.gcFilter),FM(C,I),g.afterState.forEach((E,o)=>{const s=g.beforeState.get(o)||0;if(s!==E){const r=I.clients.get(o),h=pI($t(r,s),1);for(let d=r.length-1;d>=h;)d-=1+BB(r,d)}});for(let E=i.length-1;E>=0;E--){const{client:o,clock:s}=i[E].id,r=I.clients.get(o),h=$t(r,s);h+1<r.length&&BB(r,h+1)>1||h>0&&BB(r,h)}if(!g.local&&g.afterState.get(e.clientID)!==g.beforeState.get(e.clientID)&&(IM(Ac,Xa,"[yjs] ",ja,$a,"Changed the client-id because another client seems to be using it."),e.clientID=Ic()),e.emit("afterTransactionCleanup",[g,e]),e._observers.has("update")){const E=new si;Dr(E,g)&&e.emit("update",[E.toUint8Array(),g.origin,e,g])}if(e._observers.has("updateV2")){const E=new DI;Dr(E,g)&&e.emit("updateV2",[E.toUint8Array(),g.origin,e,g])}const{subdocsAdded:B,subdocsLoaded:Q,subdocsRemoved:n}=g;(B.size>0||n.size>0||Q.size>0)&&(B.forEach(E=>{E.clientID=e.clientID,E.collectionid==null&&(E.collectionid=e.collectionid),e.subdocs.add(E)}),n.forEach(E=>e.subdocs.delete(E)),e.emit("subdocs",[{loaded:Q,added:B,removed:n},e,g]),n.forEach(E=>E.destroy())),t.length<=A+1?(e._transactionCleanups=[],e.emit("afterAllTransactions",[e,t])):ac(t,A+1)}}},yg=(t,A,g=null,e=!0)=>{const I=t._transactionCleanups;let C=!1,i=null;t._transaction===null&&(C=!0,t._transaction=new RM(t,g,e),I.push(t._transaction),I.length===1&&t.emit("beforeAllTransactions",[t]),t.emit("beforeTransaction",[t._transaction,t]));try{i=A(t._transaction)}finally{if(C){const B=t._transaction===I[0];t._transaction=null,B&&ac(I,0)}}return i};function*NM(t){const A=tg(t.restDecoder);for(let g=0;g<A;g++){const e=tg(t.restDecoder),I=t.readClient();let C=tg(t.restDecoder);for(let i=0;i<e;i++){const B=t.readInfo();if(B===10){const Q=tg(t.restDecoder);yield new Ut(ng(I,C),Q),C+=Q}else if(GB&B){const Q=(B&(fe|Dt))===0,n=new xg(ng(I,C),null,(B&Dt)===Dt?t.readLeftID():null,null,(B&fe)===fe?t.readRightID():null,Q?t.readParentInfo()?t.readString():t.readLeftID():null,Q&&(B&ZC)===ZC?t.readString():null,kc(t,B));yield n,C+=n.length}else{const Q=t.readLen();yield new Nt(ng(I,C),Q),C+=Q}}}}class EE{constructor(A,g){this.gen=NM(A),this.curr=null,this.done=!1,this.filterSkips=g,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===Ut);return this.curr}}class oE{constructor(A){this.currClient=0,this.startClock=0,this.written=0,this.encoder=A,this.clientStructs=[]}}const UM=t=>fB(t,ic,si),kM=(t,A)=>{if(t.constructor===Nt){const{client:g,clock:e}=t.id;return new Nt(ng(g,e+A),t.length-A)}else if(t.constructor===Ut){const{client:g,clock:e}=t.id;return new Ut(ng(g,e+A),t.length-A)}else{const g=t,{client:e,clock:I}=g.id;return new xg(ng(e,I+A),null,ng(e,I+A-1),null,g.rightOrigin,g.parent,g.parentSub,g.content.splice(A))}},fB=(t,A=DC,g=DI)=>{if(t.length===1)return t[0];const e=t.map(E=>new A(yC(E)));let I=e.map(E=>new EE(E,!0)),C=null;const i=new g,B=new oE(i);for(;I=I.filter(s=>s.curr!==null),I.sort((s,r)=>{if(s.curr.id.client===r.curr.id.client){const h=s.curr.id.clock-r.curr.id.clock;return h===0?s.curr.constructor===r.curr.constructor?0:s.curr.constructor===Ut?1:-1:h}else return r.curr.id.client-s.curr.id.client}),I.length!==0;){const E=I[0],o=E.curr.id.client;if(C!==null){let s=E.curr,r=!1;for(;s!==null&&s.id.clock+s.length<=C.struct.id.clock+C.struct.length&&s.id.client>=C.struct.id.client;)s=E.next(),r=!0;if(s===null||s.id.client!==o||r&&s.id.clock>C.struct.id.clock+C.struct.length)continue;if(o!==C.struct.id.client)me(B,C.struct,C.offset),C={struct:s,offset:0},E.next();else if(C.struct.id.clock+C.struct.length<s.id.clock)if(C.struct.constructor===Ut)C.struct.length=s.id.clock+s.length-C.struct.id.clock;else{me(B,C.struct,C.offset);const h=s.id.clock-C.struct.id.clock-C.struct.length;C={struct:new Ut(ng(o,C.struct.id.clock+C.struct.length),h),offset:0}}else{const h=C.struct.id.clock+C.struct.length-s.id.clock;h>0&&(C.struct.constructor===Ut?C.struct.length-=h:s=kM(s,h)),C.struct.mergeWith(s)||(me(B,C.struct,C.offset),C={struct:s,offset:0},E.next())}}else C={struct:E.curr,offset:0},E.next();for(let s=E.curr;s!==null&&s.id.client===o&&s.id.clock===C.struct.id.clock+C.struct.length&&s.constructor!==Ut;s=E.next())me(B,C.struct,C.offset),C={struct:s,offset:0}}C!==null&&(me(B,C.struct,C.offset),C=null),sE(B);const Q=e.map(E=>BE(E)),n=QM(Q);return pC(i,n),i.toUint8Array()},GM=(t,A,g=DC,e=DI)=>{const I=nc(A),C=new e,i=new oE(C),B=new g(yC(t)),Q=new EE(B,!1);for(;Q.curr;){const E=Q.curr,o=E.id.client,s=I.get(o)||0;if(Q.curr.constructor===Ut){Q.next();continue}if(E.id.clock+E.length>s)for(me(i,E,pI(s-E.id.clock,0)),Q.next();Q.curr&&Q.curr.id.client===o;)me(i,Q.curr,0),Q.next();else for(;Q.curr&&Q.curr.id.client===o&&Q.curr.id.clock+Q.curr.length<=s;)Q.next()}sE(i);const n=BE(B);return pC(C,n),C.toUint8Array()},cc=t=>{t.written>0&&(t.clientStructs.push({written:t.written,restEncoder:zt(t.encoder.restEncoder)}),t.encoder.restEncoder=mB(),t.written=0)},me=(t,A,g)=>{t.written>0&&t.currClient!==A.id.client&&cc(t),t.written===0&&(t.currClient=A.id.client,t.encoder.writeClient(A.id.client),sg(t.encoder.restEncoder,A.id.clock+g)),A.write(t.encoder,g),t.written++},sE=t=>{cc(t);const A=t.encoder.restEncoder;sg(A,t.clientStructs.length);for(let g=0;g<t.clientStructs.length;g++){const e=t.clientStructs[g];sg(A,e.written),KB(A,e.restEncoder)}},mM=(t,A,g,e)=>{const I=new g(yC(t)),C=new EE(I,!1),i=new e,B=new oE(i);for(let n=C.curr;n!==null;n=C.next())me(B,A(n),0);sE(B);const Q=BE(I);return pC(i,Q),i.toUint8Array()},KM=t=>mM(t,YS,DC,si),fr="You must not compute changes after the event-handler fired.";class HB{constructor(A,g){this.target=A,this.currentTarget=A,this.transaction=g,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=JM(this.currentTarget,this.target))}deletes(A){return ec(this.transaction.deleteSet,A.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw ye(fr);const A=new Map,g=this.target;this.transaction.changed.get(g).forEach(I=>{if(I!==null){const C=g._map.get(I);let i,B;if(this.adds(C)){let Q=C.left;for(;Q!==null&&this.adds(Q);)Q=Q.left;if(this.deletes(C))if(Q!==null&&this.deletes(Q))i="delete",B=JQ(Q.content.getContent());else return;else Q!==null&&this.deletes(Q)?(i="update",B=JQ(Q.content.getContent())):(i="add",B=void 0)}else if(this.deletes(C))i="delete",B=JQ(C.content.getContent());else return;A.set(I,{action:i,oldValue:B})}}),this._keys=A}return this._keys}get delta(){return this.changes.delta}adds(A){return A.id.clock>=(this.transaction.beforeState.get(A.id.client)||0)}get changes(){let A=this._changes;if(A===null){if(this.transaction.doc._transactionCleanups.length===0)throw ye(fr);const g=this.target,e=cC(),I=cC(),C=[];if(A={added:e,deleted:I,delta:C,keys:this.keys},this.transaction.changed.get(g).has(null)){let B=null;const Q=()=>{B&&C.push(B)};for(let n=g._start;n!==null;n=n.right)n.deleted?this.deletes(n)&&!this.adds(n)&&((B===null||B.delete===void 0)&&(Q(),B={delete:0}),B.delete+=n.length,I.add(n)):this.adds(n)?((B===null||B.insert===void 0)&&(Q(),B={insert:[]}),B.insert=B.insert.concat(n.content.getContent()),e.add(n)):((B===null||B.retain===void 0)&&(Q(),B={retain:0}),B.retain+=n.length);B!==null&&B.retain===void 0&&Q()}this._changes=A}return A}}const JM=(t,A)=>{const g=[];for(;A._item!==null&&A!==t;){if(A._item.parentSub!==null)g.unshift(A._item.parentSub);else{let e=0,I=A._item.parent._start;for(;I!==A._item&&I!==null;)I.deleted||e++,I=I.right;g.unshift(e)}A=A._item.parent}return g},hc=80;let rE=0;class HM{constructor(A,g){A.marker=!0,this.p=A,this.index=g,this.timestamp=rE++}}const vM=t=>{t.timestamp=rE++},lc=(t,A,g)=>{t.p.marker=!1,t.p=A,A.marker=!0,t.index=g,t.timestamp=rE++},xM=(t,A,g)=>{if(t.length>=hc){const e=t.reduce((I,C)=>I.timestamp<C.timestamp?I:C);return lc(e,A,g),e}else{const e=new HM(A,g);return t.push(e),e}},vB=(t,A)=>{if(t._start===null||A===0||t._searchMarker===null)return null;const g=t._searchMarker.length===0?null:t._searchMarker.reduce((C,i)=>IB(A-C.index)<IB(A-i.index)?C:i);let e=t._start,I=0;for(g!==null&&(e=g.p,I=g.index,vM(g));e.right!==null&&I<A;){if(!e.deleted&&e.countable){if(A<I+e.length)break;I+=e.length}e=e.right}for(;e.left!==null&&I>A;)e=e.left,!e.deleted&&e.countable&&(I-=e.length);for(;e.left!==null&&e.left.id.client===e.id.client&&e.left.id.clock+e.left.length===e.id.clock;)e=e.left,!e.deleted&&e.countable&&(I-=e.length);return g!==null&&IB(g.index-I)<e.parent.length/hc?(lc(g,e,I),g):xM(t._searchMarker,e,I)},gi=(t,A,g)=>{for(let e=t.length-1;e>=0;e--){const I=t[e];if(g>0){let C=I.p;for(C.marker=!1;C&&(C.deleted||!C.countable);)C=C.left,C&&!C.deleted&&C.countable&&(I.index-=C.length);if(C===null||C.marker===!0){t.splice(e,1);continue}I.p=C,C.marker=!0}(A<I.index||g>0&&A===I.index)&&(I.index=pI(A,I.index+g))}},xB=(t,A,g)=>{const e=t,I=A.changedParentTypes;for(;Pe(I,t,()=>[]).push(g),t._item!==null;)t=t._item.parent;Ec(e._eH,g,A)};class $g{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=ar(),this._dEH=ar(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(A,g){this.doc=A,this._item=g}_copy(){throw Xt()}clone(){throw Xt()}_write(A){}get _first(){let A=this._start;for(;A!==null&&A.deleted;)A=A.right;return A}_callObserver(A,g){!A.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(A){cr(this._eH,A)}observeDeep(A){cr(this._dEH,A)}unobserve(A){hr(this._eH,A)}unobserveDeep(A){hr(this._dEH,A)}toJSON(){}}const Dc=(t,A,g)=>{A<0&&(A=t._length+A),g<0&&(g=t._length+g);let e=g-A;const I=[];let C=t._start;for(;C!==null&&e>0;){if(C.countable&&!C.deleted){const i=C.content.getContent();if(i.length<=A)A-=i.length;else{for(let B=A;B<i.length&&e>0;B++)I.push(i[B]),e--;A=0}}C=C.right}return I},dc=t=>{const A=[];let g=t._start;for(;g!==null;){if(g.countable&&!g.deleted){const e=g.content.getContent();for(let I=0;I<e.length;I++)A.push(e[I])}g=g.right}return A},ti=(t,A)=>{let g=0,e=t._start;for(;e!==null;){if(e.countable&&!e.deleted){const I=e.content.getContent();for(let C=0;C<I.length;C++)A(I[C],g++,t)}e=e.right}},fc=(t,A)=>{const g=[];return ti(t,(e,I)=>{g.push(A(e,I,t))}),g},YM=t=>{let A=t._start,g=null,e=0;return{[Symbol.iterator](){return this},next:()=>{if(g===null){for(;A!==null&&A.deleted;)A=A.right;if(A===null)return{done:!0,value:void 0};g=A.content.getContent(),e=0,A=A.right}const I=g[e++];return g.length<=e&&(g=null),{done:!1,value:I}}}},uc=(t,A)=>{const g=vB(t,A);let e=t._start;for(g!==null&&(e=g.p,A-=g.index);e!==null;e=e.right)if(!e.deleted&&e.countable){if(A<e.length)return e.content.getContent()[A];A-=e.length}},uB=(t,A,g,e)=>{let I=g;const C=t.doc,i=C.clientID,B=C.store,Q=g===null?A._start:g.right;let n=[];const E=()=>{n.length>0&&(I=new xg(ng(i,Vg(B,i)),I,I&&I.lastId,Q,Q&&Q.id,A,null,new fI(n)),I.integrate(t,0),n=[])};e.forEach(o=>{if(o===null)n.push(o);else switch(o.constructor){case Number:case Object:case Boolean:case Array:case String:n.push(o);break;default:switch(E(),o.constructor){case Uint8Array:case ArrayBuffer:I=new xg(ng(i,Vg(B,i)),I,I&&I.lastId,Q,Q&&Q.id,A,null,new ri(new Uint8Array(o))),I.integrate(t,0);break;case SC:I=new xg(ng(i,Vg(B,i)),I,I&&I.lastId,Q,Q&&Q.id,A,null,new ai(o)),I.integrate(t,0);break;default:if(o instanceof $g)I=new xg(ng(i,Vg(B,i)),I,I&&I.lastId,Q,Q&&Q.id,A,null,new Se(o)),I.integrate(t,0);else throw new Error("Unexpected content type in insert operation")}}}),E()},wc=()=>ye("Length exceeded!"),yc=(t,A,g,e)=>{if(g>A._length)throw wc();if(g===0)return A._searchMarker&&gi(A._searchMarker,g,e.length),uB(t,A,null,e);const I=g,C=vB(A,g);let i=A._start;for(C!==null&&(i=C.p,g-=C.index,g===0&&(i=i.prev,g+=i&&i.countable&&!i.deleted?i.length:0));i!==null;i=i.right)if(!i.deleted&&i.countable){if(g<=i.length){g<i.length&&_e(t,ng(i.id.client,i.id.clock+g));break}g-=i.length}return A._searchMarker&&gi(A._searchMarker,I,e.length),uB(t,A,i,e)},bM=(t,A,g)=>{let I=(A._searchMarker||[]).reduce((C,i)=>i.index>C.index?i:C,{index:0,p:A._start}).p;if(I)for(;I.right;)I=I.right;return uB(t,A,I,g)},pc=(t,A,g,e)=>{if(e===0)return;const I=g,C=e,i=vB(A,g);let B=A._start;for(i!==null&&(B=i.p,g-=i.index);B!==null&&g>0;B=B.right)!B.deleted&&B.countable&&(g<B.length&&_e(t,ng(B.id.client,B.id.clock+g)),g-=B.length);for(;e>0&&B!==null;)B.deleted||(e<B.length&&_e(t,ng(B.id.client,B.id.clock+e)),B.delete(t),e-=B.length),B=B.right;if(e>0)throw wc();A._searchMarker&&gi(A._searchMarker,I,-C+e)},wB=(t,A,g)=>{const e=A._map.get(g);e!==void 0&&e.delete(t)},aE=(t,A,g,e)=>{const I=A._map.get(g)||null,C=t.doc,i=C.clientID;let B;if(e==null)B=new fI([e]);else switch(e.constructor){case Number:case Object:case Boolean:case Array:case String:B=new fI([e]);break;case Uint8Array:B=new ri(e);break;case SC:B=new ai(e);break;default:if(e instanceof $g)B=new Se(e);else throw new Error("Unexpected content type")}new xg(ng(i,Vg(C.store,i)),I,I&&I.lastId,null,null,A,g,B).integrate(t,0)},cE=(t,A)=>{const g=t._map.get(A);return g!==void 0&&!g.deleted?g.content.getContent()[g.length-1]:void 0},Sc=t=>{const A={};return t._map.forEach((g,e)=>{g.deleted||(A[e]=g.content.getContent()[g.length-1])}),A},Mc=(t,A)=>{const g=t._map.get(A);return g!==void 0&&!g.deleted},TM=(t,A)=>{const g={};return t._map.forEach((e,I)=>{let C=e;for(;C!==null&&(!A.sv.has(C.id.client)||C.id.clock>=(A.sv.get(C.id.client)||0));)C=C.left;C!==null&&zI(C,A)&&(g[I]=C.content.getContent()[C.length-1])}),g},ji=t=>iM(t.entries(),A=>!A[1].deleted);class _M extends HB{constructor(A,g){super(A,g),this._transaction=g}}class rI extends $g{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(A){const g=new rI;return g.push(A),g}_integrate(A,g){super._integrate(A,g),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new rI}clone(){const A=new rI;return A.insert(0,this.toArray().map(g=>g instanceof $g?g.clone():g)),A}get length(){return this._prelimContent===null?this._length:this._prelimContent.length}_callObserver(A,g){super._callObserver(A,g),xB(this,A,new _M(this,A))}insert(A,g){this.doc!==null?yg(this.doc,e=>{yc(e,this,A,g)}):this._prelimContent.splice(A,0,...g)}push(A){this.doc!==null?yg(this.doc,g=>{bM(g,this,A)}):this._prelimContent.push(...A)}unshift(A){this.insert(0,A)}delete(A,g=1){this.doc!==null?yg(this.doc,e=>{pc(e,this,A,g)}):this._prelimContent.splice(A,g)}get(A){return uc(this,A)}toArray(){return dc(this)}slice(A=0,g=this.length){return Dc(this,A,g)}toJSON(){return this.map(A=>A instanceof $g?A.toJSON():A)}map(A){return fc(this,A)}forEach(A){ti(this,A)}[Symbol.iterator](){return YM(this)}_write(A){A.writeTypeRef(rR)}}const qM=t=>new rI;class PM extends HB{constructor(A,g,e){super(A,g),this.keysChanged=e}}class ue extends $g{constructor(A){super(),this._prelimContent=null,A===void 0?this._prelimContent=new Map:this._prelimContent=new Map(A)}_integrate(A,g){super._integrate(A,g),this._prelimContent.forEach((e,I)=>{this.set(I,e)}),this._prelimContent=null}_copy(){return new ue}clone(){const A=new ue;return this.forEach((g,e)=>{A.set(e,g instanceof $g?g.clone():g)}),A}_callObserver(A,g){xB(this,A,new PM(this,A,g))}toJSON(){const A={};return this._map.forEach((g,e)=>{if(!g.deleted){const I=g.content.getContent()[g.length-1];A[e]=I instanceof $g?I.toJSON():I}}),A}get size(){return[...ji(this._map)].length}keys(){return bQ(ji(this._map),A=>A[0])}values(){return bQ(ji(this._map),A=>A[1].content.getContent()[A[1].length-1])}entries(){return bQ(ji(this._map),A=>[A[0],A[1].content.getContent()[A[1].length-1]])}forEach(A){this._map.forEach((g,e)=>{g.deleted||A(g.content.getContent()[g.length-1],e,this)})}[Symbol.iterator](){return this.entries()}delete(A){this.doc!==null?yg(this.doc,g=>{wB(g,this,A)}):this._prelimContent.delete(A)}set(A,g){return this.doc!==null?yg(this.doc,e=>{aE(e,this,A,g)}):this._prelimContent.set(A,g),g}get(A){return cE(this,A)}has(A){return Mc(this,A)}clear(){this.doc!==null?yg(this.doc,A=>{this.forEach(function(g,e,I){wB(A,I,e)})}):this._prelimContent.clear()}_write(A){A.writeTypeRef(aR)}}const OM=t=>new ue,He=(t,A)=>t===A||typeof t=="object"&&typeof A=="object"&&t&&A&&xS(t,A);class Rn{constructor(A,g,e,I){this.left=A,this.right=g,this.index=e,this.currentAttributes=I}forward(){switch(this.right===null&&jt(),this.right.content.constructor){case Tg:this.right.deleted||MC(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}}const ur=(t,A,g)=>{for(;A.right!==null&&g>0;){switch(A.right.content.constructor){case Tg:A.right.deleted||MC(A.currentAttributes,A.right.content);break;default:A.right.deleted||(g<A.right.length&&_e(t,ng(A.right.id.client,A.right.id.clock+g)),A.index+=A.right.length,g-=A.right.length);break}A.left=A.right,A.right=A.right.right}return A},$i=(t,A,g)=>{const e=new Map,I=vB(A,g);if(I){const C=new Rn(I.p.left,I.p,I.index,e);return ur(t,C,g-I.index)}else{const C=new Rn(null,A._start,0,e);return ur(t,C,g)}},Rc=(t,A,g,e)=>{for(;g.right!==null&&(g.right.deleted===!0||g.right.content.constructor===Tg&&He(e.get(g.right.content.key),g.right.content.value));)g.right.deleted||e.delete(g.right.content.key),g.forward();const I=t.doc,C=I.clientID;e.forEach((i,B)=>{const Q=g.left,n=g.right,E=new xg(ng(C,Vg(I.store,C)),Q,Q&&Q.lastId,n,n&&n.id,A,null,new Tg(B,i));E.integrate(t,0),g.right=E,g.forward()})},MC=(t,A)=>{const{key:g,value:e}=A;e===null?t.delete(g):t.set(g,e)},Lc=(t,A)=>{for(;t.right!==null;){if(!(t.right.deleted||t.right.content.constructor===Tg&&He(A[t.right.content.key]||null,t.right.content.value)))break;t.forward()}},Fc=(t,A,g,e)=>{const I=t.doc,C=I.clientID,i=new Map;for(const B in e){const Q=e[B],n=g.currentAttributes.get(B)||null;if(!He(n,Q)){i.set(B,n);const{left:E,right:o}=g;g.right=new xg(ng(C,Vg(I.store,C)),E,E&&E.lastId,o,o&&o.id,A,null,new Tg(B,Q)),g.right.integrate(t,0),g.forward()}}return i},_Q=(t,A,g,e,I)=>{g.currentAttributes.forEach((s,r)=>{I[r]===void 0&&(I[r]=null)});const C=t.doc,i=C.clientID;Lc(g,I);const B=Fc(t,A,g,I),Q=e.constructor===String?new Ae(e):e instanceof $g?new Se(e):new SI(e);let{left:n,right:E,index:o}=g;A._searchMarker&&gi(A._searchMarker,g.index,Q.getLength()),E=new xg(ng(i,Vg(C.store,i)),n,n&&n.lastId,E,E&&E.id,A,null,Q),E.integrate(t,0),g.right=E,g.index=o,g.forward(),Rc(t,A,g,B)},wr=(t,A,g,e,I)=>{const C=t.doc,i=C.clientID;Lc(g,I);const B=Fc(t,A,g,I);A:for(;g.right!==null&&(e>0||B.size>0&&(g.right.deleted||g.right.content.constructor===Tg));){if(!g.right.deleted)switch(g.right.content.constructor){case Tg:{const{key:Q,value:n}=g.right.content,E=I[Q];if(E!==void 0){if(He(E,n))B.delete(Q);else{if(e===0)break A;B.set(Q,n)}g.right.delete(t)}else g.currentAttributes.set(Q,n);break}default:e<g.right.length&&_e(t,ng(g.right.id.client,g.right.id.clock+e)),e-=g.right.length;break}g.forward()}if(e>0){let Q="";for(;e>0;e--)Q+=`
`;g.right=new xg(ng(i,Vg(C.store,i)),g.left,g.left&&g.left.lastId,g.right,g.right&&g.right.id,A,null,new Ae(Q)),g.right.integrate(t,0),g.forward()}Rc(t,A,g,B)},Nc=(t,A,g,e,I)=>{let C=A;const i=bt();for(;C&&(!C.countable||C.deleted);){if(!C.deleted&&C.content.constructor===Tg){const n=C.content;i.set(n.key,n)}C=C.right}let B=0,Q=!1;for(;A!==C;){if(g===A&&(Q=!0),!A.deleted){const n=A.content;switch(n.constructor){case Tg:{const{key:E,value:o}=n,s=e.get(E)||null;(i.get(E)!==n||s===o)&&(A.delete(t),B++,!Q&&(I.get(E)||null)===o&&s!==o&&(s===null?I.delete(E):I.set(E,s))),!Q&&!A.deleted&&MC(I,n);break}}}A=A.right}return B},VM=(t,A)=>{for(;A&&A.right&&(A.right.deleted||!A.right.countable);)A=A.right;const g=new Set;for(;A&&(A.deleted||!A.countable);){if(!A.deleted&&A.content.constructor===Tg){const e=A.content.key;g.has(e)?A.delete(t):g.add(e)}A=A.left}},WM=t=>{let A=0;return yg(t.doc,g=>{let e=t._start,I=t._start,C=bt();const i=dn(C);for(;I;){if(I.deleted===!1)switch(I.content.constructor){case Tg:MC(i,I.content);break;default:A+=Nc(g,e,I,C,i),C=dn(i),e=I;break}I=I.right}}),A},zM=t=>{const A=new Set,g=t.doc;for(const[e,I]of t.afterState.entries()){const C=t.beforeState.get(e)||0;I!==C&&rc(t,g.store.clients.get(e),C,I,i=>{!i.deleted&&i.content.constructor===Tg&&i.constructor!==Nt&&A.add(i.parent)})}yg(g,e=>{tc(t,t.deleteSet,I=>{if(I instanceof Nt||!I.parent._hasFormatting||A.has(I.parent))return;const C=I.parent;I.content.constructor===Tg?A.add(C):VM(e,I)});for(const I of A)WM(I)})},yr=(t,A,g)=>{const e=g,I=dn(A.currentAttributes),C=A.right;for(;g>0&&A.right!==null;){if(A.right.deleted===!1)switch(A.right.content.constructor){case Se:case SI:case Ae:g<A.right.length&&_e(t,ng(A.right.id.client,A.right.id.clock+g)),g-=A.right.length,A.right.delete(t);break}A.forward()}C&&Nc(t,C,A.right,I,A.currentAttributes);const i=(A.left||A.right).parent;return i._searchMarker&&gi(i._searchMarker,A.index,-e+g),A};class ZM extends HB{constructor(A,g,e){super(A,g),this.childListChanged=!1,this.keysChanged=new Set,e.forEach(I=>{I===null?this.childListChanged=!0:this.keysChanged.add(I)})}get changes(){if(this._changes===null){const A={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=A}return this._changes}get delta(){if(this._delta===null){const A=this.target.doc,g=[];yg(A,e=>{const I=new Map,C=new Map;let i=this.target._start,B=null;const Q={};let n="",E=0,o=0;const s=()=>{if(B!==null){let r=null;switch(B){case"delete":o>0&&(r={delete:o}),o=0;break;case"insert":(typeof n=="object"||n.length>0)&&(r={insert:n},I.size>0&&(r.attributes={},I.forEach((h,d)=>{h!==null&&(r.attributes[d]=h)}))),n="";break;case"retain":E>0&&(r={retain:E},JS(Q)||(r.attributes=GS({},Q))),E=0;break}r&&g.push(r),B=null}};for(;i!==null;){switch(i.content.constructor){case Se:case SI:this.adds(i)?this.deletes(i)||(s(),B="insert",n=i.content.getContent()[0],s()):this.deletes(i)?(B!=="delete"&&(s(),B="delete"),o+=1):i.deleted||(B!=="retain"&&(s(),B="retain"),E+=1);break;case Ae:this.adds(i)?this.deletes(i)||(B!=="insert"&&(s(),B="insert"),n+=i.content.str):this.deletes(i)?(B!=="delete"&&(s(),B="delete"),o+=i.length):i.deleted||(B!=="retain"&&(s(),B="retain"),E+=i.length);break;case Tg:{const{key:r,value:h}=i.content;if(this.adds(i)){if(!this.deletes(i)){const d=I.get(r)||null;He(d,h)?h!==null&&i.delete(e):(B==="retain"&&s(),He(h,C.get(r)||null)?delete Q[r]:Q[r]=h)}}else if(this.deletes(i)){C.set(r,h);const d=I.get(r)||null;He(d,h)||(B==="retain"&&s(),Q[r]=d)}else if(!i.deleted){C.set(r,h);const d=Q[r];d!==void 0&&(He(d,h)?d!==null&&i.delete(e):(B==="retain"&&s(),h===null?delete Q[r]:Q[r]=h))}i.deleted||(B==="insert"&&s(),MC(I,i.content));break}}i=i.right}for(s();g.length>0;){const r=g[g.length-1];if(r.retain!==void 0&&r.attributes===void 0)g.pop();else break}}),this._delta=g}return this._delta}}class dC extends $g{constructor(A){super(),this._pending=A!==void 0?[()=>this.insert(0,A)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this._length}_integrate(A,g){super._integrate(A,g);try{this._pending.forEach(e=>e())}catch(e){console.error(e)}this._pending=null}_copy(){return new dC}clone(){const A=new dC;return A.applyDelta(this.toDelta()),A}_callObserver(A,g){super._callObserver(A,g);const e=new ZM(this,A,g);xB(this,A,e),!A.local&&this._hasFormatting&&(A._needFormattingCleanup=!0)}toString(){let A="",g=this._start;for(;g!==null;)!g.deleted&&g.countable&&g.content.constructor===Ae&&(A+=g.content.str),g=g.right;return A}toJSON(){return this.toString()}applyDelta(A,{sanitize:g=!0}={}){this.doc!==null?yg(this.doc,e=>{const I=new Rn(null,this._start,0,new Map);for(let C=0;C<A.length;C++){const i=A[C];if(i.insert!==void 0){const B=!g&&typeof i.insert=="string"&&C===A.length-1&&I.right===null&&i.insert.slice(-1)===`
`?i.insert.slice(0,-1):i.insert;(typeof B!="string"||B.length>0)&&_Q(e,this,I,B,i.attributes||{})}else i.retain!==void 0?wr(e,this,I,i.retain,i.attributes||{}):i.delete!==void 0&&yr(e,I,i.delete)}}):this._pending.push(()=>this.applyDelta(A))}toDelta(A,g,e){const I=[],C=new Map,i=this.doc;let B="",Q=this._start;function n(){if(B.length>0){const o={};let s=!1;C.forEach((h,d)=>{s=!0,o[d]=h});const r={insert:B};s&&(r.attributes=o),I.push(r),B=""}}const E=()=>{for(;Q!==null;){if(zI(Q,A)||g!==void 0&&zI(Q,g))switch(Q.content.constructor){case Ae:{const o=C.get("ychange");A!==void 0&&!zI(Q,A)?(o===void 0||o.user!==Q.id.client||o.type!=="removed")&&(n(),C.set("ychange",e?e("removed",Q.id):{type:"removed"})):g!==void 0&&!zI(Q,g)?(o===void 0||o.user!==Q.id.client||o.type!=="added")&&(n(),C.set("ychange",e?e("added",Q.id):{type:"added"})):o!==void 0&&(n(),C.delete("ychange")),B+=Q.content.str;break}case Se:case SI:{n();const o={insert:Q.content.getContent()[0]};if(C.size>0){const s={};o.attributes=s,C.forEach((r,h)=>{s[h]=r})}I.push(o);break}case Tg:zI(Q,A)&&(n(),MC(C,Q.content));break}Q=Q.right}n()};return A||g?yg(i,o=>{A&&Sn(o,A),g&&Sn(o,g),E()},"cleanup"):E(),I}insert(A,g,e){if(g.length<=0)return;const I=this.doc;I!==null?yg(I,C=>{const i=$i(C,this,A);e||(e={},i.currentAttributes.forEach((B,Q)=>{e[Q]=B})),_Q(C,this,i,g,e)}):this._pending.push(()=>this.insert(A,g,e))}insertEmbed(A,g,e={}){const I=this.doc;I!==null?yg(I,C=>{const i=$i(C,this,A);_Q(C,this,i,g,e)}):this._pending.push(()=>this.insertEmbed(A,g,e))}delete(A,g){if(g===0)return;const e=this.doc;e!==null?yg(e,I=>{yr(I,$i(I,this,A),g)}):this._pending.push(()=>this.delete(A,g))}format(A,g,e){if(g===0)return;const I=this.doc;I!==null?yg(I,C=>{const i=$i(C,this,A);i.right!==null&&wr(C,this,i,g,e)}):this._pending.push(()=>this.format(A,g,e))}removeAttribute(A){this.doc!==null?yg(this.doc,g=>{wB(g,this,A)}):this._pending.push(()=>this.removeAttribute(A))}setAttribute(A,g){this.doc!==null?yg(this.doc,e=>{aE(e,this,A,g)}):this._pending.push(()=>this.setAttribute(A,g))}getAttribute(A){return cE(this,A)}getAttributes(){return Sc(this)}_write(A){A.writeTypeRef(cR)}}const XM=t=>new dC;class qQ{constructor(A,g=()=>!0){this._filter=g,this._root=A,this._currentNode=A._start,this._firstCall=!0}[Symbol.iterator](){return this}next(){let A=this._currentNode,g=A&&A.content&&A.content.type;if(A!==null&&(!this._firstCall||A.deleted||!this._filter(g)))do if(g=A.content.type,!A.deleted&&(g.constructor===ei||g.constructor===dI)&&g._start!==null)A=g._start;else for(;A!==null;)if(A.right!==null){A=A.right;break}else A.parent===this._root?A=null:A=A.parent._item;while(A!==null&&(A.deleted||!this._filter(A.content.type)));return this._firstCall=!1,A===null?{value:void 0,done:!0}:(this._currentNode=A,{value:A.content.type,done:!1})}}class dI extends $g{constructor(){super(),this._prelimContent=[]}get firstChild(){const A=this._first;return A?A.content.getContent()[0]:null}_integrate(A,g){super._integrate(A,g),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new dI}clone(){const A=new dI;return A.insert(0,this.toArray().map(g=>g instanceof $g?g.clone():g)),A}get length(){return this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(A){return new qQ(this,A)}querySelector(A){A=A.toUpperCase();const e=new qQ(this,I=>I.nodeName&&I.nodeName.toUpperCase()===A).next();return e.done?null:e.value}querySelectorAll(A){return A=A.toUpperCase(),lI(new qQ(this,g=>g.nodeName&&g.nodeName.toUpperCase()===A))}_callObserver(A,g){xB(this,A,new AR(this,g,A))}toString(){return fc(this,A=>A.toString()).join("")}toJSON(){return this.toString()}toDOM(A=document,g={},e){const I=A.createDocumentFragment();return e!==void 0&&e._createAssociation(I,this),ti(this,C=>{I.insertBefore(C.toDOM(A,g,e),null)}),I}insert(A,g){this.doc!==null?yg(this.doc,e=>{yc(e,this,A,g)}):this._prelimContent.splice(A,0,...g)}insertAfter(A,g){if(this.doc!==null)yg(this.doc,e=>{const I=A&&A instanceof $g?A._item:A;uB(e,this,I,g)});else{const e=this._prelimContent,I=A===null?0:e.findIndex(C=>C===A)+1;if(I===0&&A!==null)throw ye("Reference item not found");e.splice(I,0,...g)}}delete(A,g=1){this.doc!==null?yg(this.doc,e=>{pc(e,this,A,g)}):this._prelimContent.splice(A,g)}toArray(){return dc(this)}push(A){this.insert(this.length,A)}unshift(A){this.insert(0,A)}get(A){return uc(this,A)}slice(A=0,g=this.length){return Dc(this,A,g)}forEach(A){ti(this,A)}_write(A){A.writeTypeRef(lR)}}const jM=t=>new dI;class ei extends dI{constructor(A="UNDEFINED"){super(),this.nodeName=A,this._prelimAttrs=new Map}get nextSibling(){const A=this._item?this._item.next:null;return A?A.content.type:null}get prevSibling(){const A=this._item?this._item.prev:null;return A?A.content.type:null}_integrate(A,g){super._integrate(A,g),this._prelimAttrs.forEach((e,I)=>{this.setAttribute(I,e)}),this._prelimAttrs=null}_copy(){return new ei(this.nodeName)}clone(){const A=new ei(this.nodeName),g=this.getAttributes();return KS(g,(e,I)=>{typeof e=="string"&&A.setAttribute(I,e)}),A.insert(0,this.toArray().map(e=>e instanceof $g?e.clone():e)),A}toString(){const A=this.getAttributes(),g=[],e=[];for(const B in A)e.push(B);e.sort();const I=e.length;for(let B=0;B<I;B++){const Q=e[B];g.push(Q+'="'+A[Q]+'"')}const C=this.nodeName.toLocaleLowerCase(),i=g.length>0?" "+g.join(" "):"";return`<${C}${i}>${super.toString()}</${C}>`}removeAttribute(A){this.doc!==null?yg(this.doc,g=>{wB(g,this,A)}):this._prelimAttrs.delete(A)}setAttribute(A,g){this.doc!==null?yg(this.doc,e=>{aE(e,this,A,g)}):this._prelimAttrs.set(A,g)}getAttribute(A){return cE(this,A)}hasAttribute(A){return Mc(this,A)}getAttributes(A){return A?TM(this,A):Sc(this)}toDOM(A=document,g={},e){const I=A.createElement(this.nodeName),C=this.getAttributes();for(const i in C){const B=C[i];typeof B=="string"&&I.setAttribute(i,B)}return ti(this,i=>{I.appendChild(i.toDOM(A,g,e))}),e!==void 0&&e._createAssociation(I,this),I}_write(A){A.writeTypeRef(hR),A.writeKey(this.nodeName)}}const $M=t=>new ei(t.readKey());class AR extends HB{constructor(A,g,e){super(A,e),this.childListChanged=!1,this.attributesChanged=new Set,g.forEach(I=>{I===null?this.childListChanged=!0:this.attributesChanged.add(I)})}}class yB extends ue{constructor(A){super(),this.hookName=A}_copy(){return new yB(this.hookName)}clone(){const A=new yB(this.hookName);return this.forEach((g,e)=>{A.set(e,g)}),A}toDOM(A=document,g={},e){const I=g[this.hookName];let C;return I!==void 0?C=I.createDom(this):C=document.createElement(this.hookName),C.setAttribute("data-yjs-hook",this.hookName),e!==void 0&&e._createAssociation(C,this),C}_write(A){A.writeTypeRef(DR),A.writeKey(this.hookName)}}const gR=t=>new yB(t.readKey());class pB extends dC{get nextSibling(){const A=this._item?this._item.next:null;return A?A.content.type:null}get prevSibling(){const A=this._item?this._item.prev:null;return A?A.content.type:null}_copy(){return new pB}clone(){const A=new pB;return A.applyDelta(this.toDelta()),A}toDOM(A=document,g,e){const I=A.createTextNode(this.toString());return e!==void 0&&e._createAssociation(I,this),I}toString(){return this.toDelta().map(A=>{const g=[];for(const I in A.attributes){const C=[];for(const i in A.attributes[I])C.push({key:i,value:A.attributes[I][i]});C.sort((i,B)=>i.key<B.key?-1:1),g.push({nodeName:I,attrs:C})}g.sort((I,C)=>I.nodeName<C.nodeName?-1:1);let e="";for(let I=0;I<g.length;I++){const C=g[I];e+=`<${C.nodeName}`;for(let i=0;i<C.attrs.length;i++){const B=C.attrs[i];e+=` ${B.key}="${B.value}"`}e+=">"}e+=A.insert;for(let I=g.length-1;I>=0;I--)e+=`</${g[I].nodeName}>`;return e}).join("")}toJSON(){return this.toString()}_write(A){A.writeTypeRef(dR)}}const tR=t=>new pB;class hE{constructor(A,g){this.id=A,this.length=g}get deleted(){throw Xt()}mergeWith(A){return!1}write(A,g,e){throw Xt()}integrate(A,g){throw Xt()}}const eR=0;class Nt extends hE{get deleted(){return!0}delete(){}mergeWith(A){return this.constructor!==A.constructor?!1:(this.length+=A.length,!0)}integrate(A,g){g>0&&(this.id.clock+=g,this.length-=g),sc(A.doc.store,this)}write(A,g){A.writeInfo(eR),A.writeLen(this.length-g)}getMissing(A,g){return null}}class ri{constructor(A){this.content=A}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new ri(this.content)}splice(A){throw Xt()}mergeWith(A){return!1}integrate(A,g){}delete(A){}gc(A){}write(A,g){A.writeBuf(this.content)}getRef(){return 3}}const IR=t=>new ri(t.readBuf());class Ii{constructor(A){this.len=A}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new Ii(this.len)}splice(A){const g=new Ii(this.len-A);return this.len=A,g}mergeWith(A){return this.len+=A.len,!0}integrate(A,g){dB(A.deleteSet,g.id.client,g.id.clock,this.len),g.markDeleted()}delete(A){}gc(A){}write(A,g){A.writeLen(this.len-g)}getRef(){return 1}}const CR=t=>new Ii(t.readLen()),Uc=(t,A)=>new SC({guid:t,...A,shouldLoad:A.shouldLoad||A.autoLoad||!1});class ai{constructor(A){A._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=A;const g={};this.opts=g,A.gc||(g.gc=!1),A.autoLoad&&(g.autoLoad=!0),A.meta!==null&&(g.meta=A.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new ai(Uc(this.doc.guid,this.opts))}splice(A){throw Xt()}mergeWith(A){return!1}integrate(A,g){this.doc._item=g,A.subdocsAdded.add(this.doc),this.doc.shouldLoad&&A.subdocsLoaded.add(this.doc)}delete(A){A.subdocsAdded.has(this.doc)?A.subdocsAdded.delete(this.doc):A.subdocsRemoved.add(this.doc)}gc(A){}write(A,g){A.writeString(this.doc.guid),A.writeAny(this.opts)}getRef(){return 9}}const iR=t=>new ai(Uc(t.readString(),t.readAny()));class SI{constructor(A){this.embed=A}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new SI(this.embed)}splice(A){throw Xt()}mergeWith(A){return!1}integrate(A,g){}delete(A){}gc(A){}write(A,g){A.writeJSON(this.embed)}getRef(){return 5}}const BR=t=>new SI(t.readJSON());class Tg{constructor(A,g){this.key=A,this.value=g}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new Tg(this.key,this.value)}splice(A){throw Xt()}mergeWith(A){return!1}integrate(A,g){const e=g.parent;e._searchMarker=null,e._hasFormatting=!0}delete(A){}gc(A){}write(A,g){A.writeKey(this.key),A.writeJSON(this.value)}getRef(){return 6}}const QR=t=>new Tg(t.readKey(),t.readJSON());class SB{constructor(A){this.arr=A}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new SB(this.arr)}splice(A){const g=new SB(this.arr.slice(A));return this.arr=this.arr.slice(0,A),g}mergeWith(A){return this.arr=this.arr.concat(A.arr),!0}integrate(A,g){}delete(A){}gc(A){}write(A,g){const e=this.arr.length;A.writeLen(e-g);for(let I=g;I<e;I++){const C=this.arr[I];A.writeString(C===void 0?"undefined":JSON.stringify(C))}}getRef(){return 2}}const nR=t=>{const A=t.readLen(),g=[];for(let e=0;e<A;e++){const I=t.readString();I==="undefined"?g.push(void 0):g.push(JSON.parse(I))}return new SB(g)};class fI{constructor(A){this.arr=A}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new fI(this.arr)}splice(A){const g=new fI(this.arr.slice(A));return this.arr=this.arr.slice(0,A),g}mergeWith(A){return this.arr=this.arr.concat(A.arr),!0}integrate(A,g){}delete(A){}gc(A){}write(A,g){const e=this.arr.length;A.writeLen(e-g);for(let I=g;I<e;I++){const C=this.arr[I];A.writeAny(C)}}getRef(){return 8}}const ER=t=>{const A=t.readLen(),g=[];for(let e=0;e<A;e++)g.push(t.readAny());return new fI(g)};class Ae{constructor(A){this.str=A}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new Ae(this.str)}splice(A){const g=new Ae(this.str.slice(A));this.str=this.str.slice(0,A);const e=this.str.charCodeAt(A-1);return e>=55296&&e<=56319&&(this.str=this.str.slice(0,A-1)+"�",g.str="�"+g.str.slice(1)),g}mergeWith(A){return this.str+=A.str,!0}integrate(A,g){}delete(A){}gc(A){}write(A,g){A.writeString(g===0?this.str:this.str.slice(g))}getRef(){return 4}}const oR=t=>new Ae(t.readString()),sR=[qM,OM,XM,$M,jM,gR,tR],rR=0,aR=1,cR=2,hR=3,lR=4,DR=5,dR=6;class Se{constructor(A){this.type=A}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new Se(this.type._copy())}splice(A){throw Xt()}mergeWith(A){return!1}integrate(A,g){this.type._integrate(A.doc,g)}delete(A){let g=this.type._start;for(;g!==null;)g.deleted?g.id.clock<(A.beforeState.get(g.id.client)||0)&&A._mergeStructs.push(g):g.delete(A),g=g.right;this.type._map.forEach(e=>{e.deleted?e.id.clock<(A.beforeState.get(e.id.client)||0)&&A._mergeStructs.push(e):e.delete(A)}),A.changed.delete(this.type)}gc(A){let g=this.type._start;for(;g!==null;)g.gc(A,!0),g=g.right;this.type._start=null,this.type._map.forEach(e=>{for(;e!==null;)e.gc(A,!0),e=e.left}),this.type._map=new Map}write(A,g){this.type._write(A)}getRef(){return 7}}const fR=t=>new Se(sR[t.readTypeRef()](t)),MB=(t,A,g)=>{const{client:e,clock:I}=A.id,C=new xg(ng(e,I+g),A,ng(e,I+g-1),A.right,A.rightOrigin,A.parent,A.parentSub,A.content.splice(g));return A.deleted&&C.markDeleted(),A.keep&&(C.keep=!0),A.redone!==null&&(C.redone=ng(A.redone.client,A.redone.clock+g)),A.right=C,C.right!==null&&(C.right.left=C),t._mergeStructs.push(C),C.parentSub!==null&&C.right===null&&C.parent._map.set(C.parentSub,C),A.length=g,C};class xg extends hE{constructor(A,g,e,I,C,i,B,Q){super(A,Q.getLength()),this.origin=e,this.left=g,this.right=I,this.rightOrigin=C,this.parent=i,this.parentSub=B,this.redone=null,this.content=Q,this.info=this.content.isCountable()?er:0}set marker(A){(this.info&vQ)>0!==A&&(this.info^=vQ)}get marker(){return(this.info&vQ)>0}get keep(){return(this.info&tr)>0}set keep(A){this.keep!==A&&(this.info^=tr)}get countable(){return(this.info&er)>0}get deleted(){return(this.info&HQ)>0}set deleted(A){this.deleted!==A&&(this.info^=HQ)}markDeleted(){this.info|=HQ}getMissing(A,g){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=Vg(g,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=Vg(g,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===iC&&this.id.client!==this.parent.client&&this.parent.clock>=Vg(g,this.parent.client))return this.parent.client;if(this.origin&&(this.left=lr(A,g,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=_e(A,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===Nt||this.right&&this.right.constructor===Nt)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===xg&&(this.parent=this.left.parent,this.parentSub=this.left.parentSub),this.right&&this.right.constructor===xg&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===iC){const e=TQ(g,this.parent);e.constructor===Nt?this.parent=null:this.parent=e.content.type}return null}integrate(A,g){if(g>0&&(this.id.clock+=g,this.left=lr(A,A.doc.store,ng(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(g),this.length-=g),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let e=this.left,I;if(e!==null)I=e.right;else if(this.parentSub!==null)for(I=this.parent._map.get(this.parentSub)||null;I!==null&&I.left!==null;)I=I.left;else I=this.parent._start;const C=new Set,i=new Set;for(;I!==null&&I!==this.right;){if(i.add(I),C.add(I),Xi(this.origin,I.origin)){if(I.id.client<this.id.client)e=I,C.clear();else if(Xi(this.rightOrigin,I.rightOrigin))break}else if(I.origin!==null&&i.has(TQ(A.doc.store,I.origin)))C.has(TQ(A.doc.store,I.origin))||(e=I,C.clear());else break;I=I.right}this.left=e}if(this.left!==null){const e=this.left.right;this.right=e,this.left.right=this}else{let e;if(this.parentSub!==null)for(e=this.parent._map.get(this.parentSub)||null;e!==null&&e.left!==null;)e=e.left;else e=this.parent._start,this.parent._start=this;this.right=e}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(A)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),sc(A.doc.store,this),this.content.integrate(A,this),dr(A,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(A)}else new Nt(this.id,this.length).integrate(A,0)}get next(){let A=this.right;for(;A!==null&&A.deleted;)A=A.right;return A}get prev(){let A=this.left;for(;A!==null&&A.deleted;)A=A.left;return A}get lastId(){return this.length===1?this.id:ng(this.id.client,this.id.clock+this.length-1)}mergeWith(A){if(this.constructor===A.constructor&&Xi(A.origin,this.lastId)&&this.right===A&&Xi(this.rightOrigin,A.rightOrigin)&&this.id.client===A.id.client&&this.id.clock+this.length===A.id.clock&&this.deleted===A.deleted&&this.redone===null&&A.redone===null&&this.content.constructor===A.content.constructor&&this.content.mergeWith(A.content)){const g=this.parent._searchMarker;return g&&g.forEach(e=>{e.p===A&&(e.p=this,!this.deleted&&this.countable&&(e.index-=this.length))}),A.keep&&(this.keep=!0),this.right=A.right,this.right!==null&&(this.right.left=this),this.length+=A.length,!0}return!1}delete(A){if(!this.deleted){const g=this.parent;this.countable&&this.parentSub===null&&(g._length-=this.length),this.markDeleted(),dB(A.deleteSet,this.id.client,this.id.clock,this.length),dr(A,g,this.parentSub),this.content.delete(A)}}gc(A,g){if(!this.deleted)throw jt();this.content.gc(A),g?MM(A,this,new Nt(this.id,this.length)):this.content=new Ii(this.length)}write(A,g){const e=g>0?ng(this.id.client,this.id.clock+g-1):this.origin,I=this.rightOrigin,C=this.parentSub,i=this.content.getRef()&GB|(e===null?0:Dt)|(I===null?0:fe)|(C===null?0:ZC);if(A.writeInfo(i),e!==null&&A.writeLeftID(e),I!==null&&A.writeRightID(I),e===null&&I===null){const B=this.parent;if(B._item!==void 0){const Q=B._item;if(Q===null){const n=pM(B);A.writeParentInfo(!0),A.writeString(n)}else A.writeParentInfo(!1),A.writeLeftID(Q.id)}else B.constructor===String?(A.writeParentInfo(!0),A.writeString(B)):B.constructor===iC?(A.writeParentInfo(!1),A.writeLeftID(B)):jt();C!==null&&A.writeString(C)}this.content.write(A,g)}}const kc=(t,A)=>uR[A&GB](t),uR=[()=>{jt()},CR,nR,IR,oR,BR,QR,fR,ER,iR,()=>{jt()}],wR=10;class Ut extends hE{get deleted(){return!0}delete(){}mergeWith(A){return this.constructor!==A.constructor?!1:(this.length+=A.length,!0)}integrate(A,g){jt()}write(A,g){A.writeInfo(wR),sg(A.restEncoder,this.length-g)}getMissing(A,g){return null}}const Gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},mc="__ $YJS$ __";Gc[mc]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");Gc[mc]=!0;const MI=t=>lC((A,g)=>{t.onerror=e=>g(new Error(e.target.error)),t.onsuccess=e=>A(e.target.result)}),yR=(t,A)=>lC((g,e)=>{const I=indexedDB.open(t);I.onupgradeneeded=C=>A(C.target.result),I.onerror=C=>e(ye(C.target.error)),I.onsuccess=C=>{const i=C.target.result;i.onversionchange=()=>{i.close()},g(i)}}),pR=t=>MI(indexedDB.deleteDatabase(t)),SR=(t,A)=>A.forEach(g=>t.createObjectStore.apply(t,g)),xC=(t,A,g="readwrite")=>{const e=t.transaction(A,g);return A.map(I=>GR(e,I))},Kc=(t,A)=>MI(t.count(A)),MR=(t,A)=>MI(t.get(A)),Jc=(t,A)=>MI(t.delete(A)),RR=(t,A,g)=>MI(t.put(A,g)),Ln=(t,A)=>MI(t.add(A)),LR=(t,A,g)=>MI(t.getAll(A,g)),FR=(t,A,g)=>{let e=null;return kR(t,A,I=>(e=I,!1),g).then(()=>e)},NR=(t,A=null)=>FR(t,A,"prev"),UR=(t,A)=>lC((g,e)=>{t.onerror=e,t.onsuccess=async I=>{const C=I.target.result;if(C===null||await A(C)===!1)return g();C.continue()}}),kR=(t,A,g,e="next")=>UR(t.openKeyCursor(A,e),I=>g(I.key)),GR=(t,A)=>t.objectStore(A),mR=(t,A)=>IDBKeyRange.upperBound(t,A),KR=(t,A)=>IDBKeyRange.lowerBound(t,A),PQ="custom",Hc="updates",vc=500,xc=(t,A=()=>{},g=()=>{})=>{const[e]=xC(t.db,[Hc]);return LR(e,KR(t._dbref,!1)).then(I=>{t._destroyed||(A(e),yg(t.doc,()=>{I.forEach(C=>dM(t.doc,C))},t,!1),g(e))}).then(()=>NR(e).then(I=>{t._dbref=I+1})).then(()=>Kc(e).then(I=>{t._dbsize=I})).then(()=>e)},JR=(t,A=!0)=>xc(t).then(g=>{(A||t._dbsize>=vc)&&Ln(g,Qc(t.doc)).then(()=>Jc(g,mR(t._dbref,!0))).then(()=>Kc(g).then(e=>{t._dbsize=e}))});class HR extends _a{constructor(A,g){super(),this.doc=g,this.name=A,this._dbref=0,this._dbsize=0,this._destroyed=!1,this.db=null,this.synced=!1,this._db=yR(A,e=>SR(e,[["updates",{autoIncrement:!0}],["custom"]])),this.whenSynced=lC(e=>this.on("synced",()=>e(this))),this._db.then(e=>{this.db=e,xc(this,i=>Ln(i,Qc(g)),()=>{if(this._destroyed)return this;this.synced=!0,this.emit("synced",[this])})}),this._storeTimeout=1e3,this._storeTimeoutId=null,this._storeUpdate=(e,I)=>{if(this.db&&I!==this){const[C]=xC(this.db,[Hc]);Ln(C,e),++this._dbsize>=vc&&(this._storeTimeoutId!==null&&clearTimeout(this._storeTimeoutId),this._storeTimeoutId=setTimeout(()=>{JR(this,!1),this._storeTimeoutId=null},this._storeTimeout))}},g.on("update",this._storeUpdate),this.destroy=this.destroy.bind(this),g.on("destroy",this.destroy)}destroy(){return this._storeTimeoutId&&clearTimeout(this._storeTimeoutId),this.doc.off("update",this._storeUpdate),this.doc.off("destroy",this.destroy),this._destroyed=!0,this._db.then(A=>{A.close()})}clearData(){return this.destroy().then(()=>{pR(this.name)})}get(A){return this._db.then(g=>{const[e]=xC(g,[PQ],"readonly");return MR(e,A)})}set(A,g){return this._db.then(e=>{const[I]=xC(e,[PQ]);return RR(I,g,A)})}del(A){return this._db.then(g=>{const[e]=xC(g,[PQ]);return Jc(e,A)})}}class vR{constructor(A,g){this.id=A,this.ydoc=g,this._=null}init(){return this._=new HR(this.id,this.ydoc),new Promise(g=>{this._.on("synced",()=>{g()})})}}class xR{constructor(A){const g=A||{};this.ydoc=g.ydoc||new SC,this.id=g.id||DB(),this.persistence=g.persistence||new vR(this.id,this.ydoc),this.ymap=null,this.observers=[],this.isInitialized=()=>Sg(this.ymap)}init(){return Promise.resolve().then(()=>this.persistence.init()).then(()=>{this.ymap=this.ydoc.getMap("root"),Jp.forEach(A=>{this.ymap.has(A)?this[A]=this.ymap.get(A):(this[A]=new ue,this.ymap.set(A,this[A]))}),eB.forEach(A=>{this.ymap.has(A)?this[A]=this.ymap.get(A):(this[A]=new ue,this.ymap.set(A,this[A]))}),Kp.forEach(A=>{this.ymap.has(A)?this[A]=this.ymap.get(A):(this[A]=new rI,this.ymap.set(A,this[A]))}),this.asset.set("version","2.0"),this.ymap.observeDeep(A=>this._handleYDocUpdates(A))})}getHistory(){const A=[];return eB.forEach(g=>{this[g].forEach((e,I)=>{A.push({action:"add",key:g,id:I,data:e.toJSON()})})}),A}_handleYDocUpdates(A){A.forEach(g=>{const e=g.path[0];if(Sg(e)){if(g.path.length===2){this.observers.forEach(I=>{I({action:"update",key:g.path[0],id:g.path[1],data:g.target.toJSON()})});return}g.changes.keys.forEach((I,C)=>{let i=null,B=C;I.action==="add"?i=g.target.get(C).toJSON():I.action==="update"&&(i=g.target.toJSON(),B=Ht(i)),this.observers.forEach(Q=>{Q({action:I.action,key:e,id:B,data:i})})})}})}observe(A){this.observers.push(A)}addResource(A,g){const e=new ue;Object.entries(g).forEach(([C,i])=>{e.set(C,i)});const I=Ht(g);this[A].set(I,e)}toJSON(){return this.ydoc.toJSON().root}_mergeJSON(A){const g=JSON.parse(JSON.stringify(A));Hp(g),vp(g),xp(g),eB.forEach(e=>{(g[e]||[]).forEach(I=>{const C=Ht(I);if(C&&this[e].has(C)){const i=this[e].get(C);Object.entries(I).forEach(([B,Q])=>{i.set(B,Q)})}else this.addResource(e,I)})})}mergeJSON(A){this.ydoc.transact(()=>this._mergeJSON(A||{}))}}var lE={},YB={};Object.defineProperty(YB,"__esModule",{value:!0});YB.makeDataUriToBuffer=void 0;const YR=t=>A=>{if(A=String(A),!/^data:/i.test(A))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');A=A.replace(/\r?\n/g,"");const g=A.indexOf(",");if(g===-1||g<=4)throw new TypeError("malformed data: URI");const e=A.substring(5,g).split(";");let I="",C=!1;const i=e[0]||"text/plain";let B=i;for(let E=1;E<e.length;E++)e[E]==="base64"?C=!0:e[E]&&(B+=`;${e[E]}`,e[E].indexOf("charset=")===0&&(I=e[E].substring(8)));!e[0]&&!I.length&&(B+=";charset=US-ASCII",I="US-ASCII");const Q=unescape(A.substring(g+1)),n=C?t.base64ToArrayBuffer(Q):t.stringToBuffer(Q);return{type:i,typeFull:B,charset:I,buffer:n}};YB.makeDataUriToBuffer=YR;Object.defineProperty(lE,"__esModule",{value:!0});var Yc=lE.dataUriToBuffer=void 0;const bR=YB;function TR(t){const A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g=[];for(let C=0;C<t.length;C+=4){const i=A.indexOf(t.charAt(C)),B=A.indexOf(t.charAt(C+1)),Q=t.charAt(C+2)==="="?0:A.indexOf(t.charAt(C+2)),n=t.charAt(C+3)==="="?0:A.indexOf(t.charAt(C+3)),E=i<<2|B>>4,o=(B&15)<<4|Q>>2,s=(Q&3)<<6|n;g.push(E),t.charAt(C+2)!=="="&&g.push(o),t.charAt(C+3)!=="="&&g.push(s)}const e=new ArrayBuffer(g.length);return new Uint8Array(e).set(g),e}function _R(t){const A=new ArrayBuffer(t.length),g=new Uint8Array(A);for(let e=0;e<t.length;e++)g[e]=t.charCodeAt(e);return A}Yc=lE.dataUriToBuffer=(0,bR.makeDataUriToBuffer)({stringToBuffer:_R,base64ToArrayBuffer:TR});function pr(t,A){if(A===bl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(A===en||A===qr){let g=t.getIndex();if(g===null){const i=[],B=t.getAttribute("position");if(B!==void 0){for(let Q=0;Q<B.count;Q++)i.push(Q);t.setIndex(i),g=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}const e=g.count-2,I=[];if(A===en)for(let i=1;i<=e;i++)I.push(g.getX(0)),I.push(g.getX(i)),I.push(g.getX(i+1));else for(let i=0;i<e;i++)i%2===0?(I.push(g.getX(i)),I.push(g.getX(i+1)),I.push(g.getX(i+2))):(I.push(g.getX(i+2)),I.push(g.getX(i+1)),I.push(g.getX(i)));I.length/3!==e&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const C=t.clone();return C.setIndex(I),C.clearGroups(),C}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",A),t}function qR(){let t={};return{get:function(A){return t[A]},add:function(A,g){t[A]=g},remove:function(A){delete t[A]},removeAll:function(){t={}}}}const ce={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bc extends ii{constructor(A,g,e,I){super(A,g,e,I)}copySampleValue_(A){const g=this.resultBuffer,e=this.sampleValues,I=this.valueSize,C=A*I*3+I;for(let i=0;i!==I;i++)g[i]=e[C+i];return g}interpolate_(A,g,e,I){const C=this.resultBuffer,i=this.sampleValues,B=this.valueSize,Q=B*2,n=B*3,E=I-g,o=(e-g)/E,s=o*o,r=s*o,h=A*n,d=h-n,a=-2*r+3*s,c=r-s,R=1-a,y=c-s+o;for(let M=0;M!==B;M++){const K=i[d+M+B],G=i[d+M+Q]*E,U=i[h+M+B],W=i[h+M]*E;C[M]=R*K+y*G+a*U+c*W}return C}}const PR=new wI;class OR extends bc{interpolate_(A,g,e,I){const C=super.interpolate_(A,g,e,I);return PR.fromArray(C).normalize().toArray(C),C}}const re={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qC={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sr={9728:Og,9729:et,9984:tn,9985:AB,9986:WI,9987:he},Mr={33071:Rt,33648:nB,10497:nC},OQ={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},VR={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ge={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},WR={CUBICSPLINE:void 0,LINEAR:oC,STEP:OC},VQ={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zR(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new la({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:we})),t.DefaultMaterial}function AI(t,A,g){for(const e in g.extensions)t[e]===void 0&&(A.userData.gltfExtensions=A.userData.gltfExtensions||{},A.userData.gltfExtensions[e]=g.extensions[e])}function II(t,A){A.extras!==void 0&&(typeof A.extras=="object"?Object.assign(t.userData,A.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+A.extras))}function ZR(t,A,g){let e=!1,I=!1,C=!1;for(let n=0,E=A.length;n<E;n++){const o=A[n];if(o.POSITION!==void 0&&(e=!0),o.NORMAL!==void 0&&(I=!0),o.COLOR_0!==void 0&&(C=!0),e&&I&&C)break}if(!e&&!I&&!C)return Promise.resolve(t);const i=[],B=[],Q=[];for(let n=0,E=A.length;n<E;n++){const o=A[n];if(e){const s=o.POSITION!==void 0?g.getDependency("accessor",o.POSITION):t.attributes.position;i.push(s)}if(I){const s=o.NORMAL!==void 0?g.getDependency("accessor",o.NORMAL):t.attributes.normal;B.push(s)}if(C){const s=o.COLOR_0!==void 0?g.getDependency("accessor",o.COLOR_0):t.attributes.color;Q.push(s)}}return Promise.all([Promise.all(i),Promise.all(B),Promise.all(Q)]).then(function(n){const E=n[0],o=n[1],s=n[2];return e&&(t.morphAttributes.position=E),I&&(t.morphAttributes.normal=o),C&&(t.morphAttributes.color=s),t.morphTargetsRelative=!0,t})}function XR(t,A){if(t.updateMorphTargets(),A.weights!==void 0)for(let g=0,e=A.weights.length;g<e;g++)t.morphTargetInfluences[g]=A.weights[g];if(A.extras&&Array.isArray(A.extras.targetNames)){const g=A.extras.targetNames;if(t.morphTargetInfluences.length===g.length){t.morphTargetDictionary={};for(let e=0,I=g.length;e<I;e++)t.morphTargetDictionary[g[e]]=e}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jR(t){let A;const g=t.extensions&&t.extensions[ce.KHR_DRACO_MESH_COMPRESSION];if(g?A="draco:"+g.bufferView+":"+g.indices+":"+WQ(g.attributes):A=t.indices+":"+WQ(t.attributes)+":"+t.mode,t.targets!==void 0)for(let e=0,I=t.targets.length;e<I;e++)A+=":"+WQ(t.targets[e]);return A}function WQ(t){let A="";const g=Object.keys(t).sort();for(let e=0,I=g.length;e<I;e++)A+=g[e]+":"+t[g[e]]+";";return A}function Fn(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $R(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const AL=new og;class gL{constructor(A={},g={}){this.json=A,this.extensions={},this.plugins={},this.options=g,this.cache=new qR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let e=!1,I=!1,C=-1;typeof navigator<"u"&&(e=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,I=navigator.userAgent.indexOf("Firefox")>-1,C=I?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||e||I&&C<98?this.textureLoader=new P0(this.options.manager):this.textureLoader=new z0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(A){this.extensions=A}setPlugins(A){this.plugins=A}parse(A,g){const e=this,I=this.json,C=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(i){return i._markDefs&&i._markDefs()}),Promise.all(this._invokeAll(function(i){return i.beforeRoot&&i.beforeRoot()})).then(function(){return Promise.all([e.getDependencies("scene"),e.getDependencies("animation"),e.getDependencies("camera")])}).then(function(i){const B={scene:i[0][I.scene||0],scenes:i[0],animations:i[1],cameras:i[2],asset:I.asset,parser:e,userData:{}};return AI(C,B,I),II(B,I),Promise.all(e._invokeAll(function(Q){return Q.afterRoot&&Q.afterRoot(B)})).then(function(){A(B)})}).catch(g)}_markDefs(){const A=this.json.nodes||[],g=this.json.skins||[],e=this.json.meshes||[];for(let I=0,C=g.length;I<C;I++){const i=g[I].joints;for(let B=0,Q=i.length;B<Q;B++)A[i[B]].isBone=!0}for(let I=0,C=A.length;I<C;I++){const i=A[I];i.mesh!==void 0&&(this._addNodeRef(this.meshCache,i.mesh),i.skin!==void 0&&(e[i.mesh].isSkinnedMesh=!0)),i.camera!==void 0&&this._addNodeRef(this.cameraCache,i.camera)}}_addNodeRef(A,g){g!==void 0&&(A.refs[g]===void 0&&(A.refs[g]=A.uses[g]=0),A.refs[g]++)}_getNodeRef(A,g,e){if(A.refs[g]<=1)return e;const I=e.clone(),C=(i,B)=>{const Q=this.associations.get(i);Q!=null&&this.associations.set(B,Q);for(const[n,E]of i.children.entries())C(E,B.children[n])};return C(e,I),I.name+="_instance_"+A.uses[g]++,I}_invokeOne(A){const g=Object.values(this.plugins);g.push(this);for(let e=0;e<g.length;e++){const I=A(g[e]);if(I)return I}return null}_invokeAll(A){const g=Object.values(this.plugins);g.unshift(this);const e=[];for(let I=0;I<g.length;I++){const C=A(g[I]);C&&e.push(C)}return e}getDependency(A,g){const e=A+":"+g;let I=this.cache.get(e);if(!I){switch(console.log("CACHE MISS"),A){case"scene":I=this.loadScene(g);break;case"node":I=this._invokeOne(function(C){return C.loadNode&&C.loadNode(g)});break;case"mesh":I=this._invokeOne(function(C){return C.loadMesh&&C.loadMesh(g)});break;case"accessor":I=this.loadAccessor(g);break;case"bufferView":I=this._invokeOne(function(C){return C.loadBufferView&&C.loadBufferView(g)});break;case"buffer":I=this.loadBuffer(g);break;case"material":I=this._invokeOne(function(C){return C.loadMaterial&&C.loadMaterial(g)});break;case"texture":I=this._invokeOne(function(C){return C.loadTexture&&C.loadTexture(g)});break;case"skin":I=this.loadSkin(g);break;case"animation":I=this._invokeOne(function(C){return C.loadAnimation&&C.loadAnimation(g)});break;case"camera":I=this.loadCamera(g);break;default:if(I=this._invokeOne(function(C){return C!=this&&C.getDependency&&C.getDependency(A,g)}),!I)throw new Error("Unknown type: "+A);break}this.cache.add(e,I)}return I}getDependencies(A){let g=this.cache.get(A);if(!g){const e=this,I=this.json[A+(A==="mesh"?"es":"s")]||[];g=Promise.all(I.map(function(C,i){return e.getDependency(A,i)})),this.cache.add(A,g)}return g}loadBuffer(A){const g=this.json.buffers[A],e=this.fileLoader;if(g.type&&g.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+g.type+" buffer type is not supported.");if(g.uri===void 0&&A===0)return Promise.resolve(this.extensions[ce.KHR_BINARY_GLTF].body);const I=this.options;return new Promise(function(C,i){e.load(ys.resolveURL(g.uri,I.path),C,void 0,function(){i(new Error('THREE.GLTFLoader: Failed to load buffer "'+g.uri+'".'))})})}loadBufferView(A){const g=this.json.bufferViews[A];return this.getDependency("buffer",g.buffer).then(function(e){const I=g.byteLength||0,C=g.byteOffset||0;return e.slice(C,C+I)})}loadAccessor(A){const g=this,e=this.json,I=this.json.accessors[A];if(I.bufferView===void 0&&I.sparse===void 0){const i=OQ[I.type],B=qC[I.componentType],Q=I.normalized===!0,n=new B(I.count*i);return Promise.resolve(new rt(n,i,Q))}const C=[];return I.bufferView!==void 0?C.push(this.getDependency("bufferView",I.bufferView)):C.push(null),I.sparse!==void 0&&(C.push(this.getDependency("bufferView",I.sparse.indices.bufferView)),C.push(this.getDependency("bufferView",I.sparse.values.bufferView))),Promise.all(C).then(function(i){const B=i[0],Q=OQ[I.type],n=qC[I.componentType],E=n.BYTES_PER_ELEMENT,o=E*Q,s=I.byteOffset||0,r=I.bufferView!==void 0?e.bufferViews[I.bufferView].byteStride:void 0,h=I.normalized===!0;let d,a;if(r&&r!==o){const c=Math.floor(s/r),R="InterleavedBuffer:"+I.bufferView+":"+I.componentType+":"+c+":"+I.count;let y=g.cache.get(R);y||(d=new n(B,c*r,I.count*r/E),y=new y0(d,r/E),g.cache.add(R,y)),a=new bn(y,Q,s%r/E,h)}else B===null?d=new n(I.count*Q):d=new n(B,s,I.count*Q),a=new rt(d,Q,h);if(I.sparse!==void 0){const c=OQ.SCALAR,R=qC[I.sparse.indices.componentType],y=I.sparse.indices.byteOffset||0,M=I.sparse.values.byteOffset||0,K=new R(i[1],y,I.sparse.count*c),G=new n(i[2],M,I.sparse.count*Q);B!==null&&(a=new rt(a.array.slice(),a.itemSize,a.normalized));for(let U=0,W=K.length;U<W;U++){const BA=K[U];if(a.setX(BA,G[U*Q]),Q>=2&&a.setY(BA,G[U*Q+1]),Q>=3&&a.setZ(BA,G[U*Q+2]),Q>=4&&a.setW(BA,G[U*Q+3]),Q>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return a})}loadTexture(A){const g=this.json,e=this.options,C=g.textures[A].source,i=g.images[C];let B=this.textureLoader;if(i.uri){const Q=e.manager.getHandler(i.uri);Q!==null&&(B=Q)}return this.loadTextureImage(A,C,B)}loadTextureImage(A,g,e){const I=this,C=this.json,i=C.textures[A],B=C.images[g],Q=(B.uri||B.bufferView)+":"+i.sampler;if(this.textureCache[Q])return this.textureCache[Q];const n=this.loadImageSource(g,e).then(function(E){E.flipY=!1,E.name=i.name||B.name||"",E.name===""&&typeof B.uri=="string"&&B.uri.startsWith("data:image/")===!1&&(E.name=B.uri);const s=(C.samplers||{})[i.sampler]||{};return E.magFilter=Sr[s.magFilter]||et,E.minFilter=Sr[s.minFilter]||he,E.wrapS=Mr[s.wrapS]||nC,E.wrapT=Mr[s.wrapT]||nC,I.associations.set(E,{textures:A}),E}).catch(function(){return null});return this.textureCache[Q]=n,n}loadImageSource(A,g){const e=this,I=this.json,C=this.options;if(this.sourceCache[A]!==void 0)return this.sourceCache[A].then(o=>o.clone());const i=I.images[A],B=self.URL||self.webkitURL;let Q=i.uri||"",n=!1;if(i.bufferView!==void 0)Q=e.getDependency("bufferView",i.bufferView).then(function(o){n=!0;const s=new Blob([o],{type:i.mimeType});return Q=B.createObjectURL(s),Q});else if(i.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+A+" is missing URI and bufferView");const E=Promise.resolve(Q).then(function(o){return new Promise(function(s,r){let h=s;g.isImageBitmapLoader===!0&&(h=function(d){const a=new Wg(d);a.needsUpdate=!0,s(a)}),g.load(ys.resolveURL(o,C.path),h,void 0,r)})}).then(function(o){return n===!0&&B.revokeObjectURL(Q),o.userData.mimeType=i.mimeType||$R(i.uri),o}).catch(function(o){throw console.error("THREE.GLTFLoader: Couldn't load texture",Q),o});return this.sourceCache[A]=E,E}assignTexture(A,g,e,I){const C=this;return this.getDependency("texture",e.index).then(function(i){if(!i)return null;if(e.texCoord!==void 0&&e.texCoord>0&&(i=i.clone(),i.channel=e.texCoord),C.extensions[ce.KHR_TEXTURE_TRANSFORM]){const B=e.extensions!==void 0?e.extensions[ce.KHR_TEXTURE_TRANSFORM]:void 0;if(B){const Q=C.associations.get(i);i=C.extensions[ce.KHR_TEXTURE_TRANSFORM].extendTexture(i,B),C.associations.set(i,Q)}}return I!==void 0&&(i.colorSpace=I),A[g]=i,i})}assignFinalMaterial(A){const g=A.geometry;let e=A.material;if(g.attributes.tangent,g.attributes.color,g.attributes.normal,A.isPoints){const I="PointsMaterial:"+e.uuid;let C=this.cache.get(I);C||(C=new ha,Zt.prototype.copy.call(C,e),C.color.copy(e.color),C.map=e.map,C.sizeAttenuation=!1,this.cache.add(I,C)),e=C}else if(A.isLine){const I="LineBasicMaterial:"+e.uuid;let C=this.cache.get(I);C||(C=new ca,Zt.prototype.copy.call(C,e),C.color.copy(e.color),C.map=e.map,this.cache.add(I,C)),e=C}A.material=e}getMaterialType(){return la}loadMaterial(A){const g=this,e=this.json,I=this.extensions,C=e.materials[A];let i;const B={},Q=C.extensions||{},n=[];if(Q[ce.KHR_MATERIALS_UNLIT]){const o=I[ce.KHR_MATERIALS_UNLIT];i=o.getMaterialType(),n.push(o.extendParams(B,C,g))}else{const o=C.pbrMetallicRoughness||{};if(B.color=new Bg(1,1,1),B.opacity=1,Array.isArray(o.baseColorFactor)){const s=o.baseColorFactor;B.color.setRGB(s[0],s[1],s[2],kt),B.opacity=s[3]}o.baseColorTexture!==void 0&&n.push(g.assignTexture(B,"map",o.baseColorTexture,vg)),B.metalness=o.metallicFactor!==void 0?o.metallicFactor:1,B.roughness=o.roughnessFactor!==void 0?o.roughnessFactor:1,o.metallicRoughnessTexture!==void 0&&(n.push(g.assignTexture(B,"metalnessMap",o.metallicRoughnessTexture)),n.push(g.assignTexture(B,"roughnessMap",o.metallicRoughnessTexture))),i=this._invokeOne(function(s){return s.getMaterialType&&s.getMaterialType(A)}),n.push(Promise.all(this._invokeAll(function(s){return s.extendMaterialParams&&s.extendMaterialParams(A,B)})))}C.doubleSided===!0&&(B.side=Ot);const E=C.alphaMode||VQ.OPAQUE;if(E===VQ.BLEND?(B.transparent=!0,B.depthWrite=!1):(B.transparent=!1,E===VQ.MASK&&(B.alphaTest=C.alphaCutoff!==void 0?C.alphaCutoff:.5)),C.normalTexture!==void 0&&i!==ZI&&(n.push(g.assignTexture(B,"normalMap",C.normalTexture)),B.normalScale=new Eg(1,1),C.normalTexture.scale!==void 0)){const o=C.normalTexture.scale;B.normalScale.set(o,o)}if(C.occlusionTexture!==void 0&&i!==ZI&&(n.push(g.assignTexture(B,"aoMap",C.occlusionTexture)),C.occlusionTexture.strength!==void 0&&(B.aoMapIntensity=C.occlusionTexture.strength)),C.emissiveFactor!==void 0&&i!==ZI){const o=C.emissiveFactor;B.emissive=new Bg().setRGB(o[0],o[1],o[2],kt)}return C.emissiveTexture!==void 0&&i!==ZI&&n.push(g.assignTexture(B,"emissiveMap",C.emissiveTexture,vg)),Promise.all(n).then(function(){const o=new i(B);return C.name&&(o.name=C.name),II(o,C),g.associations.set(o,{materials:A}),C.extensions&&AI(I,o,C),o})}createUniqueName(A){const g=wg.sanitizeNodeName(A||"");return g in this.nodeNamesUsed?g+"_"+ ++this.nodeNamesUsed[g]:(this.nodeNamesUsed[g]=0,g)}loadGeometries(A){const g=this,e=this.extensions,I=this.primitiveCache;function C(B){return e[ce.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(B,g).then(function(Q){return Rr(Q,B,g)})}const i=[];for(let B=0,Q=A.length;B<Q;B++){const n=A[B],E=jR(n),o=I[E];if(o)i.push(o.promise);else{let s;n.extensions&&n.extensions[ce.KHR_DRACO_MESH_COMPRESSION]?s=C(n):s=Rr(new ge,n,g),I[E]={primitive:n,promise:s},i.push(s)}}return Promise.all(i)}loadMesh(A){const g=this,e=this.json,I=this.extensions,C=e.meshes[A],i=C.primitives,B=[];for(let Q=0,n=i.length;Q<n;Q++){const E=i[Q].material===void 0?zR(this.cache):this.getDependency("material",i[Q].material);B.push(E)}return B.push(g.loadGeometries(i)),Promise.all(B).then(function(Q){const n=Q.slice(0,Q.length-1),E=Q[Q.length-1],o=[];for(let r=0,h=E.length;r<h;r++){const d=E[r],a=i[r];let c;const R=n[r];if(a.mode===re.TRIANGLES||a.mode===re.TRIANGLE_STRIP||a.mode===re.TRIANGLE_FAN||a.mode===void 0)c=C.isSkinnedMesh===!0?new S0(d,R):new xt(d,R),c.isSkinnedMesh===!0&&c.normalizeSkinWeights(),a.mode===re.TRIANGLE_STRIP?c.geometry=pr(c.geometry,qr):a.mode===re.TRIANGLE_FAN&&(c.geometry=pr(c.geometry,en));else if(a.mode===re.LINES)c=new L0(d,R);else if(a.mode===re.LINE_STRIP)c=new _n(d,R);else if(a.mode===re.LINE_LOOP)c=new F0(d,R);else if(a.mode===re.POINTS)c=new N0(d,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+a.mode);Object.keys(c.geometry.morphAttributes).length>0&&XR(c,C),c.name=g.createUniqueName(C.name||"mesh_"+A),II(c,C),a.extensions&&AI(I,c,a),g.assignFinalMaterial(c),o.push(c)}for(let r=0,h=o.length;r<h;r++)g.associations.set(o[r],{meshes:A,primitives:r});if(o.length===1)return C.extensions&&AI(I,o[0],C),o[0];const s=new De;C.extensions&&AI(I,s,C),g.associations.set(s,{meshes:A});for(let r=0,h=o.length;r<h;r++)s.add(o[r]);return s})}loadCamera(A){let g;const e=this.json.cameras[A],I=e[e.type];if(!I){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return e.type==="perspective"?g=new ot(gB.radToDeg(I.yfov),I.aspectRatio||1,I.znear||1,I.zfar||2e6):e.type==="orthographic"&&(g=new ia(-I.xmag,I.xmag,I.ymag,-I.ymag,I.znear,I.zfar)),e.name&&(g.name=this.createUniqueName(e.name)),II(g,e),Promise.resolve(g)}loadSkin(A){const g=this.json.skins[A],e=[];for(let I=0,C=g.joints.length;I<C;I++)e.push(this._loadNodeShallow(g.joints[I]));return g.inverseBindMatrices!==void 0?e.push(this.getDependency("accessor",g.inverseBindMatrices)):e.push(null),Promise.all(e).then(function(I){const C=I.pop(),i=I,B=[],Q=[];for(let n=0,E=i.length;n<E;n++){const o=i[n];if(o){B.push(o);const s=new og;C!==null&&s.fromArray(C.array,n*16),Q.push(s)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',g.joints[n])}return new Tn(B,Q)})}loadAnimation(A){const g=this.json,e=this,I=g.animations[A],C=I.name?I.name:"animation_"+A,i=[],B=[],Q=[],n=[],E=[];for(let o=0,s=I.channels.length;o<s;o++){const r=I.channels[o],h=I.samplers[r.sampler],d=r.target,a=d.node,c=I.parameters!==void 0?I.parameters[h.input]:h.input,R=I.parameters!==void 0?I.parameters[h.output]:h.output;d.node!==void 0&&(i.push(this.getDependency("node",a)),B.push(this.getDependency("accessor",c)),Q.push(this.getDependency("accessor",R)),n.push(h),E.push(d))}return Promise.all([Promise.all(i),Promise.all(B),Promise.all(Q),Promise.all(n),Promise.all(E)]).then(function(o){const s=o[0],r=o[1],h=o[2],d=o[3],a=o[4],c=[];for(let R=0,y=s.length;R<y;R++){const M=s[R],K=r[R],G=h[R],U=d[R],W=a[R];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const BA=e._createAnimationTracks(M,K,G,U,W);if(BA)for(let f=0;f<BA.length;f++)c.push(BA[f])}return new H0(C,void 0,c)})}createNodeMesh(A){const g=this.json,e=this,I=g.nodes[A];return I.mesh===void 0?null:e.getDependency("mesh",I.mesh).then(function(C){const i=e._getNodeRef(e.meshCache,I.mesh,C);return I.weights!==void 0&&i.traverse(function(B){if(B.isMesh)for(let Q=0,n=I.weights.length;Q<n;Q++)B.morphTargetInfluences[Q]=I.weights[Q]}),i})}loadNode(A){const g=this.json,e=this,I=g.nodes[A],C=e._loadNodeShallow(A),i=[],B=I.children||[];for(let n=0,E=B.length;n<E;n++)i.push(e.getDependency("node",B[n]));const Q=I.skin===void 0?Promise.resolve(null):e.getDependency("skin",I.skin);return Promise.all([C,Promise.all(i),Q]).then(function(n){const E=n[0],o=n[1],s=n[2];s!==null&&E.traverse(function(r){r.isSkinnedMesh&&r.bind(s,AL)});for(let r=0,h=o.length;r<h;r++)E.add(o[r]);return E})}_loadNodeShallow(A){const g=this.json,e=this.extensions,I=this;if(this.nodeCache[A]!==void 0)return this.nodeCache[A];const C=g.nodes[A],i=C.name?I.createUniqueName(C.name):"",B=[],Q=I._invokeOne(function(n){return n.createNodeMesh&&n.createNodeMesh(A)});return Q&&B.push(Q),C.camera!==void 0&&B.push(I.getDependency("camera",C.camera).then(function(n){return I._getNodeRef(I.cameraCache,C.camera,n)})),I._invokeAll(function(n){return n.createNodeAttachment&&n.createNodeAttachment(A)}).forEach(function(n){B.push(n)}),this.nodeCache[A]=Promise.all(B).then(function(n){let E;if(C.isBone===!0?E=new aa:n.length>1?E=new De:n.length===1?E=n[0]:E=new zg,E!==n[0])for(let o=0,s=n.length;o<s;o++)E.add(n[o]);if(C.name&&(E.userData.name=C.name,E.name=i),II(E,C),C.extensions&&AI(e,E,C),C.matrix!==void 0){const o=new og;o.fromArray(C.matrix),E.applyMatrix4(o)}else C.translation!==void 0&&E.position.fromArray(C.translation),C.rotation!==void 0&&E.quaternion.fromArray(C.rotation),C.scale!==void 0&&E.scale.fromArray(C.scale);return I.associations.has(E)||I.associations.set(E,{}),I.associations.get(E).nodes=A,E}),this.nodeCache[A]}loadScene(A){const g=this.extensions,e=this.json.scenes[A],I=this,C=new De;e.name&&(C.name=I.createUniqueName(e.name)),II(C,e),e.extensions&&AI(g,C,e);const i=e.nodes||[],B=[];for(let Q=0,n=i.length;Q<n;Q++)B.push(I.getDependency("node",i[Q]));return Promise.all(B).then(function(Q){for(let E=0,o=Q.length;E<o;E++)C.add(Q[E]);const n=E=>{const o=new Map;for(const[s,r]of I.associations)(s instanceof Zt||s instanceof Wg)&&o.set(s,r);return E.traverse(s=>{const r=I.associations.get(s);r!=null&&o.set(s,r)}),o};return I.associations=n(C),C})}_createAnimationTracks(A,g,e,I,C){const i=[],B=A.name?A.name:A.uuid,Q=[];Ge[C.path]===Ge.weights?A.traverse(function(s){s.morphTargetInfluences&&Q.push(s.name?s.name:s.uuid)}):Q.push(B);let n;switch(Ge[C.path]){case Ge.weights:n=rC;break;case Ge.rotation:n=hI;break;case Ge.position:case Ge.scale:n=aC;break;default:switch(e.itemSize){case 1:n=rC;break;case 2:case 3:default:n=aC;break}break}const E=I.interpolation!==void 0?WR[I.interpolation]:oC,o=this._getArrayFromAccessor(e);for(let s=0,r=Q.length;s<r;s++){const h=new n(Q[s]+"."+Ge[C.path],g.array,o,E);I.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(h),i.push(h)}return i}_getArrayFromAccessor(A){let g=A.array;if(A.normalized){const e=Fn(g.constructor),I=new Float32Array(g.length);for(let C=0,i=g.length;C<i;C++)I[C]=g[C]*e;g=I}return g}_createCubicSplineTrackInterpolant(A){A.createInterpolant=function(e){const I=this instanceof hI?OR:bc;return new I(this.times,this.values,this.getValueSize()/3,e)},A.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tL(t,A,g){const e=A.attributes,I=new yI;if(e.POSITION!==void 0){const B=g.json.accessors[e.POSITION],Q=B.min,n=B.max;if(Q!==void 0&&n!==void 0){if(I.set(new J(Q[0],Q[1],Q[2]),new J(n[0],n[1],n[2])),B.normalized){const E=Fn(qC[B.componentType]);I.min.multiplyScalar(E),I.max.multiplyScalar(E)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const C=A.targets;if(C!==void 0){const B=new J,Q=new J;for(let n=0,E=C.length;n<E;n++){const o=C[n];if(o.POSITION!==void 0){const s=g.json.accessors[o.POSITION],r=s.min,h=s.max;if(r!==void 0&&h!==void 0){if(Q.setX(Math.max(Math.abs(r[0]),Math.abs(h[0]))),Q.setY(Math.max(Math.abs(r[1]),Math.abs(h[1]))),Q.setZ(Math.max(Math.abs(r[2]),Math.abs(h[2]))),s.normalized){const d=Fn(qC[s.componentType]);Q.multiplyScalar(d)}B.max(Q)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}I.expandByVector(B)}t.boundingBox=I;const i=new qe;I.getCenter(i.center),i.radius=I.min.distanceTo(I.max)/2,t.boundingSphere=i}function Rr(t,A,g){const e=A.attributes,I=[];function C(i,B){return g.getDependency("accessor",i).then(function(Q){t.setAttribute(B,Q)})}for(const i in e){const B=VR[i]||i.toLowerCase();B in t.attributes||I.push(C(e[i],B))}if(A.indices!==void 0&&!t.index){const i=g.getDependency("accessor",A.indices).then(function(B){t.setIndex(B)});I.push(i)}return dg.workingColorSpace!==kt&&"COLOR_0"in e&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dg.workingColorSpace}" not supported.`),II(t,A),tL(t,A,g),Promise.all(I).then(function(){return A.targets!==void 0?ZR(t,A.targets,g):t})}class eL extends uI{constructor(A,g){super(),this.object=A,this.domElement=g,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.autoForward=!1,this.lastPosition=new J,this.mousePosition=new iy(1,Math.PI/2,0),this.isRotating=!1,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0},this.moveVector=new J(0,0,0),this.rotationVector=new J(0,0,0),this.contextmenu=this.contextMenu.bind(this),this.pointermove=this.pointermove.bind(this),this.pointerdown=this.pointerdown.bind(this),this.pointerup=this.pointerup.bind(this),this.keydown=this.keydown.bind(this),this.keyup=this.keyup.bind(this),this.domElement.addEventListener("contextmenu",this.contextmenu),this.domElement.addEventListener("pointerdown",this.pointerdown),this.domElement.addEventListener("pointermove",this.pointermove),this.domElement.addEventListener("pointerup",this.pointerup),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),this.updateMovementVector(),this.updateRotationVector(),this.update(1)}dispose(){this.domElement.removeEventListener("contextmenu",this.contextmenu),this.domElement.removeEventListener("pointerdown",this.pointerdown),this.domElement.removeEventListener("pointermove",this.pointermove),this.domElement.removeEventListener("pointerup",this.pointerup),window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup)}update(A){if(this.enabled===!1)return;const g=A*this.movementSpeed,e=A*this.rollSpeed;this.object.translateX(this.moveVector.x*g),this.object.translateY(this.moveVector.y*g),this.object.translateZ(this.moveVector.z*g),this.mousePosition.theta+=this.rotationVector.y*e,this.mousePosition.phi-=this.rotationVector.x*e,this.mousePosition.phi=gB.clamp(this.mousePosition.phi,gB.degToRad(5),gB.degToRad(175));const I=new J;I.setFromSpherical(this.mousePosition).add(this.object.position),this.object.lookAt(I)}updateMovementVector(){const A=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-A+this.moveState.back}updateRotationVector(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft}keydown(A){if(!(A.altKey||this.enabled===!1)){switch(A.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyQ":this.moveState.up=1;break;case"KeyE":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break}this.updateMovementVector(),this.updateRotationVector()}}keyup(A){if(this.enabled!==!1){switch(A.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyQ":this.moveState.up=0;break;case"KeyE":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break}this.updateMovementVector(),this.updateRotationVector()}}pointerdown(A){this.enabled!==!1&&A.button===0&&(this.isRotating=!0)}pointermove(A){if(this.enabled!==!1&&this.isRotating){const g=this.getContainerDimensions(),e=g.size[0]/2,I=g.size[1]/2;this.moveState.yawLeft=-(A.pageX-g.offset[0]-e)/e,this.moveState.pitchDown=(A.pageY-g.offset[1]-I)/I,this.updateRotationVector()}}pointerup(A){this.enabled!==!1&&(A.button===0&&(this.isRotating=!1),this.moveState.yawLeft=0,this.moveState.pitchDown=0,this.updateRotationVector())}contextMenu(A){this.enabled!==!1&&A.preventDefault()}getContainerDimensions(){return this.domElement!==document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}}}const IL=JSON.stringify({asset:{version:"2.0"},scene:0,scenes:[{nodes:[]}]});class Lr{constructor(A){this.camera=new ot(75,1,.1,1e3),this.data={},eB.forEach(g=>{this.data[g]={}}),this.updatePromise=Promise.resolve(),A?(this.renderer=new ra({canvas:A}),this.controls=new eL(this.camera,this.renderer.domElement),this.controls.rollSpeed=2):(this.renderer=null,this.controls=null)}translate(A,g){const e=JSON.parse(IL),I=JSON.parse(JSON.stringify(g));e[A]=[I];const C=new gL(e),i=(B,Q,n,E)=>{const o=B[Q],s=this.data[n][o];return C.cache.add(`${E}:${o}`,Promise.resolve(s)),e[n]=e[n]||{},e[n][o]={},o};if(A==="buffers")return Promise.resolve(Yc(g.uri).buffer);if(A==="bufferViews"){const B=I.extensions.ZF_id;return I.buffer=i(B,"buffer","buffers","buffer"),C.loadBufferView(0)}if(A==="accessors"){const B=I.extensions.ZF_id;return I.bufferView=i(B,"bufferView","bufferViews","bufferView"),C.loadAccessor(0)}if(A==="materials")return C.loadMaterial(0);if(A==="meshes")return I.primitives.forEach((B,Q)=>{const n=I.extensions.ZF_id.primitives[Q];B.material=i(n,"material","materials","material"),B.indices=i(n,"indices","accessors","accessor"),Object.keys(B.attributes).forEach(E=>{B.attributes[E]=i(n.attributes,E,"accessors","accessor")})}),C.loadMesh(0);if(A==="nodes"){const B=new De;return Sg(I.mesh)&&B.add(this.data.meshes[I.extensions.ZF_id.mesh]),(I.extensions.ZF_id.children||[]).forEach(Q=>{let n=this.data.nodes[Q];Sg(n)||(n=new De,this.data.nodes[Q]=n),B.add(n)}),Sg(I.translation)&&B.position.set(...I.translation),Promise.resolve(B)}if(A==="scenes"){const B=new w0;return B.background=new Bg(13421772),(I.extensions.ZF_id.nodes||[]).forEach(Q=>{B.add(this.data.nodes[Q])}),Promise.resolve(B)}return Promise.resolve({})}handleUpdate(A){if(A.action==="delete")return delete this.data[A.key][A.id],Promise.resolve();let g=null;return this.updatePromise=this.updatePromise.then(()=>g=this.data[A.key][A.id]).then(()=>this.translate(A.key,A.data)).then(e=>{g?g.copy(e):this.data[A.key][A.id]=e}),this.updatePromise}resize(A,g){this.renderer&&this.renderer.setSize(A,g),this.camera.aspect=A/g,this.camera.updateProjectionMatrix()}update(){const A=Object.values(this.data.scenes)[0];this.renderer&&A&&this.renderer.render(A,this.camera)}}class CL{constructor(){this.project=null,this.selections={scenes:null},this._resetSelections()}_resetSelections(){this.selections.samplers=null,this.selections.textures=null,this.selections.materials=null,this.selections.meshes=null,this.selections.nodes=null}async init(){}getViewProxy(){return JSON.parse(JSON.stringify(this))}selectScene(A){this._resetSelections(),this.selections.scenes=A}_selectMaterial(A){this.selections.materials=A}selectMaterial(A){this._resetSelections(),this._selectMaterial(A)}_selectMesh(A){this.selections.meshes=A;const g=this.project.meshes.get(A);"material"in g.get("primitives")[0]&&this._selectMaterial(g.get("extensions").ZF_id.primitives[0].material)}selectMesh(A){this._resetSelections(),this._selectMesh(A)}selectNode(A){this._resetSelections(),this.selections.nodes=A;const g=this.project.nodes.get(A);g.has("mesh")&&this._selectMesh(g.get("extensions").ZF_id.mesh)}}class iL{constructor(A){this.session=A,this.project=null}async init(){}getViewProxy(){if(!Sg(this.project)||!Sg(this.project.scenes))return null;const A=this.session.selections.scenes,g=this.project.scenes.get(A);if(!Sg(g))return null;const e=[],I=(C,i)=>{const B=this.project.nodes.get(C),Q=[];(B.get("extensions").ZF_id.children??[]).forEach(n=>I(n,Q)),i.push({name:B.get("name"),id:B.get("extensions").ZF_id.id,children:Q})};return(g.get("extensions").ZF_id.nodes??[]).forEach(C=>I(C,e)),{name:g.get("name"),selection:this.session.selections.nodes,items:e}}applyUpdates(A){A.forEach(g=>{if(g.action==="update"){g.key==="selection"&&this.session.selectNode(g.data);const e=this.project.scenes.get(this.session.selections.scenes);g.key==="sceneGraph"&&e.set("name",g.data.name)}})}}const Nn=(t,A)=>A.some(g=>t instanceof g);let Fr,Nr;function BL(){return Fr||(Fr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QL(){return Nr||(Nr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Un=new WeakMap,zQ=new WeakMap,bB=new WeakMap;function nL(t){const A=new Promise((g,e)=>{const I=()=>{t.removeEventListener("success",C),t.removeEventListener("error",i)},C=()=>{g(aI(t.result)),I()},i=()=>{e(t.error),I()};t.addEventListener("success",C),t.addEventListener("error",i)});return bB.set(A,t),A}function EL(t){if(Un.has(t))return;const A=new Promise((g,e)=>{const I=()=>{t.removeEventListener("complete",C),t.removeEventListener("error",i),t.removeEventListener("abort",i)},C=()=>{g(),I()},i=()=>{e(t.error||new DOMException("AbortError","AbortError")),I()};t.addEventListener("complete",C),t.addEventListener("error",i),t.addEventListener("abort",i)});Un.set(t,A)}let kn={get(t,A,g){if(t instanceof IDBTransaction){if(A==="done")return Un.get(t);if(A==="store")return g.objectStoreNames[1]?void 0:g.objectStore(g.objectStoreNames[0])}return aI(t[A])},set(t,A,g){return t[A]=g,!0},has(t,A){return t instanceof IDBTransaction&&(A==="done"||A==="store")?!0:A in t}};function Tc(t){kn=t(kn)}function oL(t){return QL().includes(t)?function(...A){return t.apply(Gn(this),A),aI(this.request)}:function(...A){return aI(t.apply(Gn(this),A))}}function sL(t){return typeof t=="function"?oL(t):(t instanceof IDBTransaction&&EL(t),Nn(t,BL())?new Proxy(t,kn):t)}function aI(t){if(t instanceof IDBRequest)return nL(t);if(zQ.has(t))return zQ.get(t);const A=sL(t);return A!==t&&(zQ.set(t,A),bB.set(A,t)),A}const Gn=t=>bB.get(t);function rL(t,A,{blocked:g,upgrade:e,blocking:I,terminated:C}={}){const i=indexedDB.open(t,A),B=aI(i);return e&&i.addEventListener("upgradeneeded",Q=>{e(aI(i.result),Q.oldVersion,Q.newVersion,aI(i.transaction),Q)}),g&&i.addEventListener("blocked",Q=>g(Q.oldVersion,Q.newVersion,Q)),B.then(Q=>{C&&Q.addEventListener("close",()=>C()),I&&Q.addEventListener("versionchange",n=>I(n.oldVersion,n.newVersion,n))}).catch(()=>{}),B}const aL=["get","getKey","getAll","getAllKeys","count"],cL=["put","add","delete","clear"],ZQ=new Map;function Ur(t,A){if(!(t instanceof IDBDatabase&&!(A in t)&&typeof A=="string"))return;if(ZQ.get(A))return ZQ.get(A);const g=A.replace(/FromIndex$/,""),e=A!==g,I=cL.includes(g);if(!(g in(e?IDBIndex:IDBObjectStore).prototype)||!(I||aL.includes(g)))return;const C=async function(i,...B){const Q=this.transaction(i,I?"readwrite":"readonly");let n=Q.store;return e&&(n=n.index(B.shift())),(await Promise.all([n[g](...B),I&&Q.done]))[0]};return ZQ.set(A,C),C}Tc(t=>({...t,get:(A,g,e)=>Ur(A,g)||t.get(A,g,e),has:(A,g)=>!!Ur(A,g)||t.has(A,g)}));const hL=["continue","continuePrimaryKey","advance"],kr={},mn=new WeakMap,_c=new WeakMap,lL={get(t,A){if(!hL.includes(A))return t[A];let g=kr[A];return g||(g=kr[A]=function(...e){mn.set(this,_c.get(this)[A](...e))}),g}};async function*DL(...t){let A=this;if(A instanceof IDBCursor||(A=await A.openCursor(...t)),!A)return;A=A;const g=new Proxy(A,lL);for(_c.set(g,A),bB.set(g,Gn(A));A;)yield g,A=await(mn.get(g)||A.continue()),mn.delete(g)}function Gr(t,A){return A===Symbol.asyncIterator&&Nn(t,[IDBIndex,IDBObjectStore,IDBCursor])||A==="iterate"&&Nn(t,[IDBIndex,IDBObjectStore])}Tc(t=>({...t,get(A,g,e){return Gr(A,g)?DL:t.get(A,g,e)},has(A,g){return Gr(A,g)||t.has(A,g)}}));const dL=1,fL="zenbuforge",gI="projects";class uL{constructor(){this.db=null,this.isBusy=!0,this._updates=[],this._projects={}}async init(){this.db=await rL(fL,dL,{upgrade(A){A.createObjectStore(gI)}}),await this.refreshProjects(),this.isBusy=!1}async refreshProjects(){const A=await this.db.transaction(gI).objectStore(gI).getAllKeys(),g=await this.db.transaction(gI).objectStore(gI).getAll();this._projects=Object.fromEntries(A.map((e,I)=>[e,g[I]]))}async commit(A){this.isBusy=!0;const e=await this.db.transaction(gI,"readwrite").objectStore(gI);A.forEach(I=>{I.action==="delete"&&e.delete(I.id),I.action==="add"&&e.put(I.data,I.id)}),await this.refreshProjects(),this.isBusy=!1}getViewProxy(){return this._projects}applyUpdates(A){this._updates.push(...A),!(this.isBusy||this._updates.length===0)&&(this.commit(this._updates),this._updates=[])}}class wL{constructor(A){this.session=A,this.project=null}async init(){return Promise.resolve()}getViewProxy(){if(!Sg(this.project)||!Sg(this.project.scenes))return null;const A=[];return this.project.scenes.forEach((g,e)=>{A.push({id:e,name:g.get("name")})}),{selection:this.session.selections.scenes,items:A}}applyUpdates(A){A.forEach(g=>{g.action==="update"&&g.key==="selection"&&this.session.selectScene(g.data)})}}class XQ{constructor(A,g){this.session=A,this.key=g,this.project=null}async init(){return Promise.resolve()}getViewProxy(){if(!Sg(this.project))return null;const A=this.session.selections[this.key];if(!Sg(A))return null;const g=this.project[this.key].get(A);return Sg(g)?g.toJSON():(console.log(`selection not found: ${this.key}/${A}`),console.log(this.project.toJSON()),null)}applyUpdates(A){const g=this.session.selections[this.key];!Sg(this.project)||!Sg(g)||A.forEach(e=>{if(e.action!=="update")return;const I={[this.key]:[e.data]};this.project.mergeJSON(I)})}}class yL{constructor(A){this.project=null,this.session=new CL,this.canvas=A,this.gui=new Wp(A),this.width=0,this.height=0,this.models={session:this.session,scenes:new wL(this.session),sceneGraph:new iL(this.session),projectList:new uL,node:new XQ(this.session,"nodes"),material:new XQ(this.session,"materials"),mesh:new XQ(this.session,"meshes")},this.clock=new Z0,this.renderer=new Lr(A)}async init(){await this.gui.init(),Object.values(this.models).forEach(A=>A.init())}loadProject(A){return this.project=new xR({id:A}),Object.values(this.models).forEach(g=>g.project=this.project),this.renderer=new Lr(this.canvas),this.project.observe(g=>this.renderer.handleUpdate(g)),Promise.resolve().then(()=>this.project.init()).then(()=>{const g=this.project.scenes.keys().next().value;this.session.selectScene(g)}).then(()=>(this.project.getHistory().forEach(e=>this.renderer.handleUpdate(e)),this.renderer.updatePromise)).then(()=>{const g=Object.values(this.renderer.data.scenes)[0];if(g){const e=new ws;e.position.set(1,1,-1),e.intensity=5,g.add(e)}})}loadUrl(A){return Promise.resolve().then(()=>fetch(A)).then(g=>g.json()).then(g=>(this.project.mergeJSON(g),this.renderer.updatePromise)).then(()=>{const g=Object.values(this.renderer.data.scenes)[0];if(g){const e=new ws;e.position.set(1,1,-1),e.intensity=5,g.add(e)}})}handleRpc(A){if(!(A.id in this)){console.log(`No function ${A.id}`);return}this[A.id](...A.data)}update(){const A=this.clock.getDelta(),g=Object.fromEntries(Object.entries(this.models).map(([C,i])=>[C,i.getViewProxy()])),e=[],I=this.gui.update(A,g,this.width,this.height);Object.entries(I).forEach(([C,i])=>{const B=this.models[C];i.forEach(Q=>{if(Q.action==="rpc"){e.push(Q);return}B.applyUpdates(i)})}),e.forEach(C=>this.handleRpc(C)),this.gui.isActive()||this.renderer.controls.update(A),this.renderer.camera.position.set(0,0,-5),this.renderer.update(),this.gui.render()}resize(A,g){this.renderer.resize(A,g),this.width=A,this.height=g}}const pL=document.getElementById("viewport"),TB=new yL(pL);window.onresize=()=>TB.resize(window.innerWidth,window.innerHeight);TB.resize(window.innerWidth,window.innerHeight);function qc(){TB.update(),requestAnimationFrame(qc)}Promise.resolve().then(()=>TB.init()).then(()=>{qc()});