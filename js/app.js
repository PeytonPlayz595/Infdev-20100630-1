"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.oW=f;}
function $rt_cls(cls){return LW(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return AH_(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bx.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return D; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Bc0());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return ASG();}
function $rt_setThread(t){return Fs(t);}
function $rt_createException(message){return ZY(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var M=$rt_throw;var R=$rt_compare;var Bc1=$rt_nullCheck;var F=$rt_cls;var J=$rt_createArray;var Sg=$rt_isInstance;var C3=$rt_nativeThread;var C=$rt_suspending;var Fe=$rt_resuming;var E_=$rt_invalidPointer;var B=$rt_s;var Bt=$rt_eraseClinit;var Bj=$rt_imul;var Bi=$rt_wrapException;
function D(){this.co=null;this.$id$=0;}
function Bc2(){var a=new D();WD(a);return a;}
function Ba0(b){var c;if(b.co===null)Vs(b);if(b.co.ee===null)b.co.ee=Bc3;else if(b.co.ee!==Bc3){c=new D2;Bl(c,B(0));M(c);}b=b.co;b.fg=b.fg+1|0;}
function BcR(b){var c,d;if(!HF(b)&&b.co.ee===Bc3){c=b.co;d=c.fg-1|0;c.fg=d;if(!d)b.co.ee=null;HF(b);return;}b=new Kj;O(b);M(b);}
function AD0(b){if(b.co===null)Vs(b);if(b.co.ee===null)b.co.ee=Bc3;if(b.co.ee!==Bc3)AXk(b,1);else{b=b.co;b.fg=b.fg+1|0;}}
function Vs(b){b.co=Bau();}
function AXk(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gl=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IT=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaE(callback);return thread.suspend(function(){try{Bcb(b,c,callback);}catch($e){callback.IT($rt_exception($e));}});}
function Bcb(b,c,d){var e,f,g;e=Bc3;if(b.co===null){Vs(b);Fs(e);b=b.co;b.fg=b.fg+c|0;CM(d,null);return;}if(b.co.ee===null){b.co.ee=e;Fs(e);b=b.co;b.fg=b.fg+c|0;CM(d,null);return;}f=b.co;if(f.hh===null)f.hh=AXm();f=f.hh;g=new Q7;g.zB=e;g.zC=b;g.zz=c;g.zA=d;d=g;f.push(d);}
function NP(b){var c;if(!HF(b)&&b.co.ee===Bc3){c=b.co;c.fg=c.fg-1|0;if(c.fg<=0){c.ee=null;if(c.hh!==null&&!JG(c.hh)){c=new SL;c.Dc=b;QV(c);}else HF(b);}return;}b=new Kj;O(b);M(b);}
function HF(a){var b;b=a.co;if(b===null)return 1;a:{if(b.ee===null&&!(b.hh!==null&&!JG(b.hh))){if(b.rg===null)break a;if(JG(b.rg))break a;}return 0;}a.co=null;return 1;}
function WD(a){return;}
function Dl(a){return LW(a.constructor);}
function A4W(a){return MI(a);}
function QZ(a,b){return a!==b?0:1;}
function AUj(a){var b,c,d,e,f,g,h,i;b=new T;W(b);b=H(H(b,IA(Dl(a))),B(1));c=MI(a);if(!c)d=B(2);else{e=(((32-Tt(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=IY(c>>>e&15,16);e=e-4|0;h=i;}d=AH_(f);}return U(H(b,d));}
function MI(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AXJ(a){var b,c,d;if(!Sg(a,EU)&&a.constructor.$meta.item===null){b=new R$;O(b);M(b);}b=AS0(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Xb(a){var b,c;if(!(a.co!==null&&a.co.ee===Bc3?1:0)){b=new Kj;O(b);M(b);}b=a.co.rg;if(b===null)return;while(!JG(b)){c=AOR(b);if(!c.a0i())QV(c);}a.co.rg=null;}
function Jv(){D.call(this);}
var Bc4=null;var Bc5=null;var Bc6=null;function Bc7(){var a=new Jv();AQX(a);return a;}
function AQX(a){return;}
function AQ2(b){var c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AKc();AGk();AQi();ZW();AP2();AIR();ACK();ASk();AC5();AKP();ARI();Y3();AHC();Za();AHg();ALT();AFo();AFq();AOG();AQa();AH2();AOo();ABD();AFz();AEq();AHR();XD();ADB();Z8();AL2();AJ$();AOO();AG6();ASe();AOb();ALI();AAb();AKt();AO$();AEj();AMI();AK_();AMG();AIG();AF9();AHw();AK2();AAm();ZZ();AP8();AJT();AAP();AIj();ALX();ABi();AM$();AHM();AFt();c
=window.minecraftOpts;if(c===null)d=null;else{d=J(B4,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));Bc4=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else if($$je instanceof D8){c=$$je;break a;}else{throw $$e;}}return;}g=A89();h=new Lt;Wa(h,g);h.yc=0;h.mx=g;Oy(c,h);return;case 1:b:{c:{d:{try{AAn(c,g);if(C()){break _;}break d;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else if($$je instanceof D8)
{c=$$je;break c;}else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Bi($$e);if($$je instanceof D8){c=$$je;}else{throw $$e;}}}g=A89();h=new Lt;Wa(h,g);h.yc=0;h.mx=g;Oy(c,h);return;}c=new Il;i=Lq();j=Mz();g=new UM;g.DQ=0;g.cW=c;g.vV=(-1);g.vX=(-1);g.vW=(-1);g.hm=0.0;g.mK=0.0;g.oj=0.0;g.na=0;k=new UT;b=J(FO,4);d=b.data;d[0]=F(I3);d[1]=F(Jj);d[2]=F(JV);d[3]=F(Kl);RD(k,100,F(DP),b);k.Gt=g;g.Ba=k;h=new I7;b=J(FO,2);d=b.data;d[0]=F(KF);d[1]=F(Iz);RD(h,20,F(Gx),b);g.Bw=h;c.cB=g;g=new Sx;g.CS=1.0;g.lG=0.0;g.nB=1.0;g.c7
=20.0;g.sM=B$();g.rQ=Long_div(EG(),Long_fromInt(1000000));c.bf=g;c.kW=null;c.bs=0;c.D=null;g=new RY;g.q2=B(3);g.nY=B(3);g.oe=B$();g.nx=0;g.ga=c;c.ji=g;c.eT=BbO(c);c.bO=0;c.c9=0;c.Hc=null;c.FV=0;c.h7=0;c.Gq=Xp(0.0);c.ce=null;c.C6=Ban();c.BC=BaW();c.hx=1;c.lx=B(3);c.gP=Long_fromInt(-1);c.bp=0;c.cn=0;c.cT=0;c.dA=B$();g=new VS;TM(g,B(4));g.yi=c;g.Eb=1;Tf(g);c.cc=i;c.bB=j;Bc8=c;Bc5=c;c=Bc5;g=new Mi;Bbg();g.oi=B(5);g.FZ=B(6);c.kW=g;Bc5.kW.Gv=B(7);Bc6=A_4(Bc5,B(8));Tf(Bc6);return;default:E_();}}C3().s(b,c,d,e,f,g,
h,i,j,k,$p);}
function AKc(){Bc4=null;Bc5=null;Bc6=null;}
function MO(){}
function FO(){var a=this;D.call(a);a.ui=null;a.fY=null;a.mg=null;}
var Bc9=0;function LW(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new FO;c.fY=b;d=c;b.classObject=d;}return c;}
function A33(a){return a.fY;}
function Ut(a,b){var c;b=b;c=a.fY;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&VR(b.constructor,c)?1:0;}
function P2(a,b){return VR(b.fY,a.fY);}
function IA(a){if(a.ui===null)a.ui=$rt_str(a.fY.$meta.name);return a.ui;}
function FW(a){return a.fY.$meta.primitive?1:0;}
function AGY(a){return AR0(a.fY)===null?0:1;}
function Kw(a){return LW(AR0(a.fY));}
function A6X(){I3.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jj.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];JV.$meta.methods
=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType
:$rt_voidcls(),callable:null},{name:"setCreeperFlashTime",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_floatcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Kl.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntity",modifiers
:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];KF.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType
:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel
:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null}];Iz.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers
:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jr],returnType:$rt_booleancls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jd.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null}];S_.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers
:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable
:null},{name:"writeToNBT",modifiers:4,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null}];WS.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes
:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers
:4,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getCookProgressScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getBurnTimeRemainingScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"isBurning",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"canSmelt",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"smeltItem",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSmeltingResult",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getItemBurnTime",modifiers:0,accessLevel
:1,parameterTypes:[Cd],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Nt.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"anyPlayerInRange",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name
:"updateDelay",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null}];DP.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable
:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null}];EQ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"getTexture",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"getEyeHeight",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_floatcls(),callable:null},{name:"onEntityUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"spawnExplosionParticle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updateRidden",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"setSize",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable
:null},{name:"heal",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable
:null},{name:"knockBack",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"onDeath",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"fall",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"moveEntityWithHeading",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"isOnLadder",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"isEntityAlive",modifiers:0,accessLevel:3,parameterTypes:[],returnType:
$rt_booleancls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"jump",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onEntityDeath",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes
:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null},{name:"kill",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];K$.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null}];ID.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG,$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"setDirection",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"getArtSize",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_voidcls(),callable:null},{name:"onValidSurface",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers
:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null}];Jp.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG,EQ],returnType:$rt_voidcls(),callable:null},{name:"setArrowHeading",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers:0,accessLevel:3,parameterTypes:[Jr],returnType:$rt_voidcls(),callable:null}];E$.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG,$rt_doublecls(),$rt_doublecls(),
$rt_doublecls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"handleWaterMovement",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"pushOutOfBlocks",modifiers:0,accessLevel:1,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable
:null},{name:"dealFireDamage",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers
:0,accessLevel:3,parameterTypes:[Jr],returnType:$rt_voidcls(),callable:null}];Mo.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG,$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:null},{name:"createExplosion",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null}];JJ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[GG,$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes
:[APM],returnType:$rt_voidcls(),callable:null},{name:"getWorld",modifiers:0,accessLevel:3,parameterTypes:[],returnType:GG,callable:null}];Gd.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"getCollisionBox",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:I5,callable:null},{name:"getBoundingBox",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I5,callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_booleancls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG,$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"getYOffset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_doublecls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable
:null},{name:"setEntityDead",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getPosOffset",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Ki,callable:null},{name:"getPos",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Ki,callable:null},{name:
"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APM],returnType:$rt_voidcls(),callable:null},{name:"applyEntityCollision",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType
:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jr],returnType:$rt_booleancls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];}
function ASm(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!FW(a)&&!AGY(a)){if(a.mg===null){if(!Bc9){Bc9=1;A6X();}b=a.fY.$meta.methods;a.mg=J(Kq,b.length);c=0;d=0;while(d<b.length){e=b[d];if(DJ($rt_str(e.name),B(9))){f=e.parameterTypes;g=J(FO,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=LW(f[i]);i=i+1|0;}h=a.mg.data;j=c+1|0;k=new Kq;l=$rt_str(e.name);m=e.modifiers;i=e.accessLevel;f=Jz(e.callable,"call");k.zP=a;k.HW=l;k.va=m;k.Dh=i;k.nc=g;k.vH=f;h[c]=k;c=j;}d=d+1|0;}a.mg=Nm(a.mg,c);}return a.mg.oW();}return J(Kq,0);}
function Wx(a,b){var c,d,e,f,g,h,i,j,k,l;c=ASm(a).data;d=c.length;e=0;while(true){if(e>=d){f=new UP;O(f);M(f);}g=c[e];if(!(AD$(g)&1)?0:1){a:{h=ABh(g);if(h===b)i=1;else{if(h!==null&&b!==null){j=h.data;h=b.data;k=j.length;if(k==h.length){i=0;while(i<k){f=j[i];l=h[i];if(!(f===l?1:f!==null?QZ(f,l):l!==null?0:1)){i=0;break a;}i=i+1|0;}i=1;break a;}}i=0;}}if(i)break;}e=e+1|0;}return g;}
function JF(a){return LW(a.fY.$meta.superclass);}
function Zm(a){var b;b=a.fY;if(!Bc$){AWW();Bc$=1;}b=A2p(b);if(b!==null)return b;b=new LX;O(b);M(b);}
function AJ4(){D.call(this);}
function Bc_(){var a=new AJ4();A66(a);return a;}
function A66(a){return;}
function Cu(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Jz(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function T0(){D.call(this);}
var Bc$=0;function Bda(){var a=new T0();A_p(a);return a;}
function A_p(a){return;}
function AS0(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function VR(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(VR(d[e],c))return 1;e=e+1|0;}return 0;}
function AWW(){var c='$$constructor$$';B4[c]=X3;D[c]=WD;AMa[c]=A1q;IZ[c]=AVu;Fh[c]=AUI;D8[c]=O;AOQ[c]=AWL;IM[c]=AXG;ALC[c]=A3t;B6[c]=ATh;BE[c]=AZH;T[c]=A_e;HJ[c]=W;Jv[c]=AQX;ABe[c]=A2Y;AJ4[c]=A66;T0[c]=A_p;Gk[c]=AHA;Bs[c]=VL;W3[c]=A2i;W9[c]=AZd;W$[c]=AXc;W7[c]=A45;W8[c]=A_M;W5[c]=A37;W6[c]=AXr;W4[c]=A22;Qu[c]=A1$;Qt[c]=A31;AEC[c]=A2P;B1[c]=A3Q;Lg[c]=A6h;VX[c]=AZh;AFa[c]=AV5;ZC[c]=A24;Mw[c]=KE;AAQ[c]=A$2;AKA[c]=A1C;AQh[c]=A05;AB_[c]=AVq;NO[c]=AD6;UQ[c]=AQr;ADq[c]=A$g;Dz[c]=A3b;L3[c]=AZA;AJd[c]=AV6;YR[c]=A0k;Cb[c]
=AT7;AI_[c]=A55;EE[c]=AUH;Nx[c]=AIl;AE3[c]=AS$;W_[c]=A3q;Sv[c]=ZK;Ue[c]=A28;MP[c]=OL;AA6[c]=AY2;Jd[c]=AZX;D$[c]=ANt;AHF[c]=A1R;B8[c]=AQj;P0[c]=A83;Og[c]=AZS;LZ[c]=ATi;N3[c]=A7v;AGh[c]=A0b;R$[c]=A6D;IU[c]=A0V;BO[c]=AUt;FD[c]=AW3;PK[c]=A6J;AMl[c]=ATx;F$[c]=AHE;Hs[c]=A_n;AOn[c]=A2N;Xq[c]=A8L;Kj[c]=A7g;D2[c]=A9T;ZS[c]=A2B;WX[c]=A1g;GY[c]=AU_;E2[c]=A7Q;AR9[c]=AXH;OP[c]=Y_;ANu[c]=A8F;CS[c]=DQ;Gc[c]=M_;JQ[c]=A5D;Bu[c]=AO2;ACz[c]=AUi;Es[c]=A42;UX[c]=A9$;G7[c]=AZM;Qg[c]=A$x;AKU[c]=A4s;ACh[c]=A3l;AG_[c]=A4n;Rz[c]=A0J;AJE[c]
=AV_;Qj[c]=ANK;AAB[c]=ASP;AIF[c]=A5v;Jk[c]=AYc;FR[c]=A6L;G$[c]=A5S;Gp[c]=A1D;Mk[c]=A92;AAX[c]=AWa;AFR[c]=A88;S_[c]=A16;WS[c]=AU$;KR[c]=A2l;Rt[c]=A6N;Wy[c]=AFs;Lx[c]=AHq;O0[c]=ALf;HT[c]=AC8;HV[c]=AGu;JY[c]=A7L;OI[c]=AH$;L9[c]=AVR;Ho[c]=AAh;Na[c]=ARZ;Qv[c]=A_g;WE[c]=AVj;WC[c]=A5J;Hi[c]=AQG;Nb[c]=AKk;R4[c]=ASK;R6[c]=A96;R5[c]=A9_;R7[c]=A3F;AA0[c]=ATt;Nt[c]=A8a;ARX[c]=AXj;AQg[c]=A4o;PR[c]=AYa;ACE[c]=A94;ARe[c]=AU8;AB6[c]=AZI;AIm[c]=AWm;HN[c]=A8b;TF[c]=AZs;AAp[c]=AZy;Rs[c]=ASS;AOT[c]=A7f;AQL[c]=AXp;ARx[c]=A$f;V3[c]
=AT_;ABz[c]=AUk;AH5[c]=AUK;AIz[c]=A48;AEU[c]=A3Z;UP[c]=A6K;Gg[c]=A$d;U$[c]=AO4;AQE[c]=A3$;APM[c]=A8I;PZ[c]=A$5;SD[c]=AYK;LX[c]=A68;S6[c]=A$E;AMg[c]=AS4;NN[c]=AC$;QS[c]=ALy;ALt[c]=A7m;Z_[c]=A8t;NW[c]=AVK;Mt[c]=A4j;MT[c]=A5Z;Li[c]=A1H;N8[c]=AZY;Pd[c]=AZV;Mm[c]=AZz;MD[c]=A_G;OB[c]=A8l;QO[c]=AG4;ARQ[c]=AXz;XU[c]=A$n;XN[c]=A2a;AD_[c]=A0B;ARP[c]=A6S;AE9[c]=AU6;AR7[c]=A2R;HQ[c]=A$l;K0[c]=AXU;CE[c]=A4x;ZJ[c]=A2t;H6[c]=AF7;TK[c]=A_B;WU[c]=A4t;ABI[c]=AVf;AJo[c]=A0E;AQ4[c]=AW0;AGg[c]=A8h;Ez[c]=A3M;Ws[c]=A34;Wt[c]=AWH;NE[c]
=AWS;M8[c]=A0R;AEE[c]=AWp;AFi[c]=AXb;AFr[c]=ATQ;NA[c]=AUY;L$[c]=AWV;AHQ[c]=A7R;Ox[c]=AZO;AMM[c]=A0I;ACH[c]=A9G;AAf[c]=A$0;AJ9[c]=AT4;AP_[c]=A3W;AHY[c]=AZ4;APm[c]=ATS;AEm[c]=AYo;AFX[c]=AUW;YV[c]=AUr;AIv[c]=AX6;APB[c]=AYB;AE7[c]=A6p;ALa[c]=ATl;ACT[c]=AUA;AG9[c]=AXO;APP[c]=A77;ABs[c]=AUu;AAF[c]=A9o;AHW[c]=A6j;La[c]=AVz;AQC[c]=A6t;AMS[c]=A1y;AAy[c]=A6T;AKO[c]=A11;AKs[c]=AS3;Zp[c]=A73;AL6[c]=A$L;KI[c]=AT1;SX[c]=AAg;AJX[c]=ATR;Nf[c]=ASj;AFY[c]=A0g;NT[c]=ABk;Pu[c]=A_D;Ra[c]=A6Y;WO[c]=AXW;N$[c]=AVS;ARh[c]=A0S;AIo[c]
=AWO;Y2[c]=AZ9;}
function A2p(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function AZJ(b){return setTimeout(function(){$rt_threadStarter(A3X)(b);},0);}
function A3X(b){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.ko();if(C()){break _;}return;default:E_();}}C3().s(b,$p);}
function QV(b){AFD(b,0);}
function AFD(b,c){return setTimeout(function(){A3X(b);},c);}
function APZ(b){return String.fromCharCode(b);}
function AR0(b){return b.$meta.item;}
function AXm(){return [];}
function Db(){}
function DL(){}
function KX(){}
function B4(){var a=this;D.call(a);a.bx=null;a.qm=0;}
var Bdb=null;function Bdc(){var a=new B4();X3(a);return a;}
function AH_(a){var b=new B4();Tj(b,a);return b;}
function Lj(a,b,c){var d=new B4();ASz(d,a,b,c);return d;}
function A23(a,b){var c=new B4();Yr(c,a,b);return c;}
function A$y(a,b,c){var d=new B4();Xw(d,a,b,c);return d;}
function X3(a){a.bx=$rt_createCharArray(0);}
function Tj(a,b){var c,d;b=b.data;c=b.length;a.bx=$rt_createCharArray(c);d=0;while(d<c){a.bx.data[d]=b[d];d=d+1|0;}}
function ASz(a,b,c,d){var e,f;a.bx=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bx.data[e]=f[e+c|0];e=e+1|0;}}
function Yr(a,b,c){c=AN0(c,AMA(b,0,b.data.length));if(AJA(c)&&!c.bk&&c.cy==c.mB)a.bx=APh(c);else{a.bx=$rt_createCharArray(Ct(c));AEO(c,a.bx);}}
function Xw(a,b,c,d){var e,f,g,h,i,j;a.bx=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bx.data;j=e+1|0;g[e]=i&65535;}else{g=a.bx.data;c=e+1|0;g[e]=IB(i);g=a.bx.data;j=c+1|0;g[c]=H7(i);}f=f+1|0;c=h;e=j;}if(e<a.bx.data.length)a.bx=O2(a.bx,e);}
function Y(a,b){var c;if(b>=0&&b<a.bx.data.length)return a.bx.data[b];c=new IU;O(c);M(c);}
function Bh(a){return a.bx.data.length;}
function Iv(a){return a.bx.data.length?0:1;}
function ARn(a,b){var c,d,e;if(a===b)return 0;c=CB(Bh(a),Bh(b));d=0;while(true){if(d>=c)return Bh(a)-Bh(b)|0;e=Y(a,d)-Y(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AJB(a,b){var c,d,e;if(a===b)return 0;c=CB(Bh(a),Bh(b));d=0;while(true){if(d>=c)return Bh(a)-Bh(b)|0;e=EV(Y(a,d))-EV(Y(b,d))|0;if(e)break;d=d+1|0;}return e;}
function V9(a,b,c){var d,e,f;if((c+Bh(b)|0)>Bh(a))return 0;d=0;while(d<Bh(b)){e=Y(b,d);f=c+1|0;if(e!=Y(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Iw(a,b){if(a===b)return 1;return V9(a,b,0);}
function Hg(a,b,c){var d,e,f,g;d=DB(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bx.data.length)return (-1);if(a.bx.data[d]==e)break;d=d+1|0;}return d;}f=IB(b);g=H7(b);while(true){if(d>=(a.bx.data.length-1|0))return (-1);if(a.bx.data[d]==f&&a.bx.data[d+1|0]==g)break;d=d+1|0;}return d;}
function Uy(a,b){return Hg(a,b,0);}
function If(a,b,c){var d,e,f,g,h;d=CB(c,Bh(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bx.data[d]==e)break;d=d+(-1)|0;}return d;}f=IB(b);g=H7(b);while(true){if(d<1)return (-1);if(a.bx.data[d]==g){h=a.bx.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function LF(a,b){return If(a,b,Bh(a)-1|0);}
function AKF(a,b,c){var d,e,f;d=DB(0,c);e=Bh(a)-Bh(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=Bh(b))break a;if(Y(a,d+f|0)!=Y(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AAu(a,b,c){var d,e;d=CB(c,Bh(a)-Bh(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=Bh(b))break a;if(Y(a,d+e|0)!=Y(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Ev(a,b,c){var d;if(b<=c)return Lj(a.bx,b,c-b|0);d=new BO;O(d);M(d);}
function Jq(a,b){return Ev(a,b,Bh(a));}
function AVH(a,b,c){return Ev(a,b,c);}
function N0(a,b,c){var d,e,f,g;d=new T;W(d);e=Bh(a)-Bh(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Bh(b)){FK(d,c);f=f+(Bh(b)-1|0)|0;break a;}if(Y(a,f+g|0)!=Y(b,g))break;g=g+1|0;}Dx(d,Y(a,f));}f=f+1|0;}FK(d,Jq(a,f));return U(d);}
function AUf(a){return a;}
function Nq(a){var b,c,d,e;b=$rt_createCharArray(a.bx.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bx.data[d];d=d+1|0;}return b;}
function Uj(b){return b===null?B(10):b.gk();}
function VO(b){var c;c=new T;W(c);return U(Be(c,b));}
function DJ(a,b){var c,d;if(a===b)return 1;if(!(b instanceof B4))return 0;c=b;if(Bh(c)!=Bh(a))return 0;d=0;while(d<Bh(c)){if(Y(a,d)!=Y(c,d))return 0;d=d+1|0;}return 1;}
function A8j(a){var b,c,d,e;a:{if(!a.qm){b=a.bx.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.qm=(31*a.qm|0)+e|0;d=d+1|0;}}}return a.qm;}
function AKi(a){var b,c,d,e,f,g,h;if(Iv(a))return a;b=$rt_createIntArray(a.bx.data.length);c=b.data;d=0;e=0;while(e<a.bx.data.length){a:{if(e!=(a.bx.data.length-1|0)&&Dt(a.bx.data[e])){f=a.bx.data;g=e+1|0;if(DR(f[g])){h=d+1|0;c[d]=GO(EJ(a.bx.data[e],a.bx.data[g]));e=g;break a;}}h=d+1|0;c[d]=EV(a.bx.data[e]);}e=e+1|0;d=h;}return A$y(b,0,d);}
function AOg(a){var b,c,d,e,f,g,h;if(Iv(a))return a;b=$rt_createIntArray(a.bx.data.length);c=b.data;d=0;e=0;while(e<a.bx.data.length){a:{if(e!=(a.bx.data.length-1|0)&&Dt(a.bx.data[e])){f=a.bx.data;g=e+1|0;if(DR(f[g])){h=d+1|0;c[d]=GN(EJ(a.bx.data[e],a.bx.data[g]));e=g;break a;}}h=d+1|0;c[d]=FC(a.bx.data[e]);}e=e+1|0;d=h;}return A$y(b,0,d);}
function ANj(a,b){var c,d;if(b===null){b=new EE;Bl(b,B(11));M(b);}Bdd=1;c=Bbt();d=new HS;d.h4=1;d.eN=b;d.bG=$rt_createCharArray(Bh(b)+2|0);Di(Nq(b),0,d.bG,0,Bh(b));d.bG.data[d.bG.data.length-1|0]=0;d.bG.data[d.bG.data.length-2|0]=0;d.DR=d.bG.data.length;d.l5=0;Gy(d);Gy(d);c.o=d;c.fO=0;c.uY=SR(c,(-1),c.fO,null);if(!Eo(c.o))M(CN(B(3),c.o.eN,c.o.ig));if(c.y$)c.uY.iV();return AIO(c,a);}
function AVY(a,b){return ARn(a,b);}
function AGk(){Bdb=new VX;}
function D8(){var a=this;D.call(a);a.vv=null;a.jB=null;a.oo=0;a.rM=0;a.pb=null;a.qL=null;}
function Bde(){var a=new D8();O(a);return a;}
function Bdf(a){var b=new D8();Bl(b,a);return b;}
function Bdg(a){var b=new D8();WP(b,a);return b;}
function O(a){a.oo=1;a.rM=1;}
function Bl(a,b){a.oo=1;a.rM=1;a.vv=b;}
function WP(a,b){a.oo=1;a.rM=1;a.jB=b;}
function A5E(a){return a;}
function A0h(a){return a.vv;}
function AWl(a){return a.lN();}
function Cc(a){SS(a,C1());}
function SS(a,b){var c,d,e,f,g;Ko(b,IA(Dl(a)));c=a.lN();if(c!==null){d=new T;W(d);Ko(b,U(H(H(d,B(12)),c)));}a:{APz(b);if(a.qL!==null){e=a.qL.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Ko(b,B(13));ACg(b,d);g=g+1|0;}}}if(a.jB!==null&&a.jB!==a){Ko(b,B(14));SS(a.jB,b);}}
function Oy(a,b){var c,d,e,f,g;Hl(b,IA(Dl(a)));c=a.lN();if(c!==null){d=new T;W(d);Hl(b,U(H(H(d,B(12)),c)));}a:{SI(b);if(a.qL!==null){e=a.qL.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Hl(b,B(15));AAA(b,d);g=g+1|0;}}}if(a.jB!==null&&a.jB!==a){Hl(b,B(14));Oy(a.jB,b);}}
function WH(a,b){if(!a.oo)return;a.pb=Nm(a.pb,a.pb.data.length+1|0);a.pb.data[a.pb.data.length-1|0]=b;}
function Fh(){D8.call(this);}
function Bdh(){var a=new Fh();AUI(a);return a;}
function AUI(a){O(a);}
function IZ(){Fh.call(this);}
function Bdi(){var a=new IZ();AVu(a);return a;}
function AVu(a){O(a);}
function AMa(){IZ.call(this);}
function Bdj(){var a=new AMa();A1q(a);return a;}
function A1q(a){O(a);}
function HJ(){var a=this;D.call(a);a.O=null;a.bZ=0;}
function Bdk(){var a=new HJ();W(a);return a;}
function BcP(a){var b=new HJ();Gz(b,a);return b;}
function W(a){Gz(a,16);}
function Gz(a,b){a.O=$rt_createCharArray(b);}
function Tq(a,b,c){return AMt(a,a.bZ,b,c);}
function AMt(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);f=a.O.data;g=b+1|0;f[b]=45;b=g;}a.O.data[b]=IY(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bj(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)e=b;else{f=a.O.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.O.data;b=e+1|0;f[e]=IY(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function ADa(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);g=a.O.data;h=b+1|0;g[b]=45;b=h;}a.O.data[b]=IY(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)i=b;else{g=a.O.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.O.data;b=i+1|0;g[i]=IY(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function AOp(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdl;AOc(c,f);d=f.uu;g=f.ub;h=f.zf;i=1;j=1;if(h){h=1;j=2;}k=9;l=A0P(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=DB(k,i+1|0);g=0;}else if(g<0){d=d/Bdm.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;C2(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.O.data;h=b+
1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.O.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.O.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.O.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.O.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.O.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.O.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AKv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdn;ABU(c,f);g=f.uZ;h=f.t1;i=f.y8;j=1;k=1;if(i)k=2;l=18;d=AZw(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=DB(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,Bdo.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;C2(a,b,b+(k+l|0)|
0);if(!i)i=b;else{e=a.O.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.O.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.O.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.O.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.O.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.O.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.O.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else
{e=a.O.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.O.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function A0P(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AZw(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=Bdp.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,Bdp.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,Bdp.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function Dx(a,b){return a.yf(a.bZ,b);}
function KZ(a,b,c){C2(a,b,b+1|0);a.O.data[b]=c;return a;}
function MU(a,b){var c;if(a.O.data.length>=b)return;c=a.O.data.length>=1073741823?2147483647:DB(b,DB(a.O.data.length*2|0,5));a.O=O2(a.O,c);}
function U(a){return Lj(a.O,0,a.bZ);}
function IT(a,b,c,d){return a.xP(a.bZ,b,c,d);}
function J5(a,b,c,d,e){var f,g,h,i;C2(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.O.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hh(a,b){return a.xh(b,0,b.data.length);}
function C2(a,b,c){var d,e;d=a.bZ-b|0;a.nw((a.bZ+c|0)-b|0);e=d-1|0;while(e>=0){a.O.data[c+e|0]=a.O.data[b+e|0];e=e+(-1)|0;}a.bZ=a.bZ+(c-b|0)|0;}
function Ir(){}
function T(){HJ.call(this);}
function BX(){var a=new T();A_e(a);return a;}
function A_e(a){W(a);}
function H(a,b){Nu(a,a.bZ,b);return a;}
function Be(a,b){Tq(a,b,10);return a;}
function C6(a,b){UE(a,a.bZ,b);return a;}
function AWy(a,b){WF(a,a.bZ,b);return a;}
function AKo(a,b){Ql(a,a.bZ,b);return a;}
function ASY(a,b){Dx(a,b);return a;}
function AU5(a,b,c,d){IT(a,b,c,d);return a;}
function A9U(a,b){Hh(a,b);return a;}
function FK(a,b){Xj(a,a.bZ,b);return a;}
function UE(a,b,c){ADa(a,b,c,10);return a;}
function WF(a,b,c){AOp(a,b,c);return a;}
function Ql(a,b,c){AKv(a,b,c);return a;}
function A9c(a,b,c,d,e){J5(a,b,c,d,e);return a;}
function Xj(a,b,c){Nu(a,b,c===null?B(10):c.gk());return a;}
function AYT(a,b,c){KZ(a,b,c);return a;}
function AGG(a,b,c){var d,e,f,g,h,i,j;d=R(b,c);if(d<=0&&b<=a.bZ){if(d){e=a.bZ-c|0;a.bZ=a.bZ-(c-b|0)|0;d=0;while(d<e){f=a.O.data;g=b+1|0;h=a.O.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new IU;O(j);M(j);}
function Se(a,b){var c,d,e,f;if(b>=0&&b<a.bZ){a.bZ=a.bZ-1|0;while(b<a.bZ){c=a.O.data;d=a.O.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new IU;O(f);M(f);}
function Nu(a,b,c){var d,e,f;if(b>=0&&b<=a.bZ){a:{if(c===null)c=B(10);else if(Iv(c))break a;MU(a,a.bZ+Bh(c)|0);d=a.bZ-1|0;while(d>=b){a.O.data[d+Bh(c)|0]=a.O.data[d];d=d+(-1)|0;}a.bZ=a.bZ+Bh(c)|0;d=0;while(d<Bh(c)){e=a.O.data;f=b+1|0;e[b]=Y(c,d);d=d+1|0;b=f;}}return a;}c=new IU;O(c);M(c);}
function ANe(a,b){a.bZ=b;}
function AAw(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BO;Bl(f,B(16));M(f);}while(b<c){g=d.data;h=e+1|0;i=a.O.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function A6V(a,b,c,d,e){J5(a,b,c,d,e);return a;}
function AVl(a,b,c,d){IT(a,b,c,d);return a;}
function J$(a){return a.bZ;}
function BL(a){return U(a);}
function AXI(a,b){MU(a,b);}
function A7H(a,b,c){return Xj(a,b,c);}
function A7k(a,b,c){KZ(a,b,c);return a;}
function A0x(a,b,c){return Ql(a,b,c);}
function A58(a,b,c){return WF(a,b,c);}
function AUG(a,b,c){return UE(a,b,c);}
function A2D(a,b,c){return Nu(a,b,c);}
function Fb(){D.call(this);}
function Gf(){Fb.call(this);this.f6=0;}
var Bdq=null;var Bdr=null;function AQO(a){var b=new Gf();Lp(b,a);return b;}
function Lp(a,b){a.f6=b;}
function Ld(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!Iv(b)){a:{d=0;e=0;switch(Y(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==Bh(b)){b=new Ez;O(b);M(b);}while(e<Bh(b)){g=e+1|0;h=T$(Y(b,e));if(h<0){i=new Ez;j=new T;W(j);Bl(i,U(H(H(j,B(17)),b)));M(i);}if(h>=c){i=new Ez;j=new T;W(j);Bl(i,U(H(H(Be(H(j,B(18)),c),B(12)),b)));M(i);}f=Bj(c,f)+h|0;if(f<0){if(g==Bh(b)&&f==(-2147483648)&&d)return (-2147483648);i=new Ez;j=new T;W(j);Bl(i,U(H(H(j,B(19)),b)));M(i);}e=g;}if(d)f= -f;return f;}b
=new Ez;Bl(b,B(20));M(b);}i=new Ez;b=new T;W(b);Bl(i,U(Be(H(b,B(21)),c)));M(i);}
function CX(b){var c;if(b>=(-128)&&b<=127){a:{if(Bdr===null){Bdr=J(Gf,256);c=0;while(true){if(c>=Bdr.data.length)break a;Bdr.data[c]=AQO(c-128|0);c=c+1|0;}}}return Bdr.data[b+128|0];}return AQO(b);}
function A3P(a){return a.f6;}
function Mu(a){var b;b=a.f6;return Tq(BcP(20),b,10).gk();}
function A25(a){return a.f6>>>4^a.f6<<28^a.f6<<8^a.f6>>>24;}
function A_m(a,b){if(a===b)return 1;return b instanceof Gf&&b.f6==a.f6?1:0;}
function AAx(a,b){return R(a.f6,b.f6);}
function Tt(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function JA(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Ni(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function A6Z(a,b){return AAx(a,b);}
function AQi(){Bdq=F($rt_intcls());}
function IM(){IZ.call(this);}
function Bds(){var a=new IM();AXG(a);return a;}
function Bdt(a){var b=new IM();P9(b,a);return b;}
function AXG(a){O(a);}
function P9(a,b){Bl(a,b);}
function AOQ(){IM.call(this);}
function Bdu(){var a=new AOQ();AWL(a);return a;}
function Bdv(a){var b=new AOQ();AUo(b,a);return b;}
function AWL(a){O(a);}
function AUo(a,b){P9(a,b);}
function ALC(){IM.call(this);}
function Bdw(){var a=new ALC();A3t(a);return a;}
function Bdx(a){var b=new ALC();AUJ(b,a);return b;}
function A3t(a){O(a);}
function AUJ(a,b){P9(a,b);}
function BE(){D8.call(this);}
function Bdy(){var a=new BE();AZH(a);return a;}
function AZH(a){O(a);}
function B6(){BE.call(this);}
function Bdz(){var a=new B6();ATh(a);return a;}
function ZY(a){var b=new B6();A$T(b,a);return b;}
function ATh(a){O(a);}
function A$T(a,b){Bl(a,b);}
function C_(){}
function He(){}
function Uk(){}
function Qm(){}
function U9(){}
function Re(){}
function Wf(){}
function Pt(){}
function Lk(){}
function YG(){D.call(this);}
function AX3(a,b,c){a.Xf($rt_str(b),Jz(c,"handleEvent"));}
function AYf(a,b,c){a.UE($rt_str(b),Jz(c,"handleEvent"));}
function ATD(a,b){return a.HD(b);}
function AY8(a,b,c,d){a.KJ($rt_str(b),Jz(c,"handleEvent"),d?1:0);}
function A1B(a,b){return !!a.Xm(b);}
function AUB(a){return a.I7();}
function ASW(a,b,c,d){a.NB($rt_str(b),Jz(c,"handleEvent"),d?1:0);}
function Bs(){D.call(this);}
var BdA=0;var BdB=null;var BdC=null;var BdD=null;var BdE=null;var BdF=null;var BdG=null;var BdH=null;var BdI=null;var BdJ=null;var BdK=null;var BdL=null;var BdM=null;var BdN=null;var BdO=null;var BdP=null;var BdQ=null;var BdR=null;var BdS=null;var BdT=null;var BdU=0;var BdV=0;var BdW=0.0;var BdX=0.0;var BdY=0;var BdZ=0;var Bd0=0;var Bd1=0;var Bd2=0;var Bd3=null;var Bd4=null;var Bd5=null;var Bd6=null;var Bd7=null;var Bd8=0;var Bd9=null;var Bd$=null;var Bd_=null;var Bea=null;var Beb=null;var Bec=null;var Bed=
Long_ZERO;var Bee=0;var Bef=0;var Beg=0;var Beh=null;var Bei=null;var Bej=null;var Bek=0;var Bel=0;var Bem=0;var Ben=null;var Beo=null;var Bep=null;var Beq=0;var Ber=null;var Bes=null;var Bet=0.0;var Beu=null;var Bev=0;var Bew=null;var Bex=null;var Bey=0;var Bez=null;var BeA=0;function Bd(){Bd=Bt(Bs);ATH();}
function BeB(){var a=new Bs();VL(a);return a;}
function VL(a){Bd();}
function PC(){Bd();return B(22);}
function Ke(b){Bd();if(Iw(b,B(23)))b=Jq(b,1);return CP(BeC,b);}
function AB8(b){var c;Bd();c=Ke(b);if(c===null)return null;return A23(c,X2(B(24)));}
function ALj(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gl=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IT=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaE(callback);return thread.suspend(function(){try{A3m(b,callback);}catch($e){callback.IT($rt_exception($e));}});}
function A3m(b,c){var d,e;Bd();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new W2;b.vl=d;b.z8=c;b=Cu(b,"stateChanged");d.onreadystatechange=b;d.send();}
function AAn(b,c){var d,e,f,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();BdC=b;d=$rt_str(BdC.getAttribute("style"));e=BdC;f=new T;W(f);if(d===null)d=B(3);d=U(H(H(f,d),B(25)));e.setAttribute("style",$rt_ustr(d));BdH=window;BdB=BdH.document;BdD=BdB.createElement("canvas");BdY=b.clientWidth;BdZ=b.clientHeight;f=BdD;e=BdY;f.width=e;f=BdD;e=BdZ;f.height=e;BdE=BdD.getContext("2d");BdD.setAttribute("id","deevis589723589");f=BdD;b.appendChild(f);BdF
=BdB.createElement("canvas");b=BdF;f=BdY;b.width=f;b=BdF;f=BdZ;b.height=f;b=BdF;e=AEK();BdG=b.getContext("webgl2",e);if(BdG===null){b=new B6;c=new T;W(c);Bl(b,U(H(H(H(c,B(26)),$rt_str(window.navigator.userAgent)),B(27))));M(b);}X4(BdG);BdG.getExtension("EXT_texture_filter_anisotropic");b=BdH;e=new W3;BdJ=e;b.addEventListener("contextmenu",Cu(e,"handleEvent"));b=BdD;e=new W9;BdK=e;b.addEventListener("mousedown",Cu(e,"handleEvent"));b=BdD;e=new W$;BdL=e;b.addEventListener("mouseup",Cu(e,"handleEvent"));b=BdD;e
=new W7;BdM=e;b.addEventListener("mousemove",Cu(e,"handleEvent"));b=BdH;e=new W8;BdN=e;b.addEventListener("keydown",Cu(e,"handleEvent"));b=BdH;e=new W5;BdO=e;b.addEventListener("keyup",Cu(e,"handleEvent"));b=BdH;e=new W6;BdP=e;b.addEventListener("keypress",Cu(e,"handleEvent"));b=BdD;e=new W4;BdQ=e;b.addEventListener("wheel",Cu(e,"handleEvent"));b=BdH;e=new Qu;b.addEventListener("blur",Cu(e,"handleEvent"));b=BdH;e=new Qt;b.addEventListener("focus",Cu(e,"handleEvent"));ANT();$p=1;case 1:AJM();if(C()){break _;}$p
=2;case 2:ALj(c);if(C()){break _;}a:{try{AL9(BdI);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){f=$$je;}else{throw $$e;}}Cc(f);}Bes=AYn();Or(BdS);Or(BdT);return;default:E_();}}C3().s(b,c,d,e,f,$p);}
function K2(b){Bd();BdG.enable(b);}
function J1(b){Bd();BdG.disable(b);}
function AH1(){var b,c;Bd();b=new VW;b.iX=BdG.createProgram();c=Bd2+1|0;Bd2=c;b.xj=c;return b;}
function OA(b){var c;Bd();c=new V0;c.jn=BdG.createShader(b);return c;}
function R8(b,c){var d;Bd();d=BdG;b=b.iX;c=c.jn;d.attachShader(b,c);}
function UF(b,c){var d;Bd();d=BdG;b=b.iX;c=c.jn;d.detachShader(b,c);}
function Wz(b){var c;Bd();c=BdG;b=b.jn;c.compileShader(b);}
function AAC(b){var c;Bd();c=BdG;b=b.iX;c.linkProgram(b);}
function OW(b,c){var d;Bd();d=BdG;b=b.jn;d.shaderSource(b,$rt_ustr(c));}
function T5(b){var c;Bd();c=BdG;b=b.jn;return $rt_str(c.getShaderInfoLog(b));}
function AHt(b){var c;Bd();c=BdG;b=b.iX;return $rt_str(c.getProgramInfoLog(b));}
function Va(b){var c;Bd();c=BdG;b=b.jn;return c.getShaderParameter(b,35713)!=1?0:1;}
function AGm(b){var c;Bd();c=BdG;b=b.iX;return c.getProgramParameter(b,35714)!=1?0:1;}
function Ta(b){var c;Bd();c=BdG;b=b.jn;c.deleteShader(b);}
function L6(){var b;Bd();b=new V7;b.DU=BdG.createBuffer();return b;}
function Hd(b,c){var d;Bd();d=BdG;c=c!==null?c.DU:null;d.bindBuffer(b,c);}
function Px(b,c,d){var e;Bd();e=BdG;c=c;e.bufferData(b,c,d);}
function N2(b){Bd();BdG.enableVertexAttribArray(b);}
function Dq(b,c){var d;Bd();d=BdG;b=b.iX;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new Xc;b.kv=d;}return b;}
function LU(b,c,d){var e;Bd();e=BdG;b=b.iX;e.bindAttribLocation(b,c,$rt_ustr(d));}
function Ib(b,c){var d;Bd();if(b!==null){d=BdG;b=b.kv;d.uniform1f(b,c);}}
function Ln(b,c,d,e){var f;Bd();if(b!==null){f=BdG;b=b.kv;f.uniform3f(b,c,d,e);}}
function Ud(b,c,d,e,f){var g,h;Bd();if(b!==null){g=BdG;h=b.kv;g.uniform4f(h,c,d,e,f);}}
function Q6(b,c){var d;Bd();if(b!==null){d=BdG;b=b.kv;d.uniform1i(b,c);}}
function Mf(b,c){var d,e;Bd();Bd7.set(c.data);if(b!==null){d=BdG;e=b.kv;b=Bd7;d.uniformMatrix4fv(e,!!0,b);}}
function VU(b){var c;Bd();if(b!==null&&Bd8!=b.xj){Bd8=b.xj;c=BdG;b=b.iX;c.useProgram(b);}}
function N4(b,c,d,e,f,g){Bd();BdG.vertexAttribPointer(b,c,d,!!e,f,g);}
function O6(){var b;Bd();b=new Su;b.AX=BdG.createVertexArray();b.vM=0;return b;}
function RM(b){var c;Bd();c=BdG;b=b!==null?b.AX:null;c.bindVertexArray(b);}
function AER(b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=AIs(c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(b,c,$p);}
function AIs(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gl=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IT=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaE(callback);return thread.suspend(function(){try{AWN(b,callback);}catch($e){callback.IT($rt_exception($e));}});}
function AWN(b,c){var d,e,f;Bd();d=BdB.createElement("img");e=new Qx;e.f2=d;e.x8=c;d.addEventListener("load",Cu(e,"handleEvent"));f=new Qw;f.Eg=d;f.EY=c;d.addEventListener("error",Cu(f,"handleEvent"));e=$rt_str(ANE(b,"image/png"));if(e===null)CM(c,null);else{b=$rt_ustr(e);d.src=b;}}
function Lq(){var b,c,d;Bd();b=BdC.clientWidth;if(b!=BdY){c=BdD;d=b;c.width=d;c=BdF;d=b;c.width=d;BdY=b;}return b;}
function Mz(){var b,c,d;Bd();b=BdC.clientHeight;if(b!=BdZ){c=BdD;d=b;c.height=d;c=BdF;d=b;c.height=d;BdZ=b;}return b;}
function Ku(){Bd();return Long_fromInt(1073741824);}
function JW(){Bd();return Long_fromInt(1073741824);}
function Kb(){Bd();return Long_ZERO;}
function UB(b){Bd();return b.byteLength;}
function TX(b){Bd();return b<=Bex.data.length&&b>=0?Bex.data[b]:(-1);}
function ACx(b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();d=LF(b,47);if(d>0){e=Ev(b,0,d);$p=2;continue _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeD;d=0;f=f.buffer;$p=1;case 1:AXN(e,b,d,f);if(C()){break _;}return;case 2:AI$(e);if(C()){break _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeD;d=0;f=f.buffer;$p=1;continue _;default:E_();}}C3().s(b,c,d,e,f,$p);}
function ALD(b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=BeD;$p=1;case 1:$z=A_I(c,b);if(C()){break _;}b=$z;if(b===null)d=null;else{d=$rt_createByteArray(b.byteLength);e=d.data;b=new Uint8Array(b);f=0;g=e.length;while(f<g){e[f]=b[f]<<24>>24;f=f+1|0;}}return d;default:E_();}}C3().s(b,c,d,e,f,g,$p);}
function ANk(b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();d=BeD;$p=1;case 1:$z=A_I(d,b);if(C()){break _;}d=$z;e=LF(c,47);if(e<=0){f=BeD;e=0;$p=2;continue _;}f=Ev(c,0,e);$p=4;continue _;case 2:AXN(f,c,e,d);if(C()){break _;}c=BeD;$p=3;case 3:A5u(c,b);if(C()){break _;}return;case 4:AI$(f);if(C()){break _;}f=BeD;e=0;$p=2;continue _;default:E_();}}C3().s(b,c,d,e,f,$p);}
function AL0(b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=BeD;$p=1;case 1:A5u(c,b);if(C()){break _;}return;default:E_();}}C3().s(b,c,$p);}
function V2(){Bd();return BdI;}
function RH(){Bd();return Beb;}
function MK(){Bd();return BdS;}
function Mp(){Bd();if(Long_gt(Long_sub(B$(),Bed),Long_fromInt(3000))&&Bef&&!(document.pointerLockElement!=null?1:0)){BdD.requestPointerLock();if(document.pointerLockElement!=null?1:0)Bef=0;}}
function PX(){Bd();return Bec;}
function Qy(b){Bd();return b.which;}
function S0(b){Bd();return TX(b);}
function NH(){Bd();return BdT;}
function SO(b){Bd();Bd1=b;return b;}
function Hj(){Bd();return Bd9;}
function JO(){Bd();return Bd$;}
function WB(b){Bd();URL.revokeObjectURL($rt_ustr(b));}
function VJ(){Bd();return Bee;}
function MS(b){Bd();Bee=b;return b;}
function PT(){Bd();return Bed;}
function ATH(){var b,c;BdA=0;BdB=null;BdC=null;BdD=null;BdE=null;BdF=null;BdG=null;BdH=null;BdI=null;BdJ=null;BdK=null;BdL=null;BdM=null;BdN=null;BdO=null;BdP=null;BdQ=null;BdR=J(B4,0);BdS=QR();BdT=QR();BdU=0;BdV=0;BdW=0.0;BdX=0.0;BdY=0;BdZ=0;Bd0=0;Bd1=1;Bd2=0;Bd3=$rt_createIntArray(4);Bd4=new Uint8Array(new ArrayBuffer(4194304));Bd5=new Float32Array(4);Bd6=new Float32Array(9);Bd7=new Float32Array(16);Bd8=(-1);Bd9=null;Bd$=null;Bd_=null;Bea=null;Beb=$rt_createBooleanArray(8);Bec=$rt_createBooleanArray(256);Bed
=Long_ZERO;Bee=0;Bef=0;Beg=0;Beh=F7();Bei=F7();Bej=null;Bek=0;Bel=0;Bem=0;Ben=QR();Beo=null;Bep=null;Beq=0;Ber=Dd();Bes=null;Bet=0.029999999329447746;Beu=Dd();Bev=0;b=J(B4,256);c=b.data;c[0]=B(28);c[1]=B(29);c[2]=B(30);c[3]=B(31);c[4]=B(32);c[5]=B(33);c[6]=B(34);c[7]=B(35);c[8]=B(36);c[9]=B(37);c[10]=B(38);c[11]=B(2);c[12]=B(39);c[13]=B(40);c[14]=B(41);c[15]=B(42);c[16]=B(43);c[17]=B(44);c[18]=B(45);c[19]=B(46);c[20]=B(47);c[21]=B(48);c[22]=B(49);c[23]=B(50);c[24]=B(51);c[25]=B(52);c[26]=B(53);c[27]=B(54);c[28]
=B(55);c[29]=B(56);c[30]=B(57);c[31]=B(58);c[32]=B(59);c[33]=B(60);c[34]=B(61);c[35]=B(62);c[36]=B(63);c[37]=B(64);c[38]=B(65);c[39]=B(66);c[40]=B(67);c[41]=B(68);c[42]=B(69);c[43]=B(70);c[44]=B(71);c[45]=B(72);c[46]=B(73);c[47]=B(74);c[48]=B(75);c[49]=B(76);c[50]=B(77);c[51]=B(78);c[52]=B(79);c[53]=B(80);c[54]=B(81);c[55]=B(82);c[56]=B(83);c[57]=B(84);c[58]=B(85);c[59]=B(86);c[60]=B(87);c[61]=B(88);c[62]=B(89);c[63]=B(90);c[64]=B(91);c[65]=B(92);c[66]=B(93);c[67]=B(94);c[68]=B(95);c[69]=B(96);c[70]=B(97);c[71]
=B(98);c[72]=B(99);c[73]=B(100);c[74]=B(101);c[75]=B(102);c[76]=B(103);c[77]=B(104);c[78]=B(105);c[79]=B(106);c[80]=B(107);c[81]=B(108);c[82]=B(109);c[83]=B(110);c[84]=B(10);c[85]=B(10);c[86]=B(10);c[87]=B(111);c[88]=B(112);c[89]=B(10);c[90]=B(10);c[91]=B(10);c[92]=B(10);c[93]=B(10);c[94]=B(10);c[95]=B(10);c[96]=B(10);c[97]=B(10);c[98]=B(10);c[99]=B(10);c[100]=B(113);c[101]=B(114);c[102]=B(115);c[103]=B(116);c[104]=B(117);c[105]=B(118);c[106]=B(10);c[107]=B(10);c[108]=B(10);c[109]=B(10);c[110]=B(10);c[111]=
B(10);c[112]=B(119);c[113]=B(120);c[114]=B(10);c[115]=B(10);c[116]=B(10);c[117]=B(10);c[118]=B(10);c[119]=B(10);c[120]=B(10);c[121]=B(121);c[122]=B(10);c[123]=B(122);c[124]=B(10);c[125]=B(123);c[126]=B(10);c[127]=B(10);c[128]=B(10);c[129]=B(10);c[130]=B(10);c[131]=B(10);c[132]=B(10);c[133]=B(10);c[134]=B(10);c[135]=B(10);c[136]=B(10);c[137]=B(10);c[138]=B(10);c[139]=B(10);c[140]=B(10);c[141]=B(124);c[142]=B(10);c[143]=B(10);c[144]=B(125);c[145]=B(126);c[146]=B(127);c[147]=B(128);c[148]=B(129);c[149]=B(130);c[150]
=B(131);c[151]=B(132);c[152]=B(10);c[153]=B(10);c[154]=B(10);c[155]=B(10);c[156]=B(133);c[157]=B(134);c[158]=B(10);c[159]=B(10);c[160]=B(10);c[161]=B(10);c[162]=B(10);c[163]=B(10);c[164]=B(10);c[165]=B(10);c[166]=B(10);c[167]=B(135);c[168]=B(10);c[169]=B(10);c[170]=B(10);c[171]=B(10);c[172]=B(10);c[173]=B(10);c[174]=B(10);c[175]=B(10);c[176]=B(10);c[177]=B(10);c[178]=B(10);c[179]=B(136);c[180]=B(10);c[181]=B(137);c[182]=B(10);c[183]=B(138);c[184]=B(139);c[185]=B(10);c[186]=B(10);c[187]=B(10);c[188]=B(10);c[189]
=B(10);c[190]=B(10);c[191]=B(10);c[192]=B(10);c[193]=B(10);c[194]=B(10);c[195]=B(10);c[196]=B(140);c[197]=B(141);c[198]=B(10);c[199]=B(142);c[200]=B(143);c[201]=B(144);c[202]=B(10);c[203]=B(145);c[204]=B(10);c[205]=B(146);c[206]=B(10);c[207]=B(147);c[208]=B(148);c[209]=B(149);c[210]=B(150);c[211]=B(151);c[212]=B(10);c[213]=B(10);c[214]=B(10);c[215]=B(10);c[216]=B(10);c[217]=B(10);c[218]=B(152);c[219]=B(153);c[220]=B(154);c[221]=B(155);c[222]=B(156);c[223]=B(157);c[224]=B(10);c[225]=B(10);c[226]=B(10);c[227]
=B(10);c[228]=B(10);c[229]=B(10);c[230]=B(10);c[231]=B(10);c[232]=B(10);c[233]=B(10);c[234]=B(10);c[235]=B(10);c[236]=B(10);c[237]=B(10);c[238]=B(10);c[239]=B(10);c[240]=B(10);c[241]=B(10);c[242]=B(10);c[243]=B(10);c[244]=B(10);c[245]=B(10);c[246]=B(10);c[247]=B(10);c[248]=B(10);c[249]=B(10);c[250]=B(10);c[251]=B(10);c[252]=B(10);c[253]=B(10);c[254]=B(10);c[255]=B(10);Bew=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=14;c[9]=15;c[10]
=(-1);c[11]=(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]
=(-1);c[63]=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]=52;c[111]=53;c[112]=(-1);c[113]
=(-1);c[114]=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]=(-1);c[154]=(-1);c[155]=(-1);c[156]
=(-1);c[157]=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]=(-1);c[198]=(-1);c[199]=(-1);c[200]
=(-1);c[201]=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;Bex=b;Bey=0;Bez=new Int32Array(new ArrayBuffer(2100000));BeA=0;}
function X4(b){window.currentContext=b;}
function ANT(){if (!ANT.$native){
ANT.$native=function(){return (function(){window.eagsFileChooser = {
inputElement: null,
openFileChooser: function(ext, mime){
var el = window.eagsFileChooser.inputElement = document.createElement("input");
el.type = "file";
el.multiple = false;
el.addEventListener("change", function(evt){
var f = window.eagsFileChooser.inputElement.files;
if(f.length == 0){
window.eagsFileChooser.getFileChooserResult = null;
}else{
(async function(){
window.eagsFileChooser.getFileChooserResult = await f[0].arrayBuffer();
window.eagsFileChooser.getFileChooserResultName = f[0].name;
})();
}
});
window.eagsFileChooser.getFileChooserResult = null;
window.eagsFileChooser.getFileChooserResultName = null;
el.accept = mime;
el.click();
},
getFileChooserResult: null,
getFileChooserResultName: null
};})();};ANT=ANT.$native;}return ANT();}
function AEK(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function ANE(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function ANy(b){if(b.commit)b.commit();}
function SP(){}
function Jy(){}
function NS(){}
function Hy(){D.call(this);this.v$=null;}
function BeE(a){var b=new Hy();Wa(b,a);return b;}
function Wa(a,b){if(b!==null){a.v$=b;return;}b=new EE;O(b);M(b);}
function ABe(){Hy.call(this);this.xW=null;}
function A89(){var a=new ABe();A2Y(a);return a;}
function A2Y(a){var b;a.v$=a;b=new Lg;Gz(b,16);a.xW=b;a.v$=a.xW;}
function AK4(a){return;}
function AEv(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;IT(a.xW,b,c,d);return;}}f=new BO;O(f);M(f);}
function Lt(){var a=this;Hy.call(a);a.mx=null;a.FL=0;a.yc=0;}
function AFw(a){var $$je;a:{if(a.mx===null)Kd(a);else{try{AK4(a.mx);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}Kd(a);}}}
function Hl(a,b){if(b===null)b=Uj(null);Yo(a,b);}
function SI(a){Hl(a,B(158));if(a.yc)AFw(a);}
function AAA(a,b){ABM(a,Uj(b));}
function ABM(a,b){Hl(a,b);SI(a);}
function Kd(a){a.FL=1;}
function ARW(a,b){AAj(a,b,0,b.data.length);}
function AAj(a,b,c,d){var $$je;a:{if(a.mx===null)Kd(a);else{try{AEv(a.mx,b,c,d);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}Kd(a);}}}
function Yo(a,b){ARW(a,Nq(b));}
function AFa(){D.call(this);}
function BeF(){var a=new AFa();AV5(a);return a;}
function AV5(a){return;}
function AFP(){D.call(this);}
function LY(){}
function Il(){var a=this;D.call(a);a.cB=null;a.cc=0;a.bB=0;a.bf=null;a.A=null;a.dV=null;a.f=null;a.c5=null;a.kW=null;a.bs=0;a.bo=null;a.e8=null;a.D=null;a.ji=null;a.eT=null;a.bO=0;a.c9=0;a.Hc=null;a.FV=0;a.nV=null;a.h7=0;a.Gq=null;a.ce=null;a.l=null;a.yg=null;a.C6=null;a.BC=null;a.hx=0;a.lx=null;a.gP=Long_ZERO;a.bp=0;a.cn=0;a.cT=0;a.dA=Long_ZERO;}
var BeG=null;var BeH=0;var Bc8=null;function AIn(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.l=A_8(a);b=new KH;c=a.l;BeI=Dd();b.zg=Dd();b.kw=Rb(1);b.ha=WK(1048576);b.lV=WK(1048576);b.B_=Ci();b.sP=0;b.DT=0;b.wF=c;a.bo=b;c=new Wc;d=a.l;b=B(159);e=a.bo;$p=1;case 1:AOF(c,d,b,e);if(C()){break _;}a.e8=c;$p=2;case 2:Yl(a);if(C()){break _;}a.yg=new Qg;Ei(a,B(160));Ba(3553);Bd();BdG.clearDepth((-1.0));Ba(2929);HG(515);Ba(3008);Sp(516,
0.10000000149011612);BdG.cullFace(1029);C$(5889);C9();C$(5888);Ei(a,B(161));G5(a.bo,a.BC);G5(a.bo,a.C6);G5(a.bo,Bas());G5(a.bo,BcA());G5(a.bo,AVD(0));G5(a.bo,AVD(1));a.dV=BaR(a,a.bo);FM(0,0,a.cc,a.bB);e=Bc8;b=LL();c=B(162);d=B(163);$p=3;case 3:ARV(e,b,c,d);if(C()){break _;}b=new OV;c=a.A;d=a.bo;b.cD=J(J2,3);b.sp=new Dz;if(c!==null)b.mR=c;b.jc=d;f=0;while(f<3){b.cD.data[f]=Ci();f=f+1|0;}a.c5=b;Ei(a,B(164));b=new Nn;M_(b);b.g5=Ci();b.vp=new Dz;b.FQ=null;b.rR=0;b.ID=1.0;b.b2=a;a.nV=b;return;default:E_();}}C3().s(a,
b,c,d,e,f,$p);}
function Yl(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=FG(a.cc,a.bB);c=b.fL;d=b.fH;D4(16640);C$(5889);C9();Im(0.0,c,d,0.0,1000.0,3000.0);C$(5888);C9();Bw(0.0,0.0,(-2000.0));FM(0,0,a.cc,a.bB);Hx(0.0,0.0,0.0,0.0);Bb(2896);Bb(2912);Ba(3553);BA();e=BeJ;f=3553;b=a.bo;g=B(165);$p=1;case 1:$z=AHs(b,g);if(C()){break _;}d=$z;Cp(f,d);BU(1.0,1.0,1.0,1.0);Bz(e);ES(e,4210752);G(e,0.0,a.bB,0.0,0.0,a.bB/32.0
+0.0);G(e,a.cc,a.bB,0.0,a.cc/32.0,a.bB/32.0+0.0);G(e,a.cc,0.0,0.0,a.cc/32.0,0.0);G(e,0.0,0.0,0.0,0.0,0.0);Br(e);Ba(3008);Sp(516,0.10000000149011612);Cy(a.e8,B(166),8,(a.bB/2|0)-16|0,(-1));return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADS(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D instanceof Rt)return;if(a.D!==null){c=a.D;$p=1;continue _;}if(b===null&&a.A===null)b=LL();else if(b===null&&a.f.bU<=0){b=new Mk;DQ(b);}a.D=b;if(b===null){$p=2;continue _;}WY(a);c=FG(a.cc,a.bB);d=c.fL;e=c.fH;$p=3;continue _;case 1:c.ps();if(C()){break _;}if(b===null&&a.A===null)b=LL();else if(b===null&&a.f.bU<=0){b=new Mk;DQ(b);}a.D=b;if(b===null){$p=2;continue _;}WY(a);c
=FG(a.cc,a.bB);d=c.fL;e=c.fH;$p=3;continue _;case 2:AFh(a);if(C()){break _;}return;case 3:AP6(b,a,d,e);if(C()){break _;}a.h7=0;return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ARV(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=new UC;DQ(e);e.qs=Ci();e.Eo=b;e.At=c;e.As=d;$p=1;case 1:ADS(a,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Ei(a,b){var c,d,e,f;BW();Bd();c=BdG.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(167);break a;case 1281:d=B(168);break a;case 1282:d=B(169);break a;case 1285:d=B(170);break a;default:d=B(171);break a;}d=B(172);}Cg(DT(),B(173));e=DT();f=new T;W(f);Cg(e,U(H(H(f,B(174)),b)));b=DT();e=new T;W(e);Cg(b,U(H(H(Be(e,c),B(12)),d)));}}
function Yf(a){var b,c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hx=1;$p=1;case 1:AIn(a);if(C()){break _;}b=B$();c=0;if(!a.hx)return;BeK=0;BeL=0;if(!a.bs)FN(a.bf);else{d=a.bf.cX;FN(a.bf);a.bf.cX=d;}e=0;if(e<a.bf.i4){a.bO=a.bO+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cX=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GQ(a.cB,a.bf.cX);f=a.eT;d=a.bf.cX;$p
=4;continue _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;continue _;case 2:AFA(a);if(C()){break _;}e=e+1|0;if(e<a.bf.i4){a.bO=a.bO+1|0;continue _;}Ei(a,B(175));if(a.bs)a.bf.cX=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GQ(a.cB,a.bf.cX);f=a.eT;d=a.bf.cX;$p=4;continue _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;continue _;case 3:$z=AIk(f);if(C()){break _;}g=$z;if(g){f=a.A;continue _;}if(!a.h7){GQ(a.cB,a.bf.cX);f=a.eT;d=a.bf.cX;$p=4;continue _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;continue _;case 4:AFL(f,
d);if(C()){break _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;case 5:Xy();if(C()){break _;}$p=6;case 6:AUS();if(C()){break _;}if(!(Lq()==a.cc&&Mz()==a.bB)){a.cc=BdD.width;a.bB=BdD.height;if(a.cc<=0)a.cc=1;if(a.bB<=0)a.bB=1;g=a.cc;h=a.bB;if(g<=0)g=1;if(h<=0)h=1;a.cc=g;a.bB=h;if(a.D!==null){f=FG(g,h);h=f.fL;g=f.fH;f=a.D;$p=8;continue _;}}if(a.l.mo){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){f=$$je;}else{throw $$e;}}f.tA();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.n9()
?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new T;W(f);f=H(Be(f,c),B(177));Tk();a.lx=U(H(Be(f,BeM),B(178)));BeM=0;c=0;b=i;}if(!a.hx)return;BeK=0;BeL=0;if(!a.bs)FN(a.bf);else{d=a.bf.cX;FN(a.bf);a.bf.cX=d;}e=0;if(e<a.bf.i4){a.bO=a.bO+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cX=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GQ(a.cB,a.bf.cX);f=a.eT;d=a.bf.cX;$p=4;continue _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;continue _;case 7:a:{try{AKC(i);if(C())
{break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){f=$$je;}else{throw $$e;}}f.tA();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.n9()?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new T;W(f);f=H(Be(f,c),B(177));Tk();a.lx=U(H(Be(f,BeM),B(178)));BeM=0;c=0;b=i;}if(!a.hx)return;BeK=0;BeL=0;if(!a.bs)FN(a.bf);else{d=a.bf.cX;FN(a.bf);a.bf.cX=d;}e=0;if(e<a.bf.i4){a.bO=a.bO+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cX=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if
(!a.h7){GQ(a.cB,a.bf.cX);f=a.eT;d=a.bf.cX;$p=4;continue _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;continue _;case 8:AP6(f,a,h,g);if(C()){break _;}if(a.l.mo){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){f=$$je;}else{throw $$e;}}f.tA();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.n9()?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new T;W(f);f=H(Be(f,c),B(177));Tk();a.lx=U(H(Be(f,BeM),B(178)));BeM=0;c=0;b=i;}if(!a.hx)return;BeK=0;BeL=
0;if(!a.bs)FN(a.bf);else{d=a.bf.cX;FN(a.bf);a.bf.cX=d;}e=0;if(e<a.bf.i4){a.bO=a.bO+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cX=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GQ(a.cB,a.bf.cX);f=a.eT;d=a.bf.cX;$p=4;continue _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function FV(a){var b,c,d,e,f,g,h,i,j,k,l;if(Long_eq(a.gP,Long_fromInt(-1)))a.gP=EG();b=EG();c=BeG.data;d=BeH;BeH=d+1|0;c[d&(BeG.data.length-1|0)]=Long_sub(b,a.gP);a.gP=b;D4(256);C$(5889);C9();Im(0.0,a.cc,a.bB,0.0,1000.0,3000.0);C$(5888);C9();Bw(0.0,0.0,(-2000.0));Bb(3553);BA();e=BeJ;Gh(e,7);ES(e,538968064);Bf(e,0.0,a.bB-100|0,0.0);Bf(e,0.0,a.bB,0.0);Bf(e,BeG.data.length,a.bB,0.0);Bf(e,BeG.data.length,a.bB-100|0,0.0);Br(e);f=Long_ZERO;d=0;while(d<BeG.data.length){f=Long_add(f,BeG.data[d]);d=d+1|0;}d=Long_div(Long_div(f,
Long_fromInt(200000)),Long_fromInt(BeG.data.length)).lo;Gh(e,7);ES(e,541065216);Bf(e,0.0,a.bB-d|0,0.0);Bf(e,0.0,a.bB,0.0);Bf(e,BeG.data.length,a.bB,0.0);Bf(e,BeG.data.length,a.bB-d|0,0.0);Br(e);Gh(e,1);g=0;while(g<BeG.data.length){h=(((g-BeH|0)&(BeG.data.length-1|0))*255|0)/BeG.data.length|0;i=Bj(h,h)/255|0;d=Bj(i,i)/255|0;j=Bj(d,d)/255|0;ES(e,(((-16777216)+(Bj(j,j)/255|0)|0)+(d*256|0)|0)+(h*4096|0)|0);k=Long_div(BeG.data[g],Long_fromInt(200000));l=g+0.5;Bf(e,l,Long_toNumber(Long_sub(Long_fromInt(a.bB),k))+
0.5,0.0);Bf(e,l,a.bB+0.5,0.0);g=g+1|0;}Br(e);Ba(3553);}
function AFh(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Od()&&!a.bp){a.bp=1;Yw(a.yg);b=null;$p=1;continue _;}return;case 1:ADS(a,b);if(C()){break _;}a.cn=a.bO+10000|0;return;default:E_();}}C3().s(a,b,$p);}
function WY(a){if(a.bp){if(a.f!==null)ARF(a.f);a.bp=0;AFy(a.yg);}}
function AK9(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D!==null)return;b=Bco();$p=1;case 1:ADS(a,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function AAD(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.cB.DQ&&!(!b&&a.c9>0)){if(c&&a.ce!==null&&!a.ce.k4&&!b){d=a.ce.h9;e=a.ce.h$;f=a.ce.h_;g=a.cB;b=a.ce.hI;$p=1;continue _;}ALN(a.cB);}return;case 1:YJ(g,d,e,f,b);if(C()){break _;}g=a.c5;b=a.ce.hI;$p=2;case 2:YY(g,d,e,f,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABY(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(!b&&a.c9>0)){if(!b)Pg(a.eT.iG);a:{if(a.ce!==null){if(a.ce.k4!=1){if(a.ce.k4)break a;c=a.ce.h9;d=a.ce.h$;e=a.ce.h_;f=a.ce.hI;L();g=BeN.data;h=a.A;$p=1;continue _;}if(!b){h=a.f;i=a.ce.ny;$p=2;continue _;}if(b==1)Vk(a.f,a.ce.ny);}else if(!b&&!(a.cB instanceof Du))a.c9=10;}if
(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=a.f;$p=5;continue _;}}}return;case 1:$z=ACt(h,c,d,e);if(C()){break _;}k=$z;j=g[k];if(!b){h=a.A;k=a.ce.hI;$p=4;continue _;}l=D9(a.f.K);h=a.A;$p=3;continue _;case 2:ADt(h,i);if(C()){break _;}if(b==1)Vk(a.f,a.ce.ny);if(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=a.f;$p=5;continue _;}}return;case 3:$z=ACt(h,c,d,e);if(C()){break _;}k=$z;if(k>0){h=BeN.data[k];i=a.A;j=a.f;$p=6;continue _;}if(l===null)return;m=l.q;h=a.f;i=a.A;$p=8;continue _;case 4:ABG(h,c,d,e,k);if(C())
{break _;}if(j===BeO&&a.f.AF<100){if(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=a.f;$p=5;continue _;}}return;}h=a.cB;$p=7;continue _;case 5:b:{$z=ABc(h,i,j);if(C()){break _;}i=$z;if(i===h){if(i===null)break b;if(i.q==d)break b;}a.f.K.bg.data[a.f.K.bM]=i;AM6(a.eT.iG);if(!i.q)a.f.K.bg.data[a.f.K.bM]=null;}return;case 6:$z=h.lB(i,c,d,e,j);if(C()){break _;}k=$z;if(k)return;if(l===null)return;m=l.q;h=a.f;i=a.A;$p=8;continue _;case 7:AE2(h,c,d,e);if(C()){break _;}if(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=
a.f;$p=5;continue _;}}return;case 8:$z=AJe(l,h,i,c,d,e,f);if(C()){break _;}c=$z;if(c)Pg(a.eT.iG);if(!l.q)a.f.K.bg.data[a.f.K.bM]=null;else if(l.q!=m)AGJ(a.eT.iG);if(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=a.f;$p=5;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AHK(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ce===null)return;b=a.A;c=a.ce.h9;d=a.ce.h$;e=a.ce.h_;$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;L();if(c==BeP.b)c=BeQ.b;if(c==BeR.b)c=BeS.b;if(c==BeO.b)c=BeT.b;ARg(a.f.K,c,a.cB instanceof Du);return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AFA(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Bc8.l.bw)Bb(2912);AKw(a.nV);if(!a.bs&&a.A!==null){b=a.cB;$p=2;continue _;}c=3553;d=a.bo;b=B(179);$p=1;case 1:$z=AHs(d,b);if(C()){break _;}e=$z;Cp(c,e);if(a.D===null&&a.f!==null&&a.f.bU<=0){b=null;$p=3;continue _;}if(a.D!==null&&!a.D.pP){if(a.D!==null)a.cn=a.bO+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i0=a.l.jT;if(!a.bs&&!a.l.bw)
{b=a.eT;$p=10;continue _;}if(!a.bs&&!a.l.bw)HR(a.dV);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GE(a)){b=a.A;$p=18;continue _;}if(!a.bs&&!a.l.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=20;continue _;}if(!a.bs&&!a.l.bw){b=a.c5;$p=21;continue _;}}a.dA=B$();return;}a:while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp
?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.l.cC=a.l.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.l.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.l.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.l.f$.bJ)continue;Ea(a.l,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if(Long_gt(Long_sub(B$(),a.dA),Long_fromInt(200)))continue;c
=G1();if(c)F2(a.f.K,c);b:{if(a.D!==null){if(a.D===null)break b;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=7;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx())break a;}}$p=16;continue _;case 2:AI0(b);if(C()){break _;}c=3553;d=a.bo;b=B(179);$p=1;continue _;case 3:ADS(a,b);if(C()){break _;}if(a.D!==null&&!a.D.pP){if(a.D!==null)a.cn=a.bO+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i0=a.l.jT;if(!a.bs&&!a.l.bw){b=a.eT;$p=10;continue _;}if
(!a.bs&&!a.l.bw)HR(a.dV);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GE(a)){b=a.A;$p=18;continue _;}if(!a.bs&&!a.l.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=20;continue _;}if(!a.bs&&!a.l.bw){b=a.c5;$p=21;continue _;}}a.dA=B$();return;}c:while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,
Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.l.cC=a.l.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.l.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.l.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.l.f$.bJ)continue;Ea(a.l,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if(Long_gt(Long_sub(B$(),a.dA),Long_fromInt(200)))continue;c=G1();if(c)F2(a.f.K,c);d:{if
(a.D!==null){if(a.D===null)break d;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=7;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx())break c;}}$p=16;continue _;case 4:AG5(b);if(C()){break _;}if(a.D!==null)a.D.rx();if(a.A!==null){a.A.i0=a.l.jT;if(!a.bs&&!a.l.bw){b=a.eT;$p=10;continue _;}if(!a.bs&&!a.l.bw)HR(a.dV);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GE(a)){b=a.A;$p=18;continue _;}if(!a.bs&&!a.l.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=20;continue _;}if
(!a.bs&&!a.l.bw){b=a.c5;$p=21;continue _;}}a.dA=B$();return;case 5:Zw(b);if(C()){break _;}while(true){while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6))
{a.l.cC=a.l.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.l.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.l.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.l.f$.bJ)continue;Ea(a.l,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if(Long_gt(Long_sub(B$(),a.dA),Long_fromInt(200)))continue;else break;}c=G1();if(c)F2(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;continue _;}}if(!a.bp&&Cx()){$p=7;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if
(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}$p=16;continue _;case 6:ASw(b);if(C()){break _;}while(true){e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()==a.l.f$.bJ)Ea(a.l,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;else break;}if
(a.D!==null){b=a.D;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.l.cC=a.l.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.l.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()!=a.l.gj.bJ)continue;else{b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}}$p=8;continue _;case 7:AFh(a);if(C()){break _;}while(true){while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0
&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.l.cC=a.l.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.l.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.l.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.l.f$.bJ)continue;Ea(a.l,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if
(Long_gt(Long_sub(B$(),a.dA),Long_fromInt(200)))continue;else break;}c=G1();if(c)F2(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}$p=16;continue _;case 8:AK9(a);if(C()){break _;}while(true){if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.l.cC=a.l.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.l.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if
(Bg()==a.l.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()==a.l.f$.bJ)Ea(a.l,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()!=1)continue;else break;}continue _;case 9:AAD(a,
c,e);if(C()){break _;}if(a.D!==null)a.cn=a.bO+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i0=a.l.jT;if(!a.bs&&!a.l.bw){b=a.eT;$p=10;continue _;}if(!a.bs&&!a.l.bw)HR(a.dV);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GE(a)){b=a.A;$p=18;continue _;}if(!a.bs&&!a.l.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=20;continue _;}if(!a.bs&&!a.l.bw){b=a.c5;$p=21;continue _;}}a.dA=B$();return;case 10:AIM(b);if(C()){break _;}if(!a.bs&&!a.l.bw)HR(a.dV);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GE(a))
{b=a.A;$p=18;continue _;}if(!a.bs&&!a.l.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=20;continue _;}if(!a.bs&&!a.l.bw){b=a.c5;$p=21;continue _;}a.dA=B$();return;case 11:ABY(a,c);if(C()){break _;}a.cn=a.bO;while(true){if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c
=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.l.cC=a.l.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.l.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.l.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.l.f$.bJ)continue;Ea(a.l,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if(Long_gt(Long_sub(B$(),a.dA),
Long_fromInt(200)))continue;else break;}c=G1();if(c)F2(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(CV())continue;if(!Cx())continue;else{c=0;continue _;}}$p=7;continue _;case 12:ABY(a,c);if(C()){break _;}a.cn=a.bO;if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;case 13:APc(b);if(C()){break _;}if(!a.bs&&!GE(a)){b=a.A;$p=18;continue _;}if(!a.bs&&!a.l.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f
=K(a.f.e);$p=20;continue _;}if(!a.bs&&!a.l.bw){b=a.c5;$p=21;continue _;}a.dA=B$();return;case 14:ABY(a,c);if(C()){break _;}a.cn=a.bO;while(true){if(CV()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b
=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.l.cC=a.l.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.l.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.l.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.l.f$.bJ)continue;Ea(a.l,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if(Long_gt(Long_sub(B$(),a.dA),Long_fromInt(200)))continue;else break;}c=G1();if(c)F2(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else
{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()!=1)continue;if(!Cx())continue;else{c=1;continue _;}}$p=7;continue _;case 15:ABY(a,c);if(C()){break _;}a.cn=a.bO;c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;case 16:AHK(a);if(C()){break _;}while(true){while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c
=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.l.cC=a.l.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.l.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.l.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.l.f$.bJ)continue;Ea(a.l,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if(Long_gt(Long_sub(B$(),a.dA),
Long_fromInt(200)))continue;else break;}c=G1();if(c)F2(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=7;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}continue _;case 17:ADS(a,b);if(C()){break _;}while(true){if(Bg()==a.l.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()==a.l.f$.bJ)Ea(a.l,4,!BN(42)&&!BN(54)
?1:(-1));while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.l.cC=a.l.cC?0:1;a.cT=a.cT?0:1;}if(Bg()!=a.l.fs.bJ)continue;else{b=E7(a.f.K);continue _;}}$p=8;continue _;case 18:X1(b);if(C())
{break _;}if(!a.bs&&!a.l.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=20;continue _;}if(!a.bs&&!a.l.bw){b=a.c5;$p=21;continue _;}a.dA=B$();return;case 19:AQs(b,d,c);if(C()){break _;}while(true){e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()==a.l.f$.bJ)Ea(a.l,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,
Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.l.cC=a.l.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.l.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()!=a.l.gj.bJ)continue;else{b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;continue _;}}$p=8;continue _;case 20:AE8(b,c,e,f);if(C()){break _;}if(!a.bs&&!a.l.bw){b=a.c5;$p=21;continue _;}a.dA=B$();return;case 21:AAU(b);if(C()){break _;}a.dA=B$();return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function GE(a){return 0;}
function AHV(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:ABH(a,c);if(C()){break _;}c=new GG;d=Gw(new Dz);$p=2;case 2:QU(c,b,d);if(C()){break _;}if(!c.tB){b=B(180);$p=3;continue _;}b=B(181);$p=4;continue _;case 3:AF2(a,c,b);if(C()){break _;}return;case 4:AF2(a,c,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ABH(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=B(3);$p=1;case 1:AF2(a,b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AF2(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.A!==null){d=a.A;e=a.ji;$p=1;continue _;}a.A=b;if(b===null){a.dA=Long_ZERO;return;}b.C3=a.e8;a.f=null;b.bi=a.f;$p=2;continue _;case 1:AJf(d,e);if(C()){break _;}a.A=b;if(b===null){a.dA=Long_ZERO;return;}b.C3=a.e8;a.f=null;b.bi=a.f;$p=2;case 2:ANY(a,c);if(C()){break _;}if(a.f===null){a.f=A6G(a,b,a.kW);c=a.f;$p=3;continue _;}a.f.hW=VY(a.l);if(a.dV!==null)QX(a.dV,
b);if(a.c5!==null)OX(a.c5,b);b.bi=a.f;$p=4;continue _;case 3:AK5(c);if(C()){break _;}Q_(a.cB,a.f);a.f.hW=VY(a.l);if(a.dV!==null)QX(a.dV,b);if(a.c5!==null)OX(a.c5,b);b.bi=a.f;$p=4;case 4:AGo(b);if(C()){break _;}if(!b.tB){a.dA=Long_ZERO;return;}c=a.ji;$p=5;case 5:AJf(b,c);if(C()){break _;}a.dA=Long_ZERO;return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ANY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOY(a.ji,b);b=a.ji;c=B(182);$p=1;case 1:AR2(b,c);if(C()){break _;}d=128;e=289;f=(-128);g=f;while(g<=d){h=a.A.fi;i=a.A.fh;if(a.A.bi!==null){h=a.A.bi.d|0;i=a.A.bi.e|0;}j=f;if(j<=d){b=a.ji;k=0+1|0;l=(0*100|0)/e|0;$p=4;continue _;}g=g+16|0;}b=a.ji;c=B(183);$p=2;case 2:AR2(b,
c);if(C()){break _;}l=2000;BeU=1;d=0;if(d>=l){V_(a.A);BeU=0;return;}b=a.A;m=1;$p=3;case 3:ABn(b,m);if(C()){break _;}d=d+1|0;if(d>=l){V_(a.A);BeU=0;return;}b=a.A;m=1;continue _;case 4:XE(b,l);if(C()){break _;}b=a.A;l=h+g|0;m=64;n=i+j|0;$p=5;case 5:ACt(b,l,m,n);if(C()){break _;}b=a.A;$p=6;case 6:$z=AIk(b);if(C()){break _;}l=$z;if(l){b=a.A;continue _;}j=j+16|0;m=k;while(true){if(j<=d){b=a.ji;k=m+1|0;l=(m*100|0)/e|0;$p=4;continue _;}g=g+16|0;if(g>d)break;h=a.A.fi;i=a.A.fh;if(a.A.bi!==null){h=a.A.bi.d|0;i=a.A.bi.e
|0;}j=f;}b=a.ji;c=B(183);$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Mg(a){return ALi(a.dV);}
function Oi(a){return XZ(a.dV);}
function MH(a){var b;b=new T;W(b);return U(H(H(H(H(b,B(184)),Xu(a.c5)),B(185)),AN7(a.A)));}
function ASt(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.f!==null&&a.A!==null){b=a.f;$p=5;continue _;}b=a.A;$p=1;case 1:AP3(b);if(C()){break _;}a.f=A6G(a,a.A,a.kW);b=a.f;$p=2;case 2:AK5(b);if(C()){break _;}Q_(a.cB,a.f);if(a.A!==null){a.A.bi=a.f;b=a.A;$p=4;continue _;}a.f.hW=VY(a.l);b=B(186);$p=3;case 3:ANY(a,b);if(C()){break _;}return;case 4:AGo(b);if(C()){break _;}a.f.hW=VY(a.l);b=B(186);$p=3;continue _;case 5:Ca(b);if(C()){break _;}b=a.A;$p=1;continue _;default:
E_();}}C3().s(a,b,$p);}
function ZW(){BeG=$rt_createLongArray(512);BeH=0;}
function ZC(){D.call(this);}
function BeV(){var a=new ZC();A24(a);return a;}
function A24(a){return;}
function Od(){var b,c;Bd();b=document.pointerLockElement!=null?1:0;c=Beg;Beg=b;if(!c&&b){BdW=0.0;BdX=0.0;}a:{b:{if(Bd1){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AUS(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();ANy(BdG);b=BdE;c=BdF;d=BdD.width;e=BdD.height;b.drawImage(c,0.0,0.0,d,e);f=BdD.clientWidth;g=BdD.clientHeight;if(!(f==BdY&&g==BdZ)){BdY=f;BdZ=g;c=BdF;h=f;c.width=h;c=BdF;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){}else{throw $$e;}}return;case 1:a:{try{AKC(i);if
(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){}else{throw $$e;}}}return;default:E_();}}C3().s(b,c,d,e,f,g,h,i,$p);}
function Mi(){var a=this;D.call(a);a.oi=null;a.FZ=null;a.Gv=null;}
var BeW=null;function Bbg(){Bbg=Bt(Mi);A_A();}
function A_A(){var b;BeW=Ci();b=BeW;L();S(b,BeT);S(BeW,BeX);S(BeW,BeY);S(BeW,BeQ);S(BeW,BeZ);S(BeW,Be0);S(BeW,Be1);S(BeW,Be2);S(BeW,BeS);S(BeW,Be3);S(BeW,Be4);S(BeW,Be5);S(BeW,Be6);S(BeW,Be7);S(BeW,Be8);S(BeW,Be9);S(BeW,Be$);S(BeW,Be_);S(BeW,Bfa);S(BeW,Bfb);S(BeW,Bfc);S(BeW,Bfd);S(BeW,Bfe);S(BeW,Bff);S(BeW,Bfg);S(BeW,Bfh);S(BeW,Bfi);S(BeW,Bfj);ABJ(DT(),BeW.p);}
function Gk(){var a=this;D.call(a);a.JC=Long_ZERO;a.Eb=0;a.DJ=Long_ZERO;a.wX=0;a.mN=null;a.CO=null;a.FK=null;a.wz=0;a.yy=null;}
var Bfk=null;var Bc3=null;var Bfl=Long_ZERO;var Bfm=0;function Bfn(){var a=new Gk();AHA(a);return a;}
function Bcd(a){var b=new Gk();TM(b,a);return b;}
function A_4(a,b){var c=new Gk();NZ(c,a,b);return c;}
function AHA(a){NZ(a,null,null);}
function TM(a,b){NZ(a,null,b);}
function NZ(a,b,c){var d;a.mN=new D;a.wz=1;a.FK=c;a.yy=b;d=Bfl;Bfl=Long_add(d,Long_fromInt(1));a.JC=d;}
function Tf(a){var b;b=new Wu;b.zN=a;AZJ(b);}
function Fs(b){if(Bc3!==b)Bc3=b;Bc3.DJ=B$();}
function ARk(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.yy===null)return;b=a.yy;$p=1;case 1:Yf(b);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function ASG(){return Bc3;}
function A1i(a,b){a.Eb=b;}
function Xy(){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=Bc3;c=b.wX+1|0;b.wX=c;if(c<30)return;Bc3.wX=0;if(Long_ge(Long_add(b.DJ,Long_fromInt(100)),B$()))return;$p=1;case 1:ALL(b);if(C()){break _;}return;default:E_();}}C3().s(b,c,$p);}
function ALL(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gl=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IT=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaE(callback);return thread.suspend(function(){try{A3T(b,callback);}catch($e){callback.IT($rt_exception($e));}});}
function A3T(b,c){var d;d=new ST;d.B5=b;d.B4=c;QV(d);}
function AKC(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gl=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IT=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaE(callback);return thread.suspend(function(){try{AVn(b,callback);}catch($e){callback.IT($rt_exception($e));}});}
function AVn(b,c){var d,e;d=Bc3;e=new Pc;e.wk=d;e.A3=c;e.Jm=AFD(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.CO=e;}
function Y3(){Bfk=Bcd(B(187));Bc3=Bfk;Bfl=Long_fromInt(1);Bfm=1;}
function DO(){}
function W3(){D.call(this);}
function Bfo(){var a=new W3();A2i(a);return a;}
function A2i(a){return;}
function ASx(a,b){b.preventDefault();b.stopPropagation();}
function ACf(a,b){ASx(a,b);}
function A$U(a,b){ACf(a,b);}
function W9(){D.call(this);}
function Bfp(){var a=new W9();AZd(a);return a;}
function AZd(a){return;}
function ARB(a,b){var c,d;c=b.button;d=RH();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;Fu(MK(),b);b.preventDefault();b.stopPropagation();Mp();}
function AIT(a,b){ARB(a,b);}
function AXD(a,b){AIT(a,b);}
function W$(){D.call(this);}
function Bfq(){var a=new W$();AXc(a);return a;}
function AXc(a){return;}
function AQo(a,b){var c,d;c=b.button;d=RH();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;Fu(MK(),b);b.preventDefault();b.stopPropagation();}
function ZN(a,b){AQo(a,b);}
function A3y(a,b){ZN(a,b);}
function W7(){D.call(this);}
function Bfr(){var a=new W7();A45(a);return a;}
function A45(a){return;}
function AOC(a,b){var c;Bd();BdU=b.offsetX;BdV=BdD.clientHeight-b.offsetY|0;c=b.movementX;BdW=BdW+c;c= -b.movementY;BdX=BdX+c;b.preventDefault();b.stopPropagation();}
function ADj(a,b){AOC(a,b);}
function ASI(a,b){ADj(a,b);}
function W8(){D.call(this);}
function Bfs(){var a=new W8();A_M(a);return a;}
function A_M(a){return;}
function AEG(a,b){PX().data[S0(Qy(b))]=1;Fu(NH(),b);b.preventDefault();b.stopPropagation();Mp();}
function AQy(a,b){AEG(a,b);}
function A3J(a,b){AQy(a,b);}
function W5(){D.call(this);}
function Bft(){var a=new W5();A37(a);return a;}
function A37(a){return;}
function Zy(a,b){PX().data[S0(Qy(b))]=0;Fu(NH(),b);b.preventDefault();b.stopPropagation();}
function XT(a,b){Zy(a,b);}
function A2g(a,b){XT(a,b);}
function W6(){D.call(this);}
function Bfu(){var a=new W6();AXr(a);return a;}
function AXr(a){return;}
function AR6(a,b){Bd();if(Bd0&&(b.repeat?1:0))Fu(NH(),b);b.preventDefault();b.stopPropagation();}
function AKZ(a,b){AR6(a,b);}
function A6v(a,b){AKZ(a,b);}
function W4(){D.call(this);}
function Bfv(){var a=new W4();A22(a);return a;}
function A22(a){return;}
function AFj(a,b){Fu(MK(),b);b.preventDefault();b.stopPropagation();}
function ACu(a,b){AFj(a,b);}
function AUd(a,b){ACu(a,b);}
function Qu(){D.call(this);}
function Bfw(){var a=new Qu();A1$(a);return a;}
function A1$(a){return;}
function AFl(a,b){SO(0);}
function AMo(a,b){AFl(a,b);}
function A67(a,b){AMo(a,b);}
function Qt(){D.call(this);}
function Bfx(){var a=new Qt();A31(a);return a;}
function A31(a){return;}
function AGM(a,b){SO(1);Mp();}
function AMn(a,b){AGM(a,b);}
function AYG(a,b){AMn(a,b);}
function NO(){D.call(this);}
var Bfy=null;var BeD=null;function Bfz(){var a=new NO();AD6(a);return a;}
function AD6(a){return;}
function AJM(){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(188);$p=1;case 1:$z=A3E(b);if(C()){break _;}b=$z;if(b===null){Bfy=B(171);return BfA;}if(b.EZ)return BfB;if(!b.Fa&&b.xQ!==null){BeD=b.xQ;return BfC;}Bfy=b.ux!==null?b.ux:B(189);return BfA;default:E_();}}C3().s(b,$p);}
function AP0(b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=BeD;$p=1;case 1:$z=AUp(c,b);if(C()){break _;}b=$z;return b!==BfD?0:1;default:E_();}}C3().s(b,c,$p);}
function AI$(b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AP0(b);if(C()){break _;}c=$z;if(c)return;c=LF(b,47);if(c>0){d=Ev(b,0,c);$p=3;continue _;}d=BeD;c=1;e=new ArrayBuffer(0);$p=2;case 2:AXN(d,b,c,e);if(C()){break _;}return;case 3:AI$(d);if(C()){break _;}d=BeD;c=1;e=new ArrayBuffer(0);$p=2;continue _;default:E_();}}C3().s(b,c,d,e,$p);}
function AHC(){Bfy=B(3);BeD=null;}
function AAS(){D.call(this);}
function AYn(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function UQ(){D.call(this);}
var BeC=null;function BfE(){var a=new UQ();AQr(a);return a;}
function AQr(a){return;}
function AL9(b){var c,d,e,f,g,h,i,j,k,l,m;c=Ug(b);d=OU(c);e=$rt_createByteArray(8);NL(d,e);if(!DJ(B(190),A23(e,X2(B(24))))){c=new B1;Bl(c,B(191));M(c);}GU(d);f=new PW;d=new WL;g=new Ue;OL(g);g.rP=0;h=R0(g,15,0);if(h){c=new P0;f=new T;W(f);Bl(c,U(H(H(Be(f,h),B(12)),g.b8)));M(c);}R1(d,c);d.qf=0;d.oH=0;d.Ex=1;d.Ea=0;d.wC=$rt_createByteArray(1);d.GU=$rt_createByteArray(512);d.g1=g;d.oh=$rt_createByteArray(512);d.Ex=1;d.Ea=1;AIt(f,d);g=BaV();while(true){d=GU(f);if(!DJ(B(192),d)){if(AKz(f)<=0&&DJ(B(193),d))return;c
=new B1;Bl(c,B(191));M(c);}i=GU(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);NL(f,j);l=H3(f);m=$rt_createByteArray(l);NL(f,m);if(DZ(BeC,i))continue;a:{ADQ(g,m,0,l);AL7(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){l=0;while(l<h){if(b[l]!=e[l]){h=0;break a;}l=l+1|0;}h=1;break a;}}h=0;}}if(!h){c=new B1;f=new T;W(f);Bl(c,U(H(H(f,B(194)),i)));M(c);}BR(BeC,i,m);if(!DJ(B(195),GU(f)))break;}c=new B1;Bl(c,B(191));M(c);}
function Za(){BeC=Dd();}
function B1(){BE.call(this);}
function BfF(){var a=new B1();A3Q(a);return a;}
function A3Q(a){O(a);}
function Lg(){HJ.call(this);}
function BfG(){var a=new Lg();A6h(a);return a;}
function A6h(a){W(a);}
function A0L(a,b){Dx(a,b);return a;}
function A18(a,b,c,d){IT(a,b,c,d);return a;}
function AVA(a,b){Hh(a,b);return a;}
function A7B(a,b,c,d,e){J5(a,b,c,d,e);return a;}
function A$Q(a,b,c){KZ(a,b,c);return a;}
function AVV(a,b,c,d,e){J5(a,b,c,d,e);return a;}
function A4a(a,b,c,d){IT(a,b,c,d);return a;}
function AIc(a,b){var c;if(b>=0&&b<a.bZ)return a.O.data[b];c=new BO;O(c);M(c);}
function Ot(a){return a.bZ;}
function A4h(a){return U(a);}
function A4r(a,b){MU(a,b);}
function A97(a,b,c){KZ(a,b,c);return a;}
function Fy(){}
function VX(){D.call(this);}
function BfH(){var a=new VX();AZh(a);return a;}
function AZh(a){return;}
function Fj(){D.call(this);this.lZ=0;}
var BfI=null;var BfJ=null;var BfK=null;var BfL=null;var BfM=null;var BfN=null;function A2f(a){var b=new Fj();AAN(b,a);return b;}
function AAN(a,b){a.lZ=b;}
function BI(b){var c;if(b>=BfL.data.length)return A2f(b);c=BfL.data[b];if(c===null){c=A2f(b);BfL.data[b]=c;}return c;}
function A$Y(a,b){if(a===b)return 1;return b instanceof Fj&&b.lZ==a.lZ?1:0;}
function A$G(a){return a.lZ;}
function Sy(b){var c,d;c=new B4;d=$rt_createCharArray(1);d.data[0]=b;Tj(c,d);return c;}
function Ms(b){return b>=65536&&b<=1114111?1:0;}
function Dt(b){return (b&64512)!=55296?0:1;}
function DR(b){return (b&64512)!=56320?0:1;}
function On(b){return !Dt(b)&&!DR(b)?0:1;}
function J4(b,c){return Dt(b)&&DR(c)?1:0;}
function EJ(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IB(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function H7(b){return (56320|b&1023)&65535;}
function EV(b){return GO(b)&65535;}
function GO(b){return APZ(b).toLowerCase().charCodeAt(0);}
function FC(b){return GN(b)&65535;}
function GN(b){return APZ(b).toUpperCase().charCodeAt(0);}
function We(b,c){if(c>=2&&c<=36){b=T$(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function T$(b){var c,d,e,f,g,h,i,j,k;if(BfJ===null){if(BfM===null)BfM=AMc();c=(BfM.value!==null?$rt_str(BfM.value):null);d=new RR;d.Cy=Nq(c);e=Yi(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=Yi(d);h=h+1|0;}BfJ=f;}f=BfJ.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=R(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function IY(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Iu(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=IB(b);d[1]=H7(b);return c;}
function Do(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&On(b&65535))return 19;if(BfK===null){if(BfN===null)BfN=AHJ();BfK=A2I((BfN.value!==null?$rt_str(BfN.value):null));}d=BfK.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.Aj)e=f+1|0;else{if(b>=g.xa)return g.CZ.data[b-g.xa|0];c=f-1|0;}}return 0;}
function Lc(b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Is(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Do(b)!=16?0:1;}
function Uq(b){switch(Do(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Qb(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Uq(b);}return 1;}
function ADb(a,b){return a.lZ-b.lZ|0;}
function A29(a,b){return ADb(a,b);}
function AIR(){BfI=F($rt_charcls());BfL=J(Fj,128);}
function AMc(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function AHJ(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
function IV(){var a=this;D.call(a);a.cW=null;a.DQ=0;}
function AJ2(a){return 1;}
function A85(a,b){return;}
function UM(){var a=this;IV.call(a);a.vV=0;a.vX=0;a.vW=0;a.hm=0.0;a.mK=0.0;a.oj=0.0;a.na=0;a.Ba=null;a.Bw=null;}
function Q_(a,b){b.v=(-180.0);}
function A$m(a){return;}
function AFx(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cW.A;$p=1;case 1:$z=ACt(e,b,c,d);if(C()){break _;}f=$z;e=a.cW.A;$p=2;case 2:$z=AEH(e,b,c,d);if(C()){break _;}g=$z;e=a.cW.c5;$p=3;case 3:AEB(e,b,c,d);if(C()){break _;}e=a.cW.A;L();h=BeN.data;$p=4;case 4:$z=ACt(e,b,c,d);if(C()){break _;}i=$z;j=h[i];$p=5;case 5:$z=AEH(e,b,c,d);if(C()){break _;}i=
$z;k=0;$p=6;case 6:$z=APu(e,b,c,d,k);if(C()){break _;}k=$z;if(j!==null&&k){$p=7;continue _;}e=Kp(a.cW.f);if(e!==null){QC(e,f,b,c,d);if(!e.q)Jw(a.cW.f);}if(k&&M4(a.cW.f,BeN.data[f])){e=BeN.data[f];j=a.cW.A;$p=8;continue _;}return k;case 7:j.nn(e,b,c,d,i);if(C()){break _;}e=Kp(a.cW.f);if(e!==null){QC(e,f,b,c,d);if(!e.q)Jw(a.cW.f);}if(k&&M4(a.cW.f,BeN.data[f])){e=BeN.data[f];j=a.cW.A;$p=8;continue _;}return k;case 8:e.IK(j,b,c,d,g);if(C()){break _;}return k;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AE2(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cW.A;$p=1;case 1:$z=ACt(e,b,c,d);if(C()){break _;}f=$z;if(f>0&&a.hm===0.0){L();e=BeN.data[f];g=a.cW.A;h=a.cW.f;$p=3;continue _;}if(f<=0)return;L();e=BeN.data[f];g=a.cW.f;$p=2;case 2:$z=ABb(e,g);if(C()){break _;}i=$z;if(i<1.0)return;$p=4;continue _;case 3:e.q6(g,b,c,d,h);if(C()){break _;}if(f<=0)return;L();e=BeN.data[f];g
=a.cW.f;$p=2;continue _;case 4:AFx(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALN(a){a.hm=0.0;a.na=0;}
function YJ(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.na>0)a.na=a.na-1|0;else{if(b==a.vV&&c==a.vX&&d==a.vW){f=a.cW.A;$p=1;continue _;}a.hm=0.0;a.mK=0.0;a.oj=0.0;a.vV=b;a.vX=c;a.vW=d;}return;case 1:$z=ACt(f,b,c,d);if(C()){break _;}g=$z;if(!g)return;L();f=BeN.data[g];h=a.hm;i=a.cW.f;$p=2;case 2:$z=ABb(f,i);if(C()){break _;}j=$z;a.hm=h+j;a.oj=a.oj+1.0;if(a.hm<
1.0)return;$p=3;case 3:AFx(a,b,c,d);if(C()){break _;}a.hm=0.0;a.mK=0.0;a.oj=0.0;a.na=5;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function GQ(a,b){var c;if(a.hm<=0.0){a.cW.nV.Ei=0.0;a.cW.dV.tF=0.0;}else{c=a.mK+(a.hm-a.mK)*b;a.cW.nV.Ei=c;a.cW.dV.tF=c;}}
function A1h(a){return 4.0;}
function A4$(a,b){return;}
function AI0(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mK=a.hm;b=a.Ba;c=a.cW.A;$p=1;case 1:ABx(b,c);if(C()){break _;}b=a.Bw;c=a.cW.A;$p=2;case 2:ABx(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function Sx(){var a=this;D.call(a);a.c7=0.0;a.CH=0.0;a.i4=0;a.cX=0.0;a.CS=0.0;a.lG=0.0;a.sM=Long_ZERO;a.rQ=Long_ZERO;a.nB=0.0;}
function FN(a){var b,c,d,e,f;b=B$();c=Long_sub(b,a.sM);d=Long_div(EG(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.rQ));a.nB=a.nB+(e-a.nB)*0.20000000298023224;a.sM=b;a.rQ=d;}if(Long_lt(c,Long_ZERO)){a.sM=b;a.rQ=d;}f=Long_toNumber(d)/1000.0;e=(f-a.CH)*a.nB;a.CH=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.lG=a.lG+e*a.CS*a.c7;a.i4=a.lG|0;a.lG=a.lG-a.i4;if(a.i4>10)a.i4=10;a.cX=a.lG;}
function VC(){}
function RY(){var a=this;D.call(a);a.q2=null;a.ga=null;a.nY=null;a.oe=Long_ZERO;a.nx=0;}
function AOY(a,b){a.nx=0;RN(a,b);}
function YF(a,b){a.nx=1;RN(a,a.nY);}
function RN(a,b){var c,d,e;a:{if(!a.ga.hx){if(a.nx)break a;b=new KI;O(b);M(b);}a.nY=b;c=FG(a.ga.cc,a.ga.bB);d=c.fL;e=c.fH;D4(256);C$(5889);C9();Im(0.0,d,e,0.0,100.0,300.0);C$(5888);C9();Bw(0.0,0.0,(-200.0));}}
function AR2(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.ga.hx){if(a.nx)return;b=new KI;O(b);M(b);}a.oe=Long_ZERO;a.q2=b;c=(-1);$p=1;case 1:XE(a,c);if(C()){break _;}a.oe=Long_ZERO;return;default:E_();}}C3().s(a,b,c,$p);}
function XE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.ga.hx){if(a.nx)break a;c=new KI;O(c);M(c);}d=B$();if(Long_ge(Long_sub(d,a.oe),Long_fromInt(20))){a.oe=d;c=FG(a.ga.cc,a.ga.bB);e=c.fL;f=c.fH;D4(256);C$(5889);C9();g=e;h=f;Im(0.0,g,h,0.0,100.0,300.0);C$(5888);C9();Bw(0.0,
0.0,(-200.0));D4(16640);BA();i=BeJ;c=a.ga.bo;j=B(165);$p=1;continue _;}}return;case 1:$z=AHs(c,j);if(C()){break _;}k=$z;Cp(3553,k);Bz(i);ES(i,4210752);l=f/32.0;G(i,0.0,h,0.0,0.0,l);m=e/32.0;G(i,g,h,0.0,m,l);G(i,g,0.0,0.0,m,0.0);G(i,0.0,0.0,0.0,0.0,0.0);Br(i);if(b>=0){n=(e/2|0)-50|0;o=(f/2|0)+16|0;Bb(3553);Bz(i);ES(i,8421504);g=n;p=o;Bf(i,g,p,0.0);m=o+2|0;Bf(i,g,m,0.0);q=n+100|0;Bf(i,q,m,0.0);Bf(i,q,p,0.0);ES(i,8454016);Bf(i,g,p,0.0);Bf(i,g,m,0.0);q=n+b|0;Bf(i,q,m,0.0);Bf(i,q,p,0.0);Br(i);Ba(3553);}c=a.ga.e8;i
=a.nY;b=(e-Dw(a.ga.e8,a.nY)|0)/2|0;r=(f/2|0)-4|0;Cy(c,i,b,r-16|0,16777215);Cy(a.ga.e8,a.q2,(e-Dw(a.ga.e8,a.q2)|0)/2|0,r+8|0,16777215);$p=2;case 2:AUS();if(C()){break _;}try{$p=3;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else{throw $$e;}}return;case 3:b:{try{Xy();if(C()){break _;}break b;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else{throw $$e;}}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AFN(){var a=this;D.call(a);a.u=null;a.qt=0;a.lR=0.0;a.iG=null;a.tH=0;a.p4=null;a.lj=null;a.H7=0;a.H6=0;a.pX=null;a.dG=0.0;a.d5=0.0;a.dT=0.0;a.oa=0.0;a.l7=0.0;}
function BbO(a){var b=new AFN();AT5(b,a);return b;}
function AT5(a,b){var c;a.qt=0;a.lR=0.0;a.p4=null;a.lj=new Dz;a.H7=0;a.H6=0;a.pX=HY(16);a.u=b;c=new O8;c.eR=null;c.i$=0.0;c.q8=0.0;c.ix=0;c.jL=0;c.z9=Kh();c.cO=b;a.iG=c;}
function AIM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oa=a.l7;b=a.u.A;c=K(a.u.f.d);d=K(a.u.f.j);e=K(a.u.f.e);$p=1;case 1:$z=ANf(b,c,d,e);if(C()){break _;}f=$z;g=(3-a.u.l.he|0)/3.0;h=f*(1.0-g)+g;a.l7=a.l7+(h-a.l7)*0.10000000149011612;a.tH=a.tH+1|0;AI9(a.iG);if(a.u.cT)
{b=a.u.f;i=a.u.A;d=K(b.d);j=K(b.j);k=K(b.e);l=4;m=0;n=63;e=R(64,j+4|0);j=R(64,j-4|0);o=64.0999984741211;if(m<50){p=(d+E(a.lj,9)|0)-l|0;q=(k+E(a.lj,9)|0)-l|0;$p=2;continue _;}}return;case 2:$z=ACt(i,p,n,q);if(C()){break _;}c=$z;if(e<=0&&j>=0){f=N(a.lj);g=N(a.lj);if(c>0){b=a.u.c5;r=new JL;s=p+f;L();TI(r,i,s,o-BeN.data[c].cL,q+g);El(b,r);}}m=m+1|0;if(m>=50)return;p=(d+E(a.lj,9)|0)-l|0;q=(k+E(a.lj,9)|0)-l|0;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function NB(a,b){var c,d,e,f;c=a.u.f;d=c.bT;e=c.d-c.bT;f=b;return BY(d+e*f,c.cR+(c.j-c.cR)*f,c.bS+(c.e-c.bS)*f);}
function ALR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=c.T+(c.J-c.T)*b;e=c.P+(c.v-c.P)*b;f=NB(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=BC(g);i=Bq(g);g= -d*0.01745329238474369;j= -BC(g);g=Bq(g);k=i*j;l
=h*j;m=4.0;n=k;o=n*m;p=g;q=p*m;r=l;s=Dk(f,o,q,r*m);t=a.u;u=a.u.A;$p=1;case 1:$z=AJj(u,f,s);if(C()){break _;}u=$z;t.ce=u;f=NB(a,b);if(a.u.ce!==null)m=DG(a.u.ce.gx,f);if(a.u.cB instanceof Du)m=32.0;else if(m>3.0)m=3.0;n=n*m;p=p*m;r=r*m;s=Dk(f,n,p,r);a.p4=null;t=a.u.A;u=Ja(c.L,n,p,r);$p=2;case 2:$z=ADI(t,c,u);if(C()){break _;}t=$z;n=0.0;v=0;while(v<t.p){u=Z(t,v);if(u.lq()){w=QN(Dv(u.L,0.10000000149011612,0.10000000149011612,0.10000000149011612),f,s);if(w!==null){p=DG(f,w.gx);if(!(p>=n&&n!==0.0)){a.p4=u;n=p;}}}v
=v+1|0;}if(a.p4!==null&&!(a.u.cB instanceof Du))a.u.ce=A0_(a.p4);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function L4(a,b){var c,d,e;c=a.u.f;d=c.dD-b;if(c.bU<=0)Bv(40.0-8000.0/(c.c1+b+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.EJ;b=Bq(b*b*b*b*3.1415927410125732);e=c.kD;Bv( -e,0.0,1.0,0.0);Bv( -b*14.0,0.0,0.0,1.0);Bv(e,0.0,1.0,0.0);}}
function IH(a,b){var c,d,e,f,g;if(!a.u.l.cC){c=a.u.f;d=c.g_-c.tU;e=c.g_+d*b;f=c.qw+(c.kR-c.qw)*b;g=c.kU+(c.jk-c.kU)*b;d=e*3.1415927410125732;Bw(Bq(d)*f*0.5, -HU(BC(d)*f),0.0);Bv(Bq(d)*f*3.0,0.0,0.0,1.0);Bv(HU(BC(d+0.20000000298023224)*f)*5.0,1.0,0.0,0.0);Bv(g,1.0,0.0,0.0);}}
function AH8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=c.bT;e=c.d-c.bT;f=b;g=d+e*f;h=c.cR+(c.j-c.cR)*f;i=c.bS+(c.e-c.bS)*f;if(!a.u.l.cC)Bw(0.0,0.0,(-0.10000000149011612));else{j=4.0;d= -Bq(c.v/180.0*3.1415927410125732)*BC(c.J
/180.0*3.1415927410125732)*j;e=BC(c.v/180.0*3.1415927410125732)*BC(c.J/180.0*3.1415927410125732)*j;f= -Bq(c.J/180.0*3.1415927410125732)*j;k=0;l=g-d;d=h-f;f=i-e;if(k<8){m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.u.A;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);$p=1;continue _;}Bw(0.0,0.0, -j);}Bv(c.T+(c.J-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.v-c.P)*b+180.0,0.0,1.0,0.0);return;case 1:$z=AJj(p,u,v);if(C()){break _;}u
=$z;if(u!==null){q=DG(u.gx,BY(g,h,i));if(q<j)j=q;}k=k+1|0;if(k>=8){Bw(0.0,0.0, -j);Bv(c.T+(c.J-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.v-c.P)*b+180.0,0.0,1.0,0.0);return;}m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.u.A;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AFv(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lR=256>>a.u.l.he;C$(5889);C9();if(a.u.l.dw)Bw( -((c*2|0)-1|0)*0.07000000029802322,0.0,0.0);d=a.u.f;e=70.0;f=BfO;$p=1;case 1:$z=AGF(d,f);if(C()){break _;}g=$z;if(g)e=60.0;if(d.bU<=0)e=e/((1.0-500.0/(d.c1+b+500.0))*2.0+1.0);h=a.u.cc/a.u.bB;i=a.lR;f=GM();j=e*0.01745329238474369*0.5;k=GB(j)/Go(j);f.es
=k/h;f.eq=0.0;f.er=0.0;f.ep=0.0;f.ev=0.0;f.ew=k;f.et=0.0;f.eu=0.0;f.eA=0.0;f.ey=0.0;h=i+0.05000000074505806;k=i-0.05000000074505806;f.ez=h/k;f.ex=(-1.0);f.gS=0.0;f.gT=0.0;f.gQ=2.0*i*0.05000000074505806/k;f.gR=0.0;C$(5888);C9();if(a.u.l.dw)Bw(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);L4(a,b);if(a.u.l.it)IH(a,b);$p=2;case 2:AH8(a,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFL(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qt&&!Od()){c=a.u;$p=1;continue _;}a.qt=Od();Bd();d=BdW;BdW=0.0;e=d|0;d=BdX;BdX=0.0;f=d|0;g=1;if(a.u.l.m2)g=(-1);if(a.u.bp&&a.u.A!==null)Xh(a.u.f,e,Bj(f,g));if(!a.u.h7){c=FG(a.u.cc,a.u.bB);f=c.fL;e=c.fH;h=Bj(BdU,f)/a.u.cc|0;i=(e-(Bj(BdV,e)/a.u.bB|0)|0)-1|0;if(a.u.A!==null){$p=2;continue _;}FM(0,0,a.u.cc,a.u.bB);Hx(0.0,
0.0,0.0,0.0);D4(16640);C$(5889);C9();C$(5888);C9();LB(a);if(a.u.D!==null){D4(256);c=a.u.D;$p=3;continue _;}}return;case 1:AK9(c);if(C()){break _;}a.qt=Od();Bd();d=BdW;BdW=0.0;e=d|0;d=BdX;BdX=0.0;f=d|0;g=1;if(a.u.l.m2)g=(-1);if(a.u.bp&&a.u.A!==null)Xh(a.u.f,e,Bj(f,g));if(!a.u.h7){c=FG(a.u.cc,a.u.bB);f=c.fL;e=c.fH;h=Bj(BdU,f)/a.u.cc|0;i=(e-(Bj(BdV,e)/a.u.bB|0)|0)-1|0;if(a.u.A!==null){$p=2;continue _;}FM(0,0,a.u.cc,a.u.bB);Hx(0.0,0.0,0.0,0.0);D4(16640);C$(5889);C9();C$(5888);C9();LB(a);if(a.u.D!==null){D4(256);c
=a.u.D;$p=3;continue _;}}return;case 2:AAc(a,b);if(C()){break _;}c=a.u.nV;g=a.u.D===null?0:1;$p=4;continue _;case 3:c.hN(h,i,b);if(C()){break _;}return;case 4:APH(c,b,g,h,i);if(C()){break _;}if(a.u.D===null)return;D4(256);c=a.u.D;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ALR(a,b);if(C()){break _;}c=a.u.f;d=a.u.dV;e=a.u.c5;f=c.cr;g=c.d-c.cr;h=b;i=f+g*h;f=c.b7+(c.j-c.b7)*h;g=c.cs+(c.e-c.cs)*h;j=0;if(j>=2){DN(1,1,1,0);return;}if(a.u.l.dw){if(j)DN(1,0,0,0);else DN(0,1,1,0);}FM(0,0,a.u.cc,a.u.bB);$p=2;case 2:ADZ(a,
b);if(C()){break _;}D4(16640);Ba(2884);$p=3;case 3:AFv(a,b,j);if(C()){break _;}RP();if(a.u.l.he<2){k=(-1);$p=4;continue _;}if(!a.u.l.bw)Ba(2912);k=1;$p=6;continue _;case 4:ASd(a,k);if(C()){break _;}$p=5;case 5:AC_(d,b);if(C()){break _;}if(!a.u.l.bw)Ba(2912);k=1;$p=6;case 6:ASd(a,k);if(C()){break _;}l=Bbw();AOi(l,i,f,g);ARH(a.u.dV,l,b);m=a.u.dV;k=0;$p=7;case 7:AIi(m,c,k);if(C()){break _;}k=0;$p=8;case 8:ASd(a,k);if(C()){break _;}if(!a.u.l.bw)Ba(2912);k=3553;m=a.u.bo;n=B(179);$p=9;case 9:$z=AHs(m,n);if(C()){break _;}o
=$z;Cp(k,o);DS();Vl(d,c,0,h);Hu();m=NB(a,b);$p=10;case 10:ACy(d,m,l,b);if(C()){break _;}$p=11;case 11:ABS(e,c,b);if(C()){break _;}DS();k=0;$p=12;case 12:ASd(a,k);if(C()){break _;}$p=13;case 13:AA_(e,c,b);if(C()){break _;}if(a.u.ce!==null){l=BfO;$p=16;continue _;}Df(770,771);k=0;$p=14;case 14:ASd(a,k);if(C()){break _;}Ba(3042);Bb(2884);k=3553;l=a.u.bo;m=B(179);$p=15;case 15:$z=AHs(l,m);if(C()){break _;}o=$z;Cp(k,o);Vl(d,c,1,h);Gr(1);Ba(2884);Bb(3042);if(a.u.ce!==null){l=BfO;$p=17;continue _;}Bb(2912);if(a.u.cT)
{$p=20;continue _;}k=0;$p=23;continue _;case 16:$z=AGF(c,l);if(C()){break _;}k=$z;if(!k){Df(770,771);k=0;$p=14;continue _;}Bb(3008);l=a.u.ce;k=0;m=D9(c.K);$p=18;continue _;case 17:$z=AGF(c,l);if(C()){break _;}k=$z;if(!k){Bb(3008);l=a.u.ce;k=0;m=D9(c.K);$p=21;continue _;}Bb(2912);if(a.u.cT){$p=20;continue _;}k=0;$p=23;continue _;case 18:AFF(d,c,l,k,m,b);if(C()){break _;}l=a.u.ce;k=0;m=D9(c.K);$p=19;case 19:AGe(d,c,l,k,m,b);if(C()){break _;}Ba(3008);Df(770,771);k=0;$p=14;continue _;case 20:XP(a,b);if(C()){break _;}k
=0;$p=23;continue _;case 21:AFF(d,c,l,k,m,b);if(C()){break _;}m=a.u.ce;k=0;l=D9(c.K);$p=22;case 22:AGe(d,c,m,k,l,b);if(C()){break _;}Ba(3008);Bb(2912);if(a.u.cT){$p=20;continue _;}k=0;$p=23;case 23:ASd(a,k);if(C()){break _;}if(!a.u.l.bw)Ba(2912);$p=24;case 24:YI(d,b);if(C()){break _;}Bb(2912);k=1;$p=25;case 25:ASd(a,k);if(C()){break _;}D4(256);C9();if(a.u.l.dw)Bw(((j*2|0)-1|0)*0.10000000149011612,0.0,0.0);B3();L4(a,b);if(a.u.l.it)IH(a,b);if(!a.u.l.cC){l=a.iG;$p=26;continue _;}BD();if(!a.u.l.cC){l=a.iG;$p=27;continue _;}if
(a.u.l.it)IH(a,b);if(!a.u.l.dw)return;j=j+1|0;if(j>=2){DN(1,1,1,0);return;}if(a.u.l.dw){if(j)DN(1,0,0,0);else DN(0,1,1,0);}FM(0,0,a.u.cc,a.u.bB);$p=2;continue _;case 26:ACU(l,b);if(C()){break _;}BD();if(!a.u.l.cC){l=a.iG;$p=27;continue _;}if(a.u.l.it)IH(a,b);if(!a.u.l.dw)return;j=j+1|0;if(j>=2){DN(1,1,1,0);return;}if(a.u.l.dw){if(j)DN(1,0,0,0);else DN(0,1,1,0);}FM(0,0,a.u.cc,a.u.bB);$p=2;continue _;case 27:AB7(l,b);if(C()){break _;}L4(a,b);if(a.u.l.it)IH(a,b);if(!a.u.l.dw)return;j=j+1|0;if(j>=2){DN(1,1,1,0);return;}if
(a.u.l.dw){if(j)DN(1,0,0,0);else DN(0,1,1,0);}FM(0,0,a.u.cc,a.u.bB);$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function XP(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=K(c.d);e=K(c.j);f=K(c.e);BA();g=BeJ;Bb(2884);Cj(0.0,1.0,0.0);Ba(3042);Df(770,
771);h=3553;i=a.u.bo;j=B(196);$p=1;case 1:$z=AHs(i,j);if(C()){break _;}k=$z;Cp(h,k);k=d-5|0;d=d+5|0;h=f-5|0;l=f+5|0;m=e-5|0;n=e+5|0;e=R(m,64);o=R(n,64);while(k<=d){p=h;while(p<=l){q=e<0?64:m;r=o<0?64:n;if(q!=r){s=((((a.tH+(k*3121|0)|0)+Bj(p,418711)|0)%32|0)+b)/32.0;t=k+0.5-c.d;u=p+0.5-c.e;v=Ce(t*t+u*u)/5.0;BU(1.0,1.0,1.0,(1.0-v*v)*0.699999988079071);Bz(g);u=k+0|0;w=q;x=p+0|0;v=q*2.0/8.0;y=s*2.0;z=v+y;G(g,u,w,x,0.0,z);ba=k+1|0;bb=p+1|0;G(g,ba,w,bb,2.0,z);bc=r;bd=r*2.0/8.0+y;G(g,ba,bc,bb,2.0,bd);G(g,u,bc,x,0.0,
bd);G(g,u,w,bb,0.0,z);G(g,ba,w,x,2.0,z);G(g,ba,bc,x,2.0,bd);G(g,u,bc,bb,0.0,bd);Br(g);}p=p+1|0;}k=k+1|0;}Ba(2884);Bb(3042);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function LB(a){var b,c,d;b=FG(a.u.cc,a.u.bB);c=b.fL;d=b.fH;D4(256);C$(5889);C9();Im(0.0,c,d,0.0,1000.0,3000.0);C$(5888);C9();Bw(0.0,0.0,(-2000.0));}
function ADZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.A;d=a.u.f;e=1.0-A2M(1.0/(4-a.u.l.he|0),0.25);f=ON(c,b);g=f.x;h=f.z;i=f.w;j=ADp(c,b);a.dG=j.x;a.d5=j.z;a.dT=j.w;a.dG=a.dG+(g-a.dG)*e;a.d5=a.d5+(h-a.d5)*e;a.dT=a.dT+(i-a.dT)*e;c=BfO;$p=1;case 1:$z=AGF(d,c);if(C()){break _;}k=$z;if(k){a.dG=0.019999999552965164;a.d5
=0.019999999552965164;a.dT=0.20000000298023224;e=a.oa+(a.l7-a.oa)*b;a.dG=a.dG*e;a.d5=a.d5*e;a.dT=a.dT*e;if(a.u.l.dw){l=(a.dG*30.0+a.d5*59.0+a.dT*11.0)/100.0;m=(a.dG*30.0+a.d5*70.0)/100.0;n=(a.dG*30.0+a.dT*70.0)/100.0;a.dG=l;a.d5=m;a.dT=n;}Hx(a.dG,a.d5,a.dT,0.0);return;}c=BfP;$p=2;case 2:$z=AGF(d,c);if(C()){break _;}k=$z;if(k){a.dG=0.6000000238418579;a.d5=0.10000000149011612;a.dT=0.0;}e=a.oa+(a.l7-a.oa)*b;a.dG=a.dG*e;a.d5=a.d5*e;a.dT=a.dT*e;if(a.u.l.dw){l=(a.dG*30.0+a.d5*59.0+a.dT*11.0)/100.0;m=(a.dG*30.0+a.d5
*70.0)/100.0;n=(a.dG*30.0+a.dT*70.0)/100.0;a.dG=l;a.d5=m;a.dT=n;}Hx(a.dG,a.d5,a.dT,0.0);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASd(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=a.dG;e=a.d5;f=a.dT;EA(a.pX);CJ(CJ(CJ(CJ(a.pX,d),e),f),1.0);Gs(a.pX);g=a.pX;BW();BfQ=Jo(g);BfR=Jo(g);BfS=Jo(g);BfT=Jo(g);Cj(0.0,(-1.0),0.0);BU(1.0,1.0,1.0,1.0);g=BfO;$p=1;case 1:$z=AGF(c,g);if(C()){break _;}h=$z;if(h){L_(2917,2048);GL(2914,0.10000000149011612);Ba(2903);return;}g=BfP;$p=2;case 2:$z=AGF(c,g);if(C()){break _;}h
=$z;if(h){L_(2917,2048);GL(2914,2.0);}else{L_(2917,9729);GL(2915,a.lR*0.25);GL(2916,a.lR);if(b<0){GL(2915,0.0);GL(2916,a.lR*0.800000011920929);}}Ba(2903);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Eh(){D.call(this);this.xT=0.0;}
function Mw(){var a=this;Eh.call(a);a.iW=null;a.k7=null;a.pf=null;a.d0=null;a.dM=null;a.i8=null;a.hd=null;}
function A$W(){var a=new Mw();KE(a);return a;}
function Xp(a){var b=new Mw();AIJ(b,a);return b;}
function BfU(a,b){var c=new Mw();ARs(c,a,b);return c;}
function KE(a){AIJ(a,0.0);}
function AIJ(a,b){ARs(a,b,0.0);}
function ARs(a,b,c){var d,e;a.iW=BK(0,0);BG(a.iW,(-4.0),(-8.0),(-4.0),8,8,8,b);d=a.iW;e=0.0+c;BJ(d,0.0,e,0.0);a.k7=BK(32,0);BG(a.k7,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BJ(a.k7,0.0,e,0.0);a.pf=BK(16,16);BG(a.pf,(-4.0),0.0,(-2.0),8,12,4,b);BJ(a.pf,0.0,e,0.0);a.d0=BK(40,16);BG(a.d0,(-3.0),(-2.0),(-2.0),4,12,4,b);d=a.d0;e=2.0+c;BJ(d,(-5.0),e,0.0);a.dM=BK(40,16);a.dM.lz=1;BG(a.dM,(-1.0),(-2.0),(-2.0),4,12,4,b);BJ(a.dM,5.0,e,0.0);a.i8=BK(0,16);BG(a.i8,(-2.0),0.0,(-2.0),4,12,4,b);d=a.i8;c=12.0+c;BJ(d,(-2.0),c,0.0);a.hd
=BK(0,16);a.hd.lz=1;BG(a.hd,(-2.0),0.0,(-2.0),4,12,4,b);BJ(a.hd,2.0,c,0.0);}
function A$i(a,b,c,d,e,f,g){a.og(b,c,d,e,f,g);B_(a.iW,g);B_(a.pf,g);B_(a.d0,g);B_(a.dM,g);B_(a.i8,g);B_(a.hd,g);B_(a.k7,g);}
function AIQ(a,b,c,d,e,f,g){var h;a.iW.bY=e/57.2957763671875;a.iW.b1=f/57.2957763671875;a.k7.bY=a.iW.bY;a.k7.b1=a.iW.b1;h=a.d0;e=b*0.6661999821662903;f=e+3.1415927410125732;h.b1=BC(f)*2.0*c;a.d0.bV=(BC(b*0.23119999468326569)+1.0)*1.0*c;a.dM.b1=BC(e)*2.0*c;a.dM.bV=(BC(b*0.28119999170303345)-1.0)*1.0*c;a.i8.b1=BC(e)*1.399999976158142*c;a.hd.b1=BC(f)*1.399999976158142*c;h=a.d0;c=h.bV;b=d*0.09000000357627869;h.bV=c+BC(b)*0.05000000074505806+0.05000000074505806;h=a.dM;h.bV=h.bV-(BC(b)*0.05000000074505806+0.05000000074505806);h
=a.d0;b=h.b1;c=d*0.06700000166893005;h.b1=b+Bq(c)*0.05000000074505806;h=a.dM;h.b1=h.b1-Bq(c)*0.05000000074505806;}
function Eu(){var a=this;D.call(a);a.dC=null;a.IS=0;a.mA=0;a.HP=0;a.wV=0;}
function BfV(a){var b=new Eu();Hz(b,a);return b;}
function Hz(a,b){a.dC=$rt_createByteArray(1024);a.mA=0;a.HP=0;a.wV=1;a.IS=b;}
function AAQ(){var a=this;Eu.call(a);a.pv=null;a.tn=null;a.nU=null;a.rK=null;a.xw=0;}
function Ban(){var a=new AAQ();A$2(a);return a;}
function A$2(a){L();Hz(a,BfW.bb);a.pv=$rt_createFloatArray(256);a.tn=$rt_createFloatArray(256);a.nU=$rt_createFloatArray(256);a.rK=$rt_createFloatArray(256);a.xw=0;}
function AYz(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;a.xw=a.xw+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.pv.data[f+(g*16|0)|0];e=e+1|0;}h=a.tn.data;i=b+(c*16|0)|0;h[i]=d/3.299999952316284+a.nU.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}c=0;while(c<16){j=0;while(j<16){k=a.nU.data;b=c+(j*16|0)|0;k[b]=k[b]+a.rK.data[b]*0.05000000074505806;if(a.nU.data[b]<0.0)a.nU.data[b]=0.0;k=a.rK.data;k[b]=k[b]-0.10000000149011612;if(BP()<0.05)a.rK.data[b]=0.5;j=j+1|0;}c=c+1|0;}k=a.tn;a.tn
=a.pv;a.pv=k;c=0;while(c<256){d=a.pv.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;l=d*d;i=32.0+l*32.0|0;m=50.0+l*64.0|0;n=255;o=146.0+l*50.0|0;if(a.mA){b=i*30|0;i=((b+(m*59|0)|0)+2805|0)/100|0;m=(b+(m*70|0)|0)/100|0;n=(b+17850|0)/100|0;}k=a.dC.data;j=c*4|0;k[j+0|0]=i<<24>>24;a.dC.data[j+1|0]=m<<24>>24;a.dC.data[j+2|0]=n<<24>>24;a.dC.data[j+3|0]=o<<24>>24;c=c+1|0;}}
function AKA(){var a=this;Eu.call(a);a.pQ=null;a.qO=null;a.ju=null;a.su=null;}
function BaW(){var a=new AKA();A1C(a);return a;}
function A1C(a){L();Hz(a,BfX.bb);a.pQ=$rt_createFloatArray(256);a.qO=$rt_createFloatArray(256);a.ju=$rt_createFloatArray(256);a.su=$rt_createFloatArray(256);}
function AYP(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){h=(g+e|0)&15;j=(i+f|0)&15;d=d+a.pQ.data[h+(j*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.qO.data;l=b+(c*16|0)|0;d=d/10.0;m=a.ju.data;e=(b+0|0)&15;n=((c+0|0)&15)*16|0;o=m[e+n|0];m=a.ju.data;h=h&15;o=o+m[h+n|0];m=a.ju.data;c=c+1|0;n=(c&15)*16|0;k[l]=d+(o+m[h+n
|0]+a.ju.data[e+n|0])/4.0*0.800000011920929;m=a.ju.data;m[l]=m[l]+a.su.data[l]*0.009999999776482582;if(a.ju.data[l]<0.0)a.ju.data[l]=0.0;m=a.su.data;m[l]=m[l]-0.05999999865889549;if(BP()<0.005)a.su.data[l]=1.5;}b=b+1|0;}m=a.qO;a.qO=a.pQ;a.pQ=m;n=0;while(n<256){d=a.pQ.data[n]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;h=d*100.0+155.0|0;o=d*d;j=o*255.0|0;l=o*d*d*128.0|0;if(a.mA){e=h*30|0;h=((e+(j*59|0)|0)+(l*11|0)|0)/100|0;j=(e+(j*70|0)|0)/100|0;l=(e+(l*70|0)|0)/100|0;}m=a.dC.data;b=n*4|0;m[b+0|0]=h<<24>>24;a.dC.data[b
+1|0]=j<<24>>24;a.dC.data[b+2|0]=l<<24>>24;a.dC.data[b+3|0]=(-1);n=n+1|0;}}
function L3(){D.call(this);}
var BfY=null;var BfZ=null;function Bf0(){var a=new L3();AZA(a);return a;}
function AZA(a){return;}
function DT(){if(BfY===null)BfY=AYH(new W_,0);return BfY;}
function C1(){if(BfZ===null)BfZ=AYH(new PK,0);return BfZ;}
function Di(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=APe(b)&&(e+f|0)<=APe(d)){a:{b:{if(b!==d){g=Kw(Dl(b));h=Kw(Dl(d));if(g!==null&&h!==null){if(g===h)break b;if(!FW(g)&&!FW(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!Ut(h,l[k])){Vf(b,c,d,e,j);b=new JQ;O(b);M(b);}j=j+1|0;k=m;}Vf(b,c,d,e,f);return;}if(!FW(g))break a;if(FW(h))break b;else break a;}b=new JQ;O(b);M(b);}}Vf(b,c,d,e,f);return;}b=new JQ;O(b);M(b);}b=new BO;O(b);M(b);}d=new EE;Bl(d,B(197));M(d);}
function Vf(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function B$(){return Long_fromNumber(new Date().getTime());}
function EG(){return Long_fromNumber(performance.now()*1000000.0);}
function VS(){Gk.call(this);this.yi=null;}
function AJY(a){var b,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(a.yi.hx){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){}else{throw $$e;}}}return;case 1:a:{try{AKC(b);if(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){}else{throw $$e;}}}while(a.yi.hx){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){}else{throw $$e;}}}return;default:E_();}}C3().s(a,
b,$p);}
function Sh(){}
function Ih(){}
function Gj(){D.call(this);}
function PS(a){return a.hw?0:1;}
function Q2(a,b){var c,d;c=a.kS();a:{while(c.qh()){b:{d=c.mO();if(d!==null){if(!d.em(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function AA4(a){var b,c,d,e,f;b=J(D,IJ(a));c=b.data;d=0;e=Os(a);while(F8(e)){f=d+1|0;c[d]=Ll(e);d=f;}return b;}
function Uz(a,b){var c,d,e,f,g;c=b.data;d=a.p;e=c.length;if(e<d)b=AEF(Kw(Dl(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Jg(a);while(KB(f)){c=b.data;g=e+1|0;c[e]=KS(f);e=g;}return b;}
function DC(a,b){var c,d;c=0;d=b.kS();while(d.qh()){if(!a.sN(d.mO()))continue;c=1;}return c;}
function Ga(a,b){var c,d;c=0;d=Jg(a);while(KB(d)){if(b.rv(KS(d))){AL$(d);c=1;}}return c;}
function J2(){}
function Gb(){Gj.call(this);this.d6=0;}
function Fu(a,b){AEN(a,a.hw,b);return 1;}
function Jg(a){var b;b=new Tr;b.k8=a;b.yj=b.k8.d6;b.sn=b.k8.p;b.nf=(-1);return b;}
function AA9(a,b){var c,d,e;c=a.p;d=0;a:{while(d<c){b:{e=Z(a,d);if(b!==null){if(!b.em(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function Mq(){Gb.call(this);}
function AEN(a,b,c){if(b>=0){ABp(Wh(a,b),c);return;}c=new BO;O(c);M(c);}
function Te(a,b){var c,d;if(b>=0){c=Wh(a,b);d=GC(c);AHe(c);return d;}c=new BO;O(c);M(c);}
function AUq(a){return JB(a);}
function Oz(){}
function Xf(){}
function AEC(){var a=this;Mq.call(a);a.pB=null;a.qi=null;a.hw=0;}
function QR(){var a=new AEC();A2P(a);return a;}
function A2P(a){return;}
function A9d(a){return a.hw;}
function Or(a){a.pB=null;a.qi=null;a.hw=0;a.d6=a.d6+1|0;}
function JB(a){return AJx(a,a.pB,null,0);}
function Wh(a,b){var c,d,e;if(b<0){c=new BO;O(c);M(c);}if(b<=(a.hw/2|0)){d=a.pB;e=0;while(e<b){d=d.hq;e=e+1|0;}return AJx(a,d,d===null?null:d.iw,b);}if(b>a.hw){c=new BO;O(c);M(c);}c=a.qi;e=b;while(e<a.hw){c=c.iw;e=e+1|0;}return AJx(a,c===null?null:c.hq,c,b);}
function AN9(){D.call(this);}
function F5(){D.call(this);}
function ABC(){F5.call(this);}
function AKE(){F5.call(this);}
function I$(){}
function Fc(){Gj.call(this);}
function Fr(a,b){var c,d;c=0;if(IJ(a)>=b.lS()){d=b.kS();while(d.qh()){if(!KV(a,d.mO()))continue;c=1;}}else{d=Os(a);while(F8(d)){if(b.rv(Ll(d))){c=1;ADO(d);}}}return c;}
function A5V(a,b){var c,d;if(a===b)return 1;if(!Sg(b,I$))return 0;c=b;if(IJ(a)!=IJ(c))return 0;d=Os(c);while(F8(d)){if(Ww(a,Ll(d)))continue;else return 0;}return 1;}
function ASZ(a){var b,c,d,e,f,g;b=AA4(a);if(b===null)c=0;else{c=(-1515898884);d=0;while(true){e=b.data;if(d>=e.length)break;f=e[d];g=(f!==null?f.fj():0)^528111840;c=Ni(g,4)^(g>>>7|g<<25)^Ni(c,13);d=d+1|0;}}return c;}
function EU(){}
function AQh(){Fc.call(this);this.l4=null;}
function F7(){var a=new AQh();A05(a);return a;}
function A05(a){a.l4=Dd();}
function Xd(a,b){return BR(a.l4,b,a)!==null?0:1;}
function Ww(a,b){return DZ(a.l4,b);}
function Os(a){return ACP(AKa(a.l4));}
function KV(a,b){return Q3(a.l4,b)===null?0:1;}
function IJ(a){return a.l4.f8;}
function LS(){}
function FU(){var a=this;D.call(a);a.wU=null;a.w4=null;}
function AB_(){var a=this;FU.call(a);a.f8=0;a.cN=null;a.g7=0;a.E7=0.0;a.uE=0;}
function Dd(){var a=new AB_();AVq(a);return a;}
function A54(a,b){return J(IC,b);}
function AVq(a){var b;b=AGX(16);a.f8=0;a.cN=J(IC,b);a.E7=0.75;RI(a);}
function AGX(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function U5(a){var b;if(a.f8>0){a.f8=0;b=a.cN;ZB(b,0,b.data.length,null);a.g7=a.g7+1|0;}}
function RI(a){a.uE=a.cN.data.length*a.E7|0;}
function DZ(a,b){return VG(a,b)===null?0:1;}
function AEa(a,b){var c,d,e;a:{if(b===null){c=0;b:while(true){if(c>=a.cN.data.length)break a;d=a.cN.data[c];while(d!==null){if(d.e4===null)break b;d=d.eC;}c=c+1|0;}return 1;}c=0;c:while(true){if(c>=a.cN.data.length)break a;d=a.cN.data[c];while(d!==null){e=d.e4;if(b!==e&&!b.em(e)?0:1)break c;d=d.eC;}c=c+1|0;}return 1;}return 0;}
function CP(a,b){var c;c=VG(a,b);if(c===null)return null;return c.e4;}
function VG(a,b){var c,d;if(b===null)c=QM(a);else{d=b.fj();c=P1(a,b,d&(a.cN.data.length-1|0),d);}return c;}
function P1(a,b,c,d){var e;e=a.cN.data[c];while(e!==null&&!(e.pS==d&&AI3(b,e.ge))){e=e.eC;}return e;}
function QM(a){var b;b=a.cN.data[0];while(b!==null&&b.ge!==null){b=b.eC;}return b;}
function AKa(a){var b;if(a.wU===null){b=new PG;b.Cq=a;a.wU=b;}return a.wU;}
function Q$(a,b,c){return BR(a,b,c);}
function BR(a,b,c){var d,e,f,g;if(b===null){d=QM(a);if(d===null){a.g7=a.g7+1|0;d=RF(a,null,0,0);e=a.f8+1|0;a.f8=e;if(e>a.uE)Wm(a);}}else{e=b.fj();f=e&(a.cN.data.length-1|0);d=P1(a,b,f,e);if(d===null){a.g7=a.g7+1|0;d=RF(a,b,f,e);e=a.f8+1|0;a.f8=e;if(e>a.uE)Wm(a);}}g=d.e4;d.e4=c;return g;}
function RF(a,b,c,d){var e,f;e=new IC;f=null;e.ge=b;e.e4=f;e.pS=d;e.eC=a.cN.data[c];a.cN.data[c]=e;return e;}
function ALB(a,b){var c,d,e,f,g,h,i;c=AGX(!b?1:b<<1);d=J(IC,c);e=d.data;f=0;c=c-1|0;while(f<a.cN.data.length){g=a.cN.data[f];a.cN.data[f]=null;while(g!==null){h=g.pS&c;i=g.eC;g.eC=e[h];e[h]=g;g=i;}f=f+1|0;}a.cN=d;RI(a);}
function Wm(a){ALB(a,a.cN.data.length);}
function Q3(a,b){var c;c=AEi(a,b);if(c===null)return null;return c.e4;}
function AEi(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cN.data[0];while(e!==null){if(e.ge===null)break a;f=e.eC;d=e;e=f;}}else{g=b.fj();c=g&(a.cN.data.length-1|0);e=a.cN.data[c];while(e!==null&&!(e.pS==g&&AI3(b,e.ge))){f=e.eC;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.eC=e.eC;else a.cN.data[c]=e.eC;a.g7=a.g7+1|0;a.f8=a.f8-1|0;return e;}
function A4H(a){return a.f8;}
function Ip(a){var b;if(a.w4===null){b=new PH;b.wa=a;a.w4=b;}return a.w4;}
function AI3(b,c){return b!==c&&!b.em(c)?0:1;}
function AKb(){F5.call(this);}
function YR(){D.call(this);}
function Bf1(){var a=new YR();A0k(a);return a;}
function A0k(a){return;}
function A3E(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gl=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IT=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaE(callback);return thread.suspend(function(){try{Bcq(b,callback);}catch($e){callback.IT($rt_exception($e));}});}
function Bcq(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){CM(c,SM(0,0,B(198),null));return;}e=d.open($rt_ustr(b),1);b=new TD;b.AJ=c;b=Cu(b,"handleEvent");e.onBlocked=b;b=new TC;b.En=c;b.EH=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TB;b.Dt=c;b=Cu(b,"handleEvent");e.onerror=b;b=new TA;b.Bl=e;b=Cu(b,"handleEvent");e.onupgradeneeded=b;}
function A5u(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gl=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IT=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaE(callback);return thread.suspend(function(){try{A_Y(b,c,callback);}catch($e){callback.IT($rt_exception($e));}});}
function A_Y(b,c,d){var e;b=b.transaction("filesystem","readwrite").objectStore("filesystem");c=PP($rt_ustr(c));e=b.delete(c);b=new Tz;b.CF=d;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Tw;b.Da=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A_I(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gl=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IT=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaE(callback);return thread.suspend(function(){try{Ba7(b,c,callback);}catch($e){callback.IT($rt_exception($e));}});}
function Ba7(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PP($rt_ustr(c));e=b.get(c);b=new Tv;b.Ao=d;b.w_=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Tu;b.Ed=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A5p(b,c,d,e,f){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gl=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IT=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaE(callback);return thread.suspend(function(){try{Bb1(b,c,d,e,f,callback);}
catch($e){callback.IT($rt_exception($e));}});}
function Bb1(b,c,d,e,f,g){var h,i;h=(b.transaction("filesystem","readonly").objectStore("filesystem")).openCursor();i=$rt_createIntArray(1);b=new Ri;b.EK=h;b.Ek=g;b.yY=i;b.vD=c;b.Bh=e;b.C4=d;b.xf=f;b=Cu(b,"handleEvent");h.onsuccess=b;b=new Rj;b.DK=g;b.wJ=i;b=Cu(b,"handleEvent");h.onerror=b;}
function AUp(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gl=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IT=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaE(callback);return thread.suspend(function(){try{BcX(b,c,callback);}catch($e){callback.IT($rt_exception($e));}});}
function BcX(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PP($rt_ustr(c));e=b.get(c);b=new Rf;b.CN=d;b.u7=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Rg;b.Ec=d;b=Cu(b,"handleEvent");e.onerror=b;}
function AXN(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gl=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IT=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaE(callback);return thread.suspend(function(){try{Bbc(b,c,d,e,callback);}catch($e)
{callback.IT($rt_exception($e));}});}
function Bbc(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(B$(),new Long(596067632, 383)).lo;c=A5M($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Rh;c.Bt=f;b=Cu(c,"handleEvent");h.onsuccess=b;b=new Rk;b.BM=f;b=Cu(b,"handleEvent");h.onerror=b;}
function A8v(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function Us(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function A0G(b){return typeof b==='undefined'? -1:typeof b.lastModified==='undefined'? -1:b.lastModified;}
function PP(b){return [b];}
function AZQ(b){return typeof b==="string"?b:typeof b==="undefined"?null:typeof b[0]==="string"?b[0]:null;}
function A5M(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AE0(){var a=this;D.call(a);a.Fa=0;a.EZ=0;a.ux=null;a.xQ=null;}
function SM(a,b,c,d){var e=new AE0();AXl(e,a,b,c,d);return e;}
function AXl(a,b,c,d,e){a.Fa=b;a.EZ=c;a.ux=d;a.xQ=e;}
function EY(){var a=this;D.call(a);a.Hw=null;a.s$=0;}
function Bf2(a,b){var c=new EY();FP(c,a,b);return c;}
function FP(a,b,c){a.Hw=b;a.s$=c;}
function A0H(a){return a.s$;}
function ATq(a,b){return a!==b?0:1;}
function AX0(a){return MI(a);}
function JR(a){var b;b=Dl(a);if(!QZ(JF(b),F(EY)))b=JF(b);return b;}
function XH(a,b){var c,d;if(JR(b)===JR(a))return R(a.s$,b.s$);c=new Cb;d=new T;W(d);Bl(c,U(H(H(H(H(d,B(199)),IA(JR(a))),B(200)),IA(JR(b)))));M(c);}
function AXx(a,b){return XH(a,b);}
function E9(){EY.call(this);}
var BfC=null;var BfB=null;var BfA=null;var Bf3=null;function AHg(){var b,c,d;b=new E9;FP(b,B(201),0);BfC=b;b=new E9;FP(b,B(202),1);BfB=b;b=new E9;FP(b,B(203),2);BfA=b;c=J(E9,3);d=c.data;d[0]=BfC;d[1]=BfB;d[2]=BfA;Bf3=c;}
function Qn(){}
function U4(){D.call(this);this.yz=null;}
function BaE(b){var c;c=new U4;c.yz=b;return c;}
function CM(a,b){a.yz.Gl(b);}
function A15(a,b){a.yz.IT(b);}
function AQD(){D.call(this);}
function Xl(){}
function W2(){var a=this;D.call(a);a.vl=null;a.z8=null;}
function ARd(a){var b,c,d;if(a.vl.readyState==4){b=new Uint8Array(a.vl.response);c=$rt_createByteArray(b.byteLength);Bd();BdI=c;d=0;while(d<V2().data.length){V2().data[d]=b[d]<<24>>24;d=d+1|0;}CM(a.z8,B(204));}}
function A1X(a){ARd(a);}
function HX(){D.call(this);}
function AQc(){var a=this;HX.call(a);a.w2=null;a.ki=0;a.F4=0;a.qJ=0;}
function Ug(a){var b=new AQc();ATZ(b,a);return b;}
function ATZ(a,b){var c;c=b.data.length;a.w2=b;a.ki=0;a.F4=0;a.qJ=0+c|0;}
function A4E(a){var b,c,d;if(a.ki>=a.qJ)b=(-1);else{c=a.w2.data;d=a.ki;a.ki=d+1|0;b=c[d]&255;}return b;}
function A_i(a,b,c,d){var e,f,g,h,i;e=CB(d,a.qJ-a.ki|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.w2.data;i=a.ki;a.ki=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function A5q(a){return a.qJ-a.ki|0;}
function IP(){HX.call(this);this.km=null;}
function Bf4(a){var b=new IP();R1(b,a);return b;}
function R1(a,b){a.km=b;}
function AKz(a){return a.km.wT();}
function Ph(){}
function PW(){IP.call(this);this.d$=null;}
function OU(a){var b=new PW();AIt(b,a);return b;}
function AIt(a,b){R1(a,b);a.d$=$rt_createByteArray(8);}
function NL(a,b){var c;c=b.data;return a.km.n$(b,0,c.length);}
function NV(a){var b,c;b=a.km.Cp();if(b>=0)return b<<24>>24;c=new FD;O(c);M(c);}
function J7(a,b){var c,d;c=0;while(c<b){d=a.km.n$(a.d$,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function APi(a){return $rt_longBitsToDouble(Td(a));}
function AAY(a){return $rt_intBitsToFloat(H3(a));}
function AMR(a,b){QL(a,b,0,b.data.length);}
function QL(a,b,c,d){var e,f;if(d<0){e=new BO;O(e);M(e);}if(!d)return;if(a.km===null){e=new EE;O(e);M(e);}if(b===null){e=new EE;O(e);M(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.km.n$(b,c,d);if(f<0){e=new FD;O(e);M(e);}c=c+f|0;d=d-f|0;}return;}e=new BO;O(e);M(e);}
function H3(a){var b;if(J7(a,4)<0){b=new FD;O(b);M(b);}return (a.d$.data[0]&255)<<24|(a.d$.data[1]&255)<<16|(a.d$.data[2]&255)<<8|a.d$.data[3]&255;}
function Td(a){var b;if(J7(a,8)<0){b=new FD;O(b);M(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.d$.data[0]&255)<<24|(a.d$.data[1]&255)<<16|(a.d$.data[2]&255)<<8|a.d$.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.d$.data[4]&255)<<24|(a.d$.data[5]&255)<<16|(a.d$.data[6]&255)<<8|a.d$.data[7]&255),new Long(4294967295, 0)));}
function XG(a){var b;if(J7(a,2)<0){b=new FD;O(b);M(b);}return ((a.d$.data[0]&255)<<24>>16|a.d$.data[1]&255)<<16>>16;}
function APC(a){var b;if(J7(a,2)<0){b=new FD;O(b);M(b);}return ((a.d$.data[0]&255)<<8|a.d$.data[1]&255)&65535;}
function GU(a){return ALx(a,APC(a));}
function ALx(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);QL(a,c,0,b);return AWY(c,d,0,b);}
function AWY(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Hs;Bl(m,B(205));M(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Hs;Bl(m,B(206));M(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Hs;Bl(m,B(206));M(m);}f=j+1|0;if(f>=e){m=new Hs;Bl(m,B(206));M(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return Lj(c,0,g);}m=new Hs;Bl(m,B(206));M(m);}
function MQ(){var a=this;D.call(a);a.wp=null;a.H0=null;}
function RV(b){var c,d;if(Iv(b))M(ALn(b));if(!APO(Y(b,0)))M(ALn(b));c=1;while(c<Bh(b)){a:{d=Y(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(APO(d))break a;else M(ALn(b));}}c=c+1|0;}}
function APO(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function X2(b){var c;if(b===null){b=new Cb;Bl(b,B(207));M(b);}RV(b);c=CP(Bf5,AOg(b));if(c!==null)return c;c=new U_;O(c);c.Iq=b;M(c);}
function AN0(a,b){var c,d,$$je;a:{try{b=AJJ(ADG(AQ0(AFu(a),Bf6),Bf6),b);}catch($$e){$$je=Bi($$e);if($$je instanceof GY){c=$$je;break a;}else{throw $$e;}}return b;}d=new WX;d.oo=1;d.rM=1;d.vv=B(208);d.jB=c;M(d);}
function ABt(a,b){return AJB(a.wp,b.wp);}
function A6u(a,b){return ABt(a,b);}
function WL(){var a=this;IP.call(a);a.g1=null;a.oh=null;a.qf=0;a.oH=0;a.Ex=0;a.Ea=0;a.wC=null;a.GU=null;}
function ASX(a){var b;if(a.qf){b=new B1;Bl(b,B(209));M(b);}return ALV(a,a.wC,0,1)==(-1)?(-1):a.wC.data[0]&255;}
function ALV(a,b,c,d){var e,f,g;if(a.qf){e=new B1;Bl(e,B(209));M(e);}if(b===null){e=new EE;O(e);M(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.oH)return (-1);f=0;AAE(a.g1,b,c,d);a:{while(!a.oH){if(!a.g1.N)ABf(a);b:{g=AF3(a.g1,0);f=f+(a.g1.pM-c|0)|0;c=a.g1.pM;switch(g){case -3:e=new B1;Bl(e,a.g1.b8);M(e);case 1:case 2:break;default:break b;}a.oH=1;if(g==2)return (-1);}if(!a.g1.ib)break a;}}return f;}e=new BO;O(e);M(e);}
function A0j(a){var b;if(!a.qf){if(!a.oH)return 1;return 0;}b=new B1;Bl(b,B(209));M(b);}
function ABf(a){var b,c;if(a.qf){b=new B1;Bl(b,B(209));M(b);}a:{c=a.km.n$(a.oh,0,a.oh.data.length);if(c==(-1)){if(a.g1.jv.dZ)break a;if(Ye(a.g1))break a;a.oh.data[0]=0;c=1;}AJ7(a.g1,a.oh,0,c,1);return;}if(Long_ne(a.g1.jv.rO,Long_fromInt(-1))){b=new B1;Bl(b,B(210));M(b);}b=new FD;Bl(b,B(211));M(b);}
function M5(){var a=this;D.call(a);a.h8=null;a.jr=0;a.nj=Long_ZERO;}
function I8(a,b){var c,d;c=a.h8.data;d=a.jr;a.jr=d+1|0;c[d]=b;if(a.jr==a.h8.data.length){S1(a,a.h8,0);a.jr=0;}a.nj=Long_add(a.nj,Long_fromInt(1));}
function ADQ(a,b,c,d){a:{while(a.jr){if(d<=0)break a;I8(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.h8.data.length){S1(a,b,c);c=c+a.h8.data.length|0;d=d-a.h8.data.length|0;a.nj=Long_add(a.nj,Long_fromInt(a.h8.data.length));}while(d>0){I8(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function APg(a){var b;b=Long_shl(a.nj,3);I8(a,(-128));while(a.jr){I8(a,0);}AKY(a,b);MA(a);}
function ADq(){var a=this;M5.call(a);a.pw=0;a.px=0;a.py=0;a.pz=0;a.pA=0;a.ei=null;a.mQ=0;}
function BaV(){var a=new ADq();A$g(a);return a;}
function A$g(a){a.h8=$rt_createByteArray(4);a.jr=0;a.ei=$rt_createIntArray(80);OF(a);}
function S1(a,b,c){var d,e;d=b.data;b=a.ei.data;e=a.mQ;a.mQ=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.mQ==16)MA(a);}
function HI(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AKY(a,b){if(a.mQ>14)MA(a);a.ei.data[14]=b.hi;a.ei.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AL7(a,b,c){APg(a);HI(a,a.pw,b,c);HI(a,a.px,b,c+4|0);HI(a,a.py,b,c+8|0);HI(a,a.pz,b,c+12|0);HI(a,a.pA,b,c+16|0);OF(a);return 20;}
function OF(a){var b;a.nj=Long_ZERO;a.jr=0;b=0;while(b<a.h8.data.length){a.h8.data[b]=0;b=b+1|0;}a.pw=1732584193;a.px=(-271733879);a.py=(-1732584194);a.pz=271733878;a.pA=(-1009589776);a.mQ=0;b=0;while(b!=a.ei.data.length){a.ei.data[b]=0;b=b+1|0;}}
function Vb(a,b,c,d){return b^c^d;}
function Fg(a,b,c){return b<<c|b>>>(32-c|0);}
function MA(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.ei.data[b]=Fg(a,a.ei.data[b-3|0]^a.ei.data[b-8|0]^a.ei.data[b-14|0]^a.ei.data[b-16|0],1);b=b+1|0;}c=a.pw;d=a.px;e=a.py;f=a.pz;g=a.pA;h=0;while(h<=19){i=(((Fg(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.ei.data[h]|0)+1518500249|0;b=Fg(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Fg(a,c,5)+Vb(a,d,e,f)|0)+g|0)+a.ei.data[j]|0)+1859775393|0;b=Fg(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Fg(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.ei.data[h]|0)
+(-1894007588)|0;b=Fg(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Fg(a,c,5)+Vb(a,d,e,f)|0)+g|0)+a.ei.data[j]|0)+(-899497514)|0;b=Fg(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.pw=a.pw+c|0;a.px=a.px+d|0;a.py=a.py+e|0;a.pz=a.pz+f|0;a.pA=a.pA+g|0;a.mQ=0;b=0;while(b!=a.ei.data.length){a.ei.data[b]=0;b=b+1|0;}}
function AI_(){D.call(this);}
function Bf7(){var a=new AI_();A55(a);return a;}
function A55(a){return;}
function O2(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Oc(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Nm(b,c){var d,e,f,g;d=b.data;e=AEF(Kw(Dl(b)),c);f=CB(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function MW(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new Cb;O(f);M(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZB(b,c,d,e){var f,g;if(c>d){e=new Cb;O(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function PU(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=J(D,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=CB(j,h+f|0);l=h+(2*f|0)|0;m=CB(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qc(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AOq(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new Cb;O(f);M(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function I7(){var a=this;D.call(a);a.C9=0;a.B1=null;a.xe=null;}
function Bf8(a,b,c){var d=new I7();RD(d,a,b,c);return d;}
function RD(a,b,c,d){a.C9=b;a.B1=c;a.xe=d;}
function ABx(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Yp(b,a.B1)<a.C9){c=0;d=null;if(c<10){e=1;f=b.bi;$p=1;continue _;}}return;case 1:AOv(a,b,e,f,d);if(C()){break _;}c=c+1|0;if(c>=10)return;e=1;f=b.bi;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A5a(a,b,c,d){return CO((c+E(b.r,256)|0)-128|0,E(b.r,128),(d+E(b.r,256)|0)-128|0);}
function AOv(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=K(d.d);h=K(d.e);i=E(b.r,a.xe.data.length);j=a.Ak(b,g,h);k=j.eD;l=j.eY;m=j.eE;$p=1;case 1:$z
=AAz(b,k,l,m);if(C()){break _;}c=$z;if(c)return 0;$p=2;case 2:$z=ABX(b,k,l,m);if(C()){break _;}e=$z;if(e!==Bf9)return 0;n=0;while(n<3){o=6;p=0;h=k;q=l;r=m;if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;}return f;case 3:$z=AAz(b,h,c,r);if(C()){break _;}c=$z;if(c){$p=4;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;continue _;}n=n+1|0;if(n>=3)break;o
=6;p=0;h=k;q=l;r=m;}return f;case 4:$z=AAz(b,h,q,r);if(C()){break _;}c=$z;if(!c){$p=5;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 5:$z=ABX(b,h,q,r);if(C()){break _;}e=$z;if(!e.nA()){c=q+1|0;$p=6;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|
0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 6:a:{$z=AAz(b,h,c,r);if(C()){break _;}c=$z;if(!c){b:{s=h+0.5;t=q+1.0;u=r+0.5;if(d===null){v=s-b.fi;w=t-b.pW;x=u-b.fh;if(v*v+w*w+x*x>=1024.0)break b;break a;}y=s-d.d;z=t-d.j;ba=u-d.e;if(y*y+z*z+ba*ba<1024.0)break a;}c:{try{e=a.xe.data[i];bb=J(FO,1);bb.data[0]=F(GG);e=Wx(e,bb);bb=J(D,1);bb.data[0]=b;bc=WA(e,bb);break c;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else{throw $$e;}}return f;}y=s;z=t;ba=u;Ks(bc,y,z,ba,N(b.r)*360.0,0.0);$p=7;continue _;}}p=p+
1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 7:$z=bc.uO(y,z,ba);if(C()){break _;}c=$z;if(c){f=f+1|0;$p=8;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 8:AOf(b,bc);if(C()){break _;}p=p+1|0;while(true){if(p<3)
{h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$p);}
function UT(){I7.call(this);this.Gt=null;}
function A1V(a,b,c,d){return CO((c+E(b.r,256)|0)-128|0,E(b.r,E(b.r,E(b.r,112)+8|0)+8|0),(d+E(b.r,256)|0)-128|0);}
function C5(){var a=this;D.call(a);a.mz=0;a.bI=null;a.bD=null;a.m=null;a.bT=0.0;a.cR=0.0;a.bS=0.0;a.d=0.0;a.j=0.0;a.e=0.0;a.g=0.0;a.i=0.0;a.h=0.0;a.v=0.0;a.J=0.0;a.P=0.0;a.T=0.0;a.L=null;a.cx=0;a.jU=0;a.x3=0;a.lf=0;a.cQ=0;a.c3=0.0;a.c0=0.0;a.eM=0.0;a.tU=0.0;a.g_=0.0;a.i7=0;a.fG=0.0;a.rc=0;a.cr=0.0;a.b7=0.0;a.cs=0.0;a.ej=0.0;a.rn=0.0;a.o3=0;a.n3=0.0;a.I0=0;a.n=null;a.oP=0;a.nF=0;a.cU=0;a.n4=0;a.tk=0;a.dx=0;a.gb=0;a.oy=0;a.tG=null;a.g4=0.0;a.gV=0.0;}
function Bf$(a){var b=new C5();Fz(b,a);return b;}
function Fz(a,b){a.mz=0;a.L=No(0.0,0.0,0.0,0.0,0.0,0.0);a.cx=0;a.jU=0;a.x3=0;a.lf=1;a.cQ=0;a.c3=0.0;a.c0=0.6000000238418579;a.eM=1.7999999523162842;a.tU=0.0;a.g_=0.0;a.i7=1;a.fG=0.0;a.rc=1;a.ej=0.0;a.rn=0.0;a.o3=0;a.n3=0.0;a.I0=0;a.n=new Dz;a.oP=0;a.nF=1;a.cU=0;a.n4=300;a.tk=0;a.dx=0;a.gb=300;a.oy=1;a.m=b;CT(a,0.0,0.0,0.0);}
function Ca(a){a.cQ=1;}
function D1(a,b,c){a.c0=b;a.eM=c;}
function WN(a,b,c){a.v=b;a.J=c;}
function CT(a,b,c,d){var e,f,g,h,i,j;a.d=b;a.j=c;a.e=d;e=a.c0/2.0;f=a.eM/2.0;g=a.L;h=e;i=b-h;j=f;M1(g,i,c-j,d-h,b+h,c+j,d+h);}
function AI7(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.I_();if(C()){break _;}return;default:E_();}}C3().s(a,$p);}
function AES(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bD!==null&&a.bD.cQ)a.bD=null;a.oP=a.oP+1|0;a.tU=a.g_;a.bT=a.d;a.cR=a.j;a.bS=a.e;a.T=a.J;a.P=a.v;$p=1;case 1:$z=a.HF();if(C()){break _;}b=$z;if(!b)a.tk=0;else{a:{if(!a.tk&&!a.oy){c=Ce(a.g*a.g*0.20000000298023224+a.i*a.i+a.h*a.h*0.20000000298023224)*0.20000000298023224;if(c>1.0)c=1.0;Dh(a.m,a,B(212),c,1.0+(N(a.n)-N(a.n))*0.4000000059604645);d
=K(a.L.M);b=0;e=d+1.0;while(b<1.0+a.c0*20.0){f=(N(a.n)*2.0-1.0)*a.c0;g=(N(a.n)*2.0-1.0)*a.c0;BV(a.m,B(213),a.d+f,e,a.e+g,a.g,a.i-N(a.n)*0.20000000298023224,a.h);b=b+1|0;}b=0;while(true){if(b>=1.0+a.c0*20.0)break a;f=(N(a.n)*2.0-1.0)*a.c0;g=(N(a.n)*2.0-1.0)*a.c0;BV(a.m,B(214),a.d+f,e,a.e+g,a.g,a.i,a.h);b=b+1|0;}}}a.fG=0.0;a.tk=1;a.cU=0;}if(a.cU>0){if(!(a.cU%20|0)){h=null;b=1;$p=4;continue _;}a.cU=a.cU-1|0;}$p=2;case 2:$z=ACk(a);if(C()){break _;}b=$z;if(b){h=null;b=10;$p=3;continue _;}if(a.j>=(-64.0)){a.oy=0;return;}$p
=5;continue _;case 3:a.fq(h,b);if(C()){break _;}a.cU=600;if(a.j>=(-64.0)){a.oy=0;return;}$p=5;continue _;case 4:a.fq(h,b);if(C()){break _;}a.cU=a.cU-1|0;$p=2;continue _;case 5:a.DM();if(C()){break _;}a.oy=0;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function XX(a){Ca(a);}
function AHd(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=T8(a.L,b,c,d);f=a.m;$p=1;case 1:$z=XQ(f,a,e);if(C()){break _;}f=$z;if(f.p>0)return 0;f=a.m;$p=2;case 2:$z=AJh(f,e);if(C()){break _;}g=$z;return g?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ARC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.o3){FX(a.L,b,c,d);a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c3-a.ej;a.e=(a.L.S+a.L.W)/2.0;return;}e=a.d;f=a.e;g=P_(a.L);h=a.m;i=Ja(a.L,b,c,d);$p=1;case 1:$z
=XQ(h,a,i);if(C()){break _;}j=$z;k=0;l=c;while(k<De(j)){l=V6(Z(j,k),a.L,l);k=k+1|0;}FX(a.L,0.0,l,0.0);if(a.lf){m=d;n=b;}else if(c===l){m=d;n=b;}else{n=0.0;m=n;l=n;}a:{b:{if(!a.cx){if(c===l)break b;if(c>=0.0)break b;}o=1;break a;}o=0;}p=0;while(p<De(j)){n=Qq(Z(j,p),a.L,n);p=p+1|0;}FX(a.L,n,0.0,0.0);if(!a.lf&&b!==n){n=0.0;m=n;l=n;}k=0;while(k<De(j)){m=T_(Z(j,k),a.L,m);k=k+1|0;}FX(a.L,0.0,0.0,m);if(!a.lf&&d!==m){n=0.0;m=n;l=n;}c:{if(a.rn<=0.0){q=n;r=l;s=m;}else if(!o){q=n;r=l;s=m;}else if(a.ej>=0.05000000074505806)
{q=n;r=l;s=m;}else{if(b!==n)break c;if(d!==m)break c;q=n;r=l;s=m;}a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c3-a.ej;a.e=(a.L.S+a.L.W)/2.0;t=R(b,q);a.jU=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.x3=!a.jU&&!k?0:1;if(!a.cx){if(r<0.0)a.fG=a.fG-r;}else if(a.fG>0.0){u=a.fG;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.g_=a.g_+Ce(l*l+m*m)*0.6;if(!a.i7){a.ej=a.ej*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c3);x=K(a.e);i=a.m;$p=6;continue _;}r=a.rn;i=P_(a.L);Xa(a.L,
g);h=a.m;g=Ja(a.L,b,r,d);$p=2;case 2:$z=XQ(h,a,g);if(C()){break _;}h=$z;y=0;while(y<De(h)){r=V6(Z(h,y),a.L,r);y=y+1|0;}FX(a.L,0.0,r,0.0);if(a.lf){s=d;q=b;}else if(c===r){s=d;q=b;}else{q=0.0;s=q;r=q;}k=0;while(k<De(h)){q=Qq(Z(h,k),a.L,q);k=k+1|0;}FX(a.L,q,0.0,0.0);if(!a.lf&&b!==q){q=0.0;s=q;r=q;}t=0;while(t<De(h)){s=T_(Z(h,t),a.L,s);t=t+1|0;}FX(a.L,0.0,0.0,s);if(!a.lf&&d!==s){q=0.0;s=q;r=q;}if(n*n+m*m>=q*q+s*s){Xa(a.L,i);q=n;r=l;s=m;}else a.ej=a.ej+0.5;a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c3-a.ej;a.e=(a.L.S+a.L.W)
/2.0;t=R(b,q);a.jU=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.x3=!a.jU&&!k?0:1;if(!a.cx){if(r<0.0)a.fG=a.fG-r;}else if(a.fG>0.0){u=a.fG;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.g_=a.g_+Ce(l*l+m*m)*0.6;if(!a.i7){a.ej=a.ej*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c3);x=K(a.e);i=a.m;$p=6;continue _;case 3:a.DA(u);if(C()){break _;}a.fG=0.0;if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.g_=a.g_+Ce(l*l+m*m)*0.6;if(!a.i7){a.ej=a.ej
*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c3);x=K(a.e);i=a.m;$p=6;continue _;case 4:$z=a.HF();if(C()){break _;}t=$z;i=a.m;h=a.L;$p=5;case 5:$z=AQ9(i,h);if(C()){break _;}k=$z;if(!k){if(a.cU<=0)a.cU= -a.nF;if(t&&a.cU>0){Dh(a.m,a,B(215),0.699999988079071,1.600000023841858+(N(a.n)-N(a.n))*0.4000000059604645);a.cU= -a.nF;}return;}k=1;$p=7;continue _;case 6:$z=ACt(i,v,w,x);if(C()){break _;}y=$z;if(a.g_>a.rc&&y>0){a.rc=a.rc+1|0;L();h=BeN.data[y].gI;if(!BeN.data[y].b$.nA())Dh(a.m,a,
Kf(h),AMK(h)*0.15000000596046448,Yc(h));i=BeN.data[y];h=a.m;$p=8;continue _;}a.ej=a.ej*0.4000000059604645;$p=4;continue _;case 7:a.FR(k);if(C()){break _;}if(!t){a.cU=a.cU+1|0;if(!a.cU)a.cU=300;}if(t&&a.cU>0){Dh(a.m,a,B(215),0.699999988079071,1.600000023841858+(N(a.n)-N(a.n))*0.4000000059604645);a.cU= -a.nF;}return;case 8:i.oG(h,v,w,x,a);if(C()){break _;}a.ej=a.ej*0.4000000059604645;$p=4;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function A1J(a){return null;}
function AJ3(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:a.fq(c,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function Zg(a,b){return;}
function AE5(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.m;c=Dv(a.L,0.0,(-0.4000000059604645),0.0);d=BfO;$p=1;case 1:$z=AAq(b,c,d,a);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AGF(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j+a.rF();d=K(a.d);e=K3(K(c));f=K(a.e);g=a.m;$p=1;case 1:$z=ACt(g,d,e,f);if(C()){break _;}h=$z;if(h){L();if(BeN.data[h].b$===b){b=a.m;$p=2;continue _;}}return 0;case 2:$z=AEH(b,d,e,f);if(C()){break _;}d=$z;return c>=(e+1|0)-(Js(d)-0.1111111119389534)?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ACk(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.m;c=Dv(a.L,0.0,(-0.4000000059604645),0.0);d=BfP;$p=1;case 1:$z=AOr(b,c,d);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function L2(a,b,c,d){var e,f,g;e=D_(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;c=c*d;f=Bq(a.v*3.1415927410125732/180.0);g=BC(a.v*3.1415927410125732/180.0);a.g=a.g+b*g-c*f;a.h=a.h+c*g+b*f;}}
function ADF(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(a.d);d=(a.L.U-a.L.M)*0.66;e=K(a.j-a.c3+d);f=K(a.e);g=a.m;$p=1;case 1:$z=ANf(g,c,e,f);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AUy(a,b){a.m=b;}
function Ks(a,b,c,d,e,f){a.d=b;a.bT=b;b=c+a.c3;a.j=b;a.cR=b;a.e=d;a.bS=d;a.v=e;a.J=f;CT(a,a.d,a.j,a.e);}
function AR1(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return D_(c*c+d*d+e*e);}
function AGK(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return e*e+f*f+g*g;}
function Sf(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return Ce(e*e+f*f+g*g);}
function LC(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return c*c+d*d+e*e;}
function A6R(a,b){return;}
function A5B(a,b){var c,d,e,f,g;c=b.d-a.d;d=b.e-a.e;e=c<0.0? -c:c;f=d<0.0? -d:d;if(e>f)f=e;if(f>=0.009999999776482582){e=Ce(f);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;e=f*g;c=c*0.05000000074505806;e=e*0.05000000074505806;c=c*(1.0-a.n3);e=e*(1.0-a.n3);Hn(a, -c,0.0, -e);Hn(b,c,0.0,e);}}
function Hn(a,b,c,d){a.g=a.g+b;a.i=a.i+c;a.h=a.h+d;}
function AJF(a,b,c){return 0;}
function A9J(a){return 0;}
function A7U(a){return 0;}
function A_h(a,b,c){return;}
function R_(a,b){var c,d,e;c=a.d-b.x;d=a.j-b.z;e=a.e-b.w;return AHc(a,c*c+d*d+e*e);}
function AHc(a,b){var c;c=APT(a.L)*64.0;return b>=c*c?0:1;}
function ALs(a,b){var c,d;c=$rt_createDoubleArray(3);d=c.data;d[0]=a.d;d[1]=a.j;d[2]=a.e;HC(b,B(216),V4(a,c));c=$rt_createDoubleArray(3);d=c.data;d[0]=a.g;d[1]=a.i;d[2]=a.h;HC(b,B(217),V4(a,c));c=$rt_createFloatArray(2);d=c.data;d[0]=a.v;d[1]=a.J;HC(b,B(218),AMx(a,c));AR4(b,B(219),a.fG);Fq(b,B(220),a.cU<<16>>16);Fq(b,B(221),a.gb<<16>>16);SU(b,B(222),a.cx);ABL(a,b);}
function YP(a,b){var c,d,e,f,g;c=Kg(b,B(216));d=Kg(b,B(217));e=Kg(b,B(218));CT(a,0.0,0.0,0.0);a.g=Fd(d,0).iH;a.i=Fd(d,1).iH;a.h=Fd(d,2).iH;f=Fd(c,0).iH;a.d=f;a.cr=f;a.bT=f;f=Fd(c,1).iH;a.j=f;a.b7=f;a.cR=f;f=Fd(c,2).iH;a.e=f;a.cs=f;a.bS=f;g=Fd(e,0).ni;a.v=g;a.P=g;g=Fd(e,1).ni;a.J=g;a.T=g;a.fG=AMD(b,B(219));a.cU=FH(b,B(220));a.gb=FH(b,B(221));a.cx=Um(b,B(222));CT(a,a.d,a.j,a.e);AOU(a,b);}
function V4(a,b){var c,d,e,f,g;b=b.data;c=L8();d=b.length;e=0;while(e<d){f=b[e];g=new Mm;Cw(g);g.iH=f;Jn(c,g);e=e+1|0;}return c;}
function AMx(a,b){var c,d,e;b=b.data;c=L8();d=b.length;e=0;while(e<d){Jn(c,A6P(b[e]));e=e+1|0;}return c;}
function ABQ(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0.0;$p=1;case 1:$z=AGE(a,b,c,d);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AGE(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Hb(a.m,a.d,a.j+d,a.e,Ky(b,c));e.g$=10;f=a.m;$p=1;case 1:AOf(f,e);if(C()){break _;}return e;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AHx(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.j+a.rF());d=K(a.e);e=a.m;$p=1;case 1:$z=AAz(e,b,c,d);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AWG(a,b){return 0;}
function AWX(a,b){return null;}
function AFb(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bD.cQ){a.bD=null;return;}a.g=0.0;a.i=0.0;a.h=0.0;$p=1;case 1:a.en();if(C()){break _;}CT(a,a.bD.d,a.bD.j+a.c3+a.bD.z_(),a.bD.e);a.gV=a.gV+a.bD.v-a.bD.P;a.g4=a.g4+a.bD.J-a.bD.T;while(a.gV>=180.0){a.gV=a.gV-360.0;}while(a.gV<(-180.0)){a.gV=a.gV+360.0;}while(a.g4>=180.0){a.g4=a.g4-360.0;}while(a.g4<(-180.0)){a.g4=a.g4+360.0;}b=a.gV*0.5;c=a.g4*0.5;d=10.0;if(b>d)b
=d;e=(-10.0);if(b<e)b=e;if(c<=d)d=c;if(d>=e)e=d;a.gV=a.gV-b;a.g4=a.g4-e;a.v=a.v+b;a.J=a.J+e;return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function A9N(a){return a.eM*0.75;}
function Pe(a,b){a.g4=0.0;a.gV=0.0;if(a.bD===b){a.bD.bI=null;a.bD=null;}else{if(a.bD!==null)a.bD.bI=null;if(b.bI!==null)b.bI.bD=null;a.bD=b;b.bI=a;}}
function Xh(a,b,c){var d,e;d=a.J;e=a.v;a.v=a.v+b*0.15;a.J=a.J-c*0.15;if(a.J<(-90.0))a.J=(-90.0);if(a.J>90.0)a.J=90.0;a.T=a.T+a.J-d;a.P=a.P+a.v-e;}
function EQ(){var a=this;C5.call(a);a.oY=0;a.JE=0.0;a.G0=0.0;a.Il=0.0;a.dF=0.0;a.e7=0.0;a.zX=0.0;a.ne=0.0;a.jZ=0.0;a.ma=0.0;a.G2=0;a.yo=null;a.G1=0;a.D0=0.0;a.EX=null;a.Jr=0.0;a.uW=0;a.Js=0.0;a.bU=0;a.tC=0;a.uU=0;a.dD=0;a.EJ=0;a.kD=0.0;a.c1=0;a.dy=0;a.kU=0.0;a.jk=0.0;a.Ch=0;a.Fc=0;a.Jx=0.0;a.jQ=0.0;a.cg=0.0;a.gn=0.0;a.hj=0;a.iJ=0.0;a.gC=0.0;a.kE=0.0;a.hF=0;a.zO=0.0;a.sW=0.0;}
function PI(a){return a.yo;}
function AXq(a){return a.cQ?0:1;}
function A1N(a){return a.cQ?0:1;}
function AQn(a){return a.eM*0.8500000238418579;}
function ANn(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AES(a);if(C()){break _;}b=E(a.n,1000);c=a.uU;a.uU=c+1|0;if(b<c){a.uU=(-80);d=a.wx();if(d!==null)Dh(a.m,a,d,1.0,(N(a.n)-N(a.n))*0.20000000298023224+1.0);}if(H2(a)){$p=2;continue _;}if(H2(a)){d=BfO;$p=3;continue _;}a.gb=a.n4;a.kU=a.jk;if(a.dy>0)a.dy=a.dy-1|0;if(a.dD>0)a.dD=a.dD-1|0;if(a.dx
>0)a.dx=a.dx-1|0;if(a.bU<=0){a.c1=a.c1+1|0;if(a.c1>20){$p=6;continue _;}}a.ma=a.jZ;a.e7=a.dF;a.P=a.v;a.T=a.J;return;case 2:$z=AHx(a);if(C()){break _;}e=$z;if(e){d=null;e=1;$p=4;continue _;}if(H2(a)){d=BfO;$p=3;continue _;}a.gb=a.n4;a.kU=a.jk;if(a.dy>0)a.dy=a.dy-1|0;if(a.dD>0)a.dD=a.dD-1|0;if(a.dx>0)a.dx=a.dx-1|0;if(a.bU<=0){a.c1=a.c1+1|0;if(a.c1>20){$p=6;continue _;}}a.ma=a.jZ;a.e7=a.dF;a.P=a.v;a.T=a.J;return;case 3:$z=AGF(a,d);if(C()){break _;}e=$z;if(!e)a.gb=a.n4;else{a.gb=a.gb-1|0;if(a.gb==(-20)){a.gb=0;e
=0;while(e<8){f=N(a.n)-N(a.n);g=N(a.n)-N(a.n);h=N(a.n)-N(a.n);BV(a.m,B(213),a.d+f,a.j+g,a.e+h,a.g,a.i,a.h);e=e+1|0;}d=null;e=2;$p=5;continue _;}a.cU=0;}a.kU=a.jk;if(a.dy>0)a.dy=a.dy-1|0;if(a.dD>0)a.dD=a.dD-1|0;if(a.dx>0)a.dx=a.dx-1|0;if(a.bU<=0){a.c1=a.c1+1|0;if(a.c1>20){$p=6;continue _;}}a.ma=a.jZ;a.e7=a.dF;a.P=a.v;a.T=a.J;return;case 4:a.fq(d,e);if(C()){break _;}if(H2(a)){d=BfO;$p=3;continue _;}a.gb=a.n4;a.kU=a.jk;if(a.dy>0)a.dy=a.dy-1|0;if(a.dD>0)a.dD=a.dD-1|0;if(a.dx>0)a.dx=a.dx-1|0;if(a.bU<=0){a.c1=a.c1
+1|0;if(a.c1>20){$p=6;continue _;}}a.ma=a.jZ;a.e7=a.dF;a.P=a.v;a.T=a.J;return;case 5:a.fq(d,e);if(C()){break _;}a.cU=0;a.kU=a.jk;if(a.dy>0)a.dy=a.dy-1|0;if(a.dD>0)a.dD=a.dD-1|0;if(a.dx>0)a.dx=a.dx-1|0;if(a.bU<=0){a.c1=a.c1+1|0;if(a.c1>20){$p=6;continue _;}}a.ma=a.jZ;a.e7=a.dF;a.P=a.v;a.T=a.J;return;case 6:Ca(a);if(C()){break _;}e=0;while(e<20){i=CY(a.n)*0.02;j=CY(a.n)*0.02;k=CY(a.n)*0.02;BV(a.m,B(223),a.d+N(a.n)*a.c0*2.0-a.c0,a.j+N(a.n)*a.eM,a.e+N(a.n)*a.c0*2.0-a.c0,i,j,k);e=e+1|0;}a.ma=a.jZ;a.e7=a.dF;a.P=a.v;a.T
=a.J;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AEP(a){var b,c,d,e;b=0;while(b<20){c=CY(a.n)*0.02;d=CY(a.n)*0.02;e=CY(a.n)*0.02;BV(a.m,B(223),a.d+N(a.n)*a.c0*2.0-a.c0-c*10.0,a.j+N(a.n)*a.eM-d*10.0,a.e+N(a.n)*a.c0*2.0-a.c0-e*10.0,c,d,e);b=b+1|0;}}
function AKR(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFb(a);if(C()){break _;}a.zX=a.ne;a.ne=0.0;return;default:E_();}}C3().s(a,$p);}
function AMq(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.I_();if(C()){break _;}$p=2;case 2:a.op();if(C()){break _;}b=a.d-a.bT;c=a.e-a.bS;d=Ce(b*b+c*c);e=a.dF;f=0.0;a.zX=a.ne;g=0.0;if(d>0.05000000074505806){g=1.0;f=d*3.0;e=CR(c,b)*180.0/3.1415927410125732-90.0;}if(!a.cx)g=0.0;a.ne=a.ne+(g-a.ne)*0.30000001192092896;h=e-a.dF;while(h<(-180.0)){h=h+360.0;}while
(h>=180.0){h=h-360.0;}a.dF=a.dF+h*0.10000000149011612;i=a.v-a.dF;while(i<(-180.0)){i=i+360.0;}while(i>=180.0){i=i-360.0;}j=i>=(-90.0)&&i<90.0?0:1;if(i<(-75.0))i=(-75.0);if(i>=75.0)i=75.0;a.dF=a.v-i;a.dF=a.dF+i*0.10000000149011612;if(j)f=f*(-1.0);while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}while(a.dF-a.e7<(-180.0)){a.e7=a.e7-360.0;}while(a.dF-a.e7>=180.0){a.e7=a.e7+360.0;}while(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}a.jZ=a.jZ+f;return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function A1d(a,b,c){D1(a,b,c);}
function UK(a,b){if(a.bU>0){a.bU=a.bU+b|0;if(a.bU>20)a.bU=20;a.dx=a.oY/2|0;}}
function ABZ(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hj=0;if(a.bU<=0)return 0;a.cg=1.5;if(a.dx<=a.oY/2.0){a.tC=a.bU;a.dx=a.oY;a.bU=a.bU-c|0;a.EJ=10;a.dD=10;}else{if((a.tC-c|0)>=a.bU)return 0;a.bU=a.tC-c|0;}a.kD=0.0;if(b===null)a.kD=(BP()*2.0|0)*180|0;else{d=b.d-a.d;e=b.e-a.e;while(d*d+e*e<1.0E-4){d=(BP()-BP())*0.01;e=(BP()-BP())*0.01;}a.kD=CR(e,d)*180.0/3.1415927410125732-a.v;ABv(a,b,c,d,e);}if(a.bU>0){Dh(a.m,a,
a.u9(),1.0,(N(a.n)-N(a.n))*0.20000000298023224+1.0);return 1;}Dh(a.m,a,a.uI(),1.0,(N(a.n)-N(a.n))*0.20000000298023224+1.0);$p=1;case 1:a.Fu(b);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,$p);}
function A8q(a){return null;}
function AUw(a){return B(224);}
function AVr(a){return B(224);}
function ABv(a,b,c,d,e){var f,g,h;f=Ce(d*d+e*e);a.g=a.g/2.0;a.i=a.i/2.0;a.h=a.h/2.0;g=a.g;h=f;a.g=g-d/h*0.4000000059604645;a.i=a.i+0.4000000059604645;a.h=a.h-e/h*0.4000000059604645;if(a.i>0.4000000059604645)a.i=0.4000000059604645;}
function AN2(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.uW>0&&b!==null)b.Bx(a,a.uW);a.Ch=1;c=a.mf();if(c>0){d=E(a.n,3);e=0;if(e<d){f=1;$p=1;continue _;}}return;case 1:ABQ(a,c,f);if(C()){break _;}e=e+1|0;if(e>=d)return;f=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ATA(a){return 0;}
function AP5(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Uo(b-3.0)|0;if(c<=0)return;d=null;$p=1;case 1:a.fq(d,c);if(C()){break _;}d=a.m;c=K(a.d);e=K(a.j-0.20000000298023224-a.c3);f=K(a.e);$p=2;case 2:$z=ACt(d,c,e,f);if(C()){break _;}e=$z;if(e>0){L();d=BeN.data[e].gI;Dh(a.m,a,Kf(d),d.oO*0.5,d.pL*0.75);}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ADs(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE5(a);if(C()){break _;}d=$z;if(!d){$p=2;continue _;}e=a.j;L2(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=3;continue _;case 2:$z=ACk(a);if(C()){break _;}d=$z;if(d){e=a.j;L2(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=4;continue _;}L2(a,b,c,!a.cx?0.019999999552965164:0.10000000149011612);$p=7;continue _;case 3:ARC(a,
f,g,h);if(C()){break _;}a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=a.i-0.02;if(!a.jU){a.jQ=a.cg;e=a.d-a.bT;f=a.e-a.bS;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=5;continue _;case 4:ARC(a,f,g,h);if(C()){break _;}a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;a.i=a.i-0.02;if(!a.jU){a.jQ=a.cg;e=a.d-a.bT;f=a.e-a.bS;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn
=a.gn+a.cg;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=6;continue _;case 5:$z=AHd(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jQ=a.cg;e=a.d-a.bT;f=a.e-a.bS;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;case 6:$z=AHd(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jQ=a.cg;e=a.d-a.bT;f=a.e-a.bS;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;case 7:$z=AIf(a);if(C()){break _;}d=
$z;if(d){a.fG=0.0;if(a.i<(-0.15))a.i=(-0.15);}e=a.g;f=a.i;g=a.h;$p=8;case 8:ARC(a,e,f,g);if(C()){break _;}if(!a.jU){a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jQ=a.cg;e=a.d-a.bT;f=a.e-a.bS;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;}$p=9;case 9:$z=AIf(a);if(C()){break _;}d=$z;if(d)a.i=0.2;a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h
=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jQ=a.cg;e=a.d-a.bT;f=a.e-a.bS;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AIf(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.L.M);d=K(a.e);e=a.m;$p=1;case 1:$z=ACt(e,b,c,d);if(C()){break _;}f=$z;L();if(f==Bf_.b)return 1;e=a.m;c=c+1|0;$p=2;case 2:$z=ACt(e,b,c,d);if(C()){break _;}b=$z;return b==Bf_.b?1:0;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function H2(a){return !a.cQ&&a.bU>0?1:0;}
function ACm(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hj=a.hj+1|0;b=a.m.bi;if(b!==null){c=b.d-a.d;d=b.j-a.j;e=b.e-a.e;f=c*c+d*d+e*e;if(f>16384.0){$p=2;continue _;}if(a.hj>600&&!E(a.n,800)){if(f>=1024.0){$p=7;continue _;}a.hj=0;}}if(a.bU>0){$p=1;continue _;}a.hF=0;a.iJ=0.0;a.gC=0.0;a.kE=0.0;$p=3;continue _;case 1:a.wH();if(C())
{break _;}$p=3;continue _;case 2:Ca(a);if(C()){break _;}if(a.hj>600&&!E(a.n,800)){if(f>=1024.0){$p=7;continue _;}a.hj=0;}if(a.bU>0){$p=1;continue _;}a.hF=0;a.iJ=0.0;a.gC=0.0;a.kE=0.0;$p=3;case 3:$z=AE5(a);if(C()){break _;}g=$z;$p=4;case 4:$z=ACk(a);if(C()){break _;}h=$z;if(a.hF){if(g)a.i=a.i+0.03999999910593033;else if(h)a.i=a.i+0.03999999910593033;else if(a.cx)AF6(a);}a.iJ=a.iJ*0.9800000190734863;a.gC=a.gC*0.9800000190734863;a.kE=a.kE*0.8999999761581421;i=a.iJ;j=a.gC;$p=5;case 5:ADs(a,i,j);if(C()){break _;}k
=a.m;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADI(k,a,l);if(C()){break _;}k=$z;if(k!==null&&k.p>0){m=0;while(true){if(m>=k.p)break a;l=Z(k,m);if(l.rN())l.uV(a);m=m+1|0;}}}return;case 7:Ca(a);if(C()){break _;}if(a.bU>0){$p=1;continue _;}a.hF=0;a.iJ=0.0;a.gC=0.0;a.kE=0.0;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AF6(a){a.i=0.41999998688697815;}
function AQM(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(N(a.n)<0.07000000029802322){a.iJ=(N(a.n)-0.5)*a.sW;a.gC=N(a.n)*a.sW;}a.hF=N(a.n)>=0.009999999776482582?0:1;if(N(a.n)<0.03999999910593033)a.kE=(N(a.n)-0.5)*60.0;a.v=a.v+a.kE;a.J=a.zO;$p=1;case 1:$z=AE5(a);if(C()){break _;}b=$z;$p=2;case 2:$z=ACk(a);if(C()){break _;}c=$z;if(!(!b&&!c))a.hF=N(a.n)>=0.800000011920929?0:1;return;default:E_();}}C3().s(a,b,c,$p);}
function A4J(a){return;}
function Zq(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CT(a,b,c+a.eM/2.0,d);e=a.m;f=a.L;$p=1;case 1:$z=AM4(e,f);if(C()){break _;}g=$z;if(!g)return 0;e=a.m;f=a.L;$p=2;case 2:$z=XQ(e,a,f);if(C()){break _;}e=$z;if(e.p)return 0;e=a.m;f=a.L;$p=3;case 3:$z=AJh(e,f);if(C()){break _;}g=$z;return g?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABF(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=null;c=4;$p=1;case 1:a.fq(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function IR(){var a=this;EQ.call(a);a.dQ=null;a.dd=null;a.hk=0;}
function AKe(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.m;d=BY(a.d,a.j+AQn(a),a.e);b=BY(b.d,b.j+b.rF(),b.e);$p=1;case 1:$z=AJj(c,d,b);if(C()){break _;}b=$z;return b!==null?0:1;default:E_();}}C3().s(a,b,c,d,$p);}
function APK(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hk=0;b=16.0;if(a.dd===null){$p=1;continue _;}if(H2(a.dd)){c=AR1(a.dd,a);d=a.dd;$p=2;continue _;}a.dd=null;a:{if(!a.hk&&a.dd!==null){if(a.dQ===null)break a;if
(!E(a.n,20))break a;}if(!(a.dQ!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 1:$z=a.xY();if(C()){break _;}d=$z;a.dd=d;if(a.dd!==null){d=a.m;m=a.dd;$p=3;continue _;}b:{if(!a.hk&&a.dd!==null){if(a.dQ===null)break b;if(!E(a.n,20))break b;}if(!(a.dQ!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<
50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 2:$z=AKe(a,d);if(C()){break _;}e=$z;if(e){d=a.dd;$p=4;continue _;}b:{if(!a.hk&&a.dd!==null){if(a.dQ===null)break b;if(!E(a.n,20))break b;}if(!(a.dQ!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e
=K(a.L.M);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 3:$z=ART(d,a,m,b);if(C()){break _;}d=$z;a.dQ=d;c:{if(!a.hk&&a.dd!==null){if(a.dQ===null)break c;if(!E(a.n,20))break c;}if(!(a.dQ!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 4:a.nM(d,c);if(C()){break _;}c:{if(!a.hk&&a.dd!==null){if(a.dQ===null)break c;if
(!E(a.n,20))break c;}if(!(a.dQ!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 5:$z=AE5(a);if(C()){break _;}n=$z;$p=6;case 6:$z=ACk(a);if(C()){break _;}o=$z;if(a.dQ!==null&&E(a.n,100)){d=Sn(a.dQ,a);p=a.c0*2.0;q=p*p;r=e;while(d!==null&&ABT(d,a.d,a.j,a.e)<q&&d.z<=r){AP1(a.dQ);if(!ANl(a.dQ)){d=Sn(a.dQ,a);continue;}d
=null;a.dQ=null;}a.hF=0;if(d!==null){q=d.x-a.d;s=d.w-a.e;t=d.z-r;a.v=CR(s,q)*180.0/3.1415927410125732-90.0;a.gC=a.sW;if(a.hk&&a.dd!==null){u=a.dd.d-a.d;r=a.dd.e-a.e;v=a.v;a.v=CR(r,u)*180.0/3.1415927410125732-90.0;w=(v-a.v+90.0)*3.1415927410125732/180.0;a.iJ= -Bq(w)*a.gC*1.0;a.gC=BC(w)*a.gC*1.0;}if(t!==0.0)a.hF=1;}if(N(a.n)<0.800000011920929&&!(!n&&!o))a.hF=1;return;}$p=9;continue _;case 7:$z=ART(d,a,m,b);if(C()){break _;}d=$z;a.dQ=d;e=K(a.L.M);$p=5;continue _;case 8:$z=a.sy(j,k,l);if(C()){break _;}x=$z;if(x
>h){h=x;e=j;f=k;g=l;}i=i+1|0;if(i>=50){if(e>0){d=a.m;$p=10;continue _;}e=K(a.L.M);$p=5;continue _;}j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);continue _;case 9:AQM(a);if(C()){break _;}a.dQ=null;return;case 10:$z=AJt(d,a,e,f,g,b);if(C()){break _;}d=$z;a.dQ=d;e=K(a.L.M);$p=5;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AMz(a,b,c){return;}
function AKX(a){return null;}
function ACM(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Zq(a,b,c,d);if(C()){break _;}e=$z;if(!e)return 0;e=b|0;f=c|0;g=d|0;$p=2;case 2:$z=a.sy(e,f,g);if(C()){break _;}h=$z;return h<0.0?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function DP(){IR.call(this);this.Fl=0;}
function AC7(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADF(a,b);if(C()){break _;}b=$z;if(b>0.5)a.hj=a.hj+2|0;$p=2;case 2:ACm(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function AK6(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMq(a);if(C()){break _;}if(a.m.i0)return;$p=2;case 2:Ca(a);if(C()){break _;}return;default:E_();}}C3().s(a,$p);}
function AKn(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(LC(a.m.bi,a)>=256.0)return null;b=a.m.bi;$p=1;case 1:$z=AKe(a,b);if(C()){break _;}c=$z;return !c?null:a.m.bi;default:E_();}}C3().s(a,b,c,$p);}
function AAG(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABZ(a,b,c);if(C()){break _;}c=$z;if(!c)return 0;if(b!==a)a.dd=b;return 1;default:E_();}}C3().s(a,b,c,$p);}
function AQU(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<2.5&&b.L.U>a.L.M&&b.L.M<a.L.U){a.dy=20;d=a.Fl;$p=1;continue _;}return;case 1:b.fq(a,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ABu(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0.5;f=a.m;$p=1;case 1:$z=ANf(f,b,c,d);if(C()){break _;}g=$z;return e-g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yv(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.m;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=Xv(e,f,g,h);if(C()){break _;}f=$z;if(f>E(a.n,8))return 0;$p=2;case 2:$z=ACM(a,b,c,d);if(C()){break _;}f=$z;return !f?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function I3(){DP.call(this);}
function AH0(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Ru(a.m)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:AC7(a);if(C()){break _;}return;case 2:$z=ADF(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.m;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGd(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.n)*30.0<(b-0.4000000059604645)*2.0)a.cU=300;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AWI(a){BB();return Bga.cV;}
function Jj(){DP.call(this);}
function AIB(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Ru(a.m)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:AC7(a);if(C()){break _;}return;case 2:$z=ADF(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.m;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGd(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.n)*30.0<(b-0.4000000059604645)*2.0)a.cU=300;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AHT(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<10.0){d=b.d-a.d;e=b.e-a.e;if(!a.dy){f=AS8(a.m,a);f.j=f.j+1.399999976158142;g=b.j-0.20000000298023224-f.j;h=Ce(d*d+e*e)*0.20000000298023224;Dh(a.m,a,B(225),1.0,1.0/(N(a.n)*0.4000000059604645+0.800000011920929));b=a.m;$p=1;continue _;}a.v=CR(e,d)*180.0/3.1415927410125732-90.0;a.hk=1;}return;case 1:AOf(b,f);if(C()){break _;}Qz(f,
d,g+h,e,0.6000000238418579,12.0);a.dy=30;a.v=CR(e,d)*180.0/3.1415927410125732-90.0;a.hk=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYL(a){BB();return Bgb.cV;}
function JV(){var a=this;DP.call(a);a.jb=0;a.up=0;a.Bd=0;a.jR=0;}
function ZM(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.up=a.jb;if(a.jb>0&&a.jR<0)a.jb=a.jb-1|0;if(a.jR>=0)a.jR=2;$p=1;case 1:APK(a);if(C()){break _;}if(a.jR!=1)a.jR=(-1);return;default:E_();}}C3().s(a,$p);}
function AAI(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(a.jR<=0&&c<3.0)){if(a.jR<=0)break a;if(c>=7.0)break a;}if(!a.jb)Dh(a.m,a,B(226),1.0,0.5);a.jR=1;a.jb=a.jb+1|0;if(a.jb==a.Bd){b=a.m;d=a.d;e=a.j;f=a.e;c=3.0;$p=1;continue _;}a.hk=1;}return;case 1:X7(b,a,d,e,f,c);if(C()){break _;}$p=2;case 2:Ca(a);if(C()){break _;}a.hk=1;return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function Qi(a,b){return (a.up+(a.jb-a.up|0)*b)/(a.Bd-2|0);}
function ASR(a){BB();return Bgc.cV;}
function Kl(){DP.call(this);}
function ARo(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADF(a,b);if(C()){break _;}b=$z;if(b<0.5&&LC(a.m.bi,a)<256.0)return a.m.bi;return null;default:E_();}}C3().s(a,b,$p);}
function Zj(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0;$p=1;case 1:a:{$z=ADF(a,d);if(C()){break _;}d=$z;if(d>0.5&&!E(a.n,100))a.dd=null;else{if(c<=2.0)break a;if(c>=6.0)break a;if(E(a.n,10))break a;if(a.cx){e=b.d-a.d;f=b.e-a.e;g=Ce(e*e+f*f);a.g=e/g*0.5*0.800000011920929+a.g*0.20000000298023224;a.h=f/g*0.5*0.800000011920929+a.h*0.20000000298023224;a.i=0.4000000059604645;}}return;}$p=2;case 2:AQU(a,
b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZK(a){BB();return Bgd.cV;}
function Gx(){IR.call(this);}
function AOx(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.m;f=c-1|0;$p=1;case 1:$z=ACt(e,b,f,d);if(C()){break _;}g=$z;L();if(g==BeP.b)return 10.0;e=a.m;$p=2;case 2:$z=ANf(e,b,c,d);if(C()){break _;}h=$z;return h-0.5;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AK3(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.m;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=Xv(e,f,g,h);if(C()){break _;}g=$z;if(g<=8)return 0;$p=2;case 2:$z=ACM(a,b,c,d);if(C()){break _;}g=$z;return !g?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function KF(){Gx.call(this);this.x2=0;}
function AGT(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.x2&&b instanceof EQ){a.x2=1;d=1+E(a.n,3)|0;e=0;if(e<d){L();f=Bfb.b;g=1;h=1.0;$p=2;continue _;}}$p=1;case 1:$z=ABZ(a,b,c);if(C()){break _;}c=$z;return c;case 2:$z=AGE(a,f,g,h);if(C()){break _;}i=$z;i.i=i.i+N(a.n)*0.05000000074505806;i.g=i.g+(N(a.n)-N(a.n))*0.10000000149011612;i.h=i.h+(N(a.n)-N(a.n))*0.10000000149011612;e
=e+1|0;if(e>=d){$p=1;continue _;}L();f=Bfb.b;g=1;h=1.0;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A61(a){return B(227);}
function A4e(a){return B(227);}
function AYj(a){return B(227);}
function Iz(){Gx.call(this);this.qv=0;}
function ATw(a){return B(228);}
function A9s(a){return B(228);}
function AV3(a){return B(229);}
function AXQ(a,b){if(!a.qv)return 0;Pe(b,a);return 1;}
function AWb(a){BB();return Bge.cV;}
function Dz(){var a=this;D.call(a);a.Az=0.0;a.w0=0;}
function Bbj(){var a=new Dz();A3b(a);return a;}
function Bby(a){var b=new Dz();AVG(b,a);return b;}
function A3b(a){return;}
function AVG(a,b){return;}
function NF(a,b){return;}
function AF8(a,b){if(b==32)return Cl(a)*4.294967295E9+(-2.147483648E9)|0;return Cl(a)*Long_toNumber(Long_shl(Long_fromInt(1),CB(32,b)))|0;}
function Lo(a){return AF8(a,32);}
function E(a,b){return Cl(a)*b|0;}
function Gw(a){return Long_or(Long_shl(Long_fromInt(Lo(a)),32),Long_fromInt(Lo(a)));}
function N(a){return Cl(a);}
function Cl(a){return Math.random();}
function CY(a){var b,c,d,e;if(a.w0){a.w0=0;return a.Az;}while(true){while(true){b=2.0*Cl(a)-1.0;c=2.0*Cl(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=Ed((-2.0)*A3R(d)/d);a.Az=c*e;a.w0=1;return b*e;}
function Nx(){D.call(this);}
var Bgf=null;var Bgg=null;function Bgh(){var a=new Nx();AIl(a);return a;}
function AIl(a){return;}
function IW(b){var c,d,e,f,g,h;Ba0(F(Nx));try{BW();c=Bgi+1|0;d=0;while(d<b){e=Bgi+1|0;Bgi=e;f=Bgj;g=CX(e);h=new Rn;h.Bs=e;h.rf=null;h.oZ=null;h.lJ=(-1);h.jH=0;BR(f,g,h);d=d+1|0;}S(Bgf,CX(c));S(Bgf,CX(b));return c;}finally{BcR(F(Nx));}}
function WQ(b){var c,d,e,f,g;Ba0(F(Nx));try{c=b.bk;while(c<b.cy){BW();d=Bgk;Bd();e=new O9;f=BdG.createTexture();e.Ih=(-1);e.Ie=(-1);e.Gg=1;e.G$=0;e.BK=f;g=SY(d,e);AQZ(b,c,g);S(Bgg,CX(g));c=c+1|0;}}finally{BcR(F(Nx));}}
function WK(b){var c;c=AAo($rt_createByteArray(b));c.kI=Bgl;return c;}
function Rb(b){return ALO($rt_createIntArray(b));}
function HY(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new WJ;f=0+d|0;KN(e,d);e.bk=0;e.cy=f;e.yk=0;e.xt=0;e.xm=c;return e;}
function ALT(){Bgf=Ci();Bgg=Ci();}
function O8(){var a=this;D.call(a);a.cO=null;a.eR=null;a.i$=0.0;a.q8=0.0;a.ix=0;a.jL=0;a.z9=null;}
function ACU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.q8+(a.i$-a.q8)*b;d=a.cO.f;B3();Bv(d.T+(d.J-d.T)*b,1.0,0.0,0.0);Bv(d.P+(d.v-d.P)*b,0.0,1.0,0.0);Hu();BD();e=a.cO.A;f=
K(d.d);g=K(d.j);h=K(d.e);$p=1;case 1:$z=ANf(e,f,g,h);if(C()){break _;}i=$z;BU(i,i,i,1.0);if(a.eR===null){B3();if(a.jL){j=(a.ix+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(D_(j)*3.1415927410125732)*0.30000001192092896,Bq(D_(j)*3.1415927410125732*2.0)*0.4000000059604645, -k*0.4000000059604645);}Bw(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Ba(32826);if(a.jL){j=(a.ix+b)/8.0;k=Bq(j*j*3.1415927410125732);Bv(Bq(D_(j)*3.1415927410125732)*70.0,0.0,1.0,
0.0);Bv( -k*20.0,0.0,0.0,1.0);}f=3553;d=a.cO.bo;e=a.cO.f.tG;l=PI(a.cO.f);$p=2;continue _;}B3();if(a.jL){j=(a.ix+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(D_(j)*3.1415927410125732)*0.4000000059604645,Bq(D_(j)*3.1415927410125732*2.0)*0.20000000298023224, -k*0.20000000298023224);}Bw(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Ba(32826);if(a.jL){j=(a.ix+b)/8.0;k=Bq(j*j*3.1415927410125732);m=Bq(D_(j)*3.1415927410125732);Bv( -k*20.0,0.0,1.0,0.0);b
= -m;Bv(b*20.0,0.0,0.0,1.0);Bv(b*80.0,1.0,0.0,0.0);}CC(0.4000000059604645,0.4000000059604645,0.4000000059604645);if(a.eR.bC<256){L();if(!BeN.data[a.eR.bC].ek()){f=3553;d=a.cO.bo;e=B(179);$p=5;continue _;}}if(a.eR.bC>=256){f=3553;d=a.cO.bo;e=B(230);$p=3;continue _;}f=3553;d=a.cO.bo;e=B(179);$p=4;continue _;case 2:$z=AD1(d,e,l);if(C()){break _;}g=$z;Cp(f,g);Bw((-1.0),3.5999999046325684,3.5);Bv(120.0,0.0,0.0,1.0);Bv(200.0,1.0,0.0,0.0);Bv((-135.0),0.0,1.0,0.0);CC(1.0,1.0,1.0);Bw(5.599999904632568,0.0,0.0);n=R9(Bgm,
a.cO.f);CC(1.0,1.0,1.0);ALw(n);BD();Bb(32826);DS();return;case 3:$z=AHs(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=BeJ;m=(((DI(a.eR)%16|0)*16|0)+0|0)/256.0;o=(((DI(a.eR)%16|0)*16|0)+16|0)/256.0;p=(((DI(a.eR)/16|0)*16|0)+0|0)/256.0;q=(((DI(a.eR)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Dc(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,
1.0,0.0,r,u);Br(e);Bz(e);Dc(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),t,s);G(e,0.0,0.0,(-0.0625),r,s);Br(e);Bz(e);Dc(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Br(e);Bz(e);Dc(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,
(-0.0625),y,s);f=f+1|0;}Br(e);Bz(e);Dc(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Br(e);Bz(e);Dc(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Br(e);Bb(32826);BD();Bb(32826);DS();return;case 4:$z=AHs(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=
BeJ;m=(((DI(a.eR)%16|0)*16|0)+0|0)/256.0;o=(((DI(a.eR)%16|0)*16|0)+16|0)/256.0;p=(((DI(a.eR)/16|0)*16|0)+0|0)/256.0;q=(((DI(a.eR)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Dc(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,1.0,0.0,r,u);Br(e);Bz(e);Dc(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),
t,s);G(e,0.0,0.0,(-0.0625),r,s);Br(e);Bz(e);Dc(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Br(e);Bz(e);Dc(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Br(e);Bz(e);Dc(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba
=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Br(e);Bz(e);Dc(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Br(e);Bb(32826);BD();Bb(32826);DS();return;case 5:$z=AHs(d,e);if(C()){break _;}g=$z;Cp(f,g);GW(a.z9,BeN.data[a.eR.bC]);BD();Bb(32826);DS();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,
$p);}
function AB7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bb(3008);if(a.cO.f.cU<=0){c=a.cO.A.bi;$p=1;continue _;}c=a.cO.bo;d=B(179);$p=2;continue _;case 1:$z=AHx(c);if(C()){break _;}e=$z;if(!e){d=a.cO.f;c=BfO;$p=3;continue _;}e=K(a.cO.f.d);f=K(a.cO.f.j);g=K(a.cO.f.e);c
=a.cO.bo;d=B(179);$p=4;continue _;case 2:$z=AHs(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeJ;BU(1.0,1.0,1.0,0.8999999761581421);Ba(3042);Df(770,771);e=0;while(e<2){B3();L();f=Bgn.bb+(e*16|0)|0;g=(f&15)<<4;f=f&240;h=g;i=h/256.0;h=(h+15.989999771118164)/256.0;j=f;k=j/256.0;j=(j+15.989999771118164)/256.0;f=(e*2|0)-1|0;Bw( -f*0.23999999463558197,(-0.30000001192092896),0.0);Bv(f*10.0,0.0,1.0,0.0);Bz(c);l=h;m=j;G(c,(-0.5),(-0.5),(-0.5),l,m);n=i;G(c,0.5,(-0.5),(-0.5),n,m);m=k;G(c,0.5,0.5,(-0.5),n,m);G(c,(-0.5),
0.5,(-0.5),l,m);Br(c);BD();e=e+1|0;}BU(1.0,1.0,1.0,1.0);Bb(3042);c=a.cO.A.bi;$p=1;continue _;case 3:$z=AGF(d,c);if(C()){break _;}e=$z;if(!e){Ba(3008);return;}c=a.cO.bo;d=B(231);$p=6;continue _;case 4:$z=AHs(c,d);if(C()){break _;}o=$z;Cp(3553,o);c=a.cO.A;$p=5;case 5:$z=ACt(c,e,f,g);if(C()){break _;}p=$z;L();if(BeN.data[p]===null){d=a.cO.f;c=BfO;$p=3;continue _;}e=BeN.data[p].ci(2);BA();c=BeJ;d=a.cO.f;$p=8;continue _;case 6:$z=AHs(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeJ;d=a.cO.f;$p=7;case 7:$z=ADF(d,
b);if(C()){break _;}h=$z;BU(h,h,h,0.5);Ba(3042);Df(770,771);B3();h= -a.cO.f.v/64.0;i=a.cO.f.J/64.0;Bz(c);q=4.0+h;l=4.0+i;G(c,(-1.0),(-1.0),(-0.5),q,l);r=0.0+h;G(c,1.0,(-1.0),(-0.5),r,l);l=0.0+i;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Br(c);BD();BU(1.0,1.0,1.0,1.0);Bb(3042);Ba(3008);return;case 8:ADF(d,b);if(C()){break _;}BU(0.10000000149011612,0.10000000149011612,0.10000000149011612,0.5);B3();i=e%16|0;j=i/256.0-0.0078125;i=(i+15.989999771118164)/256.0+0.0078125;k=e/16|0;s=k/256.0-0.0078125;h=(k+15.989999771118164)
/256.0+0.0078125;Bz(c);q=i;l=h;G(c,(-1.0),(-1.0),(-0.5),q,l);r=j;G(c,1.0,(-1.0),(-0.5),r,l);l=s;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Br(c);BD();BU(1.0,1.0,1.0,1.0);d=a.cO.f;c=BfO;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AI9(a){var b,c,d,e;a.q8=a.i$;if(a.jL){a.ix=a.ix+1|0;if(a.ix==8){a.ix=0;a.jL=0;}}b=D9(a.cO.f.K);c=0.4000000059604645;d=(b!==a.eR?0.0:1.0)-a.i$;e=(-0.4000000059604645);if(d>=e)e=d;if(e<=c)c=e;a.i$=a.i$+c;if(a.i$<0.10000000149011612)a.eR=b;}
function AGJ(a){a.i$=0.0;}
function Pg(a){a.ix=(-1);a.jL=1;}
function AM6(a){a.i$=0.0;}
function P(){var a=this;D.call(a);a.bb=0;a.b=0;a.qb=0.0;a.nN=0.0;a.c_=0.0;a.cL=0.0;a.c$=0.0;a.db=0.0;a.cE=0.0;a.dc=0.0;a.gI=null;a.Et=0.0;a.b$=null;}
var Bgo=null;var Bgp=null;var Bgq=null;var Bgr=null;var Bgs=null;var Bgt=null;var Bgu=null;var Bgv=null;var Bgw=null;var BeN=null;var Bgx=null;var Bgy=null;var Bgz=null;var BgA=null;var BgB=null;var BeT=null;var BeP=null;var BeQ=null;var BeX=null;var BeZ=null;var Be5=null;var BeO=null;var BfW=null;var BgC=null;var BfX=null;var BgD=null;var Be$=null;var Be_=null;var Bfe=null;var Bfd=null;var Bfc=null;var Be0=null;var Be1=null;var Bfa=null;var Be3=null;var BgE=null;var BgF=null;var BgG=null;var BgH=null;var BgI
=null;var BgJ=null;var BgK=null;var BgL=null;var BgM=null;var BgN=null;var BgO=null;var BgP=null;var BgQ=null;var BgR=null;var Bfb=null;var BgS=null;var Be6=null;var Be7=null;var Be8=null;var Be9=null;var Bfg=null;var Bff=null;var BeR=null;var BeS=null;var BeY=null;var Bfi=null;var Bfh=null;var Be4=null;var Bfj=null;var Be2=null;var Bgn=null;var BgT=null;var BgU=null;var BgV=null;var BgW=null;var BgX=null;var BgY=null;var BgZ=null;var Bg0=null;var Bg1=null;var Bg2=null;var Bg3=null;var Bg4=null;var Bg5=null;var Bf_
=null;var Bg6=null;var Bg7=null;function L(){L=Bt(P);AVd();}
function Bg8(a,b){var c=new P();D0(c,a,b);return c;}
function Kx(a,b,c){var d=new P();C8(d,a,b,c);return d;}
function D0(a,b,c){var d,e,f;L();a.gI=Bgo;a.Et=1.0;if(BeN.data[b]!==null){c=new Cb;d=new T;W(d);Bl(c,U(FK(H(FK(H(Be(H(d,B(232)),b),B(233)),BeN.data[b]),B(234)),a)));M(c);}a.b$=c;BeN.data[b]=a;a.b=b;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);Bgy.data[b]=a.d4();e=Bgz;f=!a.d4()?0:255;e.data[b]=f;BgA.data[b]=0;}
function C8(a,b,c,d){L();D0(a,b,d);a.bb=c;}
function BM(a,b){a.gI=b;return a;}
function Gt(a,b){Bgz.data[a.b]=b;return a;}
function GI(a,b){BgB.data[a.b]=15.0*b|0;return a;}
function Dn(a,b){a.nN=b*3.0;return a;}
function A80(a){return 1;}
function AWB(a){return 0;}
function BH(a,b){var c;a.qb=b;c=a.nN;b=b*5.0;if(c<b)a.nN=b;return a;}
function Ff(a,b){Bgx.data[a.b]=b;}
function Bo(a,b,c,d,e,f,g){a.c_=b;a.cL=c;a.c$=d;a.db=e;a.cE=f;a.dc=g;}
function AE$(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sJ(c,d,e);if(C()){break _;}f=$z;return f;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AGt(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!f&&a.cL>0.0)c=1;else if(f==1&&a.cE<1.0)c=1;else if(f==2&&a.c$>0.0)c=1;else if(f==3&&a.dc<1.0)c=1;else if(f==4&&a.c_>0.0)c=1;else{if(f!=5)break a;if(a.db>=1.0)break a;c=1;}return c;}$p=1;case 1:$z=b.la(c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ABW(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eG(c,d,e);if(C()){break _;}c=$z;return a.eW(f,c);default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A7e(a,b,c){return a.ci(b);}
function AVB(a,b){return a.bb;}
function K6(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.c_;h=d;i=h+a.cL;j=e;return D3(g,i,j+a.c$,f+a.db,h+a.cE,j+a.dc);}
function ALv(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.hs(b,c,d,e);if(C()){break _;}h=$z;if(h!==null&&L5(f,h))S(g,h);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Nh(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.c_;h=d;i=h+a.cL;j=e;return D3(g,i,j+a.c$,f+a.db,h+a.cE,j+a.dc);}
function A5i(a){return 1;}
function A6r(a,b,c){return a.pe();}
function A3L(a){return 1;}
function AHP(a,b,c,d,e,f){return;}
function APa(a,b,c,d,e,f){return;}
function Z5(a,b,c,d,e,f){return;}
function YL(a,b,c,d,e,f){return;}
function A3V(a){return 10;}
function AA5(a,b,c,d,e){return;}
function Z0(a,b,c,d,e){return;}
function AYm(a,b){return 1;}
function ATN(a,b,c){return a.b;}
function ABb(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qb<0.0)c=0.0;else{if(M4(b,a)){$p=1;continue _;}c=1.0/a.qb/100.0;}return c;case 1:$z=AKQ(b,a);if(C()){break _;}c=$z;return c/a.qb/30.0;default:E_();}}C3().s(a,b,c,$p);}
function Yd(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=1.0;$p=1;case 1:a.HN(b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEX(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.eF(b.r);i=0;j=0.15000000596046448;k=c;l=d;m=e;while(i<h){if(N(b.r)<=g){n=a.dU(f,b.r);if(n>0){o=Hb(b,k+N(b.r)*0.699999988079071+j,l+N(b.r)*0.699999988079071+j,m+N(b.r)*0.699999988079071+j,Ky(n,1));o.g$=10;$p=1;continue _;}}i=i+1|0;}return;case 1:AOf(b,
o);if(C()){break _;}while(true){i=i+1|0;if(i>=h)break;if(N(b.r)>g)continue;n=a.dU(f,b.r);if(n<=0)continue;else{o=Hb(b,k+N(b.r)*0.699999988079071+j,l+N(b.r)*0.699999988079071+j,m+N(b.r)*0.699999988079071+j,Ky(n,1));o.g$=10;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AZZ(a,b){return a.nN/5.0;}
function Ka(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;h= -c;i= -d;j= -e;b=Dk(f,h,i,j);f=Dk(g,h,i,j);k=KL(b,f,a.c_);l=KL(b,f,a.db);m=JS(b,f,a.cL);n=JS(b,f,a.cE);o=Kv(b,f,a.c$);p=Kv(b,f,a.dc);if(!Rr(a,k))k=null;if(!Rr(a,l))l=null;if(!Xo(a,m))m=null;if(!Xo(a,n))n=null;if(!RJ(a,o))o=null;if(!RJ(a,p))p=null;q=null;if(k!==null)q=k;if(l!==null&&!(q!==null&&DG(b,l)>=DG(b,q)))q=l;if(m!==null&&!(q!==null&&DG(b,m)>=DG(b,q)))q=m;if(n!==null&&!(q!==null&&DG(b,n)>=DG(b,q)))q=n;if(o!==null&&!(q!==null&&DG(b,o)>=DG(b,q)))q=
o;if(p!==null&&!(q!==null&&DG(b,p)>=DG(b,q)))q=p;if(q===null)return null;r=(-1);if(q===k)r=4;if(q===l)r=5;if(q===m)r=0;if(q===n)r=1;if(q===o)r=2;if(q===p)r=3;return A0z(c,d,e,r,Dk(q,c,d,e));}
function Rr(a,b){return b===null?0:b.z>=a.cL&&b.z<=a.cE&&b.w>=a.c$&&b.w<=a.dc?1:0;}
function Xo(a,b){return b===null?0:b.x>=a.c_&&b.x<=a.db&&b.w>=a.c$&&b.w<=a.dc?1:0;}
function RJ(a,b){return b===null?0:b.x>=a.c_&&b.x<=a.db&&b.z>=a.cL&&b.z<=a.cE?1:0;}
function AQY(a,b,c,d,e){return;}
function AVh(a){return 0;}
function AED(a,b,c,d,e){return 1;}
function AGH(a,b,c,d,e,f){return 0;}
function AJI(a,b,c,d,e,f){return;}
function YD(a,b,c,d,e,f){return;}
function AAa(a,b,c,d,e,f){return;}
function AF5(a,b,c,d,e,f,g){return;}
function APU(a,b,c,d,e){return;}
function A9i(a,b,c,d,e){return 16777215;}
function AVd(){var b,c;Bgo=Ie(B(235),1.0,1.0);Bgp=Ie(B(236),1.0,1.0);Bgq=Ie(B(237),1.0,1.0);Bgr=Ie(B(238),1.0,1.0);Bgs=Ie(B(235),1.0,1.0);Bgt=Ie(B(235),1.0,1.5);Bgu=A_0(B(235),1.0,1.0);Bgv=Ie(B(239),1.0,1.0);Bgw=Bb$(B(240),1.0,1.0);BeN=J(P,256);Bgx=$rt_createBooleanArray(256);Bgy=$rt_createBooleanArray(256);Bgz=$rt_createIntArray(256);BgA=$rt_createBooleanArray(256);BgB=$rt_createIntArray(256);BeT=BM(Dn(BH(Bbd(1,1),1.5),10.0),Bgs);BeP=BM(BH(BbG(2),0.6000000238418579),Bgr);BeQ=BM(BH(A_5(3,2),0.5),Bgq);BeX=BM(Dn(BH(Kx(4,
16,Bg9),2.0),10.0),Bgs);BeZ=BM(Dn(BH(Kx(5,4,Bg$),2.0),5.0),Bgp);Be5=BM(BH(Bcs(6,15),0.0),Bgr);BeO=BM(Dn(BH(Kx(7,17,Bg9),(-1.0)),6000000.0),Bgs);BfW=Gt(BH(AUg(8,BfO),100.0),3);BgC=Gt(BH(AXE(9,BfO),100.0),3);BfX=Gt(GI(BH(AUg(10,BfP),0.0),1.0),255);BgD=Gt(GI(BH(AXE(11,BfP),100.0),1.0),255);Be$=BM(BH(BbB(12,18),0.5),Bgw);Be_=BM(BH(BbK(13,19),0.6000000238418579),Bgq);Bfe=BM(Dn(BH(SG(14,32),3.0),5.0),Bgs);Bfd=BM(Dn(BH(SG(15,33),3.0),5.0),Bgs);Bfc=BM(Dn(BH(SG(16,34),3.0),5.0),Bgs);Be0=BM(BH(BcM(17),2.0),Bgp);Be1=BM(Gt(BH(BaG(18,
52),0.20000000298023224),1),Bgr);Bfa=BM(BH(Ba8(19),0.6000000238418579),Bgr);Be3=BM(BH(Ba4(20,49,Bg_,0),0.30000001192092896),Bgu);BgE=null;BgF=null;BgG=null;BgH=null;BgI=null;BgJ=null;BgK=null;BgL=null;BgM=null;BgN=null;BgO=null;BgP=null;BgQ=null;BgR=null;Bfb=BM(BH(Kx(35,64,Bha),0.800000011920929),Bgv);BgS=null;Be6=BM(BH(A3i(37,13),0.0),Bgr);Be7=BM(BH(A3i(38,12),0.0),Bgr);Be8=GI(BM(BH(ATL(39,29),0.0),Bgr),0.125);Be9=BM(BH(ATL(40,28),0.0),Bgr);Bfg=BM(Dn(BH(AEz(41,39),3.0),10.0),Bgt);Bff=BM(Dn(BH(AEz(42,38),5.0),
10.0),Bgt);BeR=BM(Dn(BH(A9l(43,1),2.0),10.0),Bgs);BeS=BM(Dn(BH(A9l(44,0),2.0),10.0),Bgs);BeY=BM(Dn(BH(Kx(45,7,Bg9),2.0),10.0),Bgs);Bfi=BM(BH(BaH(46,8),0.0),Bgr);Bfh=BM(BH(Bai(47,35),1.5),Bgp);Be4=BM(Dn(BH(Kx(48,36,Bg9),2.0),10.0),Bgs);Bfj=BM(Dn(BH(Bbn(49,37),10.0),20.0),Bgs);Be2=BM(GI(BH(Ba_(50,80),0.0),0.9375),Bgp);Bgn=BM(GI(BH(BcS(51,31),0.0),1.0),Bgp);BgT=BM(BH(BcI(52,65),5.0),Bgt);BgU=A$M(53,BeZ);BgV=BM(BH(A_7(54),2.5),Bgp);BgW=BM(BH(BbM(55,62),0.5),Bgt);BgX=BM(Dn(BH(SG(56,50),3.0),5.0),Bgs);BgY=BM(Dn(BH(AEz(57,
40),5.0),10.0),Bgt);BgZ=BM(BH(Bbq(58),2.5),Bgp);Bg0=BM(BH(Bcv(59,88),0.0),Bgr);Bg1=BM(BH(BbY(60),0.6000000238418579),Bgq);Bg2=BM(BH(A4K(61,0),3.5),Bgs);Bg3=GI(BM(BH(A4K(62,1),3.5),Bgs),0.875);b=new Vo;BB();AHr(b,63,F(Jd),Bhb.cV);Bg4=BM(BH(b,1.0),Bgp);Bg5=BM(BH(Bac(64),3.0),Bgp);Bf_=BM(BH(Bck(65,83),0.4000000059604645),Bgp);Bg6=BM(BH(BaY(66,128),1.0),Bgt);Bg7=A$M(67,BeX);c=0;while(c<256){if(BeN.data[c]!==null)Bhc.data[c]=A_6(c-256|0);c=c+1|0;}}
function Rx(){}
function AJd(){var a=this;Gb.call(a);a.d9=null;a.p=0;}
function Ci(){var a=new AJd();AV6(a);return a;}
function AV6(a){a.d9=J(D,10);}
function To(a,b){var c;if(a.d9.data.length<b){c=a.d9.data.length>=1073741823?2147483647:DB(b,DB(a.d9.data.length*2|0,5));a.d9=Nm(a.d9,c);}}
function Z(a,b){K8(a,b);return a.d9.data[b];}
function De(a){return a.p;}
function Q8(a,b,c){var d;K8(a,b);d=a.d9.data[b];a.d9.data[b]=c;return d;}
function S(a,b){var c,d;To(a,a.p+1|0);c=a.d9.data;d=a.p;a.p=d+1|0;c[d]=b;a.d6=a.d6+1|0;return 1;}
function AMH(a,b,c){var d;if(b>=0&&b<=a.p){To(a,a.p+1|0);d=a.p;while(d>b){a.d9.data[d]=a.d9.data[d-1|0];d=d+(-1)|0;}a.d9.data[b]=c;a.p=a.p+1|0;a.d6=a.d6+1|0;return;}c=new BO;O(c);M(c);}
function En(a,b){var c,d,e,f;K8(a,b);c=a.d9.data[b];a.p=a.p-1|0;while(b<a.p){d=a.d9.data;e=a.d9.data;f=b+1|0;d[b]=e[f];b=f;}a.d9.data[a.p]=null;a.d6=a.d6+1|0;return c;}
function H5(a,b){var c;c=AA9(a,b);if(c<0)return 0;En(a,c);return 1;}
function DF(a){ZB(a.d9,0,a.p,null);a.p=0;}
function K8(a,b){var c;if(b>=0&&b<a.p)return;c=new BO;O(c);M(c);}
function DE(){}
function TD(){D.call(this);this.AJ=null;}
function AQA(a){CM(a.AJ,SM(0,1,null,null));}
function AWk(a){AQA(a);}
function TC(){var a=this;D.call(a);a.En=null;a.EH=null;}
function AQx(a){CM(a.En,SM(0,0,null,a.EH.result));}
function AS2(a){AQx(a);}
function TB(){D.call(this);this.Dt=null;}
function ASb(a){CM(a.Dt,SM(1,0,B(241),null));}
function AZj(a){ASb(a);}
function TA(){D.call(this);this.Bl=null;}
function AJ8(a,b){var c,d,e,f,g,h,i;c=a.Bl.result;d=A9X();e=J(B4,1).data;e[0]=B(242);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function ANH(a,b){AJ8(a,b);}
function A6H(a,b){ANH(a,b);}
function Sv(){D.call(this);}
var Bf5=null;function Bhd(){var a=new Sv();ZK(a);return a;}
function ZK(a){return;}
function AFo(){Bf5=Dd();BR(Bf5,B(24),A1E());}
function Cb(){B6.call(this);}
function Bhe(){var a=new Cb();AT7(a);return a;}
function AT7(a){O(a);}
function U_(){Cb.call(this);this.Iq=null;}
function EE(){B6.call(this);}
function Bc0(){var a=new EE();AUH(a);return a;}
function AUH(a){O(a);}
function AA6(){D.call(this);}
function Bhf(){var a=new AA6();AY2(a);return a;}
function AY2(a){return;}
function Fk(){var a=this;D.call(a);a.mB=0;a.bk=0;a.cy=0;a.lp=0;}
function Bhg(a){var b=new Fk();KN(b,a);return b;}
function KN(a,b){a.lp=(-1);a.mB=b;a.cy=b;}
function AVx(a){return a.mB;}
function A8p(a){return a.bk;}
function EO(a,b){var c,d;if(b>=0&&b<=a.cy){a.bk=b;if(b<a.lp)a.lp=0;return a;}c=new Cb;d=new T;W(d);Bl(c,U(H(Be(H(Be(H(d,B(243)),b),B(244)),a.cy),B(245))));M(c);}
function A04(a){return a.cy;}
function Nj(a,b){var c,d;if(b>=0&&b<=a.mB){if(a.lp>b)a.lp=(-1);a.cy=b;if(a.bk>a.cy)a.bk=a.cy;return a;}c=new Cb;d=new T;W(d);Bl(c,U(H(Be(H(Be(H(d,B(246)),b),B(244)),a.mB),B(245))));M(c);}
function EA(a){a.bk=0;a.cy=a.mB;a.lp=(-1);return a;}
function Gs(a){a.cy=a.bk;a.bk=0;a.lp=(-1);return a;}
function Ct(a){return a.cy-a.bk|0;}
function Fl(a){return a.bk>=a.cy?0:1;}
function L7(){Fk.call(this);}
function ADo(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new T;W(i);Bl(h,U(Be(H(Be(H(i,B(247)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gp;O(h);M(h);}if(d<0){h=new BO;i=new T;W(i);Bl(h,U(H(Be(H(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=RB(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;h=new T;W(h);Bl(i,U(H(Be(H(Be(H(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function VF(a,b){return ADo(a,b,0,b.data.length);}
function LR(a){EA(a);return a;}
function TH(a){Gs(a);return a;}
function P8(a,b){Nj(a,b);return a;}
function AE3(){var a=this;D.call(a);a.F=null;a.cz=0;a.fp=0;a.dO=0;}
function A8i(a){var b=new AE3();ATB(b,a);return b;}
function Kh(){var a=new AE3();AS$(a);return a;}
function ATB(a,b){a.cz=(-1);a.fp=0;a.dO=0;a.F=b;}
function AS$(a){a.cz=(-1);a.fp=0;a.dO=0;}
function AMv(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cz=f;$p=1;case 1:ANZ(a,b,c,d,e);if(C()){break _;}a.cz=(-1);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ANZ(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b.ek();g=a.F;$p=1;case 1:b.xI(g,c,d,e);if(C()){break _;}if(!f){$p=2;continue _;}if(f==4){$p=3;continue _;}if(f==1){$p=4;continue _;}if(f==6){$p=5;continue _;}if(f==2){$p=6;continue _;}if(f==3){$p=7;continue _;}if(f==5){$p=8;continue _;}if(f==8){$p=9;continue _;}if(f==7){$p=10;continue _;}if(f==9){$p=11;continue _;}if(f==10){$p=12;continue _;}if
(f!=11)return 0;$p=13;continue _;case 2:$z=ABR(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 3:$z=AB1(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 4:$z=AA7(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 5:$z=ALH(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 6:$z=AN1(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 7:$z=ZP(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 8:$z=ADr(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 9:$z=AJw(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 10:$z=AKB(a,b,c,d,e);if(C())
{break _;}c=$z;return c;case 11:$z=AM7(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 12:$z=AIu(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 13:$z=AFG(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AN1(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.F;$p=1;case 1:$z=f.eG(c,d,e);if(C()){break _;}g=$z;BA();f=BeJ;h=a.F;$p=2;case 2:$z=b.Ct(h,c,d,e);if(C()){break _;}i=$z;if(BgB.data[b.b]>0)i=1.0;Cq(f,i,i,i);if(g==1)GF(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if(g==2)GF(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,
0.0);else if(g==3)GF(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(g!=4)GF(a,b,c,d,e,0.0,0.0);else GF(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ZP(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:BA();f=BeJ;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Ct(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=i+15.989999771118164;p=o/256.0;q=1.399999976158142;b=a.F;g=d-1|0;$p=2;case 2:$z=b.la(c,g,e);if(C()){break _;}j=$z;if(j){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,
m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,
t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}b=Bgn;h=a.F;$p=3;case 3:$z=AFZ(b,h,c,g,e);if(C()){break _;}g=$z;if(g){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,
x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}bi=0.20000000298023224;bj=0.0625;if((((c+d|0)+e|0)&1)!=1){ba=l;bb=m;x=n;z=p;}else{x=(k+16|0)/256.0;z=(o
+16.0)/256.0;ba=l;bb=m;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){r=ba;ba=bb;bb=r;}b=Bgn;h=a.F;g=c-1|0;$p=4;case 4:$z=AFZ(b,h,g,d,e);if(C()){break _;}g=$z;if(g){w=c+bi;s=d+q+bj;t=e+1|0;G(f,w,s,t,ba,x);u=c+0|0;v=(d+0|0)+bj;G(f,u,v,t,ba,z);r=e+0|0;G(f,u,v,r,bb,z);G(f,w,s,r,bb,x);G(f,w,s,r,bb,x);G(f,u,v,r,bb,z);G(f,u,v,t,ba,z);G(f,w,s,t,ba,x);}b=Bgn;h=a.F;j=c+1|0;$p=5;case 5:$z=AFZ(b,h,j,d,e);if(C()){break _;}g=$z;if(g){r=j-bi;w=d+q+bj;s=e+0|0;G(f,r,w,s,bb,x);t=j-0|0;u=(d+0|0)+bj;G(f,t,u,s,bb,z);v=e+1|0;G(f,t,
u,v,ba,z);G(f,r,w,v,ba,x);G(f,r,w,v,ba,x);G(f,t,u,v,ba,z);G(f,t,u,s,bb,z);G(f,r,w,s,bb,x);}b=Bgn;h=a.F;g=e-1|0;$p=6;case 6:$z=AFZ(b,h,c,d,g);if(C()){break _;}g=$z;if(g){r=c+0|0;w=d+q+bj;s=e+bi;G(f,r,w,s,ba,x);t=(d+0|0)+bj;u=e+0|0;G(f,r,t,u,ba,z);v=j;G(f,v,t,u,bb,z);G(f,v,w,s,bb,x);G(f,v,w,s,bb,x);G(f,v,t,u,bb,z);G(f,r,t,u,ba,z);G(f,r,w,s,ba,x);}b=Bgn;h=a.F;bk=e+1|0;$p=7;case 7:$z=AFZ(b,h,c,d,bk);if(C()){break _;}g=$z;if(g){t=j;u=d+q+bj;v=bk-bi;G(f,t,u,v,bb,x);r=(d+0|0)+bj;w=bk-0|0;G(f,t,r,w,bb,z);s=c+0|0;G(f,
s,r,w,ba,z);G(f,s,u,v,ba,x);G(f,s,u,v,ba,x);G(f,s,r,w,ba,z);G(f,t,r,w,bb,z);G(f,t,u,v,bb,x);}b=Bgn;h=a.F;d=d+1|0;$p=8;case 8:$z=AFZ(b,h,c,d,e);if(C()){break _;}g=$z;if(g){r=c+0.5;t=r+0.5;u=r-0.5;r=e+0.5;w=r+0.5;r=r-0.5;if(((c+d|0)+e|0)&1){s=c+0|0;t=d+(-0.20000000298023224);G(f,s,t,w,m,n);u=d+0|0;G(f,s,u,r,m,p);v=j;G(f,v,u,r,l,p);G(f,v,t,w,l,n);x=(k+16|0)/256.0;z=(o+16.0)/256.0;G(f,v,t,r,m,x);G(f,v,u,w,m,z);G(f,s,u,w,l,z);G(f,s,t,r,l,x);}else{v=d+(-0.20000000298023224);x=e+0|0;G(f,u,v,x,m,n);z=d+0|0;G(f,t,z,
x,m,p);r=bk;G(f,t,z,r,l,p);G(f,u,v,r,l,n);w=(k+16|0)/256.0;s=(o+16.0)/256.0;G(f,t,v,r,m,w);G(f,u,z,r,m,s);G(f,u,z,x,l,s);G(f,t,v,x,l,w);}}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function ADr(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeJ;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Ct(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=j+16|0;l=g&240;if((((c+d|0)+e|0)&
1)!=1){g=j;j=k;k=g;}i=j;m=i/256.0;n=(i+15.989999771118164)/256.0;i=l;o=i/256.0;p=(i+15.989999771118164)/256.0;q=k;r=q/256.0;s=(q+15.989999771118164)/256.0;t=0.125;q=0.05000000074505806;b=a.F;k=c-1|0;$p=2;case 2:$z=b.la(k,d,e);if(C()){break _;}k=$z;if(k){u=c+q;v=(d+1|0)+t;w=(e+1|0)+t;G(f,u,v,w,m,o);x=(d+0|0)-t;G(f,u,x,w,m,p);w=(e+0|0)-t;G(f,u,x,w,n,p);G(f,u,v,w,n,o);}b=a.F;l=c+1|0;$p=3;case 3:$z=b.la(l,d,e);if(C()){break _;}k=$z;if(k){u=l-q;x=(d+0|0)-t;w=(e+1|0)+t;G(f,u,x,w,n,p);v=(d+1|0)+t;G(f,u,v,w,n,o);w=
(e+0|0)-t;G(f,u,v,w,m,o);G(f,u,x,w,m,p);}b=a.F;k=e-1|0;$p=4;case 4:$z=b.la(c,d,k);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+0|0)-t;x=e+q;G(f,u,m,x,s,p);w=(d+1|0)+t;G(f,u,w,x,s,o);u=(c+0|0)-t;G(f,u,w,x,r,o);G(f,u,m,x,r,p);}b=a.F;e=e+1|0;$p=5;case 5:$z=b.la(c,d,e);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+1|0)+t;x=e-q;G(f,u,m,x,r,o);w=(d+0|0)-t;G(f,u,w,x,r,p);u=(c+0|0)-t;G(f,u,w,x,s,p);G(f,u,m,x,s,o);}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AM7(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=
$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeJ;g=a.F;$p=1;case 1:$z=g.eG(c,d,e);if(C()){break _;}h=$z;i=b.eW(0,h);if(a.cz>=0)i=a.cz;g=a.F;$p=2;case 2:$z=b.Ct(g,c,d,e);if(C()){break _;}j=$z;Cq(f,j,j,j);k=(i&15)<<4;l=i&240;m=k;n=m/256.0;o=(m+15.989999771118164)/256.0;m=l;p=m/256.0;q=(m+15.989999771118164)/256.0;r=c+1|0;s=c+0|0;t=e+0|0;u=e+1|0;v=d+0.0625;if(h!=1&&h!=2&&h!=3&&h!=7){if(h==8){w=s;x=r;y=r;z=u;m=t;j=t;ba=s;r=x;s=y;bb=u;t=m;u=j;}else if(h!=9){w=r;j=s;z=t;m=u;ba=r;r=j;bb=t;t=m;}else{w=r;ba
=s;j=r;z=u;bb=t;m=t;r=s;s=j;t=u;u=m;}}else{w=s;ba=r;z=t;bb=u;}if(h!=2&&h!=4){if(h!=3&&h!=5){x=v;j=v;y=v;m=v;v=j;}else{j=v+1.0;x=j;y=v;m=v;v=j;}}else{m=v+1.0;x=v;y=m;}bc=ba;bd=y;be=bb;G(f,bc,bd,be,o,p);bf=w;bg=x;bh=u;G(f,bf,bg,bh,o,q);bi=s;bj=v;bk=t;G(f,bi,bj,bk,n,q);bl=r;bm=m;bn=z;G(f,bl,bm,bn,n,p);G(f,bl,bm,bn,n,p);G(f,bi,bj,bk,n,q);G(f,bf,bg,bh,o,q);G(f,bc,bd,be,o,p);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p);}
function AJw(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeJ;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Ct(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=(i+15.989999771118164)
/256.0;b=a.F;$p=2;case 2:$z=b.eG(c,d,e);if(C()){break _;}p=$z;if(p==5){q=c+0.05000000074505806;r=(d+1|0)+0.0;s=(e+1|0)+0.0;G(f,q,r,s,l,n);t=(d+0|0)-0.0;G(f,q,t,s,l,o);s=(e+0|0)-0.0;G(f,q,t,s,m,o);G(f,q,r,s,m,n);}if(p==4){t=(c+1|0)-0.05000000074505806;q=(d+0|0)-0.0;s=(e+1|0)+0.0;G(f,t,q,s,m,o);r=(d+1|0)+0.0;G(f,t,r,s,m,n);s=(e+0|0)-0.0;G(f,t,r,s,l,n);G(f,t,q,s,l,o);}if(p==3){q=(c+1|0)+0.0;r=(d+0|0)-0.0;s=e+0.05000000074505806;G(f,q,r,s,m,o);t=(d+1|0)+0.0;G(f,q,t,s,m,n);q=(c+0|0)-0.0;G(f,q,t,s,l,n);G(f,q,r,s,
l,o);}if(p==2){r=(c+1|0)+0.0;s=(d+1|0)+0.0;t=(e+1|0)-0.05000000074505806;G(f,r,s,t,l,n);q=(d+0|0)-0.0;G(f,r,q,t,l,o);r=(c+0|0)-0.0;G(f,r,q,t,m,o);G(f,r,s,t,m,n);}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AA7(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeJ;g=a.F;$p=1;case 1:$z=b.Ct(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eG(c,d,e);if(C()){break _;}i=$z;Ui(a,b,i,c,d,e);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALH(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeJ;g=a.F;$p=1;case 1:$z=b.Ct(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eG(c,d,e);if(C()){break _;}i=$z;OJ(a,b,i,c,d-0.0625,e);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function GF(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;BA();h=BeJ;i=b.ci(0);if(a.cz>=0)i=a.cz;j=(i&15)<<4;k=i&240;l=j;m=l/256.0;l=(l+15.989999771118164)/256.0;n=k;o=n/256.0;n=(n+15.989999771118164)/256.0;p=m;q=p+0.02734375;r=o;s=r+0.0234375;t=p+0.03515625;u=r+0.03125;c=c+0.5;e=e+0.5;v=c-0.5;w=c+0.5;x=e-0.5;y=e+0.5;z=c+f*0.375;ba=z-0.0625;bb=d+0.625;bc=e+g*0.375;bd=bc-0.0625;G(h,ba,bb,bd,q,s);bc=bc+0.0625;G(h,ba,bb,bc,q,u);q=z+0.0625;G(h,q,bb,bc,t,u);G(h,q,bb,bd,t,s);u=c-0.0625;bc=d
+1.0;G(h,u,bc,x,p,r);q=u+f;d=d+0.0;t=x+g;bd=n;G(h,q,d,t,p,bd);s=y+g;z=l;G(h,q,d,s,z,bd);G(h,u,bc,y,z,r);u=c+0.0625;G(h,u,bc,y,p,r);c=c+f+0.0625;G(h,c,d,s,p,bd);G(h,c,d,t,z,bd);G(h,u,bc,x,z,r);c=e+0.0625;G(h,v,bc,c,p,r);u=v+f;q=c+g;G(h,u,d,q,p,bd);f=w+f;G(h,f,d,q,z,bd);G(h,w,bc,c,z,r);c=e-0.0625;G(h,w,bc,c,p,r);e=c+g;G(h,f,d,e,p,bd);G(h,u,d,e,z,bd);G(h,v,bc,c,z,r);}
function Ui(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;BA();g=BeJ;h=b.eW(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.44999998807907104;q=d+0.44999998807907104;d=f+0.5;r=d-0.44999998807907104;s=d+0.44999998807907104;d=e+1.0;G(g,p,d,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,q,e,s,m,o);G(g,q,d,s,m,n);G(g,q,d,s,l,n);G(g,q,e,s,l,o);G(g,p,e,r,m,o);G(g,p,d,r,m,n);G(g,p,d,s,l,n);G(g,p,e,s,l,o);G(g,q,e,r,m,o);G(g,q,d,r,m,n);G(g,
q,d,r,l,n);G(g,q,e,r,l,o);G(g,p,e,s,m,o);G(g,p,d,s,m,n);}
function OJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeJ;h=b.eW(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.25;q=d+0.25;f=f+0.5;r=f-0.5;s=f+0.5;t=e+1.0;G(g,p,t,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,p,e,s,m,o);G(g,p,t,s,m,n);G(g,p,t,s,l,n);G(g,p,e,s,l,o);G(g,p,e,r,m,o);G(g,p,t,r,m,n);G(g,q,t,s,l,n);G(g,q,e,s,l,o);G(g,q,e,r,m,o);G(g,q,t,r,m,n);G(g,q,t,r,l,n);G(g,q,e,r,l,o);G(g,q,e,s,m,o);G(g,q,t,s,m,n);p
=d-0.5;d=d+0.5;q=f-0.25;f=f+0.25;G(g,p,t,q,l,n);G(g,p,e,q,l,o);G(g,d,e,q,m,o);G(g,d,t,q,m,n);G(g,d,t,q,l,n);G(g,d,e,q,l,o);G(g,p,e,q,m,o);G(g,p,t,q,m,n);G(g,d,t,f,l,n);G(g,d,e,f,l,o);G(g,p,e,f,m,o);G(g,p,t,f,m,n);G(g,p,t,f,l,n);G(g,p,e,f,l,o);G(g,d,e,f,m,o);G(g,d,t,f,m,n);}
function AB1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w
=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeJ;g=a.F;h=d+1|0;i=1;$p=1;case 1:$z=b.pF(g,c,h,e,i);if(C()){break _;}h=$z;g=a.F;i=d-1|0;j=0;$p=2;case 2:$z=b.pF(g,c,i,e,j);if(C()){break _;}j=$z;k=$rt_createBooleanArray(4).data;l=0;g=a.F;m=e-1|0;n=2;$p=3;case 3:$z=b.pF(g,c,d,m,n);if(C()){break _;}n=$z;k[l]=n;n=1;g
=a.F;o=e+1|0;l=3;$p=4;case 4:$z=b.pF(g,c,d,o,l);if(C()){break _;}l=$z;k[n]=l;n=2;g=a.F;p=c-1|0;l=4;$p=5;case 5:$z=b.pF(g,p,d,e,l);if(C()){break _;}l=$z;k[n]=l;n=3;g=a.F;q=c+1|0;l=5;$p=6;case 6:$z=b.pF(g,q,d,e,l);if(C()){break _;}l=$z;k[n]=l;if(!h&&!j&&!k[0]&&!k[1]&&!k[2]&&!k[3])return 0;r=0;s=0.5;t=1.0;u=0.800000011920929;v=0.6000000238418579;w=0.0;x=1.0;y=b.b$;g=a.F;$p=7;case 7:$z=g.eG(c,d,e);if(C()){break _;}z=$z;$p=8;case 8:$z=APw(a,c,d,e,y);if(C()){break _;}ba=$z;$p=9;case 9:$z=APw(a,c,d,o,y);if(C()){break _;}bb
=$z;$p=10;case 10:$z=APw(a,q,d,o,y);if(C()){break _;}bc=$z;$p=11;case 11:$z=APw(a,q,d,e,y);if(C()){break _;}bd=$z;if(!a.dO&&!h){if(!a.dO&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;a:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eW(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dO)break a;if(k[i])break a;i=i+1|0;}b.cL=w;b.cE=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn
=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;}r=1;bx=b.eW(1,z);g=a.F;$p=12;case 12:$z=A6e(g,c,d,e,y);if(C()){break _;}by=$z;bm=by;h=R(bm,(-999.0));if(h>0)bx=b.eW(2,z);n=(bx&15)<<4;l=bx&240;by=(n+8.0)/256.0;bz=(l+8.0)/256.0;if(h<0)bm=0.0;else{by=(n+16|0)/256.0;bz=(l+16|0)/256.0;}bn=Bq(bm)*8.0/256.0;bo=BC(bm)*8.0/256.0;g=a.F;$p=14;continue _;case 13:$z
=b.Ct(g,c,i,e);if(C()){break _;}bp=$z;bm=s*bp;Cq(f,bm,bm,bm);HD(a,b,c,d,e,b.ci(0));r=1;i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;b:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eW(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dO)break b;if(k[i])break b;i=i+1|0;}b.cL=w;b.cE=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=
((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;case 14:$z=b.Ct(g,c,d,e);if(C()){break _;}bi=$z;bm=t*bi;Cq(f,bm,bm,bm);bA=c+0|0;bm=d;br=bm+ba;bu=e+0|0;bB=bo;bf=by-bB;bw=bn;bC=bf-bw;bs=bz-bB;G(f,bA,br,bu,bC,bs+bw);bC=bm+bb;bv=o;bf=bf+bw;br=bz+bB;G(f,bA,bC,bv,bf,br+bw);bA=q;bf=bm+bc;by=by+bB;G(f,bA,bf,bv,by+bw,br-bw);G(f,bA,bm+bd,bu,by-bw,bs-bw);if(!a.dO&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;c:{while(i<4){h=!i?m:e;n=R(i,
1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eW(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dO)break c;if(k[i])break c;i=i+1|0;}b.cL=w;b.cE=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;case 15:$z
=b.Ct(g,o,d,h);if(C()){break _;}bt=$z;bt=t*(l>=0?bt*v:bt*u);Cq(f,bt,bt,bt);bC=bo;by=be+bm;bA=s;G(f,bC,by,bA,br,bu);by=bp;bu=be+bn;bB=bq;G(f,by,bu,bB,bs,bv);G(f,by,bf,bB,bs,bw);G(f,bC,bf,bA,br,bw);c:{while(true){i=i+1|0;if(i>=4)break;h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eW(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dO)break c;if(k[i])break c;}b.cL=w;b.cE=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp
=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p);}
function APw(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=0.0;h=0;i=c+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;case 1:$z=l.oJ(j,i,k);if(C()){break _;}l=$z;if(l===e)return 1.0;l=a.F;$p=2;case 2:$z=l.oJ(j,c,k);if(C()){break _;}l=$z;if(l===e){l=a.F;$p=3;continue _;}if(!l.du()){g=g+1.0;f=f+1|0;}h=h+1|0;if(h
>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;case 3:$z=l.eG(j,c,k);if(C()){break _;}m=$z;if(!(m<8&&m)){g=g+Js(m)*10.0;f=f+10|0;}g=g+Js(m);f=f+1|0;h=h+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0.5;h=1.0;i=0.800000011920929;j=0.6000000238418579;BA();k=BeJ;Bz(k);$p=1;case 1:$z=b.Ct(c,d,e,f);if(C()){break _;}l=$z;m=e-1|0;$p=2;case 2:$z=b.Ct(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;n=g*n;Cq(k,n,n,n);HD(a,b,(-0.5),(-0.5),(-0.5),b.ci(0));m=e+1|0;$p=3;case 3:$z
=b.Ct(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;h=h*n;Cq(k,h,h,h);JD(a,b,(-0.5),(-0.5),(-0.5),b.ci(1));m=f-1|0;$p=4;case 4:$z=b.Ct(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);JT(a,b,(-0.5),(-0.5),(-0.5),b.ci(2));m=f+1|0;$p=5;case 5:$z=b.Ct(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);J9(a,b,(-0.5),(-0.5),(-0.5),b.ci(3));m=d-1|0;$p=6;case 6:$z=b.Ct(c,m,e,f);if(C()){break _;}h=$z;if(h<l)h=l;h=j*h;Cq(k,h,h,h);JN(a,b,(-0.5),(-0.5),(-0.5),b.ci(4));d=d+1|0;$p=7;case 7:$z=b.Ct(c,d,e,
f);if(C()){break _;}h=$z;if(h>=l)l=h;h=j*l;Cq(k,h,h,h);KQ(a,b,(-0.5),(-0.5),(-0.5),b.ci(5));Br(k);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ABR(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;$p=1;case 1:$z=ALr(a,b,c,d,e,f,f,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ALr(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();i=BeJ;j=0;k=0.5*f;l=1.0*f;m=0.800000011920929*f;n=0.6000000238418579*f;o=0.5
*g;p=1.0*g;q=0.800000011920929*g;r=0.6000000238418579*g;s=0.5*h;t=1.0*h;u=0.800000011920929*h;v=0.6000000238418579*h;w=a.F;$p=1;case 1:$z=b.Ct(w,c,d,e);if(C()){break _;}x=$z;if(a.dO){w=a.F;y=d-1|0;$p=2;continue _;}w=a.F;z=d-1|0;y=0;$p=3;continue _;case 2:$z=b.Ct(w,c,y,e);if(C()){break _;}ba=$z;if(BgB.data[b.b]>0)ba=1.0;Cq(i,k*ba,o*ba,s*ba);bb=c;bc=d;bd=e;w=a.F;y=0;$p=4;continue _;case 3:$z=b.pF(w,c,z,e,y);if(C()){break _;}y=$z;if(y){w=a.F;y=d-1|0;$p=2;continue _;}if(a.dO){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y
=d+1|0;z=1;$p=6;continue _;case 4:$z=b.ug(w,c,d,e,y);if(C()){break _;}y=$z;HD(a,b,bb,bc,bd,y);j=1;if(a.dO){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y=d+1|0;z=1;$p=6;continue _;case 5:$z=b.Ct(w,c,y,e);if(C()){break _;}ba=$z;if(b.cE!==1.0&&!b.b$.nA())ba=x;if(BgB.data[b.b]>0)ba=1.0;Cq(i,l*ba,p*ba,t*ba);bb=c;bc=d;bd=e;w=a.F;y=1;$p=9;continue _;case 6:$z=b.pF(w,c,y,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=d+1|0;$p=5;continue _;}if(a.dO){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 7:$z=b.Ct(w,
c,d,y);if(C()){break _;}ba=$z;if(b.c$>0.0)ba=x;if(BgB.data[b.b]>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=2;$p=12;continue _;case 8:$z=b.pF(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e-1|0;$p=7;continue _;}if(a.dO){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 9:$z=b.ug(w,c,d,e,y);if(C()){break _;}y=$z;JD(a,b,bb,bc,bd,y);j=1;if(a.dO){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 10:$z=b.Ct(w,c,d,y);if(C()){break _;}ba=$z;if(b.dc<1.0)ba=x;if(BgB.data[b.b]
>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=3;$p=15;continue _;case 11:$z=b.pF(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e+1|0;$p=10;continue _;}if(a.dO){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 12:$z=b.ug(w,c,d,e,y);if(C()){break _;}y=$z;JT(a,b,bb,bc,bd,y);j=1;if(a.dO){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 13:$z=b.Ct(w,y,d,e);if(C()){break _;}ba=$z;if(b.c_>0.0)ba=x;if(BgB.data[b.b]>0)ba=1.0;Cq(i,n*ba,r*ba,v*ba);bb=c;bc=d;bd=e;w
=a.F;y=4;$p=18;continue _;case 14:$z=b.pF(w,y,d,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=c-1|0;$p=13;continue _;}if(a.dO){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 15:$z=b.ug(w,c,d,e,y);if(C()){break _;}y=$z;J9(a,b,bb,bc,bd,y);j=1;if(a.dO){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 16:$z=b.Ct(w,y,d,e);if(C()){break _;}ba=$z;if(b.db>=1.0)x=ba;if(BgB.data[b.b]>0)x=1.0;Cq(i,n*x,r*x,v*x);bb=c;bc=d;bd=e;i=a.F;y=5;$p=19;continue _;case 17:$z=b.pF(w,y,d,e,
z);if(C()){break _;}y=$z;if(!y)return j;w=a.F;y=c+1|0;$p=16;continue _;case 18:$z=b.ug(w,c,d,e,y);if(C()){break _;}y=$z;JN(a,b,bb,bc,bd,y);j=1;if(a.dO){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 19:$z=b.ug(i,c,d,e,y);if(C()){break _;}c=$z;KQ(a,b,bb,bc,bd,c);j=1;return j;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AFG(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;Bo(b,0.375,0.0,0.375,0.625,1.0,0.625);$p=1;case 1:ABR(a,b,c,d,e);if(C()){break _;}g=0;h=0;i=a.F;j=c-1|0;$p=2;case 2:$z=i.eh(j,d,e);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=c+1|0;$p=3;continue _;}g=1;i=a.F;j=e-1|0;$p=4;continue _;case 3:$z=i.eh(j,d,e);if(C()){break _;}j
=$z;if(j==b.b)g=1;i=a.F;j=e-1|0;$p=4;case 4:$z=i.eh(c,d,j);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=e+1|0;$p=5;continue _;}h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 5:$z=i.eh(c,d,j);if(C()){break _;}j=$z;if(j==b.b)h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if
(g){Bo(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 6:ABR(a,b,c,d,e);if(C()){break _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 7:ABR(a,b,c,d,e);if(C()){break _;}m=0.375;n
=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 8:ABR(a,b,c,d,e);if(C()){break _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;case 9:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AIu(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=a.F;$p=1;case 1:$z=g.eG(c,d,e);if(C()){break _;}h=$z;if(!h){Bo(b,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bo(b,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bo(b,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ABR(a,
b,c,d,e);if(C()){break _;}Bo(b,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 4:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 6:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 8:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.5,1.0,0.5,1.0);$p
=9;case 9:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKB(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeJ;g=b;h=0.5;i=1.0;j=0.800000011920929;k=0.6000000238418579;l=a.F;$p=1;case 1:$z=b.Ct(l,c,d,e);if(C()){break _;}m=$z;l=a.F;n=d-1|0;$p=2;case 2:$z=b.Ct(l,c,n,e);if(C()){break _;}o=$z;if(g.cL>0.0)o=m;if(BgB.data[b.b]
>0)o=1.0;h=h*o;Cq(f,h,h,h);p=c;q=d;r=e;l=a.F;n=0;$p=3;case 3:$z=b.ug(l,c,d,e,n);if(C()){break _;}n=$z;HD(a,b,p,q,r,n);l=a.F;n=d+1|0;$p=4;case 4:$z=b.Ct(l,c,n,e);if(C()){break _;}h=$z;if(g.cE<1.0)h=m;if(BgB.data[b.b]>0)h=1.0;i=i*h;Cq(f,i,i,i);l=a.F;n=1;$p=5;case 5:$z=b.ug(l,c,d,e,n);if(C()){break _;}n=$z;JD(a,b,p,q,r,n);l=a.F;n=e-1|0;$p=6;case 6:$z=b.Ct(l,c,d,n);if(C()){break _;}i=$z;if(g.c$>0.0)i=m;if(BgB.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=2;$p=7;case 7:$z=b.ug(l,c,d,e,n);if(C()){break _;}s=$z;if(s
<0){a.fp=1;s= -s;}JT(a,b,p,q,r,s);a.fp=0;l=a.F;n=e+1|0;$p=8;case 8:$z=b.Ct(l,c,d,n);if(C()){break _;}i=$z;if(g.dc<1.0)i=m;if(BgB.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=3;$p=9;case 9:$z=b.ug(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fp=1;s= -s;}J9(a,b,p,q,r,s);a.fp=0;l=a.F;n=c-1|0;$p=10;case 10:$z=b.Ct(l,n,d,e);if(C()){break _;}i=$z;if(g.c_>0.0)i=m;if(BgB.data[b.b]>0)i=1.0;i=k*i;Cq(f,i,i,i);l=a.F;n=4;$p=11;case 11:$z=b.ug(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fp=1;s= -s;}JN(a,b,p,q,r,s);a.fp=0;l=a.F;n
=c+1|0;$p=12;case 12:$z=b.Ct(l,n,d,e);if(C()){break _;}i=$z;if(g.db>=1.0)m=i;if(BgB.data[b.b]>0)m=1.0;i=k*m;Cq(f,i,i,i);l=a.F;n=5;$p=13;case 13:$z=b.ug(l,c,d,e,n);if(C()){break _;}c=$z;if(c<0){a.fp=1;c= -c;}KQ(a,b,p,q,r,c);a.fp=0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function HD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeJ;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.db*16.0-0.01)/256.0;j=i;m=(j+b.c$*16.0)/256.0;n=(j+b.dc*16.0-0.01)/256.0;if(!(b.c_>=0.0&&b.db<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c$>=0.0&&b.dc<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.c_;q=c+b.db;r=d+b.cL;s=e+b.c$;t=e+b.dc;G(g,j,r,t,k,n);G(g,j,r,s,k,m);G(g,q,r,s,l,m);G(g,q,r,t,l,n);}
function JD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeJ;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.db*16.0-0.01)/256.0;j=i;m=(j+b.c$*16.0)/256.0;n=(j+b.dc*16.0-0.01)/256.0;if(!(b.c_>=0.0&&b.db<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c$>=0.0&&b.dc<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.c_;q=c+b.db;r=d+b.cE;s=e+b.c$;t=e+b.dc;G(g,q,r,t,l,n);G(g,q,r,s,l,m);G(g,j,r,s,k,m);G(g,j,r,t,k,n);}
function JT(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeJ;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;j=(j+b.db*16.0-0.01)/256.0;l=i;m=(l+b.cL*16.0)/256.0;n=(l+b.cE*16.0-0.01)/256.0;if(!a.fp){l=j;j=k;k=l;}if(!(b.c_>=0.0&&b.db<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cE<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.c_;q=c+b.db;r=d+b.cL;s=d+b.cE;t=e+b.c$;G(g,l,s,t,k,m);G(g,q,s,t,j,m);G(g,q,r,t,j,n);G(g,l,r,t,k,n);}
function J9(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeJ;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;j=(j+b.db*16.0-0.01)/256.0;l=i;m=(l+b.cL*16.0)/256.0;n=(l+b.cE*16.0-0.01)/256.0;if(!a.fp){l=j;j=k;k=l;}if(!(b.c_>=0.0&&b.db<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cE<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.c_;q=c+b.db;r=d+b.cL;s=d+b.cE;t=e+b.dc;G(g,l,s,t,j,m);G(g,l,r,t,j,n);G(g,q,r,t,k,n);G(g,q,s,t,k,m);}
function JN(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeJ;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c$*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.cL*16.0)/256.0;n=(j+b.cE*16.0-0.01)/256.0;if(!a.fp){j=l;l=k;k=j;}if(!(b.c$>=0.0&&b.dc<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cE<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.c_;q=d+b.cL;r=d+b.cE;s=e+b.c$;t=e+b.dc;G(g,j,r,t,k,m);G(g,j,r,s,l,m);G(g,j,q,s,l,n);G(g,j,q,t,k,n);}
function KQ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeJ;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c$*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.cL*16.0)/256.0;n=(j+b.cE*16.0-0.01)/256.0;if(!a.fp){j=l;l=k;k=j;}if(!(b.c$>=0.0&&b.dc<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cE<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.db;q=d+b.cL;r=d+b.cE;s=e+b.c$;t=e+b.dc;G(g,j,q,t,l,n);G(g,j,q,s,k,n);G(g,j,r,s,k,m);G(g,j,r,t,l,m);}
function GW(a,b){var c,d;a:{BA();c=BeJ;d=b.ek();if(d){if(d==1){Bz(c);Cj(0.0,(-1.0),0.0);Ui(a,b,(-1),(-0.5),(-0.5),(-0.5));Br(c);}else if(d==6){Bz(c);Cj(0.0,(-1.0),0.0);OJ(a,b,(-1),(-0.5),(-0.5),(-0.5));Br(c);}else{if(d!=2){if(d==3)break a;if(d!=5)break a;else break a;}Bz(c);Cj(0.0,(-1.0),0.0);GF(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Br(c);}}else{Bw((-0.5),(-0.5),(-0.5));Bz(c);Cj(0.0,(-1.0),0.0);HD(a,b,0.0,0.0,0.0,b.ci(0));Br(c);Bz(c);Cj(0.0,1.0,0.0);JD(a,b,0.0,0.0,0.0,b.ci(1));Br(c);Bz(c);Cj(0.0,0.0,(-1.0));JT(a,
b,0.0,0.0,0.0,b.ci(2));Br(c);Bz(c);Cj(0.0,0.0,1.0);J9(a,b,0.0,0.0,0.0,b.ci(3));Br(c);Bz(c);Cj((-1.0),0.0,0.0);JN(a,b,0.0,0.0,0.0,b.ci(4));Br(c);Bz(c);Cj(1.0,0.0,0.0);KQ(a,b,0.0,0.0,0.0,b.ci(5));Br(c);Bw(0.5,0.5,0.5);}}}
function QD(){var a=this;D.call(a);a.jg=null;a.hl=null;a.f1=0;a.f0=0;a.pD=0.0;a.m0=0.0;a.pC=0.0;a.b1=0.0;a.bY=0.0;a.bV=0.0;a.wm=0;a.lQ=0;a.lz=0;a.iP=0;a.BT=0;}
function BK(a,b){var c=new QD();A9g(c,a,b);return c;}
function A9g(a,b,c){a.wm=0;a.lQ=0;a.lz=0;a.iP=1;a.BT=0;a.f1=b;a.f0=c;}
function BG(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;a.jg=J(ER,8);a.hl=J(Fv,6);i=b+e;j=c+f;k=d+g;l=b-h;m=c-h;n=d-h;d=i+h;j=j+h;h=k+h;if(!a.lz){b=l;l=d;d=b;}a:{o=G2(d,m,n,0.0,0.0);p=G2(l,m,n,0.0,8.0);q=G2(l,j,n,8.0,8.0);r=G2(d,j,n,8.0,0.0);s=G2(d,m,h,0.0,0.0);t=G2(l,m,h,0.0,8.0);u=G2(l,j,h,8.0,8.0);v=G2(d,j,h,8.0,0.0);a.jg.data[0]=o;a.jg.data[1]=p;a.jg.data[2]=q;a.jg.data[3]=r;a.jg.data[4]=s;a.jg.data[5]=t;a.jg.data[6]=u;a.jg.data[7]=v;w=a.hl.data;x=new Fv;y=J(ER,4);z=y.data;z[0]=t;z[1]=p;z[2]
=q;z[3]=u;Hf(x,y,(a.f1+g|0)+e|0,a.f0+g|0,((a.f1+g|0)+e|0)+g|0,(a.f0+g|0)+f|0);w[0]=x;z=a.hl.data;x=new Fv;w=J(ER,4);y=w.data;y[0]=o;y[1]=s;y[2]=v;y[3]=r;Hf(x,w,a.f1+0|0,a.f0+g|0,a.f1+g|0,(a.f0+g|0)+f|0);z[1]=x;z=a.hl.data;x=new Fv;w=J(ER,4);y=w.data;y[0]=t;y[1]=s;y[2]=o;y[3]=p;Hf(x,w,a.f1+g|0,a.f0+0|0,(a.f1+g|0)+e|0,a.f0+g|0);z[2]=x;z=a.hl.data;x=new Fv;w=J(ER,4);y=w.data;y[0]=q;y[1]=r;y[2]=v;y[3]=u;Hf(x,w,(a.f1+g|0)+e|0,a.f0+0|0,((a.f1+g|0)+e|0)+e|0,a.f0+g|0);z[3]=x;w=a.hl.data;x=new Fv;y=J(ER,4);z=y.data;z[0]
=p;z[1]=o;z[2]=r;z[3]=q;Hf(x,y,a.f1+g|0,a.f0+g|0,(a.f1+g|0)+e|0,(a.f0+g|0)+f|0);w[4]=x;z=a.hl.data;r=new Fv;w=J(ER,4);y=w.data;y[0]=s;y[1]=t;y[2]=u;y[3]=v;Hf(r,w,((a.f1+g|0)+e|0)+g|0,a.f0+g|0,(((a.f1+g|0)+e|0)+g|0)+e|0,(a.f0+g|0)+f|0);z[5]=r;if(a.lz){ba=0;while(true){if(ba>=a.hl.data.length)break a;ACS(a.hl.data[ba]);ba=ba+1|0;}}}}
function BJ(a,b,c,d){a.pD=b;a.m0=c;a.pC=d;}
function B_(a,b){var c,d;if(!a.BT&&a.iP){if(!a.wm){a.lQ=IW(1);FF(a.lQ,4864);BA();c=BeJ;d=0;while(d<a.hl.data.length){APA(a.hl.data[d],c,b);d=d+1|0;}Ee();a.wm=1;}if(a.b1===0.0&&a.bY===0.0&&a.bV===0.0){if(a.pD===0.0&&a.m0===0.0&&a.pC===0.0)FQ(a.lQ);else{Bw(a.pD*b,a.m0*b,a.pC*b);FQ(a.lQ);Bw( -a.pD*b, -a.m0*b, -a.pC*b);}}else{B3();Bw(a.pD*b,a.m0*b,a.pC*b);if(a.bV!==0.0)Bv(a.bV*57.2957763671875,0.0,0.0,1.0);if(a.bY!==0.0)Bv(a.bY*57.2957763671875,0.0,1.0,0.0);if(a.b1!==0.0)Bv(a.b1*57.2957763671875,1.0,0.0,0.0);FQ(a.lQ);BD();}}}
function E4(){D.call(this);}
function AOy(a,b){Q4(a,b,0,b.data.length);}
function ATd(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.nJ(f[c]);e=e+1|0;c=g;}}
function A8U(a){return;}
function A9I(a){return;}
function F_(){E4.call(this);this.fm=null;}
function Bhh(a){var b=new F_();K9(b,a);return b;}
function K9(a,b){a.fm=b;}
function KO(a){var $$je;a:{try{a.fm.ls();break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}}a.fm.tM();}
function AA2(){var a=this;F_.call(a);a.GE=0;a.uH=0;a.hE=null;a.nP=null;a.AQ=null;}
function AYH(a,b){var c=new AA2();A$z(c,a,b);return c;}
function A$z(a,b,c){K9(a,b);b=new T;W(b);a.hE=b;a.nP=$rt_createCharArray(32);a.GE=c;a.AQ=A1E();}
function VM(a,b,c,d){var $$je;if(a.fm===null)a.uH=1;if(!(a.uH?0:1))return;a:{try{a.fm.gu(b,c,d);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}a.uH=1;}}
function TG(a,b,c,d){var e,f,g,h,i;e=b.data;f=AM2(b,c,d-c|0);e=$rt_createByteArray(DB(16,CB(e.length,1024)));g=AAo(e);h=AGU(ACO(AG2(a.AQ),Bf6),Bf6);while(true){i=IO(AJb(h,f,g,1));VM(a,e,0,g.bk);EA(g);if(!i)break;}while(true){i=IO(XW(h,g));VM(a,e,0,g.bk);EA(g);if(!i)break;}}
function AKD(a,b){a.nP.data[0]=b;TG(a,a.nP,0,1);}
function Ko(a,b){H(a.hE,b);J8(a);}
function ABJ(a,b){Dx(Be(a.hE,b),10);J8(a);}
function Cg(a,b){Dx(H(a.hE,b),10);J8(a);}
function ACg(a,b){Dx(FK(a.hE,b),10);J8(a);}
function APz(a){AKD(a,10);}
function J8(a){var b;b=a.hE.bZ<=a.nP.data.length?a.nP:$rt_createCharArray(a.hE.bZ);AAw(a.hE,0,a.hE.bZ,b,0);TG(a,b,0,a.hE.bZ);ANe(a.hE,0);}
function W_(){E4.call(this);}
function Bhi(){var a=new W_();A3q(a);return a;}
function A3q(a){return;}
function AYe(a,b){$rt_putStdout(b);}
function AE_(){Cb.call(this);this.Fp=null;}
function ALn(a){var b=new AE_();A02(b,a);return b;}
function A02(a,b){O(a);a.Fp=b;}
function MP(){var a=this;D.call(a);a.cf=null;a.B=0;a.N=0;a.G=Long_ZERO;a.uT=null;a.pM=0;a.ib=0;a.no=Long_ZERO;a.b8=null;a.jv=null;a.f9=null;}
function Bhj(){var a=new MP();OL(a);return a;}
function OL(a){a.f9=A9R();}
function AAE(a,b,c,d){a.uT=b;a.pM=c;a.ib=d;}
function AJ7(a,b,c,d,e){var f;if(d<=0&&e&&a.cf!==null)return;if(a.N>0&&e){f=$rt_createByteArray(a.N+d|0);Di(a.cf,a.B,f,0,a.N);Di(b,c,f,a.N,d);a.cf=f;a.B=0;a.N=a.N+d|0;}else{a.cf=b;a.B=c;a.N=d;}}
function Ue(){MP.call(this);this.rP=0;}
function Bhk(){var a=new Ue();A28(a);return a;}
function A28(a){OL(a);a.rP=0;AAR(a);}
function AAR(a){return ACF(a,15);}
function ACF(a,b){return R0(a,b,0);}
function R0(a,b,c){var d;a.rP=0;d=new LH;d.rO=Long_fromInt(-1);d.iF=(-1);d.xG=$rt_createByteArray(4);d.cI=null;d.fX=null;d.E=a;a.jv=d;d=a.jv;if(c)b= -b;return Xx(d,b);}
function AF3(a,b){var c;if(a.jv===null)return (-2);c=AGB(a.jv,b);if(c==1)a.rP=1;return c;}
function Ye(a){return a.jv.bQ!=12?0:1;}
function In(){var a=this;D.call(a);a.Ck=null;a.oO=0.0;a.pL=0.0;}
function Ie(a,b,c){var d=new In();O1(d,a,b,c);return d;}
function O1(a,b,c,d){a.Ck=b;a.oO=c;a.pL=d;}
function AMK(a){return a.oO;}
function Yc(a){return a.pL;}
function Kf(a){var b;b=new T;W(b);return U(H(H(b,B(252)),a.Ck));}
function AHm(){In.call(this);}
function A_0(a,b,c){var d=new AHm();AZp(d,a,b,c);return d;}
function AZp(a,b,c,d){O1(a,b,c,d);}
function ACo(){In.call(this);}
function Bb$(a,b,c){var d=new ACo();A7K(d,a,b,c);return d;}
function A7K(a,b,c,d){O1(a,b,c,d);}
function LO(){P.call(this);}
function Bbd(a,b){var c=new LO();AI5(c,a,b);return c;}
function AI5(a,b,c){C8(a,b,c,Bg9);}
function A8G(a,b,c){L();return BeX.b;}
function Z2(){P.call(this);}
function BbG(a){var b=new Z2();AY0(b,a);return b;}
function AY0(a,b){D0(a,b,Bhl);a.bb=3;Ff(a,1);}
function A7p(a,b){return b==1?0:b?3:2;}
function ADn(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=Xv(b,c,g,e);if(C()){break _;}h=$z;if(h>=4){$p=2;continue _;}$p=3;continue _;case 2:$z=Xv(b,c,g,e);if(C()){break _;}g=$z;if(g<9)return;h=(c+E(f,3)|0)-1|0;g=(d+E(f,5)|0)-3|0;i=(e+E(f,3)|0)-1|0;$p=4;continue _;case 3:$z=ABX(b,c,g,e);if(C()){break _;}j=$z;if(!j.sf()){$p=2;continue _;}if(E(f,
4))return;L();h=BeQ.b;$p=6;continue _;case 4:$z=ACt(b,h,g,i);if(C()){break _;}c=$z;L();if(c!=BeQ.b)return;c=g+1|0;$p=5;case 5:$z=Xv(b,h,c,i);if(C()){break _;}d=$z;if(d<4)return;$p=7;continue _;case 6:APu(b,c,d,e,h);if(C()){break _;}return;case 7:$z=ABX(b,h,c,i);if(C()){break _;}f=$z;if(f.sf())return;c=BeP.b;$p=8;case 8:APu(b,h,g,i,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AZ6(a,b,c){L();return BeQ.dU(0,c);}
function AHS(){P.call(this);}
function A_5(a,b){var c=new AHS();AXw(c,a,b);return c;}
function AXw(a,b,c){C8(a,b,c,Bhl);}
function B8(){D.call(this);}
var Bf9=null;var Bhl=null;var Bg$=null;var Bg9=null;var Bhm=null;var BfO=null;var BfP=null;var Bhn=null;var Bho=null;var Bhp=null;var Bha=null;var Bhq=null;var Bhr=null;var Bhs=null;var Bg_=null;var Bht=null;var Bhu=null;function Bhv(){var a=new B8();AQj(a);return a;}
function AQj(a){return;}
function A8k(a){return 0;}
function A0W(a){return 1;}
function A7P(a){return 1;}
function A5r(a){return 1;}
function AP2(){Bf9=new Og;Bhl=new B8;Bg$=new B8;Bg9=new B8;Bhm=new B8;BfO=new LZ;BfP=new LZ;Bhn=new B8;Bho=new N3;Bhp=new B8;Bha=new B8;Bhq=new Og;Bhr=new B8;Bhs=new N3;Bg_=new B8;Bht=new B8;Bhu=new B8;}
function FZ(){P.call(this);}
function A3i(a,b){var c=new FZ();Lv(c,a,b);return c;}
function Lv(a,b,c){D0(a,b,Bho);a.bb=c;Ff(a,1);Bo(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function ALS(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;return a.rl(c);default:E_();}}C3().s(a,b,c,d,e,$p);}
function AYi(a,b){L();return b!=BeP.b&&b!=BeQ.b&&b!=Bg1.b?0:1;}
function AIE(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJn(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AD8(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJn(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJn(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.G7(b,c,d,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APu(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AN5(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Xv(b,c,d,e);if(C()){break _;}f=$z;if(f<8){$p=3;continue _;}d=d-1|0;$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;return !a.rl(c)?0:1;case 3:$z=AGd(b,c,d,e);if(C()){break _;}g=$z;if(!g)return 0;d=d-1|0;$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGj(a,b,c,d,e){return null;}
function A6k(a){return 0;}
function ATX(a){return 0;}
function A7u(a){return 1;}
function AMV(){FZ.call(this);}
function Bcs(a,b){var c=new AMV();A9C(c,a,b);return c;}
function A9C(a,b,c){Lv(a,b,c);Bo(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function AEf(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJn(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=Xv(b,c,g,e);if(C()){break _;}g=$z;if(g>=9&&!E(f,5)){$p=3;continue _;}return;case 3:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(g>=15){g=0;$p=4;continue _;}g=g+1|0;$p=6;continue _;case 4:ALq(b,c,d,e,g);if(C()){break _;}h=new Ra;$p=5;case 5:$z=AEJ(h,b,f,c,d,e);if(C()){break _;}g
=$z;if(g)return;g=a.b;$p=7;continue _;case 6:AKu(b,c,d,e,g);if(C()){break _;}return;case 7:ALq(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function HO(){P.call(this);this.qM=0;}
function Bhw(a,b){var c=new HO();PY(c,a,b);return c;}
function PY(a,b,c){C8(a,b,((c!==BfP?12:14)*16|0)+13|0,c);a.qM=1;if(c===BfP)a.qM=2;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);Ff(a,1);}
function Js(b){if(b>=8)b=0;return (b+1|0)/9.0;}
function AS9(a,b){return b&&b!=1?a.bb+1|0:a.bb;}
function AFe(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABX(b,c,d,e);if(C()){break _;}f=$z;if(f!==a.b$)return (-1);$p=2;case 2:$z=AEH(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AEb(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oJ(c,d,e);if(C()){break _;}f=$z;if(f!==a.b$)return (-1);$p=2;case 2:$z=b.eG(c,d,e);if(C()){break _;}g=$z;if(g>=8)g=0;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function A$9(a){return 0;}
function A$r(a){return 0;}
function A8D(a,b,c){return c&&!b?1:0;}
function ARu(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oJ(c,d,e);if(C()){break _;}g=$z;if(g===a.b$)c=0;else{if(f!=1){$p=2;continue _;}c=1;}return c;case 2:$z=AGt(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yb(a,b,c,d,e){return null;}
function A7X(a){return 4;}
function A3c(a,b,c){return 0;}
function A5$(a,b){return 0;}
function AIK(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=BY(0.0,0.0,0.0);$p=1;case 1:$z=AEb(a,b,c,d,e);if(C()){break _;}g=$z;h=0;i=c-1|0;j=e-1|0;k=d-1|0;l=g-8|0;m=d-d|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 2:$z=b.eG(c,d,e);if
(C()){break _;}n=$z;if(n<8)return CD(f);k=0;n=2;$p=3;case 3:$z=ARu(a,b,c,d,j,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=e+1|0;p=3;$p=4;continue _;}k=1;if(!k){n=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 4:$z=ARu(a,b,c,d,n,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n
=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 5:$z=ARu(a,b,i,d,e,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k
=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 6:$z=ARu(a,b,n,d,e,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 7:$z=AEb(a,b,n,d,o);if(C()){break _;}p=$z;if(p<0){$p=8;continue _;}if(p>=0){q=p-g|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1
|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;continue _;case 8:$z=AEb(a,b,n,k,o);if(C()){break _;}p=$z;if(p>=0){q=p-l|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 9:$z=ARu(a,b,c,n,j,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d
=d+1|0;n=5;$p=12;continue _;case 10:$z=ARu(a,b,c,n,p,q);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 11:$z=ARu(a,b,i,n,e,p);if(C()){break _;}n=$z;if(n)k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;case 12:$z=ARu(a,b,c,d,e,n);if(C()){break _;}c=$z;if(c)k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,
m,n,o,p,q,$p);}
function ANa(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIK(a,b,c,d,e);if(C()){break _;}h=$z;g.x=g.x+h.x;g.z=g.z+h.z;g.w=g.w+h.w;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AU1(a){return a.b$===BfO?5:a.b$!==BfP?0:30;}
function AEt(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sJ(c,d,e);if(C()){break _;}f=$z;d=d+1|0;$p=2;case 2:$z=b.sJ(c,d,e);if(C()){break _;}g=$z;if(f>g)g=f;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQ8(a,b,c,d,e,f){return;}
function A$o(a){return 0;}
function YB(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.b$===BfO&&!E(f,64)){$p=2;continue _;}if(a.b$!==BfP)return;g=d+1|0;$p=1;case 1:$z=ABX(b,c,g,e);if(C()){break _;}h=$z;if(h!==Bf9)return;$p=3;continue _;case 2:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(g>0&&g<8)Ex(b,c+0.5,d+0.5,e+0.5,B(253),N(f)*0.25+0.75,N(f)*1.0+0.5);if(a.b$!==BfP)return;g=d+1|0;$p=1;continue _;case 3:$z=AAz(b,
c,g,e);if(C()){break _;}g=$z;if(!g&&!E(f,100))BV(b,B(254),c+N(f),d+a.cE,e+N(f),0.0,0.0,0.0);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A6e(b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:g=null;if(f===BfO){L();g=BfW;$p=1;continue _;}if(f!==BfP)return g.x===0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;L();f=BfX;$p=2;continue _;case 1:$z=AIK(g,b,c,d,e);if(C()){break _;}g=$z;if(f!==BfP)return g.x===0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;L();f=BfX;$p=2;case 2:$z=AIK(f,b,c,d,e);if(C()){break _;}g=$z;return g.x===
0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;default:E_();}}C3().s(b,c,d,e,f,g,$p);}
function ARO(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO8(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ALd(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO8(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AO8(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b&&a.b$===BfP){f=0;g=e-1|0;$p=2;continue _;}return;case 2:$z=ABX(b,c,d,g);if(C()){break _;}h=$z;if(h===BfO)f=1;if(!f){g=e+1|0;$p=3;continue _;}f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 3:$z
=ABX(b,c,d,g);if(C()){break _;}h=$z;if(h===BfO)f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 4:$z=ABX(b,g,d,e);if(C()){break _;}h=$z;if(h===BfO)f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 5:$z=ABX(b,g,d,e);if(C()){break _;}h=$z;if(h===BfO)f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 6:$z=ABX(b,c,g,e);if(C()){break _;}h
=$z;if(h===BfO)f=1;if(!f)return;$p=7;case 7:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(!g){L();f=Bfj.b;$p=8;continue _;}if(g>4){JP(a,b,c,d,e);return;}L();f=BeX.b;$p=9;continue _;case 8:APu(b,c,d,e,f);if(C()){break _;}JP(a,b,c,d,e);return;case 9:APu(b,c,d,e,f);if(C()){break _;}JP(a,b,c,d,e);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function JP(a,b,c,d,e){var f,g,h,i;Ex(b,c+0.5,d+0.5,e+0.5,B(215),0.5,2.5999999046325684+(N(b.r)-N(b.r))*0.800000011920929);f=0;g=c;h=d+1.2;i=e;while(f<8){BV(b,B(255),g+BP(),h,i+BP(),0.0,0.0,0.0);f=f+1|0;}}
function AEe(){var a=this;HO.call(a);a.mh=0;a.hf=null;a.cS=null;}
function AUg(a,b){var c=new AEe();AY7(c,a,b);return c;}
function AY7(a,b,c){PY(a,b,c);a.mh=0;a.hf=$rt_createBooleanArray(4);a.cS=$rt_createIntArray(4);}
function AG$(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;g=a.b+1|0;$p=2;case 2:AJk(b,c,d,e,g,f);if(C()){break _;}Jh(b,c,d,e,c,d,e);return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AON(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFe(a,b,c,d,e);if(C()){break _;}g=$z;h=1;if(g<=0){$p=2;continue _;}i=(-100);a.mh=0;j=c-1|0;$p=3;continue _;case 2:AG$(a,b,c,d,e);if(C()){break _;}j=d-1|0;$p=7;continue _;case 3:$z=AOK(a,b,j,d,e,i);if(C()){break _;}j=$z;k=c+1|0;$p=4;case 4:$z=AOK(a,b,k,d,e,j);if
(C()){break _;}j=$z;k=e-1|0;$p=5;case 5:$z=AOK(a,b,c,d,k,j);if(C()){break _;}j=$z;k=e+1|0;$p=6;case 6:$z=AOK(a,b,c,d,k,j);if(C()){break _;}j=$z;k=j+a.qM|0;if(!(k<8&&j>=0))k=(-1);j=d+1|0;$p=8;continue _;case 7:$z=ALU(a,b,c,j,e);if(C()){break _;}k=$z;if(!k){if(g<0)return;if(!g){$p=12;continue _;}$p=13;continue _;}if(g>=8){d=a.b;$p=10;continue _;}d=a.b;k=g+8|0;$p=9;continue _;case 8:$z=AFe(a,b,c,j,e);if(C()){break _;}l=$z;if(l>=0){$p=11;continue _;}if(a.mh>=2&&a.b$===BfO)k=0;if(a.b$===BfP&&g<8&&k<8&&k>g&&E(f,4))
{h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 9:AIW(b,c,j,e,d,k);if(C()){break _;}return;case 10:AIW(b,c,j,e,d,g);if(C()){break _;}return;case 11:$z=AFe(a,b,c,j,e);if(C()){break _;}k=$z;if(k<8)k=k+8|0;if(a.mh>=2&&a.b$===BfO)k=0;if(a.b$===BfP&&g<8&&k<8&&k>g&&E(f,4)){h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 12:$z=AK1(a,b,c,d,e);if(C()){break _;}m
=$z;l=g+a.qM|0;if(g>=8)l=1;if(l>=8)return;m=m.data;if(m[0]){j=c-1|0;$p=14;continue _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 13:$z=ACl(a,b,c,j,e);if(C()){break _;}j=$z;if(!j)return;$p=12;continue _;case 14:AO9(a,b,j,d,e,l);if(C()){break _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 15:AO9(a,b,j,d,e,l);if(C()){break _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e
=e+1|0;$p=21;continue _;case 16:AO9(a,b,c,d,j,l);if(C()){break _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 17:AG$(a,b,c,d,e);if(C()){break _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 18:AKu(b,c,d,e,k);if(C()){break _;}Fm(b,c,d,e,a.b);j=a.b;$p=19;case 19:AHL(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 20:APu(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 21:AO9(a,b,c,d,e,l);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AO9(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALU(a,b,c,d,e);if(C()){break _;}g=$z;if(!g)return;$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}g=$z;if(g>0){if(a.b$!==BfP){L();h=BeN.data[g];$p=4;continue _;}JP(a,b,c,d,e);}g=a.b;$p=3;case 3:AIW(b,c,d,e,g,f);if(C()){break _;}return;case 4:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;$p=5;case 5:h.IK(b,c,d,e,g);if(C()){break _;}g
=a.b;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANQ(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=1000;i=0;j=R(g,1);k=R(g,3);l=R(g,2);m=c-1|0;n=e-1|0;o=d-1|0;p=R(f,4);q=f+1|0;a:{while(i<4){if(!(!i&&!j)){r=R(i,1);if(!(!r&&!g)){s=R(i,2);if(!(!s&&!k)){t=R(i,3);if(t)break a;if
(l)break a;}}}i=i+1|0;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;case 1:$z=ACl(a,b,u,d,r);if(C()){break _;}t=$z;if(!t){$p=2;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;continue _;case 2:$z=ABX(b,u,d,r);if(C()){break _;}v=$z;if(v!==a.b$){$p=3;continue _;}$p=4;continue _;case 3:$z=ACl(a,b,u,o,r);if(C()){break _;}t=$z;if(!t)return f;if
(p<0){$p=5;continue _;}c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;case 4:$z=AEH(b,u,d,r);if(C()){break _;}t=$z;if(t){$p=3;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1
|0;$p=1;continue _;case 5:$z=ANQ(a,b,u,d,r,q,i);if(C()){break _;}t=$z;if(t<h)h=t;c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AK1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;h=e-1|0;i=d-1|0;if(f>=4){c=a.cS.data[0];j=1;while(j<4){if(a.cS.data[j]<c)c=a.cS.data[j];j=j+1|0;}d=0;while(d<4){k=a.hf;k.data[d]=a.cS.data[d]!=c?0:1;d=d+1|0;}return a.hf;}a.cS.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;case 1:$z
=ACl(a,b,l,d,m);if(C()){break _;}j=$z;if(!j){$p=2;continue _;}f=f+1|0;if(f>=4){c=a.cS.data[0];j=1;while(j<4){if(a.cS.data[j]<c)c=a.cS.data[j];j=j+1|0;}d=0;while(d<4){k=a.hf;k.data[d]=a.cS.data[d]!=c?0:1;d=d+1|0;}return a.hf;}a.cS.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;continue _;case 2:$z=ABX(b,l,d,m);if(C()){break _;}n=$z;if(n!==a.b$){$p=3;continue _;}$p=4;continue _;case 3:$z=ACl(a,b,l,i,m);if(C()){break _;}j=$z;if(j){k=a.cS.data;j=1;$p=5;continue _;}a.cS.data[f]=0;f=f+1|0;if(f>=
4){c=a.cS.data[0];j=1;while(j<4){if(a.cS.data[j]<c)c=a.cS.data[j];j=j+1|0;}d=0;while(d<4){k=a.hf;k.data[d]=a.cS.data[d]!=c?0:1;d=d+1|0;}return a.hf;}a.cS.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 4:$z=AEH(b,l,d,m);if(C()){break _;}j=$z;if(j){$p=3;continue _;}f=f+1|0;if(f>=4){c=a.cS.data[0];j=1;while(j<4){if(a.cS.data[j]<c)c=a.cS.data[j];j=j+1|0;}d=0;while(d<4){k=a.hf;k.data[d]=a.cS.data[d]!=c?0:1;d=d+1|0;}return a.hf;}a.cS.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f
==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 5:$z=ANQ(a,b,l,d,m,j,f);if(C()){break _;}j=$z;k[f]=j;f=f+1|0;if(f>=4){c=a.cS.data[0];j=1;while(j<4){if(a.cS.data[j]<c)c=a.cS.data[j];j=j+1|0;}d=0;while(d<4){k=a.hf;k.data[d]=a.cS.data[d]!=c?0:1;d=d+1|0;}return a.hf;}a.cS.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ACl(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;L();if(f!=Bg5.b&&f!=Bg4.b&&f!=Bf_.b){if(!f)return 0;return BeN.data[f].b$.du();}return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AOK(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFe(a,b,c,d,e);if(C()){break _;}g=$z;if(g<0)return f;if(!g)a.mh=a.mh+1|0;if(g>=8)g=0;if(f>=0&&g>=f)g=f;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALU(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABX(b,c,d,e);if(C()){break _;}f=$z;if(f===a.b$)c=0;else{if(f!==BfP){$p=2;continue _;}c=0;}return c;case 2:$z=ACl(a,b,c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AB0(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO8(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b)Fm(b,c,d,e,a.b);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AII(){HO.call(this);}
function AXE(a,b){var c=new AII();A2q(c,a,b);return c;}
function A2q(a,b,c){PY(a,b,c);Ff(a,0);}
function AGw(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO8(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return;$p=3;case 3:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;b.sj=1;f=a.b-1|0;$p=4;case 4:AJk(b,c,d,e,f,g);if(C()){break _;}Jh(b,c,d,e,c,d,e);Fm(b,c,d,e,a.b-1|0);b.sj=0;return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function I4(){P.call(this);}
var BeU=0;function BbB(a,b){var c=new I4();Ry(c,a,b);return c;}
function Ry(a,b,c){C8(a,b,c,Bhr);}
function ARM(a,b,c,d,e){Fm(b,c,d,e,a.b);}
function ASa(a,b,c,d,e,f){Fm(b,c,d,e,a.b);}
function APx(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ACt(b,c,g,e);if(C()){break _;}g=$z;if(!g)g=1;else{L();if(g==Bgn.b)g=1;else{f=BeN.data[g].b$;g=f===BfO?1:f!==BfP?0:1;}}if(g&&d>=0){f=new JJ;h=c+0.5;i=d+0.5;j=e+0.5;c=a.b;Fz(f,b);f.oN=0;f.hS=c;f.mz=1;D1(f,0.9800000190734863,0.9800000190734863);f.c3=f.eM/2.0;k
=h;l=i;m=j;CT(f,k,l,m);f.g=0.0;f.i=0.0;f.h=0.0;f.i7=0;f.bT=k;f.cR=l;f.bS=m;if(!BeU){$p=2;continue _;}if(!f.cQ){$p=3;continue _;}}return;case 2:AOf(b,f);if(C()){break _;}return;case 3:AML(f);if(C()){break _;}if(f.cQ)return;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function A3U(a){return 3;}
function ACK(){BeU=0;}
function AG3(){I4.call(this);}
function BbK(a,b){var c=new AG3();AVW(c,a,b);return c;}
function AVW(a,b,c){Ry(a,b,c);}
function A_k(a,b,c){if(E(c,10))b=a.b;else{BB();b=Bhx.cV;}return b;}
function YT(){P.call(this);}
function SG(a,b){var c=new YT();AZv(c,a,b);return c;}
function AZv(a,b,c){C8(a,b,c,Bg9);}
function A4l(a,b,c){b=a.b;L();if(b==Bfc.b){BB();b=Bhy.cV;}else if(a.b!=BgX.b)b=a.b;else{BB();b=Bhz.cV;}return b;}
function AZ5(a,b){return 1;}
function AFf(){P.call(this);}
function BcM(a){var b=new AFf();A_b(b,a);return b;}
function A_b(a,b){D0(a,b,Bg$);a.bb=20;}
function A8V(a,b){return 1;}
function ATb(a,b,c){L();return Be0.b;}
function AVv(a,b){return b==1?21:b?20:21;}
function LV(){P.call(this);this.rZ=0;}
function AQt(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eh(c,d,e);if(C()){break _;}g=$z;if(!a.rZ&&g==a.b)return 0;$p=2;case 2:$z=AGt(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACC(){LV.call(this);this.Cm=0;}
function BaG(a,b){var c=new ACC();A0Y(c,a,b);return c;}
function A0Y(a,b,c){C8(a,b,c,Bhn);a.rZ=0;a.Cm=c;Ff(a,1);}
function AIx(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ABX(b,c,g,e);if(C()){break _;}f=$z;if(f.du())return;h=c-2|0;i=c+2|0;j=d+1|0;k=e-2|0;l=e+2|0;while(h<=i){m=g;while(m<=j){n=k;if(n<=l){$p=5;continue _;}m=m+1|0;}h=h+1|0;}$p=2;case 2:$z=AEH(b,c,d,e);if(C()){break _;}i=$z;$p=3;case 3:Yd(a,
b,c,d,e,i);if(C()){break _;}i=0;$p=4;case 4:APu(b,c,d,e,i);if(C()){break _;}return;case 5:$z=ACt(b,h,m,n);if(C()){break _;}o=$z;L();if(o==Be0.b)return;n=n+1|0;while(n>l){m=m+1|0;while(m>j){h=h+1|0;if(h>i){$p=2;continue _;}m=g;}n=k;}continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AW2(a,b){return E(b,10)?0:1;}
function A5b(a,b,c){L();return Be5.b;}
function A2O(a){return a.rZ?0:1;}
function AKl(a,b){a.rZ=b;a.bb=a.Cm+(!b?1:0)|0;}
function ASo(a,b,c,d,e,f){return;}
function ALc(){P.call(this);}
function Ba8(a){var b=new ALc();A8S(b,a);return b;}
function A8S(a,b){D0(a,b,Bhp);a.bb=48;}
function AKI(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;if(k<=e){$p=1;continue _;}j=j+1|0;}f=f+1|0;}return;case 1:$z=ABX(b,f,j,k);if(C()){break _;}l=$z;k=k+1|0;a:while(true){if(k<=e){continue _;}j=j+1|0;while(j>d){f=f+1|0;if(f>g)break a;j=h;}k=i;}return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function ANs(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;if(l<=c){$p=1;continue _;}k=k+1|0;}f=f+1|0;}return;case 1:$z=ACt(b,f,k,l);if(C()){break _;}d=$z;$p=2;case 2:AHL(b,f,k,l,d);if(C()){break _;}l=l+1|0;a:while(true){if(l<=c){$p=1;continue _;}k=k+1|0;while(k>i){f
=f+1|0;if(f>g)break a;k=h;}l=j;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function M9(){P.call(this);this.Cx=0;}
function A$a(a){return 0;}
function Yt(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eh(c,d,e);if(C()){break _;}g=$z;if(!a.Cx&&g==a.b)return 0;$p=2;case 2:$z=AGt(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQk(){M9.call(this);}
function Ba4(a,b,c,d){var e=new AQk();A5e(e,a,b,c,d);return e;}
function A5e(a,b,c,d,e){C8(a,b,c,d);a.Cx=e;}
function AV4(a,b){return 0;}
function AHb(){FZ.call(this);}
function ATL(a,b){var c=new AHb();A$6(c,a,b);return c;}
function A$6(a,b,c){Lv(a,b,c);Bo(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AI4(a,b){L();return Bgy.data[b];}
function ADh(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Xv(b,c,d,e);if(C()){break _;}f=$z;if(f>13)return 0;d=d-1|0;$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;return !AI4(a,c)?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ABr(){P.call(this);}
function AEz(a,b){var c=new ABr();AXT(c,a,b);return c;}
function AXT(a,b,c){D0(a,b,Bhm);a.bb=c;}
function A4y(a,b){return b==1?a.bb-16|0:b?a.bb:a.bb+16|0;}
function Zd(){P.call(this);this.wy=0;}
function A9l(a,b){var c=new Zd();A6a(c,a,b);return c;}
function A6a(a,b,c){C8(a,b,6,Bg9);a.wy=c;if(!c)Bo(a,0.0,0.0,0.0,1.0,0.5,1.0);Gt(a,255);}
function A$J(a,b){return b>1?5:6;}
function A5Q(a){return a.wy;}
function ABA(a,b,c,d,e,f){L();}
function ABg(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();f=d-1|0;$p=1;case 1:$z=ACt(b,c,f,e);if(C()){break _;}g=$z;if(g!=BeS.b)return;g=0;$p=2;case 2:APu(b,c,d,e,g);if(C()){break _;}d=BeR.b;$p=3;case 3:APu(b,c,f,e,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZk(a,b,c){L();return BeS.b;}
function AW4(a){return a.wy;}
function ASA(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();if(a!==BeS){$p=1;continue _;}if(f==1)return 1;$p=2;continue _;case 1:AGt(a,b,c,d,e,f);if(C()){break _;}if(f==1)return 1;$p=2;case 2:$z=AGt(a,b,c,d,e,f);if(C()){break _;}g=$z;if(!g)c=0;else{if(f){$p=3;continue _;}c=1;}return c;case 3:$z=b.eh(c,d,e);if(C()){break _;}c=$z;return c==a.b?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AOe(){P.call(this);}
function BaH(a,b){var c=new AOe();A0p(c,a,b);return c;}
function A0p(a,b,c){C8(a,b,c,Bht);}
function A41(a,b){return !b?a.bb+2|0:b!=1?a.bb:a.bb+1|0;}
function AU9(a,b){return 0;}
function AGC(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=AWM(b,c+0.5,d+0.5,e+0.5);f.ho=E(b.r,f.ho/4|0)+(f.ho/8|0)|0;$p=1;case 1:AOf(b,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ASi(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=AWM(b,c+0.5,d+0.5,e+0.5);$p=1;case 1:AOf(b,g);if(C()){break _;}Dh(b,g,B(226),1.0,1.0);return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AC9(){P.call(this);}
function Bai(a,b){var c=new AC9();AUa(c,a,b);return c;}
function AUa(a,b,c){C8(a,b,c,Bg$);}
function A$$(a,b){return b>1?a.bb:4;}
function A4A(a,b){return 0;}
function XJ(){LO.call(this);}
function Bbn(a,b){var c=new XJ();AZq(c,a,b);return c;}
function AZq(a,b,c){AI5(a,b,c);}
function A27(a,b){return 1;}
function AUT(a,b,c){L();return Bfj.b;}
function AOA(){P.call(this);}
function Ba_(a,b){var c=new AOA();A$X(c,a,b);return c;}
function A$X(a,b,c){C8(a,b,c,Bhs);Ff(a,1);}
function ANi(a,b,c,d,e){return null;}
function A1_(a){return 0;}
function AV9(a){return 0;}
function A0U(a){return 2;}
function AL5(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;f=e+1|0;$p=4;case 4:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;d=d-1|0;$p=5;case 5:$z=AAz(b,c,d,e);if(C()){break _;}c=$z;return c;default:
E_();}}C3().s(a,b,c,d,e,f,$p);}
function ANM(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(f==1){h=d-1|0;$p=2;continue _;}if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 2:$z=AAz(b,c,h,e);if(C()){break _;}h=$z;if(h)g=5;if(f==2){h=e+1|0;$p=3;continue _;}if(f==3)
{h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 3:$z=AAz(b,c,d,h);if(C()){break _;}h=$z;if(h)g=4;if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 4:$z=AAz(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 5:$z=AAz(b,h,d,e);if(C()){break _;}h=$z;if(h)g=2;if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 6:$z
=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)g=1;$p=7;case 7:AKu(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AR$(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(g)return;$p=2;case 2:ABq(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABq(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=c+1|0;$p=2;continue _;}f=1;$p=3;continue _;case 2:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=e-1|0;$p=4;continue _;}f=2;$p=5;continue _;case 3:AKu(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 4:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=e+1|0;$p=7;continue _;}f=3;$p=8;continue _;case 5:AKu(b,
c,d,e,f);if(C()){break _;}$p=6;case 6:AE6(a,b,c,d,e);if(C()){break _;}return;case 7:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=d-1|0;$p=9;continue _;}f=4;$p=10;continue _;case 8:AKu(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 9:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(!f){$p=6;continue _;}f=5;$p=11;continue _;case 10:AKu(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 11:AKu(b,c,d,e,f);if(C()){break _;}$p=6;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJ_(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE6(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;$p=2;case 2:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;h=0;f=c-1|0;$p=3;case 3:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==1)h=1;f=c+1|0;$p=4;case 4:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==2)h=1;f=e-1|0;$p=5;case 5:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f&&
g==3)h=1;f=e+1|0;$p=6;case 6:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==4)h=1;f=d-1|0;$p=7;case 7:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(!f&&g==5)h=1;if(!h)return;$p=8;case 8:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;$p=9;case 9:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=10;case 10:APu(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AE6(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AL5(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APu(b,c,d,e,f);if(C()){break _;}return 0;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AKg(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}h=$z;if(h==1)Bo(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)Bo(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)Bo(a,0.3499999940395355,0.20000000298023224,
0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)Bo(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else Bo(a,0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);$p=2;case 2:$z=Ka(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AQm(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;m=j;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l
=i+0.2199999988079071;m=j;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==3){k=h;l=i+0.2199999988079071;m=j-0.27000001072883606;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g!=4){n=h;o=i;p=j;BV(b,B(256),n,o,p,0.0,0.0,0.0);BV(b,B(257),n,o,p,0.0,0.0,0.0);}else{k=h;l=i+0.2199999988079071;m=j+0.27000001072883606;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AOZ(){var a=this;P.call(a);a.sw=null;a.t4=null;}
function BcS(a,b){var c=new AOZ();A3I(c,a,b);return c;}
function A3I(a,b,c){C8(a,b,c,Bhq);a.sw=$rt_createIntArray(256);a.t4=$rt_createIntArray(256);Hr(a,BeZ.b,5,20);Hr(a,Be0.b,5,5);Hr(a,Be1.b,30,60);Hr(a,Bfh.b,30,20);Hr(a,Bfi.b,15,100);Hr(a,Bfb.b,30,60);Ff(a,1);}
function Hr(a,b,c,d){a.sw.data[b]=c;a.t4.data[b]=d;}
function ARA(a,b,c,d,e){return null;}
function A5X(a){return 0;}
function A8u(a){return 0;}
function AXt(a){return 3;}
function AWC(a,b){return 0;}
function AZ1(a){return 20;}
function XI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;h=R(g,15);if(h>=0){$p=2;continue _;}i=g+1|0;$p=3;continue _;case 2:$z=AMT(a,b,c,d,e);if(C()){break _;}i=$z;if(i){j=d-1|0;$p=4;continue _;}h=d-1|0;$p=5;continue _;case 3:AKu(b,
c,d,e,i);if(C()){break _;}Fm(b,c,d,e,a.b);$p=2;continue _;case 4:$z=AFZ(a,b,c,j,e);if(C()){break _;}i=$z;if(!i&&!h&&!E(f,4)){h=0;$p=13;continue _;}if(!(g%5|0)&&g>5){h=c+1|0;i=300;$p=7;continue _;}return;case 5:$z=AAz(b,c,h,e);if(C()){break _;}h=$z;if(h&&g<=3)return;h=0;$p=6;case 6:APu(b,c,d,e,h);if(C()){break _;}return;case 7:YA(a,b,h,d,e,i,f);if(C()){break _;}i=c-1|0;g=300;$p=8;case 8:YA(a,b,i,d,e,g,f);if(C()){break _;}g=100;$p=9;case 9:YA(a,b,c,j,e,g,f);if(C()){break _;}k=d+1|0;g=200;$p=10;case 10:YA(a,b,
c,k,e,g,f);if(C()){break _;}l=e-1|0;g=300;$p=11;case 11:YA(a,b,c,d,l,g,f);if(C()){break _;}m=e+1|0;g=300;$p=12;case 12:YA(a,b,c,d,m,g,f);if(C()){break _;}n=d+4|0;a:{while(i<=h){o=l;while(o<=m){p=j;while(p<=n){if(i!=c)break a;if(p!=d)break a;if(o!=e)break a;p=p+1|0;}o=o+1|0;}i=i+1|0;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 13:APu(b,c,d,e,h);if(C()){break _;}return;case 14:$z=ACt(b,i,p,o);if(C()){break _;}r=$z;if(!r){r=i+1|0;$p=15;continue _;}if(0>0&&E(f,q)<=0){g=a.b;$p=21;continue _;}b:
{c:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break c;o=l;}p=j;}if(i!=c)break b;if(p!=d)break b;if(o==e)continue;else break b;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;continue _;case 15:$z=AGy(a,b,r,p,o,g);if(C()){break _;}g=$z;r=i-1|0;$p=16;case 16:$z=AGy(a,b,r,p,o,g);if(C()){break _;}g=$z;r=p-1|0;$p=17;case 17:$z=AGy(a,b,i,r,o,g);if(C()){break _;}g=$z;r=p+1|0;$p=18;case 18:$z=AGy(a,b,i,r,o,g);if(C()){break _;}g=$z;r=o-1|0;$p=19;case 19:$z=AGy(a,b,i,p,r,g);if(C()){break _;}r=$z;g
=o+1|0;$p=20;case 20:$z=AGy(a,b,i,p,g,r);if(C()){break _;}r=$z;if(r>0&&E(f,q)<=r){g=a.b;$p=21;continue _;}d:{b:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break b;o=l;}p=j;}if(i!=c)break d;if(p!=d)break d;if(o==e)continue;else break d;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 21:APu(b,i,p,o,g);if(C()){break _;}a:{d:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break d;o=l;}p=j;}if(i!=c)break a;if(p!=d)break a;if(o==e)continue;else break a;}return;}q
=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function YA(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.t4.data;$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}i=$z;j=h[i];if(E(g,f)>=j)return;$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;L();i=f!=Bfi.b?0:1;if(E(g,2)){f=0;$p=3;continue _;}f=a.b;$p=4;continue _;case 3:APu(b,c,d,e,f);if(C()){break _;}if(!i)return;g=Bfi;f=0;$p=5;continue _;case 4:APu(b,c,d,e,f);if
(C()){break _;}if(!i)return;g=Bfi;f=0;$p=5;case 5:g.nn(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AMT(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;$p=1;case 1:$z=AFZ(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c-1|0;$p=2;case 2:$z=AFZ(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=d-1|0;$p=3;case 3:$z=AFZ(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=d+1|0;$p=4;case 4:$z=AFZ(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=5;case 5:$z=AFZ(a,b,c,d,f);if(C()){break _;}f=
$z;if(f)return 1;e=e+1|0;$p=6;case 6:$z=AFZ(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A3j(a){return 0;}
function AFZ(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.sw.data;$p=1;case 1:$z=b.eh(c,d,e);if(C()){break _;}c=$z;return f[c]<=0?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AGy(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.sw.data;$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;h=g[c];if(h>f)f=h;return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANp(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AMT(a,b,c,d,e);if(C()){break _;}c=$z;return c?1:0;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ABw(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AMT(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return;f=0;$p=3;case 3:APu(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ACp(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(f){Fm(b,c,d,e,a.b);return;}$p=2;case 2:$z=AMT(a,b,c,d,e);if(C()){break _;}f=$z;if(f){Fm(b,c,d,e,a.b);return;}f=0;$p=3;case 3:APu(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ASp(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!E(f,24))Ex(b,c+0.5,d+0.5,e+0.5,B(258),1.0+N(f),N(f)*0.699999988079071+0.30000001192092896);g=d-1|0;$p=1;case 1:$z=AAz(b,c,g,e);if(C()){break _;}h=$z;if(h){g=0;i=c;j=d;k=e;while(g<3){BV(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,
0.0);g=g+1|0;}return;}L();l=Bgn;$p=2;case 2:$z=AFZ(l,b,c,g,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;k=e;while(g<3){BV(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,0.0);g=g+1|0;}return;}l=Bgn;g=c-1|0;$p=3;case 3:a:{$z=AFZ(l,b,g,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;m=d;n=e;while(true){if(g>=2)break a;j=i+N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BV(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgn;h=c+1|0;$p=4;case 4:a:{$z=AFZ(l,b,h,d,e);if(C()){break _;}g=$z;if(g){g=0;i=h;m=d;n=e;while(true){if(g>=2)break a;j
=i-N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BV(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgn;g=e-1|0;$p=5;case 5:a:{$z=AFZ(l,b,c,d,g);if(C()){break _;}g=$z;if(g){g=0;i=c;k=d;n=e;while(true){if(g>=2)break a;j=i+N(f);m=k+N(f);o=n+N(f)*0.10000000149011612;BV(b,B(255),j,m,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgn;g=e+1|0;$p=6;case 6:a:{$z=AFZ(l,b,c,d,g);if(C()){break _;}h=$z;if(h){h=0;o=c;p=d;j=g;while(true){if(h>=2)break a;q=o+N(f);i=p+N(f);n=j-N(f)*0.10000000149011612;BV(b,B(255),q,i,n,0.0,0.0,0.0);h=h+1|0;}}}l=Bgn;d=
d+1|0;$p=7;case 7:a:{$z=AFZ(l,b,c,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;n=e;while(true){if(g>=2)break a;q=i+N(f);k=j-N(f)*0.10000000149011612;o=n+N(f);BV(b,B(255),q,k,o,0.0,0.0,0.0);g=g+1|0;}}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Eg(){P.call(this);}
function AOD(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.s9();$p=1;case 1:AFS(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ALW(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFJ(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Z$(){Eg.call(this);}
function BcI(a,b){var c=new Z$();AUO(c,a,b);return c;}
function AUO(a,b,c){C8(a,b,c,Bg9);}
function AXf(a){return Bcr();}
function A52(a){return 0;}
function Zv(){P.call(this);this.cF=null;}
function A$M(a,b){var c=new Zv();A69(c,a,b);return c;}
function A69(a,b,c){C8(a,b,c.bb,c.b$);a.cF=c;BH(a,c.qb);Dn(a,c.nN/3.0);a.gI=c.gI;}
function A5F(a){return 0;}
function AV2(a){return 0;}
function AYU(a){return 10;}
function APy(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGt(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJy(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}h=$z;if(!h){Bo(a,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bo(a,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bo(a,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;}Bo(a,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ALv(a,b,c,d,e,f,
g);if(C()){break _;}Bo(a,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 4:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 6:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 8:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.5,1.0,
0.5,1.0);$p=9;case 9:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AHB(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=ABX(b,c,g,e);if(C()){break _;}h=$z;if(!h.du()){$p=2;continue _;}i=a.cF.b;$p=11;continue _;case 2:AIq(a,b,c,d,e);if(C()){break _;}i=c+1|0;j=d-1|0;$p=3;case 3:AIq(a,b,i,j,e);if(C()){break _;}k=c-1|0;$p=4;case 4:AIq(a,b,k,j,e);if(C()){break _;}l=e-1|0;$p=5;case 5:AIq(a,
b,c,j,l);if(C()){break _;}m=e+1|0;$p=6;case 6:AIq(a,b,c,j,m);if(C()){break _;}$p=7;case 7:AIq(a,b,i,g,e);if(C()){break _;}$p=8;case 8:AIq(a,b,k,g,e);if(C()){break _;}$p=9;case 9:AIq(a,b,c,g,l);if(C()){break _;}$p=10;case 10:AIq(a,b,c,g,m);if(C()){break _;}h=a.cF;$p=12;continue _;case 11:APu(b,c,d,e,i);if(C()){break _;}h=a.cF;$p=12;case 12:h.eZ(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIq(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=APJ(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;g=(-1);f=c+1|0;h=d+1|0;$p=2;case 2:$z=APJ(a,b,f,h,e);if(C()){break _;}i=$z;if(i)g=0;i=c-1|0;$p=3;case 3:$z=APJ(a,b,i,h,e);if(C()){break _;}j=$z;if(j)g=1;j=e+1|0;$p=4;case 4:$z=APJ(a,b,c,h,j);if(C()){break _;}k=$z;if(k)g=2;k=e-1|0;$p=
5;case 5:$z=APJ(a,b,c,h,k);if(C()){break _;}h=$z;if(h)g=3;if(g<0){$p=6;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 6:$z=ADx(a,b,f,d,e);if(C()){break _;}h=$z;if(h){$p=7;continue _;}$p=9;continue _;case 7:$z=ADx(a,b,i,d,e);if(C()){break _;}h=$z;if(!h)g=0;$p=9;continue _;case 8:$z=APJ(a,b,i,h,e);if(C()){break _;}i=$z;if(i)g=0;$p=12;continue _;case 9:$z=ADx(a,b,i,d,e);if(C()){break _;}h=$z;if(h){$p=10;continue _;}$p=13;continue _;case 10:$z=ADx(a,b,f,d,e);if(C()){break _;}h=
$z;if(!h)g=1;$p=13;continue _;case 11:AKu(b,c,d,e,g);if(C()){break _;}return;case 12:$z=APJ(a,b,f,h,e);if(C()){break _;}f=$z;if(f)g=1;$p=15;continue _;case 13:$z=ADx(a,b,c,d,j);if(C()){break _;}h=$z;if(h){$p=14;continue _;}$p=16;continue _;case 14:$z=ADx(a,b,c,d,k);if(C()){break _;}h=$z;if(!h)g=2;$p=16;continue _;case 15:$z=APJ(a,b,c,h,k);if(C()){break _;}f=$z;if(f)g=2;$p=18;continue _;case 16:$z=ADx(a,b,c,d,k);if(C()){break _;}h=$z;if(h){$p=17;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 17:$z
=ADx(a,b,c,d,j);if(C()){break _;}h=$z;if(!h)g=3;if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 18:$z=APJ(a,b,c,h,j);if(C()){break _;}f=$z;if(f)g=3;if(g<0)return;$p=11;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ADx(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABX(b,c,d,e);if(C()){break _;}b=$z;return b.du();default:E_();}}C3().s(a,b,c,d,e,$p);}
function APJ(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(!f)c=0;else{L();c=BeN.data[f].ek()!=10?0:1;}return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function APb(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.kM(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABa(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.q6(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADm(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.nn(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AMU(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:$z=f.Ct(b,c,d,e);if(C()){break _;}g=$z;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function A8W(a,b){return a.cF.yl(b);}
function A7$(a){return a.cF.pO();}
function A4c(a,b,c){return a.cF.dU(b,c);}
function A0t(a,b){return a.cF.eF(b);}
function AXu(a,b,c){return a.cF.eW(b,c);}
function A74(a,b){return a.cF.ci(b);}
function AM5(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:$z=g.ug(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AVF(a){return a.cF.mr();}
function AMe(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:$z=f.oR(b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ACG(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cF;$p=1;case 1:h.qB(b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYA(a){return a.cF.pe();}
function AYN(a,b,c){return a.cF.o5(b,c);}
function AMm(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:$z=f.fT(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ACB(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:AHB(a,b,c,d,e,f);if(C()){break _;}g=a.cF;$p=2;case 2:g.fC(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yx(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:f.lv(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AHO(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cF;$p=1;case 1:h.HN(b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AMX(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.IK(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQQ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.oG(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQV(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.e6(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGI(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:$z=g.lB(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Y8(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:f.sH(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AFQ(){Eg.call(this);this.fl=null;}
function A_7(a){var b=new AFQ();A63(b,a);return b;}
function A63(a,b){D0(a,b,Bg$);a.fl=new Dz;a.bb=26;}
function AEw(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1)return a.bb-1|0;if(!f)return a.bb-1|0;g=e-1|0;$p=1;case 1:$z=b.eh(c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=b.eh(c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=b.eh(k,d,e);if(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=b.eh(m,
d,e);if(C()){break _;}n=$z;if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;L();if(Bgy.data[h]&&!Bgy.data[j])k=3;if(Bgy.data[j]&&!Bgy.data[h])k=2;if(Bgy.data[l]&&!Bgy.data[n])k=5;if(Bgy.data[n]&&!Bgy.data[l])k=4;return f!=k?a.bb:a.bb+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);c=l!=a.b?m:k;$p=7;continue _;}return a.bb;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);c=h!=a.b?i:g;$p=5;continue _;}return a.bb;case 5:$z=b.eh(k,d,c);if(C()){break _;}p=$z;if(h==a.b)i=g;$p=6;case 6:$z=b.eh(m,d,i);if(C()){break _;}m=$z;if(f==4)o=(-1)-o
|0;i=5;L();if(!(!Bgy.data[l]&&!Bgy.data[p])&&!Bgy.data[n]&&!Bgy.data[m])i=5;if(!(!Bgy.data[n]&&!Bgy.data[m])&&!Bgy.data[l]&&!Bgy.data[p])i=4;return (f!=i?a.bb+32|0:a.bb+16|0)+o|0;case 7:$z=b.eh(c,d,g);if(C()){break _;}g=$z;if(l==a.b)m=k;$p=8;case 8:$z=b.eh(m,d,i);if(C()){break _;}m=$z;if(f==3)o=(-1)-o|0;i=3;L();if(!(!Bgy.data[h]&&!Bgy.data[g])&&!Bgy.data[j]&&!Bgy.data[m])i=3;if(!(!Bgy.data[j]&&!Bgy.data[m])&&!Bgy.data[h]&&!Bgy.data[g])i=2;return (f!=i?a.bb+32|0:a.bb+16|0)+o|0;default:E_();}}C3().s(a,b,c,d,e,
f,g,h,i,j,k,l,m,n,o,p,$p);}
function A87(a,b){return b==1?a.bb-1|0:!b?a.bb-1|0:b!=3?a.bb:a.bb+1|0;}
function AJ1(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;$p=1;case 1:$z=ACt(b,g,d,e);if(C()){break _;}h=$z;if(h==a.b)f=1;h=c+1|0;$p=2;case 2:$z=ACt(b,h,d,e);if(C()){break _;}i=$z;if(i==a.b)f=f+1|0;i=e-1|0;$p=3;case 3:$z=ACt(b,c,d,i);if(C()){break _;}j=$z;if(j==a.b)f=f+1|0;k=e+1|0;$p=4;case 4:$z=ACt(b,c,d,k);if(C()){break _;}l=$z;if
(l==a.b)f=f+1|0;if(f>1)return 0;$p=5;case 5:$z=AIV(a,b,g,d,e);if(C()){break _;}j=$z;if(j)return 0;$p=6;case 6:$z=AIV(a,b,h,d,e);if(C()){break _;}e=$z;if(e)return 0;$p=7;case 7:$z=AIV(a,b,c,d,i);if(C()){break _;}e=$z;if(e)return 0;$p=8;case 8:$z=AIV(a,b,c,d,k);if(C()){break _;}c=$z;return c?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AIV(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return 0;f=c-1|0;$p=2;case 2:$z=ACt(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=c+1|0;$p=3;case 3:$z=ACt(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=e-1|0;$p=4;case 4:$z=ACt(b,c,d,f);if(C()){break _;}f=$z;if(f==a.b)return 1;e=e+1|0;$p=5;case 5:$z=ACt(b,c,d,e);if(C()){break _;}c
=$z;return c!=a.b?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ASC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANv(b,c,d,e);if(C()){break _;}f=$z;g=f;h=0;i=27;j=c;k=d;l=e;while(h<i){f=Q9(g,h);if(f!==null){m=N(a.fl)*0.800000011920929+0.10000000149011612;n=N(a.fl)*0.800000011920929+0.10000000149011612;o
=N(a.fl)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;if(f.q>0){s=E(a.fl,21)+10|0;if(s>f.q)s=f.q;f.q=f.q-s|0;t=Hb(b,p,q,r,Ol(f.bC,s,f.el));t.g=CY(a.fl)*0.05000000074505806;t.i=CY(a.fl)*0.05000000074505806+0.20000000298023224;t.h=CY(a.fl)*0.05000000074505806;$p=3;continue _;}}h=h+1|0;}$p=2;case 2:ALW(a,b,c,d,e);if(C()){break _;}return;case 3:AOf(b,t);if(C()){break _;}a:while(true){if(f.q>0){s=E(a.fl,21)+10|0;if(s>f.q)s=f.q;f.q=f.q-s|0;t=Hb(b,p,q,r,Ol(f.bC,s,f.el));t.g=CY(a.fl)*0.05000000074505806;t.i
=CY(a.fl)*0.05000000074505806+0.20000000298023224;t.h=CY(a.fl)*0.05000000074505806;continue _;}while(true){h=h+1|0;if(h>=i)break a;f=Q9(g,h);if(f===null)continue;else break;}m=N(a.fl)*0.800000011920929+0.10000000149011612;n=N(a.fl)*0.800000011920929+0.10000000149011612;o=N(a.fl)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;}$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AFW(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANv(b,c,d,e);if(C()){break _;}g=$z;h=g;i=d+1|0;$p=2;case 2:$z=AAz(b,c,i,e);if(C()){break _;}j=$z;if(j)return 1;k=c-1|0;$p=3;case 3:$z=ACt(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){$p=5;continue _;}l=c+1|0;$p=4;case 4:$z=ACt(b,l,
d,e);if(C()){break _;}j=$z;if(j==a.b){$p=7;continue _;}m=e-1|0;$p=6;continue _;case 5:$z=AAz(b,k,i,e);if(C()){break _;}j=$z;if(j)return 1;l=c+1|0;$p=4;continue _;case 6:$z=ACt(b,c,d,m);if(C()){break _;}j=$z;if(j==a.b){$p=9;continue _;}n=e+1|0;$p=8;continue _;case 7:$z=AAz(b,l,i,e);if(C()){break _;}j=$z;if(j)return 1;m=e-1|0;$p=6;continue _;case 8:$z=ACt(b,c,d,n);if(C()){break _;}j=$z;if(j!=a.b){$p=10;continue _;}$p=11;continue _;case 9:$z=AAz(b,c,i,m);if(C()){break _;}j=$z;if(j)return 1;n=e+1|0;$p=8;continue _;case 10:$z
=ACt(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){g=new Id;o=B(259);$p=12;continue _;}g=h;$p=13;continue _;case 11:$z=AAz(b,c,i,n);if(C()){break _;}j=$z;if(j)return 1;$p=10;continue _;case 12:$z=ANv(b,k,d,e);if(C()){break _;}p=$z;K5(g,o,p,h);$p=13;case 13:$z=ACt(b,l,d,e);if(C()){break _;}j=$z;if(j!=a.b){o=g;$p=15;continue _;}o=new Id;p=B(259);g=g;$p=14;case 14:$z=ANv(b,l,d,e);if(C()){break _;}h=$z;K5(o,p,g,h);$p=15;case 15:$z=ACt(b,c,d,m);if(C()){break _;}e=$z;if(e==a.b){g=new Id;p=B(259);$p=16;continue _;}g=o;$p
=17;continue _;case 16:$z=ANv(b,c,d,m);if(C()){break _;}h=$z;K5(g,p,h,o);$p=17;case 17:$z=ACt(b,c,d,n);if(C()){break _;}e=$z;if(e==a.b){o=new Id;p=B(259);g=g;$p=18;continue _;}o=g;b=o;$p=19;continue _;case 18:$z=ANv(b,c,d,n);if(C()){break _;}b=$z;K5(o,p,g,b);b=o;$p=19;case 19:YX(f,b);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AZB(a){return Bbe();}
function AKH(){P.call(this);}
function BbM(a,b){var c=new AKH();AUR(c,a,b);return c;}
function AUR(a,b,c){C8(a,b,c,Bhs);}
function AET(a,b,c,d,e){return null;}
function ATU(a){return 0;}
function A5d(a){return 0;}
function A7s(a){return 5;}
function A9P(a,b){return 1;}
function AUz(a){return 0;}
function AHu(){P.call(this);}
function Bbq(a){var b=new AHu();AZg(b,a);return b;}
function AZg(a,b){D0(a,b,Bg$);a.bb=59;}
function AWs(a,b){if(b==1)b=a.bb-16|0;else if(!b){L();b=BeZ.ci(0);}else b=b!=2&&b!=4?a.bb:a.bb+1|0;return b;}
function AGP(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANo(f);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AKG(){FZ.call(this);}
function Bcv(a,b){var c=new AKG();AZN(c,a,b);return c;}
function AZN(a,b,c){Lv(a,b,c);a.bb=c;Ff(a,1);Bo(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AYE(a,b){L();return b!=Bg1.b?0:1;}
function AJl(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJn(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=Xv(b,c,g,e);if(C()){break _;}h=$z;if(h<9)return;$p=3;case 3:$z=AEH(b,c,d,e);if(C()){break _;}h=$z;if(h>=7)return;$p=4;case 4:$z=Y$(a,b,c,d,e);if(C()){break _;}i=$z;if(E(f,100.0/i|0))return;g=h+1|0;$p=5;case 5:AKu(b,c,d,e,g);if(C()){break _;}return;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Y$(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;g=e-1|0;$p=1;case 1:$z=ACt(b,c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=ACt(b,c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=ACt(b,k,d,e);if
(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=ACt(b,m,d,e);if(C()){break _;}n=$z;$p=5;case 5:$z=ACt(b,k,d,g);if(C()){break _;}o=$z;$p=6;case 6:$z=ACt(b,m,d,g);if(C()){break _;}p=$z;$p=7;case 7:$z=ACt(b,m,d,i);if(C()){break _;}q=$z;$p=8;case 8:$z=ACt(b,k,d,i);if(C()){break _;}r=$z;s=l!=a.b&&n!=a.b?0:1;t=h!=a.b&&j!=a.b?0:1;u=o!=a.b&&p!=a.b&&q!=a.b&&r!=a.b?0:1;o=d-1|0;while(k<=m){v=g;if(v<=i){$p=9;continue _;}k=k+1|0;}a:{if(!u){if(!s)break a;if(!t)break a;}f=f/2.0;}return f;case 9:$z=ACt(b,k,o,v);if(C()){break _;}w
=$z;x=0.0;L();if(w==Bg1.b){x=1.0;$p=10;continue _;}if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){continue _;}k=k+1|0;if(k>m)break;v=g;}b:{if(!u){if(!s)break b;if(!t)break b;}f=f/2.0;}return f;case 10:$z=AEH(b,k,o,v);if(C()){break _;}d=$z;if(d>0)x=3.0;if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){$p=9;continue _;}k=k+1|0;if(k>m)break;v=g;}c:{if(!u){if(!s)break c;if(!t)break c;}f=f/2.0;}return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function A8s(a,b,c){if(c<0)c=7;return a.bb+c|0;}
function A4D(a){return 6;}
function ANx(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;h=c;i=d;j=e;while(g<3){if(E(b.r,15)<=f){k=N(b.r)*0.699999988079071+0.15000000596046448;l=N(b.r)*0.699999988079071+0.15000000596046448;m=N(b.r)*0.699999988079071+0.15000000596046448;n=new E$;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DA(r,
BhA);Ha(n,b,o,p,q,r);n.g$=10;$p=1;continue _;}g=g+1|0;}return;case 1:AOf(b,n);if(C()){break _;}while(true){g=g+1|0;if(g>=3)break;if(E(b.r,15)>f)continue;else{k=N(b.r)*0.699999988079071+0.15000000596046448;l=N(b.r)*0.699999988079071+0.15000000596046448;m=N(b.r)*0.699999988079071+0.15000000596046448;n=new E$;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DA(r,BhA);Ha(n,b,o,p,q,r);n.g$=10;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A0X(a,b,c){var d;c=DT();d=new T;W(d);Cg(c,U(Be(H(d,B(260)),b)));if(b!=7)b=(-1);else{BB();b=BhB.cV;}return b;}
function A4U(a,b){return 1;}
function AQN(){P.call(this);}
function BbY(a){var b=new AQN();A2J(b,a);return b;}
function A2J(a,b){D0(a,b,Bhl);a.bb=87;Ff(a,1);Bo(a,0.0,0.0,0.0,1.0,0.9375,1.0);Gt(a,255);}
function AA1(a,b,c,d,e){return D3(c+0|0,d+0|0,e+0|0,c+1|0,d+1|0,e+1|0);}
function AU0(a){return 0;}
function A1z(a){return 0;}
function A_j(a,b,c){b=R(b,1);return !b&&c>0?a.bb-1|0:b?2:a.bb;}
function ANb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(f,5))return;g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;a:while(true){if(g>h){if(!0){$p=1;continue _;}g=7;$p=2;continue _;}l=d;while(l<=i){m=j;if(m<=k)break a;l=l+1|0;}g=g+1|0;}$p=4;continue _;case 1:$z=AEH(b,c,d,e);if(C()){break _;}h=$z;if(h>0){g=h-1|0;$p=3;continue _;}g
=c-0|0;h=c+0|0;m=e-0|0;j=e+0|0;while(true){if(g>h){if(0)return;L();g=BeQ.b;$p=5;continue _;}l=m;if(l<=j)break;g=g+1|0;}$p=6;continue _;case 2:AKu(b,c,d,e,g);if(C()){break _;}return;case 3:AKu(b,c,d,e,g);if(C()){break _;}return;case 4:$z=ABX(b,g,l,m);if(C()){break _;}f=$z;if(f===BfO)g=1;else{m=m+1|0;b:while(true){if(m<=k){continue _;}l=l+1|0;while(l>i){g=g+1|0;if(g>h)break b;l=d;}m=j;}g=0;}if(!g){$p=1;continue _;}g=7;$p=2;continue _;case 5:APu(b,c,d,e,g);if(C()){break _;}return;case 6:$z=ACt(b,g,i,l);if(C())
{break _;}n=$z;L();if(n==Bg0.b)g=1;else{l=l+1|0;while(true){if(l<=j){continue _;}g=g+1|0;if(g>h)break;l=m;}g=0;}if(g)return;L();g=BeQ.b;$p=5;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AKN(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(b.r,4))return;L();g=BeQ.b;$p=1;case 1:APu(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function X6(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d+1|0;$p=1;case 1:$z=ABX(b,c,f,e);if(C()){break _;}g=$z;if(!g.du())return;L();f=BeQ.b;$p=2;case 2:APu(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AWZ(a,b,c){L();return BeQ.dU(0,c);}
function AF1(){Eg.call(this);this.ww=0;}
function A4K(a,b){var c=new AF1();ATO(c,a,b);return c;}
function ATO(a,b,c){D0(a,b,Bg9);a.ww=c;a.bb=45;}
function ACr(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AOD(a,b,c,d,e);if(C()){break _;}f=e-1|0;$p=2;case 2:$z=ACt(b,c,d,f);if(C()){break _;}g=$z;f=e+1|0;$p=3;case 3:$z=ACt(b,c,d,f);if(C()){break _;}f=$z;h=c-1|0;$p=4;case 4:$z=ACt(b,h,d,e);if(C()){break _;}h=$z;i=c+1|0;$p=5;case 5:$z=ACt(b,i,d,e);if(C()){break _;}i=$z;j=3;L();if(Bgy.data[g]&&!Bgy.data[f])j
=3;if(Bgy.data[f]&&!Bgy.data[g])j=2;if(Bgy.data[h]&&!Bgy.data[i])j=5;if(Bgy.data[i]&&!Bgy.data[h])j=4;$p=6;case 6:AKu(b,c,d,e,j);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AKd(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1){L();return BeT.bb;}if(!f){L();return BeT.bb;}$p=1;case 1:$z=b.eG(c,d,e);if(C()){break _;}g=$z;return f!=g?a.bb:!a.ww?a.bb-1|0:a.bb+16|0;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEk(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.ww)return;$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.0+N(f)*6.0/16.0;j=e+0.5;k=N(f)*0.6000000238418579-0.30000001192092896;if(g==4){l=h-0.5199999809265137;m=i;n=j+k;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),
l,m,n,0.0,0.0,0.0);}else if(g==5){l=h+0.5199999809265137;m=i;n=j+k;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==2){l=h+k;m=i;n=j-0.5199999809265137;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==3){o=h+k;p=i;q=j+0.5199999809265137;BV(b,B(256),o,p,q,0.0,0.0,0.0);BV(b,B(257),o,p,q,0.0,0.0,0.0);}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AUV(a,b){if(b==1){L();b=BeT.b;}else if(!b){L();b=BeT.b;}else b=b!=3?a.bb:a.bb-1|0;return b;}
function AGS(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANv(b,c,d,e);if(C()){break _;}b=$z;g=b;$p=2;case 2:AO1(f,g);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function A75(a){return BaA();}
function Vo(){var a=this;Eg.call(a);a.C7=null;a.Do=0;}
function BhC(a,b,c){var d=new Vo();AHr(d,a,b,c);return d;}
function AHr(a,b,c,d){D0(a,b,Bg$);a.bb=4;a.C7=c;Bo(a,0.25,0.0,0.25,0.75,1.625,0.75);a.Do=d;}
function AYJ(a){return (-1);}
function A59(a){return 0;}
function A53(a){return 0;}
function A1K(a){var b,c,$$je;a:{try{b=Zm(a.C7);}catch($$e){$$je=Bi($$e);if($$je instanceof BE){b=$$je;break a;}else{throw $$e;}}return b;}c=new B6;WP(c,b);M(c);}
function AGL(a,b,c,d,e){return 1;}
function A8B(a,b,c){return a.Do;}
function ZQ(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APu(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function D$(){var a=this;D.call(a);a.ch=null;a.dJ=0;a.dH=0;a.dP=0;}
var BhD=null;var BhE=null;function BhF(){var a=new D$();ANt(a);return a;}
function ANt(a){return;}
function JX(b,c){var d;if(!DZ(BhE,c)){BR(BhD,c,b);BR(BhE,b,c);return;}b=new Cb;d=new T;W(d);Bl(b,U(H(H(d,B(261)),c)));M(b);}
function AFI(a){return;}
function AMd(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dJ;d=a.dH;e=a.dP;$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ACc(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dJ;d=a.dH;e=a.dP;$p=1;case 1:AGs(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AK0(a,b,c,d){var e,f,g;e=a.dJ+0.5-b;f=a.dH+0.5-c;g=a.dP+0.5-d;return e*e+f*f+g*g;}
function AFq(){BhD=Dd();BhE=Dd();JX(F(WS),B(262));JX(F(S_),B(263));JX(F(Jd),B(264));JX(F(Nt),B(265));}
function Jd(){var a=this;D$.call(a);a.gr=null;a.ry=0;}
function BhG(){var a=new Jd();AZX(a);return a;}
function AZX(a){var b,c;b=J(B4,4);c=b.data;c[0]=B(3);c[1]=B(3);c[2]=B(3);c[3]=B(3);a.gr=b;a.ry=(-1);}
function Bc(){var a=this;D.call(a);a.cV=0;a.eX=0;a.fe=0;a.s_=0;}
var BhH=null;var Bhc=null;var BhI=null;var BhJ=null;var BhK=null;var BhL=null;var BhM=null;var BhN=null;var Bgb=null;var Bhy=null;var Bhz=null;var BhO=null;var BhP=null;var BhQ=null;var BhR=null;var BhS=null;var BhT=null;var BhU=null;var BhV=null;var BhW=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;var Bh1=null;var Bh2=null;var Bh3=null;var Bh4=null;var Bh5=null;var Bh6=null;var Bh7=null;var Bh8=null;var Bh9=null;var Bgd=null;var Bga=null;var Bgc=null;var Bh$=null;var Bh_=null;var Bia=null;var Bib
=null;var Bic=null;var BhA=null;var BhB=null;var Bid=null;var Bie=null;var Bif=null;var Big=null;var Bih=null;var Bii=null;var Bij=null;var Bik=null;var Bil=null;var Bim=null;var Bin=null;var Bio=null;var Bip=null;var Biq=null;var Bir=null;var Bis=null;var Bit=null;var Biu=null;var Biv=null;var Biw=null;var Bix=null;var Bhx=null;var Bge=null;var Biy=null;var Biz=null;var BiA=null;var Bhb=null;var BiB=null;var BiC=null;var BiD=null;var BiE=null;var BiF=null;var BiG=null;function BB(){BB=Bt(Bc);A7I();}
function EW(a){var b=new Bc();Ds(b,a);return b;}
function Ds(a,b){var c,d,e;BB();a.eX=64;a.fe=32;c=256+b|0;a.cV=c;if(Bhc.data[c]!==null){d=DT();e=new T;W(e);Cg(d,U(Be(H(e,B(266)),b)));}Bhc.data[c]=a;}
function Bp(a,b){a.s_=b;return a;}
function A5y(a,b){return a.s_;}
function AGr(a,b,c,d,e,f,g,h){return 0;}
function A$K(a,b,c){return 1.0;}
function ASg(a,b,c,d){return b;}
function A2w(a){return a.eX;}
function A7O(a){return a.fe;}
function AV8(a,b,c){return;}
function A47(a,b,c,d,e,f){return;}
function A_q(a,b){return 1;}
function AVZ(a,b){return 0;}
function A3G(a,b,c){return;}
function A7I(){var b;BhH=Bbj();Bhc=J(Bc,1024);BhI=Bp(LI(0,2),82);BhJ=Bp(N_(1,2),98);BhK=Bp(ND(2,2),114);BhL=Bp(Bba(3),5);BhM=Bp(Ov(4,4),10);BhN=Bp(Bah(5),21);Bgb=Bp(EW(6),37);Bhy=Bp(EW(7),7);Bhz=Bp(EW(8),55);BhO=Bp(EW(9),23);BhP=Bp(EW(10),39);BhQ=Bp(Ns(11,2),66);BhR=Bp(Ns(12,0),64);BhS=Bp(LI(13,0),80);BhT=Bp(N_(14,0),96);BhU=Bp(ND(15,0),112);BhV=Bp(Ns(16,1),65);BhW=Bp(LI(17,1),81);BhX=Bp(N_(18,1),97);BhY=Bp(ND(19,1),113);BhZ=Bp(Ns(20,3),67);Bh0=Bp(LI(21,3),83);Bh1=Bp(N_(22,3),99);Bh2=Bp(ND(23,3),115);Bh3=Bp(EW(24),
53);Bh4=Bp(EW(25),71);Bh5=Bp(BcC(26,10),72);Bh6=Bp(Ns(27,0),68);Bh7=Bp(LI(28,0),84);Bh8=Bp(N_(29,0),100);Bh9=Bp(ND(30,0),116);Bgd=Bp(EW(31),8);Bga=Bp(EW(32),24);Bgc=Bp(EW(33),40);Bh$=Bp(Np(34,0),128);Bh_=Bp(Np(35,1),129);Bia=Bp(Np(36,2),130);Bib=Bp(Np(37,3),131);Bic=Bp(Np(38,4),132);b=new VQ;L();AHH(b,39,Bg0.b);BhA=Bp(b,9);BhB=Bp(EW(40),25);Bid=Bp(Ov(41,5),41);Bie=Bp(Da(42,0,0,0),0);Bif=Bp(Da(43,0,0,1),16);Big=Bp(Da(44,0,0,2),32);Bih=Bp(Da(45,0,0,3),48);Bii=Bp(Da(46,1,1,0),1);Bij=Bp(Da(47,1,1,1),17);Bik=Bp(Da(48,
1,1,2),33);Bil=Bp(Da(49,1,1,3),49);Bim=Bp(Da(50,2,2,0),2);Bin=Bp(Da(51,2,2,1),18);Bio=Bp(Da(52,2,2,2),34);Bip=Bp(Da(53,2,2,3),50);Biq=Bp(Da(54,3,3,0),3);Bir=Bp(Da(55,3,3,1),19);Bis=Bp(Da(56,3,3,2),35);Bit=Bp(Da(57,3,3,3),51);Biu=Bp(Da(58,1,4,0),4);Biv=Bp(Da(59,1,4,1),20);Biw=Bp(Da(60,1,4,2),36);Bix=Bp(Da(61,1,4,3),52);Bhx=Bp(EW(62),6);Bge=Bp(Ov(63,3),87);Biy=Bp(Ov(64,8),88);Biz=Bp(Baf(65),26);BiA=Bp(Ov(66,42),11);Bhb=Bp(Bch(67),42);BiB=Bp(A_R(68),43);BiC=Bp(APW(69,0),74);BiD=Bp(APW(70,BfW.b),75);BiE=Bp(APW(71,
BfX.b),76);BiF=Bp(BbL(72),135);BiG=Bp(BcW(73),104);}
function AIw(){P.call(this);}
function Bac(a){var b=new AIw();A2b(b,a);return b;}
function A2b(a,b){D0(a,b,Bg$);a.bb=97;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function A$q(a,b,c){var d,e;if(b&&b!=1){d=Pj(a,c);if((d&&d!=2?0:1)^(b>3?0:1))return a.bb;b=((d/2|0)+(b&1^d)|0)+((c&4)/4|0)|0;e=a.bb-((c&8)*2|0)|0;if(b&1)e= -e;return e;}return a.bb;}
function A0Q(a){return 0;}
function AXo(a){return 0;}
function ATK(a){return 7;}
function AGp(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHD(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=K6(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Zx(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHD(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Nh(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AHD(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eG(c,d,e);if(C()){break _;}c=$z;AO0(a,Pj(a,c));return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AO0(a,b){Bo(a,0.0,0.0,0.0,1.0,2.0,1.0);if(!b)Bo(a,0.0,0.0,0.0,1.0,1.0,0.1875);if(b==1)Bo(a,0.8125,0.0,0.0,1.0,1.0,1.0);if(b==2)Bo(a,0.0,0.0,0.8125,1.0,1.0,1.0);if(b==3)Bo(a,0.0,0.0,0.0,0.1875,1.0,1.0);}
function AJV(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ADR(a,b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ADR(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(!(g&8)){h=d+1|0;$p=2;continue _;}d=d-1|0;$p=3;continue _;case 2:$z=ACt(b,c,h,e);if(C()){break _;}i=$z;if(i!=a.b){h=g^4;$p=4;continue _;}i=(g^4)+8|0;$p=5;continue _;case 3:$z=ACt(b,c,d,e);if(C()){break _;}h=$z;if(h!=a.b)return 1;$p=6;continue _;case 4:AKu(b,c,d,e,h);if
(C()){break _;}Jh(b,c,d-1|0,e,c,d,e);if(BP()>=0.5)Ex(b,c+0.5,d+0.5,e+0.5,B(267),1.0,N(b.r)*0.10000000149011612+0.8999999761581421);else Ex(b,c+0.5,d+0.5,e+0.5,B(268),1.0,N(b.r)*0.10000000149011612+0.8999999761581421);return 1;case 5:AKu(b,c,h,e,i);if(C()){break _;}h=g^4;$p=4;continue _;case 6:ADR(a,b,c,d,e,f);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ACv(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(g&8){f=d-1|0;$p=3;continue _;}h=0;f=d+1|0;$p=2;case 2:$z=ACt(b,c,f,e);if(C()){break _;}i=$z;if(i!=a.b){i=0;$p=4;continue _;}i=d-1|0;$p=6;continue _;case 3:$z=ACt(b,c,f,e);if(C()){break _;}f=$z;if(f==a.b)return;f=0;$p=5;continue _;case 4:APu(b,c,d,e,i);if(C()){break _;}h
=1;i=d-1|0;$p=6;continue _;case 5:APu(b,c,d,e,f);if(C()){break _;}return;case 6:$z=AAz(b,c,i,e);if(C()){break _;}i=$z;if(!i){i=0;$p=7;continue _;}if(!h)return;$p=10;continue _;case 7:APu(b,c,d,e,i);if(C()){break _;}h=1;$p=8;case 8:$z=ACt(b,c,f,e);if(C()){break _;}i=$z;if(i==a.b){i=0;$p=9;continue _;}if(!h)return;$p=10;continue _;case 9:APu(b,c,f,e,i);if(C()){break _;}if(!h)return;$p=10;case 10:Yd(a,b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A8A(a,b,c){if(b&8)b=0;else{BB();b=BiB.cV;}return b;}
function XB(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHD(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Ka(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Pj(a,b){return b&4?b&3:(b-1|0)&3;}
function AJ0(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=127)return 0;d=d-1|0;$p=1;case 1:$z=AAz(b,c,d,e);if(C()){break _;}c=$z;return !c?0:1;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AC0(){P.call(this);}
function Bck(a,b){var c=new AC0();AUL(c,a,b);return c;}
function AUL(a,b,c){C8(a,b,c,Bhs);}
function ADd(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bo(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bo(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bo(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bo(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Nh(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AD4(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bo(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bo(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bo(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bo(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=K6(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AWT(a){return 0;}
function A5U(a){return 0;}
function A9y(a){return 8;}
function ANS(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;e=e+1|0;$p=4;case 4:$z=AAz(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function Yk(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(g&&f!=2){if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;continue _;}h=e+1|0;$p=2;case 2:$z=AAz(b,c,d,h);if(C()){break _;}h=$z;if(h)g=2;if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h
=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;case 3:$z=AAz(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;case 4:$z=AAz(b,h,d,e);if(C()){break _;}h=$z;if(h)g=4;if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;case 5:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)g=5;$p=6;case 6:AKu(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKK(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;h=0;if(g==2){f=e+1|0;$p=2;continue _;}if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 2:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if
(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 3:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 4:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 5:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(h)return;$p=6;case 6:Yd(a,b,c,d,e,g);if(C()){break _;}f=0;$p=7;case 7:APu(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function A5s(a,b){return 1;}
function ANV(){P.call(this);}
function BaY(a,b){var c=new ANV();A$7(c,a,b);return c;}
function A$7(a,b,c){C8(a,b,c,Bhs);Bo(a,0.0,0.0,0.0,1.0,0.125,1.0);}
function ACA(a,b,c,d,e){return null;}
function AWu(a){return 0;}
function ALA(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMj(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Ka(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AMj(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eG(c,d,e);if(C()){break _;}f=$z;if(f>=2&&f<=5)Bo(a,0.0,0.0,0.0,1.0,0.625,1.0);else Bo(a,0.0,0.0,0.0,1.0,0.125,1.0);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A2z(a,b,c){return c<6?a.bb:a.bb-16|0;}
function A3z(a){return 0;}
function A0v(a){return 9;}
function A2G(a,b){return 1;}
function ANU(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=AAz(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AND(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=15;$p=1;case 1:AKu(b,c,d,e,f);if(C()){break _;}g=new H4;$p=2;case 2:YN(g,a,b,c,d,e);if(C()){break _;}$p=3;case 3:YM(g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AJN(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;h=0;f=d-1|0;$p=2;case 2:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==2){f=c+1|0;$p=3;continue _;}if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 3:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if
(!f)h=1;if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 4:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 5:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 6:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(!h)return;$p=7;case 7:$z=AEH(b,c,d,e);if(C())
{break _;}f=$z;$p=8;case 8:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=9;case 9:APu(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ASy(){Bc.call(this);this.nQ=0;}
function A_6(a){var b=new ASy();A2L(b,a);return b;}
function A2L(a,b){Ds(a,b);b=b+256|0;a.nQ=b;L();a.s_=BeN.data[b].ci(2);}
function AQl(a,b,c,d,e,f,g,h){var i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;if(!b.q)return 0;i=a.nQ;j=0;$p=1;case 1:$z=AH9(d,i,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;L();k=BeN.data[a.nQ];j=a.nQ;$p=2;case 2:$z=APu(d,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;c=BeN.data[a.nQ];$p
=3;case 3:c.u$(d,e,f,g,h);if(C()){break _;}Ex(d,e+0.5,f+0.5,g+0.5,Kf(k.gI),(k.gI.oO+1.0)/2.0,k.gI.pL*0.800000011920929);b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AHF(){MQ.call(this);}
function A1E(){var a=new AHF();A1R(a);return a;}
function A1R(a){var b,c,d,e;b=J(B4,0);c=b.data;RV(B(24));d=c.length;e=0;while(e<d){RV(c[e]);e=e+1|0;}a.wp=B(24);a.H0=b.oW();}
function AFu(a){var b;b=new Rc;b.lc=B(269);b.mS=BiH;b.rw=BiH;b.HT=a;b.BQ=0.3333333432674408;b.F3=0.5;return b;}
function AG2(a){var b,c,d,e,f;b=new PM;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.vr=BiH;b.uL=BiH;e=d.length;if(e&&e>=b.BJ){b.Ht=a;b.uy=c.oW();b.Gw=2.0;b.BJ=4.0;return b;}f=new Cb;Bl(f,B(270));M(f);}
function M2(){var a=this;Fk.call(a);a.d8=0;a.cp=null;a.kI=null;}
function AMA(b,c,d){return A5z(0,b.data.length,b,c,c+d|0,0,0);}
function AAo(b){return AMA(b,0,b.data.length);}
function AKf(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new T;W(i);Bl(h,U(Be(H(Be(H(i,B(271)),g),B(248)),f)));M(h);}if(Ct(a)<d){i=new Gp;O(i);M(i);}if(d<0){i=new BO;h=new T;W(h);Bl(i,U(H(Be(H(h,B(249)),d),B(250))));M(i);}g=a.bk+a.d8|0;j=0;while(j<d){k=c+1|0;b=a.cp.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;h=new BO;i=new T;W(i);Bl(h,U(H(Be(H(Be(H(i,B(251)),c),B(244)),b.length),B(27))));M(h);}
function WT(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.mL){e=new FR;O(e);M(e);}if(Ct(a)<d){e=new G$;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BO;i=new T;W(i);Bl(e,U(Be(H(Be(H(i,B(272)),h),B(248)),g)));M(e);}if(d<0){e=new BO;i=new T;W(i);Bl(e,U(H(Be(H(i,B(249)),d),B(250))));M(e);}h=a.bk+a.d8|0;j=0;while(j<d){b=a.cp.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;e=new T;W(e);Bl(i,U(H(Be(H(Be(H(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function UH(a,b){return WT(a,b,0,b.data.length);}
function A9u(a,b){a.kI=b;return a;}
function ATT(a){EA(a);return a;}
function A5n(a,b){Nj(a,b);return a;}
function A0M(a,b){EO(a,b);return a;}
function Nd(){L7.call(this);}
function Jo(a){var b,c;if(a.bk<a.cy){b=a.bk;a.bk=b+1|0;return RB(a,b);}c=new Gp;O(c);M(c);}
function CJ(a,b){var c,d;if(AKp(a)){c=new FR;O(c);M(c);}if(a.bk<a.cy){d=a.bk;a.bk=d+1|0;ADP(a,d,b);return a;}c=new G$;O(c);M(c);}
function AKp(a){return a.xt;}
function WJ(){var a=this;Nd.call(a);a.xt=0;a.yk=0;a.xm=null;}
function RB(a,b){return a.xm.data[b+a.yk|0];}
function ADP(a,b,c){a.xm.data[b+a.yk|0]=c;}
function A8x(a){return a.xt;}
function ARj(){var a=this;M2.call(a);a.Gh=0;a.mL=0;}
function A5z(a,b,c,d,e,f,g){var h=new ARj();ATe(h,a,b,c,d,e,f,g);return h;}
function ATe(a,b,c,d,e,f,g,h){KN(a,c);a.kI=Bgl;a.d8=b;a.cp=d;a.bk=e;a.cy=f;a.Gh=g;a.mL=h;}
function ALK(a){var b,c,d,e;if(a.bk>=a.cy){b=new Gp;O(b);M(b);}c=a.cp.data;d=a.d8;e=a.bk;a.bk=e+1|0;return c[d+e|0];}
function A1n(a){return a.mL;}
function KP(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.cy){c=a.cp.data[a.d8+b|0]&255;d=a.cp.data[(a.d8+b|0)+1|0]&255;e=a.cp.data[(a.d8+b|0)+2|0]&255;f=a.cp.data[(a.d8+b|0)+3|0]&255;if(a.kI!==Bgl)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BO;h=new T;W(h);Bl(g,U(H(Be(H(Be(H(h,B(273)),b),B(244)),a.cy-3|0),B(27))));M(g);}
function AA3(a,b,c){var d,e;if(a.mL){d=new FR;O(d);M(d);}if(b>=0&&(b+3|0)<a.cy){if(a.kI!==Bgl){a.cp.data[a.d8+b|0]=c<<24>>24;a.cp.data[(a.d8+b|0)+1|0]=c>>8<<24>>24;a.cp.data[(a.d8+b|0)+2|0]=c>>16<<24>>24;a.cp.data[(a.d8+b|0)+3|0]=c>>24<<24>>24;}else{a.cp.data[a.d8+b|0]=c>>24<<24>>24;a.cp.data[(a.d8+b|0)+1|0]=c>>16<<24>>24;a.cp.data[(a.d8+b|0)+2|0]=c>>8<<24>>24;a.cp.data[(a.d8+b|0)+3|0]=c<<24>>24;}return a;}e=new BO;d=new T;W(d);Bl(e,U(H(Be(H(Be(H(d,B(273)),b),B(244)),a.cy-3|0),B(27))));M(e);}
function AHI(a){var b,c;b=Ct(a)/4|0;if(a.kI!==Bgl){c=new O_;OH(c,a.d8+a.bk|0,b,a,0,b,a.mL);return c;}c=new VH;OH(c,a.d8+a.bk|0,b,a,0,b,a.mL);return c;}
function Vn(){}
function LT(){Fk.call(this);}
function AHk(b){var c,d;if(b>=0)return AZE(0,b,$rt_createCharArray(b),0,b,0);c=new Cb;d=new T;W(d);Bl(c,U(Be(H(d,B(274)),b)));M(c);}
function AM2(b,c,d){return AZE(0,b.data.length,b,c,c+d|0,0);}
function OY(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new T;W(i);Bl(h,U(Be(H(Be(H(i,B(275)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gp;O(h);M(h);}if(d<0){h=new BO;i=new T;W(i);Bl(h,U(H(Be(H(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=AOM(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;h=new T;W(h);Bl(i,U(H(Be(H(Be(H(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AEO(a,b){return OY(a,b,0,b.data.length);}
function ASn(a,b,c,d){var e,f,g,h,i,j,k;if(Xk(a)){e=new FR;O(e);M(e);}if(Ct(a)<d){e=new G$;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BO;i=new T;W(i);Bl(e,U(Be(H(Be(H(i,B(276)),h),B(248)),g)));M(e);}if(d<0){e=new BO;i=new T;W(i);Bl(e,U(H(Be(H(i,B(249)),d),B(250))));M(e);}h=a.bk;j=0;while(j<d){k=h+1|0;g=c+1|0;Vq(a,h,f[c]);j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;e=new T;W(e);Bl(i,U(H(Be(H(Be(H(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AJc(a,b,c,d){var e,f,g,h,i,j;if(Xk(a)){b=new FR;O(b);M(b);}e=d-c|0;if(Ct(a)<e){b=new G$;O(b);M(b);}if(c>=0&&c<Bh(b)){if(d>Bh(b)){f=new BO;g=new T;W(g);Bl(f,U(Be(H(Be(H(g,B(276)),d),B(277)),Bh(b))));M(f);}if(c>d){b=new BO;f=new T;W(f);Bl(b,U(Be(H(Be(H(f,B(278)),c),B(279)),d)));M(b);}h=a.bk;while(c<d){i=h+1|0;j=c+1|0;Vq(a,h,Y(b,c));h=i;c=j;}a.bk=a.bk+e|0;return a;}g=new BO;f=new T;W(f);Bl(g,U(H(Be(H(Be(H(f,B(278)),c),B(244)),Bh(b)),B(27))));M(g);}
function Ng(a,b){return AJc(a,b,0,Bh(b));}
function AJA(a){return 1;}
function APh(a){return a.md;}
function AYw(a){Gs(a);return a;}
function AX1(a,b){EO(a,b);return a;}
function P0(){B1.call(this);}
function BiI(){var a=new P0();A83(a);return a;}
function A83(a){O(a);}
function Og(){B8.call(this);}
function BiJ(){var a=new Og();AZS(a);return a;}
function AZS(a){return;}
function A4S(a){return 0;}
function A5x(a){return 0;}
function ATj(a){return 0;}
function LZ(){B8.call(this);}
function BiK(){var a=new LZ();ATi(a);return a;}
function ATi(a){return;}
function A_E(a){return 1;}
function AY6(a){return 0;}
function N3(){B8.call(this);}
function BiL(){var a=new N3();A7v(a);return a;}
function A7v(a){return;}
function A6W(a){return 0;}
function A95(a){return 0;}
function AU2(a){return 0;}
function F9(){var a=this;Bc.call(a);a.uR=null;a.yA=0.0;a.AE=0;a.Ju=0;}
function BiM(a,b,c,d){var e=new F9();Mh(e,a,b,c,d);return e;}
function Mh(a,b,c,d,e){Ds(a,b);a.yA=4.0;a.Ju=d;a.uR=e;a.eX=1;a.fe=32<<d;if(d==3)a.fe=a.fe*2|0;a.yA=(d+1|0)*2|0;a.AE=c+d|0;}
function A8T(a,b,c){var d;d=0;while(d<a.uR.data.length){if(a.uR.data[d]===c)return a.yA;d=d+1|0;}return 1.0;}
function A65(a,b,c){FI(b,2);}
function AWn(a,b,c,d,e,f){FI(b,1);}
function AW7(a,b){return a.AE;}
function OS(){F9.call(this);}
var BiN=null;function Bb4(){Bb4=Bt(OS);A9a();}
function LI(a,b){var c=new OS();AFM(c,a,b);return c;}
function AFM(a,b,c){Bb4();Mh(a,b,1,c,BiN);}
function A9a(){var b,c;b=J(P,4);c=b.data;L();c[0]=BeP;c[1]=BeQ;c[2]=Be$;c[3]=Be_;BiN=b;}
function Vr(){F9.call(this);this.nC=0;}
var BiO=null;function Bb7(){Bb7=Bt(Vr);A1L();}
function N_(a,b){var c=new Vr();ANO(c,a,b);return c;}
function ANO(a,b,c){Bb7();Mh(a,b,2,c,BiO);a.nC=c;}
function A5k(a,b){L();return b===Bfj?(a.nC!=3?0:1):b!==BgY&&b!==BgX?(b!==Bfg&&b!==Bfe?(b!==Bff&&b!==Bfd?(b.b$===Bg9?1:b.b$!==Bhm?0:1):a.nC<1?0:1):a.nC<2?0:1):a.nC<2?0:1;}
function A1L(){var b,c;b=J(P,12);c=b.data;L();c[0]=BeX;c[1]=BeR;c[2]=BeS;c[3]=BeT;c[4]=Be4;c[5]=Bfd;c[6]=Bff;c[7]=Bfc;c[8]=Bfg;c[9]=Bfe;c[10]=BgX;c[11]=BgY;BiO=b;}
function Wn(){F9.call(this);}
var BiP=null;function BbH(){BbH=Bt(Wn);AT6();}
function ND(a,b){var c=new Wn();ANC(c,a,b);return c;}
function ANC(a,b,c){BbH();Mh(a,b,3,c,BiP);}
function AT6(){var b,c;b=J(P,4);c=b.data;L();c[0]=BeZ;c[1]=Bfh;c[2]=Be0;c[3]=BgV;BiP=b;}
function AEZ(){Bc.call(this);}
function Bba(a){var b=new AEZ();AYp(b,a);return b;}
function AYp(a,b){Ds(a,b);a.eX=1;a.fe=64;}
function AJH(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;$p=1;case 1:$z=ACt(d,e,f,g);if(C()){break _;}i=$z;if(i){FI(b,1);return 1;}j=e+0.5;k=f+0.5;l=g+0.5;BB();Ex(d,j,k,l,B(280),1.0,N(BhH)*0.4000000059604645+0.800000011920929);L();h=Bgn.b;$p
=2;case 2:APu(d,e,f,g,h);if(C()){break _;}FI(b,1);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function LM(){Bc.call(this);this.zT=0;}
function Ov(a,b){var c=new LM();ZU(c,a,b);return c;}
function ZU(a,b,c){Ds(a,b);a.zT=c;a.eX=1;}
function P4(a,b,c,d){b.q=b.q-1|0;UK(d,a.zT);return b;}
function AOS(){Bc.call(this);}
function Bah(a){var b=new AOS();A2n(b,a);return b;}
function A2n(a,b){Ds(a,b);a.eX=1;}
function AGz(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.K;BB();if(!AGN(e,Bgb.cV))return b;Dh(c,d,B(225),1.0,1.0/(N(BhH)*0.4000000059604645+0.800000011920929));e=AS8(c,d);$p=1;case 1:AOf(c,e);if(C()){break _;}return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AK$(){Bc.call(this);this.zY=0;}
function Ns(a,b){var c=new AK$();A$O(c,a,b);return c;}
function A$O(a,b,c){Ds(a,b);a.eX=1;a.fe=32<<c;a.zY=4+(c*2|0)|0;}
function A0u(a,b,c){return 1.5;}
function A7S(a,b,c){FI(b,1);}
function AX2(a,b,c,d,e,f){FI(b,2);}
function A2y(a,b){return a.zY;}
function AOa(){LM.call(this);}
function BcC(a,b){var c=new AOa();A20(c,a,b);return c;}
function A20(a,b,c){ZU(a,b,c);}
function APt(a,b,c,d){P4(a,b,c,d);b=new Cd;BB();DA(b,Bh4);return b;}
function ANw(){Bc.call(this);}
function Np(a,b){var c=new ANw();ATJ(c,a,b);return c;}
function ATJ(a,b,c){Ds(a,b);a.eX=1;a.fe=32<<c;}
function AQR(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(d,e,f,g);if(C()){break _;}i=$z;h=f+1|0;$p=2;case 2:a:{$z=ABX(d,e,h,g);if(C()){break _;}j=$z;if(!j.du()){L();if(i==BeP.b)break a;}L();if(i!=BeQ.b)return 0;}L();k=Bg1;l=e;m
=l+0.5;n=f;o=n+0.5;p=g;Ex(d,m,o,p+0.5,Kf(k.gI),(k.gI.oO+1.0)/2.0,k.gI.pL*0.800000011920929);h=k.b;$p=3;case 3:APu(d,e,f,g,h);if(C()){break _;}FI(b,1);if(!E(d.r,8)&&i==BeP.b){q=1;r=0;m=n+1.2000000476837158;if(r<q){s=N(d.r)*0.699999988079071+0.15000000596046448;n=N(d.r)*0.699999988079071+0.15000000596046448;t=new E$;o=l+s;u=p+n;c=new Cd;BB();DA(c,BhA);Ha(t,d,o,m,u,c);t.g$=10;$p=4;continue _;}}return 1;case 4:AOf(d,t);if(C()){break _;}r=r+1|0;if(r>=q)return 1;s=N(d.r)*0.699999988079071+0.15000000596046448;n=N(d.r)
*0.699999988079071+0.15000000596046448;t=new E$;o=l+s;u=p+n;c=new Cd;BB();DA(c,BhA);Ha(t,d,o,m,u,c);t.g$=10;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function VQ(){Bc.call(this);this.zH=0;}
function BiQ(a,b){var c=new VQ();AHH(c,a,b);return c;}
function AHH(a,b,c){Ds(a,b);a.zH=c;}
function AFk(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;$p=1;case 1:$z=ACt(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bg1.b)return 0;f=f+1|0;h=a.zH;$p=2;case 2:APu(d,e,f,g,h);if(C()){break _;}b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function F0(){var a=this;Bc.call(a);a.H3=0;a.zS=0;a.y9=0;a.Bz=0;}
var BiR=null;var BiS=null;function Da(a,b,c,d){var e=new F0();ABm(e,a,b,c,d);return e;}
function ABm(a,b,c,d,e){Ds(a,b);a.H3=c;a.zS=e;a.Bz=d;a.y9=BiR.data[e];a.fe=(BiS.data[e]*3|0)<<c;a.eX=1;}
function ARI(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;BiR=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;BiS=b;}
function XR(){Bc.call(this);}
function Baf(a){var b=new XR();AY9(b,a);return b;}
function AY9(a,b){Ds(a,b);a.fe=64;}
function ACa(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)return 0;if(h==1)return 0;i=0;if(h==4)i=1;if(h==3)i=2;if(h==5)i=3;j=new ID;Fz(j,d);j.rs=0;j.dI=0;j.c3=0.0;D1(j,0.5,0.5);j.nm=e;j.Ew=f;j.nt=g;c=Ci();k=BiT.oW().data;e=k.length;f=0;if(f<e){l=k[f];j.dR=l;JM(j,i);$p=1;continue _;}if(c.p>0)j.dR=Z(c,E(j.n,c.p));JM(j,i);$p=2;continue _;case 1:$z
=ZG(j);if(C()){break _;}g=$z;if(g)S(c,l);f=f+1|0;if(f<e){l=k[f];j.dR=l;JM(j,i);continue _;}if(c.p>0)j.dR=Z(c,E(j.n,c.p));JM(j,i);$p=2;case 2:$z=ZG(j);if(C()){break _;}e=$z;if(!e)return 1;$p=3;case 3:AOf(d,j);if(C()){break _;}b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AHp(){Bc.call(this);}
function Bch(a){var b=new AHp();A7F(b,a);return b;}
function A7F(a,b){Ds(a,b);a.fe=64;a.eX=1;}
function Ya(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bg4;$p=1;case 1:$z=i.fT(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;h=Bg4.b;$p=2;case 2:APu(d,e,f,g,h);if(C()){break _;}h=K((c.v+180.0)*16.0/360.0-0.5)&15;$p=3;case 3:AKu(d,e,f,g,h);if(C()){break _;}b.q=b.q-1|0;$p=4;case 4:$z=ANv(d,e,f,g);if(C()){break _;}b=$z;b=b;$p=5;case 5:AI8(c,b);if
(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AJa(){Bc.call(this);}
function A_R(a){var b=new AJa();A26(b,a);return b;}
function A26(a,b){Ds(a,b);a.fe=64;a.eX=1;}
function AD9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bg5;$p=1;case 1:$z=i.fT(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;j=K((c.v+180.0)*4.0/360.0-0.5)&3;k=0;l=0;if(!j)l=1;if(j==1)k=(-1);if(j==2)l=(-1);if(j==3)k=1;m=e-k|0;n=g-l|0;$p=2;case 2:$z
=AAz(d,m,f,n);if(C()){break _;}h=$z;h=!h?0:1;o=f+1|0;$p=3;case 3:$z=AAz(d,m,o,n);if(C()){break _;}p=$z;p=h+(!p?0:1)|0;h=e+k|0;k=g+l|0;$p=4;case 4:$z=AAz(d,h,f,k);if(C()){break _;}l=$z;l=!l?0:1;$p=5;case 5:$z=AAz(d,h,o,k);if(C()){break _;}q=$z;q=l+(!q?0:1)|0;$p=6;case 6:$z=ACt(d,m,f,n);if(C()){break _;}l=$z;if(l!=Bg5.b){$p=7;continue _;}n=1;$p=8;continue _;case 7:$z=ACt(d,m,o,n);if(C()){break _;}m=$z;n=m==Bg5.b?1:0;$p=8;case 8:$z=ACt(d,h,f,k);if(C()){break _;}l=$z;if(l!=Bg5.b){$p=9;continue _;}r=0;if(n&&!1)r
=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bg5.b;$p=10;continue _;case 9:$z=ACt(d,h,o,k);if(C()){break _;}h=$z;m=h==Bg5.b?1:0;r=0;if(n&&!m)r=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bg5.b;$p=10;case 10:APu(d,e,f,g,h);if(C()){break _;}$p=11;case 11:AKu(d,e,f,g,j);if(C()){break _;}f=Bg5.b;$p=12;case 12:APu(d,e,o,g,f);if(C()){break _;}f=j+8|0;$p=13;case 13:AKu(d,e,o,g,f);if(C()){break _;}b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ARK(){Bc.call(this);this.po=0;}
function APW(a,b){var c=new ARK();A0d(c,a,b);return c;}
function A0d(a,b,c){Ds(a,b);a.eX=1;a.fe=64;a.po=c;}
function AHX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.T+(d.J-d.T)*1.0;f=d.P+(d.v-d.P)*1.0;g=BY(d.bT+(d.d-d.bT)*1.0,d.cR+(d.j-d.cR)*1.0,d.bS+(d.e-d.bS)*1.0);h= -f*0.01745329238474369-3.1415927410125732;i=BC(h);h=Bq(h);j= -e*0.01745329238474369;k= -BC(j);l=Dk(g,h*k*5.0,Bq(j)
*5.0,i*k*5.0);m=a.po?0:1;$p=1;case 1:$z=AE1(c,g,l,m);if(C()){break _;}n=$z;if(n===null)return b;if(n.k4)return b;m=n.h9;o=n.h$;p=n.h_;if(!a.po){$p=2;continue _;}if(!n.hI)o=o+(-1)|0;if(n.hI==1)o=o+1|0;if(n.hI==2)p=p+(-1)|0;if(n.hI==3)p=p+1|0;if(n.hI==4)m=m+(-1)|0;if(n.hI==5)m=m+1|0;$p=8;continue _;case 2:$z=ABX(c,m,o,p);if(C()){break _;}g=$z;if(g!==BfO){$p=3;continue _;}$p=4;continue _;case 3:$z=ABX(c,m,o,p);if(C()){break _;}d=$z;if(d!==BfP)return b;$p=5;continue _;case 4:$z=AEH(c,m,o,p);if(C()){break _;}q=$z;if
(q){$p=3;continue _;}q=0;$p=6;continue _;case 5:$z=AEH(c,m,o,p);if(C()){break _;}q=$z;if(q)return b;q=0;$p=7;continue _;case 6:APu(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DA(b,BiD);return b;case 7:APu(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DA(b,BiE);return b;case 8:$z=ACt(c,m,o,p);if(C()){break _;}q=$z;if(q){$p=10;continue _;}q=a.po;r=0;$p=9;case 9:AIW(c,m,o,p,q,r);if(C()){break _;}b=new Cd;BB();DA(b,BiC);return b;case 10:$z=ABX(c,m,o,p);if(C()){break _;}d=$z;if(d.du())return b;q=a.po;r=0;$p=9;continue _;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AO7(){Bc.call(this);}
function BbL(a){var b=new AO7();AW8(b,a);return b;}
function AW8(a,b){Ds(a,b);a.eX=1;}
function AC6(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bg6.b)return 0;c=new Gd;j=e+0.5;k=f+0.5;l=g+0.5;Fz(c,d);c.Bm=J(Cd,36);c.iQ=0;c.ky=0;c.oM=1;c.kJ=0;c.mz=1;D1(c,0.9800000190734863,0.699999988079071);c.c3=c.eM/2.0;c.i7=0;CT(c,j,k+c.c3,l);c.g=0.0;c.i=0.0;c.h=0.0;c.bT=j;c.cR=k;c.bS
=l;$p=2;case 2:AOf(d,c);if(C()){break _;}b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ARc(){Bc.call(this);}
function BcW(a){var b=new ARc();AWx(b,a);return b;}
function AWx(a,b){Ds(a,b);a.eX=1;a.fe=64;}
function AGx(a,b,c){var d;if(c instanceof Iz){d=c;if(!d.qv){d.qv=1;b.q=b.q-1|0;}}}
function AWj(a,b,c){AGx(a,b,c);}
function NX(){}
function AGh(){var a=this;D.call(a);a.d2=Long_ZERO;a.eS=Long_ZERO;}
function A9R(){var a=new AGh();A0b(a);return a;}
function A0b(a){a.d2=Long_fromInt(1);a.eS=Long_ZERO;}
function ASU(a,b){a.d2=Long_and(b,Long_fromInt(65535));a.eS=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AZt(a){a.d2=Long_fromInt(1);a.eS=Long_ZERO;}
function AT0(a){return Long_or(Long_shl(a.eS,16),a.d2);}
function A8f(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.d2=Long_add(a.d2,Long_fromInt(b[c]&255));a.eS=Long_add(a.eS,a.d2);a.d2=Long_rem(a.d2,Long_fromInt(65521));a.eS=Long_rem(a.eS,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.d2;d=c+1|0;a.d2=Long_add(j,Long_fromInt(i[c]&255));a.eS=Long_add(a.eS,a.d2);h=e;c=d;}a.d2=Long_rem(a.d2,Long_fromInt(65521));a.eS=Long_rem(a.eS,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.d2;e=c+1|0;a.d2=Long_add(j,Long_fromInt(i[c]&255));a.eS=Long_add(a.eS,a.d2);f=d;c=e;}a.d2=Long_rem(a.d2,Long_fromInt(65521));a.eS=Long_rem(a.eS,Long_fromInt(65521));}
function R$(){BE.call(this);}
function BiU(){var a=new R$();A6D(a);return a;}
function A6D(a){O(a);}
function Nl(){D.call(this);this.GA=null;}
var Bgl=null;var BiV=null;function AVy(a){var b=new Nl();AH4(b,a);return b;}
function AH4(a,b){a.GA=b;}
function ASk(){Bgl=AVy(B(281));BiV=AVy(B(282));}
function J0(){}
function LJ(){var a=this;D.call(a);a.ge=null;a.e4=null;}
function A4Z(a,b){var c,d;if(a===b)return 1;if(!Sg(b,J0))return 0;a:{b:{c:{c=b;if(a.ge===null){if(c.ge!==null)break c;}else if(!a.ge.em(c.ge))break c;if(a.e4===null){if(c.e4!==null)break c;break b;}if(a.e4.em(c.e4))break b;}d=0;break a;}d=1;}return d;}
function AWQ(a){return a.ge;}
function A2e(a){return a.e4;}
function A1U(a){return (a.ge===null?0:a.ge.fj())^(a.e4===null?0:a.e4.fj());}
function IC(){var a=this;LJ.call(a);a.pS=0;a.eC=null;}
function BO(){B6.call(this);}
function BiW(){var a=new BO();AUt(a);return a;}
function AUt(a){O(a);}
function IU(){BO.call(this);}
function BiX(){var a=new IU();A0V(a);return a;}
function A0V(a){O(a);}
function GD(){}
function Wu(){D.call(this);this.zN=null;}
function AI1(a){var b,c,d,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.zN;try{Bfm=Bfm+1|0;Fs(b);$p=1;continue _;}catch($$e){$$je=Bi($$e);c=$$je;}d=b.mN;$p=2;continue _;case 1:a:{try{b.ko();if(C()){break _;}}catch($$e){$$je=Bi($$e);c=$$je;break a;}c=b.mN;$p=3;continue _;}d=b.mN;$p=2;case 2:AD0(d);if(C()){break _;}a:{try{Xb(b.mN);NP(d);break a;}catch($$e){$$je=Bi($$e);b=$$je;}NP(d);M(b);}b.wz=0;Bfm=Bfm-1|0;Fs(Bfk);M(c);case 3:AD0(c);if
(C()){break _;}a:{try{Xb(b.mN);NP(c);break a;}catch($$e){$$je=Bi($$e);b=$$je;}NP(c);M(b);}b.wz=0;Bfm=Bfm-1|0;Fs(Bfk);return;default:E_();}}C3().s(a,b,c,d,$p);}
function FD(){B1.call(this);}
function BiY(){var a=new FD();AW3(a);return a;}
function AW3(a){O(a);}
function ER(){var a=this;D.call(a);a.hQ=null;a.vs=0.0;a.vt=0.0;}
function G2(a,b,c,d,e){var f=new ER();ASH(f,a,b,c,d,e);return f;}
function ASH(a,b,c,d,e,f){a.hQ=Wo(b,c,d);a.vs=e;a.vt=f;}
function I6(a,b,c){var d;d=new ER;d.hQ=a.hQ;d.vs=b;d.vt=c;return d;}
function Fv(){var a=this;D.call(a);a.hy=null;a.EV=0;}
function BiZ(a,b,c,d,e){var f=new Fv();Hf(f,a,b,c,d,e);return f;}
function Hf(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.EV=0;a.hy=b;a.EV=g.length;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=I6(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=I6(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=I6(h,k,l);g[3]=I6(g[3],i,l);}
function ACS(a){var b,c,d;b=J(ER,a.hy.data.length);c=b.data;d=0;while(d<a.hy.data.length){c[d]=a.hy.data[(a.hy.data.length-d|0)-1|0];d=d+1|0;}a.hy=b;}
function APA(a,b,c){var d,e,f,g;d=P7(a.hy.data[1].hQ,a.hy.data[0].hQ);e=CD(ABP(P7(a.hy.data[1].hQ,a.hy.data[2].hQ),d));Bz(b);Cj(e.x,e.z,e.w);f=0;while(f<4){g=a.hy.data[f];G(b,g.hQ.x*c,g.hQ.z*c,g.hQ.w*c,g.vs,g.vt);f=f+1|0;}Br(b);}
function LH(){var a=this;D.call(a);a.bQ=0;a.os=0;a.rO=Long_ZERO;a.bv=Long_ZERO;a.oD=0;a.dZ=0;a.xU=0;a.iz=null;a.E=null;a.eJ=0;a.iF=0;a.xG=null;a.cI=null;a.fX=null;}
var Bi0=null;function AFH(a){var b;if(a.E===null)return (-2);b=a.E;a.E.no=Long_ZERO;b.G=Long_ZERO;a.E.b8=null;a.bQ=14;a.iF=(-1);JC(a.iz);return 0;}
function AFO(a){if(a.iz!==null)SQ(a.iz);return 0;}
function Xx(a,b){var c,d,e,f;a.E.b8=null;a.iz=null;a.dZ=0;if(b<0)b= -b;else if(b&1073741824){a.dZ=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.dZ=4;b=b&15;}else{a.dZ=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.iz!==null&&a.xU!=b){SQ(a.iz);a.iz=null;}a.xU=b;c=new KC;d=a.E;b=1<<b;c.r_=$rt_createIntArray(1);c.oC=$rt_createIntArray(1);c.mW=$rt_createIntArray(1);c.mU=$rt_createIntArray(1);c.vI=J($rt_arraycls($rt_intcls()),1);c.vJ=J($rt_arraycls($rt_intcls()),1);c.u8=$rt_createIntArray(1);c.vd=$rt_createIntArray(1);c.w3
=Bax();c.y=d;e=new Lz;f=c.y;e.kZ=0;e.bd=f;e.C=c;c.pE=e;c.kh=$rt_createIntArray(4320);c.cZ=$rt_createByteArray(b);c.cP=b;c.rh=d.jv.dZ?1:0;c.dK=0;JC(c);a.iz=c;AFH(a);return 0;}AFO(a);return (-2);}
function AGB(a,b){var c,d,e,f,g,h,i,$$je;if(a.E!==null&&a.E.cf!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bQ){case 6:a.bQ=13;a.E.b8=B(283);a.oD=0;return (-2);case 7:d=Zl(a.iz,d);if(d==(-3)){a.bQ=13;a.oD=0;continue i;}if(!d)d=c;if(d!=1)break i;a.rO=a.E.f9.yx();JC(a.iz);if(!a.dZ){a.bQ=12;d=c;continue i;}a.bQ=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=F4(a,2,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DY)
{e=$$je;return e.hG;}else{throw $$e;}}a.eJ=a.bv.lo&65535;if((a.eJ&255)!=8){a.E.b8=B(284);a.bQ=13;continue i;}if(a.eJ&57344){a.E.b8=B(285);a.bQ=13;continue i;}if(a.eJ&512)Ii(a,2,a.bv);a.bQ=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.E.N)return d;e=a.E;e.N=e.N
-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bQ=9;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bQ=10;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bQ=11;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.eJ)a.bv=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bv,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bv,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.rO.lo!=
a.bv.lo)a.E.b8=B(286);else if(a.eJ&&a.cI!==null)a.cI.Hu=a.bv;a.bQ=15;d=c;}if(!(a.dZ&&a.eJ)){if(a.E.b8===null)break f;if(!DJ(a.E.b8,B(286)))break f;a.bQ=13;a.oD=5;continue i;}try{d=F4(a,4,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;return e.hG;}else{throw $$e;}}if(a.E.b8!==null&&DJ(a.E.b8,B(286))){a.bQ=13;a.oD=5;continue i;}if(Long_eq(a.bv,Long_and(a.E.no,new Long(4294967295, 0)))){a.E.b8=null;break f;}a.E.b8=B(287);a.bQ=13;continue i;}if(!a.dZ){a.bQ=7;continue i;}try{d=F4(a,2,d,c);}catch($$e)
{$$je=Bi($$e);if($$je instanceof DY){e=$$je;return e.hG;}else{throw $$e;}}if(!(a.dZ!=4&&!(a.dZ&2))&&Long_eq(a.bv,Long_fromInt(35615))){if(a.dZ==4)a.dZ=2;a.E.f9=AWg();Ii(a,2,a.bv);if(a.cI===null)a.cI=Bcn();a.bQ=23;continue i;}if(a.dZ&2){a.bQ=13;a.E.b8=B(288);continue i;}a.eJ=0;a.os=a.bv.lo&255;h=Long_shr(a.bv,8).lo&255;if(!(a.dZ&1&&!(((a.os<<8)+h|0)%31|0))&&(a.os&15)!=8){if(a.dZ!=4){a.bQ=13;a.E.b8=B(288);continue i;}e=a.E;e.B=e.B-2|0;e=a.E;e.N=e.N+2|0;e=a.E;e.G=Long_sub(e.G,Long_fromInt(2));a.dZ=0;a.bQ=7;continue i;}if
((a.os&15)!=8){a.bQ=13;a.E.b8=B(284);continue i;}if(a.dZ==4)a.dZ=1;if(((a.os>>4)+8|0)>a.xU){a.bQ=13;a.E.b8=B(289);continue i;}a.E.f9=A9R();if(h&32){a.bQ=2;break d;}a.bQ=7;continue i;}break m;}try{d=F4(a,4,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;return e.hG;}else{throw $$e;}}if(a.cI!==null)a.cI.HO=a.bv;if(a.eJ&512)Ii(a,4,a.bv);a.bQ=17;}try{d=F4(a,2,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;return e.hG;}else{throw $$e;}}if(a.cI!==null){a.cI.I1=a.bv.lo&255;a.cI.A5=a.bv.lo>>
8&255;}if(a.eJ&512)Ii(a,2,a.bv);a.bQ=18;}if(a.eJ&1024){try{d=F4(a,2,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;return e.hG;}else{throw $$e;}}if(a.cI!==null)a.cI.pp=$rt_createByteArray(a.bv.lo&65535);if(a.eJ&512)Ii(a,2,a.bv);}else if(a.cI!==null)a.cI.pp=null;a.bQ=19;}if(a.eJ&1024)x:{try{d=ANN(a,d,c);if(a.cI===null)break x;f=Ia(a.fX);i=f.data;a.fX=null;b=i.length;if(b!=a.cI.pp.data.length){a.E.b8=B(290);a.bQ=13;continue i;}Di(f,0,a.cI.pp,0,b);break x;}catch($$e){$$je=Bi($$e);if($$je instanceof DY)
{e=$$je;return e.hG;}else{throw $$e;}}}else if(a.cI!==null)a.cI.pp=null;a.bQ=20;}y:{if(a.eJ&2048){z:{try{d=PF(a,d,c);if(a.cI===null)break z;a.cI.yL=Ia(a.fX);break z;}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;break h;}else{throw $$e;}}}try{a.fX=null;break y;}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;break h;}else{throw $$e;}}}else if(a.cI!==null)a.cI.yL=null;}a.bQ=21;}ba:{if(a.eJ&4096){bb:{try{d=PF(a,d,c);if(a.cI===null)break bb;a.cI.Av=Ia(a.fX);break bb;}catch($$e){$$je=Bi($$e);if($$je instanceof DY)
{e=$$je;break g;}else{throw $$e;}}}try{a.fX=null;break ba;}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;break g;}else{throw $$e;}}}else if(a.cI!==null)a.cI.Av=null;}a.bQ=22;}if(a.eJ&512){try{d=F4(a,2,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;return e.hG;}else{throw $$e;}}if(a.cI!==null)a.cI.JO=Long_and(a.bv,Long_fromInt(65535)).lo;if(Long_ne(a.bv,Long_and(a.E.f9.yx(),Long_fromInt(65535)))){a.bQ=13;a.E.b8=B(291);a.oD=5;continue;}}a.E.f9=AWg();a.bQ=7;}return d;}return e.hG;}return e.hG;}a.bQ
=12;}return 1;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cf.data;e=a.E;d=e.B;e.B=d+1|0;a.bv=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bQ=3;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;d=e.B;e.B=d+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bQ=4;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e
=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bQ=5;}if(!a.E.N)return c;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.E.f9.EW(a.bv);a.bQ=6;return 2;}if(b==4&&a.bQ==14)return 0;return (-2);}
function F4(a,b,c,d){var e,f,g,h;if(a.iF==(-1)){a.iF=b;a.bv=Long_ZERO;}while(true){if(a.iF<=0){if(b==2)a.bv=Long_and(a.bv,Long_fromInt(65535));else if(b==4)a.bv=Long_and(a.bv,new Long(4294967295, 0));a.iF=(-1);return c;}if(!a.E.N)break;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.bv;g=a.E.cf.data;e=a.E;h=e.B;e.B=h+1|0;a.bv=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.iF|0)*8|0)));a.iF=a.iF-1|0;c=d;}M(AG7(a,c));}
function PF(a,b,c){var d,e;if(a.fX===null)a.fX=A7z();while(true){if(!a.E.N)M(AG7(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));e=a.E.cf.data[a.E.B];if(e)Ro(a.fX,a.E.cf,a.E.B,1);a.E.f9.kG(a.E.cf,a.E.B,1);d=a.E;d.B=d.B+1|0;if(!e)break;b=c;}return c;}
function ANN(a,b,c){var d;if(a.fX===null)a.fX=A7z();while(Long_gt(a.bv,Long_ZERO)){if(!a.E.N)M(AG7(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));Ro(a.fX,a.E.cf,a.E.B,1);a.E.f9.kG(a.E.cf,a.E.B,1);d=a.E;d.B=d.B+1|0;a.bv=Long_sub(a.bv,Long_fromInt(1));b=c;}return b;}
function Ii(a,b,c){var d;d=0;while(d<b){a.xG.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.E.f9.kG(a.xG,0,b);}
function AOG(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);Bi0=b;}
function PK(){E4.call(this);}
function Bi1(){var a=new PK();A6J(a);return a;}
function A6J(a){return;}
function A57(a,b){$rt_putStderr(b);}
function Ki(){var a=this;D.call(a);a.x=0.0;a.z=0.0;a.w=0.0;}
var Bi2=null;var BeL=0;function Wo(b,c,d){var e;e=new Ki;if(b===-0.0)b=0.0;if(c===-0.0)c=0.0;if(d===-0.0)d=0.0;e.x=b;e.z=c;e.w=d;return e;}
function BY(b,c,d){var e,f;if(BeL>=Bi2.p)S(Bi2,Wo(0.0,0.0,0.0));e=Bi2;f=BeL;BeL=f+1|0;e=Z(e,f);e.x=b;e.z=c;e.w=d;return e;}
function P7(a,b){return BY(b.x-a.x,b.z-a.z,b.w-a.w);}
function CD(a){var b;b=Ce(a.x*a.x+a.z*a.z+a.w*a.w);return b<1.0E-4?BY(0.0,0.0,0.0):BY(a.x/b,a.z/b,a.w/b);}
function ABP(a,b){return BY(a.z*b.w-a.w*b.z,a.w*b.x-a.x*b.w,a.x*b.z-a.z*b.x);}
function Dk(a,b,c,d){return BY(a.x+b,a.z+c,a.w+d);}
function DG(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return Ce(c*c+d*d+e*e);}
function Ey(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return c*c+d*d+e*e;}
function ABT(a,b,c,d){var e,f,g;e=b-a.x;f=c-a.z;g=d-a.w;return e*e+f*f+g*g;}
function HM(a){return Ce(a.x*a.x+a.z*a.z+a.w*a.w);}
function KL(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(d*d<1.0000000116860974E-7)return null;g=(c-a.x)/d;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function JS(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(e*e<1.0000000116860974E-7)return null;g=(c-a.z)/e;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function Kv(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(f*f<1.0000000116860974E-7)return null;g=(c-a.w)/f;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function AQa(){Bi2=Ci();BeL=0;}
function AMl(){D.call(this);}
function Bi3(){var a=new AMl();ATx(a);return a;}
function ATx(a){return;}
function Go(b){return Math.sin(b);}
function GB(b){return Math.cos(b);}
function Io(b){return Math.atan(b);}
function A3R(b){return Math.log(b);}
function Ed(b){return Math.sqrt(b);}
function Uo(b){return Math.ceil(b);}
function A2M(b,c){return Math.pow(b,c);}
function CR(b,c){return Math.atan2(b,c);}
function BP(){return A2o();}
function A2o(){return Math.random();}
function CB(b,c){if(b<c)c=b;return c;}
function DB(b,c){if(b>c)c=b;return c;}
function H_(b){if(b<=0)b= -b;return b;}
function HU(b){if(b<=0.0)b= -b;return b;}
function Jb(){D.call(this);this.GS=null;}
var Bi4=null;var Bf6=null;var BiH=null;function AGO(a){var b=new Jb();APE(b,a);return b;}
function APE(a,b){a.GS=b;}
function AC5(){Bi4=AGO(B(292));Bf6=AGO(B(293));BiH=AGO(B(294));}
function Lr(){LT.call(this);}
function Xk(a){return a.yv;}
function ABK(){var a=this;Lr.call(a);a.yv=0;a.ya=0;a.md=null;}
function AZE(a,b,c,d,e,f){var g=new ABK();A2C(g,a,b,c,d,e,f);return g;}
function A2C(a,b,c,d,e,f,g){KN(a,c);a.bk=e;a.cy=f;a.ya=b;a.yv=g;a.md=d;}
function AOM(a,b){return a.md.data[b+a.ya|0];}
function Vq(a,b,c){a.md.data[b+a.ya|0]=c;}
function AYX(a){return 1;}
function AWd(a){return a.md;}
function A13(a){return a.yv;}
function LP(){var a=this;D.call(a);a.Ht=null;a.uy=null;a.Gw=0.0;a.BJ=0.0;a.vr=null;a.uL=null;a.mZ=0;}
function ACO(a,b){var c;if(b!==null){a.vr=b;return a;}c=new Cb;Bl(c,B(295));M(c);}
function A17(a,b){return;}
function AGU(a,b){var c;if(b!==null){a.uL=b;return a;}c=new Cb;Bl(c,B(295));M(c);}
function A6z(a,b){return;}
function AJb(a,b,c,d){var e,f,g,h,$$je;a:{if(a.mZ!=3){if(d)break a;if(a.mZ!=2)break a;}b=new D2;O(b);M(b);}a.mZ=!d?1:2;while(true){try{e=Y0(a,b,c);}catch($$e){$$je=Bi($$e);if($$je instanceof B6){f=$$je;M(A40(f));}else{throw $$e;}}if(Jx(e)){if(!d)return e;g=Ct(b);if(g<=0)return e;e=Fi(g);}else if(IO(e))break;h=!Mr(e)?a.vr:a.uL;b:{if(h!==Bf6){if(h===Bi4)break b;else return e;}if(Ct(c)<a.uy.data.length)return Bi5;UH(c,a.uy);}EO(b,b.bk+Lw(e)|0);}return e;}
function XW(a,b){var c;if(a.mZ!=2&&a.mZ!=4){b=new D2;O(b);M(b);}c=Bi6;if(c===Bi6)a.mZ=3;return c;}
function A7r(a,b){return Bi6;}
function N6(){var a=this;D.call(a);a.nr=0;a.qE=0;}
var Bi6=null;var Bi5=null;function Ze(a,b){var c=new N6();AKh(c,a,b);return c;}
function AKh(a,b,c){a.nr=b;a.qE=c;}
function Jx(a){return a.nr?0:1;}
function IO(a){return a.nr!=1?0:1;}
function Nv(a){return !P$(a)&&!Mr(a)?0:1;}
function P$(a){return a.nr!=2?0:1;}
function Mr(a){return a.nr!=3?0:1;}
function Lw(a){var b;if(Nv(a))return a.qE;b=new Jk;O(b);M(b);}
function Fi(b){return Ze(2,b);}
function R2(a){var b,c;switch(a.nr){case 0:b=new PZ;O(b);M(b);case 1:b=new SD;O(b);M(b);case 2:b=new RT;c=a.qE;O(b);b.Br=c;M(b);case 3:b=new PV;c=a.qE;O(b);b.EI=c;M(b);default:}}
function AKP(){Bi6=Ze(0,0);Bi5=Ze(1,0);}
function Z6(){D.call(this);}
function A9X(){return {};}
function PL(){}
function Yz(){D.call(this);}
function KC(){var a=this;D.call(a);a.dK=0;a.pJ=0;a.p7=0;a.f3=0;a.fA=null;a.r_=null;a.oC=null;a.mW=null;a.mU=null;a.vI=null;a.vJ=null;a.u8=null;a.vd=null;a.pE=null;a.tm=0;a.bL=0;a.bK=0;a.kh=null;a.cZ=null;a.cP=0;a.bW=0;a.bl=0;a.rh=0;a.w3=null;a.y=null;}
var Bi7=null;var Bi8=null;function JC(a){a.dK=0;a.bL=0;a.bK=0;a.bl=0;a.bW=0;if(a.rh)a.y.f9.lW();}
function Zl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.y.B;d=a.y.N;e=a.bK;f=a.bL;g=a.bl;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.dK){case 2:break f;case 9:a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.p7=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.fA!==null&&a.fA.data.length>=k))a.fA=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.fA.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.f3=0;a.dK=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-2));}while(f<32){if(!d){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.dK=9;a.y.b8=B(296);a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.pJ=l;f=0;a.dK=a.pJ?2:!a.tm?0:7;e=f;continue e;}while(f<3){if(!d){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.tm=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.dK=1;break l;case 1:AEh(a.mW,a.mU,a.vI,a.vJ,a.y);W1(a.pE,a.mW.data[0],a.mU.data[0],a.vI.data[0],0,a.vJ.data[0],0);e=e>>>3;f=f+(-3)|0;a.dK=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.dK=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.dK=9;a.y.b8=B(297);a.bK=b;a.bL=k;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));default:}}continue e;}while(a.f3<(4+(a.p7>>>10)|0)){while(f<3){if(!d){a.bK=e;a.bL
=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.fA.data;j=Bi8.data;k=a.f3;a.f3=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.f3<19){o=a.fA.data;j=Bi8.data;k=a.f3;a.f3=k+1|0;o[j[k]]=0;}a.r_.data[0]=7;k=APY(a.w3,a.fA,a.r_,a.oC,a.kh,a.y);if(k){if(k==(-3)){a.fA=null;a.dK=9;}a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,k);}a.f3=0;a.dK=5;}while(true)
{k=a.p7;if(a.f3>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.r_.data[0];while(f<k){if(!d){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.kh.data[((a.oC.data[0]+(e&Bi7.data[k])|0)*3|0)+1|0];n=a.kh.data[((a.oC.data[0]+(e&Bi7.data[k])|0)*3|0)+2|0];l=R(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.fA.data;k=a.f3;a.f3=k+1|0;j[k]=n;}else{p=R(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bK=e;a.bL=
f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&Bi7.data[q])|0;e=n>>>q;f=k-q|0;h=a.f3;q=a.p7;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.fA.data[h-1|0];while(true){j=a.fA.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.f3=l;}}a.oC.data[0]=(-1);a.mW.data[0]=9;a.mU.data[0]=6;k=a.p7;k=YC(a.w3,257+(k&31)|0,1+(k>>5&31)|0,a.fA,a.mW,a.mU,a.u8,a.vd,a.kh,
a.y);if(k){if(k==(-3)){a.fA=null;a.dK=9;}a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,k);}W1(a.pE,a.mW.data[0],a.mU.data[0],a.kh,a.u8.data[0],a.kh,a.vd.data[0]);a.dK=6;}a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;b=ABy(a.pE,b);if(b!=1)break e;b=0;AAK(a.pE,a.y);c=a.y.B;d=a.y.N;e=a.bK;f=a.bL;g=a.bl;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;if(a.tm){a.dK=7;break b;}a.dK=0;continue e;}if(!d){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}if(!h){if(g==a.cP&&a.bW){g=0;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;}if(!h){a.bl=g;b=B5(a,b);g=a.bl;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;if(g==a.cP&&a.bW){g=0;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;}if(!h){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}}}b=0;k=a.pJ;if(k>d)k=d;if(k>h)k=h;Di(a.y.cf,c,a.cZ,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.pJ-k|0;a.pJ=k;if(k)continue;a.dK=!a.tm?0:7;}return B5(a,b);}a.dK=9;a.y.b8
=B(298);a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.fA=null;a.dK=9;a.y.b8=B(299);a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.bl=g;b=B5(a,b);g=a.bl;if(a.bW!=a.bl){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}a.dK=8;}a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,1);}
function SQ(a){JC(a);a.cZ=null;a.kh=null;}
function B5(a,b){var c,d,e,f,g;c=a.y.pM;d=a.bW;e=(d>a.bl?a.cP:a.bl)-d|0;if(e>a.y.ib)e=a.y.ib;if(e&&b==(-5))b=0;f=a.y;f.ib=f.ib-e|0;f=a.y;f.no=Long_add(f.no,Long_fromInt(e));if(a.rh&&e>0)a.y.f9.kG(a.cZ,d,e);Di(a.cZ,d,a.y.uT,c,e);c=c+e|0;g=d+e|0;if(g==a.cP){if(a.bl==a.cP)a.bl=0;d=a.bl-0|0;if(d>a.y.ib)d=a.y.ib;if(d&&b==(-5))b=0;f=a.y;f.ib=f.ib-d|0;f=a.y;f.no=Long_add(f.no,Long_fromInt(d));if(a.rh&&d>0)a.y.f9.kG(a.cZ,0,d);Di(a.cZ,0,a.y.uT,c,d);c=c+d|0;g=0+d|0;}a.y.pM=c;a.bW=g;return b;}
function AH2(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bi7=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;Bi8=b;}
function Nz(){LP.call(this);}
function Y0(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fl(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);OY(b,d,k,g-k|0);f=0;}if(!Fl(c)){l=!Fl(b)&&f>=g?Bi6:Bi5;break a;}k=CB(Ct(c),i.length);m=new Ts;m.yQ=b;m.Dd=c;l=ACw(a,d,f,g,h,0,k,m);f=m.vF;if(l===null&&0==m.rI)l=Bi6;WT(c,h,0,m.rI);if(l!==null)break;}}EO(b,b.bk-(g-f|0)|0);return l;}
function PM(){Nz.call(this);}
function ACw(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(N5(h,2))break a;i=Bi5;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!On(l)){if((f+3|0)>g){j=j+(-1)|0;if(N5(h,3))break a;i=Bi5;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Dt(l)){i=Fi(1);break a;}if
(j>=d){if(AAv(h))break a;i=Bi6;break a;}c=j+1|0;j=k[j];if(!DR(j)){j=c+(-2)|0;i=Fi(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(N5(h,4))break a;i=Bi5;break a;}k=e.data;n=EJ(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vF=j;h.rI=f;return i;}
function AOn(){D.call(this);}
function Bi9(){var a=new AOn();A2N(a);return a;}
function A2N(a){return;}
function APe(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Bhe());}return b.data.length;}
function AEF(b,c){if(b===null){b=new EE;O(b);M(b);}if(b===F($rt_voidcls())){b=new Cb;O(b);M(b);}if(c>=0)return A1P(b.fY,c);b=new Xq;O(b);M(b);}
function A1P(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function F$(){var a=this;D.call(a);a.jW=null;a.j4=null;a.eP=null;a.fI=null;a.lg=null;a.im=null;}
var Bi$=null;var Bi_=null;var Bja=null;var Bjb=null;var Bjc=null;var Bjd=null;function Bax(){var a=new F$();AHE(a);return a;}
function AHE(a){a.jW=null;a.j4=null;a.eP=null;a.fI=null;a.lg=null;a.im=null;}
function NC(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eP.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eP.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eP.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eP.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m=s;while(true){if(m>=t){v=u-a.eP.data[t]|0;if(v<0)return (-3);b=a.eP.data;b[t]
=b[t]+v|0;b=a.im.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.im.data;u=u+a.eP.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.im.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.im.data[t];b=a.im.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.lg.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eP.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c
=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eP.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eP.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.lg.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.im.data[y]=m;a.fI.data[0]=bc<<24>>24;a.fI.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.fI.data;b=a.lg.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;Di(a.fI,0,j,(a.lg.data[q]+c|0)*3|0,3);z=be;}b=a.fI.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.fI.data[0]=192;else{p=l.data;if
(p[w]>=e){i=g.data;o=f.data;a.fI.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.fI.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.fI;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.fI.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){Di(a.fI,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.im.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eP.data[m]|0;if(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function APY(a,b,c,d,e,f){var g;MX(a,19);a.jW.data[0]=0;g=NC(a,b,0,19,19,null,null,d,c,e,a.jW,a.j4);if(g==(-3))f.b8=B(300);else if(!(g!=(-5)&&c.data[0])){f.b8=B(301);g=(-3);}return g;}
function YC(a,b,c,d,e,f,g,h,i,j){var k;MX(a,288);a.jW.data[0]=0;k=NC(a,d,0,b,257,Bja,Bjb,g,e,i,a.jW,a.j4);if(!k&&e.data[0]){MX(a,288);c=NC(a,d,b,c,0,Bjc,Bjd,h,f,i,a.jW,a.j4);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.b8=B(302);else if(c==(-5)){j.b8=B(303);c=(-3);}else if(c!=(-4)){j.b8=B(304);c=(-3);}return c;}if(k==(-3))j.b8=B(305);else if(k!=(-4)){j.b8=B(306);k=(-3);}return k;}
function AEh(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=Bi$;e[0]=Bi_;return 0;}
function MX(a,b){var c;if(a.jW===null){a.jW=$rt_createIntArray(1);a.j4=$rt_createIntArray(b);a.eP=$rt_createIntArray(16);a.fI=$rt_createIntArray(3);a.lg=$rt_createIntArray(15);a.im=$rt_createIntArray(16);}if(a.j4.data.length<b)a.j4=$rt_createIntArray(b);c=0;while(c<b){a.j4.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eP.data[c]=0;c=c+1|0;}c=0;while(c<3){a.fI.data[c]=0;c=c+1|0;}Di(a.eP,0,a.lg,0,15);Di(a.eP,0,a.im,0,16);}
function AOo(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
=0;c[55]=8;c[56]=24;c[57]=0;c[58]=9;c[59]=144;c[60]=83;c[61]=7;c[62]=59;c[63]=0;c[64]=8;c[65]=120;c[66]=0;c[67]=8;c[68]=56;c[69]=0;c[70]=9;c[71]=208;c[72]=81;c[73]=7;c[74]=17;c[75]=0;c[76]=8;c[77]=104;c[78]=0;c[79]=8;c[80]=40;c[81]=0;c[82]=9;c[83]=176;c[84]=0;c[85]=8;c[86]=8;c[87]=0;c[88]=8;c[89]=136;c[90]=0;c[91]=8;c[92]=72;c[93]=0;c[94]=9;c[95]=240;c[96]=80;c[97]=7;c[98]=4;c[99]=0;c[100]=8;c[101]=84;c[102]=0;c[103]=8;c[104]=20;c[105]=85;c[106]=8;c[107]=227;c[108]=83;c[109]=7;c[110]=43;c[111]=0;c[112]=8;c[113]
=116;c[114]=0;c[115]=8;c[116]=52;c[117]=0;c[118]=9;c[119]=200;c[120]=81;c[121]=7;c[122]=13;c[123]=0;c[124]=8;c[125]=100;c[126]=0;c[127]=8;c[128]=36;c[129]=0;c[130]=9;c[131]=168;c[132]=0;c[133]=8;c[134]=4;c[135]=0;c[136]=8;c[137]=132;c[138]=0;c[139]=8;c[140]=68;c[141]=0;c[142]=9;c[143]=232;c[144]=80;c[145]=7;c[146]=8;c[147]=0;c[148]=8;c[149]=92;c[150]=0;c[151]=8;c[152]=28;c[153]=0;c[154]=9;c[155]=152;c[156]=84;c[157]=7;c[158]=83;c[159]=0;c[160]=8;c[161]=124;c[162]=0;c[163]=8;c[164]=60;c[165]=0;c[166]=9;c[167]
=216;c[168]=82;c[169]=7;c[170]=23;c[171]=0;c[172]=8;c[173]=108;c[174]=0;c[175]=8;c[176]=44;c[177]=0;c[178]=9;c[179]=184;c[180]=0;c[181]=8;c[182]=12;c[183]=0;c[184]=8;c[185]=140;c[186]=0;c[187]=8;c[188]=76;c[189]=0;c[190]=9;c[191]=248;c[192]=80;c[193]=7;c[194]=3;c[195]=0;c[196]=8;c[197]=82;c[198]=0;c[199]=8;c[200]=18;c[201]=85;c[202]=8;c[203]=163;c[204]=83;c[205]=7;c[206]=35;c[207]=0;c[208]=8;c[209]=114;c[210]=0;c[211]=8;c[212]=50;c[213]=0;c[214]=9;c[215]=196;c[216]=81;c[217]=7;c[218]=11;c[219]=0;c[220]=8;c[221]
=98;c[222]=0;c[223]=8;c[224]=34;c[225]=0;c[226]=9;c[227]=164;c[228]=0;c[229]=8;c[230]=2;c[231]=0;c[232]=8;c[233]=130;c[234]=0;c[235]=8;c[236]=66;c[237]=0;c[238]=9;c[239]=228;c[240]=80;c[241]=7;c[242]=7;c[243]=0;c[244]=8;c[245]=90;c[246]=0;c[247]=8;c[248]=26;c[249]=0;c[250]=9;c[251]=148;c[252]=84;c[253]=7;c[254]=67;c[255]=0;c[256]=8;c[257]=122;c[258]=0;c[259]=8;c[260]=58;c[261]=0;c[262]=9;c[263]=212;c[264]=82;c[265]=7;c[266]=19;c[267]=0;c[268]=8;c[269]=106;c[270]=0;c[271]=8;c[272]=42;c[273]=0;c[274]=9;c[275]
=180;c[276]=0;c[277]=8;c[278]=10;c[279]=0;c[280]=8;c[281]=138;c[282]=0;c[283]=8;c[284]=74;c[285]=0;c[286]=9;c[287]=244;c[288]=80;c[289]=7;c[290]=5;c[291]=0;c[292]=8;c[293]=86;c[294]=0;c[295]=8;c[296]=22;c[297]=192;c[298]=8;c[299]=0;c[300]=83;c[301]=7;c[302]=51;c[303]=0;c[304]=8;c[305]=118;c[306]=0;c[307]=8;c[308]=54;c[309]=0;c[310]=9;c[311]=204;c[312]=81;c[313]=7;c[314]=15;c[315]=0;c[316]=8;c[317]=102;c[318]=0;c[319]=8;c[320]=38;c[321]=0;c[322]=9;c[323]=172;c[324]=0;c[325]=8;c[326]=6;c[327]=0;c[328]=8;c[329]
=134;c[330]=0;c[331]=8;c[332]=70;c[333]=0;c[334]=9;c[335]=236;c[336]=80;c[337]=7;c[338]=9;c[339]=0;c[340]=8;c[341]=94;c[342]=0;c[343]=8;c[344]=30;c[345]=0;c[346]=9;c[347]=156;c[348]=84;c[349]=7;c[350]=99;c[351]=0;c[352]=8;c[353]=126;c[354]=0;c[355]=8;c[356]=62;c[357]=0;c[358]=9;c[359]=220;c[360]=82;c[361]=7;c[362]=27;c[363]=0;c[364]=8;c[365]=110;c[366]=0;c[367]=8;c[368]=46;c[369]=0;c[370]=9;c[371]=188;c[372]=0;c[373]=8;c[374]=14;c[375]=0;c[376]=8;c[377]=142;c[378]=0;c[379]=8;c[380]=78;c[381]=0;c[382]=9;c[383]
=252;c[384]=96;c[385]=7;c[386]=256;c[387]=0;c[388]=8;c[389]=81;c[390]=0;c[391]=8;c[392]=17;c[393]=85;c[394]=8;c[395]=131;c[396]=82;c[397]=7;c[398]=31;c[399]=0;c[400]=8;c[401]=113;c[402]=0;c[403]=8;c[404]=49;c[405]=0;c[406]=9;c[407]=194;c[408]=80;c[409]=7;c[410]=10;c[411]=0;c[412]=8;c[413]=97;c[414]=0;c[415]=8;c[416]=33;c[417]=0;c[418]=9;c[419]=162;c[420]=0;c[421]=8;c[422]=1;c[423]=0;c[424]=8;c[425]=129;c[426]=0;c[427]=8;c[428]=65;c[429]=0;c[430]=9;c[431]=226;c[432]=80;c[433]=7;c[434]=6;c[435]=0;c[436]=8;c[437]
=89;c[438]=0;c[439]=8;c[440]=25;c[441]=0;c[442]=9;c[443]=146;c[444]=83;c[445]=7;c[446]=59;c[447]=0;c[448]=8;c[449]=121;c[450]=0;c[451]=8;c[452]=57;c[453]=0;c[454]=9;c[455]=210;c[456]=81;c[457]=7;c[458]=17;c[459]=0;c[460]=8;c[461]=105;c[462]=0;c[463]=8;c[464]=41;c[465]=0;c[466]=9;c[467]=178;c[468]=0;c[469]=8;c[470]=9;c[471]=0;c[472]=8;c[473]=137;c[474]=0;c[475]=8;c[476]=73;c[477]=0;c[478]=9;c[479]=242;c[480]=80;c[481]=7;c[482]=4;c[483]=0;c[484]=8;c[485]=85;c[486]=0;c[487]=8;c[488]=21;c[489]=80;c[490]=8;c[491]
=258;c[492]=83;c[493]=7;c[494]=43;c[495]=0;c[496]=8;c[497]=117;c[498]=0;c[499]=8;c[500]=53;c[501]=0;c[502]=9;c[503]=202;c[504]=81;c[505]=7;c[506]=13;c[507]=0;c[508]=8;c[509]=101;c[510]=0;c[511]=8;c[512]=37;c[513]=0;c[514]=9;c[515]=170;c[516]=0;c[517]=8;c[518]=5;c[519]=0;c[520]=8;c[521]=133;c[522]=0;c[523]=8;c[524]=69;c[525]=0;c[526]=9;c[527]=234;c[528]=80;c[529]=7;c[530]=8;c[531]=0;c[532]=8;c[533]=93;c[534]=0;c[535]=8;c[536]=29;c[537]=0;c[538]=9;c[539]=154;c[540]=84;c[541]=7;c[542]=83;c[543]=0;c[544]=8;c[545]
=125;c[546]=0;c[547]=8;c[548]=61;c[549]=0;c[550]=9;c[551]=218;c[552]=82;c[553]=7;c[554]=23;c[555]=0;c[556]=8;c[557]=109;c[558]=0;c[559]=8;c[560]=45;c[561]=0;c[562]=9;c[563]=186;c[564]=0;c[565]=8;c[566]=13;c[567]=0;c[568]=8;c[569]=141;c[570]=0;c[571]=8;c[572]=77;c[573]=0;c[574]=9;c[575]=250;c[576]=80;c[577]=7;c[578]=3;c[579]=0;c[580]=8;c[581]=83;c[582]=0;c[583]=8;c[584]=19;c[585]=85;c[586]=8;c[587]=195;c[588]=83;c[589]=7;c[590]=35;c[591]=0;c[592]=8;c[593]=115;c[594]=0;c[595]=8;c[596]=51;c[597]=0;c[598]=9;c[599]
=198;c[600]=81;c[601]=7;c[602]=11;c[603]=0;c[604]=8;c[605]=99;c[606]=0;c[607]=8;c[608]=35;c[609]=0;c[610]=9;c[611]=166;c[612]=0;c[613]=8;c[614]=3;c[615]=0;c[616]=8;c[617]=131;c[618]=0;c[619]=8;c[620]=67;c[621]=0;c[622]=9;c[623]=230;c[624]=80;c[625]=7;c[626]=7;c[627]=0;c[628]=8;c[629]=91;c[630]=0;c[631]=8;c[632]=27;c[633]=0;c[634]=9;c[635]=150;c[636]=84;c[637]=7;c[638]=67;c[639]=0;c[640]=8;c[641]=123;c[642]=0;c[643]=8;c[644]=59;c[645]=0;c[646]=9;c[647]=214;c[648]=82;c[649]=7;c[650]=19;c[651]=0;c[652]=8;c[653]
=107;c[654]=0;c[655]=8;c[656]=43;c[657]=0;c[658]=9;c[659]=182;c[660]=0;c[661]=8;c[662]=11;c[663]=0;c[664]=8;c[665]=139;c[666]=0;c[667]=8;c[668]=75;c[669]=0;c[670]=9;c[671]=246;c[672]=80;c[673]=7;c[674]=5;c[675]=0;c[676]=8;c[677]=87;c[678]=0;c[679]=8;c[680]=23;c[681]=192;c[682]=8;c[683]=0;c[684]=83;c[685]=7;c[686]=51;c[687]=0;c[688]=8;c[689]=119;c[690]=0;c[691]=8;c[692]=55;c[693]=0;c[694]=9;c[695]=206;c[696]=81;c[697]=7;c[698]=15;c[699]=0;c[700]=8;c[701]=103;c[702]=0;c[703]=8;c[704]=39;c[705]=0;c[706]=9;c[707]
=174;c[708]=0;c[709]=8;c[710]=7;c[711]=0;c[712]=8;c[713]=135;c[714]=0;c[715]=8;c[716]=71;c[717]=0;c[718]=9;c[719]=238;c[720]=80;c[721]=7;c[722]=9;c[723]=0;c[724]=8;c[725]=95;c[726]=0;c[727]=8;c[728]=31;c[729]=0;c[730]=9;c[731]=158;c[732]=84;c[733]=7;c[734]=99;c[735]=0;c[736]=8;c[737]=127;c[738]=0;c[739]=8;c[740]=63;c[741]=0;c[742]=9;c[743]=222;c[744]=82;c[745]=7;c[746]=27;c[747]=0;c[748]=8;c[749]=111;c[750]=0;c[751]=8;c[752]=47;c[753]=0;c[754]=9;c[755]=190;c[756]=0;c[757]=8;c[758]=15;c[759]=0;c[760]=8;c[761]
=143;c[762]=0;c[763]=8;c[764]=79;c[765]=0;c[766]=9;c[767]=254;c[768]=96;c[769]=7;c[770]=256;c[771]=0;c[772]=8;c[773]=80;c[774]=0;c[775]=8;c[776]=16;c[777]=84;c[778]=8;c[779]=115;c[780]=82;c[781]=7;c[782]=31;c[783]=0;c[784]=8;c[785]=112;c[786]=0;c[787]=8;c[788]=48;c[789]=0;c[790]=9;c[791]=193;c[792]=80;c[793]=7;c[794]=10;c[795]=0;c[796]=8;c[797]=96;c[798]=0;c[799]=8;c[800]=32;c[801]=0;c[802]=9;c[803]=161;c[804]=0;c[805]=8;c[806]=0;c[807]=0;c[808]=8;c[809]=128;c[810]=0;c[811]=8;c[812]=64;c[813]=0;c[814]=9;c[815]
=225;c[816]=80;c[817]=7;c[818]=6;c[819]=0;c[820]=8;c[821]=88;c[822]=0;c[823]=8;c[824]=24;c[825]=0;c[826]=9;c[827]=145;c[828]=83;c[829]=7;c[830]=59;c[831]=0;c[832]=8;c[833]=120;c[834]=0;c[835]=8;c[836]=56;c[837]=0;c[838]=9;c[839]=209;c[840]=81;c[841]=7;c[842]=17;c[843]=0;c[844]=8;c[845]=104;c[846]=0;c[847]=8;c[848]=40;c[849]=0;c[850]=9;c[851]=177;c[852]=0;c[853]=8;c[854]=8;c[855]=0;c[856]=8;c[857]=136;c[858]=0;c[859]=8;c[860]=72;c[861]=0;c[862]=9;c[863]=241;c[864]=80;c[865]=7;c[866]=4;c[867]=0;c[868]=8;c[869]
=84;c[870]=0;c[871]=8;c[872]=20;c[873]=85;c[874]=8;c[875]=227;c[876]=83;c[877]=7;c[878]=43;c[879]=0;c[880]=8;c[881]=116;c[882]=0;c[883]=8;c[884]=52;c[885]=0;c[886]=9;c[887]=201;c[888]=81;c[889]=7;c[890]=13;c[891]=0;c[892]=8;c[893]=100;c[894]=0;c[895]=8;c[896]=36;c[897]=0;c[898]=9;c[899]=169;c[900]=0;c[901]=8;c[902]=4;c[903]=0;c[904]=8;c[905]=132;c[906]=0;c[907]=8;c[908]=68;c[909]=0;c[910]=9;c[911]=233;c[912]=80;c[913]=7;c[914]=8;c[915]=0;c[916]=8;c[917]=92;c[918]=0;c[919]=8;c[920]=28;c[921]=0;c[922]=9;c[923]
=153;c[924]=84;c[925]=7;c[926]=83;c[927]=0;c[928]=8;c[929]=124;c[930]=0;c[931]=8;c[932]=60;c[933]=0;c[934]=9;c[935]=217;c[936]=82;c[937]=7;c[938]=23;c[939]=0;c[940]=8;c[941]=108;c[942]=0;c[943]=8;c[944]=44;c[945]=0;c[946]=9;c[947]=185;c[948]=0;c[949]=8;c[950]=12;c[951]=0;c[952]=8;c[953]=140;c[954]=0;c[955]=8;c[956]=76;c[957]=0;c[958]=9;c[959]=249;c[960]=80;c[961]=7;c[962]=3;c[963]=0;c[964]=8;c[965]=82;c[966]=0;c[967]=8;c[968]=18;c[969]=85;c[970]=8;c[971]=163;c[972]=83;c[973]=7;c[974]=35;c[975]=0;c[976]=8;c[977]
=114;c[978]=0;c[979]=8;c[980]=50;c[981]=0;c[982]=9;c[983]=197;c[984]=81;c[985]=7;c[986]=11;c[987]=0;c[988]=8;c[989]=98;c[990]=0;c[991]=8;c[992]=34;c[993]=0;c[994]=9;c[995]=165;c[996]=0;c[997]=8;c[998]=2;c[999]=0;c[1000]=8;c[1001]=130;c[1002]=0;c[1003]=8;c[1004]=66;c[1005]=0;c[1006]=9;c[1007]=229;c[1008]=80;c[1009]=7;c[1010]=7;c[1011]=0;c[1012]=8;c[1013]=90;c[1014]=0;c[1015]=8;c[1016]=26;c[1017]=0;c[1018]=9;c[1019]=149;c[1020]=84;c[1021]=7;c[1022]=67;c[1023]=0;c[1024]=8;c[1025]=122;c[1026]=0;c[1027]=8;c[1028]
=58;c[1029]=0;c[1030]=9;c[1031]=213;c[1032]=82;c[1033]=7;c[1034]=19;c[1035]=0;c[1036]=8;c[1037]=106;c[1038]=0;c[1039]=8;c[1040]=42;c[1041]=0;c[1042]=9;c[1043]=181;c[1044]=0;c[1045]=8;c[1046]=10;c[1047]=0;c[1048]=8;c[1049]=138;c[1050]=0;c[1051]=8;c[1052]=74;c[1053]=0;c[1054]=9;c[1055]=245;c[1056]=80;c[1057]=7;c[1058]=5;c[1059]=0;c[1060]=8;c[1061]=86;c[1062]=0;c[1063]=8;c[1064]=22;c[1065]=192;c[1066]=8;c[1067]=0;c[1068]=83;c[1069]=7;c[1070]=51;c[1071]=0;c[1072]=8;c[1073]=118;c[1074]=0;c[1075]=8;c[1076]=54;c[1077]
=0;c[1078]=9;c[1079]=205;c[1080]=81;c[1081]=7;c[1082]=15;c[1083]=0;c[1084]=8;c[1085]=102;c[1086]=0;c[1087]=8;c[1088]=38;c[1089]=0;c[1090]=9;c[1091]=173;c[1092]=0;c[1093]=8;c[1094]=6;c[1095]=0;c[1096]=8;c[1097]=134;c[1098]=0;c[1099]=8;c[1100]=70;c[1101]=0;c[1102]=9;c[1103]=237;c[1104]=80;c[1105]=7;c[1106]=9;c[1107]=0;c[1108]=8;c[1109]=94;c[1110]=0;c[1111]=8;c[1112]=30;c[1113]=0;c[1114]=9;c[1115]=157;c[1116]=84;c[1117]=7;c[1118]=99;c[1119]=0;c[1120]=8;c[1121]=126;c[1122]=0;c[1123]=8;c[1124]=62;c[1125]=0;c[1126]
=9;c[1127]=221;c[1128]=82;c[1129]=7;c[1130]=27;c[1131]=0;c[1132]=8;c[1133]=110;c[1134]=0;c[1135]=8;c[1136]=46;c[1137]=0;c[1138]=9;c[1139]=189;c[1140]=0;c[1141]=8;c[1142]=14;c[1143]=0;c[1144]=8;c[1145]=142;c[1146]=0;c[1147]=8;c[1148]=78;c[1149]=0;c[1150]=9;c[1151]=253;c[1152]=96;c[1153]=7;c[1154]=256;c[1155]=0;c[1156]=8;c[1157]=81;c[1158]=0;c[1159]=8;c[1160]=17;c[1161]=85;c[1162]=8;c[1163]=131;c[1164]=82;c[1165]=7;c[1166]=31;c[1167]=0;c[1168]=8;c[1169]=113;c[1170]=0;c[1171]=8;c[1172]=49;c[1173]=0;c[1174]=9;c[1175]
=195;c[1176]=80;c[1177]=7;c[1178]=10;c[1179]=0;c[1180]=8;c[1181]=97;c[1182]=0;c[1183]=8;c[1184]=33;c[1185]=0;c[1186]=9;c[1187]=163;c[1188]=0;c[1189]=8;c[1190]=1;c[1191]=0;c[1192]=8;c[1193]=129;c[1194]=0;c[1195]=8;c[1196]=65;c[1197]=0;c[1198]=9;c[1199]=227;c[1200]=80;c[1201]=7;c[1202]=6;c[1203]=0;c[1204]=8;c[1205]=89;c[1206]=0;c[1207]=8;c[1208]=25;c[1209]=0;c[1210]=9;c[1211]=147;c[1212]=83;c[1213]=7;c[1214]=59;c[1215]=0;c[1216]=8;c[1217]=121;c[1218]=0;c[1219]=8;c[1220]=57;c[1221]=0;c[1222]=9;c[1223]=211;c[1224]
=81;c[1225]=7;c[1226]=17;c[1227]=0;c[1228]=8;c[1229]=105;c[1230]=0;c[1231]=8;c[1232]=41;c[1233]=0;c[1234]=9;c[1235]=179;c[1236]=0;c[1237]=8;c[1238]=9;c[1239]=0;c[1240]=8;c[1241]=137;c[1242]=0;c[1243]=8;c[1244]=73;c[1245]=0;c[1246]=9;c[1247]=243;c[1248]=80;c[1249]=7;c[1250]=4;c[1251]=0;c[1252]=8;c[1253]=85;c[1254]=0;c[1255]=8;c[1256]=21;c[1257]=80;c[1258]=8;c[1259]=258;c[1260]=83;c[1261]=7;c[1262]=43;c[1263]=0;c[1264]=8;c[1265]=117;c[1266]=0;c[1267]=8;c[1268]=53;c[1269]=0;c[1270]=9;c[1271]=203;c[1272]=81;c[1273]
=7;c[1274]=13;c[1275]=0;c[1276]=8;c[1277]=101;c[1278]=0;c[1279]=8;c[1280]=37;c[1281]=0;c[1282]=9;c[1283]=171;c[1284]=0;c[1285]=8;c[1286]=5;c[1287]=0;c[1288]=8;c[1289]=133;c[1290]=0;c[1291]=8;c[1292]=69;c[1293]=0;c[1294]=9;c[1295]=235;c[1296]=80;c[1297]=7;c[1298]=8;c[1299]=0;c[1300]=8;c[1301]=93;c[1302]=0;c[1303]=8;c[1304]=29;c[1305]=0;c[1306]=9;c[1307]=155;c[1308]=84;c[1309]=7;c[1310]=83;c[1311]=0;c[1312]=8;c[1313]=125;c[1314]=0;c[1315]=8;c[1316]=61;c[1317]=0;c[1318]=9;c[1319]=219;c[1320]=82;c[1321]=7;c[1322]
=23;c[1323]=0;c[1324]=8;c[1325]=109;c[1326]=0;c[1327]=8;c[1328]=45;c[1329]=0;c[1330]=9;c[1331]=187;c[1332]=0;c[1333]=8;c[1334]=13;c[1335]=0;c[1336]=8;c[1337]=141;c[1338]=0;c[1339]=8;c[1340]=77;c[1341]=0;c[1342]=9;c[1343]=251;c[1344]=80;c[1345]=7;c[1346]=3;c[1347]=0;c[1348]=8;c[1349]=83;c[1350]=0;c[1351]=8;c[1352]=19;c[1353]=85;c[1354]=8;c[1355]=195;c[1356]=83;c[1357]=7;c[1358]=35;c[1359]=0;c[1360]=8;c[1361]=115;c[1362]=0;c[1363]=8;c[1364]=51;c[1365]=0;c[1366]=9;c[1367]=199;c[1368]=81;c[1369]=7;c[1370]=11;c[1371]
=0;c[1372]=8;c[1373]=99;c[1374]=0;c[1375]=8;c[1376]=35;c[1377]=0;c[1378]=9;c[1379]=167;c[1380]=0;c[1381]=8;c[1382]=3;c[1383]=0;c[1384]=8;c[1385]=131;c[1386]=0;c[1387]=8;c[1388]=67;c[1389]=0;c[1390]=9;c[1391]=231;c[1392]=80;c[1393]=7;c[1394]=7;c[1395]=0;c[1396]=8;c[1397]=91;c[1398]=0;c[1399]=8;c[1400]=27;c[1401]=0;c[1402]=9;c[1403]=151;c[1404]=84;c[1405]=7;c[1406]=67;c[1407]=0;c[1408]=8;c[1409]=123;c[1410]=0;c[1411]=8;c[1412]=59;c[1413]=0;c[1414]=9;c[1415]=215;c[1416]=82;c[1417]=7;c[1418]=19;c[1419]=0;c[1420]
=8;c[1421]=107;c[1422]=0;c[1423]=8;c[1424]=43;c[1425]=0;c[1426]=9;c[1427]=183;c[1428]=0;c[1429]=8;c[1430]=11;c[1431]=0;c[1432]=8;c[1433]=139;c[1434]=0;c[1435]=8;c[1436]=75;c[1437]=0;c[1438]=9;c[1439]=247;c[1440]=80;c[1441]=7;c[1442]=5;c[1443]=0;c[1444]=8;c[1445]=87;c[1446]=0;c[1447]=8;c[1448]=23;c[1449]=192;c[1450]=8;c[1451]=0;c[1452]=83;c[1453]=7;c[1454]=51;c[1455]=0;c[1456]=8;c[1457]=119;c[1458]=0;c[1459]=8;c[1460]=55;c[1461]=0;c[1462]=9;c[1463]=207;c[1464]=81;c[1465]=7;c[1466]=15;c[1467]=0;c[1468]=8;c[1469]
=103;c[1470]=0;c[1471]=8;c[1472]=39;c[1473]=0;c[1474]=9;c[1475]=175;c[1476]=0;c[1477]=8;c[1478]=7;c[1479]=0;c[1480]=8;c[1481]=135;c[1482]=0;c[1483]=8;c[1484]=71;c[1485]=0;c[1486]=9;c[1487]=239;c[1488]=80;c[1489]=7;c[1490]=9;c[1491]=0;c[1492]=8;c[1493]=95;c[1494]=0;c[1495]=8;c[1496]=31;c[1497]=0;c[1498]=9;c[1499]=159;c[1500]=84;c[1501]=7;c[1502]=99;c[1503]=0;c[1504]=8;c[1505]=127;c[1506]=0;c[1507]=8;c[1508]=63;c[1509]=0;c[1510]=9;c[1511]=223;c[1512]=82;c[1513]=7;c[1514]=27;c[1515]=0;c[1516]=8;c[1517]=111;c[1518]
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;Bi$=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;Bi_=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;Bja=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;Bjb=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;Bjc=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;Bjd=b;}
function Lz(){var a=this;D.call(a);a.fd=0;a.lP=0;a.fE=null;a.kZ=0;a.l$=0;a.y7=0;a.sz=0;a.qY=0;a.uM=0;a.uv=0;a.yC=null;a.vY=0;a.yd=null;a.v5=0;a.bd=null;a.C=null;}
var Bje=null;function W1(a,b,c,d,e,f,g){a.fd=0;a.uM=b<<24>>24;a.uv=c<<24>>24;a.yC=d;a.vY=e;a.yd=f;a.v5=g;a.fE=null;}
function ABy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.bd.B;d=a.bd.N;e=a.C.bK;f=a.C.bL;g=a.C.bl;h=g>=a.C.bW?a.C.cP-g|0:(a.C.bW-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.fd){case 0:break f;case 2:i=a.sz;while(f<i){if(!d){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bd.cf.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.lP=a.lP+(e&Bje.data[i])|0;e=e>>i;f=f-i|0;a.l$=a.uv;a.fE=a.yd;a.kZ=a.v5;a.fd=3;break g;case 4:i=a.sz;while
(f<i){if(!d){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bd.cf.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.qY=a.qY+(e&Bje.data[i])|0;e=e>>i;f=f-i|0;a.fd=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.C.bl=g;b=B5(a.C,b);g=a.C.bl;if(a.C.bW!=a.C.bl){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,b);}a.fd=8;break a;case 9:a.C.bK=e;a.C.bL
=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,(-2));}}l=a.l$;while(f<l){if(!d){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bd.cf.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.kZ+(e&Bje.data[l])
|0)*3|0;k=a.fE.data;i=m+1|0;e=e>>k[i];f=f-a.fE.data[i]|0;l=a.fE.data[m];if(l&16){a.sz=l&15;a.qY=a.fE.data[m+2|0];a.fd=4;continue b;}if(l&64){a.fd=9;a.bd.b8=B(307);a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,(-3));}a.l$=l;a.kZ=(m/3|0)+a.fE.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;b=AM0(a,a.uM,a.uv,a.yC,a.vY,a.yd,a.v5,a.C,a.bd);c=a.bd.B;d=a.bd.N;e=a.C.bK;f
=a.C.bL;g=a.C.bl;h=g>=a.C.bW?a.C.cP-g|0:(a.C.bW-g|0)-1|0;if(b){a.fd=b!=1?9:7;continue b;}}a.l$=a.uM;a.fE=a.yC;a.kZ=a.vY;a.fd=1;}l=a.l$;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.bd.cf.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.kZ+(e&Bje.data[l])|0)*3|0;k=a.fE.data;i=m+1|0;e=e>>>k[i];f=f-a.fE.data[i]|0;n=a.fE.data[m];if(!n){a.y7=a.fE.data[m+2|0];a.fd=6;continue b;}if(n&16){a.sz=n&15;a.lP=a.fE.data[m+2|0];a.fd=2;continue b;}if(!(n&64)){a.l$=n;a.kZ=(m/3|0)+a.fE.data[m+2|0]|0;continue b;}if(!(n&32)){a.fd
=9;a.bd.b8=B(308);a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,(-3));}a.fd=7;continue b;}if(h)i=g;else{if(g!=a.C.cP)i=g;else if(!a.C.bW)i=g;else{i=0;h=i>=a.C.bW?a.C.cP-i|0:(a.C.bW-i|0)-1|0;}if(!h){a.C.bl=i;b=B5(a.C,b);i=a.C.bl;h=i>=a.C.bW?a.C.cP-i|0:(a.C.bW-i|0)-1|0;if(i==a.C.cP&&a.C.bW){i=0;h=i>=a.C.bW?a.C.cP-i|0:(a.C.bW-i|0)-1|0;}if(!h){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=i;return B5(a.C,
b);}}}b=0;k=a.C.cZ.data;g=i+1|0;k[i]=a.y7<<24>>24;h=h+(-1)|0;a.fd=0;continue b;}i=g-a.qY|0;while(i<0){i=i+a.C.cP|0;}while(a.lP){if(h)l=g;else{if(g!=a.C.cP)l=g;else if(!a.C.bW)l=g;else{l=0;h=l>=a.C.bW?a.C.cP-l|0:(a.C.bW-l|0)-1|0;}if(!h){a.C.bl=l;b=B5(a.C,b);l=a.C.bl;h=l>=a.C.bW?a.C.cP-l|0:(a.C.bW-l|0)-1|0;if(l==a.C.cP&&a.C.bW){l=0;h=l>=a.C.bW?a.C.cP-l|0:(a.C.bW-l|0)-1|0;}if(!h){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=l;return B5(a.C,b);}}}o=a.C.cZ.data;g=l
+1|0;k=a.C.cZ.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m==a.C.cP?0:m;a.lP=a.lP-1|0;}a.fd=0;}a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,b);}a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,1);}
function AAK(a,b){return;}
function AM0(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.B;k=i.N;l=h.bK;m=h.bL;n=h.bl;o=n>=h.bW?h.cP-n|0:(h.bW-n|0)-1|0;p=Bje.data[b];q=Bje.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.cf.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cZ.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&Bje.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.cf.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.b8=B(307);b=i.N-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bK=w;h.bL=b;i.N=c;i.G=Long_add(i.G,Long_fromInt(e-i.B|0));i.B=e;h.bl=n;return (-3);}b=(b+r[x+2|0]|0)+(w&Bje.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.cf.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&Bje.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.cZ.data;b=n+1|0;r=h.cZ.data;c=w+1|0;s[n]=r[w];s=h.cZ.data;n=b+1|0;r=h.cZ.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{Di(h.cZ,w,h.cZ,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cP|0;if(w>=0)break;}b=h.cP-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.cZ.data;n=c+1|0;r=h.cZ.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{Di(h.cZ,w,h.cZ,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.cZ.data;c=n+1|0;r=h.cZ.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}Di(h.cZ,w,h.cZ,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bK=l;h.bL=e;i.N=b;i.G=Long_add(i.G,Long_fromInt(c-i.B|0));i.B=c;h.bl=n;return 1;}i.b8=B(308);v=i.N-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bK=l;h.bL=c;i.N=e;i.G=Long_add(i.G,Long_fromInt(b-i.B|0));i.B=b;h.bl=n;return (-3);}t=(t+s[u+2|0]|0)+(l&Bje.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cZ.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bK=l;h.bL=g;i.N=b;i.G=Long_add(i.G,Long_fromInt(e-i.B|0));i.B=e;h.bl=c;return 0;}
function ABD(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bje=b;}
function Hs(){B1.call(this);}
function Bjf(){var a=new Hs();A_n(a);return a;}
function A_n(a){O(a);}
function Xq(){B6.call(this);}
function Bjg(){var a=new Xq();A8L(a);return a;}
function A8L(a){O(a);}
function AAV(){D.call(this);}
function A_y(a,b){return a.HD(b);}
function AUx(a){return a.I7();}
function Kj(){B6.call(this);}
function Bjh(){var a=new Kj();A7g(a);return a;}
function A7g(a){O(a);}
function ZS(){var a=this;D.call(a);a.hh=null;a.rg=null;a.ee=null;a.fg=0;}
function Bau(){var a=new ZS();A2B(a);return a;}
function A2B(a){a.ee=Bc3;}
function D2(){BE.call(this);}
function Bji(){var a=new D2();A9T(a);return a;}
function A9T(a){O(a);}
function AIy(){D.call(this);}
function JG(b){return b.length?0:1;}
function AOR(b){return b.shift();}
function SL(){D.call(this);this.Dc=null;}
function AQ6(a){var b,c,d;b=a.Dc;if(!HF(b)&&b.co.ee===null){c=b.co;if(c.hh!==null&&!JG(c.hh)){b=c.hh;d=AOR(b);if(b===null)c.hh=null;Qk(d);}}}
function Q7(){var a=this;D.call(a);a.zB=null;a.zC=null;a.zz=0;a.zA=null;}
function Qk(a){var b,c,d,e;b=a.zB;c=a.zC;d=a.zz;e=a.zA;Fs(b);c.co.ee=b;b=c.co;b.fg=b.fg+d|0;CM(e,null);}
function GY(){B1.call(this);}
function Bjj(){var a=new GY();AU_(a);return a;}
function AU_(a){O(a);}
function WX(){Fh.call(this);}
function Bjk(){var a=new WX();A1g(a);return a;}
function A1g(a){O(a);}
function E2(){BE.call(this);}
function Bjl(){var a=new E2();A7Q(a);return a;}
function A7Q(a){O(a);}
function Oe(){var a=this;D.call(a);a.HT=null;a.BQ=0.0;a.F3=0.0;a.lc=null;a.mS=null;a.rw=null;a.h2=0;}
function AQ0(a,b){var c;if(b!==null){a.mS=b;return a;}c=new Cb;Bl(c,B(309));M(c);}
function A$D(a,b){return;}
function ADG(a,b){var c;if(b!==null){a.rw=b;return a;}c=new Cb;Bl(c,B(309));M(c);}
function A6c(a,b){return;}
function UD(a,b,c,d){var e,f,$$je;if(!(a.h2==2&&!d)&&a.h2!=3){a.h2=d?2:1;while(true){try{e=AGi(a,b,c);}catch($$e){$$je=Bi($$e);if($$je instanceof B6){f=$$je;M(A40(f));}else{throw $$e;}}if(IO(e))return e;if(Jx(e)){if(d&&Fl(b)){if(a.mS===BiH)return Fi(Ct(b));if(Ct(c)<=Bh(a.lc))return Bi5;EO(b,b.bk+Ct(b)|0);if(a.mS===Bf6)Ng(c,a.lc);}return e;}if(P$(e)){if(a.mS===BiH)return e;if(a.mS===Bf6){if(Ct(c)<Bh(a.lc))return Bi5;Ng(c,a.lc);}EO(b,b.bk+Lw(e)|0);}else if(Mr(e)){if(a.rw===BiH)break;if(a.rw===Bf6){if(Ct(c)<Bh(a.lc))return Bi5;Ng(c,
a.lc);}EO(b,b.bk+Lw(e)|0);}}return e;}b=new D2;O(b);M(b);}
function ACb(a,b){if(a.h2!=3&&a.h2!=2){b=new D2;O(b);M(b);}a.h2=3;return Bi6;}
function ARr(a){a.h2=0;return a;}
function AJJ(a,b){var c,d;if(a.h2&&a.h2!=3){b=new D2;O(b);M(b);}if(!Ct(b))return AHk(0);if(a.h2)ARr(a);c=AHk(DB(8,Ct(b)*a.BQ|0));while(true){d=UD(a,b,c,0);if(Jx(d))break;if(IO(d))c=Vw(a,c);if(!Nv(d))continue;R2(d);}b=UD(a,b,c,1);if(Nv(b))R2(b);while(!Jx(ACb(a,c))){c=Vw(a,c);}Gs(c);return c;}
function Vw(a,b){var c,d,e;c=b.md;d=O2(c,DB(8,c.data.length*2|0));e=AM2(d,0,d.data.length);EO(e,b.bk);return e;}
function AYC(a,b){return Bi6;}
function A5j(a){return;}
function Sb(){}
function Sl(){}
function Pc(){var a=this;D.call(a);a.wk=null;a.A3=null;a.Io=0;a.Jm=0;}
function APj(a){if(!a.Io){a.wk.CO=null;Fs(a.wk);CM(a.A3,null);}}
function LE(){Oe.call(this);}
function AGi(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fl(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);AKf(b,d,k,g-k|0);f=0;}if(!Fl(c)){l=!Fl(b)&&f>=g?Bi6:Bi5;break a;}k=CB(Ct(c),i.length);m=new Wp;m.Ai=b;m.Es=c;l=ARN(a,d,f,g,h,0,k,m);f=m.v9;if(l===null&&0==m.qF)l=Bi6;ASn(c,h,0,m.qF);if(l!==null)break;}}EO(b,b.bk-(g-f|0)|0);return l;}
function Rc(){LE.call(this);}
function ARN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NJ(h))break a;i=Bi6;break a;}n=k+1|0;k=j[k];if(!Hm(a,k)){c=n+(-2)|0;i=Fi(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NJ(h))break a;i=Bi6;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Hm(a,m))break b;if(!Hm(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(On(p)){c=k+(-3)|0;i=Fi(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Fi(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NJ(h))break a;i=Bi6;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AJm(h,2))break a;i=Bi5;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Hm(a,m))break c;if(!Hm(a,o))break c;if(!Hm(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=IB(q);m=c+1|0;j[c]=H7(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=Fi(1);break a;}c=k+(-3)|0;i=Fi(1);}h.v9=
c;h.qF=f;return i;}
function Hm(a,b){return (b&192)!=128?0:1;}
function DY(){var a=this;BE.call(a);a.hG=0;a.IL=null;}
function AG7(a,b){var c=new DY();AVa(c,a,b);return c;}
function AVa(a,b,c){a.IL=b;O(a);a.hG=c;}
function ANu(){var a=this;D.call(a);a.Jq=0;a.GJ=0;a.HO=Long_ZERO;a.I1=0;a.A5=0;a.pp=null;a.yL=null;a.Av=null;a.JO=0;a.Hu=Long_ZERO;a.GL=0;a.H9=Long_ZERO;}
function Bcn(){var a=new ANu();A8F(a);return a;}
function A8F(a){a.Jq=0;a.GJ=0;a.A5=255;a.GL=0;a.H9=Long_ZERO;}
function OP(){D.call(this);this.me=0;}
var Bjm=null;function AWg(){var a=new OP();Y_(a);return a;}
function Y_(a){a.me=0;}
function A2x(a,b,c,d){var e,f,g,h;e=a.me^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=Bjm.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.me=e^(-1);}
function A6q(a){a.me=0;}
function A9S(a,b){a.me=Long_and(b,new Long(4294967295, 0)).lo;}
function A7w(a){return Long_and(Long_fromInt(a.me),new Long(4294967295, 0));}
function AFz(){var b,c,d;Bjm=null;Bjm=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}Bjm.data[b]=d;b=b+1|0;}}
function I5(){var a=this;D.call(a);a.R=0.0;a.M=0.0;a.S=0.0;a.V=0.0;a.U=0.0;a.W=0.0;}
var Bjn=null;var BeK=0;function No(b,c,d,e,f,g){var h;h=new I5;h.R=b;h.M=c;h.S=d;h.V=e;h.U=f;h.W=g;return h;}
function D3(b,c,d,e,f,g){var h,i;if(BeK>=Bjn.p)S(Bjn,No(0.0,0.0,0.0,0.0,0.0,0.0));h=Bjn;i=BeK;BeK=i+1|0;return M1(Z(h,i),b,c,d,e,f,g);}
function M1(a,b,c,d,e,f,g){a.R=b;a.M=c;a.S=d;a.V=e;a.U=f;a.W=g;return a;}
function Ja(a,b,c,d){var e,f,g,h,i,j,k;e=a.R;f=a.M;g=a.S;h=a.V;i=a.U;j=a.W;k=R(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=R(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=R(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return D3(e,f,g,h,i,j);}
function Dv(a,b,c,d){return D3(a.R-b,a.M-c,a.S-d,a.V+b,a.U+c,a.W+d);}
function T8(a,b,c,d){return D3(a.R+b,a.M+c,a.S+d,a.V+b,a.U+c,a.W+d);}
function Qq(a,b,c){var d,e;if(b.U>a.M&&b.M<a.U){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.V>a.R)d=c;else{d=a.R-b.V;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.R<a.V)e=d;else{e=a.V-b.R;if(e<=d)e=d;}return e;}return c;}return c;}
function V6(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.U>a.M)d=c;else{d=a.M-b.U;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.M<a.U)e=d;else{e=a.U-b.M;if(e<=d)e=d;}return e;}return c;}return c;}
function T_(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.U>a.M&&b.M<a.U){if(c<=0.0)d=c;else if(b.W>a.S)d=c;else{d=a.S-b.W;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.S<a.W)e=d;else{e=a.W-b.S;if(e<=d)e=d;}return e;}return c;}return c;}
function L5(a,b){return b.V>a.R&&b.R<a.V?(b.U>a.M&&b.M<a.U?(b.W>a.S&&b.S<a.W?1:0):0):0;}
function FX(a,b,c,d){a.R=a.R+b;a.M=a.M+c;a.S=a.S+d;a.V=a.V+b;a.U=a.U+c;a.W=a.W+d;return a;}
function APT(a){return (a.V-a.R+a.U-a.M+a.W-a.S)/3.0;}
function P_(a){return D3(a.R,a.M,a.S,a.V,a.U,a.W);}
function QN(a,b,c){var d,e,f,g,h,i,j,k;d=KL(b,c,a.R);e=KL(b,c,a.V);f=JS(b,c,a.M);g=JS(b,c,a.U);h=Kv(b,c,a.S);i=Kv(b,c,a.W);if(!RA(a,d))d=null;if(!RA(a,e))e=null;if(!Ub(a,f))f=null;if(!Ub(a,g))g=null;if(!UV(a,h))h=null;if(!UV(a,i))i=null;j=null;if(d!==null)j=d;if(e!==null&&!(j!==null&&Ey(b,e)>=Ey(b,j)))j=e;if(f!==null&&!(j!==null&&Ey(b,f)>=Ey(b,j)))j=f;if(g!==null&&!(j!==null&&Ey(b,g)>=Ey(b,j)))j=g;if(h!==null&&!(j!==null&&Ey(b,h)>=Ey(b,j)))j=h;if(i!==null&&!(j!==null&&Ey(b,i)>=Ey(b,j)))j=i;if(j===null)return null;k
=(-1);if(j===d)k=4;if(j===e)k=5;if(j===f)k=0;if(j===g)k=1;if(j===h)k=2;if(j===i)k=3;return A0z(0,0,0,k,j);}
function RA(a,b){return b===null?0:b.z>=a.M&&b.z<=a.U&&b.w>=a.S&&b.w<=a.W?1:0;}
function Ub(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.w>=a.S&&b.w<=a.W?1:0;}
function UV(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.z>=a.M&&b.z<=a.U?1:0;}
function Xa(a,b){a.R=b.R;a.M=b.M;a.S=b.S;a.V=b.V;a.U=b.U;a.W=b.W;}
function AEq(){Bjn=Ci();BeK=0;}
function Qd(){}
function Bu(){Bs.call(this);}
var Bjo=0;var Bgk=null;var Bjp=0;var Bjq=0;var Bjr=0;var Bjs=0.0;var Bjt=0;var Bju=null;var Bjv=0;var Bjw=0;var Bjx=0.0;var Bjy=0.0;var Bjz=0.0;var BjA=0.0;var BjB=0.0;var BjC=0.0;var BjD=0.0;var BjE=0.0;var BjF=0.0;var BjG=0;var BfQ=0.0;var BfR=0.0;var BfS=0.0;var BfT=0.0;var BjH=0;var BjI=0;var BjJ=0;var BjK=0.0;var BjL=0.0;var BjM=0.0;var BjN=0;var BjO=0;var BjP=0;var BjQ=0;var BjR=null;var BjS=0;var BjT=null;var BjU=0;var BjV=null;var BjW=0;var BjX=null;var BjY=null;var Bgj=null;var BjZ=null;var Bj0=null;var Bj1
=null;var Bj2=null;var Bj3=null;var Bj4=null;var Bgi=0;var Bj5=null;var Bj6=null;var Bj7=null;var Bj8=null;var Bj9=null;var Bj$=null;var Bj_=null;var Bka=null;var Bkb=null;var Bkc=null;var Bkd=null;var Bke=null;var Bkf=null;var Bkg=null;var Bkh=Long_ZERO;var Bki=0;function BW(){BW=Bt(Bu);A1w();}
function Bkj(){var a=new Bu();AO2(a);return a;}
function AO2(a){BW();VL(a);}
function Ba(b){BW();a:{switch(b){case 2884:K2(2884);break a;case 2896:Bjq=1;break a;case 2903:BjG=1;break a;case 2912:BjI=1;break a;case 2929:K2(2929);break a;case 3008:Bjr=1;break a;case 3042:K2(3042);break a;case 3553:Bjp=1;break a;case 32823:K2(32823);break a;case 32826:break;default:break a;}}}
function HG(b){var c;BW();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Bd();BdG.depthFunc(c);}
function Sp(b,c){BW();Bjs=c;}
function C$(b){BW();BjQ=b;}
function GM(){BW();switch(BjQ){case 5888:break;case 5889:return BjT.data[BjU];case 5890:return BjV.data[BjW];default:}return BjR.data[BjS];}
function C9(){BW();Fo(GM());}
function FM(b,c,d,e){BW();Bd();Bd3.data[0]=b;Bd3.data[1]=c;Bd3.data[2]=d;Bd3.data[3]=e;BdG.viewport(b,c,d,e);}
function D4(b){BW();Bd();BdG.clear(b);}
function Im(b,c,d,e,f,g){var h,i,j,k;BW();h=GM();i=c-b;h.es=2.0/i;h.eq=0.0;h.er=0.0;h.ep=0.0;h.ev=0.0;j=e-d;h.ew=2.0/j;h.et=0.0;h.eu=0.0;h.eA=0.0;h.ey=0.0;k=g-f;h.ez=2.0/k;h.ex=0.0;h.gS= -(c+b)/i;h.gT= -(e+d)/j;h.gQ=(g+f)/k;h.gR=1.0;}
function Bw(b,c,d){var e;BW();L1(Bj0,b,c,d);e=GM();U3(e,Bj0,e);if(!Bjt)return;e=new Cb;Bl(e,B(310));M(e);}
function Hx(b,c,d,e){BW();Bd();BdG.clearColor(b,c,d,e);}
function Bb(b){BW();a:{switch(b){case 2884:J1(2884);break a;case 2896:Bjq=0;break a;case 2903:BjG=0;break a;case 2912:BjI=0;break a;case 2929:J1(2929);break a;case 3008:Bjr=0;break a;case 3042:J1(3042);break a;case 3553:Bjp=0;break a;case 32823:J1(32823);break a;case 32826:break;default:break a;}}}
function BU(b,c,d,e){BW();Bjx=b;Bjy=c;Bjz=d;BjA=e;}
function St(b,c,d,e,f,g,h,i,j){var k,l,m,n;BW();Bd();if(j===null){k=BdG;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=Ct(j);k=Bd4;n=0;while(n<m){h=(ALK(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(Bd4.buffer,0,m);BdG.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function B3(){BW();a:{switch(BjQ){case 5888:break;case 5889:if(BjU>=(BjT.data.length-1|0)){Cg(C1(),B(311));break a;}BjU=BjU+1|0;GP(BjT.data[BjU],BjT.data[BjU-1|0]);break a;case 5890:if(BjW>=(BjV.data.length-1|0)){Cg(C1(),B(312));break a;}BjW=BjW+1|0;GP(BjV.data[BjW],BjV.data[BjW-1|0]);break a;default:}if(BjS>=(BjR.data.length-1|0))Cg(C1(),B(313));else{BjS=BjS+1|0;GP(BjR.data[BjS],BjR.data[BjS-1|0]);}}}
function Bv(b,c,d,e){var f;BW();L1(Bj0,c,d,e);f=GM();WV(f,b*0.01745329238474369,Bj0,f);if(!Bjt)return;f=new Cb;Bl(f,B(310));M(f);}
function BD(){BW();a:{switch(BjQ){case 5888:break;case 5889:if(BjU<=0){Cg(C1(),B(314));break a;}BjU=BjU-1|0;break a;case 5890:if(BjW<=0){Cg(C1(),B(315));break a;}BjW=BjW-1|0;break a;default:}if(BjS<=0)Cg(C1(),B(316));else BjS=BjS-1|0;}}
function TL(b,c){BW();a:{switch(b){case 2982:break;case 2983:TN(BjT.data[BjU],c);break a;default:}TN(BjR.data[BjS],c);}}
function CC(b,c,d){var e;BW();L1(Bj0,b,c,d);ZA(GM(),Bj0);if(!Bjt)return;e=new Cb;Bl(e,B(310));M(e);}
function Df(b,c){BW();BjJ=b==1&&c==771?1:0;Bd();BdG.blendFunc(b,c);}
function Gr(b){BW();Bd();BdG.depthMask(!!b);}
function DN(b,c,d,e){BW();Bd();BdG.colorMask(!!b,!!c,!!d,!!e);}
function Cp(b,c){var d,e;BW();d=ANI(Bgk,c);Bd();e=BdG;d=d!==null?d.BK:null;e.bindTexture(3553,d);}
function Ej(b,c,d){BW();if(!(d!=33071&&d!=10496))d=33071;Bd();BdG.texParameteri(b,c,d);}
function Cj(b,c,d){var e;BW();e=Ed(b*b+c*c+d*d);BjB=b/e;BjC=c/e;BjD=d/e;}
function Ob(b){BW();BjY=b;RM(b);}
function FQ(b){var c;BW();if(!Bjt){c=CP(BjZ,CX(b));if(c!==null&&c.jH>0){Rm(c.lJ|0|(BjG&&Bjq?8:0)|(!BjI?0:16)|(!Bjr?0:32)|(!Bjp?0:64));Ob(c.rf);Pv(0,c.jH);BjO=BjO+((c.jH*6|0)/4|0)|0;BjP=BjP+(c.jH/2|0)|0;}}}
function FF(b,c){BW();if(!Bjt){Bju=CP(Bgj,CX(b));if(Bju!==null){Bju.lJ=(-1);Bju.jH=0;Bjt=1;}}}
function Ee(){var b,c,d,e;BW();if(Bjt){Bjt=0;Bd();b=Bez.buffer;c=Bey;d=new Int32Array(b,0,c);Bey=0;e=UB(d);if(e>0){if(Bju.oZ===null){BR(BjZ,CX(Bju.Bs),Bju);Bju.rf=O6();Bju.oZ=L6();b=O7(Bju.lJ);Ob(Bju.rf);Hd(34962,Bju.oZ);Rv(b);}Hd(34962,Bju.oZ);Px(34962,d,35044);BjN=BjN+e|0;}}}
function F3(b,c,d){BW();Bjx=b;Bjy=c;Bjz=d;BjA=1.0;}
function OD(b,c){BW();Bd();BdG.polygonOffset(b,c);}
function WR(b){BW();a:{switch(b){case 32886:break;case 32888:Bjw=1;break a;default:break a;}Bjv=1;}}
function Ti(b){BW();a:{switch(b){case 32886:break;case 32888:Bjw=0;break a;default:break a;}Bjv=0;}}
function P5(){BW();return 0|(!Bjv?0:1)|(!Bjw?0:4);}
function Rm(b){var c;BW();c=O7(b);Bj5=c;AQW(c);if(Bjr)AIS(c,Bjs);ALJ(c,Bjx,Bjy,Bjz,BjA);if(BjI){ALm(c,(!BjJ?0:2)+BjH|0);AP9(c,BfQ,BfR,BfS,BfT);AKJ(c,BjM);API(c,BjK,BjL);}AMp(c,BjR.data[BjS]);AMZ(c,BjT.data[BjU]);ZT(c,BjV.data[BjW]);if(BjG&&Bjq){AB4(c,BjB,BjC,BjD);AM_(c,Bj3,Bj4);}AOH(c,BjE,BjF);}
function ALp(b,c,d,e){var f;BW();if(Bjt){if(b!=7)Cg(C1(),B(317));else{if(Bju.lJ==(-1))Bju.lJ=P5();else if(Bju.lJ!=P5())Cg(C1(),B(318));f=Bju;f.jH=f.jH+d|0;Bd();e=e;if((Bey+e.length|0)<Bez.length){f=Bez;b=Bey;f.set(e,b);Bey=Bey+e.length|0;}}}else{BjN=BjN+UB(e)|0;BjO=BjO+d|0;Rm(0|(!Bjv?0:1)|(!Bjw?0:4)|(BjG&&Bjq?8:0)|(!BjI?0:16)|(!Bjr?0:32)|(!Bjp?0:64));Ob(Bj5.t9);Hd(34962,Bj5.uK);if(!Bj5.xb){Bj5.xb=1;Px(34962,Bj6,35048);}f=BdG;e=e;f.bufferSubData(34962,0,e);if(b==7){Pv(c,d);BjP=BjP+(d/2|0)|0;}else{a:{b:{switch
(b){case 1:break;case 2:case 4:break b;case 3:b=3;BjP=BjP+(d-1|0)|0;break a;case 5:b=5;BjP=BjP+(d-2|0)|0;break a;case 6:b=6;BjP=BjP+(d-2|0)|0;break a;default:break b;}b=1;BjP=BjP+(d/2|0)|0;break a;}b=4;BjP=BjP+(d/3|0)|0;}BdG.drawArrays(b,c,d);}}}
function Pv(b,c){var d,e,f,g,h,i,j;BW();if(BjX===null){if(Bjo)d=ALO($rt_createIntArray(49200));else{e=A5z(0,196800,$rt_createByteArray(196800),0,196800,1,0);e.kI=Bgl;d=AHI(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;h=h<<16;NI(d,g|h);NI(d,j|h);NI(d,i|j<<16);f=f+1|0;}Gs(d);BjX=L6();Hd(34963,BjX);g=Ct(d);e=new Int32Array(Bd4.buffer);h=0;while(h<g){i=AF_(d);e[h]=i;h=h+1|0;}d=Bd4.buffer;g=g*4|0;e=new Uint8Array(d,0,g);BdG.bufferData(34963,e,35044);}if(!BjY.vM){BjY.vM=1;Hd(34963,BjX);}g=(c*6|0)/4|0;b=
(b*6|0)/4|0;Bd();BdG.drawElements(4,g,5123,b);}
function L_(b,c){BW();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}BjH=2;break a;}BjH=1;}}}
function GL(b,c){BW();a:{switch(b){case 2914:break;case 2915:BjK=c;break a;case 2916:BjL=c;break a;default:break a;}BjM=c;}}
function A1w(){var b,c,d;Bd();Bjo=1;Bgk=A_w(256);Bjp=0;Bjq=0;Bjr=0;Bjs=0.10000000149011612;Bjt=0;Bju=null;Bjv=0;Bjw=0;Bjx=1.0;Bjy=1.0;Bjz=1.0;BjA=1.0;BjB=1.0;BjC=0.0;BjD=0.0;BjE=0.0;BjF=0.0;BjG=0;BfQ=1.0;BfR=1.0;BfS=1.0;BfT=1.0;BjH=1;BjI=0;BjJ=0;BjK=1.0;BjL=1.0;BjM=1.0;BjN=0;BjO=0;BjP=0;BjQ=5888;BjR=J(Es,32);BjS=0;BjT=J(Es,6);BjU=0;BjV=J(Es,16);BjW=0;b=0;while(b<BjR.data.length){c=BjR.data;d=new Es;Fo(d);c[b]=d;b=b+1|0;}b=0;while(b<BjT.data.length){c=BjT.data;d=new Es;Fo(d);c[b]=d;b=b+1|0;}b=0;while(b<BjV.data.length)
{c=BjV.data;d=new Es;Fo(d);c[b]=d;b=b+1|0;}BjX=null;BjY=null;Bgj=Dd();BjZ=Dd();Bj0=new UX;Bj1=new G7;Bj2=new G7;Bj3=new G7;Bj4=new G7;Bgi=0;Bj5=null;Bj6=new Int32Array(525000);Bj7=null;Bj8=null;Bj9=null;Bj$=null;Bj_=null;Bka=A_w(256);d=new Es;Fo(d);Bkb=Kt(d);Bkc=$rt_createFloatArray(16);Bkd=$rt_createFloatArray(16);d=new Es;Fo(d);Bke=d;d=new Es;Fo(d);Bkf=d;Bkg=new G7;Bkh=Long_ZERO;Bki=0;}
function ACz(){D.call(this);}
function Bkk(){var a=new ACz();AUi(a);return a;}
function AUi(a){return;}
function DU(){var b,c;Bd();if(!BeA)a:{Bea=null;if(!PS(BdT)){b=Te(BdT,0);Bea=b;if(b!==null){c=1;break a;}}c=0;}else{Or(BdT);Bea=null;Bec.data[29]=0;Bec.data[157]=0;Bec.data[28]=0;Bec.data[219]=0;Bec.data[220]=0;BeA=0;c=0;}return c;}
function CU(){Bd();return Bea===null?0:DJ($rt_str(Bea.type),B(319))?0:1;}
function Bg(){Bd();return Bea===null?(-1):TX(Bea.which);}
function APS(b){Bd();Bd0=b;}
function BN(b){Bd();if(BeA){Bec.data[28]=0;Bec.data[29]=0;Bec.data[157]=0;Bec.data[219]=0;Bec.data[220]=0;}return Bec.data[b];}
function Ny(){var a=this;D.call(a);a.rq=0;a.th=0;a.m2=0;a.ln=0;a.he=0;a.it=0;a.dw=0;a.mo=0;a.lb=0;a.tZ=null;a.tR=null;a.xi=null;a.us=null;a.yB=null;a.fs=null;a.gj=null;a.BI=null;a.f$=null;a.B6=null;a.Db=null;a.nb=null;a.ws=null;a.zL=0;a.jT=0;a.cC=0;a.bw=0;}
var Bkl=null;var Bkm=null;function A_8(a){var b=new Ny();AO_(b,a);return b;}
function AO_(a,b){var c,d;a.rq=1;a.th=1;a.m2=0;a.ln=0;a.he=0;a.it=1;a.dw=0;a.mo=0;a.lb=1;a.tZ=E8(B(320),17);a.tR=E8(B(321),30);a.xi=E8(B(322),31);a.us=E8(B(323),32);a.yB=E8(B(324),57);a.fs=E8(B(325),23);a.gj=E8(B(326),16);a.BI=E8(B(327),20);a.f$=E8(B(328),33);a.B6=E8(B(329),28);a.Db=E8(B(330),19);c=J(Vj,11);d=c.data;d[0]=a.tZ;d[1]=a.tR;d[2]=a.xi;d[3]=a.us;d[4]=a.yB;d[5]=a.gj;d[6]=a.fs;d[7]=a.BI;d[8]=a.f$;d[9]=a.B6;d[10]=a.Db;a.nb=c;a.zL=11;a.jT=2;a.cC=0;a.bw=0;a.ws=b;}
function K4(a,b){var c;c=new T;W(c);c=H(H(c,a.nb.data[b].Eu),B(12));b=a.nb.data[b].bJ;Bd();return U(H(c,b>=0&&b<256?Bew.data[b]:B(10)));}
function X0(a,b,c){a.nb.data[b].bJ=c;}
function Ea(a,b,c){if(!b)a.rq=a.rq?0:1;if(b==1)a.th=a.th?0:1;if(b==2)a.m2=a.m2?0:1;if(b==3)a.ln=a.ln?0:1;if(b==4)a.he=(a.he+c|0)&3;if(b==5)a.it=a.it?0:1;if(b==6)a.dw=a.dw?0:1;if(b==7)a.mo=a.mo?0:1;if(b==8)a.jT=(a.jT+c|0)&3;if(b==9){a.lb=a.lb?0:1;I9(a.ws.dV);}if(b==10){a.bw=a.bw?0:1;if(a.bw){a.he=2;a.it=0;a.lb=0;a.dw=0;}I9(a.ws.dV);}}
function QT(a,b){var c;a:{if(!b){c=new T;W(c);c=U(H(H(c,B(331)),!a.rq?B(332):B(333)));break a;}if(b==1){c=new T;W(c);c=U(H(H(c,B(334)),!a.th?B(332):B(333)));break a;}if(b==2){c=new T;W(c);c=U(H(H(c,B(335)),!a.m2?B(332):B(333)));break a;}if(b==3){c=new T;W(c);c=U(H(H(c,B(336)),!a.ln?B(332):B(333)));break a;}if(b==4){c=new T;W(c);c=U(H(H(c,B(337)),Bkl.data[a.he]));break a;}if(b==5){c=new T;W(c);c=U(H(H(c,B(338)),!a.it?B(332):B(333)));break a;}if(b==6){c=new T;W(c);c=U(H(H(c,B(339)),!a.dw?B(332):B(333)));break a;}if
(b==7){c=new T;W(c);c=U(H(H(c,B(340)),!a.mo?B(332):B(333)));break a;}if(b==8){c=new T;W(c);c=U(H(H(c,B(341)),Bkm.data[a.jT]));break a;}if(b==9){c=new T;W(c);c=U(H(H(c,B(342)),!a.lb?B(343):B(344)));break a;}if(b!=10){c=B(3);break a;}c=new T;W(c);c=U(H(H(c,B(345)),!a.bw?B(332):B(333)));}return c;}
function A2r(a){return;}
function A0Z(a){return;}
function AHR(){var b,c;b=J(B4,4);c=b.data;c[0]=B(346);c[1]=B(347);c[2]=B(348);c[3]=B(349);Bkl=b;b=J(B4,4);c=b.data;c[0]=B(350);c[1]=B(351);c[2]=B(352);c[3]=B(353);Bkm=b;}
function Ik(){var a=this;D.call(a);a.t0=null;a.pV=0;a.mw=0;a.oK=0;a.oL=0;a.kT=0;a.k2=0;a.le=0;a.Bv=0;a.Ej=0;a.Dk=0;a.nS=0;a.o2=0;a.p3=0;a.fu=0;a.gY=null;a.ER=0;a.AW=0;a.DF=0;a.Ho=0.0;a.i1=0;a.E1=null;a.Ii=0;a.xF=0;a.JJ=0;a.ol=0;a.kF=0;a.gl=null;a.jf=null;}
var Bkn=null;var BeM=0;function Tk(){Tk=Bt(Ik);A_l();}
function Bbu(a,b,c,d,e,f,g){var h=new Ik();AI6(h,a,b,c,d,e,f,g);return h;}
function AI6(a,b,c,d,e,f,g,h){Tk();a.pV=(-1);a.fu=0;a.gY=$rt_createBooleanArray(2);a.xF=1;a.kF=0;a.gl=Ci();a.t0=b;a.jf=c;a.le=g;a.k2=g;a.kT=g;a.Ho=D_((Bj(a.kT,a.kT)+Bj(a.k2,a.k2)|0)+Bj(a.le,a.le)|0)/2.0;a.pV=h;a.mw=(-999);Sd(a,d,e,f);a.i1=0;}
function Sd(a,b,c,d){var e,f;if(!(b==a.mw&&c==a.oK&&d==a.oL)){PO(a);a.mw=b;a.oK=c;a.oL=d;a.ER=b+(a.kT/2|0)|0;a.AW=c+(a.k2/2|0)|0;a.DF=d+(a.le/2|0)|0;a.nS=b&1023;a.o2=c;a.p3=d&1023;a.Bv=b-a.nS|0;a.Ej=c-a.o2|0;a.Dk=d-a.p3|0;a.E1=No(b-2.0,c-2.0,d-2.0,(b+a.kT|0)+2.0,(c+a.k2|0)+2.0,(d+a.le|0)+2.0);FF(a.pV+2|0,4864);e=D3(a.nS-2.0,a.o2-2.0,a.p3-2.0,(a.nS+a.kT|0)+2.0,(a.o2+a.k2|0)+2.0,(a.p3+a.le|0)+2.0);BA();f=BeJ;Bz(f);Bf(f,e.R,e.U,e.S);Bf(f,e.V,e.U,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.R,e.M,e.S);Bf(f,e.R,e.M,e.W);Bf(f,e.V,
e.M,e.W);Bf(f,e.V,e.U,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.R,e.M,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.V,e.M,e.W);Bf(f,e.R,e.M,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.V,e.U,e.W);Bf(f,e.V,e.U,e.S);Bf(f,e.R,e.U,e.S);Bf(f,e.R,e.M,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.R,e.U,e.S);Bf(f,e.R,e.M,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.V,e.U,e.S);Bf(f,e.V,e.U,e.W);Bf(f,e.V,e.M,e.W);Br(f);Ee();KU(a);}}
function ADf(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.i1)return;BeM=BeM+1|0;b=a.mw;c=a.oK;d=a.oL;e=a.mw+a.kT|0;f=a.oK+a.k2|0;g=a.oL+a.le|0;h=0;while(h<2){a.gY.data[h]=1;h=h+1|0;}Bko=0;i=F7();DC(i,a.gl);DF(a.gl);j=new Iq;k
=a.t0;l=b-1|0;m=c-1|0;n=d-1|0;o=e+1|0;h=f+1|0;p=g+1|0;$p=1;case 1:AEs(j,k,l,m,n,o,h,p);if(C()){break _;}k=A8i(j);l=0;a:{while(true){if(l>=2)break a;q=0;r=0;s=0;t=c;while(t<f){m=d;while(m<g){n=b;if(n<e){$p=2;continue _;}m=m+1|0;}t=t+1|0;}if(!s)r=0;else{Br(Bkn);Ee();Fa(Bkn,0.0,0.0,0.0);}if(r)a.gY.data[l]=0;if(!q)break;l=l+1|0;}}u=F7();DC(u,a.gl);Fr(u,i);DC(a.jf,u);Fr(i,a.gl);Ga(a.jf,i);a.ol=Bko;a.kF=1;return;case 2:$z=Hw(j,n,t,m);if(C()){break _;}p=$z;if(p>0){if(!s){s=1;FF(a.pV+l|0,4864);Bz(Bkn);Fa(Bkn,a.nS-a.mw
|0,a.o2-a.oK|0,a.p3-a.oL|0);}if(!l){L();if(BeN.data[p] instanceof Eg){$p=3;continue _;}}L();v=BeN.data[p];o=R(v.pO(),l);if(o)q=1;else if(!o){$p=4;continue _;}}n=n+1|0;b:{c:while(true){if(n<e){continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bkn);Ee();Fa(Bkn,0.0,0.0,0.0);}if(r)a.gY.data[l]=0;if(!q)break c;l=l+1|0;if(l>=2)break b;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=F7();DC(u,a.gl);Fr(u,i);DC(a.jf,u);Fr(i,a.gl);Ga(a.jf,i);a.ol=Bko;a.kF=1;return;case 3:$z=AFT(j,n,t,m);if(C()){break _;}w=$z;if(AIg(Bkp,
w))S(a.gl,w);L();v=BeN.data[p];o=R(v.pO(),l);if(o)q=1;else if(!o){$p=4;continue _;}n=n+1|0;d:{e:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bkn);Ee();Fa(Bkn,0.0,0.0,0.0);}if(r)a.gY.data[l]=0;if(!q)break e;l=l+1|0;if(l>=2)break d;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=F7();DC(u,a.gl);Fr(u,i);DC(a.jf,u);Fr(i,a.gl);Ga(a.jf,i);a.ol=Bko;a.kF=1;return;case 4:$z=ANZ(k,v,n,t,m);if(C()){break _;}o=$z;r=r|o;n=n+1|0;a:{f:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g)
{t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bkn);Ee();Fa(Bkn,0.0,0.0,0.0);}if(r)a.gY.data[l]=0;if(!q)break f;l=l+1|0;if(l>=2)break a;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=F7();DC(u,a.gl);Fr(u,i);DC(a.jf,u);Fr(i,a.gl);Ga(a.jf,i);a.ol=Bko;a.kF=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function G3(a,b){var c,d,e;c=b.d-a.ER;d=b.j-a.AW;e=b.e-a.DF;return c*c+d*d+e*e;}
function PO(a){var b;b=0;while(b<2){a.gY.data[b]=1;b=b+1|0;}a.fu=0;a.kF=0;}
function ARD(a){PO(a);a.t0=null;}
function PE(a,b){return !a.fu?(-1):a.gY.data[b]?(-1):a.pV+b|0;}
function AR8(a,b){a.fu=ME(b,a.E1);}
function AHv(a){return !a.kF?0:a.gY.data[0]&&a.gY.data[1]?1:0;}
function KU(a){a.i1=1;}
function A_l(){BA();Bkn=BeJ;BeM=0;}
function AR9(){var a=this;E4.call(a);a.jp=null;a.lH=0;}
function A7z(){var a=new AR9();AXH(a);return a;}
function A$e(a){var b=new AR9();YZ(b,a);return b;}
function AXH(a){YZ(a,32);}
function YZ(a,b){a.jp=$rt_createByteArray(b);}
function A7N(a,b){var c,d;Rq(a,a.lH+1|0);c=a.jp.data;d=a.lH;a.lH=d+1|0;c[d]=b<<24>>24;}
function Ro(a,b,c,d){var e,f,g,h,i;Rq(a,a.lH+d|0);e=0;while(e<d){f=b.data;g=a.jp.data;h=a.lH;a.lH=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function Rq(a,b){if(a.jp.data.length<b){b=DB(b,(a.jp.data.length*3|0)/2|0);a.jp=Oc(a.jp,b);}}
function Ia(a){return Oc(a.jp,a.lH);}
function JQ(){B6.call(this);}
function Bkq(){var a=new JQ();A5D(a);return a;}
function A5D(a){O(a);}
function Oa(){}
function GG(){var a=this;D.call(a);a.fD=null;a.dY=null;a.l2=null;a.gJ=null;a.kO=null;a.fB=null;a.ec=Long_ZERO;a.sk=Long_ZERO;a.sO=Long_ZERO;a.ro=Long_ZERO;a.gh=0;a.hU=0;a.r$=0;a.sj=0;a.bi=null;a.i0=0;a.C3=null;a.r=null;a.fi=0;a.pW=0;a.fh=0;a.tB=0;a.cv=null;a.iL=null;a.lt=Long_ZERO;a.tf=null;a.wI=Long_ZERO;a.IU=null;a.m_=null;a.qg=null;}
var Bkr=null;var Bks=null;function Bkt(a,b){var c=new GG();QU(c,a,b);return c;}
function AR_(b){var c,d,e,f,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=new T;W(c);c=U(H(H(c,b),B(354)));$p=1;case 1:$z=ALD(c);if(C()){break _;}d=$z;c=DT();e=new T;W(e);Cg(c,U(H(H(e,b),B(354))));if(d===null)return null;a:{try{e=Mv(MR(OU(Ug(d))),B(355));}catch($$e){$$je=Bi($$e);if($$je instanceof B1){f=$$je;break a;}else{throw $$e;}}return e;}Cc(f);return null;default:E_();}}C3().s(b,c,d,e,f,$p);}
function QU(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.fD=Ci();a.dY=Ci();a.l2=Ci();a.gJ=BbZ();a.kO=F7();a.fB=Ci();a.ec=Long_ZERO;a.sk=Long_fromInt(8961023);a.sO=Long_fromInt(12638463);a.ro=Long_fromInt(16777215);a.gh=0;a.hU=Lo(new Dz);a.r$=1013904223;a.sj=0;a.r=new Dz;a.tB=0;a.cv=Ci();a.lt=Long_ZERO;a.wI=Long_ZERO;a.m_=Ci();a.qg=Ci();a.IU=b;Bks=b;b=new T;W(b);b=U(H(H(b,
Bks),B(354)));$p=1;case 1:$z=ALD(b);if(C()){break _;}d=$z;b=DT();e=new T;W(e);Cg(b,U(H(H(e,Bks),B(354))));f=d!==null?1:0;a:{a.tB=f;if(d!==null){try{g=Mv(MR(OU(Ug(d))),B(355));a.lt=Mb(g,B(356));a.fi=FS(g,B(357));a.pW=FS(g,B(358));a.fh=FS(g,B(359));a.ec=Mb(g,B(360));a.wI=Mb(g,B(361));a.tf=Mv(g,B(5));break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){h=$$je;}else{throw $$e;}}Cc(h);}}f=0;if(Long_eq(a.lt,Long_ZERO)){a.lt=c;f=1;}a.iL=ABj(a,Bks);if(!f){Q5(a);return;}a.fi=0;a.pW=64;a.fh=0;f=a.fi;i=a.fh;$p=2;case 2:$z
=AJO(a,f,i);if(C()){break _;}f=$z;L();if(f!=Be$.b?0:1){Q5(a);return;}a.fi=a.fi+(E(a.r,64)-E(a.r,64)|0)|0;a.fh=a.fh+(E(a.r,64)-E(a.r,64)|0)|0;f=a.fi;i=a.fh;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ABj(a,b){var c,d,e;c=new VT;d=new Xi;d.r0=b;e=new So;e.Ga=$rt_createIntMultiArray([32,32]);e.t=a;e.a=new Dz;e.yS=G9(e.a,16);e.yT=G9(e.a,16);e.yR=G9(e.a,8);e.tL=G9(e.a,4);e.yV=G9(e.a,4);e.yW=G9(e.a,10);e.yU=G9(e.a,16);e.iS=G9(e.a,8);c.X=J(I1,1024);c.fr=(-999999999);c.fR=(-999999999);c.lm=A9q(a,$rt_createByteArray(32768),0,0);c.lm.Eh=1;c.lm.p$=1;c.ly=a;c.g3=d;c.iR=e;return c;}
function AP3(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fi;c=a.fh;$p=1;case 1:$z=AJO(a,b,c);if(C()){break _;}b=$z;if(b)return;a.fi=a.fi+(E(a.r,8)-E(a.r,8)|0)|0;a.fh=a.fh+(E(a.r,8)-E(a.r,8)|0)|0;b=a.fi;c=a.fh;continue _;default:E_();}}C3().s(a,b,c,$p);}
function AJO(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=63;e=d+1|0;$p=1;case 1:$z=ACt(a,b,e,c);if(C()){break _;}f=$z;if(!f){$p=2;continue _;}d=e;e=d+1|0;continue _;case 2:$z=ACt(a,b,d,c);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AGo(a){var b,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{if(a.tf!==null){YP(a.bi,a.tf);a.tf=null;}b=a.bi;$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){b=$$je;}else{throw $$e;}}Cc(b);return;case 1:a:{try{AOf(a,b);if(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){b=$$je;}else{throw $$e;}}Cc(b);}return;default:E_();}}C3().s(a,b,$p);}
function ABB(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null)YF(c,B(362));$p=1;case 1:AMJ(a);if(C()){break _;}if(c===null){d=a.iL;$p=2;continue _;}d=B(363);$p=3;continue _;case 2:ANX(d,b,c);if(C()){break _;}return;case 3:AR2(c,d);if(C()){break _;}d=a.iL;$p=2;continue _;default:E_();}}C3().s(a,b,c,d,$p);}
function AMJ(a){var b,c,d,e,f,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=G8();H9(b,B(356),a.lt);Gv(b,B(357),a.fi);Gv(b,B(358),a.pW);Gv(b,B(359),a.fh);H9(b,B(360),a.ec);H9(b,B(361),a.wI);H9(b,B(364),B$());if(a.bi!==null){c=G8();ALs(a.bi,c);ANR(b,B(5),c);}c=G8();HC(c,B(355),b);try{b=BL(H(H(BX(),Bks),B(365)));$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 1:try
{ALD(b);if(C()){break _;}b=BL(H(H(BX(),Bks),B(366)));$p=2;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 2:try{ALD(b);if(C()){break _;}b=BL(H(H(BX(),Bks),B(354)));$p=3;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 3:try{ALD(b);if(C()){break _;}e=A$e(131072);RU(c,AWf(e));b=BL(H(H(BX(),Bks),B(365)));f=Ia(e);$p=4;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 4:try
{ACx(b,f);if(C()){break _;}b=BL(H(H(BX(),Bks),B(366)));$p=5;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 5:try{$z=ALD(b);if(C()){break _;}f=$z;if(f!==null){b=BL(H(H(BX(),Bks),B(366)));$p=8;continue _;}b=BL(H(H(BX(),Bks),B(354)));c=BL(H(H(BX(),Bks),B(366)));$p=6;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 6:try{ANk(b,c);if(C()){break _;}b=BL(H(H(BX(),Bks),B(354)));$p=7;continue _;}catch($$e){$$je
=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 7:try{$z=ALD(b);if(C()){break _;}f=$z;if(f!==null){b=BL(H(H(BX(),Bks),B(354)));$p=11;continue _;}b=BL(H(H(BX(),Bks),B(365)));c=BL(H(H(BX(),Bks),B(354)));$p=9;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 8:try{AL0(b);if(C()){break _;}b=BL(H(H(BX(),Bks),B(354)));c=BL(H(H(BX(),Bks),B(366)));$p=6;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 9:try
{ANk(b,c);if(C()){break _;}b=BL(H(H(BX(),Bks),B(365)));$p=10;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 10:a:{try{$z=ALD(b);if(C()){break _;}f=$z;if(f===null)break a;b=BL(H(H(BX(),Bks),B(365)));$p=12;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);}return;case 11:try{AL0(b);if(C()){break _;}b=BL(H(H(BX(),Bks),B(365)));c=BL(H(H(BX(),Bks),B(354)));$p=9;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE)
{d=$$je;}else{throw $$e;}}Cc(d);return;case 12:a:{try{AL0(b);if(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AAJ(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b){$p=2;continue _;}c=a.iL;b=0;d=null;$p=1;case 1:$z=ANX(c,b,d);if(C()){break _;}b=$z;return b;case 2:AMJ(a);if(C()){break _;}c=a.iL;b=0;d=null;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,$p);}
function ACt(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)b=0;else{if(c<128){e=b>>4;f=d>>4;$p=1;continue _;}b=0;}}else b=0;return b;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;return ET(g,b&15,c,d&15);default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function EI(a,b,c,d){return c>=0&&c<128?C4(a,b>>4,d>>4):0;}
function Ic(a,b,c,d,e,f,g){var h,i;if(f>=0&&c<128){h=b>>4;b=d>>4;c=e>>4;d=g>>4;while(h<=c){i=b;while(i<=d){if(!C4(a,h,i))return 0;i=i+1|0;}h=h+1|0;}return 1;}return 0;}
function C4(a,b,c){return BQ(a.iL,b,c);}
function XS(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b>>4;b=c>>4;$p=1;case 1:$z=ZR(a,d,b);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ZR(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iL;$p=1;case 1:$z=AOd(d,b,c);if(C()){break _;}d=$z;return d;default:E_();}}C3().s(a,b,c,d,$p);}
function AJk(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;g=b>>4;h=d>>4;$p=1;continue _;}return 0;case 1:$z=ZR(a,g,h);if(C()){break _;}i=$z;b=b&15;d=d&15;$p=2;case 2:$z=ADC(i,b,c,d,e,f);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALq(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=ZR(a,f,g);if(C()){break _;}h=$z;g=b&15;b=d&15;$p=2;case 2:$z=ADz(h,g,c,b,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ABX(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(a,b,c,d);if(C()){break _;}e=$z;if(!e)f=Bf9;else{L();f=BeN.data[e].b$;}return f;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AEH(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;e=b>>4;f=d>>4;$p=1;continue _;}return 0;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;return RO(g,b&15,c,d&15);default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACd(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKu(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AKu(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=ZR(a,f,g);if(C()){break _;}h=$z;AAs(h,b&15,c,d&15,e);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function APu(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALq(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AEL(a,b,c,d,e);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AIW(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AJk(a,b,c,d,e,f);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AEL(a,b,c,d,e);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AEL(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;while(f<a.cv.p){Rl(Z(a.cv,f),b,c,d);f=f+1|0;}$p=1;case 1:AHL(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function APG(a,b,c,d,e){var f;if(d<=e){f=d;d=e;e=f;}Jh(a,b,e,c,b,d,c);}
function Jh(a,b,c,d,e,f,g){var h;h=0;while(h<a.cv.p){AOE(Z(a.cv,h),b,c,d,e,f,g);h=h+1|0;}}
function AHL(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b-1|0;$p=1;case 1:AO3(a,f,c,d,e);if(C()){break _;}f=b+1|0;$p=2;case 2:AO3(a,f,c,d,e);if(C()){break _;}f=c-1|0;$p=3;case 3:AO3(a,b,f,d,e);if(C()){break _;}f=c+1|0;$p=4;case 4:AO3(a,b,f,d,e);if(C()){break _;}f=d-1|0;$p=5;case 5:AO3(a,b,c,f,e);if(C()){break _;}d=d+1|0;$p=6;case 6:AO3(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,
$p);}
function AO3(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sj)return;L();f=BeN.data;$p=1;case 1:$z=ACt(a,b,c,d);if(C()){break _;}g=$z;h=f[g];if(h===null)return;$p=2;case 2:h.eZ(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AGd(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;return Pi(g,b&15,c,d&15);default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Xv(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=1;$p=1;case 1:$z=AQJ(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AQJ(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(e){$p=1;continue _;}if(c<0)return 0;if(c>=128){f=15-a.gh|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}return 15;case 1:$z=ACt(a,b,c,d);if(C()){break _;}f=$z;L();if(f!=BeS.b&&f!=Bg1.b){if(c<0)return 0;if(c>=128){f=15
-a.gh|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}e=c+1|0;g=0;$p=2;case 2:$z=AQJ(a,b,e,d,g);if(C()){break _;}h=$z;e=b+1|0;g=0;$p=3;case 3:$z=AQJ(a,e,c,d,g);if(C()){break _;}g=$z;e=b-1|0;i=0;$p=4;case 4:$z=AQJ(a,e,c,d,i);if(C()){break _;}i=$z;e=d+1|0;j=0;$p=5;case 5:$z=AQJ(a,b,c,e,j);if(C()){break _;}j=$z;d=d-1|0;e=0;$p=6;case 6:$z=AQJ(a,b,c,d,e);if(C()){break _;}k=$z;if(g<=h)g=h;if(i<=g)i=g;if(j<=i)j=i;if(k<=j)k=j;return k;case 7:$z=ZR(a,g,e);if(C()){break _;}l=$z;return VK(l,b&15,c,d&15,a.gh);default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Zu(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 1;e=b>>4;f=d>>4;if(!C4(a,e,f))return 0;$p=1;continue _;}return 0;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;return Pi(g,b&15,c,d&15);default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALE(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&c>=(-32000000)&&b<32000000&&c<=32000000){d=b>>4;e=c>>4;if(!C4(a,d,e))return 0;$p=1;continue _;}return 0;case 1:$z=ZR(a,d,e);if(C()){break _;}f=$z;return UG(f,b&15,c&15);default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AP7(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!EI(a,c,d,e))return;if(b===Bku){$p=1;continue _;}if(b===Bkv){$p=2;continue _;}$p=3;continue _;case 1:$z=Zu(a,c,d,e);if(C()){break _;}g=$z;if(g)f=15;$p=3;continue _;case 2:$z=ACt(a,c,d,e);if(C()){break _;}g=$z;L();if(BgB.data[g]>f)f=BgB.data[g];$p=3;case 3:$z=ALh(a,b,c,d,e);if(C()){break _;}g=$z;if(g==f)return;$p=4;case 4:Y5(a,b,c,d,e,c,d,
e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALh(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=0&&d<128&&c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000){f=c>>4;g=e>>4;if(!C4(a,f,g))return 0;$p=1;continue _;}return b.z7;case 1:$z=ZR(a,f,g);if(C()){break _;}h=$z;return ACi(h,b,c&15,d,e&15);default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AMr(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000&&d>=0&&d<128){g=c>>4;h=e>>4;if(C4(a,g,h)){$p=1;continue _;}}return;case 1:$z=ZR(a,g,h);if(C()){break _;}i=$z;AQK(i,b,c&15,d,e&15,f);g=0;while(g<a.cv.p){Rl(Z(a.cv,g),c,d,e);g=g+1|0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANf(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Bkr.data;$p=1;case 1:$z=Xv(a,b,c,d);if(C()){break _;}b=$z;return e[b];default:E_();}}C3().s(a,b,c,d,e,$p);}
function Ru(a){return a.gh>=4?0:1;}
function AJj(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;$p=1;case 1:$z=AE1(a,b,c,d);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,$p);}
function AE1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(!(isNaN(c.x)?1:0)&&!(isNaN(c.z)?1:0)&&!(isNaN(c.w)?1:0)){e
=K(c.x);f=K(c.z);g=K(c.w);h=K(b.x);i=K(b.z);j=K(b.w);k=20+(-1)|0;if(20<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=
s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;}return null;}return null;case 1:$z=ACt(a,h,i,j);if(C()){break _;}x=$z;$p=2;case 2:$z=AEH(a,h,i,j);if(C()){break _;}y=$z;L();z=BeN.data[x];if(x>0&&z.o5(y,d)){$p=5;continue _;}o=i-1|0;$p=3;case 3:$z=ACt(a,h,o,j);if
(C()){break _;}p=$z;$p=4;case 4:$z=AEH(a,h,o,j);if(C()){break _;}x=$z;w=BeN.data[p];if(p>0&&w.o5(x,d)){$p=6;continue _;}p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)
/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;case 5:$z=z.nE(a,h,i,j,b,c);if(C()){break _;}ba=$z;if(ba!==null)return ba;o=i-1|0;$p=3;continue _;case 6:$z=w.nE(a,h,o,j,b,c);if(C()){break _;}ba
=$z;if(ba!==null)return ba;p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t
*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function Dh(a,b,c,d,e){var f,g,h;f=0;g=R(d,1.0);e=16.0*d;while(f<a.cv.p){h=16.0;if(g>0)h=e;if(LC(a.bi,b)<h*h)Z(a.cv,f);f=f+1|0;}}
function Ex(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$$je;a:{b:{try{h=0;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){i=$$je;break b;}else{throw $$e;}}j=R(f,1.0);k=16.0*f;while(true){try{if(h>=De(a.cv))break;l=16.0;if(j>0)l=k;m=b-a.bi.d;n=c-a.bi.j;o=d-a.bi.e;if(m*m+n*n+o*o<l*l)ACZ(Z(a.cv,h),e,b,c,d,f,g);h=h+1|0;continue;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){i=$$je;break b;}else{throw $$e;}}}break a;}Cc(i);}}
function AS_(a,b,c,d,e,f){return;}
function BV(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.cv.p){AH3(Z(a.cv,i),b,c,d,e,f,g,h);i=i+1|0;}}
function AOf(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d/16.0);d=K(b.e/16.0);if(!C4(a,c,d)){e=DT();f=new T;W(f);Cg(e,U(FK(H(f,B(367)),b)));return;}$p=1;case 1:$z=ZR(a,c,d);if(C()){break _;}e=$z;VN(e,b);S(a.dY,b);g=0;while(g<a.cv.p){Z(a.cv,g);g=g+1|0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AU3(a,b){Ca(b);}
function ANB(a,b){S(a.cv,b);}
function AKS(a,b){H5(a.cv,b);}
function XQ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DF(a.m_);d=K(c.R);e=K(c.V+1.0);f=K(c.M);g=K(c.U+1.0);h=K(c.S);i=K(c.W+1.0);f=f-1|0;while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeN.data;$p=2;continue _;}j=j+1|0;}d=d+1|0;}c=Dv(c,0.25,0.25,0.25);$p=1;case 1:$z=ADI(a,b,c);if(C()){break _;}m=$z;n=
0;while(n<m.p){o=Z(m,n).Bq();if(o!==null)S(a.m_,o);c=b.AT(Z(m,n));if(c!==null)S(a.m_,c);n=n+1|0;}return a.m_;case 2:$z=ACt(a,d,j,k);if(C()){break _;}n=$z;p=l[n];if(p!==null){m=a.m_;$p=3;continue _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dv(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeN.data;continue _;case 3:p.Fx(a,d,j,k,c,m);if(C()){break _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dv(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeN.data;$p=2;continue _;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Ok(a,b){var c;c=1.0-(BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.5);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*11.0|0;}
function ON(a,b){var c,d,e,f;c=BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sk,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sk,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sk,Long_fromInt(255)))/255.0;return BY(d*c,e*c,f*c);}
function Hv(a,b){var c;c=(Long_rem(a.ec,Long_fromInt(24000)).lo+b)/24000.0-0.25;if(c<0.0)c=c+1.0;if(c>1.0)c=c-1.0;return c+(1.0-(GB(c*3.141592653589793)+1.0)/2.0-c)/3.0;}
function SW(a,b){var c,d,e,f;c=BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.ro,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.ro,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.ro,Long_fromInt(255)))/255.0;b=c*0.8999999761581421+0.10000000149011612;return BY(d*b,e*b,f*(c*0.8500000238418579+0.15000000596046448));}
function ADp(a,b){var c,d,e,f;c=BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sO,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sO,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sO,Long_fromInt(255)))/255.0;b=c*0.9399999976158142+0.05999999865889549;return BY(d*b,e*b,f*(c*0.9100000262260437+0.09000000357627869));}
function A8n(a,b,c){return 64;}
function AJp(a,b){var c;c=1.0-(BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*c*0.5;}
function Fm(a,b,c,d,e){var f,g;f=new JU;g=Bkw;Bkw=Long_add(g,Long_fromInt(1));f.oS=g;f.fF=b;f.fo=c;f.fJ=d;f.p8=e;if(Ic(a,b-8|0,c-8|0,d-8|0,b+8|0,c+8|0,d+8|0)){if(e>0){L();f.jh=Long_add(Long_fromInt(BeN.data[e].mr()),a.ec);}if(!Ww(a.kO,f)){Xd(a.kO,f);Zf(a.gJ,f);}}}
function APc(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ga(a.dY,a.l2);b=0;while(b<a.cv.p){Z(a.cv,b);c=0;while(c<a.l2.p){Z(a.l2,c);c=c+1|0;}b=b+1|0;}DF(a.l2);b=0;a:while(true){if(b>=a.dY.p){b=0;if(b>=a.fB.p)return;d=Z(a.fB,b);$p=1;continue _;}b:{e=Z(a.dY,b);if(e.bD!==null){if(!e.bD.cQ&&e.bD.bI===e)break b;e.bD.bI=null;e.bD=null;}if(!e.cQ){$p=2;continue _;}if(e.cQ){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,
c,f))break a;d=a.dY;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.p){Z(a.cv,g);g=g+1|0;}b=c;}}b=b+1|0;}$p=3;continue _;case 1:d.tJ();if(C()){break _;}b=b+1|0;if(b>=a.fB.p)return;d=Z(a.fB,b);continue _;case 2:Xs(a,e);if(C()){break _;}while(true){if(e.cQ){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,c,f)){$p=3;continue _;}d=a.dY;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.p){Z(a.cv,g);g=g+1|0;}b=c;}b:{while(true){b=b+1|0;if(b>=a.dY.p){b=0;if(b>=a.fB.p)return;d=Z(a.fB,b);$p=1;continue _;}e=Z(a.dY,b);if(e.bD===null)break b;if(e.bD.cQ)break;if
(e.bD.bI!==e)break;}e.bD.bI=null;e.bD=null;}if(e.cQ)continue;else break;}continue _;case 3:$z=ZR(a,c,f);if(C()){break _;}d=$z;AMY(d,e);while(true){d=a.dY;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.p){Z(a.cv,g);g=g+1|0;}b=c;while(true){b=b+1|0;if(b>=a.dY.p){b=0;if(b>=a.fB.p)return;d=Z(a.fB,b);$p=1;continue _;}e=Z(a.dY,b);if(e.bD!==null){if(!e.bD.cQ&&e.bD.bI===e)continue;e.bD.bI=null;e.bD=null;}if(!e.cQ){$p=2;continue _;}if(e.cQ)break;}c=K(e.d/16.0);f=K(e.e/16.0);if(!C4(a,c,f))continue;else break;}continue _;default:
E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Xs(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d);K(b.j);d=K(b.e);if(!Ic(a,c-16|0,0,d-16|0,c+16|0,128,d+16|0))return;b.cr=b.d;b.b7=b.j;b.cs=b.e;b.P=b.v;b.T=b.J;e=K(b.d/16.0);f=K(b.j/16.0);g=K(b.e/16.0);if(b.bD===null){$p=1;continue _;}$p=2;continue _;case 1:b.en();if(C()){break _;}h=K(b.d/16.0);i=K(b.j/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g
==j){if(b.bI!==null){if(!b.bI.cQ&&b.bI.bD===b){k=b.bI;$p=6;continue _;}b.bI.bD=null;b.bI=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cr;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cs;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 2:b.BG();if(C()){break _;}h=K(b.d/16.0);i=K(b.j
/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g==j){if(b.bI!==null){if(!b.bI.cQ&&b.bI.bD===b){k=b.bI;$p=6;continue _;}b.bI.bD=null;b.bI=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cr;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cs;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 3:$z=ZR(a,
e,g);if(C()){break _;}k=$z;RX(k,b,f);if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 4:b.C1();if(C()){break _;}if(b.bI!==null){if(!b.bI.cQ&&b.bI.bD===b){k=b.bI;$p=6;continue _;}b.bI.bD=null;b.bI=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cr;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cs;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;case 5:$z=ZR(a,h,j);if
(C()){break _;}k=$z;VN(k,b);if(b.bI!==null){if(!b.bI.cQ&&b.bI.bD===b){k=b.bI;$p=6;continue _;}b.bI.bD=null;b.bI=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cr;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cs;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;case 6:Xs(a,k);if(C()){break _;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cr;if(!(!(isNaN(b.j)?1:0)
&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cs;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AM4(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:$z=ADI(a,c,b);if(C()){break _;}c=$z;d=0;while(d<c.p){e=Z(c,d);if(!e.cQ&&e.mz)return 0;d=d+1|0;}return 1;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AJh(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);if(b.R<0.0)c=c+(-1)|0;if(b.M<0.0)e=e+(-1)|0;if(b.S<0.0)g=g+(-1)|0;while(c<d){i=e;while(i<f){j=g;if(j<h){L();k=BeN.data;$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACt(a,c,i,j);if(C()){break _;}l=$z;m=
k[l];if(m!==null&&m.b$.nA())return 1;j=j+1|0;a:while(true){if(j<h){L();k=BeN.data;continue _;}i=i+1|0;while(i>=f){c=c+1|0;if(c>=d)break a;i=e;}j=g;}return 0;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AQ9(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);while(c<d){i=e;while(i<f){j=g;if(j<h){$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACt(a,c,i,j);if(C()){break _;}k=$z;L();if(k!=Bgn.b&&k!=BfX.b&&k!=BgD.b){j=j+1|0;a:while(true){if(j<h){continue _;}i=i+1|0;while(i>=f){c=c+1|
0;if(c>=d)break a;i=e;}j=g;}return 0;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAq(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.R);f=K(b.V+1.0);g=K(b.M);h=K(b.U+1.0);i=K(b.S);j=K(b.W+1.0);k=0;l=BY(0.0,0.0,0.0);m=h;while(e<f){n=g;while(n<h){o=i;if(o<j){L();p=BeN.data;$p=1;continue _;}n=n+1|0;}e=e+1|0;}if(HM(l)>0.0){b=CD(l);d.g=d.g+
b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 1:$z=ACt(a,e,n,o);if(C()){break _;}q=$z;r=p[q];if(r!==null&&r.b$===c){s=n+1|0;$p=2;continue _;}o=o+1|0;a:while(true){if(o<j){L();p=BeN.data;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break a;n=g;}o=i;}if(HM(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 2:$z=AEH(a,e,n,o);if(C()){break _;}q=$z;if(m>=s-Js(q)){k=1;$p=3;continue _;}o=o+1|0;b:while(true){if(o<j){L();p=BeN.data;$p=1;continue _;}n=n+1|0;while(n>=
h){e=e+1|0;if(e>=f)break b;n=g;}o=i;}if(HM(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 3:r.qB(a,e,n,o,d,l);if(C()){break _;}o=o+1|0;c:while(true){if(o<j){L();p=BeN.data;$p=1;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break c;n=g;}o=i;}if(HM(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AOr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K(b.R);e=K(b.V+1.0);f=K(b.M);g=K(b.U+1.0);h=K(b.S);i=K(b.W+1.0);while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeN.data;$p=1;continue _;}j=j+1|0;}d=d+1|0;}return 0;case 1:$z=ACt(a,d,j,k);if(C()){break _;}m=$z;n=l[m];if(n!==null&&n.b$===c)return 1;k=k+1|0;a:while(true)
{if(k<i){L();l=BeN.data;continue _;}j=j+1|0;while(j>=g){d=d+1|0;if(d>=e)break a;j=f;}k=h;}return 0;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function X7(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=new WO;$p=1;case 1:AI2(g,a,b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADy(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0/((c.V-c.R)*2.0+1.0);e=1.0/((c.U-c.M)*2.0+1.0);f=1.0/((c.W-c.S)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){if(0.0<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=0.0;p=BY(k,l,m+n*o);$p=1;continue _;}j=
j+e;}i=i+d;}return g/h;case 1:$z=AJj(a,p,b);if(C()){break _;}p=$z;if(p===null)g=g+1|0;h=h+1|0;q=o+f;a:while(true){if(q<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=q;p=BY(k,l,m+n*o);continue _;}j=j+e;while(j>1.0){i=i+d;if(i>1.0)break a;j=0.0;}q=0.0;}return g/h;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function ABG(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;$p=1;case 1:$z=ACt(a,b,c,d);if(C()){break _;}e=$z;L();if(e!=Bgn.b)return;Ex(a,b+0.5,c+0.5,d+0.5,B(215),0.5,2.5999999046325684+(N(a.r)-N(a.r))*0.800000011920929);e=0;$p=2;case 2:APu(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AXL(a,b){return null;}
function AN7(a){var b;b=new T;W(b);return U(Be(H(b,B(368)),a.dY.p));}
function AXV(a){return a.bi;}
function ANv(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;if(g===null)return null;b=b&15;d=d&15;$p=2;case 2:$z=ANm(g,b,c,d);if(C()){break _;}g=$z;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AFS(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b>>4;g=d>>4;$p=1;case 1:$z=ZR(a,f,g);if(C()){break _;}h=$z;if(h!==null)AJi(h,b&15,c,d&15,e);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFJ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;if(g!==null)ADX(g,b&15,c,d&15);return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAz(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();e=BeN.data;$p=1;case 1:$z=ACt(a,b,c,d);if(C()){break _;}b=$z;f=e[b];return f!==null?f.d4():0;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJf(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=1;$p=1;case 1:ABB(a,c,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AIk(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=100000;if(a.fD.p<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=En(a.fD,a.fD.p-1|0);$p=1;case 1:AOl(c,a);if(C()){break _;}if(a.fD.p<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=En(a.fD,a.fD.p-1|0);continue _;default:E_();}}C3().s(a,b,c,$p);}
function Y5(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=a.fD.p;if(4<=i)i=4;j=0;while(true){if(j>=i){k=a.fD;l=new VI;l.ct=b;l.l0=c;l.fV=d;l.fW=e;l.fw=f;l.fb=g;l.eK=h;S(k,l);if(a.fD.p>100000&&a.fD.p>50000){$p=1;continue _;}return;}k=Z(a.fD,(a.fD.p-j|0)-1|0);if(k.ct===b&&ALz(k,c,d,e,f,g,h))break;j=j+1|0;}return;case 1:AIk(a);if(C()){break _;}if
(a.fD.p<=50000)return;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Q5(a){var b;b=Ok(a,1.0);if(b!=a.gh)a.gh=b;}
function X1(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Tp(a.iL);if(!Q2(a.dY,a.bi)&&a.bi!==null){Cg(DT(),B(369));b=a.bi;$p=1;continue _;}a:{c=Ok(a,1.0);if(c!=a.gh){a.gh=c;d=0;while(true){if(d>=a.cv.p)break a;Vy(Z(a.cv,d));d=d+1|0;}}}a.ec=Long_add(a.ec,Long_fromInt(1));if(Long_ne(Long_rem(a.ec,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c
=0;b=null;$p=4;continue _;case 1:AOf(a,b);if(C()){break _;}b:{c=Ok(a,1.0);if(c!=a.gh){a.gh=c;d=0;while(true){if(d>=a.cv.p)break b;Vy(Z(a.cv,d));d=d+1|0;}}}a.ec=Long_add(a.ec,Long_fromInt(1));if(Long_ne(Long_rem(a.ec,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c=0;b=null;$p=4;continue _;case 2:ABn(a,c);if(C()){break _;}d=K(a.bi.d);e=K(a.bi.e);b=new Iq;f=d-64|0;g=0;h=e-64|0;i=d+64|0;j=128;c=e+64|0;$p=3;case 3:AEs(b,a,f,g,h,i,j,c);if(C()){break _;}f=0;if(f>=8000)return;a.hU=(a.hU*3|0)+a.r$|0;g=a.hU>>2;h
=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p=5;continue _;case 4:ABB(a,c,b);if(C()){break _;}c=0;$p=2;continue _;case 5:$z=Hw(b,h,j,i);if(C()){break _;}k=$z;L();if(Bgx.data[k]){l=BeN.data[k];m=a.r;$p=6;continue _;}f=f+1|0;if(f>=8000)return;a.hU=(a.hU*3|0)+a.r$|0;g=a.hU>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;continue _;case 6:l.e6(a,h,j,i,m);if(C()){break _;}f=f+1|0;if(f>=8000)return;a.hU=(a.hU*3|0)+a.r$|0;g=a.hU>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p
=5;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ABn(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Ju(a.gJ);if(c!=IJ(a.kO)){d=new D2;Bl(d,B(370));M(d);}if(c>500)c=500;e=0;a:{while(true){if(e>=c)break a;f=MY(a.gJ);if(!b&&Long_gt(f.jh,a.ec))break;MB(a.gJ,f);KV(a.kO,f);if(Ic(a,f.fF-8|0,f.fo-8|0,f.fJ-8|0,f.fF+8|0,f.fo+8|0,f.fJ+8|0)){g=f.fF;h=f.fo;i=f.fJ;$p=1;continue _;}e=e+1|0;}}return !Ju(a.gJ)?0:1;case 1:$z=ACt(a,g,
h,i);if(C()){break _;}g=$z;if(g==f.p8&&g>0){L();d=BeN.data[g];g=f.fF;h=f.fo;i=f.fJ;f=a.r;$p=2;continue _;}b:{while(true){e=e+1|0;if(e>=c)break b;f=MY(a.gJ);if(!b&&Long_gt(f.jh,a.ec))break;MB(a.gJ,f);KV(a.kO,f);if(!Ic(a,f.fF-8|0,f.fo-8|0,f.fJ-8|0,f.fF+8|0,f.fo+8|0,f.fJ+8|0))continue;else{g=f.fF;h=f.fo;i=f.fJ;continue _;}}}return !Ju(a.gJ)?0:1;case 2:d.e6(a,g,h,i,f);if(C()){break _;}c:{while(true){e=e+1|0;if(e>=c)break c;f=MY(a.gJ);if(!b&&Long_gt(f.jh,a.ec))break;MB(a.gJ,f);KV(a.kO,f);if(!Ic(a,f.fF-8|0,f.fo-8
|0,f.fJ-8|0,f.fF+8|0,f.fo+8|0,f.fJ+8|0))continue;else{g=f.fF;h=f.fo;i=f.fJ;$p=1;continue _;}}}return !Ju(a.gJ)?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AE8(a,b,c,d){var e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=16;f=new Dz;g=0;if(g>=1000)return;h=(b+E(a.r,e)|0)-E(a.r,e)|0;i=(c+E(a.r,e)|0)-E(a.r,e)|0;j=(d+E(a.r,e)|0)-E(a.r,e)|0;$p=1;case 1:$z=ACt(a,h,i,j);if(C()){break _;}k=$z;if(k>0){L();l=BeN.data[k];$p=2;continue _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.r,e)|0)-E(a.r,e)|0;i=(c+E(a.r,e)|0)-E(a.r,
e)|0;j=(d+E(a.r,e)|0)-E(a.r,e)|0;continue _;case 2:l.kM(a,h,i,j,f);if(C()){break _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.r,e)|0)-E(a.r,e)|0;i=(c+E(a.r,e)|0)-E(a.r,e)|0;j=(d+E(a.r,e)|0)-E(a.r,e)|0;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADI(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DF(a.qg);d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);while(d<=e){h=f;while(h<=g){if(C4(a,d,h)){$p=1;continue _;}h=h+1|0;}d=d+1|0;}return a.qg;case 1:$z=ZR(a,d,h);if(C()){break _;}i=$z;AJZ(i,b,c,a.qg);a:while(true){h=h+1|0;while(h>g){d=d+1|0;if(d>e)break a;h=f;}if(!C4(a,d,h))continue;else
{continue _;}}return a.qg;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANc(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);h=Ci();while(d<=e){i=f;while(i<=g){if(C4(a,d,i)){$p=1;continue _;}i=i+1|0;}d=d+1|0;}return h;case 1:$z=ZR(a,d,i);if(C()){break _;}j=$z;AMh(j,b,c,h);a:while(true){i=i+1|0;while(i>g){d=d+1|0;if(d>e)break a;i=f;}if(!C4(a,d,i))continue;else
{continue _;}}return h;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AWF(a){return a.dY;}
function AGs(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!EI(a,b,c,d))return;$p=1;case 1:$z=XS(a,b,d);if(C()){break _;}e=$z;SF(e);return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Yp(a,b){var c,d;c=0;d=0;while(d<a.dY.p){if(P2(b,Dl(Z(a.dY,d))))c=c+1|0;d=d+1|0;}return c;}
function AQb(a,b){var c,d;DC(a.dY,b);c=0;while(c<a.cv.p){Z(a.cv,c);d=0;while(d<b.p){Z(b,d);d=d+1|0;}c=c+1|0;}}
function AQ1(a,b){DC(a.l2,b);}
function V_(a){while(Tp(a.iL)){}}
function AH9(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(a,c,d,e);if(C()){break _;}g=$z;L();h=BeN.data[g];i=BeN.data[b];$p=2;case 2:$z=i.hs(a,c,d,e);if(C()){break _;}j=$z;if(f)j=null;if(!(b>0&&h===null)&&h!==BfW&&h!==BgC&&h!==BfX&&h!==BgD&&h!==Bgn)return 0;if(j===null){$p=3;continue _;}$p=4;continue _;case 3:$z=i.fT(a,c,d,e);if(C()){break _;}b=$z;return !b
?0:1;case 4:$z=AM4(a,j);if(C()){break _;}b=$z;if(!b)return 0;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ART(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.d);f=K(b.j);g=K(b.e);h=d+32.0|0;i=e-h|0;j=f-h|0;k=g-h|0;l=e+h|0;m=f+h|0;n=g+h|0;o=new Iq;$p=1;case 1:AEs(o,a,i,j,k,l,m,n);if(C()){break _;}return APo(A2E(o),b,c,d);default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AJt(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=K(b.d);h=K(b.j);i=K(b.e);j=f+32.0|0;k=g-j|0;l=h-j|0;m=i-j|0;n=g+j|0;o=h+j|0;p=i+j|0;q=new Iq;$p=1;case 1:AEs(q,a,k,l,m,n,o,p);if(C()){break _;}return AF$(A2E(q),b,c,d,e,f);default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function XD(){var b,c;Bkr=$rt_createFloatArray(16);b=0;while(b<=15){c=1.0-b/15.0;Bkr.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}}
function L0(){var a=this;D.call(a);a.uk=null;a.zk=null;a.ll=0;a.Eq=0.0;a.Ep=0.0;a.EQ=0;a.l6=0;a.mt=0;a.nq=0;a.qa=0;a.rL=0;a.zI=0;a.Ae=0.0;a.zK=0.0;a.zh=0.0;a.ou=0;}
var BeJ=null;function BA(){BA=Bt(L0);A2m();}
function Br(a){var b,c,d,e,f;if(!a.ou)return 0;a.ou=0;if(a.ll>0){if(a.mt)WR(32888);if(a.l6)WR(32886);b=a.zI;c=a.ll;d=a.uk.buffer;e=a.ll*7|0;ALp(b,0,c,new Int32Array(d,0,e));if(a.mt)Ti(32888);if(a.l6)Ti(32886);}f=a.nq*4|0;Wv(a);return f;}
function Wv(a){a.ll=0;a.nq=0;a.qa=0;}
function Bz(a){Gh(a,7);}
function Gh(a,b){if(a.ou)Br(a);a.ou=1;Wv(a);a.zI=b;a.l6=0;a.mt=0;a.rL=0;}
function AJv(a,b,c){a.mt=1;a.Eq=b;a.Ep=c;}
function Cq(a,b,c,d){O$(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function Gu(a,b,c,d,e){Qh(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function O$(a,b,c,d){Qh(a,b,c,d,255);}
function Qh(a,b,c,d,e){if(!a.rL){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.l6=1;a.EQ=e<<24|d<<16|c<<8|b;}}
function G(a,b,c,d,e,f){AJv(a,e,f);Bf(a,b,c,d);}
function Bf(a,b,c,d){var e,f,g,h,i;if(a.qa>65534)return;a.qa=a.qa+1|0;a.ll=a.ll+1|0;e=a.nq;f=a.uk;g=a.zk;h=e+0|0;i=b+a.Ae;g[h]=i;h=e+1|0;i=c+a.zK;g[h]=i;h=e+2|0;i=d+a.zh;g[h]=i;if(a.mt){h=e+3|0;i=a.Eq;g[h]=i;h=e+4|0;i=a.Ep;g[h]=i;}if(a.l6){h=e+5|0;e=a.EQ;f[h]=e;}a.nq=a.nq+7|0;}
function ES(a,b){O$(a,b>>16&255,b>>8&255,b&255);}
function ADl(a){a.rL=1;}
function Dc(a,b,c,d){Cj(b,c,d);}
function Fa(a,b,c,d){a.Ae=b;a.zK=c;a.zh=d;}
function A2m(){var b,c;b=new L0;BA();b.ll=0;b.l6=0;b.mt=0;b.nq=0;b.qa=0;b.rL=0;b.ou=0;c=new ArrayBuffer(2097152);b.uk=new Int32Array(c);b.zk=new Float32Array(c);BeJ=b;}
function ANd(){var a=this;D.call(a);a.fL=0;a.fH=0;}
function FG(a,b){var c=new ANd();AZ_(c,a,b);return c;}
function AZ_(a,b,c){var d,e;a.fL=b;a.fH=c;d=1;while(true){c=a.fL;e=d+1|0;if((c/e|0)<320)break;if((a.fH/e|0)<240)break;d=e;}a.fL=a.fL/d|0;a.fH=a.fH/d|0;}
function AEn(a){return a.fL;}
function Zb(a){return a.fH;}
function Gc(){D.call(this);this.mP=0.0;}
function Bkx(){var a=new Gc();M_(a);return a;}
function M_(a){a.mP=0.0;}
function KK(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>24&255)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>24&255)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;Bb(3553);Ba(3042);Bb(3008);Df(770,771);BA();p=BeJ;Bz(p);Gu(p,i,j,k,h);q=d;r=c;Bf(p,q,r,0.0);s=b;Bf(p,s,r,0.0);Gu(p,m,n,o,l);r=e;Bf(p,s,r,0.0);Bf(p,q,r,0.0);Br(p);Bb(3042);Ba(3008);Ba(3553);}
function DD(a,b,c,d,e,f){Cy(b,c,d-(Dw(b,c)/2|0)|0,e,f);}
function Hq(a,b,c,d,e,f){Cy(b,c,d,e,f);}
function CH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;BA();h=BeJ;Bz(h);i=b+0|0;j=c+g|0;k=a.mP;l=(d+0|0)*0.00390625;m=(e+g|0)*0.00390625;G(h,i,j,k,l,m);n=b+f|0;o=a.mP;k=(d+f|0)*0.00390625;G(h,n,j,o,k,m);m=c+0|0;o=a.mP;j=(e+0|0)*0.00390625;G(h,n,m,o,k,j);G(h,i,m,a.mP,l,j);Br(h);}
function CS(){var a=this;Gc.call(a);a.I=null;a.bm=0;a.bE=0;a.bH=null;a.pP=0;a.b0=null;}
function Bky(){var a=new CS();DQ(a);return a;}
function DQ(a){M_(a);a.bH=Ci();a.pP=0;}
function AFC(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.bH.p)return;f=Z(a.bH,e);g=a.I;$p=1;case 1:ACQ(f,g,b,c);if(C()){break _;}e=e+1|0;if(e>=a.bH.p)return;f=Z(a.bH,e);g=a.I;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function YK(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.I;e=null;$p=1;case 1:ADS(d,e);if(C()){break _;}d=a.I;$p=2;case 2:AFh(d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Zk(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bH.p)break a;f=Z(a.bH,e);if(RZ(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.iB(f);if(C()){break _;}while(true){e=e+1|0;if(e>=a.bH.p)break;f=Z(a.bH,e);if(!RZ(f,b,c))continue;else{continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A2v(a,b,c,d){return;}
function AMQ(a,b){return;}
function AP6(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.I=b;a.b0=b.e8;a.bm=c;a.bE=d;$p=1;case 1:a.hT();if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AP4(a){return;}
function AG5(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Fx()){$p=1;continue _;}if(!DU())return;$p=2;continue _;case 1:Zw(a);if(C()){break _;}if(Fx()){continue _;}if(!DU())return;$p=2;case 2:ASw(a);if(C()){break _;}if(!DU())return;continue _;default:E_();}}C3().s(a,$p);}
function Zw(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cx()){a.Ca(Bj(ARU(),a.bm)/a.I.cc|0,(a.bE-(Bj(XO(),a.bE)/a.I.bB|0)|0)-1|0,CV());return;}b=Bj(ARU(),a.bm)/a.I.cc|0;c=(a.bE-(Bj(XO(),a.bE)/a.I.bB|0)|0)-1|0;d=CV();$p=1;case 1:a.IZ(b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ASw(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!CU())return;Bd();if(Bea===null)b=0;else{c=$rt_str(Bea.key);b=Bea===null?32:Bh(c)>1?0:Y(c,0);}d=Bg();$p=1;case 1:a.o$(b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function A3e(a){return;}
function AH7(a){return;}
function ABd(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;$p=1;case 1:AID(a,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function AID(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.I.A!==null){KK(a,0,0,a.bm,a.bE,1610941696,(-1607454656));return;}Bb(2896);Bb(2912);BA();c=BeJ;d=3553;e=a.I.bo;f=B(165);$p=1;case 1:$z=AHs(e,f);if(C()){break _;}g=$z;Cp(d,g);BU(1.0,1.0,1.0,1.0);Bz(c);ES(c,4210752);h=a.bE;i=a.bE/32.0;j=b;G(c,0.0,h,0.0,0.0,i+j);G(c,a.bm,a.bE,
0.0,a.bm/32.0,a.bE/32.0+j);k=a.bm;l=a.bm/32.0;m=0+b|0;G(c,k,0.0,0.0,l,m);G(c,0.0,0.0,0.0,0.0,m);Br(c);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AVo(a){return 1;}
function AFc(){var a=this;D.call(a);a.k6=null;a.jw=0;a.ie=0;a.vC=0;}
function A_w(a){var b=new AFc();A4O(b,a);return b;}
function A4O(a,b){a.k6=J(D,b);a.jw=b;a.ie=0;a.vC=0;}
function SY(a,b){var c,d;c=a.ie;while(true){a.ie=a.ie+1|0;if(a.ie>=a.jw)a.ie=0;if(a.ie==c){c=a.jw;a.jw=a.jw+(a.jw/2|0)|0;d=a.k6;a.k6=J(D,a.jw);Di(d,0,a.k6,0,c);return SY(a,b);}if(a.k6.data[a.ie]!==null)continue;else break;}a.k6.data[a.ie]=b;a.vC=a.vC+1|0;return a.ie;}
function ANI(a,b){if(b<a.jw&&b>=0)return a.k6.data[b];return null;}
function Mj(){D.call(this);}
function Es(){var a=this;Mj.call(a);a.es=0.0;a.eq=0.0;a.er=0.0;a.ep=0.0;a.ev=0.0;a.ew=0.0;a.et=0.0;a.eu=0.0;a.eA=0.0;a.ey=0.0;a.ez=0.0;a.ex=0.0;a.gS=0.0;a.gT=0.0;a.gQ=0.0;a.gR=0.0;}
function M3(){var a=new Es();A42(a);return a;}
function A42(a){Fo(a);}
function Fo(a){a.es=1.0;a.eq=0.0;a.er=0.0;a.ep=0.0;a.ev=0.0;a.ew=1.0;a.et=0.0;a.eu=0.0;a.eA=0.0;a.ey=0.0;a.ez=1.0;a.ex=0.0;a.gS=0.0;a.gT=0.0;a.gQ=0.0;a.gR=1.0;return a;}
function Kt(a){a.es=0.0;a.eq=0.0;a.er=0.0;a.ep=0.0;a.ev=0.0;a.ew=0.0;a.et=0.0;a.eu=0.0;a.eA=0.0;a.ey=0.0;a.ez=0.0;a.ex=0.0;a.gS=0.0;a.gT=0.0;a.gQ=0.0;a.gR=0.0;return a;}
function GP(a,b){a.es=b.es;a.eq=b.eq;a.er=b.er;a.ep=b.ep;a.ev=b.ev;a.ew=b.ew;a.et=b.et;a.eu=b.eu;a.eA=b.eA;a.ey=b.ey;a.ez=b.ez;a.ex=b.ex;a.gS=b.gS;a.gT=b.gT;a.gQ=b.gQ;a.gR=b.gR;return a;}
function TN(a,b){CJ(b,a.es);CJ(b,a.eq);CJ(b,a.er);CJ(b,a.ep);CJ(b,a.ev);CJ(b,a.ew);CJ(b,a.et);CJ(b,a.eu);CJ(b,a.eA);CJ(b,a.ey);CJ(b,a.ez);CJ(b,a.ex);CJ(b,a.gS);CJ(b,a.gT);CJ(b,a.gQ);CJ(b,a.gR);return a;}
function NQ(a,b){b=b.data;b[0]=a.es;b[1]=a.eq;b[2]=a.er;b[3]=a.ep;b[4]=a.ev;b[5]=a.ew;b[6]=a.et;b[7]=a.eu;b[8]=a.eA;b[9]=a.ey;b[10]=a.ez;b[11]=a.ex;b[12]=a.gS;b[13]=a.gT;b[14]=a.gQ;b[15]=a.gR;return a;}
function A$s(a,b){return U3(a,b,a);}
function ZA(a,b){a.es=a.es*b.fx;a.eq=a.eq*b.fx;a.er=a.er*b.fx;a.ep=a.ep*b.fx;a.ev=a.ev*b.fz;a.ew=a.ew*b.fz;a.et=a.et*b.fz;a.eu=a.eu*b.fz;a.eA=a.eA*b.fy;a.ey=a.ey*b.fy;a.ez=a.ez*b.fy;a.ex=a.ex*b.fy;return a;}
function ATM(a,b,c){return WV(a,b,c,a);}
function WV(a,b,c,d){return A6y(b,c,a,d);}
function A6y(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=M3();f=b;g=GB(f);h=Go(f);i=1.0-g;j=c.fx*c.fz;k=c.fz*c.fy;l=c.fx*c.fy;m=c.fx*h;n=c.fz*h;o=c.fy*h;p=c.fx*c.fx*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.fz*c.fz*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.fy*c.fy*i+g;z=d.es*p+d.ev*q+d.eA*s;ba=d.eq*p+d.ew*q+d.ey*s;bb=d.er*p+d.et*q+d.ez*s;bc=d.ep*p+d.eu*q+d.ex*s;bd=d.es*t+d.ev*u+d.eA*v;be=d.eq*t+d.ew*u+d.ey*v;bf=d.er*t+d.et*u+d.ez*v;r=d.ep*t+d.eu*u+d.ex*v;e.eA=d.es*w+d.ev*x+d.eA*
y;e.ey=d.eq*w+d.ew*x+d.ey*y;e.ez=d.er*w+d.et*x+d.ez*y;e.ex=d.ep*w+d.eu*x+d.ex*y;e.es=z;e.eq=ba;e.er=bb;e.ep=bc;e.ev=bd;e.ew=be;e.et=bf;e.eu=r;return e;}
function U3(a,b,c){if(c===null)c=M3();c.gS=c.gS+a.es*b.fx+a.ev*b.fz+a.eA*b.fy;c.gT=c.gT+a.eq*b.fx+a.ew*b.fz+a.ey*b.fy;c.gQ=c.gQ+a.er*b.fx+a.et*b.fz+a.ez*b.fy;c.gR=c.gR+a.ep*b.fx+a.eu*b.fz+a.ex*b.fy;return c;}
function Ls(a,b){var c;a:{if(b instanceof Es){b:{c:{b=b;if(a.es!==b.es)break c;if(a.eq!==b.eq)break c;if(a.er!==b.er)break c;if(a.ep!==b.ep)break c;if(a.ev!==b.ev)break c;if(a.ew!==b.ew)break c;if(a.et!==b.et)break c;if(a.eu!==b.eu)break c;if(a.eA!==b.eA)break c;if(a.ey!==b.ey)break c;if(a.ez!==b.ez)break c;if(a.ex!==b.ex)break c;if(a.gS!==b.gS)break c;if(a.gT!==b.gT)break c;if(a.gQ!==b.gQ)break c;if(a.gR===b.gR){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function N7(){}
function I0(){D.call(this);}
function Wd(){}
function NU(){}
function RW(){}
function Mc(){}
function UX(){var a=this;I0.call(a);a.fx=0.0;a.fz=0.0;a.fy=0.0;}
function Bkz(){var a=new UX();A9$(a);return a;}
function A9$(a){return;}
function L1(a,b,c,d){a.fx=b;a.fz=c;a.fy=d;}
function Wb(){}
function RQ(){}
function G7(){var a=this;I0.call(a);a.k$=0.0;a.k_=0.0;a.k9=0.0;a.pc=0.0;}
function A2W(){var a=new G7();AZM(a);return a;}
function AZM(a){return;}
function VA(a,b){a.k$=b.k$;a.k_=b.k_;a.k9=b.k9;a.pc=b.pc;return a;}
function A_t(a){return a.k$;}
function ATg(a){return a.k_;}
function AZW(a){return a.k9;}
function A5w(a){return a.pc;}
function S4(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Dl(a)!==Dl(b))return 0;c=b;if(a.k$===c.k$&&a.k_===c.k_&&a.k9===c.k9&&a.pc===c.pc)return 1;return 0;}
function ST(){var a=this;D.call(a);a.B5=null;a.B4=null;}
function AIA(a){var b,c;b=a.B5;c=a.B4;Fs(b);CM(c,null);}
function AOW(){Fh.call(this);}
function A40(a){var b=new AOW();AYv(b,a);return b;}
function AYv(a,b){WP(a,b);}
function H1(){}
function Un(){}
function ACW(){var a=this;D.call(a);a.fN=null;a.iy=null;a.kz=null;a.p2=0;a.rb=0;a.ii=null;}
function AJx(a,b,c,d){var e=new ACW();AUh(e,a,b,c,d);return e;}
function AUh(a,b,c,d,e){a.ii=b;a.rb=a.ii.d6;a.fN=c;a.iy=d;a.p2=e;}
function GK(a){return a.fN===null?0:1;}
function GC(a){var b;Rp(a);if(a.fN===null){b=new JY;O(b);M(b);}b=a.fN.zj;a.kz=a.fN;a.iy=a.fN;a.fN=a.fN.hq;a.p2=a.p2+1|0;return b;}
function AHe(a){var b,c;if(a.kz===null){b=new D2;O(b);M(b);}b=a.ii;c=a.kz;if(c.iw===null)b.pB=c.hq;else c.iw.hq=c.hq;if(c.hq===null)b.qi=c.iw;else c.hq.iw=c.iw;b.hw=b.hw-1|0;b.d6=b.d6+1|0;if(a.kz===a.iy){a.iy=!GK(a)?null:a.fN.iw;a.p2=a.p2-1|0;}else if(a.kz===a.fN)a.fN=!ZO(a)?null:a.iy.hq;a.rb=a.ii.d6;a.kz=null;}
function ZO(a){return a.iy===null?0:1;}
function ABp(a,b){var c;Rp(a);c=new Rz;c.zj=b;c.iw=a.iy;c.hq=a.fN;if(a.iy!==null)a.iy.hq=c;else a.ii.pB=c;if(a.fN!==null)a.fN.iw=c;else a.ii.qi=c;a.iy=c;b=a.ii;b.hw=b.hw+1|0;b=a.ii;b.d6=b.d6+1|0;a.rb=a.ii.d6;a.kz=null;}
function Rp(a){var b;if(a.rb>=a.ii.d6)return;b=new KR;O(b);M(b);}
function Rz(){var a=this;D.call(a);a.zj=null;a.hq=null;a.iw=null;}
function BkA(){var a=new Rz();A0J(a);return a;}
function A0J(a){return;}
function KH(){var a=this;D.call(a);a.zg=null;a.kw=null;a.ha=null;a.lV=null;a.B_=null;a.wF=null;a.sP=0;a.DT=0;}
var BkB=0;var BeI=null;function AHs(a,b){var c,d,e,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=CP(BeI,b);if(c!==null)return c.f6;try{AFd(a.kw);WQ(a.kw);d=QW(a.kw,0);if(!Iw(b,B(371))){e=Ke(b);$p=1;continue _;}a.sP=1;e=Ke(Jq(b,7));$p=2;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}b=new B6;Bl(b,B(372));M(b);case 1:a:{try{$z=Y9(a,e);if(C()){break _;}c=$z;LK(a,c,d);BkB=0;Q$(BeI,b,CX(d));}catch($$e){$$je
=Bi($$e);if($$je instanceof B1){break a;}else{throw $$e;}}return d;}b=new B6;Bl(b,B(372));M(b);case 2:a:{try{$z=Y9(a,e);if(C()){break _;}c=$z;LK(a,c,d);a.sP=0;Q$(BeI,b,CX(d));}catch($$e){$$je=Bi($$e);if($$je instanceof B1){break a;}else{throw $$e;}}return d;}b=new B6;Bl(b,B(372));M(b);default:E_();}}C3().s(a,b,c,d,e,$p);}
function AHz(a,b){var c;EA(a.kw);WQ(a.kw);c=QW(a.kw,0);LK(a,b,c);BR(a.zg,CX(c),b);return c;}
function LK(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;Eb(a,c);if(!BkB){Ej(3553,10241,9728);Ej(3553,10240,9728);}else{Ej(3553,10241,9986);Ej(3553,10240,9728);Ej(3553,33085,4);}if(a.DT){Ej(3553,10241,9729);Ej(3553,10240,9729);}if(!a.sP){Ej(3553,10242,10497);Ej(3553,10243,10497);}else{Ej(3553,10242,10496);Ej(3553,10243,10496);}d=b.xp;e=b.Dm;f=b.tX;g=$rt_createByteArray(Bj(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if
(a.wF!==null&&a.wF.dw){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}a:{EA(a.ha);UH(a.ha,g);b=a.ha;EO(b,0);Nj(b,h.length);St(3553,0,6408,d,e,0,6408,5121,a.ha);if(BkB){p=1;while(true){if(p>4)break a;o=d>>(p-1|0);q=d>>p;r=e>>p;EA(a.lV);s=0;while(s<q){t=0;while(t<r){b=a.ha;c=s*2|0;i=c+0|0;k=t*2|0;n=Bj(k+0|0,o);u=KP(b,(i+n|0)*4|0);b=a.ha;c=c+1|0;v=KP(b,(c+n|0)*4|0);b=a.ha;k=
Bj(k+1|0,o);w=KP(b,(c+k|0)*4|0);x=KP(a.ha,(i+k|0)*4|0);y=Lf(a,Lf(a,u,v),Lf(a,w,x));AA3(a.lV,(s+Bj(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}St(3553,p,6408,q,r,0,6408,5121,a.lV);z=a.ha;a.ha=a.lV;a.lV=z;p=p+1|0;}}}}
function AD1(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=B(373);$p=1;case 1:$z=AHs(a,b);if(C()){break _;}d=$z;return d;default:E_();}}C3().s(a,b,c,d,$p);}
function G5(a,b){S(a.B_,b);b.o9();}
function Lf(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function Y9(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AER(b);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function Eb(a,b){if(b<0)return;Cp(3553,b);}
function ADB(){BkB=0;}
function Wc(){var a=this;D.call(a);a.r8=null;a.xo=0;a.tg=0;}
function BkC(a,b,c){var d=new Wc();AOF(d,a,b,c);return d;}
function AOF(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.r8=$rt_createIntArray(256);a.xo=0;e=Ke(c);$p=1;case 1:$z=AER(e);if(C()){break _;}f
=$z;g=f.xp;e=f.tX;h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+Bj(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.r8.data[h]=k+2|0;h=h+1|0;}a.xo=AHz(d,f);a.tg=IW(288);BA();p=BeJ;q=0;while(q<256){FF(a.tg+q|0,4864);Bz(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;G(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;G(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;G(p,7.989999771118164,0.0,0.0,x,y);G(p,0.0,0.0,0.0,u,y);Br(p);Ee();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.dw){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}FF((a.tg+256|0)+l|0,4864);F3(ba/255.0,bb/255.0,bc/255.0);Ee();l=l+1|0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function Cy(a,b,c,d,e){SC(a,b,c+1|0,d+1|0,e,1);ED(a,b,c,d,e);}
function ED(a,b,c,d,e){SC(a,b,c,d,e,0);}
function SC(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Cp(3553,a.xo);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BU(g,h,i,j);B3();Bw(c,d,0.0);k=0;while(k<Bh(b)){c=k;while(true){d=Bh(b);k=c+1|0;if(d<=k)break;if(Y(b,c)!=167)break;l=Uy(B(374),Y(AKi(b),k));c=c+2|0;}if(c<Bh(b)){m=Ve(Y(b,c));if(m>=0){FQ((a.tg+m|0)+32|0);Bw(a.r8.data[m+32|0],0.0,0.0);}}}BD();}
function Dw(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<Bh(b)){if(Y(b,d)==167)d=d+1|0;else{e=Ve(Y(b,d));if(e>=0)c=c+a.r8.data[e+32|0]|0;}d=d+1|0;}return c;}
function AQz(a,b){var c,d,e,f;c=Ci();d=ANj(b,B(158)).data;e=d.length;f=0;while(f<e){S(c,d[f]);f=f+1|0;}return c;}
function Qg(){var a=this;D.call(a);a.FP=0;a.FO=0;}
function BkD(){var a=new Qg();A$x(a);return a;}
function A$x(a){return;}
function Yw(a){AME(1);a.FP=0;a.FO=0;}
function AFy(a){Lq();Mz();AME(0);}
function AKU(){var a=this;Eu.call(a);a.o4=null;a.re=null;a.oz=null;a.sV=null;a.ta=0;}
function Bas(){var a=new AKU();A4s(a);return a;}
function A4s(a){L();Hz(a,BfW.bb+1|0);a.o4=$rt_createFloatArray(256);a.re=$rt_createFloatArray(256);a.oz=$rt_createFloatArray(256);a.sV=$rt_createFloatArray(256);a.ta=0;a.wV=2;}
function AZ8(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.ta=a.ta+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=c-2|0;while(e<=c){f=b&15;g=e&15;d=d+a.o4.data[f+(g*16|0)|0];e=e+1|0;}h=a.re.data;i=b+(c*16|0)|0;h[i]=d/3.200000047683716+a.oz.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){j=a.oz.data;i=b+(c*16|0)|0;j[i]=j[i]+a.sV.data[i]*0.05000000074505806;if(a.oz.data[i]<0.0)a.oz.data[i]=0.0;j=a.sV.data;j[i]=j[i]-0.30000001192092896;if(BP()<0.2)a.sV.data[i]=0.5;c=c+1|0;}b=b+1|0;}j=a.re;a.re=a.o4;a.o4
=j;c=0;while(c<256){d=a.o4.data[(c-(a.ta*16|0)|0)&255];if(d>1.0)d=1.0;if(d<0.0)d=0.0;k=d*d;i=32.0+k*32.0|0;l=50.0+k*64.0|0;m=255;n=146.0+k*50.0|0;if(a.mA){b=i*30|0;i=((b+(l*59|0)|0)+2805|0)/100|0;l=(b+(l*70|0)|0)/100|0;m=(b+17850|0)/100|0;}j=a.dC.data;b=c*4|0;j[b+0|0]=i<<24>>24;a.dC.data[b+1|0]=l<<24>>24;a.dC.data[b+2|0]=m<<24>>24;a.dC.data[b+3|0]=n<<24>>24;c=c+1|0;}}
function ACh(){var a=this;Eu.call(a);a.ov=null;a.rp=null;a.jO=null;a.sL=null;a.tq=0;}
function BcA(){var a=new ACh();A3l(a);return a;}
function A3l(a){L();Hz(a,BfX.bb+1|0);a.ov=$rt_createFloatArray(256);a.rp=$rt_createFloatArray(256);a.jO=$rt_createFloatArray(256);a.sL=$rt_createFloatArray(256);a.tq=0;a.wV=2;}
function A8Q(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.tq=a.tq+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){j=(g+e|0)&15;h=(i+f|0)&15;d=d+a.ov.data[j+(h*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.rp.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jO.data;e=(b+0|0)&15;j=((c+0|0)&15)*16|0;n=m[e+j|0];m=a.jO.data;h=h&15;n=n+m[h+j|0];m=a.jO.data;c=c+1|0;j=(c&15)*16|0;k[l]
=d+(n+m[h+j|0]+a.jO.data[e+j|0])/4.0*0.800000011920929;m=a.jO.data;m[l]=m[l]+a.sL.data[l]*0.009999999776482582;if(a.jO.data[l]<0.0)a.jO.data[l]=0.0;m=a.sL.data;m[l]=m[l]-0.05999999865889549;if(BP()<0.005)a.sL.data[l]=1.5;}b=b+1|0;}m=a.rp;a.rp=a.ov;a.ov=m;c=0;while(c<256){d=a.ov.data[(c-((a.tq/3|0)*16|0)|0)&255]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*100.0+155.0|0;n=d*d;h=n*255.0|0;l=n*d*d*128.0|0;if(a.mA){b=j*30|0;j=((b+(h*59|0)|0)+(l*11|0)|0)/100|0;h=(b+(h*70|0)|0)/100|0;l=(b+(l*70|0)|0)/100|0;}m=a.dC.data;b
=c*4|0;m[b+0|0]=j<<24>>24;a.dC.data[b+1|0]=h<<24>>24;a.dC.data[b+2|0]=l<<24>>24;a.dC.data[b+3|0]=(-1);c=c+1|0;}}
function AR3(){var a=this;Eu.call(a);a.mn=null;a.oI=null;}
function AVD(a){var b=new AR3();AZn(b,a);return b;}
function AZn(a,b){L();Hz(a,Bgn.bb+(b*16|0)|0);a.mn=$rt_createFloatArray(320);a.oI=$rt_createFloatArray(320);}
function A3s(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<16){c=0;while(c<20){d=18;e=a.mn.data;f=c+1|0;g=e[b+((f%20|0)*16|0)|0]*18.0;h=b-1|0;while(h<=(b+1|0)){i=c;while(i<=f){if(h>=0&&i>=0&&h<16&&i<20)g=g+a.mn.data[h+(i*16|0)|0];d=d+1|0;i=i+1|0;}h=h+1|0;}e=a.oI.data;j=b+(c*16|0)|0;e[j]=g/(d*1.059999942779541);if(c>=19)a.oI.data[j]=BP()*BP()*BP()*4.0+BP()*0.10000000149011612+0.20000000298023224;c=f;}b=b+1|0;}e=a.oI;a.oI=a.mn;a.mn=e;f=0;while(f<256){k=a.mn.data[f]*1.7999999523162842;if(k>1.0)k=1.0;if(k<0.0)k=
0.0;l=k*155.0+100.0|0;g=k*k;m=g*255.0|0;j=g*k*k*k*k*k*k*k*k*255.0|0;n=255;if(k<0.5)n=0;if(a.mA){c=l*30|0;l=((c+(m*59|0)|0)+(j*11|0)|0)/100|0;m=(c+(m*70|0)|0)/100|0;j=(c+(j*70|0)|0)/100|0;}e=a.dC.data;b=f*4|0;e[b+0|0]=l<<24>>24;a.dC.data[b+1|0]=m<<24>>24;a.dC.data[b+2|0]=j<<24>>24;a.dC.data[b+3|0]=n<<24>>24;f=f+1|0;}}
function Xn(){}
function AAr(){var a=this;D.call(a);a.iE=null;a.bN=null;a.iD=null;a.eI=null;a.gM=null;a.c8=null;a.dr=0;a.dE=0;a.j6=0;a.yX=0;a.bP=null;a.D4=null;a.pu=0;a.on=0;a.xH=0;a.xg=0;a.qn=0;a.qo=0;a.qp=0;a.s7=0;a.s6=0;a.s8=0;a.r5=0;a.s4=0;a.ld=0;a.xn=0;a.Hg=null;a.HQ=null;a.r9=0;a.rT=0;a.DN=0;a.sq=0;a.qx=0;a.oX=null;a.Ha=0;a.GI=0;a.rC=0.0;a.rB=0.0;a.rA=0.0;a.tF=0.0;a.q5=0;}
function BaR(a,b){var c=new AAr();A2h(c,a,b);return c;}
function A2h(a,b,c){var d,e,f,g,h,i,j;a.iE=Ci();a.eI=Ci();a.pu=0;a.r5=(-1);a.Hg=$rt_createIntArray(50000);a.HQ=Rb(64);a.oX=Ci();a.Ha=0;a.GI=IW(1);a.rC=(-9999.0);a.rB=(-9999.0);a.rA=(-9999.0);a.q5=0;a.bP=b;a.iD=c;a.yX=IW(786432);a.on=IW(3);B3();FF(a.on,4864);Zc(a);Ee();BD();BA();d=BeJ;a.xH=a.on+1|0;FF(a.xH,4864);e=(-384);while(e<=384){f=(-384);while(f<=384){Bz(d);g=e+0|0;h=f+0|0;Bf(d,g,16.0,h);i=e+64|0;Bf(d,i,16.0,h);f=f+64|0;h=f;Bf(d,i,16.0,h);Bf(d,g,16.0,h);Br(d);}e=e+64|0;}Ee();a.xg=a.on+2|0;FF(a.xg,4864);Bz(d);f
=(-384);while(f<=384){j=(-384);while(j<=384){g=f+64|0;h=j+0|0;Bf(d,g,(-16.0),h);i=f+0|0;Bf(d,i,(-16.0),h);j=j+64|0;h=j;Bf(d,i,(-16.0),h);Bf(d,g,(-16.0),h);}f=f+64|0;}Br(d);Ee();}
function Zc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.bP.l.bw)return;b=new Dz;BA();c=BeJ;Bz(c);d=0;while(d<1500){a:{e=N(b)*2.0-1.0;f=N(b)*2.0-1.0;g=N(b)*2.0-1.0;h=0.25+N(b)*0.25;i=e*e+f*f+g*g;if(i<1.0&&i>0.01){i=1.0/Ed(i);j=e*i;f=f*i;g=g*i;k=j*100.0;l=f*100.0;m=g*100.0;n=CR(j,g);o=Go(n);p=GB(n);q=CR(Ed(j*j+g*g),f);r=Go(q);s=GB(q);t=Cl(b)*3.141592653589793*2.0;u=Go(t);v=GB(t);w=0;i=0.0*s;e=0.0*r;while(true){if(w>=4)break a;j=((w&2)-1|0)*h;w=w+1|0;x=((w&2)-1|0)*h;y=j*v-x*u;z=x*
v+j*u;ba=y*r+i;bb=e-y*s;bc=bb*o-z*p;bd=z*o+bb*p;Bf(c,k+bc,l+ba,m+bd);}}}d=d+1|0;}Br(c);}
function QX(a,b){if(a.bN!==null)AKS(a.bN,a);a.rC=(-9999.0);a.rB=(-9999.0);a.rA=(-9999.0);Bgm.n0=b;a.bN=b;a.D4=A8i(b);if(b!==null){ANB(b,a);I9(a);}}
function I9(a){var b,c,d,e,f,g,h,i;a:{L();AKl(Be1,a.bP.l.lb);a.r5=a.bP.l.he;if(a.c8!==null){b=0;while(true){if(b>=a.c8.data.length)break a;ARD(a.c8.data[b]);b=b+1|0;}}}b=64<<(3-a.r5|0);if(b>400)b=400;b=(b/16|0)+1|0;a.dr=b;a.dE=8;a.j6=b;a.c8=J(Ik,Bj(Bj(a.dr,a.dE),a.j6));a.gM=J(Ik,Bj(Bj(a.dr,a.dE),a.j6));c=0;d=0;a.qn=0;a.qo=0;a.qp=0;a.s7=a.dr;a.s6=a.dE;a.s8=a.j6;e=0;while(e<a.eI.p){Z(a.eI,e).i1=0;e=e+1|0;}DF(a.eI);f=0;while(f<a.dr){g=0;while(g<a.dE){h=0;while(h<a.j6){if(a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0]!==
null)Ga(a.iE,a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0].gl);a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0]=Bbu(a.bN,a.iE,f*16|0,g*16|0,h*16|0,16,a.yX+c|0);a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0].JJ=0;a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0].xF=1;a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0].fu=1;i=a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0];b=d+1|0;i.Ii=d;KU(a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0]);a.gM.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0]=a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0];S(a.eI,a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0]);c=c+3|0;h=h+1
|0;d=b;}g=g+1|0;}f=f+1|0;}if(a.bN!==null){i=a.bN.bi;Tg(a,K(i.d),K(i.j),K(i.e));PU(a.gM,AYF(i));}}
function ACy(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ARf(Bkp,a.bN,a.iD,a.bP.e8,a.bP.f,d);AHa(Bgm,a.bN,a.iD,a.bP.e8,a.bP.f,a.bP.l,d);a.s4=0;a.ld=0;a.xn=0;e=a.bN.bi;f=e.cr;g=e.d-e.cr;h=d;BkE=f+g*h;BkF=e.b7+(e.j-e.b7)*h;BkG=e.cs+(e.e-e.cs)*h;BkH=e.cr+(e.d-e.cr)*h;BkI=e.b7+(e.j-e.b7)*h;BkJ=e.cs+(e.e-e.cs)*h;i=a.bN.dY;a.s4=i.p;if(a.bP.l.bw)Bb(2912);j=0;while
(true){if(j>=i.p){j=0;if(j>=a.iE.p)return;b=Bkp;c=Z(a.iE,j);$p=1;continue _;}k=Z(i,j);if(R_(k,b)&&ME(c,k.L)){if(k!==a.bN.bi)break;if(a.bP.l.cC)break;}j=j+1|0;}a.ld=a.ld+1|0;e=Bgm;$p=2;continue _;case 1:YU(b,c,d);if(C()){break _;}j=j+1|0;if(j>=a.iE.p)return;b=Bkp;c=Z(a.iE,j);continue _;case 2:AM8(e,k,d);if(C()){break _;}while(true){j=j+1|0;if(j>=i.p){j=0;if(j>=a.iE.p)return;b=Bkp;c=Z(a.iE,j);$p=1;continue _;}k=Z(i,j);if(!R_(k,b))continue;if(!ME(c,k.L))continue;if(k!==a.bN.bi)break;if(!a.bP.l.cC)continue;else break;}a.ld
=a.ld+1|0;e=Bgm;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ALi(a){var b;b=new T;W(b);return U(Be(H(Be(H(Be(H(Be(H(Be(H(b,B(375)),a.sq),B(23)),a.r9),B(376)),a.rT),B(377)),a.DN),B(378)),a.qx));}
function XZ(a){var b;b=new T;W(b);return U(Be(H(Be(H(Be(H(Be(H(b,B(379)),a.ld),B(23)),a.s4),B(380)),a.xn),B(381)),(a.s4-a.xn|0)-a.ld|0));}
function Tg(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;c=b+(-8)|0;d=d+(-8)|0;a.qn=2147483647;a.qo=2147483647;a.qp=2147483647;a.s7=(-2147483648);a.s6=(-2147483648);a.s8=(-2147483648);e=a.dr*16|0;f=e/2|0;g=0;h=e-1|0;while(g<a.dr){i=g*16|0;j=(i+f|0)-c|0;if(j<0)j=j-h|0;i=i-Bj(j/e|0,e)|0;if(i<a.qn)a.qn=i;if(i>a.s7)a.s7=i;k=0;while(k<a.j6){l=k*16|0;m=(l+f|0)-d|0;if(m<0)m=m-h|0;j=l-Bj(m/e|0,e)|0;if(j<a.qp)a.qp=j;if(j>a.s8)a.s8=j;n=0;while(n<a.dE){o=n*16|0;if(o<a.qo)a.qo=o;if(o>a.s6)a.s6=o;p=a.c8.data[Bj(Bj(k,a.dE)+n|0,
a.dr)+g|0];q=p.i1;Sd(p,i,o,j);if(!q&&p.i1)S(a.eI,p);n=n+1|0;}k=k+1|0;}g=g+1|0;}}
function Vl(a,b,c,d){var e,f,g;if(a.bP.l.he!=a.r5)I9(a);if(!c){a.r9=0;a.rT=0;a.DN=0;a.sq=0;a.qx=0;}e=b.d-a.rC;f=b.j-a.rB;g=b.e-a.rA;if(e*e+f*f+g*g>16.0){a.rC=b.d;a.rB=b.j;a.rA=b.e;Tg(a,K(b.d),K(b.j),K(b.e));PU(a.gM,AYF(b));}return 0+Yy(a,0,a.gM.data.length,c,d)|0;}
function Yy(a,b,c,d,e){var f,g,h,i,j,k,l;DF(a.oX);f=0;while(b<c){if(!d){a.r9=a.r9+1|0;if(a.gM.data[b].gY.data[d])a.qx=a.qx+1|0;else if(a.gM.data[b].fu)a.sq=a.sq+1|0;else a.rT=a.rT+1|0;}if(!a.gM.data[b].gY.data[d]&&a.gM.data[b].fu&&a.gM.data[b].xF&&PE(a.gM.data[b],d)>=0){S(a.oX,a.gM.data[b]);f=f+1|0;}b=b+1|0;}g=a.bP.f;h=g.cr+(g.d-g.cr)*e;i=g.b7+(g.j-g.b7)*e;j=g.cs+(g.e-g.cs)*e;k=0;while(k<a.oX.p){l=Z(a.oX,k);B3();Bw(l.Bv-h,l.Ej-i,l.Dk-j);FQ(PE(l,d));BD();k=k+1|0;}return f;}
function HR(a){if(a.bP.l.bw)return;a.pu=a.pu+1|0;}
function AC_(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bP.l.bw)return;Bb(3553);c=ON(a.bN,b);d=c.x;e=c.z;f=c.w;if(a.bP.l.dw){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}F3(d,e,f);BA();h=BeJ;Gr(0);if(!a.bP.l.bw)Ba(2912);F3(d,e,f);FQ(a.xH);Ba(3553);Bb(2912);Bb(3008);Ba(3042);Df(1,1);B3();BU(1.0,1.0,1.0,1.0);Bw(0.0,0.0,0.0);Bv(0.0,
0.0,0.0,1.0);Bv(Hv(a.bN,b)*360.0,1.0,0.0,0.0);i=3553;c=a.iD;j=B(382);$p=1;case 1:$z=AHs(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-30.0),100.0,(-30.0),0.0,0.0);G(h,30.0,100.0,(-30.0),1.0,0.0);G(h,30.0,100.0,30.0,1.0,1.0);G(h,(-30.0),100.0,30.0,0.0,1.0);Br(h);i=3553;c=a.iD;j=B(383);$p=2;case 2:$z=AHs(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-20.0),(-100.0),20.0,1.0,1.0);G(h,20.0,(-100.0),20.0,0.0,1.0);G(h,20.0,(-100.0),(-20.0),0.0,0.0);G(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Br(h);Bb(3553);g=AJp(a.bN,
b);if(g>0.0){BU(g,g,g,g);FQ(a.on);}BU(1.0,1.0,1.0,1.0);Bb(3042);Ba(3008);if(!a.bP.l.bw)Ba(2912);BD();F3(d*0.20000000298023224+0.03999999910593033,e*0.20000000298023224+0.03999999910593033,f*0.6000000238418579+0.10000000149011612);Bb(3553);FQ(a.xg);Ba(3553);Gr(1);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function YI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bP.l.bw)return;if(a.bP.l.lb){$p=2;continue _;}Bb(2884);c=a.bP.f.b7;d=a.bP.f.j-a.bP.f.b7;e=b;f=c+d*e;g=32;BA();h=BeJ;i=3553;j=a.iD;k
=B(384);$p=1;case 1:$z=AHs(j,k);if(C()){break _;}l=$z;Cp(i,l);Ba(3042);Df(770,771);j=SW(a.bN,b);m=j.x;n=j.z;o=j.w;if(a.bP.l.dw){p=m*30.0;m=(p+n*59.0+o*11.0)/100.0;n=(p+n*70.0)/100.0;o=(p+o*70.0)/100.0;}d=a.bN.bi.bT+(a.bN.bi.d-a.bN.bi.bT)*e+(a.pu+b)*0.029999999329447746;e=a.bN.bi.bS+(a.bN.bi.e-a.bN.bi.bS)*e;l=K(d/2048.0);q=K(e/2048.0);c=d-(l*2048|0);d=e-(q*2048|0);p=120.0-f+0.33000001311302185;r=c*4.8828125E-4;s=d*4.8828125E-4;Bz(h);Gu(h,m,n,o,0.800000011920929);t=p;u=(-256);while(u<256){v=(-256);while(v<256)
{i=u+0|0;w=i;x=v+g|0;y=x;c=i*4.8828125E-4+r;d=x*4.8828125E-4+s;G(h,w,t,y,c,d);i=u+g|0;e=i;z=i*4.8828125E-4+r;G(h,e,t,y,z,d);i=v+0|0;d=i;y=i*4.8828125E-4+s;G(h,e,t,d,z,y);G(h,w,t,d,c,y);v=x;}u=u+g|0;}Br(h);BU(1.0,1.0,1.0,1.0);Bb(3042);Ba(2884);return;case 2:AA$(a,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AA$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:if(a.bP.l.bw)return;Bb(2884);c=a.bP.f.b7;d=a.bP.f.j-a.bP.f.b7;e=b;f=c+d*e;BA();g=BeJ;h=12.0;c=(a.bN.bi.bT+(a.bN.bi.d-a.bN.bi.bT)*e+(a.pu+b)*0.029999999329447746)/12.0;d=(a.bN.bi.bS+(a.bN.bi.e-a.bN.bi.bS)*e)/12.0+0.33000001311302185;i=108.0-f+0.33000001311302185;j=K(c/2048.0);k=K(d/2048.0);e=c-(j*2048|0);d=d-(k*2048|0);l=3553;m=a.iD;n=B(384);$p=1;case 1:$z=AHs(m,n);if(C()){break _;}o=$z;Cp(l,o);Ba(3042);Df(770,771);m=SW(a.bN,b);p=m.x;q=m.z;r=m.w;if(a.bP.l.dw){b=p*30.0;p=(b+q*59.0+r*11.0)/100.0;q=(b+q
*70.0)/100.0;r=(b+r*70.0)/100.0;}s=K(e)*0.00390625;t=K(d)*0.00390625;u=e-K(e);v=d-K(d);CC(h,1.0,h);o=0;k=R(i,(-5.0));w=i+0.0;x=R(i,5.0);b=i+4.0;d=b-9.765625E-4;y=b;while(o<2){if(o)DN(1,1,1,1);else DN(0,0,0,0);z=(-2);while(z<=3){ba=(-2);while(ba<=3){Bz(g);bb=z*8|0;bc=ba*8|0;bd=bb-u;be=bc-v;if(k>0){Gu(g,p*0.699999988079071,q*0.699999988079071,r*0.699999988079071,0.800000011920929);Dc(g,0.0,(-1.0),0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,w,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625
+s;G(g,bh,w,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);}if(x<=0){Gu(g,p,q,r,0.800000011920929);Dc(g,0.0,1.0,0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,d,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;G(g,bh,d,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,d,e,bi,bg);G(g,c,d,e,bf,bg);}a:{Gu(g,p*0.8999999761581421,q*0.8999999761581421,r*0.8999999761581421,0.800000011920929);if(z>(-1)){Dc(g,(-1.0),0.0,0.0);bj=0;e=be+8.0;bg=(bc+8.0)*0.00390625
+t;bh=be+0.0;bi=(bc+0.0)*0.00390625+t;while(true){if(bj>=8)break a;b=bj;c=bd+b+0.0;bf=(bb+b+0.5)*0.00390625+s;G(g,c,w,e,bf,bg);G(g,c,y,e,bf,bg);G(g,c,y,bh,bf,bi);G(g,c,w,bh,bf,bi);bj=bj+1|0;}}}b:{if(z<=1){Dc(g,1.0,0.0,0.0);bk=0;bf=be+8.0;bh=(bc+8.0)*0.00390625+t;bi=be+0.0;c=(bc+0.0)*0.00390625+t;while(true){if(bk>=8)break b;b=bk;e=bd+b+1.0-9.765625E-4;bg=(bb+b+0.5)*0.00390625+s;G(g,e,w,bf,bg,bh);G(g,e,y,bf,bg,bh);G(g,e,y,bi,bg,c);G(g,e,w,bi,bg,c);bk=bk+1|0;}}}c:{Gu(g,p*0.800000011920929,q*0.800000011920929,
r*0.800000011920929,0.800000011920929);if(ba>(-1)){Dc(g,0.0,0.0,(-1.0));bj=0;c=bd+0.0;bf=(bb+0.0)*0.00390625+s;bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;while(true){if(bj>=8)break c;b=bj;e=be+b+0.0;bg=(bc+b+0.5)*0.00390625+t;G(g,c,y,e,bf,bg);G(g,bh,y,e,bi,bg);G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);bj=bj+1|0;}}}d:{if(ba<=1){Dc(g,0.0,0.0,1.0);bk=0;bi=bd+0.0;e=(bb+0.0)*0.00390625+s;bg=bd+8.0;bh=(bb+8.0)*0.00390625+s;while(true){if(bk>=8)break d;b=bk;c=be+b+1.0-9.765625E-4;bf=(bc+b+0.5)*0.00390625+t;G(g,bi,y,c,e,bf);G(g,bg,
y,c,bh,bf);G(g,bg,w,c,bh,bf);G(g,bi,w,c,e,bf);bk=bk+1|0;}}}Br(g);ba=ba+1|0;}z=z+1|0;}o=o+1|0;}BU(1.0,1.0,1.0,1.0);Bb(3042);Ba(2884);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function AIi(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.eI;e=new V5;e.yb=b;Rw(d,e);f=a.eI.p-1|0;g=a.eI.p;h=0;a:{while(h<g){d=Z(a.eI,f-h|0);if(!c){if(G3(d,b)<=1024.0)break a;if(!d.fu){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fu)break a;h=h+1|0;}return a.eI.p?0:1;}$p=1;case 1:ADf(d);if(C()){break _;}H5(a.eI,d);d.i1=0;a:{while(true){h=h+1|0;if(h>=g)break;d=Z(a.eI,f-h|0);if
(!c){if(G3(d,b)<=1024.0)break a;if(!d.fu){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fu)break a;}return a.eI.p?0:1;}continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bP.l.bw)return;a:{BA();g=BeJ;Ba(3042);Ba(3008);Df(770,1);BU(1.0,1.0,1.0,(Bq(Long_toNumber(B$())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){if(a.tF<=0.0)break a;Df(774,768);e=a.iD;h=B(179);$p=2;continue _;}if(e!==null){Df(770,771);i=Bq(Long_toNumber(B$())
/100.0)*0.20000000298023224+0.800000011920929;BU(i,i,i,Bq(Long_toNumber(B$())/200.0)*0.20000000298023224+0.5);b=a.iD;e=B(179);$p=1;continue _;}}Bb(3042);Bb(3008);return;case 1:$z=AHs(b,e);if(C()){break _;}j=$z;Cp(3553,j);Bb(3042);Bb(3008);return;case 2:$z=AHs(e,h);if(C()){break _;}k=$z;Cp(3553,k);BU(1.0,1.0,1.0,0.5);B3();e=a.bN;d=c.h9;k=c.h$;j=c.h_;$p=3;case 3:$z=ACt(e,d,k,j);if(C()){break _;}j=$z;if(j<=0)h=null;else{L();h=BeN.data[j];}Bb(3008);OD((-3.0),(-3.0));Ba(32823);Bz(g);l=b.cr;m=b.d-b.cr;n=f;Fa(g, -(l
+m*n), -(b.b7+(b.j-b.b7)*n), -(b.cs+(b.e-b.cs)*n));ADl(g);if(h===null){L();h=BeT;}b=a.D4;d=c.h9;k=c.h$;j=c.h_;o=240+(a.tF*10.0|0)|0;$p=4;case 4:AMv(b,h,d,k,j,o);if(C()){break _;}Br(g);Fa(g,0.0,0.0,0.0);OD(0.0,0.0);Bb(32823);Ba(3008);Gr(1);BD();Bb(3042);Bb(3008);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AGe(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bP.l.bw)return;if(!d&&!c.k4){Ba(3042);Df(770,771);BU(0.0,0.0,0.0,0.4000000059604645);Bb(3553);Gr(0);e=a.bN;d=c.h9;g=c.h$;h=c.h_;$p=1;continue _;}return;case 1:$z=ACt(e,d,g,h);if(C()){break _;}g=$z;if(g<=0){Gr(1);Ba(3553);Bb(3042);return;}i=b.cr;j=b.d-b.cr;k=f;i=i+j*k;j=b.b7+(b.j-b.b7)*k;k=b.cs
+(b.e-b.cs)*k;L();b=BeN.data[g];e=a.bN;d=c.h9;g=c.h$;h=c.h_;$p=2;case 2:$z=b.oR(e,d,g,h);if(C()){break _;}b=$z;b=T8(Dv(b,0.0020000000949949026,0.0020000000949949026,0.0020000000949949026), -i, -j, -k);if(!a.bP.l.bw){BA();c=BeJ;Gh(c,3);Bf(c,b.R,b.M,b.S);Bf(c,b.V,b.M,b.S);Bf(c,b.V,b.M,b.W);Bf(c,b.R,b.M,b.W);Bf(c,b.R,b.M,b.S);Br(c);Gh(c,3);Bf(c,b.R,b.U,b.S);Bf(c,b.V,b.U,b.S);Bf(c,b.V,b.U,b.W);Bf(c,b.R,b.U,b.W);Bf(c,b.R,b.U,b.S);Br(c);Gh(c,1);Bf(c,b.R,b.M,b.S);Bf(c,b.R,b.U,b.S);Bf(c,b.V,b.M,b.S);Bf(c,b.V,b.U,b.S);Bf(c,
b.V,b.M,b.W);Bf(c,b.V,b.U,b.W);Bf(c,b.R,b.M,b.W);Bf(c,b.R,b.U,b.W);Br(c);}Gr(1);Ba(3553);Bb(3042);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Tl(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=GJ(b,16);i=GJ(c,16);j=GJ(d,16);k=GJ(e,16);l=GJ(f,16);m=GJ(g,16);while(h<=k){n=h%a.dr|0;if(n<0)n=n+a.dr|0;o=i;while(o<=l){p=o%a.dE|0;if(p<0)p=p+a.dE|0;q=j;while(q<=m){r=q%a.j6|0;if(r<0)r=r+a.j6|0;s=Bj(Bj(r,a.dE)+p|0,a.dr)+n|0;t=a.c8.data[s];if(!t.i1)S(a.eI,t);KU(t);q=q+1|0;}o=o+1|0;}h=h+1|0;}}
function Rl(a,b,c,d){Tl(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AOE(a,b,c,d,e,f,g){Tl(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function ARH(a,b,c){var d;d=0;while(d<a.c8.data.length){if(!AHv(a.c8.data[d])&&!(a.c8.data[d].fu&&(d+a.q5|0)&15))AR8(a.c8.data[d],b);d=d+1|0;}a.q5=a.q5+1|0;}
function ACZ(a,b,c,d,e,f,g){return;}
function AH3(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;if(a.bP.l.bw)return;i=a.bN.bi.d-c;j=a.bN.bi.j-d;k=a.bN.bi.e-e;if(i*i+j*j+k*k<=256.0){if(b===B(213)){l=a.bP.c5;m=new Sw;FA(m,a.bN,c,d,e,f,g,h);m.hY=1.0;m.ic=1.0;m.io=1.0;m.e5=32;D1(m,0.019999999552965164,0.019999999552965164);m.dq=m.dq*(N(m.n)*0.6000000238418579+0.20000000298023224);m.g=f*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.i=g*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.h=h*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.cw
=8.0/(BP()*0.8+0.2)|0;El(l,m);}else if(b===B(256))El(a.bP.c5,A78(a.bN,c,d,e,1.0));else if(b===B(223)){b=a.bP.c5;l=new QY;FA(l,a.bN,c,d,e,f,g,h);l.g=f+(BP()*2.0-1.0)*0.05000000074505806;l.i=g+(BP()*2.0-1.0)*0.05000000074505806;l.h=h+(BP()*2.0-1.0)*0.05000000074505806;n=N(l.n)*0.30000001192092896+0.699999988079071;l.io=n;l.ic=n;l.hY=n;l.dq=N(l.n)*N(l.n)*6.0+1.0;l.cw=(16.0/(N(l.n)*0.8+0.2)|0)+2|0;El(b,l);}else if(b!==B(257)){if(b===B(254))El(a.bP.c5,BcG(a.bN,c,d,e));else if(b===B(214))El(a.bP.c5,Bct(a.bN,c,d,e,
f,g,h));else if(b===B(255))El(a.bP.c5,A78(a.bN,c,d,e,2.5));}else{b=a.bP.c5;l=new OZ;FA(l,a.bN,c,d,e,f,g,h);l.g=l.g*0.009999999776482582+f;l.i=l.i*0.009999999776482582+g;l.h=l.h*0.009999999776482582+h;N(l.n);N(l.n);N(l.n);N(l.n);N(l.n);N(l.n);l.DL=l.dq;l.io=1.0;l.ic=1.0;l.hY=1.0;l.cw=(8.0/(BP()*0.8+0.2)|0)+4|0;l.o3=1;l.e5=48;El(b,l);}}}
function A$p(a,b){return;}
function ATo(a,b){return;}
function Vy(a){var b;b=0;while(b<a.c8.data.length){if(a.c8.data[b].ol){if(!a.c8.data[b].i1)S(a.eI,a.c8.data[b]);KU(a.c8.data[b]);}b=b+1|0;}}
function AG_(){var a=this;CS.call(a);a.u_=0.0;a.yq=null;a.t2=null;}
function LL(){var a=new AG_();A4n(a);return a;}
function A4n(a){var b,c;DQ(a);a.u_=0.0;b=J(B4,106);c=b.data;c[0]=B(385);c[1]=B(386);c[2]=B(387);c[3]=B(388);c[4]=B(389);c[5]=B(390);c[6]=B(391);c[7]=B(392);c[8]=B(393);c[9]=B(394);c[10]=B(395);c[11]=B(396);c[12]=B(397);c[13]=B(398);c[14]=B(399);c[15]=B(400);c[16]=B(401);c[17]=B(402);c[18]=B(403);c[19]=B(404);c[20]=B(405);c[21]=B(406);c[22]=B(407);c[23]=B(408);c[24]=B(409);c[25]=B(410);c[26]=B(411);c[27]=B(412);c[28]=B(413);c[29]=B(414);c[30]=B(415);c[31]=B(416);c[32]=B(417);c[33]=B(418);c[34]=B(419);c[35]=B(420);c[36]
=B(421);c[37]=B(422);c[38]=B(423);c[39]=B(424);c[40]=B(425);c[41]=B(426);c[42]=B(427);c[43]=B(428);c[44]=B(429);c[45]=B(430);c[46]=B(431);c[47]=B(432);c[48]=B(433);c[49]=B(434);c[50]=B(406);c[51]=B(435);c[52]=B(436);c[53]=B(437);c[54]=B(438);c[55]=B(439);c[56]=B(440);c[57]=B(441);c[58]=B(442);c[59]=B(443);c[60]=B(444);c[61]=B(445);c[62]=B(446);c[63]=B(447);c[64]=B(448);c[65]=B(449);c[66]=B(450);c[67]=B(451);c[68]=B(452);c[69]=B(453);c[70]=B(454);c[71]=B(455);c[72]=B(456);c[73]=B(457);c[74]=B(458);c[75]=B(459);c[76]
=B(460);c[77]=B(461);c[78]=B(462);c[79]=B(463);c[80]=B(464);c[81]=B(465);c[82]=B(466);c[83]=B(467);c[84]=B(468);c[85]=B(469);c[86]=B(470);c[87]=B(471);c[88]=B(472);c[89]=B(473);c[90]=B(474);c[91]=B(475);c[92]=B(476);c[93]=B(477);c[94]=B(478);c[95]=B(479);c[96]=B(480);c[97]=B(481);c[98]=B(482);c[99]=B(483);c[100]=B(484);c[101]=B(485);c[102]=B(486);c[103]=B(487);c[104]=B(488);c[105]=B(489);a.yq=b;a.t2=a.yq.data[BP()*a.yq.data.length|0];}
function A5o(a){a.u_=a.u_+0.009999999776482582;}
function ANJ(a,b,c){return;}
function AIr(a){DF(a.bH);S(a.bH,Dj(1,(a.bm/2|0)-100|0,(a.bE/4|0)+48|0,B(490)));S(a.bH,Dj(2,(a.bm/2|0)-100|0,(a.bE/4|0)+72|0,B(491)));S(a.bH,Dj(3,(a.bm/2|0)-100|0,(a.bE/4|0)+96|0,B(492)));S(a.bH,Dj(0,(a.bm/2|0)-100|0,((a.bE/4|0)+120|0)+12|0,B(493)));Z(a.bH,1).gB=0;Z(a.bH,2).gB=0;if(a.I.kW===null)Z(a.bH,1).gB=0;}
function ACn(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cl){c=a.I;d=AIL(a,a.I.l);$p=1;continue _;}if(b.cl!=1)return;b=a.I;c=A$V(a);$p=2;continue _;case 1:ADS(c,d);if(C()){break _;}if(b.cl!=1)return;b=a.I;c=A$V(a);$p=2;case 2:ADS(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function Zz(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}BA();e=BeJ;f=3553;g=a.I.bo;h=B(494);$p=2;case 2:$z=AHs(g,h);if(C()){break _;}i=$z;Cp(f,i);BU(1.0,1.0,1.0,1.0);ES(e,16777215);CH(a,(a.bm-256|0)/2|0,30,0,0,256,49);B3();Bw((a.bm/2|0)+90|0,70.0,0.0);Bv((-20.0),0.0,0.0,1.0);j=Bq(Long_toNumber(Long_rem(B$(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Dw(a.b0,a.t2)+32|0);CC(k,k,k);DD(a,a.b0,a.t2,0,(-8),16776960);BD();Cy(a.b0,B(495),(a.bm-Dw(a.b0,B(495))|0)-2|0,a.bE-10|0,16777215);l=Ku();m=JW();n=Long_sub(l,Kb());g=new T;W(g);e=U(H(C6(H(C6(H(g,B(496)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(497)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(498)));Cy(a.b0,e,(a.bm-Dw(a.b0,e)|0)-2|0,2,8421504);g=new T;W(g);e=U(H(C6(H(C6(H(g,
B(499)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(500)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Cy(a.b0,e,(a.bm-Dw(a.b0,e)|0)-2|0,12,8421504);$p=3;case 3:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function OV(){var a=this;D.call(a);a.mR=null;a.cD=null;a.jc=null;a.sp=null;}
function El(a,b){var c;c=b.xu();S(a.cD.data[c],b);}
function AAU(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(b<3){c=0;if(c<a.cD.data[b].p){d=Z(a.cD.data[b],c);$p=1;continue _;}b=b+1|0;}return;case 1:d.en();if(C()){break _;}if(!d.cQ)e=c;else{d=a.cD.data[b];e=c+(-1)|0;En(d,c);}c=e+1|0;while(true){if(c<a.cD.data[b].p){d=Z(a.cD.data[b],c);continue _;}b=b+1|0;if(b>=3)break;c=0;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AA_(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=BC(b.v*3.1415927410125732/180.0);e=Bq(b.v*3.1415927410125732/180.0);f= -e*Bq(b.J*3.1415927410125732/180.0);g=d*Bq(b.J*3.1415927410125732/180.0);h=BC(b.J*3.1415927410125732/180.0);i=b.cr;j=b.d-b.cr;k=c;BkK=i+j*k;BkL=b.b7+(b.j-b.b7)*k;BkM=b.cs
+(b.e-b.cs)*k;l=0;while(l<2){if(a.cD.data[l].p){if(!l){b=a.jc;m=B(502);$p=1;continue _;}if(l==1){b=a.jc;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeJ;Bz(m);n=0;if(n<a.cD.data[l].p){o=Z(a.cD.data[l],n);$p=3;continue _;}Br(m);}l=l+1|0;}return;case 1:$z=AHs(b,m);if(C()){break _;}p=$z;a:while(true){if(l==1){b=a.jc;m=B(179);$p=2;continue _;}Cp(3553,p);BA();m=BeJ;Bz(m);n=0;if(n<a.cD.data[l].p){o=Z(a.cD.data[l],n);$p=3;continue _;}Br(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].p)continue;else break;}p
=0;if(!l){b=a.jc;m=B(502);continue _;}}return;case 2:$z=AHs(b,m);if(C()){break _;}p=$z;a:while(true){Cp(3553,p);BA();m=BeJ;Bz(m);n=0;if(n<a.cD.data[l].p){o=Z(a.cD.data[l],n);$p=3;continue _;}Br(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].p)continue;else break;}p=0;if(!l){b=a.jc;m=B(502);$p=1;continue _;}if(l==1){b=a.jc;m=B(179);continue _;}}return;case 3:o.kN(m,c,d,h,e,f,g);if(C()){break _;}n=n+1|0;a:while(true){if(n<a.cD.data[l].p){o=Z(a.cD.data[l],n);continue _;}Br(m);while(true){l=l+1|0;if(l>=
2)break a;if(!a.cD.data[l].p)continue;else break;}if(!l){b=a.jc;m=B(502);$p=1;continue _;}if(l==1){b=a.jc;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeJ;Bz(m);n=0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ABS(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=2;if(a.cD.data[d].p){BA();e=BeJ;f=0;if(f<a.cD.data[d].p){g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;$p=1;continue _;}}return;case 1:g.kN(e,c,h,i,j,k,l);if(C()){break _;}f=f+1|0;if(f>=a.cD.data[d].p)return;g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;continue _;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function OX(a,b){var c;a.mR=b;c=0;while(c<3){DF(a.cD.data[c]);c=c+1|0;}}
function AEB(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.mR;$p=1;case 1:a:{$z=ACt(e,b,c,d);if(C()){break _;}f=$z;if(f){L();e=BeN.data[f];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;El(a,AY1(a.mR,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,e));l
=l+1|0;}k=k+1|0;}g=g+1|0;}}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function YY(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.mR;$p=1;case 1:$z=ACt(f,b,c,d);if(C()){break _;}g=$z;if(g){L();h=BeN.data[g];i=b;j=i+Cl(a.sp)*(h.db-h.c_-0.20000000298023224)+0.10000000149011612+h.c_;k=c;l=k+Cl(a.sp)*(h.cE-h.cL-0.20000000298023224)+0.10000000149011612+h.cL;m=d;n=m+Cl(a.sp)*(h.dc-h.c$-0.20000000298023224)
+0.10000000149011612+h.c$;if(!e)l=k+h.cL-0.10000000149011612;if(e==1)l=k+h.cE+0.10000000149011612;if(e==2)n=m+h.c$-0.10000000149011612;if(e==3)n=m+h.dc+0.10000000149011612;if(e==4)j=i+h.c_-0.10000000149011612;if(e==5)j=i+h.db+0.10000000149011612;El(a,X8(APp(AY1(a.mR,j,l,n,0.0,0.0,0.0,h),0.20000000298023224),0.6000000238418579));}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Xu(a){var b;b=new T;W(b);return U(Be(H(b,B(3)),(a.cD.data[0].p+a.cD.data[1].p|0)+a.cD.data[2].p|0));}
function Nn(){var a=this;Gc.call(a);a.g5=null;a.vp=null;a.b2=null;a.FQ=null;a.rR=0;a.Ei=0.0;a.ID=0.0;}
var BkN=null;function APH(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=FG(a.b2.cc,a.b2.bB);g=AEn(f);h=Zb(f);i=a.b2.e8;LB(a.b2.eT);Ba(3042);BU(1.0,1.0,1.0,1.0);c=3553;f=a.b2.bo;j
=B(503);$p=1;case 1:$z=AHs(f,j);if(C()){break _;}d=$z;Cp(c,d);k=a.b2.f.K;a.mP=(-90.0);l=g/2|0;m=l-91|0;n=h-22|0;CH(a,m,n,0,0,182,22);CH(a,(m-1|0)+(k.bM*20|0)|0,n-1|0,0,22,24,22);c=3553;f=a.b2.bo;j=B(504);$p=2;case 2:$z=AHs(f,j);if(C()){break _;}d=$z;Cp(c,d);Ba(3042);Df(775,769);CH(a,l-7|0,(h/2|0)-7|0,0,0,16,16);Bb(3042);o=((a.b2.f.dx/3|0)%2|0)!=1?0:1;if(a.b2.f.dx<10)o=0;p=a.b2.f.bU;q=a.b2.f.tC;NF(a.vp,Long_fromInt(Bj(a.rR,312871)));if(!AJ2(a.b2.cB)){Bb(3042);Ba(32826);B3();Bv(180.0,1.0,0.0,0.0);Hu();BD();r=
0;c=l-90|0;m=(h-16|0)-3|0;if(r>=9){DS();Bb(32826);if(!a.b2.l.ln)Cy(i,B(505),2,2,16777215);else{Cy(i,BL(H(H(H(BX(),B(506)),a.b2.lx),B(27))),2,2,16777215);Cy(i,Mg(a.b2),2,12,16777215);Cy(i,Oi(a.b2),2,22,16777215);Cy(i,MH(a.b2),2,32,16777215);s=Ku();t=JW();u=Long_sub(t,Kb());j=BL(H(C6(H(C6(H(C6(H(BX(),B(507)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(500)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(508)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(498)));Hq(a,i,j,(g-Dw(i,
j)|0)-2|0,2,14737632);f=BL(H(C6(H(C6(H(BX(),B(499)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(500)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hq(a,i,f,(g-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<De(a.g5)&&m<10){if(Z(a.g5,m).oA<200)Cy(i,Z(a.g5,m).yw,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;}r=ACY(a.b2.f);n=0;v=h-32|0;w=l+91|0;d=R(p,4);while(n<10){if(r>0){x=(w-(n*8|0)|0)-9|0;c=R((n*2|0)+1|0,r);if(c<0)CH(a,x,v,34,9,9,9);if(!c)CH(a,
x,v,25,9,9,9);if(c>0)CH(a,x,v,16,9,9,9);}y=0;if(o)y=1;z=m+(n*8|0)|0;c=d>0?v:v+E(a.vp,2)|0;CH(a,z,c,16+(y*9|0)|0,0,9,9);if(o){e=R((n*2|0)+1|0,q);if(e<0)CH(a,z,c,70,0,9,9);if(!e)CH(a,z,c,79,0,9,9);}e=R((n*2|0)+1|0,p);if(e<0)CH(a,z,c,52,0,9,9);if(!e)CH(a,z,c,61,0,9,9);n=n+1|0;}f=a.b2.f;j=BfO;$p=4;continue _;case 3:AEu(a,r,n,m,b);if(C()){break _;}r=r+1|0;if(r>=9){DS();Bb(32826);if(!a.b2.l.ln)Cy(i,B(505),2,2,16777215);else{Cy(i,BL(H(H(H(BX(),B(506)),a.b2.lx),B(27))),2,2,16777215);Cy(i,Mg(a.b2),2,12,16777215);Cy(i,
Oi(a.b2),2,22,16777215);Cy(i,MH(a.b2),2,32,16777215);s=Ku();t=JW();u=Long_sub(t,Kb());j=BL(H(C6(H(C6(H(C6(H(BX(),B(507)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(500)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(508)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(498)));Hq(a,i,j,(g-Dw(i,j)|0)-2|0,2,14737632);f=BL(H(C6(H(C6(H(BX(),B(499)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(500)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hq(a,i,f,(g
-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<De(a.g5)&&m<10){if(Z(a.g5,m).oA<200)Cy(i,Z(a.g5,m).yw,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;continue _;case 4:a:{$z=AGF(f,j);if(C()){break _;}c=$z;if(c){c=Uo((a.b2.f.gb-2|0)*10.0/300.0)|0;ba=(Uo(a.b2.f.gb*10.0/300.0)|0)-c|0;x=0;d=c+ba|0;p=v-9|0;while(true){if(x>=d)break a;if(x>=c)CH(a,m+(x*8|0)|0,p,25,18,9,9);else CH(a,m+(x*8|0)|0,p,16,18,9,9);x=x+1|0;}}}Bb(3042);Ba(32826);B3();Bv(180.0,1.0,0.0,0.0);Hu();BD();r=0;c=l-90|0;m=(h-
16|0)-3|0;if(r>=9){DS();Bb(32826);if(!a.b2.l.ln)Cy(i,B(505),2,2,16777215);else{Cy(i,BL(H(H(H(BX(),B(506)),a.b2.lx),B(27))),2,2,16777215);Cy(i,Mg(a.b2),2,12,16777215);Cy(i,Oi(a.b2),2,22,16777215);Cy(i,MH(a.b2),2,32,16777215);s=Ku();t=JW();u=Long_sub(t,Kb());j=BL(H(C6(H(C6(H(C6(H(BX(),B(507)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(500)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(508)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(498)));Hq(a,i,j,(g-Dw(i,j)|0)-2|0,2,14737632);f
=BL(H(C6(H(C6(H(BX(),B(499)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(500)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hq(a,i,f,(g-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<De(a.g5)&&m<10){if(Z(a.g5,m).oA<200)Cy(i,Z(a.g5,m).yw,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function AEu(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.b2.f.K.bg.data[b];if(f===null)return;g=f.mG-e;b=R(g,0.0);if(b>0){B3();h=1.0+g/5.0;i=c+8|0;g=i;j=d+12|0;Bw(g,j,0.0);CC(1.0/h,(h+1.0)/2.0,1.0);Bw( -i, -j,0.0);}k=BkN;l=a.b2.e8;m=a.b2.bo;$p=1;case 1:AGf(k,l,m,f,c,d);if(C()){break _;}if(b>0)BD();Lm(BkN,a.b2.e8,a.b2.bo,f,c,d);return;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AKw(a){var b,c;a.rR=a.rR+1|0;b=0;while(b<a.g5.p){c=Z(a.g5,b);c.oA=c.oA+1|0;b=b+1|0;}}
function Z8(){BkN=XY();}
function Jr(){var a=this;EQ.call(a);a.K=null;a.AF=0;a.k0=0;a.qw=0.0;a.kR=0.0;a.CI=null;a.x6=0;}
function AFV(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKR(a);if(C()){break _;}a.qw=a.kR;a.kR=0.0;return;default:E_();}}C3().s(a,$p);}
function AK5(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.c3=1.6200000047683716;D1(a,0.6000000238418579,1.7999999523162842);if(a.m!==null){if(a.j>0.0){CT(a,a.d,a.j,a.e);b=a.m;c=a.L;$p=1;continue _;}a.h=0.0;a.i=0.0;a.g=0.0;a.J=0.0;}if(a.m!==null)a.m.bi=a;a.bU=20;a.c1=0;return;case 1:$z=XQ(b,a,c);if(C()){break _;}b=$z;if(b.p){a.j=a.j+1.0;if(a.j>0.0){CT(a,a.d,a.j,a.e);b=a.m;c=a.L;continue _;}}a.h=0.0;a.i=0.0;a.g=0.0;a.J=0.0;if(a.m!==null)a.m.bi
=a;a.bU=20;a.c1=0;return;default:E_();}}C3().s(a,b,c,$p);}
function Y1(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.m.i0&&a.bU<20&&!((a.oP%20|0)*4|0))UK(a,1);AEg(a.K);a.qw=a.kR;$p=1;case 1:ACm(a);if(C()){break _;}b=Ce(a.g*a.g+a.h*a.h);c=Io( -a.i*0.20000000298023224)*15.0;if(b>0.10000000149011612)b=0.10000000149011612;if(!(a.cx&&a.bU>0))b=0.0;if(!(!a.cx&&a.bU>0))c=0.0;a.kR=a.kR+(b-a.kR)*0.4000000059604645;a.jk=a.jk+(c-a.jk)*0.800000011920929;if(a.bU<=0)return;d
=a.m;e=Dv(a.L,1.0,0.0,1.0);$p=2;case 2:a:{$z=ADI(d,a,e);if(C()){break _;}d=$z;if(d!==null){f=0;while(true){if(f>=d.p)break a;Z(d,f).xD(a);f=f+1|0;}}}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A4v(a){return a.k0;}
function ALb(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(a,0.20000000298023224,0.20000000298023224);CT(a,a.d,a.j,a.e);a.i=0.10000000149011612;if(!DJ(a.CI,B(509))){c=a.K;$p=1;continue _;}c=new Cd;BB();Gm(c,BhM,1);d=1;$p=2;continue _;case 1:AIX(c);if(C()){break _;}if(b===null){a.h=0.0;a.g=0.0;}else{a.g= -BC((a.kD+a.v)*3.1415927410125732/180.0)*0.10000000149011612;a.h= -Bq((a.kD+a.v)*3.1415927410125732/180.0)*0.10000000149011612;}a.c3
=0.10000000149011612;return;case 2:AQs(a,c,d);if(C()){break _;}c=a.K;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,$p);}
function AZr(a,b,c){a.k0=a.k0+c|0;}
function ALP(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;$p=1;case 1:AQs(a,b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AQs(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;d=Hb(a.m,a.d,a.j-0.30000001192092896,a.e,b);d.g$=40;if(c){e=N(a.n)*0.5;f=N(a.n)*3.1415927410125732*2.0;d.g= -Bq(f)*e;d.h=BC(f)*e;d.i=0.20000000298023224;}else{d.g= -Bq(a.v/180.0*3.1415927410125732)*BC(a.J/180.0*3.1415927410125732)*0.30000001192092896;d.h=BC(a.v/180.0*3.1415927410125732)
*BC(a.J/180.0*3.1415927410125732)*0.30000001192092896;d.i= -Bq(a.J/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=N(a.n)*3.1415927410125732*2.0;g=0.019999999552965164*N(a.n);h=d.g;i=e;j=GB(i);k=g;d.g=h+j*k;d.i=d.i+(N(a.n)-N(a.n))*0.10000000149011612;d.h=d.h+Go(i)*k;}b=a.m;$p=1;case 1:AOf(b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AKQ(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ADu(a.K,b);b=BfO;$p=1;case 1:$z=AGF(a,b);if(C()){break _;}d=$z;if(d)c=c/5.0;if(!a.cx)c=c/5.0;return c;default:E_();}}C3().s(a,b,c,d,$p);}
function M4(a,b){return ADT(a.K,b);}
function A5f(a){return 0.11999999731779099;}
function Ym(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hj=0;if(a.bU<=0)return 0;if(a.dx>a.oY/2.0)return 0;if(!(!(b instanceof DP)&&!(b instanceof Jp))){if(!a.m.i0)c=0;if(a.m.i0==1)c=(c/3|0)+1|0;if(a.m.i0==3)c=(c*3|0)/2|0;}d=Bj(c,25-Tx(a.K)|0)+a.x6|0;ADY(a.K,c);c=d/25|0;a.x6=d%25|0;if(!c)return 0;$p=1;case 1:$z=ABZ(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,$p);}
function AGA(){var a=this;Jr.call(a);a.hW=null;a.k1=null;}
function A6G(a,b,c){var d=new AGA();AYV(d,a,b,c);return d;}
function AYV(a,b,c,d){var e;Fz(a,c);a.oY=20;a.dF=0.0;a.e7=0.0;a.G2=1;a.yo=B(373);a.G1=1;a.D0=0.0;a.EX=null;a.Jr=1.0;a.uW=0;a.Js=0.0;a.bU=10;a.kD=0.0;a.c1=0;a.dy=0;a.Ch=0;a.Fc=(-1);a.Jx=BP()*0.8999999761581421+0.10000000149011612;a.hj=0;a.hF=0;a.zO=0.0;a.sW=0.699999988079071;a.mz=1;a.Il=(BP()+1.0)*0.009999999776482582;CT(a,a.d,a.j,a.e);a.JE=BP()*12398.0;a.v=BP()*3.1415927410125732*2.0;a.G0=1.0;a.rn=0.5;e=new Vx;e.bg=J(Cd,36);e.cd=J(Cd,4);e.bM=0;e.nz=a;a.K=e;a.AF=0;a.k0=0;a.x6=0;Ks(a,c.fi+0.5,c.pW,c.fh+0.5,0.0,
0.0);a.c3=1.6200000047683716;a.bU=20;a.EX=B(510);a.D0=180.0;a.nF=20;a.yo=B(373);a.k1=b;if(c.bi!==null)Ca(c.bi);c.bi=a;if(d!==null&&d.oi!==null&&Bh(d.oi)>0){b=new T;W(b);a.tG=U(H(H(H(b,B(511)),d.oi),B(512)));}a.CI=d.oi;}
function AAM(a){a.iJ=a.hW.kA;a.gC=a.hW.kp;a.hF=a.hW.uj;}
function ALk(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOz(a.hW,a);$p=1;case 1:Y1(a);if(C()){break _;}return;default:E_();}}C3().s(a,$p);}
function ARF(a){AOX(a.hW);}
function Et(a,b,c){APq(a.hW,b,c);}
function ABL(a,b){Fq(b,B(513),a.bU<<16>>16);Fq(b,B(514),a.dD<<16>>16);Fq(b,B(515),a.c1<<16>>16);Fq(b,B(516),a.dy<<16>>16);Gv(b,B(517),a.k0);HC(b,B(325),AL3(a.K,L8()));}
function AOU(a,b){var c;a.bU=FH(b,B(513));if(!YW(b,B(513)))a.bU=10;a.dD=FH(b,B(514));a.c1=FH(b,B(515));a.dy=FH(b,B(516));a.k0=FS(b,B(517));c=Kg(b,B(325));ARl(a.K,c);}
function YX(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k1;d=Bb0(a.K,b);$p=1;case 1:ADS(c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AI8(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k1;d=new SH;DQ(d);d.z$=B(518);d.f4=0;d.fS=b;$p=1;case 1:ADS(c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ANo(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k1;c=new Xg;d=a.K;H$(c);c.mm=A0A(c,3,3);c.um=A5g();S(c.c6,A3p(c,c.mm,c.um,0,124,35));e=0;while(e<3){f=0;while(f<3){S(c.c6,D6(c,c.mm,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){S(c.c6,D6(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){S(c.c6,D6(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:ADS(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AO1(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k1;d=new Wg;e=a.K;H$(d);d.sF=b;S(d.c6,D6(d,b,0,56,17));S(d.c6,D6(d,b,1,56,53));S(d.c6,D6(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){S(d.c6,D6(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){S(d.c6,D6(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:ADS(c,d);if(C()){break _;}return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function Kp(a){return D9(a.K);}
function Jw(a){AFB(a.K,a.K.bM,null);}
function ADt(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ARR(a.K,b);if(c<=0)return;$p=1;case 1:b.fq(a,c);if(C()){break _;}d=Kp(a);if(d!==null&&b instanceof EQ){AEY(d,b);if(d.q<=0)Jw(a);}return;default:E_();}}C3().s(a,b,c,d,$p);}
function RS(a,b){var c,d;c=a.k1.c5;d=new UY;FA(d,a.k1.A,b.d,b.j,b.e,b.g,b.i,b.h);d.p6=0;d.q_=0;d.mv=b;d.hP=a;d.q_=3;d.AP=(-0.5);El(c,d);}
function ACY(a){return Tx(a.K);}
function Vk(a,b){var c;if(!b.uF(a)){c=Kp(a);if(c!==null&&b instanceof EQ){AEy(c,b);if(c.q<=0)Jw(a);}}}
function AJE(){D.call(this);}
function BkO(){var a=new AJE();AV_(a);return a;}
function AV_(a){return;}
function AME(b){Bd();Bef=b;if(b){BdW=0.0;BdX=0.0;setTimeout(Cu(new Qv,"onTimer"),200);}else{Bed=B$();if(Bee)clearTimeout(Bee);Bee=0;BdB.exitPointerLock();}}
function Fx(){var b,c;a:{Bd();Bd_=null;if(!PS(BdS)){b=Te(BdS,0);Bd_=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function Cx(){Bd();return Bd_===null?0:DJ($rt_str(Bd_.type),B(519));}
function ARU(){Bd();return Bd_===null?(-1):Bd_.clientX;}
function XO(){Bd();return Bd_===null?(-1):BdD.clientHeight-Bd_.clientY|0;}
function CV(){var b;Bd();if(Bd_===null)b=(-1);else{b=Bd_.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function B9(b){Bd();return Beb.data[b];}
function G1(){Bd();return !DJ(B(520),$rt_str(Bd_.type))?0:Bd_.deltaY===0.0?0:Bd_.deltaY<=0.0?1:(-1);}
function Qj(){D.call(this);}
var BkP=null;function BkQ(){var a=new Qj();ANK(a);return a;}
function ANK(a){return;}
function Bq(b){return BkP.data[(b*651.8986206054688|0)&4095];}
function BC(b){return BkP.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function D_(b){return Ed(b);}
function Ce(b){return Ed(b);}
function K3(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function K(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function GJ(b,c){return b>=0?b/c|0: -(( -b-1|0)/c|0)-1|0;}
function AL2(){var b,c,d,e;BkP=$rt_createFloatArray(4096);b=0;while(b<4096){BkP.data[b]=Go((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=BkP.data;e=c;d[(e*11.377778053283691|0)&4095]=Go(e*0.01745329238474369);c=c+90|0;}}
function Vj(){var a=this;D.call(a);a.Eu=null;a.bJ=0;}
function E8(a,b){var c=new Vj();A1S(c,a,b);return c;}
function A1S(a,b,c){a.Eu=b;a.bJ=c;}
function FB(){}
function Vx(){var a=this;D.call(a);a.bg=null;a.cd=null;a.bM=0;a.nz=null;}
function D9(a){return a.bg.data[a.bM];}
function SV(a,b){var c;c=0;while(true){if(c>=a.bg.data.length)return (-1);if(a.bg.data[c]!==null&&a.bg.data[c].bC==b)break;c=c+1|0;}return c;}
function RC(a){var b;b=0;while(true){if(b>=a.bg.data.length)return (-1);if(a.bg.data[b]===null)break;b=b+1|0;}return b;}
function ARg(a,b,c){var d;d=SV(a,b);if(d>=0&&d<9)a.bM=d;}
function F2(a,b){if(b>0)b=1;if(b<0)b=(-1);a.bM=a.bM-b|0;while(a.bM<0){a.bM=a.bM+9|0;}while(a.bM>=9){a.bM=a.bM-9|0;}}
function AEg(a){var b,c;b=0;while(b<a.bg.data.length){if(a.bg.data[b]!==null&&a.bg.data[b].mG>0){c=a.bg.data[b];c.mG=c.mG-1|0;}b=b+1|0;}}
function AGN(a,b){var c,d;c=SV(a,b);if(c<0)return 0;d=a.bg.data[c];b=d.q-1|0;d.q=b;if(b<=0)a.bg.data[c]=null;return 1;}
function U6(a,b){var c,d,e,f;if(!b.el){c=b.bC;d=b.q;e=0;a:{while(true){if(e>=a.bg.data.length){e=(-1);break a;}if(a.bg.data[e]!==null&&a.bg.data[e].bC==c&&a.bg.data[e].q<EB(a.bg.data[e])&&a.bg.data[e].q<64)break;e=e+1|0;}}if(e<0)e=RC(a);if(e>=0){if(a.bg.data[e]===null)a.bg.data[e]=Ky(c,0);c=d<=(EB(a.bg.data[e])-a.bg.data[e].q|0)?d:EB(a.bg.data[e])-a.bg.data[e].q|0;if(c>(64-a.bg.data[e].q|0))c=64-a.bg.data[e].q|0;if(c){d=d-c|0;f=a.bg.data[e];f.q=f.q+c|0;a.bg.data[e].mG=5;}}b.q=d;if(!b.q)return 1;}c=RC(a);if(c
<0)return 0;a.bg.data[c]=b;a.bg.data[c].mG=5;return 1;}
function Em(a,b,c){var d,e,f;d=a.bg;if(b>=a.bg.data.length){d=a.cd;b=b-a.bg.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].q<=c){e=d[b];d[b]=null;return e;}f=EF(d[b],c);if(!d[b].q)d[b]=null;return f;}
function AFB(a,b,c){var d;d=a.bg;if(b>=a.bg.data.length){d=a.cd;b=b-a.bg.data.length|0;}d.data[b]=c;}
function ADu(a,b){var c;c=1.0;if(a.bg.data[a.bM]!==null)c=c*AFg(a.bg.data[a.bM],b);return c;}
function AL3(a,b){var c,d,e;c=0;while(c<a.bg.data.length){if(a.bg.data[c]!==null){d=G8();JH(d,B(521),c<<24>>24);QJ(a.bg.data[c],d);Jn(b,d);}c=c+1|0;}e=0;while(e<a.cd.data.length){if(a.cd.data[e]!==null){d=G8();JH(d,B(521),(e+100|0)<<24>>24);QJ(a.cd.data[e],d);Jn(b,d);}e=e+1|0;}return b;}
function ARl(a,b){var c,d,e;a.bg=J(Cd,36);a.cd=J(Cd,4);c=0;while(c<AOs(b)){d=Fd(b,c);e=LA(d,B(521))&255;if(e>=0&&e<a.bg.data.length)a.bg.data[e]=A$8(d);if(e>=100&&e<(a.cd.data.length+100|0))a.cd.data[e-100|0]=A$8(d);c=c+1|0;}}
function Yn(a){return a.bg.data.length+4|0;}
function RK(a,b){var c;c=a.bg;if(b>=a.bg.data.length){c=a.cd;b=b-a.bg.data.length|0;}return c.data[b];}
function ATp(a){return B(325);}
function AZo(a){return 64;}
function ARR(a,b){var c;c=RK(a,a.bM);return c===null?1:AAi(c,b);}
function ADT(a,b){var c;if(b.b$!==Bg9&&b.b$!==Bhm)return 1;c=RK(a,a.bM);return c===null?0:AN8(c,b);}
function AIh(a,b){return a.cd.data[b];}
function Tx(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.cd.data.length){if(a.cd.data[e]!==null&&DK(a.cd.data[e]) instanceof F0){f=Kk(a.cd.data[e]);c=c+(f-a.cd.data[e].el|0)|0;d=d+f|0;b=b+DK(a.cd.data[e]).y9|0;}e=e+1|0;}if(!d)return 0;return (Bj(b-1|0,c)/d|0)+1|0;}
function ADY(a,b){var c;c=0;while(c<a.cd.data.length){if(a.cd.data[c]!==null&&DK(a.cd.data[c]) instanceof F0){FI(a.cd.data[c],b);if(!a.cd.data[c].q)a.cd.data[c]=null;}c=c+1|0;}}
function AIX(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(true){if(b>=a.bg.data.length){b=0;while(b<a.cd.data.length){if(a.cd.data[b]!==null){c=a.nz;d=a.cd.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bg.data[b]!==null)break;b=b+1|0;}c=a.nz;d=a.bg.data[b];e=1;$p=1;case 1:AQs(c,d,e);if(C()){break _;}a.bg.data[b]=null;while(true){b=b+1|0;if(b>=a.bg.data.length){b=0;while(b<a.cd.data.length){if(a.cd.data[b]
!==null){c=a.nz;d=a.cd.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bg.data[b]===null)continue;else break;}c=a.nz;d=a.bg.data[b];e=1;continue _;case 2:AQs(c,d,e);if(C()){break _;}a.cd.data[b]=null;while(true){b=b+1|0;if(b>=a.cd.data.length)break;if(a.cd.data[b]===null)continue;else{c=a.nz;d=a.cd.data[b];e=1;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AAl(a){return;}
function Du(){IV.call(this);}
function Ew(){var a=this;CS.call(a);a.br=null;a.e9=0;a.fk=0;a.c6=null;}
var BkR=null;function BkS(){var a=new Ew();H$(a);return a;}
function H$(a){DQ(a);a.br=null;a.e9=176;a.fk=166;a.c6=Ci();}
function ACe(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}e=(a.bm-a.e9|0)/2|0;f=(a.bE-a.fk|0)/2|0;$p=2;case 2:a.sZ(d);if(C()){break _;}B3();Bv(180.0,1.0,0.0,0.0);Hu();BD();B3();Bw(e,f,0.0);BU(1.0,1.0,1.0,1.0);Ba(32826);g=0;if(g>=a.c6.p){if(a.br===null){Bb(32826);DS();Bb(2896);Bb(2929);a.lo();Ba(2896);Ba(2929);BD();return;}Bw(0.0,
0.0,32.0);h=BkR;i=a.b0;j=a.I.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c6,g);i=h.e1;l=h.lL;m=h.jK;n=h.jM;i=i.gw(l);if(i===null){l=h.rS();if(l>=0){Bb(2896);i=a.I.bo;j=a.I.bo;k=B(230);$p=5;continue _;}}j=BkR;k=a.b0;o=a.I.bo;$p=4;continue _;case 3:AGf(h,i,j,k,b,c);if(C()){break _;}Lm(BkR,a.b0,a.I.bo,a.br,b,c);Bb(32826);DS();Bb(2896);Bb(2929);a.lo();Ba(2896);Ba(2929);BD();return;case 4:AGf(j,k,o,i,m,n);if(C()){break _;}Lm(BkR,a.b0,a.I.bo,i,m,n);if(M6(h,b,c)){Bb(2896);Bb(2929);l=h.jK;p=h.jM;KK(a,
l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c6.p){if(a.br===null){Bb(32826);DS();Bb(2896);Bb(2929);a.lo();Ba(2896);Ba(2929);BD();return;}Bw(0.0,0.0,32.0);h=BkR;i=a.b0;j=a.I.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c6,g);i=h.e1;l=h.lL;m=h.jK;n=h.jM;i=i.gw(l);if(i===null){l=h.rS();if(l>=0){Bb(2896);i=a.I.bo;j=a.I.bo;k=B(230);$p=5;continue _;}}j=BkR;k=a.b0;o=a.I.bo;continue _;case 5:$z=AHs(j,k);if(C()){break _;}p=$z;Eb(i,p);CH(a,m,n,(l%16|0)*16|0,(l/16|
0)*16|0,16,16);Ba(2896);if(M6(h,b,c)){Bb(2896);Bb(2929);l=h.jK;p=h.jM;KK(a,l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c6.p){if(a.br===null){Bb(32826);DS();Bb(2896);Bb(2929);a.lo();Ba(2896);Ba(2929);BD();return;}Bw(0.0,0.0,32.0);h=BkR;i=a.b0;j=a.I.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c6,g);i=h.e1;l=h.lL;m=h.jK;n=h.jM;i=i.gw(l);if(i===null){l=h.rS();if(l>=0){Bb(2896);i=a.I.bo;j=a.I.bo;k=B(230);continue _;}}j=BkR;k=a.b0;o=a.I.bo;$p=4;continue _;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AQv(a,b,c){var d,e;d=0;while(true){if(d>=a.c6.p)return null;e=Z(a.c6,d);if(M6(e,b,c))break;d=d+1|0;}return e;}
function AN3(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(d&&d!=1)){e=AQv(a,b,c);if(e!==null){$p=1;continue _;}if(a.br!==null){f=(a.bm-a.e9|0)/2|0;g=(a.bE-a.fk|0)/2|0;if(!(b>=f&&c>=g&&b<(f+a.e9|0)&&c<(g+a.e9|0))){h=a.I.f;if(!d){e=a.br;$p=2;continue _;}if(d==1){e=EF(a.br,1);$p=3;continue _;}}}}return;case 1:a:{AKy(e);if(C()){break _;}i=ARt(e);if(!(i===null&&a.br===null)){if
(i!==null&&a.br===null){g=!d?i.q:(i.q+1|0)/2|0;a.br=e.e1.j2(e.lL,g);if(i.q){$p=4;continue _;}h=null;$p=5;continue _;}if(i===null&&a.br!==null&&e.s3(a.br)){g=d?1:a.br.q;if(g>e.e1.f5())g=e.e1.f5();h=EF(a.br,g);$p=7;continue _;}if(i!==null&&a.br!==null){if(!e.s3(a.br)){if(i.bC!=a.br.bC)break a;if(EB(a.br)<=1)break a;g=i.q;if(g<=0)break a;if((g+a.br.q|0)>EB(a.br))break a;h=a.br;h.q=h.q+g|0;EF(i,g);if(i.q){$p=8;continue _;}h=null;$p=9;continue _;}if(i.bC==a.br.bC){if(i.bC==a.br.bC){if(!d){g=a.br.q;if(g>(e.e1.f5()
-i.q|0))g=e.e1.f5()-i.q|0;if(g>(EB(a.br)-i.q|0))g=EB(a.br)-i.q|0;EF(a.br,g);if(!a.br.q)a.br=null;i.q=i.q+g|0;}else if(d==1){g=1;if(g>(e.e1.f5()-i.q|0))g=e.e1.f5()-i.q|0;if(g>(EB(a.br)-i.q|0))g=EB(a.br)-i.q|0;EF(a.br,g);if(!a.br.q)a.br=null;i.q=i.q+g|0;}}}else if(a.br.q<=e.e1.f5()){h=a.br;$p=6;continue _;}}}}return;case 2:ALP(h,e);if(C()){break _;}a.br=null;if(d!=1)return;e=EF(a.br,1);$p=3;case 3:ALP(h,e);if(C()){break _;}if(!a.br.q)a.br=null;return;case 4:e.Ji();if(C()){break _;}return;case 5:ALu(e,h);if(C())
{break _;}$p=4;continue _;case 6:ALu(e,h);if(C()){break _;}a.br=i;return;case 7:ALu(e,h);if(C()){break _;}if(!a.br.q)a.br=null;return;case 8:e.Ji();if(C()){break _;}return;case 9:ALu(e,h);if(C()){break _;}$p=8;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A9H(a,b,c,d){return;}
function AAt(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.I.l.fs.bJ)return;d=a.I;e=null;$p=1;case 1:ADS(d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AAW(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.br===null)return;b=a.I.f;c=a.br;$p=1;case 1:ALP(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function A$1(a){return 0;}
function AJ$(){BkR=XY();}
function APL(){var a=this;Ew.call(a);a.jY=null;a.xz=null;a.Ay=0.0;a.Em=0.0;}
function E7(a){var b=new APL();AZL(b,a);return b;}
function AZL(a,b){var c,d,e,f,g;H$(a);a.jY=A0A(a,2,2);a.xz=A5g();a.pP=1;S(a.c6,A3p(a,a.jY,a.xz,0,144,36));c=0;while(c<2){d=0;while(d<2){S(a.c6,D6(a,a.jY,d+(c*2|0)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.c6;f=new QE;Uw(f,a,b,(Yn(b)-1|0)-d|0,8,8+(d*18|0)|0);f.HR=a;f.wh=d;S(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){S(a.c6,D6(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){S(a.c6,D6(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function ALG(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(C()){break _;}b=0;while(b<a.jY.lT){c=Ge(a.jY,b);if(c!==null){d=a.I.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALP(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=a.jY.lT)break;c=Ge(a.jY,b);if(c===null)continue;else{d=a.I.f;continue _;}}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ATP(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=(-1);if(e<2&&f<2){h=Ge(a.jY,e+(f*2|0)|0);if(h!==null)g=h.bC;}d[e+(f*3|0)|0]=g;f=f+1|0;}e=e+1|0;}Pf(a.xz,0,RG(Wl(),c));}
function AZ3(a){ED(a.b0,B(522),86,16,4210752);}
function ADW(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACe(a,b,c,d);if(C()){break _;}a.Ay=b;a.Em=c;return;default:E_();}}C3().s(a,b,c,d,$p);}
function X5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(523);$p=1;case 1:$z=AHs(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.I.bo,e);f=(a.bm-a.e9|0)/2|0;g=(a.bE-a.fk|0)/2|0;CH(a,f,g,0,0,a.e9,a.fk);Ba(32826);Ba(2903);B3();b=f+51|0;e=g+75|0;Bw(b,e,50.0);CC((-30.0),30.0,30.0);Bv(180.0,
0.0,0.0,1.0);h=a.I.f.dF;i=a.I.f.v;j=a.I.f.J;k=b-a.Ay;l=(e-50|0)-a.Em;Bv(135.0,0.0,1.0,0.0);Hu();Bv((-135.0),0.0,1.0,0.0);m=l/40.0;Bv( -Io(m)*20.0,1.0,0.0,0.0);d=a.I.f;n=k/40.0;d.dF=Io(n)*20.0;a.I.f.v=Io(n)*40.0;a.I.f.J= -Io(m)*20.0;Bw(0.0,a.I.f.c3,0.0);d=Bgm;c=a.I.f;m=0.0;n=0.0;o=0.0;b=0.0;p=1.0;$p=2;case 2:AQB(d,c,m,n,o,b,p);if(C()){break _;}a.I.f.dF=h;a.I.f.v=i;a.I.f.J=j;BD();DS();Bb(32826);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function I2(){var a=this;D.call(a);a.qT=0;a.sv=0;a.vz=0;a.vE=0;a.xy=0;a.DG=0;a.cH=null;a.we=null;a.wf=null;a.wg=null;a.t6=null;a.ue=null;a.vc=null;a.w7=null;a.vA=null;a.uN=null;a.tQ=null;a.ur=null;a.uA=null;a.wo=null;a.t3=null;a.x_=null;a.q7=0;a.pU=0;a.oB=0;a.Go=0;a.G3=0;a.t9=null;a.uK=null;a.xb=0;a.wW=null;a.vx=null;a.v7=null;a.yh=null;a.yn=null;a.x0=null;a.ml=null;a.mD=null;a.vu=0;a.rY=0.0;a.rX=0.0;a.rW=0.0;a.rV=0.0;a.sA=0.0;a.to=0.0;a.rG=0.0;a.sm=0.0;a.qR=0.0;a.qS=0.0;a.te=0.0;a.td=0.0;a.tc=0.0;a.tb=0.0;a.sU
=0.0;a.sS=0.0;a.sT=0.0;}
var BkT=null;var BkU=null;function Bad(a,b,c,d,e,f,g){var h=new I2();AId(h,a,b,c,d,e,f,g);return h;}
function O7(b){var c,d,e,f,g,h,i;c=BkT.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=Bad(b,d,e,f,g,h,i);BkT.data[b]=c;}return c;}
function AId(a,b,c,d,e,f,g,h){var i,j,k;WD(a);a.we=null;a.wf=null;a.wg=null;a.t6=null;a.ue=null;a.vc=null;a.w7=null;a.vA=null;a.uN=null;a.tQ=null;a.ur=null;a.uA=null;a.wo=null;a.t3=null;a.x_=null;a.xb=0;a.wW=$rt_createFloatArray(16);a.vx=$rt_createFloatArray(16);a.v7=$rt_createFloatArray(16);a.yh=Kt(M3());a.yn=Kt(M3());a.x0=Kt(M3());a.ml=A2W();a.mD=A2W();a.vu=0;a.rY=0.0;a.rX=0.0;a.rW=0.0;a.rV=0.0;a.sA=0.0;a.to=0.0;a.rG=0.0;a.sm=0.0;a.qR=0.0;a.qS=0.0;a.te=0.0;a.td=0.0;a.tc=0.0;a.tb=0.0;a.sU=0.0;a.sS=0.0;a.sT
=0.0;a.qT=c;a.sv=d;a.vz=e;a.vE=f;a.xy=g;a.DG=h;if(BkU===null)BkU=AB8(B(524));i=B(3);if(a.qT)i=BL(H(H(BX(),i),B(525)));if(a.sv)i=BL(H(H(BX(),i),B(526)));if(a.vz)i=BL(H(H(BX(),i),B(527)));if(a.vE)i=BL(H(H(BX(),i),B(528)));if(a.xy)i=BL(H(H(BX(),i),B(529)));if(a.DG)i=BL(H(H(BX(),i),B(530)));i=BL(H(H(BX(),i),BkU));j=OA(35633);OW(j,BL(H(H(H(BX(),PC()),B(531)),i)));Wz(j);if(!Va(j)){Cg(C1(),N0(BL(H(H(BX(),B(532)),T5(j))),B(158),B(533)));M(ZY(B(534)));}k=OA(35632);OW(k,BL(H(H(H(BX(),PC()),B(535)),i)));Wz(k);if(!Va(k))
{Cg(C1(),N0(BL(H(H(BX(),B(532)),T5(k))),B(158),B(536)));M(ZY(B(534)));}a.cH=AH1();R8(a.cH,j);R8(a.cH,k);b=1;a.q7=0;LU(a.cH,a.q7,B(537));if(!a.sv)a.pU=(-1);else{a.pU=b;LU(a.cH,a.pU,B(538));b=2;}if(!a.qT)a.oB=(-1);else{c=b+1|0;a.oB=b;LU(a.cH,a.oB,B(539));b=c;}a.Go=(-1);a.G3=b;AAC(a.cH);UF(a.cH,j);UF(a.cH,k);Ta(j);Ta(k);if(!AGm(a.cH)){Cg(C1(),N0(BL(H(H(BX(),B(532)),AHt(a.cH))),B(158),B(540)));M(ZY(B(534)));}VU(a.cH);a.we=Dq(a.cH,B(541));a.wf=Dq(a.cH,B(542));a.wg=Dq(a.cH,B(543));a.tQ=Dq(a.cH,B(544));if(a.vz){a.ur
=Dq(a.cH,B(545));a.t3=Dq(a.cH,B(546));a.x_=Dq(a.cH,B(547));}if(a.vE){a.t6=Dq(a.cH,B(548));a.ue=Dq(a.cH,B(549));a.vc=Dq(a.cH,B(550));a.w7=Dq(a.cH,B(551));a.vA=Dq(a.cH,B(552));a.uN=Dq(a.cH,B(553));}if(a.xy)a.uA=Dq(a.cH,B(554));Q6(Dq(a.cH,B(555)),0);a.wo=Dq(a.cH,B(556));a.t9=O6();a.uK=L6();RM(a.t9);Hd(34962,a.uK);Rv(a);}
function Rv(a){N2(a.q7);N4(a.q7,3,5126,0,28,0);if(a.sv){N2(a.pU);N4(a.pU,2,5126,0,28,12);}if(a.qT){N2(a.oB);N4(a.oB,4,5121,1,28,20);}}
function AQW(a){VU(a.cH);}
function AT$(a){return;}
function AMp(a,b){if(!Ls(b,a.yh)){NQ(GP(a.yh,b),a.wW);Mf(a.we,a.wW);}}
function AMZ(a,b){if(!Ls(b,a.yn)){NQ(GP(a.yn,b),a.vx);Mf(a.wf,a.vx);}}
function ZT(a,b){if(!Ls(b,a.x0)){NQ(GP(a.x0,b),a.v7);Mf(a.wg,a.v7);}}
function AM_(a,b,c){if(!(S4(b,a.ml)&&S4(c,a.mD))){VA(a.ml,b);VA(a.mD,c);Ln(a.t3,a.ml.k$,a.ml.k_,a.ml.k9);Ln(a.x_,a.mD.k$,a.mD.k_,a.mD.k9);}}
function ALm(a,b){if(a.vu!=b){a.vu=b;Q6(a.ue,b%2|0);Ib(a.uN,b/2|0);}}
function AP9(a,b,c,d,e){if(!(a.rY===b&&a.rX===c&&a.rW===d&&a.rV===e)){a.rY=b;a.rX=c;a.rW=d;a.rV=e;Ud(a.t6,a.rY,a.rX,a.rW,a.rV);}}
function API(a,b,c){if(!(a.sA===b&&a.to===c)){a.sA=b;a.to=c;Ib(a.vc,a.sA);Ib(a.w7,a.to);}}
function AKJ(a,b){if(a.rG!==b){a.rG=b;Ib(a.vA,a.rG);}}
function AIS(a,b){if(a.sm!==b){a.sm=b;Ib(a.uA,a.sm);}}
function AOH(a,b,c){var d,e;if(!(a.qR===b&&a.qS===c)){a.qR=b;a.qS=c;d=a.wo;b=a.qR;c=a.qS;Bd();if(d!==null){e=BdG;d=d.kv;e.uniform2f(d,b,c);}}}
function ALJ(a,b,c,d,e){if(!(a.te===b&&a.td===c&&a.tc===d&&a.tb===e)){a.te=b;a.td=c;a.tc=d;a.tb=e;Ud(a.tQ,a.te,a.td,a.tc,a.tb);}}
function AB4(a,b,c,d){if(!(a.sU===b&&a.sS===c&&a.sT===d)){a.sU=b;a.sS=c;a.sT=d;Ln(a.ur,a.sU,a.sS,a.sT);}}
function AOO(){BkT=J(I2,128);BkU=null;}
function Rn(){var a=this;D.call(a);a.Bs=0;a.rf=null;a.oZ=null;a.lJ=0;a.jH=0;}
function Tb(){var a=this;D.call(a);a.tX=null;a.xp=0;a.Dm=0;a.Fb=0;}
function AHn(){var a=this;D.call(a);a.k4=0;a.h9=0;a.h$=0;a.h_=0;a.hI=0;a.gx=null;a.ny=null;}
function A0z(a,b,c,d,e){var f=new AHn();A56(f,a,b,c,d,e);return f;}
function A0_(a){var b=new AHn();A9z(b,a);return b;}
function A56(a,b,c,d,e,f){a.k4=0;a.h9=b;a.h$=c;a.h_=d;a.hI=e;a.gx=BY(f.x,f.z,f.w);}
function A9z(a,b){a.k4=1;a.ny=b;a.gx=BY(b.d,b.j,b.e);}
function Cd(){var a=this;D.call(a);a.q=0;a.mG=0;a.bC=0;a.el=0;}
function ALZ(a){var b=new Cd();AHZ(b,a);return b;}
function G0(a,b){var c=new Cd();U2(c,a,b);return c;}
function Qf(a){var b=new Cd();DA(b,a);return b;}
function EL(a,b){var c=new Cd();Gm(c,a,b);return c;}
function Ky(a,b){var c=new Cd();MJ(c,a,b);return c;}
function Ol(a,b,c){var d=new Cd();A0D(d,a,b,c);return d;}
function A$8(a){var b=new Cd();A1s(b,a);return b;}
function AHZ(a,b){U2(a,b,1);}
function U2(a,b,c){MJ(a,b.b,c);}
function DA(a,b){Gm(a,b,1);}
function Gm(a,b,c){MJ(a,b.cV,c);}
function MJ(a,b,c){a.q=0;a.bC=b;a.q=c;}
function A0D(a,b,c,d){a.q=0;a.bC=b;a.q=c;a.el=d;}
function A1s(a,b){a.q=0;AD7(a,b);}
function EF(a,b){a.q=a.q-b|0;return Ol(a.bC,b,a.el);}
function DK(a){BB();return Bhc.data[a.bC];}
function DI(a){return DK(a).s_;}
function AJe(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=DK(a);$p=1;case 1:$z=h.iK(a,b,c,d,e,f,g);if(C()){break _;}d=$z;return d;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFg(a,b){return DK(a).x1(a,b);}
function ABc(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=DK(a);$p=1;case 1:$z=d.n6(a,b,c);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,$p);}
function QJ(a,b){Fq(b,B(557),a.bC<<16>>16);JH(b,B(558),a.q<<24>>24);Fq(b,B(559),a.el<<16>>16);return b;}
function AD7(a,b){a.bC=FH(b,B(557));a.q=LA(b,B(558));a.el=FH(b,B(559));}
function EB(a){return DK(a).eX;}
function Kk(a){BB();return Bhc.data[a.bC].fe;}
function FI(a,b){a.el=a.el+b|0;if(a.el>Kk(a)){a.q=a.q-1|0;if(a.q<0)a.q=0;a.el=0;}}
function AEY(a,b){BB();Bhc.data[a.bC].sb(a,b);}
function QC(a,b,c,d,e){BB();Bhc.data[a.bC].xV(a,b,c,d,e);}
function AAi(a,b){BB();return Bhc.data[a.bC].nX(b);}
function AN8(a,b){BB();return Bhc.data[a.bC].o6(b);}
function A08(a,b){return;}
function AEy(a,b){BB();Bhc.data[a.bC].yD(a,b);}
function ZH(){var a=this;D.call(a);a.h3=null;a.lT=0;a.sg=null;}
function A0A(a,b,c){var d=new ZH();AWr(d,a,b,c);return d;}
function AWr(a,b,c,d){a.lT=Bj(c,d);a.h3=J(Cd,a.lT);a.sg=b;}
function A3n(a){return a.lT;}
function Ge(a,b){return a.h3.data[b];}
function AEV(a,b,c){var d,e;if(a.h3.data[b]===null)return null;if(a.h3.data[b].q<=c){d=a.h3.data[b];a.h3.data[b]=null;a.sg.tl(a);return d;}e=EF(a.h3.data[b],c);if(!a.h3.data[b].q)a.h3.data[b]=null;a.sg.tl(a);return e;}
function A3A(a,b,c){a.h3.data[b]=c;a.sg.tl(a);}
function A8Y(a){return 64;}
function ADN(a){return;}
function AAB(){D.call(this);this.m5=null;}
function A5g(){var a=new AAB();ASP(a);return a;}
function ASP(a){a.m5=J(Cd,1);}
function A44(a,b){return a.m5.data[b];}
function AWz(a,b,c){var d;if(a.m5.data[b]===null)return null;d=a.m5.data[b];a.m5.data[b]=null;return d;}
function Pf(a,b,c){a.m5.data[b]=c;}
function AYS(a){return 64;}
function ANg(a){return;}
function HH(){var a=this;D.call(a);a.lL=0;a.jK=0;a.jM=0;a.e1=null;a.pZ=null;}
function D6(a,b,c,d,e){var f=new HH();Uw(f,a,b,c,d,e);return f;}
function Uw(a,b,c,d,e,f){a.pZ=b;a.e1=c;a.lL=d;a.jK=e;a.jM=f;}
function M6(a,b,c){var d,e;d=(a.pZ.bm-a.pZ.e9|0)/2|0;e=(a.pZ.bE-a.pZ.fk|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.jK-1|0)&&d<((a.jK+16|0)+1|0)&&c>=(a.jM-1|0)&&c<((a.jM+16|0)+1|0)?1:0;}
function AK8(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKy(a);if(C()){break _;}return;default:E_();}}C3().s(a,$p);}
function AXd(a,b){return 1;}
function ARt(a){return a.e1.gw(a.lL);}
function ALu(a,b){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e1.jz(a.lL,b);$p=1;case 1:AKy(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function A9Q(a){return (-1);}
function AKy(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.e1;$p=1;case 1:b.kf();if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function ADc(){HH.call(this);this.qK=null;}
function A3p(a,b,c,d,e,f){var g=new ADc();A4R(g,a,b,c,d,e,f);return g;}
function A4R(a,b,c,d,e,f,g){Uw(a,b,d,e,f,g);a.qK=c;}
function A0i(a,b){return 0;}
function AN6(a){var b;b=0;while(b<a.qK.lT){if(Ge(a.qK,b)!==null)AEV(a.qK,b,1);b=b+1|0;}}
function QE(){var a=this;HH.call(a);a.wh=0;a.HR=null;}
function A2Q(a,b){return !(DK(b) instanceof F0)?0:DK(b).zS!=a.wh?0:1;}
function AWt(a){return 15+(a.wh*16|0)|0;}
function V7(){D.call(this);this.DU=null;}
function Su(){var a=this;D.call(a);a.AX=null;a.vM=0;}
function M0(){Fk.call(this);}
function ALO(b){var c,d;c=b.data.length;d=new UO;T9(d,c,0,0+c|0);d.xS=0;d.Bp=0;d.wN=b;return d;}
function AFd(a){EA(a);return a;}
function A2A(a){Gs(a);return a;}
function Dg(){var a=this;D.call(a);a.iA=null;a.Hv=null;a.HZ=null;a.l8=0.0;a.BV=0.0;}
function BkV(){var a=new Dg();EH(a);return a;}
function EH(a){a.Hv=A$W();a.HZ=Kh();a.l8=0.0;a.BV=1.0;}
function AKq(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.iA.tW;$p=1;case 1:$z=AHs(c,b);if(C()){break _;}d=$z;Eb(c,d);return;default:E_();}}C3().s(a,b,c,d,$p);}
function APn(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iA.tW;$p=1;case 1:$z=AD1(d,b,c);if(C()){break _;}e=$z;Eb(d,e);return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AGZ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bb(2896);L();g=Bgn.bb;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;B3();Bw(c,d,e);n=b.c0*1.399999976158142;CC(n,n,n);o=B(179);$p
=1;case 1:AKq(a,o);if(C()){break _;}BA();o=BeJ;p=1.0;q=0.0;r=b.eM/b.c0;Bv( -a.iA.rm,0.0,1.0,0.0);Bw(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BU(1.0,1.0,1.0,1.0);Bz(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;G(o,c,d,0.0,e,s);G(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;G(o,(-0.5),d,0.0,t,u);G(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Bw(0.0,0.0,(-0.03999999910593033));}Br(o);BD();Ba(2896);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function A8o(b,c,d,e){var f;Bb(3553);BA();f=BeJ;BU(1.0,1.0,1.0,1.0);Bz(f);Fa(f,c,d,e);Cj(0.0,0.0,(-1.0));Bf(f,b.R,b.U,b.S);Bf(f,b.V,b.U,b.S);Bf(f,b.V,b.M,b.S);Bf(f,b.R,b.M,b.S);Cj(0.0,0.0,1.0);Bf(f,b.R,b.M,b.W);Bf(f,b.V,b.M,b.W);Bf(f,b.V,b.U,b.W);Bf(f,b.R,b.U,b.W);Cj(0.0,(-1.0),0.0);Bf(f,b.R,b.M,b.S);Bf(f,b.V,b.M,b.S);Bf(f,b.V,b.M,b.W);Bf(f,b.R,b.M,b.W);Cj(0.0,1.0,0.0);Bf(f,b.R,b.U,b.W);Bf(f,b.V,b.U,b.W);Bf(f,b.V,b.U,b.S);Bf(f,b.R,b.U,b.S);Cj((-1.0),0.0,0.0);Bf(f,b.R,b.M,b.W);Bf(f,b.R,b.U,b.W);Bf(f,b.R,b.U,
b.S);Bf(f,b.R,b.M,b.S);Cj(1.0,0.0,0.0);Bf(f,b.V,b.M,b.S);Bf(f,b.V,b.U,b.S);Bf(f,b.V,b.U,b.W);Bf(f,b.V,b.M,b.W);Fa(f,0.0,0.0,0.0);Br(f);Ba(3553);}
function AUD(a,b){a.iA=b;}
function ANh(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJS(a.iA,b.d,b.j,b.e);if(b.cU<=0)return;$p=1;case 1:AGZ(a,b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AIF(){var a=this;Dg.call(a);a.wE=null;a.id=null;}
function XY(){var a=new AIF();A5v(a);return a;}
function A5v(a){EH(a);a.wE=Kh();a.id=new Dz;a.l8=0.15000000596046448;a.BV=0.75;}
function APD(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b.nd;B3();i=Bq((b.mH+g)/10.0+b.yr)*0.10000000149011612+0.10000000149011612;j=((b.mH+g)/20.0+b.yr)*57.2957763671875;k=1;if(b.nd.q>1)k=2;if(b.nd.q>5)k=3;if(b.nd.q>20)k=4;Bw(c,d+
i,e);Ba(32826);if(h.bC<256){L();if(!BeN.data[h.bC].ek()){Bv(j,0.0,1.0,0.0);b=B(179);$p=3;continue _;}}CC(0.5,0.5,0.5);l=DI(h);if(h.bC>=256){b=B(230);$p=1;continue _;}b=B(179);$p=2;continue _;case 1:AKq(a,b);if(C()){break _;}BA();m=BeJ;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iA.rm,0.0,
1.0,0.0);Bz(m);Cj(0.0,1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Br(m);BD();s=s+1|0;}Bb(32826);BD();return;case 2:AKq(a,b);if(C()){break _;}BA();m=BeJ;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iA.rm,0.0,1.0,0.0);Bz(m);Cj(0.0,
1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Br(m);BD();s=s+1|0;}Bb(32826);BD();return;case 3:AKq(a,b);if(C()){break _;}v=0.25;if(!BeN.data[h.bC].gi()&&h.bC!=BeS.b)v=0.5;CC(v,v,v);n=0;while(n<k){B3();if(n>0)Bw((N(a.id)*2.0-1.0)*0.20000000298023224/v,(N(a.id)*2.0-1.0)*0.20000000298023224/v,(N(a.id)*2.0-1.0)*0.20000000298023224/v);GW(a.wE,BeN.data[h.bC]);BD();n=n+1|0;}Bb(32826);BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,$p);}
function AGf(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d!==null){if(d.bC<256){L();if(!BeN.data[d.bC].ek()){g=d.bC;b=B(179);$p=1;continue _;}}if(DI(d)>=0){Bb(2896);if(d.bC>=256){b=B(230);$p=2;continue _;}b=B(179);$p=3;continue _;}}return;case 1:$z=AHs(c,b);if(C()){break _;}h=$z;Eb(c,h);i=BeN.data[g];B3();Bw(e-2|0,f+3|0,0.0);CC(10.0,10.0,10.0);Bw(1.0,0.5,8.0);Bv(210.0,1.0,
0.0,0.0);Bv(45.0,0.0,1.0,0.0);BU(1.0,1.0,1.0,1.0);GW(a.wE,i);BD();return;case 2:$z=AHs(c,b);if(C()){break _;}g=$z;Eb(c,g);WW(a,e,f,(DI(d)%16|0)*16|0,(DI(d)/16|0)*16|0,16,16);Ba(2896);return;case 3:$z=AHs(c,b);if(C()){break _;}g=$z;Eb(c,g);WW(a,e,f,(DI(d)%16|0)*16|0,(DI(d)/16|0)*16|0,16,16);Ba(2896);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Lm(a,b,c,d,e,f){var g,h,i,j,k,l;if(d!==null){if(d.q>1){c=new T;W(c);g=U(Be(H(c,B(3)),d.q));Bb(2896);Bb(2929);Cy(b,g,((e+19|0)-2|0)-Dw(b,g)|0,(f+6|0)+3|0,16777215);Ba(2896);Ba(2929);}if(d.el>0){h=13-((d.el*13|0)/Kk(d)|0)|0;i=255-((d.el*255|0)/Kk(d)|0)|0;Bb(2896);Bb(2929);Bb(3553);BA();j=BeJ;k=255-i|0;l=k<<16|i<<8;k=(k/4|0)<<16|16128;e=e+2|0;f=f+13|0;NY(a,j,e,f,13,2,0);NY(a,j,e,f,12,1,k);NY(a,j,e,f,h,1,l);Ba(3553);Ba(2896);Ba(2929);BU(1.0,1.0,1.0,1.0);}}}
function NY(a,b,c,d,e,f,g){var h,i,j;Bz(b);ES(b,g);h=c+0|0;i=d+0|0;Bf(b,h,i,0.0);j=d+f|0;Bf(b,h,j,0.0);h=c+e|0;Bf(b,h,j,0.0);Bf(b,h,i,0.0);Br(b);}
function WW(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;BA();h=BeJ;Bz(h);i=b+0|0;j=c+g|0;k=(d+0|0)*0.00390625;l=(e+g|0)*0.00390625;G(h,i,j,0.0,k,l);m=b+f|0;n=(d+f|0)*0.00390625;G(h,m,j,0.0,n,l);l=c+0|0;j=(e+0|0)*0.00390625;G(h,m,l,0.0,n,j);G(h,i,l,0.0,k,j);Br(h);}
function AC4(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APD(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function O9(){var a=this;D.call(a);a.BK=null;a.Ih=0;a.Ie=0;a.Gg=0;a.G$=0;}
function Qx(){var a=this;D.call(a);a.f2=null;a.x8=null;}
function Zn(a,b){var c,d,e,f,g,h,i,j,k,l;if(Hj()===null)Bd9=BdB.createElement("canvas");if(Hj().width<a.f2.width){b=Hj();c=a.f2.width;b.width=c;}if(Hj().height<a.f2.height){b=Hj();c=a.f2.height;b.height=c;}if(JO()===null)Bd$=Hj().getContext("2d");b=JO();d=a.f2.width;e=a.f2.height;b.clearRect(0.0,0.0,d,e);b=JO();c=a.f2;d=a.f2.width;e=a.f2.height;b.drawImage(c,0.0,0.0,d,e);b=JO();d=a.f2.width;e=a.f2.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=Bj(f.width,f.height);WB($rt_str(a.f2.src));if(c.byteLength<(g*4
|0)){CM(a.x8,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.x8;c=new Tb;k=f.width;l=f.height;if(g==Bj(k,l)){c.xp=k;c.Dm=l;c.Fb=1;c.tX=h;CM(b,c);return;}b=new Cb;Bl(b,B(560));M(b);}
function A7q(a,b){Zn(a,b);}
function Qw(){var a=this;D.call(a);a.Eg=null;a.EY=null;}
function AJD(a,b){WB($rt_str(a.Eg.src));CM(a.EY,null);}
function A7C(a,b){AJD(a,b);}
function It(){M0.call(this);}
function BkW(a,b,c){var d=new It();T9(d,a,b,c);return d;}
function T9(a,b,c,d){KN(a,b);a.bk=c;a.cy=d;}
function AF_(a){var b,c;if(a.bk<a.cy){b=a.bk;a.bk=b+1|0;return a.yp(b);}c=new Gp;O(c);M(c);}
function NI(a,b){var c,d;if(a.mX()){c=new FR;O(c);M(c);}if(a.bk<a.cy){d=a.bk;a.bk=d+1|0;a.u4(d,b);return a;}c=new G$;O(c);M(c);}
function QW(a,b){var c,d;if(b>=0&&b<a.cy)return AOI(a,b);c=new BO;d=new T;W(d);Bl(c,U(H(Be(H(Be(H(d,B(273)),b),B(244)),a.cy),B(27))));M(c);}
function AQZ(a,b,c){var d,e;if(a.mX()){d=new FR;O(d);M(d);}if(b>=0&&b<a.cy){ANG(a,b,c);return a;}e=new BO;d=new T;W(d);Bl(e,U(H(Be(H(Be(H(d,B(273)),b),B(244)),a.cy),B(27))));M(e);}
function AXR(a){return a.mX();}
function UO(){var a=this;It.call(a);a.Bp=0;a.xS=0;a.wN=null;}
function AOI(a,b){return a.wN.data[b+a.xS|0];}
function ANG(a,b,c){a.wN.data[b+a.xS|0]=c;}
function ASN(a){return a.Bp;}
function V0(){D.call(this);this.jn=null;}
function VW(){var a=this;D.call(a);a.iX=null;a.xj=0;}
function Xc(){D.call(this);this.kv=null;}
function Jk(){B6.call(this);}
function BkX(){var a=new Jk();AYc(a);return a;}
function AYc(a){O(a);}
function UC(){var a=this;CS.call(a);a.At=null;a.As=null;a.qs=null;a.Eo=null;}
function ADe(a){DF(a.bH);S(a.bH,Dj(0,(a.bm/2|0)-100|0,(a.bE/4|0)+72|0,B(561)));DF(a.qs);DC(a.qs,AQz(a.b0,a.As));}
function AOB(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cl)return;b=a.I;c=a.Eo;$p=1;case 1:ADS(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AMy(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DD(a,a.b0,a.At,a.bm/2|0,70,16777215);e=90;f=Jg(a.qs);while(KB(f)){g=KS(f);DD(a,a.b0,g,a.bm/2|0,e,16777215);e=e+9|0;}$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function FR(){Jk.call(this);}
function BkY(){var a=new FR();A6L(a);return a;}
function A6L(a){O(a);}
function G$(){B6.call(this);}
function BkZ(){var a=new G$();A5S(a);return a;}
function A5S(a){O(a);}
function Gp(){B6.call(this);}
function Bk0(){var a=new Gp();A1D(a);return a;}
function A1D(a){O(a);}
function Ts(){var a=this;D.call(a);a.yQ=null;a.Dd=null;a.vF=0;a.rI=0;}
function AAv(a){return Fl(a.yQ);}
function N5(a,b){return Ct(a.Dd)<b?0:1;}
function A5N(a,b){a.vF=b;}
function A_O(a,b){a.rI=b;}
function ACj(){var a=this;D.call(a);a.yw=null;a.oA=0;}
function Rt(){CS.call(this);}
function Bk1(){var a=new Rt();A6N(a);return a;}
function A6N(a){DQ(a);}
function Mk(){CS.call(this);}
function Bk2(){var a=new Mk();A92(a);return a;}
function A92(a){DQ(a);}
function AOk(a){DF(a.bH);S(a.bH,Dj(1,(a.bm/2|0)-100|0,(a.bE/4|0)+72|0,B(562)));S(a.bH,Dj(2,(a.bm/2|0)-100|0,(a.bE/4|0)+96|0,B(563)));if(a.I.kW===null)Z(a.bH,1).gB=0;}
function AMi(a,b,c){return;}
function AOu(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cl==1){c=a.I;$p=1;continue _;}if(b.cl!=2)return;b=a.I;c=null;$p=3;continue _;case 1:ASt(c);if(C()){break _;}c=a.I;d=null;$p=2;case 2:ADS(c,d);if(C()){break _;}if(b.cl!=2)return;b=a.I;c=null;$p=3;case 3:ABH(b,c);if(C()){break _;}b=a.I;c=LL();$p=4;case 4:ADS(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function APl(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:KK(a,0,0,a.bm,a.bE,1615855616,(-1602211792));B3();CC(2.0,2.0,2.0);DD(a,a.b0,B(564),(a.bm/2|0)/2|0,30,16777215);BD();e=a.b0;f=new T;W(f);DD(a,e,U(Be(H(f,B(565)),a.I.f.k0)),a.bm/2|0,100,16777215);$p=1;case 1:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A6O(a){return 0;}
function C0(){var a=this;C5.call(a);a.e5=0;a.Bi=0.0;a.Bj=0.0;a.dp=0;a.cw=0;a.dq=0.0;a.m4=0.0;a.hY=0.0;a.ic=0.0;a.io=0.0;}
var BkK=0.0;var BkL=0.0;var BkM=0.0;function Bk3(a,b,c,d,e,f,g){var h=new C0();FA(h,a,b,c,d,e,f,g);return h;}
function FA(a,b,c,d,e,f,g,h){var i,j;Fz(a,b);a.dp=0;a.cw=0;D1(a,0.20000000298023224,0.20000000298023224);a.c3=a.eM/2.0;CT(a,c,d,e);a.io=1.0;a.ic=1.0;a.hY=1.0;a.g=f+(BP()*2.0-1.0)*0.4000000059604645;a.i=g+(BP()*2.0-1.0)*0.4000000059604645;a.h=h+(BP()*2.0-1.0)*0.4000000059604645;i=(BP()+BP()+1.0)*0.15000000596046448;j=Ce(a.g*a.g+a.i*a.i+a.h*a.h);c=a.g;d=j;c=c/d;e=i;a.g=c*e*0.4000000059604645;a.i=a.i/d*e*0.4000000059604645+0.10000000149011612;a.h=a.h/d*e*0.4000000059604645;a.Bi=N(a.n)*3.0;a.Bj=N(a.n)*3.0;a.dq=
(N(a.n)*0.5+0.5)*2.0;a.cw=4.0/(N(a.n)*0.8999999761581421+0.10000000149011612)|0;a.dp=0;a.i7=0;}
function APp(a,b){var c,d;c=a.g;d=b;a.g=c*d;a.i=(a.i-0.10000000149011612)*d+0.10000000149011612;a.h=a.h*d;return a;}
function X8(a,b){var c;c=0.20000000298023224*b;D1(a,c,c);a.dq=a.dq*b;return a;}
function ALl(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=2;continue _;}a.i=a.i-0.04*a.m4;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARC(a,c,d,e);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}a.i=a.i-0.04*a.m4;c=a.g;d=a.i;e=
a.h;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ANr(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.e5%16|0)/16.0;j=i+0.062437500804662704;k=(a.e5/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.dq;n=a.bT;o=a.d-a.bT;p
=c;q=n+o*p-BkK;r=a.cR+(a.j-a.cR)*p-BkL;s=a.bS+(a.e-a.bS)*p-BkM;$p=1;case 1:$z=a.ve(c);if(C()){break _;}t=$z;Cq(b,a.hY*t,a.ic*t,a.io*t);u=d*m;t=q-u;v=g*m;n=t-v;c=e*m;o=r-c;d=f*m;e=s-d;f=h*m;w=e-f;p=i;x=l;G(b,n,o,w,p,x);n=t+v;w=r+c;y=e+f;z=k;G(b,n,w,y,p,z);c=q+u;n=c+v;d=s+d;p=d+f;y=j;G(b,n,w,p,y,z);G(b,c-v,o,d-f,y,x);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function A7Z(a){return 0;}
function AAX(){var a=this;CS.call(a);a.tt=0;a.od=0;}
function Bco(){var a=new AAX();AWa(a);return a;}
function AWa(a){DQ(a);a.tt=0;a.od=0;}
function ARa(a){a.tt=0;DF(a.bH);S(a.bH,Dj(1,(a.bm/2|0)-100|0,(a.bE/4|0)+48|0,B(566)));S(a.bH,Dj(4,(a.bm/2|0)-100|0,(a.bE/4|0)+24|0,B(567)));S(a.bH,Dj(0,(a.bm/2|0)-100|0,(a.bE/4|0)+96|0,B(493)));}
function ADk(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cl){c=a.I;d=AIL(a,a.I.l);$p=1;continue _;}if(b.cl==1){c=a.I;d=null;$p=2;continue _;}if(b.cl!=4)return;b=a.I;c=null;$p=4;continue _;case 1:ADS(c,d);if(C()){break _;}if(b.cl==1){c=a.I;d=null;$p=2;continue _;}if(b.cl!=4)return;b=a.I;c=null;$p=4;continue _;case 2:ABH(c,d);if(C()){break _;}c=a.I;d=LL();$p=3;case 3:ADS(c,d);if(C()){break _;}if(b.cl!=4)return;b=a.I;c=null;$p
=4;case 4:ADS(b,c);if(C()){break _;}b=a.I;$p=5;case 5:AFh(b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function A2d(a){a.od=a.od+1|0;}
function ADJ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}e=a.I.A;f=a.tt;a.tt=f+1|0;$p=2;case 2:$z=AAJ(e,f);if(C()){break _;}f=$z;f=f?0:1;if(!(!f&&a.od>=20)){g=255.0*(Bq(((a.od%10|0)+d)/10.0*3.1415927410125732*2.0)*0.20000000298023224+0.800000011920929)|0;Cy(a.b0,B(568),8,a.bE-16|0,g<<16|g<<8|g);}DD(a,a.b0,B(569),a.bm/2|0,40,16777215);$p=3;case 3:AFC(a,b,c,d);if
(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Lx(){var a=this;D.call(a);a.be=null;a.ba=null;a.Z=null;a.bc=null;}
function Bk4(){var a=new Lx();AHq(a);return a;}
function AHq(a){a.be=$rt_createFloatMultiArray([16,16]);a.ba=$rt_createFloatArray(16);a.Z=$rt_createFloatArray(16);a.bc=$rt_createFloatArray(16);}
function ARL(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.be.data[h].data[0]*b+a.be.data[h].data[1]*c+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*c+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*b+a.be.data[h].data[1]*f+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*f+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*b+a.be.data[h].data[1]*c+a.be.data[h].data[2]*g+a.be.data[h].data[3]
<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*c+a.be.data[h].data[2]*g+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*b+a.be.data[h].data[1]*f+a.be.data[h].data[2]*g+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*f+a.be.data[h].data[2]*g+a.be.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function Wy(){var a=this;Lx.call(a);a.oT=null;a.n1=null;a.zu=null;}
var Bk5=null;function BaP(){var a=new Wy();AFs(a);return a;}
function AFs(a){AHq(a);a.oT=HY(16);a.n1=HY(16);a.zu=HY(16);}
function RP(){AJP(Bk5);return Bk5;}
function GV(a,b,c){var d,e;b=b.data;d=D_(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AJP(a){LR(a.oT);LR(a.n1);LR(a.zu);TL(2983,a.oT);TL(2982,a.n1);P8(TH(a.oT),16);VF(a.oT,a.ba);P8(TH(a.n1),16);VF(a.n1,a.Z);a.bc.data[0]=a.Z.data[0]*a.ba.data[0]+a.Z.data[1]*a.ba.data[4]+a.Z.data[2]*a.ba.data[8]+a.Z.data[3]*a.ba.data[12];a.bc.data[1]=a.Z.data[0]*a.ba.data[1]+a.Z.data[1]*a.ba.data[5]+a.Z.data[2]*a.ba.data[9]+a.Z.data[3]*a.ba.data[13];a.bc.data[2]=a.Z.data[0]*a.ba.data[2]+a.Z.data[1]*a.ba.data[6]+a.Z.data[2]*a.ba.data[10]+a.Z.data[3]*a.ba.data[14];a.bc.data[3]=a.Z.data[0]*a.ba.data[3]+a.Z.data[1]
*a.ba.data[7]+a.Z.data[2]*a.ba.data[11]+a.Z.data[3]*a.ba.data[15];a.bc.data[4]=a.Z.data[4]*a.ba.data[0]+a.Z.data[5]*a.ba.data[4]+a.Z.data[6]*a.ba.data[8]+a.Z.data[7]*a.ba.data[12];a.bc.data[5]=a.Z.data[4]*a.ba.data[1]+a.Z.data[5]*a.ba.data[5]+a.Z.data[6]*a.ba.data[9]+a.Z.data[7]*a.ba.data[13];a.bc.data[6]=a.Z.data[4]*a.ba.data[2]+a.Z.data[5]*a.ba.data[6]+a.Z.data[6]*a.ba.data[10]+a.Z.data[7]*a.ba.data[14];a.bc.data[7]=a.Z.data[4]*a.ba.data[3]+a.Z.data[5]*a.ba.data[7]+a.Z.data[6]*a.ba.data[11]+a.Z.data[7]*a.ba.data[15];a.bc.data[8]
=a.Z.data[8]*a.ba.data[0]+a.Z.data[9]*a.ba.data[4]+a.Z.data[10]*a.ba.data[8]+a.Z.data[11]*a.ba.data[12];a.bc.data[9]=a.Z.data[8]*a.ba.data[1]+a.Z.data[9]*a.ba.data[5]+a.Z.data[10]*a.ba.data[9]+a.Z.data[11]*a.ba.data[13];a.bc.data[10]=a.Z.data[8]*a.ba.data[2]+a.Z.data[9]*a.ba.data[6]+a.Z.data[10]*a.ba.data[10]+a.Z.data[11]*a.ba.data[14];a.bc.data[11]=a.Z.data[8]*a.ba.data[3]+a.Z.data[9]*a.ba.data[7]+a.Z.data[10]*a.ba.data[11]+a.Z.data[11]*a.ba.data[15];a.bc.data[12]=a.Z.data[12]*a.ba.data[0]+a.Z.data[13]*a.ba.data[4]
+a.Z.data[14]*a.ba.data[8]+a.Z.data[15]*a.ba.data[12];a.bc.data[13]=a.Z.data[12]*a.ba.data[1]+a.Z.data[13]*a.ba.data[5]+a.Z.data[14]*a.ba.data[9]+a.Z.data[15]*a.ba.data[13];a.bc.data[14]=a.Z.data[12]*a.ba.data[2]+a.Z.data[13]*a.ba.data[6]+a.Z.data[14]*a.ba.data[10]+a.Z.data[15]*a.ba.data[14];a.bc.data[15]=a.Z.data[12]*a.ba.data[3]+a.Z.data[13]*a.ba.data[7]+a.Z.data[14]*a.ba.data[11]+a.Z.data[15]*a.ba.data[15];a.be.data[0].data[0]=a.bc.data[3]-a.bc.data[0];a.be.data[0].data[1]=a.bc.data[7]-a.bc.data[4];a.be.data[0].data[2]
=a.bc.data[11]-a.bc.data[8];a.be.data[0].data[3]=a.bc.data[15]-a.bc.data[12];GV(a,a.be,0);a.be.data[1].data[0]=a.bc.data[3]+a.bc.data[0];a.be.data[1].data[1]=a.bc.data[7]+a.bc.data[4];a.be.data[1].data[2]=a.bc.data[11]+a.bc.data[8];a.be.data[1].data[3]=a.bc.data[15]+a.bc.data[12];GV(a,a.be,1);a.be.data[2].data[0]=a.bc.data[3]+a.bc.data[1];a.be.data[2].data[1]=a.bc.data[7]+a.bc.data[5];a.be.data[2].data[2]=a.bc.data[11]+a.bc.data[9];a.be.data[2].data[3]=a.bc.data[15]+a.bc.data[13];GV(a,a.be,2);a.be.data[3].data[0]
=a.bc.data[3]-a.bc.data[1];a.be.data[3].data[1]=a.bc.data[7]-a.bc.data[5];a.be.data[3].data[2]=a.bc.data[11]-a.bc.data[9];a.be.data[3].data[3]=a.bc.data[15]-a.bc.data[13];GV(a,a.be,3);a.be.data[4].data[0]=a.bc.data[3]-a.bc.data[2];a.be.data[4].data[1]=a.bc.data[7]-a.bc.data[6];a.be.data[4].data[2]=a.bc.data[11]-a.bc.data[10];a.be.data[4].data[3]=a.bc.data[15]-a.bc.data[14];GV(a,a.be,4);a.be.data[5].data[0]=a.bc.data[3]+a.bc.data[2];a.be.data[5].data[1]=a.bc.data[7]+a.bc.data[6];a.be.data[5].data[2]=a.bc.data[11]
+a.bc.data[10];a.be.data[5].data[3]=a.bc.data[15]+a.bc.data[14];GV(a,a.be,5);}
function AG6(){Bk5=BaP();}
function Q0(){}
function AFR(){var a=this;D.call(a);a.C2=null;a.vw=0.0;a.vZ=0.0;a.wd=0.0;}
function Bbw(){var a=new AFR();A88(a);return a;}
function A88(a){a.C2=RP();}
function AOi(a,b,c,d){a.vw=b;a.vZ=c;a.wd=d;}
function AAe(a,b,c,d,e,f,g){var h,i;h=b-a.vw;i=c-a.vZ;b=d-a.wd;d=e-a.vw;e=f-a.vZ;c=g-a.wd;return ARL(a.C2,h,i,b,d,e,c);}
function ME(a,b){return AAe(a,b.R,b.M,b.S,b.V,b.U,b.W);}
function O0(){D.call(this);}
var Bk6=null;function Bk7(){var a=new O0();ALf(a);return a;}
function ALf(a){return;}
function DS(){Bb(2896);Bb(16384);Bb(16385);Bb(2903);}
function Hu(){var b;Ba(2896);Ba(16384);Ba(16385);Ba(2903);b=CD(BY(0.699999988079071,1.0,(-0.20000000298023224)));RE(b.x,b.z,b.w,0.0);Fp(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fp(0.0,0.0,0.0,1.0);Fp(0.0,0.0,0.0,1.0);b=CD(BY((-0.699999988079071),1.0,0.20000000298023224));RE(b.x,b.z,b.w,0.0);Fp(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fp(0.0,0.0,0.0,1.0);Fp(0.0,0.0,0.0,1.0);Fp(0.4000000059604645,0.4000000059604645,0.4000000059604645,1.0);}
function RE(b,c,d,e){return Fp(b,c,d,e);}
function Fp(b,c,d,e){EA(Bk6);CJ(CJ(CJ(CJ(Bk6,b),c),d),e);Gs(Bk6);return Bk6;}
function ASe(){Bk6=HY(16);}
function Id(){var a=this;D.call(a);a.z0=null;a.go=null;a.nv=null;}
function Bk8(a,b,c){var d=new Id();K5(d,a,b,c);return d;}
function K5(a,b,c,d){a.z0=b;a.go=c;a.nv=d;}
function A6s(a){return a.go.gm()+a.nv.gm()|0;}
function A6f(a){return a.z0;}
function AS6(a,b){return b<a.go.gm()?a.go.gw(b):a.nv.gw(b-a.go.gm()|0);}
function A3f(a,b,c){return b<a.go.gm()?a.go.j2(b,c):a.nv.j2(b-a.go.gm()|0,c);}
function AWP(a,b,c){if(b<a.go.gm())a.go.jz(b,c);else a.nv.jz(b-a.go.gm()|0,c);}
function A98(a){return a.go.f5();}
function Yu(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.go;$p=1;case 1:b.kf();if(C()){break _;}b=a.nv;$p=2;case 2:b.kf();if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function ZD(){C0.call(this);}
function AY1(a,b,c,d,e,f,g,h){var i=new ZD();A1a(i,a,b,c,d,e,f,g,h);return i;}
function A1a(a,b,c,d,e,f,g,h,i){FA(a,b,c,d,e,f,g,h);a.e5=i.bb;a.m4=i.Et;a.io=0.6000000238418579;a.ic=0.6000000238418579;a.hY=0.6000000238418579;a.dq=a.dq/2.0;}
function ATC(a){return 1;}
function YH(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=((a.e5%16|0)+a.Bi/4.0)/16.0;j=i+0.015609375201165676;k=((a.e5/16|0)+a.Bj/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.dq;n
=a.bT;o=a.d-a.bT;p=c;q=n+o*p-BkK;r=a.cR+(a.j-a.cR)*p-BkL;s=a.bS+(a.e-a.bS)*p-BkM;$p=1;case 1:$z=ADF(a,c);if(C()){break _;}t=$z;Cq(b,t*a.hY,t*a.ic,t*a.io);t=d*m;u=q-t;g=g*m;v=u-g;w=e*m;o=r-w;c=f*m;d=s-c;e=h*m;n=d-e;x=i;p=l;G(b,v,o,n,x,p);n=u+g;v=r+w;y=d+e;z=k;G(b,n,v,y,x,z);d=q+t;n=d+g;c=s+c;x=c+e;y=j;G(b,n,v,x,y,z);G(b,d-g,o,c-e,y,p);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function KR(){B6.call(this);}
function Bk9(){var a=new KR();A2l(a);return a;}
function A2l(a){O(a);}
function JL(){C0.call(this);}
function Bk$(a,b,c,d){var e=new JL();TI(e,a,b,c,d);return e;}
function TI(a,b,c,d,e){FA(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.30000001192092896;a.i=BP()*0.20000000298023224+0.10000000149011612;a.h=a.h*0.30000001192092896;a.hY=1.0;a.ic=1.0;a.io=1.0;a.e5=16;D1(a,0.009999999776482582,0.009999999776482582);a.m4=0.05999999865889549;a.cw=8.0/(BP()*0.8+0.2)|0;}
function AKL(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANr(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AOw(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;a.i=a.i-a.m4;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARC(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=a.cw;a.cw=e-1|0;if(e<=0){$p=2;continue _;}if(a.cx){if(BP()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.m;e
=K(a.d);g=K(a.j);h=K(a.e);$p=3;continue _;case 2:Ca(a);if(C()){break _;}if(a.cx){if(BP()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.m;e=K(a.d);g=K(a.j);h=K(a.e);$p=3;case 3:$z=ABX(f,e,g,h);if(C()){break _;}f=$z;if(!f.nA()&&!f.du())return;i=K(a.j)+1|0;f=a.m;e=K(a.d);g=K(a.j);h=K(a.e);$p=4;case 4:$z=AEH(f,e,g,h);if(C()){break _;}e=$z;b=i-Js(e);if(a.j>=b)return;$p=6;continue _;case 5:Ca(a);if(C()){break _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;f=a.m;e=K(a.d);g=
K(a.j);h=K(a.e);$p=3;continue _;case 6:Ca(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function IK(){var a=this;It.call(a);a.eo=null;a.Ad=0;a.ed=0;}
function Bk_(a,b,c,d,e,f){var g=new IK();OH(g,a,b,c,d,e,f);return g;}
function OH(a,b,c,d,e,f,g){T9(a,c,e,f);a.ed=b;a.eo=d;a.Ad=g;}
function AXK(a){return a.Ad;}
function O_(){IK.call(this);}
function AV$(a,b){var c,d;c=a.eo.cp.data;d=a.ed;b=b*4|0;return c[d+b|0]&255|(a.eo.cp.data[(a.ed+b|0)+1|0]&255)<<8|(a.eo.cp.data[(a.ed+b|0)+2|0]&255)<<16|(a.eo.cp.data[(a.ed+b|0)+3|0]&255)<<24;}
function ASM(a,b,c){var d,e;d=a.eo.cp.data;e=a.ed;b=b*4|0;d[e+b|0]=c<<24>>24;a.eo.cp.data[(a.ed+b|0)+1|0]=c>>8<<24>>24;a.eo.cp.data[(a.ed+b|0)+2|0]=c>>16<<24>>24;a.eo.cp.data[(a.ed+b|0)+3|0]=c>>24<<24>>24;}
function VH(){IK.call(this);}
function A0O(a,b){var c,d;c=a.eo.cp.data;d=a.ed;b=b*4|0;return (c[d+b|0]&255)<<24|(a.eo.cp.data[(a.ed+b|0)+1|0]&255)<<16|(a.eo.cp.data[(a.ed+b|0)+2|0]&255)<<8|a.eo.cp.data[(a.ed+b|0)+3|0]&255;}
function ATF(a,b,c){var d,e;d=a.eo.cp.data;e=a.ed;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.eo.cp.data[(a.ed+b|0)+1|0]=c>>16<<24>>24;a.eo.cp.data[(a.ed+b|0)+2|0]=c>>8<<24>>24;a.eo.cp.data[(a.ed+b|0)+3|0]=c<<24>>24;}
function AKT(){D.call(this);this.v8=null;}
function AYF(a){var b=new AKT();A7W(b,a);return b;}
function A7W(a,b){a.v8=b;}
function ZI(a,b,c){return G3(b,a.v8)>=G3(c,a.v8)?1:(-1);}
function A07(a,b,c){return ZI(a,b,c);}
function V5(){D.call(this);this.yb=null;}
function APF(a,b,c){var d,e;d=b.fu;e=c.fu;return d&&!e?1:e&&!d?(-1):G3(b,a.yb)>=G3(c,a.yb)?(-1):1;}
function A9E(a,b,c){return APF(a,b,c);}
function Ho(){D.call(this);}
var Bla=null;var Blb=null;var Blc=null;var Bld=null;var Ble=null;function Blf(){var a=new Ho();AAh(a);return a;}
function AAh(a){return;}
function Rw(b,c){var d,e,f;if(c===null)c=Bld;d=J(D,b.p);Uz(b,d);PU(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;Q8(b,e,f[e]);e=e+1|0;}}
function AOb(){Bla=new R6;Blb=new R5;Blc=new R7;Bld=new WE;Ble=new WC;}
function HT(){var a=this;D.call(a);a.mJ=null;a.ye=null;a.De=null;a.Cs=null;a.HH=null;a.Gs=0.0;a.FM=0.0;a.E6=0.0;a.E5=0.0;a.E4=0.0;}
var Bkp=null;var BkH=0.0;var BkI=0.0;var BkJ=0.0;function BbX(){var a=new HT();AC8(a);return a;}
function AC8(a){var b;a.mJ=Dd();BR(a.mJ,F(Jd),Bcj());BR(a.mJ,F(Nt),Bbx());b=Nc(Ip(a.mJ));while(F8(b)){Md(b).q$=a;}}
function Vp(a,b){var c;c=CP(a.mJ,b);if(c===null&&b!==F(D$)){c=Vp(a,JF(b));BR(a.mJ,b,c);}return c;}
function AIg(a,b){return Wk(a,b)===null?0:1;}
function Wk(a,b){return Vp(a,Dl(b));}
function ARf(a,b,c,d,e,f){var g,h,i;a.Cs=b;a.De=c;a.HH=e;a.ye=d;a.Gs=e.P+(e.v-e.P)*f;a.FM=e.T+(e.J-e.T)*f;g=e.cr;h=e.d-e.cr;i=f;a.E6=g+h*i;a.E5=e.b7+(e.j-e.b7)*i;a.E4=e.cs+(e.e-e.cs)*i;}
function YU(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(AK0(b,a.E6,a.E5,a.E4)>=4096.0)return;d=a.Cs;e=b.dJ;f=b.dH;g=b.dP;$p=1;case 1:$z=ANf(d,e,f,g);if(C()){break _;}h=$z;F3(h,h,h);i=b.dJ-BkH;j=b.dH-BkI;k=b.dP-BkJ;$p=2;case 2:AFm(a,b,i,j,k,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFm(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=Wk(a,b);if(g===null)return;$p=1;case 1:g.CP(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function A_P(a){return a.ye;}
function ALI(){Bkp=BbX();}
function HV(){var a=this;D.call(a);a.dS=null;a.Fz=null;a.tW=null;a.n0=null;a.HU=null;a.rm=0.0;a.GH=0.0;a.FI=null;a.D3=0.0;a.D2=0.0;a.D1=0.0;}
var Bgm=null;var BkE=0.0;var BkF=0.0;var BkG=0.0;function Bag(){var a=new HV();AGu(a);return a;}
function AGu(a){var b,c,d,e,f;a.dS=Dd();BR(a.dS,F(Kl),A_W());b=a.dS;c=new T2;d=BcL();e=new PR;KW(e,6,0.5);Gn(c,d,0.699999988079071);c.ke=e;BR(b,F(Iz),c);d=a.dS;f=new Ty;c=Bci();e=BbT();Gn(f,c,0.699999988079071);f.ke=e;BR(d,F(KF),f);BR(a.dS,F(JV),Bb9());BR(a.dS,F(Jj),AYd(Bcw(),0.5));d=a.dS;f=new DH;c=new HN;KE(c);Gn(f,c,0.5);BR(d,F(I3),f);BR(a.dS,F(Jr),Bbi());d=a.dS;f=new T6;c=new HN;KE(c);Gn(f,c,3.0);f.ts=6.0;BR(d,F(K$),f);BR(a.dS,F(EQ),AYd(A$W(),0.5));d=a.dS;f=new TF;EH(f);BR(d,F(C5),f);BR(a.dS,F(ID),BbR());d
=a.dS;f=new Rs;EH(f);BR(d,F(Jp),f);BR(a.dS,F(E$),XY());BR(a.dS,F(Mo),Bam());BR(a.dS,F(JJ),Bae());BR(a.dS,F(Gd),Bb5());d=Nc(Ip(a.dS));while(F8(d)){Md(d).iA=a;}}
function WZ(a,b){var c;c=CP(a.dS,b);if(c===null&&b!==F(C5)){c=WZ(a,JF(b));BR(a.dS,b,c);}return c;}
function R9(a,b){return WZ(a,Dl(b));}
function AHa(a,b,c,d,e,f,g){var h,i,j;a.n0=b;a.tW=c;a.FI=f;a.HU=e;a.Fz=d;a.rm=e.P+(e.v-e.P)*g;a.GH=e.T+(e.J-e.T)*g;h=e.cr;i=e.d-e.cr;j=g;a.D3=h+i*j;a.D2=e.b7+(e.j-e.b7)*j;a.D1=e.cs+(e.e-e.cs)*j;}
function AM8(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.cr;e=b.d-b.cr;f=c;e=d+e*f;d=b.b7+(b.j-b.b7)*f;g=b.cs+(b.e-b.cs)*f;h=b.P+(b.v-b.P)*c;$p=1;case 1:$z=b.ve(c);if(C()){break _;}i=$z;F3(i,i,i);e=e-BkE;d=d-BkF;f=g-BkG;$p=2;case 2:AQB(a,b,e,d,f,h,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AQB(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=R9(a,b);if(h===null)return;$p=1;case 1:h.iN(b,c,d,e,f,g);if(C()){break _;}$p=2;case 2:ANh(h,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A71(a,b){a.n0=b;}
function AJS(a,b,c,d){var e,f,g;e=b-a.D3;f=c-a.D2;g=d-a.D1;return e*e+f*f+g*g;}
function AKt(){Bgm=Bag();}
function Na(){D.call(this);}
var Blg=null;var Blh=null;function Bli(){var a=new Na();ARZ(a);return a;}
function ARZ(a){return;}
function Ve(b){var c;c=0;while(true){if(c>=Blg.data.length)return (-1);if(b==Blg.data[c])break;c=c+1|0;}return c;}
function AO$(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;Blg=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;Blh=b;}
function JY(){B6.call(this);}
function Blj(){var a=new JY();A7L(a);return a;}
function A7L(a){O(a);}
function VP(){var a=this;D.call(a);a.eD=0;a.eY=0;a.eE=0;}
function CO(a,b,c){var d=new VP();AWD(d,a,b,c);return d;}
function AWD(a,b,c,d){a.eD=b;a.eY=c;a.eE=d;}
function A6n(a,b){var c;if(!(b instanceof VP))return 0;c=b;return c.eD==a.eD&&c.eY==a.eY&&c.eE==a.eE?1:0;}
function A1p(a){return (Bj(a.eD,8976890)+Bj(a.eY,981131)|0)+a.eE|0;}
function Op(){Fb.call(this);}
var Blk=0.0;var Bll=null;function AEj(){Blk=NaN;Bll=F($rt_floatcls());}
function Hi(){D.call(this);}
var Bdm=null;var Bdo=null;var Bdp=null;var Bdn=null;var Bdl=null;function Blm(){var a=new Hi();AQG(a);return a;}
function AQG(a){return;}
function AMI(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;Bdm=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);Bdo=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);Bdp=b;Bdn=new V3;Bdl=new R4;}
function Nb(){D.call(this);}
var Bln=null;var Blo=null;function Blp(){var a=new Nb();AKk(a);return a;}
function AKk(a){return;}
function AOc(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.zf=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.uu=0;c.ub=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AOq(Blo,f);if(h<0)h= -h-2|0;i=9+(f-Blo.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(Bln.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-Blo.data[h]|0)|0;k=Long_shru(Long_mul(j,Long_fromInt(Bln.data[h])),
32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?Bln.data[h]>>>g:Bln.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=R(o,p);e=e>0?Bj(k/o|0,o):e<0?Bj(k/p|0,p)+p|0:Bj((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.uu=e;c.ub=h-50|0;}
function AK_(){var b,c,d,e,f,g,h,i;Bln=$rt_createIntArray(100);Blo=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=Bln.data;g=d+50|0;f[g]=$rt_udiv(e,20);Blo.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=Bln.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);Blo.data[i]=c;d=d+1|0;}}
function R4(){var a=this;D.call(a);a.uu=0;a.ub=0;a.zf=0;}
function Blq(){var a=new R4();ASK(a);return a;}
function ASK(a){return;}
function DH(){var a=this;Dg.call(a);a.mC=null;a.ke=null;}
function AYd(a,b){var c=new DH();Gn(c,a,b);return c;}
function Gn(a,b,c){EH(a);a.mC=b;a.l8=c;}
function A$t(a,b){a.ke=b;}
function Z9(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bb(2884);try{h=b.e7+(b.dF-b.e7)*g;i=b.P+(b.v-b.P)*g;j=b.T+(b.J-b.T)*g;Bw(c,d,e);k=b.oP+g;Bv(180.0-h,0.0,1.0,0.0);if(b.c1>0){f=D_((b.c1+
g-1.0)/20.0*1.600000023841858);if(f>1.0)f=1.0;Bv(f*a.CB(b),0.0,0.0,1.0);}l=0.0625;Ba(32826);CC((-1.0),(-1.0),1.0);a.xd(b,g);Bw(0.0,(-1.5078125),0.0);m=b.jQ+(b.cg-b.jQ)*g;n=b.gn-b.cg*(1.0-g);if(m>1.0)m=1.0;o=b.tG;p=PI(b);$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);Ba(2884);BD();return;case 1:try{APn(a,o,p);if(C()){break _;}Ba(3008);o=a.mC;f=i-h;o.hH(n,m,k,f,j,l);q=0;if(q>=4){$p=2;continue _;}$p=3;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}
else{throw $$e;}}Cc(o);Ba(2884);BD();return;case 2:a:{try{$z=ADF(b,g);if(C()){break _;}r=$z;s=a.CE(b,r,g);q=s>>24&255;if(!(q<=0&&b.dD<=0&&b.c1<=0)){Bb(3553);Bb(3008);Ba(3042);Df(770,771);HG(514);if(!(b.dD<=0&&b.c1<=0)){BU(r,0.0,0.0,0.4000000059604645);a.mC.hH(n,m,k,f,j,l);t=0;if(t<4){$p=4;continue _;}}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BU(u,v,w,x);a.mC.hH(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HG(515);Bb(3042);Ba(3008);Ba(3553);}Bb(32826);break a;}catch($$e){$$je=Bi($$e);if
($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);}Ba(2884);BD();return;case 3:try{$z=a.k3(b,q);if(C()){break _;}s=$z;if(s){a.ke.hH(n,m,k,f,j,l);Bb(3042);Ba(3008);}q=q+1|0;if(q>=4){$p=2;continue _;}continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);Ba(2884);BD();return;case 4:a:{try{$z=a.k3(b,t);if(C()){break _;}y=$z;if(y){BU(r,0.0,0.0,0.4000000059604645);a.ke.hH(n,m,k,f,j,l);}t=t+1|0;if(t<4){continue _;}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x
=q/255.0;BU(u,v,w,x);a.mC.hH(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HG(515);Bb(3042);Ba(3008);Ba(3553);Bb(32826);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);}Ba(2884);BD();return;case 5:a:{try{$z=a.k3(b,y);if(C()){break _;}s=$z;if(s){BU(u,v,w,x);a.ke.hH(n,m,k,f,j,l);}y=y+1|0;if(y>=4){HG(515);Bb(3042);Ba(3008);Ba(3553);Bb(32826);break a;}continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);}Ba(2884);BD();return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function APQ(a,b,c){return 0;}
function A5h(a,b){return 90.0;}
function A6w(a,b,c,d){return 0;}
function A8_(a,b,c){return;}
function AOV(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.H1(b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function OI(){var a=this;DH.call(a);a.AV=null;a.z6=null;a.Co=null;}
var Blr=null;function Bbi(){var a=new OI();AH$(a);return a;}
function AH$(a){Gn(a,Xp(0.0),0.5);a.AV=a.mC;a.z6=Xp(1.0);a.Co=Xp(0.5);}
function ARv(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=AIh(b.K,3-c|0);if(d!==null){e=DK(d);if(e instanceof F0){f=e;b=new T;W(b);b=H(H(H(b,B(570)),Blr.data[f.Bz]),B(571));g=R(c,2);b=U(H(Be(b,g?1:2),B(512)));$p=1;continue _;}}return 0;case 1:AKq(a,b);if(C()){break _;}h=g?a.z6:a.Co;h.iW.iP=c?0:1;h.k7.iP=c?0:1;b=h.pf;i=R(c,1);b.iP=i&&g?0:1;h.d0.iP=i?0:1;h.dM.iP=i?0:1;h.i8.iP
=g&&c!=3?0:1;h.hd.iP=g&&c!=3?0:1;a.ke=h;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ADK(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-b.c3;$p=1;case 1:Z9(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALw(a){B_(a.AV.d0,0.0625);}
function Y6(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ARv(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function AL1(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADK(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACI(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADK(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAb(){var b,c;b=J(B4,5);c=b.data;c[0]=B(239);c[1]=B(572);c[2]=B(573);c[3]=B(574);c[4]=B(575);Blr=b;}
function Ly(){var a=this;Gc.call(a);a.hA=0;a.i3=0;a.hR=0;a.h6=0;a.kj=null;a.cl=0;a.gB=0;a.yP=0;}
function Dj(a,b,c,d){var e=new Ly();A3g(e,a,b,c,d);return e;}
function Bls(a,b,c,d,e,f){var g=new Ly();SA(g,a,b,c,d,e,f);return g;}
function A3g(a,b,c,d,e){SA(a,b,c,d,200,20,e);}
function SA(a,b,c,d,e,f,g){M_(a);a.hA=200;a.i3=20;a.gB=1;a.yP=1;a.cl=b;a.hR=c;a.h6=d;a.hA=e;a.i3=f;a.kj=g;}
function ACQ(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.yP)return;e=b.e8;f=3553;g=b.bo;b=B(503);$p=1;case 1:$z=AHs(g,b);if(C()){break _;}h=$z;Cp(f,h);BU(1.0,1.0,1.0,1.0);h=1;f=c>=a.hR&&d>=a.h6&&c<(a.hR+a.hA|0)&&d<(a.h6+a.i3|0)?1:0;if(!a.gB)h=0;else if(f)h=2;i=a.hR;j=a.h6;h=46+(h*20|0)|0;CH(a,i,j,0,h,a.hA/2|0,a.i3);CH(a,a.hR+(a.hA/2|0)|0,a.h6,200-(a.hA/2|0)|
0,h,a.hA/2|0,a.i3);if(!a.gB)DD(a,e,a.kj,a.hR+(a.hA/2|0)|0,a.h6+((a.i3-8|0)/2|0)|0,(-6250336));else if(!f)DD(a,e,a.kj,a.hR+(a.hA/2|0)|0,a.h6+((a.i3-8|0)/2|0)|0,14737632);else DD(a,e,a.kj,a.hR+(a.hA/2|0)|0,a.h6+((a.i3-8|0)/2|0)|0,16777120);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function RZ(a,b,c){return a.gB&&b>=a.hR&&c>=a.h6&&b<(a.hR+a.hA|0)&&c<(a.h6+a.i3|0)?1:0;}
function L9(){D.call(this);}
function Blt(){var a=new L9();AVR(a);return a;}
function AVR(a){return;}
function Qo(){}
function Kq(){var a=this;L9.call(a);a.zP=null;a.HW=null;a.va=0;a.Dh=0;a.nc=null;a.vH=null;}
function AD$(a){var b,c,d;a:{b=a.va;c=a.Dh;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6;return d|c&8|b<<2&16|c&32|b>>>8&64|b>>>5&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function ABh(a){return a.nc.oW();}
function WA(a,b){var c,d,e,f,g;if(a.va&1){c=new LX;O(c);M(c);}if(a.vH===null){c=new S6;O(c);M(c);}d=b.data;e=d.length;if(e!=a.nc.data.length){c=new Cb;O(c);M(c);}f=0;while(true){if(f>=e){c=b.data;g=new a.zP.fY();a.vH.call(g,c);return g;}if(!FW(a.nc.data[f])&&d[f]!==null&&!Ut(a.nc.data[f],d[f])){c=new Cb;O(c);M(c);}if(FW(a.nc.data[f])&&d[f]===null)break;f=f+1|0;}c=new Cb;O(c);M(c);}
function Oo(){}
function Qv(){D.call(this);}
function Blu(){var a=new Qv();A_g(a);return a;}
function A_g(a){return;}
function AJs(a){var b,c,d;Bd();BdD.requestPointerLock();b=B$();if(VJ())clearTimeout(VJ());MS(0);if(Long_lt(Long_sub(b,PT()),Long_fromInt(3000))){c=new Tn;c.Jg=a;d=3000-Long_sub(b,PT()).lo|0;MS(setTimeout(Cu(c,"onTimer"),d));}}
function A1A(a){AJs(a);}
function WE(){D.call(this);}
function Blv(){var a=new WE();AVj(a);return a;}
function AVj(a){return;}
function A4P(a,b,c){return b!==null?b.lM(c): -c.lM(b);}
function WC(){D.call(this);}
function Blw(){var a=new WC();A5J(a);return a;}
function A5J(a){return;}
function R6(){Fc.call(this);}
function Blx(){var a=new R6();A96(a);return a;}
function A96(a){return;}
function R5(){FU.call(this);}
function Bly(){var a=new R5();A9_(a);return a;}
function A9_(a){return;}
function R7(){Gb.call(this);}
function Blz(){var a=new R7();A3F(a);return a;}
function A3F(a){return;}
function Iy(){D.call(this);this.q$=null;}
function AKx(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.q$.De;$p=1;case 1:$z=AHs(c,b);if(C()){break _;}d=$z;Eb(c,d);return;default:E_();}}C3().s(a,b,c,d,$p);}
function A0N(a,b){a.q$=b;}
function ANz(a){return a.q$.ye;}
function AA0(){Iy.call(this);this.EA=null;}
function Bcj(){var a=new AA0();ATt(a);return a;}
function ATt(a){a.EA=BbP();}
function ARm(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d+0.75,e+0.5);$p=1;case 1:$z=AMd(b);if(C()){break _;}g=$z;Bv( -((g*360|0)/16.0),0.0,1.0,0.0);h=B(576);$p=2;case 2:AKx(a,h);if(C()){break _;}B3();CC(1.0,(-1.0),(-1.0));AM9(a.EA);BD();Bw(0.0,0.5,0.09000000357627869);CC(0.01666666753590107,(-0.01666666753590107),0.01666666753590107);Cj(0.0,
0.0,(-0.01666666753590107));h=ANz(a);i=0;while(i<b.gr.data.length){j=b.gr.data[i];if(i!=b.ry)ED(h,j, -Dw(h,j)/2|0,(i*10|0)-(b.gr.data.length*5|0)|0,0);else{k=new T;W(k);j=U(H(H(H(k,B(577)),j),B(578)));ED(h,j, -Dw(h,j)/2|0,(i*10|0)-(b.gr.data.length*5|0)|0,0);}i=i+1|0;}BU(1.0,1.0,1.0,1.0);BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Xz(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ARm(a,b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function Nt(){var a=this;D$.call(a);a.jV=0;a.jJ=null;a.lI=0.0;a.mq=0.0;}
function Bcr(){var a=new Nt();A8a(a);return a;}
function A8a(a){a.jV=(-1);a.jJ=B(579);a.mq=0.0;a.jV=20;}
function ZE(a){return AGK(a.ch.bi,a.dJ,a.dH,a.dP)>256.0?0:1;}
function AC1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mq=a.lI;if(ZE(a)){b=a.dJ+N(a.ch.r);c=a.dH+N(a.ch.r);d=a.dP+N(a.ch.r);BV(a.ch,B(256),b,c,d,0.0,0.0,0.0);BV(a.ch,B(257),b,c,d,0.0,0.0,0.0);a.lI=a.lI+1000.0/(a.jV+200.0);while(a.lI>360.0){a.lI=a.lI-360.0;a.mq=a.mq-360.0;}if(a.jV==(-1))NR(a);if(a.jV>0)a.jV
=a.jV-1|0;else{e=4;f=0;if(f<e){g=Ji(a.jJ,a.ch);if(g===null)return;h=a.ch;i=Dl(g);j=Dv(D3(a.dJ,a.dH,a.dP,a.dJ+1|0,a.dH+1|0,a.dP+1|0),8.0,4.0,8.0);$p=1;continue _;}}}return;case 1:$z=ANc(h,i,j);if(C()){break _;}h=$z;if(h.p>=6){NR(a);return;}k=a.dJ+(Cl(a.ch.r)-Cl(a.ch.r))*4.0;l=(a.dH+E(a.ch.r,3)|0)-1|0;m=a.dP+(Cl(a.ch.r)-Cl(a.ch.r))*4.0;Ks(g,k,l,m,N(a.ch.r)*360.0,0.0);$p=2;case 2:$z=g.uO(k,l,m);if(C()){break _;}n=$z;if(n){h=a.ch;$p=3;continue _;}f=f+1|0;if(f>=e)return;g=Ji(a.jJ,a.ch);if(g===null)return;h=a.ch;i
=Dl(g);j=Dv(D3(a.dJ,a.dH,a.dP,a.dJ+1|0,a.dH+1|0,a.dP+1|0),8.0,4.0,8.0);$p=1;continue _;case 3:AOf(h,g);if(C()){break _;}o=0;while(o<20){c=a.dJ+0.5+(N(a.ch.r)-0.5)*2.0;d=a.dH+0.5+(N(a.ch.r)-0.5)*2.0;k=a.dP+0.5+(N(a.ch.r)-0.5)*2.0;BV(a.ch,B(256),c,d,k,0.0,0.0,0.0);BV(a.ch,B(257),c,d,k,0.0,0.0,0.0);o=o+1|0;}AEP(g);NR(a);f=f+1|0;if(f>=e)return;g=Ji(a.jJ,a.ch);if(g===null)return;h=a.ch;i=Dl(g);j=Dv(D3(a.dJ,a.dH,a.dP,a.dJ+1|0,a.dH+1|0,a.dP+1|0),8.0,4.0,8.0);$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,$p);}
function NR(a){a.jV=200+E(a.ch.r,600)|0;}
function ARX(){Iy.call(this);this.wG=null;}
function Bbx(){var a=new ARX();AXj(a);return a;}
function AXj(a){a.wG=Dd();}
function ZX(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d,e+0.5);g=CP(a.wG,b.jJ);if(g===null){g=Ji(b.jJ,null);BR(a.wG,b.jJ,g);}if(g===null){BD();return;}g.m=b.ch;Bw(0.0,0.4000000059604645,0.0);Bv((b.mq+(b.lI-b.mq)*f)*10.0,0.0,1.0,0.0);Bv((-30.0),1.0,0.0,0.0);Bw(0.0,(-0.4000000059604645),0.0);CC(0.4375,0.4375,0.4375);b=Bgm;c=0.0;d=0.0;e=0.0;h=0.0;$p=1;case 1:AQB(b,g,c,d,e,
h,f);if(C()){break _;}BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ARb(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ZX(a,b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AQg(){DH.call(this);}
function A_W(){var a=new AQg();A4o(a);return a;}
function A4o(a){Gn(a,A5l(),1.0);a.ke=A5l();}
function A6m(a,b){return 180.0;}
function XV(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c)return 0;if(c)return 0;d=B(580);$p=1;case 1:AKq(a,d);if(C()){break _;}e=1.0;f=1.0;$p=2;case 2:$z=ADF(b,f);if(C()){break _;}f=$z;f=(e-f)*0.5;Ba(3042);Bb(3008);Df(770,771);BU(1.0,1.0,1.0,f);return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A6i(a,b){return 180.0;}
function X$(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=XV(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function T2(){DH.call(this);}
function AGc(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(581);$p=1;case 1:AKq(a,d);if(C()){break _;}return !c&&b.qv?1:0;default:E_();}}C3().s(a,b,c,d,$p);}
function AL_(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AGc(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function FY(){var a=this;Eh.call(a);a.hc=null;a.hB=null;a.jF=null;a.jE=null;a.jD=null;a.jG=null;}
function BlA(a,b){var c=new FY();KW(c,a,b);return c;}
function KW(a,b,c){var d,e;a.hc=BK(0,0);BG(a.hc,(-4.0),(-4.0),(-8.0),8,8,8,c);BJ(a.hc,0.0,18-b|0,(-6.0));a.hB=BK(28,8);BG(a.hB,(-5.0),(-10.0),(-7.0),10,16,8,c);BJ(a.hB,0.0,17-b|0,2.0);a.jF=BK(0,16);BG(a.jF,(-2.0),0.0,(-2.0),4,b,4,c);d=a.jF;e=24-b|0;BJ(d,(-3.0),e,7.0);a.jE=BK(0,16);BG(a.jE,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jE,3.0,e,7.0);a.jD=BK(0,16);BG(a.jD,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jD,(-3.0),e,(-5.0));a.jG=BK(0,16);BG(a.jG,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jG,3.0,e,(-5.0));}
function A9Y(a,b,c,d,e,f,g){AJR(a,b,c,d,e,f,g);B_(a.hc,g);B_(a.hB,g);B_(a.jF,g);B_(a.jE,g);B_(a.jD,g);B_(a.jG,g);}
function AJR(a,b,c,d,e,f,g){var h;a.hc.bY=e/57.2957763671875;a.hB.b1=1.5707963705062866;h=a.jF;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.jE;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.jD.b1=BC(d)*1.399999976158142*c;a.jG.b1=BC(b)*1.399999976158142*c;}
function PR(){FY.call(this);}
function BcL(){var a=new PR();AYa(a);return a;}
function AYa(a){KW(a,6,0.0);}
function Ty(){DH.call(this);}
function AM1(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(582);$p=1;case 1:AKq(a,d);if(C()){break _;}return !c&&!b.x2?1:0;default:E_();}}C3().s(a,b,c,d,$p);}
function ARp(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AM1(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function ACE(){FY.call(this);}
function Bci(){var a=new ACE();A94(a);return a;}
function A94(a){KW(a,12,0.0);a.hc=BK(0,0);BG(a.hc,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BJ(a.hc,0.0,6.0,(-8.0));a.hB=BK(28,8);BG(a.hB,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BJ(a.hB,0.0,5.0,2.0);}
function ARe(){FY.call(this);}
function BbT(){var a=new ARe();AU8(a);return a;}
function AU8(a){KW(a,12,0.0);a.hc=BK(0,0);BG(a.hc,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BJ(a.hc,0.0,6.0,(-8.0));a.hB=BK(28,8);BG(a.hB,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BJ(a.hB,0.0,5.0,2.0);a.jF=BK(0,16);BG(a.jF,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jF,(-3.0),12.0,7.0);a.jE=BK(0,16);BG(a.jE,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jE,3.0,12.0,7.0);a.jD=BK(0,16);BG(a.jD,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jD,(-3.0),12.0,(-5.0));a.jG=BK(0,16);BG(a.jG,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jG,3.0,12.0,(-5.0));}
function AB6(){DH.call(this);}
function Bb9(){var a=new AB6();AZI(a);return a;}
function AZI(a){Gn(a,BaT(),0.5);}
function ADA(a,b,c){var d,e,f;d=Qi(b,c);e=1.0+Bq(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;c=d*d;c=c*c;f=(1.0+c*0.4000000059604645)*e;CC(f,(1.0+c*0.10000000149011612)/e,f);}
function X9(a,b,c,d){var e,f;e=Qi(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function A7V(a,b,c){ADA(a,b,c);}
function AZU(a,b,c,d){return X9(a,b,c,d);}
function HN(){Mw.call(this);}
function BlB(){var a=new HN();A8b(a);return a;}
function A8b(a){KE(a);}
function A2H(a,b,c,d,e,f,g){var h,i,j;AIQ(a,b,c,d,e,f,g);h=Bq(a.xT*3.1415927410125732);i=Bq((1.0-(1.0-a.xT)*(1.0-a.xT))*3.1415927410125732);a.d0.bV=0.0;a.dM.bV=0.0;j=a.d0;b=0.10000000149011612-h*0.6000000238418579;j.bY= -b;a.dM.bY=b;a.d0.b1=(-1.5707963705062866);a.dM.b1=(-1.5707963705062866);j=a.d0;b=j.b1;c=h*1.2000000476837158-i*0.4000000059604645;j.b1=b-c;j=a.dM;j.b1=j.b1-c;j=a.d0;b=j.bV;c=d*0.09000000357627869;j.bV=b+BC(c)*0.05000000074505806+0.05000000074505806;j=a.dM;j.bV=j.bV-(BC(c)*0.05000000074505806
+0.05000000074505806);j=a.d0;b=j.b1;c=d*0.06700000166893005;j.b1=b+Bq(c)*0.05000000074505806;j=a.dM;j.b1=j.b1-Bq(c)*0.05000000074505806;}
function AIm(){HN.call(this);}
function Bcw(){var a=new AIm();AWm(a);return a;}
function AWm(a){KE(a);a.d0=BK(40,16);BG(a.d0,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.d0,(-5.0),2.0,0.0);a.dM=BK(40,16);a.dM.lz=1;BG(a.dM,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.dM,5.0,2.0,0.0);a.i8=BK(0,16);BG(a.i8,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.i8,(-2.0),12.0,0.0);a.hd=BK(0,16);a.hd.lz=1;BG(a.hd,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.hd,2.0,12.0,0.0);}
function K$(){DP.call(this);}
function AO6(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.m;$p=1;case 1:$z=ANf(e,b,c,d);if(C()){break _;}f=$z;return f-0.5;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function T6(){DH.call(this);this.ts=0.0;}
function Zr(a,b,c){CC(a.ts,a.ts,a.ts);}
function A$Z(a,b,c){Zr(a,b,c);}
function TF(){Dg.call(this);}
function BlC(){var a=new TF();AZs(a);return a;}
function AZs(a){EH(a);}
function AJq(a,b,c,d,e,f,g){B3();A8o(b.L,c-b.cr,d-b.b7,e-b.cs);BD();}
function ID(){var a=this;C5.call(a);a.rs=0;a.dI=0;a.nm=0;a.Ew=0;a.nt=0;a.dR=null;}
function JM(a,b){var c,d,e,f,g,h,i,j,k,l;a.dI=b;c=b*90|0;a.v=c;a.P=c;c=a.dR.gg;d=a.dR.m3;e=a.dR.gg;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;d=d/32.0;f=e/32.0;g=a.nm+0.5;h=a.Ew+0.5;i=a.nt+0.5;if(!b)i=i-0.5625;j=R(b,1);if(!j)g=g-0.5625;k=R(b,2);if(!k)i=i+0.5625;l=R(b,3);if(!l)g=g+0.5625;if(!b)g=g-HK(a,a.dR.gg);if(!j)i=i+HK(a,a.dR.gg);if(!k)g=g+HK(a,a.dR.gg);if(!l)i=i-HK(a,a.dR.gg);e=h+HK(a,a.dR.m3);CT(a,g,e,i);M1(a.L,g-c+0.0062500000931322575,e-d+0.0062500000931322575,i-f+0.0062500000931322575,g+c+(-0.0062500000931322575),
e+d+(-0.0062500000931322575),i+f+(-0.0062500000931322575));}
function HK(a,b){return b==32?0.5:b!=64?0.0:0.5;}
function ADi(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.rs;a.rs=b+1|0;if(b!=100)return;$p=1;case 1:$z=ZG(a);if(C()){break _;}c=$z;if(c)return;a.rs=0;$p=2;case 2:Ca(a);if(C()){break _;}d=a.m;e=new E$;f=a.m;g=a.d;h=a.j;i=a.e;j=new Cd;BB();DA(j,Biz);Ha(e,f,g,h,i,j);$p=3;case 3:AOf(d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ZG(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.m;c=a.L;$p=1;case 1:$z=XQ(b,a,c);if(C()){break _;}b=$z;if(b.p>0)return 0;d=a.dR.gg/16|0;e=a.dR.m3/16|0;f=a.nm;g=a.nt;if(!a.dI)f=K(a.d-a.dR.gg/32.0);if(a.dI==1)g=K(a.e-a.dR.gg/32.0);if(a.dI==2)f=K(a.d-a.dR.gg/32.0);if(a.dI==3)g=K(a.e-a.dR.gg/32.0);h=K(a.j-a.dR.m3/32.0);i=0;while
(i<d){j=0;if(j<e){if(a.dI&&a.dI!=2){b=a.m;k=a.nm;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.m;k=f+i|0;l=h+j|0;m=a.nt;$p=3;continue _;}i=i+1|0;}b=a.m;c=a.L;$p=2;case 2:$z=ADI(b,a,c);if(C()){break _;}c=$z;k=0;while(k<c.p){if(Z(c,k) instanceof ID)return 0;k=k+1|0;}return 1;case 3:$z=ABX(b,k,l,m);if(C()){break _;}b=$z;if(!b.du())return 0;j=j+1|0;while(true){if(j<e){if(a.dI&&a.dI!=2){b=a.m;k=a.nm;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.m;k=f+i|0;l=h+j|0;m=a.nt;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.m;c=a.L;$p=2;continue _;case 4:$z
=ABX(b,k,l,m);if(C()){break _;}b=$z;if(!b.du())return 0;j=j+1|0;while(true){if(j<e){if(a.dI&&a.dI!=2){b=a.m;k=a.nm;l=h+j|0;m=g+i|0;continue _;}b=a.m;k=f+i|0;l=h+j|0;m=a.nt;$p=3;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.m;c=a.L;$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AXM(a){return 1;}
function AEo(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Ca(a);if(C()){break _;}d=a.m;b=new E$;e=a.m;f=a.d;g=a.j;h=a.e;i=new Cd;BB();DA(i,Biz);Ha(b,e,f,g,h,i);$p=2;case 2:AOf(d,b);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAp(){Dg.call(this);this.H8=null;}
function BbR(){var a=new AAp();AZy(a);return a;}
function AZy(a){EH(a);a.H8=new Dz;}
function AP$(a,b,c,d,e,f,g){var h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);Bv(f,0.0,1.0,0.0);Ba(32826);h=B(583);$p=1;case 1:AKq(a,h);if(C()){break _;}h=b.dR;CC(0.0625,0.0625,0.0625);i=h.gg;j=h.m3;k=h.zF;l=h.zE;$p=2;case 2:ACR(a,b,i,j,k,l);if(C()){break _;}Bb(32826);BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ACR(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g= -c/2.0;h= -d/
2.0;i=0;j=c/16|0;k=d/16|0;l=e+c|0;m=f+d|0;while(i<j){if(0<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=0+1|0;f=q*16|0;r=h+f;s=0*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dI)w=K(b.d+u/16.0);if(b.dI==1)y=K(b.e-u/16.0);if(b.dI==2)w=K(b.d-u/16.0);if(b.dI==3)y=K(b.e+u/16.0);z=a.iA.n0;$p=1;continue _;}i=i+1|0;}return;case 1:$z=ANf(z,w,x,y);if(C()){break _;}ba=$z;F3(ba,ba,ba);ba=(l-o|0)/256.0;u=(l-c|0)/256.0;v=(m-s|0)/256.0;bb=(m-f|0)/256.0;BA();z=BeJ;Bz(z);Cj(0.0,0.0,(-1.0));bc=n;bd=t;be
=u;bf=v;G(z,bc,bd,(-0.5),be,bf);bg=p;bh=ba;G(z,bg,bd,(-0.5),bh,bf);bf=r;bi=bb;G(z,bg,bf,(-0.5),bh,bi);G(z,bc,bf,(-0.5),be,bi);Cj(0.0,0.0,1.0);G(z,bc,bf,0.5,0.75,0.0);G(z,bg,bf,0.5,0.8125,0.0);G(z,bg,bd,0.5,0.8125,0.0625);G(z,bc,bd,0.5,0.75,0.0625);Cj(0.0,(-1.0),0.0);G(z,bc,bf,(-0.5),0.75,0.001953125);G(z,bg,bf,(-0.5),0.8125,0.001953125);G(z,bg,bf,0.5,0.8125,0.001953125);G(z,bc,bf,0.5,0.75,0.001953125);Cj(0.0,1.0,0.0);G(z,bc,bd,0.5,0.75,0.001953125);G(z,bg,bd,0.5,0.8125,0.001953125);G(z,bg,bd,(-0.5),0.8125,0.001953125);G(z,
bc,bd,(-0.5),0.75,0.001953125);Cj((-1.0),0.0,0.0);G(z,bc,bf,0.5,0.751953125,0.0);G(z,bc,bd,0.5,0.751953125,0.0625);G(z,bc,bd,(-0.5),0.751953125,0.0625);G(z,bc,bf,(-0.5),0.751953125,0.0);Cj(1.0,0.0,0.0);G(z,bg,bf,(-0.5),0.751953125,0.0);G(z,bg,bd,(-0.5),0.751953125,0.0625);G(z,bg,bd,0.5,0.751953125,0.0625);G(z,bg,bf,0.5,0.751953125,0.0);Br(z);s=q;while(true){if(s<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=s+1|0;f=q*16|0;r=h+f;s=s*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dI)w=K(b.d
+u/16.0);if(b.dI==1)y=K(b.e-u/16.0);if(b.dI==2)w=K(b.d-u/16.0);if(b.dI==3)y=K(b.e+u/16.0);z=a.iA.n0;continue _;}i=i+1|0;if(i>=j)break;s=0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AOP(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AP$(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Jp(){var a=this;C5.call(a);a.st=0;a.s0=0;a.rD=0;a.vO=0;a.ph=0;a.lk=0;a.si=null;a.pY=0;a.m6=0;}
function AS8(a,b){var c=new Jp();AY$(c,a,b);return c;}
function AY$(a,b,c){Fz(a,b);a.st=(-1);a.s0=(-1);a.rD=(-1);a.vO=0;a.ph=0;a.lk=0;a.m6=0;a.si=c;D1(a,0.5,0.5);Ks(a,c.d,c.j,c.e,c.v,c.J);a.d=a.d-BC(a.v/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.e=a.e-Bq(a.v/180.0*3.1415927410125732)*0.1599999964237213;CT(a,a.d,a.j,a.e);a.c3=0.0;a.g= -Bq(a.v/180.0*3.1415927410125732)*BC(a.J/180.0*3.1415927410125732);a.h=BC(a.v/180.0*3.1415927410125732)*BC(a.J/180.0*3.1415927410125732);a.i= -Bq(a.J/180.0*3.1415927410125732);Qz(a,a.g,a.i,a.h,1.5,1.0);}
function Qz(a,b,c,d,e,f){var g,h,i;g=Ce(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;g=CY(a.n)*0.007499999832361937;h=f;b=b+g*h;c=c+CY(a.n)*0.007499999832361937*h;d=d+CY(a.n)*0.007499999832361937*h;g=e;b=b*g;c=c*g;d=d*g;a.g=b;a.i=c;a.h=d;i=Ce(b*b+d*d);e=CR(b,d)*180.0/3.1415927410125732;a.v=e;a.P=e;e=CR(c,i)*180.0/3.1415927410125732;a.J=e;a.T=e;a.pY=0;}
function APr(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AI7(a);if(C()){break _;}if(a.lk>0)a.lk=a.lk-1|0;if(a.ph){b=a.m;c=a.st;d=a.s0;e=a.rD;$p=2;continue _;}a.m6=a.m6+1|0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.m;$p=3;continue _;case 2:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;if
(c==a.vO){a.pY=a.pY+1|0;if(a.pY!=1200)return;$p=4;continue _;}a.ph=0;a.g=a.g*N(a.n)*0.20000000298023224;a.i=a.i*N(a.n)*0.20000000298023224;a.h=a.h*N(a.n)*0.20000000298023224;a.pY=0;a.m6=0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.m;$p=3;case 3:$z=AJj(g,b,f);if(C()){break _;}g=$z;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);if(g!==null)f=BY(g.gx.x,g.gx.z,g.gx.w);h=null;i=a.m;j=Dv(Ja(a.L,a.g,a.i,a.h),1.0,1.0,1.0);$p=5;continue _;case 4:Ca(a);if(C()){break _;}return;case 5:$z=ADI(i,a,j);if(C()){break _;}i
=$z;k=0.0;d=0;while(d<De(i)){j=Z(i,d);if(j.lq()&&!(j===a.si&&a.m6<5)){l=QN(Dv(j.L,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,f);if(l!==null){m=DG(b,l.gx);if(!(m>=k&&k!==0.0)){h=j;k=m;}}}d=d+1|0;}if(h!==null)g=A0_(h);if(g!==null){if(g.ny!==null){b=g.ny;f=a.si;c=4;$p=7;continue _;}a.st=g.h9;a.s0=g.h$;a.rD=g.h_;b=a.m;c=a.st;d=a.s0;e=a.rD;$p=6;continue _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.J=CR(a.i,n)*180.0/3.1415927410125732;while
(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}a.J=a.T+(a.J-a.T)*0.20000000298023224;a.v=a.P+(a.v-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 6:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;a.vO=c;a.g=g.gx.x-a.d;a.i=g.gx.z-a.j;a.h=g.gx.w-a.e;n=Ce(a.g*a.g+a.i*a.i+a.h*a.h);k=a.d;m=a.g;p=n;a.d=k-m/p*0.05000000074505806;a.j=a.j-a.i/p*0.05000000074505806;a.e=a.e-a.h/p*0.05000000074505806;Dh(a.m,a,B(584),
1.0,1.2000000476837158/(N(a.n)*0.20000000298023224+0.8999999761581421));a.ph=1;a.lk=7;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.J=CR(a.i,n)*180.0/3.1415927410125732;while(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}a.J=a.T+(a.J-a.T)*0.20000000298023224;a.v=a.P+(a.v-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 7:$z=b.fq(f,c);if(C())
{break _;}c=$z;if(c){Dh(a.m,a,B(584),1.0,1.2000000476837158/(N(a.n)*0.20000000298023224+0.8999999761581421));$p=8;continue _;}a.g=a.g*(-0.10000000149011612);a.i=a.i*(-0.10000000149011612);a.h=a.h*(-0.10000000149011612);a.v=a.v+180.0;a.P=a.P+180.0;a.m6=0;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.J=CR(a.i,n)*180.0/3.1415927410125732;while(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while
(a.v-a.P>=180.0){a.P=a.P+360.0;}a.J=a.T+(a.J-a.T)*0.20000000298023224;a.v=a.P+(a.v-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 8:Ca(a);if(C()){break _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.J=CR(a.i,n)*180.0/3.1415927410125732;while(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}a.J=a.T+(a.J-a.T)*0.20000000298023224;a.v=a.P+(a.v
-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;case 9:$z=AE5(a);if(C()){break _;}c=$z;if(c){e=0;while(e<4){BV(a.m,B(213),a.d-a.g*0.25,a.j-a.i*0.25,a.e-a.h*0.25,a.g,a.i,a.h);e=e+1|0;}o=0.800000011920929;}k=a.g;m=o;a.g=k*m;a.i=a.i*m;a.h=a.h*m;a.i=a.i-0.029999999329447746;CT(a,a.d,a.j,a.e);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function A7A(a,b){var c,d;if(a.ph&&a.si===b&&a.lk<=0){c=b.K;d=new Cd;BB();MJ(d,Bgb.cV,1);if(U6(c,d)){Dh(a.m,a,B(585),0.20000000298023224,((N(a.n)-N(a.n))*0.699999988079071+1.0)*2.0);RS(b,a);Ca(a);}}}
function Rs(){Dg.call(this);}
function BlD(){var a=new Rs();ASS(a);return a;}
function ASS(a){EH(a);}
function AJU(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=B(586);$p=1;case 1:AKq(a,h);if(C()){break _;}B3();Bw(c,d,e);Bv(b.P+(b.v-b.P)*g-90.0,0.0,1.0,0.0);Bv(b.T+(b.J-b.T)*g,0.0,0.0,1.0);BA();h=BeJ;Ba(32826);i=b.lk-g;if(i>0.0)Bv( -Bq(i*3.0)*i,0.0,0.0,1.0);Bv(45.0,1.0,0.0,0.0);CC(0.05624999850988388,0.05624999850988388,0.05624999850988388);Bw((-4.0),0.0,0.0);Cj(0.05624999850988388,
0.0,0.0);Bz(h);G(h,(-7.0),(-2.0),(-2.0),0.0,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.3125);G(h,(-7.0),2.0,(-2.0),0.0,0.3125);Br(h);Cj((-0.05624999850988388),0.0,0.0);Bz(h);G(h,(-7.0),2.0,(-2.0),0.0,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.3125);G(h,(-7.0),(-2.0),(-2.0),0.0,0.3125);Br(h);j=0;while(j<4){Bv(90.0,1.0,0.0,0.0);Cj(0.0,0.0,0.05624999850988388);Bz(h);G(h,(-8.0),(-2.0),0.0,0.0,0.0);G(h,8.0,(-2.0),0.0,0.5,0.0);G(h,8.0,2.0,0.0,0.5,
0.15625);G(h,(-8.0),2.0,0.0,0.0,0.15625);Br(h);j=j+1|0;}Bb(32826);BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ADg(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJU(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function E$(){var a=this;C5.call(a);a.nd=null;a.zl=0;a.mH=0;a.g$=0;a.qZ=0;a.yr=0.0;}
function Hb(a,b,c,d,e){var f=new E$();Ha(f,a,b,c,d,e);return f;}
function Ha(a,b,c,d,e,f){Fz(a,b);a.mH=0;a.qZ=5;a.yr=BP()*3.141592653589793*2.0;D1(a,0.25,0.25);a.c3=a.eM/2.0;CT(a,c,d,e);a.nd=f;a.v=BP()*360.0;a.g=BP()*0.20000000298023224-0.10000000149011612;a.i=0.20000000298023224;a.h=BP()*0.20000000298023224-0.10000000149011612;a.i7=0;}
function AJC(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.I_();if(C()){break _;}if(a.g$>0)a.g$=a.g$-1|0;a.bT=a.d;a.cR=a.j;a.bS=a.e;a.i=a.i-0.03999999910593033;b=a.m;c=K(a.d);d=K(a.j);e=K(a.e);$p=2;case 2:$z=ABX(b,c,d,e);if(C()){break _;}b=$z;if(b===BfP){a.i=0.20000000298023224;a.g=(N(a.n)-N(a.n))*0.20000000298023224;a.h=(N(a.n)-N(a.n))*0.20000000298023224;Dh(a.m,a,B(215),0.4000000059604645,
2.0+N(a.n)*0.4000000059604645);}f=a.d;g=a.j;h=a.e;$p=3;case 3:ACD(a,f,g,h);if(C()){break _;}$p=4;case 4:AEc(a);if(C()){break _;}f=a.g;g=a.i;h=a.h;$p=5;case 5:ARC(a,f,g,h);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}a.zl=a.zl+1|0;a.mH=a.mH+1|0;if(a.mH<6000)return;$p=6;case 6:Ca(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AEc(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.m;c=a.L;d=BfO;$p=1;case 1:$z=AAq(b,c,d,a);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ACD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=b-e;i=c-f;j=d-g;L();k=Bgy.data;l=a.m;$p=1;case 1:$z=ACt(l,e,f,g);if(C()){break _;}m=$z;if(!k[m])return 0;k=Bgy.data;l=a.m;m=e-1|0;$p=2;case 2:$z=ACt(l,m,f,g);if(C())
{break _;}m=$z;n=k[m]?0:1;k=Bgy.data;l=a.m;m=e+1|0;$p=3;case 3:$z=ACt(l,m,f,g);if(C()){break _;}m=$z;o=k[m]?0:1;k=Bgy.data;l=a.m;m=f-1|0;$p=4;case 4:$z=ACt(l,e,m,g);if(C()){break _;}m=$z;p=k[m]?0:1;k=Bgy.data;l=a.m;m=f+1|0;$p=5;case 5:$z=ACt(l,e,m,g);if(C()){break _;}m=$z;q=k[m]?0:1;k=Bgy.data;l=a.m;m=g-1|0;$p=6;case 6:$z=ACt(l,e,f,m);if(C()){break _;}m=$z;m=k[m]?0:1;k=Bgy.data;l=a.m;r=g+1|0;$p=7;case 7:$z=ACt(l,e,f,r);if(C()){break _;}e=$z;r=k[e]?0:1;s=(-1);t=9999.0;if(n&&h<t){s=0;t=h;}if(!o)b=t;else{b=1.0
-h;if(b<t)s=1;else b=t;}if(p&&i<b){s=2;b=i;}if(!q)c=b;else{c=1.0-i;if(c<b)s=3;else c=b;}if(m&&j<c){s=4;c=j;}if(r&&1.0-j<c)s=5;u=N(a.n)*0.20000000298023224+0.10000000149011612;if(!s)a.g= -u;if(s==1)a.g=u;if(s==2)a.i= -u;if(s==3)a.i=u;if(s==4)a.h= -u;if(s==5)a.h=u;return 0;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AMs(a,b){Vc(a,null,b);}
function Vc(a,b,c){a.qZ=a.qZ-c|0;if(a.qZ<=0)Ca(a);return 0;}
function A_c(a,b){if(!a.g$&&U6(b.K,a.nd)){Dh(a.m,a,B(585),0.20000000298023224,((N(a.n)-N(a.n))*0.699999988079071+1.0)*2.0);RS(b,a);Ca(a);}}
function Mo(){C5.call(this);this.ho=0;}
function AWM(a,b,c,d){var e=new Mo();A6x(e,a,b,c,d);return e;}
function A6x(a,b,c,d,e){var f,g,h;Fz(a,b);a.ho=0;a.mz=1;D1(a,0.9800000190734863,0.9800000190734863);a.c3=a.eM/2.0;f=c;g=d;h=e;CT(a,f,g,h);e=BP()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.g= -Bq(e)*0.019999999552965164;a.i=0.20000000298023224;a.h= -BC(e)*0.019999999552965164;a.i7=0;a.ho=80;a.bT=f;a.cR=g;a.bS=h;}
function A$c(a){return a.cQ?0:1;}
function XF(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARC(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}e=a.ho;a.ho=e-1|0;if(e>0){BV(a.m,B(256),a.d,a.j+0.5,a.e,0.0,
0.0,0.0);return;}$p=2;case 2:Ca(a);if(C()){break _;}f=4.0;g=a.m;h=null;b=a.d;c=a.j;d=a.e;$p=3;case 3:X7(g,h,b,c,d,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AOT(){Dg.call(this);this.wb=null;}
function Bam(){var a=new AOT();A7f(a);return a;}
function A7f(a){EH(a);a.wb=Kh();a.l8=0.5;}
function APv(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);if(b.ho-g+1.0<10.0){h=1.0-(b.ho-g+1.0)/10.0;if(h<0.0)h=0.0;if(h>1.0)h=1.0;f=h*h;i=1.0+f*f*0.30000001192092896;CC(i,i,i);}h=(1.0-(b.ho-g+1.0)/100.0)*0.800000011920929;j=B(179);$p=1;case 1:AKq(a,j);if(C()){break _;}j=a.wb;L();GW(j,Bfi);if(!((b.ho/5|0)%2|0)){Bb(3553);Bb(2896);Ba(3042);Df(770,772);BU(1.0,
1.0,1.0,h);GW(a.wb,Bfi);BU(1.0,1.0,1.0,1.0);Bb(3042);Ba(2896);Ba(3553);}BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AL4(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APv(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function JJ(){var a=this;C5.call(a);a.hS=0;a.oN=0;}
function AYg(a){return a.cQ?0:1;}
function AML(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.hS){$p=3;continue _;}a.bT=a.d;a.cR=a.j;a.bS=a.e;a.oN=a.oN+1|0;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARC(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=K(a.d);f=K(a.j);g=K(a.e);h=a.m;$p=2;case 2:$z=ACt(h,e,f,g);if(C()){break _;}i
=$z;if(i==a.hS){h=a.m;i=0;$p=4;continue _;}if(!a.cx){if(a.oN<=100)return;e=a.hS;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;continue _;case 3:Ca(a);if(C()){break _;}return;case 4:APu(h,e,f,g,i);if(C()){break _;}if(!a.cx){if(a.oN<=100)return;e=a.hS;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;case 5:Ca(a);if(C()){break _;}h=a.m;i=a.hS;j=1;$p=6;case 6:$z=AH9(h,i,e,f,g,j);if(C()){break _;}i=$z;if(!i){e=a.hS;f=1;$p=
9;continue _;}h=a.m;i=a.hS;$p=10;continue _;case 7:ABQ(a,e,f);if(C()){break _;}$p=8;case 8:Ca(a);if(C()){break _;}return;case 9:ABQ(a,e,f);if(C()){break _;}return;case 10:$z=APu(h,e,f,g,i);if(C()){break _;}e=$z;if(e)return;e=a.hS;f=1;$p=9;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AXX(a){return a.m;}
function AQL(){Dg.call(this);this.Dv=null;}
function Bae(){var a=new AQL();AXp(a);return a;}
function AXp(a){EH(a);a.Dv=Kh();a.l8=0.5;}
function AQf(a,b,c,d,e,f,g){var h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);h=B(179);$p=1;case 1:AKq(a,h);if(C()){break _;}L();h=BeN.data[b.hS];i=b.m;Bb(2896);j=a.Dv;k=K(b.d);l=K(b.j);m=K(b.e);$p=2;case 2:AIY(j,h,i,k,l,m);if(C()){break _;}Ba(2896);BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARi(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQf(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Gd(){var a=this;C5.call(a);a.Bm=null;a.iQ=0;a.ky=0;a.oM=0;a.kJ=0;}
var BlE=null;function ASO(a,b){return b.L;}
function AZ0(a){return a.L;}
function A7D(a){return 1;}
function AVL(a){return a.eM*0.2;}
function ALe(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oM= -a.oM;a.ky=10;a.iQ=a.iQ+(c*10|0)|0;if(a.iQ<=40)return 1;BB();c=BiF.cV;d=1;e=0.0;$p=1;case 1:AGE(a,c,d,e);if(C()){break _;}$p=2;case 2:APd(a);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,$p);}
function A9K(a){return a.cQ?0:1;}
function APd(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=27;while(b<c){d=TO(a,b);if(d!==null){e=N(a.n)*0.800000011920929+0.10000000149011612;f=N(a.n)*0.800000011920929+0.10000000149011612;g=N(a.n)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;if(d.q>0){k=E(a.n,21)+10|0;if(k>d.q)k=d.q;d.q=d.q-k|0;l=Hb(a.m,a.d+h,a.j+i,a.e+j,
Ol(d.bC,k,d.el));l.g=CY(a.n)*0.05000000074505806;l.i=CY(a.n)*0.05000000074505806+0.20000000298023224;l.h=CY(a.n)*0.05000000074505806;m=a.m;$p=2;continue _;}}b=b+1|0;}$p=1;case 1:Ca(a);if(C()){break _;}return;case 2:AOf(m,l);if(C()){break _;}a:while(true){if(d.q>0){k=E(a.n,21)+10|0;if(k>d.q)k=d.q;d.q=d.q-k|0;l=Hb(a.m,a.d+h,a.j+i,a.e+j,Ol(d.bC,k,d.el));l.g=CY(a.n)*0.05000000074505806;l.i=CY(a.n)*0.05000000074505806+0.20000000298023224;l.h=CY(a.n)*0.05000000074505806;m=a.m;continue _;}while(true){b=b+1|0;if(b>=
c)break a;d=TO(a,b);if(d===null)continue;else break;}e=N(a.n)*0.800000011920929+0.10000000149011612;f=N(a.n)*0.800000011920929+0.10000000149011612;g=N(a.n)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;}$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ASD(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ky>0)a.ky=a.ky-1|0;if(a.iQ>0)a.iQ=a.iQ-1|0;a.bT=a.d;a.cR=a.j;a.bS=a.e;a.i=a.i
-0.03999999910593033;b=K(a.d);c=K(a.j);d=K(a.e);e=a.m;f=c-1|0;$p=1;case 1:$z=ACt(e,b,f,d);if(C()){break _;}f=$z;L();if(f==Bg6.b)c=c+(-1)|0;g=0.4;h=0.0078125;e=a.m;$p=2;case 2:$z=ACt(e,b,c,d);if(C()){break _;}f=$z;if(f==Bg6.b){i=a.d;j=a.j;k=a.e;$p=3;continue _;}if(a.g<(-0.4))a.g=(-0.4);if(a.g>g)a.g=g;if(a.h<(-0.4))a.h=(-0.4);if(a.h>g)a.h=g;if(a.cx){a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;}i=a.g;j=a.i;k=a.h;$p=5;continue _;case 3:$z=ASh(a,i,j,k);if(C()){break _;}l=$z;e=a.m;$p=4;case 4:$z=AEH(e,b,c,d);if(C()){break _;}m
=$z;a.j=c;n=R(m,2);if(n>=0&&m<=5)a.j=c+1|0;if(!n)a.g=a.g-h;if(m==3)a.g=a.g+h;if(m==4)a.h=a.h+h;if(m==5)a.h=a.h-h;o=BlE.data[m].data;p=o[1].data[0]-o[0].data[0]|0;q=o[1].data[2]-o[0].data[2]|0;r=Ed(p*p+q*q);if(a.g*p+a.h*q<0.0){p= -p;q= -q;}s=Ed(a.g*a.g+a.h*a.h);a.g=s*p/r;a.h=s*q/r;t=b;u=t+0.5;v=u+o[0].data[0]*0.5;w=d;p=w+0.5;i=p+o[0].data[2]*0.5;j=u+o[1].data[0]*0.5;k=p+o[1].data[2]*0.5;j=j-v;k=k-i;if(j===0.0){a.d=u;u=a.e-w;}else if(k===0.0){a.e=p;u=a.d-t;}else u=((a.d-v)*j+(a.e-i)*k)*2.0;a.d=v+j*u;a.e=i+k*u;CT(a,
a.d,a.j+a.c3,a.e);x=a.g;t=a.h;if(a.bI!==null){x=x*0.75;t=t*0.75;}i=(-0.4);if(x<i)x=i;if(x>g)x=g;if(t>=i)i=t;if(i<=g)g=i;i=0.0;$p=7;continue _;case 5:ARC(a,i,j,k);if(C()){break _;}if(!a.cx){a.g=a.g*0.949999988079071;a.i=a.i*0.949999988079071;a.h=a.h*0.949999988079071;}a.J=0.0;y=a.bT-a.d;z=a.bS-a.e;if(y*y+z*z>0.001){a.v=CR(z,y)*180.0/3.141592653589793;if(a.kJ)a.v=a.v+180.0;}ba=a.v-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.v=a.v+180.0;a.kJ=a.kJ?0:1;}WN(a,
a.v,a.J);e=a.m;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADI(e,a,l);if(C()){break _;}bb=$z;if(bb!==null&&De(bb)>0){bc=0;while(true){if(bc>=De(bb))break a;bd=Z(bb,bc);if(bd!==a.bI&&bd.rN()&&bd instanceof Gd)bd.uV(a);bc=bc+1|0;}}}if(a.bI!==null&&a.bI.cQ)a.bI=null;return;case 7:ARC(a,x,i,g);if(C()){break _;}if(o[0].data[1]&&(K(a.d)-b|0)==o[0].data[0]&&(K(a.e)-d|0)==o[0].data[2])CT(a,a.d,a.j+o[0].data[1],a.e);else if(o[1].data[1]&&(K(a.d)-b|0)==o[1].data[0]&&(K(a.e)-d|0)==o[1].data[2])CT(a,
a.d,a.j+o[1].data[1],a.e);if(a.bI===null){a.g=a.g*0.9599999785423279;a.i=a.i*0.0;a.h=a.h*0.9599999785423279;}else{a.g=a.g*0.996999979019165;a.i=a.i*0.0;a.h=a.h*0.996999979019165;}i=a.d;j=a.j;k=a.e;$p=8;case 8:$z=ASh(a,i,j,k);if(C()){break _;}e=$z;if(e!==null&&l!==null){w=(l.z-e.z)*0.05;i=Ed(a.g*a.g+a.h*a.h);if(i>0.0){j=a.g/i;k=i+w;a.g=j*k;a.h=a.h/i*k;}CT(a,a.d,e.z,a.e);}f=K(a.d);n=K(a.e);if(!(f==b&&n==d)){i=Ed(a.g*a.g+a.h*a.h);a.g=i*(f-b|0);a.h=i*(n-d|0);}a.J=0.0;y=a.bT-a.d;z=a.bS-a.e;if(y*y+z*z>0.001){a.v=
CR(z,y)*180.0/3.141592653589793;if(a.kJ)a.v=a.v+180.0;}ba=a.v-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.v=a.v+180.0;a.kJ=a.kJ?0:1;}WN(a,a.v,a.J);e=a.m;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AJW(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=K(b);g=K(c);h=K(d);i=a.m;j=g-1|0;$p=1;case 1:$z=ACt(i,f,j,h);if(C()){break _;}j=$z;L();if(j==Bg6.b)g=g+(-1)|0;i=a.m;$p=2;case 2:$z=ACt(i,f,g,h);if(C()){break _;}j=$z;if(j!=Bg6.b)return null;i=a.m;$p=3;case 3:$z=AEH(i,f,g,h);if(C()){break _;}j=$z;c=g;if(j>=2&&j<=5)c
=g+1|0;k=BlE.data[j].data;l=k[1].data[0]-k[0].data[0]|0;m=k[1].data[2]-k[0].data[2]|0;n=Ed(l*l+m*m);l=l/n;m=m/n;l=b+l*e;d=d+m*e;if(k[0].data[1]&&(K(l)-f|0)==k[0].data[0]&&(K(d)-h|0)==k[0].data[2])c=c+k[0].data[1];else if(k[1].data[1]&&(K(l)-f|0)==k[1].data[0]&&(K(d)-h|0)==k[1].data[2])c=c+k[1].data[1];$p=4;case 4:$z=ASh(a,l,c,d);if(C()){break _;}i=$z;return i;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASh(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=a.m;i=f-1|0;$p=1;case 1:$z=ACt(h,e,i,g);if(C()){break _;}i=$z;L();if(i==Bg6.b)f=f+(-1)|0;h=a.m;$p=2;case 2:$z=ACt(h,e,f,g);if(C()){break _;}i=$z;if(i!=Bg6.b)return null;h
=a.m;$p=3;case 3:$z=AEH(h,e,f,g);if(C()){break _;}j=$z;c=f;k=BlE.data[j].data;l=e;m=l+0.5;n=m+k[0].data[0]*0.5;o=c+0.5;p=o+k[0].data[1]*0.5;q=g;r=q+0.5;s=r+k[0].data[2]*0.5;m=m+k[1].data[0]*0.5;t=o+k[1].data[1]*0.5;o=r+k[1].data[2]*0.5;r=m-n;u=(t-p)*2.0;v=o-s;l=r===0.0?d-q:v===0.0?b-l:((b-n)*r+(d-s)*v)*2.0;b=n+r*l;c=p+u*l;d=s+v*l;i=R(u,0.0);if(i<0)c=c+1.0;if(i>0)c=c+0.5;return BY(b,c,d);default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function A3N(a,b){var c,d,e,f,g,h;if(b!==a.bI){c=b.d-a.d;d=b.e-a.e;e=c*c+d*d;if(e>=9.999999747378752E-5){e=Ce(e);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;d=f*g;c=c*0.10000000149011612;d=d*0.10000000149011612;c=c*(1.0-a.n3);d=d*(1.0-a.n3);c=c*0.5;d=d*0.5;if(!(b instanceof Gd)){Hn(a, -c,0.0, -d);Hn(b,c/4.0,0.0,d/4.0);}else{f=(b.g+a.g)/2.0;h=(b.h+a.h)/2.0;a.h=0.0;a.g=0.0;Hn(a,f-c,0.0,h-d);b.h=0.0;b.g=0.0;Hn(b,f+c,0.0,h+d);}}}}
function A06(a){return 27;}
function TO(a,b){return a.Bm.data[b];}
function A8N(a,b){Pe(b,a);return 1;}
function AMG(){var b,c,d,e,f,g;b=J($rt_arraycls($rt_arraycls($rt_intcls())),10);c=b.data;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[0]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[1]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]
=(-1);g[1]=(-1);g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[2]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=(-1);g[2]=0;e[1]=f;c[3]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=(-1);g[2]=1;e[1]=f;c[4]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=(-1);g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[5]=d;g=J($rt_arraycls($rt_intcls()),2);e=g.data;d=$rt_createIntArray(3);f=d.data;f[0]=0;f[1]=0;f[2]=1;e[0]=d;d=$rt_createIntArray(3);f=d.data;f[0]=1;f[1]=0;f[2]=0;e[1]=d;c[6]=g;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[7]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[8]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[9]=d;BlE=b;}
function ARx(){Dg.call(this);this.CX=null;}
function Bb5(){var a=new ARx();A$f(a);return a;}
function A$f(a){EH(a);a.l8=0.5;a.CX=BcZ();}
function AQe(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();h=b.cr;i=b.d-b.cr;j=g;k=h+i*j;l=b.b7+(b.j-b.b7)*j;i=b.cs+(b.e-b.cs)*j;h=0.30000001192092896;$p=1;case 1:$z=ASh(b,k,l,i);if(C()){break _;}m=$z;n=b.T+(b.J-b.T)*g;if(m!==null){$p=2;continue _;}Bw(c,d,e);Bv(180.0
-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.ky-g;p=b.iQ-g;if(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oM,1.0,0.0,0.0);b=B(179);$p=4;continue _;case 2:$z=AJW(b,k,l,i,h);if(C()){break _;}q=$z;h=(-0.30000001192092896);$p=3;case 3:$z=AJW(b,k,l,i,h);if(C()){break _;}r=$z;if(q===null)q=m;if(r===null)r=m;c=c+m.x-k;d=d+(q.z+r.z)/2.0-l;e=e+m.w-i;s=Dk(r, -q.x, -q.z, -q.w);if(HM(s)!==0.0){s=CD(s);f=CR(s.w,s.x)*180.0/3.141592653589793;n=Io(s.z)*73.0;}Bw(c,d,e);Bv(180.0-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.ky-g;p=b.iQ-g;if
(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oM,1.0,0.0,0.0);b=B(179);$p=4;case 4:AKq(a,b);if(C()){break _;}CC(0.75,0.75,0.75);b=Kh();L();GW(b,BgV);CC(1.3333333730697632,1.3333333730697632,1.3333333730697632);b=B(587);$p=5;case 5:AKq(a,b);if(C()){break _;}CC((-1.0),(-1.0),1.0);AKr(a.CX,0.0,0.0,(-0.10000000149011612),0.0,0.0,0.0625);BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AQd(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQe(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function V3(){var a=this;D.call(a);a.uZ=Long_ZERO;a.t1=0;a.y8=0;}
function BlF(){var a=new V3();AT_(a);return a;}
function AT_(a){return;}
function ABz(){var a=this;D.call(a);a.wi=null;a.wB=null;}
function BbP(){var a=new ABz();AUk(a);return a;}
function AUk(a){a.wi=BK(0,0);BG(a.wi,(-12.0),(-14.0),(-1.0),24,12,2,0.0);a.wB=BK(0,14);BG(a.wB,(-1.0),(-2.0),(-1.0),2,14,2,0.0);}
function AM9(a){B_(a.wi,0.0625);B_(a.wB,0.0625);}
function AH5(){var a=this;Eh.call(a);a.lU=null;a.qP=null;a.rz=null;a.j8=null;a.j7=null;a.j$=null;a.j9=null;a.ka=null;a.j_=null;a.kc=null;a.kb=null;}
function A5l(){var a=new AH5();AUK(a);return a;}
function AUK(a){a.lU=BK(32,4);BG(a.lU,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BJ(a.lU,0.0,15.0,(-3.0));a.qP=BK(0,0);BG(a.qP,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BJ(a.qP,0.0,15.0,0.0);a.rz=BK(0,12);BG(a.rz,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BJ(a.rz,0.0,15.0,9.0);a.j8=BK(18,0);BG(a.j8,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j8,(-4.0),15.0,2.0);a.j7=BK(18,0);BG(a.j7,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j7,4.0,15.0,2.0);a.j$=BK(18,0);BG(a.j$,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j$,(-4.0),15.0,1.0);a.j9=BK(18,0);BG(a.j9,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BJ(a.j9,4.0,15.0,1.0);a.ka=BK(18,0);BG(a.ka,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.ka,(-4.0),15.0,0.0);a.j_=BK(18,0);BG(a.j_,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j_,4.0,15.0,0.0);a.kc=BK(18,0);BG(a.kc,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kc,(-4.0),15.0,(-1.0));a.kb=BK(18,0);BG(a.kb,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kb,4.0,15.0,(-1.0));}
function AX9(a,b,c,d,e,f,g){Yq(a,b,c,d,e,f,g);B_(a.lU,g);B_(a.qP,g);B_(a.rz,g);B_(a.j8,g);B_(a.j7,g);B_(a.j$,g);B_(a.j9,g);B_(a.ka,g);B_(a.j_,g);B_(a.kc,g);B_(a.kb,g);}
function Yq(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.lU.bY=e/57.2957763671875;a.lU.b1=f/57.2957763671875;a.j8.bV=(-0.7853981852531433);a.j7.bV=0.7853981852531433;a.j$.bV=(-0.5811946392059326);a.j9.bV=0.5811946392059326;a.ka.bV=(-0.5811946392059326);a.j_.bV=0.5811946392059326;a.kc.bV=(-0.7853981852531433);a.kb.bV=0.7853981852531433;a.j8.bY=0.7853981852531433;a.j7.bY=(-0.7853981852531433);a.j$.bY=0.39269909262657166;a.j9.bY=(-0.39269909262657166);a.ka.bY=(-0.39269909262657166);a.j_.bY=0.39269909262657166;a.kc.bY
=(-0.7853981852531433);a.kb.bY=0.7853981852531433;b=b*0.6661999821662903;f=b*2.0;h= -(BC(f+0.0)*0.4000000059604645)*c;i= -(BC(f+3.1415927410125732)*0.4000000059604645)*c;j= -(BC(f+1.5707963705062866)*0.4000000059604645)*c;k= -(BC(f+4.71238899230957)*0.4000000059604645)*c;l=HU(Bq(b+0.0)*0.4000000059604645)*c;m=HU(Bq(b+3.1415927410125732)*0.4000000059604645)*c;n=HU(Bq(b+1.5707963705062866)*0.4000000059604645)*c;o=HU(Bq(b+4.71238899230957)*0.4000000059604645)*c;p=a.j8;p.bY=p.bY+h;p=a.j7;p.bY=p.bY+ -h;p=a.j$;p.bY
=p.bY+i;p=a.j9;p.bY=p.bY+ -i;p=a.ka;p.bY=p.bY+j;p=a.j_;p.bY=p.bY+ -j;p=a.kc;p.bY=p.bY+k;p=a.kb;p.bY=p.bY+ -k;p=a.j8;p.bV=p.bV+l;p=a.j7;p.bV=p.bV+ -l;p=a.j$;p.bV=p.bV+m;p=a.j9;p.bV=p.bV+ -m;p=a.ka;p.bV=p.bV+n;p=a.j_;p.bV=p.bV+ -n;p=a.kc;p.bV=p.bV+o;p=a.kb;p.bV=p.bV+ -o;}
function AIz(){var a=this;Eh.call(a);a.l1=null;a.vq=null;a.sQ=null;a.pn=null;a.pm=null;a.pl=null;a.pk=null;}
function BaT(){var a=new AIz();A48(a);return a;}
function A48(a){a.l1=BK(0,0);BG(a.l1,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BJ(a.l1,0.0,4.0,0.0);a.vq=BK(32,0);BG(a.vq,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BJ(a.vq,0.0,4.0,0.0);a.sQ=BK(16,16);BG(a.sQ,(-4.0),0.0,(-2.0),8,12,4,0.0);BJ(a.sQ,0.0,4.0,0.0);a.pn=BK(0,16);BG(a.pn,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pn,(-2.0),16.0,4.0);a.pm=BK(0,16);BG(a.pm,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pm,2.0,16.0,4.0);a.pl=BK(0,16);BG(a.pl,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pl,(-2.0),16.0,(-4.0));a.pk=BK(0,16);BG(a.pk,(-2.0),0.0,(-2.0),4,6,4,
0.0);BJ(a.pk,2.0,16.0,(-4.0));}
function A21(a,b,c,d,e,f,g){Zo(a,b,c,d,e,f,g);B_(a.l1,g);B_(a.sQ,g);B_(a.pn,g);B_(a.pm,g);B_(a.pl,g);B_(a.pk,g);}
function Zo(a,b,c,d,e,f,g){var h;a.l1.bY=e/57.2957763671875;a.l1.b1=f/57.2957763671875;h=a.pn;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.pm;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.pl.b1=BC(d)*1.399999976158142*c;a.pk.b1=BC(b)*1.399999976158142*c;}
function AEU(){Eh.call(this);this.cY=null;}
function BcZ(){var a=new AEU();A3Z(a);return a;}
function A3Z(a){a.cY=J(QD,7);a.cY.data[0]=BK(0,10);a.cY.data[1]=BK(0,0);a.cY.data[2]=BK(0,0);a.cY.data[3]=BK(0,0);a.cY.data[4]=BK(0,0);a.cY.data[5]=BK(44,10);BG(a.cY.data[0],(-10.0),(-8.0),(-1.0),20,16,2,0.0);BJ(a.cY.data[0],0.0,4.0,0.0);BG(a.cY.data[5],(-9.0),(-7.0),(-1.0),18,14,1,0.0);BJ(a.cY.data[5],0.0,4.0,0.0);BG(a.cY.data[1],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cY.data[1],(-9.0),4.0,0.0);BG(a.cY.data[2],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cY.data[2],9.0,4.0,0.0);BG(a.cY.data[3],(-8.0),(-9.0),(-1.0),
16,8,2,0.0);BJ(a.cY.data[3],0.0,4.0,(-7.0));BG(a.cY.data[4],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cY.data[4],0.0,4.0,7.0);a.cY.data[0].b1=1.5707963705062866;a.cY.data[1].bY=4.71238899230957;a.cY.data[2].bY=1.5707963705062866;a.cY.data[3].bY=3.1415927410125732;a.cY.data[5].b1=(-1.5707963705062866);}
function AKr(a,b,c,d,e,f,g){var h;a.cY.data[5].m0=4.0-d;h=0;while(h<6){B_(a.cY.data[h],g);h=h+1|0;}}
function Tr(){var a=this;D.call(a);a.lF=0;a.yj=0;a.sn=0;a.nf=0;a.k8=null;}
function KB(a){return a.lF>=a.sn?0:1;}
function KS(a){var b,c;PD(a);a.nf=a.lF;b=a.k8;c=a.lF;a.lF=c+1|0;return Z(b,c);}
function AL$(a){var b;if(a.nf<0){b=new D2;O(b);M(b);}PD(a);En(a.k8,a.nf);a.yj=a.k8.d6;if(a.nf<a.lF)a.lF=a.lF-1|0;a.sn=a.sn-1|0;a.nf=(-1);}
function PD(a){var b;if(a.yj>=a.k8.d6)return;b=new KR;O(b);M(b);}
function I1(){var a=this;D.call(a);a.g0=null;a.tr=0;a.ck=null;a.hL=null;a.gW=null;a.hZ=null;a.eg=null;a.nZ=0;a.fZ=0;a.fU=0;a.iU=null;a.dL=null;a.gy=0;a.dW=0;a.p$=0;a.Eh=0;a.r7=0;a.s2=Long_ZERO;}
var Bko=0;function BaJ(a,b,c){var d=new I1();AQ$(d,a,b,c);return d;}
function A9q(a,b,c,d){var e=new I1();A1v(e,a,b,c,d);return e;}
function AQ$(a,b,c,d){var e;a.iU=Dd();a.dL=J(J2,8);a.gy=0;a.dW=0;a.Eh=0;a.r7=0;a.s2=Long_ZERO;a.ck=b;a.fZ=c;a.fU=d;a.eg=$rt_createByteArray(256);e=0;while(e<a.dL.data.length){a.dL.data[e]=Ci();e=e+1|0;}}
function A1v(a,b,c,d,e){var f;f=c.data;AQ$(a,b,d,e);a.g0=c;b=new T4;d=f.length;AJz(b,d);a.hL=b;a.gW=Jf(d);a.hZ=Jf(d);}
function ARE(a,b,c){return b==a.fZ&&c==a.fU?1:0;}
function UG(a,b,c){return a.eg.data[c<<4|b]&255;}
function A5G(a){return;}
function AFK(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=127;c=0;while(true){if(c>=16){a.nZ=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b=b+1|0;}a.dW=1;return;}e=0;if(e<16)break;c=c+1|0;}f=a.eg.data;d=e<<4|c;f[d]=(-128);g=127;$p=1;case 1:ACX(a,c,g,e);if(C()){break _;}if((a.eg.data[d]&255)<b)b=a.eg.data[d]&255;e=e+1|0;while(e>=16){c=c+1|0;if(c>=16){a.nZ=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b
=b+1|0;}a.dW=1;return;}e=0;}f=a.eg.data;d=e<<4|c;f[d]=(-128);g=127;continue _;case 2:AEW(a,b,d);if(C()){break _;}d=d+1|0;while(true){if(d<16){continue _;}b=b+1|0;if(b>=16)break;d=0;}a.dW=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEW(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=UG(a,b,c);e=(a.fZ*16|0)+b|0;f=(a.fU*16|0)+c|0;b=e-1|0;$p=1;case 1:AJG(a,b,f,d);if(C()){break _;}b=e+1|0;$p=2;case 2:AJG(a,b,f,d);if(C()){break _;}b=f-1|0;$p=3;case 3:AJG(a,e,b,d);if(C()){break _;}b=f+1|0;$p=4;case 4:AJG(a,e,b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJG(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.ck;$p=1;case 1:$z=ALE(e,b,c);if(C()){break _;}f=$z;g=R(f,d);if(g>0){e=a.ck;h=Bku;$p=2;continue _;}if(g>=0){a.dW=1;return;}e=a.ck;h=Bku;$p=3;continue _;case 2:Y5(e,h,b,d,c,b,f,c);if(C()){break _;}a.dW=1;return;case 3:Y5(e,h,b,f,c,b,d,c);if(C()){break _;}a.dW=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ACX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.eg.data;f=d<<4|b;g=e[f]&255;if(c<=g)c=g;while(c>0){L();if(Bgz.data[ET(a,b,c-1|0,d)])break;c=c+(-1)|0;}h=R(c,g);if(h){APG(a.ck,b,d,c,g);a.eg.data[f]=c<<24>>24;if(c<a.nZ)a.nZ=c;else{f=127;i=0;while(i<16){j=0;while(j<16){e=a.eg.data;k=j<<4|i;if((e[k]&255)<f)f=a.eg.data[k]
&255;j=j+1|0;}i=i+1|0;}a.nZ=f;}f=(a.fZ*16|0)+b|0;i=(a.fU*16|0)+d|0;if(h>=0){l=a.ck;m=Bku;$p=1;continue _;}j=c;while(j<g){Ek(a.gW,b,j,d,15);j=j+1|0;}j=15;k=c;a:{while(k>0){if(j<=0)break a;k=k+(-1)|0;L();n=Bgz.data[ET(a,b,k,d)];if(!n)n=1;j=j-n|0;if(j<0)j=0;Ek(a.gW,b,k,d,j);}}while(k>0){L();if(Bgz.data[ET(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k!=c){l=a.ck;m=Bku;d=f-1|0;j=i-1|0;f=f+1|0;b=i+1|0;$p=2;continue _;}a.dW=1;}return;case 1:Y5(l,m,f,g,i,f,c,i);if(C()){break _;}while(g<c){Ek(a.gW,b,g,d,0);g=g+1|0;}j=15;k=c;b:
{while(k>0){if(j<=0)break b;k=k+(-1)|0;L();n=Bgz.data[ET(a,b,k,d)];if(!n)n=1;j=j-n|0;if(j<0)j=0;Ek(a.gW,b,k,d,j);}}while(k>0){L();if(Bgz.data[ET(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k==c){a.dW=1;return;}l=a.ck;m=Bku;d=f-1|0;j=i-1|0;f=f+1|0;b=i+1|0;$p=2;case 2:Y5(l,m,d,k,j,f,c,b);if(C()){break _;}a.dW=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ET(a,b,c,d){return a.g0.data[b<<11|d<<7|c];}
function ADC(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e<<24>>24;h=a.eg.data[d<<4|b]&255;i=a.g0.data;j=b<<11|d<<7|c;k=i[j]&255;if(k==e)return 0;l=(a.fZ*16|0)+b|0;m=(a.fU*16|0)+d|0;a.g0.data[j]=g;if(k){L();n=BeN.data[k];o=a.ck;$p=1;continue _;}a:{Ek(a.hL,b,c,d,f);L();if(!Bgz.data[g]){if(c!=(h-1|0))break a;$p
=5;continue _;}if(c>=h){f=c+1|0;$p=6;continue _;}}n=a.ck;o=Bku;$p=2;continue _;case 1:n.lv(o,l,c,m);if(C()){break _;}b:{Ek(a.hL,b,c,d,f);L();if(!Bgz.data[g]){if(c!=(h-1|0))break b;$p=5;continue _;}if(c>=h){f=c+1|0;$p=6;continue _;}}n=a.ck;o=Bku;$p=2;case 2:Y5(n,o,l,c,m,l,c,m);if(C()){break _;}n=a.ck;o=Bkv;$p=3;case 3:Y5(n,o,l,c,m,l,c,m);if(C()){break _;}$p=4;case 4:AEW(a,b,d);if(C()){break _;}if(!e){a.dW=1;return 1;}n=BeN.data[e];o=a.ck;$p=7;continue _;case 5:ACX(a,b,c,d);if(C()){break _;}n=a.ck;o=Bku;$p=2;continue _;case 6:ACX(a,
b,f,d);if(C()){break _;}n=a.ck;o=Bku;$p=2;continue _;case 7:n.fC(o,l,c,m);if(C()){break _;}a.dW=1;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ADz(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=e<<24>>24;g=a.eg.data[d<<4|b]&255;h=a.g0.data;i=b<<11|d<<7|c;j=h[i]&255;if(j==e)return 0;k=(a.fZ*16|0)+b|0;l=(a.fU*16|0)+d|0;a.g0.data[i]=f;if(j){L();m=BeN.data[j];n=a.ck;$p=1;continue _;}a:{Ek(a.hL,b,c,d,0);L();if(!Bgz.data[f]){if(c!=(g-1|0))break a;$p=5;continue _;}if
(c>=g){i=c+1|0;$p=6;continue _;}}m=a.ck;n=Bku;$p=2;continue _;case 1:m.lv(n,k,c,l);if(C()){break _;}b:{Ek(a.hL,b,c,d,0);L();if(!Bgz.data[f]){if(c!=(g-1|0))break b;$p=5;continue _;}if(c>=g){i=c+1|0;$p=6;continue _;}}m=a.ck;n=Bku;$p=2;case 2:Y5(m,n,k,c,l,k,c,l);if(C()){break _;}m=a.ck;n=Bkv;$p=3;case 3:Y5(m,n,k,c,l,k,c,l);if(C()){break _;}$p=4;case 4:AEW(a,b,d);if(C()){break _;}if(!e){a.dW=1;return 1;}m=BeN.data[e];n=a.ck;$p=7;continue _;case 5:ACX(a,b,c,d);if(C()){break _;}m=a.ck;n=Bku;$p=2;continue _;case 6:ACX(a,
b,i,d);if(C()){break _;}m=a.ck;n=Bku;$p=2;continue _;case 7:m.fC(n,k,c,l);if(C()){break _;}a.dW=1;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function RO(a,b,c,d){return Ij(a.hL,b,c,d);}
function AAs(a,b,c,d,e){a.dW=1;Ek(a.hL,b,c,d,e);}
function ACi(a,b,c,d,e){return b===Bku?Ij(a.gW,c,d,e):b!==Bkv?0:Ij(a.hZ,c,d,e);}
function AQK(a,b,c,d,e,f){a.dW=1;if(b===Bku)Ek(a.gW,c,d,e,f);else{if(b!==Bkv)return;Ek(a.hZ,c,d,e,f);}}
function VK(a,b,c,d,e){var f,g;f=Ij(a.gW,b,c,d);if(f>0)Bko=1;e=f-e|0;g=Ij(a.hZ,b,c,d);if(g<=e)g=e;return g;}
function VN(a,b){var c,d,e,f,g;a.r7=1;c=K(b.d/16.0);d=K(b.e/16.0);if(!(c==a.fZ&&d==a.fU)){e=DT();f=new T;W(f);Cg(e,U(FK(H(f,B(588)),b)));}g=K(b.j/16.0);if(g<0)g=0;if(g>=a.dL.data.length)g=a.dL.data.length-1|0;S(a.dL.data[g],b);}
function AMY(a,b){RX(a,b,K(b.j/16.0));}
function RX(a,b,c){var d,e;if(c<0)c=0;if(c>=a.dL.data.length)c=a.dL.data.length-1|0;if(!Q2(a.dL.data[c],b)){d=DT();e=new T;W(e);Cg(d,U(FK(H(e,B(589)),b)));}H5(a.dL.data[c],b);}
function Pi(a,b,c,d){return c<(a.eg.data[d<<4|b]&255)?0:1;}
function ANm(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;f=CP(a.iU,CX(e));if(f!==null)return f;g=ET(a,b,c,d);L();h=BeN.data[g];f=a.ck;b=(a.fZ*16|0)+b|0;d=(a.fU*16|0)+d|0;$p=1;case 1:h.fC(f,b,c,d);if(C()){break _;}return CP(a.iU,CX(e));default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AJi(a,b,c,d,e){var f;a:{f=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;e.ch=a.ck;e.dJ=(a.fZ*16|0)+b|0;e.dH=c;e.dP=(a.fU*16|0)+d|0;if(ET(a,b,c,d)){L();if(BeN.data[ET(a,b,c,d)] instanceof Eg){if(a.tr){if(CP(a.iU,CX(f))!==null)H5(a.ck.fB,CP(a.iU,CX(f)));S(a.ck.fB,e);}BR(a.iU,CX(f),e);break a;}}Cg(DT(),B(590));}}
function ADX(a,b,c,d){var e;e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;if(a.tr)H5(a.ck.fB,Q3(a.iU,CX(e)));}
function JZ(a){var b;a.tr=1;DC(a.ck.fB,Ip(a.iU));b=0;while(b<a.dL.data.length){AQb(a.ck,a.dL.data[b]);b=b+1|0;}}
function AOL(a){var b;a.tr=0;Ga(a.ck.fB,Ip(a.iU));b=0;while(b<a.dL.data.length){AQ1(a.ck,a.dL.data[b]);b=b+1|0;}}
function SF(a){a.dW=1;}
function AJZ(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dL.data.length)f=a.dL.data.length-1|0;while(e<=f){g=a.dL.data[e];h=0;while(h<g.p){i=Z(g,h);if(i!==b&&L5(i.L,c))S(d,i);h=h+1|0;}e=e+1|0;}}
function AMh(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dL.data.length)f=a.dL.data.length-1|0;while(e<=f){g=a.dL.data[e];h=0;while(h<g.p){i=Z(g,h);if(P2(b,Dl(i))&&L5(i.L,c))S(d,i);h=h+1|0;}e=e+1|0;}}
function Km(a,b){return a.p$?0:a.r7&&Long_ne(a.ck.ec,a.s2)?1:a.dW;}
function Iq(){var a=this;D.call(a);a.jl=0;a.iu=0;a.ku=null;a.xX=null;}
function BlG(a,b,c,d,e,f,g){var h=new Iq();AEs(h,a,b,c,d,e,f,g);return h;}
function AEs(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.xX=b;a.jl=c>>4;a.iu=e>>4;i=f>>4;j=h>>4;a.ku=$rt_createMultiArray($rt_arraycls($rt_arraycls(I1)),[(j-a.iu|0)+1|0,(i-a.jl|0)+1|0]);k=a.jl;while(k<=i){l=a.iu;if(l<=j){m=a.ku.data[k-a.jl|0].data;c=l-a.iu|0;$p=1;continue _;}k=k+1|0;}return;case 1:$z=ZR(b,k,l);if(C()){break _;}n
=$z;m[c]=n;l=l+1|0;while(true){if(l<=j){m=a.ku.data[k-a.jl|0].data;c=l-a.iu|0;continue _;}k=k+1|0;if(k>i)break;l=a.iu;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Hw(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jl|0;f=(d>>4)-a.iu|0;return ET(a.ku.data[e].data[f],b&15,c,d&15);}
function AFT(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b>>4)-a.jl|0;f=(d>>4)-a.iu|0;g=a.ku.data[e].data[f];e=b&15;b=d&15;$p=1;case 1:$z=ANm(g,e,c,b);if(C()){break _;}g=$z;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAL(a,b,c,d){return Bkr.data[Z3(a,b,c,d)];}
function Z3(a,b,c,d){return GS(a,b,c,d,1);}
function GS(a,b,c,d,e){var f,g,h,i,j,k;if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){a:{if(e){f=Hw(a,b,c,d);L();if(f==BeS.b)break a;if(f==Bg1.b)break a;}if(c<0)return 0;if(c>=128){f=15-a.xX.gh|0;if(f<0)f=0;return f;}f=(b>>4)-a.jl|0;g=(d>>4)-a.iu|0;return VK(a.ku.data[f].data[g],b&15,c,d&15,a.xX.gh);}g=GS(a,b,c+1|0,d,0);h=GS(a,b+1|0,c,d,0);i=GS(a,b-1|0,c,d,0);j=GS(a,b,c,d+1|0,0);k=GS(a,b,c,d-1|0,0);if(h<=g)h=g;if(i<=h)i=h;if(j<=i)j=i;if(k<=j)k=j;return k;}return 15;}
function AC3(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jl|0;f=(d>>4)-a.iu|0;return RO(a.ku.data[e].data[f],b&15,c,d&15);}
function N1(a,b,c,d){var e,f;e=Hw(a,b,c,d);if(!e)f=Bf9;else{L();f=BeN.data[e].b$;}return f;}
function AB3(a,b,c,d){var e;L();e=BeN.data[Hw(a,b,c,d)];return e!==null?e.d4():0;}
function Gg(){BE.call(this);}
function BlH(){var a=new Gg();A$d(a);return a;}
function A$d(a){O(a);}
function UP(){Gg.call(this);}
function BlI(){var a=new UP();A6K(a);return a;}
function A6K(a){O(a);}
function U$(){D.call(this);}
var BlJ=null;function BlK(){var a=new U$();AO4(a);return a;}
function AO4(a){return;}
function AIG(){var b,c;b=$rt_createIntArray(12);c=b.data;c[0]=1;c[1]=4;c[2]=2;c[3]=1024;c[4]=8;c[5]=16;c[6]=128;c[7]=64;c[8]=32;c[9]=256;c[10]=2048;c[11]=512;BlJ=b;}
function PH(){Gj.call(this);this.wa=null;}
function A0n(a,b){return AEa(a.wa,b);}
function Nc(a){var b;b=new U7;Vv(b,a.wa);return b;}
function Tn(){D.call(this);this.Jg=null;}
function AOt(a){Bd();BdD.requestPointerLock();MS(0);}
function A_v(a){AOt(a);}
function AQE(){D.call(this);}
function BlL(){var a=new AQE();A3$(a);return a;}
function A3$(a){return;}
function WS(){var a=this;D$.call(a);a.cu=null;a.gU=0;a.pR=0;a.kQ=0;}
function BaA(){var a=new WS();AU$(a);return a;}
function AU$(a){a.cu=J(Cd,3);a.gU=0;a.pR=0;a.kQ=0;}
function A9n(a,b){return a.cu.data[b];}
function A8g(a,b,c){var d;if(a.cu.data[b]===null)return null;if(a.cu.data[b].q<=c){d=a.cu.data[b];a.cu.data[b]=null;return d;}d=EF(a.cu.data[b],c);if(!a.cu.data[b].q)a.cu.data[b]=null;return d;}
function AVp(a,b,c){a.cu.data[b]=c;if(c!==null&&c.q>64)c.q=64;}
function AT3(a){return 64;}
function AOJ(a,b){return Bj(a.kQ,b)/200|0;}
function ADH(a,b){if(!a.pR)a.pR=200;return Bj(a.gU,b)/a.pR|0;}
function WI(a){return a.gU<=0?0:1;}
function AGD(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gU<=0?0:1;c=0;if(a.gU>0){a.gU=a.gU-1|0;c=1;}if(!a.gU&&Of(a)){d=a.cu.data[1];if(d===null)e=0;else a:{f=DK(d).cV;if(f<256){L();if(BeN.data[f].b$===Bg$){e=300;break a;}}BB();e=f==Bh3.cV?100:f!=Bhy.cV?0:1600;}a.gU=e;a.pR=e;if(a.gU>0){c=1;if(a.cu.data[1]!==null){d=a.cu.data[1];d.q=d.q-1|0;if(!a.cu.data[1].q)a.cu.data[1]
=null;}}}if(WI(a)&&Of(a)){a.kQ=a.kQ+1|0;if(a.kQ==200){a.kQ=0;ADv(a);c=1;}}else a.kQ=0;if(b==(a.gU<=0?0:1)){if(!c)return;d=a.ch;e=a.dJ;b=a.dH;c=a.dP;$p=1;continue _;}c=1;b=a.gU<=0?0:1;g=a.ch;f=a.dJ;h=a.dH;i=a.dP;$p=2;continue _;case 1:AGs(d,e,b,c);if(C()){break _;}return;case 2:$z=AEH(g,f,h,i);if(C()){break _;}e=$z;$p=3;case 3:$z=ANv(g,f,h,i);if(C()){break _;}j=$z;if(!b){L();b=Bg2.b;$p=4;continue _;}L();b=Bg3.b;$p=5;continue _;case 4:APu(g,f,h,i,b);if(C()){break _;}$p=6;continue _;case 5:APu(g,f,h,i,b);if(C())
{break _;}$p=6;case 6:AKu(g,f,h,i,e);if(C()){break _;}$p=7;case 7:AFS(g,f,h,i,j);if(C()){break _;}if(!c)return;d=a.ch;e=a.dJ;b=a.dH;c=a.dP;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Of(a){var b,c;if(a.cu.data[0]===null)return 0;b=US(a,DK(a.cu.data[0]).cV);if(b<0)b=0;else if(a.cu.data[2]===null)b=1;else if(a.cu.data[2].bC!=b)b=0;else if(a.cu.data[2].q<64&&a.cu.data[2].q<EB(a.cu.data[2]))b=1;else{c=a.cu.data[2].q;BB();b=c>=Bhc.data[b].eX?0:1;}return b;}
function ADv(a){var b,c;if(Of(a)){b=US(a,DK(a.cu.data[0]).cV);if(a.cu.data[2]===null)a.cu.data[2]=Ky(b,1);else if(a.cu.data[2].bC==b){c=a.cu.data[2];c.q=c.q+1|0;}c=a.cu.data[0];c.q=c.q-1|0;if(a.cu.data[0].q<=0)a.cu.data[0]=null;}}
function US(a,b){L();if(b==Bfd.b){BB();b=BhO.cV;}else if(b==Bfe.b){BB();b=BhP.cV;}else if(b==BgX.b){BB();b=Bhz.cV;}else if(b==Be$.b)b=Be3.b;else{BB();b=b==Bge.cV?Biy.cV:b!=BeX.b?(-1):BeT.b;}return b;}
function Z1(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dJ;d=a.dH;e=a.dP;$p=1;case 1:AGs(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function S_(){D$.call(this);this.hX=null;}
function Bbe(){var a=new S_();A16(a);return a;}
function A16(a){a.hX=J(Cd,36);}
function AVJ(a){return 27;}
function Q9(a,b){return a.hX.data[b];}
function A1Q(a,b,c){var d;if(a.hX.data[b]===null)return null;if(a.hX.data[b].q<=c){d=a.hX.data[b];a.hX.data[b]=null;return d;}d=EF(a.hX.data[b],c);if(!a.hX.data[b].q)a.hX.data[b]=null;return d;}
function AHy(a,b,c){a.hX.data[b]=c;if(c!==null&&c.q>64)c.q=64;}
function A8z(a){return B(263);}
function A7j(a){return 64;}
function CQ(){D.call(this);this.gp=null;}
function BlM(){var a=new CQ();Cw(a);return a;}
function Cw(a){a.gp=null;}
function VE(a){return a.gp!==null?a.gp:B(3);}
function AXB(a,b){a.gp=b;return a;}
function MR(b){var c,d;c=NV(b);if(!c){b=new NW;Cw(b);return b;}d=AE4(c);d.gp=GU(b);d.gE(b);return d;}
function RU(b,c){KJ(c,b.fa());if(b.fa()){Xm(c,VE(b));b.gL(c);}}
function AE4(b){var c;switch(b){case 0:c=new NW;Cw(c);return c;case 1:c=new Mt;Cw(c);return c;case 2:c=new MT;Cw(c);return c;case 3:c=new Li;Cw(c);return c;case 4:c=new N8;Cw(c);return c;case 5:c=new Pd;Cw(c);return c;case 6:c=new Mm;Cw(c);return c;case 7:c=new MD;Cw(c);return c;case 8:c=new OB;Cw(c);return c;case 9:return L8();case 10:return G8();default:}return null;}
function APM(){CQ.call(this);this.cK=null;}
function G8(){var a=new APM();A8I(a);return a;}
function A8I(a){Cw(a);a.cK=Dd();}
function A7a(a,b){var c;c=Nc(Ip(a.cK));while(F8(c)){RU(Md(c),b);}KJ(b,0);}
function A9h(a,b){var c;U5(a.cK);while(true){c=MR(b);if(!c.fa())break;BR(a.cK,VE(c),c);}}
function A6$(a){return 10;}
function HC(a,b,c){var d;d=a.cK;c.gp=b;BR(d,b,c);}
function JH(a,b,c){var d,e;d=a.cK;e=new Mt;Cw(e);e.tp=c;e.gp=b;BR(d,b,e);}
function Fq(a,b,c){var d,e;d=a.cK;e=new MT;Cw(e);e.tj=c;e.gp=b;BR(d,b,e);}
function Gv(a,b,c){var d,e;d=a.cK;e=new Li;Cw(e);e.r2=c;e.gp=b;BR(d,b,e);}
function H9(a,b,c){var d,e;d=a.cK;e=new N8;Cw(e);e.sX=c;e.gp=b;BR(d,b,e);}
function AR4(a,b,c){var d,e;d=a.cK;e=A6P(c);e.gp=b;BR(d,b,e);}
function IL(a,b,c){var d,e;d=a.cK;e=new MD;Cw(e);e.mj=c;e.gp=b;BR(d,b,e);}
function ANR(a,b,c){var d;d=a.cK;c.gp=b;BR(d,b,c);}
function SU(a,b,c){JH(a,b,(!c?0:1)<<24>>24);}
function YW(a,b){return DZ(a.cK,b);}
function LA(a,b){return !DZ(a.cK,b)?0:CP(a.cK,b).tp;}
function FH(a,b){return !DZ(a.cK,b)?0:CP(a.cK,b).tj;}
function FS(a,b){return !DZ(a.cK,b)?0:CP(a.cK,b).r2;}
function Mb(a,b){return !DZ(a.cK,b)?Long_ZERO:CP(a.cK,b).sX;}
function AMD(a,b){return !DZ(a.cK,b)?0.0:CP(a.cK,b).ni;}
function IE(a,b){return !DZ(a.cK,b)?$rt_createByteArray(0):CP(a.cK,b).mj;}
function Mv(a,b){return !DZ(a.cK,b)?G8():CP(a.cK,b);}
function Kg(a,b){return !DZ(a.cK,b)?L8():CP(a.cK,b);}
function Um(a,b){return !LA(a,b)?0:1;}
function PZ(){B6.call(this);}
function BlN(){var a=new PZ();A$5(a);return a;}
function A$5(a){O(a);}
function SD(){B6.call(this);}
function BlO(){var a=new SD();AYK(a);return a;}
function AYK(a){O(a);}
function RT(){GY.call(this);this.Br=0;}
function AVN(a){var b;b=new T;W(b);return U(Be(H(b,B(591)),a.Br));}
function PV(){GY.call(this);this.EI=0;}
function AVg(a){var b;b=new T;W(b);return U(Be(H(b,B(592)),a.EI));}
function II(){var a=this;D.call(a);a.l3=0;a.ri=0;a.lA=null;a.hi=null;a.sl=null;a.is=null;}
function BlP(a){var b=new II();Vv(b,a);return b;}
function Vv(a,b){a.is=b;a.ri=b.g7;a.lA=null;}
function F8(a){if(a.lA!==null)return 1;while(a.l3<a.is.cN.data.length){if(a.is.cN.data[a.l3]!==null)return 1;a.l3=a.l3+1|0;}return 0;}
function Ur(a){var b;if(a.ri==a.is.g7)return;b=new KR;O(b);M(b);}
function V8(a){var b,c,d;Ur(a);if(!F8(a)){b=new JY;O(b);M(b);}if(a.lA===null){c=a.is.cN.data;d=a.l3;a.l3=d+1|0;a.hi=c[d];a.lA=a.hi.eC;a.sl=null;}else{if(a.hi!==null)a.sl=a.hi;a.hi=a.lA;a.lA=a.lA.eC;}}
function ADO(a){var b,c;Ur(a);if(a.hi===null){b=new D2;O(b);M(b);}if(a.sl!==null)a.sl.eC=a.hi.eC;else{c=a.hi.pS&(a.is.cN.data.length-1|0);a.is.cN.data[c]=a.is.cN.data[c].eC;}a.hi=null;a.ri=a.ri+1|0;b=a.is;b.g7=b.g7+1|0;b=a.is;b.f8=b.f8-1|0;}
function U7(){II.call(this);}
function Md(a){V8(a);return a.hi.e4;}
function Wp(){var a=this;D.call(a);a.Ai=null;a.Es=null;a.v9=0;a.qF=0;}
function NJ(a){return Fl(a.Ai);}
function AJm(a,b){return Ct(a.Es)<b?0:1;}
function A$A(a,b){a.v9=b;}
function A9f(a,b){a.qF=b;}
function AEx(){var a=this;CS.call(a);a.o8=null;a.yE=null;a.lK=null;}
function AIL(a,b){var c=new AEx();A1x(c,a,b);return c;}
function A1x(a,b,c){DQ(a);a.yE=B(593);a.o8=b;a.lK=c;}
function ARY(a){var b,c,d;b=0;while(b<a.lK.zL){c=a.bH;d=Sc(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bE/6|0)+(24*(b>>1)|0)|0,QT(a.lK,b));S(c,d);if(a.I.l.bw&&!(b!=5&&b!=6&&b!=9))d.gB=0;b=b+1|0;}S(a.bH,Dj(100,(a.bm/2|0)-100|0,((a.bE/6|0)+120|0)+22|0,B(594)));S(a.bH,Dj(200,(a.bm/2|0)-100|0,(a.bE/6|0)+168|0,B(595)));}
function ADU(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gB){if(b.cl<100){Ea(a.lK,b.cl,1);b.kj=QT(a.lK,b.cl);if(b.cl==10){c=a.I;d=AIL(a.o8,a.I.l);$p=2;continue _;}}if(b.cl==100){c=a.I;d=new NK;e=a.lK;DQ(d);d.uc=B(596);d.jt=(-1);d.uz=a;d.iM=e;$p=1;continue _;}if(b.cl==200){b=a.I;c=a.o8;$p=3;continue _;}}return;case 1:ADS(c,d);if(C()){break _;}if(b.cl!=200)return;b=a.I;c=a.o8;$p=3;continue _;case 2:ADS(c,d);if(C())
{break _;}if(b.cl!=100){if(b.cl!=200)return;b=a.I;c=a.o8;$p=3;continue _;}c=a.I;d=new NK;e=a.lK;DQ(d);d.uc=B(596);d.jt=(-1);d.uz=a;d.iM=e;$p=1;continue _;case 3:ADS(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AGa(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DD(a,a.b0,a.yE,a.bm/2|0,20,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function Ou(){var a=this;CS.call(a);a.ox=null;a.ys=null;a.xB=0;}
function A$V(a){var b=new Ou();AEd(b,a);return b;}
function AEd(a,b){DQ(a);a.ys=B(597);a.xB=0;a.ox=b;}
function APs(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=5){a.s5();return;}c=new T;W(c);c=H(c,B(598));d=b+1|0;c=U(Be(c,d));$p=1;case 1:$z=AR_(c);if(C()){break _;}c=$z;if(c!==null){c=new T;W(c);e=U(Be(H(c,B(599)),d));c=new T;W(c);f=U(H(Be(H(c,B(598)),d),B(354)));Bd();c=BeD;$p=2;continue _;}S(a.bH,Dj(b,(a.bm/2|0)-100|0,(a.bE/6|0)+(24*b|0)|0,B(600)));b=d;if(b>=5){a.s5();return;}c=new T;W(c);c
=H(c,B(598));d=b+1|0;c=U(Be(c,d));continue _;case 2:$z=A_I(c,f);if(C()){break _;}c=$z;g=c===null?(-1):c.byteLength;c=new T;W(c);f=U(H(AKo(H(H(c,e),B(601)),g/100.0),B(602)));S(a.bH,Dj(b,(a.bm/2|0)-100|0,(a.bE/6|0)+(24*b|0)|0,f));b=d;if(b>=5){a.s5();return;}c=new T;W(c);c=H(c,B(598));d=b+1|0;c=U(Be(c,d));$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ANq(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=new T;W(c);c=U(Be(H(c,B(598)),b));$p=1;case 1:$z=AR_(c);if(C()){break _;}c=$z;if(c===null)c=null;else{c=new T;W(c);c=U(Be(H(c,B(598)),b));}return c;default:E_();}}C3().s(a,b,c,$p);}
function AXy(a){S(a.bH,Dj(5,(a.bm/2|0)-100|0,((a.bE/6|0)+120|0)+12|0,B(603)));S(a.bH,Dj(6,(a.bm/2|0)-100|0,(a.bE/6|0)+168|0,B(604)));}
function ASu(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gB){if(b.cl<5){c=b.cl+1|0;$p=1;continue _;}if(b.cl==5){b=a.I;d=new UU;AEd(d,a);d.ys=B(605);$p=2;continue _;}if(b.cl==6){b=a.I;d=a.ox;$p=3;continue _;}}return;case 1:a.IN(c);if(C()){break _;}return;case 2:ADS(b,d);if(C()){break _;}return;case 3:ADS(b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AKM(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I;d=null;$p=1;case 1:ADS(c,d);if(C()){break _;}if(a.xB)return;a.xB=1;d=a.I;c=new T;W(c);c=U(Be(H(c,B(598)),b));$p=2;case 2:AHV(d,c);if(C()){break _;}d=a.I;c=null;$p=3;case 3:ADS(d,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AEA(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DD(a,a.b0,a.ys,a.bm/2|0,20,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function LX(){Gg.call(this);}
function BlQ(){var a=new LX();A68(a);return a;}
function A68(a){O(a);}
function S6(){Gg.call(this);}
function BlR(){var a=new S6();A$E(a);return a;}
function A$E(a){O(a);}
function ALt(){D.call(this);}
function BlS(){var a=new ALt();A7m(a);return a;}
function A7m(a){return;}
function Z_(){D.call(this);}
function BlT(){var a=new Z_();A8t(a);return a;}
function A8t(a){return;}
function AMg(){var a=this;D.call(a);a.o=null;a.fO=0;a.t8=null;a.y$=0;a.ir=0;a.kg=0;a.dn=0;a.uY=null;}
function Bbt(){var a=new AMg();AS4(a);return a;}
function ALF(a,b){var c,d,e,f,g,h,i,j;c=new Vt;c.qQ=(-1);c.se=(-1);c.Fw=a;c.Ez=a.uY;c.pH=b;c.qQ=0;c.se=Bh(c.pH);d=new Wq;e=c.qQ;f=c.se;g=a.ir;h=AQT(a);i=AD3(a);d.kX=(-1);j=g+1|0;d.zw=j;d.gF=$rt_createIntArray(j*2|0);d.oQ=$rt_createIntArray(i);MW(d.oQ,(-1));if(h>0)d.xr=$rt_createIntArray(h);MW(d.gF,(-1));Xe(d,b,e,f);c.dB=d;return c;}
function AIP(a,b,c){var d,e,f,g,h,i;d=Ci();e=ALF(a,b);f=0;g=0;if(!Bh(b)){h=J(B4,1);h.data[0]=B(3);return h;}while(AA8(e)){i=f+1|0;if(i>=c&&c>0)break;S(d,Ev(b,g,AG8(e)));g=AKV(e);f=i;}a:{S(d,Ev(b,g,Bh(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(Bh(Z(d,f)))break a;En(d,f);}}if(f<0)f=0;return Uz(d,J(B4,f));}
function AIO(a,b){return AIP(a,b,0);}
function M7(a){return a.o.eN;}
function SR(a,b,c,d){var e,f,g,h,i;e=Ci();f=a.fO;g=0;if(c!=a.fO)a.fO=c;a:{switch(b){case -1073741784:h=new QB;c=a.dn+1|0;a.dn=c;G_(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PQ;c=a.dn+1|0;a.dn=c;G_(h,c);break a;case -33554392:h=new Q1;c=a.dn+1|0;a.dn=c;G_(h,c);break a;default:a.ir=a.ir+1|0;if(d!==null)h=Bcx(a.ir);else{h=Bb3();g=1;}if(a.ir<=(-1))break a;if(a.ir>=10)break a;a.t8.data[a.ir]=h;break a;}h=Bbs();}while(true){if(F6(a.o)&&a.o.H==(-536870788)){d=A$F(CZ(a,
2),CZ(a,64));while(!Eo(a.o)&&F6(a.o)&&!(a.o.H&&a.o.H!=(-536870788)&&a.o.H!=(-536870871))){Dp(d,BF(a.o));if(a.o.cG!=(-536870788))continue;BF(a.o);}i=LN(a,d);i.ca(h);}else if(a.o.cG==(-536870788)){i=IF(h);BF(a.o);}else{i=Uc(a,h);if(a.o.cG==(-536870788))BF(a.o);}if(i!==null)S(e,i);if(Eo(a.o))break;if(a.o.cG==(-536870871))break;}if(a.o.qU==(-536870788))S(e,IF(h));if(a.fO!=f&&!g){a.fO=f;AJu(a.o,a.fO);}switch(b){case -1073741784:break;case -536870872:d=new S8;GR(d,e,h);return d;case -268435416:d=new WG;GR(d,e,h);return d;case -134217688:d
=new U8;GR(d,e,h);return d;case -67108824:d=new Rd;GR(d,e,h);return d;case -33554392:d=new EX;GR(d,e,h);return d;default:switch(e.p){case 0:break;case 1:return Bcp(Z(e,0),h);default:return BaD(e,h);}return IF(h);}d=new K0;GR(d,e,h);return d;}
function APX(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!Eo(a.o)&&F6(a.o)){e=b.data;c=BF(a.o);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.o.cG;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;BF(a.o);f=a.o.cG;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;BF(a.o);return A$u(e,3);}return A$u(e,2);}if(!CZ(a,2))return AAd(b[0]);if(CZ(a,64))return A8$(b[0]);return A4w(b[0]);}e=b.data;c=1;while(c<4&&!Eo(a.o)&&F6(a.o)){f=c+1|0;e[c]=BF(a.o);c=f;}if(c==1){f=e[0];if(!(BlU.A2(f)
==BlV?0:1))return SK(a,e[0]);}if(!CZ(a,2))return BcY(b,c);if(CZ(a,64)){g=new SE;Pa(g,b,c);return g;}g=new VZ;Pa(g,b,c);return g;}
function Uc(a,b){var c,d,e,f;if(F6(a.o)&&!Lh(a.o)&&Nk(a.o.H)){if(CZ(a,128)){c=APX(a);if(!Eo(a.o)&&!(a.o.cG==(-536870871)&&!(b instanceof HQ))&&a.o.cG!=(-536870788)&&!F6(a.o))c=Mx(a,b,c);}else if(!TJ(a.o)&&!Wr(a.o)){d=new Lg;W(d);while(!Eo(a.o)&&F6(a.o)&&!TJ(a.o)&&!Wr(a.o)&&!(!(!Lh(a.o)&&!a.o.H)&&!(!Lh(a.o)&&Nk(a.o.H))&&a.o.H!=(-536870871)&&(a.o.H&(-2147418113))!=(-2147483608)&&a.o.H!=(-536870788)&&a.o.H!=(-536870876))){e=BF(a.o);if(!Ms(e))Dx(d,e&65535);else Hh(d,Iu(e));}if(!CZ(a,2))c=Bat(d);else if(CZ(a,64))c
=BcV(d);else{c=new OT;EN(c);c.pI=U(d);c.dk=Ot(d);}}else c=Mx(a,b,W0(a,b));}else if(a.o.cG!=(-536870871))c=Mx(a,b,W0(a,b));else{if(b instanceof HQ)M(CN(B(3),a.o.eN,a.o.ig));c=IF(b);}if(!Eo(a.o)&&!(a.o.cG==(-536870871)&&!(b instanceof HQ))&&a.o.cG!=(-536870788)){f=Uc(a,b);if(c instanceof D7&&!(c instanceof GA)&&!(c instanceof DW)&&!(c instanceof FT)){b=c;if(!f.d3(b.bR)){c=new Sm;F1(c,b.bR,b.s,b.p0);c.bR.ca(c);}}if((f.oE()&65535)!=43)c.ca(f);else c.ca(f.bR);}else{if(c===null)return null;c.ca(b);}if((c.oE()&65535)
!=43)return c;return c.bR;}
function Mx(a,b,c){var d,e,f,g;d=a.o.cG;if(c!==null&&!(c instanceof CI)){switch(d){case -2147483606:BF(a.o);e=new SZ;Ef(e,c,b,d);c.ca(BlW);return e;case -2147483605:BF(a.o);e=new Uu;Ef(e,c,b,(-2147483606));c.ca(BlW);return e;case -2147483585:BF(a.o);e=new PJ;Ef(e,c,b,(-536870849));c.ca(BlW);return e;case -2147483525:e=new OQ;f=G4(a.o);d=a.kg+1|0;a.kg=d;ML(e,f,c,b,(-536870849),d);c.ca(BlW);return e;case -1073741782:case -1073741781:BF(a.o);f=new Qr;Ef(f,c,b,d);c.ca(f);return f;case -1073741761:BF(a.o);f=new UN;Ef(f,
c,b,(-536870849));c.ca(b);return f;case -1073741701:f=new RL;e=G4(a.o);g=a.kg+1|0;a.kg=g;ML(f,e,c,b,(-536870849),g);c.ca(f);return f;case -536870870:case -536870869:BF(a.o);if(c.oE()!=(-2147483602)){f=new DW;Ef(f,c,b,d);}else if(CZ(a,32)){f=new Qs;Ef(f,c,b,d);}else{f=new TP;e=Uh(a.fO);Ef(f,c,b,d);f.uq=e;}c.ca(f);return f;case -536870849:BF(a.o);f=new Ht;Ef(f,c,b,(-536870849));c.ca(b);return f;case -536870789:f=new G6;e=G4(a.o);g=a.kg+1|0;a.kg=g;ML(f,e,c,b,(-536870849),g);c.ca(f);return f;default:}return c;}e
=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:BF(a.o);f=new Xr;F1(f,e,b,d);e.s=f;return f;case -2147483585:BF(a.o);c=new Si;F1(c,e,b,(-2147483585));return c;case -2147483525:c=new Ua;QK(c,G4(a.o),e,b,(-2147483525));return c;case -1073741782:case -1073741781:BF(a.o);f=new UL;F1(f,e,b,d);e.s=f;return f;case -1073741761:BF(a.o);c=new V1;F1(c,e,b,(-1073741761));return c;case -1073741701:c=new Qc;QK(c,G4(a.o),e,b,(-1073741701));return c;case -536870870:case -536870869:BF(a.o);f=BaU(e,b,d);e.s
=f;return f;case -536870849:BF(a.o);c=new FT;F1(c,e,b,(-536870849));return c;case -536870789:return BbV(G4(a.o),e,b,(-536870789));default:}return c;}
function W0(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof HQ;while(true){a:{e=Kr(a.o);if((e&(-2147418113))==(-2147483608)){BF(a.o);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.fO=f;else{if(e!=(-1073741784))f=a.fO;c=SR(a,e,f,b);if(Kr(a.o)!=(-536870871))M(CN(B(3),EC(a.o),HA(a.o)));BF(a.o);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.ir<g)M(CN(B(3),
EC(a.o),HA(a.o)));BF(a.o);a.dn=a.dn+1|0;c=!CZ(a,2)?BbA(g,a.dn):CZ(a,64)?Baq(g,a.dn):BcU(g,a.dn);a.t8.data[g].wP=1;a.y$=1;break a;case -2147483583:break;case -2147483582:BF(a.o);c=A$h(0);break a;case -2147483577:BF(a.o);c=Baj();break a;case -2147483558:BF(a.o);c=new SB;g=a.dn+1|0;a.dn=g;AQw(c,g);break a;case -2147483550:BF(a.o);c=A$h(1);break a;case -2147483526:BF(a.o);c=Bbb();break a;case -536870876:break c;case -536870866:BF(a.o);if(CZ(a,32)){c=Bbl();break a;}c=BaX(Uh(a.fO));break a;case -536870821:BF(a.o);h
=0;if(Kr(a.o)==(-536870818)){h=1;BF(a.o);}c=ADE(a,h,b);if(Kr(a.o)!=(-536870819))M(CN(B(3),EC(a.o),HA(a.o)));T3(a.o,1);BF(a.o);break a;case -536870818:BF(a.o);a.dn=a.dn+1|0;if(!CZ(a,8)){c=A1c();break a;}c=BcH(Uh(a.fO));break a;case 0:i=PN(a.o);if(i!==null)c=LN(a,i);else{if(Eo(a.o)){c=IF(b);break a;}c=AAd(e&65535);}BF(a.o);break a;default:break b;}BF(a.o);c=A1c();break a;}BF(a.o);a.dn=a.dn+1|0;if(CZ(a,8)){if(CZ(a,1)){c=Bar(a.dn);break a;}c=A_Z(a.dn);break a;}if(CZ(a,1)){c=BaI(a.dn);break a;}c=Ba5(a.dn);break a;}if
(e>=0&&!HZ(a.o)){c=SK(a,e);BF(a.o);}else if(e==(-536870788))c=IF(b);else{if(e!=(-536870871))M(CN(!HZ(a.o)?Sy(e&65535):PN(a.o).gk(),EC(a.o),HA(a.o)));if(d)M(CN(B(3),EC(a.o),HA(a.o)));c=IF(b);}}}if(e!=(-16777176))break;}return c;}
function ADE(a,b,c){var d;d=LN(a,Ig(a,b));d.ca(c);return d;}
function Ig(a,b){var c,d,e,f,g,h,i,j,$$je;c=A$F(CZ(a,2),CZ(a,64));Fw(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Eo(a.o))break a;f=a.o.cG==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.o.cG){case -536870874:if(d>=0)Dp(c,d);d=BF(a.o);if(a.o.cG!=(-536870874)){d=38;break d;}if(a.o.H==(-536870821)){BF(a.o);e=1;d=(-1);break d;}BF(a.o);if(g){c=Ig(a,0);break d;}if(a.o.cG==(-536870819))break d;Sr(c,Ig(a,0));break d;case -536870867:if(!g&&a.o.H!=(-536870819)&&a.o.H!=(-536870821)&&d>=0){BF(a.o);h=a.o.cG;if(HZ(a.o))break c;if
(h<0&&a.o.H!=(-536870819)&&a.o.H!=(-536870821)&&d>=0)break c;e:{try{if(Nk(h))break e;h=h&65535;break e;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){break b;}else{throw $$e;}}}try{CG(c,d,h);}catch($$e){$$je=Bi($$e);if($$je instanceof BE){break b;}else{throw $$e;}}BF(a.o);d=(-1);break d;}if(d>=0)Dp(c,d);d=45;BF(a.o);break d;case -536870821:if(d>=0){Dp(c,d);d=(-1);}BF(a.o);i=0;if(a.o.cG==(-536870818)){BF(a.o);i=1;}if(!e)AIb(c,Ig(a,i));else Sr(c,Ig(a,i));e=0;BF(a.o);break d;case -536870819:if(d>=0)Dp(c,d);d=
93;BF(a.o);break d;case -536870818:if(d>=0)Dp(c,d);d=94;BF(a.o);break d;case 0:if(d>=0)Dp(c,d);j=a.o.kY;if(j===null)d=0;else{ASr(c,j);d=(-1);}BF(a.o);break d;default:}if(d>=0)Dp(c,d);d=BF(a.o);}g=0;}M(CN(B(3),M7(a),a.o.ig));}M(CN(B(3),M7(a),a.o.ig));}if(!f){if(d>=0)Dp(c,d);return c;}M(CN(B(3),M7(a),a.o.ig-1|0));}
function SK(a,b){var c,d,e;c=Ms(b);if(CZ(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A4w(b&65535);}if(CZ(a,64)&&b>128){if(c){d=new S5;EN(d);d.dk=2;d.z5=GO(GN(b));return d;}if(Pz(b))return AYR(b&65535);if(!QQ(b))return A8$(b&65535);return A6B(b&65535);}}if(!c){if(Pz(b))return AYR(b&65535);if(!QQ(b))return AAd(b&65535);return A6B(b&65535);}d=new EZ;EN(d);d.dk=2;d.kx=b;e=Iu(b).data;d.tx=e[0];d.sa=e[1];return d;}
function LN(a,b){var c,d,e;if(!ANW(b)){if(!b.b_){if(b.nO())return AWE(b);return A09(b);}if(!b.nO())return A6Q(b);c=new MM;V$(c,b);return c;}c=YS(b);d=new OE;Cz(d);d.zM=c;d.Hk=c.cj;if(!b.b_){if(b.nO())return AEl(AWE(J_(b)),d);return AEl(A09(J_(b)),d);}if(!b.nO())return AEl(A6Q(J_(b)),d);c=new P3;e=new MM;V$(e,J_(b));AHh(c,e,d);return c;}
function A3u(a){return a.ir;}
function AQT(a){return a.kg+1|0;}
function AD3(a){return a.dn+1|0;}
function Kc(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function CZ(a,b){return (a.fO&b)!=b?0:1;}
function AS4(a){a.t8=J(DV,10);a.ir=(-1);a.kg=(-1);a.dn=(-1);}
function ABV(){Ly.call(this);}
function Sc(a,b,c,d){var e=new ABV();A6E(e,a,b,c,d);return e;}
function A6E(a,b,c,d,e){SA(a,b,c,d,150,20,e);}
function NK(){var a=this;CS.call(a);a.uz=null;a.uc=null;a.iM=null;a.jt=0;}
function AJr(a){var b;b=0;while(b<a.iM.nb.data.length){S(a.bH,Sc(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bE/6|0)+(24*(b>>1)|0)|0,K4(a.iM,b)));b=b+1|0;}S(a.bH,Dj(200,(a.bm/2|0)-100|0,(a.bE/6|0)+168|0,B(595)));}
function AIe(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.iM.nb.data.length){Z(a.bH,c).kj=K4(a.iM,c);c=c+1|0;}if(b.cl!=200){a.jt=b.cl;d=new T;W(d);b.kj=U(H(H(H(d,B(577)),K4(a.iM,b.cl)),B(578)));return;}b=a.I;d=a.uz;$p=1;case 1:ADS(b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ALM(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jt>=0){X0(a.iM,a.jt,c);Z(a.bH,a.jt).kj=K4(a.iM,a.jt);a.jt=(-1);return;}$p=1;case 1:YK(a,b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AGv(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DD(a,a.b0,a.uc,a.bm/2|0,20,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function UU(){Ou.call(this);}
function A1O(a){S(a.bH,Dj(6,(a.bm/2|0)-100|0,(a.bE/6|0)+168|0,B(604)));}
function AL8(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANq(a,b);if(C()){break _;}c=$z;if(c===null)return;d=a.I;e=new U0;f=new T;W(f);f=U(H(H(H(f,B(606)),c),B(607)));DQ(e);e.B0=a;e.BP=B(608);e.BR=f;e.yM=b;$p=2;case 2:ADS(d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AQ3(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b){$p=2;continue _;}d=a.I;e=a.ox;$p=1;case 1:ADS(d,e);if(C()){break _;}return;case 2:$z=ANq(a,c);if(C()){break _;}d=$z;e=new T;W(e);f=U(H(H(e,B(609)),d));Bd();$p=3;case 3:$z=AP0(f);if(C()){break _;}b=$z;if(!b){d=a.I;e=a.ox;$p=1;continue _;}b=1;c=1;g=QR();d=BeD;$p=4;case 4:A5p(d,f,b,c,g);if(C()){break _;}e=JB(g);while(true){if(!GK(e)){e=JB(g);while
(GK(e)){d=GC(e);if(d.m1){d=d.mb;$p=7;continue _;}}$p=6;continue _;}d=GC(e);if(!d.m1)break;}d=d.mb;$p=5;case 5:AL0(d);if(C()){break _;}while(true){if(!GK(e)){e=JB(g);while(GK(e)){d=GC(e);if(d.m1){d=d.mb;$p=7;continue _;}}$p=6;continue _;}d=GC(e);if(d.m1)continue;else break;}d=d.mb;continue _;case 6:AL0(f);if(C()){break _;}d=a.I;e=a.ox;$p=1;continue _;case 7:AL0(d);if(C()){break _;}while(GK(e)){d=GC(e);if(!d.m1)continue;else{d=d.mb;continue _;}}$p=6;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function NN(){var a=this;D.call(a);a.kA=0.0;a.kp=0.0;a.HJ=0;a.uj=0;}
function BlX(){var a=new NN();AC$(a);return a;}
function AC$(a){a.kA=0.0;a.kp=0.0;a.HJ=0;a.uj=0;}
function Yj(){var a=this;NN.call(a);a.j1=null;a.nl=null;}
function VY(a){var b=new Yj();AZT(b,a);return b;}
function AZT(a,b){AC$(a);a.j1=$rt_createBooleanArray(10);a.nl=b;}
function APq(a,b,c){var d;d=(-1);if(b==a.nl.tZ.bJ)d=0;if(b==a.nl.xi.bJ)d=1;if(b==a.nl.tR.bJ)d=2;if(b==a.nl.us.bJ)d=3;if(b==a.nl.yB.bJ)d=4;if(d>=0)a.j1.data[d]=c;}
function AOX(a){var b;b=0;while(b<10){a.j1.data[b]=0;b=b+1|0;}}
function AOz(a,b){a.kA=0.0;a.kp=0.0;if(a.j1.data[0])a.kp=a.kp+1.0;if(a.j1.data[1])a.kp=a.kp-1.0;if(a.j1.data[2])a.kA=a.kA+1.0;if(a.j1.data[3])a.kA=a.kA-1.0;a.uj=a.j1.data[4];}
function QS(){D.call(this);this.m7=null;}
var BlY=null;function AYW(){AYW=Bt(QS);A36();}
function A_1(){var a=new QS();ALy(a);return a;}
function Wl(){AYW();return BlY;}
function ALy(a){var b,c,d,e;AYW();WD(a);a.m7=Ci();AHj(Bbv(),a);Xt(A_$(),a);ADV(Bbr(),a);AJQ(Ba9(),a);X_(Bao(),a);ASB(BaZ(),a);b=new Cd;L();U2(b,Bfb,1);c=J(D,5);d=c.data;d[0]=B(610);d[1]=B(610);d[2]=B(610);d[3]=BI(35);BB();d[4]=Bgd;Ck(a,b,c);e=G0(Bfi,1);c=J(D,7);d=c.data;d[0]=B(611);d[1]=B(612);d[2]=B(611);d[3]=BI(88);d[4]=Bgc;d[5]=BI(35);d[6]=Be$;Ck(a,e,c);e=G0(BeS,3);c=J(D,3);d=c.data;d[0]=B(610);d[1]=BI(35);d[2]=BeX;Ck(a,e,c);e=G0(Bf_,1);c=J(D,5);d=c.data;d[0]=B(613);d[1]=B(610);d[2]=B(613);d[3]=BI(35);d[4]
=Bh3;Ck(a,e,c);e=EL(BiB,1);c=J(D,5);d=c.data;d[0]=B(614);d[1]=B(614);d[2]=B(614);d[3]=BI(35);d[4]=BeZ;Ck(a,e,c);e=EL(Bhb,1);c=J(D,7);d=c.data;d[0]=B(610);d[1]=B(610);d[2]=B(615);d[3]=BI(35);d[4]=BeZ;d[5]=BI(88);d[6]=Bh3;Ck(a,e,c);e=G0(BeZ,4);c=J(D,3);d=c.data;d[0]=B(616);d[1]=BI(35);d[2]=Be0;Ck(a,e,c);e=EL(Bh3,4);c=J(D,4);d=c.data;d[0]=B(616);d[1]=B(616);d[2]=BI(35);d[3]=BeZ;Ck(a,e,c);e=G0(Be2,4);c=J(D,6);d=c.data;d[0]=B(72);d[1]=B(616);d[2]=BI(88);d[3]=Bhy;d[4]=BI(35);d[5]=Bh3;Ck(a,e,c);e=EL(Bh4,4);c=J(D,4);d
=c.data;d[0]=B(613);d[1]=B(617);d[2]=BI(35);d[3]=BeZ;Ck(a,e,c);e=G0(Bg6,16);c=J(D,7);d=c.data;d[0]=B(618);d[1]=B(611);d[2]=B(618);d[3]=BI(88);d[4]=BhO;d[5]=BI(35);d[6]=Bh3;Ck(a,e,c);e=EL(BiF,1);c=J(D,4);d=c.data;d[0]=B(613);d[1]=B(610);d[2]=BI(35);d[3]=BhO;Ck(a,e,c);e=EL(BiC,1);c=J(D,4);d=c.data;d[0]=B(613);d[1]=B(617);d[2]=BI(35);d[3]=BhO;Ck(a,e,c);e=EL(BhL,1);c=J(D,6);d=c.data;d[0]=B(619);d[1]=B(620);d[2]=BI(65);d[3]=BhO;d[4]=BI(66);d[5]=Bhx;Ck(a,e,c);e=EL(Bid,1);c=J(D,3);d=c.data;d[0]=B(610);d[1]=BI(35);d[2]
=BhB;Ck(a,e,c);e=G0(BgU,4);c=J(D,5);d=c.data;d[0]=B(621);d[1]=B(622);d[2]=B(610);d[3]=BI(35);d[4]=BeZ;Ck(a,e,c);e=G0(Bg7,4);c=J(D,5);d=c.data;d[0]=B(621);d[1]=B(622);d[2]=B(610);d[3]=BI(35);d[4]=BeX;Ck(a,e,c);e=EL(Biz,1);c=J(D,7);d=c.data;d[0]=B(610);d[1]=B(612);d[2]=B(610);d[3]=BI(35);d[4]=Bh3;d[5]=BI(88);d[6]=Bfb;Ck(a,e,c);e=EL(BiA,1);c=J(D,7);d=c.data;d[0]=B(610);d[1]=B(612);d[2]=B(610);d[3]=BI(35);d[4]=Bfg;d[5]=BI(88);d[6]=BhM;Ck(a,e,c);Rw(a.m7,BaC(a));Cg(DT(),BL(H(Be(BX(),De(a.m7)),B(623))));}
function Ck(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=c.data;e=B(3);f=0;g=0;h=0;if(!Sg(d[f],$rt_arraycls(B4))){while(d[f] instanceof B4){i=f+1|0;j=d[f];h=h+1|0;g=Bh(j);k=new T;W(k);e=U(H(H(k,e),j));f=i;}i=f;}else{i=1;l=d[f];m=0;while(true){c=l.data;if(m>=c.length)break;k=c[m];h=h+1|0;g=Bh(k);j=new T;W(j);e=U(H(H(j,e),k));m=m+1|0;}}n=Dd();while(i<d.length){o=d[i];p=0;m=i+1|0;if(d[m] instanceof Bc)p=d[m].cV;else if(d[m] instanceof P)p=d[m].b;BR(n,o,CX(p));i=i+2|0;}i=Bj(g,h);d=$rt_createIntArray(i);c=d.data;p=0;while
(p<i){q=Y(e,p);if(!DZ(n,BI(q)))c[p]=(-1);else c[p]=CP(n,BI(q)).f6;p=p+1|0;}e=a.m7;j=new UI;j.HV=b.bC;j.kL=g;j.qX=h;j.xL=d;j.xR=b;S(e,j);}
function RG(a,b){var c,d;c=0;while(c<a.m7.p){d=Z(a.m7,c);if(ALo(d,b))return AHi(d,b);c=c+1|0;}return null;}
function A36(){BlY=A_1();}
function Co(){var a=this;D.call(a);a.s=null;a.eO=0;a.CL=null;a.p0=0;}
var Bdd=0;function BlZ(){var a=new Co();Cz(a);return a;}
function Bl0(a){var b=new Co();Nw(b,a);return b;}
function Cz(a){var b,c;b=new Gf;c=Bdd;Bdd=c+1|0;Lp(b,c);a.CL=Mu(b);}
function Nw(a,b){var c,d;c=new Gf;d=Bdd;Bdd=d+1|0;Lp(c,d);a.CL=Mu(c);a.s=b;}
function I_(a,b,c,d){var e;e=d.bz;while(true){if(b>e)return (-1);if(a.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function Jl(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A4M(a,b){a.p0=b;}
function A4m(a){return a.p0;}
function A0y(a){return a.s;}
function A1j(a,b){a.s=b;}
function A$v(a,b){return 1;}
function A_d(a){return null;}
function K7(a){var b;a.eO=1;if(a.s!==null){if(!a.s.eO){b=a.s.lu();if(b!==null){a.s.eO=1;a.s=b;}a.s.iV();}else if(a.s instanceof Ix&&a.s.f7.wP)a.s=a.s.s;}}
function AHw(){Bdd=1;}
function NW(){CQ.call(this);}
function Bl1(){var a=new NW();AVK(a);return a;}
function AVK(a){Cw(a);}
function A9e(a,b){return;}
function A0l(a,b){return;}
function AUE(a){return 0;}
function DV(){var a=this;Co.call(a);a.wP=0;a.ih=0;}
var BlW=null;function Bcx(a){var b=new DV();G_(b,a);return b;}
function G_(a,b){Cz(a);a.ih=b;}
function ATG(a,b,c,d){var e,f;e=JE(d,a.ih);MV(d,a.ih,b);f=a.s.k(b,c,d);if(f<0)MV(d,a.ih,e);return f;}
function A7x(a){return a.ih;}
function AT2(a,b){return 0;}
function AK2(){var b;b=new TK;Cz(b);BlW=b;}
function HS(){var a=this;D.call(a);a.bG=null;a.l5=0;a.h4=0;a.Bc=0;a.qU=0;a.cG=0;a.H=0;a.DR=0;a.kY=null;a.jA=null;a.bh=0;a.qd=0;a.ig=0;a.pG=0;a.eN=null;}
var Bl2=null;var BlU=null;var BlV=0;function Kr(a){return a.cG;}
function T3(a,b){if(b>0&&b<3)a.h4=b;if(b==1){a.H=a.cG;a.jA=a.kY;a.bh=a.pG;a.pG=a.ig;Gy(a);}}
function AJu(a,b){a.l5=b;a.H=a.cG;a.jA=a.kY;a.bh=a.ig+1|0;a.pG=a.ig;Gy(a);}
function PN(a){return a.kY;}
function HZ(a){return a.kY===null?0:1;}
function Lh(a){return a.jA===null?0:1;}
function BF(a){Gy(a);return a.qU;}
function G4(a){var b;b=a.kY;Gy(a);return b;}
function A3S(a){return a.H;}
function AVP(a){return a.qU;}
function Gy(a){var b,c,d,e,f,$$je;a.qU=a.cG;a.cG=a.H;a.kY=a.jA;a.ig=a.pG;a.pG=a.bh;while(true){b=0;a.H=a.bh>=a.bG.data.length?0:Me(a);a.jA=null;if(a.h4==4){if(a.H!=92)return;a.H=a.bh>=a.bG.data.length?0:a.bG.data[CF(a)];switch(a.H){case 69:break;default:a.H=92;a.bh=a.qd;return;}a.h4=a.Bc;a.H=a.bh>(a.bG.data.length-2|0)?0:Me(a);}a:{if(a.H!=92){if(a.h4==1)switch(a.H){case 36:a.H=(-536870876);break a;case 40:if(a.bG.data[a.bh]!=63){a.H=(-2147483608);break a;}CF(a);c=a.bG.data[a.bh];d=0;while(true){b:{if(d){d=0;switch
(c){case 33:break;case 61:a.H=(-134217688);CF(a);break b;default:M(CN(B(3),EC(a),a.bh));}a.H=(-67108824);CF(a);}else{switch(c){case 33:break;case 60:CF(a);c=a.bG.data[a.bh];d=1;break b;case 61:a.H=(-536870872);CF(a);break b;case 62:a.H=(-33554392);CF(a);break b;default:a.H=ASf(a);if(a.H<256){a.l5=a.H;a.H=a.H<<16;a.H=(-1073741784)|a.H;break b;}a.H=a.H&255;a.l5=a.H;a.H=a.H<<16;a.H=(-16777176)|a.H;break b;}a.H=(-268435416);CF(a);}}if(!d)break;}break a;case 41:a.H=(-536870871);break a;case 42:case 43:case 63:switch
(a.bh>=a.bG.data.length?42:a.bG.data[a.bh]){case 43:a.H=a.H|(-2147483648);CF(a);break a;case 63:a.H=a.H|(-1073741824);CF(a);break a;default:}a.H=a.H|(-536870912);break a;case 46:a.H=(-536870866);break a;case 91:a.H=(-536870821);T3(a,2);break a;case 93:if(a.h4!=2)break a;a.H=(-536870819);break a;case 94:a.H=(-536870818);break a;case 123:a.jA=AGq(a,a.H);break a;case 124:a.H=(-536870788);break a;default:}else if(a.h4==2)switch(a.H){case 38:a.H=(-536870874);break a;case 45:a.H=(-536870867);break a;case 91:a.H=(-536870821);break a;case 93:a.H
=(-536870819);break a;case 94:a.H=(-536870818);break a;default:}}else{c=a.bh>=(a.bG.data.length-2|0)?(-1):Me(a);c:{a.H=c;switch(a.H){case -1:M(CN(B(3),EC(a),a.bh));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.H
=ADL(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.h4!=1)break a;a.H=(-2147483648)|a.H;break a;case 65:a.H=(-2147483583);break a;case 66:a.H=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:M(CN(B(3),EC(a),a.bh));case 68:case 83:case 87:case 100:case 115:case 119:a.jA=QI(Lj(a.bG,
a.qd,1),0);a.H=0;break a;case 71:a.H=(-2147483577);break a;case 80:case 112:break c;case 81:a.Bc=a.h4;a.h4=4;b=1;break a;case 90:a.H=(-2147483558);break a;case 97:a.H=7;break a;case 98:a.H=(-2147483550);break a;case 99:if(a.bh>=(a.bG.data.length-2|0))M(CN(B(3),EC(a),a.bh));a.H=a.bG.data[CF(a)]&31;break a;case 101:a.H=27;break a;case 102:a.H=12;break a;case 110:a.H=10;break a;case 114:a.H=13;break a;case 116:a.H=9;break a;case 117:a.H=Uv(a,4);break a;case 120:a.H=Uv(a,2);break a;case 122:a.H=(-2147483526);break a;default:}break a;}e
=AOm(a);f=0;if(a.H==80)f=1;try{a.jA=QI(e,f);}catch($$e){$$je=Bi($$e);if($$je instanceof MN){M(CN(B(3),EC(a),a.bh));}else{throw $$e;}}a.H=0;}}if(b)continue;else break;}}
function AOm(a){var b,c,d;b=new T;Gz(b,10);if(a.bh<(a.bG.data.length-2|0)){if(a.bG.data[a.bh]!=123){b=new T;W(b);return U(H(H(b,B(624)),Lj(a.bG,CF(a),1)));}CF(a);c=0;a:{while(a.bh<(a.bG.data.length-2|0)){c=a.bG.data[CF(a)];if(c==125)break a;Dx(b,c);}}if(c!=125)M(CN(B(3),a.eN,a.bh));}if(!J$(b))M(CN(B(3),a.eN,a.bh));d=U(b);if(Bh(d)==1){b=new T;W(b);return U(H(H(b,B(624)),d));}b:{c:{if(Bh(d)>3){if(Iw(d,B(624)))break c;if(Iw(d,B(625)))break c;}break b;}d=Jq(d,2);}return d;}
function AGq(a,b){var c,d,e,f,$$je;c=new T;Gz(c,4);d=(-1);e=2147483647;a:{while(true){if(a.bh>=a.bG.data.length)break a;b=a.bG.data[CF(a)];if(b==125)break a;if(b==44&&d<0)try{d=Ld(BL(c),10);AGG(c,0,J$(c));continue;}catch($$e){$$je=Bi($$e);if($$je instanceof Ez){break;}else{throw $$e;}}Dx(c,b&65535);}M(CN(B(3),a.eN,a.bh));}if(b!=125)M(CN(B(3),a.eN,a.bh));if(J$(c)>0)b:{try{e=Ld(BL(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bi($$e);if($$je instanceof Ez){}else{throw $$e;}}M(CN(B(3),a.eN,a.bh));}else if
(d<0)M(CN(B(3),a.eN,a.bh));if((d|e|(e-d|0))<0)M(CN(B(3),a.eN,a.bh));f=a.bh>=a.bG.data.length?42:a.bG.data[a.bh];c:{switch(f){case 43:a.H=(-2147483525);CF(a);break c;case 63:a.H=(-1073741701);CF(a);break c;default:}a.H=(-536870789);}c=new Th;c.jd=d;c.ip=e;return c;}
function EC(a){return a.eN;}
function Eo(a){return !a.cG&&!a.H&&a.bh==a.DR&&!HZ(a)?1:0;}
function Nk(b){return b<0?0:1;}
function F6(a){return !Eo(a)&&!HZ(a)&&Nk(a.cG)?1:0;}
function TJ(a){return a.cG<=56319&&a.cG>=55296?1:0;}
function Wr(a){return a.cG<=57343&&a.cG>=56320?1:0;}
function QQ(b){return b<=56319&&b>=55296?1:0;}
function Pz(b){return b<=57343&&b>=56320?1:0;}
function Uv(a,b){var c,d,e,f,$$je;c=new T;Gz(c,b);d=a.bG.data.length-2|0;e=0;while(true){f=R(e,b);if(f>=0)break;if(a.bh>=d)break;Dx(c,a.bG.data[CF(a)]);e=e+1|0;}if(!f)a:{try{b=Ld(BL(c),16);}catch($$e){$$je=Bi($$e);if($$je instanceof Ez){break a;}else{throw $$e;}}return b;}M(CN(B(3),a.eN,a.bh));}
function ADL(a){var b,c,d,e,f;b=3;c=1;d=a.bG.data.length-2|0;e=We(a.bG.data[a.bh],8);switch(e){case -1:break;default:if(e>3)b=2;CF(a);a:{while(true){if(c>=b)break a;if(a.bh>=d)break a;f=We(a.bG.data[a.bh],8);if(f<0)break;e=(e*8|0)+f|0;CF(a);c=c+1|0;}}return e;}M(CN(B(3),a.eN,a.bh));}
function ASf(a){var b,c;b=1;c=a.l5;a:while(true){if(a.bh>=a.bG.data.length)M(CN(B(3),a.eN,a.bh));b:{c:{switch(a.bG.data[a.bh]){case 41:CF(a);return c|256;case 45:if(!b)M(CN(B(3),a.eN,a.bh));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}CF(a);}CF(a);return c;}
function CF(a){var b,c;a.qd=a.bh;if(!(a.l5&4))a.bh=a.bh+1|0;else{b=a.bG.data.length-2|0;a.bh=a.bh+1|0;a:while(true){if(a.bh<b&&Qb(a.bG.data[a.bh])){a.bh=a.bh+1|0;continue;}if(a.bh>=b)break;if(a.bG.data[a.bh]!=35)break;a.bh=a.bh+1|0;while(true){if(a.bh>=b)continue a;c=a.bG.data[a.bh];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.bh=a.bh+1|0;}}}return a.qd;}
function AQP(b){return Bl2.Nd(b);}
function Me(a){var b,c,d;b=a.bG.data[CF(a)];if(Dt(b)){c=a.qd+1|0;if(c<a.bG.data.length){d=a.bG.data[c];if(DR(d)){CF(a);return EJ(b,d);}}}return b;}
function HA(a){return a.ig;}
function AQ_(){var a=this;Cb.call(a);a.AK=null;a.ra=null;a.n5=0;}
function CN(a,b,c){var d=new AQ_();A3D(d,a,b,c);return d;}
function A3D(a,b,c,d){O(a);a.n5=(-1);a.AK=b;a.ra=c;a.n5=d;}
function A$_(a){var b,c,d,e,f,g,h,i;b=B(3);if(a.n5>=1){c=$rt_createCharArray(a.n5);d=c.data;e=0;f=d.length;if(e>f){b=new Cb;O(b);M(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=AH_(c);}h=new T;W(h);h=H(h,a.AK);if(a.ra!==null&&Bh(a.ra)){i=new T;W(i);b=U(H(H(H(H(Be(i,a.n5),B(626)),a.ra),B(626)),b));}else b=B(3);return U(H(h,b));}
function Mt(){CQ.call(this);this.tp=0;}
function Bl3(){var a=new Mt();A4j(a);return a;}
function A4j(a){Cw(a);}
function A8C(a,b){KJ(b,a.tp);}
function A76(a,b){a.tp=NV(b);}
function A6I(a){return 1;}
function MT(){CQ.call(this);this.tj=0;}
function Bl4(){var a=new MT();A5Z(a);return a;}
function A5Z(a){Cw(a);}
function AWh(a,b){Z7(b,a.tj);}
function AZx(a,b){a.tj=XG(b);}
function A5K(a){return 2;}
function Li(){CQ.call(this);this.r2=0;}
function Bl5(){var a=new Li();A1H(a);return a;}
function A1H(a){Cw(a);}
function A14(a,b){JK(b,a.r2);}
function AY4(a,b){a.r2=H3(b);}
function AVk(a){return 3;}
function N8(){CQ.call(this);this.sX=Long_ZERO;}
function Bl6(){var a=new N8();AZY(a);return a;}
function AZY(a){Cw(a);}
function ATc(a,b){UA(b,a.sX);}
function A_o(a,b){a.sX=Td(b);}
function A2F(a){return 4;}
function Pd(){CQ.call(this);this.ni=0.0;}
function Bl7(){var a=new Pd();AZV(a);return a;}
function A6P(a){var b=new Pd();AVQ(b,a);return b;}
function AZV(a){Cw(a);}
function AVQ(a,b){Cw(a);a.ni=b;}
function AS5(a,b){APf(b,a.ni);}
function A7Y(a,b){a.ni=AAY(b);}
function ASJ(a){return 5;}
function Mm(){CQ.call(this);this.iH=0.0;}
function Bl8(){var a=new Mm();AZz(a);return a;}
function AZz(a){Cw(a);}
function A60(a,b){APk(b,a.iH);}
function AU4(a,b){a.iH=APi(b);}
function A0T(a){return 6;}
function MD(){CQ.call(this);this.mj=null;}
function Bl9(){var a=new MD();A_G(a);return a;}
function A_G(a){Cw(a);}
function A49(a,b){JK(b,a.mj.data.length);AOy(b,a.mj);}
function A7h(a,b){a.mj=$rt_createByteArray(H3(b));AMR(b,a.mj);}
function A9B(a){return 7;}
function OB(){CQ.call(this);this.Ar=null;}
function Bl$(){var a=new OB();A8l(a);return a;}
function A8l(a){Cw(a);}
function A$S(a,b){Xm(b,a.Ar);}
function AY5(a,b){a.Ar=GU(b);}
function ATn(a){return 8;}
function QO(){var a=this;CQ.call(a);a.hb=null;a.mT=0;}
function L8(){var a=new QO();AG4(a);return a;}
function AG4(a){Cw(a);a.hb=Ci();}
function A9w(a,b){var c;if(a.hb.p<=0)a.mT=1;else a.mT=Z(a.hb,0).fa();KJ(b,a.mT);JK(b,a.hb.p);c=0;while(c<a.hb.p){Z(a.hb,c).gL(b);c=c+1|0;}}
function AYY(a,b){var c,d,e;a.mT=NV(b);c=H3(b);a.hb=Ci();d=0;while(d<c){e=AE4(a.mT);e.gE(b);S(a.hb,e);d=d+1|0;}}
function AYy(a){return 9;}
function Jn(a,b){a.mT=b.fa();S(a.hb,b);}
function Fd(a,b){return Z(a.hb,b);}
function AOs(a){return a.hb.p;}
function Tv(){var a=this;D.call(a);a.Ao=null;a.w_=null;}
function ARG(a){CM(a.Ao,(Us(a.w_.result)?1:0)?null:A8v(a.w_.result));}
function AUn(a){ARG(a);}
function Tu(){D.call(this);this.Ed=null;}
function XA(a){CM(a.Ed,null);}
function AXn(a){XA(a);}
function ARQ(){var a=this;D.call(a);a.EP=null;a.qe=null;}
function Bbv(){var a=new ARQ();AXz(a);return a;}
function AXz(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,3);e=d.data;e[0]=B(627);e[1]=B(617);e[2]=B(617);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(616);e[2]=B(616);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(628);e[1]=B(629);e[2]=B(630);c[2]=d;d=J(B4,3);e=d.data;e[0]=B(628);e[1]=B(630);e[2]=B(630);c[3]=d;a.EP=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=BeZ;e[1]=BeX;BB();e[2]=BhO;e[3]=Bhz;e[4]=BhP;c[0]=d;d=J(D,5);e=d.data;e[0]=BhT;e[1]=BhX;e[2]=BhJ;e[3]=Bh1;e[4]=Bh8;c[1]=d;d=J(D,5);e=d.data;e[0]
=BhS;e[1]=BhW;e[2]=BhI;e[3]=Bh0;e[4]=Bh7;c[2]=d;d=J(D,5);e=d.data;e[0]=BhU;e[1]=BhY;e[2]=BhK;e[3]=Bh2;e[4]=Bh9;c[3]=d;d=J(D,5);e=d.data;e[0]=Bh$;e[1]=Bh_;e[2]=Bia;e[3]=Bib;e[4]=Bic;c[4]=d;a.qe=b;}
function AHj(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.qe.data[0].data.length){d=a.qe.data[0].data[c];e=0;while(e<(a.qe.data.length-1|0)){f=a.qe.data;g=e+1|0;h=f[g].data[c];i=Qf(h);f=J(D,5);j=f.data;j[0]=a.EP.data[e];j[1]=BI(35);BB();j[2]=Bh3;j[3]=BI(88);j[4]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function XU(){var a=this;D.call(a);a.Be=null;a.pt=null;}
function A_$(){var a=new XU();A$n(a);return a;}
function A$n(a){var b,c,d,e;b=J($rt_arraycls(B4),1);c=b.data;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(72);e[2]=B(616);c[0]=d;a.Be=b;b=J($rt_arraycls(D),2);c=b.data;d=J(D,5);e=d.data;L();e[0]=BeZ;e[1]=BeX;BB();e[2]=BhO;e[3]=Bhz;e[4]=BhP;c[0]=d;d=J(D,5);e=d.data;e[0]=BhR;e[1]=BhV;e[2]=BhQ;e[3]=BhZ;e[4]=Bh6;c[1]=d;a.pt=b;}
function Xt(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.pt.data[0].data.length){d=a.pt.data[0].data[c];e=0;while(e<(a.pt.data.length-1|0)){f=a.pt.data;g=e+1|0;h=f[g].data[c];i=Qf(h);j=J(D,5);k=j.data;k[0]=a.Be.data[e];k[1]=BI(35);BB();k[2]=Bh3;k[3]=BI(88);k[4]=d;Ck(b,i,j);e=g;}c=c+1|0;}h=new Cd;BB();Gm(h,BhN,1);f=J(D,7);k=f.data;k[0]=B(631);k[1]=B(632);k[2]=B(631);k[3]=BI(88);k[4]=Bgd;k[5]=BI(35);k[6]=Bh3;Ck(b,h,f);d=EL(Bgb,4);f=J(D,9);k=f.data;k[0]=B(72);k[1]=B(616);k[2]=B(48);k[3]=BI(89);k[4]=Bga;k[5]=BI(88);k[6]
=BhO;k[7]=BI(35);k[8]=Bh3;Ck(b,d,f);}
function XN(){D.call(this);this.so=null;}
function Bbr(){var a=new XN();A2a(a);return a;}
function A2a(a){var b,c,d,e;b=J($rt_arraycls(D),3);c=b.data;d=J(D,2);e=d.data;L();e[0]=Bfg;BB();e[1]=BhP;c[0]=d;d=J(D,2);e=d.data;e[0]=Bff;e[1]=BhO;c[1]=d;d=J(D,2);e=d.data;e[0]=BgY;e[1]=Bhz;c[2]=d;a.so=b;}
function ADV(a,b){var c,d,e,f,g,h;c=0;while(c<a.so.data.length){d=a.so.data[c].data[0];e=a.so.data[c].data[1];f=ALZ(d);g=J(D,5);h=g.data;h[0]=B(610);h[1]=B(610);h[2]=B(610);h[3]=BI(35);h[4]=e;Ck(b,f,g);f=EL(e,9);g=J(D,3);h=g.data;h[0]=B(616);h[1]=BI(35);h[2]=d;Ck(b,f,g);c=c+1|0;}}
function AD_(){D.call(this);}
function Ba9(){var a=new AD_();A0B(a);return a;}
function A0B(a){return;}
function AJQ(a,b){var c,d,e;c=new Cd;BB();DA(c,Bh5);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(616);e[3]=BI(88);L();e[4]=Be8;e[5]=BI(89);e[6]=Be9;e[7]=BI(35);e[8]=Bh4;Ck(b,c,d);c=Qf(Bh5);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(616);e[3]=BI(88);e[4]=Be9;e[5]=BI(89);e[6]=Be8;e[7]=BI(35);e[8]=Bh4;Ck(b,c,d);}
function ARP(){D.call(this);}
function Bao(){var a=new ARP();A6S(a);return a;}
function A6S(a){return;}
function X_(a,b){var c,d,e;c=new Cd;L();AHZ(c,BgV);d=J(D,5);e=d.data;e[0]=B(610);e[1]=B(613);e[2]=B(610);e[3]=BI(35);e[4]=BeZ;Ck(b,c,d);c=ALZ(Bg2);d=J(D,5);e=d.data;e[0]=B(610);e[1]=B(613);e[2]=B(610);e[3]=BI(35);e[4]=BeX;Ck(b,c,d);c=ALZ(BgZ);d=J(D,4);e=d.data;e[0]=B(614);e[1]=B(614);e[2]=BI(35);e[3]=BeZ;Ck(b,c,d);}
function AE9(){var a=this;D.call(a);a.zD=null;a.n2=null;}
function BaZ(){var a=new AE9();AU6(a);return a;}
function AU6(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,2);e=d.data;e[0]=B(627);e[1]=B(618);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(618);e[1]=B(627);e[2]=B(627);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(627);e[1]=B(618);e[2]=B(618);c[2]=d;d=J(B4,2);e=d.data;e[0]=B(618);e[1]=B(618);c[3]=d;a.zD=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Bfb;e[1]=Bgn;BB();e[2]=BhO;e[3]=Bhz;e[4]=BhP;c[0]=d;d=J(D,5);e=d.data;e[0]=Bie;e[1]=Bii;e[2]=Bim;e[3]=Biq;e[4]=Biu;c[1]=d;d=J(D,5);e=d.data;e[0]=Bif;e[1]=Bij;e[2]
=Bin;e[3]=Bir;e[4]=Biv;c[2]=d;d=J(D,5);e=d.data;e[0]=Big;e[1]=Bik;e[2]=Bio;e[3]=Bis;e[4]=Biw;c[3]=d;d=J(D,5);e=d.data;e[0]=Bih;e[1]=Bil;e[2]=Bip;e[3]=Bit;e[4]=Bix;c[4]=d;a.n2=b;}
function ASB(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.n2.data[0].data.length){d=a.n2.data[0].data[c];e=0;while(e<(a.n2.data.length-1|0)){f=a.n2.data;g=e+1|0;h=f[g].data[c];i=Qf(h);f=J(D,3);j=f.data;j[0]=a.zD.data[e];j[1]=BI(88);j[2]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function Yg(){D.call(this);this.IP=null;}
function BaC(a){var b=new Yg();AYt(b,a);return b;}
function AYt(a,b){a.IP=b;}
function AMC(a,b,c){return Kn(c)<Kn(b)?(-1):Kn(c)<=Kn(b)?0:1;}
function AZu(a,b,c){return AMC(a,b,c);}
function QB(){DV.call(this);}
function A3v(a,b,c,d){var e;e=a.ih;Cv(d,e,b-Ep(d,e)|0);return a.s.k(b,c,d);}
function A9x(a,b){return 0;}
function AR7(){DV.call(this);}
function Bbs(){var a=new AR7();A2R(a);return a;}
function A2R(a){G_(a,(-1));}
function A4L(a,b,c,d){return b;}
function PQ(){DV.call(this);}
function AT8(a,b,c,d){if(Ep(d,a.ih)!=b)b=(-1);return b;}
function Q1(){DV.call(this);this.wD=0;}
function A3x(a,b,c,d){var e;e=a.ih;Cv(d,e,b-Ep(d,e)|0);a.wD=b;return b;}
function AUb(a){return a.wD;}
function A8M(a,b){return 0;}
function HQ(){DV.call(this);}
function Bb3(){var a=new HQ();A$l(a);return a;}
function A$l(a){G_(a,0);}
function A1u(a,b,c,d){if(d.np!=1&&b!=d.bz)return (-1);ARw(d);MV(d,0,b);return b;}
function CI(){Co.call(this);this.dk=0;}
function Bl_(){var a=new CI();EN(a);return a;}
function EN(a){Cz(a);a.dk=1;}
function A_x(a,b,c,d){var e;if((b+a.d_()|0)>d.bz){d.hn=1;return (-1);}e=a.dm(b,c);if(e<0)return (-1);return a.s.k(b+e|0,c,d);}
function A99(a){return a.dk;}
function AW5(a,b){return 1;}
function AFU(){CI.call(this);}
function IF(a){var b=new AFU();A7E(b,a);return b;}
function A7E(a,b){Nw(a,b);a.dk=1;a.p0=1;a.dk=0;}
function A9L(a,b,c){return 0;}
function A5A(a,b,c,d){var e,f,g;e=d.bz;f=d.ff;while(true){g=R(b,e);if(g>0)return (-1);if(g<0&&DR(Y(c,b))&&b>f&&Dt(Y(c,b-1|0))){b=b+1|0;continue;}if(a.s.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function A4B(a,b,c,d,e){var f,g;f=e.bz;g=e.ff;while(true){if(c<b)return (-1);if(c<f&&DR(Y(d,c))&&c>g&&Dt(Y(d,c-1|0))){c=c+(-1)|0;continue;}if(a.s.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A3w(a,b){return 0;}
function CE(){var a=this;Co.call(a);a.dl=null;a.f7=null;a.cJ=0;}
function Bma(){var a=new CE();A4x(a);return a;}
function BaD(a,b){var c=new CE();GR(c,a,b);return c;}
function A4x(a){Cz(a);}
function GR(a,b,c){Cz(a);a.dl=b;a.f7=c;a.cJ=c.ih;}
function AWo(a,b,c,d){var e,f,g,h;if(a.dl===null)return (-1);e=Hk(d,a.cJ);EM(d,a.cJ,b);f=a.dl.p;g=0;while(true){if(g>=f){EM(d,a.cJ,e);return (-1);}h=Z(a.dl,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AZi(a,b){a.f7.s=b;}
function A7d(a,b){var c;a:{if(a.dl!==null){c=Jg(a.dl);while(true){if(!KB(c))break a;if(!KS(c).d3(b))continue;else return 1;}}}return 0;}
function AZP(a,b){return JE(b,a.cJ)>=0&&Hk(b,a.cJ)==JE(b,a.cJ)?0:1;}
function AUF(a){var b,c,d,e;a.eO=1;if(a.f7!==null&&!a.f7.eO)K7(a.f7);a:{if(a.dl!==null){b=a.dl.p;c=0;while(true){if(c>=b)break a;d=Z(a.dl,c);e=d.lu();if(e===null)e=d;else{d.eO=1;En(a.dl,c);AMH(a.dl,c,e);}if(!e.eO)e.iV();c=c+1|0;}}}if(a.s!==null)K7(a);}
function K0(){CE.call(this);}
function Bmb(){var a=new K0();AXU(a);return a;}
function AXU(a){Cz(a);}
function AZa(a,b,c,d){var e,f,g,h;e=Ep(d,a.cJ);Cv(d,a.cJ,b);f=a.dl.p;g=0;while(true){if(g>=f){Cv(d,a.cJ,e);return (-1);}h=Z(a.dl,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A9j(a,b){return !Ep(b,a.cJ)?0:1;}
function EX(){K0.call(this);}
function A43(a,b,c,d){var e,f,g;e=Ep(d,a.cJ);Cv(d,a.cJ,b);f=a.dl.p;g=0;while(g<f){if(Z(a.dl,g).k(b,c,d)>=0)return a.s.k(a.f7.wD,c,d);g=g+1|0;}Cv(d,a.cJ,e);return (-1);}
function A84(a,b){a.s=b;}
function S8(){EX.call(this);}
function AZe(a,b,c,d){var e,f;e=a.dl.p;f=0;while(f<e){if(Z(a.dl,f).k(b,c,d)>=0)return a.s.k(b,c,d);f=f+1|0;}return (-1);}
function A1l(a,b){return 0;}
function WG(){EX.call(this);}
function ATV(a,b,c,d){var e,f;e=a.dl.p;f=0;while(true){if(f>=e)return a.s.k(b,c,d);if(Z(a.dl,f).k(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A$b(a,b){return 0;}
function U8(){EX.call(this);}
function AUC(a,b,c,d){var e,f,g,h;e=a.dl.p;f=d.oc?0:d.ff;a:{g=a.s.k(b,c,d);if(g>=0){Cv(d,a.cJ,b);h=0;while(true){if(h>=e)break a;if(Z(a.dl,h).eU(f,b,c,d)>=0){Cv(d,a.cJ,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_L(a,b){return 0;}
function Rd(){EX.call(this);}
function A2$(a,b,c,d){var e,f;e=a.dl.p;Cv(d,a.cJ,b);f=0;while(true){if(f>=e)return a.s.k(b,c,d);if(Z(a.dl,f).eU(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A9p(a,b){return 0;}
function Ix(){CE.call(this);this.fn=null;}
function Bcp(a,b){var c=new Ix();ZV(c,a,b);return c;}
function ZV(a,b,c){Cz(a);a.fn=b;a.f7=c;a.cJ=c.ih;}
function ATa(a,b,c,d){var e,f;e=Hk(d,a.cJ);EM(d,a.cJ,b);f=a.fn.k(b,c,d);if(f>=0)return f;EM(d,a.cJ,e);return (-1);}
function AX7(a,b,c,d){var e;e=a.fn.eH(b,c,d);if(e>=0)EM(d,a.cJ,e);return e;}
function A9A(a,b,c,d,e){var f;f=a.fn.eU(b,c,d,e);if(f>=0)EM(e,a.cJ,f);return f;}
function A6_(a,b){return a.fn.d3(b);}
function A8K(a){var b;b=new OM;ZV(b,a.fn,a.f7);a.s=b;return b;}
function A10(a){var b;a.eO=1;if(a.f7!==null&&!a.f7.eO)K7(a.f7);if(a.fn!==null&&!a.fn.eO){b=a.fn.lu();if(b!==null){a.fn.eO=1;a.fn=b;}a.fn.iV();}}
function HW(){D.call(this);}
function Bm(){var a=this;HW.call(a);a.cj=0;a.dN=0;a.b9=null;a.p9=null;a.qC=null;a.b_=0;}
var Bmc=null;function Bmd(){var a=new Bm();B0(a);return a;}
function B0(a){var b;b=new WU;b.by=$rt_createIntArray(64);a.b9=b;}
function A3_(a){return null;}
function A3H(a){return a.b9;}
function ANW(a){return !a.dN?(IX(a.b9,0)>=2048?0:1):AEp(a.b9,0)>=2048?0:1;}
function A5_(a){return a.b_;}
function A93(a){return a;}
function YS(a){var b,c;if(a.qC===null){b=a.kk();c=new Sk;c.Jk=a;c.Cl=b;B0(c);a.qC=c;Fw(a.qC,a.dN);}return a.qC;}
function J_(a){var b,c;if(a.p9===null){b=a.kk();c=new Sj;c.GF=a;c.Er=b;c.Bf=a;B0(c);a.p9=c;Fw(a.p9,a.cj);a.p9.b_=a.b_;}return a.p9;}
function A_a(a){return 0;}
function Fw(a,b){if(a.cj^b){a.cj=a.cj?0:1;a.dN=a.dN?0:1;}if(!a.b_)a.b_=1;return a;}
function AVT(a){return a.cj;}
function KD(b,c){if(b.hC()!==null&&c.hC()!==null)return AD5(b.hC(),c.hC());return 1;}
function QI(b,c){return APN(ARq(Bmc,b),c);}
function ZZ(){Bmc=new H6;}
function ZJ(){var a=this;Bm.call(a);a.xE=0;a.y3=0;a.nk=0;a.uJ=0;a.iv=0;a.lh=0;a.b6=null;a.c4=null;}
function Eq(){var a=new ZJ();A2t(a);return a;}
function A$F(a,b){var c=new ZJ();AUU(c,a,b);return c;}
function A2t(a){B0(a);a.b6=A_N();}
function AUU(a,b,c){B0(a);a.b6=A_N();a.xE=b;a.y3=c;}
function Dp(a,b){a:{if(a.xE){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.iv){Ow(a.b6,Kc(b&65535));break a;}Ma(a.b6,Kc(b&65535));break a;}if(a.y3&&b>128){a.nk=1;b=GO(GN(b));}}}if(!(!QQ(b)&&!Pz(b))){if(a.uJ)Ow(a.b9,b-55296|0);else Ma(a.b9,b-55296|0);}if(a.iv)Ow(a.b6,b);else Ma(a.b6,b);if(!a.b_&&Ms(b))a.b_=1;return a;}
function ASr(a,b){var c,d,e;if(!a.b_&&b.b_)a.b_=1;if(a.uJ){if(!b.dN)GZ(a.b9,b.kk());else Ec(a.b9,b.kk());}else if(!b.dN)Hp(a.b9,b.kk());else{Hc(a.b9,b.kk());Ec(a.b9,b.kk());a.dN=a.dN?0:1;a.uJ=1;}if(!a.lh&&b.hC()!==null){if(a.iv){if(!b.cj)GZ(a.b6,b.hC());else Ec(a.b6,b.hC());}else if(!b.cj)Hp(a.b6,b.hC());else{Hc(a.b6,b.hC());Ec(a.b6,b.hC());a.cj=a.cj?0:1;a.iv=1;}}else{c=a.cj;if(a.c4!==null){d=a.c4;if(!c){e=new TV;e.HB=a;e.ET=c;e.A_=d;e.A4=b;B0(e);a.c4=e;}else{e=new TW;e.JI=a;e.Ac=c;e.Ds=d;e.C_=b;B0(e);a.c4=
e;}}else{if(c&&!a.iv&&Om(a.b6)){d=new TS;d.Iv=a;d.Dx=b;B0(d);a.c4=d;}else if(!c){d=new TQ;d.xc=a;d.wq=c;d.CG=b;B0(d);a.c4=d;}else{d=new TR;d.vf=a;d.tO=c;d.A7=b;B0(d);a.c4=d;}a.lh=1;}}return a;}
function CG(a,b,c){var d;if(b>c){d=new Cb;O(d);M(d);}a:{b:{if(!a.xE){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Dp(a,b);b=b+1|0;}}if(a.iv)AIC(a.b6,b,c+1|0);else Jm(a.b6,b,c+1|0);}return a;}
function AIb(a,b){var c,d,e;if(!a.b_&&b.b_)a.b_=1;if(b.nk)a.nk=1;if(!(a.dN^b.dN)){if(!a.dN)Hp(a.b9,b.b9);else Ec(a.b9,b.b9);}else if(a.dN)GZ(a.b9,b.b9);else{Hc(a.b9,b.b9);Ec(a.b9,b.b9);a.dN=1;}if(!a.lh&&DX(b)!==null){if(!(a.cj^b.cj)){if(!a.cj)Hp(a.b6,DX(b));else Ec(a.b6,DX(b));}else if(a.cj)GZ(a.b6,DX(b));else{Hc(a.b6,DX(b));Ec(a.b6,DX(b));a.cj=1;}}else{c=a.cj;if(a.c4!==null){d=a.c4;if(!c){e=new Pn;e.Fm=a;e.AN=c;e.Ey=d;e.Bn=b;B0(e);a.c4=e;}else{e=new PB;e.FB=a;e.EM=c;e.yZ=d;e.y5=b;B0(e);a.c4=e;}}else{if(!a.iv
&&Om(a.b6)){if(!c){d=new TT;d.JK=a;d.zQ=b;B0(d);a.c4=d;}else{d=new TU;d.HM=a;d.ED=b;B0(d);a.c4=d;}}else if(!c){d=new TY;d.AR=a;d.Af=b;d.Du=c;B0(d);a.c4=d;}else{d=new TZ;d.Aq=a;d.Ax=b;d.DX=c;B0(d);a.c4=d;}a.lh=1;}}}
function Sr(a,b){var c,d,e;if(!a.b_&&b.b_)a.b_=1;if(b.nk)a.nk=1;if(!(a.dN^b.dN)){if(!a.dN)Ec(a.b9,b.b9);else Hp(a.b9,b.b9);}else if(!a.dN)GZ(a.b9,b.b9);else{Hc(a.b9,b.b9);Ec(a.b9,b.b9);a.dN=0;}if(!a.lh&&DX(b)!==null){if(!(a.cj^b.cj)){if(!a.cj)Ec(a.b6,DX(b));else Hp(a.b6,DX(b));}else if(!a.cj)GZ(a.b6,DX(b));else{Hc(a.b6,DX(b));Ec(a.b6,DX(b));a.cj=0;}}else{c=a.cj;if(a.c4!==null){d=a.c4;if(!c){e=new Pp;e.HA=a;e.Ef=c;e.Cj=d;e.Ab=b;B0(e);a.c4=e;}else{e=new Pq;e.HS=a;e.D6=c;e.BY=d;e.Ee=b;B0(e);a.c4=e;}}else{if(!a.iv
&&Om(a.b6)){if(!c){d=new Pl;d.FE=a;d.CU=b;B0(d);a.c4=d;}else{d=new Pm;d.JF=a;d.zJ=b;B0(d);a.c4=d;}}else if(!c){d=new Pr;d.E_=a;d.ES=b;d.Aw=c;B0(d);a.c4=d;}else{d=new Pk;d.Au=a;d.D$=b;d.DB=c;B0(d);a.c4=d;}a.lh=1;}}}
function D5(a,b){if(a.c4!==null)return a.cj^a.c4.Y(b);return a.cj^EK(a.b6,b);}
function DX(a){if(!a.lh)return a.b6;return null;}
function A5t(a){return a.b9;}
function A1b(a){var b,c;if(a.c4!==null)return a;b=DX(a);c=new Po;c.Hl=a;c.sc=b;B0(c);return Fw(c,a.cj);}
function A70(a){var b,c;b=new T;W(b);c=IX(a.b6,0);while(c>=0){Hh(b,Iu(c));Dx(b,124);c=IX(a.b6,c+1|0);}if(b.bZ>0)Se(b,b.bZ-1|0);return U(b);}
function AVU(a){return a.nk;}
function MN(){var a=this;B6.call(a);a.G5=null;a.Jo=null;}
function E5(){Co.call(this);this.bR=null;}
function Bme(a,b,c){var d=new E5();Ef(d,a,b,c);return d;}
function Ef(a,b,c,d){Nw(a,c);a.bR=b;a.p0=d;}
function A_C(a){return a.bR;}
function A0o(a,b){return !a.bR.d3(b)&&!a.s.d3(b)?0:1;}
function A$H(a,b){return 1;}
function AYs(a){var b;a.eO=1;if(a.s!==null&&!a.s.eO){b=a.s.lu();if(b!==null){a.s.eO=1;a.s=b;}a.s.iV();}if(a.bR!==null){if(!a.bR.eO){b=a.bR.lu();if(b!==null){a.bR.eO=1;a.bR=b;}a.bR.iV();}else if(a.bR instanceof Ix&&a.bR.f7.wP)a.bR=a.bR.s;}}
function D7(){E5.call(this);this.cM=null;}
function BaU(a,b,c){var d=new D7();F1(d,a,b,c);return d;}
function F1(a,b,c,d){Ef(a,b,c,d);a.cM=b;}
function A2_(a,b,c,d){var e,f;e=0;a:{while((b+a.cM.d_()|0)<=d.bz){f=a.cM.dm(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.s.k(b,c,d);if(f>=0)break;b=b-a.cM.d_()|0;e=e+(-1)|0;}return f;}
function GA(){D7.call(this);this.kV=null;}
function BbV(a,b,c,d){var e=new GA();QK(e,a,b,c,d);return e;}
function QK(a,b,c,d,e){F1(a,c,d,e);a.kV=b;}
function A3Y(a,b,c,d){var e,f,g,h;e=a.kV.jd;f=a.kV.ip;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.cM.d_()|0)>d.bz)break a;h=a.cM.dm(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.s.k(b,c,d);if(h>=0)break;b=b-a.cM.d_()|0;g=g+(-1)|0;}return h;}if((b+a.cM.d_()|0)>d.bz){d.hn=1;return (-1);}h=a.cM.dm(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function DW(){E5.call(this);}
function A3o(a,b,c,d){var e;if(!a.bR.b4(d))return a.s.k(b,c,d);e=a.bR.k(b,c,d);if(e>=0)return e;return a.s.k(b,c,d);}
function FT(){D7.call(this);}
function A7n(a,b,c,d){var e;e=a.bR.k(b,c,d);if(e<0)e=a.s.k(b,c,d);return e;}
function A2K(a,b){a.s=b;a.bR.ca(b);}
function Sm(){D7.call(this);}
function A_s(a,b,c,d){while((b+a.cM.d_()|0)<=d.bz&&a.cM.dm(b,c)>0){b=b+a.cM.d_()|0;}return a.s.k(b,c,d);}
function AYI(a,b,c,d){var e,f,g;e=a.s.eH(b,c,d);if(e<0)return (-1);f=e-a.cM.d_()|0;while(f>=b&&a.cM.dm(f,c)>0){g=f-a.cM.d_()|0;e=f;f=g;}return e;}
function Ez(){Cb.call(this);}
function Bmf(){var a=new Ez();A3M(a);return a;}
function A3M(a){O(a);}
function Th(){var a=this;HW.call(a);a.jd=0;a.ip=0;}
function A50(a){return a.jd;}
function A$B(a){return a.ip;}
function A79(a){var b;b=new T;W(b);return U(H(H(H(Be(H(b,B(633)),a.jd),B(634)),a.ip==2147483647?B(3):Mu(AQO(a.ip))),B(635)));}
function TK(){Co.call(this);}
function Bmg(){var a=new TK();A_B(a);return a;}
function A_B(a){Cz(a);}
function AXs(a,b,c,d){return b;}
function A8J(a,b){return 0;}
function WU(){var a=this;D.call(a);a.by=null;a.cm=0;}
function A_N(){var a=new WU();A4t(a);return a;}
function A4t(a){a.by=$rt_createIntArray(0);}
function Ma(a,b){var c,d;c=b/32|0;if(b>=a.cm){KG(a,c+1|0);a.cm=b+1|0;}d=a.by.data;d[c]=d[c]|1<<(b%32|0);}
function Jm(a,b,c){var d,e,f,g,h;if(b>c){d=new BO;O(d);M(d);}e=b/32|0;f=c/32|0;if(c>a.cm){KG(a,f+1|0);a.cm=c;}if(e==f){g=a.by.data;g[e]=g[e]|Je(a,b)&KA(a,c);}else{g=a.by.data;g[e]=g[e]|Je(a,b);h=e+1|0;while(h<f){a.by.data[h]=(-1);h=h+1|0;}g=a.by.data;g[f]=g[f]|KA(a,c);}}
function Je(a,b){return (-1)<<(b%32|0);}
function KA(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function Ow(a,b){var c,d;c=b/32|0;if(c<a.by.data.length){d=a.by.data;d[c]=d[c]&Ni((-2),b%32|0);if(b==(a.cm-1|0))H8(a);}}
function AIC(a,b,c){var d,e,f,g,h;if(b>c){d=new BO;O(d);M(d);}if(b>=a.cm)return;c=CB(a.cm,c);e=b/32|0;f=c/32|0;if(e==f){g=a.by.data;g[e]=g[e]&(KA(a,b)|Je(a,c));}else{g=a.by.data;g[e]=g[e]&KA(a,b);h=e+1|0;while(h<f){a.by.data[h]=0;h=h+1|0;}g=a.by.data;g[f]=g[f]&Je(a,c);}H8(a);}
function EK(a,b){var c;c=b/32|0;return c<a.by.data.length&&a.by.data[c]&1<<(b%32|0)?1:0;}
function IX(a,b){var c,d,e;if(b>=a.cm)return (-1);c=b/32|0;d=a.by.data[c]>>>(b%32|0);if(d)return JA(d)+b|0;d=(a.cm+31|0)/32|0;e=c+1|0;while(e<d){if(a.by.data[e])return (e*32|0)+JA(a.by.data[e])|0;e=e+1|0;}return (-1);}
function AEp(a,b){var c,d,e;if(b>=a.cm)return b;c=b/32|0;d=(a.by.data[c]^(-1))>>>(b%32|0);if(d)return JA(d)+b|0;d=(a.cm+31|0)/32|0;e=c+1|0;while(e<d){if(a.by.data[e]!=(-1))return (e*32|0)+JA(a.by.data[e]^(-1))|0;e=e+1|0;}return a.cm;}
function KG(a,b){var c,d,e,f;if(a.by.data.length>=b)return;c=DB((b*3|0)/2|0,(a.by.data.length*2|0)+1|0);d=a.by.data;e=$rt_createIntArray(c);f=e.data;b=CB(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.by=e;}
function H8(a){var b,c,d;b=(a.cm+31|0)/32|0;a.cm=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Tt(a.by.data[c]);if(d<32)break;c=c+(-1)|0;a.cm=a.cm-32|0;}a.cm=a.cm-d|0;}}
function AD5(a,b){var c,d;c=CB(a.by.data.length,b.by.data.length);d=0;while(d<c){if(a.by.data[d]&b.by.data[d])return 1;d=d+1|0;}return 0;}
function Ec(a,b){var c,d,e;c=CB(a.by.data.length,b.by.data.length);d=0;while(d<c){e=a.by.data;e[d]=e[d]&b.by.data[d];d=d+1|0;}while(c<a.by.data.length){a.by.data[c]=0;c=c+1|0;}a.cm=CB(a.cm,b.cm);H8(a);}
function GZ(a,b){var c,d,e;c=CB(a.by.data.length,b.by.data.length);d=0;while(d<c){e=a.by.data;e[d]=e[d]&(b.by.data[d]^(-1));d=d+1|0;}H8(a);}
function Hp(a,b){var c,d,e;a.cm=DB(a.cm,b.cm);KG(a,(a.cm+31|0)/32|0);c=CB(a.by.data.length,b.cm);d=0;while(d<c){e=a.by.data;e[d]=e[d]|b.by.data[d];d=d+1|0;}}
function Hc(a,b){var c,d,e;a.cm=DB(a.cm,b.cm);KG(a,(a.cm+31|0)/32|0);c=CB(a.by.data.length,b.cm);d=0;while(d<c){e=a.by.data;e[d]=e[d]^b.by.data[d];d=d+1|0;}H8(a);}
function Om(a){return a.cm?0:1;}
function OE(){var a=this;CE.call(a);a.zM=null;a.Hk=0;}
function A5C(a,b){a.s=b;}
function ABE(a,b,c,d){var e,f,g,h,i;e=d.ff;f=d.bz;g=b+1|0;h=R(g,f);if(h>0){d.hn=1;return (-1);}i=Y(c,b);if(!a.zM.Y(i))return (-1);if(Dt(i)){if(h<0&&DR(Y(c,g)))return (-1);}else if(DR(i)&&b>e&&Dt(Y(c,b-1|0)))return (-1);return a.s.k(g,c,d);}
function P3(){var a=this;CE.call(a);a.vK=null;a.xO=null;}
function AEl(a,b){var c=new P3();AHh(c,a,b);return c;}
function AHh(a,b,c){Cz(a);a.vK=b;a.xO=c;}
function ATE(a,b,c,d){var e;e=a.vK.k(b,c,d);if(e<0)e=ABE(a.xO,b,c,d);if(e>=0)return e;return (-1);}
function A8w(a,b){a.s=b;a.xO.s=b;a.vK.ca(b);}
function AUc(a,b){return 1;}
function ATY(a,b){return 1;}
function EP(){var a=this;CE.call(a);a.h0=null;a.F$=0;}
function A6Q(a){var b=new EP();V$(b,a);return b;}
function V$(a,b){Cz(a);a.h0=b.sK();a.F$=b.cj;}
function A5m(a,b,c,d){var e,f,g;e=d.bz;if(b<e){f=b+1|0;g=Y(c,b);if(a.Y(g)){b=a.s.k(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=Y(c,f);if(J4(g,f)&&a.Y(EJ(g,f)))return a.s.k(b,c,d);}}return (-1);}
function AV7(a,b){return a.h0.Y(b);}
function ATz(a,b){if(b instanceof EZ)return a.h0.Y(b.kx);if(b instanceof Ft)return a.h0.Y(b.gt);if(b instanceof EP)return KD(a.h0,b.h0);if(!(b instanceof Fn))return 1;return KD(a.h0,b.j0);}
function AXg(a){return a.h0;}
function A9Z(a,b){a.s=b;}
function AVO(a,b){return 1;}
function MM(){EP.call(this);}
function AW6(a,b){return a.h0.Y(GO(GN(b)));}
function Zt(){var a=this;CI.call(a);a.Df=null;a.FW=0;}
function AWE(a){var b=new Zt();AYO(b,a);return b;}
function AYO(a,b){EN(a);a.Df=b.sK();a.FW=b.cj;}
function A6U(a,b,c){return !a.Df.Y(EV(FC(Y(c,b))))?(-1):1;}
function Fn(){var a=this;CI.call(a);a.j0=null;a.Gr=0;}
function A09(a){var b=new Fn();AZD(b,a);return b;}
function AZD(a,b){EN(a);a.j0=b.sK();a.Gr=b.cj;}
function S2(a,b,c){return !a.j0.Y(Y(c,b))?(-1):1;}
function AZl(a,b){if(b instanceof Ft)return a.j0.Y(b.gt);if(b instanceof Fn)return KD(a.j0,b.j0);if(!(b instanceof EP)){if(!(b instanceof EZ))return 1;return 0;}return KD(a.j0,b.h0);}
function A8y(a){return a.j0;}
function T1(){var a=this;CE.call(a);a.jS=null;a.x5=null;a.ow=0;}
function A$u(a,b){var c=new T1();A3r(c,a,b);return c;}
function A3r(a,b,c){Cz(a);a.jS=b;a.ow=c;}
function AX_(a,b){a.s=b;}
function P6(a){if(a.x5===null)a.x5=AH_(a.jS);return a.x5;}
function ASQ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.bz;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Y(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.ow)return (-1);while(true){if(l>=a.ow)return a.s.k(i,c,d);if(m[l]!=a.jS.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Y(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Y(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.ow==3&&f[0]==a.jS.data[0]&&f[1]==a.jS.data[1]&&f[2]==a.jS.data[2]?a.s.k(b,c,d):(-1);}return a.ow==2&&f[0]==a.jS.data[0]&&f[1]==a.jS.data[1]?a.s.k(k,c,d):(-1);}return (-1);}return (-1);}
function A4f(a,b){return b instanceof T1&&!DJ(P6(b),P6(a))?0:1;}
function A1e(a,b){return 1;}
function Ft(){CI.call(this);this.gt=0;}
function AAd(a){var b=new Ft();AZF(b,a);return b;}
function AZF(a,b){EN(a);a.gt=b;}
function A6M(a){return 1;}
function AWA(a,b,c){return a.gt!=Y(c,b)?(-1):1;}
function AVC(a,b,c,d){var e,f,g,h;if(!(c instanceof B4))return I_(a,b,c,d);e=c;f=d.bz;while(true){if(b>=f)return (-1);g=Hg(e,a.gt,b);if(g<0)return (-1);h=a.s;b=g+1|0;if(h.k(b,c,d)>=0)break;}return g;}
function AXh(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jl(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=If(f,a.gt,c);if(g<0)break a;if(g<b)break a;if(a.s.k(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ATW(a){return a.gt;}
function A0$(a,b){if(b instanceof Ft)return b.gt!=a.gt?0:1;if(!(b instanceof Fn)){if(b instanceof EP)return b.Y(a.gt);if(!(b instanceof EZ))return 1;return 0;}return S2(b,0,Sy(a.gt))<=0?0:1;}
function AGQ(){CI.call(this);this.BO=0;}
function A8$(a){var b=new AGQ();A7T(b,a);return b;}
function A7T(a,b){EN(a);a.BO=EV(FC(b));}
function A2T(a,b,c){return a.BO!=EV(FC(Y(c,b)))?(-1):1;}
function XL(){var a=this;CI.call(a);a.Bo=0;a.Cb=0;}
function A4w(a){var b=new XL();A0c(b,a);return b;}
function A0c(a,b){EN(a);a.Bo=b;a.Cb=Kc(b);}
function AS7(a,b,c){return a.Bo!=Y(c,b)&&a.Cb!=Y(c,b)?(-1):1;}
function GH(){var a=this;CE.call(a);a.pT=0;a.uh=null;a.tK=null;a.tI=0;}
function BcY(a,b){var c=new GH();Pa(c,a,b);return c;}
function Pa(a,b,c){Cz(a);a.pT=1;a.tK=b;a.tI=c;}
function A_f(a,b){a.s=b;}
function AY_(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.bz;if(b>=f)return (-1);g=LG(a,b,c,f);h=b+a.pT|0;i=AQP(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Di(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LG(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=AQP(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.pT|0;if(h>=f){b=k;break a;}g=LG(a,h,c,f);b=k;}}}if(b!=a.tI)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.s.k(h,c,d);if(i[g]!=a.tK.data[g])break;g=g+1|0;}return (-1);}
function Sq(a){var b,c;if(a.uh===null){b=new T;W(b);c=0;while(c<a.tI){Hh(b,Iu(a.tK.data[c]));c=c+1|0;}a.uh=U(b);}return a.uh;}
function LG(a,b,c,d){var e,f,g;a.pT=1;if(b>=(d-1|0))e=Y(c,b);else{d=b+1|0;e=Y(c,b);f=Y(c,d);if(J4(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Dt(g[0])&&DR(g[1])?EJ(g[0],g[1]):g[0];a.pT=2;}}return e;}
function AXv(a,b){return b instanceof GH&&!DJ(Sq(b),Sq(a))?0:1;}
function A86(a,b){return 1;}
function SE(){GH.call(this);}
function VZ(){GH.call(this);}
function SZ(){DW.call(this);}
function A4N(a,b,c,d){var e;while(true){e=a.bR.k(b,c,d);if(e<=0)break;b=e;}return a.s.k(b,c,d);}
function Uu(){DW.call(this);}
function A7M(a,b,c,d){var e;e=a.bR.k(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bR.k(e,c,d);if(b<=e)break;e=b;}b=e;}return a.s.k(b,c,d);}
function Ht(){DW.call(this);}
function A9W(a,b,c,d){var e;if(!a.bR.b4(d))return a.s.k(b,c,d);e=a.bR.k(b,c,d);if(e>=0)return e;return a.s.k(b,c,d);}
function A$P(a,b){a.s=b;a.bR.ca(b);}
function PJ(){Ht.call(this);}
function AXe(a,b,c,d){var e;e=a.bR.k(b,c,d);if(e<=0)e=b;return a.s.k(e,c,d);}
function A7_(a,b){a.s=b;}
function G6(){var a=this;DW.call(a);a.kB=null;a.ht=0;}
function Bmh(a,b,c,d,e){var f=new G6();ML(f,a,b,c,d,e);return f;}
function ML(a,b,c,d,e,f){Ef(a,c,d,e);a.kB=b;a.ht=f;}
function A_H(a,b,c,d){var e,f;e=Tc(d,a.ht);if(!a.bR.b4(d))return a.s.k(b,c,d);if(e>=a.kB.ip)return a.s.k(b,c,d);f=a.ht;e=e+1|0;FE(d,f,e);f=a.bR.k(b,c,d);if(f>=0){FE(d,a.ht,0);return f;}f=a.ht;e=e+(-1)|0;FE(d,f,e);if(e>=a.kB.jd)return a.s.k(b,c,d);FE(d,a.ht,0);return (-1);}
function OQ(){G6.call(this);}
function AWR(a,b,c,d){var e,f,g;e=0;f=a.kB.ip;a:{while(true){g=a.bR.k(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.kB.jd)return (-1);return a.s.k(b,c,d);}
function Qr(){DW.call(this);}
function A19(a,b,c,d){var e;if(!a.bR.b4(d))return a.s.k(b,c,d);e=a.s.k(b,c,d);if(e>=0)return e;return a.bR.k(b,c,d);}
function UN(){Ht.call(this);}
function AUe(a,b,c,d){var e;if(!a.bR.b4(d))return a.s.k(b,c,d);e=a.s.k(b,c,d);if(e<0)e=a.bR.k(b,c,d);return e;}
function RL(){G6.call(this);}
function A3B(a,b,c,d){var e,f;e=Tc(d,a.ht);if(!a.bR.b4(d))return a.s.k(b,c,d);if(e>=a.kB.ip){FE(d,a.ht,0);return a.s.k(b,c,d);}if(e<a.kB.jd){FE(d,a.ht,e+1|0);f=a.bR.k(b,c,d);}else{f=a.s.k(b,c,d);if(f>=0){FE(d,a.ht,0);return f;}FE(d,a.ht,e+1|0);f=a.bR.k(b,c,d);}return f;}
function Qs(){E5.call(this);}
function A_z(a,b,c,d){var e;e=d.bz;if(e>b)return a.s.eU(b,e,c,d);return a.s.k(b,c,d);}
function A0K(a,b,c,d){var e;e=d.bz;if(a.s.eU(b,e,c,d)>=0)return b;return (-1);}
function TP(){E5.call(this);this.uq=null;}
function AZm(a,b,c,d){var e,f;e=d.bz;f=Wj(a,b,e,c);if(f>=0)e=f;if(e>b)return a.s.eU(b,e,c,d);return a.s.k(b,c,d);}
function AST(a,b,c,d){var e,f,g,h;e=d.bz;f=a.s.eH(b,c,d);if(f<0)return (-1);g=Wj(a,f,e,c);if(g>=0)e=g;g=a.s.eU(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.uq.ot(Y(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function Wj(a,b,c,d){while(true){if(b>=c)return (-1);if(a.uq.ot(Y(d,b)))break;b=b+1|0;}return b;}
function Gi(){D.call(this);}
var Bmi=null;var Bmj=null;function Uh(b){if(!(b&1)){if(Bmj!==null)return Bmj;Bmj=new Wt;return Bmj;}if(Bmi!==null)return Bmi;Bmi=new Ws;return Bmi;}
function Xr(){D7.call(this);}
function ATr(a,b,c,d){var e;a:{while(true){if((b+a.cM.d_()|0)>d.bz)break a;e=a.cM.dm(b,c);if(e<1)break;b=b+e|0;}}return a.s.k(b,c,d);}
function Si(){FT.call(this);}
function AYx(a,b,c,d){var e;if((b+a.cM.d_()|0)<=d.bz){e=a.cM.dm(b,c);if(e>=1)b=b+e|0;}return a.s.k(b,c,d);}
function Ua(){GA.call(this);}
function A9D(a,b,c,d){var e,f,g,h,i;e=a.kV.jd;f=a.kV.ip;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.cM.d_()|0)>d.bz)break a;h=a.cM.dm(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.s.k(b,c,d);}if((b+a.cM.d_()|0)>d.bz){d.hn=1;return (-1);}i=a.cM.dm(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function UL(){D7.call(this);}
function AZf(a,b,c,d){var e;while(true){e=a.s.k(b,c,d);if(e>=0)break;if((b+a.cM.d_()|0)<=d.bz){e=a.cM.dm(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function V1(){FT.call(this);}
function ATv(a,b,c,d){var e;e=a.s.k(b,c,d);if(e>=0)return e;return a.bR.k(b,c,d);}
function Qc(){GA.call(this);}
function A9M(a,b,c,d){var e,f,g,h,i;e=a.kV.jd;f=a.kV.ip;g=0;while(true){if(g>=e){a:{while(true){h=a.s.k(b,c,d);if(h>=0)break;if((b+a.cM.d_()|0)<=d.bz){h=a.cM.dm(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.cM.d_()|0)>d.bz){d.hn=1;return (-1);}i=a.cM.dm(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function ABI(){Co.call(this);}
function A1c(){var a=new ABI();AVf(a);return a;}
function AVf(a){Cz(a);}
function A7c(a,b,c,d){if(b&&!(d.li&&b==d.ff))return (-1);return a.s.k(b,c,d);}
function A6F(a,b){return 0;}
function AAk(){Co.call(this);this.Bb=0;}
function A$h(a){var b=new AAk();AW_(b,a);return b;}
function AW_(a,b){Cz(a);a.Bb=b;}
function A39(a,b,c,d){var e,f,g;e=b<d.bz?Y(c,b):32;f=!b?32:Y(c,b-1|0);g=d.oc?0:d.ff;return (e!=32&&!UR(a,e,b,g,c)?0:1)^(f!=32&&!UR(a,f,b-1|0,g,c)?0:1)^a.Bb?(-1):a.s.k(b,c,d);}
function A4d(a,b){return 0;}
function UR(a,b,c,d,e){var f;if(!Lc(b)&&b!=95){a:{if(Do(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Y(e,c);if(Lc(f))return 0;if(Do(f)!=6)return 1;}}return 1;}return 0;}
function AJo(){Co.call(this);}
function Baj(){var a=new AJo();A0E(a);return a;}
function A0E(a){Cz(a);}
function AW$(a,b,c,d){if(b!=d.kX)return (-1);return a.s.k(b,c,d);}
function A2u(a,b){return 0;}
function SB(){Co.call(this);this.l9=0;}
function Ba5(a){var b=new SB();AQw(b,a);return b;}
function AQw(a,b){Cz(a);a.l9=b;}
function A8X(a,b,c,d){var e,f,g;e=!d.li?Bh(c):d.bz;if(b>=e){Cv(d,a.l9,0);return a.s.k(b,c,d);}f=e-b|0;if(f==2&&Y(c,b)==13&&Y(c,b+1|0)==10){Cv(d,a.l9,0);return a.s.k(b,c,d);}a:{if(f==1){g=Y(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Cv(d,a.l9,0);return a.s.k(b,c,d);}
function A4F(a,b){var c;c=!Ep(b,a.l9)?0:1;Cv(b,a.l9,(-1));return c;}
function AQ4(){Co.call(this);}
function Bbb(){var a=new AQ4();AW0(a);return a;}
function AW0(a){Cz(a);}
function A8r(a,b,c,d){if(b<(d.oc?Bh(c):d.bz))return (-1);d.hn=1;d.Je=1;return a.s.k(b,c,d);}
function A2S(a,b){return 0;}
function AIN(){Co.call(this);this.DH=null;}
function BcH(a){var b=new AIN();A8Z(b,a);return b;}
function A8Z(a,b){Cz(a);a.DH=b;}
function A4z(a,b,c,d){a:{if(b!=d.bz){if(!b)break a;if(d.li&&b==d.ff)break a;if(a.DH.D8(Y(c,b-1|0),Y(c,b)))break a;}return (-1);}return a.s.k(b,c,d);}
function AWi(a,b){return 0;}
function AGg(){CE.call(this);}
function Bbl(){var a=new AGg();A8h(a);return a;}
function A8h(a){Cz(a);}
function A2c(a,b,c,d){var e,f,g,h;e=d.bz;f=b+1|0;if(f>e){d.hn=1;return (-1);}g=Y(c,b);if(Dt(g)){h=b+2|0;if(h<=e&&J4(g,Y(c,f)))return a.s.k(h,c,d);}return a.s.k(f,c,d);}
function A4i(a,b){a.s=b;}
function A8e(a){return (-2147483602);}
function A4g(a,b){return 1;}
function ZF(){CE.call(this);this.uP=null;}
function BaX(a){var b=new ZF();AUM(b,a);return b;}
function AUM(a,b){Cz(a);a.uP=b;}
function A8m(a,b,c,d){var e,f,g,h;e=d.bz;f=b+1|0;if(f>e){d.hn=1;return (-1);}g=Y(c,b);if(Dt(g)){b=b+2|0;if(b<=e){h=Y(c,f);if(J4(g,h))return a.uP.ot(EJ(g,h))?(-1):a.s.k(b,c,d);}}return a.uP.ot(g)?(-1):a.s.k(f,c,d);}
function A9t(a,b){a.s=b;}
function ASE(a){return (-2147483602);}
function A2j(a,b){return 1;}
function AQH(){Co.call(this);this.pK=0;}
function BaI(a){var b=new AQH();A5T(b,a);return b;}
function A5T(a,b){Cz(a);a.pK=b;}
function AXC(a,b,c,d){var e;e=!d.li?Bh(c):d.bz;if(b>=e){Cv(d,a.pK,0);return a.s.k(b,c,d);}if((e-b|0)==1&&Y(c,b)==10){Cv(d,a.pK,1);return a.s.k(b+1|0,c,d);}return (-1);}
function A5P(a,b){var c;c=!Ep(b,a.pK)?0:1;Cv(b,a.pK,(-1));return c;}
function AN4(){Co.call(this);this.ok=0;}
function Bar(a){var b=new AN4();A6b(b,a);return b;}
function A6b(a,b){Cz(a);a.ok=b;}
function AY3(a,b,c,d){if((!d.li?Bh(c)-b|0:d.bz-b|0)<=0){Cv(d,a.ok,0);return a.s.k(b,c,d);}if(Y(c,b)!=10)return (-1);Cv(d,a.ok,1);return a.s.k(b+1|0,c,d);}
function A5L(a,b){var c;c=!Ep(b,a.ok)?0:1;Cv(b,a.ok,(-1));return c;}
function AIa(){Co.call(this);this.lD=0;}
function A_Z(a){var b=new AIa();A_J(b,a);return b;}
function A_J(a,b){Cz(a);a.lD=b;}
function A6A(a,b,c,d){var e,f,g;e=!d.li?Bh(c)-b|0:d.ff-b|0;if(!e){Cv(d,a.lD,0);return a.s.k(b,c,d);}if(e<2){f=Y(c,b);g=97;}else{f=Y(c,b);g=Y(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Cv(d,a.lD,0);return a.s.k(b,c,d);case 13:if(g!=10){Cv(d,a.lD,0);return a.s.k(b,c,d);}Cv(d,a.lD,0);return a.s.k(b,c,d);default:}return (-1);}
function AUQ(a,b){var c;c=!Ep(b,a.lD)?0:1;Cv(b,a.lD,(-1));return c;}
function IN(){var a=this;CE.call(a);a.y1=0;a.mE=0;}
function BcU(a,b){var c=new IN();Py(c,a,b);return c;}
function Py(a,b,c){Cz(a);a.y1=b;a.mE=c;}
function ATs(a,b,c,d){var e,f,g,h;e=HE(a,d);if(e!==null&&(b+Bh(e)|0)<=d.bz){f=0;while(true){if(f>=Bh(e)){Cv(d,a.mE,Bh(e));return a.s.k(b+Bh(e)|0,c,d);}g=Y(e,f);h=b+f|0;if(g!=Y(c,h)&&Kc(Y(e,f))!=Y(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A82(a,b){a.s=b;}
function HE(a,b){return AM3(b,a.y1);}
function AZ$(a,b){var c;c=!Ep(b,a.mE)?0:1;Cv(b,a.mE,(-1));return c;}
function AQS(){IN.call(this);}
function BbA(a,b){var c=new AQS();A$I(c,a,b);return c;}
function A$I(a,b,c){Py(a,b,c);}
function AUX(a,b,c,d){var e,f;e=HE(a,d);if(e!==null&&(b+Bh(e)|0)<=d.bz){f=!V9(c,e,b)?(-1):Bh(e);if(f<0)return (-1);Cv(d,a.mE,f);return a.s.k(b+f|0,c,d);}return (-1);}
function A1k(a,b,c,d){var e,f,g;e=HE(a,d);f=d.ff;if(e!==null&&(b+Bh(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=AKF(g,e,b);if(b<0)return (-1);if(a.s.k(b+Bh(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ATk(a,b,c,d,e){var f,g,h;f=HE(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=AAu(g,f,c);if(h<0)break a;if(h<b)break a;if(a.s.k(h+Bh(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A7G(a,b){return 1;}
function AMb(){IN.call(this);}
function Baq(a,b){var c=new AMb();AWc(c,a,b);return c;}
function AWc(a,b,c){Py(a,b,c);}
function AX5(a,b,c,d){var e,f;e=HE(a,d);if(e!==null&&(b+Bh(e)|0)<=d.bz){f=0;while(true){if(f>=Bh(e)){Cv(d,a.mE,Bh(e));return a.s.k(b+Bh(e)|0,c,d);}if(EV(FC(Y(e,f)))!=EV(FC(Y(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AMP(){var a=this;CI.call(a);a.e2=null;a.w1=null;a.u1=null;}
function Bat(a){var b=new AMP();A4Y(b,a);return b;}
function A4Y(a,b){var c;EN(a);a.e2=U(b);a.dk=Ot(b);a.w1=A8d(a.dk);a.u1=A8d(a.dk);c=0;while(c<(a.dk-1|0)){Qe(a.w1,Y(a.e2,c),(a.dk-c|0)-1|0);Qe(a.u1,Y(a.e2,(a.dk-c|0)-1|0),(a.dk-c|0)-1|0);c=c+1|0;}}
function AVb(a,b,c){return !LD(a,c,b)?(-1):a.dk;}
function A38(a,b,c,d){var e,f;e=d.bz;while(true){if(b>e)return (-1);f=AQ7(a,c,b,e);if(f<0)return (-1);if(a.s.k(f+a.dk|0,c,d)>=0)break;b=f+1|0;}return f;}
function A5W(a,b,c,d,e){while(true){if(c<b)return (-1);c=AQu(a,d,b,c);if(c<0)return (-1);if(a.s.k(c+a.dk|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWK(a,b){var c;if(b instanceof Ft)return b.gt!=Y(a.e2,0)?0:1;if(b instanceof Fn)return S2(b,0,Ev(a.e2,0,1))<=0?0:1;if(!(b instanceof EP)){if(!(b instanceof EZ))return 1;return Bh(a.e2)>1&&b.kx==EJ(Y(a.e2,0),Y(a.e2,1))?1:0;}a:{b:{b=b;if(!b.Y(Y(a.e2,0))){if(Bh(a.e2)<=1)break b;if(!b.Y(EJ(Y(a.e2,0),Y(a.e2,1))))break b;}c=1;break a;}c=0;}return c;}
function AQ7(a,b,c,d){var e,f;e=Y(a.e2,a.dk-1|0);while(true){if(c>(d-a.dk|0))return (-1);f=Y(b,(c+a.dk|0)-1|0);if(f==e&&LD(a,b,c))break;c=c+Vz(a.w1,f)|0;}return c;}
function AQu(a,b,c,d){var e,f,g;e=Y(a.e2,0);f=(Bh(b)-d|0)-a.dk|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=Y(b,d);if(g==e&&LD(a,b,d))break;d=d-Vz(a.u1,g)|0;}return d;}
function LD(a,b,c){var d;d=0;while(d<a.dk){if(Y(b,d+c|0)!=Y(a.e2,d))return 0;d=d+1|0;}return 1;}
function XC(){CI.call(this);this.sG=null;}
function BcV(a){var b=new XC();A$k(b,a);return b;}
function A$k(a,b){var c,d;EN(a);c=new T;W(c);d=0;while(d<Ot(b)){Dx(c,EV(FC(AIc(b,d))));d=d+1|0;}a.sG=U(c);a.dk=J$(c);}
function AX8(a,b,c){var d;d=0;while(true){if(d>=Bh(a.sG))return Bh(a.sG);if(Y(a.sG,d)!=EV(FC(Y(c,b+d|0))))break;d=d+1|0;}return (-1);}
function OT(){CI.call(this);this.pI=null;}
function A9F(a,b,c){var d,e,f;d=0;while(true){if(d>=Bh(a.pI))return Bh(a.pI);e=Y(a.pI,d);f=b+d|0;if(e!=Y(c,f)&&Kc(Y(a.pI,d))!=Y(c,f))break;d=d+1|0;}return (-1);}
function H6(){D.call(this);}
var Bmk=null;var Bml=null;var Bmm=null;function Bmn(){var a=new H6();AF7(a);return a;}
function AF7(a){return;}
function ARq(a,b){var c,d,e;c=0;while(true){if(c>=Bmm.data.length){d=new MN;Bl(d,B(3));d.G5=B(3);d.Jo=b;M(d);}e=Bmm.data[c].data;if(DJ(b,e[0]))break;c=c+1|0;}return e[1];}
function AAm(){var b,c,d,e;Bmk=Ba$();Bml=Bca();b=J($rt_arraycls(D),194);c=b.data;d=J(D,2);e=d.data;e[0]=B(636);e[1]=Bbo();c[0]=d;d=J(D,2);e=d.data;e[0]=B(637);e[1]=A_V();c[1]=d;d=J(D,2);e=d.data;e[0]=B(638);e[1]=BcF();c[2]=d;d=J(D,2);e=d.data;e[0]=B(639);e[1]=BcN();c[3]=d;d=J(D,2);e=d.data;e[0]=B(640);e[1]=Bml;c[4]=d;d=J(D,2);e=d.data;e[0]=B(641);e[1]=Bcg();c[5]=d;d=J(D,2);e=d.data;e[0]=B(642);e[1]=Baw();c[6]=d;d=J(D,2);e=d.data;e[0]=B(643);e[1]=BbC();c[7]=d;d=J(D,2);e=d.data;e[0]=B(644);e[1]=Bbz();c[8]=d;d
=J(D,2);e=d.data;e[0]=B(645);e[1]=A_9();c[9]=d;d=J(D,2);e=d.data;e[0]=B(646);e[1]=Bal();c[10]=d;d=J(D,2);e=d.data;e[0]=B(647);e[1]=BbE();c[11]=d;d=J(D,2);e=d.data;e[0]=B(648);e[1]=BaS();c[12]=d;d=J(D,2);e=d.data;e[0]=B(649);e[1]=A_T();c[13]=d;d=J(D,2);e=d.data;e[0]=B(650);e[1]=BcJ();c[14]=d;d=J(D,2);e=d.data;e[0]=B(651);e[1]=Bak();c[15]=d;d=J(D,2);e=d.data;e[0]=B(652);e[1]=Bce();c[16]=d;d=J(D,2);e=d.data;e[0]=B(653);e[1]=BbU();c[17]=d;d=J(D,2);e=d.data;e[0]=B(654);e[1]=Bcf();c[18]=d;d=J(D,2);e=d.data;e[0]=B(655);e[1]
=Baa();c[19]=d;d=J(D,2);e=d.data;e[0]=B(656);e[1]=BcO();c[20]=d;d=J(D,2);e=d.data;e[0]=B(657);e[1]=BbQ();c[21]=d;d=J(D,2);e=d.data;e[0]=B(658);e[1]=BaK();c[22]=d;d=J(D,2);e=d.data;e[0]=B(659);e[1]=BcE();c[23]=d;d=J(D,2);e=d.data;e[0]=B(660);e[1]=BcB();c[24]=d;d=J(D,2);e=d.data;e[0]=B(661);e[1]=Bbk();c[25]=d;d=J(D,2);e=d.data;e[0]=B(662);e[1]=A__();c[26]=d;d=J(D,2);e=d.data;e[0]=B(663);e[1]=Bcu();c[27]=d;d=J(D,2);e=d.data;e[0]=B(664);e[1]=Bmk;c[28]=d;d=J(D,2);e=d.data;e[0]=B(665);e[1]=BaM();c[29]=d;d=J(D,2);e
=d.data;e[0]=B(44);e[1]=BbD();c[30]=d;d=J(D,2);e=d.data;e[0]=B(666);e[1]=Bmk;c[31]=d;d=J(D,2);e=d.data;e[0]=B(58);e[1]=A_S();c[32]=d;d=J(D,2);e=d.data;e[0]=B(667);e[1]=Bml;c[33]=d;d=J(D,2);e=d.data;e[0]=B(59);e[1]=Bap();c[34]=d;d=J(D,2);e=d.data;e[0]=B(668);e[1]=V(0,127);c[35]=d;d=J(D,2);e=d.data;e[0]=B(669);e[1]=V(128,255);c[36]=d;d=J(D,2);e=d.data;e[0]=B(670);e[1]=V(256,383);c[37]=d;d=J(D,2);e=d.data;e[0]=B(671);e[1]=V(384,591);c[38]=d;d=J(D,2);e=d.data;e[0]=B(672);e[1]=V(592,687);c[39]=d;d=J(D,2);e=d.data;e[0]
=B(673);e[1]=V(688,767);c[40]=d;d=J(D,2);e=d.data;e[0]=B(674);e[1]=V(768,879);c[41]=d;d=J(D,2);e=d.data;e[0]=B(675);e[1]=V(880,1023);c[42]=d;d=J(D,2);e=d.data;e[0]=B(676);e[1]=V(1024,1279);c[43]=d;d=J(D,2);e=d.data;e[0]=B(677);e[1]=V(1280,1327);c[44]=d;d=J(D,2);e=d.data;e[0]=B(678);e[1]=V(1328,1423);c[45]=d;d=J(D,2);e=d.data;e[0]=B(679);e[1]=V(1424,1535);c[46]=d;d=J(D,2);e=d.data;e[0]=B(680);e[1]=V(1536,1791);c[47]=d;d=J(D,2);e=d.data;e[0]=B(681);e[1]=V(1792,1871);c[48]=d;d=J(D,2);e=d.data;e[0]=B(682);e[1]=
V(1872,1919);c[49]=d;d=J(D,2);e=d.data;e[0]=B(683);e[1]=V(1920,1983);c[50]=d;d=J(D,2);e=d.data;e[0]=B(684);e[1]=V(2304,2431);c[51]=d;d=J(D,2);e=d.data;e[0]=B(685);e[1]=V(2432,2559);c[52]=d;d=J(D,2);e=d.data;e[0]=B(686);e[1]=V(2560,2687);c[53]=d;d=J(D,2);e=d.data;e[0]=B(687);e[1]=V(2688,2815);c[54]=d;d=J(D,2);e=d.data;e[0]=B(688);e[1]=V(2816,2943);c[55]=d;d=J(D,2);e=d.data;e[0]=B(689);e[1]=V(2944,3071);c[56]=d;d=J(D,2);e=d.data;e[0]=B(690);e[1]=V(3072,3199);c[57]=d;d=J(D,2);e=d.data;e[0]=B(691);e[1]=V(3200,3327);c[58]
=d;d=J(D,2);e=d.data;e[0]=B(692);e[1]=V(3328,3455);c[59]=d;d=J(D,2);e=d.data;e[0]=B(693);e[1]=V(3456,3583);c[60]=d;d=J(D,2);e=d.data;e[0]=B(694);e[1]=V(3584,3711);c[61]=d;d=J(D,2);e=d.data;e[0]=B(695);e[1]=V(3712,3839);c[62]=d;d=J(D,2);e=d.data;e[0]=B(696);e[1]=V(3840,4095);c[63]=d;d=J(D,2);e=d.data;e[0]=B(697);e[1]=V(4096,4255);c[64]=d;d=J(D,2);e=d.data;e[0]=B(698);e[1]=V(4256,4351);c[65]=d;d=J(D,2);e=d.data;e[0]=B(699);e[1]=V(4352,4607);c[66]=d;d=J(D,2);e=d.data;e[0]=B(700);e[1]=V(4608,4991);c[67]=d;d=J(D,
2);e=d.data;e[0]=B(701);e[1]=V(4992,5023);c[68]=d;d=J(D,2);e=d.data;e[0]=B(702);e[1]=V(5024,5119);c[69]=d;d=J(D,2);e=d.data;e[0]=B(703);e[1]=V(5120,5759);c[70]=d;d=J(D,2);e=d.data;e[0]=B(704);e[1]=V(5760,5791);c[71]=d;d=J(D,2);e=d.data;e[0]=B(705);e[1]=V(5792,5887);c[72]=d;d=J(D,2);e=d.data;e[0]=B(706);e[1]=V(5888,5919);c[73]=d;d=J(D,2);e=d.data;e[0]=B(707);e[1]=V(5920,5951);c[74]=d;d=J(D,2);e=d.data;e[0]=B(708);e[1]=V(5952,5983);c[75]=d;d=J(D,2);e=d.data;e[0]=B(709);e[1]=V(5984,6015);c[76]=d;d=J(D,2);e=d.data;e[0]
=B(710);e[1]=V(6016,6143);c[77]=d;d=J(D,2);e=d.data;e[0]=B(711);e[1]=V(6144,6319);c[78]=d;d=J(D,2);e=d.data;e[0]=B(712);e[1]=V(6400,6479);c[79]=d;d=J(D,2);e=d.data;e[0]=B(713);e[1]=V(6480,6527);c[80]=d;d=J(D,2);e=d.data;e[0]=B(714);e[1]=V(6528,6623);c[81]=d;d=J(D,2);e=d.data;e[0]=B(715);e[1]=V(6624,6655);c[82]=d;d=J(D,2);e=d.data;e[0]=B(716);e[1]=V(6656,6687);c[83]=d;d=J(D,2);e=d.data;e[0]=B(717);e[1]=V(7424,7551);c[84]=d;d=J(D,2);e=d.data;e[0]=B(718);e[1]=V(7552,7615);c[85]=d;d=J(D,2);e=d.data;e[0]=B(719);e[1]
=V(7616,7679);c[86]=d;d=J(D,2);e=d.data;e[0]=B(720);e[1]=V(7680,7935);c[87]=d;d=J(D,2);e=d.data;e[0]=B(721);e[1]=V(7936,8191);c[88]=d;d=J(D,2);e=d.data;e[0]=B(722);e[1]=V(8192,8303);c[89]=d;d=J(D,2);e=d.data;e[0]=B(723);e[1]=V(8304,8351);c[90]=d;d=J(D,2);e=d.data;e[0]=B(724);e[1]=V(8352,8399);c[91]=d;d=J(D,2);e=d.data;e[0]=B(725);e[1]=V(8400,8447);c[92]=d;d=J(D,2);e=d.data;e[0]=B(726);e[1]=V(8448,8527);c[93]=d;d=J(D,2);e=d.data;e[0]=B(727);e[1]=V(8528,8591);c[94]=d;d=J(D,2);e=d.data;e[0]=B(728);e[1]=V(8592,
8703);c[95]=d;d=J(D,2);e=d.data;e[0]=B(729);e[1]=V(8704,8959);c[96]=d;d=J(D,2);e=d.data;e[0]=B(730);e[1]=V(8960,9215);c[97]=d;d=J(D,2);e=d.data;e[0]=B(731);e[1]=V(9216,9279);c[98]=d;d=J(D,2);e=d.data;e[0]=B(732);e[1]=V(9280,9311);c[99]=d;d=J(D,2);e=d.data;e[0]=B(733);e[1]=V(9312,9471);c[100]=d;d=J(D,2);e=d.data;e[0]=B(734);e[1]=V(9472,9599);c[101]=d;d=J(D,2);e=d.data;e[0]=B(735);e[1]=V(9600,9631);c[102]=d;d=J(D,2);e=d.data;e[0]=B(736);e[1]=V(9632,9727);c[103]=d;d=J(D,2);e=d.data;e[0]=B(737);e[1]=V(9728,9983);c[104]
=d;d=J(D,2);e=d.data;e[0]=B(738);e[1]=V(9984,10175);c[105]=d;d=J(D,2);e=d.data;e[0]=B(739);e[1]=V(10176,10223);c[106]=d;d=J(D,2);e=d.data;e[0]=B(740);e[1]=V(10224,10239);c[107]=d;d=J(D,2);e=d.data;e[0]=B(741);e[1]=V(10240,10495);c[108]=d;d=J(D,2);e=d.data;e[0]=B(742);e[1]=V(10496,10623);c[109]=d;d=J(D,2);e=d.data;e[0]=B(743);e[1]=V(10624,10751);c[110]=d;d=J(D,2);e=d.data;e[0]=B(744);e[1]=V(10752,11007);c[111]=d;d=J(D,2);e=d.data;e[0]=B(745);e[1]=V(11008,11263);c[112]=d;d=J(D,2);e=d.data;e[0]=B(746);e[1]=V(11264,
11359);c[113]=d;d=J(D,2);e=d.data;e[0]=B(747);e[1]=V(11392,11519);c[114]=d;d=J(D,2);e=d.data;e[0]=B(748);e[1]=V(11520,11567);c[115]=d;d=J(D,2);e=d.data;e[0]=B(749);e[1]=V(11568,11647);c[116]=d;d=J(D,2);e=d.data;e[0]=B(750);e[1]=V(11648,11743);c[117]=d;d=J(D,2);e=d.data;e[0]=B(751);e[1]=V(11776,11903);c[118]=d;d=J(D,2);e=d.data;e[0]=B(752);e[1]=V(11904,12031);c[119]=d;d=J(D,2);e=d.data;e[0]=B(753);e[1]=V(12032,12255);c[120]=d;d=J(D,2);e=d.data;e[0]=B(754);e[1]=V(12272,12287);c[121]=d;d=J(D,2);e=d.data;e[0]=B(755);e[1]
=V(12288,12351);c[122]=d;d=J(D,2);e=d.data;e[0]=B(756);e[1]=V(12352,12447);c[123]=d;d=J(D,2);e=d.data;e[0]=B(757);e[1]=V(12448,12543);c[124]=d;d=J(D,2);e=d.data;e[0]=B(758);e[1]=V(12544,12591);c[125]=d;d=J(D,2);e=d.data;e[0]=B(759);e[1]=V(12592,12687);c[126]=d;d=J(D,2);e=d.data;e[0]=B(760);e[1]=V(12688,12703);c[127]=d;d=J(D,2);e=d.data;e[0]=B(761);e[1]=V(12704,12735);c[128]=d;d=J(D,2);e=d.data;e[0]=B(762);e[1]=V(12736,12783);c[129]=d;d=J(D,2);e=d.data;e[0]=B(763);e[1]=V(12784,12799);c[130]=d;d=J(D,2);e=d.data;e[0]
=B(764);e[1]=V(12800,13055);c[131]=d;d=J(D,2);e=d.data;e[0]=B(765);e[1]=V(13056,13311);c[132]=d;d=J(D,2);e=d.data;e[0]=B(766);e[1]=V(13312,19893);c[133]=d;d=J(D,2);e=d.data;e[0]=B(767);e[1]=V(19904,19967);c[134]=d;d=J(D,2);e=d.data;e[0]=B(768);e[1]=V(19968,40959);c[135]=d;d=J(D,2);e=d.data;e[0]=B(769);e[1]=V(40960,42127);c[136]=d;d=J(D,2);e=d.data;e[0]=B(770);e[1]=V(42128,42191);c[137]=d;d=J(D,2);e=d.data;e[0]=B(771);e[1]=V(42752,42783);c[138]=d;d=J(D,2);e=d.data;e[0]=B(772);e[1]=V(43008,43055);c[139]=d;d=J(D,
2);e=d.data;e[0]=B(773);e[1]=V(44032,55203);c[140]=d;d=J(D,2);e=d.data;e[0]=B(774);e[1]=V(55296,56191);c[141]=d;d=J(D,2);e=d.data;e[0]=B(775);e[1]=V(56192,56319);c[142]=d;d=J(D,2);e=d.data;e[0]=B(776);e[1]=V(56320,57343);c[143]=d;d=J(D,2);e=d.data;e[0]=B(777);e[1]=V(57344,63743);c[144]=d;d=J(D,2);e=d.data;e[0]=B(778);e[1]=V(63744,64255);c[145]=d;d=J(D,2);e=d.data;e[0]=B(779);e[1]=V(64256,64335);c[146]=d;d=J(D,2);e=d.data;e[0]=B(780);e[1]=V(64336,65023);c[147]=d;d=J(D,2);e=d.data;e[0]=B(781);e[1]=V(65024,65039);c[148]
=d;d=J(D,2);e=d.data;e[0]=B(782);e[1]=V(65040,65055);c[149]=d;d=J(D,2);e=d.data;e[0]=B(783);e[1]=V(65056,65071);c[150]=d;d=J(D,2);e=d.data;e[0]=B(784);e[1]=V(65072,65103);c[151]=d;d=J(D,2);e=d.data;e[0]=B(785);e[1]=V(65104,65135);c[152]=d;d=J(D,2);e=d.data;e[0]=B(786);e[1]=V(65136,65279);c[153]=d;d=J(D,2);e=d.data;e[0]=B(787);e[1]=V(65280,65519);c[154]=d;d=J(D,2);e=d.data;e[0]=B(788);e[1]=V(0,1114111);c[155]=d;d=J(D,2);e=d.data;e[0]=B(789);e[1]=BbF();c[156]=d;d=J(D,2);e=d.data;e[0]=B(790);e[1]=CA(0,1);c[157]
=d;d=J(D,2);e=d.data;e[0]=B(791);e[1]=KT(62,1);c[158]=d;d=J(D,2);e=d.data;e[0]=B(792);e[1]=CA(1,1);c[159]=d;d=J(D,2);e=d.data;e[0]=B(793);e[1]=CA(2,1);c[160]=d;d=J(D,2);e=d.data;e[0]=B(794);e[1]=CA(3,0);c[161]=d;d=J(D,2);e=d.data;e[0]=B(795);e[1]=CA(4,0);c[162]=d;d=J(D,2);e=d.data;e[0]=B(796);e[1]=CA(5,1);c[163]=d;d=J(D,2);e=d.data;e[0]=B(797);e[1]=KT(448,1);c[164]=d;d=J(D,2);e=d.data;e[0]=B(798);e[1]=CA(6,1);c[165]=d;d=J(D,2);e=d.data;e[0]=B(799);e[1]=CA(7,0);c[166]=d;d=J(D,2);e=d.data;e[0]=B(800);e[1]=CA(8,
1);c[167]=d;d=J(D,2);e=d.data;e[0]=B(76);e[1]=KT(3584,1);c[168]=d;d=J(D,2);e=d.data;e[0]=B(801);e[1]=CA(9,1);c[169]=d;d=J(D,2);e=d.data;e[0]=B(802);e[1]=CA(10,1);c[170]=d;d=J(D,2);e=d.data;e[0]=B(803);e[1]=CA(11,1);c[171]=d;d=J(D,2);e=d.data;e[0]=B(804);e[1]=KT(28672,0);c[172]=d;d=J(D,2);e=d.data;e[0]=B(805);e[1]=CA(12,0);c[173]=d;d=J(D,2);e=d.data;e[0]=B(806);e[1]=CA(13,0);c[174]=d;d=J(D,2);e=d.data;e[0]=B(807);e[1]=CA(14,0);c[175]=d;d=J(D,2);e=d.data;e[0]=B(808);e[1]=Bb6(983040,1,1);c[176]=d;d=J(D,2);e=d.data;e[0]
=B(809);e[1]=CA(15,0);c[177]=d;d=J(D,2);e=d.data;e[0]=B(810);e[1]=CA(16,1);c[178]=d;d=J(D,2);e=d.data;e[0]=B(811);e[1]=CA(18,1);c[179]=d;d=J(D,2);e=d.data;e[0]=B(812);e[1]=BaF(19,0,1);c[180]=d;d=J(D,2);e=d.data;e[0]=B(813);e[1]=KT(1643118592,1);c[181]=d;d=J(D,2);e=d.data;e[0]=B(814);e[1]=CA(20,0);c[182]=d;d=J(D,2);e=d.data;e[0]=B(815);e[1]=CA(21,0);c[183]=d;d=J(D,2);e=d.data;e[0]=B(816);e[1]=CA(22,0);c[184]=d;d=J(D,2);e=d.data;e[0]=B(817);e[1]=CA(23,0);c[185]=d;d=J(D,2);e=d.data;e[0]=B(818);e[1]=CA(24,1);c[186]
=d;d=J(D,2);e=d.data;e[0]=B(819);e[1]=KT(2113929216,1);c[187]=d;d=J(D,2);e=d.data;e[0]=B(820);e[1]=CA(25,1);c[188]=d;d=J(D,2);e=d.data;e[0]=B(821);e[1]=CA(26,0);c[189]=d;d=J(D,2);e=d.data;e[0]=B(822);e[1]=CA(27,0);c[190]=d;d=J(D,2);e=d.data;e[0]=B(823);e[1]=CA(28,1);c[191]=d;d=J(D,2);e=d.data;e[0]=B(824);e[1]=CA(29,0);c[192]=d;d=J(D,2);e=d.data;e[0]=B(825);e[1]=CA(30,0);c[193]=d;Bmm=b;}
function By(){var a=this;D.call(a);a.vm=null;a.ut=null;}
function APN(a,b){if(!b&&a.vm===null)a.vm=a.bX();else if(b&&a.ut===null)a.ut=Fw(a.bX(),1);if(b)return a.ut;return a.vm;}
function S5(){CI.call(this);this.z5=0;}
function A0s(a,b,c){var d,e;d=b+1|0;e=Y(c,b);d=Y(c,d);return a.z5!=GO(GN(EJ(e,d)))?(-1):2;}
function NG(){CE.call(this);this.mp=0;}
function AYR(a){var b=new NG();AUl(b,a);return b;}
function AUl(a,b){Cz(a);a.mp=b;}
function A8E(a,b){a.s=b;}
function A4G(a,b,c,d){var e,f;e=b+1|0;if(e>d.bz){d.hn=1;return (-1);}f=Y(c,b);if(b>d.ff&&Dt(Y(c,b-1|0)))return (-1);if(a.mp!=f)return (-1);return a.s.k(e,c,d);}
function AWJ(a,b,c,d){var e,f,g,h,i;if(!(c instanceof B4))return I_(a,b,c,d);e=c;f=d.ff;g=d.bz;while(true){if(b>=g)return (-1);h=Hg(e,a.mp,b);if(h<0)return (-1);if(h>f&&Dt(Y(e,h-1|0))){b=h+1|0;continue;}i=a.s;b=h+1|0;if(i.k(b,c,d)>=0)break;}return h;}
function A46(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jl(a,b,c,d,e);f=e.ff;g=d;a:{while(true){if(c<b)return (-1);c=If(g,a.mp,c);if(c<0)break a;if(c<b)break a;if(c>f&&Dt(Y(g,c-1|0))){c=c+(-2)|0;continue;}if(a.s.k(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ATf(a,b){if(b instanceof Ft)return 0;if(b instanceof Fn)return 0;if(b instanceof EP)return 0;if(b instanceof EZ)return 0;if(b instanceof NM)return 0;if(!(b instanceof NG))return 1;return b.mp!=a.mp?0:1;}
function A01(a,b){return 1;}
function NM(){CE.call(this);this.lY=0;}
function A6B(a){var b=new NM();AYZ(b,a);return b;}
function AYZ(a,b){Cz(a);a.lY=b;}
function A4q(a,b){a.s=b;}
function ASV(a,b,c,d){var e,f,g,h;e=d.bz;f=b+1|0;g=R(f,e);if(g>0){d.hn=1;return (-1);}h=Y(c,b);if(g<0&&DR(Y(c,f)))return (-1);if(a.lY!=h)return (-1);return a.s.k(f,c,d);}
function A8P(a,b,c,d){var e,f,g;if(!(c instanceof B4))return I_(a,b,c,d);e=c;f=d.bz;while(true){if(b>=f)return (-1);g=Hg(e,a.lY,b);if(g<0)return (-1);b=g+1|0;if(b<f&&DR(Y(e,b))){b=g+2|0;continue;}if(a.s.k(b,c,d)>=0)break;}return g;}
function A0q(a,b,c,d,e){var f,g,h;if(!(d instanceof B4))return Jl(a,b,c,d,e);f=d;g=e.bz;a:{while(true){if(c<b)return (-1);c=If(f,a.lY,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&DR(Y(f,h))){c=c+(-1)|0;continue;}if(a.s.k(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AVc(a,b){if(b instanceof Ft)return 0;if(b instanceof Fn)return 0;if(b instanceof EP)return 0;if(b instanceof EZ)return 0;if(b instanceof NG)return 0;if(!(b instanceof NM))return 1;return b.lY!=a.lY?0:1;}
function A8R(a,b){return 1;}
function EZ(){var a=this;CI.call(a);a.tx=0;a.sa=0;a.kx=0;}
function A9k(a,b,c){var d,e;d=b+1|0;e=Y(c,b);d=Y(c,d);return a.tx==e&&a.sa==d?2:(-1);}
function A72(a,b,c,d){var e,f,g;if(!(c instanceof B4))return I_(a,b,c,d);e=c;f=d.bz;while(b<f){b=Hg(e,a.tx,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=Y(e,b);if(a.sa==g&&a.s.k(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AUm(a,b,c,d,e){var f;if(!(d instanceof B4))return Jl(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=If(f,a.sa,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.tx==Y(f,c)&&a.s.k(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function A3a(a){return a.kx;}
function A9b(a,b){if(b instanceof EZ)return b.kx!=a.kx?0:1;if(b instanceof EP)return b.Y(a.kx);if(b instanceof Ft)return 0;if(!(b instanceof Fn))return 1;return 0;}
function Ws(){Gi.call(this);}
function Bmo(){var a=new Ws();A34(a);return a;}
function A34(a){return;}
function AUv(a,b){return b!=10?0:1;}
function AZ7(a,b,c){return b!=10?0:1;}
function Wt(){Gi.call(this);}
function Bmp(){var a=new Wt();AWH(a);return a;}
function AWH(a){return;}
function A9O(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function A1Y(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AEM(){var a=this;D.call(a);a.oV=null;a.tN=null;a.f_=0;a.By=0;}
function A8d(a){var b=new AEM();AW9(b,a);return b;}
function AW9(a,b){while(b>=a.f_){a.f_=a.f_<<1|1;}a.f_=a.f_<<1|1;a.oV=$rt_createIntArray(a.f_+1|0);a.tN=$rt_createIntArray(a.f_+1|0);a.By=b;}
function Qe(a,b,c){var d,e;d=0;e=b&a.f_;while(a.oV.data[e]&&a.oV.data[e]!=b){d=(d+1|0)&a.f_;e=(e+d|0)&a.f_;}a.oV.data[e]=b;a.tN.data[e]=c;}
function Vz(a,b){var c,d,e;c=b&a.f_;d=0;while(true){e=a.oV.data[c];if(!e)break;if(e==b)return a.tN.data[c];d=(d+1|0)&a.f_;c=(c+d|0)&a.f_;}return a.By;}
function Ys(){D.call(this);}
function NE(){By.call(this);}
function Ba$(){var a=new NE();AWS(a);return a;}
function AWS(a){return;}
function AMk(a){return Dp(CG(Eq(),9,13),32);}
function M8(){By.call(this);}
function Bca(){var a=new M8();A0R(a);return a;}
function A0R(a){return;}
function ANL(a){return CG(Eq(),48,57);}
function AEE(){By.call(this);}
function Bbo(){var a=new AEE();AWp(a);return a;}
function AWp(a){return;}
function A9v(a){return CG(Eq(),97,122);}
function AFi(){By.call(this);}
function A_V(){var a=new AFi();AXb(a);return a;}
function AXb(a){return;}
function A03(a){return CG(Eq(),65,90);}
function AFr(){By.call(this);}
function BcF(){var a=new AFr();ATQ(a);return a;}
function ATQ(a){return;}
function AVE(a){return CG(Eq(),0,127);}
function NA(){By.call(this);}
function BcN(){var a=new NA();AUY(a);return a;}
function AUY(a){return;}
function ZL(a){return CG(CG(Eq(),97,122),65,90);}
function L$(){NA.call(this);}
function Bcg(){var a=new L$();AWV(a);return a;}
function AWV(a){return;}
function AAT(a){return CG(ZL(a),48,57);}
function AHQ(){By.call(this);}
function Baw(){var a=new AHQ();A7R(a);return a;}
function A7R(a){return;}
function A6d(a){return CG(CG(CG(Eq(),33,64),91,96),123,126);}
function Ox(){L$.call(this);}
function BbC(){var a=new Ox();AZO(a);return a;}
function AZO(a){return;}
function AH6(a){return CG(CG(CG(AAT(a),33,64),91,96),123,126);}
function AMM(){Ox.call(this);}
function Bbz(){var a=new AMM();A0I(a);return a;}
function A0I(a){return;}
function AYu(a){return Dp(AH6(a),32);}
function ACH(){By.call(this);}
function A_9(){var a=new ACH();A9G(a);return a;}
function A9G(a){return;}
function A4X(a){return Dp(Dp(Eq(),32),9);}
function AAf(){By.call(this);}
function Bal(){var a=new AAf();A$0(a);return a;}
function A$0(a){return;}
function AYl(a){return Dp(CG(Eq(),0,31),127);}
function AJ9(){By.call(this);}
function BbE(){var a=new AJ9();AT4(a);return a;}
function AT4(a){return;}
function A1Z(a){return CG(CG(CG(Eq(),48,57),97,102),65,70);}
function AP_(){By.call(this);}
function BaS(){var a=new AP_();A3W(a);return a;}
function A3W(a){return;}
function A8c(a){var b;b=new VD;b.Ip=a;B0(b);b.b_=1;return b;}
function AHY(){By.call(this);}
function A_T(){var a=new AHY();AZ4(a);return a;}
function AZ4(a){return;}
function A2Z(a){var b;b=new S$;b.Iy=a;B0(b);b.b_=1;return b;}
function APm(){By.call(this);}
function BcJ(){var a=new APm();ATS(a);return a;}
function ATS(a){return;}
function AWU(a){var b;b=new QG;b.H2=a;B0(b);return b;}
function AEm(){By.call(this);}
function Bak(){var a=new AEm();AYo(a);return a;}
function AYo(a){return;}
function A0a(a){var b;b=new QF;b.FG=a;B0(b);return b;}
function AFX(){By.call(this);}
function Bce(){var a=new AFX();AUW(a);return a;}
function AUW(a){return;}
function A4V(a){var b;b=new Ss;b.GR=a;B0(b);Jm(b.b9,0,2048);b.b_=1;return b;}
function YV(){By.call(this);}
function BbU(){var a=new YV();AUr(a);return a;}
function AUr(a){return;}
function AVm(a){var b;b=new T7;b.IO=a;B0(b);b.b_=1;return b;}
function AIv(){By.call(this);}
function Bcf(){var a=new AIv();AX6(a);return a;}
function AX6(a){return;}
function A$4(a){var b;b=new Pb;b.G8=a;B0(b);b.b_=1;return b;}
function APB(){By.call(this);}
function Baa(){var a=new APB();AYB(a);return a;}
function AYB(a){return;}
function A2U(a){var b;b=new UZ;b.F_=a;B0(b);return b;}
function AE7(){By.call(this);}
function BcO(){var a=new AE7();A6p(a);return a;}
function A6p(a){return;}
function AXF(a){var b;b=new S7;b.Fd=a;B0(b);b.b_=1;return b;}
function ALa(){By.call(this);}
function BbQ(){var a=new ALa();ATl(a);return a;}
function ATl(a){return;}
function AVs(a){var b;b=new S9;b.Gx=a;B0(b);b.b_=1;return b;}
function ACT(){By.call(this);}
function BaK(){var a=new ACT();AUA(a);return a;}
function AUA(a){return;}
function A5Y(a){var b;b=new O4;b.GP=a;B0(b);b.b_=1;return b;}
function AG9(){By.call(this);}
function BcE(){var a=new AG9();AXO(a);return a;}
function AXO(a){return;}
function A62(a){var b;b=new Ul;b.Jt=a;B0(b);b.b_=1;return b;}
function APP(){By.call(this);}
function BcB(){var a=new APP();A77(a);return a;}
function A77(a){return;}
function A1f(a){var b;b=new Up;b.FU=a;B0(b);return b;}
function ABs(){By.call(this);}
function Bbk(){var a=new ABs();AUu(a);return a;}
function AUu(a){return;}
function AZG(a){var b;b=new VV;b.IY=a;B0(b);return b;}
function AAF(){By.call(this);}
function A__(){var a=new AAF();A9o(a);return a;}
function A9o(a){return;}
function AYM(a){var b;b=new Vu;b.Fh=a;B0(b);b.b_=1;return b;}
function AHW(){By.call(this);}
function Bcu(){var a=new AHW();A6j(a);return a;}
function A6j(a){return;}
function A9r(a){var b;b=new OG;b.JL=a;B0(b);b.b_=1;return b;}
function La(){By.call(this);}
function BaM(){var a=new La();AVz(a);return a;}
function AVz(a){return;}
function ACJ(a){return Dp(CG(CG(CG(Eq(),97,122),65,90),48,57),95);}
function AQC(){La.call(this);}
function BbD(){var a=new AQC();A6t(a);return a;}
function A6t(a){return;}
function AYD(a){var b;b=Fw(ACJ(a),1);b.b_=1;return b;}
function AMS(){NE.call(this);}
function A_S(){var a=new AMS();A1y(a);return a;}
function A1y(a){return;}
function A32(a){var b;b=Fw(AMk(a),1);b.b_=1;return b;}
function AAy(){M8.call(this);}
function Bap(){var a=new AAy();A6T(a);return a;}
function A6T(a){return;}
function AWw(a){var b;b=Fw(ANL(a),1);b.b_=1;return b;}
function AKj(){var a=this;By.call(a);a.z3=0;a.DD=0;}
function V(a,b){var c=new AKj();A$3(c,a,b);return c;}
function A$3(a,b,c){a.z3=b;a.DD=c;}
function AXS(a){return CG(Eq(),a.z3,a.DD);}
function AKO(){By.call(this);}
function BbF(){var a=new AKO();A11(a);return a;}
function A11(a){return;}
function A1M(a){return CG(CG(Eq(),65279,65279),65520,65533);}
function AMw(){var a=this;By.call(a);a.x9=0;a.wn=0;a.CM=0;}
function CA(a,b){var c=new AMw();AUP(c,a,b);return c;}
function BaF(a,b,c){var d=new AMw();A1T(d,a,b,c);return d;}
function AUP(a,b,c){a.wn=c;a.x9=b;}
function A1T(a,b,c,d){a.CM=d;a.wn=c;a.x9=b;}
function A5I(a){var b;b=Bbm(a.x9);if(a.CM)Jm(b.b9,0,2048);b.b_=a.wn;return b;}
function AMN(){var a=this;By.call(a);a.vB=0;a.tP=0;a.y4=0;}
function KT(a,b){var c=new AMN();AVt(c,a,b);return c;}
function Bb6(a,b,c){var d=new AMN();A2V(d,a,b,c);return d;}
function AVt(a,b,c){a.tP=c;a.vB=b;}
function A2V(a,b,c,d){a.y4=d;a.tP=c;a.vB=b;}
function ASL(a){var b;b=new Vh;ADM(b,a.vB);if(a.y4)Jm(b.b9,0,2048);b.b_=a.tP;return b;}
function AKs(){D.call(this);}
function Bmq(){var a=new AKs();AS3(a);return a;}
function AS3(a){return;}
function Zp(){D.call(this);}
function Bmr(){var a=new Zp();A73(a);return a;}
function A73(a){return;}
function Nr(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function A2I(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=J(Tm,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<Bh(b)){k=Nr(Y(b,j));if(k==64){j=j+1|0;k=Nr(Y(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|Bj(m,Nr(Y(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=Nr(Y(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=AVX(i,i+g|0,Oc(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=AVX(i,i+g|0,Oc(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return Nm(c,h);}
function Tm(){var a=this;D.call(a);a.xa=0;a.Aj=0;a.CZ=null;}
function AVX(a,b,c){var d=new Tm();A0F(d,a,b,c);return d;}
function A0F(a,b,c,d){a.xa=b;a.Aj=c;a.CZ=d;}
function RR(){var a=this;D.call(a);a.Cy=null;a.Dn=0;}
function AL6(){D.call(this);}
function Bms(){var a=new AL6();A$L(a);return a;}
function A$L(a){return;}
function Yi(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.Cy.data;f=b.Dn;b.Dn=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+Bj(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function Wg(){Ew.call(this);this.sF=null;}
function A3C(a){ED(a.b0,B(262),60,6,4210752);ED(a.b0,B(325),8,(a.fk-96|0)+2|0,4210752);}
function AOh(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(826);$p=1;case 1:$z=AHs(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.I.bo,e);f=(a.bm-a.e9|0)/2|0;g=(a.bE-a.fk|0)/2|0;CH(a,f,g,0,0,a.e9,a.fk);if(WI(a.sF)){h=ADH(a.sF,12);CH(a,f+56|0,((g+36|0)+12|0)-h|0,176,12-h|0,14,h+2|0);}i=AOJ(a.sF,24);CH(a,f+79|0,g+34|0,176,14,i+1|0,16);return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,$p);}
function Xg(){var a=this;Ew.call(a);a.mm=null;a.um=null;}
function Y4(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(C()){break _;}b=0;while(b<9){c=Ge(a.mm,b);if(c!==null){d=a.I.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALP(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=9)break;c=Ge(a.mm,b);if(c===null)continue;else{d=a.I.f;continue _;}}return;default:E_();}}C3().s(a,b,c,d,$p);}
function A6C(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=e+(f*3|0)|0;h=Ge(a.mm,g);if(h!==null)d[g]=h.bC;else d[g]=(-1);f=f+1|0;}e=e+1|0;}Pf(a.um,0,RG(Wl(),c));}
function A1W(a){ED(a.b0,B(522),28,6,4210752);ED(a.b0,B(325),8,(a.fk-96|0)+2|0,4210752);}
function AKm(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(827);$p=1;case 1:$z=AHs(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.I.bo,e);CH(a,(a.bm-a.e9|0)/2|0,(a.bE-a.fk|0)/2|0,0,0,a.e9,a.fk);return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AMB(){var a=this;Ew.call(a);a.Fj=null;a.AD=null;a.kt=0;}
function Bb0(a,b){var c=new AMB();A2k(c,a,b);return c;}
function A2k(a,b,c){var d,e,f,g;H$(a);a.kt=0;a.Fj=b;a.AD=c;a.pP=0;a.kt=c.gm()/9|0;a.fk=114+(a.kt*18|0)|0;d=(a.kt-4|0)*18|0;e=0;while(e<a.kt){f=0;while(f<9){S(a.c6,D6(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){S(a.c6,D6(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=161+d|0;while(e<9){S(a.c6,D6(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function A90(a){ED(a.b0,a.AD.w5(),8,6,4210752);ED(a.b0,B(325),8,(a.fk-96|0)+2|0,4210752);}
function ANP(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(828);$p=1;case 1:$z=AHs(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.I.bo,e);f=(a.bm-a.e9|0)/2|0;g=(a.bE-a.fk|0)/2|0;CH(a,f,g,0,0,a.e9,(a.kt*18|0)+17|0);CH(a,f,(g+(a.kt*18|0)|0)+17|0,0,126,a.e9,96);return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function CW(){var a=this;EY.call(a);a.In=null;a.gg=0;a.m3=0;a.zF=0;a.zE=0;}
var Bmt=null;var Bmu=null;var Bmv=null;var Bmw=null;var Bmx=null;var Bmy=null;var Bmz=null;var BmA=null;var BmB=null;var BmC=null;var BmD=null;var BmE=null;var BmF=null;var BmG=null;var BmH=null;var BmI=null;var BmJ=null;var BmK=null;var BmL=null;var BiT=null;function Dm(a,b,c,d,e,f,g){var h=new CW();AEr(h,a,b,c,d,e,f,g);return h;}
function AEr(a,b,c,d,e,f,g,h){FP(a,b,c);a.In=d;a.gg=e;a.m3=f;a.zF=g;a.zE=h;}
function AP8(){var b,c;Bmt=Dm(B(829),0,B(829),16,16,0,0);Bmu=Dm(B(830),1,B(830),16,16,16,0);Bmv=Dm(B(831),2,B(831),16,16,32,0);Bmw=Dm(B(832),3,B(832),16,16,48,0);Bmx=Dm(B(833),4,B(833),16,16,64,0);Bmy=Dm(B(834),5,B(834),16,16,80,0);Bmz=Dm(B(835),6,B(835),16,16,96,0);BmA=Dm(B(836),7,B(836),32,16,0,32);BmB=Dm(B(837),8,B(837),32,16,32,32);BmC=Dm(B(838),9,B(838),32,16,64,32);BmD=Dm(B(839),10,B(839),32,16,96,32);BmE=Dm(B(840),11,B(840),16,32,0,64);BmF=Dm(B(841),12,B(841),32,32,0,128);BmG=Dm(B(842),13,B(842),32,32,
32,128);BmH=Dm(B(843),14,B(843),32,32,64,128);BmI=Dm(B(844),15,B(844),32,32,96,128);BmJ=Dm(B(845),16,B(845),32,32,128,128);BmK=Dm(B(846),17,B(846),64,32,0,96);BmL=Dm(B(847),18,B(847),64,64,0,192);b=J(CW,19);c=b.data;c[0]=Bmt;c[1]=Bmu;c[2]=Bmv;c[3]=Bmw;c[4]=Bmx;c[5]=Bmy;c[6]=Bmz;c[7]=BmA;c[8]=BmB;c[9]=BmC;c[10]=BmD;c[11]=BmE;c[12]=BmF;c[13]=BmG;c[14]=BmH;c[15]=BmI;c[16]=BmJ;c[17]=BmK;c[18]=BmL;BiT=b;}
function PG(){Fc.call(this);this.Cq=null;}
function ACP(a){var b;b=new VB;Vv(b,a.Cq);return b;}
function U0(){var a=this;CS.call(a);a.B0=null;a.BP=null;a.BR=null;a.yM=0;}
function AGl(a){S(a.bH,Sc(0,((a.bm/2|0)-155|0)+0|0,(a.bE/6|0)+96|0,B(848)));S(a.bH,Sc(1,((a.bm/2|0)-155|0)+160|0,(a.bE/6|0)+96|0,B(803)));}
function AQp(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B0;d=b.cl?0:1;e=a.yM;$p=1;case 1:AQ3(c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function YO(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DD(a,a.b0,a.BP,a.bm/2|0,70,16777215);DD(a,a.b0,a.BR,a.bm/2|0,90,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function KI(){Fh.call(this);}
function BmM(){var a=new KI();AT1(a);return a;}
function AT1(a){O(a);}
function UI(){var a=this;D.call(a);a.kL=0;a.qX=0;a.xL=null;a.xR=null;a.HV=0;}
function ALo(a,b){var c,d;c=0;while(c<=(3-a.kL|0)){d=0;while(d<=(3-a.qX|0)){if(Vi(a,b,c,d,1))return 1;if(Vi(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Vi(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.kL&&i<a.qX)j=!e?a.xL.data[h+Bj(i,a.kL)|0]:a.xL.data[((a.kL-h|0)-1|0)+Bj(i,a.kL)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function AHi(a,b){return Ky(a.xR.bC,a.xR.q);}
function Kn(a){return Bj(a.kL,a.qX);}
function Sk(){var a=this;Bm.call(a);a.Cl=null;a.Jk=null;}
function AVI(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.dN^EK(a.Cl,c):0;}
function Sj(){var a=this;Bm.call(a);a.Er=null;a.Bf=null;a.GF=null;}
function A3k(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.dN^EK(a.Er,c):0;return a.Bf.Y(b)&&!d?1:0;}
function Po(){var a=this;Bm.call(a);a.sc=null;a.Hl=null;}
function AXP(a,b){return a.cj^EK(a.sc,b);}
function A51(a){var b,c;b=new T;W(b);c=IX(a.sc,0);while(c>=0){Hh(b,Iu(c));Dx(b,124);c=IX(a.sc,c+1|0);}if(b.bZ>0)Se(b,b.bZ-1|0);return U(b);}
function TS(){var a=this;Bm.call(a);a.Dx=null;a.Iv=null;}
function A9m(a,b){return a.Dx.Y(b);}
function TQ(){var a=this;Bm.call(a);a.wq=0;a.CG=null;a.xc=null;}
function A0r(a,b){return !(a.wq^EK(a.xc.b6,b))&&!(a.wq^a.xc.iv^a.CG.Y(b))?0:1;}
function TR(){var a=this;Bm.call(a);a.tO=0;a.A7=null;a.vf=null;}
function A7l(a,b){return !(a.tO^EK(a.vf.b6,b))&&!(a.tO^a.vf.iv^a.A7.Y(b))?1:0;}
function TV(){var a=this;Bm.call(a);a.ET=0;a.A_=null;a.A4=null;a.HB=null;}
function A4_(a,b){return a.ET^(!a.A_.Y(b)&&!a.A4.Y(b)?0:1);}
function TW(){var a=this;Bm.call(a);a.Ac=0;a.Ds=null;a.C_=null;a.JI=null;}
function ASF(a,b){return a.Ac^(!a.Ds.Y(b)&&!a.C_.Y(b)?0:1)?0:1;}
function TT(){var a=this;Bm.call(a);a.zQ=null;a.JK=null;}
function AWq(a,b){return D5(a.zQ,b);}
function TU(){var a=this;Bm.call(a);a.ED=null;a.HM=null;}
function AX$(a,b){return D5(a.ED,b)?0:1;}
function TY(){var a=this;Bm.call(a);a.Af=null;a.Du=0;a.AR=null;}
function A1m(a,b){return !D5(a.Af,b)&&!(a.Du^EK(a.AR.b6,b))?0:1;}
function TZ(){var a=this;Bm.call(a);a.Ax=null;a.DX=0;a.Aq=null;}
function A4Q(a,b){return !D5(a.Ax,b)&&!(a.DX^EK(a.Aq.b6,b))?1:0;}
function Pn(){var a=this;Bm.call(a);a.AN=0;a.Ey=null;a.Bn=null;a.Fm=null;}
function A_Q(a,b){return !(a.AN^a.Ey.Y(b))&&!D5(a.Bn,b)?0:1;}
function PB(){var a=this;Bm.call(a);a.EM=0;a.yZ=null;a.y5=null;a.FB=null;}
function AWv(a,b){return !(a.EM^a.yZ.Y(b))&&!D5(a.y5,b)?1:0;}
function Pl(){var a=this;Bm.call(a);a.CU=null;a.FE=null;}
function AUZ(a,b){return D5(a.CU,b);}
function Pm(){var a=this;Bm.call(a);a.zJ=null;a.JF=null;}
function A5O(a,b){return D5(a.zJ,b)?0:1;}
function Pr(){var a=this;Bm.call(a);a.ES=null;a.Aw=0;a.E_=null;}
function AXa(a,b){return D5(a.ES,b)&&a.Aw^EK(a.E_.b6,b)?1:0;}
function Pk(){var a=this;Bm.call(a);a.D$=null;a.DB=0;a.Au=null;}
function A$j(a,b){return D5(a.D$,b)&&a.DB^EK(a.Au.b6,b)?0:1;}
function Pp(){var a=this;Bm.call(a);a.Ef=0;a.Cj=null;a.Ab=null;a.HA=null;}
function A4b(a,b){return a.Ef^a.Cj.Y(b)&&D5(a.Ab,b)?1:0;}
function Pq(){var a=this;Bm.call(a);a.D6=0;a.BY=null;a.Ee=null;a.HS=null;}
function AZC(a,b){return a.D6^a.BY.Y(b)&&D5(a.Ee,b)?0:1;}
function OM(){Ix.call(this);}
function AV1(a,b,c,d){var e,f,g;e=0;f=d.bz;a:{while(true){if(b>f){b=e;break a;}g=Hk(d,a.cJ);EM(d,a.cJ,b);e=a.fn.k(b,c,d);if(e>=0)break;EM(d,a.cJ,g);b=b+1|0;}}return b;}
function A_F(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Hk(e,a.cJ);EM(e,a.cJ,c);f=a.fn.k(c,d,e);if(f>=0)break;EM(e,a.cJ,g);c=c+(-1)|0;}}return c;}
function AUN(a){return null;}
function VB(){II.call(this);}
function Ll(a){V8(a);return a.hi.ge;}
function M$(){Fb.call(this);}
var BmN=0.0;var BmO=null;function AJT(){BmN=NaN;BmO=F($rt_doublecls());}
function Mn(){}
function Vt(){var a=this;D.call(a);a.Fw=null;a.Ez=null;a.pH=null;a.dB=null;a.qQ=0;a.se=0;}
function OC(a,b){var c,d;c=Bh(a.pH);if(b>=0&&b<=c){Z4(a.dB);a.dB.np=1;APV(a.dB,b);b=a.Ez.eH(b,a.pH,a.dB);if(b==(-1))a.dB.hn=1;if(b>=0&&a.dB.n_){AC2(a.dB);return 1;}a.dB.hu=(-1);return 0;}d=new BO;Bl(d,VO(b));M(d);}
function AA8(a){var b,c;b=Bh(a.pH);if(!YE(a))b=a.se;if(a.dB.hu>=0&&a.dB.np==1){a.dB.hu=MF(a.dB);if(MF(a.dB)==AEI(a.dB)){c=a.dB;c.hu=c.hu+1|0;}return a.dB.hu<=b&&OC(a,a.dB.hu)?1:0;}return OC(a,a.qQ);}
function AHN(a,b){return PA(a.dB,b);}
function Yh(a,b){return QH(a.dB,b);}
function AG8(a){return AHN(a,0);}
function AKV(a){return Yh(a,0);}
function YE(a){return a.dB.oc;}
function Uf(){}
function Sa(){}
function SX(){Fc.call(this);this.n8=null;}
var BmP=null;function BbZ(){var a=new SX();AAg(a);return a;}
function AAg(a){a.n8=Bcy();}
function Ju(a){return AIp(a.n8);}
function Zf(a,b){return ASv(a.n8,b,b)===BmP?0:1;}
function MB(a,b){return AGn(a.n8,b)!==BmP?0:1;}
function MY(a){return ADw(a.n8);}
function AAP(){BmP=new D;}
function SJ(){}
function OO(){}
function AJX(){var a=this;FU.call(a);a.kn=null;a.tw=null;a.GQ=null;a.tD=0;}
function Bcy(){var a=new AJX();ATR(a);return a;}
function ATR(a){var b;b=null;a.GQ=b;if(b===null){b=new QP;b.I8=a;}a.tw=b;}
function ASv(a,b,c){var d,e;a.kn=Oh(a,a.kn,b);d=Wi(a,b);e=S3(d,c);S3(d,c);a.tD=a.tD+1|0;return e;}
function AGn(a,b){var c;c=Wi(a,b);if(c===null)return null;a.kn=Lu(a,a.kn,b);a.tD=a.tD+1|0;return c.nT;}
function Wi(a,b){var c,d;c=a.kn;while(true){if(c===null)return null;d=Oj(a.tw,b,c.ng);if(!d)break;c=d>=0?c.dj:c.da;}return c;}
function Oh(a,b,c){var d,e;if(b===null){b=new Lb;d=null;b.ng=c;b.nT=d;b.lC=1;b.jm=1;return b;}e=Oj(a.tw,c,b.ng);if(!e)return b;if(e>=0)b.dj=Oh(a,b.dj,c);else b.da=Oh(a,b.da,c);FL(b);return MZ(b);}
function Lu(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Oj(a.tw,c,b.ng);if(d<0)b.da=Lu(a,b.da,c);else if(d>0)b.dj=Lu(a,b.dj,c);else{if(b.dj===null)return b.da;e=b.da;b=b.dj;f=J(Lb,b.lC);g=0;while(b.da!==null){h=f.data;i=g+1|0;h[g]=b;b=b.da;g=i;}c=b.dj;while(g>0){h=f.data;g=g+(-1)|0;j=h[g];j.da=c;FL(j);c=MZ(j);}b.dj=c;b.da=e;FL(b);}FL(b);return MZ(b);}
function ADw(a){var b,c,d;b=a.kn;c=null;while(b!==null){d=AOj(b,0);c=b;b=d;}if(c!==null)return c.ng;b=new JY;O(b);M(b);}
function AIp(a){return a.kn===null?0:a.kn.jm;}
function QP(){D.call(this);this.I8=null;}
function Oj(a,b,c){return b===null?TE(c,b):TE(b,c);}
function VD(){Bm.call(this);this.Ip=null;}
function A1t(a,b){return Do(b)!=2?0:1;}
function S$(){Bm.call(this);this.Iy=null;}
function A30(a,b){return Do(b)!=1?0:1;}
function QG(){Bm.call(this);this.H2=null;}
function ATu(a,b){return Qb(b);}
function QF(){Bm.call(this);this.FG=null;}
function A5H(a,b){return 0;}
function Ss(){Bm.call(this);this.GR=null;}
function AW1(a,b){return !Do(b)?0:1;}
function T7(){Bm.call(this);this.IO=null;}
function A$N(a,b){return Do(b)!=9?0:1;}
function Pb(){Bm.call(this);this.G8=null;}
function AZb(a,b){return Is(b);}
function UZ(){Bm.call(this);this.F_=null;}
function A0f(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function S7(){Bm.call(this);this.Fd=null;}
function A_u(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Is(b);}return b;}
function S9(){Bm.call(this);this.Gx=null;}
function AVe(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Is(b);}return b;}
function O4(){Bm.call(this);this.GP=null;}
function A1G(a,b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Ul(){Bm.call(this);this.Jt=null;}
function A7y(a,b){return Lc(b);}
function Up(){Bm.call(this);this.FU=null;}
function A81(a,b){return Uq(b);}
function VV(){Bm.call(this);this.IY=null;}
function A$C(a,b){return Do(b)!=3?0:1;}
function Vu(){Bm.call(this);this.Fh=null;}
function A12(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Is(b);}return b;}
function OG(){Bm.call(this);this.JL=null;}
function AU7(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Is(b);}return b;}
function My(){Bm.call(this);this.u5=0;}
function Bbm(a){var b=new My();ADM(b,a);return b;}
function ADM(a,b){B0(a);a.u5=b;}
function AZc(a,b){return a.cj^(a.u5!=Do(b&65535)?0:1);}
function Vh(){My.call(this);}
function A91(a,b){return a.cj^(!(a.u5>>Do(b&65535)&1)?0:1);}
function Nf(){D.call(this);}
var BmQ=null;var BmR=null;function BmS(){var a=new Nf();ASj(a);return a;}
function ASj(a){return;}
function Dy(b,c){BR(BmQ,c,b);BR(BmR,b,c);}
function Ji(b,c){var d,e,f,g,h,$$je;d=null;a:{try{e=d;f=CP(BmQ,b);if(f!==null){e=d;g=J(FO,1);g.data[0]=F(GG);b=Wx(f,g);g=J(D,1);g.data[0]=c;d=WA(b,g);e=d;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){h=$$je;}else{throw $$e;}}Cc(h);d=e;}return d;}
function AIj(){BmQ=Dd();BmR=Dd();Dy(F(Jp),B(849));Dy(F(E$),B(850));Dy(F(ID),B(851));Dy(F(EQ),B(852));Dy(F(DP),B(853));Dy(F(JV),B(854));Dy(F(Jj),B(855));Dy(F(Kl),B(856));Dy(F(K$),B(857));Dy(F(I3),B(858));Dy(F(Iz),B(579));Dy(F(KF),B(859));Dy(F(Mo),B(860));Dy(F(JJ),B(861));Dy(F(Gd),B(862));}
function JU(){var a=this;D.call(a);a.fF=0;a.fo=0;a.fJ=0;a.p8=0;a.jh=Long_ZERO;a.oS=Long_ZERO;}
var Bkw=Long_ZERO;function A$w(a,b){var c;if(!(b instanceof JU))return 0;c=b;return a.fF==c.fF&&a.fo==c.fo&&a.fJ==c.fJ&&a.p8==c.p8?1:0;}
function A7J(a){return (((((a.fF*128|0)*1024|0)+(a.fJ*128|0)|0)+a.fo|0)*256|0)+a.p8|0;}
function A0m(a,b){a.jh=b;return a;}
function ANA(a,b){return Long_lt(a.jh,b.jh)?(-1):Long_gt(a.jh,b.jh)?1:Long_lt(a.oS,b.oS)?(-1):Long_le(a.oS,b.oS)?0:1;}
function TE(a,b){return ANA(a,b);}
function AF9(){Bkw=Long_ZERO;}
function K_(){}
function VT(){var a=this;D.call(a);a.lm=null;a.iR=null;a.g3=null;a.X=null;a.ly=null;a.fr=0;a.fR=0;a.fK=null;}
function BQ(a,b,c){var d;if(b==a.fr&&c==a.fR&&a.fK!==null)return 1;a:{b:{d=(b&31)+((c&31)*32|0)|0;if(a.X.data[d]!==null){if(a.X.data[d]===a.lm)break b;if(ARE(a.X.data[d],b,c))break b;}b=0;break a;}b=1;}return b;}
function AOd(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b==a.fr&&c==a.fR&&a.fK!==null)return a.fK;d=(b&31)+((c&31)*32|0)|0;if(!BQ(a,b,c)){BeU=1;if(a.X.data[d]!==null){AOL(a.X.data[d]);e=a.X.data[d];$p=1;continue _;}if(a.g3===null)f=null;else{try{e=a.g3;f=a.ly;$p=2;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){e=$$je;}else{throw $$e;}}Cc(e);f=null;}if(f===
null){if(a.iR!==null){e=a.iR;$p=3;continue _;}f=a.lm;}a.X.data[d]=f;if(a.X.data[d]!==null)JZ(a.X.data[d]);if(!a.X.data[d].gy){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(BQ(a,g,h)){$p=6;continue _;}BeU=0;}a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];case 1:AB2(a,e);if(C()){break _;}J6(a,a.X.data[d]);if(a.g3===null)f=null;else{try{e=a.g3;f=a.ly;$p=2;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE)
{e=$$je;}else{throw $$e;}}Cc(e);f=null;}if(f===null){if(a.iR!==null){e=a.iR;$p=3;continue _;}f=a.lm;}a.X.data[d]=f;if(a.X.data[d]!==null)JZ(a.X.data[d]);if(!a.X.data[d].gy){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeU=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 2:a:{try{$z=AGV(e,f,b,c);if(C()){break _;}f=$z;if(f!==null)f.s2=a.ly.ec;break a;}catch($$e){$$je=Bi($$e);if
($$je instanceof BE){e=$$je;}else{throw $$e;}}Cc(e);f=null;}if(f===null){if(a.iR!==null){e=a.iR;$p=3;continue _;}f=a.lm;}a.X.data[d]=f;if(a.X.data[d]!==null)JZ(a.X.data[d]);if(!a.X.data[d].gy){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeU=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 3:$z=AJK(e,b,c);if(C()){break _;}f=$z;a.X.data[d]=f;if(a.X.data[d]!==null)JZ(a.X.data[d]);if
(!a.X.data[d].gy){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeU=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 4:$z=AOd(a,g,c);if(C()){break _;}e=$z;if(!e.gy){h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=8;continue _;}}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeU=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 5:$z=AOd(a,
b,h);if(C()){break _;}e=$z;if(!e.gy){i=b+1|0;if(BQ(a,i,h)&&BQ(a,b,h)&&BQ(a,i,c)){$p=9;continue _;}}if(!BQ(a,g,h)){BeU=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;case 6:$z=AOd(a,g,h);if(C()){break _;}e=$z;if(!e.gy&&BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=10;continue _;}BeU=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];case 7:AFp(a,a,b,c);if(C()){break _;}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeU=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p
=6;continue _;case 8:AFp(a,a,g,c);if(C()){break _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeU=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 9:AFp(a,a,b,h);if(C()){break _;}if(!BQ(a,g,h)){BeU=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 10:AFp(a,a,g,h);if(C()){break _;}BeU=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function J6(a,b){var c,$$je;a:{if(a.g3!==null){try{AHo(a.g3,a.ly,b);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){c=$$je;}else{throw $$e;}}c.tA();}}}
function AB2(a,b){var c,d,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.g3!==null){try{b.s2=a.ly.ec;c=a.g3;d=a.ly;$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){c=$$je;}else{throw $$e;}}Cc(c);}return;case 1:a:{try{YQ(c,d,b);if(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){c=$$je;}else{throw $$e;}}Cc(c);}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AFp(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AOd(a,c,d);if(C()){break _;}e=$z;if(!e.gy){e.gy=1;if(a.iR!==null){f=a.iR;$p=2;continue _;}}return;case 2:AHU(f,b,c,d);if(C()){break _;}SF(e);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ANX(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;e=0;if(c!==null){f=0;while(f<a.X.data.length){if(a.X.data[f]!==null&&Km(a.X.data[f],b))e=e+1|0;f=f+1|0;}}g=0;h=0;while(h<a.X.data.length){if(a.X.data[h]!==null){if(b&&!a.X.data[h].p$)J6(a,a.X.data[h]);if(Km(a.X.data[h],b)){i=a.X.data[h];$p=1;continue _;}}h=h+1|0;}if(b&&a.g3===null)return 1;return 1;case 1:AB2(a,i);if
(C()){break _;}a.X.data[h].dW=0;d=d+1|0;if(d==2&&!b)return 0;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}while(true){h=h+1|0;if(h>=a.X.data.length)break;if(a.X.data[h]===null)continue;if(b&&!a.X.data[h].p$)J6(a,a.X.data[h]);if(Km(a.X.data[h],b)){i=a.X.data[h];continue _;}}if(b&&a.g3===null)return 1;return 1;case 2:XE(c,f);if(C()){break _;}while(true){h=h+1|0;if(h>=a.X.data.length)break;if(a.X.data[h]===null)continue;if(b&&!a.X.data[h].p$)J6(a,a.X.data[h]);if(Km(a.X.data[h],b)){i=a.X.data[h];$p
=1;continue _;}}if(b&&a.g3===null)return 1;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Tp(a){return 0;}
function A_r(a){return 1;}
function Qa(){}
function Xi(){D.call(this);this.r0=null;}
function N9(a,b,c){var d,e,f,g,h;d=b+30233088|0;e=c+30233088|0;f=Bh(B(863));g=new T;Gz(g,10);h=0;while(h<5){Dx(g,Y(B(863),d%f|0));d=d/f|0;Dx(g,Y(B(863),e%f|0));e=e/f|0;h=h+1|0;}return U(g);}
function AGV(a,b,c,d){var e,f,g,h,i,j,k,l,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=N9(a,c,d);f=new T;W(f);g=U(H(H(H(f,a.r0),B(23)),e));$p=1;case 1:$z=ALD(g);if(C()){break _;}h=$z;if(h===null)return null;try{f=MR(OU(Ug(h)));i=FS(f,B(864));j=FS(f,B(865));if(c==i&&d==j){$p=4;continue _;}k=N9(a,i,j);Cg(C1(),BL(H(Be(H(Be(H(H(H(H(H(Be(H(Be(H(Be(H(Be(H(H(H(BX(),B(866)),
e),B(867)),c),B(626)),d),B(868)),i),B(626)),j),B(869)),k),B(870)),e),B(871)),c),B(626)),d),B(245))));b=BL(H(H(H(BX(),a.r0),B(23)),k));$p=3;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){l=$$je;}else{throw $$e;}}b=C1();f=new T;W(f);Cg(b,U(H(Be(H(Be(H(H(H(f,B(872)),e),B(873)),c),B(626)),d),B(245))));Cg(C1(),B(874));$p=2;case 2:AL0(g);if(C()){break _;}Cc(l);return null;case 3:a:{try{ANk(g,b);if(C()){break _;}b=null;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){l=$$je;break a;}else{throw $$e;}}return b;}b
=C1();f=new T;W(f);Cg(b,U(H(Be(H(Be(H(H(H(f,B(872)),e),B(873)),c),B(626)),d),B(245))));Cg(C1(),B(874));$p=2;continue _;case 4:a:{try{$z=A2X(b,f);if(C()){break _;}b=$z;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){l=$$je;break a;}else{throw $$e;}}return b;}b=C1();f=new T;W(f);Cg(b,U(H(Be(H(Be(H(H(H(f,B(872)),e),B(873)),c),B(626)),d),B(245))));Cg(C1(),B(874));$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function YQ(a,b,c){var d,e,f,g,h,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=G8();AF0(a,c,b,d);e=A$e(131072);try{f=AWf(BbJ(e));try{RU(d,f);AHG(f);g=Ia(e);b=BL(H(H(H(BX(),a.r0),B(23)),N9(a,c.fZ,c.fU)));$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof D8){b=$$je;}else{throw $$e;}}a:{try{KO(f);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof D8){d=$$je;}else{throw $$e;}}WH(b,d);}M(b);}catch
($$e){$$je=Bi($$e);if($$je instanceof B1){h=$$je;}else{throw $$e;}}b=C1();d=new T;W(d);Cg(b,U(H(Be(H(Be(H(d,B(875)),c.fZ),B(626)),c.fU),B(876))));Cc(h);return;case 1:b:{a:{try{try{ACx(b,g);if(C()){break _;}}catch($$e){$$je=Bi($$e);if($$je instanceof D8){b=$$je;break a;}else{throw $$e;}}KO(f);}catch($$e){$$je=Bi($$e);if($$je instanceof B1){h=$$je;break b;}else{throw $$e;}}return;}try{c:{try{KO(f);break c;}catch($$e){$$je=Bi($$e);if($$je instanceof D8){d=$$je;}else{throw $$e;}}WH(b,d);}M(b);}catch($$e){$$je=Bi($$e);if
($$je instanceof B1){h=$$je;}else{throw $$e;}}}b=C1();d=new T;W(d);Cg(b,U(H(Be(H(Be(H(d,B(875)),c.fZ),B(626)),c.fU),B(876))));Cc(h);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AF0(a,b,c,d){Gv(d,B(864),b.fZ);Gv(d,B(865),b.fU);H9(d,B(877),c.ec);IL(d,B(878),b.g0);IL(d,B(355),b.hL.gA);IL(d,B(879),b.gW.gA);IL(d,B(880),b.hZ.gA);IL(d,B(881),b.eg);SU(d,B(882),b.gy);b.r7=0;AG4(new QO);}
function A2X(b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:d=BaJ(b,FS(c,B(864)),FS(c,B(865)));d.g0=IE(c,B(878));d.hL=AIH(IE(c,B(355)));d.gW=AIH(IE(c,B(879)));d.hZ=AIH(IE(c,B(880)));d.eg=IE(c,B(881));d.gy=Um(c,B(882));if(!JI(d.hL))d.hL=Jf(d.g0.data.length);if(d.eg!==null&&JI(d.gW)){if(!JI(d.hZ))d.hZ=Jf(d.g0.data.length);return d;}d.eg=$rt_createByteArray(256);d.gW=Jf(d.g0.data.length);$p=1;case 1:AFK(d);if(C()){break _;}if(!JI(d.hZ))d.hZ=Jf(d.g0.data.length);return d;default:
E_();}}C3().s(b,c,d,$p);}
function A4C(a){return;}
function A4T(a){return;}
function AHo(a,b,c){return;}
function So(){var a=this;D.call(a);a.a=null;a.yS=null;a.yT=null;a.yR=null;a.tL=null;a.yV=null;a.yW=null;a.yU=null;a.iS=null;a.t=null;a.h1=null;a.vR=null;a.vP=null;a.vQ=null;a.vS=null;a.vT=null;a.Ga=null;}
function Zs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;a.h1=Zh(a,a.h1,b*4|0,0,c*4|0,5,17,5);e=0;while(e<4){f=0;while(f<4){g=0;while(g<16){h=a.h1.data;c=((e+0|0)*5|0)+f|0;i=((c+0|0)*17|0)+g|0;j=h[i+0|0];h=a.h1.data;b=((c+1|0)*17|0)+g|0;k=h[b+0|0];h=a.h1.data;l=((e+1|0)*5|0)+f|0;m=((l+0|0)*17|0)+g|0;n=h[m+0|0];h=a.h1.data;c=((l+1|0)*17|0)+g|0;o=h[c+0|0];p=(a.h1.data[i+1|0]-j)*0.125;q=(a.h1.data[b+1|0]-k)*0.125;r=(a.h1.data[m+1|0]-n)*0.125;s=(a.h1.data[c+1|0]-o)*0.125;t=0;while(t<8){u=(n-j)
*0.25;v=(o-k)*0.25;w=0;x=j;y=k;while(w<4){b=(w+(e*4|0)|0)<<11|(0+(f*4|0)|0)<<7;c=(g*8|0)+t|0;m=b|c;z=(y-x)*0.25;ba=0;c=R(c,64);bb=x;while(ba<4){i=0;if(c<0){L();i=BgC.b;}if(bb>0.0){L();i=BeT.b;}d.data[m]=i<<24>>24;m=m+128|0;bb=bb+z;ba=ba+1|0;}x=x+u;y=y+v;w=w+1|0;}j=j+p;k=k+q;n=n+r;o=o+s;t=t+1|0;}g=g+1|0;}f=f+1|0;}e=e+1|0;}}
function ACs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=0;f=b*16|0;c=c*16|0;while(e<16){g=0;while(g<16){h=f+e|0;i=c+g|0;j=a.tL;k=h*0.03125;l=i*0.03125;m=U1(j,k,l,0.0)+Cl(a.a)*0.2<=0.0?0:1;n=U1(a.tL,l,109.0134,k)+Cl(a.a)*0.2<=3.0?0:1;o=E0(a.yV,k*2.0,l*2.0)/3.0+3.0+Cl(a.a)*0.25|0;p=(-1);L();q=BeP.b;r=BeQ.b;s=(((e*16|0)+g|0)*128|0)+128|0;t=127;while(t>=0){s=s+(-1)|0;if(t<=((0+E(a.a,6)|0)-1|0))d.data[s]=BeO.b<<24>>24;else{u=d.data;if(!u[s])p=(-1);else if(u[s]==BeT.b){if(p==(-1)){if(o<=0){q=0;r=BeT.b<<24>>
24;}else if(t>=60&&t<=65){q=BeP.b;r=BeQ.b;if(n)q=0;if(n)r=Be_.b;if(m)q=Be$.b;if(m)r=Be$.b;}if(t<64&&!q)q=BgC.b;if(t<63){u[s]=r<<24>>24;p=o;}else{u[s]=q<<24>>24;p=o;}}else if(p>0){p=p+(-1)|0;u[s]=r<<24>>24;}}}t=t+(-1)|0;}g=g+1|0;}e=e+1|0;}}
function AJK(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=$rt_createByteArray(32768);e=A9q(a.t,d,b,c);Zs(a,b,c,d);ACs(a,b,c,d);ARS(a,b,c,d);$p=1;case 1:AFK(e);if(C()){break _;}return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function APR(a,b,c,d,e,f,g){Jc(a,b,c,d,e,f,g,1.0+N(a.a)*6.0,0.0,0.0,(-1),(-1),0.5);}
function Jc(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD;n=b*16|0;o=n+8|0;p=c*16|0;q=p+8|0;r=0.0;s=0.0;t=Bby(Gw(a.a));if(l<=0)l=112-E(t,28)|0;u=0;if(k==(-1)){k=l/2|0;u=1;}v=E(t,l/2|0)+(l/4|0)|0;w=E(t,6)?0:1;x=R(h,1.0);y=h+2.0+16.0;y=y*y;z=o-16.0;ba=q-16.0;bb=o+16.0;bc=q+16.0;a:{while(true){if(k>=l)break a;bd=1.5+Bq(k*3.1415927410125732/l)*h*1.0;be=bd*m;bf=BC(j);bg=Bq(j);e=e+BC(i)*bf;f=f+bg;g=g+Bq(i)*bf;j=(!w
?j*0.699999988079071:j*0.9200000166893005)+s*0.10000000149011612;i=i+r*0.10000000149011612;bh=s*0.8999999761581421;bf=r*0.75;s=bh+(N(t)-N(t))*N(t)*2.0;r=bf+(N(t)-N(t))*N(t)*4.0;if(!u&&k==v&&x>0){h=N(t)*0.5+0.5;bh=i-1.5707963705062866;j=j/3.0;Jc(a,b,c,d,e,f,g,h,bh,j,k,l,1.0);Jc(a,b,c,d,e,f,g,N(t)*0.5+0.5,i+1.5707963705062866,j,k,l,1.0);return;}if(!(!u&&!E(t,4))){bi=e-o;bj=g-q;bk=l-k|0;if(bi*bi+bj*bj-bk*bk>y)break;bl=bd*2.0;if(e>=z-bl&&g>=ba-bl&&e<=bb+bl&&g<=bc+bl){bm=(K(e-bd)-n|0)-1|0;bn=(K(e+bd)-n|0)+1|0;bo
=K(f-be)-1|0;bp=K(f+be)+1|0;bq=(K(g-bd)-p|0)-1|0;br=(K(g+bd)-p|0)+1|0;if(bm<0)bm=0;if(bn>16)bn=16;if(bo<1)bo=1;if(bp>120)bp=120;if(bq<0)bq=0;if(br>16)br=16;bs=0;bt=bm;while(!bs&&bt<bn){bu=bq;while(!bs&&bu<br){bv=bp+1|0;while(!bs){bw=R(bv,bo-1|0);if(bw<0)break;bx=(((bt*16|0)+bu|0)*128|0)+bv|0;if(bv>=0&&bv<128){by=d.data;bz=by[bx];L();if(!(bz!=BfW.b&&by[bx]!=BgC.b))bs=1;if(bw&&bt!=bm&&bt!=(bn-1|0)&&bu!=bq&&bu!=(br-1|0))bv=bo;}bv=bv+(-1)|0;}bu=bu+1|0;}bt=bt+1|0;}if(!bs){while(bm<bn){bA=((bm+n|0)+0.5-e)/bd;bi=bA
*bA;bx=bq;while(bx<br){bB=((bx+p|0)+0.5-g)/bd;bC=(((bm*16|0)+bx|0)*128|0)+bp|0;bw=0;bD=bp-1|0;bB=bB*bB;while(bD>=bo){bl=(bD+0.5-f)/be;if(bl>(-0.7)&&bi+bl*bl+bB<1.0){by=d.data;bz=by[bC];L();if(bz==BeP.b)bw=1;if(!(bz!=BeT.b&&bz!=BeQ.b&&bz!=BeP.b)){if(bD<10)by[bC]=BfX.b<<24>>24;else{by[bC]=0;if(bw){bz=bC-1|0;if(by[bz]==BeQ.b)by[bz]=BeP.b<<24>>24;}}}}bC=bC+(-1)|0;bD=bD+(-1)|0;}bx=bx+1|0;}bm=bm+1|0;}if(u)break a;}}}k=k+1|0;}return;}}
function ARS(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;Gw(a.a);Gw(a.a);e=b-8|0;f=b+8|0;g=c-8|0;h=c+8|0;while(e<=f){i=g;while(i<=h){j=E(a.a,E(a.a,E(a.a,40)+1|0)+1|0);if(E(a.a,15))j=0;k=0;while(k<j){l=(e*16|0)+E(a.a,16)|0;m=E(a.a,E(a.a,120)+8|0);n=(i*16|0)+E(a.a,16)|0;o=1;if(!E(a.a,4)){APR(a,b,c,d,l,m,n);o=o+E(a.a,4)|0;}p=0;while(p<o){q=N(a.a)*3.1415927410125732*2.0;r=(N(a.a)-0.5)*2.0/8.0;Jc(a,b,c,d,l,m,n,N(a.a)*2.0+N(a.a),q,r,0,0,1.0);p=p+1|0;}k=k+1|0;}i=i+1|0;}e=e+1|0;}}
function Zh(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));a.vS=H0(a.yW,a.vS,c,d,e,f,1,h,1.0,0.0,1.0);a.vT=H0(a.yU,a.vT,c,d,e,f,1,h,100.0,0.0,100.0);a.vR=H0(a.yR,a.vR,c,d,e,f,g,h,8.555150000000001,4.277575000000001,8.555150000000001);a.vP=H0(a.yS,a.vP,c,d,e,f,g,h,684.412,684.412,684.412);a.vQ=H0(a.yT,a.vQ,c,d,e,f,g,h,684.412,684.412,684.412);i=0;j=0;k=0;l=g;d=g-4|0;m=l/2.0;while(k<f){n=0;while(n<h){o=(a.vS.data[j]+256.0)/512.0;if(o>1.0)o=1.0;p=a.vT.data[j]
/8000.0;if(p<0.0)p= -p;q=p*3.0-3.0;if(q>=0.0){if(q>1.0)q=1.0;q=q/6.0;}else{o=q/2.0;if(o<(-1.0))o=(-1.0);q=o/1.4/2.0;o=0.0;}r=o+0.5;s=m+q*l/16.0*4.0;j=j+1|0;t=0;while(t<g){p=t;u=(p-s)*12.0/r;if(u<0.0)u=u*4.0;v=a.vP.data[i]/512.0;q=a.vQ.data[i]/512.0;w=(a.vR.data[i]/10.0+1.0)/2.0;if(w>=0.0)v=w>1.0?q:v+(q-v)*w;o=v-u;if(t>d){x=(t-d|0)/3.0;o=o*(1.0-x)+(-10.0)*x;}if(p<0.0){x=(0.0-p)/4.0;if(x<0.0)x=0.0;if(x>1.0)x=1.0;o=o*(1.0-x)+(-10.0)*x;}b.data[i]=o;i=i+1|0;t=t+1|0;}n=n+1|0;}k=k+1|0;}return b;}
function AHU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=c*16|0;f=d*16|0;NF(a.a,a.t.lt);g=Long_add(Long_mul(Long_div(Gw(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));h=Long_add(Long_mul(Long_div(Gw(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));NF(a.a,Long_xor(Long_add(Long_mul(Long_fromInt(c),
g),Long_mul(Long_fromInt(d),h)),a.t.lt));i=0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYk();m=a.t;n=a.a;$p=1;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeQ.b,32);m=a.t;n=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be_.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfc.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,
16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgX.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c
=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50)
{l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=15;continue _;case 1:XK(b,m,n,j,k,l);if(C()){break _;}i=i+1|0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYk();m=a.t;n=a.a;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeQ.b,32);m=a.t;n
=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be_.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfc.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,
16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgX.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=11;continue _;}if
(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=
a.t;n=a.a;$p=15;continue _;case 2:ABO(b,m,n,j,k,l);if(C()){break _;}o=o+1|0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeQ.b,32);m=a.t;n=a.a;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be_.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfc.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgX.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,
Be6.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=15;continue _;case 3:ABO(b,m,n,o,k,l);if(C()){break _;}j=j+1|0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be_.b,32);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfc.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,Bfd.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgX.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)
|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p
=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=15;continue _;case 4:ABO(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfc.b,16);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgX.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,
Be6.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=15;continue _;case 5:ABO(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,8);m=a.t;n=a.a;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,BgX.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,
4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p
=15;continue _;case 6:ABO(b,m,n,c,j,k);if(C()){break _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgX.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e
+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=15;continue _;case 7:ABO(b,m,n,c,j,k);if(C()){break _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c
=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=15;continue _;case 8:$z=ALE(q,l,p);if(C()){break _;}d=$z;$p=9;case 9:AEJ(m,b,n,l,d,p);if(C()){break _;}k=k+1|0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+
E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=15;continue _;case 10:ACL(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=12;continue _;}if
(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=15;continue _;case 11:ACL(b,m,n,c,l,p);if(C()){break _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,
16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=15;continue _;case 12:ACL(b,m,n,c,l,p);if(C())
{break _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=15;continue _;case 13:ACL(b,m,n,c,l,p);if(C()){break _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=15;continue _;case 14:ALY(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8
|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=15;case 15:ALY(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A0e(a){return 0;}
function Wq(){var a=this;D.call(a);a.gF=null;a.oQ=null;a.xr=null;a.uS=null;a.zw=0;a.n_=0;a.ff=0;a.bz=0;a.hu=0;a.oc=0;a.li=0;a.hn=0;a.Je=0;a.kX=0;a.np=0;}
function Cv(a,b,c){a.oQ.data[b]=c;}
function Ep(a,b){return a.oQ.data[b];}
function MF(a){return QH(a,0);}
function QH(a,b){Vg(a,b);return a.gF.data[(b*2|0)+1|0];}
function EM(a,b,c){a.gF.data[b*2|0]=c;}
function MV(a,b,c){a.gF.data[(b*2|0)+1|0]=c;}
function Hk(a,b){return a.gF.data[b*2|0];}
function JE(a,b){return a.gF.data[(b*2|0)+1|0];}
function AM3(a,b){var c,d;c=Hk(a,b);d=JE(a,b);if((d|c|(d-c|0))>=0&&d<=Bh(a.uS))return Ev(a.uS,c,d);return null;}
function AEI(a){return PA(a,0);}
function PA(a,b){Vg(a,b);return a.gF.data[b*2|0];}
function AC2(a){if(a.gF.data[0]==(-1)){a.gF.data[0]=a.hu;a.gF.data[1]=a.hu;}a.kX=MF(a);}
function Tc(a,b){return a.xr.data[b];}
function FE(a,b,c){a.xr.data[b]=c;}
function Vg(a,b){var c;if(!a.n_){c=new D2;O(c);M(c);}if(b>=0&&b<a.zw)return;c=new BO;Bl(c,VO(b));M(c);}
function ARw(a){a.n_=1;}
function A$R(a){return a.n_;}
function Xe(a,b,c,d){a.n_=0;a.np=2;MW(a.gF,(-1));MW(a.oQ,(-1));if(b!==null)a.uS=b;if(c>=0){a.ff=c;a.bz=d;}a.hu=a.ff;}
function Z4(a){Xe(a,null,(-1),(-1));}
function APV(a,b){a.hu=b;if(a.kX>=0)b=a.kX;a.kX=b;}
function A4k(a){return a.ff;}
function A7o(a){return a.bz;}
function A5c(a,b){a.np=b;}
function AWe(a){return a.np;}
function A6g(a){return a.li;}
function A3h(a){return a.oc;}
function A3K(a){return a.kX;}
function VI(){var a=this;D.call(a);a.ct=null;a.l0=0;a.fV=0;a.fW=0;a.fw=0;a.fb=0;a.eK=0;}
function AOl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.l0;while(c<=a.fw){d=a.fW;while(d<=a.eK){a:{if(EI(b,c,0,d)){e=a.fV;while(true){if(e>a.fb)break a;if(e>=0&&e<128){f=a.ct;$p=1;continue _;}e=e+1|0;}}}d=d+1|0;}c=c+1|0;}return;case 1:$z=ALh(b,f,c,e,d);if(C()){break _;}g=$z;$p=2;case 2:$z=ACt(b,
c,e,d);if(C()){break _;}h=$z;L();i=Bgz.data[h];if(!i)i=1;j=0;if(a.ct===Bku){$p=3;continue _;}if(a.ct===Bkv)j=BgB.data[h];if(i>=15&&!j){j=0;if(g!=j){f=a.ct;$p=10;continue _;}b:while(true){e=e+1|0;while(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break b;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;}f=a.ct;h=c-1|0;$p=4;continue _;case 3:$z=Zu(b,c,e,d);if(C()){break _;}h=$z;if(h)j=15;if(i>=15&&!j){j=0;if(g!=j){f=a.ct;$p
=10;continue _;}c:while(true){e=e+1|0;while(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break c;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;}f=a.ct;h=c-1|0;$p=4;case 4:$z=ALh(b,f,h,e,d);if(C()){break _;}k=$z;f=a.ct;h=c+1|0;$p=5;case 5:$z=ALh(b,f,h,e,d);if(C()){break _;}l=$z;f=a.ct;h=e-1|0;$p=6;case 6:$z=ALh(b,f,c,h,d);if(C()){break _;}m=$z;f=a.ct;h=e+1|0;$p=7;case 7:$z=ALh(b,f,c,h,d);if(C()){break _;}n=$z;f=a.ct;h
=d-1|0;$p=8;case 8:$z=ALh(b,f,c,e,h);if(C()){break _;}o=$z;f=a.ct;h=d+1|0;$p=9;case 9:$z=ALh(b,f,c,e,h);if(C()){break _;}p=$z;if(l<=k)l=k;if(m<=l)m=l;if(n<=m)n=m;if(o<=n)o=n;if(p<=o)p=o;h=p-i|0;if(h<0)h=0;if(j<=h)j=h;if(g!=j){f=a.ct;$p=10;continue _;}d:while(true){e=e+1|0;while(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break d;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;case 10:AMr(b,f,c,e,d,j);if(C()){break _;}k
=j-1|0;if(k<0)k=0;f=a.ct;h=c-1|0;$p=11;case 11:AP7(b,f,h,e,d,k);if(C()){break _;}f=a.ct;h=e-1|0;$p=12;case 12:AP7(b,f,c,h,d,k);if(C()){break _;}f=a.ct;h=d-1|0;$p=13;case 13:AP7(b,f,c,e,h,k);if(C()){break _;}h=c+1|0;if(h>=a.fw){f=a.ct;$p=14;continue _;}h=e+1|0;if(h>=a.fb){f=a.ct;$p=15;continue _;}h=d+1|0;if(h>=a.eK){f=a.ct;$p=16;continue _;}e:while(true){e=e+1|0;while(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break e;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=
128)continue;else{f=a.ct;$p=1;continue _;}}return;case 14:AP7(b,f,h,e,d,k);if(C()){break _;}h=e+1|0;if(h>=a.fb){f=a.ct;$p=15;continue _;}h=d+1|0;if(h>=a.eK){f=a.ct;$p=16;continue _;}a:while(true){e=e+1|0;while(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break a;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;case 15:AP7(b,f,c,h,d,k);if(C()){break _;}h=d+1|0;if(h>=a.eK){f=a.ct;$p=16;continue _;}f:while(true){e=e+1|0;while
(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break f;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;case 16:AP7(b,f,c,e,h,k);if(C()){break _;}g:while(true){e=e+1|0;while(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break g;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ALz(a,b,c,d,e,f,g){if(b>=a.l0&&c>=a.fV&&d>=a.fW&&e<=a.fw&&f<=a.fb&&g<=a.eK)return 1;if(b>=(a.l0-1|0)&&c>=(a.fV-1|0)&&d>=(a.fW-1|0)&&e<=(a.fw+1|0)&&f<=(a.fb+1|0)&&g<=(a.eK+1|0)){if(b<a.l0)a.l0=b;if(c<a.fV)a.fV=c;if(d<a.fW)a.fW=d;if(e>a.fw)a.fw=e;if(f>a.fb)a.fb=f;if(g>a.eK)a.eK=g;return 1;}return 0;}
function R3(){}
function AF4(){var a=this;F_.call(a);a.ik=0;a.ea=null;}
function AWf(a){var b=new AF4();A64(b,a);return b;}
function A64(a,b){K9(a,b);a.ea=$rt_createByteArray(8);}
function AHG(a){a.fm.ls();}
function Q4(a,b,c,d){var e;if(b!==null){a.fm.gu(b,c,d);a.ik=a.ik+d|0;return;}e=new EE;O(e);M(e);}
function KJ(a,b){a.fm.nJ(b);a.ik=a.ik+1|0;}
function APk(a,b){UA(a,$rt_doubleToLongBits(b));}
function APf(a,b){JK(a,$rt_floatToIntBits(b));}
function JK(a,b){a.ea.data[0]=b>>24<<24>>24;a.ea.data[1]=b>>16<<24>>24;a.ea.data[2]=b>>8<<24>>24;a.ea.data[3]=b<<24>>24;a.fm.gu(a.ea,0,4);a.ik=a.ik+4|0;}
function UA(a,b){a.ea.data[0]=Long_shr(b,56).lo<<24>>24;a.ea.data[1]=Long_shr(b,48).lo<<24>>24;a.ea.data[2]=Long_shr(b,40).lo<<24>>24;a.ea.data[3]=b.hi<<24>>24;a.ea.data[4]=Long_shr(b,24).lo<<24>>24;a.ea.data[5]=Long_shr(b,16).lo<<24>>24;a.ea.data[6]=Long_shr(b,8).lo<<24>>24;a.ea.data[7]=b.lo<<24>>24;a.fm.gu(a.ea,0,8);a.ik=a.ik+8|0;}
function Z7(a,b){a.ea.data[0]=b>>8<<24>>24;a.ea.data[1]=b<<24>>24;a.fm.gu(a.ea,0,2);a.ik=a.ik+2|0;}
function AN_(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function Xm(a,b){var c,d,e;c=AGb(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new B1;Bl(b,B(883));M(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Q4(a,e,0,AO5(a,b,e,AN_(a,d,e,0)));}
function AGb(a,b){var c,d,e,f;c=0;d=Bh(b);e=0;while(e<d){f=Y(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function AO5(a,b,c,d){var e,f,g,h,i,j,k;e=Bh(b);f=0;while(f<e){g=Y(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function AFY(){D.call(this);}
function BmT(){var a=new AFY();A0g(a);return a;}
function A0g(a){return;}
function NT(){D.call(this);}
var BmU=null;var BmV=null;function BmW(){var a=new NT();ABk(a);return a;}
function ABk(a){return;}
function ABU(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.y8=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.uZ=Long_ZERO;c.t1=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=AOq(BmV,f);if(h<0)h= -h-2|0;i=12+(f-BmV.data[h]|0)|0;j=Qp(e,BmU.data[h],i);if(Long_ge(j,
new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-BmV.data[h]|0)|0;j=Qp(e,BmU.data[h],i);}k=Long_shru(BmU.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,o)),Long_div(l,Long_fromInt(2))))o
=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.uZ=e;c.t1=h-330|0;}
function Qp(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function ABi(){var b,c,d,e,f,g,h,i,j,k;BmU=$rt_createLongArray(660);BmV=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=BmU.data;g=d+330|0;f[g]=Ml(e,Long_fromInt(80));BmV.data[g]=c;e=Ml(e,Long_fromInt(10));h=AIU(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=BmU.data;g=(330-i|0)-1|0;f[g]=Ml(b,Long_fromInt(80));BmV.data[g]=d;i=i+1|0;}}
function HL(){D.call(this);}
function AMO(){var a=this;HL.call(a);a.nG=null;a.rH=0;}
function G9(a,b){var c=new AMO();AT9(c,a,b);return c;}
function AT9(a,b,c){var d;a.rH=c;a.nG=J(Pu,c);d=0;while(d<c){a.nG.data[d]=BbI(b);d=d+1|0;}}
function E0(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.rH){d=d+AGW(a.nG.data[f],b*e,c*e)/e;e=e/2.0;f=f+1|0;}return d;}
function U1(a,b,c,d){var e,f,g;e=0.0;f=1.0;g=0;while(g<a.rH){e=e+Le(a.nG.data[g],b*f,c*f,d*f)/f;f=f/2.0;g=g+1|0;}return e;}
function H0(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));else{l=0;while(true){m=b.data;if(l>=m.length)break;m[l]=0.0;l=l+1|0;}}n=1.0;o=0;while(o<a.rH){AQq(a.nG.data[o],b,c,d,e,f,g,h,i*n,j*n,k*n,n);n=n/2.0;o=o+1|0;}return b;}
function ACN(){var a=this;D.call(a);a.mb=null;a.m1=0;a.FC=Long_ZERO;}
function ATm(a,b,c){var d=new ACN();A1r(d,a,b,c);return d;}
function A1r(a,b,c,d){a.mb=b;a.m1=c;a.FC=d;}
function Pu(){var a=this;HL.call(a);a.b5=null;a.vb=0.0;a.x$=0.0;a.wr=0.0;}
function BmX(){var a=new Pu();A_D(a);return a;}
function BbI(a){var b=new Pu();Zi(b,a);return b;}
function A_D(a){Zi(a,new Dz);}
function Zi(a,b){var c,d,e,f,g;a.b5=$rt_createIntArray(512);a.vb=Cl(b)*256.0;a.x$=Cl(b)*256.0;a.wr=Cl(b)*256.0;c=0;while(c<256){d=a.b5.data;e=c+1|0;d[c]=c;c=e;}c=0;while(c<256){f=E(b,256-c|0)+c|0;g=a.b5.data[c];a.b5.data[c]=a.b5.data[f];a.b5.data[f]=g;a.b5.data[c+256|0]=a.b5.data[c];c=c+1|0;}}
function Le(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;e=b+a.vb;f=c+a.x$;g=d+a.wr;h=e|0;i=f|0;j=g|0;if(e<h)h=h+(-1)|0;if(f<i)i=i+(-1)|0;if(g<j)j=j+(-1)|0;k=h&255;l=i&255;m=j&255;c=e-h;d=f-i;n=g-j;o=c*c*c*(c*(c*6.0-15.0)+10.0);p=d*d*d*(d*(d*6.0-15.0)+10.0);q=n*n*n*(n*(n*6.0-15.0)+10.0);r=a.b5.data[k]+l|0;s=a.b5.data[r]+m|0;t=a.b5.data[r+1|0]+m|0;u=a.b5.data[k+1|0]+l|0;v=a.b5.data[u]+m|0;w=a.b5.data[u+1|0]+m|0;e=Dr(a,a.b5.data[s],c,d,n);k=a.b5.data[v];x=c-1.0;b=DM(a,o,e,Dr(a,k,x,d,n));k=a.b5.data[t];e
=d-1.0;b=DM(a,p,b,DM(a,o,Dr(a,k,c,e,n),Dr(a,a.b5.data[w],x,e,n)));k=a.b5.data[s+1|0];f=n-1.0;return DM(a,q,b,DM(a,p,DM(a,o,Dr(a,k,c,d,f),Dr(a,a.b5.data[v+1|0],x,d,f)),DM(a,o,Dr(a,a.b5.data[t+1|0],c,e,f),Dr(a,a.b5.data[w+1|0],x,e,f))));}
function DM(a,b,c,d){return c+b*(d-c);}
function Dr(a,b,c,d,e){var f,g;f=b&15;g=f>=8?d:c;if(f>=4)d=f!=12&&f!=14?e:c;if(f&1)g= -g;if(f&2)d= -d;return g+d;}
function AGW(a,b,c){return Le(a,b,c,0.0);}
function A4I(a,b,c,d){return Le(a,b,c,d);}
function AQq(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;m=0;n=1.0/l;o=(-1);p=0.0;q=0.0;r=0.0;s=0.0;t=0;while(t<f){u=(c+t|0)*i+a.vb;v=u|0;if(u<v)v=v+(-1)|0;w=v&255;u=u-v;x=u*u*u*(u*(u*6.0-15.0)+10.0);y=0;v=w+1|0;z=u-1.0;while(y<h){ba=(e+y|0)*k+a.wr;bb=ba|0;if(ba<bb)bb=bb+(-1)|0;bc=bb&255;bd=ba-bb;be=bd*bd*bd*(bd*(bd*6.0-15.0)+10.0);bf=0;ba=bd-1.0;while(bf<g){bg=(d+bf|0)*j+a.x$;bh=bg|0;if(bg<bh)bh=bh+(-1)|0;bi=bh&255;l=bg-bh;bj=l*l*l*(l*(l
*6.0-15.0)+10.0);if(bf&&bi==o)bi=o;else{bk=a.b5.data[w]+bi|0;bl=a.b5.data[bk]+bc|0;bm=a.b5.data[bk+1|0]+bc|0;bn=a.b5.data[v]+bi|0;bo=a.b5.data[bn]+bc|0;bp=a.b5.data[bn+1|0]+bc|0;p=DM(a,x,Dr(a,a.b5.data[bl],u,l,bd),Dr(a,a.b5.data[bo],z,l,bd));bn=a.b5.data[bm];bq=l-1.0;q=DM(a,x,Dr(a,bn,u,bq,bd),Dr(a,a.b5.data[bp],z,bq,bd));r=DM(a,x,Dr(a,a.b5.data[bl+1|0],u,l,ba),Dr(a,a.b5.data[bo+1|0],z,l,ba));s=DM(a,x,Dr(a,a.b5.data[bm+1|0],u,bq,ba),Dr(a,a.b5.data[bp+1|0],z,bq,ba));}br=b.data;bs=DM(a,be,DM(a,bj,p,q),DM(a,bj,
r,s));bn=m+1|0;br[m]=br[m]+bs*n;bf=bf+1|0;m=bn;o=bi;}y=y+1|0;}t=t+1|0;}}
function T4(){D.call(this);this.gA=null;}
function Jf(a){var b=new T4();AJz(b,a);return b;}
function AIH(a){var b=new T4();A0C(b,a);return b;}
function AJz(a,b){a.gA=$rt_createByteArray(b>>1);}
function A0C(a,b){a.gA=b;}
function Ij(a,b,c,d){var e,f;e=b<<11|d<<7|c;f=e>>1;return !(e&1)?a.gA.data[f]&15:a.gA.data[f]>>4&15;}
function Ek(a,b,c,d,e){var f,g;f=b<<11|d<<7|c;g=f>>1;if(!(f&1))a.gA.data[g]=(a.gA.data[g]&240|e&15)<<24>>24;else a.gA.data[g]=(a.gA.data[g]&15|(e&15)<<4)<<24>>24;}
function JI(a){return a.gA===null?0:1;}
function E3(){EY.call(this);}
var BmY=null;var BfD=null;var BmZ=null;var Bm0=null;function AM$(){var b,c,d;b=new E3;FP(b,B(884),0);BmY=b;b=new E3;FP(b,B(885),1);BfD=b;b=new E3;FP(b,B(886),2);BmZ=b;c=J(E3,3);d=c.data;d[0]=BmY;d[1]=BfD;d[2]=BmZ;Bm0=c;}
function Vm(){Fb.call(this);}
var Bm1=null;function Ml(b,c){return Long_udiv(b, c);}
function AIU(b,c){return Long_urem(b, c);}
function ALX(){Bm1=F($rt_longcls());}
function Tz(){D.call(this);this.CF=null;}
function ASl(a){CM(a.CF,K1(1));}
function A4p(a){ASl(a);}
function Tw(){D.call(this);this.Da=null;}
function ASs(a){CM(a.Da,K1(0));}
function AYh(a){ASs(a);}
function Rh(){D.call(this);this.Bt=null;}
function XM(a){CM(a.Bt,K1(1));}
function A8O(a){XM(a);}
function Rk(){D.call(this);this.BM=null;}
function ASc(a){CM(a.BM,K1(0));}
function A7b(a){ASc(a);}
function Rf(){var a=this;D.call(a);a.CN=null;a.u7=null;}
function ACq(a){CM(a.CN,a.u7.result===null?BmZ:!(Us(a.u7.result)?1:0)?BmY:BfD);}
function A5R(a){ACq(a);}
function Rg(){D.call(this);this.Ec=null;}
function AB5(a){CM(a.Ec,BmZ);}
function A3d(a){AB5(a);}
function Ri(){var a=this;D.call(a);a.EK=null;a.Ek=null;a.yY=null;a.vD=null;a.Bh=0;a.C4=0;a.xf=null;}
function AMF(a){var b,c;b=a.EK.result;if(b!==null&&b.key!==null&&b.value!==null){c=$rt_str(AZQ(b.key));if(c!==null&&Iw(c,a.vD)&&!(!a.Bh&&Hg(c,47,Bh(a.vD)+1|0)!=(-1))){if(!(Us(b.value)?1:0))Fu(a.xf,ATm(c,0,Long_add(new Long(596067632, 383),Long_fromInt(A0G(b.value)))));else if(a.C4)Fu(a.xf,ATm(c,1,Long_fromInt(-1)));}b.continue();return;}CM(a.Ek,CX(a.yY.data[0]));}
function A7i(a){AMF(a);}
function Rj(){var a=this;D.call(a);a.DK=null;a.wJ=null;}
function AK7(a){CM(a.DK,CX(a.wJ.data[0]<=0?(-1):a.wJ.data[0]));}
function A1F(a){AK7(a);}
function Er(){D.call(this);}
function E6(a,b,c,d){return;}
function Ra(){Er.call(this);}
function GX(){var a=new Ra();A6Y(a);return a;}
function A6Y(a){return;}
function AEJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,3)+4|0;h=1;if(e>=1){i=e+g|0;if((i+1|0)<=128){j=(e+1|0)+g|0;k=j-2|0;l=e;a:while(true){if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;while(o<=(d+n
|0)&&h){p=f-n|0;while(p<=(f+n|0)&&h){if(l>=0&&l<128)break a;h=0;p=p+1|0;}o=o+1|0;}l=l+1|0;}$p=7;continue _;}}return 0;case 1:$z=ACt(b,d,m,f);if(C()){break _;}k=$z;L();if(!(k!=BeP.b&&k!=BeQ.b)&&e<((128-g|0)-1|0)){k=BeQ.b;$p=2;continue _;}return 0;case 2:ALq(b,d,m,f,k);if(C()){break _;}k=(e-3|0)+g|0;b:while(true){if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;while(r<=l){j=r-d|0;s=m;while(s<=h){t=s-f|0;if(H_(j)!=q)break b;if(H_(t)!=q)break b;if(E(c,
2)&&o)break b;s=s+1|0;}r=r+1|0;}k=k+1|0;}u=Bgy.data;$p=5;continue _;case 3:$z=ACt(b,d,o,f);if(C()){break _;}m=$z;if(m&&m!=Be1.b){k=k+1|0;if(k>=g)return 1;o=e+k|0;continue _;}m=Be0.b;$p=4;case 4:ALq(b,d,o,f,m);if(C()){break _;}k=k+1|0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;case 5:$z=ACt(b,r,k,s);if(C()){break _;}t=$z;if(!u[t]){t=Be1.b;$p=6;continue _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h
=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(H_(j)!=q)break;if(H_(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=Bgy.data;continue _;case 6:ALq(b,r,k,s,t);if(C()){break _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(H_(j)!=q)break;if(H_(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=Bgy.data;$p=5;continue _;case 7:$z=ACt(b,o,l,p);if(C()){break _;}r
=$z;if(r){L();if(r!=Be1.b)h=0;}while(true){p=p+1|0;while(!(p<=(f+n|0)&&h)){o=o+1|0;while(!(o<=(d+n|0)&&h)){l=l+1|0;if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;}p=f-n|0;}if(l>=0&&l<128)break;h=0;}continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function Oq(){D.call(this);this.Jv=0;}
var Bm2=null;var Bm3=null;function AXZ(a){var b=new Oq();AN$(b,a);return b;}
function AN$(a,b){a.Jv=b;}
function K1(b){return !b?Bm3:Bm2;}
function AHM(){Bm2=AXZ(1);Bm3=AXZ(0);}
function SH(){var a=this;CS.call(a);a.z$=null;a.fS=null;a.xx=0;a.f4=0;}
function AD2(a){DF(a.bH);APS(1);S(a.bH,Dj(0,(a.bm/2|0)-100|0,(a.bE/4|0)+120|0,B(595)));}
function ANF(a){APS(0);}
function AYq(a){a.xx=a.xx+1|0;}
function AHf(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gB&&!b.cl){b=a.fS;$p=1;continue _;}return;case 1:ACc(b);if(C()){break _;}c=a.I;b=null;$p=2;case 2:ADS(c,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function ACV(a,b,c){var d,e;if(c==200)a.f4=(a.f4-1|0)&3;if(!(c!=208&&c!=28))a.f4=(a.f4+1|0)&3;if(c==14&&Bh(a.fS.gr.data[a.f4])>0)a.fS.gr.data[a.f4]=Ev(a.fS.gr.data[a.f4],0,Bh(a.fS.gr.data[a.f4])-1|0);if(Uy(B(887),b)>=0&&Bh(a.fS.gr.data[a.f4])<15){d=a.fS.gr.data;c=a.f4;e=new T;W(e);e=H(e,a.fS.gr.data[a.f4]);Dx(e,b);d[c]=U(e);}}
function ABo(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DD(a,a.b0,a.z$,a.bm/2|0,40,16777215);B3();Bw(a.bm/2|0,a.bE/2|0,50.0);CC((-60.0),(-60.0),(-60.0));Bv(180.0,0.0,1.0,0.0);if(!((a.xx/6|0)%2|0))a.fS.ry=a.f4;e=a.fS;$p=2;case 2:$z=AMd(e);if(C()){break _;}f=$z;Bv((f*360|0)/16.0,0.0,1.0,0.0);e=Bkp;g=a.fS;h=(-0.5);i=(-0.75);j
=(-0.5);k=0.0;$p=3;case 3:AFm(e,g,h,i,j,k);if(C()){break _;}a.fS.ry=(-1);BD();$p=4;case 4:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function IG(){EY.call(this);this.z7=0;}
var Bku=null;var Bkv=null;var Bm4=null;function A_K(a,b,c){var d=new IG();AG1(d,a,b,c);return d;}
function AG1(a,b,c,d){FP(a,b,c);a.z7=d;}
function AFt(){var b,c;Bku=A_K(B(888),0,15);Bkv=A_K(B(889),1,0);b=J(IG,2);c=b.data;c[0]=Bku;c[1]=Bkv;Bm4=b;}
function MC(){var a=this;D.call(a);a.ng=null;a.nT=null;}
function AZ2(a){return a.nT;}
function S3(a,b){var c;c=a.nT;a.nT=b;return c;}
function AXA(a){return a.ng;}
function Lb(){var a=this;MC.call(a);a.da=null;a.dj=null;a.lC=0;a.jm=0;}
function MZ(a){var b;b=LQ(a);if(b==2){if(LQ(a.dj)<0)a.dj=OR(a.dj);return Pw(a);}if(b!=(-2))return a;if(LQ(a.da)>0)a.da=Pw(a.da);return OR(a);}
function LQ(a){return (a.dj===null?0:a.dj.lC)-(a.da===null?0:a.da.lC)|0;}
function OR(a){var b;b=a.da;a.da=b.dj;b.dj=a;FL(a);FL(b);return b;}
function Pw(a){var b;b=a.dj;a.dj=b.da;b.da=a;FL(a);FL(b);return b;}
function FL(a){var b,c;b=a.dj===null?0:a.dj.lC;c=a.da===null?0:a.da.lC;a.lC=DB(b,c)+1|0;a.jm=1;if(a.da!==null)a.jm=a.jm+a.da.jm|0;if(a.dj!==null)a.jm=a.jm+a.dj.jm|0;}
function AOj(a,b){return b?a.dj:a.da;}
function AMW(){var a=this;F_.call(a);a.kq=null;a.g2=0;}
function BbJ(a){var b=new AMW();A6l(b,a);return b;}
function A6l(a,b){K9(a,b);a.kq=$rt_createByteArray(8192);}
function AYr(a){MG(a);a.fm.ls();}
function AXY(a,b,c,d){var e,f,g;e=a.kq;if(e!==null&&d>=e.data.length){MG(a);a.fm.gu(b,c,d);return;}if(b===null){f=new EE;Bl(f,B(890));M(f);}if(c>=0&&c<=(b.data.length-d|0)){if(d<0){g=new N$;f=new T;W(f);Bl(g,U(Be(H(f,B(891)),d)));M(g);}if(e===null){f=new B1;O(f);M(f);}if(d>=(e.data.length-a.g2|0))MG(a);Di(b,c,e,a.g2,d);a.g2=a.g2+d|0;return;}g=new N$;f=new T;W(f);Bl(g,U(Be(H(f,B(892)),c)));M(g);}
function A35(a){var b,$$je;if(a.kq===null)return;a:{try{KO(a);}catch($$e){$$je=Bi($$e);b=$$je;break a;}a.kq=null;return;}a.kq=null;M(b);}
function AXi(a,b){var c,d,e,f;c=a.kq;if(c===null){d=new B1;O(d);M(d);}e=c.data;if(a.g2==e.length){a.fm.gu(c,0,a.g2);a.g2=0;}f=a.g2;a.g2=f+1|0;e[f]=b<<24>>24;}
function MG(a){if(a.g2>0){a.fm.gu(a.kq,0,a.g2);a.g2=0;}}
function WO(){D.call(this);}
function Bm5(){var a=new WO();AXW(a);return a;}
function AXW(a){return;}
function AI2(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p
=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ex(b,d,e,f,B(893),4.0,(1.0+(N(b.r)-N(b.r))*0.20000000298023224)*0.699999988079071);h=F7();i=16;j=0;k=15.0;a:while(true){if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D3(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;while(n<i){o=0;while(o<i){if(!(j&&j!=15&&n&&n!=15&&o&&o!=15)){r=j/k*2.0-1.0;s=n/k*2.0-1.0;t
=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.r)*0.6000000238418579);y=0.30000001192092896;z=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;if(x>0.0)break a;}o=o+1|0;}n=n+1|0;}j=j+1|0;}bc=K(l);bd=K(v);be=K(w);$p=9;continue _;case 1:$z=ADI(b,c,q);if(C()){break _;}q=$z;bf=BY(d,e,f);bg=0;while(true){if(bg>=De(q)){bh=Ci();DC(bh,h);bi=De(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eD;bl=bk.eY;bm=bk.eE;$p=4;continue _;}bn=
Z(q,bg);bj=Sf(bn,d,e,f)/l;if(bj<=1.0)break;bg=bg+1|0;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;case 2:$z=ADy(b,bf,bh);if(C()){break _;}x=$z;bs=x;bt=(1.0-bj)*bs;m=(bt*bt+bt)/2.0*8.0*l+1.0|0;$p=3;case 3:bn.fq(c,m);if(C()){break _;}bn.g=bn.g+v*bt;bn.i=bn.i+w*bt;bn.h=bn.h+z*bt;while(true){bg=bg+1|0;if(bg>=De(q)){bh=Ci();DC(bh,h);bi=De(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eD;bl=bk.eY;bm=bk.eE;$p=4;continue _;}bn=Z(q,bg);bj=Sf(bn,d,
e,f)/l;if(bj>1.0)continue;else break;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;continue _;case 4:$z=ACt(b,m,bl,bm);if(C()){break _;}bu=$z;bv=0;y=m;bw=bl;x=bm;while(bv<1){bq=y+N(b.r);l=bw+N(b.r);v=x+N(b.r);w=bq-d;z=l-e;ba=v-f;bb=Ce(w*w+z*z+ba*ba);w=w/bb;z=z/bb;ba=ba/bb;bb=0.5/(bb/r+0.1)*(N(b.r)*N(b.r)+0.30000001192092896);w=w*bb;z=z*bb;ba=ba*bb;BV(b,B(223),(bq+s)/2.0,(l+u)/2.0,(v+bj)/2.0,w,z,ba);BV(b,B(256),bq,l,v,w,z,ba);bv=bv+1|0;}if(bu>0){L();c=BeN.data[bu];$p
=5;continue _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eD;bl=bk.eY;bm=bk.eE;continue _;case 5:$z=AEH(b,m,bl,bm);if(C()){break _;}bv=$z;g=0.30000001192092896;$p=6;case 6:c.HN(b,m,bl,bm,bv,g);if(C()){break _;}bv=0;$p=7;case 7:APu(b,m,bl,bm,bv);if(C()){break _;}c=BeN.data[bu];$p=8;case 8:c.sH(b,m,bl,bm);if(C()){break _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eD;bl=bk.eY;bm=bk.eE;$p=4;continue _;case 9:$z=ACt(b,bc,bd,be);if(C()){break _;}bx=$z;if(bx>0){L();x=x-(BeN.data[bx].yl(c)+0.30000001192092896)
*y;}if(x>0.0)Xd(h,CO(bc,bd,be));l=l+z;v=v+ba;w=w+bb;x=x-0.22500000894069672;while(x<=0.0){while(true){o=o+1|0;while(o>=i){n=n+1|0;while(n>=i){j=j+1|0;if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D3(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;}o=0;}if(!j)break;if(j==15)break;if(!n)break;if(n==15)break;if(!o)break;if(o!=15)continue;else break;}r=j/k*2.0-1.0;s=n/k*2.0-1.0;t=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.r)*0.6000000238418579);y=0.30000001192092896;z
=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;}bc=K(l);bd=K(v);be=K(w);continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p);}
function N$(){BO.call(this);}
function Bm6(){var a=new N$();AVS(a);return a;}
function AVS(a){O(a);}
function ARh(){Er.call(this);}
function AYk(){var a=new ARh();A0S(a);return a;}
function A0S(a){return;}
function XK(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,2)+2|0;h=E(c,2)+2|0;i=0;j=(d-g|0)-1|0;k=(d+g|0)+1|0;l=e-1|0;m=e+3|0;n=m+1|0;o=(f-h|0)-1|0;p=(f+h|0)+1|0;q=j;a:while(true){r=R(q,
k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgT.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;while(true){t=R(s,n);if(t>0)break;v=o;w=R(v,p);if(w<=0)break a;s=s+1|0;}q=q+1|0;}$p=1;case 1:$z
=ABX(b,q,s,v);if(C()){break _;}x=$z;if(s==l&&!x.du())return 0;if(!t&&!x.du())return 0;if(!(q!=j&&r&&v!=o&&w)&&s==e){$p=5;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;c:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgT.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break c;t
=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}continue _;case 2:APu(b,d,e,f,k);if(C()){break _;}$p=3;case 3:$z=ANv(b,d,e,f);if(C()){break _;}b=$z;b.jJ=ADD(a,c);return 1;case 4:$z=ACt(b,o,e,j);if(C()){break _;}r=$z;if(!r){u=0;r=o-1|0;$p=6;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=BgT.b;$p=2;continue _;case 5:$z=ACt(b,q,s,v);if(C()){break _;}u
=$z;if(!u){u=s+1|0;$p=7;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgT.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q
=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 6:$z=ABX(b,r,e,j);if(C()){break _;}x=$z;if(x.du())u=1;r=o+1|0;$p=10;continue _;case 7:$z=ACt(b,q,u,v);if(C()){break _;}u=$z;if(!u)i=i+1|0;v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;d:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgT.b;$p=2;continue _;}t
=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break d;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 8:$z=ABX(b,r,t,v);if(C()){break _;}x=$z;if(x.du()){if(!u&&E(c,4)){L();q=Be4.b;$p=14;continue _;}L();q=BeX.b;$p=12;continue _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while
(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgT.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){continue _;}q=t-1|0;$p=9;case 9:$z=ABX(b,r,q,v);if(C()){break _;}x=$z;if(x.du()){$p=8;continue _;}q=0;$p=11;continue _;case 10:$z=ABX(b,r,e,j);if(C()){break _;}x=$z;if(x.du())u=u+1|0;r=j-1|0;$p=13;continue _;case 11:APu(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r
=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgT.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 12:APu(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)
|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgT.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 13:$z=ABX(b,o,e,r);if(C()){break _;}x=$z;if(x.du())u=u+1|0;r=j+1|0;$p=16;continue _;case 14:APu(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g
|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgT.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 15:APu(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgT.b;$p=2;continue _;}t=m;}v=o;}if(r!=j
&&u&&v!=o&&s&&t!=n&&i){q=0;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 16:$z=ABX(b,o,e,r);if(C()){break _;}x=$z;if(x.du())u=u+1|0;if(u==1){L();r=BgV.b;$p=17;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=BgT.b;$p=2;continue _;case 17:APu(b,o,e,j,r);if(C()){break _;}$p=18;case 18:$z=ANv(b,o,e,j);if(C()){break _;}x=$z;y=x;n=0;while(n<8){z=AHl(a,c);if(z!==null)AHy(y,E(c,k),z);n=n+1|0;}while(true){q=q+1|0;if(q
>=2)break;l=0;if(l>=3)continue;else{o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}}L();k=BgT.b;$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AHl(a,b){var c,d;a:{c=E(b,10);if(!c){d=new Cd;BB();DA(d,BiG);break a;}if(c==1){d=new Cd;BB();Gm(d,BhO,E(b,4)+1|0);break a;}if(c==2){d=new Cd;BB();DA(d,Bid);break a;}if(c==3){d=new Cd;BB();Gm(d,BhB,E(b,4)+1|0);break a;}if(c==4){d=new Cd;BB();Gm(d,Bgc,E(b,4)+1|0);break a;}if(c==5){d=new Cd;BB();Gm(d,Bgd,E(b,4)+1|0);break a;}if(c==6){d=new Cd;BB();DA(d,BiC);break a;}if(c==7&&!E(b,100)){d=new Cd;BB();DA(d,BiA);break a;}d=null;}return d;}
function ADD(a,b){var c;c=E(b,4);return !c?B(855):c==1?B(858):c==2?B(858):c!=3?B(3):B(856);}
function Ch(){var a=this;Er.call(a);a.zR=0;a.c2=0;}
function Bm7(a,b){var c=new Ch();Cm(c,a,b);return c;}
function Cm(a,b,c){a.zR=b;a.c2=c;}
function ABO(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=N(c)*3.1415927410125732;h=d+8|0;i=h+Bq(g)*a.c2/8.0;j=
h-Bq(g)*a.c2/8.0;h=f+8|0;k=h+BC(g)*a.c2/8.0;l=h-BC(g)*a.c2/8.0;m=(e+E(c,3)|0)+2|0;n=(e+E(c,3)|0)+2|0;o=0;j=j-i;n=n-m;p=l-k;while(o<=a.c2){q=o;r=i+j*q/a.c2;s=m+n*q/a.c2;t=k+p*q/a.c2;q=Cl(c)*a.c2/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c2)+1.0)*q+1.0;v=(Bq(h/a.c2)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;while(w<=e){ba=f;while(ba<=x){bb=y;while(bb<=z){bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be<1.0){$p=1;continue _;}bb=bb+1|0;}ba=ba+1|0;}w=w+1|0;}o=o+1|0;}return 1;case 1:$z
=ACt(b,w,ba,bb);if(C()){break _;}bf=$z;L();if(bf==BeT.b){d=a.zR;$p=2;continue _;}a:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c2)break a;q=o;r=i+j*q/a.c2;s=m+n*q/a.c2;t=k+p*q/a.c2;q=Cl(c)*a.c2/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c2)+1.0)*q+1.0;v=(Bq(h/a.c2)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{continue _;}}return 1;case 2:ALq(b,
w,ba,bb,d);if(C()){break _;}b:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c2)break b;q=o;r=i+j*q/a.c2;s=m+n*q/a.c2;t=k+p*q/a.c2;q=Cl(c)*a.c2/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c2)+1.0)*q+1.0;v=(Bq(h/a.c2)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{$p=1;continue _;}}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p);}
function BS(){Er.call(this);this.ua=0;}
function Bm8(a){var b=new BS();BT(b,a);return b;}
function BT(a,b){a.ua=b;}
function ACL(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;case 1:$z=ACt(b,h,i,j);if(C()){break _;}k=$z;if(!k){L();l=BeN.data[a.ua];$p=2;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;continue _;case 2:$z
=l.G7(b,h,i,j);if(C()){break _;}k=$z;if(k){k=a.ua;$p=3;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;case 3:ALq(b,h,i,j,k);if(C()){break _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Cn(){Er.call(this);this.EO=0;}
function Bm9(a){var b=new Cn();Cs(b,a);return b;}
function Cs(a,b){a.EO=b;}
function ALY(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e+1|0;$p=1;case 1:$z=ACt(b,d,g,f);if(C()){break _;}g=$z;L();if(g!=BeT.b)return 0;g=e-1|0;$p=2;case 2:$z=ACt(b,d,g,f);if(C()){break _;}h=$z;if(h!=BeT.b)return 0;$p=3;case 3:$z=ACt(b,d,e,f);if(C()){break _;}g=$z;if(g){$p=5;continue _;}g=0;h=d-1|0;$p=4;case 4:$z=ACt(b,h,e,f);if(C()){break _;}i
=$z;if(i==BeT.b)g=1;i=d+1|0;$p=6;continue _;case 5:$z=ACt(b,d,e,f);if(C()){break _;}g=$z;if(g!=BeT.b)return 0;g=0;h=d-1|0;$p=4;continue _;case 6:$z=ACt(b,i,e,f);if(C()){break _;}j=$z;if(j==BeT.b)g=g+1|0;k=f-1|0;$p=7;case 7:$z=ACt(b,d,e,k);if(C()){break _;}j=$z;if(j==BeT.b)g=g+1|0;j=f+1|0;$p=8;case 8:$z=ACt(b,d,e,j);if(C()){break _;}l=$z;if(l==BeT.b)g=g+1|0;l=0;$p=9;case 9:$z=ACt(b,h,e,f);if(C()){break _;}h=$z;if(!h)l=1;$p=10;case 10:$z=ACt(b,i,e,f);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=11;case 11:$z=ACt(b,
d,e,k);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=12;case 12:$z=ACt(b,d,e,j);if(C()){break _;}h=$z;if(!h)l=l+1|0;if(g==3&&l==1){g=a.EO;$p=13;continue _;}return 1;case 13:APu(b,d,e,f,g);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Sw(){C0.call(this);}
function Y7(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;a.i=a.i+0.002;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARC(a,b,c,d);if(C()){break _;}a.g=a.g*0.8500000238418579;a.i=a.i*0.8500000238418579;a.h=a.h*0.8500000238418579;e=a.m;f=K(a.d);g=K(a.j);h=K(a.e);$p=2;case 2:$z=ABX(e,f,g,h);if(C()){break _;}e=$z;if(e!==BfO){$p=3;continue _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;continue _;case 3:Ca(a);if
(C()){break _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;case 4:Ca(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFn(){C0.call(this);this.Cn=0.0;}
function A78(a,b,c,d,e){var f=new AFn();AV0(f,a,b,c,d,e);return f;}
function AV0(a,b,c,d,e,f){var g;FA(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.10000000149011612;a.i=a.i*0.10000000149011612;a.h=a.h*0.10000000149011612;g=BP()*0.30000001192092896;a.io=g;a.ic=g;a.hY=g;a.dq=a.dq*0.75;a.dq=a.dq*f;a.Cn=a.dq;a.cw=8.0/(BP()*0.8+0.2)|0;a.cw=a.cw*f|0;a.o3=0;}
function AJ5(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dp+c)/a.cw*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.dq=a.Cn*i;$p=1;case 1:ANr(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALQ(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e5=7-((a.dp*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARC(a,c,d,e);if(C()){break _;}if(a.j===a.cR){a.g=a.g*1.1;a.h=a.h*1.1;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if
(C()){break _;}a.e5=7-((a.dp*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,$p);}
function QY(){C0.call(this);}
function AR5(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANr(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AEQ(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e5=7-((a.dp*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARC(a,c,d,e);if(C()){break _;}a.g=a.g*0.8999999761581421;a.i=a.i*0.8999999761581421;a.h=a.h*0.8999999761581421;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}a.e5=7-
((a.dp*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,$p);}
function OZ(){C0.call(this);this.DL=0.0;}
function AQF(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dp+c)/a.cw;a.dq=a.DL*(1.0-i*i*0.5);$p=1;case 1:ANr(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ASq(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=(a.dp+b)/a.cw;if(c<0.0)c=0.0;if(c>1.0)c=1.0;$p=1;case 1:$z=ADF(a,b);if(C()){break _;}d=$z;return d*c+1.0-c;default:E_();}}C3().s(a,b,c,d,$p);}
function AAO(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=2;continue _;}c=a.g;d=a.i;e=a.h;$p=1;case 1:ARC(a,c,d,e);if(C()){break _;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E_();}}C3().s(a,
b,c,d,e,$p);}
function AAZ(){C0.call(this);this.yO=0.0;}
function BcG(a,b,c,d){var e=new AAZ();A1I(e,a,b,c,d);return e;}
function A1I(a,b,c,d,e){FA(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=N(a.n)*0.4000000059604645+0.05000000074505806;a.io=1.0;a.ic=1.0;a.hY=1.0;a.dq=a.dq*(N(a.n)*2.0+0.20000000298023224);a.yO=a.dq;a.cw=16.0/(BP()*0.8+0.2)|0;a.o3=0;a.e5=49;}
function AJ6(a,b){return 1.0;}
function AGR(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dp+c)/a.cw;a.dq=a.yO*(1.0-i*i);$p=1;case 1:ANr(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALg(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=1;continue _;}c=a.dp/a.cw;if(N(a.n)>c)BV(a.m,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;continue _;case 1:Ca(a);if(C()){break _;}c=a.dp/a.cw;if(N(a.n)>c)BV(a.m,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;case 2:ARC(a,d,e,f);if(C()){break _;}a.g
=a.g*0.9990000128746033;a.i=a.i*0.9990000128746033;a.h=a.h*0.9990000128746033;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ARz(){JL.call(this);}
function Bct(a,b,c,d,e,f,g){var h=new ARz();AVM(h,a,b,c,d,e,f,g);return h;}
function AVM(a,b,c,d,e,f,g,h){TI(a,b,c,d,e);a.m4=0.03999999910593033;a.e5=a.e5+1|0;if(g===0.0&&!(f===0.0&&h===0.0)){a.g=f;a.i=g+0.1;a.h=h;}}
function AIo(){D.call(this);}
function Bm$(){var a=new AIo();AWO(a);return a;}
function AWO(a){return;}
function H4(){var a=this;D.call(a);a.di=null;a.bu=0;a.bq=0;a.bt=0;a.fQ=0;a.bF=null;a.e3=null;}
function Bm_(a,b,c,d,e){var f=new H4();YN(f,a,b,c,d,e);return f;}
function YN(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e3=b;a.bF=Ci();a.di=c;a.bu=d;a.bq=e;a.bt=f;$p=1;case 1:$z=AEH(c,d,e,f);if(C()){break _;}d=$z;a.fQ=d;KY(a);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function KY(a){a:{DF(a.bF);if(!a.fQ){S(a.bF,CO(a.bu,a.bq,a.bt-1|0));S(a.bF,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fQ==1){S(a.bF,CO(a.bu-1|0,a.bq,a.bt));S(a.bF,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fQ==2){S(a.bF,CO(a.bu-1|0,a.bq,a.bt));S(a.bF,CO(a.bu+1|0,a.bq+1|0,a.bt));break a;}if(a.fQ==3){S(a.bF,CO(a.bu-1|0,a.bq+1|0,a.bt));S(a.bF,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fQ==4){S(a.bF,CO(a.bu,a.bq+1|0,a.bt-1|0));S(a.bF,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fQ==5){S(a.bF,CO(a.bu,a.bq,a.bt-1|0));S(a.bF,CO(a.bu,a.bq
+1|0,a.bt+1|0));break a;}if(a.fQ==6){S(a.bF,CO(a.bu+1|0,a.bq,a.bt));S(a.bF,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fQ==7){S(a.bF,CO(a.bu-1|0,a.bq,a.bt));S(a.bF,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fQ==8){S(a.bF,CO(a.bu-1|0,a.bq,a.bt));S(a.bF,CO(a.bu,a.bq,a.bt-1|0));break a;}if(a.fQ!=9)break a;S(a.bF,CO(a.bu+1|0,a.bq,a.bt));S(a.bF,CO(a.bu,a.bq,a.bt-1|0));}}
function AFE(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=a.bF.p)return;c=Z(a.bF,b);$p=1;case 1:$z=AQ5(a,c);if(C()){break _;}c=$z;if(c!==null&&SN(c,a)){Q8(a.bF,b,CO(c.bu,c.bq,c.bt));d=b;}else{c=a.bF;d=b+(-1)|0;En(c,b);}b=d+1|0;if(b>=a.bF.p)return;c=Z(a.bF,b);continue _;default:E_();}}C3().s(a,b,c,d,$p);}
function AQ5(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.di;d=b.eD;e=b.eY;f=b.eE;$p=1;case 1:$z=ACt(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e3.b){c=a.di;d=b.eD;e=b.eY+1|0;f=b.eE;$p=2;continue _;}c=new H4;g=a.e3;h=a.di;d=b.eD;e=b.eY;f=b.eE;$p=3;continue _;case 2:$z=ACt(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e3.b){c=a.di;d=b.eD;e=b.eY-1|0;f=b.eE;$p=4;continue _;}c=new H4;g=a.e3;h=a.di;d
=b.eD;e=b.eY+1|0;f=b.eE;$p=5;continue _;case 3:YN(c,g,h,d,e,f);if(C()){break _;}return c;case 4:$z=ACt(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e3.b){c=null;return c;}c=new H4;g=a.e3;h=a.di;e=b.eD;d=b.eY-1|0;f=b.eE;$p=6;continue _;case 5:YN(c,g,h,d,e,f);if(C()){break _;}return c;case 6:YN(c,g,h,e,d,f);if(C()){break _;}return c;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function SN(a,b){var c,d;c=0;while(c<a.bF.p){d=Z(a.bF,c);if(d.eD==b.bu&&d.eE==b.bt)return 1;c=c+1|0;}return 0;}
function KM(a,b,c,d){var e,f;e=0;while(e<a.bF.p){f=Z(a.bF,e);if(f.eD==b&&f.eE==d)return 1;e=e+1|0;}return 0;}
function O3(a,b){var c;if(SN(a,b))return 1;if(a.bF.p==2)return 0;if(!a.bF.p)return 1;c=Z(a.bF,0);return b.bq==a.bq&&c.eY==a.bq?1:1;}
function ARJ(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:S(a.bF,CO(b.bu,b.bq,b.bt));c=KM(a,a.bu,a.bq,a.bt-1|0);d=KM(a,a.bu,a.bq,a.bt+1|0);e=KM(a,a.bu-1|0,a.bq,a.bt);f=KM(a,a.bu+1|0,a.bq,a.bt);g=(-1);if(!(!c&&!d))g=0;if(!(!e&&!f))g=1;if(d&&f&&!c&&!e)g=6;if(d&&e&&!c&&!f)g=7;if(c&&e&&!d&&!f)g=8;if(c&&f&&!d&&!e)g=9;if(!g){b=a.di;c=a.bu;d=a.bq+1|0;e=a.bt-1|0;$p=1;continue _;}if(g==1){b=a.di;c=a.bu+1|0;d
=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.di;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 1:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e3.b)g=4;b=a.di;c=a.bu;d=a.bq+1|0;e=a.bt+1|0;$p=3;continue _;case 2:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e3.b)g=2;b=a.di;c=a.bu-1|0;d=a.bq+1|0;e=a.bt;$p=4;continue _;case 3:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e3.b)g=5;if(g==1){b=a.di;c=a.bu+1|0;d=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.di;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 4:$z=ACt(b,
c,d,e);if(C()){break _;}c=$z;if(c==a.e3.b)g=3;if(g<0)g=0;b=a.di;c=a.bu;d=a.bq;e=a.bt;$p=5;case 5:AKu(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AIZ(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=CO(b,c,d);$p=1;case 1:$z=AQ5(a,e);if(C()){break _;}e=$z;if(e===null)return 0;$p=2;case 2:AFE(e);if(C()){break _;}return O3(e,a);default:E_();}}C3().s(a,b,c,d,e,$p);}
function YM(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bu;c=a.bq;d=a.bt-1|0;$p=1;case 1:$z=AIZ(a,b,c,d);if(C()){break _;}d=$z;b=a.bu;c=a.bq;e=a.bt+1|0;$p=2;case 2:$z=AIZ(a,b,c,e);if(C()){break _;}b=$z;c=a.bu-1|0;e=a.bq;f=a.bt;$p=3;case 3:$z=AIZ(a,c,e,f);if(C()){break _;}c=$z;e=a.bu+1|0;f=a.bq;g=a.bt;$p=4;case 4:$z=AIZ(a,e,f,g);if(C()){break _;}e=$z;f=(-1);if(!(!d&&!b))f=0;if(!(!c&&
!e))f=1;if(b&&e&&!d&&!c)f=6;if(b&&c&&!d&&!e)f=7;if(d&&c&&!b&&!e)f=8;if(d&&e&&!b&&!c)f=9;if(!f){h=a.di;d=a.bu;b=a.bq+1|0;c=a.bt-1|0;$p=5;continue _;}if(f==1){h=a.di;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fQ=f;KY(a);h=a.di;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 5:$z=ACt(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e3.b)f=4;h=a.di;d=a.bu;b=a.bq+1|0;c=a.bt+1|0;$p=7;continue _;case 6:$z=ACt(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e3.b)f=2;h=a.di;d=a.bu-1|0;b=a.bq+1|0;c=a.bt;$p=8;continue _;case 7:$z
=ACt(h,d,b,c);if(C()){break _;}b=$z;if(b==a.e3.b)f=5;if(f==1){h=a.di;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fQ=f;KY(a);h=a.di;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 8:$z=ACt(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e3.b)f=3;if(f<0)f=0;a.fQ=f;KY(a);h=a.di;d=a.bu;b=a.bq;c=a.bt;$p=9;case 9:AKu(h,d,b,c,f);if(C()){break _;}g=0;if(g>=a.bF.p)return;h=Z(a.bF,g);$p=10;case 10:$z=AQ5(a,h);if(C()){break _;}h=$z;if(h!==null){$p=11;continue _;}g=g+1|0;if(g>=a.bF.p)return;h=Z(a.bF,g);continue _;case 11:AFE(h);if
(C()){break _;}if(O3(h,a)){$p=12;continue _;}g=g+1|0;if(g>=a.bF.p)return;h=Z(a.bF,g);$p=10;continue _;case 12:ARJ(h,a);if(C()){break _;}g=g+1|0;if(g>=a.bF.p)return;h=Z(a.bF,g);$p=10;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Vd(){var a=this;D.call(a);a.pa=null;a.FX=0;a.mc=0;}
function AP1(a){a.mc=a.mc+1|0;}
function ANl(a){return a.mc<a.pa.data.length?0:1;}
function Sn(a,b){return BY(a.pa.data[a.mc].ia+(b.c0+1.0|0)*0.5,a.pa.data[a.mc].hV,a.pa.data[a.mc].il+(b.c0+1.0|0)*0.5);}
function AB$(){var a=this;D.call(a);a.x4=null;a.j5=null;a.q1=null;a.l_=null;}
function A2E(a){var b=new AB$();A6o(b,a);return b;}
function A6o(a,b){a.j5=Bb8();a.q1=Dd();a.l_=J(HP,32);a.x4=b;}
function APo(a,b,c,d){return O5(a,b,c.d,c.L.M,c.e,d);}
function AF$(a,b,c,d,e,f){return O5(a,b,c+0.5,d+0.5,e+0.5,f);}
function O5(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;Ux(a.j5);U5(a.q1);g=IS(a,K(b.L.R),K(b.L.M),K(b.L.S));h=IS(a,K(c-b.c0/2.0),K(d),K(e-b.c0/2.0));i=A0w(K3(b.c0+1.0),K3(b.eM+1.0),K3(b.c0+1.0));g.my=0.0;g.pg=E1(g,h);g.i2=g.pg;Ux(a.j5);WM(a.j5,g);j=g;a:{while(true){if(AB9(a.j5)){if(j!==g){k=UJ(a,g,j);break a;}k=null;break a;}l=ARy(a.j5);if(l.mV==h.mV)break;if(E1(l,h)<E1(j,h))j=l;l.nu=1;m=AJL(a,b,l,i,h,f);n=0;while(n<m){k=a.l_.data[n];o=l.my+E1(l,k);if(!(Ps(k)&&o>=k.my)){k.o1=l;k.my=o;k.pg=E1(k,h);if(Ps(k))ABl(a.j5,
k,k.my+k.pg);else{k.i2=k.my+k.pg;WM(a.j5,k);}}n=n+1|0;}}k=UJ(a,g,h);}return k;}
function AJL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;if(J3(a,b,c.ia,c.hV+1|0,c.il,d)>0)g=1;h=Kz(a,b,c.ia,c.hV,c.il+1|0,d,g);i=Kz(a,b,c.ia-1|0,c.hV,c.il,d,g);j=Kz(a,b,c.ia+1|0,c.hV,c.il,d,g);k=Kz(a,b,c.ia,c.hV,c.il-1|0,d,g);if(h===null)l=0;else if(h.nu)l=0;else if(E1(h,e)>=f)l=0;else{m=a.l_.data;l=1;m[0]=h;}if(i===null)n=l;else if(i.nu)n=l;else if(E1(i,e)>=f)n=l;else{m=a.l_.data;n=l+1|0;m[l]=i;}if(j===null)o=n;else if(j.nu)o=n;else if(E1(j,e)>=f)o=n;else{m=a.l_.data;o=n+1|0;m[n]=j;}if(k===null)n=o;else if(k.nu)n
=o;else if(E1(k,e)>=f)n=o;else{m=a.l_.data;n=o+1|0;m[o]=k;}return n;}
function Kz(a,b,c,d,e,f,g){var h,i,j,k;h=null;if(J3(a,b,c,d,e,f)>0)h=IS(a,c,d,e);if(h===null){g=d+g|0;if(J3(a,b,c,g,e,f)>0)h=IS(a,c,g,e);}if(h!==null){i=0;a:{while(true){if(d<=0)break a;j=J3(a,b,c,d-1|0,e,f);if(j<=0)break a;if(j<0)return null;i=i+1|0;if(i>=4)break;d=d+(-1)|0;}return null;}if(d>0)h=IS(a,c,d,e);k=N1(a.x4,c,d-1|0,e);if(!(k!==BfO&&k!==BfP))return null;}return h;}
function IS(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=CP(a.q1,CX(e));if(f===null){f=A0w(b,c,d);BR(a.q1,CX(e),f);}return f;}
function J3(a,b,c,d,e,f){var g,h,i,j;g=c;a:{while(g<(c+f.ia|0)){h=d;while(h<(d+f.hV|0)){i=e;while(i<(e+f.il|0)){j=N1(a.x4,c,d,e);if(j.ud())return 0;if(j===BfO)break a;if(j===BfP)break a;i=i+1|0;}h=h+1|0;}g=g+1|0;}return 1;}return (-1);}
function UJ(a,b,c){var d,e,f,g;d=1;e=c;while(e.o1!==null){d=d+1|0;e=e.o1;}f=J(HP,d);g=f.data;d=d+(-1)|0;g[d]=c;while(c.o1!==null){c=c.o1;d=d+(-1)|0;g[d]=c;}b=new Vd;b.pa=f;b.FX=g.length;return b;}
function UY(){var a=this;C0.call(a);a.mv=null;a.hP=null;a.p6=0;a.q_=0;a.AP=0.0;}
function AMf(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.p6+c)/a.q_;d=i*i;j=a.mv.d;k=a.mv.j;l=a.mv.e;m=a.hP.cr;n=a.hP.d-a.hP.cr;o=c;n=m+n*o;m=a.hP.b7+(a.hP.j-a.hP.b7)*o+a.AP;o=a.hP.cs+(a.hP.e-a.hP.cs)*o;n=n-j;p=d;q=j+n
*p;r=k+(m-k)*p;p=l+(o-l)*p;s=K(q);t=K(r+a.c3/2.0);u=K(p);b=a.m;$p=1;case 1:$z=ANf(b,s,t,u);if(C()){break _;}v=$z;o=q-BkK;n=r-BkL;m=p-BkM;BU(v,v,v,1.0);b=Bgm;w=a.mv;o=o;n=n;m=m;d=a.mv.v;$p=2;case 2:AQB(b,w,o,n,m,d,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function AAH(a){a.p6=a.p6+1|0;if(a.p6==a.q_)Ca(a);}
function AUs(a){return 2;}
function Y2(){var a=this;D.call(a);a.d1=null;a.eV=0;}
function Bb8(){var a=new Y2();AZ9(a);return a;}
function AZ9(a){a.d1=J(HP,1024);a.eV=0;}
function WM(a,b){var c,d;if(b.gz>=0){b=new D2;Bl(b,B(894));M(b);}if(a.eV==a.d1.data.length){c=J(HP,a.eV<<1);Di(a.d1,0,c,0,a.eV);a.d1=c;}a.d1.data[a.eV]=b;b.gz=a.eV;d=a.eV;a.eV=d+1|0;UW(a,d);return b;}
function Ux(a){a.eV=0;}
function ARy(a){var b,c,d,e;b=a.d1.data[0];c=a.d1.data;d=a.d1.data;e=a.eV-1|0;a.eV=e;c[0]=d[e];a.d1.data[a.eV]=null;if(a.eV>0)OK(a,0);b.gz=(-1);return b;}
function ABl(a,b,c){var d;d=b.i2;b.i2=c;if(c>=d)OK(a,b.gz);else UW(a,b.gz);}
function UW(a,b){var c,d,e,f;c=a.d1.data[b];d=c.i2;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.d1.data[e];if(d>=f.i2)break;a.d1.data[b]=f;f.gz=b;b=e;}}a.d1.data[b]=c;c.gz=b;}
function OK(a,b){var c,d,e,f,g,h,i,j;c=a.d1.data[b];d=c.i2;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.eV)break;g=a.d1.data[e];h=g.i2;if(f>=a.eV){i=null;j=Infinity;}else{i=a.d1.data[f];j=i.i2;}if(h<j){if(h>=d)break a;a.d1.data[b]=g;g.gz=b;}else{if(j>=d)break a;a.d1.data[b]=i;i.gz=b;e=f;}b=e;}}a.d1.data[b]=c;c.gz=b;}
function AB9(a){return a.eV?0:1;}
function HP(){var a=this;D.call(a);a.ia=0;a.hV=0;a.il=0;a.mV=0;a.gz=0;a.my=0.0;a.pg=0.0;a.i2=0.0;a.o1=null;a.nu=0;}
function A0w(a,b,c){var d=new HP();A8H(d,a,b,c);return d;}
function A8H(a,b,c,d){a.gz=(-1);a.nu=0;a.ia=b;a.hV=c;a.il=d;a.mV=b|c<<10|d<<20;}
function E1(a,b){var c,d,e;c=b.ia-a.ia|0;d=b.hV-a.hV|0;e=b.il-a.il|0;return D_(c*c+d*d+e*e);}
function A3O(a,b){return b.mV!=a.mV?0:1;}
function AVi(a){return a.mV;}
function Ps(a){return a.gz<0?0:1;}
function AJg(){D.call(this);}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",4,"regex",3,"nio",6,"charset",3,"io",3,"lang",-1,"net",10,"minecraft",11,"src"]);
$rt_metadata([D,"Object",9,0,[],0,3,0,["fj",function(){return A4W(this);},"em",function(b){return QZ(this,b);},"gk",function(){return AUj(this);}],Jv,0,D,[],0,3,0,0,MO,0,D,[],3,3,0,0,FO,0,D,[MO],0,3,0,0,AJ4,0,D,[],4,0,0,0,T0,0,D,[],4,3,0,0,Db,0,D,[],3,3,0,0,DL,0,D,[],3,3,0,0,KX,0,D,[],3,3,0,0,B4,"String",9,D,[Db,DL,KX],0,3,0,["gk",function(){return AUf(this);},"em",function(b){return DJ(this,b);},"fj",function(){return A8j(this);},"lM",function(b){return AVY(this,b);}],D8,0,D,[],0,3,0,["lN",function(){return A0h(this);
}],Fh,0,D8,[],0,3,0,0,IZ,0,Fh,[],0,3,0,0,AMa,0,IZ,[],0,3,0,0,HJ,0,D,[Db,KX],0,0,0,["nw",function(b){MU(this,b);},"gk",function(){return U(this);}],Ir,0,D,[],3,3,0,0,T,0,HJ,[Ir],0,3,0,["xP",function(b,c,d,e){return A6V(this,b,c,d,e);},"xh",function(b,c,d){return AVl(this,b,c,d);},"gk",function(){return BL(this);},"nw",function(b){AXI(this,b);},"yf",function(b,c){return A7k(this,b,c);}],Fb,0,D,[Db],1,3,0,0,Gf,0,Fb,[DL],0,3,0,["fj",function(){return A25(this);},"em",function(b){return A_m(this,b);},"lM",function(b)
{return A6Z(this,b);}],IM,0,IZ,[],0,3,0,0,AOQ,0,IM,[],0,3,0,0,ALC,0,IM,[],0,3,0,0,BE,0,D8,[],0,3,0,0,B6,"RuntimeException",9,BE,[],0,3,0,0,C_,0,D,[],3,3,0,0,He,0,D,[C_],3,3,0,0,Uk,0,D,[He],3,3,0,0,Qm,0,D,[He],3,3,0,0,U9,0,D,[He],3,3,0,0,Re,0,D,[He],3,3,0,0,Wf,0,D,[He,Uk,Qm,U9,Re],3,3,0,0,Pt,0,D,[],3,3,0,0,Lk,0,D,[C_],3,3,0,0,YG,0,D,[C_,Wf,Pt,Lk],1,3,0,["X_",function(b,c){return AX3(this,b,c);},"a0c",function(b,c){return AYf(this,b,c);},"Sd",function(b){return ATD(this,b);},"Oc",function(b,c,d){return AY8(this,
b,c,d);},"Mr",function(b){return A1B(this,b);},"U6",function(){return AUB(this);},"Tt",function(b,c,d){return ASW(this,b,c,d);}],Bs,0,D,[],0,3,Bd,0,SP,0,D,[],3,3,0,0,Jy,0,D,[SP],3,3,0,0,NS,0,D,[],3,3,0,0,Hy,0,D,[Ir,Jy,NS],1,3,0,0,ABe,0,Hy,[],0,3,0,0,Lt,0,Hy,[],0,3,0,0,AFa,0,D,[],4,3,0,0,AFP,0,D,[C_],1,3,0,0,LY,0,D,[],3,3,0,0,Il,0,D,[LY],0,3,0,0,ZC,0,D,[],0,3,0,0,Mi,0,D,[],0,3,Bbg,0,Gk,0,D,[LY],0,3,0,["ko",function(){ARk(this);}],DO,0,D,[C_],3,3,0,0,W3,0,D,[DO],0,0,0,["gO",function(b){return A$U(this,b);}]]);
$rt_metadata([W9,0,D,[DO],0,0,0,["gO",function(b){return AXD(this,b);}],W$,0,D,[DO],0,0,0,["gO",function(b){return A3y(this,b);}],W7,0,D,[DO],0,0,0,["gO",function(b){return ASI(this,b);}],W8,0,D,[DO],0,0,0,["gO",function(b){return A3J(this,b);}],W5,0,D,[DO],0,0,0,["gO",function(b){return A2g(this,b);}],W6,0,D,[DO],0,0,0,["gO",function(b){return A6v(this,b);}],W4,0,D,[DO],0,0,0,["gO",function(b){return AUd(this,b);}],Qu,0,D,[DO],0,0,0,["gO",function(b){return A67(this,b);}],Qt,0,D,[DO],0,0,0,["gO",function(b)
{return AYG(this,b);}],NO,0,D,[],0,3,0,0,AAS,0,D,[C_],1,3,0,0,UQ,0,D,[],0,3,0,0,B1,"IOException",8,BE,[],0,3,0,0,Lg,0,HJ,[Ir],0,3,0,["xP",function(b,c,d,e){return AVV(this,b,c,d,e);},"xh",function(b,c,d){return A4a(this,b,c,d);},"nw",function(b){A4r(this,b);},"yf",function(b,c){return A97(this,b,c);}],Fy,0,D,[],3,3,0,0,VX,0,D,[Fy],0,3,0,0,Fj,0,D,[DL],0,3,0,["em",function(b){return A$Y(this,b);},"fj",function(){return A$G(this);},"lM",function(b){return A29(this,b);}],IV,0,D,[],0,3,0,0,UM,0,IV,[],0,3,0,0,Sx,
0,D,[],0,3,0,0,VC,0,D,[],3,3,0,0,RY,0,D,[VC],0,3,0,0,AFN,0,D,[],0,3,0,0,Eh,0,D,[],1,3,0,0,Mw,0,Eh,[],0,3,0,["hH",function(b,c,d,e,f,g){A$i(this,b,c,d,e,f,g);},"og",function(b,c,d,e,f,g){AIQ(this,b,c,d,e,f,g);}],Eu,0,D,[],0,3,0,0,AAQ,0,Eu,[],0,3,0,["o9",function(){AYz(this);}],AKA,0,Eu,[],0,3,0,["o9",function(){AYP(this);}],L3,0,D,[],4,3,0,0,VS,0,Gk,[],0,0,0,["ko",function(){AJY(this);}],Sh,0,D,[],3,3,0,0,Ih,0,D,[Sh],3,3,0,0,Gj,0,D,[Ih],1,3,0,["rv",function(b){return Q2(this,b);}],J2,0,D,[Ih],3,3,0,0,Gb,0,Gj,
[J2],1,3,0,["kS",function(){return Jg(this);}],Mq,0,Gb,[],1,3,0,0,Oz,0,D,[Ih],3,3,0,0,Xf,0,D,[Oz],3,3,0,0,AEC,0,Mq,[Xf],0,3,0,0,AN9,0,D,[C_],1,3,0,0,F5,0,D,[C_],1,3,0,0,ABC,0,F5,[],1,3,0,0,AKE,0,F5,[],1,3,0,0,I$,0,D,[Ih],3,3,0,0,Fc,0,Gj,[I$],1,3,0,["em",function(b){return A5V(this,b);},"fj",function(){return ASZ(this);}],EU,0,D,[],3,3,0,0,AQh,0,Fc,[EU,Db],0,3,0,["sN",function(b){return Xd(this,b);},"rv",function(b){return Ww(this,b);},"kS",function(){return Os(this);},"lS",function(){return IJ(this);}],LS,0,
D,[],3,3,0,0,FU,0,D,[LS],1,3,0,0,AB_,0,FU,[EU,Db],0,3,0,0]);
$rt_metadata([AKb,0,F5,[],1,3,0,0,YR,0,D,[],0,3,0,0,AE0,0,D,[],0,3,0,0,EY,"Enum",9,D,[DL,Db],1,3,0,["em",function(b){return ATq(this,b);},"fj",function(){return AX0(this);},"lM",function(b){return AXx(this,b);}],E9,0,EY,[],12,3,0,0,Qn,0,D,[],3,3,0,0,U4,0,D,[Qn],0,0,0,["Gl",function(b){CM(this,b);},"IT",function(b){A15(this,b);}],AQD,0,D,[C_],1,3,0,0,Xl,0,D,[C_],3,3,0,0,W2,0,D,[Xl],0,0,0,["a0T",function(){return A1X(this);}],HX,0,D,[Jy],1,3,0,0,AQc,0,HX,[],0,3,0,["Cp",function(){return A4E(this);},"n$",function(b,
c,d){return A_i(this,b,c,d);},"wT",function(){return A5q(this);}],IP,0,HX,[],0,3,0,0,Ph,0,D,[],3,3,0,0,PW,0,IP,[Ph],0,3,0,0,MQ,0,D,[DL],1,3,0,["lM",function(b){return A6u(this,b);}],WL,0,IP,[],0,3,0,["Cp",function(){return ASX(this);},"n$",function(b,c,d){return ALV(this,b,c,d);},"wT",function(){return A0j(this);}],M5,0,D,[],1,3,0,0,ADq,0,M5,[],0,3,0,0,AI_,0,D,[],0,3,0,0,I7,0,D,[],0,3,0,["Ak",function(b,c,d){return A5a(this,b,c,d);}],UT,0,I7,[],0,0,0,["Ak",function(b,c,d){return A1V(this,b,c,d);}],C5,"Entity",
12,D,[],1,3,0,["C1",function(){Ca(this);},"I_",function(){AES(this);},"DM",function(){XX(this);},"Bq",function(){return A1J(this);},"FR",function(b){AJ3(this,b);},"DA",function(b){Zg(this,b);},"HF",function(){return AE5(this);},"ve",function(b){return ADF(this,b);},"xD",function(b){A6R(this,b);},"uV",function(b){A5B(this,b);},"fq",function(b,c){return AJF(this,b,c);},"lq",function(){return A9J(this);},"rN",function(){return A7U(this);},"Bx",function(b,c){A_h(this,b,c);},"uF",function(b){return AWG(this,b);},
"AT",function(b){return AWX(this,b);},"BG",function(){AFb(this);},"z_",function(){return A9N(this);}],EQ,"EntityLiving",12,C5,[],0,3,0,["lq",function(){return AXq(this);},"rN",function(){return A1N(this);},"rF",function(){return AQn(this);},"I_",function(){ANn(this);},"BG",function(){AKR(this);},"en",function(){AMq(this);},"fq",function(b,c){return ABZ(this,b,c);},"wx",function(){return A8q(this);},"u9",function(){return AUw(this);},"uI",function(){return AVr(this);},"Fu",function(b){AN2(this,b);},"mf",function()
{return ATA(this);},"DA",function(b){AP5(this,b);},"op",function(){ACm(this);},"wH",function(){AQM(this);},"uO",function(b,c,d){return Zq(this,b,c,d);},"DM",function(){ABF(this);}],IR,"EntityCreature",12,EQ,[],0,3,0,["wH",function(){APK(this);},"nM",function(b,c){AMz(this,b,c);},"xY",function(){return AKX(this);}],DP,"EntityMonster",12,IR,[],0,3,0,["op",function(){AC7(this);},"en",function(){AK6(this);},"xY",function(){return AKn(this);},"fq",function(b,c){return AAG(this,b,c);},"nM",function(b,c){AQU(this,
b,c);},"sy",function(b,c,d){return ABu(this,b,c,d);},"uO",function(b,c,d){return Yv(this,b,c,d);}],I3,"EntityZombie",12,DP,[],0,3,0,["op",function(){AH0(this);},"mf",function(){return AWI(this);}],Jj,"EntitySkeleton",12,DP,[],0,3,0,["op",function(){AIB(this);},"nM",function(b,c){AHT(this,b,c);},"mf",function(){return AYL(this);}],JV,"EntityCreeper",12,DP,[],0,3,0,["wH",function(){ZM(this);},"nM",function(b,c){AAI(this,b,c);},"mf",function(){return ASR(this);}],Kl,"EntitySpider",12,DP,[],0,3,0,["xY",function()
{return ARo(this);},"nM",function(b,c){Zj(this,b,c);},"mf",function(){return AZK(this);}],Gx,"EntityAnimal",12,IR,[],1,3,0,["sy",function(b,c,d){return AOx(this,b,c,d);},"uO",function(b,c,d){return AK3(this,b,c,d);}],KF,"EntitySheep",12,Gx,[],0,3,0,["fq",function(b,c){return AGT(this,b,c);},"wx",function(){return A61(this);},"u9",function(){return A4e(this);},"uI",function(){return AYj(this);}],Iz,"EntityPig",12,Gx,[],0,3,0,["wx",function(){return ATw(this);},"u9",function(){return A9s(this);},"uI",function()
{return AV3(this);},"uF",function(b){return AXQ(this,b);},"mf",function(){return AWb(this);}],Dz,0,D,[Db],0,3,0,0,Nx,0,D,[],0,3,0,0,O8,0,D,[],0,3,0,0,P,"Block",12,D,[],0,3,L,["gi",function(){return A80(this);},"ek",function(){return AWB(this);},"Ct",function(b,c,d,e){return AE$(this,b,c,d,e);},"pF",function(b,c,d,e,f){return AGt(this,b,c,d,e,f);},"ug",function(b,c,d,e,f){return ABW(this,b,c,d,e,f);},"eW",function(b,c){return A7e(this,b,c);},"ci",function(b){return AVB(this,b);},"oR",function(b,c,d,e){return K6(this,
b,c,d,e);},"Fx",function(b,c,d,e,f,g){ALv(this,b,c,d,e,f,g);},"hs",function(b,c,d,e){return Nh(this,b,c,d,e);},"d4",function(){return A5i(this);},"o5",function(b,c){return A6r(this,b,c);},"pe",function(){return A3L(this);},"e6",function(b,c,d,e,f){AHP(this,b,c,d,e,f);},"kM",function(b,c,d,e,f){APa(this,b,c,d,e,f);},"nn",function(b,c,d,e,f){Z5(this,b,c,d,e,f);},"eZ",function(b,c,d,e,f){YL(this,b,c,d,e,f);},"mr",function(){return A3V(this);},"fC",function(b,c,d,e){AA5(this,b,c,d,e);},"lv",function(b,c,d,e){Z0(this,
b,c,d,e);},"eF",function(b){return AYm(this,b);},"dU",function(b,c){return ATN(this,b,c);},"IK",function(b,c,d,e,f){Yd(this,b,c,d,e,f);},"HN",function(b,c,d,e,f,g){AEX(this,b,c,d,e,f,g);},"yl",function(b){return AZZ(this,b);},"nE",function(b,c,d,e,f,g){return Ka(this,b,c,d,e,f,g);},"sH",function(b,c,d,e){AQY(this,b,c,d,e);},"pO",function(){return AVh(this);},"fT",function(b,c,d,e){return AED(this,b,c,d,e);},"lB",function(b,c,d,e,f){return AGH(this,b,c,d,e,f);},"oG",function(b,c,d,e,f){AJI(this,b,c,d,e,f);},
"u$",function(b,c,d,e,f){YD(this,b,c,d,e,f);},"q6",function(b,c,d,e,f){AAa(this,b,c,d,e,f);},"qB",function(b,c,d,e,f,g){AF5(this,b,c,d,e,f,g);},"xI",function(b,c,d,e){APU(this,b,c,d,e);}],Rx,0,D,[],3,3,0,0,AJd,0,Gb,[EU,Db,Rx],0,3,0,["lS",function(){return De(this);},"sN",function(b){return S(this,b);}],DE,0,D,[C_],3,3,0,0,TD,0,D,[DE],0,0,0,["gv",function(){return AWk(this);}],TC,0,D,[DE],0,0,0,["gv",function(){return AS2(this);}],TB,0,D,[DE],0,0,0,["gv",function(){return AZj(this);}],TA,0,D,[DO],0,0,0,["gO",
function(b){return A6H(this,b);}],Sv,0,D,[],0,0,0,0,Cb,"IllegalArgumentException",9,B6,[],0,3,0,0,U_,"UnsupportedCharsetException",7,Cb,[],0,3,0,0,EE,"NullPointerException",9,B6,[],0,3,0,0,AA6,0,D,[C_],4,3,0,0,Fk,0,D,[],1,3,0,0]);
$rt_metadata([L7,0,Fk,[DL],1,3,0,0,AE3,0,D,[],0,3,0,0,QD,0,D,[],0,3,0,0,E4,0,D,[Jy,NS],1,3,0,["gu",function(b,c,d){ATd(this,b,c,d);},"tM",function(){A8U(this);},"ls",function(){A9I(this);}],F_,0,E4,[],0,3,0,0,AA2,0,F_,[],0,3,0,0,W_,0,E4,[],0,0,0,["nJ",function(b){AYe(this,b);}],AE_,"IllegalCharsetNameException",7,Cb,[],0,3,0,0,MP,0,D,[],128,3,0,0,Ue,0,MP,[],4,3,0,0,In,0,D,[],0,3,0,0,AHm,0,In,[],4,0,0,0,ACo,0,In,[],4,0,0,0,LO,"BlockStone",12,P,[],0,3,0,["dU",function(b,c){return A8G(this,b,c);}],Z2,"BlockGrass",
12,P,[],0,3,0,["ci",function(b){return A7p(this,b);},"e6",function(b,c,d,e,f){ADn(this,b,c,d,e,f);},"dU",function(b,c){return AZ6(this,b,c);}],AHS,"BlockDirt",12,P,[],0,3,0,0,B8,0,D,[],0,3,0,["nA",function(){return A8k(this);},"du",function(){return A0W(this);},"sf",function(){return A7P(this);},"ud",function(){return A5r(this);}],FZ,"BlockFlower",12,P,[],0,3,0,["fT",function(b,c,d,e){return ALS(this,b,c,d,e);},"rl",function(b){return AYi(this,b);},"eZ",function(b,c,d,e,f){AIE(this,b,c,d,e,f);},"e6",function(b,
c,d,e,f){AD8(this,b,c,d,e,f);},"G7",function(b,c,d,e){return AN5(this,b,c,d,e);},"hs",function(b,c,d,e){return AGj(this,b,c,d,e);},"d4",function(){return A6k(this);},"gi",function(){return ATX(this);},"ek",function(){return A7u(this);}],AMV,"BlockSapling",12,FZ,[],0,3,0,["e6",function(b,c,d,e,f){AEf(this,b,c,d,e,f);}],HO,0,P,[],1,3,0,["ci",function(b){return AS9(this,b);},"gi",function(){return A$9(this);},"d4",function(){return A$r(this);},"o5",function(b,c){return A8D(this,b,c);},"pF",function(b,c,d,e,f){
return ARu(this,b,c,d,e,f);},"hs",function(b,c,d,e){return Yb(this,b,c,d,e);},"ek",function(){return A7X(this);},"dU",function(b,c){return A3c(this,b,c);},"eF",function(b){return A5$(this,b);},"qB",function(b,c,d,e,f,g){ANa(this,b,c,d,e,f,g);},"mr",function(){return AU1(this);},"Ct",function(b,c,d,e){return AEt(this,b,c,d,e);},"e6",function(b,c,d,e,f){AQ8(this,b,c,d,e,f);},"pO",function(){return A$o(this);},"kM",function(b,c,d,e,f){YB(this,b,c,d,e,f);},"fC",function(b,c,d,e){ARO(this,b,c,d,e);},"eZ",function(b,
c,d,e,f){ALd(this,b,c,d,e,f);}],AEe,"BlockFlowing",12,HO,[],0,3,0,["e6",function(b,c,d,e,f){AON(this,b,c,d,e,f);},"fC",function(b,c,d,e){AB0(this,b,c,d,e);}],AII,"BlockStationary",12,HO,[],0,3,0,["eZ",function(b,c,d,e,f){AGw(this,b,c,d,e,f);}],I4,"BlockSand",12,P,[],0,3,0,["fC",function(b,c,d,e){ARM(this,b,c,d,e);},"eZ",function(b,c,d,e,f){ASa(this,b,c,d,e,f);},"e6",function(b,c,d,e,f){APx(this,b,c,d,e,f);},"mr",function(){return A3U(this);}],AG3,"BlockGravel",12,I4,[],0,3,0,["dU",function(b,c){return A_k(this,
b,c);}],YT,"BlockOre",12,P,[],0,3,0,["dU",function(b,c){return A4l(this,b,c);},"eF",function(b){return AZ5(this,b);}],AFf,"BlockLog",12,P,[],0,3,0,["eF",function(b){return A8V(this,b);},"dU",function(b,c){return ATb(this,b,c);},"ci",function(b){return AVv(this,b);}],LV,0,P,[],0,3,0,["pF",function(b,c,d,e,f){return AQt(this,b,c,d,e,f);}],ACC,"BlockLeaves",12,LV,[],0,3,0,["e6",function(b,c,d,e,f){AIx(this,b,c,d,e,f);},"eF",function(b){return AW2(this,b);},"dU",function(b,c){return A5b(this,b,c);},"d4",function()
{return A2O(this);},"oG",function(b,c,d,e,f){ASo(this,b,c,d,e,f);}],ALc,"BlockSponge",12,P,[],0,3,0,["fC",function(b,c,d,e){AKI(this,b,c,d,e);},"lv",function(b,c,d,e){ANs(this,b,c,d,e);}],M9,0,P,[],0,3,0,["d4",function(){return A$a(this);},"pF",function(b,c,d,e,f){return Yt(this,b,c,d,e,f);}],AQk,"BlockGlass",12,M9,[],0,3,0,["eF",function(b){return AV4(this,b);}],AHb,"BlockMushroom",12,FZ,[],0,3,0,["rl",function(b){return AI4(this,b);},"G7",function(b,c,d,e){return ADh(this,b,c,d,e);}],ABr,"BlockOreBlock",12,
P,[],0,3,0,["ci",function(b){return A4y(this,b);}],Zd,"BlockStep",12,P,[],0,3,0,["ci",function(b){return A$J(this,b);},"d4",function(){return A5Q(this);},"eZ",function(b,c,d,e,f){ABA(this,b,c,d,e,f);},"fC",function(b,c,d,e){ABg(this,b,c,d,e);},"dU",function(b,c){return AZk(this,b,c);},"gi",function(){return AW4(this);},"pF",function(b,c,d,e,f){return ASA(this,b,c,d,e,f);}],AOe,"BlockTNT",12,P,[],0,3,0,["ci",function(b){return A41(this,b);},"eF",function(b){return AU9(this,b);},"sH",function(b,c,d,e){AGC(this,
b,c,d,e);},"nn",function(b,c,d,e,f){ASi(this,b,c,d,e,f);}],AC9,"BlockBookshelf",12,P,[],0,3,0,["ci",function(b){return A$$(this,b);},"eF",function(b){return A4A(this,b);}],XJ,"BlockObsidian",12,LO,[],0,3,0,["eF",function(b){return A27(this,b);},"dU",function(b,c){return AUT(this,b,c);}],AOA,"BlockTorch",12,P,[],0,3,0,["hs",function(b,c,d,e){return ANi(this,b,c,d,e);},"d4",function(){return A1_(this);},"gi",function(){return AV9(this);},"ek",function(){return A0U(this);},"fT",function(b,c,d,e){return AL5(this,
b,c,d,e);},"u$",function(b,c,d,e,f){ANM(this,b,c,d,e,f);},"e6",function(b,c,d,e,f){AR$(this,b,c,d,e,f);},"fC",function(b,c,d,e){ABq(this,b,c,d,e);},"eZ",function(b,c,d,e,f){AJ_(this,b,c,d,e,f);},"nE",function(b,c,d,e,f,g){return AKg(this,b,c,d,e,f,g);},"kM",function(b,c,d,e,f){AQm(this,b,c,d,e,f);}],AOZ,"BlockFire",12,P,[],0,3,0,["hs",function(b,c,d,e){return ARA(this,b,c,d,e);},"d4",function(){return A5X(this);},"gi",function(){return A8u(this);},"ek",function(){return AXt(this);},"eF",function(b){return AWC(this,
b);},"mr",function(){return AZ1(this);},"e6",function(b,c,d,e,f){XI(this,b,c,d,e,f);},"pe",function(){return A3j(this);},"fT",function(b,c,d,e){return ANp(this,b,c,d,e);},"eZ",function(b,c,d,e,f){ABw(this,b,c,d,e,f);},"fC",function(b,c,d,e){ACp(this,b,c,d,e);},"kM",function(b,c,d,e,f){ASp(this,b,c,d,e,f);}],Eg,0,P,[],1,3,0,["fC",function(b,c,d,e){AOD(this,b,c,d,e);},"lv",function(b,c,d,e){ALW(this,b,c,d,e);}],Z$,"BlockMobSpawner",12,Eg,[],0,3,0,["s9",function(){return AXf(this);},"d4",function(){return A52(this);
}],Zv,"BlockStairs",12,P,[],0,3,0,["d4",function(){return A5F(this);},"gi",function(){return AV2(this);},"ek",function(){return AYU(this);},"pF",function(b,c,d,e,f){return APy(this,b,c,d,e,f);},"Fx",function(b,c,d,e,f,g){AJy(this,b,c,d,e,f,g);},"eZ",function(b,c,d,e,f){AHB(this,b,c,d,e,f);},"kM",function(b,c,d,e,f){APb(this,b,c,d,e,f);},"q6",function(b,c,d,e,f){ABa(this,b,c,d,e,f);},"nn",function(b,c,d,e,f){ADm(this,b,c,d,e,f);},"Ct",function(b,c,d,e){return AMU(this,b,c,d,e);},"yl",function(b){return A8W(this,
b);},"pO",function(){return A7$(this);},"dU",function(b,c){return A4c(this,b,c);},"eF",function(b){return A0t(this,b);},"eW",function(b,c){return AXu(this,b,c);},"ci",function(b){return A74(this,b);},"ug",function(b,c,d,e,f){return AM5(this,b,c,d,e,f);},"mr",function(){return AVF(this);},"oR",function(b,c,d,e){return AMe(this,b,c,d,e);},"qB",function(b,c,d,e,f,g){ACG(this,b,c,d,e,f,g);},"pe",function(){return AYA(this);},"o5",function(b,c){return AYN(this,b,c);},"fT",function(b,c,d,e){return AMm(this,b,c,d,
e);},"fC",function(b,c,d,e){ACB(this,b,c,d,e);},"lv",function(b,c,d,e){Yx(this,b,c,d,e);},"HN",function(b,c,d,e,f,g){AHO(this,b,c,d,e,f,g);},"IK",function(b,c,d,e,f){AMX(this,b,c,d,e,f);},"oG",function(b,c,d,e,f){AQQ(this,b,c,d,e,f);},"e6",function(b,c,d,e,f){AQV(this,b,c,d,e,f);},"lB",function(b,c,d,e,f){return AGI(this,b,c,d,e,f);},"sH",function(b,c,d,e){Y8(this,b,c,d,e);}],AFQ,"BlockChest",12,Eg,[],0,3,0,["ug",function(b,c,d,e,f){return AEw(this,b,c,d,e,f);},"ci",function(b){return A87(this,b);},"fT",function(b,
c,d,e){return AJ1(this,b,c,d,e);},"lv",function(b,c,d,e){ASC(this,b,c,d,e);},"lB",function(b,c,d,e,f){return AFW(this,b,c,d,e,f);},"s9",function(){return AZB(this);}],AKH,"BlockGears",12,P,[],0,3,0,["hs",function(b,c,d,e){return AET(this,b,c,d,e);},"d4",function(){return ATU(this);},"gi",function(){return A5d(this);},"ek",function(){return A7s(this);},"eF",function(b){return A9P(this,b);},"pe",function(){return AUz(this);}],AHu,"BlockWorkbench",12,P,[],0,3,0,["ci",function(b){return AWs(this,b);},"lB",function(b,
c,d,e,f){return AGP(this,b,c,d,e,f);}],AKG,"BlockCrops",12,FZ,[],0,3,0,["rl",function(b){return AYE(this,b);},"e6",function(b,c,d,e,f){AJl(this,b,c,d,e,f);},"eW",function(b,c){return A8s(this,b,c);},"ek",function(){return A4D(this);},"nn",function(b,c,d,e,f){ANx(this,b,c,d,e,f);},"dU",function(b,c){return A0X(this,b,c);},"eF",function(b){return A4U(this,b);}],AQN,"BlockFarmland",12,P,[],0,3,0,["hs",function(b,c,d,e){return AA1(this,b,c,d,e);},"d4",function(){return AU0(this);},"gi",function(){return A1z(this);
},"eW",function(b,c){return A_j(this,b,c);},"e6",function(b,c,d,e,f){ANb(this,b,c,d,e,f);},"oG",function(b,c,d,e,f){AKN(this,b,c,d,e,f);},"eZ",function(b,c,d,e,f){X6(this,b,c,d,e,f);},"dU",function(b,c){return AWZ(this,b,c);}],AF1,"BlockFurnace",12,Eg,[],0,3,0,["fC",function(b,c,d,e){ACr(this,b,c,d,e);},"ug",function(b,c,d,e,f){return AKd(this,b,c,d,e,f);},"kM",function(b,c,d,e,f){AEk(this,b,c,d,e,f);},"ci",function(b){return AUV(this,b);},"lB",function(b,c,d,e,f){return AGS(this,b,c,d,e,f);},"s9",function()
{return A75(this);}],Vo,"BlockSign",12,Eg,[],0,3,0,["ek",function(){return AYJ(this);},"gi",function(){return A59(this);},"d4",function(){return A53(this);},"s9",function(){return A1K(this);},"fT",function(b,c,d,e){return AGL(this,b,c,d,e);},"dU",function(b,c){return A8B(this,b,c);},"eZ",function(b,c,d,e,f){ZQ(this,b,c,d,e,f);}],D$,"TileEntity",12,D,[],0,3,0,["tJ",function(){AFI(this);},"kf",function(){ACc(this);}]]);
$rt_metadata([Jd,0,D$,[],0,3,0,0,Bc,0,D,[],0,3,BB,["iK",function(b,c,d,e,f,g,h){return AGr(this,b,c,d,e,f,g,h);},"x1",function(b,c){return A$K(this,b,c);},"n6",function(b,c,d){return ASg(this,b,c,d);},"sb",function(b,c){AV8(this,b,c);},"xV",function(b,c,d,e,f){A47(this,b,c,d,e,f);},"nX",function(b){return A_q(this,b);},"o6",function(b){return AVZ(this,b);},"yD",function(b,c){A3G(this,b,c);}],AIw,"BlockDoor",12,P,[],0,3,0,["eW",function(b,c){return A$q(this,b,c);},"d4",function(){return A0Q(this);},"gi",function()
{return AXo(this);},"ek",function(){return ATK(this);},"oR",function(b,c,d,e){return AGp(this,b,c,d,e);},"hs",function(b,c,d,e){return Zx(this,b,c,d,e);},"xI",function(b,c,d,e){AHD(this,b,c,d,e);},"q6",function(b,c,d,e,f){AJV(this,b,c,d,e,f);},"lB",function(b,c,d,e,f){return ADR(this,b,c,d,e,f);},"eZ",function(b,c,d,e,f){ACv(this,b,c,d,e,f);},"dU",function(b,c){return A8A(this,b,c);},"nE",function(b,c,d,e,f,g){return XB(this,b,c,d,e,f,g);},"fT",function(b,c,d,e){return AJ0(this,b,c,d,e);}],AC0,"BlockLadder",
12,P,[],0,3,0,["hs",function(b,c,d,e){return ADd(this,b,c,d,e);},"oR",function(b,c,d,e){return AD4(this,b,c,d,e);},"d4",function(){return AWT(this);},"gi",function(){return A5U(this);},"ek",function(){return A9y(this);},"fT",function(b,c,d,e){return ANS(this,b,c,d,e);},"u$",function(b,c,d,e,f){Yk(this,b,c,d,e,f);},"eZ",function(b,c,d,e,f){AKK(this,b,c,d,e,f);},"eF",function(b){return A5s(this,b);}],ANV,"BlockMinecartTrack",12,P,[],0,3,0,["hs",function(b,c,d,e){return ACA(this,b,c,d,e);},"d4",function(){return AWu(this);
},"nE",function(b,c,d,e,f,g){return ALA(this,b,c,d,e,f,g);},"xI",function(b,c,d,e){AMj(this,b,c,d,e);},"eW",function(b,c){return A2z(this,b,c);},"gi",function(){return A3z(this);},"ek",function(){return A0v(this);},"eF",function(b){return A2G(this,b);},"fT",function(b,c,d,e){return ANU(this,b,c,d,e);},"fC",function(b,c,d,e){AND(this,b,c,d,e);},"eZ",function(b,c,d,e,f){AJN(this,b,c,d,e,f);}],ASy,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return AQl(this,b,c,d,e,f,g,h);}],AHF,0,MQ,[],0,3,0,0,M2,0,Fk,[DL],1,3,
0,0,Nd,0,L7,[],1,0,0,0,WJ,0,Nd,[],0,0,0,0,ARj,0,M2,[],0,0,0,0,Vn,0,D,[],3,3,0,0,LT,0,Fk,[DL,Ir,KX,Vn],1,3,0,0,P0,"GZIPException",2,B1,[],0,3,0,0,Og,0,B8,[],0,3,0,["du",function(){return A4S(this);},"sf",function(){return A5x(this);},"ud",function(){return ATj(this);}],LZ,0,B8,[],0,3,0,["nA",function(){return A_E(this);},"du",function(){return AY6(this);}],N3,0,B8,[],0,3,0,["du",function(){return A6W(this);},"sf",function(){return A95(this);},"ud",function(){return AU2(this);}],F9,0,Bc,[],0,3,0,["x1",function(b,
c){return A8T(this,b,c);},"sb",function(b,c){A65(this,b,c);},"xV",function(b,c,d,e,f){AWn(this,b,c,d,e,f);},"nX",function(b){return AW7(this,b);}],OS,0,F9,[],0,3,Bb4,0,Vr,0,F9,[],0,3,Bb7,["o6",function(b){return A5k(this,b);}],Wn,0,F9,[],0,3,BbH,0,AEZ,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return AJH(this,b,c,d,e,f,g,h);}],LM,0,Bc,[],0,3,0,["n6",function(b,c,d){return P4(this,b,c,d);}],AOS,0,Bc,[],0,3,0,["n6",function(b,c,d){return AGz(this,b,c,d);}],AK$,0,Bc,[],0,3,0,["x1",function(b,c){return A0u(this,
b,c);},"sb",function(b,c){A7S(this,b,c);},"xV",function(b,c,d,e,f){AX2(this,b,c,d,e,f);},"nX",function(b){return A2y(this,b);}],AOa,0,LM,[],0,3,0,["n6",function(b,c,d){return APt(this,b,c,d);}],ANw,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return AQR(this,b,c,d,e,f,g,h);}],VQ,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return AFk(this,b,c,d,e,f,g,h);}],F0,0,Bc,[],0,3,0,0,XR,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return ACa(this,b,c,d,e,f,g,h);}],AHp,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return Ya(this,
b,c,d,e,f,g,h);}],AJa,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return AD9(this,b,c,d,e,f,g,h);}],ARK,0,Bc,[],0,3,0,["n6",function(b,c,d){return AHX(this,b,c,d);}],AO7,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return AC6(this,b,c,d,e,f,g,h);}],ARc,0,Bc,[],0,3,0,["yD",function(b,c){AGx(this,b,c);},"sb",function(b,c){AWj(this,b,c);}],NX,0,D,[],3,0,0,0,AGh,0,D,[NX],4,3,0,["EW",function(b){ASU(this,b);},"lW",function(){AZt(this);},"yx",function(){return AT0(this);},"kG",function(b,c,d){A8f(this,b,c,d);}],R$,
"CloneNotSupportedException",9,BE,[],0,3,0,0,Nl,0,D,[],4,3,0,0,J0,0,D,[],3,3,0,0,LJ,0,D,[J0,EU],0,0,0,["em",function(b){return A4Z(this,b);},"fj",function(){return A1U(this);}],IC,0,LJ,[],0,0,0,0,BO,"IndexOutOfBoundsException",9,B6,[],0,3,0,0,IU,"StringIndexOutOfBoundsException",9,BO,[],0,3,0,0,GD,0,D,[],3,3,0,0,Wu,0,D,[GD],0,3,0,["ko",function(){AI1(this);}],FD,"EOFException",8,B1,[],0,3,0,0,ER,0,D,[],0,3,0,0,Fv,0,D,[],0,3,0,0,LH,0,D,[],4,0,0,0]);
$rt_metadata([PK,0,E4,[],0,0,0,["nJ",function(b){A57(this,b);}],Ki,0,D,[],0,3,0,0,AMl,0,D,[],4,3,0,0,Jb,0,D,[],0,3,0,0,Lr,0,LT,[],1,0,0,0,ABK,0,Lr,[],0,0,0,0,LP,0,D,[],1,3,0,0,N6,0,D,[],0,3,0,0,Z6,0,D,[C_],1,3,0,0,PL,0,D,[C_],3,3,0,0,Yz,0,D,[C_,PL],1,3,0,0,KC,0,D,[],4,0,0,0,Nz,0,LP,[],1,3,0,0,PM,0,Nz,[],0,3,0,0,AOn,0,D,[],4,3,0,0,F$,0,D,[],4,0,0,0,Lz,0,D,[],4,0,0,0,Hs,"UTFDataFormatException",8,B1,[],0,3,0,0,Xq,"NegativeArraySizeException",9,B6,[],0,3,0,0,AAV,0,D,[Lk],1,3,0,["QT",function(b){return A_y(this,
b);},"Zr",function(){return AUx(this);}],Kj,"IllegalMonitorStateException",9,B6,[],0,3,0,0,ZS,0,D,[],0,0,0,0,D2,"IllegalStateException",9,BE,[],0,3,0,0,AIy,0,D,[C_],1,3,0,0,SL,0,D,[GD],0,3,0,["ko",function(){AQ6(this);}],Q7,0,D,[GD],0,3,0,0,GY,0,B1,[],0,3,0,0,WX,"AssertionError",9,Fh,[],0,3,0,0,E2,0,BE,[],0,3,0,0,Oe,0,D,[],1,3,0,0,Sb,0,D,[],3,3,0,0,Sl,0,D,[],3,3,0,0,Pc,0,D,[GD,Sb,Sl],0,0,0,["ko",function(){APj(this);}],LE,0,Oe,[],1,3,0,0,Rc,0,LE,[],0,3,0,0,DY,"Inflate$Return",2,BE,[],0,0,0,0,ANu,0,D,[EU],0,
3,0,0,OP,0,D,[NX],4,3,0,["kG",function(b,c,d){A2x(this,b,c,d);},"lW",function(){A6q(this);},"EW",function(b){A9S(this,b);},"yx",function(){return A7w(this);}],I5,0,D,[],0,3,0,0,Qd,0,D,[],3,3,0,0,Bu,0,Bs,[Qd],0,3,BW,0,ACz,0,D,[],0,3,0,0,Ny,0,D,[],0,3,0,0,Ik,0,D,[],0,3,Tk,0,AR9,0,E4,[],0,3,0,["nJ",function(b){A7N(this,b);},"gu",function(b,c,d){Ro(this,b,c,d);}],JQ,"ArrayStoreException",9,B6,[],0,3,0,0,Oa,0,D,[],3,3,0,0,GG,0,D,[Oa],0,3,0,["eh",function(b,c,d){return ACt(this,b,c,d);},"oJ",function(b,c,d){return ABX(this,
b,c,d);},"eG",function(b,c,d){return AEH(this,b,c,d);},"sJ",function(b,c,d){return ANf(this,b,c,d);},"la",function(b,c,d){return AAz(this,b,c,d);}],L0,0,D,[],0,3,BA,0,ANd,0,D,[],0,3,0,0]);
$rt_metadata([Gc,0,D,[],0,3,0,0,CS,0,Gc,[],0,3,0,["o$",function(b,c){YK(this,b,c);},"IZ",function(b,c,d){Zk(this,b,c,d);},"Ca",function(b,c,d){A2v(this,b,c,d);},"iB",function(b){AMQ(this,b);},"hT",function(){AP4(this);},"rx",function(){A3e(this);},"ps",function(){AH7(this);},"n9",function(){return AVo(this);}],AFc,0,D,[],0,3,0,0,Mj,0,D,[Db],1,3,0,0,Es,0,Mj,[Db],0,3,0,0,N7,0,D,[],3,3,0,0,I0,0,D,[Db,N7],1,3,0,0,Wd,0,D,[N7],3,3,0,0,NU,0,D,[Wd],3,3,0,0,RW,0,D,[],3,3,0,0,Mc,0,D,[RW],3,3,0,0,UX,0,I0,[Db,NU,Mc],0,
3,0,0,Wb,0,D,[NU],3,3,0,0,RQ,0,D,[Mc],3,3,0,0,G7,0,I0,[Db,Wb,RQ],0,3,0,0,ST,0,D,[GD],0,3,0,["ko",function(){AIA(this);}],AOW,"CoderMalfunctionError",7,Fh,[],0,3,0,0,H1,0,D,[],3,3,0,0,Un,0,D,[H1],3,3,0,0,ACW,0,D,[Un],0,0,0,0,Rz,0,D,[],0,0,0,0,KH,0,D,[],0,3,0,0,Wc,0,D,[],0,3,0,0,Qg,0,D,[],0,3,0,0,AKU,0,Eu,[],0,3,0,["o9",function(){AZ8(this);}],ACh,0,Eu,[],0,3,0,["o9",function(){A8Q(this);}],AR3,0,Eu,[],0,3,0,["o9",function(){A3s(this);}],Xn,0,D,[],3,3,0,0,AAr,0,D,[Xn],0,3,0,0,AG_,0,CS,[],0,3,0,["rx",function()
{A5o(this);},"o$",function(b,c){ANJ(this,b,c);},"hT",function(){AIr(this);},"iB",function(b){ACn(this,b);},"hN",function(b,c,d){Zz(this,b,c,d);}],OV,0,D,[],0,3,0,0,Nn,0,Gc,[],0,3,0,0,Jr,"EntityPlayer",12,EQ,[],0,3,0,["BG",function(){AFV(this);},"Fu",function(b){ALb(this,b);},"Bx",function(b,c){AZr(this,b,c);},"rF",function(){return A5f(this);},"fq",function(b,c){return Ym(this,b,c);}],AGA,"EntityPlayerSP",12,Jr,[],0,3,0,["wH",function(){AAM(this);},"op",function(){ALk(this);}],AJE,0,D,[],0,3,0,0,Qj,0,D,[],0,
3,0,0,Vj,0,D,[],0,3,0,0,FB,0,D,[],3,3,0,0,Vx,0,D,[FB],0,3,0,["j2",function(b,c){return Em(this,b,c);},"jz",function(b,c){AFB(this,b,c);},"gw",function(b){return RK(this,b);},"f5",function(){return AZo(this);},"kf",function(){AAl(this);}],Du,0,IV,[],0,3,0,0,Ew,0,CS,[],1,3,0,["hN",function(b,c,d){ACe(this,b,c,d);},"IZ",function(b,c,d){AN3(this,b,c,d);},"Ca",function(b,c,d){A9H(this,b,c,d);},"o$",function(b,c){AAt(this,b,c);},"ps",function(){AAW(this);},"n9",function(){return A$1(this);}],APL,0,Ew,[],0,3,0,["ps",
function(){ALG(this);},"tl",function(b){ATP(this,b);},"lo",function(){AZ3(this);},"hN",function(b,c,d){ADW(this,b,c,d);},"sZ",function(b){X5(this,b);}],I2,0,D,[],0,3,0,0,Rn,0,D,[],0,0,0,0,Tb,0,D,[],0,3,0,0,AHn,0,D,[],0,3,0,0,Cd,0,D,[],4,3,0,0,ZH,0,D,[FB],0,3,0,["gw",function(b){return Ge(this,b);},"j2",function(b,c){return AEV(this,b,c);},"jz",function(b,c){A3A(this,b,c);},"f5",function(){return A8Y(this);},"kf",function(){ADN(this);}],AAB,0,D,[FB],0,3,0,["gw",function(b){return A44(this,b);},"j2",function(b,
c){return AWz(this,b,c);},"jz",function(b,c){Pf(this,b,c);},"f5",function(){return AYS(this);},"kf",function(){ANg(this);}],HH,0,D,[],0,3,0,["Ji",function(){AK8(this);},"s3",function(b){return AXd(this,b);},"rS",function(){return A9Q(this);}]]);
$rt_metadata([ADc,0,HH,[],0,0,0,["s3",function(b){return A0i(this,b);},"Ji",function(){AN6(this);}],QE,0,HH,[],0,0,0,["s3",function(b){return A2Q(this,b);},"rS",function(){return AWt(this);}],V7,0,D,[],4,3,0,0,Su,0,D,[],4,3,0,0,M0,0,Fk,[DL],1,3,0,0,Dg,0,D,[],1,3,0,0,AIF,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,g){AC4(this,b,c,d,e,f,g);}],O9,0,D,[],4,3,0,0,Qx,0,D,[DO],0,0,0,["gO",function(b){return A7q(this,b);}],Qw,0,D,[DO],0,0,0,["gO",function(b){return A7C(this,b);}],It,0,M0,[],1,0,0,0,UO,0,It,[],0,0,0,["yp",
function(b){return AOI(this,b);},"u4",function(b,c){ANG(this,b,c);},"mX",function(){return ASN(this);}],V0,0,D,[],4,3,0,0,VW,0,D,[],4,3,0,0,Xc,0,D,[],4,3,0,0,Jk,"UnsupportedOperationException",9,B6,[],0,3,0,0,UC,0,CS,[],0,3,0,["hT",function(){ADe(this);},"iB",function(b){AOB(this,b);},"hN",function(b,c,d){AMy(this,b,c,d);}],FR,"ReadOnlyBufferException",6,Jk,[],0,3,0,0,G$,"BufferOverflowException",6,B6,[],0,3,0,0,Gp,"BufferUnderflowException",6,B6,[],0,3,0,0,Ts,0,D,[],0,3,0,0,ACj,0,D,[],0,3,0,0,Rt,0,CS,[],0,
3,0,0,Mk,0,CS,[],0,3,0,["hT",function(){AOk(this);},"o$",function(b,c){AMi(this,b,c);},"iB",function(b){AOu(this,b);},"hN",function(b,c,d){APl(this,b,c,d);},"n9",function(){return A6O(this);}],C0,"EntityFX",12,C5,[],0,3,0,["en",function(){ALl(this);},"kN",function(b,c,d,e,f,g,h){ANr(this,b,c,d,e,f,g,h);},"xu",function(){return A7Z(this);}],AAX,0,CS,[],0,3,0,["hT",function(){ARa(this);},"iB",function(b){ADk(this,b);},"rx",function(){A2d(this);},"hN",function(b,c,d){ADJ(this,b,c,d);}],Lx,0,D,[],0,3,0,0,Wy,0,Lx,
[],0,3,0,0,Q0,0,D,[],3,3,0,0,AFR,0,D,[Q0],0,3,0,0,O0,0,D,[],0,3,0,0,Id,0,D,[FB],0,3,0,["gm",function(){return A6s(this);},"w5",function(){return A6f(this);},"gw",function(b){return AS6(this,b);},"j2",function(b,c){return A3f(this,b,c);},"jz",function(b,c){AWP(this,b,c);},"f5",function(){return A98(this);},"kf",function(){Yu(this);}],ZD,"EntityDiggingFX",12,C0,[],0,3,0,["xu",function(){return ATC(this);},"kN",function(b,c,d,e,f,g,h){YH(this,b,c,d,e,f,g,h);}],KR,"ConcurrentModificationException",4,B6,[],0,3,0,
0,JL,"EntityRainFX",12,C0,[],0,3,0,["kN",function(b,c,d,e,f,g,h){AKL(this,b,c,d,e,f,g,h);},"en",function(){AOw(this);}],IK,0,It,[],1,0,0,["mX",function(){return AXK(this);}],O_,0,IK,[],0,0,0,["yp",function(b){return AV$(this,b);},"u4",function(b,c){ASM(this,b,c);}],VH,0,IK,[],0,0,0,["yp",function(b){return A0O(this,b);},"u4",function(b,c){ATF(this,b,c);}],AKT,0,D,[Fy],0,3,0,["qc",function(b,c){return A07(this,b,c);}],V5,0,D,[Fy],0,3,0,["qc",function(b,c){return A9E(this,b,c);}],Ho,0,D,[],0,3,0,0,HT,0,D,[],0,
3,0,0,HV,0,D,[],0,3,0,0,Na,0,D,[],0,3,0,0,JY,"NoSuchElementException",4,B6,[],0,3,0,0,VP,0,D,[],0,3,0,["em",function(b){return A6n(this,b);},"fj",function(){return A1p(this);}],Op,0,Fb,[DL],0,3,0,0,Hi,0,D,[],0,0,0,0,Nb,0,D,[],4,3,0,0,R4,0,D,[],0,3,0,0]);
$rt_metadata([DH,0,Dg,[],0,3,0,["H1",function(b,c,d,e,f,g){Z9(this,b,c,d,e,f,g);},"k3",function(b,c){return APQ(this,b,c);},"CB",function(b){return A5h(this,b);},"CE",function(b,c,d){return A6w(this,b,c,d);},"xd",function(b,c){A8_(this,b,c);},"iN",function(b,c,d,e,f,g){AOV(this,b,c,d,e,f,g);}],OI,0,DH,[],0,3,0,["k3",function(b,c){return Y6(this,b,c);},"H1",function(b,c,d,e,f,g){AL1(this,b,c,d,e,f,g);},"iN",function(b,c,d,e,f,g){ACI(this,b,c,d,e,f,g);}],Ly,0,Gc,[],0,3,0,0,L9,0,D,[MO],0,3,0,0,Qo,0,D,[],3,3,0,
0,Kq,0,L9,[Qo],0,3,0,0,Oo,0,D,[C_],3,3,0,0,Qv,0,D,[Oo],0,0,0,["Gb",function(){return A1A(this);}],WE,0,D,[Fy],0,3,0,["qc",function(b,c){return A4P(this,b,c);}],WC,0,D,[Fy],0,3,0,0,R6,0,Fc,[],4,0,0,0,R5,0,FU,[],4,0,0,0,R7,0,Gb,[],4,0,0,0,Iy,0,D,[],1,3,0,0,AA0,0,Iy,[],0,3,0,["CP",function(b,c,d,e,f){Xz(this,b,c,d,e,f);}],Nt,0,D$,[],0,3,0,["tJ",function(){AC1(this);}],ARX,0,Iy,[],0,3,0,["CP",function(b,c,d,e,f){ARb(this,b,c,d,e,f);}],AQg,0,DH,[],0,3,0,["CB",function(b){return A6i(this,b);},"k3",function(b,c){return X$(this,
b,c);}],T2,0,DH,[],0,3,0,["k3",function(b,c){return AL_(this,b,c);}],FY,0,Eh,[],0,3,0,["hH",function(b,c,d,e,f,g){A9Y(this,b,c,d,e,f,g);}],PR,0,FY,[],0,3,0,0,Ty,0,DH,[],0,3,0,["k3",function(b,c){return ARp(this,b,c);}],ACE,0,FY,[],0,3,0,0,ARe,0,FY,[],0,3,0,0,AB6,0,DH,[],0,3,0,["xd",function(b,c){A7V(this,b,c);},"CE",function(b,c,d){return AZU(this,b,c,d);}],HN,0,Mw,[],0,3,0,["og",function(b,c,d,e,f,g){A2H(this,b,c,d,e,f,g);}],AIm,0,HN,[],0,3,0,0,K$,"EntityGiant",12,DP,[],0,3,0,["sy",function(b,c,d){return AO6(this,
b,c,d);}],T6,0,DH,[],0,3,0,["xd",function(b,c){A$Z(this,b,c);}],TF,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,g){AJq(this,b,c,d,e,f,g);}],ID,"EntityPainting",12,C5,[],0,3,0,["en",function(){ADi(this);},"lq",function(){return AXM(this);},"fq",function(b,c){return AEo(this,b,c);}],AAp,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,g){AOP(this,b,c,d,e,f,g);}],Jp,"EntityArrow",12,C5,[],0,3,0,["en",function(){APr(this);},"xD",function(b){A7A(this,b);}],Rs,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,g){ADg(this,b,c,d,e,f,g);}],E$,
"EntityItem",12,C5,[],0,3,0,["en",function(){AJC(this);},"HF",function(){return AEc(this);},"FR",function(b){AMs(this,b);},"fq",function(b,c){return Vc(this,b,c);},"xD",function(b){A_c(this,b);}],Mo,"EntityTNTPrimed",12,C5,[],0,3,0,["lq",function(){return A$c(this);},"en",function(){XF(this);}],AOT,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,g){AL4(this,b,c,d,e,f,g);}],JJ,"EntityFallingSand",12,C5,[],0,3,0,["lq",function(){return AYg(this);},"en",function(){AML(this);}],AQL,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,
g){ARi(this,b,c,d,e,f,g);}],Gd,"EntityMinecart",12,C5,[FB],0,3,0,["AT",function(b){return ASO(this,b);},"Bq",function(){return AZ0(this);},"rN",function(){return A7D(this);},"z_",function(){return AVL(this);},"fq",function(b,c){return ALe(this,b,c);},"lq",function(){return A9K(this);},"C1",function(){APd(this);},"en",function(){ASD(this);},"uV",function(b){A3N(this,b);},"uF",function(b){return A8N(this,b);}],ARx,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,g){AQd(this,b,c,d,e,f,g);}],V3,0,D,[],0,3,0,0,ABz,0,D,[],
0,3,0,0,AH5,0,Eh,[],0,3,0,["hH",function(b,c,d,e,f,g){AX9(this,b,c,d,e,f,g);}],AIz,0,Eh,[],0,3,0,["hH",function(b,c,d,e,f,g){A21(this,b,c,d,e,f,g);}],AEU,0,Eh,[],0,3,0,0,Tr,0,D,[H1],0,0,0,["qh",function(){return KB(this);},"mO",function(){return KS(this);}],I1,0,D,[],0,3,0,0,Iq,0,D,[Oa],0,3,0,["eh",function(b,c,d){return Hw(this,b,c,d);},"sJ",function(b,c,d){return AAL(this,b,c,d);},"eG",function(b,c,d){return AC3(this,b,c,d);},"oJ",function(b,c,d){return N1(this,b,c,d);},"la",function(b,c,d){return AB3(this,
b,c,d);}],Gg,0,BE,[],0,3,0,0]);
$rt_metadata([UP,"NoSuchMethodException",9,Gg,[],0,3,0,0,U$,0,D,[],0,3,0,0,PH,0,Gj,[],0,0,0,["rv",function(b){return A0n(this,b);},"kS",function(){return Nc(this);}],Tn,0,D,[Oo],0,0,0,["Gb",function(){return A_v(this);}],AQE,0,D,[],4,3,0,0,WS,0,D$,[FB],0,3,0,["gw",function(b){return A9n(this,b);},"j2",function(b,c){return A8g(this,b,c);},"jz",function(b,c){AVp(this,b,c);},"f5",function(){return AT3(this);},"tJ",function(){AGD(this);},"kf",function(){Z1(this);}],S_,0,D$,[FB],0,3,0,["gm",function(){return AVJ(this);
},"gw",function(b){return Q9(this,b);},"j2",function(b,c){return A1Q(this,b,c);},"jz",function(b,c){AHy(this,b,c);},"w5",function(){return A8z(this);},"f5",function(){return A7j(this);}],CQ,0,D,[],1,3,0,0,APM,0,CQ,[],0,3,0,["gL",function(b){A7a(this,b);},"gE",function(b){A9h(this,b);},"fa",function(){return A6$(this);}],PZ,"BufferUnderflowException",7,B6,[],0,3,0,0,SD,"BufferOverflowException",7,B6,[],0,3,0,0,RT,"MalformedInputException",7,GY,[],0,3,0,["lN",function(){return AVN(this);}],PV,"UnmappableCharacterException",
7,GY,[],0,3,0,["lN",function(){return AVg(this);}],II,0,D,[],0,0,0,["qh",function(){return F8(this);}],U7,0,II,[H1],0,0,0,["mO",function(){return Md(this);}],Wp,0,D,[],0,3,0,0,AEx,0,CS,[],0,3,0,["hT",function(){ARY(this);},"iB",function(b){ADU(this,b);},"hN",function(b,c,d){AGa(this,b,c,d);}],Ou,0,CS,[],0,3,0,["hT",function(){APs(this);},"s5",function(){AXy(this);},"iB",function(b){ASu(this,b);},"IN",function(b){AKM(this,b);},"hN",function(b,c,d){AEA(this,b,c,d);}],LX,"InstantiationException",9,Gg,[],0,3,0,
0,S6,"IllegalAccessException",9,Gg,[],0,3,0,0,ALt,0,D,[],4,3,0,0,Z_,0,D,[],4,3,0,0,AMg,0,D,[Db],4,3,0,0,ABV,0,Ly,[],0,3,0,0,NK,0,CS,[],0,3,0,["hT",function(){AJr(this);},"iB",function(b){AIe(this,b);},"o$",function(b,c){ALM(this,b,c);},"hN",function(b,c,d){AGv(this,b,c,d);}],UU,0,Ou,[],0,3,0,["s5",function(){A1O(this);},"IN",function(b){AL8(this,b);}],NN,0,D,[],0,3,0,0,Yj,0,NN,[],0,3,0,0,QS,0,D,[],0,3,AYW,0,Co,0,D,[],1,0,0,["eH",function(b,c,d){return I_(this,b,c,d);},"eU",function(b,c,d,e){return Jl(this,b,
c,d,e);},"oE",function(){return A4m(this);},"ca",function(b){A1j(this,b);},"d3",function(b){return A$v(this,b);},"lu",function(){return A_d(this);},"iV",function(){K7(this);}],NW,0,CQ,[],0,3,0,["gE",function(b){A9e(this,b);},"gL",function(b){A0l(this,b);},"fa",function(){return AUE(this);}],DV,0,Co,[],0,0,0,["k",function(b,c,d){return ATG(this,b,c,d);},"b4",function(b){return AT2(this,b);}],HS,0,D,[],0,0,0,0,AQ_,"PatternSyntaxException",5,Cb,[],0,3,0,["lN",function(){return A$_(this);}],Mt,0,CQ,[],0,3,0,["gL",
function(b){A8C(this,b);},"gE",function(b){A76(this,b);},"fa",function(){return A6I(this);}],MT,0,CQ,[],0,3,0,["gL",function(b){AWh(this,b);},"gE",function(b){AZx(this,b);},"fa",function(){return A5K(this);}],Li,0,CQ,[],0,3,0,["gL",function(b){A14(this,b);},"gE",function(b){AY4(this,b);},"fa",function(){return AVk(this);}],N8,0,CQ,[],0,3,0,["gL",function(b){ATc(this,b);},"gE",function(b){A_o(this,b);},"fa",function(){return A2F(this);}],Pd,0,CQ,[],0,3,0,["gL",function(b){AS5(this,b);},"gE",function(b){A7Y(this,
b);},"fa",function(){return ASJ(this);}],Mm,0,CQ,[],0,3,0,["gL",function(b){A60(this,b);},"gE",function(b){AU4(this,b);},"fa",function(){return A0T(this);}],MD,0,CQ,[],0,3,0,["gL",function(b){A49(this,b);},"gE",function(b){A7h(this,b);},"fa",function(){return A9B(this);}],OB,0,CQ,[],0,3,0,["gL",function(b){A$S(this,b);},"gE",function(b){AY5(this,b);},"fa",function(){return ATn(this);}],QO,0,CQ,[],0,3,0,["gL",function(b){A9w(this,b);},"gE",function(b){AYY(this,b);},"fa",function(){return AYy(this);}],Tv,0,D,
[DE],0,0,0,["gv",function(){return AUn(this);}],Tu,0,D,[DE],0,0,0,["gv",function(){return AXn(this);}],ARQ,0,D,[],0,3,0,0,XU,0,D,[],0,3,0,0,XN,0,D,[],0,3,0,0,AD_,0,D,[],0,3,0,0,ARP,0,D,[],0,3,0,0]);
$rt_metadata([AE9,0,D,[],0,3,0,0,Yg,0,D,[Fy],0,0,0,["qc",function(b,c){return AZu(this,b,c);}],QB,0,DV,[],0,0,0,["k",function(b,c,d){return A3v(this,b,c,d);},"b4",function(b){return A9x(this,b);}],AR7,0,DV,[],0,0,0,["k",function(b,c,d){return A4L(this,b,c,d);}],PQ,0,DV,[],0,0,0,["k",function(b,c,d){return AT8(this,b,c,d);}],Q1,0,DV,[],0,0,0,["k",function(b,c,d){return A3x(this,b,c,d);},"b4",function(b){return A8M(this,b);}],HQ,0,DV,[],0,0,0,["k",function(b,c,d){return A1u(this,b,c,d);}],CI,0,Co,[],1,0,0,["k",
function(b,c,d){return A_x(this,b,c,d);},"d_",function(){return A99(this);},"b4",function(b){return AW5(this,b);}],AFU,0,CI,[],0,0,0,["dm",function(b,c){return A9L(this,b,c);},"eH",function(b,c,d){return A5A(this,b,c,d);},"eU",function(b,c,d,e){return A4B(this,b,c,d,e);},"b4",function(b){return A3w(this,b);}],CE,0,Co,[],0,0,0,["k",function(b,c,d){return AWo(this,b,c,d);},"ca",function(b){AZi(this,b);},"d3",function(b){return A7d(this,b);},"b4",function(b){return AZP(this,b);},"iV",function(){AUF(this);}],K0,
0,CE,[],0,0,0,["k",function(b,c,d){return AZa(this,b,c,d);},"b4",function(b){return A9j(this,b);}],EX,0,K0,[],0,0,0,["k",function(b,c,d){return A43(this,b,c,d);},"ca",function(b){A84(this,b);}],S8,0,EX,[],0,0,0,["k",function(b,c,d){return AZe(this,b,c,d);},"b4",function(b){return A1l(this,b);}],WG,0,EX,[],0,0,0,["k",function(b,c,d){return ATV(this,b,c,d);},"b4",function(b){return A$b(this,b);}],U8,0,EX,[],0,0,0,["k",function(b,c,d){return AUC(this,b,c,d);},"b4",function(b){return A_L(this,b);}],Rd,0,EX,[],0,
0,0,["k",function(b,c,d){return A2$(this,b,c,d);},"b4",function(b){return A9p(this,b);}],Ix,0,CE,[],0,0,0,["k",function(b,c,d){return ATa(this,b,c,d);},"eH",function(b,c,d){return AX7(this,b,c,d);},"eU",function(b,c,d,e){return A9A(this,b,c,d,e);},"d3",function(b){return A6_(this,b);},"lu",function(){return A8K(this);},"iV",function(){A10(this);}],HW,0,D,[],1,0,0,0,Bm,0,HW,[],1,0,0,["hC",function(){return A3_(this);},"kk",function(){return A3H(this);},"sK",function(){return A93(this);},"nO",function(){return A_a(this);
}],ZJ,"CharClass",5,Bm,[],0,0,0,["Y",function(b){return D5(this,b);},"hC",function(){return DX(this);},"kk",function(){return A5t(this);},"sK",function(){return A1b(this);},"gk",function(){return A70(this);},"nO",function(){return AVU(this);}],MN,"MissingResourceException",4,B6,[],0,3,0,0,E5,0,Co,[],1,0,0,["d3",function(b){return A0o(this,b);},"b4",function(b){return A$H(this,b);},"iV",function(){AYs(this);}],D7,0,E5,[],0,0,0,["k",function(b,c,d){return A2_(this,b,c,d);}],GA,0,D7,[],0,0,0,["k",function(b,c,
d){return A3Y(this,b,c,d);}],DW,0,E5,[],0,0,0,["k",function(b,c,d){return A3o(this,b,c,d);}],FT,0,D7,[],0,0,0,["k",function(b,c,d){return A7n(this,b,c,d);},"ca",function(b){A2K(this,b);}],Sm,0,D7,[],0,0,0,["k",function(b,c,d){return A_s(this,b,c,d);},"eH",function(b,c,d){return AYI(this,b,c,d);}],Ez,"NumberFormatException",9,Cb,[],0,3,0,0,Th,"Quantifier",5,HW,[EU],0,0,0,["gk",function(){return A79(this);}],TK,0,Co,[],0,0,0,["k",function(b,c,d){return AXs(this,b,c,d);},"b4",function(b){return A8J(this,b);}],WU,
0,D,[EU,Db],0,3,0,0,OE,0,CE,[],0,0,0,0,P3,0,CE,[],0,0,0,["k",function(b,c,d){return ATE(this,b,c,d);},"ca",function(b){A8w(this,b);},"b4",function(b){return AUc(this,b);},"d3",function(b){return ATY(this,b);}],EP,0,CE,[],0,0,0,["k",function(b,c,d){return A5m(this,b,c,d);},"Y",function(b){return AV7(this,b);},"d3",function(b){return ATz(this,b);},"ca",function(b){A9Z(this,b);},"b4",function(b){return AVO(this,b);}],MM,0,EP,[],0,0,0,["Y",function(b){return AW6(this,b);}],Zt,0,CI,[],0,0,0,["dm",function(b,c){return A6U(this,
b,c);}],Fn,0,CI,[],0,0,0,["dm",function(b,c){return S2(this,b,c);},"d3",function(b){return AZl(this,b);}],T1,0,CE,[],0,0,0,["ca",function(b){AX_(this,b);},"k",function(b,c,d){return ASQ(this,b,c,d);},"d3",function(b){return A4f(this,b);},"b4",function(b){return A1e(this,b);}],Ft,0,CI,[],0,0,0,["d_",function(){return A6M(this);},"dm",function(b,c){return AWA(this,b,c);},"eH",function(b,c,d){return AVC(this,b,c,d);},"eU",function(b,c,d,e){return AXh(this,b,c,d,e);},"d3",function(b){return A0$(this,b);}],AGQ,0,
CI,[],0,0,0,["dm",function(b,c){return A2T(this,b,c);}],XL,0,CI,[],0,0,0,["dm",function(b,c){return AS7(this,b,c);}],GH,0,CE,[],0,0,0,["ca",function(b){A_f(this,b);},"k",function(b,c,d){return AY_(this,b,c,d);},"d3",function(b){return AXv(this,b);},"b4",function(b){return A86(this,b);}],SE,0,GH,[],0,0,0,0,VZ,0,GH,[],0,0,0,0,SZ,0,DW,[],0,0,0,["k",function(b,c,d){return A4N(this,b,c,d);}],Uu,0,DW,[],0,0,0,["k",function(b,c,d){return A7M(this,b,c,d);}],Ht,0,DW,[],0,0,0,["k",function(b,c,d){return A9W(this,b,c,
d);},"ca",function(b){A$P(this,b);}],PJ,0,Ht,[],0,0,0,["k",function(b,c,d){return AXe(this,b,c,d);},"ca",function(b){A7_(this,b);}],G6,0,DW,[],0,0,0,["k",function(b,c,d){return A_H(this,b,c,d);}],OQ,0,G6,[],0,0,0,["k",function(b,c,d){return AWR(this,b,c,d);}]]);
$rt_metadata([Qr,0,DW,[],0,0,0,["k",function(b,c,d){return A19(this,b,c,d);}],UN,0,Ht,[],0,0,0,["k",function(b,c,d){return AUe(this,b,c,d);}],RL,0,G6,[],0,0,0,["k",function(b,c,d){return A3B(this,b,c,d);}],Qs,0,E5,[],0,0,0,["k",function(b,c,d){return A_z(this,b,c,d);},"eH",function(b,c,d){return A0K(this,b,c,d);}],TP,0,E5,[],0,0,0,["k",function(b,c,d){return AZm(this,b,c,d);},"eH",function(b,c,d){return AST(this,b,c,d);}],Gi,0,D,[],1,0,0,0,Xr,0,D7,[],0,0,0,["k",function(b,c,d){return ATr(this,b,c,d);}],Si,0,
FT,[],0,0,0,["k",function(b,c,d){return AYx(this,b,c,d);}],Ua,0,GA,[],0,0,0,["k",function(b,c,d){return A9D(this,b,c,d);}],UL,0,D7,[],0,0,0,["k",function(b,c,d){return AZf(this,b,c,d);}],V1,0,FT,[],0,0,0,["k",function(b,c,d){return ATv(this,b,c,d);}],Qc,0,GA,[],0,0,0,["k",function(b,c,d){return A9M(this,b,c,d);}],ABI,0,Co,[],4,0,0,["k",function(b,c,d){return A7c(this,b,c,d);},"b4",function(b){return A6F(this,b);}],AAk,0,Co,[],0,0,0,["k",function(b,c,d){return A39(this,b,c,d);},"b4",function(b){return A4d(this,
b);}],AJo,0,Co,[],0,0,0,["k",function(b,c,d){return AW$(this,b,c,d);},"b4",function(b){return A2u(this,b);}],SB,0,Co,[],4,0,0,["k",function(b,c,d){return A8X(this,b,c,d);},"b4",function(b){return A4F(this,b);}],AQ4,0,Co,[],0,0,0,["k",function(b,c,d){return A8r(this,b,c,d);},"b4",function(b){return A2S(this,b);}],AIN,0,Co,[],0,0,0,["k",function(b,c,d){return A4z(this,b,c,d);},"b4",function(b){return AWi(this,b);}],AGg,0,CE,[],0,0,0,["k",function(b,c,d){return A2c(this,b,c,d);},"ca",function(b){A4i(this,b);},
"oE",function(){return A8e(this);},"b4",function(b){return A4g(this,b);}],ZF,0,CE,[],4,0,0,["k",function(b,c,d){return A8m(this,b,c,d);},"ca",function(b){A9t(this,b);},"oE",function(){return ASE(this);},"b4",function(b){return A2j(this,b);}],AQH,0,Co,[],4,0,0,["k",function(b,c,d){return AXC(this,b,c,d);},"b4",function(b){return A5P(this,b);}],AN4,0,Co,[],0,0,0,["k",function(b,c,d){return AY3(this,b,c,d);},"b4",function(b){return A5L(this,b);}],AIa,0,Co,[],0,0,0,["k",function(b,c,d){return A6A(this,b,c,d);},
"b4",function(b){return AUQ(this,b);}],IN,0,CE,[],0,0,0,["k",function(b,c,d){return ATs(this,b,c,d);},"ca",function(b){A82(this,b);},"b4",function(b){return AZ$(this,b);}],AQS,0,IN,[],0,0,0,["k",function(b,c,d){return AUX(this,b,c,d);},"eH",function(b,c,d){return A1k(this,b,c,d);},"eU",function(b,c,d,e){return ATk(this,b,c,d,e);},"d3",function(b){return A7G(this,b);}],AMb,0,IN,[],0,0,0,["k",function(b,c,d){return AX5(this,b,c,d);}],AMP,0,CI,[],0,0,0,["dm",function(b,c){return AVb(this,b,c);},"eH",function(b,
c,d){return A38(this,b,c,d);},"eU",function(b,c,d,e){return A5W(this,b,c,d,e);},"d3",function(b){return AWK(this,b);}],XC,0,CI,[],0,0,0,["dm",function(b,c){return AX8(this,b,c);}],OT,0,CI,[],0,0,0,["dm",function(b,c){return A9F(this,b,c);}],H6,0,D,[],4,0,0,0,By,0,D,[],1,0,0,0,S5,0,CI,[],0,0,0,["dm",function(b,c){return A0s(this,b,c);}],NG,0,CE,[],0,0,0,["ca",function(b){A8E(this,b);},"k",function(b,c,d){return A4G(this,b,c,d);},"eH",function(b,c,d){return AWJ(this,b,c,d);},"eU",function(b,c,d,e){return A46(this,
b,c,d,e);},"d3",function(b){return ATf(this,b);},"b4",function(b){return A01(this,b);}],NM,0,CE,[],0,0,0,["ca",function(b){A4q(this,b);},"k",function(b,c,d){return ASV(this,b,c,d);},"eH",function(b,c,d){return A8P(this,b,c,d);},"eU",function(b,c,d,e){return A0q(this,b,c,d,e);},"d3",function(b){return AVc(this,b);},"b4",function(b){return A8R(this,b);}],EZ,0,CI,[],0,0,0,["dm",function(b,c){return A9k(this,b,c);},"eH",function(b,c,d){return A72(this,b,c,d);},"eU",function(b,c,d,e){return AUm(this,b,c,d,e);},"d3",
function(b){return A9b(this,b);}],Ws,0,Gi,[],4,0,0,["ot",function(b){return AUv(this,b);},"D8",function(b,c){return AZ7(this,b,c);}],Wt,0,Gi,[],4,0,0,["ot",function(b){return A9O(this,b);},"D8",function(b,c){return A1Y(this,b,c);}],AEM,0,D,[],0,0,0,0,Ys,0,D,[],0,0,0,0,NE,0,By,[],0,0,0,["bX",function(){return AMk(this);}],M8,0,By,[],0,0,0,["bX",function(){return ANL(this);}],AEE,0,By,[],0,0,0,["bX",function(){return A9v(this);}],AFi,0,By,[],0,0,0,["bX",function(){return A03(this);}],AFr,0,By,[],0,0,0,["bX",function()
{return AVE(this);}],NA,0,By,[],0,0,0,["bX",function(){return ZL(this);}],L$,0,NA,[],0,0,0,["bX",function(){return AAT(this);}],AHQ,0,By,[],0,0,0,["bX",function(){return A6d(this);}],Ox,0,L$,[],0,0,0,["bX",function(){return AH6(this);}],AMM,0,Ox,[],0,0,0,["bX",function(){return AYu(this);}],ACH,0,By,[],0,0,0,["bX",function(){return A4X(this);}]]);
$rt_metadata([AAf,0,By,[],0,0,0,["bX",function(){return AYl(this);}],AJ9,0,By,[],0,0,0,["bX",function(){return A1Z(this);}],AP_,0,By,[],0,0,0,["bX",function(){return A8c(this);}],AHY,0,By,[],0,0,0,["bX",function(){return A2Z(this);}],APm,0,By,[],0,0,0,["bX",function(){return AWU(this);}],AEm,0,By,[],0,0,0,["bX",function(){return A0a(this);}],AFX,0,By,[],0,0,0,["bX",function(){return A4V(this);}],YV,0,By,[],0,0,0,["bX",function(){return AVm(this);}],AIv,0,By,[],0,0,0,["bX",function(){return A$4(this);}],APB,
0,By,[],0,0,0,["bX",function(){return A2U(this);}],AE7,0,By,[],0,0,0,["bX",function(){return AXF(this);}],ALa,0,By,[],0,0,0,["bX",function(){return AVs(this);}],ACT,0,By,[],0,0,0,["bX",function(){return A5Y(this);}],AG9,0,By,[],0,0,0,["bX",function(){return A62(this);}],APP,0,By,[],0,0,0,["bX",function(){return A1f(this);}],ABs,0,By,[],0,0,0,["bX",function(){return AZG(this);}],AAF,0,By,[],0,0,0,["bX",function(){return AYM(this);}],AHW,0,By,[],0,0,0,["bX",function(){return A9r(this);}],La,0,By,[],0,0,0,["bX",
function(){return ACJ(this);}],AQC,0,La,[],0,0,0,["bX",function(){return AYD(this);}],AMS,0,NE,[],0,0,0,["bX",function(){return A32(this);}],AAy,0,M8,[],0,0,0,["bX",function(){return AWw(this);}],AKj,0,By,[],0,0,0,["bX",function(){return AXS(this);}],AKO,0,By,[],0,0,0,["bX",function(){return A1M(this);}],AMw,0,By,[],0,0,0,["bX",function(){return A5I(this);}],AMN,0,By,[],0,0,0,["bX",function(){return ASL(this);}],AKs,0,D,[],4,0,0,0,Zp,0,D,[],4,3,0,0,Tm,0,D,[],0,3,0,0,RR,0,D,[],0,3,0,0,AL6,0,D,[],4,3,0,0,Wg,0,
Ew,[],0,3,0,["lo",function(){A3C(this);},"sZ",function(b){AOh(this,b);}],Xg,0,Ew,[],0,3,0,["ps",function(){Y4(this);},"tl",function(b){A6C(this,b);},"lo",function(){A1W(this);},"sZ",function(b){AKm(this,b);}],AMB,0,Ew,[],0,3,0,["lo",function(){A90(this);},"sZ",function(b){ANP(this,b);}],CW,"EnumArt",12,EY,[],12,3,0,0,PG,0,Fc,[],0,0,0,0,U0,0,CS,[],0,3,0,["hT",function(){AGl(this);},"iB",function(b){AQp(this,b);},"hN",function(b,c,d){YO(this,b,c,d);}],KI,"MinecraftError",12,Fh,[],0,3,0,0,UI,0,D,[],0,3,0,0,Sk,
"AbstractCharClass$1",5,Bm,[],0,0,0,["Y",function(b){return AVI(this,b);}],Sj,"AbstractCharClass$2",5,Bm,[],0,0,0,["Y",function(b){return A3k(this,b);}],Po,"CharClass$18",5,Bm,[],0,0,0,["Y",function(b){return AXP(this,b);},"gk",function(){return A51(this);}],TS,0,Bm,[],0,0,0,["Y",function(b){return A9m(this,b);}],TQ,0,Bm,[],0,0,0,["Y",function(b){return A0r(this,b);}],TR,0,Bm,[],0,0,0,["Y",function(b){return A7l(this,b);}],TV,0,Bm,[],0,0,0,["Y",function(b){return A4_(this,b);}],TW,0,Bm,[],0,0,0,["Y",function(b)
{return ASF(this,b);}],TT,0,Bm,[],0,0,0,["Y",function(b){return AWq(this,b);}],TU,0,Bm,[],0,0,0,["Y",function(b){return AX$(this,b);}],TY,0,Bm,[],0,0,0,["Y",function(b){return A1m(this,b);}]]);
$rt_metadata([TZ,0,Bm,[],0,0,0,["Y",function(b){return A4Q(this,b);}],Pn,0,Bm,[],0,0,0,["Y",function(b){return A_Q(this,b);}],PB,0,Bm,[],0,0,0,["Y",function(b){return AWv(this,b);}],Pl,0,Bm,[],0,0,0,["Y",function(b){return AUZ(this,b);}],Pm,0,Bm,[],0,0,0,["Y",function(b){return A5O(this,b);}],Pr,0,Bm,[],0,0,0,["Y",function(b){return AXa(this,b);}],Pk,0,Bm,[],0,0,0,["Y",function(b){return A$j(this,b);}],Pp,0,Bm,[],0,0,0,["Y",function(b){return A4b(this,b);}],Pq,0,Bm,[],0,0,0,["Y",function(b){return AZC(this,
b);}],OM,0,Ix,[],0,0,0,["eH",function(b,c,d){return AV1(this,b,c,d);},"eU",function(b,c,d,e){return A_F(this,b,c,d,e);},"lu",function(){return AUN(this);}],VB,0,II,[H1],0,0,0,["mO",function(){return Ll(this);}],M$,0,Fb,[DL],0,3,0,0,Mn,0,D,[],3,3,0,0,Vt,0,D,[Mn],4,3,0,0,Uf,0,D,[I$],3,3,0,0,Sa,0,D,[Uf],3,3,0,0,SX,0,Fc,[Sa],0,3,0,0,SJ,0,D,[LS],3,3,0,0,OO,0,D,[SJ],3,3,0,0,AJX,0,FU,[EU,Db,OO],0,3,0,0,QP,0,D,[Fy],0,0,0,0,VD,"AbstractCharClass$LazyJavaLowerCase$1",5,Bm,[],0,0,0,["Y",function(b){return A1t(this,b);
}],S$,"AbstractCharClass$LazyJavaUpperCase$1",5,Bm,[],0,0,0,["Y",function(b){return A30(this,b);}],QG,"AbstractCharClass$LazyJavaWhitespace$1",5,Bm,[],0,0,0,["Y",function(b){return ATu(this,b);}],QF,"AbstractCharClass$LazyJavaMirrored$1",5,Bm,[],0,0,0,["Y",function(b){return A5H(this,b);}],Ss,"AbstractCharClass$LazyJavaDefined$1",5,Bm,[],0,0,0,["Y",function(b){return AW1(this,b);}],T7,"AbstractCharClass$LazyJavaDigit$1",5,Bm,[],0,0,0,["Y",function(b){return A$N(this,b);}],Pb,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",
5,Bm,[],0,0,0,["Y",function(b){return AZb(this,b);}],UZ,"AbstractCharClass$LazyJavaISOControl$1",5,Bm,[],0,0,0,["Y",function(b){return A0f(this,b);}],S7,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",5,Bm,[],0,0,0,["Y",function(b){return A_u(this,b);}],S9,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",5,Bm,[],0,0,0,["Y",function(b){return AVe(this,b);}],O4,"AbstractCharClass$LazyJavaLetter$1",5,Bm,[],0,0,0,["Y",function(b){return A1G(this,b);}],Ul,"AbstractCharClass$LazyJavaLetterOrDigit$1",5,Bm,[],0,0,
0,["Y",function(b){return A7y(this,b);}],Up,"AbstractCharClass$LazyJavaSpaceChar$1",5,Bm,[],0,0,0,["Y",function(b){return A81(this,b);}],VV,"AbstractCharClass$LazyJavaTitleCase$1",5,Bm,[],0,0,0,["Y",function(b){return A$C(this,b);}],Vu,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",5,Bm,[],0,0,0,["Y",function(b){return A12(this,b);}],OG,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",5,Bm,[],0,0,0,["Y",function(b){return AU7(this,b);}],My,"UnicodeCategory",5,Bm,[],0,0,0,["Y",function(b){return AZc(this,
b);}],Vh,"UnicodeCategoryScope",5,My,[],0,0,0,["Y",function(b){return A91(this,b);}],Nf,0,D,[],0,3,0,0,JU,0,D,[DL],0,3,0,["em",function(b){return A$w(this,b);},"fj",function(){return A7J(this);},"lM",function(b){return TE(this,b);}],K_,0,D,[],3,3,0,0,VT,0,D,[K_],0,3,0,0,Qa,0,D,[],3,3,0,0,Xi,0,D,[Qa],0,3,0,0,So,0,D,[K_],0,3,0,0,Wq,0,D,[Mn],0,0,0,0,VI,0,D,[],0,3,0,0,R3,0,D,[],3,3,0,0,AF4,0,F_,[R3],0,3,0,0]);
$rt_metadata([AFY,0,D,[],0,3,0,0,NT,0,D,[],4,3,0,0,HL,0,D,[],1,3,0,0,AMO,0,HL,[],0,3,0,0,ACN,0,D,[],0,3,0,0,Pu,0,HL,[],0,3,0,0,T4,0,D,[],0,3,0,0,E3,0,EY,[],12,3,0,0,Vm,0,Fb,[DL],0,3,0,0,Tz,0,D,[DE],0,0,0,["gv",function(){return A4p(this);}],Tw,0,D,[DE],0,0,0,["gv",function(){return AYh(this);}],Rh,0,D,[DE],0,0,0,["gv",function(){return A8O(this);}],Rk,0,D,[DE],0,0,0,["gv",function(){return A7b(this);}],Rf,0,D,[DE],0,0,0,["gv",function(){return A5R(this);}],Rg,0,D,[DE],0,0,0,["gv",function(){return A3d(this);
}],Ri,0,D,[DE],0,0,0,["gv",function(){return A7i(this);}],Rj,0,D,[DE],0,0,0,["gv",function(){return A1F(this);}],Er,0,D,[],1,3,0,0,Ra,0,Er,[],0,3,0,0,Oq,0,D,[],0,3,0,0,SH,0,CS,[],0,3,0,["hT",function(){AD2(this);},"ps",function(){ANF(this);},"rx",function(){AYq(this);},"iB",function(b){AHf(this,b);},"o$",function(b,c){ACV(this,b,c);},"hN",function(b,c,d){ABo(this,b,c,d);}],IG,0,EY,[],12,3,0,0,MC,0,D,[J0,Db],0,3,0,0,Lb,0,MC,[],0,0,0,0,AMW,0,F_,[],0,3,0,["ls",function(){AYr(this);},"gu",function(b,c,d){AXY(this,
b,c,d);},"tM",function(){A35(this);},"nJ",function(b){AXi(this,b);}],WO,0,D,[],0,3,0,0,N$,"ArrayIndexOutOfBoundsException",9,BO,[],0,3,0,0,ARh,0,Er,[],0,3,0,0,Ch,0,Er,[],0,3,0,0,BS,0,Er,[],0,3,0,0,Cn,0,Er,[],0,3,0,0,Sw,"EntityBubbleFX",12,C0,[],0,3,0,["en",function(){Y7(this);}],AFn,"EntitySmokeFX",12,C0,[],0,3,0,["kN",function(b,c,d,e,f,g,h){AJ5(this,b,c,d,e,f,g,h);},"en",function(){ALQ(this);}],QY,"EntityExplodeFX",12,C0,[],0,3,0,["kN",function(b,c,d,e,f,g,h){AR5(this,b,c,d,e,f,g,h);},"en",function(){AEQ(this);
}],OZ,"EntityFlameFX",12,C0,[],0,3,0,["kN",function(b,c,d,e,f,g,h){AQF(this,b,c,d,e,f,g,h);},"ve",function(b){return ASq(this,b);},"en",function(){AAO(this);}],AAZ,"EntityLavaFX",12,C0,[],0,3,0,["ve",function(b){return AJ6(this,b);},"kN",function(b,c,d,e,f,g,h){AGR(this,b,c,d,e,f,g,h);},"en",function(){ALg(this);}],ARz,"EntitySplashFX",12,JL,[],0,3,0,0,AIo,0,D,[],4,3,0,0,H4,0,D,[],0,0,0,0,Vd,0,D,[],0,3,0,0,AB$,0,D,[],0,3,0,0,UY,"EntityPickupFX",12,C0,[],0,3,0,["kN",function(b,c,d,e,f,g,h){AMf(this,b,c,d,e,f,
g,h);},"en",function(){AAH(this);},"xu",function(){return AUs(this);}],Y2,0,D,[],0,3,0,0,HP,0,D,[],0,3,0,["em",function(b){return A3O(this,b);},"fj",function(){return AVi(this);}],AJg,0,D,[],0,0,0,0]);
function $rt_array(cls,data){this.co=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","@","0","","Timer hack thread","Player","fuckmojang123","randpasslol","Minecraft main thread","<init>","null","Patter is null",": ","    at ","Caused by: ","  at ","Index out of bounds","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"#version 300 es","/","UTF-8","overflow-x:hidden;overflow-y:hidden;","WebGL 2.0 is not supported in your browser (",")","NONE","ESCAPE","1","2","3","4","5","6","7","8","9","MINUS","EQUALS","BACK","TAB","Q","W","E","R","T","Y","U","I","O","P","LBRACKET","RBRACKET","RETURN","LCONTROL","A","S","D","F","G","H","J","K","L","SEMICOLON","APOSTROPHE","GRAVE","LSHIFT","BACKSLASH","Z","X","C","V","B","N","M","COMMA","PERIOD","SLASH","RSHIFT","MULTIPLY","LMENU","SPACE","CAPITAL","F1","F2","F3","F4","F5","F6","F7","F8",
"F9","F10","NUMLOCK","SCROLL","NUMPAD7","NUMPAD8","NUMPAD9","SUBTRACT","NUMPAD4","NUMPAD5","NUMPAD6","ADD","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD0","DECIMAL","F11","F12","F13","F14","F15","F16","F17","F18","KANA","F19","CONVERT","NOCONVERT","YEN","NUMPADEQUALS","CIRCUMFLEX","AT","COLON","UNDERLINE","KANJI","STOP","AX","UNLABELED","NUMPADENTER","RCONTROL","SECTION","NUMPADCOMMA","DIVIDE","SYSRQ","RMENU","FUNCTION","PAUSE","HOME","UP","PRIOR","LEFT","RIGHT","END","DOWN","NEXT","INSERT","DELETE","CLEAR","LMETA",
"RMETA","APPS","POWER","SLEEP","\n","/default.png","Pre startup","Startup","EARLY BETA TESTING!","THIS PROJECT IS STILL IN TESTING!\nTHERE WILL BE BUGS!","Post startup","/dirt.png","Loading...","GL_INVALID_ENUM","GL_INVALID_VALUE","GL_INVALID_OPERATION","GL_OUT_OF_MEMORY","Unknown Error","CONTEXT_LOST_WEBGL","########## GL ERROR ##########","@ ","Pre render","Post render"," fps, "," chunk updates","/terrain.png","Loading level","Generating level","Building terrain","Simulating world for a bit","P: ",". T: ",
"Respawning","main","_net_peytonplayz585_minecraft_infdev_IndexedDBFilesystem","Initialization Failed","EAGPKG!!","invalid epk file","<file>"," end","invalid file hash for ","</file>","/rain.png","Either src or dest is null","window.indexedDB was null or undefined","Can\'t compare "," to ","OPENED","LOCKED","ERROR","yee","End of stream reached","Malformed UTF-8 sequence","charsetName is null","Should never been thrown","Stream closed","footer is not found","Unexpected end of ZLIB input stream","random.splash",
"bubble","splash","random.fizz","Pos","Motion","Rotation","FallDistance","Fire","Air","OnGround","explode","random.hurt","random.bow","random.fuse","mob.sheep","mob.pig","mob.pigdeath","/gui/items.png","/water.png","Slot "," is already occupied by "," when adding ","stone","wood","gravel","grass","cloth","sand","open error","path","New position "," is outside of range [0;","]","New limit ","The last float in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","step.","liquid.water",
"lava","largesmoke","smoke","flame","fire.fire","Large chest","Get resource: ","Duplicate id: ","Furnace","Chest","Sign","MobSpawner","CONFLICT @ ","random.door_close","random.door_open","�","Replacement preconditions do not hold","The last byte in dst ","The last byte in src ","Index ","Capacity is negative: ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","fire.ignite","BIG_ENDIAN","LITTLE_ENDIAN","need dictionary","unknown compression method",
"unknown header flags set","incorrect data check","incorrect length check","incorrect header check","invalid window size","bad extra field length","header crc mismatch","IGNORE","REPLACE","REPORT","Action must be non-null","invalid stored block lengths","invalid block type","too many length or distance symbols","invalid bit length repeat","oversubscribed dynamic bit lengths tree","incomplete dynamic bit lengths tree","oversubscribed distance tree","incomplete distance tree","empty distance tree with lengths",
"oversubscribed literal/length tree","incomplete literal/length tree","invalid distance code","invalid literal/length code","newAction must be non-null","matrix is not supported while recording display list use tessellator class instead","projection matrix stack overflow","texture matrix stack overflow","modelview matrix stack overflow","projection matrix stack underflow","texture matrix stack underflow","modelview matrix stack underflow","only GL_QUADS supported in a display list","vertex format inconsistent in display list",
"keyup","Forward","Left","Back","Right","Jump","Inventory","Drop","Chat","Toggle fog","Save location","Load location","Music: ","OFF","ON","Sound: ","Invert mouse: ","Show FPS: ","Render distance: ","View bobbing: ","3d anaglyph: ","Limit framerate: ","Difficulty: ","Graphics: ","FAST","FANCY","High Performance Mode: ","FAR","NORMAL","SHORT","TINY","Peaceful","Easy","Normal","Hard","/level.dat","Data","RandomSeed","SpawnX","SpawnY","SpawnZ","Time","SizeOnDisk","Saving level","Saving chunks","LastPlayed","/level.dat_new",
"/level.dat_old","Failed to add entity ","All: ","DOHASDOSHIH!","TickNextTick list out of synch","%%","!!","/char.png","0123456789abcdef","C: ",". F: ",", O: ",", E: ","E: ",". B: ",", I: ","/terrain/sun.png","/terrain/moon.png","/clouds.png","Pre-beta!","As seen on TV!","Awesome!","100% pure!","May contain nuts!","Better than Prey!","More polygons!","Sexy!","Limited edition!","Flashing letters!","Made by Notch!","Coming soon!","Best in class!","When it\'s finished!","Absolutely dragon free!","Excitement!",
"More than 5000 sold!","One of a kind!","700+ hits on YouTube!","Indev!","Spiders everywhere!","Check it out!","Holy cow, man!","It\'s a game!","Made in Sweden!","Uses LWJGL!","Reticulating splines!","Minecraft!","Yaaay!","Alpha version!","Singleplayer!","Keyboard compatible!","Undocumented!","Ingots!","Exploding creepers!","That\'s not a moon!","l33t!","Create!","Survive!","Dungeon!","Exclusive!","The bee\'s knees!","Down with O.P.P.!","Closed source!","Classy!","Wow!","Not on steam!","9.95 euro!","Half price!",
"Oh man!","Awesome community!","Pixels!","Teetsuuuuoooo!","Kaaneeeedaaaa!","Now with difficulty!","Enhanced!","90% bug free!","Pretty!","12 herbs and spices!","Fat free!","Absolutely no memes!","Free dental!","Ask your doctor!","Minors welcome!","Cloud computing!","Legal in Finland!","Hard to label!","Technically good!","Bringing home the bacon!","Indie!","GOTY!","Ceci n\'est pas une title screen!","Euclidian!","Now in 3D!","Inspirational!","Herregud!","Complex cellular automata!","Yes, sir!","Played by cowboys!",
"OpenGL 1.1!","Thousands of colors!","Try it!","Age of Wonders is better!","Try the mushroom stew!","Sensational!","Hot tamale, hot hot tamale!","Play him off, keyboard cat!","Guaranteed!","Macroscopic!","Bring it on!","Random splash!","Call your mother!","Monster infighting!","Loved by millions!","Ultimate edition!","Freaky!","You\'ve got a brand new key!","Water proof!","Uninflammable!","Whoa, dude!","All inclusive!","Tell your friends!","NP is not in P!","Notch <3 Ez!","Music by C418!","Single player","Multi player",
"Play tutorial level","Options...","/gui/logo.png","Copyright Mojang Specifications. Do not distribute.","Free memory: ","% of ","MB","Allocated memory: ","% (","MB)","/particles.png","/gui/gui.png","/gui/icons.png","Minecraft Infdev","Minecraft Infdev (","Used memory: ","MB) of ","Notch","humanoid","http://www.minecraft.net/skin/",".png","Health","HurtTime","DeathTime","AttackTime","Score","Edit sign message:","mousedown","wheel","Slot","Crafting","/gui/inventory.png","/glsl/core.glsl","\n#define CC_a_color\n",
"#define CC_a_texture0\n","#define CC_lighting\n","#define CC_fog\n","#define CC_alphatest\n","#define CC_unit0\n","\n#define CC_VERT\n","\n\n","\n[/glsl/core.glsl][CC_VERT] ","broken shader file","\n#define CC_FRAG\n","\n[/glsl/core.glsl][CC_FRAG] ","a_position","a_texture0","a_color","\n[LINKER] ","matrix_m","matrix_p","matrix_t","colorUniform","normalUniform","light0Pos","light1Pos","fogColor","fogMode","fogStart","fogEnd","fogDensity","fogPremultiply","alphaTestF","tex0","texCoordV0","id","Count","Damage",
"array size does not equal image size","I Understand!","Respawn","Title menu","Game over!","Score: &e","Save and quit to title..","Back to game","Saving level..","Game menu","/armor/","_","chain","iron","diamond","gold","/item/sign.png","> "," <","Pig","/mob/spider_eyes.png","/mob/saddle.png","/mob/sheep_fur.png","/art/kz.png","random.drr","random.pop","/item/arrows.png","/item/cart.png","Wrong location! ","There\'s no such entity to remove: ","Attempted to place a tile entity where there was no entity tile!",
"Malformed input of length ","Unmappable characters of length ","Options","Controls...","Done","Controls","Select world","World","World ","- empty -"," ("," MB)","Delete world...","Cancel","Delete world","\'","\' will be lost forever!","Are you sure you want to delete this world?","saves/","###","X#X","#X#","# #","##"," X ","#"," # ","X X","A "," B","#  ","## "," recipes","Is","In",", ","XXX","XX","X#"," #"," #X","# X","{",",","}","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank",
"Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","s","d","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement",
"Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement",
"LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B",
"SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs",
"YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","Nd","Nl","No","IsZ","Zs","Zl","Zp",
"IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","/gui/furnace.png","/gui/crafting.png","/gui/container.png","Kebab","Aztec","Alban","Aztec2","Bomb","Plant","Wasteland","Pool","Courbet","Sea","Sunset","Wanderer","Match","Bust","Stage","Void","SkullAndRoses","Fighters","Pointer","Yes","Arrow","Item","Painting","Mob","Monster","Creeper","Skeleton","Spider","Giant","Zombie","Sheep","PrimedTnt","FallingSand","Minecart","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ","xPos","zPos",
"The chunk file \'","\' was supposed to be at [","], but the file contained a chunk from [","]. It\'s data will be moved to file \'","\', and a new empty chunk will be created for file \'","\' for [","Corrupt chunk \'","\' was found at: [","The file will be deleted","Failed to serialize chunk at [","] to byte array","LastUpdate","Blocks","SkyLight","BlockLight","HeightMap","TerrainPopulated","UTF Error","FILE","DIRECTORY","FALSE","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_\'*!\"#%/()=+?[]{}<>",
"Sky","Block","buffer is null","Length out of bounds: ","Offset out of bounds: ","random.explode","OW KNOWS!"]);
B4.prototype.toString=function(){return $rt_ustr(this);};
B4.prototype.valueOf=B4.prototype.toString;D.prototype.toString=function(){return $rt_ustr(AUj(this));};
D.prototype.__teavm_class__=function(){return $dbg_class(this);};
function Long_eq(a,b){return a.hi===b.hi&&a.lo===b.lo;}function Long_ne(a,b){return a.hi!==b.hi||a.lo!==b.lo;}function Long_gt(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);}function Long_ge(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);}function Long_lt(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>
1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);}function Long_le(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);}function Long_add(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_inc(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);}function Long_dec(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);}function Long_neg(a)
{return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));}function Long_sub(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<
16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_compare(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}function Long_mul(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo
+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);}function Long_div(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];}function Long_udiv(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];}function Long_rem(a,
b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];}function Long_urem(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];}function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}function Long_and(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);}function Long_or(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);}function Long_xor(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);}function Long_shl(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}}function Long_shr(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi
<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}}function Long_shru(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}}function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup
=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -
b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a)
{var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup
=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q
=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}function TeaVMThread(runner){this.status=3;this.stack
=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending=function(){return this.status
===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status
=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread
=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new Error("Invalid recorded state");}main
=$rt_mainStarter(AQ2);
(function(){var c;c=YG.prototype;c.dispatchEvent=c.Mr;c.addEventListener=c.X_;c.removeEventListener=c.a0c;c.getLength=c.U6;c.get=c.Sd;c.addEventListener=c.Tt;c.removeEventListener=c.Oc;c=W3.prototype;c.handleEvent=c.gO;c=W9.prototype;c.handleEvent=c.gO;c=W$.prototype;c.handleEvent=c.gO;c=W7.prototype;c.handleEvent=c.gO;c=W8.prototype;c.handleEvent=c.gO;c=W5.prototype;c.handleEvent=c.gO;c=W6.prototype;c.handleEvent=c.gO;c=W4.prototype;c.handleEvent=c.gO;c=Qu.prototype;c.handleEvent=c.gO;c=Qt.prototype;c.handleEvent
=c.gO;c=W2.prototype;c.stateChanged=c.a0T;c=TD.prototype;c.handleEvent=c.gv;c=TC.prototype;c.handleEvent=c.gv;c=TB.prototype;c.handleEvent=c.gv;c=TA.prototype;c.handleEvent=c.gO;c=AAV.prototype;c.getLength=c.Zr;c.get=c.QT;c=Qx.prototype;c.handleEvent=c.gO;c=Qw.prototype;c.handleEvent=c.gO;c=Qv.prototype;c.onTimer=c.Gb;c=Tn.prototype;c.onTimer=c.Gb;c=Tv.prototype;c.handleEvent=c.gv;c=Tu.prototype;c.handleEvent=c.gv;c=Tz.prototype;c.handleEvent=c.gv;c=Tw.prototype;c.handleEvent=c.gv;c=Rh.prototype;c.handleEvent
=c.gv;c=Rk.prototype;c.handleEvent=c.gv;c=Rf.prototype;c.handleEvent=c.gv;c=Rg.prototype;c.handleEvent=c.gv;c=Ri.prototype;c.handleEvent=c.gv;c=Rj.prototype;c.handleEvent=c.gv;})();
})();

//# sourceMappingURL=app.js.map