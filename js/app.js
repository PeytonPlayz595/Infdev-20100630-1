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
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Bc1());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return ASH();}
function $rt_setThread(t){return Fs(t);}
function $rt_createException(message){return ZY(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var M=$rt_throw;var R=$rt_compare;var Bc2=$rt_nullCheck;var F=$rt_cls;var J=$rt_createArray;var Sg=$rt_isInstance;var C3=$rt_nativeThread;var C=$rt_suspending;var Fe=$rt_resuming;var E_=$rt_invalidPointer;var B=$rt_s;var Bt=$rt_eraseClinit;var Bj=$rt_imul;var Bi=$rt_wrapException;
function D(){this.co=null;this.$id$=0;}
function Bc3(){var a=new D();WD(a);return a;}
function Ba1(b){var c;if(b.co===null)Vs(b);if(b.co.ee===null)b.co.ee=Bc4;else if(b.co.ee!==Bc4){c=new D2;Bl(c,B(0));M(c);}b=b.co;b.fg=b.fg+1|0;}
function BcS(b){var c,d;if(!HF(b)&&b.co.ee===Bc4){c=b.co;d=c.fg-1|0;c.fg=d;if(!d)b.co.ee=null;HF(b);return;}b=new Kj;O(b);M(b);}
function AD0(b){if(b.co===null)Vs(b);if(b.co.ee===null)b.co.ee=Bc4;if(b.co.ee!==Bc4)AXl(b,1);else{b=b.co;b.fg=b.fg+1|0;}}
function Vs(b){b.co=Bav();}
function AXl(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gm=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IU=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaF(callback);return thread.suspend(function(){try{Bcc(b,c,callback);}catch($e){callback.IU($rt_exception($e));}});}
function Bcc(b,c,d){var e,f,g;e=Bc4;if(b.co===null){Vs(b);Fs(e);b=b.co;b.fg=b.fg+c|0;CM(d,null);return;}if(b.co.ee===null){b.co.ee=e;Fs(e);b=b.co;b.fg=b.fg+c|0;CM(d,null);return;}f=b.co;if(f.hh===null)f.hh=AXn();f=f.hh;g=new Q7;g.zC=e;g.zD=b;g.zA=c;g.zB=d;d=g;f.push(d);}
function NP(b){var c;if(!HF(b)&&b.co.ee===Bc4){c=b.co;c.fg=c.fg-1|0;if(c.fg<=0){c.ee=null;if(c.hh!==null&&!JG(c.hh)){c=new SL;c.Dd=b;QV(c);}else HF(b);}return;}b=new Kj;O(b);M(b);}
function HF(a){var b;b=a.co;if(b===null)return 1;a:{if(b.ee===null&&!(b.hh!==null&&!JG(b.hh))){if(b.ri===null)break a;if(JG(b.ri))break a;}return 0;}a.co=null;return 1;}
function WD(a){return;}
function Dl(a){return LW(a.constructor);}
function A4X(a){return MI(a);}
function QZ(a,b){return a!==b?0:1;}
function AUk(a){var b,c,d,e,f,g,h,i;b=new T;V(b);b=H(H(b,IA(Dl(a))),B(1));c=MI(a);if(!c)d=B(2);else{e=(((32-Tt(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=IY(c>>>e&15,16);e=e-4|0;h=i;}d=AH_(f);}return U(H(b,d));}
function MI(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AXK(a){var b,c,d;if(!Sg(a,EU)&&a.constructor.$meta.item===null){b=new R$;O(b);M(b);}b=AS1(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Xb(a){var b,c;if(!(a.co!==null&&a.co.ee===Bc4?1:0)){b=new Kj;O(b);M(b);}b=a.co.ri;if(b===null)return;while(!JG(b)){c=AOS(b);if(!c.a0j())QV(c);}a.co.ri=null;}
function Jv(){D.call(this);}
var Bc5=null;var Bc6=null;var Bc7=null;function Bc8(){var a=new Jv();AQY(a);return a;}
function AQY(a){return;}
function AQ3(b){var c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AKd();AGk();AQj();ZW();AP3();AIS();ACK();ASl();AC5();AKQ();ARJ();Y3();AHC();Za();AHg();ALU();AFo();AFq();AOH();AQb();AH2();AOp();ABD();AFz();AEq();AHR();XD();ADB();Z8();AL3();AJ_();AOP();AG6();ASf();AOc();ALJ();AAb();AKu();AO_();AEj();AMJ();ALa();AMH();AIH();AF9();AHw();AK3();AAm();ZZ();AP9();AJU();AAP();AIj();ALY();ABi();AM_();AHM();AFt();c
=window.minecraftOpts;if(c===null)d=null;else{d=J(B4,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));Bc5=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else if($$je instanceof D8){c=$$je;break a;}else{throw $$e;}}return;}g=A8$();h=new Lt;Wa(h,g);h.yd=0;h.mx=g;Oy(c,h);return;case 1:b:{c:{d:{try{AAn(c,g);if(C()){break _;}break d;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else if($$je instanceof D8)
{c=$$je;break c;}else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Bi($$e);if($$je instanceof D8){c=$$je;}else{throw $$e;}}}g=A8$();h=new Lt;Wa(h,g);h.yd=0;h.mx=g;Oy(c,h);return;}c=new Il;i=Lq();j=Mz();g=new UM;g.DR=0;g.cW=c;g.vX=(-1);g.vZ=(-1);g.vY=(-1);g.hm=0.0;g.mK=0.0;g.oj=0.0;g.na=0;k=new UT;b=J(FO,4);d=b.data;d[0]=F(I3);d[1]=F(Jj);d[2]=F(JV);d[3]=F(Kl);RD(k,100,F(DP),b);k.Gu=g;g.Bb=k;h=new I7;b=J(FO,2);d=b.data;d[0]=F(KF);d[1]=F(Iz);RD(h,20,F(Gx),b);g.Bx=h;c.cB=g;g=new Sx;g.CT=1.0;g.lG=0.0;g.nB=1.0;g.c7
=20.0;g.sP=B$();g.rS=Long_div(EG(),Long_fromInt(1000000));c.bf=g;c.kW=null;c.bs=0;c.D=null;g=new RY;g.q4=B(3);g.nY=B(3);g.oe=B$();g.nx=0;g.ga=c;c.ji=g;c.eT=BbP(c);c.bO=0;c.c9=0;c.Hd=null;c.FW=0;c.h7=0;c.Gr=Xp(0.0);c.ce=null;c.C7=Bao();c.BD=BaX();c.hx=1;c.lx=B(3);c.gP=Long_fromInt(-1);c.bp=0;c.cn=0;c.cT=0;c.dA=B$();g=new VS;TM(g,B(4));g.yj=c;g.Ec=1;Tf(g);c.cc=i;c.bB=j;Bc9=c;Bc6=c;c=Bc6;g=new Mi;Bbh();g.oi=B(5);g.F0=B(6);c.kW=g;Bc6.kW.Gw=B(7);Bc7=A_5(Bc6,B(8));Tf(Bc7);return;default:E_();}}C3().s(b,c,d,e,f,g,
h,i,j,k,$p);}
function AKd(){Bc5=null;Bc6=null;Bc7=null;}
function MO(){}
function FO(){var a=this;D.call(a);a.uk=null;a.fY=null;a.mg=null;}
var Bc$=0;function LW(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new FO;c.fY=b;d=c;b.classObject=d;}return c;}
function A34(a){return a.fY;}
function Ut(a,b){var c;b=b;c=a.fY;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&VR(b.constructor,c)?1:0;}
function P2(a,b){return VR(b.fY,a.fY);}
function IA(a){if(a.uk===null)a.uk=$rt_str(a.fY.$meta.name);return a.uk;}
function FW(a){return a.fY.$meta.primitive?1:0;}
function AGY(a){return AR1(a.fY)===null?0:1;}
function Kw(a){return LW(AR1(a.fY));}
function A6Y(){I3.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jj.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];JV.$meta.methods
=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType
:$rt_voidcls(),callable:null},{name:"setCreeperFlashTime",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_floatcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Kl.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntity",modifiers
:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];KF.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType
:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel
:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null}];Iz.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers
:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jr],returnType:$rt_booleancls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jd.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null}];S_.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers
:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable
:null},{name:"writeToNBT",modifiers:4,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null}];WS.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes
:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers
:4,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getCookProgressScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getBurnTimeRemainingScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"isBurning",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"canSmelt",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"smeltItem",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSmeltingResult",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getItemBurnTime",modifiers:0,accessLevel
:1,parameterTypes:[Cd],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Nt.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"anyPlayerInRange",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name
:"updateDelay",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null}];DP.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable
:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null}];EQ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"getTexture",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"getEyeHeight",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_floatcls(),callable:null},{name:"onEntityUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"spawnExplosionParticle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updateRidden",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"setSize",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable
:null},{name:"heal",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable
:null},{name:"knockBack",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"onDeath",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"fall",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"moveEntityWithHeading",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"isOnLadder",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"isEntityAlive",modifiers:0,accessLevel:3,parameterTypes:[],returnType:
$rt_booleancls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"jump",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onEntityDeath",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes
:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null},{name:"kill",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];K$.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null}];ID.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG,$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"setDirection",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"getArtSize",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_voidcls(),callable:null},{name:"onValidSurface",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers
:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null}];Jp.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG,EQ],returnType:$rt_voidcls(),callable:null},{name:"setArrowHeading",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers:0,accessLevel:3,parameterTypes:[Jr],returnType:$rt_voidcls(),callable:null}];E$.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG,$rt_doublecls(),$rt_doublecls(),
$rt_doublecls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"handleWaterMovement",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"pushOutOfBlocks",modifiers:0,accessLevel:1,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable
:null},{name:"dealFireDamage",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers
:0,accessLevel:3,parameterTypes:[Jr],returnType:$rt_voidcls(),callable:null}];Mo.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG,$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:null},{name:"createExplosion",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null}];JJ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[GG,$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes
:[APN],returnType:$rt_voidcls(),callable:null},{name:"getWorld",modifiers:0,accessLevel:3,parameterTypes:[],returnType:GG,callable:null}];Gd.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG],returnType:$rt_voidcls(),callable:null},{name:"getCollisionBox",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:I5,callable:null},{name:"getBoundingBox",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I5,callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_booleancls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GG,$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"getYOffset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_doublecls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable
:null},{name:"setEntityDead",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getPosOffset",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Ki,callable:null},{name:"getPos",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Ki,callable:null},{name:
"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"applyEntityCollision",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType
:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jr],returnType:$rt_booleancls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];}
function ASn(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!FW(a)&&!AGY(a)){if(a.mg===null){if(!Bc$){Bc$=1;A6Y();}b=a.fY.$meta.methods;a.mg=J(Kq,b.length);c=0;d=0;while(d<b.length){e=b[d];if(DA($rt_str(e.name),B(9))){f=e.parameterTypes;g=J(FO,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=LW(f[i]);i=i+1|0;}h=a.mg.data;j=c+1|0;k=new Kq;l=$rt_str(e.name);m=e.modifiers;i=e.accessLevel;f=Jz(e.callable,"call");k.zQ=a;k.HX=l;k.vc=m;k.Di=i;k.nc=g;k.vJ=f;h[c]=k;c=j;}d=d+1|0;}a.mg=Nm(a.mg,c);}return a.mg.oW();}return J(Kq,0);}
function Wx(a,b){var c,d,e,f,g,h,i,j,k,l;c=ASn(a).data;d=c.length;e=0;while(true){if(e>=d){f=new UP;O(f);M(f);}g=c[e];if(!(AD$(g)&1)?0:1){a:{h=ABh(g);if(h===b)i=1;else{if(h!==null&&b!==null){j=h.data;h=b.data;k=j.length;if(k==h.length){i=0;while(i<k){f=j[i];l=h[i];if(!(f===l?1:f!==null?QZ(f,l):l!==null?0:1)){i=0;break a;}i=i+1|0;}i=1;break a;}}i=0;}}if(i)break;}e=e+1|0;}return g;}
function JF(a){return LW(a.fY.$meta.superclass);}
function Zm(a){var b;b=a.fY;if(!Bc_){AWX();Bc_=1;}b=A2q(b);if(b!==null)return b;b=new LX;O(b);M(b);}
function AJ5(){D.call(this);}
function Bda(){var a=new AJ5();A67(a);return a;}
function A67(a){return;}
function Cu(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Jz(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function T0(){D.call(this);}
var Bc_=0;function Bdb(){var a=new T0();A_q(a);return a;}
function A_q(a){return;}
function AS1(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function VR(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(VR(d[e],c))return 1;e=e+1|0;}return 0;}
function AWX(){var c='$$constructor$$';B4[c]=X3;D[c]=WD;AMb[c]=A1r;IZ[c]=AVv;Fh[c]=AUJ;D8[c]=O;AOR[c]=AWM;IM[c]=AXH;ALD[c]=A3u;B6[c]=ATi;BE[c]=AZI;T[c]=A_f;HJ[c]=V;Jv[c]=AQY;ABe[c]=A2Z;AJ5[c]=A67;T0[c]=A_q;Gk[c]=AHA;Bs[c]=VL;W3[c]=A2j;W9[c]=AZe;W$[c]=AXd;W7[c]=A46;W8[c]=A_N;W5[c]=A38;W6[c]=AXs;W4[c]=A23;Qu[c]=A1_;Qt[c]=A32;AEC[c]=A2Q;B1[c]=A3R;Lg[c]=A6i;VX[c]=AZi;AFa[c]=AV6;ZC[c]=A25;Mw[c]=KE;AAQ[c]=A$3;AKB[c]=A1D;AQi[c]=A06;AB_[c]=AVr;NO[c]=AD6;UQ[c]=AQs;ADq[c]=A$h;Dz[c]=A3c;L3[c]=AZB;AJe[c]=AV7;YR[c]=A0l;Cb[c]
=AT8;AJa[c]=A56;EE[c]=AUI;Nx[c]=AIl;AE3[c]=AS_;W_[c]=A3r;Sv[c]=ZK;Ue[c]=A29;MP[c]=OL;AA6[c]=AY3;Jd[c]=AZY;D$[c]=ANu;AHF[c]=A1S;B8[c]=AQk;P0[c]=A84;Og[c]=AZT;LZ[c]=ATj;N3[c]=A7w;AGh[c]=A0c;R$[c]=A6E;IU[c]=A0W;BO[c]=AUu;FD[c]=AW4;PK[c]=A6K;AMm[c]=ATy;F$[c]=AHE;Hs[c]=A_o;AOo[c]=A2O;Xq[c]=A8M;Kj[c]=A7h;D2[c]=A9U;ZS[c]=A2C;WX[c]=A1h;GY[c]=AVa;E2[c]=A7R;AR$[c]=AXI;OP[c]=Y_;ANv[c]=A8G;CS[c]=DQ;Gc[c]=M_;JQ[c]=A5E;Bu[c]=AO3;ACz[c]=AUj;Es[c]=A43;UX[c]=A9_;G7[c]=AZN;Qg[c]=A$y;AKV[c]=A4t;ACh[c]=A3m;AG_[c]=A4o;Rz[c]=A0K;AJF[c]
=AWa;Qj[c]=ANL;AAB[c]=ASQ;AIG[c]=A5w;Jk[c]=AYd;FR[c]=A6M;G$[c]=A5T;Gp[c]=A1E;Mk[c]=A93;AAX[c]=AWb;AFR[c]=A89;S_[c]=A17;WS[c]=AU_;KR[c]=A2m;Rt[c]=A6O;Wy[c]=AFs;Lx[c]=AHq;O0[c]=ALg;HT[c]=AC8;HV[c]=AGu;JY[c]=A7M;OI[c]=AH$;L9[c]=AVS;Ho[c]=AAh;Na[c]=AR0;Qv[c]=A_h;WE[c]=AVk;WC[c]=A5K;Hi[c]=AQH;Nb[c]=AKl;R4[c]=ASL;R6[c]=A97;R5[c]=A$a;R7[c]=A3G;AA0[c]=ATu;Nt[c]=A8b;ARY[c]=AXk;AQh[c]=A4p;PR[c]=AYb;ACE[c]=A95;ARf[c]=AU9;AB6[c]=AZJ;AIm[c]=AWn;HN[c]=A8c;TF[c]=AZt;AAp[c]=AZz;Rs[c]=AST;AOU[c]=A7g;AQM[c]=AXq;ARy[c]=A$g;V3[c]
=AUa;ABz[c]=AUl;AH5[c]=AUL;AIz[c]=A49;AEU[c]=A30;UP[c]=A6L;Gg[c]=A$e;U$[c]=AO5;AQF[c]=A3_;APN[c]=A8J;PZ[c]=A$6;SD[c]=AYL;LX[c]=A69;S6[c]=A$F;AMh[c]=AS5;NN[c]=AC$;QS[c]=ALz;ALu[c]=A7n;Z_[c]=A8u;NW[c]=AVL;Mt[c]=A4k;MT[c]=A50;Li[c]=A1I;N8[c]=AZZ;Pd[c]=AZW;Mm[c]=AZA;MD[c]=A_H;OB[c]=A8m;QO[c]=AG4;ARR[c]=AXA;XU[c]=A$o;XN[c]=A2b;AD_[c]=A0C;ARQ[c]=A6T;AE9[c]=AU7;AR8[c]=A2S;HQ[c]=A$m;K0[c]=AXV;CE[c]=A4y;ZJ[c]=A2u;H6[c]=AF7;TK[c]=A_C;WU[c]=A4u;ABI[c]=AVg;AJp[c]=A0F;AQ5[c]=AW1;AGg[c]=A8i;Ez[c]=A3N;Ws[c]=A35;Wt[c]=AWI;NE[c]
=AWT;M8[c]=A0S;AEE[c]=AWq;AFi[c]=AXc;AFr[c]=ATR;NA[c]=AUZ;L$[c]=AWW;AHQ[c]=A7S;Ox[c]=AZP;AMN[c]=A0J;ACH[c]=A9H;AAf[c]=A$1;AJ$[c]=AT5;AQa[c]=A3X;AHY[c]=AZ5;APn[c]=ATT;AEm[c]=AYp;AFX[c]=AUX;YV[c]=AUs;AIv[c]=AX7;APC[c]=AYC;AE7[c]=A6q;ALb[c]=ATm;ACT[c]=AUB;AG9[c]=AXP;APQ[c]=A78;ABs[c]=AUv;AAF[c]=A9p;AHW[c]=A6k;La[c]=AVA;AQD[c]=A6u;AMT[c]=A1z;AAy[c]=A6U;AKP[c]=A12;AKt[c]=AS4;Zp[c]=A74;AL7[c]=A$M;KI[c]=AT2;SX[c]=AAg;AJY[c]=ATS;Nf[c]=ASk;AFY[c]=A0h;NT[c]=ABk;Pu[c]=A_E;Ra[c]=A6Z;WO[c]=AXX;N$[c]=AVT;ARi[c]=A0T;AIo[c]
=AWP;Y2[c]=AZ$;}
function A2q(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function AZK(b){return setTimeout(function(){$rt_threadStarter(A3Y)(b);},0);}
function A3Y(b){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.ko();if(C()){break _;}return;default:E_();}}C3().s(b,$p);}
function QV(b){AFD(b,0);}
function AFD(b,c){return setTimeout(function(){A3Y(b);},c);}
function AP0(b){return String.fromCharCode(b);}
function AR1(b){return b.$meta.item;}
function AXn(){return [];}
function Db(){}
function DL(){}
function KX(){}
function B4(){var a=this;D.call(a);a.bx=null;a.qo=0;}
var Bdc=null;function Bdd(){var a=new B4();X3(a);return a;}
function AH_(a){var b=new B4();Tj(b,a);return b;}
function Lj(a,b,c){var d=new B4();ASA(d,a,b,c);return d;}
function A24(a,b){var c=new B4();Yr(c,a,b);return c;}
function A$z(a,b,c){var d=new B4();Xw(d,a,b,c);return d;}
function X3(a){a.bx=$rt_createCharArray(0);}
function Tj(a,b){var c,d;b=b.data;c=b.length;a.bx=$rt_createCharArray(c);d=0;while(d<c){a.bx.data[d]=b[d];d=d+1|0;}}
function ASA(a,b,c,d){var e,f;a.bx=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bx.data[e]=f[e+c|0];e=e+1|0;}}
function Yr(a,b,c){c=AN1(c,AMB(b,0,b.data.length));if(AJB(c)&&!c.bk&&c.cy==c.mB)a.bx=APi(c);else{a.bx=$rt_createCharArray(Ct(c));AEO(c,a.bx);}}
function Xw(a,b,c,d){var e,f,g,h,i,j;a.bx=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bx.data;j=e+1|0;g[e]=i&65535;}else{g=a.bx.data;c=e+1|0;g[e]=IB(i);g=a.bx.data;j=c+1|0;g[c]=H7(i);}f=f+1|0;c=h;e=j;}if(e<a.bx.data.length)a.bx=O2(a.bx,e);}
function Y(a,b){var c;if(b>=0&&b<a.bx.data.length)return a.bx.data[b];c=new IU;O(c);M(c);}
function Bh(a){return a.bx.data.length;}
function Iv(a){return a.bx.data.length?0:1;}
function ARo(a,b){var c,d,e;if(a===b)return 0;c=CB(Bh(a),Bh(b));d=0;while(true){if(d>=c)return Bh(a)-Bh(b)|0;e=Y(a,d)-Y(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AJC(a,b){var c,d,e;if(a===b)return 0;c=CB(Bh(a),Bh(b));d=0;while(true){if(d>=c)return Bh(a)-Bh(b)|0;e=EV(Y(a,d))-EV(Y(b,d))|0;if(e)break;d=d+1|0;}return e;}
function V9(a,b,c){var d,e,f;if((c+Bh(b)|0)>Bh(a))return 0;d=0;while(d<Bh(b)){e=Y(b,d);f=c+1|0;if(e!=Y(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Iw(a,b){if(a===b)return 1;return V9(a,b,0);}
function Hg(a,b,c){var d,e,f,g;d=DC(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bx.data.length)return (-1);if(a.bx.data[d]==e)break;d=d+1|0;}return d;}f=IB(b);g=H7(b);while(true){if(d>=(a.bx.data.length-1|0))return (-1);if(a.bx.data[d]==f&&a.bx.data[d+1|0]==g)break;d=d+1|0;}return d;}
function Uy(a,b){return Hg(a,b,0);}
function If(a,b,c){var d,e,f,g,h;d=CB(c,Bh(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bx.data[d]==e)break;d=d+(-1)|0;}return d;}f=IB(b);g=H7(b);while(true){if(d<1)return (-1);if(a.bx.data[d]==g){h=a.bx.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function LF(a,b){return If(a,b,Bh(a)-1|0);}
function AKG(a,b,c){var d,e,f;d=DC(0,c);e=Bh(a)-Bh(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=Bh(b))break a;if(Y(a,d+f|0)!=Y(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AAu(a,b,c){var d,e;d=CB(c,Bh(a)-Bh(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=Bh(b))break a;if(Y(a,d+e|0)!=Y(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Ev(a,b,c){var d;if(b<=c)return Lj(a.bx,b,c-b|0);d=new BO;O(d);M(d);}
function Jq(a,b){return Ev(a,b,Bh(a));}
function AVI(a,b,c){return Ev(a,b,c);}
function N0(a,b,c){var d,e,f,g;d=new T;V(d);e=Bh(a)-Bh(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Bh(b)){FK(d,c);f=f+(Bh(b)-1|0)|0;break a;}if(Y(a,f+g|0)!=Y(b,g))break;g=g+1|0;}Dx(d,Y(a,f));}f=f+1|0;}FK(d,Jq(a,f));return U(d);}
function AUg(a){return a;}
function Nq(a){var b,c,d,e;b=$rt_createCharArray(a.bx.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bx.data[d];d=d+1|0;}return b;}
function Uj(b){return b===null?B(10):b.gk();}
function VO(b){var c;c=new T;V(c);return U(Be(c,b));}
function DA(a,b){var c,d;if(a===b)return 1;if(!(b instanceof B4))return 0;c=b;if(Bh(c)!=Bh(a))return 0;d=0;while(d<Bh(c)){if(Y(a,d)!=Y(c,d))return 0;d=d+1|0;}return 1;}
function A8k(a){var b,c,d,e;a:{if(!a.qo){b=a.bx.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.qo=(31*a.qo|0)+e|0;d=d+1|0;}}}return a.qo;}
function AKj(a){var b,c,d,e,f,g,h;if(Iv(a))return a;b=$rt_createIntArray(a.bx.data.length);c=b.data;d=0;e=0;while(e<a.bx.data.length){a:{if(e!=(a.bx.data.length-1|0)&&Dt(a.bx.data[e])){f=a.bx.data;g=e+1|0;if(DR(f[g])){h=d+1|0;c[d]=GO(EJ(a.bx.data[e],a.bx.data[g]));e=g;break a;}}h=d+1|0;c[d]=EV(a.bx.data[e]);}e=e+1|0;d=h;}return A$z(b,0,d);}
function AOh(a){var b,c,d,e,f,g,h;if(Iv(a))return a;b=$rt_createIntArray(a.bx.data.length);c=b.data;d=0;e=0;while(e<a.bx.data.length){a:{if(e!=(a.bx.data.length-1|0)&&Dt(a.bx.data[e])){f=a.bx.data;g=e+1|0;if(DR(f[g])){h=d+1|0;c[d]=GN(EJ(a.bx.data[e],a.bx.data[g]));e=g;break a;}}h=d+1|0;c[d]=FC(a.bx.data[e]);}e=e+1|0;d=h;}return A$z(b,0,d);}
function ANk(a,b){var c,d;if(b===null){b=new EE;Bl(b,B(11));M(b);}Bde=1;c=Bbu();d=new HS;d.h4=1;d.eN=b;d.bG=$rt_createCharArray(Bh(b)+2|0);Di(Nq(b),0,d.bG,0,Bh(b));d.bG.data[d.bG.data.length-1|0]=0;d.bG.data[d.bG.data.length-2|0]=0;d.DS=d.bG.data.length;d.l5=0;Gy(d);Gy(d);c.o=d;c.fO=0;c.u0=SR(c,(-1),c.fO,null);if(!Eo(c.o))M(CN(B(3),c.o.eN,c.o.ig));if(c.y_)c.u0.iV();return AIP(c,a);}
function AVZ(a,b){return ARo(a,b);}
function AGk(){Bdc=new VX;}
function D8(){var a=this;D.call(a);a.vx=null;a.jB=null;a.oo=0;a.rO=0;a.pb=null;a.qN=null;}
function Bdf(){var a=new D8();O(a);return a;}
function Bdg(a){var b=new D8();Bl(b,a);return b;}
function Bdh(a){var b=new D8();WP(b,a);return b;}
function O(a){a.oo=1;a.rO=1;}
function Bl(a,b){a.oo=1;a.rO=1;a.vx=b;}
function WP(a,b){a.oo=1;a.rO=1;a.jB=b;}
function A5F(a){return a;}
function A0i(a){return a.vx;}
function AWm(a){return a.lN();}
function Cc(a){SS(a,C1());}
function SS(a,b){var c,d,e,f,g;Ko(b,IA(Dl(a)));c=a.lN();if(c!==null){d=new T;V(d);Ko(b,U(H(H(d,B(12)),c)));}a:{APA(b);if(a.qN!==null){e=a.qN.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Ko(b,B(13));ACg(b,d);g=g+1|0;}}}if(a.jB!==null&&a.jB!==a){Ko(b,B(14));SS(a.jB,b);}}
function Oy(a,b){var c,d,e,f,g;Hl(b,IA(Dl(a)));c=a.lN();if(c!==null){d=new T;V(d);Hl(b,U(H(H(d,B(12)),c)));}a:{SI(b);if(a.qN!==null){e=a.qN.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Hl(b,B(15));AAA(b,d);g=g+1|0;}}}if(a.jB!==null&&a.jB!==a){Hl(b,B(14));Oy(a.jB,b);}}
function WH(a,b){if(!a.oo)return;a.pb=Nm(a.pb,a.pb.data.length+1|0);a.pb.data[a.pb.data.length-1|0]=b;}
function Fh(){D8.call(this);}
function Bdi(){var a=new Fh();AUJ(a);return a;}
function AUJ(a){O(a);}
function IZ(){Fh.call(this);}
function Bdj(){var a=new IZ();AVv(a);return a;}
function AVv(a){O(a);}
function AMb(){IZ.call(this);}
function Bdk(){var a=new AMb();A1r(a);return a;}
function A1r(a){O(a);}
function HJ(){var a=this;D.call(a);a.O=null;a.bZ=0;}
function Bdl(){var a=new HJ();V(a);return a;}
function BcQ(a){var b=new HJ();Gz(b,a);return b;}
function V(a){Gz(a,16);}
function Gz(a,b){a.O=$rt_createCharArray(b);}
function Tq(a,b,c){return AMu(a,a.bZ,b,c);}
function AMu(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);f=a.O.data;g=b+1|0;f[b]=45;b=g;}a.O.data[b]=IY(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bj(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)e=b;else{f=a.O.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.O.data;b=e+1|0;f[e]=IY(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function ADa(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);g=a.O.data;h=b+1|0;g[b]=45;b=h;}a.O.data[b]=IY(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)i=b;else{g=a.O.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.O.data;b=i+1|0;g[i]=IY(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function AOq(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdm;AOd(c,f);d=f.uw;g=f.ud;h=f.zg;i=1;j=1;if(h){h=1;j=2;}k=9;l=A0Q(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=DC(k,i+1|0);g=0;}else if(g<0){d=d/Bdn.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;C2(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.O.data;h=b+
1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.O.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.O.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.O.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.O.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.O.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.O.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AKw(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdo;ABU(c,f);g=f.u1;h=f.t3;i=f.y9;j=1;k=1;if(i)k=2;l=18;d=AZx(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=DC(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,Bdp.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;C2(a,b,b+(k+l|0)|
0);if(!i)i=b;else{e=a.O.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.O.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.O.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.O.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.O.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.O.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.O.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else
{e=a.O.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.O.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function A0Q(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AZx(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=Bdq.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,Bdq.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,Bdq.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function Dx(a,b){return a.yg(a.bZ,b);}
function KZ(a,b,c){C2(a,b,b+1|0);a.O.data[b]=c;return a;}
function MU(a,b){var c;if(a.O.data.length>=b)return;c=a.O.data.length>=1073741823?2147483647:DC(b,DC(a.O.data.length*2|0,5));a.O=O2(a.O,c);}
function U(a){return Lj(a.O,0,a.bZ);}
function IT(a,b,c,d){return a.xQ(a.bZ,b,c,d);}
function J5(a,b,c,d,e){var f,g,h,i;C2(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.O.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hh(a,b){return a.xi(b,0,b.data.length);}
function C2(a,b,c){var d,e;d=a.bZ-b|0;a.nw((a.bZ+c|0)-b|0);e=d-1|0;while(e>=0){a.O.data[c+e|0]=a.O.data[b+e|0];e=e+(-1)|0;}a.bZ=a.bZ+(c-b|0)|0;}
function Ir(){}
function T(){HJ.call(this);}
function BX(){var a=new T();A_f(a);return a;}
function A_f(a){V(a);}
function H(a,b){Nu(a,a.bZ,b);return a;}
function Be(a,b){Tq(a,b,10);return a;}
function C6(a,b){UE(a,a.bZ,b);return a;}
function AWz(a,b){WF(a,a.bZ,b);return a;}
function AKp(a,b){Ql(a,a.bZ,b);return a;}
function ASZ(a,b){Dx(a,b);return a;}
function AU6(a,b,c,d){IT(a,b,c,d);return a;}
function A9V(a,b){Hh(a,b);return a;}
function FK(a,b){Xj(a,a.bZ,b);return a;}
function UE(a,b,c){ADa(a,b,c,10);return a;}
function WF(a,b,c){AOq(a,b,c);return a;}
function Ql(a,b,c){AKw(a,b,c);return a;}
function A9d(a,b,c,d,e){J5(a,b,c,d,e);return a;}
function Xj(a,b,c){Nu(a,b,c===null?B(10):c.gk());return a;}
function AYU(a,b,c){KZ(a,b,c);return a;}
function AGG(a,b,c){var d,e,f,g,h,i,j;d=R(b,c);if(d<=0&&b<=a.bZ){if(d){e=a.bZ-c|0;a.bZ=a.bZ-(c-b|0)|0;d=0;while(d<e){f=a.O.data;g=b+1|0;h=a.O.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new IU;O(j);M(j);}
function Se(a,b){var c,d,e,f;if(b>=0&&b<a.bZ){a.bZ=a.bZ-1|0;while(b<a.bZ){c=a.O.data;d=a.O.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new IU;O(f);M(f);}
function Nu(a,b,c){var d,e,f;if(b>=0&&b<=a.bZ){a:{if(c===null)c=B(10);else if(Iv(c))break a;MU(a,a.bZ+Bh(c)|0);d=a.bZ-1|0;while(d>=b){a.O.data[d+Bh(c)|0]=a.O.data[d];d=d+(-1)|0;}a.bZ=a.bZ+Bh(c)|0;d=0;while(d<Bh(c)){e=a.O.data;f=b+1|0;e[b]=Y(c,d);d=d+1|0;b=f;}}return a;}c=new IU;O(c);M(c);}
function ANf(a,b){a.bZ=b;}
function AAw(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BO;Bl(f,B(16));M(f);}while(b<c){g=d.data;h=e+1|0;i=a.O.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function A6W(a,b,c,d,e){J5(a,b,c,d,e);return a;}
function AVm(a,b,c,d){IT(a,b,c,d);return a;}
function J$(a){return a.bZ;}
function BL(a){return U(a);}
function AXJ(a,b){MU(a,b);}
function A7I(a,b,c){return Xj(a,b,c);}
function A7l(a,b,c){KZ(a,b,c);return a;}
function A0y(a,b,c){return Ql(a,b,c);}
function A59(a,b,c){return WF(a,b,c);}
function AUH(a,b,c){return UE(a,b,c);}
function A2E(a,b,c){return Nu(a,b,c);}
function Fb(){D.call(this);}
function Gf(){Fb.call(this);this.f6=0;}
var Bdr=null;var Bds=null;function AQP(a){var b=new Gf();Lp(b,a);return b;}
function Lp(a,b){a.f6=b;}
function Ld(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!Iv(b)){a:{d=0;e=0;switch(Y(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==Bh(b)){b=new Ez;O(b);M(b);}while(e<Bh(b)){g=e+1|0;h=T$(Y(b,e));if(h<0){i=new Ez;j=new T;V(j);Bl(i,U(H(H(j,B(17)),b)));M(i);}if(h>=c){i=new Ez;j=new T;V(j);Bl(i,U(H(H(Be(H(j,B(18)),c),B(12)),b)));M(i);}f=Bj(c,f)+h|0;if(f<0){if(g==Bh(b)&&f==(-2147483648)&&d)return (-2147483648);i=new Ez;j=new T;V(j);Bl(i,U(H(H(j,B(19)),b)));M(i);}e=g;}if(d)f= -f;return f;}b
=new Ez;Bl(b,B(20));M(b);}i=new Ez;b=new T;V(b);Bl(i,U(Be(H(b,B(21)),c)));M(i);}
function CX(b){var c;if(b>=(-128)&&b<=127){a:{if(Bds===null){Bds=J(Gf,256);c=0;while(true){if(c>=Bds.data.length)break a;Bds.data[c]=AQP(c-128|0);c=c+1|0;}}}return Bds.data[b+128|0];}return AQP(b);}
function A3Q(a){return a.f6;}
function Mu(a){var b;b=a.f6;return Tq(BcQ(20),b,10).gk();}
function A26(a){return a.f6>>>4^a.f6<<28^a.f6<<8^a.f6>>>24;}
function A_n(a,b){if(a===b)return 1;return b instanceof Gf&&b.f6==a.f6?1:0;}
function AAx(a,b){return R(a.f6,b.f6);}
function Tt(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function JA(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Ni(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function A60(a,b){return AAx(a,b);}
function AQj(){Bdr=F($rt_intcls());}
function IM(){IZ.call(this);}
function Bdt(){var a=new IM();AXH(a);return a;}
function Bdu(a){var b=new IM();P9(b,a);return b;}
function AXH(a){O(a);}
function P9(a,b){Bl(a,b);}
function AOR(){IM.call(this);}
function Bdv(){var a=new AOR();AWM(a);return a;}
function Bdw(a){var b=new AOR();AUp(b,a);return b;}
function AWM(a){O(a);}
function AUp(a,b){P9(a,b);}
function ALD(){IM.call(this);}
function Bdx(){var a=new ALD();A3u(a);return a;}
function Bdy(a){var b=new ALD();AUK(b,a);return b;}
function A3u(a){O(a);}
function AUK(a,b){P9(a,b);}
function BE(){D8.call(this);}
function Bdz(){var a=new BE();AZI(a);return a;}
function AZI(a){O(a);}
function B6(){BE.call(this);}
function BdA(){var a=new B6();ATi(a);return a;}
function ZY(a){var b=new B6();A$U(b,a);return b;}
function ATi(a){O(a);}
function A$U(a,b){Bl(a,b);}
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
function AX4(a,b,c){a.Xg($rt_str(b),Jz(c,"handleEvent"));}
function AYg(a,b,c){a.UF($rt_str(b),Jz(c,"handleEvent"));}
function ATE(a,b){return a.HE(b);}
function AY9(a,b,c,d){a.KK($rt_str(b),Jz(c,"handleEvent"),d?1:0);}
function A1C(a,b){return !!a.Xn(b);}
function AUC(a){return a.I8();}
function ASX(a,b,c,d){a.NC($rt_str(b),Jz(c,"handleEvent"),d?1:0);}
function Bs(){D.call(this);}
var BdB=0;var BdC=null;var BdD=null;var BdE=null;var BdF=null;var BdG=null;var BdH=null;var BdI=null;var BdJ=null;var BdK=null;var BdL=null;var BdM=null;var BdN=null;var BdO=null;var BdP=null;var BdQ=null;var BdR=null;var BdS=null;var BdT=null;var BdU=null;var BdV=0;var BdW=0;var BdX=0.0;var BdY=0.0;var BdZ=0;var Bd0=0;var Bd1=0;var Bd2=0;var Bd3=0;var Bd4=null;var Bd5=null;var Bd6=null;var Bd7=null;var Bd8=null;var Bd9=0;var Bd$=null;var Bd_=null;var Bea=null;var Beb=null;var Bec=null;var Bed=null;var Bee=
Long_ZERO;var Bef=0;var Beg=0;var Beh=0;var Bei=null;var Bej=null;var Bek=null;var Bel=0;var Bem=0;var Ben=0;var Beo=null;var Bep=null;var Beq=null;var Ber=0;var Bes=null;var Bet=null;var Beu=0.0;var Bev=null;var Bew=0;var Bex=null;var Bey=null;var Bez=0;var BeA=null;var BeB=0;function Bd(){Bd=Bt(Bs);ATI();}
function BeC(){var a=new Bs();VL(a);return a;}
function VL(a){Bd();}
function PC(){Bd();return B(22);}
function Ke(b){Bd();if(Iw(b,B(23)))b=Jq(b,1);return CP(BeD,b);}
function AB8(b){var c;Bd();c=Ke(b);if(c===null)return null;return A24(c,X2(B(24)));}
function ALk(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gm=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IU=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaF(callback);return thread.suspend(function(){try{A3n(b,callback);}catch($e){callback.IU($rt_exception($e));}});}
function A3n(b,c){var d,e;Bd();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new W2;b.vn=d;b.z9=c;b=Cu(b,"stateChanged");d.onreadystatechange=b;d.send();}
function AAn(b,c){var d,e,f,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();BdD=b;d=$rt_str(BdD.getAttribute("style"));e=BdD;f=new T;V(f);if(d===null)d=B(3);d=U(H(H(f,d),B(25)));e.setAttribute("style",$rt_ustr(d));BdI=window;BdC=BdI.document;BdE=BdC.createElement("canvas");BdZ=b.clientWidth;Bd0=b.clientHeight;f=BdE;e=BdZ;f.width=e;f=BdE;e=Bd0;f.height=e;BdF=BdE.getContext("2d");BdE.setAttribute("id","deevis589723589");f=BdE;b.appendChild(f);BdG
=BdC.createElement("canvas");b=BdG;f=BdZ;b.width=f;b=BdG;f=Bd0;b.height=f;b=BdG;e=AEK();BdH=b.getContext("webgl2",e);if(BdH===null){b=new B6;c=new T;V(c);Bl(b,U(H(H(H(c,B(26)),$rt_str(window.navigator.userAgent)),B(27))));M(b);}X4(BdH);BdH.getExtension("EXT_texture_filter_anisotropic");b=BdI;e=new W3;BdK=e;b.addEventListener("contextmenu",Cu(e,"handleEvent"));b=BdE;e=new W9;BdL=e;b.addEventListener("mousedown",Cu(e,"handleEvent"));b=BdE;e=new W$;BdM=e;b.addEventListener("mouseup",Cu(e,"handleEvent"));b=BdE;e
=new W7;BdN=e;b.addEventListener("mousemove",Cu(e,"handleEvent"));b=BdI;e=new W8;BdO=e;b.addEventListener("keydown",Cu(e,"handleEvent"));b=BdI;e=new W5;BdP=e;b.addEventListener("keyup",Cu(e,"handleEvent"));b=BdI;e=new W6;BdQ=e;b.addEventListener("keypress",Cu(e,"handleEvent"));b=BdE;e=new W4;BdR=e;b.addEventListener("wheel",Cu(e,"handleEvent"));b=BdI;e=new Qu;b.addEventListener("blur",Cu(e,"handleEvent"));b=BdI;e=new Qt;b.addEventListener("focus",Cu(e,"handleEvent"));ANU();$p=1;case 1:AJN();if(C()){break _;}$p
=2;case 2:ALk(c);if(C()){break _;}a:{try{AL$(BdJ);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){f=$$je;}else{throw $$e;}}Cc(f);}Bet=AYo();Or(BdT);Or(BdU);return;default:E_();}}C3().s(b,c,d,e,f,$p);}
function K2(b){Bd();BdH.enable(b);}
function J1(b){Bd();BdH.disable(b);}
function AH1(){var b,c;Bd();b=new VW;b.iX=BdH.createProgram();c=Bd3+1|0;Bd3=c;b.xk=c;return b;}
function OA(b){var c;Bd();c=new V0;c.jn=BdH.createShader(b);return c;}
function R8(b,c){var d;Bd();d=BdH;b=b.iX;c=c.jn;d.attachShader(b,c);}
function UF(b,c){var d;Bd();d=BdH;b=b.iX;c=c.jn;d.detachShader(b,c);}
function Wz(b){var c;Bd();c=BdH;b=b.jn;c.compileShader(b);}
function AAC(b){var c;Bd();c=BdH;b=b.iX;c.linkProgram(b);}
function OW(b,c){var d;Bd();d=BdH;b=b.jn;d.shaderSource(b,$rt_ustr(c));}
function T5(b){var c;Bd();c=BdH;b=b.jn;return $rt_str(c.getShaderInfoLog(b));}
function AHt(b){var c;Bd();c=BdH;b=b.iX;return $rt_str(c.getProgramInfoLog(b));}
function Va(b){var c;Bd();c=BdH;b=b.jn;return c.getShaderParameter(b,35713)!=1?0:1;}
function AGm(b){var c;Bd();c=BdH;b=b.iX;return c.getProgramParameter(b,35714)!=1?0:1;}
function Ta(b){var c;Bd();c=BdH;b=b.jn;c.deleteShader(b);}
function L6(){var b;Bd();b=new V7;b.DV=BdH.createBuffer();return b;}
function Hd(b,c){var d;Bd();d=BdH;c=c!==null?c.DV:null;d.bindBuffer(b,c);}
function Px(b,c,d){var e;Bd();e=BdH;c=c;e.bufferData(b,c,d);}
function N2(b){Bd();BdH.enableVertexAttribArray(b);}
function Dq(b,c){var d;Bd();d=BdH;b=b.iX;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new Xc;b.kv=d;}return b;}
function LU(b,c,d){var e;Bd();e=BdH;b=b.iX;e.bindAttribLocation(b,c,$rt_ustr(d));}
function Ib(b,c){var d;Bd();if(b!==null){d=BdH;b=b.kv;d.uniform1f(b,c);}}
function Ln(b,c,d,e){var f;Bd();if(b!==null){f=BdH;b=b.kv;f.uniform3f(b,c,d,e);}}
function Ud(b,c,d,e,f){var g,h;Bd();if(b!==null){g=BdH;h=b.kv;g.uniform4f(h,c,d,e,f);}}
function Q6(b,c){var d;Bd();if(b!==null){d=BdH;b=b.kv;d.uniform1i(b,c);}}
function Mf(b,c){var d,e;Bd();Bd8.set(c.data);if(b!==null){d=BdH;e=b.kv;b=Bd8;d.uniformMatrix4fv(e,!!0,b);}}
function VU(b){var c;Bd();if(b!==null&&Bd9!=b.xk){Bd9=b.xk;c=BdH;b=b.iX;c.useProgram(b);}}
function N4(b,c,d,e,f,g){Bd();BdH.vertexAttribPointer(b,c,d,!!e,f,g);}
function O6(){var b;Bd();b=new Su;b.AY=BdH.createVertexArray();b.vO=0;return b;}
function RM(b){var c;Bd();c=BdH;b=b!==null?b.AY:null;c.bindVertexArray(b);}
function AER(b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=AIs(c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(b,c,$p);}
function AIs(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gm=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IU=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaF(callback);return thread.suspend(function(){try{AWO(b,callback);}catch($e){callback.IU($rt_exception($e));}});}
function AWO(b,c){var d,e,f;Bd();d=BdC.createElement("img");e=new Qx;e.f2=d;e.x9=c;d.addEventListener("load",Cu(e,"handleEvent"));f=new Qw;f.Eh=d;f.EZ=c;d.addEventListener("error",Cu(f,"handleEvent"));e=$rt_str(ANF(b,"image/png"));if(e===null)CM(c,null);else{b=$rt_ustr(e);d.src=b;}}
function Lq(){var b,c,d;Bd();b=BdD.clientWidth;if(b!=BdZ){c=BdE;d=b;c.width=d;c=BdG;d=b;c.width=d;BdZ=b;}return b;}
function Mz(){var b,c,d;Bd();b=BdD.clientHeight;if(b!=Bd0){c=BdE;d=b;c.height=d;c=BdG;d=b;c.height=d;Bd0=b;}return b;}
function Ku(){Bd();return Long_fromInt(1073741824);}
function JW(){Bd();return Long_fromInt(1073741824);}
function Kb(){Bd();return Long_ZERO;}
function UB(b){Bd();return b.byteLength;}
function TX(b){Bd();return b<=Bey.data.length&&b>=0?Bey.data[b]:(-1);}
function ACx(b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();d=LF(b,47);if(d>0){e=Ev(b,0,d);$p=2;continue _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeE;d=0;f=f.buffer;$p=1;case 1:AXO(e,b,d,f);if(C()){break _;}return;case 2:AI_(e);if(C()){break _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeE;d=0;f=f.buffer;$p=1;continue _;default:E_();}}C3().s(b,c,d,e,f,$p);}
function ALE(b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=BeE;$p=1;case 1:$z=A_J(c,b);if(C()){break _;}b=$z;if(b===null)d=null;else{d=$rt_createByteArray(b.byteLength);e=d.data;b=new Uint8Array(b);f=0;g=e.length;while(f<g){e[f]=b[f]<<24>>24;f=f+1|0;}}return d;default:E_();}}C3().s(b,c,d,e,f,g,$p);}
function ANl(b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();d=BeE;$p=1;case 1:$z=A_J(d,b);if(C()){break _;}d=$z;e=LF(c,47);if(e<=0){f=BeE;e=0;$p=2;continue _;}f=Ev(c,0,e);$p=4;continue _;case 2:AXO(f,c,e,d);if(C()){break _;}c=BeE;$p=3;case 3:A5v(c,b);if(C()){break _;}return;case 4:AI_(f);if(C()){break _;}f=BeE;e=0;$p=2;continue _;default:E_();}}C3().s(b,c,d,e,f,$p);}
function AL1(b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=BeE;$p=1;case 1:A5v(c,b);if(C()){break _;}return;default:E_();}}C3().s(b,c,$p);}
function V2(){Bd();return BdJ;}
function RH(){Bd();return Bec;}
function MK(){Bd();return BdT;}
function Mp(){Bd();if(Long_gt(Long_sub(B$(),Bee),Long_fromInt(3000))&&Beg&&!(document.pointerLockElement!=null?1:0)){BdE.requestPointerLock();if(document.pointerLockElement!=null?1:0)Beg=0;}}
function PX(){Bd();return Bed;}
function Qy(b){Bd();return b.which;}
function S0(b){Bd();return TX(b);}
function NH(){Bd();return BdU;}
function SO(b){Bd();Bd2=b;return b;}
function Hj(){Bd();return Bd$;}
function JO(){Bd();return Bd_;}
function WB(b){Bd();URL.revokeObjectURL($rt_ustr(b));}
function VJ(){Bd();return Bef;}
function MS(b){Bd();Bef=b;return b;}
function PT(){Bd();return Bee;}
function ATI(){var b,c;BdB=0;BdC=null;BdD=null;BdE=null;BdF=null;BdG=null;BdH=null;BdI=null;BdJ=null;BdK=null;BdL=null;BdM=null;BdN=null;BdO=null;BdP=null;BdQ=null;BdR=null;BdS=J(B4,0);BdT=QR();BdU=QR();BdV=0;BdW=0;BdX=0.0;BdY=0.0;BdZ=0;Bd0=0;Bd1=0;Bd2=1;Bd3=0;Bd4=$rt_createIntArray(4);Bd5=new Uint8Array(new ArrayBuffer(4194304));Bd6=new Float32Array(4);Bd7=new Float32Array(9);Bd8=new Float32Array(16);Bd9=(-1);Bd$=null;Bd_=null;Bea=null;Beb=null;Bec=$rt_createBooleanArray(8);Bed=$rt_createBooleanArray(256);Bee
=Long_ZERO;Bef=0;Beg=0;Beh=0;Bei=F7();Bej=F7();Bek=null;Bel=0;Bem=0;Ben=0;Beo=QR();Bep=null;Beq=null;Ber=0;Bes=Dd();Bet=null;Beu=0.029999999329447746;Bev=Dd();Bew=0;b=J(B4,256);c=b.data;c[0]=B(28);c[1]=B(29);c[2]=B(30);c[3]=B(31);c[4]=B(32);c[5]=B(33);c[6]=B(34);c[7]=B(35);c[8]=B(36);c[9]=B(37);c[10]=B(38);c[11]=B(2);c[12]=B(39);c[13]=B(40);c[14]=B(41);c[15]=B(42);c[16]=B(43);c[17]=B(44);c[18]=B(45);c[19]=B(46);c[20]=B(47);c[21]=B(48);c[22]=B(49);c[23]=B(50);c[24]=B(51);c[25]=B(52);c[26]=B(53);c[27]=B(54);c[28]
=B(55);c[29]=B(56);c[30]=B(57);c[31]=B(58);c[32]=B(59);c[33]=B(60);c[34]=B(61);c[35]=B(62);c[36]=B(63);c[37]=B(64);c[38]=B(65);c[39]=B(66);c[40]=B(67);c[41]=B(68);c[42]=B(69);c[43]=B(70);c[44]=B(71);c[45]=B(72);c[46]=B(73);c[47]=B(74);c[48]=B(75);c[49]=B(76);c[50]=B(77);c[51]=B(78);c[52]=B(79);c[53]=B(80);c[54]=B(81);c[55]=B(82);c[56]=B(83);c[57]=B(84);c[58]=B(85);c[59]=B(86);c[60]=B(87);c[61]=B(88);c[62]=B(89);c[63]=B(90);c[64]=B(91);c[65]=B(92);c[66]=B(93);c[67]=B(94);c[68]=B(95);c[69]=B(96);c[70]=B(97);c[71]
=B(98);c[72]=B(99);c[73]=B(100);c[74]=B(101);c[75]=B(102);c[76]=B(103);c[77]=B(104);c[78]=B(105);c[79]=B(106);c[80]=B(107);c[81]=B(108);c[82]=B(109);c[83]=B(110);c[84]=B(10);c[85]=B(10);c[86]=B(10);c[87]=B(111);c[88]=B(112);c[89]=B(10);c[90]=B(10);c[91]=B(10);c[92]=B(10);c[93]=B(10);c[94]=B(10);c[95]=B(10);c[96]=B(10);c[97]=B(10);c[98]=B(10);c[99]=B(10);c[100]=B(113);c[101]=B(114);c[102]=B(115);c[103]=B(116);c[104]=B(117);c[105]=B(118);c[106]=B(10);c[107]=B(10);c[108]=B(10);c[109]=B(10);c[110]=B(10);c[111]=
B(10);c[112]=B(119);c[113]=B(120);c[114]=B(10);c[115]=B(10);c[116]=B(10);c[117]=B(10);c[118]=B(10);c[119]=B(10);c[120]=B(10);c[121]=B(121);c[122]=B(10);c[123]=B(122);c[124]=B(10);c[125]=B(123);c[126]=B(10);c[127]=B(10);c[128]=B(10);c[129]=B(10);c[130]=B(10);c[131]=B(10);c[132]=B(10);c[133]=B(10);c[134]=B(10);c[135]=B(10);c[136]=B(10);c[137]=B(10);c[138]=B(10);c[139]=B(10);c[140]=B(10);c[141]=B(124);c[142]=B(10);c[143]=B(10);c[144]=B(125);c[145]=B(126);c[146]=B(127);c[147]=B(128);c[148]=B(129);c[149]=B(130);c[150]
=B(131);c[151]=B(132);c[152]=B(10);c[153]=B(10);c[154]=B(10);c[155]=B(10);c[156]=B(133);c[157]=B(134);c[158]=B(10);c[159]=B(10);c[160]=B(10);c[161]=B(10);c[162]=B(10);c[163]=B(10);c[164]=B(10);c[165]=B(10);c[166]=B(10);c[167]=B(135);c[168]=B(10);c[169]=B(10);c[170]=B(10);c[171]=B(10);c[172]=B(10);c[173]=B(10);c[174]=B(10);c[175]=B(10);c[176]=B(10);c[177]=B(10);c[178]=B(10);c[179]=B(136);c[180]=B(10);c[181]=B(137);c[182]=B(10);c[183]=B(138);c[184]=B(139);c[185]=B(10);c[186]=B(10);c[187]=B(10);c[188]=B(10);c[189]
=B(10);c[190]=B(10);c[191]=B(10);c[192]=B(10);c[193]=B(10);c[194]=B(10);c[195]=B(10);c[196]=B(140);c[197]=B(141);c[198]=B(10);c[199]=B(142);c[200]=B(143);c[201]=B(144);c[202]=B(10);c[203]=B(145);c[204]=B(10);c[205]=B(146);c[206]=B(10);c[207]=B(147);c[208]=B(148);c[209]=B(149);c[210]=B(150);c[211]=B(151);c[212]=B(10);c[213]=B(10);c[214]=B(10);c[215]=B(10);c[216]=B(10);c[217]=B(10);c[218]=B(152);c[219]=B(153);c[220]=B(154);c[221]=B(155);c[222]=B(156);c[223]=B(157);c[224]=B(10);c[225]=B(10);c[226]=B(10);c[227]
=B(10);c[228]=B(10);c[229]=B(10);c[230]=B(10);c[231]=B(10);c[232]=B(10);c[233]=B(10);c[234]=B(10);c[235]=B(10);c[236]=B(10);c[237]=B(10);c[238]=B(10);c[239]=B(10);c[240]=B(10);c[241]=B(10);c[242]=B(10);c[243]=B(10);c[244]=B(10);c[245]=B(10);c[246]=B(10);c[247]=B(10);c[248]=B(10);c[249]=B(10);c[250]=B(10);c[251]=B(10);c[252]=B(10);c[253]=B(10);c[254]=B(10);c[255]=B(10);Bex=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=14;c[9]=15;c[10]
=(-1);c[11]=(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]
=(-1);c[63]=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]=52;c[111]=53;c[112]=(-1);c[113]
=(-1);c[114]=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]=(-1);c[154]=(-1);c[155]=(-1);c[156]
=(-1);c[157]=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]=(-1);c[198]=(-1);c[199]=(-1);c[200]
=(-1);c[201]=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;Bey=b;Bez=0;BeA=new Int32Array(new ArrayBuffer(2100000));BeB=0;}
function X4(b){window.currentContext=b;}
function ANU(){if (!ANU.$native){
ANU.$native=function(){return (function(){window.eagsFileChooser = {
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
};})();};ANU=ANU.$native;}return ANU();}
function AEK(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function ANF(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function ANz(b){if(b.commit)b.commit();}
function SP(){}
function Jy(){}
function NS(){}
function Hy(){D.call(this);this.wa=null;}
function BeF(a){var b=new Hy();Wa(b,a);return b;}
function Wa(a,b){if(b!==null){a.wa=b;return;}b=new EE;O(b);M(b);}
function ABe(){Hy.call(this);this.xX=null;}
function A8$(){var a=new ABe();A2Z(a);return a;}
function A2Z(a){var b;a.wa=a;b=new Lg;Gz(b,16);a.xX=b;a.wa=a.xX;}
function AK5(a){return;}
function AEv(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;IT(a.xX,b,c,d);return;}}f=new BO;O(f);M(f);}
function Lt(){var a=this;Hy.call(a);a.mx=null;a.FM=0;a.yd=0;}
function AFw(a){var $$je;a:{if(a.mx===null)Kd(a);else{try{AK5(a.mx);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}Kd(a);}}}
function Hl(a,b){if(b===null)b=Uj(null);Yo(a,b);}
function SI(a){Hl(a,B(158));if(a.yd)AFw(a);}
function AAA(a,b){ABM(a,Uj(b));}
function ABM(a,b){Hl(a,b);SI(a);}
function Kd(a){a.FM=1;}
function ARX(a,b){AAj(a,b,0,b.data.length);}
function AAj(a,b,c,d){var $$je;a:{if(a.mx===null)Kd(a);else{try{AEv(a.mx,b,c,d);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}Kd(a);}}}
function Yo(a,b){ARX(a,Nq(b));}
function AFa(){D.call(this);}
function BeG(){var a=new AFa();AV6(a);return a;}
function AV6(a){return;}
function AFP(){D.call(this);}
function LY(){}
function Il(){var a=this;D.call(a);a.cB=null;a.cc=0;a.bB=0;a.bf=null;a.A=null;a.dV=null;a.f=null;a.c5=null;a.kW=null;a.bs=0;a.bo=null;a.e8=null;a.D=null;a.ji=null;a.eT=null;a.bO=0;a.c9=0;a.Hd=null;a.FW=0;a.nV=null;a.h7=0;a.Gr=null;a.ce=null;a.k=null;a.yh=null;a.C7=null;a.BD=null;a.hx=0;a.lx=null;a.gP=Long_ZERO;a.bp=0;a.cn=0;a.cT=0;a.dA=Long_ZERO;}
var BeH=null;var BeI=0;var Bc9=null;function AIn(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.k=A_9(a);b=new KH;c=a.k;BeJ=Dd();b.zh=Dd();b.kw=Rb(1);b.ha=WK(1048576);b.lV=WK(1048576);b.Ca=Ci();b.sS=0;b.DU=0;b.wG=c;a.bo=b;c=new Wc;d=a.k;b=B(159);e=a.bo;$p=1;case 1:AOG(c,d,b,e);if(C()){break _;}a.e8=c;$p=2;case 2:Yl(a);if(C()){break _;}a.yh=new Qg;Ei(a,B(160));Ba(3553);Bd();BdH.clearDepth((-1.0));Ba(2929);HG(515);Ba(3008);Sp(516,
0.10000000149011612);BdH.cullFace(1029);C$(5889);C9();C$(5888);Ei(a,B(161));G5(a.bo,a.BD);G5(a.bo,a.C7);G5(a.bo,Bat());G5(a.bo,BcB());G5(a.bo,AVE(0));G5(a.bo,AVE(1));a.dV=BaS(a,a.bo);FM(0,0,a.cc,a.bB);e=Bc9;b=LL();c=B(162);d=B(163);$p=3;case 3:ARW(e,b,c,d);if(C()){break _;}b=new OV;c=a.A;d=a.bo;b.cD=J(J2,3);b.ss=new Dz;if(c!==null)b.mR=c;b.jc=d;f=0;while(f<3){b.cD.data[f]=Ci();f=f+1|0;}a.c5=b;Ei(a,B(164));b=new Nn;M_(b);b.g5=Ci();b.vr=new Dz;b.FR=null;b.rT=0;b.IE=1.0;b.b2=a;a.nV=b;return;default:E_();}}C3().s(a,
b,c,d,e,f,$p);}
function Yl(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=FG(a.cc,a.bB);c=b.fL;d=b.fH;D4(16640);C$(5889);C9();Im(0.0,c,d,0.0,1000.0,3000.0);C$(5888);C9();Bw(0.0,0.0,(-2000.0));FM(0,0,a.cc,a.bB);Hx(0.0,0.0,0.0,0.0);Bb(2896);Bb(2912);Ba(3553);BA();e=BeK;f=3553;b=a.bo;g=B(165);$p=1;case 1:$z=AHs(b,g);if(C()){break _;}d=$z;Cp(f,d);BU(1.0,1.0,1.0,1.0);Bz(e);ES(e,4210752);G(e,0.0,a.bB,0.0,0.0,a.bB/32.0
+0.0);G(e,a.cc,a.bB,0.0,a.cc/32.0,a.bB/32.0+0.0);G(e,a.cc,0.0,0.0,a.cc/32.0,0.0);G(e,0.0,0.0,0.0,0.0,0.0);Br(e);Ba(3008);Sp(516,0.10000000149011612);Cy(a.e8,B(166),8,(a.bB/2|0)-16|0,(-1));return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADS(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D instanceof Rt)return;if(a.D!==null){c=a.D;$p=1;continue _;}if(b===null&&a.A===null)b=LL();else if(b===null&&a.f.bU<=0){b=new Mk;DQ(b);}a.D=b;if(b===null){$p=2;continue _;}WY(a);c=FG(a.cc,a.bB);d=c.fL;e=c.fH;$p=3;continue _;case 1:c.ps();if(C()){break _;}if(b===null&&a.A===null)b=LL();else if(b===null&&a.f.bU<=0){b=new Mk;DQ(b);}a.D=b;if(b===null){$p=2;continue _;}WY(a);c
=FG(a.cc,a.bB);d=c.fL;e=c.fH;$p=3;continue _;case 2:AFh(a);if(C()){break _;}return;case 3:AP7(b,a,d,e);if(C()){break _;}a.h7=0;return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ARW(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=new UC;DQ(e);e.qu=Ci();e.Ep=b;e.Au=c;e.At=d;$p=1;case 1:ADS(a,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Ei(a,b){var c,d,e,f;BW();Bd();c=BdH.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(167);break a;case 1281:d=B(168);break a;case 1282:d=B(169);break a;case 1285:d=B(170);break a;default:d=B(171);break a;}d=B(172);}Cg(DT(),B(173));e=DT();f=new T;V(f);Cg(e,U(H(H(f,B(174)),b)));b=DT();e=new T;V(e);Cg(b,U(H(H(Be(e,c),B(12)),d)));}}
function Yf(a){var b,c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hx=1;$p=1;case 1:AIn(a);if(C()){break _;}b=B$();c=0;if(!a.hx)return;BeL=0;BeM=0;if(!a.bs)FN(a.bf);else{d=a.bf.cX;FN(a.bf);a.bf.cX=d;}e=0;if(e<a.bf.i4){a.bO=a.bO+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cX=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GQ(a.cB,a.bf.cX);f=a.eT;d=a.bf.cX;$p
=4;continue _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;continue _;case 2:AFA(a);if(C()){break _;}e=e+1|0;if(e<a.bf.i4){a.bO=a.bO+1|0;continue _;}Ei(a,B(175));if(a.bs)a.bf.cX=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GQ(a.cB,a.bf.cX);f=a.eT;d=a.bf.cX;$p=4;continue _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;continue _;case 3:$z=AIk(f);if(C()){break _;}g=$z;if(g){f=a.A;continue _;}if(!a.h7){GQ(a.cB,a.bf.cX);f=a.eT;d=a.bf.cX;$p=4;continue _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;continue _;case 4:AFL(f,
d);if(C()){break _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;case 5:Xy();if(C()){break _;}$p=6;case 6:AUT();if(C()){break _;}if(!(Lq()==a.cc&&Mz()==a.bB)){a.cc=BdE.width;a.bB=BdE.height;if(a.cc<=0)a.cc=1;if(a.bB<=0)a.bB=1;g=a.cc;h=a.bB;if(g<=0)g=1;if(h<=0)h=1;a.cc=g;a.bB=h;if(a.D!==null){f=FG(g,h);h=f.fL;g=f.fH;f=a.D;$p=8;continue _;}}if(a.k.mo){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){f=$$je;}else{throw $$e;}}f.tC();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.n9()
?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new T;V(f);f=H(Be(f,c),B(177));Tk();a.lx=U(H(Be(f,BeN),B(178)));BeN=0;c=0;b=i;}if(!a.hx)return;BeL=0;BeM=0;if(!a.bs)FN(a.bf);else{d=a.bf.cX;FN(a.bf);a.bf.cX=d;}e=0;if(e<a.bf.i4){a.bO=a.bO+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cX=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GQ(a.cB,a.bf.cX);f=a.eT;d=a.bf.cX;$p=4;continue _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;continue _;case 7:a:{try{AKD(i);if(C())
{break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){f=$$je;}else{throw $$e;}}f.tC();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.n9()?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new T;V(f);f=H(Be(f,c),B(177));Tk();a.lx=U(H(Be(f,BeN),B(178)));BeN=0;c=0;b=i;}if(!a.hx)return;BeL=0;BeM=0;if(!a.bs)FN(a.bf);else{d=a.bf.cX;FN(a.bf);a.bf.cX=d;}e=0;if(e<a.bf.i4){a.bO=a.bO+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cX=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if
(!a.h7){GQ(a.cB,a.bf.cX);f=a.eT;d=a.bf.cX;$p=4;continue _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;continue _;case 8:AP7(f,a,h,g);if(C()){break _;}if(a.k.mo){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){f=$$je;}else{throw $$e;}}f.tC();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.n9()?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new T;V(f);f=H(Be(f,c),B(177));Tk();a.lx=U(H(Be(f,BeN),B(178)));BeN=0;c=0;b=i;}if(!a.hx)return;BeL=0;BeM=
0;if(!a.bs)FN(a.bf);else{d=a.bf.cX;FN(a.bf);a.bf.cX=d;}e=0;if(e<a.bf.i4){a.bO=a.bO+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cX=1.0;Ba(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GQ(a.cB,a.bf.cX);f=a.eT;d=a.bf.cX;$p=4;continue _;}if(BN(33)&&BN(7))FV(a);else a.gP=EG();$p=5;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function FV(a){var b,c,d,e,f,g,h,i,j,k,l;if(Long_eq(a.gP,Long_fromInt(-1)))a.gP=EG();b=EG();c=BeH.data;d=BeI;BeI=d+1|0;c[d&(BeH.data.length-1|0)]=Long_sub(b,a.gP);a.gP=b;D4(256);C$(5889);C9();Im(0.0,a.cc,a.bB,0.0,1000.0,3000.0);C$(5888);C9();Bw(0.0,0.0,(-2000.0));Bb(3553);BA();e=BeK;Gh(e,7);ES(e,538968064);Bf(e,0.0,a.bB-100|0,0.0);Bf(e,0.0,a.bB,0.0);Bf(e,BeH.data.length,a.bB,0.0);Bf(e,BeH.data.length,a.bB-100|0,0.0);Br(e);f=Long_ZERO;d=0;while(d<BeH.data.length){f=Long_add(f,BeH.data[d]);d=d+1|0;}d=Long_div(Long_div(f,
Long_fromInt(200000)),Long_fromInt(BeH.data.length)).lo;Gh(e,7);ES(e,541065216);Bf(e,0.0,a.bB-d|0,0.0);Bf(e,0.0,a.bB,0.0);Bf(e,BeH.data.length,a.bB,0.0);Bf(e,BeH.data.length,a.bB-d|0,0.0);Br(e);Gh(e,1);g=0;while(g<BeH.data.length){h=(((g-BeI|0)&(BeH.data.length-1|0))*255|0)/BeH.data.length|0;i=Bj(h,h)/255|0;d=Bj(i,i)/255|0;j=Bj(d,d)/255|0;ES(e,(((-16777216)+(Bj(j,j)/255|0)|0)+(d*256|0)|0)+(h*4096|0)|0);k=Long_div(BeH.data[g],Long_fromInt(200000));l=g+0.5;Bf(e,l,Long_toNumber(Long_sub(Long_fromInt(a.bB),k))+
0.5,0.0);Bf(e,l,a.bB+0.5,0.0);g=g+1|0;}Br(e);Ba(3553);}
function AFh(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Od()&&!a.bp){a.bp=1;Yw(a.yh);b=null;$p=1;continue _;}return;case 1:ADS(a,b);if(C()){break _;}a.cn=a.bO+10000|0;return;default:E_();}}C3().s(a,b,$p);}
function WY(a){if(a.bp){if(a.f!==null)ARG(a.f);a.bp=0;AFy(a.yh);}}
function AK$(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D!==null)return;b=Bcp();$p=1;case 1:ADS(a,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function AAD(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.cB.DR&&!(!b&&a.c9>0)){if(c&&a.ce!==null&&!a.ce.k4&&!b){d=a.ce.h9;e=a.ce.h$;f=a.ce.h_;g=a.cB;b=a.ce.hI;$p=1;continue _;}ALO(a.cB);}return;case 1:YJ(g,d,e,f,b);if(C()){break _;}g=a.c5;b=a.ce.hI;$p=2;case 2:YY(g,d,e,f,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABY(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(!b&&a.c9>0)){if(!b)Pg(a.eT.iG);a:{if(a.ce!==null){if(a.ce.k4!=1){if(a.ce.k4)break a;c=a.ce.h9;d=a.ce.h$;e=a.ce.h_;f=a.ce.hI;L();g=BeO.data;h=a.A;$p=1;continue _;}if(!b){h=a.f;i=a.ce.ny;$p=2;continue _;}if(b==1)Vk(a.f,a.ce.ny);}else if(!b&&!(a.cB instanceof Du))a.c9=10;}if
(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=a.f;$p=5;continue _;}}}return;case 1:$z=ACt(h,c,d,e);if(C()){break _;}k=$z;j=g[k];if(!b){h=a.A;k=a.ce.hI;$p=4;continue _;}l=D9(a.f.K);h=a.A;$p=3;continue _;case 2:ADt(h,i);if(C()){break _;}if(b==1)Vk(a.f,a.ce.ny);if(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=a.f;$p=5;continue _;}}return;case 3:$z=ACt(h,c,d,e);if(C()){break _;}k=$z;if(k>0){h=BeO.data[k];i=a.A;j=a.f;$p=6;continue _;}if(l===null)return;m=l.q;h=a.f;i=a.A;$p=8;continue _;case 4:ABG(h,c,d,e,k);if(C())
{break _;}if(j===BeP&&a.f.AG<100){if(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=a.f;$p=5;continue _;}}return;}h=a.cB;$p=7;continue _;case 5:b:{$z=ABc(h,i,j);if(C()){break _;}i=$z;if(i===h){if(i===null)break b;if(i.q==d)break b;}a.f.K.bg.data[a.f.K.bM]=i;AM7(a.eT.iG);if(!i.q)a.f.K.bg.data[a.f.K.bM]=null;}return;case 6:$z=h.lB(i,c,d,e,j);if(C()){break _;}k=$z;if(k)return;if(l===null)return;m=l.q;h=a.f;i=a.A;$p=8;continue _;case 7:AE2(h,c,d,e);if(C()){break _;}if(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=
a.f;$p=5;continue _;}}return;case 8:$z=AJf(l,h,i,c,d,e,f);if(C()){break _;}c=$z;if(c)Pg(a.eT.iG);if(!l.q)a.f.K.bg.data[a.f.K.bM]=null;else if(l.q!=m)AGJ(a.eT.iG);if(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=a.f;$p=5;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AHK(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ce===null)return;b=a.A;c=a.ce.h9;d=a.ce.h$;e=a.ce.h_;$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;L();if(c==BeQ.b)c=BeR.b;if(c==BeS.b)c=BeT.b;if(c==BeP.b)c=BeU.b;ARh(a.f.K,c,a.cB instanceof Du);return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AFA(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Bc9.k.bw)Bb(2912);AKx(a.nV);if(!a.bs&&a.A!==null){b=a.cB;$p=2;continue _;}c=3553;d=a.bo;b=B(179);$p=1;case 1:$z=AHs(d,b);if(C()){break _;}e=$z;Cp(c,e);if(a.D===null&&a.f!==null&&a.f.bU<=0){b=null;$p=3;continue _;}if(a.D!==null&&!a.D.pQ){if(a.D!==null)a.cn=a.bO+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i0=a.k.jT;if(!a.bs&&!a.k.bw)
{b=a.eT;$p=10;continue _;}if(!a.bs&&!a.k.bw)HR(a.dV);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GE(a)){b=a.A;$p=18;continue _;}if(!a.bs&&!a.k.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=20;continue _;}if(!a.bs&&!a.k.bw){b=a.c5;$p=21;continue _;}}a.dA=B$();return;}a:while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp
?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.k.cC=a.k.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.k.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.k.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.k.f$.bJ)continue;Ea(a.k,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if(Long_gt(Long_sub(B$(),a.dA),Long_fromInt(200)))continue;c
=G1();if(c)F2(a.f.K,c);b:{if(a.D!==null){if(a.D===null)break b;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=7;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx())break a;}}$p=16;continue _;case 2:AI1(b);if(C()){break _;}c=3553;d=a.bo;b=B(179);$p=1;continue _;case 3:ADS(a,b);if(C()){break _;}if(a.D!==null&&!a.D.pQ){if(a.D!==null)a.cn=a.bO+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i0=a.k.jT;if(!a.bs&&!a.k.bw){b=a.eT;$p=10;continue _;}if
(!a.bs&&!a.k.bw)HR(a.dV);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GE(a)){b=a.A;$p=18;continue _;}if(!a.bs&&!a.k.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=20;continue _;}if(!a.bs&&!a.k.bw){b=a.c5;$p=21;continue _;}}a.dA=B$();return;}c:while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,
Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.k.cC=a.k.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.k.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.k.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.k.f$.bJ)continue;Ea(a.k,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if(Long_gt(Long_sub(B$(),a.dA),Long_fromInt(200)))continue;c=G1();if(c)F2(a.f.K,c);d:{if
(a.D!==null){if(a.D===null)break d;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=7;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx())break c;}}$p=16;continue _;case 4:AG5(b);if(C()){break _;}if(a.D!==null)a.D.rz();if(a.A!==null){a.A.i0=a.k.jT;if(!a.bs&&!a.k.bw){b=a.eT;$p=10;continue _;}if(!a.bs&&!a.k.bw)HR(a.dV);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GE(a)){b=a.A;$p=18;continue _;}if(!a.bs&&!a.k.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=20;continue _;}if
(!a.bs&&!a.k.bw){b=a.c5;$p=21;continue _;}}a.dA=B$();return;case 5:Zw(b);if(C()){break _;}while(true){while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6))
{a.k.cC=a.k.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.k.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.k.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.k.f$.bJ)continue;Ea(a.k,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if(Long_gt(Long_sub(B$(),a.dA),Long_fromInt(200)))continue;else break;}c=G1();if(c)F2(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;continue _;}}if(!a.bp&&Cx()){$p=7;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if
(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}$p=16;continue _;case 6:ASx(b);if(C()){break _;}while(true){e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()==a.k.f$.bJ)Ea(a.k,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;else break;}if
(a.D!==null){b=a.D;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.k.cC=a.k.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.k.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()!=a.k.gj.bJ)continue;else{b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}}$p=8;continue _;case 7:AFh(a);if(C()){break _;}while(true){while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0
&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.k.cC=a.k.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.k.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.k.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.k.f$.bJ)continue;Ea(a.k,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if
(Long_gt(Long_sub(B$(),a.dA),Long_fromInt(200)))continue;else break;}c=G1();if(c)F2(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}$p=16;continue _;case 8:AK$(a);if(C()){break _;}while(true){if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.k.cC=a.k.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.k.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if
(Bg()==a.k.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()==a.k.f$.bJ)Ea(a.k,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()!=1)continue;else break;}continue _;case 9:AAD(a,
c,e);if(C()){break _;}if(a.D!==null)a.cn=a.bO+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i0=a.k.jT;if(!a.bs&&!a.k.bw){b=a.eT;$p=10;continue _;}if(!a.bs&&!a.k.bw)HR(a.dV);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GE(a)){b=a.A;$p=18;continue _;}if(!a.bs&&!a.k.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=20;continue _;}if(!a.bs&&!a.k.bw){b=a.c5;$p=21;continue _;}}a.dA=B$();return;case 10:AIN(b);if(C()){break _;}if(!a.bs&&!a.k.bw)HR(a.dV);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GE(a))
{b=a.A;$p=18;continue _;}if(!a.bs&&!a.k.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=20;continue _;}if(!a.bs&&!a.k.bw){b=a.c5;$p=21;continue _;}a.dA=B$();return;case 11:ABY(a,c);if(C()){break _;}a.cn=a.bO;while(true){if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c
=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.k.cC=a.k.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.k.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.k.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.k.f$.bJ)continue;Ea(a.k,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if(Long_gt(Long_sub(B$(),a.dA),
Long_fromInt(200)))continue;else break;}c=G1();if(c)F2(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(CV())continue;if(!Cx())continue;else{c=0;continue _;}}$p=7;continue _;case 12:ABY(a,c);if(C()){break _;}a.cn=a.bO;if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;case 13:APd(b);if(C()){break _;}if(!a.bs&&!GE(a)){b=a.A;$p=18;continue _;}if(!a.bs&&!a.k.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f
=K(a.f.e);$p=20;continue _;}if(!a.bs&&!a.k.bw){b=a.c5;$p=21;continue _;}a.dA=B$();return;case 14:ABY(a,c);if(C()){break _;}a.cn=a.bO;while(true){if(CV()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b
=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.k.cC=a.k.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.k.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.k.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.k.f$.bJ)continue;Ea(a.k,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if(Long_gt(Long_sub(B$(),a.dA),Long_fromInt(200)))continue;else break;}c=G1();if(c)F2(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else
{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()!=1)continue;if(!Cx())continue;else{c=1;continue _;}}$p=7;continue _;case 15:ABY(a,c);if(C()){break _;}a.cn=a.bO;c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;case 16:AHK(a);if(C()){break _;}while(true){while(true){if(!Fx()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c
=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.k.cC=a.k.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.k.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()==a.k.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()!=a.k.f$.bJ)continue;Ea(a.k,4,!BN(42)&&!BN(54)?1:(-1));}$p=8;continue _;}if(Long_gt(Long_sub(B$(),a.dA),
Long_fromInt(200)))continue;else break;}c=G1();if(c)F2(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=7;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}continue _;case 17:ADS(a,b);if(C()){break _;}while(true){if(Bg()==a.k.gj.bJ){b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;$p=19;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()==a.k.f$.bJ)Ea(a.k,4,!BN(42)&&!BN(54)
?1:(-1));while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.k.cC=a.k.cC?0:1;a.cT=a.cT?0:1;}if(Bg()!=a.k.fs.bJ)continue;else{b=E7(a.f.K);continue _;}}$p=8;continue _;case 18:X1(b);if(C())
{break _;}if(!a.bs&&!a.k.bw){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=20;continue _;}if(!a.bs&&!a.k.bw){b=a.c5;$p=21;continue _;}a.dA=B$();return;case 19:AQt(b,d,c);if(C()){break _;}while(true){e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bg()==a.k.f$.bJ)Ea(a.k,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(B9(0)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bO-a.cn|0)>=a.bf.c7/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=9;continue _;}Et(a.f,
Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.k.cC=a.k.cC?0:1;a.cT=a.cT?0:1;}if(Bg()==a.k.fs.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bg()!=a.k.gj.bJ)continue;else{b=a.f;d=Em(a.f.K,a.f.K.bM,1);c=0;continue _;}}$p=8;continue _;case 20:AE8(b,c,e,f);if(C()){break _;}if(!a.bs&&!a.k.bw){b=a.c5;$p=21;continue _;}a.dA=B$();return;case 21:AAU(b);if(C()){break _;}a.dA=B$();return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function GE(a){return 0;}
function AHV(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:ABH(a,c);if(C()){break _;}c=new GG;d=Gw(new Dz);$p=2;case 2:QU(c,b,d);if(C()){break _;}if(!c.tD){b=B(180);$p=3;continue _;}b=B(181);$p=4;continue _;case 3:AF2(a,c,b);if(C()){break _;}return;case 4:AF2(a,c,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ABH(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=B(3);$p=1;case 1:AF2(a,b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AF2(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.A!==null){d=a.A;e=a.ji;$p=1;continue _;}a.A=b;if(b===null){a.dA=Long_ZERO;return;}b.C4=a.e8;a.f=null;b.bi=a.f;$p=2;continue _;case 1:AJg(d,e);if(C()){break _;}a.A=b;if(b===null){a.dA=Long_ZERO;return;}b.C4=a.e8;a.f=null;b.bi=a.f;$p=2;case 2:ANZ(a,c);if(C()){break _;}if(a.f===null){a.f=A6H(a,b,a.kW);c=a.f;$p=3;continue _;}a.f.hW=VY(a.k);if(a.dV!==null)QX(a.dV,
b);if(a.c5!==null)OX(a.c5,b);b.bi=a.f;$p=4;continue _;case 3:AK6(c);if(C()){break _;}Q_(a.cB,a.f);a.f.hW=VY(a.k);if(a.dV!==null)QX(a.dV,b);if(a.c5!==null)OX(a.c5,b);b.bi=a.f;$p=4;case 4:AGo(b);if(C()){break _;}if(!b.tD){a.dA=Long_ZERO;return;}c=a.ji;$p=5;case 5:AJg(b,c);if(C()){break _;}a.dA=Long_ZERO;return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ANZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOZ(a.ji,b);b=a.ji;c=B(182);$p=1;case 1:AR3(b,c);if(C()){break _;}d=128;e=289;f=(-128);g=f;while(g<=d){h=a.A.fi;i=a.A.fh;if(a.A.bi!==null){h=a.A.bi.d|0;i=a.A.bi.e|0;}j=f;if(j<=d){b=a.ji;k=0+1|0;l=(0*100|0)/e|0;$p=4;continue _;}g=g+16|0;}b=a.ji;c=B(183);$p=2;case 2:AR3(b,
c);if(C()){break _;}l=2000;BeV=1;d=0;if(d>=l){V_(a.A);BeV=0;return;}b=a.A;m=1;$p=3;case 3:ABn(b,m);if(C()){break _;}d=d+1|0;if(d>=l){V_(a.A);BeV=0;return;}b=a.A;m=1;continue _;case 4:XE(b,l);if(C()){break _;}b=a.A;l=h+g|0;m=64;n=i+j|0;$p=5;case 5:ACt(b,l,m,n);if(C()){break _;}b=a.A;$p=6;case 6:$z=AIk(b);if(C()){break _;}l=$z;if(l){b=a.A;continue _;}j=j+16|0;m=k;while(true){if(j<=d){b=a.ji;k=m+1|0;l=(m*100|0)/e|0;$p=4;continue _;}g=g+16|0;if(g>d)break;h=a.A.fi;i=a.A.fh;if(a.A.bi!==null){h=a.A.bi.d|0;i=a.A.bi.e
|0;}j=f;}b=a.ji;c=B(183);$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Mg(a){return ALj(a.dV);}
function Oi(a){return XZ(a.dV);}
function MH(a){var b;b=new T;V(b);return U(H(H(H(H(b,B(184)),Xu(a.c5)),B(185)),AN8(a.A)));}
function ASu(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.f!==null&&a.A!==null){b=a.f;$p=5;continue _;}b=a.A;$p=1;case 1:AP4(b);if(C()){break _;}a.f=A6H(a,a.A,a.kW);b=a.f;$p=2;case 2:AK6(b);if(C()){break _;}Q_(a.cB,a.f);if(a.A!==null){a.A.bi=a.f;b=a.A;$p=4;continue _;}a.f.hW=VY(a.k);b=B(186);$p=3;case 3:ANZ(a,b);if(C()){break _;}return;case 4:AGo(b);if(C()){break _;}a.f.hW=VY(a.k);b=B(186);$p=3;continue _;case 5:Ca(b);if(C()){break _;}b=a.A;$p=1;continue _;default:
E_();}}C3().s(a,b,$p);}
function AIF(){return Bc9;}
function ZW(){BeH=$rt_createLongArray(512);BeI=0;}
function ZC(){D.call(this);}
function BeW(){var a=new ZC();A25(a);return a;}
function A25(a){return;}
function Od(){var b,c;Bd();b=document.pointerLockElement!=null?1:0;c=Beh;Beh=b;if(!c&&b){BdX=0.0;BdY=0.0;}a:{b:{if(Bd2){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AUT(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();ANz(BdH);b=BdF;c=BdG;d=BdE.width;e=BdE.height;b.drawImage(c,0.0,0.0,d,e);f=BdE.clientWidth;g=BdE.clientHeight;if(!(f==BdZ&&g==Bd0)){BdZ=f;Bd0=g;c=BdG;h=f;c.width=h;c=BdG;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){}else{throw $$e;}}return;case 1:a:{try{AKD(i);if
(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){}else{throw $$e;}}}return;default:E_();}}C3().s(b,c,d,e,f,g,h,i,$p);}
function Mi(){var a=this;D.call(a);a.oi=null;a.F0=null;a.Gw=null;}
var BeX=null;function Bbh(){Bbh=Bt(Mi);A_B();}
function A_B(){var b;BeX=Ci();b=BeX;L();S(b,BeU);S(BeX,BeY);S(BeX,BeZ);S(BeX,BeR);S(BeX,Be0);S(BeX,Be1);S(BeX,Be2);S(BeX,Be3);S(BeX,BeT);S(BeX,Be4);S(BeX,Be5);S(BeX,Be6);S(BeX,Be7);S(BeX,Be8);S(BeX,Be9);S(BeX,Be$);S(BeX,Be_);S(BeX,Bfa);S(BeX,Bfb);S(BeX,Bfc);S(BeX,Bfd);S(BeX,Bfe);S(BeX,Bff);S(BeX,Bfg);S(BeX,Bfh);S(BeX,Bfi);S(BeX,Bfj);S(BeX,Bfk);ABJ(DT(),BeX.p);}
function Gk(){var a=this;D.call(a);a.JD=Long_ZERO;a.Ec=0;a.DK=Long_ZERO;a.wY=0;a.mN=null;a.CP=null;a.FL=null;a.wA=0;a.yz=null;}
var Bfl=null;var Bc4=null;var Bfm=Long_ZERO;var Bfn=0;function Bfo(){var a=new Gk();AHA(a);return a;}
function Bce(a){var b=new Gk();TM(b,a);return b;}
function A_5(a,b){var c=new Gk();NZ(c,a,b);return c;}
function AHA(a){NZ(a,null,null);}
function TM(a,b){NZ(a,null,b);}
function NZ(a,b,c){var d;a.mN=new D;a.wA=1;a.FL=c;a.yz=b;d=Bfm;Bfm=Long_add(d,Long_fromInt(1));a.JD=d;}
function Tf(a){var b;b=new Wu;b.zO=a;AZK(b);}
function Fs(b){if(Bc4!==b)Bc4=b;Bc4.DK=B$();}
function ARl(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.yz===null)return;b=a.yz;$p=1;case 1:Yf(b);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function ASH(){return Bc4;}
function A1j(a,b){a.Ec=b;}
function Xy(){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=Bc4;c=b.wY+1|0;b.wY=c;if(c<30)return;Bc4.wY=0;if(Long_ge(Long_add(b.DK,Long_fromInt(100)),B$()))return;$p=1;case 1:ALM(b);if(C()){break _;}return;default:E_();}}C3().s(b,c,$p);}
function ALM(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gm=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IU=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaF(callback);return thread.suspend(function(){try{A3U(b,callback);}catch($e){callback.IU($rt_exception($e));}});}
function A3U(b,c){var d;d=new ST;d.B6=b;d.B5=c;QV(d);}
function AKD(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gm=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IU=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaF(callback);return thread.suspend(function(){try{AVo(b,callback);}catch($e){callback.IU($rt_exception($e));}});}
function AVo(b,c){var d,e;d=Bc4;e=new Pc;e.wm=d;e.A4=c;e.Jn=AFD(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.CP=e;}
function Y3(){Bfl=Bce(B(187));Bc4=Bfl;Bfm=Long_fromInt(1);Bfn=1;}
function DO(){}
function W3(){D.call(this);}
function Bfp(){var a=new W3();A2j(a);return a;}
function A2j(a){return;}
function ASy(a,b){b.preventDefault();b.stopPropagation();}
function ACf(a,b){ASy(a,b);}
function A$V(a,b){ACf(a,b);}
function W9(){D.call(this);}
function Bfq(){var a=new W9();AZe(a);return a;}
function AZe(a){return;}
function ARC(a,b){var c,d;c=b.button;d=RH();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;Fu(MK(),b);b.preventDefault();b.stopPropagation();Mp();}
function AIU(a,b){ARC(a,b);}
function AXE(a,b){AIU(a,b);}
function W$(){D.call(this);}
function Bfr(){var a=new W$();AXd(a);return a;}
function AXd(a){return;}
function AQp(a,b){var c,d;c=b.button;d=RH();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;Fu(MK(),b);b.preventDefault();b.stopPropagation();}
function ZN(a,b){AQp(a,b);}
function A3z(a,b){ZN(a,b);}
function W7(){D.call(this);}
function Bfs(){var a=new W7();A46(a);return a;}
function A46(a){return;}
function AOD(a,b){var c;Bd();BdV=b.offsetX;BdW=BdE.clientHeight-b.offsetY|0;c=b.movementX;BdX=BdX+c;c= -b.movementY;BdY=BdY+c;b.preventDefault();b.stopPropagation();}
function ADj(a,b){AOD(a,b);}
function ASJ(a,b){ADj(a,b);}
function W8(){D.call(this);}
function Bft(){var a=new W8();A_N(a);return a;}
function A_N(a){return;}
function AEG(a,b){PX().data[S0(Qy(b))]=1;Fu(NH(),b);b.preventDefault();b.stopPropagation();Mp();}
function AQz(a,b){AEG(a,b);}
function A3K(a,b){AQz(a,b);}
function W5(){D.call(this);}
function Bfu(){var a=new W5();A38(a);return a;}
function A38(a){return;}
function Zy(a,b){PX().data[S0(Qy(b))]=0;Fu(NH(),b);b.preventDefault();b.stopPropagation();}
function XT(a,b){Zy(a,b);}
function A2h(a,b){XT(a,b);}
function W6(){D.call(this);}
function Bfv(){var a=new W6();AXs(a);return a;}
function AXs(a){return;}
function AR7(a,b){Bd();if(Bd1&&(b.repeat?1:0))Fu(NH(),b);b.preventDefault();b.stopPropagation();}
function AK0(a,b){AR7(a,b);}
function A6w(a,b){AK0(a,b);}
function W4(){D.call(this);}
function Bfw(){var a=new W4();A23(a);return a;}
function A23(a){return;}
function AFj(a,b){Fu(MK(),b);b.preventDefault();b.stopPropagation();}
function ACu(a,b){AFj(a,b);}
function AUe(a,b){ACu(a,b);}
function Qu(){D.call(this);}
function Bfx(){var a=new Qu();A1_(a);return a;}
function A1_(a){return;}
function AFl(a,b){SO(0);}
function AMp(a,b){AFl(a,b);}
function A68(a,b){AMp(a,b);}
function Qt(){D.call(this);}
function Bfy(){var a=new Qt();A32(a);return a;}
function A32(a){return;}
function AGM(a,b){SO(1);Mp();}
function AMo(a,b){AGM(a,b);}
function AYH(a,b){AMo(a,b);}
function NO(){D.call(this);}
var Bfz=null;var BeE=null;function BfA(){var a=new NO();AD6(a);return a;}
function AD6(a){return;}
function AJN(){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(188);$p=1;case 1:$z=A3F(b);if(C()){break _;}b=$z;if(b===null){Bfz=B(171);return BfB;}if(b.E0)return BfC;if(!b.Fb&&b.xR!==null){BeE=b.xR;return BfD;}Bfz=b.uz!==null?b.uz:B(189);return BfB;default:E_();}}C3().s(b,$p);}
function AP1(b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=BeE;$p=1;case 1:$z=AUq(c,b);if(C()){break _;}b=$z;return b!==BfE?0:1;default:E_();}}C3().s(b,c,$p);}
function AI_(b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AP1(b);if(C()){break _;}c=$z;if(c)return;c=LF(b,47);if(c>0){d=Ev(b,0,c);$p=3;continue _;}d=BeE;c=1;e=new ArrayBuffer(0);$p=2;case 2:AXO(d,b,c,e);if(C()){break _;}return;case 3:AI_(d);if(C()){break _;}d=BeE;c=1;e=new ArrayBuffer(0);$p=2;continue _;default:E_();}}C3().s(b,c,d,e,$p);}
function AHC(){Bfz=B(3);BeE=null;}
function AAS(){D.call(this);}
function AYo(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function UQ(){D.call(this);}
var BeD=null;function BfF(){var a=new UQ();AQs(a);return a;}
function AQs(a){return;}
function AL$(b){var c,d,e,f,g,h,i,j,k,l,m;c=Ug(b);d=OU(c);e=$rt_createByteArray(8);NL(d,e);if(!DA(B(190),A24(e,X2(B(24))))){c=new B1;Bl(c,B(191));M(c);}GU(d);f=new PW;d=new WL;g=new Ue;OL(g);g.rR=0;h=R0(g,15,0);if(h){c=new P0;f=new T;V(f);Bl(c,U(H(H(Be(f,h),B(12)),g.b8)));M(c);}R1(d,c);d.qh=0;d.oH=0;d.Ey=1;d.Eb=0;d.wD=$rt_createByteArray(1);d.GV=$rt_createByteArray(512);d.g1=g;d.oh=$rt_createByteArray(512);d.Ey=1;d.Eb=1;AIt(f,d);g=BaW();while(true){d=GU(f);if(!DA(B(192),d)){if(AKA(f)<=0&&DA(B(193),d))return;c
=new B1;Bl(c,B(191));M(c);}i=GU(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);NL(f,j);l=H3(f);m=$rt_createByteArray(l);NL(f,m);if(DZ(BeD,i))continue;a:{ADQ(g,m,0,l);AL8(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){l=0;while(l<h){if(b[l]!=e[l]){h=0;break a;}l=l+1|0;}h=1;break a;}}h=0;}}if(!h){c=new B1;f=new T;V(f);Bl(c,U(H(H(f,B(194)),i)));M(c);}BR(BeD,i,m);if(!DA(B(195),GU(f)))break;}c=new B1;Bl(c,B(191));M(c);}
function Za(){BeD=Dd();}
function B1(){BE.call(this);}
function BfG(){var a=new B1();A3R(a);return a;}
function A3R(a){O(a);}
function Lg(){HJ.call(this);}
function BfH(){var a=new Lg();A6i(a);return a;}
function A6i(a){V(a);}
function A0M(a,b){Dx(a,b);return a;}
function A19(a,b,c,d){IT(a,b,c,d);return a;}
function AVB(a,b){Hh(a,b);return a;}
function A7C(a,b,c,d,e){J5(a,b,c,d,e);return a;}
function A$R(a,b,c){KZ(a,b,c);return a;}
function AVW(a,b,c,d,e){J5(a,b,c,d,e);return a;}
function A4b(a,b,c,d){IT(a,b,c,d);return a;}
function AIc(a,b){var c;if(b>=0&&b<a.bZ)return a.O.data[b];c=new BO;O(c);M(c);}
function Ot(a){return a.bZ;}
function A4i(a){return U(a);}
function A4s(a,b){MU(a,b);}
function A98(a,b,c){KZ(a,b,c);return a;}
function Fy(){}
function VX(){D.call(this);}
function BfI(){var a=new VX();AZi(a);return a;}
function AZi(a){return;}
function Fj(){D.call(this);this.lZ=0;}
var BfJ=null;var BfK=null;var BfL=null;var BfM=null;var BfN=null;var BfO=null;function A2g(a){var b=new Fj();AAN(b,a);return b;}
function AAN(a,b){a.lZ=b;}
function BI(b){var c;if(b>=BfM.data.length)return A2g(b);c=BfM.data[b];if(c===null){c=A2g(b);BfM.data[b]=c;}return c;}
function A$Z(a,b){if(a===b)return 1;return b instanceof Fj&&b.lZ==a.lZ?1:0;}
function A$H(a){return a.lZ;}
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
function GO(b){return AP0(b).toLowerCase().charCodeAt(0);}
function FC(b){return GN(b)&65535;}
function GN(b){return AP0(b).toUpperCase().charCodeAt(0);}
function We(b,c){if(c>=2&&c<=36){b=T$(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function T$(b){var c,d,e,f,g,h,i,j,k;if(BfK===null){if(BfN===null)BfN=AMd();c=(BfN.value!==null?$rt_str(BfN.value):null);d=new RR;d.Cz=Nq(c);e=Yi(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=Yi(d);h=h+1|0;}BfK=f;}f=BfK.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=R(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function IY(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Iu(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=IB(b);d[1]=H7(b);return c;}
function Do(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&On(b&65535))return 19;if(BfL===null){if(BfO===null)BfO=AHJ();BfL=A2J((BfO.value!==null?$rt_str(BfO.value):null));}d=BfL.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.Ak)e=f+1|0;else{if(b>=g.xb)return g.C0.data[b-g.xb|0];c=f-1|0;}}return 0;}
function Lc(b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Is(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Do(b)!=16?0:1;}
function Uq(b){switch(Do(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Qb(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Uq(b);}return 1;}
function ADb(a,b){return a.lZ-b.lZ|0;}
function A2$(a,b){return ADb(a,b);}
function AIS(){BfJ=F($rt_charcls());BfM=J(Fj,128);}
function AMd(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
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
function IV(){var a=this;D.call(a);a.cW=null;a.DR=0;}
function AJ3(a){return 1;}
function A86(a,b){return;}
function UM(){var a=this;IV.call(a);a.vX=0;a.vZ=0;a.vY=0;a.hm=0.0;a.mK=0.0;a.oj=0.0;a.na=0;a.Bb=null;a.Bx=null;}
function Q_(a,b){b.v=(-180.0);}
function A$n(a){return;}
function AFx(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cW.A;$p=1;case 1:$z=ACt(e,b,c,d);if(C()){break _;}f=$z;e=a.cW.A;$p=2;case 2:$z=AEH(e,b,c,d);if(C()){break _;}g=$z;e=a.cW.c5;$p=3;case 3:AEB(e,b,c,d);if(C()){break _;}e=a.cW.A;L();h=BeO.data;$p=4;case 4:$z=ACt(e,b,c,d);if(C()){break _;}i=$z;j=h[i];$p=5;case 5:$z=AEH(e,b,c,d);if(C()){break _;}i=
$z;k=0;$p=6;case 6:$z=APv(e,b,c,d,k);if(C()){break _;}k=$z;if(j!==null&&k){$p=7;continue _;}e=Kp(a.cW.f);if(e!==null){QC(e,f,b,c,d);if(!e.q)Jw(a.cW.f);}if(k&&M4(a.cW.f,BeO.data[f])){e=BeO.data[f];j=a.cW.A;$p=8;continue _;}return k;case 7:j.nn(e,b,c,d,i);if(C()){break _;}e=Kp(a.cW.f);if(e!==null){QC(e,f,b,c,d);if(!e.q)Jw(a.cW.f);}if(k&&M4(a.cW.f,BeO.data[f])){e=BeO.data[f];j=a.cW.A;$p=8;continue _;}return k;case 8:e.IL(j,b,c,d,g);if(C()){break _;}return k;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AE2(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cW.A;$p=1;case 1:$z=ACt(e,b,c,d);if(C()){break _;}f=$z;if(f>0&&a.hm===0.0){L();e=BeO.data[f];g=a.cW.A;h=a.cW.f;$p=3;continue _;}if(f<=0)return;L();e=BeO.data[f];g=a.cW.f;$p=2;case 2:$z=ABb(e,g);if(C()){break _;}i=$z;if(i<1.0)return;$p=4;continue _;case 3:e.q8(g,b,c,d,h);if(C()){break _;}if(f<=0)return;L();e=BeO.data[f];g
=a.cW.f;$p=2;continue _;case 4:AFx(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALO(a){a.hm=0.0;a.na=0;}
function YJ(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.na>0)a.na=a.na-1|0;else{if(b==a.vX&&c==a.vZ&&d==a.vY){f=a.cW.A;$p=1;continue _;}a.hm=0.0;a.mK=0.0;a.oj=0.0;a.vX=b;a.vZ=c;a.vY=d;}return;case 1:$z=ACt(f,b,c,d);if(C()){break _;}g=$z;if(!g)return;L();f=BeO.data[g];h=a.hm;i=a.cW.f;$p=2;case 2:$z=ABb(f,i);if(C()){break _;}j=$z;a.hm=h+j;a.oj=a.oj+1.0;if(a.hm<
1.0)return;$p=3;case 3:AFx(a,b,c,d);if(C()){break _;}a.hm=0.0;a.mK=0.0;a.oj=0.0;a.na=5;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function GQ(a,b){var c;if(a.hm<=0.0){a.cW.nV.Ej=0.0;a.cW.dV.tH=0.0;}else{c=a.mK+(a.hm-a.mK)*b;a.cW.nV.Ej=c;a.cW.dV.tH=c;}}
function A1i(a){return 4.0;}
function A4_(a,b){return;}
function AI1(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mK=a.hm;b=a.Bb;c=a.cW.A;$p=1;case 1:ABx(b,c);if(C()){break _;}b=a.Bx;c=a.cW.A;$p=2;case 2:ABx(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function Sx(){var a=this;D.call(a);a.c7=0.0;a.CI=0.0;a.i4=0;a.cX=0.0;a.CT=0.0;a.lG=0.0;a.sP=Long_ZERO;a.rS=Long_ZERO;a.nB=0.0;}
function FN(a){var b,c,d,e,f;b=B$();c=Long_sub(b,a.sP);d=Long_div(EG(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.rS));a.nB=a.nB+(e-a.nB)*0.20000000298023224;a.sP=b;a.rS=d;}if(Long_lt(c,Long_ZERO)){a.sP=b;a.rS=d;}f=Long_toNumber(d)/1000.0;e=(f-a.CI)*a.nB;a.CI=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.lG=a.lG+e*a.CT*a.c7;a.i4=a.lG|0;a.lG=a.lG-a.i4;if(a.i4>10)a.i4=10;a.cX=a.lG;}
function VC(){}
function RY(){var a=this;D.call(a);a.q4=null;a.ga=null;a.nY=null;a.oe=Long_ZERO;a.nx=0;}
function AOZ(a,b){a.nx=0;RN(a,b);}
function YF(a,b){a.nx=1;RN(a,a.nY);}
function RN(a,b){var c,d,e;a:{if(!a.ga.hx){if(a.nx)break a;b=new KI;O(b);M(b);}a.nY=b;c=FG(a.ga.cc,a.ga.bB);d=c.fL;e=c.fH;D4(256);C$(5889);C9();Im(0.0,d,e,0.0,100.0,300.0);C$(5888);C9();Bw(0.0,0.0,(-200.0));}}
function AR3(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.ga.hx){if(a.nx)return;b=new KI;O(b);M(b);}a.oe=Long_ZERO;a.q4=b;c=(-1);$p=1;case 1:XE(a,c);if(C()){break _;}a.oe=Long_ZERO;return;default:E_();}}C3().s(a,b,c,$p);}
function XE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.ga.hx){if(a.nx)break a;c=new KI;O(c);M(c);}d=B$();if(Long_ge(Long_sub(d,a.oe),Long_fromInt(20))){a.oe=d;c=FG(a.ga.cc,a.ga.bB);e=c.fL;f=c.fH;D4(256);C$(5889);C9();g=e;h=f;Im(0.0,g,h,0.0,100.0,300.0);C$(5888);C9();Bw(0.0,
0.0,(-200.0));D4(16640);BA();i=BeK;c=a.ga.bo;j=B(165);$p=1;continue _;}}return;case 1:$z=AHs(c,j);if(C()){break _;}k=$z;Cp(3553,k);Bz(i);ES(i,4210752);l=f/32.0;G(i,0.0,h,0.0,0.0,l);m=e/32.0;G(i,g,h,0.0,m,l);G(i,g,0.0,0.0,m,0.0);G(i,0.0,0.0,0.0,0.0,0.0);Br(i);if(b>=0){n=(e/2|0)-50|0;o=(f/2|0)+16|0;Bb(3553);Bz(i);ES(i,8421504);g=n;p=o;Bf(i,g,p,0.0);m=o+2|0;Bf(i,g,m,0.0);q=n+100|0;Bf(i,q,m,0.0);Bf(i,q,p,0.0);ES(i,8454016);Bf(i,g,p,0.0);Bf(i,g,m,0.0);q=n+b|0;Bf(i,q,m,0.0);Bf(i,q,p,0.0);Br(i);Ba(3553);}c=a.ga.e8;i
=a.nY;b=(e-Dw(a.ga.e8,a.nY)|0)/2|0;r=(f/2|0)-4|0;Cy(c,i,b,r-16|0,16777215);Cy(a.ga.e8,a.q4,(e-Dw(a.ga.e8,a.q4)|0)/2|0,r+8|0,16777215);$p=2;case 2:AUT();if(C()){break _;}try{$p=3;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else{throw $$e;}}return;case 3:b:{try{Xy();if(C()){break _;}break b;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else{throw $$e;}}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AFN(){var a=this;D.call(a);a.u=null;a.qv=0;a.lR=0.0;a.iG=null;a.tJ=0;a.p6=null;a.lj=null;a.H8=0;a.H7=0;a.pZ=null;a.dG=0.0;a.d5=0.0;a.dT=0.0;a.oa=0.0;a.l7=0.0;}
function BbP(a){var b=new AFN();AT6(b,a);return b;}
function AT6(a,b){var c;a.qv=0;a.lR=0.0;a.p6=null;a.lj=new Dz;a.H8=0;a.H7=0;a.pZ=HY(16);a.u=b;c=new O8;c.eR=null;c.i$=0.0;c.q$=0.0;c.ix=0;c.jL=0;c.z$=Kh();c.cO=b;a.iG=c;}
function AIN(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oa=a.l7;b=a.u.A;c=K(a.u.f.d);d=K(a.u.f.j);e=K(a.u.f.e);$p=1;case 1:$z=ANg(b,c,d,e);if(C()){break _;}f=$z;g=(3-a.u.k.he|0)/3.0;h=f*(1.0-g)+g;a.l7=a.l7+(h-a.l7)*0.10000000149011612;a.tJ=a.tJ+1|0;AI$(a.iG);if(a.u.cT)
{b=a.u.f;i=a.u.A;d=K(b.d);j=K(b.j);k=K(b.e);l=4;m=0;n=63;e=R(64,j+4|0);j=R(64,j-4|0);o=64.0999984741211;if(m<50){p=(d+E(a.lj,9)|0)-l|0;q=(k+E(a.lj,9)|0)-l|0;$p=2;continue _;}}return;case 2:$z=ACt(i,p,n,q);if(C()){break _;}c=$z;if(e<=0&&j>=0){f=N(a.lj);g=N(a.lj);if(c>0){b=a.u.c5;r=new JL;s=p+f;L();TI(r,i,s,o-BeO.data[c].cL,q+g);El(b,r);}}m=m+1|0;if(m>=50)return;p=(d+E(a.lj,9)|0)-l|0;q=(k+E(a.lj,9)|0)-l|0;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function NB(a,b){var c,d,e,f;c=a.u.f;d=c.bT;e=c.d-c.bT;f=b;return BY(d+e*f,c.cR+(c.j-c.cR)*f,c.bS+(c.e-c.bS)*f);}
function ALS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=c.T+(c.J-c.T)*b;e=c.P+(c.v-c.P)*b;f=NB(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=BC(g);i=Bq(g);g= -d*0.01745329238474369;j= -BC(g);g=Bq(g);k=i*j;l
=h*j;m=4.0;n=k;o=n*m;p=g;q=p*m;r=l;s=Dk(f,o,q,r*m);t=a.u;u=a.u.A;$p=1;case 1:$z=AJk(u,f,s);if(C()){break _;}u=$z;t.ce=u;f=NB(a,b);if(a.u.ce!==null)m=DH(a.u.ce.gx,f);if(a.u.cB instanceof Du)m=32.0;else if(m>3.0)m=3.0;n=n*m;p=p*m;r=r*m;s=Dk(f,n,p,r);a.p6=null;t=a.u.A;u=Ja(c.L,n,p,r);$p=2;case 2:$z=ADI(t,c,u);if(C()){break _;}t=$z;n=0.0;v=0;while(v<t.p){u=Z(t,v);if(u.lq()){w=QN(Dv(u.L,0.10000000149011612,0.10000000149011612,0.10000000149011612),f,s);if(w!==null){p=DH(f,w.gx);if(!(p>=n&&n!==0.0)){a.p6=u;n=p;}}}v
=v+1|0;}if(a.p6!==null&&!(a.u.cB instanceof Du))a.u.ce=A1a(a.p6);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function L4(a,b){var c,d,e;c=a.u.f;d=c.dD-b;if(c.bU<=0)Bv(40.0-8000.0/(c.c1+b+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.EK;b=Bq(b*b*b*b*3.1415927410125732);e=c.kD;Bv( -e,0.0,1.0,0.0);Bv( -b*14.0,0.0,0.0,1.0);Bv(e,0.0,1.0,0.0);}}
function IH(a,b){var c,d,e,f,g;if(!a.u.k.cC){c=a.u.f;d=c.g_-c.tW;e=c.g_+d*b;f=c.qy+(c.kR-c.qy)*b;g=c.kU+(c.jk-c.kU)*b;d=e*3.1415927410125732;Bw(Bq(d)*f*0.5, -HU(BC(d)*f),0.0);Bv(Bq(d)*f*3.0,0.0,0.0,1.0);Bv(HU(BC(d+0.20000000298023224)*f)*5.0,1.0,0.0,0.0);Bv(g,1.0,0.0,0.0);}}
function AH8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=c.bT;e=c.d-c.bT;f=b;g=d+e*f;h=c.cR+(c.j-c.cR)*f;i=c.bS+(c.e-c.bS)*f;if(!a.u.k.cC)Bw(0.0,0.0,(-0.10000000149011612));else{j=4.0;d= -Bq(c.v/180.0*3.1415927410125732)*BC(c.J
/180.0*3.1415927410125732)*j;e=BC(c.v/180.0*3.1415927410125732)*BC(c.J/180.0*3.1415927410125732)*j;f= -Bq(c.J/180.0*3.1415927410125732)*j;k=0;l=g-d;d=h-f;f=i-e;if(k<8){m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.u.A;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);$p=1;continue _;}Bw(0.0,0.0, -j);}Bv(c.T+(c.J-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.v-c.P)*b+180.0,0.0,1.0,0.0);return;case 1:$z=AJk(p,u,v);if(C()){break _;}u
=$z;if(u!==null){q=DH(u.gx,BY(g,h,i));if(q<j)j=q;}k=k+1|0;if(k>=8){Bw(0.0,0.0, -j);Bv(c.T+(c.J-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.v-c.P)*b+180.0,0.0,1.0,0.0);return;}m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.u.A;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AFv(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lR=256>>a.u.k.he;C$(5889);C9();if(a.u.k.dw)Bw( -((c*2|0)-1|0)*0.07000000029802322,0.0,0.0);d=a.u.f;e=70.0;f=BfP;$p=1;case 1:$z=AGF(d,f);if(C()){break _;}g=$z;if(g)e=60.0;if(d.bU<=0)e=e/((1.0-500.0/(d.c1+b+500.0))*2.0+1.0);h=a.u.cc/a.u.bB;i=a.lR;f=GM();j=e*0.01745329238474369*0.5;k=GB(j)/Go(j);f.es
=k/h;f.eq=0.0;f.er=0.0;f.ep=0.0;f.ev=0.0;f.ew=k;f.et=0.0;f.eu=0.0;f.eA=0.0;f.ey=0.0;h=i+0.05000000074505806;k=i-0.05000000074505806;f.ez=h/k;f.ex=(-1.0);f.gS=0.0;f.gT=0.0;f.gQ=2.0*i*0.05000000074505806/k;f.gR=0.0;C$(5888);C9();if(a.u.k.dw)Bw(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);L4(a,b);if(a.u.k.it)IH(a,b);$p=2;case 2:AH8(a,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFL(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qv&&!Od()){c=a.u;$p=1;continue _;}a.qv=Od();Bd();d=BdX;BdX=0.0;e=d|0;d=BdY;BdY=0.0;f=d|0;g=1;if(a.u.k.m2)g=(-1);if(a.u.bp&&a.u.A!==null)Xh(a.u.f,e,Bj(f,g));if(!a.u.h7){c=FG(a.u.cc,a.u.bB);f=c.fL;e=c.fH;h=Bj(BdV,f)/a.u.cc|0;i=(e-(Bj(BdW,e)/a.u.bB|0)|0)-1|0;if(a.u.A!==null){$p=2;continue _;}FM(0,0,a.u.cc,a.u.bB);Hx(0.0,
0.0,0.0,0.0);D4(16640);C$(5889);C9();C$(5888);C9();LB(a);if(a.u.D!==null){D4(256);c=a.u.D;$p=3;continue _;}}return;case 1:AK$(c);if(C()){break _;}a.qv=Od();Bd();d=BdX;BdX=0.0;e=d|0;d=BdY;BdY=0.0;f=d|0;g=1;if(a.u.k.m2)g=(-1);if(a.u.bp&&a.u.A!==null)Xh(a.u.f,e,Bj(f,g));if(!a.u.h7){c=FG(a.u.cc,a.u.bB);f=c.fL;e=c.fH;h=Bj(BdV,f)/a.u.cc|0;i=(e-(Bj(BdW,e)/a.u.bB|0)|0)-1|0;if(a.u.A!==null){$p=2;continue _;}FM(0,0,a.u.cc,a.u.bB);Hx(0.0,0.0,0.0,0.0);D4(16640);C$(5889);C9();C$(5888);C9();LB(a);if(a.u.D!==null){D4(256);c
=a.u.D;$p=3;continue _;}}return;case 2:AAc(a,b);if(C()){break _;}c=a.u.nV;g=a.u.D===null?0:1;$p=4;continue _;case 3:c.hN(h,i,b);if(C()){break _;}return;case 4:API(c,b,g,h,i);if(C()){break _;}if(a.u.D===null)return;D4(256);c=a.u.D;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ALS(a,b);if(C()){break _;}c=a.u.f;d=a.u.dV;e=a.u.c5;f=c.cr;g=c.d-c.cr;h=b;i=f+g*h;f=c.b7+(c.j-c.b7)*h;g=c.cs+(c.e-c.cs)*h;j=0;if(j>=2){DN(1,1,1,0);return;}if(a.u.k.dw){if(j)DN(1,0,0,0);else DN(0,1,1,0);}FM(0,0,a.u.cc,a.u.bB);$p=2;case 2:ADZ(a,
b);if(C()){break _;}D4(16640);Ba(2884);$p=3;case 3:AFv(a,b,j);if(C()){break _;}RP();if(a.u.k.he<2){k=(-1);$p=4;continue _;}if(!a.u.k.bw)Ba(2912);k=1;$p=6;continue _;case 4:ASe(a,k);if(C()){break _;}$p=5;case 5:AC_(d,b);if(C()){break _;}if(!a.u.k.bw)Ba(2912);k=1;$p=6;case 6:ASe(a,k);if(C()){break _;}l=Bbx();AOj(l,i,f,g);ARI(a.u.dV,l,b);m=a.u.dV;k=0;$p=7;case 7:AIi(m,c,k);if(C()){break _;}k=0;$p=8;case 8:ASe(a,k);if(C()){break _;}if(!a.u.k.bw)Ba(2912);k=3553;m=a.u.bo;n=B(179);$p=9;case 9:$z=AHs(m,n);if(C()){break _;}o
=$z;Cp(k,o);DS();Vl(d,c,0,h);Hu();m=NB(a,b);$p=10;case 10:ACy(d,m,l,b);if(C()){break _;}$p=11;case 11:ABS(e,c,b);if(C()){break _;}DS();k=0;$p=12;case 12:ASe(a,k);if(C()){break _;}$p=13;case 13:AA_(e,c,b);if(C()){break _;}if(a.u.ce!==null){l=BfP;$p=16;continue _;}Df(770,771);k=0;$p=14;case 14:ASe(a,k);if(C()){break _;}Ba(3042);Bb(2884);k=3553;l=a.u.bo;m=B(179);$p=15;case 15:$z=AHs(l,m);if(C()){break _;}o=$z;Cp(k,o);Vl(d,c,1,h);Gr(1);Ba(2884);Bb(3042);if(a.u.ce!==null){l=BfP;$p=17;continue _;}Bb(2912);if(a.u.cT)
{$p=20;continue _;}k=0;$p=23;continue _;case 16:$z=AGF(c,l);if(C()){break _;}k=$z;if(!k){Df(770,771);k=0;$p=14;continue _;}Bb(3008);l=a.u.ce;k=0;m=D9(c.K);$p=18;continue _;case 17:$z=AGF(c,l);if(C()){break _;}k=$z;if(!k){Bb(3008);l=a.u.ce;k=0;m=D9(c.K);$p=21;continue _;}Bb(2912);if(a.u.cT){$p=20;continue _;}k=0;$p=23;continue _;case 18:AFF(d,c,l,k,m,b);if(C()){break _;}l=a.u.ce;k=0;m=D9(c.K);$p=19;case 19:AGe(d,c,l,k,m,b);if(C()){break _;}Ba(3008);Df(770,771);k=0;$p=14;continue _;case 20:XP(a,b);if(C()){break _;}k
=0;$p=23;continue _;case 21:AFF(d,c,l,k,m,b);if(C()){break _;}m=a.u.ce;k=0;l=D9(c.K);$p=22;case 22:AGe(d,c,m,k,l,b);if(C()){break _;}Ba(3008);Bb(2912);if(a.u.cT){$p=20;continue _;}k=0;$p=23;case 23:ASe(a,k);if(C()){break _;}if(!a.u.k.bw)Ba(2912);$p=24;case 24:YI(d,b);if(C()){break _;}Bb(2912);k=1;$p=25;case 25:ASe(a,k);if(C()){break _;}D4(256);C9();if(a.u.k.dw)Bw(((j*2|0)-1|0)*0.10000000149011612,0.0,0.0);B3();L4(a,b);if(a.u.k.it)IH(a,b);if(!a.u.k.cC){l=a.iG;$p=26;continue _;}BD();if(!a.u.k.cC){l=a.iG;$p=27;continue _;}if
(a.u.k.it)IH(a,b);if(!a.u.k.dw)return;j=j+1|0;if(j>=2){DN(1,1,1,0);return;}if(a.u.k.dw){if(j)DN(1,0,0,0);else DN(0,1,1,0);}FM(0,0,a.u.cc,a.u.bB);$p=2;continue _;case 26:ACU(l,b);if(C()){break _;}BD();if(!a.u.k.cC){l=a.iG;$p=27;continue _;}if(a.u.k.it)IH(a,b);if(!a.u.k.dw)return;j=j+1|0;if(j>=2){DN(1,1,1,0);return;}if(a.u.k.dw){if(j)DN(1,0,0,0);else DN(0,1,1,0);}FM(0,0,a.u.cc,a.u.bB);$p=2;continue _;case 27:AB7(l,b);if(C()){break _;}L4(a,b);if(a.u.k.it)IH(a,b);if(!a.u.k.dw)return;j=j+1|0;if(j>=2){DN(1,1,1,0);return;}if
(a.u.k.dw){if(j)DN(1,0,0,0);else DN(0,1,1,0);}FM(0,0,a.u.cc,a.u.bB);$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function XP(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=K(c.d);e=K(c.j);f=K(c.e);BA();g=BeK;Bb(2884);Cj(0.0,1.0,0.0);Ba(3042);Df(770,
771);h=3553;i=a.u.bo;j=B(196);$p=1;case 1:$z=AHs(i,j);if(C()){break _;}k=$z;Cp(h,k);k=d-5|0;d=d+5|0;h=f-5|0;l=f+5|0;m=e-5|0;n=e+5|0;e=R(m,64);o=R(n,64);while(k<=d){p=h;while(p<=l){q=e<0?64:m;r=o<0?64:n;if(q!=r){s=((((a.tJ+(k*3121|0)|0)+Bj(p,418711)|0)%32|0)+b)/32.0;t=k+0.5-c.d;u=p+0.5-c.e;v=Ce(t*t+u*u)/5.0;BU(1.0,1.0,1.0,(1.0-v*v)*0.699999988079071);Bz(g);u=k+0|0;w=q;x=p+0|0;v=q*2.0/8.0;y=s*2.0;z=v+y;G(g,u,w,x,0.0,z);ba=k+1|0;bb=p+1|0;G(g,ba,w,bb,2.0,z);bc=r;bd=r*2.0/8.0+y;G(g,ba,bc,bb,2.0,bd);G(g,u,bc,x,0.0,
bd);G(g,u,w,bb,0.0,z);G(g,ba,w,x,2.0,z);G(g,ba,bc,x,2.0,bd);G(g,u,bc,bb,0.0,bd);Br(g);}p=p+1|0;}k=k+1|0;}Ba(2884);Bb(3042);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function LB(a){var b,c,d;b=FG(a.u.cc,a.u.bB);c=b.fL;d=b.fH;D4(256);C$(5889);C9();Im(0.0,c,d,0.0,1000.0,3000.0);C$(5888);C9();Bw(0.0,0.0,(-2000.0));}
function ADZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.A;d=a.u.f;e=1.0-A2N(1.0/(4-a.u.k.he|0),0.25);f=ON(c,b);g=f.x;h=f.z;i=f.w;j=ADp(c,b);a.dG=j.x;a.d5=j.z;a.dT=j.w;a.dG=a.dG+(g-a.dG)*e;a.d5=a.d5+(h-a.d5)*e;a.dT=a.dT+(i-a.dT)*e;c=BfP;$p=1;case 1:$z=AGF(d,c);if(C()){break _;}k=$z;if(k){a.dG=0.019999999552965164;a.d5
=0.019999999552965164;a.dT=0.20000000298023224;e=a.oa+(a.l7-a.oa)*b;a.dG=a.dG*e;a.d5=a.d5*e;a.dT=a.dT*e;if(a.u.k.dw){l=(a.dG*30.0+a.d5*59.0+a.dT*11.0)/100.0;m=(a.dG*30.0+a.d5*70.0)/100.0;n=(a.dG*30.0+a.dT*70.0)/100.0;a.dG=l;a.d5=m;a.dT=n;}Hx(a.dG,a.d5,a.dT,0.0);return;}c=BfQ;$p=2;case 2:$z=AGF(d,c);if(C()){break _;}k=$z;if(k){a.dG=0.6000000238418579;a.d5=0.10000000149011612;a.dT=0.0;}e=a.oa+(a.l7-a.oa)*b;a.dG=a.dG*e;a.d5=a.d5*e;a.dT=a.dT*e;if(a.u.k.dw){l=(a.dG*30.0+a.d5*59.0+a.dT*11.0)/100.0;m=(a.dG*30.0+a.d5
*70.0)/100.0;n=(a.dG*30.0+a.dT*70.0)/100.0;a.dG=l;a.d5=m;a.dT=n;}Hx(a.dG,a.d5,a.dT,0.0);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASe(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=a.dG;e=a.d5;f=a.dT;EA(a.pZ);CJ(CJ(CJ(CJ(a.pZ,d),e),f),1.0);Gs(a.pZ);g=a.pZ;BW();BfR=Jo(g);BfS=Jo(g);BfT=Jo(g);BfU=Jo(g);Cj(0.0,(-1.0),0.0);BU(1.0,1.0,1.0,1.0);g=BfP;$p=1;case 1:$z=AGF(c,g);if(C()){break _;}h=$z;if(h){L_(2917,2048);GL(2914,0.10000000149011612);Ba(2903);return;}g=BfQ;$p=2;case 2:$z=AGF(c,g);if(C()){break _;}h
=$z;if(h){L_(2917,2048);GL(2914,2.0);}else{L_(2917,9729);GL(2915,a.lR*0.25);GL(2916,a.lR);if(b<0){GL(2915,0.0);GL(2916,a.lR*0.800000011920929);}}Ba(2903);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Eh(){D.call(this);this.xU=0.0;}
function Mw(){var a=this;Eh.call(a);a.iW=null;a.k7=null;a.pf=null;a.d0=null;a.dM=null;a.i8=null;a.hd=null;}
function A$X(){var a=new Mw();KE(a);return a;}
function Xp(a){var b=new Mw();AIK(b,a);return b;}
function BfV(a,b){var c=new Mw();ARt(c,a,b);return c;}
function KE(a){AIK(a,0.0);}
function AIK(a,b){ARt(a,b,0.0);}
function ARt(a,b,c){var d,e;a.iW=BK(0,0);BG(a.iW,(-4.0),(-8.0),(-4.0),8,8,8,b);d=a.iW;e=0.0+c;BJ(d,0.0,e,0.0);a.k7=BK(32,0);BG(a.k7,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BJ(a.k7,0.0,e,0.0);a.pf=BK(16,16);BG(a.pf,(-4.0),0.0,(-2.0),8,12,4,b);BJ(a.pf,0.0,e,0.0);a.d0=BK(40,16);BG(a.d0,(-3.0),(-2.0),(-2.0),4,12,4,b);d=a.d0;e=2.0+c;BJ(d,(-5.0),e,0.0);a.dM=BK(40,16);a.dM.lz=1;BG(a.dM,(-1.0),(-2.0),(-2.0),4,12,4,b);BJ(a.dM,5.0,e,0.0);a.i8=BK(0,16);BG(a.i8,(-2.0),0.0,(-2.0),4,12,4,b);d=a.i8;c=12.0+c;BJ(d,(-2.0),c,0.0);a.hd
=BK(0,16);a.hd.lz=1;BG(a.hd,(-2.0),0.0,(-2.0),4,12,4,b);BJ(a.hd,2.0,c,0.0);}
function A$j(a,b,c,d,e,f,g){a.og(b,c,d,e,f,g);B_(a.iW,g);B_(a.pf,g);B_(a.d0,g);B_(a.dM,g);B_(a.i8,g);B_(a.hd,g);B_(a.k7,g);}
function AIR(a,b,c,d,e,f,g){var h;a.iW.bY=e/57.2957763671875;a.iW.b1=f/57.2957763671875;a.k7.bY=a.iW.bY;a.k7.b1=a.iW.b1;h=a.d0;e=b*0.6661999821662903;f=e+3.1415927410125732;h.b1=BC(f)*2.0*c;a.d0.bV=(BC(b*0.23119999468326569)+1.0)*1.0*c;a.dM.b1=BC(e)*2.0*c;a.dM.bV=(BC(b*0.28119999170303345)-1.0)*1.0*c;a.i8.b1=BC(e)*1.399999976158142*c;a.hd.b1=BC(f)*1.399999976158142*c;h=a.d0;c=h.bV;b=d*0.09000000357627869;h.bV=c+BC(b)*0.05000000074505806+0.05000000074505806;h=a.dM;h.bV=h.bV-(BC(b)*0.05000000074505806+0.05000000074505806);h
=a.d0;b=h.b1;c=d*0.06700000166893005;h.b1=b+Bq(c)*0.05000000074505806;h=a.dM;h.b1=h.b1-Bq(c)*0.05000000074505806;}
function Eu(){var a=this;D.call(a);a.dC=null;a.IT=0;a.mA=0;a.HQ=0;a.wW=0;}
function BfW(a){var b=new Eu();Hz(b,a);return b;}
function Hz(a,b){a.dC=$rt_createByteArray(1024);a.mA=0;a.HQ=0;a.wW=1;a.IT=b;}
function AAQ(){var a=this;Eu.call(a);a.pv=null;a.tp=null;a.nU=null;a.rM=null;a.xx=0;}
function Bao(){var a=new AAQ();A$3(a);return a;}
function A$3(a){L();Hz(a,BfX.bb);a.pv=$rt_createFloatArray(256);a.tp=$rt_createFloatArray(256);a.nU=$rt_createFloatArray(256);a.rM=$rt_createFloatArray(256);a.xx=0;}
function AYA(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;a.xx=a.xx+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.pv.data[f+(g*16|0)|0];e=e+1|0;}h=a.tp.data;i=b+(c*16|0)|0;h[i]=d/3.299999952316284+a.nU.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}c=0;while(c<16){j=0;while(j<16){k=a.nU.data;b=c+(j*16|0)|0;k[b]=k[b]+a.rM.data[b]*0.05000000074505806;if(a.nU.data[b]<0.0)a.nU.data[b]=0.0;k=a.rM.data;k[b]=k[b]-0.10000000149011612;if(BP()<0.05)a.rM.data[b]=0.5;j=j+1|0;}c=c+1|0;}k=a.tp;a.tp
=a.pv;a.pv=k;c=0;while(c<256){d=a.pv.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;l=d*d;i=32.0+l*32.0|0;m=50.0+l*64.0|0;n=255;o=146.0+l*50.0|0;if(a.mA){b=i*30|0;i=((b+(m*59|0)|0)+2805|0)/100|0;m=(b+(m*70|0)|0)/100|0;n=(b+17850|0)/100|0;}k=a.dC.data;j=c*4|0;k[j+0|0]=i<<24>>24;a.dC.data[j+1|0]=m<<24>>24;a.dC.data[j+2|0]=n<<24>>24;a.dC.data[j+3|0]=o<<24>>24;c=c+1|0;}}
function AKB(){var a=this;Eu.call(a);a.pR=null;a.qQ=null;a.ju=null;a.sx=null;}
function BaX(){var a=new AKB();A1D(a);return a;}
function A1D(a){L();Hz(a,BfY.bb);a.pR=$rt_createFloatArray(256);a.qQ=$rt_createFloatArray(256);a.ju=$rt_createFloatArray(256);a.sx=$rt_createFloatArray(256);}
function AYQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){h=(g+e|0)&15;j=(i+f|0)&15;d=d+a.pR.data[h+(j*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.qQ.data;l=b+(c*16|0)|0;d=d/10.0;m=a.ju.data;e=(b+0|0)&15;n=((c+0|0)&15)*16|0;o=m[e+n|0];m=a.ju.data;h=h&15;o=o+m[h+n|0];m=a.ju.data;c=c+1|0;n=(c&15)*16|0;k[l]=d+(o+m[h+n
|0]+a.ju.data[e+n|0])/4.0*0.800000011920929;m=a.ju.data;m[l]=m[l]+a.sx.data[l]*0.009999999776482582;if(a.ju.data[l]<0.0)a.ju.data[l]=0.0;m=a.sx.data;m[l]=m[l]-0.05999999865889549;if(BP()<0.005)a.sx.data[l]=1.5;}b=b+1|0;}m=a.qQ;a.qQ=a.pR;a.pR=m;n=0;while(n<256){d=a.pR.data[n]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;h=d*100.0+155.0|0;o=d*d;j=o*255.0|0;l=o*d*d*128.0|0;if(a.mA){e=h*30|0;h=((e+(j*59|0)|0)+(l*11|0)|0)/100|0;j=(e+(j*70|0)|0)/100|0;l=(e+(l*70|0)|0)/100|0;}m=a.dC.data;b=n*4|0;m[b+0|0]=h<<24>>24;a.dC.data[b
+1|0]=j<<24>>24;a.dC.data[b+2|0]=l<<24>>24;a.dC.data[b+3|0]=(-1);n=n+1|0;}}
function L3(){D.call(this);}
var BfZ=null;var Bf0=null;function Bf1(){var a=new L3();AZB(a);return a;}
function AZB(a){return;}
function DT(){if(BfZ===null)BfZ=AYI(new W_,0);return BfZ;}
function C1(){if(Bf0===null)Bf0=AYI(new PK,0);return Bf0;}
function Di(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=APf(b)&&(e+f|0)<=APf(d)){a:{b:{if(b!==d){g=Kw(Dl(b));h=Kw(Dl(d));if(g!==null&&h!==null){if(g===h)break b;if(!FW(g)&&!FW(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!Ut(h,l[k])){Vf(b,c,d,e,j);b=new JQ;O(b);M(b);}j=j+1|0;k=m;}Vf(b,c,d,e,f);return;}if(!FW(g))break a;if(FW(h))break b;else break a;}b=new JQ;O(b);M(b);}}Vf(b,c,d,e,f);return;}b=new JQ;O(b);M(b);}b=new BO;O(b);M(b);}d=new EE;Bl(d,B(197));M(d);}
function Vf(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function B$(){return Long_fromNumber(new Date().getTime());}
function EG(){return Long_fromNumber(performance.now()*1000000.0);}
function VS(){Gk.call(this);this.yj=null;}
function AJZ(a){var b,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(a.yj.hx){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){}else{throw $$e;}}}return;case 1:a:{try{AKD(b);if(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){}else{throw $$e;}}}while(a.yj.hx){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof E2){}else{throw $$e;}}}return;default:E_();}}C3().s(a,
b,$p);}
function Sh(){}
function Ih(){}
function Gj(){D.call(this);}
function PS(a){return a.hw?0:1;}
function Q2(a,b){var c,d;c=a.kS();a:{while(c.qj()){b:{d=c.mO();if(d!==null){if(!d.em(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function AA4(a){var b,c,d,e,f;b=J(D,IJ(a));c=b.data;d=0;e=Os(a);while(F8(e)){f=d+1|0;c[d]=Ll(e);d=f;}return b;}
function Uz(a,b){var c,d,e,f,g;c=b.data;d=a.p;e=c.length;if(e<d)b=AEF(Kw(Dl(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Jg(a);while(KB(f)){c=b.data;g=e+1|0;c[e]=KS(f);e=g;}return b;}
function DD(a,b){var c,d;c=0;d=b.kS();while(d.qj()){if(!a.sQ(d.mO()))continue;c=1;}return c;}
function Ga(a,b){var c,d;c=0;d=Jg(a);while(KB(d)){if(b.rx(KS(d))){AL_(d);c=1;}}return c;}
function J2(){}
function Gb(){Gj.call(this);this.d6=0;}
function Fu(a,b){AEN(a,a.hw,b);return 1;}
function Jg(a){var b;b=new Tr;b.k8=a;b.yk=b.k8.d6;b.sq=b.k8.p;b.nf=(-1);return b;}
function AA9(a,b){var c,d,e;c=a.p;d=0;a:{while(d<c){b:{e=Z(a,d);if(b!==null){if(!b.em(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function Mq(){Gb.call(this);}
function AEN(a,b,c){if(b>=0){ABp(Wh(a,b),c);return;}c=new BO;O(c);M(c);}
function Te(a,b){var c,d;if(b>=0){c=Wh(a,b);d=GC(c);AHe(c);return d;}c=new BO;O(c);M(c);}
function AUr(a){return JB(a);}
function Oz(){}
function Xf(){}
function AEC(){var a=this;Mq.call(a);a.pB=null;a.qk=null;a.hw=0;}
function QR(){var a=new AEC();A2Q(a);return a;}
function A2Q(a){return;}
function A9e(a){return a.hw;}
function Or(a){a.pB=null;a.qk=null;a.hw=0;a.d6=a.d6+1|0;}
function JB(a){return AJy(a,a.pB,null,0);}
function Wh(a,b){var c,d,e;if(b<0){c=new BO;O(c);M(c);}if(b<=(a.hw/2|0)){d=a.pB;e=0;while(e<b){d=d.hq;e=e+1|0;}return AJy(a,d,d===null?null:d.iw,b);}if(b>a.hw){c=new BO;O(c);M(c);}c=a.qk;e=b;while(e<a.hw){c=c.iw;e=e+1|0;}return AJy(a,c===null?null:c.hq,c,b);}
function AN$(){D.call(this);}
function F5(){D.call(this);}
function ABC(){F5.call(this);}
function AKF(){F5.call(this);}
function I$(){}
function Fc(){Gj.call(this);}
function Fr(a,b){var c,d;c=0;if(IJ(a)>=b.lS()){d=b.kS();while(d.qj()){if(!KV(a,d.mO()))continue;c=1;}}else{d=Os(a);while(F8(d)){if(b.rx(Ll(d))){c=1;ADO(d);}}}return c;}
function A5W(a,b){var c,d;if(a===b)return 1;if(!Sg(b,I$))return 0;c=b;if(IJ(a)!=IJ(c))return 0;d=Os(c);while(F8(d)){if(Ww(a,Ll(d)))continue;else return 0;}return 1;}
function AS0(a){var b,c,d,e,f,g;b=AA4(a);if(b===null)c=0;else{c=(-1515898884);d=0;while(true){e=b.data;if(d>=e.length)break;f=e[d];g=(f!==null?f.fj():0)^528111840;c=Ni(g,4)^(g>>>7|g<<25)^Ni(c,13);d=d+1|0;}}return c;}
function EU(){}
function AQi(){Fc.call(this);this.l4=null;}
function F7(){var a=new AQi();A06(a);return a;}
function A06(a){a.l4=Dd();}
function Xd(a,b){return BR(a.l4,b,a)!==null?0:1;}
function Ww(a,b){return DZ(a.l4,b);}
function Os(a){return ACP(AKb(a.l4));}
function KV(a,b){return Q3(a.l4,b)===null?0:1;}
function IJ(a){return a.l4.f8;}
function LS(){}
function FU(){var a=this;D.call(a);a.wV=null;a.w5=null;}
function AB_(){var a=this;FU.call(a);a.f8=0;a.cN=null;a.g7=0;a.E8=0.0;a.uG=0;}
function Dd(){var a=new AB_();AVr(a);return a;}
function A55(a,b){return J(IC,b);}
function AVr(a){var b;b=AGX(16);a.f8=0;a.cN=J(IC,b);a.E8=0.75;RI(a);}
function AGX(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function U5(a){var b;if(a.f8>0){a.f8=0;b=a.cN;ZB(b,0,b.data.length,null);a.g7=a.g7+1|0;}}
function RI(a){a.uG=a.cN.data.length*a.E8|0;}
function DZ(a,b){return VG(a,b)===null?0:1;}
function AEa(a,b){var c,d,e;a:{if(b===null){c=0;b:while(true){if(c>=a.cN.data.length)break a;d=a.cN.data[c];while(d!==null){if(d.e4===null)break b;d=d.eC;}c=c+1|0;}return 1;}c=0;c:while(true){if(c>=a.cN.data.length)break a;d=a.cN.data[c];while(d!==null){e=d.e4;if(b!==e&&!b.em(e)?0:1)break c;d=d.eC;}c=c+1|0;}return 1;}return 0;}
function CP(a,b){var c;c=VG(a,b);if(c===null)return null;return c.e4;}
function VG(a,b){var c,d;if(b===null)c=QM(a);else{d=b.fj();c=P1(a,b,d&(a.cN.data.length-1|0),d);}return c;}
function P1(a,b,c,d){var e;e=a.cN.data[c];while(e!==null&&!(e.pT==d&&AI4(b,e.ge))){e=e.eC;}return e;}
function QM(a){var b;b=a.cN.data[0];while(b!==null&&b.ge!==null){b=b.eC;}return b;}
function AKb(a){var b;if(a.wV===null){b=new PG;b.Cr=a;a.wV=b;}return a.wV;}
function Q$(a,b,c){return BR(a,b,c);}
function BR(a,b,c){var d,e,f,g;if(b===null){d=QM(a);if(d===null){a.g7=a.g7+1|0;d=RF(a,null,0,0);e=a.f8+1|0;a.f8=e;if(e>a.uG)Wm(a);}}else{e=b.fj();f=e&(a.cN.data.length-1|0);d=P1(a,b,f,e);if(d===null){a.g7=a.g7+1|0;d=RF(a,b,f,e);e=a.f8+1|0;a.f8=e;if(e>a.uG)Wm(a);}}g=d.e4;d.e4=c;return g;}
function RF(a,b,c,d){var e,f;e=new IC;f=null;e.ge=b;e.e4=f;e.pT=d;e.eC=a.cN.data[c];a.cN.data[c]=e;return e;}
function ALC(a,b){var c,d,e,f,g,h,i;c=AGX(!b?1:b<<1);d=J(IC,c);e=d.data;f=0;c=c-1|0;while(f<a.cN.data.length){g=a.cN.data[f];a.cN.data[f]=null;while(g!==null){h=g.pT&c;i=g.eC;g.eC=e[h];e[h]=g;g=i;}f=f+1|0;}a.cN=d;RI(a);}
function Wm(a){ALC(a,a.cN.data.length);}
function Q3(a,b){var c;c=AEi(a,b);if(c===null)return null;return c.e4;}
function AEi(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cN.data[0];while(e!==null){if(e.ge===null)break a;f=e.eC;d=e;e=f;}}else{g=b.fj();c=g&(a.cN.data.length-1|0);e=a.cN.data[c];while(e!==null&&!(e.pT==g&&AI4(b,e.ge))){f=e.eC;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.eC=e.eC;else a.cN.data[c]=e.eC;a.g7=a.g7+1|0;a.f8=a.f8-1|0;return e;}
function A4I(a){return a.f8;}
function Ip(a){var b;if(a.w5===null){b=new PH;b.wc=a;a.w5=b;}return a.w5;}
function AI4(b,c){return b!==c&&!b.em(c)?0:1;}
function AKc(){F5.call(this);}
function YR(){D.call(this);}
function Bf2(){var a=new YR();A0l(a);return a;}
function A0l(a){return;}
function A3F(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gm=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IU=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaF(callback);return thread.suspend(function(){try{Bcr(b,callback);}catch($e){callback.IU($rt_exception($e));}});}
function Bcr(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){CM(c,SM(0,0,B(198),null));return;}e=d.open($rt_ustr(b),1);b=new TD;b.AK=c;b=Cu(b,"handleEvent");e.onBlocked=b;b=new TC;b.Eo=c;b.EI=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TB;b.Du=c;b=Cu(b,"handleEvent");e.onerror=b;b=new TA;b.Bm=e;b=Cu(b,"handleEvent");e.onupgradeneeded=b;}
function A5v(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gm=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IU=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaF(callback);return thread.suspend(function(){try{A_Z(b,c,callback);}catch($e){callback.IU($rt_exception($e));}});}
function A_Z(b,c,d){var e;b=b.transaction("filesystem","readwrite").objectStore("filesystem");c=PP($rt_ustr(c));e=b.delete(c);b=new Tz;b.CG=d;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Tw;b.Db=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A_J(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gm=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IU=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaF(callback);return thread.suspend(function(){try{Ba8(b,c,callback);}catch($e){callback.IU($rt_exception($e));}});}
function Ba8(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PP($rt_ustr(c));e=b.get(c);b=new Tv;b.Ap=d;b.xa=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Tu;b.Ee=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A5q(b,c,d,e,f){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gm=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IU=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaF(callback);return thread.suspend(function(){try{Bb2(b,c,d,e,f,callback);}
catch($e){callback.IU($rt_exception($e));}});}
function Bb2(b,c,d,e,f,g){var h,i;h=(b.transaction("filesystem","readonly").objectStore("filesystem")).openCursor();i=$rt_createIntArray(1);b=new Ri;b.EL=h;b.El=g;b.yZ=i;b.vF=c;b.Bi=e;b.C5=d;b.xg=f;b=Cu(b,"handleEvent");h.onsuccess=b;b=new Rj;b.DL=g;b.wK=i;b=Cu(b,"handleEvent");h.onerror=b;}
function AUq(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gm=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IU=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaF(callback);return thread.suspend(function(){try{BcY(b,c,callback);}catch($e){callback.IU($rt_exception($e));}});}
function BcY(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PP($rt_ustr(c));e=b.get(c);b=new Rf;b.CO=d;b.u9=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Rg;b.Ed=d;b=Cu(b,"handleEvent");e.onerror=b;}
function AXO(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gm=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IU=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaF(callback);return thread.suspend(function(){try{Bbd(b,c,d,e,callback);}catch($e)
{callback.IU($rt_exception($e));}});}
function Bbd(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(B$(),new Long(596067632, 383)).lo;c=A5N($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Rh;c.Bu=f;b=Cu(c,"handleEvent");h.onsuccess=b;b=new Rk;b.BN=f;b=Cu(b,"handleEvent");h.onerror=b;}
function A8w(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function Us(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function A0H(b){return typeof b==='undefined'? -1:typeof b.lastModified==='undefined'? -1:b.lastModified;}
function PP(b){return [b];}
function AZR(b){return typeof b==="string"?b:typeof b==="undefined"?null:typeof b[0]==="string"?b[0]:null;}
function A5N(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AE0(){var a=this;D.call(a);a.Fb=0;a.E0=0;a.uz=null;a.xR=null;}
function SM(a,b,c,d){var e=new AE0();AXm(e,a,b,c,d);return e;}
function AXm(a,b,c,d,e){a.Fb=b;a.E0=c;a.uz=d;a.xR=e;}
function EY(){var a=this;D.call(a);a.Hx=null;a.ta=0;}
function Bf3(a,b){var c=new EY();FP(c,a,b);return c;}
function FP(a,b,c){a.Hx=b;a.ta=c;}
function A0I(a){return a.ta;}
function ATr(a,b){return a!==b?0:1;}
function AX1(a){return MI(a);}
function JR(a){var b;b=Dl(a);if(!QZ(JF(b),F(EY)))b=JF(b);return b;}
function XH(a,b){var c,d;if(JR(b)===JR(a))return R(a.ta,b.ta);c=new Cb;d=new T;V(d);Bl(c,U(H(H(H(H(d,B(199)),IA(JR(a))),B(200)),IA(JR(b)))));M(c);}
function AXy(a,b){return XH(a,b);}
function E9(){EY.call(this);}
var BfD=null;var BfC=null;var BfB=null;var Bf4=null;function AHg(){var b,c,d;b=new E9;FP(b,B(201),0);BfD=b;b=new E9;FP(b,B(202),1);BfC=b;b=new E9;FP(b,B(203),2);BfB=b;c=J(E9,3);d=c.data;d[0]=BfD;d[1]=BfC;d[2]=BfB;Bf4=c;}
function Qn(){}
function U4(){D.call(this);this.yA=null;}
function BaF(b){var c;c=new U4;c.yA=b;return c;}
function CM(a,b){a.yA.Gm(b);}
function A16(a,b){a.yA.IU(b);}
function AQE(){D.call(this);}
function Xl(){}
function W2(){var a=this;D.call(a);a.vn=null;a.z9=null;}
function ARe(a){var b,c,d;if(a.vn.readyState==4){b=new Uint8Array(a.vn.response);c=$rt_createByteArray(b.byteLength);Bd();BdJ=c;d=0;while(d<V2().data.length){V2().data[d]=b[d]<<24>>24;d=d+1|0;}CM(a.z9,B(204));}}
function A1Y(a){ARe(a);}
function HX(){D.call(this);}
function AQd(){var a=this;HX.call(a);a.w3=null;a.ki=0;a.F5=0;a.qL=0;}
function Ug(a){var b=new AQd();AT0(b,a);return b;}
function AT0(a,b){var c;c=b.data.length;a.w3=b;a.ki=0;a.F5=0;a.qL=0+c|0;}
function A4F(a){var b,c,d;if(a.ki>=a.qL)b=(-1);else{c=a.w3.data;d=a.ki;a.ki=d+1|0;b=c[d]&255;}return b;}
function A_j(a,b,c,d){var e,f,g,h,i;e=CB(d,a.qL-a.ki|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.w3.data;i=a.ki;a.ki=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function A5r(a){return a.qL-a.ki|0;}
function IP(){HX.call(this);this.km=null;}
function Bf5(a){var b=new IP();R1(b,a);return b;}
function R1(a,b){a.km=b;}
function AKA(a){return a.km.wU();}
function Ph(){}
function PW(){IP.call(this);this.d$=null;}
function OU(a){var b=new PW();AIt(b,a);return b;}
function AIt(a,b){R1(a,b);a.d$=$rt_createByteArray(8);}
function NL(a,b){var c;c=b.data;return a.km.n$(b,0,c.length);}
function NV(a){var b,c;b=a.km.Cq();if(b>=0)return b<<24>>24;c=new FD;O(c);M(c);}
function J7(a,b){var c,d;c=0;while(c<b){d=a.km.n$(a.d$,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function APj(a){return $rt_longBitsToDouble(Td(a));}
function AAY(a){return $rt_intBitsToFloat(H3(a));}
function AMS(a,b){QL(a,b,0,b.data.length);}
function QL(a,b,c,d){var e,f;if(d<0){e=new BO;O(e);M(e);}if(!d)return;if(a.km===null){e=new EE;O(e);M(e);}if(b===null){e=new EE;O(e);M(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.km.n$(b,c,d);if(f<0){e=new FD;O(e);M(e);}c=c+f|0;d=d-f|0;}return;}e=new BO;O(e);M(e);}
function H3(a){var b;if(J7(a,4)<0){b=new FD;O(b);M(b);}return (a.d$.data[0]&255)<<24|(a.d$.data[1]&255)<<16|(a.d$.data[2]&255)<<8|a.d$.data[3]&255;}
function Td(a){var b;if(J7(a,8)<0){b=new FD;O(b);M(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.d$.data[0]&255)<<24|(a.d$.data[1]&255)<<16|(a.d$.data[2]&255)<<8|a.d$.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.d$.data[4]&255)<<24|(a.d$.data[5]&255)<<16|(a.d$.data[6]&255)<<8|a.d$.data[7]&255),new Long(4294967295, 0)));}
function XG(a){var b;if(J7(a,2)<0){b=new FD;O(b);M(b);}return ((a.d$.data[0]&255)<<24>>16|a.d$.data[1]&255)<<16>>16;}
function APD(a){var b;if(J7(a,2)<0){b=new FD;O(b);M(b);}return ((a.d$.data[0]&255)<<8|a.d$.data[1]&255)&65535;}
function GU(a){return ALy(a,APD(a));}
function ALy(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);QL(a,c,0,b);return AWZ(c,d,0,b);}
function AWZ(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Hs;Bl(m,B(205));M(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Hs;Bl(m,B(206));M(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Hs;Bl(m,B(206));M(m);}f=j+1|0;if(f>=e){m=new Hs;Bl(m,B(206));M(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return Lj(c,0,g);}m=new Hs;Bl(m,B(206));M(m);}
function MQ(){var a=this;D.call(a);a.wr=null;a.H1=null;}
function RV(b){var c,d;if(Iv(b))M(ALo(b));if(!APP(Y(b,0)))M(ALo(b));c=1;while(c<Bh(b)){a:{d=Y(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(APP(d))break a;else M(ALo(b));}}c=c+1|0;}}
function APP(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function X2(b){var c;if(b===null){b=new Cb;Bl(b,B(207));M(b);}RV(b);c=CP(Bf6,AOh(b));if(c!==null)return c;c=new U_;O(c);c.Ir=b;M(c);}
function AN1(a,b){var c,d,$$je;a:{try{b=AJK(ADG(AQ1(AFu(a),Bf7),Bf7),b);}catch($$e){$$je=Bi($$e);if($$je instanceof GY){c=$$je;break a;}else{throw $$e;}}return b;}d=new WX;d.oo=1;d.rO=1;d.vx=B(208);d.jB=c;M(d);}
function ABt(a,b){return AJC(a.wr,b.wr);}
function A6v(a,b){return ABt(a,b);}
function WL(){var a=this;IP.call(a);a.g1=null;a.oh=null;a.qh=0;a.oH=0;a.Ey=0;a.Eb=0;a.wD=null;a.GV=null;}
function ASY(a){var b;if(a.qh){b=new B1;Bl(b,B(209));M(b);}return ALW(a,a.wD,0,1)==(-1)?(-1):a.wD.data[0]&255;}
function ALW(a,b,c,d){var e,f,g;if(a.qh){e=new B1;Bl(e,B(209));M(e);}if(b===null){e=new EE;O(e);M(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.oH)return (-1);f=0;AAE(a.g1,b,c,d);a:{while(!a.oH){if(!a.g1.N)ABf(a);b:{g=AF3(a.g1,0);f=f+(a.g1.pM-c|0)|0;c=a.g1.pM;switch(g){case -3:e=new B1;Bl(e,a.g1.b8);M(e);case 1:case 2:break;default:break b;}a.oH=1;if(g==2)return (-1);}if(!a.g1.ib)break a;}}return f;}e=new BO;O(e);M(e);}
function A0k(a){var b;if(!a.qh){if(!a.oH)return 1;return 0;}b=new B1;Bl(b,B(209));M(b);}
function ABf(a){var b,c;if(a.qh){b=new B1;Bl(b,B(209));M(b);}a:{c=a.km.n$(a.oh,0,a.oh.data.length);if(c==(-1)){if(a.g1.jv.dZ)break a;if(Ye(a.g1))break a;a.oh.data[0]=0;c=1;}AJ8(a.g1,a.oh,0,c,1);return;}if(Long_ne(a.g1.jv.rQ,Long_fromInt(-1))){b=new B1;Bl(b,B(210));M(b);}b=new FD;Bl(b,B(211));M(b);}
function M5(){var a=this;D.call(a);a.h8=null;a.jr=0;a.nj=Long_ZERO;}
function I8(a,b){var c,d;c=a.h8.data;d=a.jr;a.jr=d+1|0;c[d]=b;if(a.jr==a.h8.data.length){S1(a,a.h8,0);a.jr=0;}a.nj=Long_add(a.nj,Long_fromInt(1));}
function ADQ(a,b,c,d){a:{while(a.jr){if(d<=0)break a;I8(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.h8.data.length){S1(a,b,c);c=c+a.h8.data.length|0;d=d-a.h8.data.length|0;a.nj=Long_add(a.nj,Long_fromInt(a.h8.data.length));}while(d>0){I8(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function APh(a){var b;b=Long_shl(a.nj,3);I8(a,(-128));while(a.jr){I8(a,0);}AKZ(a,b);MA(a);}
function ADq(){var a=this;M5.call(a);a.pw=0;a.px=0;a.py=0;a.pz=0;a.pA=0;a.ei=null;a.mQ=0;}
function BaW(){var a=new ADq();A$h(a);return a;}
function A$h(a){a.h8=$rt_createByteArray(4);a.jr=0;a.ei=$rt_createIntArray(80);OF(a);}
function S1(a,b,c){var d,e;d=b.data;b=a.ei.data;e=a.mQ;a.mQ=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.mQ==16)MA(a);}
function HI(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AKZ(a,b){if(a.mQ>14)MA(a);a.ei.data[14]=b.hi;a.ei.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AL8(a,b,c){APh(a);HI(a,a.pw,b,c);HI(a,a.px,b,c+4|0);HI(a,a.py,b,c+8|0);HI(a,a.pz,b,c+12|0);HI(a,a.pA,b,c+16|0);OF(a);return 20;}
function OF(a){var b;a.nj=Long_ZERO;a.jr=0;b=0;while(b<a.h8.data.length){a.h8.data[b]=0;b=b+1|0;}a.pw=1732584193;a.px=(-271733879);a.py=(-1732584194);a.pz=271733878;a.pA=(-1009589776);a.mQ=0;b=0;while(b!=a.ei.data.length){a.ei.data[b]=0;b=b+1|0;}}
function Vb(a,b,c,d){return b^c^d;}
function Fg(a,b,c){return b<<c|b>>>(32-c|0);}
function MA(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.ei.data[b]=Fg(a,a.ei.data[b-3|0]^a.ei.data[b-8|0]^a.ei.data[b-14|0]^a.ei.data[b-16|0],1);b=b+1|0;}c=a.pw;d=a.px;e=a.py;f=a.pz;g=a.pA;h=0;while(h<=19){i=(((Fg(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.ei.data[h]|0)+1518500249|0;b=Fg(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Fg(a,c,5)+Vb(a,d,e,f)|0)+g|0)+a.ei.data[j]|0)+1859775393|0;b=Fg(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Fg(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.ei.data[h]|0)
+(-1894007588)|0;b=Fg(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Fg(a,c,5)+Vb(a,d,e,f)|0)+g|0)+a.ei.data[j]|0)+(-899497514)|0;b=Fg(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.pw=a.pw+c|0;a.px=a.px+d|0;a.py=a.py+e|0;a.pz=a.pz+f|0;a.pA=a.pA+g|0;a.mQ=0;b=0;while(b!=a.ei.data.length){a.ei.data[b]=0;b=b+1|0;}}
function AJa(){D.call(this);}
function Bf8(){var a=new AJa();A56(a);return a;}
function A56(a){return;}
function O2(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Oc(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Nm(b,c){var d,e,f,g;d=b.data;e=AEF(Kw(Dl(b)),c);f=CB(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function MW(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new Cb;O(f);M(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZB(b,c,d,e){var f,g;if(c>d){e=new Cb;O(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function PU(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=J(D,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=CB(j,h+f|0);l=h+(2*f|0)|0;m=CB(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qe(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AOr(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new Cb;O(f);M(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function I7(){var a=this;D.call(a);a.C$=0;a.B2=null;a.xf=null;}
function Bf9(a,b,c){var d=new I7();RD(d,a,b,c);return d;}
function RD(a,b,c,d){a.C$=b;a.B2=c;a.xf=d;}
function ABx(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Yp(b,a.B2)<a.C$){c=0;d=null;if(c<10){e=1;f=b.bi;$p=1;continue _;}}return;case 1:AOw(a,b,e,f,d);if(C()){break _;}c=c+1|0;if(c>=10)return;e=1;f=b.bi;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A5b(a,b,c,d){return CO((c+E(b.r,256)|0)-128|0,E(b.r,128),(d+E(b.r,256)|0)-128|0);}
function AOw(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=K(d.d);h=K(d.e);i=E(b.r,a.xf.data.length);j=a.Al(b,g,h);k=j.eD;l=j.eY;m=j.eE;$p=1;case 1:$z
=AAz(b,k,l,m);if(C()){break _;}c=$z;if(c)return 0;$p=2;case 2:$z=ABX(b,k,l,m);if(C()){break _;}e=$z;if(e!==Bf$)return 0;n=0;while(n<3){o=6;p=0;h=k;q=l;r=m;if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;}return f;case 3:$z=AAz(b,h,c,r);if(C()){break _;}c=$z;if(c){$p=4;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;continue _;}n=n+1|0;if(n>=3)break;o
=6;p=0;h=k;q=l;r=m;}return f;case 4:$z=AAz(b,h,q,r);if(C()){break _;}c=$z;if(!c){$p=5;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 5:$z=ABX(b,h,q,r);if(C()){break _;}e=$z;if(!e.nA()){c=q+1|0;$p=6;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|
0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 6:a:{$z=AAz(b,h,c,r);if(C()){break _;}c=$z;if(!c){b:{s=h+0.5;t=q+1.0;u=r+0.5;if(d===null){v=s-b.fi;w=t-b.pY;x=u-b.fh;if(v*v+w*w+x*x>=1024.0)break b;break a;}y=s-d.d;z=t-d.j;ba=u-d.e;if(y*y+z*z+ba*ba<1024.0)break a;}c:{try{e=a.xf.data[i];bb=J(FO,1);bb.data[0]=F(GG);e=Wx(e,bb);bb=J(D,1);bb.data[0]=b;bc=WA(e,bb);break c;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){}else{throw $$e;}}return f;}y=s;z=t;ba=u;Ks(bc,y,z,ba,N(b.r)*360.0,0.0);$p=7;continue _;}}p=p+
1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 7:$z=bc.uQ(y,z,ba);if(C()){break _;}c=$z;if(c){f=f+1|0;$p=8;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 8:AOg(b,bc);if(C()){break _;}p=p+1|0;while(true){if(p<3)
{h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$p);}
function UT(){I7.call(this);this.Gu=null;}
function A1W(a,b,c,d){return CO((c+E(b.r,256)|0)-128|0,E(b.r,E(b.r,E(b.r,112)+8|0)+8|0),(d+E(b.r,256)|0)-128|0);}
function C5(){var a=this;D.call(a);a.mz=0;a.bI=null;a.bD=null;a.m=null;a.bT=0.0;a.cR=0.0;a.bS=0.0;a.d=0.0;a.j=0.0;a.e=0.0;a.g=0.0;a.i=0.0;a.h=0.0;a.v=0.0;a.J=0.0;a.P=0.0;a.T=0.0;a.L=null;a.cx=0;a.jU=0;a.x4=0;a.lf=0;a.cQ=0;a.c3=0.0;a.c0=0.0;a.eM=0.0;a.tW=0.0;a.g_=0.0;a.i7=0;a.fG=0.0;a.re=0;a.cr=0.0;a.b7=0.0;a.cs=0.0;a.ej=0.0;a.rp=0.0;a.o3=0;a.n3=0.0;a.I1=0;a.n=null;a.oP=0;a.nF=0;a.cU=0;a.n4=0;a.tm=0;a.dx=0;a.gb=0;a.oy=0;a.tI=null;a.g4=0.0;a.gV=0.0;}
function Bf_(a){var b=new C5();Fz(b,a);return b;}
function Fz(a,b){a.mz=0;a.L=No(0.0,0.0,0.0,0.0,0.0,0.0);a.cx=0;a.jU=0;a.x4=0;a.lf=1;a.cQ=0;a.c3=0.0;a.c0=0.6000000238418579;a.eM=1.7999999523162842;a.tW=0.0;a.g_=0.0;a.i7=1;a.fG=0.0;a.re=1;a.ej=0.0;a.rp=0.0;a.o3=0;a.n3=0.0;a.I1=0;a.n=new Dz;a.oP=0;a.nF=1;a.cU=0;a.n4=300;a.tm=0;a.dx=0;a.gb=300;a.oy=1;a.m=b;CT(a,0.0,0.0,0.0);}
function Ca(a){a.cQ=1;}
function D1(a,b,c){a.c0=b;a.eM=c;}
function WN(a,b,c){a.v=b;a.J=c;}
function CT(a,b,c,d){var e,f,g,h,i,j;a.d=b;a.j=c;a.e=d;e=a.c0/2.0;f=a.eM/2.0;g=a.L;h=e;i=b-h;j=f;M1(g,i,c-j,d-h,b+h,c+j,d+h);}
function AI8(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Ja();if(C()){break _;}return;default:E_();}}C3().s(a,$p);}
function AES(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bD!==null&&a.bD.cQ)a.bD=null;a.oP=a.oP+1|0;a.tW=a.g_;a.bT=a.d;a.cR=a.j;a.bS=a.e;a.T=a.J;a.P=a.v;$p=1;case 1:$z=a.HG();if(C()){break _;}b=$z;if(!b)a.tm=0;else{a:{if(!a.tm&&!a.oy){c=Ce(a.g*a.g*0.20000000298023224+a.i*a.i+a.h*a.h*0.20000000298023224)*0.20000000298023224;if(c>1.0)c=1.0;Dh(a.m,a,B(212),c,1.0+(N(a.n)-N(a.n))*0.4000000059604645);d
=K(a.L.M);b=0;e=d+1.0;while(b<1.0+a.c0*20.0){f=(N(a.n)*2.0-1.0)*a.c0;g=(N(a.n)*2.0-1.0)*a.c0;BV(a.m,B(213),a.d+f,e,a.e+g,a.g,a.i-N(a.n)*0.20000000298023224,a.h);b=b+1|0;}b=0;while(true){if(b>=1.0+a.c0*20.0)break a;f=(N(a.n)*2.0-1.0)*a.c0;g=(N(a.n)*2.0-1.0)*a.c0;BV(a.m,B(214),a.d+f,e,a.e+g,a.g,a.i,a.h);b=b+1|0;}}}a.fG=0.0;a.tm=1;a.cU=0;}if(a.cU>0){if(!(a.cU%20|0)){h=null;b=1;$p=4;continue _;}a.cU=a.cU-1|0;}$p=2;case 2:$z=ACk(a);if(C()){break _;}b=$z;if(b){h=null;b=10;$p=3;continue _;}if(a.j>=(-64.0)){a.oy=0;return;}$p
=5;continue _;case 3:a.fq(h,b);if(C()){break _;}a.cU=600;if(a.j>=(-64.0)){a.oy=0;return;}$p=5;continue _;case 4:a.fq(h,b);if(C()){break _;}a.cU=a.cU-1|0;$p=2;continue _;case 5:a.DN();if(C()){break _;}a.oy=0;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function XX(a){Ca(a);}
function AHd(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=T8(a.L,b,c,d);f=a.m;$p=1;case 1:$z=XQ(f,a,e);if(C()){break _;}f=$z;if(f.p>0)return 0;f=a.m;$p=2;case 2:$z=AJi(f,e);if(C()){break _;}g=$z;return g?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ARD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.o3){FX(a.L,b,c,d);a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c3-a.ej;a.e=(a.L.S+a.L.W)/2.0;return;}e=a.d;f=a.e;g=P_(a.L);h=a.m;i=Ja(a.L,b,c,d);$p=1;case 1:$z
=XQ(h,a,i);if(C()){break _;}j=$z;k=0;l=c;while(k<De(j)){l=V6(Z(j,k),a.L,l);k=k+1|0;}FX(a.L,0.0,l,0.0);if(a.lf){m=d;n=b;}else if(c===l){m=d;n=b;}else{n=0.0;m=n;l=n;}a:{b:{if(!a.cx){if(c===l)break b;if(c>=0.0)break b;}o=1;break a;}o=0;}p=0;while(p<De(j)){n=Qq(Z(j,p),a.L,n);p=p+1|0;}FX(a.L,n,0.0,0.0);if(!a.lf&&b!==n){n=0.0;m=n;l=n;}k=0;while(k<De(j)){m=T_(Z(j,k),a.L,m);k=k+1|0;}FX(a.L,0.0,0.0,m);if(!a.lf&&d!==m){n=0.0;m=n;l=n;}c:{if(a.rp<=0.0){q=n;r=l;s=m;}else if(!o){q=n;r=l;s=m;}else if(a.ej>=0.05000000074505806)
{q=n;r=l;s=m;}else{if(b!==n)break c;if(d!==m)break c;q=n;r=l;s=m;}a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c3-a.ej;a.e=(a.L.S+a.L.W)/2.0;t=R(b,q);a.jU=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.x4=!a.jU&&!k?0:1;if(!a.cx){if(r<0.0)a.fG=a.fG-r;}else if(a.fG>0.0){u=a.fG;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.g_=a.g_+Ce(l*l+m*m)*0.6;if(!a.i7){a.ej=a.ej*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c3);x=K(a.e);i=a.m;$p=6;continue _;}r=a.rp;i=P_(a.L);Xa(a.L,
g);h=a.m;g=Ja(a.L,b,r,d);$p=2;case 2:$z=XQ(h,a,g);if(C()){break _;}h=$z;y=0;while(y<De(h)){r=V6(Z(h,y),a.L,r);y=y+1|0;}FX(a.L,0.0,r,0.0);if(a.lf){s=d;q=b;}else if(c===r){s=d;q=b;}else{q=0.0;s=q;r=q;}k=0;while(k<De(h)){q=Qq(Z(h,k),a.L,q);k=k+1|0;}FX(a.L,q,0.0,0.0);if(!a.lf&&b!==q){q=0.0;s=q;r=q;}t=0;while(t<De(h)){s=T_(Z(h,t),a.L,s);t=t+1|0;}FX(a.L,0.0,0.0,s);if(!a.lf&&d!==s){q=0.0;s=q;r=q;}if(n*n+m*m>=q*q+s*s){Xa(a.L,i);q=n;r=l;s=m;}else a.ej=a.ej+0.5;a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c3-a.ej;a.e=(a.L.S+a.L.W)
/2.0;t=R(b,q);a.jU=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.x4=!a.jU&&!k?0:1;if(!a.cx){if(r<0.0)a.fG=a.fG-r;}else if(a.fG>0.0){u=a.fG;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.g_=a.g_+Ce(l*l+m*m)*0.6;if(!a.i7){a.ej=a.ej*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c3);x=K(a.e);i=a.m;$p=6;continue _;case 3:a.DB(u);if(C()){break _;}a.fG=0.0;if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.g_=a.g_+Ce(l*l+m*m)*0.6;if(!a.i7){a.ej=a.ej
*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c3);x=K(a.e);i=a.m;$p=6;continue _;case 4:$z=a.HG();if(C()){break _;}t=$z;i=a.m;h=a.L;$p=5;case 5:$z=AQ$(i,h);if(C()){break _;}k=$z;if(!k){if(a.cU<=0)a.cU= -a.nF;if(t&&a.cU>0){Dh(a.m,a,B(215),0.699999988079071,1.600000023841858+(N(a.n)-N(a.n))*0.4000000059604645);a.cU= -a.nF;}return;}k=1;$p=7;continue _;case 6:$z=ACt(i,v,w,x);if(C()){break _;}y=$z;if(a.g_>a.re&&y>0){a.re=a.re+1|0;L();h=BeO.data[y].gI;if(!BeO.data[y].b$.nA())Dh(a.m,a,
Kf(h),AML(h)*0.15000000596046448,Yc(h));i=BeO.data[y];h=a.m;$p=8;continue _;}a.ej=a.ej*0.4000000059604645;$p=4;continue _;case 7:a.FS(k);if(C()){break _;}if(!t){a.cU=a.cU+1|0;if(!a.cU)a.cU=300;}if(t&&a.cU>0){Dh(a.m,a,B(215),0.699999988079071,1.600000023841858+(N(a.n)-N(a.n))*0.4000000059604645);a.cU= -a.nF;}return;case 8:i.oG(h,v,w,x,a);if(C()){break _;}a.ej=a.ej*0.4000000059604645;$p=4;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function A1K(a){return null;}
function AJ4(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:a.fq(c,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function Zg(a,b){return;}
function AE5(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.m;c=Dv(a.L,0.0,(-0.4000000059604645),0.0);d=BfP;$p=1;case 1:$z=AAq(b,c,d,a);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AGF(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j+a.rH();d=K(a.d);e=K3(K(c));f=K(a.e);g=a.m;$p=1;case 1:$z=ACt(g,d,e,f);if(C()){break _;}h=$z;if(h){L();if(BeO.data[h].b$===b){b=a.m;$p=2;continue _;}}return 0;case 2:$z=AEH(b,d,e,f);if(C()){break _;}d=$z;return c>=(e+1|0)-(Js(d)-0.1111111119389534)?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ACk(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.m;c=Dv(a.L,0.0,(-0.4000000059604645),0.0);d=BfQ;$p=1;case 1:$z=AOs(b,c,d);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function L2(a,b,c,d){var e,f,g;e=D_(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;c=c*d;f=Bq(a.v*3.1415927410125732/180.0);g=BC(a.v*3.1415927410125732/180.0);a.g=a.g+b*g-c*f;a.h=a.h+c*g+b*f;}}
function ADF(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(a.d);d=(a.L.U-a.L.M)*0.66;e=K(a.j-a.c3+d);f=K(a.e);g=a.m;$p=1;case 1:$z=ANg(g,c,e,f);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AUz(a,b){a.m=b;}
function Ks(a,b,c,d,e,f){a.d=b;a.bT=b;b=c+a.c3;a.j=b;a.cR=b;a.e=d;a.bS=d;a.v=e;a.J=f;CT(a,a.d,a.j,a.e);}
function AR2(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return D_(c*c+d*d+e*e);}
function AGK(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return e*e+f*f+g*g;}
function Sf(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return Ce(e*e+f*f+g*g);}
function LC(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return c*c+d*d+e*e;}
function A6S(a,b){return;}
function A5C(a,b){var c,d,e,f,g;c=b.d-a.d;d=b.e-a.e;e=c<0.0? -c:c;f=d<0.0? -d:d;if(e>f)f=e;if(f>=0.009999999776482582){e=Ce(f);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;e=f*g;c=c*0.05000000074505806;e=e*0.05000000074505806;c=c*(1.0-a.n3);e=e*(1.0-a.n3);Hn(a, -c,0.0, -e);Hn(b,c,0.0,e);}}
function Hn(a,b,c,d){a.g=a.g+b;a.i=a.i+c;a.h=a.h+d;}
function AJG(a,b,c){return 0;}
function A9K(a){return 0;}
function A7V(a){return 0;}
function A_i(a,b,c){return;}
function R_(a,b){var c,d,e;c=a.d-b.x;d=a.j-b.z;e=a.e-b.w;return AHc(a,c*c+d*d+e*e);}
function AHc(a,b){var c;c=APU(a.L)*64.0;return b>=c*c?0:1;}
function ALt(a,b){var c,d;c=$rt_createDoubleArray(3);d=c.data;d[0]=a.d;d[1]=a.j;d[2]=a.e;HC(b,B(216),V4(a,c));c=$rt_createDoubleArray(3);d=c.data;d[0]=a.g;d[1]=a.i;d[2]=a.h;HC(b,B(217),V4(a,c));c=$rt_createFloatArray(2);d=c.data;d[0]=a.v;d[1]=a.J;HC(b,B(218),AMy(a,c));AR5(b,B(219),a.fG);Fq(b,B(220),a.cU<<16>>16);Fq(b,B(221),a.gb<<16>>16);SU(b,B(222),a.cx);ABL(a,b);}
function YP(a,b){var c,d,e,f,g;c=Kg(b,B(216));d=Kg(b,B(217));e=Kg(b,B(218));CT(a,0.0,0.0,0.0);a.g=Fd(d,0).iH;a.i=Fd(d,1).iH;a.h=Fd(d,2).iH;f=Fd(c,0).iH;a.d=f;a.cr=f;a.bT=f;f=Fd(c,1).iH;a.j=f;a.b7=f;a.cR=f;f=Fd(c,2).iH;a.e=f;a.cs=f;a.bS=f;g=Fd(e,0).ni;a.v=g;a.P=g;g=Fd(e,1).ni;a.J=g;a.T=g;a.fG=AME(b,B(219));a.cU=FH(b,B(220));a.gb=FH(b,B(221));a.cx=Um(b,B(222));CT(a,a.d,a.j,a.e);AOV(a,b);}
function V4(a,b){var c,d,e,f,g;b=b.data;c=L8();d=b.length;e=0;while(e<d){f=b[e];g=new Mm;Cw(g);g.iH=f;Jn(c,g);e=e+1|0;}return c;}
function AMy(a,b){var c,d,e;b=b.data;c=L8();d=b.length;e=0;while(e<d){Jn(c,A6Q(b[e]));e=e+1|0;}return c;}
function ABQ(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0.0;$p=1;case 1:$z=AGE(a,b,c,d);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AGE(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Hb(a.m,a.d,a.j+d,a.e,Ky(b,c));e.g$=10;f=a.m;$p=1;case 1:AOg(f,e);if(C()){break _;}return e;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AHx(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.j+a.rH());d=K(a.e);e=a.m;$p=1;case 1:$z=AAz(e,b,c,d);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AWH(a,b){return 0;}
function AWY(a,b){return null;}
function AFb(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bD.cQ){a.bD=null;return;}a.g=0.0;a.i=0.0;a.h=0.0;$p=1;case 1:a.en();if(C()){break _;}CT(a,a.bD.d,a.bD.j+a.c3+a.bD.Aa(),a.bD.e);a.gV=a.gV+a.bD.v-a.bD.P;a.g4=a.g4+a.bD.J-a.bD.T;while(a.gV>=180.0){a.gV=a.gV-360.0;}while(a.gV<(-180.0)){a.gV=a.gV+360.0;}while(a.g4>=180.0){a.g4=a.g4-360.0;}while(a.g4<(-180.0)){a.g4=a.g4+360.0;}b=a.gV*0.5;c=a.g4*0.5;d=10.0;if(b>d)b
=d;e=(-10.0);if(b<e)b=e;if(c<=d)d=c;if(d>=e)e=d;a.gV=a.gV-b;a.g4=a.g4-e;a.v=a.v+b;a.J=a.J+e;return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function A9O(a){return a.eM*0.75;}
function Pe(a,b){a.g4=0.0;a.gV=0.0;if(a.bD===b){a.bD.bI=null;a.bD=null;}else{if(a.bD!==null)a.bD.bI=null;if(b.bI!==null)b.bI.bD=null;a.bD=b;b.bI=a;}}
function Xh(a,b,c){var d,e;d=a.J;e=a.v;a.v=a.v+b*0.15;a.J=a.J-c*0.15;if(a.J<(-90.0))a.J=(-90.0);if(a.J>90.0)a.J=90.0;a.T=a.T+a.J-d;a.P=a.P+a.v-e;}
function EQ(){var a=this;C5.call(a);a.oY=0;a.JF=0.0;a.G1=0.0;a.Im=0.0;a.dF=0.0;a.e7=0.0;a.zY=0.0;a.ne=0.0;a.jZ=0.0;a.ma=0.0;a.G3=0;a.yp=null;a.G2=0;a.D1=0.0;a.EY=null;a.Js=0.0;a.uY=0;a.Jt=0.0;a.bU=0;a.tE=0;a.uW=0;a.dD=0;a.EK=0;a.kD=0.0;a.c1=0;a.dy=0;a.kU=0.0;a.jk=0.0;a.Ci=0;a.Fd=0;a.Jy=0.0;a.jQ=0.0;a.cg=0.0;a.gn=0.0;a.hj=0;a.iJ=0.0;a.gC=0.0;a.kE=0.0;a.hF=0;a.zP=0.0;a.sY=0.0;}
function PI(a){return a.yp;}
function AXr(a){return a.cQ?0:1;}
function A1O(a){return a.cQ?0:1;}
function AQo(a){return a.eM*0.8500000238418579;}
function ANo(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AES(a);if(C()){break _;}b=E(a.n,1000);c=a.uW;a.uW=c+1|0;if(b<c){a.uW=(-80);d=a.wy();if(d!==null)Dh(a.m,a,d,1.0,(N(a.n)-N(a.n))*0.20000000298023224+1.0);}if(H2(a)){$p=2;continue _;}if(H2(a)){d=BfP;$p=3;continue _;}a.gb=a.n4;a.kU=a.jk;if(a.dy>0)a.dy=a.dy-1|0;if(a.dD>0)a.dD=a.dD-1|0;if(a.dx
>0)a.dx=a.dx-1|0;if(a.bU<=0){a.c1=a.c1+1|0;if(a.c1>20){$p=6;continue _;}}a.ma=a.jZ;a.e7=a.dF;a.P=a.v;a.T=a.J;return;case 2:$z=AHx(a);if(C()){break _;}e=$z;if(e){d=null;e=1;$p=4;continue _;}if(H2(a)){d=BfP;$p=3;continue _;}a.gb=a.n4;a.kU=a.jk;if(a.dy>0)a.dy=a.dy-1|0;if(a.dD>0)a.dD=a.dD-1|0;if(a.dx>0)a.dx=a.dx-1|0;if(a.bU<=0){a.c1=a.c1+1|0;if(a.c1>20){$p=6;continue _;}}a.ma=a.jZ;a.e7=a.dF;a.P=a.v;a.T=a.J;return;case 3:$z=AGF(a,d);if(C()){break _;}e=$z;if(!e)a.gb=a.n4;else{a.gb=a.gb-1|0;if(a.gb==(-20)){a.gb=0;e
=0;while(e<8){f=N(a.n)-N(a.n);g=N(a.n)-N(a.n);h=N(a.n)-N(a.n);BV(a.m,B(213),a.d+f,a.j+g,a.e+h,a.g,a.i,a.h);e=e+1|0;}d=null;e=2;$p=5;continue _;}a.cU=0;}a.kU=a.jk;if(a.dy>0)a.dy=a.dy-1|0;if(a.dD>0)a.dD=a.dD-1|0;if(a.dx>0)a.dx=a.dx-1|0;if(a.bU<=0){a.c1=a.c1+1|0;if(a.c1>20){$p=6;continue _;}}a.ma=a.jZ;a.e7=a.dF;a.P=a.v;a.T=a.J;return;case 4:a.fq(d,e);if(C()){break _;}if(H2(a)){d=BfP;$p=3;continue _;}a.gb=a.n4;a.kU=a.jk;if(a.dy>0)a.dy=a.dy-1|0;if(a.dD>0)a.dD=a.dD-1|0;if(a.dx>0)a.dx=a.dx-1|0;if(a.bU<=0){a.c1=a.c1
+1|0;if(a.c1>20){$p=6;continue _;}}a.ma=a.jZ;a.e7=a.dF;a.P=a.v;a.T=a.J;return;case 5:a.fq(d,e);if(C()){break _;}a.cU=0;a.kU=a.jk;if(a.dy>0)a.dy=a.dy-1|0;if(a.dD>0)a.dD=a.dD-1|0;if(a.dx>0)a.dx=a.dx-1|0;if(a.bU<=0){a.c1=a.c1+1|0;if(a.c1>20){$p=6;continue _;}}a.ma=a.jZ;a.e7=a.dF;a.P=a.v;a.T=a.J;return;case 6:Ca(a);if(C()){break _;}e=0;while(e<20){i=CY(a.n)*0.02;j=CY(a.n)*0.02;k=CY(a.n)*0.02;BV(a.m,B(223),a.d+N(a.n)*a.c0*2.0-a.c0,a.j+N(a.n)*a.eM,a.e+N(a.n)*a.c0*2.0-a.c0,i,j,k);e=e+1|0;}a.ma=a.jZ;a.e7=a.dF;a.P=a.v;a.T
=a.J;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AEP(a){var b,c,d,e;b=0;while(b<20){c=CY(a.n)*0.02;d=CY(a.n)*0.02;e=CY(a.n)*0.02;BV(a.m,B(223),a.d+N(a.n)*a.c0*2.0-a.c0-c*10.0,a.j+N(a.n)*a.eM-d*10.0,a.e+N(a.n)*a.c0*2.0-a.c0-e*10.0,c,d,e);b=b+1|0;}}
function AKS(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFb(a);if(C()){break _;}a.zY=a.ne;a.ne=0.0;return;default:E_();}}C3().s(a,$p);}
function AMr(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Ja();if(C()){break _;}$p=2;case 2:a.op();if(C()){break _;}b=a.d-a.bT;c=a.e-a.bS;d=Ce(b*b+c*c);e=a.dF;f=0.0;a.zY=a.ne;g=0.0;if(d>0.05000000074505806){g=1.0;f=d*3.0;e=CR(c,b)*180.0/3.1415927410125732-90.0;}if(!a.cx)g=0.0;a.ne=a.ne+(g-a.ne)*0.30000001192092896;h=e-a.dF;while(h<(-180.0)){h=h+360.0;}while
(h>=180.0){h=h-360.0;}a.dF=a.dF+h*0.10000000149011612;i=a.v-a.dF;while(i<(-180.0)){i=i+360.0;}while(i>=180.0){i=i-360.0;}j=i>=(-90.0)&&i<90.0?0:1;if(i<(-75.0))i=(-75.0);if(i>=75.0)i=75.0;a.dF=a.v-i;a.dF=a.dF+i*0.10000000149011612;if(j)f=f*(-1.0);while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}while(a.dF-a.e7<(-180.0)){a.e7=a.e7-360.0;}while(a.dF-a.e7>=180.0){a.e7=a.e7+360.0;}while(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}a.jZ=a.jZ+f;return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function A1e(a,b,c){D1(a,b,c);}
function UK(a,b){if(a.bU>0){a.bU=a.bU+b|0;if(a.bU>20)a.bU=20;a.dx=a.oY/2|0;}}
function ABZ(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hj=0;if(a.bU<=0)return 0;a.cg=1.5;if(a.dx<=a.oY/2.0){a.tE=a.bU;a.dx=a.oY;a.bU=a.bU-c|0;a.EK=10;a.dD=10;}else{if((a.tE-c|0)>=a.bU)return 0;a.bU=a.tE-c|0;}a.kD=0.0;if(b===null)a.kD=(BP()*2.0|0)*180|0;else{d=b.d-a.d;e=b.e-a.e;while(d*d+e*e<1.0E-4){d=(BP()-BP())*0.01;e=(BP()-BP())*0.01;}a.kD=CR(e,d)*180.0/3.1415927410125732-a.v;ABv(a,b,c,d,e);}if(a.bU>0){Dh(a.m,a,
a.u_(),1.0,(N(a.n)-N(a.n))*0.20000000298023224+1.0);return 1;}Dh(a.m,a,a.uK(),1.0,(N(a.n)-N(a.n))*0.20000000298023224+1.0);$p=1;case 1:a.Fv(b);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,$p);}
function A8r(a){return null;}
function AUx(a){return B(224);}
function AVs(a){return B(224);}
function ABv(a,b,c,d,e){var f,g,h;f=Ce(d*d+e*e);a.g=a.g/2.0;a.i=a.i/2.0;a.h=a.h/2.0;g=a.g;h=f;a.g=g-d/h*0.4000000059604645;a.i=a.i+0.4000000059604645;a.h=a.h-e/h*0.4000000059604645;if(a.i>0.4000000059604645)a.i=0.4000000059604645;}
function AN3(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.uY>0&&b!==null)b.By(a,a.uY);a.Ci=1;c=a.mf();if(c>0){d=E(a.n,3);e=0;if(e<d){f=1;$p=1;continue _;}}return;case 1:ABQ(a,c,f);if(C()){break _;}e=e+1|0;if(e>=d)return;f=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ATB(a){return 0;}
function AP6(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Uo(b-3.0)|0;if(c<=0)return;d=null;$p=1;case 1:a.fq(d,c);if(C()){break _;}d=a.m;c=K(a.d);e=K(a.j-0.20000000298023224-a.c3);f=K(a.e);$p=2;case 2:$z=ACt(d,c,e,f);if(C()){break _;}e=$z;if(e>0){L();d=BeO.data[e].gI;Dh(a.m,a,Kf(d),d.oO*0.5,d.pL*0.75);}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ADs(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE5(a);if(C()){break _;}d=$z;if(!d){$p=2;continue _;}e=a.j;L2(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=3;continue _;case 2:$z=ACk(a);if(C()){break _;}d=$z;if(d){e=a.j;L2(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=4;continue _;}L2(a,b,c,!a.cx?0.019999999552965164:0.10000000149011612);$p=7;continue _;case 3:ARD(a,
f,g,h);if(C()){break _;}a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=a.i-0.02;if(!a.jU){a.jQ=a.cg;e=a.d-a.bT;f=a.e-a.bS;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=5;continue _;case 4:ARD(a,f,g,h);if(C()){break _;}a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;a.i=a.i-0.02;if(!a.jU){a.jQ=a.cg;e=a.d-a.bT;f=a.e-a.bS;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn
=a.gn+a.cg;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=6;continue _;case 5:$z=AHd(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jQ=a.cg;e=a.d-a.bT;f=a.e-a.bS;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;case 6:$z=AHd(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jQ=a.cg;e=a.d-a.bT;f=a.e-a.bS;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;case 7:$z=AIf(a);if(C()){break _;}d=
$z;if(d){a.fG=0.0;if(a.i<(-0.15))a.i=(-0.15);}e=a.g;f=a.i;g=a.h;$p=8;case 8:ARD(a,e,f,g);if(C()){break _;}if(!a.jU){a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jQ=a.cg;e=a.d-a.bT;f=a.e-a.bS;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;}$p=9;case 9:$z=AIf(a);if(C()){break _;}d=$z;if(d)a.i=0.2;a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h
=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jQ=a.cg;e=a.d-a.bT;f=a.e-a.bS;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AIf(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.L.M);d=K(a.e);e=a.m;$p=1;case 1:$z=ACt(e,b,c,d);if(C()){break _;}f=$z;L();if(f==Bga.b)return 1;e=a.m;c=c+1|0;$p=2;case 2:$z=ACt(e,b,c,d);if(C()){break _;}b=$z;return b==Bga.b?1:0;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function H2(a){return !a.cQ&&a.bU>0?1:0;}
function ACm(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hj=a.hj+1|0;b=a.m.bi;if(b!==null){c=b.d-a.d;d=b.j-a.j;e=b.e-a.e;f=c*c+d*d+e*e;if(f>16384.0){$p=2;continue _;}if(a.hj>600&&!E(a.n,800)){if(f>=1024.0){$p=7;continue _;}a.hj=0;}}if(a.bU>0){$p=1;continue _;}a.hF=0;a.iJ=0.0;a.gC=0.0;a.kE=0.0;$p=3;continue _;case 1:a.wI();if(C())
{break _;}$p=3;continue _;case 2:Ca(a);if(C()){break _;}if(a.hj>600&&!E(a.n,800)){if(f>=1024.0){$p=7;continue _;}a.hj=0;}if(a.bU>0){$p=1;continue _;}a.hF=0;a.iJ=0.0;a.gC=0.0;a.kE=0.0;$p=3;case 3:$z=AE5(a);if(C()){break _;}g=$z;$p=4;case 4:$z=ACk(a);if(C()){break _;}h=$z;if(a.hF){if(g)a.i=a.i+0.03999999910593033;else if(h)a.i=a.i+0.03999999910593033;else if(a.cx)AF6(a);}a.iJ=a.iJ*0.9800000190734863;a.gC=a.gC*0.9800000190734863;a.kE=a.kE*0.8999999761581421;i=a.iJ;j=a.gC;$p=5;case 5:ADs(a,i,j);if(C()){break _;}k
=a.m;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADI(k,a,l);if(C()){break _;}k=$z;if(k!==null&&k.p>0){m=0;while(true){if(m>=k.p)break a;l=Z(k,m);if(l.rP())l.uX(a);m=m+1|0;}}}return;case 7:Ca(a);if(C()){break _;}if(a.bU>0){$p=1;continue _;}a.hF=0;a.iJ=0.0;a.gC=0.0;a.kE=0.0;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AF6(a){a.i=0.41999998688697815;}
function AQN(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(N(a.n)<0.07000000029802322){a.iJ=(N(a.n)-0.5)*a.sY;a.gC=N(a.n)*a.sY;}a.hF=N(a.n)>=0.009999999776482582?0:1;if(N(a.n)<0.03999999910593033)a.kE=(N(a.n)-0.5)*60.0;a.v=a.v+a.kE;a.J=a.zP;$p=1;case 1:$z=AE5(a);if(C()){break _;}b=$z;$p=2;case 2:$z=ACk(a);if(C()){break _;}c=$z;if(!(!b&&!c))a.hF=N(a.n)>=0.800000011920929?0:1;return;default:E_();}}C3().s(a,b,c,$p);}
function A4K(a){return;}
function Zq(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CT(a,b,c+a.eM/2.0,d);e=a.m;f=a.L;$p=1;case 1:$z=AM5(e,f);if(C()){break _;}g=$z;if(!g)return 0;e=a.m;f=a.L;$p=2;case 2:$z=XQ(e,a,f);if(C()){break _;}e=$z;if(e.p)return 0;e=a.m;f=a.L;$p=3;case 3:$z=AJi(e,f);if(C()){break _;}g=$z;return g?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABF(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=null;c=4;$p=1;case 1:a.fq(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function IR(){var a=this;EQ.call(a);a.dQ=null;a.dd=null;a.hk=0;}
function AKf(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.m;d=BY(a.d,a.j+AQo(a),a.e);b=BY(b.d,b.j+b.rH(),b.e);$p=1;case 1:$z=AJk(c,d,b);if(C()){break _;}b=$z;return b!==null?0:1;default:E_();}}C3().s(a,b,c,d,$p);}
function APL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hk=0;b=16.0;if(a.dd===null){$p=1;continue _;}if(H2(a.dd)){c=AR2(a.dd,a);d=a.dd;$p=2;continue _;}a.dd=null;a:{if(!a.hk&&a.dd!==null){if(a.dQ===null)break a;if
(!E(a.n,20))break a;}if(!(a.dQ!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 1:$z=a.xZ();if(C()){break _;}d=$z;a.dd=d;if(a.dd!==null){d=a.m;m=a.dd;$p=3;continue _;}b:{if(!a.hk&&a.dd!==null){if(a.dQ===null)break b;if(!E(a.n,20))break b;}if(!(a.dQ!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<
50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 2:$z=AKf(a,d);if(C()){break _;}e=$z;if(e){d=a.dd;$p=4;continue _;}b:{if(!a.hk&&a.dd!==null){if(a.dQ===null)break b;if(!E(a.n,20))break b;}if(!(a.dQ!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e
=K(a.L.M);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 3:$z=ARU(d,a,m,b);if(C()){break _;}d=$z;a.dQ=d;c:{if(!a.hk&&a.dd!==null){if(a.dQ===null)break c;if(!E(a.n,20))break c;}if(!(a.dQ!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 4:a.nM(d,c);if(C()){break _;}c:{if(!a.hk&&a.dd!==null){if(a.dQ===null)break c;if
(!E(a.n,20))break c;}if(!(a.dQ!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 5:$z=AE5(a);if(C()){break _;}n=$z;$p=6;case 6:$z=ACk(a);if(C()){break _;}o=$z;if(a.dQ!==null&&E(a.n,100)){d=Sn(a.dQ,a);p=a.c0*2.0;q=p*p;r=e;while(d!==null&&ABT(d,a.d,a.j,a.e)<q&&d.z<=r){AP2(a.dQ);if(!ANm(a.dQ)){d=Sn(a.dQ,a);continue;}d
=null;a.dQ=null;}a.hF=0;if(d!==null){q=d.x-a.d;s=d.w-a.e;t=d.z-r;a.v=CR(s,q)*180.0/3.1415927410125732-90.0;a.gC=a.sY;if(a.hk&&a.dd!==null){u=a.dd.d-a.d;r=a.dd.e-a.e;v=a.v;a.v=CR(r,u)*180.0/3.1415927410125732-90.0;w=(v-a.v+90.0)*3.1415927410125732/180.0;a.iJ= -Bq(w)*a.gC*1.0;a.gC=BC(w)*a.gC*1.0;}if(t!==0.0)a.hF=1;}if(N(a.n)<0.800000011920929&&!(!n&&!o))a.hF=1;return;}$p=9;continue _;case 7:$z=ARU(d,a,m,b);if(C()){break _;}d=$z;a.dQ=d;e=K(a.L.M);$p=5;continue _;case 8:$z=a.sB(j,k,l);if(C()){break _;}x=$z;if(x
>h){h=x;e=j;f=k;g=l;}i=i+1|0;if(i>=50){if(e>0){d=a.m;$p=10;continue _;}e=K(a.L.M);$p=5;continue _;}j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);continue _;case 9:AQN(a);if(C()){break _;}a.dQ=null;return;case 10:$z=AJu(d,a,e,f,g,b);if(C()){break _;}d=$z;a.dQ=d;e=K(a.L.M);$p=5;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AMA(a,b,c){return;}
function AKY(a){return null;}
function ACM(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Zq(a,b,c,d);if(C()){break _;}e=$z;if(!e)return 0;e=b|0;f=c|0;g=d|0;$p=2;case 2:$z=a.sB(e,f,g);if(C()){break _;}h=$z;return h<0.0?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function DP(){IR.call(this);this.Fm=0;}
function AC7(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADF(a,b);if(C()){break _;}b=$z;if(b>0.5)a.hj=a.hj+2|0;$p=2;case 2:ACm(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function AK7(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMr(a);if(C()){break _;}if(a.m.i0)return;$p=2;case 2:Ca(a);if(C()){break _;}return;default:E_();}}C3().s(a,$p);}
function AKo(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(LC(a.m.bi,a)>=256.0)return null;b=a.m.bi;$p=1;case 1:$z=AKf(a,b);if(C()){break _;}c=$z;return !c?null:a.m.bi;default:E_();}}C3().s(a,b,c,$p);}
function AAG(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABZ(a,b,c);if(C()){break _;}c=$z;if(!c)return 0;if(b!==a)a.dd=b;return 1;default:E_();}}C3().s(a,b,c,$p);}
function AQV(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<2.5&&b.L.U>a.L.M&&b.L.M<a.L.U){a.dy=20;d=a.Fm;$p=1;continue _;}return;case 1:b.fq(a,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ABu(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0.5;f=a.m;$p=1;case 1:$z=ANg(f,b,c,d);if(C()){break _;}g=$z;return e-g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yv(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.m;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=Xv(e,f,g,h);if(C()){break _;}f=$z;if(f>E(a.n,8))return 0;$p=2;case 2:$z=ACM(a,b,c,d);if(C()){break _;}f=$z;return !f?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function I3(){DP.call(this);}
function AH0(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Ru(a.m)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:AC7(a);if(C()){break _;}return;case 2:$z=ADF(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.m;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGd(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.n)*30.0<(b-0.4000000059604645)*2.0)a.cU=300;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AWJ(a){BB();return Bgb.cV;}
function Jj(){DP.call(this);}
function AIB(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Ru(a.m)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:AC7(a);if(C()){break _;}return;case 2:$z=ADF(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.m;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGd(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.n)*30.0<(b-0.4000000059604645)*2.0)a.cU=300;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AHT(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<10.0){d=b.d-a.d;e=b.e-a.e;if(!a.dy){f=AS9(a.m,a);f.j=f.j+1.399999976158142;g=b.j-0.20000000298023224-f.j;h=Ce(d*d+e*e)*0.20000000298023224;Dh(a.m,a,B(225),1.0,1.0/(N(a.n)*0.4000000059604645+0.800000011920929));b=a.m;$p=1;continue _;}a.v=CR(e,d)*180.0/3.1415927410125732-90.0;a.hk=1;}return;case 1:AOg(b,f);if(C()){break _;}Qz(f,
d,g+h,e,0.6000000238418579,12.0);a.dy=30;a.v=CR(e,d)*180.0/3.1415927410125732-90.0;a.hk=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYM(a){BB();return Bgc.cV;}
function JV(){var a=this;DP.call(a);a.jb=0;a.ur=0;a.Be=0;a.jR=0;}
function ZM(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.ur=a.jb;if(a.jb>0&&a.jR<0)a.jb=a.jb-1|0;if(a.jR>=0)a.jR=2;$p=1;case 1:APL(a);if(C()){break _;}if(a.jR!=1)a.jR=(-1);return;default:E_();}}C3().s(a,$p);}
function AAI(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(a.jR<=0&&c<3.0)){if(a.jR<=0)break a;if(c>=7.0)break a;}if(!a.jb)Dh(a.m,a,B(226),1.0,0.5);a.jR=1;a.jb=a.jb+1|0;if(a.jb==a.Be){b=a.m;d=a.d;e=a.j;f=a.e;c=3.0;$p=1;continue _;}a.hk=1;}return;case 1:X7(b,a,d,e,f,c);if(C()){break _;}$p=2;case 2:Ca(a);if(C()){break _;}a.hk=1;return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function Qi(a,b){return (a.ur+(a.jb-a.ur|0)*b)/(a.Be-2|0);}
function ASS(a){BB();return Bgd.cV;}
function Kl(){DP.call(this);}
function ARp(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADF(a,b);if(C()){break _;}b=$z;if(b<0.5&&LC(a.m.bi,a)<256.0)return a.m.bi;return null;default:E_();}}C3().s(a,b,$p);}
function Zj(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0;$p=1;case 1:a:{$z=ADF(a,d);if(C()){break _;}d=$z;if(d>0.5&&!E(a.n,100))a.dd=null;else{if(c<=2.0)break a;if(c>=6.0)break a;if(E(a.n,10))break a;if(a.cx){e=b.d-a.d;f=b.e-a.e;g=Ce(e*e+f*f);a.g=e/g*0.5*0.800000011920929+a.g*0.20000000298023224;a.h=f/g*0.5*0.800000011920929+a.h*0.20000000298023224;a.i=0.4000000059604645;}}return;}$p=2;case 2:AQV(a,
b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZL(a){BB();return Bge.cV;}
function Gx(){IR.call(this);}
function AOy(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.m;f=c-1|0;$p=1;case 1:$z=ACt(e,b,f,d);if(C()){break _;}g=$z;L();if(g==BeQ.b)return 10.0;e=a.m;$p=2;case 2:$z=ANg(e,b,c,d);if(C()){break _;}h=$z;return h-0.5;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AK4(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.m;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=Xv(e,f,g,h);if(C()){break _;}g=$z;if(g<=8)return 0;$p=2;case 2:$z=ACM(a,b,c,d);if(C()){break _;}g=$z;return !g?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function KF(){Gx.call(this);this.x3=0;}
function AGT(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.x3&&b instanceof EQ){a.x3=1;d=1+E(a.n,3)|0;e=0;if(e<d){L();f=Bfc.b;g=1;h=1.0;$p=2;continue _;}}$p=1;case 1:$z=ABZ(a,b,c);if(C()){break _;}c=$z;return c;case 2:$z=AGE(a,f,g,h);if(C()){break _;}i=$z;i.i=i.i+N(a.n)*0.05000000074505806;i.g=i.g+(N(a.n)-N(a.n))*0.10000000149011612;i.h=i.h+(N(a.n)-N(a.n))*0.10000000149011612;e
=e+1|0;if(e>=d){$p=1;continue _;}L();f=Bfc.b;g=1;h=1.0;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A62(a){return B(227);}
function A4f(a){return B(227);}
function AYk(a){return B(227);}
function Iz(){Gx.call(this);this.qx=0;}
function ATx(a){return B(228);}
function A9t(a){return B(228);}
function AV4(a){return B(229);}
function AXR(a,b){if(!a.qx)return 0;Pe(b,a);return 1;}
function AWc(a){BB();return Bgf.cV;}
function Dz(){var a=this;D.call(a);a.AA=0.0;a.w1=0;}
function Bbk(){var a=new Dz();A3c(a);return a;}
function Bbz(a){var b=new Dz();AVH(b,a);return b;}
function A3c(a){return;}
function AVH(a,b){return;}
function NF(a,b){return;}
function AF8(a,b){if(b==32)return Cl(a)*4.294967295E9+(-2.147483648E9)|0;return Cl(a)*Long_toNumber(Long_shl(Long_fromInt(1),CB(32,b)))|0;}
function Lo(a){return AF8(a,32);}
function E(a,b){return Cl(a)*b|0;}
function Gw(a){return Long_or(Long_shl(Long_fromInt(Lo(a)),32),Long_fromInt(Lo(a)));}
function N(a){return Cl(a);}
function Cl(a){return Math.random();}
function CY(a){var b,c,d,e;if(a.w1){a.w1=0;return a.AA;}while(true){while(true){b=2.0*Cl(a)-1.0;c=2.0*Cl(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=Ed((-2.0)*A3S(d)/d);a.AA=c*e;a.w1=1;return b*e;}
function Nx(){D.call(this);}
var Bgg=null;var Bgh=null;function Bgi(){var a=new Nx();AIl(a);return a;}
function AIl(a){return;}
function IW(b){var c,d,e,f,g,h;Ba1(F(Nx));try{BW();c=Bgj+1|0;d=0;while(d<b){e=Bgj+1|0;Bgj=e;f=Bgk;g=CX(e);h=new Rn;h.Bt=e;h.rh=null;h.oZ=null;h.lJ=(-1);h.jH=0;BR(f,g,h);d=d+1|0;}S(Bgg,CX(c));S(Bgg,CX(b));return c;}finally{BcS(F(Nx));}}
function WQ(b){var c,d,e,f,g;Ba1(F(Nx));try{c=b.bk;while(c<b.cy){BW();d=Bgl;Bd();e=new O9;f=BdH.createTexture();e.Ii=(-1);e.If=(-1);e.Gh=1;e.G_=0;e.BL=f;g=SY(d,e);AQ0(b,c,g);S(Bgh,CX(g));c=c+1|0;}}finally{BcS(F(Nx));}}
function WK(b){var c;c=AAo($rt_createByteArray(b));c.kI=Bgm;return c;}
function Rb(b){return ALP($rt_createIntArray(b));}
function HY(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new WJ;f=0+d|0;KN(e,d);e.bk=0;e.cy=f;e.yl=0;e.xu=0;e.xn=c;return e;}
function ALU(){Bgg=Ci();Bgh=Ci();}
function O8(){var a=this;D.call(a);a.cO=null;a.eR=null;a.i$=0.0;a.q$=0.0;a.ix=0;a.jL=0;a.z$=null;}
function ACU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.q$+(a.i$-a.q$)*b;d=a.cO.f;B3();Bv(d.T+(d.J-d.T)*b,1.0,0.0,0.0);Bv(d.P+(d.v-d.P)*b,0.0,1.0,0.0);Hu();BD();e=a.cO.A;f=
K(d.d);g=K(d.j);h=K(d.e);$p=1;case 1:$z=ANg(e,f,g,h);if(C()){break _;}i=$z;BU(i,i,i,1.0);if(a.eR===null){B3();if(a.jL){j=(a.ix+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(D_(j)*3.1415927410125732)*0.30000001192092896,Bq(D_(j)*3.1415927410125732*2.0)*0.4000000059604645, -k*0.4000000059604645);}Bw(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Ba(32826);if(a.jL){j=(a.ix+b)/8.0;k=Bq(j*j*3.1415927410125732);Bv(Bq(D_(j)*3.1415927410125732)*70.0,0.0,1.0,
0.0);Bv( -k*20.0,0.0,0.0,1.0);}f=3553;d=a.cO.bo;e=a.cO.f.tI;l=PI(a.cO.f);$p=2;continue _;}B3();if(a.jL){j=(a.ix+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(D_(j)*3.1415927410125732)*0.4000000059604645,Bq(D_(j)*3.1415927410125732*2.0)*0.20000000298023224, -k*0.20000000298023224);}Bw(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Ba(32826);if(a.jL){j=(a.ix+b)/8.0;k=Bq(j*j*3.1415927410125732);m=Bq(D_(j)*3.1415927410125732);Bv( -k*20.0,0.0,1.0,0.0);b
= -m;Bv(b*20.0,0.0,0.0,1.0);Bv(b*80.0,1.0,0.0,0.0);}CC(0.4000000059604645,0.4000000059604645,0.4000000059604645);if(a.eR.bC<256){L();if(!BeO.data[a.eR.bC].ek()){f=3553;d=a.cO.bo;e=B(179);$p=5;continue _;}}if(a.eR.bC>=256){f=3553;d=a.cO.bo;e=B(230);$p=3;continue _;}f=3553;d=a.cO.bo;e=B(179);$p=4;continue _;case 2:$z=AD1(d,e,l);if(C()){break _;}g=$z;Cp(f,g);Bw((-1.0),3.5999999046325684,3.5);Bv(120.0,0.0,0.0,1.0);Bv(200.0,1.0,0.0,0.0);Bv((-135.0),0.0,1.0,0.0);CC(1.0,1.0,1.0);Bw(5.599999904632568,0.0,0.0);n=R9(Bgn,
a.cO.f);CC(1.0,1.0,1.0);ALx(n);BD();Bb(32826);DS();return;case 3:$z=AHs(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=BeK;m=(((DJ(a.eR)%16|0)*16|0)+0|0)/256.0;o=(((DJ(a.eR)%16|0)*16|0)+16|0)/256.0;p=(((DJ(a.eR)/16|0)*16|0)+0|0)/256.0;q=(((DJ(a.eR)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Dc(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,
1.0,0.0,r,u);Br(e);Bz(e);Dc(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),t,s);G(e,0.0,0.0,(-0.0625),r,s);Br(e);Bz(e);Dc(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Br(e);Bz(e);Dc(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,
(-0.0625),y,s);f=f+1|0;}Br(e);Bz(e);Dc(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Br(e);Bz(e);Dc(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Br(e);Bb(32826);BD();Bb(32826);DS();return;case 4:$z=AHs(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=
BeK;m=(((DJ(a.eR)%16|0)*16|0)+0|0)/256.0;o=(((DJ(a.eR)%16|0)*16|0)+16|0)/256.0;p=(((DJ(a.eR)/16|0)*16|0)+0|0)/256.0;q=(((DJ(a.eR)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Dc(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,1.0,0.0,r,u);Br(e);Bz(e);Dc(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),
t,s);G(e,0.0,0.0,(-0.0625),r,s);Br(e);Bz(e);Dc(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Br(e);Bz(e);Dc(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Br(e);Bz(e);Dc(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba
=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Br(e);Bz(e);Dc(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Br(e);Bb(32826);BD();Bb(32826);DS();return;case 5:$z=AHs(d,e);if(C()){break _;}g=$z;Cp(f,g);GW(a.z$,BeO.data[a.eR.bC]);BD();Bb(32826);DS();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,
$p);}
function AB7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bb(3008);if(a.cO.f.cU<=0){c=a.cO.A.bi;$p=1;continue _;}c=a.cO.bo;d=B(179);$p=2;continue _;case 1:$z=AHx(c);if(C()){break _;}e=$z;if(!e){d=a.cO.f;c=BfP;$p=3;continue _;}e=K(a.cO.f.d);f=K(a.cO.f.j);g=K(a.cO.f.e);c
=a.cO.bo;d=B(179);$p=4;continue _;case 2:$z=AHs(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeK;BU(1.0,1.0,1.0,0.8999999761581421);Ba(3042);Df(770,771);e=0;while(e<2){B3();L();f=Bgo.bb+(e*16|0)|0;g=(f&15)<<4;f=f&240;h=g;i=h/256.0;h=(h+15.989999771118164)/256.0;j=f;k=j/256.0;j=(j+15.989999771118164)/256.0;f=(e*2|0)-1|0;Bw( -f*0.23999999463558197,(-0.30000001192092896),0.0);Bv(f*10.0,0.0,1.0,0.0);Bz(c);l=h;m=j;G(c,(-0.5),(-0.5),(-0.5),l,m);n=i;G(c,0.5,(-0.5),(-0.5),n,m);m=k;G(c,0.5,0.5,(-0.5),n,m);G(c,(-0.5),
0.5,(-0.5),l,m);Br(c);BD();e=e+1|0;}BU(1.0,1.0,1.0,1.0);Bb(3042);c=a.cO.A.bi;$p=1;continue _;case 3:$z=AGF(d,c);if(C()){break _;}e=$z;if(!e){Ba(3008);return;}c=a.cO.bo;d=B(231);$p=6;continue _;case 4:$z=AHs(c,d);if(C()){break _;}o=$z;Cp(3553,o);c=a.cO.A;$p=5;case 5:$z=ACt(c,e,f,g);if(C()){break _;}p=$z;L();if(BeO.data[p]===null){d=a.cO.f;c=BfP;$p=3;continue _;}e=BeO.data[p].ci(2);BA();c=BeK;d=a.cO.f;$p=8;continue _;case 6:$z=AHs(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeK;d=a.cO.f;$p=7;case 7:$z=ADF(d,
b);if(C()){break _;}h=$z;BU(h,h,h,0.5);Ba(3042);Df(770,771);B3();h= -a.cO.f.v/64.0;i=a.cO.f.J/64.0;Bz(c);q=4.0+h;l=4.0+i;G(c,(-1.0),(-1.0),(-0.5),q,l);r=0.0+h;G(c,1.0,(-1.0),(-0.5),r,l);l=0.0+i;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Br(c);BD();BU(1.0,1.0,1.0,1.0);Bb(3042);Ba(3008);return;case 8:ADF(d,b);if(C()){break _;}BU(0.10000000149011612,0.10000000149011612,0.10000000149011612,0.5);B3();i=e%16|0;j=i/256.0-0.0078125;i=(i+15.989999771118164)/256.0+0.0078125;k=e/16|0;s=k/256.0-0.0078125;h=(k+15.989999771118164)
/256.0+0.0078125;Bz(c);q=i;l=h;G(c,(-1.0),(-1.0),(-0.5),q,l);r=j;G(c,1.0,(-1.0),(-0.5),r,l);l=s;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Br(c);BD();BU(1.0,1.0,1.0,1.0);d=a.cO.f;c=BfP;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AI$(a){var b,c,d,e;a.q$=a.i$;if(a.jL){a.ix=a.ix+1|0;if(a.ix==8){a.ix=0;a.jL=0;}}b=D9(a.cO.f.K);c=0.4000000059604645;d=(b!==a.eR?0.0:1.0)-a.i$;e=(-0.4000000059604645);if(d>=e)e=d;if(e<=c)c=e;a.i$=a.i$+c;if(a.i$<0.10000000149011612)a.eR=b;}
function AGJ(a){a.i$=0.0;}
function Pg(a){a.ix=(-1);a.jL=1;}
function AM7(a){a.i$=0.0;}
function P(){var a=this;D.call(a);a.bb=0;a.b=0;a.qd=0.0;a.nN=0.0;a.c_=0.0;a.cL=0.0;a.c$=0.0;a.db=0.0;a.cE=0.0;a.dc=0.0;a.gI=null;a.Eu=0.0;a.b$=null;}
var Bgp=null;var Bgq=null;var Bgr=null;var Bgs=null;var Bgt=null;var Bgu=null;var Bgv=null;var Bgw=null;var Bgx=null;var BeO=null;var Bgy=null;var Bgz=null;var BgA=null;var BgB=null;var BgC=null;var BeU=null;var BeQ=null;var BeR=null;var BeY=null;var Be0=null;var Be6=null;var BeP=null;var BfX=null;var BgD=null;var BfY=null;var BgE=null;var Be_=null;var Bfa=null;var Bff=null;var Bfe=null;var Bfd=null;var Be1=null;var Be2=null;var Bfb=null;var Be4=null;var BgF=null;var BgG=null;var BgH=null;var BgI=null;var BgJ
=null;var BgK=null;var BgL=null;var BgM=null;var BgN=null;var BgO=null;var BgP=null;var BgQ=null;var BgR=null;var BgS=null;var Bfc=null;var BgT=null;var Be7=null;var Be8=null;var Be9=null;var Be$=null;var Bfh=null;var Bfg=null;var BeS=null;var BeT=null;var BeZ=null;var Bfj=null;var Bfi=null;var Be5=null;var Bfk=null;var Be3=null;var Bgo=null;var BgU=null;var BgV=null;var BgW=null;var BgX=null;var BgY=null;var BgZ=null;var Bg0=null;var Bg1=null;var Bg2=null;var Bg3=null;var Bg4=null;var Bg5=null;var Bg6=null;var Bga
=null;var Bg7=null;var Bg8=null;function L(){L=Bt(P);AVe();}
function Bg9(a,b){var c=new P();D0(c,a,b);return c;}
function Kx(a,b,c){var d=new P();C8(d,a,b,c);return d;}
function D0(a,b,c){var d,e,f;L();a.gI=Bgp;a.Eu=1.0;if(BeO.data[b]!==null){c=new Cb;d=new T;V(d);Bl(c,U(FK(H(FK(H(Be(H(d,B(232)),b),B(233)),BeO.data[b]),B(234)),a)));M(c);}a.b$=c;BeO.data[b]=a;a.b=b;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);Bgz.data[b]=a.d4();e=BgA;f=!a.d4()?0:255;e.data[b]=f;BgB.data[b]=0;}
function C8(a,b,c,d){L();D0(a,b,d);a.bb=c;}
function BM(a,b){a.gI=b;return a;}
function Gt(a,b){BgA.data[a.b]=b;return a;}
function GI(a,b){BgC.data[a.b]=15.0*b|0;return a;}
function Dn(a,b){a.nN=b*3.0;return a;}
function A81(a){return 1;}
function AWC(a){return 0;}
function BH(a,b){var c;a.qd=b;c=a.nN;b=b*5.0;if(c<b)a.nN=b;return a;}
function Ff(a,b){Bgy.data[a.b]=b;}
function Bo(a,b,c,d,e,f,g){a.c_=b;a.cL=c;a.c$=d;a.db=e;a.cE=f;a.dc=g;}
function AE$(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sM(c,d,e);if(C()){break _;}f=$z;return f;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AGt(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!f&&a.cL>0.0)c=1;else if(f==1&&a.cE<1.0)c=1;else if(f==2&&a.c$>0.0)c=1;else if(f==3&&a.dc<1.0)c=1;else if(f==4&&a.c_>0.0)c=1;else{if(f!=5)break a;if(a.db>=1.0)break a;c=1;}return c;}$p=1;case 1:$z=b.la(c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ABW(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eG(c,d,e);if(C()){break _;}c=$z;return a.eW(f,c);default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A7f(a,b,c){return a.ci(b);}
function AVC(a,b){return a.bb;}
function K6(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.c_;h=d;i=h+a.cL;j=e;return D3(g,i,j+a.c$,f+a.db,h+a.cE,j+a.dc);}
function ALw(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.hs(b,c,d,e);if(C()){break _;}h=$z;if(h!==null&&L5(f,h))S(g,h);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Nh(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.c_;h=d;i=h+a.cL;j=e;return D3(g,i,j+a.c$,f+a.db,h+a.cE,j+a.dc);}
function A5j(a){return 1;}
function A6s(a,b,c){return a.pe();}
function A3M(a){return 1;}
function AHP(a,b,c,d,e,f){return;}
function APb(a,b,c,d,e,f){return;}
function Z5(a,b,c,d,e,f){return;}
function YL(a,b,c,d,e,f){return;}
function A3W(a){return 10;}
function AA5(a,b,c,d,e){return;}
function Z0(a,b,c,d,e){return;}
function AYn(a,b){return 1;}
function ATO(a,b,c){return a.b;}
function ABb(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qd<0.0)c=0.0;else{if(M4(b,a)){$p=1;continue _;}c=1.0/a.qd/100.0;}return c;case 1:$z=AKR(b,a);if(C()){break _;}c=$z;return c/a.qd/30.0;default:E_();}}C3().s(a,b,c,$p);}
function Yd(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=1.0;$p=1;case 1:a.HO(b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEX(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.eF(b.r);i=0;j=0.15000000596046448;k=c;l=d;m=e;while(i<h){if(N(b.r)<=g){n=a.dU(f,b.r);if(n>0){o=Hb(b,k+N(b.r)*0.699999988079071+j,l+N(b.r)*0.699999988079071+j,m+N(b.r)*0.699999988079071+j,Ky(n,1));o.g$=10;$p=1;continue _;}}i=i+1|0;}return;case 1:AOg(b,
o);if(C()){break _;}while(true){i=i+1|0;if(i>=h)break;if(N(b.r)>g)continue;n=a.dU(f,b.r);if(n<=0)continue;else{o=Hb(b,k+N(b.r)*0.699999988079071+j,l+N(b.r)*0.699999988079071+j,m+N(b.r)*0.699999988079071+j,Ky(n,1));o.g$=10;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AZ0(a,b){return a.nN/5.0;}
function Ka(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;h= -c;i= -d;j= -e;b=Dk(f,h,i,j);f=Dk(g,h,i,j);k=KL(b,f,a.c_);l=KL(b,f,a.db);m=JS(b,f,a.cL);n=JS(b,f,a.cE);o=Kv(b,f,a.c$);p=Kv(b,f,a.dc);if(!Rr(a,k))k=null;if(!Rr(a,l))l=null;if(!Xo(a,m))m=null;if(!Xo(a,n))n=null;if(!RJ(a,o))o=null;if(!RJ(a,p))p=null;q=null;if(k!==null)q=k;if(l!==null&&!(q!==null&&DH(b,l)>=DH(b,q)))q=l;if(m!==null&&!(q!==null&&DH(b,m)>=DH(b,q)))q=m;if(n!==null&&!(q!==null&&DH(b,n)>=DH(b,q)))q=n;if(o!==null&&!(q!==null&&DH(b,o)>=DH(b,q)))q=
o;if(p!==null&&!(q!==null&&DH(b,p)>=DH(b,q)))q=p;if(q===null)return null;r=(-1);if(q===k)r=4;if(q===l)r=5;if(q===m)r=0;if(q===n)r=1;if(q===o)r=2;if(q===p)r=3;return A0A(c,d,e,r,Dk(q,c,d,e));}
function Rr(a,b){return b===null?0:b.z>=a.cL&&b.z<=a.cE&&b.w>=a.c$&&b.w<=a.dc?1:0;}
function Xo(a,b){return b===null?0:b.x>=a.c_&&b.x<=a.db&&b.w>=a.c$&&b.w<=a.dc?1:0;}
function RJ(a,b){return b===null?0:b.x>=a.c_&&b.x<=a.db&&b.z>=a.cL&&b.z<=a.cE?1:0;}
function AQZ(a,b,c,d,e){return;}
function AVi(a){return 0;}
function AED(a,b,c,d,e){return 1;}
function AGH(a,b,c,d,e,f){return 0;}
function AJJ(a,b,c,d,e,f){return;}
function YD(a,b,c,d,e,f){return;}
function AAa(a,b,c,d,e,f){return;}
function AF5(a,b,c,d,e,f,g){return;}
function APV(a,b,c,d,e){return;}
function A9j(a,b,c,d,e){return 16777215;}
function AVe(){var b,c;Bgp=Ie(B(235),1.0,1.0);Bgq=Ie(B(236),1.0,1.0);Bgr=Ie(B(237),1.0,1.0);Bgs=Ie(B(238),1.0,1.0);Bgt=Ie(B(235),1.0,1.0);Bgu=Ie(B(235),1.0,1.5);Bgv=A_1(B(235),1.0,1.0);Bgw=Ie(B(239),1.0,1.0);Bgx=Bb_(B(240),1.0,1.0);BeO=J(P,256);Bgy=$rt_createBooleanArray(256);Bgz=$rt_createBooleanArray(256);BgA=$rt_createIntArray(256);BgB=$rt_createBooleanArray(256);BgC=$rt_createIntArray(256);BeU=BM(Dn(BH(Bbe(1,1),1.5),10.0),Bgt);BeQ=BM(BH(BbH(2),0.6000000238418579),Bgs);BeR=BM(BH(A_6(3,2),0.5),Bgr);BeY=BM(Dn(BH(Kx(4,
16,Bg$),2.0),10.0),Bgt);Be0=BM(Dn(BH(Kx(5,4,Bg_),2.0),5.0),Bgq);Be6=BM(BH(Bct(6,15),0.0),Bgs);BeP=BM(Dn(BH(Kx(7,17,Bg$),(-1.0)),6000000.0),Bgt);BfX=Gt(BH(AUh(8,BfP),100.0),3);BgD=Gt(BH(AXF(9,BfP),100.0),3);BfY=Gt(GI(BH(AUh(10,BfQ),0.0),1.0),255);BgE=Gt(GI(BH(AXF(11,BfQ),100.0),1.0),255);Be_=BM(BH(BbC(12,18),0.5),Bgx);Bfa=BM(BH(BbL(13,19),0.6000000238418579),Bgr);Bff=BM(Dn(BH(SG(14,32),3.0),5.0),Bgt);Bfe=BM(Dn(BH(SG(15,33),3.0),5.0),Bgt);Bfd=BM(Dn(BH(SG(16,34),3.0),5.0),Bgt);Be1=BM(BH(BcN(17),2.0),Bgq);Be2=BM(Gt(BH(BaH(18,
52),0.20000000298023224),1),Bgs);Bfb=BM(BH(Ba9(19),0.6000000238418579),Bgs);Be4=BM(BH(Ba5(20,49,Bha,0),0.30000001192092896),Bgv);BgF=null;BgG=null;BgH=null;BgI=null;BgJ=null;BgK=null;BgL=null;BgM=null;BgN=null;BgO=null;BgP=null;BgQ=null;BgR=null;BgS=null;Bfc=BM(BH(Kx(35,64,Bhb),0.800000011920929),Bgw);BgT=null;Be7=BM(BH(A3j(37,13),0.0),Bgs);Be8=BM(BH(A3j(38,12),0.0),Bgs);Be9=GI(BM(BH(ATM(39,29),0.0),Bgs),0.125);Be$=BM(BH(ATM(40,28),0.0),Bgs);Bfh=BM(Dn(BH(AEz(41,39),3.0),10.0),Bgu);Bfg=BM(Dn(BH(AEz(42,38),5.0),
10.0),Bgu);BeS=BM(Dn(BH(A9m(43,1),2.0),10.0),Bgt);BeT=BM(Dn(BH(A9m(44,0),2.0),10.0),Bgt);BeZ=BM(Dn(BH(Kx(45,7,Bg$),2.0),10.0),Bgt);Bfj=BM(BH(BaI(46,8),0.0),Bgs);Bfi=BM(BH(Baj(47,35),1.5),Bgq);Be5=BM(Dn(BH(Kx(48,36,Bg$),2.0),10.0),Bgt);Bfk=BM(Dn(BH(Bbo(49,37),10.0),20.0),Bgt);Be3=BM(GI(BH(Bba(50,80),0.0),0.9375),Bgq);Bgo=BM(GI(BH(BcT(51,31),0.0),1.0),Bgq);BgU=BM(BH(BcJ(52,65),5.0),Bgu);BgV=A$N(53,Be0);BgW=BM(BH(A_8(54),2.5),Bgq);BgX=BM(BH(BbN(55,62),0.5),Bgu);BgY=BM(Dn(BH(SG(56,50),3.0),5.0),Bgt);BgZ=BM(Dn(BH(AEz(57,
40),5.0),10.0),Bgu);Bg0=BM(BH(Bbr(58),2.5),Bgq);Bg1=BM(BH(Bcw(59,88),0.0),Bgs);Bg2=BM(BH(BbZ(60),0.6000000238418579),Bgr);Bg3=BM(BH(A4L(61,0),3.5),Bgt);Bg4=GI(BM(BH(A4L(62,1),3.5),Bgt),0.875);b=new Vo;BB();AHr(b,63,F(Jd),Bhc.cV);Bg5=BM(BH(b,1.0),Bgq);Bg6=BM(BH(Bad(64),3.0),Bgq);Bga=BM(BH(Bcl(65,83),0.4000000059604645),Bgq);Bg7=BM(BH(BaZ(66,128),1.0),Bgu);Bg8=A$N(67,BeY);c=0;while(c<256){if(BeO.data[c]!==null)Bhd.data[c]=A_7(c-256|0);c=c+1|0;}}
function Rx(){}
function AJe(){var a=this;Gb.call(a);a.d9=null;a.p=0;}
function Ci(){var a=new AJe();AV7(a);return a;}
function AV7(a){a.d9=J(D,10);}
function To(a,b){var c;if(a.d9.data.length<b){c=a.d9.data.length>=1073741823?2147483647:DC(b,DC(a.d9.data.length*2|0,5));a.d9=Nm(a.d9,c);}}
function Z(a,b){K8(a,b);return a.d9.data[b];}
function De(a){return a.p;}
function Q8(a,b,c){var d;K8(a,b);d=a.d9.data[b];a.d9.data[b]=c;return d;}
function S(a,b){var c,d;To(a,a.p+1|0);c=a.d9.data;d=a.p;a.p=d+1|0;c[d]=b;a.d6=a.d6+1|0;return 1;}
function AMI(a,b,c){var d;if(b>=0&&b<=a.p){To(a,a.p+1|0);d=a.p;while(d>b){a.d9.data[d]=a.d9.data[d-1|0];d=d+(-1)|0;}a.d9.data[b]=c;a.p=a.p+1|0;a.d6=a.d6+1|0;return;}c=new BO;O(c);M(c);}
function En(a,b){var c,d,e,f;K8(a,b);c=a.d9.data[b];a.p=a.p-1|0;while(b<a.p){d=a.d9.data;e=a.d9.data;f=b+1|0;d[b]=e[f];b=f;}a.d9.data[a.p]=null;a.d6=a.d6+1|0;return c;}
function H5(a,b){var c;c=AA9(a,b);if(c<0)return 0;En(a,c);return 1;}
function DG(a){ZB(a.d9,0,a.p,null);a.p=0;}
function K8(a,b){var c;if(b>=0&&b<a.p)return;c=new BO;O(c);M(c);}
function DF(){}
function TD(){D.call(this);this.AK=null;}
function AQB(a){CM(a.AK,SM(0,1,null,null));}
function AWl(a){AQB(a);}
function TC(){var a=this;D.call(a);a.Eo=null;a.EI=null;}
function AQy(a){CM(a.Eo,SM(0,0,null,a.EI.result));}
function AS3(a){AQy(a);}
function TB(){D.call(this);this.Du=null;}
function ASc(a){CM(a.Du,SM(1,0,B(241),null));}
function AZk(a){ASc(a);}
function TA(){D.call(this);this.Bm=null;}
function AJ9(a,b){var c,d,e,f,g,h,i;c=a.Bm.result;d=A9Y();e=J(B4,1).data;e[0]=B(242);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function ANI(a,b){AJ9(a,b);}
function A6I(a,b){ANI(a,b);}
function Sv(){D.call(this);}
var Bf6=null;function Bhe(){var a=new Sv();ZK(a);return a;}
function ZK(a){return;}
function AFo(){Bf6=Dd();BR(Bf6,B(24),A1F());}
function Cb(){B6.call(this);}
function Bhf(){var a=new Cb();AT8(a);return a;}
function AT8(a){O(a);}
function U_(){Cb.call(this);this.Ir=null;}
function EE(){B6.call(this);}
function Bc1(){var a=new EE();AUI(a);return a;}
function AUI(a){O(a);}
function AA6(){D.call(this);}
function Bhg(){var a=new AA6();AY3(a);return a;}
function AY3(a){return;}
function Fk(){var a=this;D.call(a);a.mB=0;a.bk=0;a.cy=0;a.lp=0;}
function Bhh(a){var b=new Fk();KN(b,a);return b;}
function KN(a,b){a.lp=(-1);a.mB=b;a.cy=b;}
function AVy(a){return a.mB;}
function A8q(a){return a.bk;}
function EO(a,b){var c,d;if(b>=0&&b<=a.cy){a.bk=b;if(b<a.lp)a.lp=0;return a;}c=new Cb;d=new T;V(d);Bl(c,U(H(Be(H(Be(H(d,B(243)),b),B(244)),a.cy),B(245))));M(c);}
function A05(a){return a.cy;}
function Nj(a,b){var c,d;if(b>=0&&b<=a.mB){if(a.lp>b)a.lp=(-1);a.cy=b;if(a.bk>a.cy)a.bk=a.cy;return a;}c=new Cb;d=new T;V(d);Bl(c,U(H(Be(H(Be(H(d,B(246)),b),B(244)),a.mB),B(245))));M(c);}
function EA(a){a.bk=0;a.cy=a.mB;a.lp=(-1);return a;}
function Gs(a){a.cy=a.bk;a.bk=0;a.lp=(-1);return a;}
function Ct(a){return a.cy-a.bk|0;}
function Fl(a){return a.bk>=a.cy?0:1;}
function L7(){Fk.call(this);}
function ADo(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new T;V(i);Bl(h,U(Be(H(Be(H(i,B(247)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gp;O(h);M(h);}if(d<0){h=new BO;i=new T;V(i);Bl(h,U(H(Be(H(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=RB(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;h=new T;V(h);Bl(i,U(H(Be(H(Be(H(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function VF(a,b){return ADo(a,b,0,b.data.length);}
function LR(a){EA(a);return a;}
function TH(a){Gs(a);return a;}
function P8(a,b){Nj(a,b);return a;}
function AE3(){var a=this;D.call(a);a.F=null;a.cz=0;a.fp=0;a.dO=0;}
function A8j(a){var b=new AE3();ATC(b,a);return b;}
function Kh(){var a=new AE3();AS_(a);return a;}
function ATC(a,b){a.cz=(-1);a.fp=0;a.dO=0;a.F=b;}
function AS_(a){a.cz=(-1);a.fp=0;a.dO=0;}
function AMw(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cz=f;$p=1;case 1:AN0(a,b,c,d,e);if(C()){break _;}a.cz=(-1);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AN0(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b.ek();g=a.F;$p=1;case 1:b.xJ(g,c,d,e);if(C()){break _;}if(!f){$p=2;continue _;}if(f==4){$p=3;continue _;}if(f==1){$p=4;continue _;}if(f==6){$p=5;continue _;}if(f==2){$p=6;continue _;}if(f==3){$p=7;continue _;}if(f==5){$p=8;continue _;}if(f==8){$p=9;continue _;}if(f==7){$p=10;continue _;}if(f==9){$p=11;continue _;}if(f==10){$p=12;continue _;}if
(f!=11)return 0;$p=13;continue _;case 2:$z=ABR(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 3:$z=AB1(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 4:$z=AA7(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 5:$z=ALI(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 6:$z=AN2(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 7:$z=ZP(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 8:$z=ADr(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 9:$z=AJx(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 10:$z=AKC(a,b,c,d,e);if(C())
{break _;}c=$z;return c;case 11:$z=AM8(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 12:$z=AIu(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 13:$z=AFG(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AN2(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.F;$p=1;case 1:$z=f.eG(c,d,e);if(C()){break _;}g=$z;BA();f=BeK;h=a.F;$p=2;case 2:$z=b.Cu(h,c,d,e);if(C()){break _;}i=$z;if(BgC.data[b.b]>0)i=1.0;Cq(f,i,i,i);if(g==1)GF(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if(g==2)GF(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,
0.0);else if(g==3)GF(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(g!=4)GF(a,b,c,d,e,0.0,0.0);else GF(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ZP(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:BA();f=BeK;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cu(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=i+15.989999771118164;p=o/256.0;q=1.399999976158142;b=a.F;g=d-1|0;$p=2;case 2:$z=b.la(c,g,e);if(C()){break _;}j=$z;if(j){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,
m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,
t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}b=Bgo;h=a.F;$p=3;case 3:$z=AFZ(b,h,c,g,e);if(C()){break _;}g=$z;if(g){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,
x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}bi=0.20000000298023224;bj=0.0625;if((((c+d|0)+e|0)&1)!=1){ba=l;bb=m;x=n;z=p;}else{x=(k+16|0)/256.0;z=(o
+16.0)/256.0;ba=l;bb=m;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){r=ba;ba=bb;bb=r;}b=Bgo;h=a.F;g=c-1|0;$p=4;case 4:$z=AFZ(b,h,g,d,e);if(C()){break _;}g=$z;if(g){w=c+bi;s=d+q+bj;t=e+1|0;G(f,w,s,t,ba,x);u=c+0|0;v=(d+0|0)+bj;G(f,u,v,t,ba,z);r=e+0|0;G(f,u,v,r,bb,z);G(f,w,s,r,bb,x);G(f,w,s,r,bb,x);G(f,u,v,r,bb,z);G(f,u,v,t,ba,z);G(f,w,s,t,ba,x);}b=Bgo;h=a.F;j=c+1|0;$p=5;case 5:$z=AFZ(b,h,j,d,e);if(C()){break _;}g=$z;if(g){r=j-bi;w=d+q+bj;s=e+0|0;G(f,r,w,s,bb,x);t=j-0|0;u=(d+0|0)+bj;G(f,t,u,s,bb,z);v=e+1|0;G(f,t,
u,v,ba,z);G(f,r,w,v,ba,x);G(f,r,w,v,ba,x);G(f,t,u,v,ba,z);G(f,t,u,s,bb,z);G(f,r,w,s,bb,x);}b=Bgo;h=a.F;g=e-1|0;$p=6;case 6:$z=AFZ(b,h,c,d,g);if(C()){break _;}g=$z;if(g){r=c+0|0;w=d+q+bj;s=e+bi;G(f,r,w,s,ba,x);t=(d+0|0)+bj;u=e+0|0;G(f,r,t,u,ba,z);v=j;G(f,v,t,u,bb,z);G(f,v,w,s,bb,x);G(f,v,w,s,bb,x);G(f,v,t,u,bb,z);G(f,r,t,u,ba,z);G(f,r,w,s,ba,x);}b=Bgo;h=a.F;bk=e+1|0;$p=7;case 7:$z=AFZ(b,h,c,d,bk);if(C()){break _;}g=$z;if(g){t=j;u=d+q+bj;v=bk-bi;G(f,t,u,v,bb,x);r=(d+0|0)+bj;w=bk-0|0;G(f,t,r,w,bb,z);s=c+0|0;G(f,
s,r,w,ba,z);G(f,s,u,v,ba,x);G(f,s,u,v,ba,x);G(f,s,r,w,ba,z);G(f,t,r,w,bb,z);G(f,t,u,v,bb,x);}b=Bgo;h=a.F;d=d+1|0;$p=8;case 8:$z=AFZ(b,h,c,d,e);if(C()){break _;}g=$z;if(g){r=c+0.5;t=r+0.5;u=r-0.5;r=e+0.5;w=r+0.5;r=r-0.5;if(((c+d|0)+e|0)&1){s=c+0|0;t=d+(-0.20000000298023224);G(f,s,t,w,m,n);u=d+0|0;G(f,s,u,r,m,p);v=j;G(f,v,u,r,l,p);G(f,v,t,w,l,n);x=(k+16|0)/256.0;z=(o+16.0)/256.0;G(f,v,t,r,m,x);G(f,v,u,w,m,z);G(f,s,u,w,l,z);G(f,s,t,r,l,x);}else{v=d+(-0.20000000298023224);x=e+0|0;G(f,u,v,x,m,n);z=d+0|0;G(f,t,z,
x,m,p);r=bk;G(f,t,z,r,l,p);G(f,u,v,r,l,n);w=(k+16|0)/256.0;s=(o+16.0)/256.0;G(f,t,v,r,m,w);G(f,u,z,r,m,s);G(f,u,z,x,l,s);G(f,t,v,x,l,w);}}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function ADr(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeK;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cu(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=j+16|0;l=g&240;if((((c+d|0)+e|0)&
1)!=1){g=j;j=k;k=g;}i=j;m=i/256.0;n=(i+15.989999771118164)/256.0;i=l;o=i/256.0;p=(i+15.989999771118164)/256.0;q=k;r=q/256.0;s=(q+15.989999771118164)/256.0;t=0.125;q=0.05000000074505806;b=a.F;k=c-1|0;$p=2;case 2:$z=b.la(k,d,e);if(C()){break _;}k=$z;if(k){u=c+q;v=(d+1|0)+t;w=(e+1|0)+t;G(f,u,v,w,m,o);x=(d+0|0)-t;G(f,u,x,w,m,p);w=(e+0|0)-t;G(f,u,x,w,n,p);G(f,u,v,w,n,o);}b=a.F;l=c+1|0;$p=3;case 3:$z=b.la(l,d,e);if(C()){break _;}k=$z;if(k){u=l-q;x=(d+0|0)-t;w=(e+1|0)+t;G(f,u,x,w,n,p);v=(d+1|0)+t;G(f,u,v,w,n,o);w=
(e+0|0)-t;G(f,u,v,w,m,o);G(f,u,x,w,m,p);}b=a.F;k=e-1|0;$p=4;case 4:$z=b.la(c,d,k);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+0|0)-t;x=e+q;G(f,u,m,x,s,p);w=(d+1|0)+t;G(f,u,w,x,s,o);u=(c+0|0)-t;G(f,u,w,x,r,o);G(f,u,m,x,r,p);}b=a.F;e=e+1|0;$p=5;case 5:$z=b.la(c,d,e);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+1|0)+t;x=e-q;G(f,u,m,x,r,o);w=(d+0|0)-t;G(f,u,w,x,r,p);u=(c+0|0)-t;G(f,u,w,x,s,p);G(f,u,m,x,s,o);}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AM8(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=
$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeK;g=a.F;$p=1;case 1:$z=g.eG(c,d,e);if(C()){break _;}h=$z;i=b.eW(0,h);if(a.cz>=0)i=a.cz;g=a.F;$p=2;case 2:$z=b.Cu(g,c,d,e);if(C()){break _;}j=$z;Cq(f,j,j,j);k=(i&15)<<4;l=i&240;m=k;n=m/256.0;o=(m+15.989999771118164)/256.0;m=l;p=m/256.0;q=(m+15.989999771118164)/256.0;r=c+1|0;s=c+0|0;t=e+0|0;u=e+1|0;v=d+0.0625;if(h!=1&&h!=2&&h!=3&&h!=7){if(h==8){w=s;x=r;y=r;z=u;m=t;j=t;ba=s;r=x;s=y;bb=u;t=m;u=j;}else if(h!=9){w=r;j=s;z=t;m=u;ba=r;r=j;bb=t;t=m;}else{w=r;ba
=s;j=r;z=u;bb=t;m=t;r=s;s=j;t=u;u=m;}}else{w=s;ba=r;z=t;bb=u;}if(h!=2&&h!=4){if(h!=3&&h!=5){x=v;j=v;y=v;m=v;v=j;}else{j=v+1.0;x=j;y=v;m=v;v=j;}}else{m=v+1.0;x=v;y=m;}bc=ba;bd=y;be=bb;G(f,bc,bd,be,o,p);bf=w;bg=x;bh=u;G(f,bf,bg,bh,o,q);bi=s;bj=v;bk=t;G(f,bi,bj,bk,n,q);bl=r;bm=m;bn=z;G(f,bl,bm,bn,n,p);G(f,bl,bm,bn,n,p);G(f,bi,bj,bk,n,q);G(f,bf,bg,bh,o,q);G(f,bc,bd,be,o,p);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p);}
function AJx(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeK;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cu(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=(i+15.989999771118164)
/256.0;b=a.F;$p=2;case 2:$z=b.eG(c,d,e);if(C()){break _;}p=$z;if(p==5){q=c+0.05000000074505806;r=(d+1|0)+0.0;s=(e+1|0)+0.0;G(f,q,r,s,l,n);t=(d+0|0)-0.0;G(f,q,t,s,l,o);s=(e+0|0)-0.0;G(f,q,t,s,m,o);G(f,q,r,s,m,n);}if(p==4){t=(c+1|0)-0.05000000074505806;q=(d+0|0)-0.0;s=(e+1|0)+0.0;G(f,t,q,s,m,o);r=(d+1|0)+0.0;G(f,t,r,s,m,n);s=(e+0|0)-0.0;G(f,t,r,s,l,n);G(f,t,q,s,l,o);}if(p==3){q=(c+1|0)+0.0;r=(d+0|0)-0.0;s=e+0.05000000074505806;G(f,q,r,s,m,o);t=(d+1|0)+0.0;G(f,q,t,s,m,n);q=(c+0|0)-0.0;G(f,q,t,s,l,n);G(f,q,r,s,
l,o);}if(p==2){r=(c+1|0)+0.0;s=(d+1|0)+0.0;t=(e+1|0)-0.05000000074505806;G(f,r,s,t,l,n);q=(d+0|0)-0.0;G(f,r,q,t,l,o);r=(c+0|0)-0.0;G(f,r,q,t,m,o);G(f,r,s,t,m,n);}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AA7(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeK;g=a.F;$p=1;case 1:$z=b.Cu(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eG(c,d,e);if(C()){break _;}i=$z;Ui(a,b,i,c,d,e);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALI(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeK;g=a.F;$p=1;case 1:$z=b.Cu(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eG(c,d,e);if(C()){break _;}i=$z;OJ(a,b,i,c,d-0.0625,e);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function GF(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;BA();h=BeK;i=b.ci(0);if(a.cz>=0)i=a.cz;j=(i&15)<<4;k=i&240;l=j;m=l/256.0;l=(l+15.989999771118164)/256.0;n=k;o=n/256.0;n=(n+15.989999771118164)/256.0;p=m;q=p+0.02734375;r=o;s=r+0.0234375;t=p+0.03515625;u=r+0.03125;c=c+0.5;e=e+0.5;v=c-0.5;w=c+0.5;x=e-0.5;y=e+0.5;z=c+f*0.375;ba=z-0.0625;bb=d+0.625;bc=e+g*0.375;bd=bc-0.0625;G(h,ba,bb,bd,q,s);bc=bc+0.0625;G(h,ba,bb,bc,q,u);q=z+0.0625;G(h,q,bb,bc,t,u);G(h,q,bb,bd,t,s);u=c-0.0625;bc=d
+1.0;G(h,u,bc,x,p,r);q=u+f;d=d+0.0;t=x+g;bd=n;G(h,q,d,t,p,bd);s=y+g;z=l;G(h,q,d,s,z,bd);G(h,u,bc,y,z,r);u=c+0.0625;G(h,u,bc,y,p,r);c=c+f+0.0625;G(h,c,d,s,p,bd);G(h,c,d,t,z,bd);G(h,u,bc,x,z,r);c=e+0.0625;G(h,v,bc,c,p,r);u=v+f;q=c+g;G(h,u,d,q,p,bd);f=w+f;G(h,f,d,q,z,bd);G(h,w,bc,c,z,r);c=e-0.0625;G(h,w,bc,c,p,r);e=c+g;G(h,f,d,e,p,bd);G(h,u,d,e,z,bd);G(h,v,bc,c,z,r);}
function Ui(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;BA();g=BeK;h=b.eW(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.44999998807907104;q=d+0.44999998807907104;d=f+0.5;r=d-0.44999998807907104;s=d+0.44999998807907104;d=e+1.0;G(g,p,d,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,q,e,s,m,o);G(g,q,d,s,m,n);G(g,q,d,s,l,n);G(g,q,e,s,l,o);G(g,p,e,r,m,o);G(g,p,d,r,m,n);G(g,p,d,s,l,n);G(g,p,e,s,l,o);G(g,q,e,r,m,o);G(g,q,d,r,m,n);G(g,
q,d,r,l,n);G(g,q,e,r,l,o);G(g,p,e,s,m,o);G(g,p,d,s,m,n);}
function OJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeK;h=b.eW(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.25;q=d+0.25;f=f+0.5;r=f-0.5;s=f+0.5;t=e+1.0;G(g,p,t,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,p,e,s,m,o);G(g,p,t,s,m,n);G(g,p,t,s,l,n);G(g,p,e,s,l,o);G(g,p,e,r,m,o);G(g,p,t,r,m,n);G(g,q,t,s,l,n);G(g,q,e,s,l,o);G(g,q,e,r,m,o);G(g,q,t,r,m,n);G(g,q,t,r,l,n);G(g,q,e,r,l,o);G(g,q,e,s,m,o);G(g,q,t,s,m,n);p
=d-0.5;d=d+0.5;q=f-0.25;f=f+0.25;G(g,p,t,q,l,n);G(g,p,e,q,l,o);G(g,d,e,q,m,o);G(g,d,t,q,m,n);G(g,d,t,q,l,n);G(g,d,e,q,l,o);G(g,p,e,q,m,o);G(g,p,t,q,m,n);G(g,d,t,f,l,n);G(g,d,e,f,l,o);G(g,p,e,f,m,o);G(g,p,t,f,m,n);G(g,p,t,f,l,n);G(g,p,e,f,l,o);G(g,d,e,f,m,o);G(g,d,t,f,m,n);}
function AB1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w
=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeK;g=a.F;h=d+1|0;i=1;$p=1;case 1:$z=b.pF(g,c,h,e,i);if(C()){break _;}h=$z;g=a.F;i=d-1|0;j=0;$p=2;case 2:$z=b.pF(g,c,i,e,j);if(C()){break _;}j=$z;k=$rt_createBooleanArray(4).data;l=0;g=a.F;m=e-1|0;n=2;$p=3;case 3:$z=b.pF(g,c,d,m,n);if(C()){break _;}n=$z;k[l]=n;n=1;g
=a.F;o=e+1|0;l=3;$p=4;case 4:$z=b.pF(g,c,d,o,l);if(C()){break _;}l=$z;k[n]=l;n=2;g=a.F;p=c-1|0;l=4;$p=5;case 5:$z=b.pF(g,p,d,e,l);if(C()){break _;}l=$z;k[n]=l;n=3;g=a.F;q=c+1|0;l=5;$p=6;case 6:$z=b.pF(g,q,d,e,l);if(C()){break _;}l=$z;k[n]=l;if(!h&&!j&&!k[0]&&!k[1]&&!k[2]&&!k[3])return 0;r=0;s=0.5;t=1.0;u=0.800000011920929;v=0.6000000238418579;w=0.0;x=1.0;y=b.b$;g=a.F;$p=7;case 7:$z=g.eG(c,d,e);if(C()){break _;}z=$z;$p=8;case 8:$z=APx(a,c,d,e,y);if(C()){break _;}ba=$z;$p=9;case 9:$z=APx(a,c,d,o,y);if(C()){break _;}bb
=$z;$p=10;case 10:$z=APx(a,q,d,o,y);if(C()){break _;}bc=$z;$p=11;case 11:$z=APx(a,q,d,e,y);if(C()){break _;}bd=$z;if(!a.dO&&!h){if(!a.dO&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;a:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eW(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dO)break a;if(k[i])break a;i=i+1|0;}b.cL=w;b.cE=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn
=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;}r=1;bx=b.eW(1,z);g=a.F;$p=12;case 12:$z=A6f(g,c,d,e,y);if(C()){break _;}by=$z;bm=by;h=R(bm,(-999.0));if(h>0)bx=b.eW(2,z);n=(bx&15)<<4;l=bx&240;by=(n+8.0)/256.0;bz=(l+8.0)/256.0;if(h<0)bm=0.0;else{by=(n+16|0)/256.0;bz=(l+16|0)/256.0;}bn=Bq(bm)*8.0/256.0;bo=BC(bm)*8.0/256.0;g=a.F;$p=14;continue _;case 13:$z
=b.Cu(g,c,i,e);if(C()){break _;}bp=$z;bm=s*bp;Cq(f,bm,bm,bm);HD(a,b,c,d,e,b.ci(0));r=1;i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;b:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eW(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dO)break b;if(k[i])break b;i=i+1|0;}b.cL=w;b.cE=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=
((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;case 14:$z=b.Cu(g,c,d,e);if(C()){break _;}bi=$z;bm=t*bi;Cq(f,bm,bm,bm);bA=c+0|0;bm=d;br=bm+ba;bu=e+0|0;bB=bo;bf=by-bB;bw=bn;bC=bf-bw;bs=bz-bB;G(f,bA,br,bu,bC,bs+bw);bC=bm+bb;bv=o;bf=bf+bw;br=bz+bB;G(f,bA,bC,bv,bf,br+bw);bA=q;bf=bm+bc;by=by+bB;G(f,bA,bf,bv,by+bw,br-bw);G(f,bA,bm+bd,bu,by-bw,bs-bw);if(!a.dO&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;c:{while(i<4){h=!i?m:e;n=R(i,
1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eW(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dO)break c;if(k[i])break c;i=i+1|0;}b.cL=w;b.cE=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;case 15:$z
=b.Cu(g,o,d,h);if(C()){break _;}bt=$z;bt=t*(l>=0?bt*v:bt*u);Cq(f,bt,bt,bt);bC=bo;by=be+bm;bA=s;G(f,bC,by,bA,br,bu);by=bp;bu=be+bn;bB=bq;G(f,by,bu,bB,bs,bv);G(f,by,bf,bB,bs,bw);G(f,bC,bf,bA,br,bw);c:{while(true){i=i+1|0;if(i>=4)break;h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eW(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dO)break c;if(k[i])break c;}b.cL=w;b.cE=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp
=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p);}
function APx(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=0.0;h=0;i=c+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;case 1:$z=l.oJ(j,i,k);if(C()){break _;}l=$z;if(l===e)return 1.0;l=a.F;$p=2;case 2:$z=l.oJ(j,c,k);if(C()){break _;}l=$z;if(l===e){l=a.F;$p=3;continue _;}if(!l.du()){g=g+1.0;f=f+1|0;}h=h+1|0;if(h
>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;case 3:$z=l.eG(j,c,k);if(C()){break _;}m=$z;if(!(m<8&&m)){g=g+Js(m)*10.0;f=f+10|0;}g=g+Js(m);f=f+1|0;h=h+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIZ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0.5;h=1.0;i=0.800000011920929;j=0.6000000238418579;BA();k=BeK;Bz(k);$p=1;case 1:$z=b.Cu(c,d,e,f);if(C()){break _;}l=$z;m=e-1|0;$p=2;case 2:$z=b.Cu(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;n=g*n;Cq(k,n,n,n);HD(a,b,(-0.5),(-0.5),(-0.5),b.ci(0));m=e+1|0;$p=3;case 3:$z
=b.Cu(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;h=h*n;Cq(k,h,h,h);JD(a,b,(-0.5),(-0.5),(-0.5),b.ci(1));m=f-1|0;$p=4;case 4:$z=b.Cu(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);JT(a,b,(-0.5),(-0.5),(-0.5),b.ci(2));m=f+1|0;$p=5;case 5:$z=b.Cu(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);J9(a,b,(-0.5),(-0.5),(-0.5),b.ci(3));m=d-1|0;$p=6;case 6:$z=b.Cu(c,m,e,f);if(C()){break _;}h=$z;if(h<l)h=l;h=j*h;Cq(k,h,h,h);JN(a,b,(-0.5),(-0.5),(-0.5),b.ci(4));d=d+1|0;$p=7;case 7:$z=b.Cu(c,d,e,
f);if(C()){break _;}h=$z;if(h>=l)l=h;h=j*l;Cq(k,h,h,h);KQ(a,b,(-0.5),(-0.5),(-0.5),b.ci(5));Br(k);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ABR(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;$p=1;case 1:$z=ALs(a,b,c,d,e,f,f,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ALs(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();i=BeK;j=0;k=0.5*f;l=1.0*f;m=0.800000011920929*f;n=0.6000000238418579*f;o=0.5
*g;p=1.0*g;q=0.800000011920929*g;r=0.6000000238418579*g;s=0.5*h;t=1.0*h;u=0.800000011920929*h;v=0.6000000238418579*h;w=a.F;$p=1;case 1:$z=b.Cu(w,c,d,e);if(C()){break _;}x=$z;if(a.dO){w=a.F;y=d-1|0;$p=2;continue _;}w=a.F;z=d-1|0;y=0;$p=3;continue _;case 2:$z=b.Cu(w,c,y,e);if(C()){break _;}ba=$z;if(BgC.data[b.b]>0)ba=1.0;Cq(i,k*ba,o*ba,s*ba);bb=c;bc=d;bd=e;w=a.F;y=0;$p=4;continue _;case 3:$z=b.pF(w,c,z,e,y);if(C()){break _;}y=$z;if(y){w=a.F;y=d-1|0;$p=2;continue _;}if(a.dO){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y
=d+1|0;z=1;$p=6;continue _;case 4:$z=b.ui(w,c,d,e,y);if(C()){break _;}y=$z;HD(a,b,bb,bc,bd,y);j=1;if(a.dO){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y=d+1|0;z=1;$p=6;continue _;case 5:$z=b.Cu(w,c,y,e);if(C()){break _;}ba=$z;if(b.cE!==1.0&&!b.b$.nA())ba=x;if(BgC.data[b.b]>0)ba=1.0;Cq(i,l*ba,p*ba,t*ba);bb=c;bc=d;bd=e;w=a.F;y=1;$p=9;continue _;case 6:$z=b.pF(w,c,y,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=d+1|0;$p=5;continue _;}if(a.dO){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 7:$z=b.Cu(w,
c,d,y);if(C()){break _;}ba=$z;if(b.c$>0.0)ba=x;if(BgC.data[b.b]>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=2;$p=12;continue _;case 8:$z=b.pF(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e-1|0;$p=7;continue _;}if(a.dO){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 9:$z=b.ui(w,c,d,e,y);if(C()){break _;}y=$z;JD(a,b,bb,bc,bd,y);j=1;if(a.dO){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 10:$z=b.Cu(w,c,d,y);if(C()){break _;}ba=$z;if(b.dc<1.0)ba=x;if(BgC.data[b.b]
>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=3;$p=15;continue _;case 11:$z=b.pF(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e+1|0;$p=10;continue _;}if(a.dO){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 12:$z=b.ui(w,c,d,e,y);if(C()){break _;}y=$z;JT(a,b,bb,bc,bd,y);j=1;if(a.dO){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 13:$z=b.Cu(w,y,d,e);if(C()){break _;}ba=$z;if(b.c_>0.0)ba=x;if(BgC.data[b.b]>0)ba=1.0;Cq(i,n*ba,r*ba,v*ba);bb=c;bc=d;bd=e;w
=a.F;y=4;$p=18;continue _;case 14:$z=b.pF(w,y,d,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=c-1|0;$p=13;continue _;}if(a.dO){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 15:$z=b.ui(w,c,d,e,y);if(C()){break _;}y=$z;J9(a,b,bb,bc,bd,y);j=1;if(a.dO){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 16:$z=b.Cu(w,y,d,e);if(C()){break _;}ba=$z;if(b.db>=1.0)x=ba;if(BgC.data[b.b]>0)x=1.0;Cq(i,n*x,r*x,v*x);bb=c;bc=d;bd=e;i=a.F;y=5;$p=19;continue _;case 17:$z=b.pF(w,y,d,e,
z);if(C()){break _;}y=$z;if(!y)return j;w=a.F;y=c+1|0;$p=16;continue _;case 18:$z=b.ui(w,c,d,e,y);if(C()){break _;}y=$z;JN(a,b,bb,bc,bd,y);j=1;if(a.dO){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 19:$z=b.ui(i,c,d,e,y);if(C()){break _;}c=$z;KQ(a,b,bb,bc,bd,c);j=1;return j;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AFG(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;Bo(b,0.375,0.0,0.375,0.625,1.0,0.625);$p=1;case 1:ABR(a,b,c,d,e);if(C()){break _;}g=0;h=0;i=a.F;j=c-1|0;$p=2;case 2:$z=i.eh(j,d,e);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=c+1|0;$p=3;continue _;}g=1;i=a.F;j=e-1|0;$p=4;continue _;case 3:$z=i.eh(j,d,e);if(C()){break _;}j
=$z;if(j==b.b)g=1;i=a.F;j=e-1|0;$p=4;case 4:$z=i.eh(c,d,j);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=e+1|0;$p=5;continue _;}h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 5:$z=i.eh(c,d,j);if(C()){break _;}j=$z;if(j==b.b)h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if
(g){Bo(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 6:ABR(a,b,c,d,e);if(C()){break _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 7:ABR(a,b,c,d,e);if(C()){break _;}m=0.375;n
=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 8:ABR(a,b,c,d,e);if(C()){break _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;case 9:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AIu(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=a.F;$p=1;case 1:$z=g.eG(c,d,e);if(C()){break _;}h=$z;if(!h){Bo(b,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bo(b,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bo(b,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ABR(a,
b,c,d,e);if(C()){break _;}Bo(b,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 4:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 6:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 8:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.5,1.0,0.5,1.0);$p
=9;case 9:ABR(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeK;g=b;h=0.5;i=1.0;j=0.800000011920929;k=0.6000000238418579;l=a.F;$p=1;case 1:$z=b.Cu(l,c,d,e);if(C()){break _;}m=$z;l=a.F;n=d-1|0;$p=2;case 2:$z=b.Cu(l,c,n,e);if(C()){break _;}o=$z;if(g.cL>0.0)o=m;if(BgC.data[b.b]
>0)o=1.0;h=h*o;Cq(f,h,h,h);p=c;q=d;r=e;l=a.F;n=0;$p=3;case 3:$z=b.ui(l,c,d,e,n);if(C()){break _;}n=$z;HD(a,b,p,q,r,n);l=a.F;n=d+1|0;$p=4;case 4:$z=b.Cu(l,c,n,e);if(C()){break _;}h=$z;if(g.cE<1.0)h=m;if(BgC.data[b.b]>0)h=1.0;i=i*h;Cq(f,i,i,i);l=a.F;n=1;$p=5;case 5:$z=b.ui(l,c,d,e,n);if(C()){break _;}n=$z;JD(a,b,p,q,r,n);l=a.F;n=e-1|0;$p=6;case 6:$z=b.Cu(l,c,d,n);if(C()){break _;}i=$z;if(g.c$>0.0)i=m;if(BgC.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=2;$p=7;case 7:$z=b.ui(l,c,d,e,n);if(C()){break _;}s=$z;if(s
<0){a.fp=1;s= -s;}JT(a,b,p,q,r,s);a.fp=0;l=a.F;n=e+1|0;$p=8;case 8:$z=b.Cu(l,c,d,n);if(C()){break _;}i=$z;if(g.dc<1.0)i=m;if(BgC.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=3;$p=9;case 9:$z=b.ui(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fp=1;s= -s;}J9(a,b,p,q,r,s);a.fp=0;l=a.F;n=c-1|0;$p=10;case 10:$z=b.Cu(l,n,d,e);if(C()){break _;}i=$z;if(g.c_>0.0)i=m;if(BgC.data[b.b]>0)i=1.0;i=k*i;Cq(f,i,i,i);l=a.F;n=4;$p=11;case 11:$z=b.ui(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fp=1;s= -s;}JN(a,b,p,q,r,s);a.fp=0;l=a.F;n
=c+1|0;$p=12;case 12:$z=b.Cu(l,n,d,e);if(C()){break _;}i=$z;if(g.db>=1.0)m=i;if(BgC.data[b.b]>0)m=1.0;i=k*m;Cq(f,i,i,i);l=a.F;n=5;$p=13;case 13:$z=b.ui(l,c,d,e,n);if(C()){break _;}c=$z;if(c<0){a.fp=1;c= -c;}KQ(a,b,p,q,r,c);a.fp=0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function HD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeK;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.db*16.0-0.01)/256.0;j=i;m=(j+b.c$*16.0)/256.0;n=(j+b.dc*16.0-0.01)/256.0;if(!(b.c_>=0.0&&b.db<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c$>=0.0&&b.dc<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.c_;q=c+b.db;r=d+b.cL;s=e+b.c$;t=e+b.dc;G(g,j,r,t,k,n);G(g,j,r,s,k,m);G(g,q,r,s,l,m);G(g,q,r,t,l,n);}
function JD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeK;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.db*16.0-0.01)/256.0;j=i;m=(j+b.c$*16.0)/256.0;n=(j+b.dc*16.0-0.01)/256.0;if(!(b.c_>=0.0&&b.db<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c$>=0.0&&b.dc<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.c_;q=c+b.db;r=d+b.cE;s=e+b.c$;t=e+b.dc;G(g,q,r,t,l,n);G(g,q,r,s,l,m);G(g,j,r,s,k,m);G(g,j,r,t,k,n);}
function JT(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeK;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;j=(j+b.db*16.0-0.01)/256.0;l=i;m=(l+b.cL*16.0)/256.0;n=(l+b.cE*16.0-0.01)/256.0;if(!a.fp){l=j;j=k;k=l;}if(!(b.c_>=0.0&&b.db<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cE<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.c_;q=c+b.db;r=d+b.cL;s=d+b.cE;t=e+b.c$;G(g,l,s,t,k,m);G(g,q,s,t,j,m);G(g,q,r,t,j,n);G(g,l,r,t,k,n);}
function J9(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeK;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;j=(j+b.db*16.0-0.01)/256.0;l=i;m=(l+b.cL*16.0)/256.0;n=(l+b.cE*16.0-0.01)/256.0;if(!a.fp){l=j;j=k;k=l;}if(!(b.c_>=0.0&&b.db<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cE<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.c_;q=c+b.db;r=d+b.cL;s=d+b.cE;t=e+b.dc;G(g,l,s,t,j,m);G(g,l,r,t,j,n);G(g,q,r,t,k,n);G(g,q,s,t,k,m);}
function JN(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeK;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c$*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.cL*16.0)/256.0;n=(j+b.cE*16.0-0.01)/256.0;if(!a.fp){j=l;l=k;k=j;}if(!(b.c$>=0.0&&b.dc<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cE<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.c_;q=d+b.cL;r=d+b.cE;s=e+b.c$;t=e+b.dc;G(g,j,r,t,k,m);G(g,j,r,s,l,m);G(g,j,q,s,l,n);G(g,j,q,t,k,n);}
function KQ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeK;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c$*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.cL*16.0)/256.0;n=(j+b.cE*16.0-0.01)/256.0;if(!a.fp){j=l;l=k;k=j;}if(!(b.c$>=0.0&&b.dc<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cE<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.db;q=d+b.cL;r=d+b.cE;s=e+b.c$;t=e+b.dc;G(g,j,q,t,l,n);G(g,j,q,s,k,n);G(g,j,r,s,k,m);G(g,j,r,t,l,m);}
function GW(a,b){var c,d;a:{BA();c=BeK;d=b.ek();if(d){if(d==1){Bz(c);Cj(0.0,(-1.0),0.0);Ui(a,b,(-1),(-0.5),(-0.5),(-0.5));Br(c);}else if(d==6){Bz(c);Cj(0.0,(-1.0),0.0);OJ(a,b,(-1),(-0.5),(-0.5),(-0.5));Br(c);}else{if(d!=2){if(d==3)break a;if(d!=5)break a;else break a;}Bz(c);Cj(0.0,(-1.0),0.0);GF(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Br(c);}}else{Bw((-0.5),(-0.5),(-0.5));Bz(c);Cj(0.0,(-1.0),0.0);HD(a,b,0.0,0.0,0.0,b.ci(0));Br(c);Bz(c);Cj(0.0,1.0,0.0);JD(a,b,0.0,0.0,0.0,b.ci(1));Br(c);Bz(c);Cj(0.0,0.0,(-1.0));JT(a,
b,0.0,0.0,0.0,b.ci(2));Br(c);Bz(c);Cj(0.0,0.0,1.0);J9(a,b,0.0,0.0,0.0,b.ci(3));Br(c);Bz(c);Cj((-1.0),0.0,0.0);JN(a,b,0.0,0.0,0.0,b.ci(4));Br(c);Bz(c);Cj(1.0,0.0,0.0);KQ(a,b,0.0,0.0,0.0,b.ci(5));Br(c);Bw(0.5,0.5,0.5);}}}
function QD(){var a=this;D.call(a);a.jg=null;a.hl=null;a.f1=0;a.f0=0;a.pD=0.0;a.m0=0.0;a.pC=0.0;a.b1=0.0;a.bY=0.0;a.bV=0.0;a.wo=0;a.lQ=0;a.lz=0;a.iP=0;a.BU=0;}
function BK(a,b){var c=new QD();A9h(c,a,b);return c;}
function A9h(a,b,c){a.wo=0;a.lQ=0;a.lz=0;a.iP=1;a.BU=0;a.f1=b;a.f0=c;}
function BG(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;a.jg=J(ER,8);a.hl=J(Fv,6);i=b+e;j=c+f;k=d+g;l=b-h;m=c-h;n=d-h;d=i+h;j=j+h;h=k+h;if(!a.lz){b=l;l=d;d=b;}a:{o=G2(d,m,n,0.0,0.0);p=G2(l,m,n,0.0,8.0);q=G2(l,j,n,8.0,8.0);r=G2(d,j,n,8.0,0.0);s=G2(d,m,h,0.0,0.0);t=G2(l,m,h,0.0,8.0);u=G2(l,j,h,8.0,8.0);v=G2(d,j,h,8.0,0.0);a.jg.data[0]=o;a.jg.data[1]=p;a.jg.data[2]=q;a.jg.data[3]=r;a.jg.data[4]=s;a.jg.data[5]=t;a.jg.data[6]=u;a.jg.data[7]=v;w=a.hl.data;x=new Fv;y=J(ER,4);z=y.data;z[0]=t;z[1]=p;z[2]
=q;z[3]=u;Hf(x,y,(a.f1+g|0)+e|0,a.f0+g|0,((a.f1+g|0)+e|0)+g|0,(a.f0+g|0)+f|0);w[0]=x;z=a.hl.data;x=new Fv;w=J(ER,4);y=w.data;y[0]=o;y[1]=s;y[2]=v;y[3]=r;Hf(x,w,a.f1+0|0,a.f0+g|0,a.f1+g|0,(a.f0+g|0)+f|0);z[1]=x;z=a.hl.data;x=new Fv;w=J(ER,4);y=w.data;y[0]=t;y[1]=s;y[2]=o;y[3]=p;Hf(x,w,a.f1+g|0,a.f0+0|0,(a.f1+g|0)+e|0,a.f0+g|0);z[2]=x;z=a.hl.data;x=new Fv;w=J(ER,4);y=w.data;y[0]=q;y[1]=r;y[2]=v;y[3]=u;Hf(x,w,(a.f1+g|0)+e|0,a.f0+0|0,((a.f1+g|0)+e|0)+e|0,a.f0+g|0);z[3]=x;w=a.hl.data;x=new Fv;y=J(ER,4);z=y.data;z[0]
=p;z[1]=o;z[2]=r;z[3]=q;Hf(x,y,a.f1+g|0,a.f0+g|0,(a.f1+g|0)+e|0,(a.f0+g|0)+f|0);w[4]=x;z=a.hl.data;r=new Fv;w=J(ER,4);y=w.data;y[0]=s;y[1]=t;y[2]=u;y[3]=v;Hf(r,w,((a.f1+g|0)+e|0)+g|0,a.f0+g|0,(((a.f1+g|0)+e|0)+g|0)+e|0,(a.f0+g|0)+f|0);z[5]=r;if(a.lz){ba=0;while(true){if(ba>=a.hl.data.length)break a;ACS(a.hl.data[ba]);ba=ba+1|0;}}}}
function BJ(a,b,c,d){a.pD=b;a.m0=c;a.pC=d;}
function B_(a,b){var c,d;if(!a.BU&&a.iP){if(!a.wo){a.lQ=IW(1);FF(a.lQ,4864);BA();c=BeK;d=0;while(d<a.hl.data.length){APB(a.hl.data[d],c,b);d=d+1|0;}Ee();a.wo=1;}if(a.b1===0.0&&a.bY===0.0&&a.bV===0.0){if(a.pD===0.0&&a.m0===0.0&&a.pC===0.0)FQ(a.lQ);else{Bw(a.pD*b,a.m0*b,a.pC*b);FQ(a.lQ);Bw( -a.pD*b, -a.m0*b, -a.pC*b);}}else{B3();Bw(a.pD*b,a.m0*b,a.pC*b);if(a.bV!==0.0)Bv(a.bV*57.2957763671875,0.0,0.0,1.0);if(a.bY!==0.0)Bv(a.bY*57.2957763671875,0.0,1.0,0.0);if(a.b1!==0.0)Bv(a.b1*57.2957763671875,1.0,0.0,0.0);FQ(a.lQ);BD();}}}
function E4(){D.call(this);}
function AOz(a,b){Q4(a,b,0,b.data.length);}
function ATe(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.nJ(f[c]);e=e+1|0;c=g;}}
function A8V(a){return;}
function A9J(a){return;}
function F_(){E4.call(this);this.fm=null;}
function Bhi(a){var b=new F_();K9(b,a);return b;}
function K9(a,b){a.fm=b;}
function KO(a){var $$je;a:{try{a.fm.ls();break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}}a.fm.tO();}
function AA2(){var a=this;F_.call(a);a.GF=0;a.uJ=0;a.hE=null;a.nP=null;a.AR=null;}
function AYI(a,b){var c=new AA2();A$A(c,a,b);return c;}
function A$A(a,b,c){K9(a,b);b=new T;V(b);a.hE=b;a.nP=$rt_createCharArray(32);a.GF=c;a.AR=A1F();}
function VM(a,b,c,d){var $$je;if(a.fm===null)a.uJ=1;if(!(a.uJ?0:1))return;a:{try{a.fm.gu(b,c,d);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}a.uJ=1;}}
function TG(a,b,c,d){var e,f,g,h,i;e=b.data;f=AM3(b,c,d-c|0);e=$rt_createByteArray(DC(16,CB(e.length,1024)));g=AAo(e);h=AGU(ACO(AG2(a.AR),Bf7),Bf7);while(true){i=IO(AJc(h,f,g,1));VM(a,e,0,g.bk);EA(g);if(!i)break;}while(true){i=IO(XW(h,g));VM(a,e,0,g.bk);EA(g);if(!i)break;}}
function AKE(a,b){a.nP.data[0]=b;TG(a,a.nP,0,1);}
function Ko(a,b){H(a.hE,b);J8(a);}
function ABJ(a,b){Dx(Be(a.hE,b),10);J8(a);}
function Cg(a,b){Dx(H(a.hE,b),10);J8(a);}
function ACg(a,b){Dx(FK(a.hE,b),10);J8(a);}
function APA(a){AKE(a,10);}
function J8(a){var b;b=a.hE.bZ<=a.nP.data.length?a.nP:$rt_createCharArray(a.hE.bZ);AAw(a.hE,0,a.hE.bZ,b,0);TG(a,b,0,a.hE.bZ);ANf(a.hE,0);}
function W_(){E4.call(this);}
function Bhj(){var a=new W_();A3r(a);return a;}
function A3r(a){return;}
function AYf(a,b){$rt_putStdout(b);}
function AE_(){Cb.call(this);this.Fq=null;}
function ALo(a){var b=new AE_();A03(b,a);return b;}
function A03(a,b){O(a);a.Fq=b;}
function MP(){var a=this;D.call(a);a.cf=null;a.B=0;a.N=0;a.G=Long_ZERO;a.uV=null;a.pM=0;a.ib=0;a.no=Long_ZERO;a.b8=null;a.jv=null;a.f9=null;}
function Bhk(){var a=new MP();OL(a);return a;}
function OL(a){a.f9=A9S();}
function AAE(a,b,c,d){a.uV=b;a.pM=c;a.ib=d;}
function AJ8(a,b,c,d,e){var f;if(d<=0&&e&&a.cf!==null)return;if(a.N>0&&e){f=$rt_createByteArray(a.N+d|0);Di(a.cf,a.B,f,0,a.N);Di(b,c,f,a.N,d);a.cf=f;a.B=0;a.N=a.N+d|0;}else{a.cf=b;a.B=c;a.N=d;}}
function Ue(){MP.call(this);this.rR=0;}
function Bhl(){var a=new Ue();A29(a);return a;}
function A29(a){OL(a);a.rR=0;AAR(a);}
function AAR(a){return ACF(a,15);}
function ACF(a,b){return R0(a,b,0);}
function R0(a,b,c){var d;a.rR=0;d=new LH;d.rQ=Long_fromInt(-1);d.iF=(-1);d.xH=$rt_createByteArray(4);d.cI=null;d.fX=null;d.E=a;a.jv=d;d=a.jv;if(c)b= -b;return Xx(d,b);}
function AF3(a,b){var c;if(a.jv===null)return (-2);c=AGB(a.jv,b);if(c==1)a.rR=1;return c;}
function Ye(a){return a.jv.bQ!=12?0:1;}
function In(){var a=this;D.call(a);a.Cl=null;a.oO=0.0;a.pL=0.0;}
function Ie(a,b,c){var d=new In();O1(d,a,b,c);return d;}
function O1(a,b,c,d){a.Cl=b;a.oO=c;a.pL=d;}
function AML(a){return a.oO;}
function Yc(a){return a.pL;}
function Kf(a){var b;b=new T;V(b);return U(H(H(b,B(252)),a.Cl));}
function AHm(){In.call(this);}
function A_1(a,b,c){var d=new AHm();AZq(d,a,b,c);return d;}
function AZq(a,b,c,d){O1(a,b,c,d);}
function ACo(){In.call(this);}
function Bb_(a,b,c){var d=new ACo();A7L(d,a,b,c);return d;}
function A7L(a,b,c,d){O1(a,b,c,d);}
function LO(){P.call(this);}
function Bbe(a,b){var c=new LO();AI6(c,a,b);return c;}
function AI6(a,b,c){C8(a,b,c,Bg$);}
function A8H(a,b,c){L();return BeY.b;}
function Z2(){P.call(this);}
function BbH(a){var b=new Z2();AY1(b,a);return b;}
function AY1(a,b){D0(a,b,Bhm);a.bb=3;Ff(a,1);}
function A7q(a,b){return b==1?0:b?3:2;}
function ADn(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=Xv(b,c,g,e);if(C()){break _;}h=$z;if(h>=4){$p=2;continue _;}$p=3;continue _;case 2:$z=Xv(b,c,g,e);if(C()){break _;}g=$z;if(g<9)return;h=(c+E(f,3)|0)-1|0;g=(d+E(f,5)|0)-3|0;i=(e+E(f,3)|0)-1|0;$p=4;continue _;case 3:$z=ABX(b,c,g,e);if(C()){break _;}j=$z;if(!j.si()){$p=2;continue _;}if(E(f,
4))return;L();h=BeR.b;$p=6;continue _;case 4:$z=ACt(b,h,g,i);if(C()){break _;}c=$z;L();if(c!=BeR.b)return;c=g+1|0;$p=5;case 5:$z=Xv(b,h,c,i);if(C()){break _;}d=$z;if(d<4)return;$p=7;continue _;case 6:APv(b,c,d,e,h);if(C()){break _;}return;case 7:$z=ABX(b,h,c,i);if(C()){break _;}f=$z;if(f.si())return;c=BeQ.b;$p=8;case 8:APv(b,h,g,i,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AZ7(a,b,c){L();return BeR.dU(0,c);}
function AHS(){P.call(this);}
function A_6(a,b){var c=new AHS();AXx(c,a,b);return c;}
function AXx(a,b,c){C8(a,b,c,Bhm);}
function B8(){D.call(this);}
var Bf$=null;var Bhm=null;var Bg_=null;var Bg$=null;var Bhn=null;var BfP=null;var BfQ=null;var Bho=null;var Bhp=null;var Bhq=null;var Bhb=null;var Bhr=null;var Bhs=null;var Bht=null;var Bha=null;var Bhu=null;var Bhv=null;function Bhw(){var a=new B8();AQk(a);return a;}
function AQk(a){return;}
function A8l(a){return 0;}
function A0X(a){return 1;}
function A7Q(a){return 1;}
function A5s(a){return 1;}
function AP3(){Bf$=new Og;Bhm=new B8;Bg_=new B8;Bg$=new B8;Bhn=new B8;BfP=new LZ;BfQ=new LZ;Bho=new B8;Bhp=new N3;Bhq=new B8;Bhb=new B8;Bhr=new Og;Bhs=new B8;Bht=new N3;Bha=new B8;Bhu=new B8;Bhv=new B8;}
function FZ(){P.call(this);}
function A3j(a,b){var c=new FZ();Lv(c,a,b);return c;}
function Lv(a,b,c){D0(a,b,Bhp);a.bb=c;Ff(a,1);Bo(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function ALT(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;return a.rn(c);default:E_();}}C3().s(a,b,c,d,e,$p);}
function AYj(a,b){L();return b!=BeQ.b&&b!=BeR.b&&b!=Bg2.b?0:1;}
function AIE(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJo(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AD8(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJo(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJo(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.G8(b,c,d,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APv(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AN6(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Xv(b,c,d,e);if(C()){break _;}f=$z;if(f<8){$p=3;continue _;}d=d-1|0;$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;return !a.rn(c)?0:1;case 3:$z=AGd(b,c,d,e);if(C()){break _;}g=$z;if(!g)return 0;d=d-1|0;$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGj(a,b,c,d,e){return null;}
function A6l(a){return 0;}
function ATY(a){return 0;}
function A7v(a){return 1;}
function AMW(){FZ.call(this);}
function Bct(a,b){var c=new AMW();A9D(c,a,b);return c;}
function A9D(a,b,c){Lv(a,b,c);Bo(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function AEf(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJo(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=Xv(b,c,g,e);if(C()){break _;}g=$z;if(g>=9&&!E(f,5)){$p=3;continue _;}return;case 3:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(g>=15){g=0;$p=4;continue _;}g=g+1|0;$p=6;continue _;case 4:ALr(b,c,d,e,g);if(C()){break _;}h=new Ra;$p=5;case 5:$z=AEJ(h,b,f,c,d,e);if(C()){break _;}g
=$z;if(g)return;g=a.b;$p=7;continue _;case 6:AKv(b,c,d,e,g);if(C()){break _;}return;case 7:ALr(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function HO(){P.call(this);this.qO=0;}
function Bhx(a,b){var c=new HO();PY(c,a,b);return c;}
function PY(a,b,c){C8(a,b,((c!==BfQ?12:14)*16|0)+13|0,c);a.qO=1;if(c===BfQ)a.qO=2;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);Ff(a,1);}
function Js(b){if(b>=8)b=0;return (b+1|0)/9.0;}
function AS$(a,b){return b&&b!=1?a.bb+1|0:a.bb;}
function AFe(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABX(b,c,d,e);if(C()){break _;}f=$z;if(f!==a.b$)return (-1);$p=2;case 2:$z=AEH(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AEb(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oJ(c,d,e);if(C()){break _;}f=$z;if(f!==a.b$)return (-1);$p=2;case 2:$z=b.eG(c,d,e);if(C()){break _;}g=$z;if(g>=8)g=0;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function A$$(a){return 0;}
function A$s(a){return 0;}
function A8E(a,b,c){return c&&!b?1:0;}
function ARv(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oJ(c,d,e);if(C()){break _;}g=$z;if(g===a.b$)c=0;else{if(f!=1){$p=2;continue _;}c=1;}return c;case 2:$z=AGt(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yb(a,b,c,d,e){return null;}
function A7Y(a){return 4;}
function A3d(a,b,c){return 0;}
function A5_(a,b){return 0;}
function AIL(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=BY(0.0,0.0,0.0);$p=1;case 1:$z=AEb(a,b,c,d,e);if(C()){break _;}g=$z;h=0;i=c-1|0;j=e-1|0;k=d-1|0;l=g-8|0;m=d-d|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 2:$z=b.eG(c,d,e);if
(C()){break _;}n=$z;if(n<8)return CD(f);k=0;n=2;$p=3;case 3:$z=ARv(a,b,c,d,j,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=e+1|0;p=3;$p=4;continue _;}k=1;if(!k){n=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 4:$z=ARv(a,b,c,d,n,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n
=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 5:$z=ARv(a,b,i,d,e,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k
=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 6:$z=ARv(a,b,n,d,e,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 7:$z=AEb(a,b,n,d,o);if(C()){break _;}p=$z;if(p<0){$p=8;continue _;}if(p>=0){q=p-g|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1
|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;continue _;case 8:$z=AEb(a,b,n,k,o);if(C()){break _;}p=$z;if(p>=0){q=p-l|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 9:$z=ARv(a,b,c,n,j,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d
=d+1|0;n=5;$p=12;continue _;case 10:$z=ARv(a,b,c,n,p,q);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 11:$z=ARv(a,b,i,n,e,p);if(C()){break _;}n=$z;if(n)k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;case 12:$z=ARv(a,b,c,d,e,n);if(C()){break _;}c=$z;if(c)k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,
m,n,o,p,q,$p);}
function ANb(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIL(a,b,c,d,e);if(C()){break _;}h=$z;g.x=g.x+h.x;g.z=g.z+h.z;g.w=g.w+h.w;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AU2(a){return a.b$===BfP?5:a.b$!==BfQ?0:30;}
function AEt(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sM(c,d,e);if(C()){break _;}f=$z;d=d+1|0;$p=2;case 2:$z=b.sM(c,d,e);if(C()){break _;}g=$z;if(f>g)g=f;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQ9(a,b,c,d,e,f){return;}
function A$p(a){return 0;}
function YB(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.b$===BfP&&!E(f,64)){$p=2;continue _;}if(a.b$!==BfQ)return;g=d+1|0;$p=1;case 1:$z=ABX(b,c,g,e);if(C()){break _;}h=$z;if(h!==Bf$)return;$p=3;continue _;case 2:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(g>0&&g<8)Ex(b,c+0.5,d+0.5,e+0.5,B(253),N(f)*0.25+0.75,N(f)*1.0+0.5);if(a.b$!==BfQ)return;g=d+1|0;$p=1;continue _;case 3:$z=AAz(b,
c,g,e);if(C()){break _;}g=$z;if(!g&&!E(f,100))BV(b,B(254),c+N(f),d+a.cE,e+N(f),0.0,0.0,0.0);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A6f(b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:g=null;if(f===BfP){L();g=BfX;$p=1;continue _;}if(f!==BfQ)return g.x===0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;L();f=BfY;$p=2;continue _;case 1:$z=AIL(g,b,c,d,e);if(C()){break _;}g=$z;if(f!==BfQ)return g.x===0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;L();f=BfY;$p=2;case 2:$z=AIL(f,b,c,d,e);if(C()){break _;}g=$z;return g.x===
0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;default:E_();}}C3().s(b,c,d,e,f,g,$p);}
function ARP(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO9(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ALe(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO9(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AO9(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b&&a.b$===BfQ){f=0;g=e-1|0;$p=2;continue _;}return;case 2:$z=ABX(b,c,d,g);if(C()){break _;}h=$z;if(h===BfP)f=1;if(!f){g=e+1|0;$p=3;continue _;}f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 3:$z
=ABX(b,c,d,g);if(C()){break _;}h=$z;if(h===BfP)f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 4:$z=ABX(b,g,d,e);if(C()){break _;}h=$z;if(h===BfP)f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 5:$z=ABX(b,g,d,e);if(C()){break _;}h=$z;if(h===BfP)f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 6:$z=ABX(b,c,g,e);if(C()){break _;}h
=$z;if(h===BfP)f=1;if(!f)return;$p=7;case 7:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(!g){L();f=Bfk.b;$p=8;continue _;}if(g>4){JP(a,b,c,d,e);return;}L();f=BeY.b;$p=9;continue _;case 8:APv(b,c,d,e,f);if(C()){break _;}JP(a,b,c,d,e);return;case 9:APv(b,c,d,e,f);if(C()){break _;}JP(a,b,c,d,e);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function JP(a,b,c,d,e){var f,g,h,i;Ex(b,c+0.5,d+0.5,e+0.5,B(215),0.5,2.5999999046325684+(N(b.r)-N(b.r))*0.800000011920929);f=0;g=c;h=d+1.2;i=e;while(f<8){BV(b,B(255),g+BP(),h,i+BP(),0.0,0.0,0.0);f=f+1|0;}}
function AEe(){var a=this;HO.call(a);a.mh=0;a.hf=null;a.cS=null;}
function AUh(a,b){var c=new AEe();AY8(c,a,b);return c;}
function AY8(a,b,c){PY(a,b,c);a.mh=0;a.hf=$rt_createBooleanArray(4);a.cS=$rt_createIntArray(4);}
function AG$(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;g=a.b+1|0;$p=2;case 2:AJl(b,c,d,e,g,f);if(C()){break _;}Jh(b,c,d,e,c,d,e);return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AOO(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFe(a,b,c,d,e);if(C()){break _;}g=$z;h=1;if(g<=0){$p=2;continue _;}i=(-100);a.mh=0;j=c-1|0;$p=3;continue _;case 2:AG$(a,b,c,d,e);if(C()){break _;}j=d-1|0;$p=7;continue _;case 3:$z=AOL(a,b,j,d,e,i);if(C()){break _;}j=$z;k=c+1|0;$p=4;case 4:$z=AOL(a,b,k,d,e,j);if
(C()){break _;}j=$z;k=e-1|0;$p=5;case 5:$z=AOL(a,b,c,d,k,j);if(C()){break _;}j=$z;k=e+1|0;$p=6;case 6:$z=AOL(a,b,c,d,k,j);if(C()){break _;}j=$z;k=j+a.qO|0;if(!(k<8&&j>=0))k=(-1);j=d+1|0;$p=8;continue _;case 7:$z=ALV(a,b,c,j,e);if(C()){break _;}k=$z;if(!k){if(g<0)return;if(!g){$p=12;continue _;}$p=13;continue _;}if(g>=8){d=a.b;$p=10;continue _;}d=a.b;k=g+8|0;$p=9;continue _;case 8:$z=AFe(a,b,c,j,e);if(C()){break _;}l=$z;if(l>=0){$p=11;continue _;}if(a.mh>=2&&a.b$===BfP)k=0;if(a.b$===BfQ&&g<8&&k<8&&k>g&&E(f,4))
{h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 9:AIX(b,c,j,e,d,k);if(C()){break _;}return;case 10:AIX(b,c,j,e,d,g);if(C()){break _;}return;case 11:$z=AFe(a,b,c,j,e);if(C()){break _;}k=$z;if(k<8)k=k+8|0;if(a.mh>=2&&a.b$===BfP)k=0;if(a.b$===BfQ&&g<8&&k<8&&k>g&&E(f,4)){h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 12:$z=AK2(a,b,c,d,e);if(C()){break _;}m
=$z;l=g+a.qO|0;if(g>=8)l=1;if(l>=8)return;m=m.data;if(m[0]){j=c-1|0;$p=14;continue _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 13:$z=ACl(a,b,c,j,e);if(C()){break _;}j=$z;if(!j)return;$p=12;continue _;case 14:AO$(a,b,j,d,e,l);if(C()){break _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 15:AO$(a,b,j,d,e,l);if(C()){break _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e
=e+1|0;$p=21;continue _;case 16:AO$(a,b,c,d,j,l);if(C()){break _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 17:AG$(a,b,c,d,e);if(C()){break _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 18:AKv(b,c,d,e,k);if(C()){break _;}Fm(b,c,d,e,a.b);j=a.b;$p=19;case 19:AHL(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 20:APv(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 21:AO$(a,b,c,d,e,l);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AO$(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALV(a,b,c,d,e);if(C()){break _;}g=$z;if(!g)return;$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}g=$z;if(g>0){if(a.b$!==BfQ){L();h=BeO.data[g];$p=4;continue _;}JP(a,b,c,d,e);}g=a.b;$p=3;case 3:AIX(b,c,d,e,g,f);if(C()){break _;}return;case 4:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;$p=5;case 5:h.IL(b,c,d,e,g);if(C()){break _;}g
=a.b;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANR(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=1000;i=0;j=R(g,1);k=R(g,3);l=R(g,2);m=c-1|0;n=e-1|0;o=d-1|0;p=R(f,4);q=f+1|0;a:{while(i<4){if(!(!i&&!j)){r=R(i,1);if(!(!r&&!g)){s=R(i,2);if(!(!s&&!k)){t=R(i,3);if(t)break a;if
(l)break a;}}}i=i+1|0;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;case 1:$z=ACl(a,b,u,d,r);if(C()){break _;}t=$z;if(!t){$p=2;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;continue _;case 2:$z=ABX(b,u,d,r);if(C()){break _;}v=$z;if(v!==a.b$){$p=3;continue _;}$p=4;continue _;case 3:$z=ACl(a,b,u,o,r);if(C()){break _;}t=$z;if(!t)return f;if
(p<0){$p=5;continue _;}c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;case 4:$z=AEH(b,u,d,r);if(C()){break _;}t=$z;if(t){$p=3;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1
|0;$p=1;continue _;case 5:$z=ANR(a,b,u,d,r,q,i);if(C()){break _;}t=$z;if(t<h)h=t;c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AK2(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;h=e-1|0;i=d-1|0;if(f>=4){c=a.cS.data[0];j=1;while(j<4){if(a.cS.data[j]<c)c=a.cS.data[j];j=j+1|0;}d=0;while(d<4){k=a.hf;k.data[d]=a.cS.data[d]!=c?0:1;d=d+1|0;}return a.hf;}a.cS.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;case 1:$z
=ACl(a,b,l,d,m);if(C()){break _;}j=$z;if(!j){$p=2;continue _;}f=f+1|0;if(f>=4){c=a.cS.data[0];j=1;while(j<4){if(a.cS.data[j]<c)c=a.cS.data[j];j=j+1|0;}d=0;while(d<4){k=a.hf;k.data[d]=a.cS.data[d]!=c?0:1;d=d+1|0;}return a.hf;}a.cS.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;continue _;case 2:$z=ABX(b,l,d,m);if(C()){break _;}n=$z;if(n!==a.b$){$p=3;continue _;}$p=4;continue _;case 3:$z=ACl(a,b,l,i,m);if(C()){break _;}j=$z;if(j){k=a.cS.data;j=1;$p=5;continue _;}a.cS.data[f]=0;f=f+1|0;if(f>=
4){c=a.cS.data[0];j=1;while(j<4){if(a.cS.data[j]<c)c=a.cS.data[j];j=j+1|0;}d=0;while(d<4){k=a.hf;k.data[d]=a.cS.data[d]!=c?0:1;d=d+1|0;}return a.hf;}a.cS.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 4:$z=AEH(b,l,d,m);if(C()){break _;}j=$z;if(j){$p=3;continue _;}f=f+1|0;if(f>=4){c=a.cS.data[0];j=1;while(j<4){if(a.cS.data[j]<c)c=a.cS.data[j];j=j+1|0;}d=0;while(d<4){k=a.hf;k.data[d]=a.cS.data[d]!=c?0:1;d=d+1|0;}return a.hf;}a.cS.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f
==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 5:$z=ANR(a,b,l,d,m,j,f);if(C()){break _;}j=$z;k[f]=j;f=f+1|0;if(f>=4){c=a.cS.data[0];j=1;while(j<4){if(a.cS.data[j]<c)c=a.cS.data[j];j=j+1|0;}d=0;while(d<4){k=a.hf;k.data[d]=a.cS.data[d]!=c?0:1;d=d+1|0;}return a.hf;}a.cS.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ACl(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;L();if(f!=Bg6.b&&f!=Bg5.b&&f!=Bga.b){if(!f)return 0;return BeO.data[f].b$.du();}return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AOL(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFe(a,b,c,d,e);if(C()){break _;}g=$z;if(g<0)return f;if(!g)a.mh=a.mh+1|0;if(g>=8)g=0;if(f>=0&&g>=f)g=f;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALV(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABX(b,c,d,e);if(C()){break _;}f=$z;if(f===a.b$)c=0;else{if(f!==BfQ){$p=2;continue _;}c=0;}return c;case 2:$z=ACl(a,b,c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AB0(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO9(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b)Fm(b,c,d,e,a.b);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AIJ(){HO.call(this);}
function AXF(a,b){var c=new AIJ();A2r(c,a,b);return c;}
function A2r(a,b,c){PY(a,b,c);Ff(a,0);}
function AGw(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO9(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return;$p=3;case 3:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;b.sm=1;f=a.b-1|0;$p=4;case 4:AJl(b,c,d,e,f,g);if(C()){break _;}Jh(b,c,d,e,c,d,e);Fm(b,c,d,e,a.b-1|0);b.sm=0;return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function I4(){P.call(this);}
var BeV=0;function BbC(a,b){var c=new I4();Ry(c,a,b);return c;}
function Ry(a,b,c){C8(a,b,c,Bhs);}
function ARN(a,b,c,d,e){Fm(b,c,d,e,a.b);}
function ASb(a,b,c,d,e,f){Fm(b,c,d,e,a.b);}
function APy(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ACt(b,c,g,e);if(C()){break _;}g=$z;if(!g)g=1;else{L();if(g==Bgo.b)g=1;else{f=BeO.data[g].b$;g=f===BfP?1:f!==BfQ?0:1;}}if(g&&d>=0){f=new JJ;h=c+0.5;i=d+0.5;j=e+0.5;c=a.b;Fz(f,b);f.oN=0;f.hS=c;f.mz=1;D1(f,0.9800000190734863,0.9800000190734863);f.c3=f.eM/2.0;k
=h;l=i;m=j;CT(f,k,l,m);f.g=0.0;f.i=0.0;f.h=0.0;f.i7=0;f.bT=k;f.cR=l;f.bS=m;if(!BeV){$p=2;continue _;}if(!f.cQ){$p=3;continue _;}}return;case 2:AOg(b,f);if(C()){break _;}return;case 3:AMM(f);if(C()){break _;}if(f.cQ)return;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function A3V(a){return 3;}
function ACK(){BeV=0;}
function AG3(){I4.call(this);}
function BbL(a,b){var c=new AG3();AVX(c,a,b);return c;}
function AVX(a,b,c){Ry(a,b,c);}
function A_l(a,b,c){if(E(c,10))b=a.b;else{BB();b=Bhy.cV;}return b;}
function YT(){P.call(this);}
function SG(a,b){var c=new YT();AZw(c,a,b);return c;}
function AZw(a,b,c){C8(a,b,c,Bg$);}
function A4m(a,b,c){b=a.b;L();if(b==Bfd.b){BB();b=Bhz.cV;}else if(a.b!=BgY.b)b=a.b;else{BB();b=BhA.cV;}return b;}
function AZ6(a,b){return 1;}
function AFf(){P.call(this);}
function BcN(a){var b=new AFf();A_c(b,a);return b;}
function A_c(a,b){D0(a,b,Bg_);a.bb=20;}
function A8W(a,b){return 1;}
function ATc(a,b,c){L();return Be1.b;}
function AVw(a,b){return b==1?21:b?20:21;}
function LV(){P.call(this);this.r2=0;}
function AQu(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eh(c,d,e);if(C()){break _;}g=$z;if(!a.r2&&g==a.b)return 0;$p=2;case 2:$z=AGt(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACC(){LV.call(this);this.Cn=0;}
function BaH(a,b){var c=new ACC();A0Z(c,a,b);return c;}
function A0Z(a,b,c){C8(a,b,c,Bho);a.r2=0;a.Cn=c;Ff(a,1);}
function AIx(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ABX(b,c,g,e);if(C()){break _;}f=$z;if(f.du())return;h=c-2|0;i=c+2|0;j=d+1|0;k=e-2|0;l=e+2|0;while(h<=i){m=g;while(m<=j){n=k;if(n<=l){$p=5;continue _;}m=m+1|0;}h=h+1|0;}$p=2;case 2:$z=AEH(b,c,d,e);if(C()){break _;}i=$z;$p=3;case 3:Yd(a,
b,c,d,e,i);if(C()){break _;}i=0;$p=4;case 4:APv(b,c,d,e,i);if(C()){break _;}return;case 5:$z=ACt(b,h,m,n);if(C()){break _;}o=$z;L();if(o==Be1.b)return;n=n+1|0;while(n>l){m=m+1|0;while(m>j){h=h+1|0;if(h>i){$p=2;continue _;}m=g;}n=k;}continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AW3(a,b){return E(b,10)?0:1;}
function A5c(a,b,c){L();return Be6.b;}
function A2P(a){return a.r2?0:1;}
function AKm(a,b){a.r2=b;a.bb=a.Cn+(!b?1:0)|0;}
function ASp(a,b,c,d,e,f){return;}
function ALd(){P.call(this);}
function Ba9(a){var b=new ALd();A8T(b,a);return b;}
function A8T(a,b){D0(a,b,Bhq);a.bb=48;}
function AKJ(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;if(k<=e){$p=1;continue _;}j=j+1|0;}f=f+1|0;}return;case 1:$z=ABX(b,f,j,k);if(C()){break _;}l=$z;k=k+1|0;a:while(true){if(k<=e){continue _;}j=j+1|0;while(j>d){f=f+1|0;if(f>g)break a;j=h;}k=i;}return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function ANt(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;if(l<=c){$p=1;continue _;}k=k+1|0;}f=f+1|0;}return;case 1:$z=ACt(b,f,k,l);if(C()){break _;}d=$z;$p=2;case 2:AHL(b,f,k,l,d);if(C()){break _;}l=l+1|0;a:while(true){if(l<=c){$p=1;continue _;}k=k+1|0;while(k>i){f
=f+1|0;if(f>g)break a;k=h;}l=j;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function M9(){P.call(this);this.Cy=0;}
function A$b(a){return 0;}
function Yt(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eh(c,d,e);if(C()){break _;}g=$z;if(!a.Cy&&g==a.b)return 0;$p=2;case 2:$z=AGt(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQl(){M9.call(this);}
function Ba5(a,b,c,d){var e=new AQl();A5f(e,a,b,c,d);return e;}
function A5f(a,b,c,d,e){C8(a,b,c,d);a.Cy=e;}
function AV5(a,b){return 0;}
function AHb(){FZ.call(this);}
function ATM(a,b){var c=new AHb();A$7(c,a,b);return c;}
function A$7(a,b,c){Lv(a,b,c);Bo(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AI5(a,b){L();return Bgz.data[b];}
function ADh(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Xv(b,c,d,e);if(C()){break _;}f=$z;if(f>13)return 0;d=d-1|0;$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;return !AI5(a,c)?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ABr(){P.call(this);}
function AEz(a,b){var c=new ABr();AXU(c,a,b);return c;}
function AXU(a,b,c){D0(a,b,Bhn);a.bb=c;}
function A4z(a,b){return b==1?a.bb-16|0:b?a.bb:a.bb+16|0;}
function Zd(){P.call(this);this.wz=0;}
function A9m(a,b){var c=new Zd();A6b(c,a,b);return c;}
function A6b(a,b,c){C8(a,b,6,Bg$);a.wz=c;if(!c)Bo(a,0.0,0.0,0.0,1.0,0.5,1.0);Gt(a,255);}
function A$K(a,b){return b>1?5:6;}
function A5R(a){return a.wz;}
function ABA(a,b,c,d,e,f){L();}
function ABg(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();f=d-1|0;$p=1;case 1:$z=ACt(b,c,f,e);if(C()){break _;}g=$z;if(g!=BeT.b)return;g=0;$p=2;case 2:APv(b,c,d,e,g);if(C()){break _;}d=BeS.b;$p=3;case 3:APv(b,c,f,e,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZl(a,b,c){L();return BeT.b;}
function AW5(a){return a.wz;}
function ASB(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();if(a!==BeT){$p=1;continue _;}if(f==1)return 1;$p=2;continue _;case 1:AGt(a,b,c,d,e,f);if(C()){break _;}if(f==1)return 1;$p=2;case 2:$z=AGt(a,b,c,d,e,f);if(C()){break _;}g=$z;if(!g)c=0;else{if(f){$p=3;continue _;}c=1;}return c;case 3:$z=b.eh(c,d,e);if(C()){break _;}c=$z;return c==a.b?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AOf(){P.call(this);}
function BaI(a,b){var c=new AOf();A0q(c,a,b);return c;}
function A0q(a,b,c){C8(a,b,c,Bhu);}
function A42(a,b){return !b?a.bb+2|0:b!=1?a.bb:a.bb+1|0;}
function AU$(a,b){return 0;}
function AGC(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=AWN(b,c+0.5,d+0.5,e+0.5);f.ho=E(b.r,f.ho/4|0)+(f.ho/8|0)|0;$p=1;case 1:AOg(b,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ASj(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=AWN(b,c+0.5,d+0.5,e+0.5);$p=1;case 1:AOg(b,g);if(C()){break _;}Dh(b,g,B(226),1.0,1.0);return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AC9(){P.call(this);}
function Baj(a,b){var c=new AC9();AUb(c,a,b);return c;}
function AUb(a,b,c){C8(a,b,c,Bg_);}
function A$_(a,b){return b>1?a.bb:4;}
function A4B(a,b){return 0;}
function XJ(){LO.call(this);}
function Bbo(a,b){var c=new XJ();AZr(c,a,b);return c;}
function AZr(a,b,c){AI6(a,b,c);}
function A28(a,b){return 1;}
function AUU(a,b,c){L();return Bfk.b;}
function AOB(){P.call(this);}
function Bba(a,b){var c=new AOB();A$Y(c,a,b);return c;}
function A$Y(a,b,c){C8(a,b,c,Bht);Ff(a,1);}
function ANj(a,b,c,d,e){return null;}
function A2a(a){return 0;}
function AV$(a){return 0;}
function A0V(a){return 2;}
function AL6(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;f=e+1|0;$p=4;case 4:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;d=d-1|0;$p=5;case 5:$z=AAz(b,c,d,e);if(C()){break _;}c=$z;return c;default:
E_();}}C3().s(a,b,c,d,e,f,$p);}
function ANN(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(f==1){h=d-1|0;$p=2;continue _;}if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 2:$z=AAz(b,c,h,e);if(C()){break _;}h=$z;if(h)g=5;if(f==2){h=e+1|0;$p=3;continue _;}if(f==3)
{h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 3:$z=AAz(b,c,d,h);if(C()){break _;}h=$z;if(h)g=4;if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 4:$z=AAz(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 5:$z=AAz(b,h,d,e);if(C()){break _;}h=$z;if(h)g=2;if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 6:$z
=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)g=1;$p=7;case 7:AKv(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AR_(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(g)return;$p=2;case 2:ABq(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABq(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=c+1|0;$p=2;continue _;}f=1;$p=3;continue _;case 2:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=e-1|0;$p=4;continue _;}f=2;$p=5;continue _;case 3:AKv(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 4:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=e+1|0;$p=7;continue _;}f=3;$p=8;continue _;case 5:AKv(b,
c,d,e,f);if(C()){break _;}$p=6;case 6:AE6(a,b,c,d,e);if(C()){break _;}return;case 7:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=d-1|0;$p=9;continue _;}f=4;$p=10;continue _;case 8:AKv(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 9:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(!f){$p=6;continue _;}f=5;$p=11;continue _;case 10:AKv(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 11:AKv(b,c,d,e,f);if(C()){break _;}$p=6;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AKa(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE6(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;$p=2;case 2:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;h=0;f=c-1|0;$p=3;case 3:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==1)h=1;f=c+1|0;$p=4;case 4:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==2)h=1;f=e-1|0;$p=5;case 5:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f&&
g==3)h=1;f=e+1|0;$p=6;case 6:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==4)h=1;f=d-1|0;$p=7;case 7:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(!f&&g==5)h=1;if(!h)return;$p=8;case 8:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;$p=9;case 9:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=10;case 10:APv(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AE6(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AL6(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APv(b,c,d,e,f);if(C()){break _;}return 0;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AKh(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}h=$z;if(h==1)Bo(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)Bo(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)Bo(a,0.3499999940395355,0.20000000298023224,
0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)Bo(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else Bo(a,0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);$p=2;case 2:$z=Ka(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AQn(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;m=j;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l
=i+0.2199999988079071;m=j;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==3){k=h;l=i+0.2199999988079071;m=j-0.27000001072883606;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g!=4){n=h;o=i;p=j;BV(b,B(256),n,o,p,0.0,0.0,0.0);BV(b,B(257),n,o,p,0.0,0.0,0.0);}else{k=h;l=i+0.2199999988079071;m=j+0.27000001072883606;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AO0(){var a=this;P.call(a);a.sz=null;a.t6=null;}
function BcT(a,b){var c=new AO0();A3J(c,a,b);return c;}
function A3J(a,b,c){C8(a,b,c,Bhr);a.sz=$rt_createIntArray(256);a.t6=$rt_createIntArray(256);Hr(a,Be0.b,5,20);Hr(a,Be1.b,5,5);Hr(a,Be2.b,30,60);Hr(a,Bfi.b,30,20);Hr(a,Bfj.b,15,100);Hr(a,Bfc.b,30,60);Ff(a,1);}
function Hr(a,b,c,d){a.sz.data[b]=c;a.t6.data[b]=d;}
function ARB(a,b,c,d,e){return null;}
function A5Y(a){return 0;}
function A8v(a){return 0;}
function AXu(a){return 3;}
function AWD(a,b){return 0;}
function AZ2(a){return 20;}
function XI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;h=R(g,15);if(h>=0){$p=2;continue _;}i=g+1|0;$p=3;continue _;case 2:$z=AMU(a,b,c,d,e);if(C()){break _;}i=$z;if(i){j=d-1|0;$p=4;continue _;}h=d-1|0;$p=5;continue _;case 3:AKv(b,
c,d,e,i);if(C()){break _;}Fm(b,c,d,e,a.b);$p=2;continue _;case 4:$z=AFZ(a,b,c,j,e);if(C()){break _;}i=$z;if(!i&&!h&&!E(f,4)){h=0;$p=13;continue _;}if(!(g%5|0)&&g>5){h=c+1|0;i=300;$p=7;continue _;}return;case 5:$z=AAz(b,c,h,e);if(C()){break _;}h=$z;if(h&&g<=3)return;h=0;$p=6;case 6:APv(b,c,d,e,h);if(C()){break _;}return;case 7:YA(a,b,h,d,e,i,f);if(C()){break _;}i=c-1|0;g=300;$p=8;case 8:YA(a,b,i,d,e,g,f);if(C()){break _;}g=100;$p=9;case 9:YA(a,b,c,j,e,g,f);if(C()){break _;}k=d+1|0;g=200;$p=10;case 10:YA(a,b,
c,k,e,g,f);if(C()){break _;}l=e-1|0;g=300;$p=11;case 11:YA(a,b,c,d,l,g,f);if(C()){break _;}m=e+1|0;g=300;$p=12;case 12:YA(a,b,c,d,m,g,f);if(C()){break _;}n=d+4|0;a:{while(i<=h){o=l;while(o<=m){p=j;while(p<=n){if(i!=c)break a;if(p!=d)break a;if(o!=e)break a;p=p+1|0;}o=o+1|0;}i=i+1|0;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 13:APv(b,c,d,e,h);if(C()){break _;}return;case 14:$z=ACt(b,i,p,o);if(C()){break _;}r=$z;if(!r){r=i+1|0;$p=15;continue _;}if(0>0&&E(f,q)<=0){g=a.b;$p=21;continue _;}b:
{c:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break c;o=l;}p=j;}if(i!=c)break b;if(p!=d)break b;if(o==e)continue;else break b;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;continue _;case 15:$z=AGy(a,b,r,p,o,g);if(C()){break _;}g=$z;r=i-1|0;$p=16;case 16:$z=AGy(a,b,r,p,o,g);if(C()){break _;}g=$z;r=p-1|0;$p=17;case 17:$z=AGy(a,b,i,r,o,g);if(C()){break _;}g=$z;r=p+1|0;$p=18;case 18:$z=AGy(a,b,i,r,o,g);if(C()){break _;}g=$z;r=o-1|0;$p=19;case 19:$z=AGy(a,b,i,p,r,g);if(C()){break _;}r=$z;g
=o+1|0;$p=20;case 20:$z=AGy(a,b,i,p,g,r);if(C()){break _;}r=$z;if(r>0&&E(f,q)<=r){g=a.b;$p=21;continue _;}d:{b:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break b;o=l;}p=j;}if(i!=c)break d;if(p!=d)break d;if(o==e)continue;else break d;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 21:APv(b,i,p,o,g);if(C()){break _;}a:{d:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break d;o=l;}p=j;}if(i!=c)break a;if(p!=d)break a;if(o==e)continue;else break a;}return;}q
=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function YA(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.t6.data;$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}i=$z;j=h[i];if(E(g,f)>=j)return;$p=2;case 2:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;L();i=f!=Bfj.b?0:1;if(E(g,2)){f=0;$p=3;continue _;}f=a.b;$p=4;continue _;case 3:APv(b,c,d,e,f);if(C()){break _;}if(!i)return;g=Bfj;f=0;$p=5;continue _;case 4:APv(b,c,d,e,f);if
(C()){break _;}if(!i)return;g=Bfj;f=0;$p=5;case 5:g.nn(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AMU(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;$p=1;case 1:$z=AFZ(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c-1|0;$p=2;case 2:$z=AFZ(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=d-1|0;$p=3;case 3:$z=AFZ(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=d+1|0;$p=4;case 4:$z=AFZ(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=5;case 5:$z=AFZ(a,b,c,d,f);if(C()){break _;}f=
$z;if(f)return 1;e=e+1|0;$p=6;case 6:$z=AFZ(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A3k(a){return 0;}
function AFZ(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.sz.data;$p=1;case 1:$z=b.eh(c,d,e);if(C()){break _;}c=$z;return f[c]<=0?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AGy(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.sz.data;$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;h=g[c];if(h>f)f=h;return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANq(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AMU(a,b,c,d,e);if(C()){break _;}c=$z;return c?1:0;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ABw(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AMU(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return;f=0;$p=3;case 3:APv(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ACp(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(f){Fm(b,c,d,e,a.b);return;}$p=2;case 2:$z=AMU(a,b,c,d,e);if(C()){break _;}f=$z;if(f){Fm(b,c,d,e,a.b);return;}f=0;$p=3;case 3:APv(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ASq(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!E(f,24))Ex(b,c+0.5,d+0.5,e+0.5,B(258),1.0+N(f),N(f)*0.699999988079071+0.30000001192092896);g=d-1|0;$p=1;case 1:$z=AAz(b,c,g,e);if(C()){break _;}h=$z;if(h){g=0;i=c;j=d;k=e;while(g<3){BV(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,
0.0);g=g+1|0;}return;}L();l=Bgo;$p=2;case 2:$z=AFZ(l,b,c,g,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;k=e;while(g<3){BV(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,0.0);g=g+1|0;}return;}l=Bgo;g=c-1|0;$p=3;case 3:a:{$z=AFZ(l,b,g,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;m=d;n=e;while(true){if(g>=2)break a;j=i+N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BV(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgo;h=c+1|0;$p=4;case 4:a:{$z=AFZ(l,b,h,d,e);if(C()){break _;}g=$z;if(g){g=0;i=h;m=d;n=e;while(true){if(g>=2)break a;j
=i-N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BV(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgo;g=e-1|0;$p=5;case 5:a:{$z=AFZ(l,b,c,d,g);if(C()){break _;}g=$z;if(g){g=0;i=c;k=d;n=e;while(true){if(g>=2)break a;j=i+N(f);m=k+N(f);o=n+N(f)*0.10000000149011612;BV(b,B(255),j,m,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgo;g=e+1|0;$p=6;case 6:a:{$z=AFZ(l,b,c,d,g);if(C()){break _;}h=$z;if(h){h=0;o=c;p=d;j=g;while(true){if(h>=2)break a;q=o+N(f);i=p+N(f);n=j-N(f)*0.10000000149011612;BV(b,B(255),q,i,n,0.0,0.0,0.0);h=h+1|0;}}}l=Bgo;d=
d+1|0;$p=7;case 7:a:{$z=AFZ(l,b,c,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;n=e;while(true){if(g>=2)break a;q=i+N(f);k=j-N(f)*0.10000000149011612;o=n+N(f);BV(b,B(255),q,k,o,0.0,0.0,0.0);g=g+1|0;}}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Eg(){P.call(this);}
function AOE(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.s_();$p=1;case 1:AFS(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ALX(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFJ(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Z$(){Eg.call(this);}
function BcJ(a,b){var c=new Z$();AUP(c,a,b);return c;}
function AUP(a,b,c){C8(a,b,c,Bg$);}
function AXg(a){return Bcs();}
function A53(a){return 0;}
function Zv(){P.call(this);this.cF=null;}
function A$N(a,b){var c=new Zv();A6$(c,a,b);return c;}
function A6$(a,b,c){C8(a,b,c.bb,c.b$);a.cF=c;BH(a,c.qd);Dn(a,c.nN/3.0);a.gI=c.gI;}
function A5G(a){return 0;}
function AV3(a){return 0;}
function AYV(a){return 10;}
function APz(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGt(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJz(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}h=$z;if(!h){Bo(a,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bo(a,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bo(a,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;}Bo(a,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ALw(a,b,c,d,e,f,
g);if(C()){break _;}Bo(a,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ALw(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 4:ALw(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ALw(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 6:ALw(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ALw(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 8:ALw(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.5,1.0,
0.5,1.0);$p=9;case 9:ALw(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AHB(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=ABX(b,c,g,e);if(C()){break _;}h=$z;if(!h.du()){$p=2;continue _;}i=a.cF.b;$p=11;continue _;case 2:AIq(a,b,c,d,e);if(C()){break _;}i=c+1|0;j=d-1|0;$p=3;case 3:AIq(a,b,i,j,e);if(C()){break _;}k=c-1|0;$p=4;case 4:AIq(a,b,k,j,e);if(C()){break _;}l=e-1|0;$p=5;case 5:AIq(a,
b,c,j,l);if(C()){break _;}m=e+1|0;$p=6;case 6:AIq(a,b,c,j,m);if(C()){break _;}$p=7;case 7:AIq(a,b,i,g,e);if(C()){break _;}$p=8;case 8:AIq(a,b,k,g,e);if(C()){break _;}$p=9;case 9:AIq(a,b,c,g,l);if(C()){break _;}$p=10;case 10:AIq(a,b,c,g,m);if(C()){break _;}h=a.cF;$p=12;continue _;case 11:APv(b,c,d,e,i);if(C()){break _;}h=a.cF;$p=12;case 12:h.eZ(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIq(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=APK(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;g=(-1);f=c+1|0;h=d+1|0;$p=2;case 2:$z=APK(a,b,f,h,e);if(C()){break _;}i=$z;if(i)g=0;i=c-1|0;$p=3;case 3:$z=APK(a,b,i,h,e);if(C()){break _;}j=$z;if(j)g=1;j=e+1|0;$p=4;case 4:$z=APK(a,b,c,h,j);if(C()){break _;}k=$z;if(k)g=2;k=e-1|0;$p=
5;case 5:$z=APK(a,b,c,h,k);if(C()){break _;}h=$z;if(h)g=3;if(g<0){$p=6;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 6:$z=ADx(a,b,f,d,e);if(C()){break _;}h=$z;if(h){$p=7;continue _;}$p=9;continue _;case 7:$z=ADx(a,b,i,d,e);if(C()){break _;}h=$z;if(!h)g=0;$p=9;continue _;case 8:$z=APK(a,b,i,h,e);if(C()){break _;}i=$z;if(i)g=0;$p=12;continue _;case 9:$z=ADx(a,b,i,d,e);if(C()){break _;}h=$z;if(h){$p=10;continue _;}$p=13;continue _;case 10:$z=ADx(a,b,f,d,e);if(C()){break _;}h=
$z;if(!h)g=1;$p=13;continue _;case 11:AKv(b,c,d,e,g);if(C()){break _;}return;case 12:$z=APK(a,b,f,h,e);if(C()){break _;}f=$z;if(f)g=1;$p=15;continue _;case 13:$z=ADx(a,b,c,d,j);if(C()){break _;}h=$z;if(h){$p=14;continue _;}$p=16;continue _;case 14:$z=ADx(a,b,c,d,k);if(C()){break _;}h=$z;if(!h)g=2;$p=16;continue _;case 15:$z=APK(a,b,c,h,k);if(C()){break _;}f=$z;if(f)g=2;$p=18;continue _;case 16:$z=ADx(a,b,c,d,k);if(C()){break _;}h=$z;if(h){$p=17;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 17:$z
=ADx(a,b,c,d,j);if(C()){break _;}h=$z;if(!h)g=3;if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 18:$z=APK(a,b,c,h,j);if(C()){break _;}f=$z;if(f)g=3;if(g<0)return;$p=11;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ADx(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABX(b,c,d,e);if(C()){break _;}b=$z;return b.du();default:E_();}}C3().s(a,b,c,d,e,$p);}
function APK(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(!f)c=0;else{L();c=BeO.data[f].ek()!=10?0:1;}return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function APc(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.kM(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABa(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.q8(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADm(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.nn(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AMV(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:$z=f.Cu(b,c,d,e);if(C()){break _;}g=$z;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function A8X(a,b){return a.cF.ym(b);}
function A7_(a){return a.cF.pP();}
function A4d(a,b,c){return a.cF.dU(b,c);}
function A0u(a,b){return a.cF.eF(b);}
function AXv(a,b,c){return a.cF.eW(b,c);}
function A75(a,b){return a.cF.ci(b);}
function AM6(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:$z=g.ui(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AVG(a){return a.cF.mr();}
function AMf(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:$z=f.oR(b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ACG(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cF;$p=1;case 1:h.qD(b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYB(a){return a.cF.pe();}
function AYO(a,b,c){return a.cF.o5(b,c);}
function AMn(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:$z=f.fT(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ACB(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:AHB(a,b,c,d,e,f);if(C()){break _;}g=a.cF;$p=2;case 2:g.fC(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yx(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:f.lv(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AHO(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cF;$p=1;case 1:h.HO(b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AMY(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.IL(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQR(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.oG(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQW(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.e6(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGI(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:$z=g.lB(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Y8(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:f.sK(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AFQ(){Eg.call(this);this.fl=null;}
function A_8(a){var b=new AFQ();A64(b,a);return b;}
function A64(a,b){D0(a,b,Bg_);a.fl=new Dz;a.bb=26;}
function AEw(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1)return a.bb-1|0;if(!f)return a.bb-1|0;g=e-1|0;$p=1;case 1:$z=b.eh(c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=b.eh(c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=b.eh(k,d,e);if(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=b.eh(m,
d,e);if(C()){break _;}n=$z;if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;L();if(Bgz.data[h]&&!Bgz.data[j])k=3;if(Bgz.data[j]&&!Bgz.data[h])k=2;if(Bgz.data[l]&&!Bgz.data[n])k=5;if(Bgz.data[n]&&!Bgz.data[l])k=4;return f!=k?a.bb:a.bb+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);c=l!=a.b?m:k;$p=7;continue _;}return a.bb;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);c=h!=a.b?i:g;$p=5;continue _;}return a.bb;case 5:$z=b.eh(k,d,c);if(C()){break _;}p=$z;if(h==a.b)i=g;$p=6;case 6:$z=b.eh(m,d,i);if(C()){break _;}m=$z;if(f==4)o=(-1)-o
|0;i=5;L();if(!(!Bgz.data[l]&&!Bgz.data[p])&&!Bgz.data[n]&&!Bgz.data[m])i=5;if(!(!Bgz.data[n]&&!Bgz.data[m])&&!Bgz.data[l]&&!Bgz.data[p])i=4;return (f!=i?a.bb+32|0:a.bb+16|0)+o|0;case 7:$z=b.eh(c,d,g);if(C()){break _;}g=$z;if(l==a.b)m=k;$p=8;case 8:$z=b.eh(m,d,i);if(C()){break _;}m=$z;if(f==3)o=(-1)-o|0;i=3;L();if(!(!Bgz.data[h]&&!Bgz.data[g])&&!Bgz.data[j]&&!Bgz.data[m])i=3;if(!(!Bgz.data[j]&&!Bgz.data[m])&&!Bgz.data[h]&&!Bgz.data[g])i=2;return (f!=i?a.bb+32|0:a.bb+16|0)+o|0;default:E_();}}C3().s(a,b,c,d,e,
f,g,h,i,j,k,l,m,n,o,p,$p);}
function A88(a,b){return b==1?a.bb-1|0:!b?a.bb-1|0:b!=3?a.bb:a.bb+1|0;}
function AJ2(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;$p=1;case 1:$z=ACt(b,g,d,e);if(C()){break _;}h=$z;if(h==a.b)f=1;h=c+1|0;$p=2;case 2:$z=ACt(b,h,d,e);if(C()){break _;}i=$z;if(i==a.b)f=f+1|0;i=e-1|0;$p=3;case 3:$z=ACt(b,c,d,i);if(C()){break _;}j=$z;if(j==a.b)f=f+1|0;k=e+1|0;$p=4;case 4:$z=ACt(b,c,d,k);if(C()){break _;}l=$z;if
(l==a.b)f=f+1|0;if(f>1)return 0;$p=5;case 5:$z=AIW(a,b,g,d,e);if(C()){break _;}j=$z;if(j)return 0;$p=6;case 6:$z=AIW(a,b,h,d,e);if(C()){break _;}e=$z;if(e)return 0;$p=7;case 7:$z=AIW(a,b,c,d,i);if(C()){break _;}e=$z;if(e)return 0;$p=8;case 8:$z=AIW(a,b,c,d,k);if(C()){break _;}c=$z;return c?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AIW(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return 0;f=c-1|0;$p=2;case 2:$z=ACt(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=c+1|0;$p=3;case 3:$z=ACt(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=e-1|0;$p=4;case 4:$z=ACt(b,c,d,f);if(C()){break _;}f=$z;if(f==a.b)return 1;e=e+1|0;$p=5;case 5:$z=ACt(b,c,d,e);if(C()){break _;}c
=$z;return c!=a.b?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ASD(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANw(b,c,d,e);if(C()){break _;}f=$z;g=f;h=0;i=27;j=c;k=d;l=e;while(h<i){f=Q9(g,h);if(f!==null){m=N(a.fl)*0.800000011920929+0.10000000149011612;n=N(a.fl)*0.800000011920929+0.10000000149011612;o
=N(a.fl)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;if(f.q>0){s=E(a.fl,21)+10|0;if(s>f.q)s=f.q;f.q=f.q-s|0;t=Hb(b,p,q,r,Ol(f.bC,s,f.el));t.g=CY(a.fl)*0.05000000074505806;t.i=CY(a.fl)*0.05000000074505806+0.20000000298023224;t.h=CY(a.fl)*0.05000000074505806;$p=3;continue _;}}h=h+1|0;}$p=2;case 2:ALX(a,b,c,d,e);if(C()){break _;}return;case 3:AOg(b,t);if(C()){break _;}a:while(true){if(f.q>0){s=E(a.fl,21)+10|0;if(s>f.q)s=f.q;f.q=f.q-s|0;t=Hb(b,p,q,r,Ol(f.bC,s,f.el));t.g=CY(a.fl)*0.05000000074505806;t.i
=CY(a.fl)*0.05000000074505806+0.20000000298023224;t.h=CY(a.fl)*0.05000000074505806;continue _;}while(true){h=h+1|0;if(h>=i)break a;f=Q9(g,h);if(f===null)continue;else break;}m=N(a.fl)*0.800000011920929+0.10000000149011612;n=N(a.fl)*0.800000011920929+0.10000000149011612;o=N(a.fl)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;}$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AFW(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANw(b,c,d,e);if(C()){break _;}g=$z;h=g;i=d+1|0;$p=2;case 2:$z=AAz(b,c,i,e);if(C()){break _;}j=$z;if(j)return 1;k=c-1|0;$p=3;case 3:$z=ACt(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){$p=5;continue _;}l=c+1|0;$p=4;case 4:$z=ACt(b,l,
d,e);if(C()){break _;}j=$z;if(j==a.b){$p=7;continue _;}m=e-1|0;$p=6;continue _;case 5:$z=AAz(b,k,i,e);if(C()){break _;}j=$z;if(j)return 1;l=c+1|0;$p=4;continue _;case 6:$z=ACt(b,c,d,m);if(C()){break _;}j=$z;if(j==a.b){$p=9;continue _;}n=e+1|0;$p=8;continue _;case 7:$z=AAz(b,l,i,e);if(C()){break _;}j=$z;if(j)return 1;m=e-1|0;$p=6;continue _;case 8:$z=ACt(b,c,d,n);if(C()){break _;}j=$z;if(j!=a.b){$p=10;continue _;}$p=11;continue _;case 9:$z=AAz(b,c,i,m);if(C()){break _;}j=$z;if(j)return 1;n=e+1|0;$p=8;continue _;case 10:$z
=ACt(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){g=new Id;o=B(259);$p=12;continue _;}g=h;$p=13;continue _;case 11:$z=AAz(b,c,i,n);if(C()){break _;}j=$z;if(j)return 1;$p=10;continue _;case 12:$z=ANw(b,k,d,e);if(C()){break _;}p=$z;K5(g,o,p,h);$p=13;case 13:$z=ACt(b,l,d,e);if(C()){break _;}j=$z;if(j!=a.b){o=g;$p=15;continue _;}o=new Id;p=B(259);g=g;$p=14;case 14:$z=ANw(b,l,d,e);if(C()){break _;}h=$z;K5(o,p,g,h);$p=15;case 15:$z=ACt(b,c,d,m);if(C()){break _;}e=$z;if(e==a.b){g=new Id;p=B(259);$p=16;continue _;}g=o;$p
=17;continue _;case 16:$z=ANw(b,c,d,m);if(C()){break _;}h=$z;K5(g,p,h,o);$p=17;case 17:$z=ACt(b,c,d,n);if(C()){break _;}e=$z;if(e==a.b){o=new Id;p=B(259);g=g;$p=18;continue _;}o=g;b=o;$p=19;continue _;case 18:$z=ANw(b,c,d,n);if(C()){break _;}b=$z;K5(o,p,g,b);b=o;$p=19;case 19:YX(f,b);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AZC(a){return Bbf();}
function AKI(){P.call(this);}
function BbN(a,b){var c=new AKI();AUS(c,a,b);return c;}
function AUS(a,b,c){C8(a,b,c,Bht);}
function AET(a,b,c,d,e){return null;}
function ATV(a){return 0;}
function A5e(a){return 0;}
function A7t(a){return 5;}
function A9Q(a,b){return 1;}
function AUA(a){return 0;}
function AHu(){P.call(this);}
function Bbr(a){var b=new AHu();AZh(b,a);return b;}
function AZh(a,b){D0(a,b,Bg_);a.bb=59;}
function AWt(a,b){if(b==1)b=a.bb-16|0;else if(!b){L();b=Be0.ci(0);}else b=b!=2&&b!=4?a.bb:a.bb+1|0;return b;}
function AGP(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANp(f);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AKH(){FZ.call(this);}
function Bcw(a,b){var c=new AKH();AZO(c,a,b);return c;}
function AZO(a,b,c){Lv(a,b,c);a.bb=c;Ff(a,1);Bo(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AYF(a,b){L();return b!=Bg2.b?0:1;}
function AJm(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJo(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=Xv(b,c,g,e);if(C()){break _;}h=$z;if(h<9)return;$p=3;case 3:$z=AEH(b,c,d,e);if(C()){break _;}h=$z;if(h>=7)return;$p=4;case 4:$z=Y$(a,b,c,d,e);if(C()){break _;}i=$z;if(E(f,100.0/i|0))return;g=h+1|0;$p=5;case 5:AKv(b,c,d,e,g);if(C()){break _;}return;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Y$(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;g=e-1|0;$p=1;case 1:$z=ACt(b,c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=ACt(b,c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=ACt(b,k,d,e);if
(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=ACt(b,m,d,e);if(C()){break _;}n=$z;$p=5;case 5:$z=ACt(b,k,d,g);if(C()){break _;}o=$z;$p=6;case 6:$z=ACt(b,m,d,g);if(C()){break _;}p=$z;$p=7;case 7:$z=ACt(b,m,d,i);if(C()){break _;}q=$z;$p=8;case 8:$z=ACt(b,k,d,i);if(C()){break _;}r=$z;s=l!=a.b&&n!=a.b?0:1;t=h!=a.b&&j!=a.b?0:1;u=o!=a.b&&p!=a.b&&q!=a.b&&r!=a.b?0:1;o=d-1|0;while(k<=m){v=g;if(v<=i){$p=9;continue _;}k=k+1|0;}a:{if(!u){if(!s)break a;if(!t)break a;}f=f/2.0;}return f;case 9:$z=ACt(b,k,o,v);if(C()){break _;}w
=$z;x=0.0;L();if(w==Bg2.b){x=1.0;$p=10;continue _;}if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){continue _;}k=k+1|0;if(k>m)break;v=g;}b:{if(!u){if(!s)break b;if(!t)break b;}f=f/2.0;}return f;case 10:$z=AEH(b,k,o,v);if(C()){break _;}d=$z;if(d>0)x=3.0;if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){$p=9;continue _;}k=k+1|0;if(k>m)break;v=g;}c:{if(!u){if(!s)break c;if(!t)break c;}f=f/2.0;}return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function A8t(a,b,c){if(c<0)c=7;return a.bb+c|0;}
function A4E(a){return 6;}
function ANy(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;h=c;i=d;j=e;while(g<3){if(E(b.r,15)<=f){k=N(b.r)*0.699999988079071+0.15000000596046448;l=N(b.r)*0.699999988079071+0.15000000596046448;m=N(b.r)*0.699999988079071+0.15000000596046448;n=new E$;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DB(r,
BhB);Ha(n,b,o,p,q,r);n.g$=10;$p=1;continue _;}g=g+1|0;}return;case 1:AOg(b,n);if(C()){break _;}while(true){g=g+1|0;if(g>=3)break;if(E(b.r,15)>f)continue;else{k=N(b.r)*0.699999988079071+0.15000000596046448;l=N(b.r)*0.699999988079071+0.15000000596046448;m=N(b.r)*0.699999988079071+0.15000000596046448;n=new E$;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DB(r,BhB);Ha(n,b,o,p,q,r);n.g$=10;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A0Y(a,b,c){var d;c=DT();d=new T;V(d);Cg(c,U(Be(H(d,B(260)),b)));if(b!=7)b=(-1);else{BB();b=BhC.cV;}return b;}
function A4V(a,b){return 1;}
function AQO(){P.call(this);}
function BbZ(a){var b=new AQO();A2K(b,a);return b;}
function A2K(a,b){D0(a,b,Bhm);a.bb=87;Ff(a,1);Bo(a,0.0,0.0,0.0,1.0,0.9375,1.0);Gt(a,255);}
function AA1(a,b,c,d,e){return D3(c+0|0,d+0|0,e+0|0,c+1|0,d+1|0,e+1|0);}
function AU1(a){return 0;}
function A1A(a){return 0;}
function A_k(a,b,c){b=R(b,1);return !b&&c>0?a.bb-1|0:b?2:a.bb;}
function ANc(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(f,5))return;g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;a:while(true){if(g>h){if(!0){$p=1;continue _;}g=7;$p=2;continue _;}l=d;while(l<=i){m=j;if(m<=k)break a;l=l+1|0;}g=g+1|0;}$p=4;continue _;case 1:$z=AEH(b,c,d,e);if(C()){break _;}h=$z;if(h>0){g=h-1|0;$p=3;continue _;}g
=c-0|0;h=c+0|0;m=e-0|0;j=e+0|0;while(true){if(g>h){if(0)return;L();g=BeR.b;$p=5;continue _;}l=m;if(l<=j)break;g=g+1|0;}$p=6;continue _;case 2:AKv(b,c,d,e,g);if(C()){break _;}return;case 3:AKv(b,c,d,e,g);if(C()){break _;}return;case 4:$z=ABX(b,g,l,m);if(C()){break _;}f=$z;if(f===BfP)g=1;else{m=m+1|0;b:while(true){if(m<=k){continue _;}l=l+1|0;while(l>i){g=g+1|0;if(g>h)break b;l=d;}m=j;}g=0;}if(!g){$p=1;continue _;}g=7;$p=2;continue _;case 5:APv(b,c,d,e,g);if(C()){break _;}return;case 6:$z=ACt(b,g,i,l);if(C())
{break _;}n=$z;L();if(n==Bg1.b)g=1;else{l=l+1|0;while(true){if(l<=j){continue _;}g=g+1|0;if(g>h)break;l=m;}g=0;}if(g)return;L();g=BeR.b;$p=5;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AKO(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(b.r,4))return;L();g=BeR.b;$p=1;case 1:APv(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function X6(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d+1|0;$p=1;case 1:$z=ABX(b,c,f,e);if(C()){break _;}g=$z;if(!g.du())return;L();f=BeR.b;$p=2;case 2:APv(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AW0(a,b,c){L();return BeR.dU(0,c);}
function AF1(){Eg.call(this);this.wx=0;}
function A4L(a,b){var c=new AF1();ATP(c,a,b);return c;}
function ATP(a,b,c){D0(a,b,Bg$);a.wx=c;a.bb=45;}
function ACr(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AOE(a,b,c,d,e);if(C()){break _;}f=e-1|0;$p=2;case 2:$z=ACt(b,c,d,f);if(C()){break _;}g=$z;f=e+1|0;$p=3;case 3:$z=ACt(b,c,d,f);if(C()){break _;}f=$z;h=c-1|0;$p=4;case 4:$z=ACt(b,h,d,e);if(C()){break _;}h=$z;i=c+1|0;$p=5;case 5:$z=ACt(b,i,d,e);if(C()){break _;}i=$z;j=3;L();if(Bgz.data[g]&&!Bgz.data[f])j
=3;if(Bgz.data[f]&&!Bgz.data[g])j=2;if(Bgz.data[h]&&!Bgz.data[i])j=5;if(Bgz.data[i]&&!Bgz.data[h])j=4;$p=6;case 6:AKv(b,c,d,e,j);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AKe(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1){L();return BeU.bb;}if(!f){L();return BeU.bb;}$p=1;case 1:$z=b.eG(c,d,e);if(C()){break _;}g=$z;return f!=g?a.bb:!a.wx?a.bb-1|0:a.bb+16|0;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEk(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.wx)return;$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.0+N(f)*6.0/16.0;j=e+0.5;k=N(f)*0.6000000238418579-0.30000001192092896;if(g==4){l=h-0.5199999809265137;m=i;n=j+k;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),
l,m,n,0.0,0.0,0.0);}else if(g==5){l=h+0.5199999809265137;m=i;n=j+k;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==2){l=h+k;m=i;n=j-0.5199999809265137;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==3){o=h+k;p=i;q=j+0.5199999809265137;BV(b,B(256),o,p,q,0.0,0.0,0.0);BV(b,B(257),o,p,q,0.0,0.0,0.0);}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AUW(a,b){if(b==1){L();b=BeU.b;}else if(!b){L();b=BeU.b;}else b=b!=3?a.bb:a.bb-1|0;return b;}
function AGS(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANw(b,c,d,e);if(C()){break _;}b=$z;g=b;$p=2;case 2:AO2(f,g);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function A76(a){return BaB();}
function Vo(){var a=this;Eg.call(a);a.C8=null;a.Dp=0;}
function BhD(a,b,c){var d=new Vo();AHr(d,a,b,c);return d;}
function AHr(a,b,c,d){D0(a,b,Bg_);a.bb=4;a.C8=c;Bo(a,0.25,0.0,0.25,0.75,1.625,0.75);a.Dp=d;}
function AYK(a){return (-1);}
function A5$(a){return 0;}
function A54(a){return 0;}
function A1L(a){var b,c,$$je;a:{try{b=Zm(a.C8);}catch($$e){$$je=Bi($$e);if($$je instanceof BE){b=$$je;break a;}else{throw $$e;}}return b;}c=new B6;WP(c,b);M(c);}
function AGL(a,b,c,d,e){return 1;}
function A8C(a,b,c){return a.Dp;}
function ZQ(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APv(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function D$(){var a=this;D.call(a);a.ch=null;a.dJ=0;a.dH=0;a.dP=0;}
var BhE=null;var BhF=null;function BhG(){var a=new D$();ANu(a);return a;}
function ANu(a){return;}
function JX(b,c){var d;if(!DZ(BhF,c)){BR(BhE,c,b);BR(BhF,b,c);return;}b=new Cb;d=new T;V(d);Bl(b,U(H(H(d,B(261)),c)));M(b);}
function AFI(a){return;}
function AMe(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dJ;d=a.dH;e=a.dP;$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ACc(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dJ;d=a.dH;e=a.dP;$p=1;case 1:AGs(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AK1(a,b,c,d){var e,f,g;e=a.dJ+0.5-b;f=a.dH+0.5-c;g=a.dP+0.5-d;return e*e+f*f+g*g;}
function AFq(){BhE=Dd();BhF=Dd();JX(F(WS),B(262));JX(F(S_),B(263));JX(F(Jd),B(264));JX(F(Nt),B(265));}
function Jd(){var a=this;D$.call(a);a.gr=null;a.rA=0;}
function BhH(){var a=new Jd();AZY(a);return a;}
function AZY(a){var b,c;b=J(B4,4);c=b.data;c[0]=B(3);c[1]=B(3);c[2]=B(3);c[3]=B(3);a.gr=b;a.rA=(-1);}
function Bc(){var a=this;D.call(a);a.cV=0;a.eX=0;a.fe=0;a.tb=0;}
var BhI=null;var Bhd=null;var BhJ=null;var BhK=null;var BhL=null;var BhM=null;var BhN=null;var BhO=null;var Bgc=null;var Bhz=null;var BhA=null;var BhP=null;var BhQ=null;var BhR=null;var BhS=null;var BhT=null;var BhU=null;var BhV=null;var BhW=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;var Bh1=null;var Bh2=null;var Bh3=null;var Bh4=null;var Bh5=null;var Bh6=null;var Bh7=null;var Bh8=null;var Bh9=null;var Bh$=null;var Bge=null;var Bgb=null;var Bgd=null;var Bh_=null;var Bia=null;var Bib=null;var Bic
=null;var Bid=null;var BhB=null;var BhC=null;var Bie=null;var Bif=null;var Big=null;var Bih=null;var Bii=null;var Bij=null;var Bik=null;var Bil=null;var Bim=null;var Bin=null;var Bio=null;var Bip=null;var Biq=null;var Bir=null;var Bis=null;var Bit=null;var Biu=null;var Biv=null;var Biw=null;var Bix=null;var Biy=null;var Bhy=null;var Bgf=null;var Biz=null;var BiA=null;var BiB=null;var Bhc=null;var BiC=null;var BiD=null;var BiE=null;var BiF=null;var BiG=null;var BiH=null;function BB(){BB=Bt(Bc);A7J();}
function EW(a){var b=new Bc();Ds(b,a);return b;}
function Ds(a,b){var c,d,e;BB();a.eX=64;a.fe=32;c=256+b|0;a.cV=c;if(Bhd.data[c]!==null){d=DT();e=new T;V(e);Cg(d,U(Be(H(e,B(266)),b)));}Bhd.data[c]=a;}
function Bp(a,b){a.tb=b;return a;}
function A5z(a,b){return a.tb;}
function AGr(a,b,c,d,e,f,g,h){return 0;}
function A$L(a,b,c){return 1.0;}
function ASh(a,b,c,d){return b;}
function A2x(a){return a.eX;}
function A7P(a){return a.fe;}
function AV9(a,b,c){return;}
function A48(a,b,c,d,e,f){return;}
function A_r(a,b){return 1;}
function AV0(a,b){return 0;}
function A3H(a,b,c){return;}
function A7J(){var b;BhI=Bbk();Bhd=J(Bc,1024);BhJ=Bp(LI(0,2),82);BhK=Bp(N_(1,2),98);BhL=Bp(ND(2,2),114);BhM=Bp(Bbb(3),5);BhN=Bp(Ov(4,4),10);BhO=Bp(Bai(5),21);Bgc=Bp(EW(6),37);Bhz=Bp(EW(7),7);BhA=Bp(EW(8),55);BhP=Bp(EW(9),23);BhQ=Bp(EW(10),39);BhR=Bp(Ns(11,2),66);BhS=Bp(Ns(12,0),64);BhT=Bp(LI(13,0),80);BhU=Bp(N_(14,0),96);BhV=Bp(ND(15,0),112);BhW=Bp(Ns(16,1),65);BhX=Bp(LI(17,1),81);BhY=Bp(N_(18,1),97);BhZ=Bp(ND(19,1),113);Bh0=Bp(Ns(20,3),67);Bh1=Bp(LI(21,3),83);Bh2=Bp(N_(22,3),99);Bh3=Bp(ND(23,3),115);Bh4=Bp(EW(24),
53);Bh5=Bp(EW(25),71);Bh6=Bp(BcD(26,10),72);Bh7=Bp(Ns(27,0),68);Bh8=Bp(LI(28,0),84);Bh9=Bp(N_(29,0),100);Bh$=Bp(ND(30,0),116);Bge=Bp(EW(31),8);Bgb=Bp(EW(32),24);Bgd=Bp(EW(33),40);Bh_=Bp(Np(34,0),128);Bia=Bp(Np(35,1),129);Bib=Bp(Np(36,2),130);Bic=Bp(Np(37,3),131);Bid=Bp(Np(38,4),132);b=new VQ;L();AHH(b,39,Bg1.b);BhB=Bp(b,9);BhC=Bp(EW(40),25);Bie=Bp(Ov(41,5),41);Bif=Bp(Da(42,0,0,0),0);Big=Bp(Da(43,0,0,1),16);Bih=Bp(Da(44,0,0,2),32);Bii=Bp(Da(45,0,0,3),48);Bij=Bp(Da(46,1,1,0),1);Bik=Bp(Da(47,1,1,1),17);Bil=Bp(Da(48,
1,1,2),33);Bim=Bp(Da(49,1,1,3),49);Bin=Bp(Da(50,2,2,0),2);Bio=Bp(Da(51,2,2,1),18);Bip=Bp(Da(52,2,2,2),34);Biq=Bp(Da(53,2,2,3),50);Bir=Bp(Da(54,3,3,0),3);Bis=Bp(Da(55,3,3,1),19);Bit=Bp(Da(56,3,3,2),35);Biu=Bp(Da(57,3,3,3),51);Biv=Bp(Da(58,1,4,0),4);Biw=Bp(Da(59,1,4,1),20);Bix=Bp(Da(60,1,4,2),36);Biy=Bp(Da(61,1,4,3),52);Bhy=Bp(EW(62),6);Bgf=Bp(Ov(63,3),87);Biz=Bp(Ov(64,8),88);BiA=Bp(Bag(65),26);BiB=Bp(Ov(66,42),11);Bhc=Bp(Bci(67),42);BiC=Bp(A_S(68),43);BiD=Bp(APX(69,0),74);BiE=Bp(APX(70,BfX.b),75);BiF=Bp(APX(71,
BfY.b),76);BiG=Bp(BbM(72),135);BiH=Bp(BcX(73),104);}
function AIw(){P.call(this);}
function Bad(a){var b=new AIw();A2c(b,a);return b;}
function A2c(a,b){D0(a,b,Bg_);a.bb=97;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function A$r(a,b,c){var d,e;if(b&&b!=1){d=Pj(a,c);if((d&&d!=2?0:1)^(b>3?0:1))return a.bb;b=((d/2|0)+(b&1^d)|0)+((c&4)/4|0)|0;e=a.bb-((c&8)*2|0)|0;if(b&1)e= -e;return e;}return a.bb;}
function A0R(a){return 0;}
function AXp(a){return 0;}
function ATL(a){return 7;}
function AGp(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHD(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=K6(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Zx(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHD(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Nh(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AHD(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eG(c,d,e);if(C()){break _;}c=$z;AO1(a,Pj(a,c));return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AO1(a,b){Bo(a,0.0,0.0,0.0,1.0,2.0,1.0);if(!b)Bo(a,0.0,0.0,0.0,1.0,1.0,0.1875);if(b==1)Bo(a,0.8125,0.0,0.0,1.0,1.0,1.0);if(b==2)Bo(a,0.0,0.0,0.8125,1.0,1.0,1.0);if(b==3)Bo(a,0.0,0.0,0.0,0.1875,1.0,1.0);}
function AJW(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ADR(a,b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ADR(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(!(g&8)){h=d+1|0;$p=2;continue _;}d=d-1|0;$p=3;continue _;case 2:$z=ACt(b,c,h,e);if(C()){break _;}i=$z;if(i!=a.b){h=g^4;$p=4;continue _;}i=(g^4)+8|0;$p=5;continue _;case 3:$z=ACt(b,c,d,e);if(C()){break _;}h=$z;if(h!=a.b)return 1;$p=6;continue _;case 4:AKv(b,c,d,e,h);if
(C()){break _;}Jh(b,c,d-1|0,e,c,d,e);if(BP()>=0.5)Ex(b,c+0.5,d+0.5,e+0.5,B(267),1.0,N(b.r)*0.10000000149011612+0.8999999761581421);else Ex(b,c+0.5,d+0.5,e+0.5,B(268),1.0,N(b.r)*0.10000000149011612+0.8999999761581421);return 1;case 5:AKv(b,c,h,e,i);if(C()){break _;}h=g^4;$p=4;continue _;case 6:ADR(a,b,c,d,e,f);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ACv(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(g&8){f=d-1|0;$p=3;continue _;}h=0;f=d+1|0;$p=2;case 2:$z=ACt(b,c,f,e);if(C()){break _;}i=$z;if(i!=a.b){i=0;$p=4;continue _;}i=d-1|0;$p=6;continue _;case 3:$z=ACt(b,c,f,e);if(C()){break _;}f=$z;if(f==a.b)return;f=0;$p=5;continue _;case 4:APv(b,c,d,e,i);if(C()){break _;}h
=1;i=d-1|0;$p=6;continue _;case 5:APv(b,c,d,e,f);if(C()){break _;}return;case 6:$z=AAz(b,c,i,e);if(C()){break _;}i=$z;if(!i){i=0;$p=7;continue _;}if(!h)return;$p=10;continue _;case 7:APv(b,c,d,e,i);if(C()){break _;}h=1;$p=8;case 8:$z=ACt(b,c,f,e);if(C()){break _;}i=$z;if(i==a.b){i=0;$p=9;continue _;}if(!h)return;$p=10;continue _;case 9:APv(b,c,f,e,i);if(C()){break _;}if(!h)return;$p=10;case 10:Yd(a,b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A8B(a,b,c){if(b&8)b=0;else{BB();b=BiC.cV;}return b;}
function XB(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHD(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Ka(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Pj(a,b){return b&4?b&3:(b-1|0)&3;}
function AJ1(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=127)return 0;d=d-1|0;$p=1;case 1:$z=AAz(b,c,d,e);if(C()){break _;}c=$z;return !c?0:1;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AC0(){P.call(this);}
function Bcl(a,b){var c=new AC0();AUM(c,a,b);return c;}
function AUM(a,b,c){C8(a,b,c,Bht);}
function ADd(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bo(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bo(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bo(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bo(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Nh(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AD4(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bo(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bo(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bo(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bo(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=K6(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AWU(a){return 0;}
function A5V(a){return 0;}
function A9z(a){return 8;}
function ANT(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;e=e+1|0;$p=4;case 4:$z=AAz(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function Yk(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;if(g&&f!=2){if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;continue _;}h=e+1|0;$p=2;case 2:$z=AAz(b,c,d,h);if(C()){break _;}h=$z;if(h)g=2;if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h
=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;case 3:$z=AAz(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;case 4:$z=AAz(b,h,d,e);if(C()){break _;}h=$z;if(h)g=4;if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;case 5:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)g=5;$p=6;case 6:AKv(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKL(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;h=0;if(g==2){f=e+1|0;$p=2;continue _;}if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 2:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if
(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 3:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 4:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 5:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(h)return;$p=6;case 6:Yd(a,b,c,d,e,g);if(C()){break _;}f=0;$p=7;case 7:APv(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function A5t(a,b){return 1;}
function ANW(){P.call(this);}
function BaZ(a,b){var c=new ANW();A$8(c,a,b);return c;}
function A$8(a,b,c){C8(a,b,c,Bht);Bo(a,0.0,0.0,0.0,1.0,0.125,1.0);}
function ACA(a,b,c,d,e){return null;}
function AWv(a){return 0;}
function ALB(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMk(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Ka(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AMk(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eG(c,d,e);if(C()){break _;}f=$z;if(f>=2&&f<=5)Bo(a,0.0,0.0,0.0,1.0,0.625,1.0);else Bo(a,0.0,0.0,0.0,1.0,0.125,1.0);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A2A(a,b,c){return c<6?a.bb:a.bb-16|0;}
function A3A(a){return 0;}
function A0w(a){return 9;}
function A2H(a,b){return 1;}
function ANV(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=AAz(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ANE(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=15;$p=1;case 1:AKv(b,c,d,e,f);if(C()){break _;}g=new H4;$p=2;case 2:YN(g,a,b,c,d,e);if(C()){break _;}$p=3;case 3:YM(g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AJO(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEH(b,c,d,e);if(C()){break _;}g=$z;h=0;f=d-1|0;$p=2;case 2:$z=AAz(b,c,f,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==2){f=c+1|0;$p=3;continue _;}if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 3:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if
(!f)h=1;if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 4:$z=AAz(b,f,d,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 5:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 6:$z=AAz(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(!h)return;$p=7;case 7:$z=AEH(b,c,d,e);if(C())
{break _;}f=$z;$p=8;case 8:Yd(a,b,c,d,e,f);if(C()){break _;}f=0;$p=9;case 9:APv(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ASz(){Bc.call(this);this.nQ=0;}
function A_7(a){var b=new ASz();A2M(b,a);return b;}
function A2M(a,b){Ds(a,b);b=b+256|0;a.nQ=b;L();a.tb=BeO.data[b].ci(2);}
function AQm(a,b,c,d,e,f,g,h){var i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;if(!b.q)return 0;i=a.nQ;j=0;$p=1;case 1:$z=AH9(d,i,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;L();k=BeO.data[a.nQ];j=a.nQ;$p=2;case 2:$z=APv(d,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;c=BeO.data[a.nQ];$p
=3;case 3:c.va(d,e,f,g,h);if(C()){break _;}Ex(d,e+0.5,f+0.5,g+0.5,Kf(k.gI),(k.gI.oO+1.0)/2.0,k.gI.pL*0.800000011920929);b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AHF(){MQ.call(this);}
function A1F(){var a=new AHF();A1S(a);return a;}
function A1S(a){var b,c,d,e;b=J(B4,0);c=b.data;RV(B(24));d=c.length;e=0;while(e<d){RV(c[e]);e=e+1|0;}a.wr=B(24);a.H1=b.oW();}
function AFu(a){var b;b=new Rc;b.lc=B(269);b.mS=BiI;b.ry=BiI;b.HU=a;b.BR=0.3333333432674408;b.F4=0.5;return b;}
function AG2(a){var b,c,d,e,f;b=new PM;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.vt=BiI;b.uN=BiI;e=d.length;if(e&&e>=b.BK){b.Hu=a;b.uA=c.oW();b.Gx=2.0;b.BK=4.0;return b;}f=new Cb;Bl(f,B(270));M(f);}
function M2(){var a=this;Fk.call(a);a.d8=0;a.cp=null;a.kI=null;}
function AMB(b,c,d){return A5A(0,b.data.length,b,c,c+d|0,0,0);}
function AAo(b){return AMB(b,0,b.data.length);}
function AKg(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new T;V(i);Bl(h,U(Be(H(Be(H(i,B(271)),g),B(248)),f)));M(h);}if(Ct(a)<d){i=new Gp;O(i);M(i);}if(d<0){i=new BO;h=new T;V(h);Bl(i,U(H(Be(H(h,B(249)),d),B(250))));M(i);}g=a.bk+a.d8|0;j=0;while(j<d){k=c+1|0;b=a.cp.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;h=new BO;i=new T;V(i);Bl(h,U(H(Be(H(Be(H(i,B(251)),c),B(244)),b.length),B(27))));M(h);}
function WT(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.mL){e=new FR;O(e);M(e);}if(Ct(a)<d){e=new G$;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BO;i=new T;V(i);Bl(e,U(Be(H(Be(H(i,B(272)),h),B(248)),g)));M(e);}if(d<0){e=new BO;i=new T;V(i);Bl(e,U(H(Be(H(i,B(249)),d),B(250))));M(e);}h=a.bk+a.d8|0;j=0;while(j<d){b=a.cp.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;e=new T;V(e);Bl(i,U(H(Be(H(Be(H(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function UH(a,b){return WT(a,b,0,b.data.length);}
function A9v(a,b){a.kI=b;return a;}
function ATU(a){EA(a);return a;}
function A5o(a,b){Nj(a,b);return a;}
function A0N(a,b){EO(a,b);return a;}
function Nd(){L7.call(this);}
function Jo(a){var b,c;if(a.bk<a.cy){b=a.bk;a.bk=b+1|0;return RB(a,b);}c=new Gp;O(c);M(c);}
function CJ(a,b){var c,d;if(AKq(a)){c=new FR;O(c);M(c);}if(a.bk<a.cy){d=a.bk;a.bk=d+1|0;ADP(a,d,b);return a;}c=new G$;O(c);M(c);}
function AKq(a){return a.xu;}
function WJ(){var a=this;Nd.call(a);a.xu=0;a.yl=0;a.xn=null;}
function RB(a,b){return a.xn.data[b+a.yl|0];}
function ADP(a,b,c){a.xn.data[b+a.yl|0]=c;}
function A8y(a){return a.xu;}
function ARk(){var a=this;M2.call(a);a.Gi=0;a.mL=0;}
function A5A(a,b,c,d,e,f,g){var h=new ARk();ATf(h,a,b,c,d,e,f,g);return h;}
function ATf(a,b,c,d,e,f,g,h){KN(a,c);a.kI=Bgm;a.d8=b;a.cp=d;a.bk=e;a.cy=f;a.Gi=g;a.mL=h;}
function ALL(a){var b,c,d,e;if(a.bk>=a.cy){b=new Gp;O(b);M(b);}c=a.cp.data;d=a.d8;e=a.bk;a.bk=e+1|0;return c[d+e|0];}
function A1o(a){return a.mL;}
function KP(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.cy){c=a.cp.data[a.d8+b|0]&255;d=a.cp.data[(a.d8+b|0)+1|0]&255;e=a.cp.data[(a.d8+b|0)+2|0]&255;f=a.cp.data[(a.d8+b|0)+3|0]&255;if(a.kI!==Bgm)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BO;h=new T;V(h);Bl(g,U(H(Be(H(Be(H(h,B(273)),b),B(244)),a.cy-3|0),B(27))));M(g);}
function AA3(a,b,c){var d,e;if(a.mL){d=new FR;O(d);M(d);}if(b>=0&&(b+3|0)<a.cy){if(a.kI!==Bgm){a.cp.data[a.d8+b|0]=c<<24>>24;a.cp.data[(a.d8+b|0)+1|0]=c>>8<<24>>24;a.cp.data[(a.d8+b|0)+2|0]=c>>16<<24>>24;a.cp.data[(a.d8+b|0)+3|0]=c>>24<<24>>24;}else{a.cp.data[a.d8+b|0]=c>>24<<24>>24;a.cp.data[(a.d8+b|0)+1|0]=c>>16<<24>>24;a.cp.data[(a.d8+b|0)+2|0]=c>>8<<24>>24;a.cp.data[(a.d8+b|0)+3|0]=c<<24>>24;}return a;}e=new BO;d=new T;V(d);Bl(e,U(H(Be(H(Be(H(d,B(273)),b),B(244)),a.cy-3|0),B(27))));M(e);}
function AHI(a){var b,c;b=Ct(a)/4|0;if(a.kI!==Bgm){c=new O_;OH(c,a.d8+a.bk|0,b,a,0,b,a.mL);return c;}c=new VH;OH(c,a.d8+a.bk|0,b,a,0,b,a.mL);return c;}
function Vn(){}
function LT(){Fk.call(this);}
function AHk(b){var c,d;if(b>=0)return AZF(0,b,$rt_createCharArray(b),0,b,0);c=new Cb;d=new T;V(d);Bl(c,U(Be(H(d,B(274)),b)));M(c);}
function AM3(b,c,d){return AZF(0,b.data.length,b,c,c+d|0,0);}
function OY(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new T;V(i);Bl(h,U(Be(H(Be(H(i,B(275)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gp;O(h);M(h);}if(d<0){h=new BO;i=new T;V(i);Bl(h,U(H(Be(H(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=AON(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;h=new T;V(h);Bl(i,U(H(Be(H(Be(H(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AEO(a,b){return OY(a,b,0,b.data.length);}
function ASo(a,b,c,d){var e,f,g,h,i,j,k;if(Xk(a)){e=new FR;O(e);M(e);}if(Ct(a)<d){e=new G$;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BO;i=new T;V(i);Bl(e,U(Be(H(Be(H(i,B(276)),h),B(248)),g)));M(e);}if(d<0){e=new BO;i=new T;V(i);Bl(e,U(H(Be(H(i,B(249)),d),B(250))));M(e);}h=a.bk;j=0;while(j<d){k=h+1|0;g=c+1|0;Vq(a,h,f[c]);j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;e=new T;V(e);Bl(i,U(H(Be(H(Be(H(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AJd(a,b,c,d){var e,f,g,h,i,j;if(Xk(a)){b=new FR;O(b);M(b);}e=d-c|0;if(Ct(a)<e){b=new G$;O(b);M(b);}if(c>=0&&c<Bh(b)){if(d>Bh(b)){f=new BO;g=new T;V(g);Bl(f,U(Be(H(Be(H(g,B(276)),d),B(277)),Bh(b))));M(f);}if(c>d){b=new BO;f=new T;V(f);Bl(b,U(Be(H(Be(H(f,B(278)),c),B(279)),d)));M(b);}h=a.bk;while(c<d){i=h+1|0;j=c+1|0;Vq(a,h,Y(b,c));h=i;c=j;}a.bk=a.bk+e|0;return a;}g=new BO;f=new T;V(f);Bl(g,U(H(Be(H(Be(H(f,B(278)),c),B(244)),Bh(b)),B(27))));M(g);}
function Ng(a,b){return AJd(a,b,0,Bh(b));}
function AJB(a){return 1;}
function APi(a){return a.md;}
function AYx(a){Gs(a);return a;}
function AX2(a,b){EO(a,b);return a;}
function P0(){B1.call(this);}
function BiJ(){var a=new P0();A84(a);return a;}
function A84(a){O(a);}
function Og(){B8.call(this);}
function BiK(){var a=new Og();AZT(a);return a;}
function AZT(a){return;}
function A4T(a){return 0;}
function A5y(a){return 0;}
function ATk(a){return 0;}
function LZ(){B8.call(this);}
function BiL(){var a=new LZ();ATj(a);return a;}
function ATj(a){return;}
function A_F(a){return 1;}
function AY7(a){return 0;}
function N3(){B8.call(this);}
function BiM(){var a=new N3();A7w(a);return a;}
function A7w(a){return;}
function A6X(a){return 0;}
function A96(a){return 0;}
function AU3(a){return 0;}
function F9(){var a=this;Bc.call(a);a.uT=null;a.yB=0.0;a.AF=0;a.Jv=0;}
function BiN(a,b,c,d){var e=new F9();Mh(e,a,b,c,d);return e;}
function Mh(a,b,c,d,e){Ds(a,b);a.yB=4.0;a.Jv=d;a.uT=e;a.eX=1;a.fe=32<<d;if(d==3)a.fe=a.fe*2|0;a.yB=(d+1|0)*2|0;a.AF=c+d|0;}
function A8U(a,b,c){var d;d=0;while(d<a.uT.data.length){if(a.uT.data[d]===c)return a.yB;d=d+1|0;}return 1.0;}
function A66(a,b,c){FI(b,2);}
function AWo(a,b,c,d,e,f){FI(b,1);}
function AW8(a,b){return a.AF;}
function OS(){F9.call(this);}
var BiO=null;function Bb5(){Bb5=Bt(OS);A9b();}
function LI(a,b){var c=new OS();AFM(c,a,b);return c;}
function AFM(a,b,c){Bb5();Mh(a,b,1,c,BiO);}
function A9b(){var b,c;b=J(P,4);c=b.data;L();c[0]=BeQ;c[1]=BeR;c[2]=Be_;c[3]=Bfa;BiO=b;}
function Vr(){F9.call(this);this.nC=0;}
var BiP=null;function Bb8(){Bb8=Bt(Vr);A1M();}
function N_(a,b){var c=new Vr();ANP(c,a,b);return c;}
function ANP(a,b,c){Bb8();Mh(a,b,2,c,BiP);a.nC=c;}
function A5l(a,b){L();return b===Bfk?(a.nC!=3?0:1):b!==BgZ&&b!==BgY?(b!==Bfh&&b!==Bff?(b!==Bfg&&b!==Bfe?(b.b$===Bg$?1:b.b$!==Bhn?0:1):a.nC<1?0:1):a.nC<2?0:1):a.nC<2?0:1;}
function A1M(){var b,c;b=J(P,12);c=b.data;L();c[0]=BeY;c[1]=BeS;c[2]=BeT;c[3]=BeU;c[4]=Be5;c[5]=Bfe;c[6]=Bfg;c[7]=Bfd;c[8]=Bfh;c[9]=Bff;c[10]=BgY;c[11]=BgZ;BiP=b;}
function Wn(){F9.call(this);}
var BiQ=null;function BbI(){BbI=Bt(Wn);AT7();}
function ND(a,b){var c=new Wn();AND(c,a,b);return c;}
function AND(a,b,c){BbI();Mh(a,b,3,c,BiQ);}
function AT7(){var b,c;b=J(P,4);c=b.data;L();c[0]=Be0;c[1]=Bfi;c[2]=Be1;c[3]=BgW;BiQ=b;}
function AEZ(){Bc.call(this);}
function Bbb(a){var b=new AEZ();AYq(b,a);return b;}
function AYq(a,b){Ds(a,b);a.eX=1;a.fe=64;}
function AJI(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;$p=1;case 1:$z=ACt(d,e,f,g);if(C()){break _;}i=$z;if(i){FI(b,1);return 1;}j=e+0.5;k=f+0.5;l=g+0.5;BB();Ex(d,j,k,l,B(280),1.0,N(BhI)*0.4000000059604645+0.800000011920929);L();h=Bgo.b;$p
=2;case 2:APv(d,e,f,g,h);if(C()){break _;}FI(b,1);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function LM(){Bc.call(this);this.zU=0;}
function Ov(a,b){var c=new LM();ZU(c,a,b);return c;}
function ZU(a,b,c){Ds(a,b);a.zU=c;a.eX=1;}
function P4(a,b,c,d){b.q=b.q-1|0;UK(d,a.zU);return b;}
function AOT(){Bc.call(this);}
function Bai(a){var b=new AOT();A2o(b,a);return b;}
function A2o(a,b){Ds(a,b);a.eX=1;}
function AGz(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.K;BB();if(!AGN(e,Bgc.cV))return b;Dh(c,d,B(225),1.0,1.0/(N(BhI)*0.4000000059604645+0.800000011920929));e=AS9(c,d);$p=1;case 1:AOg(c,e);if(C()){break _;}return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AK_(){Bc.call(this);this.zZ=0;}
function Ns(a,b){var c=new AK_();A$P(c,a,b);return c;}
function A$P(a,b,c){Ds(a,b);a.eX=1;a.fe=32<<c;a.zZ=4+(c*2|0)|0;}
function A0v(a,b,c){return 1.5;}
function A7T(a,b,c){FI(b,1);}
function AX3(a,b,c,d,e,f){FI(b,2);}
function A2z(a,b){return a.zZ;}
function AOb(){LM.call(this);}
function BcD(a,b){var c=new AOb();A21(c,a,b);return c;}
function A21(a,b,c){ZU(a,b,c);}
function APu(a,b,c,d){P4(a,b,c,d);b=new Cd;BB();DB(b,Bh5);return b;}
function ANx(){Bc.call(this);}
function Np(a,b){var c=new ANx();ATK(c,a,b);return c;}
function ATK(a,b,c){Ds(a,b);a.eX=1;a.fe=32<<c;}
function AQS(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(d,e,f,g);if(C()){break _;}i=$z;h=f+1|0;$p=2;case 2:a:{$z=ABX(d,e,h,g);if(C()){break _;}j=$z;if(!j.du()){L();if(i==BeQ.b)break a;}L();if(i!=BeR.b)return 0;}L();k=Bg2;l=e;m
=l+0.5;n=f;o=n+0.5;p=g;Ex(d,m,o,p+0.5,Kf(k.gI),(k.gI.oO+1.0)/2.0,k.gI.pL*0.800000011920929);h=k.b;$p=3;case 3:APv(d,e,f,g,h);if(C()){break _;}FI(b,1);if(!E(d.r,8)&&i==BeQ.b){q=1;r=0;m=n+1.2000000476837158;if(r<q){s=N(d.r)*0.699999988079071+0.15000000596046448;n=N(d.r)*0.699999988079071+0.15000000596046448;t=new E$;o=l+s;u=p+n;c=new Cd;BB();DB(c,BhB);Ha(t,d,o,m,u,c);t.g$=10;$p=4;continue _;}}return 1;case 4:AOg(d,t);if(C()){break _;}r=r+1|0;if(r>=q)return 1;s=N(d.r)*0.699999988079071+0.15000000596046448;n=N(d.r)
*0.699999988079071+0.15000000596046448;t=new E$;o=l+s;u=p+n;c=new Cd;BB();DB(c,BhB);Ha(t,d,o,m,u,c);t.g$=10;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function VQ(){Bc.call(this);this.zI=0;}
function BiR(a,b){var c=new VQ();AHH(c,a,b);return c;}
function AHH(a,b,c){Ds(a,b);a.zI=c;}
function AFk(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;$p=1;case 1:$z=ACt(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bg2.b)return 0;f=f+1|0;h=a.zI;$p=2;case 2:APv(d,e,f,g,h);if(C()){break _;}b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function F0(){var a=this;Bc.call(a);a.H4=0;a.zT=0;a.y$=0;a.BA=0;}
var BiS=null;var BiT=null;function Da(a,b,c,d){var e=new F0();ABm(e,a,b,c,d);return e;}
function ABm(a,b,c,d,e){Ds(a,b);a.H4=c;a.zT=e;a.BA=d;a.y$=BiS.data[e];a.fe=(BiT.data[e]*3|0)<<c;a.eX=1;}
function ARJ(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;BiS=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;BiT=b;}
function XR(){Bc.call(this);}
function Bag(a){var b=new XR();AY$(b,a);return b;}
function AY$(a,b){Ds(a,b);a.fe=64;}
function ACa(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)return 0;if(h==1)return 0;i=0;if(h==4)i=1;if(h==3)i=2;if(h==5)i=3;j=new ID;Fz(j,d);j.ru=0;j.dI=0;j.c3=0.0;D1(j,0.5,0.5);j.nm=e;j.Ex=f;j.nt=g;c=Ci();k=BiU.oW().data;e=k.length;f=0;if(f<e){l=k[f];j.dR=l;JM(j,i);$p=1;continue _;}if(c.p>0)j.dR=Z(c,E(j.n,c.p));JM(j,i);$p=2;continue _;case 1:$z
=ZG(j);if(C()){break _;}g=$z;if(g)S(c,l);f=f+1|0;if(f<e){l=k[f];j.dR=l;JM(j,i);continue _;}if(c.p>0)j.dR=Z(c,E(j.n,c.p));JM(j,i);$p=2;case 2:$z=ZG(j);if(C()){break _;}e=$z;if(!e)return 1;$p=3;case 3:AOg(d,j);if(C()){break _;}b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AHp(){Bc.call(this);}
function Bci(a){var b=new AHp();A7G(b,a);return b;}
function A7G(a,b){Ds(a,b);a.fe=64;a.eX=1;}
function Ya(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bg5;$p=1;case 1:$z=i.fT(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;h=Bg5.b;$p=2;case 2:APv(d,e,f,g,h);if(C()){break _;}h=K((c.v+180.0)*16.0/360.0-0.5)&15;$p=3;case 3:AKv(d,e,f,g,h);if(C()){break _;}b.q=b.q-1|0;$p=4;case 4:$z=ANw(d,e,f,g);if(C()){break _;}b=$z;b=b;$p=5;case 5:AI9(c,b);if
(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AJb(){Bc.call(this);}
function A_S(a){var b=new AJb();A27(b,a);return b;}
function A27(a,b){Ds(a,b);a.fe=64;a.eX=1;}
function AD9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bg6;$p=1;case 1:$z=i.fT(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;j=K((c.v+180.0)*4.0/360.0-0.5)&3;k=0;l=0;if(!j)l=1;if(j==1)k=(-1);if(j==2)l=(-1);if(j==3)k=1;m=e-k|0;n=g-l|0;$p=2;case 2:$z
=AAz(d,m,f,n);if(C()){break _;}h=$z;h=!h?0:1;o=f+1|0;$p=3;case 3:$z=AAz(d,m,o,n);if(C()){break _;}p=$z;p=h+(!p?0:1)|0;h=e+k|0;k=g+l|0;$p=4;case 4:$z=AAz(d,h,f,k);if(C()){break _;}l=$z;l=!l?0:1;$p=5;case 5:$z=AAz(d,h,o,k);if(C()){break _;}q=$z;q=l+(!q?0:1)|0;$p=6;case 6:$z=ACt(d,m,f,n);if(C()){break _;}l=$z;if(l!=Bg6.b){$p=7;continue _;}n=1;$p=8;continue _;case 7:$z=ACt(d,m,o,n);if(C()){break _;}m=$z;n=m==Bg6.b?1:0;$p=8;case 8:$z=ACt(d,h,f,k);if(C()){break _;}l=$z;if(l!=Bg6.b){$p=9;continue _;}r=0;if(n&&!1)r
=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bg6.b;$p=10;continue _;case 9:$z=ACt(d,h,o,k);if(C()){break _;}h=$z;m=h==Bg6.b?1:0;r=0;if(n&&!m)r=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bg6.b;$p=10;case 10:APv(d,e,f,g,h);if(C()){break _;}$p=11;case 11:AKv(d,e,f,g,j);if(C()){break _;}f=Bg6.b;$p=12;case 12:APv(d,e,o,g,f);if(C()){break _;}f=j+8|0;$p=13;case 13:AKv(d,e,o,g,f);if(C()){break _;}b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ARL(){Bc.call(this);this.po=0;}
function APX(a,b){var c=new ARL();A0e(c,a,b);return c;}
function A0e(a,b,c){Ds(a,b);a.eX=1;a.fe=64;a.po=c;}
function AHX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.T+(d.J-d.T)*1.0;f=d.P+(d.v-d.P)*1.0;g=BY(d.bT+(d.d-d.bT)*1.0,d.cR+(d.j-d.cR)*1.0,d.bS+(d.e-d.bS)*1.0);h= -f*0.01745329238474369-3.1415927410125732;i=BC(h);h=Bq(h);j= -e*0.01745329238474369;k= -BC(j);l=Dk(g,h*k*5.0,Bq(j)
*5.0,i*k*5.0);m=a.po?0:1;$p=1;case 1:$z=AE1(c,g,l,m);if(C()){break _;}n=$z;if(n===null)return b;if(n.k4)return b;m=n.h9;o=n.h$;p=n.h_;if(!a.po){$p=2;continue _;}if(!n.hI)o=o+(-1)|0;if(n.hI==1)o=o+1|0;if(n.hI==2)p=p+(-1)|0;if(n.hI==3)p=p+1|0;if(n.hI==4)m=m+(-1)|0;if(n.hI==5)m=m+1|0;$p=8;continue _;case 2:$z=ABX(c,m,o,p);if(C()){break _;}g=$z;if(g!==BfP){$p=3;continue _;}$p=4;continue _;case 3:$z=ABX(c,m,o,p);if(C()){break _;}d=$z;if(d!==BfQ)return b;$p=5;continue _;case 4:$z=AEH(c,m,o,p);if(C()){break _;}q=$z;if
(q){$p=3;continue _;}q=0;$p=6;continue _;case 5:$z=AEH(c,m,o,p);if(C()){break _;}q=$z;if(q)return b;q=0;$p=7;continue _;case 6:APv(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DB(b,BiE);return b;case 7:APv(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DB(b,BiF);return b;case 8:$z=ACt(c,m,o,p);if(C()){break _;}q=$z;if(q){$p=10;continue _;}q=a.po;r=0;$p=9;case 9:AIX(c,m,o,p,q,r);if(C()){break _;}b=new Cd;BB();DB(b,BiD);return b;case 10:$z=ABX(c,m,o,p);if(C()){break _;}d=$z;if(d.du())return b;q=a.po;r=0;$p=9;continue _;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AO8(){Bc.call(this);}
function BbM(a){var b=new AO8();AW9(b,a);return b;}
function AW9(a,b){Ds(a,b);a.eX=1;}
function AC6(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bg7.b)return 0;c=new Gd;j=e+0.5;k=f+0.5;l=g+0.5;Fz(c,d);c.Bn=J(Cd,36);c.iQ=0;c.ky=0;c.oM=1;c.kJ=0;c.mz=1;D1(c,0.9800000190734863,0.699999988079071);c.c3=c.eM/2.0;c.i7=0;CT(c,j,k+c.c3,l);c.g=0.0;c.i=0.0;c.h=0.0;c.bT=j;c.cR=k;c.bS
=l;$p=2;case 2:AOg(d,c);if(C()){break _;}b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ARd(){Bc.call(this);}
function BcX(a){var b=new ARd();AWy(b,a);return b;}
function AWy(a,b){Ds(a,b);a.eX=1;a.fe=64;}
function AGx(a,b,c){var d;if(c instanceof Iz){d=c;if(!d.qx){d.qx=1;b.q=b.q-1|0;}}}
function AWk(a,b,c){AGx(a,b,c);}
function NX(){}
function AGh(){var a=this;D.call(a);a.d2=Long_ZERO;a.eS=Long_ZERO;}
function A9S(){var a=new AGh();A0c(a);return a;}
function A0c(a){a.d2=Long_fromInt(1);a.eS=Long_ZERO;}
function ASV(a,b){a.d2=Long_and(b,Long_fromInt(65535));a.eS=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AZu(a){a.d2=Long_fromInt(1);a.eS=Long_ZERO;}
function AT1(a){return Long_or(Long_shl(a.eS,16),a.d2);}
function A8g(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.d2=Long_add(a.d2,Long_fromInt(b[c]&255));a.eS=Long_add(a.eS,a.d2);a.d2=Long_rem(a.d2,Long_fromInt(65521));a.eS=Long_rem(a.eS,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.d2;d=c+1|0;a.d2=Long_add(j,Long_fromInt(i[c]&255));a.eS=Long_add(a.eS,a.d2);h=e;c=d;}a.d2=Long_rem(a.d2,Long_fromInt(65521));a.eS=Long_rem(a.eS,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.d2;e=c+1|0;a.d2=Long_add(j,Long_fromInt(i[c]&255));a.eS=Long_add(a.eS,a.d2);f=d;c=e;}a.d2=Long_rem(a.d2,Long_fromInt(65521));a.eS=Long_rem(a.eS,Long_fromInt(65521));}
function R$(){BE.call(this);}
function BiV(){var a=new R$();A6E(a);return a;}
function A6E(a){O(a);}
function Nl(){D.call(this);this.GB=null;}
var Bgm=null;var BiW=null;function AVz(a){var b=new Nl();AH4(b,a);return b;}
function AH4(a,b){a.GB=b;}
function ASl(){Bgm=AVz(B(281));BiW=AVz(B(282));}
function J0(){}
function LJ(){var a=this;D.call(a);a.ge=null;a.e4=null;}
function A40(a,b){var c,d;if(a===b)return 1;if(!Sg(b,J0))return 0;a:{b:{c:{c=b;if(a.ge===null){if(c.ge!==null)break c;}else if(!a.ge.em(c.ge))break c;if(a.e4===null){if(c.e4!==null)break c;break b;}if(a.e4.em(c.e4))break b;}d=0;break a;}d=1;}return d;}
function AWR(a){return a.ge;}
function A2f(a){return a.e4;}
function A1V(a){return (a.ge===null?0:a.ge.fj())^(a.e4===null?0:a.e4.fj());}
function IC(){var a=this;LJ.call(a);a.pT=0;a.eC=null;}
function BO(){B6.call(this);}
function BiX(){var a=new BO();AUu(a);return a;}
function AUu(a){O(a);}
function IU(){BO.call(this);}
function BiY(){var a=new IU();A0W(a);return a;}
function A0W(a){O(a);}
function GD(){}
function Wu(){D.call(this);this.zO=null;}
function AI2(a){var b,c,d,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.zO;try{Bfn=Bfn+1|0;Fs(b);$p=1;continue _;}catch($$e){$$je=Bi($$e);c=$$je;}d=b.mN;$p=2;continue _;case 1:a:{try{b.ko();if(C()){break _;}}catch($$e){$$je=Bi($$e);c=$$je;break a;}c=b.mN;$p=3;continue _;}d=b.mN;$p=2;case 2:AD0(d);if(C()){break _;}a:{try{Xb(b.mN);NP(d);break a;}catch($$e){$$je=Bi($$e);b=$$je;}NP(d);M(b);}b.wA=0;Bfn=Bfn-1|0;Fs(Bfl);M(c);case 3:AD0(c);if
(C()){break _;}a:{try{Xb(b.mN);NP(c);break a;}catch($$e){$$je=Bi($$e);b=$$je;}NP(c);M(b);}b.wA=0;Bfn=Bfn-1|0;Fs(Bfl);return;default:E_();}}C3().s(a,b,c,d,$p);}
function FD(){B1.call(this);}
function BiZ(){var a=new FD();AW4(a);return a;}
function AW4(a){O(a);}
function ER(){var a=this;D.call(a);a.hQ=null;a.vu=0.0;a.vv=0.0;}
function G2(a,b,c,d,e){var f=new ER();ASI(f,a,b,c,d,e);return f;}
function ASI(a,b,c,d,e,f){a.hQ=Wo(b,c,d);a.vu=e;a.vv=f;}
function I6(a,b,c){var d;d=new ER;d.hQ=a.hQ;d.vu=b;d.vv=c;return d;}
function Fv(){var a=this;D.call(a);a.hy=null;a.EW=0;}
function Bi0(a,b,c,d,e){var f=new Fv();Hf(f,a,b,c,d,e);return f;}
function Hf(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.EW=0;a.hy=b;a.EW=g.length;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=I6(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=I6(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=I6(h,k,l);g[3]=I6(g[3],i,l);}
function ACS(a){var b,c,d;b=J(ER,a.hy.data.length);c=b.data;d=0;while(d<a.hy.data.length){c[d]=a.hy.data[(a.hy.data.length-d|0)-1|0];d=d+1|0;}a.hy=b;}
function APB(a,b,c){var d,e,f,g;d=P7(a.hy.data[1].hQ,a.hy.data[0].hQ);e=CD(ABP(P7(a.hy.data[1].hQ,a.hy.data[2].hQ),d));Bz(b);Cj(e.x,e.z,e.w);f=0;while(f<4){g=a.hy.data[f];G(b,g.hQ.x*c,g.hQ.z*c,g.hQ.w*c,g.vu,g.vv);f=f+1|0;}Br(b);}
function LH(){var a=this;D.call(a);a.bQ=0;a.os=0;a.rQ=Long_ZERO;a.bv=Long_ZERO;a.oD=0;a.dZ=0;a.xV=0;a.iz=null;a.E=null;a.eJ=0;a.iF=0;a.xH=null;a.cI=null;a.fX=null;}
var Bi1=null;function AFH(a){var b;if(a.E===null)return (-2);b=a.E;a.E.no=Long_ZERO;b.G=Long_ZERO;a.E.b8=null;a.bQ=14;a.iF=(-1);JC(a.iz);return 0;}
function AFO(a){if(a.iz!==null)SQ(a.iz);return 0;}
function Xx(a,b){var c,d,e,f;a.E.b8=null;a.iz=null;a.dZ=0;if(b<0)b= -b;else if(b&1073741824){a.dZ=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.dZ=4;b=b&15;}else{a.dZ=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.iz!==null&&a.xV!=b){SQ(a.iz);a.iz=null;}a.xV=b;c=new KC;d=a.E;b=1<<b;c.sc=$rt_createIntArray(1);c.oC=$rt_createIntArray(1);c.mW=$rt_createIntArray(1);c.mU=$rt_createIntArray(1);c.vK=J($rt_arraycls($rt_intcls()),1);c.vL=J($rt_arraycls($rt_intcls()),1);c.u$=$rt_createIntArray(1);c.vf=$rt_createIntArray(1);c.w4
=Bay();c.y=d;e=new Lz;f=c.y;e.kZ=0;e.bd=f;e.C=c;c.pE=e;c.kh=$rt_createIntArray(4320);c.cZ=$rt_createByteArray(b);c.cP=b;c.rj=d.jv.dZ?1:0;c.dK=0;JC(c);a.iz=c;AFH(a);return 0;}AFO(a);return (-2);}
function AGB(a,b){var c,d,e,f,g,h,i,$$je;if(a.E!==null&&a.E.cf!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bQ){case 6:a.bQ=13;a.E.b8=B(283);a.oD=0;return (-2);case 7:d=Zl(a.iz,d);if(d==(-3)){a.bQ=13;a.oD=0;continue i;}if(!d)d=c;if(d!=1)break i;a.rQ=a.E.f9.yy();JC(a.iz);if(!a.dZ){a.bQ=12;d=c;continue i;}a.bQ=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=F4(a,2,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DY)
{e=$$je;return e.hG;}else{throw $$e;}}a.eJ=a.bv.lo&65535;if((a.eJ&255)!=8){a.E.b8=B(284);a.bQ=13;continue i;}if(a.eJ&57344){a.E.b8=B(285);a.bQ=13;continue i;}if(a.eJ&512)Ii(a,2,a.bv);a.bQ=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.E.N)return d;e=a.E;e.N=e.N
-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bQ=9;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bQ=10;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bQ=11;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.eJ)a.bv=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bv,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bv,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.rQ.lo!=
a.bv.lo)a.E.b8=B(286);else if(a.eJ&&a.cI!==null)a.cI.Hv=a.bv;a.bQ=15;d=c;}if(!(a.dZ&&a.eJ)){if(a.E.b8===null)break f;if(!DA(a.E.b8,B(286)))break f;a.bQ=13;a.oD=5;continue i;}try{d=F4(a,4,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;return e.hG;}else{throw $$e;}}if(a.E.b8!==null&&DA(a.E.b8,B(286))){a.bQ=13;a.oD=5;continue i;}if(Long_eq(a.bv,Long_and(a.E.no,new Long(4294967295, 0)))){a.E.b8=null;break f;}a.E.b8=B(287);a.bQ=13;continue i;}if(!a.dZ){a.bQ=7;continue i;}try{d=F4(a,2,d,c);}catch($$e)
{$$je=Bi($$e);if($$je instanceof DY){e=$$je;return e.hG;}else{throw $$e;}}if(!(a.dZ!=4&&!(a.dZ&2))&&Long_eq(a.bv,Long_fromInt(35615))){if(a.dZ==4)a.dZ=2;a.E.f9=AWh();Ii(a,2,a.bv);if(a.cI===null)a.cI=Bco();a.bQ=23;continue i;}if(a.dZ&2){a.bQ=13;a.E.b8=B(288);continue i;}a.eJ=0;a.os=a.bv.lo&255;h=Long_shr(a.bv,8).lo&255;if(!(a.dZ&1&&!(((a.os<<8)+h|0)%31|0))&&(a.os&15)!=8){if(a.dZ!=4){a.bQ=13;a.E.b8=B(288);continue i;}e=a.E;e.B=e.B-2|0;e=a.E;e.N=e.N+2|0;e=a.E;e.G=Long_sub(e.G,Long_fromInt(2));a.dZ=0;a.bQ=7;continue i;}if
((a.os&15)!=8){a.bQ=13;a.E.b8=B(284);continue i;}if(a.dZ==4)a.dZ=1;if(((a.os>>4)+8|0)>a.xV){a.bQ=13;a.E.b8=B(289);continue i;}a.E.f9=A9S();if(h&32){a.bQ=2;break d;}a.bQ=7;continue i;}break m;}try{d=F4(a,4,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;return e.hG;}else{throw $$e;}}if(a.cI!==null)a.cI.HP=a.bv;if(a.eJ&512)Ii(a,4,a.bv);a.bQ=17;}try{d=F4(a,2,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;return e.hG;}else{throw $$e;}}if(a.cI!==null){a.cI.I2=a.bv.lo&255;a.cI.A6=a.bv.lo>>
8&255;}if(a.eJ&512)Ii(a,2,a.bv);a.bQ=18;}if(a.eJ&1024){try{d=F4(a,2,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;return e.hG;}else{throw $$e;}}if(a.cI!==null)a.cI.pp=$rt_createByteArray(a.bv.lo&65535);if(a.eJ&512)Ii(a,2,a.bv);}else if(a.cI!==null)a.cI.pp=null;a.bQ=19;}if(a.eJ&1024)x:{try{d=ANO(a,d,c);if(a.cI===null)break x;f=Ia(a.fX);i=f.data;a.fX=null;b=i.length;if(b!=a.cI.pp.data.length){a.E.b8=B(290);a.bQ=13;continue i;}Di(f,0,a.cI.pp,0,b);break x;}catch($$e){$$je=Bi($$e);if($$je instanceof DY)
{e=$$je;return e.hG;}else{throw $$e;}}}else if(a.cI!==null)a.cI.pp=null;a.bQ=20;}y:{if(a.eJ&2048){z:{try{d=PF(a,d,c);if(a.cI===null)break z;a.cI.yM=Ia(a.fX);break z;}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;break h;}else{throw $$e;}}}try{a.fX=null;break y;}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;break h;}else{throw $$e;}}}else if(a.cI!==null)a.cI.yM=null;}a.bQ=21;}ba:{if(a.eJ&4096){bb:{try{d=PF(a,d,c);if(a.cI===null)break bb;a.cI.Aw=Ia(a.fX);break bb;}catch($$e){$$je=Bi($$e);if($$je instanceof DY)
{e=$$je;break g;}else{throw $$e;}}}try{a.fX=null;break ba;}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;break g;}else{throw $$e;}}}else if(a.cI!==null)a.cI.Aw=null;}a.bQ=22;}if(a.eJ&512){try{d=F4(a,2,d,c);}catch($$e){$$je=Bi($$e);if($$je instanceof DY){e=$$je;return e.hG;}else{throw $$e;}}if(a.cI!==null)a.cI.JP=Long_and(a.bv,Long_fromInt(65535)).lo;if(Long_ne(a.bv,Long_and(a.E.f9.yy(),Long_fromInt(65535)))){a.bQ=13;a.E.b8=B(291);a.oD=5;continue;}}a.E.f9=AWh();a.bQ=7;}return d;}return e.hG;}return e.hG;}a.bQ
=12;}return 1;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cf.data;e=a.E;d=e.B;e.B=d+1|0;a.bv=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bQ=3;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;d=e.B;e.B=d+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bQ=4;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e
=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bQ=5;}if(!a.E.N)return c;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.E.f9.EX(a.bv);a.bQ=6;return 2;}if(b==4&&a.bQ==14)return 0;return (-2);}
function F4(a,b,c,d){var e,f,g,h;if(a.iF==(-1)){a.iF=b;a.bv=Long_ZERO;}while(true){if(a.iF<=0){if(b==2)a.bv=Long_and(a.bv,Long_fromInt(65535));else if(b==4)a.bv=Long_and(a.bv,new Long(4294967295, 0));a.iF=(-1);return c;}if(!a.E.N)break;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.bv;g=a.E.cf.data;e=a.E;h=e.B;e.B=h+1|0;a.bv=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.iF|0)*8|0)));a.iF=a.iF-1|0;c=d;}M(AG7(a,c));}
function PF(a,b,c){var d,e;if(a.fX===null)a.fX=A7A();while(true){if(!a.E.N)M(AG7(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));e=a.E.cf.data[a.E.B];if(e)Ro(a.fX,a.E.cf,a.E.B,1);a.E.f9.kG(a.E.cf,a.E.B,1);d=a.E;d.B=d.B+1|0;if(!e)break;b=c;}return c;}
function ANO(a,b,c){var d;if(a.fX===null)a.fX=A7A();while(Long_gt(a.bv,Long_ZERO)){if(!a.E.N)M(AG7(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));Ro(a.fX,a.E.cf,a.E.B,1);a.E.f9.kG(a.E.cf,a.E.B,1);d=a.E;d.B=d.B+1|0;a.bv=Long_sub(a.bv,Long_fromInt(1));b=c;}return b;}
function Ii(a,b,c){var d;d=0;while(d<b){a.xH.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.E.f9.kG(a.xH,0,b);}
function AOH(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);Bi1=b;}
function PK(){E4.call(this);}
function Bi2(){var a=new PK();A6K(a);return a;}
function A6K(a){return;}
function A58(a,b){$rt_putStderr(b);}
function Ki(){var a=this;D.call(a);a.x=0.0;a.z=0.0;a.w=0.0;}
var Bi3=null;var BeM=0;function Wo(b,c,d){var e;e=new Ki;if(b===-0.0)b=0.0;if(c===-0.0)c=0.0;if(d===-0.0)d=0.0;e.x=b;e.z=c;e.w=d;return e;}
function BY(b,c,d){var e,f;if(BeM>=Bi3.p)S(Bi3,Wo(0.0,0.0,0.0));e=Bi3;f=BeM;BeM=f+1|0;e=Z(e,f);e.x=b;e.z=c;e.w=d;return e;}
function P7(a,b){return BY(b.x-a.x,b.z-a.z,b.w-a.w);}
function CD(a){var b;b=Ce(a.x*a.x+a.z*a.z+a.w*a.w);return b<1.0E-4?BY(0.0,0.0,0.0):BY(a.x/b,a.z/b,a.w/b);}
function ABP(a,b){return BY(a.z*b.w-a.w*b.z,a.w*b.x-a.x*b.w,a.x*b.z-a.z*b.x);}
function Dk(a,b,c,d){return BY(a.x+b,a.z+c,a.w+d);}
function DH(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return Ce(c*c+d*d+e*e);}
function Ey(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return c*c+d*d+e*e;}
function ABT(a,b,c,d){var e,f,g;e=b-a.x;f=c-a.z;g=d-a.w;return e*e+f*f+g*g;}
function HM(a){return Ce(a.x*a.x+a.z*a.z+a.w*a.w);}
function KL(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(d*d<1.0000000116860974E-7)return null;g=(c-a.x)/d;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function JS(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(e*e<1.0000000116860974E-7)return null;g=(c-a.z)/e;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function Kv(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(f*f<1.0000000116860974E-7)return null;g=(c-a.w)/f;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function AQb(){Bi3=Ci();BeM=0;}
function AMm(){D.call(this);}
function Bi4(){var a=new AMm();ATy(a);return a;}
function ATy(a){return;}
function Go(b){return Math.sin(b);}
function GB(b){return Math.cos(b);}
function Io(b){return Math.atan(b);}
function A3S(b){return Math.log(b);}
function Ed(b){return Math.sqrt(b);}
function Uo(b){return Math.ceil(b);}
function A2N(b,c){return Math.pow(b,c);}
function CR(b,c){return Math.atan2(b,c);}
function BP(){return A2p();}
function A2p(){return Math.random();}
function CB(b,c){if(b<c)c=b;return c;}
function DC(b,c){if(b>c)c=b;return c;}
function H_(b){if(b<=0)b= -b;return b;}
function HU(b){if(b<=0.0)b= -b;return b;}
function Jb(){D.call(this);this.GT=null;}
var Bi5=null;var Bf7=null;var BiI=null;function AGO(a){var b=new Jb();APF(b,a);return b;}
function APF(a,b){a.GT=b;}
function AC5(){Bi5=AGO(B(292));Bf7=AGO(B(293));BiI=AGO(B(294));}
function Lr(){LT.call(this);}
function Xk(a){return a.yw;}
function ABK(){var a=this;Lr.call(a);a.yw=0;a.yb=0;a.md=null;}
function AZF(a,b,c,d,e,f){var g=new ABK();A2D(g,a,b,c,d,e,f);return g;}
function A2D(a,b,c,d,e,f,g){KN(a,c);a.bk=e;a.cy=f;a.yb=b;a.yw=g;a.md=d;}
function AON(a,b){return a.md.data[b+a.yb|0];}
function Vq(a,b,c){a.md.data[b+a.yb|0]=c;}
function AYY(a){return 1;}
function AWe(a){return a.md;}
function A14(a){return a.yw;}
function LP(){var a=this;D.call(a);a.Hu=null;a.uA=null;a.Gx=0.0;a.BK=0.0;a.vt=null;a.uN=null;a.mZ=0;}
function ACO(a,b){var c;if(b!==null){a.vt=b;return a;}c=new Cb;Bl(c,B(295));M(c);}
function A18(a,b){return;}
function AGU(a,b){var c;if(b!==null){a.uN=b;return a;}c=new Cb;Bl(c,B(295));M(c);}
function A6A(a,b){return;}
function AJc(a,b,c,d){var e,f,g,h,$$je;a:{if(a.mZ!=3){if(d)break a;if(a.mZ!=2)break a;}b=new D2;O(b);M(b);}a.mZ=!d?1:2;while(true){try{e=Y0(a,b,c);}catch($$e){$$je=Bi($$e);if($$je instanceof B6){f=$$je;M(A41(f));}else{throw $$e;}}if(Jx(e)){if(!d)return e;g=Ct(b);if(g<=0)return e;e=Fi(g);}else if(IO(e))break;h=!Mr(e)?a.vt:a.uN;b:{if(h!==Bf7){if(h===Bi5)break b;else return e;}if(Ct(c)<a.uA.data.length)return Bi6;UH(c,a.uA);}EO(b,b.bk+Lw(e)|0);}return e;}
function XW(a,b){var c;if(a.mZ!=2&&a.mZ!=4){b=new D2;O(b);M(b);}c=Bi7;if(c===Bi7)a.mZ=3;return c;}
function A7s(a,b){return Bi7;}
function N6(){var a=this;D.call(a);a.nr=0;a.qG=0;}
var Bi7=null;var Bi6=null;function Ze(a,b){var c=new N6();AKi(c,a,b);return c;}
function AKi(a,b,c){a.nr=b;a.qG=c;}
function Jx(a){return a.nr?0:1;}
function IO(a){return a.nr!=1?0:1;}
function Nv(a){return !P$(a)&&!Mr(a)?0:1;}
function P$(a){return a.nr!=2?0:1;}
function Mr(a){return a.nr!=3?0:1;}
function Lw(a){var b;if(Nv(a))return a.qG;b=new Jk;O(b);M(b);}
function Fi(b){return Ze(2,b);}
function R2(a){var b,c;switch(a.nr){case 0:b=new PZ;O(b);M(b);case 1:b=new SD;O(b);M(b);case 2:b=new RT;c=a.qG;O(b);b.Bs=c;M(b);case 3:b=new PV;c=a.qG;O(b);b.EJ=c;M(b);default:}}
function AKQ(){Bi7=Ze(0,0);Bi6=Ze(1,0);}
function Z6(){D.call(this);}
function A9Y(){return {};}
function PL(){}
function Yz(){D.call(this);}
function KC(){var a=this;D.call(a);a.dK=0;a.pJ=0;a.p9=0;a.f3=0;a.fA=null;a.sc=null;a.oC=null;a.mW=null;a.mU=null;a.vK=null;a.vL=null;a.u$=null;a.vf=null;a.pE=null;a.to=0;a.bL=0;a.bK=0;a.kh=null;a.cZ=null;a.cP=0;a.bW=0;a.bl=0;a.rj=0;a.w4=null;a.y=null;}
var Bi8=null;var Bi9=null;function JC(a){a.dK=0;a.bL=0;a.bK=0;a.bl=0;a.bW=0;if(a.rj)a.y.f9.lW();}
function Zl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.y.B;d=a.y.N;e=a.bK;f=a.bL;g=a.bl;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.dK){case 2:break f;case 9:a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.p9=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.fA!==null&&a.fA.data.length>=k))a.fA=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.fA.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.f3=0;a.dK=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-2));}while(f<32){if(!d){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.dK=9;a.y.b8=B(296);a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.pJ=l;f=0;a.dK=a.pJ?2:!a.to?0:7;e=f;continue e;}while(f<3){if(!d){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.to=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.dK=1;break l;case 1:AEh(a.mW,a.mU,a.vK,a.vL,a.y);W1(a.pE,a.mW.data[0],a.mU.data[0],a.vK.data[0],0,a.vL.data[0],0);e=e>>>3;f=f+(-3)|0;a.dK=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.dK=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.dK=9;a.y.b8=B(297);a.bK=b;a.bL=k;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));default:}}continue e;}while(a.f3<(4+(a.p9>>>10)|0)){while(f<3){if(!d){a.bK=e;a.bL
=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.fA.data;j=Bi9.data;k=a.f3;a.f3=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.f3<19){o=a.fA.data;j=Bi9.data;k=a.f3;a.f3=k+1|0;o[j[k]]=0;}a.sc.data[0]=7;k=APZ(a.w4,a.fA,a.sc,a.oC,a.kh,a.y);if(k){if(k==(-3)){a.fA=null;a.dK=9;}a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,k);}a.f3=0;a.dK=5;}while(true)
{k=a.p9;if(a.f3>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.sc.data[0];while(f<k){if(!d){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.kh.data[((a.oC.data[0]+(e&Bi8.data[k])|0)*3|0)+1|0];n=a.kh.data[((a.oC.data[0]+(e&Bi8.data[k])|0)*3|0)+2|0];l=R(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.fA.data;k=a.f3;a.f3=k+1|0;j[k]=n;}else{p=R(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bK=e;a.bL=
f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&Bi8.data[q])|0;e=n>>>q;f=k-q|0;h=a.f3;q=a.p9;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.fA.data[h-1|0];while(true){j=a.fA.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.f3=l;}}a.oC.data[0]=(-1);a.mW.data[0]=9;a.mU.data[0]=6;k=a.p9;k=YC(a.w4,257+(k&31)|0,1+(k>>5&31)|0,a.fA,a.mW,a.mU,a.u$,a.vf,a.kh,
a.y);if(k){if(k==(-3)){a.fA=null;a.dK=9;}a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,k);}W1(a.pE,a.mW.data[0],a.mU.data[0],a.kh,a.u$.data[0],a.kh,a.vf.data[0]);a.dK=6;}a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;b=ABy(a.pE,b);if(b!=1)break e;b=0;AAK(a.pE,a.y);c=a.y.B;d=a.y.N;e=a.bK;f=a.bL;g=a.bl;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;if(a.to){a.dK=7;break b;}a.dK=0;continue e;}if(!d){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}if(!h){if(g==a.cP&&a.bW){g=0;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;}if(!h){a.bl=g;b=B5(a,b);g=a.bl;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;if(g==a.cP&&a.bW){g=0;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;}if(!h){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}}}b=0;k=a.pJ;if(k>d)k=d;if(k>h)k=h;Di(a.y.cf,c,a.cZ,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.pJ-k|0;a.pJ=k;if(k)continue;a.dK=!a.to?0:7;}return B5(a,b);}a.dK=9;a.y.b8
=B(298);a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.fA=null;a.dK=9;a.y.b8=B(299);a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.bl=g;b=B5(a,b);g=a.bl;if(a.bW!=a.bl){a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}a.dK=8;}a.bK=e;a.bL=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,1);}
function SQ(a){JC(a);a.cZ=null;a.kh=null;}
function B5(a,b){var c,d,e,f,g;c=a.y.pM;d=a.bW;e=(d>a.bl?a.cP:a.bl)-d|0;if(e>a.y.ib)e=a.y.ib;if(e&&b==(-5))b=0;f=a.y;f.ib=f.ib-e|0;f=a.y;f.no=Long_add(f.no,Long_fromInt(e));if(a.rj&&e>0)a.y.f9.kG(a.cZ,d,e);Di(a.cZ,d,a.y.uV,c,e);c=c+e|0;g=d+e|0;if(g==a.cP){if(a.bl==a.cP)a.bl=0;d=a.bl-0|0;if(d>a.y.ib)d=a.y.ib;if(d&&b==(-5))b=0;f=a.y;f.ib=f.ib-d|0;f=a.y;f.no=Long_add(f.no,Long_fromInt(d));if(a.rj&&d>0)a.y.f9.kG(a.cZ,0,d);Di(a.cZ,0,a.y.uV,c,d);c=c+d|0;g=0+d|0;}a.y.pM=c;a.bW=g;return b;}
function AH2(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bi8=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;Bi9=b;}
function Nz(){LP.call(this);}
function Y0(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fl(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);OY(b,d,k,g-k|0);f=0;}if(!Fl(c)){l=!Fl(b)&&f>=g?Bi7:Bi6;break a;}k=CB(Ct(c),i.length);m=new Ts;m.yR=b;m.De=c;l=ACw(a,d,f,g,h,0,k,m);f=m.vH;if(l===null&&0==m.rK)l=Bi7;WT(c,h,0,m.rK);if(l!==null)break;}}EO(b,b.bk-(g-f|0)|0);return l;}
function PM(){Nz.call(this);}
function ACw(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(N5(h,2))break a;i=Bi6;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!On(l)){if((f+3|0)>g){j=j+(-1)|0;if(N5(h,3))break a;i=Bi6;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Dt(l)){i=Fi(1);break a;}if
(j>=d){if(AAv(h))break a;i=Bi7;break a;}c=j+1|0;j=k[j];if(!DR(j)){j=c+(-2)|0;i=Fi(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(N5(h,4))break a;i=Bi6;break a;}k=e.data;n=EJ(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vH=j;h.rK=f;return i;}
function AOo(){D.call(this);}
function Bi$(){var a=new AOo();A2O(a);return a;}
function A2O(a){return;}
function APf(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Bhf());}return b.data.length;}
function AEF(b,c){if(b===null){b=new EE;O(b);M(b);}if(b===F($rt_voidcls())){b=new Cb;O(b);M(b);}if(c>=0)return A1Q(b.fY,c);b=new Xq;O(b);M(b);}
function A1Q(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function F$(){var a=this;D.call(a);a.jW=null;a.j4=null;a.eP=null;a.fI=null;a.lg=null;a.im=null;}
var Bi_=null;var Bja=null;var Bjb=null;var Bjc=null;var Bjd=null;var Bje=null;function Bay(){var a=new F$();AHE(a);return a;}
function AHE(a){a.jW=null;a.j4=null;a.eP=null;a.fI=null;a.lg=null;a.im=null;}
function NC(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eP.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eP.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eP.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eP.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m=s;while(true){if(m>=t){v=u-a.eP.data[t]|0;if(v<0)return (-3);b=a.eP.data;b[t]
=b[t]+v|0;b=a.im.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.im.data;u=u+a.eP.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.im.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.im.data[t];b=a.im.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.lg.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eP.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c
=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eP.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eP.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.lg.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.im.data[y]=m;a.fI.data[0]=bc<<24>>24;a.fI.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.fI.data;b=a.lg.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;Di(a.fI,0,j,(a.lg.data[q]+c|0)*3|0,3);z=be;}b=a.fI.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.fI.data[0]=192;else{p=l.data;if
(p[w]>=e){i=g.data;o=f.data;a.fI.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.fI.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.fI;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.fI.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){Di(a.fI,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.im.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eP.data[m]|0;if(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function APZ(a,b,c,d,e,f){var g;MX(a,19);a.jW.data[0]=0;g=NC(a,b,0,19,19,null,null,d,c,e,a.jW,a.j4);if(g==(-3))f.b8=B(300);else if(!(g!=(-5)&&c.data[0])){f.b8=B(301);g=(-3);}return g;}
function YC(a,b,c,d,e,f,g,h,i,j){var k;MX(a,288);a.jW.data[0]=0;k=NC(a,d,0,b,257,Bjb,Bjc,g,e,i,a.jW,a.j4);if(!k&&e.data[0]){MX(a,288);c=NC(a,d,b,c,0,Bjd,Bje,h,f,i,a.jW,a.j4);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.b8=B(302);else if(c==(-5)){j.b8=B(303);c=(-3);}else if(c!=(-4)){j.b8=B(304);c=(-3);}return c;}if(k==(-3))j.b8=B(305);else if(k!=(-4)){j.b8=B(306);k=(-3);}return k;}
function AEh(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=Bi_;e[0]=Bja;return 0;}
function MX(a,b){var c;if(a.jW===null){a.jW=$rt_createIntArray(1);a.j4=$rt_createIntArray(b);a.eP=$rt_createIntArray(16);a.fI=$rt_createIntArray(3);a.lg=$rt_createIntArray(15);a.im=$rt_createIntArray(16);}if(a.j4.data.length<b)a.j4=$rt_createIntArray(b);c=0;while(c<b){a.j4.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eP.data[c]=0;c=c+1|0;}c=0;while(c<3){a.fI.data[c]=0;c=c+1|0;}Di(a.eP,0,a.lg,0,15);Di(a.eP,0,a.im,0,16);}
function AOp(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
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
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;Bi_=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;Bja=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;Bjb=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;Bjc=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;Bjd=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;Bje=b;}
function Lz(){var a=this;D.call(a);a.fd=0;a.lP=0;a.fE=null;a.kZ=0;a.l$=0;a.y8=0;a.sC=0;a.q0=0;a.uO=0;a.ux=0;a.yD=null;a.v0=0;a.ye=null;a.v7=0;a.bd=null;a.C=null;}
var Bjf=null;function W1(a,b,c,d,e,f,g){a.fd=0;a.uO=b<<24>>24;a.ux=c<<24>>24;a.yD=d;a.v0=e;a.ye=f;a.v7=g;a.fE=null;}
function ABy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.bd.B;d=a.bd.N;e=a.C.bK;f=a.C.bL;g=a.C.bl;h=g>=a.C.bW?a.C.cP-g|0:(a.C.bW-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.fd){case 0:break f;case 2:i=a.sC;while(f<i){if(!d){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bd.cf.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.lP=a.lP+(e&Bjf.data[i])|0;e=e>>i;f=f-i|0;a.l$=a.ux;a.fE=a.ye;a.kZ=a.v7;a.fd=3;break g;case 4:i=a.sC;while
(f<i){if(!d){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bd.cf.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.q0=a.q0+(e&Bjf.data[i])|0;e=e>>i;f=f-i|0;a.fd=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.C.bl=g;b=B5(a.C,b);g=a.C.bl;if(a.C.bW!=a.C.bl){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,b);}a.fd=8;break a;case 9:a.C.bK=e;a.C.bL
=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,(-2));}}l=a.l$;while(f<l){if(!d){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bd.cf.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.kZ+(e&Bjf.data[l])
|0)*3|0;k=a.fE.data;i=m+1|0;e=e>>k[i];f=f-a.fE.data[i]|0;l=a.fE.data[m];if(l&16){a.sC=l&15;a.q0=a.fE.data[m+2|0];a.fd=4;continue b;}if(l&64){a.fd=9;a.bd.b8=B(307);a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,(-3));}a.l$=l;a.kZ=(m/3|0)+a.fE.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;b=AM1(a,a.uO,a.ux,a.yD,a.v0,a.ye,a.v7,a.C,a.bd);c=a.bd.B;d=a.bd.N;e=a.C.bK;f
=a.C.bL;g=a.C.bl;h=g>=a.C.bW?a.C.cP-g|0:(a.C.bW-g|0)-1|0;if(b){a.fd=b!=1?9:7;continue b;}}a.l$=a.uO;a.fE=a.yD;a.kZ=a.v0;a.fd=1;}l=a.l$;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.bd.cf.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.kZ+(e&Bjf.data[l])|0)*3|0;k=a.fE.data;i=m+1|0;e=e>>>k[i];f=f-a.fE.data[i]|0;n=a.fE.data[m];if(!n){a.y8=a.fE.data[m+2|0];a.fd=6;continue b;}if(n&16){a.sC=n&15;a.lP=a.fE.data[m+2|0];a.fd=2;continue b;}if(!(n&64)){a.l$=n;a.kZ=(m/3|0)+a.fE.data[m+2|0]|0;continue b;}if(!(n&32)){a.fd
=9;a.bd.b8=B(308);a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,(-3));}a.fd=7;continue b;}if(h)i=g;else{if(g!=a.C.cP)i=g;else if(!a.C.bW)i=g;else{i=0;h=i>=a.C.bW?a.C.cP-i|0:(a.C.bW-i|0)-1|0;}if(!h){a.C.bl=i;b=B5(a.C,b);i=a.C.bl;h=i>=a.C.bW?a.C.cP-i|0:(a.C.bW-i|0)-1|0;if(i==a.C.cP&&a.C.bW){i=0;h=i>=a.C.bW?a.C.cP-i|0:(a.C.bW-i|0)-1|0;}if(!h){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=i;return B5(a.C,
b);}}}b=0;k=a.C.cZ.data;g=i+1|0;k[i]=a.y8<<24>>24;h=h+(-1)|0;a.fd=0;continue b;}i=g-a.q0|0;while(i<0){i=i+a.C.cP|0;}while(a.lP){if(h)l=g;else{if(g!=a.C.cP)l=g;else if(!a.C.bW)l=g;else{l=0;h=l>=a.C.bW?a.C.cP-l|0:(a.C.bW-l|0)-1|0;}if(!h){a.C.bl=l;b=B5(a.C,b);l=a.C.bl;h=l>=a.C.bW?a.C.cP-l|0:(a.C.bW-l|0)-1|0;if(l==a.C.cP&&a.C.bW){l=0;h=l>=a.C.bW?a.C.cP-l|0:(a.C.bW-l|0)-1|0;}if(!h){a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=l;return B5(a.C,b);}}}o=a.C.cZ.data;g=l
+1|0;k=a.C.cZ.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m==a.C.cP?0:m;a.lP=a.lP-1|0;}a.fd=0;}a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,b);}a.C.bK=e;a.C.bL=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.B|0));a.bd.B=c;a.C.bl=g;return B5(a.C,1);}
function AAK(a,b){return;}
function AM1(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.B;k=i.N;l=h.bK;m=h.bL;n=h.bl;o=n>=h.bW?h.cP-n|0:(h.bW-n|0)-1|0;p=Bjf.data[b];q=Bjf.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.cf.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cZ.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&Bjf.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.cf.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.b8=B(307);b=i.N-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bK=w;h.bL=b;i.N=c;i.G=Long_add(i.G,Long_fromInt(e-i.B|0));i.B=e;h.bl=n;return (-3);}b=(b+r[x+2|0]|0)+(w&Bjf.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.cf.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&Bjf.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.cZ.data;b=n+1|0;r=h.cZ.data;c=w+1|0;s[n]=r[w];s=h.cZ.data;n=b+1|0;r=h.cZ.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{Di(h.cZ,w,h.cZ,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cP|0;if(w>=0)break;}b=h.cP-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.cZ.data;n=c+1|0;r=h.cZ.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{Di(h.cZ,w,h.cZ,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.cZ.data;c=n+1|0;r=h.cZ.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}Di(h.cZ,w,h.cZ,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bK=l;h.bL=e;i.N=b;i.G=Long_add(i.G,Long_fromInt(c-i.B|0));i.B=c;h.bl=n;return 1;}i.b8=B(308);v=i.N-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bK=l;h.bL=c;i.N=e;i.G=Long_add(i.G,Long_fromInt(b-i.B|0));i.B=b;h.bl=n;return (-3);}t=(t+s[u+2|0]|0)+(l&Bjf.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cZ.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bK=l;h.bL=g;i.N=b;i.G=Long_add(i.G,Long_fromInt(e-i.B|0));i.B=e;h.bl=c;return 0;}
function ABD(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bjf=b;}
function Hs(){B1.call(this);}
function Bjg(){var a=new Hs();A_o(a);return a;}
function A_o(a){O(a);}
function Xq(){B6.call(this);}
function Bjh(){var a=new Xq();A8M(a);return a;}
function A8M(a){O(a);}
function AAV(){D.call(this);}
function A_z(a,b){return a.HE(b);}
function AUy(a){return a.I8();}
function Kj(){B6.call(this);}
function Bji(){var a=new Kj();A7h(a);return a;}
function A7h(a){O(a);}
function ZS(){var a=this;D.call(a);a.hh=null;a.ri=null;a.ee=null;a.fg=0;}
function Bav(){var a=new ZS();A2C(a);return a;}
function A2C(a){a.ee=Bc4;}
function D2(){BE.call(this);}
function Bjj(){var a=new D2();A9U(a);return a;}
function A9U(a){O(a);}
function AIy(){D.call(this);}
function JG(b){return b.length?0:1;}
function AOS(b){return b.shift();}
function SL(){D.call(this);this.Dd=null;}
function AQ7(a){var b,c,d;b=a.Dd;if(!HF(b)&&b.co.ee===null){c=b.co;if(c.hh!==null&&!JG(c.hh)){b=c.hh;d=AOS(b);if(b===null)c.hh=null;Qk(d);}}}
function Q7(){var a=this;D.call(a);a.zC=null;a.zD=null;a.zA=0;a.zB=null;}
function Qk(a){var b,c,d,e;b=a.zC;c=a.zD;d=a.zA;e=a.zB;Fs(b);c.co.ee=b;b=c.co;b.fg=b.fg+d|0;CM(e,null);}
function GY(){B1.call(this);}
function Bjk(){var a=new GY();AVa(a);return a;}
function AVa(a){O(a);}
function WX(){Fh.call(this);}
function Bjl(){var a=new WX();A1h(a);return a;}
function A1h(a){O(a);}
function E2(){BE.call(this);}
function Bjm(){var a=new E2();A7R(a);return a;}
function A7R(a){O(a);}
function Oe(){var a=this;D.call(a);a.HU=null;a.BR=0.0;a.F4=0.0;a.lc=null;a.mS=null;a.ry=null;a.h2=0;}
function AQ1(a,b){var c;if(b!==null){a.mS=b;return a;}c=new Cb;Bl(c,B(309));M(c);}
function A$E(a,b){return;}
function ADG(a,b){var c;if(b!==null){a.ry=b;return a;}c=new Cb;Bl(c,B(309));M(c);}
function A6d(a,b){return;}
function UD(a,b,c,d){var e,f,$$je;if(!(a.h2==2&&!d)&&a.h2!=3){a.h2=d?2:1;while(true){try{e=AGi(a,b,c);}catch($$e){$$je=Bi($$e);if($$je instanceof B6){f=$$je;M(A41(f));}else{throw $$e;}}if(IO(e))return e;if(Jx(e)){if(d&&Fl(b)){if(a.mS===BiI)return Fi(Ct(b));if(Ct(c)<=Bh(a.lc))return Bi6;EO(b,b.bk+Ct(b)|0);if(a.mS===Bf7)Ng(c,a.lc);}return e;}if(P$(e)){if(a.mS===BiI)return e;if(a.mS===Bf7){if(Ct(c)<Bh(a.lc))return Bi6;Ng(c,a.lc);}EO(b,b.bk+Lw(e)|0);}else if(Mr(e)){if(a.ry===BiI)break;if(a.ry===Bf7){if(Ct(c)<Bh(a.lc))return Bi6;Ng(c,
a.lc);}EO(b,b.bk+Lw(e)|0);}}return e;}b=new D2;O(b);M(b);}
function ACb(a,b){if(a.h2!=3&&a.h2!=2){b=new D2;O(b);M(b);}a.h2=3;return Bi7;}
function ARs(a){a.h2=0;return a;}
function AJK(a,b){var c,d;if(a.h2&&a.h2!=3){b=new D2;O(b);M(b);}if(!Ct(b))return AHk(0);if(a.h2)ARs(a);c=AHk(DC(8,Ct(b)*a.BR|0));while(true){d=UD(a,b,c,0);if(Jx(d))break;if(IO(d))c=Vw(a,c);if(!Nv(d))continue;R2(d);}b=UD(a,b,c,1);if(Nv(b))R2(b);while(!Jx(ACb(a,c))){c=Vw(a,c);}Gs(c);return c;}
function Vw(a,b){var c,d,e;c=b.md;d=O2(c,DC(8,c.data.length*2|0));e=AM3(d,0,d.data.length);EO(e,b.bk);return e;}
function AYD(a,b){return Bi7;}
function A5k(a){return;}
function Sb(){}
function Sl(){}
function Pc(){var a=this;D.call(a);a.wm=null;a.A4=null;a.Ip=0;a.Jn=0;}
function APk(a){if(!a.Ip){a.wm.CP=null;Fs(a.wm);CM(a.A4,null);}}
function LE(){Oe.call(this);}
function AGi(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fl(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);AKg(b,d,k,g-k|0);f=0;}if(!Fl(c)){l=!Fl(b)&&f>=g?Bi7:Bi6;break a;}k=CB(Ct(c),i.length);m=new Wp;m.Aj=b;m.Et=c;l=ARO(a,d,f,g,h,0,k,m);f=m.v_;if(l===null&&0==m.qH)l=Bi7;ASo(c,h,0,m.qH);if(l!==null)break;}}EO(b,b.bk-(g-f|0)|0);return l;}
function Rc(){LE.call(this);}
function ARO(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NJ(h))break a;i=Bi7;break a;}n=k+1|0;k=j[k];if(!Hm(a,k)){c=n+(-2)|0;i=Fi(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NJ(h))break a;i=Bi7;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Hm(a,m))break b;if(!Hm(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(On(p)){c=k+(-3)|0;i=Fi(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Fi(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NJ(h))break a;i=Bi7;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AJn(h,2))break a;i=Bi6;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Hm(a,m))break c;if(!Hm(a,o))break c;if(!Hm(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=IB(q);m=c+1|0;j[c]=H7(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=Fi(1);break a;}c=k+(-3)|0;i=Fi(1);}h.v_=
c;h.qH=f;return i;}
function Hm(a,b){return (b&192)!=128?0:1;}
function DY(){var a=this;BE.call(a);a.hG=0;a.IM=null;}
function AG7(a,b){var c=new DY();AVb(c,a,b);return c;}
function AVb(a,b,c){a.IM=b;O(a);a.hG=c;}
function ANv(){var a=this;D.call(a);a.Jr=0;a.GK=0;a.HP=Long_ZERO;a.I2=0;a.A6=0;a.pp=null;a.yM=null;a.Aw=null;a.JP=0;a.Hv=Long_ZERO;a.GM=0;a.H$=Long_ZERO;}
function Bco(){var a=new ANv();A8G(a);return a;}
function A8G(a){a.Jr=0;a.GK=0;a.A6=255;a.GM=0;a.H$=Long_ZERO;}
function OP(){D.call(this);this.me=0;}
var Bjn=null;function AWh(){var a=new OP();Y_(a);return a;}
function Y_(a){a.me=0;}
function A2y(a,b,c,d){var e,f,g,h;e=a.me^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=Bjn.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.me=e^(-1);}
function A6r(a){a.me=0;}
function A9T(a,b){a.me=Long_and(b,new Long(4294967295, 0)).lo;}
function A7x(a){return Long_and(Long_fromInt(a.me),new Long(4294967295, 0));}
function AFz(){var b,c,d;Bjn=null;Bjn=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}Bjn.data[b]=d;b=b+1|0;}}
function I5(){var a=this;D.call(a);a.R=0.0;a.M=0.0;a.S=0.0;a.V=0.0;a.U=0.0;a.W=0.0;}
var Bjo=null;var BeL=0;function No(b,c,d,e,f,g){var h;h=new I5;h.R=b;h.M=c;h.S=d;h.V=e;h.U=f;h.W=g;return h;}
function D3(b,c,d,e,f,g){var h,i;if(BeL>=Bjo.p)S(Bjo,No(0.0,0.0,0.0,0.0,0.0,0.0));h=Bjo;i=BeL;BeL=i+1|0;return M1(Z(h,i),b,c,d,e,f,g);}
function M1(a,b,c,d,e,f,g){a.R=b;a.M=c;a.S=d;a.V=e;a.U=f;a.W=g;return a;}
function Ja(a,b,c,d){var e,f,g,h,i,j,k;e=a.R;f=a.M;g=a.S;h=a.V;i=a.U;j=a.W;k=R(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=R(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=R(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return D3(e,f,g,h,i,j);}
function Dv(a,b,c,d){return D3(a.R-b,a.M-c,a.S-d,a.V+b,a.U+c,a.W+d);}
function T8(a,b,c,d){return D3(a.R+b,a.M+c,a.S+d,a.V+b,a.U+c,a.W+d);}
function Qq(a,b,c){var d,e;if(b.U>a.M&&b.M<a.U){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.V>a.R)d=c;else{d=a.R-b.V;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.R<a.V)e=d;else{e=a.V-b.R;if(e<=d)e=d;}return e;}return c;}return c;}
function V6(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.U>a.M)d=c;else{d=a.M-b.U;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.M<a.U)e=d;else{e=a.U-b.M;if(e<=d)e=d;}return e;}return c;}return c;}
function T_(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.U>a.M&&b.M<a.U){if(c<=0.0)d=c;else if(b.W>a.S)d=c;else{d=a.S-b.W;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.S<a.W)e=d;else{e=a.W-b.S;if(e<=d)e=d;}return e;}return c;}return c;}
function L5(a,b){return b.V>a.R&&b.R<a.V?(b.U>a.M&&b.M<a.U?(b.W>a.S&&b.S<a.W?1:0):0):0;}
function FX(a,b,c,d){a.R=a.R+b;a.M=a.M+c;a.S=a.S+d;a.V=a.V+b;a.U=a.U+c;a.W=a.W+d;return a;}
function APU(a){return (a.V-a.R+a.U-a.M+a.W-a.S)/3.0;}
function P_(a){return D3(a.R,a.M,a.S,a.V,a.U,a.W);}
function QN(a,b,c){var d,e,f,g,h,i,j,k;d=KL(b,c,a.R);e=KL(b,c,a.V);f=JS(b,c,a.M);g=JS(b,c,a.U);h=Kv(b,c,a.S);i=Kv(b,c,a.W);if(!RA(a,d))d=null;if(!RA(a,e))e=null;if(!Ub(a,f))f=null;if(!Ub(a,g))g=null;if(!UV(a,h))h=null;if(!UV(a,i))i=null;j=null;if(d!==null)j=d;if(e!==null&&!(j!==null&&Ey(b,e)>=Ey(b,j)))j=e;if(f!==null&&!(j!==null&&Ey(b,f)>=Ey(b,j)))j=f;if(g!==null&&!(j!==null&&Ey(b,g)>=Ey(b,j)))j=g;if(h!==null&&!(j!==null&&Ey(b,h)>=Ey(b,j)))j=h;if(i!==null&&!(j!==null&&Ey(b,i)>=Ey(b,j)))j=i;if(j===null)return null;k
=(-1);if(j===d)k=4;if(j===e)k=5;if(j===f)k=0;if(j===g)k=1;if(j===h)k=2;if(j===i)k=3;return A0A(0,0,0,k,j);}
function RA(a,b){return b===null?0:b.z>=a.M&&b.z<=a.U&&b.w>=a.S&&b.w<=a.W?1:0;}
function Ub(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.w>=a.S&&b.w<=a.W?1:0;}
function UV(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.z>=a.M&&b.z<=a.U?1:0;}
function Xa(a,b){a.R=b.R;a.M=b.M;a.S=b.S;a.V=b.V;a.U=b.U;a.W=b.W;}
function AEq(){Bjo=Ci();BeL=0;}
function Qd(){}
function Bu(){Bs.call(this);}
var Bjp=0;var Bgl=null;var Bjq=0;var Bjr=0;var Bjs=0;var Bjt=0.0;var Bju=0;var Bjv=null;var Bjw=0;var Bjx=0;var Bjy=0.0;var Bjz=0.0;var BjA=0.0;var BjB=0.0;var BjC=0.0;var BjD=0.0;var BjE=0.0;var BjF=0.0;var BjG=0.0;var BjH=0;var BfR=0.0;var BfS=0.0;var BfT=0.0;var BfU=0.0;var BjI=0;var BjJ=0;var BjK=0;var BjL=0.0;var BjM=0.0;var BjN=0.0;var BjO=0;var BjP=0;var BjQ=0;var BjR=0;var BjS=null;var BjT=0;var BjU=null;var BjV=0;var BjW=null;var BjX=0;var BjY=null;var BjZ=null;var Bgk=null;var Bj0=null;var Bj1=null;var Bj2
=null;var Bj3=null;var Bj4=null;var Bj5=null;var Bgj=0;var Bj6=null;var Bj7=null;var Bj8=null;var Bj9=null;var Bj$=null;var Bj_=null;var Bka=null;var Bkb=null;var Bkc=null;var Bkd=null;var Bke=null;var Bkf=null;var Bkg=null;var Bkh=null;var Bki=Long_ZERO;var Bkj=0;function BW(){BW=Bt(Bu);A1x();}
function Bkk(){var a=new Bu();AO3(a);return a;}
function AO3(a){BW();VL(a);}
function Ba(b){BW();a:{switch(b){case 2884:K2(2884);break a;case 2896:Bjr=1;break a;case 2903:BjH=1;break a;case 2912:BjJ=1;break a;case 2929:K2(2929);break a;case 3008:Bjs=1;break a;case 3042:K2(3042);break a;case 3553:Bjq=1;break a;case 32823:K2(32823);break a;case 32826:break;default:break a;}}}
function HG(b){var c;BW();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Bd();BdH.depthFunc(c);}
function Sp(b,c){BW();Bjt=c;}
function C$(b){BW();BjR=b;}
function GM(){BW();switch(BjR){case 5888:break;case 5889:return BjU.data[BjV];case 5890:return BjW.data[BjX];default:}return BjS.data[BjT];}
function C9(){BW();Fo(GM());}
function FM(b,c,d,e){BW();Bd();Bd4.data[0]=b;Bd4.data[1]=c;Bd4.data[2]=d;Bd4.data[3]=e;BdH.viewport(b,c,d,e);}
function D4(b){BW();Bd();BdH.clear(b);}
function Im(b,c,d,e,f,g){var h,i,j,k;BW();h=GM();i=c-b;h.es=2.0/i;h.eq=0.0;h.er=0.0;h.ep=0.0;h.ev=0.0;j=e-d;h.ew=2.0/j;h.et=0.0;h.eu=0.0;h.eA=0.0;h.ey=0.0;k=g-f;h.ez=2.0/k;h.ex=0.0;h.gS= -(c+b)/i;h.gT= -(e+d)/j;h.gQ=(g+f)/k;h.gR=1.0;}
function Bw(b,c,d){var e;BW();L1(Bj1,b,c,d);e=GM();U3(e,Bj1,e);if(!Bju)return;e=new Cb;Bl(e,B(310));M(e);}
function Hx(b,c,d,e){BW();Bd();BdH.clearColor(b,c,d,e);}
function Bb(b){BW();a:{switch(b){case 2884:J1(2884);break a;case 2896:Bjr=0;break a;case 2903:BjH=0;break a;case 2912:BjJ=0;break a;case 2929:J1(2929);break a;case 3008:Bjs=0;break a;case 3042:J1(3042);break a;case 3553:Bjq=0;break a;case 32823:J1(32823);break a;case 32826:break;default:break a;}}}
function BU(b,c,d,e){BW();Bjy=b;Bjz=c;BjA=d;BjB=e;}
function St(b,c,d,e,f,g,h,i,j){var k,l,m,n;BW();Bd();if(j===null){k=BdH;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=Ct(j);k=Bd5;n=0;while(n<m){h=(ALL(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(Bd5.buffer,0,m);BdH.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function B3(){BW();a:{switch(BjR){case 5888:break;case 5889:if(BjV>=(BjU.data.length-1|0)){Cg(C1(),B(311));break a;}BjV=BjV+1|0;GP(BjU.data[BjV],BjU.data[BjV-1|0]);break a;case 5890:if(BjX>=(BjW.data.length-1|0)){Cg(C1(),B(312));break a;}BjX=BjX+1|0;GP(BjW.data[BjX],BjW.data[BjX-1|0]);break a;default:}if(BjT>=(BjS.data.length-1|0))Cg(C1(),B(313));else{BjT=BjT+1|0;GP(BjS.data[BjT],BjS.data[BjT-1|0]);}}}
function Bv(b,c,d,e){var f;BW();L1(Bj1,c,d,e);f=GM();WV(f,b*0.01745329238474369,Bj1,f);if(!Bju)return;f=new Cb;Bl(f,B(310));M(f);}
function BD(){BW();a:{switch(BjR){case 5888:break;case 5889:if(BjV<=0){Cg(C1(),B(314));break a;}BjV=BjV-1|0;break a;case 5890:if(BjX<=0){Cg(C1(),B(315));break a;}BjX=BjX-1|0;break a;default:}if(BjT<=0)Cg(C1(),B(316));else BjT=BjT-1|0;}}
function TL(b,c){BW();a:{switch(b){case 2982:break;case 2983:TN(BjU.data[BjV],c);break a;default:}TN(BjS.data[BjT],c);}}
function CC(b,c,d){var e;BW();L1(Bj1,b,c,d);ZA(GM(),Bj1);if(!Bju)return;e=new Cb;Bl(e,B(310));M(e);}
function Df(b,c){BW();BjK=b==1&&c==771?1:0;Bd();BdH.blendFunc(b,c);}
function Gr(b){BW();Bd();BdH.depthMask(!!b);}
function DN(b,c,d,e){BW();Bd();BdH.colorMask(!!b,!!c,!!d,!!e);}
function Cp(b,c){var d,e;BW();d=ANJ(Bgl,c);Bd();e=BdH;d=d!==null?d.BL:null;e.bindTexture(3553,d);}
function Ej(b,c,d){BW();if(!(d!=33071&&d!=10496))d=33071;Bd();BdH.texParameteri(b,c,d);}
function Cj(b,c,d){var e;BW();e=Ed(b*b+c*c+d*d);BjC=b/e;BjD=c/e;BjE=d/e;}
function Ob(b){BW();BjZ=b;RM(b);}
function FQ(b){var c;BW();if(!Bju){c=CP(Bj0,CX(b));if(c!==null&&c.jH>0){Rm(c.lJ|0|(BjH&&Bjr?8:0)|(!BjJ?0:16)|(!Bjs?0:32)|(!Bjq?0:64));Ob(c.rh);Pv(0,c.jH);BjP=BjP+((c.jH*6|0)/4|0)|0;BjQ=BjQ+(c.jH/2|0)|0;}}}
function FF(b,c){BW();if(!Bju){Bjv=CP(Bgk,CX(b));if(Bjv!==null){Bjv.lJ=(-1);Bjv.jH=0;Bju=1;}}}
function Ee(){var b,c,d,e;BW();if(Bju){Bju=0;Bd();b=BeA.buffer;c=Bez;d=new Int32Array(b,0,c);Bez=0;e=UB(d);if(e>0){if(Bjv.oZ===null){BR(Bj0,CX(Bjv.Bt),Bjv);Bjv.rh=O6();Bjv.oZ=L6();b=O7(Bjv.lJ);Ob(Bjv.rh);Hd(34962,Bjv.oZ);Rv(b);}Hd(34962,Bjv.oZ);Px(34962,d,35044);BjO=BjO+e|0;}}}
function F3(b,c,d){BW();Bjy=b;Bjz=c;BjA=d;BjB=1.0;}
function OD(b,c){BW();Bd();BdH.polygonOffset(b,c);}
function WR(b){BW();a:{switch(b){case 32886:break;case 32888:Bjx=1;break a;default:break a;}Bjw=1;}}
function Ti(b){BW();a:{switch(b){case 32886:break;case 32888:Bjx=0;break a;default:break a;}Bjw=0;}}
function P5(){BW();return 0|(!Bjw?0:1)|(!Bjx?0:4);}
function Rm(b){var c;BW();c=O7(b);Bj6=c;AQX(c);if(Bjs)AIT(c,Bjt);ALK(c,Bjy,Bjz,BjA,BjB);if(BjJ){ALn(c,(!BjK?0:2)+BjI|0);AP$(c,BfR,BfS,BfT,BfU);AKK(c,BjN);APJ(c,BjL,BjM);}AMq(c,BjS.data[BjT]);AM0(c,BjU.data[BjV]);ZT(c,BjW.data[BjX]);if(BjH&&Bjr){AB4(c,BjC,BjD,BjE);ANa(c,Bj4,Bj5);}AOI(c,BjF,BjG);}
function ALq(b,c,d,e){var f;BW();if(Bju){if(b!=7)Cg(C1(),B(317));else{if(Bjv.lJ==(-1))Bjv.lJ=P5();else if(Bjv.lJ!=P5())Cg(C1(),B(318));f=Bjv;f.jH=f.jH+d|0;Bd();e=e;if((Bez+e.length|0)<BeA.length){f=BeA;b=Bez;f.set(e,b);Bez=Bez+e.length|0;}}}else{BjO=BjO+UB(e)|0;BjP=BjP+d|0;Rm(0|(!Bjw?0:1)|(!Bjx?0:4)|(BjH&&Bjr?8:0)|(!BjJ?0:16)|(!Bjs?0:32)|(!Bjq?0:64));Ob(Bj6.t_);Hd(34962,Bj6.uM);if(!Bj6.xc){Bj6.xc=1;Px(34962,Bj7,35048);}f=BdH;e=e;f.bufferSubData(34962,0,e);if(b==7){Pv(c,d);BjQ=BjQ+(d/2|0)|0;}else{a:{b:{switch
(b){case 1:break;case 2:case 4:break b;case 3:b=3;BjQ=BjQ+(d-1|0)|0;break a;case 5:b=5;BjQ=BjQ+(d-2|0)|0;break a;case 6:b=6;BjQ=BjQ+(d-2|0)|0;break a;default:break b;}b=1;BjQ=BjQ+(d/2|0)|0;break a;}b=4;BjQ=BjQ+(d/3|0)|0;}BdH.drawArrays(b,c,d);}}}
function Pv(b,c){var d,e,f,g,h,i,j;BW();if(BjY===null){if(Bjp)d=ALP($rt_createIntArray(49200));else{e=A5A(0,196800,$rt_createByteArray(196800),0,196800,1,0);e.kI=Bgm;d=AHI(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;h=h<<16;NI(d,g|h);NI(d,j|h);NI(d,i|j<<16);f=f+1|0;}Gs(d);BjY=L6();Hd(34963,BjY);g=Ct(d);e=new Int32Array(Bd5.buffer);h=0;while(h<g){i=AF_(d);e[h]=i;h=h+1|0;}d=Bd5.buffer;g=g*4|0;e=new Uint8Array(d,0,g);BdH.bufferData(34963,e,35044);}if(!BjZ.vO){BjZ.vO=1;Hd(34963,BjY);}g=(c*6|0)/4|0;b=
(b*6|0)/4|0;Bd();BdH.drawElements(4,g,5123,b);}
function L_(b,c){BW();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}BjI=2;break a;}BjI=1;}}}
function GL(b,c){BW();a:{switch(b){case 2914:break;case 2915:BjL=c;break a;case 2916:BjM=c;break a;default:break a;}BjN=c;}}
function A1x(){var b,c,d;Bd();Bjp=1;Bgl=A_x(256);Bjq=0;Bjr=0;Bjs=0;Bjt=0.10000000149011612;Bju=0;Bjv=null;Bjw=0;Bjx=0;Bjy=1.0;Bjz=1.0;BjA=1.0;BjB=1.0;BjC=1.0;BjD=0.0;BjE=0.0;BjF=0.0;BjG=0.0;BjH=0;BfR=1.0;BfS=1.0;BfT=1.0;BfU=1.0;BjI=1;BjJ=0;BjK=0;BjL=1.0;BjM=1.0;BjN=1.0;BjO=0;BjP=0;BjQ=0;BjR=5888;BjS=J(Es,32);BjT=0;BjU=J(Es,6);BjV=0;BjW=J(Es,16);BjX=0;b=0;while(b<BjS.data.length){c=BjS.data;d=new Es;Fo(d);c[b]=d;b=b+1|0;}b=0;while(b<BjU.data.length){c=BjU.data;d=new Es;Fo(d);c[b]=d;b=b+1|0;}b=0;while(b<BjW.data.length)
{c=BjW.data;d=new Es;Fo(d);c[b]=d;b=b+1|0;}BjY=null;BjZ=null;Bgk=Dd();Bj0=Dd();Bj1=new UX;Bj2=new G7;Bj3=new G7;Bj4=new G7;Bj5=new G7;Bgj=0;Bj6=null;Bj7=new Int32Array(525000);Bj8=null;Bj9=null;Bj$=null;Bj_=null;Bka=null;Bkb=A_x(256);d=new Es;Fo(d);Bkc=Kt(d);Bkd=$rt_createFloatArray(16);Bke=$rt_createFloatArray(16);d=new Es;Fo(d);Bkf=d;d=new Es;Fo(d);Bkg=d;Bkh=new G7;Bki=Long_ZERO;Bkj=0;}
function ACz(){D.call(this);}
function Bkl(){var a=new ACz();AUj(a);return a;}
function AUj(a){return;}
function DU(){var b,c;Bd();if(!BeB)a:{Beb=null;if(!PS(BdU)){b=Te(BdU,0);Beb=b;if(b!==null){c=1;break a;}}c=0;}else{Or(BdU);Beb=null;Bed.data[29]=0;Bed.data[157]=0;Bed.data[28]=0;Bed.data[219]=0;Bed.data[220]=0;BeB=0;c=0;}return c;}
function CU(){Bd();return Beb===null?0:DA($rt_str(Beb.type),B(319))?0:1;}
function Bg(){Bd();return Beb===null?(-1):TX(Beb.which);}
function APT(b){Bd();Bd1=b;}
function BN(b){Bd();if(BeB){Bed.data[28]=0;Bed.data[29]=0;Bed.data[157]=0;Bed.data[219]=0;Bed.data[220]=0;}return Bed.data[b];}
function Ny(){var a=this;D.call(a);a.rs=0;a.tj=0;a.m2=0;a.ln=0;a.he=0;a.it=0;a.dw=0;a.mo=0;a.lb=0;a.t1=null;a.tT=null;a.xj=null;a.uu=null;a.yC=null;a.fs=null;a.gj=null;a.BJ=null;a.f$=null;a.B7=null;a.Dc=null;a.nb=null;a.wu=null;a.zM=0;a.jT=0;a.cC=0;a.bw=0;a.pN=0;}
var Bkm=null;var Bkn=null;function A_9(a){var b=new Ny();APa(b,a);return b;}
function APa(a,b){var c,d;a.rs=1;a.tj=1;a.m2=0;a.ln=0;a.he=0;a.it=1;a.dw=0;a.mo=0;a.lb=1;a.t1=E8(B(320),17);a.tT=E8(B(321),30);a.xj=E8(B(322),31);a.uu=E8(B(323),32);a.yC=E8(B(324),57);a.fs=E8(B(325),23);a.gj=E8(B(326),16);a.BJ=E8(B(327),20);a.f$=E8(B(328),33);a.B7=E8(B(329),28);a.Dc=E8(B(330),19);c=J(Vj,11);d=c.data;d[0]=a.t1;d[1]=a.tT;d[2]=a.xj;d[3]=a.uu;d[4]=a.yC;d[5]=a.gj;d[6]=a.fs;d[7]=a.BJ;d[8]=a.f$;d[9]=a.B7;d[10]=a.Dc;a.nb=c;a.zM=12;a.jT=2;a.cC=0;a.bw=0;a.pN=0;a.wu=b;}
function K4(a,b){var c;c=new T;V(c);c=H(H(c,a.nb.data[b].Ev),B(12));b=a.nb.data[b].bJ;Bd();return U(H(c,b>=0&&b<256?Bex.data[b]:B(10)));}
function X0(a,b,c){a.nb.data[b].bJ=c;}
function Ea(a,b,c){if(!b)a.rs=a.rs?0:1;if(b==1)a.tj=a.tj?0:1;if(b==2)a.m2=a.m2?0:1;if(b==3)a.ln=a.ln?0:1;if(b==4)a.he=(a.he+c|0)&3;if(b==5)a.it=a.it?0:1;if(b==6)a.dw=a.dw?0:1;if(b==7)a.mo=a.mo?0:1;if(b==8)a.jT=(a.jT+c|0)&3;if(b==9){a.lb=a.lb?0:1;I9(a.wu.dV);}if(b==10){a.bw=a.bw?0:1;if(a.bw){a.he=2;a.it=0;a.lb=0;a.dw=0;}I9(a.wu.dV);}if(b==11)a.pN=a.pN?0:1;}
function QT(a,b){var c;a:{if(!b){c=new T;V(c);c=U(H(H(c,B(331)),!a.rs?B(332):B(333)));break a;}if(b==1){c=new T;V(c);c=U(H(H(c,B(334)),!a.tj?B(332):B(333)));break a;}if(b==2){c=new T;V(c);c=U(H(H(c,B(335)),!a.m2?B(332):B(333)));break a;}if(b==3){c=new T;V(c);c=U(H(H(c,B(336)),!a.ln?B(332):B(333)));break a;}if(b==4){c=new T;V(c);c=U(H(H(c,B(337)),Bkm.data[a.he]));break a;}if(b==5){c=new T;V(c);c=U(H(H(c,B(338)),!a.it?B(332):B(333)));break a;}if(b==6){c=new T;V(c);c=U(H(H(c,B(339)),!a.dw?B(332):B(333)));break a;}if
(b==7){c=new T;V(c);c=U(H(H(c,B(340)),!a.mo?B(332):B(333)));break a;}if(b==8){c=new T;V(c);c=U(H(H(c,B(341)),Bkn.data[a.jT]));break a;}if(b==9){c=new T;V(c);c=U(H(H(c,B(342)),!a.lb?B(343):B(344)));break a;}if(b==10){c=new T;V(c);c=U(H(H(c,B(345)),!a.bw?B(332):B(333)));break a;}if(b!=11){c=B(3);break a;}c=new T;V(c);c=U(H(H(c,B(346)),!a.pN?B(332):B(333)));}return c;}
function A2s(a){return;}
function A00(a){return;}
function AHR(){var b,c;b=J(B4,4);c=b.data;c[0]=B(347);c[1]=B(348);c[2]=B(349);c[3]=B(350);Bkm=b;b=J(B4,4);c=b.data;c[0]=B(351);c[1]=B(352);c[2]=B(353);c[3]=B(354);Bkn=b;}
function Ik(){var a=this;D.call(a);a.t2=null;a.pX=0;a.mw=0;a.oK=0;a.oL=0;a.kT=0;a.k2=0;a.le=0;a.Bw=0;a.Ek=0;a.Dl=0;a.nS=0;a.o2=0;a.p5=0;a.fu=0;a.gY=null;a.ES=0;a.AX=0;a.DG=0;a.Hp=0.0;a.i1=0;a.E2=null;a.Ij=0;a.xG=0;a.JK=0;a.ol=0;a.kF=0;a.gl=null;a.jf=null;}
var Bko=null;var BeN=0;function Tk(){Tk=Bt(Ik);A_m();}
function Bbv(a,b,c,d,e,f,g){var h=new Ik();AI7(h,a,b,c,d,e,f,g);return h;}
function AI7(a,b,c,d,e,f,g,h){Tk();a.pX=(-1);a.fu=0;a.gY=$rt_createBooleanArray(2);a.xG=1;a.kF=0;a.gl=Ci();a.t2=b;a.jf=c;a.le=g;a.k2=g;a.kT=g;a.Hp=D_((Bj(a.kT,a.kT)+Bj(a.k2,a.k2)|0)+Bj(a.le,a.le)|0)/2.0;a.pX=h;a.mw=(-999);Sd(a,d,e,f);a.i1=0;}
function Sd(a,b,c,d){var e,f;if(!(b==a.mw&&c==a.oK&&d==a.oL)){PO(a);a.mw=b;a.oK=c;a.oL=d;a.ES=b+(a.kT/2|0)|0;a.AX=c+(a.k2/2|0)|0;a.DG=d+(a.le/2|0)|0;a.nS=b&1023;a.o2=c;a.p5=d&1023;a.Bw=b-a.nS|0;a.Ek=c-a.o2|0;a.Dl=d-a.p5|0;a.E2=No(b-2.0,c-2.0,d-2.0,(b+a.kT|0)+2.0,(c+a.k2|0)+2.0,(d+a.le|0)+2.0);FF(a.pX+2|0,4864);e=D3(a.nS-2.0,a.o2-2.0,a.p5-2.0,(a.nS+a.kT|0)+2.0,(a.o2+a.k2|0)+2.0,(a.p5+a.le|0)+2.0);BA();f=BeK;Bz(f);Bf(f,e.R,e.U,e.S);Bf(f,e.V,e.U,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.R,e.M,e.S);Bf(f,e.R,e.M,e.W);Bf(f,e.V,
e.M,e.W);Bf(f,e.V,e.U,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.R,e.M,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.V,e.M,e.W);Bf(f,e.R,e.M,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.V,e.U,e.W);Bf(f,e.V,e.U,e.S);Bf(f,e.R,e.U,e.S);Bf(f,e.R,e.M,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.R,e.U,e.S);Bf(f,e.R,e.M,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.V,e.U,e.S);Bf(f,e.V,e.U,e.W);Bf(f,e.V,e.M,e.W);Br(f);Ee();KU(a);}}
function ADf(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.i1)return;BeN=BeN+1|0;b=a.mw;c=a.oK;d=a.oL;e=a.mw+a.kT|0;f=a.oK+a.k2|0;g=a.oL+a.le|0;h=0;while(h<2){a.gY.data[h]=1;h=h+1|0;}Bkp=0;i=F7();DD(i,a.gl);DG(a.gl);j=new Iq;k
=a.t2;l=b-1|0;m=c-1|0;n=d-1|0;o=e+1|0;h=f+1|0;p=g+1|0;$p=1;case 1:AEs(j,k,l,m,n,o,h,p);if(C()){break _;}k=A8j(j);l=0;a:{while(true){if(l>=2)break a;q=0;r=0;s=0;t=c;while(t<f){m=d;while(m<g){n=b;if(n<e){$p=2;continue _;}m=m+1|0;}t=t+1|0;}if(!s)r=0;else{Br(Bko);Ee();Fa(Bko,0.0,0.0,0.0);}if(r)a.gY.data[l]=0;if(!q)break;l=l+1|0;}}u=F7();DD(u,a.gl);Fr(u,i);DD(a.jf,u);Fr(i,a.gl);Ga(a.jf,i);a.ol=Bkp;a.kF=1;return;case 2:$z=Hw(j,n,t,m);if(C()){break _;}p=$z;if(p>0){if(!s){s=1;FF(a.pX+l|0,4864);Bz(Bko);Fa(Bko,a.nS-a.mw
|0,a.o2-a.oK|0,a.p5-a.oL|0);}if(!l){L();if(BeO.data[p] instanceof Eg){$p=3;continue _;}}L();v=BeO.data[p];o=R(v.pP(),l);if(o)q=1;else if(!o){$p=4;continue _;}}n=n+1|0;b:{c:while(true){if(n<e){continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bko);Ee();Fa(Bko,0.0,0.0,0.0);}if(r)a.gY.data[l]=0;if(!q)break c;l=l+1|0;if(l>=2)break b;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=F7();DD(u,a.gl);Fr(u,i);DD(a.jf,u);Fr(i,a.gl);Ga(a.jf,i);a.ol=Bkp;a.kF=1;return;case 3:$z=AFT(j,n,t,m);if(C()){break _;}w=$z;if(AIg(Bkq,
w))S(a.gl,w);L();v=BeO.data[p];o=R(v.pP(),l);if(o)q=1;else if(!o){$p=4;continue _;}n=n+1|0;d:{e:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bko);Ee();Fa(Bko,0.0,0.0,0.0);}if(r)a.gY.data[l]=0;if(!q)break e;l=l+1|0;if(l>=2)break d;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=F7();DD(u,a.gl);Fr(u,i);DD(a.jf,u);Fr(i,a.gl);Ga(a.jf,i);a.ol=Bkp;a.kF=1;return;case 4:$z=AN0(k,v,n,t,m);if(C()){break _;}o=$z;r=r|o;n=n+1|0;a:{f:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g)
{t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bko);Ee();Fa(Bko,0.0,0.0,0.0);}if(r)a.gY.data[l]=0;if(!q)break f;l=l+1|0;if(l>=2)break a;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=F7();DD(u,a.gl);Fr(u,i);DD(a.jf,u);Fr(i,a.gl);Ga(a.jf,i);a.ol=Bkp;a.kF=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function G3(a,b){var c,d,e;c=b.d-a.ES;d=b.j-a.AX;e=b.e-a.DG;return c*c+d*d+e*e;}
function PO(a){var b;b=0;while(b<2){a.gY.data[b]=1;b=b+1|0;}a.fu=0;a.kF=0;}
function ARE(a){PO(a);a.t2=null;}
function PE(a,b){return !a.fu?(-1):a.gY.data[b]?(-1):a.pX+b|0;}
function AR9(a,b){a.fu=ME(b,a.E2);}
function AHv(a){return !a.kF?0:a.gY.data[0]&&a.gY.data[1]?1:0;}
function KU(a){a.i1=1;}
function A_m(){BA();Bko=BeK;BeN=0;}
function AR$(){var a=this;E4.call(a);a.jp=null;a.lH=0;}
function A7A(){var a=new AR$();AXI(a);return a;}
function A$f(a){var b=new AR$();YZ(b,a);return b;}
function AXI(a){YZ(a,32);}
function YZ(a,b){a.jp=$rt_createByteArray(b);}
function A7O(a,b){var c,d;Rq(a,a.lH+1|0);c=a.jp.data;d=a.lH;a.lH=d+1|0;c[d]=b<<24>>24;}
function Ro(a,b,c,d){var e,f,g,h,i;Rq(a,a.lH+d|0);e=0;while(e<d){f=b.data;g=a.jp.data;h=a.lH;a.lH=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function Rq(a,b){if(a.jp.data.length<b){b=DC(b,(a.jp.data.length*3|0)/2|0);a.jp=Oc(a.jp,b);}}
function Ia(a){return Oc(a.jp,a.lH);}
function JQ(){B6.call(this);}
function Bkr(){var a=new JQ();A5E(a);return a;}
function A5E(a){O(a);}
function Oa(){}
function GG(){var a=this;D.call(a);a.fD=null;a.dY=null;a.l2=null;a.gJ=null;a.kO=null;a.fB=null;a.ec=Long_ZERO;a.sn=Long_ZERO;a.sR=Long_ZERO;a.rq=Long_ZERO;a.gh=0;a.hU=0;a.sb=0;a.sm=0;a.bi=null;a.i0=0;a.C4=null;a.r=null;a.fi=0;a.pY=0;a.fh=0;a.tD=0;a.cv=null;a.iL=null;a.lt=Long_ZERO;a.th=null;a.wJ=Long_ZERO;a.IV=null;a.m_=null;a.qi=null;}
var Bks=null;var Bkt=null;function Bku(a,b){var c=new GG();QU(c,a,b);return c;}
function ASa(b){var c,d,e,f,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=new T;V(c);c=U(H(H(c,b),B(355)));$p=1;case 1:$z=ALE(c);if(C()){break _;}d=$z;c=DT();e=new T;V(e);Cg(c,U(H(H(e,b),B(355))));if(d===null)return null;a:{try{e=Mv(MR(OU(Ug(d))),B(356));}catch($$e){$$je=Bi($$e);if($$je instanceof B1){f=$$je;break a;}else{throw $$e;}}return e;}Cc(f);return null;default:E_();}}C3().s(b,c,d,e,f,$p);}
function QU(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.fD=Ci();a.dY=Ci();a.l2=Ci();a.gJ=Bb0();a.kO=F7();a.fB=Ci();a.ec=Long_ZERO;a.sn=Long_fromInt(8961023);a.sR=Long_fromInt(12638463);a.rq=Long_fromInt(16777215);a.gh=0;a.hU=Lo(new Dz);a.sb=1013904223;a.sm=0;a.r=new Dz;a.tD=0;a.cv=Ci();a.lt=Long_ZERO;a.wJ=Long_ZERO;a.m_=Ci();a.qi=Ci();a.IV=b;Bkt=b;b=new T;V(b);b=U(H(H(b,
Bkt),B(355)));$p=1;case 1:$z=ALE(b);if(C()){break _;}d=$z;b=DT();e=new T;V(e);Cg(b,U(H(H(e,Bkt),B(355))));f=d!==null?1:0;a:{a.tD=f;if(d!==null){try{g=Mv(MR(OU(Ug(d))),B(356));a.lt=Mb(g,B(357));a.fi=FS(g,B(358));a.pY=FS(g,B(359));a.fh=FS(g,B(360));a.ec=Mb(g,B(361));a.wJ=Mb(g,B(362));a.th=Mv(g,B(5));break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){h=$$je;}else{throw $$e;}}Cc(h);}}f=0;if(Long_eq(a.lt,Long_ZERO)){a.lt=c;f=1;}a.iL=ABj(a,Bkt);if(!f){Q5(a);return;}a.fi=0;a.pY=64;a.fh=0;f=a.fi;i=a.fh;$p=2;case 2:$z
=AJP(a,f,i);if(C()){break _;}f=$z;L();if(f!=Be_.b?0:1){Q5(a);return;}a.fi=a.fi+(E(a.r,64)-E(a.r,64)|0)|0;a.fh=a.fh+(E(a.r,64)-E(a.r,64)|0)|0;f=a.fi;i=a.fh;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ABj(a,b){var c,d,e;c=new VT;d=new Xi;d.r3=b;e=new So;e.Gb=$rt_createIntMultiArray([32,32]);e.t=a;e.a=new Dz;e.yT=G9(e.a,16);e.yU=G9(e.a,16);e.yS=G9(e.a,8);e.tN=G9(e.a,4);e.yW=G9(e.a,4);e.yX=G9(e.a,10);e.yV=G9(e.a,16);e.iS=G9(e.a,8);c.X=J(I1,1024);c.fr=(-999999999);c.fR=(-999999999);c.lm=A9r(a,$rt_createByteArray(32768),0,0);c.lm.Ei=1;c.lm.qa=1;c.ly=a;c.g3=d;c.iR=e;return c;}
function AP4(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fi;c=a.fh;$p=1;case 1:$z=AJP(a,b,c);if(C()){break _;}b=$z;if(b)return;a.fi=a.fi+(E(a.r,8)-E(a.r,8)|0)|0;a.fh=a.fh+(E(a.r,8)-E(a.r,8)|0)|0;b=a.fi;c=a.fh;continue _;default:E_();}}C3().s(a,b,c,$p);}
function AJP(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=63;e=d+1|0;$p=1;case 1:$z=ACt(a,b,e,c);if(C()){break _;}f=$z;if(!f){$p=2;continue _;}d=e;e=d+1|0;continue _;case 2:$z=ACt(a,b,d,c);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AGo(a){var b,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{if(a.th!==null){YP(a.bi,a.th);a.th=null;}b=a.bi;$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){b=$$je;}else{throw $$e;}}Cc(b);return;case 1:a:{try{AOg(a,b);if(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){b=$$je;}else{throw $$e;}}Cc(b);}return;default:E_();}}C3().s(a,b,$p);}
function ABB(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null)YF(c,B(363));$p=1;case 1:AMK(a);if(C()){break _;}if(c===null){d=a.iL;$p=2;continue _;}d=B(364);$p=3;continue _;case 2:ANY(d,b,c);if(C()){break _;}return;case 3:AR3(c,d);if(C()){break _;}d=a.iL;$p=2;continue _;default:E_();}}C3().s(a,b,c,d,$p);}
function AMK(a){var b,c,d,e,f,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=G8();H9(b,B(357),a.lt);Gv(b,B(358),a.fi);Gv(b,B(359),a.pY);Gv(b,B(360),a.fh);H9(b,B(361),a.ec);H9(b,B(362),a.wJ);H9(b,B(365),B$());if(a.bi!==null){c=G8();ALt(a.bi,c);ANS(b,B(5),c);}c=G8();HC(c,B(356),b);try{b=BL(H(H(BX(),Bkt),B(366)));$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 1:try
{ALE(b);if(C()){break _;}b=BL(H(H(BX(),Bkt),B(367)));$p=2;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 2:try{ALE(b);if(C()){break _;}b=BL(H(H(BX(),Bkt),B(355)));$p=3;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 3:try{ALE(b);if(C()){break _;}e=A$f(131072);RU(c,AWg(e));b=BL(H(H(BX(),Bkt),B(366)));f=Ia(e);$p=4;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 4:try
{ACx(b,f);if(C()){break _;}b=BL(H(H(BX(),Bkt),B(367)));$p=5;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 5:try{$z=ALE(b);if(C()){break _;}f=$z;if(f!==null){b=BL(H(H(BX(),Bkt),B(367)));$p=8;continue _;}b=BL(H(H(BX(),Bkt),B(355)));c=BL(H(H(BX(),Bkt),B(367)));$p=6;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 6:try{ANl(b,c);if(C()){break _;}b=BL(H(H(BX(),Bkt),B(355)));$p=7;continue _;}catch($$e){$$je
=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 7:try{$z=ALE(b);if(C()){break _;}f=$z;if(f!==null){b=BL(H(H(BX(),Bkt),B(355)));$p=11;continue _;}b=BL(H(H(BX(),Bkt),B(366)));c=BL(H(H(BX(),Bkt),B(355)));$p=9;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 8:try{AL1(b);if(C()){break _;}b=BL(H(H(BX(),Bkt),B(355)));c=BL(H(H(BX(),Bkt),B(367)));$p=6;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 9:try
{ANl(b,c);if(C()){break _;}b=BL(H(H(BX(),Bkt),B(366)));$p=10;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 10:a:{try{$z=ALE(b);if(C()){break _;}f=$z;if(f===null)break a;b=BL(H(H(BX(),Bkt),B(366)));$p=12;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);}return;case 11:try{AL1(b);if(C()){break _;}b=BL(H(H(BX(),Bkt),B(366)));c=BL(H(H(BX(),Bkt),B(355)));$p=9;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE)
{d=$$je;}else{throw $$e;}}Cc(d);return;case 12:a:{try{AL1(b);if(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AAJ(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b){$p=2;continue _;}c=a.iL;b=0;d=null;$p=1;case 1:$z=ANY(c,b,d);if(C()){break _;}b=$z;return b;case 2:AMK(a);if(C()){break _;}c=a.iL;b=0;d=null;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,$p);}
function ACt(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)b=0;else{if(c<128){e=b>>4;f=d>>4;$p=1;continue _;}b=0;}}else b=0;return b;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;return ET(g,b&15,c,d&15);default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function EI(a,b,c,d){return c>=0&&c<128?C4(a,b>>4,d>>4):0;}
function Ic(a,b,c,d,e,f,g){var h,i;if(f>=0&&c<128){h=b>>4;b=d>>4;c=e>>4;d=g>>4;while(h<=c){i=b;while(i<=d){if(!C4(a,h,i))return 0;i=i+1|0;}h=h+1|0;}return 1;}return 0;}
function C4(a,b,c){return BQ(a.iL,b,c);}
function XS(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b>>4;b=c>>4;$p=1;case 1:$z=ZR(a,d,b);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ZR(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iL;$p=1;case 1:$z=AOe(d,b,c);if(C()){break _;}d=$z;return d;default:E_();}}C3().s(a,b,c,d,$p);}
function AJl(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;g=b>>4;h=d>>4;$p=1;continue _;}return 0;case 1:$z=ZR(a,g,h);if(C()){break _;}i=$z;b=b&15;d=d&15;$p=2;case 2:$z=ADC(i,b,c,d,e,f);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALr(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=ZR(a,f,g);if(C()){break _;}h=$z;g=b&15;b=d&15;$p=2;case 2:$z=ADz(h,g,c,b,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ABX(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(a,b,c,d);if(C()){break _;}e=$z;if(!e)f=Bf$;else{L();f=BeO.data[e].b$;}return f;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AEH(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;e=b>>4;f=d>>4;$p=1;continue _;}return 0;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;return RO(g,b&15,c,d&15);default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACd(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKv(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AKv(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=ZR(a,f,g);if(C()){break _;}h=$z;AAs(h,b&15,c,d&15,e);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function APv(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALr(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AEL(a,b,c,d,e);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AIX(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AJl(a,b,c,d,e,f);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AEL(a,b,c,d,e);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AEL(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;while(f<a.cv.p){Rl(Z(a.cv,f),b,c,d);f=f+1|0;}$p=1;case 1:AHL(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function APH(a,b,c,d,e){var f;if(d<=e){f=d;d=e;e=f;}Jh(a,b,e,c,b,d,c);}
function Jh(a,b,c,d,e,f,g){var h;h=0;while(h<a.cv.p){AOF(Z(a.cv,h),b,c,d,e,f,g);h=h+1|0;}}
function AHL(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b-1|0;$p=1;case 1:AO4(a,f,c,d,e);if(C()){break _;}f=b+1|0;$p=2;case 2:AO4(a,f,c,d,e);if(C()){break _;}f=c-1|0;$p=3;case 3:AO4(a,b,f,d,e);if(C()){break _;}f=c+1|0;$p=4;case 4:AO4(a,b,f,d,e);if(C()){break _;}f=d-1|0;$p=5;case 5:AO4(a,b,c,f,e);if(C()){break _;}d=d+1|0;$p=6;case 6:AO4(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,
$p);}
function AO4(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sm)return;L();f=BeO.data;$p=1;case 1:$z=ACt(a,b,c,d);if(C()){break _;}g=$z;h=f[g];if(h===null)return;$p=2;case 2:h.eZ(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AGd(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;return Pi(g,b&15,c,d&15);default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Xv(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=1;$p=1;case 1:$z=AQK(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AQK(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(e){$p=1;continue _;}if(c<0)return 0;if(c>=128){f=15-a.gh|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}return 15;case 1:$z=ACt(a,b,c,d);if(C()){break _;}f=$z;L();if(f!=BeT.b&&f!=Bg2.b){if(c<0)return 0;if(c>=128){f=15
-a.gh|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}e=c+1|0;g=0;$p=2;case 2:$z=AQK(a,b,e,d,g);if(C()){break _;}h=$z;e=b+1|0;g=0;$p=3;case 3:$z=AQK(a,e,c,d,g);if(C()){break _;}g=$z;e=b-1|0;i=0;$p=4;case 4:$z=AQK(a,e,c,d,i);if(C()){break _;}i=$z;e=d+1|0;j=0;$p=5;case 5:$z=AQK(a,b,c,e,j);if(C()){break _;}j=$z;d=d-1|0;e=0;$p=6;case 6:$z=AQK(a,b,c,d,e);if(C()){break _;}k=$z;if(g<=h)g=h;if(i<=g)i=g;if(j<=i)j=i;if(k<=j)k=j;return k;case 7:$z=ZR(a,g,e);if(C()){break _;}l=$z;return VK(l,b&15,c,d&15,a.gh);default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Zu(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 1;e=b>>4;f=d>>4;if(!C4(a,e,f))return 0;$p=1;continue _;}return 0;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;return Pi(g,b&15,c,d&15);default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALF(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&c>=(-32000000)&&b<32000000&&c<=32000000){d=b>>4;e=c>>4;if(!C4(a,d,e))return 0;$p=1;continue _;}return 0;case 1:$z=ZR(a,d,e);if(C()){break _;}f=$z;return UG(f,b&15,c&15);default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AP8(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!EI(a,c,d,e))return;if(b===Bkv){$p=1;continue _;}if(b===Bkw){$p=2;continue _;}$p=3;continue _;case 1:$z=Zu(a,c,d,e);if(C()){break _;}g=$z;if(g)f=15;$p=3;continue _;case 2:$z=ACt(a,c,d,e);if(C()){break _;}g=$z;L();if(BgC.data[g]>f)f=BgC.data[g];$p=3;case 3:$z=ALi(a,b,c,d,e);if(C()){break _;}g=$z;if(g==f)return;$p=4;case 4:Y5(a,b,c,d,e,c,d,
e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALi(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=0&&d<128&&c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000){f=c>>4;g=e>>4;if(!C4(a,f,g))return 0;$p=1;continue _;}return b.z8;case 1:$z=ZR(a,f,g);if(C()){break _;}h=$z;return ACi(h,b,c&15,d,e&15);default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AMs(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000&&d>=0&&d<128){g=c>>4;h=e>>4;if(C4(a,g,h)){$p=1;continue _;}}return;case 1:$z=ZR(a,g,h);if(C()){break _;}i=$z;AQL(i,b,c&15,d,e&15,f);g=0;while(g<a.cv.p){Rl(Z(a.cv,g),c,d,e);g=g+1|0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANg(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Bks.data;$p=1;case 1:$z=Xv(a,b,c,d);if(C()){break _;}b=$z;return e[b];default:E_();}}C3().s(a,b,c,d,e,$p);}
function Ru(a){return a.gh>=4?0:1;}
function AJk(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;$p=1;case 1:$z=AE1(a,b,c,d);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,$p);}
function AE1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(!(isNaN(c.x)?1:0)&&!(isNaN(c.z)?1:0)&&!(isNaN(c.w)?1:0)){e
=K(c.x);f=K(c.z);g=K(c.w);h=K(b.x);i=K(b.z);j=K(b.w);k=20+(-1)|0;if(20<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=
s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;}return null;}return null;case 1:$z=ACt(a,h,i,j);if(C()){break _;}x=$z;$p=2;case 2:$z=AEH(a,h,i,j);if(C()){break _;}y=$z;L();z=BeO.data[x];if(x>0&&z.o5(y,d)){$p=5;continue _;}o=i-1|0;$p=3;case 3:$z=ACt(a,h,o,j);if
(C()){break _;}p=$z;$p=4;case 4:$z=AEH(a,h,o,j);if(C()){break _;}x=$z;w=BeO.data[p];if(p>0&&w.o5(x,d)){$p=6;continue _;}p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)
/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;case 5:$z=z.nE(a,h,i,j,b,c);if(C()){break _;}ba=$z;if(ba!==null)return ba;o=i-1|0;$p=3;continue _;case 6:$z=w.nE(a,h,o,j,b,c);if(C()){break _;}ba
=$z;if(ba!==null)return ba;p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t
*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function Dh(a,b,c,d,e){var f,g,h;f=0;g=R(d,1.0);e=16.0*d;while(f<a.cv.p){h=16.0;if(g>0)h=e;if(LC(a.bi,b)<h*h)Z(a.cv,f);f=f+1|0;}}
function Ex(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$$je;a:{b:{try{h=0;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){i=$$je;break b;}else{throw $$e;}}j=R(f,1.0);k=16.0*f;while(true){try{if(h>=De(a.cv))break;l=16.0;if(j>0)l=k;m=b-a.bi.d;n=c-a.bi.j;o=d-a.bi.e;if(m*m+n*n+o*o<l*l)ACZ(Z(a.cv,h),e,b,c,d,f,g);h=h+1|0;continue;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){i=$$je;break b;}else{throw $$e;}}}break a;}Cc(i);}}
function ATa(a,b,c,d,e,f){return;}
function BV(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.cv.p){AH3(Z(a.cv,i),b,c,d,e,f,g,h);i=i+1|0;}}
function AOg(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d/16.0);d=K(b.e/16.0);if(!C4(a,c,d)){e=DT();f=new T;V(f);Cg(e,U(FK(H(f,B(368)),b)));return;}$p=1;case 1:$z=ZR(a,c,d);if(C()){break _;}e=$z;VN(e,b);S(a.dY,b);g=0;while(g<a.cv.p){Z(a.cv,g);g=g+1|0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AU4(a,b){Ca(b);}
function ANC(a,b){S(a.cv,b);}
function AKT(a,b){H5(a.cv,b);}
function XQ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DG(a.m_);d=K(c.R);e=K(c.V+1.0);f=K(c.M);g=K(c.U+1.0);h=K(c.S);i=K(c.W+1.0);f=f-1|0;while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeO.data;$p=2;continue _;}j=j+1|0;}d=d+1|0;}c=Dv(c,0.25,0.25,0.25);$p=1;case 1:$z=ADI(a,b,c);if(C()){break _;}m=$z;n=
0;while(n<m.p){o=Z(m,n).Br();if(o!==null)S(a.m_,o);c=b.AU(Z(m,n));if(c!==null)S(a.m_,c);n=n+1|0;}return a.m_;case 2:$z=ACt(a,d,j,k);if(C()){break _;}n=$z;p=l[n];if(p!==null){m=a.m_;$p=3;continue _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dv(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeO.data;continue _;case 3:p.Fy(a,d,j,k,c,m);if(C()){break _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dv(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeO.data;$p=2;continue _;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Ok(a,b){var c;c=1.0-(BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.5);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*11.0|0;}
function ON(a,b){var c,d,e,f;c=BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sn,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sn,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sn,Long_fromInt(255)))/255.0;return BY(d*c,e*c,f*c);}
function Hv(a,b){var c;c=(Long_rem(a.ec,Long_fromInt(24000)).lo+b)/24000.0-0.25;if(c<0.0)c=c+1.0;if(c>1.0)c=c-1.0;return c+(1.0-(GB(c*3.141592653589793)+1.0)/2.0-c)/3.0;}
function SW(a,b){var c,d,e,f;c=BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.rq,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.rq,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.rq,Long_fromInt(255)))/255.0;b=c*0.8999999761581421+0.10000000149011612;return BY(d*b,e*b,f*(c*0.8500000238418579+0.15000000596046448));}
function ADp(a,b){var c,d,e,f;c=BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sR,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sR,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sR,Long_fromInt(255)))/255.0;b=c*0.9399999976158142+0.05999999865889549;return BY(d*b,e*b,f*(c*0.9100000262260437+0.09000000357627869));}
function A8o(a,b,c){return 64;}
function AJq(a,b){var c;c=1.0-(BC(Hv(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*c*0.5;}
function Fm(a,b,c,d,e){var f,g;f=new JU;g=Bkx;Bkx=Long_add(g,Long_fromInt(1));f.oS=g;f.fF=b;f.fo=c;f.fJ=d;f.p$=e;if(Ic(a,b-8|0,c-8|0,d-8|0,b+8|0,c+8|0,d+8|0)){if(e>0){L();f.jh=Long_add(Long_fromInt(BeO.data[e].mr()),a.ec);}if(!Ww(a.kO,f)){Xd(a.kO,f);Zf(a.gJ,f);}}}
function APd(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ga(a.dY,a.l2);b=0;while(b<a.cv.p){Z(a.cv,b);c=0;while(c<a.l2.p){Z(a.l2,c);c=c+1|0;}b=b+1|0;}DG(a.l2);b=0;a:while(true){if(b>=a.dY.p){b=0;if(b>=a.fB.p)return;d=Z(a.fB,b);$p=1;continue _;}b:{e=Z(a.dY,b);if(e.bD!==null){if(!e.bD.cQ&&e.bD.bI===e)break b;e.bD.bI=null;e.bD=null;}if(!e.cQ){$p=2;continue _;}if(e.cQ){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,
c,f))break a;d=a.dY;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.p){Z(a.cv,g);g=g+1|0;}b=c;}}b=b+1|0;}$p=3;continue _;case 1:d.tL();if(C()){break _;}b=b+1|0;if(b>=a.fB.p)return;d=Z(a.fB,b);continue _;case 2:Xs(a,e);if(C()){break _;}while(true){if(e.cQ){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,c,f)){$p=3;continue _;}d=a.dY;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.p){Z(a.cv,g);g=g+1|0;}b=c;}b:{while(true){b=b+1|0;if(b>=a.dY.p){b=0;if(b>=a.fB.p)return;d=Z(a.fB,b);$p=1;continue _;}e=Z(a.dY,b);if(e.bD===null)break b;if(e.bD.cQ)break;if
(e.bD.bI!==e)break;}e.bD.bI=null;e.bD=null;}if(e.cQ)continue;else break;}continue _;case 3:$z=ZR(a,c,f);if(C()){break _;}d=$z;AMZ(d,e);while(true){d=a.dY;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.p){Z(a.cv,g);g=g+1|0;}b=c;while(true){b=b+1|0;if(b>=a.dY.p){b=0;if(b>=a.fB.p)return;d=Z(a.fB,b);$p=1;continue _;}e=Z(a.dY,b);if(e.bD!==null){if(!e.bD.cQ&&e.bD.bI===e)continue;e.bD.bI=null;e.bD=null;}if(!e.cQ){$p=2;continue _;}if(e.cQ)break;}c=K(e.d/16.0);f=K(e.e/16.0);if(!C4(a,c,f))continue;else break;}continue _;default:
E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Xs(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d);K(b.j);d=K(b.e);if(!Ic(a,c-16|0,0,d-16|0,c+16|0,128,d+16|0))return;b.cr=b.d;b.b7=b.j;b.cs=b.e;b.P=b.v;b.T=b.J;e=K(b.d/16.0);f=K(b.j/16.0);g=K(b.e/16.0);if(b.bD===null){$p=1;continue _;}$p=2;continue _;case 1:b.en();if(C()){break _;}h=K(b.d/16.0);i=K(b.j/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g
==j){if(b.bI!==null){if(!b.bI.cQ&&b.bI.bD===b){k=b.bI;$p=6;continue _;}b.bI.bD=null;b.bI=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cr;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cs;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 2:b.BH();if(C()){break _;}h=K(b.d/16.0);i=K(b.j
/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g==j){if(b.bI!==null){if(!b.bI.cQ&&b.bI.bD===b){k=b.bI;$p=6;continue _;}b.bI.bD=null;b.bI=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cr;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cs;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 3:$z=ZR(a,
e,g);if(C()){break _;}k=$z;RX(k,b,f);if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 4:b.C2();if(C()){break _;}if(b.bI!==null){if(!b.bI.cQ&&b.bI.bD===b){k=b.bI;$p=6;continue _;}b.bI.bD=null;b.bI=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cr;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cs;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;case 5:$z=ZR(a,h,j);if
(C()){break _;}k=$z;VN(k,b);if(b.bI!==null){if(!b.bI.cQ&&b.bI.bD===b){k=b.bI;$p=6;continue _;}b.bI.bD=null;b.bI=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cr;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cs;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;case 6:Xs(a,k);if(C()){break _;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cr;if(!(!(isNaN(b.j)?1:0)
&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.cs;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AM5(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:$z=ADI(a,c,b);if(C()){break _;}c=$z;d=0;while(d<c.p){e=Z(c,d);if(!e.cQ&&e.mz)return 0;d=d+1|0;}return 1;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AJi(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);if(b.R<0.0)c=c+(-1)|0;if(b.M<0.0)e=e+(-1)|0;if(b.S<0.0)g=g+(-1)|0;while(c<d){i=e;while(i<f){j=g;if(j<h){L();k=BeO.data;$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACt(a,c,i,j);if(C()){break _;}l=$z;m=
k[l];if(m!==null&&m.b$.nA())return 1;j=j+1|0;a:while(true){if(j<h){L();k=BeO.data;continue _;}i=i+1|0;while(i>=f){c=c+1|0;if(c>=d)break a;i=e;}j=g;}return 0;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AQ$(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);while(c<d){i=e;while(i<f){j=g;if(j<h){$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACt(a,c,i,j);if(C()){break _;}k=$z;L();if(k!=Bgo.b&&k!=BfY.b&&k!=BgE.b){j=j+1|0;a:while(true){if(j<h){continue _;}i=i+1|0;while(i>=f){c=c+1|
0;if(c>=d)break a;i=e;}j=g;}return 0;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAq(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.R);f=K(b.V+1.0);g=K(b.M);h=K(b.U+1.0);i=K(b.S);j=K(b.W+1.0);k=0;l=BY(0.0,0.0,0.0);m=h;while(e<f){n=g;while(n<h){o=i;if(o<j){L();p=BeO.data;$p=1;continue _;}n=n+1|0;}e=e+1|0;}if(HM(l)>0.0){b=CD(l);d.g=d.g+
b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 1:$z=ACt(a,e,n,o);if(C()){break _;}q=$z;r=p[q];if(r!==null&&r.b$===c){s=n+1|0;$p=2;continue _;}o=o+1|0;a:while(true){if(o<j){L();p=BeO.data;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break a;n=g;}o=i;}if(HM(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 2:$z=AEH(a,e,n,o);if(C()){break _;}q=$z;if(m>=s-Js(q)){k=1;$p=3;continue _;}o=o+1|0;b:while(true){if(o<j){L();p=BeO.data;$p=1;continue _;}n=n+1|0;while(n>=
h){e=e+1|0;if(e>=f)break b;n=g;}o=i;}if(HM(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 3:r.qD(a,e,n,o,d,l);if(C()){break _;}o=o+1|0;c:while(true){if(o<j){L();p=BeO.data;$p=1;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break c;n=g;}o=i;}if(HM(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AOs(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K(b.R);e=K(b.V+1.0);f=K(b.M);g=K(b.U+1.0);h=K(b.S);i=K(b.W+1.0);while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeO.data;$p=1;continue _;}j=j+1|0;}d=d+1|0;}return 0;case 1:$z=ACt(a,d,j,k);if(C()){break _;}m=$z;n=l[m];if(n!==null&&n.b$===c)return 1;k=k+1|0;a:while(true)
{if(k<i){L();l=BeO.data;continue _;}j=j+1|0;while(j>=g){d=d+1|0;if(d>=e)break a;j=f;}k=h;}return 0;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function X7(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=new WO;$p=1;case 1:AI3(g,a,b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADy(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0/((c.V-c.R)*2.0+1.0);e=1.0/((c.U-c.M)*2.0+1.0);f=1.0/((c.W-c.S)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){if(0.0<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=0.0;p=BY(k,l,m+n*o);$p=1;continue _;}j=
j+e;}i=i+d;}return g/h;case 1:$z=AJk(a,p,b);if(C()){break _;}p=$z;if(p===null)g=g+1|0;h=h+1|0;q=o+f;a:while(true){if(q<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=q;p=BY(k,l,m+n*o);continue _;}j=j+e;while(j>1.0){i=i+d;if(i>1.0)break a;j=0.0;}q=0.0;}return g/h;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function ABG(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;$p=1;case 1:$z=ACt(a,b,c,d);if(C()){break _;}e=$z;L();if(e!=Bgo.b)return;Ex(a,b+0.5,c+0.5,d+0.5,B(215),0.5,2.5999999046325684+(N(a.r)-N(a.r))*0.800000011920929);e=0;$p=2;case 2:APv(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AXM(a,b){return null;}
function AN8(a){var b;b=new T;V(b);return U(Be(H(b,B(369)),a.dY.p));}
function AXW(a){return a.bi;}
function ANw(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;if(g===null)return null;b=b&15;d=d&15;$p=2;case 2:$z=ANn(g,b,c,d);if(C()){break _;}g=$z;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AFS(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b>>4;g=d>>4;$p=1;case 1:$z=ZR(a,f,g);if(C()){break _;}h=$z;if(h!==null)AJj(h,b&15,c,d&15,e);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFJ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZR(a,e,f);if(C()){break _;}g=$z;if(g!==null)ADX(g,b&15,c,d&15);return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAz(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();e=BeO.data;$p=1;case 1:$z=ACt(a,b,c,d);if(C()){break _;}b=$z;f=e[b];return f!==null?f.d4():0;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJg(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=1;$p=1;case 1:ABB(a,c,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AIk(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=100000;if(a.fD.p<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=En(a.fD,a.fD.p-1|0);$p=1;case 1:AOm(c,a);if(C()){break _;}if(a.fD.p<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=En(a.fD,a.fD.p-1|0);continue _;default:E_();}}C3().s(a,b,c,$p);}
function Y5(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=a.fD.p;if(4<=i)i=4;j=0;while(true){if(j>=i){k=a.fD;l=new VI;l.ct=b;l.l0=c;l.fV=d;l.fW=e;l.fw=f;l.fb=g;l.eK=h;S(k,l);if(a.fD.p>100000&&a.fD.p>50000){$p=1;continue _;}return;}k=Z(a.fD,(a.fD.p-j|0)-1|0);if(k.ct===b&&ALA(k,c,d,e,f,g,h))break;j=j+1|0;}return;case 1:AIk(a);if(C()){break _;}if
(a.fD.p<=50000)return;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Q5(a){var b;b=Ok(a,1.0);if(b!=a.gh)a.gh=b;}
function X1(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Tp(a.iL);if(!Q2(a.dY,a.bi)&&a.bi!==null){Cg(DT(),B(370));b=a.bi;$p=1;continue _;}a:{c=Ok(a,1.0);if(c!=a.gh){a.gh=c;d=0;while(true){if(d>=a.cv.p)break a;Vy(Z(a.cv,d));d=d+1|0;}}}a.ec=Long_add(a.ec,Long_fromInt(1));if(Long_ne(Long_rem(a.ec,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c
=0;b=null;$p=4;continue _;case 1:AOg(a,b);if(C()){break _;}b:{c=Ok(a,1.0);if(c!=a.gh){a.gh=c;d=0;while(true){if(d>=a.cv.p)break b;Vy(Z(a.cv,d));d=d+1|0;}}}a.ec=Long_add(a.ec,Long_fromInt(1));if(Long_ne(Long_rem(a.ec,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c=0;b=null;$p=4;continue _;case 2:ABn(a,c);if(C()){break _;}d=K(a.bi.d);e=K(a.bi.e);b=new Iq;f=d-64|0;g=0;h=e-64|0;i=d+64|0;j=128;c=e+64|0;$p=3;case 3:AEs(b,a,f,g,h,i,j,c);if(C()){break _;}f=0;if(f>=8000)return;a.hU=(a.hU*3|0)+a.sb|0;g=a.hU>>2;h
=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p=5;continue _;case 4:ABB(a,c,b);if(C()){break _;}c=0;$p=2;continue _;case 5:$z=Hw(b,h,j,i);if(C()){break _;}k=$z;L();if(Bgy.data[k]){l=BeO.data[k];m=a.r;$p=6;continue _;}f=f+1|0;if(f>=8000)return;a.hU=(a.hU*3|0)+a.sb|0;g=a.hU>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;continue _;case 6:l.e6(a,h,j,i,m);if(C()){break _;}f=f+1|0;if(f>=8000)return;a.hU=(a.hU*3|0)+a.sb|0;g=a.hU>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p
=5;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ABn(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Ju(a.gJ);if(c!=IJ(a.kO)){d=new D2;Bl(d,B(371));M(d);}if(c>500)c=500;e=0;a:{while(true){if(e>=c)break a;f=MY(a.gJ);if(!b&&Long_gt(f.jh,a.ec))break;MB(a.gJ,f);KV(a.kO,f);if(Ic(a,f.fF-8|0,f.fo-8|0,f.fJ-8|0,f.fF+8|0,f.fo+8|0,f.fJ+8|0)){g=f.fF;h=f.fo;i=f.fJ;$p=1;continue _;}e=e+1|0;}}return !Ju(a.gJ)?0:1;case 1:$z=ACt(a,g,
h,i);if(C()){break _;}g=$z;if(g==f.p$&&g>0){L();d=BeO.data[g];g=f.fF;h=f.fo;i=f.fJ;f=a.r;$p=2;continue _;}b:{while(true){e=e+1|0;if(e>=c)break b;f=MY(a.gJ);if(!b&&Long_gt(f.jh,a.ec))break;MB(a.gJ,f);KV(a.kO,f);if(!Ic(a,f.fF-8|0,f.fo-8|0,f.fJ-8|0,f.fF+8|0,f.fo+8|0,f.fJ+8|0))continue;else{g=f.fF;h=f.fo;i=f.fJ;continue _;}}}return !Ju(a.gJ)?0:1;case 2:d.e6(a,g,h,i,f);if(C()){break _;}c:{while(true){e=e+1|0;if(e>=c)break c;f=MY(a.gJ);if(!b&&Long_gt(f.jh,a.ec))break;MB(a.gJ,f);KV(a.kO,f);if(!Ic(a,f.fF-8|0,f.fo-8
|0,f.fJ-8|0,f.fF+8|0,f.fo+8|0,f.fJ+8|0))continue;else{g=f.fF;h=f.fo;i=f.fJ;$p=1;continue _;}}}return !Ju(a.gJ)?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AE8(a,b,c,d){var e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=16;f=new Dz;g=0;if(g>=1000)return;h=(b+E(a.r,e)|0)-E(a.r,e)|0;i=(c+E(a.r,e)|0)-E(a.r,e)|0;j=(d+E(a.r,e)|0)-E(a.r,e)|0;$p=1;case 1:$z=ACt(a,h,i,j);if(C()){break _;}k=$z;if(k>0){L();l=BeO.data[k];$p=2;continue _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.r,e)|0)-E(a.r,e)|0;i=(c+E(a.r,e)|0)-E(a.r,
e)|0;j=(d+E(a.r,e)|0)-E(a.r,e)|0;continue _;case 2:l.kM(a,h,i,j,f);if(C()){break _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.r,e)|0)-E(a.r,e)|0;i=(c+E(a.r,e)|0)-E(a.r,e)|0;j=(d+E(a.r,e)|0)-E(a.r,e)|0;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADI(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DG(a.qi);d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);while(d<=e){h=f;while(h<=g){if(C4(a,d,h)){$p=1;continue _;}h=h+1|0;}d=d+1|0;}return a.qi;case 1:$z=ZR(a,d,h);if(C()){break _;}i=$z;AJ0(i,b,c,a.qi);a:while(true){h=h+1|0;while(h>g){d=d+1|0;if(d>e)break a;h=f;}if(!C4(a,d,h))continue;else
{continue _;}}return a.qi;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANd(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);h=Ci();while(d<=e){i=f;while(i<=g){if(C4(a,d,i)){$p=1;continue _;}i=i+1|0;}d=d+1|0;}return h;case 1:$z=ZR(a,d,i);if(C()){break _;}j=$z;AMi(j,b,c,h);a:while(true){i=i+1|0;while(i>g){d=d+1|0;if(d>e)break a;i=f;}if(!C4(a,d,i))continue;else
{continue _;}}return h;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AWG(a){return a.dY;}
function AGs(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!EI(a,b,c,d))return;$p=1;case 1:$z=XS(a,b,d);if(C()){break _;}e=$z;SF(e);return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Yp(a,b){var c,d;c=0;d=0;while(d<a.dY.p){if(P2(b,Dl(Z(a.dY,d))))c=c+1|0;d=d+1|0;}return c;}
function AQc(a,b){var c,d;DD(a.dY,b);c=0;while(c<a.cv.p){Z(a.cv,c);d=0;while(d<b.p){Z(b,d);d=d+1|0;}c=c+1|0;}}
function AQ2(a,b){DD(a.l2,b);}
function V_(a){while(Tp(a.iL)){}}
function AH9(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACt(a,c,d,e);if(C()){break _;}g=$z;L();h=BeO.data[g];i=BeO.data[b];$p=2;case 2:$z=i.hs(a,c,d,e);if(C()){break _;}j=$z;if(f)j=null;if(!(b>0&&h===null)&&h!==BfX&&h!==BgD&&h!==BfY&&h!==BgE&&h!==Bgo)return 0;if(j===null){$p=3;continue _;}$p=4;continue _;case 3:$z=i.fT(a,c,d,e);if(C()){break _;}b=$z;return !b
?0:1;case 4:$z=AM5(a,j);if(C()){break _;}b=$z;if(!b)return 0;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ARU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.d);f=K(b.j);g=K(b.e);h=d+32.0|0;i=e-h|0;j=f-h|0;k=g-h|0;l=e+h|0;m=f+h|0;n=g+h|0;o=new Iq;$p=1;case 1:AEs(o,a,i,j,k,l,m,n);if(C()){break _;}return APp(A2F(o),b,c,d);default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AJu(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=K(b.d);h=K(b.j);i=K(b.e);j=f+32.0|0;k=g-j|0;l=h-j|0;m=i-j|0;n=g+j|0;o=h+j|0;p=i+j|0;q=new Iq;$p=1;case 1:AEs(q,a,k,l,m,n,o,p);if(C()){break _;}return AF$(A2F(q),b,c,d,e,f);default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function XD(){var b,c;Bks=$rt_createFloatArray(16);b=0;while(b<=15){c=1.0-b/15.0;Bks.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}}
function L0(){var a=this;D.call(a);a.um=null;a.zl=null;a.ll=0;a.Er=0.0;a.Eq=0.0;a.ER=0;a.l6=0;a.mt=0;a.nq=0;a.qc=0;a.rN=0;a.zJ=0;a.Af=0.0;a.zL=0.0;a.zi=0.0;a.ou=0;}
var BeK=null;function BA(){BA=Bt(L0);A2n();}
function Br(a){var b,c,d,e,f;if(!a.ou)return 0;a.ou=0;if(a.ll>0){if(a.mt)WR(32888);if(a.l6)WR(32886);b=a.zJ;c=a.ll;d=a.um.buffer;e=a.ll*7|0;ALq(b,0,c,new Int32Array(d,0,e));if(a.mt)Ti(32888);if(a.l6)Ti(32886);}f=a.nq*4|0;Wv(a);return f;}
function Wv(a){a.ll=0;a.nq=0;a.qc=0;}
function Bz(a){Gh(a,7);}
function Gh(a,b){if(a.ou)Br(a);a.ou=1;Wv(a);a.zJ=b;a.l6=0;a.mt=0;a.rN=0;}
function AJw(a,b,c){a.mt=1;a.Er=b;a.Eq=c;}
function Cq(a,b,c,d){O$(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function Gu(a,b,c,d,e){Qh(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function O$(a,b,c,d){Qh(a,b,c,d,255);}
function Qh(a,b,c,d,e){if(!a.rN){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.l6=1;a.ER=e<<24|d<<16|c<<8|b;}}
function G(a,b,c,d,e,f){AJw(a,e,f);Bf(a,b,c,d);}
function Bf(a,b,c,d){var e,f,g,h,i;if(a.qc>65534)return;a.qc=a.qc+1|0;a.ll=a.ll+1|0;e=a.nq;f=a.um;g=a.zl;h=e+0|0;i=b+a.Af;g[h]=i;h=e+1|0;i=c+a.zL;g[h]=i;h=e+2|0;i=d+a.zi;g[h]=i;if(a.mt){h=e+3|0;i=a.Er;g[h]=i;h=e+4|0;i=a.Eq;g[h]=i;}if(a.l6){h=e+5|0;e=a.ER;f[h]=e;}a.nq=a.nq+7|0;}
function ES(a,b){O$(a,b>>16&255,b>>8&255,b&255);}
function ADl(a){a.rN=1;}
function Dc(a,b,c,d){Cj(b,c,d);}
function Fa(a,b,c,d){a.Af=b;a.zL=c;a.zi=d;}
function A2n(){var b,c;b=new L0;BA();b.ll=0;b.l6=0;b.mt=0;b.nq=0;b.qc=0;b.rN=0;b.ou=0;c=new ArrayBuffer(2097152);b.um=new Int32Array(c);b.zl=new Float32Array(c);BeK=b;}
function ANe(){var a=this;D.call(a);a.fL=0;a.fH=0;}
function FG(a,b){var c=new ANe();A0a(c,a,b);return c;}
function A0a(a,b,c){var d,e;a.fL=b;a.fH=c;d=1;while(true){c=a.fL;e=d+1|0;if((c/e|0)<320)break;if((a.fH/e|0)<240)break;d=e;}a.fL=a.fL/d|0;a.fH=a.fH/d|0;}
function AEn(a){return a.fL;}
function Zb(a){return a.fH;}
function Gc(){D.call(this);this.mP=0.0;}
function Bky(){var a=new Gc();M_(a);return a;}
function M_(a){a.mP=0.0;}
function KK(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>24&255)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>24&255)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;Bb(3553);Ba(3042);Bb(3008);Df(770,771);BA();p=BeK;Bz(p);Gu(p,i,j,k,h);q=d;r=c;Bf(p,q,r,0.0);s=b;Bf(p,s,r,0.0);Gu(p,m,n,o,l);r=e;Bf(p,s,r,0.0);Bf(p,q,r,0.0);Br(p);Bb(3042);Ba(3008);Ba(3553);}
function DE(a,b,c,d,e,f){Cy(b,c,d-(Dw(b,c)/2|0)|0,e,f);}
function Hq(a,b,c,d,e,f){Cy(b,c,d,e,f);}
function CH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;BA();h=BeK;Bz(h);i=b+0|0;j=c+g|0;k=a.mP;l=(d+0|0)*0.00390625;m=(e+g|0)*0.00390625;G(h,i,j,k,l,m);n=b+f|0;o=a.mP;k=(d+f|0)*0.00390625;G(h,n,j,o,k,m);m=c+0|0;o=a.mP;j=(e+0|0)*0.00390625;G(h,n,m,o,k,j);G(h,i,m,a.mP,l,j);Br(h);}
function CS(){var a=this;Gc.call(a);a.I=null;a.bm=0;a.bE=0;a.bH=null;a.pQ=0;a.b0=null;}
function Bkz(){var a=new CS();DQ(a);return a;}
function DQ(a){M_(a);a.bH=Ci();a.pQ=0;}
function AFC(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.bH.p)return;f=Z(a.bH,e);g=a.I;$p=1;case 1:ACQ(f,g,b,c);if(C()){break _;}e=e+1|0;if(e>=a.bH.p)return;f=Z(a.bH,e);g=a.I;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function YK(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.I;e=null;$p=1;case 1:ADS(d,e);if(C()){break _;}d=a.I;$p=2;case 2:AFh(d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Zk(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bH.p)break a;f=Z(a.bH,e);if(RZ(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.iB(f);if(C()){break _;}while(true){e=e+1|0;if(e>=a.bH.p)break;f=Z(a.bH,e);if(!RZ(f,b,c))continue;else{continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A2w(a,b,c,d){return;}
function AMR(a,b){return;}
function AP7(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.I=b;a.b0=b.e8;a.bm=c;a.bE=d;$p=1;case 1:a.hT();if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AP5(a){return;}
function AG5(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Fx()){$p=1;continue _;}if(!DU())return;$p=2;continue _;case 1:Zw(a);if(C()){break _;}if(Fx()){continue _;}if(!DU())return;$p=2;case 2:ASx(a);if(C()){break _;}if(!DU())return;continue _;default:E_();}}C3().s(a,$p);}
function Zw(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cx()){a.Cb(Bj(ARV(),a.bm)/a.I.cc|0,(a.bE-(Bj(XO(),a.bE)/a.I.bB|0)|0)-1|0,CV());return;}b=Bj(ARV(),a.bm)/a.I.cc|0;c=(a.bE-(Bj(XO(),a.bE)/a.I.bB|0)|0)-1|0;d=CV();$p=1;case 1:a.I0(b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ASx(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!CU())return;Bd();if(Beb===null)b=0;else{c=$rt_str(Beb.key);b=Beb===null?32:Bh(c)>1?0:Y(c,0);}d=Bg();$p=1;case 1:a.o$(b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function A3f(a){return;}
function AH7(a){return;}
function ABd(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;$p=1;case 1:AID(a,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function AID(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.I.A!==null){KK(a,0,0,a.bm,a.bE,1610941696,(-1607454656));return;}Bb(2896);Bb(2912);BA();c=BeK;d=3553;e=a.I.bo;f=B(165);$p=1;case 1:$z=AHs(e,f);if(C()){break _;}g=$z;Cp(d,g);BU(1.0,1.0,1.0,1.0);Bz(c);ES(c,4210752);h=a.bE;i=a.bE/32.0;j=b;G(c,0.0,h,0.0,0.0,i+j);G(c,a.bm,a.bE,
0.0,a.bm/32.0,a.bE/32.0+j);k=a.bm;l=a.bm/32.0;m=0+b|0;G(c,k,0.0,0.0,l,m);G(c,0.0,0.0,0.0,0.0,m);Br(c);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AVp(a){return 1;}
function AFc(){var a=this;D.call(a);a.k6=null;a.jw=0;a.ie=0;a.vE=0;}
function A_x(a){var b=new AFc();A4P(b,a);return b;}
function A4P(a,b){a.k6=J(D,b);a.jw=b;a.ie=0;a.vE=0;}
function SY(a,b){var c,d;c=a.ie;while(true){a.ie=a.ie+1|0;if(a.ie>=a.jw)a.ie=0;if(a.ie==c){c=a.jw;a.jw=a.jw+(a.jw/2|0)|0;d=a.k6;a.k6=J(D,a.jw);Di(d,0,a.k6,0,c);return SY(a,b);}if(a.k6.data[a.ie]!==null)continue;else break;}a.k6.data[a.ie]=b;a.vE=a.vE+1|0;return a.ie;}
function ANJ(a,b){if(b<a.jw&&b>=0)return a.k6.data[b];return null;}
function Mj(){D.call(this);}
function Es(){var a=this;Mj.call(a);a.es=0.0;a.eq=0.0;a.er=0.0;a.ep=0.0;a.ev=0.0;a.ew=0.0;a.et=0.0;a.eu=0.0;a.eA=0.0;a.ey=0.0;a.ez=0.0;a.ex=0.0;a.gS=0.0;a.gT=0.0;a.gQ=0.0;a.gR=0.0;}
function M3(){var a=new Es();A43(a);return a;}
function A43(a){Fo(a);}
function Fo(a){a.es=1.0;a.eq=0.0;a.er=0.0;a.ep=0.0;a.ev=0.0;a.ew=1.0;a.et=0.0;a.eu=0.0;a.eA=0.0;a.ey=0.0;a.ez=1.0;a.ex=0.0;a.gS=0.0;a.gT=0.0;a.gQ=0.0;a.gR=1.0;return a;}
function Kt(a){a.es=0.0;a.eq=0.0;a.er=0.0;a.ep=0.0;a.ev=0.0;a.ew=0.0;a.et=0.0;a.eu=0.0;a.eA=0.0;a.ey=0.0;a.ez=0.0;a.ex=0.0;a.gS=0.0;a.gT=0.0;a.gQ=0.0;a.gR=0.0;return a;}
function GP(a,b){a.es=b.es;a.eq=b.eq;a.er=b.er;a.ep=b.ep;a.ev=b.ev;a.ew=b.ew;a.et=b.et;a.eu=b.eu;a.eA=b.eA;a.ey=b.ey;a.ez=b.ez;a.ex=b.ex;a.gS=b.gS;a.gT=b.gT;a.gQ=b.gQ;a.gR=b.gR;return a;}
function TN(a,b){CJ(b,a.es);CJ(b,a.eq);CJ(b,a.er);CJ(b,a.ep);CJ(b,a.ev);CJ(b,a.ew);CJ(b,a.et);CJ(b,a.eu);CJ(b,a.eA);CJ(b,a.ey);CJ(b,a.ez);CJ(b,a.ex);CJ(b,a.gS);CJ(b,a.gT);CJ(b,a.gQ);CJ(b,a.gR);return a;}
function NQ(a,b){b=b.data;b[0]=a.es;b[1]=a.eq;b[2]=a.er;b[3]=a.ep;b[4]=a.ev;b[5]=a.ew;b[6]=a.et;b[7]=a.eu;b[8]=a.eA;b[9]=a.ey;b[10]=a.ez;b[11]=a.ex;b[12]=a.gS;b[13]=a.gT;b[14]=a.gQ;b[15]=a.gR;return a;}
function A$t(a,b){return U3(a,b,a);}
function ZA(a,b){a.es=a.es*b.fx;a.eq=a.eq*b.fx;a.er=a.er*b.fx;a.ep=a.ep*b.fx;a.ev=a.ev*b.fz;a.ew=a.ew*b.fz;a.et=a.et*b.fz;a.eu=a.eu*b.fz;a.eA=a.eA*b.fy;a.ey=a.ey*b.fy;a.ez=a.ez*b.fy;a.ex=a.ex*b.fy;return a;}
function ATN(a,b,c){return WV(a,b,c,a);}
function WV(a,b,c,d){return A6z(b,c,a,d);}
function A6z(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=M3();f=b;g=GB(f);h=Go(f);i=1.0-g;j=c.fx*c.fz;k=c.fz*c.fy;l=c.fx*c.fy;m=c.fx*h;n=c.fz*h;o=c.fy*h;p=c.fx*c.fx*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.fz*c.fz*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.fy*c.fy*i+g;z=d.es*p+d.ev*q+d.eA*s;ba=d.eq*p+d.ew*q+d.ey*s;bb=d.er*p+d.et*q+d.ez*s;bc=d.ep*p+d.eu*q+d.ex*s;bd=d.es*t+d.ev*u+d.eA*v;be=d.eq*t+d.ew*u+d.ey*v;bf=d.er*t+d.et*u+d.ez*v;r=d.ep*t+d.eu*u+d.ex*v;e.eA=d.es*w+d.ev*x+d.eA*
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
function BkA(){var a=new UX();A9_(a);return a;}
function A9_(a){return;}
function L1(a,b,c,d){a.fx=b;a.fz=c;a.fy=d;}
function Wb(){}
function RQ(){}
function G7(){var a=this;I0.call(a);a.k$=0.0;a.k_=0.0;a.k9=0.0;a.pc=0.0;}
function A2X(){var a=new G7();AZN(a);return a;}
function AZN(a){return;}
function VA(a,b){a.k$=b.k$;a.k_=b.k_;a.k9=b.k9;a.pc=b.pc;return a;}
function A_u(a){return a.k$;}
function ATh(a){return a.k_;}
function AZX(a){return a.k9;}
function A5x(a){return a.pc;}
function S4(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Dl(a)!==Dl(b))return 0;c=b;if(a.k$===c.k$&&a.k_===c.k_&&a.k9===c.k9&&a.pc===c.pc)return 1;return 0;}
function ST(){var a=this;D.call(a);a.B6=null;a.B5=null;}
function AIA(a){var b,c;b=a.B6;c=a.B5;Fs(b);CM(c,null);}
function AOX(){Fh.call(this);}
function A41(a){var b=new AOX();AYw(b,a);return b;}
function AYw(a,b){WP(a,b);}
function H1(){}
function Un(){}
function ACW(){var a=this;D.call(a);a.fN=null;a.iy=null;a.kz=null;a.p4=0;a.rd=0;a.ii=null;}
function AJy(a,b,c,d){var e=new ACW();AUi(e,a,b,c,d);return e;}
function AUi(a,b,c,d,e){a.ii=b;a.rd=a.ii.d6;a.fN=c;a.iy=d;a.p4=e;}
function GK(a){return a.fN===null?0:1;}
function GC(a){var b;Rp(a);if(a.fN===null){b=new JY;O(b);M(b);}b=a.fN.zk;a.kz=a.fN;a.iy=a.fN;a.fN=a.fN.hq;a.p4=a.p4+1|0;return b;}
function AHe(a){var b,c;if(a.kz===null){b=new D2;O(b);M(b);}b=a.ii;c=a.kz;if(c.iw===null)b.pB=c.hq;else c.iw.hq=c.hq;if(c.hq===null)b.qk=c.iw;else c.hq.iw=c.iw;b.hw=b.hw-1|0;b.d6=b.d6+1|0;if(a.kz===a.iy){a.iy=!GK(a)?null:a.fN.iw;a.p4=a.p4-1|0;}else if(a.kz===a.fN)a.fN=!ZO(a)?null:a.iy.hq;a.rd=a.ii.d6;a.kz=null;}
function ZO(a){return a.iy===null?0:1;}
function ABp(a,b){var c;Rp(a);c=new Rz;c.zk=b;c.iw=a.iy;c.hq=a.fN;if(a.iy!==null)a.iy.hq=c;else a.ii.pB=c;if(a.fN!==null)a.fN.iw=c;else a.ii.qk=c;a.iy=c;b=a.ii;b.hw=b.hw+1|0;b=a.ii;b.d6=b.d6+1|0;a.rd=a.ii.d6;a.kz=null;}
function Rp(a){var b;if(a.rd>=a.ii.d6)return;b=new KR;O(b);M(b);}
function Rz(){var a=this;D.call(a);a.zk=null;a.hq=null;a.iw=null;}
function BkB(){var a=new Rz();A0K(a);return a;}
function A0K(a){return;}
function KH(){var a=this;D.call(a);a.zh=null;a.kw=null;a.ha=null;a.lV=null;a.Ca=null;a.wG=null;a.sS=0;a.DU=0;}
var BkC=0;var BeJ=null;function AHs(a,b){var c,d,e,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=CP(BeJ,b);if(c!==null)return c.f6;try{AFd(a.kw);WQ(a.kw);d=QW(a.kw,0);if(Iw(b,B(372))){a.sS=1;e=Ke(Jq(b,7));$p=1;continue _;}if(DA(b,B(179))&&AIF().k.pN)BkC=1;e=Ke(b);$p=2;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){}else{throw $$e;}}b=new B6;Bl(b,B(373));M(b);case 1:a:{try{$z=Y9(a,e);if(C()){break _;}c=$z;LK(a,c,d);a.sS
=0;Q$(BeJ,b,CX(d));}catch($$e){$$je=Bi($$e);if($$je instanceof B1){break a;}else{throw $$e;}}return d;}b=new B6;Bl(b,B(373));M(b);case 2:a:{try{$z=Y9(a,e);if(C()){break _;}c=$z;LK(a,c,d);BkC=0;Q$(BeJ,b,CX(d));}catch($$e){$$je=Bi($$e);if($$je instanceof B1){break a;}else{throw $$e;}}return d;}b=new B6;Bl(b,B(373));M(b);default:E_();}}C3().s(a,b,c,d,e,$p);}
function AHz(a,b){var c;EA(a.kw);WQ(a.kw);c=QW(a.kw,0);LK(a,b,c);BR(a.zh,CX(c),b);return c;}
function LK(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;Eb(a,c);if(!BkC){Ej(3553,10241,9728);Ej(3553,10240,9728);}else{Ej(3553,10241,9986);Ej(3553,10240,9728);Ej(3553,33085,4);}if(a.DU){Ej(3553,10241,9729);Ej(3553,10240,9729);}if(!a.sS){Ej(3553,10242,10497);Ej(3553,10243,10497);}else{Ej(3553,10242,10496);Ej(3553,10243,10496);}d=b.xq;e=b.Dn;f=b.tZ;g=$rt_createByteArray(Bj(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if
(a.wG!==null&&a.wG.dw){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}a:{EA(a.ha);UH(a.ha,g);b=a.ha;EO(b,0);Nj(b,h.length);St(3553,0,6408,d,e,0,6408,5121,a.ha);if(BkC){p=1;while(true){if(p>4)break a;o=d>>(p-1|0);q=d>>p;r=e>>p;EA(a.lV);s=0;while(s<q){t=0;while(t<r){b=a.ha;c=s*2|0;i=c+0|0;k=t*2|0;n=Bj(k+0|0,o);u=KP(b,(i+n|0)*4|0);b=a.ha;c=c+1|0;v=KP(b,(c+n|0)*4|0);b=a.ha;k=
Bj(k+1|0,o);w=KP(b,(c+k|0)*4|0);x=KP(a.ha,(i+k|0)*4|0);y=Lf(a,Lf(a,u,v),Lf(a,w,x));AA3(a.lV,(s+Bj(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}St(3553,p,6408,q,r,0,6408,5121,a.lV);z=a.ha;a.ha=a.lV;a.lV=z;p=p+1|0;}}}}
function AD1(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=B(374);$p=1;case 1:$z=AHs(a,b);if(C()){break _;}d=$z;return d;default:E_();}}C3().s(a,b,c,d,$p);}
function G5(a,b){S(a.Ca,b);b.o9();}
function Lf(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function Y9(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AER(b);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function Eb(a,b){if(b<0)return;Cp(3553,b);}
function ADB(){BkC=0;}
function Wc(){var a=this;D.call(a);a.r_=null;a.xp=0;a.ti=0;}
function BkD(a,b,c){var d=new Wc();AOG(d,a,b,c);return d;}
function AOG(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.r_=$rt_createIntArray(256);a.xp=0;e=Ke(c);$p=1;case 1:$z=AER(e);if(C()){break _;}f
=$z;g=f.xq;e=f.tZ;h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+Bj(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.r_.data[h]=k+2|0;h=h+1|0;}a.xp=AHz(d,f);a.ti=IW(288);BA();p=BeK;q=0;while(q<256){FF(a.ti+q|0,4864);Bz(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;G(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;G(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;G(p,7.989999771118164,0.0,0.0,x,y);G(p,0.0,0.0,0.0,u,y);Br(p);Ee();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.dw){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}FF((a.ti+256|0)+l|0,4864);F3(ba/255.0,bb/255.0,bc/255.0);Ee();l=l+1|0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function Cy(a,b,c,d,e){SC(a,b,c+1|0,d+1|0,e,1);ED(a,b,c,d,e);}
function ED(a,b,c,d,e){SC(a,b,c,d,e,0);}
function SC(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Cp(3553,a.xp);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BU(g,h,i,j);B3();Bw(c,d,0.0);k=0;while(k<Bh(b)){c=k;while(true){d=Bh(b);k=c+1|0;if(d<=k)break;if(Y(b,c)!=167)break;l=Uy(B(375),Y(AKj(b),k));c=c+2|0;}if(c<Bh(b)){m=Ve(Y(b,c));if(m>=0){FQ((a.ti+m|0)+32|0);Bw(a.r_.data[m+32|0],0.0,0.0);}}}BD();}
function Dw(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<Bh(b)){if(Y(b,d)==167)d=d+1|0;else{e=Ve(Y(b,d));if(e>=0)c=c+a.r_.data[e+32|0]|0;}d=d+1|0;}return c;}
function AQA(a,b){var c,d,e,f;c=Ci();d=ANk(b,B(158)).data;e=d.length;f=0;while(f<e){S(c,d[f]);f=f+1|0;}return c;}
function Qg(){var a=this;D.call(a);a.FQ=0;a.FP=0;}
function BkE(){var a=new Qg();A$y(a);return a;}
function A$y(a){return;}
function Yw(a){AMF(1);a.FQ=0;a.FP=0;}
function AFy(a){Lq();Mz();AMF(0);}
function AKV(){var a=this;Eu.call(a);a.o4=null;a.rg=null;a.oz=null;a.sX=null;a.tc=0;}
function Bat(){var a=new AKV();A4t(a);return a;}
function A4t(a){L();Hz(a,BfX.bb+1|0);a.o4=$rt_createFloatArray(256);a.rg=$rt_createFloatArray(256);a.oz=$rt_createFloatArray(256);a.sX=$rt_createFloatArray(256);a.tc=0;a.wW=2;}
function AZ9(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.tc=a.tc+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=c-2|0;while(e<=c){f=b&15;g=e&15;d=d+a.o4.data[f+(g*16|0)|0];e=e+1|0;}h=a.rg.data;i=b+(c*16|0)|0;h[i]=d/3.200000047683716+a.oz.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){j=a.oz.data;i=b+(c*16|0)|0;j[i]=j[i]+a.sX.data[i]*0.05000000074505806;if(a.oz.data[i]<0.0)a.oz.data[i]=0.0;j=a.sX.data;j[i]=j[i]-0.30000001192092896;if(BP()<0.2)a.sX.data[i]=0.5;c=c+1|0;}b=b+1|0;}j=a.rg;a.rg=a.o4;a.o4
=j;c=0;while(c<256){d=a.o4.data[(c-(a.tc*16|0)|0)&255];if(d>1.0)d=1.0;if(d<0.0)d=0.0;k=d*d;i=32.0+k*32.0|0;l=50.0+k*64.0|0;m=255;n=146.0+k*50.0|0;if(a.mA){b=i*30|0;i=((b+(l*59|0)|0)+2805|0)/100|0;l=(b+(l*70|0)|0)/100|0;m=(b+17850|0)/100|0;}j=a.dC.data;b=c*4|0;j[b+0|0]=i<<24>>24;a.dC.data[b+1|0]=l<<24>>24;a.dC.data[b+2|0]=m<<24>>24;a.dC.data[b+3|0]=n<<24>>24;c=c+1|0;}}
function ACh(){var a=this;Eu.call(a);a.ov=null;a.rr=null;a.jO=null;a.sO=null;a.ts=0;}
function BcB(){var a=new ACh();A3m(a);return a;}
function A3m(a){L();Hz(a,BfY.bb+1|0);a.ov=$rt_createFloatArray(256);a.rr=$rt_createFloatArray(256);a.jO=$rt_createFloatArray(256);a.sO=$rt_createFloatArray(256);a.ts=0;a.wW=2;}
function A8R(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.ts=a.ts+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){j=(g+e|0)&15;h=(i+f|0)&15;d=d+a.ov.data[j+(h*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.rr.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jO.data;e=(b+0|0)&15;j=((c+0|0)&15)*16|0;n=m[e+j|0];m=a.jO.data;h=h&15;n=n+m[h+j|0];m=a.jO.data;c=c+1|0;j=(c&15)*16|0;k[l]
=d+(n+m[h+j|0]+a.jO.data[e+j|0])/4.0*0.800000011920929;m=a.jO.data;m[l]=m[l]+a.sO.data[l]*0.009999999776482582;if(a.jO.data[l]<0.0)a.jO.data[l]=0.0;m=a.sO.data;m[l]=m[l]-0.05999999865889549;if(BP()<0.005)a.sO.data[l]=1.5;}b=b+1|0;}m=a.rr;a.rr=a.ov;a.ov=m;c=0;while(c<256){d=a.ov.data[(c-((a.ts/3|0)*16|0)|0)&255]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*100.0+155.0|0;n=d*d;h=n*255.0|0;l=n*d*d*128.0|0;if(a.mA){b=j*30|0;j=((b+(h*59|0)|0)+(l*11|0)|0)/100|0;h=(b+(h*70|0)|0)/100|0;l=(b+(l*70|0)|0)/100|0;}m=a.dC.data;b
=c*4|0;m[b+0|0]=j<<24>>24;a.dC.data[b+1|0]=h<<24>>24;a.dC.data[b+2|0]=l<<24>>24;a.dC.data[b+3|0]=(-1);c=c+1|0;}}
function AR4(){var a=this;Eu.call(a);a.mn=null;a.oI=null;}
function AVE(a){var b=new AR4();AZo(b,a);return b;}
function AZo(a,b){L();Hz(a,Bgo.bb+(b*16|0)|0);a.mn=$rt_createFloatArray(320);a.oI=$rt_createFloatArray(320);}
function A3t(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<16){c=0;while(c<20){d=18;e=a.mn.data;f=c+1|0;g=e[b+((f%20|0)*16|0)|0]*18.0;h=b-1|0;while(h<=(b+1|0)){i=c;while(i<=f){if(h>=0&&i>=0&&h<16&&i<20)g=g+a.mn.data[h+(i*16|0)|0];d=d+1|0;i=i+1|0;}h=h+1|0;}e=a.oI.data;j=b+(c*16|0)|0;e[j]=g/(d*1.059999942779541);if(c>=19)a.oI.data[j]=BP()*BP()*BP()*4.0+BP()*0.10000000149011612+0.20000000298023224;c=f;}b=b+1|0;}e=a.oI;a.oI=a.mn;a.mn=e;f=0;while(f<256){k=a.mn.data[f]*1.7999999523162842;if(k>1.0)k=1.0;if(k<0.0)k=
0.0;l=k*155.0+100.0|0;g=k*k;m=g*255.0|0;j=g*k*k*k*k*k*k*k*k*255.0|0;n=255;if(k<0.5)n=0;if(a.mA){c=l*30|0;l=((c+(m*59|0)|0)+(j*11|0)|0)/100|0;m=(c+(m*70|0)|0)/100|0;j=(c+(j*70|0)|0)/100|0;}e=a.dC.data;b=f*4|0;e[b+0|0]=l<<24>>24;a.dC.data[b+1|0]=m<<24>>24;a.dC.data[b+2|0]=j<<24>>24;a.dC.data[b+3|0]=n<<24>>24;f=f+1|0;}}
function Xn(){}
function AAr(){var a=this;D.call(a);a.iE=null;a.bN=null;a.iD=null;a.eI=null;a.gM=null;a.c8=null;a.dr=0;a.dE=0;a.j6=0;a.yY=0;a.bP=null;a.D5=null;a.pu=0;a.on=0;a.xI=0;a.xh=0;a.qp=0;a.qq=0;a.qr=0;a.s9=0;a.s8=0;a.s$=0;a.r8=0;a.s6=0;a.ld=0;a.xo=0;a.Hh=null;a.HR=null;a.sa=0;a.rW=0;a.DO=0;a.st=0;a.qz=0;a.oX=null;a.Hb=0;a.GJ=0;a.rE=0.0;a.rD=0.0;a.rC=0.0;a.tH=0.0;a.q7=0;}
function BaS(a,b){var c=new AAr();A2i(c,a,b);return c;}
function A2i(a,b,c){var d,e,f,g,h,i,j;a.iE=Ci();a.eI=Ci();a.pu=0;a.r8=(-1);a.Hh=$rt_createIntArray(50000);a.HR=Rb(64);a.oX=Ci();a.Hb=0;a.GJ=IW(1);a.rE=(-9999.0);a.rD=(-9999.0);a.rC=(-9999.0);a.q7=0;a.bP=b;a.iD=c;a.yY=IW(786432);a.on=IW(3);B3();FF(a.on,4864);Zc(a);Ee();BD();BA();d=BeK;a.xI=a.on+1|0;FF(a.xI,4864);e=(-384);while(e<=384){f=(-384);while(f<=384){Bz(d);g=e+0|0;h=f+0|0;Bf(d,g,16.0,h);i=e+64|0;Bf(d,i,16.0,h);f=f+64|0;h=f;Bf(d,i,16.0,h);Bf(d,g,16.0,h);Br(d);}e=e+64|0;}Ee();a.xh=a.on+2|0;FF(a.xh,4864);Bz(d);f
=(-384);while(f<=384){j=(-384);while(j<=384){g=f+64|0;h=j+0|0;Bf(d,g,(-16.0),h);i=f+0|0;Bf(d,i,(-16.0),h);j=j+64|0;h=j;Bf(d,i,(-16.0),h);Bf(d,g,(-16.0),h);}f=f+64|0;}Br(d);Ee();}
function Zc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.bP.k.bw)return;b=new Dz;BA();c=BeK;Bz(c);d=0;while(d<1500){a:{e=N(b)*2.0-1.0;f=N(b)*2.0-1.0;g=N(b)*2.0-1.0;h=0.25+N(b)*0.25;i=e*e+f*f+g*g;if(i<1.0&&i>0.01){i=1.0/Ed(i);j=e*i;f=f*i;g=g*i;k=j*100.0;l=f*100.0;m=g*100.0;n=CR(j,g);o=Go(n);p=GB(n);q=CR(Ed(j*j+g*g),f);r=Go(q);s=GB(q);t=Cl(b)*3.141592653589793*2.0;u=Go(t);v=GB(t);w=0;i=0.0*s;e=0.0*r;while(true){if(w>=4)break a;j=((w&2)-1|0)*h;w=w+1|0;x=((w&2)-1|0)*h;y=j*v-x*u;z=x*
v+j*u;ba=y*r+i;bb=e-y*s;bc=bb*o-z*p;bd=z*o+bb*p;Bf(c,k+bc,l+ba,m+bd);}}}d=d+1|0;}Br(c);}
function QX(a,b){if(a.bN!==null)AKT(a.bN,a);a.rE=(-9999.0);a.rD=(-9999.0);a.rC=(-9999.0);Bgn.n0=b;a.bN=b;a.D5=A8j(b);if(b!==null){ANC(b,a);I9(a);}}
function I9(a){var b,c,d,e,f,g,h,i;a:{L();AKm(Be2,a.bP.k.lb);a.r8=a.bP.k.he;if(a.c8!==null){b=0;while(true){if(b>=a.c8.data.length)break a;ARE(a.c8.data[b]);b=b+1|0;}}}b=64<<(3-a.r8|0);if(b>400)b=400;b=(b/16|0)+1|0;a.dr=b;a.dE=8;a.j6=b;a.c8=J(Ik,Bj(Bj(a.dr,a.dE),a.j6));a.gM=J(Ik,Bj(Bj(a.dr,a.dE),a.j6));c=0;d=0;a.qp=0;a.qq=0;a.qr=0;a.s9=a.dr;a.s8=a.dE;a.s$=a.j6;e=0;while(e<a.eI.p){Z(a.eI,e).i1=0;e=e+1|0;}DG(a.eI);f=0;while(f<a.dr){g=0;while(g<a.dE){h=0;while(h<a.j6){if(a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0]!==
null)Ga(a.iE,a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0].gl);a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0]=Bbv(a.bN,a.iE,f*16|0,g*16|0,h*16|0,16,a.yY+c|0);a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0].JK=0;a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0].xG=1;a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0].fu=1;i=a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0];b=d+1|0;i.Ij=d;KU(a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0]);a.gM.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0]=a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0];S(a.eI,a.c8.data[Bj(Bj(h,a.dE)+g|0,a.dr)+f|0]);c=c+3|0;h=h+1
|0;d=b;}g=g+1|0;}f=f+1|0;}if(a.bN!==null){i=a.bN.bi;Tg(a,K(i.d),K(i.j),K(i.e));PU(a.gM,AYG(i));}}
function ACy(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ARg(Bkq,a.bN,a.iD,a.bP.e8,a.bP.f,d);AHa(Bgn,a.bN,a.iD,a.bP.e8,a.bP.f,a.bP.k,d);a.s6=0;a.ld=0;a.xo=0;e=a.bN.bi;f=e.cr;g=e.d-e.cr;h=d;BkF=f+g*h;BkG=e.b7+(e.j-e.b7)*h;BkH=e.cs+(e.e-e.cs)*h;BkI=e.cr+(e.d-e.cr)*h;BkJ=e.b7+(e.j-e.b7)*h;BkK=e.cs+(e.e-e.cs)*h;i=a.bN.dY;a.s6=i.p;if(a.bP.k.bw)Bb(2912);j=0;while
(true){if(j>=i.p){j=0;if(j>=a.iE.p)return;b=Bkq;c=Z(a.iE,j);$p=1;continue _;}k=Z(i,j);if(R_(k,b)&&ME(c,k.L)){if(k!==a.bN.bi)break;if(a.bP.k.cC)break;}j=j+1|0;}a.ld=a.ld+1|0;e=Bgn;$p=2;continue _;case 1:YU(b,c,d);if(C()){break _;}j=j+1|0;if(j>=a.iE.p)return;b=Bkq;c=Z(a.iE,j);continue _;case 2:AM9(e,k,d);if(C()){break _;}while(true){j=j+1|0;if(j>=i.p){j=0;if(j>=a.iE.p)return;b=Bkq;c=Z(a.iE,j);$p=1;continue _;}k=Z(i,j);if(!R_(k,b))continue;if(!ME(c,k.L))continue;if(k!==a.bN.bi)break;if(!a.bP.k.cC)continue;else break;}a.ld
=a.ld+1|0;e=Bgn;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ALj(a){var b;b=new T;V(b);return U(Be(H(Be(H(Be(H(Be(H(Be(H(b,B(376)),a.st),B(23)),a.sa),B(377)),a.rW),B(378)),a.DO),B(379)),a.qz));}
function XZ(a){var b;b=new T;V(b);return U(Be(H(Be(H(Be(H(Be(H(b,B(380)),a.ld),B(23)),a.s6),B(381)),a.xo),B(382)),(a.s6-a.xo|0)-a.ld|0));}
function Tg(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;c=b+(-8)|0;d=d+(-8)|0;a.qp=2147483647;a.qq=2147483647;a.qr=2147483647;a.s9=(-2147483648);a.s8=(-2147483648);a.s$=(-2147483648);e=a.dr*16|0;f=e/2|0;g=0;h=e-1|0;while(g<a.dr){i=g*16|0;j=(i+f|0)-c|0;if(j<0)j=j-h|0;i=i-Bj(j/e|0,e)|0;if(i<a.qp)a.qp=i;if(i>a.s9)a.s9=i;k=0;while(k<a.j6){l=k*16|0;m=(l+f|0)-d|0;if(m<0)m=m-h|0;j=l-Bj(m/e|0,e)|0;if(j<a.qr)a.qr=j;if(j>a.s$)a.s$=j;n=0;while(n<a.dE){o=n*16|0;if(o<a.qq)a.qq=o;if(o>a.s8)a.s8=o;p=a.c8.data[Bj(Bj(k,a.dE)+n|0,
a.dr)+g|0];q=p.i1;Sd(p,i,o,j);if(!q&&p.i1)S(a.eI,p);n=n+1|0;}k=k+1|0;}g=g+1|0;}}
function Vl(a,b,c,d){var e,f,g;if(a.bP.k.he!=a.r8)I9(a);if(!c){a.sa=0;a.rW=0;a.DO=0;a.st=0;a.qz=0;}e=b.d-a.rE;f=b.j-a.rD;g=b.e-a.rC;if(e*e+f*f+g*g>16.0){a.rE=b.d;a.rD=b.j;a.rC=b.e;Tg(a,K(b.d),K(b.j),K(b.e));PU(a.gM,AYG(b));}return 0+Yy(a,0,a.gM.data.length,c,d)|0;}
function Yy(a,b,c,d,e){var f,g,h,i,j,k,l;DG(a.oX);f=0;while(b<c){if(!d){a.sa=a.sa+1|0;if(a.gM.data[b].gY.data[d])a.qz=a.qz+1|0;else if(a.gM.data[b].fu)a.st=a.st+1|0;else a.rW=a.rW+1|0;}if(!a.gM.data[b].gY.data[d]&&a.gM.data[b].fu&&a.gM.data[b].xG&&PE(a.gM.data[b],d)>=0){S(a.oX,a.gM.data[b]);f=f+1|0;}b=b+1|0;}g=a.bP.f;h=g.cr+(g.d-g.cr)*e;i=g.b7+(g.j-g.b7)*e;j=g.cs+(g.e-g.cs)*e;k=0;while(k<a.oX.p){l=Z(a.oX,k);B3();Bw(l.Bw-h,l.Ek-i,l.Dl-j);FQ(PE(l,d));BD();k=k+1|0;}return f;}
function HR(a){if(a.bP.k.bw)return;a.pu=a.pu+1|0;}
function AC_(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bP.k.bw)return;Bb(3553);c=ON(a.bN,b);d=c.x;e=c.z;f=c.w;if(a.bP.k.dw){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}F3(d,e,f);BA();h=BeK;Gr(0);if(!a.bP.k.bw)Ba(2912);F3(d,e,f);FQ(a.xI);Ba(3553);Bb(2912);Bb(3008);Ba(3042);Df(1,1);B3();BU(1.0,1.0,1.0,1.0);Bw(0.0,0.0,0.0);Bv(0.0,
0.0,0.0,1.0);Bv(Hv(a.bN,b)*360.0,1.0,0.0,0.0);i=3553;c=a.iD;j=B(383);$p=1;case 1:$z=AHs(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-30.0),100.0,(-30.0),0.0,0.0);G(h,30.0,100.0,(-30.0),1.0,0.0);G(h,30.0,100.0,30.0,1.0,1.0);G(h,(-30.0),100.0,30.0,0.0,1.0);Br(h);i=3553;c=a.iD;j=B(384);$p=2;case 2:$z=AHs(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-20.0),(-100.0),20.0,1.0,1.0);G(h,20.0,(-100.0),20.0,0.0,1.0);G(h,20.0,(-100.0),(-20.0),0.0,0.0);G(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Br(h);Bb(3553);g=AJq(a.bN,
b);if(g>0.0){BU(g,g,g,g);FQ(a.on);}BU(1.0,1.0,1.0,1.0);Bb(3042);Ba(3008);if(!a.bP.k.bw)Ba(2912);BD();F3(d*0.20000000298023224+0.03999999910593033,e*0.20000000298023224+0.03999999910593033,f*0.6000000238418579+0.10000000149011612);Bb(3553);FQ(a.xh);Ba(3553);Gr(1);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function YI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bP.k.bw)return;if(a.bP.k.lb){$p=2;continue _;}Bb(2884);c=a.bP.f.b7;d=a.bP.f.j-a.bP.f.b7;e=b;f=c+d*e;g=32;BA();h=BeK;i=3553;j=a.iD;k
=B(385);$p=1;case 1:$z=AHs(j,k);if(C()){break _;}l=$z;Cp(i,l);Ba(3042);Df(770,771);j=SW(a.bN,b);m=j.x;n=j.z;o=j.w;if(a.bP.k.dw){p=m*30.0;m=(p+n*59.0+o*11.0)/100.0;n=(p+n*70.0)/100.0;o=(p+o*70.0)/100.0;}d=a.bN.bi.bT+(a.bN.bi.d-a.bN.bi.bT)*e+(a.pu+b)*0.029999999329447746;e=a.bN.bi.bS+(a.bN.bi.e-a.bN.bi.bS)*e;l=K(d/2048.0);q=K(e/2048.0);c=d-(l*2048|0);d=e-(q*2048|0);p=120.0-f+0.33000001311302185;r=c*4.8828125E-4;s=d*4.8828125E-4;Bz(h);Gu(h,m,n,o,0.800000011920929);t=p;u=(-256);while(u<256){v=(-256);while(v<256)
{i=u+0|0;w=i;x=v+g|0;y=x;c=i*4.8828125E-4+r;d=x*4.8828125E-4+s;G(h,w,t,y,c,d);i=u+g|0;e=i;z=i*4.8828125E-4+r;G(h,e,t,y,z,d);i=v+0|0;d=i;y=i*4.8828125E-4+s;G(h,e,t,d,z,y);G(h,w,t,d,c,y);v=x;}u=u+g|0;}Br(h);BU(1.0,1.0,1.0,1.0);Bb(3042);Ba(2884);return;case 2:AA$(a,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AA$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:if(a.bP.k.bw)return;Bb(2884);c=a.bP.f.b7;d=a.bP.f.j-a.bP.f.b7;e=b;f=c+d*e;BA();g=BeK;h=12.0;c=(a.bN.bi.bT+(a.bN.bi.d-a.bN.bi.bT)*e+(a.pu+b)*0.029999999329447746)/12.0;d=(a.bN.bi.bS+(a.bN.bi.e-a.bN.bi.bS)*e)/12.0+0.33000001311302185;i=108.0-f+0.33000001311302185;j=K(c/2048.0);k=K(d/2048.0);e=c-(j*2048|0);d=d-(k*2048|0);l=3553;m=a.iD;n=B(385);$p=1;case 1:$z=AHs(m,n);if(C()){break _;}o=$z;Cp(l,o);Ba(3042);Df(770,771);m=SW(a.bN,b);p=m.x;q=m.z;r=m.w;if(a.bP.k.dw){b=p*30.0;p=(b+q*59.0+r*11.0)/100.0;q=(b+q
*70.0)/100.0;r=(b+r*70.0)/100.0;}s=K(e)*0.00390625;t=K(d)*0.00390625;u=e-K(e);v=d-K(d);CC(h,1.0,h);o=0;k=R(i,(-5.0));w=i+0.0;x=R(i,5.0);b=i+4.0;d=b-9.765625E-4;y=b;while(o<2){if(o)DN(1,1,1,1);else DN(0,0,0,0);z=(-2);while(z<=3){ba=(-2);while(ba<=3){Bz(g);bb=z*8|0;bc=ba*8|0;bd=bb-u;be=bc-v;if(k>0){Gu(g,p*0.699999988079071,q*0.699999988079071,r*0.699999988079071,0.800000011920929);Dc(g,0.0,(-1.0),0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,w,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625
+s;G(g,bh,w,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);}if(x<=0){Gu(g,p,q,r,0.800000011920929);Dc(g,0.0,1.0,0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,d,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;G(g,bh,d,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,d,e,bi,bg);G(g,c,d,e,bf,bg);}a:{Gu(g,p*0.8999999761581421,q*0.8999999761581421,r*0.8999999761581421,0.800000011920929);if(z>(-1)){Dc(g,(-1.0),0.0,0.0);bj=0;e=be+8.0;bg=(bc+8.0)*0.00390625
+t;bh=be+0.0;bi=(bc+0.0)*0.00390625+t;while(true){if(bj>=8)break a;b=bj;c=bd+b+0.0;bf=(bb+b+0.5)*0.00390625+s;G(g,c,w,e,bf,bg);G(g,c,y,e,bf,bg);G(g,c,y,bh,bf,bi);G(g,c,w,bh,bf,bi);bj=bj+1|0;}}}b:{if(z<=1){Dc(g,1.0,0.0,0.0);bk=0;bf=be+8.0;bh=(bc+8.0)*0.00390625+t;bi=be+0.0;c=(bc+0.0)*0.00390625+t;while(true){if(bk>=8)break b;b=bk;e=bd+b+1.0-9.765625E-4;bg=(bb+b+0.5)*0.00390625+s;G(g,e,w,bf,bg,bh);G(g,e,y,bf,bg,bh);G(g,e,y,bi,bg,c);G(g,e,w,bi,bg,c);bk=bk+1|0;}}}c:{Gu(g,p*0.800000011920929,q*0.800000011920929,
r*0.800000011920929,0.800000011920929);if(ba>(-1)){Dc(g,0.0,0.0,(-1.0));bj=0;c=bd+0.0;bf=(bb+0.0)*0.00390625+s;bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;while(true){if(bj>=8)break c;b=bj;e=be+b+0.0;bg=(bc+b+0.5)*0.00390625+t;G(g,c,y,e,bf,bg);G(g,bh,y,e,bi,bg);G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);bj=bj+1|0;}}}d:{if(ba<=1){Dc(g,0.0,0.0,1.0);bk=0;bi=bd+0.0;e=(bb+0.0)*0.00390625+s;bg=bd+8.0;bh=(bb+8.0)*0.00390625+s;while(true){if(bk>=8)break d;b=bk;c=be+b+1.0-9.765625E-4;bf=(bc+b+0.5)*0.00390625+t;G(g,bi,y,c,e,bf);G(g,bg,
y,c,bh,bf);G(g,bg,w,c,bh,bf);G(g,bi,w,c,e,bf);bk=bk+1|0;}}}Br(g);ba=ba+1|0;}z=z+1|0;}o=o+1|0;}BU(1.0,1.0,1.0,1.0);Bb(3042);Ba(2884);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function AIi(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.eI;e=new V5;e.yc=b;Rw(d,e);f=a.eI.p-1|0;g=a.eI.p;h=0;a:{while(h<g){d=Z(a.eI,f-h|0);if(!c){if(G3(d,b)<=1024.0)break a;if(!d.fu){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fu)break a;h=h+1|0;}return a.eI.p?0:1;}$p=1;case 1:ADf(d);if(C()){break _;}H5(a.eI,d);d.i1=0;a:{while(true){h=h+1|0;if(h>=g)break;d=Z(a.eI,f-h|0);if
(!c){if(G3(d,b)<=1024.0)break a;if(!d.fu){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fu)break a;}return a.eI.p?0:1;}continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bP.k.bw)return;a:{BA();g=BeK;Ba(3042);Ba(3008);Df(770,1);BU(1.0,1.0,1.0,(Bq(Long_toNumber(B$())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){if(a.tH<=0.0)break a;Df(774,768);e=a.iD;h=B(179);$p=2;continue _;}if(e!==null){Df(770,771);i=Bq(Long_toNumber(B$())
/100.0)*0.20000000298023224+0.800000011920929;BU(i,i,i,Bq(Long_toNumber(B$())/200.0)*0.20000000298023224+0.5);b=a.iD;e=B(179);$p=1;continue _;}}Bb(3042);Bb(3008);return;case 1:$z=AHs(b,e);if(C()){break _;}j=$z;Cp(3553,j);Bb(3042);Bb(3008);return;case 2:$z=AHs(e,h);if(C()){break _;}k=$z;Cp(3553,k);BU(1.0,1.0,1.0,0.5);B3();e=a.bN;d=c.h9;k=c.h$;j=c.h_;$p=3;case 3:$z=ACt(e,d,k,j);if(C()){break _;}j=$z;if(j<=0)h=null;else{L();h=BeO.data[j];}Bb(3008);OD((-3.0),(-3.0));Ba(32823);Bz(g);l=b.cr;m=b.d-b.cr;n=f;Fa(g, -(l
+m*n), -(b.b7+(b.j-b.b7)*n), -(b.cs+(b.e-b.cs)*n));ADl(g);if(h===null){L();h=BeU;}b=a.D5;d=c.h9;k=c.h$;j=c.h_;o=240+(a.tH*10.0|0)|0;$p=4;case 4:AMw(b,h,d,k,j,o);if(C()){break _;}Br(g);Fa(g,0.0,0.0,0.0);OD(0.0,0.0);Bb(32823);Ba(3008);Gr(1);BD();Bb(3042);Bb(3008);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AGe(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bP.k.bw)return;if(!d&&!c.k4){Ba(3042);Df(770,771);BU(0.0,0.0,0.0,0.4000000059604645);Bb(3553);Gr(0);e=a.bN;d=c.h9;g=c.h$;h=c.h_;$p=1;continue _;}return;case 1:$z=ACt(e,d,g,h);if(C()){break _;}g=$z;if(g<=0){Gr(1);Ba(3553);Bb(3042);return;}i=b.cr;j=b.d-b.cr;k=f;i=i+j*k;j=b.b7+(b.j-b.b7)*k;k=b.cs
+(b.e-b.cs)*k;L();b=BeO.data[g];e=a.bN;d=c.h9;g=c.h$;h=c.h_;$p=2;case 2:$z=b.oR(e,d,g,h);if(C()){break _;}b=$z;b=T8(Dv(b,0.0020000000949949026,0.0020000000949949026,0.0020000000949949026), -i, -j, -k);if(!a.bP.k.bw){BA();c=BeK;Gh(c,3);Bf(c,b.R,b.M,b.S);Bf(c,b.V,b.M,b.S);Bf(c,b.V,b.M,b.W);Bf(c,b.R,b.M,b.W);Bf(c,b.R,b.M,b.S);Br(c);Gh(c,3);Bf(c,b.R,b.U,b.S);Bf(c,b.V,b.U,b.S);Bf(c,b.V,b.U,b.W);Bf(c,b.R,b.U,b.W);Bf(c,b.R,b.U,b.S);Br(c);Gh(c,1);Bf(c,b.R,b.M,b.S);Bf(c,b.R,b.U,b.S);Bf(c,b.V,b.M,b.S);Bf(c,b.V,b.U,b.S);Bf(c,
b.V,b.M,b.W);Bf(c,b.V,b.U,b.W);Bf(c,b.R,b.M,b.W);Bf(c,b.R,b.U,b.W);Br(c);}Gr(1);Ba(3553);Bb(3042);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Tl(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=GJ(b,16);i=GJ(c,16);j=GJ(d,16);k=GJ(e,16);l=GJ(f,16);m=GJ(g,16);while(h<=k){n=h%a.dr|0;if(n<0)n=n+a.dr|0;o=i;while(o<=l){p=o%a.dE|0;if(p<0)p=p+a.dE|0;q=j;while(q<=m){r=q%a.j6|0;if(r<0)r=r+a.j6|0;s=Bj(Bj(r,a.dE)+p|0,a.dr)+n|0;t=a.c8.data[s];if(!t.i1)S(a.eI,t);KU(t);q=q+1|0;}o=o+1|0;}h=h+1|0;}}
function Rl(a,b,c,d){Tl(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AOF(a,b,c,d,e,f,g){Tl(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function ARI(a,b,c){var d;d=0;while(d<a.c8.data.length){if(!AHv(a.c8.data[d])&&!(a.c8.data[d].fu&&(d+a.q7|0)&15))AR9(a.c8.data[d],b);d=d+1|0;}a.q7=a.q7+1|0;}
function ACZ(a,b,c,d,e,f,g){return;}
function AH3(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;if(a.bP.k.bw)return;i=a.bN.bi.d-c;j=a.bN.bi.j-d;k=a.bN.bi.e-e;if(i*i+j*j+k*k<=256.0){if(b===B(213)){l=a.bP.c5;m=new Sw;FA(m,a.bN,c,d,e,f,g,h);m.hY=1.0;m.ic=1.0;m.io=1.0;m.e5=32;D1(m,0.019999999552965164,0.019999999552965164);m.dq=m.dq*(N(m.n)*0.6000000238418579+0.20000000298023224);m.g=f*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.i=g*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.h=h*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.cw
=8.0/(BP()*0.8+0.2)|0;El(l,m);}else if(b===B(256))El(a.bP.c5,A79(a.bN,c,d,e,1.0));else if(b===B(223)){b=a.bP.c5;l=new QY;FA(l,a.bN,c,d,e,f,g,h);l.g=f+(BP()*2.0-1.0)*0.05000000074505806;l.i=g+(BP()*2.0-1.0)*0.05000000074505806;l.h=h+(BP()*2.0-1.0)*0.05000000074505806;n=N(l.n)*0.30000001192092896+0.699999988079071;l.io=n;l.ic=n;l.hY=n;l.dq=N(l.n)*N(l.n)*6.0+1.0;l.cw=(16.0/(N(l.n)*0.8+0.2)|0)+2|0;El(b,l);}else if(b!==B(257)){if(b===B(254))El(a.bP.c5,BcH(a.bN,c,d,e));else if(b===B(214))El(a.bP.c5,Bcu(a.bN,c,d,e,
f,g,h));else if(b===B(255))El(a.bP.c5,A79(a.bN,c,d,e,2.5));}else{b=a.bP.c5;l=new OZ;FA(l,a.bN,c,d,e,f,g,h);l.g=l.g*0.009999999776482582+f;l.i=l.i*0.009999999776482582+g;l.h=l.h*0.009999999776482582+h;N(l.n);N(l.n);N(l.n);N(l.n);N(l.n);N(l.n);l.DM=l.dq;l.io=1.0;l.ic=1.0;l.hY=1.0;l.cw=(8.0/(BP()*0.8+0.2)|0)+4|0;l.o3=1;l.e5=48;El(b,l);}}}
function A$q(a,b){return;}
function ATp(a,b){return;}
function Vy(a){var b;b=0;while(b<a.c8.data.length){if(a.c8.data[b].ol){if(!a.c8.data[b].i1)S(a.eI,a.c8.data[b]);KU(a.c8.data[b]);}b=b+1|0;}}
function AG_(){var a=this;CS.call(a);a.vb=0.0;a.yr=null;a.t4=null;}
function LL(){var a=new AG_();A4o(a);return a;}
function A4o(a){var b,c;DQ(a);a.vb=0.0;b=J(B4,106);c=b.data;c[0]=B(386);c[1]=B(387);c[2]=B(388);c[3]=B(389);c[4]=B(390);c[5]=B(391);c[6]=B(392);c[7]=B(393);c[8]=B(394);c[9]=B(395);c[10]=B(396);c[11]=B(397);c[12]=B(398);c[13]=B(399);c[14]=B(400);c[15]=B(401);c[16]=B(402);c[17]=B(403);c[18]=B(404);c[19]=B(405);c[20]=B(406);c[21]=B(407);c[22]=B(408);c[23]=B(409);c[24]=B(410);c[25]=B(411);c[26]=B(412);c[27]=B(413);c[28]=B(414);c[29]=B(415);c[30]=B(416);c[31]=B(417);c[32]=B(418);c[33]=B(419);c[34]=B(420);c[35]=B(421);c[36]
=B(422);c[37]=B(423);c[38]=B(424);c[39]=B(425);c[40]=B(426);c[41]=B(427);c[42]=B(428);c[43]=B(429);c[44]=B(430);c[45]=B(431);c[46]=B(432);c[47]=B(433);c[48]=B(434);c[49]=B(435);c[50]=B(407);c[51]=B(436);c[52]=B(437);c[53]=B(438);c[54]=B(439);c[55]=B(440);c[56]=B(441);c[57]=B(442);c[58]=B(443);c[59]=B(444);c[60]=B(445);c[61]=B(446);c[62]=B(447);c[63]=B(448);c[64]=B(449);c[65]=B(450);c[66]=B(451);c[67]=B(452);c[68]=B(453);c[69]=B(454);c[70]=B(455);c[71]=B(456);c[72]=B(457);c[73]=B(458);c[74]=B(459);c[75]=B(460);c[76]
=B(461);c[77]=B(462);c[78]=B(463);c[79]=B(464);c[80]=B(465);c[81]=B(466);c[82]=B(467);c[83]=B(468);c[84]=B(469);c[85]=B(470);c[86]=B(471);c[87]=B(472);c[88]=B(473);c[89]=B(474);c[90]=B(475);c[91]=B(476);c[92]=B(477);c[93]=B(478);c[94]=B(479);c[95]=B(480);c[96]=B(481);c[97]=B(482);c[98]=B(483);c[99]=B(484);c[100]=B(485);c[101]=B(486);c[102]=B(487);c[103]=B(488);c[104]=B(489);c[105]=B(490);a.yr=b;a.t4=a.yr.data[BP()*a.yr.data.length|0];}
function A5p(a){a.vb=a.vb+0.009999999776482582;}
function ANK(a,b,c){return;}
function AIr(a){DG(a.bH);S(a.bH,Dj(1,(a.bm/2|0)-100|0,(a.bE/4|0)+48|0,B(491)));S(a.bH,Dj(2,(a.bm/2|0)-100|0,(a.bE/4|0)+72|0,B(492)));S(a.bH,Dj(3,(a.bm/2|0)-100|0,(a.bE/4|0)+96|0,B(493)));S(a.bH,Dj(0,(a.bm/2|0)-100|0,((a.bE/4|0)+120|0)+12|0,B(494)));Z(a.bH,1).gB=0;Z(a.bH,2).gB=0;if(a.I.kW===null)Z(a.bH,1).gB=0;}
function ACn(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cl){c=a.I;d=AIM(a,a.I.k);$p=1;continue _;}if(b.cl!=1)return;b=a.I;c=A$W(a);$p=2;continue _;case 1:ADS(c,d);if(C()){break _;}if(b.cl!=1)return;b=a.I;c=A$W(a);$p=2;case 2:ADS(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function Zz(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}BA();e=BeK;f=3553;g=a.I.bo;h=B(495);$p=2;case 2:$z=AHs(g,h);if(C()){break _;}i=$z;Cp(f,i);BU(1.0,1.0,1.0,1.0);ES(e,16777215);CH(a,(a.bm-256|0)/2|0,30,0,0,256,49);B3();Bw((a.bm/2|0)+90|0,70.0,0.0);Bv((-20.0),0.0,0.0,1.0);j=Bq(Long_toNumber(Long_rem(B$(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Dw(a.b0,a.t4)+32|0);CC(k,k,k);DE(a,a.b0,a.t4,0,(-8),16776960);BD();Cy(a.b0,B(496),(a.bm-Dw(a.b0,B(496))|0)-2|0,a.bE-10|0,16777215);l=Ku();m=JW();n=Long_sub(l,Kb());g=new T;V(g);e=U(H(C6(H(C6(H(g,B(497)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(498)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(499)));Cy(a.b0,e,(a.bm-Dw(a.b0,e)|0)-2|0,2,8421504);g=new T;V(g);e=U(H(C6(H(C6(H(g,
B(500)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(501)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(502)));Cy(a.b0,e,(a.bm-Dw(a.b0,e)|0)-2|0,12,8421504);$p=3;case 3:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function OV(){var a=this;D.call(a);a.mR=null;a.cD=null;a.jc=null;a.ss=null;}
function El(a,b){var c;c=b.xv();S(a.cD.data[c],b);}
function AAU(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(b<3){c=0;if(c<a.cD.data[b].p){d=Z(a.cD.data[b],c);$p=1;continue _;}b=b+1|0;}return;case 1:d.en();if(C()){break _;}if(!d.cQ)e=c;else{d=a.cD.data[b];e=c+(-1)|0;En(d,c);}c=e+1|0;while(true){if(c<a.cD.data[b].p){d=Z(a.cD.data[b],c);continue _;}b=b+1|0;if(b>=3)break;c=0;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AA_(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=BC(b.v*3.1415927410125732/180.0);e=Bq(b.v*3.1415927410125732/180.0);f= -e*Bq(b.J*3.1415927410125732/180.0);g=d*Bq(b.J*3.1415927410125732/180.0);h=BC(b.J*3.1415927410125732/180.0);i=b.cr;j=b.d-b.cr;k=c;BkL=i+j*k;BkM=b.b7+(b.j-b.b7)*k;BkN=b.cs
+(b.e-b.cs)*k;l=0;while(l<2){if(a.cD.data[l].p){if(!l){b=a.jc;m=B(503);$p=1;continue _;}if(l==1){b=a.jc;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeK;Bz(m);n=0;if(n<a.cD.data[l].p){o=Z(a.cD.data[l],n);$p=3;continue _;}Br(m);}l=l+1|0;}return;case 1:$z=AHs(b,m);if(C()){break _;}p=$z;a:while(true){if(l==1){b=a.jc;m=B(179);$p=2;continue _;}Cp(3553,p);BA();m=BeK;Bz(m);n=0;if(n<a.cD.data[l].p){o=Z(a.cD.data[l],n);$p=3;continue _;}Br(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].p)continue;else break;}p
=0;if(!l){b=a.jc;m=B(503);continue _;}}return;case 2:$z=AHs(b,m);if(C()){break _;}p=$z;a:while(true){Cp(3553,p);BA();m=BeK;Bz(m);n=0;if(n<a.cD.data[l].p){o=Z(a.cD.data[l],n);$p=3;continue _;}Br(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].p)continue;else break;}p=0;if(!l){b=a.jc;m=B(503);$p=1;continue _;}if(l==1){b=a.jc;m=B(179);continue _;}}return;case 3:o.kN(m,c,d,h,e,f,g);if(C()){break _;}n=n+1|0;a:while(true){if(n<a.cD.data[l].p){o=Z(a.cD.data[l],n);continue _;}Br(m);while(true){l=l+1|0;if(l>=
2)break a;if(!a.cD.data[l].p)continue;else break;}if(!l){b=a.jc;m=B(503);$p=1;continue _;}if(l==1){b=a.jc;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeK;Bz(m);n=0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ABS(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=2;if(a.cD.data[d].p){BA();e=BeK;f=0;if(f<a.cD.data[d].p){g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;$p=1;continue _;}}return;case 1:g.kN(e,c,h,i,j,k,l);if(C()){break _;}f=f+1|0;if(f>=a.cD.data[d].p)return;g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;continue _;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function OX(a,b){var c;a.mR=b;c=0;while(c<3){DG(a.cD.data[c]);c=c+1|0;}}
function AEB(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.mR;$p=1;case 1:a:{$z=ACt(e,b,c,d);if(C()){break _;}f=$z;if(f){L();e=BeO.data[f];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;El(a,AY2(a.mR,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,e));l
=l+1|0;}k=k+1|0;}g=g+1|0;}}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function YY(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.mR;$p=1;case 1:$z=ACt(f,b,c,d);if(C()){break _;}g=$z;if(g){L();h=BeO.data[g];i=b;j=i+Cl(a.ss)*(h.db-h.c_-0.20000000298023224)+0.10000000149011612+h.c_;k=c;l=k+Cl(a.ss)*(h.cE-h.cL-0.20000000298023224)+0.10000000149011612+h.cL;m=d;n=m+Cl(a.ss)*(h.dc-h.c$-0.20000000298023224)
+0.10000000149011612+h.c$;if(!e)l=k+h.cL-0.10000000149011612;if(e==1)l=k+h.cE+0.10000000149011612;if(e==2)n=m+h.c$-0.10000000149011612;if(e==3)n=m+h.dc+0.10000000149011612;if(e==4)j=i+h.c_-0.10000000149011612;if(e==5)j=i+h.db+0.10000000149011612;El(a,X8(APq(AY2(a.mR,j,l,n,0.0,0.0,0.0,h),0.20000000298023224),0.6000000238418579));}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Xu(a){var b;b=new T;V(b);return U(Be(H(b,B(3)),(a.cD.data[0].p+a.cD.data[1].p|0)+a.cD.data[2].p|0));}
function Nn(){var a=this;Gc.call(a);a.g5=null;a.vr=null;a.b2=null;a.FR=null;a.rT=0;a.Ej=0.0;a.IE=0.0;}
var BkO=null;function API(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=FG(a.b2.cc,a.b2.bB);g=AEn(f);h=Zb(f);i=a.b2.e8;LB(a.b2.eT);Ba(3042);BU(1.0,1.0,1.0,1.0);c=3553;f=a.b2.bo;j
=B(504);$p=1;case 1:$z=AHs(f,j);if(C()){break _;}d=$z;Cp(c,d);k=a.b2.f.K;a.mP=(-90.0);l=g/2|0;m=l-91|0;n=h-22|0;CH(a,m,n,0,0,182,22);CH(a,(m-1|0)+(k.bM*20|0)|0,n-1|0,0,22,24,22);c=3553;f=a.b2.bo;j=B(505);$p=2;case 2:$z=AHs(f,j);if(C()){break _;}d=$z;Cp(c,d);Ba(3042);Df(775,769);CH(a,l-7|0,(h/2|0)-7|0,0,0,16,16);Bb(3042);o=((a.b2.f.dx/3|0)%2|0)!=1?0:1;if(a.b2.f.dx<10)o=0;p=a.b2.f.bU;q=a.b2.f.tE;NF(a.vr,Long_fromInt(Bj(a.rT,312871)));if(!AJ3(a.b2.cB)){Bb(3042);Ba(32826);B3();Bv(180.0,1.0,0.0,0.0);Hu();BD();r=
0;c=l-90|0;m=(h-16|0)-3|0;if(r>=9){DS();Bb(32826);if(!a.b2.k.ln)Cy(i,B(506),2,2,16777215);else{Cy(i,BL(H(H(H(BX(),B(507)),a.b2.lx),B(27))),2,2,16777215);Cy(i,Mg(a.b2),2,12,16777215);Cy(i,Oi(a.b2),2,22,16777215);Cy(i,MH(a.b2),2,32,16777215);s=Ku();t=JW();u=Long_sub(t,Kb());j=BL(H(C6(H(C6(H(C6(H(BX(),B(508)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(501)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(509)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(499)));Hq(a,i,j,(g-Dw(i,
j)|0)-2|0,2,14737632);f=BL(H(C6(H(C6(H(BX(),B(500)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(501)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(502)));Hq(a,i,f,(g-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<De(a.g5)&&m<10){if(Z(a.g5,m).oA<200)Cy(i,Z(a.g5,m).yx,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;}r=ACY(a.b2.f);n=0;v=h-32|0;w=l+91|0;d=R(p,4);while(n<10){if(r>0){x=(w-(n*8|0)|0)-9|0;c=R((n*2|0)+1|0,r);if(c<0)CH(a,x,v,34,9,9,9);if(!c)CH(a,
x,v,25,9,9,9);if(c>0)CH(a,x,v,16,9,9,9);}y=0;if(o)y=1;z=m+(n*8|0)|0;c=d>0?v:v+E(a.vr,2)|0;CH(a,z,c,16+(y*9|0)|0,0,9,9);if(o){e=R((n*2|0)+1|0,q);if(e<0)CH(a,z,c,70,0,9,9);if(!e)CH(a,z,c,79,0,9,9);}e=R((n*2|0)+1|0,p);if(e<0)CH(a,z,c,52,0,9,9);if(!e)CH(a,z,c,61,0,9,9);n=n+1|0;}f=a.b2.f;j=BfP;$p=4;continue _;case 3:AEu(a,r,n,m,b);if(C()){break _;}r=r+1|0;if(r>=9){DS();Bb(32826);if(!a.b2.k.ln)Cy(i,B(506),2,2,16777215);else{Cy(i,BL(H(H(H(BX(),B(507)),a.b2.lx),B(27))),2,2,16777215);Cy(i,Mg(a.b2),2,12,16777215);Cy(i,
Oi(a.b2),2,22,16777215);Cy(i,MH(a.b2),2,32,16777215);s=Ku();t=JW();u=Long_sub(t,Kb());j=BL(H(C6(H(C6(H(C6(H(BX(),B(508)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(501)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(509)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(499)));Hq(a,i,j,(g-Dw(i,j)|0)-2|0,2,14737632);f=BL(H(C6(H(C6(H(BX(),B(500)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(501)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(502)));Hq(a,i,f,(g
-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<De(a.g5)&&m<10){if(Z(a.g5,m).oA<200)Cy(i,Z(a.g5,m).yx,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;continue _;case 4:a:{$z=AGF(f,j);if(C()){break _;}c=$z;if(c){c=Uo((a.b2.f.gb-2|0)*10.0/300.0)|0;ba=(Uo(a.b2.f.gb*10.0/300.0)|0)-c|0;x=0;d=c+ba|0;p=v-9|0;while(true){if(x>=d)break a;if(x>=c)CH(a,m+(x*8|0)|0,p,25,18,9,9);else CH(a,m+(x*8|0)|0,p,16,18,9,9);x=x+1|0;}}}Bb(3042);Ba(32826);B3();Bv(180.0,1.0,0.0,0.0);Hu();BD();r=0;c=l-90|0;m=(h-
16|0)-3|0;if(r>=9){DS();Bb(32826);if(!a.b2.k.ln)Cy(i,B(506),2,2,16777215);else{Cy(i,BL(H(H(H(BX(),B(507)),a.b2.lx),B(27))),2,2,16777215);Cy(i,Mg(a.b2),2,12,16777215);Cy(i,Oi(a.b2),2,22,16777215);Cy(i,MH(a.b2),2,32,16777215);s=Ku();t=JW();u=Long_sub(t,Kb());j=BL(H(C6(H(C6(H(C6(H(BX(),B(508)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(501)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(509)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(499)));Hq(a,i,j,(g-Dw(i,j)|0)-2|0,2,14737632);f
=BL(H(C6(H(C6(H(BX(),B(500)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(501)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(502)));Hq(a,i,f,(g-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<De(a.g5)&&m<10){if(Z(a.g5,m).oA<200)Cy(i,Z(a.g5,m).yx,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function AEu(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.b2.f.K.bg.data[b];if(f===null)return;g=f.mG-e;b=R(g,0.0);if(b>0){B3();h=1.0+g/5.0;i=c+8|0;g=i;j=d+12|0;Bw(g,j,0.0);CC(1.0/h,(h+1.0)/2.0,1.0);Bw( -i, -j,0.0);}k=BkO;l=a.b2.e8;m=a.b2.bo;$p=1;case 1:AGf(k,l,m,f,c,d);if(C()){break _;}if(b>0)BD();Lm(BkO,a.b2.e8,a.b2.bo,f,c,d);return;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AKx(a){var b,c;a.rT=a.rT+1|0;b=0;while(b<a.g5.p){c=Z(a.g5,b);c.oA=c.oA+1|0;b=b+1|0;}}
function Z8(){BkO=XY();}
function Jr(){var a=this;EQ.call(a);a.K=null;a.AG=0;a.k0=0;a.qy=0.0;a.kR=0.0;a.CJ=null;a.x7=0;}
function AFV(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKS(a);if(C()){break _;}a.qy=a.kR;a.kR=0.0;return;default:E_();}}C3().s(a,$p);}
function AK6(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.c3=1.6200000047683716;D1(a,0.6000000238418579,1.7999999523162842);if(a.m!==null){if(a.j>0.0){CT(a,a.d,a.j,a.e);b=a.m;c=a.L;$p=1;continue _;}a.h=0.0;a.i=0.0;a.g=0.0;a.J=0.0;}if(a.m!==null)a.m.bi=a;a.bU=20;a.c1=0;return;case 1:$z=XQ(b,a,c);if(C()){break _;}b=$z;if(b.p){a.j=a.j+1.0;if(a.j>0.0){CT(a,a.d,a.j,a.e);b=a.m;c=a.L;continue _;}}a.h=0.0;a.i=0.0;a.g=0.0;a.J=0.0;if(a.m!==null)a.m.bi
=a;a.bU=20;a.c1=0;return;default:E_();}}C3().s(a,b,c,$p);}
function Y1(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.m.i0&&a.bU<20&&!((a.oP%20|0)*4|0))UK(a,1);AEg(a.K);a.qy=a.kR;$p=1;case 1:ACm(a);if(C()){break _;}b=Ce(a.g*a.g+a.h*a.h);c=Io( -a.i*0.20000000298023224)*15.0;if(b>0.10000000149011612)b=0.10000000149011612;if(!(a.cx&&a.bU>0))b=0.0;if(!(!a.cx&&a.bU>0))c=0.0;a.kR=a.kR+(b-a.kR)*0.4000000059604645;a.jk=a.jk+(c-a.jk)*0.800000011920929;if(a.bU<=0)return;d
=a.m;e=Dv(a.L,1.0,0.0,1.0);$p=2;case 2:a:{$z=ADI(d,a,e);if(C()){break _;}d=$z;if(d!==null){f=0;while(true){if(f>=d.p)break a;Z(d,f).xE(a);f=f+1|0;}}}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A4w(a){return a.k0;}
function ALc(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(a,0.20000000298023224,0.20000000298023224);CT(a,a.d,a.j,a.e);a.i=0.10000000149011612;if(!DA(a.CJ,B(510))){c=a.K;$p=1;continue _;}c=new Cd;BB();Gm(c,BhN,1);d=1;$p=2;continue _;case 1:AIY(c);if(C()){break _;}if(b===null){a.h=0.0;a.g=0.0;}else{a.g= -BC((a.kD+a.v)*3.1415927410125732/180.0)*0.10000000149011612;a.h= -Bq((a.kD+a.v)*3.1415927410125732/180.0)*0.10000000149011612;}a.c3
=0.10000000149011612;return;case 2:AQt(a,c,d);if(C()){break _;}c=a.K;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,$p);}
function AZs(a,b,c){a.k0=a.k0+c|0;}
function ALQ(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;$p=1;case 1:AQt(a,b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AQt(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;d=Hb(a.m,a.d,a.j-0.30000001192092896,a.e,b);d.g$=40;if(c){e=N(a.n)*0.5;f=N(a.n)*3.1415927410125732*2.0;d.g= -Bq(f)*e;d.h=BC(f)*e;d.i=0.20000000298023224;}else{d.g= -Bq(a.v/180.0*3.1415927410125732)*BC(a.J/180.0*3.1415927410125732)*0.30000001192092896;d.h=BC(a.v/180.0*3.1415927410125732)
*BC(a.J/180.0*3.1415927410125732)*0.30000001192092896;d.i= -Bq(a.J/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=N(a.n)*3.1415927410125732*2.0;g=0.019999999552965164*N(a.n);h=d.g;i=e;j=GB(i);k=g;d.g=h+j*k;d.i=d.i+(N(a.n)-N(a.n))*0.10000000149011612;d.h=d.h+Go(i)*k;}b=a.m;$p=1;case 1:AOg(b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AKR(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ADu(a.K,b);b=BfP;$p=1;case 1:$z=AGF(a,b);if(C()){break _;}d=$z;if(d)c=c/5.0;if(!a.cx)c=c/5.0;return c;default:E_();}}C3().s(a,b,c,d,$p);}
function M4(a,b){return ADT(a.K,b);}
function A5g(a){return 0.11999999731779099;}
function Ym(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hj=0;if(a.bU<=0)return 0;if(a.dx>a.oY/2.0)return 0;if(!(!(b instanceof DP)&&!(b instanceof Jp))){if(!a.m.i0)c=0;if(a.m.i0==1)c=(c/3|0)+1|0;if(a.m.i0==3)c=(c*3|0)/2|0;}d=Bj(c,25-Tx(a.K)|0)+a.x7|0;ADY(a.K,c);c=d/25|0;a.x7=d%25|0;if(!c)return 0;$p=1;case 1:$z=ABZ(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,$p);}
function AGA(){var a=this;Jr.call(a);a.hW=null;a.k1=null;}
function A6H(a,b,c){var d=new AGA();AYW(d,a,b,c);return d;}
function AYW(a,b,c,d){var e;Fz(a,c);a.oY=20;a.dF=0.0;a.e7=0.0;a.G3=1;a.yp=B(374);a.G2=1;a.D1=0.0;a.EY=null;a.Js=1.0;a.uY=0;a.Jt=0.0;a.bU=10;a.kD=0.0;a.c1=0;a.dy=0;a.Ci=0;a.Fd=(-1);a.Jy=BP()*0.8999999761581421+0.10000000149011612;a.hj=0;a.hF=0;a.zP=0.0;a.sY=0.699999988079071;a.mz=1;a.Im=(BP()+1.0)*0.009999999776482582;CT(a,a.d,a.j,a.e);a.JF=BP()*12398.0;a.v=BP()*3.1415927410125732*2.0;a.G1=1.0;a.rp=0.5;e=new Vx;e.bg=J(Cd,36);e.cd=J(Cd,4);e.bM=0;e.nz=a;a.K=e;a.AG=0;a.k0=0;a.x7=0;Ks(a,c.fi+0.5,c.pY,c.fh+0.5,0.0,
0.0);a.c3=1.6200000047683716;a.bU=20;a.EY=B(511);a.D1=180.0;a.nF=20;a.yp=B(374);a.k1=b;if(c.bi!==null)Ca(c.bi);c.bi=a;if(d!==null&&d.oi!==null&&Bh(d.oi)>0){b=new T;V(b);a.tI=U(H(H(H(b,B(512)),d.oi),B(513)));}a.CJ=d.oi;}
function AAM(a){a.iJ=a.hW.kA;a.gC=a.hW.kp;a.hF=a.hW.ul;}
function ALl(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOA(a.hW,a);$p=1;case 1:Y1(a);if(C()){break _;}return;default:E_();}}C3().s(a,$p);}
function ARG(a){AOY(a.hW);}
function Et(a,b,c){APr(a.hW,b,c);}
function ABL(a,b){Fq(b,B(514),a.bU<<16>>16);Fq(b,B(515),a.dD<<16>>16);Fq(b,B(516),a.c1<<16>>16);Fq(b,B(517),a.dy<<16>>16);Gv(b,B(518),a.k0);HC(b,B(325),AL4(a.K,L8()));}
function AOV(a,b){var c;a.bU=FH(b,B(514));if(!YW(b,B(514)))a.bU=10;a.dD=FH(b,B(515));a.c1=FH(b,B(516));a.dy=FH(b,B(517));a.k0=FS(b,B(518));c=Kg(b,B(325));ARm(a.K,c);}
function YX(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k1;d=Bb1(a.K,b);$p=1;case 1:ADS(c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AI9(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k1;d=new SH;DQ(d);d.z_=B(519);d.f4=0;d.fS=b;$p=1;case 1:ADS(c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ANp(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k1;c=new Xg;d=a.K;H$(c);c.mm=A0B(c,3,3);c.uo=A5h();S(c.c6,A3q(c,c.mm,c.uo,0,124,35));e=0;while(e<3){f=0;while(f<3){S(c.c6,D6(c,c.mm,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){S(c.c6,D6(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){S(c.c6,D6(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:ADS(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AO2(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k1;d=new Wg;e=a.K;H$(d);d.sI=b;S(d.c6,D6(d,b,0,56,17));S(d.c6,D6(d,b,1,56,53));S(d.c6,D6(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){S(d.c6,D6(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){S(d.c6,D6(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:ADS(c,d);if(C()){break _;}return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function Kp(a){return D9(a.K);}
function Jw(a){AFB(a.K,a.K.bM,null);}
function ADt(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ARS(a.K,b);if(c<=0)return;$p=1;case 1:b.fq(a,c);if(C()){break _;}d=Kp(a);if(d!==null&&b instanceof EQ){AEY(d,b);if(d.q<=0)Jw(a);}return;default:E_();}}C3().s(a,b,c,d,$p);}
function RS(a,b){var c,d;c=a.k1.c5;d=new UY;FA(d,a.k1.A,b.d,b.j,b.e,b.g,b.i,b.h);d.p8=0;d.rb=0;d.mv=b;d.hP=a;d.rb=3;d.AQ=(-0.5);El(c,d);}
function ACY(a){return Tx(a.K);}
function Vk(a,b){var c;if(!b.uH(a)){c=Kp(a);if(c!==null&&b instanceof EQ){AEy(c,b);if(c.q<=0)Jw(a);}}}
function AJF(){D.call(this);}
function BkP(){var a=new AJF();AWa(a);return a;}
function AWa(a){return;}
function AMF(b){Bd();Beg=b;if(b){BdX=0.0;BdY=0.0;setTimeout(Cu(new Qv,"onTimer"),200);}else{Bee=B$();if(Bef)clearTimeout(Bef);Bef=0;BdC.exitPointerLock();}}
function Fx(){var b,c;a:{Bd();Bea=null;if(!PS(BdT)){b=Te(BdT,0);Bea=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function Cx(){Bd();return Bea===null?0:DA($rt_str(Bea.type),B(520));}
function ARV(){Bd();return Bea===null?(-1):Bea.clientX;}
function XO(){Bd();return Bea===null?(-1):BdE.clientHeight-Bea.clientY|0;}
function CV(){var b;Bd();if(Bea===null)b=(-1);else{b=Bea.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function B9(b){Bd();return Bec.data[b];}
function G1(){Bd();return !DA(B(521),$rt_str(Bea.type))?0:Bea.deltaY===0.0?0:Bea.deltaY<=0.0?1:(-1);}
function Qj(){D.call(this);}
var BkQ=null;function BkR(){var a=new Qj();ANL(a);return a;}
function ANL(a){return;}
function Bq(b){return BkQ.data[(b*651.8986206054688|0)&4095];}
function BC(b){return BkQ.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function D_(b){return Ed(b);}
function Ce(b){return Ed(b);}
function K3(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function K(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function GJ(b,c){return b>=0?b/c|0: -(( -b-1|0)/c|0)-1|0;}
function AL3(){var b,c,d,e;BkQ=$rt_createFloatArray(4096);b=0;while(b<4096){BkQ.data[b]=Go((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=BkQ.data;e=c;d[(e*11.377778053283691|0)&4095]=Go(e*0.01745329238474369);c=c+90|0;}}
function Vj(){var a=this;D.call(a);a.Ev=null;a.bJ=0;}
function E8(a,b){var c=new Vj();A1T(c,a,b);return c;}
function A1T(a,b,c){a.Ev=b;a.bJ=c;}
function FB(){}
function Vx(){var a=this;D.call(a);a.bg=null;a.cd=null;a.bM=0;a.nz=null;}
function D9(a){return a.bg.data[a.bM];}
function SV(a,b){var c;c=0;while(true){if(c>=a.bg.data.length)return (-1);if(a.bg.data[c]!==null&&a.bg.data[c].bC==b)break;c=c+1|0;}return c;}
function RC(a){var b;b=0;while(true){if(b>=a.bg.data.length)return (-1);if(a.bg.data[b]===null)break;b=b+1|0;}return b;}
function ARh(a,b,c){var d;d=SV(a,b);if(d>=0&&d<9)a.bM=d;}
function F2(a,b){if(b>0)b=1;if(b<0)b=(-1);a.bM=a.bM-b|0;while(a.bM<0){a.bM=a.bM+9|0;}while(a.bM>=9){a.bM=a.bM-9|0;}}
function AEg(a){var b,c;b=0;while(b<a.bg.data.length){if(a.bg.data[b]!==null&&a.bg.data[b].mG>0){c=a.bg.data[b];c.mG=c.mG-1|0;}b=b+1|0;}}
function AGN(a,b){var c,d;c=SV(a,b);if(c<0)return 0;d=a.bg.data[c];b=d.q-1|0;d.q=b;if(b<=0)a.bg.data[c]=null;return 1;}
function U6(a,b){var c,d,e,f;if(!b.el){c=b.bC;d=b.q;e=0;a:{while(true){if(e>=a.bg.data.length){e=(-1);break a;}if(a.bg.data[e]!==null&&a.bg.data[e].bC==c&&a.bg.data[e].q<EB(a.bg.data[e])&&a.bg.data[e].q<64)break;e=e+1|0;}}if(e<0)e=RC(a);if(e>=0){if(a.bg.data[e]===null)a.bg.data[e]=Ky(c,0);c=d<=(EB(a.bg.data[e])-a.bg.data[e].q|0)?d:EB(a.bg.data[e])-a.bg.data[e].q|0;if(c>(64-a.bg.data[e].q|0))c=64-a.bg.data[e].q|0;if(c){d=d-c|0;f=a.bg.data[e];f.q=f.q+c|0;a.bg.data[e].mG=5;}}b.q=d;if(!b.q)return 1;}c=RC(a);if(c
<0)return 0;a.bg.data[c]=b;a.bg.data[c].mG=5;return 1;}
function Em(a,b,c){var d,e,f;d=a.bg;if(b>=a.bg.data.length){d=a.cd;b=b-a.bg.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].q<=c){e=d[b];d[b]=null;return e;}f=EF(d[b],c);if(!d[b].q)d[b]=null;return f;}
function AFB(a,b,c){var d;d=a.bg;if(b>=a.bg.data.length){d=a.cd;b=b-a.bg.data.length|0;}d.data[b]=c;}
function ADu(a,b){var c;c=1.0;if(a.bg.data[a.bM]!==null)c=c*AFg(a.bg.data[a.bM],b);return c;}
function AL4(a,b){var c,d,e;c=0;while(c<a.bg.data.length){if(a.bg.data[c]!==null){d=G8();JH(d,B(522),c<<24>>24);QJ(a.bg.data[c],d);Jn(b,d);}c=c+1|0;}e=0;while(e<a.cd.data.length){if(a.cd.data[e]!==null){d=G8();JH(d,B(522),(e+100|0)<<24>>24);QJ(a.cd.data[e],d);Jn(b,d);}e=e+1|0;}return b;}
function ARm(a,b){var c,d,e;a.bg=J(Cd,36);a.cd=J(Cd,4);c=0;while(c<AOt(b)){d=Fd(b,c);e=LA(d,B(522))&255;if(e>=0&&e<a.bg.data.length)a.bg.data[e]=A$9(d);if(e>=100&&e<(a.cd.data.length+100|0))a.cd.data[e-100|0]=A$9(d);c=c+1|0;}}
function Yn(a){return a.bg.data.length+4|0;}
function RK(a,b){var c;c=a.bg;if(b>=a.bg.data.length){c=a.cd;b=b-a.bg.data.length|0;}return c.data[b];}
function ATq(a){return B(325);}
function AZp(a){return 64;}
function ARS(a,b){var c;c=RK(a,a.bM);return c===null?1:AAi(c,b);}
function ADT(a,b){var c;if(b.b$!==Bg$&&b.b$!==Bhn)return 1;c=RK(a,a.bM);return c===null?0:AN9(c,b);}
function AIh(a,b){return a.cd.data[b];}
function Tx(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.cd.data.length){if(a.cd.data[e]!==null&&DK(a.cd.data[e]) instanceof F0){f=Kk(a.cd.data[e]);c=c+(f-a.cd.data[e].el|0)|0;d=d+f|0;b=b+DK(a.cd.data[e]).y$|0;}e=e+1|0;}if(!d)return 0;return (Bj(b-1|0,c)/d|0)+1|0;}
function ADY(a,b){var c;c=0;while(c<a.cd.data.length){if(a.cd.data[c]!==null&&DK(a.cd.data[c]) instanceof F0){FI(a.cd.data[c],b);if(!a.cd.data[c].q)a.cd.data[c]=null;}c=c+1|0;}}
function AIY(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(true){if(b>=a.bg.data.length){b=0;while(b<a.cd.data.length){if(a.cd.data[b]!==null){c=a.nz;d=a.cd.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bg.data[b]!==null)break;b=b+1|0;}c=a.nz;d=a.bg.data[b];e=1;$p=1;case 1:AQt(c,d,e);if(C()){break _;}a.bg.data[b]=null;while(true){b=b+1|0;if(b>=a.bg.data.length){b=0;while(b<a.cd.data.length){if(a.cd.data[b]
!==null){c=a.nz;d=a.cd.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bg.data[b]===null)continue;else break;}c=a.nz;d=a.bg.data[b];e=1;continue _;case 2:AQt(c,d,e);if(C()){break _;}a.cd.data[b]=null;while(true){b=b+1|0;if(b>=a.cd.data.length)break;if(a.cd.data[b]===null)continue;else{c=a.nz;d=a.cd.data[b];e=1;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AAl(a){return;}
function Du(){IV.call(this);}
function Ew(){var a=this;CS.call(a);a.br=null;a.e9=0;a.fk=0;a.c6=null;}
var BkS=null;function BkT(){var a=new Ew();H$(a);return a;}
function H$(a){DQ(a);a.br=null;a.e9=176;a.fk=166;a.c6=Ci();}
function ACe(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}e=(a.bm-a.e9|0)/2|0;f=(a.bE-a.fk|0)/2|0;$p=2;case 2:a.s1(d);if(C()){break _;}B3();Bv(180.0,1.0,0.0,0.0);Hu();BD();B3();Bw(e,f,0.0);BU(1.0,1.0,1.0,1.0);Ba(32826);g=0;if(g>=a.c6.p){if(a.br===null){Bb(32826);DS();Bb(2896);Bb(2929);a.lo();Ba(2896);Ba(2929);BD();return;}Bw(0.0,
0.0,32.0);h=BkS;i=a.b0;j=a.I.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c6,g);i=h.e1;l=h.lL;m=h.jK;n=h.jM;i=i.gw(l);if(i===null){l=h.rU();if(l>=0){Bb(2896);i=a.I.bo;j=a.I.bo;k=B(230);$p=5;continue _;}}j=BkS;k=a.b0;o=a.I.bo;$p=4;continue _;case 3:AGf(h,i,j,k,b,c);if(C()){break _;}Lm(BkS,a.b0,a.I.bo,a.br,b,c);Bb(32826);DS();Bb(2896);Bb(2929);a.lo();Ba(2896);Ba(2929);BD();return;case 4:AGf(j,k,o,i,m,n);if(C()){break _;}Lm(BkS,a.b0,a.I.bo,i,m,n);if(M6(h,b,c)){Bb(2896);Bb(2929);l=h.jK;p=h.jM;KK(a,
l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c6.p){if(a.br===null){Bb(32826);DS();Bb(2896);Bb(2929);a.lo();Ba(2896);Ba(2929);BD();return;}Bw(0.0,0.0,32.0);h=BkS;i=a.b0;j=a.I.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c6,g);i=h.e1;l=h.lL;m=h.jK;n=h.jM;i=i.gw(l);if(i===null){l=h.rU();if(l>=0){Bb(2896);i=a.I.bo;j=a.I.bo;k=B(230);$p=5;continue _;}}j=BkS;k=a.b0;o=a.I.bo;continue _;case 5:$z=AHs(j,k);if(C()){break _;}p=$z;Eb(i,p);CH(a,m,n,(l%16|0)*16|0,(l/16|
0)*16|0,16,16);Ba(2896);if(M6(h,b,c)){Bb(2896);Bb(2929);l=h.jK;p=h.jM;KK(a,l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c6.p){if(a.br===null){Bb(32826);DS();Bb(2896);Bb(2929);a.lo();Ba(2896);Ba(2929);BD();return;}Bw(0.0,0.0,32.0);h=BkS;i=a.b0;j=a.I.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c6,g);i=h.e1;l=h.lL;m=h.jK;n=h.jM;i=i.gw(l);if(i===null){l=h.rU();if(l>=0){Bb(2896);i=a.I.bo;j=a.I.bo;k=B(230);continue _;}}j=BkS;k=a.b0;o=a.I.bo;$p=4;continue _;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AQw(a,b,c){var d,e;d=0;while(true){if(d>=a.c6.p)return null;e=Z(a.c6,d);if(M6(e,b,c))break;d=d+1|0;}return e;}
function AN4(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(d&&d!=1)){e=AQw(a,b,c);if(e!==null){$p=1;continue _;}if(a.br!==null){f=(a.bm-a.e9|0)/2|0;g=(a.bE-a.fk|0)/2|0;if(!(b>=f&&c>=g&&b<(f+a.e9|0)&&c<(g+a.e9|0))){h=a.I.f;if(!d){e=a.br;$p=2;continue _;}if(d==1){e=EF(a.br,1);$p=3;continue _;}}}}return;case 1:a:{AKz(e);if(C()){break _;}i=ARu(e);if(!(i===null&&a.br===null)){if
(i!==null&&a.br===null){g=!d?i.q:(i.q+1|0)/2|0;a.br=e.e1.j2(e.lL,g);if(i.q){$p=4;continue _;}h=null;$p=5;continue _;}if(i===null&&a.br!==null&&e.s5(a.br)){g=d?1:a.br.q;if(g>e.e1.f5())g=e.e1.f5();h=EF(a.br,g);$p=7;continue _;}if(i!==null&&a.br!==null){if(!e.s5(a.br)){if(i.bC!=a.br.bC)break a;if(EB(a.br)<=1)break a;g=i.q;if(g<=0)break a;if((g+a.br.q|0)>EB(a.br))break a;h=a.br;h.q=h.q+g|0;EF(i,g);if(i.q){$p=8;continue _;}h=null;$p=9;continue _;}if(i.bC==a.br.bC){if(i.bC==a.br.bC){if(!d){g=a.br.q;if(g>(e.e1.f5()
-i.q|0))g=e.e1.f5()-i.q|0;if(g>(EB(a.br)-i.q|0))g=EB(a.br)-i.q|0;EF(a.br,g);if(!a.br.q)a.br=null;i.q=i.q+g|0;}else if(d==1){g=1;if(g>(e.e1.f5()-i.q|0))g=e.e1.f5()-i.q|0;if(g>(EB(a.br)-i.q|0))g=EB(a.br)-i.q|0;EF(a.br,g);if(!a.br.q)a.br=null;i.q=i.q+g|0;}}}else if(a.br.q<=e.e1.f5()){h=a.br;$p=6;continue _;}}}}return;case 2:ALQ(h,e);if(C()){break _;}a.br=null;if(d!=1)return;e=EF(a.br,1);$p=3;case 3:ALQ(h,e);if(C()){break _;}if(!a.br.q)a.br=null;return;case 4:e.Jj();if(C()){break _;}return;case 5:ALv(e,h);if(C())
{break _;}$p=4;continue _;case 6:ALv(e,h);if(C()){break _;}a.br=i;return;case 7:ALv(e,h);if(C()){break _;}if(!a.br.q)a.br=null;return;case 8:e.Jj();if(C()){break _;}return;case 9:ALv(e,h);if(C()){break _;}$p=8;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A9I(a,b,c,d){return;}
function AAt(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.I.k.fs.bJ)return;d=a.I;e=null;$p=1;case 1:ADS(d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AAW(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.br===null)return;b=a.I.f;c=a.br;$p=1;case 1:ALQ(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function A$2(a){return 0;}
function AJ_(){BkS=XY();}
function APM(){var a=this;Ew.call(a);a.jY=null;a.xA=null;a.Az=0.0;a.En=0.0;}
function E7(a){var b=new APM();AZM(b,a);return b;}
function AZM(a,b){var c,d,e,f,g;H$(a);a.jY=A0B(a,2,2);a.xA=A5h();a.pQ=1;S(a.c6,A3q(a,a.jY,a.xA,0,144,36));c=0;while(c<2){d=0;while(d<2){S(a.c6,D6(a,a.jY,d+(c*2|0)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.c6;f=new QE;Uw(f,a,b,(Yn(b)-1|0)-d|0,8,8+(d*18|0)|0);f.HS=a;f.wj=d;S(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){S(a.c6,D6(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){S(a.c6,D6(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function ALH(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(C()){break _;}b=0;while(b<a.jY.lT){c=Ge(a.jY,b);if(c!==null){d=a.I.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALQ(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=a.jY.lT)break;c=Ge(a.jY,b);if(c===null)continue;else{d=a.I.f;continue _;}}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ATQ(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=(-1);if(e<2&&f<2){h=Ge(a.jY,e+(f*2|0)|0);if(h!==null)g=h.bC;}d[e+(f*3|0)|0]=g;f=f+1|0;}e=e+1|0;}Pf(a.xA,0,RG(Wl(),c));}
function AZ4(a){ED(a.b0,B(523),86,16,4210752);}
function ADW(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACe(a,b,c,d);if(C()){break _;}a.Az=b;a.En=c;return;default:E_();}}C3().s(a,b,c,d,$p);}
function X5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(524);$p=1;case 1:$z=AHs(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.I.bo,e);f=(a.bm-a.e9|0)/2|0;g=(a.bE-a.fk|0)/2|0;CH(a,f,g,0,0,a.e9,a.fk);Ba(32826);Ba(2903);B3();b=f+51|0;e=g+75|0;Bw(b,e,50.0);CC((-30.0),30.0,30.0);Bv(180.0,
0.0,0.0,1.0);h=a.I.f.dF;i=a.I.f.v;j=a.I.f.J;k=b-a.Az;l=(e-50|0)-a.En;Bv(135.0,0.0,1.0,0.0);Hu();Bv((-135.0),0.0,1.0,0.0);m=l/40.0;Bv( -Io(m)*20.0,1.0,0.0,0.0);d=a.I.f;n=k/40.0;d.dF=Io(n)*20.0;a.I.f.v=Io(n)*40.0;a.I.f.J= -Io(m)*20.0;Bw(0.0,a.I.f.c3,0.0);d=Bgn;c=a.I.f;m=0.0;n=0.0;o=0.0;b=0.0;p=1.0;$p=2;case 2:AQC(d,c,m,n,o,b,p);if(C()){break _;}a.I.f.dF=h;a.I.f.v=i;a.I.f.J=j;BD();DS();Bb(32826);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function I2(){var a=this;D.call(a);a.qV=0;a.sy=0;a.vB=0;a.vG=0;a.xz=0;a.DH=0;a.cH=null;a.wg=null;a.wh=null;a.wi=null;a.t8=null;a.ug=null;a.ve=null;a.w8=null;a.vC=null;a.uP=null;a.tS=null;a.ut=null;a.uC=null;a.wq=null;a.t5=null;a.ya=null;a.q9=0;a.pV=0;a.oB=0;a.Gp=0;a.G4=0;a.t_=null;a.uM=null;a.xc=0;a.wX=null;a.vz=null;a.v9=null;a.yi=null;a.yo=null;a.x1=null;a.ml=null;a.mD=null;a.vw=0;a.r1=0.0;a.r0=0.0;a.rZ=0.0;a.rY=0.0;a.sD=0.0;a.tq=0.0;a.rI=0.0;a.sp=0.0;a.qT=0.0;a.qU=0.0;a.tg=0.0;a.tf=0.0;a.te=0.0;a.td=0.0;a.sW
=0.0;a.sU=0.0;a.sV=0.0;}
var BkU=null;var BkV=null;function Bae(a,b,c,d,e,f,g){var h=new I2();AId(h,a,b,c,d,e,f,g);return h;}
function O7(b){var c,d,e,f,g,h,i;c=BkU.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=Bae(b,d,e,f,g,h,i);BkU.data[b]=c;}return c;}
function AId(a,b,c,d,e,f,g,h){var i,j,k;WD(a);a.wg=null;a.wh=null;a.wi=null;a.t8=null;a.ug=null;a.ve=null;a.w8=null;a.vC=null;a.uP=null;a.tS=null;a.ut=null;a.uC=null;a.wq=null;a.t5=null;a.ya=null;a.xc=0;a.wX=$rt_createFloatArray(16);a.vz=$rt_createFloatArray(16);a.v9=$rt_createFloatArray(16);a.yi=Kt(M3());a.yo=Kt(M3());a.x1=Kt(M3());a.ml=A2X();a.mD=A2X();a.vw=0;a.r1=0.0;a.r0=0.0;a.rZ=0.0;a.rY=0.0;a.sD=0.0;a.tq=0.0;a.rI=0.0;a.sp=0.0;a.qT=0.0;a.qU=0.0;a.tg=0.0;a.tf=0.0;a.te=0.0;a.td=0.0;a.sW=0.0;a.sU=0.0;a.sV
=0.0;a.qV=c;a.sy=d;a.vB=e;a.vG=f;a.xz=g;a.DH=h;if(BkV===null)BkV=AB8(B(525));i=B(3);if(a.qV)i=BL(H(H(BX(),i),B(526)));if(a.sy)i=BL(H(H(BX(),i),B(527)));if(a.vB)i=BL(H(H(BX(),i),B(528)));if(a.vG)i=BL(H(H(BX(),i),B(529)));if(a.xz)i=BL(H(H(BX(),i),B(530)));if(a.DH)i=BL(H(H(BX(),i),B(531)));i=BL(H(H(BX(),i),BkV));j=OA(35633);OW(j,BL(H(H(H(BX(),PC()),B(532)),i)));Wz(j);if(!Va(j)){Cg(C1(),N0(BL(H(H(BX(),B(533)),T5(j))),B(158),B(534)));M(ZY(B(535)));}k=OA(35632);OW(k,BL(H(H(H(BX(),PC()),B(536)),i)));Wz(k);if(!Va(k))
{Cg(C1(),N0(BL(H(H(BX(),B(533)),T5(k))),B(158),B(537)));M(ZY(B(535)));}a.cH=AH1();R8(a.cH,j);R8(a.cH,k);b=1;a.q9=0;LU(a.cH,a.q9,B(538));if(!a.sy)a.pV=(-1);else{a.pV=b;LU(a.cH,a.pV,B(539));b=2;}if(!a.qV)a.oB=(-1);else{c=b+1|0;a.oB=b;LU(a.cH,a.oB,B(540));b=c;}a.Gp=(-1);a.G4=b;AAC(a.cH);UF(a.cH,j);UF(a.cH,k);Ta(j);Ta(k);if(!AGm(a.cH)){Cg(C1(),N0(BL(H(H(BX(),B(533)),AHt(a.cH))),B(158),B(541)));M(ZY(B(535)));}VU(a.cH);a.wg=Dq(a.cH,B(542));a.wh=Dq(a.cH,B(543));a.wi=Dq(a.cH,B(544));a.tS=Dq(a.cH,B(545));if(a.vB){a.ut
=Dq(a.cH,B(546));a.t5=Dq(a.cH,B(547));a.ya=Dq(a.cH,B(548));}if(a.vG){a.t8=Dq(a.cH,B(549));a.ug=Dq(a.cH,B(550));a.ve=Dq(a.cH,B(551));a.w8=Dq(a.cH,B(552));a.vC=Dq(a.cH,B(553));a.uP=Dq(a.cH,B(554));}if(a.xz)a.uC=Dq(a.cH,B(555));Q6(Dq(a.cH,B(556)),0);a.wq=Dq(a.cH,B(557));a.t_=O6();a.uM=L6();RM(a.t_);Hd(34962,a.uM);Rv(a);}
function Rv(a){N2(a.q9);N4(a.q9,3,5126,0,28,0);if(a.sy){N2(a.pV);N4(a.pV,2,5126,0,28,12);}if(a.qV){N2(a.oB);N4(a.oB,4,5121,1,28,20);}}
function AQX(a){VU(a.cH);}
function AT_(a){return;}
function AMq(a,b){if(!Ls(b,a.yi)){NQ(GP(a.yi,b),a.wX);Mf(a.wg,a.wX);}}
function AM0(a,b){if(!Ls(b,a.yo)){NQ(GP(a.yo,b),a.vz);Mf(a.wh,a.vz);}}
function ZT(a,b){if(!Ls(b,a.x1)){NQ(GP(a.x1,b),a.v9);Mf(a.wi,a.v9);}}
function ANa(a,b,c){if(!(S4(b,a.ml)&&S4(c,a.mD))){VA(a.ml,b);VA(a.mD,c);Ln(a.t5,a.ml.k$,a.ml.k_,a.ml.k9);Ln(a.ya,a.mD.k$,a.mD.k_,a.mD.k9);}}
function ALn(a,b){if(a.vw!=b){a.vw=b;Q6(a.ug,b%2|0);Ib(a.uP,b/2|0);}}
function AP$(a,b,c,d,e){if(!(a.r1===b&&a.r0===c&&a.rZ===d&&a.rY===e)){a.r1=b;a.r0=c;a.rZ=d;a.rY=e;Ud(a.t8,a.r1,a.r0,a.rZ,a.rY);}}
function APJ(a,b,c){if(!(a.sD===b&&a.tq===c)){a.sD=b;a.tq=c;Ib(a.ve,a.sD);Ib(a.w8,a.tq);}}
function AKK(a,b){if(a.rI!==b){a.rI=b;Ib(a.vC,a.rI);}}
function AIT(a,b){if(a.sp!==b){a.sp=b;Ib(a.uC,a.sp);}}
function AOI(a,b,c){var d,e;if(!(a.qT===b&&a.qU===c)){a.qT=b;a.qU=c;d=a.wq;b=a.qT;c=a.qU;Bd();if(d!==null){e=BdH;d=d.kv;e.uniform2f(d,b,c);}}}
function ALK(a,b,c,d,e){if(!(a.tg===b&&a.tf===c&&a.te===d&&a.td===e)){a.tg=b;a.tf=c;a.te=d;a.td=e;Ud(a.tS,a.tg,a.tf,a.te,a.td);}}
function AB4(a,b,c,d){if(!(a.sW===b&&a.sU===c&&a.sV===d)){a.sW=b;a.sU=c;a.sV=d;Ln(a.ut,a.sW,a.sU,a.sV);}}
function AOP(){BkU=J(I2,128);BkV=null;}
function Rn(){var a=this;D.call(a);a.Bt=0;a.rh=null;a.oZ=null;a.lJ=0;a.jH=0;}
function Tb(){var a=this;D.call(a);a.tZ=null;a.xq=0;a.Dn=0;a.Fc=0;}
function AHn(){var a=this;D.call(a);a.k4=0;a.h9=0;a.h$=0;a.h_=0;a.hI=0;a.gx=null;a.ny=null;}
function A0A(a,b,c,d,e){var f=new AHn();A57(f,a,b,c,d,e);return f;}
function A1a(a){var b=new AHn();A9A(b,a);return b;}
function A57(a,b,c,d,e,f){a.k4=0;a.h9=b;a.h$=c;a.h_=d;a.hI=e;a.gx=BY(f.x,f.z,f.w);}
function A9A(a,b){a.k4=1;a.ny=b;a.gx=BY(b.d,b.j,b.e);}
function Cd(){var a=this;D.call(a);a.q=0;a.mG=0;a.bC=0;a.el=0;}
function AL0(a){var b=new Cd();AHZ(b,a);return b;}
function G0(a,b){var c=new Cd();U2(c,a,b);return c;}
function Qf(a){var b=new Cd();DB(b,a);return b;}
function EL(a,b){var c=new Cd();Gm(c,a,b);return c;}
function Ky(a,b){var c=new Cd();MJ(c,a,b);return c;}
function Ol(a,b,c){var d=new Cd();A0E(d,a,b,c);return d;}
function A$9(a){var b=new Cd();A1t(b,a);return b;}
function AHZ(a,b){U2(a,b,1);}
function U2(a,b,c){MJ(a,b.b,c);}
function DB(a,b){Gm(a,b,1);}
function Gm(a,b,c){MJ(a,b.cV,c);}
function MJ(a,b,c){a.q=0;a.bC=b;a.q=c;}
function A0E(a,b,c,d){a.q=0;a.bC=b;a.q=c;a.el=d;}
function A1t(a,b){a.q=0;AD7(a,b);}
function EF(a,b){a.q=a.q-b|0;return Ol(a.bC,b,a.el);}
function DK(a){BB();return Bhd.data[a.bC];}
function DJ(a){return DK(a).tb;}
function AJf(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=DK(a);$p=1;case 1:$z=h.iK(a,b,c,d,e,f,g);if(C()){break _;}d=$z;return d;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFg(a,b){return DK(a).x2(a,b);}
function ABc(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=DK(a);$p=1;case 1:$z=d.n6(a,b,c);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,$p);}
function QJ(a,b){Fq(b,B(558),a.bC<<16>>16);JH(b,B(559),a.q<<24>>24);Fq(b,B(560),a.el<<16>>16);return b;}
function AD7(a,b){a.bC=FH(b,B(558));a.q=LA(b,B(559));a.el=FH(b,B(560));}
function EB(a){return DK(a).eX;}
function Kk(a){BB();return Bhd.data[a.bC].fe;}
function FI(a,b){a.el=a.el+b|0;if(a.el>Kk(a)){a.q=a.q-1|0;if(a.q<0)a.q=0;a.el=0;}}
function AEY(a,b){BB();Bhd.data[a.bC].se(a,b);}
function QC(a,b,c,d,e){BB();Bhd.data[a.bC].xW(a,b,c,d,e);}
function AAi(a,b){BB();return Bhd.data[a.bC].nX(b);}
function AN9(a,b){BB();return Bhd.data[a.bC].o6(b);}
function A09(a,b){return;}
function AEy(a,b){BB();Bhd.data[a.bC].yE(a,b);}
function ZH(){var a=this;D.call(a);a.h3=null;a.lT=0;a.sj=null;}
function A0B(a,b,c){var d=new ZH();AWs(d,a,b,c);return d;}
function AWs(a,b,c,d){a.lT=Bj(c,d);a.h3=J(Cd,a.lT);a.sj=b;}
function A3o(a){return a.lT;}
function Ge(a,b){return a.h3.data[b];}
function AEV(a,b,c){var d,e;if(a.h3.data[b]===null)return null;if(a.h3.data[b].q<=c){d=a.h3.data[b];a.h3.data[b]=null;a.sj.tn(a);return d;}e=EF(a.h3.data[b],c);if(!a.h3.data[b].q)a.h3.data[b]=null;a.sj.tn(a);return e;}
function A3B(a,b,c){a.h3.data[b]=c;a.sj.tn(a);}
function A8Z(a){return 64;}
function ADN(a){return;}
function AAB(){D.call(this);this.m5=null;}
function A5h(){var a=new AAB();ASQ(a);return a;}
function ASQ(a){a.m5=J(Cd,1);}
function A45(a,b){return a.m5.data[b];}
function AWA(a,b,c){var d;if(a.m5.data[b]===null)return null;d=a.m5.data[b];a.m5.data[b]=null;return d;}
function Pf(a,b,c){a.m5.data[b]=c;}
function AYT(a){return 64;}
function ANh(a){return;}
function HH(){var a=this;D.call(a);a.lL=0;a.jK=0;a.jM=0;a.e1=null;a.p1=null;}
function D6(a,b,c,d,e){var f=new HH();Uw(f,a,b,c,d,e);return f;}
function Uw(a,b,c,d,e,f){a.p1=b;a.e1=c;a.lL=d;a.jK=e;a.jM=f;}
function M6(a,b,c){var d,e;d=(a.p1.bm-a.p1.e9|0)/2|0;e=(a.p1.bE-a.p1.fk|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.jK-1|0)&&d<((a.jK+16|0)+1|0)&&c>=(a.jM-1|0)&&c<((a.jM+16|0)+1|0)?1:0;}
function AK9(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKz(a);if(C()){break _;}return;default:E_();}}C3().s(a,$p);}
function AXe(a,b){return 1;}
function ARu(a){return a.e1.gw(a.lL);}
function ALv(a,b){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e1.jz(a.lL,b);$p=1;case 1:AKz(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function A9R(a){return (-1);}
function AKz(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.e1;$p=1;case 1:b.kf();if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function ADc(){HH.call(this);this.qM=null;}
function A3q(a,b,c,d,e,f){var g=new ADc();A4S(g,a,b,c,d,e,f);return g;}
function A4S(a,b,c,d,e,f,g){Uw(a,b,d,e,f,g);a.qM=c;}
function A0j(a,b){return 0;}
function AN7(a){var b;b=0;while(b<a.qM.lT){if(Ge(a.qM,b)!==null)AEV(a.qM,b,1);b=b+1|0;}}
function QE(){var a=this;HH.call(a);a.wj=0;a.HS=null;}
function A2R(a,b){return !(DK(b) instanceof F0)?0:DK(b).zT!=a.wj?0:1;}
function AWu(a){return 15+(a.wj*16|0)|0;}
function V7(){D.call(this);this.DV=null;}
function Su(){var a=this;D.call(a);a.AY=null;a.vO=0;}
function M0(){Fk.call(this);}
function ALP(b){var c,d;c=b.data.length;d=new UO;T9(d,c,0,0+c|0);d.xT=0;d.Bq=0;d.wO=b;return d;}
function AFd(a){EA(a);return a;}
function A2B(a){Gs(a);return a;}
function Dg(){var a=this;D.call(a);a.iA=null;a.Hw=null;a.H0=null;a.l8=0.0;a.BW=0.0;}
function BkW(){var a=new Dg();EH(a);return a;}
function EH(a){a.Hw=A$X();a.H0=Kh();a.l8=0.0;a.BW=1.0;}
function AKr(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.iA.tY;$p=1;case 1:$z=AHs(c,b);if(C()){break _;}d=$z;Eb(c,d);return;default:E_();}}C3().s(a,b,c,d,$p);}
function APo(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iA.tY;$p=1;case 1:$z=AD1(d,b,c);if(C()){break _;}e=$z;Eb(d,e);return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AGZ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bb(2896);L();g=Bgo.bb;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;B3();Bw(c,d,e);n=b.c0*1.399999976158142;CC(n,n,n);o=B(179);$p
=1;case 1:AKr(a,o);if(C()){break _;}BA();o=BeK;p=1.0;q=0.0;r=b.eM/b.c0;Bv( -a.iA.ro,0.0,1.0,0.0);Bw(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BU(1.0,1.0,1.0,1.0);Bz(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;G(o,c,d,0.0,e,s);G(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;G(o,(-0.5),d,0.0,t,u);G(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Bw(0.0,0.0,(-0.03999999910593033));}Br(o);BD();Ba(2896);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function A8p(b,c,d,e){var f;Bb(3553);BA();f=BeK;BU(1.0,1.0,1.0,1.0);Bz(f);Fa(f,c,d,e);Cj(0.0,0.0,(-1.0));Bf(f,b.R,b.U,b.S);Bf(f,b.V,b.U,b.S);Bf(f,b.V,b.M,b.S);Bf(f,b.R,b.M,b.S);Cj(0.0,0.0,1.0);Bf(f,b.R,b.M,b.W);Bf(f,b.V,b.M,b.W);Bf(f,b.V,b.U,b.W);Bf(f,b.R,b.U,b.W);Cj(0.0,(-1.0),0.0);Bf(f,b.R,b.M,b.S);Bf(f,b.V,b.M,b.S);Bf(f,b.V,b.M,b.W);Bf(f,b.R,b.M,b.W);Cj(0.0,1.0,0.0);Bf(f,b.R,b.U,b.W);Bf(f,b.V,b.U,b.W);Bf(f,b.V,b.U,b.S);Bf(f,b.R,b.U,b.S);Cj((-1.0),0.0,0.0);Bf(f,b.R,b.M,b.W);Bf(f,b.R,b.U,b.W);Bf(f,b.R,b.U,
b.S);Bf(f,b.R,b.M,b.S);Cj(1.0,0.0,0.0);Bf(f,b.V,b.M,b.S);Bf(f,b.V,b.U,b.S);Bf(f,b.V,b.U,b.W);Bf(f,b.V,b.M,b.W);Fa(f,0.0,0.0,0.0);Br(f);Ba(3553);}
function AUE(a,b){a.iA=b;}
function ANi(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJT(a.iA,b.d,b.j,b.e);if(b.cU<=0)return;$p=1;case 1:AGZ(a,b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AIG(){var a=this;Dg.call(a);a.wF=null;a.id=null;}
function XY(){var a=new AIG();A5w(a);return a;}
function A5w(a){EH(a);a.wF=Kh();a.id=new Dz;a.l8=0.15000000596046448;a.BW=0.75;}
function APE(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b.nd;B3();i=Bq((b.mH+g)/10.0+b.ys)*0.10000000149011612+0.10000000149011612;j=((b.mH+g)/20.0+b.ys)*57.2957763671875;k=1;if(b.nd.q>1)k=2;if(b.nd.q>5)k=3;if(b.nd.q>20)k=4;Bw(c,d+
i,e);Ba(32826);if(h.bC<256){L();if(!BeO.data[h.bC].ek()){Bv(j,0.0,1.0,0.0);b=B(179);$p=3;continue _;}}CC(0.5,0.5,0.5);l=DJ(h);if(h.bC>=256){b=B(230);$p=1;continue _;}b=B(179);$p=2;continue _;case 1:AKr(a,b);if(C()){break _;}BA();m=BeK;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iA.ro,0.0,
1.0,0.0);Bz(m);Cj(0.0,1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Br(m);BD();s=s+1|0;}Bb(32826);BD();return;case 2:AKr(a,b);if(C()){break _;}BA();m=BeK;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iA.ro,0.0,1.0,0.0);Bz(m);Cj(0.0,
1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Br(m);BD();s=s+1|0;}Bb(32826);BD();return;case 3:AKr(a,b);if(C()){break _;}v=0.25;if(!BeO.data[h.bC].gi()&&h.bC!=BeT.b)v=0.5;CC(v,v,v);n=0;while(n<k){B3();if(n>0)Bw((N(a.id)*2.0-1.0)*0.20000000298023224/v,(N(a.id)*2.0-1.0)*0.20000000298023224/v,(N(a.id)*2.0-1.0)*0.20000000298023224/v);GW(a.wF,BeO.data[h.bC]);BD();n=n+1|0;}Bb(32826);BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,$p);}
function AGf(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d!==null){if(d.bC<256){L();if(!BeO.data[d.bC].ek()){g=d.bC;b=B(179);$p=1;continue _;}}if(DJ(d)>=0){Bb(2896);if(d.bC>=256){b=B(230);$p=2;continue _;}b=B(179);$p=3;continue _;}}return;case 1:$z=AHs(c,b);if(C()){break _;}h=$z;Eb(c,h);i=BeO.data[g];B3();Bw(e-2|0,f+3|0,0.0);CC(10.0,10.0,10.0);Bw(1.0,0.5,8.0);Bv(210.0,1.0,
0.0,0.0);Bv(45.0,0.0,1.0,0.0);BU(1.0,1.0,1.0,1.0);GW(a.wF,i);BD();return;case 2:$z=AHs(c,b);if(C()){break _;}g=$z;Eb(c,g);WW(a,e,f,(DJ(d)%16|0)*16|0,(DJ(d)/16|0)*16|0,16,16);Ba(2896);return;case 3:$z=AHs(c,b);if(C()){break _;}g=$z;Eb(c,g);WW(a,e,f,(DJ(d)%16|0)*16|0,(DJ(d)/16|0)*16|0,16,16);Ba(2896);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Lm(a,b,c,d,e,f){var g,h,i,j,k,l;if(d!==null){if(d.q>1){c=new T;V(c);g=U(Be(H(c,B(3)),d.q));Bb(2896);Bb(2929);Cy(b,g,((e+19|0)-2|0)-Dw(b,g)|0,(f+6|0)+3|0,16777215);Ba(2896);Ba(2929);}if(d.el>0){h=13-((d.el*13|0)/Kk(d)|0)|0;i=255-((d.el*255|0)/Kk(d)|0)|0;Bb(2896);Bb(2929);Bb(3553);BA();j=BeK;k=255-i|0;l=k<<16|i<<8;k=(k/4|0)<<16|16128;e=e+2|0;f=f+13|0;NY(a,j,e,f,13,2,0);NY(a,j,e,f,12,1,k);NY(a,j,e,f,h,1,l);Ba(3553);Ba(2896);Ba(2929);BU(1.0,1.0,1.0,1.0);}}}
function NY(a,b,c,d,e,f,g){var h,i,j;Bz(b);ES(b,g);h=c+0|0;i=d+0|0;Bf(b,h,i,0.0);j=d+f|0;Bf(b,h,j,0.0);h=c+e|0;Bf(b,h,j,0.0);Bf(b,h,i,0.0);Br(b);}
function WW(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;BA();h=BeK;Bz(h);i=b+0|0;j=c+g|0;k=(d+0|0)*0.00390625;l=(e+g|0)*0.00390625;G(h,i,j,0.0,k,l);m=b+f|0;n=(d+f|0)*0.00390625;G(h,m,j,0.0,n,l);l=c+0|0;j=(e+0|0)*0.00390625;G(h,m,l,0.0,n,j);G(h,i,l,0.0,k,j);Br(h);}
function AC4(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APE(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function O9(){var a=this;D.call(a);a.BL=null;a.Ii=0;a.If=0;a.Gh=0;a.G_=0;}
function Qx(){var a=this;D.call(a);a.f2=null;a.x9=null;}
function Zn(a,b){var c,d,e,f,g,h,i,j,k,l;if(Hj()===null)Bd$=BdC.createElement("canvas");if(Hj().width<a.f2.width){b=Hj();c=a.f2.width;b.width=c;}if(Hj().height<a.f2.height){b=Hj();c=a.f2.height;b.height=c;}if(JO()===null)Bd_=Hj().getContext("2d");b=JO();d=a.f2.width;e=a.f2.height;b.clearRect(0.0,0.0,d,e);b=JO();c=a.f2;d=a.f2.width;e=a.f2.height;b.drawImage(c,0.0,0.0,d,e);b=JO();d=a.f2.width;e=a.f2.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=Bj(f.width,f.height);WB($rt_str(a.f2.src));if(c.byteLength<(g*4
|0)){CM(a.x9,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.x9;c=new Tb;k=f.width;l=f.height;if(g==Bj(k,l)){c.xq=k;c.Dn=l;c.Fc=1;c.tZ=h;CM(b,c);return;}b=new Cb;Bl(b,B(561));M(b);}
function A7r(a,b){Zn(a,b);}
function Qw(){var a=this;D.call(a);a.Eh=null;a.EZ=null;}
function AJE(a,b){WB($rt_str(a.Eh.src));CM(a.EZ,null);}
function A7D(a,b){AJE(a,b);}
function It(){M0.call(this);}
function BkX(a,b,c){var d=new It();T9(d,a,b,c);return d;}
function T9(a,b,c,d){KN(a,b);a.bk=c;a.cy=d;}
function AF_(a){var b,c;if(a.bk<a.cy){b=a.bk;a.bk=b+1|0;return a.yq(b);}c=new Gp;O(c);M(c);}
function NI(a,b){var c,d;if(a.mX()){c=new FR;O(c);M(c);}if(a.bk<a.cy){d=a.bk;a.bk=d+1|0;a.u6(d,b);return a;}c=new G$;O(c);M(c);}
function QW(a,b){var c,d;if(b>=0&&b<a.cy)return AOJ(a,b);c=new BO;d=new T;V(d);Bl(c,U(H(Be(H(Be(H(d,B(273)),b),B(244)),a.cy),B(27))));M(c);}
function AQ0(a,b,c){var d,e;if(a.mX()){d=new FR;O(d);M(d);}if(b>=0&&b<a.cy){ANH(a,b,c);return a;}e=new BO;d=new T;V(d);Bl(e,U(H(Be(H(Be(H(d,B(273)),b),B(244)),a.cy),B(27))));M(e);}
function AXS(a){return a.mX();}
function UO(){var a=this;It.call(a);a.Bq=0;a.xT=0;a.wO=null;}
function AOJ(a,b){return a.wO.data[b+a.xT|0];}
function ANH(a,b,c){a.wO.data[b+a.xT|0]=c;}
function ASO(a){return a.Bq;}
function V0(){D.call(this);this.jn=null;}
function VW(){var a=this;D.call(a);a.iX=null;a.xk=0;}
function Xc(){D.call(this);this.kv=null;}
function Jk(){B6.call(this);}
function BkY(){var a=new Jk();AYd(a);return a;}
function AYd(a){O(a);}
function UC(){var a=this;CS.call(a);a.Au=null;a.At=null;a.qu=null;a.Ep=null;}
function ADe(a){DG(a.bH);S(a.bH,Dj(0,(a.bm/2|0)-100|0,(a.bE/4|0)+72|0,B(562)));DG(a.qu);DD(a.qu,AQA(a.b0,a.At));}
function AOC(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cl)return;b=a.I;c=a.Ep;$p=1;case 1:ADS(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AMz(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DE(a,a.b0,a.Au,a.bm/2|0,70,16777215);e=90;f=Jg(a.qu);while(KB(f)){g=KS(f);DE(a,a.b0,g,a.bm/2|0,e,16777215);e=e+9|0;}$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function FR(){Jk.call(this);}
function BkZ(){var a=new FR();A6M(a);return a;}
function A6M(a){O(a);}
function G$(){B6.call(this);}
function Bk0(){var a=new G$();A5T(a);return a;}
function A5T(a){O(a);}
function Gp(){B6.call(this);}
function Bk1(){var a=new Gp();A1E(a);return a;}
function A1E(a){O(a);}
function Ts(){var a=this;D.call(a);a.yR=null;a.De=null;a.vH=0;a.rK=0;}
function AAv(a){return Fl(a.yR);}
function N5(a,b){return Ct(a.De)<b?0:1;}
function A5O(a,b){a.vH=b;}
function A_P(a,b){a.rK=b;}
function ACj(){var a=this;D.call(a);a.yx=null;a.oA=0;}
function Rt(){CS.call(this);}
function Bk2(){var a=new Rt();A6O(a);return a;}
function A6O(a){DQ(a);}
function Mk(){CS.call(this);}
function Bk3(){var a=new Mk();A93(a);return a;}
function A93(a){DQ(a);}
function AOl(a){DG(a.bH);S(a.bH,Dj(1,(a.bm/2|0)-100|0,(a.bE/4|0)+72|0,B(563)));S(a.bH,Dj(2,(a.bm/2|0)-100|0,(a.bE/4|0)+96|0,B(564)));if(a.I.kW===null)Z(a.bH,1).gB=0;}
function AMj(a,b,c){return;}
function AOv(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cl==1){c=a.I;$p=1;continue _;}if(b.cl!=2)return;b=a.I;c=null;$p=3;continue _;case 1:ASu(c);if(C()){break _;}c=a.I;d=null;$p=2;case 2:ADS(c,d);if(C()){break _;}if(b.cl!=2)return;b=a.I;c=null;$p=3;case 3:ABH(b,c);if(C()){break _;}b=a.I;c=LL();$p=4;case 4:ADS(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function APm(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:KK(a,0,0,a.bm,a.bE,1615855616,(-1602211792));B3();CC(2.0,2.0,2.0);DE(a,a.b0,B(565),(a.bm/2|0)/2|0,30,16777215);BD();e=a.b0;f=new T;V(f);DE(a,e,U(Be(H(f,B(566)),a.I.f.k0)),a.bm/2|0,100,16777215);$p=1;case 1:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A6P(a){return 0;}
function C0(){var a=this;C5.call(a);a.e5=0;a.Bj=0.0;a.Bk=0.0;a.dp=0;a.cw=0;a.dq=0.0;a.m4=0.0;a.hY=0.0;a.ic=0.0;a.io=0.0;}
var BkL=0.0;var BkM=0.0;var BkN=0.0;function Bk4(a,b,c,d,e,f,g){var h=new C0();FA(h,a,b,c,d,e,f,g);return h;}
function FA(a,b,c,d,e,f,g,h){var i,j;Fz(a,b);a.dp=0;a.cw=0;D1(a,0.20000000298023224,0.20000000298023224);a.c3=a.eM/2.0;CT(a,c,d,e);a.io=1.0;a.ic=1.0;a.hY=1.0;a.g=f+(BP()*2.0-1.0)*0.4000000059604645;a.i=g+(BP()*2.0-1.0)*0.4000000059604645;a.h=h+(BP()*2.0-1.0)*0.4000000059604645;i=(BP()+BP()+1.0)*0.15000000596046448;j=Ce(a.g*a.g+a.i*a.i+a.h*a.h);c=a.g;d=j;c=c/d;e=i;a.g=c*e*0.4000000059604645;a.i=a.i/d*e*0.4000000059604645+0.10000000149011612;a.h=a.h/d*e*0.4000000059604645;a.Bj=N(a.n)*3.0;a.Bk=N(a.n)*3.0;a.dq=
(N(a.n)*0.5+0.5)*2.0;a.cw=4.0/(N(a.n)*0.8999999761581421+0.10000000149011612)|0;a.dp=0;a.i7=0;}
function APq(a,b){var c,d;c=a.g;d=b;a.g=c*d;a.i=(a.i-0.10000000149011612)*d+0.10000000149011612;a.h=a.h*d;return a;}
function X8(a,b){var c;c=0.20000000298023224*b;D1(a,c,c);a.dq=a.dq*b;return a;}
function ALm(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=2;continue _;}a.i=a.i-0.04*a.m4;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARD(a,c,d,e);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}a.i=a.i-0.04*a.m4;c=a.g;d=a.i;e=
a.h;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ANs(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.e5%16|0)/16.0;j=i+0.062437500804662704;k=(a.e5/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.dq;n=a.bT;o=a.d-a.bT;p
=c;q=n+o*p-BkL;r=a.cR+(a.j-a.cR)*p-BkM;s=a.bS+(a.e-a.bS)*p-BkN;$p=1;case 1:$z=a.vg(c);if(C()){break _;}t=$z;Cq(b,a.hY*t,a.ic*t,a.io*t);u=d*m;t=q-u;v=g*m;n=t-v;c=e*m;o=r-c;d=f*m;e=s-d;f=h*m;w=e-f;p=i;x=l;G(b,n,o,w,p,x);n=t+v;w=r+c;y=e+f;z=k;G(b,n,w,y,p,z);c=q+u;n=c+v;d=s+d;p=d+f;y=j;G(b,n,w,p,y,z);G(b,c-v,o,d-f,y,x);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function A70(a){return 0;}
function AAX(){var a=this;CS.call(a);a.tv=0;a.od=0;}
function Bcp(){var a=new AAX();AWb(a);return a;}
function AWb(a){DQ(a);a.tv=0;a.od=0;}
function ARb(a){a.tv=0;DG(a.bH);S(a.bH,Dj(1,(a.bm/2|0)-100|0,(a.bE/4|0)+48|0,B(567)));S(a.bH,Dj(4,(a.bm/2|0)-100|0,(a.bE/4|0)+24|0,B(568)));S(a.bH,Dj(0,(a.bm/2|0)-100|0,(a.bE/4|0)+96|0,B(494)));}
function ADk(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cl){c=a.I;d=AIM(a,a.I.k);$p=1;continue _;}if(b.cl==1){c=a.I;d=null;$p=2;continue _;}if(b.cl!=4)return;b=a.I;c=null;$p=4;continue _;case 1:ADS(c,d);if(C()){break _;}if(b.cl==1){c=a.I;d=null;$p=2;continue _;}if(b.cl!=4)return;b=a.I;c=null;$p=4;continue _;case 2:ABH(c,d);if(C()){break _;}c=a.I;d=LL();$p=3;case 3:ADS(c,d);if(C()){break _;}if(b.cl!=4)return;b=a.I;c=null;$p
=4;case 4:ADS(b,c);if(C()){break _;}b=a.I;$p=5;case 5:AFh(b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function A2e(a){a.od=a.od+1|0;}
function ADJ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}e=a.I.A;f=a.tv;a.tv=f+1|0;$p=2;case 2:$z=AAJ(e,f);if(C()){break _;}f=$z;f=f?0:1;if(!(!f&&a.od>=20)){g=255.0*(Bq(((a.od%10|0)+d)/10.0*3.1415927410125732*2.0)*0.20000000298023224+0.800000011920929)|0;Cy(a.b0,B(569),8,a.bE-16|0,g<<16|g<<8|g);}DE(a,a.b0,B(570),a.bm/2|0,40,16777215);$p=3;case 3:AFC(a,b,c,d);if
(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Lx(){var a=this;D.call(a);a.be=null;a.ba=null;a.Z=null;a.bc=null;}
function Bk5(){var a=new Lx();AHq(a);return a;}
function AHq(a){a.be=$rt_createFloatMultiArray([16,16]);a.ba=$rt_createFloatArray(16);a.Z=$rt_createFloatArray(16);a.bc=$rt_createFloatArray(16);}
function ARM(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.be.data[h].data[0]*b+a.be.data[h].data[1]*c+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*c+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*b+a.be.data[h].data[1]*f+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*f+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*b+a.be.data[h].data[1]*c+a.be.data[h].data[2]*g+a.be.data[h].data[3]
<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*c+a.be.data[h].data[2]*g+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*b+a.be.data[h].data[1]*f+a.be.data[h].data[2]*g+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*f+a.be.data[h].data[2]*g+a.be.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function Wy(){var a=this;Lx.call(a);a.oT=null;a.n1=null;a.zv=null;}
var Bk6=null;function BaQ(){var a=new Wy();AFs(a);return a;}
function AFs(a){AHq(a);a.oT=HY(16);a.n1=HY(16);a.zv=HY(16);}
function RP(){AJQ(Bk6);return Bk6;}
function GV(a,b,c){var d,e;b=b.data;d=D_(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AJQ(a){LR(a.oT);LR(a.n1);LR(a.zv);TL(2983,a.oT);TL(2982,a.n1);P8(TH(a.oT),16);VF(a.oT,a.ba);P8(TH(a.n1),16);VF(a.n1,a.Z);a.bc.data[0]=a.Z.data[0]*a.ba.data[0]+a.Z.data[1]*a.ba.data[4]+a.Z.data[2]*a.ba.data[8]+a.Z.data[3]*a.ba.data[12];a.bc.data[1]=a.Z.data[0]*a.ba.data[1]+a.Z.data[1]*a.ba.data[5]+a.Z.data[2]*a.ba.data[9]+a.Z.data[3]*a.ba.data[13];a.bc.data[2]=a.Z.data[0]*a.ba.data[2]+a.Z.data[1]*a.ba.data[6]+a.Z.data[2]*a.ba.data[10]+a.Z.data[3]*a.ba.data[14];a.bc.data[3]=a.Z.data[0]*a.ba.data[3]+a.Z.data[1]
*a.ba.data[7]+a.Z.data[2]*a.ba.data[11]+a.Z.data[3]*a.ba.data[15];a.bc.data[4]=a.Z.data[4]*a.ba.data[0]+a.Z.data[5]*a.ba.data[4]+a.Z.data[6]*a.ba.data[8]+a.Z.data[7]*a.ba.data[12];a.bc.data[5]=a.Z.data[4]*a.ba.data[1]+a.Z.data[5]*a.ba.data[5]+a.Z.data[6]*a.ba.data[9]+a.Z.data[7]*a.ba.data[13];a.bc.data[6]=a.Z.data[4]*a.ba.data[2]+a.Z.data[5]*a.ba.data[6]+a.Z.data[6]*a.ba.data[10]+a.Z.data[7]*a.ba.data[14];a.bc.data[7]=a.Z.data[4]*a.ba.data[3]+a.Z.data[5]*a.ba.data[7]+a.Z.data[6]*a.ba.data[11]+a.Z.data[7]*a.ba.data[15];a.bc.data[8]
=a.Z.data[8]*a.ba.data[0]+a.Z.data[9]*a.ba.data[4]+a.Z.data[10]*a.ba.data[8]+a.Z.data[11]*a.ba.data[12];a.bc.data[9]=a.Z.data[8]*a.ba.data[1]+a.Z.data[9]*a.ba.data[5]+a.Z.data[10]*a.ba.data[9]+a.Z.data[11]*a.ba.data[13];a.bc.data[10]=a.Z.data[8]*a.ba.data[2]+a.Z.data[9]*a.ba.data[6]+a.Z.data[10]*a.ba.data[10]+a.Z.data[11]*a.ba.data[14];a.bc.data[11]=a.Z.data[8]*a.ba.data[3]+a.Z.data[9]*a.ba.data[7]+a.Z.data[10]*a.ba.data[11]+a.Z.data[11]*a.ba.data[15];a.bc.data[12]=a.Z.data[12]*a.ba.data[0]+a.Z.data[13]*a.ba.data[4]
+a.Z.data[14]*a.ba.data[8]+a.Z.data[15]*a.ba.data[12];a.bc.data[13]=a.Z.data[12]*a.ba.data[1]+a.Z.data[13]*a.ba.data[5]+a.Z.data[14]*a.ba.data[9]+a.Z.data[15]*a.ba.data[13];a.bc.data[14]=a.Z.data[12]*a.ba.data[2]+a.Z.data[13]*a.ba.data[6]+a.Z.data[14]*a.ba.data[10]+a.Z.data[15]*a.ba.data[14];a.bc.data[15]=a.Z.data[12]*a.ba.data[3]+a.Z.data[13]*a.ba.data[7]+a.Z.data[14]*a.ba.data[11]+a.Z.data[15]*a.ba.data[15];a.be.data[0].data[0]=a.bc.data[3]-a.bc.data[0];a.be.data[0].data[1]=a.bc.data[7]-a.bc.data[4];a.be.data[0].data[2]
=a.bc.data[11]-a.bc.data[8];a.be.data[0].data[3]=a.bc.data[15]-a.bc.data[12];GV(a,a.be,0);a.be.data[1].data[0]=a.bc.data[3]+a.bc.data[0];a.be.data[1].data[1]=a.bc.data[7]+a.bc.data[4];a.be.data[1].data[2]=a.bc.data[11]+a.bc.data[8];a.be.data[1].data[3]=a.bc.data[15]+a.bc.data[12];GV(a,a.be,1);a.be.data[2].data[0]=a.bc.data[3]+a.bc.data[1];a.be.data[2].data[1]=a.bc.data[7]+a.bc.data[5];a.be.data[2].data[2]=a.bc.data[11]+a.bc.data[9];a.be.data[2].data[3]=a.bc.data[15]+a.bc.data[13];GV(a,a.be,2);a.be.data[3].data[0]
=a.bc.data[3]-a.bc.data[1];a.be.data[3].data[1]=a.bc.data[7]-a.bc.data[5];a.be.data[3].data[2]=a.bc.data[11]-a.bc.data[9];a.be.data[3].data[3]=a.bc.data[15]-a.bc.data[13];GV(a,a.be,3);a.be.data[4].data[0]=a.bc.data[3]-a.bc.data[2];a.be.data[4].data[1]=a.bc.data[7]-a.bc.data[6];a.be.data[4].data[2]=a.bc.data[11]-a.bc.data[10];a.be.data[4].data[3]=a.bc.data[15]-a.bc.data[14];GV(a,a.be,4);a.be.data[5].data[0]=a.bc.data[3]+a.bc.data[2];a.be.data[5].data[1]=a.bc.data[7]+a.bc.data[6];a.be.data[5].data[2]=a.bc.data[11]
+a.bc.data[10];a.be.data[5].data[3]=a.bc.data[15]+a.bc.data[14];GV(a,a.be,5);}
function AG6(){Bk6=BaQ();}
function Q0(){}
function AFR(){var a=this;D.call(a);a.C3=null;a.vy=0.0;a.v1=0.0;a.wf=0.0;}
function Bbx(){var a=new AFR();A89(a);return a;}
function A89(a){a.C3=RP();}
function AOj(a,b,c,d){a.vy=b;a.v1=c;a.wf=d;}
function AAe(a,b,c,d,e,f,g){var h,i;h=b-a.vy;i=c-a.v1;b=d-a.wf;d=e-a.vy;e=f-a.v1;c=g-a.wf;return ARM(a.C3,h,i,b,d,e,c);}
function ME(a,b){return AAe(a,b.R,b.M,b.S,b.V,b.U,b.W);}
function O0(){D.call(this);}
var Bk7=null;function Bk8(){var a=new O0();ALg(a);return a;}
function ALg(a){return;}
function DS(){Bb(2896);Bb(16384);Bb(16385);Bb(2903);}
function Hu(){var b;Ba(2896);Ba(16384);Ba(16385);Ba(2903);b=CD(BY(0.699999988079071,1.0,(-0.20000000298023224)));RE(b.x,b.z,b.w,0.0);Fp(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fp(0.0,0.0,0.0,1.0);Fp(0.0,0.0,0.0,1.0);b=CD(BY((-0.699999988079071),1.0,0.20000000298023224));RE(b.x,b.z,b.w,0.0);Fp(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fp(0.0,0.0,0.0,1.0);Fp(0.0,0.0,0.0,1.0);Fp(0.4000000059604645,0.4000000059604645,0.4000000059604645,1.0);}
function RE(b,c,d,e){return Fp(b,c,d,e);}
function Fp(b,c,d,e){EA(Bk7);CJ(CJ(CJ(CJ(Bk7,b),c),d),e);Gs(Bk7);return Bk7;}
function ASf(){Bk7=HY(16);}
function Id(){var a=this;D.call(a);a.z1=null;a.go=null;a.nv=null;}
function Bk9(a,b,c){var d=new Id();K5(d,a,b,c);return d;}
function K5(a,b,c,d){a.z1=b;a.go=c;a.nv=d;}
function A6t(a){return a.go.gm()+a.nv.gm()|0;}
function A6g(a){return a.z1;}
function AS7(a,b){return b<a.go.gm()?a.go.gw(b):a.nv.gw(b-a.go.gm()|0);}
function A3g(a,b,c){return b<a.go.gm()?a.go.j2(b,c):a.nv.j2(b-a.go.gm()|0,c);}
function AWQ(a,b,c){if(b<a.go.gm())a.go.jz(b,c);else a.nv.jz(b-a.go.gm()|0,c);}
function A99(a){return a.go.f5();}
function Yu(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.go;$p=1;case 1:b.kf();if(C()){break _;}b=a.nv;$p=2;case 2:b.kf();if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function ZD(){C0.call(this);}
function AY2(a,b,c,d,e,f,g,h){var i=new ZD();A1b(i,a,b,c,d,e,f,g,h);return i;}
function A1b(a,b,c,d,e,f,g,h,i){FA(a,b,c,d,e,f,g,h);a.e5=i.bb;a.m4=i.Eu;a.io=0.6000000238418579;a.ic=0.6000000238418579;a.hY=0.6000000238418579;a.dq=a.dq/2.0;}
function ATD(a){return 1;}
function YH(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=((a.e5%16|0)+a.Bj/4.0)/16.0;j=i+0.015609375201165676;k=((a.e5/16|0)+a.Bk/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.dq;n
=a.bT;o=a.d-a.bT;p=c;q=n+o*p-BkL;r=a.cR+(a.j-a.cR)*p-BkM;s=a.bS+(a.e-a.bS)*p-BkN;$p=1;case 1:$z=ADF(a,c);if(C()){break _;}t=$z;Cq(b,t*a.hY,t*a.ic,t*a.io);t=d*m;u=q-t;g=g*m;v=u-g;w=e*m;o=r-w;c=f*m;d=s-c;e=h*m;n=d-e;x=i;p=l;G(b,v,o,n,x,p);n=u+g;v=r+w;y=d+e;z=k;G(b,n,v,y,x,z);d=q+t;n=d+g;c=s+c;x=c+e;y=j;G(b,n,v,x,y,z);G(b,d-g,o,c-e,y,p);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function KR(){B6.call(this);}
function Bk$(){var a=new KR();A2m(a);return a;}
function A2m(a){O(a);}
function JL(){C0.call(this);}
function Bk_(a,b,c,d){var e=new JL();TI(e,a,b,c,d);return e;}
function TI(a,b,c,d,e){FA(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.30000001192092896;a.i=BP()*0.20000000298023224+0.10000000149011612;a.h=a.h*0.30000001192092896;a.hY=1.0;a.ic=1.0;a.io=1.0;a.e5=16;D1(a,0.009999999776482582,0.009999999776482582);a.m4=0.05999999865889549;a.cw=8.0/(BP()*0.8+0.2)|0;}
function AKM(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANs(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AOx(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;a.i=a.i-a.m4;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARD(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=a.cw;a.cw=e-1|0;if(e<=0){$p=2;continue _;}if(a.cx){if(BP()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.m;e
=K(a.d);g=K(a.j);h=K(a.e);$p=3;continue _;case 2:Ca(a);if(C()){break _;}if(a.cx){if(BP()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.m;e=K(a.d);g=K(a.j);h=K(a.e);$p=3;case 3:$z=ABX(f,e,g,h);if(C()){break _;}f=$z;if(!f.nA()&&!f.du())return;i=K(a.j)+1|0;f=a.m;e=K(a.d);g=K(a.j);h=K(a.e);$p=4;case 4:$z=AEH(f,e,g,h);if(C()){break _;}e=$z;b=i-Js(e);if(a.j>=b)return;$p=6;continue _;case 5:Ca(a);if(C()){break _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;f=a.m;e=K(a.d);g=
K(a.j);h=K(a.e);$p=3;continue _;case 6:Ca(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function IK(){var a=this;It.call(a);a.eo=null;a.Ae=0;a.ed=0;}
function Bla(a,b,c,d,e,f){var g=new IK();OH(g,a,b,c,d,e,f);return g;}
function OH(a,b,c,d,e,f,g){T9(a,c,e,f);a.ed=b;a.eo=d;a.Ae=g;}
function AXL(a){return a.Ae;}
function O_(){IK.call(this);}
function AV_(a,b){var c,d;c=a.eo.cp.data;d=a.ed;b=b*4|0;return c[d+b|0]&255|(a.eo.cp.data[(a.ed+b|0)+1|0]&255)<<8|(a.eo.cp.data[(a.ed+b|0)+2|0]&255)<<16|(a.eo.cp.data[(a.ed+b|0)+3|0]&255)<<24;}
function ASN(a,b,c){var d,e;d=a.eo.cp.data;e=a.ed;b=b*4|0;d[e+b|0]=c<<24>>24;a.eo.cp.data[(a.ed+b|0)+1|0]=c>>8<<24>>24;a.eo.cp.data[(a.ed+b|0)+2|0]=c>>16<<24>>24;a.eo.cp.data[(a.ed+b|0)+3|0]=c>>24<<24>>24;}
function VH(){IK.call(this);}
function A0P(a,b){var c,d;c=a.eo.cp.data;d=a.ed;b=b*4|0;return (c[d+b|0]&255)<<24|(a.eo.cp.data[(a.ed+b|0)+1|0]&255)<<16|(a.eo.cp.data[(a.ed+b|0)+2|0]&255)<<8|a.eo.cp.data[(a.ed+b|0)+3|0]&255;}
function ATG(a,b,c){var d,e;d=a.eo.cp.data;e=a.ed;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.eo.cp.data[(a.ed+b|0)+1|0]=c>>16<<24>>24;a.eo.cp.data[(a.ed+b|0)+2|0]=c>>8<<24>>24;a.eo.cp.data[(a.ed+b|0)+3|0]=c<<24>>24;}
function AKU(){D.call(this);this.v$=null;}
function AYG(a){var b=new AKU();A7X(b,a);return b;}
function A7X(a,b){a.v$=b;}
function ZI(a,b,c){return G3(b,a.v$)>=G3(c,a.v$)?1:(-1);}
function A08(a,b,c){return ZI(a,b,c);}
function V5(){D.call(this);this.yc=null;}
function APG(a,b,c){var d,e;d=b.fu;e=c.fu;return d&&!e?1:e&&!d?(-1):G3(b,a.yc)>=G3(c,a.yc)?(-1):1;}
function A9F(a,b,c){return APG(a,b,c);}
function Ho(){D.call(this);}
var Blb=null;var Blc=null;var Bld=null;var Ble=null;var Blf=null;function Blg(){var a=new Ho();AAh(a);return a;}
function AAh(a){return;}
function Rw(b,c){var d,e,f;if(c===null)c=Ble;d=J(D,b.p);Uz(b,d);PU(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;Q8(b,e,f[e]);e=e+1|0;}}
function AOc(){Blb=new R6;Blc=new R5;Bld=new R7;Ble=new WE;Blf=new WC;}
function HT(){var a=this;D.call(a);a.mJ=null;a.yf=null;a.Df=null;a.Ct=null;a.HI=null;a.Gt=0.0;a.FN=0.0;a.E7=0.0;a.E6=0.0;a.E5=0.0;}
var Bkq=null;var BkI=0.0;var BkJ=0.0;var BkK=0.0;function BbY(){var a=new HT();AC8(a);return a;}
function AC8(a){var b;a.mJ=Dd();BR(a.mJ,F(Jd),Bck());BR(a.mJ,F(Nt),Bby());b=Nc(Ip(a.mJ));while(F8(b)){Md(b).ra=a;}}
function Vp(a,b){var c;c=CP(a.mJ,b);if(c===null&&b!==F(D$)){c=Vp(a,JF(b));BR(a.mJ,b,c);}return c;}
function AIg(a,b){return Wk(a,b)===null?0:1;}
function Wk(a,b){return Vp(a,Dl(b));}
function ARg(a,b,c,d,e,f){var g,h,i;a.Ct=b;a.Df=c;a.HI=e;a.yf=d;a.Gt=e.P+(e.v-e.P)*f;a.FN=e.T+(e.J-e.T)*f;g=e.cr;h=e.d-e.cr;i=f;a.E7=g+h*i;a.E6=e.b7+(e.j-e.b7)*i;a.E5=e.cs+(e.e-e.cs)*i;}
function YU(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(AK1(b,a.E7,a.E6,a.E5)>=4096.0)return;d=a.Ct;e=b.dJ;f=b.dH;g=b.dP;$p=1;case 1:$z=ANg(d,e,f,g);if(C()){break _;}h=$z;F3(h,h,h);i=b.dJ-BkI;j=b.dH-BkJ;k=b.dP-BkK;$p=2;case 2:AFm(a,b,i,j,k,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFm(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=Wk(a,b);if(g===null)return;$p=1;case 1:g.CQ(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function A_Q(a){return a.yf;}
function ALJ(){Bkq=BbY();}
function HV(){var a=this;D.call(a);a.dS=null;a.FA=null;a.tY=null;a.n0=null;a.HV=null;a.ro=0.0;a.GI=0.0;a.FJ=null;a.D4=0.0;a.D3=0.0;a.D2=0.0;}
var Bgn=null;var BkF=0.0;var BkG=0.0;var BkH=0.0;function Bah(){var a=new HV();AGu(a);return a;}
function AGu(a){var b,c,d,e,f;a.dS=Dd();BR(a.dS,F(Kl),A_X());b=a.dS;c=new T2;d=BcM();e=new PR;KW(e,6,0.5);Gn(c,d,0.699999988079071);c.ke=e;BR(b,F(Iz),c);d=a.dS;f=new Ty;c=Bcj();e=BbU();Gn(f,c,0.699999988079071);f.ke=e;BR(d,F(KF),f);BR(a.dS,F(JV),Bb$());BR(a.dS,F(Jj),AYe(Bcx(),0.5));d=a.dS;f=new DI;c=new HN;KE(c);Gn(f,c,0.5);BR(d,F(I3),f);BR(a.dS,F(Jr),Bbj());d=a.dS;f=new T6;c=new HN;KE(c);Gn(f,c,3.0);f.tu=6.0;BR(d,F(K$),f);BR(a.dS,F(EQ),AYe(A$X(),0.5));d=a.dS;f=new TF;EH(f);BR(d,F(C5),f);BR(a.dS,F(ID),BbS());d
=a.dS;f=new Rs;EH(f);BR(d,F(Jp),f);BR(a.dS,F(E$),XY());BR(a.dS,F(Mo),Ban());BR(a.dS,F(JJ),Baf());BR(a.dS,F(Gd),Bb6());d=Nc(Ip(a.dS));while(F8(d)){Md(d).iA=a;}}
function WZ(a,b){var c;c=CP(a.dS,b);if(c===null&&b!==F(C5)){c=WZ(a,JF(b));BR(a.dS,b,c);}return c;}
function R9(a,b){return WZ(a,Dl(b));}
function AHa(a,b,c,d,e,f,g){var h,i,j;a.n0=b;a.tY=c;a.FJ=f;a.HV=e;a.FA=d;a.ro=e.P+(e.v-e.P)*g;a.GI=e.T+(e.J-e.T)*g;h=e.cr;i=e.d-e.cr;j=g;a.D4=h+i*j;a.D3=e.b7+(e.j-e.b7)*j;a.D2=e.cs+(e.e-e.cs)*j;}
function AM9(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.cr;e=b.d-b.cr;f=c;e=d+e*f;d=b.b7+(b.j-b.b7)*f;g=b.cs+(b.e-b.cs)*f;h=b.P+(b.v-b.P)*c;$p=1;case 1:$z=b.vg(c);if(C()){break _;}i=$z;F3(i,i,i);e=e-BkF;d=d-BkG;f=g-BkH;$p=2;case 2:AQC(a,b,e,d,f,h,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AQC(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=R9(a,b);if(h===null)return;$p=1;case 1:h.iN(b,c,d,e,f,g);if(C()){break _;}$p=2;case 2:ANi(h,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A72(a,b){a.n0=b;}
function AJT(a,b,c,d){var e,f,g;e=b-a.D4;f=c-a.D3;g=d-a.D2;return e*e+f*f+g*g;}
function AKu(){Bgn=Bah();}
function Na(){D.call(this);}
var Blh=null;var Bli=null;function Blj(){var a=new Na();AR0(a);return a;}
function AR0(a){return;}
function Ve(b){var c;c=0;while(true){if(c>=Blh.data.length)return (-1);if(b==Blh.data[c])break;c=c+1|0;}return c;}
function AO_(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;Blh=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;Bli=b;}
function JY(){B6.call(this);}
function Blk(){var a=new JY();A7M(a);return a;}
function A7M(a){O(a);}
function VP(){var a=this;D.call(a);a.eD=0;a.eY=0;a.eE=0;}
function CO(a,b,c){var d=new VP();AWE(d,a,b,c);return d;}
function AWE(a,b,c,d){a.eD=b;a.eY=c;a.eE=d;}
function A6o(a,b){var c;if(!(b instanceof VP))return 0;c=b;return c.eD==a.eD&&c.eY==a.eY&&c.eE==a.eE?1:0;}
function A1q(a){return (Bj(a.eD,8976890)+Bj(a.eY,981131)|0)+a.eE|0;}
function Op(){Fb.call(this);}
var Bll=0.0;var Blm=null;function AEj(){Bll=NaN;Blm=F($rt_floatcls());}
function Hi(){D.call(this);}
var Bdn=null;var Bdp=null;var Bdq=null;var Bdo=null;var Bdm=null;function Bln(){var a=new Hi();AQH(a);return a;}
function AQH(a){return;}
function AMJ(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;Bdn=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);Bdp=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);Bdq=b;Bdo=new V3;Bdm=new R4;}
function Nb(){D.call(this);}
var Blo=null;var Blp=null;function Blq(){var a=new Nb();AKl(a);return a;}
function AKl(a){return;}
function AOd(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.zg=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.uw=0;c.ud=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AOr(Blp,f);if(h<0)h= -h-2|0;i=9+(f-Blp.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(Blo.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-Blp.data[h]|0)|0;k=Long_shru(Long_mul(j,Long_fromInt(Blo.data[h])),
32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?Blo.data[h]>>>g:Blo.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=R(o,p);e=e>0?Bj(k/o|0,o):e<0?Bj(k/p|0,p)+p|0:Bj((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.uw=e;c.ud=h-50|0;}
function ALa(){var b,c,d,e,f,g,h,i;Blo=$rt_createIntArray(100);Blp=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=Blo.data;g=d+50|0;f[g]=$rt_udiv(e,20);Blp.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=Blo.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);Blp.data[i]=c;d=d+1|0;}}
function R4(){var a=this;D.call(a);a.uw=0;a.ud=0;a.zg=0;}
function Blr(){var a=new R4();ASL(a);return a;}
function ASL(a){return;}
function DI(){var a=this;Dg.call(a);a.mC=null;a.ke=null;}
function AYe(a,b){var c=new DI();Gn(c,a,b);return c;}
function Gn(a,b,c){EH(a);a.mC=b;a.l8=c;}
function A$u(a,b){a.ke=b;}
function Z9(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bb(2884);try{h=b.e7+(b.dF-b.e7)*g;i=b.P+(b.v-b.P)*g;j=b.T+(b.J-b.T)*g;Bw(c,d,e);k=b.oP+g;Bv(180.0-h,0.0,1.0,0.0);if(b.c1>0){f=D_((b.c1+
g-1.0)/20.0*1.600000023841858);if(f>1.0)f=1.0;Bv(f*a.CC(b),0.0,0.0,1.0);}l=0.0625;Ba(32826);CC((-1.0),(-1.0),1.0);a.xe(b,g);Bw(0.0,(-1.5078125),0.0);m=b.jQ+(b.cg-b.jQ)*g;n=b.gn-b.cg*(1.0-g);if(m>1.0)m=1.0;o=b.tI;p=PI(b);$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);Ba(2884);BD();return;case 1:try{APo(a,o,p);if(C()){break _;}Ba(3008);o=a.mC;f=i-h;o.hH(n,m,k,f,j,l);q=0;if(q>=4){$p=2;continue _;}$p=3;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}
else{throw $$e;}}Cc(o);Ba(2884);BD();return;case 2:a:{try{$z=ADF(b,g);if(C()){break _;}r=$z;s=a.CF(b,r,g);q=s>>24&255;if(!(q<=0&&b.dD<=0&&b.c1<=0)){Bb(3553);Bb(3008);Ba(3042);Df(770,771);HG(514);if(!(b.dD<=0&&b.c1<=0)){BU(r,0.0,0.0,0.4000000059604645);a.mC.hH(n,m,k,f,j,l);t=0;if(t<4){$p=4;continue _;}}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BU(u,v,w,x);a.mC.hH(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HG(515);Bb(3042);Ba(3008);Ba(3553);}Bb(32826);break a;}catch($$e){$$je=Bi($$e);if
($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);}Ba(2884);BD();return;case 3:try{$z=a.k3(b,q);if(C()){break _;}s=$z;if(s){a.ke.hH(n,m,k,f,j,l);Bb(3042);Ba(3008);}q=q+1|0;if(q>=4){$p=2;continue _;}continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);Ba(2884);BD();return;case 4:a:{try{$z=a.k3(b,t);if(C()){break _;}y=$z;if(y){BU(r,0.0,0.0,0.4000000059604645);a.ke.hH(n,m,k,f,j,l);}t=t+1|0;if(t<4){continue _;}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x
=q/255.0;BU(u,v,w,x);a.mC.hH(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HG(515);Bb(3042);Ba(3008);Ba(3553);Bb(32826);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);}Ba(2884);BD();return;case 5:a:{try{$z=a.k3(b,y);if(C()){break _;}s=$z;if(s){BU(u,v,w,x);a.ke.hH(n,m,k,f,j,l);}y=y+1|0;if(y>=4){HG(515);Bb(3042);Ba(3008);Ba(3553);Bb(32826);break a;}continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);}Ba(2884);BD();return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function APR(a,b,c){return 0;}
function A5i(a,b){return 90.0;}
function A6x(a,b,c,d){return 0;}
function A9a(a,b,c){return;}
function AOW(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.H2(b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function OI(){var a=this;DI.call(a);a.AW=null;a.z7=null;a.Cp=null;}
var Bls=null;function Bbj(){var a=new OI();AH$(a);return a;}
function AH$(a){Gn(a,Xp(0.0),0.5);a.AW=a.mC;a.z7=Xp(1.0);a.Cp=Xp(0.5);}
function ARw(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=AIh(b.K,3-c|0);if(d!==null){e=DK(d);if(e instanceof F0){f=e;b=new T;V(b);b=H(H(H(b,B(571)),Bls.data[f.BA]),B(572));g=R(c,2);b=U(H(Be(b,g?1:2),B(513)));$p=1;continue _;}}return 0;case 1:AKr(a,b);if(C()){break _;}h=g?a.z7:a.Cp;h.iW.iP=c?0:1;h.k7.iP=c?0:1;b=h.pf;i=R(c,1);b.iP=i&&g?0:1;h.d0.iP=i?0:1;h.dM.iP=i?0:1;h.i8.iP
=g&&c!=3?0:1;h.hd.iP=g&&c!=3?0:1;a.ke=h;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ADK(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-b.c3;$p=1;case 1:Z9(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALx(a){B_(a.AW.d0,0.0625);}
function Y6(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ARw(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function AL2(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADK(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACI(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADK(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAb(){var b,c;b=J(B4,5);c=b.data;c[0]=B(239);c[1]=B(573);c[2]=B(574);c[3]=B(575);c[4]=B(576);Bls=b;}
function Ly(){var a=this;Gc.call(a);a.hA=0;a.i3=0;a.hR=0;a.h6=0;a.kj=null;a.cl=0;a.gB=0;a.yQ=0;}
function Dj(a,b,c,d){var e=new Ly();A3h(e,a,b,c,d);return e;}
function Blt(a,b,c,d,e,f){var g=new Ly();SA(g,a,b,c,d,e,f);return g;}
function A3h(a,b,c,d,e){SA(a,b,c,d,200,20,e);}
function SA(a,b,c,d,e,f,g){M_(a);a.hA=200;a.i3=20;a.gB=1;a.yQ=1;a.cl=b;a.hR=c;a.h6=d;a.hA=e;a.i3=f;a.kj=g;}
function ACQ(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.yQ)return;e=b.e8;f=3553;g=b.bo;b=B(504);$p=1;case 1:$z=AHs(g,b);if(C()){break _;}h=$z;Cp(f,h);BU(1.0,1.0,1.0,1.0);h=1;f=c>=a.hR&&d>=a.h6&&c<(a.hR+a.hA|0)&&d<(a.h6+a.i3|0)?1:0;if(!a.gB)h=0;else if(f)h=2;i=a.hR;j=a.h6;h=46+(h*20|0)|0;CH(a,i,j,0,h,a.hA/2|0,a.i3);CH(a,a.hR+(a.hA/2|0)|0,a.h6,200-(a.hA/2|0)|
0,h,a.hA/2|0,a.i3);if(!a.gB)DE(a,e,a.kj,a.hR+(a.hA/2|0)|0,a.h6+((a.i3-8|0)/2|0)|0,(-6250336));else if(!f)DE(a,e,a.kj,a.hR+(a.hA/2|0)|0,a.h6+((a.i3-8|0)/2|0)|0,14737632);else DE(a,e,a.kj,a.hR+(a.hA/2|0)|0,a.h6+((a.i3-8|0)/2|0)|0,16777120);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function RZ(a,b,c){return a.gB&&b>=a.hR&&c>=a.h6&&b<(a.hR+a.hA|0)&&c<(a.h6+a.i3|0)?1:0;}
function L9(){D.call(this);}
function Blu(){var a=new L9();AVS(a);return a;}
function AVS(a){return;}
function Qo(){}
function Kq(){var a=this;L9.call(a);a.zQ=null;a.HX=null;a.vc=0;a.Di=0;a.nc=null;a.vJ=null;}
function AD$(a){var b,c,d;a:{b=a.vc;c=a.Di;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6;return d|c&8|b<<2&16|c&32|b>>>8&64|b>>>5&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function ABh(a){return a.nc.oW();}
function WA(a,b){var c,d,e,f,g;if(a.vc&1){c=new LX;O(c);M(c);}if(a.vJ===null){c=new S6;O(c);M(c);}d=b.data;e=d.length;if(e!=a.nc.data.length){c=new Cb;O(c);M(c);}f=0;while(true){if(f>=e){c=b.data;g=new a.zQ.fY();a.vJ.call(g,c);return g;}if(!FW(a.nc.data[f])&&d[f]!==null&&!Ut(a.nc.data[f],d[f])){c=new Cb;O(c);M(c);}if(FW(a.nc.data[f])&&d[f]===null)break;f=f+1|0;}c=new Cb;O(c);M(c);}
function Oo(){}
function Qv(){D.call(this);}
function Blv(){var a=new Qv();A_h(a);return a;}
function A_h(a){return;}
function AJt(a){var b,c,d;Bd();BdE.requestPointerLock();b=B$();if(VJ())clearTimeout(VJ());MS(0);if(Long_lt(Long_sub(b,PT()),Long_fromInt(3000))){c=new Tn;c.Jh=a;d=3000-Long_sub(b,PT()).lo|0;MS(setTimeout(Cu(c,"onTimer"),d));}}
function A1B(a){AJt(a);}
function WE(){D.call(this);}
function Blw(){var a=new WE();AVk(a);return a;}
function AVk(a){return;}
function A4Q(a,b,c){return b!==null?b.lM(c): -c.lM(b);}
function WC(){D.call(this);}
function Blx(){var a=new WC();A5K(a);return a;}
function A5K(a){return;}
function R6(){Fc.call(this);}
function Bly(){var a=new R6();A97(a);return a;}
function A97(a){return;}
function R5(){FU.call(this);}
function Blz(){var a=new R5();A$a(a);return a;}
function A$a(a){return;}
function R7(){Gb.call(this);}
function BlA(){var a=new R7();A3G(a);return a;}
function A3G(a){return;}
function Iy(){D.call(this);this.ra=null;}
function AKy(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.ra.Df;$p=1;case 1:$z=AHs(c,b);if(C()){break _;}d=$z;Eb(c,d);return;default:E_();}}C3().s(a,b,c,d,$p);}
function A0O(a,b){a.ra=b;}
function ANA(a){return a.ra.yf;}
function AA0(){Iy.call(this);this.EB=null;}
function Bck(){var a=new AA0();ATu(a);return a;}
function ATu(a){a.EB=BbQ();}
function ARn(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d+0.75,e+0.5);$p=1;case 1:$z=AMe(b);if(C()){break _;}g=$z;Bv( -((g*360|0)/16.0),0.0,1.0,0.0);h=B(577);$p=2;case 2:AKy(a,h);if(C()){break _;}B3();CC(1.0,(-1.0),(-1.0));AM$(a.EB);BD();Bw(0.0,0.5,0.09000000357627869);CC(0.01666666753590107,(-0.01666666753590107),0.01666666753590107);Cj(0.0,
0.0,(-0.01666666753590107));h=ANA(a);i=0;while(i<b.gr.data.length){j=b.gr.data[i];if(i!=b.rA)ED(h,j, -Dw(h,j)/2|0,(i*10|0)-(b.gr.data.length*5|0)|0,0);else{k=new T;V(k);j=U(H(H(H(k,B(578)),j),B(579)));ED(h,j, -Dw(h,j)/2|0,(i*10|0)-(b.gr.data.length*5|0)|0,0);}i=i+1|0;}BU(1.0,1.0,1.0,1.0);BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Xz(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ARn(a,b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function Nt(){var a=this;D$.call(a);a.jV=0;a.jJ=null;a.lI=0.0;a.mq=0.0;}
function Bcs(){var a=new Nt();A8b(a);return a;}
function A8b(a){a.jV=(-1);a.jJ=B(580);a.mq=0.0;a.jV=20;}
function ZE(a){return AGK(a.ch.bi,a.dJ,a.dH,a.dP)>256.0?0:1;}
function AC1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mq=a.lI;if(ZE(a)){b=a.dJ+N(a.ch.r);c=a.dH+N(a.ch.r);d=a.dP+N(a.ch.r);BV(a.ch,B(256),b,c,d,0.0,0.0,0.0);BV(a.ch,B(257),b,c,d,0.0,0.0,0.0);a.lI=a.lI+1000.0/(a.jV+200.0);while(a.lI>360.0){a.lI=a.lI-360.0;a.mq=a.mq-360.0;}if(a.jV==(-1))NR(a);if(a.jV>0)a.jV
=a.jV-1|0;else{e=4;f=0;if(f<e){g=Ji(a.jJ,a.ch);if(g===null)return;h=a.ch;i=Dl(g);j=Dv(D3(a.dJ,a.dH,a.dP,a.dJ+1|0,a.dH+1|0,a.dP+1|0),8.0,4.0,8.0);$p=1;continue _;}}}return;case 1:$z=ANd(h,i,j);if(C()){break _;}h=$z;if(h.p>=6){NR(a);return;}k=a.dJ+(Cl(a.ch.r)-Cl(a.ch.r))*4.0;l=(a.dH+E(a.ch.r,3)|0)-1|0;m=a.dP+(Cl(a.ch.r)-Cl(a.ch.r))*4.0;Ks(g,k,l,m,N(a.ch.r)*360.0,0.0);$p=2;case 2:$z=g.uQ(k,l,m);if(C()){break _;}n=$z;if(n){h=a.ch;$p=3;continue _;}f=f+1|0;if(f>=e)return;g=Ji(a.jJ,a.ch);if(g===null)return;h=a.ch;i
=Dl(g);j=Dv(D3(a.dJ,a.dH,a.dP,a.dJ+1|0,a.dH+1|0,a.dP+1|0),8.0,4.0,8.0);$p=1;continue _;case 3:AOg(h,g);if(C()){break _;}o=0;while(o<20){c=a.dJ+0.5+(N(a.ch.r)-0.5)*2.0;d=a.dH+0.5+(N(a.ch.r)-0.5)*2.0;k=a.dP+0.5+(N(a.ch.r)-0.5)*2.0;BV(a.ch,B(256),c,d,k,0.0,0.0,0.0);BV(a.ch,B(257),c,d,k,0.0,0.0,0.0);o=o+1|0;}AEP(g);NR(a);f=f+1|0;if(f>=e)return;g=Ji(a.jJ,a.ch);if(g===null)return;h=a.ch;i=Dl(g);j=Dv(D3(a.dJ,a.dH,a.dP,a.dJ+1|0,a.dH+1|0,a.dP+1|0),8.0,4.0,8.0);$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,$p);}
function NR(a){a.jV=200+E(a.ch.r,600)|0;}
function ARY(){Iy.call(this);this.wH=null;}
function Bby(){var a=new ARY();AXk(a);return a;}
function AXk(a){a.wH=Dd();}
function ZX(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d,e+0.5);g=CP(a.wH,b.jJ);if(g===null){g=Ji(b.jJ,null);BR(a.wH,b.jJ,g);}if(g===null){BD();return;}g.m=b.ch;Bw(0.0,0.4000000059604645,0.0);Bv((b.mq+(b.lI-b.mq)*f)*10.0,0.0,1.0,0.0);Bv((-30.0),1.0,0.0,0.0);Bw(0.0,(-0.4000000059604645),0.0);CC(0.4375,0.4375,0.4375);b=Bgn;c=0.0;d=0.0;e=0.0;h=0.0;$p=1;case 1:AQC(b,g,c,d,e,
h,f);if(C()){break _;}BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ARc(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ZX(a,b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AQh(){DI.call(this);}
function A_X(){var a=new AQh();A4p(a);return a;}
function A4p(a){Gn(a,A5m(),1.0);a.ke=A5m();}
function A6n(a,b){return 180.0;}
function XV(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c)return 0;if(c)return 0;d=B(581);$p=1;case 1:AKr(a,d);if(C()){break _;}e=1.0;f=1.0;$p=2;case 2:$z=ADF(b,f);if(C()){break _;}f=$z;f=(e-f)*0.5;Ba(3042);Bb(3008);Df(770,771);BU(1.0,1.0,1.0,f);return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A6j(a,b){return 180.0;}
function X$(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=XV(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function T2(){DI.call(this);}
function AGc(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(582);$p=1;case 1:AKr(a,d);if(C()){break _;}return !c&&b.qx?1:0;default:E_();}}C3().s(a,b,c,d,$p);}
function AMa(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AGc(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function FY(){var a=this;Eh.call(a);a.hc=null;a.hB=null;a.jF=null;a.jE=null;a.jD=null;a.jG=null;}
function BlB(a,b){var c=new FY();KW(c,a,b);return c;}
function KW(a,b,c){var d,e;a.hc=BK(0,0);BG(a.hc,(-4.0),(-4.0),(-8.0),8,8,8,c);BJ(a.hc,0.0,18-b|0,(-6.0));a.hB=BK(28,8);BG(a.hB,(-5.0),(-10.0),(-7.0),10,16,8,c);BJ(a.hB,0.0,17-b|0,2.0);a.jF=BK(0,16);BG(a.jF,(-2.0),0.0,(-2.0),4,b,4,c);d=a.jF;e=24-b|0;BJ(d,(-3.0),e,7.0);a.jE=BK(0,16);BG(a.jE,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jE,3.0,e,7.0);a.jD=BK(0,16);BG(a.jD,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jD,(-3.0),e,(-5.0));a.jG=BK(0,16);BG(a.jG,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jG,3.0,e,(-5.0));}
function A9Z(a,b,c,d,e,f,g){AJS(a,b,c,d,e,f,g);B_(a.hc,g);B_(a.hB,g);B_(a.jF,g);B_(a.jE,g);B_(a.jD,g);B_(a.jG,g);}
function AJS(a,b,c,d,e,f,g){var h;a.hc.bY=e/57.2957763671875;a.hB.b1=1.5707963705062866;h=a.jF;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.jE;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.jD.b1=BC(d)*1.399999976158142*c;a.jG.b1=BC(b)*1.399999976158142*c;}
function PR(){FY.call(this);}
function BcM(){var a=new PR();AYb(a);return a;}
function AYb(a){KW(a,6,0.0);}
function Ty(){DI.call(this);}
function AM2(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(583);$p=1;case 1:AKr(a,d);if(C()){break _;}return !c&&!b.x3?1:0;default:E_();}}C3().s(a,b,c,d,$p);}
function ARq(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AM2(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function ACE(){FY.call(this);}
function Bcj(){var a=new ACE();A95(a);return a;}
function A95(a){KW(a,12,0.0);a.hc=BK(0,0);BG(a.hc,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BJ(a.hc,0.0,6.0,(-8.0));a.hB=BK(28,8);BG(a.hB,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BJ(a.hB,0.0,5.0,2.0);}
function ARf(){FY.call(this);}
function BbU(){var a=new ARf();AU9(a);return a;}
function AU9(a){KW(a,12,0.0);a.hc=BK(0,0);BG(a.hc,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BJ(a.hc,0.0,6.0,(-8.0));a.hB=BK(28,8);BG(a.hB,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BJ(a.hB,0.0,5.0,2.0);a.jF=BK(0,16);BG(a.jF,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jF,(-3.0),12.0,7.0);a.jE=BK(0,16);BG(a.jE,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jE,3.0,12.0,7.0);a.jD=BK(0,16);BG(a.jD,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jD,(-3.0),12.0,(-5.0));a.jG=BK(0,16);BG(a.jG,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jG,3.0,12.0,(-5.0));}
function AB6(){DI.call(this);}
function Bb$(){var a=new AB6();AZJ(a);return a;}
function AZJ(a){Gn(a,BaU(),0.5);}
function ADA(a,b,c){var d,e,f;d=Qi(b,c);e=1.0+Bq(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;c=d*d;c=c*c;f=(1.0+c*0.4000000059604645)*e;CC(f,(1.0+c*0.10000000149011612)/e,f);}
function X9(a,b,c,d){var e,f;e=Qi(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function A7W(a,b,c){ADA(a,b,c);}
function AZV(a,b,c,d){return X9(a,b,c,d);}
function HN(){Mw.call(this);}
function BlC(){var a=new HN();A8c(a);return a;}
function A8c(a){KE(a);}
function A2I(a,b,c,d,e,f,g){var h,i,j;AIR(a,b,c,d,e,f,g);h=Bq(a.xU*3.1415927410125732);i=Bq((1.0-(1.0-a.xU)*(1.0-a.xU))*3.1415927410125732);a.d0.bV=0.0;a.dM.bV=0.0;j=a.d0;b=0.10000000149011612-h*0.6000000238418579;j.bY= -b;a.dM.bY=b;a.d0.b1=(-1.5707963705062866);a.dM.b1=(-1.5707963705062866);j=a.d0;b=j.b1;c=h*1.2000000476837158-i*0.4000000059604645;j.b1=b-c;j=a.dM;j.b1=j.b1-c;j=a.d0;b=j.bV;c=d*0.09000000357627869;j.bV=b+BC(c)*0.05000000074505806+0.05000000074505806;j=a.dM;j.bV=j.bV-(BC(c)*0.05000000074505806
+0.05000000074505806);j=a.d0;b=j.b1;c=d*0.06700000166893005;j.b1=b+Bq(c)*0.05000000074505806;j=a.dM;j.b1=j.b1-Bq(c)*0.05000000074505806;}
function AIm(){HN.call(this);}
function Bcx(){var a=new AIm();AWn(a);return a;}
function AWn(a){KE(a);a.d0=BK(40,16);BG(a.d0,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.d0,(-5.0),2.0,0.0);a.dM=BK(40,16);a.dM.lz=1;BG(a.dM,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.dM,5.0,2.0,0.0);a.i8=BK(0,16);BG(a.i8,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.i8,(-2.0),12.0,0.0);a.hd=BK(0,16);a.hd.lz=1;BG(a.hd,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.hd,2.0,12.0,0.0);}
function K$(){DP.call(this);}
function AO7(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.m;$p=1;case 1:$z=ANg(e,b,c,d);if(C()){break _;}f=$z;return f-0.5;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function T6(){DI.call(this);this.tu=0.0;}
function Zr(a,b,c){CC(a.tu,a.tu,a.tu);}
function A$0(a,b,c){Zr(a,b,c);}
function TF(){Dg.call(this);}
function BlD(){var a=new TF();AZt(a);return a;}
function AZt(a){EH(a);}
function AJr(a,b,c,d,e,f,g){B3();A8p(b.L,c-b.cr,d-b.b7,e-b.cs);BD();}
function ID(){var a=this;C5.call(a);a.ru=0;a.dI=0;a.nm=0;a.Ex=0;a.nt=0;a.dR=null;}
function JM(a,b){var c,d,e,f,g,h,i,j,k,l;a.dI=b;c=b*90|0;a.v=c;a.P=c;c=a.dR.gg;d=a.dR.m3;e=a.dR.gg;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;d=d/32.0;f=e/32.0;g=a.nm+0.5;h=a.Ex+0.5;i=a.nt+0.5;if(!b)i=i-0.5625;j=R(b,1);if(!j)g=g-0.5625;k=R(b,2);if(!k)i=i+0.5625;l=R(b,3);if(!l)g=g+0.5625;if(!b)g=g-HK(a,a.dR.gg);if(!j)i=i+HK(a,a.dR.gg);if(!k)g=g+HK(a,a.dR.gg);if(!l)i=i-HK(a,a.dR.gg);e=h+HK(a,a.dR.m3);CT(a,g,e,i);M1(a.L,g-c+0.0062500000931322575,e-d+0.0062500000931322575,i-f+0.0062500000931322575,g+c+(-0.0062500000931322575),
e+d+(-0.0062500000931322575),i+f+(-0.0062500000931322575));}
function HK(a,b){return b==32?0.5:b!=64?0.0:0.5;}
function ADi(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ru;a.ru=b+1|0;if(b!=100)return;$p=1;case 1:$z=ZG(a);if(C()){break _;}c=$z;if(c)return;a.ru=0;$p=2;case 2:Ca(a);if(C()){break _;}d=a.m;e=new E$;f=a.m;g=a.d;h=a.j;i=a.e;j=new Cd;BB();DB(j,BiA);Ha(e,f,g,h,i,j);$p=3;case 3:AOg(d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ZG(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.m;c=a.L;$p=1;case 1:$z=XQ(b,a,c);if(C()){break _;}b=$z;if(b.p>0)return 0;d=a.dR.gg/16|0;e=a.dR.m3/16|0;f=a.nm;g=a.nt;if(!a.dI)f=K(a.d-a.dR.gg/32.0);if(a.dI==1)g=K(a.e-a.dR.gg/32.0);if(a.dI==2)f=K(a.d-a.dR.gg/32.0);if(a.dI==3)g=K(a.e-a.dR.gg/32.0);h=K(a.j-a.dR.m3/32.0);i=0;while
(i<d){j=0;if(j<e){if(a.dI&&a.dI!=2){b=a.m;k=a.nm;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.m;k=f+i|0;l=h+j|0;m=a.nt;$p=3;continue _;}i=i+1|0;}b=a.m;c=a.L;$p=2;case 2:$z=ADI(b,a,c);if(C()){break _;}c=$z;k=0;while(k<c.p){if(Z(c,k) instanceof ID)return 0;k=k+1|0;}return 1;case 3:$z=ABX(b,k,l,m);if(C()){break _;}b=$z;if(!b.du())return 0;j=j+1|0;while(true){if(j<e){if(a.dI&&a.dI!=2){b=a.m;k=a.nm;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.m;k=f+i|0;l=h+j|0;m=a.nt;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.m;c=a.L;$p=2;continue _;case 4:$z
=ABX(b,k,l,m);if(C()){break _;}b=$z;if(!b.du())return 0;j=j+1|0;while(true){if(j<e){if(a.dI&&a.dI!=2){b=a.m;k=a.nm;l=h+j|0;m=g+i|0;continue _;}b=a.m;k=f+i|0;l=h+j|0;m=a.nt;$p=3;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.m;c=a.L;$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AXN(a){return 1;}
function AEo(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Ca(a);if(C()){break _;}d=a.m;b=new E$;e=a.m;f=a.d;g=a.j;h=a.e;i=new Cd;BB();DB(i,BiA);Ha(b,e,f,g,h,i);$p=2;case 2:AOg(d,b);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAp(){Dg.call(this);this.H9=null;}
function BbS(){var a=new AAp();AZz(a);return a;}
function AZz(a){EH(a);a.H9=new Dz;}
function AP_(a,b,c,d,e,f,g){var h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);Bv(f,0.0,1.0,0.0);Ba(32826);h=B(584);$p=1;case 1:AKr(a,h);if(C()){break _;}h=b.dR;CC(0.0625,0.0625,0.0625);i=h.gg;j=h.m3;k=h.zG;l=h.zF;$p=2;case 2:ACR(a,b,i,j,k,l);if(C()){break _;}Bb(32826);BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ACR(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g= -c/2.0;h= -d/
2.0;i=0;j=c/16|0;k=d/16|0;l=e+c|0;m=f+d|0;while(i<j){if(0<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=0+1|0;f=q*16|0;r=h+f;s=0*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dI)w=K(b.d+u/16.0);if(b.dI==1)y=K(b.e-u/16.0);if(b.dI==2)w=K(b.d-u/16.0);if(b.dI==3)y=K(b.e+u/16.0);z=a.iA.n0;$p=1;continue _;}i=i+1|0;}return;case 1:$z=ANg(z,w,x,y);if(C()){break _;}ba=$z;F3(ba,ba,ba);ba=(l-o|0)/256.0;u=(l-c|0)/256.0;v=(m-s|0)/256.0;bb=(m-f|0)/256.0;BA();z=BeK;Bz(z);Cj(0.0,0.0,(-1.0));bc=n;bd=t;be
=u;bf=v;G(z,bc,bd,(-0.5),be,bf);bg=p;bh=ba;G(z,bg,bd,(-0.5),bh,bf);bf=r;bi=bb;G(z,bg,bf,(-0.5),bh,bi);G(z,bc,bf,(-0.5),be,bi);Cj(0.0,0.0,1.0);G(z,bc,bf,0.5,0.75,0.0);G(z,bg,bf,0.5,0.8125,0.0);G(z,bg,bd,0.5,0.8125,0.0625);G(z,bc,bd,0.5,0.75,0.0625);Cj(0.0,(-1.0),0.0);G(z,bc,bf,(-0.5),0.75,0.001953125);G(z,bg,bf,(-0.5),0.8125,0.001953125);G(z,bg,bf,0.5,0.8125,0.001953125);G(z,bc,bf,0.5,0.75,0.001953125);Cj(0.0,1.0,0.0);G(z,bc,bd,0.5,0.75,0.001953125);G(z,bg,bd,0.5,0.8125,0.001953125);G(z,bg,bd,(-0.5),0.8125,0.001953125);G(z,
bc,bd,(-0.5),0.75,0.001953125);Cj((-1.0),0.0,0.0);G(z,bc,bf,0.5,0.751953125,0.0);G(z,bc,bd,0.5,0.751953125,0.0625);G(z,bc,bd,(-0.5),0.751953125,0.0625);G(z,bc,bf,(-0.5),0.751953125,0.0);Cj(1.0,0.0,0.0);G(z,bg,bf,(-0.5),0.751953125,0.0);G(z,bg,bd,(-0.5),0.751953125,0.0625);G(z,bg,bd,0.5,0.751953125,0.0625);G(z,bg,bf,0.5,0.751953125,0.0);Br(z);s=q;while(true){if(s<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=s+1|0;f=q*16|0;r=h+f;s=s*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dI)w=K(b.d
+u/16.0);if(b.dI==1)y=K(b.e-u/16.0);if(b.dI==2)w=K(b.d-u/16.0);if(b.dI==3)y=K(b.e+u/16.0);z=a.iA.n0;continue _;}i=i+1|0;if(i>=j)break;s=0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AOQ(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AP_(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Jp(){var a=this;C5.call(a);a.sw=0;a.s2=0;a.rF=0;a.vQ=0;a.ph=0;a.lk=0;a.sl=null;a.p0=0;a.m6=0;}
function AS9(a,b){var c=new Jp();AY_(c,a,b);return c;}
function AY_(a,b,c){Fz(a,b);a.sw=(-1);a.s2=(-1);a.rF=(-1);a.vQ=0;a.ph=0;a.lk=0;a.m6=0;a.sl=c;D1(a,0.5,0.5);Ks(a,c.d,c.j,c.e,c.v,c.J);a.d=a.d-BC(a.v/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.e=a.e-Bq(a.v/180.0*3.1415927410125732)*0.1599999964237213;CT(a,a.d,a.j,a.e);a.c3=0.0;a.g= -Bq(a.v/180.0*3.1415927410125732)*BC(a.J/180.0*3.1415927410125732);a.h=BC(a.v/180.0*3.1415927410125732)*BC(a.J/180.0*3.1415927410125732);a.i= -Bq(a.J/180.0*3.1415927410125732);Qz(a,a.g,a.i,a.h,1.5,1.0);}
function Qz(a,b,c,d,e,f){var g,h,i;g=Ce(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;g=CY(a.n)*0.007499999832361937;h=f;b=b+g*h;c=c+CY(a.n)*0.007499999832361937*h;d=d+CY(a.n)*0.007499999832361937*h;g=e;b=b*g;c=c*g;d=d*g;a.g=b;a.i=c;a.h=d;i=Ce(b*b+d*d);e=CR(b,d)*180.0/3.1415927410125732;a.v=e;a.P=e;e=CR(c,i)*180.0/3.1415927410125732;a.J=e;a.T=e;a.p0=0;}
function APs(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AI8(a);if(C()){break _;}if(a.lk>0)a.lk=a.lk-1|0;if(a.ph){b=a.m;c=a.sw;d=a.s2;e=a.rF;$p=2;continue _;}a.m6=a.m6+1|0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.m;$p=3;continue _;case 2:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;if
(c==a.vQ){a.p0=a.p0+1|0;if(a.p0!=1200)return;$p=4;continue _;}a.ph=0;a.g=a.g*N(a.n)*0.20000000298023224;a.i=a.i*N(a.n)*0.20000000298023224;a.h=a.h*N(a.n)*0.20000000298023224;a.p0=0;a.m6=0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.m;$p=3;case 3:$z=AJk(g,b,f);if(C()){break _;}g=$z;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);if(g!==null)f=BY(g.gx.x,g.gx.z,g.gx.w);h=null;i=a.m;j=Dv(Ja(a.L,a.g,a.i,a.h),1.0,1.0,1.0);$p=5;continue _;case 4:Ca(a);if(C()){break _;}return;case 5:$z=ADI(i,a,j);if(C()){break _;}i
=$z;k=0.0;d=0;while(d<De(i)){j=Z(i,d);if(j.lq()&&!(j===a.sl&&a.m6<5)){l=QN(Dv(j.L,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,f);if(l!==null){m=DH(b,l.gx);if(!(m>=k&&k!==0.0)){h=j;k=m;}}}d=d+1|0;}if(h!==null)g=A1a(h);if(g!==null){if(g.ny!==null){b=g.ny;f=a.sl;c=4;$p=7;continue _;}a.sw=g.h9;a.s2=g.h$;a.rF=g.h_;b=a.m;c=a.sw;d=a.s2;e=a.rF;$p=6;continue _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.J=CR(a.i,n)*180.0/3.1415927410125732;while
(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}a.J=a.T+(a.J-a.T)*0.20000000298023224;a.v=a.P+(a.v-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 6:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;a.vQ=c;a.g=g.gx.x-a.d;a.i=g.gx.z-a.j;a.h=g.gx.w-a.e;n=Ce(a.g*a.g+a.i*a.i+a.h*a.h);k=a.d;m=a.g;p=n;a.d=k-m/p*0.05000000074505806;a.j=a.j-a.i/p*0.05000000074505806;a.e=a.e-a.h/p*0.05000000074505806;Dh(a.m,a,B(585),
1.0,1.2000000476837158/(N(a.n)*0.20000000298023224+0.8999999761581421));a.ph=1;a.lk=7;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.J=CR(a.i,n)*180.0/3.1415927410125732;while(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}a.J=a.T+(a.J-a.T)*0.20000000298023224;a.v=a.P+(a.v-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 7:$z=b.fq(f,c);if(C())
{break _;}c=$z;if(c){Dh(a.m,a,B(585),1.0,1.2000000476837158/(N(a.n)*0.20000000298023224+0.8999999761581421));$p=8;continue _;}a.g=a.g*(-0.10000000149011612);a.i=a.i*(-0.10000000149011612);a.h=a.h*(-0.10000000149011612);a.v=a.v+180.0;a.P=a.P+180.0;a.m6=0;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.J=CR(a.i,n)*180.0/3.1415927410125732;while(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while
(a.v-a.P>=180.0){a.P=a.P+360.0;}a.J=a.T+(a.J-a.T)*0.20000000298023224;a.v=a.P+(a.v-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 8:Ca(a);if(C()){break _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.J=CR(a.i,n)*180.0/3.1415927410125732;while(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}a.J=a.T+(a.J-a.T)*0.20000000298023224;a.v=a.P+(a.v
-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;case 9:$z=AE5(a);if(C()){break _;}c=$z;if(c){e=0;while(e<4){BV(a.m,B(213),a.d-a.g*0.25,a.j-a.i*0.25,a.e-a.h*0.25,a.g,a.i,a.h);e=e+1|0;}o=0.800000011920929;}k=a.g;m=o;a.g=k*m;a.i=a.i*m;a.h=a.h*m;a.i=a.i-0.029999999329447746;CT(a,a.d,a.j,a.e);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function A7B(a,b){var c,d;if(a.ph&&a.sl===b&&a.lk<=0){c=b.K;d=new Cd;BB();MJ(d,Bgc.cV,1);if(U6(c,d)){Dh(a.m,a,B(586),0.20000000298023224,((N(a.n)-N(a.n))*0.699999988079071+1.0)*2.0);RS(b,a);Ca(a);}}}
function Rs(){Dg.call(this);}
function BlE(){var a=new Rs();AST(a);return a;}
function AST(a){EH(a);}
function AJV(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=B(587);$p=1;case 1:AKr(a,h);if(C()){break _;}B3();Bw(c,d,e);Bv(b.P+(b.v-b.P)*g-90.0,0.0,1.0,0.0);Bv(b.T+(b.J-b.T)*g,0.0,0.0,1.0);BA();h=BeK;Ba(32826);i=b.lk-g;if(i>0.0)Bv( -Bq(i*3.0)*i,0.0,0.0,1.0);Bv(45.0,1.0,0.0,0.0);CC(0.05624999850988388,0.05624999850988388,0.05624999850988388);Bw((-4.0),0.0,0.0);Cj(0.05624999850988388,
0.0,0.0);Bz(h);G(h,(-7.0),(-2.0),(-2.0),0.0,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.3125);G(h,(-7.0),2.0,(-2.0),0.0,0.3125);Br(h);Cj((-0.05624999850988388),0.0,0.0);Bz(h);G(h,(-7.0),2.0,(-2.0),0.0,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.3125);G(h,(-7.0),(-2.0),(-2.0),0.0,0.3125);Br(h);j=0;while(j<4){Bv(90.0,1.0,0.0,0.0);Cj(0.0,0.0,0.05624999850988388);Bz(h);G(h,(-8.0),(-2.0),0.0,0.0,0.0);G(h,8.0,(-2.0),0.0,0.5,0.0);G(h,8.0,2.0,0.0,0.5,
0.15625);G(h,(-8.0),2.0,0.0,0.0,0.15625);Br(h);j=j+1|0;}Bb(32826);BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ADg(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJV(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function E$(){var a=this;C5.call(a);a.nd=null;a.zm=0;a.mH=0;a.g$=0;a.q1=0;a.ys=0.0;}
function Hb(a,b,c,d,e){var f=new E$();Ha(f,a,b,c,d,e);return f;}
function Ha(a,b,c,d,e,f){Fz(a,b);a.mH=0;a.q1=5;a.ys=BP()*3.141592653589793*2.0;D1(a,0.25,0.25);a.c3=a.eM/2.0;CT(a,c,d,e);a.nd=f;a.v=BP()*360.0;a.g=BP()*0.20000000298023224-0.10000000149011612;a.i=0.20000000298023224;a.h=BP()*0.20000000298023224-0.10000000149011612;a.i7=0;}
function AJD(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Ja();if(C()){break _;}if(a.g$>0)a.g$=a.g$-1|0;a.bT=a.d;a.cR=a.j;a.bS=a.e;a.i=a.i-0.03999999910593033;b=a.m;c=K(a.d);d=K(a.j);e=K(a.e);$p=2;case 2:$z=ABX(b,c,d,e);if(C()){break _;}b=$z;if(b===BfQ){a.i=0.20000000298023224;a.g=(N(a.n)-N(a.n))*0.20000000298023224;a.h=(N(a.n)-N(a.n))*0.20000000298023224;Dh(a.m,a,B(215),0.4000000059604645,
2.0+N(a.n)*0.4000000059604645);}f=a.d;g=a.j;h=a.e;$p=3;case 3:ACD(a,f,g,h);if(C()){break _;}$p=4;case 4:AEc(a);if(C()){break _;}f=a.g;g=a.i;h=a.h;$p=5;case 5:ARD(a,f,g,h);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}a.zm=a.zm+1|0;a.mH=a.mH+1|0;if(a.mH<6000)return;$p=6;case 6:Ca(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AEc(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.m;c=a.L;d=BfP;$p=1;case 1:$z=AAq(b,c,d,a);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ACD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=b-e;i=c-f;j=d-g;L();k=Bgz.data;l=a.m;$p=1;case 1:$z=ACt(l,e,f,g);if(C()){break _;}m=$z;if(!k[m])return 0;k=Bgz.data;l=a.m;m=e-1|0;$p=2;case 2:$z=ACt(l,m,f,g);if(C())
{break _;}m=$z;n=k[m]?0:1;k=Bgz.data;l=a.m;m=e+1|0;$p=3;case 3:$z=ACt(l,m,f,g);if(C()){break _;}m=$z;o=k[m]?0:1;k=Bgz.data;l=a.m;m=f-1|0;$p=4;case 4:$z=ACt(l,e,m,g);if(C()){break _;}m=$z;p=k[m]?0:1;k=Bgz.data;l=a.m;m=f+1|0;$p=5;case 5:$z=ACt(l,e,m,g);if(C()){break _;}m=$z;q=k[m]?0:1;k=Bgz.data;l=a.m;m=g-1|0;$p=6;case 6:$z=ACt(l,e,f,m);if(C()){break _;}m=$z;m=k[m]?0:1;k=Bgz.data;l=a.m;r=g+1|0;$p=7;case 7:$z=ACt(l,e,f,r);if(C()){break _;}e=$z;r=k[e]?0:1;s=(-1);t=9999.0;if(n&&h<t){s=0;t=h;}if(!o)b=t;else{b=1.0
-h;if(b<t)s=1;else b=t;}if(p&&i<b){s=2;b=i;}if(!q)c=b;else{c=1.0-i;if(c<b)s=3;else c=b;}if(m&&j<c){s=4;c=j;}if(r&&1.0-j<c)s=5;u=N(a.n)*0.20000000298023224+0.10000000149011612;if(!s)a.g= -u;if(s==1)a.g=u;if(s==2)a.i= -u;if(s==3)a.i=u;if(s==4)a.h= -u;if(s==5)a.h=u;return 0;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AMt(a,b){Vc(a,null,b);}
function Vc(a,b,c){a.q1=a.q1-c|0;if(a.q1<=0)Ca(a);return 0;}
function A_d(a,b){if(!a.g$&&U6(b.K,a.nd)){Dh(a.m,a,B(586),0.20000000298023224,((N(a.n)-N(a.n))*0.699999988079071+1.0)*2.0);RS(b,a);Ca(a);}}
function Mo(){C5.call(this);this.ho=0;}
function AWN(a,b,c,d){var e=new Mo();A6y(e,a,b,c,d);return e;}
function A6y(a,b,c,d,e){var f,g,h;Fz(a,b);a.ho=0;a.mz=1;D1(a,0.9800000190734863,0.9800000190734863);a.c3=a.eM/2.0;f=c;g=d;h=e;CT(a,f,g,h);e=BP()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.g= -Bq(e)*0.019999999552965164;a.i=0.20000000298023224;a.h= -BC(e)*0.019999999552965164;a.i7=0;a.ho=80;a.bT=f;a.cR=g;a.bS=h;}
function A$d(a){return a.cQ?0:1;}
function XF(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARD(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}e=a.ho;a.ho=e-1|0;if(e>0){BV(a.m,B(256),a.d,a.j+0.5,a.e,0.0,
0.0,0.0);return;}$p=2;case 2:Ca(a);if(C()){break _;}f=4.0;g=a.m;h=null;b=a.d;c=a.j;d=a.e;$p=3;case 3:X7(g,h,b,c,d,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AOU(){Dg.call(this);this.wd=null;}
function Ban(){var a=new AOU();A7g(a);return a;}
function A7g(a){EH(a);a.wd=Kh();a.l8=0.5;}
function APw(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);if(b.ho-g+1.0<10.0){h=1.0-(b.ho-g+1.0)/10.0;if(h<0.0)h=0.0;if(h>1.0)h=1.0;f=h*h;i=1.0+f*f*0.30000001192092896;CC(i,i,i);}h=(1.0-(b.ho-g+1.0)/100.0)*0.800000011920929;j=B(179);$p=1;case 1:AKr(a,j);if(C()){break _;}j=a.wd;L();GW(j,Bfj);if(!((b.ho/5|0)%2|0)){Bb(3553);Bb(2896);Ba(3042);Df(770,772);BU(1.0,
1.0,1.0,h);GW(a.wd,Bfj);BU(1.0,1.0,1.0,1.0);Bb(3042);Ba(2896);Ba(3553);}BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AL5(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APw(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function JJ(){var a=this;C5.call(a);a.hS=0;a.oN=0;}
function AYh(a){return a.cQ?0:1;}
function AMM(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.hS){$p=3;continue _;}a.bT=a.d;a.cR=a.j;a.bS=a.e;a.oN=a.oN+1|0;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARD(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=K(a.d);f=K(a.j);g=K(a.e);h=a.m;$p=2;case 2:$z=ACt(h,e,f,g);if(C()){break _;}i
=$z;if(i==a.hS){h=a.m;i=0;$p=4;continue _;}if(!a.cx){if(a.oN<=100)return;e=a.hS;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;continue _;case 3:Ca(a);if(C()){break _;}return;case 4:APv(h,e,f,g,i);if(C()){break _;}if(!a.cx){if(a.oN<=100)return;e=a.hS;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;case 5:Ca(a);if(C()){break _;}h=a.m;i=a.hS;j=1;$p=6;case 6:$z=AH9(h,i,e,f,g,j);if(C()){break _;}i=$z;if(!i){e=a.hS;f=1;$p=
9;continue _;}h=a.m;i=a.hS;$p=10;continue _;case 7:ABQ(a,e,f);if(C()){break _;}$p=8;case 8:Ca(a);if(C()){break _;}return;case 9:ABQ(a,e,f);if(C()){break _;}return;case 10:$z=APv(h,e,f,g,i);if(C()){break _;}e=$z;if(e)return;e=a.hS;f=1;$p=9;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AXY(a){return a.m;}
function AQM(){Dg.call(this);this.Dw=null;}
function Baf(){var a=new AQM();AXq(a);return a;}
function AXq(a){EH(a);a.Dw=Kh();a.l8=0.5;}
function AQg(a,b,c,d,e,f,g){var h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);h=B(179);$p=1;case 1:AKr(a,h);if(C()){break _;}L();h=BeO.data[b.hS];i=b.m;Bb(2896);j=a.Dw;k=K(b.d);l=K(b.j);m=K(b.e);$p=2;case 2:AIZ(j,h,i,k,l,m);if(C()){break _;}Ba(2896);BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARj(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQg(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Gd(){var a=this;C5.call(a);a.Bn=null;a.iQ=0;a.ky=0;a.oM=0;a.kJ=0;}
var BlF=null;function ASP(a,b){return b.L;}
function AZ1(a){return a.L;}
function A7E(a){return 1;}
function AVM(a){return a.eM*0.2;}
function ALf(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oM= -a.oM;a.ky=10;a.iQ=a.iQ+(c*10|0)|0;if(a.iQ<=40)return 1;BB();c=BiG.cV;d=1;e=0.0;$p=1;case 1:AGE(a,c,d,e);if(C()){break _;}$p=2;case 2:APe(a);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,$p);}
function A9L(a){return a.cQ?0:1;}
function APe(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=27;while(b<c){d=TO(a,b);if(d!==null){e=N(a.n)*0.800000011920929+0.10000000149011612;f=N(a.n)*0.800000011920929+0.10000000149011612;g=N(a.n)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;if(d.q>0){k=E(a.n,21)+10|0;if(k>d.q)k=d.q;d.q=d.q-k|0;l=Hb(a.m,a.d+h,a.j+i,a.e+j,
Ol(d.bC,k,d.el));l.g=CY(a.n)*0.05000000074505806;l.i=CY(a.n)*0.05000000074505806+0.20000000298023224;l.h=CY(a.n)*0.05000000074505806;m=a.m;$p=2;continue _;}}b=b+1|0;}$p=1;case 1:Ca(a);if(C()){break _;}return;case 2:AOg(m,l);if(C()){break _;}a:while(true){if(d.q>0){k=E(a.n,21)+10|0;if(k>d.q)k=d.q;d.q=d.q-k|0;l=Hb(a.m,a.d+h,a.j+i,a.e+j,Ol(d.bC,k,d.el));l.g=CY(a.n)*0.05000000074505806;l.i=CY(a.n)*0.05000000074505806+0.20000000298023224;l.h=CY(a.n)*0.05000000074505806;m=a.m;continue _;}while(true){b=b+1|0;if(b>=
c)break a;d=TO(a,b);if(d===null)continue;else break;}e=N(a.n)*0.800000011920929+0.10000000149011612;f=N(a.n)*0.800000011920929+0.10000000149011612;g=N(a.n)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;}$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ASE(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ky>0)a.ky=a.ky-1|0;if(a.iQ>0)a.iQ=a.iQ-1|0;a.bT=a.d;a.cR=a.j;a.bS=a.e;a.i=a.i
-0.03999999910593033;b=K(a.d);c=K(a.j);d=K(a.e);e=a.m;f=c-1|0;$p=1;case 1:$z=ACt(e,b,f,d);if(C()){break _;}f=$z;L();if(f==Bg7.b)c=c+(-1)|0;g=0.4;h=0.0078125;e=a.m;$p=2;case 2:$z=ACt(e,b,c,d);if(C()){break _;}f=$z;if(f==Bg7.b){i=a.d;j=a.j;k=a.e;$p=3;continue _;}if(a.g<(-0.4))a.g=(-0.4);if(a.g>g)a.g=g;if(a.h<(-0.4))a.h=(-0.4);if(a.h>g)a.h=g;if(a.cx){a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;}i=a.g;j=a.i;k=a.h;$p=5;continue _;case 3:$z=ASi(a,i,j,k);if(C()){break _;}l=$z;e=a.m;$p=4;case 4:$z=AEH(e,b,c,d);if(C()){break _;}m
=$z;a.j=c;n=R(m,2);if(n>=0&&m<=5)a.j=c+1|0;if(!n)a.g=a.g-h;if(m==3)a.g=a.g+h;if(m==4)a.h=a.h+h;if(m==5)a.h=a.h-h;o=BlF.data[m].data;p=o[1].data[0]-o[0].data[0]|0;q=o[1].data[2]-o[0].data[2]|0;r=Ed(p*p+q*q);if(a.g*p+a.h*q<0.0){p= -p;q= -q;}s=Ed(a.g*a.g+a.h*a.h);a.g=s*p/r;a.h=s*q/r;t=b;u=t+0.5;v=u+o[0].data[0]*0.5;w=d;p=w+0.5;i=p+o[0].data[2]*0.5;j=u+o[1].data[0]*0.5;k=p+o[1].data[2]*0.5;j=j-v;k=k-i;if(j===0.0){a.d=u;u=a.e-w;}else if(k===0.0){a.e=p;u=a.d-t;}else u=((a.d-v)*j+(a.e-i)*k)*2.0;a.d=v+j*u;a.e=i+k*u;CT(a,
a.d,a.j+a.c3,a.e);x=a.g;t=a.h;if(a.bI!==null){x=x*0.75;t=t*0.75;}i=(-0.4);if(x<i)x=i;if(x>g)x=g;if(t>=i)i=t;if(i<=g)g=i;i=0.0;$p=7;continue _;case 5:ARD(a,i,j,k);if(C()){break _;}if(!a.cx){a.g=a.g*0.949999988079071;a.i=a.i*0.949999988079071;a.h=a.h*0.949999988079071;}a.J=0.0;y=a.bT-a.d;z=a.bS-a.e;if(y*y+z*z>0.001){a.v=CR(z,y)*180.0/3.141592653589793;if(a.kJ)a.v=a.v+180.0;}ba=a.v-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.v=a.v+180.0;a.kJ=a.kJ?0:1;}WN(a,
a.v,a.J);e=a.m;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADI(e,a,l);if(C()){break _;}bb=$z;if(bb!==null&&De(bb)>0){bc=0;while(true){if(bc>=De(bb))break a;bd=Z(bb,bc);if(bd!==a.bI&&bd.rP()&&bd instanceof Gd)bd.uX(a);bc=bc+1|0;}}}if(a.bI!==null&&a.bI.cQ)a.bI=null;return;case 7:ARD(a,x,i,g);if(C()){break _;}if(o[0].data[1]&&(K(a.d)-b|0)==o[0].data[0]&&(K(a.e)-d|0)==o[0].data[2])CT(a,a.d,a.j+o[0].data[1],a.e);else if(o[1].data[1]&&(K(a.d)-b|0)==o[1].data[0]&&(K(a.e)-d|0)==o[1].data[2])CT(a,
a.d,a.j+o[1].data[1],a.e);if(a.bI===null){a.g=a.g*0.9599999785423279;a.i=a.i*0.0;a.h=a.h*0.9599999785423279;}else{a.g=a.g*0.996999979019165;a.i=a.i*0.0;a.h=a.h*0.996999979019165;}i=a.d;j=a.j;k=a.e;$p=8;case 8:$z=ASi(a,i,j,k);if(C()){break _;}e=$z;if(e!==null&&l!==null){w=(l.z-e.z)*0.05;i=Ed(a.g*a.g+a.h*a.h);if(i>0.0){j=a.g/i;k=i+w;a.g=j*k;a.h=a.h/i*k;}CT(a,a.d,e.z,a.e);}f=K(a.d);n=K(a.e);if(!(f==b&&n==d)){i=Ed(a.g*a.g+a.h*a.h);a.g=i*(f-b|0);a.h=i*(n-d|0);}a.J=0.0;y=a.bT-a.d;z=a.bS-a.e;if(y*y+z*z>0.001){a.v=
CR(z,y)*180.0/3.141592653589793;if(a.kJ)a.v=a.v+180.0;}ba=a.v-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.v=a.v+180.0;a.kJ=a.kJ?0:1;}WN(a,a.v,a.J);e=a.m;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AJX(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=K(b);g=K(c);h=K(d);i=a.m;j=g-1|0;$p=1;case 1:$z=ACt(i,f,j,h);if(C()){break _;}j=$z;L();if(j==Bg7.b)g=g+(-1)|0;i=a.m;$p=2;case 2:$z=ACt(i,f,g,h);if(C()){break _;}j=$z;if(j!=Bg7.b)return null;i=a.m;$p=3;case 3:$z=AEH(i,f,g,h);if(C()){break _;}j=$z;c=g;if(j>=2&&j<=5)c
=g+1|0;k=BlF.data[j].data;l=k[1].data[0]-k[0].data[0]|0;m=k[1].data[2]-k[0].data[2]|0;n=Ed(l*l+m*m);l=l/n;m=m/n;l=b+l*e;d=d+m*e;if(k[0].data[1]&&(K(l)-f|0)==k[0].data[0]&&(K(d)-h|0)==k[0].data[2])c=c+k[0].data[1];else if(k[1].data[1]&&(K(l)-f|0)==k[1].data[0]&&(K(d)-h|0)==k[1].data[2])c=c+k[1].data[1];$p=4;case 4:$z=ASi(a,l,c,d);if(C()){break _;}i=$z;return i;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASi(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=a.m;i=f-1|0;$p=1;case 1:$z=ACt(h,e,i,g);if(C()){break _;}i=$z;L();if(i==Bg7.b)f=f+(-1)|0;h=a.m;$p=2;case 2:$z=ACt(h,e,f,g);if(C()){break _;}i=$z;if(i!=Bg7.b)return null;h
=a.m;$p=3;case 3:$z=AEH(h,e,f,g);if(C()){break _;}j=$z;c=f;k=BlF.data[j].data;l=e;m=l+0.5;n=m+k[0].data[0]*0.5;o=c+0.5;p=o+k[0].data[1]*0.5;q=g;r=q+0.5;s=r+k[0].data[2]*0.5;m=m+k[1].data[0]*0.5;t=o+k[1].data[1]*0.5;o=r+k[1].data[2]*0.5;r=m-n;u=(t-p)*2.0;v=o-s;l=r===0.0?d-q:v===0.0?b-l:((b-n)*r+(d-s)*v)*2.0;b=n+r*l;c=p+u*l;d=s+v*l;i=R(u,0.0);if(i<0)c=c+1.0;if(i>0)c=c+0.5;return BY(b,c,d);default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function A3O(a,b){var c,d,e,f,g,h;if(b!==a.bI){c=b.d-a.d;d=b.e-a.e;e=c*c+d*d;if(e>=9.999999747378752E-5){e=Ce(e);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;d=f*g;c=c*0.10000000149011612;d=d*0.10000000149011612;c=c*(1.0-a.n3);d=d*(1.0-a.n3);c=c*0.5;d=d*0.5;if(!(b instanceof Gd)){Hn(a, -c,0.0, -d);Hn(b,c/4.0,0.0,d/4.0);}else{f=(b.g+a.g)/2.0;h=(b.h+a.h)/2.0;a.h=0.0;a.g=0.0;Hn(a,f-c,0.0,h-d);b.h=0.0;b.g=0.0;Hn(b,f+c,0.0,h+d);}}}}
function A07(a){return 27;}
function TO(a,b){return a.Bn.data[b];}
function A8O(a,b){Pe(b,a);return 1;}
function AMH(){var b,c,d,e,f,g;b=J($rt_arraycls($rt_arraycls($rt_intcls())),10);c=b.data;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[0]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[1]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]
=(-1);g[1]=(-1);g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[2]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=(-1);g[2]=0;e[1]=f;c[3]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=(-1);g[2]=1;e[1]=f;c[4]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=(-1);g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[5]=d;g=J($rt_arraycls($rt_intcls()),2);e=g.data;d=$rt_createIntArray(3);f=d.data;f[0]=0;f[1]=0;f[2]=1;e[0]=d;d=$rt_createIntArray(3);f=d.data;f[0]=1;f[1]=0;f[2]=0;e[1]=d;c[6]=g;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[7]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[8]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[9]=d;BlF=b;}
function ARy(){Dg.call(this);this.CY=null;}
function Bb6(){var a=new ARy();A$g(a);return a;}
function A$g(a){EH(a);a.l8=0.5;a.CY=Bc0();}
function AQf(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();h=b.cr;i=b.d-b.cr;j=g;k=h+i*j;l=b.b7+(b.j-b.b7)*j;i=b.cs+(b.e-b.cs)*j;h=0.30000001192092896;$p=1;case 1:$z=ASi(b,k,l,i);if(C()){break _;}m=$z;n=b.T+(b.J-b.T)*g;if(m!==null){$p=2;continue _;}Bw(c,d,e);Bv(180.0
-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.ky-g;p=b.iQ-g;if(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oM,1.0,0.0,0.0);b=B(179);$p=4;continue _;case 2:$z=AJX(b,k,l,i,h);if(C()){break _;}q=$z;h=(-0.30000001192092896);$p=3;case 3:$z=AJX(b,k,l,i,h);if(C()){break _;}r=$z;if(q===null)q=m;if(r===null)r=m;c=c+m.x-k;d=d+(q.z+r.z)/2.0-l;e=e+m.w-i;s=Dk(r, -q.x, -q.z, -q.w);if(HM(s)!==0.0){s=CD(s);f=CR(s.w,s.x)*180.0/3.141592653589793;n=Io(s.z)*73.0;}Bw(c,d,e);Bv(180.0-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.ky-g;p=b.iQ-g;if
(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oM,1.0,0.0,0.0);b=B(179);$p=4;case 4:AKr(a,b);if(C()){break _;}CC(0.75,0.75,0.75);b=Kh();L();GW(b,BgW);CC(1.3333333730697632,1.3333333730697632,1.3333333730697632);b=B(588);$p=5;case 5:AKr(a,b);if(C()){break _;}CC((-1.0),(-1.0),1.0);AKs(a.CY,0.0,0.0,(-0.10000000149011612),0.0,0.0,0.0625);BD();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AQe(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQf(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function V3(){var a=this;D.call(a);a.u1=Long_ZERO;a.t3=0;a.y9=0;}
function BlG(){var a=new V3();AUa(a);return a;}
function AUa(a){return;}
function ABz(){var a=this;D.call(a);a.wk=null;a.wC=null;}
function BbQ(){var a=new ABz();AUl(a);return a;}
function AUl(a){a.wk=BK(0,0);BG(a.wk,(-12.0),(-14.0),(-1.0),24,12,2,0.0);a.wC=BK(0,14);BG(a.wC,(-1.0),(-2.0),(-1.0),2,14,2,0.0);}
function AM$(a){B_(a.wk,0.0625);B_(a.wC,0.0625);}
function AH5(){var a=this;Eh.call(a);a.lU=null;a.qR=null;a.rB=null;a.j8=null;a.j7=null;a.j$=null;a.j9=null;a.ka=null;a.j_=null;a.kc=null;a.kb=null;}
function A5m(){var a=new AH5();AUL(a);return a;}
function AUL(a){a.lU=BK(32,4);BG(a.lU,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BJ(a.lU,0.0,15.0,(-3.0));a.qR=BK(0,0);BG(a.qR,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BJ(a.qR,0.0,15.0,0.0);a.rB=BK(0,12);BG(a.rB,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BJ(a.rB,0.0,15.0,9.0);a.j8=BK(18,0);BG(a.j8,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j8,(-4.0),15.0,2.0);a.j7=BK(18,0);BG(a.j7,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j7,4.0,15.0,2.0);a.j$=BK(18,0);BG(a.j$,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j$,(-4.0),15.0,1.0);a.j9=BK(18,0);BG(a.j9,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BJ(a.j9,4.0,15.0,1.0);a.ka=BK(18,0);BG(a.ka,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.ka,(-4.0),15.0,0.0);a.j_=BK(18,0);BG(a.j_,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.j_,4.0,15.0,0.0);a.kc=BK(18,0);BG(a.kc,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kc,(-4.0),15.0,(-1.0));a.kb=BK(18,0);BG(a.kb,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kb,4.0,15.0,(-1.0));}
function AX$(a,b,c,d,e,f,g){Yq(a,b,c,d,e,f,g);B_(a.lU,g);B_(a.qR,g);B_(a.rB,g);B_(a.j8,g);B_(a.j7,g);B_(a.j$,g);B_(a.j9,g);B_(a.ka,g);B_(a.j_,g);B_(a.kc,g);B_(a.kb,g);}
function Yq(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.lU.bY=e/57.2957763671875;a.lU.b1=f/57.2957763671875;a.j8.bV=(-0.7853981852531433);a.j7.bV=0.7853981852531433;a.j$.bV=(-0.5811946392059326);a.j9.bV=0.5811946392059326;a.ka.bV=(-0.5811946392059326);a.j_.bV=0.5811946392059326;a.kc.bV=(-0.7853981852531433);a.kb.bV=0.7853981852531433;a.j8.bY=0.7853981852531433;a.j7.bY=(-0.7853981852531433);a.j$.bY=0.39269909262657166;a.j9.bY=(-0.39269909262657166);a.ka.bY=(-0.39269909262657166);a.j_.bY=0.39269909262657166;a.kc.bY
=(-0.7853981852531433);a.kb.bY=0.7853981852531433;b=b*0.6661999821662903;f=b*2.0;h= -(BC(f+0.0)*0.4000000059604645)*c;i= -(BC(f+3.1415927410125732)*0.4000000059604645)*c;j= -(BC(f+1.5707963705062866)*0.4000000059604645)*c;k= -(BC(f+4.71238899230957)*0.4000000059604645)*c;l=HU(Bq(b+0.0)*0.4000000059604645)*c;m=HU(Bq(b+3.1415927410125732)*0.4000000059604645)*c;n=HU(Bq(b+1.5707963705062866)*0.4000000059604645)*c;o=HU(Bq(b+4.71238899230957)*0.4000000059604645)*c;p=a.j8;p.bY=p.bY+h;p=a.j7;p.bY=p.bY+ -h;p=a.j$;p.bY
=p.bY+i;p=a.j9;p.bY=p.bY+ -i;p=a.ka;p.bY=p.bY+j;p=a.j_;p.bY=p.bY+ -j;p=a.kc;p.bY=p.bY+k;p=a.kb;p.bY=p.bY+ -k;p=a.j8;p.bV=p.bV+l;p=a.j7;p.bV=p.bV+ -l;p=a.j$;p.bV=p.bV+m;p=a.j9;p.bV=p.bV+ -m;p=a.ka;p.bV=p.bV+n;p=a.j_;p.bV=p.bV+ -n;p=a.kc;p.bV=p.bV+o;p=a.kb;p.bV=p.bV+ -o;}
function AIz(){var a=this;Eh.call(a);a.l1=null;a.vs=null;a.sT=null;a.pn=null;a.pm=null;a.pl=null;a.pk=null;}
function BaU(){var a=new AIz();A49(a);return a;}
function A49(a){a.l1=BK(0,0);BG(a.l1,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BJ(a.l1,0.0,4.0,0.0);a.vs=BK(32,0);BG(a.vs,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BJ(a.vs,0.0,4.0,0.0);a.sT=BK(16,16);BG(a.sT,(-4.0),0.0,(-2.0),8,12,4,0.0);BJ(a.sT,0.0,4.0,0.0);a.pn=BK(0,16);BG(a.pn,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pn,(-2.0),16.0,4.0);a.pm=BK(0,16);BG(a.pm,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pm,2.0,16.0,4.0);a.pl=BK(0,16);BG(a.pl,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pl,(-2.0),16.0,(-4.0));a.pk=BK(0,16);BG(a.pk,(-2.0),0.0,(-2.0),4,6,4,
0.0);BJ(a.pk,2.0,16.0,(-4.0));}
function A22(a,b,c,d,e,f,g){Zo(a,b,c,d,e,f,g);B_(a.l1,g);B_(a.sT,g);B_(a.pn,g);B_(a.pm,g);B_(a.pl,g);B_(a.pk,g);}
function Zo(a,b,c,d,e,f,g){var h;a.l1.bY=e/57.2957763671875;a.l1.b1=f/57.2957763671875;h=a.pn;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.pm;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.pl.b1=BC(d)*1.399999976158142*c;a.pk.b1=BC(b)*1.399999976158142*c;}
function AEU(){Eh.call(this);this.cY=null;}
function Bc0(){var a=new AEU();A30(a);return a;}
function A30(a){a.cY=J(QD,7);a.cY.data[0]=BK(0,10);a.cY.data[1]=BK(0,0);a.cY.data[2]=BK(0,0);a.cY.data[3]=BK(0,0);a.cY.data[4]=BK(0,0);a.cY.data[5]=BK(44,10);BG(a.cY.data[0],(-10.0),(-8.0),(-1.0),20,16,2,0.0);BJ(a.cY.data[0],0.0,4.0,0.0);BG(a.cY.data[5],(-9.0),(-7.0),(-1.0),18,14,1,0.0);BJ(a.cY.data[5],0.0,4.0,0.0);BG(a.cY.data[1],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cY.data[1],(-9.0),4.0,0.0);BG(a.cY.data[2],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cY.data[2],9.0,4.0,0.0);BG(a.cY.data[3],(-8.0),(-9.0),(-1.0),
16,8,2,0.0);BJ(a.cY.data[3],0.0,4.0,(-7.0));BG(a.cY.data[4],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cY.data[4],0.0,4.0,7.0);a.cY.data[0].b1=1.5707963705062866;a.cY.data[1].bY=4.71238899230957;a.cY.data[2].bY=1.5707963705062866;a.cY.data[3].bY=3.1415927410125732;a.cY.data[5].b1=(-1.5707963705062866);}
function AKs(a,b,c,d,e,f,g){var h;a.cY.data[5].m0=4.0-d;h=0;while(h<6){B_(a.cY.data[h],g);h=h+1|0;}}
function Tr(){var a=this;D.call(a);a.lF=0;a.yk=0;a.sq=0;a.nf=0;a.k8=null;}
function KB(a){return a.lF>=a.sq?0:1;}
function KS(a){var b,c;PD(a);a.nf=a.lF;b=a.k8;c=a.lF;a.lF=c+1|0;return Z(b,c);}
function AL_(a){var b;if(a.nf<0){b=new D2;O(b);M(b);}PD(a);En(a.k8,a.nf);a.yk=a.k8.d6;if(a.nf<a.lF)a.lF=a.lF-1|0;a.sq=a.sq-1|0;a.nf=(-1);}
function PD(a){var b;if(a.yk>=a.k8.d6)return;b=new KR;O(b);M(b);}
function I1(){var a=this;D.call(a);a.g0=null;a.tt=0;a.ck=null;a.hL=null;a.gW=null;a.hZ=null;a.eg=null;a.nZ=0;a.fZ=0;a.fU=0;a.iU=null;a.dL=null;a.gy=0;a.dW=0;a.qa=0;a.Ei=0;a.r$=0;a.s4=Long_ZERO;}
var Bkp=0;function BaK(a,b,c){var d=new I1();AQ_(d,a,b,c);return d;}
function A9r(a,b,c,d){var e=new I1();A1w(e,a,b,c,d);return e;}
function AQ_(a,b,c,d){var e;a.iU=Dd();a.dL=J(J2,8);a.gy=0;a.dW=0;a.Ei=0;a.r$=0;a.s4=Long_ZERO;a.ck=b;a.fZ=c;a.fU=d;a.eg=$rt_createByteArray(256);e=0;while(e<a.dL.data.length){a.dL.data[e]=Ci();e=e+1|0;}}
function A1w(a,b,c,d,e){var f;f=c.data;AQ_(a,b,d,e);a.g0=c;b=new T4;d=f.length;AJA(b,d);a.hL=b;a.gW=Jf(d);a.hZ=Jf(d);}
function ARF(a,b,c){return b==a.fZ&&c==a.fU?1:0;}
function UG(a,b,c){return a.eg.data[c<<4|b]&255;}
function A5H(a){return;}
function AFK(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=127;c=0;while(true){if(c>=16){a.nZ=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b=b+1|0;}a.dW=1;return;}e=0;if(e<16)break;c=c+1|0;}f=a.eg.data;d=e<<4|c;f[d]=(-128);g=127;$p=1;case 1:ACX(a,c,g,e);if(C()){break _;}if((a.eg.data[d]&255)<b)b=a.eg.data[d]&255;e=e+1|0;while(e>=16){c=c+1|0;if(c>=16){a.nZ=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b
=b+1|0;}a.dW=1;return;}e=0;}f=a.eg.data;d=e<<4|c;f[d]=(-128);g=127;continue _;case 2:AEW(a,b,d);if(C()){break _;}d=d+1|0;while(true){if(d<16){continue _;}b=b+1|0;if(b>=16)break;d=0;}a.dW=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEW(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=UG(a,b,c);e=(a.fZ*16|0)+b|0;f=(a.fU*16|0)+c|0;b=e-1|0;$p=1;case 1:AJH(a,b,f,d);if(C()){break _;}b=e+1|0;$p=2;case 2:AJH(a,b,f,d);if(C()){break _;}b=f-1|0;$p=3;case 3:AJH(a,e,b,d);if(C()){break _;}b=f+1|0;$p=4;case 4:AJH(a,e,b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJH(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.ck;$p=1;case 1:$z=ALF(e,b,c);if(C()){break _;}f=$z;g=R(f,d);if(g>0){e=a.ck;h=Bkv;$p=2;continue _;}if(g>=0){a.dW=1;return;}e=a.ck;h=Bkv;$p=3;continue _;case 2:Y5(e,h,b,d,c,b,f,c);if(C()){break _;}a.dW=1;return;case 3:Y5(e,h,b,f,c,b,d,c);if(C()){break _;}a.dW=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ACX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.eg.data;f=d<<4|b;g=e[f]&255;if(c<=g)c=g;while(c>0){L();if(BgA.data[ET(a,b,c-1|0,d)])break;c=c+(-1)|0;}h=R(c,g);if(h){APH(a.ck,b,d,c,g);a.eg.data[f]=c<<24>>24;if(c<a.nZ)a.nZ=c;else{f=127;i=0;while(i<16){j=0;while(j<16){e=a.eg.data;k=j<<4|i;if((e[k]&255)<f)f=a.eg.data[k]
&255;j=j+1|0;}i=i+1|0;}a.nZ=f;}f=(a.fZ*16|0)+b|0;i=(a.fU*16|0)+d|0;if(h>=0){l=a.ck;m=Bkv;$p=1;continue _;}j=c;while(j<g){Ek(a.gW,b,j,d,15);j=j+1|0;}j=15;k=c;a:{while(k>0){if(j<=0)break a;k=k+(-1)|0;L();n=BgA.data[ET(a,b,k,d)];if(!n)n=1;j=j-n|0;if(j<0)j=0;Ek(a.gW,b,k,d,j);}}while(k>0){L();if(BgA.data[ET(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k!=c){l=a.ck;m=Bkv;d=f-1|0;j=i-1|0;f=f+1|0;b=i+1|0;$p=2;continue _;}a.dW=1;}return;case 1:Y5(l,m,f,g,i,f,c,i);if(C()){break _;}while(g<c){Ek(a.gW,b,g,d,0);g=g+1|0;}j=15;k=c;b:
{while(k>0){if(j<=0)break b;k=k+(-1)|0;L();n=BgA.data[ET(a,b,k,d)];if(!n)n=1;j=j-n|0;if(j<0)j=0;Ek(a.gW,b,k,d,j);}}while(k>0){L();if(BgA.data[ET(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k==c){a.dW=1;return;}l=a.ck;m=Bkv;d=f-1|0;j=i-1|0;f=f+1|0;b=i+1|0;$p=2;case 2:Y5(l,m,d,k,j,f,c,b);if(C()){break _;}a.dW=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ET(a,b,c,d){return a.g0.data[b<<11|d<<7|c];}
function ADC(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e<<24>>24;h=a.eg.data[d<<4|b]&255;i=a.g0.data;j=b<<11|d<<7|c;k=i[j]&255;if(k==e)return 0;l=(a.fZ*16|0)+b|0;m=(a.fU*16|0)+d|0;a.g0.data[j]=g;if(k){L();n=BeO.data[k];o=a.ck;$p=1;continue _;}a:{Ek(a.hL,b,c,d,f);L();if(!BgA.data[g]){if(c!=(h-1|0))break a;$p
=5;continue _;}if(c>=h){f=c+1|0;$p=6;continue _;}}n=a.ck;o=Bkv;$p=2;continue _;case 1:n.lv(o,l,c,m);if(C()){break _;}b:{Ek(a.hL,b,c,d,f);L();if(!BgA.data[g]){if(c!=(h-1|0))break b;$p=5;continue _;}if(c>=h){f=c+1|0;$p=6;continue _;}}n=a.ck;o=Bkv;$p=2;case 2:Y5(n,o,l,c,m,l,c,m);if(C()){break _;}n=a.ck;o=Bkw;$p=3;case 3:Y5(n,o,l,c,m,l,c,m);if(C()){break _;}$p=4;case 4:AEW(a,b,d);if(C()){break _;}if(!e){a.dW=1;return 1;}n=BeO.data[e];o=a.ck;$p=7;continue _;case 5:ACX(a,b,c,d);if(C()){break _;}n=a.ck;o=Bkv;$p=2;continue _;case 6:ACX(a,
b,f,d);if(C()){break _;}n=a.ck;o=Bkv;$p=2;continue _;case 7:n.fC(o,l,c,m);if(C()){break _;}a.dW=1;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ADz(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=e<<24>>24;g=a.eg.data[d<<4|b]&255;h=a.g0.data;i=b<<11|d<<7|c;j=h[i]&255;if(j==e)return 0;k=(a.fZ*16|0)+b|0;l=(a.fU*16|0)+d|0;a.g0.data[i]=f;if(j){L();m=BeO.data[j];n=a.ck;$p=1;continue _;}a:{Ek(a.hL,b,c,d,0);L();if(!BgA.data[f]){if(c!=(g-1|0))break a;$p=5;continue _;}if
(c>=g){i=c+1|0;$p=6;continue _;}}m=a.ck;n=Bkv;$p=2;continue _;case 1:m.lv(n,k,c,l);if(C()){break _;}b:{Ek(a.hL,b,c,d,0);L();if(!BgA.data[f]){if(c!=(g-1|0))break b;$p=5;continue _;}if(c>=g){i=c+1|0;$p=6;continue _;}}m=a.ck;n=Bkv;$p=2;case 2:Y5(m,n,k,c,l,k,c,l);if(C()){break _;}m=a.ck;n=Bkw;$p=3;case 3:Y5(m,n,k,c,l,k,c,l);if(C()){break _;}$p=4;case 4:AEW(a,b,d);if(C()){break _;}if(!e){a.dW=1;return 1;}m=BeO.data[e];n=a.ck;$p=7;continue _;case 5:ACX(a,b,c,d);if(C()){break _;}m=a.ck;n=Bkv;$p=2;continue _;case 6:ACX(a,
b,i,d);if(C()){break _;}m=a.ck;n=Bkv;$p=2;continue _;case 7:m.fC(n,k,c,l);if(C()){break _;}a.dW=1;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function RO(a,b,c,d){return Ij(a.hL,b,c,d);}
function AAs(a,b,c,d,e){a.dW=1;Ek(a.hL,b,c,d,e);}
function ACi(a,b,c,d,e){return b===Bkv?Ij(a.gW,c,d,e):b!==Bkw?0:Ij(a.hZ,c,d,e);}
function AQL(a,b,c,d,e,f){a.dW=1;if(b===Bkv)Ek(a.gW,c,d,e,f);else{if(b!==Bkw)return;Ek(a.hZ,c,d,e,f);}}
function VK(a,b,c,d,e){var f,g;f=Ij(a.gW,b,c,d);if(f>0)Bkp=1;e=f-e|0;g=Ij(a.hZ,b,c,d);if(g<=e)g=e;return g;}
function VN(a,b){var c,d,e,f,g;a.r$=1;c=K(b.d/16.0);d=K(b.e/16.0);if(!(c==a.fZ&&d==a.fU)){e=DT();f=new T;V(f);Cg(e,U(FK(H(f,B(589)),b)));}g=K(b.j/16.0);if(g<0)g=0;if(g>=a.dL.data.length)g=a.dL.data.length-1|0;S(a.dL.data[g],b);}
function AMZ(a,b){RX(a,b,K(b.j/16.0));}
function RX(a,b,c){var d,e;if(c<0)c=0;if(c>=a.dL.data.length)c=a.dL.data.length-1|0;if(!Q2(a.dL.data[c],b)){d=DT();e=new T;V(e);Cg(d,U(FK(H(e,B(590)),b)));}H5(a.dL.data[c],b);}
function Pi(a,b,c,d){return c<(a.eg.data[d<<4|b]&255)?0:1;}
function ANn(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;f=CP(a.iU,CX(e));if(f!==null)return f;g=ET(a,b,c,d);L();h=BeO.data[g];f=a.ck;b=(a.fZ*16|0)+b|0;d=(a.fU*16|0)+d|0;$p=1;case 1:h.fC(f,b,c,d);if(C()){break _;}return CP(a.iU,CX(e));default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AJj(a,b,c,d,e){var f;a:{f=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;e.ch=a.ck;e.dJ=(a.fZ*16|0)+b|0;e.dH=c;e.dP=(a.fU*16|0)+d|0;if(ET(a,b,c,d)){L();if(BeO.data[ET(a,b,c,d)] instanceof Eg){if(a.tt){if(CP(a.iU,CX(f))!==null)H5(a.ck.fB,CP(a.iU,CX(f)));S(a.ck.fB,e);}BR(a.iU,CX(f),e);break a;}}Cg(DT(),B(591));}}
function ADX(a,b,c,d){var e;e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;if(a.tt)H5(a.ck.fB,Q3(a.iU,CX(e)));}
function JZ(a){var b;a.tt=1;DD(a.ck.fB,Ip(a.iU));b=0;while(b<a.dL.data.length){AQc(a.ck,a.dL.data[b]);b=b+1|0;}}
function AOM(a){var b;a.tt=0;Ga(a.ck.fB,Ip(a.iU));b=0;while(b<a.dL.data.length){AQ2(a.ck,a.dL.data[b]);b=b+1|0;}}
function SF(a){a.dW=1;}
function AJ0(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dL.data.length)f=a.dL.data.length-1|0;while(e<=f){g=a.dL.data[e];h=0;while(h<g.p){i=Z(g,h);if(i!==b&&L5(i.L,c))S(d,i);h=h+1|0;}e=e+1|0;}}
function AMi(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dL.data.length)f=a.dL.data.length-1|0;while(e<=f){g=a.dL.data[e];h=0;while(h<g.p){i=Z(g,h);if(P2(b,Dl(i))&&L5(i.L,c))S(d,i);h=h+1|0;}e=e+1|0;}}
function Km(a,b){return a.qa?0:a.r$&&Long_ne(a.ck.ec,a.s4)?1:a.dW;}
function Iq(){var a=this;D.call(a);a.jl=0;a.iu=0;a.ku=null;a.xY=null;}
function BlH(a,b,c,d,e,f,g){var h=new Iq();AEs(h,a,b,c,d,e,f,g);return h;}
function AEs(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.xY=b;a.jl=c>>4;a.iu=e>>4;i=f>>4;j=h>>4;a.ku=$rt_createMultiArray($rt_arraycls($rt_arraycls(I1)),[(j-a.iu|0)+1|0,(i-a.jl|0)+1|0]);k=a.jl;while(k<=i){l=a.iu;if(l<=j){m=a.ku.data[k-a.jl|0].data;c=l-a.iu|0;$p=1;continue _;}k=k+1|0;}return;case 1:$z=ZR(b,k,l);if(C()){break _;}n
=$z;m[c]=n;l=l+1|0;while(true){if(l<=j){m=a.ku.data[k-a.jl|0].data;c=l-a.iu|0;continue _;}k=k+1|0;if(k>i)break;l=a.iu;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Hw(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jl|0;f=(d>>4)-a.iu|0;return ET(a.ku.data[e].data[f],b&15,c,d&15);}
function AFT(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b>>4)-a.jl|0;f=(d>>4)-a.iu|0;g=a.ku.data[e].data[f];e=b&15;b=d&15;$p=1;case 1:$z=ANn(g,e,c,b);if(C()){break _;}g=$z;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAL(a,b,c,d){return Bks.data[Z3(a,b,c,d)];}
function Z3(a,b,c,d){return GS(a,b,c,d,1);}
function GS(a,b,c,d,e){var f,g,h,i,j,k;if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){a:{if(e){f=Hw(a,b,c,d);L();if(f==BeT.b)break a;if(f==Bg2.b)break a;}if(c<0)return 0;if(c>=128){f=15-a.xY.gh|0;if(f<0)f=0;return f;}f=(b>>4)-a.jl|0;g=(d>>4)-a.iu|0;return VK(a.ku.data[f].data[g],b&15,c,d&15,a.xY.gh);}g=GS(a,b,c+1|0,d,0);h=GS(a,b+1|0,c,d,0);i=GS(a,b-1|0,c,d,0);j=GS(a,b,c,d+1|0,0);k=GS(a,b,c,d-1|0,0);if(h<=g)h=g;if(i<=h)i=h;if(j<=i)j=i;if(k<=j)k=j;return k;}return 15;}
function AC3(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jl|0;f=(d>>4)-a.iu|0;return RO(a.ku.data[e].data[f],b&15,c,d&15);}
function N1(a,b,c,d){var e,f;e=Hw(a,b,c,d);if(!e)f=Bf$;else{L();f=BeO.data[e].b$;}return f;}
function AB3(a,b,c,d){var e;L();e=BeO.data[Hw(a,b,c,d)];return e!==null?e.d4():0;}
function Gg(){BE.call(this);}
function BlI(){var a=new Gg();A$e(a);return a;}
function A$e(a){O(a);}
function UP(){Gg.call(this);}
function BlJ(){var a=new UP();A6L(a);return a;}
function A6L(a){O(a);}
function U$(){D.call(this);}
var BlK=null;function BlL(){var a=new U$();AO5(a);return a;}
function AO5(a){return;}
function AIH(){var b,c;b=$rt_createIntArray(12);c=b.data;c[0]=1;c[1]=4;c[2]=2;c[3]=1024;c[4]=8;c[5]=16;c[6]=128;c[7]=64;c[8]=32;c[9]=256;c[10]=2048;c[11]=512;BlK=b;}
function PH(){Gj.call(this);this.wc=null;}
function A0o(a,b){return AEa(a.wc,b);}
function Nc(a){var b;b=new U7;Vv(b,a.wc);return b;}
function Tn(){D.call(this);this.Jh=null;}
function AOu(a){Bd();BdE.requestPointerLock();MS(0);}
function A_w(a){AOu(a);}
function AQF(){D.call(this);}
function BlM(){var a=new AQF();A3_(a);return a;}
function A3_(a){return;}
function WS(){var a=this;D$.call(a);a.cu=null;a.gU=0;a.pS=0;a.kQ=0;}
function BaB(){var a=new WS();AU_(a);return a;}
function AU_(a){a.cu=J(Cd,3);a.gU=0;a.pS=0;a.kQ=0;}
function A9o(a,b){return a.cu.data[b];}
function A8h(a,b,c){var d;if(a.cu.data[b]===null)return null;if(a.cu.data[b].q<=c){d=a.cu.data[b];a.cu.data[b]=null;return d;}d=EF(a.cu.data[b],c);if(!a.cu.data[b].q)a.cu.data[b]=null;return d;}
function AVq(a,b,c){a.cu.data[b]=c;if(c!==null&&c.q>64)c.q=64;}
function AT4(a){return 64;}
function AOK(a,b){return Bj(a.kQ,b)/200|0;}
function ADH(a,b){if(!a.pS)a.pS=200;return Bj(a.gU,b)/a.pS|0;}
function WI(a){return a.gU<=0?0:1;}
function AGD(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gU<=0?0:1;c=0;if(a.gU>0){a.gU=a.gU-1|0;c=1;}if(!a.gU&&Of(a)){d=a.cu.data[1];if(d===null)e=0;else a:{f=DK(d).cV;if(f<256){L();if(BeO.data[f].b$===Bg_){e=300;break a;}}BB();e=f==Bh4.cV?100:f!=Bhz.cV?0:1600;}a.gU=e;a.pS=e;if(a.gU>0){c=1;if(a.cu.data[1]!==null){d=a.cu.data[1];d.q=d.q-1|0;if(!a.cu.data[1].q)a.cu.data[1]
=null;}}}if(WI(a)&&Of(a)){a.kQ=a.kQ+1|0;if(a.kQ==200){a.kQ=0;ADv(a);c=1;}}else a.kQ=0;if(b==(a.gU<=0?0:1)){if(!c)return;d=a.ch;e=a.dJ;b=a.dH;c=a.dP;$p=1;continue _;}c=1;b=a.gU<=0?0:1;g=a.ch;f=a.dJ;h=a.dH;i=a.dP;$p=2;continue _;case 1:AGs(d,e,b,c);if(C()){break _;}return;case 2:$z=AEH(g,f,h,i);if(C()){break _;}e=$z;$p=3;case 3:$z=ANw(g,f,h,i);if(C()){break _;}j=$z;if(!b){L();b=Bg3.b;$p=4;continue _;}L();b=Bg4.b;$p=5;continue _;case 4:APv(g,f,h,i,b);if(C()){break _;}$p=6;continue _;case 5:APv(g,f,h,i,b);if(C())
{break _;}$p=6;case 6:AKv(g,f,h,i,e);if(C()){break _;}$p=7;case 7:AFS(g,f,h,i,j);if(C()){break _;}if(!c)return;d=a.ch;e=a.dJ;b=a.dH;c=a.dP;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Of(a){var b,c;if(a.cu.data[0]===null)return 0;b=US(a,DK(a.cu.data[0]).cV);if(b<0)b=0;else if(a.cu.data[2]===null)b=1;else if(a.cu.data[2].bC!=b)b=0;else if(a.cu.data[2].q<64&&a.cu.data[2].q<EB(a.cu.data[2]))b=1;else{c=a.cu.data[2].q;BB();b=c>=Bhd.data[b].eX?0:1;}return b;}
function ADv(a){var b,c;if(Of(a)){b=US(a,DK(a.cu.data[0]).cV);if(a.cu.data[2]===null)a.cu.data[2]=Ky(b,1);else if(a.cu.data[2].bC==b){c=a.cu.data[2];c.q=c.q+1|0;}c=a.cu.data[0];c.q=c.q-1|0;if(a.cu.data[0].q<=0)a.cu.data[0]=null;}}
function US(a,b){L();if(b==Bfe.b){BB();b=BhP.cV;}else if(b==Bff.b){BB();b=BhQ.cV;}else if(b==BgY.b){BB();b=BhA.cV;}else if(b==Be_.b)b=Be4.b;else{BB();b=b==Bgf.cV?Biz.cV:b!=BeY.b?(-1):BeU.b;}return b;}
function Z1(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dJ;d=a.dH;e=a.dP;$p=1;case 1:AGs(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function S_(){D$.call(this);this.hX=null;}
function Bbf(){var a=new S_();A17(a);return a;}
function A17(a){a.hX=J(Cd,36);}
function AVK(a){return 27;}
function Q9(a,b){return a.hX.data[b];}
function A1R(a,b,c){var d;if(a.hX.data[b]===null)return null;if(a.hX.data[b].q<=c){d=a.hX.data[b];a.hX.data[b]=null;return d;}d=EF(a.hX.data[b],c);if(!a.hX.data[b].q)a.hX.data[b]=null;return d;}
function AHy(a,b,c){a.hX.data[b]=c;if(c!==null&&c.q>64)c.q=64;}
function A8A(a){return B(263);}
function A7k(a){return 64;}
function CQ(){D.call(this);this.gp=null;}
function BlN(){var a=new CQ();Cw(a);return a;}
function Cw(a){a.gp=null;}
function VE(a){return a.gp!==null?a.gp:B(3);}
function AXC(a,b){a.gp=b;return a;}
function MR(b){var c,d;c=NV(b);if(!c){b=new NW;Cw(b);return b;}d=AE4(c);d.gp=GU(b);d.gE(b);return d;}
function RU(b,c){KJ(c,b.fa());if(b.fa()){Xm(c,VE(b));b.gL(c);}}
function AE4(b){var c;switch(b){case 0:c=new NW;Cw(c);return c;case 1:c=new Mt;Cw(c);return c;case 2:c=new MT;Cw(c);return c;case 3:c=new Li;Cw(c);return c;case 4:c=new N8;Cw(c);return c;case 5:c=new Pd;Cw(c);return c;case 6:c=new Mm;Cw(c);return c;case 7:c=new MD;Cw(c);return c;case 8:c=new OB;Cw(c);return c;case 9:return L8();case 10:return G8();default:}return null;}
function APN(){CQ.call(this);this.cK=null;}
function G8(){var a=new APN();A8J(a);return a;}
function A8J(a){Cw(a);a.cK=Dd();}
function A7b(a,b){var c;c=Nc(Ip(a.cK));while(F8(c)){RU(Md(c),b);}KJ(b,0);}
function A9i(a,b){var c;U5(a.cK);while(true){c=MR(b);if(!c.fa())break;BR(a.cK,VE(c),c);}}
function A6_(a){return 10;}
function HC(a,b,c){var d;d=a.cK;c.gp=b;BR(d,b,c);}
function JH(a,b,c){var d,e;d=a.cK;e=new Mt;Cw(e);e.tr=c;e.gp=b;BR(d,b,e);}
function Fq(a,b,c){var d,e;d=a.cK;e=new MT;Cw(e);e.tl=c;e.gp=b;BR(d,b,e);}
function Gv(a,b,c){var d,e;d=a.cK;e=new Li;Cw(e);e.r5=c;e.gp=b;BR(d,b,e);}
function H9(a,b,c){var d,e;d=a.cK;e=new N8;Cw(e);e.sZ=c;e.gp=b;BR(d,b,e);}
function AR5(a,b,c){var d,e;d=a.cK;e=A6Q(c);e.gp=b;BR(d,b,e);}
function IL(a,b,c){var d,e;d=a.cK;e=new MD;Cw(e);e.mj=c;e.gp=b;BR(d,b,e);}
function ANS(a,b,c){var d;d=a.cK;c.gp=b;BR(d,b,c);}
function SU(a,b,c){JH(a,b,(!c?0:1)<<24>>24);}
function YW(a,b){return DZ(a.cK,b);}
function LA(a,b){return !DZ(a.cK,b)?0:CP(a.cK,b).tr;}
function FH(a,b){return !DZ(a.cK,b)?0:CP(a.cK,b).tl;}
function FS(a,b){return !DZ(a.cK,b)?0:CP(a.cK,b).r5;}
function Mb(a,b){return !DZ(a.cK,b)?Long_ZERO:CP(a.cK,b).sZ;}
function AME(a,b){return !DZ(a.cK,b)?0.0:CP(a.cK,b).ni;}
function IE(a,b){return !DZ(a.cK,b)?$rt_createByteArray(0):CP(a.cK,b).mj;}
function Mv(a,b){return !DZ(a.cK,b)?G8():CP(a.cK,b);}
function Kg(a,b){return !DZ(a.cK,b)?L8():CP(a.cK,b);}
function Um(a,b){return !LA(a,b)?0:1;}
function PZ(){B6.call(this);}
function BlO(){var a=new PZ();A$6(a);return a;}
function A$6(a){O(a);}
function SD(){B6.call(this);}
function BlP(){var a=new SD();AYL(a);return a;}
function AYL(a){O(a);}
function RT(){GY.call(this);this.Bs=0;}
function AVO(a){var b;b=new T;V(b);return U(Be(H(b,B(592)),a.Bs));}
function PV(){GY.call(this);this.EJ=0;}
function AVh(a){var b;b=new T;V(b);return U(Be(H(b,B(593)),a.EJ));}
function II(){var a=this;D.call(a);a.l3=0;a.rk=0;a.lA=null;a.hi=null;a.so=null;a.is=null;}
function BlQ(a){var b=new II();Vv(b,a);return b;}
function Vv(a,b){a.is=b;a.rk=b.g7;a.lA=null;}
function F8(a){if(a.lA!==null)return 1;while(a.l3<a.is.cN.data.length){if(a.is.cN.data[a.l3]!==null)return 1;a.l3=a.l3+1|0;}return 0;}
function Ur(a){var b;if(a.rk==a.is.g7)return;b=new KR;O(b);M(b);}
function V8(a){var b,c,d;Ur(a);if(!F8(a)){b=new JY;O(b);M(b);}if(a.lA===null){c=a.is.cN.data;d=a.l3;a.l3=d+1|0;a.hi=c[d];a.lA=a.hi.eC;a.so=null;}else{if(a.hi!==null)a.so=a.hi;a.hi=a.lA;a.lA=a.lA.eC;}}
function ADO(a){var b,c;Ur(a);if(a.hi===null){b=new D2;O(b);M(b);}if(a.so!==null)a.so.eC=a.hi.eC;else{c=a.hi.pT&(a.is.cN.data.length-1|0);a.is.cN.data[c]=a.is.cN.data[c].eC;}a.hi=null;a.rk=a.rk+1|0;b=a.is;b.g7=b.g7+1|0;b=a.is;b.f8=b.f8-1|0;}
function U7(){II.call(this);}
function Md(a){V8(a);return a.hi.e4;}
function Wp(){var a=this;D.call(a);a.Aj=null;a.Et=null;a.v_=0;a.qH=0;}
function NJ(a){return Fl(a.Aj);}
function AJn(a,b){return Ct(a.Et)<b?0:1;}
function A$B(a,b){a.v_=b;}
function A9g(a,b){a.qH=b;}
function AEx(){var a=this;CS.call(a);a.o8=null;a.yF=null;a.lK=null;}
function AIM(a,b){var c=new AEx();A1y(c,a,b);return c;}
function A1y(a,b,c){DQ(a);a.yF=B(594);a.o8=b;a.lK=c;}
function ARZ(a){var b,c,d;b=0;while(b<a.lK.zM){c=a.bH;d=Sc(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bE/6|0)+(24*(b>>1)|0)|0,QT(a.lK,b));S(c,d);if(a.I.k.bw&&!(b!=5&&b!=6&&b!=9))d.gB=0;b=b+1|0;}S(a.bH,Dj(100,(a.bm/2|0)-100|0,((a.bE/6|0)+120|0)+22|0,B(595)));S(a.bH,Dj(200,(a.bm/2|0)-100|0,(a.bE/6|0)+168|0,B(596)));}
function ADU(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gB){if(b.cl<100){Ea(a.lK,b.cl,1);b.kj=QT(a.lK,b.cl);if(b.cl==10){c=a.I;d=AIM(a.o8,a.I.k);$p=2;continue _;}}if(b.cl==100){c=a.I;d=new NK;e=a.lK;DQ(d);d.ue=B(597);d.jt=(-1);d.uB=a;d.iM=e;$p=1;continue _;}if(b.cl==200){b=a.I;c=a.o8;$p=3;continue _;}}return;case 1:ADS(c,d);if(C()){break _;}if(b.cl!=200)return;b=a.I;c=a.o8;$p=3;continue _;case 2:ADS(c,d);if(C())
{break _;}if(b.cl!=100){if(b.cl!=200)return;b=a.I;c=a.o8;$p=3;continue _;}c=a.I;d=new NK;e=a.lK;DQ(d);d.ue=B(597);d.jt=(-1);d.uB=a;d.iM=e;$p=1;continue _;case 3:ADS(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AGa(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DE(a,a.b0,a.yF,a.bm/2|0,20,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function Ou(){var a=this;CS.call(a);a.ox=null;a.yt=null;a.xC=0;}
function A$W(a){var b=new Ou();AEd(b,a);return b;}
function AEd(a,b){DQ(a);a.yt=B(598);a.xC=0;a.ox=b;}
function APt(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=5){a.s7();return;}c=new T;V(c);c=H(c,B(599));d=b+1|0;c=U(Be(c,d));$p=1;case 1:$z=ASa(c);if(C()){break _;}c=$z;if(c!==null){c=new T;V(c);e=U(Be(H(c,B(600)),d));c=new T;V(c);f=U(H(Be(H(c,B(599)),d),B(355)));Bd();c=BeE;$p=2;continue _;}S(a.bH,Dj(b,(a.bm/2|0)-100|0,(a.bE/6|0)+(24*b|0)|0,B(601)));b=d;if(b>=5){a.s7();return;}c=new T;V(c);c
=H(c,B(599));d=b+1|0;c=U(Be(c,d));continue _;case 2:$z=A_J(c,f);if(C()){break _;}c=$z;g=c===null?(-1):c.byteLength;c=new T;V(c);f=U(H(AKp(H(H(c,e),B(602)),g/100.0),B(603)));S(a.bH,Dj(b,(a.bm/2|0)-100|0,(a.bE/6|0)+(24*b|0)|0,f));b=d;if(b>=5){a.s7();return;}c=new T;V(c);c=H(c,B(599));d=b+1|0;c=U(Be(c,d));$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ANr(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=new T;V(c);c=U(Be(H(c,B(599)),b));$p=1;case 1:$z=ASa(c);if(C()){break _;}c=$z;if(c===null)c=null;else{c=new T;V(c);c=U(Be(H(c,B(599)),b));}return c;default:E_();}}C3().s(a,b,c,$p);}
function AXz(a){S(a.bH,Dj(5,(a.bm/2|0)-100|0,((a.bE/6|0)+120|0)+12|0,B(604)));S(a.bH,Dj(6,(a.bm/2|0)-100|0,(a.bE/6|0)+168|0,B(605)));}
function ASv(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gB){if(b.cl<5){c=b.cl+1|0;$p=1;continue _;}if(b.cl==5){b=a.I;d=new UU;AEd(d,a);d.yt=B(606);$p=2;continue _;}if(b.cl==6){b=a.I;d=a.ox;$p=3;continue _;}}return;case 1:a.IO(c);if(C()){break _;}return;case 2:ADS(b,d);if(C()){break _;}return;case 3:ADS(b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AKN(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I;d=null;$p=1;case 1:ADS(c,d);if(C()){break _;}if(a.xC)return;a.xC=1;d=a.I;c=new T;V(c);c=U(Be(H(c,B(599)),b));$p=2;case 2:AHV(d,c);if(C()){break _;}d=a.I;c=null;$p=3;case 3:ADS(d,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AEA(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DE(a,a.b0,a.yt,a.bm/2|0,20,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function LX(){Gg.call(this);}
function BlR(){var a=new LX();A69(a);return a;}
function A69(a){O(a);}
function S6(){Gg.call(this);}
function BlS(){var a=new S6();A$F(a);return a;}
function A$F(a){O(a);}
function ALu(){D.call(this);}
function BlT(){var a=new ALu();A7n(a);return a;}
function A7n(a){return;}
function Z_(){D.call(this);}
function BlU(){var a=new Z_();A8u(a);return a;}
function A8u(a){return;}
function AMh(){var a=this;D.call(a);a.o=null;a.fO=0;a.t$=null;a.y_=0;a.ir=0;a.kg=0;a.dn=0;a.u0=null;}
function Bbu(){var a=new AMh();AS5(a);return a;}
function ALG(a,b){var c,d,e,f,g,h,i,j;c=new Vt;c.qS=(-1);c.sh=(-1);c.Fx=a;c.EA=a.u0;c.pH=b;c.qS=0;c.sh=Bh(c.pH);d=new Wq;e=c.qS;f=c.sh;g=a.ir;h=AQU(a);i=AD3(a);d.kX=(-1);j=g+1|0;d.zx=j;d.gF=$rt_createIntArray(j*2|0);d.oQ=$rt_createIntArray(i);MW(d.oQ,(-1));if(h>0)d.xs=$rt_createIntArray(h);MW(d.gF,(-1));Xe(d,b,e,f);c.dB=d;return c;}
function AIQ(a,b,c){var d,e,f,g,h,i;d=Ci();e=ALG(a,b);f=0;g=0;if(!Bh(b)){h=J(B4,1);h.data[0]=B(3);return h;}while(AA8(e)){i=f+1|0;if(i>=c&&c>0)break;S(d,Ev(b,g,AG8(e)));g=AKW(e);f=i;}a:{S(d,Ev(b,g,Bh(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(Bh(Z(d,f)))break a;En(d,f);}}if(f<0)f=0;return Uz(d,J(B4,f));}
function AIP(a,b){return AIQ(a,b,0);}
function M7(a){return a.o.eN;}
function SR(a,b,c,d){var e,f,g,h,i;e=Ci();f=a.fO;g=0;if(c!=a.fO)a.fO=c;a:{switch(b){case -1073741784:h=new QB;c=a.dn+1|0;a.dn=c;G_(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PQ;c=a.dn+1|0;a.dn=c;G_(h,c);break a;case -33554392:h=new Q1;c=a.dn+1|0;a.dn=c;G_(h,c);break a;default:a.ir=a.ir+1|0;if(d!==null)h=Bcy(a.ir);else{h=Bb4();g=1;}if(a.ir<=(-1))break a;if(a.ir>=10)break a;a.t$.data[a.ir]=h;break a;}h=Bbt();}while(true){if(F6(a.o)&&a.o.H==(-536870788)){d=A$G(CZ(a,
2),CZ(a,64));while(!Eo(a.o)&&F6(a.o)&&!(a.o.H&&a.o.H!=(-536870788)&&a.o.H!=(-536870871))){Dp(d,BF(a.o));if(a.o.cG!=(-536870788))continue;BF(a.o);}i=LN(a,d);i.ca(h);}else if(a.o.cG==(-536870788)){i=IF(h);BF(a.o);}else{i=Uc(a,h);if(a.o.cG==(-536870788))BF(a.o);}if(i!==null)S(e,i);if(Eo(a.o))break;if(a.o.cG==(-536870871))break;}if(a.o.qW==(-536870788))S(e,IF(h));if(a.fO!=f&&!g){a.fO=f;AJv(a.o,a.fO);}switch(b){case -1073741784:break;case -536870872:d=new S8;GR(d,e,h);return d;case -268435416:d=new WG;GR(d,e,h);return d;case -134217688:d
=new U8;GR(d,e,h);return d;case -67108824:d=new Rd;GR(d,e,h);return d;case -33554392:d=new EX;GR(d,e,h);return d;default:switch(e.p){case 0:break;case 1:return Bcq(Z(e,0),h);default:return BaE(e,h);}return IF(h);}d=new K0;GR(d,e,h);return d;}
function APY(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!Eo(a.o)&&F6(a.o)){e=b.data;c=BF(a.o);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.o.cG;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;BF(a.o);f=a.o.cG;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;BF(a.o);return A$v(e,3);}return A$v(e,2);}if(!CZ(a,2))return AAd(b[0]);if(CZ(a,64))return A8_(b[0]);return A4x(b[0]);}e=b.data;c=1;while(c<4&&!Eo(a.o)&&F6(a.o)){f=c+1|0;e[c]=BF(a.o);c=f;}if(c==1){f=e[0];if(!(BlV.A3(f)
==BlW?0:1))return SK(a,e[0]);}if(!CZ(a,2))return BcZ(b,c);if(CZ(a,64)){g=new SE;Pa(g,b,c);return g;}g=new VZ;Pa(g,b,c);return g;}
function Uc(a,b){var c,d,e,f;if(F6(a.o)&&!Lh(a.o)&&Nk(a.o.H)){if(CZ(a,128)){c=APY(a);if(!Eo(a.o)&&!(a.o.cG==(-536870871)&&!(b instanceof HQ))&&a.o.cG!=(-536870788)&&!F6(a.o))c=Mx(a,b,c);}else if(!TJ(a.o)&&!Wr(a.o)){d=new Lg;V(d);while(!Eo(a.o)&&F6(a.o)&&!TJ(a.o)&&!Wr(a.o)&&!(!(!Lh(a.o)&&!a.o.H)&&!(!Lh(a.o)&&Nk(a.o.H))&&a.o.H!=(-536870871)&&(a.o.H&(-2147418113))!=(-2147483608)&&a.o.H!=(-536870788)&&a.o.H!=(-536870876))){e=BF(a.o);if(!Ms(e))Dx(d,e&65535);else Hh(d,Iu(e));}if(!CZ(a,2))c=Bau(d);else if(CZ(a,64))c
=BcW(d);else{c=new OT;EN(c);c.pI=U(d);c.dk=Ot(d);}}else c=Mx(a,b,W0(a,b));}else if(a.o.cG!=(-536870871))c=Mx(a,b,W0(a,b));else{if(b instanceof HQ)M(CN(B(3),a.o.eN,a.o.ig));c=IF(b);}if(!Eo(a.o)&&!(a.o.cG==(-536870871)&&!(b instanceof HQ))&&a.o.cG!=(-536870788)){f=Uc(a,b);if(c instanceof D7&&!(c instanceof GA)&&!(c instanceof DW)&&!(c instanceof FT)){b=c;if(!f.d3(b.bR)){c=new Sm;F1(c,b.bR,b.s,b.p2);c.bR.ca(c);}}if((f.oE()&65535)!=43)c.ca(f);else c.ca(f.bR);}else{if(c===null)return null;c.ca(b);}if((c.oE()&65535)
!=43)return c;return c.bR;}
function Mx(a,b,c){var d,e,f,g;d=a.o.cG;if(c!==null&&!(c instanceof CI)){switch(d){case -2147483606:BF(a.o);e=new SZ;Ef(e,c,b,d);c.ca(BlX);return e;case -2147483605:BF(a.o);e=new Uu;Ef(e,c,b,(-2147483606));c.ca(BlX);return e;case -2147483585:BF(a.o);e=new PJ;Ef(e,c,b,(-536870849));c.ca(BlX);return e;case -2147483525:e=new OQ;f=G4(a.o);d=a.kg+1|0;a.kg=d;ML(e,f,c,b,(-536870849),d);c.ca(BlX);return e;case -1073741782:case -1073741781:BF(a.o);f=new Qr;Ef(f,c,b,d);c.ca(f);return f;case -1073741761:BF(a.o);f=new UN;Ef(f,
c,b,(-536870849));c.ca(b);return f;case -1073741701:f=new RL;e=G4(a.o);g=a.kg+1|0;a.kg=g;ML(f,e,c,b,(-536870849),g);c.ca(f);return f;case -536870870:case -536870869:BF(a.o);if(c.oE()!=(-2147483602)){f=new DW;Ef(f,c,b,d);}else if(CZ(a,32)){f=new Qs;Ef(f,c,b,d);}else{f=new TP;e=Uh(a.fO);Ef(f,c,b,d);f.us=e;}c.ca(f);return f;case -536870849:BF(a.o);f=new Ht;Ef(f,c,b,(-536870849));c.ca(b);return f;case -536870789:f=new G6;e=G4(a.o);g=a.kg+1|0;a.kg=g;ML(f,e,c,b,(-536870849),g);c.ca(f);return f;default:}return c;}e
=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:BF(a.o);f=new Xr;F1(f,e,b,d);e.s=f;return f;case -2147483585:BF(a.o);c=new Si;F1(c,e,b,(-2147483585));return c;case -2147483525:c=new Ua;QK(c,G4(a.o),e,b,(-2147483525));return c;case -1073741782:case -1073741781:BF(a.o);f=new UL;F1(f,e,b,d);e.s=f;return f;case -1073741761:BF(a.o);c=new V1;F1(c,e,b,(-1073741761));return c;case -1073741701:c=new Qc;QK(c,G4(a.o),e,b,(-1073741701));return c;case -536870870:case -536870869:BF(a.o);f=BaV(e,b,d);e.s
=f;return f;case -536870849:BF(a.o);c=new FT;F1(c,e,b,(-536870849));return c;case -536870789:return BbW(G4(a.o),e,b,(-536870789));default:}return c;}
function W0(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof HQ;while(true){a:{e=Kr(a.o);if((e&(-2147418113))==(-2147483608)){BF(a.o);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.fO=f;else{if(e!=(-1073741784))f=a.fO;c=SR(a,e,f,b);if(Kr(a.o)!=(-536870871))M(CN(B(3),EC(a.o),HA(a.o)));BF(a.o);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.ir<g)M(CN(B(3),
EC(a.o),HA(a.o)));BF(a.o);a.dn=a.dn+1|0;c=!CZ(a,2)?BbB(g,a.dn):CZ(a,64)?Bar(g,a.dn):BcV(g,a.dn);a.t$.data[g].wQ=1;a.y_=1;break a;case -2147483583:break;case -2147483582:BF(a.o);c=A$i(0);break a;case -2147483577:BF(a.o);c=Bak();break a;case -2147483558:BF(a.o);c=new SB;g=a.dn+1|0;a.dn=g;AQx(c,g);break a;case -2147483550:BF(a.o);c=A$i(1);break a;case -2147483526:BF(a.o);c=Bbc();break a;case -536870876:break c;case -536870866:BF(a.o);if(CZ(a,32)){c=Bbm();break a;}c=BaY(Uh(a.fO));break a;case -536870821:BF(a.o);h
=0;if(Kr(a.o)==(-536870818)){h=1;BF(a.o);}c=ADE(a,h,b);if(Kr(a.o)!=(-536870819))M(CN(B(3),EC(a.o),HA(a.o)));T3(a.o,1);BF(a.o);break a;case -536870818:BF(a.o);a.dn=a.dn+1|0;if(!CZ(a,8)){c=A1d();break a;}c=BcI(Uh(a.fO));break a;case 0:i=PN(a.o);if(i!==null)c=LN(a,i);else{if(Eo(a.o)){c=IF(b);break a;}c=AAd(e&65535);}BF(a.o);break a;default:break b;}BF(a.o);c=A1d();break a;}BF(a.o);a.dn=a.dn+1|0;if(CZ(a,8)){if(CZ(a,1)){c=Bas(a.dn);break a;}c=A_0(a.dn);break a;}if(CZ(a,1)){c=BaJ(a.dn);break a;}c=Ba6(a.dn);break a;}if
(e>=0&&!HZ(a.o)){c=SK(a,e);BF(a.o);}else if(e==(-536870788))c=IF(b);else{if(e!=(-536870871))M(CN(!HZ(a.o)?Sy(e&65535):PN(a.o).gk(),EC(a.o),HA(a.o)));if(d)M(CN(B(3),EC(a.o),HA(a.o)));c=IF(b);}}}if(e!=(-16777176))break;}return c;}
function ADE(a,b,c){var d;d=LN(a,Ig(a,b));d.ca(c);return d;}
function Ig(a,b){var c,d,e,f,g,h,i,j,$$je;c=A$G(CZ(a,2),CZ(a,64));Fw(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Eo(a.o))break a;f=a.o.cG==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.o.cG){case -536870874:if(d>=0)Dp(c,d);d=BF(a.o);if(a.o.cG!=(-536870874)){d=38;break d;}if(a.o.H==(-536870821)){BF(a.o);e=1;d=(-1);break d;}BF(a.o);if(g){c=Ig(a,0);break d;}if(a.o.cG==(-536870819))break d;Sr(c,Ig(a,0));break d;case -536870867:if(!g&&a.o.H!=(-536870819)&&a.o.H!=(-536870821)&&d>=0){BF(a.o);h=a.o.cG;if(HZ(a.o))break c;if
(h<0&&a.o.H!=(-536870819)&&a.o.H!=(-536870821)&&d>=0)break c;e:{try{if(Nk(h))break e;h=h&65535;break e;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){break b;}else{throw $$e;}}}try{CG(c,d,h);}catch($$e){$$je=Bi($$e);if($$je instanceof BE){break b;}else{throw $$e;}}BF(a.o);d=(-1);break d;}if(d>=0)Dp(c,d);d=45;BF(a.o);break d;case -536870821:if(d>=0){Dp(c,d);d=(-1);}BF(a.o);i=0;if(a.o.cG==(-536870818)){BF(a.o);i=1;}if(!e)AIb(c,Ig(a,i));else Sr(c,Ig(a,i));e=0;BF(a.o);break d;case -536870819:if(d>=0)Dp(c,d);d=
93;BF(a.o);break d;case -536870818:if(d>=0)Dp(c,d);d=94;BF(a.o);break d;case 0:if(d>=0)Dp(c,d);j=a.o.kY;if(j===null)d=0;else{ASs(c,j);d=(-1);}BF(a.o);break d;default:}if(d>=0)Dp(c,d);d=BF(a.o);}g=0;}M(CN(B(3),M7(a),a.o.ig));}M(CN(B(3),M7(a),a.o.ig));}if(!f){if(d>=0)Dp(c,d);return c;}M(CN(B(3),M7(a),a.o.ig-1|0));}
function SK(a,b){var c,d,e;c=Ms(b);if(CZ(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A4x(b&65535);}if(CZ(a,64)&&b>128){if(c){d=new S5;EN(d);d.dk=2;d.z6=GO(GN(b));return d;}if(Pz(b))return AYS(b&65535);if(!QQ(b))return A8_(b&65535);return A6C(b&65535);}}if(!c){if(Pz(b))return AYS(b&65535);if(!QQ(b))return AAd(b&65535);return A6C(b&65535);}d=new EZ;EN(d);d.dk=2;d.kx=b;e=Iu(b).data;d.tz=e[0];d.sd=e[1];return d;}
function LN(a,b){var c,d,e;if(!ANX(b)){if(!b.b_){if(b.nO())return AWF(b);return A0$(b);}if(!b.nO())return A6R(b);c=new MM;V$(c,b);return c;}c=YS(b);d=new OE;Cz(d);d.zN=c;d.Hl=c.cj;if(!b.b_){if(b.nO())return AEl(AWF(J_(b)),d);return AEl(A0$(J_(b)),d);}if(!b.nO())return AEl(A6R(J_(b)),d);c=new P3;e=new MM;V$(e,J_(b));AHh(c,e,d);return c;}
function A3v(a){return a.ir;}
function AQU(a){return a.kg+1|0;}
function AD3(a){return a.dn+1|0;}
function Kc(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function CZ(a,b){return (a.fO&b)!=b?0:1;}
function AS5(a){a.t$=J(DV,10);a.ir=(-1);a.kg=(-1);a.dn=(-1);}
function ABV(){Ly.call(this);}
function Sc(a,b,c,d){var e=new ABV();A6F(e,a,b,c,d);return e;}
function A6F(a,b,c,d,e){SA(a,b,c,d,150,20,e);}
function NK(){var a=this;CS.call(a);a.uB=null;a.ue=null;a.iM=null;a.jt=0;}
function AJs(a){var b;b=0;while(b<a.iM.nb.data.length){S(a.bH,Sc(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bE/6|0)+(24*(b>>1)|0)|0,K4(a.iM,b)));b=b+1|0;}S(a.bH,Dj(200,(a.bm/2|0)-100|0,(a.bE/6|0)+168|0,B(596)));}
function AIe(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.iM.nb.data.length){Z(a.bH,c).kj=K4(a.iM,c);c=c+1|0;}if(b.cl!=200){a.jt=b.cl;d=new T;V(d);b.kj=U(H(H(H(d,B(578)),K4(a.iM,b.cl)),B(579)));return;}b=a.I;d=a.uB;$p=1;case 1:ADS(b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ALN(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jt>=0){X0(a.iM,a.jt,c);Z(a.bH,a.jt).kj=K4(a.iM,a.jt);a.jt=(-1);return;}$p=1;case 1:YK(a,b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AGv(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DE(a,a.b0,a.ue,a.bm/2|0,20,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function UU(){Ou.call(this);}
function A1P(a){S(a.bH,Dj(6,(a.bm/2|0)-100|0,(a.bE/6|0)+168|0,B(605)));}
function AL9(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANr(a,b);if(C()){break _;}c=$z;if(c===null)return;d=a.I;e=new U0;f=new T;V(f);f=U(H(H(H(f,B(607)),c),B(608)));DQ(e);e.B1=a;e.BQ=B(609);e.BS=f;e.yN=b;$p=2;case 2:ADS(d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AQ4(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b){$p=2;continue _;}d=a.I;e=a.ox;$p=1;case 1:ADS(d,e);if(C()){break _;}return;case 2:$z=ANr(a,c);if(C()){break _;}d=$z;e=new T;V(e);f=U(H(H(e,B(610)),d));Bd();$p=3;case 3:$z=AP1(f);if(C()){break _;}b=$z;if(!b){d=a.I;e=a.ox;$p=1;continue _;}b=1;c=1;g=QR();d=BeE;$p=4;case 4:A5q(d,f,b,c,g);if(C()){break _;}e=JB(g);while(true){if(!GK(e)){e=JB(g);while
(GK(e)){d=GC(e);if(d.m1){d=d.mb;$p=7;continue _;}}$p=6;continue _;}d=GC(e);if(!d.m1)break;}d=d.mb;$p=5;case 5:AL1(d);if(C()){break _;}while(true){if(!GK(e)){e=JB(g);while(GK(e)){d=GC(e);if(d.m1){d=d.mb;$p=7;continue _;}}$p=6;continue _;}d=GC(e);if(d.m1)continue;else break;}d=d.mb;continue _;case 6:AL1(f);if(C()){break _;}d=a.I;e=a.ox;$p=1;continue _;case 7:AL1(d);if(C()){break _;}while(GK(e)){d=GC(e);if(!d.m1)continue;else{d=d.mb;continue _;}}$p=6;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function NN(){var a=this;D.call(a);a.kA=0.0;a.kp=0.0;a.HK=0;a.ul=0;}
function BlY(){var a=new NN();AC$(a);return a;}
function AC$(a){a.kA=0.0;a.kp=0.0;a.HK=0;a.ul=0;}
function Yj(){var a=this;NN.call(a);a.j1=null;a.nl=null;}
function VY(a){var b=new Yj();AZU(b,a);return b;}
function AZU(a,b){AC$(a);a.j1=$rt_createBooleanArray(10);a.nl=b;}
function APr(a,b,c){var d;d=(-1);if(b==a.nl.t1.bJ)d=0;if(b==a.nl.xj.bJ)d=1;if(b==a.nl.tT.bJ)d=2;if(b==a.nl.uu.bJ)d=3;if(b==a.nl.yC.bJ)d=4;if(d>=0)a.j1.data[d]=c;}
function AOY(a){var b;b=0;while(b<10){a.j1.data[b]=0;b=b+1|0;}}
function AOA(a,b){a.kA=0.0;a.kp=0.0;if(a.j1.data[0])a.kp=a.kp+1.0;if(a.j1.data[1])a.kp=a.kp-1.0;if(a.j1.data[2])a.kA=a.kA+1.0;if(a.j1.data[3])a.kA=a.kA-1.0;a.ul=a.j1.data[4];}
function QS(){D.call(this);this.m7=null;}
var BlZ=null;function AYX(){AYX=Bt(QS);A37();}
function A_2(){var a=new QS();ALz(a);return a;}
function Wl(){AYX();return BlZ;}
function ALz(a){var b,c,d,e;AYX();WD(a);a.m7=Ci();AHj(Bbw(),a);Xt(A__(),a);ADV(Bbs(),a);AJR(Ba$(),a);X_(Bap(),a);ASC(Ba0(),a);b=new Cd;L();U2(b,Bfc,1);c=J(D,5);d=c.data;d[0]=B(611);d[1]=B(611);d[2]=B(611);d[3]=BI(35);BB();d[4]=Bge;Ck(a,b,c);e=G0(Bfj,1);c=J(D,7);d=c.data;d[0]=B(612);d[1]=B(613);d[2]=B(612);d[3]=BI(88);d[4]=Bgd;d[5]=BI(35);d[6]=Be_;Ck(a,e,c);e=G0(BeT,3);c=J(D,3);d=c.data;d[0]=B(611);d[1]=BI(35);d[2]=BeY;Ck(a,e,c);e=G0(Bga,1);c=J(D,5);d=c.data;d[0]=B(614);d[1]=B(611);d[2]=B(614);d[3]=BI(35);d[4]
=Bh4;Ck(a,e,c);e=EL(BiC,1);c=J(D,5);d=c.data;d[0]=B(615);d[1]=B(615);d[2]=B(615);d[3]=BI(35);d[4]=Be0;Ck(a,e,c);e=EL(Bhc,1);c=J(D,7);d=c.data;d[0]=B(611);d[1]=B(611);d[2]=B(616);d[3]=BI(35);d[4]=Be0;d[5]=BI(88);d[6]=Bh4;Ck(a,e,c);e=G0(Be0,4);c=J(D,3);d=c.data;d[0]=B(617);d[1]=BI(35);d[2]=Be1;Ck(a,e,c);e=EL(Bh4,4);c=J(D,4);d=c.data;d[0]=B(617);d[1]=B(617);d[2]=BI(35);d[3]=Be0;Ck(a,e,c);e=G0(Be3,4);c=J(D,6);d=c.data;d[0]=B(72);d[1]=B(617);d[2]=BI(88);d[3]=Bhz;d[4]=BI(35);d[5]=Bh4;Ck(a,e,c);e=EL(Bh5,4);c=J(D,4);d
=c.data;d[0]=B(614);d[1]=B(618);d[2]=BI(35);d[3]=Be0;Ck(a,e,c);e=G0(Bg7,16);c=J(D,7);d=c.data;d[0]=B(619);d[1]=B(612);d[2]=B(619);d[3]=BI(88);d[4]=BhP;d[5]=BI(35);d[6]=Bh4;Ck(a,e,c);e=EL(BiG,1);c=J(D,4);d=c.data;d[0]=B(614);d[1]=B(611);d[2]=BI(35);d[3]=BhP;Ck(a,e,c);e=EL(BiD,1);c=J(D,4);d=c.data;d[0]=B(614);d[1]=B(618);d[2]=BI(35);d[3]=BhP;Ck(a,e,c);e=EL(BhM,1);c=J(D,6);d=c.data;d[0]=B(620);d[1]=B(621);d[2]=BI(65);d[3]=BhP;d[4]=BI(66);d[5]=Bhy;Ck(a,e,c);e=EL(Bie,1);c=J(D,3);d=c.data;d[0]=B(611);d[1]=BI(35);d[2]
=BhC;Ck(a,e,c);e=G0(BgV,4);c=J(D,5);d=c.data;d[0]=B(622);d[1]=B(623);d[2]=B(611);d[3]=BI(35);d[4]=Be0;Ck(a,e,c);e=G0(Bg8,4);c=J(D,5);d=c.data;d[0]=B(622);d[1]=B(623);d[2]=B(611);d[3]=BI(35);d[4]=BeY;Ck(a,e,c);e=EL(BiA,1);c=J(D,7);d=c.data;d[0]=B(611);d[1]=B(613);d[2]=B(611);d[3]=BI(35);d[4]=Bh4;d[5]=BI(88);d[6]=Bfc;Ck(a,e,c);e=EL(BiB,1);c=J(D,7);d=c.data;d[0]=B(611);d[1]=B(613);d[2]=B(611);d[3]=BI(35);d[4]=Bfh;d[5]=BI(88);d[6]=BhN;Ck(a,e,c);Rw(a.m7,BaD(a));Cg(DT(),BL(H(Be(BX(),De(a.m7)),B(624))));}
function Ck(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=c.data;e=B(3);f=0;g=0;h=0;if(!Sg(d[f],$rt_arraycls(B4))){while(d[f] instanceof B4){i=f+1|0;j=d[f];h=h+1|0;g=Bh(j);k=new T;V(k);e=U(H(H(k,e),j));f=i;}i=f;}else{i=1;l=d[f];m=0;while(true){c=l.data;if(m>=c.length)break;k=c[m];h=h+1|0;g=Bh(k);j=new T;V(j);e=U(H(H(j,e),k));m=m+1|0;}}n=Dd();while(i<d.length){o=d[i];p=0;m=i+1|0;if(d[m] instanceof Bc)p=d[m].cV;else if(d[m] instanceof P)p=d[m].b;BR(n,o,CX(p));i=i+2|0;}i=Bj(g,h);d=$rt_createIntArray(i);c=d.data;p=0;while
(p<i){q=Y(e,p);if(!DZ(n,BI(q)))c[p]=(-1);else c[p]=CP(n,BI(q)).f6;p=p+1|0;}e=a.m7;j=new UI;j.HW=b.bC;j.kL=g;j.qZ=h;j.xM=d;j.xS=b;S(e,j);}
function RG(a,b){var c,d;c=0;while(c<a.m7.p){d=Z(a.m7,c);if(ALp(d,b))return AHi(d,b);c=c+1|0;}return null;}
function A37(){BlZ=A_2();}
function Co(){var a=this;D.call(a);a.s=null;a.eO=0;a.CM=null;a.p2=0;}
var Bde=0;function Bl0(){var a=new Co();Cz(a);return a;}
function Bl1(a){var b=new Co();Nw(b,a);return b;}
function Cz(a){var b,c;b=new Gf;c=Bde;Bde=c+1|0;Lp(b,c);a.CM=Mu(b);}
function Nw(a,b){var c,d;c=new Gf;d=Bde;Bde=d+1|0;Lp(c,d);a.CM=Mu(c);a.s=b;}
function I_(a,b,c,d){var e;e=d.bz;while(true){if(b>e)return (-1);if(a.l(b,c,d)>=0)break;b=b+1|0;}return b;}
function Jl(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.l(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A4N(a,b){a.p2=b;}
function A4n(a){return a.p2;}
function A0z(a){return a.s;}
function A1k(a,b){a.s=b;}
function A$w(a,b){return 1;}
function A_e(a){return null;}
function K7(a){var b;a.eO=1;if(a.s!==null){if(!a.s.eO){b=a.s.lu();if(b!==null){a.s.eO=1;a.s=b;}a.s.iV();}else if(a.s instanceof Ix&&a.s.f7.wQ)a.s=a.s.s;}}
function AHw(){Bde=1;}
function NW(){CQ.call(this);}
function Bl2(){var a=new NW();AVL(a);return a;}
function AVL(a){Cw(a);}
function A9f(a,b){return;}
function A0m(a,b){return;}
function AUF(a){return 0;}
function DV(){var a=this;Co.call(a);a.wQ=0;a.ih=0;}
var BlX=null;function Bcy(a){var b=new DV();G_(b,a);return b;}
function G_(a,b){Cz(a);a.ih=b;}
function ATH(a,b,c,d){var e,f;e=JE(d,a.ih);MV(d,a.ih,b);f=a.s.l(b,c,d);if(f<0)MV(d,a.ih,e);return f;}
function A7y(a){return a.ih;}
function AT3(a,b){return 0;}
function AK3(){var b;b=new TK;Cz(b);BlX=b;}
function HS(){var a=this;D.call(a);a.bG=null;a.l5=0;a.h4=0;a.Bd=0;a.qW=0;a.cG=0;a.H=0;a.DS=0;a.kY=null;a.jA=null;a.bh=0;a.qf=0;a.ig=0;a.pG=0;a.eN=null;}
var Bl3=null;var BlV=null;var BlW=0;function Kr(a){return a.cG;}
function T3(a,b){if(b>0&&b<3)a.h4=b;if(b==1){a.H=a.cG;a.jA=a.kY;a.bh=a.pG;a.pG=a.ig;Gy(a);}}
function AJv(a,b){a.l5=b;a.H=a.cG;a.jA=a.kY;a.bh=a.ig+1|0;a.pG=a.ig;Gy(a);}
function PN(a){return a.kY;}
function HZ(a){return a.kY===null?0:1;}
function Lh(a){return a.jA===null?0:1;}
function BF(a){Gy(a);return a.qW;}
function G4(a){var b;b=a.kY;Gy(a);return b;}
function A3T(a){return a.H;}
function AVQ(a){return a.qW;}
function Gy(a){var b,c,d,e,f,$$je;a.qW=a.cG;a.cG=a.H;a.kY=a.jA;a.ig=a.pG;a.pG=a.bh;while(true){b=0;a.H=a.bh>=a.bG.data.length?0:Me(a);a.jA=null;if(a.h4==4){if(a.H!=92)return;a.H=a.bh>=a.bG.data.length?0:a.bG.data[CF(a)];switch(a.H){case 69:break;default:a.H=92;a.bh=a.qf;return;}a.h4=a.Bd;a.H=a.bh>(a.bG.data.length-2|0)?0:Me(a);}a:{if(a.H!=92){if(a.h4==1)switch(a.H){case 36:a.H=(-536870876);break a;case 40:if(a.bG.data[a.bh]!=63){a.H=(-2147483608);break a;}CF(a);c=a.bG.data[a.bh];d=0;while(true){b:{if(d){d=0;switch
(c){case 33:break;case 61:a.H=(-134217688);CF(a);break b;default:M(CN(B(3),EC(a),a.bh));}a.H=(-67108824);CF(a);}else{switch(c){case 33:break;case 60:CF(a);c=a.bG.data[a.bh];d=1;break b;case 61:a.H=(-536870872);CF(a);break b;case 62:a.H=(-33554392);CF(a);break b;default:a.H=ASg(a);if(a.H<256){a.l5=a.H;a.H=a.H<<16;a.H=(-1073741784)|a.H;break b;}a.H=a.H&255;a.l5=a.H;a.H=a.H<<16;a.H=(-16777176)|a.H;break b;}a.H=(-268435416);CF(a);}}if(!d)break;}break a;case 41:a.H=(-536870871);break a;case 42:case 43:case 63:switch
(a.bh>=a.bG.data.length?42:a.bG.data[a.bh]){case 43:a.H=a.H|(-2147483648);CF(a);break a;case 63:a.H=a.H|(-1073741824);CF(a);break a;default:}a.H=a.H|(-536870912);break a;case 46:a.H=(-536870866);break a;case 91:a.H=(-536870821);T3(a,2);break a;case 93:if(a.h4!=2)break a;a.H=(-536870819);break a;case 94:a.H=(-536870818);break a;case 123:a.jA=AGq(a,a.H);break a;case 124:a.H=(-536870788);break a;default:}else if(a.h4==2)switch(a.H){case 38:a.H=(-536870874);break a;case 45:a.H=(-536870867);break a;case 91:a.H=(-536870821);break a;case 93:a.H
=(-536870819);break a;case 94:a.H=(-536870818);break a;default:}}else{c=a.bh>=(a.bG.data.length-2|0)?(-1):Me(a);c:{a.H=c;switch(a.H){case -1:M(CN(B(3),EC(a),a.bh));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.H
=ADL(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.h4!=1)break a;a.H=(-2147483648)|a.H;break a;case 65:a.H=(-2147483583);break a;case 66:a.H=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:M(CN(B(3),EC(a),a.bh));case 68:case 83:case 87:case 100:case 115:case 119:a.jA=QI(Lj(a.bG,
a.qf,1),0);a.H=0;break a;case 71:a.H=(-2147483577);break a;case 80:case 112:break c;case 81:a.Bd=a.h4;a.h4=4;b=1;break a;case 90:a.H=(-2147483558);break a;case 97:a.H=7;break a;case 98:a.H=(-2147483550);break a;case 99:if(a.bh>=(a.bG.data.length-2|0))M(CN(B(3),EC(a),a.bh));a.H=a.bG.data[CF(a)]&31;break a;case 101:a.H=27;break a;case 102:a.H=12;break a;case 110:a.H=10;break a;case 114:a.H=13;break a;case 116:a.H=9;break a;case 117:a.H=Uv(a,4);break a;case 120:a.H=Uv(a,2);break a;case 122:a.H=(-2147483526);break a;default:}break a;}e
=AOn(a);f=0;if(a.H==80)f=1;try{a.jA=QI(e,f);}catch($$e){$$je=Bi($$e);if($$je instanceof MN){M(CN(B(3),EC(a),a.bh));}else{throw $$e;}}a.H=0;}}if(b)continue;else break;}}
function AOn(a){var b,c,d;b=new T;Gz(b,10);if(a.bh<(a.bG.data.length-2|0)){if(a.bG.data[a.bh]!=123){b=new T;V(b);return U(H(H(b,B(625)),Lj(a.bG,CF(a),1)));}CF(a);c=0;a:{while(a.bh<(a.bG.data.length-2|0)){c=a.bG.data[CF(a)];if(c==125)break a;Dx(b,c);}}if(c!=125)M(CN(B(3),a.eN,a.bh));}if(!J$(b))M(CN(B(3),a.eN,a.bh));d=U(b);if(Bh(d)==1){b=new T;V(b);return U(H(H(b,B(625)),d));}b:{c:{if(Bh(d)>3){if(Iw(d,B(625)))break c;if(Iw(d,B(626)))break c;}break b;}d=Jq(d,2);}return d;}
function AGq(a,b){var c,d,e,f,$$je;c=new T;Gz(c,4);d=(-1);e=2147483647;a:{while(true){if(a.bh>=a.bG.data.length)break a;b=a.bG.data[CF(a)];if(b==125)break a;if(b==44&&d<0)try{d=Ld(BL(c),10);AGG(c,0,J$(c));continue;}catch($$e){$$je=Bi($$e);if($$je instanceof Ez){break;}else{throw $$e;}}Dx(c,b&65535);}M(CN(B(3),a.eN,a.bh));}if(b!=125)M(CN(B(3),a.eN,a.bh));if(J$(c)>0)b:{try{e=Ld(BL(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bi($$e);if($$je instanceof Ez){}else{throw $$e;}}M(CN(B(3),a.eN,a.bh));}else if
(d<0)M(CN(B(3),a.eN,a.bh));if((d|e|(e-d|0))<0)M(CN(B(3),a.eN,a.bh));f=a.bh>=a.bG.data.length?42:a.bG.data[a.bh];c:{switch(f){case 43:a.H=(-2147483525);CF(a);break c;case 63:a.H=(-1073741701);CF(a);break c;default:}a.H=(-536870789);}c=new Th;c.jd=d;c.ip=e;return c;}
function EC(a){return a.eN;}
function Eo(a){return !a.cG&&!a.H&&a.bh==a.DS&&!HZ(a)?1:0;}
function Nk(b){return b<0?0:1;}
function F6(a){return !Eo(a)&&!HZ(a)&&Nk(a.cG)?1:0;}
function TJ(a){return a.cG<=56319&&a.cG>=55296?1:0;}
function Wr(a){return a.cG<=57343&&a.cG>=56320?1:0;}
function QQ(b){return b<=56319&&b>=55296?1:0;}
function Pz(b){return b<=57343&&b>=56320?1:0;}
function Uv(a,b){var c,d,e,f,$$je;c=new T;Gz(c,b);d=a.bG.data.length-2|0;e=0;while(true){f=R(e,b);if(f>=0)break;if(a.bh>=d)break;Dx(c,a.bG.data[CF(a)]);e=e+1|0;}if(!f)a:{try{b=Ld(BL(c),16);}catch($$e){$$je=Bi($$e);if($$je instanceof Ez){break a;}else{throw $$e;}}return b;}M(CN(B(3),a.eN,a.bh));}
function ADL(a){var b,c,d,e,f;b=3;c=1;d=a.bG.data.length-2|0;e=We(a.bG.data[a.bh],8);switch(e){case -1:break;default:if(e>3)b=2;CF(a);a:{while(true){if(c>=b)break a;if(a.bh>=d)break a;f=We(a.bG.data[a.bh],8);if(f<0)break;e=(e*8|0)+f|0;CF(a);c=c+1|0;}}return e;}M(CN(B(3),a.eN,a.bh));}
function ASg(a){var b,c;b=1;c=a.l5;a:while(true){if(a.bh>=a.bG.data.length)M(CN(B(3),a.eN,a.bh));b:{c:{switch(a.bG.data[a.bh]){case 41:CF(a);return c|256;case 45:if(!b)M(CN(B(3),a.eN,a.bh));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}CF(a);}CF(a);return c;}
function CF(a){var b,c;a.qf=a.bh;if(!(a.l5&4))a.bh=a.bh+1|0;else{b=a.bG.data.length-2|0;a.bh=a.bh+1|0;a:while(true){if(a.bh<b&&Qb(a.bG.data[a.bh])){a.bh=a.bh+1|0;continue;}if(a.bh>=b)break;if(a.bG.data[a.bh]!=35)break;a.bh=a.bh+1|0;while(true){if(a.bh>=b)continue a;c=a.bG.data[a.bh];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.bh=a.bh+1|0;}}}return a.qf;}
function AQQ(b){return Bl3.Ne(b);}
function Me(a){var b,c,d;b=a.bG.data[CF(a)];if(Dt(b)){c=a.qf+1|0;if(c<a.bG.data.length){d=a.bG.data[c];if(DR(d)){CF(a);return EJ(b,d);}}}return b;}
function HA(a){return a.ig;}
function ARa(){var a=this;Cb.call(a);a.AL=null;a.rc=null;a.n5=0;}
function CN(a,b,c){var d=new ARa();A3E(d,a,b,c);return d;}
function A3E(a,b,c,d){O(a);a.n5=(-1);a.AL=b;a.rc=c;a.n5=d;}
function A_a(a){var b,c,d,e,f,g,h,i;b=B(3);if(a.n5>=1){c=$rt_createCharArray(a.n5);d=c.data;e=0;f=d.length;if(e>f){b=new Cb;O(b);M(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=AH_(c);}h=new T;V(h);h=H(h,a.AL);if(a.rc!==null&&Bh(a.rc)){i=new T;V(i);b=U(H(H(H(H(Be(i,a.n5),B(627)),a.rc),B(627)),b));}else b=B(3);return U(H(h,b));}
function Mt(){CQ.call(this);this.tr=0;}
function Bl4(){var a=new Mt();A4k(a);return a;}
function A4k(a){Cw(a);}
function A8D(a,b){KJ(b,a.tr);}
function A77(a,b){a.tr=NV(b);}
function A6J(a){return 1;}
function MT(){CQ.call(this);this.tl=0;}
function Bl5(){var a=new MT();A50(a);return a;}
function A50(a){Cw(a);}
function AWi(a,b){Z7(b,a.tl);}
function AZy(a,b){a.tl=XG(b);}
function A5L(a){return 2;}
function Li(){CQ.call(this);this.r5=0;}
function Bl6(){var a=new Li();A1I(a);return a;}
function A1I(a){Cw(a);}
function A15(a,b){JK(b,a.r5);}
function AY5(a,b){a.r5=H3(b);}
function AVl(a){return 3;}
function N8(){CQ.call(this);this.sZ=Long_ZERO;}
function Bl7(){var a=new N8();AZZ(a);return a;}
function AZZ(a){Cw(a);}
function ATd(a,b){UA(b,a.sZ);}
function A_p(a,b){a.sZ=Td(b);}
function A2G(a){return 4;}
function Pd(){CQ.call(this);this.ni=0.0;}
function Bl8(){var a=new Pd();AZW(a);return a;}
function A6Q(a){var b=new Pd();AVR(b,a);return b;}
function AZW(a){Cw(a);}
function AVR(a,b){Cw(a);a.ni=b;}
function AS6(a,b){APg(b,a.ni);}
function A7Z(a,b){a.ni=AAY(b);}
function ASK(a){return 5;}
function Mm(){CQ.call(this);this.iH=0.0;}
function Bl9(){var a=new Mm();AZA(a);return a;}
function AZA(a){Cw(a);}
function A61(a,b){APl(b,a.iH);}
function AU5(a,b){a.iH=APj(b);}
function A0U(a){return 6;}
function MD(){CQ.call(this);this.mj=null;}
function Bl$(){var a=new MD();A_H(a);return a;}
function A_H(a){Cw(a);}
function A4$(a,b){JK(b,a.mj.data.length);AOz(b,a.mj);}
function A7i(a,b){a.mj=$rt_createByteArray(H3(b));AMS(b,a.mj);}
function A9C(a){return 7;}
function OB(){CQ.call(this);this.As=null;}
function Bl_(){var a=new OB();A8m(a);return a;}
function A8m(a){Cw(a);}
function A$T(a,b){Xm(b,a.As);}
function AY6(a,b){a.As=GU(b);}
function ATo(a){return 8;}
function QO(){var a=this;CQ.call(a);a.hb=null;a.mT=0;}
function L8(){var a=new QO();AG4(a);return a;}
function AG4(a){Cw(a);a.hb=Ci();}
function A9x(a,b){var c;if(a.hb.p<=0)a.mT=1;else a.mT=Z(a.hb,0).fa();KJ(b,a.mT);JK(b,a.hb.p);c=0;while(c<a.hb.p){Z(a.hb,c).gL(b);c=c+1|0;}}
function AYZ(a,b){var c,d,e;a.mT=NV(b);c=H3(b);a.hb=Ci();d=0;while(d<c){e=AE4(a.mT);e.gE(b);S(a.hb,e);d=d+1|0;}}
function AYz(a){return 9;}
function Jn(a,b){a.mT=b.fa();S(a.hb,b);}
function Fd(a,b){return Z(a.hb,b);}
function AOt(a){return a.hb.p;}
function Tv(){var a=this;D.call(a);a.Ap=null;a.xa=null;}
function ARH(a){CM(a.Ap,(Us(a.xa.result)?1:0)?null:A8w(a.xa.result));}
function AUo(a){ARH(a);}
function Tu(){D.call(this);this.Ee=null;}
function XA(a){CM(a.Ee,null);}
function AXo(a){XA(a);}
function ARR(){var a=this;D.call(a);a.EQ=null;a.qg=null;}
function Bbw(){var a=new ARR();AXA(a);return a;}
function AXA(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,3);e=d.data;e[0]=B(628);e[1]=B(618);e[2]=B(618);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(617);e[2]=B(617);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(629);e[1]=B(630);e[2]=B(631);c[2]=d;d=J(B4,3);e=d.data;e[0]=B(629);e[1]=B(631);e[2]=B(631);c[3]=d;a.EQ=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Be0;e[1]=BeY;BB();e[2]=BhP;e[3]=BhA;e[4]=BhQ;c[0]=d;d=J(D,5);e=d.data;e[0]=BhU;e[1]=BhY;e[2]=BhK;e[3]=Bh2;e[4]=Bh9;c[1]=d;d=J(D,5);e=d.data;e[0]
=BhT;e[1]=BhX;e[2]=BhJ;e[3]=Bh1;e[4]=Bh8;c[2]=d;d=J(D,5);e=d.data;e[0]=BhV;e[1]=BhZ;e[2]=BhL;e[3]=Bh3;e[4]=Bh$;c[3]=d;d=J(D,5);e=d.data;e[0]=Bh_;e[1]=Bia;e[2]=Bib;e[3]=Bic;e[4]=Bid;c[4]=d;a.qg=b;}
function AHj(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.qg.data[0].data.length){d=a.qg.data[0].data[c];e=0;while(e<(a.qg.data.length-1|0)){f=a.qg.data;g=e+1|0;h=f[g].data[c];i=Qf(h);f=J(D,5);j=f.data;j[0]=a.EQ.data[e];j[1]=BI(35);BB();j[2]=Bh4;j[3]=BI(88);j[4]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function XU(){var a=this;D.call(a);a.Bf=null;a.pt=null;}
function A__(){var a=new XU();A$o(a);return a;}
function A$o(a){var b,c,d,e;b=J($rt_arraycls(B4),1);c=b.data;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(72);e[2]=B(617);c[0]=d;a.Bf=b;b=J($rt_arraycls(D),2);c=b.data;d=J(D,5);e=d.data;L();e[0]=Be0;e[1]=BeY;BB();e[2]=BhP;e[3]=BhA;e[4]=BhQ;c[0]=d;d=J(D,5);e=d.data;e[0]=BhS;e[1]=BhW;e[2]=BhR;e[3]=Bh0;e[4]=Bh7;c[1]=d;a.pt=b;}
function Xt(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.pt.data[0].data.length){d=a.pt.data[0].data[c];e=0;while(e<(a.pt.data.length-1|0)){f=a.pt.data;g=e+1|0;h=f[g].data[c];i=Qf(h);j=J(D,5);k=j.data;k[0]=a.Bf.data[e];k[1]=BI(35);BB();k[2]=Bh4;k[3]=BI(88);k[4]=d;Ck(b,i,j);e=g;}c=c+1|0;}h=new Cd;BB();Gm(h,BhO,1);f=J(D,7);k=f.data;k[0]=B(632);k[1]=B(633);k[2]=B(632);k[3]=BI(88);k[4]=Bge;k[5]=BI(35);k[6]=Bh4;Ck(b,h,f);d=EL(Bgc,4);f=J(D,9);k=f.data;k[0]=B(72);k[1]=B(617);k[2]=B(48);k[3]=BI(89);k[4]=Bgb;k[5]=BI(88);k[6]
=BhP;k[7]=BI(35);k[8]=Bh4;Ck(b,d,f);}
function XN(){D.call(this);this.sr=null;}
function Bbs(){var a=new XN();A2b(a);return a;}
function A2b(a){var b,c,d,e;b=J($rt_arraycls(D),3);c=b.data;d=J(D,2);e=d.data;L();e[0]=Bfh;BB();e[1]=BhQ;c[0]=d;d=J(D,2);e=d.data;e[0]=Bfg;e[1]=BhP;c[1]=d;d=J(D,2);e=d.data;e[0]=BgZ;e[1]=BhA;c[2]=d;a.sr=b;}
function ADV(a,b){var c,d,e,f,g,h;c=0;while(c<a.sr.data.length){d=a.sr.data[c].data[0];e=a.sr.data[c].data[1];f=AL0(d);g=J(D,5);h=g.data;h[0]=B(611);h[1]=B(611);h[2]=B(611);h[3]=BI(35);h[4]=e;Ck(b,f,g);f=EL(e,9);g=J(D,3);h=g.data;h[0]=B(617);h[1]=BI(35);h[2]=d;Ck(b,f,g);c=c+1|0;}}
function AD_(){D.call(this);}
function Ba$(){var a=new AD_();A0C(a);return a;}
function A0C(a){return;}
function AJR(a,b){var c,d,e;c=new Cd;BB();DB(c,Bh6);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(617);e[3]=BI(88);L();e[4]=Be9;e[5]=BI(89);e[6]=Be$;e[7]=BI(35);e[8]=Bh5;Ck(b,c,d);c=Qf(Bh6);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(617);e[3]=BI(88);e[4]=Be$;e[5]=BI(89);e[6]=Be9;e[7]=BI(35);e[8]=Bh5;Ck(b,c,d);}
function ARQ(){D.call(this);}
function Bap(){var a=new ARQ();A6T(a);return a;}
function A6T(a){return;}
function X_(a,b){var c,d,e;c=new Cd;L();AHZ(c,BgW);d=J(D,5);e=d.data;e[0]=B(611);e[1]=B(614);e[2]=B(611);e[3]=BI(35);e[4]=Be0;Ck(b,c,d);c=AL0(Bg3);d=J(D,5);e=d.data;e[0]=B(611);e[1]=B(614);e[2]=B(611);e[3]=BI(35);e[4]=BeY;Ck(b,c,d);c=AL0(Bg0);d=J(D,4);e=d.data;e[0]=B(615);e[1]=B(615);e[2]=BI(35);e[3]=Be0;Ck(b,c,d);}
function AE9(){var a=this;D.call(a);a.zE=null;a.n2=null;}
function Ba0(){var a=new AE9();AU7(a);return a;}
function AU7(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,2);e=d.data;e[0]=B(628);e[1]=B(619);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(619);e[1]=B(628);e[2]=B(628);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(628);e[1]=B(619);e[2]=B(619);c[2]=d;d=J(B4,2);e=d.data;e[0]=B(619);e[1]=B(619);c[3]=d;a.zE=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Bfc;e[1]=Bgo;BB();e[2]=BhP;e[3]=BhA;e[4]=BhQ;c[0]=d;d=J(D,5);e=d.data;e[0]=Bif;e[1]=Bij;e[2]=Bin;e[3]=Bir;e[4]=Biv;c[1]=d;d=J(D,5);e=d.data;e[0]=Big;e[1]=Bik;e[2]
=Bio;e[3]=Bis;e[4]=Biw;c[2]=d;d=J(D,5);e=d.data;e[0]=Bih;e[1]=Bil;e[2]=Bip;e[3]=Bit;e[4]=Bix;c[3]=d;d=J(D,5);e=d.data;e[0]=Bii;e[1]=Bim;e[2]=Biq;e[3]=Biu;e[4]=Biy;c[4]=d;a.n2=b;}
function ASC(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.n2.data[0].data.length){d=a.n2.data[0].data[c];e=0;while(e<(a.n2.data.length-1|0)){f=a.n2.data;g=e+1|0;h=f[g].data[c];i=Qf(h);f=J(D,3);j=f.data;j[0]=a.zE.data[e];j[1]=BI(88);j[2]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function Yg(){D.call(this);this.IQ=null;}
function BaD(a){var b=new Yg();AYu(b,a);return b;}
function AYu(a,b){a.IQ=b;}
function AMD(a,b,c){return Kn(c)<Kn(b)?(-1):Kn(c)<=Kn(b)?0:1;}
function AZv(a,b,c){return AMD(a,b,c);}
function QB(){DV.call(this);}
function A3w(a,b,c,d){var e;e=a.ih;Cv(d,e,b-Ep(d,e)|0);return a.s.l(b,c,d);}
function A9y(a,b){return 0;}
function AR8(){DV.call(this);}
function Bbt(){var a=new AR8();A2S(a);return a;}
function A2S(a){G_(a,(-1));}
function A4M(a,b,c,d){return b;}
function PQ(){DV.call(this);}
function AT9(a,b,c,d){if(Ep(d,a.ih)!=b)b=(-1);return b;}
function Q1(){DV.call(this);this.wE=0;}
function A3y(a,b,c,d){var e;e=a.ih;Cv(d,e,b-Ep(d,e)|0);a.wE=b;return b;}
function AUc(a){return a.wE;}
function A8N(a,b){return 0;}
function HQ(){DV.call(this);}
function Bb4(){var a=new HQ();A$m(a);return a;}
function A$m(a){G_(a,0);}
function A1v(a,b,c,d){if(d.np!=1&&b!=d.bz)return (-1);ARx(d);MV(d,0,b);return b;}
function CI(){Co.call(this);this.dk=0;}
function Bma(){var a=new CI();EN(a);return a;}
function EN(a){Cz(a);a.dk=1;}
function A_y(a,b,c,d){var e;if((b+a.d_()|0)>d.bz){d.hn=1;return (-1);}e=a.dm(b,c);if(e<0)return (-1);return a.s.l(b+e|0,c,d);}
function A9$(a){return a.dk;}
function AW6(a,b){return 1;}
function AFU(){CI.call(this);}
function IF(a){var b=new AFU();A7F(b,a);return b;}
function A7F(a,b){Nw(a,b);a.dk=1;a.p2=1;a.dk=0;}
function A9M(a,b,c){return 0;}
function A5B(a,b,c,d){var e,f,g;e=d.bz;f=d.ff;while(true){g=R(b,e);if(g>0)return (-1);if(g<0&&DR(Y(c,b))&&b>f&&Dt(Y(c,b-1|0))){b=b+1|0;continue;}if(a.s.l(b,c,d)>=0)break;b=b+1|0;}return b;}
function A4C(a,b,c,d,e){var f,g;f=e.bz;g=e.ff;while(true){if(c<b)return (-1);if(c<f&&DR(Y(d,c))&&c>g&&Dt(Y(d,c-1|0))){c=c+(-1)|0;continue;}if(a.s.l(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A3x(a,b){return 0;}
function CE(){var a=this;Co.call(a);a.dl=null;a.f7=null;a.cJ=0;}
function Bmb(){var a=new CE();A4y(a);return a;}
function BaE(a,b){var c=new CE();GR(c,a,b);return c;}
function A4y(a){Cz(a);}
function GR(a,b,c){Cz(a);a.dl=b;a.f7=c;a.cJ=c.ih;}
function AWp(a,b,c,d){var e,f,g,h;if(a.dl===null)return (-1);e=Hk(d,a.cJ);EM(d,a.cJ,b);f=a.dl.p;g=0;while(true){if(g>=f){EM(d,a.cJ,e);return (-1);}h=Z(a.dl,g).l(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AZj(a,b){a.f7.s=b;}
function A7e(a,b){var c;a:{if(a.dl!==null){c=Jg(a.dl);while(true){if(!KB(c))break a;if(!KS(c).d3(b))continue;else return 1;}}}return 0;}
function AZQ(a,b){return JE(b,a.cJ)>=0&&Hk(b,a.cJ)==JE(b,a.cJ)?0:1;}
function AUG(a){var b,c,d,e;a.eO=1;if(a.f7!==null&&!a.f7.eO)K7(a.f7);a:{if(a.dl!==null){b=a.dl.p;c=0;while(true){if(c>=b)break a;d=Z(a.dl,c);e=d.lu();if(e===null)e=d;else{d.eO=1;En(a.dl,c);AMI(a.dl,c,e);}if(!e.eO)e.iV();c=c+1|0;}}}if(a.s!==null)K7(a);}
function K0(){CE.call(this);}
function Bmc(){var a=new K0();AXV(a);return a;}
function AXV(a){Cz(a);}
function AZb(a,b,c,d){var e,f,g,h;e=Ep(d,a.cJ);Cv(d,a.cJ,b);f=a.dl.p;g=0;while(true){if(g>=f){Cv(d,a.cJ,e);return (-1);}h=Z(a.dl,g).l(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A9k(a,b){return !Ep(b,a.cJ)?0:1;}
function EX(){K0.call(this);}
function A44(a,b,c,d){var e,f,g;e=Ep(d,a.cJ);Cv(d,a.cJ,b);f=a.dl.p;g=0;while(g<f){if(Z(a.dl,g).l(b,c,d)>=0)return a.s.l(a.f7.wE,c,d);g=g+1|0;}Cv(d,a.cJ,e);return (-1);}
function A85(a,b){a.s=b;}
function S8(){EX.call(this);}
function AZf(a,b,c,d){var e,f;e=a.dl.p;f=0;while(f<e){if(Z(a.dl,f).l(b,c,d)>=0)return a.s.l(b,c,d);f=f+1|0;}return (-1);}
function A1m(a,b){return 0;}
function WG(){EX.call(this);}
function ATW(a,b,c,d){var e,f;e=a.dl.p;f=0;while(true){if(f>=e)return a.s.l(b,c,d);if(Z(a.dl,f).l(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A$c(a,b){return 0;}
function U8(){EX.call(this);}
function AUD(a,b,c,d){var e,f,g,h;e=a.dl.p;f=d.oc?0:d.ff;a:{g=a.s.l(b,c,d);if(g>=0){Cv(d,a.cJ,b);h=0;while(true){if(h>=e)break a;if(Z(a.dl,h).eU(f,b,c,d)>=0){Cv(d,a.cJ,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_M(a,b){return 0;}
function Rd(){EX.call(this);}
function A2_(a,b,c,d){var e,f;e=a.dl.p;Cv(d,a.cJ,b);f=0;while(true){if(f>=e)return a.s.l(b,c,d);if(Z(a.dl,f).eU(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A9q(a,b){return 0;}
function Ix(){CE.call(this);this.fn=null;}
function Bcq(a,b){var c=new Ix();ZV(c,a,b);return c;}
function ZV(a,b,c){Cz(a);a.fn=b;a.f7=c;a.cJ=c.ih;}
function ATb(a,b,c,d){var e,f;e=Hk(d,a.cJ);EM(d,a.cJ,b);f=a.fn.l(b,c,d);if(f>=0)return f;EM(d,a.cJ,e);return (-1);}
function AX8(a,b,c,d){var e;e=a.fn.eH(b,c,d);if(e>=0)EM(d,a.cJ,e);return e;}
function A9B(a,b,c,d,e){var f;f=a.fn.eU(b,c,d,e);if(f>=0)EM(e,a.cJ,f);return f;}
function A7a(a,b){return a.fn.d3(b);}
function A8L(a){var b;b=new OM;ZV(b,a.fn,a.f7);a.s=b;return b;}
function A11(a){var b;a.eO=1;if(a.f7!==null&&!a.f7.eO)K7(a.f7);if(a.fn!==null&&!a.fn.eO){b=a.fn.lu();if(b!==null){a.fn.eO=1;a.fn=b;}a.fn.iV();}}
function HW(){D.call(this);}
function Bm(){var a=this;HW.call(a);a.cj=0;a.dN=0;a.b9=null;a.p_=null;a.qE=null;a.b_=0;}
var Bmd=null;function Bme(){var a=new Bm();B0(a);return a;}
function B0(a){var b;b=new WU;b.by=$rt_createIntArray(64);a.b9=b;}
function A4a(a){return null;}
function A3I(a){return a.b9;}
function ANX(a){return !a.dN?(IX(a.b9,0)>=2048?0:1):AEp(a.b9,0)>=2048?0:1;}
function A6a(a){return a.b_;}
function A94(a){return a;}
function YS(a){var b,c;if(a.qE===null){b=a.kk();c=new Sk;c.Jl=a;c.Cm=b;B0(c);a.qE=c;Fw(a.qE,a.dN);}return a.qE;}
function J_(a){var b,c;if(a.p_===null){b=a.kk();c=new Sj;c.GG=a;c.Es=b;c.Bg=a;B0(c);a.p_=c;Fw(a.p_,a.cj);a.p_.b_=a.b_;}return a.p_;}
function A_b(a){return 0;}
function Fw(a,b){if(a.cj^b){a.cj=a.cj?0:1;a.dN=a.dN?0:1;}if(!a.b_)a.b_=1;return a;}
function AVU(a){return a.cj;}
function KD(b,c){if(b.hC()!==null&&c.hC()!==null)return AD5(b.hC(),c.hC());return 1;}
function QI(b,c){return APO(ARr(Bmd,b),c);}
function ZZ(){Bmd=new H6;}
function ZJ(){var a=this;Bm.call(a);a.xF=0;a.y4=0;a.nk=0;a.uL=0;a.iv=0;a.lh=0;a.b6=null;a.c4=null;}
function Eq(){var a=new ZJ();A2u(a);return a;}
function A$G(a,b){var c=new ZJ();AUV(c,a,b);return c;}
function A2u(a){B0(a);a.b6=A_O();}
function AUV(a,b,c){B0(a);a.b6=A_O();a.xF=b;a.y4=c;}
function Dp(a,b){a:{if(a.xF){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.iv){Ow(a.b6,Kc(b&65535));break a;}Ma(a.b6,Kc(b&65535));break a;}if(a.y4&&b>128){a.nk=1;b=GO(GN(b));}}}if(!(!QQ(b)&&!Pz(b))){if(a.uL)Ow(a.b9,b-55296|0);else Ma(a.b9,b-55296|0);}if(a.iv)Ow(a.b6,b);else Ma(a.b6,b);if(!a.b_&&Ms(b))a.b_=1;return a;}
function ASs(a,b){var c,d,e;if(!a.b_&&b.b_)a.b_=1;if(a.uL){if(!b.dN)GZ(a.b9,b.kk());else Ec(a.b9,b.kk());}else if(!b.dN)Hp(a.b9,b.kk());else{Hc(a.b9,b.kk());Ec(a.b9,b.kk());a.dN=a.dN?0:1;a.uL=1;}if(!a.lh&&b.hC()!==null){if(a.iv){if(!b.cj)GZ(a.b6,b.hC());else Ec(a.b6,b.hC());}else if(!b.cj)Hp(a.b6,b.hC());else{Hc(a.b6,b.hC());Ec(a.b6,b.hC());a.cj=a.cj?0:1;a.iv=1;}}else{c=a.cj;if(a.c4!==null){d=a.c4;if(!c){e=new TV;e.HC=a;e.EU=c;e.Ba=d;e.A5=b;B0(e);a.c4=e;}else{e=new TW;e.JJ=a;e.Ad=c;e.Dt=d;e.Da=b;B0(e);a.c4=
e;}}else{if(c&&!a.iv&&Om(a.b6)){d=new TS;d.Iw=a;d.Dy=b;B0(d);a.c4=d;}else if(!c){d=new TQ;d.xd=a;d.ws=c;d.CH=b;B0(d);a.c4=d;}else{d=new TR;d.vh=a;d.tQ=c;d.A8=b;B0(d);a.c4=d;}a.lh=1;}}return a;}
function CG(a,b,c){var d;if(b>c){d=new Cb;O(d);M(d);}a:{b:{if(!a.xF){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Dp(a,b);b=b+1|0;}}if(a.iv)AIC(a.b6,b,c+1|0);else Jm(a.b6,b,c+1|0);}return a;}
function AIb(a,b){var c,d,e;if(!a.b_&&b.b_)a.b_=1;if(b.nk)a.nk=1;if(!(a.dN^b.dN)){if(!a.dN)Hp(a.b9,b.b9);else Ec(a.b9,b.b9);}else if(a.dN)GZ(a.b9,b.b9);else{Hc(a.b9,b.b9);Ec(a.b9,b.b9);a.dN=1;}if(!a.lh&&DX(b)!==null){if(!(a.cj^b.cj)){if(!a.cj)Hp(a.b6,DX(b));else Ec(a.b6,DX(b));}else if(a.cj)GZ(a.b6,DX(b));else{Hc(a.b6,DX(b));Ec(a.b6,DX(b));a.cj=1;}}else{c=a.cj;if(a.c4!==null){d=a.c4;if(!c){e=new Pn;e.Fn=a;e.AO=c;e.Ez=d;e.Bo=b;B0(e);a.c4=e;}else{e=new PB;e.FC=a;e.EN=c;e.y0=d;e.y6=b;B0(e);a.c4=e;}}else{if(!a.iv
&&Om(a.b6)){if(!c){d=new TT;d.JL=a;d.zR=b;B0(d);a.c4=d;}else{d=new TU;d.HN=a;d.EE=b;B0(d);a.c4=d;}}else if(!c){d=new TY;d.AS=a;d.Ag=b;d.Dv=c;B0(d);a.c4=d;}else{d=new TZ;d.Ar=a;d.Ay=b;d.DY=c;B0(d);a.c4=d;}a.lh=1;}}}
function Sr(a,b){var c,d,e;if(!a.b_&&b.b_)a.b_=1;if(b.nk)a.nk=1;if(!(a.dN^b.dN)){if(!a.dN)Ec(a.b9,b.b9);else Hp(a.b9,b.b9);}else if(!a.dN)GZ(a.b9,b.b9);else{Hc(a.b9,b.b9);Ec(a.b9,b.b9);a.dN=0;}if(!a.lh&&DX(b)!==null){if(!(a.cj^b.cj)){if(!a.cj)Ec(a.b6,DX(b));else Hp(a.b6,DX(b));}else if(!a.cj)GZ(a.b6,DX(b));else{Hc(a.b6,DX(b));Ec(a.b6,DX(b));a.cj=0;}}else{c=a.cj;if(a.c4!==null){d=a.c4;if(!c){e=new Pp;e.HB=a;e.Eg=c;e.Ck=d;e.Ac=b;B0(e);a.c4=e;}else{e=new Pq;e.HT=a;e.D7=c;e.BZ=d;e.Ef=b;B0(e);a.c4=e;}}else{if(!a.iv
&&Om(a.b6)){if(!c){d=new Pl;d.FF=a;d.CV=b;B0(d);a.c4=d;}else{d=new Pm;d.JG=a;d.zK=b;B0(d);a.c4=d;}}else if(!c){d=new Pr;d.Fa=a;d.ET=b;d.Ax=c;B0(d);a.c4=d;}else{d=new Pk;d.Av=a;d.D_=b;d.DC=c;B0(d);a.c4=d;}a.lh=1;}}}
function D5(a,b){if(a.c4!==null)return a.cj^a.c4.Y(b);return a.cj^EK(a.b6,b);}
function DX(a){if(!a.lh)return a.b6;return null;}
function A5u(a){return a.b9;}
function A1c(a){var b,c;if(a.c4!==null)return a;b=DX(a);c=new Po;c.Hm=a;c.sf=b;B0(c);return Fw(c,a.cj);}
function A71(a){var b,c;b=new T;V(b);c=IX(a.b6,0);while(c>=0){Hh(b,Iu(c));Dx(b,124);c=IX(a.b6,c+1|0);}if(b.bZ>0)Se(b,b.bZ-1|0);return U(b);}
function AVV(a){return a.nk;}
function MN(){var a=this;B6.call(a);a.G6=null;a.Jp=null;}
function E5(){Co.call(this);this.bR=null;}
function Bmf(a,b,c){var d=new E5();Ef(d,a,b,c);return d;}
function Ef(a,b,c,d){Nw(a,c);a.bR=b;a.p2=d;}
function A_D(a){return a.bR;}
function A0p(a,b){return !a.bR.d3(b)&&!a.s.d3(b)?0:1;}
function A$I(a,b){return 1;}
function AYt(a){var b;a.eO=1;if(a.s!==null&&!a.s.eO){b=a.s.lu();if(b!==null){a.s.eO=1;a.s=b;}a.s.iV();}if(a.bR!==null){if(!a.bR.eO){b=a.bR.lu();if(b!==null){a.bR.eO=1;a.bR=b;}a.bR.iV();}else if(a.bR instanceof Ix&&a.bR.f7.wQ)a.bR=a.bR.s;}}
function D7(){E5.call(this);this.cM=null;}
function BaV(a,b,c){var d=new D7();F1(d,a,b,c);return d;}
function F1(a,b,c,d){Ef(a,b,c,d);a.cM=b;}
function A3a(a,b,c,d){var e,f;e=0;a:{while((b+a.cM.d_()|0)<=d.bz){f=a.cM.dm(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.s.l(b,c,d);if(f>=0)break;b=b-a.cM.d_()|0;e=e+(-1)|0;}return f;}
function GA(){D7.call(this);this.kV=null;}
function BbW(a,b,c,d){var e=new GA();QK(e,a,b,c,d);return e;}
function QK(a,b,c,d,e){F1(a,c,d,e);a.kV=b;}
function A3Z(a,b,c,d){var e,f,g,h;e=a.kV.jd;f=a.kV.ip;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.cM.d_()|0)>d.bz)break a;h=a.cM.dm(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.s.l(b,c,d);if(h>=0)break;b=b-a.cM.d_()|0;g=g+(-1)|0;}return h;}if((b+a.cM.d_()|0)>d.bz){d.hn=1;return (-1);}h=a.cM.dm(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function DW(){E5.call(this);}
function A3p(a,b,c,d){var e;if(!a.bR.b4(d))return a.s.l(b,c,d);e=a.bR.l(b,c,d);if(e>=0)return e;return a.s.l(b,c,d);}
function FT(){D7.call(this);}
function A7o(a,b,c,d){var e;e=a.bR.l(b,c,d);if(e<0)e=a.s.l(b,c,d);return e;}
function A2L(a,b){a.s=b;a.bR.ca(b);}
function Sm(){D7.call(this);}
function A_t(a,b,c,d){while((b+a.cM.d_()|0)<=d.bz&&a.cM.dm(b,c)>0){b=b+a.cM.d_()|0;}return a.s.l(b,c,d);}
function AYJ(a,b,c,d){var e,f,g;e=a.s.eH(b,c,d);if(e<0)return (-1);f=e-a.cM.d_()|0;while(f>=b&&a.cM.dm(f,c)>0){g=f-a.cM.d_()|0;e=f;f=g;}return e;}
function Ez(){Cb.call(this);}
function Bmg(){var a=new Ez();A3N(a);return a;}
function A3N(a){O(a);}
function Th(){var a=this;HW.call(a);a.jd=0;a.ip=0;}
function A51(a){return a.jd;}
function A$C(a){return a.ip;}
function A7$(a){var b;b=new T;V(b);return U(H(H(H(Be(H(b,B(634)),a.jd),B(635)),a.ip==2147483647?B(3):Mu(AQP(a.ip))),B(636)));}
function TK(){Co.call(this);}
function Bmh(){var a=new TK();A_C(a);return a;}
function A_C(a){Cz(a);}
function AXt(a,b,c,d){return b;}
function A8K(a,b){return 0;}
function WU(){var a=this;D.call(a);a.by=null;a.cm=0;}
function A_O(){var a=new WU();A4u(a);return a;}
function A4u(a){a.by=$rt_createIntArray(0);}
function Ma(a,b){var c,d;c=b/32|0;if(b>=a.cm){KG(a,c+1|0);a.cm=b+1|0;}d=a.by.data;d[c]=d[c]|1<<(b%32|0);}
function Jm(a,b,c){var d,e,f,g,h;if(b>c){d=new BO;O(d);M(d);}e=b/32|0;f=c/32|0;if(c>a.cm){KG(a,f+1|0);a.cm=c;}if(e==f){g=a.by.data;g[e]=g[e]|Je(a,b)&KA(a,c);}else{g=a.by.data;g[e]=g[e]|Je(a,b);h=e+1|0;while(h<f){a.by.data[h]=(-1);h=h+1|0;}g=a.by.data;g[f]=g[f]|KA(a,c);}}
function Je(a,b){return (-1)<<(b%32|0);}
function KA(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function Ow(a,b){var c,d;c=b/32|0;if(c<a.by.data.length){d=a.by.data;d[c]=d[c]&Ni((-2),b%32|0);if(b==(a.cm-1|0))H8(a);}}
function AIC(a,b,c){var d,e,f,g,h;if(b>c){d=new BO;O(d);M(d);}if(b>=a.cm)return;c=CB(a.cm,c);e=b/32|0;f=c/32|0;if(e==f){g=a.by.data;g[e]=g[e]&(KA(a,b)|Je(a,c));}else{g=a.by.data;g[e]=g[e]&KA(a,b);h=e+1|0;while(h<f){a.by.data[h]=0;h=h+1|0;}g=a.by.data;g[f]=g[f]&Je(a,c);}H8(a);}
function EK(a,b){var c;c=b/32|0;return c<a.by.data.length&&a.by.data[c]&1<<(b%32|0)?1:0;}
function IX(a,b){var c,d,e;if(b>=a.cm)return (-1);c=b/32|0;d=a.by.data[c]>>>(b%32|0);if(d)return JA(d)+b|0;d=(a.cm+31|0)/32|0;e=c+1|0;while(e<d){if(a.by.data[e])return (e*32|0)+JA(a.by.data[e])|0;e=e+1|0;}return (-1);}
function AEp(a,b){var c,d,e;if(b>=a.cm)return b;c=b/32|0;d=(a.by.data[c]^(-1))>>>(b%32|0);if(d)return JA(d)+b|0;d=(a.cm+31|0)/32|0;e=c+1|0;while(e<d){if(a.by.data[e]!=(-1))return (e*32|0)+JA(a.by.data[e]^(-1))|0;e=e+1|0;}return a.cm;}
function KG(a,b){var c,d,e,f;if(a.by.data.length>=b)return;c=DC((b*3|0)/2|0,(a.by.data.length*2|0)+1|0);d=a.by.data;e=$rt_createIntArray(c);f=e.data;b=CB(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.by=e;}
function H8(a){var b,c,d;b=(a.cm+31|0)/32|0;a.cm=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Tt(a.by.data[c]);if(d<32)break;c=c+(-1)|0;a.cm=a.cm-32|0;}a.cm=a.cm-d|0;}}
function AD5(a,b){var c,d;c=CB(a.by.data.length,b.by.data.length);d=0;while(d<c){if(a.by.data[d]&b.by.data[d])return 1;d=d+1|0;}return 0;}
function Ec(a,b){var c,d,e;c=CB(a.by.data.length,b.by.data.length);d=0;while(d<c){e=a.by.data;e[d]=e[d]&b.by.data[d];d=d+1|0;}while(c<a.by.data.length){a.by.data[c]=0;c=c+1|0;}a.cm=CB(a.cm,b.cm);H8(a);}
function GZ(a,b){var c,d,e;c=CB(a.by.data.length,b.by.data.length);d=0;while(d<c){e=a.by.data;e[d]=e[d]&(b.by.data[d]^(-1));d=d+1|0;}H8(a);}
function Hp(a,b){var c,d,e;a.cm=DC(a.cm,b.cm);KG(a,(a.cm+31|0)/32|0);c=CB(a.by.data.length,b.cm);d=0;while(d<c){e=a.by.data;e[d]=e[d]|b.by.data[d];d=d+1|0;}}
function Hc(a,b){var c,d,e;a.cm=DC(a.cm,b.cm);KG(a,(a.cm+31|0)/32|0);c=CB(a.by.data.length,b.cm);d=0;while(d<c){e=a.by.data;e[d]=e[d]^b.by.data[d];d=d+1|0;}H8(a);}
function Om(a){return a.cm?0:1;}
function OE(){var a=this;CE.call(a);a.zN=null;a.Hl=0;}
function A5D(a,b){a.s=b;}
function ABE(a,b,c,d){var e,f,g,h,i;e=d.ff;f=d.bz;g=b+1|0;h=R(g,f);if(h>0){d.hn=1;return (-1);}i=Y(c,b);if(!a.zN.Y(i))return (-1);if(Dt(i)){if(h<0&&DR(Y(c,g)))return (-1);}else if(DR(i)&&b>e&&Dt(Y(c,b-1|0)))return (-1);return a.s.l(g,c,d);}
function P3(){var a=this;CE.call(a);a.vM=null;a.xP=null;}
function AEl(a,b){var c=new P3();AHh(c,a,b);return c;}
function AHh(a,b,c){Cz(a);a.vM=b;a.xP=c;}
function ATF(a,b,c,d){var e;e=a.vM.l(b,c,d);if(e<0)e=ABE(a.xP,b,c,d);if(e>=0)return e;return (-1);}
function A8x(a,b){a.s=b;a.xP.s=b;a.vM.ca(b);}
function AUd(a,b){return 1;}
function ATZ(a,b){return 1;}
function EP(){var a=this;CE.call(a);a.h0=null;a.F_=0;}
function A6R(a){var b=new EP();V$(b,a);return b;}
function V$(a,b){Cz(a);a.h0=b.sN();a.F_=b.cj;}
function A5n(a,b,c,d){var e,f,g;e=d.bz;if(b<e){f=b+1|0;g=Y(c,b);if(a.Y(g)){b=a.s.l(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=Y(c,f);if(J4(g,f)&&a.Y(EJ(g,f)))return a.s.l(b,c,d);}}return (-1);}
function AV8(a,b){return a.h0.Y(b);}
function ATA(a,b){if(b instanceof EZ)return a.h0.Y(b.kx);if(b instanceof Ft)return a.h0.Y(b.gt);if(b instanceof EP)return KD(a.h0,b.h0);if(!(b instanceof Fn))return 1;return KD(a.h0,b.j0);}
function AXh(a){return a.h0;}
function A90(a,b){a.s=b;}
function AVP(a,b){return 1;}
function MM(){EP.call(this);}
function AW7(a,b){return a.h0.Y(GO(GN(b)));}
function Zt(){var a=this;CI.call(a);a.Dg=null;a.FX=0;}
function AWF(a){var b=new Zt();AYP(b,a);return b;}
function AYP(a,b){EN(a);a.Dg=b.sN();a.FX=b.cj;}
function A6V(a,b,c){return !a.Dg.Y(EV(FC(Y(c,b))))?(-1):1;}
function Fn(){var a=this;CI.call(a);a.j0=null;a.Gs=0;}
function A0$(a){var b=new Fn();AZE(b,a);return b;}
function AZE(a,b){EN(a);a.j0=b.sN();a.Gs=b.cj;}
function S2(a,b,c){return !a.j0.Y(Y(c,b))?(-1):1;}
function AZm(a,b){if(b instanceof Ft)return a.j0.Y(b.gt);if(b instanceof Fn)return KD(a.j0,b.j0);if(!(b instanceof EP)){if(!(b instanceof EZ))return 1;return 0;}return KD(a.j0,b.h0);}
function A8z(a){return a.j0;}
function T1(){var a=this;CE.call(a);a.jS=null;a.x6=null;a.ow=0;}
function A$v(a,b){var c=new T1();A3s(c,a,b);return c;}
function A3s(a,b,c){Cz(a);a.jS=b;a.ow=c;}
function AYa(a,b){a.s=b;}
function P6(a){if(a.x6===null)a.x6=AH_(a.jS);return a.x6;}
function ASR(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.bz;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Y(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.ow)return (-1);while(true){if(l>=a.ow)return a.s.l(i,c,d);if(m[l]!=a.jS.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Y(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Y(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.ow==3&&f[0]==a.jS.data[0]&&f[1]==a.jS.data[1]&&f[2]==a.jS.data[2]?a.s.l(b,c,d):(-1);}return a.ow==2&&f[0]==a.jS.data[0]&&f[1]==a.jS.data[1]?a.s.l(k,c,d):(-1);}return (-1);}return (-1);}
function A4g(a,b){return b instanceof T1&&!DA(P6(b),P6(a))?0:1;}
function A1f(a,b){return 1;}
function Ft(){CI.call(this);this.gt=0;}
function AAd(a){var b=new Ft();AZG(b,a);return b;}
function AZG(a,b){EN(a);a.gt=b;}
function A6N(a){return 1;}
function AWB(a,b,c){return a.gt!=Y(c,b)?(-1):1;}
function AVD(a,b,c,d){var e,f,g,h;if(!(c instanceof B4))return I_(a,b,c,d);e=c;f=d.bz;while(true){if(b>=f)return (-1);g=Hg(e,a.gt,b);if(g<0)return (-1);h=a.s;b=g+1|0;if(h.l(b,c,d)>=0)break;}return g;}
function AXi(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jl(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=If(f,a.gt,c);if(g<0)break a;if(g<b)break a;if(a.s.l(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ATX(a){return a.gt;}
function A0_(a,b){if(b instanceof Ft)return b.gt!=a.gt?0:1;if(!(b instanceof Fn)){if(b instanceof EP)return b.Y(a.gt);if(!(b instanceof EZ))return 1;return 0;}return S2(b,0,Sy(a.gt))<=0?0:1;}
function AGQ(){CI.call(this);this.BP=0;}
function A8_(a){var b=new AGQ();A7U(b,a);return b;}
function A7U(a,b){EN(a);a.BP=EV(FC(b));}
function A2U(a,b,c){return a.BP!=EV(FC(Y(c,b)))?(-1):1;}
function XL(){var a=this;CI.call(a);a.Bp=0;a.Cc=0;}
function A4x(a){var b=new XL();A0d(b,a);return b;}
function A0d(a,b){EN(a);a.Bp=b;a.Cc=Kc(b);}
function AS8(a,b,c){return a.Bp!=Y(c,b)&&a.Cc!=Y(c,b)?(-1):1;}
function GH(){var a=this;CE.call(a);a.pU=0;a.uj=null;a.tM=null;a.tK=0;}
function BcZ(a,b){var c=new GH();Pa(c,a,b);return c;}
function Pa(a,b,c){Cz(a);a.pU=1;a.tM=b;a.tK=c;}
function A_g(a,b){a.s=b;}
function AZa(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.bz;if(b>=f)return (-1);g=LG(a,b,c,f);h=b+a.pU|0;i=AQQ(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Di(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LG(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=AQQ(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.pU|0;if(h>=f){b=k;break a;}g=LG(a,h,c,f);b=k;}}}if(b!=a.tK)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.s.l(h,c,d);if(i[g]!=a.tM.data[g])break;g=g+1|0;}return (-1);}
function Sq(a){var b,c;if(a.uj===null){b=new T;V(b);c=0;while(c<a.tK){Hh(b,Iu(a.tM.data[c]));c=c+1|0;}a.uj=U(b);}return a.uj;}
function LG(a,b,c,d){var e,f,g;a.pU=1;if(b>=(d-1|0))e=Y(c,b);else{d=b+1|0;e=Y(c,b);f=Y(c,d);if(J4(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Dt(g[0])&&DR(g[1])?EJ(g[0],g[1]):g[0];a.pU=2;}}return e;}
function AXw(a,b){return b instanceof GH&&!DA(Sq(b),Sq(a))?0:1;}
function A87(a,b){return 1;}
function SE(){GH.call(this);}
function VZ(){GH.call(this);}
function SZ(){DW.call(this);}
function A4O(a,b,c,d){var e;while(true){e=a.bR.l(b,c,d);if(e<=0)break;b=e;}return a.s.l(b,c,d);}
function Uu(){DW.call(this);}
function A7N(a,b,c,d){var e;e=a.bR.l(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bR.l(e,c,d);if(b<=e)break;e=b;}b=e;}return a.s.l(b,c,d);}
function Ht(){DW.call(this);}
function A9X(a,b,c,d){var e;if(!a.bR.b4(d))return a.s.l(b,c,d);e=a.bR.l(b,c,d);if(e>=0)return e;return a.s.l(b,c,d);}
function A$Q(a,b){a.s=b;a.bR.ca(b);}
function PJ(){Ht.call(this);}
function AXf(a,b,c,d){var e;e=a.bR.l(b,c,d);if(e<=0)e=b;return a.s.l(e,c,d);}
function A8a(a,b){a.s=b;}
function G6(){var a=this;DW.call(a);a.kB=null;a.ht=0;}
function Bmi(a,b,c,d,e){var f=new G6();ML(f,a,b,c,d,e);return f;}
function ML(a,b,c,d,e,f){Ef(a,c,d,e);a.kB=b;a.ht=f;}
function A_I(a,b,c,d){var e,f;e=Tc(d,a.ht);if(!a.bR.b4(d))return a.s.l(b,c,d);if(e>=a.kB.ip)return a.s.l(b,c,d);f=a.ht;e=e+1|0;FE(d,f,e);f=a.bR.l(b,c,d);if(f>=0){FE(d,a.ht,0);return f;}f=a.ht;e=e+(-1)|0;FE(d,f,e);if(e>=a.kB.jd)return a.s.l(b,c,d);FE(d,a.ht,0);return (-1);}
function OQ(){G6.call(this);}
function AWS(a,b,c,d){var e,f,g;e=0;f=a.kB.ip;a:{while(true){g=a.bR.l(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.kB.jd)return (-1);return a.s.l(b,c,d);}
function Qr(){DW.call(this);}
function A1$(a,b,c,d){var e;if(!a.bR.b4(d))return a.s.l(b,c,d);e=a.s.l(b,c,d);if(e>=0)return e;return a.bR.l(b,c,d);}
function UN(){Ht.call(this);}
function AUf(a,b,c,d){var e;if(!a.bR.b4(d))return a.s.l(b,c,d);e=a.s.l(b,c,d);if(e<0)e=a.bR.l(b,c,d);return e;}
function RL(){G6.call(this);}
function A3C(a,b,c,d){var e,f;e=Tc(d,a.ht);if(!a.bR.b4(d))return a.s.l(b,c,d);if(e>=a.kB.ip){FE(d,a.ht,0);return a.s.l(b,c,d);}if(e<a.kB.jd){FE(d,a.ht,e+1|0);f=a.bR.l(b,c,d);}else{f=a.s.l(b,c,d);if(f>=0){FE(d,a.ht,0);return f;}FE(d,a.ht,e+1|0);f=a.bR.l(b,c,d);}return f;}
function Qs(){E5.call(this);}
function A_A(a,b,c,d){var e;e=d.bz;if(e>b)return a.s.eU(b,e,c,d);return a.s.l(b,c,d);}
function A0L(a,b,c,d){var e;e=d.bz;if(a.s.eU(b,e,c,d)>=0)return b;return (-1);}
function TP(){E5.call(this);this.us=null;}
function AZn(a,b,c,d){var e,f;e=d.bz;f=Wj(a,b,e,c);if(f>=0)e=f;if(e>b)return a.s.eU(b,e,c,d);return a.s.l(b,c,d);}
function ASU(a,b,c,d){var e,f,g,h;e=d.bz;f=a.s.eH(b,c,d);if(f<0)return (-1);g=Wj(a,f,e,c);if(g>=0)e=g;g=a.s.eU(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.us.ot(Y(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function Wj(a,b,c,d){while(true){if(b>=c)return (-1);if(a.us.ot(Y(d,b)))break;b=b+1|0;}return b;}
function Gi(){D.call(this);}
var Bmj=null;var Bmk=null;function Uh(b){if(!(b&1)){if(Bmk!==null)return Bmk;Bmk=new Wt;return Bmk;}if(Bmj!==null)return Bmj;Bmj=new Ws;return Bmj;}
function Xr(){D7.call(this);}
function ATs(a,b,c,d){var e;a:{while(true){if((b+a.cM.d_()|0)>d.bz)break a;e=a.cM.dm(b,c);if(e<1)break;b=b+e|0;}}return a.s.l(b,c,d);}
function Si(){FT.call(this);}
function AYy(a,b,c,d){var e;if((b+a.cM.d_()|0)<=d.bz){e=a.cM.dm(b,c);if(e>=1)b=b+e|0;}return a.s.l(b,c,d);}
function Ua(){GA.call(this);}
function A9E(a,b,c,d){var e,f,g,h,i;e=a.kV.jd;f=a.kV.ip;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.cM.d_()|0)>d.bz)break a;h=a.cM.dm(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.s.l(b,c,d);}if((b+a.cM.d_()|0)>d.bz){d.hn=1;return (-1);}i=a.cM.dm(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function UL(){D7.call(this);}
function AZg(a,b,c,d){var e;while(true){e=a.s.l(b,c,d);if(e>=0)break;if((b+a.cM.d_()|0)<=d.bz){e=a.cM.dm(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function V1(){FT.call(this);}
function ATw(a,b,c,d){var e;e=a.s.l(b,c,d);if(e>=0)return e;return a.bR.l(b,c,d);}
function Qc(){GA.call(this);}
function A9N(a,b,c,d){var e,f,g,h,i;e=a.kV.jd;f=a.kV.ip;g=0;while(true){if(g>=e){a:{while(true){h=a.s.l(b,c,d);if(h>=0)break;if((b+a.cM.d_()|0)<=d.bz){h=a.cM.dm(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.cM.d_()|0)>d.bz){d.hn=1;return (-1);}i=a.cM.dm(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function ABI(){Co.call(this);}
function A1d(){var a=new ABI();AVg(a);return a;}
function AVg(a){Cz(a);}
function A7d(a,b,c,d){if(b&&!(d.li&&b==d.ff))return (-1);return a.s.l(b,c,d);}
function A6G(a,b){return 0;}
function AAk(){Co.call(this);this.Bc=0;}
function A$i(a){var b=new AAk();AXa(b,a);return b;}
function AXa(a,b){Cz(a);a.Bc=b;}
function A3$(a,b,c,d){var e,f,g;e=b<d.bz?Y(c,b):32;f=!b?32:Y(c,b-1|0);g=d.oc?0:d.ff;return (e!=32&&!UR(a,e,b,g,c)?0:1)^(f!=32&&!UR(a,f,b-1|0,g,c)?0:1)^a.Bc?(-1):a.s.l(b,c,d);}
function A4e(a,b){return 0;}
function UR(a,b,c,d,e){var f;if(!Lc(b)&&b!=95){a:{if(Do(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Y(e,c);if(Lc(f))return 0;if(Do(f)!=6)return 1;}}return 1;}return 0;}
function AJp(){Co.call(this);}
function Bak(){var a=new AJp();A0F(a);return a;}
function A0F(a){Cz(a);}
function AW_(a,b,c,d){if(b!=d.kX)return (-1);return a.s.l(b,c,d);}
function A2v(a,b){return 0;}
function SB(){Co.call(this);this.l9=0;}
function Ba6(a){var b=new SB();AQx(b,a);return b;}
function AQx(a,b){Cz(a);a.l9=b;}
function A8Y(a,b,c,d){var e,f,g;e=!d.li?Bh(c):d.bz;if(b>=e){Cv(d,a.l9,0);return a.s.l(b,c,d);}f=e-b|0;if(f==2&&Y(c,b)==13&&Y(c,b+1|0)==10){Cv(d,a.l9,0);return a.s.l(b,c,d);}a:{if(f==1){g=Y(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Cv(d,a.l9,0);return a.s.l(b,c,d);}
function A4G(a,b){var c;c=!Ep(b,a.l9)?0:1;Cv(b,a.l9,(-1));return c;}
function AQ5(){Co.call(this);}
function Bbc(){var a=new AQ5();AW1(a);return a;}
function AW1(a){Cz(a);}
function A8s(a,b,c,d){if(b<(d.oc?Bh(c):d.bz))return (-1);d.hn=1;d.Jf=1;return a.s.l(b,c,d);}
function A2T(a,b){return 0;}
function AIO(){Co.call(this);this.DI=null;}
function BcI(a){var b=new AIO();A80(b,a);return b;}
function A80(a,b){Cz(a);a.DI=b;}
function A4A(a,b,c,d){a:{if(b!=d.bz){if(!b)break a;if(d.li&&b==d.ff)break a;if(a.DI.D9(Y(c,b-1|0),Y(c,b)))break a;}return (-1);}return a.s.l(b,c,d);}
function AWj(a,b){return 0;}
function AGg(){CE.call(this);}
function Bbm(){var a=new AGg();A8i(a);return a;}
function A8i(a){Cz(a);}
function A2d(a,b,c,d){var e,f,g,h;e=d.bz;f=b+1|0;if(f>e){d.hn=1;return (-1);}g=Y(c,b);if(Dt(g)){h=b+2|0;if(h<=e&&J4(g,Y(c,f)))return a.s.l(h,c,d);}return a.s.l(f,c,d);}
function A4j(a,b){a.s=b;}
function A8f(a){return (-2147483602);}
function A4h(a,b){return 1;}
function ZF(){CE.call(this);this.uR=null;}
function BaY(a){var b=new ZF();AUN(b,a);return b;}
function AUN(a,b){Cz(a);a.uR=b;}
function A8n(a,b,c,d){var e,f,g,h;e=d.bz;f=b+1|0;if(f>e){d.hn=1;return (-1);}g=Y(c,b);if(Dt(g)){b=b+2|0;if(b<=e){h=Y(c,f);if(J4(g,h))return a.uR.ot(EJ(g,h))?(-1):a.s.l(b,c,d);}}return a.uR.ot(g)?(-1):a.s.l(f,c,d);}
function A9u(a,b){a.s=b;}
function ASF(a){return (-2147483602);}
function A2k(a,b){return 1;}
function AQI(){Co.call(this);this.pK=0;}
function BaJ(a){var b=new AQI();A5U(b,a);return b;}
function A5U(a,b){Cz(a);a.pK=b;}
function AXD(a,b,c,d){var e;e=!d.li?Bh(c):d.bz;if(b>=e){Cv(d,a.pK,0);return a.s.l(b,c,d);}if((e-b|0)==1&&Y(c,b)==10){Cv(d,a.pK,1);return a.s.l(b+1|0,c,d);}return (-1);}
function A5Q(a,b){var c;c=!Ep(b,a.pK)?0:1;Cv(b,a.pK,(-1));return c;}
function AN5(){Co.call(this);this.ok=0;}
function Bas(a){var b=new AN5();A6c(b,a);return b;}
function A6c(a,b){Cz(a);a.ok=b;}
function AY4(a,b,c,d){if((!d.li?Bh(c)-b|0:d.bz-b|0)<=0){Cv(d,a.ok,0);return a.s.l(b,c,d);}if(Y(c,b)!=10)return (-1);Cv(d,a.ok,1);return a.s.l(b+1|0,c,d);}
function A5M(a,b){var c;c=!Ep(b,a.ok)?0:1;Cv(b,a.ok,(-1));return c;}
function AIa(){Co.call(this);this.lD=0;}
function A_0(a){var b=new AIa();A_K(b,a);return b;}
function A_K(a,b){Cz(a);a.lD=b;}
function A6B(a,b,c,d){var e,f,g;e=!d.li?Bh(c)-b|0:d.ff-b|0;if(!e){Cv(d,a.lD,0);return a.s.l(b,c,d);}if(e<2){f=Y(c,b);g=97;}else{f=Y(c,b);g=Y(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Cv(d,a.lD,0);return a.s.l(b,c,d);case 13:if(g!=10){Cv(d,a.lD,0);return a.s.l(b,c,d);}Cv(d,a.lD,0);return a.s.l(b,c,d);default:}return (-1);}
function AUR(a,b){var c;c=!Ep(b,a.lD)?0:1;Cv(b,a.lD,(-1));return c;}
function IN(){var a=this;CE.call(a);a.y2=0;a.mE=0;}
function BcV(a,b){var c=new IN();Py(c,a,b);return c;}
function Py(a,b,c){Cz(a);a.y2=b;a.mE=c;}
function ATt(a,b,c,d){var e,f,g,h;e=HE(a,d);if(e!==null&&(b+Bh(e)|0)<=d.bz){f=0;while(true){if(f>=Bh(e)){Cv(d,a.mE,Bh(e));return a.s.l(b+Bh(e)|0,c,d);}g=Y(e,f);h=b+f|0;if(g!=Y(c,h)&&Kc(Y(e,f))!=Y(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A83(a,b){a.s=b;}
function HE(a,b){return AM4(b,a.y2);}
function AZ_(a,b){var c;c=!Ep(b,a.mE)?0:1;Cv(b,a.mE,(-1));return c;}
function AQT(){IN.call(this);}
function BbB(a,b){var c=new AQT();A$J(c,a,b);return c;}
function A$J(a,b,c){Py(a,b,c);}
function AUY(a,b,c,d){var e,f;e=HE(a,d);if(e!==null&&(b+Bh(e)|0)<=d.bz){f=!V9(c,e,b)?(-1):Bh(e);if(f<0)return (-1);Cv(d,a.mE,f);return a.s.l(b+f|0,c,d);}return (-1);}
function A1l(a,b,c,d){var e,f,g;e=HE(a,d);f=d.ff;if(e!==null&&(b+Bh(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=AKG(g,e,b);if(b<0)return (-1);if(a.s.l(b+Bh(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ATl(a,b,c,d,e){var f,g,h;f=HE(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=AAu(g,f,c);if(h<0)break a;if(h<b)break a;if(a.s.l(h+Bh(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A7H(a,b){return 1;}
function AMc(){IN.call(this);}
function Bar(a,b){var c=new AMc();AWd(c,a,b);return c;}
function AWd(a,b,c){Py(a,b,c);}
function AX6(a,b,c,d){var e,f;e=HE(a,d);if(e!==null&&(b+Bh(e)|0)<=d.bz){f=0;while(true){if(f>=Bh(e)){Cv(d,a.mE,Bh(e));return a.s.l(b+Bh(e)|0,c,d);}if(EV(FC(Y(e,f)))!=EV(FC(Y(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AMQ(){var a=this;CI.call(a);a.e2=null;a.w2=null;a.u3=null;}
function Bau(a){var b=new AMQ();A4Z(b,a);return b;}
function A4Z(a,b){var c;EN(a);a.e2=U(b);a.dk=Ot(b);a.w2=A8e(a.dk);a.u3=A8e(a.dk);c=0;while(c<(a.dk-1|0)){Qe(a.w2,Y(a.e2,c),(a.dk-c|0)-1|0);Qe(a.u3,Y(a.e2,(a.dk-c|0)-1|0),(a.dk-c|0)-1|0);c=c+1|0;}}
function AVc(a,b,c){return !LD(a,c,b)?(-1):a.dk;}
function A39(a,b,c,d){var e,f;e=d.bz;while(true){if(b>e)return (-1);f=AQ8(a,c,b,e);if(f<0)return (-1);if(a.s.l(f+a.dk|0,c,d)>=0)break;b=f+1|0;}return f;}
function A5X(a,b,c,d,e){while(true){if(c<b)return (-1);c=AQv(a,d,b,c);if(c<0)return (-1);if(a.s.l(c+a.dk|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWL(a,b){var c;if(b instanceof Ft)return b.gt!=Y(a.e2,0)?0:1;if(b instanceof Fn)return S2(b,0,Ev(a.e2,0,1))<=0?0:1;if(!(b instanceof EP)){if(!(b instanceof EZ))return 1;return Bh(a.e2)>1&&b.kx==EJ(Y(a.e2,0),Y(a.e2,1))?1:0;}a:{b:{b=b;if(!b.Y(Y(a.e2,0))){if(Bh(a.e2)<=1)break b;if(!b.Y(EJ(Y(a.e2,0),Y(a.e2,1))))break b;}c=1;break a;}c=0;}return c;}
function AQ8(a,b,c,d){var e,f;e=Y(a.e2,a.dk-1|0);while(true){if(c>(d-a.dk|0))return (-1);f=Y(b,(c+a.dk|0)-1|0);if(f==e&&LD(a,b,c))break;c=c+Vz(a.w2,f)|0;}return c;}
function AQv(a,b,c,d){var e,f,g;e=Y(a.e2,0);f=(Bh(b)-d|0)-a.dk|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=Y(b,d);if(g==e&&LD(a,b,d))break;d=d-Vz(a.u3,g)|0;}return d;}
function LD(a,b,c){var d;d=0;while(d<a.dk){if(Y(b,d+c|0)!=Y(a.e2,d))return 0;d=d+1|0;}return 1;}
function XC(){CI.call(this);this.sJ=null;}
function BcW(a){var b=new XC();A$l(b,a);return b;}
function A$l(a,b){var c,d;EN(a);c=new T;V(c);d=0;while(d<Ot(b)){Dx(c,EV(FC(AIc(b,d))));d=d+1|0;}a.sJ=U(c);a.dk=J$(c);}
function AX9(a,b,c){var d;d=0;while(true){if(d>=Bh(a.sJ))return Bh(a.sJ);if(Y(a.sJ,d)!=EV(FC(Y(c,b+d|0))))break;d=d+1|0;}return (-1);}
function OT(){CI.call(this);this.pI=null;}
function A9G(a,b,c){var d,e,f;d=0;while(true){if(d>=Bh(a.pI))return Bh(a.pI);e=Y(a.pI,d);f=b+d|0;if(e!=Y(c,f)&&Kc(Y(a.pI,d))!=Y(c,f))break;d=d+1|0;}return (-1);}
function H6(){D.call(this);}
var Bml=null;var Bmm=null;var Bmn=null;function Bmo(){var a=new H6();AF7(a);return a;}
function AF7(a){return;}
function ARr(a,b){var c,d,e;c=0;while(true){if(c>=Bmn.data.length){d=new MN;Bl(d,B(3));d.G6=B(3);d.Jp=b;M(d);}e=Bmn.data[c].data;if(DA(b,e[0]))break;c=c+1|0;}return e[1];}
function AAm(){var b,c,d,e;Bml=Ba_();Bmm=Bcb();b=J($rt_arraycls(D),194);c=b.data;d=J(D,2);e=d.data;e[0]=B(637);e[1]=Bbp();c[0]=d;d=J(D,2);e=d.data;e[0]=B(638);e[1]=A_W();c[1]=d;d=J(D,2);e=d.data;e[0]=B(639);e[1]=BcG();c[2]=d;d=J(D,2);e=d.data;e[0]=B(640);e[1]=BcO();c[3]=d;d=J(D,2);e=d.data;e[0]=B(641);e[1]=Bmm;c[4]=d;d=J(D,2);e=d.data;e[0]=B(642);e[1]=Bch();c[5]=d;d=J(D,2);e=d.data;e[0]=B(643);e[1]=Bax();c[6]=d;d=J(D,2);e=d.data;e[0]=B(644);e[1]=BbD();c[7]=d;d=J(D,2);e=d.data;e[0]=B(645);e[1]=BbA();c[8]=d;d
=J(D,2);e=d.data;e[0]=B(646);e[1]=A_$();c[9]=d;d=J(D,2);e=d.data;e[0]=B(647);e[1]=Bam();c[10]=d;d=J(D,2);e=d.data;e[0]=B(648);e[1]=BbF();c[11]=d;d=J(D,2);e=d.data;e[0]=B(649);e[1]=BaT();c[12]=d;d=J(D,2);e=d.data;e[0]=B(650);e[1]=A_U();c[13]=d;d=J(D,2);e=d.data;e[0]=B(651);e[1]=BcK();c[14]=d;d=J(D,2);e=d.data;e[0]=B(652);e[1]=Bal();c[15]=d;d=J(D,2);e=d.data;e[0]=B(653);e[1]=Bcf();c[16]=d;d=J(D,2);e=d.data;e[0]=B(654);e[1]=BbV();c[17]=d;d=J(D,2);e=d.data;e[0]=B(655);e[1]=Bcg();c[18]=d;d=J(D,2);e=d.data;e[0]=B(656);e[1]
=Bab();c[19]=d;d=J(D,2);e=d.data;e[0]=B(657);e[1]=BcP();c[20]=d;d=J(D,2);e=d.data;e[0]=B(658);e[1]=BbR();c[21]=d;d=J(D,2);e=d.data;e[0]=B(659);e[1]=BaL();c[22]=d;d=J(D,2);e=d.data;e[0]=B(660);e[1]=BcF();c[23]=d;d=J(D,2);e=d.data;e[0]=B(661);e[1]=BcC();c[24]=d;d=J(D,2);e=d.data;e[0]=B(662);e[1]=Bbl();c[25]=d;d=J(D,2);e=d.data;e[0]=B(663);e[1]=Baa();c[26]=d;d=J(D,2);e=d.data;e[0]=B(664);e[1]=Bcv();c[27]=d;d=J(D,2);e=d.data;e[0]=B(665);e[1]=Bml;c[28]=d;d=J(D,2);e=d.data;e[0]=B(666);e[1]=BaN();c[29]=d;d=J(D,2);e
=d.data;e[0]=B(44);e[1]=BbE();c[30]=d;d=J(D,2);e=d.data;e[0]=B(667);e[1]=Bml;c[31]=d;d=J(D,2);e=d.data;e[0]=B(58);e[1]=A_T();c[32]=d;d=J(D,2);e=d.data;e[0]=B(668);e[1]=Bmm;c[33]=d;d=J(D,2);e=d.data;e[0]=B(59);e[1]=Baq();c[34]=d;d=J(D,2);e=d.data;e[0]=B(669);e[1]=W(0,127);c[35]=d;d=J(D,2);e=d.data;e[0]=B(670);e[1]=W(128,255);c[36]=d;d=J(D,2);e=d.data;e[0]=B(671);e[1]=W(256,383);c[37]=d;d=J(D,2);e=d.data;e[0]=B(672);e[1]=W(384,591);c[38]=d;d=J(D,2);e=d.data;e[0]=B(673);e[1]=W(592,687);c[39]=d;d=J(D,2);e=d.data;e[0]
=B(674);e[1]=W(688,767);c[40]=d;d=J(D,2);e=d.data;e[0]=B(675);e[1]=W(768,879);c[41]=d;d=J(D,2);e=d.data;e[0]=B(676);e[1]=W(880,1023);c[42]=d;d=J(D,2);e=d.data;e[0]=B(677);e[1]=W(1024,1279);c[43]=d;d=J(D,2);e=d.data;e[0]=B(678);e[1]=W(1280,1327);c[44]=d;d=J(D,2);e=d.data;e[0]=B(679);e[1]=W(1328,1423);c[45]=d;d=J(D,2);e=d.data;e[0]=B(680);e[1]=W(1424,1535);c[46]=d;d=J(D,2);e=d.data;e[0]=B(681);e[1]=W(1536,1791);c[47]=d;d=J(D,2);e=d.data;e[0]=B(682);e[1]=W(1792,1871);c[48]=d;d=J(D,2);e=d.data;e[0]=B(683);e[1]=
W(1872,1919);c[49]=d;d=J(D,2);e=d.data;e[0]=B(684);e[1]=W(1920,1983);c[50]=d;d=J(D,2);e=d.data;e[0]=B(685);e[1]=W(2304,2431);c[51]=d;d=J(D,2);e=d.data;e[0]=B(686);e[1]=W(2432,2559);c[52]=d;d=J(D,2);e=d.data;e[0]=B(687);e[1]=W(2560,2687);c[53]=d;d=J(D,2);e=d.data;e[0]=B(688);e[1]=W(2688,2815);c[54]=d;d=J(D,2);e=d.data;e[0]=B(689);e[1]=W(2816,2943);c[55]=d;d=J(D,2);e=d.data;e[0]=B(690);e[1]=W(2944,3071);c[56]=d;d=J(D,2);e=d.data;e[0]=B(691);e[1]=W(3072,3199);c[57]=d;d=J(D,2);e=d.data;e[0]=B(692);e[1]=W(3200,3327);c[58]
=d;d=J(D,2);e=d.data;e[0]=B(693);e[1]=W(3328,3455);c[59]=d;d=J(D,2);e=d.data;e[0]=B(694);e[1]=W(3456,3583);c[60]=d;d=J(D,2);e=d.data;e[0]=B(695);e[1]=W(3584,3711);c[61]=d;d=J(D,2);e=d.data;e[0]=B(696);e[1]=W(3712,3839);c[62]=d;d=J(D,2);e=d.data;e[0]=B(697);e[1]=W(3840,4095);c[63]=d;d=J(D,2);e=d.data;e[0]=B(698);e[1]=W(4096,4255);c[64]=d;d=J(D,2);e=d.data;e[0]=B(699);e[1]=W(4256,4351);c[65]=d;d=J(D,2);e=d.data;e[0]=B(700);e[1]=W(4352,4607);c[66]=d;d=J(D,2);e=d.data;e[0]=B(701);e[1]=W(4608,4991);c[67]=d;d=J(D,
2);e=d.data;e[0]=B(702);e[1]=W(4992,5023);c[68]=d;d=J(D,2);e=d.data;e[0]=B(703);e[1]=W(5024,5119);c[69]=d;d=J(D,2);e=d.data;e[0]=B(704);e[1]=W(5120,5759);c[70]=d;d=J(D,2);e=d.data;e[0]=B(705);e[1]=W(5760,5791);c[71]=d;d=J(D,2);e=d.data;e[0]=B(706);e[1]=W(5792,5887);c[72]=d;d=J(D,2);e=d.data;e[0]=B(707);e[1]=W(5888,5919);c[73]=d;d=J(D,2);e=d.data;e[0]=B(708);e[1]=W(5920,5951);c[74]=d;d=J(D,2);e=d.data;e[0]=B(709);e[1]=W(5952,5983);c[75]=d;d=J(D,2);e=d.data;e[0]=B(710);e[1]=W(5984,6015);c[76]=d;d=J(D,2);e=d.data;e[0]
=B(711);e[1]=W(6016,6143);c[77]=d;d=J(D,2);e=d.data;e[0]=B(712);e[1]=W(6144,6319);c[78]=d;d=J(D,2);e=d.data;e[0]=B(713);e[1]=W(6400,6479);c[79]=d;d=J(D,2);e=d.data;e[0]=B(714);e[1]=W(6480,6527);c[80]=d;d=J(D,2);e=d.data;e[0]=B(715);e[1]=W(6528,6623);c[81]=d;d=J(D,2);e=d.data;e[0]=B(716);e[1]=W(6624,6655);c[82]=d;d=J(D,2);e=d.data;e[0]=B(717);e[1]=W(6656,6687);c[83]=d;d=J(D,2);e=d.data;e[0]=B(718);e[1]=W(7424,7551);c[84]=d;d=J(D,2);e=d.data;e[0]=B(719);e[1]=W(7552,7615);c[85]=d;d=J(D,2);e=d.data;e[0]=B(720);e[1]
=W(7616,7679);c[86]=d;d=J(D,2);e=d.data;e[0]=B(721);e[1]=W(7680,7935);c[87]=d;d=J(D,2);e=d.data;e[0]=B(722);e[1]=W(7936,8191);c[88]=d;d=J(D,2);e=d.data;e[0]=B(723);e[1]=W(8192,8303);c[89]=d;d=J(D,2);e=d.data;e[0]=B(724);e[1]=W(8304,8351);c[90]=d;d=J(D,2);e=d.data;e[0]=B(725);e[1]=W(8352,8399);c[91]=d;d=J(D,2);e=d.data;e[0]=B(726);e[1]=W(8400,8447);c[92]=d;d=J(D,2);e=d.data;e[0]=B(727);e[1]=W(8448,8527);c[93]=d;d=J(D,2);e=d.data;e[0]=B(728);e[1]=W(8528,8591);c[94]=d;d=J(D,2);e=d.data;e[0]=B(729);e[1]=W(8592,
8703);c[95]=d;d=J(D,2);e=d.data;e[0]=B(730);e[1]=W(8704,8959);c[96]=d;d=J(D,2);e=d.data;e[0]=B(731);e[1]=W(8960,9215);c[97]=d;d=J(D,2);e=d.data;e[0]=B(732);e[1]=W(9216,9279);c[98]=d;d=J(D,2);e=d.data;e[0]=B(733);e[1]=W(9280,9311);c[99]=d;d=J(D,2);e=d.data;e[0]=B(734);e[1]=W(9312,9471);c[100]=d;d=J(D,2);e=d.data;e[0]=B(735);e[1]=W(9472,9599);c[101]=d;d=J(D,2);e=d.data;e[0]=B(736);e[1]=W(9600,9631);c[102]=d;d=J(D,2);e=d.data;e[0]=B(737);e[1]=W(9632,9727);c[103]=d;d=J(D,2);e=d.data;e[0]=B(738);e[1]=W(9728,9983);c[104]
=d;d=J(D,2);e=d.data;e[0]=B(739);e[1]=W(9984,10175);c[105]=d;d=J(D,2);e=d.data;e[0]=B(740);e[1]=W(10176,10223);c[106]=d;d=J(D,2);e=d.data;e[0]=B(741);e[1]=W(10224,10239);c[107]=d;d=J(D,2);e=d.data;e[0]=B(742);e[1]=W(10240,10495);c[108]=d;d=J(D,2);e=d.data;e[0]=B(743);e[1]=W(10496,10623);c[109]=d;d=J(D,2);e=d.data;e[0]=B(744);e[1]=W(10624,10751);c[110]=d;d=J(D,2);e=d.data;e[0]=B(745);e[1]=W(10752,11007);c[111]=d;d=J(D,2);e=d.data;e[0]=B(746);e[1]=W(11008,11263);c[112]=d;d=J(D,2);e=d.data;e[0]=B(747);e[1]=W(11264,
11359);c[113]=d;d=J(D,2);e=d.data;e[0]=B(748);e[1]=W(11392,11519);c[114]=d;d=J(D,2);e=d.data;e[0]=B(749);e[1]=W(11520,11567);c[115]=d;d=J(D,2);e=d.data;e[0]=B(750);e[1]=W(11568,11647);c[116]=d;d=J(D,2);e=d.data;e[0]=B(751);e[1]=W(11648,11743);c[117]=d;d=J(D,2);e=d.data;e[0]=B(752);e[1]=W(11776,11903);c[118]=d;d=J(D,2);e=d.data;e[0]=B(753);e[1]=W(11904,12031);c[119]=d;d=J(D,2);e=d.data;e[0]=B(754);e[1]=W(12032,12255);c[120]=d;d=J(D,2);e=d.data;e[0]=B(755);e[1]=W(12272,12287);c[121]=d;d=J(D,2);e=d.data;e[0]=B(756);e[1]
=W(12288,12351);c[122]=d;d=J(D,2);e=d.data;e[0]=B(757);e[1]=W(12352,12447);c[123]=d;d=J(D,2);e=d.data;e[0]=B(758);e[1]=W(12448,12543);c[124]=d;d=J(D,2);e=d.data;e[0]=B(759);e[1]=W(12544,12591);c[125]=d;d=J(D,2);e=d.data;e[0]=B(760);e[1]=W(12592,12687);c[126]=d;d=J(D,2);e=d.data;e[0]=B(761);e[1]=W(12688,12703);c[127]=d;d=J(D,2);e=d.data;e[0]=B(762);e[1]=W(12704,12735);c[128]=d;d=J(D,2);e=d.data;e[0]=B(763);e[1]=W(12736,12783);c[129]=d;d=J(D,2);e=d.data;e[0]=B(764);e[1]=W(12784,12799);c[130]=d;d=J(D,2);e=d.data;e[0]
=B(765);e[1]=W(12800,13055);c[131]=d;d=J(D,2);e=d.data;e[0]=B(766);e[1]=W(13056,13311);c[132]=d;d=J(D,2);e=d.data;e[0]=B(767);e[1]=W(13312,19893);c[133]=d;d=J(D,2);e=d.data;e[0]=B(768);e[1]=W(19904,19967);c[134]=d;d=J(D,2);e=d.data;e[0]=B(769);e[1]=W(19968,40959);c[135]=d;d=J(D,2);e=d.data;e[0]=B(770);e[1]=W(40960,42127);c[136]=d;d=J(D,2);e=d.data;e[0]=B(771);e[1]=W(42128,42191);c[137]=d;d=J(D,2);e=d.data;e[0]=B(772);e[1]=W(42752,42783);c[138]=d;d=J(D,2);e=d.data;e[0]=B(773);e[1]=W(43008,43055);c[139]=d;d=J(D,
2);e=d.data;e[0]=B(774);e[1]=W(44032,55203);c[140]=d;d=J(D,2);e=d.data;e[0]=B(775);e[1]=W(55296,56191);c[141]=d;d=J(D,2);e=d.data;e[0]=B(776);e[1]=W(56192,56319);c[142]=d;d=J(D,2);e=d.data;e[0]=B(777);e[1]=W(56320,57343);c[143]=d;d=J(D,2);e=d.data;e[0]=B(778);e[1]=W(57344,63743);c[144]=d;d=J(D,2);e=d.data;e[0]=B(779);e[1]=W(63744,64255);c[145]=d;d=J(D,2);e=d.data;e[0]=B(780);e[1]=W(64256,64335);c[146]=d;d=J(D,2);e=d.data;e[0]=B(781);e[1]=W(64336,65023);c[147]=d;d=J(D,2);e=d.data;e[0]=B(782);e[1]=W(65024,65039);c[148]
=d;d=J(D,2);e=d.data;e[0]=B(783);e[1]=W(65040,65055);c[149]=d;d=J(D,2);e=d.data;e[0]=B(784);e[1]=W(65056,65071);c[150]=d;d=J(D,2);e=d.data;e[0]=B(785);e[1]=W(65072,65103);c[151]=d;d=J(D,2);e=d.data;e[0]=B(786);e[1]=W(65104,65135);c[152]=d;d=J(D,2);e=d.data;e[0]=B(787);e[1]=W(65136,65279);c[153]=d;d=J(D,2);e=d.data;e[0]=B(788);e[1]=W(65280,65519);c[154]=d;d=J(D,2);e=d.data;e[0]=B(789);e[1]=W(0,1114111);c[155]=d;d=J(D,2);e=d.data;e[0]=B(790);e[1]=BbG();c[156]=d;d=J(D,2);e=d.data;e[0]=B(791);e[1]=CA(0,1);c[157]
=d;d=J(D,2);e=d.data;e[0]=B(792);e[1]=KT(62,1);c[158]=d;d=J(D,2);e=d.data;e[0]=B(793);e[1]=CA(1,1);c[159]=d;d=J(D,2);e=d.data;e[0]=B(794);e[1]=CA(2,1);c[160]=d;d=J(D,2);e=d.data;e[0]=B(795);e[1]=CA(3,0);c[161]=d;d=J(D,2);e=d.data;e[0]=B(796);e[1]=CA(4,0);c[162]=d;d=J(D,2);e=d.data;e[0]=B(797);e[1]=CA(5,1);c[163]=d;d=J(D,2);e=d.data;e[0]=B(798);e[1]=KT(448,1);c[164]=d;d=J(D,2);e=d.data;e[0]=B(799);e[1]=CA(6,1);c[165]=d;d=J(D,2);e=d.data;e[0]=B(800);e[1]=CA(7,0);c[166]=d;d=J(D,2);e=d.data;e[0]=B(801);e[1]=CA(8,
1);c[167]=d;d=J(D,2);e=d.data;e[0]=B(76);e[1]=KT(3584,1);c[168]=d;d=J(D,2);e=d.data;e[0]=B(802);e[1]=CA(9,1);c[169]=d;d=J(D,2);e=d.data;e[0]=B(803);e[1]=CA(10,1);c[170]=d;d=J(D,2);e=d.data;e[0]=B(804);e[1]=CA(11,1);c[171]=d;d=J(D,2);e=d.data;e[0]=B(805);e[1]=KT(28672,0);c[172]=d;d=J(D,2);e=d.data;e[0]=B(806);e[1]=CA(12,0);c[173]=d;d=J(D,2);e=d.data;e[0]=B(807);e[1]=CA(13,0);c[174]=d;d=J(D,2);e=d.data;e[0]=B(808);e[1]=CA(14,0);c[175]=d;d=J(D,2);e=d.data;e[0]=B(809);e[1]=Bb7(983040,1,1);c[176]=d;d=J(D,2);e=d.data;e[0]
=B(810);e[1]=CA(15,0);c[177]=d;d=J(D,2);e=d.data;e[0]=B(811);e[1]=CA(16,1);c[178]=d;d=J(D,2);e=d.data;e[0]=B(812);e[1]=CA(18,1);c[179]=d;d=J(D,2);e=d.data;e[0]=B(813);e[1]=BaG(19,0,1);c[180]=d;d=J(D,2);e=d.data;e[0]=B(814);e[1]=KT(1643118592,1);c[181]=d;d=J(D,2);e=d.data;e[0]=B(815);e[1]=CA(20,0);c[182]=d;d=J(D,2);e=d.data;e[0]=B(816);e[1]=CA(21,0);c[183]=d;d=J(D,2);e=d.data;e[0]=B(817);e[1]=CA(22,0);c[184]=d;d=J(D,2);e=d.data;e[0]=B(818);e[1]=CA(23,0);c[185]=d;d=J(D,2);e=d.data;e[0]=B(819);e[1]=CA(24,1);c[186]
=d;d=J(D,2);e=d.data;e[0]=B(820);e[1]=KT(2113929216,1);c[187]=d;d=J(D,2);e=d.data;e[0]=B(821);e[1]=CA(25,1);c[188]=d;d=J(D,2);e=d.data;e[0]=B(822);e[1]=CA(26,0);c[189]=d;d=J(D,2);e=d.data;e[0]=B(823);e[1]=CA(27,0);c[190]=d;d=J(D,2);e=d.data;e[0]=B(824);e[1]=CA(28,1);c[191]=d;d=J(D,2);e=d.data;e[0]=B(825);e[1]=CA(29,0);c[192]=d;d=J(D,2);e=d.data;e[0]=B(826);e[1]=CA(30,0);c[193]=d;Bmn=b;}
function By(){var a=this;D.call(a);a.vo=null;a.uv=null;}
function APO(a,b){if(!b&&a.vo===null)a.vo=a.bX();else if(b&&a.uv===null)a.uv=Fw(a.bX(),1);if(b)return a.uv;return a.vo;}
function S5(){CI.call(this);this.z6=0;}
function A0t(a,b,c){var d,e;d=b+1|0;e=Y(c,b);d=Y(c,d);return a.z6!=GO(GN(EJ(e,d)))?(-1):2;}
function NG(){CE.call(this);this.mp=0;}
function AYS(a){var b=new NG();AUm(b,a);return b;}
function AUm(a,b){Cz(a);a.mp=b;}
function A8F(a,b){a.s=b;}
function A4H(a,b,c,d){var e,f;e=b+1|0;if(e>d.bz){d.hn=1;return (-1);}f=Y(c,b);if(b>d.ff&&Dt(Y(c,b-1|0)))return (-1);if(a.mp!=f)return (-1);return a.s.l(e,c,d);}
function AWK(a,b,c,d){var e,f,g,h,i;if(!(c instanceof B4))return I_(a,b,c,d);e=c;f=d.ff;g=d.bz;while(true){if(b>=g)return (-1);h=Hg(e,a.mp,b);if(h<0)return (-1);if(h>f&&Dt(Y(e,h-1|0))){b=h+1|0;continue;}i=a.s;b=h+1|0;if(i.l(b,c,d)>=0)break;}return h;}
function A47(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jl(a,b,c,d,e);f=e.ff;g=d;a:{while(true){if(c<b)return (-1);c=If(g,a.mp,c);if(c<0)break a;if(c<b)break a;if(c>f&&Dt(Y(g,c-1|0))){c=c+(-2)|0;continue;}if(a.s.l(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ATg(a,b){if(b instanceof Ft)return 0;if(b instanceof Fn)return 0;if(b instanceof EP)return 0;if(b instanceof EZ)return 0;if(b instanceof NM)return 0;if(!(b instanceof NG))return 1;return b.mp!=a.mp?0:1;}
function A02(a,b){return 1;}
function NM(){CE.call(this);this.lY=0;}
function A6C(a){var b=new NM();AY0(b,a);return b;}
function AY0(a,b){Cz(a);a.lY=b;}
function A4r(a,b){a.s=b;}
function ASW(a,b,c,d){var e,f,g,h;e=d.bz;f=b+1|0;g=R(f,e);if(g>0){d.hn=1;return (-1);}h=Y(c,b);if(g<0&&DR(Y(c,f)))return (-1);if(a.lY!=h)return (-1);return a.s.l(f,c,d);}
function A8Q(a,b,c,d){var e,f,g;if(!(c instanceof B4))return I_(a,b,c,d);e=c;f=d.bz;while(true){if(b>=f)return (-1);g=Hg(e,a.lY,b);if(g<0)return (-1);b=g+1|0;if(b<f&&DR(Y(e,b))){b=g+2|0;continue;}if(a.s.l(b,c,d)>=0)break;}return g;}
function A0r(a,b,c,d,e){var f,g,h;if(!(d instanceof B4))return Jl(a,b,c,d,e);f=d;g=e.bz;a:{while(true){if(c<b)return (-1);c=If(f,a.lY,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&DR(Y(f,h))){c=c+(-1)|0;continue;}if(a.s.l(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AVd(a,b){if(b instanceof Ft)return 0;if(b instanceof Fn)return 0;if(b instanceof EP)return 0;if(b instanceof EZ)return 0;if(b instanceof NG)return 0;if(!(b instanceof NM))return 1;return b.lY!=a.lY?0:1;}
function A8S(a,b){return 1;}
function EZ(){var a=this;CI.call(a);a.tz=0;a.sd=0;a.kx=0;}
function A9l(a,b,c){var d,e;d=b+1|0;e=Y(c,b);d=Y(c,d);return a.tz==e&&a.sd==d?2:(-1);}
function A73(a,b,c,d){var e,f,g;if(!(c instanceof B4))return I_(a,b,c,d);e=c;f=d.bz;while(b<f){b=Hg(e,a.tz,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=Y(e,b);if(a.sd==g&&a.s.l(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AUn(a,b,c,d,e){var f;if(!(d instanceof B4))return Jl(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=If(f,a.sd,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.tz==Y(f,c)&&a.s.l(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function A3b(a){return a.kx;}
function A9c(a,b){if(b instanceof EZ)return b.kx!=a.kx?0:1;if(b instanceof EP)return b.Y(a.kx);if(b instanceof Ft)return 0;if(!(b instanceof Fn))return 1;return 0;}
function Ws(){Gi.call(this);}
function Bmp(){var a=new Ws();A35(a);return a;}
function A35(a){return;}
function AUw(a,b){return b!=10?0:1;}
function AZ8(a,b,c){return b!=10?0:1;}
function Wt(){Gi.call(this);}
function Bmq(){var a=new Wt();AWI(a);return a;}
function AWI(a){return;}
function A9P(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function A1Z(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AEM(){var a=this;D.call(a);a.oV=null;a.tP=null;a.f_=0;a.Bz=0;}
function A8e(a){var b=new AEM();AW$(b,a);return b;}
function AW$(a,b){while(b>=a.f_){a.f_=a.f_<<1|1;}a.f_=a.f_<<1|1;a.oV=$rt_createIntArray(a.f_+1|0);a.tP=$rt_createIntArray(a.f_+1|0);a.Bz=b;}
function Qe(a,b,c){var d,e;d=0;e=b&a.f_;while(a.oV.data[e]&&a.oV.data[e]!=b){d=(d+1|0)&a.f_;e=(e+d|0)&a.f_;}a.oV.data[e]=b;a.tP.data[e]=c;}
function Vz(a,b){var c,d,e;c=b&a.f_;d=0;while(true){e=a.oV.data[c];if(!e)break;if(e==b)return a.tP.data[c];d=(d+1|0)&a.f_;c=(c+d|0)&a.f_;}return a.Bz;}
function Ys(){D.call(this);}
function NE(){By.call(this);}
function Ba_(){var a=new NE();AWT(a);return a;}
function AWT(a){return;}
function AMl(a){return Dp(CG(Eq(),9,13),32);}
function M8(){By.call(this);}
function Bcb(){var a=new M8();A0S(a);return a;}
function A0S(a){return;}
function ANM(a){return CG(Eq(),48,57);}
function AEE(){By.call(this);}
function Bbp(){var a=new AEE();AWq(a);return a;}
function AWq(a){return;}
function A9w(a){return CG(Eq(),97,122);}
function AFi(){By.call(this);}
function A_W(){var a=new AFi();AXc(a);return a;}
function AXc(a){return;}
function A04(a){return CG(Eq(),65,90);}
function AFr(){By.call(this);}
function BcG(){var a=new AFr();ATR(a);return a;}
function ATR(a){return;}
function AVF(a){return CG(Eq(),0,127);}
function NA(){By.call(this);}
function BcO(){var a=new NA();AUZ(a);return a;}
function AUZ(a){return;}
function ZL(a){return CG(CG(Eq(),97,122),65,90);}
function L$(){NA.call(this);}
function Bch(){var a=new L$();AWW(a);return a;}
function AWW(a){return;}
function AAT(a){return CG(ZL(a),48,57);}
function AHQ(){By.call(this);}
function Bax(){var a=new AHQ();A7S(a);return a;}
function A7S(a){return;}
function A6e(a){return CG(CG(CG(Eq(),33,64),91,96),123,126);}
function Ox(){L$.call(this);}
function BbD(){var a=new Ox();AZP(a);return a;}
function AZP(a){return;}
function AH6(a){return CG(CG(CG(AAT(a),33,64),91,96),123,126);}
function AMN(){Ox.call(this);}
function BbA(){var a=new AMN();A0J(a);return a;}
function A0J(a){return;}
function AYv(a){return Dp(AH6(a),32);}
function ACH(){By.call(this);}
function A_$(){var a=new ACH();A9H(a);return a;}
function A9H(a){return;}
function A4Y(a){return Dp(Dp(Eq(),32),9);}
function AAf(){By.call(this);}
function Bam(){var a=new AAf();A$1(a);return a;}
function A$1(a){return;}
function AYm(a){return Dp(CG(Eq(),0,31),127);}
function AJ$(){By.call(this);}
function BbF(){var a=new AJ$();AT5(a);return a;}
function AT5(a){return;}
function A10(a){return CG(CG(CG(Eq(),48,57),97,102),65,70);}
function AQa(){By.call(this);}
function BaT(){var a=new AQa();A3X(a);return a;}
function A3X(a){return;}
function A8d(a){var b;b=new VD;b.Iq=a;B0(b);b.b_=1;return b;}
function AHY(){By.call(this);}
function A_U(){var a=new AHY();AZ5(a);return a;}
function AZ5(a){return;}
function A20(a){var b;b=new S$;b.Iz=a;B0(b);b.b_=1;return b;}
function APn(){By.call(this);}
function BcK(){var a=new APn();ATT(a);return a;}
function ATT(a){return;}
function AWV(a){var b;b=new QG;b.H3=a;B0(b);return b;}
function AEm(){By.call(this);}
function Bal(){var a=new AEm();AYp(a);return a;}
function AYp(a){return;}
function A0b(a){var b;b=new QF;b.FH=a;B0(b);return b;}
function AFX(){By.call(this);}
function Bcf(){var a=new AFX();AUX(a);return a;}
function AUX(a){return;}
function A4W(a){var b;b=new Ss;b.GS=a;B0(b);Jm(b.b9,0,2048);b.b_=1;return b;}
function YV(){By.call(this);}
function BbV(){var a=new YV();AUs(a);return a;}
function AUs(a){return;}
function AVn(a){var b;b=new T7;b.IP=a;B0(b);b.b_=1;return b;}
function AIv(){By.call(this);}
function Bcg(){var a=new AIv();AX7(a);return a;}
function AX7(a){return;}
function A$5(a){var b;b=new Pb;b.G9=a;B0(b);b.b_=1;return b;}
function APC(){By.call(this);}
function Bab(){var a=new APC();AYC(a);return a;}
function AYC(a){return;}
function A2V(a){var b;b=new UZ;b.Ga=a;B0(b);return b;}
function AE7(){By.call(this);}
function BcP(){var a=new AE7();A6q(a);return a;}
function A6q(a){return;}
function AXG(a){var b;b=new S7;b.Fe=a;B0(b);b.b_=1;return b;}
function ALb(){By.call(this);}
function BbR(){var a=new ALb();ATm(a);return a;}
function ATm(a){return;}
function AVt(a){var b;b=new S9;b.Gy=a;B0(b);b.b_=1;return b;}
function ACT(){By.call(this);}
function BaL(){var a=new ACT();AUB(a);return a;}
function AUB(a){return;}
function A5Z(a){var b;b=new O4;b.GQ=a;B0(b);b.b_=1;return b;}
function AG9(){By.call(this);}
function BcF(){var a=new AG9();AXP(a);return a;}
function AXP(a){return;}
function A63(a){var b;b=new Ul;b.Ju=a;B0(b);b.b_=1;return b;}
function APQ(){By.call(this);}
function BcC(){var a=new APQ();A78(a);return a;}
function A78(a){return;}
function A1g(a){var b;b=new Up;b.FV=a;B0(b);return b;}
function ABs(){By.call(this);}
function Bbl(){var a=new ABs();AUv(a);return a;}
function AUv(a){return;}
function AZH(a){var b;b=new VV;b.IZ=a;B0(b);return b;}
function AAF(){By.call(this);}
function Baa(){var a=new AAF();A9p(a);return a;}
function A9p(a){return;}
function AYN(a){var b;b=new Vu;b.Fi=a;B0(b);b.b_=1;return b;}
function AHW(){By.call(this);}
function Bcv(){var a=new AHW();A6k(a);return a;}
function A6k(a){return;}
function A9s(a){var b;b=new OG;b.JM=a;B0(b);b.b_=1;return b;}
function La(){By.call(this);}
function BaN(){var a=new La();AVA(a);return a;}
function AVA(a){return;}
function ACJ(a){return Dp(CG(CG(CG(Eq(),97,122),65,90),48,57),95);}
function AQD(){La.call(this);}
function BbE(){var a=new AQD();A6u(a);return a;}
function A6u(a){return;}
function AYE(a){var b;b=Fw(ACJ(a),1);b.b_=1;return b;}
function AMT(){NE.call(this);}
function A_T(){var a=new AMT();A1z(a);return a;}
function A1z(a){return;}
function A33(a){var b;b=Fw(AMl(a),1);b.b_=1;return b;}
function AAy(){M8.call(this);}
function Baq(){var a=new AAy();A6U(a);return a;}
function A6U(a){return;}
function AWx(a){var b;b=Fw(ANM(a),1);b.b_=1;return b;}
function AKk(){var a=this;By.call(a);a.z4=0;a.DE=0;}
function W(a,b){var c=new AKk();A$4(c,a,b);return c;}
function A$4(a,b,c){a.z4=b;a.DE=c;}
function AXT(a){return CG(Eq(),a.z4,a.DE);}
function AKP(){By.call(this);}
function BbG(){var a=new AKP();A12(a);return a;}
function A12(a){return;}
function A1N(a){return CG(CG(Eq(),65279,65279),65520,65533);}
function AMx(){var a=this;By.call(a);a.x$=0;a.wp=0;a.CN=0;}
function CA(a,b){var c=new AMx();AUQ(c,a,b);return c;}
function BaG(a,b,c){var d=new AMx();A1U(d,a,b,c);return d;}
function AUQ(a,b,c){a.wp=c;a.x$=b;}
function A1U(a,b,c,d){a.CN=d;a.wp=c;a.x$=b;}
function A5J(a){var b;b=Bbn(a.x$);if(a.CN)Jm(b.b9,0,2048);b.b_=a.wp;return b;}
function AMO(){var a=this;By.call(a);a.vD=0;a.tR=0;a.y5=0;}
function KT(a,b){var c=new AMO();AVu(c,a,b);return c;}
function Bb7(a,b,c){var d=new AMO();A2W(d,a,b,c);return d;}
function AVu(a,b,c){a.tR=c;a.vD=b;}
function A2W(a,b,c,d){a.y5=d;a.tR=c;a.vD=b;}
function ASM(a){var b;b=new Vh;ADM(b,a.vD);if(a.y5)Jm(b.b9,0,2048);b.b_=a.tR;return b;}
function AKt(){D.call(this);}
function Bmr(){var a=new AKt();AS4(a);return a;}
function AS4(a){return;}
function Zp(){D.call(this);}
function Bms(){var a=new Zp();A74(a);return a;}
function A74(a){return;}
function Nr(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function A2J(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=J(Tm,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<Bh(b)){k=Nr(Y(b,j));if(k==64){j=j+1|0;k=Nr(Y(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|Bj(m,Nr(Y(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=Nr(Y(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=AVY(i,i+g|0,Oc(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=AVY(i,i+g|0,Oc(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return Nm(c,h);}
function Tm(){var a=this;D.call(a);a.xb=0;a.Ak=0;a.C0=null;}
function AVY(a,b,c){var d=new Tm();A0G(d,a,b,c);return d;}
function A0G(a,b,c,d){a.xb=b;a.Ak=c;a.C0=d;}
function RR(){var a=this;D.call(a);a.Cz=null;a.Do=0;}
function AL7(){D.call(this);}
function Bmt(){var a=new AL7();A$M(a);return a;}
function A$M(a){return;}
function Yi(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.Cz.data;f=b.Do;b.Do=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+Bj(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function Wg(){Ew.call(this);this.sI=null;}
function A3D(a){ED(a.b0,B(262),60,6,4210752);ED(a.b0,B(325),8,(a.fk-96|0)+2|0,4210752);}
function AOi(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(827);$p=1;case 1:$z=AHs(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.I.bo,e);f=(a.bm-a.e9|0)/2|0;g=(a.bE-a.fk|0)/2|0;CH(a,f,g,0,0,a.e9,a.fk);if(WI(a.sI)){h=ADH(a.sI,12);CH(a,f+56|0,((g+36|0)+12|0)-h|0,176,12-h|0,14,h+2|0);}i=AOK(a.sI,24);CH(a,f+79|0,g+34|0,176,14,i+1|0,16);return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,$p);}
function Xg(){var a=this;Ew.call(a);a.mm=null;a.uo=null;}
function Y4(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(C()){break _;}b=0;while(b<9){c=Ge(a.mm,b);if(c!==null){d=a.I.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALQ(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=9)break;c=Ge(a.mm,b);if(c===null)continue;else{d=a.I.f;continue _;}}return;default:E_();}}C3().s(a,b,c,d,$p);}
function A6D(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=e+(f*3|0)|0;h=Ge(a.mm,g);if(h!==null)d[g]=h.bC;else d[g]=(-1);f=f+1|0;}e=e+1|0;}Pf(a.uo,0,RG(Wl(),c));}
function A1X(a){ED(a.b0,B(523),28,6,4210752);ED(a.b0,B(325),8,(a.fk-96|0)+2|0,4210752);}
function AKn(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(828);$p=1;case 1:$z=AHs(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.I.bo,e);CH(a,(a.bm-a.e9|0)/2|0,(a.bE-a.fk|0)/2|0,0,0,a.e9,a.fk);return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AMC(){var a=this;Ew.call(a);a.Fk=null;a.AE=null;a.kt=0;}
function Bb1(a,b){var c=new AMC();A2l(c,a,b);return c;}
function A2l(a,b,c){var d,e,f,g;H$(a);a.kt=0;a.Fk=b;a.AE=c;a.pQ=0;a.kt=c.gm()/9|0;a.fk=114+(a.kt*18|0)|0;d=(a.kt-4|0)*18|0;e=0;while(e<a.kt){f=0;while(f<9){S(a.c6,D6(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){S(a.c6,D6(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=161+d|0;while(e<9){S(a.c6,D6(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function A91(a){ED(a.b0,a.AE.w6(),8,6,4210752);ED(a.b0,B(325),8,(a.fk-96|0)+2|0,4210752);}
function ANQ(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(829);$p=1;case 1:$z=AHs(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.I.bo,e);f=(a.bm-a.e9|0)/2|0;g=(a.bE-a.fk|0)/2|0;CH(a,f,g,0,0,a.e9,(a.kt*18|0)+17|0);CH(a,f,(g+(a.kt*18|0)|0)+17|0,0,126,a.e9,96);return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function CW(){var a=this;EY.call(a);a.Io=null;a.gg=0;a.m3=0;a.zG=0;a.zF=0;}
var Bmu=null;var Bmv=null;var Bmw=null;var Bmx=null;var Bmy=null;var Bmz=null;var BmA=null;var BmB=null;var BmC=null;var BmD=null;var BmE=null;var BmF=null;var BmG=null;var BmH=null;var BmI=null;var BmJ=null;var BmK=null;var BmL=null;var BmM=null;var BiU=null;function Dm(a,b,c,d,e,f,g){var h=new CW();AEr(h,a,b,c,d,e,f,g);return h;}
function AEr(a,b,c,d,e,f,g,h){FP(a,b,c);a.Io=d;a.gg=e;a.m3=f;a.zG=g;a.zF=h;}
function AP9(){var b,c;Bmu=Dm(B(830),0,B(830),16,16,0,0);Bmv=Dm(B(831),1,B(831),16,16,16,0);Bmw=Dm(B(832),2,B(832),16,16,32,0);Bmx=Dm(B(833),3,B(833),16,16,48,0);Bmy=Dm(B(834),4,B(834),16,16,64,0);Bmz=Dm(B(835),5,B(835),16,16,80,0);BmA=Dm(B(836),6,B(836),16,16,96,0);BmB=Dm(B(837),7,B(837),32,16,0,32);BmC=Dm(B(838),8,B(838),32,16,32,32);BmD=Dm(B(839),9,B(839),32,16,64,32);BmE=Dm(B(840),10,B(840),32,16,96,32);BmF=Dm(B(841),11,B(841),16,32,0,64);BmG=Dm(B(842),12,B(842),32,32,0,128);BmH=Dm(B(843),13,B(843),32,32,
32,128);BmI=Dm(B(844),14,B(844),32,32,64,128);BmJ=Dm(B(845),15,B(845),32,32,96,128);BmK=Dm(B(846),16,B(846),32,32,128,128);BmL=Dm(B(847),17,B(847),64,32,0,96);BmM=Dm(B(848),18,B(848),64,64,0,192);b=J(CW,19);c=b.data;c[0]=Bmu;c[1]=Bmv;c[2]=Bmw;c[3]=Bmx;c[4]=Bmy;c[5]=Bmz;c[6]=BmA;c[7]=BmB;c[8]=BmC;c[9]=BmD;c[10]=BmE;c[11]=BmF;c[12]=BmG;c[13]=BmH;c[14]=BmI;c[15]=BmJ;c[16]=BmK;c[17]=BmL;c[18]=BmM;BiU=b;}
function PG(){Fc.call(this);this.Cr=null;}
function ACP(a){var b;b=new VB;Vv(b,a.Cr);return b;}
function U0(){var a=this;CS.call(a);a.B1=null;a.BQ=null;a.BS=null;a.yN=0;}
function AGl(a){S(a.bH,Sc(0,((a.bm/2|0)-155|0)+0|0,(a.bE/6|0)+96|0,B(849)));S(a.bH,Sc(1,((a.bm/2|0)-155|0)+160|0,(a.bE/6|0)+96|0,B(804)));}
function AQq(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B1;d=b.cl?0:1;e=a.yN;$p=1;case 1:AQ4(c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function YO(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DE(a,a.b0,a.BQ,a.bm/2|0,70,16777215);DE(a,a.b0,a.BS,a.bm/2|0,90,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function KI(){Fh.call(this);}
function BmN(){var a=new KI();AT2(a);return a;}
function AT2(a){O(a);}
function UI(){var a=this;D.call(a);a.kL=0;a.qZ=0;a.xM=null;a.xS=null;a.HW=0;}
function ALp(a,b){var c,d;c=0;while(c<=(3-a.kL|0)){d=0;while(d<=(3-a.qZ|0)){if(Vi(a,b,c,d,1))return 1;if(Vi(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Vi(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.kL&&i<a.qZ)j=!e?a.xM.data[h+Bj(i,a.kL)|0]:a.xM.data[((a.kL-h|0)-1|0)+Bj(i,a.kL)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function AHi(a,b){return Ky(a.xS.bC,a.xS.q);}
function Kn(a){return Bj(a.kL,a.qZ);}
function Sk(){var a=this;Bm.call(a);a.Cm=null;a.Jl=null;}
function AVJ(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.dN^EK(a.Cm,c):0;}
function Sj(){var a=this;Bm.call(a);a.Es=null;a.Bg=null;a.GG=null;}
function A3l(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.dN^EK(a.Es,c):0;return a.Bg.Y(b)&&!d?1:0;}
function Po(){var a=this;Bm.call(a);a.sf=null;a.Hm=null;}
function AXQ(a,b){return a.cj^EK(a.sf,b);}
function A52(a){var b,c;b=new T;V(b);c=IX(a.sf,0);while(c>=0){Hh(b,Iu(c));Dx(b,124);c=IX(a.sf,c+1|0);}if(b.bZ>0)Se(b,b.bZ-1|0);return U(b);}
function TS(){var a=this;Bm.call(a);a.Dy=null;a.Iw=null;}
function A9n(a,b){return a.Dy.Y(b);}
function TQ(){var a=this;Bm.call(a);a.ws=0;a.CH=null;a.xd=null;}
function A0s(a,b){return !(a.ws^EK(a.xd.b6,b))&&!(a.ws^a.xd.iv^a.CH.Y(b))?0:1;}
function TR(){var a=this;Bm.call(a);a.tQ=0;a.A8=null;a.vh=null;}
function A7m(a,b){return !(a.tQ^EK(a.vh.b6,b))&&!(a.tQ^a.vh.iv^a.A8.Y(b))?1:0;}
function TV(){var a=this;Bm.call(a);a.EU=0;a.Ba=null;a.A5=null;a.HC=null;}
function A5a(a,b){return a.EU^(!a.Ba.Y(b)&&!a.A5.Y(b)?0:1);}
function TW(){var a=this;Bm.call(a);a.Ad=0;a.Dt=null;a.Da=null;a.JJ=null;}
function ASG(a,b){return a.Ad^(!a.Dt.Y(b)&&!a.Da.Y(b)?0:1)?0:1;}
function TT(){var a=this;Bm.call(a);a.zR=null;a.JL=null;}
function AWr(a,b){return D5(a.zR,b);}
function TU(){var a=this;Bm.call(a);a.EE=null;a.HN=null;}
function AX_(a,b){return D5(a.EE,b)?0:1;}
function TY(){var a=this;Bm.call(a);a.Ag=null;a.Dv=0;a.AS=null;}
function A1n(a,b){return !D5(a.Ag,b)&&!(a.Dv^EK(a.AS.b6,b))?0:1;}
function TZ(){var a=this;Bm.call(a);a.Ay=null;a.DY=0;a.Ar=null;}
function A4R(a,b){return !D5(a.Ay,b)&&!(a.DY^EK(a.Ar.b6,b))?1:0;}
function Pn(){var a=this;Bm.call(a);a.AO=0;a.Ez=null;a.Bo=null;a.Fn=null;}
function A_R(a,b){return !(a.AO^a.Ez.Y(b))&&!D5(a.Bo,b)?0:1;}
function PB(){var a=this;Bm.call(a);a.EN=0;a.y0=null;a.y6=null;a.FC=null;}
function AWw(a,b){return !(a.EN^a.y0.Y(b))&&!D5(a.y6,b)?1:0;}
function Pl(){var a=this;Bm.call(a);a.CV=null;a.FF=null;}
function AU0(a,b){return D5(a.CV,b);}
function Pm(){var a=this;Bm.call(a);a.zK=null;a.JG=null;}
function A5P(a,b){return D5(a.zK,b)?0:1;}
function Pr(){var a=this;Bm.call(a);a.ET=null;a.Ax=0;a.Fa=null;}
function AXb(a,b){return D5(a.ET,b)&&a.Ax^EK(a.Fa.b6,b)?1:0;}
function Pk(){var a=this;Bm.call(a);a.D_=null;a.DC=0;a.Av=null;}
function A$k(a,b){return D5(a.D_,b)&&a.DC^EK(a.Av.b6,b)?0:1;}
function Pp(){var a=this;Bm.call(a);a.Eg=0;a.Ck=null;a.Ac=null;a.HB=null;}
function A4c(a,b){return a.Eg^a.Ck.Y(b)&&D5(a.Ac,b)?1:0;}
function Pq(){var a=this;Bm.call(a);a.D7=0;a.BZ=null;a.Ef=null;a.HT=null;}
function AZD(a,b){return a.D7^a.BZ.Y(b)&&D5(a.Ef,b)?0:1;}
function OM(){Ix.call(this);}
function AV2(a,b,c,d){var e,f,g;e=0;f=d.bz;a:{while(true){if(b>f){b=e;break a;}g=Hk(d,a.cJ);EM(d,a.cJ,b);e=a.fn.l(b,c,d);if(e>=0)break;EM(d,a.cJ,g);b=b+1|0;}}return b;}
function A_G(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Hk(e,a.cJ);EM(e,a.cJ,c);f=a.fn.l(c,d,e);if(f>=0)break;EM(e,a.cJ,g);c=c+(-1)|0;}}return c;}
function AUO(a){return null;}
function VB(){II.call(this);}
function Ll(a){V8(a);return a.hi.ge;}
function M$(){Fb.call(this);}
var BmO=0.0;var BmP=null;function AJU(){BmO=NaN;BmP=F($rt_doublecls());}
function Mn(){}
function Vt(){var a=this;D.call(a);a.Fx=null;a.EA=null;a.pH=null;a.dB=null;a.qS=0;a.sh=0;}
function OC(a,b){var c,d;c=Bh(a.pH);if(b>=0&&b<=c){Z4(a.dB);a.dB.np=1;APW(a.dB,b);b=a.EA.eH(b,a.pH,a.dB);if(b==(-1))a.dB.hn=1;if(b>=0&&a.dB.n_){AC2(a.dB);return 1;}a.dB.hu=(-1);return 0;}d=new BO;Bl(d,VO(b));M(d);}
function AA8(a){var b,c;b=Bh(a.pH);if(!YE(a))b=a.sh;if(a.dB.hu>=0&&a.dB.np==1){a.dB.hu=MF(a.dB);if(MF(a.dB)==AEI(a.dB)){c=a.dB;c.hu=c.hu+1|0;}return a.dB.hu<=b&&OC(a,a.dB.hu)?1:0;}return OC(a,a.qS);}
function AHN(a,b){return PA(a.dB,b);}
function Yh(a,b){return QH(a.dB,b);}
function AG8(a){return AHN(a,0);}
function AKW(a){return Yh(a,0);}
function YE(a){return a.dB.oc;}
function Uf(){}
function Sa(){}
function SX(){Fc.call(this);this.n8=null;}
var BmQ=null;function Bb0(){var a=new SX();AAg(a);return a;}
function AAg(a){a.n8=Bcz();}
function Ju(a){return AIp(a.n8);}
function Zf(a,b){return ASw(a.n8,b,b)===BmQ?0:1;}
function MB(a,b){return AGn(a.n8,b)!==BmQ?0:1;}
function MY(a){return ADw(a.n8);}
function AAP(){BmQ=new D;}
function SJ(){}
function OO(){}
function AJY(){var a=this;FU.call(a);a.kn=null;a.ty=null;a.GR=null;a.tF=0;}
function Bcz(){var a=new AJY();ATS(a);return a;}
function ATS(a){var b;b=null;a.GR=b;if(b===null){b=new QP;b.I9=a;}a.ty=b;}
function ASw(a,b,c){var d,e;a.kn=Oh(a,a.kn,b);d=Wi(a,b);e=S3(d,c);S3(d,c);a.tF=a.tF+1|0;return e;}
function AGn(a,b){var c;c=Wi(a,b);if(c===null)return null;a.kn=Lu(a,a.kn,b);a.tF=a.tF+1|0;return c.nT;}
function Wi(a,b){var c,d;c=a.kn;while(true){if(c===null)return null;d=Oj(a.ty,b,c.ng);if(!d)break;c=d>=0?c.dj:c.da;}return c;}
function Oh(a,b,c){var d,e;if(b===null){b=new Lb;d=null;b.ng=c;b.nT=d;b.lC=1;b.jm=1;return b;}e=Oj(a.ty,c,b.ng);if(!e)return b;if(e>=0)b.dj=Oh(a,b.dj,c);else b.da=Oh(a,b.da,c);FL(b);return MZ(b);}
function Lu(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Oj(a.ty,c,b.ng);if(d<0)b.da=Lu(a,b.da,c);else if(d>0)b.dj=Lu(a,b.dj,c);else{if(b.dj===null)return b.da;e=b.da;b=b.dj;f=J(Lb,b.lC);g=0;while(b.da!==null){h=f.data;i=g+1|0;h[g]=b;b=b.da;g=i;}c=b.dj;while(g>0){h=f.data;g=g+(-1)|0;j=h[g];j.da=c;FL(j);c=MZ(j);}b.dj=c;b.da=e;FL(b);}FL(b);return MZ(b);}
function ADw(a){var b,c,d;b=a.kn;c=null;while(b!==null){d=AOk(b,0);c=b;b=d;}if(c!==null)return c.ng;b=new JY;O(b);M(b);}
function AIp(a){return a.kn===null?0:a.kn.jm;}
function QP(){D.call(this);this.I9=null;}
function Oj(a,b,c){return b===null?TE(c,b):TE(b,c);}
function VD(){Bm.call(this);this.Iq=null;}
function A1u(a,b){return Do(b)!=2?0:1;}
function S$(){Bm.call(this);this.Iz=null;}
function A31(a,b){return Do(b)!=1?0:1;}
function QG(){Bm.call(this);this.H3=null;}
function ATv(a,b){return Qb(b);}
function QF(){Bm.call(this);this.FH=null;}
function A5I(a,b){return 0;}
function Ss(){Bm.call(this);this.GS=null;}
function AW2(a,b){return !Do(b)?0:1;}
function T7(){Bm.call(this);this.IP=null;}
function A$O(a,b){return Do(b)!=9?0:1;}
function Pb(){Bm.call(this);this.G9=null;}
function AZc(a,b){return Is(b);}
function UZ(){Bm.call(this);this.Ga=null;}
function A0g(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function S7(){Bm.call(this);this.Fe=null;}
function A_v(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Is(b);}return b;}
function S9(){Bm.call(this);this.Gy=null;}
function AVf(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Is(b);}return b;}
function O4(){Bm.call(this);this.GQ=null;}
function A1H(a,b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Ul(){Bm.call(this);this.Ju=null;}
function A7z(a,b){return Lc(b);}
function Up(){Bm.call(this);this.FV=null;}
function A82(a,b){return Uq(b);}
function VV(){Bm.call(this);this.IZ=null;}
function A$D(a,b){return Do(b)!=3?0:1;}
function Vu(){Bm.call(this);this.Fi=null;}
function A13(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Is(b);}return b;}
function OG(){Bm.call(this);this.JM=null;}
function AU8(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Is(b);}return b;}
function My(){Bm.call(this);this.u7=0;}
function Bbn(a){var b=new My();ADM(b,a);return b;}
function ADM(a,b){B0(a);a.u7=b;}
function AZd(a,b){return a.cj^(a.u7!=Do(b&65535)?0:1);}
function Vh(){My.call(this);}
function A92(a,b){return a.cj^(!(a.u7>>Do(b&65535)&1)?0:1);}
function Nf(){D.call(this);}
var BmR=null;var BmS=null;function BmT(){var a=new Nf();ASk(a);return a;}
function ASk(a){return;}
function Dy(b,c){BR(BmR,c,b);BR(BmS,b,c);}
function Ji(b,c){var d,e,f,g,h,$$je;d=null;a:{try{e=d;f=CP(BmR,b);if(f!==null){e=d;g=J(FO,1);g.data[0]=F(GG);b=Wx(f,g);g=J(D,1);g.data[0]=c;d=WA(b,g);e=d;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){h=$$je;}else{throw $$e;}}Cc(h);d=e;}return d;}
function AIj(){BmR=Dd();BmS=Dd();Dy(F(Jp),B(850));Dy(F(E$),B(851));Dy(F(ID),B(852));Dy(F(EQ),B(853));Dy(F(DP),B(854));Dy(F(JV),B(855));Dy(F(Jj),B(856));Dy(F(Kl),B(857));Dy(F(K$),B(858));Dy(F(I3),B(859));Dy(F(Iz),B(580));Dy(F(KF),B(860));Dy(F(Mo),B(861));Dy(F(JJ),B(862));Dy(F(Gd),B(863));}
function JU(){var a=this;D.call(a);a.fF=0;a.fo=0;a.fJ=0;a.p$=0;a.jh=Long_ZERO;a.oS=Long_ZERO;}
var Bkx=Long_ZERO;function A$x(a,b){var c;if(!(b instanceof JU))return 0;c=b;return a.fF==c.fF&&a.fo==c.fo&&a.fJ==c.fJ&&a.p$==c.p$?1:0;}
function A7K(a){return (((((a.fF*128|0)*1024|0)+(a.fJ*128|0)|0)+a.fo|0)*256|0)+a.p$|0;}
function A0n(a,b){a.jh=b;return a;}
function ANB(a,b){return Long_lt(a.jh,b.jh)?(-1):Long_gt(a.jh,b.jh)?1:Long_lt(a.oS,b.oS)?(-1):Long_le(a.oS,b.oS)?0:1;}
function TE(a,b){return ANB(a,b);}
function AF9(){Bkx=Long_ZERO;}
function K_(){}
function VT(){var a=this;D.call(a);a.lm=null;a.iR=null;a.g3=null;a.X=null;a.ly=null;a.fr=0;a.fR=0;a.fK=null;}
function BQ(a,b,c){var d;if(b==a.fr&&c==a.fR&&a.fK!==null)return 1;a:{b:{d=(b&31)+((c&31)*32|0)|0;if(a.X.data[d]!==null){if(a.X.data[d]===a.lm)break b;if(ARF(a.X.data[d],b,c))break b;}b=0;break a;}b=1;}return b;}
function AOe(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b==a.fr&&c==a.fR&&a.fK!==null)return a.fK;d=(b&31)+((c&31)*32|0)|0;if(!BQ(a,b,c)){BeV=1;if(a.X.data[d]!==null){AOM(a.X.data[d]);e=a.X.data[d];$p=1;continue _;}if(a.g3===null)f=null;else{try{e=a.g3;f=a.ly;$p=2;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){e=$$je;}else{throw $$e;}}Cc(e);f=null;}if(f===
null){if(a.iR!==null){e=a.iR;$p=3;continue _;}f=a.lm;}a.X.data[d]=f;if(a.X.data[d]!==null)JZ(a.X.data[d]);if(!a.X.data[d].gy){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(BQ(a,g,h)){$p=6;continue _;}BeV=0;}a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];case 1:AB2(a,e);if(C()){break _;}J6(a,a.X.data[d]);if(a.g3===null)f=null;else{try{e=a.g3;f=a.ly;$p=2;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof BE)
{e=$$je;}else{throw $$e;}}Cc(e);f=null;}if(f===null){if(a.iR!==null){e=a.iR;$p=3;continue _;}f=a.lm;}a.X.data[d]=f;if(a.X.data[d]!==null)JZ(a.X.data[d]);if(!a.X.data[d].gy){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeV=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 2:a:{try{$z=AGV(e,f,b,c);if(C()){break _;}f=$z;if(f!==null)f.s4=a.ly.ec;break a;}catch($$e){$$je=Bi($$e);if
($$je instanceof BE){e=$$je;}else{throw $$e;}}Cc(e);f=null;}if(f===null){if(a.iR!==null){e=a.iR;$p=3;continue _;}f=a.lm;}a.X.data[d]=f;if(a.X.data[d]!==null)JZ(a.X.data[d]);if(!a.X.data[d].gy){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeV=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 3:$z=AJL(e,b,c);if(C()){break _;}f=$z;a.X.data[d]=f;if(a.X.data[d]!==null)JZ(a.X.data[d]);if
(!a.X.data[d].gy){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeV=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 4:$z=AOe(a,g,c);if(C()){break _;}e=$z;if(!e.gy){h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=8;continue _;}}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeV=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 5:$z=AOe(a,
b,h);if(C()){break _;}e=$z;if(!e.gy){i=b+1|0;if(BQ(a,i,h)&&BQ(a,b,h)&&BQ(a,i,c)){$p=9;continue _;}}if(!BQ(a,g,h)){BeV=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;case 6:$z=AOe(a,g,h);if(C()){break _;}e=$z;if(!e.gy&&BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=10;continue _;}BeV=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];case 7:AFp(a,a,b,c);if(C()){break _;}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeV=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p
=6;continue _;case 8:AFp(a,a,g,c);if(C()){break _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeV=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 9:AFp(a,a,b,h);if(C()){break _;}if(!BQ(a,g,h)){BeV=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 10:AFp(a,a,g,h);if(C()){break _;}BeV=0;a.fr=b;a.fR=c;a.fK=a.X.data[d];return a.X.data[d];default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function J6(a,b){var c,$$je;a:{if(a.g3!==null){try{AHo(a.g3,a.ly,b);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof BE){c=$$je;}else{throw $$e;}}c.tC();}}}
function AB2(a,b){var c,d,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.g3!==null){try{b.s4=a.ly.ec;c=a.g3;d=a.ly;$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){c=$$je;}else{throw $$e;}}Cc(c);}return;case 1:a:{try{YQ(c,d,b);if(C()){break _;}break a;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){c=$$je;}else{throw $$e;}}Cc(c);}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AFp(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AOe(a,c,d);if(C()){break _;}e=$z;if(!e.gy){e.gy=1;if(a.iR!==null){f=a.iR;$p=2;continue _;}}return;case 2:AHU(f,b,c,d);if(C()){break _;}SF(e);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ANY(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;e=0;if(c!==null){f=0;while(f<a.X.data.length){if(a.X.data[f]!==null&&Km(a.X.data[f],b))e=e+1|0;f=f+1|0;}}g=0;h=0;while(h<a.X.data.length){if(a.X.data[h]!==null){if(b&&!a.X.data[h].qa)J6(a,a.X.data[h]);if(Km(a.X.data[h],b)){i=a.X.data[h];$p=1;continue _;}}h=h+1|0;}if(b&&a.g3===null)return 1;return 1;case 1:AB2(a,i);if
(C()){break _;}a.X.data[h].dW=0;d=d+1|0;if(d==2&&!b)return 0;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}while(true){h=h+1|0;if(h>=a.X.data.length)break;if(a.X.data[h]===null)continue;if(b&&!a.X.data[h].qa)J6(a,a.X.data[h]);if(Km(a.X.data[h],b)){i=a.X.data[h];continue _;}}if(b&&a.g3===null)return 1;return 1;case 2:XE(c,f);if(C()){break _;}while(true){h=h+1|0;if(h>=a.X.data.length)break;if(a.X.data[h]===null)continue;if(b&&!a.X.data[h].qa)J6(a,a.X.data[h]);if(Km(a.X.data[h],b)){i=a.X.data[h];$p
=1;continue _;}}if(b&&a.g3===null)return 1;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Tp(a){return 0;}
function A_s(a){return 1;}
function Qa(){}
function Xi(){D.call(this);this.r3=null;}
function N9(a,b,c){var d,e,f,g,h;d=b+30233088|0;e=c+30233088|0;f=Bh(B(864));g=new T;Gz(g,10);h=0;while(h<5){Dx(g,Y(B(864),d%f|0));d=d/f|0;Dx(g,Y(B(864),e%f|0));e=e/f|0;h=h+1|0;}return U(g);}
function AGV(a,b,c,d){var e,f,g,h,i,j,k,l,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=N9(a,c,d);f=new T;V(f);g=U(H(H(H(f,a.r3),B(23)),e));$p=1;case 1:$z=ALE(g);if(C()){break _;}h=$z;if(h===null)return null;try{f=MR(OU(Ug(h)));i=FS(f,B(865));j=FS(f,B(866));if(c==i&&d==j){$p=4;continue _;}k=N9(a,i,j);Cg(C1(),BL(H(Be(H(Be(H(H(H(H(H(Be(H(Be(H(Be(H(Be(H(H(H(BX(),B(867)),
e),B(868)),c),B(627)),d),B(869)),i),B(627)),j),B(870)),k),B(871)),e),B(872)),c),B(627)),d),B(245))));b=BL(H(H(H(BX(),a.r3),B(23)),k));$p=3;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){l=$$je;}else{throw $$e;}}b=C1();f=new T;V(f);Cg(b,U(H(Be(H(Be(H(H(H(f,B(873)),e),B(874)),c),B(627)),d),B(245))));Cg(C1(),B(875));$p=2;case 2:AL1(g);if(C()){break _;}Cc(l);return null;case 3:a:{try{ANl(g,b);if(C()){break _;}b=null;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){l=$$je;break a;}else{throw $$e;}}return b;}b
=C1();f=new T;V(f);Cg(b,U(H(Be(H(Be(H(H(H(f,B(873)),e),B(874)),c),B(627)),d),B(245))));Cg(C1(),B(875));$p=2;continue _;case 4:a:{try{$z=A2Y(b,f);if(C()){break _;}b=$z;}catch($$e){$$je=Bi($$e);if($$je instanceof B1){l=$$je;break a;}else{throw $$e;}}return b;}b=C1();f=new T;V(f);Cg(b,U(H(Be(H(Be(H(H(H(f,B(873)),e),B(874)),c),B(627)),d),B(245))));Cg(C1(),B(875));$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function YQ(a,b,c){var d,e,f,g,h,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=G8();AF0(a,c,b,d);e=A$f(131072);try{f=AWg(BbK(e));try{RU(d,f);AHG(f);g=Ia(e);b=BL(H(H(H(BX(),a.r3),B(23)),N9(a,c.fZ,c.fU)));$p=1;continue _;}catch($$e){$$je=Bi($$e);if($$je instanceof D8){b=$$je;}else{throw $$e;}}a:{try{KO(f);break a;}catch($$e){$$je=Bi($$e);if($$je instanceof D8){d=$$je;}else{throw $$e;}}WH(b,d);}M(b);}catch
($$e){$$je=Bi($$e);if($$je instanceof B1){h=$$je;}else{throw $$e;}}b=C1();d=new T;V(d);Cg(b,U(H(Be(H(Be(H(d,B(876)),c.fZ),B(627)),c.fU),B(877))));Cc(h);return;case 1:b:{a:{try{try{ACx(b,g);if(C()){break _;}}catch($$e){$$je=Bi($$e);if($$je instanceof D8){b=$$je;break a;}else{throw $$e;}}KO(f);}catch($$e){$$je=Bi($$e);if($$je instanceof B1){h=$$je;break b;}else{throw $$e;}}return;}try{c:{try{KO(f);break c;}catch($$e){$$je=Bi($$e);if($$je instanceof D8){d=$$je;}else{throw $$e;}}WH(b,d);}M(b);}catch($$e){$$je=Bi($$e);if
($$je instanceof B1){h=$$je;}else{throw $$e;}}}b=C1();d=new T;V(d);Cg(b,U(H(Be(H(Be(H(d,B(876)),c.fZ),B(627)),c.fU),B(877))));Cc(h);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AF0(a,b,c,d){Gv(d,B(865),b.fZ);Gv(d,B(866),b.fU);H9(d,B(878),c.ec);IL(d,B(879),b.g0);IL(d,B(356),b.hL.gA);IL(d,B(880),b.gW.gA);IL(d,B(881),b.hZ.gA);IL(d,B(882),b.eg);SU(d,B(883),b.gy);b.r$=0;AG4(new QO);}
function A2Y(b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:d=BaK(b,FS(c,B(865)),FS(c,B(866)));d.g0=IE(c,B(879));d.hL=AII(IE(c,B(356)));d.gW=AII(IE(c,B(880)));d.hZ=AII(IE(c,B(881)));d.eg=IE(c,B(882));d.gy=Um(c,B(883));if(!JI(d.hL))d.hL=Jf(d.g0.data.length);if(d.eg!==null&&JI(d.gW)){if(!JI(d.hZ))d.hZ=Jf(d.g0.data.length);return d;}d.eg=$rt_createByteArray(256);d.gW=Jf(d.g0.data.length);$p=1;case 1:AFK(d);if(C()){break _;}if(!JI(d.hZ))d.hZ=Jf(d.g0.data.length);return d;default:
E_();}}C3().s(b,c,d,$p);}
function A4D(a){return;}
function A4U(a){return;}
function AHo(a,b,c){return;}
function So(){var a=this;D.call(a);a.a=null;a.yT=null;a.yU=null;a.yS=null;a.tN=null;a.yW=null;a.yX=null;a.yV=null;a.iS=null;a.t=null;a.h1=null;a.vT=null;a.vR=null;a.vS=null;a.vU=null;a.vV=null;a.Gb=null;}
function Zs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;a.h1=Zh(a,a.h1,b*4|0,0,c*4|0,5,17,5);e=0;while(e<4){f=0;while(f<4){g=0;while(g<16){h=a.h1.data;c=((e+0|0)*5|0)+f|0;i=((c+0|0)*17|0)+g|0;j=h[i+0|0];h=a.h1.data;b=((c+1|0)*17|0)+g|0;k=h[b+0|0];h=a.h1.data;l=((e+1|0)*5|0)+f|0;m=((l+0|0)*17|0)+g|0;n=h[m+0|0];h=a.h1.data;c=((l+1|0)*17|0)+g|0;o=h[c+0|0];p=(a.h1.data[i+1|0]-j)*0.125;q=(a.h1.data[b+1|0]-k)*0.125;r=(a.h1.data[m+1|0]-n)*0.125;s=(a.h1.data[c+1|0]-o)*0.125;t=0;while(t<8){u=(n-j)
*0.25;v=(o-k)*0.25;w=0;x=j;y=k;while(w<4){b=(w+(e*4|0)|0)<<11|(0+(f*4|0)|0)<<7;c=(g*8|0)+t|0;m=b|c;z=(y-x)*0.25;ba=0;c=R(c,64);bb=x;while(ba<4){i=0;if(c<0){L();i=BgD.b;}if(bb>0.0){L();i=BeU.b;}d.data[m]=i<<24>>24;m=m+128|0;bb=bb+z;ba=ba+1|0;}x=x+u;y=y+v;w=w+1|0;}j=j+p;k=k+q;n=n+r;o=o+s;t=t+1|0;}g=g+1|0;}f=f+1|0;}e=e+1|0;}}
function ACs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=0;f=b*16|0;c=c*16|0;while(e<16){g=0;while(g<16){h=f+e|0;i=c+g|0;j=a.tN;k=h*0.03125;l=i*0.03125;m=U1(j,k,l,0.0)+Cl(a.a)*0.2<=0.0?0:1;n=U1(a.tN,l,109.0134,k)+Cl(a.a)*0.2<=3.0?0:1;o=E0(a.yW,k*2.0,l*2.0)/3.0+3.0+Cl(a.a)*0.25|0;p=(-1);L();q=BeQ.b;r=BeR.b;s=(((e*16|0)+g|0)*128|0)+128|0;t=127;while(t>=0){s=s+(-1)|0;if(t<=((0+E(a.a,6)|0)-1|0))d.data[s]=BeP.b<<24>>24;else{u=d.data;if(!u[s])p=(-1);else if(u[s]==BeU.b){if(p==(-1)){if(o<=0){q=0;r=BeU.b<<24>>
24;}else if(t>=60&&t<=65){q=BeQ.b;r=BeR.b;if(n)q=0;if(n)r=Bfa.b;if(m)q=Be_.b;if(m)r=Be_.b;}if(t<64&&!q)q=BgD.b;if(t<63){u[s]=r<<24>>24;p=o;}else{u[s]=q<<24>>24;p=o;}}else if(p>0){p=p+(-1)|0;u[s]=r<<24>>24;}}}t=t+(-1)|0;}g=g+1|0;}e=e+1|0;}}
function AJL(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=$rt_createByteArray(32768);e=A9r(a.t,d,b,c);Zs(a,b,c,d);ACs(a,b,c,d);ART(a,b,c,d);$p=1;case 1:AFK(e);if(C()){break _;}return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function APS(a,b,c,d,e,f,g){Jc(a,b,c,d,e,f,g,1.0+N(a.a)*6.0,0.0,0.0,(-1),(-1),0.5);}
function Jc(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD;n=b*16|0;o=n+8|0;p=c*16|0;q=p+8|0;r=0.0;s=0.0;t=Bbz(Gw(a.a));if(l<=0)l=112-E(t,28)|0;u=0;if(k==(-1)){k=l/2|0;u=1;}v=E(t,l/2|0)+(l/4|0)|0;w=E(t,6)?0:1;x=R(h,1.0);y=h+2.0+16.0;y=y*y;z=o-16.0;ba=q-16.0;bb=o+16.0;bc=q+16.0;a:{while(true){if(k>=l)break a;bd=1.5+Bq(k*3.1415927410125732/l)*h*1.0;be=bd*m;bf=BC(j);bg=Bq(j);e=e+BC(i)*bf;f=f+bg;g=g+Bq(i)*bf;j=(!w
?j*0.699999988079071:j*0.9200000166893005)+s*0.10000000149011612;i=i+r*0.10000000149011612;bh=s*0.8999999761581421;bf=r*0.75;s=bh+(N(t)-N(t))*N(t)*2.0;r=bf+(N(t)-N(t))*N(t)*4.0;if(!u&&k==v&&x>0){h=N(t)*0.5+0.5;bh=i-1.5707963705062866;j=j/3.0;Jc(a,b,c,d,e,f,g,h,bh,j,k,l,1.0);Jc(a,b,c,d,e,f,g,N(t)*0.5+0.5,i+1.5707963705062866,j,k,l,1.0);return;}if(!(!u&&!E(t,4))){bi=e-o;bj=g-q;bk=l-k|0;if(bi*bi+bj*bj-bk*bk>y)break;bl=bd*2.0;if(e>=z-bl&&g>=ba-bl&&e<=bb+bl&&g<=bc+bl){bm=(K(e-bd)-n|0)-1|0;bn=(K(e+bd)-n|0)+1|0;bo
=K(f-be)-1|0;bp=K(f+be)+1|0;bq=(K(g-bd)-p|0)-1|0;br=(K(g+bd)-p|0)+1|0;if(bm<0)bm=0;if(bn>16)bn=16;if(bo<1)bo=1;if(bp>120)bp=120;if(bq<0)bq=0;if(br>16)br=16;bs=0;bt=bm;while(!bs&&bt<bn){bu=bq;while(!bs&&bu<br){bv=bp+1|0;while(!bs){bw=R(bv,bo-1|0);if(bw<0)break;bx=(((bt*16|0)+bu|0)*128|0)+bv|0;if(bv>=0&&bv<128){by=d.data;bz=by[bx];L();if(!(bz!=BfX.b&&by[bx]!=BgD.b))bs=1;if(bw&&bt!=bm&&bt!=(bn-1|0)&&bu!=bq&&bu!=(br-1|0))bv=bo;}bv=bv+(-1)|0;}bu=bu+1|0;}bt=bt+1|0;}if(!bs){while(bm<bn){bA=((bm+n|0)+0.5-e)/bd;bi=bA
*bA;bx=bq;while(bx<br){bB=((bx+p|0)+0.5-g)/bd;bC=(((bm*16|0)+bx|0)*128|0)+bp|0;bw=0;bD=bp-1|0;bB=bB*bB;while(bD>=bo){bl=(bD+0.5-f)/be;if(bl>(-0.7)&&bi+bl*bl+bB<1.0){by=d.data;bz=by[bC];L();if(bz==BeQ.b)bw=1;if(!(bz!=BeU.b&&bz!=BeR.b&&bz!=BeQ.b)){if(bD<10)by[bC]=BfY.b<<24>>24;else{by[bC]=0;if(bw){bz=bC-1|0;if(by[bz]==BeR.b)by[bz]=BeQ.b<<24>>24;}}}}bC=bC+(-1)|0;bD=bD+(-1)|0;}bx=bx+1|0;}bm=bm+1|0;}if(u)break a;}}}k=k+1|0;}return;}}
function ART(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;Gw(a.a);Gw(a.a);e=b-8|0;f=b+8|0;g=c-8|0;h=c+8|0;while(e<=f){i=g;while(i<=h){j=E(a.a,E(a.a,E(a.a,40)+1|0)+1|0);if(E(a.a,15))j=0;k=0;while(k<j){l=(e*16|0)+E(a.a,16)|0;m=E(a.a,E(a.a,120)+8|0);n=(i*16|0)+E(a.a,16)|0;o=1;if(!E(a.a,4)){APS(a,b,c,d,l,m,n);o=o+E(a.a,4)|0;}p=0;while(p<o){q=N(a.a)*3.1415927410125732*2.0;r=(N(a.a)-0.5)*2.0/8.0;Jc(a,b,c,d,l,m,n,N(a.a)*2.0+N(a.a),q,r,0,0,1.0);p=p+1|0;}k=k+1|0;}i=i+1|0;}e=e+1|0;}}
function Zh(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));a.vU=H0(a.yX,a.vU,c,d,e,f,1,h,1.0,0.0,1.0);a.vV=H0(a.yV,a.vV,c,d,e,f,1,h,100.0,0.0,100.0);a.vT=H0(a.yS,a.vT,c,d,e,f,g,h,8.555150000000001,4.277575000000001,8.555150000000001);a.vR=H0(a.yT,a.vR,c,d,e,f,g,h,684.412,684.412,684.412);a.vS=H0(a.yU,a.vS,c,d,e,f,g,h,684.412,684.412,684.412);i=0;j=0;k=0;l=g;d=g-4|0;m=l/2.0;while(k<f){n=0;while(n<h){o=(a.vU.data[j]+256.0)/512.0;if(o>1.0)o=1.0;p=a.vV.data[j]
/8000.0;if(p<0.0)p= -p;q=p*3.0-3.0;if(q>=0.0){if(q>1.0)q=1.0;q=q/6.0;}else{o=q/2.0;if(o<(-1.0))o=(-1.0);q=o/1.4/2.0;o=0.0;}r=o+0.5;s=m+q*l/16.0*4.0;j=j+1|0;t=0;while(t<g){p=t;u=(p-s)*12.0/r;if(u<0.0)u=u*4.0;v=a.vR.data[i]/512.0;q=a.vS.data[i]/512.0;w=(a.vT.data[i]/10.0+1.0)/2.0;if(w>=0.0)v=w>1.0?q:v+(q-v)*w;o=v-u;if(t>d){x=(t-d|0)/3.0;o=o*(1.0-x)+(-10.0)*x;}if(p<0.0){x=(0.0-p)/4.0;if(x<0.0)x=0.0;if(x>1.0)x=1.0;o=o*(1.0-x)+(-10.0)*x;}b.data[i]=o;i=i+1|0;t=t+1|0;}n=n+1|0;}k=k+1|0;}return b;}
function AHU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=c*16|0;f=d*16|0;NF(a.a,a.t.lt);g=Long_add(Long_mul(Long_div(Gw(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));h=Long_add(Long_mul(Long_div(Gw(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));NF(a.a,Long_xor(Long_add(Long_mul(Long_fromInt(c),
g),Long_mul(Long_fromInt(d),h)),a.t.lt));i=0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYl();m=a.t;n=a.a;$p=1;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeR.b,32);m=a.t;n=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfa.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,
16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgY.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c
=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50)
{l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=15;continue _;case 1:XK(b,m,n,j,k,l);if(C()){break _;}i=i+1|0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYl();m=a.t;n=a.a;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeR.b,32);m=a.t;n
=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfa.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,
16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgY.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=11;continue _;}if
(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=
a.t;n=a.a;$p=15;continue _;case 2:ABO(b,m,n,j,k,l);if(C()){break _;}o=o+1|0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeR.b,32);m=a.t;n=a.a;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfa.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgY.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,
Be7.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=15;continue _;case 3:ABO(b,m,n,o,k,l);if(C()){break _;}j=j+1|0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfa.b,32);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,Bfe.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgY.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)
|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p
=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=15;continue _;case 4:ABO(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,16);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgY.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,
Be7.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=15;continue _;case 5:ABO(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfe.b,8);m=a.t;n=a.a;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bff.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,BgY.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,
4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p
=15;continue _;case 6:ABO(b,m,n,c,j,k);if(C()){break _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgY.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e
+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=15;continue _;case 7:ABO(b,m,n,c,j,k);if(C()){break _;}c=(E0(a.iS,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GX();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c
=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=15;continue _;case 8:$z=ALF(q,l,p);if(C()){break _;}d=$z;$p=9;case 9:AEJ(m,b,n,l,d,p);if(C()){break _;}k=k+1|0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+
E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=15;continue _;case 10:ACL(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=12;continue _;}if
(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=15;continue _;case 11:ACL(b,m,n,c,l,p);if(C()){break _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,
16)|0)+8|0;b=new BS;L();BT(b,Be9.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=15;continue _;case 12:ACL(b,m,n,c,l,p);if(C())
{break _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be$.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=15;continue _;case 13:ACL(b,m,n,c,l,p);if(C()){break _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=15;continue _;case 14:ALZ(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfX.b);m=a.t;n=a.a;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8
|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;$p=15;case 15:ALZ(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfY.b);m=a.t;n=a.a;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A0f(a){return 0;}
function Wq(){var a=this;D.call(a);a.gF=null;a.oQ=null;a.xs=null;a.uU=null;a.zx=0;a.n_=0;a.ff=0;a.bz=0;a.hu=0;a.oc=0;a.li=0;a.hn=0;a.Jf=0;a.kX=0;a.np=0;}
function Cv(a,b,c){a.oQ.data[b]=c;}
function Ep(a,b){return a.oQ.data[b];}
function MF(a){return QH(a,0);}
function QH(a,b){Vg(a,b);return a.gF.data[(b*2|0)+1|0];}
function EM(a,b,c){a.gF.data[b*2|0]=c;}
function MV(a,b,c){a.gF.data[(b*2|0)+1|0]=c;}
function Hk(a,b){return a.gF.data[b*2|0];}
function JE(a,b){return a.gF.data[(b*2|0)+1|0];}
function AM4(a,b){var c,d;c=Hk(a,b);d=JE(a,b);if((d|c|(d-c|0))>=0&&d<=Bh(a.uU))return Ev(a.uU,c,d);return null;}
function AEI(a){return PA(a,0);}
function PA(a,b){Vg(a,b);return a.gF.data[b*2|0];}
function AC2(a){if(a.gF.data[0]==(-1)){a.gF.data[0]=a.hu;a.gF.data[1]=a.hu;}a.kX=MF(a);}
function Tc(a,b){return a.xs.data[b];}
function FE(a,b,c){a.xs.data[b]=c;}
function Vg(a,b){var c;if(!a.n_){c=new D2;O(c);M(c);}if(b>=0&&b<a.zx)return;c=new BO;Bl(c,VO(b));M(c);}
function ARx(a){a.n_=1;}
function A$S(a){return a.n_;}
function Xe(a,b,c,d){a.n_=0;a.np=2;MW(a.gF,(-1));MW(a.oQ,(-1));if(b!==null)a.uU=b;if(c>=0){a.ff=c;a.bz=d;}a.hu=a.ff;}
function Z4(a){Xe(a,null,(-1),(-1));}
function APW(a,b){a.hu=b;if(a.kX>=0)b=a.kX;a.kX=b;}
function A4l(a){return a.ff;}
function A7p(a){return a.bz;}
function A5d(a,b){a.np=b;}
function AWf(a){return a.np;}
function A6h(a){return a.li;}
function A3i(a){return a.oc;}
function A3L(a){return a.kX;}
function VI(){var a=this;D.call(a);a.ct=null;a.l0=0;a.fV=0;a.fW=0;a.fw=0;a.fb=0;a.eK=0;}
function AOm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.l0;while(c<=a.fw){d=a.fW;while(d<=a.eK){a:{if(EI(b,c,0,d)){e=a.fV;while(true){if(e>a.fb)break a;if(e>=0&&e<128){f=a.ct;$p=1;continue _;}e=e+1|0;}}}d=d+1|0;}c=c+1|0;}return;case 1:$z=ALi(b,f,c,e,d);if(C()){break _;}g=$z;$p=2;case 2:$z=ACt(b,
c,e,d);if(C()){break _;}h=$z;L();i=BgA.data[h];if(!i)i=1;j=0;if(a.ct===Bkv){$p=3;continue _;}if(a.ct===Bkw)j=BgC.data[h];if(i>=15&&!j){j=0;if(g!=j){f=a.ct;$p=10;continue _;}b:while(true){e=e+1|0;while(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break b;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;}f=a.ct;h=c-1|0;$p=4;continue _;case 3:$z=Zu(b,c,e,d);if(C()){break _;}h=$z;if(h)j=15;if(i>=15&&!j){j=0;if(g!=j){f=a.ct;$p
=10;continue _;}c:while(true){e=e+1|0;while(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break c;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;}f=a.ct;h=c-1|0;$p=4;case 4:$z=ALi(b,f,h,e,d);if(C()){break _;}k=$z;f=a.ct;h=c+1|0;$p=5;case 5:$z=ALi(b,f,h,e,d);if(C()){break _;}l=$z;f=a.ct;h=e-1|0;$p=6;case 6:$z=ALi(b,f,c,h,d);if(C()){break _;}m=$z;f=a.ct;h=e+1|0;$p=7;case 7:$z=ALi(b,f,c,h,d);if(C()){break _;}n=$z;f=a.ct;h
=d-1|0;$p=8;case 8:$z=ALi(b,f,c,e,h);if(C()){break _;}o=$z;f=a.ct;h=d+1|0;$p=9;case 9:$z=ALi(b,f,c,e,h);if(C()){break _;}p=$z;if(l<=k)l=k;if(m<=l)m=l;if(n<=m)n=m;if(o<=n)o=n;if(p<=o)p=o;h=p-i|0;if(h<0)h=0;if(j<=h)j=h;if(g!=j){f=a.ct;$p=10;continue _;}d:while(true){e=e+1|0;while(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break d;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;case 10:AMs(b,f,c,e,d,j);if(C()){break _;}k
=j-1|0;if(k<0)k=0;f=a.ct;h=c-1|0;$p=11;case 11:AP8(b,f,h,e,d,k);if(C()){break _;}f=a.ct;h=e-1|0;$p=12;case 12:AP8(b,f,c,h,d,k);if(C()){break _;}f=a.ct;h=d-1|0;$p=13;case 13:AP8(b,f,c,e,h,k);if(C()){break _;}h=c+1|0;if(h>=a.fw){f=a.ct;$p=14;continue _;}h=e+1|0;if(h>=a.fb){f=a.ct;$p=15;continue _;}h=d+1|0;if(h>=a.eK){f=a.ct;$p=16;continue _;}e:while(true){e=e+1|0;while(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break e;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=
128)continue;else{f=a.ct;$p=1;continue _;}}return;case 14:AP8(b,f,h,e,d,k);if(C()){break _;}h=e+1|0;if(h>=a.fb){f=a.ct;$p=15;continue _;}h=d+1|0;if(h>=a.eK){f=a.ct;$p=16;continue _;}a:while(true){e=e+1|0;while(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break a;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;case 15:AP8(b,f,c,h,d,k);if(C()){break _;}h=d+1|0;if(h>=a.eK){f=a.ct;$p=16;continue _;}f:while(true){e=e+1|0;while
(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break f;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;case 16:AP8(b,f,c,e,h,k);if(C()){break _;}g:while(true){e=e+1|0;while(e>a.fb){while(true){d=d+1|0;while(d>a.eK){c=c+1|0;if(c>a.fw)break g;d=a.fW;}if(!EI(b,c,0,d))continue;else break;}e=a.fV;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ALA(a,b,c,d,e,f,g){if(b>=a.l0&&c>=a.fV&&d>=a.fW&&e<=a.fw&&f<=a.fb&&g<=a.eK)return 1;if(b>=(a.l0-1|0)&&c>=(a.fV-1|0)&&d>=(a.fW-1|0)&&e<=(a.fw+1|0)&&f<=(a.fb+1|0)&&g<=(a.eK+1|0)){if(b<a.l0)a.l0=b;if(c<a.fV)a.fV=c;if(d<a.fW)a.fW=d;if(e>a.fw)a.fw=e;if(f>a.fb)a.fb=f;if(g>a.eK)a.eK=g;return 1;}return 0;}
function R3(){}
function AF4(){var a=this;F_.call(a);a.ik=0;a.ea=null;}
function AWg(a){var b=new AF4();A65(b,a);return b;}
function A65(a,b){K9(a,b);a.ea=$rt_createByteArray(8);}
function AHG(a){a.fm.ls();}
function Q4(a,b,c,d){var e;if(b!==null){a.fm.gu(b,c,d);a.ik=a.ik+d|0;return;}e=new EE;O(e);M(e);}
function KJ(a,b){a.fm.nJ(b);a.ik=a.ik+1|0;}
function APl(a,b){UA(a,$rt_doubleToLongBits(b));}
function APg(a,b){JK(a,$rt_floatToIntBits(b));}
function JK(a,b){a.ea.data[0]=b>>24<<24>>24;a.ea.data[1]=b>>16<<24>>24;a.ea.data[2]=b>>8<<24>>24;a.ea.data[3]=b<<24>>24;a.fm.gu(a.ea,0,4);a.ik=a.ik+4|0;}
function UA(a,b){a.ea.data[0]=Long_shr(b,56).lo<<24>>24;a.ea.data[1]=Long_shr(b,48).lo<<24>>24;a.ea.data[2]=Long_shr(b,40).lo<<24>>24;a.ea.data[3]=b.hi<<24>>24;a.ea.data[4]=Long_shr(b,24).lo<<24>>24;a.ea.data[5]=Long_shr(b,16).lo<<24>>24;a.ea.data[6]=Long_shr(b,8).lo<<24>>24;a.ea.data[7]=b.lo<<24>>24;a.fm.gu(a.ea,0,8);a.ik=a.ik+8|0;}
function Z7(a,b){a.ea.data[0]=b>>8<<24>>24;a.ea.data[1]=b<<24>>24;a.fm.gu(a.ea,0,2);a.ik=a.ik+2|0;}
function AOa(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function Xm(a,b){var c,d,e;c=AGb(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new B1;Bl(b,B(884));M(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Q4(a,e,0,AO6(a,b,e,AOa(a,d,e,0)));}
function AGb(a,b){var c,d,e,f;c=0;d=Bh(b);e=0;while(e<d){f=Y(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function AO6(a,b,c,d){var e,f,g,h,i,j,k;e=Bh(b);f=0;while(f<e){g=Y(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function AFY(){D.call(this);}
function BmU(){var a=new AFY();A0h(a);return a;}
function A0h(a){return;}
function NT(){D.call(this);}
var BmV=null;var BmW=null;function BmX(){var a=new NT();ABk(a);return a;}
function ABk(a){return;}
function ABU(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.y9=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.u1=Long_ZERO;c.t3=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=AOr(BmW,f);if(h<0)h= -h-2|0;i=12+(f-BmW.data[h]|0)|0;j=Qp(e,BmV.data[h],i);if(Long_ge(j,
new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-BmW.data[h]|0)|0;j=Qp(e,BmV.data[h],i);}k=Long_shru(BmV.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,o)),Long_div(l,Long_fromInt(2))))o
=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.u1=e;c.t3=h-330|0;}
function Qp(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function ABi(){var b,c,d,e,f,g,h,i,j,k;BmV=$rt_createLongArray(660);BmW=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=BmV.data;g=d+330|0;f[g]=Ml(e,Long_fromInt(80));BmW.data[g]=c;e=Ml(e,Long_fromInt(10));h=AIV(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=BmV.data;g=(330-i|0)-1|0;f[g]=Ml(b,Long_fromInt(80));BmW.data[g]=d;i=i+1|0;}}
function HL(){D.call(this);}
function AMP(){var a=this;HL.call(a);a.nG=null;a.rJ=0;}
function G9(a,b){var c=new AMP();AT$(c,a,b);return c;}
function AT$(a,b,c){var d;a.rJ=c;a.nG=J(Pu,c);d=0;while(d<c){a.nG.data[d]=BbJ(b);d=d+1|0;}}
function E0(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.rJ){d=d+AGW(a.nG.data[f],b*e,c*e)/e;e=e/2.0;f=f+1|0;}return d;}
function U1(a,b,c,d){var e,f,g;e=0.0;f=1.0;g=0;while(g<a.rJ){e=e+Le(a.nG.data[g],b*f,c*f,d*f)/f;f=f/2.0;g=g+1|0;}return e;}
function H0(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));else{l=0;while(true){m=b.data;if(l>=m.length)break;m[l]=0.0;l=l+1|0;}}n=1.0;o=0;while(o<a.rJ){AQr(a.nG.data[o],b,c,d,e,f,g,h,i*n,j*n,k*n,n);n=n/2.0;o=o+1|0;}return b;}
function ACN(){var a=this;D.call(a);a.mb=null;a.m1=0;a.FD=Long_ZERO;}
function ATn(a,b,c){var d=new ACN();A1s(d,a,b,c);return d;}
function A1s(a,b,c,d){a.mb=b;a.m1=c;a.FD=d;}
function Pu(){var a=this;HL.call(a);a.b5=null;a.vd=0.0;a.x_=0.0;a.wt=0.0;}
function BmY(){var a=new Pu();A_E(a);return a;}
function BbJ(a){var b=new Pu();Zi(b,a);return b;}
function A_E(a){Zi(a,new Dz);}
function Zi(a,b){var c,d,e,f,g;a.b5=$rt_createIntArray(512);a.vd=Cl(b)*256.0;a.x_=Cl(b)*256.0;a.wt=Cl(b)*256.0;c=0;while(c<256){d=a.b5.data;e=c+1|0;d[c]=c;c=e;}c=0;while(c<256){f=E(b,256-c|0)+c|0;g=a.b5.data[c];a.b5.data[c]=a.b5.data[f];a.b5.data[f]=g;a.b5.data[c+256|0]=a.b5.data[c];c=c+1|0;}}
function Le(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;e=b+a.vd;f=c+a.x_;g=d+a.wt;h=e|0;i=f|0;j=g|0;if(e<h)h=h+(-1)|0;if(f<i)i=i+(-1)|0;if(g<j)j=j+(-1)|0;k=h&255;l=i&255;m=j&255;c=e-h;d=f-i;n=g-j;o=c*c*c*(c*(c*6.0-15.0)+10.0);p=d*d*d*(d*(d*6.0-15.0)+10.0);q=n*n*n*(n*(n*6.0-15.0)+10.0);r=a.b5.data[k]+l|0;s=a.b5.data[r]+m|0;t=a.b5.data[r+1|0]+m|0;u=a.b5.data[k+1|0]+l|0;v=a.b5.data[u]+m|0;w=a.b5.data[u+1|0]+m|0;e=Dr(a,a.b5.data[s],c,d,n);k=a.b5.data[v];x=c-1.0;b=DM(a,o,e,Dr(a,k,x,d,n));k=a.b5.data[t];e
=d-1.0;b=DM(a,p,b,DM(a,o,Dr(a,k,c,e,n),Dr(a,a.b5.data[w],x,e,n)));k=a.b5.data[s+1|0];f=n-1.0;return DM(a,q,b,DM(a,p,DM(a,o,Dr(a,k,c,d,f),Dr(a,a.b5.data[v+1|0],x,d,f)),DM(a,o,Dr(a,a.b5.data[t+1|0],c,e,f),Dr(a,a.b5.data[w+1|0],x,e,f))));}
function DM(a,b,c,d){return c+b*(d-c);}
function Dr(a,b,c,d,e){var f,g;f=b&15;g=f>=8?d:c;if(f>=4)d=f!=12&&f!=14?e:c;if(f&1)g= -g;if(f&2)d= -d;return g+d;}
function AGW(a,b,c){return Le(a,b,c,0.0);}
function A4J(a,b,c,d){return Le(a,b,c,d);}
function AQr(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;m=0;n=1.0/l;o=(-1);p=0.0;q=0.0;r=0.0;s=0.0;t=0;while(t<f){u=(c+t|0)*i+a.vd;v=u|0;if(u<v)v=v+(-1)|0;w=v&255;u=u-v;x=u*u*u*(u*(u*6.0-15.0)+10.0);y=0;v=w+1|0;z=u-1.0;while(y<h){ba=(e+y|0)*k+a.wt;bb=ba|0;if(ba<bb)bb=bb+(-1)|0;bc=bb&255;bd=ba-bb;be=bd*bd*bd*(bd*(bd*6.0-15.0)+10.0);bf=0;ba=bd-1.0;while(bf<g){bg=(d+bf|0)*j+a.x_;bh=bg|0;if(bg<bh)bh=bh+(-1)|0;bi=bh&255;l=bg-bh;bj=l*l*l*(l*(l
*6.0-15.0)+10.0);if(bf&&bi==o)bi=o;else{bk=a.b5.data[w]+bi|0;bl=a.b5.data[bk]+bc|0;bm=a.b5.data[bk+1|0]+bc|0;bn=a.b5.data[v]+bi|0;bo=a.b5.data[bn]+bc|0;bp=a.b5.data[bn+1|0]+bc|0;p=DM(a,x,Dr(a,a.b5.data[bl],u,l,bd),Dr(a,a.b5.data[bo],z,l,bd));bn=a.b5.data[bm];bq=l-1.0;q=DM(a,x,Dr(a,bn,u,bq,bd),Dr(a,a.b5.data[bp],z,bq,bd));r=DM(a,x,Dr(a,a.b5.data[bl+1|0],u,l,ba),Dr(a,a.b5.data[bo+1|0],z,l,ba));s=DM(a,x,Dr(a,a.b5.data[bm+1|0],u,bq,ba),Dr(a,a.b5.data[bp+1|0],z,bq,ba));}br=b.data;bs=DM(a,be,DM(a,bj,p,q),DM(a,bj,
r,s));bn=m+1|0;br[m]=br[m]+bs*n;bf=bf+1|0;m=bn;o=bi;}y=y+1|0;}t=t+1|0;}}
function T4(){D.call(this);this.gA=null;}
function Jf(a){var b=new T4();AJA(b,a);return b;}
function AII(a){var b=new T4();A0D(b,a);return b;}
function AJA(a,b){a.gA=$rt_createByteArray(b>>1);}
function A0D(a,b){a.gA=b;}
function Ij(a,b,c,d){var e,f;e=b<<11|d<<7|c;f=e>>1;return !(e&1)?a.gA.data[f]&15:a.gA.data[f]>>4&15;}
function Ek(a,b,c,d,e){var f,g;f=b<<11|d<<7|c;g=f>>1;if(!(f&1))a.gA.data[g]=(a.gA.data[g]&240|e&15)<<24>>24;else a.gA.data[g]=(a.gA.data[g]&15|(e&15)<<4)<<24>>24;}
function JI(a){return a.gA===null?0:1;}
function E3(){EY.call(this);}
var BmZ=null;var BfE=null;var Bm0=null;var Bm1=null;function AM_(){var b,c,d;b=new E3;FP(b,B(885),0);BmZ=b;b=new E3;FP(b,B(886),1);BfE=b;b=new E3;FP(b,B(887),2);Bm0=b;c=J(E3,3);d=c.data;d[0]=BmZ;d[1]=BfE;d[2]=Bm0;Bm1=c;}
function Vm(){Fb.call(this);}
var Bm2=null;function Ml(b,c){return Long_udiv(b, c);}
function AIV(b,c){return Long_urem(b, c);}
function ALY(){Bm2=F($rt_longcls());}
function Tz(){D.call(this);this.CG=null;}
function ASm(a){CM(a.CG,K1(1));}
function A4q(a){ASm(a);}
function Tw(){D.call(this);this.Db=null;}
function ASt(a){CM(a.Db,K1(0));}
function AYi(a){ASt(a);}
function Rh(){D.call(this);this.Bu=null;}
function XM(a){CM(a.Bu,K1(1));}
function A8P(a){XM(a);}
function Rk(){D.call(this);this.BN=null;}
function ASd(a){CM(a.BN,K1(0));}
function A7c(a){ASd(a);}
function Rf(){var a=this;D.call(a);a.CO=null;a.u9=null;}
function ACq(a){CM(a.CO,a.u9.result===null?Bm0:!(Us(a.u9.result)?1:0)?BmZ:BfE);}
function A5S(a){ACq(a);}
function Rg(){D.call(this);this.Ed=null;}
function AB5(a){CM(a.Ed,Bm0);}
function A3e(a){AB5(a);}
function Ri(){var a=this;D.call(a);a.EL=null;a.El=null;a.yZ=null;a.vF=null;a.Bi=0;a.C5=0;a.xg=null;}
function AMG(a){var b,c;b=a.EL.result;if(b!==null&&b.key!==null&&b.value!==null){c=$rt_str(AZR(b.key));if(c!==null&&Iw(c,a.vF)&&!(!a.Bi&&Hg(c,47,Bh(a.vF)+1|0)!=(-1))){if(!(Us(b.value)?1:0))Fu(a.xg,ATn(c,0,Long_add(new Long(596067632, 383),Long_fromInt(A0H(b.value)))));else if(a.C5)Fu(a.xg,ATn(c,1,Long_fromInt(-1)));}b.continue();return;}CM(a.El,CX(a.yZ.data[0]));}
function A7j(a){AMG(a);}
function Rj(){var a=this;D.call(a);a.DL=null;a.wK=null;}
function AK8(a){CM(a.DL,CX(a.wK.data[0]<=0?(-1):a.wK.data[0]));}
function A1G(a){AK8(a);}
function Er(){D.call(this);}
function E6(a,b,c,d){return;}
function Ra(){Er.call(this);}
function GX(){var a=new Ra();A6Z(a);return a;}
function A6Z(a){return;}
function AEJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,3)+4|0;h=1;if(e>=1){i=e+g|0;if((i+1|0)<=128){j=(e+1|0)+g|0;k=j-2|0;l=e;a:while(true){if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;while(o<=(d+n
|0)&&h){p=f-n|0;while(p<=(f+n|0)&&h){if(l>=0&&l<128)break a;h=0;p=p+1|0;}o=o+1|0;}l=l+1|0;}$p=7;continue _;}}return 0;case 1:$z=ACt(b,d,m,f);if(C()){break _;}k=$z;L();if(!(k!=BeQ.b&&k!=BeR.b)&&e<((128-g|0)-1|0)){k=BeR.b;$p=2;continue _;}return 0;case 2:ALr(b,d,m,f,k);if(C()){break _;}k=(e-3|0)+g|0;b:while(true){if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;while(r<=l){j=r-d|0;s=m;while(s<=h){t=s-f|0;if(H_(j)!=q)break b;if(H_(t)!=q)break b;if(E(c,
2)&&o)break b;s=s+1|0;}r=r+1|0;}k=k+1|0;}u=Bgz.data;$p=5;continue _;case 3:$z=ACt(b,d,o,f);if(C()){break _;}m=$z;if(m&&m!=Be2.b){k=k+1|0;if(k>=g)return 1;o=e+k|0;continue _;}m=Be1.b;$p=4;case 4:ALr(b,d,o,f,m);if(C()){break _;}k=k+1|0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;case 5:$z=ACt(b,r,k,s);if(C()){break _;}t=$z;if(!u[t]){t=Be2.b;$p=6;continue _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h
=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(H_(j)!=q)break;if(H_(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=Bgz.data;continue _;case 6:ALr(b,r,k,s,t);if(C()){break _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(H_(j)!=q)break;if(H_(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=Bgz.data;$p=5;continue _;case 7:$z=ACt(b,o,l,p);if(C()){break _;}r
=$z;if(r){L();if(r!=Be2.b)h=0;}while(true){p=p+1|0;while(!(p<=(f+n|0)&&h)){o=o+1|0;while(!(o<=(d+n|0)&&h)){l=l+1|0;if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;}p=f-n|0;}if(l>=0&&l<128)break;h=0;}continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function Oq(){D.call(this);this.Jw=0;}
var Bm3=null;var Bm4=null;function AX0(a){var b=new Oq();AN_(b,a);return b;}
function AN_(a,b){a.Jw=b;}
function K1(b){return !b?Bm4:Bm3;}
function AHM(){Bm3=AX0(1);Bm4=AX0(0);}
function SH(){var a=this;CS.call(a);a.z_=null;a.fS=null;a.xy=0;a.f4=0;}
function AD2(a){DG(a.bH);APT(1);S(a.bH,Dj(0,(a.bm/2|0)-100|0,(a.bE/4|0)+120|0,B(596)));}
function ANG(a){APT(0);}
function AYr(a){a.xy=a.xy+1|0;}
function AHf(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gB&&!b.cl){b=a.fS;$p=1;continue _;}return;case 1:ACc(b);if(C()){break _;}c=a.I;b=null;$p=2;case 2:ADS(c,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function ACV(a,b,c){var d,e;if(c==200)a.f4=(a.f4-1|0)&3;if(!(c!=208&&c!=28))a.f4=(a.f4+1|0)&3;if(c==14&&Bh(a.fS.gr.data[a.f4])>0)a.fS.gr.data[a.f4]=Ev(a.fS.gr.data[a.f4],0,Bh(a.fS.gr.data[a.f4])-1|0);if(Uy(B(888),b)>=0&&Bh(a.fS.gr.data[a.f4])<15){d=a.fS.gr.data;c=a.f4;e=new T;V(e);e=H(e,a.fS.gr.data[a.f4]);Dx(e,b);d[c]=U(e);}}
function ABo(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABd(a);if(C()){break _;}DE(a,a.b0,a.z_,a.bm/2|0,40,16777215);B3();Bw(a.bm/2|0,a.bE/2|0,50.0);CC((-60.0),(-60.0),(-60.0));Bv(180.0,0.0,1.0,0.0);if(!((a.xy/6|0)%2|0))a.fS.rA=a.f4;e=a.fS;$p=2;case 2:$z=AMe(e);if(C()){break _;}f=$z;Bv((f*360|0)/16.0,0.0,1.0,0.0);e=Bkq;g=a.fS;h=(-0.5);i=(-0.75);j
=(-0.5);k=0.0;$p=3;case 3:AFm(e,g,h,i,j,k);if(C()){break _;}a.fS.rA=(-1);BD();$p=4;case 4:AFC(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function IG(){EY.call(this);this.z8=0;}
var Bkv=null;var Bkw=null;var Bm5=null;function A_L(a,b,c){var d=new IG();AG1(d,a,b,c);return d;}
function AG1(a,b,c,d){FP(a,b,c);a.z8=d;}
function AFt(){var b,c;Bkv=A_L(B(889),0,15);Bkw=A_L(B(890),1,0);b=J(IG,2);c=b.data;c[0]=Bkv;c[1]=Bkw;Bm5=b;}
function MC(){var a=this;D.call(a);a.ng=null;a.nT=null;}
function AZ3(a){return a.nT;}
function S3(a,b){var c;c=a.nT;a.nT=b;return c;}
function AXB(a){return a.ng;}
function Lb(){var a=this;MC.call(a);a.da=null;a.dj=null;a.lC=0;a.jm=0;}
function MZ(a){var b;b=LQ(a);if(b==2){if(LQ(a.dj)<0)a.dj=OR(a.dj);return Pw(a);}if(b!=(-2))return a;if(LQ(a.da)>0)a.da=Pw(a.da);return OR(a);}
function LQ(a){return (a.dj===null?0:a.dj.lC)-(a.da===null?0:a.da.lC)|0;}
function OR(a){var b;b=a.da;a.da=b.dj;b.dj=a;FL(a);FL(b);return b;}
function Pw(a){var b;b=a.dj;a.dj=b.da;b.da=a;FL(a);FL(b);return b;}
function FL(a){var b,c;b=a.dj===null?0:a.dj.lC;c=a.da===null?0:a.da.lC;a.lC=DC(b,c)+1|0;a.jm=1;if(a.da!==null)a.jm=a.jm+a.da.jm|0;if(a.dj!==null)a.jm=a.jm+a.dj.jm|0;}
function AOk(a,b){return b?a.dj:a.da;}
function AMX(){var a=this;F_.call(a);a.kq=null;a.g2=0;}
function BbK(a){var b=new AMX();A6m(b,a);return b;}
function A6m(a,b){K9(a,b);a.kq=$rt_createByteArray(8192);}
function AYs(a){MG(a);a.fm.ls();}
function AXZ(a,b,c,d){var e,f,g;e=a.kq;if(e!==null&&d>=e.data.length){MG(a);a.fm.gu(b,c,d);return;}if(b===null){f=new EE;Bl(f,B(891));M(f);}if(c>=0&&c<=(b.data.length-d|0)){if(d<0){g=new N$;f=new T;V(f);Bl(g,U(Be(H(f,B(892)),d)));M(g);}if(e===null){f=new B1;O(f);M(f);}if(d>=(e.data.length-a.g2|0))MG(a);Di(b,c,e,a.g2,d);a.g2=a.g2+d|0;return;}g=new N$;f=new T;V(f);Bl(g,U(Be(H(f,B(893)),c)));M(g);}
function A36(a){var b,$$je;if(a.kq===null)return;a:{try{KO(a);}catch($$e){$$je=Bi($$e);b=$$je;break a;}a.kq=null;return;}a.kq=null;M(b);}
function AXj(a,b){var c,d,e,f;c=a.kq;if(c===null){d=new B1;O(d);M(d);}e=c.data;if(a.g2==e.length){a.fm.gu(c,0,a.g2);a.g2=0;}f=a.g2;a.g2=f+1|0;e[f]=b<<24>>24;}
function MG(a){if(a.g2>0){a.fm.gu(a.kq,0,a.g2);a.g2=0;}}
function WO(){D.call(this);}
function Bm6(){var a=new WO();AXX(a);return a;}
function AXX(a){return;}
function AI3(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p
=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ex(b,d,e,f,B(894),4.0,(1.0+(N(b.r)-N(b.r))*0.20000000298023224)*0.699999988079071);h=F7();i=16;j=0;k=15.0;a:while(true){if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D3(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;while(n<i){o=0;while(o<i){if(!(j&&j!=15&&n&&n!=15&&o&&o!=15)){r=j/k*2.0-1.0;s=n/k*2.0-1.0;t
=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.r)*0.6000000238418579);y=0.30000001192092896;z=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;if(x>0.0)break a;}o=o+1|0;}n=n+1|0;}j=j+1|0;}bc=K(l);bd=K(v);be=K(w);$p=9;continue _;case 1:$z=ADI(b,c,q);if(C()){break _;}q=$z;bf=BY(d,e,f);bg=0;while(true){if(bg>=De(q)){bh=Ci();DD(bh,h);bi=De(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eD;bl=bk.eY;bm=bk.eE;$p=4;continue _;}bn=
Z(q,bg);bj=Sf(bn,d,e,f)/l;if(bj<=1.0)break;bg=bg+1|0;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;case 2:$z=ADy(b,bf,bh);if(C()){break _;}x=$z;bs=x;bt=(1.0-bj)*bs;m=(bt*bt+bt)/2.0*8.0*l+1.0|0;$p=3;case 3:bn.fq(c,m);if(C()){break _;}bn.g=bn.g+v*bt;bn.i=bn.i+w*bt;bn.h=bn.h+z*bt;while(true){bg=bg+1|0;if(bg>=De(q)){bh=Ci();DD(bh,h);bi=De(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eD;bl=bk.eY;bm=bk.eE;$p=4;continue _;}bn=Z(q,bg);bj=Sf(bn,d,
e,f)/l;if(bj>1.0)continue;else break;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;continue _;case 4:$z=ACt(b,m,bl,bm);if(C()){break _;}bu=$z;bv=0;y=m;bw=bl;x=bm;while(bv<1){bq=y+N(b.r);l=bw+N(b.r);v=x+N(b.r);w=bq-d;z=l-e;ba=v-f;bb=Ce(w*w+z*z+ba*ba);w=w/bb;z=z/bb;ba=ba/bb;bb=0.5/(bb/r+0.1)*(N(b.r)*N(b.r)+0.30000001192092896);w=w*bb;z=z*bb;ba=ba*bb;BV(b,B(223),(bq+s)/2.0,(l+u)/2.0,(v+bj)/2.0,w,z,ba);BV(b,B(256),bq,l,v,w,z,ba);bv=bv+1|0;}if(bu>0){L();c=BeO.data[bu];$p
=5;continue _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eD;bl=bk.eY;bm=bk.eE;continue _;case 5:$z=AEH(b,m,bl,bm);if(C()){break _;}bv=$z;g=0.30000001192092896;$p=6;case 6:c.HO(b,m,bl,bm,bv,g);if(C()){break _;}bv=0;$p=7;case 7:APv(b,m,bl,bm,bv);if(C()){break _;}c=BeO.data[bu];$p=8;case 8:c.sK(b,m,bl,bm);if(C()){break _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eD;bl=bk.eY;bm=bk.eE;$p=4;continue _;case 9:$z=ACt(b,bc,bd,be);if(C()){break _;}bx=$z;if(bx>0){L();x=x-(BeO.data[bx].ym(c)+0.30000001192092896)
*y;}if(x>0.0)Xd(h,CO(bc,bd,be));l=l+z;v=v+ba;w=w+bb;x=x-0.22500000894069672;while(x<=0.0){while(true){o=o+1|0;while(o>=i){n=n+1|0;while(n>=i){j=j+1|0;if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D3(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;}o=0;}if(!j)break;if(j==15)break;if(!n)break;if(n==15)break;if(!o)break;if(o!=15)continue;else break;}r=j/k*2.0-1.0;s=n/k*2.0-1.0;t=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.r)*0.6000000238418579);y=0.30000001192092896;z
=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;}bc=K(l);bd=K(v);be=K(w);continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p);}
function N$(){BO.call(this);}
function Bm7(){var a=new N$();AVT(a);return a;}
function AVT(a){O(a);}
function ARi(){Er.call(this);}
function AYl(){var a=new ARi();A0T(a);return a;}
function A0T(a){return;}
function XK(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,2)+2|0;h=E(c,2)+2|0;i=0;j=(d-g|0)-1|0;k=(d+g|0)+1|0;l=e-1|0;m=e+3|0;n=m+1|0;o=(f-h|0)-1|0;p=(f+h|0)+1|0;q=j;a:while(true){r=R(q,
k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgU.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;while(true){t=R(s,n);if(t>0)break;v=o;w=R(v,p);if(w<=0)break a;s=s+1|0;}q=q+1|0;}$p=1;case 1:$z
=ABX(b,q,s,v);if(C()){break _;}x=$z;if(s==l&&!x.du())return 0;if(!t&&!x.du())return 0;if(!(q!=j&&r&&v!=o&&w)&&s==e){$p=5;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;c:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgU.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break c;t
=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}continue _;case 2:APv(b,d,e,f,k);if(C()){break _;}$p=3;case 3:$z=ANw(b,d,e,f);if(C()){break _;}b=$z;b.jJ=ADD(a,c);return 1;case 4:$z=ACt(b,o,e,j);if(C()){break _;}r=$z;if(!r){u=0;r=o-1|0;$p=6;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=BgU.b;$p=2;continue _;case 5:$z=ACt(b,q,s,v);if(C()){break _;}u
=$z;if(!u){u=s+1|0;$p=7;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgU.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q
=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 6:$z=ABX(b,r,e,j);if(C()){break _;}x=$z;if(x.du())u=1;r=o+1|0;$p=10;continue _;case 7:$z=ACt(b,q,u,v);if(C()){break _;}u=$z;if(!u)i=i+1|0;v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;d:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgU.b;$p=2;continue _;}t
=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break d;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 8:$z=ABX(b,r,t,v);if(C()){break _;}x=$z;if(x.du()){if(!u&&E(c,4)){L();q=Be5.b;$p=14;continue _;}L();q=BeY.b;$p=12;continue _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while
(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgU.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){continue _;}q=t-1|0;$p=9;case 9:$z=ABX(b,r,q,v);if(C()){break _;}x=$z;if(x.du()){$p=8;continue _;}q=0;$p=11;continue _;case 10:$z=ABX(b,r,e,j);if(C()){break _;}x=$z;if(x.du())u=u+1|0;r=j-1|0;$p=13;continue _;case 11:APv(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r
=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgU.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 12:APv(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)
|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgU.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 13:$z=ABX(b,o,e,r);if(C()){break _;}x=$z;if(x.du())u=u+1|0;r=j+1|0;$p=16;continue _;case 14:APv(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g
|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgU.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 15:APv(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgU.b;$p=2;continue _;}t=m;}v=o;}if(r!=j
&&u&&v!=o&&s&&t!=n&&i){q=0;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 16:$z=ABX(b,o,e,r);if(C()){break _;}x=$z;if(x.du())u=u+1|0;if(u==1){L();r=BgW.b;$p=17;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=BgU.b;$p=2;continue _;case 17:APv(b,o,e,j,r);if(C()){break _;}$p=18;case 18:$z=ANw(b,o,e,j);if(C()){break _;}x=$z;y=x;n=0;while(n<8){z=AHl(a,c);if(z!==null)AHy(y,E(c,k),z);n=n+1|0;}while(true){q=q+1|0;if(q
>=2)break;l=0;if(l>=3)continue;else{o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}}L();k=BgU.b;$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AHl(a,b){var c,d;a:{c=E(b,10);if(!c){d=new Cd;BB();DB(d,BiH);break a;}if(c==1){d=new Cd;BB();Gm(d,BhP,E(b,4)+1|0);break a;}if(c==2){d=new Cd;BB();DB(d,Bie);break a;}if(c==3){d=new Cd;BB();Gm(d,BhC,E(b,4)+1|0);break a;}if(c==4){d=new Cd;BB();Gm(d,Bgd,E(b,4)+1|0);break a;}if(c==5){d=new Cd;BB();Gm(d,Bge,E(b,4)+1|0);break a;}if(c==6){d=new Cd;BB();DB(d,BiD);break a;}if(c==7&&!E(b,100)){d=new Cd;BB();DB(d,BiB);break a;}d=null;}return d;}
function ADD(a,b){var c;c=E(b,4);return !c?B(856):c==1?B(859):c==2?B(859):c!=3?B(3):B(857);}
function Ch(){var a=this;Er.call(a);a.zS=0;a.c2=0;}
function Bm8(a,b){var c=new Ch();Cm(c,a,b);return c;}
function Cm(a,b,c){a.zS=b;a.c2=c;}
function ABO(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=N(c)*3.1415927410125732;h=d+8|0;i=h+Bq(g)*a.c2/8.0;j=
h-Bq(g)*a.c2/8.0;h=f+8|0;k=h+BC(g)*a.c2/8.0;l=h-BC(g)*a.c2/8.0;m=(e+E(c,3)|0)+2|0;n=(e+E(c,3)|0)+2|0;o=0;j=j-i;n=n-m;p=l-k;while(o<=a.c2){q=o;r=i+j*q/a.c2;s=m+n*q/a.c2;t=k+p*q/a.c2;q=Cl(c)*a.c2/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c2)+1.0)*q+1.0;v=(Bq(h/a.c2)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;while(w<=e){ba=f;while(ba<=x){bb=y;while(bb<=z){bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be<1.0){$p=1;continue _;}bb=bb+1|0;}ba=ba+1|0;}w=w+1|0;}o=o+1|0;}return 1;case 1:$z
=ACt(b,w,ba,bb);if(C()){break _;}bf=$z;L();if(bf==BeU.b){d=a.zS;$p=2;continue _;}a:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c2)break a;q=o;r=i+j*q/a.c2;s=m+n*q/a.c2;t=k+p*q/a.c2;q=Cl(c)*a.c2/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c2)+1.0)*q+1.0;v=(Bq(h/a.c2)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{continue _;}}return 1;case 2:ALr(b,
w,ba,bb,d);if(C()){break _;}b:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c2)break b;q=o;r=i+j*q/a.c2;s=m+n*q/a.c2;t=k+p*q/a.c2;q=Cl(c)*a.c2/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c2)+1.0)*q+1.0;v=(Bq(h/a.c2)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{$p=1;continue _;}}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p);}
function BS(){Er.call(this);this.uc=0;}
function Bm9(a){var b=new BS();BT(b,a);return b;}
function BT(a,b){a.uc=b;}
function ACL(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;case 1:$z=ACt(b,h,i,j);if(C()){break _;}k=$z;if(!k){L();l=BeO.data[a.uc];$p=2;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;continue _;case 2:$z
=l.G8(b,h,i,j);if(C()){break _;}k=$z;if(k){k=a.uc;$p=3;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;case 3:ALr(b,h,i,j,k);if(C()){break _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Cn(){Er.call(this);this.EP=0;}
function Bm$(a){var b=new Cn();Cs(b,a);return b;}
function Cs(a,b){a.EP=b;}
function ALZ(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e+1|0;$p=1;case 1:$z=ACt(b,d,g,f);if(C()){break _;}g=$z;L();if(g!=BeU.b)return 0;g=e-1|0;$p=2;case 2:$z=ACt(b,d,g,f);if(C()){break _;}h=$z;if(h!=BeU.b)return 0;$p=3;case 3:$z=ACt(b,d,e,f);if(C()){break _;}g=$z;if(g){$p=5;continue _;}g=0;h=d-1|0;$p=4;case 4:$z=ACt(b,h,e,f);if(C()){break _;}i
=$z;if(i==BeU.b)g=1;i=d+1|0;$p=6;continue _;case 5:$z=ACt(b,d,e,f);if(C()){break _;}g=$z;if(g!=BeU.b)return 0;g=0;h=d-1|0;$p=4;continue _;case 6:$z=ACt(b,i,e,f);if(C()){break _;}j=$z;if(j==BeU.b)g=g+1|0;k=f-1|0;$p=7;case 7:$z=ACt(b,d,e,k);if(C()){break _;}j=$z;if(j==BeU.b)g=g+1|0;j=f+1|0;$p=8;case 8:$z=ACt(b,d,e,j);if(C()){break _;}l=$z;if(l==BeU.b)g=g+1|0;l=0;$p=9;case 9:$z=ACt(b,h,e,f);if(C()){break _;}h=$z;if(!h)l=1;$p=10;case 10:$z=ACt(b,i,e,f);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=11;case 11:$z=ACt(b,
d,e,k);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=12;case 12:$z=ACt(b,d,e,j);if(C()){break _;}h=$z;if(!h)l=l+1|0;if(g==3&&l==1){g=a.EP;$p=13;continue _;}return 1;case 13:APv(b,d,e,f,g);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Sw(){C0.call(this);}
function Y7(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;a.i=a.i+0.002;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARD(a,b,c,d);if(C()){break _;}a.g=a.g*0.8500000238418579;a.i=a.i*0.8500000238418579;a.h=a.h*0.8500000238418579;e=a.m;f=K(a.d);g=K(a.j);h=K(a.e);$p=2;case 2:$z=ABX(e,f,g,h);if(C()){break _;}e=$z;if(e!==BfP){$p=3;continue _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;continue _;case 3:Ca(a);if
(C()){break _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;case 4:Ca(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFn(){C0.call(this);this.Co=0.0;}
function A79(a,b,c,d,e){var f=new AFn();AV1(f,a,b,c,d,e);return f;}
function AV1(a,b,c,d,e,f){var g;FA(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.10000000149011612;a.i=a.i*0.10000000149011612;a.h=a.h*0.10000000149011612;g=BP()*0.30000001192092896;a.io=g;a.ic=g;a.hY=g;a.dq=a.dq*0.75;a.dq=a.dq*f;a.Co=a.dq;a.cw=8.0/(BP()*0.8+0.2)|0;a.cw=a.cw*f|0;a.o3=0;}
function AJ6(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dp+c)/a.cw*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.dq=a.Co*i;$p=1;case 1:ANs(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALR(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e5=7-((a.dp*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARD(a,c,d,e);if(C()){break _;}if(a.j===a.cR){a.g=a.g*1.1;a.h=a.h*1.1;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if
(C()){break _;}a.e5=7-((a.dp*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,$p);}
function QY(){C0.call(this);}
function AR6(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANs(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AEQ(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e5=7-((a.dp*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARD(a,c,d,e);if(C()){break _;}a.g=a.g*0.8999999761581421;a.i=a.i*0.8999999761581421;a.h=a.h*0.8999999761581421;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}a.e5=7-
((a.dp*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,$p);}
function OZ(){C0.call(this);this.DM=0.0;}
function AQG(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dp+c)/a.cw;a.dq=a.DM*(1.0-i*i*0.5);$p=1;case 1:ANs(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ASr(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=(a.dp+b)/a.cw;if(c<0.0)c=0.0;if(c>1.0)c=1.0;$p=1;case 1:$z=ADF(a,b);if(C()){break _;}d=$z;return d*c+1.0-c;default:E_();}}C3().s(a,b,c,d,$p);}
function AAO(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=2;continue _;}c=a.g;d=a.i;e=a.h;$p=1;case 1:ARD(a,c,d,e);if(C()){break _;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E_();}}C3().s(a,
b,c,d,e,$p);}
function AAZ(){C0.call(this);this.yP=0.0;}
function BcH(a,b,c,d){var e=new AAZ();A1J(e,a,b,c,d);return e;}
function A1J(a,b,c,d,e){FA(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=N(a.n)*0.4000000059604645+0.05000000074505806;a.io=1.0;a.ic=1.0;a.hY=1.0;a.dq=a.dq*(N(a.n)*2.0+0.20000000298023224);a.yP=a.dq;a.cw=16.0/(BP()*0.8+0.2)|0;a.o3=0;a.e5=49;}
function AJ7(a,b){return 1.0;}
function AGR(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dp+c)/a.cw;a.dq=a.yP*(1.0-i*i);$p=1;case 1:ANs(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALh(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cR=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=1;continue _;}c=a.dp/a.cw;if(N(a.n)>c)BV(a.m,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;continue _;case 1:Ca(a);if(C()){break _;}c=a.dp/a.cw;if(N(a.n)>c)BV(a.m,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;case 2:ARD(a,d,e,f);if(C()){break _;}a.g
=a.g*0.9990000128746033;a.i=a.i*0.9990000128746033;a.h=a.h*0.9990000128746033;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ARA(){JL.call(this);}
function Bcu(a,b,c,d,e,f,g){var h=new ARA();AVN(h,a,b,c,d,e,f,g);return h;}
function AVN(a,b,c,d,e,f,g,h){TI(a,b,c,d,e);a.m4=0.03999999910593033;a.e5=a.e5+1|0;if(g===0.0&&!(f===0.0&&h===0.0)){a.g=f;a.i=g+0.1;a.h=h;}}
function AIo(){D.call(this);}
function Bm_(){var a=new AIo();AWP(a);return a;}
function AWP(a){return;}
function H4(){var a=this;D.call(a);a.di=null;a.bu=0;a.bq=0;a.bt=0;a.fQ=0;a.bF=null;a.e3=null;}
function Bna(a,b,c,d,e){var f=new H4();YN(f,a,b,c,d,e);return f;}
function YN(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e3=b;a.bF=Ci();a.di=c;a.bu=d;a.bq=e;a.bt=f;$p=1;case 1:$z=AEH(c,d,e,f);if(C()){break _;}d=$z;a.fQ=d;KY(a);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function KY(a){a:{DG(a.bF);if(!a.fQ){S(a.bF,CO(a.bu,a.bq,a.bt-1|0));S(a.bF,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fQ==1){S(a.bF,CO(a.bu-1|0,a.bq,a.bt));S(a.bF,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fQ==2){S(a.bF,CO(a.bu-1|0,a.bq,a.bt));S(a.bF,CO(a.bu+1|0,a.bq+1|0,a.bt));break a;}if(a.fQ==3){S(a.bF,CO(a.bu-1|0,a.bq+1|0,a.bt));S(a.bF,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fQ==4){S(a.bF,CO(a.bu,a.bq+1|0,a.bt-1|0));S(a.bF,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fQ==5){S(a.bF,CO(a.bu,a.bq,a.bt-1|0));S(a.bF,CO(a.bu,a.bq
+1|0,a.bt+1|0));break a;}if(a.fQ==6){S(a.bF,CO(a.bu+1|0,a.bq,a.bt));S(a.bF,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fQ==7){S(a.bF,CO(a.bu-1|0,a.bq,a.bt));S(a.bF,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fQ==8){S(a.bF,CO(a.bu-1|0,a.bq,a.bt));S(a.bF,CO(a.bu,a.bq,a.bt-1|0));break a;}if(a.fQ!=9)break a;S(a.bF,CO(a.bu+1|0,a.bq,a.bt));S(a.bF,CO(a.bu,a.bq,a.bt-1|0));}}
function AFE(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=a.bF.p)return;c=Z(a.bF,b);$p=1;case 1:$z=AQ6(a,c);if(C()){break _;}c=$z;if(c!==null&&SN(c,a)){Q8(a.bF,b,CO(c.bu,c.bq,c.bt));d=b;}else{c=a.bF;d=b+(-1)|0;En(c,b);}b=d+1|0;if(b>=a.bF.p)return;c=Z(a.bF,b);continue _;default:E_();}}C3().s(a,b,c,d,$p);}
function AQ6(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.di;d=b.eD;e=b.eY;f=b.eE;$p=1;case 1:$z=ACt(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e3.b){c=a.di;d=b.eD;e=b.eY+1|0;f=b.eE;$p=2;continue _;}c=new H4;g=a.e3;h=a.di;d=b.eD;e=b.eY;f=b.eE;$p=3;continue _;case 2:$z=ACt(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e3.b){c=a.di;d=b.eD;e=b.eY-1|0;f=b.eE;$p=4;continue _;}c=new H4;g=a.e3;h=a.di;d
=b.eD;e=b.eY+1|0;f=b.eE;$p=5;continue _;case 3:YN(c,g,h,d,e,f);if(C()){break _;}return c;case 4:$z=ACt(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e3.b){c=null;return c;}c=new H4;g=a.e3;h=a.di;e=b.eD;d=b.eY-1|0;f=b.eE;$p=6;continue _;case 5:YN(c,g,h,d,e,f);if(C()){break _;}return c;case 6:YN(c,g,h,e,d,f);if(C()){break _;}return c;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function SN(a,b){var c,d;c=0;while(c<a.bF.p){d=Z(a.bF,c);if(d.eD==b.bu&&d.eE==b.bt)return 1;c=c+1|0;}return 0;}
function KM(a,b,c,d){var e,f;e=0;while(e<a.bF.p){f=Z(a.bF,e);if(f.eD==b&&f.eE==d)return 1;e=e+1|0;}return 0;}
function O3(a,b){var c;if(SN(a,b))return 1;if(a.bF.p==2)return 0;if(!a.bF.p)return 1;c=Z(a.bF,0);return b.bq==a.bq&&c.eY==a.bq?1:1;}
function ARK(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:S(a.bF,CO(b.bu,b.bq,b.bt));c=KM(a,a.bu,a.bq,a.bt-1|0);d=KM(a,a.bu,a.bq,a.bt+1|0);e=KM(a,a.bu-1|0,a.bq,a.bt);f=KM(a,a.bu+1|0,a.bq,a.bt);g=(-1);if(!(!c&&!d))g=0;if(!(!e&&!f))g=1;if(d&&f&&!c&&!e)g=6;if(d&&e&&!c&&!f)g=7;if(c&&e&&!d&&!f)g=8;if(c&&f&&!d&&!e)g=9;if(!g){b=a.di;c=a.bu;d=a.bq+1|0;e=a.bt-1|0;$p=1;continue _;}if(g==1){b=a.di;c=a.bu+1|0;d
=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.di;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 1:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e3.b)g=4;b=a.di;c=a.bu;d=a.bq+1|0;e=a.bt+1|0;$p=3;continue _;case 2:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e3.b)g=2;b=a.di;c=a.bu-1|0;d=a.bq+1|0;e=a.bt;$p=4;continue _;case 3:$z=ACt(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e3.b)g=5;if(g==1){b=a.di;c=a.bu+1|0;d=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.di;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 4:$z=ACt(b,
c,d,e);if(C()){break _;}c=$z;if(c==a.e3.b)g=3;if(g<0)g=0;b=a.di;c=a.bu;d=a.bq;e=a.bt;$p=5;case 5:AKv(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AI0(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=CO(b,c,d);$p=1;case 1:$z=AQ6(a,e);if(C()){break _;}e=$z;if(e===null)return 0;$p=2;case 2:AFE(e);if(C()){break _;}return O3(e,a);default:E_();}}C3().s(a,b,c,d,e,$p);}
function YM(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bu;c=a.bq;d=a.bt-1|0;$p=1;case 1:$z=AI0(a,b,c,d);if(C()){break _;}d=$z;b=a.bu;c=a.bq;e=a.bt+1|0;$p=2;case 2:$z=AI0(a,b,c,e);if(C()){break _;}b=$z;c=a.bu-1|0;e=a.bq;f=a.bt;$p=3;case 3:$z=AI0(a,c,e,f);if(C()){break _;}c=$z;e=a.bu+1|0;f=a.bq;g=a.bt;$p=4;case 4:$z=AI0(a,e,f,g);if(C()){break _;}e=$z;f=(-1);if(!(!d&&!b))f=0;if(!(!c&&
!e))f=1;if(b&&e&&!d&&!c)f=6;if(b&&c&&!d&&!e)f=7;if(d&&c&&!b&&!e)f=8;if(d&&e&&!b&&!c)f=9;if(!f){h=a.di;d=a.bu;b=a.bq+1|0;c=a.bt-1|0;$p=5;continue _;}if(f==1){h=a.di;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fQ=f;KY(a);h=a.di;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 5:$z=ACt(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e3.b)f=4;h=a.di;d=a.bu;b=a.bq+1|0;c=a.bt+1|0;$p=7;continue _;case 6:$z=ACt(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e3.b)f=2;h=a.di;d=a.bu-1|0;b=a.bq+1|0;c=a.bt;$p=8;continue _;case 7:$z
=ACt(h,d,b,c);if(C()){break _;}b=$z;if(b==a.e3.b)f=5;if(f==1){h=a.di;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fQ=f;KY(a);h=a.di;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 8:$z=ACt(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e3.b)f=3;if(f<0)f=0;a.fQ=f;KY(a);h=a.di;d=a.bu;b=a.bq;c=a.bt;$p=9;case 9:AKv(h,d,b,c,f);if(C()){break _;}g=0;if(g>=a.bF.p)return;h=Z(a.bF,g);$p=10;case 10:$z=AQ6(a,h);if(C()){break _;}h=$z;if(h!==null){$p=11;continue _;}g=g+1|0;if(g>=a.bF.p)return;h=Z(a.bF,g);continue _;case 11:AFE(h);if
(C()){break _;}if(O3(h,a)){$p=12;continue _;}g=g+1|0;if(g>=a.bF.p)return;h=Z(a.bF,g);$p=10;continue _;case 12:ARK(h,a);if(C()){break _;}g=g+1|0;if(g>=a.bF.p)return;h=Z(a.bF,g);$p=10;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Vd(){var a=this;D.call(a);a.pa=null;a.FY=0;a.mc=0;}
function AP2(a){a.mc=a.mc+1|0;}
function ANm(a){return a.mc<a.pa.data.length?0:1;}
function Sn(a,b){return BY(a.pa.data[a.mc].ia+(b.c0+1.0|0)*0.5,a.pa.data[a.mc].hV,a.pa.data[a.mc].il+(b.c0+1.0|0)*0.5);}
function AB$(){var a=this;D.call(a);a.x5=null;a.j5=null;a.q3=null;a.l_=null;}
function A2F(a){var b=new AB$();A6p(b,a);return b;}
function A6p(a,b){a.j5=Bb9();a.q3=Dd();a.l_=J(HP,32);a.x5=b;}
function APp(a,b,c,d){return O5(a,b,c.d,c.L.M,c.e,d);}
function AF$(a,b,c,d,e,f){return O5(a,b,c+0.5,d+0.5,e+0.5,f);}
function O5(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;Ux(a.j5);U5(a.q3);g=IS(a,K(b.L.R),K(b.L.M),K(b.L.S));h=IS(a,K(c-b.c0/2.0),K(d),K(e-b.c0/2.0));i=A0x(K3(b.c0+1.0),K3(b.eM+1.0),K3(b.c0+1.0));g.my=0.0;g.pg=E1(g,h);g.i2=g.pg;Ux(a.j5);WM(a.j5,g);j=g;a:{while(true){if(AB9(a.j5)){if(j!==g){k=UJ(a,g,j);break a;}k=null;break a;}l=ARz(a.j5);if(l.mV==h.mV)break;if(E1(l,h)<E1(j,h))j=l;l.nu=1;m=AJM(a,b,l,i,h,f);n=0;while(n<m){k=a.l_.data[n];o=l.my+E1(l,k);if(!(Ps(k)&&o>=k.my)){k.o1=l;k.my=o;k.pg=E1(k,h);if(Ps(k))ABl(a.j5,
k,k.my+k.pg);else{k.i2=k.my+k.pg;WM(a.j5,k);}}n=n+1|0;}}k=UJ(a,g,h);}return k;}
function AJM(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;if(J3(a,b,c.ia,c.hV+1|0,c.il,d)>0)g=1;h=Kz(a,b,c.ia,c.hV,c.il+1|0,d,g);i=Kz(a,b,c.ia-1|0,c.hV,c.il,d,g);j=Kz(a,b,c.ia+1|0,c.hV,c.il,d,g);k=Kz(a,b,c.ia,c.hV,c.il-1|0,d,g);if(h===null)l=0;else if(h.nu)l=0;else if(E1(h,e)>=f)l=0;else{m=a.l_.data;l=1;m[0]=h;}if(i===null)n=l;else if(i.nu)n=l;else if(E1(i,e)>=f)n=l;else{m=a.l_.data;n=l+1|0;m[l]=i;}if(j===null)o=n;else if(j.nu)o=n;else if(E1(j,e)>=f)o=n;else{m=a.l_.data;o=n+1|0;m[n]=j;}if(k===null)n=o;else if(k.nu)n
=o;else if(E1(k,e)>=f)n=o;else{m=a.l_.data;n=o+1|0;m[o]=k;}return n;}
function Kz(a,b,c,d,e,f,g){var h,i,j,k;h=null;if(J3(a,b,c,d,e,f)>0)h=IS(a,c,d,e);if(h===null){g=d+g|0;if(J3(a,b,c,g,e,f)>0)h=IS(a,c,g,e);}if(h!==null){i=0;a:{while(true){if(d<=0)break a;j=J3(a,b,c,d-1|0,e,f);if(j<=0)break a;if(j<0)return null;i=i+1|0;if(i>=4)break;d=d+(-1)|0;}return null;}if(d>0)h=IS(a,c,d,e);k=N1(a.x5,c,d-1|0,e);if(!(k!==BfP&&k!==BfQ))return null;}return h;}
function IS(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=CP(a.q3,CX(e));if(f===null){f=A0x(b,c,d);BR(a.q3,CX(e),f);}return f;}
function J3(a,b,c,d,e,f){var g,h,i,j;g=c;a:{while(g<(c+f.ia|0)){h=d;while(h<(d+f.hV|0)){i=e;while(i<(e+f.il|0)){j=N1(a.x5,c,d,e);if(j.uf())return 0;if(j===BfP)break a;if(j===BfQ)break a;i=i+1|0;}h=h+1|0;}g=g+1|0;}return 1;}return (-1);}
function UJ(a,b,c){var d,e,f,g;d=1;e=c;while(e.o1!==null){d=d+1|0;e=e.o1;}f=J(HP,d);g=f.data;d=d+(-1)|0;g[d]=c;while(c.o1!==null){c=c.o1;d=d+(-1)|0;g[d]=c;}b=new Vd;b.pa=f;b.FY=g.length;return b;}
function UY(){var a=this;C0.call(a);a.mv=null;a.hP=null;a.p8=0;a.rb=0;a.AQ=0.0;}
function AMg(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.p8+c)/a.rb;d=i*i;j=a.mv.d;k=a.mv.j;l=a.mv.e;m=a.hP.cr;n=a.hP.d-a.hP.cr;o=c;n=m+n*o;m=a.hP.b7+(a.hP.j-a.hP.b7)*o+a.AQ;o=a.hP.cs+(a.hP.e-a.hP.cs)*o;n=n-j;p=d;q=j+n
*p;r=k+(m-k)*p;p=l+(o-l)*p;s=K(q);t=K(r+a.c3/2.0);u=K(p);b=a.m;$p=1;case 1:$z=ANg(b,s,t,u);if(C()){break _;}v=$z;o=q-BkL;n=r-BkM;m=p-BkN;BU(v,v,v,1.0);b=Bgn;w=a.mv;o=o;n=n;m=m;d=a.mv.v;$p=2;case 2:AQC(b,w,o,n,m,d,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function AAH(a){a.p8=a.p8+1|0;if(a.p8==a.rb)Ca(a);}
function AUt(a){return 2;}
function Y2(){var a=this;D.call(a);a.d1=null;a.eV=0;}
function Bb9(){var a=new Y2();AZ$(a);return a;}
function AZ$(a){a.d1=J(HP,1024);a.eV=0;}
function WM(a,b){var c,d;if(b.gz>=0){b=new D2;Bl(b,B(895));M(b);}if(a.eV==a.d1.data.length){c=J(HP,a.eV<<1);Di(a.d1,0,c,0,a.eV);a.d1=c;}a.d1.data[a.eV]=b;b.gz=a.eV;d=a.eV;a.eV=d+1|0;UW(a,d);return b;}
function Ux(a){a.eV=0;}
function ARz(a){var b,c,d,e;b=a.d1.data[0];c=a.d1.data;d=a.d1.data;e=a.eV-1|0;a.eV=e;c[0]=d[e];a.d1.data[a.eV]=null;if(a.eV>0)OK(a,0);b.gz=(-1);return b;}
function ABl(a,b,c){var d;d=b.i2;b.i2=c;if(c>=d)OK(a,b.gz);else UW(a,b.gz);}
function UW(a,b){var c,d,e,f;c=a.d1.data[b];d=c.i2;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.d1.data[e];if(d>=f.i2)break;a.d1.data[b]=f;f.gz=b;b=e;}}a.d1.data[b]=c;c.gz=b;}
function OK(a,b){var c,d,e,f,g,h,i,j;c=a.d1.data[b];d=c.i2;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.eV)break;g=a.d1.data[e];h=g.i2;if(f>=a.eV){i=null;j=Infinity;}else{i=a.d1.data[f];j=i.i2;}if(h<j){if(h>=d)break a;a.d1.data[b]=g;g.gz=b;}else{if(j>=d)break a;a.d1.data[b]=i;i.gz=b;e=f;}b=e;}}a.d1.data[b]=c;c.gz=b;}
function AB9(a){return a.eV?0:1;}
function HP(){var a=this;D.call(a);a.ia=0;a.hV=0;a.il=0;a.mV=0;a.gz=0;a.my=0.0;a.pg=0.0;a.i2=0.0;a.o1=null;a.nu=0;}
function A0x(a,b,c){var d=new HP();A8I(d,a,b,c);return d;}
function A8I(a,b,c,d){a.gz=(-1);a.nu=0;a.ia=b;a.hV=c;a.il=d;a.mV=b|c<<10|d<<20;}
function E1(a,b){var c,d,e;c=b.ia-a.ia|0;d=b.hV-a.hV|0;e=b.il-a.il|0;return D_(c*c+d*d+e*e);}
function A3P(a,b){return b.mV!=a.mV?0:1;}
function AVj(a){return a.mV;}
function Ps(a){return a.gz<0?0:1;}
function AJh(){D.call(this);}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",4,"regex",3,"nio",6,"charset",3,"io",3,"lang",-1,"net",10,"minecraft",11,"src"]);
$rt_metadata([D,"Object",9,0,[],0,3,0,["fj",function(){return A4X(this);},"em",function(b){return QZ(this,b);},"gk",function(){return AUk(this);}],Jv,0,D,[],0,3,0,0,MO,0,D,[],3,3,0,0,FO,0,D,[MO],0,3,0,0,AJ5,0,D,[],4,0,0,0,T0,0,D,[],4,3,0,0,Db,0,D,[],3,3,0,0,DL,0,D,[],3,3,0,0,KX,0,D,[],3,3,0,0,B4,"String",9,D,[Db,DL,KX],0,3,0,["gk",function(){return AUg(this);},"em",function(b){return DA(this,b);},"fj",function(){return A8k(this);},"lM",function(b){return AVZ(this,b);}],D8,0,D,[],0,3,0,["lN",function(){return A0i(this);
}],Fh,0,D8,[],0,3,0,0,IZ,0,Fh,[],0,3,0,0,AMb,0,IZ,[],0,3,0,0,HJ,0,D,[Db,KX],0,0,0,["nw",function(b){MU(this,b);},"gk",function(){return U(this);}],Ir,0,D,[],3,3,0,0,T,0,HJ,[Ir],0,3,0,["xQ",function(b,c,d,e){return A6W(this,b,c,d,e);},"xi",function(b,c,d){return AVm(this,b,c,d);},"gk",function(){return BL(this);},"nw",function(b){AXJ(this,b);},"yg",function(b,c){return A7l(this,b,c);}],Fb,0,D,[Db],1,3,0,0,Gf,0,Fb,[DL],0,3,0,["fj",function(){return A26(this);},"em",function(b){return A_n(this,b);},"lM",function(b)
{return A60(this,b);}],IM,0,IZ,[],0,3,0,0,AOR,0,IM,[],0,3,0,0,ALD,0,IM,[],0,3,0,0,BE,0,D8,[],0,3,0,0,B6,"RuntimeException",9,BE,[],0,3,0,0,C_,0,D,[],3,3,0,0,He,0,D,[C_],3,3,0,0,Uk,0,D,[He],3,3,0,0,Qm,0,D,[He],3,3,0,0,U9,0,D,[He],3,3,0,0,Re,0,D,[He],3,3,0,0,Wf,0,D,[He,Uk,Qm,U9,Re],3,3,0,0,Pt,0,D,[],3,3,0,0,Lk,0,D,[C_],3,3,0,0,YG,0,D,[C_,Wf,Pt,Lk],1,3,0,["Ya",function(b,c){return AX4(this,b,c);},"a0d",function(b,c){return AYg(this,b,c);},"Se",function(b){return ATE(this,b);},"Od",function(b,c,d){return AY9(this,
b,c,d);},"Ms",function(b){return A1C(this,b);},"U7",function(){return AUC(this);},"Tu",function(b,c,d){return ASX(this,b,c,d);}],Bs,0,D,[],0,3,Bd,0,SP,0,D,[],3,3,0,0,Jy,0,D,[SP],3,3,0,0,NS,0,D,[],3,3,0,0,Hy,0,D,[Ir,Jy,NS],1,3,0,0,ABe,0,Hy,[],0,3,0,0,Lt,0,Hy,[],0,3,0,0,AFa,0,D,[],4,3,0,0,AFP,0,D,[C_],1,3,0,0,LY,0,D,[],3,3,0,0,Il,0,D,[LY],0,3,0,0,ZC,0,D,[],0,3,0,0,Mi,0,D,[],0,3,Bbh,0,Gk,0,D,[LY],0,3,0,["ko",function(){ARl(this);}],DO,0,D,[C_],3,3,0,0,W3,0,D,[DO],0,0,0,["gO",function(b){return A$V(this,b);}]]);
$rt_metadata([W9,0,D,[DO],0,0,0,["gO",function(b){return AXE(this,b);}],W$,0,D,[DO],0,0,0,["gO",function(b){return A3z(this,b);}],W7,0,D,[DO],0,0,0,["gO",function(b){return ASJ(this,b);}],W8,0,D,[DO],0,0,0,["gO",function(b){return A3K(this,b);}],W5,0,D,[DO],0,0,0,["gO",function(b){return A2h(this,b);}],W6,0,D,[DO],0,0,0,["gO",function(b){return A6w(this,b);}],W4,0,D,[DO],0,0,0,["gO",function(b){return AUe(this,b);}],Qu,0,D,[DO],0,0,0,["gO",function(b){return A68(this,b);}],Qt,0,D,[DO],0,0,0,["gO",function(b)
{return AYH(this,b);}],NO,0,D,[],0,3,0,0,AAS,0,D,[C_],1,3,0,0,UQ,0,D,[],0,3,0,0,B1,"IOException",8,BE,[],0,3,0,0,Lg,0,HJ,[Ir],0,3,0,["xQ",function(b,c,d,e){return AVW(this,b,c,d,e);},"xi",function(b,c,d){return A4b(this,b,c,d);},"nw",function(b){A4s(this,b);},"yg",function(b,c){return A98(this,b,c);}],Fy,0,D,[],3,3,0,0,VX,0,D,[Fy],0,3,0,0,Fj,0,D,[DL],0,3,0,["em",function(b){return A$Z(this,b);},"fj",function(){return A$H(this);},"lM",function(b){return A2$(this,b);}],IV,0,D,[],0,3,0,0,UM,0,IV,[],0,3,0,0,Sx,
0,D,[],0,3,0,0,VC,0,D,[],3,3,0,0,RY,0,D,[VC],0,3,0,0,AFN,0,D,[],0,3,0,0,Eh,0,D,[],1,3,0,0,Mw,0,Eh,[],0,3,0,["hH",function(b,c,d,e,f,g){A$j(this,b,c,d,e,f,g);},"og",function(b,c,d,e,f,g){AIR(this,b,c,d,e,f,g);}],Eu,0,D,[],0,3,0,0,AAQ,0,Eu,[],0,3,0,["o9",function(){AYA(this);}],AKB,0,Eu,[],0,3,0,["o9",function(){AYQ(this);}],L3,0,D,[],4,3,0,0,VS,0,Gk,[],0,0,0,["ko",function(){AJZ(this);}],Sh,0,D,[],3,3,0,0,Ih,0,D,[Sh],3,3,0,0,Gj,0,D,[Ih],1,3,0,["rx",function(b){return Q2(this,b);}],J2,0,D,[Ih],3,3,0,0,Gb,0,Gj,
[J2],1,3,0,["kS",function(){return Jg(this);}],Mq,0,Gb,[],1,3,0,0,Oz,0,D,[Ih],3,3,0,0,Xf,0,D,[Oz],3,3,0,0,AEC,0,Mq,[Xf],0,3,0,0,AN$,0,D,[C_],1,3,0,0,F5,0,D,[C_],1,3,0,0,ABC,0,F5,[],1,3,0,0,AKF,0,F5,[],1,3,0,0,I$,0,D,[Ih],3,3,0,0,Fc,0,Gj,[I$],1,3,0,["em",function(b){return A5W(this,b);},"fj",function(){return AS0(this);}],EU,0,D,[],3,3,0,0,AQi,0,Fc,[EU,Db],0,3,0,["sQ",function(b){return Xd(this,b);},"rx",function(b){return Ww(this,b);},"kS",function(){return Os(this);},"lS",function(){return IJ(this);}],LS,0,
D,[],3,3,0,0,FU,0,D,[LS],1,3,0,0,AB_,0,FU,[EU,Db],0,3,0,0]);
$rt_metadata([AKc,0,F5,[],1,3,0,0,YR,0,D,[],0,3,0,0,AE0,0,D,[],0,3,0,0,EY,"Enum",9,D,[DL,Db],1,3,0,["em",function(b){return ATr(this,b);},"fj",function(){return AX1(this);},"lM",function(b){return AXy(this,b);}],E9,0,EY,[],12,3,0,0,Qn,0,D,[],3,3,0,0,U4,0,D,[Qn],0,0,0,["Gm",function(b){CM(this,b);},"IU",function(b){A16(this,b);}],AQE,0,D,[C_],1,3,0,0,Xl,0,D,[C_],3,3,0,0,W2,0,D,[Xl],0,0,0,["a0U",function(){return A1Y(this);}],HX,0,D,[Jy],1,3,0,0,AQd,0,HX,[],0,3,0,["Cq",function(){return A4F(this);},"n$",function(b,
c,d){return A_j(this,b,c,d);},"wU",function(){return A5r(this);}],IP,0,HX,[],0,3,0,0,Ph,0,D,[],3,3,0,0,PW,0,IP,[Ph],0,3,0,0,MQ,0,D,[DL],1,3,0,["lM",function(b){return A6v(this,b);}],WL,0,IP,[],0,3,0,["Cq",function(){return ASY(this);},"n$",function(b,c,d){return ALW(this,b,c,d);},"wU",function(){return A0k(this);}],M5,0,D,[],1,3,0,0,ADq,0,M5,[],0,3,0,0,AJa,0,D,[],0,3,0,0,I7,0,D,[],0,3,0,["Al",function(b,c,d){return A5b(this,b,c,d);}],UT,0,I7,[],0,0,0,["Al",function(b,c,d){return A1W(this,b,c,d);}],C5,"Entity",
12,D,[],1,3,0,["C2",function(){Ca(this);},"Ja",function(){AES(this);},"DN",function(){XX(this);},"Br",function(){return A1K(this);},"FS",function(b){AJ4(this,b);},"DB",function(b){Zg(this,b);},"HG",function(){return AE5(this);},"vg",function(b){return ADF(this,b);},"xE",function(b){A6S(this,b);},"uX",function(b){A5C(this,b);},"fq",function(b,c){return AJG(this,b,c);},"lq",function(){return A9K(this);},"rP",function(){return A7V(this);},"By",function(b,c){A_i(this,b,c);},"uH",function(b){return AWH(this,b);},
"AU",function(b){return AWY(this,b);},"BH",function(){AFb(this);},"Aa",function(){return A9O(this);}],EQ,"EntityLiving",12,C5,[],0,3,0,["lq",function(){return AXr(this);},"rP",function(){return A1O(this);},"rH",function(){return AQo(this);},"Ja",function(){ANo(this);},"BH",function(){AKS(this);},"en",function(){AMr(this);},"fq",function(b,c){return ABZ(this,b,c);},"wy",function(){return A8r(this);},"u_",function(){return AUx(this);},"uK",function(){return AVs(this);},"Fv",function(b){AN3(this,b);},"mf",function()
{return ATB(this);},"DB",function(b){AP6(this,b);},"op",function(){ACm(this);},"wI",function(){AQN(this);},"uQ",function(b,c,d){return Zq(this,b,c,d);},"DN",function(){ABF(this);}],IR,"EntityCreature",12,EQ,[],0,3,0,["wI",function(){APL(this);},"nM",function(b,c){AMA(this,b,c);},"xZ",function(){return AKY(this);}],DP,"EntityMonster",12,IR,[],0,3,0,["op",function(){AC7(this);},"en",function(){AK7(this);},"xZ",function(){return AKo(this);},"fq",function(b,c){return AAG(this,b,c);},"nM",function(b,c){AQV(this,
b,c);},"sB",function(b,c,d){return ABu(this,b,c,d);},"uQ",function(b,c,d){return Yv(this,b,c,d);}],I3,"EntityZombie",12,DP,[],0,3,0,["op",function(){AH0(this);},"mf",function(){return AWJ(this);}],Jj,"EntitySkeleton",12,DP,[],0,3,0,["op",function(){AIB(this);},"nM",function(b,c){AHT(this,b,c);},"mf",function(){return AYM(this);}],JV,"EntityCreeper",12,DP,[],0,3,0,["wI",function(){ZM(this);},"nM",function(b,c){AAI(this,b,c);},"mf",function(){return ASS(this);}],Kl,"EntitySpider",12,DP,[],0,3,0,["xZ",function()
{return ARp(this);},"nM",function(b,c){Zj(this,b,c);},"mf",function(){return AZL(this);}],Gx,"EntityAnimal",12,IR,[],1,3,0,["sB",function(b,c,d){return AOy(this,b,c,d);},"uQ",function(b,c,d){return AK4(this,b,c,d);}],KF,"EntitySheep",12,Gx,[],0,3,0,["fq",function(b,c){return AGT(this,b,c);},"wy",function(){return A62(this);},"u_",function(){return A4f(this);},"uK",function(){return AYk(this);}],Iz,"EntityPig",12,Gx,[],0,3,0,["wy",function(){return ATx(this);},"u_",function(){return A9t(this);},"uK",function()
{return AV4(this);},"uH",function(b){return AXR(this,b);},"mf",function(){return AWc(this);}],Dz,0,D,[Db],0,3,0,0,Nx,0,D,[],0,3,0,0,O8,0,D,[],0,3,0,0,P,"Block",12,D,[],0,3,L,["gi",function(){return A81(this);},"ek",function(){return AWC(this);},"Cu",function(b,c,d,e){return AE$(this,b,c,d,e);},"pF",function(b,c,d,e,f){return AGt(this,b,c,d,e,f);},"ui",function(b,c,d,e,f){return ABW(this,b,c,d,e,f);},"eW",function(b,c){return A7f(this,b,c);},"ci",function(b){return AVC(this,b);},"oR",function(b,c,d,e){return K6(this,
b,c,d,e);},"Fy",function(b,c,d,e,f,g){ALw(this,b,c,d,e,f,g);},"hs",function(b,c,d,e){return Nh(this,b,c,d,e);},"d4",function(){return A5j(this);},"o5",function(b,c){return A6s(this,b,c);},"pe",function(){return A3M(this);},"e6",function(b,c,d,e,f){AHP(this,b,c,d,e,f);},"kM",function(b,c,d,e,f){APb(this,b,c,d,e,f);},"nn",function(b,c,d,e,f){Z5(this,b,c,d,e,f);},"eZ",function(b,c,d,e,f){YL(this,b,c,d,e,f);},"mr",function(){return A3W(this);},"fC",function(b,c,d,e){AA5(this,b,c,d,e);},"lv",function(b,c,d,e){Z0(this,
b,c,d,e);},"eF",function(b){return AYn(this,b);},"dU",function(b,c){return ATO(this,b,c);},"IL",function(b,c,d,e,f){Yd(this,b,c,d,e,f);},"HO",function(b,c,d,e,f,g){AEX(this,b,c,d,e,f,g);},"ym",function(b){return AZ0(this,b);},"nE",function(b,c,d,e,f,g){return Ka(this,b,c,d,e,f,g);},"sK",function(b,c,d,e){AQZ(this,b,c,d,e);},"pP",function(){return AVi(this);},"fT",function(b,c,d,e){return AED(this,b,c,d,e);},"lB",function(b,c,d,e,f){return AGH(this,b,c,d,e,f);},"oG",function(b,c,d,e,f){AJJ(this,b,c,d,e,f);},
"va",function(b,c,d,e,f){YD(this,b,c,d,e,f);},"q8",function(b,c,d,e,f){AAa(this,b,c,d,e,f);},"qD",function(b,c,d,e,f,g){AF5(this,b,c,d,e,f,g);},"xJ",function(b,c,d,e){APV(this,b,c,d,e);}],Rx,0,D,[],3,3,0,0,AJe,0,Gb,[EU,Db,Rx],0,3,0,["lS",function(){return De(this);},"sQ",function(b){return S(this,b);}],DF,0,D,[C_],3,3,0,0,TD,0,D,[DF],0,0,0,["gv",function(){return AWl(this);}],TC,0,D,[DF],0,0,0,["gv",function(){return AS3(this);}],TB,0,D,[DF],0,0,0,["gv",function(){return AZk(this);}],TA,0,D,[DO],0,0,0,["gO",
function(b){return A6I(this,b);}],Sv,0,D,[],0,0,0,0,Cb,"IllegalArgumentException",9,B6,[],0,3,0,0,U_,"UnsupportedCharsetException",7,Cb,[],0,3,0,0,EE,"NullPointerException",9,B6,[],0,3,0,0,AA6,0,D,[C_],4,3,0,0,Fk,0,D,[],1,3,0,0]);
$rt_metadata([L7,0,Fk,[DL],1,3,0,0,AE3,0,D,[],0,3,0,0,QD,0,D,[],0,3,0,0,E4,0,D,[Jy,NS],1,3,0,["gu",function(b,c,d){ATe(this,b,c,d);},"tO",function(){A8V(this);},"ls",function(){A9J(this);}],F_,0,E4,[],0,3,0,0,AA2,0,F_,[],0,3,0,0,W_,0,E4,[],0,0,0,["nJ",function(b){AYf(this,b);}],AE_,"IllegalCharsetNameException",7,Cb,[],0,3,0,0,MP,0,D,[],128,3,0,0,Ue,0,MP,[],4,3,0,0,In,0,D,[],0,3,0,0,AHm,0,In,[],4,0,0,0,ACo,0,In,[],4,0,0,0,LO,"BlockStone",12,P,[],0,3,0,["dU",function(b,c){return A8H(this,b,c);}],Z2,"BlockGrass",
12,P,[],0,3,0,["ci",function(b){return A7q(this,b);},"e6",function(b,c,d,e,f){ADn(this,b,c,d,e,f);},"dU",function(b,c){return AZ7(this,b,c);}],AHS,"BlockDirt",12,P,[],0,3,0,0,B8,0,D,[],0,3,0,["nA",function(){return A8l(this);},"du",function(){return A0X(this);},"si",function(){return A7Q(this);},"uf",function(){return A5s(this);}],FZ,"BlockFlower",12,P,[],0,3,0,["fT",function(b,c,d,e){return ALT(this,b,c,d,e);},"rn",function(b){return AYj(this,b);},"eZ",function(b,c,d,e,f){AIE(this,b,c,d,e,f);},"e6",function(b,
c,d,e,f){AD8(this,b,c,d,e,f);},"G8",function(b,c,d,e){return AN6(this,b,c,d,e);},"hs",function(b,c,d,e){return AGj(this,b,c,d,e);},"d4",function(){return A6l(this);},"gi",function(){return ATY(this);},"ek",function(){return A7v(this);}],AMW,"BlockSapling",12,FZ,[],0,3,0,["e6",function(b,c,d,e,f){AEf(this,b,c,d,e,f);}],HO,0,P,[],1,3,0,["ci",function(b){return AS$(this,b);},"gi",function(){return A$$(this);},"d4",function(){return A$s(this);},"o5",function(b,c){return A8E(this,b,c);},"pF",function(b,c,d,e,f){
return ARv(this,b,c,d,e,f);},"hs",function(b,c,d,e){return Yb(this,b,c,d,e);},"ek",function(){return A7Y(this);},"dU",function(b,c){return A3d(this,b,c);},"eF",function(b){return A5_(this,b);},"qD",function(b,c,d,e,f,g){ANb(this,b,c,d,e,f,g);},"mr",function(){return AU2(this);},"Cu",function(b,c,d,e){return AEt(this,b,c,d,e);},"e6",function(b,c,d,e,f){AQ9(this,b,c,d,e,f);},"pP",function(){return A$p(this);},"kM",function(b,c,d,e,f){YB(this,b,c,d,e,f);},"fC",function(b,c,d,e){ARP(this,b,c,d,e);},"eZ",function(b,
c,d,e,f){ALe(this,b,c,d,e,f);}],AEe,"BlockFlowing",12,HO,[],0,3,0,["e6",function(b,c,d,e,f){AOO(this,b,c,d,e,f);},"fC",function(b,c,d,e){AB0(this,b,c,d,e);}],AIJ,"BlockStationary",12,HO,[],0,3,0,["eZ",function(b,c,d,e,f){AGw(this,b,c,d,e,f);}],I4,"BlockSand",12,P,[],0,3,0,["fC",function(b,c,d,e){ARN(this,b,c,d,e);},"eZ",function(b,c,d,e,f){ASb(this,b,c,d,e,f);},"e6",function(b,c,d,e,f){APy(this,b,c,d,e,f);},"mr",function(){return A3V(this);}],AG3,"BlockGravel",12,I4,[],0,3,0,["dU",function(b,c){return A_l(this,
b,c);}],YT,"BlockOre",12,P,[],0,3,0,["dU",function(b,c){return A4m(this,b,c);},"eF",function(b){return AZ6(this,b);}],AFf,"BlockLog",12,P,[],0,3,0,["eF",function(b){return A8W(this,b);},"dU",function(b,c){return ATc(this,b,c);},"ci",function(b){return AVw(this,b);}],LV,0,P,[],0,3,0,["pF",function(b,c,d,e,f){return AQu(this,b,c,d,e,f);}],ACC,"BlockLeaves",12,LV,[],0,3,0,["e6",function(b,c,d,e,f){AIx(this,b,c,d,e,f);},"eF",function(b){return AW3(this,b);},"dU",function(b,c){return A5c(this,b,c);},"d4",function()
{return A2P(this);},"oG",function(b,c,d,e,f){ASp(this,b,c,d,e,f);}],ALd,"BlockSponge",12,P,[],0,3,0,["fC",function(b,c,d,e){AKJ(this,b,c,d,e);},"lv",function(b,c,d,e){ANt(this,b,c,d,e);}],M9,0,P,[],0,3,0,["d4",function(){return A$b(this);},"pF",function(b,c,d,e,f){return Yt(this,b,c,d,e,f);}],AQl,"BlockGlass",12,M9,[],0,3,0,["eF",function(b){return AV5(this,b);}],AHb,"BlockMushroom",12,FZ,[],0,3,0,["rn",function(b){return AI5(this,b);},"G8",function(b,c,d,e){return ADh(this,b,c,d,e);}],ABr,"BlockOreBlock",12,
P,[],0,3,0,["ci",function(b){return A4z(this,b);}],Zd,"BlockStep",12,P,[],0,3,0,["ci",function(b){return A$K(this,b);},"d4",function(){return A5R(this);},"eZ",function(b,c,d,e,f){ABA(this,b,c,d,e,f);},"fC",function(b,c,d,e){ABg(this,b,c,d,e);},"dU",function(b,c){return AZl(this,b,c);},"gi",function(){return AW5(this);},"pF",function(b,c,d,e,f){return ASB(this,b,c,d,e,f);}],AOf,"BlockTNT",12,P,[],0,3,0,["ci",function(b){return A42(this,b);},"eF",function(b){return AU$(this,b);},"sK",function(b,c,d,e){AGC(this,
b,c,d,e);},"nn",function(b,c,d,e,f){ASj(this,b,c,d,e,f);}],AC9,"BlockBookshelf",12,P,[],0,3,0,["ci",function(b){return A$_(this,b);},"eF",function(b){return A4B(this,b);}],XJ,"BlockObsidian",12,LO,[],0,3,0,["eF",function(b){return A28(this,b);},"dU",function(b,c){return AUU(this,b,c);}],AOB,"BlockTorch",12,P,[],0,3,0,["hs",function(b,c,d,e){return ANj(this,b,c,d,e);},"d4",function(){return A2a(this);},"gi",function(){return AV$(this);},"ek",function(){return A0V(this);},"fT",function(b,c,d,e){return AL6(this,
b,c,d,e);},"va",function(b,c,d,e,f){ANN(this,b,c,d,e,f);},"e6",function(b,c,d,e,f){AR_(this,b,c,d,e,f);},"fC",function(b,c,d,e){ABq(this,b,c,d,e);},"eZ",function(b,c,d,e,f){AKa(this,b,c,d,e,f);},"nE",function(b,c,d,e,f,g){return AKh(this,b,c,d,e,f,g);},"kM",function(b,c,d,e,f){AQn(this,b,c,d,e,f);}],AO0,"BlockFire",12,P,[],0,3,0,["hs",function(b,c,d,e){return ARB(this,b,c,d,e);},"d4",function(){return A5Y(this);},"gi",function(){return A8v(this);},"ek",function(){return AXu(this);},"eF",function(b){return AWD(this,
b);},"mr",function(){return AZ2(this);},"e6",function(b,c,d,e,f){XI(this,b,c,d,e,f);},"pe",function(){return A3k(this);},"fT",function(b,c,d,e){return ANq(this,b,c,d,e);},"eZ",function(b,c,d,e,f){ABw(this,b,c,d,e,f);},"fC",function(b,c,d,e){ACp(this,b,c,d,e);},"kM",function(b,c,d,e,f){ASq(this,b,c,d,e,f);}],Eg,0,P,[],1,3,0,["fC",function(b,c,d,e){AOE(this,b,c,d,e);},"lv",function(b,c,d,e){ALX(this,b,c,d,e);}],Z$,"BlockMobSpawner",12,Eg,[],0,3,0,["s_",function(){return AXg(this);},"d4",function(){return A53(this);
}],Zv,"BlockStairs",12,P,[],0,3,0,["d4",function(){return A5G(this);},"gi",function(){return AV3(this);},"ek",function(){return AYV(this);},"pF",function(b,c,d,e,f){return APz(this,b,c,d,e,f);},"Fy",function(b,c,d,e,f,g){AJz(this,b,c,d,e,f,g);},"eZ",function(b,c,d,e,f){AHB(this,b,c,d,e,f);},"kM",function(b,c,d,e,f){APc(this,b,c,d,e,f);},"q8",function(b,c,d,e,f){ABa(this,b,c,d,e,f);},"nn",function(b,c,d,e,f){ADm(this,b,c,d,e,f);},"Cu",function(b,c,d,e){return AMV(this,b,c,d,e);},"ym",function(b){return A8X(this,
b);},"pP",function(){return A7_(this);},"dU",function(b,c){return A4d(this,b,c);},"eF",function(b){return A0u(this,b);},"eW",function(b,c){return AXv(this,b,c);},"ci",function(b){return A75(this,b);},"ui",function(b,c,d,e,f){return AM6(this,b,c,d,e,f);},"mr",function(){return AVG(this);},"oR",function(b,c,d,e){return AMf(this,b,c,d,e);},"qD",function(b,c,d,e,f,g){ACG(this,b,c,d,e,f,g);},"pe",function(){return AYB(this);},"o5",function(b,c){return AYO(this,b,c);},"fT",function(b,c,d,e){return AMn(this,b,c,d,
e);},"fC",function(b,c,d,e){ACB(this,b,c,d,e);},"lv",function(b,c,d,e){Yx(this,b,c,d,e);},"HO",function(b,c,d,e,f,g){AHO(this,b,c,d,e,f,g);},"IL",function(b,c,d,e,f){AMY(this,b,c,d,e,f);},"oG",function(b,c,d,e,f){AQR(this,b,c,d,e,f);},"e6",function(b,c,d,e,f){AQW(this,b,c,d,e,f);},"lB",function(b,c,d,e,f){return AGI(this,b,c,d,e,f);},"sK",function(b,c,d,e){Y8(this,b,c,d,e);}],AFQ,"BlockChest",12,Eg,[],0,3,0,["ui",function(b,c,d,e,f){return AEw(this,b,c,d,e,f);},"ci",function(b){return A88(this,b);},"fT",function(b,
c,d,e){return AJ2(this,b,c,d,e);},"lv",function(b,c,d,e){ASD(this,b,c,d,e);},"lB",function(b,c,d,e,f){return AFW(this,b,c,d,e,f);},"s_",function(){return AZC(this);}],AKI,"BlockGears",12,P,[],0,3,0,["hs",function(b,c,d,e){return AET(this,b,c,d,e);},"d4",function(){return ATV(this);},"gi",function(){return A5e(this);},"ek",function(){return A7t(this);},"eF",function(b){return A9Q(this,b);},"pe",function(){return AUA(this);}],AHu,"BlockWorkbench",12,P,[],0,3,0,["ci",function(b){return AWt(this,b);},"lB",function(b,
c,d,e,f){return AGP(this,b,c,d,e,f);}],AKH,"BlockCrops",12,FZ,[],0,3,0,["rn",function(b){return AYF(this,b);},"e6",function(b,c,d,e,f){AJm(this,b,c,d,e,f);},"eW",function(b,c){return A8t(this,b,c);},"ek",function(){return A4E(this);},"nn",function(b,c,d,e,f){ANy(this,b,c,d,e,f);},"dU",function(b,c){return A0Y(this,b,c);},"eF",function(b){return A4V(this,b);}],AQO,"BlockFarmland",12,P,[],0,3,0,["hs",function(b,c,d,e){return AA1(this,b,c,d,e);},"d4",function(){return AU1(this);},"gi",function(){return A1A(this);
},"eW",function(b,c){return A_k(this,b,c);},"e6",function(b,c,d,e,f){ANc(this,b,c,d,e,f);},"oG",function(b,c,d,e,f){AKO(this,b,c,d,e,f);},"eZ",function(b,c,d,e,f){X6(this,b,c,d,e,f);},"dU",function(b,c){return AW0(this,b,c);}],AF1,"BlockFurnace",12,Eg,[],0,3,0,["fC",function(b,c,d,e){ACr(this,b,c,d,e);},"ui",function(b,c,d,e,f){return AKe(this,b,c,d,e,f);},"kM",function(b,c,d,e,f){AEk(this,b,c,d,e,f);},"ci",function(b){return AUW(this,b);},"lB",function(b,c,d,e,f){return AGS(this,b,c,d,e,f);},"s_",function()
{return A76(this);}],Vo,"BlockSign",12,Eg,[],0,3,0,["ek",function(){return AYK(this);},"gi",function(){return A5$(this);},"d4",function(){return A54(this);},"s_",function(){return A1L(this);},"fT",function(b,c,d,e){return AGL(this,b,c,d,e);},"dU",function(b,c){return A8C(this,b,c);},"eZ",function(b,c,d,e,f){ZQ(this,b,c,d,e,f);}],D$,"TileEntity",12,D,[],0,3,0,["tL",function(){AFI(this);},"kf",function(){ACc(this);}]]);
$rt_metadata([Jd,0,D$,[],0,3,0,0,Bc,0,D,[],0,3,BB,["iK",function(b,c,d,e,f,g,h){return AGr(this,b,c,d,e,f,g,h);},"x2",function(b,c){return A$L(this,b,c);},"n6",function(b,c,d){return ASh(this,b,c,d);},"se",function(b,c){AV9(this,b,c);},"xW",function(b,c,d,e,f){A48(this,b,c,d,e,f);},"nX",function(b){return A_r(this,b);},"o6",function(b){return AV0(this,b);},"yE",function(b,c){A3H(this,b,c);}],AIw,"BlockDoor",12,P,[],0,3,0,["eW",function(b,c){return A$r(this,b,c);},"d4",function(){return A0R(this);},"gi",function()
{return AXp(this);},"ek",function(){return ATL(this);},"oR",function(b,c,d,e){return AGp(this,b,c,d,e);},"hs",function(b,c,d,e){return Zx(this,b,c,d,e);},"xJ",function(b,c,d,e){AHD(this,b,c,d,e);},"q8",function(b,c,d,e,f){AJW(this,b,c,d,e,f);},"lB",function(b,c,d,e,f){return ADR(this,b,c,d,e,f);},"eZ",function(b,c,d,e,f){ACv(this,b,c,d,e,f);},"dU",function(b,c){return A8B(this,b,c);},"nE",function(b,c,d,e,f,g){return XB(this,b,c,d,e,f,g);},"fT",function(b,c,d,e){return AJ1(this,b,c,d,e);}],AC0,"BlockLadder",
12,P,[],0,3,0,["hs",function(b,c,d,e){return ADd(this,b,c,d,e);},"oR",function(b,c,d,e){return AD4(this,b,c,d,e);},"d4",function(){return AWU(this);},"gi",function(){return A5V(this);},"ek",function(){return A9z(this);},"fT",function(b,c,d,e){return ANT(this,b,c,d,e);},"va",function(b,c,d,e,f){Yk(this,b,c,d,e,f);},"eZ",function(b,c,d,e,f){AKL(this,b,c,d,e,f);},"eF",function(b){return A5t(this,b);}],ANW,"BlockMinecartTrack",12,P,[],0,3,0,["hs",function(b,c,d,e){return ACA(this,b,c,d,e);},"d4",function(){return AWv(this);
},"nE",function(b,c,d,e,f,g){return ALB(this,b,c,d,e,f,g);},"xJ",function(b,c,d,e){AMk(this,b,c,d,e);},"eW",function(b,c){return A2A(this,b,c);},"gi",function(){return A3A(this);},"ek",function(){return A0w(this);},"eF",function(b){return A2H(this,b);},"fT",function(b,c,d,e){return ANV(this,b,c,d,e);},"fC",function(b,c,d,e){ANE(this,b,c,d,e);},"eZ",function(b,c,d,e,f){AJO(this,b,c,d,e,f);}],ASz,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return AQm(this,b,c,d,e,f,g,h);}],AHF,0,MQ,[],0,3,0,0,M2,0,Fk,[DL],1,3,
0,0,Nd,0,L7,[],1,0,0,0,WJ,0,Nd,[],0,0,0,0,ARk,0,M2,[],0,0,0,0,Vn,0,D,[],3,3,0,0,LT,0,Fk,[DL,Ir,KX,Vn],1,3,0,0,P0,"GZIPException",2,B1,[],0,3,0,0,Og,0,B8,[],0,3,0,["du",function(){return A4T(this);},"si",function(){return A5y(this);},"uf",function(){return ATk(this);}],LZ,0,B8,[],0,3,0,["nA",function(){return A_F(this);},"du",function(){return AY7(this);}],N3,0,B8,[],0,3,0,["du",function(){return A6X(this);},"si",function(){return A96(this);},"uf",function(){return AU3(this);}],F9,0,Bc,[],0,3,0,["x2",function(b,
c){return A8U(this,b,c);},"se",function(b,c){A66(this,b,c);},"xW",function(b,c,d,e,f){AWo(this,b,c,d,e,f);},"nX",function(b){return AW8(this,b);}],OS,0,F9,[],0,3,Bb5,0,Vr,0,F9,[],0,3,Bb8,["o6",function(b){return A5l(this,b);}],Wn,0,F9,[],0,3,BbI,0,AEZ,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return AJI(this,b,c,d,e,f,g,h);}],LM,0,Bc,[],0,3,0,["n6",function(b,c,d){return P4(this,b,c,d);}],AOT,0,Bc,[],0,3,0,["n6",function(b,c,d){return AGz(this,b,c,d);}],AK_,0,Bc,[],0,3,0,["x2",function(b,c){return A0v(this,
b,c);},"se",function(b,c){A7T(this,b,c);},"xW",function(b,c,d,e,f){AX3(this,b,c,d,e,f);},"nX",function(b){return A2z(this,b);}],AOb,0,LM,[],0,3,0,["n6",function(b,c,d){return APu(this,b,c,d);}],ANx,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return AQS(this,b,c,d,e,f,g,h);}],VQ,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return AFk(this,b,c,d,e,f,g,h);}],F0,0,Bc,[],0,3,0,0,XR,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return ACa(this,b,c,d,e,f,g,h);}],AHp,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return Ya(this,
b,c,d,e,f,g,h);}],AJb,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return AD9(this,b,c,d,e,f,g,h);}],ARL,0,Bc,[],0,3,0,["n6",function(b,c,d){return AHX(this,b,c,d);}],AO8,0,Bc,[],0,3,0,["iK",function(b,c,d,e,f,g,h){return AC6(this,b,c,d,e,f,g,h);}],ARd,0,Bc,[],0,3,0,["yE",function(b,c){AGx(this,b,c);},"se",function(b,c){AWk(this,b,c);}],NX,0,D,[],3,0,0,0,AGh,0,D,[NX],4,3,0,["EX",function(b){ASV(this,b);},"lW",function(){AZu(this);},"yy",function(){return AT1(this);},"kG",function(b,c,d){A8g(this,b,c,d);}],R$,
"CloneNotSupportedException",9,BE,[],0,3,0,0,Nl,0,D,[],4,3,0,0,J0,0,D,[],3,3,0,0,LJ,0,D,[J0,EU],0,0,0,["em",function(b){return A40(this,b);},"fj",function(){return A1V(this);}],IC,0,LJ,[],0,0,0,0,BO,"IndexOutOfBoundsException",9,B6,[],0,3,0,0,IU,"StringIndexOutOfBoundsException",9,BO,[],0,3,0,0,GD,0,D,[],3,3,0,0,Wu,0,D,[GD],0,3,0,["ko",function(){AI2(this);}],FD,"EOFException",8,B1,[],0,3,0,0,ER,0,D,[],0,3,0,0,Fv,0,D,[],0,3,0,0,LH,0,D,[],4,0,0,0]);
$rt_metadata([PK,0,E4,[],0,0,0,["nJ",function(b){A58(this,b);}],Ki,0,D,[],0,3,0,0,AMm,0,D,[],4,3,0,0,Jb,0,D,[],0,3,0,0,Lr,0,LT,[],1,0,0,0,ABK,0,Lr,[],0,0,0,0,LP,0,D,[],1,3,0,0,N6,0,D,[],0,3,0,0,Z6,0,D,[C_],1,3,0,0,PL,0,D,[C_],3,3,0,0,Yz,0,D,[C_,PL],1,3,0,0,KC,0,D,[],4,0,0,0,Nz,0,LP,[],1,3,0,0,PM,0,Nz,[],0,3,0,0,AOo,0,D,[],4,3,0,0,F$,0,D,[],4,0,0,0,Lz,0,D,[],4,0,0,0,Hs,"UTFDataFormatException",8,B1,[],0,3,0,0,Xq,"NegativeArraySizeException",9,B6,[],0,3,0,0,AAV,0,D,[Lk],1,3,0,["QU",function(b){return A_z(this,
b);},"Zs",function(){return AUy(this);}],Kj,"IllegalMonitorStateException",9,B6,[],0,3,0,0,ZS,0,D,[],0,0,0,0,D2,"IllegalStateException",9,BE,[],0,3,0,0,AIy,0,D,[C_],1,3,0,0,SL,0,D,[GD],0,3,0,["ko",function(){AQ7(this);}],Q7,0,D,[GD],0,3,0,0,GY,0,B1,[],0,3,0,0,WX,"AssertionError",9,Fh,[],0,3,0,0,E2,0,BE,[],0,3,0,0,Oe,0,D,[],1,3,0,0,Sb,0,D,[],3,3,0,0,Sl,0,D,[],3,3,0,0,Pc,0,D,[GD,Sb,Sl],0,0,0,["ko",function(){APk(this);}],LE,0,Oe,[],1,3,0,0,Rc,0,LE,[],0,3,0,0,DY,"Inflate$Return",2,BE,[],0,0,0,0,ANv,0,D,[EU],0,
3,0,0,OP,0,D,[NX],4,3,0,["kG",function(b,c,d){A2y(this,b,c,d);},"lW",function(){A6r(this);},"EX",function(b){A9T(this,b);},"yy",function(){return A7x(this);}],I5,0,D,[],0,3,0,0,Qd,0,D,[],3,3,0,0,Bu,0,Bs,[Qd],0,3,BW,0,ACz,0,D,[],0,3,0,0,Ny,0,D,[],0,3,0,0,Ik,0,D,[],0,3,Tk,0,AR$,0,E4,[],0,3,0,["nJ",function(b){A7O(this,b);},"gu",function(b,c,d){Ro(this,b,c,d);}],JQ,"ArrayStoreException",9,B6,[],0,3,0,0,Oa,0,D,[],3,3,0,0,GG,0,D,[Oa],0,3,0,["eh",function(b,c,d){return ACt(this,b,c,d);},"oJ",function(b,c,d){return ABX(this,
b,c,d);},"eG",function(b,c,d){return AEH(this,b,c,d);},"sM",function(b,c,d){return ANg(this,b,c,d);},"la",function(b,c,d){return AAz(this,b,c,d);}],L0,0,D,[],0,3,BA,0,ANe,0,D,[],0,3,0,0]);
$rt_metadata([Gc,0,D,[],0,3,0,0,CS,0,Gc,[],0,3,0,["o$",function(b,c){YK(this,b,c);},"I0",function(b,c,d){Zk(this,b,c,d);},"Cb",function(b,c,d){A2w(this,b,c,d);},"iB",function(b){AMR(this,b);},"hT",function(){AP5(this);},"rz",function(){A3f(this);},"ps",function(){AH7(this);},"n9",function(){return AVp(this);}],AFc,0,D,[],0,3,0,0,Mj,0,D,[Db],1,3,0,0,Es,0,Mj,[Db],0,3,0,0,N7,0,D,[],3,3,0,0,I0,0,D,[Db,N7],1,3,0,0,Wd,0,D,[N7],3,3,0,0,NU,0,D,[Wd],3,3,0,0,RW,0,D,[],3,3,0,0,Mc,0,D,[RW],3,3,0,0,UX,0,I0,[Db,NU,Mc],0,
3,0,0,Wb,0,D,[NU],3,3,0,0,RQ,0,D,[Mc],3,3,0,0,G7,0,I0,[Db,Wb,RQ],0,3,0,0,ST,0,D,[GD],0,3,0,["ko",function(){AIA(this);}],AOX,"CoderMalfunctionError",7,Fh,[],0,3,0,0,H1,0,D,[],3,3,0,0,Un,0,D,[H1],3,3,0,0,ACW,0,D,[Un],0,0,0,0,Rz,0,D,[],0,0,0,0,KH,0,D,[],0,3,0,0,Wc,0,D,[],0,3,0,0,Qg,0,D,[],0,3,0,0,AKV,0,Eu,[],0,3,0,["o9",function(){AZ9(this);}],ACh,0,Eu,[],0,3,0,["o9",function(){A8R(this);}],AR4,0,Eu,[],0,3,0,["o9",function(){A3t(this);}],Xn,0,D,[],3,3,0,0,AAr,0,D,[Xn],0,3,0,0,AG_,0,CS,[],0,3,0,["rz",function()
{A5p(this);},"o$",function(b,c){ANK(this,b,c);},"hT",function(){AIr(this);},"iB",function(b){ACn(this,b);},"hN",function(b,c,d){Zz(this,b,c,d);}],OV,0,D,[],0,3,0,0,Nn,0,Gc,[],0,3,0,0,Jr,"EntityPlayer",12,EQ,[],0,3,0,["BH",function(){AFV(this);},"Fv",function(b){ALc(this,b);},"By",function(b,c){AZs(this,b,c);},"rH",function(){return A5g(this);},"fq",function(b,c){return Ym(this,b,c);}],AGA,"EntityPlayerSP",12,Jr,[],0,3,0,["wI",function(){AAM(this);},"op",function(){ALl(this);}],AJF,0,D,[],0,3,0,0,Qj,0,D,[],0,
3,0,0,Vj,0,D,[],0,3,0,0,FB,0,D,[],3,3,0,0,Vx,0,D,[FB],0,3,0,["j2",function(b,c){return Em(this,b,c);},"jz",function(b,c){AFB(this,b,c);},"gw",function(b){return RK(this,b);},"f5",function(){return AZp(this);},"kf",function(){AAl(this);}],Du,0,IV,[],0,3,0,0,Ew,0,CS,[],1,3,0,["hN",function(b,c,d){ACe(this,b,c,d);},"I0",function(b,c,d){AN4(this,b,c,d);},"Cb",function(b,c,d){A9I(this,b,c,d);},"o$",function(b,c){AAt(this,b,c);},"ps",function(){AAW(this);},"n9",function(){return A$2(this);}],APM,0,Ew,[],0,3,0,["ps",
function(){ALH(this);},"tn",function(b){ATQ(this,b);},"lo",function(){AZ4(this);},"hN",function(b,c,d){ADW(this,b,c,d);},"s1",function(b){X5(this,b);}],I2,0,D,[],0,3,0,0,Rn,0,D,[],0,0,0,0,Tb,0,D,[],0,3,0,0,AHn,0,D,[],0,3,0,0,Cd,0,D,[],4,3,0,0,ZH,0,D,[FB],0,3,0,["gw",function(b){return Ge(this,b);},"j2",function(b,c){return AEV(this,b,c);},"jz",function(b,c){A3B(this,b,c);},"f5",function(){return A8Z(this);},"kf",function(){ADN(this);}],AAB,0,D,[FB],0,3,0,["gw",function(b){return A45(this,b);},"j2",function(b,
c){return AWA(this,b,c);},"jz",function(b,c){Pf(this,b,c);},"f5",function(){return AYT(this);},"kf",function(){ANh(this);}],HH,0,D,[],0,3,0,["Jj",function(){AK9(this);},"s5",function(b){return AXe(this,b);},"rU",function(){return A9R(this);}]]);
$rt_metadata([ADc,0,HH,[],0,0,0,["s5",function(b){return A0j(this,b);},"Jj",function(){AN7(this);}],QE,0,HH,[],0,0,0,["s5",function(b){return A2R(this,b);},"rU",function(){return AWu(this);}],V7,0,D,[],4,3,0,0,Su,0,D,[],4,3,0,0,M0,0,Fk,[DL],1,3,0,0,Dg,0,D,[],1,3,0,0,AIG,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,g){AC4(this,b,c,d,e,f,g);}],O9,0,D,[],4,3,0,0,Qx,0,D,[DO],0,0,0,["gO",function(b){return A7r(this,b);}],Qw,0,D,[DO],0,0,0,["gO",function(b){return A7D(this,b);}],It,0,M0,[],1,0,0,0,UO,0,It,[],0,0,0,["yq",
function(b){return AOJ(this,b);},"u6",function(b,c){ANH(this,b,c);},"mX",function(){return ASO(this);}],V0,0,D,[],4,3,0,0,VW,0,D,[],4,3,0,0,Xc,0,D,[],4,3,0,0,Jk,"UnsupportedOperationException",9,B6,[],0,3,0,0,UC,0,CS,[],0,3,0,["hT",function(){ADe(this);},"iB",function(b){AOC(this,b);},"hN",function(b,c,d){AMz(this,b,c,d);}],FR,"ReadOnlyBufferException",6,Jk,[],0,3,0,0,G$,"BufferOverflowException",6,B6,[],0,3,0,0,Gp,"BufferUnderflowException",6,B6,[],0,3,0,0,Ts,0,D,[],0,3,0,0,ACj,0,D,[],0,3,0,0,Rt,0,CS,[],0,
3,0,0,Mk,0,CS,[],0,3,0,["hT",function(){AOl(this);},"o$",function(b,c){AMj(this,b,c);},"iB",function(b){AOv(this,b);},"hN",function(b,c,d){APm(this,b,c,d);},"n9",function(){return A6P(this);}],C0,"EntityFX",12,C5,[],0,3,0,["en",function(){ALm(this);},"kN",function(b,c,d,e,f,g,h){ANs(this,b,c,d,e,f,g,h);},"xv",function(){return A70(this);}],AAX,0,CS,[],0,3,0,["hT",function(){ARb(this);},"iB",function(b){ADk(this,b);},"rz",function(){A2e(this);},"hN",function(b,c,d){ADJ(this,b,c,d);}],Lx,0,D,[],0,3,0,0,Wy,0,Lx,
[],0,3,0,0,Q0,0,D,[],3,3,0,0,AFR,0,D,[Q0],0,3,0,0,O0,0,D,[],0,3,0,0,Id,0,D,[FB],0,3,0,["gm",function(){return A6t(this);},"w6",function(){return A6g(this);},"gw",function(b){return AS7(this,b);},"j2",function(b,c){return A3g(this,b,c);},"jz",function(b,c){AWQ(this,b,c);},"f5",function(){return A99(this);},"kf",function(){Yu(this);}],ZD,"EntityDiggingFX",12,C0,[],0,3,0,["xv",function(){return ATD(this);},"kN",function(b,c,d,e,f,g,h){YH(this,b,c,d,e,f,g,h);}],KR,"ConcurrentModificationException",4,B6,[],0,3,0,
0,JL,"EntityRainFX",12,C0,[],0,3,0,["kN",function(b,c,d,e,f,g,h){AKM(this,b,c,d,e,f,g,h);},"en",function(){AOx(this);}],IK,0,It,[],1,0,0,["mX",function(){return AXL(this);}],O_,0,IK,[],0,0,0,["yq",function(b){return AV_(this,b);},"u6",function(b,c){ASN(this,b,c);}],VH,0,IK,[],0,0,0,["yq",function(b){return A0P(this,b);},"u6",function(b,c){ATG(this,b,c);}],AKU,0,D,[Fy],0,3,0,["qe",function(b,c){return A08(this,b,c);}],V5,0,D,[Fy],0,3,0,["qe",function(b,c){return A9F(this,b,c);}],Ho,0,D,[],0,3,0,0,HT,0,D,[],0,
3,0,0,HV,0,D,[],0,3,0,0,Na,0,D,[],0,3,0,0,JY,"NoSuchElementException",4,B6,[],0,3,0,0,VP,0,D,[],0,3,0,["em",function(b){return A6o(this,b);},"fj",function(){return A1q(this);}],Op,0,Fb,[DL],0,3,0,0,Hi,0,D,[],0,0,0,0,Nb,0,D,[],4,3,0,0,R4,0,D,[],0,3,0,0]);
$rt_metadata([DI,0,Dg,[],0,3,0,["H2",function(b,c,d,e,f,g){Z9(this,b,c,d,e,f,g);},"k3",function(b,c){return APR(this,b,c);},"CC",function(b){return A5i(this,b);},"CF",function(b,c,d){return A6x(this,b,c,d);},"xe",function(b,c){A9a(this,b,c);},"iN",function(b,c,d,e,f,g){AOW(this,b,c,d,e,f,g);}],OI,0,DI,[],0,3,0,["k3",function(b,c){return Y6(this,b,c);},"H2",function(b,c,d,e,f,g){AL2(this,b,c,d,e,f,g);},"iN",function(b,c,d,e,f,g){ACI(this,b,c,d,e,f,g);}],Ly,0,Gc,[],0,3,0,0,L9,0,D,[MO],0,3,0,0,Qo,0,D,[],3,3,0,
0,Kq,0,L9,[Qo],0,3,0,0,Oo,0,D,[C_],3,3,0,0,Qv,0,D,[Oo],0,0,0,["Gc",function(){return A1B(this);}],WE,0,D,[Fy],0,3,0,["qe",function(b,c){return A4Q(this,b,c);}],WC,0,D,[Fy],0,3,0,0,R6,0,Fc,[],4,0,0,0,R5,0,FU,[],4,0,0,0,R7,0,Gb,[],4,0,0,0,Iy,0,D,[],1,3,0,0,AA0,0,Iy,[],0,3,0,["CQ",function(b,c,d,e,f){Xz(this,b,c,d,e,f);}],Nt,0,D$,[],0,3,0,["tL",function(){AC1(this);}],ARY,0,Iy,[],0,3,0,["CQ",function(b,c,d,e,f){ARc(this,b,c,d,e,f);}],AQh,0,DI,[],0,3,0,["CC",function(b){return A6j(this,b);},"k3",function(b,c){return X$(this,
b,c);}],T2,0,DI,[],0,3,0,["k3",function(b,c){return AMa(this,b,c);}],FY,0,Eh,[],0,3,0,["hH",function(b,c,d,e,f,g){A9Z(this,b,c,d,e,f,g);}],PR,0,FY,[],0,3,0,0,Ty,0,DI,[],0,3,0,["k3",function(b,c){return ARq(this,b,c);}],ACE,0,FY,[],0,3,0,0,ARf,0,FY,[],0,3,0,0,AB6,0,DI,[],0,3,0,["xe",function(b,c){A7W(this,b,c);},"CF",function(b,c,d){return AZV(this,b,c,d);}],HN,0,Mw,[],0,3,0,["og",function(b,c,d,e,f,g){A2I(this,b,c,d,e,f,g);}],AIm,0,HN,[],0,3,0,0,K$,"EntityGiant",12,DP,[],0,3,0,["sB",function(b,c,d){return AO7(this,
b,c,d);}],T6,0,DI,[],0,3,0,["xe",function(b,c){A$0(this,b,c);}],TF,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,g){AJr(this,b,c,d,e,f,g);}],ID,"EntityPainting",12,C5,[],0,3,0,["en",function(){ADi(this);},"lq",function(){return AXN(this);},"fq",function(b,c){return AEo(this,b,c);}],AAp,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,g){AOQ(this,b,c,d,e,f,g);}],Jp,"EntityArrow",12,C5,[],0,3,0,["en",function(){APs(this);},"xE",function(b){A7B(this,b);}],Rs,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,g){ADg(this,b,c,d,e,f,g);}],E$,
"EntityItem",12,C5,[],0,3,0,["en",function(){AJD(this);},"HG",function(){return AEc(this);},"FS",function(b){AMt(this,b);},"fq",function(b,c){return Vc(this,b,c);},"xE",function(b){A_d(this,b);}],Mo,"EntityTNTPrimed",12,C5,[],0,3,0,["lq",function(){return A$d(this);},"en",function(){XF(this);}],AOU,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,g){AL5(this,b,c,d,e,f,g);}],JJ,"EntityFallingSand",12,C5,[],0,3,0,["lq",function(){return AYh(this);},"en",function(){AMM(this);}],AQM,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,
g){ARj(this,b,c,d,e,f,g);}],Gd,"EntityMinecart",12,C5,[FB],0,3,0,["AU",function(b){return ASP(this,b);},"Br",function(){return AZ1(this);},"rP",function(){return A7E(this);},"Aa",function(){return AVM(this);},"fq",function(b,c){return ALf(this,b,c);},"lq",function(){return A9L(this);},"C2",function(){APe(this);},"en",function(){ASE(this);},"uX",function(b){A3O(this,b);},"uH",function(b){return A8O(this,b);}],ARy,0,Dg,[],0,3,0,["iN",function(b,c,d,e,f,g){AQe(this,b,c,d,e,f,g);}],V3,0,D,[],0,3,0,0,ABz,0,D,[],
0,3,0,0,AH5,0,Eh,[],0,3,0,["hH",function(b,c,d,e,f,g){AX$(this,b,c,d,e,f,g);}],AIz,0,Eh,[],0,3,0,["hH",function(b,c,d,e,f,g){A22(this,b,c,d,e,f,g);}],AEU,0,Eh,[],0,3,0,0,Tr,0,D,[H1],0,0,0,["qj",function(){return KB(this);},"mO",function(){return KS(this);}],I1,0,D,[],0,3,0,0,Iq,0,D,[Oa],0,3,0,["eh",function(b,c,d){return Hw(this,b,c,d);},"sM",function(b,c,d){return AAL(this,b,c,d);},"eG",function(b,c,d){return AC3(this,b,c,d);},"oJ",function(b,c,d){return N1(this,b,c,d);},"la",function(b,c,d){return AB3(this,
b,c,d);}],Gg,0,BE,[],0,3,0,0]);
$rt_metadata([UP,"NoSuchMethodException",9,Gg,[],0,3,0,0,U$,0,D,[],0,3,0,0,PH,0,Gj,[],0,0,0,["rx",function(b){return A0o(this,b);},"kS",function(){return Nc(this);}],Tn,0,D,[Oo],0,0,0,["Gc",function(){return A_w(this);}],AQF,0,D,[],4,3,0,0,WS,0,D$,[FB],0,3,0,["gw",function(b){return A9o(this,b);},"j2",function(b,c){return A8h(this,b,c);},"jz",function(b,c){AVq(this,b,c);},"f5",function(){return AT4(this);},"tL",function(){AGD(this);},"kf",function(){Z1(this);}],S_,0,D$,[FB],0,3,0,["gm",function(){return AVK(this);
},"gw",function(b){return Q9(this,b);},"j2",function(b,c){return A1R(this,b,c);},"jz",function(b,c){AHy(this,b,c);},"w6",function(){return A8A(this);},"f5",function(){return A7k(this);}],CQ,0,D,[],1,3,0,0,APN,0,CQ,[],0,3,0,["gL",function(b){A7b(this,b);},"gE",function(b){A9i(this,b);},"fa",function(){return A6_(this);}],PZ,"BufferUnderflowException",7,B6,[],0,3,0,0,SD,"BufferOverflowException",7,B6,[],0,3,0,0,RT,"MalformedInputException",7,GY,[],0,3,0,["lN",function(){return AVO(this);}],PV,"UnmappableCharacterException",
7,GY,[],0,3,0,["lN",function(){return AVh(this);}],II,0,D,[],0,0,0,["qj",function(){return F8(this);}],U7,0,II,[H1],0,0,0,["mO",function(){return Md(this);}],Wp,0,D,[],0,3,0,0,AEx,0,CS,[],0,3,0,["hT",function(){ARZ(this);},"iB",function(b){ADU(this,b);},"hN",function(b,c,d){AGa(this,b,c,d);}],Ou,0,CS,[],0,3,0,["hT",function(){APt(this);},"s7",function(){AXz(this);},"iB",function(b){ASv(this,b);},"IO",function(b){AKN(this,b);},"hN",function(b,c,d){AEA(this,b,c,d);}],LX,"InstantiationException",9,Gg,[],0,3,0,
0,S6,"IllegalAccessException",9,Gg,[],0,3,0,0,ALu,0,D,[],4,3,0,0,Z_,0,D,[],4,3,0,0,AMh,0,D,[Db],4,3,0,0,ABV,0,Ly,[],0,3,0,0,NK,0,CS,[],0,3,0,["hT",function(){AJs(this);},"iB",function(b){AIe(this,b);},"o$",function(b,c){ALN(this,b,c);},"hN",function(b,c,d){AGv(this,b,c,d);}],UU,0,Ou,[],0,3,0,["s7",function(){A1P(this);},"IO",function(b){AL9(this,b);}],NN,0,D,[],0,3,0,0,Yj,0,NN,[],0,3,0,0,QS,0,D,[],0,3,AYX,0,Co,0,D,[],1,0,0,["eH",function(b,c,d){return I_(this,b,c,d);},"eU",function(b,c,d,e){return Jl(this,b,
c,d,e);},"oE",function(){return A4n(this);},"ca",function(b){A1k(this,b);},"d3",function(b){return A$w(this,b);},"lu",function(){return A_e(this);},"iV",function(){K7(this);}],NW,0,CQ,[],0,3,0,["gE",function(b){A9f(this,b);},"gL",function(b){A0m(this,b);},"fa",function(){return AUF(this);}],DV,0,Co,[],0,0,0,["l",function(b,c,d){return ATH(this,b,c,d);},"b4",function(b){return AT3(this,b);}],HS,0,D,[],0,0,0,0,ARa,"PatternSyntaxException",5,Cb,[],0,3,0,["lN",function(){return A_a(this);}],Mt,0,CQ,[],0,3,0,["gL",
function(b){A8D(this,b);},"gE",function(b){A77(this,b);},"fa",function(){return A6J(this);}],MT,0,CQ,[],0,3,0,["gL",function(b){AWi(this,b);},"gE",function(b){AZy(this,b);},"fa",function(){return A5L(this);}],Li,0,CQ,[],0,3,0,["gL",function(b){A15(this,b);},"gE",function(b){AY5(this,b);},"fa",function(){return AVl(this);}],N8,0,CQ,[],0,3,0,["gL",function(b){ATd(this,b);},"gE",function(b){A_p(this,b);},"fa",function(){return A2G(this);}],Pd,0,CQ,[],0,3,0,["gL",function(b){AS6(this,b);},"gE",function(b){A7Z(this,
b);},"fa",function(){return ASK(this);}],Mm,0,CQ,[],0,3,0,["gL",function(b){A61(this,b);},"gE",function(b){AU5(this,b);},"fa",function(){return A0U(this);}],MD,0,CQ,[],0,3,0,["gL",function(b){A4$(this,b);},"gE",function(b){A7i(this,b);},"fa",function(){return A9C(this);}],OB,0,CQ,[],0,3,0,["gL",function(b){A$T(this,b);},"gE",function(b){AY6(this,b);},"fa",function(){return ATo(this);}],QO,0,CQ,[],0,3,0,["gL",function(b){A9x(this,b);},"gE",function(b){AYZ(this,b);},"fa",function(){return AYz(this);}],Tv,0,D,
[DF],0,0,0,["gv",function(){return AUo(this);}],Tu,0,D,[DF],0,0,0,["gv",function(){return AXo(this);}],ARR,0,D,[],0,3,0,0,XU,0,D,[],0,3,0,0,XN,0,D,[],0,3,0,0,AD_,0,D,[],0,3,0,0,ARQ,0,D,[],0,3,0,0]);
$rt_metadata([AE9,0,D,[],0,3,0,0,Yg,0,D,[Fy],0,0,0,["qe",function(b,c){return AZv(this,b,c);}],QB,0,DV,[],0,0,0,["l",function(b,c,d){return A3w(this,b,c,d);},"b4",function(b){return A9y(this,b);}],AR8,0,DV,[],0,0,0,["l",function(b,c,d){return A4M(this,b,c,d);}],PQ,0,DV,[],0,0,0,["l",function(b,c,d){return AT9(this,b,c,d);}],Q1,0,DV,[],0,0,0,["l",function(b,c,d){return A3y(this,b,c,d);},"b4",function(b){return A8N(this,b);}],HQ,0,DV,[],0,0,0,["l",function(b,c,d){return A1v(this,b,c,d);}],CI,0,Co,[],1,0,0,["l",
function(b,c,d){return A_y(this,b,c,d);},"d_",function(){return A9$(this);},"b4",function(b){return AW6(this,b);}],AFU,0,CI,[],0,0,0,["dm",function(b,c){return A9M(this,b,c);},"eH",function(b,c,d){return A5B(this,b,c,d);},"eU",function(b,c,d,e){return A4C(this,b,c,d,e);},"b4",function(b){return A3x(this,b);}],CE,0,Co,[],0,0,0,["l",function(b,c,d){return AWp(this,b,c,d);},"ca",function(b){AZj(this,b);},"d3",function(b){return A7e(this,b);},"b4",function(b){return AZQ(this,b);},"iV",function(){AUG(this);}],K0,
0,CE,[],0,0,0,["l",function(b,c,d){return AZb(this,b,c,d);},"b4",function(b){return A9k(this,b);}],EX,0,K0,[],0,0,0,["l",function(b,c,d){return A44(this,b,c,d);},"ca",function(b){A85(this,b);}],S8,0,EX,[],0,0,0,["l",function(b,c,d){return AZf(this,b,c,d);},"b4",function(b){return A1m(this,b);}],WG,0,EX,[],0,0,0,["l",function(b,c,d){return ATW(this,b,c,d);},"b4",function(b){return A$c(this,b);}],U8,0,EX,[],0,0,0,["l",function(b,c,d){return AUD(this,b,c,d);},"b4",function(b){return A_M(this,b);}],Rd,0,EX,[],0,
0,0,["l",function(b,c,d){return A2_(this,b,c,d);},"b4",function(b){return A9q(this,b);}],Ix,0,CE,[],0,0,0,["l",function(b,c,d){return ATb(this,b,c,d);},"eH",function(b,c,d){return AX8(this,b,c,d);},"eU",function(b,c,d,e){return A9B(this,b,c,d,e);},"d3",function(b){return A7a(this,b);},"lu",function(){return A8L(this);},"iV",function(){A11(this);}],HW,0,D,[],1,0,0,0,Bm,0,HW,[],1,0,0,["hC",function(){return A4a(this);},"kk",function(){return A3I(this);},"sN",function(){return A94(this);},"nO",function(){return A_b(this);
}],ZJ,"CharClass",5,Bm,[],0,0,0,["Y",function(b){return D5(this,b);},"hC",function(){return DX(this);},"kk",function(){return A5u(this);},"sN",function(){return A1c(this);},"gk",function(){return A71(this);},"nO",function(){return AVV(this);}],MN,"MissingResourceException",4,B6,[],0,3,0,0,E5,0,Co,[],1,0,0,["d3",function(b){return A0p(this,b);},"b4",function(b){return A$I(this,b);},"iV",function(){AYt(this);}],D7,0,E5,[],0,0,0,["l",function(b,c,d){return A3a(this,b,c,d);}],GA,0,D7,[],0,0,0,["l",function(b,c,
d){return A3Z(this,b,c,d);}],DW,0,E5,[],0,0,0,["l",function(b,c,d){return A3p(this,b,c,d);}],FT,0,D7,[],0,0,0,["l",function(b,c,d){return A7o(this,b,c,d);},"ca",function(b){A2L(this,b);}],Sm,0,D7,[],0,0,0,["l",function(b,c,d){return A_t(this,b,c,d);},"eH",function(b,c,d){return AYJ(this,b,c,d);}],Ez,"NumberFormatException",9,Cb,[],0,3,0,0,Th,"Quantifier",5,HW,[EU],0,0,0,["gk",function(){return A7$(this);}],TK,0,Co,[],0,0,0,["l",function(b,c,d){return AXt(this,b,c,d);},"b4",function(b){return A8K(this,b);}],WU,
0,D,[EU,Db],0,3,0,0,OE,0,CE,[],0,0,0,0,P3,0,CE,[],0,0,0,["l",function(b,c,d){return ATF(this,b,c,d);},"ca",function(b){A8x(this,b);},"b4",function(b){return AUd(this,b);},"d3",function(b){return ATZ(this,b);}],EP,0,CE,[],0,0,0,["l",function(b,c,d){return A5n(this,b,c,d);},"Y",function(b){return AV8(this,b);},"d3",function(b){return ATA(this,b);},"ca",function(b){A90(this,b);},"b4",function(b){return AVP(this,b);}],MM,0,EP,[],0,0,0,["Y",function(b){return AW7(this,b);}],Zt,0,CI,[],0,0,0,["dm",function(b,c){return A6V(this,
b,c);}],Fn,0,CI,[],0,0,0,["dm",function(b,c){return S2(this,b,c);},"d3",function(b){return AZm(this,b);}],T1,0,CE,[],0,0,0,["ca",function(b){AYa(this,b);},"l",function(b,c,d){return ASR(this,b,c,d);},"d3",function(b){return A4g(this,b);},"b4",function(b){return A1f(this,b);}],Ft,0,CI,[],0,0,0,["d_",function(){return A6N(this);},"dm",function(b,c){return AWB(this,b,c);},"eH",function(b,c,d){return AVD(this,b,c,d);},"eU",function(b,c,d,e){return AXi(this,b,c,d,e);},"d3",function(b){return A0_(this,b);}],AGQ,0,
CI,[],0,0,0,["dm",function(b,c){return A2U(this,b,c);}],XL,0,CI,[],0,0,0,["dm",function(b,c){return AS8(this,b,c);}],GH,0,CE,[],0,0,0,["ca",function(b){A_g(this,b);},"l",function(b,c,d){return AZa(this,b,c,d);},"d3",function(b){return AXw(this,b);},"b4",function(b){return A87(this,b);}],SE,0,GH,[],0,0,0,0,VZ,0,GH,[],0,0,0,0,SZ,0,DW,[],0,0,0,["l",function(b,c,d){return A4O(this,b,c,d);}],Uu,0,DW,[],0,0,0,["l",function(b,c,d){return A7N(this,b,c,d);}],Ht,0,DW,[],0,0,0,["l",function(b,c,d){return A9X(this,b,c,
d);},"ca",function(b){A$Q(this,b);}],PJ,0,Ht,[],0,0,0,["l",function(b,c,d){return AXf(this,b,c,d);},"ca",function(b){A8a(this,b);}],G6,0,DW,[],0,0,0,["l",function(b,c,d){return A_I(this,b,c,d);}],OQ,0,G6,[],0,0,0,["l",function(b,c,d){return AWS(this,b,c,d);}]]);
$rt_metadata([Qr,0,DW,[],0,0,0,["l",function(b,c,d){return A1$(this,b,c,d);}],UN,0,Ht,[],0,0,0,["l",function(b,c,d){return AUf(this,b,c,d);}],RL,0,G6,[],0,0,0,["l",function(b,c,d){return A3C(this,b,c,d);}],Qs,0,E5,[],0,0,0,["l",function(b,c,d){return A_A(this,b,c,d);},"eH",function(b,c,d){return A0L(this,b,c,d);}],TP,0,E5,[],0,0,0,["l",function(b,c,d){return AZn(this,b,c,d);},"eH",function(b,c,d){return ASU(this,b,c,d);}],Gi,0,D,[],1,0,0,0,Xr,0,D7,[],0,0,0,["l",function(b,c,d){return ATs(this,b,c,d);}],Si,0,
FT,[],0,0,0,["l",function(b,c,d){return AYy(this,b,c,d);}],Ua,0,GA,[],0,0,0,["l",function(b,c,d){return A9E(this,b,c,d);}],UL,0,D7,[],0,0,0,["l",function(b,c,d){return AZg(this,b,c,d);}],V1,0,FT,[],0,0,0,["l",function(b,c,d){return ATw(this,b,c,d);}],Qc,0,GA,[],0,0,0,["l",function(b,c,d){return A9N(this,b,c,d);}],ABI,0,Co,[],4,0,0,["l",function(b,c,d){return A7d(this,b,c,d);},"b4",function(b){return A6G(this,b);}],AAk,0,Co,[],0,0,0,["l",function(b,c,d){return A3$(this,b,c,d);},"b4",function(b){return A4e(this,
b);}],AJp,0,Co,[],0,0,0,["l",function(b,c,d){return AW_(this,b,c,d);},"b4",function(b){return A2v(this,b);}],SB,0,Co,[],4,0,0,["l",function(b,c,d){return A8Y(this,b,c,d);},"b4",function(b){return A4G(this,b);}],AQ5,0,Co,[],0,0,0,["l",function(b,c,d){return A8s(this,b,c,d);},"b4",function(b){return A2T(this,b);}],AIO,0,Co,[],0,0,0,["l",function(b,c,d){return A4A(this,b,c,d);},"b4",function(b){return AWj(this,b);}],AGg,0,CE,[],0,0,0,["l",function(b,c,d){return A2d(this,b,c,d);},"ca",function(b){A4j(this,b);},
"oE",function(){return A8f(this);},"b4",function(b){return A4h(this,b);}],ZF,0,CE,[],4,0,0,["l",function(b,c,d){return A8n(this,b,c,d);},"ca",function(b){A9u(this,b);},"oE",function(){return ASF(this);},"b4",function(b){return A2k(this,b);}],AQI,0,Co,[],4,0,0,["l",function(b,c,d){return AXD(this,b,c,d);},"b4",function(b){return A5Q(this,b);}],AN5,0,Co,[],0,0,0,["l",function(b,c,d){return AY4(this,b,c,d);},"b4",function(b){return A5M(this,b);}],AIa,0,Co,[],0,0,0,["l",function(b,c,d){return A6B(this,b,c,d);},
"b4",function(b){return AUR(this,b);}],IN,0,CE,[],0,0,0,["l",function(b,c,d){return ATt(this,b,c,d);},"ca",function(b){A83(this,b);},"b4",function(b){return AZ_(this,b);}],AQT,0,IN,[],0,0,0,["l",function(b,c,d){return AUY(this,b,c,d);},"eH",function(b,c,d){return A1l(this,b,c,d);},"eU",function(b,c,d,e){return ATl(this,b,c,d,e);},"d3",function(b){return A7H(this,b);}],AMc,0,IN,[],0,0,0,["l",function(b,c,d){return AX6(this,b,c,d);}],AMQ,0,CI,[],0,0,0,["dm",function(b,c){return AVc(this,b,c);},"eH",function(b,
c,d){return A39(this,b,c,d);},"eU",function(b,c,d,e){return A5X(this,b,c,d,e);},"d3",function(b){return AWL(this,b);}],XC,0,CI,[],0,0,0,["dm",function(b,c){return AX9(this,b,c);}],OT,0,CI,[],0,0,0,["dm",function(b,c){return A9G(this,b,c);}],H6,0,D,[],4,0,0,0,By,0,D,[],1,0,0,0,S5,0,CI,[],0,0,0,["dm",function(b,c){return A0t(this,b,c);}],NG,0,CE,[],0,0,0,["ca",function(b){A8F(this,b);},"l",function(b,c,d){return A4H(this,b,c,d);},"eH",function(b,c,d){return AWK(this,b,c,d);},"eU",function(b,c,d,e){return A47(this,
b,c,d,e);},"d3",function(b){return ATg(this,b);},"b4",function(b){return A02(this,b);}],NM,0,CE,[],0,0,0,["ca",function(b){A4r(this,b);},"l",function(b,c,d){return ASW(this,b,c,d);},"eH",function(b,c,d){return A8Q(this,b,c,d);},"eU",function(b,c,d,e){return A0r(this,b,c,d,e);},"d3",function(b){return AVd(this,b);},"b4",function(b){return A8S(this,b);}],EZ,0,CI,[],0,0,0,["dm",function(b,c){return A9l(this,b,c);},"eH",function(b,c,d){return A73(this,b,c,d);},"eU",function(b,c,d,e){return AUn(this,b,c,d,e);},"d3",
function(b){return A9c(this,b);}],Ws,0,Gi,[],4,0,0,["ot",function(b){return AUw(this,b);},"D9",function(b,c){return AZ8(this,b,c);}],Wt,0,Gi,[],4,0,0,["ot",function(b){return A9P(this,b);},"D9",function(b,c){return A1Z(this,b,c);}],AEM,0,D,[],0,0,0,0,Ys,0,D,[],0,0,0,0,NE,0,By,[],0,0,0,["bX",function(){return AMl(this);}],M8,0,By,[],0,0,0,["bX",function(){return ANM(this);}],AEE,0,By,[],0,0,0,["bX",function(){return A9w(this);}],AFi,0,By,[],0,0,0,["bX",function(){return A04(this);}],AFr,0,By,[],0,0,0,["bX",function()
{return AVF(this);}],NA,0,By,[],0,0,0,["bX",function(){return ZL(this);}],L$,0,NA,[],0,0,0,["bX",function(){return AAT(this);}],AHQ,0,By,[],0,0,0,["bX",function(){return A6e(this);}],Ox,0,L$,[],0,0,0,["bX",function(){return AH6(this);}],AMN,0,Ox,[],0,0,0,["bX",function(){return AYv(this);}],ACH,0,By,[],0,0,0,["bX",function(){return A4Y(this);}]]);
$rt_metadata([AAf,0,By,[],0,0,0,["bX",function(){return AYm(this);}],AJ$,0,By,[],0,0,0,["bX",function(){return A10(this);}],AQa,0,By,[],0,0,0,["bX",function(){return A8d(this);}],AHY,0,By,[],0,0,0,["bX",function(){return A20(this);}],APn,0,By,[],0,0,0,["bX",function(){return AWV(this);}],AEm,0,By,[],0,0,0,["bX",function(){return A0b(this);}],AFX,0,By,[],0,0,0,["bX",function(){return A4W(this);}],YV,0,By,[],0,0,0,["bX",function(){return AVn(this);}],AIv,0,By,[],0,0,0,["bX",function(){return A$5(this);}],APC,
0,By,[],0,0,0,["bX",function(){return A2V(this);}],AE7,0,By,[],0,0,0,["bX",function(){return AXG(this);}],ALb,0,By,[],0,0,0,["bX",function(){return AVt(this);}],ACT,0,By,[],0,0,0,["bX",function(){return A5Z(this);}],AG9,0,By,[],0,0,0,["bX",function(){return A63(this);}],APQ,0,By,[],0,0,0,["bX",function(){return A1g(this);}],ABs,0,By,[],0,0,0,["bX",function(){return AZH(this);}],AAF,0,By,[],0,0,0,["bX",function(){return AYN(this);}],AHW,0,By,[],0,0,0,["bX",function(){return A9s(this);}],La,0,By,[],0,0,0,["bX",
function(){return ACJ(this);}],AQD,0,La,[],0,0,0,["bX",function(){return AYE(this);}],AMT,0,NE,[],0,0,0,["bX",function(){return A33(this);}],AAy,0,M8,[],0,0,0,["bX",function(){return AWx(this);}],AKk,0,By,[],0,0,0,["bX",function(){return AXT(this);}],AKP,0,By,[],0,0,0,["bX",function(){return A1N(this);}],AMx,0,By,[],0,0,0,["bX",function(){return A5J(this);}],AMO,0,By,[],0,0,0,["bX",function(){return ASM(this);}],AKt,0,D,[],4,0,0,0,Zp,0,D,[],4,3,0,0,Tm,0,D,[],0,3,0,0,RR,0,D,[],0,3,0,0,AL7,0,D,[],4,3,0,0,Wg,0,
Ew,[],0,3,0,["lo",function(){A3D(this);},"s1",function(b){AOi(this,b);}],Xg,0,Ew,[],0,3,0,["ps",function(){Y4(this);},"tn",function(b){A6D(this,b);},"lo",function(){A1X(this);},"s1",function(b){AKn(this,b);}],AMC,0,Ew,[],0,3,0,["lo",function(){A91(this);},"s1",function(b){ANQ(this,b);}],CW,"EnumArt",12,EY,[],12,3,0,0,PG,0,Fc,[],0,0,0,0,U0,0,CS,[],0,3,0,["hT",function(){AGl(this);},"iB",function(b){AQq(this,b);},"hN",function(b,c,d){YO(this,b,c,d);}],KI,"MinecraftError",12,Fh,[],0,3,0,0,UI,0,D,[],0,3,0,0,Sk,
"AbstractCharClass$1",5,Bm,[],0,0,0,["Y",function(b){return AVJ(this,b);}],Sj,"AbstractCharClass$2",5,Bm,[],0,0,0,["Y",function(b){return A3l(this,b);}],Po,"CharClass$18",5,Bm,[],0,0,0,["Y",function(b){return AXQ(this,b);},"gk",function(){return A52(this);}],TS,0,Bm,[],0,0,0,["Y",function(b){return A9n(this,b);}],TQ,0,Bm,[],0,0,0,["Y",function(b){return A0s(this,b);}],TR,0,Bm,[],0,0,0,["Y",function(b){return A7m(this,b);}],TV,0,Bm,[],0,0,0,["Y",function(b){return A5a(this,b);}],TW,0,Bm,[],0,0,0,["Y",function(b)
{return ASG(this,b);}],TT,0,Bm,[],0,0,0,["Y",function(b){return AWr(this,b);}],TU,0,Bm,[],0,0,0,["Y",function(b){return AX_(this,b);}],TY,0,Bm,[],0,0,0,["Y",function(b){return A1n(this,b);}]]);
$rt_metadata([TZ,0,Bm,[],0,0,0,["Y",function(b){return A4R(this,b);}],Pn,0,Bm,[],0,0,0,["Y",function(b){return A_R(this,b);}],PB,0,Bm,[],0,0,0,["Y",function(b){return AWw(this,b);}],Pl,0,Bm,[],0,0,0,["Y",function(b){return AU0(this,b);}],Pm,0,Bm,[],0,0,0,["Y",function(b){return A5P(this,b);}],Pr,0,Bm,[],0,0,0,["Y",function(b){return AXb(this,b);}],Pk,0,Bm,[],0,0,0,["Y",function(b){return A$k(this,b);}],Pp,0,Bm,[],0,0,0,["Y",function(b){return A4c(this,b);}],Pq,0,Bm,[],0,0,0,["Y",function(b){return AZD(this,
b);}],OM,0,Ix,[],0,0,0,["eH",function(b,c,d){return AV2(this,b,c,d);},"eU",function(b,c,d,e){return A_G(this,b,c,d,e);},"lu",function(){return AUO(this);}],VB,0,II,[H1],0,0,0,["mO",function(){return Ll(this);}],M$,0,Fb,[DL],0,3,0,0,Mn,0,D,[],3,3,0,0,Vt,0,D,[Mn],4,3,0,0,Uf,0,D,[I$],3,3,0,0,Sa,0,D,[Uf],3,3,0,0,SX,0,Fc,[Sa],0,3,0,0,SJ,0,D,[LS],3,3,0,0,OO,0,D,[SJ],3,3,0,0,AJY,0,FU,[EU,Db,OO],0,3,0,0,QP,0,D,[Fy],0,0,0,0,VD,"AbstractCharClass$LazyJavaLowerCase$1",5,Bm,[],0,0,0,["Y",function(b){return A1u(this,b);
}],S$,"AbstractCharClass$LazyJavaUpperCase$1",5,Bm,[],0,0,0,["Y",function(b){return A31(this,b);}],QG,"AbstractCharClass$LazyJavaWhitespace$1",5,Bm,[],0,0,0,["Y",function(b){return ATv(this,b);}],QF,"AbstractCharClass$LazyJavaMirrored$1",5,Bm,[],0,0,0,["Y",function(b){return A5I(this,b);}],Ss,"AbstractCharClass$LazyJavaDefined$1",5,Bm,[],0,0,0,["Y",function(b){return AW2(this,b);}],T7,"AbstractCharClass$LazyJavaDigit$1",5,Bm,[],0,0,0,["Y",function(b){return A$O(this,b);}],Pb,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",
5,Bm,[],0,0,0,["Y",function(b){return AZc(this,b);}],UZ,"AbstractCharClass$LazyJavaISOControl$1",5,Bm,[],0,0,0,["Y",function(b){return A0g(this,b);}],S7,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",5,Bm,[],0,0,0,["Y",function(b){return A_v(this,b);}],S9,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",5,Bm,[],0,0,0,["Y",function(b){return AVf(this,b);}],O4,"AbstractCharClass$LazyJavaLetter$1",5,Bm,[],0,0,0,["Y",function(b){return A1H(this,b);}],Ul,"AbstractCharClass$LazyJavaLetterOrDigit$1",5,Bm,[],0,0,
0,["Y",function(b){return A7z(this,b);}],Up,"AbstractCharClass$LazyJavaSpaceChar$1",5,Bm,[],0,0,0,["Y",function(b){return A82(this,b);}],VV,"AbstractCharClass$LazyJavaTitleCase$1",5,Bm,[],0,0,0,["Y",function(b){return A$D(this,b);}],Vu,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",5,Bm,[],0,0,0,["Y",function(b){return A13(this,b);}],OG,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",5,Bm,[],0,0,0,["Y",function(b){return AU8(this,b);}],My,"UnicodeCategory",5,Bm,[],0,0,0,["Y",function(b){return AZd(this,
b);}],Vh,"UnicodeCategoryScope",5,My,[],0,0,0,["Y",function(b){return A92(this,b);}],Nf,0,D,[],0,3,0,0,JU,0,D,[DL],0,3,0,["em",function(b){return A$x(this,b);},"fj",function(){return A7K(this);},"lM",function(b){return TE(this,b);}],K_,0,D,[],3,3,0,0,VT,0,D,[K_],0,3,0,0,Qa,0,D,[],3,3,0,0,Xi,0,D,[Qa],0,3,0,0,So,0,D,[K_],0,3,0,0,Wq,0,D,[Mn],0,0,0,0,VI,0,D,[],0,3,0,0,R3,0,D,[],3,3,0,0,AF4,0,F_,[R3],0,3,0,0]);
$rt_metadata([AFY,0,D,[],0,3,0,0,NT,0,D,[],4,3,0,0,HL,0,D,[],1,3,0,0,AMP,0,HL,[],0,3,0,0,ACN,0,D,[],0,3,0,0,Pu,0,HL,[],0,3,0,0,T4,0,D,[],0,3,0,0,E3,0,EY,[],12,3,0,0,Vm,0,Fb,[DL],0,3,0,0,Tz,0,D,[DF],0,0,0,["gv",function(){return A4q(this);}],Tw,0,D,[DF],0,0,0,["gv",function(){return AYi(this);}],Rh,0,D,[DF],0,0,0,["gv",function(){return A8P(this);}],Rk,0,D,[DF],0,0,0,["gv",function(){return A7c(this);}],Rf,0,D,[DF],0,0,0,["gv",function(){return A5S(this);}],Rg,0,D,[DF],0,0,0,["gv",function(){return A3e(this);
}],Ri,0,D,[DF],0,0,0,["gv",function(){return A7j(this);}],Rj,0,D,[DF],0,0,0,["gv",function(){return A1G(this);}],Er,0,D,[],1,3,0,0,Ra,0,Er,[],0,3,0,0,Oq,0,D,[],0,3,0,0,SH,0,CS,[],0,3,0,["hT",function(){AD2(this);},"ps",function(){ANG(this);},"rz",function(){AYr(this);},"iB",function(b){AHf(this,b);},"o$",function(b,c){ACV(this,b,c);},"hN",function(b,c,d){ABo(this,b,c,d);}],IG,0,EY,[],12,3,0,0,MC,0,D,[J0,Db],0,3,0,0,Lb,0,MC,[],0,0,0,0,AMX,0,F_,[],0,3,0,["ls",function(){AYs(this);},"gu",function(b,c,d){AXZ(this,
b,c,d);},"tO",function(){A36(this);},"nJ",function(b){AXj(this,b);}],WO,0,D,[],0,3,0,0,N$,"ArrayIndexOutOfBoundsException",9,BO,[],0,3,0,0,ARi,0,Er,[],0,3,0,0,Ch,0,Er,[],0,3,0,0,BS,0,Er,[],0,3,0,0,Cn,0,Er,[],0,3,0,0,Sw,"EntityBubbleFX",12,C0,[],0,3,0,["en",function(){Y7(this);}],AFn,"EntitySmokeFX",12,C0,[],0,3,0,["kN",function(b,c,d,e,f,g,h){AJ6(this,b,c,d,e,f,g,h);},"en",function(){ALR(this);}],QY,"EntityExplodeFX",12,C0,[],0,3,0,["kN",function(b,c,d,e,f,g,h){AR6(this,b,c,d,e,f,g,h);},"en",function(){AEQ(this);
}],OZ,"EntityFlameFX",12,C0,[],0,3,0,["kN",function(b,c,d,e,f,g,h){AQG(this,b,c,d,e,f,g,h);},"vg",function(b){return ASr(this,b);},"en",function(){AAO(this);}],AAZ,"EntityLavaFX",12,C0,[],0,3,0,["vg",function(b){return AJ7(this,b);},"kN",function(b,c,d,e,f,g,h){AGR(this,b,c,d,e,f,g,h);},"en",function(){ALh(this);}],ARA,"EntitySplashFX",12,JL,[],0,3,0,0,AIo,0,D,[],4,3,0,0,H4,0,D,[],0,0,0,0,Vd,0,D,[],0,3,0,0,AB$,0,D,[],0,3,0,0,UY,"EntityPickupFX",12,C0,[],0,3,0,["kN",function(b,c,d,e,f,g,h){AMg(this,b,c,d,e,f,
g,h);},"en",function(){AAH(this);},"xv",function(){return AUt(this);}],Y2,0,D,[],0,3,0,0,HP,0,D,[],0,3,0,["em",function(b){return A3P(this,b);},"fj",function(){return AVj(this);}],AJh,0,D,[],0,0,0,0]);
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
"keyup","Forward","Left","Back","Right","Jump","Inventory","Drop","Chat","Toggle fog","Save location","Load location","Music: ","OFF","ON","Sound: ","Invert mouse: ","Show FPS: ","Render distance: ","View bobbing: ","3d anaglyph: ","Limit framerate: ","Difficulty: ","Graphics: ","FAST","FANCY","High Performance Mode: ","MipMap: ","FAR","NORMAL","SHORT","TINY","Peaceful","Easy","Normal","Hard","/level.dat","Data","RandomSeed","SpawnX","SpawnY","SpawnZ","Time","SizeOnDisk","Saving level","Saving chunks","LastPlayed",
"/level.dat_new","/level.dat_old","Failed to add entity ","All: ","DOHASDOSHIH!","TickNextTick list out of synch","%%","!!","/char.png","0123456789abcdef","C: ",". F: ",", O: ",", E: ","E: ",". B: ",", I: ","/terrain/sun.png","/terrain/moon.png","/clouds.png","Pre-beta!","As seen on TV!","Awesome!","100% pure!","May contain nuts!","Better than Prey!","More polygons!","Sexy!","Limited edition!","Flashing letters!","Made by Notch!","Coming soon!","Best in class!","When it\'s finished!","Absolutely dragon free!",
"Excitement!","More than 5000 sold!","One of a kind!","700+ hits on YouTube!","Indev!","Spiders everywhere!","Check it out!","Holy cow, man!","It\'s a game!","Made in Sweden!","Uses LWJGL!","Reticulating splines!","Minecraft!","Yaaay!","Alpha version!","Singleplayer!","Keyboard compatible!","Undocumented!","Ingots!","Exploding creepers!","That\'s not a moon!","l33t!","Create!","Survive!","Dungeon!","Exclusive!","The bee\'s knees!","Down with O.P.P.!","Closed source!","Classy!","Wow!","Not on steam!","9.95 euro!",
"Half price!","Oh man!","Awesome community!","Pixels!","Teetsuuuuoooo!","Kaaneeeedaaaa!","Now with difficulty!","Enhanced!","90% bug free!","Pretty!","12 herbs and spices!","Fat free!","Absolutely no memes!","Free dental!","Ask your doctor!","Minors welcome!","Cloud computing!","Legal in Finland!","Hard to label!","Technically good!","Bringing home the bacon!","Indie!","GOTY!","Ceci n\'est pas une title screen!","Euclidian!","Now in 3D!","Inspirational!","Herregud!","Complex cellular automata!","Yes, sir!",
"Played by cowboys!","OpenGL 1.1!","Thousands of colors!","Try it!","Age of Wonders is better!","Try the mushroom stew!","Sensational!","Hot tamale, hot hot tamale!","Play him off, keyboard cat!","Guaranteed!","Macroscopic!","Bring it on!","Random splash!","Call your mother!","Monster infighting!","Loved by millions!","Ultimate edition!","Freaky!","You\'ve got a brand new key!","Water proof!","Uninflammable!","Whoa, dude!","All inclusive!","Tell your friends!","NP is not in P!","Notch <3 Ez!","Music by C418!",
"Single player","Multi player","Play tutorial level","Options...","/gui/logo.png","Copyright Mojang Specifications. Do not distribute.","Free memory: ","% of ","MB","Allocated memory: ","% (","MB)","/particles.png","/gui/gui.png","/gui/icons.png","Minecraft Infdev","Minecraft Infdev (","Used memory: ","MB) of ","Notch","humanoid","http://www.minecraft.net/skin/",".png","Health","HurtTime","DeathTime","AttackTime","Score","Edit sign message:","mousedown","wheel","Slot","Crafting","/gui/inventory.png","/glsl/core.glsl",
"\n#define CC_a_color\n","#define CC_a_texture0\n","#define CC_lighting\n","#define CC_fog\n","#define CC_alphatest\n","#define CC_unit0\n","\n#define CC_VERT\n","\n\n","\n[/glsl/core.glsl][CC_VERT] ","broken shader file","\n#define CC_FRAG\n","\n[/glsl/core.glsl][CC_FRAG] ","a_position","a_texture0","a_color","\n[LINKER] ","matrix_m","matrix_p","matrix_t","colorUniform","normalUniform","light0Pos","light1Pos","fogColor","fogMode","fogStart","fogEnd","fogDensity","fogPremultiply","alphaTestF","tex0","texCoordV0",
"id","Count","Damage","array size does not equal image size","I Understand!","Respawn","Title menu","Game over!","Score: &e","Save and quit to title..","Back to game","Saving level..","Game menu","/armor/","_","chain","iron","diamond","gold","/item/sign.png","> "," <","Pig","/mob/spider_eyes.png","/mob/saddle.png","/mob/sheep_fur.png","/art/kz.png","random.drr","random.pop","/item/arrows.png","/item/cart.png","Wrong location! ","There\'s no such entity to remove: ","Attempted to place a tile entity where there was no entity tile!",
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
B4.prototype.valueOf=B4.prototype.toString;D.prototype.toString=function(){return $rt_ustr(AUk(this));};
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
=$rt_mainStarter(AQ3);
(function(){var c;c=YG.prototype;c.dispatchEvent=c.Ms;c.addEventListener=c.Ya;c.removeEventListener=c.a0d;c.getLength=c.U7;c.get=c.Se;c.addEventListener=c.Tu;c.removeEventListener=c.Od;c=W3.prototype;c.handleEvent=c.gO;c=W9.prototype;c.handleEvent=c.gO;c=W$.prototype;c.handleEvent=c.gO;c=W7.prototype;c.handleEvent=c.gO;c=W8.prototype;c.handleEvent=c.gO;c=W5.prototype;c.handleEvent=c.gO;c=W6.prototype;c.handleEvent=c.gO;c=W4.prototype;c.handleEvent=c.gO;c=Qu.prototype;c.handleEvent=c.gO;c=Qt.prototype;c.handleEvent
=c.gO;c=W2.prototype;c.stateChanged=c.a0U;c=TD.prototype;c.handleEvent=c.gv;c=TC.prototype;c.handleEvent=c.gv;c=TB.prototype;c.handleEvent=c.gv;c=TA.prototype;c.handleEvent=c.gO;c=AAV.prototype;c.getLength=c.Zs;c.get=c.QU;c=Qx.prototype;c.handleEvent=c.gO;c=Qw.prototype;c.handleEvent=c.gO;c=Qv.prototype;c.onTimer=c.Gc;c=Tn.prototype;c.onTimer=c.Gc;c=Tv.prototype;c.handleEvent=c.gv;c=Tu.prototype;c.handleEvent=c.gv;c=Tz.prototype;c.handleEvent=c.gv;c=Tw.prototype;c.handleEvent=c.gv;c=Rh.prototype;c.handleEvent
=c.gv;c=Rk.prototype;c.handleEvent=c.gv;c=Rf.prototype;c.handleEvent=c.gv;c=Rg.prototype;c.handleEvent=c.gv;c=Ri.prototype;c.handleEvent=c.gv;c=Rj.prototype;c.handleEvent=c.gv;})();
})();

//# sourceMappingURL=app.js.map