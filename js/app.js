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
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.oX=f;}
function $rt_cls(cls){return L1(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return AIf(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bw.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return D; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Bc6());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return ASO();}
function $rt_setThread(t){return Fv(t);}
function $rt_createException(message){return Z7(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var M=$rt_throw;var R=$rt_compare;var Bc7=$rt_nullCheck;var F=$rt_cls;var I=$rt_createArray;var Sr=$rt_isInstance;var C3=$rt_nativeThread;var C=$rt_suspending;var Ff=$rt_resuming;var Fa=$rt_invalidPointer;var B=$rt_s;var Bt=$rt_eraseClinit;var Bi=$rt_imul;var Bj=$rt_wrapException;
function D(){this.cp=null;this.$id$=0;}
function Bc8(){var a=new D();WO(a);return a;}
function Ba6(b){var c;if(b.cp===null)VE(b);if(b.cp.eh===null)b.cp.eh=Bc9;else if(b.cp.eh!==Bc9){c=new D3;Bl(c,B(0));M(c);}b=b.cp;b.fh=b.fh+1|0;}
function BcX(b){var c,d;if(!HK(b)&&b.cp.eh===Bc9){c=b.cp;d=c.fh-1|0;c.fh=d;if(!d)b.cp.eh=null;HK(b);return;}b=new Ko;O(b);M(b);}
function AD6(b){if(b.cp===null)VE(b);if(b.cp.eh===null)b.cp.eh=Bc9;if(b.cp.eh!==Bc9)AXs(b,1);else{b=b.cp;b.fh=b.fh+1|0;}}
function VE(b){b.cp=BaA();}
function AXs(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gt=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I0=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaK(callback);return thread.suspend(function(){try{Bch(b,c,callback);}catch($e){callback.I0($rt_exception($e));}});}
function Bch(b,c,d){var e,f,g;e=Bc9;if(b.cp===null){VE(b);Fv(e);b=b.cp;b.fh=b.fh+c|0;CM(d,null);return;}if(b.cp.eh===null){b.cp.eh=e;Fv(e);b=b.cp;b.fh=b.fh+c|0;CM(d,null);return;}f=b.cp;if(f.hl===null)f.hl=AXu();f=f.hl;g=new Rf;g.zE=e;g.zF=b;g.zC=c;g.zD=d;d=g;f.push(d);}
function NZ(b){var c;if(!HK(b)&&b.cp.eh===Bc9){c=b.cp;c.fh=c.fh-1|0;if(c.fh<=0){c.eh=null;if(c.hl!==null&&!JN(c.hl)){c=new SW;c.Dk=b;Q5(c);}else HK(b);}return;}b=new Ko;O(b);M(b);}
function HK(a){var b;b=a.cp;if(b===null)return 1;a:{if(b.eh===null&&!(b.hl!==null&&!JN(b.hl))){if(b.rj===null)break a;if(JN(b.rj))break a;}return 0;}a.cp=null;return 1;}
function WO(a){return;}
function Dk(a){return L1(a.constructor);}
function A42(a){return MP(a);}
function Q9(a,b){return a!==b?0:1;}
function AUr(a){var b,c,d,e,f,g,h,i;b=new T;V(b);b=J(J(b,IF(Dk(a))),B(1));c=MP(a);if(!c)d=B(2);else{e=(((32-TE(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=I5(c>>>e&15,16);e=e-4|0;h=i;}d=AIf(f);}return U(J(b,d));}
function MP(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AXR(a){var b,c,d;if(!Sr(a,EV)&&a.constructor.$meta.item===null){b=new Si;O(b);M(b);}b=AS8(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Xl(a){var b,c;if(!(a.cp!==null&&a.cp.eh===Bc9?1:0)){b=new Ko;O(b);M(b);}b=a.cp.rj;if(b===null)return;while(!JN(b)){c=AOY(b);if(!c.a0r())Q5(c);}a.cp.rj=null;}
function JB(){D.call(this);}
var Bc$=null;var Bc_=null;var Bda=null;function Bdb(){var a=new JB();AQ4(a);return a;}
function AQ4(a){return;}
function AQ9(b){var c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AKi();AGp();AQo();Z5();AP8();AIY();ACR();ASs();AC_();AKV();ARP();Zb();AHI();Zj();AHm();AL1();AFt();AFv();AOM();AQg();AH8();AOu();ABM();AFF();AEw();AHX();XN();ADH();AAf();AL9();AKe();AOU();AHa();ASm();AOh();ALQ();AAk();AKz();APf();AEp();AMP();ALg();AMN();AIN();AGc();AHC();AK9();AAv();Z8();AQc();AJZ();AAY();AIp();AL5();ABr();ANf();AFy();AHS();c
=window.minecraftOpts;if(c===null)d=null;else{d=I(B2,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));Bc$=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){}else if($$je instanceof EE){c=$$je;break a;}else{throw $$e;}}return;}g=A9d();h=new Lw;Wl(h,g);h.yf=0;h.mz=g;OH(c,h);return;case 1:b:{c:{d:{try{AAw(c,g);if(C()){break _;}break d;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){}else if($$je instanceof EE)
{c=$$je;break c;}else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Bj($$e);if($$je instanceof EE){c=$$je;}else{throw $$e;}}}g=A9d();h=new Lw;Wl(h,g);h.yf=0;h.mz=g;OH(c,h);return;}c=new Iq;i=Lt();j=MF();g=new UY;g.DY=0;g.cX=c;g.vZ=(-1);g.v1=(-1);g.v0=(-1);g.hq=0.0;g.mM=0.0;g.ok=0.0;g.nb=0;k=new U5;b=I(FS,4);d=b.data;d[0]=F(I$);d[1]=F(Jp);d[2]=F(J1);d[3]=F(Kq);RN(k,100,F(DQ),b);k.GB=g;g.Be=k;h=new Jc;b=I(FS,2);d=b.data;d[0]=F(KJ);d[1]=F(IE);RN(h,20,F(GB),b);g.BC=h;c.cB=g;g=new SI;g.CY=1.0;g.lI=0.0;g.nD=1.0;g.c8
=20.0;g.sQ=B$();g.rT=Long_div(EH(),Long_fromInt(1000000));c.be=g;c.k0=null;c.bs=0;c.D=null;g=new R8;g.n1=B(3);g.l7=B(3);g.kM=B$();g.lL=0;g.fH=c;c.is=g;c.eV=BbU(c);c.bN=0;c.c$=0;c.Hk=null;c.F3=0;c.h8=0;c.Gy=Xz(0.0);c.cf=null;c.Dc=Bat();c.BI=Ba2();c.gR=1;c.lA=B(3);c.gS=Long_fromInt(-1);c.bp=0;c.co=0;c.cU=0;c.dB=B$();g=new V4;TX(g,B(4));g.yl=c;g.Ej=1;Ii(g);c.cd=i;c.bA=j;Bdc=c;Bc_=c;c=Bc_;g=new Mn;Bbm();g.oj=B(5);g.F7=B(6);c.k0=g;Bc_.k0.GD=B(7);Bda=A_$(Bc_,B(8));Ii(Bda);return;default:Fa();}}C3().s(b,c,d,e,f,g,
h,i,j,k,$p);}
function AKi(){Bc$=null;Bc_=null;Bda=null;}
function MW(){}
function FS(){var a=this;D.call(a);a.um=null;a.fW=null;a.mi=null;}
var Bdd=0;function L1(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new FS;c.fW=b;d=c;b.classObject=d;}return c;}
function A3$(a){return a.fW;}
function UE(a,b){var c;b=b;c=a.fW;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&V3(b.constructor,c)?1:0;}
function P_(a,b){return V3(b.fW,a.fW);}
function IF(a){if(a.um===null)a.um=$rt_str(a.fW.$meta.name);return a.um;}
function F1(a){return a.fW.$meta.primitive?1:0;}
function AG4(a){return AR7(a.fW)===null?0:1;}
function KA(a){return L1(AR7(a.fW));}
function A63(){I$.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jp.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];J1.$meta.methods
=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType
:$rt_voidcls(),callable:null},{name:"setCreeperFlashTime",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_floatcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Kq.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntity",modifiers
:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];KJ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType
:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B2,callable:null},{name:"getHurtSound",modifiers:0,accessLevel
:2,parameterTypes:[],returnType:B2,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B2,callable:null}];IE.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers
:0,accessLevel:2,parameterTypes:[],returnType:B2,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B2,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B2,callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jx],returnType:$rt_booleancls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jk.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null}];Tl.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers
:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Cc,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cc,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cc],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B2,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable
:null},{name:"writeToNBT",modifiers:4,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null}];W2.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes
:[$rt_intcls()],returnType:Cc,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cc,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cc],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B2,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers
:4,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getCookProgressScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getBurnTimeRemainingScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"isBurning",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"canSmelt",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"smeltItem",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSmeltingResult",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getItemBurnTime",modifiers:0,accessLevel
:1,parameterTypes:[Cc],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];NC.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"anyPlayerInRange",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name
:"updateDelay",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null}];DQ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable
:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null}];ER.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"getTexture",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B2,callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"getEyeHeight",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_floatcls(),callable:null},{name:"onEntityUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"spawnExplosionParticle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updateRidden",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"setSize",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable
:null},{name:"heal",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B2,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B2,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B2,callable
:null},{name:"knockBack",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"onDeath",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"fall",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"moveEntityWithHeading",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"isOnLadder",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"isEntityAlive",modifiers:0,accessLevel:3,parameterTypes:[],returnType:
$rt_booleancls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"jump",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onEntityDeath",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes
:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null},{name:"kill",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Lb.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null}];II.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"setDirection",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"getArtSize",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_voidcls(),callable:null},{name:"onValidSurface",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers
:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null}];Jv.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,ER],returnType:$rt_voidcls(),callable:null},{name:"setArrowHeading",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers:0,accessLevel:3,parameterTypes:[Jx],returnType:$rt_voidcls(),callable:null}];E_.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_doublecls(),$rt_doublecls(),
$rt_doublecls(),Cc],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"handleWaterMovement",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"pushOutOfBlocks",modifiers:0,accessLevel:1,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable
:null},{name:"dealFireDamage",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers
:0,accessLevel:3,parameterTypes:[Jx],returnType:$rt_voidcls(),callable:null}];Mu.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:null},{name:"createExplosion",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null}];JP.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[F0,$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes
:[APT],returnType:$rt_voidcls(),callable:null},{name:"getWorld",modifiers:0,accessLevel:3,parameterTypes:[],returnType:F0,callable:null}];Gi.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"getCollisionBox",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:Ja,callable:null},{name:"getBoundingBox",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Ja,callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_booleancls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"getYOffset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_doublecls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable
:null},{name:"setEntityDead",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getPosOffset",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kn,callable:null},{name:"getPos",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kn,callable:null},{name:
"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APT],returnType:$rt_voidcls(),callable:null},{name:"applyEntityCollision",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType
:Cc,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cc,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cc],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B2,callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jx],returnType:$rt_booleancls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];}
function ASu(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!F1(a)&&!AG4(a)){if(a.mi===null){if(!Bdd){Bdd=1;A63();}b=a.fW.$meta.methods;a.mi=I(Ku,b.length);c=0;d=0;while(d<b.length){e=b[d];if(DC($rt_str(e.name),B(9))){f=e.parameterTypes;g=I(FS,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=L1(f[i]);i=i+1|0;}h=a.mi.data;j=c+1|0;k=new Ku;l=$rt_str(e.name);m=e.modifiers;i=e.accessLevel;f=JG(e.callable,"call");k.zS=a;k.H3=l;k.ve=m;k.Dp=i;k.nd=g;k.vL=f;h[c]=k;c=j;}d=d+1|0;}a.mi=Nv(a.mi,c);}return a.mi.oX();}return I(Ku,0);}
function WI(a,b){var c,d,e,f,g,h,i,j,k,l;c=ASu(a).data;d=c.length;e=0;while(true){if(e>=d){f=new U1;O(f);M(f);}g=c[e];if(!(AEe(g)&1)?0:1){a:{h=ABq(g);if(h===b)i=1;else{if(h!==null&&b!==null){j=h.data;h=b.data;k=j.length;if(k==h.length){i=0;while(i<k){f=j[i];l=h[i];if(!(f===l?1:f!==null?Q9(f,l):l!==null?0:1)){i=0;break a;}i=i+1|0;}i=1;break a;}}i=0;}}if(i)break;}e=e+1|0;}return g;}
function JM(a){return L1(a.fW.$meta.superclass);}
function Zv(a){var b;b=a.fW;if(!Bde){AW4();Bde=1;}b=A2w(b);if(b!==null)return b;b=new L2;O(b);M(b);}
function AJ$(){D.call(this);}
function Bdf(){var a=new AJ$();A7a(a);return a;}
function A7a(a){return;}
function Ct(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function JG(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function T_(){D.call(this);}
var Bde=0;function Bdg(){var a=new T_();A_v(a);return a;}
function A_v(a){return;}
function AS8(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function V3(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(V3(d[e],c))return 1;e=e+1|0;}return 0;}
function AW4(){var c='$$constructor$$';B2[c]=Yb;D[c]=WO;AMh[c]=A1x;I6[c]=AVC;Fi[c]=AUQ;EE[c]=O;AOW[c]=AWT;IT[c]=AXO;ALJ[c]=A3A;B6[c]=ATp;BO[c]=AZP;T[c]=A_k;HO[c]=V;JB[c]=AQ4;ABn[c]=A25;AJ$[c]=A7a;T_[c]=A_v;EU[c]=AHG;Bs[c]=VX;Xb[c]=A2p;Xh[c]=AZl;Xi[c]=AXk;Xf[c]=A4_;Xg[c]=A_S;Xd[c]=A4c;Xe[c]=AXz;Xc[c]=A29;QD[c]=A2f;QC[c]=A38;AEI[c]=A2W;B3[c]=A3X;Lj[c]=A6n;V9[c]=AZp;AFf[c]=AWb;ZL[c]=A2_;MC[c]=KI;AAZ[c]=A$8;AKG[c]=A1J;AQn[c]=A1a;ACh[c]=AVy;NY[c]=AEa;U2[c]=AQx;ADw[c]=A$m;DA[c]=A3i;L7[c]=AZI;AJk[c]=AWc;Y1[c]=A0r;Cb[c]
=AUd;AJg[c]=A5_;EF[c]=AUP;NG[c]=AIr;AE8[c]=ATg;Xj[c]=A3x;SG[c]=ZT;Uq[c]=A3d;MX[c]=OU;ABd[c]=AY$;Jk[c]=AZ5;D$[c]=ANz;AHL[c]=A1Y;B8[c]=AQp;P9[c]=A89;Op[c]=AZ0;L3[c]=ATq;N_[c]=A7B;AGm[c]=A0j;Si[c]=A6J;I1[c]=A02;BM[c]=AUB;FG[c]=AW_;PT[c]=A6P;AMs[c]=ATF;Gd[c]=AHK;Hw[c]=A_t;AOt[c]=A2U;XA[c]=A8R;Ko[c]=A7m;D3[c]=A9Z;Z1[c]=A2I;W7[c]=A1n;G0[c]=AVh;E3[c]=A7W;ASf[c]=AXP;OY[c]=Zi;ANA[c]=A8L;CS[c]=DR;Gh[c]=Nh;JW[c]=A5J;Bu[c]=AO9;ACG[c]=AUq;Es[c]=A48;U9[c]=A$e;G_[c]=AZU;Qp[c]=A$D;AK1[c]=A4z;ACp[c]=A3s;AHf[c]=A4u;RJ[c]=A0Q;AJL[c]
=AWh;Qs[c]=ANQ;AAK[c]=ASX;AIM[c]=A5B;Jq[c]=AYk;FV[c]=A6R;Hc[c]=A5Y;Gt[c]=A1K;Mp[c]=A98;AA6[c]=AWi;AFW[c]=A9c;Tl[c]=A2b;W2[c]=AVg;KU[c]=A2s;RD[c]=A6T;WJ[c]=AFx;LB[c]=AHw;O9[c]=ALm;HZ[c]=ADc;H1[c]=AGA;J4[c]=A7R;OR[c]=AIe;Mb[c]=AVZ;Hs[c]=AAq;Ni[c]=AR6;QE[c]=A_m;WP[c]=AVr;WN[c]=A5P;Hm[c]=AQN;Nj[c]=AKq;Sc[c]=ASS;Se[c]=A$a;Sd[c]=A$f;Sf[c]=A3M;AA9[c]=ATB;NC[c]=A8g;AR4[c]=AXr;AQm[c]=A4v;P0[c]=AYi;ACL[c]=A9$;ARl[c]=AVe;ACc[c]=AZQ;AIs[c]=AWu;HT[c]=A8h;TQ[c]=AZA;AAy[c]=AZG;RC[c]=AS0;AO0[c]=A7l;AQS[c]=AXx;ARE[c]=A$l;Wd[c]
=AUh;ABI[c]=AUs;AH_[c]=AUS;AIF[c]=A5c;AE0[c]=A36;U1[c]=A6Q;Gl[c]=A$j;Vk[c]=AO_;AQL[c]=A4f;APT[c]=A8O;P8[c]=A$_;SO[c]=AYS;L2[c]=A7c;Tg[c]=A$K;AMn[c]=ATa;NX[c]=ADe;Q2[c]=ALF;ALA[c]=A7s;AAi[c]=A8z;N6[c]=AVS;Mz[c]=A4q;M1[c]=A55;Ll[c]=A1O;Oe[c]=AZ6;Pm[c]=AZ3;Ms[c]=AZH;MK[c]=A_M;OK[c]=A8r;QY[c]=AG$;ARX[c]=AXH;X4[c]=A$t;XX[c]=A2h;AEf[c]=A0I;ARW[c]=A6Y;AFc[c]=AVc;ASd[c]=A2Y;HW[c]=A$r;K3[c]=AX2;CD[c]=A4E;ZS[c]=A2A;Ia[c]=AGa;TV[c]=A_H;W4[c]=A4A;ABR[c]=AVn;AJv[c]=A0L;AQ_[c]=AW8;AGl[c]=A8n;Ez[c]=A3T;WD[c]=A3_;WE[c]=AWP;NO[c]
=AW0;Ne[c]=A0Y;AEK[c]=AWx;AFn[c]=AXj;AFw[c]=ATY;NK[c]=AU6;Mc[c]=AW3;AHW[c]=A7X;OG[c]=AZW;AMT[c]=A0P;ACO[c]=A9M;AAo[c]=A$6;AKd[c]=AUa;AQf[c]=A33;AH4[c]=A0a;APt[c]=AT0;AEs[c]=AYw;AF2[c]=AU4;Y5[c]=AUz;AIB[c]=AYc;API[c]=AYJ;AFa[c]=A6v;ALh[c]=ATt;AC0[c]=AUI;AHd[c]=AXW;APW[c]=A8b;ABB[c]=AUC;AAO[c]=A9u;AH2[c]=A6p;Ld[c]=AVH;AQJ[c]=A6z;AMZ[c]=A1F;AAH[c]=A6Z;AKU[c]=A18;AKy[c]=AS_;Zy[c]=A79;AMb[c]=A$R;IM[c]=AT9;S8[c]=AAp;AJ3[c]=ATZ;Nn[c]=ASr;AF3[c]=A0n;N3[c]=ABt;PD[c]=A_J;Rk[c]=A64;WY[c]=AX4;Oh[c]=AV0;ARo[c]=A0Z;AIu[c]
=AWW;Za[c]=A0f;}
function A2w(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function AZR(b){return setTimeout(function(){$rt_threadStarter(A34)(b);},0);}
function A34(b){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.g$();if(C()){break _;}return;default:Fa();}}C3().s(b,$p);}
function Q5(b){AFJ(b,0);}
function AFJ(b,c){return setTimeout(function(){A34(b);},c);}
function AP6(b){return String.fromCharCode(b);}
function AR7(b){return b.$meta.item;}
function AXu(){return [];}
function Db(){}
function DM(){}
function K0(){}
function B2(){var a=this;D.call(a);a.bw=null;a.qp=0;}
var Bdh=null;function Bdi(){var a=new B2();Yb(a);return a;}
function AIf(a){var b=new B2();Tv(b,a);return b;}
function Lm(a,b,c){var d=new B2();ASH(d,a,b,c);return d;}
function A2$(a,b){var c=new B2();YB(c,a,b);return c;}
function A$E(a,b,c){var d=new B2();XG(d,a,b,c);return d;}
function Yb(a){a.bw=$rt_createCharArray(0);}
function Tv(a,b){var c,d;b=b.data;c=b.length;a.bw=$rt_createCharArray(c);d=0;while(d<c){a.bw.data[d]=b[d];d=d+1|0;}}
function ASH(a,b,c,d){var e,f;a.bw=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bw.data[e]=f[e+c|0];e=e+1|0;}}
function YB(a,b,c){c=AN6(c,AMH(b,0,b.data.length));if(AJH(c)&&!c.bj&&c.cy==c.mD)a.bw=APo(c);else{a.bw=$rt_createCharArray(Cs(c));AEU(c,a.bw);}}
function XG(a,b,c,d){var e,f,g,h,i,j;a.bw=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bw.data;j=e+1|0;g[e]=i&65535;}else{g=a.bw.data;c=e+1|0;g[e]=IG(i);g=a.bw.data;j=c+1|0;g[c]=Ib(i);}f=f+1|0;c=h;e=j;}if(e<a.bw.data.length)a.bw=O_(a.bw,e);}
function Y(a,b){var c;if(b>=0&&b<a.bw.data.length)return a.bw.data[b];c=new I1;O(c);M(c);}
function Bh(a){return a.bw.data.length;}
function IA(a){return a.bw.data.length?0:1;}
function ARu(a,b){var c,d,e;if(a===b)return 0;c=CA(Bh(a),Bh(b));d=0;while(true){if(d>=c)return Bh(a)-Bh(b)|0;e=Y(a,d)-Y(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AJI(a,b){var c,d,e;if(a===b)return 0;c=CA(Bh(a),Bh(b));d=0;while(true){if(d>=c)return Bh(a)-Bh(b)|0;e=EW(Y(a,d))-EW(Y(b,d))|0;if(e)break;d=d+1|0;}return e;}
function Wj(a,b,c){var d,e,f;if((c+Bh(b)|0)>Bh(a))return 0;d=0;while(d<Bh(b)){e=Y(b,d);f=c+1|0;if(e!=Y(a,c))return 0;d=d+1|0;c=f;}return 1;}
function IB(a,b){if(a===b)return 1;return Wj(a,b,0);}
function Hk(a,b,c){var d,e,f,g;d=DE(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bw.data.length)return (-1);if(a.bw.data[d]==e)break;d=d+1|0;}return d;}f=IG(b);g=Ib(b);while(true){if(d>=(a.bw.data.length-1|0))return (-1);if(a.bw.data[d]==f&&a.bw.data[d+1|0]==g)break;d=d+1|0;}return d;}
function UK(a,b){return Hk(a,b,0);}
function Il(a,b,c){var d,e,f,g,h;d=CA(c,Bh(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bw.data[d]==e)break;d=d+(-1)|0;}return d;}f=IG(b);g=Ib(b);while(true){if(d<1)return (-1);if(a.bw.data[d]==g){h=a.bw.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function LJ(a,b){return Il(a,b,Bh(a)-1|0);}
function AKL(a,b,c){var d,e,f;d=DE(0,c);e=Bh(a)-Bh(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=Bh(b))break a;if(Y(a,d+f|0)!=Y(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AAD(a,b,c){var d,e;d=CA(c,Bh(a)-Bh(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=Bh(b))break a;if(Y(a,d+e|0)!=Y(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Ev(a,b,c){var d;if(b<=c)return Lm(a.bw,b,c-b|0);d=new BM;O(d);M(d);}
function Jw(a,b){return Ev(a,b,Bh(a));}
function AVP(a,b,c){return Ev(a,b,c);}
function IN(a,b,c){var d,e,f,g;d=new T;V(d);e=Bh(a)-Bh(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Bh(b)){FN(d,c);f=f+(Bh(b)-1|0)|0;break a;}if(Y(a,f+g|0)!=Y(b,g))break;g=g+1|0;}Dw(d,Y(a,f));}f=f+1|0;}FN(d,Jw(a,f));return U(d);}
function AUn(a){return a;}
function Nz(a){var b,c,d,e;b=$rt_createCharArray(a.bw.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bw.data[d];d=d+1|0;}return b;}
function Uv(b){return b===null?B(10):b.gj();}
function V0(b){var c;c=new T;V(c);return U(Bf(c,b));}
function DC(a,b){var c,d;if(a===b)return 1;if(!(b instanceof B2))return 0;c=b;if(Bh(c)!=Bh(a))return 0;d=0;while(d<Bh(c)){if(Y(a,d)!=Y(c,d))return 0;d=d+1|0;}return 1;}
function A8p(a){var b,c,d,e;a:{if(!a.qp){b=a.bw.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.qp=(31*a.qp|0)+e|0;d=d+1|0;}}}return a.qp;}
function AKo(a){var b,c,d,e,f,g,h;if(IA(a))return a;b=$rt_createIntArray(a.bw.data.length);c=b.data;d=0;e=0;while(e<a.bw.data.length){a:{if(e!=(a.bw.data.length-1|0)&&Ds(a.bw.data[e])){f=a.bw.data;g=e+1|0;if(DS(f[g])){h=d+1|0;c[d]=GP(EJ(a.bw.data[e],a.bw.data[g]));e=g;break a;}}h=d+1|0;c[d]=EW(a.bw.data[e]);}e=e+1|0;d=h;}return A$E(b,0,d);}
function AOm(a){var b,c,d,e,f,g,h;if(IA(a))return a;b=$rt_createIntArray(a.bw.data.length);c=b.data;d=0;e=0;while(e<a.bw.data.length){a:{if(e!=(a.bw.data.length-1|0)&&Ds(a.bw.data[e])){f=a.bw.data;g=e+1|0;if(DS(f[g])){h=d+1|0;c[d]=GO(EJ(a.bw.data[e],a.bw.data[g]));e=g;break a;}}h=d+1|0;c[d]=FF(a.bw.data[e]);}e=e+1|0;d=h;}return A$E(b,0,d);}
function ANq(a,b){var c,d;if(b===null){b=new EF;Bl(b,B(11));M(b);}Bdj=1;c=Bbz();d=new HY;d.h5=1;d.eP=b;d.bF=$rt_createCharArray(Bh(b)+2|0);Dh(Nz(b),0,d.bF,0,Bh(b));d.bF.data[d.bF.data.length-1|0]=0;d.bF.data[d.bF.data.length-2|0]=0;d.DZ=d.bF.data.length;d.l8=0;GC(d);GC(d);c.n=d;c.fP=0;c.u2=S2(c,(-1),c.fP,null);if(!Eo(c.n))M(CN(B(3),c.n.eP,c.n.ih));if(c.zb)c.u2.iX();return AIV(c,a);}
function AV6(a,b){return ARu(a,b);}
function AGp(){Bdh=new V9;}
function EE(){var a=this;D.call(a);a.vz=null;a.jE=null;a.op=0;a.rP=0;a.pc=null;a.qO=null;}
function Bdk(){var a=new EE();O(a);return a;}
function Bdl(a){var b=new EE();Bl(b,a);return b;}
function Bdm(a){var b=new EE();WZ(b,a);return b;}
function O(a){a.op=1;a.rP=1;}
function Bl(a,b){a.op=1;a.rP=1;a.vz=b;}
function WZ(a,b){a.op=1;a.rP=1;a.jE=b;}
function A5K(a){return a;}
function A0o(a){return a.vz;}
function AWt(a){return a.lQ();}
function CF(a){S3(a,DB());}
function S3(a,b){var c,d,e,f,g;Ks(b,IF(Dk(a)));c=a.lQ();if(c!==null){d=new T;V(d);Ks(b,U(J(J(d,B(12)),c)));}a:{APG(b);if(a.qO!==null){e=a.qO.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Ks(b,B(13));ACo(b,d);g=g+1|0;}}}if(a.jE!==null&&a.jE!==a){Ks(b,B(14));S3(a.jE,b);}}
function OH(a,b){var c,d,e,f,g;Hp(b,IF(Dk(a)));c=a.lQ();if(c!==null){d=new T;V(d);Hp(b,U(J(J(d,B(12)),c)));}a:{ST(b);if(a.qO!==null){e=a.qO.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Hp(b,B(15));AAJ(b,d);g=g+1|0;}}}if(a.jE!==null&&a.jE!==a){Hp(b,B(14));OH(a.jE,b);}}
function AQE(a,b){if(!a.op)return;a.pc=Nv(a.pc,a.pc.data.length+1|0);a.pc.data[a.pc.data.length-1|0]=b;}
function Fi(){EE.call(this);}
function Bdn(){var a=new Fi();AUQ(a);return a;}
function AUQ(a){O(a);}
function I6(){Fi.call(this);}
function Bdo(){var a=new I6();AVC(a);return a;}
function AVC(a){O(a);}
function AMh(){I6.call(this);}
function Bdp(){var a=new AMh();A1x(a);return a;}
function A1x(a){O(a);}
function HO(){var a=this;D.call(a);a.O=null;a.bY=0;}
function Bdq(){var a=new HO();V(a);return a;}
function BcV(a){var b=new HO();GD(b,a);return b;}
function V(a){GD(a,16);}
function GD(a,b){a.O=$rt_createCharArray(b);}
function TB(a,b,c){return AMA(a,a.bY,b,c);}
function AMA(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);f=a.O.data;g=b+1|0;f[b]=45;b=g;}a.O.data[b]=I5(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bi(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)e=b;else{f=a.O.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.O.data;b=e+1|0;f[e]=I5(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function ADg(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);g=a.O.data;h=b+1|0;g[b]=45;b=h;}a.O.data[b]=I5(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)i=b;else{g=a.O.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.O.data;b=i+1|0;g[i]=I5(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function AOv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdr;AOi(c,f);d=f.uy;g=f.uf;h=f.zi;i=1;j=1;if(h){h=1;j=2;}k=9;l=A0W(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=DE(k,i+1|0);g=0;}else if(g<0){d=d/Bds.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;C2(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.O.data;h=b+
1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.O.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.O.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.O.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.O.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.O.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.O.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AKB(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdt;AB3(c,f);g=f.u3;h=f.t5;i=f.y_;j=1;k=1;if(i)k=2;l=18;d=AZE(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=DE(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,Bdu.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;C2(a,b,b+(k+l|0)|
0);if(!i)i=b;else{e=a.O.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.O.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.O.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.O.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.O.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.O.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.O.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else
{e=a.O.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.O.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function A0W(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AZE(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=Bdv.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,Bdv.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,Bdv.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function Dw(a,b){return a.yi(a.bY,b);}
function K2(a,b,c){C2(a,b,b+1|0);a.O.data[b]=c;return a;}
function M2(a,b){var c;if(a.O.data.length>=b)return;c=a.O.data.length>=1073741823?2147483647:DE(b,DE(a.O.data.length*2|0,5));a.O=O_(a.O,c);}
function U(a){return Lm(a.O,0,a.bY);}
function I0(a,b,c,d){return a.xS(a.bY,b,c,d);}
function J$(a,b,c,d,e){var f,g,h,i;C2(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.O.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hl(a,b){return a.xk(b,0,b.data.length);}
function C2(a,b,c){var d,e;d=a.bY-b|0;a.nz((a.bY+c|0)-b|0);e=d-1|0;while(e>=0){a.O.data[c+e|0]=a.O.data[b+e|0];e=e+(-1)|0;}a.bY=a.bY+(c-b|0)|0;}
function Iw(){}
function T(){HO.call(this);}
function B4(){var a=new T();A_k(a);return a;}
function A_k(a){V(a);}
function J(a,b){ND(a,a.bY,b);return a;}
function Bf(a,b){TB(a,b,10);return a;}
function C6(a,b){UQ(a,a.bY,b);return a;}
function AWG(a,b){WQ(a,a.bY,b);return a;}
function AKu(a,b){Qu(a,a.bY,b);return a;}
function AS6(a,b){Dw(a,b);return a;}
function AVb(a,b,c,d){I0(a,b,c,d);return a;}
function A90(a,b){Hl(a,b);return a;}
function FN(a,b){Xt(a,a.bY,b);return a;}
function UQ(a,b,c){ADg(a,b,c,10);return a;}
function WQ(a,b,c){AOv(a,b,c);return a;}
function Qu(a,b,c){AKB(a,b,c);return a;}
function A9i(a,b,c,d,e){J$(a,b,c,d,e);return a;}
function Xt(a,b,c){ND(a,b,c===null?B(10):c.gj());return a;}
function AY1(a,b,c){K2(a,b,c);return a;}
function AGM(a,b,c){var d,e,f,g,h,i,j;d=R(b,c);if(d<=0&&b<=a.bY){if(d){e=a.bY-c|0;a.bY=a.bY-(c-b|0)|0;d=0;while(d<e){f=a.O.data;g=b+1|0;h=a.O.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new I1;O(j);M(j);}
function Sp(a,b){var c,d,e,f;if(b>=0&&b<a.bY){a.bY=a.bY-1|0;while(b<a.bY){c=a.O.data;d=a.O.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new I1;O(f);M(f);}
function ND(a,b,c){var d,e,f;if(b>=0&&b<=a.bY){a:{if(c===null)c=B(10);else if(IA(c))break a;M2(a,a.bY+Bh(c)|0);d=a.bY-1|0;while(d>=b){a.O.data[d+Bh(c)|0]=a.O.data[d];d=d+(-1)|0;}a.bY=a.bY+Bh(c)|0;d=0;while(d<Bh(c)){e=a.O.data;f=b+1|0;e[b]=Y(c,d);d=d+1|0;b=f;}}return a;}c=new I1;O(c);M(c);}
function ANl(a,b){a.bY=b;}
function AAF(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BM;Bl(f,B(16));M(f);}while(b<c){g=d.data;h=e+1|0;i=a.O.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function A61(a,b,c,d,e){J$(a,b,c,d,e);return a;}
function AVt(a,b,c,d){I0(a,b,c,d);return a;}
function Kc(a){return a.bY;}
function BT(a){return U(a);}
function AXQ(a,b){M2(a,b);}
function A7N(a,b,c){return Xt(a,b,c);}
function A7q(a,b,c){K2(a,b,c);return a;}
function A0E(a,b,c){return Qu(a,b,c);}
function A6c(a,b,c){return WQ(a,b,c);}
function AUO(a,b,c){return UQ(a,b,c);}
function A2K(a,b,c){return ND(a,b,c);}
function Fc(){D.call(this);}
function Gk(){Fc.call(this);this.f3=0;}
var Bdw=null;var Bdx=null;function AQV(a){var b=new Gk();Ls(b,a);return b;}
function Ls(a,b){a.f3=b;}
function Lg(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!IA(b)){a:{d=0;e=0;switch(Y(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==Bh(b)){b=new Ez;O(b);M(b);}while(e<Bh(b)){g=e+1|0;h=Uk(Y(b,e));if(h<0){i=new Ez;j=new T;V(j);Bl(i,U(J(J(j,B(17)),b)));M(i);}if(h>=c){i=new Ez;j=new T;V(j);Bl(i,U(J(J(Bf(J(j,B(18)),c),B(12)),b)));M(i);}f=Bi(c,f)+h|0;if(f<0){if(g==Bh(b)&&f==(-2147483648)&&d)return (-2147483648);i=new Ez;j=new T;V(j);Bl(i,U(J(J(j,B(19)),b)));M(i);}e=g;}if(d)f= -f;return f;}b
=new Ez;Bl(b,B(20));M(b);}i=new Ez;b=new T;V(b);Bl(i,U(Bf(J(b,B(21)),c)));M(i);}
function CY(b){var c;if(b>=(-128)&&b<=127){a:{if(Bdx===null){Bdx=I(Gk,256);c=0;while(true){if(c>=Bdx.data.length)break a;Bdx.data[c]=AQV(c-128|0);c=c+1|0;}}}return Bdx.data[b+128|0];}return AQV(b);}
function A3W(a){return a.f3;}
function MA(a){var b;b=a.f3;return TB(BcV(20),b,10).gj();}
function A3a(a){return a.f3>>>4^a.f3<<28^a.f3<<8^a.f3>>>24;}
function A_s(a,b){if(a===b)return 1;return b instanceof Gk&&b.f3==a.f3?1:0;}
function AAG(a,b){return R(a.f3,b.f3);}
function TE(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function JH(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Nq(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function A65(a,b){return AAG(a,b);}
function AQo(){Bdw=F($rt_intcls());}
function IT(){I6.call(this);}
function Bdy(){var a=new IT();AXO(a);return a;}
function Bdz(a){var b=new IT();Qg(b,a);return b;}
function AXO(a){O(a);}
function Qg(a,b){Bl(a,b);}
function AOW(){IT.call(this);}
function BdA(){var a=new AOW();AWT(a);return a;}
function BdB(a){var b=new AOW();AUw(b,a);return b;}
function AWT(a){O(a);}
function AUw(a,b){Qg(a,b);}
function ALJ(){IT.call(this);}
function BdC(){var a=new ALJ();A3A(a);return a;}
function BdD(a){var b=new ALJ();AUR(b,a);return b;}
function A3A(a){O(a);}
function AUR(a,b){Qg(a,b);}
function BO(){EE.call(this);}
function BdE(){var a=new BO();AZP(a);return a;}
function AZP(a){O(a);}
function B6(){BO.call(this);}
function BdF(){var a=new B6();ATp(a);return a;}
function Z7(a){var b=new B6();A$Z(b,a);return b;}
function ATp(a){O(a);}
function A$Z(a,b){Bl(a,b);}
function C_(){}
function Hi(){}
function Uw(){}
function Qv(){}
function Vj(){}
function Ro(){}
function Wq(){}
function PC(){}
function Ln(){}
function YQ(){D.call(this);}
function AX_(a,b,c){a.Xp($rt_str(b),JG(c,"handleEvent"));}
function AYn(a,b,c){a.UN($rt_str(b),JG(c,"handleEvent"));}
function ATL(a,b){return a.HL(b);}
function AZe(a,b,c,d){a.KP($rt_str(b),JG(c,"handleEvent"),d?1:0);}
function A1I(a,b){return !!a.Xw(b);}
function AUJ(a){return a.Jc();}
function AS4(a,b,c,d){a.NI($rt_str(b),JG(c,"handleEvent"),d?1:0);}
function Bs(){D.call(this);}
var BdG=0;var BdH=null;var BdI=null;var BdJ=null;var BdK=null;var BdL=null;var BdM=null;var BdN=null;var BdO=null;var BdP=null;var BdQ=null;var BdR=null;var BdS=null;var BdT=null;var BdU=null;var BdV=null;var BdW=null;var BdX=null;var BdY=null;var BdZ=null;var Bd0=0;var Bd1=0;var Bd2=0.0;var Bd3=0.0;var Bd4=0;var Bd5=0;var Bd6=0;var Bd7=0;var Bd8=0;var Bd9=null;var Bd$=null;var Bd_=null;var Bea=null;var Beb=null;var Bec=0;var Bed=null;var Bee=null;var Bef=null;var Beg=null;var Beh=null;var Bei=null;var Bej=
Long_ZERO;var Bek=0;var Bel=0;var Bem=0;var Ben=null;var Beo=null;var Bep=null;var Beq=0;var Ber=0;var Bes=0;var Bet=null;var Beu=null;var Bev=null;var Bew=0;var Bex=null;var Bey=null;var Bez=0.0;var BeA=null;var BeB=0;var BeC=null;var BeD=null;var BeE=0;var BeF=null;var BeG=0;function Bb(){Bb=Bt(Bs);ATP();}
function BeH(){var a=new Bs();VX(a);return a;}
function VX(a){Bb();}
function PL(){Bb();return B(22);}
function Kj(b){Bb();if(IB(b,B(23)))b=Jw(b,1);return CP(BeI,b);}
function ACe(b){var c;Bb();c=Kj(b);if(c===null)return null;return A2$(c,Ya(B(24)));}
function ALq(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gt=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I0=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaK(callback);return thread.suspend(function(){try{A3t(b,callback);}catch($e){callback.I0($rt_exception($e));}});}
function A3t(b,c){var d,e;Bb();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new Xa;b.vp=d;b.Aa=c;b=Ct(b,"stateChanged");d.onreadystatechange=b;d.send();}
function AAw(b,c){var d,e,f,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bb();BdI=b;d=$rt_str(BdI.getAttribute("style"));e=BdI;f=new T;V(f);if(d===null)d=B(3);d=U(J(J(f,d),B(25)));e.setAttribute("style",$rt_ustr(d));BdN=window;BdH=BdN.document;BdJ=BdH.createElement("canvas");Bd4=b.clientWidth;Bd5=b.clientHeight;f=BdJ;e=Bd4;f.width=e;f=BdJ;e=Bd5;f.height=e;BdK=BdJ.getContext("2d");BdJ.setAttribute("id","deevis589723589");f=BdJ;b.appendChild(f);BdL
=BdH.createElement("canvas");b=BdL;f=Bd4;b.width=f;b=BdL;f=Bd5;b.height=f;b=BdL;e=AEQ();BdM=b.getContext("webgl2",e);if(BdM===null){b=new B6;c=new T;V(c);Bl(b,U(J(J(J(c,B(26)),$rt_str(window.navigator.userAgent)),B(27))));M(b);}Yc(BdM);BdM.getExtension("EXT_texture_filter_anisotropic");b=BdN;e=new Xb;BdP=e;b.addEventListener("contextmenu",Ct(e,"handleEvent"));b=BdJ;e=new Xh;BdQ=e;b.addEventListener("mousedown",Ct(e,"handleEvent"));b=BdJ;e=new Xi;BdR=e;b.addEventListener("mouseup",Ct(e,"handleEvent"));b=BdJ;e
=new Xf;BdS=e;b.addEventListener("mousemove",Ct(e,"handleEvent"));b=BdN;e=new Xg;BdT=e;b.addEventListener("keydown",Ct(e,"handleEvent"));b=BdN;e=new Xd;BdU=e;b.addEventListener("keyup",Ct(e,"handleEvent"));b=BdN;e=new Xe;BdV=e;b.addEventListener("keypress",Ct(e,"handleEvent"));b=BdJ;e=new Xc;BdW=e;b.addEventListener("wheel",Ct(e,"handleEvent"));b=BdN;e=new QD;b.addEventListener("blur",Ct(e,"handleEvent"));b=BdN;e=new QC;b.addEventListener("focus",Ct(e,"handleEvent"));ANZ();$p=1;case 1:AJS();if(C()){break _;}$p
=2;case 2:ALq(c);if(C()){break _;}a:{try{AMe(BdO);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof B3){f=$$je;}else{throw $$e;}}CF(f);}Bey=AYv();OA(BdY);OA(BdZ);return;default:Fa();}}C3().s(b,c,d,e,f,$p);}
function K5(b){Bb();BdM.enable(b);}
function J6(b){Bb();BdM.disable(b);}
function AH7(){var b,c;Bb();b=new V8;b.iZ=BdM.createProgram();c=Bd8+1|0;Bd8=c;b.xm=c;return b;}
function OJ(b){var c;Bb();c=new Wa;c.jp=BdM.createShader(b);return c;}
function Sg(b,c){var d;Bb();d=BdM;b=b.iZ;c=c.jp;d.attachShader(b,c);}
function UR(b,c){var d;Bb();d=BdM;b=b.iZ;c=c.jp;d.detachShader(b,c);}
function WK(b){var c;Bb();c=BdM;b=b.jp;c.compileShader(b);}
function AAL(b){var c;Bb();c=BdM;b=b.iZ;c.linkProgram(b);}
function O5(b,c){var d;Bb();d=BdM;b=b.jp;d.shaderSource(b,$rt_ustr(c));}
function Uf(b){var c;Bb();c=BdM;b=b.jp;return $rt_str(c.getShaderInfoLog(b));}
function AHz(b){var c;Bb();c=BdM;b=b.iZ;return $rt_str(c.getProgramInfoLog(b));}
function Vm(b){var c;Bb();c=BdM;b=b.jp;return c.getShaderParameter(b,35713)!=1?0:1;}
function AGr(b){var c;Bb();c=BdM;b=b.iZ;return c.getProgramParameter(b,35714)!=1?0:1;}
function Tm(b){var c;Bb();c=BdM;b=b.jp;c.deleteShader(b);}
function L$(){var b;Bb();b=new Wh;b.D2=BdM.createBuffer();return b;}
function Hh(b,c){var d;Bb();d=BdM;c=c!==null?c.D2:null;d.bindBuffer(b,c);}
function PG(b,c,d){var e;Bb();e=BdM;c=c;e.bufferData(b,c,d);}
function N$(b){Bb();BdM.enableVertexAttribArray(b);}
function Dp(b,c){var d;Bb();d=BdM;b=b.iZ;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new Xm;b.kw=d;}return b;}
function LZ(b,c,d){var e;Bb();e=BdM;b=b.iZ;e.bindAttribLocation(b,c,$rt_ustr(d));}
function Ih(b,c){var d;Bb();if(b!==null){d=BdM;b=b.kw;d.uniform1f(b,c);}}
function Lq(b,c,d,e){var f;Bb();if(b!==null){f=BdM;b=b.kw;f.uniform3f(b,c,d,e);}}
function Up(b,c,d,e,f){var g,h;Bb();if(b!==null){g=BdM;h=b.kw;g.uniform4f(h,c,d,e,f);}}
function Re(b,c){var d;Bb();if(b!==null){d=BdM;b=b.kw;d.uniform1i(b,c);}}
function Mj(b,c){var d,e;Bb();Beb.set(c.data);if(b!==null){d=BdM;e=b.kw;b=Beb;d.uniformMatrix4fv(e,!!0,b);}}
function V6(b){var c;Bb();if(b!==null&&Bec!=b.xm){Bec=b.xm;c=BdM;b=b.iZ;c.useProgram(b);}}
function Oa(b,c,d,e,f,g){Bb();BdM.vertexAttribPointer(b,c,d,!!e,f,g);}
function Pd(){var b;Bb();b=new SF;b.A1=BdM.createVertexArray();b.vQ=0;return b;}
function RW(b){var c;Bb();c=BdM;b=b!==null?b.A1:null;c.bindVertexArray(b);}
function AEX(b){var c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bb();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=AIy(c);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(b,c,$p);}
function AIy(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gt=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I0=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaK(callback);return thread.suspend(function(){try{AWV(b,callback);}catch($e){callback.I0($rt_exception($e));}});}
function AWV(b,c){var d,e,f;Bb();d=BdH.createElement("img");e=new QG;e.fZ=d;e.x_=c;d.addEventListener("load",Ct(e,"handleEvent"));f=new QF;f.Eo=d;f.E6=c;d.addEventListener("error",Ct(f,"handleEvent"));e=$rt_str(ANK(b,"image/png"));if(e===null)CM(c,null);else{b=$rt_ustr(e);d.src=b;}}
function Lt(){var b,c,d;Bb();b=BdI.clientWidth;if(b!=Bd4){c=BdJ;d=b;c.width=d;c=BdL;d=b;c.width=d;Bd4=b;}return b;}
function MF(){var b,c,d;Bb();b=BdI.clientHeight;if(b!=Bd5){c=BdJ;d=b;c.height=d;c=BdL;d=b;c.height=d;Bd5=b;}return b;}
function Ky(){Bb();return Long_fromInt(1073741824);}
function J2(){Bb();return Long_fromInt(1073741824);}
function Kf(){Bb();return Long_ZERO;}
function UN(b){Bb();return b.byteLength;}
function T8(b){Bb();return b<=BeD.data.length&&b>=0?BeD.data[b]:(-1);}
function QT(b,c){var d,e;Bb();d=new EU;e=new UJ;e.C3=b;e.C4=c;JD(d,e);Ii(d);}
function ALK(b){var c,d,e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bb();c=BeJ;$p=1;case 1:$z=A_O(c,b);if(C()){break _;}b=$z;if(b===null)d=null;else{d=$rt_createByteArray(b.byteLength);e=d.data;b=new Uint8Array(b);f=0;g=e.length;while(f<g){e[f]=b[f]<<24>>24;f=f+1|0;}}return d;default:Fa();}}C3().s(b,c,d,e,f,g,$p);}
function NH(b,c){var d,e;Bb();d=new EU;e=new Tt;e.Bp=b;e.Bo=c;JD(d,e);Ii(d);}
function EQ(b){var c,d;Bb();c=new EU;d=new Tc;d.z3=b;JD(c,d);Ii(c);}
function Wc(){Bb();return BdO;}
function RR(){Bb();return Beh;}
function MR(){Bb();return BdY;}
function Mv(){Bb();if(Long_gt(Long_sub(B$(),Bej),Long_fromInt(3000))&&Bel&&!(document.pointerLockElement!=null?1:0)){BdJ.requestPointerLock();if(document.pointerLockElement!=null?1:0)Bel=0;}}
function P6(){Bb();return Bei;}
function QH(b){Bb();return b.which;}
function S_(b){Bb();return T8(b);}
function NR(){Bb();return BdZ;}
function SZ(b){Bb();Bd7=b;return b;}
function Hn(){Bb();return Bed;}
function JU(){Bb();return Bee;}
function WM(b){Bb();URL.revokeObjectURL($rt_ustr(b));}
function VV(){Bb();return Bek;}
function M0(b){Bb();Bek=b;return b;}
function P2(){Bb();return Bej;}
function ATP(){var b,c;BdG=0;BdH=null;BdI=null;BdJ=null;BdK=null;BdL=null;BdM=null;BdN=null;BdO=null;BdP=null;BdQ=null;BdR=null;BdS=null;BdT=null;BdU=null;BdV=null;BdW=null;BdX=I(B2,0);BdY=Q1();BdZ=Q1();Bd0=0;Bd1=0;Bd2=0.0;Bd3=0.0;Bd4=0;Bd5=0;Bd6=0;Bd7=1;Bd8=0;Bd9=$rt_createIntArray(4);Bd$=new Uint8Array(new ArrayBuffer(4194304));Bd_=new Float32Array(4);Bea=new Float32Array(9);Beb=new Float32Array(16);Bec=(-1);Bed=null;Bee=null;Bef=null;Beg=null;Beh=$rt_createBooleanArray(8);Bei=$rt_createBooleanArray(256);Bej
=Long_ZERO;Bek=0;Bel=0;Bem=0;Ben=Ga();Beo=Ga();Bep=null;Beq=0;Ber=0;Bes=0;Bet=Q1();Beu=null;Bev=null;Bew=0;Bex=Dd();Bey=null;Bez=0.029999999329447746;BeA=Dd();BeB=0;b=I(B2,256);c=b.data;c[0]=B(28);c[1]=B(29);c[2]=B(30);c[3]=B(31);c[4]=B(32);c[5]=B(33);c[6]=B(34);c[7]=B(35);c[8]=B(36);c[9]=B(37);c[10]=B(38);c[11]=B(2);c[12]=B(39);c[13]=B(40);c[14]=B(41);c[15]=B(42);c[16]=B(43);c[17]=B(44);c[18]=B(45);c[19]=B(46);c[20]=B(47);c[21]=B(48);c[22]=B(49);c[23]=B(50);c[24]=B(51);c[25]=B(52);c[26]=B(53);c[27]=B(54);c[28]
=B(55);c[29]=B(56);c[30]=B(57);c[31]=B(58);c[32]=B(59);c[33]=B(60);c[34]=B(61);c[35]=B(62);c[36]=B(63);c[37]=B(64);c[38]=B(65);c[39]=B(66);c[40]=B(67);c[41]=B(68);c[42]=B(69);c[43]=B(70);c[44]=B(71);c[45]=B(72);c[46]=B(73);c[47]=B(74);c[48]=B(75);c[49]=B(76);c[50]=B(77);c[51]=B(78);c[52]=B(79);c[53]=B(80);c[54]=B(81);c[55]=B(82);c[56]=B(83);c[57]=B(84);c[58]=B(85);c[59]=B(86);c[60]=B(87);c[61]=B(88);c[62]=B(89);c[63]=B(90);c[64]=B(91);c[65]=B(92);c[66]=B(93);c[67]=B(94);c[68]=B(95);c[69]=B(96);c[70]=B(97);c[71]
=B(98);c[72]=B(99);c[73]=B(100);c[74]=B(101);c[75]=B(102);c[76]=B(103);c[77]=B(104);c[78]=B(105);c[79]=B(106);c[80]=B(107);c[81]=B(108);c[82]=B(109);c[83]=B(110);c[84]=B(10);c[85]=B(10);c[86]=B(10);c[87]=B(111);c[88]=B(112);c[89]=B(10);c[90]=B(10);c[91]=B(10);c[92]=B(10);c[93]=B(10);c[94]=B(10);c[95]=B(10);c[96]=B(10);c[97]=B(10);c[98]=B(10);c[99]=B(10);c[100]=B(113);c[101]=B(114);c[102]=B(115);c[103]=B(116);c[104]=B(117);c[105]=B(118);c[106]=B(10);c[107]=B(10);c[108]=B(10);c[109]=B(10);c[110]=B(10);c[111]=
B(10);c[112]=B(119);c[113]=B(120);c[114]=B(10);c[115]=B(10);c[116]=B(10);c[117]=B(10);c[118]=B(10);c[119]=B(10);c[120]=B(10);c[121]=B(121);c[122]=B(10);c[123]=B(122);c[124]=B(10);c[125]=B(123);c[126]=B(10);c[127]=B(10);c[128]=B(10);c[129]=B(10);c[130]=B(10);c[131]=B(10);c[132]=B(10);c[133]=B(10);c[134]=B(10);c[135]=B(10);c[136]=B(10);c[137]=B(10);c[138]=B(10);c[139]=B(10);c[140]=B(10);c[141]=B(124);c[142]=B(10);c[143]=B(10);c[144]=B(125);c[145]=B(126);c[146]=B(127);c[147]=B(128);c[148]=B(129);c[149]=B(130);c[150]
=B(131);c[151]=B(132);c[152]=B(10);c[153]=B(10);c[154]=B(10);c[155]=B(10);c[156]=B(133);c[157]=B(134);c[158]=B(10);c[159]=B(10);c[160]=B(10);c[161]=B(10);c[162]=B(10);c[163]=B(10);c[164]=B(10);c[165]=B(10);c[166]=B(10);c[167]=B(135);c[168]=B(10);c[169]=B(10);c[170]=B(10);c[171]=B(10);c[172]=B(10);c[173]=B(10);c[174]=B(10);c[175]=B(10);c[176]=B(10);c[177]=B(10);c[178]=B(10);c[179]=B(136);c[180]=B(10);c[181]=B(137);c[182]=B(10);c[183]=B(138);c[184]=B(139);c[185]=B(10);c[186]=B(10);c[187]=B(10);c[188]=B(10);c[189]
=B(10);c[190]=B(10);c[191]=B(10);c[192]=B(10);c[193]=B(10);c[194]=B(10);c[195]=B(10);c[196]=B(140);c[197]=B(141);c[198]=B(10);c[199]=B(142);c[200]=B(143);c[201]=B(144);c[202]=B(10);c[203]=B(145);c[204]=B(10);c[205]=B(146);c[206]=B(10);c[207]=B(147);c[208]=B(148);c[209]=B(149);c[210]=B(150);c[211]=B(151);c[212]=B(10);c[213]=B(10);c[214]=B(10);c[215]=B(10);c[216]=B(10);c[217]=B(10);c[218]=B(152);c[219]=B(153);c[220]=B(154);c[221]=B(155);c[222]=B(156);c[223]=B(157);c[224]=B(10);c[225]=B(10);c[226]=B(10);c[227]
=B(10);c[228]=B(10);c[229]=B(10);c[230]=B(10);c[231]=B(10);c[232]=B(10);c[233]=B(10);c[234]=B(10);c[235]=B(10);c[236]=B(10);c[237]=B(10);c[238]=B(10);c[239]=B(10);c[240]=B(10);c[241]=B(10);c[242]=B(10);c[243]=B(10);c[244]=B(10);c[245]=B(10);c[246]=B(10);c[247]=B(10);c[248]=B(10);c[249]=B(10);c[250]=B(10);c[251]=B(10);c[252]=B(10);c[253]=B(10);c[254]=B(10);c[255]=B(10);BeC=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=14;c[9]=15;c[10]
=(-1);c[11]=(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]
=(-1);c[63]=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]=52;c[111]=53;c[112]=(-1);c[113]
=(-1);c[114]=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]=(-1);c[154]=(-1);c[155]=(-1);c[156]
=(-1);c[157]=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]=(-1);c[198]=(-1);c[199]=(-1);c[200]
=(-1);c[201]=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;BeD=b;BeE=0;BeF=new Int32Array(new ArrayBuffer(2100000));BeG=0;}
function Yc(b){window.currentContext=b;}
function ANZ(){if (!ANZ.$native){
ANZ.$native=function(){return (function(){window.eagsFileChooser = {
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
};})();};ANZ=ANZ.$native;}return ANZ();}
function AEQ(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function ANK(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function ANE(b){if(b.commit)b.commit();}
function S0(){}
function JF(){}
function N2(){}
function HC(){D.call(this);this.wc=null;}
function BeK(a){var b=new HC();Wl(b,a);return b;}
function Wl(a,b){if(b!==null){a.wc=b;return;}b=new EF;O(b);M(b);}
function ABn(){HC.call(this);this.xZ=null;}
function A9d(){var a=new ABn();A25(a);return a;}
function A25(a){var b;a.wc=a;b=new Lj;GD(b,16);a.xZ=b;a.wc=a.xZ;}
function AK_(a){return;}
function AEB(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;I0(a.xZ,b,c,d);return;}}f=new BM;O(f);M(f);}
function Lw(){var a=this;HC.call(a);a.mz=null;a.FT=0;a.yf=0;}
function AFB(a){var $$je;a:{if(a.mz===null)Kh(a);else{try{AK_(a.mz);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof B3){}else{throw $$e;}}Kh(a);}}}
function Hp(a,b){if(b===null)b=Uv(null);Yy(a,b);}
function ST(a){Hp(a,B(158));if(a.yf)AFB(a);}
function AAJ(a,b){ABV(a,Uv(b));}
function ABV(a,b){Hp(a,b);ST(a);}
function Kh(a){a.FT=1;}
function AR3(a,b){AAs(a,b,0,b.data.length);}
function AAs(a,b,c,d){var $$je;a:{if(a.mz===null)Kh(a);else{try{AEB(a.mz,b,c,d);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof B3){}else{throw $$e;}}Kh(a);}}}
function Yy(a,b){AR3(a,Nz(b));}
function AFf(){D.call(this);}
function BeL(){var a=new AFf();AWb(a);return a;}
function AWb(a){return;}
function AFU(){D.call(this);}
function GT(){}
function Iq(){var a=this;D.call(a);a.cB=null;a.cd=0;a.bA=0;a.be=null;a.B=null;a.dX=null;a.f=null;a.c6=null;a.k0=null;a.bs=0;a.bo=null;a.e$=null;a.D=null;a.is=null;a.eV=null;a.bN=0;a.c$=0;a.Hk=null;a.F3=0;a.nX=null;a.h8=0;a.Gy=null;a.cf=null;a.o=null;a.yj=null;a.Dc=null;a.BI=null;a.gR=0;a.lA=null;a.gS=Long_ZERO;a.bp=0;a.co=0;a.cU=0;a.dB=Long_ZERO;}
var BeM=null;var BeN=0;var Bdc=null;function AIt(a){var b,c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.o=Bac(a);b=new KL;c=a.o;BeO=Dd();b.zj=Dd();b.kx=Rl(1);b.hd=WU(1048576);b.lY=WU(1048576);b.Cf=Cg();b.sT=0;b.D1=0;b.wI=c;a.bo=b;c=new Wn;d=a.o;b=B(159);e=a.bo;$p=1;case 1:AOL(c,d,b,e);if(C()){break _;}a.e$=c;$p=2;case 2:Yv(a);if(C()){break _;}a.yj=new Qp;Ei(a,B(160));Ba(3553);Bb();BdM.clearDepth((-1.0));Ba(2929);HL(515);Ba(3008);SA(516,
0.10000000149011612);BdM.cullFace(1029);C$(5889);C9();C$(5888);Ei(a,B(161));G9(a.bo,a.BI);G9(a.bo,a.Dc);G9(a.bo,Bay());G9(a.bo,BcG());G9(a.bo,AVL(0));G9(a.bo,AVL(1));a.dX=BaX(a,a.bo);FP(0,0,a.cd,a.bA);e=Bdc;b=LQ();c=B(162);d=B(163);$p=3;case 3:AR2(e,b,c,d);if(C()){break _;}b=new O4;c=a.B;d=a.bo;b.cD=I(J7,3);b.st=new DA;if(c!==null)b.mT=c;b.je=d;f=0;while(f<3){b.cD.data[f]=Cg();f=f+1|0;}a.c6=b;Ei(a,B(164));b=new Nw;Nh(b);b.g7=Cg();b.vt=new DA;b.FY=null;b.rU=0;b.IK=1.0;b.b2=a;a.nX=b;return;default:Fa();}}C3().s(a,
b,c,d,e,f,$p);}
function Yv(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=FJ(a.cd,a.bA);c=b.fM;d=b.fJ;D5(16640);C$(5889);C9();Ir(0.0,c,d,0.0,1000.0,3000.0);C$(5888);C9();Bw(0.0,0.0,(-2000.0));FP(0,0,a.cd,a.bA);HB(0.0,0.0,0.0,0.0);Bd(2896);Bd(2912);Ba(3553);BA();e=BeP;f=3553;b=a.bo;g=B(165);$p=1;case 1:$z=AHy(b,g);if(C()){break _;}d=$z;Cn(f,d);BS(1.0,1.0,1.0,1.0);Bz(e);ET(e,4210752);G(e,0.0,a.bA,0.0,0.0,a.bA/32.0
+0.0);G(e,a.cd,a.bA,0.0,a.cd/32.0,a.bA/32.0+0.0);G(e,a.cd,0.0,0.0,a.cd/32.0,0.0);G(e,0.0,0.0,0.0,0.0,0.0);Br(e);Ba(3008);SA(516,0.10000000149011612);Cx(a.e$,B(166),8,(a.bA/2|0)-16|0,(-1));return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADY(a,b){var c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D instanceof RD)return;if(a.D!==null){c=a.D;$p=1;continue _;}if(b===null&&a.B===null)b=LQ();else if(b===null&&a.f.bT<=0){b=new Mp;DR(b);}a.D=b;if(b===null){$p=2;continue _;}W8(a);c=FJ(a.cd,a.bA);d=c.fM;e=c.fJ;$p=3;continue _;case 1:c.pt();if(C()){break _;}if(b===null&&a.B===null)b=LQ();else if(b===null&&a.f.bT<=0){b=new Mp;DR(b);}a.D=b;if(b===null){$p=2;continue _;}W8(a);c
=FJ(a.cd,a.bA);d=c.fM;e=c.fJ;$p=3;continue _;case 2:AFm(a);if(C()){break _;}return;case 3:AQa(b,a,d,e);if(C()){break _;}a.h8=0;return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AR2(a,b,c,d){var e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=new UO;DR(e);e.qv=Cg();e.Ew=b;e.Ax=c;e.Aw=d;$p=1;case 1:ADY(a,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function Ei(a,b){var c,d,e,f;BV();Bb();c=BdM.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(167);break a;case 1281:d=B(168);break a;case 1282:d=B(169);break a;case 1285:d=B(170);break a;default:d=B(171);break a;}d=B(172);}Co(Dy(),B(173));e=Dy();f=new T;V(f);Co(e,U(J(J(f,B(174)),b)));b=Dy();e=new T;V(e);Co(b,U(J(J(Bf(e,c),B(12)),d)));}}
function Yp(a){var b,c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gR=1;$p=1;case 1:AIt(a);if(C()){break _;}b=B$();c=0;if(!a.gR)return;BeQ=0;BeR=0;if(!a.bs)FQ(a.be);else{d=a.be.cY;FQ(a.be);a.be.cY=d;}e=0;if(e<a.be.i6){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.be.cY=1.0;Ba(3553);if(a.B!==null){f=a.B;$p=3;continue _;}if(!a.h8){GR(a.cB,a.be.cY);f=a.eV;d=a.be.cY;$p
=4;continue _;}if(BL(33)&&BL(7))FZ(a);else a.gS=EH();$p=5;continue _;case 2:AFG(a);if(C()){break _;}e=e+1|0;if(e<a.be.i6){a.bN=a.bN+1|0;continue _;}Ei(a,B(175));if(a.bs)a.be.cY=1.0;Ba(3553);if(a.B!==null){f=a.B;$p=3;continue _;}if(!a.h8){GR(a.cB,a.be.cY);f=a.eV;d=a.be.cY;$p=4;continue _;}if(BL(33)&&BL(7))FZ(a);else a.gS=EH();$p=5;continue _;case 3:$z=AIq(f);if(C()){break _;}g=$z;if(g){f=a.B;continue _;}if(!a.h8){GR(a.cB,a.be.cY);f=a.eV;d=a.be.cY;$p=4;continue _;}if(BL(33)&&BL(7))FZ(a);else a.gS=EH();$p=5;continue _;case 4:AFQ(f,
d);if(C()){break _;}if(BL(33)&&BL(7))FZ(a);else a.gS=EH();$p=5;case 5:XI();if(C()){break _;}$p=6;case 6:AU0();if(C()){break _;}if(!(Lt()==a.cd&&MF()==a.bA)){a.cd=BdJ.width;a.bA=BdJ.height;if(a.cd<=0)a.cd=1;if(a.bA<=0)a.bA=1;g=a.cd;h=a.bA;if(g<=0)g=1;if(h<=0)h=1;a.cd=g;a.bA=h;if(a.D!==null){f=FJ(g,h);h=f.fM;g=f.fJ;f=a.D;$p=8;continue _;}}if(a.o.mq){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof E3){f=$$je;}else{throw $$e;}}f.tE();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.n_()
?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new T;V(f);f=J(Bf(f,c),B(177));Tw();a.lA=U(J(Bf(f,BeS),B(178)));BeS=0;c=0;b=i;}if(!a.gR)return;BeQ=0;BeR=0;if(!a.bs)FQ(a.be);else{d=a.be.cY;FQ(a.be);a.be.cY=d;}e=0;if(e<a.be.i6){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.be.cY=1.0;Ba(3553);if(a.B!==null){f=a.B;$p=3;continue _;}if(!a.h8){GR(a.cB,a.be.cY);f=a.eV;d=a.be.cY;$p=4;continue _;}if(BL(33)&&BL(7))FZ(a);else a.gS=EH();$p=5;continue _;case 7:a:{try{AKI(i);if(C())
{break _;}break a;}catch($$e){$$je=Bj($$e);if($$je instanceof E3){f=$$je;}else{throw $$e;}}f.tE();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.n_()?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new T;V(f);f=J(Bf(f,c),B(177));Tw();a.lA=U(J(Bf(f,BeS),B(178)));BeS=0;c=0;b=i;}if(!a.gR)return;BeQ=0;BeR=0;if(!a.bs)FQ(a.be);else{d=a.be.cY;FQ(a.be);a.be.cY=d;}e=0;if(e<a.be.i6){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.be.cY=1.0;Ba(3553);if(a.B!==null){f=a.B;$p=3;continue _;}if
(!a.h8){GR(a.cB,a.be.cY);f=a.eV;d=a.be.cY;$p=4;continue _;}if(BL(33)&&BL(7))FZ(a);else a.gS=EH();$p=5;continue _;case 8:AQa(f,a,h,g);if(C()){break _;}if(a.o.mq){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof E3){f=$$je;}else{throw $$e;}}f.tE();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.n_()?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new T;V(f);f=J(Bf(f,c),B(177));Tw();a.lA=U(J(Bf(f,BeS),B(178)));BeS=0;c=0;b=i;}if(!a.gR)return;BeQ=0;BeR=
0;if(!a.bs)FQ(a.be);else{d=a.be.cY;FQ(a.be);a.be.cY=d;}e=0;if(e<a.be.i6){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.be.cY=1.0;Ba(3553);if(a.B!==null){f=a.B;$p=3;continue _;}if(!a.h8){GR(a.cB,a.be.cY);f=a.eV;d=a.be.cY;$p=4;continue _;}if(BL(33)&&BL(7))FZ(a);else a.gS=EH();$p=5;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function FZ(a){var b,c,d,e,f,g,h,i,j,k,l;if(Long_eq(a.gS,Long_fromInt(-1)))a.gS=EH();b=EH();c=BeM.data;d=BeN;BeN=d+1|0;c[d&(BeM.data.length-1|0)]=Long_sub(b,a.gS);a.gS=b;D5(256);C$(5889);C9();Ir(0.0,a.cd,a.bA,0.0,1000.0,3000.0);C$(5888);C9();Bw(0.0,0.0,(-2000.0));Bd(3553);BA();e=BeP;Gm(e,7);ET(e,538968064);Be(e,0.0,a.bA-100|0,0.0);Be(e,0.0,a.bA,0.0);Be(e,BeM.data.length,a.bA,0.0);Be(e,BeM.data.length,a.bA-100|0,0.0);Br(e);f=Long_ZERO;d=0;while(d<BeM.data.length){f=Long_add(f,BeM.data[d]);d=d+1|0;}d=Long_div(Long_div(f,
Long_fromInt(200000)),Long_fromInt(BeM.data.length)).lo;Gm(e,7);ET(e,541065216);Be(e,0.0,a.bA-d|0,0.0);Be(e,0.0,a.bA,0.0);Be(e,BeM.data.length,a.bA,0.0);Be(e,BeM.data.length,a.bA-d|0,0.0);Br(e);Gm(e,1);g=0;while(g<BeM.data.length){h=(((g-BeN|0)&(BeM.data.length-1|0))*255|0)/BeM.data.length|0;i=Bi(h,h)/255|0;d=Bi(i,i)/255|0;j=Bi(d,d)/255|0;ET(e,(((-16777216)+(Bi(j,j)/255|0)|0)+(d*256|0)|0)+(h*4096|0)|0);k=Long_div(BeM.data[g],Long_fromInt(200000));l=g+0.5;Be(e,l,Long_toNumber(Long_sub(Long_fromInt(a.bA),k))+
0.5,0.0);Be(e,l,a.bA+0.5,0.0);g=g+1|0;}Br(e);Ba(3553);}
function AFm(a){var b,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Om()&&!a.bp){a.bp=1;YG(a.yj);b=null;$p=1;continue _;}return;case 1:ADY(a,b);if(C()){break _;}a.co=a.bN+10000|0;return;default:Fa();}}C3().s(a,b,$p);}
function W8(a){if(a.bp){if(a.f!==null)ARM(a.f);a.bp=0;AFD(a.yj);}}
function ALe(a){var b,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D!==null)return;b=Bcu();$p=1;case 1:ADY(a,b);if(C()){break _;}return;default:Fa();}}C3().s(a,b,$p);}
function AAM(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.cB.DY&&!(!b&&a.c$>0)){if(c&&a.cf!==null&&!a.cf.k8&&!b){d=a.cf.h$;e=a.cf.h_;f=a.cf.ia;g=a.cB;b=a.cf.hL;$p=1;continue _;}ALV(a.cB);}return;case 1:YT(g,d,e,f,b);if(C()){break _;}g=a.c6;b=a.cf.hL;$p=2;case 2:Y8(g,d,e,f,b);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AB7(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(!b&&a.c$>0)){if(!b)Pp(a.eV.iK);a:{if(a.cf!==null){if(a.cf.k8!=1){if(a.cf.k8)break a;c=a.cf.h$;d=a.cf.h_;e=a.cf.ia;f=a.cf.hL;L();g=BeT.data;h=a.B;$p=1;continue _;}if(!b){h=a.f;i=a.cf.nA;$p=2;continue _;}if(b==1)Vw(a.f,a.cf.nA);}else if(!b&&!(a.cB instanceof Dt))a.c$=10;}if
(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.B;j=a.f;$p=5;continue _;}}}return;case 1:$z=ACB(h,c,d,e);if(C()){break _;}k=$z;j=g[k];if(!b){h=a.B;k=a.cf.hL;$p=4;continue _;}l=D9(a.f.K);h=a.B;$p=3;continue _;case 2:ADz(h,i);if(C()){break _;}if(b==1)Vw(a.f,a.cf.nA);if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.B;j=a.f;$p=5;continue _;}}return;case 3:$z=ACB(h,c,d,e);if(C()){break _;}k=$z;if(k>0){h=BeT.data[k];i=a.B;j=a.f;$p=6;continue _;}if(l===null)return;m=l.p;h=a.f;i=a.B;$p=8;continue _;case 4:ABP(h,c,d,e,k);if(C())
{break _;}if(j===BeU&&a.f.AJ<100){if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.B;j=a.f;$p=5;continue _;}}return;}h=a.cB;$p=7;continue _;case 5:b:{$z=ABl(h,i,j);if(C()){break _;}i=$z;if(i===h){if(i===null)break b;if(i.p==d)break b;}a.f.K.bf.data[a.f.K.bL]=i;ANb(a.eV.iK);if(!i.p)a.f.K.bf.data[a.f.K.bL]=null;}return;case 6:$z=h.lD(i,c,d,e,j);if(C()){break _;}k=$z;if(k)return;if(l===null)return;m=l.p;h=a.f;i=a.B;$p=8;continue _;case 7:AE7(h,c,d,e);if(C()){break _;}if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.B;j=
a.f;$p=5;continue _;}}return;case 8:$z=AJl(l,h,i,c,d,e,f);if(C()){break _;}c=$z;if(c)Pp(a.eV.iK);if(!l.p)a.f.K.bf.data[a.f.K.bL]=null;else if(l.p!=m)AGP(a.eV.iK);if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.B;j=a.f;$p=5;continue _;}}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AHQ(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.cf===null)return;b=a.B;c=a.cf.h$;d=a.cf.h_;e=a.cf.ia;$p=1;case 1:$z=ACB(b,c,d,e);if(C()){break _;}c=$z;L();if(c==BeV.b)c=BeW.b;if(c==BeX.b)c=BeY.b;if(c==BeU.b)c=BeZ.b;ARn(a.f.K,c,a.cB instanceof Dt);return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AFG(a){var b,c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AKC(a.nX);if(!a.bs&&a.B!==null){b=a.cB;$p=2;continue _;}c=3553;d=a.bo;b=B(179);$p=1;case 1:$z=AHy(d,b);if(C()){break _;}e=$z;Cn(c,e);if(a.D===null&&a.f!==null&&a.f.bT<=0){b=null;$p=3;continue _;}if(a.D!==null&&!a.D.pS){if(a.D!==null)a.co=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.B!==null){a.B.i2=a.o.jW;if(!a.bs){b=a.eV;$p=7;continue _;}if
(!a.bs)HX(a.dX);if(!a.bs){b=a.B;$p=13;continue _;}if(!a.bs&&!GH(a)){b=a.B;$p=19;continue _;}if(!a.bs){b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B$();return;}a:while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if
(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Dt){Bg();Bg();}if(Bg()==33&&BL(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.fs.bI){b=E8(a.f.K);$p=17;continue _;}if(Bg()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.f9.bI)continue;Ea(a.o,4,!BL(42)&&!BL(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dB),Long_fromInt(200)))continue;c=G3();if(c)F7(a.f.K,c);b:{if(a.D!==null){if(a.D===null)break b;else
{b=a.D;$p=5;continue _;}}if(!a.bp&&Cw()){$p=8;continue _;}if(!CV()&&Cw()){c=0;$p=11;continue _;}if(CV()==1&&Cw()){c=1;$p=14;continue _;}if(CV()==2&&Cw())break a;}}$p=16;continue _;case 2:AI7(b);if(C()){break _;}c=3553;d=a.bo;b=B(179);$p=1;continue _;case 3:ADY(a,b);if(C()){break _;}if(a.D!==null&&!a.D.pS){if(a.D!==null)a.co=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.B!==null){a.B.i2=a.o.jW;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs)HX(a.dX);if(!a.bs){b=a.B;$p=13;continue _;}if(!a.bs&&!GH(a)){b=
a.B;$p=19;continue _;}if(!a.bs){b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B$();return;}c:while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Dt)
{Bg();Bg();}if(Bg()==33&&BL(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.fs.bI){b=E8(a.f.K);$p=17;continue _;}if(Bg()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.f9.bI)continue;Ea(a.o,4,!BL(42)&&!BL(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dB),Long_fromInt(200)))continue;c=G3();if(c)F7(a.f.K,c);d:{if(a.D!==null){if(a.D===null)break d;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cw()){$p=8;continue _;}if(!CV()&&
Cw()){c=0;$p=11;continue _;}if(CV()==1&&Cw()){c=1;$p=14;continue _;}if(CV()==2&&Cw())break c;}}$p=16;continue _;case 4:AG_(b);if(C()){break _;}if(a.D!==null)a.D.rA();if(a.B!==null){a.B.i2=a.o.jW;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs)HX(a.dX);if(!a.bs){b=a.B;$p=13;continue _;}if(!a.bs&&!GH(a)){b=a.B;$p=19;continue _;}if(!a.bs){b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B$();return;case 5:ZF(b);if(C()){break _;}while(true){while(true){if(!FA()){if(a.c$
>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Dt){Bg();Bg();}if(Bg()==33&&BL(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.fs.bI){b=E8(a.f.K);$p=17;continue _;}if(Bg()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,
1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.f9.bI)continue;Ea(a.o,4,!BL(42)&&!BL(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;continue _;}}if(!a.bp&&Cw()){$p=8;continue _;}if(!CV()&&Cw()){c=0;$p=11;continue _;}if(CV()==1&&Cw()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cw())continue;else break;}$p=16;continue _;case 6:ASE(b);if(C())
{break _;}while(true){e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()==a.o.f9.bI)Ea(a.o,4,!BL(42)&&!BL(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;continue _;}if(Bg()==1)break;if(a.cB instanceof Dt){Bg();Bg();}if(Bg()==33&&BL(6)){a.o.cC=a.o.cC
?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.fs.bI){b=E8(a.f.K);$p=17;continue _;}if(Bg()!=a.o.gi.bI)continue;else{b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}}$p=9;continue _;case 7:AIT(b);if(C()){break _;}if(!a.bs)HX(a.dX);if(!a.bs){b=a.B;$p=13;continue _;}if(!a.bs&&!GH(a)){b=a.B;$p=19;continue _;}if(a.bs){if(a.bs){a.dB=B$();return;}b=a.c6;$p=21;continue _;}b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 8:AFm(a);if(C()){break _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true)
{if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Dt){Bg();Bg();}if(Bg()==33&&BL(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.fs.bI){b=E8(a.f.K);$p=17;continue _;}if(Bg()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=
0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.f9.bI)continue;Ea(a.o,4,!BL(42)&&!BL(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cw()){continue _;}if(!CV()&&Cw()){c=0;$p=11;continue _;}if(CV()==1&&Cw()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cw())continue;else break;}$p=16;continue _;case 9:ALe(a);if(C()){break _;}while(true){if(a.cB instanceof Dt)
{Bg();Bg();}if(Bg()==33&&BL(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.fs.bI){b=E8(a.f.K);$p=17;continue _;}if(Bg()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()==a.o.f9.bI)Ea(a.o,4,!BL(42)&&!BL(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,
Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()!=1)continue;else break;}continue _;case 10:AAM(a,c,e);if(C()){break _;}if(a.D!==null)a.co=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.B!==null){a.B.i2=a.o.jW;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs)HX(a.dX);if(!a.bs){b=a.B;$p=13;continue _;}if(!a.bs&&!GH(a)){b=a.B;$p=19;continue _;}if(!a.bs){b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B$();return;case 11:AB7(a,
c);if(C()){break _;}a.co=a.bN;while(true){if(CV()==1&&Cw()){c=1;$p=14;continue _;}if(CV()==2&&Cw()){$p=16;continue _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Dt){Bg();Bg();}if
(Bg()==33&&BL(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.fs.bI){b=E8(a.f.K);$p=17;continue _;}if(Bg()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.f9.bI)continue;Ea(a.o,4,!BL(42)&&!BL(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cw())break;if(CV())continue;if(!Cw())continue;else
{c=0;continue _;}}$p=8;continue _;case 12:AB7(a,c);if(C()){break _;}a.co=a.bN;if(B9(1)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=1;$p=15;continue _;}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;case 13:APj(b);if(C()){break _;}if(!a.bs&&!GH(a)){b=a.B;$p=19;continue _;}if(a.bs){if(a.bs){a.dB=B$();return;}b=a.c6;$p=21;continue _;}b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 14:AB7(a,c);if(C()){break _;}a.co=a.bN;while(true){if(CV()==2&&Cw()){$p=16;continue _;}while(true){while(true){if(!FA()){if
(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Dt){Bg();Bg();}if(Bg()==33&&BL(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.fs.bI){b=E8(a.f.K);$p=17;continue _;}if(Bg()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,
1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.f9.bI)continue;Ea(a.o,4,!BL(42)&&!BL(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cw())break;if(!CV()&&Cw()){c=0;$p=11;continue _;}if(CV()!=1)continue;if(!Cw())continue;else{c=1;continue _;}}$p=8;continue _;case 15:AB7(a,c);if(C()){break _;}a.co=a.bN;c=0;e=a.D
===null&&B9(0)&&a.bp?1:0;$p=10;continue _;case 16:AHQ(a);if(C()){break _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Dt){Bg();Bg();}if(Bg()==33&&BL(6)){a.o.cC=a.o.cC
?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.fs.bI){b=E8(a.f.K);$p=17;continue _;}if(Bg()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.f9.bI)continue;Ea(a.o,4,!BL(42)&&!BL(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cw()){$p=8;continue _;}if(!CV()&&Cw()){c=0;$p=11;continue _;}if(CV()
==1&&Cw()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cw())continue;else break;}continue _;case 17:ADY(a,b);if(C()){break _;}while(true){if(Bg()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()==a.o.f9.bI)Ea(a.o,4,!BL(42)&&!BL(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp
?1:0;$p=10;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Dt){Bg();Bg();}if(Bg()==33&&BL(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()!=a.o.fs.bI)continue;else{b=E8(a.f.K);continue _;}}$p=9;continue _;case 18:AFb(b,c,e,f);if(C()){break _;}if(a.bs){a.dB=B$();return;}b=a.c6;$p=21;continue _;case 19:X_(b);if(C()){break _;}if(a.bs){if(a.bs){a.dB=B$();return;}b=a.c6;$p=21;continue _;}b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 20:AQy(b,
d,c);if(C()){break _;}while(true){e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()==a.o.f9.bI)Ea(a.o,4,!BL(42)&&!BL(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.be.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Dt){Bg();Bg();}if(Bg()==33&&BL(6))
{a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.fs.bI){b=E8(a.f.K);$p=17;continue _;}if(Bg()!=a.o.gi.bI)continue;else{b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;continue _;}}$p=9;continue _;case 21:AA3(b);if(C()){break _;}a.dB=B$();return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function GH(a){return 0;}
function AH1(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:ABQ(a,c);if(C()){break _;}c=new F0;d=GA(new DA);$p=2;case 2:Q4(c,b,d);if(C()){break _;}if(!c.tF){b=B(180);$p=3;continue _;}b=B(181);$p=4;continue _;case 3:AF7(a,c,b);if(C()){break _;}return;case 4:AF7(a,c,b);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function ABQ(a,b){var c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=B(3);$p=1;case 1:AF7(a,b,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,$p);}
function AF7(a,b,c){var d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.B!==null){d=a.B;e=a.is;$p=1;continue _;}a.B=b;if(b===null){a.dB=Long_ZERO;return;}b.C_=a.e$;a.f=null;b.bh=a.f;$p=2;continue _;case 1:AJm(d,e);if(C()){break _;}a.B=b;if(b===null){a.dB=Long_ZERO;return;}b.C_=a.e$;a.f=null;b.bh=a.f;$p=2;case 2:AN4(a,c);if(C()){break _;}if(a.f===null){a.f=A6M(a,b,a.k0);c=a.f;$p=3;continue _;}a.f.hY=V$(a.o);if(a.dX!==null)Q7(a.dX,
b);if(a.c6!==null)O6(a.c6,b);b.bh=a.f;$p=4;continue _;case 3:ALa(c);if(C()){break _;}Rj(a.cB,a.f);a.f.hY=V$(a.o);if(a.dX!==null)Q7(a.dX,b);if(a.c6!==null)O6(a.c6,b);b.bh=a.f;$p=4;case 4:AGu(b);if(C()){break _;}if(!b.tF){a.dB=Long_ZERO;return;}c=a.is;$p=5;case 5:AJm(b,c);if(C()){break _;}a.dB=Long_ZERO;return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AN4(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AO5(a.is,b);b=a.is;c=B(182);$p=1;case 1:AR$(b,c);if(C()){break _;}d=128;e=289;f=(-128);g=f;while(g<=d){h=a.B.fj;i=a.B.fi;if(a.B.bh!==null){h=a.B.bh.d|0;i=a.B.bh.e|0;}j=f;if(j<=d){b=a.is;k=0+1|0;l=(0*100|0)/e|0;$p=4;continue _;}g=g+16|0;}b=a.is;c=B(183);$p=2;case 2:AR$(b,
c);if(C()){break _;}l=2000;Be0=1;d=0;if(d>=l){Be0=0;return;}b=a.B;m=1;$p=3;case 3:ABw(b,m);if(C()){break _;}d=d+1|0;if(d>=l){Be0=0;return;}b=a.B;m=1;continue _;case 4:XO(b,l);if(C()){break _;}b=a.B;l=h+g|0;m=64;n=i+j|0;$p=5;case 5:ACB(b,l,m,n);if(C()){break _;}b=a.B;$p=6;case 6:$z=AIq(b);if(C()){break _;}l=$z;if(l){b=a.B;continue _;}j=j+16|0;m=k;while(true){if(j<=d){b=a.is;k=m+1|0;l=(m*100|0)/e|0;$p=4;continue _;}g=g+16|0;if(g>d)break;h=a.B.fj;i=a.B.fi;if(a.B.bh!==null){h=a.B.bh.d|0;i=a.B.bh.e|0;}j=f;}b=a.is;c
=B(183);$p=2;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Mk(a){return ALp(a.dX);}
function Or(a){return X9(a.dX);}
function MO(a){var b;b=new T;V(b);return U(J(J(J(J(b,B(184)),XE(a.c6)),B(185)),AOb(a.B)));}
function ASB(a){var b,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.f!==null&&a.B!==null){b=a.f;$p=5;continue _;}b=a.B;$p=1;case 1:AP9(b);if(C()){break _;}a.f=A6M(a,a.B,a.k0);b=a.f;$p=2;case 2:ALa(b);if(C()){break _;}Rj(a.cB,a.f);if(a.B!==null){a.B.bh=a.f;b=a.B;$p=4;continue _;}a.f.hY=V$(a.o);b=B(186);$p=3;case 3:AN4(a,b);if(C()){break _;}return;case 4:AGu(b);if(C()){break _;}a.f.hY=V$(a.o);b=B(186);$p=3;continue _;case 5:Ca(b);if(C()){break _;}b=a.B;$p=1;continue _;default:
Fa();}}C3().s(a,b,$p);}
function AIL(){return Bdc;}
function Z5(){BeM=$rt_createLongArray(512);BeN=0;}
function ZL(){D.call(this);}
function Be1(){var a=new ZL();A2_(a);return a;}
function A2_(a){return;}
function Om(){var b,c;Bb();b=document.pointerLockElement!=null?1:0;c=Bem;Bem=b;if(!c&&b){Bd2=0.0;Bd3=0.0;}a:{b:{if(Bd7){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AU0(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bb();ANE(BdM);b=BdK;c=BdL;d=BdJ.width;e=BdJ.height;b.drawImage(c,0.0,0.0,d,e);f=BdJ.clientWidth;g=BdJ.clientHeight;if(!(f==Bd4&&g==Bd5)){Bd4=f;Bd5=g;c=BdL;h=f;c.width=h;c=BdL;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof E3){}else{throw $$e;}}return;case 1:a:{try{AKI(i);if
(C()){break _;}break a;}catch($$e){$$je=Bj($$e);if($$je instanceof E3){}else{throw $$e;}}}return;default:Fa();}}C3().s(b,c,d,e,f,g,h,i,$p);}
function Mn(){var a=this;D.call(a);a.oj=null;a.F7=null;a.GD=null;}
var Be2=null;function Bbm(){Bbm=Bt(Mn);A_G();}
function A_G(){var b;Be2=Cg();b=Be2;L();S(b,BeZ);S(Be2,Be3);S(Be2,Be4);S(Be2,BeW);S(Be2,Be5);S(Be2,Be6);S(Be2,Be7);S(Be2,Be8);S(Be2,BeY);S(Be2,Be9);S(Be2,Be$);S(Be2,Be_);S(Be2,Bfa);S(Be2,Bfb);S(Be2,Bfc);S(Be2,Bfd);S(Be2,Bfe);S(Be2,Bff);S(Be2,Bfg);S(Be2,Bfh);S(Be2,Bfi);S(Be2,Bfj);S(Be2,Bfk);S(Be2,Bfl);S(Be2,Bfm);S(Be2,Bfn);S(Be2,Bfo);S(Be2,Bfp);ABS(Dy(),Be2.s);}
function EU(){var a=this;D.call(a);a.JJ=Long_ZERO;a.Ej=0;a.DR=Long_ZERO;a.w0=0;a.mP=null;a.CU=null;a.FS=null;a.wC=0;a.yB=null;}
var Bfq=null;var Bc9=null;var Bfr=Long_ZERO;var Bfs=0;function Bft(){var a=new EU();AHG(a);return a;}
function Bcj(a){var b=new EU();TX(b,a);return b;}
function Bfu(a){var b=new EU();JD(b,a);return b;}
function A_$(a,b){var c=new EU();KM(c,a,b);return c;}
function AHG(a){KM(a,null,null);}
function TX(a,b){KM(a,null,b);}
function JD(a,b){KM(a,b,null);}
function KM(a,b,c){var d;a.mP=new D;a.wC=1;a.FS=c;a.yB=b;d=Bfr;Bfr=Long_add(d,Long_fromInt(1));a.JJ=d;}
function Ii(a){var b;b=new WF;b.zQ=a;AZR(b);}
function Fv(b){if(Bc9!==b)Bc9=b;Bc9.DR=B$();}
function ARr(a){var b,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.yB===null)return;b=a.yB;$p=1;case 1:b.g$();if(C()){break _;}return;default:Fa();}}C3().s(a,b,$p);}
function ASO(){return Bc9;}
function A1p(a,b){a.Ej=b;}
function XI(){var b,c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=Bc9;c=b.w0+1|0;b.w0=c;if(c<30)return;Bc9.w0=0;if(Long_ge(Long_add(b.DR,Long_fromInt(100)),B$()))return;$p=1;case 1:ALT(b);if(C()){break _;}return;default:Fa();}}C3().s(b,c,$p);}
function ALT(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gt=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I0=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaK(callback);return thread.suspend(function(){try{A30(b,callback);}catch($e){callback.I0($rt_exception($e));}});}
function A30(b,c){var d;d=new S4;d.B_=b;d.B$=c;Q5(d);}
function AKI(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gt=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I0=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaK(callback);return thread.suspend(function(){try{AVv(b,callback);}catch($e){callback.I0($rt_exception($e));}});}
function AVv(b,c){var d,e;d=Bc9;e=new Pl;e.wo=d;e.A7=c;e.Jt=AFJ(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.CU=e;}
function Zb(){Bfq=Bcj(B(187));Bc9=Bfq;Bfr=Long_fromInt(1);Bfs=1;}
function DP(){}
function Xb(){D.call(this);}
function Bfv(){var a=new Xb();A2p(a);return a;}
function A2p(a){return;}
function ASF(a,b){b.preventDefault();b.stopPropagation();}
function ACn(a,b){ASF(a,b);}
function A$0(a,b){ACn(a,b);}
function Xh(){D.call(this);}
function Bfw(){var a=new Xh();AZl(a);return a;}
function AZl(a){return;}
function ARI(a,b){var c,d;c=b.button;d=RR();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;Fx(MR(),b);b.preventDefault();b.stopPropagation();Mv();}
function AI0(a,b){ARI(a,b);}
function AXL(a,b){AI0(a,b);}
function Xi(){D.call(this);}
function Bfx(){var a=new Xi();AXk(a);return a;}
function AXk(a){return;}
function AQu(a,b){var c,d;c=b.button;d=RR();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;Fx(MR(),b);b.preventDefault();b.stopPropagation();}
function ZW(a,b){AQu(a,b);}
function A3F(a,b){ZW(a,b);}
function Xf(){D.call(this);}
function Bfy(){var a=new Xf();A4_(a);return a;}
function A4_(a){return;}
function AOI(a,b){var c;Bb();Bd0=b.offsetX;Bd1=BdJ.clientHeight-b.offsetY|0;c=b.movementX;Bd2=Bd2+c;c= -b.movementY;Bd3=Bd3+c;b.preventDefault();b.stopPropagation();}
function ADp(a,b){AOI(a,b);}
function ASQ(a,b){ADp(a,b);}
function Xg(){D.call(this);}
function Bfz(){var a=new Xg();A_S(a);return a;}
function A_S(a){return;}
function AEM(a,b){P6().data[S_(QH(b))]=1;Fx(NR(),b);b.preventDefault();b.stopPropagation();Mv();}
function AQF(a,b){AEM(a,b);}
function A3Q(a,b){AQF(a,b);}
function Xd(){D.call(this);}
function BfA(){var a=new Xd();A4c(a);return a;}
function A4c(a){return;}
function ZH(a,b){P6().data[S_(QH(b))]=0;Fx(NR(),b);b.preventDefault();b.stopPropagation();}
function X3(a,b){ZH(a,b);}
function A2n(a,b){X3(a,b);}
function Xe(){D.call(this);}
function BfB(){var a=new Xe();AXz(a);return a;}
function AXz(a){return;}
function ASc(a,b){Bb();if(Bd6&&(b.repeat?1:0))Fx(NR(),b);b.preventDefault();b.stopPropagation();}
function AK6(a,b){ASc(a,b);}
function A6B(a,b){AK6(a,b);}
function Xc(){D.call(this);}
function BfC(){var a=new Xc();A29(a);return a;}
function A29(a){return;}
function AFo(a,b){Fx(MR(),b);b.preventDefault();b.stopPropagation();}
function ACC(a,b){AFo(a,b);}
function AUl(a,b){ACC(a,b);}
function QD(){D.call(this);}
function BfD(){var a=new QD();A2f(a);return a;}
function A2f(a){return;}
function AFq(a,b){SZ(0);}
function AMv(a,b){AFq(a,b);}
function A7b(a,b){AMv(a,b);}
function QC(){D.call(this);}
function BfE(){var a=new QC();A38(a);return a;}
function A38(a){return;}
function AGS(a,b){SZ(1);Mv();}
function AMu(a,b){AGS(a,b);}
function AYO(a,b){AMu(a,b);}
function NY(){D.call(this);}
var BfF=null;var BeJ=null;function BfG(){var a=new NY();AEa(a);return a;}
function AEa(a){return;}
function AJS(){var b,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(188);$p=1;case 1:$z=A3L(b);if(C()){break _;}b=$z;if(b===null){BfF=B(171);return BfH;}if(b.E7)return BfI;if(!b.Fi&&b.xT!==null){BeJ=b.xT;return BfJ;}BfF=b.uB!==null?b.uB:B(189);return BfH;default:Fa();}}C3().s(b,$p);}
function AJf(b){var c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=BeJ;$p=1;case 1:$z=AUx(c,b);if(C()){break _;}c=$z;if(c!==BfK?0:1)return;d=LJ(b,47);if(d>0){c=Ev(b,0,d);$p=3;continue _;}c=BeJ;d=1;e=new ArrayBuffer(0);$p=2;case 2:AXV(c,b,d,e);if(C()){break _;}return;case 3:AJf(c);if(C()){break _;}c=BeJ;d=1;e=new ArrayBuffer(0);$p=2;continue _;default:Fa();}}C3().s(b,c,d,e,$p);}
function AHI(){BfF=B(3);BeJ=null;}
function AA1(){D.call(this);}
function AYv(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function U2(){D.call(this);}
var BeI=null;function BfL(){var a=new U2();AQx(a);return a;}
function AQx(a){return;}
function AMe(b){var c,d,e,f,g,h,i,j,k,l,m;c=Us(b);d=O3(c);e=$rt_createByteArray(8);NV(d,e);if(!DC(B(190),A2$(e,Ya(B(24))))){c=new B3;Bl(c,B(191));M(c);}GW(d);f=new P5;d=new WV;g=new Uq;OU(g);g.rS=0;h=R$(g,15,0);if(h){c=new P9;f=new T;V(f);Bl(c,U(J(J(Bf(f,h),B(12)),g.b9)));M(c);}R_(d,c);d.qi=0;d.oI=0;d.EF=1;d.Ei=0;d.wF=$rt_createByteArray(1);d.G2=$rt_createByteArray(512);d.g4=g;d.oi=$rt_createByteArray(512);d.EF=1;d.Ei=1;AIz(f,d);g=Ba1();while(true){d=GW(f);if(!DC(B(192),d)){if(AKF(f)<=0&&DC(B(193),d))return;c
=new B3;Bl(c,B(191));M(c);}i=GW(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);NV(f,j);l=H9(f);m=$rt_createByteArray(l);NV(f,m);if(D0(BeI,i))continue;a:{ADW(g,m,0,l);AMc(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){l=0;while(l<h){if(b[l]!=e[l]){h=0;break a;}l=l+1|0;}h=1;break a;}}h=0;}}if(!h){c=new B3;f=new T;V(f);Bl(c,U(J(J(f,B(194)),i)));M(c);}BP(BeI,i,m);if(!DC(B(195),GW(f)))break;}c=new B3;Bl(c,B(191));M(c);}
function Zj(){BeI=Dd();}
function B3(){BO.call(this);}
function BfM(){var a=new B3();A3X(a);return a;}
function A3X(a){O(a);}
function Lj(){HO.call(this);}
function BfN(){var a=new Lj();A6n(a);return a;}
function A6n(a){V(a);}
function A0S(a,b){Dw(a,b);return a;}
function A2d(a,b,c,d){I0(a,b,c,d);return a;}
function AVI(a,b){Hl(a,b);return a;}
function A7H(a,b,c,d,e){J$(a,b,c,d,e);return a;}
function A$W(a,b,c){K2(a,b,c);return a;}
function AV3(a,b,c,d,e){J$(a,b,c,d,e);return a;}
function A4h(a,b,c,d){I0(a,b,c,d);return a;}
function AIi(a,b){var c;if(b>=0&&b<a.bY)return a.O.data[b];c=new BM;O(c);M(c);}
function OC(a){return a.bY;}
function A4o(a){return U(a);}
function A4y(a,b){M2(a,b);}
function A$b(a,b,c){K2(a,b,c);return a;}
function FB(){}
function V9(){D.call(this);}
function BfO(){var a=new V9();AZp(a);return a;}
function AZp(a){return;}
function Fk(){D.call(this);this.l2=0;}
var BfP=null;var BfQ=null;var BfR=null;var BfS=null;var BfT=null;var BfU=null;function A2m(a){var b=new Fk();AAW(b,a);return b;}
function AAW(a,b){a.l2=b;}
function BH(b){var c;if(b>=BfS.data.length)return A2m(b);c=BfS.data[b];if(c===null){c=A2m(b);BfS.data[b]=c;}return c;}
function A$4(a,b){if(a===b)return 1;return b instanceof Fk&&b.l2==a.l2?1:0;}
function A$M(a){return a.l2;}
function SJ(b){var c,d;c=new B2;d=$rt_createCharArray(1);d.data[0]=b;Tv(c,d);return c;}
function My(b){return b>=65536&&b<=1114111?1:0;}
function Ds(b){return (b&64512)!=55296?0:1;}
function DS(b){return (b&64512)!=56320?0:1;}
function Ow(b){return !Ds(b)&&!DS(b)?0:1;}
function J9(b,c){return Ds(b)&&DS(c)?1:0;}
function EJ(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IG(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ib(b){return (56320|b&1023)&65535;}
function EW(b){return GP(b)&65535;}
function GP(b){return AP6(b).toLowerCase().charCodeAt(0);}
function FF(b){return GO(b)&65535;}
function GO(b){return AP6(b).toUpperCase().charCodeAt(0);}
function Wp(b,c){if(c>=2&&c<=36){b=Uk(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Uk(b){var c,d,e,f,g,h,i,j,k;if(BfQ===null){if(BfT===null)BfT=AMj();c=(BfT.value!==null?$rt_str(BfT.value):null);d=new R1;d.CE=Nz(c);e=Ys(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=Ys(d);h=h+1|0;}BfQ=f;}f=BfQ.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=R(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function I5(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Iz(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=IG(b);d[1]=Ib(b);return c;}
function Dn(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&Ow(b&65535))return 19;if(BfR===null){if(BfU===null)BfU=AHP();BfR=A2P((BfU.value!==null?$rt_str(BfU.value):null));}d=BfR.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.An)e=f+1|0;else{if(b>=g.xd)return g.C7.data[b-g.xd|0];c=f-1|0;}}return 0;}
function Lf(b){a:{switch(Dn(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Ix(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Dn(b)!=16?0:1;}
function UB(b){switch(Dn(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Qk(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return UB(b);}return 1;}
function ADh(a,b){return a.l2-b.l2|0;}
function A3e(a,b){return ADh(a,b);}
function AIY(){BfP=F($rt_charcls());BfS=I(Fk,128);}
function AMj(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function AHP(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function I2(){var a=this;D.call(a);a.cX=null;a.DY=0;}
function AJ8(a){return 1;}
function A8_(a,b){return;}
function UY(){var a=this;I2.call(a);a.vZ=0;a.v1=0;a.v0=0;a.hq=0.0;a.mM=0.0;a.ok=0.0;a.nb=0;a.Be=null;a.BC=null;}
function Rj(a,b){b.v=(-180.0);}
function A$s(a){return;}
function AFC(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cX.B;$p=1;case 1:$z=ACB(e,b,c,d);if(C()){break _;}f=$z;e=a.cX.B;$p=2;case 2:$z=AEN(e,b,c,d);if(C()){break _;}g=$z;e=a.cX.c6;$p=3;case 3:AEH(e,b,c,d);if(C()){break _;}e=a.cX.B;L();h=BeT.data;$p=4;case 4:$z=ACB(e,b,c,d);if(C()){break _;}i=$z;j=h[i];$p=5;case 5:$z=AEN(e,b,c,d);if(C()){break _;}i=
$z;k=0;$p=6;case 6:$z=APB(e,b,c,d,k);if(C()){break _;}k=$z;if(j!==null&&k){$p=7;continue _;}e=Kt(a.cX.f);if(e!==null){QL(e,f,b,c,d);if(!e.p)JC(a.cX.f);}if(k&&Na(a.cX.f,BeT.data[f])){e=BeT.data[f];j=a.cX.B;$p=8;continue _;}return k;case 7:j.np(e,b,c,d,i);if(C()){break _;}e=Kt(a.cX.f);if(e!==null){QL(e,f,b,c,d);if(!e.p)JC(a.cX.f);}if(k&&Na(a.cX.f,BeT.data[f])){e=BeT.data[f];j=a.cX.B;$p=8;continue _;}return k;case 8:e.IR(j,b,c,d,g);if(C()){break _;}return k;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AE7(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cX.B;$p=1;case 1:$z=ACB(e,b,c,d);if(C()){break _;}f=$z;if(f>0&&a.hq===0.0){L();e=BeT.data[f];g=a.cX.B;h=a.cX.f;$p=3;continue _;}if(f<=0)return;L();e=BeT.data[f];g=a.cX.f;$p=2;case 2:$z=ABk(e,g);if(C()){break _;}i=$z;if(i<1.0)return;$p=4;continue _;case 3:e.q9(g,b,c,d,h);if(C()){break _;}if(f<=0)return;L();e=BeT.data[f];g
=a.cX.f;$p=2;continue _;case 4:AFC(a,b,c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALV(a){a.hq=0.0;a.nb=0;}
function YT(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.nb>0)a.nb=a.nb-1|0;else{if(b==a.vZ&&c==a.v1&&d==a.v0){f=a.cX.B;$p=1;continue _;}a.hq=0.0;a.mM=0.0;a.ok=0.0;a.vZ=b;a.v1=c;a.v0=d;}return;case 1:$z=ACB(f,b,c,d);if(C()){break _;}g=$z;if(!g)return;L();f=BeT.data[g];h=a.hq;i=a.cX.f;$p=2;case 2:$z=ABk(f,i);if(C()){break _;}j=$z;a.hq=h+j;a.ok=a.ok+1.0;if(a.hq<
1.0)return;$p=3;case 3:AFC(a,b,c,d);if(C()){break _;}a.hq=0.0;a.mM=0.0;a.ok=0.0;a.nb=5;return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function GR(a,b){var c;if(a.hq<=0.0){a.cX.nX.Eq=0.0;a.cX.dX.tJ=0.0;}else{c=a.mM+(a.hq-a.mM)*b;a.cX.nX.Eq=c;a.cX.dX.tJ=c;}}
function A1o(a){return 4.0;}
function A5e(a,b){return;}
function AI7(a){var b,c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mM=a.hq;b=a.Be;c=a.cX.B;$p=1;case 1:ABG(b,c);if(C()){break _;}b=a.BC;c=a.cX.B;$p=2;case 2:ABG(b,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,$p);}
function SI(){var a=this;D.call(a);a.c8=0.0;a.CN=0.0;a.i6=0;a.cY=0.0;a.CY=0.0;a.lI=0.0;a.sQ=Long_ZERO;a.rT=Long_ZERO;a.nD=0.0;}
function FQ(a){var b,c,d,e,f;b=B$();c=Long_sub(b,a.sQ);d=Long_div(EH(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.rT));a.nD=a.nD+(e-a.nD)*0.20000000298023224;a.sQ=b;a.rT=d;}if(Long_lt(c,Long_ZERO)){a.sQ=b;a.rT=d;}f=Long_toNumber(d)/1000.0;e=(f-a.CN)*a.nD;a.CN=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.lI=a.lI+e*a.CY*a.c8;a.i6=a.lI|0;a.lI=a.lI-a.i6;if(a.i6>10)a.i6=10;a.cY=a.lI;}
function VO(){}
function R8(){var a=this;D.call(a);a.n1=null;a.fH=null;a.l7=null;a.kM=Long_ZERO;a.lL=0;}
function AO5(a,b){a.lL=0;RX(a,b);}
function YP(a,b){a.lL=1;RX(a,a.l7);}
function RX(a,b){var c,d,e;a:{if(!a.fH.gR){if(a.lL)break a;b=new IM;O(b);M(b);}a.l7=b;c=FJ(a.fH.cd,a.fH.bA);d=c.fM;e=c.fJ;D5(256);C$(5889);C9();Ir(0.0,d,e,0.0,100.0,300.0);C$(5888);C9();Bw(0.0,0.0,(-200.0));}}
function AR$(a,b){var c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fH.gR){if(a.lL)return;b=new IM;O(b);M(b);}a.kM=Long_ZERO;a.n1=b;c=(-1);$p=1;case 1:XO(a,c);if(C()){break _;}a.kM=Long_ZERO;return;default:Fa();}}C3().s(a,b,c,$p);}
function AR8(a,b,c){var d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fH.gR){if(a.lL)return;b=new IM;O(b);M(b);}a.kM=Long_ZERO;a.n1=c;a.l7=b;d=(-1);$p=1;case 1:XO(a,d);if(C()){break _;}a.kM=Long_ZERO;return;default:Fa();}}C3().s(a,b,c,d,$p);}
function XO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.fH.gR){if(a.lL)break a;c=new IM;O(c);M(c);}d=B$();if(Long_ge(Long_sub(d,a.kM),Long_fromInt(20))){a.kM=d;c=FJ(a.fH.cd,a.fH.bA);e=c.fM;f=c.fJ;D5(256);C$(5889);C9();g=e;h=f;Ir(0.0,g,h,0.0,100.0,300.0);C$(5888);C9();Bw(0.0,
0.0,(-200.0));D5(16640);BA();i=BeP;c=a.fH.bo;j=B(165);$p=1;continue _;}}return;case 1:$z=AHy(c,j);if(C()){break _;}k=$z;Cn(3553,k);Bz(i);ET(i,4210752);l=f/32.0;G(i,0.0,h,0.0,0.0,l);m=e/32.0;G(i,g,h,0.0,m,l);G(i,g,0.0,0.0,m,0.0);G(i,0.0,0.0,0.0,0.0,0.0);Br(i);if(b>=0){n=(e/2|0)-50|0;o=(f/2|0)+16|0;Bd(3553);Bz(i);ET(i,8421504);g=n;p=o;Be(i,g,p,0.0);m=o+2|0;Be(i,g,m,0.0);q=n+100|0;Be(i,q,m,0.0);Be(i,q,p,0.0);ET(i,8454016);Be(i,g,p,0.0);Be(i,g,m,0.0);q=n+b|0;Be(i,q,m,0.0);Be(i,q,p,0.0);Br(i);Ba(3553);}c=a.fH.e$;i
=a.l7;b=(e-Dv(a.fH.e$,a.l7)|0)/2|0;r=(f/2|0)-4|0;Cx(c,i,b,r-16|0,16777215);Cx(a.fH.e$,a.n1,(e-Dv(a.fH.e$,a.n1)|0)/2|0,r+8|0,16777215);$p=2;case 2:AU0();if(C()){break _;}try{$p=3;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){}else{throw $$e;}}return;case 3:b:{try{XI();if(C()){break _;}break b;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){}else{throw $$e;}}}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AFS(){var a=this;D.call(a);a.u=null;a.qw=0;a.lU=0.0;a.iK=null;a.tL=0;a.p8=null;a.ln=null;a.Ic=0;a.Ib=0;a.p1=null;a.dH=0.0;a.d5=0.0;a.dV=0.0;a.oc=0.0;a.l$=0.0;}
function BbU(a){var b=new AFS();AUb(b,a);return b;}
function AUb(a,b){var c;a.qw=0;a.lU=0.0;a.p8=null;a.ln=new DA;a.Ic=0;a.Ib=0;a.p1=H4(16);a.u=b;c=new Pf;c.eT=null;c.ja=0.0;c.q_=0.0;c.iz=0;c.jO=0;c.Ab=Km();c.cP=b;a.iK=c;}
function AIT(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oc=a.l$;b=a.u.B;c=K(a.u.f.d);d=K(a.u.f.j);e=K(a.u.f.e);$p=1;case 1:$z=ANm(b,c,d,e);if(C()){break _;}f=$z;g=(3-a.u.o.hi|0)/3.0;h=f*(1.0-g)+g;a.l$=a.l$+(h-a.l$)*0.10000000149011612;a.tL=a.tL+1|0;AJe(a.iK);if(a.u.cU)
{b=a.u.f;i=a.u.B;d=K(b.d);j=K(b.j);k=K(b.e);l=4;m=0;n=63;e=R(64,j+4|0);j=R(64,j-4|0);o=64.0999984741211;if(m<50){p=(d+E(a.ln,9)|0)-l|0;q=(k+E(a.ln,9)|0)-l|0;$p=2;continue _;}}return;case 2:$z=ACB(i,p,n,q);if(C()){break _;}c=$z;if(e<=0&&j>=0){f=N(a.ln);g=N(a.ln);if(c>0){b=a.u.c6;r=new JR;s=p+f;L();TT(r,i,s,o-BeT.data[c].cM,q+g);El(b,r);}}m=m+1|0;if(m>=50)return;p=(d+E(a.ln,9)|0)-l|0;q=(k+E(a.ln,9)|0)-l|0;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function NL(a,b){var c,d,e,f;c=a.u.f;d=c.bS;e=c.d-c.bS;f=b;return BW(d+e*f,c.cS+(c.j-c.cS)*f,c.bR+(c.e-c.bR)*f);}
function ALZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=c.T+(c.J-c.T)*b;e=c.P+(c.v-c.P)*b;f=NL(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=BC(g);i=Bq(g);g= -d*0.01745329238474369;j= -BC(g);g=Bq(g);k=i*j;l
=h*j;m=4.0;n=k;o=n*m;p=g;q=p*m;r=l;s=Dj(f,o,q,r*m);t=a.u;u=a.u.B;$p=1;case 1:$z=AJq(u,f,s);if(C()){break _;}u=$z;t.cf=u;f=NL(a,b);if(a.u.cf!==null)m=DI(a.u.cf.gy,f);if(a.u.cB instanceof Dt)m=32.0;else if(m>3.0)m=3.0;n=n*m;p=p*m;r=r*m;s=Dj(f,n,p,r);a.p8=null;t=a.u.B;u=Jh(c.L,n,p,r);$p=2;case 2:$z=ADO(t,c,u);if(C()){break _;}t=$z;n=0.0;v=0;while(v<t.s){u=Z(t,v);if(u.lt()){w=QX(Du(u.L,0.10000000149011612,0.10000000149011612,0.10000000149011612),f,s);if(w!==null){p=DI(f,w.gy);if(!(p>=n&&n!==0.0)){a.p8=u;n=p;}}}v
=v+1|0;}if(a.p8!==null&&!(a.u.cB instanceof Dt))a.u.cf=A1g(a.p8);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function L8(a,b){var c,d,e;c=a.u.f;d=c.dE-b;if(c.bT<=0)Bv(40.0-8000.0/(c.c2+b+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.ER;b=Bq(b*b*b*b*3.1415927410125732);e=c.kE;Bv( -e,0.0,1.0,0.0);Bv( -b*14.0,0.0,0.0,1.0);Bv(e,0.0,1.0,0.0);}}
function IO(a,b){var c,d,e,f,g;if(!a.u.o.cC){c=a.u.f;d=c.hc-c.tY;e=c.hc+d*b;f=c.qz+(c.kV-c.qz)*b;g=c.kY+(c.jl-c.kY)*b;d=e*3.1415927410125732;Bw(Bq(d)*f*0.5, -H0(BC(d)*f),0.0);Bv(Bq(d)*f*3.0,0.0,0.0,1.0);Bv(H0(BC(d+0.20000000298023224)*f)*5.0,1.0,0.0,0.0);Bv(g,1.0,0.0,0.0);}}
function AIc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=c.bS;e=c.d-c.bS;f=b;g=d+e*f;h=c.cS+(c.j-c.cS)*f;i=c.bR+(c.e-c.bR)*f;if(!a.u.o.cC)Bw(0.0,0.0,(-0.10000000149011612));else{j=4.0;d= -Bq(c.v/180.0*3.1415927410125732)*BC(c.J
/180.0*3.1415927410125732)*j;e=BC(c.v/180.0*3.1415927410125732)*BC(c.J/180.0*3.1415927410125732)*j;f= -Bq(c.J/180.0*3.1415927410125732)*j;k=0;l=g-d;d=h-f;f=i-e;if(k<8){m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.u.B;e=m;q=g+e;r=n;s=h+r;t=o;u=BW(q,s,i+t);v=BW(l+e+t,d+r,f+t);$p=1;continue _;}Bw(0.0,0.0, -j);}Bv(c.T+(c.J-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.v-c.P)*b+180.0,0.0,1.0,0.0);return;case 1:$z=AJq(p,u,v);if(C()){break _;}u
=$z;if(u!==null){q=DI(u.gy,BW(g,h,i));if(q<j)j=q;}k=k+1|0;if(k>=8){Bw(0.0,0.0, -j);Bv(c.T+(c.J-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.v-c.P)*b+180.0,0.0,1.0,0.0);return;}m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.u.B;e=m;q=g+e;r=n;s=h+r;t=o;u=BW(q,s,i+t);v=BW(l+e+t,d+r,f+t);continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AFA(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lU=256>>a.u.o.hi;C$(5889);C9();if(a.u.o.dx)Bw( -((c*2|0)-1|0)*0.07000000029802322,0.0,0.0);d=a.u.f;e=70.0;f=BfV;$p=1;case 1:$z=AGL(d,f);if(C()){break _;}g=$z;if(g)e=60.0;if(d.bT<=0)e=e/((1.0-500.0/(d.c2+b+500.0))*2.0+1.0);h=a.u.cd/a.u.bA;i=a.lU;f=GN();j=e*0.01745329238474369*0.5;k=GF(j)/Gs(j);f.et
=k/h;f.er=0.0;f.es=0.0;f.eq=0.0;f.ew=0.0;f.ex=k;f.eu=0.0;f.ev=0.0;f.eB=0.0;f.ez=0.0;h=i+0.05000000074505806;k=i-0.05000000074505806;f.eA=h/k;f.ey=(-1.0);f.gV=0.0;f.gW=0.0;f.gT=2.0*i*0.05000000074505806/k;f.gU=0.0;C$(5888);C9();if(a.u.o.dx)Bw(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);L8(a,b);if(a.u.o.iv)IO(a,b);$p=2;case 2:AIc(a,b);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFQ(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qw&&!Om()){c=a.u;$p=1;continue _;}a.qw=Om();Bb();d=Bd2;Bd2=0.0;e=d|0;d=Bd3;Bd3=0.0;f=d|0;g=1;if(a.u.o.m3)g=(-1);if(a.u.bp&&a.u.B!==null)Xr(a.u.f,e,Bi(f,g));if(!a.u.h8){c=FJ(a.u.cd,a.u.bA);f=c.fM;e=c.fJ;h=Bi(Bd0,f)/a.u.cd|0;i=(e-(Bi(Bd1,e)/a.u.bA|0)|0)-1|0;if(a.u.B!==null){$p=2;continue _;}FP(0,0,a.u.cd,a.u.bA);HB(0.0,
0.0,0.0,0.0);D5(16640);C$(5889);C9();C$(5888);C9();LF(a);if(a.u.D!==null){D5(256);c=a.u.D;$p=3;continue _;}}return;case 1:ALe(c);if(C()){break _;}a.qw=Om();Bb();d=Bd2;Bd2=0.0;e=d|0;d=Bd3;Bd3=0.0;f=d|0;g=1;if(a.u.o.m3)g=(-1);if(a.u.bp&&a.u.B!==null)Xr(a.u.f,e,Bi(f,g));if(!a.u.h8){c=FJ(a.u.cd,a.u.bA);f=c.fM;e=c.fJ;h=Bi(Bd0,f)/a.u.cd|0;i=(e-(Bi(Bd1,e)/a.u.bA|0)|0)-1|0;if(a.u.B!==null){$p=2;continue _;}FP(0,0,a.u.cd,a.u.bA);HB(0.0,0.0,0.0,0.0);D5(16640);C$(5889);C9();C$(5888);C9();LF(a);if(a.u.D!==null){D5(256);c
=a.u.D;$p=3;continue _;}}return;case 2:AAl(a,b);if(C()){break _;}c=a.u.nX;g=a.u.D===null?0:1;$p=4;continue _;case 3:c.hP(h,i,b);if(C()){break _;}return;case 4:APO(c,b,g,h,i);if(C()){break _;}if(a.u.D===null)return;D5(256);c=a.u.D;$p=3;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ALZ(a,b);if(C()){break _;}c=a.u.f;d=a.u.dX;e=a.u.c6;f=c.cs;g=c.d-c.cs;h=b;i=f+g*h;f=c.b7+(c.j-c.b7)*h;g=c.ct+(c.e-c.ct)*h;j=0;if(j>=2){DO(1,1,1,0);return;}if(a.u.o.dx){if(j)DO(1,0,0,0);else DO(0,1,1,0);}FP(0,0,a.u.cd,a.u.bA);$p=2;case 2:AD5(a,
b);if(C()){break _;}D5(16640);Ba(2884);$p=3;case 3:AFA(a,b,j);if(C()){break _;}RZ();if(a.u.o.hi<2){k=(-1);$p=4;continue _;}if(!a.u.o.du)Ba(2912);k=1;$p=6;continue _;case 4:ASl(a,k);if(C()){break _;}$p=5;case 5:ADf(d,b);if(C()){break _;}if(!a.u.o.du)Ba(2912);k=1;$p=6;case 6:ASl(a,k);if(C()){break _;}l=BbC();AOo(l,i,f,g);ARO(a.u.dX,l,b);m=a.u.dX;k=0;$p=7;case 7:AIo(m,c,k);if(C()){break _;}k=0;$p=8;case 8:ASl(a,k);if(C()){break _;}if(!a.u.o.du)Ba(2912);k=3553;m=a.u.bo;n=B(179);$p=9;case 9:$z=AHy(m,n);if(C()){break _;}o
=$z;Cn(k,o);DT();Vx(d,c,0,h);Hy();m=NL(a,b);$p=10;case 10:ACF(d,m,l,b);if(C()){break _;}$p=11;case 11:AB1(e,c,b);if(C()){break _;}DT();k=0;$p=12;case 12:ASl(a,k);if(C()){break _;}$p=13;case 13:ABi(e,c,b);if(C()){break _;}if(a.u.cf!==null){l=BfV;$p=16;continue _;}De(770,771);k=0;$p=14;case 14:ASl(a,k);if(C()){break _;}Ba(3042);Bd(2884);k=3553;l=a.u.bo;m=B(179);$p=15;case 15:$z=AHy(l,m);if(C()){break _;}o=$z;Cn(k,o);Vx(d,c,1,h);Gv(1);Ba(2884);Bd(3042);if(a.u.cf!==null){l=BfV;$p=17;continue _;}Bd(2912);if(a.u.cU)
{$p=20;continue _;}k=0;$p=23;continue _;case 16:$z=AGL(c,l);if(C()){break _;}k=$z;if(!k){De(770,771);k=0;$p=14;continue _;}Bd(3008);l=a.u.cf;k=0;m=D9(c.K);$p=18;continue _;case 17:$z=AGL(c,l);if(C()){break _;}k=$z;if(!k){Bd(3008);l=a.u.cf;k=0;m=D9(c.K);$p=21;continue _;}Bd(2912);if(a.u.cU){$p=20;continue _;}k=0;$p=23;continue _;case 18:AFL(d,c,l,k,m,b);if(C()){break _;}l=a.u.cf;k=0;m=D9(c.K);$p=19;case 19:AGj(d,c,l,k,m,b);if(C()){break _;}Ba(3008);De(770,771);k=0;$p=14;continue _;case 20:XZ(a,b);if(C()){break _;}k
=0;$p=23;continue _;case 21:AFL(d,c,l,k,m,b);if(C()){break _;}m=a.u.cf;k=0;l=D9(c.K);$p=22;case 22:AGj(d,c,m,k,l,b);if(C()){break _;}Ba(3008);Bd(2912);if(a.u.cU){$p=20;continue _;}k=0;$p=23;case 23:ASl(a,k);if(C()){break _;}if(!a.u.o.du)Ba(2912);$p=24;case 24:YS(d,b);if(C()){break _;}Bd(2912);k=1;$p=25;case 25:ASl(a,k);if(C()){break _;}D5(256);C9();if(a.u.o.dx)Bw(((j*2|0)-1|0)*0.10000000149011612,0.0,0.0);B1();L8(a,b);if(a.u.o.iv)IO(a,b);if(!a.u.o.cC){l=a.iK;$p=26;continue _;}BD();if(!a.u.o.cC){l=a.iK;$p=27;continue _;}if
(a.u.o.iv)IO(a,b);if(!a.u.o.dx)return;j=j+1|0;if(j>=2){DO(1,1,1,0);return;}if(a.u.o.dx){if(j)DO(1,0,0,0);else DO(0,1,1,0);}FP(0,0,a.u.cd,a.u.bA);$p=2;continue _;case 26:AC1(l,b);if(C()){break _;}BD();if(!a.u.o.cC){l=a.iK;$p=27;continue _;}if(a.u.o.iv)IO(a,b);if(!a.u.o.dx)return;j=j+1|0;if(j>=2){DO(1,1,1,0);return;}if(a.u.o.dx){if(j)DO(1,0,0,0);else DO(0,1,1,0);}FP(0,0,a.u.cd,a.u.bA);$p=2;continue _;case 27:ACd(l,b);if(C()){break _;}L8(a,b);if(a.u.o.iv)IO(a,b);if(!a.u.o.dx)return;j=j+1|0;if(j>=2){DO(1,1,1,0);return;}if
(a.u.o.dx){if(j)DO(1,0,0,0);else DO(0,1,1,0);}FP(0,0,a.u.cd,a.u.bA);$p=2;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function XZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=K(c.d);e=K(c.j);f=K(c.e);BA();g=BeP;Bd(2884);Ch(0.0,1.0,0.0);Ba(3042);De(770,
771);h=3553;i=a.u.bo;j=B(196);$p=1;case 1:$z=AHy(i,j);if(C()){break _;}k=$z;Cn(h,k);k=d-5|0;d=d+5|0;h=f-5|0;l=f+5|0;m=e-5|0;n=e+5|0;e=R(m,64);o=R(n,64);while(k<=d){p=h;while(p<=l){q=e<0?64:m;r=o<0?64:n;if(q!=r){s=((((a.tL+(k*3121|0)|0)+Bi(p,418711)|0)%32|0)+b)/32.0;t=k+0.5-c.d;u=p+0.5-c.e;v=Cd(t*t+u*u)/5.0;BS(1.0,1.0,1.0,(1.0-v*v)*0.699999988079071);Bz(g);u=k+0|0;w=q;x=p+0|0;v=q*2.0/8.0;y=s*2.0;z=v+y;G(g,u,w,x,0.0,z);ba=k+1|0;bb=p+1|0;G(g,ba,w,bb,2.0,z);bc=r;bd=r*2.0/8.0+y;G(g,ba,bc,bb,2.0,bd);G(g,u,bc,x,0.0,
bd);G(g,u,w,bb,0.0,z);G(g,ba,w,x,2.0,z);G(g,ba,bc,x,2.0,bd);G(g,u,bc,bb,0.0,bd);Br(g);}p=p+1|0;}k=k+1|0;}Ba(2884);Bd(3042);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function LF(a){var b,c,d;b=FJ(a.u.cd,a.u.bA);c=b.fM;d=b.fJ;D5(256);C$(5889);C9();Ir(0.0,c,d,0.0,1000.0,3000.0);C$(5888);C9();Bw(0.0,0.0,(-2000.0));}
function AD5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.B;d=a.u.f;e=1.0-A2T(1.0/(4-a.u.o.hi|0),0.25);f=OW(c,b);g=f.x;h=f.z;i=f.w;j=ADv(c,b);a.dH=j.x;a.d5=j.z;a.dV=j.w;a.dH=a.dH+(g-a.dH)*e;a.d5=a.d5+(h-a.d5)*e;a.dV=a.dV+(i-a.dV)*e;c=BfV;$p=1;case 1:$z=AGL(d,c);if(C()){break _;}k=$z;if(k){a.dH=0.019999999552965164;a.d5
=0.019999999552965164;a.dV=0.20000000298023224;e=a.oc+(a.l$-a.oc)*b;a.dH=a.dH*e;a.d5=a.d5*e;a.dV=a.dV*e;if(a.u.o.dx){l=(a.dH*30.0+a.d5*59.0+a.dV*11.0)/100.0;m=(a.dH*30.0+a.d5*70.0)/100.0;n=(a.dH*30.0+a.dV*70.0)/100.0;a.dH=l;a.d5=m;a.dV=n;}HB(a.dH,a.d5,a.dV,0.0);return;}c=BfW;$p=2;case 2:$z=AGL(d,c);if(C()){break _;}k=$z;if(k){a.dH=0.6000000238418579;a.d5=0.10000000149011612;a.dV=0.0;}e=a.oc+(a.l$-a.oc)*b;a.dH=a.dH*e;a.d5=a.d5*e;a.dV=a.dV*e;if(a.u.o.dx){l=(a.dH*30.0+a.d5*59.0+a.dV*11.0)/100.0;m=(a.dH*30.0+a.d5
*70.0)/100.0;n=(a.dH*30.0+a.dV*70.0)/100.0;a.dH=l;a.d5=m;a.dV=n;}HB(a.dH,a.d5,a.dV,0.0);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASl(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=a.dH;e=a.d5;f=a.dV;EA(a.p1);CJ(CJ(CJ(CJ(a.p1,d),e),f),1.0);Gw(a.p1);g=a.p1;BV();BfX=Ju(g);BfY=Ju(g);BfZ=Ju(g);Bf0=Ju(g);Ch(0.0,(-1.0),0.0);BS(1.0,1.0,1.0,1.0);g=BfV;$p=1;case 1:$z=AGL(c,g);if(C()){break _;}h=$z;if(h){Md(2917,2048);GM(2914,0.10000000149011612);Ba(2903);return;}g=BfW;$p=2;case 2:$z=AGL(c,g);if(C()){break _;}h
=$z;if(h){Md(2917,2048);GM(2914,2.0);}else{Md(2917,9729);GM(2915,a.lU*0.25);GM(2916,a.lU);if(b<0){GM(2915,0.0);GM(2916,a.lU*0.800000011920929);}}Ba(2903);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Eh(){D.call(this);this.xW=0.0;}
function MC(){var a=this;Eh.call(a);a.iY=null;a.k_=null;a.pg=null;a.d0=null;a.dO=null;a.i$=null;a.hg=null;}
function A$2(){var a=new MC();KI(a);return a;}
function Xz(a){var b=new MC();AIQ(b,a);return b;}
function Bf1(a,b){var c=new MC();ARz(c,a,b);return c;}
function KI(a){AIQ(a,0.0);}
function AIQ(a,b){ARz(a,b,0.0);}
function ARz(a,b,c){var d,e;a.iY=BJ(0,0);BF(a.iY,(-4.0),(-8.0),(-4.0),8,8,8,b);d=a.iY;e=0.0+c;BI(d,0.0,e,0.0);a.k_=BJ(32,0);BF(a.k_,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BI(a.k_,0.0,e,0.0);a.pg=BJ(16,16);BF(a.pg,(-4.0),0.0,(-2.0),8,12,4,b);BI(a.pg,0.0,e,0.0);a.d0=BJ(40,16);BF(a.d0,(-3.0),(-2.0),(-2.0),4,12,4,b);d=a.d0;e=2.0+c;BI(d,(-5.0),e,0.0);a.dO=BJ(40,16);a.dO.lB=1;BF(a.dO,(-1.0),(-2.0),(-2.0),4,12,4,b);BI(a.dO,5.0,e,0.0);a.i$=BJ(0,16);BF(a.i$,(-2.0),0.0,(-2.0),4,12,4,b);d=a.i$;c=12.0+c;BI(d,(-2.0),c,0.0);a.hg
=BJ(0,16);a.hg.lB=1;BF(a.hg,(-2.0),0.0,(-2.0),4,12,4,b);BI(a.hg,2.0,c,0.0);}
function A$o(a,b,c,d,e,f,g){a.oh(b,c,d,e,f,g);B_(a.iY,g);B_(a.pg,g);B_(a.d0,g);B_(a.dO,g);B_(a.i$,g);B_(a.hg,g);B_(a.k_,g);}
function AIX(a,b,c,d,e,f,g){var h;a.iY.bX=e/57.2957763671875;a.iY.b1=f/57.2957763671875;a.k_.bX=a.iY.bX;a.k_.b1=a.iY.b1;h=a.d0;e=b*0.6661999821662903;f=e+3.1415927410125732;h.b1=BC(f)*2.0*c;a.d0.bU=(BC(b*0.23119999468326569)+1.0)*1.0*c;a.dO.b1=BC(e)*2.0*c;a.dO.bU=(BC(b*0.28119999170303345)-1.0)*1.0*c;a.i$.b1=BC(e)*1.399999976158142*c;a.hg.b1=BC(f)*1.399999976158142*c;h=a.d0;c=h.bU;b=d*0.09000000357627869;h.bU=c+BC(b)*0.05000000074505806+0.05000000074505806;h=a.dO;h.bU=h.bU-(BC(b)*0.05000000074505806+0.05000000074505806);h
=a.d0;b=h.b1;c=d*0.06700000166893005;h.b1=b+Bq(c)*0.05000000074505806;h=a.dO;h.b1=h.b1-Bq(c)*0.05000000074505806;}
function Eu(){var a=this;D.call(a);a.dD=null;a.IZ=0;a.mC=0;a.HW=0;a.wY=0;}
function Bf2(a){var b=new Eu();HD(b,a);return b;}
function HD(a,b){a.dD=$rt_createByteArray(1024);a.mC=0;a.HW=0;a.wY=1;a.IZ=b;}
function AAZ(){var a=this;Eu.call(a);a.pw=null;a.tr=null;a.nW=null;a.rN=null;a.xz=0;}
function Bat(){var a=new AAZ();A$8(a);return a;}
function A$8(a){L();HD(a,Bf3.ba);a.pw=$rt_createFloatArray(256);a.tr=$rt_createFloatArray(256);a.nW=$rt_createFloatArray(256);a.rN=$rt_createFloatArray(256);a.xz=0;}
function AYH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;a.xz=a.xz+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.pw.data[f+(g*16|0)|0];e=e+1|0;}h=a.tr.data;i=b+(c*16|0)|0;h[i]=d/3.299999952316284+a.nW.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}c=0;while(c<16){j=0;while(j<16){k=a.nW.data;b=c+(j*16|0)|0;k[b]=k[b]+a.rN.data[b]*0.05000000074505806;if(a.nW.data[b]<0.0)a.nW.data[b]=0.0;k=a.rN.data;k[b]=k[b]-0.10000000149011612;if(BN()<0.05)a.rN.data[b]=0.5;j=j+1|0;}c=c+1|0;}k=a.tr;a.tr
=a.pw;a.pw=k;c=0;while(c<256){d=a.pw.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;l=d*d;i=32.0+l*32.0|0;m=50.0+l*64.0|0;n=255;o=146.0+l*50.0|0;if(a.mC){b=i*30|0;i=((b+(m*59|0)|0)+2805|0)/100|0;m=(b+(m*70|0)|0)/100|0;n=(b+17850|0)/100|0;}k=a.dD.data;j=c*4|0;k[j+0|0]=i<<24>>24;a.dD.data[j+1|0]=m<<24>>24;a.dD.data[j+2|0]=n<<24>>24;a.dD.data[j+3|0]=o<<24>>24;c=c+1|0;}}
function AKG(){var a=this;Eu.call(a);a.pT=null;a.qR=null;a.jw=null;a.sy=null;}
function Ba2(){var a=new AKG();A1J(a);return a;}
function A1J(a){L();HD(a,Bf4.ba);a.pT=$rt_createFloatArray(256);a.qR=$rt_createFloatArray(256);a.jw=$rt_createFloatArray(256);a.sy=$rt_createFloatArray(256);}
function AYX(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){h=(g+e|0)&15;j=(i+f|0)&15;d=d+a.pT.data[h+(j*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.qR.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jw.data;e=(b+0|0)&15;n=((c+0|0)&15)*16|0;o=m[e+n|0];m=a.jw.data;h=h&15;o=o+m[h+n|0];m=a.jw.data;c=c+1|0;n=(c&15)*16|0;k[l]=d+(o+m[h+n
|0]+a.jw.data[e+n|0])/4.0*0.800000011920929;m=a.jw.data;m[l]=m[l]+a.sy.data[l]*0.009999999776482582;if(a.jw.data[l]<0.0)a.jw.data[l]=0.0;m=a.sy.data;m[l]=m[l]-0.05999999865889549;if(BN()<0.005)a.sy.data[l]=1.5;}b=b+1|0;}m=a.qR;a.qR=a.pT;a.pT=m;n=0;while(n<256){d=a.pT.data[n]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;h=d*100.0+155.0|0;o=d*d;j=o*255.0|0;l=o*d*d*128.0|0;if(a.mC){e=h*30|0;h=((e+(j*59|0)|0)+(l*11|0)|0)/100|0;j=(e+(j*70|0)|0)/100|0;l=(e+(l*70|0)|0)/100|0;}m=a.dD.data;b=n*4|0;m[b+0|0]=h<<24>>24;a.dD.data[b
+1|0]=j<<24>>24;a.dD.data[b+2|0]=l<<24>>24;a.dD.data[b+3|0]=(-1);n=n+1|0;}}
function L7(){D.call(this);}
var Bf5=null;var Bf6=null;function Bf7(){var a=new L7();AZI(a);return a;}
function AZI(a){return;}
function Dy(){if(Bf5===null)Bf5=AYP(new Xj,0);return Bf5;}
function DB(){if(Bf6===null)Bf6=AYP(new PT,0);return Bf6;}
function Dh(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=APl(b)&&(e+f|0)<=APl(d)){a:{b:{if(b!==d){g=KA(Dk(b));h=KA(Dk(d));if(g!==null&&h!==null){if(g===h)break b;if(!F1(g)&&!F1(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!UE(h,l[k])){Vr(b,c,d,e,j);b=new JW;O(b);M(b);}j=j+1|0;k=m;}Vr(b,c,d,e,f);return;}if(!F1(g))break a;if(F1(h))break b;else break a;}b=new JW;O(b);M(b);}}Vr(b,c,d,e,f);return;}b=new JW;O(b);M(b);}b=new BM;O(b);M(b);}d=new EF;Bl(d,B(197));M(d);}
function Vr(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function B$(){return Long_fromNumber(new Date().getTime());}
function EH(){return Long_fromNumber(performance.now()*1000000.0);}
function V4(){EU.call(this);this.yl=null;}
function AJ4(a){var b,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(a.yl.gR){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof E3){}else{throw $$e;}}}return;case 1:a:{try{AKI(b);if(C()){break _;}break a;}catch($$e){$$je=Bj($$e);if($$je instanceof E3){}else{throw $$e;}}}while(a.yl.gR){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof E3){}else{throw $$e;}}}return;default:Fa();}}C3().s(a,
b,$p);}
function Ss(){}
function In(){}
function Go(){D.call(this);}
function P1(a){return a.f6?0:1;}
function Ra(a,b){var c,d;c=a.kW();a:{while(c.qk()){b:{d=c.mQ();if(d!==null){if(!d.en(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function ABb(a){var b,c,d,e,f;b=I(D,IQ(a));c=b.data;d=0;e=OB(a);while(Gb(e)){f=d+1|0;c[d]=Lo(e);d=f;}return b;}
function UL(a,b){var c,d,e,f,g;c=b.data;d=a.s;e=c.length;if(e<d)b=AEL(KA(Dk(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Jm(a);while(KF(f)){c=b.data;g=e+1|0;c[e]=KV(f);e=g;}return b;}
function DF(a,b){var c,d;c=0;d=b.kW();while(d.qk()){if(!a.sR(d.mQ()))continue;c=1;}return c;}
function Gf(a,b){var c,d;c=0;d=Jm(a);while(KF(d)){if(b.ry(KV(d))){AMf(d);c=1;}}return c;}
function J7(){}
function Gg(){Go.call(this);this.d6=0;}
function Fx(a,b){AET(a,a.f6,b);return 1;}
function Jm(a){var b;b=new TC;b.la=a;b.ym=b.la.d6;b.sr=b.la.s;b.ng=(-1);return b;}
function ABg(a,b){var c,d,e;c=a.s;d=0;a:{while(d<c){b:{e=Z(a,d);if(b!==null){if(!b.en(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function Mw(){Gg.call(this);}
function AET(a,b,c){if(b>=0){ABy(Ws(a,b),c);return;}c=new BM;O(c);M(c);}
function Tq(a,b){var c,d;if(b>=0){c=Ws(a,b);d=HE(c);AHk(c);return d;}c=new BM;O(c);M(c);}
function AUy(a){return JI(a);}
function OI(){}
function Xp(){}
function AEI(){var a=this;Mw.call(a);a.pC=null;a.ql=null;a.f6=0;}
function Q1(){var a=new AEI();A2W(a);return a;}
function A2W(a){return;}
function A9j(a){return a.f6;}
function OA(a){a.pC=null;a.ql=null;a.f6=0;a.d6=a.d6+1|0;}
function JI(a){return AJE(a,a.pC,null,0);}
function Ws(a,b){var c,d,e;if(b<0){c=new BM;O(c);M(c);}if(b<=(a.f6/2|0)){d=a.pC;e=0;while(e<b){d=d.hu;e=e+1|0;}return AJE(a,d,d===null?null:d.iy,b);}if(b>a.f6){c=new BM;O(c);M(c);}c=a.ql;e=b;while(e<a.f6){c=c.iy;e=e+1|0;}return AJE(a,c===null?null:c.hu,c,b);}
function AOd(){D.call(this);}
function F$(){D.call(this);}
function ABL(){F$.call(this);}
function AKK(){F$.call(this);}
function Jf(){}
function Fd(){Go.call(this);}
function Fu(a,b){var c,d;c=0;if(IQ(a)>=b.lV()){d=b.kW();while(d.qk()){if(!KY(a,d.mQ()))continue;c=1;}}else{d=OB(a);while(Gb(d)){if(b.ry(Lo(d))){c=1;ADU(d);}}}return c;}
function A51(a,b){var c,d;if(a===b)return 1;if(!Sr(b,Jf))return 0;c=b;if(IQ(a)!=IQ(c))return 0;d=OB(c);while(Gb(d)){if(WH(a,Lo(d)))continue;else return 0;}return 1;}
function AS7(a){var b,c,d,e,f,g;b=ABb(a);if(b===null)c=0;else{c=(-1515898884);d=0;while(true){e=b.data;if(d>=e.length)break;f=e[d];g=(f!==null?f.fk():0)^528111840;c=Nq(g,4)^(g>>>7|g<<25)^Nq(c,13);d=d+1|0;}}return c;}
function EV(){}
function AQn(){Fd.call(this);this.l6=null;}
function Ga(){var a=new AQn();A1a(a);return a;}
function A1a(a){a.l6=Dd();}
function Xn(a,b){return BP(a.l6,b,a)!==null?0:1;}
function WH(a,b){return D0(a.l6,b);}
function OB(a){return ACW(AKg(a.l6));}
function KY(a,b){return Rb(a.l6,b)===null?0:1;}
function IQ(a){return a.l6.f7;}
function LX(){}
function FY(){var a=this;D.call(a);a.wX=null;a.w7=null;}
function ACh(){var a=this;FY.call(a);a.f7=0;a.cO=null;a.g9=0;a.Fd=0.0;a.uI=0;}
function Dd(){var a=new ACh();AVy(a);return a;}
function A5$(a,b){return I(IH,b);}
function AVy(a){var b;b=AG3(16);a.f7=0;a.cO=I(IH,b);a.Fd=0.75;RS(a);}
function AG3(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vf(a){var b;if(a.f7>0){a.f7=0;b=a.cO;ZK(b,0,b.data.length,null);a.g9=a.g9+1|0;}}
function RS(a){a.uI=a.cO.data.length*a.Fd|0;}
function D0(a,b){return VS(a,b)===null?0:1;}
function AEg(a,b){var c,d,e;a:{if(b===null){c=0;b:while(true){if(c>=a.cO.data.length)break a;d=a.cO.data[c];while(d!==null){if(d.e6===null)break b;d=d.eD;}c=c+1|0;}return 1;}c=0;c:while(true){if(c>=a.cO.data.length)break a;d=a.cO.data[c];while(d!==null){e=d.e6;if(b!==e&&!b.en(e)?0:1)break c;d=d.eD;}c=c+1|0;}return 1;}return 0;}
function CP(a,b){var c;c=VS(a,b);if(c===null)return null;return c.e6;}
function VS(a,b){var c,d;if(b===null)c=QW(a);else{d=b.fk();c=P$(a,b,d&(a.cO.data.length-1|0),d);}return c;}
function P$(a,b,c,d){var e;e=a.cO.data[c];while(e!==null&&!(e.pV==d&&AI$(b,e.gb))){e=e.eD;}return e;}
function QW(a){var b;b=a.cO.data[0];while(b!==null&&b.gb!==null){b=b.eD;}return b;}
function AKg(a){var b;if(a.wX===null){b=new PP;b.Cw=a;a.wX=b;}return a.wX;}
function Ri(a,b,c){return BP(a,b,c);}
function BP(a,b,c){var d,e,f,g;if(b===null){d=QW(a);if(d===null){a.g9=a.g9+1|0;d=RP(a,null,0,0);e=a.f7+1|0;a.f7=e;if(e>a.uI)Wx(a);}}else{e=b.fk();f=e&(a.cO.data.length-1|0);d=P$(a,b,f,e);if(d===null){a.g9=a.g9+1|0;d=RP(a,b,f,e);e=a.f7+1|0;a.f7=e;if(e>a.uI)Wx(a);}}g=d.e6;d.e6=c;return g;}
function RP(a,b,c,d){var e,f;e=new IH;f=null;e.gb=b;e.e6=f;e.pV=d;e.eD=a.cO.data[c];a.cO.data[c]=e;return e;}
function ALI(a,b){var c,d,e,f,g,h,i;c=AG3(!b?1:b<<1);d=I(IH,c);e=d.data;f=0;c=c-1|0;while(f<a.cO.data.length){g=a.cO.data[f];a.cO.data[f]=null;while(g!==null){h=g.pV&c;i=g.eD;g.eD=e[h];e[h]=g;g=i;}f=f+1|0;}a.cO=d;RS(a);}
function Wx(a){ALI(a,a.cO.data.length);}
function Rb(a,b){var c;c=AEo(a,b);if(c===null)return null;return c.e6;}
function AEo(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cO.data[0];while(e!==null){if(e.gb===null)break a;f=e.eD;d=e;e=f;}}else{g=b.fk();c=g&(a.cO.data.length-1|0);e=a.cO.data[c];while(e!==null&&!(e.pV==g&&AI$(b,e.gb))){f=e.eD;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.eD=e.eD;else a.cO.data[c]=e.eD;a.g9=a.g9+1|0;a.f7=a.f7-1|0;return e;}
function A4N(a){return a.f7;}
function Iu(a){var b;if(a.w7===null){b=new PQ;b.we=a;a.w7=b;}return a.w7;}
function AI$(b,c){return b!==c&&!b.en(c)?0:1;}
function AKh(){F$.call(this);}
function Y1(){D.call(this);}
function Bf8(){var a=new Y1();A0r(a);return a;}
function A0r(a){return;}
function A3L(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gt=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I0=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaK(callback);return thread.suspend(function(){try{Bcw(b,callback);}catch($e){callback.I0($rt_exception($e));}});}
function Bcw(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){CM(c,SX(0,0,B(198),null));return;}e=d.open($rt_ustr(b),1);b=new TO;b.AN=c;b=Ct(b,"handleEvent");e.onBlocked=b;b=new TN;b.Ev=c;b.EP=e;b=Ct(b,"handleEvent");e.onsuccess=b;b=new TM;b.DB=c;b=Ct(b,"handleEvent");e.onerror=b;b=new TL;b.Br=e;b=Ct(b,"handleEvent");e.onupgradeneeded=b;}
function A5A(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gt=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I0=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaK(callback);return thread.suspend(function(){try{A_4(b,c,callback);}catch($e){callback.I0($rt_exception($e));}});}
function A_4(b,c,d){var e;b=b.transaction("filesystem","readwrite").objectStore("filesystem");c=PY($rt_ustr(c));e=b.delete(c);b=new TK;b.CL=d;b=Ct(b,"handleEvent");e.onsuccess=b;b=new TH;b.Di=d;b=Ct(b,"handleEvent");e.onerror=b;}
function A_O(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gt=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I0=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaK(callback);return thread.suspend(function(){try{Bbb(b,c,callback);}catch($e){callback.I0($rt_exception($e));}});}
function Bbb(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PY($rt_ustr(c));e=b.get(c);b=new TG;b.As=d;b.xc=e;b=Ct(b,"handleEvent");e.onsuccess=b;b=new TF;b.El=d;b=Ct(b,"handleEvent");e.onerror=b;}
function A5v(b,c,d,e,f){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gt=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I0=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaK(callback);return thread.suspend(function(){try{Bb7(b,c,d,e,f,callback);}
catch($e){callback.I0($rt_exception($e));}});}
function Bb7(b,c,d,e,f,g){var h,i;h=(b.transaction("filesystem","readonly").objectStore("filesystem")).openCursor();i=$rt_createIntArray(1);b=new Rs;b.ES=h;b.Es=g;b.y1=i;b.vH=c;b.Bl=e;b.Da=d;b.xi=f;b=Ct(b,"handleEvent");h.onsuccess=b;b=new Rt;b.DS=g;b.wM=i;b=Ct(b,"handleEvent");h.onerror=b;}
function AUx(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gt=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I0=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaK(callback);return thread.suspend(function(){try{Bc3(b,c,callback);}catch($e){callback.I0($rt_exception($e));}});}
function Bc3(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PY($rt_ustr(c));e=b.get(c);b=new Rp;b.CT=d;b.u_=e;b=Ct(b,"handleEvent");e.onsuccess=b;b=new Rq;b.Ek=d;b=Ct(b,"handleEvent");e.onerror=b;}
function AXV(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gt=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I0=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaK(callback);return thread.suspend(function(){try{Bbi(b,c,d,e,callback);}catch($e)
{callback.I0($rt_exception($e));}});}
function Bbi(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(B$(),new Long(596067632, 383)).lo;c=A5S($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Rr;c.Bz=f;b=Ct(c,"handleEvent");h.onsuccess=b;b=new Ru;b.BS=f;b=Ct(b,"handleEvent");h.onerror=b;}
function A8B(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function UD(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function A0N(b){return typeof b==='undefined'? -1:typeof b.lastModified==='undefined'? -1:b.lastModified;}
function PY(b){return [b];}
function AZY(b){return typeof b==="string"?b:typeof b==="undefined"?null:typeof b[0]==="string"?b[0]:null;}
function A5S(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AE5(){var a=this;D.call(a);a.Fi=0;a.E7=0;a.uB=null;a.xT=null;}
function SX(a,b,c,d){var e=new AE5();AXt(e,a,b,c,d);return e;}
function AXt(a,b,c,d,e){a.Fi=b;a.E7=c;a.uB=d;a.xT=e;}
function EZ(){var a=this;D.call(a);a.HE=null;a.tb=0;}
function Bf9(a,b){var c=new EZ();FT(c,a,b);return c;}
function FT(a,b,c){a.HE=b;a.tb=c;}
function A0O(a){return a.tb;}
function ATy(a,b){return a!==b?0:1;}
function AX8(a){return MP(a);}
function JX(a){var b;b=Dk(a);if(!Q9(JM(b),F(EZ)))b=JM(b);return b;}
function XR(a,b){var c,d;if(JX(b)===JX(a))return R(a.tb,b.tb);c=new Cb;d=new T;V(d);Bl(c,U(J(J(J(J(d,B(199)),IF(JX(a))),B(200)),IF(JX(b)))));M(c);}
function AXF(a,b){return XR(a,b);}
function E$(){EZ.call(this);}
var BfJ=null;var BfI=null;var BfH=null;var Bf$=null;function AHm(){var b,c,d;b=new E$;FT(b,B(201),0);BfJ=b;b=new E$;FT(b,B(202),1);BfI=b;b=new E$;FT(b,B(203),2);BfH=b;c=I(E$,3);d=c.data;d[0]=BfJ;d[1]=BfI;d[2]=BfH;Bf$=c;}
function Qw(){}
function Ve(){D.call(this);this.yC=null;}
function BaK(b){var c;c=new Ve;c.yC=b;return c;}
function CM(a,b){a.yC.Gt(b);}
function A2a(a,b){a.yC.I0(b);}
function AQK(){D.call(this);}
function Xv(){}
function Xa(){var a=this;D.call(a);a.vp=null;a.Aa=null;}
function ARk(a){var b,c,d;if(a.vp.readyState==4){b=new Uint8Array(a.vp.response);c=$rt_createByteArray(b.byteLength);Bb();BdO=c;d=0;while(d<Wc().data.length){Wc().data[d]=b[d]<<24>>24;d=d+1|0;}CM(a.Aa,B(204));}}
function A14(a){ARk(a);}
function H3(){D.call(this);}
function AQi(){var a=this;H3.call(a);a.w5=null;a.kl=0;a.Ga=0;a.qM=0;}
function Us(a){var b=new AQi();AT7(b,a);return b;}
function AT7(a,b){var c;c=b.data.length;a.w5=b;a.kl=0;a.Ga=0;a.qM=0+c|0;}
function A4K(a){var b,c,d;if(a.kl>=a.qM)b=(-1);else{c=a.w5.data;d=a.kl;a.kl=d+1|0;b=c[d]&255;}return b;}
function A_o(a,b,c,d){var e,f,g,h,i;e=CA(d,a.qM-a.kl|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.w5.data;i=a.kl;a.kl=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function A5w(a){return a.qM-a.kl|0;}
function IW(){H3.call(this);this.ko=null;}
function Bf_(a){var b=new IW();R_(b,a);return b;}
function R_(a,b){a.ko=b;}
function AKF(a){return a.ko.wW();}
function Pq(){}
function P5(){IW.call(this);this.d_=null;}
function O3(a){var b=new P5();AIz(b,a);return b;}
function AIz(a,b){R_(a,b);a.d_=$rt_createByteArray(8);}
function NV(a,b){var c;c=b.data;return a.ko.oa(b,0,c.length);}
function N5(a){var b,c;b=a.ko.Cv();if(b>=0)return b<<24>>24;c=new FG;O(c);M(c);}
function J_(a,b){var c,d;c=0;while(c<b){d=a.ko.oa(a.d_,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function APp(a){return $rt_longBitsToDouble(Tp(a));}
function AA7(a){return $rt_intBitsToFloat(H9(a));}
function AMY(a,b){QV(a,b,0,b.data.length);}
function QV(a,b,c,d){var e,f;if(d<0){e=new BM;O(e);M(e);}if(!d)return;if(a.ko===null){e=new EF;O(e);M(e);}if(b===null){e=new EF;O(e);M(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.ko.oa(b,c,d);if(f<0){e=new FG;O(e);M(e);}c=c+f|0;d=d-f|0;}return;}e=new BM;O(e);M(e);}
function H9(a){var b;if(J_(a,4)<0){b=new FG;O(b);M(b);}return (a.d_.data[0]&255)<<24|(a.d_.data[1]&255)<<16|(a.d_.data[2]&255)<<8|a.d_.data[3]&255;}
function Tp(a){var b;if(J_(a,8)<0){b=new FG;O(b);M(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.d_.data[0]&255)<<24|(a.d_.data[1]&255)<<16|(a.d_.data[2]&255)<<8|a.d_.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.d_.data[4]&255)<<24|(a.d_.data[5]&255)<<16|(a.d_.data[6]&255)<<8|a.d_.data[7]&255),new Long(4294967295, 0)));}
function XQ(a){var b;if(J_(a,2)<0){b=new FG;O(b);M(b);}return ((a.d_.data[0]&255)<<24>>16|a.d_.data[1]&255)<<16>>16;}
function APJ(a){var b;if(J_(a,2)<0){b=new FG;O(b);M(b);}return ((a.d_.data[0]&255)<<8|a.d_.data[1]&255)&65535;}
function GW(a){return ALE(a,APJ(a));}
function ALE(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);QV(a,c,0,b);return AW6(c,d,0,b);}
function AW6(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Hw;Bl(m,B(205));M(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Hw;Bl(m,B(206));M(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Hw;Bl(m,B(206));M(m);}f=j+1|0;if(f>=e){m=new Hw;Bl(m,B(206));M(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return Lm(c,0,g);}m=new Hw;Bl(m,B(206));M(m);}
function MY(){var a=this;D.call(a);a.wt=null;a.H7=null;}
function R5(b){var c,d;if(IA(b))M(ALu(b));if(!APV(Y(b,0)))M(ALu(b));c=1;while(c<Bh(b)){a:{d=Y(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(APV(d))break a;else M(ALu(b));}}c=c+1|0;}}
function APV(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function Ya(b){var c;if(b===null){b=new Cb;Bl(b,B(207));M(b);}R5(b);c=CP(Bga,AOm(b));if(c!==null)return c;c=new Vl;O(c);c.Ix=b;M(c);}
function AN6(a,b){var c,d,$$je;a:{try{b=AJQ(ADM(AQ7(AFz(a),Bgb),Bgb),b);}catch($$e){$$je=Bj($$e);if($$je instanceof G0){c=$$je;break a;}else{throw $$e;}}return b;}d=new W7;d.op=1;d.rP=1;d.vz=B(208);d.jE=c;M(d);}
function ABC(a,b){return AJI(a.wt,b.wt);}
function A6A(a,b){return ABC(a,b);}
function WV(){var a=this;IW.call(a);a.g4=null;a.oi=null;a.qi=0;a.oI=0;a.EF=0;a.Ei=0;a.wF=null;a.G2=null;}
function AS5(a){var b;if(a.qi){b=new B3;Bl(b,B(209));M(b);}return AL3(a,a.wF,0,1)==(-1)?(-1):a.wF.data[0]&255;}
function AL3(a,b,c,d){var e,f,g;if(a.qi){e=new B3;Bl(e,B(209));M(e);}if(b===null){e=new EF;O(e);M(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.oI)return (-1);f=0;AAN(a.g4,b,c,d);a:{while(!a.oI){if(!a.g4.N)ABo(a);b:{g=AF8(a.g4,0);f=f+(a.g4.pO-c|0)|0;c=a.g4.pO;switch(g){case -3:e=new B3;Bl(e,a.g4.b9);M(e);case 1:case 2:break;default:break b;}a.oI=1;if(g==2)return (-1);}if(!a.g4.ic)break a;}}return f;}e=new BM;O(e);M(e);}
function A0q(a){var b;if(!a.qi){if(!a.oI)return 1;return 0;}b=new B3;Bl(b,B(209));M(b);}
function ABo(a){var b,c;if(a.qi){b=new B3;Bl(b,B(209));M(b);}a:{c=a.ko.oa(a.oi,0,a.oi.data.length);if(c==(-1)){if(a.g4.jx.dZ)break a;if(Yo(a.g4))break a;a.oi.data[0]=0;c=1;}AKb(a.g4,a.oi,0,c,1);return;}if(Long_ne(a.g4.jx.rR,Long_fromInt(-1))){b=new B3;Bl(b,B(210));M(b);}b=new FG;Bl(b,B(211));M(b);}
function Nb(){var a=this;D.call(a);a.h9=null;a.jt=0;a.nl=Long_ZERO;}
function Jd(a,b){var c,d;c=a.h9.data;d=a.jt;a.jt=d+1|0;c[d]=b;if(a.jt==a.h9.data.length){Ta(a,a.h9,0);a.jt=0;}a.nl=Long_add(a.nl,Long_fromInt(1));}
function ADW(a,b,c,d){a:{while(a.jt){if(d<=0)break a;Jd(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.h9.data.length){Ta(a,b,c);c=c+a.h9.data.length|0;d=d-a.h9.data.length|0;a.nl=Long_add(a.nl,Long_fromInt(a.h9.data.length));}while(d>0){Jd(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function APn(a){var b;b=Long_shl(a.nl,3);Jd(a,(-128));while(a.jt){Jd(a,0);}AK5(a,b);MG(a);}
function ADw(){var a=this;Nb.call(a);a.px=0;a.py=0;a.pz=0;a.pA=0;a.pB=0;a.ej=null;a.mS=0;}
function Ba1(){var a=new ADw();A$m(a);return a;}
function A$m(a){a.h9=$rt_createByteArray(4);a.jt=0;a.ej=$rt_createIntArray(80);OO(a);}
function Ta(a,b,c){var d,e;d=b.data;b=a.ej.data;e=a.mS;a.mS=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.mS==16)MG(a);}
function HN(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AK5(a,b){if(a.mS>14)MG(a);a.ej.data[14]=b.hi;a.ej.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AMc(a,b,c){APn(a);HN(a,a.px,b,c);HN(a,a.py,b,c+4|0);HN(a,a.pz,b,c+8|0);HN(a,a.pA,b,c+12|0);HN(a,a.pB,b,c+16|0);OO(a);return 20;}
function OO(a){var b;a.nl=Long_ZERO;a.jt=0;b=0;while(b<a.h9.data.length){a.h9.data[b]=0;b=b+1|0;}a.px=1732584193;a.py=(-271733879);a.pz=(-1732584194);a.pA=271733878;a.pB=(-1009589776);a.mS=0;b=0;while(b!=a.ej.data.length){a.ej.data[b]=0;b=b+1|0;}}
function Vn(a,b,c,d){return b^c^d;}
function Fh(a,b,c){return b<<c|b>>>(32-c|0);}
function MG(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.ej.data[b]=Fh(a,a.ej.data[b-3|0]^a.ej.data[b-8|0]^a.ej.data[b-14|0]^a.ej.data[b-16|0],1);b=b+1|0;}c=a.px;d=a.py;e=a.pz;f=a.pA;g=a.pB;h=0;while(h<=19){i=(((Fh(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.ej.data[h]|0)+1518500249|0;b=Fh(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Fh(a,c,5)+Vn(a,d,e,f)|0)+g|0)+a.ej.data[j]|0)+1859775393|0;b=Fh(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Fh(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.ej.data[h]|0)
+(-1894007588)|0;b=Fh(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Fh(a,c,5)+Vn(a,d,e,f)|0)+g|0)+a.ej.data[j]|0)+(-899497514)|0;b=Fh(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.px=a.px+c|0;a.py=a.py+d|0;a.pz=a.pz+e|0;a.pA=a.pA+f|0;a.pB=a.pB+g|0;a.mS=0;b=0;while(b!=a.ej.data.length){a.ej.data[b]=0;b=b+1|0;}}
function AJg(){D.call(this);}
function Bgc(){var a=new AJg();A5_(a);return a;}
function A5_(a){return;}
function O_(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=CA(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ol(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=CA(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Nv(b,c){var d,e,f,g;d=b.data;e=AEL(KA(Dk(b)),c);f=CA(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function M4(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new Cb;O(f);M(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZK(b,c,d,e){var f,g;if(c>d){e=new Cb;O(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function P3(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=I(D,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=CA(j,h+f|0);l=h+(2*f|0)|0;m=CA(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qf(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AOw(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new Cb;O(f);M(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function Jc(){var a=this;D.call(a);a.Df=0;a.B7=null;a.xh=null;}
function Bgd(a,b,c){var d=new Jc();RN(d,a,b,c);return d;}
function RN(a,b,c,d){a.Df=b;a.B7=c;a.xh=d;}
function ABG(a,b){var c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Yz(b,a.B7)<a.Df){c=0;d=null;if(c<10){e=1;f=b.bh;$p=1;continue _;}}return;case 1:AOB(a,b,e,f,d);if(C()){break _;}c=c+1|0;if(c>=10)return;e=1;f=b.bh;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function A5g(a,b,c,d){return CO((c+E(b.q,256)|0)-128|0,E(b.q,128),(d+E(b.q,256)|0)-128|0);}
function AOB(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=K(d.d);h=K(d.e);i=E(b.q,a.xh.data.length);j=a.Ao(b,g,h);k=j.eE;l=j.e0;m=j.eF;$p=1;case 1:$z
=AAI(b,k,l,m);if(C()){break _;}c=$z;if(c)return 0;$p=2;case 2:$z=AB6(b,k,l,m);if(C()){break _;}e=$z;if(e!==Bge)return 0;n=0;while(n<3){o=6;p=0;h=k;q=l;r=m;if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;}return f;case 3:$z=AAI(b,h,c,r);if(C()){break _;}c=$z;if(c){$p=4;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;continue _;}n=n+1|0;if(n>=3)break;o
=6;p=0;h=k;q=l;r=m;}return f;case 4:$z=AAI(b,h,q,r);if(C()){break _;}c=$z;if(!c){$p=5;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 5:$z=AB6(b,h,q,r);if(C()){break _;}e=$z;if(!e.nC()){c=q+1|0;$p=6;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|
0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 6:a:{$z=AAI(b,h,c,r);if(C()){break _;}c=$z;if(!c){b:{s=h+0.5;t=q+1.0;u=r+0.5;if(d===null){v=s-b.fj;w=t-b.p0;x=u-b.fi;if(v*v+w*w+x*x>=1024.0)break b;break a;}y=s-d.d;z=t-d.j;ba=u-d.e;if(y*y+z*z+ba*ba<1024.0)break a;}c:{try{e=a.xh.data[i];bb=I(FS,1);bb.data[0]=F(F0);e=WI(e,bb);bb=I(D,1);bb.data[0]=b;bc=WL(e,bb);break c;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){}else{throw $$e;}}return f;}y=s;z=t;ba=u;Kw(bc,y,z,ba,N(b.q)*360.0,0.0);$p=7;continue _;}}p=p+
1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 7:$z=bc.uS(y,z,ba);if(C()){break _;}c=$z;if(c){f=f+1|0;$p=8;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 8:AOl(b,bc);if(C()){break _;}p=p+1|0;while(true){if(p<3)
{h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$p);}
function U5(){Jc.call(this);this.GB=null;}
function A12(a,b,c,d){return CO((c+E(b.q,256)|0)-128|0,E(b.q,E(b.q,E(b.q,112)+8|0)+8|0),(d+E(b.q,256)|0)-128|0);}
function C5(){var a=this;D.call(a);a.mB=0;a.bH=null;a.bC=null;a.l=null;a.bS=0.0;a.cS=0.0;a.bR=0.0;a.d=0.0;a.j=0.0;a.e=0.0;a.g=0.0;a.i=0.0;a.h=0.0;a.v=0.0;a.J=0.0;a.P=0.0;a.T=0.0;a.L=null;a.cx=0;a.jX=0;a.x6=0;a.lj=0;a.cR=0;a.c4=0.0;a.c1=0.0;a.eO=0.0;a.tY=0.0;a.hc=0.0;a.i9=0;a.fI=0.0;a.rf=0;a.cs=0.0;a.b7=0.0;a.ct=0.0;a.ek=0.0;a.rq=0.0;a.o4=0;a.n4=0.0;a.I7=0;a.m=null;a.oQ=0;a.nH=0;a.cV=0;a.n5=0;a.tn=0;a.dy=0;a.f_=0;a.oz=0;a.tK=null;a.g6=0.0;a.gZ=0.0;}
function Bgf(a){var b=new C5();FC(b,a);return b;}
function FC(a,b){a.mB=0;a.L=Nx(0.0,0.0,0.0,0.0,0.0,0.0);a.cx=0;a.jX=0;a.x6=0;a.lj=1;a.cR=0;a.c4=0.0;a.c1=0.6000000238418579;a.eO=1.7999999523162842;a.tY=0.0;a.hc=0.0;a.i9=1;a.fI=0.0;a.rf=1;a.ek=0.0;a.rq=0.0;a.o4=0;a.n4=0.0;a.I7=0;a.m=new DA;a.oQ=0;a.nH=1;a.cV=0;a.n5=300;a.tn=0;a.dy=0;a.f_=300;a.oz=1;a.l=b;CT(a,0.0,0.0,0.0);}
function Ca(a){a.cR=1;}
function D2(a,b,c){a.c1=b;a.eO=c;}
function WX(a,b,c){a.v=b;a.J=c;}
function CT(a,b,c,d){var e,f,g,h,i,j;a.d=b;a.j=c;a.e=d;e=a.c1/2.0;f=a.eO/2.0;g=a.L;h=e;i=b-h;j=f;M9(g,i,c-j,d-h,b+h,c+j,d+h);}
function AJc(a){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jg();if(C()){break _;}return;default:Fa();}}C3().s(a,$p);}
function AEY(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bC!==null&&a.bC.cR)a.bC=null;a.oQ=a.oQ+1|0;a.tY=a.hc;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.T=a.J;a.P=a.v;$p=1;case 1:$z=a.HM();if(C()){break _;}b=$z;if(!b)a.tn=0;else{a:{if(!a.tn&&!a.oz){c=Cd(a.g*a.g*0.20000000298023224+a.i*a.i+a.h*a.h*0.20000000298023224)*0.20000000298023224;if(c>1.0)c=1.0;Dg(a.l,a,B(212),c,1.0+(N(a.m)-N(a.m))*0.4000000059604645);d
=K(a.L.M);b=0;e=d+1.0;while(b<1.0+a.c1*20.0){f=(N(a.m)*2.0-1.0)*a.c1;g=(N(a.m)*2.0-1.0)*a.c1;BU(a.l,B(213),a.d+f,e,a.e+g,a.g,a.i-N(a.m)*0.20000000298023224,a.h);b=b+1|0;}b=0;while(true){if(b>=1.0+a.c1*20.0)break a;f=(N(a.m)*2.0-1.0)*a.c1;g=(N(a.m)*2.0-1.0)*a.c1;BU(a.l,B(214),a.d+f,e,a.e+g,a.g,a.i,a.h);b=b+1|0;}}}a.fI=0.0;a.tn=1;a.cV=0;}if(a.cV>0){if(!(a.cV%20|0)){h=null;b=1;$p=4;continue _;}a.cV=a.cV-1|0;}$p=2;case 2:$z=ACs(a);if(C()){break _;}b=$z;if(b){h=null;b=10;$p=3;continue _;}if(a.j>=(-64.0)){a.oz=0;return;}$p
=5;continue _;case 3:a.fr(h,b);if(C()){break _;}a.cV=600;if(a.j>=(-64.0)){a.oz=0;return;}$p=5;continue _;case 4:a.fr(h,b);if(C()){break _;}a.cV=a.cV-1|0;$p=2;continue _;case 5:a.DU();if(C()){break _;}a.oz=0;return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function X7(a){Ca(a);}
function AHj(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Ui(a.L,b,c,d);f=a.l;$p=1;case 1:$z=X0(f,a,e);if(C()){break _;}f=$z;if(f.s>0)return 0;f=a.l;$p=2;case 2:$z=AJo(f,e);if(C()){break _;}g=$z;return g?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ARJ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.o4){F2(a.L,b,c,d);a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.ek;a.e=(a.L.S+a.L.W)/2.0;return;}e=a.d;f=a.e;g=Qi(a.L);h=a.l;i=Jh(a.L,b,c,d);$p=1;case 1:$z
=X0(h,a,i);if(C()){break _;}j=$z;k=0;l=c;while(k<CX(j)){l=Wg(Z(j,k),a.L,l);k=k+1|0;}F2(a.L,0.0,l,0.0);if(a.lj){m=d;n=b;}else if(c===l){m=d;n=b;}else{n=0.0;m=n;l=n;}a:{b:{if(!a.cx){if(c===l)break b;if(c>=0.0)break b;}o=1;break a;}o=0;}p=0;while(p<CX(j)){n=Qz(Z(j,p),a.L,n);p=p+1|0;}F2(a.L,n,0.0,0.0);if(!a.lj&&b!==n){n=0.0;m=n;l=n;}k=0;while(k<CX(j)){m=Ul(Z(j,k),a.L,m);k=k+1|0;}F2(a.L,0.0,0.0,m);if(!a.lj&&d!==m){n=0.0;m=n;l=n;}c:{if(a.rq<=0.0){q=n;r=l;s=m;}else if(!o){q=n;r=l;s=m;}else if(a.ek>=0.05000000074505806)
{q=n;r=l;s=m;}else{if(b!==n)break c;if(d!==m)break c;q=n;r=l;s=m;}a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.ek;a.e=(a.L.S+a.L.W)/2.0;t=R(b,q);a.jX=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.x6=!a.jX&&!k?0:1;if(!a.cx){if(r<0.0)a.fI=a.fI-r;}else if(a.fI>0.0){u=a.fI;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.hc=a.hc+Cd(l*l+m*m)*0.6;if(!a.i9){a.ek=a.ek*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;}r=a.rq;i=Qi(a.L);Xk(a.L,
g);h=a.l;g=Jh(a.L,b,r,d);$p=2;case 2:$z=X0(h,a,g);if(C()){break _;}h=$z;y=0;while(y<CX(h)){r=Wg(Z(h,y),a.L,r);y=y+1|0;}F2(a.L,0.0,r,0.0);if(a.lj){s=d;q=b;}else if(c===r){s=d;q=b;}else{q=0.0;s=q;r=q;}k=0;while(k<CX(h)){q=Qz(Z(h,k),a.L,q);k=k+1|0;}F2(a.L,q,0.0,0.0);if(!a.lj&&b!==q){q=0.0;s=q;r=q;}t=0;while(t<CX(h)){s=Ul(Z(h,t),a.L,s);t=t+1|0;}F2(a.L,0.0,0.0,s);if(!a.lj&&d!==s){q=0.0;s=q;r=q;}if(n*n+m*m>=q*q+s*s){Xk(a.L,i);q=n;r=l;s=m;}else a.ek=a.ek+0.5;a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.ek;a.e=(a.L.S+a.L.W)
/2.0;t=R(b,q);a.jX=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.x6=!a.jX&&!k?0:1;if(!a.cx){if(r<0.0)a.fI=a.fI-r;}else if(a.fI>0.0){u=a.fI;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.hc=a.hc+Cd(l*l+m*m)*0.6;if(!a.i9){a.ek=a.ek*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;case 3:a.DI(u);if(C()){break _;}a.fI=0.0;if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.hc=a.hc+Cd(l*l+m*m)*0.6;if(!a.i9){a.ek=a.ek
*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;case 4:$z=a.HM();if(C()){break _;}t=$z;i=a.l;h=a.L;$p=5;case 5:$z=ARe(i,h);if(C()){break _;}k=$z;if(!k){if(a.cV<=0)a.cV= -a.nH;if(t&&a.cV>0){Dg(a.l,a,B(215),0.699999988079071,1.600000023841858+(N(a.m)-N(a.m))*0.4000000059604645);a.cV= -a.nH;}return;}k=1;$p=7;continue _;case 6:$z=ACB(i,v,w,x);if(C()){break _;}y=$z;if(a.hc>a.rf&&y>0){a.rf=a.rf+1|0;L();h=BeT.data[y].gK;if(!BeT.data[y].b_.nC())Dg(a.l,a,
Kk(h),AMR(h)*0.15000000596046448,Ym(h));i=BeT.data[y];h=a.l;$p=8;continue _;}a.ek=a.ek*0.4000000059604645;$p=4;continue _;case 7:a.FZ(k);if(C()){break _;}if(!t){a.cV=a.cV+1|0;if(!a.cV)a.cV=300;}if(t&&a.cV>0){Dg(a.l,a,B(215),0.699999988079071,1.600000023841858+(N(a.m)-N(a.m))*0.4000000059604645);a.cV= -a.nH;}return;case 8:i.oH(h,v,w,x,a);if(C()){break _;}a.ek=a.ek*0.4000000059604645;$p=4;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function A1Q(a){return null;}
function AJ9(a,b){var c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:a.fr(c,b);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,$p);}
function Zp(a,b){return;}
function AE$(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=Du(a.L,0.0,(-0.4000000059604645),0.0);d=BfV;$p=1;case 1:$z=AAz(b,c,d,a);if(C()){break _;}e=$z;return e;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AGL(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j+a.rI();d=K(a.d);e=K6(K(c));f=K(a.e);g=a.l;$p=1;case 1:$z=ACB(g,d,e,f);if(C()){break _;}h=$z;if(h){L();if(BeT.data[h].b_===b){b=a.l;$p=2;continue _;}}return 0;case 2:$z=AEN(b,d,e,f);if(C()){break _;}d=$z;return c>=(e+1|0)-(Jy(d)-0.1111111119389534)?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ACs(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=Du(a.L,0.0,(-0.4000000059604645),0.0);d=BfW;$p=1;case 1:$z=AOx(b,c,d);if(C()){break _;}e=$z;return e;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function L6(a,b,c,d){var e,f,g;e=D_(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;c=c*d;f=Bq(a.v*3.1415927410125732/180.0);g=BC(a.v*3.1415927410125732/180.0);a.g=a.g+b*g-c*f;a.h=a.h+c*g+b*f;}}
function ADL(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(a.d);d=(a.L.U-a.L.M)*0.66;e=K(a.j-a.c4+d);f=K(a.e);g=a.l;$p=1;case 1:$z=ANm(g,c,e,f);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AUG(a,b){a.l=b;}
function Kw(a,b,c,d,e,f){a.d=b;a.bS=b;b=c+a.c4;a.j=b;a.cS=b;a.e=d;a.bR=d;a.v=e;a.J=f;CT(a,a.d,a.j,a.e);}
function AR9(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return D_(c*c+d*d+e*e);}
function AGQ(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return e*e+f*f+g*g;}
function Sq(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return Cd(e*e+f*f+g*g);}
function LG(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return c*c+d*d+e*e;}
function A6X(a,b){return;}
function A5H(a,b){var c,d,e,f,g;c=b.d-a.d;d=b.e-a.e;e=c<0.0? -c:c;f=d<0.0? -d:d;if(e>f)f=e;if(f>=0.009999999776482582){e=Cd(f);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;e=f*g;c=c*0.05000000074505806;e=e*0.05000000074505806;c=c*(1.0-a.n4);e=e*(1.0-a.n4);Hr(a, -c,0.0, -e);Hr(b,c,0.0,e);}}
function Hr(a,b,c,d){a.g=a.g+b;a.i=a.i+c;a.h=a.h+d;}
function AJM(a,b,c){return 0;}
function A9P(a){return 0;}
function A70(a){return 0;}
function A_n(a,b,c){return;}
function Sj(a,b){var c,d,e;c=a.d-b.x;d=a.j-b.z;e=a.e-b.w;return AHi(a,c*c+d*d+e*e);}
function AHi(a,b){var c;c=AP0(a.L)*64.0;return b>=c*c?0:1;}
function ALz(a,b){var c,d;c=$rt_createDoubleArray(3);d=c.data;d[0]=a.d;d[1]=a.j;d[2]=a.e;HH(b,B(216),We(a,c));c=$rt_createDoubleArray(3);d=c.data;d[0]=a.g;d[1]=a.i;d[2]=a.h;HH(b,B(217),We(a,c));c=$rt_createFloatArray(2);d=c.data;d[0]=a.v;d[1]=a.J;HH(b,B(218),AME(a,c));ASa(b,B(219),a.fI);Ft(b,B(220),a.cV<<16>>16);Ft(b,B(221),a.f_<<16>>16);S5(b,B(222),a.cx);ABU(a,b);}
function YZ(a,b){var c,d,e,f,g;c=Kl(b,B(216));d=Kl(b,B(217));e=Kl(b,B(218));CT(a,0.0,0.0,0.0);a.g=Fe(d,0).iL;a.i=Fe(d,1).iL;a.h=Fe(d,2).iL;f=Fe(c,0).iL;a.d=f;a.cs=f;a.bS=f;f=Fe(c,1).iL;a.j=f;a.b7=f;a.cS=f;f=Fe(c,2).iL;a.e=f;a.ct=f;a.bR=f;g=Fe(e,0).nk;a.v=g;a.P=g;g=Fe(e,1).nk;a.J=g;a.T=g;a.fI=AMK(b,B(219));a.cV=FK(b,B(220));a.f_=FK(b,B(221));a.cx=Uy(b,B(222));CT(a,a.d,a.j,a.e);AO1(a,b);}
function We(a,b){var c,d,e,f,g;b=b.data;c=Ma();d=b.length;e=0;while(e<d){f=b[e];g=new Ms;Cv(g);g.iL=f;Jt(c,g);e=e+1|0;}return c;}
function AME(a,b){var c,d,e;b=b.data;c=Ma();d=b.length;e=0;while(e<d){Jt(c,A6V(b[e]));e=e+1|0;}return c;}
function ABZ(a,b,c){var d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0.0;$p=1;case 1:$z=AGK(a,b,c,d);if(C()){break _;}e=$z;return e;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AGK(a,b,c,d){var e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Hf(a.l,a.d,a.j+d,a.e,KC(b,c));e.hb=10;f=a.l;$p=1;case 1:AOl(f,e);if(C()){break _;}return e;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AHD(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.j+a.rI());d=K(a.e);e=a.l;$p=1;case 1:$z=AAI(e,b,c,d);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AWO(a,b){return 0;}
function AW5(a,b){return null;}
function AFg(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bC.cR){a.bC=null;return;}a.g=0.0;a.i=0.0;a.h=0.0;$p=1;case 1:a.eo();if(C()){break _;}CT(a,a.bC.d,a.bC.j+a.c4+a.bC.Ad(),a.bC.e);a.gZ=a.gZ+a.bC.v-a.bC.P;a.g6=a.g6+a.bC.J-a.bC.T;while(a.gZ>=180.0){a.gZ=a.gZ-360.0;}while(a.gZ<(-180.0)){a.gZ=a.gZ+360.0;}while(a.g6>=180.0){a.g6=a.g6-360.0;}while(a.g6<(-180.0)){a.g6=a.g6+360.0;}b=a.gZ*0.5;c=a.g6*0.5;d=10.0;if(b>d)b
=d;e=(-10.0);if(b<e)b=e;if(c<=d)d=c;if(d>=e)e=d;a.gZ=a.gZ-b;a.g6=a.g6-e;a.v=a.v+b;a.J=a.J+e;return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function A9T(a){return a.eO*0.75;}
function Pn(a,b){a.g6=0.0;a.gZ=0.0;if(a.bC===b){a.bC.bH=null;a.bC=null;}else{if(a.bC!==null)a.bC.bH=null;if(b.bH!==null)b.bH.bC=null;a.bC=b;b.bH=a;}}
function Xr(a,b,c){var d,e;d=a.J;e=a.v;a.v=a.v+b*0.15;a.J=a.J-c*0.15;if(a.J<(-90.0))a.J=(-90.0);if(a.J>90.0)a.J=90.0;a.T=a.T+a.J-d;a.P=a.P+a.v-e;}
function ER(){var a=this;C5.call(a);a.oZ=0;a.JL=0.0;a.G8=0.0;a.Is=0.0;a.dG=0.0;a.e9=0.0;a.z0=0.0;a.nf=0.0;a.j2=0.0;a.md=0.0;a.G$=0;a.yr=null;a.G9=0;a.D8=0.0;a.E5=null;a.Jy=0.0;a.u0=0;a.Jz=0.0;a.bT=0;a.tG=0;a.uY=0;a.dE=0;a.ER=0;a.kE=0.0;a.c2=0;a.dz=0;a.kY=0.0;a.jl=0.0;a.Cn=0;a.Fk=0;a.JE=0.0;a.jT=0.0;a.ch=0.0;a.gm=0.0;a.hn=0;a.iN=0.0;a.gD=0.0;a.kF=0.0;a.hI=0;a.zR=0.0;a.sZ=0.0;}
function PR(a){return a.yr;}
function AXy(a){return a.cR?0:1;}
function A1U(a){return a.cR?0:1;}
function AQt(a){return a.eO*0.8500000238418579;}
function ANt(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AEY(a);if(C()){break _;}b=E(a.m,1000);c=a.uY;a.uY=c+1|0;if(b<c){a.uY=(-80);d=a.wA();if(d!==null)Dg(a.l,a,d,1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);}if(H8(a)){$p=2;continue _;}if(H8(a)){d=BfV;$p=3;continue _;}a.f_=a.n5;a.kY=a.jl;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy
>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.md=a.j2;a.e9=a.dG;a.P=a.v;a.T=a.J;return;case 2:$z=AHD(a);if(C()){break _;}e=$z;if(e){d=null;e=1;$p=4;continue _;}if(H8(a)){d=BfV;$p=3;continue _;}a.f_=a.n5;a.kY=a.jl;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.md=a.j2;a.e9=a.dG;a.P=a.v;a.T=a.J;return;case 3:$z=AGL(a,d);if(C()){break _;}e=$z;if(!e)a.f_=a.n5;else{a.f_=a.f_-1|0;if(a.f_==(-20)){a.f_=0;e
=0;while(e<8){f=N(a.m)-N(a.m);g=N(a.m)-N(a.m);h=N(a.m)-N(a.m);BU(a.l,B(213),a.d+f,a.j+g,a.e+h,a.g,a.i,a.h);e=e+1|0;}d=null;e=2;$p=5;continue _;}a.cV=0;}a.kY=a.jl;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.md=a.j2;a.e9=a.dG;a.P=a.v;a.T=a.J;return;case 4:a.fr(d,e);if(C()){break _;}if(H8(a)){d=BfV;$p=3;continue _;}a.f_=a.n5;a.kY=a.jl;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2
+1|0;if(a.c2>20){$p=6;continue _;}}a.md=a.j2;a.e9=a.dG;a.P=a.v;a.T=a.J;return;case 5:a.fr(d,e);if(C()){break _;}a.cV=0;a.kY=a.jl;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.md=a.j2;a.e9=a.dG;a.P=a.v;a.T=a.J;return;case 6:Ca(a);if(C()){break _;}e=0;while(e<20){i=CZ(a.m)*0.02;j=CZ(a.m)*0.02;k=CZ(a.m)*0.02;BU(a.l,B(223),a.d+N(a.m)*a.c1*2.0-a.c1,a.j+N(a.m)*a.eO,a.e+N(a.m)*a.c1*2.0-a.c1,i,j,k);e=e+1|0;}a.md=a.j2;a.e9=a.dG;a.P=a.v;a.T
=a.J;return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AEV(a){var b,c,d,e;b=0;while(b<20){c=CZ(a.m)*0.02;d=CZ(a.m)*0.02;e=CZ(a.m)*0.02;BU(a.l,B(223),a.d+N(a.m)*a.c1*2.0-a.c1-c*10.0,a.j+N(a.m)*a.eO-d*10.0,a.e+N(a.m)*a.c1*2.0-a.c1-e*10.0,c,d,e);b=b+1|0;}}
function AKX(a){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFg(a);if(C()){break _;}a.z0=a.nf;a.nf=0.0;return;default:Fa();}}C3().s(a,$p);}
function AMx(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jg();if(C()){break _;}$p=2;case 2:a.oq();if(C()){break _;}b=a.d-a.bS;c=a.e-a.bR;d=Cd(b*b+c*c);e=a.dG;f=0.0;a.z0=a.nf;g=0.0;if(d>0.05000000074505806){g=1.0;f=d*3.0;e=CR(c,b)*180.0/3.1415927410125732-90.0;}if(!a.cx)g=0.0;a.nf=a.nf+(g-a.nf)*0.30000001192092896;h=e-a.dG;while(h<(-180.0)){h=h+360.0;}while
(h>=180.0){h=h-360.0;}a.dG=a.dG+h*0.10000000149011612;i=a.v-a.dG;while(i<(-180.0)){i=i+360.0;}while(i>=180.0){i=i-360.0;}j=i>=(-90.0)&&i<90.0?0:1;if(i<(-75.0))i=(-75.0);if(i>=75.0)i=75.0;a.dG=a.v-i;a.dG=a.dG+i*0.10000000149011612;if(j)f=f*(-1.0);while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}while(a.dG-a.e9<(-180.0)){a.e9=a.e9-360.0;}while(a.dG-a.e9>=180.0){a.e9=a.e9+360.0;}while(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}a.j2=a.j2+f;return;default:Fa();}}C3().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function A1k(a,b,c){D2(a,b,c);}
function UW(a,b){if(a.bT>0){a.bT=a.bT+b|0;if(a.bT>20)a.bT=20;a.dy=a.oZ/2|0;}}
function AB8(a,b,c){var d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hn=0;if(a.bT<=0)return 0;a.ch=1.5;if(a.dy<=a.oZ/2.0){a.tG=a.bT;a.dy=a.oZ;a.bT=a.bT-c|0;a.ER=10;a.dE=10;}else{if((a.tG-c|0)>=a.bT)return 0;a.bT=a.tG-c|0;}a.kE=0.0;if(b===null)a.kE=(BN()*2.0|0)*180|0;else{d=b.d-a.d;e=b.e-a.e;while(d*d+e*e<1.0E-4){d=(BN()-BN())*0.01;e=(BN()-BN())*0.01;}a.kE=CR(e,d)*180.0/3.1415927410125732-a.v;ABE(a,b,c,d,e);}if(a.bT>0){Dg(a.l,a,
a.vb(),1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);return 1;}Dg(a.l,a,a.uM(),1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);$p=1;case 1:a.FC(b);if(C()){break _;}return 1;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function A8w(a){return null;}
function AUE(a){return B(224);}
function AVz(a){return B(224);}
function ABE(a,b,c,d,e){var f,g,h;f=Cd(d*d+e*e);a.g=a.g/2.0;a.i=a.i/2.0;a.h=a.h/2.0;g=a.g;h=f;a.g=g-d/h*0.4000000059604645;a.i=a.i+0.4000000059604645;a.h=a.h-e/h*0.4000000059604645;if(a.i>0.4000000059604645)a.i=0.4000000059604645;}
function AN8(a,b){var c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.u0>0&&b!==null)b.BD(a,a.u0);a.Cn=1;c=a.mh();if(c>0){d=E(a.m,3);e=0;if(e<d){f=1;$p=1;continue _;}}return;case 1:ABZ(a,c,f);if(C()){break _;}e=e+1|0;if(e>=d)return;f=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ATI(a){return 0;}
function AP_(a,b){var c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Ki(b-3.0)|0;if(c<=0)return;d=null;$p=1;case 1:a.fr(d,c);if(C()){break _;}d=a.l;c=K(a.d);e=K(a.j-0.20000000298023224-a.c4);f=K(a.e);$p=2;case 2:$z=ACB(d,c,e,f);if(C()){break _;}e=$z;if(e>0){L();d=BeT.data[e].gK;Dg(a.l,a,Kk(d),d.oP*0.5,d.pN*0.75);}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ADy(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE$(a);if(C()){break _;}d=$z;if(!d){$p=2;continue _;}e=a.j;L6(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=3;continue _;case 2:$z=ACs(a);if(C()){break _;}d=$z;if(d){e=a.j;L6(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=4;continue _;}L6(a,b,c,!a.cx?0.019999999552965164:0.10000000149011612);$p=7;continue _;case 3:ARJ(a,
f,g,h);if(C()){break _;}a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=a.i-0.02;if(!a.jX){a.jT=a.ch;e=a.d-a.bS;f=a.e-a.bR;i=Cd(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ch=a.ch+(i-a.ch)*0.4000000059604645;a.gm=a.gm+a.ch;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=5;continue _;case 4:ARJ(a,f,g,h);if(C()){break _;}a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;a.i=a.i-0.02;if(!a.jX){a.jT=a.ch;e=a.d-a.bS;f=a.e-a.bR;i=Cd(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ch=a.ch+(i-a.ch)*0.4000000059604645;a.gm
=a.gm+a.ch;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=6;continue _;case 5:$z=AHj(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jT=a.ch;e=a.d-a.bS;f=a.e-a.bR;i=Cd(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ch=a.ch+(i-a.ch)*0.4000000059604645;a.gm=a.gm+a.ch;return;case 6:$z=AHj(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jT=a.ch;e=a.d-a.bS;f=a.e-a.bR;i=Cd(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ch=a.ch+(i-a.ch)*0.4000000059604645;a.gm=a.gm+a.ch;return;case 7:$z=AIl(a);if(C()){break _;}d=
$z;if(d){a.fI=0.0;if(a.i<(-0.15))a.i=(-0.15);}e=a.g;f=a.i;g=a.h;$p=8;case 8:ARJ(a,e,f,g);if(C()){break _;}if(!a.jX){a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jT=a.ch;e=a.d-a.bS;f=a.e-a.bR;i=Cd(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ch=a.ch+(i-a.ch)*0.4000000059604645;a.gm=a.gm+a.ch;return;}$p=9;case 9:$z=AIl(a);if(C()){break _;}d=$z;if(d)a.i=0.2;a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h
=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jT=a.ch;e=a.d-a.bS;f=a.e-a.bR;i=Cd(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ch=a.ch+(i-a.ch)*0.4000000059604645;a.gm=a.gm+a.ch;return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AIl(a){var b,c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.L.M);d=K(a.e);e=a.l;$p=1;case 1:$z=ACB(e,b,c,d);if(C()){break _;}f=$z;L();if(f==Bgg.b)return 1;e=a.l;c=c+1|0;$p=2;case 2:$z=ACB(e,b,c,d);if(C()){break _;}b=$z;return b==Bgg.b?1:0;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function H8(a){return !a.cR&&a.bT>0?1:0;}
function ACu(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hn=a.hn+1|0;b=a.l.bh;if(b!==null){c=b.d-a.d;d=b.j-a.j;e=b.e-a.e;f=c*c+d*d+e*e;if(f>16384.0){$p=2;continue _;}if(a.hn>600&&!E(a.m,800)){if(f>=1024.0){$p=7;continue _;}a.hn=0;}}if(a.bT>0){$p=1;continue _;}a.hI=0;a.iN=0.0;a.gD=0.0;a.kF=0.0;$p=3;continue _;case 1:a.wK();if(C())
{break _;}$p=3;continue _;case 2:Ca(a);if(C()){break _;}if(a.hn>600&&!E(a.m,800)){if(f>=1024.0){$p=7;continue _;}a.hn=0;}if(a.bT>0){$p=1;continue _;}a.hI=0;a.iN=0.0;a.gD=0.0;a.kF=0.0;$p=3;case 3:$z=AE$(a);if(C()){break _;}g=$z;$p=4;case 4:$z=ACs(a);if(C()){break _;}h=$z;if(a.hI){if(g)a.i=a.i+0.03999999910593033;else if(h)a.i=a.i+0.03999999910593033;else if(a.cx)AF_(a);}a.iN=a.iN*0.9800000190734863;a.gD=a.gD*0.9800000190734863;a.kF=a.kF*0.8999999761581421;i=a.iN;j=a.gD;$p=5;case 5:ADy(a,i,j);if(C()){break _;}k
=a.l;l=Du(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADO(k,a,l);if(C()){break _;}k=$z;if(k!==null&&k.s>0){m=0;while(true){if(m>=k.s)break a;l=Z(k,m);if(l.rQ())l.uZ(a);m=m+1|0;}}}return;case 7:Ca(a);if(C()){break _;}if(a.bT>0){$p=1;continue _;}a.hI=0;a.iN=0.0;a.gD=0.0;a.kF=0.0;$p=3;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AF_(a){a.i=0.41999998688697815;}
function AQT(a){var b,c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(N(a.m)<0.07000000029802322){a.iN=(N(a.m)-0.5)*a.sZ;a.gD=N(a.m)*a.sZ;}a.hI=N(a.m)>=0.009999999776482582?0:1;if(N(a.m)<0.03999999910593033)a.kF=(N(a.m)-0.5)*60.0;a.v=a.v+a.kF;a.J=a.zR;$p=1;case 1:$z=AE$(a);if(C()){break _;}b=$z;$p=2;case 2:$z=ACs(a);if(C()){break _;}c=$z;if(!(!b&&!c))a.hI=N(a.m)>=0.800000011920929?0:1;return;default:Fa();}}C3().s(a,b,c,$p);}
function A4P(a){return;}
function Zz(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CT(a,b,c+a.eO/2.0,d);e=a.l;f=a.L;$p=1;case 1:$z=AM_(e,f);if(C()){break _;}g=$z;if(!g)return 0;e=a.l;f=a.L;$p=2;case 2:$z=X0(e,a,f);if(C()){break _;}e=$z;if(e.s)return 0;e=a.l;f=a.L;$p=3;case 3:$z=AJo(e,f);if(C()){break _;}g=$z;return g?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABO(a){var b,c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=null;c=4;$p=1;case 1:a.fr(b,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,$p);}
function IY(){var a=this;ER.call(a);a.dS=null;a.de=null;a.ho=0;}
function AKk(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.l;d=BW(a.d,a.j+AQt(a),a.e);b=BW(b.d,b.j+b.rI(),b.e);$p=1;case 1:$z=AJq(c,d,b);if(C()){break _;}b=$z;return b!==null?0:1;default:Fa();}}C3().s(a,b,c,d,$p);}
function APR(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.ho=0;b=16.0;if(a.de===null){$p=1;continue _;}if(H8(a.de)){c=AR9(a.de,a);d=a.de;$p=2;continue _;}a.de=null;a:{if(!a.ho&&a.de!==null){if(a.dS===null)break a;if
(!E(a.m,20))break a;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 1:$z=a.x1();if(C()){break _;}d=$z;a.de=d;if(a.de!==null){d=a.l;m=a.de;$p=3;continue _;}b:{if(!a.ho&&a.de!==null){if(a.dS===null)break b;if(!E(a.m,20))break b;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<
50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 2:$z=AKk(a,d);if(C()){break _;}e=$z;if(e){d=a.de;$p=4;continue _;}b:{if(!a.ho&&a.de!==null){if(a.dS===null)break b;if(!E(a.m,20))break b;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e
=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 3:$z=AR0(d,a,m,b);if(C()){break _;}d=$z;a.dS=d;c:{if(!a.ho&&a.de!==null){if(a.dS===null)break c;if(!E(a.m,20))break c;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 4:a.nO(d,c);if(C()){break _;}c:{if(!a.ho&&a.de!==null){if(a.dS===null)break c;if
(!E(a.m,20))break c;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 5:$z=AE$(a);if(C()){break _;}n=$z;$p=6;case 6:$z=ACs(a);if(C()){break _;}o=$z;if(a.dS!==null&&E(a.m,100)){d=Sy(a.dS,a);p=a.c1*2.0;q=p*p;r=e;while(d!==null&&AB2(d,a.d,a.j,a.e)<q&&d.z<=r){AP7(a.dS);if(!ANr(a.dS)){d=Sy(a.dS,a);continue;}d
=null;a.dS=null;}a.hI=0;if(d!==null){q=d.x-a.d;s=d.w-a.e;t=d.z-r;a.v=CR(s,q)*180.0/3.1415927410125732-90.0;a.gD=a.sZ;if(a.ho&&a.de!==null){u=a.de.d-a.d;r=a.de.e-a.e;v=a.v;a.v=CR(r,u)*180.0/3.1415927410125732-90.0;w=(v-a.v+90.0)*3.1415927410125732/180.0;a.iN= -Bq(w)*a.gD*1.0;a.gD=BC(w)*a.gD*1.0;}if(t!==0.0)a.hI=1;}if(N(a.m)<0.800000011920929&&!(!n&&!o))a.hI=1;return;}$p=9;continue _;case 7:$z=AR0(d,a,m,b);if(C()){break _;}d=$z;a.dS=d;e=K(a.L.M);$p=5;continue _;case 8:$z=a.sC(j,k,l);if(C()){break _;}x=$z;if(x
>h){h=x;e=j;f=k;g=l;}i=i+1|0;if(i>=50){if(e>0){d=a.l;$p=10;continue _;}e=K(a.L.M);$p=5;continue _;}j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);continue _;case 9:AQT(a);if(C()){break _;}a.dS=null;return;case 10:$z=AJA(d,a,e,f,g,b);if(C()){break _;}d=$z;a.dS=d;e=K(a.L.M);$p=5;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AMG(a,b,c){return;}
function AK4(a){return null;}
function ACT(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Zz(a,b,c,d);if(C()){break _;}e=$z;if(!e)return 0;e=b|0;f=c|0;g=d|0;$p=2;case 2:$z=a.sC(e,f,g);if(C()){break _;}h=$z;return h<0.0?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function DQ(){IY.call(this);this.Ft=0;}
function ADb(a){var b,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADL(a,b);if(C()){break _;}b=$z;if(b>0.5)a.hn=a.hn+2|0;$p=2;case 2:ACu(a);if(C()){break _;}return;default:Fa();}}C3().s(a,b,$p);}
function ALb(a){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMx(a);if(C()){break _;}if(a.l.i2)return;$p=2;case 2:Ca(a);if(C()){break _;}return;default:Fa();}}C3().s(a,$p);}
function AKt(a){var b,c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(LG(a.l.bh,a)>=256.0)return null;b=a.l.bh;$p=1;case 1:$z=AKk(a,b);if(C()){break _;}c=$z;return !c?null:a.l.bh;default:Fa();}}C3().s(a,b,c,$p);}
function AAP(a,b,c){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB8(a,b,c);if(C()){break _;}c=$z;if(!c)return 0;if(b!==a)a.de=b;return 1;default:Fa();}}C3().s(a,b,c,$p);}
function AQ1(a,b,c){var d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<2.5&&b.L.U>a.L.M&&b.L.M<a.L.U){a.dz=20;d=a.Ft;$p=1;continue _;}return;case 1:b.fr(a,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function ABD(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0.5;f=a.l;$p=1;case 1:$z=ANm(f,b,c,d);if(C()){break _;}g=$z;return e-g;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function YF(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=XF(e,f,g,h);if(C()){break _;}f=$z;if(f>E(a.m,8))return 0;$p=2;case 2:$z=ACT(a,b,c,d);if(C()){break _;}f=$z;return !f?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function I$(){DQ.call(this);}
function AH6(a){var b,c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!RE(a.l)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:ADb(a);if(C()){break _;}return;case 2:$z=ADL(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.l;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGi(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.m)*30.0<(b-0.4000000059604645)*2.0)a.cV=300;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AWQ(a){BB();return Bgh.cW;}
function Jp(){DQ.call(this);}
function AIH(a){var b,c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!RE(a.l)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:ADb(a);if(C()){break _;}return;case 2:$z=ADL(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.l;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGi(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.m)*30.0<(b-0.4000000059604645)*2.0)a.cV=300;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AHZ(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<10.0){d=b.d-a.d;e=b.e-a.e;if(!a.dz){f=ATe(a.l,a);f.j=f.j+1.399999976158142;g=b.j-0.20000000298023224-f.j;h=Cd(d*d+e*e)*0.20000000298023224;Dg(a.l,a,B(225),1.0,1.0/(N(a.m)*0.4000000059604645+0.800000011920929));b=a.l;$p=1;continue _;}a.v=CR(e,d)*180.0/3.1415927410125732-90.0;a.ho=1;}return;case 1:AOl(b,f);if(C()){break _;}QI(f,
d,g+h,e,0.6000000238418579,12.0);a.dz=30;a.v=CR(e,d)*180.0/3.1415927410125732-90.0;a.ho=1;return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYT(a){BB();return Bgi.cW;}
function J1(){var a=this;DQ.call(a);a.jd=0;a.ut=0;a.Bh=0;a.jU=0;}
function ZV(a){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.ut=a.jd;if(a.jd>0&&a.jU<0)a.jd=a.jd-1|0;if(a.jU>=0)a.jU=2;$p=1;case 1:APR(a);if(C()){break _;}if(a.jU!=1)a.jU=(-1);return;default:Fa();}}C3().s(a,$p);}
function AAR(a,b,c){var d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(a.jU<=0&&c<3.0)){if(a.jU<=0)break a;if(c>=7.0)break a;}if(!a.jd)Dg(a.l,a,B(226),1.0,0.5);a.jU=1;a.jd=a.jd+1|0;if(a.jd==a.Bh){b=a.l;d=a.d;e=a.j;f=a.e;c=3.0;$p=1;continue _;}a.ho=1;}return;case 1:Yf(b,a,d,e,f,c);if(C()){break _;}$p=2;case 2:Ca(a);if(C()){break _;}a.ho=1;return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function Qr(a,b){return (a.ut+(a.jd-a.ut|0)*b)/(a.Bh-2|0);}
function ASZ(a){BB();return Bgj.cW;}
function Kq(){DQ.call(this);}
function ARv(a){var b,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADL(a,b);if(C()){break _;}b=$z;if(b<0.5&&LG(a.l.bh,a)<256.0)return a.l.bh;return null;default:Fa();}}C3().s(a,b,$p);}
function Zs(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0;$p=1;case 1:a:{$z=ADL(a,d);if(C()){break _;}d=$z;if(d>0.5&&!E(a.m,100))a.de=null;else{if(c<=2.0)break a;if(c>=6.0)break a;if(E(a.m,10))break a;if(a.cx){e=b.d-a.d;f=b.e-a.e;g=Cd(e*e+f*f);a.g=e/g*0.5*0.800000011920929+a.g*0.20000000298023224;a.h=f/g*0.5*0.800000011920929+a.h*0.20000000298023224;a.i=0.4000000059604645;}}return;}$p=2;case 2:AQ1(a,
b,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZS(a){BB();return Bgk.cW;}
function GB(){IY.call(this);}
function AOD(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=c-1|0;$p=1;case 1:$z=ACB(e,b,f,d);if(C()){break _;}g=$z;L();if(g==BeV.b)return 10.0;e=a.l;$p=2;case 2:$z=ANm(e,b,c,d);if(C()){break _;}h=$z;return h-0.5;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AK$(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=XF(e,f,g,h);if(C()){break _;}g=$z;if(g<=8)return 0;$p=2;case 2:$z=ACT(a,b,c,d);if(C()){break _;}g=$z;return !g?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function KJ(){GB.call(this);this.x5=0;}
function AGZ(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.x5&&b instanceof ER){a.x5=1;d=1+E(a.m,3)|0;e=0;if(e<d){L();f=Bfh.b;g=1;h=1.0;$p=2;continue _;}}$p=1;case 1:$z=AB8(a,b,c);if(C()){break _;}c=$z;return c;case 2:$z=AGK(a,f,g,h);if(C()){break _;}i=$z;i.i=i.i+N(a.m)*0.05000000074505806;i.g=i.g+(N(a.m)-N(a.m))*0.10000000149011612;i.h=i.h+(N(a.m)-N(a.m))*0.10000000149011612;e
=e+1|0;if(e>=d){$p=1;continue _;}L();f=Bfh.b;g=1;h=1.0;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A67(a){return B(227);}
function A4l(a){return B(227);}
function AYr(a){return B(227);}
function IE(){GB.call(this);this.qy=0;}
function ATE(a){return B(228);}
function A9y(a){return B(228);}
function AV_(a){return B(229);}
function AXY(a,b){if(!a.qy)return 0;Pn(b,a);return 1;}
function AWj(a){BB();return Bgl.cW;}
function DA(){var a=this;D.call(a);a.AD=0.0;a.w3=0;}
function Bbp(){var a=new DA();A3i(a);return a;}
function BbE(a){var b=new DA();AVO(b,a);return b;}
function A3i(a){return;}
function AVO(a,b){return;}
function NP(a,b){return;}
function AGb(a,b){if(b==32)return Cj(a)*4.294967295E9+(-2.147483648E9)|0;return Cj(a)*Long_toNumber(Long_shl(Long_fromInt(1),CA(32,b)))|0;}
function Lr(a){return AGb(a,32);}
function E(a,b){return Cj(a)*b|0;}
function GA(a){return Long_or(Long_shl(Long_fromInt(Lr(a)),32),Long_fromInt(Lr(a)));}
function N(a){return Cj(a);}
function Cj(a){return Math.random();}
function CZ(a){var b,c,d,e;if(a.w3){a.w3=0;return a.AD;}while(true){while(true){b=2.0*Cj(a)-1.0;c=2.0*Cj(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=Ed((-2.0)*A3Y(d)/d);a.AD=c*e;a.w3=1;return b*e;}
function NG(){D.call(this);}
var Bgm=null;var Bgn=null;function Bgo(){var a=new NG();AIr(a);return a;}
function AIr(a){return;}
function I3(b){var c,d,e,f,g,h;Ba6(F(NG));try{BV();c=Bgp+1|0;d=0;while(d<b){e=Bgp+1|0;Bgp=e;f=Bgq;g=CY(e);h=new Rx;h.By=e;h.ri=null;h.o0=null;h.lM=(-1);h.jK=0;BP(f,g,h);d=d+1|0;}S(Bgm,CY(c));S(Bgm,CY(b));return c;}finally{BcX(F(NG));}}
function W0(b){var c,d,e,f,g;Ba6(F(NG));try{c=b.bj;while(c<b.cy){BV();d=Bgr;Bb();e=new Pg;f=BdM.createTexture();e.Io=(-1);e.Il=(-1);e.Go=1;e.Hg=0;e.BQ=f;g=S9(d,e);AQ6(b,c,g);S(Bgn,CY(g));c=c+1|0;}}finally{BcX(F(NG));}}
function WU(b){var c;c=AAx($rt_createByteArray(b));c.kK=Bgs;return c;}
function Rl(b){return ALW($rt_createIntArray(b));}
function H4(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new WT;f=0+d|0;KR(e,d);e.bj=0;e.cy=f;e.yn=0;e.xw=0;e.xp=c;return e;}
function AL1(){Bgm=Cg();Bgn=Cg();}
function Pf(){var a=this;D.call(a);a.cP=null;a.eT=null;a.ja=0.0;a.q_=0.0;a.iz=0;a.jO=0;a.Ab=null;}
function AC1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.q_+(a.ja-a.q_)*b;d=a.cP.f;B1();Bv(d.T+(d.J-d.T)*b,1.0,0.0,0.0);Bv(d.P+(d.v-d.P)*b,0.0,1.0,0.0);Hy();BD();e=a.cP.B;f=
K(d.d);g=K(d.j);h=K(d.e);$p=1;case 1:$z=ANm(e,f,g,h);if(C()){break _;}i=$z;BS(i,i,i,1.0);if(a.eT===null){B1();if(a.jO){j=(a.iz+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(D_(j)*3.1415927410125732)*0.30000001192092896,Bq(D_(j)*3.1415927410125732*2.0)*0.4000000059604645, -k*0.4000000059604645);}Bw(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Ba(32826);if(a.jO){j=(a.iz+b)/8.0;k=Bq(j*j*3.1415927410125732);Bv(Bq(D_(j)*3.1415927410125732)*70.0,0.0,1.0,
0.0);Bv( -k*20.0,0.0,0.0,1.0);}f=3553;d=a.cP.bo;e=a.cP.f.tK;l=PR(a.cP.f);$p=2;continue _;}B1();if(a.jO){j=(a.iz+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(D_(j)*3.1415927410125732)*0.4000000059604645,Bq(D_(j)*3.1415927410125732*2.0)*0.20000000298023224, -k*0.20000000298023224);}Bw(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Ba(32826);if(a.jO){j=(a.iz+b)/8.0;k=Bq(j*j*3.1415927410125732);m=Bq(D_(j)*3.1415927410125732);Bv( -k*20.0,0.0,1.0,0.0);b
= -m;Bv(b*20.0,0.0,0.0,1.0);Bv(b*80.0,1.0,0.0,0.0);}CB(0.4000000059604645,0.4000000059604645,0.4000000059604645);if(a.eT.bB<256){L();if(!BeT.data[a.eT.bB].el()){f=3553;d=a.cP.bo;e=B(179);$p=5;continue _;}}if(a.eT.bB>=256){f=3553;d=a.cP.bo;e=B(230);$p=3;continue _;}f=3553;d=a.cP.bo;e=B(179);$p=4;continue _;case 2:$z=AD7(d,e,l);if(C()){break _;}g=$z;Cn(f,g);Bw((-1.0),3.5999999046325684,3.5);Bv(120.0,0.0,0.0,1.0);Bv(200.0,1.0,0.0,0.0);Bv((-135.0),0.0,1.0,0.0);CB(1.0,1.0,1.0);Bw(5.599999904632568,0.0,0.0);n=Sh(Bgt,
a.cP.f);CB(1.0,1.0,1.0);ALD(n);BD();Bd(32826);DT();return;case 3:$z=AHy(d,e);if(C()){break _;}g=$z;Cn(f,g);BA();e=BeP;m=(((DK(a.eT)%16|0)*16|0)+0|0)/256.0;o=(((DK(a.eT)%16|0)*16|0)+16|0)/256.0;p=(((DK(a.eT)/16|0)*16|0)+0|0)/256.0;q=(((DK(a.eT)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bw(-0.0,(-0.30000001192092896),0.0);CB(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Dc(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,
1.0,0.0,r,u);Br(e);Bz(e);Dc(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),t,s);G(e,0.0,0.0,(-0.0625),r,s);Br(e);Bz(e);Dc(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Br(e);Bz(e);Dc(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,
(-0.0625),y,s);f=f+1|0;}Br(e);Bz(e);Dc(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Br(e);Bz(e);Dc(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Br(e);Bd(32826);BD();Bd(32826);DT();return;case 4:$z=AHy(d,e);if(C()){break _;}g=$z;Cn(f,g);BA();e=
BeP;m=(((DK(a.eT)%16|0)*16|0)+0|0)/256.0;o=(((DK(a.eT)%16|0)*16|0)+16|0)/256.0;p=(((DK(a.eT)/16|0)*16|0)+0|0)/256.0;q=(((DK(a.eT)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bw(-0.0,(-0.30000001192092896),0.0);CB(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Dc(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,1.0,0.0,r,u);Br(e);Bz(e);Dc(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),
t,s);G(e,0.0,0.0,(-0.0625),r,s);Br(e);Bz(e);Dc(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Br(e);Bz(e);Dc(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Br(e);Bz(e);Dc(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba
=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Br(e);Bz(e);Dc(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Br(e);Bd(32826);BD();Bd(32826);DT();return;case 5:$z=AHy(d,e);if(C()){break _;}g=$z;Cn(f,g);GY(a.Ab,BeT.data[a.eT.bB]);BD();Bd(32826);DT();return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,
$p);}
function ACd(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bd(3008);if(a.cP.f.cV<=0){c=a.cP.B.bh;$p=1;continue _;}c=a.cP.bo;d=B(179);$p=2;continue _;case 1:$z=AHD(c);if(C()){break _;}e=$z;if(!e){d=a.cP.f;c=BfV;$p=3;continue _;}e=K(a.cP.f.d);f=K(a.cP.f.j);g=K(a.cP.f.e);c
=a.cP.bo;d=B(179);$p=4;continue _;case 2:$z=AHy(c,d);if(C()){break _;}e=$z;Cn(3553,e);BA();c=BeP;BS(1.0,1.0,1.0,0.8999999761581421);Ba(3042);De(770,771);e=0;while(e<2){B1();L();f=Bgu.ba+(e*16|0)|0;g=(f&15)<<4;f=f&240;h=g;i=h/256.0;h=(h+15.989999771118164)/256.0;j=f;k=j/256.0;j=(j+15.989999771118164)/256.0;f=(e*2|0)-1|0;Bw( -f*0.23999999463558197,(-0.30000001192092896),0.0);Bv(f*10.0,0.0,1.0,0.0);Bz(c);l=h;m=j;G(c,(-0.5),(-0.5),(-0.5),l,m);n=i;G(c,0.5,(-0.5),(-0.5),n,m);m=k;G(c,0.5,0.5,(-0.5),n,m);G(c,(-0.5),
0.5,(-0.5),l,m);Br(c);BD();e=e+1|0;}BS(1.0,1.0,1.0,1.0);Bd(3042);c=a.cP.B.bh;$p=1;continue _;case 3:$z=AGL(d,c);if(C()){break _;}e=$z;if(!e){Ba(3008);return;}c=a.cP.bo;d=B(231);$p=6;continue _;case 4:$z=AHy(c,d);if(C()){break _;}o=$z;Cn(3553,o);c=a.cP.B;$p=5;case 5:$z=ACB(c,e,f,g);if(C()){break _;}p=$z;L();if(BeT.data[p]===null){d=a.cP.f;c=BfV;$p=3;continue _;}e=BeT.data[p].cj(2);BA();c=BeP;d=a.cP.f;$p=8;continue _;case 6:$z=AHy(c,d);if(C()){break _;}e=$z;Cn(3553,e);BA();c=BeP;d=a.cP.f;$p=7;case 7:$z=ADL(d,
b);if(C()){break _;}h=$z;BS(h,h,h,0.5);Ba(3042);De(770,771);B1();h= -a.cP.f.v/64.0;i=a.cP.f.J/64.0;Bz(c);q=4.0+h;l=4.0+i;G(c,(-1.0),(-1.0),(-0.5),q,l);r=0.0+h;G(c,1.0,(-1.0),(-0.5),r,l);l=0.0+i;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Br(c);BD();BS(1.0,1.0,1.0,1.0);Bd(3042);Ba(3008);return;case 8:ADL(d,b);if(C()){break _;}BS(0.10000000149011612,0.10000000149011612,0.10000000149011612,0.5);B1();i=e%16|0;j=i/256.0-0.0078125;i=(i+15.989999771118164)/256.0+0.0078125;k=e/16|0;s=k/256.0-0.0078125;h=(k+15.989999771118164)
/256.0+0.0078125;Bz(c);q=i;l=h;G(c,(-1.0),(-1.0),(-0.5),q,l);r=j;G(c,1.0,(-1.0),(-0.5),r,l);l=s;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Br(c);BD();BS(1.0,1.0,1.0,1.0);d=a.cP.f;c=BfV;$p=3;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AJe(a){var b,c,d,e;a.q_=a.ja;if(a.jO){a.iz=a.iz+1|0;if(a.iz==8){a.iz=0;a.jO=0;}}b=D9(a.cP.f.K);c=0.4000000059604645;d=(b!==a.eT?0.0:1.0)-a.ja;e=(-0.4000000059604645);if(d>=e)e=d;if(e<=c)c=e;a.ja=a.ja+c;if(a.ja<0.10000000149011612)a.eT=b;}
function AGP(a){a.ja=0.0;}
function Pp(a){a.iz=(-1);a.jO=1;}
function ANb(a){a.ja=0.0;}
function P(){var a=this;D.call(a);a.ba=0;a.b=0;a.qe=0.0;a.nP=0.0;a.da=0.0;a.cM=0.0;a.c_=0.0;a.dc=0.0;a.cF=0.0;a.dd=0.0;a.gK=null;a.EB=0.0;a.b_=null;}
var Bgv=null;var Bgw=null;var Bgx=null;var Bgy=null;var Bgz=null;var BgA=null;var BgB=null;var BgC=null;var BgD=null;var BeT=null;var BgE=null;var BgF=null;var BgG=null;var BgH=null;var BgI=null;var BeZ=null;var BeV=null;var BeW=null;var Be3=null;var Be5=null;var Be_=null;var BeU=null;var Bf3=null;var BgJ=null;var Bf4=null;var BgK=null;var Bfe=null;var Bff=null;var Bfk=null;var Bfj=null;var Bfi=null;var Be6=null;var Be7=null;var Bfg=null;var Be9=null;var BgL=null;var BgM=null;var BgN=null;var BgO=null;var BgP
=null;var BgQ=null;var BgR=null;var BgS=null;var BgT=null;var BgU=null;var BgV=null;var BgW=null;var BgX=null;var BgY=null;var Bfh=null;var BgZ=null;var Bfa=null;var Bfb=null;var Bfc=null;var Bfd=null;var Bfm=null;var Bfl=null;var BeX=null;var BeY=null;var Be4=null;var Bfo=null;var Bfn=null;var Be$=null;var Bfp=null;var Be8=null;var Bgu=null;var Bg0=null;var Bg1=null;var Bg2=null;var Bg3=null;var Bg4=null;var Bg5=null;var Bg6=null;var Bg7=null;var Bg8=null;var Bg9=null;var Bg$=null;var Bg_=null;var Bha=null;var Bgg
=null;var Bhb=null;var Bhc=null;function L(){L=Bt(P);AVl();}
function Bhd(a,b){var c=new P();D1(c,a,b);return c;}
function KB(a,b,c){var d=new P();C8(d,a,b,c);return d;}
function D1(a,b,c){var d,e,f;L();a.gK=Bgv;a.EB=1.0;if(BeT.data[b]!==null){c=new Cb;d=new T;V(d);Bl(c,U(FN(J(FN(J(Bf(J(d,B(232)),b),B(233)),BeT.data[b]),B(234)),a)));M(c);}a.b_=c;BeT.data[b]=a;a.b=b;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);BgF.data[b]=a.d4();e=BgG;f=!a.d4()?0:255;e.data[b]=f;BgH.data[b]=0;}
function C8(a,b,c,d){L();D1(a,b,d);a.ba=c;}
function BK(a,b){a.gK=b;return a;}
function Gx(a,b){BgG.data[a.b]=b;return a;}
function GK(a,b){BgI.data[a.b]=15.0*b|0;return a;}
function Dm(a,b){a.nP=b*3.0;return a;}
function A86(a){return 1;}
function AWJ(a){return 0;}
function BG(a,b){var c;a.qe=b;c=a.nP;b=b*5.0;if(c<b)a.nP=b;return a;}
function Fg(a,b){BgE.data[a.b]=b;}
function Bo(a,b,c,d,e,f,g){a.da=b;a.cM=c;a.c_=d;a.dc=e;a.cF=f;a.dd=g;}
function AFd(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sN(c,d,e);if(C()){break _;}f=$z;return f;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AGz(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!f&&a.cM>0.0)c=1;else if(f==1&&a.cF<1.0)c=1;else if(f==2&&a.c_>0.0)c=1;else if(f==3&&a.dd<1.0)c=1;else if(f==4&&a.da>0.0)c=1;else{if(f!=5)break a;if(a.dc>=1.0)break a;c=1;}return c;}$p=1;case 1:$z=b.le(c,d,e);if(C()){break _;}c=$z;return c?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AB5(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eH(c,d,e);if(C()){break _;}c=$z;return a.eY(f,c);default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function A7k(a,b,c){return a.cj(b);}
function AVJ(a,b){return a.ba;}
function K9(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.da;h=d;i=h+a.cM;j=e;return D4(g,i,j+a.c_,f+a.dc,h+a.cF,j+a.dd);}
function ALC(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.hw(b,c,d,e);if(C()){break _;}h=$z;if(h!==null&&L9(f,h))S(g,h);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Np(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.da;h=d;i=h+a.cM;j=e;return D4(g,i,j+a.c_,f+a.dc,h+a.cF,j+a.dd);}
function A5o(a){return 1;}
function A6x(a,b,c){return a.pf();}
function A3S(a){return 1;}
function AHV(a,b,c,d,e,f){return;}
function APh(a,b,c,d,e,f){return;}
function AAc(a,b,c,d,e,f){return;}
function YV(a,b,c,d,e,f){return;}
function A32(a){return 10;}
function ABc(a,b,c,d,e){return;}
function Z9(a,b,c,d,e){return;}
function AYu(a,b){return 1;}
function ATV(a,b,c){return a.b;}
function ABk(a,b){var c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qe<0.0)c=0.0;else{if(Na(b,a)){$p=1;continue _;}c=1.0/a.qe/100.0;}return c;case 1:$z=AKW(b,a);if(C()){break _;}c=$z;return c/a.qe/30.0;default:Fa();}}C3().s(a,b,c,$p);}
function Yn(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=1.0;$p=1;case 1:a.HU(b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AE2(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.eG(b.q);i=0;j=0.15000000596046448;k=c;l=d;m=e;while(i<h){if(N(b.q)<=g){n=a.dW(f,b.q);if(n>0){o=Hf(b,k+N(b.q)*0.699999988079071+j,l+N(b.q)*0.699999988079071+j,m+N(b.q)*0.699999988079071+j,KC(n,1));o.hb=10;$p=1;continue _;}}i=i+1|0;}return;case 1:AOl(b,
o);if(C()){break _;}while(true){i=i+1|0;if(i>=h)break;if(N(b.q)>g)continue;n=a.dW(f,b.q);if(n<=0)continue;else{o=Hf(b,k+N(b.q)*0.699999988079071+j,l+N(b.q)*0.699999988079071+j,m+N(b.q)*0.699999988079071+j,KC(n,1));o.hb=10;continue _;}}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AZ7(a,b){return a.nP/5.0;}
function Ke(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;h= -c;i= -d;j= -e;b=Dj(f,h,i,j);f=Dj(g,h,i,j);k=KP(b,f,a.da);l=KP(b,f,a.dc);m=JY(b,f,a.cM);n=JY(b,f,a.cF);o=Kz(b,f,a.c_);p=Kz(b,f,a.dd);if(!RB(a,k))k=null;if(!RB(a,l))l=null;if(!Xy(a,m))m=null;if(!Xy(a,n))n=null;if(!RT(a,o))o=null;if(!RT(a,p))p=null;q=null;if(k!==null)q=k;if(l!==null&&!(q!==null&&DI(b,l)>=DI(b,q)))q=l;if(m!==null&&!(q!==null&&DI(b,m)>=DI(b,q)))q=m;if(n!==null&&!(q!==null&&DI(b,n)>=DI(b,q)))q=n;if(o!==null&&!(q!==null&&DI(b,o)>=DI(b,q)))q=
o;if(p!==null&&!(q!==null&&DI(b,p)>=DI(b,q)))q=p;if(q===null)return null;r=(-1);if(q===k)r=4;if(q===l)r=5;if(q===m)r=0;if(q===n)r=1;if(q===o)r=2;if(q===p)r=3;return A0G(c,d,e,r,Dj(q,c,d,e));}
function RB(a,b){return b===null?0:b.z>=a.cM&&b.z<=a.cF&&b.w>=a.c_&&b.w<=a.dd?1:0;}
function Xy(a,b){return b===null?0:b.x>=a.da&&b.x<=a.dc&&b.w>=a.c_&&b.w<=a.dd?1:0;}
function RT(a,b){return b===null?0:b.x>=a.da&&b.x<=a.dc&&b.z>=a.cM&&b.z<=a.cF?1:0;}
function AQ5(a,b,c,d,e){return;}
function AVp(a){return 0;}
function AEJ(a,b,c,d,e){return 1;}
function AGN(a,b,c,d,e,f){return 0;}
function AJP(a,b,c,d,e,f){return;}
function YN(a,b,c,d,e,f){return;}
function AAj(a,b,c,d,e,f){return;}
function AF$(a,b,c,d,e,f,g){return;}
function AP1(a,b,c,d,e){return;}
function A9o(a,b,c,d,e){return 16777215;}
function AVl(){var b,c;Bgv=Ik(B(235),1.0,1.0);Bgw=Ik(B(236),1.0,1.0);Bgx=Ik(B(237),1.0,1.0);Bgy=Ik(B(238),1.0,1.0);Bgz=Ik(B(235),1.0,1.0);BgA=Ik(B(235),1.0,1.5);BgB=A_6(B(235),1.0,1.0);BgC=Ik(B(239),1.0,1.0);BgD=Bce(B(240),1.0,1.0);BeT=I(P,256);BgE=$rt_createBooleanArray(256);BgF=$rt_createBooleanArray(256);BgG=$rt_createIntArray(256);BgH=$rt_createBooleanArray(256);BgI=$rt_createIntArray(256);BeZ=BK(Dm(BG(Bbj(1,1),1.5),10.0),Bgz);BeV=BK(BG(BbM(2),0.6000000238418579),Bgy);BeW=BK(BG(A__(3,2),0.5),Bgx);Be3=BK(Dm(BG(KB(4,
16,Bhe),2.0),10.0),Bgz);Be5=BK(Dm(BG(KB(5,4,Bhf),2.0),5.0),Bgw);Be_=BK(BG(Bcy(6,15),0.0),Bgy);BeU=BK(Dm(BG(KB(7,17,Bhe),(-1.0)),6000000.0),Bgz);Bf3=Gx(BG(AUo(8,BfV),100.0),3);BgJ=Gx(BG(AXM(9,BfV),100.0),3);Bf4=Gx(GK(BG(AUo(10,BfW),0.0),1.0),255);BgK=Gx(GK(BG(AXM(11,BfW),100.0),1.0),255);Bfe=BK(BG(BbH(12,18),0.5),BgD);Bff=BK(BG(BbQ(13,19),0.6000000238418579),Bgx);Bfk=BK(Dm(BG(SR(14,32),3.0),5.0),Bgz);Bfj=BK(Dm(BG(SR(15,33),3.0),5.0),Bgz);Bfi=BK(Dm(BG(SR(16,34),3.0),5.0),Bgz);Be6=BK(BG(BcS(17),2.0),Bgw);Be7=BK(Gx(BG(BaM(18,
52),0.20000000298023224),1),Bgy);Bfg=BK(BG(Bbc(19),0.6000000238418579),Bgy);Be9=BK(BG(Ba$(20,49,Bhg,0),0.30000001192092896),BgB);BgL=null;BgM=null;BgN=null;BgO=null;BgP=null;BgQ=null;BgR=null;BgS=null;BgT=null;BgU=null;BgV=null;BgW=null;BgX=null;BgY=null;Bfh=BK(BG(KB(35,64,Bhh),0.800000011920929),BgC);BgZ=null;Bfa=BK(BG(A3p(37,13),0.0),Bgy);Bfb=BK(BG(A3p(38,12),0.0),Bgy);Bfc=GK(BK(BG(ATT(39,29),0.0),Bgy),0.125);Bfd=BK(BG(ATT(40,28),0.0),Bgy);Bfm=BK(Dm(BG(AEF(41,39),3.0),10.0),BgA);Bfl=BK(Dm(BG(AEF(42,38),5.0),
10.0),BgA);BeX=BK(Dm(BG(A9r(43,1),2.0),10.0),Bgz);BeY=BK(Dm(BG(A9r(44,0),2.0),10.0),Bgz);Be4=BK(Dm(BG(KB(45,7,Bhe),2.0),10.0),Bgz);Bfo=BK(BG(BaN(46,8),0.0),Bgy);Bfn=BK(BG(Bao(47,35),1.5),Bgw);Be$=BK(Dm(BG(KB(48,36,Bhe),2.0),10.0),Bgz);Bfp=BK(Dm(BG(Bbt(49,37),10.0),20.0),Bgz);Be8=BK(GK(BG(Bbf(50,80),0.0),0.9375),Bgw);Bgu=BK(GK(BG(BcY(51,31),0.0),1.0),Bgw);Bg0=BK(BG(BcO(52,65),5.0),BgA);Bg1=A$S(53,Be5);Bg2=BK(BG(Bab(54),2.5),Bgw);Bg3=BK(BG(BbS(55,62),0.5),BgA);Bg4=BK(Dm(BG(SR(56,50),3.0),5.0),Bgz);Bg5=BK(Dm(BG(AEF(57,
40),5.0),10.0),BgA);Bg6=BK(BG(Bbw(58),2.5),Bgw);Bg7=BK(BG(BcB(59,88),0.0),Bgy);Bg8=BK(BG(Bb4(60),0.6000000238418579),Bgx);Bg9=BK(BG(A4Q(61,0),3.5),Bgz);Bg$=GK(BK(BG(A4Q(62,1),3.5),Bgz),0.875);b=new VA;BB();AHx(b,63,F(Jk),Bhi.cW);Bg_=BK(BG(b,1.0),Bgw);Bha=BK(BG(Bai(64),3.0),Bgw);Bgg=BK(BG(Bcq(65,83),0.4000000059604645),Bgw);Bhb=BK(BG(Ba4(66,128),1.0),BgA);Bhc=A$S(67,Be3);c=0;while(c<256){if(BeT.data[c]!==null)Bhj.data[c]=Baa(c-256|0);c=c+1|0;}}
function RH(){}
function AJk(){var a=this;Gg.call(a);a.d9=null;a.s=0;}
function Cg(){var a=new AJk();AWc(a);return a;}
function AWc(a){a.d9=I(D,10);}
function TA(a,b){var c;if(a.d9.data.length<b){c=a.d9.data.length>=1073741823?2147483647:DE(b,DE(a.d9.data.length*2|0,5));a.d9=Nv(a.d9,c);}}
function Z(a,b){K_(a,b);return a.d9.data[b];}
function CX(a){return a.s;}
function Rg(a,b,c){var d;K_(a,b);d=a.d9.data[b];a.d9.data[b]=c;return d;}
function S(a,b){var c,d;TA(a,a.s+1|0);c=a.d9.data;d=a.s;a.s=d+1|0;c[d]=b;a.d6=a.d6+1|0;return 1;}
function AMO(a,b,c){var d;if(b>=0&&b<=a.s){TA(a,a.s+1|0);d=a.s;while(d>b){a.d9.data[d]=a.d9.data[d-1|0];d=d+(-1)|0;}a.d9.data[b]=c;a.s=a.s+1|0;a.d6=a.d6+1|0;return;}c=new BM;O(c);M(c);}
function En(a,b){var c,d,e,f;K_(a,b);c=a.d9.data[b];a.s=a.s-1|0;while(b<a.s){d=a.d9.data;e=a.d9.data;f=b+1|0;d[b]=e[f];b=f;}a.d9.data[a.s]=null;a.d6=a.d6+1|0;return c;}
function H_(a,b){var c;c=ABg(a,b);if(c<0)return 0;En(a,c);return 1;}
function Dx(a){ZK(a.d9,0,a.s,null);a.s=0;}
function K_(a,b){var c;if(b>=0&&b<a.s)return;c=new BM;O(c);M(c);}
function DH(){}
function TO(){D.call(this);this.AN=null;}
function AQH(a){CM(a.AN,SX(0,1,null,null));}
function AWs(a){AQH(a);}
function TN(){var a=this;D.call(a);a.Ev=null;a.EP=null;}
function AQD(a){CM(a.Ev,SX(0,0,null,a.EP.result));}
function AS$(a){AQD(a);}
function TM(){D.call(this);this.DB=null;}
function ASj(a){CM(a.DB,SX(1,0,B(241),null));}
function AZr(a){ASj(a);}
function TL(){D.call(this);this.Br=null;}
function AKc(a,b){var c,d,e,f,g,h,i;c=a.Br.result;d=A93();e=I(B2,1).data;e[0]=B(242);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function ANN(a,b){AKc(a,b);}
function A6N(a,b){ANN(a,b);}
function SG(){D.call(this);}
var Bga=null;function Bhk(){var a=new SG();ZT(a);return a;}
function ZT(a){return;}
function AFt(){Bga=Dd();BP(Bga,B(24),A1L());}
function Cb(){B6.call(this);}
function Bhl(){var a=new Cb();AUd(a);return a;}
function AUd(a){O(a);}
function Vl(){Cb.call(this);this.Ix=null;}
function EF(){B6.call(this);}
function Bc6(){var a=new EF();AUP(a);return a;}
function AUP(a){O(a);}
function ABd(){D.call(this);}
function Bhm(){var a=new ABd();AY$(a);return a;}
function AY$(a){return;}
function Fm(){var a=this;D.call(a);a.mD=0;a.bj=0;a.cy=0;a.ls=0;}
function Bhn(a){var b=new Fm();KR(b,a);return b;}
function KR(a,b){a.ls=(-1);a.mD=b;a.cy=b;}
function AVF(a){return a.mD;}
function A8v(a){return a.bj;}
function EO(a,b){var c,d;if(b>=0&&b<=a.cy){a.bj=b;if(b<a.ls)a.ls=0;return a;}c=new Cb;d=new T;V(d);Bl(c,U(J(Bf(J(Bf(J(d,B(243)),b),B(244)),a.cy),B(245))));M(c);}
function A0_(a){return a.cy;}
function Nr(a,b){var c,d;if(b>=0&&b<=a.mD){if(a.ls>b)a.ls=(-1);a.cy=b;if(a.bj>a.cy)a.bj=a.cy;return a;}c=new Cb;d=new T;V(d);Bl(c,U(J(Bf(J(Bf(J(d,B(246)),b),B(244)),a.mD),B(245))));M(c);}
function EA(a){a.bj=0;a.cy=a.mD;a.ls=(-1);return a;}
function Gw(a){a.cy=a.bj;a.bj=0;a.ls=(-1);return a;}
function Cs(a){return a.cy-a.bj|0;}
function Fn(a){return a.bj>=a.cy?0:1;}
function L_(){Fm.call(this);}
function ADu(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BM;i=new T;V(i);Bl(h,U(Bf(J(Bf(J(i,B(247)),g),B(248)),f)));M(h);}if(Cs(a)<d){h=new Gt;O(h);M(h);}if(d<0){h=new BM;i=new T;V(i);Bl(h,U(J(Bf(J(i,B(249)),d),B(250))));M(h);}g=a.bj;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=RL(a,g);j=j+1|0;c=k;g=f;}a.bj=a.bj+d|0;return a;}}b=b.data;i=new BM;h=new T;V(h);Bl(i,U(J(Bf(J(Bf(J(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function VR(a,b){return ADu(a,b,0,b.data.length);}
function LW(a){EA(a);return a;}
function TS(a){Gw(a);return a;}
function Qf(a,b){Nr(a,b);return a;}
function AE8(){var a=this;D.call(a);a.F=null;a.cz=0;a.fq=0;a.dQ=0;}
function A8o(a){var b=new AE8();ATJ(b,a);return b;}
function Km(){var a=new AE8();ATg(a);return a;}
function ATJ(a,b){a.cz=(-1);a.fq=0;a.dQ=0;a.F=b;}
function ATg(a){a.cz=(-1);a.fq=0;a.dQ=0;}
function AMC(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cz=f;$p=1;case 1:AN5(a,b,c,d,e);if(C()){break _;}a.cz=(-1);return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AN5(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b.el();g=a.F;$p=1;case 1:b.xL(g,c,d,e);if(C()){break _;}if(!f){$p=2;continue _;}if(f==4){$p=3;continue _;}if(f==1){$p=4;continue _;}if(f==6){$p=5;continue _;}if(f==2){$p=6;continue _;}if(f==3){$p=7;continue _;}if(f==5){$p=8;continue _;}if(f==8){$p=9;continue _;}if(f==7){$p=10;continue _;}if(f==9){$p=11;continue _;}if(f==10){$p=12;continue _;}if
(f!=11)return 0;$p=13;continue _;case 2:$z=AB0(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 3:$z=AB$(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 4:$z=ABe(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 5:$z=ALP(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 6:$z=AN7(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 7:$z=ZY(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 8:$z=ADx(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 9:$z=AJD(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 10:$z=AKH(a,b,c,d,e);if(C())
{break _;}c=$z;return c;case 11:$z=ANc(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 12:$z=AIA(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 13:$z=AFM(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AN7(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.F;$p=1;case 1:$z=f.eH(c,d,e);if(C()){break _;}g=$z;BA();f=BeP;h=a.F;$p=2;case 2:$z=b.Cz(h,c,d,e);if(C()){break _;}i=$z;if(BgI.data[b.b]>0)i=1.0;Cp(f,i,i,i);if(g==1)GI(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if(g==2)GI(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,
0.0);else if(g==3)GI(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(g!=4)GI(a,b,c,d,e,0.0,0.0);else GI(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ZY(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:BA();f=BeP;g=b.cj(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cz(h,c,d,e);if(C()){break _;}i=$z;Cp(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=i+15.989999771118164;p=o/256.0;q=1.399999976158142;b=a.F;g=d-1|0;$p=2;case 2:$z=b.le(c,g,e);if(C()){break _;}j=$z;if(j){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,
m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,
t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}b=Bgu;h=a.F;$p=3;case 3:$z=AF4(b,h,c,g,e);if(C()){break _;}g=$z;if(g){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,
x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}bi=0.20000000298023224;bj=0.0625;if((((c+d|0)+e|0)&1)!=1){ba=l;bb=m;x=n;z=p;}else{x=(k+16|0)/256.0;z=(o
+16.0)/256.0;ba=l;bb=m;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){r=ba;ba=bb;bb=r;}b=Bgu;h=a.F;g=c-1|0;$p=4;case 4:$z=AF4(b,h,g,d,e);if(C()){break _;}g=$z;if(g){w=c+bi;s=d+q+bj;t=e+1|0;G(f,w,s,t,ba,x);u=c+0|0;v=(d+0|0)+bj;G(f,u,v,t,ba,z);r=e+0|0;G(f,u,v,r,bb,z);G(f,w,s,r,bb,x);G(f,w,s,r,bb,x);G(f,u,v,r,bb,z);G(f,u,v,t,ba,z);G(f,w,s,t,ba,x);}b=Bgu;h=a.F;j=c+1|0;$p=5;case 5:$z=AF4(b,h,j,d,e);if(C()){break _;}g=$z;if(g){r=j-bi;w=d+q+bj;s=e+0|0;G(f,r,w,s,bb,x);t=j-0|0;u=(d+0|0)+bj;G(f,t,u,s,bb,z);v=e+1|0;G(f,t,
u,v,ba,z);G(f,r,w,v,ba,x);G(f,r,w,v,ba,x);G(f,t,u,v,ba,z);G(f,t,u,s,bb,z);G(f,r,w,s,bb,x);}b=Bgu;h=a.F;g=e-1|0;$p=6;case 6:$z=AF4(b,h,c,d,g);if(C()){break _;}g=$z;if(g){r=c+0|0;w=d+q+bj;s=e+bi;G(f,r,w,s,ba,x);t=(d+0|0)+bj;u=e+0|0;G(f,r,t,u,ba,z);v=j;G(f,v,t,u,bb,z);G(f,v,w,s,bb,x);G(f,v,w,s,bb,x);G(f,v,t,u,bb,z);G(f,r,t,u,ba,z);G(f,r,w,s,ba,x);}b=Bgu;h=a.F;bk=e+1|0;$p=7;case 7:$z=AF4(b,h,c,d,bk);if(C()){break _;}g=$z;if(g){t=j;u=d+q+bj;v=bk-bi;G(f,t,u,v,bb,x);r=(d+0|0)+bj;w=bk-0|0;G(f,t,r,w,bb,z);s=c+0|0;G(f,
s,r,w,ba,z);G(f,s,u,v,ba,x);G(f,s,u,v,ba,x);G(f,s,r,w,ba,z);G(f,t,r,w,bb,z);G(f,t,u,v,bb,x);}b=Bgu;h=a.F;d=d+1|0;$p=8;case 8:$z=AF4(b,h,c,d,e);if(C()){break _;}g=$z;if(g){r=c+0.5;t=r+0.5;u=r-0.5;r=e+0.5;w=r+0.5;r=r-0.5;if(((c+d|0)+e|0)&1){s=c+0|0;t=d+(-0.20000000298023224);G(f,s,t,w,m,n);u=d+0|0;G(f,s,u,r,m,p);v=j;G(f,v,u,r,l,p);G(f,v,t,w,l,n);x=(k+16|0)/256.0;z=(o+16.0)/256.0;G(f,v,t,r,m,x);G(f,v,u,w,m,z);G(f,s,u,w,l,z);G(f,s,t,r,l,x);}else{v=d+(-0.20000000298023224);x=e+0|0;G(f,u,v,x,m,n);z=d+0|0;G(f,t,z,
x,m,p);r=bk;G(f,t,z,r,l,p);G(f,u,v,r,l,n);w=(k+16|0)/256.0;s=(o+16.0)/256.0;G(f,t,v,r,m,w);G(f,u,z,r,m,s);G(f,u,z,x,l,s);G(f,t,v,x,l,w);}}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function ADx(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeP;g=b.cj(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cz(h,c,d,e);if(C()){break _;}i=$z;Cp(f,i,i,i);j=(g&15)<<4;k=j+16|0;l=g&240;if((((c+d|0)+e|0)&
1)!=1){g=j;j=k;k=g;}i=j;m=i/256.0;n=(i+15.989999771118164)/256.0;i=l;o=i/256.0;p=(i+15.989999771118164)/256.0;q=k;r=q/256.0;s=(q+15.989999771118164)/256.0;t=0.125;q=0.05000000074505806;b=a.F;k=c-1|0;$p=2;case 2:$z=b.le(k,d,e);if(C()){break _;}k=$z;if(k){u=c+q;v=(d+1|0)+t;w=(e+1|0)+t;G(f,u,v,w,m,o);x=(d+0|0)-t;G(f,u,x,w,m,p);w=(e+0|0)-t;G(f,u,x,w,n,p);G(f,u,v,w,n,o);}b=a.F;l=c+1|0;$p=3;case 3:$z=b.le(l,d,e);if(C()){break _;}k=$z;if(k){u=l-q;x=(d+0|0)-t;w=(e+1|0)+t;G(f,u,x,w,n,p);v=(d+1|0)+t;G(f,u,v,w,n,o);w=
(e+0|0)-t;G(f,u,v,w,m,o);G(f,u,x,w,m,p);}b=a.F;k=e-1|0;$p=4;case 4:$z=b.le(c,d,k);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+0|0)-t;x=e+q;G(f,u,m,x,s,p);w=(d+1|0)+t;G(f,u,w,x,s,o);u=(c+0|0)-t;G(f,u,w,x,r,o);G(f,u,m,x,r,p);}b=a.F;e=e+1|0;$p=5;case 5:$z=b.le(c,d,e);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+1|0)+t;x=e-q;G(f,u,m,x,r,o);w=(d+0|0)-t;G(f,u,w,x,r,p);u=(c+0|0)-t;G(f,u,w,x,s,p);G(f,u,m,x,s,o);}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function ANc(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=
$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeP;g=a.F;$p=1;case 1:$z=g.eH(c,d,e);if(C()){break _;}h=$z;i=b.eY(0,h);if(a.cz>=0)i=a.cz;g=a.F;$p=2;case 2:$z=b.Cz(g,c,d,e);if(C()){break _;}j=$z;Cp(f,j,j,j);k=(i&15)<<4;l=i&240;m=k;n=m/256.0;o=(m+15.989999771118164)/256.0;m=l;p=m/256.0;q=(m+15.989999771118164)/256.0;r=c+1|0;s=c+0|0;t=e+0|0;u=e+1|0;v=d+0.0625;if(h!=1&&h!=2&&h!=3&&h!=7){if(h==8){w=s;x=r;y=r;z=u;m=t;j=t;ba=s;r=x;s=y;bb=u;t=m;u=j;}else if(h!=9){w=r;j=s;z=t;m=u;ba=r;r=j;bb=t;t=m;}else{w=r;ba
=s;j=r;z=u;bb=t;m=t;r=s;s=j;t=u;u=m;}}else{w=s;ba=r;z=t;bb=u;}if(h!=2&&h!=4){if(h!=3&&h!=5){x=v;j=v;y=v;m=v;v=j;}else{j=v+1.0;x=j;y=v;m=v;v=j;}}else{m=v+1.0;x=v;y=m;}bc=ba;bd=y;be=bb;G(f,bc,bd,be,o,p);bf=w;bg=x;bh=u;G(f,bf,bg,bh,o,q);bi=s;bj=v;bk=t;G(f,bi,bj,bk,n,q);bl=r;bm=m;bn=z;G(f,bl,bm,bn,n,p);G(f,bl,bm,bn,n,p);G(f,bi,bj,bk,n,q);G(f,bf,bg,bh,o,q);G(f,bc,bd,be,o,p);return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p);}
function AJD(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeP;g=b.cj(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cz(h,c,d,e);if(C()){break _;}i=$z;Cp(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=(i+15.989999771118164)
/256.0;b=a.F;$p=2;case 2:$z=b.eH(c,d,e);if(C()){break _;}p=$z;if(p==5){q=c+0.05000000074505806;r=(d+1|0)+0.0;s=(e+1|0)+0.0;G(f,q,r,s,l,n);t=(d+0|0)-0.0;G(f,q,t,s,l,o);s=(e+0|0)-0.0;G(f,q,t,s,m,o);G(f,q,r,s,m,n);}if(p==4){t=(c+1|0)-0.05000000074505806;q=(d+0|0)-0.0;s=(e+1|0)+0.0;G(f,t,q,s,m,o);r=(d+1|0)+0.0;G(f,t,r,s,m,n);s=(e+0|0)-0.0;G(f,t,r,s,l,n);G(f,t,q,s,l,o);}if(p==3){q=(c+1|0)+0.0;r=(d+0|0)-0.0;s=e+0.05000000074505806;G(f,q,r,s,m,o);t=(d+1|0)+0.0;G(f,q,t,s,m,n);q=(c+0|0)-0.0;G(f,q,t,s,l,n);G(f,q,r,s,
l,o);}if(p==2){r=(c+1|0)+0.0;s=(d+1|0)+0.0;t=(e+1|0)-0.05000000074505806;G(f,r,s,t,l,n);q=(d+0|0)-0.0;G(f,r,q,t,l,o);r=(c+0|0)-0.0;G(f,r,q,t,m,o);G(f,r,s,t,m,n);}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function ABe(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeP;g=a.F;$p=1;case 1:$z=b.Cz(g,c,d,e);if(C()){break _;}h=$z;Cp(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eH(c,d,e);if(C()){break _;}i=$z;Uu(a,b,i,c,d,e);return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALP(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeP;g=a.F;$p=1;case 1:$z=b.Cz(g,c,d,e);if(C()){break _;}h=$z;Cp(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eH(c,d,e);if(C()){break _;}i=$z;OS(a,b,i,c,d-0.0625,e);return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function GI(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;BA();h=BeP;i=b.cj(0);if(a.cz>=0)i=a.cz;j=(i&15)<<4;k=i&240;l=j;m=l/256.0;l=(l+15.989999771118164)/256.0;n=k;o=n/256.0;n=(n+15.989999771118164)/256.0;p=m;q=p+0.02734375;r=o;s=r+0.0234375;t=p+0.03515625;u=r+0.03125;c=c+0.5;e=e+0.5;v=c-0.5;w=c+0.5;x=e-0.5;y=e+0.5;z=c+f*0.375;ba=z-0.0625;bb=d+0.625;bc=e+g*0.375;bd=bc-0.0625;G(h,ba,bb,bd,q,s);bc=bc+0.0625;G(h,ba,bb,bc,q,u);q=z+0.0625;G(h,q,bb,bc,t,u);G(h,q,bb,bd,t,s);u=c-0.0625;bc=d
+1.0;G(h,u,bc,x,p,r);q=u+f;d=d+0.0;t=x+g;bd=n;G(h,q,d,t,p,bd);s=y+g;z=l;G(h,q,d,s,z,bd);G(h,u,bc,y,z,r);u=c+0.0625;G(h,u,bc,y,p,r);c=c+f+0.0625;G(h,c,d,s,p,bd);G(h,c,d,t,z,bd);G(h,u,bc,x,z,r);c=e+0.0625;G(h,v,bc,c,p,r);u=v+f;q=c+g;G(h,u,d,q,p,bd);f=w+f;G(h,f,d,q,z,bd);G(h,w,bc,c,z,r);c=e-0.0625;G(h,w,bc,c,p,r);e=c+g;G(h,f,d,e,p,bd);G(h,u,d,e,z,bd);G(h,v,bc,c,z,r);}
function Uu(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;BA();g=BeP;h=b.eY(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.44999998807907104;q=d+0.44999998807907104;d=f+0.5;r=d-0.44999998807907104;s=d+0.44999998807907104;d=e+1.0;G(g,p,d,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,q,e,s,m,o);G(g,q,d,s,m,n);G(g,q,d,s,l,n);G(g,q,e,s,l,o);G(g,p,e,r,m,o);G(g,p,d,r,m,n);G(g,p,d,s,l,n);G(g,p,e,s,l,o);G(g,q,e,r,m,o);G(g,q,d,r,m,n);G(g,
q,d,r,l,n);G(g,q,e,r,l,o);G(g,p,e,s,m,o);G(g,p,d,s,m,n);}
function OS(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeP;h=b.eY(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.25;q=d+0.25;f=f+0.5;r=f-0.5;s=f+0.5;t=e+1.0;G(g,p,t,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,p,e,s,m,o);G(g,p,t,s,m,n);G(g,p,t,s,l,n);G(g,p,e,s,l,o);G(g,p,e,r,m,o);G(g,p,t,r,m,n);G(g,q,t,s,l,n);G(g,q,e,s,l,o);G(g,q,e,r,m,o);G(g,q,t,r,m,n);G(g,q,t,r,l,n);G(g,q,e,r,l,o);G(g,q,e,s,m,o);G(g,q,t,s,m,n);p
=d-0.5;d=d+0.5;q=f-0.25;f=f+0.25;G(g,p,t,q,l,n);G(g,p,e,q,l,o);G(g,d,e,q,m,o);G(g,d,t,q,m,n);G(g,d,t,q,l,n);G(g,d,e,q,l,o);G(g,p,e,q,m,o);G(g,p,t,q,m,n);G(g,d,t,f,l,n);G(g,d,e,f,l,o);G(g,p,e,f,m,o);G(g,p,t,f,m,n);G(g,p,t,f,l,n);G(g,p,e,f,l,o);G(g,d,e,f,m,o);G(g,d,t,f,m,n);}
function AB$(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w
=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeP;g=a.F;h=d+1|0;i=1;$p=1;case 1:$z=b.pG(g,c,h,e,i);if(C()){break _;}h=$z;g=a.F;i=d-1|0;j=0;$p=2;case 2:$z=b.pG(g,c,i,e,j);if(C()){break _;}j=$z;k=$rt_createBooleanArray(4).data;l=0;g=a.F;m=e-1|0;n=2;$p=3;case 3:$z=b.pG(g,c,d,m,n);if(C()){break _;}n=$z;k[l]=n;n=1;g
=a.F;o=e+1|0;l=3;$p=4;case 4:$z=b.pG(g,c,d,o,l);if(C()){break _;}l=$z;k[n]=l;n=2;g=a.F;p=c-1|0;l=4;$p=5;case 5:$z=b.pG(g,p,d,e,l);if(C()){break _;}l=$z;k[n]=l;n=3;g=a.F;q=c+1|0;l=5;$p=6;case 6:$z=b.pG(g,q,d,e,l);if(C()){break _;}l=$z;k[n]=l;if(!h&&!j&&!k[0]&&!k[1]&&!k[2]&&!k[3])return 0;r=0;s=0.5;t=1.0;u=0.800000011920929;v=0.6000000238418579;w=0.0;x=1.0;y=b.b_;g=a.F;$p=7;case 7:$z=g.eH(c,d,e);if(C()){break _;}z=$z;$p=8;case 8:$z=APD(a,c,d,e,y);if(C()){break _;}ba=$z;$p=9;case 9:$z=APD(a,c,d,o,y);if(C()){break _;}bb
=$z;$p=10;case 10:$z=APD(a,q,d,o,y);if(C()){break _;}bc=$z;$p=11;case 11:$z=APD(a,q,d,e,y);if(C()){break _;}bd=$z;if(!a.dQ&&!h){if(!a.dQ&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;a:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break a;if(k[i])break a;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn
=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;}r=1;bx=b.eY(1,z);g=a.F;$p=12;case 12:$z=A6k(g,c,d,e,y);if(C()){break _;}by=$z;bm=by;h=R(bm,(-999.0));if(h>0)bx=b.eY(2,z);n=(bx&15)<<4;l=bx&240;by=(n+8.0)/256.0;bz=(l+8.0)/256.0;if(h<0)bm=0.0;else{by=(n+16|0)/256.0;bz=(l+16|0)/256.0;}bn=Bq(bm)*8.0/256.0;bo=BC(bm)*8.0/256.0;g=a.F;$p=14;continue _;case 13:$z
=b.Cz(g,c,i,e);if(C()){break _;}bp=$z;bm=s*bp;Cp(f,bm,bm,bm);HI(a,b,c,d,e,b.cj(0));r=1;i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;b:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break b;if(k[i])break b;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=
((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;case 14:$z=b.Cz(g,c,d,e);if(C()){break _;}bi=$z;bm=t*bi;Cp(f,bm,bm,bm);bA=c+0|0;bm=d;br=bm+ba;bu=e+0|0;bB=bo;bf=by-bB;bw=bn;bC=bf-bw;bs=bz-bB;G(f,bA,br,bu,bC,bs+bw);bC=bm+bb;bv=o;bf=bf+bw;br=bz+bB;G(f,bA,bC,bv,bf,br+bw);bA=q;bf=bm+bc;by=by+bB;G(f,bA,bf,bv,by+bw,br-bw);G(f,bA,bm+bd,bu,by-bw,bs-bw);if(!a.dQ&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;c:{while(i<4){h=!i?m:e;n=R(i,
1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break c;if(k[i])break c;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;case 15:$z
=b.Cz(g,o,d,h);if(C()){break _;}bt=$z;bt=t*(l>=0?bt*v:bt*u);Cp(f,bt,bt,bt);bC=bo;by=be+bm;bA=s;G(f,bC,by,bA,br,bu);by=bp;bu=be+bn;bB=bq;G(f,by,bu,bB,bs,bv);G(f,by,bf,bB,bs,bw);G(f,bC,bf,bA,br,bw);c:{while(true){i=i+1|0;if(i>=4)break;h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break c;if(k[i])break c;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp
=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p);}
function APD(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=0.0;h=0;i=c+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;case 1:$z=l.oK(j,i,k);if(C()){break _;}l=$z;if(l===e)return 1.0;l=a.F;$p=2;case 2:$z=l.oK(j,c,k);if(C()){break _;}l=$z;if(l===e){l=a.F;$p=3;continue _;}if(!l.dv()){g=g+1.0;f=f+1|0;}h=h+1|0;if(h
>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;case 3:$z=l.eH(j,c,k);if(C()){break _;}m=$z;if(!(m<8&&m)){g=g+Jy(m)*10.0;f=f+10|0;}g=g+Jy(m);f=f+1|0;h=h+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AI5(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0.5;h=1.0;i=0.800000011920929;j=0.6000000238418579;BA();k=BeP;Bz(k);$p=1;case 1:$z=b.Cz(c,d,e,f);if(C()){break _;}l=$z;m=e-1|0;$p=2;case 2:$z=b.Cz(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;n=g*n;Cp(k,n,n,n);HI(a,b,(-0.5),(-0.5),(-0.5),b.cj(0));m=e+1|0;$p=3;case 3:$z
=b.Cz(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;h=h*n;Cp(k,h,h,h);JK(a,b,(-0.5),(-0.5),(-0.5),b.cj(1));m=f-1|0;$p=4;case 4:$z=b.Cz(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cp(k,h,h,h);JZ(a,b,(-0.5),(-0.5),(-0.5),b.cj(2));m=f+1|0;$p=5;case 5:$z=b.Cz(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cp(k,h,h,h);Kb(a,b,(-0.5),(-0.5),(-0.5),b.cj(3));m=d-1|0;$p=6;case 6:$z=b.Cz(c,m,e,f);if(C()){break _;}h=$z;if(h<l)h=l;h=j*h;Cp(k,h,h,h);JT(a,b,(-0.5),(-0.5),(-0.5),b.cj(4));d=d+1|0;$p=7;case 7:$z=b.Cz(c,d,e,
f);if(C()){break _;}h=$z;if(h>=l)l=h;h=j*l;Cp(k,h,h,h);KT(a,b,(-0.5),(-0.5),(-0.5),b.cj(5));Br(k);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AB0(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;$p=1;case 1:$z=ALy(a,b,c,d,e,f,f,f);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ALy(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();i=BeP;j=0;k=0.5*f;l=1.0*f;m=0.800000011920929*f;n=0.6000000238418579*f;o=0.5
*g;p=1.0*g;q=0.800000011920929*g;r=0.6000000238418579*g;s=0.5*h;t=1.0*h;u=0.800000011920929*h;v=0.6000000238418579*h;w=a.F;$p=1;case 1:$z=b.Cz(w,c,d,e);if(C()){break _;}x=$z;if(a.dQ){w=a.F;y=d-1|0;$p=2;continue _;}w=a.F;z=d-1|0;y=0;$p=3;continue _;case 2:$z=b.Cz(w,c,y,e);if(C()){break _;}ba=$z;if(BgI.data[b.b]>0)ba=1.0;Cp(i,k*ba,o*ba,s*ba);bb=c;bc=d;bd=e;w=a.F;y=0;$p=4;continue _;case 3:$z=b.pG(w,c,z,e,y);if(C()){break _;}y=$z;if(y){w=a.F;y=d-1|0;$p=2;continue _;}if(a.dQ){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y
=d+1|0;z=1;$p=6;continue _;case 4:$z=b.uk(w,c,d,e,y);if(C()){break _;}y=$z;HI(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y=d+1|0;z=1;$p=6;continue _;case 5:$z=b.Cz(w,c,y,e);if(C()){break _;}ba=$z;if(b.cF!==1.0&&!b.b_.nC())ba=x;if(BgI.data[b.b]>0)ba=1.0;Cp(i,l*ba,p*ba,t*ba);bb=c;bc=d;bd=e;w=a.F;y=1;$p=9;continue _;case 6:$z=b.pG(w,c,y,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=d+1|0;$p=5;continue _;}if(a.dQ){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 7:$z=b.Cz(w,
c,d,y);if(C()){break _;}ba=$z;if(b.c_>0.0)ba=x;if(BgI.data[b.b]>0)ba=1.0;Cp(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=2;$p=12;continue _;case 8:$z=b.pG(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e-1|0;$p=7;continue _;}if(a.dQ){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 9:$z=b.uk(w,c,d,e,y);if(C()){break _;}y=$z;JK(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 10:$z=b.Cz(w,c,d,y);if(C()){break _;}ba=$z;if(b.dd<1.0)ba=x;if(BgI.data[b.b]
>0)ba=1.0;Cp(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=3;$p=15;continue _;case 11:$z=b.pG(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e+1|0;$p=10;continue _;}if(a.dQ){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 12:$z=b.uk(w,c,d,e,y);if(C()){break _;}y=$z;JZ(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 13:$z=b.Cz(w,y,d,e);if(C()){break _;}ba=$z;if(b.da>0.0)ba=x;if(BgI.data[b.b]>0)ba=1.0;Cp(i,n*ba,r*ba,v*ba);bb=c;bc=d;bd=e;w
=a.F;y=4;$p=18;continue _;case 14:$z=b.pG(w,y,d,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=c-1|0;$p=13;continue _;}if(a.dQ){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 15:$z=b.uk(w,c,d,e,y);if(C()){break _;}y=$z;Kb(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 16:$z=b.Cz(w,y,d,e);if(C()){break _;}ba=$z;if(b.dc>=1.0)x=ba;if(BgI.data[b.b]>0)x=1.0;Cp(i,n*x,r*x,v*x);bb=c;bc=d;bd=e;i=a.F;y=5;$p=19;continue _;case 17:$z=b.pG(w,y,d,e,
z);if(C()){break _;}y=$z;if(!y)return j;w=a.F;y=c+1|0;$p=16;continue _;case 18:$z=b.uk(w,c,d,e,y);if(C()){break _;}y=$z;JT(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 19:$z=b.uk(i,c,d,e,y);if(C()){break _;}c=$z;KT(a,b,bb,bc,bd,c);j=1;return j;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AFM(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;Bo(b,0.375,0.0,0.375,0.625,1.0,0.625);$p=1;case 1:AB0(a,b,c,d,e);if(C()){break _;}g=0;h=0;i=a.F;j=c-1|0;$p=2;case 2:$z=i.ei(j,d,e);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=c+1|0;$p=3;continue _;}g=1;i=a.F;j=e-1|0;$p=4;continue _;case 3:$z=i.ei(j,d,e);if(C()){break _;}j
=$z;if(j==b.b)g=1;i=a.F;j=e-1|0;$p=4;case 4:$z=i.ei(c,d,j);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=e+1|0;$p=5;continue _;}h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 5:$z=i.ei(c,d,j);if(C()){break _;}j=$z;if(j==b.b)h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if
(g){Bo(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 6:AB0(a,b,c,d,e);if(C()){break _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 7:AB0(a,b,c,d,e);if(C()){break _;}m=0.375;n
=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 8:AB0(a,b,c,d,e);if(C()){break _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;case 9:AB0(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AIA(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=a.F;$p=1;case 1:$z=g.eH(c,d,e);if(C()){break _;}h=$z;if(!h){Bo(b,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bo(b,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bo(b,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:AB0(a,
b,c,d,e);if(C()){break _;}Bo(b,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:AB0(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 4:AB0(a,b,c,d,e);if(C()){break _;}Bo(b,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:AB0(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 6:AB0(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:AB0(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 8:AB0(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.5,1.0,0.5,1.0);$p
=9;case 9:AB0(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKH(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeP;g=b;h=0.5;i=1.0;j=0.800000011920929;k=0.6000000238418579;l=a.F;$p=1;case 1:$z=b.Cz(l,c,d,e);if(C()){break _;}m=$z;l=a.F;n=d-1|0;$p=2;case 2:$z=b.Cz(l,c,n,e);if(C()){break _;}o=$z;if(g.cM>0.0)o=m;if(BgI.data[b.b]
>0)o=1.0;h=h*o;Cp(f,h,h,h);p=c;q=d;r=e;l=a.F;n=0;$p=3;case 3:$z=b.uk(l,c,d,e,n);if(C()){break _;}n=$z;HI(a,b,p,q,r,n);l=a.F;n=d+1|0;$p=4;case 4:$z=b.Cz(l,c,n,e);if(C()){break _;}h=$z;if(g.cF<1.0)h=m;if(BgI.data[b.b]>0)h=1.0;i=i*h;Cp(f,i,i,i);l=a.F;n=1;$p=5;case 5:$z=b.uk(l,c,d,e,n);if(C()){break _;}n=$z;JK(a,b,p,q,r,n);l=a.F;n=e-1|0;$p=6;case 6:$z=b.Cz(l,c,d,n);if(C()){break _;}i=$z;if(g.c_>0.0)i=m;if(BgI.data[b.b]>0)i=1.0;i=j*i;Cp(f,i,i,i);l=a.F;n=2;$p=7;case 7:$z=b.uk(l,c,d,e,n);if(C()){break _;}s=$z;if(s
<0){a.fq=1;s= -s;}JZ(a,b,p,q,r,s);a.fq=0;l=a.F;n=e+1|0;$p=8;case 8:$z=b.Cz(l,c,d,n);if(C()){break _;}i=$z;if(g.dd<1.0)i=m;if(BgI.data[b.b]>0)i=1.0;i=j*i;Cp(f,i,i,i);l=a.F;n=3;$p=9;case 9:$z=b.uk(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fq=1;s= -s;}Kb(a,b,p,q,r,s);a.fq=0;l=a.F;n=c-1|0;$p=10;case 10:$z=b.Cz(l,n,d,e);if(C()){break _;}i=$z;if(g.da>0.0)i=m;if(BgI.data[b.b]>0)i=1.0;i=k*i;Cp(f,i,i,i);l=a.F;n=4;$p=11;case 11:$z=b.uk(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fq=1;s= -s;}JT(a,b,p,q,r,s);a.fq=0;l=a.F;n
=c+1|0;$p=12;case 12:$z=b.Cz(l,n,d,e);if(C()){break _;}i=$z;if(g.dc>=1.0)m=i;if(BgI.data[b.b]>0)m=1.0;i=k*m;Cp(f,i,i,i);l=a.F;n=5;$p=13;case 13:$z=b.uk(l,c,d,e,n);if(C()){break _;}c=$z;if(c<0){a.fq=1;c= -c;}KT(a,b,p,q,r,c);a.fq=0;return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function HI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeP;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.c_*16.0)/256.0;n=(j+b.dd*16.0-0.01)/256.0;if(!(b.da>=0.0&&b.dc<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c_>=0.0&&b.dd<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=c+b.dc;r=d+b.cM;s=e+b.c_;t=e+b.dd;G(g,j,r,t,k,n);G(g,j,r,s,k,m);G(g,q,r,s,l,m);G(g,q,r,t,l,n);}
function JK(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeP;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.c_*16.0)/256.0;n=(j+b.dd*16.0-0.01)/256.0;if(!(b.da>=0.0&&b.dc<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c_>=0.0&&b.dd<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=c+b.dc;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,q,r,t,l,n);G(g,q,r,s,l,m);G(g,j,r,s,k,m);G(g,j,r,t,k,n);}
function JZ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeP;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;j=(j+b.dc*16.0-0.01)/256.0;l=i;m=(l+b.cM*16.0)/256.0;n=(l+b.cF*16.0-0.01)/256.0;if(!a.fq){l=j;j=k;k=l;}if(!(b.da>=0.0&&b.dc<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.da;q=c+b.dc;r=d+b.cM;s=d+b.cF;t=e+b.c_;G(g,l,s,t,k,m);G(g,q,s,t,j,m);G(g,q,r,t,j,n);G(g,l,r,t,k,n);}
function Kb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeP;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;j=(j+b.dc*16.0-0.01)/256.0;l=i;m=(l+b.cM*16.0)/256.0;n=(l+b.cF*16.0-0.01)/256.0;if(!a.fq){l=j;j=k;k=l;}if(!(b.da>=0.0&&b.dc<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.da;q=c+b.dc;r=d+b.cM;s=d+b.cF;t=e+b.dd;G(g,l,s,t,j,m);G(g,l,r,t,j,n);G(g,q,r,t,k,n);G(g,q,s,t,k,m);}
function JT(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeP;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.dd*16.0-0.01)/256.0;j=i;m=(j+b.cM*16.0)/256.0;n=(j+b.cF*16.0-0.01)/256.0;if(!a.fq){j=l;l=k;k=j;}if(!(b.c_>=0.0&&b.dd<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=d+b.cM;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,j,r,t,k,m);G(g,j,r,s,l,m);G(g,j,q,s,l,n);G(g,j,q,t,k,n);}
function KT(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeP;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.dd*16.0-0.01)/256.0;j=i;m=(j+b.cM*16.0)/256.0;n=(j+b.cF*16.0-0.01)/256.0;if(!a.fq){j=l;l=k;k=j;}if(!(b.c_>=0.0&&b.dd<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.dc;q=d+b.cM;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,j,q,t,l,n);G(g,j,q,s,k,n);G(g,j,r,s,k,m);G(g,j,r,t,l,m);}
function GY(a,b){var c,d;a:{BA();c=BeP;d=b.el();if(d){if(d==1){Bz(c);Ch(0.0,(-1.0),0.0);Uu(a,b,(-1),(-0.5),(-0.5),(-0.5));Br(c);}else if(d==6){Bz(c);Ch(0.0,(-1.0),0.0);OS(a,b,(-1),(-0.5),(-0.5),(-0.5));Br(c);}else{if(d!=2){if(d==3)break a;if(d!=5)break a;else break a;}Bz(c);Ch(0.0,(-1.0),0.0);GI(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Br(c);}}else{Bw((-0.5),(-0.5),(-0.5));Bz(c);Ch(0.0,(-1.0),0.0);HI(a,b,0.0,0.0,0.0,b.cj(0));Br(c);Bz(c);Ch(0.0,1.0,0.0);JK(a,b,0.0,0.0,0.0,b.cj(1));Br(c);Bz(c);Ch(0.0,0.0,(-1.0));JZ(a,
b,0.0,0.0,0.0,b.cj(2));Br(c);Bz(c);Ch(0.0,0.0,1.0);Kb(a,b,0.0,0.0,0.0,b.cj(3));Br(c);Bz(c);Ch((-1.0),0.0,0.0);JT(a,b,0.0,0.0,0.0,b.cj(4));Br(c);Bz(c);Ch(1.0,0.0,0.0);KT(a,b,0.0,0.0,0.0,b.cj(5));Br(c);Bw(0.5,0.5,0.5);}}}
function QM(){var a=this;D.call(a);a.ji=null;a.hp=null;a.fY=0;a.fX=0;a.pE=0.0;a.m2=0.0;a.pD=0.0;a.b1=0.0;a.bX=0.0;a.bU=0.0;a.wq=0;a.lT=0;a.lB=0;a.iS=0;a.BZ=0;}
function BJ(a,b){var c=new QM();A9m(c,a,b);return c;}
function A9m(a,b,c){a.wq=0;a.lT=0;a.lB=0;a.iS=1;a.BZ=0;a.fY=b;a.fX=c;}
function BF(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;a.ji=I(ES,8);a.hp=I(Fy,6);i=b+e;j=c+f;k=d+g;l=b-h;m=c-h;n=d-h;d=i+h;j=j+h;h=k+h;if(!a.lB){b=l;l=d;d=b;}a:{o=G5(d,m,n,0.0,0.0);p=G5(l,m,n,0.0,8.0);q=G5(l,j,n,8.0,8.0);r=G5(d,j,n,8.0,0.0);s=G5(d,m,h,0.0,0.0);t=G5(l,m,h,0.0,8.0);u=G5(l,j,h,8.0,8.0);v=G5(d,j,h,8.0,0.0);a.ji.data[0]=o;a.ji.data[1]=p;a.ji.data[2]=q;a.ji.data[3]=r;a.ji.data[4]=s;a.ji.data[5]=t;a.ji.data[6]=u;a.ji.data[7]=v;w=a.hp.data;x=new Fy;y=I(ES,4);z=y.data;z[0]=t;z[1]=p;z[2]
=q;z[3]=u;Hj(x,y,(a.fY+g|0)+e|0,a.fX+g|0,((a.fY+g|0)+e|0)+g|0,(a.fX+g|0)+f|0);w[0]=x;z=a.hp.data;x=new Fy;w=I(ES,4);y=w.data;y[0]=o;y[1]=s;y[2]=v;y[3]=r;Hj(x,w,a.fY+0|0,a.fX+g|0,a.fY+g|0,(a.fX+g|0)+f|0);z[1]=x;z=a.hp.data;x=new Fy;w=I(ES,4);y=w.data;y[0]=t;y[1]=s;y[2]=o;y[3]=p;Hj(x,w,a.fY+g|0,a.fX+0|0,(a.fY+g|0)+e|0,a.fX+g|0);z[2]=x;z=a.hp.data;x=new Fy;w=I(ES,4);y=w.data;y[0]=q;y[1]=r;y[2]=v;y[3]=u;Hj(x,w,(a.fY+g|0)+e|0,a.fX+0|0,((a.fY+g|0)+e|0)+e|0,a.fX+g|0);z[3]=x;w=a.hp.data;x=new Fy;y=I(ES,4);z=y.data;z[0]
=p;z[1]=o;z[2]=r;z[3]=q;Hj(x,y,a.fY+g|0,a.fX+g|0,(a.fY+g|0)+e|0,(a.fX+g|0)+f|0);w[4]=x;z=a.hp.data;r=new Fy;w=I(ES,4);y=w.data;y[0]=s;y[1]=t;y[2]=u;y[3]=v;Hj(r,w,((a.fY+g|0)+e|0)+g|0,a.fX+g|0,(((a.fY+g|0)+e|0)+g|0)+e|0,(a.fX+g|0)+f|0);z[5]=r;if(a.lB){ba=0;while(true){if(ba>=a.hp.data.length)break a;ACZ(a.hp.data[ba]);ba=ba+1|0;}}}}
function BI(a,b,c,d){a.pE=b;a.m2=c;a.pD=d;}
function B_(a,b){var c,d;if(!a.BZ&&a.iS){if(!a.wq){a.lT=I3(1);FI(a.lT,4864);BA();c=BeP;d=0;while(d<a.hp.data.length){APH(a.hp.data[d],c,b);d=d+1|0;}Ee();a.wq=1;}if(a.b1===0.0&&a.bX===0.0&&a.bU===0.0){if(a.pE===0.0&&a.m2===0.0&&a.pD===0.0)FU(a.lT);else{Bw(a.pE*b,a.m2*b,a.pD*b);FU(a.lT);Bw( -a.pE*b, -a.m2*b, -a.pD*b);}}else{B1();Bw(a.pE*b,a.m2*b,a.pD*b);if(a.bU!==0.0)Bv(a.bU*57.2957763671875,0.0,0.0,1.0);if(a.bX!==0.0)Bv(a.bX*57.2957763671875,0.0,1.0,0.0);if(a.b1!==0.0)Bv(a.b1*57.2957763671875,1.0,0.0,0.0);FU(a.lT);BD();}}}
function E5(){D.call(this);}
function AOE(a,b){Rc(a,b,0,b.data.length);}
function ATl(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.nL(f[c]);e=e+1|0;c=g;}}
function A80(a){return;}
function A9O(a){return;}
function Ge(){E5.call(this);this.fn=null;}
function Bho(a){var b=new Ge();La(b,a);return b;}
function La(a,b){a.fn=b;}
function Of(a){var $$je;a:{try{a.fn.lv();break a;}catch($$e){$$je=Bj($$e);if($$je instanceof B3){}else{throw $$e;}}}a.fn.tQ();}
function AA_(){var a=this;Ge.call(a);a.GM=0;a.uL=0;a.hH=null;a.nR=null;a.AU=null;}
function AYP(a,b){var c=new AA_();A$F(c,a,b);return c;}
function A$F(a,b,c){La(a,b);b=new T;V(b);a.hH=b;a.nR=$rt_createCharArray(32);a.GM=c;a.AU=A1L();}
function VY(a,b,c,d){var $$je;if(a.fn===null)a.uL=1;if(!(a.uL?0:1))return;a:{try{a.fn.gv(b,c,d);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof B3){}else{throw $$e;}}a.uL=1;}}
function TR(a,b,c,d){var e,f,g,h,i;e=b.data;f=AM9(b,c,d-c|0);e=$rt_createByteArray(DE(16,CA(e.length,1024)));g=AAx(e);h=AG0(ACV(AG8(a.AU),Bgb),Bgb);while(true){i=IV(AJi(h,f,g,1));VY(a,e,0,g.bj);EA(g);if(!i)break;}while(true){i=IV(X6(h,g));VY(a,e,0,g.bj);EA(g);if(!i)break;}}
function AKJ(a,b){a.nR.data[0]=b;TR(a,a.nR,0,1);}
function Ks(a,b){J(a.hH,b);Ka(a);}
function ABS(a,b){Dw(Bf(a.hH,b),10);Ka(a);}
function Co(a,b){Dw(J(a.hH,b),10);Ka(a);}
function ACo(a,b){Dw(FN(a.hH,b),10);Ka(a);}
function APG(a){AKJ(a,10);}
function Ka(a){var b;b=a.hH.bY<=a.nR.data.length?a.nR:$rt_createCharArray(a.hH.bY);AAF(a.hH,0,a.hH.bY,b,0);TR(a,b,0,a.hH.bY);ANl(a.hH,0);}
function Xj(){E5.call(this);}
function Bhp(){var a=new Xj();A3x(a);return a;}
function A3x(a){return;}
function AYm(a,b){$rt_putStdout(b);}
function AFe(){Cb.call(this);this.Fx=null;}
function ALu(a){var b=new AFe();A09(b,a);return b;}
function A09(a,b){O(a);a.Fx=b;}
function MX(){var a=this;D.call(a);a.cg=null;a.A=0;a.N=0;a.G=Long_ZERO;a.uX=null;a.pO=0;a.ic=0;a.nq=Long_ZERO;a.b9=null;a.jx=null;a.f8=null;}
function Bhq(){var a=new MX();OU(a);return a;}
function OU(a){a.f8=A9X();}
function AAN(a,b,c,d){a.uX=b;a.pO=c;a.ic=d;}
function AKb(a,b,c,d,e){var f;if(d<=0&&e&&a.cg!==null)return;if(a.N>0&&e){f=$rt_createByteArray(a.N+d|0);Dh(a.cg,a.A,f,0,a.N);Dh(b,c,f,a.N,d);a.cg=f;a.A=0;a.N=a.N+d|0;}else{a.cg=b;a.A=c;a.N=d;}}
function Uq(){MX.call(this);this.rS=0;}
function Bhr(){var a=new Uq();A3d(a);return a;}
function A3d(a){OU(a);a.rS=0;AA0(a);}
function AA0(a){return ACM(a,15);}
function ACM(a,b){return R$(a,b,0);}
function R$(a,b,c){var d;a.rS=0;d=new LM;d.rR=Long_fromInt(-1);d.iI=(-1);d.xJ=$rt_createByteArray(4);d.cJ=null;d.fV=null;d.E=a;a.jx=d;d=a.jx;if(c)b= -b;return XH(d,b);}
function AF8(a,b){var c;if(a.jx===null)return (-2);c=AGH(a.jx,b);if(c==1)a.rS=1;return c;}
function Yo(a){return a.jx.bP!=12?0:1;}
function Is(){var a=this;D.call(a);a.Cq=null;a.oP=0.0;a.pN=0.0;}
function Ik(a,b,c){var d=new Is();O$(d,a,b,c);return d;}
function O$(a,b,c,d){a.Cq=b;a.oP=c;a.pN=d;}
function AMR(a){return a.oP;}
function Ym(a){return a.pN;}
function Kk(a){var b;b=new T;V(b);return U(J(J(b,B(252)),a.Cq));}
function AHs(){Is.call(this);}
function A_6(a,b,c){var d=new AHs();AZx(d,a,b,c);return d;}
function AZx(a,b,c,d){O$(a,b,c,d);}
function ACw(){Is.call(this);}
function Bce(a,b,c){var d=new ACw();A7Q(d,a,b,c);return d;}
function A7Q(a,b,c,d){O$(a,b,c,d);}
function LT(){P.call(this);}
function Bbj(a,b){var c=new LT();AJa(c,a,b);return c;}
function AJa(a,b,c){C8(a,b,c,Bhe);}
function A8M(a,b,c){L();return Be3.b;}
function Z_(){P.call(this);}
function BbM(a){var b=new Z_();AY8(b,a);return b;}
function AY8(a,b){D1(a,b,Bhs);a.ba=3;Fg(a,1);}
function A7v(a,b){return b==1?0:b?3:2;}
function ADt(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=XF(b,c,g,e);if(C()){break _;}h=$z;if(h>=4){$p=2;continue _;}$p=3;continue _;case 2:$z=XF(b,c,g,e);if(C()){break _;}g=$z;if(g<9)return;h=(c+E(f,3)|0)-1|0;g=(d+E(f,5)|0)-3|0;i=(e+E(f,3)|0)-1|0;$p=4;continue _;case 3:$z=AB6(b,c,g,e);if(C()){break _;}j=$z;if(!j.sj()){$p=2;continue _;}if(E(f,
4))return;L();h=BeW.b;$p=6;continue _;case 4:$z=ACB(b,h,g,i);if(C()){break _;}c=$z;L();if(c!=BeW.b)return;c=g+1|0;$p=5;case 5:$z=XF(b,h,c,i);if(C()){break _;}d=$z;if(d<4)return;$p=7;continue _;case 6:APB(b,c,d,e,h);if(C()){break _;}return;case 7:$z=AB6(b,h,c,i);if(C()){break _;}f=$z;if(f.sj())return;c=BeV.b;$p=8;case 8:APB(b,h,g,i,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function A0c(a,b,c){L();return BeW.dW(0,c);}
function AHY(){P.call(this);}
function A__(a,b){var c=new AHY();AXE(c,a,b);return c;}
function AXE(a,b,c){C8(a,b,c,Bhs);}
function B8(){D.call(this);}
var Bge=null;var Bhs=null;var Bhf=null;var Bhe=null;var Bht=null;var BfV=null;var BfW=null;var Bhu=null;var Bhv=null;var Bhw=null;var Bhh=null;var Bhx=null;var Bhy=null;var Bhz=null;var Bhg=null;var BhA=null;var BhB=null;function BhC(){var a=new B8();AQp(a);return a;}
function AQp(a){return;}
function A8q(a){return 0;}
function A03(a){return 1;}
function A7V(a){return 1;}
function A5x(a){return 1;}
function AP8(){Bge=new Op;Bhs=new B8;Bhf=new B8;Bhe=new B8;Bht=new B8;BfV=new L3;BfW=new L3;Bhu=new B8;Bhv=new N_;Bhw=new B8;Bhh=new B8;Bhx=new Op;Bhy=new B8;Bhz=new N_;Bhg=new B8;BhA=new B8;BhB=new B8;}
function F4(){P.call(this);}
function A3p(a,b){var c=new F4();Lz(c,a,b);return c;}
function Lz(a,b,c){D1(a,b,Bhv);a.ba=c;Fg(a,1);Bo(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function AL0(a,b,c,d,e){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=ACB(b,c,d,e);if(C()){break _;}c=$z;return a.ro(c);default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AYq(a,b){L();return b!=BeV.b&&b!=BeW.b&&b!=Bg8.b?0:1;}
function AIK(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJu(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AEc(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJu(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AJu(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.Hd(b,c,d,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEN(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yn(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APB(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AN_(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XF(b,c,d,e);if(C()){break _;}f=$z;if(f<8){$p=3;continue _;}d=d-1|0;$p=2;case 2:$z=ACB(b,c,d,e);if(C()){break _;}c=$z;return !a.ro(c)?0:1;case 3:$z=AGi(b,c,d,e);if(C()){break _;}g=$z;if(!g)return 0;d=d-1|0;$p=2;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGo(a,b,c,d,e){return null;}
function A6q(a){return 0;}
function AT5(a){return 0;}
function A7A(a){return 1;}
function AM2(){F4.call(this);}
function Bcy(a,b){var c=new AM2();A9I(c,a,b);return c;}
function A9I(a,b,c){Lz(a,b,c);Bo(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function AEl(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJu(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=XF(b,c,g,e);if(C()){break _;}g=$z;if(g>=9&&!E(f,5)){$p=3;continue _;}return;case 3:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;if(g>=15){g=0;$p=4;continue _;}g=g+1|0;$p=6;continue _;case 4:ALx(b,c,d,e,g);if(C()){break _;}h=new Rk;$p=5;case 5:$z=AEP(h,b,f,c,d,e);if(C()){break _;}g
=$z;if(g)return;g=a.b;$p=7;continue _;case 6:AKA(b,c,d,e,g);if(C()){break _;}return;case 7:ALx(b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function HU(){P.call(this);this.qP=0;}
function BhD(a,b){var c=new HU();P7(c,a,b);return c;}
function P7(a,b,c){C8(a,b,((c!==BfW?12:14)*16|0)+13|0,c);a.qP=1;if(c===BfW)a.qP=2;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);Fg(a,1);}
function Jy(b){if(b>=8)b=0;return (b+1|0)/9.0;}
function ATf(a,b){return b&&b!=1?a.ba+1|0:a.ba;}
function AFj(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB6(b,c,d,e);if(C()){break _;}f=$z;if(f!==a.b_)return (-1);$p=2;case 2:$z=AEN(b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AEh(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oK(c,d,e);if(C()){break _;}f=$z;if(f!==a.b_)return (-1);$p=2;case 2:$z=b.eH(c,d,e);if(C()){break _;}g=$z;if(g>=8)g=0;return g;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function A_d(a){return 0;}
function A$x(a){return 0;}
function A8J(a,b,c){return c&&!b?1:0;}
function ARB(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oK(c,d,e);if(C()){break _;}g=$z;if(g===a.b_)c=0;else{if(f!=1){$p=2;continue _;}c=1;}return c;case 2:$z=AGz(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yl(a,b,c,d,e){return null;}
function A73(a){return 4;}
function A3j(a,b,c){return 0;}
function A6e(a,b){return 0;}
function AIR(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=BW(0.0,0.0,0.0);$p=1;case 1:$z=AEh(a,b,c,d,e);if(C()){break _;}g=$z;h=0;i=c-1|0;j=e-1|0;k=d-1|0;l=g-8|0;m=d-d|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 2:$z=b.eH(c,d,e);if
(C()){break _;}n=$z;if(n<8)return CC(f);k=0;n=2;$p=3;case 3:$z=ARB(a,b,c,d,j,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=e+1|0;p=3;$p=4;continue _;}k=1;if(!k){n=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dj(CC(f),0.0,(-6.0),0.0);return CC(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 4:$z=ARB(a,b,c,d,n,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n
=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dj(CC(f),0.0,(-6.0),0.0);return CC(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 5:$z=ARB(a,b,i,d,e,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k
=1;if(k){k=1;if(k)f=Dj(CC(f),0.0,(-6.0),0.0);return CC(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 6:$z=ARB(a,b,n,d,e,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dj(CC(f),0.0,(-6.0),0.0);return CC(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 7:$z=AEh(a,b,n,d,o);if(C()){break _;}p=$z;if(p<0){$p=8;continue _;}if(p>=0){q=p-g|0;f=Dj(f,Bi(n-c|0,q),Bi(m,q),Bi(o-e|0,q));}h=h+1
|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;continue _;case 8:$z=AEh(a,b,n,k,o);if(C()){break _;}p=$z;if(p>=0){q=p-l|0;f=Dj(f,Bi(n-c|0,q),Bi(m,q),Bi(o-e|0,q));}h=h+1|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 9:$z=ARB(a,b,c,n,j,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dj(CC(f),0.0,(-6.0),0.0);return CC(f);}c=c+1|0;d
=d+1|0;n=5;$p=12;continue _;case 10:$z=ARB(a,b,c,n,p,q);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dj(CC(f),0.0,(-6.0),0.0);return CC(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 11:$z=ARB(a,b,i,n,e,p);if(C()){break _;}n=$z;if(n)k=1;if(k){k=1;if(k)f=Dj(CC(f),0.0,(-6.0),0.0);return CC(f);}c=c+1|0;d=d+1|0;n=5;$p=12;case 12:$z=ARB(a,b,c,d,e,n);if(C()){break _;}c=$z;if(c)k=1;if(k)f=Dj(CC(f),0.0,(-6.0),0.0);return CC(f);default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,
m,n,o,p,q,$p);}
function ANh(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIR(a,b,c,d,e);if(C()){break _;}h=$z;g.x=g.x+h.x;g.z=g.z+h.z;g.w=g.w+h.w;return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AU9(a){return a.b_===BfV?5:a.b_!==BfW?0:30;}
function AEz(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sN(c,d,e);if(C()){break _;}f=$z;d=d+1|0;$p=2;case 2:$z=b.sN(c,d,e);if(C()){break _;}g=$z;if(f>g)g=f;return g;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ARd(a,b,c,d,e,f){return;}
function A$u(a){return 0;}
function YL(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.b_===BfV&&!E(f,64)){$p=2;continue _;}if(a.b_!==BfW)return;g=d+1|0;$p=1;case 1:$z=AB6(b,c,g,e);if(C()){break _;}h=$z;if(h!==Bge)return;$p=3;continue _;case 2:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;if(g>0&&g<8)Ex(b,c+0.5,d+0.5,e+0.5,B(253),N(f)*0.25+0.75,N(f)*1.0+0.5);if(a.b_!==BfW)return;g=d+1|0;$p=1;continue _;case 3:$z=AAI(b,
c,g,e);if(C()){break _;}g=$z;if(!g&&!E(f,100))BU(b,B(254),c+N(f),d+a.cF,e+N(f),0.0,0.0,0.0);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A6k(b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:g=null;if(f===BfV){L();g=Bf3;$p=1;continue _;}if(f!==BfW)return g.x===0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;L();f=Bf4;$p=2;continue _;case 1:$z=AIR(g,b,c,d,e);if(C()){break _;}g=$z;if(f!==BfW)return g.x===0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;L();f=Bf4;$p=2;case 2:$z=AIR(f,b,c,d,e);if(C()){break _;}g=$z;return g.x===
0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;default:Fa();}}C3().s(b,c,d,e,f,g,$p);}
function ARV(a,b,c,d,e){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APd(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function ALk(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APd(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function APd(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACB(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b&&a.b_===BfW){f=0;g=e-1|0;$p=2;continue _;}return;case 2:$z=AB6(b,c,d,g);if(C()){break _;}h=$z;if(h===BfV)f=1;if(!f){g=e+1|0;$p=3;continue _;}f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 3:$z
=AB6(b,c,d,g);if(C()){break _;}h=$z;if(h===BfV)f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 4:$z=AB6(b,g,d,e);if(C()){break _;}h=$z;if(h===BfV)f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 5:$z=AB6(b,g,d,e);if(C()){break _;}h=$z;if(h===BfV)f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 6:$z=AB6(b,c,g,e);if(C()){break _;}h
=$z;if(h===BfV)f=1;if(!f)return;$p=7;case 7:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;if(!g){L();f=Bfp.b;$p=8;continue _;}if(g>4){JV(a,b,c,d,e);return;}L();f=Be3.b;$p=9;continue _;case 8:APB(b,c,d,e,f);if(C()){break _;}JV(a,b,c,d,e);return;case 9:APB(b,c,d,e,f);if(C()){break _;}JV(a,b,c,d,e);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function JV(a,b,c,d,e){var f,g,h,i;Ex(b,c+0.5,d+0.5,e+0.5,B(215),0.5,2.5999999046325684+(N(b.q)-N(b.q))*0.800000011920929);f=0;g=c;h=d+1.2;i=e;while(f<8){BU(b,B(255),g+BN(),h,i+BN(),0.0,0.0,0.0);f=f+1|0;}}
function AEk(){var a=this;HU.call(a);a.mj=0;a.hj=null;a.cT=null;}
function AUo(a,b){var c=new AEk();AZd(c,a,b);return c;}
function AZd(a,b,c){P7(a,b,c);a.mj=0;a.hj=$rt_createBooleanArray(4);a.cT=$rt_createIntArray(4);}
function AHe(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}f=$z;g=a.b+1|0;$p=2;case 2:AJr(b,c,d,e,g,f);if(C()){break _;}Jn(b,c,d,e,c,d,e);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AOT(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFj(a,b,c,d,e);if(C()){break _;}g=$z;h=1;if(g<=0){$p=2;continue _;}i=(-100);a.mj=0;j=c-1|0;$p=3;continue _;case 2:AHe(a,b,c,d,e);if(C()){break _;}j=d-1|0;$p=7;continue _;case 3:$z=AOQ(a,b,j,d,e,i);if(C()){break _;}j=$z;k=c+1|0;$p=4;case 4:$z=AOQ(a,b,k,d,e,j);if
(C()){break _;}j=$z;k=e-1|0;$p=5;case 5:$z=AOQ(a,b,c,d,k,j);if(C()){break _;}j=$z;k=e+1|0;$p=6;case 6:$z=AOQ(a,b,c,d,k,j);if(C()){break _;}j=$z;k=j+a.qP|0;if(!(k<8&&j>=0))k=(-1);j=d+1|0;$p=8;continue _;case 7:$z=AL2(a,b,c,j,e);if(C()){break _;}k=$z;if(!k){if(g<0)return;if(!g){$p=12;continue _;}$p=13;continue _;}if(g>=8){d=a.b;$p=10;continue _;}d=a.b;k=g+8|0;$p=9;continue _;case 8:$z=AFj(a,b,c,j,e);if(C()){break _;}l=$z;if(l>=0){$p=11;continue _;}if(a.mj>=2&&a.b_===BfV)k=0;if(a.b_===BfW&&g<8&&k<8&&k>g&&E(f,4))
{h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 9:AI3(b,c,j,e,d,k);if(C()){break _;}return;case 10:AI3(b,c,j,e,d,g);if(C()){break _;}return;case 11:$z=AFj(a,b,c,j,e);if(C()){break _;}k=$z;if(k<8)k=k+8|0;if(a.mj>=2&&a.b_===BfV)k=0;if(a.b_===BfW&&g<8&&k<8&&k>g&&E(f,4)){h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 12:$z=AK8(a,b,c,d,e);if(C()){break _;}m
=$z;l=g+a.qP|0;if(g>=8)l=1;if(l>=8)return;m=m.data;if(m[0]){j=c-1|0;$p=14;continue _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 13:$z=ACt(a,b,c,j,e);if(C()){break _;}j=$z;if(!j)return;$p=12;continue _;case 14:APe(a,b,j,d,e,l);if(C()){break _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 15:APe(a,b,j,d,e,l);if(C()){break _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e
=e+1|0;$p=21;continue _;case 16:APe(a,b,c,d,j,l);if(C()){break _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 17:AHe(a,b,c,d,e);if(C()){break _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 18:AKA(b,c,d,e,k);if(C()){break _;}Fo(b,c,d,e,a.b);j=a.b;$p=19;case 19:AHR(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 20:APB(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 21:APe(a,b,c,d,e,l);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function APe(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AL2(a,b,c,d,e);if(C()){break _;}g=$z;if(!g)return;$p=2;case 2:$z=ACB(b,c,d,e);if(C()){break _;}g=$z;if(g>0){if(a.b_!==BfW){L();h=BeT.data[g];$p=4;continue _;}JV(a,b,c,d,e);}g=a.b;$p=3;case 3:AI3(b,c,d,e,g,f);if(C()){break _;}return;case 4:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;$p=5;case 5:h.IR(b,c,d,e,g);if(C()){break _;}g
=a.b;$p=3;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANW(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=1000;i=0;j=R(g,1);k=R(g,3);l=R(g,2);m=c-1|0;n=e-1|0;o=d-1|0;p=R(f,4);q=f+1|0;a:{while(i<4){if(!(!i&&!j)){r=R(i,1);if(!(!r&&!g)){s=R(i,2);if(!(!s&&!k)){t=R(i,3);if(t)break a;if
(l)break a;}}}i=i+1|0;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;case 1:$z=ACt(a,b,u,d,r);if(C()){break _;}t=$z;if(!t){$p=2;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;continue _;case 2:$z=AB6(b,u,d,r);if(C()){break _;}v=$z;if(v!==a.b_){$p=3;continue _;}$p=4;continue _;case 3:$z=ACt(a,b,u,o,r);if(C()){break _;}t=$z;if(!t)return f;if
(p<0){$p=5;continue _;}c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;case 4:$z=AEN(b,u,d,r);if(C()){break _;}t=$z;if(t){$p=3;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1
|0;$p=1;continue _;case 5:$z=ANW(a,b,u,d,r,q,i);if(C()){break _;}t=$z;if(t<h)h=t;c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AK8(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;h=e-1|0;i=d-1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;case 1:$z
=ACt(a,b,l,d,m);if(C()){break _;}j=$z;if(!j){$p=2;continue _;}f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;continue _;case 2:$z=AB6(b,l,d,m);if(C()){break _;}n=$z;if(n!==a.b_){$p=3;continue _;}$p=4;continue _;case 3:$z=ACt(a,b,l,i,m);if(C()){break _;}j=$z;if(j){k=a.cT.data;j=1;$p=5;continue _;}a.cT.data[f]=0;f=f+1|0;if(f>=
4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 4:$z=AEN(b,l,d,m);if(C()){break _;}j=$z;if(j){$p=3;continue _;}f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f
==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 5:$z=ANW(a,b,l,d,m,j,f);if(C()){break _;}j=$z;k[f]=j;f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ACt(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACB(b,c,d,e);if(C()){break _;}f=$z;L();if(f!=Bha.b&&f!=Bg_.b&&f!=Bgg.b){if(!f)return 0;return BeT.data[f].b_.dv();}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AOQ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFj(a,b,c,d,e);if(C()){break _;}g=$z;if(g<0)return f;if(!g)a.mj=a.mj+1|0;if(g>=8)g=0;if(f>=0&&g>=f)g=f;return g;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AL2(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB6(b,c,d,e);if(C()){break _;}f=$z;if(f===a.b_)c=0;else{if(f!==BfW){$p=2;continue _;}c=0;}return c;case 2:$z=ACt(a,b,c,d,e);if(C()){break _;}c=$z;return c?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AB9(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APd(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACB(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b)Fo(b,c,d,e,a.b);return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AIP(){HU.call(this);}
function AXM(a,b){var c=new AIP();A2x(c,a,b);return c;}
function A2x(a,b,c){P7(a,b,c);Fg(a,0);}
function AGC(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APd(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACB(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return;$p=3;case 3:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;b.sn=1;f=a.b-1|0;$p=4;case 4:AJr(b,c,d,e,f,g);if(C()){break _;}Jn(b,c,d,e,c,d,e);Fo(b,c,d,e,a.b-1|0);b.sn=0;return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function I_(){P.call(this);}
var Be0=0;function BbH(a,b){var c=new I_();RI(c,a,b);return c;}
function RI(a,b,c){C8(a,b,c,Bhy);}
function ART(a,b,c,d,e){Fo(b,c,d,e,a.b);}
function ASi(a,b,c,d,e,f){Fo(b,c,d,e,a.b);}
function APE(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ACB(b,c,g,e);if(C()){break _;}g=$z;if(!g)g=1;else{L();if(g==Bgu.b)g=1;else{f=BeT.data[g].b_;g=f===BfV?1:f!==BfW?0:1;}}if(g&&d>=0){f=new JP;h=c+0.5;i=d+0.5;j=e+0.5;c=a.b;FC(f,b);f.oO=0;f.hU=c;f.mB=1;D2(f,0.9800000190734863,0.9800000190734863);f.c4=f.eO/2.0;k
=h;l=i;m=j;CT(f,k,l,m);f.g=0.0;f.i=0.0;f.h=0.0;f.i9=0;f.bS=k;f.cS=l;f.bR=m;if(!Be0){$p=2;continue _;}if(!f.cR){$p=3;continue _;}}return;case 2:AOl(b,f);if(C()){break _;}return;case 3:AMS(f);if(C()){break _;}if(f.cR)return;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function A31(a){return 3;}
function ACR(){Be0=0;}
function AG9(){I_.call(this);}
function BbQ(a,b){var c=new AG9();AV4(c,a,b);return c;}
function AV4(a,b,c){RI(a,b,c);}
function A_q(a,b,c){if(E(c,10))b=a.b;else{BB();b=BhE.cW;}return b;}
function Y3(){P.call(this);}
function SR(a,b){var c=new Y3();AZD(c,a,b);return c;}
function AZD(a,b,c){C8(a,b,c,Bhe);}
function A4s(a,b,c){b=a.b;L();if(b==Bfi.b){BB();b=BhF.cW;}else if(a.b!=Bg4.b)b=a.b;else{BB();b=BhG.cW;}return b;}
function A0b(a,b){return 1;}
function AFk(){P.call(this);}
function BcS(a){var b=new AFk();A_h(b,a);return b;}
function A_h(a,b){D1(a,b,Bhf);a.ba=20;}
function A81(a,b){return 1;}
function ATj(a,b,c){L();return Be6.b;}
function AVD(a,b){return b==1?21:b?20:21;}
function L0(){P.call(this);this.r3=0;}
function AQz(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ei(c,d,e);if(C()){break _;}g=$z;if(!a.r3&&g==a.b)return 0;$p=2;case 2:$z=AGz(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACJ(){L0.call(this);this.Cs=0;}
function BaM(a,b){var c=new ACJ();A05(c,a,b);return c;}
function A05(a,b,c){C8(a,b,c,Bhu);a.r3=0;a.Cs=c;Fg(a,1);}
function AID(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=AB6(b,c,g,e);if(C()){break _;}f=$z;if(f.dv())return;h=c-2|0;i=c+2|0;j=d+1|0;k=e-2|0;l=e+2|0;while(h<=i){m=g;while(m<=j){n=k;if(n<=l){$p=5;continue _;}m=m+1|0;}h=h+1|0;}$p=2;case 2:$z=AEN(b,c,d,e);if(C()){break _;}i=$z;$p=3;case 3:Yn(a,
b,c,d,e,i);if(C()){break _;}i=0;$p=4;case 4:APB(b,c,d,e,i);if(C()){break _;}return;case 5:$z=ACB(b,h,m,n);if(C()){break _;}o=$z;L();if(o==Be6.b)return;n=n+1|0;while(n>l){m=m+1|0;while(m>j){h=h+1|0;if(h>i){$p=2;continue _;}m=g;}n=k;}continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AW$(a,b){return E(b,10)?0:1;}
function A5h(a,b,c){L();return Be_.b;}
function A2V(a){return a.r3?0:1;}
function AKr(a,b){a.r3=b;a.ba=a.Cs+(!b?1:0)|0;}
function ASw(a,b,c,d,e,f){return;}
function ALj(){P.call(this);}
function Bbc(a){var b=new ALj();A8Y(b,a);return b;}
function A8Y(a,b){D1(a,b,Bhw);a.ba=48;}
function AKO(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;if(k<=e){$p=1;continue _;}j=j+1|0;}f=f+1|0;}return;case 1:$z=AB6(b,f,j,k);if(C()){break _;}l=$z;k=k+1|0;a:while(true){if(k<=e){continue _;}j=j+1|0;while(j>d){f=f+1|0;if(f>g)break a;j=h;}k=i;}return;default:Fa();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function ANy(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;if(l<=c){$p=1;continue _;}k=k+1|0;}f=f+1|0;}return;case 1:$z=ACB(b,f,k,l);if(C()){break _;}d=$z;$p=2;case 2:AHR(b,f,k,l,d);if(C()){break _;}l=l+1|0;a:while(true){if(l<=c){$p=1;continue _;}k=k+1|0;while(k>i){f
=f+1|0;if(f>g)break a;k=h;}l=j;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Nf(){P.call(this);this.CD=0;}
function A$g(a){return 0;}
function YD(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ei(c,d,e);if(C()){break _;}g=$z;if(!a.CD&&g==a.b)return 0;$p=2;case 2:$z=AGz(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQq(){Nf.call(this);}
function Ba$(a,b,c,d){var e=new AQq();A5k(e,a,b,c,d);return e;}
function A5k(a,b,c,d,e){C8(a,b,c,d);a.CD=e;}
function AWa(a,b){return 0;}
function AHh(){F4.call(this);}
function ATT(a,b){var c=new AHh();A_a(c,a,b);return c;}
function A_a(a,b,c){Lz(a,b,c);Bo(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AI_(a,b){L();return BgF.data[b];}
function ADn(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XF(b,c,d,e);if(C()){break _;}f=$z;if(f>13)return 0;d=d-1|0;$p=2;case 2:$z=ACB(b,c,d,e);if(C()){break _;}c=$z;return !AI_(a,c)?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ABA(){P.call(this);}
function AEF(a,b){var c=new ABA();AX1(c,a,b);return c;}
function AX1(a,b,c){D1(a,b,Bht);a.ba=c;}
function A4F(a,b){return b==1?a.ba-16|0:b?a.ba:a.ba+16|0;}
function Zm(){P.call(this);this.wB=0;}
function A9r(a,b){var c=new Zm();A6g(c,a,b);return c;}
function A6g(a,b,c){C8(a,b,6,Bhe);a.wB=c;if(!c)Bo(a,0.0,0.0,0.0,1.0,0.5,1.0);Gx(a,255);}
function A$P(a,b){return b>1?5:6;}
function A5W(a){return a.wB;}
function ABJ(a,b,c,d,e,f){L();}
function ABp(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();f=d-1|0;$p=1;case 1:$z=ACB(b,c,f,e);if(C()){break _;}g=$z;if(g!=BeY.b)return;g=0;$p=2;case 2:APB(b,c,d,e,g);if(C()){break _;}d=BeX.b;$p=3;case 3:APB(b,c,f,e,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZs(a,b,c){L();return BeY.b;}
function AXa(a){return a.wB;}
function ASI(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();if(a!==BeY){$p=1;continue _;}if(f==1)return 1;$p=2;continue _;case 1:AGz(a,b,c,d,e,f);if(C()){break _;}if(f==1)return 1;$p=2;case 2:$z=AGz(a,b,c,d,e,f);if(C()){break _;}g=$z;if(!g)c=0;else{if(f){$p=3;continue _;}c=1;}return c;case 3:$z=b.ei(c,d,e);if(C()){break _;}c=$z;return c==a.b?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AOk(){P.call(this);}
function BaN(a,b){var c=new AOk();A0w(c,a,b);return c;}
function A0w(a,b,c){C8(a,b,c,BhA);}
function A47(a,b){return !b?a.ba+2|0:b!=1?a.ba:a.ba+1|0;}
function AVf(a,b){return 0;}
function AGI(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=AWU(b,c+0.5,d+0.5,e+0.5);f.hs=E(b.q,f.hs/4|0)+(f.hs/8|0)|0;$p=1;case 1:AOl(b,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ASq(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=AWU(b,c+0.5,d+0.5,e+0.5);$p=1;case 1:AOl(b,g);if(C()){break _;}Dg(b,g,B(226),1.0,1.0);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADd(){P.call(this);}
function Bao(a,b){var c=new ADd();AUi(c,a,b);return c;}
function AUi(a,b,c){C8(a,b,c,Bhf);}
function A_e(a,b){return b>1?a.ba:4;}
function A4H(a,b){return 0;}
function XT(){LT.call(this);}
function Bbt(a,b){var c=new XT();AZy(c,a,b);return c;}
function AZy(a,b,c){AJa(a,b,c);}
function A3c(a,b){return 1;}
function AU1(a,b,c){L();return Bfp.b;}
function AOG(){P.call(this);}
function Bbf(a,b){var c=new AOG();A$3(c,a,b);return c;}
function A$3(a,b,c){C8(a,b,c,Bhz);Fg(a,1);}
function ANp(a,b,c,d,e){return null;}
function A2g(a){return 0;}
function AWf(a){return 0;}
function A01(a){return 2;}
function AMa(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAI(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;f=e+1|0;$p=4;case 4:$z=AAI(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;d=d-1|0;$p=5;case 5:$z=AAI(b,c,d,e);if(C()){break _;}c=$z;return c;default:
Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ANS(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;if(f==1){h=d-1|0;$p=2;continue _;}if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 2:$z=AAI(b,c,h,e);if(C()){break _;}h=$z;if(h)g=5;if(f==2){h=e+1|0;$p=3;continue _;}if(f==3)
{h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 3:$z=AAI(b,c,d,h);if(C()){break _;}h=$z;if(h)g=4;if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 4:$z=AAI(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 5:$z=AAI(b,h,d,e);if(C()){break _;}h=$z;if(h)g=2;if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 6:$z
=AAI(b,f,d,e);if(C()){break _;}f=$z;if(f)g=1;$p=7;case 7:AKA(b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ASg(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;if(g)return;$p=2;case 2:ABz(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABz(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=c+1|0;$p=2;continue _;}f=1;$p=3;continue _;case 2:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=e-1|0;$p=4;continue _;}f=2;$p=5;continue _;case 3:AKA(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 4:$z=AAI(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=e+1|0;$p=7;continue _;}f=3;$p=8;continue _;case 5:AKA(b,
c,d,e,f);if(C()){break _;}$p=6;case 6:AE_(a,b,c,d,e);if(C()){break _;}return;case 7:$z=AAI(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=d-1|0;$p=9;continue _;}f=4;$p=10;continue _;case 8:AKA(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 9:$z=AAI(b,c,f,e);if(C()){break _;}f=$z;if(!f){$p=6;continue _;}f=5;$p=11;continue _;case 10:AKA(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 11:AKA(b,c,d,e,f);if(C()){break _;}$p=6;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AKf(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE_(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;$p=2;case 2:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;h=0;f=c-1|0;$p=3;case 3:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==1)h=1;f=c+1|0;$p=4;case 4:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==2)h=1;f=e-1|0;$p=5;case 5:$z=AAI(b,c,d,f);if(C()){break _;}f=$z;if(!f&&
g==3)h=1;f=e+1|0;$p=6;case 6:$z=AAI(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==4)h=1;f=d-1|0;$p=7;case 7:$z=AAI(b,c,f,e);if(C()){break _;}f=$z;if(!f&&g==5)h=1;if(!h)return;$p=8;case 8:$z=AEN(b,c,d,e);if(C()){break _;}f=$z;$p=9;case 9:Yn(a,b,c,d,e,f);if(C()){break _;}f=0;$p=10;case 10:APB(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AE_(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AMa(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AEN(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yn(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APB(b,c,d,e,f);if(C()){break _;}return 0;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AKm(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}h=$z;if(h==1)Bo(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)Bo(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)Bo(a,0.3499999940395355,0.20000000298023224,
0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)Bo(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else Bo(a,0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);$p=2;case 2:$z=Ke(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AQs(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;m=j;BU(b,B(256),k,l,m,0.0,0.0,0.0);BU(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l
=i+0.2199999988079071;m=j;BU(b,B(256),k,l,m,0.0,0.0,0.0);BU(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==3){k=h;l=i+0.2199999988079071;m=j-0.27000001072883606;BU(b,B(256),k,l,m,0.0,0.0,0.0);BU(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g!=4){n=h;o=i;p=j;BU(b,B(256),n,o,p,0.0,0.0,0.0);BU(b,B(257),n,o,p,0.0,0.0,0.0);}else{k=h;l=i+0.2199999988079071;m=j+0.27000001072883606;BU(b,B(256),k,l,m,0.0,0.0,0.0);BU(b,B(257),k,l,m,0.0,0.0,0.0);}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AO6(){var a=this;P.call(a);a.sA=null;a.t8=null;}
function BcY(a,b){var c=new AO6();A3P(c,a,b);return c;}
function A3P(a,b,c){C8(a,b,c,Bhx);a.sA=$rt_createIntArray(256);a.t8=$rt_createIntArray(256);Hv(a,Be5.b,5,20);Hv(a,Be6.b,5,5);Hv(a,Be7.b,30,60);Hv(a,Bfn.b,30,20);Hv(a,Bfo.b,15,100);Hv(a,Bfh.b,30,60);Fg(a,1);}
function Hv(a,b,c,d){a.sA.data[b]=c;a.t8.data[b]=d;}
function ARH(a,b,c,d,e){return null;}
function A53(a){return 0;}
function A8A(a){return 0;}
function AXB(a){return 3;}
function AWK(a,b){return 0;}
function AZ9(a){return 20;}
function XS(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;h=R(g,15);if(h>=0){$p=2;continue _;}i=g+1|0;$p=3;continue _;case 2:$z=AM0(a,b,c,d,e);if(C()){break _;}i=$z;if(i){j=d-1|0;$p=4;continue _;}h=d-1|0;$p=5;continue _;case 3:AKA(b,
c,d,e,i);if(C()){break _;}Fo(b,c,d,e,a.b);$p=2;continue _;case 4:$z=AF4(a,b,c,j,e);if(C()){break _;}i=$z;if(!i&&!h&&!E(f,4)){h=0;$p=13;continue _;}if(!(g%5|0)&&g>5){h=c+1|0;i=300;$p=7;continue _;}return;case 5:$z=AAI(b,c,h,e);if(C()){break _;}h=$z;if(h&&g<=3)return;h=0;$p=6;case 6:APB(b,c,d,e,h);if(C()){break _;}return;case 7:YK(a,b,h,d,e,i,f);if(C()){break _;}i=c-1|0;g=300;$p=8;case 8:YK(a,b,i,d,e,g,f);if(C()){break _;}g=100;$p=9;case 9:YK(a,b,c,j,e,g,f);if(C()){break _;}k=d+1|0;g=200;$p=10;case 10:YK(a,b,
c,k,e,g,f);if(C()){break _;}l=e-1|0;g=300;$p=11;case 11:YK(a,b,c,d,l,g,f);if(C()){break _;}m=e+1|0;g=300;$p=12;case 12:YK(a,b,c,d,m,g,f);if(C()){break _;}n=d+4|0;a:{while(i<=h){o=l;while(o<=m){p=j;while(p<=n){if(i!=c)break a;if(p!=d)break a;if(o!=e)break a;p=p+1|0;}o=o+1|0;}i=i+1|0;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 13:APB(b,c,d,e,h);if(C()){break _;}return;case 14:$z=ACB(b,i,p,o);if(C()){break _;}r=$z;if(!r){r=i+1|0;$p=15;continue _;}if(0>0&&E(f,q)<=0){g=a.b;$p=21;continue _;}b:
{c:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break c;o=l;}p=j;}if(i!=c)break b;if(p!=d)break b;if(o==e)continue;else break b;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;continue _;case 15:$z=AGE(a,b,r,p,o,g);if(C()){break _;}g=$z;r=i-1|0;$p=16;case 16:$z=AGE(a,b,r,p,o,g);if(C()){break _;}g=$z;r=p-1|0;$p=17;case 17:$z=AGE(a,b,i,r,o,g);if(C()){break _;}g=$z;r=p+1|0;$p=18;case 18:$z=AGE(a,b,i,r,o,g);if(C()){break _;}g=$z;r=o-1|0;$p=19;case 19:$z=AGE(a,b,i,p,r,g);if(C()){break _;}r=$z;g
=o+1|0;$p=20;case 20:$z=AGE(a,b,i,p,g,r);if(C()){break _;}r=$z;if(r>0&&E(f,q)<=r){g=a.b;$p=21;continue _;}d:{b:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break b;o=l;}p=j;}if(i!=c)break d;if(p!=d)break d;if(o==e)continue;else break d;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 21:APB(b,i,p,o,g);if(C()){break _;}a:{d:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break d;o=l;}p=j;}if(i!=c)break a;if(p!=d)break a;if(o==e)continue;else break a;}return;}q
=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function YK(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.t8.data;$p=1;case 1:$z=ACB(b,c,d,e);if(C()){break _;}i=$z;j=h[i];if(E(g,f)>=j)return;$p=2;case 2:$z=ACB(b,c,d,e);if(C()){break _;}f=$z;L();i=f!=Bfo.b?0:1;if(E(g,2)){f=0;$p=3;continue _;}f=a.b;$p=4;continue _;case 3:APB(b,c,d,e,f);if(C()){break _;}if(!i)return;g=Bfo;f=0;$p=5;continue _;case 4:APB(b,c,d,e,f);if
(C()){break _;}if(!i)return;g=Bfo;f=0;$p=5;case 5:g.np(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AM0(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;$p=1;case 1:$z=AF4(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c-1|0;$p=2;case 2:$z=AF4(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=d-1|0;$p=3;case 3:$z=AF4(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=d+1|0;$p=4;case 4:$z=AF4(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=5;case 5:$z=AF4(a,b,c,d,f);if(C()){break _;}f=
$z;if(f)return 1;e=e+1|0;$p=6;case 6:$z=AF4(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function A3q(a){return 0;}
function AF4(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.sA.data;$p=1;case 1:$z=b.ei(c,d,e);if(C()){break _;}c=$z;return f[c]<=0?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AGE(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.sA.data;$p=1;case 1:$z=ACB(b,c,d,e);if(C()){break _;}c=$z;h=g[c];if(h>f)f=h;return f;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANv(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAI(b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AM0(a,b,c,d,e);if(C()){break _;}c=$z;return c?1:0;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ABF(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAI(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AM0(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return;f=0;$p=3;case 3:APB(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ACx(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAI(b,c,f,e);if(C()){break _;}f=$z;if(f){Fo(b,c,d,e,a.b);return;}$p=2;case 2:$z=AM0(a,b,c,d,e);if(C()){break _;}f=$z;if(f){Fo(b,c,d,e,a.b);return;}f=0;$p=3;case 3:APB(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ASx(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!E(f,24))Ex(b,c+0.5,d+0.5,e+0.5,B(258),1.0+N(f),N(f)*0.699999988079071+0.30000001192092896);g=d-1|0;$p=1;case 1:$z=AAI(b,c,g,e);if(C()){break _;}h=$z;if(h){g=0;i=c;j=d;k=e;while(g<3){BU(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,
0.0);g=g+1|0;}return;}L();l=Bgu;$p=2;case 2:$z=AF4(l,b,c,g,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;k=e;while(g<3){BU(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,0.0);g=g+1|0;}return;}l=Bgu;g=c-1|0;$p=3;case 3:a:{$z=AF4(l,b,g,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;m=d;n=e;while(true){if(g>=2)break a;j=i+N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BU(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgu;h=c+1|0;$p=4;case 4:a:{$z=AF4(l,b,h,d,e);if(C()){break _;}g=$z;if(g){g=0;i=h;m=d;n=e;while(true){if(g>=2)break a;j
=i-N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BU(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgu;g=e-1|0;$p=5;case 5:a:{$z=AF4(l,b,c,d,g);if(C()){break _;}g=$z;if(g){g=0;i=c;k=d;n=e;while(true){if(g>=2)break a;j=i+N(f);m=k+N(f);o=n+N(f)*0.10000000149011612;BU(b,B(255),j,m,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgu;g=e+1|0;$p=6;case 6:a:{$z=AF4(l,b,c,d,g);if(C()){break _;}h=$z;if(h){h=0;o=c;p=d;j=g;while(true){if(h>=2)break a;q=o+N(f);i=p+N(f);n=j-N(f)*0.10000000149011612;BU(b,B(255),q,i,n,0.0,0.0,0.0);h=h+1|0;}}}l=Bgu;d=
d+1|0;$p=7;case 7:a:{$z=AF4(l,b,c,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;n=e;while(true){if(g>=2)break a;q=i+N(f);k=j-N(f)*0.10000000149011612;o=n+N(f);BU(b,B(255),q,k,o,0.0,0.0,0.0);g=g+1|0;}}}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Eg(){P.call(this);}
function AOJ(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.ta();$p=1;case 1:AFX(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AL4(a,b,c,d,e){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFP(b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AAh(){Eg.call(this);}
function BcO(a,b){var c=new AAh();AUW(c,a,b);return c;}
function AUW(a,b,c){C8(a,b,c,Bhe);}
function AXn(a){return Bcx();}
function A58(a){return 0;}
function ZE(){P.call(this);this.cG=null;}
function A$S(a,b){var c=new ZE();A7d(c,a,b);return c;}
function A7d(a,b,c){C8(a,b,c.ba,c.b_);a.cG=c;BG(a,c.qe);Dm(a,c.nP/3.0);a.gK=c.gK;}
function A5L(a){return 0;}
function AV$(a){return 0;}
function AY2(a){return 10;}
function APF(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGz(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AJF(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}h=$z;if(!h){Bo(a,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bo(a,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bo(a,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;}Bo(a,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ALC(a,b,c,d,e,f,
g);if(C()){break _;}Bo(a,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ALC(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 4:ALC(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ALC(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 6:ALC(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ALC(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 8:ALC(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.5,1.0,
0.5,1.0);$p=9;case 9:ALC(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AHH(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=AB6(b,c,g,e);if(C()){break _;}h=$z;if(!h.dv()){$p=2;continue _;}i=a.cG.b;$p=11;continue _;case 2:AIw(a,b,c,d,e);if(C()){break _;}i=c+1|0;j=d-1|0;$p=3;case 3:AIw(a,b,i,j,e);if(C()){break _;}k=c-1|0;$p=4;case 4:AIw(a,b,k,j,e);if(C()){break _;}l=e-1|0;$p=5;case 5:AIw(a,
b,c,j,l);if(C()){break _;}m=e+1|0;$p=6;case 6:AIw(a,b,c,j,m);if(C()){break _;}$p=7;case 7:AIw(a,b,i,g,e);if(C()){break _;}$p=8;case 8:AIw(a,b,k,g,e);if(C()){break _;}$p=9;case 9:AIw(a,b,c,g,l);if(C()){break _;}$p=10;case 10:AIw(a,b,c,g,m);if(C()){break _;}h=a.cG;$p=12;continue _;case 11:APB(b,c,d,e,i);if(C()){break _;}h=a.cG;$p=12;case 12:h.e1(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIw(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=APQ(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;g=(-1);f=c+1|0;h=d+1|0;$p=2;case 2:$z=APQ(a,b,f,h,e);if(C()){break _;}i=$z;if(i)g=0;i=c-1|0;$p=3;case 3:$z=APQ(a,b,i,h,e);if(C()){break _;}j=$z;if(j)g=1;j=e+1|0;$p=4;case 4:$z=APQ(a,b,c,h,j);if(C()){break _;}k=$z;if(k)g=2;k=e-1|0;$p=
5;case 5:$z=APQ(a,b,c,h,k);if(C()){break _;}h=$z;if(h)g=3;if(g<0){$p=6;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 6:$z=ADD(a,b,f,d,e);if(C()){break _;}h=$z;if(h){$p=7;continue _;}$p=9;continue _;case 7:$z=ADD(a,b,i,d,e);if(C()){break _;}h=$z;if(!h)g=0;$p=9;continue _;case 8:$z=APQ(a,b,i,h,e);if(C()){break _;}i=$z;if(i)g=0;$p=12;continue _;case 9:$z=ADD(a,b,i,d,e);if(C()){break _;}h=$z;if(h){$p=10;continue _;}$p=13;continue _;case 10:$z=ADD(a,b,f,d,e);if(C()){break _;}h=
$z;if(!h)g=1;$p=13;continue _;case 11:AKA(b,c,d,e,g);if(C()){break _;}return;case 12:$z=APQ(a,b,f,h,e);if(C()){break _;}f=$z;if(f)g=1;$p=15;continue _;case 13:$z=ADD(a,b,c,d,j);if(C()){break _;}h=$z;if(h){$p=14;continue _;}$p=16;continue _;case 14:$z=ADD(a,b,c,d,k);if(C()){break _;}h=$z;if(!h)g=2;$p=16;continue _;case 15:$z=APQ(a,b,c,h,k);if(C()){break _;}f=$z;if(f)g=2;$p=18;continue _;case 16:$z=ADD(a,b,c,d,k);if(C()){break _;}h=$z;if(h){$p=17;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 17:$z
=ADD(a,b,c,d,j);if(C()){break _;}h=$z;if(!h)g=3;if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 18:$z=APQ(a,b,c,h,j);if(C()){break _;}f=$z;if(f)g=3;if(g<0)return;$p=11;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ADD(a,b,c,d,e){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB6(b,c,d,e);if(C()){break _;}b=$z;return b.dv();default:Fa();}}C3().s(a,b,c,d,e,$p);}
function APQ(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACB(b,c,d,e);if(C()){break _;}f=$z;if(!f)c=0;else{L();c=BeT.data[f].el()!=10?0:1;}return c;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function APi(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.kP(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABj(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.q9(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADs(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.np(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AM1(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.Cz(b,c,d,e);if(C()){break _;}g=$z;return g;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function A82(a,b){return a.cG.yo(b);}
function A8e(a){return a.cG.pR();}
function A4j(a,b,c){return a.cG.dW(b,c);}
function A0A(a,b){return a.cG.eG(b);}
function AXC(a,b,c){return a.cG.eY(b,c);}
function A7$(a,b){return a.cG.cj(b);}
function ANa(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:$z=g.uk(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AVN(a){return a.cG.mt();}
function AMl(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.oS(b,c,d,e);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ACN(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cG;$p=1;case 1:h.qE(b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYI(a){return a.cG.pf();}
function AYV(a,b,c){return a.cG.o6(b,c);}
function AMt(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.fT(b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ACI(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:AHH(a,b,c,d,e,f);if(C()){break _;}g=a.cG;$p=2;case 2:g.fE(b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function YH(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:f.ly(b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AHU(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cG;$p=1;case 1:h.HU(b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AM4(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.IR(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQX(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.oH(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQ2(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.e8(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGO(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:$z=g.lD(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function Zf(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:f.sL(b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AFV(){Eg.call(this);this.fm=null;}
function Bab(a){var b=new AFV();A69(b,a);return b;}
function A69(a,b){D1(a,b,Bhf);a.fm=new DA;a.ba=26;}
function AEC(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1)return a.ba-1|0;if(!f)return a.ba-1|0;g=e-1|0;$p=1;case 1:$z=b.ei(c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=b.ei(c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=b.ei(k,d,e);if(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=b.ei(m,
d,e);if(C()){break _;}n=$z;if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;L();if(BgF.data[h]&&!BgF.data[j])k=3;if(BgF.data[j]&&!BgF.data[h])k=2;if(BgF.data[l]&&!BgF.data[n])k=5;if(BgF.data[n]&&!BgF.data[l])k=4;return f!=k?a.ba:a.ba+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);c=l!=a.b?m:k;$p=7;continue _;}return a.ba;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);c=h!=a.b?i:g;$p=5;continue _;}return a.ba;case 5:$z=b.ei(k,d,c);if(C()){break _;}p=$z;if(h==a.b)i=g;$p=6;case 6:$z=b.ei(m,d,i);if(C()){break _;}m=$z;if(f==4)o=(-1)-o
|0;i=5;L();if(!(!BgF.data[l]&&!BgF.data[p])&&!BgF.data[n]&&!BgF.data[m])i=5;if(!(!BgF.data[n]&&!BgF.data[m])&&!BgF.data[l]&&!BgF.data[p])i=4;return (f!=i?a.ba+32|0:a.ba+16|0)+o|0;case 7:$z=b.ei(c,d,g);if(C()){break _;}g=$z;if(l==a.b)m=k;$p=8;case 8:$z=b.ei(m,d,i);if(C()){break _;}m=$z;if(f==3)o=(-1)-o|0;i=3;L();if(!(!BgF.data[h]&&!BgF.data[g])&&!BgF.data[j]&&!BgF.data[m])i=3;if(!(!BgF.data[j]&&!BgF.data[m])&&!BgF.data[h]&&!BgF.data[g])i=2;return (f!=i?a.ba+32|0:a.ba+16|0)+o|0;default:Fa();}}C3().s(a,b,c,d,e,
f,g,h,i,j,k,l,m,n,o,p,$p);}
function A9b(a,b){return b==1?a.ba-1|0:!b?a.ba-1|0:b!=3?a.ba:a.ba+1|0;}
function AJ7(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;$p=1;case 1:$z=ACB(b,g,d,e);if(C()){break _;}h=$z;if(h==a.b)f=1;h=c+1|0;$p=2;case 2:$z=ACB(b,h,d,e);if(C()){break _;}i=$z;if(i==a.b)f=f+1|0;i=e-1|0;$p=3;case 3:$z=ACB(b,c,d,i);if(C()){break _;}j=$z;if(j==a.b)f=f+1|0;k=e+1|0;$p=4;case 4:$z=ACB(b,c,d,k);if(C()){break _;}l=$z;if
(l==a.b)f=f+1|0;if(f>1)return 0;$p=5;case 5:$z=AI2(a,b,g,d,e);if(C()){break _;}j=$z;if(j)return 0;$p=6;case 6:$z=AI2(a,b,h,d,e);if(C()){break _;}e=$z;if(e)return 0;$p=7;case 7:$z=AI2(a,b,c,d,i);if(C()){break _;}e=$z;if(e)return 0;$p=8;case 8:$z=AI2(a,b,c,d,k);if(C()){break _;}c=$z;return c?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AI2(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACB(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return 0;f=c-1|0;$p=2;case 2:$z=ACB(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=c+1|0;$p=3;case 3:$z=ACB(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=e-1|0;$p=4;case 4:$z=ACB(b,c,d,f);if(C()){break _;}f=$z;if(f==a.b)return 1;e=e+1|0;$p=5;case 5:$z=ACB(b,c,d,e);if(C()){break _;}c
=$z;return c!=a.b?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ASK(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANB(b,c,d,e);if(C()){break _;}f=$z;g=f;h=0;i=27;j=c;k=d;l=e;while(h<i){f=Rh(g,h);if(f!==null){m=N(a.fm)*0.800000011920929+0.10000000149011612;n=N(a.fm)*0.800000011920929+0.10000000149011612;o
=N(a.fm)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;if(f.p>0){s=E(a.fm,21)+10|0;if(s>f.p)s=f.p;f.p=f.p-s|0;t=Hf(b,p,q,r,Ou(f.bB,s,f.em));t.g=CZ(a.fm)*0.05000000074505806;t.i=CZ(a.fm)*0.05000000074505806+0.20000000298023224;t.h=CZ(a.fm)*0.05000000074505806;$p=3;continue _;}}h=h+1|0;}$p=2;case 2:AL4(a,b,c,d,e);if(C()){break _;}return;case 3:AOl(b,t);if(C()){break _;}a:while(true){if(f.p>0){s=E(a.fm,21)+10|0;if(s>f.p)s=f.p;f.p=f.p-s|0;t=Hf(b,p,q,r,Ou(f.bB,s,f.em));t.g=CZ(a.fm)*0.05000000074505806;t.i
=CZ(a.fm)*0.05000000074505806+0.20000000298023224;t.h=CZ(a.fm)*0.05000000074505806;continue _;}while(true){h=h+1|0;if(h>=i)break a;f=Rh(g,h);if(f===null)continue;else break;}m=N(a.fm)*0.800000011920929+0.10000000149011612;n=N(a.fm)*0.800000011920929+0.10000000149011612;o=N(a.fm)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;}$p=2;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AF1(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANB(b,c,d,e);if(C()){break _;}g=$z;h=g;i=d+1|0;$p=2;case 2:$z=AAI(b,c,i,e);if(C()){break _;}j=$z;if(j)return 1;k=c-1|0;$p=3;case 3:$z=ACB(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){$p=5;continue _;}l=c+1|0;$p=4;case 4:$z=ACB(b,l,
d,e);if(C()){break _;}j=$z;if(j==a.b){$p=7;continue _;}m=e-1|0;$p=6;continue _;case 5:$z=AAI(b,k,i,e);if(C()){break _;}j=$z;if(j)return 1;l=c+1|0;$p=4;continue _;case 6:$z=ACB(b,c,d,m);if(C()){break _;}j=$z;if(j==a.b){$p=9;continue _;}n=e+1|0;$p=8;continue _;case 7:$z=AAI(b,l,i,e);if(C()){break _;}j=$z;if(j)return 1;m=e-1|0;$p=6;continue _;case 8:$z=ACB(b,c,d,n);if(C()){break _;}j=$z;if(j!=a.b){$p=10;continue _;}$p=11;continue _;case 9:$z=AAI(b,c,i,m);if(C()){break _;}j=$z;if(j)return 1;n=e+1|0;$p=8;continue _;case 10:$z
=ACB(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){g=new Ij;o=B(259);$p=12;continue _;}g=h;$p=13;continue _;case 11:$z=AAI(b,c,i,n);if(C()){break _;}j=$z;if(j)return 1;$p=10;continue _;case 12:$z=ANB(b,k,d,e);if(C()){break _;}p=$z;K8(g,o,p,h);$p=13;case 13:$z=ACB(b,l,d,e);if(C()){break _;}j=$z;if(j!=a.b){o=g;$p=15;continue _;}o=new Ij;p=B(259);g=g;$p=14;case 14:$z=ANB(b,l,d,e);if(C()){break _;}h=$z;K8(o,p,g,h);$p=15;case 15:$z=ACB(b,c,d,m);if(C()){break _;}e=$z;if(e==a.b){g=new Ij;p=B(259);$p=16;continue _;}g=o;$p
=17;continue _;case 16:$z=ANB(b,c,d,m);if(C()){break _;}h=$z;K8(g,p,h,o);$p=17;case 17:$z=ACB(b,c,d,n);if(C()){break _;}e=$z;if(e==a.b){o=new Ij;p=B(259);g=g;$p=18;continue _;}o=g;b=o;$p=19;continue _;case 18:$z=ANB(b,c,d,n);if(C()){break _;}b=$z;K8(o,p,g,b);b=o;$p=19;case 19:Y7(f,b);if(C()){break _;}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AZJ(a){return Bbk();}
function AKN(){P.call(this);}
function BbS(a,b){var c=new AKN();AUZ(c,a,b);return c;}
function AUZ(a,b,c){C8(a,b,c,Bhz);}
function AEZ(a,b,c,d,e){return null;}
function AT2(a){return 0;}
function A5j(a){return 0;}
function A7y(a){return 5;}
function A9V(a,b){return 1;}
function AUH(a){return 0;}
function AHA(){P.call(this);}
function Bbw(a){var b=new AHA();AZo(b,a);return b;}
function AZo(a,b){D1(a,b,Bhf);a.ba=59;}
function AWA(a,b){if(b==1)b=a.ba-16|0;else if(!b){L();b=Be5.cj(0);}else b=b!=2&&b!=4?a.ba:a.ba+1|0;return b;}
function AGV(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANu(f);if(C()){break _;}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AKM(){F4.call(this);}
function BcB(a,b){var c=new AKM();AZV(c,a,b);return c;}
function AZV(a,b,c){Lz(a,b,c);a.ba=c;Fg(a,1);Bo(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AYM(a,b){L();return b!=Bg8.b?0:1;}
function AJs(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJu(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=XF(b,c,g,e);if(C()){break _;}h=$z;if(h<9)return;$p=3;case 3:$z=AEN(b,c,d,e);if(C()){break _;}h=$z;if(h>=7)return;$p=4;case 4:$z=Zh(a,b,c,d,e);if(C()){break _;}i=$z;if(E(f,100.0/i|0))return;g=h+1|0;$p=5;case 5:AKA(b,c,d,e,g);if(C()){break _;}return;default:
Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Zh(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;g=e-1|0;$p=1;case 1:$z=ACB(b,c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=ACB(b,c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=ACB(b,k,d,e);if
(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=ACB(b,m,d,e);if(C()){break _;}n=$z;$p=5;case 5:$z=ACB(b,k,d,g);if(C()){break _;}o=$z;$p=6;case 6:$z=ACB(b,m,d,g);if(C()){break _;}p=$z;$p=7;case 7:$z=ACB(b,m,d,i);if(C()){break _;}q=$z;$p=8;case 8:$z=ACB(b,k,d,i);if(C()){break _;}r=$z;s=l!=a.b&&n!=a.b?0:1;t=h!=a.b&&j!=a.b?0:1;u=o!=a.b&&p!=a.b&&q!=a.b&&r!=a.b?0:1;o=d-1|0;while(k<=m){v=g;if(v<=i){$p=9;continue _;}k=k+1|0;}a:{if(!u){if(!s)break a;if(!t)break a;}f=f/2.0;}return f;case 9:$z=ACB(b,k,o,v);if(C()){break _;}w
=$z;x=0.0;L();if(w==Bg8.b){x=1.0;$p=10;continue _;}if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){continue _;}k=k+1|0;if(k>m)break;v=g;}b:{if(!u){if(!s)break b;if(!t)break b;}f=f/2.0;}return f;case 10:$z=AEN(b,k,o,v);if(C()){break _;}d=$z;if(d>0)x=3.0;if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){$p=9;continue _;}k=k+1|0;if(k>m)break;v=g;}c:{if(!u){if(!s)break c;if(!t)break c;}f=f/2.0;}return f;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function A8y(a,b,c){if(c<0)c=7;return a.ba+c|0;}
function A4J(a){return 6;}
function AND(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;h=c;i=d;j=e;while(g<3){if(E(b.q,15)<=f){k=N(b.q)*0.699999988079071+0.15000000596046448;l=N(b.q)*0.699999988079071+0.15000000596046448;m=N(b.q)*0.699999988079071+0.15000000596046448;n=new E_;o=h+k;p=i+l;q=j+m;r=new Cc;BB();DD(r,
BhH);He(n,b,o,p,q,r);n.hb=10;$p=1;continue _;}g=g+1|0;}return;case 1:AOl(b,n);if(C()){break _;}while(true){g=g+1|0;if(g>=3)break;if(E(b.q,15)>f)continue;else{k=N(b.q)*0.699999988079071+0.15000000596046448;l=N(b.q)*0.699999988079071+0.15000000596046448;m=N(b.q)*0.699999988079071+0.15000000596046448;n=new E_;o=h+k;p=i+l;q=j+m;r=new Cc;BB();DD(r,BhH);He(n,b,o,p,q,r);n.hb=10;continue _;}}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A04(a,b,c){var d;c=Dy();d=new T;V(d);Co(c,U(Bf(J(d,B(260)),b)));if(b!=7)b=(-1);else{BB();b=BhI.cW;}return b;}
function A40(a,b){return 1;}
function AQU(){P.call(this);}
function Bb4(a){var b=new AQU();A2Q(b,a);return b;}
function A2Q(a,b){D1(a,b,Bhs);a.ba=87;Fg(a,1);Bo(a,0.0,0.0,0.0,1.0,0.9375,1.0);Gx(a,255);}
function AA$(a,b,c,d,e){return D4(c+0|0,d+0|0,e+0|0,c+1|0,d+1|0,e+1|0);}
function AU8(a){return 0;}
function A1G(a){return 0;}
function A_p(a,b,c){b=R(b,1);return !b&&c>0?a.ba-1|0:b?2:a.ba;}
function ANi(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(f,5))return;g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;a:while(true){if(g>h){if(!0){$p=1;continue _;}g=7;$p=2;continue _;}l=d;while(l<=i){m=j;if(m<=k)break a;l=l+1|0;}g=g+1|0;}$p=4;continue _;case 1:$z=AEN(b,c,d,e);if(C()){break _;}h=$z;if(h>0){g=h-1|0;$p=3;continue _;}g
=c-0|0;h=c+0|0;m=e-0|0;j=e+0|0;while(true){if(g>h){if(0)return;L();g=BeW.b;$p=5;continue _;}l=m;if(l<=j)break;g=g+1|0;}$p=6;continue _;case 2:AKA(b,c,d,e,g);if(C()){break _;}return;case 3:AKA(b,c,d,e,g);if(C()){break _;}return;case 4:$z=AB6(b,g,l,m);if(C()){break _;}f=$z;if(f===BfV)g=1;else{m=m+1|0;b:while(true){if(m<=k){continue _;}l=l+1|0;while(l>i){g=g+1|0;if(g>h)break b;l=d;}m=j;}g=0;}if(!g){$p=1;continue _;}g=7;$p=2;continue _;case 5:APB(b,c,d,e,g);if(C()){break _;}return;case 6:$z=ACB(b,g,i,l);if(C())
{break _;}n=$z;L();if(n==Bg7.b)g=1;else{l=l+1|0;while(true){if(l<=j){continue _;}g=g+1|0;if(g>h)break;l=m;}g=0;}if(g)return;L();g=BeW.b;$p=5;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AKT(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(b.q,4))return;L();g=BeW.b;$p=1;case 1:APB(b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function Ye(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d+1|0;$p=1;case 1:$z=AB6(b,c,f,e);if(C()){break _;}g=$z;if(!g.dv())return;L();f=BeW.b;$p=2;case 2:APB(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AW7(a,b,c){L();return BeW.dW(0,c);}
function AF6(){Eg.call(this);this.wz=0;}
function A4Q(a,b){var c=new AF6();ATW(c,a,b);return c;}
function ATW(a,b,c){D1(a,b,Bhe);a.wz=c;a.ba=45;}
function ACz(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AOJ(a,b,c,d,e);if(C()){break _;}f=e-1|0;$p=2;case 2:$z=ACB(b,c,d,f);if(C()){break _;}g=$z;f=e+1|0;$p=3;case 3:$z=ACB(b,c,d,f);if(C()){break _;}f=$z;h=c-1|0;$p=4;case 4:$z=ACB(b,h,d,e);if(C()){break _;}h=$z;i=c+1|0;$p=5;case 5:$z=ACB(b,i,d,e);if(C()){break _;}i=$z;j=3;L();if(BgF.data[g]&&!BgF.data[f])j
=3;if(BgF.data[f]&&!BgF.data[g])j=2;if(BgF.data[h]&&!BgF.data[i])j=5;if(BgF.data[i]&&!BgF.data[h])j=4;$p=6;case 6:AKA(b,c,d,e,j);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AKj(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1){L();return BeZ.ba;}if(!f){L();return BeZ.ba;}$p=1;case 1:$z=b.eH(c,d,e);if(C()){break _;}g=$z;return f!=g?a.ba:!a.wz?a.ba-1|0:a.ba+16|0;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEq(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.wz)return;$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.0+N(f)*6.0/16.0;j=e+0.5;k=N(f)*0.6000000238418579-0.30000001192092896;if(g==4){l=h-0.5199999809265137;m=i;n=j+k;BU(b,B(256),l,m,n,0.0,0.0,0.0);BU(b,B(257),
l,m,n,0.0,0.0,0.0);}else if(g==5){l=h+0.5199999809265137;m=i;n=j+k;BU(b,B(256),l,m,n,0.0,0.0,0.0);BU(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==2){l=h+k;m=i;n=j-0.5199999809265137;BU(b,B(256),l,m,n,0.0,0.0,0.0);BU(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==3){o=h+k;p=i;q=j+0.5199999809265137;BU(b,B(256),o,p,q,0.0,0.0,0.0);BU(b,B(257),o,p,q,0.0,0.0,0.0);}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AU3(a,b){if(b==1){L();b=BeZ.b;}else if(!b){L();b=BeZ.b;}else b=b!=3?a.ba:a.ba-1|0;return b;}
function AGY(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANB(b,c,d,e);if(C()){break _;}b=$z;g=b;$p=2;case 2:AO8(f,g);if(C()){break _;}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function A7_(a){return BaG();}
function VA(){var a=this;Eg.call(a);a.Dd=null;a.Dw=0;}
function BhJ(a,b,c){var d=new VA();AHx(d,a,b,c);return d;}
function AHx(a,b,c,d){D1(a,b,Bhf);a.ba=4;a.Dd=c;Bo(a,0.25,0.0,0.25,0.75,1.625,0.75);a.Dw=d;}
function AYR(a){return (-1);}
function A6d(a){return 0;}
function A59(a){return 0;}
function A1R(a){var b,c,$$je;a:{try{b=Zv(a.Dd);}catch($$e){$$je=Bj($$e);if($$je instanceof BO){b=$$je;break a;}else{throw $$e;}}return b;}c=new B6;WZ(c,b);M(c);}
function AGR(a,b,c,d,e){return 1;}
function A8H(a,b,c){return a.Dw;}
function ZZ(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAI(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEN(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yn(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APB(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function D$(){var a=this;D.call(a);a.ci=null;a.dK=0;a.dI=0;a.dR=0;}
var BhK=null;var BhL=null;function BhM(){var a=new D$();ANz(a);return a;}
function ANz(a){return;}
function J3(b,c){var d;if(!D0(BhL,c)){BP(BhK,c,b);BP(BhL,b,c);return;}b=new Cb;d=new T;V(d);Bl(b,U(J(J(d,B(261)),c)));M(b);}
function AFO(a){return;}
function AMk(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ci;c=a.dK;d=a.dI;e=a.dR;$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function ACk(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ci;c=a.dK;d=a.dI;e=a.dR;$p=1;case 1:AGy(b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AK7(a,b,c,d){var e,f,g;e=a.dK+0.5-b;f=a.dI+0.5-c;g=a.dR+0.5-d;return e*e+f*f+g*g;}
function AFv(){BhK=Dd();BhL=Dd();J3(F(W2),B(262));J3(F(Tl),B(263));J3(F(Jk),B(264));J3(F(NC),B(265));}
function Jk(){var a=this;D$.call(a);a.gr=null;a.rB=0;}
function BhN(){var a=new Jk();AZ5(a);return a;}
function AZ5(a){var b,c;b=I(B2,4);c=b.data;c[0]=B(3);c[1]=B(3);c[2]=B(3);c[3]=B(3);a.gr=b;a.rB=(-1);}
function Bc(){var a=this;D.call(a);a.cW=0;a.eZ=0;a.ff=0;a.tc=0;}
var BhO=null;var Bhj=null;var BhP=null;var BhQ=null;var BhR=null;var BhS=null;var BhT=null;var BhU=null;var Bgi=null;var BhF=null;var BhG=null;var BhV=null;var BhW=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;var Bh1=null;var Bh2=null;var Bh3=null;var Bh4=null;var Bh5=null;var Bh6=null;var Bh7=null;var Bh8=null;var Bh9=null;var Bh$=null;var Bh_=null;var Bia=null;var Bib=null;var Bic=null;var Bid=null;var Bie=null;var Bgk=null;var Bgh=null;var Bgj=null;var Bif=null;var Big=null;var Bih=null;var Bii
=null;var Bij=null;var BhH=null;var BhI=null;var Bik=null;var Bil=null;var Bim=null;var Bin=null;var Bio=null;var Bip=null;var Biq=null;var Bir=null;var Bis=null;var Bit=null;var Biu=null;var Biv=null;var Biw=null;var Bix=null;var Biy=null;var Biz=null;var BiA=null;var BiB=null;var BiC=null;var BiD=null;var BiE=null;var BhE=null;var Bgl=null;var BiF=null;var BiG=null;var BiH=null;var Bhi=null;var BiI=null;var BiJ=null;var BiK=null;var BiL=null;var BiM=null;var BiN=null;function BB(){BB=Bt(Bc);A7O();}
function EX(a){var b=new Bc();Dr(b,a);return b;}
function Dr(a,b){var c,d,e;BB();a.eZ=64;a.ff=32;c=256+b|0;a.cW=c;if(Bhj.data[c]!==null){d=Dy();e=new T;V(e);Co(d,U(Bf(J(e,B(266)),b)));}Bhj.data[c]=a;}
function Bp(a,b){a.tc=b;return a;}
function A5E(a,b){return a.tc;}
function AGx(a,b,c,d,e,f,g,h){return 0;}
function A$Q(a,b,c){return 1.0;}
function ASo(a,b,c,d){return b;}
function A2D(a){return a.eZ;}
function A7U(a){return a.ff;}
function AWe(a,b,c){return;}
function A5b(a,b,c,d,e,f){return;}
function A_w(a,b){return 1;}
function AV7(a,b){return 0;}
function A3N(a,b,c){return;}
function A7O(){var b;BhO=Bbp();Bhj=I(Bc,1024);BhP=Bp(LN(0,2),82);BhQ=Bp(Oi(1,2),98);BhR=Bp(NN(2,2),114);BhS=Bp(Bbg(3),5);BhT=Bp(OE(4,4),10);BhU=Bp(Ban(5),21);Bgi=Bp(EX(6),37);BhF=Bp(EX(7),7);BhG=Bp(EX(8),55);BhV=Bp(EX(9),23);BhW=Bp(EX(10),39);BhX=Bp(NB(11,2),66);BhY=Bp(NB(12,0),64);BhZ=Bp(LN(13,0),80);Bh0=Bp(Oi(14,0),96);Bh1=Bp(NN(15,0),112);Bh2=Bp(NB(16,1),65);Bh3=Bp(LN(17,1),81);Bh4=Bp(Oi(18,1),97);Bh5=Bp(NN(19,1),113);Bh6=Bp(NB(20,3),67);Bh7=Bp(LN(21,3),83);Bh8=Bp(Oi(22,3),99);Bh9=Bp(NN(23,3),115);Bh$=Bp(EX(24),
53);Bh_=Bp(EX(25),71);Bia=Bp(BcI(26,10),72);Bib=Bp(NB(27,0),68);Bic=Bp(LN(28,0),84);Bid=Bp(Oi(29,0),100);Bie=Bp(NN(30,0),116);Bgk=Bp(EX(31),8);Bgh=Bp(EX(32),24);Bgj=Bp(EX(33),40);Bif=Bp(Ny(34,0),128);Big=Bp(Ny(35,1),129);Bih=Bp(Ny(36,2),130);Bii=Bp(Ny(37,3),131);Bij=Bp(Ny(38,4),132);b=new V2;L();AHN(b,39,Bg7.b);BhH=Bp(b,9);BhI=Bp(EX(40),25);Bik=Bp(OE(41,5),41);Bil=Bp(Da(42,0,0,0),0);Bim=Bp(Da(43,0,0,1),16);Bin=Bp(Da(44,0,0,2),32);Bio=Bp(Da(45,0,0,3),48);Bip=Bp(Da(46,1,1,0),1);Biq=Bp(Da(47,1,1,1),17);Bir=Bp(Da(48,
1,1,2),33);Bis=Bp(Da(49,1,1,3),49);Bit=Bp(Da(50,2,2,0),2);Biu=Bp(Da(51,2,2,1),18);Biv=Bp(Da(52,2,2,2),34);Biw=Bp(Da(53,2,2,3),50);Bix=Bp(Da(54,3,3,0),3);Biy=Bp(Da(55,3,3,1),19);Biz=Bp(Da(56,3,3,2),35);BiA=Bp(Da(57,3,3,3),51);BiB=Bp(Da(58,1,4,0),4);BiC=Bp(Da(59,1,4,1),20);BiD=Bp(Da(60,1,4,2),36);BiE=Bp(Da(61,1,4,3),52);BhE=Bp(EX(62),6);Bgl=Bp(OE(63,3),87);BiF=Bp(OE(64,8),88);BiG=Bp(Bal(65),26);BiH=Bp(OE(66,42),11);Bhi=Bp(Bcn(67),42);BiI=Bp(A_X(68),43);BiJ=Bp(AP3(69,0),74);BiK=Bp(AP3(70,Bf3.b),75);BiL=Bp(AP3(71,
Bf4.b),76);BiM=Bp(BbR(72),135);BiN=Bp(Bc2(73),104);}
function AIC(){P.call(this);}
function Bai(a){var b=new AIC();A2i(b,a);return b;}
function A2i(a,b){D1(a,b,Bhf);a.ba=97;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function A$w(a,b,c){var d,e;if(b&&b!=1){d=Ps(a,c);if((d&&d!=2?0:1)^(b>3?0:1))return a.ba;b=((d/2|0)+(b&1^d)|0)+((c&4)/4|0)|0;e=a.ba-((c&8)*2|0)|0;if(b&1)e= -e;return e;}return a.ba;}
function A0X(a){return 0;}
function AXw(a){return 0;}
function ATS(a){return 7;}
function AGv(a,b,c,d,e){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHJ(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=K9(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function ZG(a,b,c,d,e){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHJ(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Np(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AHJ(a,b,c,d,e){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eH(c,d,e);if(C()){break _;}c=$z;AO7(a,Ps(a,c));return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AO7(a,b){Bo(a,0.0,0.0,0.0,1.0,2.0,1.0);if(!b)Bo(a,0.0,0.0,0.0,1.0,1.0,0.1875);if(b==1)Bo(a,0.8125,0.0,0.0,1.0,1.0,1.0);if(b==2)Bo(a,0.0,0.0,0.8125,1.0,1.0,1.0);if(b==3)Bo(a,0.0,0.0,0.0,0.1875,1.0,1.0);}
function AJ1(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ADX(a,b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ADX(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;if(!(g&8)){h=d+1|0;$p=2;continue _;}d=d-1|0;$p=3;continue _;case 2:$z=ACB(b,c,h,e);if(C()){break _;}i=$z;if(i!=a.b){h=g^4;$p=4;continue _;}i=(g^4)+8|0;$p=5;continue _;case 3:$z=ACB(b,c,d,e);if(C()){break _;}h=$z;if(h!=a.b)return 1;$p=6;continue _;case 4:AKA(b,c,d,e,h);if
(C()){break _;}Jn(b,c,d-1|0,e,c,d,e);if(BN()>=0.5)Ex(b,c+0.5,d+0.5,e+0.5,B(267),1.0,N(b.q)*0.10000000149011612+0.8999999761581421);else Ex(b,c+0.5,d+0.5,e+0.5,B(268),1.0,N(b.q)*0.10000000149011612+0.8999999761581421);return 1;case 5:AKA(b,c,h,e,i);if(C()){break _;}h=g^4;$p=4;continue _;case 6:ADX(a,b,c,d,e,f);if(C()){break _;}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ACD(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;if(g&8){f=d-1|0;$p=3;continue _;}h=0;f=d+1|0;$p=2;case 2:$z=ACB(b,c,f,e);if(C()){break _;}i=$z;if(i!=a.b){i=0;$p=4;continue _;}i=d-1|0;$p=6;continue _;case 3:$z=ACB(b,c,f,e);if(C()){break _;}f=$z;if(f==a.b)return;f=0;$p=5;continue _;case 4:APB(b,c,d,e,i);if(C()){break _;}h
=1;i=d-1|0;$p=6;continue _;case 5:APB(b,c,d,e,f);if(C()){break _;}return;case 6:$z=AAI(b,c,i,e);if(C()){break _;}i=$z;if(!i){i=0;$p=7;continue _;}if(!h)return;$p=10;continue _;case 7:APB(b,c,d,e,i);if(C()){break _;}h=1;$p=8;case 8:$z=ACB(b,c,f,e);if(C()){break _;}i=$z;if(i==a.b){i=0;$p=9;continue _;}if(!h)return;$p=10;continue _;case 9:APB(b,c,f,e,i);if(C()){break _;}if(!h)return;$p=10;case 10:Yn(a,b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A8G(a,b,c){if(b&8)b=0;else{BB();b=BiI.cW;}return b;}
function XL(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHJ(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Ke(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function Ps(a,b){return b&4?b&3:(b-1|0)&3;}
function AJ6(a,b,c,d,e){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=127)return 0;d=d-1|0;$p=1;case 1:$z=AAI(b,c,d,e);if(C()){break _;}c=$z;return !c?0:1;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AC6(){P.call(this);}
function Bcq(a,b){var c=new AC6();AUT(c,a,b);return c;}
function AUT(a,b,c){C8(a,b,c,Bhz);}
function ADj(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bo(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bo(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bo(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bo(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Np(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AD$(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bo(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bo(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bo(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bo(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=K9(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AW1(a){return 0;}
function A50(a){return 0;}
function A9E(a){return 8;}
function ANY(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAI(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;e=e+1|0;$p=4;case 4:$z=AAI(b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function Yu(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;if(g&&f!=2){if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;continue _;}h=e+1|0;$p=2;case 2:$z=AAI(b,c,d,h);if(C()){break _;}h=$z;if(h)g=2;if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h
=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;case 3:$z=AAI(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;case 4:$z=AAI(b,h,d,e);if(C()){break _;}h=$z;if(h)g=4;if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;case 5:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if(f)g=5;$p=6;case 6:AKA(b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKQ(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;h=0;if(g==2){f=e+1|0;$p=2;continue _;}if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 2:$z=AAI(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if
(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 3:$z=AAI(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 4:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 5:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(h)return;$p=6;case 6:Yn(a,b,c,d,e,g);if(C()){break _;}f=0;$p=7;case 7:APB(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function A5y(a,b){return 1;}
function AN1(){P.call(this);}
function Ba4(a,b){var c=new AN1();A_b(c,a,b);return c;}
function A_b(a,b,c){C8(a,b,c,Bhz);Bo(a,0.0,0.0,0.0,1.0,0.125,1.0);}
function ACH(a,b,c,d,e){return null;}
function AWC(a){return 0;}
function ALH(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMq(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Ke(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AMq(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eH(c,d,e);if(C()){break _;}f=$z;if(f>=2&&f<=5)Bo(a,0.0,0.0,0.0,1.0,0.625,1.0);else Bo(a,0.0,0.0,0.0,1.0,0.125,1.0);return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function A2G(a,b,c){return c<6?a.ba:a.ba-16|0;}
function A3G(a){return 0;}
function A0C(a){return 9;}
function A2N(a,b){return 1;}
function AN0(a,b,c,d,e){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=AAI(b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function ANJ(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=15;$p=1;case 1:AKA(b,c,d,e,f);if(C()){break _;}g=new H$;$p=2;case 2:YX(g,a,b,c,d,e);if(C()){break _;}$p=3;case 3:YW(g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AJT(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEN(b,c,d,e);if(C()){break _;}g=$z;h=0;f=d-1|0;$p=2;case 2:$z=AAI(b,c,f,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==2){f=c+1|0;$p=3;continue _;}if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 3:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if
(!f)h=1;if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 4:$z=AAI(b,f,d,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 5:$z=AAI(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 6:$z=AAI(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(!h)return;$p=7;case 7:$z=AEN(b,c,d,e);if(C())
{break _;}f=$z;$p=8;case 8:Yn(a,b,c,d,e,f);if(C()){break _;}f=0;$p=9;case 9:APB(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ASG(){Bc.call(this);this.nS=0;}
function Baa(a){var b=new ASG();A2S(b,a);return b;}
function A2S(a,b){Dr(a,b);b=b+256|0;a.nS=b;L();a.tc=BeT.data[b].cj(2);}
function AQr(a,b,c,d,e,f,g,h){var i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;if(!b.p)return 0;i=a.nS;j=0;$p=1;case 1:$z=AId(d,i,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;L();k=BeT.data[a.nS];j=a.nS;$p=2;case 2:$z=APB(d,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;c=BeT.data[a.nS];$p
=3;case 3:c.vc(d,e,f,g,h);if(C()){break _;}Ex(d,e+0.5,f+0.5,g+0.5,Kk(k.gK),(k.gK.oP+1.0)/2.0,k.gK.pN*0.800000011920929);b.p=b.p-1|0;return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AHL(){MY.call(this);}
function A1L(){var a=new AHL();A1Y(a);return a;}
function A1Y(a){var b,c,d,e;b=I(B2,0);c=b.data;R5(B(24));d=c.length;e=0;while(e<d){R5(c[e]);e=e+1|0;}a.wt=B(24);a.H7=b.oX();}
function AFz(a){var b;b=new Rm;b.lg=B(269);b.mU=BiO;b.rz=BiO;b.H0=a;b.BW=0.3333333432674408;b.F_=0.5;return b;}
function AG8(a){var b,c,d,e,f;b=new PV;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.vv=BiO;b.uP=BiO;e=d.length;if(e&&e>=b.BP){b.HB=a;b.uC=c.oX();b.GE=2.0;b.BP=4.0;return b;}f=new Cb;Bl(f,B(270));M(f);}
function M$(){var a=this;Fm.call(a);a.d8=0;a.cq=null;a.kK=null;}
function AMH(b,c,d){return A5F(0,b.data.length,b,c,c+d|0,0,0);}
function AAx(b){return AMH(b,0,b.data.length);}
function AKl(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BM;i=new T;V(i);Bl(h,U(Bf(J(Bf(J(i,B(271)),g),B(248)),f)));M(h);}if(Cs(a)<d){i=new Gt;O(i);M(i);}if(d<0){i=new BM;h=new T;V(h);Bl(i,U(J(Bf(J(h,B(249)),d),B(250))));M(i);}g=a.bj+a.d8|0;j=0;while(j<d){k=c+1|0;b=a.cq.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.bj=a.bj+d|0;return a;}}b=b.data;h=new BM;i=new T;V(i);Bl(h,U(J(Bf(J(Bf(J(i,B(251)),c),B(244)),b.length),B(27))));M(h);}
function W3(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.mN){e=new FV;O(e);M(e);}if(Cs(a)<d){e=new Hc;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BM;i=new T;V(i);Bl(e,U(Bf(J(Bf(J(i,B(272)),h),B(248)),g)));M(e);}if(d<0){e=new BM;i=new T;V(i);Bl(e,U(J(Bf(J(i,B(249)),d),B(250))));M(e);}h=a.bj+a.d8|0;j=0;while(j<d){b=a.cq.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.bj=a.bj+d|0;return a;}}b=b.data;i=new BM;e=new T;V(e);Bl(i,U(J(Bf(J(Bf(J(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function UT(a,b){return W3(a,b,0,b.data.length);}
function A9A(a,b){a.kK=b;return a;}
function AT1(a){EA(a);return a;}
function A5t(a,b){Nr(a,b);return a;}
function A0T(a,b){EO(a,b);return a;}
function Nl(){L_.call(this);}
function Ju(a){var b,c;if(a.bj<a.cy){b=a.bj;a.bj=b+1|0;return RL(a,b);}c=new Gt;O(c);M(c);}
function CJ(a,b){var c,d;if(AKv(a)){c=new FV;O(c);M(c);}if(a.bj<a.cy){d=a.bj;a.bj=d+1|0;ADV(a,d,b);return a;}c=new Hc;O(c);M(c);}
function AKv(a){return a.xw;}
function WT(){var a=this;Nl.call(a);a.xw=0;a.yn=0;a.xp=null;}
function RL(a,b){return a.xp.data[b+a.yn|0];}
function ADV(a,b,c){a.xp.data[b+a.yn|0]=c;}
function A8D(a){return a.xw;}
function ARq(){var a=this;M$.call(a);a.Gp=0;a.mN=0;}
function A5F(a,b,c,d,e,f,g){var h=new ARq();ATm(h,a,b,c,d,e,f,g);return h;}
function ATm(a,b,c,d,e,f,g,h){KR(a,c);a.kK=Bgs;a.d8=b;a.cq=d;a.bj=e;a.cy=f;a.Gp=g;a.mN=h;}
function ALS(a){var b,c,d,e;if(a.bj>=a.cy){b=new Gt;O(b);M(b);}c=a.cq.data;d=a.d8;e=a.bj;a.bj=e+1|0;return c[d+e|0];}
function A1u(a){return a.mN;}
function KS(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.cy){c=a.cq.data[a.d8+b|0]&255;d=a.cq.data[(a.d8+b|0)+1|0]&255;e=a.cq.data[(a.d8+b|0)+2|0]&255;f=a.cq.data[(a.d8+b|0)+3|0]&255;if(a.kK!==Bgs)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BM;h=new T;V(h);Bl(g,U(J(Bf(J(Bf(J(h,B(273)),b),B(244)),a.cy-3|0),B(27))));M(g);}
function ABa(a,b,c){var d,e;if(a.mN){d=new FV;O(d);M(d);}if(b>=0&&(b+3|0)<a.cy){if(a.kK!==Bgs){a.cq.data[a.d8+b|0]=c<<24>>24;a.cq.data[(a.d8+b|0)+1|0]=c>>8<<24>>24;a.cq.data[(a.d8+b|0)+2|0]=c>>16<<24>>24;a.cq.data[(a.d8+b|0)+3|0]=c>>24<<24>>24;}else{a.cq.data[a.d8+b|0]=c>>24<<24>>24;a.cq.data[(a.d8+b|0)+1|0]=c>>16<<24>>24;a.cq.data[(a.d8+b|0)+2|0]=c>>8<<24>>24;a.cq.data[(a.d8+b|0)+3|0]=c<<24>>24;}return a;}e=new BM;d=new T;V(d);Bl(e,U(J(Bf(J(Bf(J(d,B(273)),b),B(244)),a.cy-3|0),B(27))));M(e);}
function AHO(a){var b,c;b=Cs(a)/4|0;if(a.kK!==Bgs){c=new Pi;OQ(c,a.d8+a.bj|0,b,a,0,b,a.mN);return c;}c=new VT;OQ(c,a.d8+a.bj|0,b,a,0,b,a.mN);return c;}
function Vz(){}
function LY(){Fm.call(this);}
function AHq(b){var c,d;if(b>=0)return AZM(0,b,$rt_createCharArray(b),0,b,0);c=new Cb;d=new T;V(d);Bl(c,U(Bf(J(d,B(274)),b)));M(c);}
function AM9(b,c,d){return AZM(0,b.data.length,b,c,c+d|0,0);}
function O7(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BM;i=new T;V(i);Bl(h,U(Bf(J(Bf(J(i,B(275)),g),B(248)),f)));M(h);}if(Cs(a)<d){h=new Gt;O(h);M(h);}if(d<0){h=new BM;i=new T;V(i);Bl(h,U(J(Bf(J(i,B(249)),d),B(250))));M(h);}g=a.bj;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=AOS(a,g);j=j+1|0;c=k;g=f;}a.bj=a.bj+d|0;return a;}}b=b.data;i=new BM;h=new T;V(h);Bl(i,U(J(Bf(J(Bf(J(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AEU(a,b){return O7(a,b,0,b.data.length);}
function ASv(a,b,c,d){var e,f,g,h,i,j,k;if(Xu(a)){e=new FV;O(e);M(e);}if(Cs(a)<d){e=new Hc;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BM;i=new T;V(i);Bl(e,U(Bf(J(Bf(J(i,B(276)),h),B(248)),g)));M(e);}if(d<0){e=new BM;i=new T;V(i);Bl(e,U(J(Bf(J(i,B(249)),d),B(250))));M(e);}h=a.bj;j=0;while(j<d){k=h+1|0;g=c+1|0;VC(a,h,f[c]);j=j+1|0;h=k;c=g;}a.bj=a.bj+d|0;return a;}}b=b.data;i=new BM;e=new T;V(e);Bl(i,U(J(Bf(J(Bf(J(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AJj(a,b,c,d){var e,f,g,h,i,j;if(Xu(a)){b=new FV;O(b);M(b);}e=d-c|0;if(Cs(a)<e){b=new Hc;O(b);M(b);}if(c>=0&&c<Bh(b)){if(d>Bh(b)){f=new BM;g=new T;V(g);Bl(f,U(Bf(J(Bf(J(g,B(276)),d),B(277)),Bh(b))));M(f);}if(c>d){b=new BM;f=new T;V(f);Bl(b,U(Bf(J(Bf(J(f,B(278)),c),B(279)),d)));M(b);}h=a.bj;while(c<d){i=h+1|0;j=c+1|0;VC(a,h,Y(b,c));h=i;c=j;}a.bj=a.bj+e|0;return a;}g=new BM;f=new T;V(f);Bl(g,U(J(Bf(J(Bf(J(f,B(278)),c),B(244)),Bh(b)),B(27))));M(g);}
function No(a,b){return AJj(a,b,0,Bh(b));}
function AJH(a){return 1;}
function APo(a){return a.mf;}
function AYE(a){Gw(a);return a;}
function AX9(a,b){EO(a,b);return a;}
function P9(){B3.call(this);}
function BiP(){var a=new P9();A89(a);return a;}
function A89(a){O(a);}
function Op(){B8.call(this);}
function BiQ(){var a=new Op();AZ0(a);return a;}
function AZ0(a){return;}
function A4Y(a){return 0;}
function A5D(a){return 0;}
function ATr(a){return 0;}
function L3(){B8.call(this);}
function BiR(){var a=new L3();ATq(a);return a;}
function ATq(a){return;}
function A_K(a){return 1;}
function AZc(a){return 0;}
function N_(){B8.call(this);}
function BiS(){var a=new N_();A7B(a);return a;}
function A7B(a){return;}
function A62(a){return 0;}
function A9_(a){return 0;}
function AU$(a){return 0;}
function Gc(){var a=this;Bc.call(a);a.uV=null;a.yD=0.0;a.AI=0;a.JB=0;}
function BiT(a,b,c,d){var e=new Gc();Ml(e,a,b,c,d);return e;}
function Ml(a,b,c,d,e){Dr(a,b);a.yD=4.0;a.JB=d;a.uV=e;a.eZ=1;a.ff=32<<d;if(d==3)a.ff=a.ff*2|0;a.yD=(d+1|0)*2|0;a.AI=c+d|0;}
function A8Z(a,b,c){var d;d=0;while(d<a.uV.data.length){if(a.uV.data[d]===c)return a.yD;d=d+1|0;}return 1.0;}
function A6_(a,b,c){FL(b,2);}
function AWv(a,b,c,d,e,f){FL(b,1);}
function AXd(a,b){return a.AI;}
function O1(){Gc.call(this);}
var BiU=null;function Bb$(){Bb$=Bt(O1);A9g();}
function LN(a,b){var c=new O1();AFR(c,a,b);return c;}
function AFR(a,b,c){Bb$();Ml(a,b,1,c,BiU);}
function A9g(){var b,c;b=I(P,4);c=b.data;L();c[0]=BeV;c[1]=BeW;c[2]=Bfe;c[3]=Bff;BiU=b;}
function VD(){Gc.call(this);this.nE=0;}
var BiV=null;function Bcb(){Bcb=Bt(VD);A1S();}
function Oi(a,b){var c=new VD();ANU(c,a,b);return c;}
function ANU(a,b,c){Bcb();Ml(a,b,2,c,BiV);a.nE=c;}
function A5q(a,b){L();return b===Bfp?(a.nE!=3?0:1):b!==Bg5&&b!==Bg4?(b!==Bfm&&b!==Bfk?(b!==Bfl&&b!==Bfj?(b.b_===Bhe?1:b.b_!==Bht?0:1):a.nE<1?0:1):a.nE<2?0:1):a.nE<2?0:1;}
function A1S(){var b,c;b=I(P,12);c=b.data;L();c[0]=Be3;c[1]=BeX;c[2]=BeY;c[3]=BeZ;c[4]=Be$;c[5]=Bfj;c[6]=Bfl;c[7]=Bfi;c[8]=Bfm;c[9]=Bfk;c[10]=Bg4;c[11]=Bg5;BiV=b;}
function Wy(){Gc.call(this);}
var BiW=null;function BbN(){BbN=Bt(Wy);AUc();}
function NN(a,b){var c=new Wy();ANI(c,a,b);return c;}
function ANI(a,b,c){BbN();Ml(a,b,3,c,BiW);}
function AUc(){var b,c;b=I(P,4);c=b.data;L();c[0]=Be5;c[1]=Bfn;c[2]=Be6;c[3]=Bg2;BiW=b;}
function AE4(){Bc.call(this);}
function Bbg(a){var b=new AE4();AYx(b,a);return b;}
function AYx(a,b){Dr(a,b);a.eZ=1;a.ff=64;}
function AJO(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;$p=1;case 1:$z=ACB(d,e,f,g);if(C()){break _;}i=$z;if(i){FL(b,1);return 1;}j=e+0.5;k=f+0.5;l=g+0.5;BB();Ex(d,j,k,l,B(280),1.0,N(BhO)*0.4000000059604645+0.800000011920929);L();h=Bgu.b;$p
=2;case 2:APB(d,e,f,g,h);if(C()){break _;}FL(b,1);return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function LR(){Bc.call(this);this.zW=0;}
function OE(a,b){var c=new LR();Z3(c,a,b);return c;}
function Z3(a,b,c){Dr(a,b);a.zW=c;a.eZ=1;}
function Qb(a,b,c,d){b.p=b.p-1|0;UW(d,a.zW);return b;}
function AOZ(){Bc.call(this);}
function Ban(a){var b=new AOZ();A2u(b,a);return b;}
function A2u(a,b){Dr(a,b);a.eZ=1;}
function AGF(a,b,c,d){var e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.K;BB();if(!AGT(e,Bgi.cW))return b;Dg(c,d,B(225),1.0,1.0/(N(BhO)*0.4000000059604645+0.800000011920929));e=ATe(c,d);$p=1;case 1:AOl(c,e);if(C()){break _;}return b;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function ALf(){Bc.call(this);this.z1=0;}
function NB(a,b){var c=new ALf();A$U(c,a,b);return c;}
function A$U(a,b,c){Dr(a,b);a.eZ=1;a.ff=32<<c;a.z1=4+(c*2|0)|0;}
function A0B(a,b,c){return 1.5;}
function A7Y(a,b,c){FL(b,1);}
function AX$(a,b,c,d,e,f){FL(b,2);}
function A2F(a,b){return a.z1;}
function AOg(){LR.call(this);}
function BcI(a,b){var c=new AOg();A27(c,a,b);return c;}
function A27(a,b,c){Z3(a,b,c);}
function APA(a,b,c,d){Qb(a,b,c,d);b=new Cc;BB();DD(b,Bh_);return b;}
function ANC(){Bc.call(this);}
function Ny(a,b){var c=new ANC();ATR(c,a,b);return c;}
function ATR(a,b,c){Dr(a,b);a.eZ=1;a.ff=32<<c;}
function AQY(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACB(d,e,f,g);if(C()){break _;}i=$z;h=f+1|0;$p=2;case 2:a:{$z=AB6(d,e,h,g);if(C()){break _;}j=$z;if(!j.dv()){L();if(i==BeV.b)break a;}L();if(i!=BeW.b)return 0;}L();k=Bg8;l=e;m
=l+0.5;n=f;o=n+0.5;p=g;Ex(d,m,o,p+0.5,Kk(k.gK),(k.gK.oP+1.0)/2.0,k.gK.pN*0.800000011920929);h=k.b;$p=3;case 3:APB(d,e,f,g,h);if(C()){break _;}FL(b,1);if(!E(d.q,8)&&i==BeV.b){q=1;r=0;m=n+1.2000000476837158;if(r<q){s=N(d.q)*0.699999988079071+0.15000000596046448;n=N(d.q)*0.699999988079071+0.15000000596046448;t=new E_;o=l+s;u=p+n;c=new Cc;BB();DD(c,BhH);He(t,d,o,m,u,c);t.hb=10;$p=4;continue _;}}return 1;case 4:AOl(d,t);if(C()){break _;}r=r+1|0;if(r>=q)return 1;s=N(d.q)*0.699999988079071+0.15000000596046448;n=N(d.q)
*0.699999988079071+0.15000000596046448;t=new E_;o=l+s;u=p+n;c=new Cc;BB();DD(c,BhH);He(t,d,o,m,u,c);t.hb=10;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function V2(){Bc.call(this);this.zK=0;}
function BiX(a,b){var c=new V2();AHN(c,a,b);return c;}
function AHN(a,b,c){Dr(a,b);a.zK=c;}
function AFp(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;$p=1;case 1:$z=ACB(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bg8.b)return 0;f=f+1|0;h=a.zK;$p=2;case 2:APB(d,e,f,g,h);if(C()){break _;}b.p=b.p-1|0;return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function F5(){var a=this;Bc.call(a);a.H$=0;a.zV=0;a.za=0;a.BF=0;}
var BiY=null;var BiZ=null;function Da(a,b,c,d){var e=new F5();ABv(e,a,b,c,d);return e;}
function ABv(a,b,c,d,e){Dr(a,b);a.H$=c;a.zV=e;a.BF=d;a.za=BiY.data[e];a.ff=(BiZ.data[e]*3|0)<<c;a.eZ=1;}
function ARP(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;BiY=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;BiZ=b;}
function X1(){Bc.call(this);}
function Bal(a){var b=new X1();AZf(b,a);return b;}
function AZf(a,b){Dr(a,b);a.ff=64;}
function ACi(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)return 0;if(h==1)return 0;i=0;if(h==4)i=1;if(h==3)i=2;if(h==5)i=3;j=new II;FC(j,d);j.rv=0;j.dJ=0;j.c4=0.0;D2(j,0.5,0.5);j.no=e;j.EE=f;j.nw=g;c=Cg();k=Bi0.oX().data;e=k.length;f=0;if(f<e){l=k[f];j.dT=l;JS(j,i);$p=1;continue _;}if(c.s>0)j.dT=Z(c,E(j.m,c.s));JS(j,i);$p=2;continue _;case 1:$z
=ZP(j);if(C()){break _;}g=$z;if(g)S(c,l);f=f+1|0;if(f<e){l=k[f];j.dT=l;JS(j,i);continue _;}if(c.s>0)j.dT=Z(c,E(j.m,c.s));JS(j,i);$p=2;case 2:$z=ZP(j);if(C()){break _;}e=$z;if(!e)return 1;$p=3;case 3:AOl(d,j);if(C()){break _;}b.p=b.p-1|0;return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AHv(){Bc.call(this);}
function Bcn(a){var b=new AHv();A7L(b,a);return b;}
function A7L(a,b){Dr(a,b);a.ff=64;a.eZ=1;}
function Yk(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bg_;$p=1;case 1:$z=i.fT(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;h=Bg_.b;$p=2;case 2:APB(d,e,f,g,h);if(C()){break _;}h=K((c.v+180.0)*16.0/360.0-0.5)&15;$p=3;case 3:AKA(d,e,f,g,h);if(C()){break _;}b.p=b.p-1|0;$p=4;case 4:$z=ANB(d,e,f,g);if(C()){break _;}b=$z;b=b;$p=5;case 5:AJd(c,b);if
(C()){break _;}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AJh(){Bc.call(this);}
function A_X(a){var b=new AJh();A3b(b,a);return b;}
function A3b(a,b){Dr(a,b);a.ff=64;a.eZ=1;}
function AEd(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bha;$p=1;case 1:$z=i.fT(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;j=K((c.v+180.0)*4.0/360.0-0.5)&3;k=0;l=0;if(!j)l=1;if(j==1)k=(-1);if(j==2)l=(-1);if(j==3)k=1;m=e-k|0;n=g-l|0;$p=2;case 2:$z
=AAI(d,m,f,n);if(C()){break _;}h=$z;h=!h?0:1;o=f+1|0;$p=3;case 3:$z=AAI(d,m,o,n);if(C()){break _;}p=$z;p=h+(!p?0:1)|0;h=e+k|0;k=g+l|0;$p=4;case 4:$z=AAI(d,h,f,k);if(C()){break _;}l=$z;l=!l?0:1;$p=5;case 5:$z=AAI(d,h,o,k);if(C()){break _;}q=$z;q=l+(!q?0:1)|0;$p=6;case 6:$z=ACB(d,m,f,n);if(C()){break _;}l=$z;if(l!=Bha.b){$p=7;continue _;}n=1;$p=8;continue _;case 7:$z=ACB(d,m,o,n);if(C()){break _;}m=$z;n=m==Bha.b?1:0;$p=8;case 8:$z=ACB(d,h,f,k);if(C()){break _;}l=$z;if(l!=Bha.b){$p=9;continue _;}r=0;if(n&&!1)r
=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bha.b;$p=10;continue _;case 9:$z=ACB(d,h,o,k);if(C()){break _;}h=$z;m=h==Bha.b?1:0;r=0;if(n&&!m)r=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bha.b;$p=10;case 10:APB(d,e,f,g,h);if(C()){break _;}$p=11;case 11:AKA(d,e,f,g,j);if(C()){break _;}f=Bha.b;$p=12;case 12:APB(d,e,o,g,f);if(C()){break _;}f=j+8|0;$p=13;case 13:AKA(d,e,o,g,f);if(C()){break _;}b.p=b.p-1|0;return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ARR(){Bc.call(this);this.pp=0;}
function AP3(a,b){var c=new ARR();A0l(c,a,b);return c;}
function A0l(a,b,c){Dr(a,b);a.eZ=1;a.ff=64;a.pp=c;}
function AH3(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.T+(d.J-d.T)*1.0;f=d.P+(d.v-d.P)*1.0;g=BW(d.bS+(d.d-d.bS)*1.0,d.cS+(d.j-d.cS)*1.0,d.bR+(d.e-d.bR)*1.0);h= -f*0.01745329238474369-3.1415927410125732;i=BC(h);h=Bq(h);j= -e*0.01745329238474369;k= -BC(j);l=Dj(g,h*k*5.0,Bq(j)
*5.0,i*k*5.0);m=a.pp?0:1;$p=1;case 1:$z=AE6(c,g,l,m);if(C()){break _;}n=$z;if(n===null)return b;if(n.k8)return b;m=n.h$;o=n.h_;p=n.ia;if(!a.pp){$p=2;continue _;}if(!n.hL)o=o+(-1)|0;if(n.hL==1)o=o+1|0;if(n.hL==2)p=p+(-1)|0;if(n.hL==3)p=p+1|0;if(n.hL==4)m=m+(-1)|0;if(n.hL==5)m=m+1|0;$p=8;continue _;case 2:$z=AB6(c,m,o,p);if(C()){break _;}g=$z;if(g!==BfV){$p=3;continue _;}$p=4;continue _;case 3:$z=AB6(c,m,o,p);if(C()){break _;}d=$z;if(d!==BfW)return b;$p=5;continue _;case 4:$z=AEN(c,m,o,p);if(C()){break _;}q=$z;if
(q){$p=3;continue _;}q=0;$p=6;continue _;case 5:$z=AEN(c,m,o,p);if(C()){break _;}q=$z;if(q)return b;q=0;$p=7;continue _;case 6:APB(c,m,o,p,q);if(C()){break _;}b=new Cc;BB();DD(b,BiK);return b;case 7:APB(c,m,o,p,q);if(C()){break _;}b=new Cc;BB();DD(b,BiL);return b;case 8:$z=ACB(c,m,o,p);if(C()){break _;}q=$z;if(q){$p=10;continue _;}q=a.pp;r=0;$p=9;case 9:AI3(c,m,o,p,q,r);if(C()){break _;}b=new Cc;BB();DD(b,BiJ);return b;case 10:$z=AB6(c,m,o,p);if(C()){break _;}d=$z;if(d.dv())return b;q=a.pp;r=0;$p=9;continue _;default:
Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function APc(){Bc.call(this);}
function BbR(a){var b=new APc();AXe(b,a);return b;}
function AXe(a,b){Dr(a,b);a.eZ=1;}
function ADa(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACB(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bhb.b)return 0;c=new Gi;j=e+0.5;k=f+0.5;l=g+0.5;FC(c,d);c.Bs=I(Cc,36);c.iT=0;c.kz=0;c.oN=1;c.kL=0;c.mB=1;D2(c,0.9800000190734863,0.699999988079071);c.c4=c.eO/2.0;c.i9=0;CT(c,j,k+c.c4,l);c.g=0.0;c.i=0.0;c.h=0.0;c.bS=j;c.cS=k;c.bR
=l;$p=2;case 2:AOl(d,c);if(C()){break _;}b.p=b.p-1|0;return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ARj(){Bc.call(this);}
function Bc2(a){var b=new ARj();AWF(b,a);return b;}
function AWF(a,b){Dr(a,b);a.eZ=1;a.ff=64;}
function AGD(a,b,c){var d;if(c instanceof IE){d=c;if(!d.qy){d.qy=1;b.p=b.p-1|0;}}}
function AWr(a,b,c){AGD(a,b,c);}
function N7(){}
function AGm(){var a=this;D.call(a);a.d2=Long_ZERO;a.eU=Long_ZERO;}
function A9X(){var a=new AGm();A0j(a);return a;}
function A0j(a){a.d2=Long_fromInt(1);a.eU=Long_ZERO;}
function AS2(a,b){a.d2=Long_and(b,Long_fromInt(65535));a.eU=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AZB(a){a.d2=Long_fromInt(1);a.eU=Long_ZERO;}
function AT8(a){return Long_or(Long_shl(a.eU,16),a.d2);}
function A8l(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.d2=Long_add(a.d2,Long_fromInt(b[c]&255));a.eU=Long_add(a.eU,a.d2);a.d2=Long_rem(a.d2,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.d2;d=c+1|0;a.d2=Long_add(j,Long_fromInt(i[c]&255));a.eU=Long_add(a.eU,a.d2);h=e;c=d;}a.d2=Long_rem(a.d2,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.d2;e=c+1|0;a.d2=Long_add(j,Long_fromInt(i[c]&255));a.eU=Long_add(a.eU,a.d2);f=d;c=e;}a.d2=Long_rem(a.d2,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));}
function Si(){BO.call(this);}
function Bi1(){var a=new Si();A6J(a);return a;}
function A6J(a){O(a);}
function Nt(){D.call(this);this.GI=null;}
var Bgs=null;var Bi2=null;function AVG(a){var b=new Nt();AH$(b,a);return b;}
function AH$(a,b){a.GI=b;}
function ASs(){Bgs=AVG(B(281));Bi2=AVG(B(282));}
function J5(){}
function LO(){var a=this;D.call(a);a.gb=null;a.e6=null;}
function A45(a,b){var c,d;if(a===b)return 1;if(!Sr(b,J5))return 0;a:{b:{c:{c=b;if(a.gb===null){if(c.gb!==null)break c;}else if(!a.gb.en(c.gb))break c;if(a.e6===null){if(c.e6!==null)break c;break b;}if(a.e6.en(c.e6))break b;}d=0;break a;}d=1;}return d;}
function AWY(a){return a.gb;}
function A2l(a){return a.e6;}
function A11(a){return (a.gb===null?0:a.gb.fk())^(a.e6===null?0:a.e6.fk());}
function IH(){var a=this;LO.call(a);a.pV=0;a.eD=null;}
function BM(){B6.call(this);}
function Bi3(){var a=new BM();AUB(a);return a;}
function AUB(a){O(a);}
function I1(){BM.call(this);}
function Bi4(){var a=new I1();A02(a);return a;}
function A02(a){O(a);}
function GG(){}
function WF(){D.call(this);this.zQ=null;}
function AI8(a){var b,c,d,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.zQ;try{Bfs=Bfs+1|0;Fv(b);$p=1;continue _;}catch($$e){$$je=Bj($$e);c=$$je;}d=b.mP;$p=2;continue _;case 1:a:{try{b.g$();if(C()){break _;}}catch($$e){$$je=Bj($$e);c=$$je;break a;}c=b.mP;$p=3;continue _;}d=b.mP;$p=2;case 2:AD6(d);if(C()){break _;}a:{try{Xl(b.mP);NZ(d);break a;}catch($$e){$$je=Bj($$e);b=$$je;}NZ(d);M(b);}b.wC=0;Bfs=Bfs-1|0;Fv(Bfq);M(c);case 3:AD6(c);if
(C()){break _;}a:{try{Xl(b.mP);NZ(c);break a;}catch($$e){$$je=Bj($$e);b=$$je;}NZ(c);M(b);}b.wC=0;Bfs=Bfs-1|0;Fv(Bfq);return;default:Fa();}}C3().s(a,b,c,d,$p);}
function FG(){B3.call(this);}
function Bi5(){var a=new FG();AW_(a);return a;}
function AW_(a){O(a);}
function ES(){var a=this;D.call(a);a.hS=null;a.vw=0.0;a.vx=0.0;}
function G5(a,b,c,d,e){var f=new ES();ASP(f,a,b,c,d,e);return f;}
function ASP(a,b,c,d,e,f){a.hS=Wz(b,c,d);a.vw=e;a.vx=f;}
function Jb(a,b,c){var d;d=new ES;d.hS=a.hS;d.vw=b;d.vx=c;return d;}
function Fy(){var a=this;D.call(a);a.hA=null;a.E3=0;}
function Bi6(a,b,c,d,e){var f=new Fy();Hj(f,a,b,c,d,e);return f;}
function Hj(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.E3=0;a.hA=b;a.E3=g.length;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=Jb(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=Jb(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=Jb(h,k,l);g[3]=Jb(g[3],i,l);}
function ACZ(a){var b,c,d;b=I(ES,a.hA.data.length);c=b.data;d=0;while(d<a.hA.data.length){c[d]=a.hA.data[(a.hA.data.length-d|0)-1|0];d=d+1|0;}a.hA=b;}
function APH(a,b,c){var d,e,f,g;d=Qe(a.hA.data[1].hS,a.hA.data[0].hS);e=CC(ABY(Qe(a.hA.data[1].hS,a.hA.data[2].hS),d));Bz(b);Ch(e.x,e.z,e.w);f=0;while(f<4){g=a.hA.data[f];G(b,g.hS.x*c,g.hS.z*c,g.hS.w*c,g.vw,g.vx);f=f+1|0;}Br(b);}
function LM(){var a=this;D.call(a);a.bP=0;a.ot=0;a.rR=Long_ZERO;a.bv=Long_ZERO;a.oE=0;a.dZ=0;a.xX=0;a.iC=null;a.E=null;a.eM=0;a.iI=0;a.xJ=null;a.cJ=null;a.fV=null;}
var Bi7=null;function AFN(a){var b;if(a.E===null)return (-2);b=a.E;a.E.nq=Long_ZERO;b.G=Long_ZERO;a.E.b9=null;a.bP=14;a.iI=(-1);JJ(a.iC);return 0;}
function AFT(a){if(a.iC!==null)S1(a.iC);return 0;}
function XH(a,b){var c,d,e,f;a.E.b9=null;a.iC=null;a.dZ=0;if(b<0)b= -b;else if(b&1073741824){a.dZ=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.dZ=4;b=b&15;}else{a.dZ=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.iC!==null&&a.xX!=b){S1(a.iC);a.iC=null;}a.xX=b;c=new KG;d=a.E;b=1<<b;c.sd=$rt_createIntArray(1);c.oD=$rt_createIntArray(1);c.mY=$rt_createIntArray(1);c.mW=$rt_createIntArray(1);c.vM=I($rt_arraycls($rt_intcls()),1);c.vN=I($rt_arraycls($rt_intcls()),1);c.va=$rt_createIntArray(1);c.vh=$rt_createIntArray(1);c.w6
=BaD();c.y=d;e=new LD;f=c.y;e.k3=0;e.bc=f;e.C=c;c.pF=e;c.kk=$rt_createIntArray(4320);c.c0=$rt_createByteArray(b);c.cQ=b;c.rk=d.jx.dZ?1:0;c.dL=0;JJ(c);a.iC=c;AFN(a);return 0;}AFT(a);return (-2);}
function AGH(a,b){var c,d,e,f,g,h,i,$$je;if(a.E!==null&&a.E.cg!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bP){case 6:a.bP=13;a.E.b9=B(283);a.oE=0;return (-2);case 7:d=Zu(a.iC,d);if(d==(-3)){a.bP=13;a.oE=0;continue i;}if(!d)d=c;if(d!=1)break i;a.rR=a.E.f8.yA();JJ(a.iC);if(!a.dZ){a.bP=12;d=c;continue i;}a.bP=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=F9(a,2,d,c);}catch($$e){$$je=Bj($$e);if($$je instanceof DZ)
{e=$$je;return e.hJ;}else{throw $$e;}}a.eM=a.bv.lo&65535;if((a.eM&255)!=8){a.E.b9=B(284);a.bP=13;continue i;}if(a.eM&57344){a.E.b9=B(285);a.bP=13;continue i;}if(a.eM&512)Io(a,2,a.bv);a.bP=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.E.N)return d;e=a.E;e.N=e.N
-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cg.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bP=9;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cg.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bP=10;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cg.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bP=11;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cg.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.eM)a.bv=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bv,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bv,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.rR.lo!=
a.bv.lo)a.E.b9=B(286);else if(a.eM&&a.cJ!==null)a.cJ.HC=a.bv;a.bP=15;d=c;}if(!(a.dZ&&a.eM)){if(a.E.b9===null)break f;if(!DC(a.E.b9,B(286)))break f;a.bP=13;a.oE=5;continue i;}try{d=F9(a,4,d,c);}catch($$e){$$je=Bj($$e);if($$je instanceof DZ){e=$$je;return e.hJ;}else{throw $$e;}}if(a.E.b9!==null&&DC(a.E.b9,B(286))){a.bP=13;a.oE=5;continue i;}if(Long_eq(a.bv,Long_and(a.E.nq,new Long(4294967295, 0)))){a.E.b9=null;break f;}a.E.b9=B(287);a.bP=13;continue i;}if(!a.dZ){a.bP=7;continue i;}try{d=F9(a,2,d,c);}catch($$e)
{$$je=Bj($$e);if($$je instanceof DZ){e=$$je;return e.hJ;}else{throw $$e;}}if(!(a.dZ!=4&&!(a.dZ&2))&&Long_eq(a.bv,Long_fromInt(35615))){if(a.dZ==4)a.dZ=2;a.E.f8=AWo();Io(a,2,a.bv);if(a.cJ===null)a.cJ=Bct();a.bP=23;continue i;}if(a.dZ&2){a.bP=13;a.E.b9=B(288);continue i;}a.eM=0;a.ot=a.bv.lo&255;h=Long_shr(a.bv,8).lo&255;if(!(a.dZ&1&&!(((a.ot<<8)+h|0)%31|0))&&(a.ot&15)!=8){if(a.dZ!=4){a.bP=13;a.E.b9=B(288);continue i;}e=a.E;e.A=e.A-2|0;e=a.E;e.N=e.N+2|0;e=a.E;e.G=Long_sub(e.G,Long_fromInt(2));a.dZ=0;a.bP=7;continue i;}if
((a.ot&15)!=8){a.bP=13;a.E.b9=B(284);continue i;}if(a.dZ==4)a.dZ=1;if(((a.ot>>4)+8|0)>a.xX){a.bP=13;a.E.b9=B(289);continue i;}a.E.f8=A9X();if(h&32){a.bP=2;break d;}a.bP=7;continue i;}break m;}try{d=F9(a,4,d,c);}catch($$e){$$je=Bj($$e);if($$je instanceof DZ){e=$$je;return e.hJ;}else{throw $$e;}}if(a.cJ!==null)a.cJ.HV=a.bv;if(a.eM&512)Io(a,4,a.bv);a.bP=17;}try{d=F9(a,2,d,c);}catch($$e){$$je=Bj($$e);if($$je instanceof DZ){e=$$je;return e.hJ;}else{throw $$e;}}if(a.cJ!==null){a.cJ.I8=a.bv.lo&255;a.cJ.A9=a.bv.lo>>
8&255;}if(a.eM&512)Io(a,2,a.bv);a.bP=18;}if(a.eM&1024){try{d=F9(a,2,d,c);}catch($$e){$$je=Bj($$e);if($$je instanceof DZ){e=$$je;return e.hJ;}else{throw $$e;}}if(a.cJ!==null)a.cJ.pq=$rt_createByteArray(a.bv.lo&65535);if(a.eM&512)Io(a,2,a.bv);}else if(a.cJ!==null)a.cJ.pq=null;a.bP=19;}if(a.eM&1024)x:{try{d=ANT(a,d,c);if(a.cJ===null)break x;f=Ig(a.fV);i=f.data;a.fV=null;b=i.length;if(b!=a.cJ.pq.data.length){a.E.b9=B(290);a.bP=13;continue i;}Dh(f,0,a.cJ.pq,0,b);break x;}catch($$e){$$je=Bj($$e);if($$je instanceof DZ)
{e=$$je;return e.hJ;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.pq=null;a.bP=20;}y:{if(a.eM&2048){z:{try{d=PO(a,d,c);if(a.cJ===null)break z;a.cJ.yO=Ig(a.fV);break z;}catch($$e){$$je=Bj($$e);if($$je instanceof DZ){e=$$je;break h;}else{throw $$e;}}}try{a.fV=null;break y;}catch($$e){$$je=Bj($$e);if($$je instanceof DZ){e=$$je;break h;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.yO=null;}a.bP=21;}ba:{if(a.eM&4096){bb:{try{d=PO(a,d,c);if(a.cJ===null)break bb;a.cJ.Az=Ig(a.fV);break bb;}catch($$e){$$je=Bj($$e);if($$je instanceof DZ)
{e=$$je;break g;}else{throw $$e;}}}try{a.fV=null;break ba;}catch($$e){$$je=Bj($$e);if($$je instanceof DZ){e=$$je;break g;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.Az=null;}a.bP=22;}if(a.eM&512){try{d=F9(a,2,d,c);}catch($$e){$$je=Bj($$e);if($$je instanceof DZ){e=$$je;return e.hJ;}else{throw $$e;}}if(a.cJ!==null)a.cJ.JV=Long_and(a.bv,Long_fromInt(65535)).lo;if(Long_ne(a.bv,Long_and(a.E.f8.yA(),Long_fromInt(65535)))){a.bP=13;a.E.b9=B(291);a.oE=5;continue;}}a.E.f8=AWo();a.bP=7;}return d;}return e.hJ;}return e.hJ;}a.bP
=12;}return 1;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cg.data;e=a.E;d=e.A;e.A=d+1|0;a.bv=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bP=3;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cg.data;e=a.E;d=e.A;e.A=d+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bP=4;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cg.data;e
=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bP=5;}if(!a.E.N)return c;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cg.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.E.f8.E4(a.bv);a.bP=6;return 2;}if(b==4&&a.bP==14)return 0;return (-2);}
function F9(a,b,c,d){var e,f,g,h;if(a.iI==(-1)){a.iI=b;a.bv=Long_ZERO;}while(true){if(a.iI<=0){if(b==2)a.bv=Long_and(a.bv,Long_fromInt(65535));else if(b==4)a.bv=Long_and(a.bv,new Long(4294967295, 0));a.iI=(-1);return c;}if(!a.E.N)break;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.bv;g=a.E.cg.data;e=a.E;h=e.A;e.A=h+1|0;a.bv=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.iI|0)*8|0)));a.iI=a.iI-1|0;c=d;}M(AHb(a,c));}
function PO(a,b,c){var d,e;if(a.fV===null)a.fV=A7F();while(true){if(!a.E.N)M(AHb(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));e=a.E.cg.data[a.E.A];if(e)Ry(a.fV,a.E.cg,a.E.A,1);a.E.f8.kH(a.E.cg,a.E.A,1);d=a.E;d.A=d.A+1|0;if(!e)break;b=c;}return c;}
function ANT(a,b,c){var d;if(a.fV===null)a.fV=A7F();while(Long_gt(a.bv,Long_ZERO)){if(!a.E.N)M(AHb(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));Ry(a.fV,a.E.cg,a.E.A,1);a.E.f8.kH(a.E.cg,a.E.A,1);d=a.E;d.A=d.A+1|0;a.bv=Long_sub(a.bv,Long_fromInt(1));b=c;}return b;}
function Io(a,b,c){var d;d=0;while(d<b){a.xJ.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.E.f8.kH(a.xJ,0,b);}
function AOM(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);Bi7=b;}
function PT(){E5.call(this);}
function Bi8(){var a=new PT();A6P(a);return a;}
function A6P(a){return;}
function A6b(a,b){$rt_putStderr(b);}
function Kn(){var a=this;D.call(a);a.x=0.0;a.z=0.0;a.w=0.0;}
var Bi9=null;var BeR=0;function Wz(b,c,d){var e;e=new Kn;if(b===-0.0)b=0.0;if(c===-0.0)c=0.0;if(d===-0.0)d=0.0;e.x=b;e.z=c;e.w=d;return e;}
function BW(b,c,d){var e,f;if(BeR>=Bi9.s)S(Bi9,Wz(0.0,0.0,0.0));e=Bi9;f=BeR;BeR=f+1|0;e=Z(e,f);e.x=b;e.z=c;e.w=d;return e;}
function Qe(a,b){return BW(b.x-a.x,b.z-a.z,b.w-a.w);}
function CC(a){var b;b=Cd(a.x*a.x+a.z*a.z+a.w*a.w);return b<1.0E-4?BW(0.0,0.0,0.0):BW(a.x/b,a.z/b,a.w/b);}
function ABY(a,b){return BW(a.z*b.w-a.w*b.z,a.w*b.x-a.x*b.w,a.x*b.z-a.z*b.x);}
function Dj(a,b,c,d){return BW(a.x+b,a.z+c,a.w+d);}
function DI(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return Cd(c*c+d*d+e*e);}
function Ey(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return c*c+d*d+e*e;}
function AB2(a,b,c,d){var e,f,g;e=b-a.x;f=c-a.z;g=d-a.w;return e*e+f*f+g*g;}
function HS(a){return Cd(a.x*a.x+a.z*a.z+a.w*a.w);}
function KP(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(d*d<1.0000000116860974E-7)return null;g=(c-a.x)/d;return g>=0.0&&g<=1.0?BW(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function JY(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(e*e<1.0000000116860974E-7)return null;g=(c-a.z)/e;return g>=0.0&&g<=1.0?BW(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function Kz(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(f*f<1.0000000116860974E-7)return null;g=(c-a.w)/f;return g>=0.0&&g<=1.0?BW(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function AQg(){Bi9=Cg();BeR=0;}
function AMs(){D.call(this);}
function Bi$(){var a=new AMs();ATF(a);return a;}
function ATF(a){return;}
function Gs(b){return Math.sin(b);}
function GF(b){return Math.cos(b);}
function It(b){return Math.atan(b);}
function A3Y(b){return Math.log(b);}
function Ed(b){return Math.sqrt(b);}
function Ki(b){return Math.ceil(b);}
function A2T(b,c){return Math.pow(b,c);}
function CR(b,c){return Math.atan2(b,c);}
function BN(){return A2v();}
function A2v(){return Math.random();}
function CA(b,c){if(b<c)c=b;return c;}
function DE(b,c){if(b>c)c=b;return c;}
function If(b){if(b<=0)b= -b;return b;}
function H0(b){if(b<=0.0)b= -b;return b;}
function Ji(){D.call(this);this.G0=null;}
var Bi_=null;var Bgb=null;var BiO=null;function AGU(a){var b=new Ji();APL(b,a);return b;}
function APL(a,b){a.G0=b;}
function AC_(){Bi_=AGU(B(292));Bgb=AGU(B(293));BiO=AGU(B(294));}
function Lu(){LY.call(this);}
function Xu(a){return a.yy;}
function ABT(){var a=this;Lu.call(a);a.yy=0;a.yd=0;a.mf=null;}
function AZM(a,b,c,d,e,f){var g=new ABT();A2J(g,a,b,c,d,e,f);return g;}
function A2J(a,b,c,d,e,f,g){KR(a,c);a.bj=e;a.cy=f;a.yd=b;a.yy=g;a.mf=d;}
function AOS(a,b){return a.mf.data[b+a.yd|0];}
function VC(a,b,c){a.mf.data[b+a.yd|0]=c;}
function AY5(a){return 1;}
function AWl(a){return a.mf;}
function A1$(a){return a.yy;}
function LU(){var a=this;D.call(a);a.HB=null;a.uC=null;a.GE=0.0;a.BP=0.0;a.vv=null;a.uP=null;a.m1=0;}
function ACV(a,b){var c;if(b!==null){a.vv=b;return a;}c=new Cb;Bl(c,B(295));M(c);}
function A2c(a,b){return;}
function AG0(a,b){var c;if(b!==null){a.uP=b;return a;}c=new Cb;Bl(c,B(295));M(c);}
function A6F(a,b){return;}
function AJi(a,b,c,d){var e,f,g,h,$$je;a:{if(a.m1!=3){if(d)break a;if(a.m1!=2)break a;}b=new D3;O(b);M(b);}a.m1=!d?1:2;while(true){try{e=Y$(a,b,c);}catch($$e){$$je=Bj($$e);if($$je instanceof B6){f=$$je;M(A46(f));}else{throw $$e;}}if(JE(e)){if(!d)return e;g=Cs(b);if(g<=0)return e;e=Fj(g);}else if(IV(e))break;h=!Mx(e)?a.vv:a.uP;b:{if(h!==Bgb){if(h===Bi_)break b;else return e;}if(Cs(c)<a.uC.data.length)return Bja;UT(c,a.uC);}EO(b,b.bj+LA(e)|0);}return e;}
function X6(a,b){var c;if(a.m1!=2&&a.m1!=4){b=new D3;O(b);M(b);}c=Bjb;if(c===Bjb)a.m1=3;return c;}
function A7x(a,b){return Bjb;}
function Oc(){var a=this;D.call(a);a.nu=0;a.qH=0;}
var Bjb=null;var Bja=null;function Zn(a,b){var c=new Oc();AKn(c,a,b);return c;}
function AKn(a,b,c){a.nu=b;a.qH=c;}
function JE(a){return a.nu?0:1;}
function IV(a){return a.nu!=1?0:1;}
function NE(a){return !Qh(a)&&!Mx(a)?0:1;}
function Qh(a){return a.nu!=2?0:1;}
function Mx(a){return a.nu!=3?0:1;}
function LA(a){var b;if(NE(a))return a.qH;b=new Jq;O(b);M(b);}
function Fj(b){return Zn(2,b);}
function Sa(a){var b,c;switch(a.nu){case 0:b=new P8;O(b);M(b);case 1:b=new SO;O(b);M(b);case 2:b=new R3;c=a.qH;O(b);b.Bx=c;M(b);case 3:b=new P4;c=a.qH;O(b);b.EQ=c;M(b);default:}}
function AKV(){Bjb=Zn(0,0);Bja=Zn(1,0);}
function AAd(){D.call(this);}
function A93(){return {};}
function PU(){}
function YJ(){D.call(this);}
function KG(){var a=this;D.call(a);a.dL=0;a.pL=0;a.p_=0;a.f0=0;a.fB=null;a.sd=null;a.oD=null;a.mY=null;a.mW=null;a.vM=null;a.vN=null;a.va=null;a.vh=null;a.pF=null;a.tq=0;a.bK=0;a.bJ=0;a.kk=null;a.c0=null;a.cQ=0;a.bV=0;a.bk=0;a.rk=0;a.w6=null;a.y=null;}
var Bjc=null;var Bjd=null;function JJ(a){a.dL=0;a.bK=0;a.bJ=0;a.bk=0;a.bV=0;if(a.rk)a.y.f8.lZ();}
function Zu(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.y.A;d=a.y.N;e=a.bJ;f=a.bK;g=a.bk;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.dL){case 2:break f;case 9:a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cg.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.p_=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.fB!==null&&a.fB.data.length>=k))a.fB=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.fB.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.f0=0;a.dL=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,(-2));}while(f<32){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cg.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.dL=9;a.y.b9=B(296);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,(-3));}a.pL=l;f=0;a.dL=a.pL?2:!a.tq?0:7;e=f;continue e;}while(f<3){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cg.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.tq=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.dL=1;break l;case 1:AEn(a.mY,a.mW,a.vM,a.vN,a.y);W_(a.pF,a.mY.data[0],a.mW.data[0],a.vM.data[0],0,a.vN.data[0],0);e=e>>>3;f=f+(-3)|0;a.dL=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.dL=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.dL=9;a.y.b9=B(297);a.bJ=b;a.bK=k;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,(-3));default:}}continue e;}while(a.f0<(4+(a.p_>>>10)|0)){while(f<3){if(!d){a.bJ=e;a.bK
=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cg.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.fB.data;j=Bjd.data;k=a.f0;a.f0=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.f0<19){o=a.fB.data;j=Bjd.data;k=a.f0;a.f0=k+1|0;o[j[k]]=0;}a.sd.data[0]=7;k=AP5(a.w6,a.fB,a.sd,a.oD,a.kk,a.y);if(k){if(k==(-3)){a.fB=null;a.dL=9;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,k);}a.f0=0;a.dL=5;}while(true)
{k=a.p_;if(a.f0>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.sd.data[0];while(f<k){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cg.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.kk.data[((a.oD.data[0]+(e&Bjc.data[k])|0)*3|0)+1|0];n=a.kk.data[((a.oD.data[0]+(e&Bjc.data[k])|0)*3|0)+2|0];l=R(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.fB.data;k=a.f0;a.f0=k+1|0;j[k]=n;}else{p=R(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bJ=e;a.bK=
f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cg.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&Bjc.data[q])|0;e=n>>>q;f=k-q|0;h=a.f0;q=a.p_;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.fB.data[h-1|0];while(true){j=a.fB.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.f0=l;}}a.oD.data[0]=(-1);a.mY.data[0]=9;a.mW.data[0]=6;k=a.p_;k=YM(a.w6,257+(k&31)|0,1+(k>>5&31)|0,a.fB,a.mY,a.mW,a.va,a.vh,a.kk,
a.y);if(k){if(k==(-3)){a.fB=null;a.dL=9;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,k);}W_(a.pF,a.mY.data[0],a.mW.data[0],a.kk,a.va.data[0],a.kk,a.vh.data[0]);a.dL=6;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;b=ABH(a.pF,b);if(b!=1)break e;b=0;AAT(a.pF,a.y);c=a.y.A;d=a.y.N;e=a.bJ;f=a.bK;g=a.bk;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;if(a.tq){a.dL=7;break b;}a.dL=0;continue e;}if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,b);}if(!h){if(g==a.cQ&&a.bV){g=0;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;}if(!h){a.bk=g;b=B5(a,b);g=a.bk;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;if(g==a.cQ&&a.bV){g=0;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;}if(!h){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,b);}}}b=0;k=a.pL;if(k>d)k=d;if(k>h)k=h;Dh(a.y.cg,c,a.c0,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.pL-k|0;a.pL=k;if(k)continue;a.dL=!a.tq?0:7;}return B5(a,b);}a.dL=9;a.y.b9
=B(298);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,(-3));}a.fB=null;a.dL=9;a.y.b9=B(299);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,(-3));}a.bk=g;b=B5(a,b);g=a.bk;if(a.bV!=a.bk){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,b);}a.dL=8;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bk=g;return B5(a,1);}
function S1(a){JJ(a);a.c0=null;a.kk=null;}
function B5(a,b){var c,d,e,f,g;c=a.y.pO;d=a.bV;e=(d>a.bk?a.cQ:a.bk)-d|0;if(e>a.y.ic)e=a.y.ic;if(e&&b==(-5))b=0;f=a.y;f.ic=f.ic-e|0;f=a.y;f.nq=Long_add(f.nq,Long_fromInt(e));if(a.rk&&e>0)a.y.f8.kH(a.c0,d,e);Dh(a.c0,d,a.y.uX,c,e);c=c+e|0;g=d+e|0;if(g==a.cQ){if(a.bk==a.cQ)a.bk=0;d=a.bk-0|0;if(d>a.y.ic)d=a.y.ic;if(d&&b==(-5))b=0;f=a.y;f.ic=f.ic-d|0;f=a.y;f.nq=Long_add(f.nq,Long_fromInt(d));if(a.rk&&d>0)a.y.f8.kH(a.c0,0,d);Dh(a.c0,0,a.y.uX,c,d);c=c+d|0;g=0+d|0;}a.y.pO=c;a.bV=g;return b;}
function AH8(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bjc=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;Bjd=b;}
function NJ(){LU.call(this);}
function Y$(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(CA(Cs(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(CA(Cs(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fn(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CA(Cs(b)+k|0,e.length);O7(b,d,k,g-k|0);f=0;}if(!Fn(c)){l=!Fn(b)&&f>=g?Bjb:Bja;break a;}k=CA(Cs(c),i.length);m=new TD;m.yT=b;m.Dl=c;l=ACE(a,d,f,g,h,0,k,m);f=m.vJ;if(l===null&&0==m.rL)l=Bjb;W3(c,h,0,m.rL);if(l!==null)break;}}EO(b,b.bj-(g-f|0)|0);return l;}
function PV(){NJ.call(this);}
function ACE(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Ob(h,2))break a;i=Bja;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ow(l)){if((f+3|0)>g){j=j+(-1)|0;if(Ob(h,3))break a;i=Bja;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Ds(l)){i=Fj(1);break a;}if
(j>=d){if(AAE(h))break a;i=Bjb;break a;}c=j+1|0;j=k[j];if(!DS(j)){j=c+(-2)|0;i=Fj(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Ob(h,4))break a;i=Bja;break a;}k=e.data;n=EJ(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vJ=j;h.rL=f;return i;}
function AOt(){D.call(this);}
function Bje(){var a=new AOt();A2U(a);return a;}
function A2U(a){return;}
function APl(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Bhl());}return b.data.length;}
function AEL(b,c){if(b===null){b=new EF;O(b);M(b);}if(b===F($rt_voidcls())){b=new Cb;O(b);M(b);}if(c>=0)return A1W(b.fW,c);b=new XA;O(b);M(b);}
function A1W(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Gd(){var a=this;D.call(a);a.jZ=null;a.j7=null;a.eR=null;a.fK=null;a.lk=null;a.io=null;}
var Bjf=null;var Bjg=null;var Bjh=null;var Bji=null;var Bjj=null;var Bjk=null;function BaD(){var a=new Gd();AHK(a);return a;}
function AHK(a){a.jZ=null;a.j7=null;a.eR=null;a.fK=null;a.lk=null;a.io=null;}
function NM(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eR.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eR.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eR.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eR.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m=s;while(true){if(m>=t){v=u-a.eR.data[t]|0;if(v<0)return (-3);b=a.eR.data;b[t]
=b[t]+v|0;b=a.io.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.io.data;u=u+a.eR.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.io.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.io.data[t];b=a.io.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.lk.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eR.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c
=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eR.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eR.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.lk.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.io.data[y]=m;a.fK.data[0]=bc<<24>>24;a.fK.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.fK.data;b=a.lk.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;Dh(a.fK,0,j,(a.lk.data[q]+c|0)*3|0,3);z=be;}b=a.fK.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.fK.data[0]=192;else{p=l.data;if
(p[w]>=e){i=g.data;o=f.data;a.fK.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.fK.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.fK;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.fK.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){Dh(a.fK,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.io.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eR.data[m]|0;if(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function AP5(a,b,c,d,e,f){var g;M5(a,19);a.jZ.data[0]=0;g=NM(a,b,0,19,19,null,null,d,c,e,a.jZ,a.j7);if(g==(-3))f.b9=B(300);else if(!(g!=(-5)&&c.data[0])){f.b9=B(301);g=(-3);}return g;}
function YM(a,b,c,d,e,f,g,h,i,j){var k;M5(a,288);a.jZ.data[0]=0;k=NM(a,d,0,b,257,Bjh,Bji,g,e,i,a.jZ,a.j7);if(!k&&e.data[0]){M5(a,288);c=NM(a,d,b,c,0,Bjj,Bjk,h,f,i,a.jZ,a.j7);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.b9=B(302);else if(c==(-5)){j.b9=B(303);c=(-3);}else if(c!=(-4)){j.b9=B(304);c=(-3);}return c;}if(k==(-3))j.b9=B(305);else if(k!=(-4)){j.b9=B(306);k=(-3);}return k;}
function AEn(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=Bjf;e[0]=Bjg;return 0;}
function M5(a,b){var c;if(a.jZ===null){a.jZ=$rt_createIntArray(1);a.j7=$rt_createIntArray(b);a.eR=$rt_createIntArray(16);a.fK=$rt_createIntArray(3);a.lk=$rt_createIntArray(15);a.io=$rt_createIntArray(16);}if(a.j7.data.length<b)a.j7=$rt_createIntArray(b);c=0;while(c<b){a.j7.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eR.data[c]=0;c=c+1|0;}c=0;while(c<3){a.fK.data[c]=0;c=c+1|0;}Dh(a.eR,0,a.lk,0,15);Dh(a.eR,0,a.io,0,16);}
function AOu(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
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
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;Bjf=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;Bjg=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;Bjh=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;Bji=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;Bjj=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;Bjk=b;}
function LD(){var a=this;D.call(a);a.fe=0;a.lS=0;a.fF=null;a.k3=0;a.mb=0;a.y$=0;a.sD=0;a.q2=0;a.uQ=0;a.uz=0;a.yF=null;a.v2=0;a.yg=null;a.v9=0;a.bc=null;a.C=null;}
var Bjl=null;function W_(a,b,c,d,e,f,g){a.fe=0;a.uQ=b<<24>>24;a.uz=c<<24>>24;a.yF=d;a.v2=e;a.yg=f;a.v9=g;a.fF=null;}
function ABH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.bc.A;d=a.bc.N;e=a.C.bJ;f=a.C.bK;g=a.C.bk;h=g>=a.C.bV?a.C.cQ-g|0:(a.C.bV-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.fe){case 0:break f;case 2:i=a.sD;while(f<i){if(!d){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bc.cg.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.lS=a.lS+(e&Bjl.data[i])|0;e=e>>i;f=f-i|0;a.mb=a.uz;a.fF=a.yg;a.k3=a.v9;a.fe=3;break g;case 4:i=a.sD;while
(f<i){if(!d){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bc.cg.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.q2=a.q2+(e&Bjl.data[i])|0;e=e>>i;f=f-i|0;a.fe=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.C.bk=g;b=B5(a.C,b);g=a.C.bk;if(a.C.bV!=a.C.bk){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=g;return B5(a.C,b);}a.fe=8;break a;case 9:a.C.bJ=e;a.C.bK
=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=g;return B5(a.C,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=g;return B5(a.C,(-2));}}l=a.mb;while(f<l){if(!d){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bc.cg.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.k3+(e&Bjl.data[l])
|0)*3|0;k=a.fF.data;i=m+1|0;e=e>>k[i];f=f-a.fF.data[i]|0;l=a.fF.data[m];if(l&16){a.sD=l&15;a.q2=a.fF.data[m+2|0];a.fe=4;continue b;}if(l&64){a.fe=9;a.bc.b9=B(307);a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=g;return B5(a.C,(-3));}a.mb=l;a.k3=(m/3|0)+a.fF.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=g;b=AM7(a,a.uQ,a.uz,a.yF,a.v2,a.yg,a.v9,a.C,a.bc);c=a.bc.A;d=a.bc.N;e=a.C.bJ;f
=a.C.bK;g=a.C.bk;h=g>=a.C.bV?a.C.cQ-g|0:(a.C.bV-g|0)-1|0;if(b){a.fe=b!=1?9:7;continue b;}}a.mb=a.uQ;a.fF=a.yF;a.k3=a.v2;a.fe=1;}l=a.mb;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.bc.cg.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.k3+(e&Bjl.data[l])|0)*3|0;k=a.fF.data;i=m+1|0;e=e>>>k[i];f=f-a.fF.data[i]|0;n=a.fF.data[m];if(!n){a.y$=a.fF.data[m+2|0];a.fe=6;continue b;}if(n&16){a.sD=n&15;a.lS=a.fF.data[m+2|0];a.fe=2;continue b;}if(!(n&64)){a.mb=n;a.k3=(m/3|0)+a.fF.data[m+2|0]|0;continue b;}if(!(n&32)){a.fe
=9;a.bc.b9=B(308);a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=g;return B5(a.C,(-3));}a.fe=7;continue b;}if(h)i=g;else{if(g!=a.C.cQ)i=g;else if(!a.C.bV)i=g;else{i=0;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;}if(!h){a.C.bk=i;b=B5(a.C,b);i=a.C.bk;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;if(i==a.C.cQ&&a.C.bV){i=0;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;}if(!h){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=i;return B5(a.C,
b);}}}b=0;k=a.C.c0.data;g=i+1|0;k[i]=a.y$<<24>>24;h=h+(-1)|0;a.fe=0;continue b;}i=g-a.q2|0;while(i<0){i=i+a.C.cQ|0;}while(a.lS){if(h)l=g;else{if(g!=a.C.cQ)l=g;else if(!a.C.bV)l=g;else{l=0;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;}if(!h){a.C.bk=l;b=B5(a.C,b);l=a.C.bk;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;if(l==a.C.cQ&&a.C.bV){l=0;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;}if(!h){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=l;return B5(a.C,b);}}}o=a.C.c0.data;g=l
+1|0;k=a.C.c0.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m==a.C.cQ?0:m;a.lS=a.lS-1|0;}a.fe=0;}a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=g;return B5(a.C,b);}a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.A|0));a.bc.A=c;a.C.bk=g;return B5(a.C,1);}
function AAT(a,b){return;}
function AM7(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.A;k=i.N;l=h.bJ;m=h.bK;n=h.bk;o=n>=h.bV?h.cQ-n|0:(h.bV-n|0)-1|0;p=Bjl.data[b];q=Bjl.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.cg.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.c0.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&Bjl.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.cg.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.b9=B(307);b=i.N-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bJ=w;h.bK=b;i.N=c;i.G=Long_add(i.G,Long_fromInt(e-i.A|0));i.A=e;h.bk=n;return (-3);}b=(b+r[x+2|0]|0)+(w&Bjl.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.cg.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&Bjl.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.c0.data;b=n+1|0;r=h.c0.data;c=w+1|0;s[n]=r[w];s=h.c0.data;n=b+1|0;r=h.c0.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{Dh(h.c0,w,h.c0,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cQ|0;if(w>=0)break;}b=h.cQ-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.c0.data;n=c+1|0;r=h.c0.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{Dh(h.c0,w,h.c0,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.c0.data;c=n+1|0;r=h.c0.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}Dh(h.c0,w,h.c0,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bJ=l;h.bK=e;i.N=b;i.G=Long_add(i.G,Long_fromInt(c-i.A|0));i.A=c;h.bk=n;return 1;}i.b9=B(308);v=i.N-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bJ=l;h.bK=c;i.N=e;i.G=Long_add(i.G,Long_fromInt(b-i.A|0));i.A=b;h.bk=n;return (-3);}t=(t+s[u+2|0]|0)+(l&Bjl.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.c0.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bJ=l;h.bK=g;i.N=b;i.G=Long_add(i.G,Long_fromInt(e-i.A|0));i.A=e;h.bk=c;return 0;}
function ABM(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bjl=b;}
function Hw(){B3.call(this);}
function Bjm(){var a=new Hw();A_t(a);return a;}
function A_t(a){O(a);}
function XA(){B6.call(this);}
function Bjn(){var a=new XA();A8R(a);return a;}
function A8R(a){O(a);}
function AA4(){D.call(this);}
function A_E(a,b){return a.HL(b);}
function AUF(a){return a.Jc();}
function Ko(){B6.call(this);}
function Bjo(){var a=new Ko();A7m(a);return a;}
function A7m(a){O(a);}
function Z1(){var a=this;D.call(a);a.hl=null;a.rj=null;a.eh=null;a.fh=0;}
function BaA(){var a=new Z1();A2I(a);return a;}
function A2I(a){a.eh=Bc9;}
function D3(){BO.call(this);}
function Bjp(){var a=new D3();A9Z(a);return a;}
function A9Z(a){O(a);}
function AIE(){D.call(this);}
function JN(b){return b.length?0:1;}
function AOY(b){return b.shift();}
function SW(){D.call(this);this.Dk=null;}
function ARb(a){var b,c,d;b=a.Dk;if(!HK(b)&&b.cp.eh===null){c=b.cp;if(c.hl!==null&&!JN(c.hl)){b=c.hl;d=AOY(b);if(b===null)c.hl=null;Qt(d);}}}
function Rf(){var a=this;D.call(a);a.zE=null;a.zF=null;a.zC=0;a.zD=null;}
function Qt(a){var b,c,d,e;b=a.zE;c=a.zF;d=a.zC;e=a.zD;Fv(b);c.cp.eh=b;b=c.cp;b.fh=b.fh+d|0;CM(e,null);}
function G0(){B3.call(this);}
function Bjq(){var a=new G0();AVh(a);return a;}
function AVh(a){O(a);}
function W7(){Fi.call(this);}
function Bjr(){var a=new W7();A1n(a);return a;}
function A1n(a){O(a);}
function E3(){BO.call(this);}
function Bjs(){var a=new E3();A7W(a);return a;}
function A7W(a){O(a);}
function On(){var a=this;D.call(a);a.H0=null;a.BW=0.0;a.F_=0.0;a.lg=null;a.mU=null;a.rz=null;a.h3=0;}
function AQ7(a,b){var c;if(b!==null){a.mU=b;return a;}c=new Cb;Bl(c,B(309));M(c);}
function A$J(a,b){return;}
function ADM(a,b){var c;if(b!==null){a.rz=b;return a;}c=new Cb;Bl(c,B(309));M(c);}
function A6i(a,b){return;}
function UP(a,b,c,d){var e,f,$$je;if(!(a.h3==2&&!d)&&a.h3!=3){a.h3=d?2:1;while(true){try{e=AGn(a,b,c);}catch($$e){$$je=Bj($$e);if($$je instanceof B6){f=$$je;M(A46(f));}else{throw $$e;}}if(IV(e))return e;if(JE(e)){if(d&&Fn(b)){if(a.mU===BiO)return Fj(Cs(b));if(Cs(c)<=Bh(a.lg))return Bja;EO(b,b.bj+Cs(b)|0);if(a.mU===Bgb)No(c,a.lg);}return e;}if(Qh(e)){if(a.mU===BiO)return e;if(a.mU===Bgb){if(Cs(c)<Bh(a.lg))return Bja;No(c,a.lg);}EO(b,b.bj+LA(e)|0);}else if(Mx(e)){if(a.rz===BiO)break;if(a.rz===Bgb){if(Cs(c)<Bh(a.lg))return Bja;No(c,
a.lg);}EO(b,b.bj+LA(e)|0);}}return e;}b=new D3;O(b);M(b);}
function ACj(a,b){if(a.h3!=3&&a.h3!=2){b=new D3;O(b);M(b);}a.h3=3;return Bjb;}
function ARy(a){a.h3=0;return a;}
function AJQ(a,b){var c,d;if(a.h3&&a.h3!=3){b=new D3;O(b);M(b);}if(!Cs(b))return AHq(0);if(a.h3)ARy(a);c=AHq(DE(8,Cs(b)*a.BW|0));while(true){d=UP(a,b,c,0);if(JE(d))break;if(IV(d))c=VI(a,c);if(!NE(d))continue;Sa(d);}b=UP(a,b,c,1);if(NE(b))Sa(b);while(!JE(ACj(a,c))){c=VI(a,c);}Gw(c);return c;}
function VI(a,b){var c,d,e;c=b.mf;d=O_(c,DE(8,c.data.length*2|0));e=AM9(d,0,d.data.length);EO(e,b.bj);return e;}
function AYK(a,b){return Bjb;}
function A5p(a){return;}
function Sm(){}
function Sw(){}
function Pl(){var a=this;D.call(a);a.wo=null;a.A7=null;a.Iv=0;a.Jt=0;}
function APq(a){if(!a.Iv){a.wo.CU=null;Fv(a.wo);CM(a.A7,null);}}
function LI(){On.call(this);}
function AGn(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(CA(Cs(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(CA(Cs(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fn(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CA(Cs(b)+k|0,e.length);AKl(b,d,k,g-k|0);f=0;}if(!Fn(c)){l=!Fn(b)&&f>=g?Bjb:Bja;break a;}k=CA(Cs(c),i.length);m=new WA;m.Am=b;m.EA=c;l=ARU(a,d,f,g,h,0,k,m);f=m.wb;if(l===null&&0==m.qI)l=Bjb;ASv(c,h,0,m.qI);if(l!==null)break;}}EO(b,b.bj-(g-f|0)|0);return l;}
function Rm(){LI.call(this);}
function ARU(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NT(h))break a;i=Bjb;break a;}n=k+1|0;k=j[k];if(!Hq(a,k)){c=n+(-2)|0;i=Fj(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NT(h))break a;i=Bjb;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Hq(a,m))break b;if(!Hq(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(Ow(p)){c=k+(-3)|0;i=Fj(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Fj(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NT(h))break a;i=Bjb;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AJt(h,2))break a;i=Bja;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Hq(a,m))break c;if(!Hq(a,o))break c;if(!Hq(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=IG(q);m=c+1|0;j[c]=Ib(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=Fj(1);break a;}c=k+(-3)|0;i=Fj(1);}h.wb=
c;h.qI=f;return i;}
function Hq(a,b){return (b&192)!=128?0:1;}
function DZ(){var a=this;BO.call(a);a.hJ=0;a.IS=null;}
function AHb(a,b){var c=new DZ();AVi(c,a,b);return c;}
function AVi(a,b,c){a.IS=b;O(a);a.hJ=c;}
function ANA(){var a=this;D.call(a);a.Jx=0;a.GR=0;a.HV=Long_ZERO;a.I8=0;a.A9=0;a.pq=null;a.yO=null;a.Az=null;a.JV=0;a.HC=Long_ZERO;a.GT=0;a.Ie=Long_ZERO;}
function Bct(){var a=new ANA();A8L(a);return a;}
function A8L(a){a.Jx=0;a.GR=0;a.A9=255;a.GT=0;a.Ie=Long_ZERO;}
function OY(){D.call(this);this.mg=0;}
var Bjt=null;function AWo(){var a=new OY();Zi(a);return a;}
function Zi(a){a.mg=0;}
function A2E(a,b,c,d){var e,f,g,h;e=a.mg^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=Bjt.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.mg=e^(-1);}
function A6w(a){a.mg=0;}
function A9Y(a,b){a.mg=Long_and(b,new Long(4294967295, 0)).lo;}
function A7C(a){return Long_and(Long_fromInt(a.mg),new Long(4294967295, 0));}
function AFF(){var b,c,d;Bjt=null;Bjt=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}Bjt.data[b]=d;b=b+1|0;}}
function Ja(){var a=this;D.call(a);a.R=0.0;a.M=0.0;a.S=0.0;a.V=0.0;a.U=0.0;a.W=0.0;}
var Bju=null;var BeQ=0;function Nx(b,c,d,e,f,g){var h;h=new Ja;h.R=b;h.M=c;h.S=d;h.V=e;h.U=f;h.W=g;return h;}
function D4(b,c,d,e,f,g){var h,i;if(BeQ>=Bju.s)S(Bju,Nx(0.0,0.0,0.0,0.0,0.0,0.0));h=Bju;i=BeQ;BeQ=i+1|0;return M9(Z(h,i),b,c,d,e,f,g);}
function M9(a,b,c,d,e,f,g){a.R=b;a.M=c;a.S=d;a.V=e;a.U=f;a.W=g;return a;}
function Jh(a,b,c,d){var e,f,g,h,i,j,k;e=a.R;f=a.M;g=a.S;h=a.V;i=a.U;j=a.W;k=R(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=R(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=R(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return D4(e,f,g,h,i,j);}
function Du(a,b,c,d){return D4(a.R-b,a.M-c,a.S-d,a.V+b,a.U+c,a.W+d);}
function Ui(a,b,c,d){return D4(a.R+b,a.M+c,a.S+d,a.V+b,a.U+c,a.W+d);}
function Qz(a,b,c){var d,e;if(b.U>a.M&&b.M<a.U){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.V>a.R)d=c;else{d=a.R-b.V;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.R<a.V)e=d;else{e=a.V-b.R;if(e<=d)e=d;}return e;}return c;}return c;}
function Wg(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.U>a.M)d=c;else{d=a.M-b.U;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.M<a.U)e=d;else{e=a.U-b.M;if(e<=d)e=d;}return e;}return c;}return c;}
function Ul(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.U>a.M&&b.M<a.U){if(c<=0.0)d=c;else if(b.W>a.S)d=c;else{d=a.S-b.W;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.S<a.W)e=d;else{e=a.W-b.S;if(e<=d)e=d;}return e;}return c;}return c;}
function L9(a,b){return b.V>a.R&&b.R<a.V?(b.U>a.M&&b.M<a.U?(b.W>a.S&&b.S<a.W?1:0):0):0;}
function F2(a,b,c,d){a.R=a.R+b;a.M=a.M+c;a.S=a.S+d;a.V=a.V+b;a.U=a.U+c;a.W=a.W+d;return a;}
function AP0(a){return (a.V-a.R+a.U-a.M+a.W-a.S)/3.0;}
function Qi(a){return D4(a.R,a.M,a.S,a.V,a.U,a.W);}
function QX(a,b,c){var d,e,f,g,h,i,j,k;d=KP(b,c,a.R);e=KP(b,c,a.V);f=JY(b,c,a.M);g=JY(b,c,a.U);h=Kz(b,c,a.S);i=Kz(b,c,a.W);if(!RK(a,d))d=null;if(!RK(a,e))e=null;if(!Un(a,f))f=null;if(!Un(a,g))g=null;if(!U7(a,h))h=null;if(!U7(a,i))i=null;j=null;if(d!==null)j=d;if(e!==null&&!(j!==null&&Ey(b,e)>=Ey(b,j)))j=e;if(f!==null&&!(j!==null&&Ey(b,f)>=Ey(b,j)))j=f;if(g!==null&&!(j!==null&&Ey(b,g)>=Ey(b,j)))j=g;if(h!==null&&!(j!==null&&Ey(b,h)>=Ey(b,j)))j=h;if(i!==null&&!(j!==null&&Ey(b,i)>=Ey(b,j)))j=i;if(j===null)return null;k
=(-1);if(j===d)k=4;if(j===e)k=5;if(j===f)k=0;if(j===g)k=1;if(j===h)k=2;if(j===i)k=3;return A0G(0,0,0,k,j);}
function RK(a,b){return b===null?0:b.z>=a.M&&b.z<=a.U&&b.w>=a.S&&b.w<=a.W?1:0;}
function Un(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.w>=a.S&&b.w<=a.W?1:0;}
function U7(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.z>=a.M&&b.z<=a.U?1:0;}
function Xk(a,b){a.R=b.R;a.M=b.M;a.S=b.S;a.V=b.V;a.U=b.U;a.W=b.W;}
function AEw(){Bju=Cg();BeQ=0;}
function Qm(){}
function Bu(){Bs.call(this);}
var Bjv=0;var Bgr=null;var Bjw=0;var Bjx=0;var Bjy=0;var Bjz=0.0;var BjA=0;var BjB=null;var BjC=0;var BjD=0;var BjE=0.0;var BjF=0.0;var BjG=0.0;var BjH=0.0;var BjI=0.0;var BjJ=0.0;var BjK=0.0;var BjL=0.0;var BjM=0.0;var BjN=0;var BfX=0.0;var BfY=0.0;var BfZ=0.0;var Bf0=0.0;var BjO=0;var BjP=0;var BjQ=0;var BjR=0.0;var BjS=0.0;var BjT=0.0;var BjU=0;var BjV=0;var BjW=0;var BjX=0;var BjY=null;var BjZ=0;var Bj0=null;var Bj1=0;var Bj2=null;var Bj3=0;var Bj4=null;var Bj5=null;var Bgq=null;var Bj6=null;var Bj7=null;var Bj8
=null;var Bj9=null;var Bj$=null;var Bj_=null;var Bgp=0;var Bka=null;var Bkb=null;var Bkc=null;var Bkd=null;var Bke=null;var Bkf=null;var Bkg=null;var Bkh=null;var Bki=null;var Bkj=null;var Bkk=null;var Bkl=null;var Bkm=null;var Bkn=null;var Bko=Long_ZERO;var Bkp=0;function BV(){BV=Bt(Bu);A1D();}
function Bkq(){var a=new Bu();AO9(a);return a;}
function AO9(a){BV();VX(a);}
function Ba(b){BV();a:{switch(b){case 2884:K5(2884);break a;case 2896:Bjx=1;break a;case 2903:BjN=1;break a;case 2912:BjP=1;break a;case 2929:K5(2929);break a;case 3008:Bjy=1;break a;case 3042:K5(3042);break a;case 3553:Bjw=1;break a;case 32823:K5(32823);break a;case 32826:break;default:break a;}}}
function HL(b){var c;BV();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Bb();BdM.depthFunc(c);}
function SA(b,c){BV();Bjz=c;}
function C$(b){BV();BjX=b;}
function GN(){BV();switch(BjX){case 5888:break;case 5889:return Bj0.data[Bj1];case 5890:return Bj2.data[Bj3];default:}return BjY.data[BjZ];}
function C9(){BV();Fq(GN());}
function FP(b,c,d,e){BV();Bb();Bd9.data[0]=b;Bd9.data[1]=c;Bd9.data[2]=d;Bd9.data[3]=e;BdM.viewport(b,c,d,e);}
function D5(b){BV();Bb();BdM.clear(b);}
function Ir(b,c,d,e,f,g){var h,i,j,k;BV();h=GN();i=c-b;h.et=2.0/i;h.er=0.0;h.es=0.0;h.eq=0.0;h.ew=0.0;j=e-d;h.ex=2.0/j;h.eu=0.0;h.ev=0.0;h.eB=0.0;h.ez=0.0;k=g-f;h.eA=2.0/k;h.ey=0.0;h.gV= -(c+b)/i;h.gW= -(e+d)/j;h.gT=(g+f)/k;h.gU=1.0;}
function Bw(b,c,d){var e;BV();L5(Bj7,b,c,d);e=GN();Vd(e,Bj7,e);if(!BjA)return;e=new Cb;Bl(e,B(310));M(e);}
function HB(b,c,d,e){BV();Bb();BdM.clearColor(b,c,d,e);}
function Bd(b){BV();a:{switch(b){case 2884:J6(2884);break a;case 2896:Bjx=0;break a;case 2903:BjN=0;break a;case 2912:BjP=0;break a;case 2929:J6(2929);break a;case 3008:Bjy=0;break a;case 3042:J6(3042);break a;case 3553:Bjw=0;break a;case 32823:J6(32823);break a;case 32826:break;default:break a;}}}
function BS(b,c,d,e){BV();BjE=b;BjF=c;BjG=d;BjH=e;}
function SE(b,c,d,e,f,g,h,i,j){var k,l,m,n;BV();Bb();if(j===null){k=BdM;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=Cs(j);k=Bd$;n=0;while(n<m){h=(ALS(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(Bd$.buffer,0,m);BdM.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function B1(){BV();a:{switch(BjX){case 5888:break;case 5889:if(Bj1>=(Bj0.data.length-1|0)){Co(DB(),B(311));break a;}Bj1=Bj1+1|0;GQ(Bj0.data[Bj1],Bj0.data[Bj1-1|0]);break a;case 5890:if(Bj3>=(Bj2.data.length-1|0)){Co(DB(),B(312));break a;}Bj3=Bj3+1|0;GQ(Bj2.data[Bj3],Bj2.data[Bj3-1|0]);break a;default:}if(BjZ>=(BjY.data.length-1|0))Co(DB(),B(313));else{BjZ=BjZ+1|0;GQ(BjY.data[BjZ],BjY.data[BjZ-1|0]);}}}
function Bv(b,c,d,e){var f;BV();L5(Bj7,c,d,e);f=GN();W5(f,b*0.01745329238474369,Bj7,f);if(!BjA)return;f=new Cb;Bl(f,B(310));M(f);}
function BD(){BV();a:{switch(BjX){case 5888:break;case 5889:if(Bj1<=0){Co(DB(),B(314));break a;}Bj1=Bj1-1|0;break a;case 5890:if(Bj3<=0){Co(DB(),B(315));break a;}Bj3=Bj3-1|0;break a;default:}if(BjZ<=0)Co(DB(),B(316));else BjZ=BjZ-1|0;}}
function TW(b,c){BV();a:{switch(b){case 2982:break;case 2983:TY(Bj0.data[Bj1],c);break a;default:}TY(BjY.data[BjZ],c);}}
function CB(b,c,d){var e;BV();L5(Bj7,b,c,d);ZJ(GN(),Bj7);if(!BjA)return;e=new Cb;Bl(e,B(310));M(e);}
function De(b,c){BV();BjQ=b==1&&c==771?1:0;Bb();BdM.blendFunc(b,c);}
function Gv(b){BV();Bb();BdM.depthMask(!!b);}
function DO(b,c,d,e){BV();Bb();BdM.colorMask(!!b,!!c,!!d,!!e);}
function Cn(b,c){var d,e;BV();d=ANO(Bgr,c);Bb();e=BdM;d=d!==null?d.BQ:null;e.bindTexture(3553,d);}
function Ej(b,c,d){BV();if(!(d!=33071&&d!=10496))d=33071;Bb();BdM.texParameteri(b,c,d);}
function Ch(b,c,d){var e;BV();e=Ed(b*b+c*c+d*d);BjI=b/e;BjJ=c/e;BjK=d/e;}
function Ok(b){BV();Bj5=b;RW(b);}
function FU(b){var c;BV();if(!BjA){c=CP(Bj6,CY(b));if(c!==null&&c.jK>0){Rw(c.lM|0|(BjN&&Bjx?8:0)|(!BjP?0:16)|(!Bjy?0:32)|(!Bjw?0:64));Ok(c.ri);PE(0,c.jK);BjV=BjV+((c.jK*6|0)/4|0)|0;BjW=BjW+(c.jK/2|0)|0;}}}
function FI(b,c){BV();if(!BjA){BjB=CP(Bgq,CY(b));if(BjB!==null){BjB.lM=(-1);BjB.jK=0;BjA=1;}}}
function Ee(){var b,c,d,e;BV();if(BjA){BjA=0;Bb();b=BeF.buffer;c=BeE;d=new Int32Array(b,0,c);BeE=0;e=UN(d);if(e>0){if(BjB.o0===null){BP(Bj6,CY(BjB.By),BjB);BjB.ri=Pd();BjB.o0=L$();b=Pe(BjB.lM);Ok(BjB.ri);Hh(34962,BjB.o0);RF(b);}Hh(34962,BjB.o0);PG(34962,d,35044);BjU=BjU+e|0;}}}
function F8(b,c,d){BV();BjE=b;BjF=c;BjG=d;BjH=1.0;}
function OM(b,c){BV();Bb();BdM.polygonOffset(b,c);}
function W1(b){BV();a:{switch(b){case 32886:break;case 32888:BjD=1;break a;default:break a;}BjC=1;}}
function Tu(b){BV();a:{switch(b){case 32886:break;case 32888:BjD=0;break a;default:break a;}BjC=0;}}
function Qc(){BV();return 0|(!BjC?0:1)|(!BjD?0:4);}
function Rw(b){var c;BV();c=Pe(b);Bka=c;AQ3(c);if(Bjy)AIZ(c,Bjz);ALR(c,BjE,BjF,BjG,BjH);if(BjP){ALt(c,(!BjQ?0:2)+BjO|0);AQd(c,BfX,BfY,BfZ,Bf0);AKP(c,BjT);APP(c,BjR,BjS);}AMw(c,BjY.data[BjZ]);AM6(c,Bj0.data[Bj1]);Z2(c,Bj2.data[Bj3]);if(BjN&&Bjx){ACa(c,BjI,BjJ,BjK);ANg(c,Bj$,Bj_);}AON(c,BjL,BjM);}
function ALw(b,c,d,e){var f;BV();if(BjA){if(b!=7)Co(DB(),B(317));else{if(BjB.lM==(-1))BjB.lM=Qc();else if(BjB.lM!=Qc())Co(DB(),B(318));f=BjB;f.jK=f.jK+d|0;Bb();e=e;if((BeE+e.length|0)<BeF.length){f=BeF;b=BeE;f.set(e,b);BeE=BeE+e.length|0;}}}else{BjU=BjU+UN(e)|0;BjV=BjV+d|0;Rw(0|(!BjC?0:1)|(!BjD?0:4)|(BjN&&Bjx?8:0)|(!BjP?0:16)|(!Bjy?0:32)|(!Bjw?0:64));Ok(Bka.ub);Hh(34962,Bka.uO);if(!Bka.xe){Bka.xe=1;PG(34962,Bkb,35048);}f=BdM;e=e;f.bufferSubData(34962,0,e);if(b==7){PE(c,d);BjW=BjW+(d/2|0)|0;}else{a:{b:{switch
(b){case 1:break;case 2:case 4:break b;case 3:b=3;BjW=BjW+(d-1|0)|0;break a;case 5:b=5;BjW=BjW+(d-2|0)|0;break a;case 6:b=6;BjW=BjW+(d-2|0)|0;break a;default:break b;}b=1;BjW=BjW+(d/2|0)|0;break a;}b=4;BjW=BjW+(d/3|0)|0;}BdM.drawArrays(b,c,d);}}}
function PE(b,c){var d,e,f,g,h,i,j;BV();if(Bj4===null){if(Bjv)d=ALW($rt_createIntArray(49200));else{e=A5F(0,196800,$rt_createByteArray(196800),0,196800,1,0);e.kK=Bgs;d=AHO(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;h=h<<16;NS(d,g|h);NS(d,j|h);NS(d,i|j<<16);f=f+1|0;}Gw(d);Bj4=L$();Hh(34963,Bj4);g=Cs(d);e=new Int32Array(Bd$.buffer);h=0;while(h<g){i=AGe(d);e[h]=i;h=h+1|0;}d=Bd$.buffer;g=g*4|0;e=new Uint8Array(d,0,g);BdM.bufferData(34963,e,35044);}if(!Bj5.vQ){Bj5.vQ=1;Hh(34963,Bj4);}g=(c*6|0)/4|0;b=
(b*6|0)/4|0;Bb();BdM.drawElements(4,g,5123,b);}
function Md(b,c){BV();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}BjO=2;break a;}BjO=1;}}}
function GM(b,c){BV();a:{switch(b){case 2914:break;case 2915:BjR=c;break a;case 2916:BjS=c;break a;default:break a;}BjT=c;}}
function A1D(){var b,c,d;Bb();Bjv=1;Bgr=A_C(256);Bjw=0;Bjx=0;Bjy=0;Bjz=0.10000000149011612;BjA=0;BjB=null;BjC=0;BjD=0;BjE=1.0;BjF=1.0;BjG=1.0;BjH=1.0;BjI=1.0;BjJ=0.0;BjK=0.0;BjL=0.0;BjM=0.0;BjN=0;BfX=1.0;BfY=1.0;BfZ=1.0;Bf0=1.0;BjO=1;BjP=0;BjQ=0;BjR=1.0;BjS=1.0;BjT=1.0;BjU=0;BjV=0;BjW=0;BjX=5888;BjY=I(Es,32);BjZ=0;Bj0=I(Es,6);Bj1=0;Bj2=I(Es,16);Bj3=0;b=0;while(b<BjY.data.length){c=BjY.data;d=new Es;Fq(d);c[b]=d;b=b+1|0;}b=0;while(b<Bj0.data.length){c=Bj0.data;d=new Es;Fq(d);c[b]=d;b=b+1|0;}b=0;while(b<Bj2.data.length)
{c=Bj2.data;d=new Es;Fq(d);c[b]=d;b=b+1|0;}Bj4=null;Bj5=null;Bgq=Dd();Bj6=Dd();Bj7=new U9;Bj8=new G_;Bj9=new G_;Bj$=new G_;Bj_=new G_;Bgp=0;Bka=null;Bkb=new Int32Array(525000);Bkc=null;Bkd=null;Bke=null;Bkf=null;Bkg=null;Bkh=A_C(256);d=new Es;Fq(d);Bki=Kx(d);Bkj=$rt_createFloatArray(16);Bkk=$rt_createFloatArray(16);d=new Es;Fq(d);Bkl=d;d=new Es;Fq(d);Bkm=d;Bkn=new G_;Bko=Long_ZERO;Bkp=0;}
function ACG(){D.call(this);}
function Bkr(){var a=new ACG();AUq(a);return a;}
function AUq(a){return;}
function DV(){var b,c;Bb();if(!BeG)a:{Beg=null;if(!P1(BdZ)){b=Tq(BdZ,0);Beg=b;if(b!==null){c=1;break a;}}c=0;}else{OA(BdZ);Beg=null;Bei.data[29]=0;Bei.data[157]=0;Bei.data[28]=0;Bei.data[219]=0;Bei.data[220]=0;BeG=0;c=0;}return c;}
function CU(){Bb();return Beg===null?0:DC($rt_str(Beg.type),B(319))?0:1;}
function Bg(){Bb();return Beg===null?(-1):T8(Beg.which);}
function APZ(b){Bb();Bd6=b;}
function BL(b){Bb();if(BeG){Bei.data[28]=0;Bei.data[29]=0;Bei.data[157]=0;Bei.data[219]=0;Bei.data[220]=0;}return Bei.data[b];}
function NI(){var a=this;D.call(a);a.rt=0;a.tk=0;a.m3=0;a.lq=0;a.hi=0;a.iv=0;a.dx=0;a.mq=0;a.lf=0;a.t3=null;a.tV=null;a.xl=null;a.uw=null;a.yE=null;a.fs=null;a.gi=null;a.BO=null;a.f9=null;a.Ca=null;a.Dj=null;a.nc=null;a.ww=null;a.zO=0;a.jW=0;a.cC=0;a.du=0;a.pP=0;}
var Bks=null;var Bkt=null;function Bac(a){var b=new NI();APg(b,a);return b;}
function APg(a,b){var c,d;a.rt=1;a.tk=1;a.m3=0;a.lq=0;a.hi=0;a.iv=1;a.dx=0;a.mq=0;a.lf=1;a.t3=E9(B(320),17);a.tV=E9(B(321),30);a.xl=E9(B(322),31);a.uw=E9(B(323),32);a.yE=E9(B(324),57);a.fs=E9(B(325),23);a.gi=E9(B(326),16);a.BO=E9(B(327),20);a.f9=E9(B(328),33);a.Ca=E9(B(329),28);a.Dj=E9(B(330),19);c=I(Vv,11);d=c.data;d[0]=a.t3;d[1]=a.tV;d[2]=a.xl;d[3]=a.uw;d[4]=a.yE;d[5]=a.gi;d[6]=a.fs;d[7]=a.BO;d[8]=a.f9;d[9]=a.Ca;d[10]=a.Dj;a.nc=c;a.zO=12;a.jW=2;a.cC=0;a.du=0;a.pP=0;a.ww=b;}
function K7(a,b){var c;c=new T;V(c);c=J(J(c,a.nc.data[b].EC),B(12));b=a.nc.data[b].bI;Bb();return U(J(c,b>=0&&b<256?BeC.data[b]:B(10)));}
function X$(a,b,c){a.nc.data[b].bI=c;}
function Ea(a,b,c){if(!b)a.rt=a.rt?0:1;if(b==1)a.tk=a.tk?0:1;if(b==2)a.m3=a.m3?0:1;if(b==3)a.lq=a.lq?0:1;if(b==4)a.hi=(a.hi+c|0)&3;if(b==5)a.iv=a.iv?0:1;if(b==6)a.dx=a.dx?0:1;if(b==7)a.mq=a.mq?0:1;if(b==8)a.jW=(a.jW+c|0)&3;if(b==9){a.lf=a.lf?0:1;Je(a.ww.dX);}if(b==10){a.du=a.du?0:1;if(a.du){a.hi=2;a.iv=0;a.lf=0;a.dx=0;}Je(a.ww.dX);}if(b==11)a.pP=a.pP?0:1;}
function Q3(a,b){var c;a:{if(!b){c=new T;V(c);c=U(J(J(c,B(331)),!a.rt?B(332):B(333)));break a;}if(b==1){c=new T;V(c);c=U(J(J(c,B(334)),!a.tk?B(332):B(333)));break a;}if(b==2){c=new T;V(c);c=U(J(J(c,B(335)),!a.m3?B(332):B(333)));break a;}if(b==3){c=new T;V(c);c=U(J(J(c,B(336)),!a.lq?B(332):B(333)));break a;}if(b==4){c=new T;V(c);c=U(J(J(c,B(337)),Bks.data[a.hi]));break a;}if(b==5){c=new T;V(c);c=U(J(J(c,B(338)),!a.iv?B(332):B(333)));break a;}if(b==6){c=new T;V(c);c=U(J(J(c,B(339)),!a.dx?B(332):B(333)));break a;}if
(b==7){c=new T;V(c);c=U(J(J(c,B(340)),!a.mq?B(332):B(333)));break a;}if(b==8){c=new T;V(c);c=U(J(J(c,B(341)),Bkt.data[a.jW]));break a;}if(b==9){c=new T;V(c);c=U(J(J(c,B(342)),!a.lf?B(343):B(344)));break a;}if(b==10){c=new T;V(c);c=U(J(J(c,B(345)),!a.du?B(332):B(333)));break a;}if(b!=11){c=B(3);break a;}c=new T;V(c);c=U(J(J(c,B(346)),!a.pP?B(332):B(333)));}return c;}
function A2y(a){return;}
function A06(a){return;}
function AHX(){var b,c;b=I(B2,4);c=b.data;c[0]=B(347);c[1]=B(348);c[2]=B(349);c[3]=B(350);Bks=b;b=I(B2,4);c=b.data;c[0]=B(351);c[1]=B(352);c[2]=B(353);c[3]=B(354);Bkt=b;}
function Ip(){var a=this;D.call(a);a.t4=null;a.pZ=0;a.my=0;a.oL=0;a.oM=0;a.kX=0;a.k6=0;a.li=0;a.BB=0;a.Er=0;a.Ds=0;a.nU=0;a.o3=0;a.p7=0;a.fw=0;a.g1=null;a.EZ=0;a.A0=0;a.DN=0;a.Hw=0.0;a.i3=0;a.E9=null;a.Ip=0;a.xI=0;a.JQ=0;a.om=0;a.kG=0;a.gk=null;a.jh=null;}
var Bku=null;var BeS=0;function Tw(){Tw=Bt(Ip);A_r();}
function BbA(a,b,c,d,e,f,g){var h=new Ip();AJb(h,a,b,c,d,e,f,g);return h;}
function AJb(a,b,c,d,e,f,g,h){Tw();a.pZ=(-1);a.fw=0;a.g1=$rt_createBooleanArray(2);a.xI=1;a.kG=0;a.gk=Cg();a.t4=b;a.jh=c;a.li=g;a.k6=g;a.kX=g;a.Hw=D_((Bi(a.kX,a.kX)+Bi(a.k6,a.k6)|0)+Bi(a.li,a.li)|0)/2.0;a.pZ=h;a.my=(-999);So(a,d,e,f);a.i3=0;}
function So(a,b,c,d){var e,f;if(!(b==a.my&&c==a.oL&&d==a.oM)){PX(a);a.my=b;a.oL=c;a.oM=d;a.EZ=b+(a.kX/2|0)|0;a.A0=c+(a.k6/2|0)|0;a.DN=d+(a.li/2|0)|0;a.nU=b&1023;a.o3=c;a.p7=d&1023;a.BB=b-a.nU|0;a.Er=c-a.o3|0;a.Ds=d-a.p7|0;a.E9=Nx(b-2.0,c-2.0,d-2.0,(b+a.kX|0)+2.0,(c+a.k6|0)+2.0,(d+a.li|0)+2.0);FI(a.pZ+2|0,4864);e=D4(a.nU-2.0,a.o3-2.0,a.p7-2.0,(a.nU+a.kX|0)+2.0,(a.o3+a.k6|0)+2.0,(a.p7+a.li|0)+2.0);BA();f=BeP;Bz(f);Be(f,e.R,e.U,e.S);Be(f,e.V,e.U,e.S);Be(f,e.V,e.M,e.S);Be(f,e.R,e.M,e.S);Be(f,e.R,e.M,e.W);Be(f,e.V,
e.M,e.W);Be(f,e.V,e.U,e.W);Be(f,e.R,e.U,e.W);Be(f,e.R,e.M,e.S);Be(f,e.V,e.M,e.S);Be(f,e.V,e.M,e.W);Be(f,e.R,e.M,e.W);Be(f,e.R,e.U,e.W);Be(f,e.V,e.U,e.W);Be(f,e.V,e.U,e.S);Be(f,e.R,e.U,e.S);Be(f,e.R,e.M,e.W);Be(f,e.R,e.U,e.W);Be(f,e.R,e.U,e.S);Be(f,e.R,e.M,e.S);Be(f,e.V,e.M,e.S);Be(f,e.V,e.U,e.S);Be(f,e.V,e.U,e.W);Be(f,e.V,e.M,e.W);Br(f);Ee();KX(a);}}
function ADl(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.i3)return;BeS=BeS+1|0;b=a.my;c=a.oL;d=a.oM;e=a.my+a.kX|0;f=a.oL+a.k6|0;g=a.oM+a.li|0;h=0;while(h<2){a.g1.data[h]=1;h=h+1|0;}Bkv=0;i=Ga();DF(i,a.gk);Dx(a.gk);j=new Iv;k
=a.t4;l=b-1|0;m=c-1|0;n=d-1|0;o=e+1|0;h=f+1|0;p=g+1|0;$p=1;case 1:AEy(j,k,l,m,n,o,h,p);if(C()){break _;}k=A8o(j);l=0;a:{while(true){if(l>=2)break a;q=0;r=0;s=0;t=c;while(t<f){m=d;while(m<g){n=b;if(n<e){$p=2;continue _;}m=m+1|0;}t=t+1|0;}if(!s)r=0;else{Br(Bku);Ee();Fb(Bku,0.0,0.0,0.0);}if(r)a.g1.data[l]=0;if(!q)break;l=l+1|0;}}u=Ga();DF(u,a.gk);Fu(u,i);DF(a.jh,u);Fu(i,a.gk);Gf(a.jh,i);a.om=Bkv;a.kG=1;return;case 2:$z=HA(j,n,t,m);if(C()){break _;}p=$z;if(p>0){if(!s){s=1;FI(a.pZ+l|0,4864);Bz(Bku);Fb(Bku,a.nU-a.my
|0,a.o3-a.oL|0,a.p7-a.oM|0);}if(!l){L();if(BeT.data[p] instanceof Eg){$p=3;continue _;}}L();v=BeT.data[p];o=R(v.pR(),l);if(o)q=1;else if(!o){$p=4;continue _;}}n=n+1|0;b:{c:while(true){if(n<e){continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bku);Ee();Fb(Bku,0.0,0.0,0.0);}if(r)a.g1.data[l]=0;if(!q)break c;l=l+1|0;if(l>=2)break b;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Ga();DF(u,a.gk);Fu(u,i);DF(a.jh,u);Fu(i,a.gk);Gf(a.jh,i);a.om=Bkv;a.kG=1;return;case 3:$z=AFY(j,n,t,m);if(C()){break _;}w=$z;if(AIm(Bkw,
w))S(a.gk,w);L();v=BeT.data[p];o=R(v.pR(),l);if(o)q=1;else if(!o){$p=4;continue _;}n=n+1|0;d:{e:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bku);Ee();Fb(Bku,0.0,0.0,0.0);}if(r)a.g1.data[l]=0;if(!q)break e;l=l+1|0;if(l>=2)break d;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Ga();DF(u,a.gk);Fu(u,i);DF(a.jh,u);Fu(i,a.gk);Gf(a.jh,i);a.om=Bkv;a.kG=1;return;case 4:$z=AN5(k,v,n,t,m);if(C()){break _;}o=$z;r=r|o;n=n+1|0;a:{f:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g)
{t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bku);Ee();Fb(Bku,0.0,0.0,0.0);}if(r)a.g1.data[l]=0;if(!q)break f;l=l+1|0;if(l>=2)break a;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Ga();DF(u,a.gk);Fu(u,i);DF(a.jh,u);Fu(i,a.gk);Gf(a.jh,i);a.om=Bkv;a.kG=1;return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function G6(a,b){var c,d,e;c=b.d-a.EZ;d=b.j-a.A0;e=b.e-a.DN;return c*c+d*d+e*e;}
function PX(a){var b;b=0;while(b<2){a.g1.data[b]=1;b=b+1|0;}a.fw=0;a.kG=0;}
function ARK(a){PX(a);a.t4=null;}
function PN(a,b){return !a.fw?(-1):a.g1.data[b]?(-1):a.pZ+b|0;}
function ASe(a,b){a.fw=ML(b,a.E9);}
function AHB(a){return !a.kG?0:a.g1.data[0]&&a.g1.data[1]?1:0;}
function KX(a){a.i3=1;}
function A_r(){BA();Bku=BeP;BeS=0;}
function ASf(){var a=this;E5.call(a);a.jr=null;a.lJ=0;}
function A7F(){var a=new ASf();AXP(a);return a;}
function A$k(a){var b=new ASf();Y9(b,a);return b;}
function AXP(a){Y9(a,32);}
function Y9(a,b){a.jr=$rt_createByteArray(b);}
function A7T(a,b){var c,d;RA(a,a.lJ+1|0);c=a.jr.data;d=a.lJ;a.lJ=d+1|0;c[d]=b<<24>>24;}
function Ry(a,b,c,d){var e,f,g,h,i;RA(a,a.lJ+d|0);e=0;while(e<d){f=b.data;g=a.jr.data;h=a.lJ;a.lJ=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function RA(a,b){if(a.jr.data.length<b){b=DE(b,(a.jr.data.length*3|0)/2|0);a.jr=Ol(a.jr,b);}}
function Ig(a){return Ol(a.jr,a.lJ);}
function JW(){B6.call(this);}
function Bkx(){var a=new JW();A5J(a);return a;}
function A5J(a){O(a);}
function Oj(){}
function F0(){var a=this;D.call(a);a.f5=null;a.dY=null;a.l4=null;a.gL=null;a.kS=null;a.fD=null;a.ee=Long_ZERO;a.so=Long_ZERO;a.sS=Long_ZERO;a.rr=Long_ZERO;a.ge=0;a.hW=0;a.sc=0;a.sn=0;a.bh=null;a.i2=0;a.C_=null;a.q=null;a.fj=0;a.p0=0;a.fi=0;a.tF=0;a.cv=null;a.kI=null;a.lw=Long_ZERO;a.ti=null;a.wL=Long_ZERO;a.I1=null;a.na=null;a.qj=null;a.eL=0;}
var Bky=null;var Bkz=null;var BkA=0;function BkB(a,b){var c=new F0();Q4(c,a,b);return c;}
function ASh(b){var c,d,e,f,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=new T;V(c);c=U(J(J(c,b),B(355)));$p=1;case 1:$z=ALK(c);if(C()){break _;}d=$z;c=Dy();e=new T;V(e);Co(c,U(J(J(e,b),B(355))));if(d===null)return null;a:{try{e=MB(MZ(O3(Us(d))),B(356));}catch($$e){$$je=Bj($$e);if($$je instanceof B3){f=$$je;break a;}else{throw $$e;}}return e;}CF(f);return null;default:Fa();}}C3().s(b,c,d,e,f,$p);}
function Q4(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.eL=0;a.f5=Cg();a.dY=Cg();a.l4=Cg();a.gL=Bb5();a.kS=Ga();a.fD=Cg();a.ee=Long_ZERO;a.so=Long_fromInt(8961023);a.sS=Long_fromInt(12638463);a.rr=Long_fromInt(16777215);a.ge=0;a.hW=Lr(new DA);a.sc=1013904223;a.sn=0;a.q=new DA;a.tF=0;a.cv=Cg();a.lw=Long_ZERO;a.wL=Long_ZERO;a.na=Cg();a.qj=Cg();a.I1=b;Bkz=b;b=new T;V(b);b
=U(J(J(b,Bkz),B(355)));$p=1;case 1:$z=ALK(b);if(C()){break _;}d=$z;b=Dy();e=new T;V(e);Co(b,U(J(J(e,Bkz),B(355))));f=d!==null?1:0;a:{a.tF=f;if(d!==null){try{g=MB(MZ(O3(Us(d))),B(356));a.lw=Mf(g,B(357));a.fj=FW(g,B(358));a.p0=FW(g,B(359));a.fi=FW(g,B(360));a.ee=Mf(g,B(361));a.wL=Mf(g,B(362));a.ti=MB(g,B(5));break a;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){h=$$je;}else{throw $$e;}}CF(h);}}f=0;if(Long_eq(a.lw,Long_ZERO)){a.lw=c;f=1;}a.kI=ABs(a,Bkz);if(!f){Rd(a);return;}a.fj=0;a.p0=64;a.fi=0;f=a.fj;i=a.fi;$p
=2;case 2:$z=AJU(a,f,i);if(C()){break _;}f=$z;L();if(f!=Bfe.b?0:1){Rd(a);return;}a.fj=a.fj+(E(a.q,64)-E(a.q,64)|0)|0;a.fi=a.fi+(E(a.q,64)-E(a.q,64)|0)|0;f=a.fj;i=a.fi;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ABs(a,b){var c,d,e;c=new V5;d=new Xs;d.r4=b;e=new Sz;e.Gi=$rt_createIntMultiArray([32,32]);e.t=a;e.a=new DA;e.yV=Hb(e.a,16);e.yW=Hb(e.a,16);e.yU=Hb(e.a,8);e.tP=Hb(e.a,4);e.yY=Hb(e.a,4);e.yZ=Hb(e.a,10);e.yX=Hb(e.a,16);e.iU=Hb(e.a,8);c.bl=I(I8,1024);c.fU=(-999999999);c.gp=(-999999999);c.nj=A9w(a,$rt_createByteArray(32768),0,0);c.nj.Ep=1;c.nj.to=1;c.ns=a;c.jn=d;c.kR=e;return c;}
function AP9(a){var b,c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fj;c=a.fi;$p=1;case 1:$z=AJU(a,b,c);if(C()){break _;}b=$z;if(b)return;a.fj=a.fj+(E(a.q,8)-E(a.q,8)|0)|0;a.fi=a.fi+(E(a.q,8)-E(a.q,8)|0)|0;b=a.fj;c=a.fi;continue _;default:Fa();}}C3().s(a,b,c,$p);}
function AJU(a,b,c){var d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=63;e=d+1|0;$p=1;case 1:$z=ACB(a,b,e,c);if(C()){break _;}f=$z;if(!f){$p=2;continue _;}d=e;e=d+1|0;continue _;case 2:$z=ACB(a,b,d,c);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AGu(a){var b,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{if(a.ti!==null){YZ(a.bh,a.ti);a.ti=null;}b=a.bh;$p=1;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){b=$$je;}else{throw $$e;}}CF(b);return;case 1:a:{try{AOl(a,b);if(C()){break _;}break a;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){b=$$je;}else{throw $$e;}}CF(b);}return;default:Fa();}}C3().s(a,b,$p);}
function ABK(a,b,c){var d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null)YP(c,B(363));$p=1;case 1:AMQ(a);if(C()){break _;}if(c===null){d=a.kI;$p=2;continue _;}d=B(364);$p=3;continue _;case 2:AN3(d,b,c);if(C()){break _;}return;case 3:AR$(c,d);if(C()){break _;}d=a.kI;$p=2;continue _;default:Fa();}}C3().s(a,b,c,d,$p);}
function AMQ(a){var b,c,d,e,f,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=Ha();Id(b,B(357),a.lw);Gz(b,B(358),a.fj);Gz(b,B(359),a.p0);Gz(b,B(360),a.fi);Id(b,B(361),a.ee);Id(b,B(362),a.wL);Id(b,B(365),B$());if(a.bh!==null){c=Ha();ALz(a.bh,c);ANX(b,B(5),c);}c=Ha();HH(c,B(356),b);try{b=BT(J(J(B4(),Bkz),B(366)));$p=1;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){d=$$je;}else{throw $$e;}}CF(d);return;case 1:try
{ALK(b);if(C()){break _;}b=BT(J(J(B4(),Bkz),B(367)));$p=2;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){d=$$je;}else{throw $$e;}}CF(d);return;case 2:try{ALK(b);if(C()){break _;}b=BT(J(J(B4(),Bkz),B(355)));$p=3;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){d=$$je;}else{throw $$e;}}CF(d);return;case 3:try{ALK(b);if(C()){break _;}e=A$k(131072);R4(c,AWn(e));QT(BT(J(J(B4(),Bkz),B(366))),Ig(e));b=BT(J(J(B4(),Bkz),B(367)));$p=4;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){d=
$$je;}else{throw $$e;}}CF(d);return;case 4:try{$z=ALK(b);if(C()){break _;}f=$z;if(f!==null)EQ(BT(J(J(B4(),Bkz),B(367))));NH(BT(J(J(B4(),Bkz),B(355))),BT(J(J(B4(),Bkz),B(367))));b=BT(J(J(B4(),Bkz),B(355)));$p=5;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){d=$$je;}else{throw $$e;}}CF(d);return;case 5:try{$z=ALK(b);if(C()){break _;}f=$z;if(f!==null)EQ(BT(J(J(B4(),Bkz),B(355))));NH(BT(J(J(B4(),Bkz),B(366))),BT(J(J(B4(),Bkz),B(355))));b=BT(J(J(B4(),Bkz),B(366)));$p=6;continue _;}catch($$e){$$je=Bj($$e);if
($$je instanceof BO){d=$$je;}else{throw $$e;}}CF(d);return;case 6:a:{try{$z=ALK(b);if(C()){break _;}f=$z;if(f!==null)EQ(BT(J(J(B4(),Bkz),B(366))));break a;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){d=$$je;}else{throw $$e;}}CF(d);}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AAS(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b){$p=2;continue _;}c=a.kI;b=0;d=null;$p=1;case 1:$z=AN3(c,b,d);if(C()){break _;}b=$z;return b;case 2:AMQ(a);if(C()){break _;}c=a.kI;b=0;d=null;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,$p);}
function ACB(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)b=0;else{if(c<128){e=b>>4;f=d>>4;$p=1;continue _;}b=0;}}else b=0;return b;case 1:$z=Z0(a,e,f);if(C()){break _;}g=$z;return FR(g,b&15,c,d&15);default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function Mr(a,b,c,d){return c>=0&&c<128?C4(a,b>>4,d>>4):0;}
function G4(a,b,c,d,e,f,g){var h,i;if(f>=0&&c<128){h=b>>4;b=d>>4;c=e>>4;d=g>>4;while(h<=c){i=b;while(i<=d){if(!C4(a,h,i))return 0;i=i+1|0;}h=h+1|0;}return 1;}return 0;}
function C4(a,b,c){return B0(a.kI,b,c);}
function X2(a,b,c){var d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b>>4;b=c>>4;$p=1;case 1:$z=Z0(a,d,b);if(C()){break _;}e=$z;return e;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function Z0(a,b,c){var d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.kI;$p=1;case 1:$z=AOj(d,b,c);if(C()){break _;}d=$z;return d;default:Fa();}}C3().s(a,b,c,d,$p);}
function AJr(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;g=b>>4;h=d>>4;$p=1;continue _;}return 0;case 1:$z=Z0(a,g,h);if(C()){break _;}i=$z;b=b&15;d=d&15;$p=2;case 2:$z=ADI(i,b,c,d,e,f);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALx(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=Z0(a,f,g);if(C()){break _;}h=$z;g=b&15;b=d&15;$p=2;case 2:$z=ADF(h,g,c,b,e);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AB6(a,b,c,d){var e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACB(a,b,c,d);if(C()){break _;}e=$z;if(!e)f=Bge;else{L();f=BeT.data[e].b_;}return f;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AEN(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;e=b>>4;f=d>>4;$p=1;continue _;}return 0;case 1:$z=Z0(a,e,f);if(C()){break _;}g=$z;return RY(g,b&15,c,d&15);default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACl(a,b,c,d,e){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKA(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AKA(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=Z0(a,f,g);if(C()){break _;}h=$z;AAB(h,b&15,c,d&15,e);return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function APB(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALx(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AER(a,b,c,d,e);if(C()){break _;}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AI3(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AJr(a,b,c,d,e,f);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AER(a,b,c,d,e);if(C()){break _;}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AER(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;while(f<a.cv.s){Rv(Z(a.cv,f),b,c,d);f=f+1|0;}$p=1;case 1:AHR(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function APN(a,b,c,d,e){var f;if(d<=e){f=d;d=e;e=f;}Jn(a,b,e,c,b,d,c);}
function Jn(a,b,c,d,e,f,g){var h;h=0;while(h<a.cv.s){AOK(Z(a.cv,h),b,c,d,e,f,g);h=h+1|0;}}
function AHR(a,b,c,d,e){var f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b-1|0;$p=1;case 1:AO$(a,f,c,d,e);if(C()){break _;}f=b+1|0;$p=2;case 2:AO$(a,f,c,d,e);if(C()){break _;}f=c-1|0;$p=3;case 3:AO$(a,b,f,d,e);if(C()){break _;}f=c+1|0;$p=4;case 4:AO$(a,b,f,d,e);if(C()){break _;}f=d-1|0;$p=5;case 5:AO$(a,b,c,f,e);if(C()){break _;}d=d+1|0;$p=6;case 6:AO$(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,
$p);}
function AO$(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sn)return;L();f=BeT.data;$p=1;case 1:$z=ACB(a,b,c,d);if(C()){break _;}g=$z;h=f[g];if(h===null)return;$p=2;case 2:h.e1(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AGi(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=Z0(a,e,f);if(C()){break _;}g=$z;return Pr(g,b&15,c,d&15);default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function XF(a,b,c,d){var e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=1;$p=1;case 1:$z=AQQ(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AQQ(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(e){$p=1;continue _;}if(c<0)return 0;if(c>=128){f=15-a.ge|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}return 15;case 1:$z=ACB(a,b,c,d);if(C()){break _;}f=$z;L();if(f!=BeY.b&&f!=Bg8.b){if(c<0)return 0;if(c>=128){f=15
-a.ge|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}e=c+1|0;g=0;$p=2;case 2:$z=AQQ(a,b,e,d,g);if(C()){break _;}h=$z;e=b+1|0;g=0;$p=3;case 3:$z=AQQ(a,e,c,d,g);if(C()){break _;}g=$z;e=b-1|0;i=0;$p=4;case 4:$z=AQQ(a,e,c,d,i);if(C()){break _;}i=$z;e=d+1|0;j=0;$p=5;case 5:$z=AQQ(a,b,c,e,j);if(C()){break _;}j=$z;d=d-1|0;e=0;$p=6;case 6:$z=AQQ(a,b,c,d,e);if(C()){break _;}k=$z;if(g<=h)g=h;if(i<=g)i=g;if(j<=i)j=i;if(k<=j)k=j;return k;case 7:$z=Z0(a,g,e);if(C()){break _;}l=$z;return VW(l,b&15,c,d&15,a.ge);default:
Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ZD(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 1;e=b>>4;f=d>>4;if(!C4(a,e,f))return 0;$p=1;continue _;}return 0;case 1:$z=Z0(a,e,f);if(C()){break _;}g=$z;return Pr(g,b&15,c,d&15);default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALM(a,b,c){var d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&c>=(-32000000)&&b<32000000&&c<=32000000){d=b>>4;e=c>>4;if(!C4(a,d,e))return 0;$p=1;continue _;}return 0;case 1:$z=Z0(a,d,e);if(C()){break _;}f=$z;return US(f,b&15,c&15);default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AQb(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Mr(a,c,d,e))return;if(b===BkC){$p=1;continue _;}if(b===BkD){$p=2;continue _;}$p=3;continue _;case 1:$z=ZD(a,c,d,e);if(C()){break _;}g=$z;if(g)f=15;$p=3;continue _;case 2:$z=ACB(a,c,d,e);if(C()){break _;}g=$z;L();if(BgI.data[g]>f)f=BgI.data[g];$p=3;case 3:$z=ALo(a,b,c,d,e);if(C()){break _;}g=$z;if(g!=f)DU(a,b,c,d,e,c,d,e);return;default:
Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALo(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=0&&d<128&&c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000){f=c>>4;g=e>>4;if(!C4(a,f,g))return 0;$p=1;continue _;}return b.z_;case 1:$z=Z0(a,f,g);if(C()){break _;}h=$z;return ACq(h,b,c&15,d,e&15);default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AMy(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000&&d>=0&&d<128){g=c>>4;h=e>>4;if(C4(a,g,h)){$p=1;continue _;}}return;case 1:$z=Z0(a,g,h);if(C()){break _;}i=$z;AQR(i,b,c&15,d,e&15,f);g=0;while(g<a.cv.s){Rv(Z(a.cv,g),c,d,e);g=g+1|0;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANm(a,b,c,d){var e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Bky.data;$p=1;case 1:$z=XF(a,b,c,d);if(C()){break _;}b=$z;return e[b];default:Fa();}}C3().s(a,b,c,d,e,$p);}
function RE(a){return a.ge>=4?0:1;}
function AJq(a,b,c){var d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;$p=1;case 1:$z=AE6(a,b,c,d);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,$p);}
function AE6(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(!(isNaN(c.x)?1:0)&&!(isNaN(c.z)?1:0)&&!(isNaN(c.w)?1:0)){e
=K(c.x);f=K(c.z);g=K(c.w);h=K(b.x);i=K(b.z);j=K(b.w);k=20+(-1)|0;if(20<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=
s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BW(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;}return null;}return null;case 1:$z=ACB(a,h,i,j);if(C()){break _;}x=$z;$p=2;case 2:$z=AEN(a,h,i,j);if(C()){break _;}y=$z;L();z=BeT.data[x];if(x>0&&z.o6(y,d)){$p=5;continue _;}o=i-1|0;$p=3;case 3:$z=ACB(a,h,o,j);if
(C()){break _;}p=$z;$p=4;case 4:$z=AEN(a,h,o,j);if(C()){break _;}x=$z;w=BeT.data[p];if(p>0&&w.o6(x,d)){$p=6;continue _;}p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)
/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BW(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;case 5:$z=z.nG(a,h,i,j,b,c);if(C()){break _;}ba=$z;if(ba!==null)return ba;o=i-1|0;$p=3;continue _;case 6:$z=w.nG(a,h,o,j,b,c);if(C()){break _;}ba
=$z;if(ba!==null)return ba;p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t
*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BW(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function Dg(a,b,c,d,e){var f,g,h;f=0;g=R(d,1.0);e=16.0*d;while(f<a.cv.s){h=16.0;if(g>0)h=e;if(LG(a.bh,b)<h*h)Z(a.cv,f);f=f+1|0;}}
function Ex(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$$je;a:{b:{try{h=0;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){i=$$je;break b;}else{throw $$e;}}j=R(f,1.0);k=16.0*f;while(true){try{if(h>=CX(a.cv))break;l=16.0;if(j>0)l=k;m=b-a.bh.d;n=c-a.bh.j;o=d-a.bh.e;if(m*m+n*n+o*o<l*l)AC5(Z(a.cv,h),e,b,c,d,f,g);h=h+1|0;continue;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){i=$$je;break b;}else{throw $$e;}}}break a;}CF(i);}}
function ATh(a,b,c,d,e,f){return;}
function BU(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.cv.s){AH9(Z(a.cv,i),b,c,d,e,f,g,h);i=i+1|0;}}
function AOl(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d/16.0);d=K(b.e/16.0);if(!C4(a,c,d)){e=Dy();f=new T;V(f);Co(e,U(FN(J(f,B(368)),b)));return;}$p=1;case 1:$z=Z0(a,c,d);if(C()){break _;}e=$z;VZ(e,b);S(a.dY,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AU_(a,b){Ca(b);}
function ANH(a,b){S(a.cv,b);}
function AKY(a,b){H_(a.cv,b);}
function X0(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dx(a.na);d=K(c.R);e=K(c.V+1.0);f=K(c.M);g=K(c.U+1.0);h=K(c.S);i=K(c.W+1.0);f=f-1|0;while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeT.data;$p=2;continue _;}j=j+1|0;}d=d+1|0;}c=Du(c,0.25,0.25,0.25);$p=1;case 1:$z=ADO(a,b,c);if(C()){break _;}m=$z;n=
0;while(n<m.s){o=Z(m,n).Bw();if(o!==null)S(a.na,o);c=b.AX(Z(m,n));if(c!==null)S(a.na,c);n=n+1|0;}return a.na;case 2:$z=ACB(a,d,j,k);if(C()){break _;}n=$z;p=l[n];if(p!==null){m=a.na;$p=3;continue _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Du(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeT.data;continue _;case 3:p.FF(a,d,j,k,c,m);if(C()){break _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Du(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeT.data;$p=2;continue _;default:
Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Ot(a,b){var c;c=1.0-(BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.5);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*11.0|0;}
function OW(a,b){var c,d,e,f;c=BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.so,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.so,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.so,Long_fromInt(255)))/255.0;return BW(d*c,e*c,f*c);}
function Hz(a,b){var c;c=(Long_rem(a.ee,Long_fromInt(24000)).lo+b)/24000.0-0.25;if(c<0.0)c=c+1.0;if(c>1.0)c=c-1.0;return c+(1.0-(GF(c*3.141592653589793)+1.0)/2.0-c)/3.0;}
function S7(a,b){var c,d,e,f;c=BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.rr,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.rr,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.rr,Long_fromInt(255)))/255.0;b=c*0.8999999761581421+0.10000000149011612;return BW(d*b,e*b,f*(c*0.8500000238418579+0.15000000596046448));}
function ADv(a,b){var c,d,e,f;c=BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sS,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sS,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sS,Long_fromInt(255)))/255.0;b=c*0.9399999976158142+0.05999999865889549;return BW(d*b,e*b,f*(c*0.9100000262260437+0.09000000357627869));}
function A8t(a,b,c){return 64;}
function AJw(a,b){var c;c=1.0-(BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*c*0.5;}
function Fo(a,b,c,d,e){var f,g;f=new J0;g=BkE;BkE=Long_add(g,Long_fromInt(1));f.oT=g;f.fG=b;f.fp=c;f.fL=d;f.qa=e;if(G4(a,b-8|0,c-8|0,d-8|0,b+8|0,c+8|0,d+8|0)){if(e>0){L();f.jj=Long_add(Long_fromInt(BeT.data[e].mt()),a.ee);}if(!WH(a.kS,f)){Xn(a.kS,f);Zo(a.gL,f);}}}
function APj(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Gf(a.dY,a.l4);b=0;while(b<a.cv.s){Z(a.cv,b);c=0;while(c<a.l4.s){Z(a.l4,c);c=c+1|0;}b=b+1|0;}Dx(a.l4);b=0;a:while(true){if(b>=a.dY.s){b=0;if(b>=a.fD.s)return;d=Z(a.fD,b);$p=1;continue _;}b:{e=Z(a.dY,b);if(e.bC!==null){if(!e.bC.cR&&e.bC.bH===e)break b;e.bC.bH=null;e.bC=null;}if(!e.cR){$p=2;continue _;}if(e.cR){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,
c,f))break a;d=a.dY;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}b=c;}}b=b+1|0;}$p=3;continue _;case 1:d.tN();if(C()){break _;}b=b+1|0;if(b>=a.fD.s)return;d=Z(a.fD,b);continue _;case 2:XC(a,e);if(C()){break _;}while(true){if(e.cR){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,c,f)){$p=3;continue _;}d=a.dY;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}b=c;}b:{while(true){b=b+1|0;if(b>=a.dY.s){b=0;if(b>=a.fD.s)return;d=Z(a.fD,b);$p=1;continue _;}e=Z(a.dY,b);if(e.bC===null)break b;if(e.bC.cR)break;if
(e.bC.bH!==e)break;}e.bC.bH=null;e.bC=null;}if(e.cR)continue;else break;}continue _;case 3:$z=Z0(a,c,f);if(C()){break _;}d=$z;AM5(d,e);while(true){d=a.dY;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}b=c;while(true){b=b+1|0;if(b>=a.dY.s){b=0;if(b>=a.fD.s)return;d=Z(a.fD,b);$p=1;continue _;}e=Z(a.dY,b);if(e.bC!==null){if(!e.bC.cR&&e.bC.bH===e)continue;e.bC.bH=null;e.bC=null;}if(!e.cR){$p=2;continue _;}if(e.cR)break;}c=K(e.d/16.0);f=K(e.e/16.0);if(!C4(a,c,f))continue;else break;}continue _;default:
Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function XC(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d);K(b.j);d=K(b.e);if(!G4(a,c-16|0,0,d-16|0,c+16|0,128,d+16|0))return;b.cs=b.d;b.b7=b.j;b.ct=b.e;b.P=b.v;b.T=b.J;e=K(b.d/16.0);f=K(b.j/16.0);g=K(b.e/16.0);if(b.bC===null){$p=1;continue _;}$p=2;continue _;case 1:b.eo();if(C()){break _;}h=K(b.d/16.0);i=K(b.j/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g
==j){if(b.bH!==null){if(!b.bH.cR&&b.bH.bC===b){k=b.bH;$p=6;continue _;}b.bH.bC=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 2:b.BM();if(C()){break _;}h=K(b.d/16.0);i=K(b.j
/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g==j){if(b.bH!==null){if(!b.bH.cR&&b.bH.bC===b){k=b.bH;$p=6;continue _;}b.bH.bC=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 3:$z=Z0(a,
e,g);if(C()){break _;}k=$z;R7(k,b,f);if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 4:b.C9();if(C()){break _;}if(b.bH!==null){if(!b.bH.cR&&b.bH.bC===b){k=b.bH;$p=6;continue _;}b.bH.bC=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;case 5:$z=Z0(a,h,j);if
(C()){break _;}k=$z;VZ(k,b);if(b.bH!==null){if(!b.bH.cR&&b.bH.bC===b){k=b.bH;$p=6;continue _;}b.bH.bC=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;case 6:XC(a,k);if(C()){break _;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)
&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AM_(a,b){var c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:$z=ADO(a,c,b);if(C()){break _;}c=$z;d=0;while(d<c.s){e=Z(c,d);if(!e.cR&&e.mB)return 0;d=d+1|0;}return 1;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AJo(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);if(b.R<0.0)c=c+(-1)|0;if(b.M<0.0)e=e+(-1)|0;if(b.S<0.0)g=g+(-1)|0;while(c<d){i=e;while(i<f){j=g;if(j<h){L();k=BeT.data;$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACB(a,c,i,j);if(C()){break _;}l=$z;m=
k[l];if(m!==null&&m.b_.nC())return 1;j=j+1|0;a:while(true){if(j<h){L();k=BeT.data;continue _;}i=i+1|0;while(i>=f){c=c+1|0;if(c>=d)break a;i=e;}j=g;}return 0;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARe(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);while(c<d){i=e;while(i<f){j=g;if(j<h){$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACB(a,c,i,j);if(C()){break _;}k=$z;L();if(k!=Bgu.b&&k!=Bf4.b&&k!=BgK.b){j=j+1|0;a:while(true){if(j<h){continue _;}i=i+1|0;while(i>=f){c=c+1|
0;if(c>=d)break a;i=e;}j=g;}return 0;}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAz(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.R);f=K(b.V+1.0);g=K(b.M);h=K(b.U+1.0);i=K(b.S);j=K(b.W+1.0);k=0;l=BW(0.0,0.0,0.0);m=h;while(e<f){n=g;while(n<h){o=i;if(o<j){L();p=BeT.data;$p=1;continue _;}n=n+1|0;}e=e+1|0;}if(HS(l)>0.0){b=CC(l);d.g=d.g+
b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 1:$z=ACB(a,e,n,o);if(C()){break _;}q=$z;r=p[q];if(r!==null&&r.b_===c){s=n+1|0;$p=2;continue _;}o=o+1|0;a:while(true){if(o<j){L();p=BeT.data;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break a;n=g;}o=i;}if(HS(l)>0.0){b=CC(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 2:$z=AEN(a,e,n,o);if(C()){break _;}q=$z;if(m>=s-Jy(q)){k=1;$p=3;continue _;}o=o+1|0;b:while(true){if(o<j){L();p=BeT.data;$p=1;continue _;}n=n+1|0;while(n>=
h){e=e+1|0;if(e>=f)break b;n=g;}o=i;}if(HS(l)>0.0){b=CC(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 3:r.qE(a,e,n,o,d,l);if(C()){break _;}o=o+1|0;c:while(true){if(o<j){L();p=BeT.data;$p=1;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break c;n=g;}o=i;}if(HS(l)>0.0){b=CC(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AOx(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K(b.R);e=K(b.V+1.0);f=K(b.M);g=K(b.U+1.0);h=K(b.S);i=K(b.W+1.0);while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeT.data;$p=1;continue _;}j=j+1|0;}d=d+1|0;}return 0;case 1:$z=ACB(a,d,j,k);if(C()){break _;}m=$z;n=l[m];if(n!==null&&n.b_===c)return 1;k=k+1|0;a:while(true)
{if(k<i){L();l=BeT.data;continue _;}j=j+1|0;while(j>=g){d=d+1|0;if(d>=e)break a;j=f;}k=h;}return 0;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Yf(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=new WY;$p=1;case 1:AI9(g,a,b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADE(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0/((c.V-c.R)*2.0+1.0);e=1.0/((c.U-c.M)*2.0+1.0);f=1.0/((c.W-c.S)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){if(0.0<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=0.0;p=BW(k,l,m+n*o);$p=1;continue _;}j=
j+e;}i=i+d;}return g/h;case 1:$z=AJq(a,p,b);if(C()){break _;}p=$z;if(p===null)g=g+1|0;h=h+1|0;q=o+f;a:while(true){if(q<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=q;p=BW(k,l,m+n*o);continue _;}j=j+e;while(j>1.0){i=i+d;if(i>1.0)break a;j=0.0;}q=0.0;}return g/h;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function ABP(a,b,c,d,e){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;$p=1;case 1:$z=ACB(a,b,c,d);if(C()){break _;}e=$z;L();if(e!=Bgu.b)return;Ex(a,b+0.5,c+0.5,d+0.5,B(215),0.5,2.5999999046325684+(N(a.q)-N(a.q))*0.800000011920929);e=0;$p=2;case 2:APB(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AXT(a,b){return null;}
function AOb(a){var b;b=new T;V(b);return U(Bf(J(b,B(369)),a.dY.s));}
function AX3(a){return a.bh;}
function ANB(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=Z0(a,e,f);if(C()){break _;}g=$z;if(g===null)return null;b=b&15;d=d&15;$p=2;case 2:$z=ANs(g,b,c,d);if(C()){break _;}g=$z;return g;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AFX(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b>>4;g=d>>4;$p=1;case 1:$z=Z0(a,f,g);if(C()){break _;}h=$z;if(h!==null)AJp(h,b&15,c,d&15,e);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFP(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=Z0(a,e,f);if(C()){break _;}g=$z;if(g!==null)AD3(g,b&15,c,d&15);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAI(a,b,c,d){var e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();e=BeT.data;$p=1;case 1:$z=ACB(a,b,c,d);if(C()){break _;}b=$z;f=e[b];return f!==null?f.d4():0;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AJm(a,b){var c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=1;$p=1;case 1:ABK(a,c,b);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,$p);}
function AIq(a){var b,c,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.eL>=50)return 0;a.eL=a.eL+1|0;a:{try{b=500;}catch($$e){$$je=Bj($$e);c=$$je;break a;}b:{try{if(CX(a.f5)>0)break b;}catch($$e){$$je=Bj($$e);c=$$je;break a;}a.eL=a.eL-1|0;return 0;}c:{try{b=b+(-1)|0;if(b>0)break c;}catch($$e){$$je=Bj($$e);c=$$je;break a;}a.eL=a.eL-1|0;return 1;}try{c=En(a.f5,CX(a.f5)-1|0);$p=1;continue _;}catch($$e){$$je=Bj($$e);c=$$je;}}a.eL=a.eL-1|0;M(c);case 1:d:
{try{AOr(c,a);if(C()){break _;}}catch($$e){$$je=Bj($$e);c=$$je;break d;}a:{try{if(CX(a.f5)>0)break a;}catch($$e){$$je=Bj($$e);c=$$je;break d;}a.eL=a.eL-1|0;return 0;}b:{try{b=b+(-1)|0;if(b>0)break b;}catch($$e){$$je=Bj($$e);c=$$je;break d;}a.eL=a.eL-1|0;return 1;}try{c=En(a.f5,CX(a.f5)-1|0);continue _;}catch($$e){$$je=Bj($$e);c=$$je;}}a.eL=a.eL-1|0;M(c);default:Fa();}}C3().s(a,b,c,$p);}
function DU(a,b,c,d,e,f,g,h){AK0(a,b,c,d,e,f,g,h,1);}
function AK0(a,b,c,d,e,f,g,h,i){var j,k,l,m;BkA=BkA+1|0;if(BkA==50){BkA=BkA-1|0;return;}if(!Mr(a,(f+c|0)/2|0,64,(h+e|0)/2|0)){BkA=BkA-1|0;return;}a:{j=a.f5.s;if(i){if(5<=j)j=5;k=0;while(true){if(k>=j)break a;l=Z(a.f5,(a.f5.s-k|0)-1|0);if(l.cl===b&&ALG(l,c,d,e,f,g,h))break;k=k+1|0;}BkA=BkA-1|0;return;}}l=a.f5;m=new VU;m.cl=b;m.iJ=c;m.b8=d;m.eg=e;m.d$=f;m.b0=g;m.dM=h;S(l,m);if(a.f5.s>1000000){b=Dy();l=new T;V(l);Co(b,U(J(Bf(J(l,B(370)),1000000),B(371))));Dx(a.f5);}BkA=BkA-1|0;}
function Rd(a){var b;b=Ot(a,1.0);if(b!=a.ge)a.ge=b;}
function X_(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Ra(a.dY,a.bh)&&a.bh!==null){Co(Dy(),B(372));b=a.bh;$p=1;continue _;}a:{c=Ot(a,1.0);if(c!=a.ge){a.ge=c;d=0;while(true){if(d>=a.cv.s)break a;VK(Z(a.cv,d));d=d+1|0;}}}a.ee=Long_add(a.ee,Long_fromInt(1));if(Long_ne(Long_rem(a.ee,Long_fromInt(20)),Long_ZERO)){c=0;$p=
2;continue _;}c=0;b=null;$p=4;continue _;case 1:AOl(a,b);if(C()){break _;}b:{c=Ot(a,1.0);if(c!=a.ge){a.ge=c;d=0;while(true){if(d>=a.cv.s)break b;VK(Z(a.cv,d));d=d+1|0;}}}a.ee=Long_add(a.ee,Long_fromInt(1));if(Long_ne(Long_rem(a.ee,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c=0;b=null;$p=4;continue _;case 2:ABw(a,c);if(C()){break _;}d=K(a.bh.d);e=K(a.bh.e);b=new Iv;f=d-64|0;g=0;h=e-64|0;c=d+64|0;i=128;j=e+64|0;$p=3;case 3:AEy(b,a,f,g,h,c,i,j);if(C()){break _;}i=0;if(i>=8000)return;a.hW=(a.hW*3|0)+a.sc
|0;f=a.hW>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k=f>>16&127;$p=5;continue _;case 4:ABK(a,c,b);if(C()){break _;}c=0;$p=2;continue _;case 5:$z=HA(b,g,k,h);if(C()){break _;}l=$z;L();if(BgE.data[l]){m=BeT.data[l];n=a.q;$p=6;continue _;}i=i+1|0;if(i>=8000)return;a.hW=(a.hW*3|0)+a.sc|0;f=a.hW>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k=f>>16&127;continue _;case 6:m.e8(a,g,k,h,n);if(C()){break _;}i=i+1|0;if(i>=8000)return;a.hW=(a.hW*3|0)+a.sc|0;f=a.hW>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k
=f>>16&127;$p=5;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ABw(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=JA(a.gL);if(c!=IQ(a.kS)){d=new D3;Bl(d,B(373));M(d);}if(c>500)c=500;e=0;a:{while(true){if(e>=c)break a;f=M6(a.gL);if(!b&&Long_gt(f.jj,a.ee))break;MI(a.gL,f);KY(a.kS,f);if(G4(a,f.fG-8|0,f.fp-8|0,f.fL-8|0,f.fG+8|0,f.fp+8|0,f.fL+8|0)){g=f.fG;h=f.fp;i=f.fL;$p=1;continue _;}e=e+1|0;}}return !JA(a.gL)?0:1;case 1:$z=ACB(a,g,
h,i);if(C()){break _;}g=$z;if(g==f.qa&&g>0){L();d=BeT.data[g];g=f.fG;h=f.fp;i=f.fL;f=a.q;$p=2;continue _;}b:{while(true){e=e+1|0;if(e>=c)break b;f=M6(a.gL);if(!b&&Long_gt(f.jj,a.ee))break;MI(a.gL,f);KY(a.kS,f);if(!G4(a,f.fG-8|0,f.fp-8|0,f.fL-8|0,f.fG+8|0,f.fp+8|0,f.fL+8|0))continue;else{g=f.fG;h=f.fp;i=f.fL;continue _;}}}return !JA(a.gL)?0:1;case 2:d.e8(a,g,h,i,f);if(C()){break _;}c:{while(true){e=e+1|0;if(e>=c)break c;f=M6(a.gL);if(!b&&Long_gt(f.jj,a.ee))break;MI(a.gL,f);KY(a.kS,f);if(!G4(a,f.fG-8|0,f.fp-8
|0,f.fL-8|0,f.fG+8|0,f.fp+8|0,f.fL+8|0))continue;else{g=f.fG;h=f.fp;i=f.fL;$p=1;continue _;}}}return !JA(a.gL)?0:1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AFb(a,b,c,d){var e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=16;f=new DA;g=0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;$p=1;case 1:$z=ACB(a,h,i,j);if(C()){break _;}k=$z;if(k>0){L();l=BeT.data[k];$p=2;continue _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,
e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;continue _;case 2:l.kP(a,h,i,j,f);if(C()){break _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADO(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dx(a.qj);d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);while(d<=e){h=f;while(h<=g){if(C4(a,d,h)){$p=1;continue _;}h=h+1|0;}d=d+1|0;}return a.qj;case 1:$z=Z0(a,d,h);if(C()){break _;}i=$z;AJ5(i,b,c,a.qj);a:while(true){h=h+1|0;while(h>g){d=d+1|0;if(d>e)break a;h=f;}if(!C4(a,d,h))continue;else
{continue _;}}return a.qj;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANj(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);h=Cg();while(d<=e){i=f;while(i<=g){if(C4(a,d,i)){$p=1;continue _;}i=i+1|0;}d=d+1|0;}return h;case 1:$z=Z0(a,d,i);if(C()){break _;}j=$z;AMo(j,b,c,h);a:while(true){i=i+1|0;while(i>g){d=d+1|0;if(d>e)break a;i=f;}if(!C4(a,d,i))continue;else
{continue _;}}return h;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AWN(a){return a.dY;}
function AGy(a,b,c,d){var e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Mr(a,b,c,d))return;$p=1;case 1:$z=X2(a,b,d);if(C()){break _;}e=$z;SQ(e);return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function Yz(a,b){var c,d;c=0;d=0;while(d<a.dY.s){if(P_(b,Dk(Z(a.dY,d))))c=c+1|0;d=d+1|0;}return c;}
function AQh(a,b){var c,d;DF(a.dY,b);c=0;while(c<a.cv.s){Z(a.cv,c);d=0;while(d<b.s){Z(b,d);d=d+1|0;}c=c+1|0;}}
function AQ8(a,b){DF(a.l4,b);}
function AId(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACB(a,c,d,e);if(C()){break _;}g=$z;L();h=BeT.data[g];i=BeT.data[b];$p=2;case 2:$z=i.hw(a,c,d,e);if(C()){break _;}j=$z;if(f)j=null;if(!(b>0&&h===null)&&h!==Bf3&&h!==BgJ&&h!==Bf4&&h!==BgK&&h!==Bgu)return 0;if(j===null){$p=3;continue _;}$p=4;continue _;case 3:$z=i.fT(a,c,d,e);if(C()){break _;}b=$z;return !b
?0:1;case 4:$z=AM_(a,j);if(C()){break _;}b=$z;if(!b)return 0;$p=3;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AR0(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.d);f=K(b.j);g=K(b.e);h=d+32.0|0;i=e-h|0;j=f-h|0;k=g-h|0;l=e+h|0;m=f+h|0;n=g+h|0;o=new Iv;$p=1;case 1:AEy(o,a,i,j,k,l,m,n);if(C()){break _;}return APv(A2L(o),b,c,d);default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AJA(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=K(b.d);h=K(b.j);i=K(b.e);j=f+32.0|0;k=g-j|0;l=h-j|0;m=i-j|0;n=g+j|0;o=h+j|0;p=i+j|0;q=new Iv;$p=1;case 1:AEy(q,a,k,l,m,n,o,p);if(C()){break _;}return AGd(A2L(q),b,c,d,e,f);default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Fl(a,b,c,d,e){return G4(a,b-e|0,c-e|0,d-e|0,b+e|0,c+e|0,d+e|0);}
function XN(){var b,c;Bky=$rt_createFloatArray(16);BkA=0;b=0;while(b<=15){c=1.0-b/15.0;Bky.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}}
function L4(){var a=this;D.call(a);a.uo=null;a.zn=null;a.lp=0;a.Ey=0.0;a.Ex=0.0;a.EY=0;a.l9=0;a.mv=0;a.nt=0;a.qd=0;a.rO=0;a.zL=0;a.Ai=0.0;a.zN=0.0;a.zk=0.0;a.ov=0;}
var BeP=null;function BA(){BA=Bt(L4);A2t();}
function Br(a){var b,c,d,e,f;if(!a.ov)return 0;a.ov=0;if(a.lp>0){if(a.mv)W1(32888);if(a.l9)W1(32886);b=a.zL;c=a.lp;d=a.uo.buffer;e=a.lp*7|0;ALw(b,0,c,new Int32Array(d,0,e));if(a.mv)Tu(32888);if(a.l9)Tu(32886);}f=a.nt*4|0;WG(a);return f;}
function WG(a){a.lp=0;a.nt=0;a.qd=0;}
function Bz(a){Gm(a,7);}
function Gm(a,b){if(a.ov)Br(a);a.ov=1;WG(a);a.zL=b;a.l9=0;a.mv=0;a.rO=0;}
function AJC(a,b,c){a.mv=1;a.Ey=b;a.Ex=c;}
function Cp(a,b,c,d){Ph(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function Gy(a,b,c,d,e){Qq(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function Ph(a,b,c,d){Qq(a,b,c,d,255);}
function Qq(a,b,c,d,e){if(!a.rO){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.l9=1;a.EY=e<<24|d<<16|c<<8|b;}}
function G(a,b,c,d,e,f){AJC(a,e,f);Be(a,b,c,d);}
function Be(a,b,c,d){var e,f,g,h,i;if(a.qd>65534)return;a.qd=a.qd+1|0;a.lp=a.lp+1|0;e=a.nt;f=a.uo;g=a.zn;h=e+0|0;i=b+a.Ai;g[h]=i;h=e+1|0;i=c+a.zN;g[h]=i;h=e+2|0;i=d+a.zk;g[h]=i;if(a.mv){h=e+3|0;i=a.Ey;g[h]=i;h=e+4|0;i=a.Ex;g[h]=i;}if(a.l9){h=e+5|0;e=a.EY;f[h]=e;}a.nt=a.nt+7|0;}
function ET(a,b){Ph(a,b>>16&255,b>>8&255,b&255);}
function ADr(a){a.rO=1;}
function Dc(a,b,c,d){Ch(b,c,d);}
function Fb(a,b,c,d){a.Ai=b;a.zN=c;a.zk=d;}
function A2t(){var b,c;b=new L4;BA();b.lp=0;b.l9=0;b.mv=0;b.nt=0;b.qd=0;b.rO=0;b.ov=0;c=new ArrayBuffer(2097152);b.uo=new Int32Array(c);b.zn=new Float32Array(c);BeP=b;}
function ANk(){var a=this;D.call(a);a.fM=0;a.fJ=0;}
function FJ(a,b){var c=new ANk();A0h(c,a,b);return c;}
function A0h(a,b,c){var d,e;a.fM=b;a.fJ=c;d=1;while(true){c=a.fM;e=d+1|0;if((c/e|0)<320)break;if((a.fJ/e|0)<240)break;d=e;}a.fM=a.fM/d|0;a.fJ=a.fJ/d|0;}
function AEt(a){return a.fM;}
function Zk(a){return a.fJ;}
function Gh(){D.call(this);this.mR=0.0;}
function BkF(){var a=new Gh();Nh(a);return a;}
function Nh(a){a.mR=0.0;}
function KO(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>24&255)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>24&255)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;Bd(3553);Ba(3042);Bd(3008);De(770,771);BA();p=BeP;Bz(p);Gy(p,i,j,k,h);q=d;r=c;Be(p,q,r,0.0);s=b;Be(p,s,r,0.0);Gy(p,m,n,o,l);r=e;Be(p,s,r,0.0);Be(p,q,r,0.0);Br(p);Bd(3042);Ba(3008);Ba(3553);}
function DG(a,b,c,d,e,f){Cx(b,c,d-(Dv(b,c)/2|0)|0,e,f);}
function Hu(a,b,c,d,e,f){Cx(b,c,d,e,f);}
function CH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;BA();h=BeP;Bz(h);i=b+0|0;j=c+g|0;k=a.mR;l=(d+0|0)*0.00390625;m=(e+g|0)*0.00390625;G(h,i,j,k,l,m);n=b+f|0;o=a.mR;k=(d+f|0)*0.00390625;G(h,n,j,o,k,m);m=c+0|0;o=a.mR;j=(e+0|0)*0.00390625;G(h,n,m,o,k,j);G(h,i,m,a.mR,l,j);Br(h);}
function CS(){var a=this;Gh.call(a);a.I=null;a.bm=0;a.bD=0;a.bG=null;a.pS=0;a.bZ=null;}
function BkG(){var a=new CS();DR(a);return a;}
function DR(a){Nh(a);a.bG=Cg();a.pS=0;}
function AFI(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.bG.s)return;f=Z(a.bG,e);g=a.I;$p=1;case 1:ACX(f,g,b,c);if(C()){break _;}e=e+1|0;if(e>=a.bG.s)return;f=Z(a.bG,e);g=a.I;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function YU(a,b,c){var d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.I;e=null;$p=1;case 1:ADY(d,e);if(C()){break _;}d=a.I;$p=2;case 2:AFm(d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function Zt(a,b,c,d){var e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bG.s)break a;f=Z(a.bG,e);if(R9(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.iE(f);if(C()){break _;}while(true){e=e+1|0;if(e>=a.bG.s)break;f=Z(a.bG,e);if(!R9(f,b,c))continue;else{continue _;}}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function A2C(a,b,c,d){return;}
function AMX(a,b){return;}
function AQa(a,b,c,d){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.I=b;a.bZ=b.e$;a.bm=c;a.bD=d;$p=1;case 1:a.hV();if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function AP$(a){return;}
function AG_(a){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(FA()){$p=1;continue _;}if(!DV())return;$p=2;continue _;case 1:ZF(a);if(C()){break _;}if(FA()){continue _;}if(!DV())return;$p=2;case 2:ASE(a);if(C()){break _;}if(!DV())return;continue _;default:Fa();}}C3().s(a,$p);}
function ZF(a){var b,c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cw()){a.Cg(Bi(AR1(),a.bm)/a.I.cd|0,(a.bD-(Bi(XY(),a.bD)/a.I.bA|0)|0)-1|0,CV());return;}b=Bi(AR1(),a.bm)/a.I.cd|0;c=(a.bD-(Bi(XY(),a.bD)/a.I.bA|0)|0)-1|0;d=CV();$p=1;case 1:a.I6(b,c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function ASE(a){var b,c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!CU())return;Bb();if(Beg===null)b=0;else{c=$rt_str(Beg.key);b=Beg===null?32:Bh(c)>1?0:Y(c,0);}d=Bg();$p=1;case 1:a.o_(b,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function A3l(a){return;}
function AIb(a){return;}
function ABm(a){var b,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;$p=1;case 1:AIJ(a,b);if(C()){break _;}return;default:Fa();}}C3().s(a,b,$p);}
function AIJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.I.B!==null){KO(a,0,0,a.bm,a.bD,1610941696,(-1607454656));return;}Bd(2896);Bd(2912);BA();c=BeP;d=3553;e=a.I.bo;f=B(165);$p=1;case 1:$z=AHy(e,f);if(C()){break _;}g=$z;Cn(d,g);BS(1.0,1.0,1.0,1.0);Bz(c);ET(c,4210752);h=a.bD;i=a.bD/32.0;j=b;G(c,0.0,h,0.0,0.0,i+j);G(c,a.bm,a.bD,
0.0,a.bm/32.0,a.bD/32.0+j);k=a.bm;l=a.bm/32.0;m=0+b|0;G(c,k,0.0,0.0,l,m);G(c,0.0,0.0,0.0,0.0,m);Br(c);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AVw(a){return 1;}
function AFh(){var a=this;D.call(a);a.k$=null;a.jz=0;a.ig=0;a.vG=0;}
function A_C(a){var b=new AFh();A4U(b,a);return b;}
function A4U(a,b){a.k$=I(D,b);a.jz=b;a.ig=0;a.vG=0;}
function S9(a,b){var c,d;c=a.ig;while(true){a.ig=a.ig+1|0;if(a.ig>=a.jz)a.ig=0;if(a.ig==c){c=a.jz;a.jz=a.jz+(a.jz/2|0)|0;d=a.k$;a.k$=I(D,a.jz);Dh(d,0,a.k$,0,c);return S9(a,b);}if(a.k$.data[a.ig]!==null)continue;else break;}a.k$.data[a.ig]=b;a.vG=a.vG+1|0;return a.ig;}
function ANO(a,b){if(b<a.jz&&b>=0)return a.k$.data[b];return null;}
function Mo(){D.call(this);}
function Es(){var a=this;Mo.call(a);a.et=0.0;a.er=0.0;a.es=0.0;a.eq=0.0;a.ew=0.0;a.ex=0.0;a.eu=0.0;a.ev=0.0;a.eB=0.0;a.ez=0.0;a.eA=0.0;a.ey=0.0;a.gV=0.0;a.gW=0.0;a.gT=0.0;a.gU=0.0;}
function M_(){var a=new Es();A48(a);return a;}
function A48(a){Fq(a);}
function Fq(a){a.et=1.0;a.er=0.0;a.es=0.0;a.eq=0.0;a.ew=0.0;a.ex=1.0;a.eu=0.0;a.ev=0.0;a.eB=0.0;a.ez=0.0;a.eA=1.0;a.ey=0.0;a.gV=0.0;a.gW=0.0;a.gT=0.0;a.gU=1.0;return a;}
function Kx(a){a.et=0.0;a.er=0.0;a.es=0.0;a.eq=0.0;a.ew=0.0;a.ex=0.0;a.eu=0.0;a.ev=0.0;a.eB=0.0;a.ez=0.0;a.eA=0.0;a.ey=0.0;a.gV=0.0;a.gW=0.0;a.gT=0.0;a.gU=0.0;return a;}
function GQ(a,b){a.et=b.et;a.er=b.er;a.es=b.es;a.eq=b.eq;a.ew=b.ew;a.ex=b.ex;a.eu=b.eu;a.ev=b.ev;a.eB=b.eB;a.ez=b.ez;a.eA=b.eA;a.ey=b.ey;a.gV=b.gV;a.gW=b.gW;a.gT=b.gT;a.gU=b.gU;return a;}
function TY(a,b){CJ(b,a.et);CJ(b,a.er);CJ(b,a.es);CJ(b,a.eq);CJ(b,a.ew);CJ(b,a.ex);CJ(b,a.eu);CJ(b,a.ev);CJ(b,a.eB);CJ(b,a.ez);CJ(b,a.eA);CJ(b,a.ey);CJ(b,a.gV);CJ(b,a.gW);CJ(b,a.gT);CJ(b,a.gU);return a;}
function N0(a,b){b=b.data;b[0]=a.et;b[1]=a.er;b[2]=a.es;b[3]=a.eq;b[4]=a.ew;b[5]=a.ex;b[6]=a.eu;b[7]=a.ev;b[8]=a.eB;b[9]=a.ez;b[10]=a.eA;b[11]=a.ey;b[12]=a.gV;b[13]=a.gW;b[14]=a.gT;b[15]=a.gU;return a;}
function A$y(a,b){return Vd(a,b,a);}
function ZJ(a,b){a.et=a.et*b.fy;a.er=a.er*b.fy;a.es=a.es*b.fy;a.eq=a.eq*b.fy;a.ew=a.ew*b.fA;a.ex=a.ex*b.fA;a.eu=a.eu*b.fA;a.ev=a.ev*b.fA;a.eB=a.eB*b.fz;a.ez=a.ez*b.fz;a.eA=a.eA*b.fz;a.ey=a.ey*b.fz;return a;}
function ATU(a,b,c){return W5(a,b,c,a);}
function W5(a,b,c,d){return A6E(b,c,a,d);}
function A6E(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=M_();f=b;g=GF(f);h=Gs(f);i=1.0-g;j=c.fy*c.fA;k=c.fA*c.fz;l=c.fy*c.fz;m=c.fy*h;n=c.fA*h;o=c.fz*h;p=c.fy*c.fy*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.fA*c.fA*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.fz*c.fz*i+g;z=d.et*p+d.ew*q+d.eB*s;ba=d.er*p+d.ex*q+d.ez*s;bb=d.es*p+d.eu*q+d.eA*s;bc=d.eq*p+d.ev*q+d.ey*s;bd=d.et*t+d.ew*u+d.eB*v;be=d.er*t+d.ex*u+d.ez*v;bf=d.es*t+d.eu*u+d.eA*v;r=d.eq*t+d.ev*u+d.ey*v;e.eB=d.et*w+d.ew*x+d.eB*
y;e.ez=d.er*w+d.ex*x+d.ez*y;e.eA=d.es*w+d.eu*x+d.eA*y;e.ey=d.eq*w+d.ev*x+d.ey*y;e.et=z;e.er=ba;e.es=bb;e.eq=bc;e.ew=bd;e.ex=be;e.eu=bf;e.ev=r;return e;}
function Vd(a,b,c){if(c===null)c=M_();c.gV=c.gV+a.et*b.fy+a.ew*b.fA+a.eB*b.fz;c.gW=c.gW+a.er*b.fy+a.ex*b.fA+a.ez*b.fz;c.gT=c.gT+a.es*b.fy+a.eu*b.fA+a.eA*b.fz;c.gU=c.gU+a.eq*b.fy+a.ev*b.fA+a.ey*b.fz;return c;}
function Lv(a,b){var c;a:{if(b instanceof Es){b:{c:{b=b;if(a.et!==b.et)break c;if(a.er!==b.er)break c;if(a.es!==b.es)break c;if(a.eq!==b.eq)break c;if(a.ew!==b.ew)break c;if(a.ex!==b.ex)break c;if(a.eu!==b.eu)break c;if(a.ev!==b.ev)break c;if(a.eB!==b.eB)break c;if(a.ez!==b.ez)break c;if(a.eA!==b.eA)break c;if(a.ey!==b.ey)break c;if(a.gV!==b.gV)break c;if(a.gW!==b.gW)break c;if(a.gT!==b.gT)break c;if(a.gU===b.gU){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function Od(){}
function I7(){D.call(this);}
function Wo(){}
function N4(){}
function R6(){}
function Mg(){}
function U9(){var a=this;I7.call(a);a.fy=0.0;a.fA=0.0;a.fz=0.0;}
function BkH(){var a=new U9();A$e(a);return a;}
function A$e(a){return;}
function L5(a,b,c,d){a.fy=b;a.fA=c;a.fz=d;}
function Wm(){}
function R0(){}
function G_(){var a=this;I7.call(a);a.lc=0.0;a.ld=0.0;a.lb=0.0;a.pd=0.0;}
function A23(){var a=new G_();AZU(a);return a;}
function AZU(a){return;}
function VM(a,b){a.lc=b.lc;a.ld=b.ld;a.lb=b.lb;a.pd=b.pd;return a;}
function A_z(a){return a.lc;}
function ATo(a){return a.ld;}
function AZ4(a){return a.lb;}
function A5C(a){return a.pd;}
function Te(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Dk(a)!==Dk(b))return 0;c=b;if(a.lc===c.lc&&a.ld===c.ld&&a.lb===c.lb&&a.pd===c.pd)return 1;return 0;}
function S4(){var a=this;D.call(a);a.B_=null;a.B$=null;}
function AIG(a){var b,c;b=a.B_;c=a.B$;Fv(b);CM(c,null);}
function AO3(){Fi.call(this);}
function A46(a){var b=new AO3();AYD(b,a);return b;}
function AYD(a,b){WZ(a,b);}
function H7(){}
function Uz(){}
function AC3(){var a=this;D.call(a);a.fO=null;a.iB=null;a.kA=null;a.p6=0;a.re=0;a.ij=null;}
function AJE(a,b,c,d){var e=new AC3();AUp(e,a,b,c,d);return e;}
function AUp(a,b,c,d,e){a.ij=b;a.re=a.ij.d6;a.fO=c;a.iB=d;a.p6=e;}
function HR(a){return a.fO===null?0:1;}
function HE(a){var b;Rz(a);if(a.fO===null){b=new J4;O(b);M(b);}b=a.fO.zm;a.kA=a.fO;a.iB=a.fO;a.fO=a.fO.hu;a.p6=a.p6+1|0;return b;}
function AHk(a){var b,c;if(a.kA===null){b=new D3;O(b);M(b);}b=a.ij;c=a.kA;if(c.iy===null)b.pC=c.hu;else c.iy.hu=c.hu;if(c.hu===null)b.ql=c.iy;else c.hu.iy=c.iy;b.f6=b.f6-1|0;b.d6=b.d6+1|0;if(a.kA===a.iB){a.iB=!HR(a)?null:a.fO.iy;a.p6=a.p6-1|0;}else if(a.kA===a.fO)a.fO=!ZX(a)?null:a.iB.hu;a.re=a.ij.d6;a.kA=null;}
function ZX(a){return a.iB===null?0:1;}
function ABy(a,b){var c;Rz(a);c=new RJ;c.zm=b;c.iy=a.iB;c.hu=a.fO;if(a.iB!==null)a.iB.hu=c;else a.ij.pC=c;if(a.fO!==null)a.fO.iy=c;else a.ij.ql=c;a.iB=c;b=a.ij;b.f6=b.f6+1|0;b=a.ij;b.d6=b.d6+1|0;a.re=a.ij.d6;a.kA=null;}
function Rz(a){var b;if(a.re>=a.ij.d6)return;b=new KU;O(b);M(b);}
function RJ(){var a=this;D.call(a);a.zm=null;a.hu=null;a.iy=null;}
function BkI(){var a=new RJ();A0Q(a);return a;}
function A0Q(a){return;}
function KL(){var a=this;D.call(a);a.zj=null;a.kx=null;a.hd=null;a.lY=null;a.Cf=null;a.wI=null;a.sT=0;a.D1=0;}
var BkJ=0;var BeO=null;function AHy(a,b){var c,d,e,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=CP(BeO,b);if(c!==null)return c.f3;try{AFi(a.kx);W0(a.kx);d=Q6(a.kx,0);if(IB(b,B(374))){a.sT=1;e=Kj(Jw(b,7));$p=1;continue _;}if(DC(b,B(179))&&AIL().o.pP)BkJ=1;e=Kj(b);$p=2;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof B3){}else{throw $$e;}}b=new B6;Bl(b,B(375));M(b);case 1:a:{try{$z=Zg(a,e);if(C()){break _;}c=$z;LP(a,c,d);a.sT
=0;Ri(BeO,b,CY(d));}catch($$e){$$je=Bj($$e);if($$je instanceof B3){break a;}else{throw $$e;}}return d;}b=new B6;Bl(b,B(375));M(b);case 2:a:{try{$z=Zg(a,e);if(C()){break _;}c=$z;LP(a,c,d);BkJ=0;Ri(BeO,b,CY(d));}catch($$e){$$je=Bj($$e);if($$je instanceof B3){break a;}else{throw $$e;}}return d;}b=new B6;Bl(b,B(375));M(b);default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AHF(a,b){var c;EA(a.kx);W0(a.kx);c=Q6(a.kx,0);LP(a,b,c);BP(a.zj,CY(c),b);return c;}
function LP(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;Eb(a,c);if(!BkJ){Ej(3553,10241,9728);Ej(3553,10240,9728);}else{Ej(3553,10241,9986);Ej(3553,10240,9728);Ej(3553,33085,4);}if(a.D1){Ej(3553,10241,9729);Ej(3553,10240,9729);}if(!a.sT){Ej(3553,10242,10497);Ej(3553,10243,10497);}else{Ej(3553,10242,10496);Ej(3553,10243,10496);}d=b.xs;e=b.Du;f=b.t1;g=$rt_createByteArray(Bi(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if
(a.wI!==null&&a.wI.dx){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}a:{EA(a.hd);UT(a.hd,g);b=a.hd;EO(b,0);Nr(b,h.length);SE(3553,0,6408,d,e,0,6408,5121,a.hd);if(BkJ){p=1;while(true){if(p>4)break a;o=d>>(p-1|0);q=d>>p;r=e>>p;EA(a.lY);s=0;while(s<q){t=0;while(t<r){b=a.hd;c=s*2|0;i=c+0|0;k=t*2|0;n=Bi(k+0|0,o);u=KS(b,(i+n|0)*4|0);b=a.hd;c=c+1|0;v=KS(b,(c+n|0)*4|0);b=a.hd;k=
Bi(k+1|0,o);w=KS(b,(c+k|0)*4|0);x=KS(a.hd,(i+k|0)*4|0);y=Li(a,Li(a,u,v),Li(a,w,x));ABa(a.lY,(s+Bi(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}SE(3553,p,6408,q,r,0,6408,5121,a.lY);z=a.hd;a.hd=a.lY;a.lY=z;p=p+1|0;}}}}
function AD7(a,b,c){var d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=B(376);$p=1;case 1:$z=AHy(a,b);if(C()){break _;}d=$z;return d;default:Fa();}}C3().s(a,b,c,d,$p);}
function G9(a,b){S(a.Cf,b);b.o$();}
function Li(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function Zg(a,b){var c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,$p);}
function Eb(a,b){if(b<0)return;Cn(3553,b);}
function ADH(){BkJ=0;}
function Wn(){var a=this;D.call(a);a.sa=null;a.xr=0;a.tj=0;}
function BkK(a,b,c){var d=new Wn();AOL(d,a,b,c);return d;}
function AOL(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.sa=$rt_createIntArray(256);a.xr=0;e=Kj(c);$p=1;case 1:$z=AEX(e);if(C()){break _;}f
=$z;g=f.xs;e=f.t1;h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+Bi(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.sa.data[h]=k+2|0;h=h+1|0;}a.xr=AHF(d,f);a.tj=I3(288);BA();p=BeP;q=0;while(q<256){FI(a.tj+q|0,4864);Bz(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;G(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;G(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;G(p,7.989999771118164,0.0,0.0,x,y);G(p,0.0,0.0,0.0,u,y);Br(p);Ee();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.dx){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}FI((a.tj+256|0)+l|0,4864);F8(ba/255.0,bb/255.0,bc/255.0);Ee();l=l+1|0;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function Cx(a,b,c,d,e){SN(a,b,c+1|0,d+1|0,e,1);ED(a,b,c,d,e);}
function ED(a,b,c,d,e){SN(a,b,c,d,e,0);}
function SN(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Cn(3553,a.xr);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BS(g,h,i,j);B1();Bw(c,d,0.0);k=0;while(k<Bh(b)){c=k;while(true){d=Bh(b);k=c+1|0;if(d<=k)break;if(Y(b,c)!=167)break;l=UK(B(377),Y(AKo(b),k));c=c+2|0;}if(c<Bh(b)){m=Vq(Y(b,c));if(m>=0){FU((a.tj+m|0)+32|0);Bw(a.sa.data[m+32|0],0.0,0.0);}}}BD();}
function Dv(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<Bh(b)){if(Y(b,d)==167)d=d+1|0;else{e=Vq(Y(b,d));if(e>=0)c=c+a.sa.data[e+32|0]|0;}d=d+1|0;}return c;}
function AQG(a,b){var c,d,e,f;c=Cg();d=ANq(b,B(158)).data;e=d.length;f=0;while(f<e){S(c,d[f]);f=f+1|0;}return c;}
function Qp(){var a=this;D.call(a);a.FX=0;a.FW=0;}
function BkL(){var a=new Qp();A$D(a);return a;}
function A$D(a){return;}
function YG(a){AML(1);a.FX=0;a.FW=0;}
function AFD(a){Lt();MF();AML(0);}
function AK1(){var a=this;Eu.call(a);a.o5=null;a.rh=null;a.oA=null;a.sY=null;a.td=0;}
function Bay(){var a=new AK1();A4z(a);return a;}
function A4z(a){L();HD(a,Bf3.ba+1|0);a.o5=$rt_createFloatArray(256);a.rh=$rt_createFloatArray(256);a.oA=$rt_createFloatArray(256);a.sY=$rt_createFloatArray(256);a.td=0;a.wY=2;}
function A0e(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.td=a.td+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=c-2|0;while(e<=c){f=b&15;g=e&15;d=d+a.o5.data[f+(g*16|0)|0];e=e+1|0;}h=a.rh.data;i=b+(c*16|0)|0;h[i]=d/3.200000047683716+a.oA.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){j=a.oA.data;i=b+(c*16|0)|0;j[i]=j[i]+a.sY.data[i]*0.05000000074505806;if(a.oA.data[i]<0.0)a.oA.data[i]=0.0;j=a.sY.data;j[i]=j[i]-0.30000001192092896;if(BN()<0.2)a.sY.data[i]=0.5;c=c+1|0;}b=b+1|0;}j=a.rh;a.rh=a.o5;a.o5
=j;c=0;while(c<256){d=a.o5.data[(c-(a.td*16|0)|0)&255];if(d>1.0)d=1.0;if(d<0.0)d=0.0;k=d*d;i=32.0+k*32.0|0;l=50.0+k*64.0|0;m=255;n=146.0+k*50.0|0;if(a.mC){b=i*30|0;i=((b+(l*59|0)|0)+2805|0)/100|0;l=(b+(l*70|0)|0)/100|0;m=(b+17850|0)/100|0;}j=a.dD.data;b=c*4|0;j[b+0|0]=i<<24>>24;a.dD.data[b+1|0]=l<<24>>24;a.dD.data[b+2|0]=m<<24>>24;a.dD.data[b+3|0]=n<<24>>24;c=c+1|0;}}
function ACp(){var a=this;Eu.call(a);a.ow=null;a.rs=null;a.jR=null;a.sP=null;a.tu=0;}
function BcG(){var a=new ACp();A3s(a);return a;}
function A3s(a){L();HD(a,Bf4.ba+1|0);a.ow=$rt_createFloatArray(256);a.rs=$rt_createFloatArray(256);a.jR=$rt_createFloatArray(256);a.sP=$rt_createFloatArray(256);a.tu=0;a.wY=2;}
function A8W(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.tu=a.tu+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){j=(g+e|0)&15;h=(i+f|0)&15;d=d+a.ow.data[j+(h*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.rs.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jR.data;e=(b+0|0)&15;j=((c+0|0)&15)*16|0;n=m[e+j|0];m=a.jR.data;h=h&15;n=n+m[h+j|0];m=a.jR.data;c=c+1|0;j=(c&15)*16|0;k[l]
=d+(n+m[h+j|0]+a.jR.data[e+j|0])/4.0*0.800000011920929;m=a.jR.data;m[l]=m[l]+a.sP.data[l]*0.009999999776482582;if(a.jR.data[l]<0.0)a.jR.data[l]=0.0;m=a.sP.data;m[l]=m[l]-0.05999999865889549;if(BN()<0.005)a.sP.data[l]=1.5;}b=b+1|0;}m=a.rs;a.rs=a.ow;a.ow=m;c=0;while(c<256){d=a.ow.data[(c-((a.tu/3|0)*16|0)|0)&255]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*100.0+155.0|0;n=d*d;h=n*255.0|0;l=n*d*d*128.0|0;if(a.mC){b=j*30|0;j=((b+(h*59|0)|0)+(l*11|0)|0)/100|0;h=(b+(h*70|0)|0)/100|0;l=(b+(l*70|0)|0)/100|0;}m=a.dD.data;b
=c*4|0;m[b+0|0]=j<<24>>24;a.dD.data[b+1|0]=h<<24>>24;a.dD.data[b+2|0]=l<<24>>24;a.dD.data[b+3|0]=(-1);c=c+1|0;}}
function AR_(){var a=this;Eu.call(a);a.mp=null;a.oJ=null;}
function AVL(a){var b=new AR_();AZv(b,a);return b;}
function AZv(a,b){L();HD(a,Bgu.ba+(b*16|0)|0);a.mp=$rt_createFloatArray(320);a.oJ=$rt_createFloatArray(320);}
function A3z(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<16){c=0;while(c<20){d=18;e=a.mp.data;f=c+1|0;g=e[b+((f%20|0)*16|0)|0]*18.0;h=b-1|0;while(h<=(b+1|0)){i=c;while(i<=f){if(h>=0&&i>=0&&h<16&&i<20)g=g+a.mp.data[h+(i*16|0)|0];d=d+1|0;i=i+1|0;}h=h+1|0;}e=a.oJ.data;j=b+(c*16|0)|0;e[j]=g/(d*1.059999942779541);if(c>=19)a.oJ.data[j]=BN()*BN()*BN()*4.0+BN()*0.10000000149011612+0.20000000298023224;c=f;}b=b+1|0;}e=a.oJ;a.oJ=a.mp;a.mp=e;f=0;while(f<256){k=a.mp.data[f]*1.7999999523162842;if(k>1.0)k=1.0;if(k<0.0)k=
0.0;l=k*155.0+100.0|0;g=k*k;m=g*255.0|0;j=g*k*k*k*k*k*k*k*k*255.0|0;n=255;if(k<0.5)n=0;if(a.mC){c=l*30|0;l=((c+(m*59|0)|0)+(j*11|0)|0)/100|0;m=(c+(m*70|0)|0)/100|0;j=(c+(j*70|0)|0)/100|0;}e=a.dD.data;b=f*4|0;e[b+0|0]=l<<24>>24;a.dD.data[b+1|0]=m<<24>>24;a.dD.data[b+2|0]=j<<24>>24;a.dD.data[b+3|0]=n<<24>>24;f=f+1|0;}}
function Xx(){}
function AAA(){var a=this;D.call(a);a.iH=null;a.bM=null;a.iG=null;a.eK=null;a.gO=null;a.c9=null;a.ds=0;a.dF=0;a.j9=0;a.y0=0;a.bO=null;a.Ea=null;a.pv=0;a.oo=0;a.xK=0;a.xj=0;a.qq=0;a.qr=0;a.qs=0;a.s$=0;a.s9=0;a.s_=0;a.r9=0;a.s7=0;a.lh=0;a.xq=0;a.Ho=null;a.HX=null;a.sb=0;a.rX=0;a.DV=0;a.su=0;a.qA=0;a.oY=null;a.Hi=0;a.GQ=0;a.rF=0.0;a.rE=0.0;a.rD=0.0;a.tJ=0.0;a.q8=0;}
function BaX(a,b){var c=new AAA();A2o(c,a,b);return c;}
function A2o(a,b,c){var d,e,f,g,h,i,j;a.iH=Cg();a.eK=Cg();a.pv=0;a.r9=(-1);a.Ho=$rt_createIntArray(50000);a.HX=Rl(64);a.oY=Cg();a.Hi=0;a.GQ=I3(1);a.rF=(-9999.0);a.rE=(-9999.0);a.rD=(-9999.0);a.q8=0;a.bO=b;a.iG=c;a.y0=I3(786432);a.oo=I3(3);B1();FI(a.oo,4864);Zl(a);Ee();BD();BA();d=BeP;a.xK=a.oo+1|0;FI(a.xK,4864);e=(-384);while(e<=384){f=(-384);while(f<=384){Bz(d);g=e+0|0;h=f+0|0;Be(d,g,16.0,h);i=e+64|0;Be(d,i,16.0,h);f=f+64|0;h=f;Be(d,i,16.0,h);Be(d,g,16.0,h);Br(d);}e=e+64|0;}Ee();a.xj=a.oo+2|0;FI(a.xj,4864);Bz(d);f
=(-384);while(f<=384){j=(-384);while(j<=384){g=f+64|0;h=j+0|0;Be(d,g,(-16.0),h);i=f+0|0;Be(d,i,(-16.0),h);j=j+64|0;h=j;Be(d,i,(-16.0),h);Be(d,g,(-16.0),h);}f=f+64|0;}Br(d);Ee();}
function Zl(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.bO.o.du)return;b=new DA;BA();c=BeP;Bz(c);d=0;while(d<1500){a:{e=N(b)*2.0-1.0;f=N(b)*2.0-1.0;g=N(b)*2.0-1.0;h=0.25+N(b)*0.25;i=e*e+f*f+g*g;if(i<1.0&&i>0.01){i=1.0/Ed(i);j=e*i;f=f*i;g=g*i;k=j*100.0;l=f*100.0;m=g*100.0;n=CR(j,g);o=Gs(n);p=GF(n);q=CR(Ed(j*j+g*g),f);r=Gs(q);s=GF(q);t=Cj(b)*3.141592653589793*2.0;u=Gs(t);v=GF(t);w=0;i=0.0*s;e=0.0*r;while(true){if(w>=4)break a;j=((w&2)-1|0)*h;w=w+1|0;x=((w&2)-1|0)*h;y=j*v-x*u;z=x*
v+j*u;ba=y*r+i;bb=e-y*s;bc=bb*o-z*p;bd=z*o+bb*p;Be(c,k+bc,l+ba,m+bd);}}}d=d+1|0;}Br(c);}
function Q7(a,b){if(a.bM!==null)AKY(a.bM,a);a.rF=(-9999.0);a.rE=(-9999.0);a.rD=(-9999.0);Bgt.n0=b;a.bM=b;a.Ea=A8o(b);if(b!==null){ANH(b,a);Je(a);}}
function Je(a){var b,c,d,e,f,g,h,i;a:{L();AKr(Be7,a.bO.o.lf);a.r9=a.bO.o.hi;if(a.c9!==null){b=0;while(true){if(b>=a.c9.data.length)break a;ARK(a.c9.data[b]);b=b+1|0;}}}b=64<<(3-a.r9|0);if(b>400)b=400;b=(b/16|0)+1|0;a.ds=b;a.dF=8;a.j9=b;a.c9=I(Ip,Bi(Bi(a.ds,a.dF),a.j9));a.gO=I(Ip,Bi(Bi(a.ds,a.dF),a.j9));c=0;d=0;a.qq=0;a.qr=0;a.qs=0;a.s$=a.ds;a.s9=a.dF;a.s_=a.j9;e=0;while(e<a.eK.s){Z(a.eK,e).i3=0;e=e+1|0;}Dx(a.eK);f=0;while(f<a.ds){g=0;while(g<a.dF){h=0;while(h<a.j9){if(a.c9.data[Bi(Bi(h,a.dF)+g|0,a.ds)+f|0]!==
null)Gf(a.iH,a.c9.data[Bi(Bi(h,a.dF)+g|0,a.ds)+f|0].gk);a.c9.data[Bi(Bi(h,a.dF)+g|0,a.ds)+f|0]=BbA(a.bM,a.iH,f*16|0,g*16|0,h*16|0,16,a.y0+c|0);a.c9.data[Bi(Bi(h,a.dF)+g|0,a.ds)+f|0].JQ=0;a.c9.data[Bi(Bi(h,a.dF)+g|0,a.ds)+f|0].xI=1;a.c9.data[Bi(Bi(h,a.dF)+g|0,a.ds)+f|0].fw=1;i=a.c9.data[Bi(Bi(h,a.dF)+g|0,a.ds)+f|0];b=d+1|0;i.Ip=d;KX(a.c9.data[Bi(Bi(h,a.dF)+g|0,a.ds)+f|0]);a.gO.data[Bi(Bi(h,a.dF)+g|0,a.ds)+f|0]=a.c9.data[Bi(Bi(h,a.dF)+g|0,a.ds)+f|0];S(a.eK,a.c9.data[Bi(Bi(h,a.dF)+g|0,a.ds)+f|0]);c=c+3|0;h=h+1
|0;d=b;}g=g+1|0;}f=f+1|0;}if(a.bM!==null){i=a.bM.bh;Tr(a,K(i.d),K(i.j),K(i.e));P3(a.gO,AYN(i));}}
function ACF(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ARm(Bkw,a.bM,a.iG,a.bO.e$,a.bO.f,d);AHg(Bgt,a.bM,a.iG,a.bO.e$,a.bO.f,a.bO.o,d);a.s7=0;a.lh=0;a.xq=0;e=a.bM.bh;f=e.cs;g=e.d-e.cs;h=d;BkM=f+g*h;BkN=e.b7+(e.j-e.b7)*h;BkO=e.ct+(e.e-e.ct)*h;BkP=e.cs+(e.d-e.cs)*h;BkQ=e.b7+(e.j-e.b7)*h;BkR=e.ct+(e.e-e.ct)*h;i=a.bM.dY;a.s7=i.s;if(a.bO.o.du)Bd(2912);j=0;while
(true){if(j>=i.s){j=0;if(j>=a.iH.s)return;b=Bkw;c=Z(a.iH,j);$p=1;continue _;}k=Z(i,j);if(Sj(k,b)&&ML(c,k.L)){if(k!==a.bM.bh)break;if(a.bO.o.cC)break;}j=j+1|0;}a.lh=a.lh+1|0;e=Bgt;$p=2;continue _;case 1:Y4(b,c,d);if(C()){break _;}j=j+1|0;if(j>=a.iH.s)return;b=Bkw;c=Z(a.iH,j);continue _;case 2:ANd(e,k,d);if(C()){break _;}while(true){j=j+1|0;if(j>=i.s){j=0;if(j>=a.iH.s)return;b=Bkw;c=Z(a.iH,j);$p=1;continue _;}k=Z(i,j);if(!Sj(k,b))continue;if(!ML(c,k.L))continue;if(k!==a.bM.bh)break;if(!a.bO.o.cC)continue;else break;}a.lh
=a.lh+1|0;e=Bgt;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ALp(a){var b;b=new T;V(b);return U(Bf(J(Bf(J(Bf(J(Bf(J(Bf(J(b,B(378)),a.su),B(23)),a.sb),B(379)),a.rX),B(380)),a.DV),B(381)),a.qA));}
function X9(a){var b;b=new T;V(b);return U(Bf(J(Bf(J(Bf(J(Bf(J(b,B(382)),a.lh),B(23)),a.s7),B(383)),a.xq),B(384)),(a.s7-a.xq|0)-a.lh|0));}
function Tr(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;c=b+(-8)|0;d=d+(-8)|0;a.qq=2147483647;a.qr=2147483647;a.qs=2147483647;a.s$=(-2147483648);a.s9=(-2147483648);a.s_=(-2147483648);e=a.ds*16|0;f=e/2|0;g=0;h=e-1|0;while(g<a.ds){i=g*16|0;j=(i+f|0)-c|0;if(j<0)j=j-h|0;i=i-Bi(j/e|0,e)|0;if(i<a.qq)a.qq=i;if(i>a.s$)a.s$=i;k=0;while(k<a.j9){l=k*16|0;m=(l+f|0)-d|0;if(m<0)m=m-h|0;j=l-Bi(m/e|0,e)|0;if(j<a.qs)a.qs=j;if(j>a.s_)a.s_=j;n=0;while(n<a.dF){o=n*16|0;if(o<a.qr)a.qr=o;if(o>a.s9)a.s9=o;p=a.c9.data[Bi(Bi(k,a.dF)+n|0,
a.ds)+g|0];q=p.i3;So(p,i,o,j);if(!q&&p.i3)S(a.eK,p);n=n+1|0;}k=k+1|0;}g=g+1|0;}}
function Vx(a,b,c,d){var e,f,g;if(a.bO.o.hi!=a.r9)Je(a);if(!c){a.sb=0;a.rX=0;a.DV=0;a.su=0;a.qA=0;}e=b.d-a.rF;f=b.j-a.rE;g=b.e-a.rD;if(e*e+f*f+g*g>16.0){a.rF=b.d;a.rE=b.j;a.rD=b.e;Tr(a,K(b.d),K(b.j),K(b.e));P3(a.gO,AYN(b));}return 0+YI(a,0,a.gO.data.length,c,d)|0;}
function YI(a,b,c,d,e){var f,g,h,i,j,k,l;Dx(a.oY);f=0;while(b<c){if(!d){a.sb=a.sb+1|0;if(a.gO.data[b].g1.data[d])a.qA=a.qA+1|0;else if(a.gO.data[b].fw)a.su=a.su+1|0;else a.rX=a.rX+1|0;}if(!a.gO.data[b].g1.data[d]&&a.gO.data[b].fw&&a.gO.data[b].xI&&PN(a.gO.data[b],d)>=0){S(a.oY,a.gO.data[b]);f=f+1|0;}b=b+1|0;}g=a.bO.f;h=g.cs+(g.d-g.cs)*e;i=g.b7+(g.j-g.b7)*e;j=g.ct+(g.e-g.ct)*e;k=0;while(k<a.oY.s){l=Z(a.oY,k);B1();Bw(l.BB-h,l.Er-i,l.Ds-j);FU(PN(l,d));BD();k=k+1|0;}return f;}
function HX(a){if(a.bO.o.du)return;a.pv=a.pv+1|0;}
function ADf(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;Bd(3553);c=OW(a.bM,b);d=c.x;e=c.z;f=c.w;if(a.bO.o.dx){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}F8(d,e,f);BA();h=BeP;Gv(0);if(!a.bO.o.du)Ba(2912);F8(d,e,f);FU(a.xK);Ba(3553);Bd(2912);Bd(3008);Ba(3042);De(1,1);B1();BS(1.0,1.0,1.0,1.0);Bw(0.0,0.0,0.0);Bv(0.0,
0.0,0.0,1.0);Bv(Hz(a.bM,b)*360.0,1.0,0.0,0.0);i=3553;c=a.iG;j=B(385);$p=1;case 1:$z=AHy(c,j);if(C()){break _;}k=$z;Cn(i,k);Bz(h);G(h,(-30.0),100.0,(-30.0),0.0,0.0);G(h,30.0,100.0,(-30.0),1.0,0.0);G(h,30.0,100.0,30.0,1.0,1.0);G(h,(-30.0),100.0,30.0,0.0,1.0);Br(h);i=3553;c=a.iG;j=B(386);$p=2;case 2:$z=AHy(c,j);if(C()){break _;}k=$z;Cn(i,k);Bz(h);G(h,(-20.0),(-100.0),20.0,1.0,1.0);G(h,20.0,(-100.0),20.0,0.0,1.0);G(h,20.0,(-100.0),(-20.0),0.0,0.0);G(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Br(h);Bd(3553);g=AJw(a.bM,
b);if(g>0.0){BS(g,g,g,g);FU(a.oo);}BS(1.0,1.0,1.0,1.0);Bd(3042);Ba(3008);if(!a.bO.o.du)Ba(2912);BD();F8(d*0.20000000298023224+0.03999999910593033,e*0.20000000298023224+0.03999999910593033,f*0.6000000238418579+0.10000000149011612);Bd(3553);FU(a.xj);Ba(3553);Gv(1);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function YS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;if(a.bO.o.lf){$p=2;continue _;}Bd(2884);c=a.bO.f.b7;d=a.bO.f.j-a.bO.f.b7;e=b;f=c+d*e;g=32;BA();h=BeP;i=3553;j=a.iG;k
=B(387);$p=1;case 1:$z=AHy(j,k);if(C()){break _;}l=$z;Cn(i,l);Ba(3042);De(770,771);j=S7(a.bM,b);m=j.x;n=j.z;o=j.w;if(a.bO.o.dx){p=m*30.0;m=(p+n*59.0+o*11.0)/100.0;n=(p+n*70.0)/100.0;o=(p+o*70.0)/100.0;}d=a.bM.bh.bS+(a.bM.bh.d-a.bM.bh.bS)*e+(a.pv+b)*0.029999999329447746;e=a.bM.bh.bR+(a.bM.bh.e-a.bM.bh.bR)*e;l=K(d/2048.0);q=K(e/2048.0);c=d-(l*2048|0);d=e-(q*2048|0);p=120.0-f+0.33000001311302185;r=c*4.8828125E-4;s=d*4.8828125E-4;Bz(h);Gy(h,m,n,o,0.800000011920929);t=p;u=(-256);while(u<256){v=(-256);while(v<256)
{i=u+0|0;w=i;x=v+g|0;y=x;c=i*4.8828125E-4+r;d=x*4.8828125E-4+s;G(h,w,t,y,c,d);i=u+g|0;e=i;z=i*4.8828125E-4+r;G(h,e,t,y,z,d);i=v+0|0;d=i;y=i*4.8828125E-4+s;G(h,e,t,d,z,y);G(h,w,t,d,c,y);v=x;}u=u+g|0;}Br(h);BS(1.0,1.0,1.0,1.0);Bd(3042);Ba(2884);return;case 2:ABh(a,b);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function ABh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:if(a.bO.o.du)return;Bd(2884);c=a.bO.f.b7;d=a.bO.f.j-a.bO.f.b7;e=b;f=c+d*e;BA();g=BeP;h=12.0;c=(a.bM.bh.bS+(a.bM.bh.d-a.bM.bh.bS)*e+(a.pv+b)*0.029999999329447746)/12.0;d=(a.bM.bh.bR+(a.bM.bh.e-a.bM.bh.bR)*e)/12.0+0.33000001311302185;i=108.0-f+0.33000001311302185;j=K(c/2048.0);k=K(d/2048.0);e=c-(j*2048|0);d=d-(k*2048|0);l=3553;m=a.iG;n=B(387);$p=1;case 1:$z=AHy(m,n);if(C()){break _;}o=$z;Cn(l,o);Ba(3042);De(770,771);m=S7(a.bM,b);p=m.x;q=m.z;r=m.w;if(a.bO.o.dx){b=p*30.0;p=(b+q*59.0+r*11.0)/100.0;q=(b+q
*70.0)/100.0;r=(b+r*70.0)/100.0;}s=K(e)*0.00390625;t=K(d)*0.00390625;u=e-K(e);v=d-K(d);CB(h,1.0,h);o=0;k=R(i,(-5.0));w=i+0.0;x=R(i,5.0);b=i+4.0;d=b-9.765625E-4;y=b;while(o<2){if(o)DO(1,1,1,1);else DO(0,0,0,0);z=(-2);while(z<=3){ba=(-2);while(ba<=3){Bz(g);bb=z*8|0;bc=ba*8|0;bd=bb-u;be=bc-v;if(k>0){Gy(g,p*0.699999988079071,q*0.699999988079071,r*0.699999988079071,0.800000011920929);Dc(g,0.0,(-1.0),0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,w,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625
+s;G(g,bh,w,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);}if(x<=0){Gy(g,p,q,r,0.800000011920929);Dc(g,0.0,1.0,0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,d,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;G(g,bh,d,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,d,e,bi,bg);G(g,c,d,e,bf,bg);}a:{Gy(g,p*0.8999999761581421,q*0.8999999761581421,r*0.8999999761581421,0.800000011920929);if(z>(-1)){Dc(g,(-1.0),0.0,0.0);bj=0;e=be+8.0;bg=(bc+8.0)*0.00390625
+t;bh=be+0.0;bi=(bc+0.0)*0.00390625+t;while(true){if(bj>=8)break a;b=bj;c=bd+b+0.0;bf=(bb+b+0.5)*0.00390625+s;G(g,c,w,e,bf,bg);G(g,c,y,e,bf,bg);G(g,c,y,bh,bf,bi);G(g,c,w,bh,bf,bi);bj=bj+1|0;}}}b:{if(z<=1){Dc(g,1.0,0.0,0.0);bk=0;bf=be+8.0;bh=(bc+8.0)*0.00390625+t;bi=be+0.0;c=(bc+0.0)*0.00390625+t;while(true){if(bk>=8)break b;b=bk;e=bd+b+1.0-9.765625E-4;bg=(bb+b+0.5)*0.00390625+s;G(g,e,w,bf,bg,bh);G(g,e,y,bf,bg,bh);G(g,e,y,bi,bg,c);G(g,e,w,bi,bg,c);bk=bk+1|0;}}}c:{Gy(g,p*0.800000011920929,q*0.800000011920929,
r*0.800000011920929,0.800000011920929);if(ba>(-1)){Dc(g,0.0,0.0,(-1.0));bj=0;c=bd+0.0;bf=(bb+0.0)*0.00390625+s;bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;while(true){if(bj>=8)break c;b=bj;e=be+b+0.0;bg=(bc+b+0.5)*0.00390625+t;G(g,c,y,e,bf,bg);G(g,bh,y,e,bi,bg);G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);bj=bj+1|0;}}}d:{if(ba<=1){Dc(g,0.0,0.0,1.0);bk=0;bi=bd+0.0;e=(bb+0.0)*0.00390625+s;bg=bd+8.0;bh=(bb+8.0)*0.00390625+s;while(true){if(bk>=8)break d;b=bk;c=be+b+1.0-9.765625E-4;bf=(bc+b+0.5)*0.00390625+t;G(g,bi,y,c,e,bf);G(g,bg,
y,c,bh,bf);G(g,bg,w,c,bh,bf);G(g,bi,w,c,e,bf);bk=bk+1|0;}}}Br(g);ba=ba+1|0;}z=z+1|0;}o=o+1|0;}BS(1.0,1.0,1.0,1.0);Bd(3042);Ba(2884);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function AIo(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.eK;e=new Wf;e.ye=b;RG(d,e);f=a.eK.s-1|0;g=a.eK.s;h=0;a:{while(h<g){d=Z(a.eK,f-h|0);if(!c){if(G6(d,b)<=1024.0)break a;if(!d.fw){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fw)break a;h=h+1|0;}return a.eK.s?0:1;}$p=1;case 1:ADl(d);if(C()){break _;}H_(a.eK,d);d.i3=0;a:{while(true){h=h+1|0;if(h>=g)break;d=Z(a.eK,f-h|0);if
(!c){if(G6(d,b)<=1024.0)break a;if(!d.fw){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fw)break a;}return a.eK.s?0:1;}continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;a:{BA();g=BeP;Ba(3042);Ba(3008);De(770,1);BS(1.0,1.0,1.0,(Bq(Long_toNumber(B$())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){if(a.tJ<=0.0)break a;De(774,768);e=a.iG;h=B(179);$p=2;continue _;}if(e!==null){De(770,771);i=Bq(Long_toNumber(B$())
/100.0)*0.20000000298023224+0.800000011920929;BS(i,i,i,Bq(Long_toNumber(B$())/200.0)*0.20000000298023224+0.5);b=a.iG;e=B(179);$p=1;continue _;}}Bd(3042);Bd(3008);return;case 1:$z=AHy(b,e);if(C()){break _;}j=$z;Cn(3553,j);Bd(3042);Bd(3008);return;case 2:$z=AHy(e,h);if(C()){break _;}k=$z;Cn(3553,k);BS(1.0,1.0,1.0,0.5);B1();e=a.bM;d=c.h$;k=c.h_;j=c.ia;$p=3;case 3:$z=ACB(e,d,k,j);if(C()){break _;}j=$z;if(j<=0)h=null;else{L();h=BeT.data[j];}Bd(3008);OM((-3.0),(-3.0));Ba(32823);Bz(g);l=b.cs;m=b.d-b.cs;n=f;Fb(g, -(l
+m*n), -(b.b7+(b.j-b.b7)*n), -(b.ct+(b.e-b.ct)*n));ADr(g);if(h===null){L();h=BeZ;}b=a.Ea;d=c.h$;k=c.h_;j=c.ia;o=240+(a.tJ*10.0|0)|0;$p=4;case 4:AMC(b,h,d,k,j,o);if(C()){break _;}Br(g);Fb(g,0.0,0.0,0.0);OM(0.0,0.0);Bd(32823);Ba(3008);Gv(1);BD();Bd(3042);Bd(3008);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AGj(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;if(!d&&!c.k8){Ba(3042);De(770,771);BS(0.0,0.0,0.0,0.4000000059604645);Bd(3553);Gv(0);e=a.bM;d=c.h$;g=c.h_;h=c.ia;$p=1;continue _;}return;case 1:$z=ACB(e,d,g,h);if(C()){break _;}g=$z;if(g<=0){Gv(1);Ba(3553);Bd(3042);return;}i=b.cs;j=b.d-b.cs;k=f;i=i+j*k;j=b.b7+(b.j-b.b7)*k;k=b.ct
+(b.e-b.ct)*k;L();b=BeT.data[g];e=a.bM;d=c.h$;g=c.h_;h=c.ia;$p=2;case 2:$z=b.oS(e,d,g,h);if(C()){break _;}b=$z;b=Ui(Du(b,0.0020000000949949026,0.0020000000949949026,0.0020000000949949026), -i, -j, -k);if(!a.bO.o.du){BA();c=BeP;Gm(c,3);Be(c,b.R,b.M,b.S);Be(c,b.V,b.M,b.S);Be(c,b.V,b.M,b.W);Be(c,b.R,b.M,b.W);Be(c,b.R,b.M,b.S);Br(c);Gm(c,3);Be(c,b.R,b.U,b.S);Be(c,b.V,b.U,b.S);Be(c,b.V,b.U,b.W);Be(c,b.R,b.U,b.W);Be(c,b.R,b.U,b.S);Br(c);Gm(c,1);Be(c,b.R,b.M,b.S);Be(c,b.R,b.U,b.S);Be(c,b.V,b.M,b.S);Be(c,b.V,b.U,b.S);Be(c,
b.V,b.M,b.W);Be(c,b.V,b.U,b.W);Be(c,b.R,b.M,b.W);Be(c,b.R,b.U,b.W);Br(c);}Gv(1);Ba(3553);Bd(3042);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Tx(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=GL(b,16);i=GL(c,16);j=GL(d,16);k=GL(e,16);l=GL(f,16);m=GL(g,16);while(h<=k){n=h%a.ds|0;if(n<0)n=n+a.ds|0;o=i;while(o<=l){p=o%a.dF|0;if(p<0)p=p+a.dF|0;q=j;while(q<=m){r=q%a.j9|0;if(r<0)r=r+a.j9|0;s=Bi(Bi(r,a.dF)+p|0,a.ds)+n|0;t=a.c9.data[s];if(!t.i3)S(a.eK,t);KX(t);q=q+1|0;}o=o+1|0;}h=h+1|0;}}
function Rv(a,b,c,d){Tx(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AOK(a,b,c,d,e,f,g){Tx(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function ARO(a,b,c){var d;d=0;while(d<a.c9.data.length){if(!AHB(a.c9.data[d])&&!(a.c9.data[d].fw&&(d+a.q8|0)&15))ASe(a.c9.data[d],b);d=d+1|0;}a.q8=a.q8+1|0;}
function AC5(a,b,c,d,e,f,g){return;}
function AH9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;if(a.bO.o.du)return;i=a.bM.bh.d-c;j=a.bM.bh.j-d;k=a.bM.bh.e-e;if(i*i+j*j+k*k<=256.0){if(b===B(213)){l=a.bO.c6;m=new SH;FD(m,a.bM,c,d,e,f,g,h);m.h0=1.0;m.id=1.0;m.ip=1.0;m.e7=32;D2(m,0.019999999552965164,0.019999999552965164);m.dr=m.dr*(N(m.m)*0.6000000238418579+0.20000000298023224);m.g=f*0.20000000298023224+(BN()*2.0-1.0)*0.019999999552965164;m.i=g*0.20000000298023224+(BN()*2.0-1.0)*0.019999999552965164;m.h=h*0.20000000298023224+(BN()*2.0-1.0)*0.019999999552965164;m.cw
=8.0/(BN()*0.8+0.2)|0;El(l,m);}else if(b===B(256))El(a.bO.c6,A8c(a.bM,c,d,e,1.0));else if(b===B(223)){b=a.bO.c6;l=new Q8;FD(l,a.bM,c,d,e,f,g,h);l.g=f+(BN()*2.0-1.0)*0.05000000074505806;l.i=g+(BN()*2.0-1.0)*0.05000000074505806;l.h=h+(BN()*2.0-1.0)*0.05000000074505806;n=N(l.m)*0.30000001192092896+0.699999988079071;l.ip=n;l.id=n;l.h0=n;l.dr=N(l.m)*N(l.m)*6.0+1.0;l.cw=(16.0/(N(l.m)*0.8+0.2)|0)+2|0;El(b,l);}else if(b!==B(257)){if(b===B(254))El(a.bO.c6,BcM(a.bM,c,d,e));else if(b===B(214))El(a.bO.c6,Bcz(a.bM,c,d,e,
f,g,h));else if(b===B(255))El(a.bO.c6,A8c(a.bM,c,d,e,2.5));}else{b=a.bO.c6;l=new O8;FD(l,a.bM,c,d,e,f,g,h);l.g=l.g*0.009999999776482582+f;l.i=l.i*0.009999999776482582+g;l.h=l.h*0.009999999776482582+h;N(l.m);N(l.m);N(l.m);N(l.m);N(l.m);N(l.m);l.DT=l.dr;l.ip=1.0;l.id=1.0;l.h0=1.0;l.cw=(8.0/(BN()*0.8+0.2)|0)+4|0;l.o4=1;l.e7=48;El(b,l);}}}
function A$v(a,b){return;}
function ATw(a,b){return;}
function VK(a){var b;b=0;while(b<a.c9.data.length){if(a.c9.data[b].om){if(!a.c9.data[b].i3)S(a.eK,a.c9.data[b]);KX(a.c9.data[b]);}b=b+1|0;}}
function AHf(){var a=this;CS.call(a);a.vd=0.0;a.yt=null;a.t6=null;}
function LQ(){var a=new AHf();A4u(a);return a;}
function A4u(a){var b,c;DR(a);a.vd=0.0;b=I(B2,106);c=b.data;c[0]=B(388);c[1]=B(389);c[2]=B(390);c[3]=B(391);c[4]=B(392);c[5]=B(393);c[6]=B(394);c[7]=B(395);c[8]=B(396);c[9]=B(397);c[10]=B(398);c[11]=B(399);c[12]=B(400);c[13]=B(401);c[14]=B(402);c[15]=B(403);c[16]=B(404);c[17]=B(405);c[18]=B(406);c[19]=B(407);c[20]=B(408);c[21]=B(409);c[22]=B(410);c[23]=B(411);c[24]=B(412);c[25]=B(413);c[26]=B(414);c[27]=B(415);c[28]=B(416);c[29]=B(417);c[30]=B(418);c[31]=B(419);c[32]=B(420);c[33]=B(421);c[34]=B(422);c[35]=B(423);c[36]
=B(424);c[37]=B(425);c[38]=B(426);c[39]=B(427);c[40]=B(428);c[41]=B(429);c[42]=B(430);c[43]=B(431);c[44]=B(432);c[45]=B(433);c[46]=B(434);c[47]=B(435);c[48]=B(436);c[49]=B(437);c[50]=B(409);c[51]=B(438);c[52]=B(439);c[53]=B(440);c[54]=B(441);c[55]=B(442);c[56]=B(443);c[57]=B(444);c[58]=B(445);c[59]=B(446);c[60]=B(447);c[61]=B(448);c[62]=B(449);c[63]=B(450);c[64]=B(451);c[65]=B(452);c[66]=B(453);c[67]=B(454);c[68]=B(455);c[69]=B(456);c[70]=B(457);c[71]=B(458);c[72]=B(459);c[73]=B(460);c[74]=B(461);c[75]=B(462);c[76]
=B(463);c[77]=B(464);c[78]=B(465);c[79]=B(466);c[80]=B(467);c[81]=B(468);c[82]=B(469);c[83]=B(470);c[84]=B(471);c[85]=B(472);c[86]=B(473);c[87]=B(474);c[88]=B(475);c[89]=B(476);c[90]=B(477);c[91]=B(478);c[92]=B(479);c[93]=B(480);c[94]=B(481);c[95]=B(482);c[96]=B(483);c[97]=B(484);c[98]=B(485);c[99]=B(486);c[100]=B(487);c[101]=B(488);c[102]=B(489);c[103]=B(490);c[104]=B(491);c[105]=B(492);a.yt=b;a.t6=a.yt.data[BN()*a.yt.data.length|0];}
function A5u(a){a.vd=a.vd+0.009999999776482582;}
function ANP(a,b,c){return;}
function AIx(a){Dx(a.bG);S(a.bG,Di(1,(a.bm/2|0)-100|0,(a.bD/4|0)+48|0,B(493)));S(a.bG,Di(2,(a.bm/2|0)-100|0,(a.bD/4|0)+72|0,B(494)));S(a.bG,Di(3,(a.bm/2|0)-100|0,(a.bD/4|0)+96|0,B(495)));S(a.bG,Di(0,(a.bm/2|0)-100|0,((a.bD/4|0)+120|0)+12|0,B(496)));Z(a.bG,1).gC=0;Z(a.bG,2).gC=0;if(a.I.k0===null)Z(a.bG,1).gC=0;}
function ACv(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cm){c=a.I;d=AIS(a,a.I.o);$p=1;continue _;}if(b.cm!=1)return;b=a.I;c=A$1(a);$p=2;continue _;case 1:ADY(c,d);if(C()){break _;}if(b.cm!=1)return;b=a.I;c=A$1(a);$p=2;case 2:ADY(b,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function ZI(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABm(a);if(C()){break _;}BA();e=BeP;f=3553;g=a.I.bo;h=B(497);$p=2;case 2:$z=AHy(g,h);if(C()){break _;}i=$z;Cn(f,i);BS(1.0,1.0,1.0,1.0);ET(e,16777215);CH(a,(a.bm-256|0)/2|0,30,0,0,256,49);B1();Bw((a.bm/2|0)+90|0,70.0,0.0);Bv((-20.0),0.0,0.0,1.0);j=Bq(Long_toNumber(Long_rem(B$(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Dv(a.bZ,a.t6)+32|0);CB(k,k,k);DG(a,a.bZ,a.t6,0,(-8),16776960);BD();Cx(a.bZ,B(498),(a.bm-Dv(a.bZ,B(498))|0)-2|0,a.bD-10|0,16777215);l=Ky();m=J2();n=Long_sub(l,Kf());g=new T;V(g);e=U(J(C6(J(C6(J(g,B(499)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(500)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Cx(a.bZ,e,(a.bm-Dv(a.bZ,e)|0)-2|0,2,8421504);g=new T;V(g);e=U(J(C6(J(C6(J(g,
B(502)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(503)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Cx(a.bZ,e,(a.bm-Dv(a.bZ,e)|0)-2|0,12,8421504);$p=3;case 3:AFI(a,b,c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function O4(){var a=this;D.call(a);a.mT=null;a.cD=null;a.je=null;a.st=null;}
function El(a,b){var c;c=b.xx();S(a.cD.data[c],b);}
function AA3(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(b<3){c=0;if(c<a.cD.data[b].s){d=Z(a.cD.data[b],c);$p=1;continue _;}b=b+1|0;}return;case 1:d.eo();if(C()){break _;}if(!d.cR)e=c;else{d=a.cD.data[b];e=c+(-1)|0;En(d,c);}c=e+1|0;while(true){if(c<a.cD.data[b].s){d=Z(a.cD.data[b],c);continue _;}b=b+1|0;if(b>=3)break;c=0;}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function ABi(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=BC(b.v*3.1415927410125732/180.0);e=Bq(b.v*3.1415927410125732/180.0);f= -e*Bq(b.J*3.1415927410125732/180.0);g=d*Bq(b.J*3.1415927410125732/180.0);h=BC(b.J*3.1415927410125732/180.0);i=b.cs;j=b.d-b.cs;k=c;BkS=i+j*k;BkT=b.b7+(b.j-b.b7)*k;BkU=b.ct
+(b.e-b.ct)*k;l=0;while(l<2){if(a.cD.data[l].s){if(!l){b=a.je;m=B(505);$p=1;continue _;}if(l==1){b=a.je;m=B(179);$p=2;continue _;}Cn(3553,0);BA();m=BeP;Bz(m);n=0;if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);$p=3;continue _;}Br(m);}l=l+1|0;}return;case 1:$z=AHy(b,m);if(C()){break _;}p=$z;a:while(true){if(l==1){b=a.je;m=B(179);$p=2;continue _;}Cn(3553,p);BA();m=BeP;Bz(m);n=0;if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);$p=3;continue _;}Br(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].s)continue;else break;}p
=0;if(!l){b=a.je;m=B(505);continue _;}}return;case 2:$z=AHy(b,m);if(C()){break _;}p=$z;a:while(true){Cn(3553,p);BA();m=BeP;Bz(m);n=0;if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);$p=3;continue _;}Br(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].s)continue;else break;}p=0;if(!l){b=a.je;m=B(505);$p=1;continue _;}if(l==1){b=a.je;m=B(179);continue _;}}return;case 3:o.kQ(m,c,d,h,e,f,g);if(C()){break _;}n=n+1|0;a:while(true){if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);continue _;}Br(m);while(true){l=l+1|0;if(l>=
2)break a;if(!a.cD.data[l].s)continue;else break;}if(!l){b=a.je;m=B(505);$p=1;continue _;}if(l==1){b=a.je;m=B(179);$p=2;continue _;}Cn(3553,0);BA();m=BeP;Bz(m);n=0;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AB1(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=2;if(a.cD.data[d].s){BA();e=BeP;f=0;if(f<a.cD.data[d].s){g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;$p=1;continue _;}}return;case 1:g.kQ(e,c,h,i,j,k,l);if(C()){break _;}f=f+1|0;if(f>=a.cD.data[d].s)return;g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;continue _;default:Fa();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function O6(a,b){var c;a.mT=b;c=0;while(c<3){Dx(a.cD.data[c]);c=c+1|0;}}
function AEH(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.mT;$p=1;case 1:a:{$z=ACB(e,b,c,d);if(C()){break _;}f=$z;if(f){L();e=BeT.data[f];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;El(a,AY9(a.mT,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,e));l
=l+1|0;}k=k+1|0;}g=g+1|0;}}}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function Y8(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.mT;$p=1;case 1:$z=ACB(f,b,c,d);if(C()){break _;}g=$z;if(g){L();h=BeT.data[g];i=b;j=i+Cj(a.st)*(h.dc-h.da-0.20000000298023224)+0.10000000149011612+h.da;k=c;l=k+Cj(a.st)*(h.cF-h.cM-0.20000000298023224)+0.10000000149011612+h.cM;m=d;n=m+Cj(a.st)*(h.dd-h.c_-0.20000000298023224)
+0.10000000149011612+h.c_;if(!e)l=k+h.cM-0.10000000149011612;if(e==1)l=k+h.cF+0.10000000149011612;if(e==2)n=m+h.c_-0.10000000149011612;if(e==3)n=m+h.dd+0.10000000149011612;if(e==4)j=i+h.da-0.10000000149011612;if(e==5)j=i+h.dc+0.10000000149011612;El(a,Yg(APw(AY9(a.mT,j,l,n,0.0,0.0,0.0,h),0.20000000298023224),0.6000000238418579));}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function XE(a){var b;b=new T;V(b);return U(Bf(J(b,B(3)),(a.cD.data[0].s+a.cD.data[1].s|0)+a.cD.data[2].s|0));}
function Nw(){var a=this;Gh.call(a);a.g7=null;a.vt=null;a.b2=null;a.FY=null;a.rU=0;a.Eq=0.0;a.IK=0.0;}
var BkV=null;function APO(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=FJ(a.b2.cd,a.b2.bA);g=AEt(f);h=Zk(f);i=a.b2.e$;LF(a.b2.eV);Ba(3042);BS(1.0,1.0,1.0,1.0);c=3553;f=a.b2.bo;j
=B(506);$p=1;case 1:$z=AHy(f,j);if(C()){break _;}d=$z;Cn(c,d);k=a.b2.f.K;a.mR=(-90.0);l=g/2|0;m=l-91|0;n=h-22|0;CH(a,m,n,0,0,182,22);CH(a,(m-1|0)+(k.bL*20|0)|0,n-1|0,0,22,24,22);c=3553;f=a.b2.bo;j=B(507);$p=2;case 2:$z=AHy(f,j);if(C()){break _;}d=$z;Cn(c,d);Ba(3042);De(775,769);CH(a,l-7|0,(h/2|0)-7|0,0,0,16,16);Bd(3042);o=((a.b2.f.dy/3|0)%2|0)!=1?0:1;if(a.b2.f.dy<10)o=0;p=a.b2.f.bT;q=a.b2.f.tG;NP(a.vt,Long_fromInt(Bi(a.rU,312871)));if(!AJ8(a.b2.cB)){Bd(3042);Ba(32826);B1();Bv(180.0,1.0,0.0,0.0);Hy();BD();r=
0;c=l-90|0;m=(h-16|0)-3|0;if(r>=9){DT();Bd(32826);if(!a.b2.o.lq)Cx(i,B(508),2,2,16777215);else{Cx(i,BT(J(J(J(B4(),B(509)),a.b2.lA),B(27))),2,2,16777215);Cx(i,Mk(a.b2),2,12,16777215);Cx(i,Or(a.b2),2,22,16777215);Cx(i,MO(a.b2),2,32,16777215);s=Ky();t=J2();u=Long_sub(t,Kf());j=BT(J(C6(J(C6(J(C6(J(B4(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hu(a,i,j,(g-Dv(i,
j)|0)-2|0,2,14737632);f=BT(J(C6(J(C6(J(B4(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hu(a,i,f,(g-Dv(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CX(a.g7)&&m<10){if(Z(a.g7,m).oB<200)Cx(i,Z(a.g7,m).yz,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;}r=AC4(a.b2.f);n=0;v=h-32|0;w=l+91|0;d=R(p,4);while(n<10){if(r>0){x=(w-(n*8|0)|0)-9|0;c=R((n*2|0)+1|0,r);if(c<0)CH(a,x,v,34,9,9,9);if(!c)CH(a,
x,v,25,9,9,9);if(c>0)CH(a,x,v,16,9,9,9);}y=0;if(o)y=1;z=m+(n*8|0)|0;c=d>0?v:v+E(a.vt,2)|0;CH(a,z,c,16+(y*9|0)|0,0,9,9);if(o){e=R((n*2|0)+1|0,q);if(e<0)CH(a,z,c,70,0,9,9);if(!e)CH(a,z,c,79,0,9,9);}e=R((n*2|0)+1|0,p);if(e<0)CH(a,z,c,52,0,9,9);if(!e)CH(a,z,c,61,0,9,9);n=n+1|0;}f=a.b2.f;j=BfV;$p=4;continue _;case 3:AEA(a,r,n,m,b);if(C()){break _;}r=r+1|0;if(r>=9){DT();Bd(32826);if(!a.b2.o.lq)Cx(i,B(508),2,2,16777215);else{Cx(i,BT(J(J(J(B4(),B(509)),a.b2.lA),B(27))),2,2,16777215);Cx(i,Mk(a.b2),2,12,16777215);Cx(i,
Or(a.b2),2,22,16777215);Cx(i,MO(a.b2),2,32,16777215);s=Ky();t=J2();u=Long_sub(t,Kf());j=BT(J(C6(J(C6(J(C6(J(B4(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hu(a,i,j,(g-Dv(i,j)|0)-2|0,2,14737632);f=BT(J(C6(J(C6(J(B4(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hu(a,i,f,(g
-Dv(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CX(a.g7)&&m<10){if(Z(a.g7,m).oB<200)Cx(i,Z(a.g7,m).yz,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;continue _;case 4:a:{$z=AGL(f,j);if(C()){break _;}c=$z;if(c){c=Ki((a.b2.f.f_-2|0)*10.0/300.0)|0;ba=(Ki(a.b2.f.f_*10.0/300.0)|0)-c|0;x=0;d=c+ba|0;p=v-9|0;while(true){if(x>=d)break a;if(x>=c)CH(a,m+(x*8|0)|0,p,25,18,9,9);else CH(a,m+(x*8|0)|0,p,16,18,9,9);x=x+1|0;}}}Bd(3042);Ba(32826);B1();Bv(180.0,1.0,0.0,0.0);Hy();BD();r=0;c=l-90|0;m=(h-
16|0)-3|0;if(r>=9){DT();Bd(32826);if(!a.b2.o.lq)Cx(i,B(508),2,2,16777215);else{Cx(i,BT(J(J(J(B4(),B(509)),a.b2.lA),B(27))),2,2,16777215);Cx(i,Mk(a.b2),2,12,16777215);Cx(i,Or(a.b2),2,22,16777215);Cx(i,MO(a.b2),2,32,16777215);s=Ky();t=J2();u=Long_sub(t,Kf());j=BT(J(C6(J(C6(J(C6(J(B4(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hu(a,i,j,(g-Dv(i,j)|0)-2|0,2,14737632);f
=BT(J(C6(J(C6(J(B4(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hu(a,i,f,(g-Dv(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CX(a.g7)&&m<10){if(Z(a.g7,m).oB<200)Cx(i,Z(a.g7,m).yz,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function AEA(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.b2.f.K.bf.data[b];if(f===null)return;g=f.mI-e;b=R(g,0.0);if(b>0){B1();h=1.0+g/5.0;i=c+8|0;g=i;j=d+12|0;Bw(g,j,0.0);CB(1.0/h,(h+1.0)/2.0,1.0);Bw( -i, -j,0.0);}k=BkV;l=a.b2.e$;m=a.b2.bo;$p=1;case 1:AGk(k,l,m,f,c,d);if(C()){break _;}if(b>0)BD();Lp(BkV,a.b2.e$,a.b2.bo,f,c,d);return;default:
Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AKC(a){var b,c;a.rU=a.rU+1|0;b=0;while(b<a.g7.s){c=Z(a.g7,b);c.oB=c.oB+1|0;b=b+1|0;}}
function AAf(){BkV=X8();}
function Jx(){var a=this;ER.call(a);a.K=null;a.AJ=0;a.k4=0;a.qz=0.0;a.kV=0.0;a.CO=null;a.x9=0;}
function AF0(a){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKX(a);if(C()){break _;}a.qz=a.kV;a.kV=0.0;return;default:Fa();}}C3().s(a,$p);}
function ALa(a){var b,c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.c4=1.6200000047683716;D2(a,0.6000000238418579,1.7999999523162842);if(a.l!==null){if(a.j>0.0){CT(a,a.d,a.j,a.e);b=a.l;c=a.L;$p=1;continue _;}a.h=0.0;a.i=0.0;a.g=0.0;a.J=0.0;}if(a.l!==null)a.l.bh=a;a.bT=20;a.c2=0;return;case 1:$z=X0(b,a,c);if(C()){break _;}b=$z;if(b.s){a.j=a.j+1.0;if(a.j>0.0){CT(a,a.d,a.j,a.e);b=a.l;c=a.L;continue _;}}a.h=0.0;a.i=0.0;a.g=0.0;a.J=0.0;if(a.l!==null)a.l.bh
=a;a.bT=20;a.c2=0;return;default:Fa();}}C3().s(a,b,c,$p);}
function Y_(a){var b,c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.l.i2&&a.bT<20&&!((a.oQ%20|0)*4|0))UW(a,1);AEm(a.K);a.qz=a.kV;$p=1;case 1:ACu(a);if(C()){break _;}b=Cd(a.g*a.g+a.h*a.h);c=It( -a.i*0.20000000298023224)*15.0;if(b>0.10000000149011612)b=0.10000000149011612;if(!(a.cx&&a.bT>0))b=0.0;if(!(!a.cx&&a.bT>0))c=0.0;a.kV=a.kV+(b-a.kV)*0.4000000059604645;a.jl=a.jl+(c-a.jl)*0.800000011920929;if(a.bT<=0)return;d
=a.l;e=Du(a.L,1.0,0.0,1.0);$p=2;case 2:a:{$z=ADO(d,a,e);if(C()){break _;}d=$z;if(d!==null){f=0;while(true){if(f>=d.s)break a;Z(d,f).xG(a);f=f+1|0;}}}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function A4C(a){return a.k4;}
function ALi(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D2(a,0.20000000298023224,0.20000000298023224);CT(a,a.d,a.j,a.e);a.i=0.10000000149011612;if(!DC(a.CO,B(512))){c=a.K;$p=1;continue _;}c=new Cc;BB();Gq(c,BhT,1);d=1;$p=2;continue _;case 1:AI4(c);if(C()){break _;}if(b===null){a.h=0.0;a.g=0.0;}else{a.g= -BC((a.kE+a.v)*3.1415927410125732/180.0)*0.10000000149011612;a.h= -Bq((a.kE+a.v)*3.1415927410125732/180.0)*0.10000000149011612;}a.c4
=0.10000000149011612;return;case 2:AQy(a,c,d);if(C()){break _;}c=a.K;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,$p);}
function AZz(a,b,c){a.k4=a.k4+c|0;}
function ALX(a,b){var c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;$p=1;case 1:AQy(a,b,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,$p);}
function AQy(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;d=Hf(a.l,a.d,a.j-0.30000001192092896,a.e,b);d.hb=40;if(c){e=N(a.m)*0.5;f=N(a.m)*3.1415927410125732*2.0;d.g= -Bq(f)*e;d.h=BC(f)*e;d.i=0.20000000298023224;}else{d.g= -Bq(a.v/180.0*3.1415927410125732)*BC(a.J/180.0*3.1415927410125732)*0.30000001192092896;d.h=BC(a.v/180.0*3.1415927410125732)
*BC(a.J/180.0*3.1415927410125732)*0.30000001192092896;d.i= -Bq(a.J/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=N(a.m)*3.1415927410125732*2.0;g=0.019999999552965164*N(a.m);h=d.g;i=e;j=GF(i);k=g;d.g=h+j*k;d.i=d.i+(N(a.m)-N(a.m))*0.10000000149011612;d.h=d.h+Gs(i)*k;}b=a.l;$p=1;case 1:AOl(b,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AKW(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ADA(a.K,b);b=BfV;$p=1;case 1:$z=AGL(a,b);if(C()){break _;}d=$z;if(d)c=c/5.0;if(!a.cx)c=c/5.0;return c;default:Fa();}}C3().s(a,b,c,d,$p);}
function Na(a,b){return ADZ(a.K,b);}
function A5l(a){return 0.11999999731779099;}
function Yw(a,b,c){var d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hn=0;if(a.bT<=0)return 0;if(a.dy>a.oZ/2.0)return 0;if(!(!(b instanceof DQ)&&!(b instanceof Jv))){if(!a.l.i2)c=0;if(a.l.i2==1)c=(c/3|0)+1|0;if(a.l.i2==3)c=(c*3|0)/2|0;}d=Bi(c,25-TI(a.K)|0)+a.x9|0;AD4(a.K,c);c=d/25|0;a.x9=d%25|0;if(!c)return 0;$p=1;case 1:$z=AB8(a,b,c);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,d,$p);}
function AGG(){var a=this;Jx.call(a);a.hY=null;a.k5=null;}
function A6M(a,b,c){var d=new AGG();AY3(d,a,b,c);return d;}
function AY3(a,b,c,d){var e;FC(a,c);a.oZ=20;a.dG=0.0;a.e9=0.0;a.G$=1;a.yr=B(376);a.G9=1;a.D8=0.0;a.E5=null;a.Jy=1.0;a.u0=0;a.Jz=0.0;a.bT=10;a.kE=0.0;a.c2=0;a.dz=0;a.Cn=0;a.Fk=(-1);a.JE=BN()*0.8999999761581421+0.10000000149011612;a.hn=0;a.hI=0;a.zR=0.0;a.sZ=0.699999988079071;a.mB=1;a.Is=(BN()+1.0)*0.009999999776482582;CT(a,a.d,a.j,a.e);a.JL=BN()*12398.0;a.v=BN()*3.1415927410125732*2.0;a.G8=1.0;a.rq=0.5;e=new VJ;e.bf=I(Cc,36);e.ce=I(Cc,4);e.bL=0;e.nB=a;a.K=e;a.AJ=0;a.k4=0;a.x9=0;Kw(a,c.fj+0.5,c.p0,c.fi+0.5,0.0,
0.0);a.c4=1.6200000047683716;a.bT=20;a.E5=B(513);a.D8=180.0;a.nH=20;a.yr=B(376);a.k5=b;if(c.bh!==null)Ca(c.bh);c.bh=a;if(d!==null&&d.oj!==null&&Bh(d.oj)>0){b=new T;V(b);a.tK=U(J(J(J(b,B(514)),d.oj),B(515)));}a.CO=d.oj;}
function AAV(a){a.iN=a.hY.kB;a.gD=a.hY.kq;a.hI=a.hY.un;}
function ALr(a){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOF(a.hY,a);$p=1;case 1:Y_(a);if(C()){break _;}return;default:Fa();}}C3().s(a,$p);}
function ARM(a){AO4(a.hY);}
function Et(a,b,c){APx(a.hY,b,c);}
function ABU(a,b){Ft(b,B(516),a.bT<<16>>16);Ft(b,B(517),a.dE<<16>>16);Ft(b,B(518),a.c2<<16>>16);Ft(b,B(519),a.dz<<16>>16);Gz(b,B(520),a.k4);HH(b,B(325),AL$(a.K,Ma()));}
function AO1(a,b){var c;a.bT=FK(b,B(516));if(!Y6(b,B(516)))a.bT=10;a.dE=FK(b,B(517));a.c2=FK(b,B(518));a.dz=FK(b,B(519));a.k4=FW(b,B(520));c=Kl(b,B(325));ARs(a.K,c);}
function Y7(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k5;d=Bb6(a.K,b);$p=1;case 1:ADY(c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function AJd(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k5;d=new SS;DR(d);d.Ac=B(521);d.f1=0;d.fS=b;$p=1;case 1:ADY(c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function ANu(a){var b,c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k5;c=new Xq;d=a.K;Ie(c);c.mo=A0H(c,3,3);c.uq=A5m();S(c.c7,A3w(c,c.mo,c.uq,0,124,35));e=0;while(e<3){f=0;while(f<3){S(c.c7,D7(c,c.mo,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){S(c.c7,D7(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){S(c.c7,D7(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:ADY(b,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AO8(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k5;d=new Wr;e=a.K;Ie(d);d.sJ=b;S(d.c7,D7(d,b,0,56,17));S(d.c7,D7(d,b,1,56,53));S(d.c7,D7(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){S(d.c7,D7(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){S(d.c7,D7(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:ADY(c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function Kt(a){return D9(a.K);}
function JC(a){AFH(a.K,a.K.bL,null);}
function ADz(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ARY(a.K,b);if(c<=0)return;$p=1;case 1:b.fr(a,c);if(C()){break _;}d=Kt(a);if(d!==null&&b instanceof ER){AE3(d,b);if(d.p<=0)JC(a);}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function R2(a,b){var c,d;c=a.k5.c6;d=new U$;FD(d,a.k5.B,b.d,b.j,b.e,b.g,b.i,b.h);d.p$=0;d.rc=0;d.mx=b;d.hR=a;d.rc=3;d.AT=(-0.5);El(c,d);}
function AC4(a){return TI(a.K);}
function Vw(a,b){var c;if(!b.uJ(a)){c=Kt(a);if(c!==null&&b instanceof ER){AEE(c,b);if(c.p<=0)JC(a);}}}
function AJL(){D.call(this);}
function BkW(){var a=new AJL();AWh(a);return a;}
function AWh(a){return;}
function AML(b){Bb();Bel=b;if(b){Bd2=0.0;Bd3=0.0;setTimeout(Ct(new QE,"onTimer"),200);}else{Bej=B$();if(Bek)clearTimeout(Bek);Bek=0;BdH.exitPointerLock();}}
function FA(){var b,c;a:{Bb();Bef=null;if(!P1(BdY)){b=Tq(BdY,0);Bef=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function Cw(){Bb();return Bef===null?0:DC($rt_str(Bef.type),B(522));}
function AR1(){Bb();return Bef===null?(-1):Bef.clientX;}
function XY(){Bb();return Bef===null?(-1):BdJ.clientHeight-Bef.clientY|0;}
function CV(){var b;Bb();if(Bef===null)b=(-1);else{b=Bef.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function B9(b){Bb();return Beh.data[b];}
function G3(){Bb();return !DC(B(523),$rt_str(Bef.type))?0:Bef.deltaY===0.0?0:Bef.deltaY<=0.0?1:(-1);}
function Qs(){D.call(this);}
var BkX=null;function BkY(){var a=new Qs();ANQ(a);return a;}
function ANQ(a){return;}
function Bq(b){return BkX.data[(b*651.8986206054688|0)&4095];}
function BC(b){return BkX.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function D_(b){return Ed(b);}
function Cd(b){return Ed(b);}
function K6(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function K(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function GL(b,c){return b>=0?b/c|0: -(( -b-1|0)/c|0)-1|0;}
function AL9(){var b,c,d,e;BkX=$rt_createFloatArray(4096);b=0;while(b<4096){BkX.data[b]=Gs((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=BkX.data;e=c;d[(e*11.377778053283691|0)&4095]=Gs(e*0.01745329238474369);c=c+90|0;}}
function Vv(){var a=this;D.call(a);a.EC=null;a.bI=0;}
function E9(a,b){var c=new Vv();A1Z(c,a,b);return c;}
function A1Z(a,b,c){a.EC=b;a.bI=c;}
function FE(){}
function VJ(){var a=this;D.call(a);a.bf=null;a.ce=null;a.bL=0;a.nB=null;}
function D9(a){return a.bf.data[a.bL];}
function S6(a,b){var c;c=0;while(true){if(c>=a.bf.data.length)return (-1);if(a.bf.data[c]!==null&&a.bf.data[c].bB==b)break;c=c+1|0;}return c;}
function RM(a){var b;b=0;while(true){if(b>=a.bf.data.length)return (-1);if(a.bf.data[b]===null)break;b=b+1|0;}return b;}
function ARn(a,b,c){var d;d=S6(a,b);if(d>=0&&d<9)a.bL=d;}
function F7(a,b){if(b>0)b=1;if(b<0)b=(-1);a.bL=a.bL-b|0;while(a.bL<0){a.bL=a.bL+9|0;}while(a.bL>=9){a.bL=a.bL-9|0;}}
function AEm(a){var b,c;b=0;while(b<a.bf.data.length){if(a.bf.data[b]!==null&&a.bf.data[b].mI>0){c=a.bf.data[b];c.mI=c.mI-1|0;}b=b+1|0;}}
function AGT(a,b){var c,d;c=S6(a,b);if(c<0)return 0;d=a.bf.data[c];b=d.p-1|0;d.p=b;if(b<=0)a.bf.data[c]=null;return 1;}
function Vg(a,b){var c,d,e,f;if(!b.em){c=b.bB;d=b.p;e=0;a:{while(true){if(e>=a.bf.data.length){e=(-1);break a;}if(a.bf.data[e]!==null&&a.bf.data[e].bB==c&&a.bf.data[e].p<EB(a.bf.data[e])&&a.bf.data[e].p<64)break;e=e+1|0;}}if(e<0)e=RM(a);if(e>=0){if(a.bf.data[e]===null)a.bf.data[e]=KC(c,0);c=d<=(EB(a.bf.data[e])-a.bf.data[e].p|0)?d:EB(a.bf.data[e])-a.bf.data[e].p|0;if(c>(64-a.bf.data[e].p|0))c=64-a.bf.data[e].p|0;if(c){d=d-c|0;f=a.bf.data[e];f.p=f.p+c|0;a.bf.data[e].mI=5;}}b.p=d;if(!b.p)return 1;}c=RM(a);if(c
<0)return 0;a.bf.data[c]=b;a.bf.data[c].mI=5;return 1;}
function Em(a,b,c){var d,e,f;d=a.bf;if(b>=a.bf.data.length){d=a.ce;b=b-a.bf.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].p<=c){e=d[b];d[b]=null;return e;}f=EG(d[b],c);if(!d[b].p)d[b]=null;return f;}
function AFH(a,b,c){var d;d=a.bf;if(b>=a.bf.data.length){d=a.ce;b=b-a.bf.data.length|0;}d.data[b]=c;}
function ADA(a,b){var c;c=1.0;if(a.bf.data[a.bL]!==null)c=c*AFl(a.bf.data[a.bL],b);return c;}
function AL$(a,b){var c,d,e;c=0;while(c<a.bf.data.length){if(a.bf.data[c]!==null){d=Ha();JO(d,B(524),c<<24>>24);QS(a.bf.data[c],d);Jt(b,d);}c=c+1|0;}e=0;while(e<a.ce.data.length){if(a.ce.data[e]!==null){d=Ha();JO(d,B(524),(e+100|0)<<24>>24);QS(a.ce.data[e],d);Jt(b,d);}e=e+1|0;}return b;}
function ARs(a,b){var c,d,e;a.bf=I(Cc,36);a.ce=I(Cc,4);c=0;while(c<AOy(b)){d=Fe(b,c);e=LE(d,B(524))&255;if(e>=0&&e<a.bf.data.length)a.bf.data[e]=A_c(d);if(e>=100&&e<(a.ce.data.length+100|0))a.ce.data[e-100|0]=A_c(d);c=c+1|0;}}
function Yx(a){return a.bf.data.length+4|0;}
function RU(a,b){var c;c=a.bf;if(b>=a.bf.data.length){c=a.ce;b=b-a.bf.data.length|0;}return c.data[b];}
function ATx(a){return B(325);}
function AZw(a){return 64;}
function ARY(a,b){var c;c=RU(a,a.bL);return c===null?1:AAr(c,b);}
function ADZ(a,b){var c;if(b.b_!==Bhe&&b.b_!==Bht)return 1;c=RU(a,a.bL);return c===null?0:AOc(c,b);}
function AIn(a,b){return a.ce.data[b];}
function TI(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.ce.data.length){if(a.ce.data[e]!==null&&DL(a.ce.data[e]) instanceof F5){f=Kp(a.ce.data[e]);c=c+(f-a.ce.data[e].em|0)|0;d=d+f|0;b=b+DL(a.ce.data[e]).za|0;}e=e+1|0;}if(!d)return 0;return (Bi(b-1|0,c)/d|0)+1|0;}
function AD4(a,b){var c;c=0;while(c<a.ce.data.length){if(a.ce.data[c]!==null&&DL(a.ce.data[c]) instanceof F5){FL(a.ce.data[c],b);if(!a.ce.data[c].p)a.ce.data[c]=null;}c=c+1|0;}}
function AI4(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(true){if(b>=a.bf.data.length){b=0;while(b<a.ce.data.length){if(a.ce.data[b]!==null){c=a.nB;d=a.ce.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bf.data[b]!==null)break;b=b+1|0;}c=a.nB;d=a.bf.data[b];e=1;$p=1;case 1:AQy(c,d,e);if(C()){break _;}a.bf.data[b]=null;while(true){b=b+1|0;if(b>=a.bf.data.length){b=0;while(b<a.ce.data.length){if(a.ce.data[b]
!==null){c=a.nB;d=a.ce.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bf.data[b]===null)continue;else break;}c=a.nB;d=a.bf.data[b];e=1;continue _;case 2:AQy(c,d,e);if(C()){break _;}a.ce.data[b]=null;while(true){b=b+1|0;if(b>=a.ce.data.length)break;if(a.ce.data[b]===null)continue;else{c=a.nB;d=a.ce.data[b];e=1;continue _;}}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AAu(a){return;}
function Dt(){I2.call(this);}
function Ew(){var a=this;CS.call(a);a.br=null;a.e_=0;a.fl=0;a.c7=null;}
var BkZ=null;function Bk0(){var a=new Ew();Ie(a);return a;}
function Ie(a){DR(a);a.br=null;a.e_=176;a.fl=166;a.c7=Cg();}
function ACm(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABm(a);if(C()){break _;}e=(a.bm-a.e_|0)/2|0;f=(a.bD-a.fl|0)/2|0;$p=2;case 2:a.s2(d);if(C()){break _;}B1();Bv(180.0,1.0,0.0,0.0);Hy();BD();B1();Bw(e,f,0.0);BS(1.0,1.0,1.0,1.0);Ba(32826);g=0;if(g>=a.c7.s){if(a.br===null){Bd(32826);DT();Bd(2896);Bd(2929);a.lr();Ba(2896);Ba(2929);BD();return;}Bw(0.0,
0.0,32.0);h=BkZ;i=a.bZ;j=a.I.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e3;l=h.lO;m=h.jN;n=h.jP;i=i.gx(l);if(i===null){l=h.rV();if(l>=0){Bd(2896);i=a.I.bo;j=a.I.bo;k=B(230);$p=5;continue _;}}j=BkZ;k=a.bZ;o=a.I.bo;$p=4;continue _;case 3:AGk(h,i,j,k,b,c);if(C()){break _;}Lp(BkZ,a.bZ,a.I.bo,a.br,b,c);Bd(32826);DT();Bd(2896);Bd(2929);a.lr();Ba(2896);Ba(2929);BD();return;case 4:AGk(j,k,o,i,m,n);if(C()){break _;}Lp(BkZ,a.bZ,a.I.bo,i,m,n);if(Nc(h,b,c)){Bd(2896);Bd(2929);l=h.jN;p=h.jP;KO(a,
l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c7.s){if(a.br===null){Bd(32826);DT();Bd(2896);Bd(2929);a.lr();Ba(2896);Ba(2929);BD();return;}Bw(0.0,0.0,32.0);h=BkZ;i=a.bZ;j=a.I.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e3;l=h.lO;m=h.jN;n=h.jP;i=i.gx(l);if(i===null){l=h.rV();if(l>=0){Bd(2896);i=a.I.bo;j=a.I.bo;k=B(230);$p=5;continue _;}}j=BkZ;k=a.bZ;o=a.I.bo;continue _;case 5:$z=AHy(j,k);if(C()){break _;}p=$z;Eb(i,p);CH(a,m,n,(l%16|0)*16|0,(l/16|
0)*16|0,16,16);Ba(2896);if(Nc(h,b,c)){Bd(2896);Bd(2929);l=h.jN;p=h.jP;KO(a,l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c7.s){if(a.br===null){Bd(32826);DT();Bd(2896);Bd(2929);a.lr();Ba(2896);Ba(2929);BD();return;}Bw(0.0,0.0,32.0);h=BkZ;i=a.bZ;j=a.I.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e3;l=h.lO;m=h.jN;n=h.jP;i=i.gx(l);if(i===null){l=h.rV();if(l>=0){Bd(2896);i=a.I.bo;j=a.I.bo;k=B(230);continue _;}}j=BkZ;k=a.bZ;o=a.I.bo;$p=4;continue _;default:
Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AQB(a,b,c){var d,e;d=0;while(true){if(d>=a.c7.s)return null;e=Z(a.c7,d);if(Nc(e,b,c))break;d=d+1|0;}return e;}
function AN9(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(d&&d!=1)){e=AQB(a,b,c);if(e!==null){$p=1;continue _;}if(a.br!==null){f=(a.bm-a.e_|0)/2|0;g=(a.bD-a.fl|0)/2|0;if(!(b>=f&&c>=g&&b<(f+a.e_|0)&&c<(g+a.e_|0))){h=a.I.f;if(!d){e=a.br;$p=2;continue _;}if(d==1){e=EG(a.br,1);$p=3;continue _;}}}}return;case 1:a:{AKE(e);if(C()){break _;}i=ARA(e);if(!(i===null&&a.br===null)){if
(i!==null&&a.br===null){g=!d?i.p:(i.p+1|0)/2|0;a.br=e.e3.j5(e.lO,g);if(i.p){$p=4;continue _;}h=null;$p=5;continue _;}if(i===null&&a.br!==null&&e.s6(a.br)){g=d?1:a.br.p;if(g>e.e3.f2())g=e.e3.f2();h=EG(a.br,g);$p=7;continue _;}if(i!==null&&a.br!==null){if(!e.s6(a.br)){if(i.bB!=a.br.bB)break a;if(EB(a.br)<=1)break a;g=i.p;if(g<=0)break a;if((g+a.br.p|0)>EB(a.br))break a;h=a.br;h.p=h.p+g|0;EG(i,g);if(i.p){$p=8;continue _;}h=null;$p=9;continue _;}if(i.bB==a.br.bB){if(i.bB==a.br.bB){if(!d){g=a.br.p;if(g>(e.e3.f2()
-i.p|0))g=e.e3.f2()-i.p|0;if(g>(EB(a.br)-i.p|0))g=EB(a.br)-i.p|0;EG(a.br,g);if(!a.br.p)a.br=null;i.p=i.p+g|0;}else if(d==1){g=1;if(g>(e.e3.f2()-i.p|0))g=e.e3.f2()-i.p|0;if(g>(EB(a.br)-i.p|0))g=EB(a.br)-i.p|0;EG(a.br,g);if(!a.br.p)a.br=null;i.p=i.p+g|0;}}}else if(a.br.p<=e.e3.f2()){h=a.br;$p=6;continue _;}}}}return;case 2:ALX(h,e);if(C()){break _;}a.br=null;if(d!=1)return;e=EG(a.br,1);$p=3;case 3:ALX(h,e);if(C()){break _;}if(!a.br.p)a.br=null;return;case 4:e.Jp();if(C()){break _;}return;case 5:ALB(e,h);if(C())
{break _;}$p=4;continue _;case 6:ALB(e,h);if(C()){break _;}a.br=i;return;case 7:ALB(e,h);if(C()){break _;}if(!a.br.p)a.br=null;return;case 8:e.Jp();if(C()){break _;}return;case 9:ALB(e,h);if(C()){break _;}$p=8;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A9N(a,b,c,d){return;}
function AAC(a,b,c){var d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.I.o.fs.bI)return;d=a.I;e=null;$p=1;case 1:ADY(d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AA5(a){var b,c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.br===null)return;b=a.I.f;c=a.br;$p=1;case 1:ALX(b,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,$p);}
function A$7(a){return 0;}
function AKe(){BkZ=X8();}
function APS(){var a=this;Ew.call(a);a.j1=null;a.xC=null;a.AC=0.0;a.Eu=0.0;}
function E8(a){var b=new APS();AZT(b,a);return b;}
function AZT(a,b){var c,d,e,f,g;Ie(a);a.j1=A0H(a,2,2);a.xC=A5m();a.pS=1;S(a.c7,A3w(a,a.j1,a.xC,0,144,36));c=0;while(c<2){d=0;while(d<2){S(a.c7,D7(a,a.j1,d+(c*2|0)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.c7;f=new QN;UH(f,a,b,(Yx(b)-1|0)-d|0,8,8+(d*18|0)|0);f.HY=a;f.wl=d;S(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){S(a.c7,D7(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){S(a.c7,D7(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function ALO(a){var b,c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA5(a);if(C()){break _;}b=0;while(b<a.j1.lW){c=Gj(a.j1,b);if(c!==null){d=a.I.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALX(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=a.j1.lW)break;c=Gj(a.j1,b);if(c===null)continue;else{d=a.I.f;continue _;}}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function ATX(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=(-1);if(e<2&&f<2){h=Gj(a.j1,e+(f*2|0)|0);if(h!==null)g=h.bB;}d[e+(f*3|0)|0]=g;f=f+1|0;}e=e+1|0;}Po(a.xC,0,RQ(Ww(),c));}
function AZ_(a){ED(a.bZ,B(525),86,16,4210752);}
function AD2(a,b,c,d){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACm(a,b,c,d);if(C()){break _;}a.AC=b;a.Eu=c;return;default:Fa();}}C3().s(a,b,c,d,$p);}
function Yd(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(526);$p=1;case 1:$z=AHy(c,d);if(C()){break _;}e=$z;BS(1.0,1.0,1.0,1.0);Eb(a.I.bo,e);f=(a.bm-a.e_|0)/2|0;g=(a.bD-a.fl|0)/2|0;CH(a,f,g,0,0,a.e_,a.fl);Ba(32826);Ba(2903);B1();b=f+51|0;e=g+75|0;Bw(b,e,50.0);CB((-30.0),30.0,30.0);Bv(180.0,
0.0,0.0,1.0);h=a.I.f.dG;i=a.I.f.v;j=a.I.f.J;k=b-a.AC;l=(e-50|0)-a.Eu;Bv(135.0,0.0,1.0,0.0);Hy();Bv((-135.0),0.0,1.0,0.0);m=l/40.0;Bv( -It(m)*20.0,1.0,0.0,0.0);d=a.I.f;n=k/40.0;d.dG=It(n)*20.0;a.I.f.v=It(n)*40.0;a.I.f.J= -It(m)*20.0;Bw(0.0,a.I.f.c4,0.0);d=Bgt;c=a.I.f;m=0.0;n=0.0;o=0.0;b=0.0;p=1.0;$p=2;case 2:AQI(d,c,m,n,o,b,p);if(C()){break _;}a.I.f.dG=h;a.I.f.v=i;a.I.f.J=j;BD();DT();Bd(32826);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function I9(){var a=this;D.call(a);a.qW=0;a.sz=0;a.vD=0;a.vI=0;a.xB=0;a.DO=0;a.cI=null;a.wi=null;a.wj=null;a.wk=null;a.t$=null;a.ui=null;a.vg=null;a.w$=null;a.vE=null;a.uR=null;a.tU=null;a.uv=null;a.uE=null;a.ws=null;a.t7=null;a.yc=null;a.q$=0;a.pX=0;a.oC=0;a.Gw=0;a.G_=0;a.ub=null;a.uO=null;a.xe=0;a.wZ=null;a.vB=null;a.v_=null;a.yk=null;a.yq=null;a.x3=null;a.mn=null;a.mF=null;a.vy=0;a.r2=0.0;a.r1=0.0;a.r0=0.0;a.rZ=0.0;a.sE=0.0;a.ts=0.0;a.rJ=0.0;a.sq=0.0;a.qU=0.0;a.qV=0.0;a.th=0.0;a.tg=0.0;a.tf=0.0;a.te=0.0;a.sX
=0.0;a.sV=0.0;a.sW=0.0;}
var Bk1=null;var Bk2=null;function Baj(a,b,c,d,e,f,g){var h=new I9();AIj(h,a,b,c,d,e,f,g);return h;}
function Pe(b){var c,d,e,f,g,h,i;c=Bk1.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=Baj(b,d,e,f,g,h,i);Bk1.data[b]=c;}return c;}
function AIj(a,b,c,d,e,f,g,h){var i,j,k;WO(a);a.wi=null;a.wj=null;a.wk=null;a.t$=null;a.ui=null;a.vg=null;a.w$=null;a.vE=null;a.uR=null;a.tU=null;a.uv=null;a.uE=null;a.ws=null;a.t7=null;a.yc=null;a.xe=0;a.wZ=$rt_createFloatArray(16);a.vB=$rt_createFloatArray(16);a.v_=$rt_createFloatArray(16);a.yk=Kx(M_());a.yq=Kx(M_());a.x3=Kx(M_());a.mn=A23();a.mF=A23();a.vy=0;a.r2=0.0;a.r1=0.0;a.r0=0.0;a.rZ=0.0;a.sE=0.0;a.ts=0.0;a.rJ=0.0;a.sq=0.0;a.qU=0.0;a.qV=0.0;a.th=0.0;a.tg=0.0;a.tf=0.0;a.te=0.0;a.sX=0.0;a.sV=0.0;a.sW
=0.0;a.qW=c;a.sz=d;a.vD=e;a.vI=f;a.xB=g;a.DO=h;if(Bk2===null)Bk2=ACe(B(527));i=B(3);if(a.qW)i=BT(J(J(B4(),i),B(528)));if(a.sz)i=BT(J(J(B4(),i),B(529)));if(a.vD)i=BT(J(J(B4(),i),B(530)));if(a.vI)i=BT(J(J(B4(),i),B(531)));if(a.xB)i=BT(J(J(B4(),i),B(532)));if(a.DO)i=BT(J(J(B4(),i),B(533)));i=BT(J(J(B4(),i),Bk2));j=OJ(35633);O5(j,BT(J(J(J(B4(),PL()),B(534)),i)));WK(j);if(!Vm(j)){Co(DB(),IN(BT(J(J(B4(),B(535)),Uf(j))),B(158),B(536)));M(Z7(B(537)));}k=OJ(35632);O5(k,BT(J(J(J(B4(),PL()),B(538)),i)));WK(k);if(!Vm(k))
{Co(DB(),IN(BT(J(J(B4(),B(535)),Uf(k))),B(158),B(539)));M(Z7(B(537)));}a.cI=AH7();Sg(a.cI,j);Sg(a.cI,k);b=1;a.q$=0;LZ(a.cI,a.q$,B(540));if(!a.sz)a.pX=(-1);else{a.pX=b;LZ(a.cI,a.pX,B(541));b=2;}if(!a.qW)a.oC=(-1);else{c=b+1|0;a.oC=b;LZ(a.cI,a.oC,B(542));b=c;}a.Gw=(-1);a.G_=b;AAL(a.cI);UR(a.cI,j);UR(a.cI,k);Tm(j);Tm(k);if(!AGr(a.cI)){Co(DB(),IN(BT(J(J(B4(),B(535)),AHz(a.cI))),B(158),B(543)));M(Z7(B(537)));}V6(a.cI);a.wi=Dp(a.cI,B(544));a.wj=Dp(a.cI,B(545));a.wk=Dp(a.cI,B(546));a.tU=Dp(a.cI,B(547));if(a.vD){a.uv
=Dp(a.cI,B(548));a.t7=Dp(a.cI,B(549));a.yc=Dp(a.cI,B(550));}if(a.vI){a.t$=Dp(a.cI,B(551));a.ui=Dp(a.cI,B(552));a.vg=Dp(a.cI,B(553));a.w$=Dp(a.cI,B(554));a.vE=Dp(a.cI,B(555));a.uR=Dp(a.cI,B(556));}if(a.xB)a.uE=Dp(a.cI,B(557));Re(Dp(a.cI,B(558)),0);a.ws=Dp(a.cI,B(559));a.ub=Pd();a.uO=L$();RW(a.ub);Hh(34962,a.uO);RF(a);}
function RF(a){N$(a.q$);Oa(a.q$,3,5126,0,28,0);if(a.sz){N$(a.pX);Oa(a.pX,2,5126,0,28,12);}if(a.qW){N$(a.oC);Oa(a.oC,4,5121,1,28,20);}}
function AQ3(a){V6(a.cI);}
function AUg(a){return;}
function AMw(a,b){if(!Lv(b,a.yk)){N0(GQ(a.yk,b),a.wZ);Mj(a.wi,a.wZ);}}
function AM6(a,b){if(!Lv(b,a.yq)){N0(GQ(a.yq,b),a.vB);Mj(a.wj,a.vB);}}
function Z2(a,b){if(!Lv(b,a.x3)){N0(GQ(a.x3,b),a.v_);Mj(a.wk,a.v_);}}
function ANg(a,b,c){if(!(Te(b,a.mn)&&Te(c,a.mF))){VM(a.mn,b);VM(a.mF,c);Lq(a.t7,a.mn.lc,a.mn.ld,a.mn.lb);Lq(a.yc,a.mF.lc,a.mF.ld,a.mF.lb);}}
function ALt(a,b){if(a.vy!=b){a.vy=b;Re(a.ui,b%2|0);Ih(a.uR,b/2|0);}}
function AQd(a,b,c,d,e){if(!(a.r2===b&&a.r1===c&&a.r0===d&&a.rZ===e)){a.r2=b;a.r1=c;a.r0=d;a.rZ=e;Up(a.t$,a.r2,a.r1,a.r0,a.rZ);}}
function APP(a,b,c){if(!(a.sE===b&&a.ts===c)){a.sE=b;a.ts=c;Ih(a.vg,a.sE);Ih(a.w$,a.ts);}}
function AKP(a,b){if(a.rJ!==b){a.rJ=b;Ih(a.vE,a.rJ);}}
function AIZ(a,b){if(a.sq!==b){a.sq=b;Ih(a.uE,a.sq);}}
function AON(a,b,c){var d,e;if(!(a.qU===b&&a.qV===c)){a.qU=b;a.qV=c;d=a.ws;b=a.qU;c=a.qV;Bb();if(d!==null){e=BdM;d=d.kw;e.uniform2f(d,b,c);}}}
function ALR(a,b,c,d,e){if(!(a.th===b&&a.tg===c&&a.tf===d&&a.te===e)){a.th=b;a.tg=c;a.tf=d;a.te=e;Up(a.tU,a.th,a.tg,a.tf,a.te);}}
function ACa(a,b,c,d){if(!(a.sX===b&&a.sV===c&&a.sW===d)){a.sX=b;a.sV=c;a.sW=d;Lq(a.uv,a.sX,a.sV,a.sW);}}
function AOU(){Bk1=I(I9,128);Bk2=null;}
function Rx(){var a=this;D.call(a);a.By=0;a.ri=null;a.o0=null;a.lM=0;a.jK=0;}
function Tn(){var a=this;D.call(a);a.t1=null;a.xs=0;a.Du=0;a.Fj=0;}
function AHt(){var a=this;D.call(a);a.k8=0;a.h$=0;a.h_=0;a.ia=0;a.hL=0;a.gy=null;a.nA=null;}
function A0G(a,b,c,d,e){var f=new AHt();A6a(f,a,b,c,d,e);return f;}
function A1g(a){var b=new AHt();A9F(b,a);return b;}
function A6a(a,b,c,d,e,f){a.k8=0;a.h$=b;a.h_=c;a.ia=d;a.hL=e;a.gy=BW(f.x,f.z,f.w);}
function A9F(a,b){a.k8=1;a.nA=b;a.gy=BW(b.d,b.j,b.e);}
function Cc(){var a=this;D.call(a);a.p=0;a.mI=0;a.bB=0;a.em=0;}
function AL7(a){var b=new Cc();AH5(b,a);return b;}
function G2(a,b){var c=new Cc();Vc(c,a,b);return c;}
function Qo(a){var b=new Cc();DD(b,a);return b;}
function EL(a,b){var c=new Cc();Gq(c,a,b);return c;}
function KC(a,b){var c=new Cc();MQ(c,a,b);return c;}
function Ou(a,b,c){var d=new Cc();A0K(d,a,b,c);return d;}
function A_c(a){var b=new Cc();A1z(b,a);return b;}
function AH5(a,b){Vc(a,b,1);}
function Vc(a,b,c){MQ(a,b.b,c);}
function DD(a,b){Gq(a,b,1);}
function Gq(a,b,c){MQ(a,b.cW,c);}
function MQ(a,b,c){a.p=0;a.bB=b;a.p=c;}
function A0K(a,b,c,d){a.p=0;a.bB=b;a.p=c;a.em=d;}
function A1z(a,b){a.p=0;AEb(a,b);}
function EG(a,b){a.p=a.p-b|0;return Ou(a.bB,b,a.em);}
function DL(a){BB();return Bhj.data[a.bB];}
function DK(a){return DL(a).tc;}
function AJl(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=DL(a);$p=1;case 1:$z=h.iO(a,b,c,d,e,f,g);if(C()){break _;}d=$z;return d;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFl(a,b){return DL(a).x4(a,b);}
function ABl(a,b,c){var d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=DL(a);$p=1;case 1:$z=d.n8(a,b,c);if(C()){break _;}b=$z;return b;default:Fa();}}C3().s(a,b,c,d,$p);}
function QS(a,b){Ft(b,B(560),a.bB<<16>>16);JO(b,B(561),a.p<<24>>24);Ft(b,B(562),a.em<<16>>16);return b;}
function AEb(a,b){a.bB=FK(b,B(560));a.p=LE(b,B(561));a.em=FK(b,B(562));}
function EB(a){return DL(a).eZ;}
function Kp(a){BB();return Bhj.data[a.bB].ff;}
function FL(a,b){a.em=a.em+b|0;if(a.em>Kp(a)){a.p=a.p-1|0;if(a.p<0)a.p=0;a.em=0;}}
function AE3(a,b){BB();Bhj.data[a.bB].sf(a,b);}
function QL(a,b,c,d,e){BB();Bhj.data[a.bB].xY(a,b,c,d,e);}
function AAr(a,b){BB();return Bhj.data[a.bB].nZ(b);}
function AOc(a,b){BB();return Bhj.data[a.bB].o7(b);}
function A1d(a,b){return;}
function AEE(a,b){BB();Bhj.data[a.bB].yG(a,b);}
function ZQ(){var a=this;D.call(a);a.h4=null;a.lW=0;a.sk=null;}
function A0H(a,b,c){var d=new ZQ();AWz(d,a,b,c);return d;}
function AWz(a,b,c,d){a.lW=Bi(c,d);a.h4=I(Cc,a.lW);a.sk=b;}
function A3u(a){return a.lW;}
function Gj(a,b){return a.h4.data[b];}
function AE1(a,b,c){var d,e;if(a.h4.data[b]===null)return null;if(a.h4.data[b].p<=c){d=a.h4.data[b];a.h4.data[b]=null;a.sk.tp(a);return d;}e=EG(a.h4.data[b],c);if(!a.h4.data[b].p)a.h4.data[b]=null;a.sk.tp(a);return e;}
function A3H(a,b,c){a.h4.data[b]=c;a.sk.tp(a);}
function A84(a){return 64;}
function ADT(a){return;}
function AAK(){D.call(this);this.m6=null;}
function A5m(){var a=new AAK();ASX(a);return a;}
function ASX(a){a.m6=I(Cc,1);}
function A4$(a,b){return a.m6.data[b];}
function AWH(a,b,c){var d;if(a.m6.data[b]===null)return null;d=a.m6.data[b];a.m6.data[b]=null;return d;}
function Po(a,b,c){a.m6.data[b]=c;}
function AY0(a){return 64;}
function ANn(a){return;}
function HM(){var a=this;D.call(a);a.lO=0;a.jN=0;a.jP=0;a.e3=null;a.p3=null;}
function D7(a,b,c,d,e){var f=new HM();UH(f,a,b,c,d,e);return f;}
function UH(a,b,c,d,e,f){a.p3=b;a.e3=c;a.lO=d;a.jN=e;a.jP=f;}
function Nc(a,b,c){var d,e;d=(a.p3.bm-a.p3.e_|0)/2|0;e=(a.p3.bD-a.p3.fl|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.jN-1|0)&&d<((a.jN+16|0)+1|0)&&c>=(a.jP-1|0)&&c<((a.jP+16|0)+1|0)?1:0;}
function ALd(a){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKE(a);if(C()){break _;}return;default:Fa();}}C3().s(a,$p);}
function AXl(a,b){return 1;}
function ARA(a){return a.e3.gx(a.lO);}
function ALB(a,b){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e3.jC(a.lO,b);$p=1;case 1:AKE(a);if(C()){break _;}return;default:Fa();}}C3().s(a,b,$p);}
function A9W(a){return (-1);}
function AKE(a){var b,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.e3;$p=1;case 1:b.ki();if(C()){break _;}return;default:Fa();}}C3().s(a,b,$p);}
function ADi(){HM.call(this);this.qN=null;}
function A3w(a,b,c,d,e,f){var g=new ADi();A4X(g,a,b,c,d,e,f);return g;}
function A4X(a,b,c,d,e,f,g){UH(a,b,d,e,f,g);a.qN=c;}
function A0p(a,b){return 0;}
function AOa(a){var b;b=0;while(b<a.qN.lW){if(Gj(a.qN,b)!==null)AE1(a.qN,b,1);b=b+1|0;}}
function QN(){var a=this;HM.call(a);a.wl=0;a.HY=null;}
function A2X(a,b){return !(DL(b) instanceof F5)?0:DL(b).zV!=a.wl?0:1;}
function AWB(a){return 15+(a.wl*16|0)|0;}
function Wh(){D.call(this);this.D2=null;}
function SF(){var a=this;D.call(a);a.A1=null;a.vQ=0;}
function M8(){Fm.call(this);}
function ALW(b){var c,d;c=b.data.length;d=new U0;Uj(d,c,0,0+c|0);d.xV=0;d.Bv=0;d.wQ=b;return d;}
function AFi(a){EA(a);return a;}
function A2H(a){Gw(a);return a;}
function Df(){var a=this;D.call(a);a.iD=null;a.HD=null;a.H6=null;a.l_=0.0;a.B1=0.0;}
function Bk3(){var a=new Df();EI(a);return a;}
function EI(a){a.HD=A$2();a.H6=Km();a.l_=0.0;a.B1=1.0;}
function AKw(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.iD.t0;$p=1;case 1:$z=AHy(c,b);if(C()){break _;}d=$z;Eb(c,d);return;default:Fa();}}C3().s(a,b,c,d,$p);}
function APu(a,b,c){var d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iD.t0;$p=1;case 1:$z=AD7(d,b,c);if(C()){break _;}e=$z;Eb(d,e);return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AG5(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bd(2896);L();g=Bgu.ba;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;B1();Bw(c,d,e);n=b.c1*1.399999976158142;CB(n,n,n);o=B(179);$p
=1;case 1:AKw(a,o);if(C()){break _;}BA();o=BeP;p=1.0;q=0.0;r=b.eO/b.c1;Bv( -a.iD.rp,0.0,1.0,0.0);Bw(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BS(1.0,1.0,1.0,1.0);Bz(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;G(o,c,d,0.0,e,s);G(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;G(o,(-0.5),d,0.0,t,u);G(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Bw(0.0,0.0,(-0.03999999910593033));}Br(o);BD();Ba(2896);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function A8u(b,c,d,e){var f;Bd(3553);BA();f=BeP;BS(1.0,1.0,1.0,1.0);Bz(f);Fb(f,c,d,e);Ch(0.0,0.0,(-1.0));Be(f,b.R,b.U,b.S);Be(f,b.V,b.U,b.S);Be(f,b.V,b.M,b.S);Be(f,b.R,b.M,b.S);Ch(0.0,0.0,1.0);Be(f,b.R,b.M,b.W);Be(f,b.V,b.M,b.W);Be(f,b.V,b.U,b.W);Be(f,b.R,b.U,b.W);Ch(0.0,(-1.0),0.0);Be(f,b.R,b.M,b.S);Be(f,b.V,b.M,b.S);Be(f,b.V,b.M,b.W);Be(f,b.R,b.M,b.W);Ch(0.0,1.0,0.0);Be(f,b.R,b.U,b.W);Be(f,b.V,b.U,b.W);Be(f,b.V,b.U,b.S);Be(f,b.R,b.U,b.S);Ch((-1.0),0.0,0.0);Be(f,b.R,b.M,b.W);Be(f,b.R,b.U,b.W);Be(f,b.R,b.U,
b.S);Be(f,b.R,b.M,b.S);Ch(1.0,0.0,0.0);Be(f,b.V,b.M,b.S);Be(f,b.V,b.U,b.S);Be(f,b.V,b.U,b.W);Be(f,b.V,b.M,b.W);Fb(f,0.0,0.0,0.0);Br(f);Ba(3553);}
function AUL(a,b){a.iD=b;}
function ANo(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJY(a.iD,b.d,b.j,b.e);if(b.cV<=0)return;$p=1;case 1:AG5(a,b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AIM(){var a=this;Df.call(a);a.wH=null;a.ie=null;}
function X8(){var a=new AIM();A5B(a);return a;}
function A5B(a){EI(a);a.wH=Km();a.ie=new DA;a.l_=0.15000000596046448;a.B1=0.75;}
function APK(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b.ne;B1();i=Bq((b.mJ+g)/10.0+b.yu)*0.10000000149011612+0.10000000149011612;j=((b.mJ+g)/20.0+b.yu)*57.2957763671875;k=1;if(b.ne.p>1)k=2;if(b.ne.p>5)k=3;if(b.ne.p>20)k=4;Bw(c,d+
i,e);Ba(32826);if(h.bB<256){L();if(!BeT.data[h.bB].el()){Bv(j,0.0,1.0,0.0);b=B(179);$p=3;continue _;}}CB(0.5,0.5,0.5);l=DK(h);if(h.bB>=256){b=B(230);$p=1;continue _;}b=B(179);$p=2;continue _;case 1:AKw(a,b);if(C()){break _;}BA();m=BeP;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B1();if(s>0)Bw((N(a.ie)*2.0-1.0)*0.30000001192092896,(N(a.ie)*2.0-1.0)*0.30000001192092896,(N(a.ie)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iD.rp,0.0,
1.0,0.0);Bz(m);Ch(0.0,1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Br(m);BD();s=s+1|0;}Bd(32826);BD();return;case 2:AKw(a,b);if(C()){break _;}BA();m=BeP;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B1();if(s>0)Bw((N(a.ie)*2.0-1.0)*0.30000001192092896,(N(a.ie)*2.0-1.0)*0.30000001192092896,(N(a.ie)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iD.rp,0.0,1.0,0.0);Bz(m);Ch(0.0,
1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Br(m);BD();s=s+1|0;}Bd(32826);BD();return;case 3:AKw(a,b);if(C()){break _;}v=0.25;if(!BeT.data[h.bB].gf()&&h.bB!=BeY.b)v=0.5;CB(v,v,v);n=0;while(n<k){B1();if(n>0)Bw((N(a.ie)*2.0-1.0)*0.20000000298023224/v,(N(a.ie)*2.0-1.0)*0.20000000298023224/v,(N(a.ie)*2.0-1.0)*0.20000000298023224/v);GY(a.wH,BeT.data[h.bB]);BD();n=n+1|0;}Bd(32826);BD();return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,$p);}
function AGk(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d!==null){if(d.bB<256){L();if(!BeT.data[d.bB].el()){g=d.bB;b=B(179);$p=1;continue _;}}if(DK(d)>=0){Bd(2896);if(d.bB>=256){b=B(230);$p=2;continue _;}b=B(179);$p=3;continue _;}}return;case 1:$z=AHy(c,b);if(C()){break _;}h=$z;Eb(c,h);i=BeT.data[g];B1();Bw(e-2|0,f+3|0,0.0);CB(10.0,10.0,10.0);Bw(1.0,0.5,8.0);Bv(210.0,1.0,
0.0,0.0);Bv(45.0,0.0,1.0,0.0);BS(1.0,1.0,1.0,1.0);GY(a.wH,i);BD();return;case 2:$z=AHy(c,b);if(C()){break _;}g=$z;Eb(c,g);W6(a,e,f,(DK(d)%16|0)*16|0,(DK(d)/16|0)*16|0,16,16);Ba(2896);return;case 3:$z=AHy(c,b);if(C()){break _;}g=$z;Eb(c,g);W6(a,e,f,(DK(d)%16|0)*16|0,(DK(d)/16|0)*16|0,16,16);Ba(2896);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Lp(a,b,c,d,e,f){var g,h,i,j,k,l;if(d!==null){if(d.p>1){c=new T;V(c);g=U(Bf(J(c,B(3)),d.p));Bd(2896);Bd(2929);Cx(b,g,((e+19|0)-2|0)-Dv(b,g)|0,(f+6|0)+3|0,16777215);Ba(2896);Ba(2929);}if(d.em>0){h=13-((d.em*13|0)/Kp(d)|0)|0;i=255-((d.em*255|0)/Kp(d)|0)|0;Bd(2896);Bd(2929);Bd(3553);BA();j=BeP;k=255-i|0;l=k<<16|i<<8;k=(k/4|0)<<16|16128;e=e+2|0;f=f+13|0;N8(a,j,e,f,13,2,0);N8(a,j,e,f,12,1,k);N8(a,j,e,f,h,1,l);Ba(3553);Ba(2896);Ba(2929);BS(1.0,1.0,1.0,1.0);}}}
function N8(a,b,c,d,e,f,g){var h,i,j;Bz(b);ET(b,g);h=c+0|0;i=d+0|0;Be(b,h,i,0.0);j=d+f|0;Be(b,h,j,0.0);h=c+e|0;Be(b,h,j,0.0);Be(b,h,i,0.0);Br(b);}
function W6(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;BA();h=BeP;Bz(h);i=b+0|0;j=c+g|0;k=(d+0|0)*0.00390625;l=(e+g|0)*0.00390625;G(h,i,j,0.0,k,l);m=b+f|0;n=(d+f|0)*0.00390625;G(h,m,j,0.0,n,l);l=c+0|0;j=(e+0|0)*0.00390625;G(h,m,l,0.0,n,j);G(h,i,l,0.0,k,j);Br(h);}
function AC$(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APK(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function Pg(){var a=this;D.call(a);a.BQ=null;a.Io=0;a.Il=0;a.Go=0;a.Hg=0;}
function QG(){var a=this;D.call(a);a.fZ=null;a.x_=null;}
function Zw(a,b){var c,d,e,f,g,h,i,j,k,l;if(Hn()===null)Bed=BdH.createElement("canvas");if(Hn().width<a.fZ.width){b=Hn();c=a.fZ.width;b.width=c;}if(Hn().height<a.fZ.height){b=Hn();c=a.fZ.height;b.height=c;}if(JU()===null)Bee=Hn().getContext("2d");b=JU();d=a.fZ.width;e=a.fZ.height;b.clearRect(0.0,0.0,d,e);b=JU();c=a.fZ;d=a.fZ.width;e=a.fZ.height;b.drawImage(c,0.0,0.0,d,e);b=JU();d=a.fZ.width;e=a.fZ.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=Bi(f.width,f.height);WM($rt_str(a.fZ.src));if(c.byteLength<(g*4
|0)){CM(a.x_,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.x_;c=new Tn;k=f.width;l=f.height;if(g==Bi(k,l)){c.xs=k;c.Du=l;c.Fj=1;c.t1=h;CM(b,c);return;}b=new Cb;Bl(b,B(563));M(b);}
function A7w(a,b){Zw(a,b);}
function QF(){var a=this;D.call(a);a.Eo=null;a.E6=null;}
function AJK(a,b){WM($rt_str(a.Eo.src));CM(a.E6,null);}
function A7I(a,b){AJK(a,b);}
function Iy(){M8.call(this);}
function Bk4(a,b,c){var d=new Iy();Uj(d,a,b,c);return d;}
function Uj(a,b,c,d){KR(a,b);a.bj=c;a.cy=d;}
function AGe(a){var b,c;if(a.bj<a.cy){b=a.bj;a.bj=b+1|0;return a.ys(b);}c=new Gt;O(c);M(c);}
function NS(a,b){var c,d;if(a.mZ()){c=new FV;O(c);M(c);}if(a.bj<a.cy){d=a.bj;a.bj=d+1|0;a.u8(d,b);return a;}c=new Hc;O(c);M(c);}
function Q6(a,b){var c,d;if(b>=0&&b<a.cy)return AOO(a,b);c=new BM;d=new T;V(d);Bl(c,U(J(Bf(J(Bf(J(d,B(273)),b),B(244)),a.cy),B(27))));M(c);}
function AQ6(a,b,c){var d,e;if(a.mZ()){d=new FV;O(d);M(d);}if(b>=0&&b<a.cy){ANM(a,b,c);return a;}e=new BM;d=new T;V(d);Bl(e,U(J(Bf(J(Bf(J(d,B(273)),b),B(244)),a.cy),B(27))));M(e);}
function AXZ(a){return a.mZ();}
function U0(){var a=this;Iy.call(a);a.Bv=0;a.xV=0;a.wQ=null;}
function AOO(a,b){return a.wQ.data[b+a.xV|0];}
function ANM(a,b,c){a.wQ.data[b+a.xV|0]=c;}
function ASV(a){return a.Bv;}
function Wa(){D.call(this);this.jp=null;}
function V8(){var a=this;D.call(a);a.iZ=null;a.xm=0;}
function Xm(){D.call(this);this.kw=null;}
function Jq(){B6.call(this);}
function Bk5(){var a=new Jq();AYk(a);return a;}
function AYk(a){O(a);}
function UO(){var a=this;CS.call(a);a.Ax=null;a.Aw=null;a.qv=null;a.Ew=null;}
function ADk(a){Dx(a.bG);S(a.bG,Di(0,(a.bm/2|0)-100|0,(a.bD/4|0)+72|0,B(564)));Dx(a.qv);DF(a.qv,AQG(a.bZ,a.Aw));}
function AOH(a,b){var c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cm)return;b=a.I;c=a.Ew;$p=1;case 1:ADY(b,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,$p);}
function AMF(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABm(a);if(C()){break _;}DG(a,a.bZ,a.Ax,a.bm/2|0,70,16777215);e=90;f=Jm(a.qv);while(KF(f)){g=KV(f);DG(a,a.bZ,g,a.bm/2|0,e,16777215);e=e+9|0;}$p=2;case 2:AFI(a,b,c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function FV(){Jq.call(this);}
function Bk6(){var a=new FV();A6R(a);return a;}
function A6R(a){O(a);}
function Hc(){B6.call(this);}
function Bk7(){var a=new Hc();A5Y(a);return a;}
function A5Y(a){O(a);}
function Gt(){B6.call(this);}
function Bk8(){var a=new Gt();A1K(a);return a;}
function A1K(a){O(a);}
function TD(){var a=this;D.call(a);a.yT=null;a.Dl=null;a.vJ=0;a.rL=0;}
function AAE(a){return Fn(a.yT);}
function Ob(a,b){return Cs(a.Dl)<b?0:1;}
function A5T(a,b){a.vJ=b;}
function A_U(a,b){a.rL=b;}
function ACr(){var a=this;D.call(a);a.yz=null;a.oB=0;}
function RD(){CS.call(this);}
function Bk9(){var a=new RD();A6T(a);return a;}
function A6T(a){DR(a);}
function Mp(){CS.call(this);}
function Bk$(){var a=new Mp();A98(a);return a;}
function A98(a){DR(a);}
function AOq(a){Dx(a.bG);S(a.bG,Di(1,(a.bm/2|0)-100|0,(a.bD/4|0)+72|0,B(565)));S(a.bG,Di(2,(a.bm/2|0)-100|0,(a.bD/4|0)+96|0,B(566)));if(a.I.k0===null)Z(a.bG,1).gC=0;}
function AMp(a,b,c){return;}
function AOA(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cm==1){c=a.I;$p=1;continue _;}if(b.cm!=2)return;b=a.I;c=null;$p=3;continue _;case 1:ASB(c);if(C()){break _;}c=a.I;d=null;$p=2;case 2:ADY(c,d);if(C()){break _;}if(b.cm!=2)return;b=a.I;c=null;$p=3;case 3:ABQ(b,c);if(C()){break _;}b=a.I;c=LQ();$p=4;case 4:ADY(b,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function APs(a,b,c,d){var e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:KO(a,0,0,a.bm,a.bD,1615855616,(-1602211792));B1();CB(2.0,2.0,2.0);DG(a,a.bZ,B(567),(a.bm/2|0)/2|0,30,16777215);BD();e=a.bZ;f=new T;V(f);DG(a,e,U(Bf(J(f,B(568)),a.I.f.k4)),a.bm/2|0,100,16777215);$p=1;case 1:AFI(a,b,c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function A6U(a){return 0;}
function C1(){var a=this;C5.call(a);a.e7=0;a.Bm=0.0;a.Bn=0.0;a.dq=0;a.cw=0;a.dr=0.0;a.m5=0.0;a.h0=0.0;a.id=0.0;a.ip=0.0;}
var BkS=0.0;var BkT=0.0;var BkU=0.0;function Bk_(a,b,c,d,e,f,g){var h=new C1();FD(h,a,b,c,d,e,f,g);return h;}
function FD(a,b,c,d,e,f,g,h){var i,j;FC(a,b);a.dq=0;a.cw=0;D2(a,0.20000000298023224,0.20000000298023224);a.c4=a.eO/2.0;CT(a,c,d,e);a.ip=1.0;a.id=1.0;a.h0=1.0;a.g=f+(BN()*2.0-1.0)*0.4000000059604645;a.i=g+(BN()*2.0-1.0)*0.4000000059604645;a.h=h+(BN()*2.0-1.0)*0.4000000059604645;i=(BN()+BN()+1.0)*0.15000000596046448;j=Cd(a.g*a.g+a.i*a.i+a.h*a.h);c=a.g;d=j;c=c/d;e=i;a.g=c*e*0.4000000059604645;a.i=a.i/d*e*0.4000000059604645+0.10000000149011612;a.h=a.h/d*e*0.4000000059604645;a.Bm=N(a.m)*3.0;a.Bn=N(a.m)*3.0;a.dr=
(N(a.m)*0.5+0.5)*2.0;a.cw=4.0/(N(a.m)*0.8999999761581421+0.10000000149011612)|0;a.dq=0;a.i9=0;}
function APw(a,b){var c,d;c=a.g;d=b;a.g=c*d;a.i=(a.i-0.10000000149011612)*d+0.10000000149011612;a.h=a.h*d;return a;}
function Yg(a,b){var c;c=0.20000000298023224*b;D2(a,c,c);a.dr=a.dr*b;return a;}
function ALs(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.i=a.i-0.04*a.m5;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARJ(a,c,d,e);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}a.i=a.i-0.04*a.m5;c=a.g;d=a.i;e=
a.h;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function ANx(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.e7%16|0)/16.0;j=i+0.062437500804662704;k=(a.e7/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.dr;n=a.bS;o=a.d-a.bS;p
=c;q=n+o*p-BkS;r=a.cS+(a.j-a.cS)*p-BkT;s=a.bR+(a.e-a.bR)*p-BkU;$p=1;case 1:$z=a.vi(c);if(C()){break _;}t=$z;Cp(b,a.h0*t,a.id*t,a.ip*t);u=d*m;t=q-u;v=g*m;n=t-v;c=e*m;o=r-c;d=f*m;e=s-d;f=h*m;w=e-f;p=i;x=l;G(b,n,o,w,p,x);n=t+v;w=r+c;y=e+f;z=k;G(b,n,w,y,p,z);c=q+u;n=c+v;d=s+d;p=d+f;y=j;G(b,n,w,p,y,z);G(b,c-v,o,d-f,y,x);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function A75(a){return 0;}
function AA6(){var a=this;CS.call(a);a.tx=0;a.of=0;}
function Bcu(){var a=new AA6();AWi(a);return a;}
function AWi(a){DR(a);a.tx=0;a.of=0;}
function ARh(a){a.tx=0;Dx(a.bG);S(a.bG,Di(1,(a.bm/2|0)-100|0,(a.bD/4|0)+48|0,B(569)));S(a.bG,Di(4,(a.bm/2|0)-100|0,(a.bD/4|0)+24|0,B(570)));S(a.bG,Di(0,(a.bm/2|0)-100|0,(a.bD/4|0)+96|0,B(496)));}
function ADq(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cm){c=a.I;d=AIS(a,a.I.o);$p=1;continue _;}if(b.cm==1){c=a.I;d=null;$p=2;continue _;}if(b.cm!=4)return;b=a.I;c=null;$p=4;continue _;case 1:ADY(c,d);if(C()){break _;}if(b.cm==1){c=a.I;d=null;$p=2;continue _;}if(b.cm!=4)return;b=a.I;c=null;$p=4;continue _;case 2:ABQ(c,d);if(C()){break _;}c=a.I;d=LQ();$p=3;case 3:ADY(c,d);if(C()){break _;}if(b.cm!=4)return;b=a.I;c=null;$p
=4;case 4:ADY(b,c);if(C()){break _;}b=a.I;$p=5;case 5:AFm(b);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function A2k(a){a.of=a.of+1|0;}
function ADP(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABm(a);if(C()){break _;}e=a.I.B;f=a.tx;a.tx=f+1|0;$p=2;case 2:$z=AAS(e,f);if(C()){break _;}f=$z;f=f?0:1;if(!(!f&&a.of>=20)){g=255.0*(Bq(((a.of%10|0)+d)/10.0*3.1415927410125732*2.0)*0.20000000298023224+0.800000011920929)|0;Cx(a.bZ,B(571),8,a.bD-16|0,g<<16|g<<8|g);}DG(a,a.bZ,B(572),a.bm/2|0,40,16777215);$p=3;case 3:AFI(a,b,c,d);if
(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function LB(){var a=this;D.call(a);a.bd=null;a.Z=null;a.Y=null;a.bb=null;}
function Bla(){var a=new LB();AHw(a);return a;}
function AHw(a){a.bd=$rt_createFloatMultiArray([16,16]);a.Z=$rt_createFloatArray(16);a.Y=$rt_createFloatArray(16);a.bb=$rt_createFloatArray(16);}
function ARS(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]
<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function WJ(){var a=this;LB.call(a);a.oU=null;a.n2=null;a.zx=null;}
var Blb=null;function BaV(){var a=new WJ();AFx(a);return a;}
function AFx(a){AHw(a);a.oU=H4(16);a.n2=H4(16);a.zx=H4(16);}
function RZ(){AJV(Blb);return Blb;}
function GX(a,b,c){var d,e;b=b.data;d=D_(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AJV(a){LW(a.oU);LW(a.n2);LW(a.zx);TW(2983,a.oU);TW(2982,a.n2);Qf(TS(a.oU),16);VR(a.oU,a.Z);Qf(TS(a.n2),16);VR(a.n2,a.Y);a.bb.data[0]=a.Y.data[0]*a.Z.data[0]+a.Y.data[1]*a.Z.data[4]+a.Y.data[2]*a.Z.data[8]+a.Y.data[3]*a.Z.data[12];a.bb.data[1]=a.Y.data[0]*a.Z.data[1]+a.Y.data[1]*a.Z.data[5]+a.Y.data[2]*a.Z.data[9]+a.Y.data[3]*a.Z.data[13];a.bb.data[2]=a.Y.data[0]*a.Z.data[2]+a.Y.data[1]*a.Z.data[6]+a.Y.data[2]*a.Z.data[10]+a.Y.data[3]*a.Z.data[14];a.bb.data[3]=a.Y.data[0]*a.Z.data[3]+a.Y.data[1]*a.Z.data[7]
+a.Y.data[2]*a.Z.data[11]+a.Y.data[3]*a.Z.data[15];a.bb.data[4]=a.Y.data[4]*a.Z.data[0]+a.Y.data[5]*a.Z.data[4]+a.Y.data[6]*a.Z.data[8]+a.Y.data[7]*a.Z.data[12];a.bb.data[5]=a.Y.data[4]*a.Z.data[1]+a.Y.data[5]*a.Z.data[5]+a.Y.data[6]*a.Z.data[9]+a.Y.data[7]*a.Z.data[13];a.bb.data[6]=a.Y.data[4]*a.Z.data[2]+a.Y.data[5]*a.Z.data[6]+a.Y.data[6]*a.Z.data[10]+a.Y.data[7]*a.Z.data[14];a.bb.data[7]=a.Y.data[4]*a.Z.data[3]+a.Y.data[5]*a.Z.data[7]+a.Y.data[6]*a.Z.data[11]+a.Y.data[7]*a.Z.data[15];a.bb.data[8]=a.Y.data[8]
*a.Z.data[0]+a.Y.data[9]*a.Z.data[4]+a.Y.data[10]*a.Z.data[8]+a.Y.data[11]*a.Z.data[12];a.bb.data[9]=a.Y.data[8]*a.Z.data[1]+a.Y.data[9]*a.Z.data[5]+a.Y.data[10]*a.Z.data[9]+a.Y.data[11]*a.Z.data[13];a.bb.data[10]=a.Y.data[8]*a.Z.data[2]+a.Y.data[9]*a.Z.data[6]+a.Y.data[10]*a.Z.data[10]+a.Y.data[11]*a.Z.data[14];a.bb.data[11]=a.Y.data[8]*a.Z.data[3]+a.Y.data[9]*a.Z.data[7]+a.Y.data[10]*a.Z.data[11]+a.Y.data[11]*a.Z.data[15];a.bb.data[12]=a.Y.data[12]*a.Z.data[0]+a.Y.data[13]*a.Z.data[4]+a.Y.data[14]*a.Z.data[8]
+a.Y.data[15]*a.Z.data[12];a.bb.data[13]=a.Y.data[12]*a.Z.data[1]+a.Y.data[13]*a.Z.data[5]+a.Y.data[14]*a.Z.data[9]+a.Y.data[15]*a.Z.data[13];a.bb.data[14]=a.Y.data[12]*a.Z.data[2]+a.Y.data[13]*a.Z.data[6]+a.Y.data[14]*a.Z.data[10]+a.Y.data[15]*a.Z.data[14];a.bb.data[15]=a.Y.data[12]*a.Z.data[3]+a.Y.data[13]*a.Z.data[7]+a.Y.data[14]*a.Z.data[11]+a.Y.data[15]*a.Z.data[15];a.bd.data[0].data[0]=a.bb.data[3]-a.bb.data[0];a.bd.data[0].data[1]=a.bb.data[7]-a.bb.data[4];a.bd.data[0].data[2]=a.bb.data[11]-a.bb.data[8];a.bd.data[0].data[3]
=a.bb.data[15]-a.bb.data[12];GX(a,a.bd,0);a.bd.data[1].data[0]=a.bb.data[3]+a.bb.data[0];a.bd.data[1].data[1]=a.bb.data[7]+a.bb.data[4];a.bd.data[1].data[2]=a.bb.data[11]+a.bb.data[8];a.bd.data[1].data[3]=a.bb.data[15]+a.bb.data[12];GX(a,a.bd,1);a.bd.data[2].data[0]=a.bb.data[3]+a.bb.data[1];a.bd.data[2].data[1]=a.bb.data[7]+a.bb.data[5];a.bd.data[2].data[2]=a.bb.data[11]+a.bb.data[9];a.bd.data[2].data[3]=a.bb.data[15]+a.bb.data[13];GX(a,a.bd,2);a.bd.data[3].data[0]=a.bb.data[3]-a.bb.data[1];a.bd.data[3].data[1]
=a.bb.data[7]-a.bb.data[5];a.bd.data[3].data[2]=a.bb.data[11]-a.bb.data[9];a.bd.data[3].data[3]=a.bb.data[15]-a.bb.data[13];GX(a,a.bd,3);a.bd.data[4].data[0]=a.bb.data[3]-a.bb.data[2];a.bd.data[4].data[1]=a.bb.data[7]-a.bb.data[6];a.bd.data[4].data[2]=a.bb.data[11]-a.bb.data[10];a.bd.data[4].data[3]=a.bb.data[15]-a.bb.data[14];GX(a,a.bd,4);a.bd.data[5].data[0]=a.bb.data[3]+a.bb.data[2];a.bd.data[5].data[1]=a.bb.data[7]+a.bb.data[6];a.bd.data[5].data[2]=a.bb.data[11]+a.bb.data[10];a.bd.data[5].data[3]=a.bb.data[15]
+a.bb.data[14];GX(a,a.bd,5);}
function AHa(){Blb=BaV();}
function Q$(){}
function AFW(){var a=this;D.call(a);a.C$=null;a.vA=0.0;a.v3=0.0;a.wh=0.0;}
function BbC(){var a=new AFW();A9c(a);return a;}
function A9c(a){a.C$=RZ();}
function AOo(a,b,c,d){a.vA=b;a.v3=c;a.wh=d;}
function AAn(a,b,c,d,e,f,g){var h,i;h=b-a.vA;i=c-a.v3;b=d-a.wh;d=e-a.vA;e=f-a.v3;c=g-a.wh;return ARS(a.C$,h,i,b,d,e,c);}
function ML(a,b){return AAn(a,b.R,b.M,b.S,b.V,b.U,b.W);}
function O9(){D.call(this);}
var Blc=null;function Bld(){var a=new O9();ALm(a);return a;}
function ALm(a){return;}
function DT(){Bd(2896);Bd(16384);Bd(16385);Bd(2903);}
function Hy(){var b;Ba(2896);Ba(16384);Ba(16385);Ba(2903);b=CC(BW(0.699999988079071,1.0,(-0.20000000298023224)));RO(b.x,b.z,b.w,0.0);Fr(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fr(0.0,0.0,0.0,1.0);Fr(0.0,0.0,0.0,1.0);b=CC(BW((-0.699999988079071),1.0,0.20000000298023224));RO(b.x,b.z,b.w,0.0);Fr(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fr(0.0,0.0,0.0,1.0);Fr(0.0,0.0,0.0,1.0);Fr(0.4000000059604645,0.4000000059604645,0.4000000059604645,1.0);}
function RO(b,c,d,e){return Fr(b,c,d,e);}
function Fr(b,c,d,e){EA(Blc);CJ(CJ(CJ(CJ(Blc,b),c),d),e);Gw(Blc);return Blc;}
function ASm(){Blc=H4(16);}
function Ij(){var a=this;D.call(a);a.z4=null;a.gn=null;a.ny=null;}
function Ble(a,b,c){var d=new Ij();K8(d,a,b,c);return d;}
function K8(a,b,c,d){a.z4=b;a.gn=c;a.ny=d;}
function A6y(a){return a.gn.gl()+a.ny.gl()|0;}
function A6l(a){return a.z4;}
function ATc(a,b){return b<a.gn.gl()?a.gn.gx(b):a.ny.gx(b-a.gn.gl()|0);}
function A3m(a,b,c){return b<a.gn.gl()?a.gn.j5(b,c):a.ny.j5(b-a.gn.gl()|0,c);}
function AWX(a,b,c){if(b<a.gn.gl())a.gn.jC(b,c);else a.ny.jC(b-a.gn.gl()|0,c);}
function A$c(a){return a.gn.f2();}
function YE(a){var b,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gn;$p=1;case 1:b.ki();if(C()){break _;}b=a.ny;$p=2;case 2:b.ki();if(C()){break _;}return;default:Fa();}}C3().s(a,b,$p);}
function ZM(){C1.call(this);}
function AY9(a,b,c,d,e,f,g,h){var i=new ZM();A1h(i,a,b,c,d,e,f,g,h);return i;}
function A1h(a,b,c,d,e,f,g,h,i){FD(a,b,c,d,e,f,g,h);a.e7=i.ba;a.m5=i.EB;a.ip=0.6000000238418579;a.id=0.6000000238418579;a.h0=0.6000000238418579;a.dr=a.dr/2.0;}
function ATK(a){return 1;}
function YR(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=((a.e7%16|0)+a.Bm/4.0)/16.0;j=i+0.015609375201165676;k=((a.e7/16|0)+a.Bn/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.dr;n
=a.bS;o=a.d-a.bS;p=c;q=n+o*p-BkS;r=a.cS+(a.j-a.cS)*p-BkT;s=a.bR+(a.e-a.bR)*p-BkU;$p=1;case 1:$z=ADL(a,c);if(C()){break _;}t=$z;Cp(b,t*a.h0,t*a.id,t*a.ip);t=d*m;u=q-t;g=g*m;v=u-g;w=e*m;o=r-w;c=f*m;d=s-c;e=h*m;n=d-e;x=i;p=l;G(b,v,o,n,x,p);n=u+g;v=r+w;y=d+e;z=k;G(b,n,v,y,x,z);d=q+t;n=d+g;c=s+c;x=c+e;y=j;G(b,n,v,x,y,z);G(b,d-g,o,c-e,y,p);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function KU(){B6.call(this);}
function Blf(){var a=new KU();A2s(a);return a;}
function A2s(a){O(a);}
function JR(){C1.call(this);}
function Blg(a,b,c,d){var e=new JR();TT(e,a,b,c,d);return e;}
function TT(a,b,c,d,e){FD(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.30000001192092896;a.i=BN()*0.20000000298023224+0.10000000149011612;a.h=a.h*0.30000001192092896;a.h0=1.0;a.id=1.0;a.ip=1.0;a.e7=16;D2(a,0.009999999776482582,0.009999999776482582);a.m5=0.05999999865889549;a.cw=8.0/(BN()*0.8+0.2)|0;}
function AKR(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANx(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AOC(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-a.m5;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARJ(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=a.cw;a.cw=e-1|0;if(e<=0){$p=2;continue _;}if(a.cx){if(BN()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.l;e
=K(a.d);g=K(a.j);h=K(a.e);$p=3;continue _;case 2:Ca(a);if(C()){break _;}if(a.cx){if(BN()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.l;e=K(a.d);g=K(a.j);h=K(a.e);$p=3;case 3:$z=AB6(f,e,g,h);if(C()){break _;}f=$z;if(!f.nC()&&!f.dv())return;i=K(a.j)+1|0;f=a.l;e=K(a.d);g=K(a.j);h=K(a.e);$p=4;case 4:$z=AEN(f,e,g,h);if(C()){break _;}e=$z;b=i-Jy(e);if(a.j>=b)return;$p=6;continue _;case 5:Ca(a);if(C()){break _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;f=a.l;e=K(a.d);g=
K(a.j);h=K(a.e);$p=3;continue _;case 6:Ca(a);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function IR(){var a=this;Iy.call(a);a.ep=null;a.Ah=0;a.ef=0;}
function Blh(a,b,c,d,e,f){var g=new IR();OQ(g,a,b,c,d,e,f);return g;}
function OQ(a,b,c,d,e,f,g){Uj(a,c,e,f);a.ef=b;a.ep=d;a.Ah=g;}
function AXS(a){return a.Ah;}
function Pi(){IR.call(this);}
function AWg(a,b){var c,d;c=a.ep.cq.data;d=a.ef;b=b*4|0;return c[d+b|0]&255|(a.ep.cq.data[(a.ef+b|0)+1|0]&255)<<8|(a.ep.cq.data[(a.ef+b|0)+2|0]&255)<<16|(a.ep.cq.data[(a.ef+b|0)+3|0]&255)<<24;}
function ASU(a,b,c){var d,e;d=a.ep.cq.data;e=a.ef;b=b*4|0;d[e+b|0]=c<<24>>24;a.ep.cq.data[(a.ef+b|0)+1|0]=c>>8<<24>>24;a.ep.cq.data[(a.ef+b|0)+2|0]=c>>16<<24>>24;a.ep.cq.data[(a.ef+b|0)+3|0]=c>>24<<24>>24;}
function VT(){IR.call(this);}
function A0V(a,b){var c,d;c=a.ep.cq.data;d=a.ef;b=b*4|0;return (c[d+b|0]&255)<<24|(a.ep.cq.data[(a.ef+b|0)+1|0]&255)<<16|(a.ep.cq.data[(a.ef+b|0)+2|0]&255)<<8|a.ep.cq.data[(a.ef+b|0)+3|0]&255;}
function ATN(a,b,c){var d,e;d=a.ep.cq.data;e=a.ef;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.ep.cq.data[(a.ef+b|0)+1|0]=c>>16<<24>>24;a.ep.cq.data[(a.ef+b|0)+2|0]=c>>8<<24>>24;a.ep.cq.data[(a.ef+b|0)+3|0]=c<<24>>24;}
function AKZ(){D.call(this);this.wa=null;}
function AYN(a){var b=new AKZ();A72(b,a);return b;}
function A72(a,b){a.wa=b;}
function ZR(a,b,c){return G6(b,a.wa)>=G6(c,a.wa)?1:(-1);}
function A1c(a,b,c){return ZR(a,b,c);}
function Wf(){D.call(this);this.ye=null;}
function APM(a,b,c){var d,e;d=b.fw;e=c.fw;return d&&!e?1:e&&!d?(-1):G6(b,a.ye)>=G6(c,a.ye)?(-1):1;}
function A9K(a,b,c){return APM(a,b,c);}
function Hs(){D.call(this);}
var Bli=null;var Blj=null;var Blk=null;var Bll=null;var Blm=null;function Bln(){var a=new Hs();AAq(a);return a;}
function AAq(a){return;}
function RG(b,c){var d,e,f;if(c===null)c=Bll;d=I(D,b.s);UL(b,d);P3(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;Rg(b,e,f[e]);e=e+1|0;}}
function AOh(){Bli=new Se;Blj=new Sd;Blk=new Sf;Bll=new WP;Blm=new WN;}
function HZ(){var a=this;D.call(a);a.mL=null;a.yh=null;a.Dm=null;a.Cy=null;a.HO=null;a.GA=0.0;a.FU=0.0;a.Fc=0.0;a.Fb=0.0;a.Fa=0.0;}
var Bkw=null;var BkP=0.0;var BkQ=0.0;var BkR=0.0;function Bb3(){var a=new HZ();ADc(a);return a;}
function ADc(a){var b;a.mL=Dd();BP(a.mL,F(Jk),Bcp());BP(a.mL,F(NC),BbD());b=Nk(Iu(a.mL));while(Gb(b)){Mh(b).rb=a;}}
function VB(a,b){var c;c=CP(a.mL,b);if(c===null&&b!==F(D$)){c=VB(a,JM(b));BP(a.mL,b,c);}return c;}
function AIm(a,b){return Wv(a,b)===null?0:1;}
function Wv(a,b){return VB(a,Dk(b));}
function ARm(a,b,c,d,e,f){var g,h,i;a.Cy=b;a.Dm=c;a.HO=e;a.yh=d;a.GA=e.P+(e.v-e.P)*f;a.FU=e.T+(e.J-e.T)*f;g=e.cs;h=e.d-e.cs;i=f;a.Fc=g+h*i;a.Fb=e.b7+(e.j-e.b7)*i;a.Fa=e.ct+(e.e-e.ct)*i;}
function Y4(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(AK7(b,a.Fc,a.Fb,a.Fa)>=4096.0)return;d=a.Cy;e=b.dK;f=b.dI;g=b.dR;$p=1;case 1:$z=ANm(d,e,f,g);if(C()){break _;}h=$z;F8(h,h,h);i=b.dK-BkP;j=b.dI-BkQ;k=b.dR-BkR;$p=2;case 2:AFr(a,b,i,j,k,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFr(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=Wv(a,b);if(g===null)return;$p=1;case 1:g.CV(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function A_V(a){return a.yh;}
function ALQ(){Bkw=Bb3();}
function H1(){var a=this;D.call(a);a.dU=null;a.FH=null;a.t0=null;a.n0=null;a.H1=null;a.rp=0.0;a.GP=0.0;a.FQ=null;a.D_=0.0;a.D$=0.0;a.D9=0.0;}
var Bgt=null;var BkM=0.0;var BkN=0.0;var BkO=0.0;function Bam(){var a=new H1();AGA(a);return a;}
function AGA(a){var b,c,d,e,f;a.dU=Dd();BP(a.dU,F(Kq),A_2());b=a.dU;c=new Ub;d=BcR();e=new P0;KZ(e,6,0.5);Gr(c,d,0.699999988079071);c.kh=e;BP(b,F(IE),c);d=a.dU;f=new TJ;c=Bco();e=BbZ();Gr(f,c,0.699999988079071);f.kh=e;BP(d,F(KJ),f);BP(a.dU,F(J1),Bcd());BP(a.dU,F(Jp),AYl(BcC(),0.5));d=a.dU;f=new DJ;c=new HT;KI(c);Gr(f,c,0.5);BP(d,F(I$),f);BP(a.dU,F(Jx),Bbo());d=a.dU;f=new Ug;c=new HT;KI(c);Gr(f,c,3.0);f.tw=6.0;BP(d,F(Lb),f);BP(a.dU,F(ER),AYl(A$2(),0.5));d=a.dU;f=new TQ;EI(f);BP(d,F(C5),f);BP(a.dU,F(II),BbX());d
=a.dU;f=new RC;EI(f);BP(d,F(Jv),f);BP(a.dU,F(E_),X8());BP(a.dU,F(Mu),Bas());BP(a.dU,F(JP),Bak());BP(a.dU,F(Gi),Bb_());d=Nk(Iu(a.dU));while(Gb(d)){Mh(d).iD=a;}}
function W9(a,b){var c;c=CP(a.dU,b);if(c===null&&b!==F(C5)){c=W9(a,JM(b));BP(a.dU,b,c);}return c;}
function Sh(a,b){return W9(a,Dk(b));}
function AHg(a,b,c,d,e,f,g){var h,i,j;a.n0=b;a.t0=c;a.FQ=f;a.H1=e;a.FH=d;a.rp=e.P+(e.v-e.P)*g;a.GP=e.T+(e.J-e.T)*g;h=e.cs;i=e.d-e.cs;j=g;a.D_=h+i*j;a.D$=e.b7+(e.j-e.b7)*j;a.D9=e.ct+(e.e-e.ct)*j;}
function ANd(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.cs;e=b.d-b.cs;f=c;e=d+e*f;d=b.b7+(b.j-b.b7)*f;g=b.ct+(b.e-b.ct)*f;h=b.P+(b.v-b.P)*c;$p=1;case 1:$z=b.vi(c);if(C()){break _;}i=$z;F8(i,i,i);e=e-BkM;d=d-BkN;f=g-BkO;$p=2;case 2:AQI(a,b,e,d,f,h,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AQI(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Sh(a,b);if(h===null)return;$p=1;case 1:h.iQ(b,c,d,e,f,g);if(C()){break _;}$p=2;case 2:ANo(h,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A77(a,b){a.n0=b;}
function AJY(a,b,c,d){var e,f,g;e=b-a.D_;f=c-a.D$;g=d-a.D9;return e*e+f*f+g*g;}
function AKz(){Bgt=Bam();}
function Ni(){D.call(this);}
var Blo=null;var Blp=null;function Blq(){var a=new Ni();AR6(a);return a;}
function AR6(a){return;}
function Vq(b){var c;c=0;while(true){if(c>=Blo.data.length)return (-1);if(b==Blo.data[c])break;c=c+1|0;}return c;}
function APf(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;Blo=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;Blp=b;}
function J4(){B6.call(this);}
function Blr(){var a=new J4();A7R(a);return a;}
function A7R(a){O(a);}
function V1(){var a=this;D.call(a);a.eE=0;a.e0=0;a.eF=0;}
function CO(a,b,c){var d=new V1();AWL(d,a,b,c);return d;}
function AWL(a,b,c,d){a.eE=b;a.e0=c;a.eF=d;}
function A6t(a,b){var c;if(!(b instanceof V1))return 0;c=b;return c.eE==a.eE&&c.e0==a.e0&&c.eF==a.eF?1:0;}
function A1w(a){return (Bi(a.eE,8976890)+Bi(a.e0,981131)|0)+a.eF|0;}
function Oy(){Fc.call(this);}
var Bls=0.0;var Blt=null;function AEp(){Bls=NaN;Blt=F($rt_floatcls());}
function Hm(){D.call(this);}
var Bds=null;var Bdu=null;var Bdv=null;var Bdt=null;var Bdr=null;function Blu(){var a=new Hm();AQN(a);return a;}
function AQN(a){return;}
function AMP(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;Bds=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);Bdu=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);Bdv=b;Bdt=new Wd;Bdr=new Sc;}
function Nj(){D.call(this);}
var Blv=null;var Blw=null;function Blx(){var a=new Nj();AKq(a);return a;}
function AKq(a){return;}
function AOi(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.zi=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.uy=0;c.uf=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AOw(Blw,f);if(h<0)h= -h-2|0;i=9+(f-Blw.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(Blv.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-Blw.data[h]|0)|0;k=Long_shru(Long_mul(j,Long_fromInt(Blv.data[h])),
32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?Blv.data[h]>>>g:Blv.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=R(o,p);e=e>0?Bi(k/o|0,o):e<0?Bi(k/p|0,p)+p|0:Bi((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.uy=e;c.uf=h-50|0;}
function ALg(){var b,c,d,e,f,g,h,i;Blv=$rt_createIntArray(100);Blw=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=Blv.data;g=d+50|0;f[g]=$rt_udiv(e,20);Blw.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=Blv.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);Blw.data[i]=c;d=d+1|0;}}
function Sc(){var a=this;D.call(a);a.uy=0;a.uf=0;a.zi=0;}
function Bly(){var a=new Sc();ASS(a);return a;}
function ASS(a){return;}
function DJ(){var a=this;Df.call(a);a.mE=null;a.kh=null;}
function AYl(a,b){var c=new DJ();Gr(c,a,b);return c;}
function Gr(a,b,c){EI(a);a.mE=b;a.l_=c;}
function A$z(a,b){a.kh=b;}
function AAg(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();Bd(2884);try{h=b.e9+(b.dG-b.e9)*g;i=b.P+(b.v-b.P)*g;j=b.T+(b.J-b.T)*g;Bw(c,d,e);k=b.oQ+g;Bv(180.0-h,0.0,1.0,0.0);if(b.c2>0){f=D_((b.c2
+g-1.0)/20.0*1.600000023841858);if(f>1.0)f=1.0;Bv(f*a.CH(b),0.0,0.0,1.0);}l=0.0625;Ba(32826);CB((-1.0),(-1.0),1.0);a.xg(b,g);Bw(0.0,(-1.5078125),0.0);m=b.jT+(b.ch-b.jT)*g;n=b.gm-b.ch*(1.0-g);if(m>1.0)m=1.0;o=b.tK;p=PR(b);$p=1;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){o=$$je;}else{throw $$e;}}CF(o);Ba(2884);BD();return;case 1:try{APu(a,o,p);if(C()){break _;}Ba(3008);o=a.mE;f=i-h;o.hK(n,m,k,f,j,l);q=0;if(q>=4){$p=2;continue _;}$p=3;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){o=
$$je;}else{throw $$e;}}CF(o);Ba(2884);BD();return;case 2:a:{try{$z=ADL(b,g);if(C()){break _;}r=$z;s=a.CK(b,r,g);q=s>>24&255;if(!(q<=0&&b.dE<=0&&b.c2<=0)){Bd(3553);Bd(3008);Ba(3042);De(770,771);HL(514);if(!(b.dE<=0&&b.c2<=0)){BS(r,0.0,0.0,0.4000000059604645);a.mE.hK(n,m,k,f,j,l);t=0;if(t<4){$p=4;continue _;}}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BS(u,v,w,x);a.mE.hK(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HL(515);Bd(3042);Ba(3008);Ba(3553);}Bd(32826);break a;}catch($$e){$$je
=Bj($$e);if($$je instanceof BO){o=$$je;}else{throw $$e;}}CF(o);}Ba(2884);BD();return;case 3:try{$z=a.k7(b,q);if(C()){break _;}s=$z;if(s){a.kh.hK(n,m,k,f,j,l);Bd(3042);Ba(3008);}q=q+1|0;if(q>=4){$p=2;continue _;}continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){o=$$je;}else{throw $$e;}}CF(o);Ba(2884);BD();return;case 4:a:{try{$z=a.k7(b,t);if(C()){break _;}y=$z;if(y){BS(r,0.0,0.0,0.4000000059604645);a.kh.hK(n,m,k,f,j,l);}t=t+1|0;if(t<4){continue _;}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&
255)/255.0;x=q/255.0;BS(u,v,w,x);a.mE.hK(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HL(515);Bd(3042);Ba(3008);Ba(3553);Bd(32826);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){o=$$je;}else{throw $$e;}}CF(o);}Ba(2884);BD();return;case 5:a:{try{$z=a.k7(b,y);if(C()){break _;}s=$z;if(s){BS(u,v,w,x);a.kh.hK(n,m,k,f,j,l);}y=y+1|0;if(y>=4){HL(515);Bd(3042);Ba(3008);Ba(3553);Bd(32826);break a;}continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){o=$$je;}else{throw $$e;}}CF(o);}Ba(2884);BD();return;default:
Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function APX(a,b,c){return 0;}
function A5n(a,b){return 90.0;}
function A6C(a,b,c,d){return 0;}
function A9f(a,b,c){return;}
function AO2(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.H8(b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function OR(){var a=this;DJ.call(a);a.AZ=null;a.z$=null;a.Cu=null;}
var Blz=null;function Bbo(){var a=new OR();AIe(a);return a;}
function AIe(a){Gr(a,Xz(0.0),0.5);a.AZ=a.mE;a.z$=Xz(1.0);a.Cu=Xz(0.5);}
function ARC(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=AIn(b.K,3-c|0);if(d!==null){e=DL(d);if(e instanceof F5){f=e;b=new T;V(b);b=J(J(J(b,B(573)),Blz.data[f.BF]),B(574));g=R(c,2);b=U(J(Bf(b,g?1:2),B(515)));$p=1;continue _;}}return 0;case 1:AKw(a,b);if(C()){break _;}h=g?a.z$:a.Cu;h.iY.iS=c?0:1;h.k_.iS=c?0:1;b=h.pg;i=R(c,1);b.iS=i&&g?0:1;h.d0.iS=i?0:1;h.dO.iS=i?0:1;h.i$.iS
=g&&c!=3?0:1;h.hg.iS=g&&c!=3?0:1;a.kh=h;return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ADQ(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-b.c4;$p=1;case 1:AAg(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALD(a){B_(a.AZ.d0,0.0625);}
function Zd(a,b,c){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ARC(a,b,c);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,$p);}
function AL8(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADQ(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACP(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADQ(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAk(){var b,c;b=I(B2,5);c=b.data;c[0]=B(239);c[1]=B(575);c[2]=B(576);c[3]=B(577);c[4]=B(578);Blz=b;}
function LC(){var a=this;Gh.call(a);a.hC=0;a.i5=0;a.hT=0;a.h7=0;a.km=null;a.cm=0;a.gC=0;a.yS=0;}
function Di(a,b,c,d){var e=new LC();A3n(e,a,b,c,d);return e;}
function BlA(a,b,c,d,e,f){var g=new LC();SL(g,a,b,c,d,e,f);return g;}
function A3n(a,b,c,d,e){SL(a,b,c,d,200,20,e);}
function SL(a,b,c,d,e,f,g){Nh(a);a.hC=200;a.i5=20;a.gC=1;a.yS=1;a.cm=b;a.hT=c;a.h7=d;a.hC=e;a.i5=f;a.km=g;}
function ACX(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.yS)return;e=b.e$;f=3553;g=b.bo;b=B(506);$p=1;case 1:$z=AHy(g,b);if(C()){break _;}h=$z;Cn(f,h);BS(1.0,1.0,1.0,1.0);h=1;f=c>=a.hT&&d>=a.h7&&c<(a.hT+a.hC|0)&&d<(a.h7+a.i5|0)?1:0;if(!a.gC)h=0;else if(f)h=2;i=a.hT;j=a.h7;h=46+(h*20|0)|0;CH(a,i,j,0,h,a.hC/2|0,a.i5);CH(a,a.hT+(a.hC/2|0)|0,a.h7,200-(a.hC/2|0)|
0,h,a.hC/2|0,a.i5);if(!a.gC)DG(a,e,a.km,a.hT+(a.hC/2|0)|0,a.h7+((a.i5-8|0)/2|0)|0,(-6250336));else if(!f)DG(a,e,a.km,a.hT+(a.hC/2|0)|0,a.h7+((a.i5-8|0)/2|0)|0,14737632);else DG(a,e,a.km,a.hT+(a.hC/2|0)|0,a.h7+((a.i5-8|0)/2|0)|0,16777120);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function R9(a,b,c){return a.gC&&b>=a.hT&&c>=a.h7&&b<(a.hT+a.hC|0)&&c<(a.h7+a.i5|0)?1:0;}
function Mb(){D.call(this);}
function BlB(){var a=new Mb();AVZ(a);return a;}
function AVZ(a){return;}
function Qx(){}
function Ku(){var a=this;Mb.call(a);a.zS=null;a.H3=null;a.ve=0;a.Dp=0;a.nd=null;a.vL=null;}
function AEe(a){var b,c,d;a:{b=a.ve;c=a.Dp;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6;return d|c&8|b<<2&16|c&32|b>>>8&64|b>>>5&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function ABq(a){return a.nd.oX();}
function WL(a,b){var c,d,e,f,g;if(a.ve&1){c=new L2;O(c);M(c);}if(a.vL===null){c=new Tg;O(c);M(c);}d=b.data;e=d.length;if(e!=a.nd.data.length){c=new Cb;O(c);M(c);}f=0;while(true){if(f>=e){c=b.data;g=new a.zS.fW();a.vL.call(g,c);return g;}if(!F1(a.nd.data[f])&&d[f]!==null&&!UE(a.nd.data[f],d[f])){c=new Cb;O(c);M(c);}if(F1(a.nd.data[f])&&d[f]===null)break;f=f+1|0;}c=new Cb;O(c);M(c);}
function Ox(){}
function QE(){D.call(this);}
function BlC(){var a=new QE();A_m(a);return a;}
function A_m(a){return;}
function AJz(a){var b,c,d;Bb();BdJ.requestPointerLock();b=B$();if(VV())clearTimeout(VV());M0(0);if(Long_lt(Long_sub(b,P2()),Long_fromInt(3000))){c=new Tz;c.Jn=a;d=3000-Long_sub(b,P2()).lo|0;M0(setTimeout(Ct(c,"onTimer"),d));}}
function A1H(a){AJz(a);}
function WP(){D.call(this);}
function BlD(){var a=new WP();AVr(a);return a;}
function AVr(a){return;}
function A4V(a,b,c){return b!==null?b.lP(c): -c.lP(b);}
function WN(){D.call(this);}
function BlE(){var a=new WN();A5P(a);return a;}
function A5P(a){return;}
function Se(){Fd.call(this);}
function BlF(){var a=new Se();A$a(a);return a;}
function A$a(a){return;}
function Sd(){FY.call(this);}
function BlG(){var a=new Sd();A$f(a);return a;}
function A$f(a){return;}
function Sf(){Gg.call(this);}
function BlH(){var a=new Sf();A3M(a);return a;}
function A3M(a){return;}
function ID(){D.call(this);this.rb=null;}
function AKD(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.rb.Dm;$p=1;case 1:$z=AHy(c,b);if(C()){break _;}d=$z;Eb(c,d);return;default:Fa();}}C3().s(a,b,c,d,$p);}
function A0U(a,b){a.rb=b;}
function ANF(a){return a.rb.yh;}
function AA9(){ID.call(this);this.EI=null;}
function Bcp(){var a=new AA9();ATB(a);return a;}
function ATB(a){a.EI=BbV();}
function ARt(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();Bw(c+0.5,d+0.75,e+0.5);$p=1;case 1:$z=AMk(b);if(C()){break _;}g=$z;Bv( -((g*360|0)/16.0),0.0,1.0,0.0);h=B(579);$p=2;case 2:AKD(a,h);if(C()){break _;}B1();CB(1.0,(-1.0),(-1.0));ANe(a.EI);BD();Bw(0.0,0.5,0.09000000357627869);CB(0.01666666753590107,(-0.01666666753590107),0.01666666753590107);Ch(0.0,
0.0,(-0.01666666753590107));h=ANF(a);i=0;while(i<b.gr.data.length){j=b.gr.data[i];if(i!=b.rB)ED(h,j, -Dv(h,j)/2|0,(i*10|0)-(b.gr.data.length*5|0)|0,0);else{k=new T;V(k);j=U(J(J(J(k,B(580)),j),B(581)));ED(h,j, -Dv(h,j)/2|0,(i*10|0)-(b.gr.data.length*5|0)|0,0);}i=i+1|0;}BS(1.0,1.0,1.0,1.0);BD();return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function XJ(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ARt(a,b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function NC(){var a=this;D$.call(a);a.jY=0;a.jM=null;a.lK=0.0;a.ms=0.0;}
function Bcx(){var a=new NC();A8g(a);return a;}
function A8g(a){a.jY=(-1);a.jM=B(582);a.ms=0.0;a.jY=20;}
function ZN(a){return AGQ(a.ci.bh,a.dK,a.dI,a.dR)>256.0?0:1;}
function AC7(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.ms=a.lK;if(ZN(a)){b=a.dK+N(a.ci.q);c=a.dI+N(a.ci.q);d=a.dR+N(a.ci.q);BU(a.ci,B(256),b,c,d,0.0,0.0,0.0);BU(a.ci,B(257),b,c,d,0.0,0.0,0.0);a.lK=a.lK+1000.0/(a.jY+200.0);while(a.lK>360.0){a.lK=a.lK-360.0;a.ms=a.ms-360.0;}if(a.jY==(-1))N1(a);if(a.jY>0)a.jY
=a.jY-1|0;else{e=4;f=0;if(f<e){g=Jo(a.jM,a.ci);if(g===null)return;h=a.ci;i=Dk(g);j=Du(D4(a.dK,a.dI,a.dR,a.dK+1|0,a.dI+1|0,a.dR+1|0),8.0,4.0,8.0);$p=1;continue _;}}}return;case 1:$z=ANj(h,i,j);if(C()){break _;}h=$z;if(h.s>=6){N1(a);return;}k=a.dK+(Cj(a.ci.q)-Cj(a.ci.q))*4.0;l=(a.dI+E(a.ci.q,3)|0)-1|0;m=a.dR+(Cj(a.ci.q)-Cj(a.ci.q))*4.0;Kw(g,k,l,m,N(a.ci.q)*360.0,0.0);$p=2;case 2:$z=g.uS(k,l,m);if(C()){break _;}n=$z;if(n){h=a.ci;$p=3;continue _;}f=f+1|0;if(f>=e)return;g=Jo(a.jM,a.ci);if(g===null)return;h=a.ci;i
=Dk(g);j=Du(D4(a.dK,a.dI,a.dR,a.dK+1|0,a.dI+1|0,a.dR+1|0),8.0,4.0,8.0);$p=1;continue _;case 3:AOl(h,g);if(C()){break _;}o=0;while(o<20){c=a.dK+0.5+(N(a.ci.q)-0.5)*2.0;d=a.dI+0.5+(N(a.ci.q)-0.5)*2.0;k=a.dR+0.5+(N(a.ci.q)-0.5)*2.0;BU(a.ci,B(256),c,d,k,0.0,0.0,0.0);BU(a.ci,B(257),c,d,k,0.0,0.0,0.0);o=o+1|0;}AEV(g);N1(a);f=f+1|0;if(f>=e)return;g=Jo(a.jM,a.ci);if(g===null)return;h=a.ci;i=Dk(g);j=Du(D4(a.dK,a.dI,a.dR,a.dK+1|0,a.dI+1|0,a.dR+1|0),8.0,4.0,8.0);$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,$p);}
function N1(a){a.jY=200+E(a.ci.q,600)|0;}
function AR4(){ID.call(this);this.wJ=null;}
function BbD(){var a=new AR4();AXr(a);return a;}
function AXr(a){a.wJ=Dd();}
function Z6(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();Bw(c+0.5,d,e+0.5);g=CP(a.wJ,b.jM);if(g===null){g=Jo(b.jM,null);BP(a.wJ,b.jM,g);}if(g===null){BD();return;}g.l=b.ci;Bw(0.0,0.4000000059604645,0.0);Bv((b.ms+(b.lK-b.ms)*f)*10.0,0.0,1.0,0.0);Bv((-30.0),1.0,0.0,0.0);Bw(0.0,(-0.4000000059604645),0.0);CB(0.4375,0.4375,0.4375);b=Bgt;c=0.0;d=0.0;e=0.0;h=0.0;$p=1;case 1:AQI(b,g,c,d,e,
h,f);if(C()){break _;}BD();return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ARi(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:Z6(a,b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AQm(){DJ.call(this);}
function A_2(){var a=new AQm();A4v(a);return a;}
function A4v(a){Gr(a,A5r(),1.0);a.kh=A5r();}
function A6s(a,b){return 180.0;}
function X5(a,b,c){var d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c)return 0;if(c)return 0;d=B(583);$p=1;case 1:AKw(a,d);if(C()){break _;}e=1.0;f=1.0;$p=2;case 2:$z=ADL(b,f);if(C()){break _;}f=$z;f=(e-f)*0.5;Ba(3042);Bd(3008);De(770,771);BS(1.0,1.0,1.0,f);return 1;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function A6o(a,b){return 180.0;}
function Yi(a,b,c){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=X5(a,b,c);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,$p);}
function Ub(){DJ.call(this);}
function AGh(a,b,c){var d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(584);$p=1;case 1:AKw(a,d);if(C()){break _;}return !c&&b.qy?1:0;default:Fa();}}C3().s(a,b,c,d,$p);}
function AMg(a,b,c){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AGh(a,b,c);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,$p);}
function F3(){var a=this;Eh.call(a);a.hf=null;a.hD=null;a.jI=null;a.jH=null;a.jG=null;a.jJ=null;}
function BlI(a,b){var c=new F3();KZ(c,a,b);return c;}
function KZ(a,b,c){var d,e;a.hf=BJ(0,0);BF(a.hf,(-4.0),(-4.0),(-8.0),8,8,8,c);BI(a.hf,0.0,18-b|0,(-6.0));a.hD=BJ(28,8);BF(a.hD,(-5.0),(-10.0),(-7.0),10,16,8,c);BI(a.hD,0.0,17-b|0,2.0);a.jI=BJ(0,16);BF(a.jI,(-2.0),0.0,(-2.0),4,b,4,c);d=a.jI;e=24-b|0;BI(d,(-3.0),e,7.0);a.jH=BJ(0,16);BF(a.jH,(-2.0),0.0,(-2.0),4,b,4,c);BI(a.jH,3.0,e,7.0);a.jG=BJ(0,16);BF(a.jG,(-2.0),0.0,(-2.0),4,b,4,c);BI(a.jG,(-3.0),e,(-5.0));a.jJ=BJ(0,16);BF(a.jJ,(-2.0),0.0,(-2.0),4,b,4,c);BI(a.jJ,3.0,e,(-5.0));}
function A94(a,b,c,d,e,f,g){AJX(a,b,c,d,e,f,g);B_(a.hf,g);B_(a.hD,g);B_(a.jI,g);B_(a.jH,g);B_(a.jG,g);B_(a.jJ,g);}
function AJX(a,b,c,d,e,f,g){var h;a.hf.bX=e/57.2957763671875;a.hD.b1=1.5707963705062866;h=a.jI;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.jH;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.jG.b1=BC(d)*1.399999976158142*c;a.jJ.b1=BC(b)*1.399999976158142*c;}
function P0(){F3.call(this);}
function BcR(){var a=new P0();AYi(a);return a;}
function AYi(a){KZ(a,6,0.0);}
function TJ(){DJ.call(this);}
function AM8(a,b,c){var d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(585);$p=1;case 1:AKw(a,d);if(C()){break _;}return !c&&!b.x5?1:0;default:Fa();}}C3().s(a,b,c,d,$p);}
function ARw(a,b,c){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AM8(a,b,c);if(C()){break _;}c=$z;return c;default:Fa();}}C3().s(a,b,c,$p);}
function ACL(){F3.call(this);}
function Bco(){var a=new ACL();A9$(a);return a;}
function A9$(a){KZ(a,12,0.0);a.hf=BJ(0,0);BF(a.hf,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BI(a.hf,0.0,6.0,(-8.0));a.hD=BJ(28,8);BF(a.hD,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BI(a.hD,0.0,5.0,2.0);}
function ARl(){F3.call(this);}
function BbZ(){var a=new ARl();AVe(a);return a;}
function AVe(a){KZ(a,12,0.0);a.hf=BJ(0,0);BF(a.hf,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BI(a.hf,0.0,6.0,(-8.0));a.hD=BJ(28,8);BF(a.hD,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BI(a.hD,0.0,5.0,2.0);a.jI=BJ(0,16);BF(a.jI,(-2.0),0.0,(-2.0),4,6,4,0.5);BI(a.jI,(-3.0),12.0,7.0);a.jH=BJ(0,16);BF(a.jH,(-2.0),0.0,(-2.0),4,6,4,0.5);BI(a.jH,3.0,12.0,7.0);a.jG=BJ(0,16);BF(a.jG,(-2.0),0.0,(-2.0),4,6,4,0.5);BI(a.jG,(-3.0),12.0,(-5.0));a.jJ=BJ(0,16);BF(a.jJ,(-2.0),0.0,(-2.0),4,6,4,0.5);BI(a.jJ,3.0,12.0,(-5.0));}
function ACc(){DJ.call(this);}
function Bcd(){var a=new ACc();AZQ(a);return a;}
function AZQ(a){Gr(a,BaZ(),0.5);}
function ADG(a,b,c){var d,e,f;d=Qr(b,c);e=1.0+Bq(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;c=d*d;c=c*c;f=(1.0+c*0.4000000059604645)*e;CB(f,(1.0+c*0.10000000149011612)/e,f);}
function Yh(a,b,c,d){var e,f;e=Qr(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function A71(a,b,c){ADG(a,b,c);}
function AZ2(a,b,c,d){return Yh(a,b,c,d);}
function HT(){MC.call(this);}
function BlJ(){var a=new HT();A8h(a);return a;}
function A8h(a){KI(a);}
function A2O(a,b,c,d,e,f,g){var h,i,j;AIX(a,b,c,d,e,f,g);h=Bq(a.xW*3.1415927410125732);i=Bq((1.0-(1.0-a.xW)*(1.0-a.xW))*3.1415927410125732);a.d0.bU=0.0;a.dO.bU=0.0;j=a.d0;b=0.10000000149011612-h*0.6000000238418579;j.bX= -b;a.dO.bX=b;a.d0.b1=(-1.5707963705062866);a.dO.b1=(-1.5707963705062866);j=a.d0;b=j.b1;c=h*1.2000000476837158-i*0.4000000059604645;j.b1=b-c;j=a.dO;j.b1=j.b1-c;j=a.d0;b=j.bU;c=d*0.09000000357627869;j.bU=b+BC(c)*0.05000000074505806+0.05000000074505806;j=a.dO;j.bU=j.bU-(BC(c)*0.05000000074505806
+0.05000000074505806);j=a.d0;b=j.b1;c=d*0.06700000166893005;j.b1=b+Bq(c)*0.05000000074505806;j=a.dO;j.b1=j.b1-Bq(c)*0.05000000074505806;}
function AIs(){HT.call(this);}
function BcC(){var a=new AIs();AWu(a);return a;}
function AWu(a){KI(a);a.d0=BJ(40,16);BF(a.d0,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BI(a.d0,(-5.0),2.0,0.0);a.dO=BJ(40,16);a.dO.lB=1;BF(a.dO,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BI(a.dO,5.0,2.0,0.0);a.i$=BJ(0,16);BF(a.i$,(-1.0),0.0,(-1.0),2,12,2,0.0);BI(a.i$,(-2.0),12.0,0.0);a.hg=BJ(0,16);a.hg.lB=1;BF(a.hg,(-1.0),0.0,(-1.0),2,12,2,0.0);BI(a.hg,2.0,12.0,0.0);}
function Lb(){DQ.call(this);}
function APb(a,b,c,d){var e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;$p=1;case 1:$z=ANm(e,b,c,d);if(C()){break _;}f=$z;return f-0.5;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function Ug(){DJ.call(this);this.tw=0.0;}
function ZA(a,b,c){CB(a.tw,a.tw,a.tw);}
function A$5(a,b,c){ZA(a,b,c);}
function TQ(){Df.call(this);}
function BlK(){var a=new TQ();AZA(a);return a;}
function AZA(a){EI(a);}
function AJx(a,b,c,d,e,f,g){B1();A8u(b.L,c-b.cs,d-b.b7,e-b.ct);BD();}
function II(){var a=this;C5.call(a);a.rv=0;a.dJ=0;a.no=0;a.EE=0;a.nw=0;a.dT=null;}
function JS(a,b){var c,d,e,f,g,h,i,j,k,l;a.dJ=b;c=b*90|0;a.v=c;a.P=c;c=a.dT.gd;d=a.dT.m4;e=a.dT.gd;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;d=d/32.0;f=e/32.0;g=a.no+0.5;h=a.EE+0.5;i=a.nw+0.5;if(!b)i=i-0.5625;j=R(b,1);if(!j)g=g-0.5625;k=R(b,2);if(!k)i=i+0.5625;l=R(b,3);if(!l)g=g+0.5625;if(!b)g=g-HP(a,a.dT.gd);if(!j)i=i+HP(a,a.dT.gd);if(!k)g=g+HP(a,a.dT.gd);if(!l)i=i-HP(a,a.dT.gd);e=h+HP(a,a.dT.m4);CT(a,g,e,i);M9(a.L,g-c+0.0062500000931322575,e-d+0.0062500000931322575,i-f+0.0062500000931322575,g+c+(-0.0062500000931322575),
e+d+(-0.0062500000931322575),i+f+(-0.0062500000931322575));}
function HP(a,b){return b==32?0.5:b!=64?0.0:0.5;}
function ADo(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.rv;a.rv=b+1|0;if(b!=100)return;$p=1;case 1:$z=ZP(a);if(C()){break _;}c=$z;if(c)return;a.rv=0;$p=2;case 2:Ca(a);if(C()){break _;}d=a.l;e=new E_;f=a.l;g=a.d;h=a.j;i=a.e;j=new Cc;BB();DD(j,BiG);He(e,f,g,h,i,j);$p=3;case 3:AOl(d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ZP(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=a.L;$p=1;case 1:$z=X0(b,a,c);if(C()){break _;}b=$z;if(b.s>0)return 0;d=a.dT.gd/16|0;e=a.dT.m4/16|0;f=a.no;g=a.nw;if(!a.dJ)f=K(a.d-a.dT.gd/32.0);if(a.dJ==1)g=K(a.e-a.dT.gd/32.0);if(a.dJ==2)f=K(a.d-a.dT.gd/32.0);if(a.dJ==3)g=K(a.e-a.dT.gd/32.0);h=K(a.j-a.dT.m4/32.0);i=0;while
(i<d){j=0;if(j<e){if(a.dJ&&a.dJ!=2){b=a.l;k=a.no;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.nw;$p=3;continue _;}i=i+1|0;}b=a.l;c=a.L;$p=2;case 2:$z=ADO(b,a,c);if(C()){break _;}c=$z;k=0;while(k<c.s){if(Z(c,k) instanceof II)return 0;k=k+1|0;}return 1;case 3:$z=AB6(b,k,l,m);if(C()){break _;}b=$z;if(!b.dv())return 0;j=j+1|0;while(true){if(j<e){if(a.dJ&&a.dJ!=2){b=a.l;k=a.no;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.nw;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.l;c=a.L;$p=2;continue _;case 4:$z
=AB6(b,k,l,m);if(C()){break _;}b=$z;if(!b.dv())return 0;j=j+1|0;while(true){if(j<e){if(a.dJ&&a.dJ!=2){b=a.l;k=a.no;l=h+j|0;m=g+i|0;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.nw;$p=3;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.l;c=a.L;$p=2;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AXU(a){return 1;}
function AEu(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Ca(a);if(C()){break _;}d=a.l;b=new E_;e=a.l;f=a.d;g=a.j;h=a.e;i=new Cc;BB();DD(i,BiG);He(b,e,f,g,h,i);$p=2;case 2:AOl(d,b);if(C()){break _;}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAy(){Df.call(this);this.Id=null;}
function BbX(){var a=new AAy();AZG(a);return a;}
function AZG(a){EI(a);a.Id=new DA;}
function AQe(a,b,c,d,e,f,g){var h,i,j,k,l,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();Bw(c,d,e);Bv(f,0.0,1.0,0.0);Ba(32826);h=B(586);$p=1;case 1:AKw(a,h);if(C()){break _;}h=b.dT;CB(0.0625,0.0625,0.0625);i=h.gd;j=h.m4;k=h.zI;l=h.zH;$p=2;case 2:ACY(a,b,i,j,k,l);if(C()){break _;}Bd(32826);BD();return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ACY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g= -c/2.0;h= -d/
2.0;i=0;j=c/16|0;k=d/16|0;l=e+c|0;m=f+d|0;while(i<j){if(0<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=0+1|0;f=q*16|0;r=h+f;s=0*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dJ)w=K(b.d+u/16.0);if(b.dJ==1)y=K(b.e-u/16.0);if(b.dJ==2)w=K(b.d-u/16.0);if(b.dJ==3)y=K(b.e+u/16.0);z=a.iD.n0;$p=1;continue _;}i=i+1|0;}return;case 1:$z=ANm(z,w,x,y);if(C()){break _;}ba=$z;F8(ba,ba,ba);ba=(l-o|0)/256.0;u=(l-c|0)/256.0;v=(m-s|0)/256.0;bb=(m-f|0)/256.0;BA();z=BeP;Bz(z);Ch(0.0,0.0,(-1.0));bc=n;bd=t;be
=u;bf=v;G(z,bc,bd,(-0.5),be,bf);bg=p;bh=ba;G(z,bg,bd,(-0.5),bh,bf);bf=r;bi=bb;G(z,bg,bf,(-0.5),bh,bi);G(z,bc,bf,(-0.5),be,bi);Ch(0.0,0.0,1.0);G(z,bc,bf,0.5,0.75,0.0);G(z,bg,bf,0.5,0.8125,0.0);G(z,bg,bd,0.5,0.8125,0.0625);G(z,bc,bd,0.5,0.75,0.0625);Ch(0.0,(-1.0),0.0);G(z,bc,bf,(-0.5),0.75,0.001953125);G(z,bg,bf,(-0.5),0.8125,0.001953125);G(z,bg,bf,0.5,0.8125,0.001953125);G(z,bc,bf,0.5,0.75,0.001953125);Ch(0.0,1.0,0.0);G(z,bc,bd,0.5,0.75,0.001953125);G(z,bg,bd,0.5,0.8125,0.001953125);G(z,bg,bd,(-0.5),0.8125,0.001953125);G(z,
bc,bd,(-0.5),0.75,0.001953125);Ch((-1.0),0.0,0.0);G(z,bc,bf,0.5,0.751953125,0.0);G(z,bc,bd,0.5,0.751953125,0.0625);G(z,bc,bd,(-0.5),0.751953125,0.0625);G(z,bc,bf,(-0.5),0.751953125,0.0);Ch(1.0,0.0,0.0);G(z,bg,bf,(-0.5),0.751953125,0.0);G(z,bg,bd,(-0.5),0.751953125,0.0625);G(z,bg,bd,0.5,0.751953125,0.0625);G(z,bg,bf,0.5,0.751953125,0.0);Br(z);s=q;while(true){if(s<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=s+1|0;f=q*16|0;r=h+f;s=s*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dJ)w=K(b.d
+u/16.0);if(b.dJ==1)y=K(b.e-u/16.0);if(b.dJ==2)w=K(b.d-u/16.0);if(b.dJ==3)y=K(b.e+u/16.0);z=a.iD.n0;continue _;}i=i+1|0;if(i>=j)break;s=0;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AOV(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQe(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function Jv(){var a=this;C5.call(a);a.sx=0;a.s3=0;a.rG=0;a.vS=0;a.pi=0;a.lo=0;a.sm=null;a.p2=0;a.m7=0;}
function ATe(a,b){var c=new Jv();AZg(c,a,b);return c;}
function AZg(a,b,c){FC(a,b);a.sx=(-1);a.s3=(-1);a.rG=(-1);a.vS=0;a.pi=0;a.lo=0;a.m7=0;a.sm=c;D2(a,0.5,0.5);Kw(a,c.d,c.j,c.e,c.v,c.J);a.d=a.d-BC(a.v/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.e=a.e-Bq(a.v/180.0*3.1415927410125732)*0.1599999964237213;CT(a,a.d,a.j,a.e);a.c4=0.0;a.g= -Bq(a.v/180.0*3.1415927410125732)*BC(a.J/180.0*3.1415927410125732);a.h=BC(a.v/180.0*3.1415927410125732)*BC(a.J/180.0*3.1415927410125732);a.i= -Bq(a.J/180.0*3.1415927410125732);QI(a,a.g,a.i,a.h,1.5,1.0);}
function QI(a,b,c,d,e,f){var g,h,i;g=Cd(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;g=CZ(a.m)*0.007499999832361937;h=f;b=b+g*h;c=c+CZ(a.m)*0.007499999832361937*h;d=d+CZ(a.m)*0.007499999832361937*h;g=e;b=b*g;c=c*g;d=d*g;a.g=b;a.i=c;a.h=d;i=Cd(b*b+d*d);e=CR(b,d)*180.0/3.1415927410125732;a.v=e;a.P=e;e=CR(c,i)*180.0/3.1415927410125732;a.J=e;a.T=e;a.p2=0;}
function APy(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJc(a);if(C()){break _;}if(a.lo>0)a.lo=a.lo-1|0;if(a.pi){b=a.l;c=a.sx;d=a.s3;e=a.rG;$p=2;continue _;}a.m7=a.m7+1|0;b=BW(a.d,a.j,a.e);f=BW(a.d+a.g,a.j+a.i,a.e+a.h);g=a.l;$p=3;continue _;case 2:$z=ACB(b,c,d,e);if(C()){break _;}c=$z;if
(c==a.vS){a.p2=a.p2+1|0;if(a.p2!=1200)return;$p=4;continue _;}a.pi=0;a.g=a.g*N(a.m)*0.20000000298023224;a.i=a.i*N(a.m)*0.20000000298023224;a.h=a.h*N(a.m)*0.20000000298023224;a.p2=0;a.m7=0;b=BW(a.d,a.j,a.e);f=BW(a.d+a.g,a.j+a.i,a.e+a.h);g=a.l;$p=3;case 3:$z=AJq(g,b,f);if(C()){break _;}g=$z;b=BW(a.d,a.j,a.e);f=BW(a.d+a.g,a.j+a.i,a.e+a.h);if(g!==null)f=BW(g.gy.x,g.gy.z,g.gy.w);h=null;i=a.l;j=Du(Jh(a.L,a.g,a.i,a.h),1.0,1.0,1.0);$p=5;continue _;case 4:Ca(a);if(C()){break _;}return;case 5:$z=ADO(i,a,j);if(C()){break _;}i
=$z;k=0.0;d=0;while(d<CX(i)){j=Z(i,d);if(j.lt()&&!(j===a.sm&&a.m7<5)){l=QX(Du(j.L,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,f);if(l!==null){m=DI(b,l.gy);if(!(m>=k&&k!==0.0)){h=j;k=m;}}}d=d+1|0;}if(h!==null)g=A1g(h);if(g!==null){if(g.nA!==null){b=g.nA;f=a.sm;c=4;$p=7;continue _;}a.sx=g.h$;a.s3=g.h_;a.rG=g.ia;b=a.l;c=a.sx;d=a.s3;e=a.rG;$p=6;continue _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Cd(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.J=CR(a.i,n)*180.0/3.1415927410125732;while
(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}a.J=a.T+(a.J-a.T)*0.20000000298023224;a.v=a.P+(a.v-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 6:$z=ACB(b,c,d,e);if(C()){break _;}c=$z;a.vS=c;a.g=g.gy.x-a.d;a.i=g.gy.z-a.j;a.h=g.gy.w-a.e;n=Cd(a.g*a.g+a.i*a.i+a.h*a.h);k=a.d;m=a.g;p=n;a.d=k-m/p*0.05000000074505806;a.j=a.j-a.i/p*0.05000000074505806;a.e=a.e-a.h/p*0.05000000074505806;Dg(a.l,a,B(587),
1.0,1.2000000476837158/(N(a.m)*0.20000000298023224+0.8999999761581421));a.pi=1;a.lo=7;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Cd(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.J=CR(a.i,n)*180.0/3.1415927410125732;while(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}a.J=a.T+(a.J-a.T)*0.20000000298023224;a.v=a.P+(a.v-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 7:$z=b.fr(f,c);if(C())
{break _;}c=$z;if(c){Dg(a.l,a,B(587),1.0,1.2000000476837158/(N(a.m)*0.20000000298023224+0.8999999761581421));$p=8;continue _;}a.g=a.g*(-0.10000000149011612);a.i=a.i*(-0.10000000149011612);a.h=a.h*(-0.10000000149011612);a.v=a.v+180.0;a.P=a.P+180.0;a.m7=0;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Cd(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.J=CR(a.i,n)*180.0/3.1415927410125732;while(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while
(a.v-a.P>=180.0){a.P=a.P+360.0;}a.J=a.T+(a.J-a.T)*0.20000000298023224;a.v=a.P+(a.v-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 8:Ca(a);if(C()){break _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Cd(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.J=CR(a.i,n)*180.0/3.1415927410125732;while(a.J-a.T<(-180.0)){a.T=a.T-360.0;}while(a.J-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}a.J=a.T+(a.J-a.T)*0.20000000298023224;a.v=a.P+(a.v
-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;case 9:$z=AE$(a);if(C()){break _;}c=$z;if(c){e=0;while(e<4){BU(a.l,B(213),a.d-a.g*0.25,a.j-a.i*0.25,a.e-a.h*0.25,a.g,a.i,a.h);e=e+1|0;}o=0.800000011920929;}k=a.g;m=o;a.g=k*m;a.i=a.i*m;a.h=a.h*m;a.i=a.i-0.029999999329447746;CT(a,a.d,a.j,a.e);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function A7G(a,b){var c,d;if(a.pi&&a.sm===b&&a.lo<=0){c=b.K;d=new Cc;BB();MQ(d,Bgi.cW,1);if(Vg(c,d)){Dg(a.l,a,B(588),0.20000000298023224,((N(a.m)-N(a.m))*0.699999988079071+1.0)*2.0);R2(b,a);Ca(a);}}}
function RC(){Df.call(this);}
function BlL(){var a=new RC();AS0(a);return a;}
function AS0(a){EI(a);}
function AJ0(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=B(589);$p=1;case 1:AKw(a,h);if(C()){break _;}B1();Bw(c,d,e);Bv(b.P+(b.v-b.P)*g-90.0,0.0,1.0,0.0);Bv(b.T+(b.J-b.T)*g,0.0,0.0,1.0);BA();h=BeP;Ba(32826);i=b.lo-g;if(i>0.0)Bv( -Bq(i*3.0)*i,0.0,0.0,1.0);Bv(45.0,1.0,0.0,0.0);CB(0.05624999850988388,0.05624999850988388,0.05624999850988388);Bw((-4.0),0.0,0.0);Ch(0.05624999850988388,
0.0,0.0);Bz(h);G(h,(-7.0),(-2.0),(-2.0),0.0,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.3125);G(h,(-7.0),2.0,(-2.0),0.0,0.3125);Br(h);Ch((-0.05624999850988388),0.0,0.0);Bz(h);G(h,(-7.0),2.0,(-2.0),0.0,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.3125);G(h,(-7.0),(-2.0),(-2.0),0.0,0.3125);Br(h);j=0;while(j<4){Bv(90.0,1.0,0.0,0.0);Ch(0.0,0.0,0.05624999850988388);Bz(h);G(h,(-8.0),(-2.0),0.0,0.0,0.0);G(h,8.0,(-2.0),0.0,0.5,0.0);G(h,8.0,2.0,0.0,0.5,
0.15625);G(h,(-8.0),2.0,0.0,0.0,0.15625);Br(h);j=j+1|0;}Bd(32826);BD();return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ADm(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJ0(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function E_(){var a=this;C5.call(a);a.ne=null;a.zo=0;a.mJ=0;a.hb=0;a.q3=0;a.yu=0.0;}
function Hf(a,b,c,d,e){var f=new E_();He(f,a,b,c,d,e);return f;}
function He(a,b,c,d,e,f){FC(a,b);a.mJ=0;a.q3=5;a.yu=BN()*3.141592653589793*2.0;D2(a,0.25,0.25);a.c4=a.eO/2.0;CT(a,c,d,e);a.ne=f;a.v=BN()*360.0;a.g=BN()*0.20000000298023224-0.10000000149011612;a.i=0.20000000298023224;a.h=BN()*0.20000000298023224-0.10000000149011612;a.i9=0;}
function AJJ(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jg();if(C()){break _;}if(a.hb>0)a.hb=a.hb-1|0;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-0.03999999910593033;b=a.l;c=K(a.d);d=K(a.j);e=K(a.e);$p=2;case 2:$z=AB6(b,c,d,e);if(C()){break _;}b=$z;if(b===BfW){a.i=0.20000000298023224;a.g=(N(a.m)-N(a.m))*0.20000000298023224;a.h=(N(a.m)-N(a.m))*0.20000000298023224;Dg(a.l,a,B(215),0.4000000059604645,
2.0+N(a.m)*0.4000000059604645);}f=a.d;g=a.j;h=a.e;$p=3;case 3:ACK(a,f,g,h);if(C()){break _;}$p=4;case 4:AEi(a);if(C()){break _;}f=a.g;g=a.i;h=a.h;$p=5;case 5:ARJ(a,f,g,h);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}a.zo=a.zo+1|0;a.mJ=a.mJ+1|0;if(a.mJ<6000)return;$p=6;case 6:Ca(a);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AEi(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=a.L;d=BfV;$p=1;case 1:$z=AAz(b,c,d,a);if(C()){break _;}e=$z;return e;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function ACK(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=b-e;i=c-f;j=d-g;L();k=BgF.data;l=a.l;$p=1;case 1:$z=ACB(l,e,f,g);if(C()){break _;}m=$z;if(!k[m])return 0;k=BgF.data;l=a.l;m=e-1|0;$p=2;case 2:$z=ACB(l,m,f,g);if(C())
{break _;}m=$z;n=k[m]?0:1;k=BgF.data;l=a.l;m=e+1|0;$p=3;case 3:$z=ACB(l,m,f,g);if(C()){break _;}m=$z;o=k[m]?0:1;k=BgF.data;l=a.l;m=f-1|0;$p=4;case 4:$z=ACB(l,e,m,g);if(C()){break _;}m=$z;p=k[m]?0:1;k=BgF.data;l=a.l;m=f+1|0;$p=5;case 5:$z=ACB(l,e,m,g);if(C()){break _;}m=$z;q=k[m]?0:1;k=BgF.data;l=a.l;m=g-1|0;$p=6;case 6:$z=ACB(l,e,f,m);if(C()){break _;}m=$z;m=k[m]?0:1;k=BgF.data;l=a.l;r=g+1|0;$p=7;case 7:$z=ACB(l,e,f,r);if(C()){break _;}e=$z;r=k[e]?0:1;s=(-1);t=9999.0;if(n&&h<t){s=0;t=h;}if(!o)b=t;else{b=1.0
-h;if(b<t)s=1;else b=t;}if(p&&i<b){s=2;b=i;}if(!q)c=b;else{c=1.0-i;if(c<b)s=3;else c=b;}if(m&&j<c){s=4;c=j;}if(r&&1.0-j<c)s=5;u=N(a.m)*0.20000000298023224+0.10000000149011612;if(!s)a.g= -u;if(s==1)a.g=u;if(s==2)a.i= -u;if(s==3)a.i=u;if(s==4)a.h= -u;if(s==5)a.h=u;return 0;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AMz(a,b){Vo(a,null,b);}
function Vo(a,b,c){a.q3=a.q3-c|0;if(a.q3<=0)Ca(a);return 0;}
function A_i(a,b){if(!a.hb&&Vg(b.K,a.ne)){Dg(a.l,a,B(588),0.20000000298023224,((N(a.m)-N(a.m))*0.699999988079071+1.0)*2.0);R2(b,a);Ca(a);}}
function Mu(){C5.call(this);this.hs=0;}
function AWU(a,b,c,d){var e=new Mu();A6D(e,a,b,c,d);return e;}
function A6D(a,b,c,d,e){var f,g,h;FC(a,b);a.hs=0;a.mB=1;D2(a,0.9800000190734863,0.9800000190734863);a.c4=a.eO/2.0;f=c;g=d;h=e;CT(a,f,g,h);e=BN()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.g= -Bq(e)*0.019999999552965164;a.i=0.20000000298023224;a.h= -BC(e)*0.019999999552965164;a.i9=0;a.hs=80;a.bS=f;a.cS=g;a.bR=h;}
function A$i(a){return a.cR?0:1;}
function XP(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARJ(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}e=a.hs;a.hs=e-1|0;if(e>0){BU(a.l,B(256),a.d,a.j+0.5,a.e,0.0,
0.0,0.0);return;}$p=2;case 2:Ca(a);if(C()){break _;}f=4.0;g=a.l;h=null;b=a.d;c=a.j;d=a.e;$p=3;case 3:Yf(g,h,b,c,d,f);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AO0(){Df.call(this);this.wf=null;}
function Bas(){var a=new AO0();A7l(a);return a;}
function A7l(a){EI(a);a.wf=Km();a.l_=0.5;}
function APC(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();Bw(c,d,e);if(b.hs-g+1.0<10.0){h=1.0-(b.hs-g+1.0)/10.0;if(h<0.0)h=0.0;if(h>1.0)h=1.0;f=h*h;i=1.0+f*f*0.30000001192092896;CB(i,i,i);}h=(1.0-(b.hs-g+1.0)/100.0)*0.800000011920929;j=B(179);$p=1;case 1:AKw(a,j);if(C()){break _;}j=a.wf;L();GY(j,Bfo);if(!((b.hs/5|0)%2|0)){Bd(3553);Bd(2896);Ba(3042);De(770,772);BS(1.0,
1.0,1.0,h);GY(a.wf,Bfo);BS(1.0,1.0,1.0,1.0);Bd(3042);Ba(2896);Ba(3553);}BD();return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AL_(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APC(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function JP(){var a=this;C5.call(a);a.hU=0;a.oO=0;}
function AYo(a){return a.cR?0:1;}
function AMS(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.hU){$p=3;continue _;}a.bS=a.d;a.cS=a.j;a.bR=a.e;a.oO=a.oO+1|0;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARJ(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=K(a.d);f=K(a.j);g=K(a.e);h=a.l;$p=2;case 2:$z=ACB(h,e,f,g);if(C()){break _;}i
=$z;if(i==a.hU){h=a.l;i=0;$p=4;continue _;}if(!a.cx){if(a.oO<=100)return;e=a.hU;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;continue _;case 3:Ca(a);if(C()){break _;}return;case 4:APB(h,e,f,g,i);if(C()){break _;}if(!a.cx){if(a.oO<=100)return;e=a.hU;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;case 5:Ca(a);if(C()){break _;}h=a.l;i=a.hU;j=1;$p=6;case 6:$z=AId(h,i,e,f,g,j);if(C()){break _;}i=$z;if(!i){e=a.hU;f=1;$p=
9;continue _;}h=a.l;i=a.hU;$p=10;continue _;case 7:ABZ(a,e,f);if(C()){break _;}$p=8;case 8:Ca(a);if(C()){break _;}return;case 9:ABZ(a,e,f);if(C()){break _;}return;case 10:$z=APB(h,e,f,g,i);if(C()){break _;}e=$z;if(e)return;e=a.hU;f=1;$p=9;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AX5(a){return a.l;}
function AQS(){Df.call(this);this.DD=null;}
function Bak(){var a=new AQS();AXx(a);return a;}
function AXx(a){EI(a);a.DD=Km();a.l_=0.5;}
function AQl(a,b,c,d,e,f,g){var h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();Bw(c,d,e);h=B(179);$p=1;case 1:AKw(a,h);if(C()){break _;}L();h=BeT.data[b.hU];i=b.l;Bd(2896);j=a.DD;k=K(b.d);l=K(b.j);m=K(b.e);$p=2;case 2:AI5(j,h,i,k,l,m);if(C()){break _;}Ba(2896);BD();return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARp(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQl(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function Gi(){var a=this;C5.call(a);a.Bs=null;a.iT=0;a.kz=0;a.oN=0;a.kL=0;}
var BlM=null;function ASW(a,b){return b.L;}
function AZ8(a){return a.L;}
function A7J(a){return 1;}
function AVT(a){return a.eO*0.2;}
function ALl(a,b,c){var d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oN= -a.oN;a.kz=10;a.iT=a.iT+(c*10|0)|0;if(a.iT<=40)return 1;BB();c=BiM.cW;d=1;e=0.0;$p=1;case 1:AGK(a,c,d,e);if(C()){break _;}$p=2;case 2:APk(a);if(C()){break _;}return 1;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function A9Q(a){return a.cR?0:1;}
function APk(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=27;while(b<c){d=TZ(a,b);if(d!==null){e=N(a.m)*0.800000011920929+0.10000000149011612;f=N(a.m)*0.800000011920929+0.10000000149011612;g=N(a.m)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;if(d.p>0){k=E(a.m,21)+10|0;if(k>d.p)k=d.p;d.p=d.p-k|0;l=Hf(a.l,a.d+h,a.j+i,a.e+j,
Ou(d.bB,k,d.em));l.g=CZ(a.m)*0.05000000074505806;l.i=CZ(a.m)*0.05000000074505806+0.20000000298023224;l.h=CZ(a.m)*0.05000000074505806;m=a.l;$p=2;continue _;}}b=b+1|0;}$p=1;case 1:Ca(a);if(C()){break _;}return;case 2:AOl(m,l);if(C()){break _;}a:while(true){if(d.p>0){k=E(a.m,21)+10|0;if(k>d.p)k=d.p;d.p=d.p-k|0;l=Hf(a.l,a.d+h,a.j+i,a.e+j,Ou(d.bB,k,d.em));l.g=CZ(a.m)*0.05000000074505806;l.i=CZ(a.m)*0.05000000074505806+0.20000000298023224;l.h=CZ(a.m)*0.05000000074505806;m=a.l;continue _;}while(true){b=b+1|0;if(b>=
c)break a;d=TZ(a,b);if(d===null)continue;else break;}e=N(a.m)*0.800000011920929+0.10000000149011612;f=N(a.m)*0.800000011920929+0.10000000149011612;g=N(a.m)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;}$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ASL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kz>0)a.kz=a.kz-1|0;if(a.iT>0)a.iT=a.iT-1|0;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i
-0.03999999910593033;b=K(a.d);c=K(a.j);d=K(a.e);e=a.l;f=c-1|0;$p=1;case 1:$z=ACB(e,b,f,d);if(C()){break _;}f=$z;L();if(f==Bhb.b)c=c+(-1)|0;g=0.4;h=0.0078125;e=a.l;$p=2;case 2:$z=ACB(e,b,c,d);if(C()){break _;}f=$z;if(f==Bhb.b){i=a.d;j=a.j;k=a.e;$p=3;continue _;}if(a.g<(-0.4))a.g=(-0.4);if(a.g>g)a.g=g;if(a.h<(-0.4))a.h=(-0.4);if(a.h>g)a.h=g;if(a.cx){a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;}i=a.g;j=a.i;k=a.h;$p=5;continue _;case 3:$z=ASp(a,i,j,k);if(C()){break _;}l=$z;e=a.l;$p=4;case 4:$z=AEN(e,b,c,d);if(C()){break _;}m
=$z;a.j=c;n=R(m,2);if(n>=0&&m<=5)a.j=c+1|0;if(!n)a.g=a.g-h;if(m==3)a.g=a.g+h;if(m==4)a.h=a.h+h;if(m==5)a.h=a.h-h;o=BlM.data[m].data;p=o[1].data[0]-o[0].data[0]|0;q=o[1].data[2]-o[0].data[2]|0;r=Ed(p*p+q*q);if(a.g*p+a.h*q<0.0){p= -p;q= -q;}s=Ed(a.g*a.g+a.h*a.h);a.g=s*p/r;a.h=s*q/r;t=b;u=t+0.5;v=u+o[0].data[0]*0.5;w=d;p=w+0.5;i=p+o[0].data[2]*0.5;j=u+o[1].data[0]*0.5;k=p+o[1].data[2]*0.5;j=j-v;k=k-i;if(j===0.0){a.d=u;u=a.e-w;}else if(k===0.0){a.e=p;u=a.d-t;}else u=((a.d-v)*j+(a.e-i)*k)*2.0;a.d=v+j*u;a.e=i+k*u;CT(a,
a.d,a.j+a.c4,a.e);x=a.g;t=a.h;if(a.bH!==null){x=x*0.75;t=t*0.75;}i=(-0.4);if(x<i)x=i;if(x>g)x=g;if(t>=i)i=t;if(i<=g)g=i;i=0.0;$p=7;continue _;case 5:ARJ(a,i,j,k);if(C()){break _;}if(!a.cx){a.g=a.g*0.949999988079071;a.i=a.i*0.949999988079071;a.h=a.h*0.949999988079071;}a.J=0.0;y=a.bS-a.d;z=a.bR-a.e;if(y*y+z*z>0.001){a.v=CR(z,y)*180.0/3.141592653589793;if(a.kL)a.v=a.v+180.0;}ba=a.v-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.v=a.v+180.0;a.kL=a.kL?0:1;}WX(a,
a.v,a.J);e=a.l;l=Du(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADO(e,a,l);if(C()){break _;}bb=$z;if(bb!==null&&CX(bb)>0){bc=0;while(true){if(bc>=CX(bb))break a;bd=Z(bb,bc);if(bd!==a.bH&&bd.rQ()&&bd instanceof Gi)bd.uZ(a);bc=bc+1|0;}}}if(a.bH!==null&&a.bH.cR)a.bH=null;return;case 7:ARJ(a,x,i,g);if(C()){break _;}if(o[0].data[1]&&(K(a.d)-b|0)==o[0].data[0]&&(K(a.e)-d|0)==o[0].data[2])CT(a,a.d,a.j+o[0].data[1],a.e);else if(o[1].data[1]&&(K(a.d)-b|0)==o[1].data[0]&&(K(a.e)-d|0)==o[1].data[2])CT(a,
a.d,a.j+o[1].data[1],a.e);if(a.bH===null){a.g=a.g*0.9599999785423279;a.i=a.i*0.0;a.h=a.h*0.9599999785423279;}else{a.g=a.g*0.996999979019165;a.i=a.i*0.0;a.h=a.h*0.996999979019165;}i=a.d;j=a.j;k=a.e;$p=8;case 8:$z=ASp(a,i,j,k);if(C()){break _;}e=$z;if(e!==null&&l!==null){w=(l.z-e.z)*0.05;i=Ed(a.g*a.g+a.h*a.h);if(i>0.0){j=a.g/i;k=i+w;a.g=j*k;a.h=a.h/i*k;}CT(a,a.d,e.z,a.e);}f=K(a.d);n=K(a.e);if(!(f==b&&n==d)){i=Ed(a.g*a.g+a.h*a.h);a.g=i*(f-b|0);a.h=i*(n-d|0);}a.J=0.0;y=a.bS-a.d;z=a.bR-a.e;if(y*y+z*z>0.001){a.v=
CR(z,y)*180.0/3.141592653589793;if(a.kL)a.v=a.v+180.0;}ba=a.v-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.v=a.v+180.0;a.kL=a.kL?0:1;}WX(a,a.v,a.J);e=a.l;l=Du(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AJ2(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=K(b);g=K(c);h=K(d);i=a.l;j=g-1|0;$p=1;case 1:$z=ACB(i,f,j,h);if(C()){break _;}j=$z;L();if(j==Bhb.b)g=g+(-1)|0;i=a.l;$p=2;case 2:$z=ACB(i,f,g,h);if(C()){break _;}j=$z;if(j!=Bhb.b)return null;i=a.l;$p=3;case 3:$z=AEN(i,f,g,h);if(C()){break _;}j=$z;c=g;if(j>=2&&j<=5)c
=g+1|0;k=BlM.data[j].data;l=k[1].data[0]-k[0].data[0]|0;m=k[1].data[2]-k[0].data[2]|0;n=Ed(l*l+m*m);l=l/n;m=m/n;l=b+l*e;d=d+m*e;if(k[0].data[1]&&(K(l)-f|0)==k[0].data[0]&&(K(d)-h|0)==k[0].data[2])c=c+k[0].data[1];else if(k[1].data[1]&&(K(l)-f|0)==k[1].data[0]&&(K(d)-h|0)==k[1].data[2])c=c+k[1].data[1];$p=4;case 4:$z=ASp(a,l,c,d);if(C()){break _;}i=$z;return i;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASp(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=a.l;i=f-1|0;$p=1;case 1:$z=ACB(h,e,i,g);if(C()){break _;}i=$z;L();if(i==Bhb.b)f=f+(-1)|0;h=a.l;$p=2;case 2:$z=ACB(h,e,f,g);if(C()){break _;}i=$z;if(i!=Bhb.b)return null;h
=a.l;$p=3;case 3:$z=AEN(h,e,f,g);if(C()){break _;}j=$z;c=f;k=BlM.data[j].data;l=e;m=l+0.5;n=m+k[0].data[0]*0.5;o=c+0.5;p=o+k[0].data[1]*0.5;q=g;r=q+0.5;s=r+k[0].data[2]*0.5;m=m+k[1].data[0]*0.5;t=o+k[1].data[1]*0.5;o=r+k[1].data[2]*0.5;r=m-n;u=(t-p)*2.0;v=o-s;l=r===0.0?d-q:v===0.0?b-l:((b-n)*r+(d-s)*v)*2.0;b=n+r*l;c=p+u*l;d=s+v*l;i=R(u,0.0);if(i<0)c=c+1.0;if(i>0)c=c+0.5;return BW(b,c,d);default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function A3U(a,b){var c,d,e,f,g,h;if(b!==a.bH){c=b.d-a.d;d=b.e-a.e;e=c*c+d*d;if(e>=9.999999747378752E-5){e=Cd(e);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;d=f*g;c=c*0.10000000149011612;d=d*0.10000000149011612;c=c*(1.0-a.n4);d=d*(1.0-a.n4);c=c*0.5;d=d*0.5;if(!(b instanceof Gi)){Hr(a, -c,0.0, -d);Hr(b,c/4.0,0.0,d/4.0);}else{f=(b.g+a.g)/2.0;h=(b.h+a.h)/2.0;a.h=0.0;a.g=0.0;Hr(a,f-c,0.0,h-d);b.h=0.0;b.g=0.0;Hr(b,f+c,0.0,h+d);}}}}
function A1b(a){return 27;}
function TZ(a,b){return a.Bs.data[b];}
function A8T(a,b){Pn(b,a);return 1;}
function AMN(){var b,c,d,e,f,g;b=I($rt_arraycls($rt_arraycls($rt_intcls())),10);c=b.data;d=I($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[0]=d;d=I($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[1]=d;d=I($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]
=(-1);g[1]=(-1);g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[2]=d;d=I($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=(-1);g[2]=0;e[1]=f;c[3]=d;d=I($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=(-1);g[2]=1;e[1]=f;c[4]=d;d=I($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=(-1);g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[5]=d;g=I($rt_arraycls($rt_intcls()),2);e=g.data;d=$rt_createIntArray(3);f=d.data;f[0]=0;f[1]=0;f[2]=1;e[0]=d;d=$rt_createIntArray(3);f=d.data;f[0]=1;f[1]=0;f[2]=0;e[1]=d;c[6]=g;d=I($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[7]=d;d=I($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[8]=d;d=I($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[9]=d;BlM=b;}
function ARE(){Df.call(this);this.C5=null;}
function Bb_(){var a=new ARE();A$l(a);return a;}
function A$l(a){EI(a);a.l_=0.5;a.C5=Bc5();}
function AQk(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();h=b.cs;i=b.d-b.cs;j=g;k=h+i*j;l=b.b7+(b.j-b.b7)*j;i=b.ct+(b.e-b.ct)*j;h=0.30000001192092896;$p=1;case 1:$z=ASp(b,k,l,i);if(C()){break _;}m=$z;n=b.T+(b.J-b.T)*g;if(m!==null){$p=2;continue _;}Bw(c,d,e);Bv(180.0
-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.kz-g;p=b.iT-g;if(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oN,1.0,0.0,0.0);b=B(179);$p=4;continue _;case 2:$z=AJ2(b,k,l,i,h);if(C()){break _;}q=$z;h=(-0.30000001192092896);$p=3;case 3:$z=AJ2(b,k,l,i,h);if(C()){break _;}r=$z;if(q===null)q=m;if(r===null)r=m;c=c+m.x-k;d=d+(q.z+r.z)/2.0-l;e=e+m.w-i;s=Dj(r, -q.x, -q.z, -q.w);if(HS(s)!==0.0){s=CC(s);f=CR(s.w,s.x)*180.0/3.141592653589793;n=It(s.z)*73.0;}Bw(c,d,e);Bv(180.0-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.kz-g;p=b.iT-g;if
(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oN,1.0,0.0,0.0);b=B(179);$p=4;case 4:AKw(a,b);if(C()){break _;}CB(0.75,0.75,0.75);b=Km();L();GY(b,Bg2);CB(1.3333333730697632,1.3333333730697632,1.3333333730697632);b=B(590);$p=5;case 5:AKw(a,b);if(C()){break _;}CB((-1.0),(-1.0),1.0);AKx(a.C5,0.0,0.0,(-0.10000000149011612),0.0,0.0,0.0625);BD();return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AQj(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQk(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function Wd(){var a=this;D.call(a);a.u3=Long_ZERO;a.t5=0;a.y_=0;}
function BlN(){var a=new Wd();AUh(a);return a;}
function AUh(a){return;}
function ABI(){var a=this;D.call(a);a.wm=null;a.wE=null;}
function BbV(){var a=new ABI();AUs(a);return a;}
function AUs(a){a.wm=BJ(0,0);BF(a.wm,(-12.0),(-14.0),(-1.0),24,12,2,0.0);a.wE=BJ(0,14);BF(a.wE,(-1.0),(-2.0),(-1.0),2,14,2,0.0);}
function ANe(a){B_(a.wm,0.0625);B_(a.wE,0.0625);}
function AH_(){var a=this;Eh.call(a);a.lX=null;a.qS=null;a.rC=null;a.j_=null;a.j$=null;a.kb=null;a.ka=null;a.kd=null;a.kc=null;a.kf=null;a.ke=null;}
function A5r(){var a=new AH_();AUS(a);return a;}
function AUS(a){a.lX=BJ(32,4);BF(a.lX,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BI(a.lX,0.0,15.0,(-3.0));a.qS=BJ(0,0);BF(a.qS,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BI(a.qS,0.0,15.0,0.0);a.rC=BJ(0,12);BF(a.rC,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BI(a.rC,0.0,15.0,9.0);a.j_=BJ(18,0);BF(a.j_,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BI(a.j_,(-4.0),15.0,2.0);a.j$=BJ(18,0);BF(a.j$,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BI(a.j$,4.0,15.0,2.0);a.kb=BJ(18,0);BF(a.kb,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BI(a.kb,(-4.0),15.0,1.0);a.ka=BJ(18,0);BF(a.ka,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BI(a.ka,4.0,15.0,1.0);a.kd=BJ(18,0);BF(a.kd,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BI(a.kd,(-4.0),15.0,0.0);a.kc=BJ(18,0);BF(a.kc,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BI(a.kc,4.0,15.0,0.0);a.kf=BJ(18,0);BF(a.kf,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BI(a.kf,(-4.0),15.0,(-1.0));a.ke=BJ(18,0);BF(a.ke,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BI(a.ke,4.0,15.0,(-1.0));}
function AYf(a,b,c,d,e,f,g){YA(a,b,c,d,e,f,g);B_(a.lX,g);B_(a.qS,g);B_(a.rC,g);B_(a.j_,g);B_(a.j$,g);B_(a.kb,g);B_(a.ka,g);B_(a.kd,g);B_(a.kc,g);B_(a.kf,g);B_(a.ke,g);}
function YA(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.lX.bX=e/57.2957763671875;a.lX.b1=f/57.2957763671875;a.j_.bU=(-0.7853981852531433);a.j$.bU=0.7853981852531433;a.kb.bU=(-0.5811946392059326);a.ka.bU=0.5811946392059326;a.kd.bU=(-0.5811946392059326);a.kc.bU=0.5811946392059326;a.kf.bU=(-0.7853981852531433);a.ke.bU=0.7853981852531433;a.j_.bX=0.7853981852531433;a.j$.bX=(-0.7853981852531433);a.kb.bX=0.39269909262657166;a.ka.bX=(-0.39269909262657166);a.kd.bX=(-0.39269909262657166);a.kc.bX=0.39269909262657166;a.kf.bX
=(-0.7853981852531433);a.ke.bX=0.7853981852531433;b=b*0.6661999821662903;f=b*2.0;h= -(BC(f+0.0)*0.4000000059604645)*c;i= -(BC(f+3.1415927410125732)*0.4000000059604645)*c;j= -(BC(f+1.5707963705062866)*0.4000000059604645)*c;k= -(BC(f+4.71238899230957)*0.4000000059604645)*c;l=H0(Bq(b+0.0)*0.4000000059604645)*c;m=H0(Bq(b+3.1415927410125732)*0.4000000059604645)*c;n=H0(Bq(b+1.5707963705062866)*0.4000000059604645)*c;o=H0(Bq(b+4.71238899230957)*0.4000000059604645)*c;p=a.j_;p.bX=p.bX+h;p=a.j$;p.bX=p.bX+ -h;p=a.kb;p.bX
=p.bX+i;p=a.ka;p.bX=p.bX+ -i;p=a.kd;p.bX=p.bX+j;p=a.kc;p.bX=p.bX+ -j;p=a.kf;p.bX=p.bX+k;p=a.ke;p.bX=p.bX+ -k;p=a.j_;p.bU=p.bU+l;p=a.j$;p.bU=p.bU+ -l;p=a.kb;p.bU=p.bU+m;p=a.ka;p.bU=p.bU+ -m;p=a.kd;p.bU=p.bU+n;p=a.kc;p.bU=p.bU+ -n;p=a.kf;p.bU=p.bU+o;p=a.ke;p.bU=p.bU+ -o;}
function AIF(){var a=this;Eh.call(a);a.l3=null;a.vu=null;a.sU=null;a.po=null;a.pn=null;a.pm=null;a.pl=null;}
function BaZ(){var a=new AIF();A5c(a);return a;}
function A5c(a){a.l3=BJ(0,0);BF(a.l3,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BI(a.l3,0.0,4.0,0.0);a.vu=BJ(32,0);BF(a.vu,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BI(a.vu,0.0,4.0,0.0);a.sU=BJ(16,16);BF(a.sU,(-4.0),0.0,(-2.0),8,12,4,0.0);BI(a.sU,0.0,4.0,0.0);a.po=BJ(0,16);BF(a.po,(-2.0),0.0,(-2.0),4,6,4,0.0);BI(a.po,(-2.0),16.0,4.0);a.pn=BJ(0,16);BF(a.pn,(-2.0),0.0,(-2.0),4,6,4,0.0);BI(a.pn,2.0,16.0,4.0);a.pm=BJ(0,16);BF(a.pm,(-2.0),0.0,(-2.0),4,6,4,0.0);BI(a.pm,(-2.0),16.0,(-4.0));a.pl=BJ(0,16);BF(a.pl,(-2.0),0.0,(-2.0),4,6,4,
0.0);BI(a.pl,2.0,16.0,(-4.0));}
function A28(a,b,c,d,e,f,g){Zx(a,b,c,d,e,f,g);B_(a.l3,g);B_(a.sU,g);B_(a.po,g);B_(a.pn,g);B_(a.pm,g);B_(a.pl,g);}
function Zx(a,b,c,d,e,f,g){var h;a.l3.bX=e/57.2957763671875;a.l3.b1=f/57.2957763671875;h=a.po;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.pn;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.pm.b1=BC(d)*1.399999976158142*c;a.pl.b1=BC(b)*1.399999976158142*c;}
function AE0(){Eh.call(this);this.cZ=null;}
function Bc5(){var a=new AE0();A36(a);return a;}
function A36(a){a.cZ=I(QM,7);a.cZ.data[0]=BJ(0,10);a.cZ.data[1]=BJ(0,0);a.cZ.data[2]=BJ(0,0);a.cZ.data[3]=BJ(0,0);a.cZ.data[4]=BJ(0,0);a.cZ.data[5]=BJ(44,10);BF(a.cZ.data[0],(-10.0),(-8.0),(-1.0),20,16,2,0.0);BI(a.cZ.data[0],0.0,4.0,0.0);BF(a.cZ.data[5],(-9.0),(-7.0),(-1.0),18,14,1,0.0);BI(a.cZ.data[5],0.0,4.0,0.0);BF(a.cZ.data[1],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BI(a.cZ.data[1],(-9.0),4.0,0.0);BF(a.cZ.data[2],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BI(a.cZ.data[2],9.0,4.0,0.0);BF(a.cZ.data[3],(-8.0),(-9.0),(-1.0),
16,8,2,0.0);BI(a.cZ.data[3],0.0,4.0,(-7.0));BF(a.cZ.data[4],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BI(a.cZ.data[4],0.0,4.0,7.0);a.cZ.data[0].b1=1.5707963705062866;a.cZ.data[1].bX=4.71238899230957;a.cZ.data[2].bX=1.5707963705062866;a.cZ.data[3].bX=3.1415927410125732;a.cZ.data[5].b1=(-1.5707963705062866);}
function AKx(a,b,c,d,e,f,g){var h;a.cZ.data[5].m2=4.0-d;h=0;while(h<6){B_(a.cZ.data[h],g);h=h+1|0;}}
function TC(){var a=this;D.call(a);a.lH=0;a.ym=0;a.sr=0;a.ng=0;a.la=null;}
function KF(a){return a.lH>=a.sr?0:1;}
function KV(a){var b,c;PM(a);a.ng=a.lH;b=a.la;c=a.lH;a.lH=c+1|0;return Z(b,c);}
function AMf(a){var b;if(a.ng<0){b=new D3;O(b);M(b);}PM(a);En(a.la,a.ng);a.ym=a.la.d6;if(a.ng<a.lH)a.lH=a.lH-1|0;a.sr=a.sr-1|0;a.ng=(-1);}
function PM(a){var b;if(a.ym>=a.la.d6)return;b=new KU;O(b);M(b);}
function I8(){var a=this;D.call(a);a.g3=null;a.tv=0;a.cE=null;a.gh=null;a.hF=null;a.jy=null;a.fu=null;a.q1=0;a.gA=0;a.gu=0;a.iW=null;a.dN=null;a.hh=0;a.fv=0;a.to=0;a.Ep=0;a.r_=0;a.s5=Long_ZERO;}
var Bkv=0;function BaP(a,b,c){var d=new I8();ARf(d,a,b,c);return d;}
function A9w(a,b,c,d){var e=new I8();A1C(e,a,b,c,d);return e;}
function ARf(a,b,c,d){var e;a.iW=Dd();a.dN=I(J7,8);a.hh=0;a.fv=0;a.Ep=0;a.r_=0;a.s5=Long_ZERO;a.cE=b;a.gA=c;a.gu=d;a.fu=$rt_createByteArray(256);e=0;while(e<a.dN.data.length){a.dN.data[e]=Cg();e=e+1|0;}}
function A1C(a,b,c,d,e){var f;f=c.data;ARf(a,b,d,e);a.g3=c;b=new Ud;d=f.length;AJG(b,d);a.gh=b;a.hF=Lx(d);a.jy=Lx(d);}
function ARL(a,b,c){return b==a.gA&&c==a.gu?1:0;}
function US(a,b,c){return a.fu.data[c<<4|b]&255;}
function A5M(a){return;}
function ALL(a,b,c){var d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=US(a,b,c);e=(a.gA*16|0)+b|0;f=(a.gu*16|0)+c|0;b=e-1|0;$p=1;case 1:AJN(a,b,f,d);if(C()){break _;}b=e+1|0;$p=2;case 2:AJN(a,b,f,d);if(C()){break _;}b=f-1|0;$p=3;case 3:AJN(a,e,b,d);if(C()){break _;}b=f+1|0;$p=4;case 4:AJN(a,e,b,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function Sl(a){var b,c,d,e,f;b=127;c=0;while(c<16){d=0;while(d<16){e=127;f=c<<11|d<<7;while(e>0){L();if(BgG.data[a.g3.data[(f+e|0)-1|0]])break;e=e+(-1)|0;}a.fu.data[d<<4|c]=e<<24>>24;if(e<b)b=e;d=d+1|0;}c=c+1|0;}a.q1=b;a.fv=1;}
function AJN(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cE;$p=1;case 1:$z=ALM(e,b,c);if(C()){break _;}f=$z;g=R(f,d);if(g>0)DU(a.cE,BkC,b,d,c,b,f,c);else if(g<0)DU(a.cE,BkC,b,f,c,b,d,c);a.fv=1;return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function Fs(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.fu.data;f=d<<4|b;g=e[f]&255;if(c<=g)c=g;while(c>0){L();if(BgG.data[FR(a,b,c-1|0,d)])break;c=c+(-1)|0;}h=R(c,g);if(h){APN(a.cE,b,d,c,g);a.fu.data[f]=c<<24>>24;if(c<a.q1)a.q1=c;else{f=127;i=0;while(i<16){j=0;while(j<16){e=a.fu.data;k=j<<4|i;if((e[k]&255)<f)f=a.fu.data[k]&255;j=j+1|0;}i=i+1|0;}a.q1=f;}a:{f=(a.gA*16|0)+b|0;i=(a.gu*16|0)+d|0;if(h<0){j=c;while(true){if(j>=g)break a;Ek(a.hF,b,j,d,15);j=j+1|0;}}DU(a.cE,BkC,f,g,i,f,c,i);while(true){if(g>=c)break a;Ek(a.hF,
b,g,d,0);g=g+1|0;}}j=15;k=c;b:{while(k>0){if(j<=0)break b;k=k+(-1)|0;L();l=BgG.data[FR(a,b,k,d)];if(!l)l=1;j=j-l|0;if(j<0)j=0;Ek(a.hF,b,k,d,j);}}while(k>0){L();if(BgG.data[FR(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k!=c)DU(a.cE,BkC,f-1|0,k,i-1|0,f+1|0,c,i+1|0);a.fv=1;}}
function FR(a,b,c,d){return a.g3.data[b<<11|d<<7|c];}
function ADI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e<<24>>24;h=a.fu.data[d<<4|b]&255;i=a.g3.data;j=b<<11|d<<7|c;k=i[j]&255;if(k==e&&G7(a.gh,b,c,d)==f)return 0;l=(a.gA*16|0)+b|0;m=(a.gu*16|0)+d|0;a.g3.data[j]=g;if(k){L();n=BeT.data[k];o=a.cE;$p=1;continue _;}Ek(a.gh,b,c,d,f);L();if(!BgG.data[g]){if(c==(h
-1|0))Fs(a,b,c,d);}else if(c>=h)Fs(a,b,c+1|0,d);DU(a.cE,BkC,l,c,m,l,c,m);DU(a.cE,BkD,l,c,m,l,c,m);$p=2;continue _;case 1:n.ly(o,l,c,m);if(C()){break _;}Ek(a.gh,b,c,d,f);L();if(!BgG.data[g]){if(c==(h-1|0))Fs(a,b,c,d);}else if(c>=h)Fs(a,b,c+1|0,d);DU(a.cE,BkC,l,c,m,l,c,m);DU(a.cE,BkD,l,c,m,l,c,m);$p=2;case 2:ALL(a,b,d);if(C()){break _;}Ek(a.gh,b,c,d,f);if(!e){a.fv=1;return 1;}n=BeT.data[e];o=a.cE;$p=3;case 3:n.fE(o,l,c,m);if(C()){break _;}a.fv=1;return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ADF(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=e<<24>>24;g=a.fu.data[d<<4|b]&255;h=a.g3.data;i=b<<11|d<<7|c;j=h[i]&255;if(j==e)return 0;k=(a.gA*16|0)+b|0;l=(a.gu*16|0)+d|0;a.g3.data[i]=f;if(j){L();m=BeT.data[j];n=a.cE;$p=1;continue _;}Ek(a.gh,b,c,d,0);L();if(!BgG.data[f]){if(c==(g-1|0))Fs(a,b,c,d);}else if(c>=
g)Fs(a,b,c+1|0,d);DU(a.cE,BkC,k,c,l,k,c,l);DU(a.cE,BkD,k,c,l,k,c,l);$p=2;continue _;case 1:m.ly(n,k,c,l);if(C()){break _;}Ek(a.gh,b,c,d,0);L();if(!BgG.data[f]){if(c==(g-1|0))Fs(a,b,c,d);}else if(c>=g)Fs(a,b,c+1|0,d);DU(a.cE,BkC,k,c,l,k,c,l);DU(a.cE,BkD,k,c,l,k,c,l);$p=2;case 2:ALL(a,b,d);if(C()){break _;}if(!e){a.fv=1;return 1;}m=BeT.data[e];n=a.cE;$p=3;case 3:m.fE(n,k,c,l);if(C()){break _;}a.fv=1;return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function RY(a,b,c,d){return G7(a.gh,b,c,d);}
function AAB(a,b,c,d,e){a.fv=1;Ek(a.gh,b,c,d,e);}
function ACq(a,b,c,d,e){return b===BkC?G7(a.hF,c,d,e):b!==BkD?0:G7(a.jy,c,d,e);}
function AQR(a,b,c,d,e,f){a.fv=1;if(b===BkC)Ek(a.hF,c,d,e,f);else{if(b!==BkD)return;Ek(a.jy,c,d,e,f);}}
function VW(a,b,c,d,e){var f,g;f=G7(a.hF,b,c,d);if(f>0)Bkv=1;e=f-e|0;g=G7(a.jy,b,c,d);if(g<=e)g=e;return g;}
function VZ(a,b){var c,d,e,f,g;a.r_=1;c=K(b.d/16.0);d=K(b.e/16.0);if(!(c==a.gA&&d==a.gu)){e=Dy();f=new T;V(f);Co(e,U(FN(J(f,B(591)),b)));}g=K(b.j/16.0);if(g<0)g=0;if(g>=a.dN.data.length)g=a.dN.data.length-1|0;S(a.dN.data[g],b);}
function AM5(a,b){R7(a,b,K(b.j/16.0));}
function R7(a,b,c){var d,e;if(c<0)c=0;if(c>=a.dN.data.length)c=a.dN.data.length-1|0;if(!Ra(a.dN.data[c],b)){d=Dy();e=new T;V(e);Co(d,U(FN(J(e,B(592)),b)));}H_(a.dN.data[c],b);}
function Pr(a,b,c,d){return c<(a.fu.data[d<<4|b]&255)?0:1;}
function ANs(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;f=CP(a.iW,CY(e));if(f!==null)return f;g=FR(a,b,c,d);L();h=BeT.data[g];f=a.cE;b=(a.gA*16|0)+b|0;d=(a.gu*16|0)+d|0;$p=1;case 1:h.fE(f,b,c,d);if(C()){break _;}return CP(a.iW,CY(e));default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AJp(a,b,c,d,e){var f;a:{f=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;e.ci=a.cE;e.dK=(a.gA*16|0)+b|0;e.dI=c;e.dR=(a.gu*16|0)+d|0;if(FR(a,b,c,d)){L();if(BeT.data[FR(a,b,c,d)] instanceof Eg){if(a.tv){if(CP(a.iW,CY(f))!==null)H_(a.cE.fD,CP(a.iW,CY(f)));S(a.cE.fD,e);}BP(a.iW,CY(f),e);break a;}}Co(Dy(),B(593));}}
function AD3(a,b,c,d){var e;e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;if(a.tv)H_(a.cE.fD,Rb(a.iW,CY(e)));}
function MH(a){var b;a.tv=1;DF(a.cE.fD,Iu(a.iW));b=0;while(b<a.dN.data.length){AQh(a.cE,a.dN.data[b]);b=b+1|0;}}
function AOR(a){var b;a.tv=0;Gf(a.cE.fD,Iu(a.iW));b=0;while(b<a.dN.data.length){AQ8(a.cE,a.dN.data[b]);b=b+1|0;}}
function SQ(a){a.fv=1;}
function AJ5(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dN.data.length)f=a.dN.data.length-1|0;while(e<=f){g=a.dN.data[e];h=0;while(h<g.s){i=Z(g,h);if(i!==b&&L9(i.L,c))S(d,i);h=h+1|0;}e=e+1|0;}}
function AMo(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dN.data.length)f=a.dN.data.length-1|0;while(e<=f){g=a.dN.data[e];h=0;while(h<g.s){i=Z(g,h);if(P_(b,Dk(i))&&L9(i.L,c))S(d,i);h=h+1|0;}e=e+1|0;}}
function Nu(a,b){return a.to?0:a.r_&&Long_ne(a.cE.ee,a.s5)?1:a.fv;}
function Iv(){var a=this;D.call(a);a.jm=0;a.iw=0;a.kv=null;a.x0=null;}
function BlO(a,b,c,d,e,f,g){var h=new Iv();AEy(h,a,b,c,d,e,f,g);return h;}
function AEy(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.x0=b;a.jm=c>>4;a.iw=e>>4;i=f>>4;j=h>>4;a.kv=$rt_createMultiArray($rt_arraycls($rt_arraycls(I8)),[(j-a.iw|0)+1|0,(i-a.jm|0)+1|0]);k=a.jm;while(k<=i){l=a.iw;if(l<=j){m=a.kv.data[k-a.jm|0].data;c=l-a.iw|0;$p=1;continue _;}k=k+1|0;}return;case 1:$z=Z0(b,k,l);if(C()){break _;}n
=$z;m[c]=n;l=l+1|0;while(true){if(l<=j){m=a.kv.data[k-a.jm|0].data;c=l-a.iw|0;continue _;}k=k+1|0;if(k>i)break;l=a.iw;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function HA(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jm|0;f=(d>>4)-a.iw|0;return FR(a.kv.data[e].data[f],b&15,c,d&15);}
function AFY(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b>>4)-a.jm|0;f=(d>>4)-a.iw|0;g=a.kv.data[e].data[f];e=b&15;b=d&15;$p=1;case 1:$z=ANs(g,e,c,b);if(C()){break _;}g=$z;return g;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAU(a,b,c,d){return Bky.data[AAa(a,b,c,d)];}
function AAa(a,b,c,d){return GU(a,b,c,d,1);}
function GU(a,b,c,d,e){var f,g,h,i,j,k;if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){a:{if(e){f=HA(a,b,c,d);L();if(f==BeY.b)break a;if(f==Bg8.b)break a;}if(c<0)return 0;if(c>=128){f=15-a.x0.ge|0;if(f<0)f=0;return f;}f=(b>>4)-a.jm|0;g=(d>>4)-a.iw|0;return VW(a.kv.data[f].data[g],b&15,c,d&15,a.x0.ge);}g=GU(a,b,c+1|0,d,0);h=GU(a,b+1|0,c,d,0);i=GU(a,b-1|0,c,d,0);j=GU(a,b,c,d+1|0,0);k=GU(a,b,c,d-1|0,0);if(h<=g)h=g;if(i<=h)i=h;if(j<=i)j=i;if(k<=j)k=j;return k;}return 15;}
function AC9(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jm|0;f=(d>>4)-a.iw|0;return RY(a.kv.data[e].data[f],b&15,c,d&15);}
function N9(a,b,c,d){var e,f;e=HA(a,b,c,d);if(!e)f=Bge;else{L();f=BeT.data[e].b_;}return f;}
function AB_(a,b,c,d){var e;L();e=BeT.data[HA(a,b,c,d)];return e!==null?e.d4():0;}
function Gl(){BO.call(this);}
function BlP(){var a=new Gl();A$j(a);return a;}
function A$j(a){O(a);}
function U1(){Gl.call(this);}
function BlQ(){var a=new U1();A6Q(a);return a;}
function A6Q(a){O(a);}
function Vk(){D.call(this);}
var BlR=null;function BlS(){var a=new Vk();AO_(a);return a;}
function AO_(a){return;}
function AIN(){var b,c;b=$rt_createIntArray(12);c=b.data;c[0]=1;c[1]=4;c[2]=2;c[3]=1024;c[4]=8;c[5]=16;c[6]=128;c[7]=64;c[8]=32;c[9]=256;c[10]=2048;c[11]=512;BlR=b;}
function PQ(){Go.call(this);this.we=null;}
function A0u(a,b){return AEg(a.we,b);}
function Nk(a){var b;b=new Vh;VH(b,a.we);return b;}
function Tz(){D.call(this);this.Jn=null;}
function AOz(a){Bb();BdJ.requestPointerLock();M0(0);}
function A_B(a){AOz(a);}
function AQL(){D.call(this);}
function BlT(){var a=new AQL();A4f(a);return a;}
function A4f(a){return;}
function W2(){var a=this;D$.call(a);a.cu=null;a.gY=0;a.pU=0;a.kU=0;}
function BaG(){var a=new W2();AVg(a);return a;}
function AVg(a){a.cu=I(Cc,3);a.gY=0;a.pU=0;a.kU=0;}
function A9t(a,b){return a.cu.data[b];}
function A8m(a,b,c){var d;if(a.cu.data[b]===null)return null;if(a.cu.data[b].p<=c){d=a.cu.data[b];a.cu.data[b]=null;return d;}d=EG(a.cu.data[b],c);if(!a.cu.data[b].p)a.cu.data[b]=null;return d;}
function AVx(a,b,c){a.cu.data[b]=c;if(c!==null&&c.p>64)c.p=64;}
function AT_(a){return 64;}
function AOP(a,b){return Bi(a.kU,b)/200|0;}
function ADN(a,b){if(!a.pU)a.pU=200;return Bi(a.gY,b)/a.pU|0;}
function WS(a){return a.gY<=0?0:1;}
function AGJ(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gY<=0?0:1;c=0;if(a.gY>0){a.gY=a.gY-1|0;c=1;}if(!a.gY&&Oo(a)){d=a.cu.data[1];if(d===null)e=0;else a:{f=DL(d).cW;if(f<256){L();if(BeT.data[f].b_===Bhf){e=300;break a;}}BB();e=f==Bh$.cW?100:f!=BhF.cW?0:1600;}a.gY=e;a.pU=e;if(a.gY>0){c=1;if(a.cu.data[1]!==null){d=a.cu.data[1];d.p=d.p-1|0;if(!a.cu.data[1].p)a.cu.data[1]
=null;}}}if(WS(a)&&Oo(a)){a.kU=a.kU+1|0;if(a.kU==200){a.kU=0;ADB(a);c=1;}}else a.kU=0;if(b==(a.gY<=0?0:1)){if(!c)return;d=a.ci;e=a.dK;b=a.dI;c=a.dR;$p=1;continue _;}c=1;b=a.gY<=0?0:1;g=a.ci;f=a.dK;h=a.dI;i=a.dR;$p=2;continue _;case 1:AGy(d,e,b,c);if(C()){break _;}return;case 2:$z=AEN(g,f,h,i);if(C()){break _;}e=$z;$p=3;case 3:$z=ANB(g,f,h,i);if(C()){break _;}j=$z;if(!b){L();b=Bg9.b;$p=4;continue _;}L();b=Bg$.b;$p=5;continue _;case 4:APB(g,f,h,i,b);if(C()){break _;}$p=6;continue _;case 5:APB(g,f,h,i,b);if(C())
{break _;}$p=6;case 6:AKA(g,f,h,i,e);if(C()){break _;}$p=7;case 7:AFX(g,f,h,i,j);if(C()){break _;}if(!c)return;d=a.ci;e=a.dK;b=a.dI;c=a.dR;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Oo(a){var b,c;if(a.cu.data[0]===null)return 0;b=U4(a,DL(a.cu.data[0]).cW);if(b<0)b=0;else if(a.cu.data[2]===null)b=1;else if(a.cu.data[2].bB!=b)b=0;else if(a.cu.data[2].p<64&&a.cu.data[2].p<EB(a.cu.data[2]))b=1;else{c=a.cu.data[2].p;BB();b=c>=Bhj.data[b].eZ?0:1;}return b;}
function ADB(a){var b,c;if(Oo(a)){b=U4(a,DL(a.cu.data[0]).cW);if(a.cu.data[2]===null)a.cu.data[2]=KC(b,1);else if(a.cu.data[2].bB==b){c=a.cu.data[2];c.p=c.p+1|0;}c=a.cu.data[0];c.p=c.p-1|0;if(a.cu.data[0].p<=0)a.cu.data[0]=null;}}
function U4(a,b){L();if(b==Bfj.b){BB();b=BhV.cW;}else if(b==Bfk.b){BB();b=BhW.cW;}else if(b==Bg4.b){BB();b=BhG.cW;}else if(b==Bfe.b)b=Be9.b;else{BB();b=b==Bgl.cW?BiF.cW:b!=Be3.b?(-1):BeZ.b;}return b;}
function Z$(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ci;c=a.dK;d=a.dI;e=a.dR;$p=1;case 1:AGy(b,c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function Tl(){D$.call(this);this.hZ=null;}
function Bbk(){var a=new Tl();A2b(a);return a;}
function A2b(a){a.hZ=I(Cc,36);}
function AVR(a){return 27;}
function Rh(a,b){return a.hZ.data[b];}
function A1X(a,b,c){var d;if(a.hZ.data[b]===null)return null;if(a.hZ.data[b].p<=c){d=a.hZ.data[b];a.hZ.data[b]=null;return d;}d=EG(a.hZ.data[b],c);if(!a.hZ.data[b].p)a.hZ.data[b]=null;return d;}
function AHE(a,b,c){a.hZ.data[b]=c;if(c!==null&&c.p>64)c.p=64;}
function A8F(a){return B(263);}
function A7p(a){return 64;}
function CQ(){D.call(this);this.go=null;}
function BlU(){var a=new CQ();Cv(a);return a;}
function Cv(a){a.go=null;}
function VQ(a){return a.go!==null?a.go:B(3);}
function AXJ(a,b){a.go=b;return a;}
function MZ(b){var c,d;c=N5(b);if(!c){b=new N6;Cv(b);return b;}d=AE9(c);d.go=GW(b);d.gF(b);return d;}
function R4(b,c){KN(c,b.fc());if(b.fc()){Xw(c,VQ(b));b.gN(c);}}
function AE9(b){var c;switch(b){case 0:c=new N6;Cv(c);return c;case 1:c=new Mz;Cv(c);return c;case 2:c=new M1;Cv(c);return c;case 3:c=new Ll;Cv(c);return c;case 4:c=new Oe;Cv(c);return c;case 5:c=new Pm;Cv(c);return c;case 6:c=new Ms;Cv(c);return c;case 7:c=new MK;Cv(c);return c;case 8:c=new OK;Cv(c);return c;case 9:return Ma();case 10:return Ha();default:}return null;}
function APT(){CQ.call(this);this.cL=null;}
function Ha(){var a=new APT();A8O(a);return a;}
function A8O(a){Cv(a);a.cL=Dd();}
function A7g(a,b){var c;c=Nk(Iu(a.cL));while(Gb(c)){R4(Mh(c),b);}KN(b,0);}
function A9n(a,b){var c;Vf(a.cL);while(true){c=MZ(b);if(!c.fc())break;BP(a.cL,VQ(c),c);}}
function A7e(a){return 10;}
function HH(a,b,c){var d;d=a.cL;c.go=b;BP(d,b,c);}
function JO(a,b,c){var d,e;d=a.cL;e=new Mz;Cv(e);e.tt=c;e.go=b;BP(d,b,e);}
function Ft(a,b,c){var d,e;d=a.cL;e=new M1;Cv(e);e.tm=c;e.go=b;BP(d,b,e);}
function Gz(a,b,c){var d,e;d=a.cL;e=new Ll;Cv(e);e.r6=c;e.go=b;BP(d,b,e);}
function Id(a,b,c){var d,e;d=a.cL;e=new Oe;Cv(e);e.s0=c;e.go=b;BP(d,b,e);}
function ASa(a,b,c){var d,e;d=a.cL;e=A6V(c);e.go=b;BP(d,b,e);}
function IS(a,b,c){var d,e;d=a.cL;e=new MK;Cv(e);e.ml=c;e.go=b;BP(d,b,e);}
function ANX(a,b,c){var d;d=a.cL;c.go=b;BP(d,b,c);}
function S5(a,b,c){JO(a,b,(!c?0:1)<<24>>24);}
function Y6(a,b){return D0(a.cL,b);}
function LE(a,b){return !D0(a.cL,b)?0:CP(a.cL,b).tt;}
function FK(a,b){return !D0(a.cL,b)?0:CP(a.cL,b).tm;}
function FW(a,b){return !D0(a.cL,b)?0:CP(a.cL,b).r6;}
function Mf(a,b){return !D0(a.cL,b)?Long_ZERO:CP(a.cL,b).s0;}
function AMK(a,b){return !D0(a.cL,b)?0.0:CP(a.cL,b).nk;}
function IJ(a,b){return !D0(a.cL,b)?$rt_createByteArray(0):CP(a.cL,b).ml;}
function MB(a,b){return !D0(a.cL,b)?Ha():CP(a.cL,b);}
function Kl(a,b){return !D0(a.cL,b)?Ma():CP(a.cL,b);}
function Uy(a,b){return !LE(a,b)?0:1;}
function P8(){B6.call(this);}
function BlV(){var a=new P8();A$_(a);return a;}
function A$_(a){O(a);}
function SO(){B6.call(this);}
function BlW(){var a=new SO();AYS(a);return a;}
function AYS(a){O(a);}
function R3(){G0.call(this);this.Bx=0;}
function AVV(a){var b;b=new T;V(b);return U(Bf(J(b,B(594)),a.Bx));}
function P4(){G0.call(this);this.EQ=0;}
function AVo(a){var b;b=new T;V(b);return U(Bf(J(b,B(595)),a.EQ));}
function IP(){var a=this;D.call(a);a.l5=0;a.rl=0;a.lC=null;a.hm=null;a.sp=null;a.iu=null;}
function BlX(a){var b=new IP();VH(b,a);return b;}
function VH(a,b){a.iu=b;a.rl=b.g9;a.lC=null;}
function Gb(a){if(a.lC!==null)return 1;while(a.l5<a.iu.cO.data.length){if(a.iu.cO.data[a.l5]!==null)return 1;a.l5=a.l5+1|0;}return 0;}
function UC(a){var b;if(a.rl==a.iu.g9)return;b=new KU;O(b);M(b);}
function Wi(a){var b,c,d;UC(a);if(!Gb(a)){b=new J4;O(b);M(b);}if(a.lC===null){c=a.iu.cO.data;d=a.l5;a.l5=d+1|0;a.hm=c[d];a.lC=a.hm.eD;a.sp=null;}else{if(a.hm!==null)a.sp=a.hm;a.hm=a.lC;a.lC=a.lC.eD;}}
function ADU(a){var b,c;UC(a);if(a.hm===null){b=new D3;O(b);M(b);}if(a.sp!==null)a.sp.eD=a.hm.eD;else{c=a.hm.pV&(a.iu.cO.data.length-1|0);a.iu.cO.data[c]=a.iu.cO.data[c].eD;}a.hm=null;a.rl=a.rl+1|0;b=a.iu;b.g9=b.g9+1|0;b=a.iu;b.f7=b.f7-1|0;}
function Vh(){IP.call(this);}
function Mh(a){Wi(a);return a.hm.e6;}
function WA(){var a=this;D.call(a);a.Am=null;a.EA=null;a.wb=0;a.qI=0;}
function NT(a){return Fn(a.Am);}
function AJt(a,b){return Cs(a.EA)<b?0:1;}
function A$G(a,b){a.wb=b;}
function A9l(a,b){a.qI=b;}
function AED(){var a=this;CS.call(a);a.o9=null;a.yH=null;a.lN=null;}
function AIS(a,b){var c=new AED();A1E(c,a,b);return c;}
function A1E(a,b,c){DR(a);a.yH=B(596);a.o9=b;a.lN=c;}
function AR5(a){var b,c,d;b=0;while(b<a.lN.zO){c=a.bG;d=Sn(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bD/6|0)+(24*(b>>1)|0)|0,Q3(a.lN,b));S(c,d);if(a.I.o.du&&!(b!=5&&b!=6&&b!=9))d.gC=0;b=b+1|0;}S(a.bG,Di(100,(a.bm/2|0)-100|0,((a.bD/6|0)+120|0)+22|0,B(597)));S(a.bG,Di(200,(a.bm/2|0)-100|0,(a.bD/6|0)+168|0,B(598)));}
function AD0(a,b){var c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC){if(b.cm<100){Ea(a.lN,b.cm,1);b.km=Q3(a.lN,b.cm);if(b.cm==10){c=a.I;d=AIS(a.o9,a.I.o);$p=2;continue _;}}if(b.cm==100){c=a.I;d=new NU;e=a.lN;DR(d);d.ug=B(599);d.jv=(-1);d.uD=a;d.iP=e;$p=1;continue _;}if(b.cm==200){b=a.I;c=a.o9;$p=3;continue _;}}return;case 1:ADY(c,d);if(C()){break _;}if(b.cm!=200)return;b=a.I;c=a.o9;$p=3;continue _;case 2:ADY(c,d);if(C())
{break _;}if(b.cm!=100){if(b.cm!=200)return;b=a.I;c=a.o9;$p=3;continue _;}c=a.I;d=new NU;e=a.lN;DR(d);d.ug=B(599);d.jv=(-1);d.uD=a;d.iP=e;$p=1;continue _;case 3:ADY(b,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AGf(a,b,c,d){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABm(a);if(C()){break _;}DG(a,a.bZ,a.yH,a.bm/2|0,20,16777215);$p=2;case 2:AFI(a,b,c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function OD(){var a=this;CS.call(a);a.oy=null;a.yv=null;a.xE=0;}
function A$1(a){var b=new OD();AEj(b,a);return b;}
function AEj(a,b){DR(a);a.yv=B(600);a.xE=0;a.oy=b;}
function APz(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=5){a.s8();return;}c=new T;V(c);c=J(c,B(601));d=b+1|0;c=U(Bf(c,d));$p=1;case 1:$z=ASh(c);if(C()){break _;}c=$z;if(c!==null){c=new T;V(c);e=U(Bf(J(c,B(602)),d));c=new T;V(c);f=U(J(Bf(J(c,B(601)),d),B(355)));Bb();c=BeJ;$p=2;continue _;}S(a.bG,Di(b,(a.bm/2|0)-100|0,(a.bD/6|0)+(24*b|0)|0,B(603)));b=d;if(b>=5){a.s8();return;}c=new T;V(c);c
=J(c,B(601));d=b+1|0;c=U(Bf(c,d));continue _;case 2:$z=A_O(c,f);if(C()){break _;}c=$z;g=c===null?(-1):c.byteLength;c=new T;V(c);f=U(J(AKu(J(J(c,e),B(604)),g/100.0),B(605)));S(a.bG,Di(b,(a.bm/2|0)-100|0,(a.bD/6|0)+(24*b|0)|0,f));b=d;if(b>=5){a.s8();return;}c=new T;V(c);c=J(c,B(601));d=b+1|0;c=U(Bf(c,d));$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function ANw(a,b){var c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=new T;V(c);c=U(Bf(J(c,B(601)),b));$p=1;case 1:$z=ASh(c);if(C()){break _;}c=$z;if(c===null)c=null;else{c=new T;V(c);c=U(Bf(J(c,B(601)),b));}return c;default:Fa();}}C3().s(a,b,c,$p);}
function AXG(a){S(a.bG,Di(5,(a.bm/2|0)-100|0,((a.bD/6|0)+120|0)+12|0,B(606)));S(a.bG,Di(6,(a.bm/2|0)-100|0,(a.bD/6|0)+168|0,B(607)));}
function ASC(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC){if(b.cm<5){c=b.cm+1|0;$p=1;continue _;}if(b.cm==5){b=a.I;d=new U6;AEj(d,a);d.yv=B(608);$p=2;continue _;}if(b.cm==6){b=a.I;d=a.oy;$p=3;continue _;}}return;case 1:a.IU(c);if(C()){break _;}return;case 2:ADY(b,d);if(C()){break _;}return;case 3:ADY(b,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function AKS(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I;d=null;$p=1;case 1:ADY(c,d);if(C()){break _;}if(a.xE)return;a.xE=1;d=a.I;c=new T;V(c);c=U(Bf(J(c,B(601)),b));$p=2;case 2:AH1(d,c);if(C()){break _;}d=a.I;c=null;$p=3;case 3:ADY(d,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function AEG(a,b,c,d){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABm(a);if(C()){break _;}DG(a,a.bZ,a.yv,a.bm/2|0,20,16777215);$p=2;case 2:AFI(a,b,c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function L2(){Gl.call(this);}
function BlY(){var a=new L2();A7c(a);return a;}
function A7c(a){O(a);}
function Tg(){Gl.call(this);}
function BlZ(){var a=new Tg();A$K(a);return a;}
function A$K(a){O(a);}
function ALA(){D.call(this);}
function Bl0(){var a=new ALA();A7s(a);return a;}
function A7s(a){return;}
function AAi(){D.call(this);}
function Bl1(){var a=new AAi();A8z(a);return a;}
function A8z(a){return;}
function AMn(){var a=this;D.call(a);a.n=null;a.fP=0;a.ua=null;a.zb=0;a.it=0;a.kj=0;a.dp=0;a.u2=null;}
function Bbz(){var a=new AMn();ATa(a);return a;}
function ALN(a,b){var c,d,e,f,g,h,i,j;c=new VF;c.qT=(-1);c.si=(-1);c.FE=a;c.EH=a.u2;c.pJ=b;c.qT=0;c.si=Bh(c.pJ);d=new WB;e=c.qT;f=c.si;g=a.it;h=AQ0(a);i=AD9(a);d.k1=(-1);j=g+1|0;d.zz=j;d.gG=$rt_createIntArray(j*2|0);d.oR=$rt_createIntArray(i);M4(d.oR,(-1));if(h>0)d.xu=$rt_createIntArray(h);M4(d.gG,(-1));Xo(d,b,e,f);c.dC=d;return c;}
function AIW(a,b,c){var d,e,f,g,h,i;d=Cg();e=ALN(a,b);f=0;g=0;if(!Bh(b)){h=I(B2,1);h.data[0]=B(3);return h;}while(ABf(e)){i=f+1|0;if(i>=c&&c>0)break;S(d,Ev(b,g,AHc(e)));g=AK2(e);f=i;}a:{S(d,Ev(b,g,Bh(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(Bh(Z(d,f)))break a;En(d,f);}}if(f<0)f=0;return UL(d,I(B2,f));}
function AIV(a,b){return AIW(a,b,0);}
function Nd(a){return a.n.eP;}
function S2(a,b,c,d){var e,f,g,h,i;e=Cg();f=a.fP;g=0;if(c!=a.fP)a.fP=c;a:{switch(b){case -1073741784:h=new QK;c=a.dp+1|0;a.dp=c;Hd(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PZ;c=a.dp+1|0;a.dp=c;Hd(h,c);break a;case -33554392:h=new Q_;c=a.dp+1|0;a.dp=c;Hd(h,c);break a;default:a.it=a.it+1|0;if(d!==null)h=BcD(a.it);else{h=Bb9();g=1;}if(a.it<=(-1))break a;if(a.it>=10)break a;a.ua.data[a.it]=h;break a;}h=Bby();}while(true){if(F_(a.n)&&a.n.H==(-536870788)){d=A$L(C0(a,
2),C0(a,64));while(!Eo(a.n)&&F_(a.n)&&!(a.n.H&&a.n.H!=(-536870788)&&a.n.H!=(-536870871))){Do(d,BE(a.n));if(a.n.cH!=(-536870788))continue;BE(a.n);}i=LS(a,d);i.cb(h);}else if(a.n.cH==(-536870788)){i=IK(h);BE(a.n);}else{i=Uo(a,h);if(a.n.cH==(-536870788))BE(a.n);}if(i!==null)S(e,i);if(Eo(a.n))break;if(a.n.cH==(-536870871))break;}if(a.n.qX==(-536870788))S(e,IK(h));if(a.fP!=f&&!g){a.fP=f;AJB(a.n,a.fP);}switch(b){case -1073741784:break;case -536870872:d=new Ti;GS(d,e,h);return d;case -268435416:d=new WR;GS(d,e,h);return d;case -134217688:d
=new Vi;GS(d,e,h);return d;case -67108824:d=new Rn;GS(d,e,h);return d;case -33554392:d=new EY;GS(d,e,h);return d;default:switch(e.s){case 0:break;case 1:return Bcv(Z(e,0),h);default:return BaJ(e,h);}return IK(h);}d=new K3;GS(d,e,h);return d;}
function AP4(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!Eo(a.n)&&F_(a.n)){e=b.data;c=BE(a.n);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.n.cH;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;BE(a.n);f=a.n.cH;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;BE(a.n);return A$A(e,3);}return A$A(e,2);}if(!C0(a,2))return AAm(b[0]);if(C0(a,64))return A9e(b[0]);return A4D(b[0]);}e=b.data;c=1;while(c<4&&!Eo(a.n)&&F_(a.n)){f=c+1|0;e[c]=BE(a.n);c=f;}if(c==1){f=e[0];if(!(Bl2.A6(f)
==Bl3?0:1))return SV(a,e[0]);}if(!C0(a,2))return Bc4(b,c);if(C0(a,64)){g=new SP;Pj(g,b,c);return g;}g=new V_;Pj(g,b,c);return g;}
function Uo(a,b){var c,d,e,f;if(F_(a.n)&&!Lk(a.n)&&Ns(a.n.H)){if(C0(a,128)){c=AP4(a);if(!Eo(a.n)&&!(a.n.cH==(-536870871)&&!(b instanceof HW))&&a.n.cH!=(-536870788)&&!F_(a.n))c=MD(a,b,c);}else if(!TU(a.n)&&!WC(a.n)){d=new Lj;V(d);while(!Eo(a.n)&&F_(a.n)&&!TU(a.n)&&!WC(a.n)&&!(!(!Lk(a.n)&&!a.n.H)&&!(!Lk(a.n)&&Ns(a.n.H))&&a.n.H!=(-536870871)&&(a.n.H&(-2147418113))!=(-2147483608)&&a.n.H!=(-536870788)&&a.n.H!=(-536870876))){e=BE(a.n);if(!My(e))Dw(d,e&65535);else Hl(d,Iz(e));}if(!C0(a,2))c=Baz(d);else if(C0(a,64))c
=Bc1(d);else{c=new O2;EN(c);c.pK=U(d);c.dl=OC(d);}}else c=MD(a,b,W$(a,b));}else if(a.n.cH!=(-536870871))c=MD(a,b,W$(a,b));else{if(b instanceof HW)M(CN(B(3),a.n.eP,a.n.ih));c=IK(b);}if(!Eo(a.n)&&!(a.n.cH==(-536870871)&&!(b instanceof HW))&&a.n.cH!=(-536870788)){f=Uo(a,b);if(c instanceof D8&&!(c instanceof GE)&&!(c instanceof DX)&&!(c instanceof FX)){b=c;if(!f.d3(b.bQ)){c=new Sx;F6(c,b.bQ,b.r,b.p4);c.bQ.cb(c);}}if((f.oF()&65535)!=43)c.cb(f);else c.cb(f.bQ);}else{if(c===null)return null;c.cb(b);}if((c.oF()&65535)
!=43)return c;return c.bQ;}
function MD(a,b,c){var d,e,f,g;d=a.n.cH;if(c!==null&&!(c instanceof CI)){switch(d){case -2147483606:BE(a.n);e=new S$;Ef(e,c,b,d);c.cb(Bl4);return e;case -2147483605:BE(a.n);e=new UF;Ef(e,c,b,(-2147483606));c.cb(Bl4);return e;case -2147483585:BE(a.n);e=new PS;Ef(e,c,b,(-536870849));c.cb(Bl4);return e;case -2147483525:e=new OZ;f=G8(a.n);d=a.kj+1|0;a.kj=d;MS(e,f,c,b,(-536870849),d);c.cb(Bl4);return e;case -1073741782:case -1073741781:BE(a.n);f=new QA;Ef(f,c,b,d);c.cb(f);return f;case -1073741761:BE(a.n);f=new UZ;Ef(f,
c,b,(-536870849));c.cb(b);return f;case -1073741701:f=new RV;e=G8(a.n);g=a.kj+1|0;a.kj=g;MS(f,e,c,b,(-536870849),g);c.cb(f);return f;case -536870870:case -536870869:BE(a.n);if(c.oF()!=(-2147483602)){f=new DX;Ef(f,c,b,d);}else if(C0(a,32)){f=new QB;Ef(f,c,b,d);}else{f=new T0;e=Ut(a.fP);Ef(f,c,b,d);f.uu=e;}c.cb(f);return f;case -536870849:BE(a.n);f=new Hx;Ef(f,c,b,(-536870849));c.cb(b);return f;case -536870789:f=new G$;e=G8(a.n);g=a.kj+1|0;a.kj=g;MS(f,e,c,b,(-536870849),g);c.cb(f);return f;default:}return c;}e
=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:BE(a.n);f=new XB;F6(f,e,b,d);e.r=f;return f;case -2147483585:BE(a.n);c=new St;F6(c,e,b,(-2147483585));return c;case -2147483525:c=new Um;QU(c,G8(a.n),e,b,(-2147483525));return c;case -1073741782:case -1073741781:BE(a.n);f=new UX;F6(f,e,b,d);e.r=f;return f;case -1073741761:BE(a.n);c=new Wb;F6(c,e,b,(-1073741761));return c;case -1073741701:c=new Ql;QU(c,G8(a.n),e,b,(-1073741701));return c;case -536870870:case -536870869:BE(a.n);f=Ba0(e,b,d);e.r
=f;return f;case -536870849:BE(a.n);c=new FX;F6(c,e,b,(-536870849));return c;case -536870789:return Bb1(G8(a.n),e,b,(-536870789));default:}return c;}
function W$(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof HW;while(true){a:{e=Kv(a.n);if((e&(-2147418113))==(-2147483608)){BE(a.n);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.fP=f;else{if(e!=(-1073741784))f=a.fP;c=S2(a,e,f,b);if(Kv(a.n)!=(-536870871))M(CN(B(3),EC(a.n),HF(a.n)));BE(a.n);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.it<g)M(CN(B(3),
EC(a.n),HF(a.n)));BE(a.n);a.dp=a.dp+1|0;c=!C0(a,2)?BbG(g,a.dp):C0(a,64)?Baw(g,a.dp):Bc0(g,a.dp);a.ua.data[g].wS=1;a.zb=1;break a;case -2147483583:break;case -2147483582:BE(a.n);c=A$n(0);break a;case -2147483577:BE(a.n);c=Bap();break a;case -2147483558:BE(a.n);c=new SM;g=a.dp+1|0;a.dp=g;AQC(c,g);break a;case -2147483550:BE(a.n);c=A$n(1);break a;case -2147483526:BE(a.n);c=Bbh();break a;case -536870876:break c;case -536870866:BE(a.n);if(C0(a,32)){c=Bbr();break a;}c=Ba3(Ut(a.fP));break a;case -536870821:BE(a.n);h
=0;if(Kv(a.n)==(-536870818)){h=1;BE(a.n);}c=ADK(a,h,b);if(Kv(a.n)!=(-536870819))M(CN(B(3),EC(a.n),HF(a.n)));Uc(a.n,1);BE(a.n);break a;case -536870818:BE(a.n);a.dp=a.dp+1|0;if(!C0(a,8)){c=A1j();break a;}c=BcN(Ut(a.fP));break a;case 0:i=PW(a.n);if(i!==null)c=LS(a,i);else{if(Eo(a.n)){c=IK(b);break a;}c=AAm(e&65535);}BE(a.n);break a;default:break b;}BE(a.n);c=A1j();break a;}BE(a.n);a.dp=a.dp+1|0;if(C0(a,8)){if(C0(a,1)){c=Bax(a.dp);break a;}c=A_5(a.dp);break a;}if(C0(a,1)){c=BaO(a.dp);break a;}c=Ba_(a.dp);break a;}if
(e>=0&&!H5(a.n)){c=SV(a,e);BE(a.n);}else if(e==(-536870788))c=IK(b);else{if(e!=(-536870871))M(CN(!H5(a.n)?SJ(e&65535):PW(a.n).gj(),EC(a.n),HF(a.n)));if(d)M(CN(B(3),EC(a.n),HF(a.n)));c=IK(b);}}}if(e!=(-16777176))break;}return c;}
function ADK(a,b,c){var d;d=LS(a,Im(a,b));d.cb(c);return d;}
function Im(a,b){var c,d,e,f,g,h,i,j,$$je;c=A$L(C0(a,2),C0(a,64));Fz(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Eo(a.n))break a;f=a.n.cH==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.n.cH){case -536870874:if(d>=0)Do(c,d);d=BE(a.n);if(a.n.cH!=(-536870874)){d=38;break d;}if(a.n.H==(-536870821)){BE(a.n);e=1;d=(-1);break d;}BE(a.n);if(g){c=Im(a,0);break d;}if(a.n.cH==(-536870819))break d;SC(c,Im(a,0));break d;case -536870867:if(!g&&a.n.H!=(-536870819)&&a.n.H!=(-536870821)&&d>=0){BE(a.n);h=a.n.cH;if(H5(a.n))break c;if
(h<0&&a.n.H!=(-536870819)&&a.n.H!=(-536870821)&&d>=0)break c;e:{try{if(Ns(h))break e;h=h&65535;break e;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){break b;}else{throw $$e;}}}try{CG(c,d,h);}catch($$e){$$je=Bj($$e);if($$je instanceof BO){break b;}else{throw $$e;}}BE(a.n);d=(-1);break d;}if(d>=0)Do(c,d);d=45;BE(a.n);break d;case -536870821:if(d>=0){Do(c,d);d=(-1);}BE(a.n);i=0;if(a.n.cH==(-536870818)){BE(a.n);i=1;}if(!e)AIh(c,Im(a,i));else SC(c,Im(a,i));e=0;BE(a.n);break d;case -536870819:if(d>=0)Do(c,d);d=
93;BE(a.n);break d;case -536870818:if(d>=0)Do(c,d);d=94;BE(a.n);break d;case 0:if(d>=0)Do(c,d);j=a.n.k2;if(j===null)d=0;else{ASz(c,j);d=(-1);}BE(a.n);break d;default:}if(d>=0)Do(c,d);d=BE(a.n);}g=0;}M(CN(B(3),Nd(a),a.n.ih));}M(CN(B(3),Nd(a),a.n.ih));}if(!f){if(d>=0)Do(c,d);return c;}M(CN(B(3),Nd(a),a.n.ih-1|0));}
function SV(a,b){var c,d,e;c=My(b);if(C0(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A4D(b&65535);}if(C0(a,64)&&b>128){if(c){d=new Tf;EN(d);d.dl=2;d.z9=GP(GO(b));return d;}if(PI(b))return AYZ(b&65535);if(!Q0(b))return A9e(b&65535);return A6H(b&65535);}}if(!c){if(PI(b))return AYZ(b&65535);if(!Q0(b))return AAm(b&65535);return A6H(b&65535);}d=new E0;EN(d);d.dl=2;d.ky=b;e=Iz(b).data;d.tB=e[0];d.se=e[1];return d;}
function LS(a,b){var c,d,e;if(!AN2(b)){if(!b.ca){if(b.nQ())return AWM(b);return A1e(b);}if(!b.nQ())return A6W(b);c=new MT;Wk(c,b);return c;}c=Y2(b);d=new ON;Cy(d);d.zP=c;d.Hs=c.ck;if(!b.ca){if(b.nQ())return AEr(AWM(Kd(b)),d);return AEr(A1e(Kd(b)),d);}if(!b.nQ())return AEr(A6W(Kd(b)),d);c=new Qa;e=new MT;Wk(e,Kd(b));AHn(c,e,d);return c;}
function A3B(a){return a.it;}
function AQ0(a){return a.kj+1|0;}
function AD9(a){return a.dp+1|0;}
function Kg(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function C0(a,b){return (a.fP&b)!=b?0:1;}
function ATa(a){a.ua=I(DW,10);a.it=(-1);a.kj=(-1);a.dp=(-1);}
function AB4(){LC.call(this);}
function Sn(a,b,c,d){var e=new AB4();A6K(e,a,b,c,d);return e;}
function A6K(a,b,c,d,e){SL(a,b,c,d,150,20,e);}
function NU(){var a=this;CS.call(a);a.uD=null;a.ug=null;a.iP=null;a.jv=0;}
function AJy(a){var b;b=0;while(b<a.iP.nc.data.length){S(a.bG,Sn(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bD/6|0)+(24*(b>>1)|0)|0,K7(a.iP,b)));b=b+1|0;}S(a.bG,Di(200,(a.bm/2|0)-100|0,(a.bD/6|0)+168|0,B(598)));}
function AIk(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.iP.nc.data.length){Z(a.bG,c).km=K7(a.iP,c);c=c+1|0;}if(b.cm!=200){a.jv=b.cm;d=new T;V(d);b.km=U(J(J(J(d,B(580)),K7(a.iP,b.cm)),B(581)));return;}b=a.I;d=a.uD;$p=1;case 1:ADY(b,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function ALU(a,b,c){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jv>=0){X$(a.iP,a.jv,c);Z(a.bG,a.jv).km=K7(a.iP,a.jv);a.jv=(-1);return;}$p=1;case 1:YU(a,b,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,$p);}
function AGB(a,b,c,d){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABm(a);if(C()){break _;}DG(a,a.bZ,a.ug,a.bm/2|0,20,16777215);$p=2;case 2:AFI(a,b,c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function U6(){OD.call(this);}
function A1V(a){S(a.bG,Di(6,(a.bm/2|0)-100|0,(a.bD/6|0)+168|0,B(607)));}
function AMd(a,b){var c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANw(a,b);if(C()){break _;}c=$z;if(c===null)return;d=a.I;e=new Va;f=new T;V(f);f=U(J(J(J(f,B(609)),c),B(610)));DR(e);e.B6=a;e.BV=B(611);e.BX=f;e.yP=b;$p=2;case 2:ADY(d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AQ$(a,b,c){var d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b){$p=2;continue _;}d=a.I;e=a.oy;$p=1;case 1:ADY(d,e);if(C()){break _;}return;case 2:$z=ANw(a,c);if(C()){break _;}d=$z;e=new T;V(e);f=U(J(J(e,d),B(23)));e=B(612);d=B(613);g=Bdc.is;h=B(614);$p=3;case 3:AR8(g,e,h);if(C()){break _;}b=1;c=1;Bb();i=Q1();h=BeJ;$p=4;case 4:A5v(h,
f,b,c,i);if(C()){break _;}j=0;k=JI(i);while(true){if(!HR(k)){e=JI(i);while(HR(e)){d=HE(e);if(d.pH)EQ(d.n7);}EQ(f);d=a.I;e=a.oy;$p=1;continue _;}h=HE(k);if(!h.pH){EQ(h.n7);c=j+1|0;if((c-0|0)>=10)break;j=c;}}b=Ki(c/i.f6*100.0)|0;l=new T;V(l);h=IN(d,B(615),U(Bf(J(l,B(3)),c)));$p=5;case 5:AR8(g,e,h);if(C()){break _;}$p=6;case 6:XO(g,b);if(C()){break _;}j=c;m=c;while(true){if(!HR(k)){e=JI(i);while(HR(e)){d=HE(e);if(d.pH)EQ(d.n7);}EQ(f);d=a.I;e=a.oy;$p=1;continue _;}h=HE(k);if(h.pH)continue;EQ(h.n7);c=j+1|0;if((c
-m|0)>=10)break;j=c;}b=Ki(c/i.f6*100.0)|0;l=new T;V(l);h=IN(d,B(615),U(Bf(J(l,B(3)),c)));$p=5;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function NX(){var a=this;D.call(a);a.kB=0.0;a.kq=0.0;a.HQ=0;a.un=0;}
function Bl5(){var a=new NX();ADe(a);return a;}
function ADe(a){a.kB=0.0;a.kq=0.0;a.HQ=0;a.un=0;}
function Yt(){var a=this;NX.call(a);a.j4=null;a.nn=null;}
function V$(a){var b=new Yt();AZ1(b,a);return b;}
function AZ1(a,b){ADe(a);a.j4=$rt_createBooleanArray(10);a.nn=b;}
function APx(a,b,c){var d;d=(-1);if(b==a.nn.t3.bI)d=0;if(b==a.nn.xl.bI)d=1;if(b==a.nn.tV.bI)d=2;if(b==a.nn.uw.bI)d=3;if(b==a.nn.yE.bI)d=4;if(d>=0)a.j4.data[d]=c;}
function AO4(a){var b;b=0;while(b<10){a.j4.data[b]=0;b=b+1|0;}}
function AOF(a,b){a.kB=0.0;a.kq=0.0;if(a.j4.data[0])a.kq=a.kq+1.0;if(a.j4.data[1])a.kq=a.kq-1.0;if(a.j4.data[2])a.kB=a.kB+1.0;if(a.j4.data[3])a.kB=a.kB-1.0;a.un=a.j4.data[4];}
function Q2(){D.call(this);this.m8=null;}
var Bl6=null;function AY4(){AY4=Bt(Q2);A4b();}
function A_7(){var a=new Q2();ALF(a);return a;}
function Ww(){AY4();return Bl6;}
function ALF(a){var b,c,d,e;AY4();WO(a);a.m8=Cg();AHp(BbB(),a);XD(Bae(),a);AD1(Bbx(),a);AJW(Bbd(),a);Yj(Bau(),a);ASJ(Ba5(),a);b=new Cc;L();Vc(b,Bfh,1);c=I(D,5);d=c.data;d[0]=B(616);d[1]=B(616);d[2]=B(616);d[3]=BH(35);BB();d[4]=Bgk;Ci(a,b,c);e=G2(Bfo,1);c=I(D,7);d=c.data;d[0]=B(617);d[1]=B(618);d[2]=B(617);d[3]=BH(88);d[4]=Bgj;d[5]=BH(35);d[6]=Bfe;Ci(a,e,c);e=G2(BeY,3);c=I(D,3);d=c.data;d[0]=B(616);d[1]=BH(35);d[2]=Be3;Ci(a,e,c);e=G2(Bgg,1);c=I(D,5);d=c.data;d[0]=B(619);d[1]=B(616);d[2]=B(619);d[3]=BH(35);d[4]
=Bh$;Ci(a,e,c);e=EL(BiI,1);c=I(D,5);d=c.data;d[0]=B(620);d[1]=B(620);d[2]=B(620);d[3]=BH(35);d[4]=Be5;Ci(a,e,c);e=EL(Bhi,1);c=I(D,7);d=c.data;d[0]=B(616);d[1]=B(616);d[2]=B(621);d[3]=BH(35);d[4]=Be5;d[5]=BH(88);d[6]=Bh$;Ci(a,e,c);e=G2(Be5,4);c=I(D,3);d=c.data;d[0]=B(622);d[1]=BH(35);d[2]=Be6;Ci(a,e,c);e=EL(Bh$,4);c=I(D,4);d=c.data;d[0]=B(622);d[1]=B(622);d[2]=BH(35);d[3]=Be5;Ci(a,e,c);e=G2(Be8,4);c=I(D,6);d=c.data;d[0]=B(72);d[1]=B(622);d[2]=BH(88);d[3]=BhF;d[4]=BH(35);d[5]=Bh$;Ci(a,e,c);e=EL(Bh_,4);c=I(D,4);d
=c.data;d[0]=B(619);d[1]=B(623);d[2]=BH(35);d[3]=Be5;Ci(a,e,c);e=G2(Bhb,16);c=I(D,7);d=c.data;d[0]=B(624);d[1]=B(617);d[2]=B(624);d[3]=BH(88);d[4]=BhV;d[5]=BH(35);d[6]=Bh$;Ci(a,e,c);e=EL(BiM,1);c=I(D,4);d=c.data;d[0]=B(619);d[1]=B(616);d[2]=BH(35);d[3]=BhV;Ci(a,e,c);e=EL(BiJ,1);c=I(D,4);d=c.data;d[0]=B(619);d[1]=B(623);d[2]=BH(35);d[3]=BhV;Ci(a,e,c);e=EL(BhS,1);c=I(D,6);d=c.data;d[0]=B(625);d[1]=B(626);d[2]=BH(65);d[3]=BhV;d[4]=BH(66);d[5]=BhE;Ci(a,e,c);e=EL(Bik,1);c=I(D,3);d=c.data;d[0]=B(616);d[1]=BH(35);d[2]
=BhI;Ci(a,e,c);e=G2(Bg1,4);c=I(D,5);d=c.data;d[0]=B(627);d[1]=B(628);d[2]=B(616);d[3]=BH(35);d[4]=Be5;Ci(a,e,c);e=G2(Bhc,4);c=I(D,5);d=c.data;d[0]=B(627);d[1]=B(628);d[2]=B(616);d[3]=BH(35);d[4]=Be3;Ci(a,e,c);e=EL(BiG,1);c=I(D,7);d=c.data;d[0]=B(616);d[1]=B(618);d[2]=B(616);d[3]=BH(35);d[4]=Bh$;d[5]=BH(88);d[6]=Bfh;Ci(a,e,c);e=EL(BiH,1);c=I(D,7);d=c.data;d[0]=B(616);d[1]=B(618);d[2]=B(616);d[3]=BH(35);d[4]=Bfm;d[5]=BH(88);d[6]=BhT;Ci(a,e,c);RG(a.m8,BaI(a));Co(Dy(),BT(J(Bf(B4(),CX(a.m8)),B(629))));}
function Ci(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=c.data;e=B(3);f=0;g=0;h=0;if(!Sr(d[f],$rt_arraycls(B2))){while(d[f] instanceof B2){i=f+1|0;j=d[f];h=h+1|0;g=Bh(j);k=new T;V(k);e=U(J(J(k,e),j));f=i;}i=f;}else{i=1;l=d[f];m=0;while(true){c=l.data;if(m>=c.length)break;k=c[m];h=h+1|0;g=Bh(k);j=new T;V(j);e=U(J(J(j,e),k));m=m+1|0;}}n=Dd();while(i<d.length){o=d[i];p=0;m=i+1|0;if(d[m] instanceof Bc)p=d[m].cW;else if(d[m] instanceof P)p=d[m].b;BP(n,o,CY(p));i=i+2|0;}i=Bi(g,h);d=$rt_createIntArray(i);c=d.data;p=0;while
(p<i){q=Y(e,p);if(!D0(n,BH(q)))c[p]=(-1);else c[p]=CP(n,BH(q)).f3;p=p+1|0;}e=a.m8;j=new UU;j.H2=b.bB;j.kO=g;j.q0=h;j.xO=d;j.xU=b;S(e,j);}
function RQ(a,b){var c,d;c=0;while(c<a.m8.s){d=Z(a.m8,c);if(ALv(d,b))return AHo(d,b);c=c+1|0;}return null;}
function A4b(){Bl6=A_7();}
function Cm(){var a=this;D.call(a);a.r=null;a.eQ=0;a.CR=null;a.p4=0;}
var Bdj=0;function Bl7(){var a=new Cm();Cy(a);return a;}
function Bl8(a){var b=new Cm();NF(b,a);return b;}
function Cy(a){var b,c;b=new Gk;c=Bdj;Bdj=c+1|0;Ls(b,c);a.CR=MA(b);}
function NF(a,b){var c,d;c=new Gk;d=Bdj;Bdj=d+1|0;Ls(c,d);a.CR=MA(c);a.r=b;}
function Jg(a,b,c,d){var e;e=d.by;while(true){if(b>e)return (-1);if(a.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function Jr(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A4S(a,b){a.p4=b;}
function A4t(a){return a.p4;}
function A0F(a){return a.r;}
function A1q(a,b){a.r=b;}
function A$B(a,b){return 1;}
function A_j(a){return null;}
function K$(a){var b;a.eQ=1;if(a.r!==null){if(!a.r.eQ){b=a.r.lx();if(b!==null){a.r.eQ=1;a.r=b;}a.r.iX();}else if(a.r instanceof IC&&a.r.f4.wS)a.r=a.r.r;}}
function AHC(){Bdj=1;}
function N6(){CQ.call(this);}
function Bl9(){var a=new N6();AVS(a);return a;}
function AVS(a){Cv(a);}
function A9k(a,b){return;}
function A0s(a,b){return;}
function AUM(a){return 0;}
function DW(){var a=this;Cm.call(a);a.wS=0;a.ii=0;}
var Bl4=null;function BcD(a){var b=new DW();Hd(b,a);return b;}
function Hd(a,b){Cy(a);a.ii=b;}
function ATO(a,b,c,d){var e,f;e=JL(d,a.ii);M3(d,a.ii,b);f=a.r.k(b,c,d);if(f<0)M3(d,a.ii,e);return f;}
function A7D(a){return a.ii;}
function AT$(a,b){return 0;}
function AK9(){var b;b=new TV;Cy(b);Bl4=b;}
function HY(){var a=this;D.call(a);a.bF=null;a.l8=0;a.h5=0;a.Bg=0;a.qX=0;a.cH=0;a.H=0;a.DZ=0;a.k2=null;a.jD=null;a.bg=0;a.qg=0;a.ih=0;a.pI=0;a.eP=null;}
var Bl$=null;var Bl2=null;var Bl3=0;function Kv(a){return a.cH;}
function Uc(a,b){if(b>0&&b<3)a.h5=b;if(b==1){a.H=a.cH;a.jD=a.k2;a.bg=a.pI;a.pI=a.ih;GC(a);}}
function AJB(a,b){a.l8=b;a.H=a.cH;a.jD=a.k2;a.bg=a.ih+1|0;a.pI=a.ih;GC(a);}
function PW(a){return a.k2;}
function H5(a){return a.k2===null?0:1;}
function Lk(a){return a.jD===null?0:1;}
function BE(a){GC(a);return a.qX;}
function G8(a){var b;b=a.k2;GC(a);return b;}
function A3Z(a){return a.H;}
function AVX(a){return a.qX;}
function GC(a){var b,c,d,e,f,$$je;a.qX=a.cH;a.cH=a.H;a.k2=a.jD;a.ih=a.pI;a.pI=a.bg;while(true){b=0;a.H=a.bg>=a.bF.data.length?0:Mi(a);a.jD=null;if(a.h5==4){if(a.H!=92)return;a.H=a.bg>=a.bF.data.length?0:a.bF.data[CE(a)];switch(a.H){case 69:break;default:a.H=92;a.bg=a.qg;return;}a.h5=a.Bg;a.H=a.bg>(a.bF.data.length-2|0)?0:Mi(a);}a:{if(a.H!=92){if(a.h5==1)switch(a.H){case 36:a.H=(-536870876);break a;case 40:if(a.bF.data[a.bg]!=63){a.H=(-2147483608);break a;}CE(a);c=a.bF.data[a.bg];d=0;while(true){b:{if(d){d=0;switch
(c){case 33:break;case 61:a.H=(-134217688);CE(a);break b;default:M(CN(B(3),EC(a),a.bg));}a.H=(-67108824);CE(a);}else{switch(c){case 33:break;case 60:CE(a);c=a.bF.data[a.bg];d=1;break b;case 61:a.H=(-536870872);CE(a);break b;case 62:a.H=(-33554392);CE(a);break b;default:a.H=ASn(a);if(a.H<256){a.l8=a.H;a.H=a.H<<16;a.H=(-1073741784)|a.H;break b;}a.H=a.H&255;a.l8=a.H;a.H=a.H<<16;a.H=(-16777176)|a.H;break b;}a.H=(-268435416);CE(a);}}if(!d)break;}break a;case 41:a.H=(-536870871);break a;case 42:case 43:case 63:switch
(a.bg>=a.bF.data.length?42:a.bF.data[a.bg]){case 43:a.H=a.H|(-2147483648);CE(a);break a;case 63:a.H=a.H|(-1073741824);CE(a);break a;default:}a.H=a.H|(-536870912);break a;case 46:a.H=(-536870866);break a;case 91:a.H=(-536870821);Uc(a,2);break a;case 93:if(a.h5!=2)break a;a.H=(-536870819);break a;case 94:a.H=(-536870818);break a;case 123:a.jD=AGw(a,a.H);break a;case 124:a.H=(-536870788);break a;default:}else if(a.h5==2)switch(a.H){case 38:a.H=(-536870874);break a;case 45:a.H=(-536870867);break a;case 91:a.H=(-536870821);break a;case 93:a.H
=(-536870819);break a;case 94:a.H=(-536870818);break a;default:}}else{c=a.bg>=(a.bF.data.length-2|0)?(-1):Mi(a);c:{a.H=c;switch(a.H){case -1:M(CN(B(3),EC(a),a.bg));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.H
=ADR(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.h5!=1)break a;a.H=(-2147483648)|a.H;break a;case 65:a.H=(-2147483583);break a;case 66:a.H=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:M(CN(B(3),EC(a),a.bg));case 68:case 83:case 87:case 100:case 115:case 119:a.jD=QR(Lm(a.bF,
a.qg,1),0);a.H=0;break a;case 71:a.H=(-2147483577);break a;case 80:case 112:break c;case 81:a.Bg=a.h5;a.h5=4;b=1;break a;case 90:a.H=(-2147483558);break a;case 97:a.H=7;break a;case 98:a.H=(-2147483550);break a;case 99:if(a.bg>=(a.bF.data.length-2|0))M(CN(B(3),EC(a),a.bg));a.H=a.bF.data[CE(a)]&31;break a;case 101:a.H=27;break a;case 102:a.H=12;break a;case 110:a.H=10;break a;case 114:a.H=13;break a;case 116:a.H=9;break a;case 117:a.H=UG(a,4);break a;case 120:a.H=UG(a,2);break a;case 122:a.H=(-2147483526);break a;default:}break a;}e
=AOs(a);f=0;if(a.H==80)f=1;try{a.jD=QR(e,f);}catch($$e){$$je=Bj($$e);if($$je instanceof MU){M(CN(B(3),EC(a),a.bg));}else{throw $$e;}}a.H=0;}}if(b)continue;else break;}}
function AOs(a){var b,c,d;b=new T;GD(b,10);if(a.bg<(a.bF.data.length-2|0)){if(a.bF.data[a.bg]!=123){b=new T;V(b);return U(J(J(b,B(630)),Lm(a.bF,CE(a),1)));}CE(a);c=0;a:{while(a.bg<(a.bF.data.length-2|0)){c=a.bF.data[CE(a)];if(c==125)break a;Dw(b,c);}}if(c!=125)M(CN(B(3),a.eP,a.bg));}if(!Kc(b))M(CN(B(3),a.eP,a.bg));d=U(b);if(Bh(d)==1){b=new T;V(b);return U(J(J(b,B(630)),d));}b:{c:{if(Bh(d)>3){if(IB(d,B(630)))break c;if(IB(d,B(631)))break c;}break b;}d=Jw(d,2);}return d;}
function AGw(a,b){var c,d,e,f,$$je;c=new T;GD(c,4);d=(-1);e=2147483647;a:{while(true){if(a.bg>=a.bF.data.length)break a;b=a.bF.data[CE(a)];if(b==125)break a;if(b==44&&d<0)try{d=Lg(BT(c),10);AGM(c,0,Kc(c));continue;}catch($$e){$$je=Bj($$e);if($$je instanceof Ez){break;}else{throw $$e;}}Dw(c,b&65535);}M(CN(B(3),a.eP,a.bg));}if(b!=125)M(CN(B(3),a.eP,a.bg));if(Kc(c)>0)b:{try{e=Lg(BT(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bj($$e);if($$je instanceof Ez){}else{throw $$e;}}M(CN(B(3),a.eP,a.bg));}else if
(d<0)M(CN(B(3),a.eP,a.bg));if((d|e|(e-d|0))<0)M(CN(B(3),a.eP,a.bg));f=a.bg>=a.bF.data.length?42:a.bF.data[a.bg];c:{switch(f){case 43:a.H=(-2147483525);CE(a);break c;case 63:a.H=(-1073741701);CE(a);break c;default:}a.H=(-536870789);}c=new Ts;c.jf=d;c.iq=e;return c;}
function EC(a){return a.eP;}
function Eo(a){return !a.cH&&!a.H&&a.bg==a.DZ&&!H5(a)?1:0;}
function Ns(b){return b<0?0:1;}
function F_(a){return !Eo(a)&&!H5(a)&&Ns(a.cH)?1:0;}
function TU(a){return a.cH<=56319&&a.cH>=55296?1:0;}
function WC(a){return a.cH<=57343&&a.cH>=56320?1:0;}
function Q0(b){return b<=56319&&b>=55296?1:0;}
function PI(b){return b<=57343&&b>=56320?1:0;}
function UG(a,b){var c,d,e,f,$$je;c=new T;GD(c,b);d=a.bF.data.length-2|0;e=0;while(true){f=R(e,b);if(f>=0)break;if(a.bg>=d)break;Dw(c,a.bF.data[CE(a)]);e=e+1|0;}if(!f)a:{try{b=Lg(BT(c),16);}catch($$e){$$je=Bj($$e);if($$je instanceof Ez){break a;}else{throw $$e;}}return b;}M(CN(B(3),a.eP,a.bg));}
function ADR(a){var b,c,d,e,f;b=3;c=1;d=a.bF.data.length-2|0;e=Wp(a.bF.data[a.bg],8);switch(e){case -1:break;default:if(e>3)b=2;CE(a);a:{while(true){if(c>=b)break a;if(a.bg>=d)break a;f=Wp(a.bF.data[a.bg],8);if(f<0)break;e=(e*8|0)+f|0;CE(a);c=c+1|0;}}return e;}M(CN(B(3),a.eP,a.bg));}
function ASn(a){var b,c;b=1;c=a.l8;a:while(true){if(a.bg>=a.bF.data.length)M(CN(B(3),a.eP,a.bg));b:{c:{switch(a.bF.data[a.bg]){case 41:CE(a);return c|256;case 45:if(!b)M(CN(B(3),a.eP,a.bg));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}CE(a);}CE(a);return c;}
function CE(a){var b,c;a.qg=a.bg;if(!(a.l8&4))a.bg=a.bg+1|0;else{b=a.bF.data.length-2|0;a.bg=a.bg+1|0;a:while(true){if(a.bg<b&&Qk(a.bF.data[a.bg])){a.bg=a.bg+1|0;continue;}if(a.bg>=b)break;if(a.bF.data[a.bg]!=35)break;a.bg=a.bg+1|0;while(true){if(a.bg>=b)continue a;c=a.bF.data[a.bg];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.bg=a.bg+1|0;}}}return a.qg;}
function AQW(b){return Bl$.Nk(b);}
function Mi(a){var b,c,d;b=a.bF.data[CE(a)];if(Ds(b)){c=a.qg+1|0;if(c<a.bF.data.length){d=a.bF.data[c];if(DS(d)){CE(a);return EJ(b,d);}}}return b;}
function HF(a){return a.ih;}
function ARg(){var a=this;Cb.call(a);a.AO=null;a.rd=null;a.n6=0;}
function CN(a,b,c){var d=new ARg();A3K(d,a,b,c);return d;}
function A3K(a,b,c,d){O(a);a.n6=(-1);a.AO=b;a.rd=c;a.n6=d;}
function A_f(a){var b,c,d,e,f,g,h,i;b=B(3);if(a.n6>=1){c=$rt_createCharArray(a.n6);d=c.data;e=0;f=d.length;if(e>f){b=new Cb;O(b);M(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=AIf(c);}h=new T;V(h);h=J(h,a.AO);if(a.rd!==null&&Bh(a.rd)){i=new T;V(i);b=U(J(J(J(J(Bf(i,a.n6),B(632)),a.rd),B(632)),b));}else b=B(3);return U(J(h,b));}
function Mz(){CQ.call(this);this.tt=0;}
function Bl_(){var a=new Mz();A4q(a);return a;}
function A4q(a){Cv(a);}
function A8I(a,b){KN(b,a.tt);}
function A8a(a,b){a.tt=N5(b);}
function A6O(a){return 1;}
function M1(){CQ.call(this);this.tm=0;}
function Bma(){var a=new M1();A55(a);return a;}
function A55(a){Cv(a);}
function AWp(a,b){AAe(b,a.tm);}
function AZF(a,b){a.tm=XQ(b);}
function A5Q(a){return 2;}
function Ll(){CQ.call(this);this.r6=0;}
function Bmb(){var a=new Ll();A1O(a);return a;}
function A1O(a){Cv(a);}
function A1_(a,b){JQ(b,a.r6);}
function AZa(a,b){a.r6=H9(b);}
function AVs(a){return 3;}
function Oe(){CQ.call(this);this.s0=Long_ZERO;}
function Bmc(){var a=new Oe();AZ6(a);return a;}
function AZ6(a){Cv(a);}
function ATk(a,b){UM(b,a.s0);}
function A_u(a,b){a.s0=Tp(b);}
function A2M(a){return 4;}
function Pm(){CQ.call(this);this.nk=0.0;}
function Bmd(){var a=new Pm();AZ3(a);return a;}
function A6V(a){var b=new Pm();AVY(b,a);return b;}
function AZ3(a){Cv(a);}
function AVY(a,b){Cv(a);a.nk=b;}
function ATb(a,b){APm(b,a.nk);}
function A74(a,b){a.nk=AA7(b);}
function ASR(a){return 5;}
function Ms(){CQ.call(this);this.iL=0.0;}
function Bme(){var a=new Ms();AZH(a);return a;}
function AZH(a){Cv(a);}
function A66(a,b){APr(b,a.iL);}
function AVa(a,b){a.iL=APp(b);}
function A00(a){return 6;}
function MK(){CQ.call(this);this.ml=null;}
function Bmf(){var a=new MK();A_M(a);return a;}
function A_M(a){Cv(a);}
function A5d(a,b){JQ(b,a.ml.data.length);AOE(b,a.ml);}
function A7n(a,b){a.ml=$rt_createByteArray(H9(b));AMY(b,a.ml);}
function A9H(a){return 7;}
function OK(){CQ.call(this);this.Av=null;}
function Bmg(){var a=new OK();A8r(a);return a;}
function A8r(a){Cv(a);}
function A$Y(a,b){Xw(b,a.Av);}
function AZb(a,b){a.Av=GW(b);}
function ATv(a){return 8;}
function QY(){var a=this;CQ.call(a);a.he=null;a.mV=0;}
function Ma(){var a=new QY();AG$(a);return a;}
function AG$(a){Cv(a);a.he=Cg();}
function A9C(a,b){var c;if(a.he.s<=0)a.mV=1;else a.mV=Z(a.he,0).fc();KN(b,a.mV);JQ(b,a.he.s);c=0;while(c<a.he.s){Z(a.he,c).gN(b);c=c+1|0;}}
function AY6(a,b){var c,d,e;a.mV=N5(b);c=H9(b);a.he=Cg();d=0;while(d<c){e=AE9(a.mV);e.gF(b);S(a.he,e);d=d+1|0;}}
function AYG(a){return 9;}
function Jt(a,b){a.mV=b.fc();S(a.he,b);}
function Fe(a,b){return Z(a.he,b);}
function AOy(a){return a.he.s;}
function TG(){var a=this;D.call(a);a.As=null;a.xc=null;}
function ARN(a){CM(a.As,(UD(a.xc.result)?1:0)?null:A8B(a.xc.result));}
function AUv(a){ARN(a);}
function TF(){D.call(this);this.El=null;}
function XK(a){CM(a.El,null);}
function AXv(a){XK(a);}
function ARX(){var a=this;D.call(a);a.EX=null;a.qh=null;}
function BbB(){var a=new ARX();AXH(a);return a;}
function AXH(a){var b,c,d,e;b=I($rt_arraycls(B2),4);c=b.data;d=I(B2,3);e=d.data;e[0]=B(633);e[1]=B(623);e[2]=B(623);c[0]=d;d=I(B2,3);e=d.data;e[0]=B(72);e[1]=B(622);e[2]=B(622);c[1]=d;d=I(B2,3);e=d.data;e[0]=B(634);e[1]=B(635);e[2]=B(636);c[2]=d;d=I(B2,3);e=d.data;e[0]=B(634);e[1]=B(636);e[2]=B(636);c[3]=d;a.EX=b;b=I($rt_arraycls(D),5);c=b.data;d=I(D,5);e=d.data;L();e[0]=Be5;e[1]=Be3;BB();e[2]=BhV;e[3]=BhG;e[4]=BhW;c[0]=d;d=I(D,5);e=d.data;e[0]=Bh0;e[1]=Bh4;e[2]=BhQ;e[3]=Bh8;e[4]=Bid;c[1]=d;d=I(D,5);e=d.data;e[0]
=BhZ;e[1]=Bh3;e[2]=BhP;e[3]=Bh7;e[4]=Bic;c[2]=d;d=I(D,5);e=d.data;e[0]=Bh1;e[1]=Bh5;e[2]=BhR;e[3]=Bh9;e[4]=Bie;c[3]=d;d=I(D,5);e=d.data;e[0]=Bif;e[1]=Big;e[2]=Bih;e[3]=Bii;e[4]=Bij;c[4]=d;a.qh=b;}
function AHp(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.qh.data[0].data.length){d=a.qh.data[0].data[c];e=0;while(e<(a.qh.data.length-1|0)){f=a.qh.data;g=e+1|0;h=f[g].data[c];i=Qo(h);f=I(D,5);j=f.data;j[0]=a.EX.data[e];j[1]=BH(35);BB();j[2]=Bh$;j[3]=BH(88);j[4]=d;Ci(b,i,f);e=g;}c=c+1|0;}}
function X4(){var a=this;D.call(a);a.Bi=null;a.pu=null;}
function Bae(){var a=new X4();A$t(a);return a;}
function A$t(a){var b,c,d,e;b=I($rt_arraycls(B2),1);c=b.data;d=I(B2,3);e=d.data;e[0]=B(72);e[1]=B(72);e[2]=B(622);c[0]=d;a.Bi=b;b=I($rt_arraycls(D),2);c=b.data;d=I(D,5);e=d.data;L();e[0]=Be5;e[1]=Be3;BB();e[2]=BhV;e[3]=BhG;e[4]=BhW;c[0]=d;d=I(D,5);e=d.data;e[0]=BhY;e[1]=Bh2;e[2]=BhX;e[3]=Bh6;e[4]=Bib;c[1]=d;a.pu=b;}
function XD(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.pu.data[0].data.length){d=a.pu.data[0].data[c];e=0;while(e<(a.pu.data.length-1|0)){f=a.pu.data;g=e+1|0;h=f[g].data[c];i=Qo(h);j=I(D,5);k=j.data;k[0]=a.Bi.data[e];k[1]=BH(35);BB();k[2]=Bh$;k[3]=BH(88);k[4]=d;Ci(b,i,j);e=g;}c=c+1|0;}h=new Cc;BB();Gq(h,BhU,1);f=I(D,7);k=f.data;k[0]=B(637);k[1]=B(638);k[2]=B(637);k[3]=BH(88);k[4]=Bgk;k[5]=BH(35);k[6]=Bh$;Ci(b,h,f);d=EL(Bgi,4);f=I(D,9);k=f.data;k[0]=B(72);k[1]=B(622);k[2]=B(48);k[3]=BH(89);k[4]=Bgh;k[5]=BH(88);k[6]
=BhV;k[7]=BH(35);k[8]=Bh$;Ci(b,d,f);}
function XX(){D.call(this);this.ss=null;}
function Bbx(){var a=new XX();A2h(a);return a;}
function A2h(a){var b,c,d,e;b=I($rt_arraycls(D),3);c=b.data;d=I(D,2);e=d.data;L();e[0]=Bfm;BB();e[1]=BhW;c[0]=d;d=I(D,2);e=d.data;e[0]=Bfl;e[1]=BhV;c[1]=d;d=I(D,2);e=d.data;e[0]=Bg5;e[1]=BhG;c[2]=d;a.ss=b;}
function AD1(a,b){var c,d,e,f,g,h;c=0;while(c<a.ss.data.length){d=a.ss.data[c].data[0];e=a.ss.data[c].data[1];f=AL7(d);g=I(D,5);h=g.data;h[0]=B(616);h[1]=B(616);h[2]=B(616);h[3]=BH(35);h[4]=e;Ci(b,f,g);f=EL(e,9);g=I(D,3);h=g.data;h[0]=B(622);h[1]=BH(35);h[2]=d;Ci(b,f,g);c=c+1|0;}}
function AEf(){D.call(this);}
function Bbd(){var a=new AEf();A0I(a);return a;}
function A0I(a){return;}
function AJW(a,b){var c,d,e;c=new Cc;BB();DD(c,Bia);d=I(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(622);e[3]=BH(88);L();e[4]=Bfc;e[5]=BH(89);e[6]=Bfd;e[7]=BH(35);e[8]=Bh_;Ci(b,c,d);c=Qo(Bia);d=I(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(622);e[3]=BH(88);e[4]=Bfd;e[5]=BH(89);e[6]=Bfc;e[7]=BH(35);e[8]=Bh_;Ci(b,c,d);}
function ARW(){D.call(this);}
function Bau(){var a=new ARW();A6Y(a);return a;}
function A6Y(a){return;}
function Yj(a,b){var c,d,e;c=new Cc;L();AH5(c,Bg2);d=I(D,5);e=d.data;e[0]=B(616);e[1]=B(619);e[2]=B(616);e[3]=BH(35);e[4]=Be5;Ci(b,c,d);c=AL7(Bg9);d=I(D,5);e=d.data;e[0]=B(616);e[1]=B(619);e[2]=B(616);e[3]=BH(35);e[4]=Be3;Ci(b,c,d);c=AL7(Bg6);d=I(D,4);e=d.data;e[0]=B(620);e[1]=B(620);e[2]=BH(35);e[3]=Be5;Ci(b,c,d);}
function AFc(){var a=this;D.call(a);a.zG=null;a.n3=null;}
function Ba5(){var a=new AFc();AVc(a);return a;}
function AVc(a){var b,c,d,e;b=I($rt_arraycls(B2),4);c=b.data;d=I(B2,2);e=d.data;e[0]=B(633);e[1]=B(624);c[0]=d;d=I(B2,3);e=d.data;e[0]=B(624);e[1]=B(633);e[2]=B(633);c[1]=d;d=I(B2,3);e=d.data;e[0]=B(633);e[1]=B(624);e[2]=B(624);c[2]=d;d=I(B2,2);e=d.data;e[0]=B(624);e[1]=B(624);c[3]=d;a.zG=b;b=I($rt_arraycls(D),5);c=b.data;d=I(D,5);e=d.data;L();e[0]=Bfh;e[1]=Bgu;BB();e[2]=BhV;e[3]=BhG;e[4]=BhW;c[0]=d;d=I(D,5);e=d.data;e[0]=Bil;e[1]=Bip;e[2]=Bit;e[3]=Bix;e[4]=BiB;c[1]=d;d=I(D,5);e=d.data;e[0]=Bim;e[1]=Biq;e[2]
=Biu;e[3]=Biy;e[4]=BiC;c[2]=d;d=I(D,5);e=d.data;e[0]=Bin;e[1]=Bir;e[2]=Biv;e[3]=Biz;e[4]=BiD;c[3]=d;d=I(D,5);e=d.data;e[0]=Bio;e[1]=Bis;e[2]=Biw;e[3]=BiA;e[4]=BiE;c[4]=d;a.n3=b;}
function ASJ(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.n3.data[0].data.length){d=a.n3.data[0].data[c];e=0;while(e<(a.n3.data.length-1|0)){f=a.n3.data;g=e+1|0;h=f[g].data[c];i=Qo(h);f=I(D,3);j=f.data;j[0]=a.zG.data[e];j[1]=BH(88);j[2]=d;Ci(b,i,f);e=g;}c=c+1|0;}}
function Yq(){D.call(this);this.IW=null;}
function BaI(a){var b=new Yq();AYB(b,a);return b;}
function AYB(a,b){a.IW=b;}
function AMJ(a,b,c){return Kr(c)<Kr(b)?(-1):Kr(c)<=Kr(b)?0:1;}
function AZC(a,b,c){return AMJ(a,b,c);}
function QK(){DW.call(this);}
function A3C(a,b,c,d){var e;e=a.ii;Cu(d,e,b-Ep(d,e)|0);return a.r.k(b,c,d);}
function A9D(a,b){return 0;}
function ASd(){DW.call(this);}
function Bby(){var a=new ASd();A2Y(a);return a;}
function A2Y(a){Hd(a,(-1));}
function A4R(a,b,c,d){return b;}
function PZ(){DW.call(this);}
function AUe(a,b,c,d){if(Ep(d,a.ii)!=b)b=(-1);return b;}
function Q_(){DW.call(this);this.wG=0;}
function A3E(a,b,c,d){var e;e=a.ii;Cu(d,e,b-Ep(d,e)|0);a.wG=b;return b;}
function AUj(a){return a.wG;}
function A8S(a,b){return 0;}
function HW(){DW.call(this);}
function Bb9(){var a=new HW();A$r(a);return a;}
function A$r(a){Hd(a,0);}
function A1B(a,b,c,d){if(d.nr!=1&&b!=d.by)return (-1);ARD(d);M3(d,0,b);return b;}
function CI(){Cm.call(this);this.dl=0;}
function Bmh(){var a=new CI();EN(a);return a;}
function EN(a){Cy(a);a.dl=1;}
function A_D(a,b,c,d){var e;if((b+a.ea()|0)>d.by){d.hr=1;return (-1);}e=a.dn(b,c);if(e<0)return (-1);return a.r.k(b+e|0,c,d);}
function A$d(a){return a.dl;}
function AXb(a,b){return 1;}
function AFZ(){CI.call(this);}
function IK(a){var b=new AFZ();A7K(b,a);return b;}
function A7K(a,b){NF(a,b);a.dl=1;a.p4=1;a.dl=0;}
function A9R(a,b,c){return 0;}
function A5G(a,b,c,d){var e,f,g;e=d.by;f=d.fg;while(true){g=R(b,e);if(g>0)return (-1);if(g<0&&DS(Y(c,b))&&b>f&&Ds(Y(c,b-1|0))){b=b+1|0;continue;}if(a.r.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function A4I(a,b,c,d,e){var f,g;f=e.by;g=e.fg;while(true){if(c<b)return (-1);if(c<f&&DS(Y(d,c))&&c>g&&Ds(Y(d,c-1|0))){c=c+(-1)|0;continue;}if(a.r.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A3D(a,b){return 0;}
function CD(){var a=this;Cm.call(a);a.dm=null;a.f4=null;a.cK=0;}
function Bmi(){var a=new CD();A4E(a);return a;}
function BaJ(a,b){var c=new CD();GS(c,a,b);return c;}
function A4E(a){Cy(a);}
function GS(a,b,c){Cy(a);a.dm=b;a.f4=c;a.cK=c.ii;}
function AWw(a,b,c,d){var e,f,g,h;if(a.dm===null)return (-1);e=Ho(d,a.cK);EM(d,a.cK,b);f=a.dm.s;g=0;while(true){if(g>=f){EM(d,a.cK,e);return (-1);}h=Z(a.dm,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AZq(a,b){a.f4.r=b;}
function A7j(a,b){var c;a:{if(a.dm!==null){c=Jm(a.dm);while(true){if(!KF(c))break a;if(!KV(c).d3(b))continue;else return 1;}}}return 0;}
function AZX(a,b){return JL(b,a.cK)>=0&&Ho(b,a.cK)==JL(b,a.cK)?0:1;}
function AUN(a){var b,c,d,e;a.eQ=1;if(a.f4!==null&&!a.f4.eQ)K$(a.f4);a:{if(a.dm!==null){b=a.dm.s;c=0;while(true){if(c>=b)break a;d=Z(a.dm,c);e=d.lx();if(e===null)e=d;else{d.eQ=1;En(a.dm,c);AMO(a.dm,c,e);}if(!e.eQ)e.iX();c=c+1|0;}}}if(a.r!==null)K$(a);}
function K3(){CD.call(this);}
function Bmj(){var a=new K3();AX2(a);return a;}
function AX2(a){Cy(a);}
function AZi(a,b,c,d){var e,f,g,h;e=Ep(d,a.cK);Cu(d,a.cK,b);f=a.dm.s;g=0;while(true){if(g>=f){Cu(d,a.cK,e);return (-1);}h=Z(a.dm,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A9p(a,b){return !Ep(b,a.cK)?0:1;}
function EY(){K3.call(this);}
function A49(a,b,c,d){var e,f,g;e=Ep(d,a.cK);Cu(d,a.cK,b);f=a.dm.s;g=0;while(g<f){if(Z(a.dm,g).k(b,c,d)>=0)return a.r.k(a.f4.wG,c,d);g=g+1|0;}Cu(d,a.cK,e);return (-1);}
function A8$(a,b){a.r=b;}
function Ti(){EY.call(this);}
function AZm(a,b,c,d){var e,f;e=a.dm.s;f=0;while(f<e){if(Z(a.dm,f).k(b,c,d)>=0)return a.r.k(b,c,d);f=f+1|0;}return (-1);}
function A1s(a,b){return 0;}
function WR(){EY.call(this);}
function AT3(a,b,c,d){var e,f;e=a.dm.s;f=0;while(true){if(f>=e)return a.r.k(b,c,d);if(Z(a.dm,f).k(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A$h(a,b){return 0;}
function Vi(){EY.call(this);}
function AUK(a,b,c,d){var e,f,g,h;e=a.dm.s;f=d.oe?0:d.fg;a:{g=a.r.k(b,c,d);if(g>=0){Cu(d,a.cK,b);h=0;while(true){if(h>=e)break a;if(Z(a.dm,h).eW(f,b,c,d)>=0){Cu(d,a.cK,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_R(a,b){return 0;}
function Rn(){EY.call(this);}
function A3f(a,b,c,d){var e,f;e=a.dm.s;Cu(d,a.cK,b);f=0;while(true){if(f>=e)return a.r.k(b,c,d);if(Z(a.dm,f).eW(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A9v(a,b){return 0;}
function IC(){CD.call(this);this.fo=null;}
function Bcv(a,b){var c=new IC();Z4(c,a,b);return c;}
function Z4(a,b,c){Cy(a);a.fo=b;a.f4=c;a.cK=c.ii;}
function ATi(a,b,c,d){var e,f;e=Ho(d,a.cK);EM(d,a.cK,b);f=a.fo.k(b,c,d);if(f>=0)return f;EM(d,a.cK,e);return (-1);}
function AYd(a,b,c,d){var e;e=a.fo.eI(b,c,d);if(e>=0)EM(d,a.cK,e);return e;}
function A9G(a,b,c,d,e){var f;f=a.fo.eW(b,c,d,e);if(f>=0)EM(e,a.cK,f);return f;}
function A7f(a,b){return a.fo.d3(b);}
function A8Q(a){var b;b=new OV;Z4(b,a.fo,a.f4);a.r=b;return b;}
function A17(a){var b;a.eQ=1;if(a.f4!==null&&!a.f4.eQ)K$(a.f4);if(a.fo!==null&&!a.fo.eQ){b=a.fo.lx();if(b!==null){a.fo.eQ=1;a.fo=b;}a.fo.iX();}}
function H2(){D.call(this);}
function Bm(){var a=this;H2.call(a);a.ck=0;a.dP=0;a.b$=null;a.qb=null;a.qF=null;a.ca=0;}
var Bmk=null;function Bml(){var a=new Bm();BY(a);return a;}
function BY(a){var b;b=new W4;b.bx=$rt_createIntArray(64);a.b$=b;}
function A4g(a){return null;}
function A3O(a){return a.b$;}
function AN2(a){return !a.dP?(I4(a.b$,0)>=2048?0:1):AEv(a.b$,0)>=2048?0:1;}
function A6f(a){return a.ca;}
function A99(a){return a;}
function Y2(a){var b,c;if(a.qF===null){b=a.kn();c=new Sv;c.Jr=a;c.Cr=b;BY(c);a.qF=c;Fz(a.qF,a.dP);}return a.qF;}
function Kd(a){var b,c;if(a.qb===null){b=a.kn();c=new Su;c.GN=a;c.Ez=b;c.Bj=a;BY(c);a.qb=c;Fz(a.qb,a.ck);a.qb.ca=a.ca;}return a.qb;}
function A_g(a){return 0;}
function Fz(a,b){if(a.ck^b){a.ck=a.ck?0:1;a.dP=a.dP?0:1;}if(!a.ca)a.ca=1;return a;}
function AV1(a){return a.ck;}
function KH(b,c){if(b.hE()!==null&&c.hE()!==null)return AD_(b.hE(),c.hE());return 1;}
function QR(b,c){return APU(ARx(Bmk,b),c);}
function Z8(){Bmk=new Ia;}
function ZS(){var a=this;Bm.call(a);a.xH=0;a.y6=0;a.nm=0;a.uN=0;a.ix=0;a.ll=0;a.b6=null;a.c5=null;}
function Eq(){var a=new ZS();A2A(a);return a;}
function A$L(a,b){var c=new ZS();AU2(c,a,b);return c;}
function A2A(a){BY(a);a.b6=A_T();}
function AU2(a,b,c){BY(a);a.b6=A_T();a.xH=b;a.y6=c;}
function Do(a,b){a:{if(a.xH){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ix){OF(a.b6,Kg(b&65535));break a;}Me(a.b6,Kg(b&65535));break a;}if(a.y6&&b>128){a.nm=1;b=GP(GO(b));}}}if(!(!Q0(b)&&!PI(b))){if(a.uN)OF(a.b$,b-55296|0);else Me(a.b$,b-55296|0);}if(a.ix)OF(a.b6,b);else Me(a.b6,b);if(!a.ca&&My(b))a.ca=1;return a;}
function ASz(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(a.uN){if(!b.dP)G1(a.b$,b.kn());else Ec(a.b$,b.kn());}else if(!b.dP)Ht(a.b$,b.kn());else{Hg(a.b$,b.kn());Ec(a.b$,b.kn());a.dP=a.dP?0:1;a.uN=1;}if(!a.ll&&b.hE()!==null){if(a.ix){if(!b.ck)G1(a.b6,b.hE());else Ec(a.b6,b.hE());}else if(!b.ck)Ht(a.b6,b.hE());else{Hg(a.b6,b.hE());Ec(a.b6,b.hE());a.ck=a.ck?0:1;a.ix=1;}}else{c=a.ck;if(a.c5!==null){d=a.c5;if(!c){e=new T6;e.HJ=a;e.E1=c;e.Bd=d;e.A8=b;BY(e);a.c5=e;}else{e=new T7;e.JP=a;e.Ag=c;e.DA=d;e.Dh=b;BY(e);a.c5=
e;}}else{if(c&&!a.ix&&Ov(a.b6)){d=new T3;d.IC=a;d.DF=b;BY(d);a.c5=d;}else if(!c){d=new T1;d.xf=a;d.wu=c;d.CM=b;BY(d);a.c5=d;}else{d=new T2;d.vj=a;d.tS=c;d.A_=b;BY(d);a.c5=d;}a.ll=1;}}return a;}
function CG(a,b,c){var d;if(b>c){d=new Cb;O(d);M(d);}a:{b:{if(!a.xH){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Do(a,b);b=b+1|0;}}if(a.ix)AII(a.b6,b,c+1|0);else Js(a.b6,b,c+1|0);}return a;}
function AIh(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(b.nm)a.nm=1;if(!(a.dP^b.dP)){if(!a.dP)Ht(a.b$,b.b$);else Ec(a.b$,b.b$);}else if(a.dP)G1(a.b$,b.b$);else{Hg(a.b$,b.b$);Ec(a.b$,b.b$);a.dP=1;}if(!a.ll&&DY(b)!==null){if(!(a.ck^b.ck)){if(!a.ck)Ht(a.b6,DY(b));else Ec(a.b6,DY(b));}else if(a.ck)G1(a.b6,DY(b));else{Hg(a.b6,DY(b));Ec(a.b6,DY(b));a.ck=1;}}else{c=a.ck;if(a.c5!==null){d=a.c5;if(!c){e=new Pw;e.Fu=a;e.AR=c;e.EG=d;e.Bt=b;BY(e);a.c5=e;}else{e=new PK;e.FJ=a;e.EU=c;e.y2=d;e.y8=b;BY(e);a.c5=e;}}else{if(!a.ix
&&Ov(a.b6)){if(!c){d=new T4;d.JR=a;d.zT=b;BY(d);a.c5=d;}else{d=new T5;d.HT=a;d.EL=b;BY(d);a.c5=d;}}else if(!c){d=new T9;d.AV=a;d.Aj=b;d.DC=c;BY(d);a.c5=d;}else{d=new T$;d.Au=a;d.AB=b;d.D5=c;BY(d);a.c5=d;}a.ll=1;}}}
function SC(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(b.nm)a.nm=1;if(!(a.dP^b.dP)){if(!a.dP)Ec(a.b$,b.b$);else Ht(a.b$,b.b$);}else if(!a.dP)G1(a.b$,b.b$);else{Hg(a.b$,b.b$);Ec(a.b$,b.b$);a.dP=0;}if(!a.ll&&DY(b)!==null){if(!(a.ck^b.ck)){if(!a.ck)Ec(a.b6,DY(b));else Ht(a.b6,DY(b));}else if(!a.ck)G1(a.b6,DY(b));else{Hg(a.b6,DY(b));Ec(a.b6,DY(b));a.ck=0;}}else{c=a.ck;if(a.c5!==null){d=a.c5;if(!c){e=new Py;e.HI=a;e.En=c;e.Cp=d;e.Af=b;BY(e);a.c5=e;}else{e=new Pz;e.HZ=a;e.Ec=c;e.B4=d;e.Em=b;BY(e);a.c5=e;}}else{if(!a.ix
&&Ov(a.b6)){if(!c){d=new Pu;d.FM=a;d.C0=b;BY(d);a.c5=d;}else{d=new Pv;d.JM=a;d.zM=b;BY(d);a.c5=d;}}else if(!c){d=new PA;d.Fh=a;d.E0=b;d.AA=c;BY(d);a.c5=d;}else{d=new Pt;d.Ay=a;d.Eg=b;d.DJ=c;BY(d);a.c5=d;}a.ll=1;}}}
function D6(a,b){if(a.c5!==null)return a.ck^a.c5.X(b);return a.ck^EK(a.b6,b);}
function DY(a){if(!a.ll)return a.b6;return null;}
function A5z(a){return a.b$;}
function A1i(a){var b,c;if(a.c5!==null)return a;b=DY(a);c=new Px;c.Ht=a;c.sg=b;BY(c);return Fz(c,a.ck);}
function A76(a){var b,c;b=new T;V(b);c=I4(a.b6,0);while(c>=0){Hl(b,Iz(c));Dw(b,124);c=I4(a.b6,c+1|0);}if(b.bY>0)Sp(b,b.bY-1|0);return U(b);}
function AV2(a){return a.nm;}
function MU(){var a=this;B6.call(a);a.Hb=null;a.Jv=null;}
function E6(){Cm.call(this);this.bQ=null;}
function Bmm(a,b,c){var d=new E6();Ef(d,a,b,c);return d;}
function Ef(a,b,c,d){NF(a,c);a.bQ=b;a.p4=d;}
function A_I(a){return a.bQ;}
function A0v(a,b){return !a.bQ.d3(b)&&!a.r.d3(b)?0:1;}
function A$N(a,b){return 1;}
function AYA(a){var b;a.eQ=1;if(a.r!==null&&!a.r.eQ){b=a.r.lx();if(b!==null){a.r.eQ=1;a.r=b;}a.r.iX();}if(a.bQ!==null){if(!a.bQ.eQ){b=a.bQ.lx();if(b!==null){a.bQ.eQ=1;a.bQ=b;}a.bQ.iX();}else if(a.bQ instanceof IC&&a.bQ.f4.wS)a.bQ=a.bQ.r;}}
function D8(){E6.call(this);this.cN=null;}
function Ba0(a,b,c){var d=new D8();F6(d,a,b,c);return d;}
function F6(a,b,c,d){Ef(a,b,c,d);a.cN=b;}
function A3g(a,b,c,d){var e,f;e=0;a:{while((b+a.cN.ea()|0)<=d.by){f=a.cN.dn(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.r.k(b,c,d);if(f>=0)break;b=b-a.cN.ea()|0;e=e+(-1)|0;}return f;}
function GE(){D8.call(this);this.kZ=null;}
function Bb1(a,b,c,d){var e=new GE();QU(e,a,b,c,d);return e;}
function QU(a,b,c,d,e){F6(a,c,d,e);a.kZ=b;}
function A35(a,b,c,d){var e,f,g,h;e=a.kZ.jf;f=a.kZ.iq;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.cN.ea()|0)>d.by)break a;h=a.cN.dn(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.r.k(b,c,d);if(h>=0)break;b=b-a.cN.ea()|0;g=g+(-1)|0;}return h;}if((b+a.cN.ea()|0)>d.by){d.hr=1;return (-1);}h=a.cN.dn(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function DX(){E6.call(this);}
function A3v(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.bQ.k(b,c,d);if(e>=0)return e;return a.r.k(b,c,d);}
function FX(){D8.call(this);}
function A7t(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<0)e=a.r.k(b,c,d);return e;}
function A2R(a,b){a.r=b;a.bQ.cb(b);}
function Sx(){D8.call(this);}
function A_y(a,b,c,d){while((b+a.cN.ea()|0)<=d.by&&a.cN.dn(b,c)>0){b=b+a.cN.ea()|0;}return a.r.k(b,c,d);}
function AYQ(a,b,c,d){var e,f,g;e=a.r.eI(b,c,d);if(e<0)return (-1);f=e-a.cN.ea()|0;while(f>=b&&a.cN.dn(f,c)>0){g=f-a.cN.ea()|0;e=f;f=g;}return e;}
function Ez(){Cb.call(this);}
function Bmn(){var a=new Ez();A3T(a);return a;}
function A3T(a){O(a);}
function Ts(){var a=this;H2.call(a);a.jf=0;a.iq=0;}
function A56(a){return a.jf;}
function A$H(a){return a.iq;}
function A8d(a){var b;b=new T;V(b);return U(J(J(J(Bf(J(b,B(639)),a.jf),B(640)),a.iq==2147483647?B(3):MA(AQV(a.iq))),B(641)));}
function TV(){Cm.call(this);}
function Bmo(){var a=new TV();A_H(a);return a;}
function A_H(a){Cy(a);}
function AXA(a,b,c,d){return b;}
function A8P(a,b){return 0;}
function W4(){var a=this;D.call(a);a.bx=null;a.cn=0;}
function A_T(){var a=new W4();A4A(a);return a;}
function A4A(a){a.bx=$rt_createIntArray(0);}
function Me(a,b){var c,d;c=b/32|0;if(b>=a.cn){KK(a,c+1|0);a.cn=b+1|0;}d=a.bx.data;d[c]=d[c]|1<<(b%32|0);}
function Js(a,b,c){var d,e,f,g,h;if(b>c){d=new BM;O(d);M(d);}e=b/32|0;f=c/32|0;if(c>a.cn){KK(a,f+1|0);a.cn=c;}if(e==f){g=a.bx.data;g[e]=g[e]|Jl(a,b)&KE(a,c);}else{g=a.bx.data;g[e]=g[e]|Jl(a,b);h=e+1|0;while(h<f){a.bx.data[h]=(-1);h=h+1|0;}g=a.bx.data;g[f]=g[f]|KE(a,c);}}
function Jl(a,b){return (-1)<<(b%32|0);}
function KE(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function OF(a,b){var c,d;c=b/32|0;if(c<a.bx.data.length){d=a.bx.data;d[c]=d[c]&Nq((-2),b%32|0);if(b==(a.cn-1|0))Ic(a);}}
function AII(a,b,c){var d,e,f,g,h;if(b>c){d=new BM;O(d);M(d);}if(b>=a.cn)return;c=CA(a.cn,c);e=b/32|0;f=c/32|0;if(e==f){g=a.bx.data;g[e]=g[e]&(KE(a,b)|Jl(a,c));}else{g=a.bx.data;g[e]=g[e]&KE(a,b);h=e+1|0;while(h<f){a.bx.data[h]=0;h=h+1|0;}g=a.bx.data;g[f]=g[f]&Jl(a,c);}Ic(a);}
function EK(a,b){var c;c=b/32|0;return c<a.bx.data.length&&a.bx.data[c]&1<<(b%32|0)?1:0;}
function I4(a,b){var c,d,e;if(b>=a.cn)return (-1);c=b/32|0;d=a.bx.data[c]>>>(b%32|0);if(d)return JH(d)+b|0;d=(a.cn+31|0)/32|0;e=c+1|0;while(e<d){if(a.bx.data[e])return (e*32|0)+JH(a.bx.data[e])|0;e=e+1|0;}return (-1);}
function AEv(a,b){var c,d,e;if(b>=a.cn)return b;c=b/32|0;d=(a.bx.data[c]^(-1))>>>(b%32|0);if(d)return JH(d)+b|0;d=(a.cn+31|0)/32|0;e=c+1|0;while(e<d){if(a.bx.data[e]!=(-1))return (e*32|0)+JH(a.bx.data[e]^(-1))|0;e=e+1|0;}return a.cn;}
function KK(a,b){var c,d,e,f;if(a.bx.data.length>=b)return;c=DE((b*3|0)/2|0,(a.bx.data.length*2|0)+1|0);d=a.bx.data;e=$rt_createIntArray(c);f=e.data;b=CA(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.bx=e;}
function Ic(a){var b,c,d;b=(a.cn+31|0)/32|0;a.cn=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=TE(a.bx.data[c]);if(d<32)break;c=c+(-1)|0;a.cn=a.cn-32|0;}a.cn=a.cn-d|0;}}
function AD_(a,b){var c,d;c=CA(a.bx.data.length,b.bx.data.length);d=0;while(d<c){if(a.bx.data[d]&b.bx.data[d])return 1;d=d+1|0;}return 0;}
function Ec(a,b){var c,d,e;c=CA(a.bx.data.length,b.bx.data.length);d=0;while(d<c){e=a.bx.data;e[d]=e[d]&b.bx.data[d];d=d+1|0;}while(c<a.bx.data.length){a.bx.data[c]=0;c=c+1|0;}a.cn=CA(a.cn,b.cn);Ic(a);}
function G1(a,b){var c,d,e;c=CA(a.bx.data.length,b.bx.data.length);d=0;while(d<c){e=a.bx.data;e[d]=e[d]&(b.bx.data[d]^(-1));d=d+1|0;}Ic(a);}
function Ht(a,b){var c,d,e;a.cn=DE(a.cn,b.cn);KK(a,(a.cn+31|0)/32|0);c=CA(a.bx.data.length,b.cn);d=0;while(d<c){e=a.bx.data;e[d]=e[d]|b.bx.data[d];d=d+1|0;}}
function Hg(a,b){var c,d,e;a.cn=DE(a.cn,b.cn);KK(a,(a.cn+31|0)/32|0);c=CA(a.bx.data.length,b.cn);d=0;while(d<c){e=a.bx.data;e[d]=e[d]^b.bx.data[d];d=d+1|0;}Ic(a);}
function Ov(a){return a.cn?0:1;}
function ON(){var a=this;CD.call(a);a.zP=null;a.Hs=0;}
function A5I(a,b){a.r=b;}
function ABN(a,b,c,d){var e,f,g,h,i;e=d.fg;f=d.by;g=b+1|0;h=R(g,f);if(h>0){d.hr=1;return (-1);}i=Y(c,b);if(!a.zP.X(i))return (-1);if(Ds(i)){if(h<0&&DS(Y(c,g)))return (-1);}else if(DS(i)&&b>e&&Ds(Y(c,b-1|0)))return (-1);return a.r.k(g,c,d);}
function Qa(){var a=this;CD.call(a);a.vO=null;a.xR=null;}
function AEr(a,b){var c=new Qa();AHn(c,a,b);return c;}
function AHn(a,b,c){Cy(a);a.vO=b;a.xR=c;}
function ATM(a,b,c,d){var e;e=a.vO.k(b,c,d);if(e<0)e=ABN(a.xR,b,c,d);if(e>=0)return e;return (-1);}
function A8C(a,b){a.r=b;a.xR.r=b;a.vO.cb(b);}
function AUk(a,b){return 1;}
function AT6(a,b){return 1;}
function EP(){var a=this;CD.call(a);a.h1=null;a.Gg=0;}
function A6W(a){var b=new EP();Wk(b,a);return b;}
function Wk(a,b){Cy(a);a.h1=b.sO();a.Gg=b.ck;}
function A5s(a,b,c,d){var e,f,g;e=d.by;if(b<e){f=b+1|0;g=Y(c,b);if(a.X(g)){b=a.r.k(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=Y(c,f);if(J9(g,f)&&a.X(EJ(g,f)))return a.r.k(b,c,d);}}return (-1);}
function AWd(a,b){return a.h1.X(b);}
function ATH(a,b){if(b instanceof E0)return a.h1.X(b.ky);if(b instanceof Fw)return a.h1.X(b.gt);if(b instanceof EP)return KH(a.h1,b.h1);if(!(b instanceof Fp))return 1;return KH(a.h1,b.j3);}
function AXo(a){return a.h1;}
function A95(a,b){a.r=b;}
function AVW(a,b){return 1;}
function MT(){EP.call(this);}
function AXc(a,b){return a.h1.X(GP(GO(b)));}
function ZC(){var a=this;CI.call(a);a.Dn=null;a.F4=0;}
function AWM(a){var b=new ZC();AYW(b,a);return b;}
function AYW(a,b){EN(a);a.Dn=b.sO();a.F4=b.ck;}
function A60(a,b,c){return !a.Dn.X(EW(FF(Y(c,b))))?(-1):1;}
function Fp(){var a=this;CI.call(a);a.j3=null;a.Gz=0;}
function A1e(a){var b=new Fp();AZL(b,a);return b;}
function AZL(a,b){EN(a);a.j3=b.sO();a.Gz=b.ck;}
function Tb(a,b,c){return !a.j3.X(Y(c,b))?(-1):1;}
function AZt(a,b){if(b instanceof Fw)return a.j3.X(b.gt);if(b instanceof Fp)return KH(a.j3,b.j3);if(!(b instanceof EP)){if(!(b instanceof E0))return 1;return 0;}return KH(a.j3,b.h1);}
function A8E(a){return a.j3;}
function Ua(){var a=this;CD.call(a);a.jV=null;a.x8=null;a.ox=0;}
function A$A(a,b){var c=new Ua();A3y(c,a,b);return c;}
function A3y(a,b,c){Cy(a);a.jV=b;a.ox=c;}
function AYh(a,b){a.r=b;}
function Qd(a){if(a.x8===null)a.x8=AIf(a.jV);return a.x8;}
function ASY(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.by;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Y(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.ox)return (-1);while(true){if(l>=a.ox)return a.r.k(i,c,d);if(m[l]!=a.jV.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Y(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Y(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.ox==3&&f[0]==a.jV.data[0]&&f[1]==a.jV.data[1]&&f[2]==a.jV.data[2]?a.r.k(b,c,d):(-1);}return a.ox==2&&f[0]==a.jV.data[0]&&f[1]==a.jV.data[1]?a.r.k(k,c,d):(-1);}return (-1);}return (-1);}
function A4m(a,b){return b instanceof Ua&&!DC(Qd(b),Qd(a))?0:1;}
function A1l(a,b){return 1;}
function Fw(){CI.call(this);this.gt=0;}
function AAm(a){var b=new Fw();AZN(b,a);return b;}
function AZN(a,b){EN(a);a.gt=b;}
function A6S(a){return 1;}
function AWI(a,b,c){return a.gt!=Y(c,b)?(-1):1;}
function AVK(a,b,c,d){var e,f,g,h;if(!(c instanceof B2))return Jg(a,b,c,d);e=c;f=d.by;while(true){if(b>=f)return (-1);g=Hk(e,a.gt,b);if(g<0)return (-1);h=a.r;b=g+1|0;if(h.k(b,c,d)>=0)break;}return g;}
function AXp(a,b,c,d,e){var f,g;if(!(d instanceof B2))return Jr(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=Il(f,a.gt,c);if(g<0)break a;if(g<b)break a;if(a.r.k(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AT4(a){return a.gt;}
function A1f(a,b){if(b instanceof Fw)return b.gt!=a.gt?0:1;if(!(b instanceof Fp)){if(b instanceof EP)return b.X(a.gt);if(!(b instanceof E0))return 1;return 0;}return Tb(b,0,SJ(a.gt))<=0?0:1;}
function AGW(){CI.call(this);this.BU=0;}
function A9e(a){var b=new AGW();A7Z(b,a);return b;}
function A7Z(a,b){EN(a);a.BU=EW(FF(b));}
function A20(a,b,c){return a.BU!=EW(FF(Y(c,b)))?(-1):1;}
function XV(){var a=this;CI.call(a);a.Bu=0;a.Ch=0;}
function A4D(a){var b=new XV();A0k(b,a);return b;}
function A0k(a,b){EN(a);a.Bu=b;a.Ch=Kg(b);}
function ATd(a,b,c){return a.Bu!=Y(c,b)&&a.Ch!=Y(c,b)?(-1):1;}
function GJ(){var a=this;CD.call(a);a.pW=0;a.ul=null;a.tO=null;a.tM=0;}
function Bc4(a,b){var c=new GJ();Pj(c,a,b);return c;}
function Pj(a,b,c){Cy(a);a.pW=1;a.tO=b;a.tM=c;}
function A_l(a,b){a.r=b;}
function AZh(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.by;if(b>=f)return (-1);g=LK(a,b,c,f);h=b+a.pW|0;i=AQW(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dh(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LK(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=AQW(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.pW|0;if(h>=f){b=k;break a;}g=LK(a,h,c,f);b=k;}}}if(b!=a.tM)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.r.k(h,c,d);if(i[g]!=a.tO.data[g])break;g=g+1|0;}return (-1);}
function SB(a){var b,c;if(a.ul===null){b=new T;V(b);c=0;while(c<a.tM){Hl(b,Iz(a.tO.data[c]));c=c+1|0;}a.ul=U(b);}return a.ul;}
function LK(a,b,c,d){var e,f,g;a.pW=1;if(b>=(d-1|0))e=Y(c,b);else{d=b+1|0;e=Y(c,b);f=Y(c,d);if(J9(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Ds(g[0])&&DS(g[1])?EJ(g[0],g[1]):g[0];a.pW=2;}}return e;}
function AXD(a,b){return b instanceof GJ&&!DC(SB(b),SB(a))?0:1;}
function A9a(a,b){return 1;}
function SP(){GJ.call(this);}
function V_(){GJ.call(this);}
function S$(){DX.call(this);}
function A4T(a,b,c,d){var e;while(true){e=a.bQ.k(b,c,d);if(e<=0)break;b=e;}return a.r.k(b,c,d);}
function UF(){DX.call(this);}
function A7S(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bQ.k(e,c,d);if(b<=e)break;e=b;}b=e;}return a.r.k(b,c,d);}
function Hx(){DX.call(this);}
function A92(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.bQ.k(b,c,d);if(e>=0)return e;return a.r.k(b,c,d);}
function A$V(a,b){a.r=b;a.bQ.cb(b);}
function PS(){Hx.call(this);}
function AXm(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<=0)e=b;return a.r.k(e,c,d);}
function A8f(a,b){a.r=b;}
function G$(){var a=this;DX.call(a);a.kC=null;a.hx=0;}
function Bmp(a,b,c,d,e){var f=new G$();MS(f,a,b,c,d,e);return f;}
function MS(a,b,c,d,e,f){Ef(a,c,d,e);a.kC=b;a.hx=f;}
function A_N(a,b,c,d){var e,f;e=To(d,a.hx);if(!a.bQ.b4(d))return a.r.k(b,c,d);if(e>=a.kC.iq)return a.r.k(b,c,d);f=a.hx;e=e+1|0;FH(d,f,e);f=a.bQ.k(b,c,d);if(f>=0){FH(d,a.hx,0);return f;}f=a.hx;e=e+(-1)|0;FH(d,f,e);if(e>=a.kC.jf)return a.r.k(b,c,d);FH(d,a.hx,0);return (-1);}
function OZ(){G$.call(this);}
function AWZ(a,b,c,d){var e,f,g;e=0;f=a.kC.iq;a:{while(true){g=a.bQ.k(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.kC.jf)return (-1);return a.r.k(b,c,d);}
function QA(){DX.call(this);}
function A2e(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.r.k(b,c,d);if(e>=0)return e;return a.bQ.k(b,c,d);}
function UZ(){Hx.call(this);}
function AUm(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.r.k(b,c,d);if(e<0)e=a.bQ.k(b,c,d);return e;}
function RV(){G$.call(this);}
function A3I(a,b,c,d){var e,f;e=To(d,a.hx);if(!a.bQ.b4(d))return a.r.k(b,c,d);if(e>=a.kC.iq){FH(d,a.hx,0);return a.r.k(b,c,d);}if(e<a.kC.jf){FH(d,a.hx,e+1|0);f=a.bQ.k(b,c,d);}else{f=a.r.k(b,c,d);if(f>=0){FH(d,a.hx,0);return f;}FH(d,a.hx,e+1|0);f=a.bQ.k(b,c,d);}return f;}
function QB(){E6.call(this);}
function A_F(a,b,c,d){var e;e=d.by;if(e>b)return a.r.eW(b,e,c,d);return a.r.k(b,c,d);}
function A0R(a,b,c,d){var e;e=d.by;if(a.r.eW(b,e,c,d)>=0)return b;return (-1);}
function T0(){E6.call(this);this.uu=null;}
function AZu(a,b,c,d){var e,f;e=d.by;f=Wu(a,b,e,c);if(f>=0)e=f;if(e>b)return a.r.eW(b,e,c,d);return a.r.k(b,c,d);}
function AS1(a,b,c,d){var e,f,g,h;e=d.by;f=a.r.eI(b,c,d);if(f<0)return (-1);g=Wu(a,f,e,c);if(g>=0)e=g;g=a.r.eW(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.uu.ou(Y(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function Wu(a,b,c,d){while(true){if(b>=c)return (-1);if(a.uu.ou(Y(d,b)))break;b=b+1|0;}return b;}
function Gn(){D.call(this);}
var Bmq=null;var Bmr=null;function Ut(b){if(!(b&1)){if(Bmr!==null)return Bmr;Bmr=new WE;return Bmr;}if(Bmq!==null)return Bmq;Bmq=new WD;return Bmq;}
function XB(){D8.call(this);}
function ATz(a,b,c,d){var e;a:{while(true){if((b+a.cN.ea()|0)>d.by)break a;e=a.cN.dn(b,c);if(e<1)break;b=b+e|0;}}return a.r.k(b,c,d);}
function St(){FX.call(this);}
function AYF(a,b,c,d){var e;if((b+a.cN.ea()|0)<=d.by){e=a.cN.dn(b,c);if(e>=1)b=b+e|0;}return a.r.k(b,c,d);}
function Um(){GE.call(this);}
function A9J(a,b,c,d){var e,f,g,h,i;e=a.kZ.jf;f=a.kZ.iq;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.cN.ea()|0)>d.by)break a;h=a.cN.dn(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.r.k(b,c,d);}if((b+a.cN.ea()|0)>d.by){d.hr=1;return (-1);}i=a.cN.dn(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function UX(){D8.call(this);}
function AZn(a,b,c,d){var e;while(true){e=a.r.k(b,c,d);if(e>=0)break;if((b+a.cN.ea()|0)<=d.by){e=a.cN.dn(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function Wb(){FX.call(this);}
function ATD(a,b,c,d){var e;e=a.r.k(b,c,d);if(e>=0)return e;return a.bQ.k(b,c,d);}
function Ql(){GE.call(this);}
function A9S(a,b,c,d){var e,f,g,h,i;e=a.kZ.jf;f=a.kZ.iq;g=0;while(true){if(g>=e){a:{while(true){h=a.r.k(b,c,d);if(h>=0)break;if((b+a.cN.ea()|0)<=d.by){h=a.cN.dn(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.cN.ea()|0)>d.by){d.hr=1;return (-1);}i=a.cN.dn(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function ABR(){Cm.call(this);}
function A1j(){var a=new ABR();AVn(a);return a;}
function AVn(a){Cy(a);}
function A7i(a,b,c,d){if(b&&!(d.lm&&b==d.fg))return (-1);return a.r.k(b,c,d);}
function A6L(a,b){return 0;}
function AAt(){Cm.call(this);this.Bf=0;}
function A$n(a){var b=new AAt();AXh(b,a);return b;}
function AXh(a,b){Cy(a);a.Bf=b;}
function A4e(a,b,c,d){var e,f,g;e=b<d.by?Y(c,b):32;f=!b?32:Y(c,b-1|0);g=d.oe?0:d.fg;return (e!=32&&!U3(a,e,b,g,c)?0:1)^(f!=32&&!U3(a,f,b-1|0,g,c)?0:1)^a.Bf?(-1):a.r.k(b,c,d);}
function A4k(a,b){return 0;}
function U3(a,b,c,d,e){var f;if(!Lf(b)&&b!=95){a:{if(Dn(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Y(e,c);if(Lf(f))return 0;if(Dn(f)!=6)return 1;}}return 1;}return 0;}
function AJv(){Cm.call(this);}
function Bap(){var a=new AJv();A0L(a);return a;}
function A0L(a){Cy(a);}
function AXg(a,b,c,d){if(b!=d.k1)return (-1);return a.r.k(b,c,d);}
function A2B(a,b){return 0;}
function SM(){Cm.call(this);this.ma=0;}
function Ba_(a){var b=new SM();AQC(b,a);return b;}
function AQC(a,b){Cy(a);a.ma=b;}
function A83(a,b,c,d){var e,f,g;e=!d.lm?Bh(c):d.by;if(b>=e){Cu(d,a.ma,0);return a.r.k(b,c,d);}f=e-b|0;if(f==2&&Y(c,b)==13&&Y(c,b+1|0)==10){Cu(d,a.ma,0);return a.r.k(b,c,d);}a:{if(f==1){g=Y(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Cu(d,a.ma,0);return a.r.k(b,c,d);}
function A4L(a,b){var c;c=!Ep(b,a.ma)?0:1;Cu(b,a.ma,(-1));return c;}
function AQ_(){Cm.call(this);}
function Bbh(){var a=new AQ_();AW8(a);return a;}
function AW8(a){Cy(a);}
function A8x(a,b,c,d){if(b<(d.oe?Bh(c):d.by))return (-1);d.hr=1;d.Jl=1;return a.r.k(b,c,d);}
function A2Z(a,b){return 0;}
function AIU(){Cm.call(this);this.DP=null;}
function BcN(a){var b=new AIU();A85(b,a);return b;}
function A85(a,b){Cy(a);a.DP=b;}
function A4G(a,b,c,d){a:{if(b!=d.by){if(!b)break a;if(d.lm&&b==d.fg)break a;if(a.DP.Ee(Y(c,b-1|0),Y(c,b)))break a;}return (-1);}return a.r.k(b,c,d);}
function AWq(a,b){return 0;}
function AGl(){CD.call(this);}
function Bbr(){var a=new AGl();A8n(a);return a;}
function A8n(a){Cy(a);}
function A2j(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;if(f>e){d.hr=1;return (-1);}g=Y(c,b);if(Ds(g)){h=b+2|0;if(h<=e&&J9(g,Y(c,f)))return a.r.k(h,c,d);}return a.r.k(f,c,d);}
function A4p(a,b){a.r=b;}
function A8k(a){return (-2147483602);}
function A4n(a,b){return 1;}
function ZO(){CD.call(this);this.uT=null;}
function Ba3(a){var b=new ZO();AUU(b,a);return b;}
function AUU(a,b){Cy(a);a.uT=b;}
function A8s(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;if(f>e){d.hr=1;return (-1);}g=Y(c,b);if(Ds(g)){b=b+2|0;if(b<=e){h=Y(c,f);if(J9(g,h))return a.uT.ou(EJ(g,h))?(-1):a.r.k(b,c,d);}}return a.uT.ou(g)?(-1):a.r.k(f,c,d);}
function A9z(a,b){a.r=b;}
function ASM(a){return (-2147483602);}
function A2q(a,b){return 1;}
function AQO(){Cm.call(this);this.pM=0;}
function BaO(a){var b=new AQO();A5Z(b,a);return b;}
function A5Z(a,b){Cy(a);a.pM=b;}
function AXK(a,b,c,d){var e;e=!d.lm?Bh(c):d.by;if(b>=e){Cu(d,a.pM,0);return a.r.k(b,c,d);}if((e-b|0)==1&&Y(c,b)==10){Cu(d,a.pM,1);return a.r.k(b+1|0,c,d);}return (-1);}
function A5V(a,b){var c;c=!Ep(b,a.pM)?0:1;Cu(b,a.pM,(-1));return c;}
function AN$(){Cm.call(this);this.ol=0;}
function Bax(a){var b=new AN$();A6h(b,a);return b;}
function A6h(a,b){Cy(a);a.ol=b;}
function AY_(a,b,c,d){if((!d.lm?Bh(c)-b|0:d.by-b|0)<=0){Cu(d,a.ol,0);return a.r.k(b,c,d);}if(Y(c,b)!=10)return (-1);Cu(d,a.ol,1);return a.r.k(b+1|0,c,d);}
function A5R(a,b){var c;c=!Ep(b,a.ol)?0:1;Cu(b,a.ol,(-1));return c;}
function AIg(){Cm.call(this);this.lF=0;}
function A_5(a){var b=new AIg();A_P(b,a);return b;}
function A_P(a,b){Cy(a);a.lF=b;}
function A6G(a,b,c,d){var e,f,g;e=!d.lm?Bh(c)-b|0:d.fg-b|0;if(!e){Cu(d,a.lF,0);return a.r.k(b,c,d);}if(e<2){f=Y(c,b);g=97;}else{f=Y(c,b);g=Y(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Cu(d,a.lF,0);return a.r.k(b,c,d);case 13:if(g!=10){Cu(d,a.lF,0);return a.r.k(b,c,d);}Cu(d,a.lF,0);return a.r.k(b,c,d);default:}return (-1);}
function AUY(a,b){var c;c=!Ep(b,a.lF)?0:1;Cu(b,a.lF,(-1));return c;}
function IU(){var a=this;CD.call(a);a.y4=0;a.mG=0;}
function Bc0(a,b){var c=new IU();PH(c,a,b);return c;}
function PH(a,b,c){Cy(a);a.y4=b;a.mG=c;}
function ATA(a,b,c,d){var e,f,g,h;e=HJ(a,d);if(e!==null&&(b+Bh(e)|0)<=d.by){f=0;while(true){if(f>=Bh(e)){Cu(d,a.mG,Bh(e));return a.r.k(b+Bh(e)|0,c,d);}g=Y(e,f);h=b+f|0;if(g!=Y(c,h)&&Kg(Y(e,f))!=Y(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A88(a,b){a.r=b;}
function HJ(a,b){return AM$(b,a.y4);}
function A0g(a,b){var c;c=!Ep(b,a.mG)?0:1;Cu(b,a.mG,(-1));return c;}
function AQZ(){IU.call(this);}
function BbG(a,b){var c=new AQZ();A$O(c,a,b);return c;}
function A$O(a,b,c){PH(a,b,c);}
function AU5(a,b,c,d){var e,f;e=HJ(a,d);if(e!==null&&(b+Bh(e)|0)<=d.by){f=!Wj(c,e,b)?(-1):Bh(e);if(f<0)return (-1);Cu(d,a.mG,f);return a.r.k(b+f|0,c,d);}return (-1);}
function A1r(a,b,c,d){var e,f,g;e=HJ(a,d);f=d.fg;if(e!==null&&(b+Bh(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=AKL(g,e,b);if(b<0)return (-1);if(a.r.k(b+Bh(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ATs(a,b,c,d,e){var f,g,h;f=HJ(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=AAD(g,f,c);if(h<0)break a;if(h<b)break a;if(a.r.k(h+Bh(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A7M(a,b){return 1;}
function AMi(){IU.call(this);}
function Baw(a,b){var c=new AMi();AWk(c,a,b);return c;}
function AWk(a,b,c){PH(a,b,c);}
function AYb(a,b,c,d){var e,f;e=HJ(a,d);if(e!==null&&(b+Bh(e)|0)<=d.by){f=0;while(true){if(f>=Bh(e)){Cu(d,a.mG,Bh(e));return a.r.k(b+Bh(e)|0,c,d);}if(EW(FF(Y(e,f)))!=EW(FF(Y(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AMW(){var a=this;CI.call(a);a.e4=null;a.w4=null;a.u5=null;}
function Baz(a){var b=new AMW();A44(b,a);return b;}
function A44(a,b){var c;EN(a);a.e4=U(b);a.dl=OC(b);a.w4=A8j(a.dl);a.u5=A8j(a.dl);c=0;while(c<(a.dl-1|0)){Qn(a.w4,Y(a.e4,c),(a.dl-c|0)-1|0);Qn(a.u5,Y(a.e4,(a.dl-c|0)-1|0),(a.dl-c|0)-1|0);c=c+1|0;}}
function AVj(a,b,c){return !LH(a,c,b)?(-1):a.dl;}
function A4d(a,b,c,d){var e,f;e=d.by;while(true){if(b>e)return (-1);f=ARc(a,c,b,e);if(f<0)return (-1);if(a.r.k(f+a.dl|0,c,d)>=0)break;b=f+1|0;}return f;}
function A52(a,b,c,d,e){while(true){if(c<b)return (-1);c=AQA(a,d,b,c);if(c<0)return (-1);if(a.r.k(c+a.dl|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWS(a,b){var c;if(b instanceof Fw)return b.gt!=Y(a.e4,0)?0:1;if(b instanceof Fp)return Tb(b,0,Ev(a.e4,0,1))<=0?0:1;if(!(b instanceof EP)){if(!(b instanceof E0))return 1;return Bh(a.e4)>1&&b.ky==EJ(Y(a.e4,0),Y(a.e4,1))?1:0;}a:{b:{b=b;if(!b.X(Y(a.e4,0))){if(Bh(a.e4)<=1)break b;if(!b.X(EJ(Y(a.e4,0),Y(a.e4,1))))break b;}c=1;break a;}c=0;}return c;}
function ARc(a,b,c,d){var e,f;e=Y(a.e4,a.dl-1|0);while(true){if(c>(d-a.dl|0))return (-1);f=Y(b,(c+a.dl|0)-1|0);if(f==e&&LH(a,b,c))break;c=c+VL(a.w4,f)|0;}return c;}
function AQA(a,b,c,d){var e,f,g;e=Y(a.e4,0);f=(Bh(b)-d|0)-a.dl|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=Y(b,d);if(g==e&&LH(a,b,d))break;d=d-VL(a.u5,g)|0;}return d;}
function LH(a,b,c){var d;d=0;while(d<a.dl){if(Y(b,d+c|0)!=Y(a.e4,d))return 0;d=d+1|0;}return 1;}
function XM(){CI.call(this);this.sK=null;}
function Bc1(a){var b=new XM();A$q(b,a);return b;}
function A$q(a,b){var c,d;EN(a);c=new T;V(c);d=0;while(d<OC(b)){Dw(c,EW(FF(AIi(b,d))));d=d+1|0;}a.sK=U(c);a.dl=Kc(c);}
function AYe(a,b,c){var d;d=0;while(true){if(d>=Bh(a.sK))return Bh(a.sK);if(Y(a.sK,d)!=EW(FF(Y(c,b+d|0))))break;d=d+1|0;}return (-1);}
function O2(){CI.call(this);this.pK=null;}
function A9L(a,b,c){var d,e,f;d=0;while(true){if(d>=Bh(a.pK))return Bh(a.pK);e=Y(a.pK,d);f=b+d|0;if(e!=Y(c,f)&&Kg(Y(a.pK,d))!=Y(c,f))break;d=d+1|0;}return (-1);}
function Ia(){D.call(this);}
var Bms=null;var Bmt=null;var Bmu=null;function Bmv(){var a=new Ia();AGa(a);return a;}
function AGa(a){return;}
function ARx(a,b){var c,d,e;c=0;while(true){if(c>=Bmu.data.length){d=new MU;Bl(d,B(3));d.Hb=B(3);d.Jv=b;M(d);}e=Bmu.data[c].data;if(DC(b,e[0]))break;c=c+1|0;}return e[1];}
function AAv(){var b,c,d,e;Bms=Bbe();Bmt=Bcg();b=I($rt_arraycls(D),194);c=b.data;d=I(D,2);e=d.data;e[0]=B(642);e[1]=Bbu();c[0]=d;d=I(D,2);e=d.data;e[0]=B(643);e[1]=A_1();c[1]=d;d=I(D,2);e=d.data;e[0]=B(644);e[1]=BcL();c[2]=d;d=I(D,2);e=d.data;e[0]=B(645);e[1]=BcT();c[3]=d;d=I(D,2);e=d.data;e[0]=B(646);e[1]=Bmt;c[4]=d;d=I(D,2);e=d.data;e[0]=B(647);e[1]=Bcm();c[5]=d;d=I(D,2);e=d.data;e[0]=B(648);e[1]=BaC();c[6]=d;d=I(D,2);e=d.data;e[0]=B(649);e[1]=BbI();c[7]=d;d=I(D,2);e=d.data;e[0]=B(650);e[1]=BbF();c[8]=d;d
=I(D,2);e=d.data;e[0]=B(651);e[1]=Bad();c[9]=d;d=I(D,2);e=d.data;e[0]=B(652);e[1]=Bar();c[10]=d;d=I(D,2);e=d.data;e[0]=B(653);e[1]=BbK();c[11]=d;d=I(D,2);e=d.data;e[0]=B(654);e[1]=BaY();c[12]=d;d=I(D,2);e=d.data;e[0]=B(655);e[1]=A_Z();c[13]=d;d=I(D,2);e=d.data;e[0]=B(656);e[1]=BcP();c[14]=d;d=I(D,2);e=d.data;e[0]=B(657);e[1]=Baq();c[15]=d;d=I(D,2);e=d.data;e[0]=B(658);e[1]=Bck();c[16]=d;d=I(D,2);e=d.data;e[0]=B(659);e[1]=Bb0();c[17]=d;d=I(D,2);e=d.data;e[0]=B(660);e[1]=Bcl();c[18]=d;d=I(D,2);e=d.data;e[0]=B(661);e[1]
=Bag();c[19]=d;d=I(D,2);e=d.data;e[0]=B(662);e[1]=BcU();c[20]=d;d=I(D,2);e=d.data;e[0]=B(663);e[1]=BbW();c[21]=d;d=I(D,2);e=d.data;e[0]=B(664);e[1]=BaQ();c[22]=d;d=I(D,2);e=d.data;e[0]=B(665);e[1]=BcK();c[23]=d;d=I(D,2);e=d.data;e[0]=B(666);e[1]=BcH();c[24]=d;d=I(D,2);e=d.data;e[0]=B(667);e[1]=Bbq();c[25]=d;d=I(D,2);e=d.data;e[0]=B(668);e[1]=Baf();c[26]=d;d=I(D,2);e=d.data;e[0]=B(669);e[1]=BcA();c[27]=d;d=I(D,2);e=d.data;e[0]=B(670);e[1]=Bms;c[28]=d;d=I(D,2);e=d.data;e[0]=B(671);e[1]=BaS();c[29]=d;d=I(D,2);e
=d.data;e[0]=B(44);e[1]=BbJ();c[30]=d;d=I(D,2);e=d.data;e[0]=B(672);e[1]=Bms;c[31]=d;d=I(D,2);e=d.data;e[0]=B(58);e[1]=A_Y();c[32]=d;d=I(D,2);e=d.data;e[0]=B(673);e[1]=Bmt;c[33]=d;d=I(D,2);e=d.data;e[0]=B(59);e[1]=Bav();c[34]=d;d=I(D,2);e=d.data;e[0]=B(674);e[1]=W(0,127);c[35]=d;d=I(D,2);e=d.data;e[0]=B(675);e[1]=W(128,255);c[36]=d;d=I(D,2);e=d.data;e[0]=B(676);e[1]=W(256,383);c[37]=d;d=I(D,2);e=d.data;e[0]=B(677);e[1]=W(384,591);c[38]=d;d=I(D,2);e=d.data;e[0]=B(678);e[1]=W(592,687);c[39]=d;d=I(D,2);e=d.data;e[0]
=B(679);e[1]=W(688,767);c[40]=d;d=I(D,2);e=d.data;e[0]=B(680);e[1]=W(768,879);c[41]=d;d=I(D,2);e=d.data;e[0]=B(681);e[1]=W(880,1023);c[42]=d;d=I(D,2);e=d.data;e[0]=B(682);e[1]=W(1024,1279);c[43]=d;d=I(D,2);e=d.data;e[0]=B(683);e[1]=W(1280,1327);c[44]=d;d=I(D,2);e=d.data;e[0]=B(684);e[1]=W(1328,1423);c[45]=d;d=I(D,2);e=d.data;e[0]=B(685);e[1]=W(1424,1535);c[46]=d;d=I(D,2);e=d.data;e[0]=B(686);e[1]=W(1536,1791);c[47]=d;d=I(D,2);e=d.data;e[0]=B(687);e[1]=W(1792,1871);c[48]=d;d=I(D,2);e=d.data;e[0]=B(688);e[1]=
W(1872,1919);c[49]=d;d=I(D,2);e=d.data;e[0]=B(689);e[1]=W(1920,1983);c[50]=d;d=I(D,2);e=d.data;e[0]=B(690);e[1]=W(2304,2431);c[51]=d;d=I(D,2);e=d.data;e[0]=B(691);e[1]=W(2432,2559);c[52]=d;d=I(D,2);e=d.data;e[0]=B(692);e[1]=W(2560,2687);c[53]=d;d=I(D,2);e=d.data;e[0]=B(693);e[1]=W(2688,2815);c[54]=d;d=I(D,2);e=d.data;e[0]=B(694);e[1]=W(2816,2943);c[55]=d;d=I(D,2);e=d.data;e[0]=B(695);e[1]=W(2944,3071);c[56]=d;d=I(D,2);e=d.data;e[0]=B(696);e[1]=W(3072,3199);c[57]=d;d=I(D,2);e=d.data;e[0]=B(697);e[1]=W(3200,3327);c[58]
=d;d=I(D,2);e=d.data;e[0]=B(698);e[1]=W(3328,3455);c[59]=d;d=I(D,2);e=d.data;e[0]=B(699);e[1]=W(3456,3583);c[60]=d;d=I(D,2);e=d.data;e[0]=B(700);e[1]=W(3584,3711);c[61]=d;d=I(D,2);e=d.data;e[0]=B(701);e[1]=W(3712,3839);c[62]=d;d=I(D,2);e=d.data;e[0]=B(702);e[1]=W(3840,4095);c[63]=d;d=I(D,2);e=d.data;e[0]=B(703);e[1]=W(4096,4255);c[64]=d;d=I(D,2);e=d.data;e[0]=B(704);e[1]=W(4256,4351);c[65]=d;d=I(D,2);e=d.data;e[0]=B(705);e[1]=W(4352,4607);c[66]=d;d=I(D,2);e=d.data;e[0]=B(706);e[1]=W(4608,4991);c[67]=d;d=I(D,
2);e=d.data;e[0]=B(707);e[1]=W(4992,5023);c[68]=d;d=I(D,2);e=d.data;e[0]=B(708);e[1]=W(5024,5119);c[69]=d;d=I(D,2);e=d.data;e[0]=B(709);e[1]=W(5120,5759);c[70]=d;d=I(D,2);e=d.data;e[0]=B(710);e[1]=W(5760,5791);c[71]=d;d=I(D,2);e=d.data;e[0]=B(711);e[1]=W(5792,5887);c[72]=d;d=I(D,2);e=d.data;e[0]=B(712);e[1]=W(5888,5919);c[73]=d;d=I(D,2);e=d.data;e[0]=B(713);e[1]=W(5920,5951);c[74]=d;d=I(D,2);e=d.data;e[0]=B(714);e[1]=W(5952,5983);c[75]=d;d=I(D,2);e=d.data;e[0]=B(715);e[1]=W(5984,6015);c[76]=d;d=I(D,2);e=d.data;e[0]
=B(716);e[1]=W(6016,6143);c[77]=d;d=I(D,2);e=d.data;e[0]=B(717);e[1]=W(6144,6319);c[78]=d;d=I(D,2);e=d.data;e[0]=B(718);e[1]=W(6400,6479);c[79]=d;d=I(D,2);e=d.data;e[0]=B(719);e[1]=W(6480,6527);c[80]=d;d=I(D,2);e=d.data;e[0]=B(720);e[1]=W(6528,6623);c[81]=d;d=I(D,2);e=d.data;e[0]=B(721);e[1]=W(6624,6655);c[82]=d;d=I(D,2);e=d.data;e[0]=B(722);e[1]=W(6656,6687);c[83]=d;d=I(D,2);e=d.data;e[0]=B(723);e[1]=W(7424,7551);c[84]=d;d=I(D,2);e=d.data;e[0]=B(724);e[1]=W(7552,7615);c[85]=d;d=I(D,2);e=d.data;e[0]=B(725);e[1]
=W(7616,7679);c[86]=d;d=I(D,2);e=d.data;e[0]=B(726);e[1]=W(7680,7935);c[87]=d;d=I(D,2);e=d.data;e[0]=B(727);e[1]=W(7936,8191);c[88]=d;d=I(D,2);e=d.data;e[0]=B(728);e[1]=W(8192,8303);c[89]=d;d=I(D,2);e=d.data;e[0]=B(729);e[1]=W(8304,8351);c[90]=d;d=I(D,2);e=d.data;e[0]=B(730);e[1]=W(8352,8399);c[91]=d;d=I(D,2);e=d.data;e[0]=B(731);e[1]=W(8400,8447);c[92]=d;d=I(D,2);e=d.data;e[0]=B(732);e[1]=W(8448,8527);c[93]=d;d=I(D,2);e=d.data;e[0]=B(733);e[1]=W(8528,8591);c[94]=d;d=I(D,2);e=d.data;e[0]=B(734);e[1]=W(8592,
8703);c[95]=d;d=I(D,2);e=d.data;e[0]=B(735);e[1]=W(8704,8959);c[96]=d;d=I(D,2);e=d.data;e[0]=B(736);e[1]=W(8960,9215);c[97]=d;d=I(D,2);e=d.data;e[0]=B(737);e[1]=W(9216,9279);c[98]=d;d=I(D,2);e=d.data;e[0]=B(738);e[1]=W(9280,9311);c[99]=d;d=I(D,2);e=d.data;e[0]=B(739);e[1]=W(9312,9471);c[100]=d;d=I(D,2);e=d.data;e[0]=B(740);e[1]=W(9472,9599);c[101]=d;d=I(D,2);e=d.data;e[0]=B(741);e[1]=W(9600,9631);c[102]=d;d=I(D,2);e=d.data;e[0]=B(742);e[1]=W(9632,9727);c[103]=d;d=I(D,2);e=d.data;e[0]=B(743);e[1]=W(9728,9983);c[104]
=d;d=I(D,2);e=d.data;e[0]=B(744);e[1]=W(9984,10175);c[105]=d;d=I(D,2);e=d.data;e[0]=B(745);e[1]=W(10176,10223);c[106]=d;d=I(D,2);e=d.data;e[0]=B(746);e[1]=W(10224,10239);c[107]=d;d=I(D,2);e=d.data;e[0]=B(747);e[1]=W(10240,10495);c[108]=d;d=I(D,2);e=d.data;e[0]=B(748);e[1]=W(10496,10623);c[109]=d;d=I(D,2);e=d.data;e[0]=B(749);e[1]=W(10624,10751);c[110]=d;d=I(D,2);e=d.data;e[0]=B(750);e[1]=W(10752,11007);c[111]=d;d=I(D,2);e=d.data;e[0]=B(751);e[1]=W(11008,11263);c[112]=d;d=I(D,2);e=d.data;e[0]=B(752);e[1]=W(11264,
11359);c[113]=d;d=I(D,2);e=d.data;e[0]=B(753);e[1]=W(11392,11519);c[114]=d;d=I(D,2);e=d.data;e[0]=B(754);e[1]=W(11520,11567);c[115]=d;d=I(D,2);e=d.data;e[0]=B(755);e[1]=W(11568,11647);c[116]=d;d=I(D,2);e=d.data;e[0]=B(756);e[1]=W(11648,11743);c[117]=d;d=I(D,2);e=d.data;e[0]=B(757);e[1]=W(11776,11903);c[118]=d;d=I(D,2);e=d.data;e[0]=B(758);e[1]=W(11904,12031);c[119]=d;d=I(D,2);e=d.data;e[0]=B(759);e[1]=W(12032,12255);c[120]=d;d=I(D,2);e=d.data;e[0]=B(760);e[1]=W(12272,12287);c[121]=d;d=I(D,2);e=d.data;e[0]=B(761);e[1]
=W(12288,12351);c[122]=d;d=I(D,2);e=d.data;e[0]=B(762);e[1]=W(12352,12447);c[123]=d;d=I(D,2);e=d.data;e[0]=B(763);e[1]=W(12448,12543);c[124]=d;d=I(D,2);e=d.data;e[0]=B(764);e[1]=W(12544,12591);c[125]=d;d=I(D,2);e=d.data;e[0]=B(765);e[1]=W(12592,12687);c[126]=d;d=I(D,2);e=d.data;e[0]=B(766);e[1]=W(12688,12703);c[127]=d;d=I(D,2);e=d.data;e[0]=B(767);e[1]=W(12704,12735);c[128]=d;d=I(D,2);e=d.data;e[0]=B(768);e[1]=W(12736,12783);c[129]=d;d=I(D,2);e=d.data;e[0]=B(769);e[1]=W(12784,12799);c[130]=d;d=I(D,2);e=d.data;e[0]
=B(770);e[1]=W(12800,13055);c[131]=d;d=I(D,2);e=d.data;e[0]=B(771);e[1]=W(13056,13311);c[132]=d;d=I(D,2);e=d.data;e[0]=B(772);e[1]=W(13312,19893);c[133]=d;d=I(D,2);e=d.data;e[0]=B(773);e[1]=W(19904,19967);c[134]=d;d=I(D,2);e=d.data;e[0]=B(774);e[1]=W(19968,40959);c[135]=d;d=I(D,2);e=d.data;e[0]=B(775);e[1]=W(40960,42127);c[136]=d;d=I(D,2);e=d.data;e[0]=B(776);e[1]=W(42128,42191);c[137]=d;d=I(D,2);e=d.data;e[0]=B(777);e[1]=W(42752,42783);c[138]=d;d=I(D,2);e=d.data;e[0]=B(778);e[1]=W(43008,43055);c[139]=d;d=I(D,
2);e=d.data;e[0]=B(779);e[1]=W(44032,55203);c[140]=d;d=I(D,2);e=d.data;e[0]=B(780);e[1]=W(55296,56191);c[141]=d;d=I(D,2);e=d.data;e[0]=B(781);e[1]=W(56192,56319);c[142]=d;d=I(D,2);e=d.data;e[0]=B(782);e[1]=W(56320,57343);c[143]=d;d=I(D,2);e=d.data;e[0]=B(783);e[1]=W(57344,63743);c[144]=d;d=I(D,2);e=d.data;e[0]=B(784);e[1]=W(63744,64255);c[145]=d;d=I(D,2);e=d.data;e[0]=B(785);e[1]=W(64256,64335);c[146]=d;d=I(D,2);e=d.data;e[0]=B(786);e[1]=W(64336,65023);c[147]=d;d=I(D,2);e=d.data;e[0]=B(787);e[1]=W(65024,65039);c[148]
=d;d=I(D,2);e=d.data;e[0]=B(788);e[1]=W(65040,65055);c[149]=d;d=I(D,2);e=d.data;e[0]=B(789);e[1]=W(65056,65071);c[150]=d;d=I(D,2);e=d.data;e[0]=B(790);e[1]=W(65072,65103);c[151]=d;d=I(D,2);e=d.data;e[0]=B(791);e[1]=W(65104,65135);c[152]=d;d=I(D,2);e=d.data;e[0]=B(792);e[1]=W(65136,65279);c[153]=d;d=I(D,2);e=d.data;e[0]=B(793);e[1]=W(65280,65519);c[154]=d;d=I(D,2);e=d.data;e[0]=B(794);e[1]=W(0,1114111);c[155]=d;d=I(D,2);e=d.data;e[0]=B(795);e[1]=BbL();c[156]=d;d=I(D,2);e=d.data;e[0]=B(796);e[1]=Cz(0,1);c[157]
=d;d=I(D,2);e=d.data;e[0]=B(797);e[1]=KW(62,1);c[158]=d;d=I(D,2);e=d.data;e[0]=B(798);e[1]=Cz(1,1);c[159]=d;d=I(D,2);e=d.data;e[0]=B(799);e[1]=Cz(2,1);c[160]=d;d=I(D,2);e=d.data;e[0]=B(800);e[1]=Cz(3,0);c[161]=d;d=I(D,2);e=d.data;e[0]=B(801);e[1]=Cz(4,0);c[162]=d;d=I(D,2);e=d.data;e[0]=B(802);e[1]=Cz(5,1);c[163]=d;d=I(D,2);e=d.data;e[0]=B(803);e[1]=KW(448,1);c[164]=d;d=I(D,2);e=d.data;e[0]=B(804);e[1]=Cz(6,1);c[165]=d;d=I(D,2);e=d.data;e[0]=B(805);e[1]=Cz(7,0);c[166]=d;d=I(D,2);e=d.data;e[0]=B(806);e[1]=Cz(8,
1);c[167]=d;d=I(D,2);e=d.data;e[0]=B(76);e[1]=KW(3584,1);c[168]=d;d=I(D,2);e=d.data;e[0]=B(807);e[1]=Cz(9,1);c[169]=d;d=I(D,2);e=d.data;e[0]=B(808);e[1]=Cz(10,1);c[170]=d;d=I(D,2);e=d.data;e[0]=B(809);e[1]=Cz(11,1);c[171]=d;d=I(D,2);e=d.data;e[0]=B(810);e[1]=KW(28672,0);c[172]=d;d=I(D,2);e=d.data;e[0]=B(811);e[1]=Cz(12,0);c[173]=d;d=I(D,2);e=d.data;e[0]=B(812);e[1]=Cz(13,0);c[174]=d;d=I(D,2);e=d.data;e[0]=B(813);e[1]=Cz(14,0);c[175]=d;d=I(D,2);e=d.data;e[0]=B(814);e[1]=Bca(983040,1,1);c[176]=d;d=I(D,2);e=d.data;e[0]
=B(815);e[1]=Cz(15,0);c[177]=d;d=I(D,2);e=d.data;e[0]=B(816);e[1]=Cz(16,1);c[178]=d;d=I(D,2);e=d.data;e[0]=B(817);e[1]=Cz(18,1);c[179]=d;d=I(D,2);e=d.data;e[0]=B(818);e[1]=BaL(19,0,1);c[180]=d;d=I(D,2);e=d.data;e[0]=B(819);e[1]=KW(1643118592,1);c[181]=d;d=I(D,2);e=d.data;e[0]=B(820);e[1]=Cz(20,0);c[182]=d;d=I(D,2);e=d.data;e[0]=B(821);e[1]=Cz(21,0);c[183]=d;d=I(D,2);e=d.data;e[0]=B(822);e[1]=Cz(22,0);c[184]=d;d=I(D,2);e=d.data;e[0]=B(823);e[1]=Cz(23,0);c[185]=d;d=I(D,2);e=d.data;e[0]=B(824);e[1]=Cz(24,1);c[186]
=d;d=I(D,2);e=d.data;e[0]=B(825);e[1]=KW(2113929216,1);c[187]=d;d=I(D,2);e=d.data;e[0]=B(826);e[1]=Cz(25,1);c[188]=d;d=I(D,2);e=d.data;e[0]=B(827);e[1]=Cz(26,0);c[189]=d;d=I(D,2);e=d.data;e[0]=B(828);e[1]=Cz(27,0);c[190]=d;d=I(D,2);e=d.data;e[0]=B(829);e[1]=Cz(28,1);c[191]=d;d=I(D,2);e=d.data;e[0]=B(830);e[1]=Cz(29,0);c[192]=d;d=I(D,2);e=d.data;e[0]=B(831);e[1]=Cz(30,0);c[193]=d;Bmu=b;}
function By(){var a=this;D.call(a);a.vq=null;a.ux=null;}
function APU(a,b){if(!b&&a.vq===null)a.vq=a.bW();else if(b&&a.ux===null)a.ux=Fz(a.bW(),1);if(b)return a.ux;return a.vq;}
function Tf(){CI.call(this);this.z9=0;}
function A0z(a,b,c){var d,e;d=b+1|0;e=Y(c,b);d=Y(c,d);return a.z9!=GP(GO(EJ(e,d)))?(-1):2;}
function NQ(){CD.call(this);this.mr=0;}
function AYZ(a){var b=new NQ();AUt(b,a);return b;}
function AUt(a,b){Cy(a);a.mr=b;}
function A8K(a,b){a.r=b;}
function A4M(a,b,c,d){var e,f;e=b+1|0;if(e>d.by){d.hr=1;return (-1);}f=Y(c,b);if(b>d.fg&&Ds(Y(c,b-1|0)))return (-1);if(a.mr!=f)return (-1);return a.r.k(e,c,d);}
function AWR(a,b,c,d){var e,f,g,h,i;if(!(c instanceof B2))return Jg(a,b,c,d);e=c;f=d.fg;g=d.by;while(true){if(b>=g)return (-1);h=Hk(e,a.mr,b);if(h<0)return (-1);if(h>f&&Ds(Y(e,h-1|0))){b=h+1|0;continue;}i=a.r;b=h+1|0;if(i.k(b,c,d)>=0)break;}return h;}
function A5a(a,b,c,d,e){var f,g;if(!(d instanceof B2))return Jr(a,b,c,d,e);f=e.fg;g=d;a:{while(true){if(c<b)return (-1);c=Il(g,a.mr,c);if(c<0)break a;if(c<b)break a;if(c>f&&Ds(Y(g,c-1|0))){c=c+(-2)|0;continue;}if(a.r.k(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ATn(a,b){if(b instanceof Fw)return 0;if(b instanceof Fp)return 0;if(b instanceof EP)return 0;if(b instanceof E0)return 0;if(b instanceof NW)return 0;if(!(b instanceof NQ))return 1;return b.mr!=a.mr?0:1;}
function A08(a,b){return 1;}
function NW(){CD.call(this);this.l1=0;}
function A6H(a){var b=new NW();AY7(b,a);return b;}
function AY7(a,b){Cy(a);a.l1=b;}
function A4x(a,b){a.r=b;}
function AS3(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;g=R(f,e);if(g>0){d.hr=1;return (-1);}h=Y(c,b);if(g<0&&DS(Y(c,f)))return (-1);if(a.l1!=h)return (-1);return a.r.k(f,c,d);}
function A8V(a,b,c,d){var e,f,g;if(!(c instanceof B2))return Jg(a,b,c,d);e=c;f=d.by;while(true){if(b>=f)return (-1);g=Hk(e,a.l1,b);if(g<0)return (-1);b=g+1|0;if(b<f&&DS(Y(e,b))){b=g+2|0;continue;}if(a.r.k(b,c,d)>=0)break;}return g;}
function A0x(a,b,c,d,e){var f,g,h;if(!(d instanceof B2))return Jr(a,b,c,d,e);f=d;g=e.by;a:{while(true){if(c<b)return (-1);c=Il(f,a.l1,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&DS(Y(f,h))){c=c+(-1)|0;continue;}if(a.r.k(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AVk(a,b){if(b instanceof Fw)return 0;if(b instanceof Fp)return 0;if(b instanceof EP)return 0;if(b instanceof E0)return 0;if(b instanceof NQ)return 0;if(!(b instanceof NW))return 1;return b.l1!=a.l1?0:1;}
function A8X(a,b){return 1;}
function E0(){var a=this;CI.call(a);a.tB=0;a.se=0;a.ky=0;}
function A9q(a,b,c){var d,e;d=b+1|0;e=Y(c,b);d=Y(c,d);return a.tB==e&&a.se==d?2:(-1);}
function A78(a,b,c,d){var e,f,g;if(!(c instanceof B2))return Jg(a,b,c,d);e=c;f=d.by;while(b<f){b=Hk(e,a.tB,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=Y(e,b);if(a.se==g&&a.r.k(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AUu(a,b,c,d,e){var f;if(!(d instanceof B2))return Jr(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=Il(f,a.se,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.tB==Y(f,c)&&a.r.k(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function A3h(a){return a.ky;}
function A9h(a,b){if(b instanceof E0)return b.ky!=a.ky?0:1;if(b instanceof EP)return b.X(a.ky);if(b instanceof Fw)return 0;if(!(b instanceof Fp))return 1;return 0;}
function WD(){Gn.call(this);}
function Bmw(){var a=new WD();A3_(a);return a;}
function A3_(a){return;}
function AUD(a,b){return b!=10?0:1;}
function A0d(a,b,c){return b!=10?0:1;}
function WE(){Gn.call(this);}
function Bmx(){var a=new WE();AWP(a);return a;}
function AWP(a){return;}
function A9U(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function A15(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AES(){var a=this;D.call(a);a.oW=null;a.tR=null;a.f$=0;a.BE=0;}
function A8j(a){var b=new AES();AXf(b,a);return b;}
function AXf(a,b){while(b>=a.f$){a.f$=a.f$<<1|1;}a.f$=a.f$<<1|1;a.oW=$rt_createIntArray(a.f$+1|0);a.tR=$rt_createIntArray(a.f$+1|0);a.BE=b;}
function Qn(a,b,c){var d,e;d=0;e=b&a.f$;while(a.oW.data[e]&&a.oW.data[e]!=b){d=(d+1|0)&a.f$;e=(e+d|0)&a.f$;}a.oW.data[e]=b;a.tR.data[e]=c;}
function VL(a,b){var c,d,e;c=b&a.f$;d=0;while(true){e=a.oW.data[c];if(!e)break;if(e==b)return a.tR.data[c];d=(d+1|0)&a.f$;c=(c+d|0)&a.f$;}return a.BE;}
function YC(){D.call(this);}
function NO(){By.call(this);}
function Bbe(){var a=new NO();AW0(a);return a;}
function AW0(a){return;}
function AMr(a){return Do(CG(Eq(),9,13),32);}
function Ne(){By.call(this);}
function Bcg(){var a=new Ne();A0Y(a);return a;}
function A0Y(a){return;}
function ANR(a){return CG(Eq(),48,57);}
function AEK(){By.call(this);}
function Bbu(){var a=new AEK();AWx(a);return a;}
function AWx(a){return;}
function A9B(a){return CG(Eq(),97,122);}
function AFn(){By.call(this);}
function A_1(){var a=new AFn();AXj(a);return a;}
function AXj(a){return;}
function A0$(a){return CG(Eq(),65,90);}
function AFw(){By.call(this);}
function BcL(){var a=new AFw();ATY(a);return a;}
function ATY(a){return;}
function AVM(a){return CG(Eq(),0,127);}
function NK(){By.call(this);}
function BcT(){var a=new NK();AU6(a);return a;}
function AU6(a){return;}
function ZU(a){return CG(CG(Eq(),97,122),65,90);}
function Mc(){NK.call(this);}
function Bcm(){var a=new Mc();AW3(a);return a;}
function AW3(a){return;}
function AA2(a){return CG(ZU(a),48,57);}
function AHW(){By.call(this);}
function BaC(){var a=new AHW();A7X(a);return a;}
function A7X(a){return;}
function A6j(a){return CG(CG(CG(Eq(),33,64),91,96),123,126);}
function OG(){Mc.call(this);}
function BbI(){var a=new OG();AZW(a);return a;}
function AZW(a){return;}
function AIa(a){return CG(CG(CG(AA2(a),33,64),91,96),123,126);}
function AMT(){OG.call(this);}
function BbF(){var a=new AMT();A0P(a);return a;}
function A0P(a){return;}
function AYC(a){return Do(AIa(a),32);}
function ACO(){By.call(this);}
function Bad(){var a=new ACO();A9M(a);return a;}
function A9M(a){return;}
function A43(a){return Do(Do(Eq(),32),9);}
function AAo(){By.call(this);}
function Bar(){var a=new AAo();A$6(a);return a;}
function A$6(a){return;}
function AYt(a){return Do(CG(Eq(),0,31),127);}
function AKd(){By.call(this);}
function BbK(){var a=new AKd();AUa(a);return a;}
function AUa(a){return;}
function A16(a){return CG(CG(CG(Eq(),48,57),97,102),65,70);}
function AQf(){By.call(this);}
function BaY(){var a=new AQf();A33(a);return a;}
function A33(a){return;}
function A8i(a){var b;b=new VP;b.Iw=a;BY(b);b.ca=1;return b;}
function AH4(){By.call(this);}
function A_Z(){var a=new AH4();A0a(a);return a;}
function A0a(a){return;}
function A26(a){var b;b=new Tk;b.IF=a;BY(b);b.ca=1;return b;}
function APt(){By.call(this);}
function BcP(){var a=new APt();AT0(a);return a;}
function AT0(a){return;}
function AW2(a){var b;b=new QP;b.H9=a;BY(b);return b;}
function AEs(){By.call(this);}
function Baq(){var a=new AEs();AYw(a);return a;}
function AYw(a){return;}
function A0i(a){var b;b=new QO;b.FO=a;BY(b);return b;}
function AF2(){By.call(this);}
function Bck(){var a=new AF2();AU4(a);return a;}
function AU4(a){return;}
function A41(a){var b;b=new SD;b.GZ=a;BY(b);Js(b.b$,0,2048);b.ca=1;return b;}
function Y5(){By.call(this);}
function Bb0(){var a=new Y5();AUz(a);return a;}
function AUz(a){return;}
function AVu(a){var b;b=new Uh;b.IV=a;BY(b);b.ca=1;return b;}
function AIB(){By.call(this);}
function Bcl(){var a=new AIB();AYc(a);return a;}
function AYc(a){return;}
function A$$(a){var b;b=new Pk;b.He=a;BY(b);b.ca=1;return b;}
function API(){By.call(this);}
function Bag(){var a=new API();AYJ(a);return a;}
function AYJ(a){return;}
function A21(a){var b;b=new U_;b.Gh=a;BY(b);return b;}
function AFa(){By.call(this);}
function BcU(){var a=new AFa();A6v(a);return a;}
function A6v(a){return;}
function AXN(a){var b;b=new Th;b.Fl=a;BY(b);b.ca=1;return b;}
function ALh(){By.call(this);}
function BbW(){var a=new ALh();ATt(a);return a;}
function ATt(a){return;}
function AVA(a){var b;b=new Tj;b.GF=a;BY(b);b.ca=1;return b;}
function AC0(){By.call(this);}
function BaQ(){var a=new AC0();AUI(a);return a;}
function AUI(a){return;}
function A54(a){var b;b=new Pb;b.GX=a;BY(b);b.ca=1;return b;}
function AHd(){By.call(this);}
function BcK(){var a=new AHd();AXW(a);return a;}
function AXW(a){return;}
function A68(a){var b;b=new Ux;b.JA=a;BY(b);b.ca=1;return b;}
function APW(){By.call(this);}
function BcH(){var a=new APW();A8b(a);return a;}
function A8b(a){return;}
function A1m(a){var b;b=new UA;b.F2=a;BY(b);return b;}
function ABB(){By.call(this);}
function Bbq(){var a=new ABB();AUC(a);return a;}
function AUC(a){return;}
function AZO(a){var b;b=new V7;b.I5=a;BY(b);return b;}
function AAO(){By.call(this);}
function Baf(){var a=new AAO();A9u(a);return a;}
function A9u(a){return;}
function AYU(a){var b;b=new VG;b.Fp=a;BY(b);b.ca=1;return b;}
function AH2(){By.call(this);}
function BcA(){var a=new AH2();A6p(a);return a;}
function A6p(a){return;}
function A9x(a){var b;b=new OP;b.JS=a;BY(b);b.ca=1;return b;}
function Ld(){By.call(this);}
function BaS(){var a=new Ld();AVH(a);return a;}
function AVH(a){return;}
function ACQ(a){return Do(CG(CG(CG(Eq(),97,122),65,90),48,57),95);}
function AQJ(){Ld.call(this);}
function BbJ(){var a=new AQJ();A6z(a);return a;}
function A6z(a){return;}
function AYL(a){var b;b=Fz(ACQ(a),1);b.ca=1;return b;}
function AMZ(){NO.call(this);}
function A_Y(){var a=new AMZ();A1F(a);return a;}
function A1F(a){return;}
function A39(a){var b;b=Fz(AMr(a),1);b.ca=1;return b;}
function AAH(){Ne.call(this);}
function Bav(){var a=new AAH();A6Z(a);return a;}
function A6Z(a){return;}
function AWE(a){var b;b=Fz(ANR(a),1);b.ca=1;return b;}
function AKp(){var a=this;By.call(a);a.z7=0;a.DL=0;}
function W(a,b){var c=new AKp();A$9(c,a,b);return c;}
function A$9(a,b,c){a.z7=b;a.DL=c;}
function AX0(a){return CG(Eq(),a.z7,a.DL);}
function AKU(){By.call(this);}
function BbL(){var a=new AKU();A18(a);return a;}
function A18(a){return;}
function A1T(a){return CG(CG(Eq(),65279,65279),65520,65533);}
function AMD(){var a=this;By.call(a);a.ya=0;a.wr=0;a.CS=0;}
function Cz(a,b){var c=new AMD();AUX(c,a,b);return c;}
function BaL(a,b,c){var d=new AMD();A10(d,a,b,c);return d;}
function AUX(a,b,c){a.wr=c;a.ya=b;}
function A10(a,b,c,d){a.CS=d;a.wr=c;a.ya=b;}
function A5O(a){var b;b=Bbs(a.ya);if(a.CS)Js(b.b$,0,2048);b.ca=a.wr;return b;}
function AMU(){var a=this;By.call(a);a.vF=0;a.tT=0;a.y7=0;}
function KW(a,b){var c=new AMU();AVB(c,a,b);return c;}
function Bca(a,b,c){var d=new AMU();A22(d,a,b,c);return d;}
function AVB(a,b,c){a.tT=c;a.vF=b;}
function A22(a,b,c,d){a.y7=d;a.tT=c;a.vF=b;}
function AST(a){var b;b=new Vt;ADS(b,a.vF);if(a.y7)Js(b.b$,0,2048);b.ca=a.tT;return b;}
function AKy(){D.call(this);}
function Bmy(){var a=new AKy();AS_(a);return a;}
function AS_(a){return;}
function Zy(){D.call(this);}
function Bmz(){var a=new Zy();A79(a);return a;}
function A79(a){return;}
function NA(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function A2P(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=I(Ty,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<Bh(b)){k=NA(Y(b,j));if(k==64){j=j+1|0;k=NA(Y(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|Bi(m,NA(Y(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=NA(Y(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=AV5(i,i+g|0,Ol(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=AV5(i,i+g|0,Ol(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return Nv(c,h);}
function Ty(){var a=this;D.call(a);a.xd=0;a.An=0;a.C7=null;}
function AV5(a,b,c){var d=new Ty();A0M(d,a,b,c);return d;}
function A0M(a,b,c,d){a.xd=b;a.An=c;a.C7=d;}
function R1(){var a=this;D.call(a);a.CE=null;a.Dv=0;}
function AMb(){D.call(this);}
function BmA(){var a=new AMb();A$R(a);return a;}
function A$R(a){return;}
function Ys(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.CE.data;f=b.Dv;b.Dv=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+Bi(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function Wr(){Ew.call(this);this.sJ=null;}
function A3J(a){ED(a.bZ,B(262),60,6,4210752);ED(a.bZ,B(325),8,(a.fl-96|0)+2|0,4210752);}
function AOn(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(832);$p=1;case 1:$z=AHy(c,d);if(C()){break _;}e=$z;BS(1.0,1.0,1.0,1.0);Eb(a.I.bo,e);f=(a.bm-a.e_|0)/2|0;g=(a.bD-a.fl|0)/2|0;CH(a,f,g,0,0,a.e_,a.fl);if(WS(a.sJ)){h=ADN(a.sJ,12);CH(a,f+56|0,((g+36|0)+12|0)-h|0,176,12-h|0,14,h+2|0);}i=AOP(a.sJ,24);CH(a,f+79|0,g+34|0,176,14,i+1|0,16);return;default:Fa();}}C3().s(a,
b,c,d,e,f,g,h,i,$p);}
function Xq(){var a=this;Ew.call(a);a.mo=null;a.uq=null;}
function Zc(a){var b,c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA5(a);if(C()){break _;}b=0;while(b<9){c=Gj(a.mo,b);if(c!==null){d=a.I.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALX(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=9)break;c=Gj(a.mo,b);if(c===null)continue;else{d=a.I.f;continue _;}}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function A6I(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=e+(f*3|0)|0;h=Gj(a.mo,g);if(h!==null)d[g]=h.bB;else d[g]=(-1);f=f+1|0;}e=e+1|0;}Po(a.uq,0,RQ(Ww(),c));}
function A13(a){ED(a.bZ,B(525),28,6,4210752);ED(a.bZ,B(325),8,(a.fl-96|0)+2|0,4210752);}
function AKs(a,b){var c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(833);$p=1;case 1:$z=AHy(c,d);if(C()){break _;}e=$z;BS(1.0,1.0,1.0,1.0);Eb(a.I.bo,e);CH(a,(a.bm-a.e_|0)/2|0,(a.bD-a.fl|0)/2|0,0,0,a.e_,a.fl);return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function AMI(){var a=this;Ew.call(a);a.Fr=null;a.AH=null;a.ku=0;}
function Bb6(a,b){var c=new AMI();A2r(c,a,b);return c;}
function A2r(a,b,c){var d,e,f,g;Ie(a);a.ku=0;a.Fr=b;a.AH=c;a.pS=0;a.ku=c.gl()/9|0;a.fl=114+(a.ku*18|0)|0;d=(a.ku-4|0)*18|0;e=0;while(e<a.ku){f=0;while(f<9){S(a.c7,D7(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){S(a.c7,D7(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=161+d|0;while(e<9){S(a.c7,D7(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function A96(a){ED(a.bZ,a.AH.w8(),8,6,4210752);ED(a.bZ,B(325),8,(a.fl-96|0)+2|0,4210752);}
function ANV(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(834);$p=1;case 1:$z=AHy(c,d);if(C()){break _;}e=$z;BS(1.0,1.0,1.0,1.0);Eb(a.I.bo,e);f=(a.bm-a.e_|0)/2|0;g=(a.bD-a.fl|0)/2|0;CH(a,f,g,0,0,a.e_,(a.ku*18|0)+17|0);CH(a,f,(g+(a.ku*18|0)|0)+17|0,0,126,a.e_,96);return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function CW(){var a=this;EZ.call(a);a.Iu=null;a.gd=0;a.m4=0;a.zI=0;a.zH=0;}
var BmB=null;var BmC=null;var BmD=null;var BmE=null;var BmF=null;var BmG=null;var BmH=null;var BmI=null;var BmJ=null;var BmK=null;var BmL=null;var BmM=null;var BmN=null;var BmO=null;var BmP=null;var BmQ=null;var BmR=null;var BmS=null;var BmT=null;var Bi0=null;function Dl(a,b,c,d,e,f,g){var h=new CW();AEx(h,a,b,c,d,e,f,g);return h;}
function AEx(a,b,c,d,e,f,g,h){FT(a,b,c);a.Iu=d;a.gd=e;a.m4=f;a.zI=g;a.zH=h;}
function AQc(){var b,c;BmB=Dl(B(835),0,B(835),16,16,0,0);BmC=Dl(B(836),1,B(836),16,16,16,0);BmD=Dl(B(837),2,B(837),16,16,32,0);BmE=Dl(B(838),3,B(838),16,16,48,0);BmF=Dl(B(839),4,B(839),16,16,64,0);BmG=Dl(B(840),5,B(840),16,16,80,0);BmH=Dl(B(841),6,B(841),16,16,96,0);BmI=Dl(B(842),7,B(842),32,16,0,32);BmJ=Dl(B(843),8,B(843),32,16,32,32);BmK=Dl(B(844),9,B(844),32,16,64,32);BmL=Dl(B(845),10,B(845),32,16,96,32);BmM=Dl(B(846),11,B(846),16,32,0,64);BmN=Dl(B(847),12,B(847),32,32,0,128);BmO=Dl(B(848),13,B(848),32,32,
32,128);BmP=Dl(B(849),14,B(849),32,32,64,128);BmQ=Dl(B(850),15,B(850),32,32,96,128);BmR=Dl(B(851),16,B(851),32,32,128,128);BmS=Dl(B(852),17,B(852),64,32,0,96);BmT=Dl(B(853),18,B(853),64,64,0,192);b=I(CW,19);c=b.data;c[0]=BmB;c[1]=BmC;c[2]=BmD;c[3]=BmE;c[4]=BmF;c[5]=BmG;c[6]=BmH;c[7]=BmI;c[8]=BmJ;c[9]=BmK;c[10]=BmL;c[11]=BmM;c[12]=BmN;c[13]=BmO;c[14]=BmP;c[15]=BmQ;c[16]=BmR;c[17]=BmS;c[18]=BmT;Bi0=b;}
function PP(){Fd.call(this);this.Cw=null;}
function ACW(a){var b;b=new VN;VH(b,a.Cw);return b;}
function Va(){var a=this;CS.call(a);a.B6=null;a.BV=null;a.BX=null;a.yP=0;}
function AGq(a){S(a.bG,Sn(0,((a.bm/2|0)-155|0)+0|0,(a.bD/6|0)+96|0,B(854)));S(a.bG,Sn(1,((a.bm/2|0)-155|0)+160|0,(a.bD/6|0)+96|0,B(809)));}
function AQv(a,b){var c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B6;d=b.cm?0:1;e=a.yP;$p=1;case 1:AQ$(c,d,e);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function YY(a,b,c,d){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABm(a);if(C()){break _;}DG(a,a.bZ,a.BV,a.bm/2|0,70,16777215);DG(a,a.bZ,a.BX,a.bm/2|0,90,16777215);$p=2;case 2:AFI(a,b,c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,$p);}
function IM(){Fi.call(this);}
function BmU(){var a=new IM();AT9(a);return a;}
function AT9(a){O(a);}
function UU(){var a=this;D.call(a);a.kO=0;a.q0=0;a.xO=null;a.xU=null;a.H2=0;}
function ALv(a,b){var c,d;c=0;while(c<=(3-a.kO|0)){d=0;while(d<=(3-a.q0|0)){if(Vu(a,b,c,d,1))return 1;if(Vu(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Vu(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.kO&&i<a.q0)j=!e?a.xO.data[h+Bi(i,a.kO)|0]:a.xO.data[((a.kO-h|0)-1|0)+Bi(i,a.kO)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function AHo(a,b){return KC(a.xU.bB,a.xU.p);}
function Kr(a){return Bi(a.kO,a.q0);}
function Sv(){var a=this;Bm.call(a);a.Cr=null;a.Jr=null;}
function AVQ(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.dP^EK(a.Cr,c):0;}
function Su(){var a=this;Bm.call(a);a.Ez=null;a.Bj=null;a.GN=null;}
function A3r(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.dP^EK(a.Ez,c):0;return a.Bj.X(b)&&!d?1:0;}
function Px(){var a=this;Bm.call(a);a.sg=null;a.Ht=null;}
function AXX(a,b){return a.ck^EK(a.sg,b);}
function A57(a){var b,c;b=new T;V(b);c=I4(a.sg,0);while(c>=0){Hl(b,Iz(c));Dw(b,124);c=I4(a.sg,c+1|0);}if(b.bY>0)Sp(b,b.bY-1|0);return U(b);}
function T3(){var a=this;Bm.call(a);a.DF=null;a.IC=null;}
function A9s(a,b){return a.DF.X(b);}
function T1(){var a=this;Bm.call(a);a.wu=0;a.CM=null;a.xf=null;}
function A0y(a,b){return !(a.wu^EK(a.xf.b6,b))&&!(a.wu^a.xf.ix^a.CM.X(b))?0:1;}
function T2(){var a=this;Bm.call(a);a.tS=0;a.A_=null;a.vj=null;}
function A7r(a,b){return !(a.tS^EK(a.vj.b6,b))&&!(a.tS^a.vj.ix^a.A_.X(b))?1:0;}
function T6(){var a=this;Bm.call(a);a.E1=0;a.Bd=null;a.A8=null;a.HJ=null;}
function A5f(a,b){return a.E1^(!a.Bd.X(b)&&!a.A8.X(b)?0:1);}
function T7(){var a=this;Bm.call(a);a.Ag=0;a.DA=null;a.Dh=null;a.JP=null;}
function ASN(a,b){return a.Ag^(!a.DA.X(b)&&!a.Dh.X(b)?0:1)?0:1;}
function T4(){var a=this;Bm.call(a);a.zT=null;a.JR=null;}
function AWy(a,b){return D6(a.zT,b);}
function T5(){var a=this;Bm.call(a);a.EL=null;a.HT=null;}
function AYg(a,b){return D6(a.EL,b)?0:1;}
function T9(){var a=this;Bm.call(a);a.Aj=null;a.DC=0;a.AV=null;}
function A1t(a,b){return !D6(a.Aj,b)&&!(a.DC^EK(a.AV.b6,b))?0:1;}
function T$(){var a=this;Bm.call(a);a.AB=null;a.D5=0;a.Au=null;}
function A4W(a,b){return !D6(a.AB,b)&&!(a.D5^EK(a.Au.b6,b))?1:0;}
function Pw(){var a=this;Bm.call(a);a.AR=0;a.EG=null;a.Bt=null;a.Fu=null;}
function A_W(a,b){return !(a.AR^a.EG.X(b))&&!D6(a.Bt,b)?0:1;}
function PK(){var a=this;Bm.call(a);a.EU=0;a.y2=null;a.y8=null;a.FJ=null;}
function AWD(a,b){return !(a.EU^a.y2.X(b))&&!D6(a.y8,b)?1:0;}
function Pu(){var a=this;Bm.call(a);a.C0=null;a.FM=null;}
function AU7(a,b){return D6(a.C0,b);}
function Pv(){var a=this;Bm.call(a);a.zM=null;a.JM=null;}
function A5U(a,b){return D6(a.zM,b)?0:1;}
function PA(){var a=this;Bm.call(a);a.E0=null;a.AA=0;a.Fh=null;}
function AXi(a,b){return D6(a.E0,b)&&a.AA^EK(a.Fh.b6,b)?1:0;}
function Pt(){var a=this;Bm.call(a);a.Eg=null;a.DJ=0;a.Ay=null;}
function A$p(a,b){return D6(a.Eg,b)&&a.DJ^EK(a.Ay.b6,b)?0:1;}
function Py(){var a=this;Bm.call(a);a.En=0;a.Cp=null;a.Af=null;a.HI=null;}
function A4i(a,b){return a.En^a.Cp.X(b)&&D6(a.Af,b)?1:0;}
function Pz(){var a=this;Bm.call(a);a.Ec=0;a.B4=null;a.Em=null;a.HZ=null;}
function AZK(a,b){return a.Ec^a.B4.X(b)&&D6(a.Em,b)?0:1;}
function OV(){IC.call(this);}
function AV9(a,b,c,d){var e,f,g;e=0;f=d.by;a:{while(true){if(b>f){b=e;break a;}g=Ho(d,a.cK);EM(d,a.cK,b);e=a.fo.k(b,c,d);if(e>=0)break;EM(d,a.cK,g);b=b+1|0;}}return b;}
function A_L(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Ho(e,a.cK);EM(e,a.cK,c);f=a.fo.k(c,d,e);if(f>=0)break;EM(e,a.cK,g);c=c+(-1)|0;}}return c;}
function AUV(a){return null;}
function VN(){IP.call(this);}
function Lo(a){Wi(a);return a.hm.gb;}
function Ng(){Fc.call(this);}
var BmV=0.0;var BmW=null;function AJZ(){BmV=NaN;BmW=F($rt_doublecls());}
function Mt(){}
function VF(){var a=this;D.call(a);a.FE=null;a.EH=null;a.pJ=null;a.dC=null;a.qT=0;a.si=0;}
function OL(a,b){var c,d;c=Bh(a.pJ);if(b>=0&&b<=c){AAb(a.dC);a.dC.nr=1;AP2(a.dC,b);b=a.EH.eI(b,a.pJ,a.dC);if(b==(-1))a.dC.hr=1;if(b>=0&&a.dC.ob){AC8(a.dC);return 1;}a.dC.hy=(-1);return 0;}d=new BM;Bl(d,V0(b));M(d);}
function ABf(a){var b,c;b=Bh(a.pJ);if(!YO(a))b=a.si;if(a.dC.hy>=0&&a.dC.nr==1){a.dC.hy=MM(a.dC);if(MM(a.dC)==AEO(a.dC)){c=a.dC;c.hy=c.hy+1|0;}return a.dC.hy<=b&&OL(a,a.dC.hy)?1:0;}return OL(a,a.qT);}
function AHT(a,b){return PJ(a.dC,b);}
function Yr(a,b){return QQ(a.dC,b);}
function AHc(a){return AHT(a,0);}
function AK2(a){return Yr(a,0);}
function YO(a){return a.dC.oe;}
function Ur(){}
function Sk(){}
function S8(){Fd.call(this);this.n$=null;}
var BmX=null;function Bb5(){var a=new S8();AAp(a);return a;}
function AAp(a){a.n$=BcE();}
function JA(a){return AIv(a.n$);}
function Zo(a,b){return ASD(a.n$,b,b)===BmX?0:1;}
function MI(a,b){return AGt(a.n$,b)!==BmX?0:1;}
function M6(a){return ADC(a.n$);}
function AAY(){BmX=new D;}
function SU(){}
function OX(){}
function AJ3(){var a=this;FY.call(a);a.kp=null;a.tA=null;a.GY=null;a.tH=0;}
function BcE(){var a=new AJ3();ATZ(a);return a;}
function ATZ(a){var b;b=null;a.GY=b;if(b===null){b=new QZ;b.Jd=a;}a.tA=b;}
function ASD(a,b,c){var d,e;a.kp=Oq(a,a.kp,b);d=Wt(a,b);e=Td(d,c);Td(d,c);a.tH=a.tH+1|0;return e;}
function AGt(a,b){var c;c=Wt(a,b);if(c===null)return null;a.kp=Ly(a,a.kp,b);a.tH=a.tH+1|0;return c.nV;}
function Wt(a,b){var c,d;c=a.kp;while(true){if(c===null)return null;d=Os(a.tA,b,c.nh);if(!d)break;c=d>=0?c.dk:c.db;}return c;}
function Oq(a,b,c){var d,e;if(b===null){b=new Le;d=null;b.nh=c;b.nV=d;b.lE=1;b.jo=1;return b;}e=Os(a.tA,c,b.nh);if(!e)return b;if(e>=0)b.dk=Oq(a,b.dk,c);else b.db=Oq(a,b.db,c);FO(b);return M7(b);}
function Ly(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Os(a.tA,c,b.nh);if(d<0)b.db=Ly(a,b.db,c);else if(d>0)b.dk=Ly(a,b.dk,c);else{if(b.dk===null)return b.db;e=b.db;b=b.dk;f=I(Le,b.lE);g=0;while(b.db!==null){h=f.data;i=g+1|0;h[g]=b;b=b.db;g=i;}c=b.dk;while(g>0){h=f.data;g=g+(-1)|0;j=h[g];j.db=c;FO(j);c=M7(j);}b.dk=c;b.db=e;FO(b);}FO(b);return M7(b);}
function ADC(a){var b,c,d;b=a.kp;c=null;while(b!==null){d=AOp(b,0);c=b;b=d;}if(c!==null)return c.nh;b=new J4;O(b);M(b);}
function AIv(a){return a.kp===null?0:a.kp.jo;}
function QZ(){D.call(this);this.Jd=null;}
function Os(a,b,c){return b===null?TP(c,b):TP(b,c);}
function VP(){Bm.call(this);this.Iw=null;}
function A1A(a,b){return Dn(b)!=2?0:1;}
function Tk(){Bm.call(this);this.IF=null;}
function A37(a,b){return Dn(b)!=1?0:1;}
function QP(){Bm.call(this);this.H9=null;}
function ATC(a,b){return Qk(b);}
function QO(){Bm.call(this);this.FO=null;}
function A5N(a,b){return 0;}
function SD(){Bm.call(this);this.GZ=null;}
function AW9(a,b){return !Dn(b)?0:1;}
function Uh(){Bm.call(this);this.IV=null;}
function A$T(a,b){return Dn(b)!=9?0:1;}
function Pk(){Bm.call(this);this.He=null;}
function AZj(a,b){return Ix(b);}
function U_(){Bm.call(this);this.Gh=null;}
function A0m(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Th(){Bm.call(this);this.Fl=null;}
function A_A(a,b){a:{b:{switch(Dn(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ix(b);}return b;}
function Tj(){Bm.call(this);this.GF=null;}
function AVm(a,b){a:{b:{switch(Dn(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ix(b);}return b;}
function Pb(){Bm.call(this);this.GX=null;}
function A1N(a,b){a:{switch(Dn(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Ux(){Bm.call(this);this.JA=null;}
function A7E(a,b){return Lf(b);}
function UA(){Bm.call(this);this.F2=null;}
function A87(a,b){return UB(b);}
function V7(){Bm.call(this);this.I5=null;}
function A$I(a,b){return Dn(b)!=3?0:1;}
function VG(){Bm.call(this);this.Fp=null;}
function A19(a,b){a:{b:{switch(Dn(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Ix(b);}return b;}
function OP(){Bm.call(this);this.JS=null;}
function AVd(a,b){a:{b:{switch(Dn(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Ix(b);}return b;}
function ME(){Bm.call(this);this.u9=0;}
function Bbs(a){var b=new ME();ADS(b,a);return b;}
function ADS(a,b){BY(a);a.u9=b;}
function AZk(a,b){return a.ck^(a.u9!=Dn(b&65535)?0:1);}
function Vt(){ME.call(this);}
function A97(a,b){return a.ck^(!(a.u9>>Dn(b&65535)&1)?0:1);}
function Nn(){D.call(this);}
var BmY=null;var BmZ=null;function Bm0(){var a=new Nn();ASr(a);return a;}
function ASr(a){return;}
function Dz(b,c){BP(BmY,c,b);BP(BmZ,b,c);}
function Jo(b,c){var d,e,f,g,h,$$je;d=null;a:{try{e=d;f=CP(BmY,b);if(f!==null){e=d;g=I(FS,1);g.data[0]=F(F0);b=WI(f,g);g=I(D,1);g.data[0]=c;d=WL(b,g);e=d;}break a;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){h=$$je;}else{throw $$e;}}CF(h);d=e;}return d;}
function AIp(){BmY=Dd();BmZ=Dd();Dz(F(Jv),B(855));Dz(F(E_),B(856));Dz(F(II),B(857));Dz(F(ER),B(858));Dz(F(DQ),B(859));Dz(F(J1),B(860));Dz(F(Jp),B(861));Dz(F(Kq),B(862));Dz(F(Lb),B(863));Dz(F(I$),B(864));Dz(F(IE),B(582));Dz(F(KJ),B(865));Dz(F(Mu),B(866));Dz(F(JP),B(867));Dz(F(Gi),B(868));}
function J0(){var a=this;D.call(a);a.fG=0;a.fp=0;a.fL=0;a.qa=0;a.jj=Long_ZERO;a.oT=Long_ZERO;}
var BkE=Long_ZERO;function A$C(a,b){var c;if(!(b instanceof J0))return 0;c=b;return a.fG==c.fG&&a.fp==c.fp&&a.fL==c.fL&&a.qa==c.qa?1:0;}
function A7P(a){return (((((a.fG*128|0)*1024|0)+(a.fL*128|0)|0)+a.fp|0)*256|0)+a.qa|0;}
function A0t(a,b){a.jj=b;return a;}
function ANG(a,b){return Long_lt(a.jj,b.jj)?(-1):Long_gt(a.jj,b.jj)?1:Long_lt(a.oT,b.oT)?(-1):Long_le(a.oT,b.oT)?0:1;}
function TP(a,b){return ANG(a,b);}
function AGc(){BkE=Long_ZERO;}
function Lc(){}
function V5(){var a=this;D.call(a);a.nj=null;a.kR=null;a.jn=null;a.bl=null;a.ns=null;a.fU=0;a.gp=0;a.gg=null;}
function B0(a,b,c){var d;if(b==a.fU&&c==a.gp&&a.gg!==null)return 1;a:{b:{d=(b&31)+((c&31)*32|0)|0;if(a.bl.data[d]!==null){if(a.bl.data[d]===a.nj)break b;if(ARL(a.bl.data[d],b,c))break b;}b=0;break a;}b=1;}return b;}
function AOj(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b==a.fU&&c==a.gp&&a.gg!==null)return a.gg;d=(b&31)+((c&31)*32|0)|0;if(!B0(a,b,c)){Be0=1;if(a.bl.data[d]!==null){AOR(a.bl.data[d]);LL(a,a.bl.data[d]);MV(a,a.bl.data[d]);}if(a.jn===null)e=null;else{try{f=a.jn;e=a.ns;$p=1;continue _;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){f=$$je;}else{throw $$e;}}CF(f);e=null;}if
(e===null){if(a.kR!==null){f=a.kR;$p=2;continue _;}e=a.nj;}a.bl.data[d]=e;if(a.bl.data[d]!==null)MH(a.bl.data[d]);if(!a.bl.data[d].hh){g=b+1|0;h=c+1|0;if(B0(a,g,h)&&B0(a,b,h)&&B0(a,g,c)){$p=6;continue _;}}g=b-1|0;if(B0(a,g,c)){$p=3;continue _;}h=c-1|0;if(B0(a,b,h)){$p=4;continue _;}if(B0(a,g,h)){$p=5;continue _;}Be0=0;}a.fU=b;a.gp=c;a.gg=a.bl.data[d];return a.bl.data[d];case 1:a:{try{$z=AG1(f,e,b,c);if(C()){break _;}e=$z;if(e!==null)e.s5=a.ns.ee;break a;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){f=$$je;}
else{throw $$e;}}CF(f);e=null;}if(e===null){if(a.kR!==null){f=a.kR;$p=2;continue _;}e=a.nj;}a.bl.data[d]=e;if(a.bl.data[d]!==null)MH(a.bl.data[d]);if(!a.bl.data[d].hh){g=b+1|0;h=c+1|0;if(B0(a,g,h)&&B0(a,b,h)&&B0(a,g,c)){$p=6;continue _;}}g=b-1|0;if(B0(a,g,c)){$p=3;continue _;}h=c-1|0;if(B0(a,b,h)){$p=4;continue _;}if(!B0(a,g,h)){Be0=0;a.fU=b;a.gp=c;a.gg=a.bl.data[d];return a.bl.data[d];}$p=5;continue _;case 2:$z=Ue(f,b,c);if(C()){break _;}e=$z;a.bl.data[d]=e;if(a.bl.data[d]!==null)MH(a.bl.data[d]);if(!a.bl.data[d].hh)
{g=b+1|0;h=c+1|0;if(B0(a,g,h)&&B0(a,b,h)&&B0(a,g,c)){$p=6;continue _;}}g=b-1|0;if(B0(a,g,c)){$p=3;continue _;}h=c-1|0;if(B0(a,b,h)){$p=4;continue _;}if(!B0(a,g,h)){Be0=0;a.fU=b;a.gp=c;a.gg=a.bl.data[d];return a.bl.data[d];}$p=5;continue _;case 3:$z=AOj(a,g,c);if(C()){break _;}f=$z;if(!f.hh){h=c+1|0;if(B0(a,g,h)&&B0(a,b,h)&&B0(a,g,c)){$p=7;continue _;}}h=c-1|0;if(B0(a,b,h)){$p=4;continue _;}if(!B0(a,g,h)){Be0=0;a.fU=b;a.gp=c;a.gg=a.bl.data[d];return a.bl.data[d];}$p=5;continue _;case 4:$z=AOj(a,b,h);if(C()){break _;}f
=$z;if(!f.hh){i=b+1|0;if(B0(a,i,h)&&B0(a,b,h)&&B0(a,i,c)){$p=8;continue _;}}if(!B0(a,g,h)){Be0=0;a.fU=b;a.gp=c;a.gg=a.bl.data[d];return a.bl.data[d];}$p=5;case 5:$z=AOj(a,g,h);if(C()){break _;}f=$z;if(!f.hh&&B0(a,g,h)&&B0(a,b,h)&&B0(a,g,c)){$p=9;continue _;}Be0=0;a.fU=b;a.gp=c;a.gg=a.bl.data[d];return a.bl.data[d];case 6:AFu(a,a,b,c);if(C()){break _;}g=b-1|0;if(B0(a,g,c)){$p=3;continue _;}h=c-1|0;if(B0(a,b,h)){$p=4;continue _;}if(!B0(a,g,h)){Be0=0;a.fU=b;a.gp=c;a.gg=a.bl.data[d];return a.bl.data[d];}$p=5;continue _;case 7:AFu(a,
a,g,c);if(C()){break _;}h=c-1|0;if(B0(a,b,h)){$p=4;continue _;}if(!B0(a,g,h)){Be0=0;a.fU=b;a.gp=c;a.gg=a.bl.data[d];return a.bl.data[d];}$p=5;continue _;case 8:AFu(a,a,b,h);if(C()){break _;}if(!B0(a,g,h)){Be0=0;a.fU=b;a.gp=c;a.gg=a.bl.data[d];return a.bl.data[d];}$p=5;continue _;case 9:AFu(a,a,g,h);if(C()){break _;}Be0=0;a.fU=b;a.gp=c;a.gg=a.bl.data[d];return a.bl.data[d];default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function MV(a,b){var c,$$je;a:{if(a.jn!==null){try{AHu(a.jn,a.ns,b);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof BO){c=$$je;}else{throw $$e;}}c.tE();}}}
function LL(a,b){var c,$$je;a:{if(a.jn!==null){try{b.s5=a.ns.ee;Y0(a.jn,a.ns,b);break a;}catch($$e){$$je=Bj($$e);if($$je instanceof B3){c=$$je;}else{throw $$e;}}CF(c);}}}
function AFu(a,b,c,d){var e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AOj(a,c,d);if(C()){break _;}e=$z;if(!e.hh){e.hh=1;if(a.kR!==null){f=a.kR;$p=2;continue _;}}return;case 2:AH0(f,b,c,d);if(C()){break _;}SQ(e);return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function AN3(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;e=0;if(c!==null){f=0;while(f<a.bl.data.length){if(a.bl.data[f]!==null&&Nu(a.bl.data[f],b))e=e+1|0;f=f+1|0;}}g=0;h=0;while(true){if(h>=a.bl.data.length){if(b&&a.jn===null)return 1;return 1;}if(a.bl.data[h]!==null){if(b&&!a.bl.data[h].to)MV(a,a.bl.data[h]);if(Nu(a.bl.data[h],b)){LL(a,a.bl.data[h]);a.bl.data[h].fv=0;d=d+1|0;if(d
==2&&!b)break;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=1;continue _;}}}}h=h+1|0;}return 0;case 1:XO(c,f);if(C()){break _;}while(true){h=h+1|0;if(h>=a.bl.data.length){if(b&&a.jn===null)return 1;return 1;}if(a.bl.data[h]===null)continue;if(b&&!a.bl.data[h].to)MV(a,a.bl.data[h]);if(!Nu(a.bl.data[h],b))continue;LL(a,a.bl.data[h]);a.bl.data[h].fv=0;d=d+1|0;if(d==2&&!b)break;if(c===null)continue;g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;continue _;}}return 0;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A_x(a){return 1;}
function Qj(){}
function Xs(){D.call(this);this.r4=null;}
function Og(a,b,c){var d,e,f,g,h;d=b+30233088|0;e=c+30233088|0;f=Bh(B(869));g=new T;GD(g,10);h=0;while(h<5){Dw(g,Y(B(869),d%f|0));d=d/f|0;Dw(g,Y(B(869),e%f|0));e=e/f|0;h=h+1|0;}return U(g);}
function AG1(a,b,c,d){var e,f,g,h,i,j,k,l,$$je,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Og(a,c,d);f=new T;V(f);g=U(J(J(J(f,a.r4),B(23)),e));$p=1;case 1:$z=ALK(g);if(C()){break _;}h=$z;if(h===null)return null;a:{b:{try{f=MZ(O3(Us(h)));i=FW(f,B(870));j=FW(f,B(871));if(c!=i)break b;if(d!=j)break b;b=A24(b,f);}catch($$e){$$je=Bj($$e);if($$je instanceof B3){k=$$je;break a;}
else{throw $$e;}}return b;}try{l=Og(a,i,j);Co(DB(),BT(J(Bf(J(Bf(J(J(J(J(J(Bf(J(Bf(J(Bf(J(Bf(J(J(J(B4(),B(872)),e),B(873)),c),B(632)),d),B(874)),i),B(632)),j),B(875)),l),B(876)),e),B(877)),c),B(632)),d),B(245))));NH(g,BT(J(J(J(B4(),a.r4),B(23)),l)));b=null;}catch($$e){$$je=Bj($$e);if($$je instanceof B3){k=$$je;break a;}else{throw $$e;}}return b;}b=DB();f=new T;V(f);Co(b,U(J(Bf(J(Bf(J(J(J(f,B(878)),e),B(879)),c),B(632)),d),B(245))));Co(DB(),B(880));EQ(g);CF(k);return null;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,
i,j,k,l,$p);}
function Y0(a,b,c){var d,e,f,g,h,$$je;d=Ha();AF5(a,c,b,d);e=A$k(98304);a:{try{f=AWn(BbP(e));}catch($$e){$$je=Bj($$e);if($$je instanceof B3){g=$$je;break a;}else{throw $$e;}}b:{try{try{R4(d,f);AHM(f);h=Ig(e);QT(BT(J(J(J(B4(),a.r4),B(23)),Og(a,c.gA,c.gu))),h);}catch($$e){$$je=Bj($$e);if($$je instanceof EE){b=$$je;break b;}else{throw $$e;}}Of(f);}catch($$e){$$je=Bj($$e);if($$je instanceof B3){g=$$je;break a;}else{throw $$e;}}return;}try{c:{try{Of(f);break c;}catch($$e){$$je=Bj($$e);if($$je instanceof EE){d=$$je;}
else{throw $$e;}}AQE(b,d);}M(b);}catch($$e){$$je=Bj($$e);if($$je instanceof B3){g=$$je;}else{throw $$e;}}}b=DB();d=new T;V(d);Co(b,U(J(Bf(J(Bf(J(d,B(881)),c.gA),B(632)),c.gu),B(882))));CF(g);}
function AF5(a,b,c,d){Gz(d,B(870),b.gA);Gz(d,B(871),b.gu);Id(d,B(883),c.ee);IS(d,B(884),b.g3);IS(d,B(356),b.gh.gB);IS(d,B(885),b.hF.gB);IS(d,B(886),b.jy.gB);IS(d,B(887),b.fu);S5(d,B(888),b.hh);b.r_=0;AG$(new QY);}
function A24(b,c){var d;d=BaP(b,FW(c,B(870)),FW(c,B(871)));d.g3=IJ(c,B(884));d.gh=AIO(IJ(c,B(356)));d.hF=AIO(IJ(c,B(885)));d.jy=AIO(IJ(c,B(886)));d.fu=IJ(c,B(887));d.hh=Uy(c,B(888));if(!Mm(d.gh))d.gh=Lx(d.g3.data.length);if(!(d.fu!==null&&Mm(d.hF))){d.fu=$rt_createByteArray(256);d.hF=Lx(d.g3.data.length);Sl(d);}if(!Mm(d.jy))d.jy=Lx(d.g3.data.length);return d;}
function A4Z(a){return;}
function AHu(a,b,c){return;}
function Sz(){var a=this;D.call(a);a.a=null;a.yV=null;a.yW=null;a.yU=null;a.tP=null;a.yY=null;a.yZ=null;a.yX=null;a.iU=null;a.t=null;a.h2=null;a.vV=null;a.vT=null;a.vU=null;a.vW=null;a.vX=null;a.Gi=null;}
function ZB(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;a.h2=Zq(a,a.h2,b*4|0,0,c*4|0,5,17,5);e=0;while(e<4){f=0;while(f<4){g=0;while(g<16){h=a.h2.data;c=((e+0|0)*5|0)+f|0;i=((c+0|0)*17|0)+g|0;j=h[i+0|0];h=a.h2.data;b=((c+1|0)*17|0)+g|0;k=h[b+0|0];h=a.h2.data;l=((e+1|0)*5|0)+f|0;m=((l+0|0)*17|0)+g|0;n=h[m+0|0];h=a.h2.data;c=((l+1|0)*17|0)+g|0;o=h[c+0|0];p=(a.h2.data[i+1|0]-j)*0.125;q=(a.h2.data[b+1|0]-k)*0.125;r=(a.h2.data[m+1|0]-n)*0.125;s=(a.h2.data[c+1|0]-o)*0.125;t=0;while(t<8){u=(n-j)
*0.25;v=(o-k)*0.25;w=0;x=j;y=k;while(w<4){b=(w+(e*4|0)|0)<<11|(0+(f*4|0)|0)<<7;c=(g*8|0)+t|0;m=b|c;z=(y-x)*0.25;ba=0;c=R(c,64);bb=x;while(ba<4){i=0;if(c<0){L();i=BgJ.b;}if(bb>0.0){L();i=BeZ.b;}d.data[m]=i<<24>>24;m=m+128|0;bb=bb+z;ba=ba+1|0;}x=x+u;y=y+v;w=w+1|0;}j=j+p;k=k+q;n=n+r;o=o+s;t=t+1|0;}g=g+1|0;}f=f+1|0;}e=e+1|0;}}
function ACA(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=0;f=b*16|0;c=c*16|0;while(e<16){g=0;while(g<16){h=f+e|0;i=c+g|0;j=a.tP;k=h*0.03125;l=i*0.03125;m=Vb(j,k,l,0.0)+Cj(a.a)*0.2<=0.0?0:1;n=Vb(a.tP,l,109.0134,k)+Cj(a.a)*0.2<=3.0?0:1;o=E1(a.yY,k*2.0,l*2.0)/3.0+3.0+Cj(a.a)*0.25|0;p=(-1);L();q=BeV.b;r=BeW.b;s=(((e*16|0)+g|0)*128|0)+128|0;t=127;while(t>=0){s=s+(-1)|0;if(t<=((0+E(a.a,6)|0)-1|0))d.data[s]=BeU.b<<24>>24;else{u=d.data;if(!u[s])p=(-1);else if(u[s]==BeZ.b){if(p==(-1)){if(o<=0){q=0;r=BeZ.b<<24>>
24;}else if(t>=60&&t<=65){q=BeV.b;r=BeW.b;if(n)q=0;if(n)r=Bff.b;if(m)q=Bfe.b;if(m)r=Bfe.b;}if(t<64&&!q)q=BgJ.b;if(t<63){u[s]=r<<24>>24;p=o;}else{u[s]=q<<24>>24;p=o;}}else if(p>0){p=p+(-1)|0;u[s]=r<<24>>24;}}}t=t+(-1)|0;}g=g+1|0;}e=e+1|0;}}
function Ue(a,b,c){var d,e;d=$rt_createByteArray(32768);e=A9w(a.t,d,b,c);ZB(a,b,c,d);ACA(a,b,c,d);ARZ(a,b,c,d);Sl(e);return e;}
function APY(a,b,c,d,e,f,g){Jj(a,b,c,d,e,f,g,1.0+N(a.a)*6.0,0.0,0.0,(-1),(-1),0.5);}
function Jj(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD;n=b*16|0;o=n+8|0;p=c*16|0;q=p+8|0;r=0.0;s=0.0;t=BbE(GA(a.a));if(l<=0)l=112-E(t,28)|0;u=0;if(k==(-1)){k=l/2|0;u=1;}v=E(t,l/2|0)+(l/4|0)|0;w=E(t,6)?0:1;x=R(h,1.0);y=h+2.0+16.0;y=y*y;z=o-16.0;ba=q-16.0;bb=o+16.0;bc=q+16.0;a:{while(true){if(k>=l)break a;bd=1.5+Bq(k*3.1415927410125732/l)*h*1.0;be=bd*m;bf=BC(j);bg=Bq(j);e=e+BC(i)*bf;f=f+bg;g=g+Bq(i)*bf;j=(!w
?j*0.699999988079071:j*0.9200000166893005)+s*0.10000000149011612;i=i+r*0.10000000149011612;bh=s*0.8999999761581421;bf=r*0.75;s=bh+(N(t)-N(t))*N(t)*2.0;r=bf+(N(t)-N(t))*N(t)*4.0;if(!u&&k==v&&x>0){h=N(t)*0.5+0.5;bh=i-1.5707963705062866;j=j/3.0;Jj(a,b,c,d,e,f,g,h,bh,j,k,l,1.0);Jj(a,b,c,d,e,f,g,N(t)*0.5+0.5,i+1.5707963705062866,j,k,l,1.0);return;}if(!(!u&&!E(t,4))){bi=e-o;bj=g-q;bk=l-k|0;if(bi*bi+bj*bj-bk*bk>y)break;bl=bd*2.0;if(e>=z-bl&&g>=ba-bl&&e<=bb+bl&&g<=bc+bl){bm=(K(e-bd)-n|0)-1|0;bn=(K(e+bd)-n|0)+1|0;bo
=K(f-be)-1|0;bp=K(f+be)+1|0;bq=(K(g-bd)-p|0)-1|0;br=(K(g+bd)-p|0)+1|0;if(bm<0)bm=0;if(bn>16)bn=16;if(bo<1)bo=1;if(bp>120)bp=120;if(bq<0)bq=0;if(br>16)br=16;bs=0;bt=bm;while(!bs&&bt<bn){bu=bq;while(!bs&&bu<br){bv=bp+1|0;while(!bs){bw=R(bv,bo-1|0);if(bw<0)break;bx=(((bt*16|0)+bu|0)*128|0)+bv|0;if(bv>=0&&bv<128){by=d.data;bz=by[bx];L();if(!(bz!=Bf3.b&&by[bx]!=BgJ.b))bs=1;if(bw&&bt!=bm&&bt!=(bn-1|0)&&bu!=bq&&bu!=(br-1|0))bv=bo;}bv=bv+(-1)|0;}bu=bu+1|0;}bt=bt+1|0;}if(!bs){while(bm<bn){bA=((bm+n|0)+0.5-e)/bd;bi=bA
*bA;bx=bq;while(bx<br){bB=((bx+p|0)+0.5-g)/bd;bC=(((bm*16|0)+bx|0)*128|0)+bp|0;bw=0;bD=bp-1|0;bB=bB*bB;while(bD>=bo){bl=(bD+0.5-f)/be;if(bl>(-0.7)&&bi+bl*bl+bB<1.0){by=d.data;bz=by[bC];L();if(bz==BeV.b)bw=1;if(!(bz!=BeZ.b&&bz!=BeW.b&&bz!=BeV.b)){if(bD<10)by[bC]=Bf4.b<<24>>24;else{by[bC]=0;if(bw){bz=bC-1|0;if(by[bz]==BeW.b)by[bz]=BeV.b<<24>>24;}}}}bC=bC+(-1)|0;bD=bD+(-1)|0;}bx=bx+1|0;}bm=bm+1|0;}if(u)break a;}}}k=k+1|0;}return;}}
function ARZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;GA(a.a);GA(a.a);e=b-8|0;f=b+8|0;g=c-8|0;h=c+8|0;while(e<=f){i=g;while(i<=h){j=E(a.a,E(a.a,E(a.a,40)+1|0)+1|0);if(E(a.a,15))j=0;k=0;while(k<j){l=(e*16|0)+E(a.a,16)|0;m=E(a.a,E(a.a,120)+8|0);n=(i*16|0)+E(a.a,16)|0;o=1;if(!E(a.a,4)){APY(a,b,c,d,l,m,n);o=o+E(a.a,4)|0;}p=0;while(p<o){q=N(a.a)*3.1415927410125732*2.0;r=(N(a.a)-0.5)*2.0/8.0;Jj(a,b,c,d,l,m,n,N(a.a)*2.0+N(a.a),q,r,0,0,1.0);p=p+1|0;}k=k+1|0;}i=i+1|0;}e=e+1|0;}}
function Zq(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(b===null)b=$rt_createDoubleArray(Bi(Bi(f,g),h));a.vW=H6(a.yZ,a.vW,c,d,e,f,1,h,1.0,0.0,1.0);a.vX=H6(a.yX,a.vX,c,d,e,f,1,h,100.0,0.0,100.0);a.vV=H6(a.yU,a.vV,c,d,e,f,g,h,8.555150000000001,4.277575000000001,8.555150000000001);a.vT=H6(a.yV,a.vT,c,d,e,f,g,h,684.412,684.412,684.412);a.vU=H6(a.yW,a.vU,c,d,e,f,g,h,684.412,684.412,684.412);i=0;j=0;k=0;l=g;d=g-4|0;m=l/2.0;while(k<f){n=0;while(n<h){o=(a.vW.data[j]+256.0)/512.0;if(o>1.0)o=1.0;p=a.vX.data[j]
/8000.0;if(p<0.0)p= -p;q=p*3.0-3.0;if(q>=0.0){if(q>1.0)q=1.0;q=q/6.0;}else{o=q/2.0;if(o<(-1.0))o=(-1.0);q=o/1.4/2.0;o=0.0;}r=o+0.5;s=m+q*l/16.0*4.0;j=j+1|0;t=0;while(t<g){p=t;u=(p-s)*12.0/r;if(u<0.0)u=u*4.0;v=a.vT.data[i]/512.0;q=a.vU.data[i]/512.0;w=(a.vV.data[i]/10.0+1.0)/2.0;if(w>=0.0)v=w>1.0?q:v+(q-v)*w;o=v-u;if(t>d){x=(t-d|0)/3.0;o=o*(1.0-x)+(-10.0)*x;}if(p<0.0){x=(0.0-p)/4.0;if(x<0.0)x=0.0;if(x>1.0)x=1.0;o=o*(1.0-x)+(-10.0)*x;}b.data[i]=o;i=i+1|0;t=t+1|0;}n=n+1|0;}k=k+1|0;}return b;}
function AH0(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=c*16|0;f=d*16|0;NP(a.a,a.t.lw);g=Long_add(Long_mul(Long_div(GA(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));h=Long_add(Long_mul(Long_div(GA(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));NP(a.a,Long_xor(Long_add(Long_mul(Long_fromInt(c),
g),Long_mul(Long_fromInt(d),h)),a.t.lw));i=0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYs();m=a.t;n=a.a;$p=1;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,BeW.b,32);m=a.t;n=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bff.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfi.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,
16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfj.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfk.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bg4.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E1(a.iU,e*0.5,f*0.5)/8.0+Cj(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c
=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfa.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfb.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfc.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfd.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50)
{l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p=15;continue _;case 1:XU(b,m,n,j,k,l);if(C()){break _;}i=i+1|0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYs();m=a.t;n=a.a;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,BeW.b,32);m=a.t;n
=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bff.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfi.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfj.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfk.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,
16);k=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bg4.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E1(a.iU,e*0.5,f*0.5)/8.0+Cj(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfa.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfb.b);m=a.t;n=a.a;$p=11;continue _;}if
(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfc.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfd.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=
a.t;n=a.a;$p=15;continue _;case 2:ABX(b,m,n,j,k,l);if(C()){break _;}o=o+1|0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,BeW.b,32);m=a.t;n=a.a;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bff.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfi.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfj.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfk.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bg4.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E1(a.iU,e*0.5,f*0.5)/8.0+Cj(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,
Bfa.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfb.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfc.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfd.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,
Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p=15;continue _;case 3:ABX(b,m,n,o,k,l);if(C()){break _;}j=j+1|0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bff.b,32);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfi.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)
|0;b=new Cf;L();Ck(b,Bfj.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfk.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bg4.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E1(a.iU,e*0.5,f*0.5)/8.0+Cj(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)
|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfa.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfb.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfc.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfd.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p
=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p=15;continue _;case 4:ABX(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfi.b,16);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfj.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfk.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bg4.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E1(a.iU,e*0.5,f*0.5)/8.0+Cj(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,
Bfa.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfb.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfc.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfd.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,
Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p=15;continue _;case 5:ABX(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfj.b,8);m=a.t;n=a.a;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bfk.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)
|0;b=new Cf;L();Ck(b,Bg4.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E1(a.iU,e*0.5,f*0.5)/8.0+Cj(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfa.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfb.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,
4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfc.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfd.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p
=15;continue _;case 6:ABX(b,m,n,c,j,k);if(C()){break _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Cf;L();Ck(b,Bg4.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E1(a.iU,e*0.5,f*0.5)/8.0+Cj(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfa.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e
+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfb.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfc.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfd.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p=15;continue _;case 7:ABX(b,m,n,c,j,k);if(C()){break _;}c=(E1(a.iU,e*0.5,f*0.5)/8.0+Cj(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfa.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c
=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfb.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfc.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfd.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p=15;continue _;case 8:$z=ALM(q,l,p);if(C()){break _;}d=$z;$p=9;case 9:AEP(m,b,n,l,d,p);if(C()){break _;}k=k+1|0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfa.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+
E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfb.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfc.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfd.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p=15;continue _;case 10:ACS(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfa.b);m=a.t;n=a.a;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfb.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfc.b);m=a.t;n=a.a;$p=12;continue _;}if
(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfd.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p=15;continue _;case 11:ACS(b,m,n,c,l,p);if(C()){break _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,
16)|0)+8|0;b=new BQ;L();BR(b,Bfc.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfd.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p=15;continue _;case 12:ACS(b,m,n,c,l,p);if(C())
{break _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BQ;L();BR(b,Bfd.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p=15;continue _;case 13:ACS(b,m,n,c,l,p);if(C()){break _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf3.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p=15;continue _;case 14:AL6(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf3.b);m=a.t;n=a.a;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8
|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;$p=15;case 15:AL6(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cl;L();Cr(b,Bf4.b);m=a.t;n=a.a;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function WB(){var a=this;D.call(a);a.gG=null;a.oR=null;a.xu=null;a.uW=null;a.zz=0;a.ob=0;a.fg=0;a.by=0;a.hy=0;a.oe=0;a.lm=0;a.hr=0;a.Jl=0;a.k1=0;a.nr=0;}
function Cu(a,b,c){a.oR.data[b]=c;}
function Ep(a,b){return a.oR.data[b];}
function MM(a){return QQ(a,0);}
function QQ(a,b){Vs(a,b);return a.gG.data[(b*2|0)+1|0];}
function EM(a,b,c){a.gG.data[b*2|0]=c;}
function M3(a,b,c){a.gG.data[(b*2|0)+1|0]=c;}
function Ho(a,b){return a.gG.data[b*2|0];}
function JL(a,b){return a.gG.data[(b*2|0)+1|0];}
function AM$(a,b){var c,d;c=Ho(a,b);d=JL(a,b);if((d|c|(d-c|0))>=0&&d<=Bh(a.uW))return Ev(a.uW,c,d);return null;}
function AEO(a){return PJ(a,0);}
function PJ(a,b){Vs(a,b);return a.gG.data[b*2|0];}
function AC8(a){if(a.gG.data[0]==(-1)){a.gG.data[0]=a.hy;a.gG.data[1]=a.hy;}a.k1=MM(a);}
function To(a,b){return a.xu.data[b];}
function FH(a,b,c){a.xu.data[b]=c;}
function Vs(a,b){var c;if(!a.ob){c=new D3;O(c);M(c);}if(b>=0&&b<a.zz)return;c=new BM;Bl(c,V0(b));M(c);}
function ARD(a){a.ob=1;}
function A$X(a){return a.ob;}
function Xo(a,b,c,d){a.ob=0;a.nr=2;M4(a.gG,(-1));M4(a.oR,(-1));if(b!==null)a.uW=b;if(c>=0){a.fg=c;a.by=d;}a.hy=a.fg;}
function AAb(a){Xo(a,null,(-1),(-1));}
function AP2(a,b){a.hy=b;if(a.k1>=0)b=a.k1;a.k1=b;}
function A4r(a){return a.fg;}
function A7u(a){return a.by;}
function A5i(a,b){a.nr=b;}
function AWm(a){return a.nr;}
function A6m(a){return a.lm;}
function A3o(a){return a.oe;}
function A3R(a){return a.k1;}
function VU(){var a=this;D.call(a);a.cl=null;a.iJ=0;a.b8=0;a.eg=0;a.d$=0;a.b0=0;a.dM=0;}
function AOr(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Bi(Bi((a.d$-a.iJ|0)+1|0,(a.b0-a.b8|0)+1|0),(a.dM-a.eg|0)+1|0)>32768){Co(Dy(),B(889));return;}c=a.iJ;while(c<=a.d$){d=a.eg;while(d<=a.dM){e=c>>4;f=d>>4;g=Fl(b,c,0,d,1);if(g){$p=1;continue _;}if(g){if(a.b8<0)a.b8
=0;if(a.b0>=128)a.b0=127;h=a.b8;if(h<=a.b0){i=a.cl;$p=2;continue _;}}d=d+1|0;}c=c+1|0;}return;case 1:Z0(b,e,f);if(C()){break _;}a:while(true){if(g){if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;if(h<=a.b0){i=a.cl;$p=2;continue _;}}d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d$)break a;d=a.eg;}e=c>>4;f=d>>4;g=Fl(b,c,0,d,1);if(!g)continue;else{continue _;}}return;case 2:$z=ALo(b,i,c,h,d);if(C()){break _;}j=$z;$p=3;case 3:$z=ACB(b,c,h,d);if(C()){break _;}k=$z;L();l=BgG.data[k];if(!l)l=1;m=0;if(a.cl===BkC){$p=4;continue _;}if
(a.cl===BkD)m=BgI.data[k];if(l>=15&&!m){m=0;if(j!=m){i=a.cl;$p=11;continue _;}h=h+1|0;b:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d$)break b;d=a.eg;}e=c>>4;f=d>>4;g=Fl(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;}i=a.cl;g=c-1|0;$p=5;continue _;case 4:$z=ZD(b,c,h,d);if(C()){break _;}g=$z;if(g)m=15;if(l>=15&&!m){m=0;if(j!=m){i=a.cl;$p=11;continue _;}h=h+1|0;c:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while
(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d$)break c;d=a.eg;}e=c>>4;f=d>>4;g=Fl(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;}i=a.cl;g=c-1|0;$p=5;case 5:$z=ALo(b,i,g,h,d);if(C()){break _;}n=$z;i=a.cl;g=c+1|0;$p=6;case 6:$z=ALo(b,i,g,h,d);if(C()){break _;}o=$z;i=a.cl;g=h-1|0;$p=7;case 7:$z=ALo(b,i,c,g,d);if(C()){break _;}p=$z;i=a.cl;g=h+1|0;$p=8;case 8:$z=ALo(b,i,c,g,d);if(C()){break _;}q=$z;i=a.cl;g=d-1|0;$p=9;case 9:$z=ALo(b,i,c,h,g);if(C()){break _;}g
=$z;i=a.cl;r=d+1|0;$p=10;case 10:$z=ALo(b,i,c,h,r);if(C()){break _;}r=$z;if(o<=n)o=n;if(p<=o)p=o;if(q<=p)q=p;if(g<=q)g=q;if(r<=g)r=g;g=r-l|0;if(g<0)g=0;if(m<=g)m=g;if(j!=m){i=a.cl;$p=11;continue _;}h=h+1|0;d:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d$)break d;d=a.eg;}e=c>>4;f=d>>4;g=Fl(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 11:AMy(b,i,c,h,d,m);if(C()){break _;}s=m-1|0;if(s<0)s=0;i=a.cl;g
=c-1|0;$p=12;case 12:AQb(b,i,g,h,d,s);if(C()){break _;}i=a.cl;g=h-1|0;$p=13;case 13:AQb(b,i,c,g,d,s);if(C()){break _;}i=a.cl;g=d-1|0;$p=14;case 14:AQb(b,i,c,h,g,s);if(C()){break _;}g=c+1|0;if(g>=a.d$){i=a.cl;$p=15;continue _;}g=h+1|0;if(g>=a.b0){i=a.cl;$p=16;continue _;}g=d+1|0;if(g>=a.dM){i=a.cl;$p=17;continue _;}h=h+1|0;e:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d$)break e;d=a.eg;}e=c>>4;f=d>>4;g=Fl(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8
<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 15:AQb(b,i,g,h,d,s);if(C()){break _;}g=h+1|0;if(g>=a.b0){i=a.cl;$p=16;continue _;}g=d+1|0;if(g>=a.dM){i=a.cl;$p=17;continue _;}h=h+1|0;f:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d$)break f;d=a.eg;}e=c>>4;f=d>>4;g=Fl(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 16:AQb(b,i,c,g,d,s);if(C()){break _;}g=d+1|0;if(g>=a.dM){i=a.cl;$p=17;continue _;}h
=h+1|0;g:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d$)break g;d=a.eg;}e=c>>4;f=d>>4;g=Fl(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 17:AQb(b,i,c,h,g,s);if(C()){break _;}h=h+1|0;a:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.d$)break a;d=a.eg;}e=c>>4;f=d>>4;g=Fl(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=
127;h=a.b8;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function ALG(a,b,c,d,e,f,g){var h,i,j;if(b>=a.iJ&&c>=a.b8&&d>=a.eg&&e<=a.d$&&f<=a.b0&&g<=a.dM)return 1;if(b>=(a.iJ-1|0)&&c>=(a.b8-1|0)&&d>=(a.eg-1|0)&&e<=(a.d$+1|0)&&f<=(a.b0+1|0)&&g<=(a.dM+1|0)){h=a.d$-a.iJ|0;i=a.b0-a.b8|0;j=a.dM-a.eg|0;if(b>a.iJ)b=a.iJ;if(c>a.b8)c=a.b8;if(d>a.eg)d=a.eg;if(e<a.d$)e=a.d$;if(f<a.b0)f=a.b0;if(g<a.dM)g=a.dM;if((Bi(Bi(e-b|0,f-c|0),g-d|0)-Bi(Bi(h,i),j)|0)<=2){a.iJ=b;a.b8=c;a.eg=d;a.d$=e;a.b0=f;a.dM=g;return 1;}}return 0;}
function Sb(){}
function AF9(){var a=this;Ge.call(a);a.il=0;a.ec=null;}
function AWn(a){var b=new AF9();A6$(b,a);return b;}
function A6$(a,b){La(a,b);a.ec=$rt_createByteArray(8);}
function AHM(a){a.fn.lv();}
function Rc(a,b,c,d){var e;if(b!==null){a.fn.gv(b,c,d);a.il=a.il+d|0;return;}e=new EF;O(e);M(e);}
function KN(a,b){a.fn.nL(b);a.il=a.il+1|0;}
function APr(a,b){UM(a,$rt_doubleToLongBits(b));}
function APm(a,b){JQ(a,$rt_floatToIntBits(b));}
function JQ(a,b){a.ec.data[0]=b>>24<<24>>24;a.ec.data[1]=b>>16<<24>>24;a.ec.data[2]=b>>8<<24>>24;a.ec.data[3]=b<<24>>24;a.fn.gv(a.ec,0,4);a.il=a.il+4|0;}
function UM(a,b){a.ec.data[0]=Long_shr(b,56).lo<<24>>24;a.ec.data[1]=Long_shr(b,48).lo<<24>>24;a.ec.data[2]=Long_shr(b,40).lo<<24>>24;a.ec.data[3]=b.hi<<24>>24;a.ec.data[4]=Long_shr(b,24).lo<<24>>24;a.ec.data[5]=Long_shr(b,16).lo<<24>>24;a.ec.data[6]=Long_shr(b,8).lo<<24>>24;a.ec.data[7]=b.lo<<24>>24;a.fn.gv(a.ec,0,8);a.il=a.il+8|0;}
function AAe(a,b){a.ec.data[0]=b>>8<<24>>24;a.ec.data[1]=b<<24>>24;a.fn.gv(a.ec,0,2);a.il=a.il+2|0;}
function AOf(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function Xw(a,b){var c,d,e;c=AGg(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new B3;Bl(b,B(890));M(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Rc(a,e,0,APa(a,b,e,AOf(a,d,e,0)));}
function AGg(a,b){var c,d,e,f;c=0;d=Bh(b);e=0;while(e<d){f=Y(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function APa(a,b,c,d){var e,f,g,h,i,j,k;e=Bh(b);f=0;while(f<e){g=Y(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function AF3(){D.call(this);}
function Bm1(){var a=new AF3();A0n(a);return a;}
function A0n(a){return;}
function N3(){D.call(this);}
var Bm2=null;var Bm3=null;function Bm4(){var a=new N3();ABt(a);return a;}
function ABt(a){return;}
function AB3(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.y_=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.u3=Long_ZERO;c.t5=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=AOw(Bm3,f);if(h<0)h= -h-2|0;i=12+(f-Bm3.data[h]|0)|0;j=Qy(e,Bm2.data[h],i);if(Long_ge(j,
new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-Bm3.data[h]|0)|0;j=Qy(e,Bm2.data[h],i);}k=Long_shru(Bm2.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,o)),Long_div(l,Long_fromInt(2))))o
=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.u3=e;c.t5=h-330|0;}
function Qy(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function ABr(){var b,c,d,e,f,g,h,i,j,k;Bm2=$rt_createLongArray(660);Bm3=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=Bm2.data;g=d+330|0;f[g]=Mq(e,Long_fromInt(80));Bm3.data[g]=c;e=Mq(e,Long_fromInt(10));h=AI1(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=Bm2.data;g=(330-i|0)-1|0;f[g]=Mq(b,Long_fromInt(80));Bm3.data[g]=d;i=i+1|0;}}
function HQ(){D.call(this);}
function AMV(){var a=this;HQ.call(a);a.nI=null;a.rK=0;}
function Hb(a,b){var c=new AMV();AUf(c,a,b);return c;}
function AUf(a,b,c){var d;a.rK=c;a.nI=I(PD,c);d=0;while(d<c){a.nI.data[d]=BbO(b);d=d+1|0;}}
function E1(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.rK){d=d+AG2(a.nI.data[f],b*e,c*e)/e;e=e/2.0;f=f+1|0;}return d;}
function Vb(a,b,c,d){var e,f,g;e=0.0;f=1.0;g=0;while(g<a.rK){e=e+Lh(a.nI.data[g],b*f,c*f,d*f)/f;f=f/2.0;g=g+1|0;}return e;}
function H6(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o;if(b===null)b=$rt_createDoubleArray(Bi(Bi(f,g),h));else{l=0;while(true){m=b.data;if(l>=m.length)break;m[l]=0.0;l=l+1|0;}}n=1.0;o=0;while(o<a.rK){AQw(a.nI.data[o],b,c,d,e,f,g,h,i*n,j*n,k*n,n);n=n/2.0;o=o+1|0;}return b;}
function Tt(){var a=this;D.call(a);a.Bp=null;a.Bo=null;}
function AGs(a){var b,c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.Bp;c=a.Bo;Bb();d=BeJ;$p=1;case 1:$z=A_O(d,b);if(C()){break _;}d=$z;e=LJ(c,47);if(e<=0){f=BeJ;e=0;$p=2;continue _;}f=Ev(c,0,e);$p=4;continue _;case 2:AXV(f,c,e,d);if(C()){break _;}c=BeJ;$p=3;case 3:A5A(c,b);if(C()){break _;}return;case 4:AJf(f);if(C()){break _;}f=BeJ;e=0;$p=2;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function Tc(){D.call(this);this.z3=null;}
function AFE(a){var b,c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.z3;Bb();c=BeJ;$p=1;case 1:A5A(c,b);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,$p);}
function UJ(){var a=this;D.call(a);a.C3=null;a.C4=null;}
function AOX(a){var b,c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.C3;c=a.C4;Bb();d=LJ(b,47);if(d>0){e=Ev(b,0,d);$p=2;continue _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeJ;d=0;f=f.buffer;$p=1;case 1:AXV(e,b,d,f);if(C()){break _;}return;case 2:AJf(e);if(C()){break _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeJ;d=0;f=f.buffer;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ACU(){var a=this;D.call(a);a.n7=null;a.pH=0;a.FK=Long_ZERO;}
function ATu(a,b,c){var d=new ACU();A1y(d,a,b,c);return d;}
function A1y(a,b,c,d){a.n7=b;a.pH=c;a.FK=d;}
function PD(){var a=this;HQ.call(a);a.b5=null;a.vf=0.0;a.yb=0.0;a.wv=0.0;}
function Bm5(){var a=new PD();A_J(a);return a;}
function BbO(a){var b=new PD();Zr(b,a);return b;}
function A_J(a){Zr(a,new DA);}
function Zr(a,b){var c,d,e,f,g;a.b5=$rt_createIntArray(512);a.vf=Cj(b)*256.0;a.yb=Cj(b)*256.0;a.wv=Cj(b)*256.0;c=0;while(c<256){d=a.b5.data;e=c+1|0;d[c]=c;c=e;}c=0;while(c<256){f=E(b,256-c|0)+c|0;g=a.b5.data[c];a.b5.data[c]=a.b5.data[f];a.b5.data[f]=g;a.b5.data[c+256|0]=a.b5.data[c];c=c+1|0;}}
function Lh(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;e=b+a.vf;f=c+a.yb;g=d+a.wv;h=e|0;i=f|0;j=g|0;if(e<h)h=h+(-1)|0;if(f<i)i=i+(-1)|0;if(g<j)j=j+(-1)|0;k=h&255;l=i&255;m=j&255;c=e-h;d=f-i;n=g-j;o=c*c*c*(c*(c*6.0-15.0)+10.0);p=d*d*d*(d*(d*6.0-15.0)+10.0);q=n*n*n*(n*(n*6.0-15.0)+10.0);r=a.b5.data[k]+l|0;s=a.b5.data[r]+m|0;t=a.b5.data[r+1|0]+m|0;u=a.b5.data[k+1|0]+l|0;v=a.b5.data[u]+m|0;w=a.b5.data[u+1|0]+m|0;e=Dq(a,a.b5.data[s],c,d,n);k=a.b5.data[v];x=c-1.0;b=DN(a,o,e,Dq(a,k,x,d,n));k=a.b5.data[t];e
=d-1.0;b=DN(a,p,b,DN(a,o,Dq(a,k,c,e,n),Dq(a,a.b5.data[w],x,e,n)));k=a.b5.data[s+1|0];f=n-1.0;return DN(a,q,b,DN(a,p,DN(a,o,Dq(a,k,c,d,f),Dq(a,a.b5.data[v+1|0],x,d,f)),DN(a,o,Dq(a,a.b5.data[t+1|0],c,e,f),Dq(a,a.b5.data[w+1|0],x,e,f))));}
function DN(a,b,c,d){return c+b*(d-c);}
function Dq(a,b,c,d,e){var f,g;f=b&15;g=f>=8?d:c;if(f>=4)d=f!=12&&f!=14?e:c;if(f&1)g= -g;if(f&2)d= -d;return g+d;}
function AG2(a,b,c){return Lh(a,b,c,0.0);}
function A4O(a,b,c,d){return Lh(a,b,c,d);}
function AQw(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;m=0;n=1.0/l;o=(-1);p=0.0;q=0.0;r=0.0;s=0.0;t=0;while(t<f){u=(c+t|0)*i+a.vf;v=u|0;if(u<v)v=v+(-1)|0;w=v&255;u=u-v;x=u*u*u*(u*(u*6.0-15.0)+10.0);y=0;v=w+1|0;z=u-1.0;while(y<h){ba=(e+y|0)*k+a.wv;bb=ba|0;if(ba<bb)bb=bb+(-1)|0;bc=bb&255;bd=ba-bb;be=bd*bd*bd*(bd*(bd*6.0-15.0)+10.0);bf=0;ba=bd-1.0;while(bf<g){bg=(d+bf|0)*j+a.yb;bh=bg|0;if(bg<bh)bh=bh+(-1)|0;bi=bh&255;l=bg-bh;bj=l*l*l*(l*(l
*6.0-15.0)+10.0);if(bf&&bi==o)bi=o;else{bk=a.b5.data[w]+bi|0;bl=a.b5.data[bk]+bc|0;bm=a.b5.data[bk+1|0]+bc|0;bn=a.b5.data[v]+bi|0;bo=a.b5.data[bn]+bc|0;bp=a.b5.data[bn+1|0]+bc|0;p=DN(a,x,Dq(a,a.b5.data[bl],u,l,bd),Dq(a,a.b5.data[bo],z,l,bd));bn=a.b5.data[bm];bq=l-1.0;q=DN(a,x,Dq(a,bn,u,bq,bd),Dq(a,a.b5.data[bp],z,bq,bd));r=DN(a,x,Dq(a,a.b5.data[bl+1|0],u,l,ba),Dq(a,a.b5.data[bo+1|0],z,l,ba));s=DN(a,x,Dq(a,a.b5.data[bm+1|0],u,bq,ba),Dq(a,a.b5.data[bp+1|0],z,bq,ba));}br=b.data;bs=DN(a,be,DN(a,bj,p,q),DN(a,bj,
r,s));bn=m+1|0;br[m]=br[m]+bs*n;bf=bf+1|0;m=bn;o=bi;}y=y+1|0;}t=t+1|0;}}
function Ud(){D.call(this);this.gB=null;}
function Lx(a){var b=new Ud();AJG(b,a);return b;}
function AIO(a){var b=new Ud();A0J(b,a);return b;}
function AJG(a,b){a.gB=$rt_createByteArray(b>>1);}
function A0J(a,b){a.gB=b;}
function G7(a,b,c,d){var e,f;e=b<<11|d<<7|c;f=e>>1;return !(e&1)?a.gB.data[f]&15:a.gB.data[f]>>4&15;}
function Ek(a,b,c,d,e){var f,g;f=b<<11|d<<7|c;g=f>>1;if(!(f&1))a.gB.data[g]=(a.gB.data[g]&240|e&15)<<24>>24;else a.gB.data[g]=(a.gB.data[g]&15|(e&15)<<4)<<24>>24;}
function Mm(a){return a.gB===null?0:1;}
function Vy(){Fc.call(this);}
var Bm6=null;function Mq(b,c){return Long_udiv(b, c);}
function AI1(b,c){return Long_urem(b, c);}
function AL5(){Bm6=F($rt_longcls());}
function Rs(){var a=this;D.call(a);a.ES=null;a.Es=null;a.y1=null;a.vH=null;a.Bl=0;a.Da=0;a.xi=null;}
function AMM(a){var b,c;b=a.ES.result;if(b!==null&&b.key!==null&&b.value!==null){c=$rt_str(AZY(b.key));if(c!==null&&IB(c,a.vH)&&!(!a.Bl&&Hk(c,47,Bh(a.vH)+1|0)!=(-1))){if(!(UD(b.value)?1:0))Fx(a.xi,ATu(c,0,Long_add(new Long(596067632, 383),Long_fromInt(A0N(b.value)))));else if(a.Da)Fx(a.xi,ATu(c,1,Long_fromInt(-1)));}b.continue();return;}CM(a.Es,CY(a.y1.data[0]));}
function A7o(a){AMM(a);}
function Rt(){var a=this;D.call(a);a.DS=null;a.wM=null;}
function ALc(a){CM(a.DS,CY(a.wM.data[0]<=0?(-1):a.wM.data[0]));}
function A1M(a){ALc(a);}
function Er(){D.call(this);}
function E7(a,b,c,d){return;}
function Rk(){Er.call(this);}
function GZ(){var a=new Rk();A64(a);return a;}
function A64(a){return;}
function AEP(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,3)+4|0;h=1;if(e>=1){i=e+g|0;if((i+1|0)<=128){j=(e+1|0)+g|0;k=j-2|0;l=e;a:while(true){if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;while(o<=(d+n
|0)&&h){p=f-n|0;while(p<=(f+n|0)&&h){if(l>=0&&l<128)break a;h=0;p=p+1|0;}o=o+1|0;}l=l+1|0;}$p=7;continue _;}}return 0;case 1:$z=ACB(b,d,m,f);if(C()){break _;}k=$z;L();if(!(k!=BeV.b&&k!=BeW.b)&&e<((128-g|0)-1|0)){k=BeW.b;$p=2;continue _;}return 0;case 2:ALx(b,d,m,f,k);if(C()){break _;}k=(e-3|0)+g|0;b:while(true){if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;while(r<=l){j=r-d|0;s=m;while(s<=h){t=s-f|0;if(If(j)!=q)break b;if(If(t)!=q)break b;if(E(c,
2)&&o)break b;s=s+1|0;}r=r+1|0;}k=k+1|0;}u=BgF.data;$p=5;continue _;case 3:$z=ACB(b,d,o,f);if(C()){break _;}m=$z;if(m&&m!=Be7.b){k=k+1|0;if(k>=g)return 1;o=e+k|0;continue _;}m=Be6.b;$p=4;case 4:ALx(b,d,o,f,m);if(C()){break _;}k=k+1|0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;case 5:$z=ACB(b,r,k,s);if(C()){break _;}t=$z;if(!u[t]){t=Be7.b;$p=6;continue _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h
=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(If(j)!=q)break;if(If(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=BgF.data;continue _;case 6:ALx(b,r,k,s,t);if(C()){break _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(If(j)!=q)break;if(If(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=BgF.data;$p=5;continue _;case 7:$z=ACB(b,o,l,p);if(C()){break _;}r
=$z;if(r){L();if(r!=Be7.b)h=0;}while(true){p=p+1|0;while(!(p<=(f+n|0)&&h)){o=o+1|0;while(!(o<=(d+n|0)&&h)){l=l+1|0;if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;}p=f-n|0;}if(l>=0&&l<128)break;h=0;}continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function TK(){D.call(this);this.CL=null;}
function ASt(a){CM(a.CL,K4(1));}
function A4w(a){ASt(a);}
function TH(){D.call(this);this.Di=null;}
function ASA(a){CM(a.Di,K4(0));}
function AYp(a){ASA(a);}
function Rr(){D.call(this);this.Bz=null;}
function XW(a){CM(a.Bz,K4(1));}
function A8U(a){XW(a);}
function Ru(){D.call(this);this.BS=null;}
function ASk(a){CM(a.BS,K4(0));}
function A7h(a){ASk(a);}
function E4(){EZ.call(this);}
var Bm7=null;var BfK=null;var Bm8=null;var Bm9=null;function ANf(){var b,c,d;b=new E4;FT(b,B(891),0);Bm7=b;b=new E4;FT(b,B(892),1);BfK=b;b=new E4;FT(b,B(893),2);Bm8=b;c=I(E4,3);d=c.data;d[0]=Bm7;d[1]=BfK;d[2]=Bm8;Bm9=c;}
function Rp(){var a=this;D.call(a);a.CT=null;a.u_=null;}
function ACy(a){CM(a.CT,a.u_.result===null?Bm8:!(UD(a.u_.result)?1:0)?Bm7:BfK);}
function A5X(a){ACy(a);}
function Rq(){D.call(this);this.Ek=null;}
function ACb(a){CM(a.Ek,Bm8);}
function A3k(a){ACb(a);}
function SS(){var a=this;CS.call(a);a.Ac=null;a.fS=null;a.xA=0;a.f1=0;}
function AD8(a){Dx(a.bG);APZ(1);S(a.bG,Di(0,(a.bm/2|0)-100|0,(a.bD/4|0)+120|0,B(598)));}
function ANL(a){APZ(0);}
function AYy(a){a.xA=a.xA+1|0;}
function AHl(a,b){var c,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC&&!b.cm){b=a.fS;$p=1;continue _;}return;case 1:ACk(b);if(C()){break _;}c=a.I;b=null;$p=2;case 2:ADY(c,b);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,$p);}
function AC2(a,b,c){var d,e;if(c==200)a.f1=(a.f1-1|0)&3;if(!(c!=208&&c!=28))a.f1=(a.f1+1|0)&3;if(c==14&&Bh(a.fS.gr.data[a.f1])>0)a.fS.gr.data[a.f1]=Ev(a.fS.gr.data[a.f1],0,Bh(a.fS.gr.data[a.f1])-1|0);if(UK(B(894),b)>=0&&Bh(a.fS.gr.data[a.f1])<15){d=a.fS.gr.data;c=a.f1;e=new T;V(e);e=J(e,a.fS.gr.data[a.f1]);Dw(e,b);d[c]=U(e);}}
function ABx(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABm(a);if(C()){break _;}DG(a,a.bZ,a.Ac,a.bm/2|0,40,16777215);B1();Bw(a.bm/2|0,a.bD/2|0,50.0);CB((-60.0),(-60.0),(-60.0));Bv(180.0,0.0,1.0,0.0);if(!((a.xA/6|0)%2|0))a.fS.rB=a.f1;e=a.fS;$p=2;case 2:$z=AMk(e);if(C()){break _;}f=$z;Bv((f*360|0)/16.0,0.0,1.0,0.0);e=Bkw;g=a.fS;h=(-0.5);i=(-0.75);j
=(-0.5);k=0.0;$p=3;case 3:AFr(e,g,h,i,j,k);if(C()){break _;}a.fS.rB=(-1);BD();$p=4;case 4:AFI(a,b,c,d);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function IL(){EZ.call(this);this.z_=0;}
var BkC=null;var BkD=null;var Bm$=null;function A_Q(a,b,c){var d=new IL();AG7(d,a,b,c);return d;}
function AG7(a,b,c,d){FT(a,b,c);a.z_=d;}
function AFy(){var b,c;BkC=A_Q(B(895),0,15);BkD=A_Q(B(896),1,0);b=I(IL,2);c=b.data;c[0]=BkC;c[1]=BkD;Bm$=b;}
function MJ(){var a=this;D.call(a);a.nh=null;a.nV=null;}
function AZ$(a){return a.nV;}
function Td(a,b){var c;c=a.nV;a.nV=b;return c;}
function AXI(a){return a.nh;}
function Le(){var a=this;MJ.call(a);a.db=null;a.dk=null;a.lE=0;a.jo=0;}
function M7(a){var b;b=LV(a);if(b==2){if(LV(a.dk)<0)a.dk=O0(a.dk);return PF(a);}if(b!=(-2))return a;if(LV(a.db)>0)a.db=PF(a.db);return O0(a);}
function LV(a){return (a.dk===null?0:a.dk.lE)-(a.db===null?0:a.db.lE)|0;}
function O0(a){var b;b=a.db;a.db=b.dk;b.dk=a;FO(a);FO(b);return b;}
function PF(a){var b;b=a.dk;a.dk=b.db;b.db=a;FO(a);FO(b);return b;}
function FO(a){var b,c;b=a.dk===null?0:a.dk.lE;c=a.db===null?0:a.db.lE;a.lE=DE(b,c)+1|0;a.jo=1;if(a.db!==null)a.jo=a.jo+a.db.jo|0;if(a.dk!==null)a.jo=a.jo+a.dk.jo|0;}
function AOp(a,b){return b?a.dk:a.db;}
function AM3(){var a=this;Ge.call(a);a.kr=null;a.g5=0;}
function BbP(a){var b=new AM3();A6r(b,a);return b;}
function A6r(a,b){La(a,b);a.kr=$rt_createByteArray(8192);}
function AYz(a){MN(a);a.fn.lv();}
function AX6(a,b,c,d){var e,f,g;e=a.kr;if(e!==null&&d>=e.data.length){MN(a);a.fn.gv(b,c,d);return;}if(b===null){f=new EF;Bl(f,B(897));M(f);}if(c>=0&&c<=(b.data.length-d|0)){if(d<0){g=new Oh;f=new T;V(f);Bl(g,U(Bf(J(f,B(898)),d)));M(g);}if(e===null){f=new B3;O(f);M(f);}if(d>=(e.data.length-a.g5|0))MN(a);Dh(b,c,e,a.g5,d);a.g5=a.g5+d|0;return;}g=new Oh;f=new T;V(f);Bl(g,U(Bf(J(f,B(899)),c)));M(g);}
function A4a(a){var b,$$je;if(a.kr===null)return;a:{try{Of(a);}catch($$e){$$je=Bj($$e);b=$$je;break a;}a.kr=null;return;}a.kr=null;M(b);}
function AXq(a,b){var c,d,e,f;c=a.kr;if(c===null){d=new B3;O(d);M(d);}e=c.data;if(a.g5==e.length){a.fn.gv(c,0,a.g5);a.g5=0;}f=a.g5;a.g5=f+1|0;e[f]=b<<24>>24;}
function MN(a){if(a.g5>0){a.fn.gv(a.kr,0,a.g5);a.g5=0;}}
function WY(){D.call(this);}
function Bm_(){var a=new WY();AX4(a);return a;}
function AX4(a){return;}
function AI9(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p
=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ex(b,d,e,f,B(900),4.0,(1.0+(N(b.q)-N(b.q))*0.20000000298023224)*0.699999988079071);h=Ga();i=16;j=0;k=15.0;a:while(true){if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D4(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;while(n<i){o=0;while(o<i){if(!(j&&j!=15&&n&&n!=15&&o&&o!=15)){r=j/k*2.0-1.0;s=n/k*2.0-1.0;t
=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.q)*0.6000000238418579);y=0.30000001192092896;z=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;if(x>0.0)break a;}o=o+1|0;}n=n+1|0;}j=j+1|0;}bc=K(l);bd=K(v);be=K(w);$p=9;continue _;case 1:$z=ADO(b,c,q);if(C()){break _;}q=$z;bf=BW(d,e,f);bg=0;while(true){if(bg>=CX(q)){bh=Cg();DF(bh,h);bi=CX(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eE;bl=bk.e0;bm=bk.eF;$p=4;continue _;}bn=
Z(q,bg);bj=Sq(bn,d,e,f)/l;if(bj<=1.0)break;bg=bg+1|0;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Cd(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;case 2:$z=ADE(b,bf,bh);if(C()){break _;}x=$z;bs=x;bt=(1.0-bj)*bs;m=(bt*bt+bt)/2.0*8.0*l+1.0|0;$p=3;case 3:bn.fr(c,m);if(C()){break _;}bn.g=bn.g+v*bt;bn.i=bn.i+w*bt;bn.h=bn.h+z*bt;while(true){bg=bg+1|0;if(bg>=CX(q)){bh=Cg();DF(bh,h);bi=CX(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eE;bl=bk.e0;bm=bk.eF;$p=4;continue _;}bn=Z(q,bg);bj=Sq(bn,d,
e,f)/l;if(bj>1.0)continue;else break;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Cd(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;continue _;case 4:$z=ACB(b,m,bl,bm);if(C()){break _;}bu=$z;bv=0;y=m;bw=bl;x=bm;while(bv<1){bq=y+N(b.q);l=bw+N(b.q);v=x+N(b.q);w=bq-d;z=l-e;ba=v-f;bb=Cd(w*w+z*z+ba*ba);w=w/bb;z=z/bb;ba=ba/bb;bb=0.5/(bb/r+0.1)*(N(b.q)*N(b.q)+0.30000001192092896);w=w*bb;z=z*bb;ba=ba*bb;BU(b,B(223),(bq+s)/2.0,(l+u)/2.0,(v+bj)/2.0,w,z,ba);BU(b,B(256),bq,l,v,w,z,ba);bv=bv+1|0;}if(bu>0){L();c=BeT.data[bu];$p
=5;continue _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eE;bl=bk.e0;bm=bk.eF;continue _;case 5:$z=AEN(b,m,bl,bm);if(C()){break _;}bv=$z;g=0.30000001192092896;$p=6;case 6:c.HU(b,m,bl,bm,bv,g);if(C()){break _;}bv=0;$p=7;case 7:APB(b,m,bl,bm,bv);if(C()){break _;}c=BeT.data[bu];$p=8;case 8:c.sL(b,m,bl,bm);if(C()){break _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eE;bl=bk.e0;bm=bk.eF;$p=4;continue _;case 9:$z=ACB(b,bc,bd,be);if(C()){break _;}bx=$z;if(bx>0){L();x=x-(BeT.data[bx].yo(c)+0.30000001192092896)
*y;}if(x>0.0)Xn(h,CO(bc,bd,be));l=l+z;v=v+ba;w=w+bb;x=x-0.22500000894069672;while(x<=0.0){while(true){o=o+1|0;while(o>=i){n=n+1|0;while(n>=i){j=j+1|0;if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D4(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;}o=0;}if(!j)break;if(j==15)break;if(!n)break;if(n==15)break;if(!o)break;if(o!=15)continue;else break;}r=j/k*2.0-1.0;s=n/k*2.0-1.0;t=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.q)*0.6000000238418579);y=0.30000001192092896;z
=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;}bc=K(l);bd=K(v);be=K(w);continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p);}
function Oz(){D.call(this);this.JC=0;}
var Bna=null;var Bnb=null;function AX7(a){var b=new Oz();AOe(b,a);return b;}
function AOe(a,b){a.JC=b;}
function K4(b){return !b?Bnb:Bna;}
function AHS(){Bna=AX7(1);Bnb=AX7(0);}
function Oh(){BM.call(this);}
function Bnc(){var a=new Oh();AV0(a);return a;}
function AV0(a){O(a);}
function ARo(){Er.call(this);}
function AYs(){var a=new ARo();A0Z(a);return a;}
function A0Z(a){return;}
function XU(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,2)+2|0;h=E(c,2)+2|0;i=0;j=(d-g|0)-1|0;k=(d+g|0)+1|0;l=e-1|0;m=e+3|0;n=m+1|0;o=(f-h|0)-1|0;p=(f+h|0)+1|0;q=j;a:while(true){r=R(q,
k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg0.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;while(true){t=R(s,n);if(t>0)break;v=o;w=R(v,p);if(w<=0)break a;s=s+1|0;}q=q+1|0;}$p=1;case 1:$z
=AB6(b,q,s,v);if(C()){break _;}x=$z;if(s==l&&!x.dv())return 0;if(!t&&!x.dv())return 0;if(!(q!=j&&r&&v!=o&&w)&&s==e){$p=5;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;c:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg0.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break c;t
=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}continue _;case 2:APB(b,d,e,f,k);if(C()){break _;}$p=3;case 3:$z=ANB(b,d,e,f);if(C()){break _;}b=$z;b.jM=ADJ(a,c);return 1;case 4:$z=ACB(b,o,e,j);if(C()){break _;}r=$z;if(!r){u=0;r=o-1|0;$p=6;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=Bg0.b;$p=2;continue _;case 5:$z=ACB(b,q,s,v);if(C()){break _;}u
=$z;if(!u){u=s+1|0;$p=7;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg0.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q
=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 6:$z=AB6(b,r,e,j);if(C()){break _;}x=$z;if(x.dv())u=1;r=o+1|0;$p=10;continue _;case 7:$z=ACB(b,q,u,v);if(C()){break _;}u=$z;if(!u)i=i+1|0;v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;d:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg0.b;$p=2;continue _;}t
=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break d;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 8:$z=AB6(b,r,t,v);if(C()){break _;}x=$z;if(x.dv()){if(!u&&E(c,4)){L();q=Be$.b;$p=14;continue _;}L();q=Be3.b;$p=12;continue _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while
(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg0.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){continue _;}q=t-1|0;$p=9;case 9:$z=AB6(b,r,q,v);if(C()){break _;}x=$z;if(x.dv()){$p=8;continue _;}q=0;$p=11;continue _;case 10:$z=AB6(b,r,e,j);if(C()){break _;}x=$z;if(x.dv())u=u+1|0;r=j-1|0;$p=13;continue _;case 11:APB(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r
=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg0.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 12:APB(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)
|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg0.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 13:$z=AB6(b,o,e,r);if(C()){break _;}x=$z;if(x.dv())u=u+1|0;r=j+1|0;$p=16;continue _;case 14:APB(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g
|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg0.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 15:APB(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg0.b;$p=2;continue _;}t=m;}v=o;}if(r!=j
&&u&&v!=o&&s&&t!=n&&i){q=0;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 16:$z=AB6(b,o,e,r);if(C()){break _;}x=$z;if(x.dv())u=u+1|0;if(u==1){L();r=Bg2.b;$p=17;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=Bg0.b;$p=2;continue _;case 17:APB(b,o,e,j,r);if(C()){break _;}$p=18;case 18:$z=ANB(b,o,e,j);if(C()){break _;}x=$z;y=x;n=0;while(n<8){z=AHr(a,c);if(z!==null)AHE(y,E(c,k),z);n=n+1|0;}while(true){q=q+1|0;if(q
>=2)break;l=0;if(l>=3)continue;else{o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}}L();k=Bg0.b;$p=2;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AHr(a,b){var c,d;a:{c=E(b,10);if(!c){d=new Cc;BB();DD(d,BiN);break a;}if(c==1){d=new Cc;BB();Gq(d,BhV,E(b,4)+1|0);break a;}if(c==2){d=new Cc;BB();DD(d,Bik);break a;}if(c==3){d=new Cc;BB();Gq(d,BhI,E(b,4)+1|0);break a;}if(c==4){d=new Cc;BB();Gq(d,Bgj,E(b,4)+1|0);break a;}if(c==5){d=new Cc;BB();Gq(d,Bgk,E(b,4)+1|0);break a;}if(c==6){d=new Cc;BB();DD(d,BiJ);break a;}if(c==7&&!E(b,100)){d=new Cc;BB();DD(d,BiH);break a;}d=null;}return d;}
function ADJ(a,b){var c;c=E(b,4);return !c?B(861):c==1?B(864):c==2?B(864):c!=3?B(3):B(862);}
function Cf(){var a=this;Er.call(a);a.zU=0;a.c3=0;}
function Bnd(a,b){var c=new Cf();Ck(c,a,b);return c;}
function Ck(a,b,c){a.zU=b;a.c3=c;}
function ABX(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=N(c)*3.1415927410125732;h=d+8|0;i=h+Bq(g)*a.c3/8.0;j=
h-Bq(g)*a.c3/8.0;h=f+8|0;k=h+BC(g)*a.c3/8.0;l=h-BC(g)*a.c3/8.0;m=(e+E(c,3)|0)+2|0;n=(e+E(c,3)|0)+2|0;o=0;j=j-i;n=n-m;p=l-k;while(o<=a.c3){q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cj(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c3)+1.0)*q+1.0;v=(Bq(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;while(w<=e){ba=f;while(ba<=x){bb=y;while(bb<=z){bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be<1.0){$p=1;continue _;}bb=bb+1|0;}ba=ba+1|0;}w=w+1|0;}o=o+1|0;}return 1;case 1:$z
=ACB(b,w,ba,bb);if(C()){break _;}bf=$z;L();if(bf==BeZ.b){d=a.zU;$p=2;continue _;}a:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c3)break a;q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cj(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c3)+1.0)*q+1.0;v=(Bq(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{continue _;}}return 1;case 2:ALx(b,
w,ba,bb,d);if(C()){break _;}b:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c3)break b;q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cj(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c3)+1.0)*q+1.0;v=(Bq(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{$p=1;continue _;}}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p);}
function BQ(){Er.call(this);this.ue=0;}
function Bne(a){var b=new BQ();BR(b,a);return b;}
function BR(a,b){a.ue=b;}
function ACS(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;case 1:$z=ACB(b,h,i,j);if(C()){break _;}k=$z;if(!k){L();l=BeT.data[a.ue];$p=2;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;continue _;case 2:$z
=l.Hd(b,h,i,j);if(C()){break _;}k=$z;if(k){k=a.ue;$p=3;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;case 3:ALx(b,h,i,j,k);if(C()){break _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Cl(){Er.call(this);this.EW=0;}
function Bnf(a){var b=new Cl();Cr(b,a);return b;}
function Cr(a,b){a.EW=b;}
function AL6(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e+1|0;$p=1;case 1:$z=ACB(b,d,g,f);if(C()){break _;}g=$z;L();if(g!=BeZ.b)return 0;g=e-1|0;$p=2;case 2:$z=ACB(b,d,g,f);if(C()){break _;}h=$z;if(h!=BeZ.b)return 0;$p=3;case 3:$z=ACB(b,d,e,f);if(C()){break _;}g=$z;if(g){$p=5;continue _;}g=0;h=d-1|0;$p=4;case 4:$z=ACB(b,h,e,f);if(C()){break _;}i
=$z;if(i==BeZ.b)g=1;i=d+1|0;$p=6;continue _;case 5:$z=ACB(b,d,e,f);if(C()){break _;}g=$z;if(g!=BeZ.b)return 0;g=0;h=d-1|0;$p=4;continue _;case 6:$z=ACB(b,i,e,f);if(C()){break _;}j=$z;if(j==BeZ.b)g=g+1|0;k=f-1|0;$p=7;case 7:$z=ACB(b,d,e,k);if(C()){break _;}j=$z;if(j==BeZ.b)g=g+1|0;j=f+1|0;$p=8;case 8:$z=ACB(b,d,e,j);if(C()){break _;}l=$z;if(l==BeZ.b)g=g+1|0;l=0;$p=9;case 9:$z=ACB(b,h,e,f);if(C()){break _;}h=$z;if(!h)l=1;$p=10;case 10:$z=ACB(b,i,e,f);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=11;case 11:$z=ACB(b,
d,e,k);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=12;case 12:$z=ACB(b,d,e,j);if(C()){break _;}h=$z;if(!h)l=l+1|0;if(g==3&&l==1){g=a.EW;$p=13;continue _;}return 1;case 13:APB(b,d,e,f,g);if(C()){break _;}return 1;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function SH(){C1.call(this);}
function Ze(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i+0.002;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARJ(a,b,c,d);if(C()){break _;}a.g=a.g*0.8500000238418579;a.i=a.i*0.8500000238418579;a.h=a.h*0.8500000238418579;e=a.l;f=K(a.d);g=K(a.j);h=K(a.e);$p=2;case 2:$z=AB6(e,f,g,h);if(C()){break _;}e=$z;if(e!==BfV){$p=3;continue _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;continue _;case 3:Ca(a);if
(C()){break _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;case 4:Ca(a);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFs(){C1.call(this);this.Ct=0.0;}
function A8c(a,b,c,d,e){var f=new AFs();AV8(f,a,b,c,d,e);return f;}
function AV8(a,b,c,d,e,f){var g;FD(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.10000000149011612;a.i=a.i*0.10000000149011612;a.h=a.h*0.10000000149011612;g=BN()*0.30000001192092896;a.ip=g;a.id=g;a.h0=g;a.dr=a.dr*0.75;a.dr=a.dr*f;a.Ct=a.dr;a.cw=8.0/(BN()*0.8+0.2)|0;a.cw=a.cw*f|0;a.o4=0;}
function AJ_(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.dr=a.Ct*i;$p=1;case 1:ANx(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALY(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e7=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARJ(a,c,d,e);if(C()){break _;}if(a.j===a.cS){a.g=a.g*1.1;a.h=a.h*1.1;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if
(C()){break _;}a.e7=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function Q8(){C1.call(this);}
function ASb(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANx(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AEW(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e7=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARJ(a,c,d,e);if(C()){break _;}a.g=a.g*0.8999999761581421;a.i=a.i*0.8999999761581421;a.h=a.h*0.8999999761581421;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}a.e7=7-
((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:Fa();}}C3().s(a,b,c,d,e,$p);}
function O8(){C1.call(this);this.DT=0.0;}
function AQM(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw;a.dr=a.DT*(1.0-i*i*0.5);$p=1;case 1:ANx(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ASy(a,b){var c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=(a.dq+b)/a.cw;if(c<0.0)c=0.0;if(c>1.0)c=1.0;$p=1;case 1:$z=ADL(a,b);if(C()){break _;}d=$z;return d*c+1.0-c;default:Fa();}}C3().s(a,b,c,d,$p);}
function AAX(a){var b,c,d,e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}c=a.g;d=a.i;e=a.h;$p=1;case 1:ARJ(a,c,d,e);if(C()){break _;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}c=a.g;d=a.i;e=a.h;$p=1;continue _;default:Fa();}}C3().s(a,
b,c,d,e,$p);}
function AA8(){C1.call(this);this.yR=0.0;}
function BcM(a,b,c,d){var e=new AA8();A1P(e,a,b,c,d);return e;}
function A1P(a,b,c,d,e){FD(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=N(a.m)*0.4000000059604645+0.05000000074505806;a.ip=1.0;a.id=1.0;a.h0=1.0;a.dr=a.dr*(N(a.m)*2.0+0.20000000298023224);a.yR=a.dr;a.cw=16.0/(BN()*0.8+0.2)|0;a.o4=0;a.e7=49;}
function AKa(a,b){return 1.0;}
function AGX(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw;a.dr=a.yR*(1.0-i*i);$p=1;case 1:ANx(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALn(a){var b,c,d,e,f,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=1;continue _;}c=a.dq/a.cw;if(N(a.m)>c)BU(a.l,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;continue _;case 1:Ca(a);if(C()){break _;}c=a.dq/a.cw;if(N(a.m)>c)BU(a.l,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;case 2:ARJ(a,d,e,f);if(C()){break _;}a.g
=a.g*0.9990000128746033;a.i=a.i*0.9990000128746033;a.h=a.h*0.9990000128746033;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function ARG(){JR.call(this);}
function Bcz(a,b,c,d,e,f,g){var h=new ARG();AVU(h,a,b,c,d,e,f,g);return h;}
function AVU(a,b,c,d,e,f,g,h){TT(a,b,c,d,e);a.m5=0.03999999910593033;a.e7=a.e7+1|0;if(g===0.0&&!(f===0.0&&h===0.0)){a.g=f;a.i=g+0.1;a.h=h;}}
function AIu(){D.call(this);}
function Bng(){var a=new AIu();AWW(a);return a;}
function AWW(a){return;}
function H$(){var a=this;D.call(a);a.dj=null;a.bu=0;a.bq=0;a.bt=0;a.fR=0;a.bE=null;a.e5=null;}
function Bnh(a,b,c,d,e){var f=new H$();YX(f,a,b,c,d,e);return f;}
function YX(a,b,c,d,e,f){var $p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e5=b;a.bE=Cg();a.dj=c;a.bu=d;a.bq=e;a.bt=f;$p=1;case 1:$z=AEN(c,d,e,f);if(C()){break _;}d=$z;a.fR=d;K1(a);return;default:Fa();}}C3().s(a,b,c,d,e,f,$p);}
function K1(a){a:{Dx(a.bE);if(!a.fR){S(a.bE,CO(a.bu,a.bq,a.bt-1|0));S(a.bE,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fR==1){S(a.bE,CO(a.bu-1|0,a.bq,a.bt));S(a.bE,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fR==2){S(a.bE,CO(a.bu-1|0,a.bq,a.bt));S(a.bE,CO(a.bu+1|0,a.bq+1|0,a.bt));break a;}if(a.fR==3){S(a.bE,CO(a.bu-1|0,a.bq+1|0,a.bt));S(a.bE,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fR==4){S(a.bE,CO(a.bu,a.bq+1|0,a.bt-1|0));S(a.bE,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fR==5){S(a.bE,CO(a.bu,a.bq,a.bt-1|0));S(a.bE,CO(a.bu,a.bq
+1|0,a.bt+1|0));break a;}if(a.fR==6){S(a.bE,CO(a.bu+1|0,a.bq,a.bt));S(a.bE,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fR==7){S(a.bE,CO(a.bu-1|0,a.bq,a.bt));S(a.bE,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fR==8){S(a.bE,CO(a.bu-1|0,a.bq,a.bt));S(a.bE,CO(a.bu,a.bq,a.bt-1|0));break a;}if(a.fR!=9)break a;S(a.bE,CO(a.bu+1|0,a.bq,a.bt));S(a.bE,CO(a.bu,a.bq,a.bt-1|0));}}
function AFK(a){var b,c,d,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=a.bE.s)return;c=Z(a.bE,b);$p=1;case 1:$z=ARa(a,c);if(C()){break _;}c=$z;if(c!==null&&SY(c,a)){Rg(a.bE,b,CO(c.bu,c.bq,c.bt));d=b;}else{c=a.bE;d=b+(-1)|0;En(c,b);}b=d+1|0;if(b>=a.bE.s)return;c=Z(a.bE,b);continue _;default:Fa();}}C3().s(a,b,c,d,$p);}
function ARa(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.dj;d=b.eE;e=b.e0;f=b.eF;$p=1;case 1:$z=ACB(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=a.dj;d=b.eE;e=b.e0+1|0;f=b.eF;$p=2;continue _;}c=new H$;g=a.e5;h=a.dj;d=b.eE;e=b.e0;f=b.eF;$p=3;continue _;case 2:$z=ACB(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=a.dj;d=b.eE;e=b.e0-1|0;f=b.eF;$p=4;continue _;}c=new H$;g=a.e5;h=a.dj;d
=b.eE;e=b.e0+1|0;f=b.eF;$p=5;continue _;case 3:YX(c,g,h,d,e,f);if(C()){break _;}return c;case 4:$z=ACB(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=null;return c;}c=new H$;g=a.e5;h=a.dj;e=b.eE;d=b.e0-1|0;f=b.eF;$p=6;continue _;case 5:YX(c,g,h,d,e,f);if(C()){break _;}return c;case 6:YX(c,g,h,e,d,f);if(C()){break _;}return c;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function SY(a,b){var c,d;c=0;while(c<a.bE.s){d=Z(a.bE,c);if(d.eE==b.bu&&d.eF==b.bt)return 1;c=c+1|0;}return 0;}
function KQ(a,b,c,d){var e,f;e=0;while(e<a.bE.s){f=Z(a.bE,e);if(f.eE==b&&f.eF==d)return 1;e=e+1|0;}return 0;}
function Pa(a,b){var c;if(SY(a,b))return 1;if(a.bE.s==2)return 0;if(!a.bE.s)return 1;c=Z(a.bE,0);return b.bq==a.bq&&c.e0==a.bq?1:1;}
function ARQ(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:S(a.bE,CO(b.bu,b.bq,b.bt));c=KQ(a,a.bu,a.bq,a.bt-1|0);d=KQ(a,a.bu,a.bq,a.bt+1|0);e=KQ(a,a.bu-1|0,a.bq,a.bt);f=KQ(a,a.bu+1|0,a.bq,a.bt);g=(-1);if(!(!c&&!d))g=0;if(!(!e&&!f))g=1;if(d&&f&&!c&&!e)g=6;if(d&&e&&!c&&!f)g=7;if(c&&e&&!d&&!f)g=8;if(c&&f&&!d&&!e)g=9;if(!g){b=a.dj;c=a.bu;d=a.bq+1|0;e=a.bt-1|0;$p=1;continue _;}if(g==1){b=a.dj;c=a.bu+1|0;d
=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 1:$z=ACB(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=4;b=a.dj;c=a.bu;d=a.bq+1|0;e=a.bt+1|0;$p=3;continue _;case 2:$z=ACB(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=2;b=a.dj;c=a.bu-1|0;d=a.bq+1|0;e=a.bt;$p=4;continue _;case 3:$z=ACB(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=5;if(g==1){b=a.dj;c=a.bu+1|0;d=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 4:$z=ACB(b,
c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=3;if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;case 5:AKA(b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,$p);}
function AI6(a,b,c,d){var e,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=CO(b,c,d);$p=1;case 1:$z=ARa(a,e);if(C()){break _;}e=$z;if(e===null)return 0;$p=2;case 2:AFK(e);if(C()){break _;}return Pa(e,a);default:Fa();}}C3().s(a,b,c,d,e,$p);}
function YW(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bu;c=a.bq;d=a.bt-1|0;$p=1;case 1:$z=AI6(a,b,c,d);if(C()){break _;}d=$z;b=a.bu;c=a.bq;e=a.bt+1|0;$p=2;case 2:$z=AI6(a,b,c,e);if(C()){break _;}b=$z;c=a.bu-1|0;e=a.bq;f=a.bt;$p=3;case 3:$z=AI6(a,c,e,f);if(C()){break _;}c=$z;e=a.bu+1|0;f=a.bq;g=a.bt;$p=4;case 4:$z=AI6(a,e,f,g);if(C()){break _;}e=$z;f=(-1);if(!(!d&&!b))f=0;if(!(!c&&
!e))f=1;if(b&&e&&!d&&!c)f=6;if(b&&c&&!d&&!e)f=7;if(d&&c&&!b&&!e)f=8;if(d&&e&&!b&&!c)f=9;if(!f){h=a.dj;d=a.bu;b=a.bq+1|0;c=a.bt-1|0;$p=5;continue _;}if(f==1){h=a.dj;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fR=f;K1(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 5:$z=ACB(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=4;h=a.dj;d=a.bu;b=a.bq+1|0;c=a.bt+1|0;$p=7;continue _;case 6:$z=ACB(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=2;h=a.dj;d=a.bu-1|0;b=a.bq+1|0;c=a.bt;$p=8;continue _;case 7:$z
=ACB(h,d,b,c);if(C()){break _;}b=$z;if(b==a.e5.b)f=5;if(f==1){h=a.dj;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fR=f;K1(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 8:$z=ACB(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=3;if(f<0)f=0;a.fR=f;K1(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;case 9:AKA(h,d,b,c,f);if(C()){break _;}g=0;if(g>=a.bE.s)return;h=Z(a.bE,g);$p=10;case 10:$z=ARa(a,h);if(C()){break _;}h=$z;if(h!==null){$p=11;continue _;}g=g+1|0;if(g>=a.bE.s)return;h=Z(a.bE,g);continue _;case 11:AFK(h);if
(C()){break _;}if(Pa(h,a)){$p=12;continue _;}g=g+1|0;if(g>=a.bE.s)return;h=Z(a.bE,g);$p=10;continue _;case 12:ARQ(h,a);if(C()){break _;}g=g+1|0;if(g>=a.bE.s)return;h=Z(a.bE,g);$p=10;continue _;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Vp(){var a=this;D.call(a);a.pb=null;a.F5=0;a.me=0;}
function AP7(a){a.me=a.me+1|0;}
function ANr(a){return a.me<a.pb.data.length?0:1;}
function Sy(a,b){return BW(a.pb.data[a.me].ib+(b.c1+1.0|0)*0.5,a.pb.data[a.me].hX,a.pb.data[a.me].im+(b.c1+1.0|0)*0.5);}
function ACg(){var a=this;D.call(a);a.x7=null;a.j8=null;a.q5=null;a.mc=null;}
function A2L(a){var b=new ACg();A6u(b,a);return b;}
function A6u(a,b){a.j8=Bcc();a.q5=Dd();a.mc=I(HV,32);a.x7=b;}
function APv(a,b,c,d){return Pc(a,b,c.d,c.L.M,c.e,d);}
function AGd(a,b,c,d,e,f){return Pc(a,b,c+0.5,d+0.5,e+0.5,f);}
function Pc(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;UI(a.j8);Vf(a.q5);g=IZ(a,K(b.L.R),K(b.L.M),K(b.L.S));h=IZ(a,K(c-b.c1/2.0),K(d),K(e-b.c1/2.0));i=A0D(K6(b.c1+1.0),K6(b.eO+1.0),K6(b.c1+1.0));g.mA=0.0;g.ph=E2(g,h);g.i4=g.ph;UI(a.j8);WW(a.j8,g);j=g;a:{while(true){if(ACf(a.j8)){if(j!==g){k=UV(a,g,j);break a;}k=null;break a;}l=ARF(a.j8);if(l.mX==h.mX)break;if(E2(l,h)<E2(j,h))j=l;l.nx=1;m=AJR(a,b,l,i,h,f);n=0;while(n<m){k=a.mc.data[n];o=l.mA+E2(l,k);if(!(PB(k)&&o>=k.mA)){k.o2=l;k.mA=o;k.ph=E2(k,h);if(PB(k))ABu(a.j8,
k,k.mA+k.ph);else{k.i4=k.mA+k.ph;WW(a.j8,k);}}n=n+1|0;}}k=UV(a,g,h);}return k;}
function AJR(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;if(J8(a,b,c.ib,c.hX+1|0,c.im,d)>0)g=1;h=KD(a,b,c.ib,c.hX,c.im+1|0,d,g);i=KD(a,b,c.ib-1|0,c.hX,c.im,d,g);j=KD(a,b,c.ib+1|0,c.hX,c.im,d,g);k=KD(a,b,c.ib,c.hX,c.im-1|0,d,g);if(h===null)l=0;else if(h.nx)l=0;else if(E2(h,e)>=f)l=0;else{m=a.mc.data;l=1;m[0]=h;}if(i===null)n=l;else if(i.nx)n=l;else if(E2(i,e)>=f)n=l;else{m=a.mc.data;n=l+1|0;m[l]=i;}if(j===null)o=n;else if(j.nx)o=n;else if(E2(j,e)>=f)o=n;else{m=a.mc.data;o=n+1|0;m[n]=j;}if(k===null)n=o;else if(k.nx)n
=o;else if(E2(k,e)>=f)n=o;else{m=a.mc.data;n=o+1|0;m[o]=k;}return n;}
function KD(a,b,c,d,e,f,g){var h,i,j,k;h=null;if(J8(a,b,c,d,e,f)>0)h=IZ(a,c,d,e);if(h===null){g=d+g|0;if(J8(a,b,c,g,e,f)>0)h=IZ(a,c,g,e);}if(h!==null){i=0;a:{while(true){if(d<=0)break a;j=J8(a,b,c,d-1|0,e,f);if(j<=0)break a;if(j<0)return null;i=i+1|0;if(i>=4)break;d=d+(-1)|0;}return null;}if(d>0)h=IZ(a,c,d,e);k=N9(a.x7,c,d-1|0,e);if(!(k!==BfV&&k!==BfW))return null;}return h;}
function IZ(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=CP(a.q5,CY(e));if(f===null){f=A0D(b,c,d);BP(a.q5,CY(e),f);}return f;}
function J8(a,b,c,d,e,f){var g,h,i,j;g=c;a:{while(g<(c+f.ib|0)){h=d;while(h<(d+f.hX|0)){i=e;while(i<(e+f.im|0)){j=N9(a.x7,c,d,e);if(j.uh())return 0;if(j===BfV)break a;if(j===BfW)break a;i=i+1|0;}h=h+1|0;}g=g+1|0;}return 1;}return (-1);}
function UV(a,b,c){var d,e,f,g;d=1;e=c;while(e.o2!==null){d=d+1|0;e=e.o2;}f=I(HV,d);g=f.data;d=d+(-1)|0;g[d]=c;while(c.o2!==null){c=c.o2;d=d+(-1)|0;g[d]=c;}b=new Vp;b.pb=f;b.F5=g.length;return b;}
function U$(){var a=this;C1.call(a);a.mx=null;a.hR=null;a.p$=0;a.rc=0;a.AT=0.0;}
function AMm(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Ff()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.p$+c)/a.rc;d=i*i;j=a.mx.d;k=a.mx.j;l=a.mx.e;m=a.hR.cs;n=a.hR.d-a.hR.cs;o=c;n=m+n*o;m=a.hR.b7+(a.hR.j-a.hR.b7)*o+a.AT;o=a.hR.ct+(a.hR.e-a.hR.ct)*o;n=n-j;p=d;q=j+n
*p;r=k+(m-k)*p;p=l+(o-l)*p;s=K(q);t=K(r+a.c4/2.0);u=K(p);b=a.l;$p=1;case 1:$z=ANm(b,s,t,u);if(C()){break _;}v=$z;o=q-BkS;n=r-BkT;m=p-BkU;BS(v,v,v,1.0);b=Bgt;w=a.mx;o=o;n=n;m=m;d=a.mx.v;$p=2;case 2:AQI(b,w,o,n,m,d,c);if(C()){break _;}return;default:Fa();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function AAQ(a){a.p$=a.p$+1|0;if(a.p$==a.rc)Ca(a);}
function AUA(a){return 2;}
function Za(){var a=this;D.call(a);a.d1=null;a.eX=0;}
function Bcc(){var a=new Za();A0f(a);return a;}
function A0f(a){a.d1=I(HV,1024);a.eX=0;}
function WW(a,b){var c,d;if(b.gz>=0){b=new D3;Bl(b,B(901));M(b);}if(a.eX==a.d1.data.length){c=I(HV,a.eX<<1);Dh(a.d1,0,c,0,a.eX);a.d1=c;}a.d1.data[a.eX]=b;b.gz=a.eX;d=a.eX;a.eX=d+1|0;U8(a,d);return b;}
function UI(a){a.eX=0;}
function ARF(a){var b,c,d,e;b=a.d1.data[0];c=a.d1.data;d=a.d1.data;e=a.eX-1|0;a.eX=e;c[0]=d[e];a.d1.data[a.eX]=null;if(a.eX>0)OT(a,0);b.gz=(-1);return b;}
function ABu(a,b,c){var d;d=b.i4;b.i4=c;if(c>=d)OT(a,b.gz);else U8(a,b.gz);}
function U8(a,b){var c,d,e,f;c=a.d1.data[b];d=c.i4;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.d1.data[e];if(d>=f.i4)break;a.d1.data[b]=f;f.gz=b;b=e;}}a.d1.data[b]=c;c.gz=b;}
function OT(a,b){var c,d,e,f,g,h,i,j;c=a.d1.data[b];d=c.i4;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.eX)break;g=a.d1.data[e];h=g.i4;if(f>=a.eX){i=null;j=Infinity;}else{i=a.d1.data[f];j=i.i4;}if(h<j){if(h>=d)break a;a.d1.data[b]=g;g.gz=b;}else{if(j>=d)break a;a.d1.data[b]=i;i.gz=b;e=f;}b=e;}}a.d1.data[b]=c;c.gz=b;}
function ACf(a){return a.eX?0:1;}
function HV(){var a=this;D.call(a);a.ib=0;a.hX=0;a.im=0;a.mX=0;a.gz=0;a.mA=0.0;a.ph=0.0;a.i4=0.0;a.o2=null;a.nx=0;}
function A0D(a,b,c){var d=new HV();A8N(d,a,b,c);return d;}
function A8N(a,b,c,d){a.gz=(-1);a.nx=0;a.ib=b;a.hX=c;a.im=d;a.mX=b|c<<10|d<<20;}
function E2(a,b){var c,d,e;c=b.ib-a.ib|0;d=b.hX-a.hX|0;e=b.im-a.im|0;return D_(c*c+d*d+e*e);}
function A3V(a,b){return b.mX!=a.mX?0:1;}
function AVq(a){return a.mX;}
function PB(a){return a.gz<0?0:1;}
function AJn(){D.call(this);}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",4,"regex",3,"nio",6,"charset",3,"io",3,"lang",-1,"net",10,"minecraft",11,"src"]);
$rt_metadata([D,"Object",9,0,[],0,3,0,["fk",function(){return A42(this);},"en",function(b){return Q9(this,b);},"gj",function(){return AUr(this);}],JB,0,D,[],0,3,0,0,MW,0,D,[],3,3,0,0,FS,0,D,[MW],0,3,0,0,AJ$,0,D,[],4,0,0,0,T_,0,D,[],4,3,0,0,Db,0,D,[],3,3,0,0,DM,0,D,[],3,3,0,0,K0,0,D,[],3,3,0,0,B2,"String",9,D,[Db,DM,K0],0,3,0,["gj",function(){return AUn(this);},"en",function(b){return DC(this,b);},"fk",function(){return A8p(this);},"lP",function(b){return AV6(this,b);}],EE,0,D,[],0,3,0,["lQ",function(){return A0o(this);
}],Fi,0,EE,[],0,3,0,0,I6,0,Fi,[],0,3,0,0,AMh,0,I6,[],0,3,0,0,HO,0,D,[Db,K0],0,0,0,["nz",function(b){M2(this,b);},"gj",function(){return U(this);}],Iw,0,D,[],3,3,0,0,T,0,HO,[Iw],0,3,0,["xS",function(b,c,d,e){return A61(this,b,c,d,e);},"xk",function(b,c,d){return AVt(this,b,c,d);},"gj",function(){return BT(this);},"nz",function(b){AXQ(this,b);},"yi",function(b,c){return A7q(this,b,c);}],Fc,0,D,[Db],1,3,0,0,Gk,0,Fc,[DM],0,3,0,["fk",function(){return A3a(this);},"en",function(b){return A_s(this,b);},"lP",function(b)
{return A65(this,b);}],IT,0,I6,[],0,3,0,0,AOW,0,IT,[],0,3,0,0,ALJ,0,IT,[],0,3,0,0,BO,0,EE,[],0,3,0,0,B6,"RuntimeException",9,BO,[],0,3,0,0,C_,0,D,[],3,3,0,0,Hi,0,D,[C_],3,3,0,0,Uw,0,D,[Hi],3,3,0,0,Qv,0,D,[Hi],3,3,0,0,Vj,0,D,[Hi],3,3,0,0,Ro,0,D,[Hi],3,3,0,0,Wq,0,D,[Hi,Uw,Qv,Vj,Ro],3,3,0,0,PC,0,D,[],3,3,0,0,Ln,0,D,[C_],3,3,0,0,YQ,0,D,[C_,Wq,PC,Ln],1,3,0,["Yi",function(b,c){return AX_(this,b,c);},"a0l",function(b,c){return AYn(this,b,c);},"Sl",function(b){return ATL(this,b);},"Ok",function(b,c,d){return AZe(this,
b,c,d);},"My",function(b){return A1I(this,b);},"Vd",function(){return AUJ(this);},"TB",function(b,c,d){return AS4(this,b,c,d);}],Bs,0,D,[],0,3,Bb,0,S0,0,D,[],3,3,0,0,JF,0,D,[S0],3,3,0,0,N2,0,D,[],3,3,0,0,HC,0,D,[Iw,JF,N2],1,3,0,0,ABn,0,HC,[],0,3,0,0,Lw,0,HC,[],0,3,0,0,AFf,0,D,[],4,3,0,0,AFU,0,D,[C_],1,3,0,0,GT,0,D,[],3,3,0,0,Iq,0,D,[GT],0,3,0,["g$",function(){Yp(this);}],ZL,0,D,[],0,3,0,0,Mn,0,D,[],0,3,Bbm,0,EU,0,D,[GT],0,3,0,["g$",function(){ARr(this);}],DP,0,D,[C_],3,3,0,0,Xb,0,D,[DP],0,0,0,["gQ",function(b)
{return A$0(this,b);}]]);
$rt_metadata([Xh,0,D,[DP],0,0,0,["gQ",function(b){return AXL(this,b);}],Xi,0,D,[DP],0,0,0,["gQ",function(b){return A3F(this,b);}],Xf,0,D,[DP],0,0,0,["gQ",function(b){return ASQ(this,b);}],Xg,0,D,[DP],0,0,0,["gQ",function(b){return A3Q(this,b);}],Xd,0,D,[DP],0,0,0,["gQ",function(b){return A2n(this,b);}],Xe,0,D,[DP],0,0,0,["gQ",function(b){return A6B(this,b);}],Xc,0,D,[DP],0,0,0,["gQ",function(b){return AUl(this,b);}],QD,0,D,[DP],0,0,0,["gQ",function(b){return A7b(this,b);}],QC,0,D,[DP],0,0,0,["gQ",function(b)
{return AYO(this,b);}],NY,0,D,[],0,3,0,0,AA1,0,D,[C_],1,3,0,0,U2,0,D,[],0,3,0,0,B3,"IOException",8,BO,[],0,3,0,0,Lj,0,HO,[Iw],0,3,0,["xS",function(b,c,d,e){return AV3(this,b,c,d,e);},"xk",function(b,c,d){return A4h(this,b,c,d);},"nz",function(b){A4y(this,b);},"yi",function(b,c){return A$b(this,b,c);}],FB,0,D,[],3,3,0,0,V9,0,D,[FB],0,3,0,0,Fk,0,D,[DM],0,3,0,["en",function(b){return A$4(this,b);},"fk",function(){return A$M(this);},"lP",function(b){return A3e(this,b);}],I2,0,D,[],0,3,0,0,UY,0,I2,[],0,3,0,0,SI,
0,D,[],0,3,0,0,VO,0,D,[],3,3,0,0,R8,0,D,[VO],0,3,0,0,AFS,0,D,[],0,3,0,0,Eh,0,D,[],1,3,0,0,MC,0,Eh,[],0,3,0,["hK",function(b,c,d,e,f,g){A$o(this,b,c,d,e,f,g);},"oh",function(b,c,d,e,f,g){AIX(this,b,c,d,e,f,g);}],Eu,0,D,[],0,3,0,0,AAZ,0,Eu,[],0,3,0,["o$",function(){AYH(this);}],AKG,0,Eu,[],0,3,0,["o$",function(){AYX(this);}],L7,0,D,[],4,3,0,0,V4,0,EU,[],0,0,0,["g$",function(){AJ4(this);}],Ss,0,D,[],3,3,0,0,In,0,D,[Ss],3,3,0,0,Go,0,D,[In],1,3,0,["ry",function(b){return Ra(this,b);}],J7,0,D,[In],3,3,0,0,Gg,0,Go,
[J7],1,3,0,["kW",function(){return Jm(this);}],Mw,0,Gg,[],1,3,0,0,OI,0,D,[In],3,3,0,0,Xp,0,D,[OI],3,3,0,0,AEI,0,Mw,[Xp],0,3,0,0,AOd,0,D,[C_],1,3,0,0,F$,0,D,[C_],1,3,0,0,ABL,0,F$,[],1,3,0,0,AKK,0,F$,[],1,3,0,0,Jf,0,D,[In],3,3,0,0,Fd,0,Go,[Jf],1,3,0,["en",function(b){return A51(this,b);},"fk",function(){return AS7(this);}],EV,0,D,[],3,3,0,0,AQn,0,Fd,[EV,Db],0,3,0,["sR",function(b){return Xn(this,b);},"ry",function(b){return WH(this,b);},"kW",function(){return OB(this);},"lV",function(){return IQ(this);}],LX,0,
D,[],3,3,0,0,FY,0,D,[LX],1,3,0,0,ACh,0,FY,[EV,Db],0,3,0,0]);
$rt_metadata([AKh,0,F$,[],1,3,0,0,Y1,0,D,[],0,3,0,0,AE5,0,D,[],0,3,0,0,EZ,"Enum",9,D,[DM,Db],1,3,0,["en",function(b){return ATy(this,b);},"fk",function(){return AX8(this);},"lP",function(b){return AXF(this,b);}],E$,0,EZ,[],12,3,0,0,Qw,0,D,[],3,3,0,0,Ve,0,D,[Qw],0,0,0,["Gt",function(b){CM(this,b);},"I0",function(b){A2a(this,b);}],AQK,0,D,[C_],1,3,0,0,Xv,0,D,[C_],3,3,0,0,Xa,0,D,[Xv],0,0,0,["a02",function(){return A14(this);}],H3,0,D,[JF],1,3,0,0,AQi,0,H3,[],0,3,0,["Cv",function(){return A4K(this);},"oa",function(b,
c,d){return A_o(this,b,c,d);},"wW",function(){return A5w(this);}],IW,0,H3,[],0,3,0,0,Pq,0,D,[],3,3,0,0,P5,0,IW,[Pq],0,3,0,0,MY,0,D,[DM],1,3,0,["lP",function(b){return A6A(this,b);}],WV,0,IW,[],0,3,0,["Cv",function(){return AS5(this);},"oa",function(b,c,d){return AL3(this,b,c,d);},"wW",function(){return A0q(this);}],Nb,0,D,[],1,3,0,0,ADw,0,Nb,[],0,3,0,0,AJg,0,D,[],0,3,0,0,Jc,0,D,[],0,3,0,["Ao",function(b,c,d){return A5g(this,b,c,d);}],U5,0,Jc,[],0,0,0,["Ao",function(b,c,d){return A12(this,b,c,d);}],C5,"Entity",
12,D,[],1,3,0,["C9",function(){Ca(this);},"Jg",function(){AEY(this);},"DU",function(){X7(this);},"Bw",function(){return A1Q(this);},"FZ",function(b){AJ9(this,b);},"DI",function(b){Zp(this,b);},"HM",function(){return AE$(this);},"vi",function(b){return ADL(this,b);},"xG",function(b){A6X(this,b);},"uZ",function(b){A5H(this,b);},"fr",function(b,c){return AJM(this,b,c);},"lt",function(){return A9P(this);},"rQ",function(){return A70(this);},"BD",function(b,c){A_n(this,b,c);},"uJ",function(b){return AWO(this,b);},
"AX",function(b){return AW5(this,b);},"BM",function(){AFg(this);},"Ad",function(){return A9T(this);}],ER,"EntityLiving",12,C5,[],0,3,0,["lt",function(){return AXy(this);},"rQ",function(){return A1U(this);},"rI",function(){return AQt(this);},"Jg",function(){ANt(this);},"BM",function(){AKX(this);},"eo",function(){AMx(this);},"fr",function(b,c){return AB8(this,b,c);},"wA",function(){return A8w(this);},"vb",function(){return AUE(this);},"uM",function(){return AVz(this);},"FC",function(b){AN8(this,b);},"mh",function()
{return ATI(this);},"DI",function(b){AP_(this,b);},"oq",function(){ACu(this);},"wK",function(){AQT(this);},"uS",function(b,c,d){return Zz(this,b,c,d);},"DU",function(){ABO(this);}],IY,"EntityCreature",12,ER,[],0,3,0,["wK",function(){APR(this);},"nO",function(b,c){AMG(this,b,c);},"x1",function(){return AK4(this);}],DQ,"EntityMonster",12,IY,[],0,3,0,["oq",function(){ADb(this);},"eo",function(){ALb(this);},"x1",function(){return AKt(this);},"fr",function(b,c){return AAP(this,b,c);},"nO",function(b,c){AQ1(this,
b,c);},"sC",function(b,c,d){return ABD(this,b,c,d);},"uS",function(b,c,d){return YF(this,b,c,d);}],I$,"EntityZombie",12,DQ,[],0,3,0,["oq",function(){AH6(this);},"mh",function(){return AWQ(this);}],Jp,"EntitySkeleton",12,DQ,[],0,3,0,["oq",function(){AIH(this);},"nO",function(b,c){AHZ(this,b,c);},"mh",function(){return AYT(this);}],J1,"EntityCreeper",12,DQ,[],0,3,0,["wK",function(){ZV(this);},"nO",function(b,c){AAR(this,b,c);},"mh",function(){return ASZ(this);}],Kq,"EntitySpider",12,DQ,[],0,3,0,["x1",function()
{return ARv(this);},"nO",function(b,c){Zs(this,b,c);},"mh",function(){return AZS(this);}],GB,"EntityAnimal",12,IY,[],1,3,0,["sC",function(b,c,d){return AOD(this,b,c,d);},"uS",function(b,c,d){return AK$(this,b,c,d);}],KJ,"EntitySheep",12,GB,[],0,3,0,["fr",function(b,c){return AGZ(this,b,c);},"wA",function(){return A67(this);},"vb",function(){return A4l(this);},"uM",function(){return AYr(this);}],IE,"EntityPig",12,GB,[],0,3,0,["wA",function(){return ATE(this);},"vb",function(){return A9y(this);},"uM",function()
{return AV_(this);},"uJ",function(b){return AXY(this,b);},"mh",function(){return AWj(this);}],DA,0,D,[Db],0,3,0,0,NG,0,D,[],0,3,0,0,Pf,0,D,[],0,3,0,0,P,"Block",12,D,[],0,3,L,["gf",function(){return A86(this);},"el",function(){return AWJ(this);},"Cz",function(b,c,d,e){return AFd(this,b,c,d,e);},"pG",function(b,c,d,e,f){return AGz(this,b,c,d,e,f);},"uk",function(b,c,d,e,f){return AB5(this,b,c,d,e,f);},"eY",function(b,c){return A7k(this,b,c);},"cj",function(b){return AVJ(this,b);},"oS",function(b,c,d,e){return K9(this,
b,c,d,e);},"FF",function(b,c,d,e,f,g){ALC(this,b,c,d,e,f,g);},"hw",function(b,c,d,e){return Np(this,b,c,d,e);},"d4",function(){return A5o(this);},"o6",function(b,c){return A6x(this,b,c);},"pf",function(){return A3S(this);},"e8",function(b,c,d,e,f){AHV(this,b,c,d,e,f);},"kP",function(b,c,d,e,f){APh(this,b,c,d,e,f);},"np",function(b,c,d,e,f){AAc(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){YV(this,b,c,d,e,f);},"mt",function(){return A32(this);},"fE",function(b,c,d,e){ABc(this,b,c,d,e);},"ly",function(b,c,d,e){Z9(this,
b,c,d,e);},"eG",function(b){return AYu(this,b);},"dW",function(b,c){return ATV(this,b,c);},"IR",function(b,c,d,e,f){Yn(this,b,c,d,e,f);},"HU",function(b,c,d,e,f,g){AE2(this,b,c,d,e,f,g);},"yo",function(b){return AZ7(this,b);},"nG",function(b,c,d,e,f,g){return Ke(this,b,c,d,e,f,g);},"sL",function(b,c,d,e){AQ5(this,b,c,d,e);},"pR",function(){return AVp(this);},"fT",function(b,c,d,e){return AEJ(this,b,c,d,e);},"lD",function(b,c,d,e,f){return AGN(this,b,c,d,e,f);},"oH",function(b,c,d,e,f){AJP(this,b,c,d,e,f);},
"vc",function(b,c,d,e,f){YN(this,b,c,d,e,f);},"q9",function(b,c,d,e,f){AAj(this,b,c,d,e,f);},"qE",function(b,c,d,e,f,g){AF$(this,b,c,d,e,f,g);},"xL",function(b,c,d,e){AP1(this,b,c,d,e);}],RH,0,D,[],3,3,0,0,AJk,0,Gg,[EV,Db,RH],0,3,0,["lV",function(){return CX(this);},"sR",function(b){return S(this,b);}],DH,0,D,[C_],3,3,0,0,TO,0,D,[DH],0,0,0,["gw",function(){return AWs(this);}],TN,0,D,[DH],0,0,0,["gw",function(){return AS$(this);}],TM,0,D,[DH],0,0,0,["gw",function(){return AZr(this);}],TL,0,D,[DP],0,0,0,["gQ",
function(b){return A6N(this,b);}],SG,0,D,[],0,0,0,0,Cb,"IllegalArgumentException",9,B6,[],0,3,0,0,Vl,"UnsupportedCharsetException",7,Cb,[],0,3,0,0,EF,"NullPointerException",9,B6,[],0,3,0,0,ABd,0,D,[C_],4,3,0,0,Fm,0,D,[],1,3,0,0]);
$rt_metadata([L_,0,Fm,[DM],1,3,0,0,AE8,0,D,[],0,3,0,0,QM,0,D,[],0,3,0,0,E5,0,D,[JF,N2],1,3,0,["gv",function(b,c,d){ATl(this,b,c,d);},"tQ",function(){A80(this);},"lv",function(){A9O(this);}],Ge,0,E5,[],0,3,0,0,AA_,0,Ge,[],0,3,0,0,Xj,0,E5,[],0,0,0,["nL",function(b){AYm(this,b);}],AFe,"IllegalCharsetNameException",7,Cb,[],0,3,0,0,MX,0,D,[],128,3,0,0,Uq,0,MX,[],4,3,0,0,Is,0,D,[],0,3,0,0,AHs,0,Is,[],4,0,0,0,ACw,0,Is,[],4,0,0,0,LT,"BlockStone",12,P,[],0,3,0,["dW",function(b,c){return A8M(this,b,c);}],Z_,"BlockGrass",
12,P,[],0,3,0,["cj",function(b){return A7v(this,b);},"e8",function(b,c,d,e,f){ADt(this,b,c,d,e,f);},"dW",function(b,c){return A0c(this,b,c);}],AHY,"BlockDirt",12,P,[],0,3,0,0,B8,0,D,[],0,3,0,["nC",function(){return A8q(this);},"dv",function(){return A03(this);},"sj",function(){return A7V(this);},"uh",function(){return A5x(this);}],F4,"BlockFlower",12,P,[],0,3,0,["fT",function(b,c,d,e){return AL0(this,b,c,d,e);},"ro",function(b){return AYq(this,b);},"e1",function(b,c,d,e,f){AIK(this,b,c,d,e,f);},"e8",function(b,
c,d,e,f){AEc(this,b,c,d,e,f);},"Hd",function(b,c,d,e){return AN_(this,b,c,d,e);},"hw",function(b,c,d,e){return AGo(this,b,c,d,e);},"d4",function(){return A6q(this);},"gf",function(){return AT5(this);},"el",function(){return A7A(this);}],AM2,"BlockSapling",12,F4,[],0,3,0,["e8",function(b,c,d,e,f){AEl(this,b,c,d,e,f);}],HU,0,P,[],1,3,0,["cj",function(b){return ATf(this,b);},"gf",function(){return A_d(this);},"d4",function(){return A$x(this);},"o6",function(b,c){return A8J(this,b,c);},"pG",function(b,c,d,e,f){
return ARB(this,b,c,d,e,f);},"hw",function(b,c,d,e){return Yl(this,b,c,d,e);},"el",function(){return A73(this);},"dW",function(b,c){return A3j(this,b,c);},"eG",function(b){return A6e(this,b);},"qE",function(b,c,d,e,f,g){ANh(this,b,c,d,e,f,g);},"mt",function(){return AU9(this);},"Cz",function(b,c,d,e){return AEz(this,b,c,d,e);},"e8",function(b,c,d,e,f){ARd(this,b,c,d,e,f);},"pR",function(){return A$u(this);},"kP",function(b,c,d,e,f){YL(this,b,c,d,e,f);},"fE",function(b,c,d,e){ARV(this,b,c,d,e);},"e1",function(b,
c,d,e,f){ALk(this,b,c,d,e,f);}],AEk,"BlockFlowing",12,HU,[],0,3,0,["e8",function(b,c,d,e,f){AOT(this,b,c,d,e,f);},"fE",function(b,c,d,e){AB9(this,b,c,d,e);}],AIP,"BlockStationary",12,HU,[],0,3,0,["e1",function(b,c,d,e,f){AGC(this,b,c,d,e,f);}],I_,"BlockSand",12,P,[],0,3,0,["fE",function(b,c,d,e){ART(this,b,c,d,e);},"e1",function(b,c,d,e,f){ASi(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){APE(this,b,c,d,e,f);},"mt",function(){return A31(this);}],AG9,"BlockGravel",12,I_,[],0,3,0,["dW",function(b,c){return A_q(this,
b,c);}],Y3,"BlockOre",12,P,[],0,3,0,["dW",function(b,c){return A4s(this,b,c);},"eG",function(b){return A0b(this,b);}],AFk,"BlockLog",12,P,[],0,3,0,["eG",function(b){return A81(this,b);},"dW",function(b,c){return ATj(this,b,c);},"cj",function(b){return AVD(this,b);}],L0,0,P,[],0,3,0,["pG",function(b,c,d,e,f){return AQz(this,b,c,d,e,f);}],ACJ,"BlockLeaves",12,L0,[],0,3,0,["e8",function(b,c,d,e,f){AID(this,b,c,d,e,f);},"eG",function(b){return AW$(this,b);},"dW",function(b,c){return A5h(this,b,c);},"d4",function()
{return A2V(this);},"oH",function(b,c,d,e,f){ASw(this,b,c,d,e,f);}],ALj,"BlockSponge",12,P,[],0,3,0,["fE",function(b,c,d,e){AKO(this,b,c,d,e);},"ly",function(b,c,d,e){ANy(this,b,c,d,e);}],Nf,0,P,[],0,3,0,["d4",function(){return A$g(this);},"pG",function(b,c,d,e,f){return YD(this,b,c,d,e,f);}],AQq,"BlockGlass",12,Nf,[],0,3,0,["eG",function(b){return AWa(this,b);}],AHh,"BlockMushroom",12,F4,[],0,3,0,["ro",function(b){return AI_(this,b);},"Hd",function(b,c,d,e){return ADn(this,b,c,d,e);}],ABA,"BlockOreBlock",12,
P,[],0,3,0,["cj",function(b){return A4F(this,b);}],Zm,"BlockStep",12,P,[],0,3,0,["cj",function(b){return A$P(this,b);},"d4",function(){return A5W(this);},"e1",function(b,c,d,e,f){ABJ(this,b,c,d,e,f);},"fE",function(b,c,d,e){ABp(this,b,c,d,e);},"dW",function(b,c){return AZs(this,b,c);},"gf",function(){return AXa(this);},"pG",function(b,c,d,e,f){return ASI(this,b,c,d,e,f);}],AOk,"BlockTNT",12,P,[],0,3,0,["cj",function(b){return A47(this,b);},"eG",function(b){return AVf(this,b);},"sL",function(b,c,d,e){AGI(this,
b,c,d,e);},"np",function(b,c,d,e,f){ASq(this,b,c,d,e,f);}],ADd,"BlockBookshelf",12,P,[],0,3,0,["cj",function(b){return A_e(this,b);},"eG",function(b){return A4H(this,b);}],XT,"BlockObsidian",12,LT,[],0,3,0,["eG",function(b){return A3c(this,b);},"dW",function(b,c){return AU1(this,b,c);}],AOG,"BlockTorch",12,P,[],0,3,0,["hw",function(b,c,d,e){return ANp(this,b,c,d,e);},"d4",function(){return A2g(this);},"gf",function(){return AWf(this);},"el",function(){return A01(this);},"fT",function(b,c,d,e){return AMa(this,
b,c,d,e);},"vc",function(b,c,d,e,f){ANS(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){ASg(this,b,c,d,e,f);},"fE",function(b,c,d,e){ABz(this,b,c,d,e);},"e1",function(b,c,d,e,f){AKf(this,b,c,d,e,f);},"nG",function(b,c,d,e,f,g){return AKm(this,b,c,d,e,f,g);},"kP",function(b,c,d,e,f){AQs(this,b,c,d,e,f);}],AO6,"BlockFire",12,P,[],0,3,0,["hw",function(b,c,d,e){return ARH(this,b,c,d,e);},"d4",function(){return A53(this);},"gf",function(){return A8A(this);},"el",function(){return AXB(this);},"eG",function(b){return AWK(this,
b);},"mt",function(){return AZ9(this);},"e8",function(b,c,d,e,f){XS(this,b,c,d,e,f);},"pf",function(){return A3q(this);},"fT",function(b,c,d,e){return ANv(this,b,c,d,e);},"e1",function(b,c,d,e,f){ABF(this,b,c,d,e,f);},"fE",function(b,c,d,e){ACx(this,b,c,d,e);},"kP",function(b,c,d,e,f){ASx(this,b,c,d,e,f);}],Eg,0,P,[],1,3,0,["fE",function(b,c,d,e){AOJ(this,b,c,d,e);},"ly",function(b,c,d,e){AL4(this,b,c,d,e);}],AAh,"BlockMobSpawner",12,Eg,[],0,3,0,["ta",function(){return AXn(this);},"d4",function(){return A58(this);
}],ZE,"BlockStairs",12,P,[],0,3,0,["d4",function(){return A5L(this);},"gf",function(){return AV$(this);},"el",function(){return AY2(this);},"pG",function(b,c,d,e,f){return APF(this,b,c,d,e,f);},"FF",function(b,c,d,e,f,g){AJF(this,b,c,d,e,f,g);},"e1",function(b,c,d,e,f){AHH(this,b,c,d,e,f);},"kP",function(b,c,d,e,f){APi(this,b,c,d,e,f);},"q9",function(b,c,d,e,f){ABj(this,b,c,d,e,f);},"np",function(b,c,d,e,f){ADs(this,b,c,d,e,f);},"Cz",function(b,c,d,e){return AM1(this,b,c,d,e);},"yo",function(b){return A82(this,
b);},"pR",function(){return A8e(this);},"dW",function(b,c){return A4j(this,b,c);},"eG",function(b){return A0A(this,b);},"eY",function(b,c){return AXC(this,b,c);},"cj",function(b){return A7$(this,b);},"uk",function(b,c,d,e,f){return ANa(this,b,c,d,e,f);},"mt",function(){return AVN(this);},"oS",function(b,c,d,e){return AMl(this,b,c,d,e);},"qE",function(b,c,d,e,f,g){ACN(this,b,c,d,e,f,g);},"pf",function(){return AYI(this);},"o6",function(b,c){return AYV(this,b,c);},"fT",function(b,c,d,e){return AMt(this,b,c,d,
e);},"fE",function(b,c,d,e){ACI(this,b,c,d,e);},"ly",function(b,c,d,e){YH(this,b,c,d,e);},"HU",function(b,c,d,e,f,g){AHU(this,b,c,d,e,f,g);},"IR",function(b,c,d,e,f){AM4(this,b,c,d,e,f);},"oH",function(b,c,d,e,f){AQX(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){AQ2(this,b,c,d,e,f);},"lD",function(b,c,d,e,f){return AGO(this,b,c,d,e,f);},"sL",function(b,c,d,e){Zf(this,b,c,d,e);}],AFV,"BlockChest",12,Eg,[],0,3,0,["uk",function(b,c,d,e,f){return AEC(this,b,c,d,e,f);},"cj",function(b){return A9b(this,b);},"fT",function(b,
c,d,e){return AJ7(this,b,c,d,e);},"ly",function(b,c,d,e){ASK(this,b,c,d,e);},"lD",function(b,c,d,e,f){return AF1(this,b,c,d,e,f);},"ta",function(){return AZJ(this);}],AKN,"BlockGears",12,P,[],0,3,0,["hw",function(b,c,d,e){return AEZ(this,b,c,d,e);},"d4",function(){return AT2(this);},"gf",function(){return A5j(this);},"el",function(){return A7y(this);},"eG",function(b){return A9V(this,b);},"pf",function(){return AUH(this);}],AHA,"BlockWorkbench",12,P,[],0,3,0,["cj",function(b){return AWA(this,b);},"lD",function(b,
c,d,e,f){return AGV(this,b,c,d,e,f);}],AKM,"BlockCrops",12,F4,[],0,3,0,["ro",function(b){return AYM(this,b);},"e8",function(b,c,d,e,f){AJs(this,b,c,d,e,f);},"eY",function(b,c){return A8y(this,b,c);},"el",function(){return A4J(this);},"np",function(b,c,d,e,f){AND(this,b,c,d,e,f);},"dW",function(b,c){return A04(this,b,c);},"eG",function(b){return A40(this,b);}],AQU,"BlockFarmland",12,P,[],0,3,0,["hw",function(b,c,d,e){return AA$(this,b,c,d,e);},"d4",function(){return AU8(this);},"gf",function(){return A1G(this);
},"eY",function(b,c){return A_p(this,b,c);},"e8",function(b,c,d,e,f){ANi(this,b,c,d,e,f);},"oH",function(b,c,d,e,f){AKT(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){Ye(this,b,c,d,e,f);},"dW",function(b,c){return AW7(this,b,c);}],AF6,"BlockFurnace",12,Eg,[],0,3,0,["fE",function(b,c,d,e){ACz(this,b,c,d,e);},"uk",function(b,c,d,e,f){return AKj(this,b,c,d,e,f);},"kP",function(b,c,d,e,f){AEq(this,b,c,d,e,f);},"cj",function(b){return AU3(this,b);},"lD",function(b,c,d,e,f){return AGY(this,b,c,d,e,f);},"ta",function()
{return A7_(this);}],VA,"BlockSign",12,Eg,[],0,3,0,["el",function(){return AYR(this);},"gf",function(){return A6d(this);},"d4",function(){return A59(this);},"ta",function(){return A1R(this);},"fT",function(b,c,d,e){return AGR(this,b,c,d,e);},"dW",function(b,c){return A8H(this,b,c);},"e1",function(b,c,d,e,f){ZZ(this,b,c,d,e,f);}],D$,"TileEntity",12,D,[],0,3,0,["tN",function(){AFO(this);},"ki",function(){ACk(this);}]]);
$rt_metadata([Jk,0,D$,[],0,3,0,0,Bc,0,D,[],0,3,BB,["iO",function(b,c,d,e,f,g,h){return AGx(this,b,c,d,e,f,g,h);},"x4",function(b,c){return A$Q(this,b,c);},"n8",function(b,c,d){return ASo(this,b,c,d);},"sf",function(b,c){AWe(this,b,c);},"xY",function(b,c,d,e,f){A5b(this,b,c,d,e,f);},"nZ",function(b){return A_w(this,b);},"o7",function(b){return AV7(this,b);},"yG",function(b,c){A3N(this,b,c);}],AIC,"BlockDoor",12,P,[],0,3,0,["eY",function(b,c){return A$w(this,b,c);},"d4",function(){return A0X(this);},"gf",function()
{return AXw(this);},"el",function(){return ATS(this);},"oS",function(b,c,d,e){return AGv(this,b,c,d,e);},"hw",function(b,c,d,e){return ZG(this,b,c,d,e);},"xL",function(b,c,d,e){AHJ(this,b,c,d,e);},"q9",function(b,c,d,e,f){AJ1(this,b,c,d,e,f);},"lD",function(b,c,d,e,f){return ADX(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){ACD(this,b,c,d,e,f);},"dW",function(b,c){return A8G(this,b,c);},"nG",function(b,c,d,e,f,g){return XL(this,b,c,d,e,f,g);},"fT",function(b,c,d,e){return AJ6(this,b,c,d,e);}],AC6,"BlockLadder",
12,P,[],0,3,0,["hw",function(b,c,d,e){return ADj(this,b,c,d,e);},"oS",function(b,c,d,e){return AD$(this,b,c,d,e);},"d4",function(){return AW1(this);},"gf",function(){return A50(this);},"el",function(){return A9E(this);},"fT",function(b,c,d,e){return ANY(this,b,c,d,e);},"vc",function(b,c,d,e,f){Yu(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){AKQ(this,b,c,d,e,f);},"eG",function(b){return A5y(this,b);}],AN1,"BlockMinecartTrack",12,P,[],0,3,0,["hw",function(b,c,d,e){return ACH(this,b,c,d,e);},"d4",function(){return AWC(this);
},"nG",function(b,c,d,e,f,g){return ALH(this,b,c,d,e,f,g);},"xL",function(b,c,d,e){AMq(this,b,c,d,e);},"eY",function(b,c){return A2G(this,b,c);},"gf",function(){return A3G(this);},"el",function(){return A0C(this);},"eG",function(b){return A2N(this,b);},"fT",function(b,c,d,e){return AN0(this,b,c,d,e);},"fE",function(b,c,d,e){ANJ(this,b,c,d,e);},"e1",function(b,c,d,e,f){AJT(this,b,c,d,e,f);}],ASG,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AQr(this,b,c,d,e,f,g,h);}],AHL,0,MY,[],0,3,0,0,M$,0,Fm,[DM],1,3,
0,0,Nl,0,L_,[],1,0,0,0,WT,0,Nl,[],0,0,0,0,ARq,0,M$,[],0,0,0,0,Vz,0,D,[],3,3,0,0,LY,0,Fm,[DM,Iw,K0,Vz],1,3,0,0,P9,"GZIPException",2,B3,[],0,3,0,0,Op,0,B8,[],0,3,0,["dv",function(){return A4Y(this);},"sj",function(){return A5D(this);},"uh",function(){return ATr(this);}],L3,0,B8,[],0,3,0,["nC",function(){return A_K(this);},"dv",function(){return AZc(this);}],N_,0,B8,[],0,3,0,["dv",function(){return A62(this);},"sj",function(){return A9_(this);},"uh",function(){return AU$(this);}],Gc,0,Bc,[],0,3,0,["x4",function(b,
c){return A8Z(this,b,c);},"sf",function(b,c){A6_(this,b,c);},"xY",function(b,c,d,e,f){AWv(this,b,c,d,e,f);},"nZ",function(b){return AXd(this,b);}],O1,0,Gc,[],0,3,Bb$,0,VD,0,Gc,[],0,3,Bcb,["o7",function(b){return A5q(this,b);}],Wy,0,Gc,[],0,3,BbN,0,AE4,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AJO(this,b,c,d,e,f,g,h);}],LR,0,Bc,[],0,3,0,["n8",function(b,c,d){return Qb(this,b,c,d);}],AOZ,0,Bc,[],0,3,0,["n8",function(b,c,d){return AGF(this,b,c,d);}],ALf,0,Bc,[],0,3,0,["x4",function(b,c){return A0B(this,
b,c);},"sf",function(b,c){A7Y(this,b,c);},"xY",function(b,c,d,e,f){AX$(this,b,c,d,e,f);},"nZ",function(b){return A2F(this,b);}],AOg,0,LR,[],0,3,0,["n8",function(b,c,d){return APA(this,b,c,d);}],ANC,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AQY(this,b,c,d,e,f,g,h);}],V2,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AFp(this,b,c,d,e,f,g,h);}],F5,0,Bc,[],0,3,0,0,X1,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return ACi(this,b,c,d,e,f,g,h);}],AHv,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return Yk(this,
b,c,d,e,f,g,h);}],AJh,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AEd(this,b,c,d,e,f,g,h);}],ARR,0,Bc,[],0,3,0,["n8",function(b,c,d){return AH3(this,b,c,d);}],APc,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return ADa(this,b,c,d,e,f,g,h);}],ARj,0,Bc,[],0,3,0,["yG",function(b,c){AGD(this,b,c);},"sf",function(b,c){AWr(this,b,c);}],N7,0,D,[],3,0,0,0,AGm,0,D,[N7],4,3,0,["E4",function(b){AS2(this,b);},"lZ",function(){AZB(this);},"yA",function(){return AT8(this);},"kH",function(b,c,d){A8l(this,b,c,d);}],Si,
"CloneNotSupportedException",9,BO,[],0,3,0,0,Nt,0,D,[],4,3,0,0,J5,0,D,[],3,3,0,0,LO,0,D,[J5,EV],0,0,0,["en",function(b){return A45(this,b);},"fk",function(){return A11(this);}],IH,0,LO,[],0,0,0,0,BM,"IndexOutOfBoundsException",9,B6,[],0,3,0,0,I1,"StringIndexOutOfBoundsException",9,BM,[],0,3,0,0,GG,0,D,[],3,3,0,0,WF,0,D,[GG],0,3,0,["g$",function(){AI8(this);}],FG,"EOFException",8,B3,[],0,3,0,0,ES,0,D,[],0,3,0,0,Fy,0,D,[],0,3,0,0,LM,0,D,[],4,0,0,0]);
$rt_metadata([PT,0,E5,[],0,0,0,["nL",function(b){A6b(this,b);}],Kn,0,D,[],0,3,0,0,AMs,0,D,[],4,3,0,0,Ji,0,D,[],0,3,0,0,Lu,0,LY,[],1,0,0,0,ABT,0,Lu,[],0,0,0,0,LU,0,D,[],1,3,0,0,Oc,0,D,[],0,3,0,0,AAd,0,D,[C_],1,3,0,0,PU,0,D,[C_],3,3,0,0,YJ,0,D,[C_,PU],1,3,0,0,KG,0,D,[],4,0,0,0,NJ,0,LU,[],1,3,0,0,PV,0,NJ,[],0,3,0,0,AOt,0,D,[],4,3,0,0,Gd,0,D,[],4,0,0,0,LD,0,D,[],4,0,0,0,Hw,"UTFDataFormatException",8,B3,[],0,3,0,0,XA,"NegativeArraySizeException",9,B6,[],0,3,0,0,AA4,0,D,[Ln],1,3,0,["Q1",function(b){return A_E(this,
b);},"ZA",function(){return AUF(this);}],Ko,"IllegalMonitorStateException",9,B6,[],0,3,0,0,Z1,0,D,[],0,0,0,0,D3,"IllegalStateException",9,BO,[],0,3,0,0,AIE,0,D,[C_],1,3,0,0,SW,0,D,[GG],0,3,0,["g$",function(){ARb(this);}],Rf,0,D,[GG],0,3,0,0,G0,0,B3,[],0,3,0,0,W7,"AssertionError",9,Fi,[],0,3,0,0,E3,0,BO,[],0,3,0,0,On,0,D,[],1,3,0,0,Sm,0,D,[],3,3,0,0,Sw,0,D,[],3,3,0,0,Pl,0,D,[GG,Sm,Sw],0,0,0,["g$",function(){APq(this);}],LI,0,On,[],1,3,0,0,Rm,0,LI,[],0,3,0,0,DZ,"Inflate$Return",2,BO,[],0,0,0,0,ANA,0,D,[EV],0,
3,0,0,OY,0,D,[N7],4,3,0,["kH",function(b,c,d){A2E(this,b,c,d);},"lZ",function(){A6w(this);},"E4",function(b){A9Y(this,b);},"yA",function(){return A7C(this);}],Ja,0,D,[],0,3,0,0,Qm,0,D,[],3,3,0,0,Bu,0,Bs,[Qm],0,3,BV,0,ACG,0,D,[],0,3,0,0,NI,0,D,[],0,3,0,0,Ip,0,D,[],0,3,Tw,0,ASf,0,E5,[],0,3,0,["nL",function(b){A7T(this,b);},"gv",function(b,c,d){Ry(this,b,c,d);}],JW,"ArrayStoreException",9,B6,[],0,3,0,0,Oj,0,D,[],3,3,0,0,F0,0,D,[Oj],0,3,0,["ei",function(b,c,d){return ACB(this,b,c,d);},"oK",function(b,c,d){return AB6(this,
b,c,d);},"eH",function(b,c,d){return AEN(this,b,c,d);},"sN",function(b,c,d){return ANm(this,b,c,d);},"le",function(b,c,d){return AAI(this,b,c,d);}],L4,0,D,[],0,3,BA,0,ANk,0,D,[],0,3,0,0]);
$rt_metadata([Gh,0,D,[],0,3,0,0,CS,0,Gh,[],0,3,0,["o_",function(b,c){YU(this,b,c);},"I6",function(b,c,d){Zt(this,b,c,d);},"Cg",function(b,c,d){A2C(this,b,c,d);},"iE",function(b){AMX(this,b);},"hV",function(){AP$(this);},"rA",function(){A3l(this);},"pt",function(){AIb(this);},"n_",function(){return AVw(this);}],AFh,0,D,[],0,3,0,0,Mo,0,D,[Db],1,3,0,0,Es,0,Mo,[Db],0,3,0,0,Od,0,D,[],3,3,0,0,I7,0,D,[Db,Od],1,3,0,0,Wo,0,D,[Od],3,3,0,0,N4,0,D,[Wo],3,3,0,0,R6,0,D,[],3,3,0,0,Mg,0,D,[R6],3,3,0,0,U9,0,I7,[Db,N4,Mg],0,
3,0,0,Wm,0,D,[N4],3,3,0,0,R0,0,D,[Mg],3,3,0,0,G_,0,I7,[Db,Wm,R0],0,3,0,0,S4,0,D,[GG],0,3,0,["g$",function(){AIG(this);}],AO3,"CoderMalfunctionError",7,Fi,[],0,3,0,0,H7,0,D,[],3,3,0,0,Uz,0,D,[H7],3,3,0,0,AC3,0,D,[Uz],0,0,0,0,RJ,0,D,[],0,0,0,0,KL,0,D,[],0,3,0,0,Wn,0,D,[],0,3,0,0,Qp,0,D,[],0,3,0,0,AK1,0,Eu,[],0,3,0,["o$",function(){A0e(this);}],ACp,0,Eu,[],0,3,0,["o$",function(){A8W(this);}],AR_,0,Eu,[],0,3,0,["o$",function(){A3z(this);}],Xx,0,D,[],3,3,0,0,AAA,0,D,[Xx],0,3,0,0,AHf,0,CS,[],0,3,0,["rA",function()
{A5u(this);},"o_",function(b,c){ANP(this,b,c);},"hV",function(){AIx(this);},"iE",function(b){ACv(this,b);},"hP",function(b,c,d){ZI(this,b,c,d);}],O4,0,D,[],0,3,0,0,Nw,0,Gh,[],0,3,0,0,Jx,"EntityPlayer",12,ER,[],0,3,0,["BM",function(){AF0(this);},"FC",function(b){ALi(this,b);},"BD",function(b,c){AZz(this,b,c);},"rI",function(){return A5l(this);},"fr",function(b,c){return Yw(this,b,c);}],AGG,"EntityPlayerSP",12,Jx,[],0,3,0,["wK",function(){AAV(this);},"oq",function(){ALr(this);}],AJL,0,D,[],0,3,0,0,Qs,0,D,[],0,
3,0,0,Vv,0,D,[],0,3,0,0,FE,0,D,[],3,3,0,0,VJ,0,D,[FE],0,3,0,["j5",function(b,c){return Em(this,b,c);},"jC",function(b,c){AFH(this,b,c);},"gx",function(b){return RU(this,b);},"f2",function(){return AZw(this);},"ki",function(){AAu(this);}],Dt,0,I2,[],0,3,0,0,Ew,0,CS,[],1,3,0,["hP",function(b,c,d){ACm(this,b,c,d);},"I6",function(b,c,d){AN9(this,b,c,d);},"Cg",function(b,c,d){A9N(this,b,c,d);},"o_",function(b,c){AAC(this,b,c);},"pt",function(){AA5(this);},"n_",function(){return A$7(this);}],APS,0,Ew,[],0,3,0,["pt",
function(){ALO(this);},"tp",function(b){ATX(this,b);},"lr",function(){AZ_(this);},"hP",function(b,c,d){AD2(this,b,c,d);},"s2",function(b){Yd(this,b);}],I9,0,D,[],0,3,0,0,Rx,0,D,[],0,0,0,0,Tn,0,D,[],0,3,0,0,AHt,0,D,[],0,3,0,0,Cc,0,D,[],4,3,0,0,ZQ,0,D,[FE],0,3,0,["gx",function(b){return Gj(this,b);},"j5",function(b,c){return AE1(this,b,c);},"jC",function(b,c){A3H(this,b,c);},"f2",function(){return A84(this);},"ki",function(){ADT(this);}],AAK,0,D,[FE],0,3,0,["gx",function(b){return A4$(this,b);},"j5",function(b,
c){return AWH(this,b,c);},"jC",function(b,c){Po(this,b,c);},"f2",function(){return AY0(this);},"ki",function(){ANn(this);}],HM,0,D,[],0,3,0,["Jp",function(){ALd(this);},"s6",function(b){return AXl(this,b);},"rV",function(){return A9W(this);}]]);
$rt_metadata([ADi,0,HM,[],0,0,0,["s6",function(b){return A0p(this,b);},"Jp",function(){AOa(this);}],QN,0,HM,[],0,0,0,["s6",function(b){return A2X(this,b);},"rV",function(){return AWB(this);}],Wh,0,D,[],4,3,0,0,SF,0,D,[],4,3,0,0,M8,0,Fm,[DM],1,3,0,0,Df,0,D,[],1,3,0,0,AIM,0,Df,[],0,3,0,["iQ",function(b,c,d,e,f,g){AC$(this,b,c,d,e,f,g);}],Pg,0,D,[],4,3,0,0,QG,0,D,[DP],0,0,0,["gQ",function(b){return A7w(this,b);}],QF,0,D,[DP],0,0,0,["gQ",function(b){return A7I(this,b);}],Iy,0,M8,[],1,0,0,0,U0,0,Iy,[],0,0,0,["ys",
function(b){return AOO(this,b);},"u8",function(b,c){ANM(this,b,c);},"mZ",function(){return ASV(this);}],Wa,0,D,[],4,3,0,0,V8,0,D,[],4,3,0,0,Xm,0,D,[],4,3,0,0,Jq,"UnsupportedOperationException",9,B6,[],0,3,0,0,UO,0,CS,[],0,3,0,["hV",function(){ADk(this);},"iE",function(b){AOH(this,b);},"hP",function(b,c,d){AMF(this,b,c,d);}],FV,"ReadOnlyBufferException",6,Jq,[],0,3,0,0,Hc,"BufferOverflowException",6,B6,[],0,3,0,0,Gt,"BufferUnderflowException",6,B6,[],0,3,0,0,TD,0,D,[],0,3,0,0,ACr,0,D,[],0,3,0,0,RD,0,CS,[],0,
3,0,0,Mp,0,CS,[],0,3,0,["hV",function(){AOq(this);},"o_",function(b,c){AMp(this,b,c);},"iE",function(b){AOA(this,b);},"hP",function(b,c,d){APs(this,b,c,d);},"n_",function(){return A6U(this);}],C1,"EntityFX",12,C5,[],0,3,0,["eo",function(){ALs(this);},"kQ",function(b,c,d,e,f,g,h){ANx(this,b,c,d,e,f,g,h);},"xx",function(){return A75(this);}],AA6,0,CS,[],0,3,0,["hV",function(){ARh(this);},"iE",function(b){ADq(this,b);},"rA",function(){A2k(this);},"hP",function(b,c,d){ADP(this,b,c,d);}],LB,0,D,[],0,3,0,0,WJ,0,LB,
[],0,3,0,0,Q$,0,D,[],3,3,0,0,AFW,0,D,[Q$],0,3,0,0,O9,0,D,[],0,3,0,0,Ij,0,D,[FE],0,3,0,["gl",function(){return A6y(this);},"w8",function(){return A6l(this);},"gx",function(b){return ATc(this,b);},"j5",function(b,c){return A3m(this,b,c);},"jC",function(b,c){AWX(this,b,c);},"f2",function(){return A$c(this);},"ki",function(){YE(this);}],ZM,"EntityDiggingFX",12,C1,[],0,3,0,["xx",function(){return ATK(this);},"kQ",function(b,c,d,e,f,g,h){YR(this,b,c,d,e,f,g,h);}],KU,"ConcurrentModificationException",4,B6,[],0,3,0,
0,JR,"EntityRainFX",12,C1,[],0,3,0,["kQ",function(b,c,d,e,f,g,h){AKR(this,b,c,d,e,f,g,h);},"eo",function(){AOC(this);}],IR,0,Iy,[],1,0,0,["mZ",function(){return AXS(this);}],Pi,0,IR,[],0,0,0,["ys",function(b){return AWg(this,b);},"u8",function(b,c){ASU(this,b,c);}],VT,0,IR,[],0,0,0,["ys",function(b){return A0V(this,b);},"u8",function(b,c){ATN(this,b,c);}],AKZ,0,D,[FB],0,3,0,["qf",function(b,c){return A1c(this,b,c);}],Wf,0,D,[FB],0,3,0,["qf",function(b,c){return A9K(this,b,c);}],Hs,0,D,[],0,3,0,0,HZ,0,D,[],0,
3,0,0,H1,0,D,[],0,3,0,0,Ni,0,D,[],0,3,0,0,J4,"NoSuchElementException",4,B6,[],0,3,0,0,V1,0,D,[],0,3,0,["en",function(b){return A6t(this,b);},"fk",function(){return A1w(this);}],Oy,0,Fc,[DM],0,3,0,0,Hm,0,D,[],0,0,0,0,Nj,0,D,[],4,3,0,0,Sc,0,D,[],0,3,0,0]);
$rt_metadata([DJ,0,Df,[],0,3,0,["H8",function(b,c,d,e,f,g){AAg(this,b,c,d,e,f,g);},"k7",function(b,c){return APX(this,b,c);},"CH",function(b){return A5n(this,b);},"CK",function(b,c,d){return A6C(this,b,c,d);},"xg",function(b,c){A9f(this,b,c);},"iQ",function(b,c,d,e,f,g){AO2(this,b,c,d,e,f,g);}],OR,0,DJ,[],0,3,0,["k7",function(b,c){return Zd(this,b,c);},"H8",function(b,c,d,e,f,g){AL8(this,b,c,d,e,f,g);},"iQ",function(b,c,d,e,f,g){ACP(this,b,c,d,e,f,g);}],LC,0,Gh,[],0,3,0,0,Mb,0,D,[MW],0,3,0,0,Qx,0,D,[],3,3,0,
0,Ku,0,Mb,[Qx],0,3,0,0,Ox,0,D,[C_],3,3,0,0,QE,0,D,[Ox],0,0,0,["Gj",function(){return A1H(this);}],WP,0,D,[FB],0,3,0,["qf",function(b,c){return A4V(this,b,c);}],WN,0,D,[FB],0,3,0,0,Se,0,Fd,[],4,0,0,0,Sd,0,FY,[],4,0,0,0,Sf,0,Gg,[],4,0,0,0,ID,0,D,[],1,3,0,0,AA9,0,ID,[],0,3,0,["CV",function(b,c,d,e,f){XJ(this,b,c,d,e,f);}],NC,0,D$,[],0,3,0,["tN",function(){AC7(this);}],AR4,0,ID,[],0,3,0,["CV",function(b,c,d,e,f){ARi(this,b,c,d,e,f);}],AQm,0,DJ,[],0,3,0,["CH",function(b){return A6o(this,b);},"k7",function(b,c){return Yi(this,
b,c);}],Ub,0,DJ,[],0,3,0,["k7",function(b,c){return AMg(this,b,c);}],F3,0,Eh,[],0,3,0,["hK",function(b,c,d,e,f,g){A94(this,b,c,d,e,f,g);}],P0,0,F3,[],0,3,0,0,TJ,0,DJ,[],0,3,0,["k7",function(b,c){return ARw(this,b,c);}],ACL,0,F3,[],0,3,0,0,ARl,0,F3,[],0,3,0,0,ACc,0,DJ,[],0,3,0,["xg",function(b,c){A71(this,b,c);},"CK",function(b,c,d){return AZ2(this,b,c,d);}],HT,0,MC,[],0,3,0,["oh",function(b,c,d,e,f,g){A2O(this,b,c,d,e,f,g);}],AIs,0,HT,[],0,3,0,0,Lb,"EntityGiant",12,DQ,[],0,3,0,["sC",function(b,c,d){return APb(this,
b,c,d);}],Ug,0,DJ,[],0,3,0,["xg",function(b,c){A$5(this,b,c);}],TQ,0,Df,[],0,3,0,["iQ",function(b,c,d,e,f,g){AJx(this,b,c,d,e,f,g);}],II,"EntityPainting",12,C5,[],0,3,0,["eo",function(){ADo(this);},"lt",function(){return AXU(this);},"fr",function(b,c){return AEu(this,b,c);}],AAy,0,Df,[],0,3,0,["iQ",function(b,c,d,e,f,g){AOV(this,b,c,d,e,f,g);}],Jv,"EntityArrow",12,C5,[],0,3,0,["eo",function(){APy(this);},"xG",function(b){A7G(this,b);}],RC,0,Df,[],0,3,0,["iQ",function(b,c,d,e,f,g){ADm(this,b,c,d,e,f,g);}],E_,
"EntityItem",12,C5,[],0,3,0,["eo",function(){AJJ(this);},"HM",function(){return AEi(this);},"FZ",function(b){AMz(this,b);},"fr",function(b,c){return Vo(this,b,c);},"xG",function(b){A_i(this,b);}],Mu,"EntityTNTPrimed",12,C5,[],0,3,0,["lt",function(){return A$i(this);},"eo",function(){XP(this);}],AO0,0,Df,[],0,3,0,["iQ",function(b,c,d,e,f,g){AL_(this,b,c,d,e,f,g);}],JP,"EntityFallingSand",12,C5,[],0,3,0,["lt",function(){return AYo(this);},"eo",function(){AMS(this);}],AQS,0,Df,[],0,3,0,["iQ",function(b,c,d,e,f,
g){ARp(this,b,c,d,e,f,g);}],Gi,"EntityMinecart",12,C5,[FE],0,3,0,["AX",function(b){return ASW(this,b);},"Bw",function(){return AZ8(this);},"rQ",function(){return A7J(this);},"Ad",function(){return AVT(this);},"fr",function(b,c){return ALl(this,b,c);},"lt",function(){return A9Q(this);},"C9",function(){APk(this);},"eo",function(){ASL(this);},"uZ",function(b){A3U(this,b);},"uJ",function(b){return A8T(this,b);}],ARE,0,Df,[],0,3,0,["iQ",function(b,c,d,e,f,g){AQj(this,b,c,d,e,f,g);}],Wd,0,D,[],0,3,0,0,ABI,0,D,[],
0,3,0,0,AH_,0,Eh,[],0,3,0,["hK",function(b,c,d,e,f,g){AYf(this,b,c,d,e,f,g);}],AIF,0,Eh,[],0,3,0,["hK",function(b,c,d,e,f,g){A28(this,b,c,d,e,f,g);}],AE0,0,Eh,[],0,3,0,0,TC,0,D,[H7],0,0,0,["qk",function(){return KF(this);},"mQ",function(){return KV(this);}],I8,0,D,[],0,3,0,0,Iv,0,D,[Oj],0,3,0,["ei",function(b,c,d){return HA(this,b,c,d);},"sN",function(b,c,d){return AAU(this,b,c,d);},"eH",function(b,c,d){return AC9(this,b,c,d);},"oK",function(b,c,d){return N9(this,b,c,d);},"le",function(b,c,d){return AB_(this,
b,c,d);}],Gl,0,BO,[],0,3,0,0]);
$rt_metadata([U1,"NoSuchMethodException",9,Gl,[],0,3,0,0,Vk,0,D,[],0,3,0,0,PQ,0,Go,[],0,0,0,["ry",function(b){return A0u(this,b);},"kW",function(){return Nk(this);}],Tz,0,D,[Ox],0,0,0,["Gj",function(){return A_B(this);}],AQL,0,D,[],4,3,0,0,W2,0,D$,[FE],0,3,0,["gx",function(b){return A9t(this,b);},"j5",function(b,c){return A8m(this,b,c);},"jC",function(b,c){AVx(this,b,c);},"f2",function(){return AT_(this);},"tN",function(){AGJ(this);},"ki",function(){Z$(this);}],Tl,0,D$,[FE],0,3,0,["gl",function(){return AVR(this);
},"gx",function(b){return Rh(this,b);},"j5",function(b,c){return A1X(this,b,c);},"jC",function(b,c){AHE(this,b,c);},"w8",function(){return A8F(this);},"f2",function(){return A7p(this);}],CQ,0,D,[],1,3,0,0,APT,0,CQ,[],0,3,0,["gN",function(b){A7g(this,b);},"gF",function(b){A9n(this,b);},"fc",function(){return A7e(this);}],P8,"BufferUnderflowException",7,B6,[],0,3,0,0,SO,"BufferOverflowException",7,B6,[],0,3,0,0,R3,"MalformedInputException",7,G0,[],0,3,0,["lQ",function(){return AVV(this);}],P4,"UnmappableCharacterException",
7,G0,[],0,3,0,["lQ",function(){return AVo(this);}],IP,0,D,[],0,0,0,["qk",function(){return Gb(this);}],Vh,0,IP,[H7],0,0,0,["mQ",function(){return Mh(this);}],WA,0,D,[],0,3,0,0,AED,0,CS,[],0,3,0,["hV",function(){AR5(this);},"iE",function(b){AD0(this,b);},"hP",function(b,c,d){AGf(this,b,c,d);}],OD,0,CS,[],0,3,0,["hV",function(){APz(this);},"s8",function(){AXG(this);},"iE",function(b){ASC(this,b);},"IU",function(b){AKS(this,b);},"hP",function(b,c,d){AEG(this,b,c,d);}],L2,"InstantiationException",9,Gl,[],0,3,0,
0,Tg,"IllegalAccessException",9,Gl,[],0,3,0,0,ALA,0,D,[],4,3,0,0,AAi,0,D,[],4,3,0,0,AMn,0,D,[Db],4,3,0,0,AB4,0,LC,[],0,3,0,0,NU,0,CS,[],0,3,0,["hV",function(){AJy(this);},"iE",function(b){AIk(this,b);},"o_",function(b,c){ALU(this,b,c);},"hP",function(b,c,d){AGB(this,b,c,d);}],U6,0,OD,[],0,3,0,["s8",function(){A1V(this);},"IU",function(b){AMd(this,b);}],NX,0,D,[],0,3,0,0,Yt,0,NX,[],0,3,0,0,Q2,0,D,[],0,3,AY4,0,Cm,0,D,[],1,0,0,["eI",function(b,c,d){return Jg(this,b,c,d);},"eW",function(b,c,d,e){return Jr(this,
b,c,d,e);},"oF",function(){return A4t(this);},"cb",function(b){A1q(this,b);},"d3",function(b){return A$B(this,b);},"lx",function(){return A_j(this);},"iX",function(){K$(this);}],N6,0,CQ,[],0,3,0,["gF",function(b){A9k(this,b);},"gN",function(b){A0s(this,b);},"fc",function(){return AUM(this);}],DW,0,Cm,[],0,0,0,["k",function(b,c,d){return ATO(this,b,c,d);},"b4",function(b){return AT$(this,b);}],HY,0,D,[],0,0,0,0,ARg,"PatternSyntaxException",5,Cb,[],0,3,0,["lQ",function(){return A_f(this);}],Mz,0,CQ,[],0,3,0,["gN",
function(b){A8I(this,b);},"gF",function(b){A8a(this,b);},"fc",function(){return A6O(this);}],M1,0,CQ,[],0,3,0,["gN",function(b){AWp(this,b);},"gF",function(b){AZF(this,b);},"fc",function(){return A5Q(this);}],Ll,0,CQ,[],0,3,0,["gN",function(b){A1_(this,b);},"gF",function(b){AZa(this,b);},"fc",function(){return AVs(this);}],Oe,0,CQ,[],0,3,0,["gN",function(b){ATk(this,b);},"gF",function(b){A_u(this,b);},"fc",function(){return A2M(this);}],Pm,0,CQ,[],0,3,0,["gN",function(b){ATb(this,b);},"gF",function(b){A74(this,
b);},"fc",function(){return ASR(this);}],Ms,0,CQ,[],0,3,0,["gN",function(b){A66(this,b);},"gF",function(b){AVa(this,b);},"fc",function(){return A00(this);}],MK,0,CQ,[],0,3,0,["gN",function(b){A5d(this,b);},"gF",function(b){A7n(this,b);},"fc",function(){return A9H(this);}],OK,0,CQ,[],0,3,0,["gN",function(b){A$Y(this,b);},"gF",function(b){AZb(this,b);},"fc",function(){return ATv(this);}],QY,0,CQ,[],0,3,0,["gN",function(b){A9C(this,b);},"gF",function(b){AY6(this,b);},"fc",function(){return AYG(this);}],TG,0,D,
[DH],0,0,0,["gw",function(){return AUv(this);}],TF,0,D,[DH],0,0,0,["gw",function(){return AXv(this);}],ARX,0,D,[],0,3,0,0,X4,0,D,[],0,3,0,0,XX,0,D,[],0,3,0,0,AEf,0,D,[],0,3,0,0,ARW,0,D,[],0,3,0,0]);
$rt_metadata([AFc,0,D,[],0,3,0,0,Yq,0,D,[FB],0,0,0,["qf",function(b,c){return AZC(this,b,c);}],QK,0,DW,[],0,0,0,["k",function(b,c,d){return A3C(this,b,c,d);},"b4",function(b){return A9D(this,b);}],ASd,0,DW,[],0,0,0,["k",function(b,c,d){return A4R(this,b,c,d);}],PZ,0,DW,[],0,0,0,["k",function(b,c,d){return AUe(this,b,c,d);}],Q_,0,DW,[],0,0,0,["k",function(b,c,d){return A3E(this,b,c,d);},"b4",function(b){return A8S(this,b);}],HW,0,DW,[],0,0,0,["k",function(b,c,d){return A1B(this,b,c,d);}],CI,0,Cm,[],1,0,0,["k",
function(b,c,d){return A_D(this,b,c,d);},"ea",function(){return A$d(this);},"b4",function(b){return AXb(this,b);}],AFZ,0,CI,[],0,0,0,["dn",function(b,c){return A9R(this,b,c);},"eI",function(b,c,d){return A5G(this,b,c,d);},"eW",function(b,c,d,e){return A4I(this,b,c,d,e);},"b4",function(b){return A3D(this,b);}],CD,0,Cm,[],0,0,0,["k",function(b,c,d){return AWw(this,b,c,d);},"cb",function(b){AZq(this,b);},"d3",function(b){return A7j(this,b);},"b4",function(b){return AZX(this,b);},"iX",function(){AUN(this);}],K3,
0,CD,[],0,0,0,["k",function(b,c,d){return AZi(this,b,c,d);},"b4",function(b){return A9p(this,b);}],EY,0,K3,[],0,0,0,["k",function(b,c,d){return A49(this,b,c,d);},"cb",function(b){A8$(this,b);}],Ti,0,EY,[],0,0,0,["k",function(b,c,d){return AZm(this,b,c,d);},"b4",function(b){return A1s(this,b);}],WR,0,EY,[],0,0,0,["k",function(b,c,d){return AT3(this,b,c,d);},"b4",function(b){return A$h(this,b);}],Vi,0,EY,[],0,0,0,["k",function(b,c,d){return AUK(this,b,c,d);},"b4",function(b){return A_R(this,b);}],Rn,0,EY,[],0,
0,0,["k",function(b,c,d){return A3f(this,b,c,d);},"b4",function(b){return A9v(this,b);}],IC,0,CD,[],0,0,0,["k",function(b,c,d){return ATi(this,b,c,d);},"eI",function(b,c,d){return AYd(this,b,c,d);},"eW",function(b,c,d,e){return A9G(this,b,c,d,e);},"d3",function(b){return A7f(this,b);},"lx",function(){return A8Q(this);},"iX",function(){A17(this);}],H2,0,D,[],1,0,0,0,Bm,0,H2,[],1,0,0,["hE",function(){return A4g(this);},"kn",function(){return A3O(this);},"sO",function(){return A99(this);},"nQ",function(){return A_g(this);
}],ZS,"CharClass",5,Bm,[],0,0,0,["X",function(b){return D6(this,b);},"hE",function(){return DY(this);},"kn",function(){return A5z(this);},"sO",function(){return A1i(this);},"gj",function(){return A76(this);},"nQ",function(){return AV2(this);}],MU,"MissingResourceException",4,B6,[],0,3,0,0,E6,0,Cm,[],1,0,0,["d3",function(b){return A0v(this,b);},"b4",function(b){return A$N(this,b);},"iX",function(){AYA(this);}],D8,0,E6,[],0,0,0,["k",function(b,c,d){return A3g(this,b,c,d);}],GE,0,D8,[],0,0,0,["k",function(b,c,
d){return A35(this,b,c,d);}],DX,0,E6,[],0,0,0,["k",function(b,c,d){return A3v(this,b,c,d);}],FX,0,D8,[],0,0,0,["k",function(b,c,d){return A7t(this,b,c,d);},"cb",function(b){A2R(this,b);}],Sx,0,D8,[],0,0,0,["k",function(b,c,d){return A_y(this,b,c,d);},"eI",function(b,c,d){return AYQ(this,b,c,d);}],Ez,"NumberFormatException",9,Cb,[],0,3,0,0,Ts,"Quantifier",5,H2,[EV],0,0,0,["gj",function(){return A8d(this);}],TV,0,Cm,[],0,0,0,["k",function(b,c,d){return AXA(this,b,c,d);},"b4",function(b){return A8P(this,b);}],W4,
0,D,[EV,Db],0,3,0,0,ON,0,CD,[],0,0,0,0,Qa,0,CD,[],0,0,0,["k",function(b,c,d){return ATM(this,b,c,d);},"cb",function(b){A8C(this,b);},"b4",function(b){return AUk(this,b);},"d3",function(b){return AT6(this,b);}],EP,0,CD,[],0,0,0,["k",function(b,c,d){return A5s(this,b,c,d);},"X",function(b){return AWd(this,b);},"d3",function(b){return ATH(this,b);},"cb",function(b){A95(this,b);},"b4",function(b){return AVW(this,b);}],MT,0,EP,[],0,0,0,["X",function(b){return AXc(this,b);}],ZC,0,CI,[],0,0,0,["dn",function(b,c){return A60(this,
b,c);}],Fp,0,CI,[],0,0,0,["dn",function(b,c){return Tb(this,b,c);},"d3",function(b){return AZt(this,b);}],Ua,0,CD,[],0,0,0,["cb",function(b){AYh(this,b);},"k",function(b,c,d){return ASY(this,b,c,d);},"d3",function(b){return A4m(this,b);},"b4",function(b){return A1l(this,b);}],Fw,0,CI,[],0,0,0,["ea",function(){return A6S(this);},"dn",function(b,c){return AWI(this,b,c);},"eI",function(b,c,d){return AVK(this,b,c,d);},"eW",function(b,c,d,e){return AXp(this,b,c,d,e);},"d3",function(b){return A1f(this,b);}],AGW,0,
CI,[],0,0,0,["dn",function(b,c){return A20(this,b,c);}],XV,0,CI,[],0,0,0,["dn",function(b,c){return ATd(this,b,c);}],GJ,0,CD,[],0,0,0,["cb",function(b){A_l(this,b);},"k",function(b,c,d){return AZh(this,b,c,d);},"d3",function(b){return AXD(this,b);},"b4",function(b){return A9a(this,b);}],SP,0,GJ,[],0,0,0,0,V_,0,GJ,[],0,0,0,0,S$,0,DX,[],0,0,0,["k",function(b,c,d){return A4T(this,b,c,d);}],UF,0,DX,[],0,0,0,["k",function(b,c,d){return A7S(this,b,c,d);}],Hx,0,DX,[],0,0,0,["k",function(b,c,d){return A92(this,b,c,
d);},"cb",function(b){A$V(this,b);}],PS,0,Hx,[],0,0,0,["k",function(b,c,d){return AXm(this,b,c,d);},"cb",function(b){A8f(this,b);}],G$,0,DX,[],0,0,0,["k",function(b,c,d){return A_N(this,b,c,d);}],OZ,0,G$,[],0,0,0,["k",function(b,c,d){return AWZ(this,b,c,d);}]]);
$rt_metadata([QA,0,DX,[],0,0,0,["k",function(b,c,d){return A2e(this,b,c,d);}],UZ,0,Hx,[],0,0,0,["k",function(b,c,d){return AUm(this,b,c,d);}],RV,0,G$,[],0,0,0,["k",function(b,c,d){return A3I(this,b,c,d);}],QB,0,E6,[],0,0,0,["k",function(b,c,d){return A_F(this,b,c,d);},"eI",function(b,c,d){return A0R(this,b,c,d);}],T0,0,E6,[],0,0,0,["k",function(b,c,d){return AZu(this,b,c,d);},"eI",function(b,c,d){return AS1(this,b,c,d);}],Gn,0,D,[],1,0,0,0,XB,0,D8,[],0,0,0,["k",function(b,c,d){return ATz(this,b,c,d);}],St,0,
FX,[],0,0,0,["k",function(b,c,d){return AYF(this,b,c,d);}],Um,0,GE,[],0,0,0,["k",function(b,c,d){return A9J(this,b,c,d);}],UX,0,D8,[],0,0,0,["k",function(b,c,d){return AZn(this,b,c,d);}],Wb,0,FX,[],0,0,0,["k",function(b,c,d){return ATD(this,b,c,d);}],Ql,0,GE,[],0,0,0,["k",function(b,c,d){return A9S(this,b,c,d);}],ABR,0,Cm,[],4,0,0,["k",function(b,c,d){return A7i(this,b,c,d);},"b4",function(b){return A6L(this,b);}],AAt,0,Cm,[],0,0,0,["k",function(b,c,d){return A4e(this,b,c,d);},"b4",function(b){return A4k(this,
b);}],AJv,0,Cm,[],0,0,0,["k",function(b,c,d){return AXg(this,b,c,d);},"b4",function(b){return A2B(this,b);}],SM,0,Cm,[],4,0,0,["k",function(b,c,d){return A83(this,b,c,d);},"b4",function(b){return A4L(this,b);}],AQ_,0,Cm,[],0,0,0,["k",function(b,c,d){return A8x(this,b,c,d);},"b4",function(b){return A2Z(this,b);}],AIU,0,Cm,[],0,0,0,["k",function(b,c,d){return A4G(this,b,c,d);},"b4",function(b){return AWq(this,b);}],AGl,0,CD,[],0,0,0,["k",function(b,c,d){return A2j(this,b,c,d);},"cb",function(b){A4p(this,b);},
"oF",function(){return A8k(this);},"b4",function(b){return A4n(this,b);}],ZO,0,CD,[],4,0,0,["k",function(b,c,d){return A8s(this,b,c,d);},"cb",function(b){A9z(this,b);},"oF",function(){return ASM(this);},"b4",function(b){return A2q(this,b);}],AQO,0,Cm,[],4,0,0,["k",function(b,c,d){return AXK(this,b,c,d);},"b4",function(b){return A5V(this,b);}],AN$,0,Cm,[],0,0,0,["k",function(b,c,d){return AY_(this,b,c,d);},"b4",function(b){return A5R(this,b);}],AIg,0,Cm,[],0,0,0,["k",function(b,c,d){return A6G(this,b,c,d);},
"b4",function(b){return AUY(this,b);}],IU,0,CD,[],0,0,0,["k",function(b,c,d){return ATA(this,b,c,d);},"cb",function(b){A88(this,b);},"b4",function(b){return A0g(this,b);}],AQZ,0,IU,[],0,0,0,["k",function(b,c,d){return AU5(this,b,c,d);},"eI",function(b,c,d){return A1r(this,b,c,d);},"eW",function(b,c,d,e){return ATs(this,b,c,d,e);},"d3",function(b){return A7M(this,b);}],AMi,0,IU,[],0,0,0,["k",function(b,c,d){return AYb(this,b,c,d);}],AMW,0,CI,[],0,0,0,["dn",function(b,c){return AVj(this,b,c);},"eI",function(b,
c,d){return A4d(this,b,c,d);},"eW",function(b,c,d,e){return A52(this,b,c,d,e);},"d3",function(b){return AWS(this,b);}],XM,0,CI,[],0,0,0,["dn",function(b,c){return AYe(this,b,c);}],O2,0,CI,[],0,0,0,["dn",function(b,c){return A9L(this,b,c);}],Ia,0,D,[],4,0,0,0,By,0,D,[],1,0,0,0,Tf,0,CI,[],0,0,0,["dn",function(b,c){return A0z(this,b,c);}],NQ,0,CD,[],0,0,0,["cb",function(b){A8K(this,b);},"k",function(b,c,d){return A4M(this,b,c,d);},"eI",function(b,c,d){return AWR(this,b,c,d);},"eW",function(b,c,d,e){return A5a(this,
b,c,d,e);},"d3",function(b){return ATn(this,b);},"b4",function(b){return A08(this,b);}],NW,0,CD,[],0,0,0,["cb",function(b){A4x(this,b);},"k",function(b,c,d){return AS3(this,b,c,d);},"eI",function(b,c,d){return A8V(this,b,c,d);},"eW",function(b,c,d,e){return A0x(this,b,c,d,e);},"d3",function(b){return AVk(this,b);},"b4",function(b){return A8X(this,b);}],E0,0,CI,[],0,0,0,["dn",function(b,c){return A9q(this,b,c);},"eI",function(b,c,d){return A78(this,b,c,d);},"eW",function(b,c,d,e){return AUu(this,b,c,d,e);},"d3",
function(b){return A9h(this,b);}],WD,0,Gn,[],4,0,0,["ou",function(b){return AUD(this,b);},"Ee",function(b,c){return A0d(this,b,c);}],WE,0,Gn,[],4,0,0,["ou",function(b){return A9U(this,b);},"Ee",function(b,c){return A15(this,b,c);}],AES,0,D,[],0,0,0,0,YC,0,D,[],0,0,0,0,NO,0,By,[],0,0,0,["bW",function(){return AMr(this);}],Ne,0,By,[],0,0,0,["bW",function(){return ANR(this);}],AEK,0,By,[],0,0,0,["bW",function(){return A9B(this);}],AFn,0,By,[],0,0,0,["bW",function(){return A0$(this);}],AFw,0,By,[],0,0,0,["bW",function()
{return AVM(this);}],NK,0,By,[],0,0,0,["bW",function(){return ZU(this);}],Mc,0,NK,[],0,0,0,["bW",function(){return AA2(this);}],AHW,0,By,[],0,0,0,["bW",function(){return A6j(this);}],OG,0,Mc,[],0,0,0,["bW",function(){return AIa(this);}],AMT,0,OG,[],0,0,0,["bW",function(){return AYC(this);}],ACO,0,By,[],0,0,0,["bW",function(){return A43(this);}]]);
$rt_metadata([AAo,0,By,[],0,0,0,["bW",function(){return AYt(this);}],AKd,0,By,[],0,0,0,["bW",function(){return A16(this);}],AQf,0,By,[],0,0,0,["bW",function(){return A8i(this);}],AH4,0,By,[],0,0,0,["bW",function(){return A26(this);}],APt,0,By,[],0,0,0,["bW",function(){return AW2(this);}],AEs,0,By,[],0,0,0,["bW",function(){return A0i(this);}],AF2,0,By,[],0,0,0,["bW",function(){return A41(this);}],Y5,0,By,[],0,0,0,["bW",function(){return AVu(this);}],AIB,0,By,[],0,0,0,["bW",function(){return A$$(this);}],API,
0,By,[],0,0,0,["bW",function(){return A21(this);}],AFa,0,By,[],0,0,0,["bW",function(){return AXN(this);}],ALh,0,By,[],0,0,0,["bW",function(){return AVA(this);}],AC0,0,By,[],0,0,0,["bW",function(){return A54(this);}],AHd,0,By,[],0,0,0,["bW",function(){return A68(this);}],APW,0,By,[],0,0,0,["bW",function(){return A1m(this);}],ABB,0,By,[],0,0,0,["bW",function(){return AZO(this);}],AAO,0,By,[],0,0,0,["bW",function(){return AYU(this);}],AH2,0,By,[],0,0,0,["bW",function(){return A9x(this);}],Ld,0,By,[],0,0,0,["bW",
function(){return ACQ(this);}],AQJ,0,Ld,[],0,0,0,["bW",function(){return AYL(this);}],AMZ,0,NO,[],0,0,0,["bW",function(){return A39(this);}],AAH,0,Ne,[],0,0,0,["bW",function(){return AWE(this);}],AKp,0,By,[],0,0,0,["bW",function(){return AX0(this);}],AKU,0,By,[],0,0,0,["bW",function(){return A1T(this);}],AMD,0,By,[],0,0,0,["bW",function(){return A5O(this);}],AMU,0,By,[],0,0,0,["bW",function(){return AST(this);}],AKy,0,D,[],4,0,0,0,Zy,0,D,[],4,3,0,0,Ty,0,D,[],0,3,0,0,R1,0,D,[],0,3,0,0,AMb,0,D,[],4,3,0,0,Wr,0,
Ew,[],0,3,0,["lr",function(){A3J(this);},"s2",function(b){AOn(this,b);}],Xq,0,Ew,[],0,3,0,["pt",function(){Zc(this);},"tp",function(b){A6I(this,b);},"lr",function(){A13(this);},"s2",function(b){AKs(this,b);}],AMI,0,Ew,[],0,3,0,["lr",function(){A96(this);},"s2",function(b){ANV(this,b);}],CW,"EnumArt",12,EZ,[],12,3,0,0,PP,0,Fd,[],0,0,0,0,Va,0,CS,[],0,3,0,["hV",function(){AGq(this);},"iE",function(b){AQv(this,b);},"hP",function(b,c,d){YY(this,b,c,d);}],IM,"MinecraftError",12,Fi,[],0,3,0,0,UU,0,D,[],0,3,0,0,Sv,
"AbstractCharClass$1",5,Bm,[],0,0,0,["X",function(b){return AVQ(this,b);}],Su,"AbstractCharClass$2",5,Bm,[],0,0,0,["X",function(b){return A3r(this,b);}],Px,"CharClass$18",5,Bm,[],0,0,0,["X",function(b){return AXX(this,b);},"gj",function(){return A57(this);}],T3,0,Bm,[],0,0,0,["X",function(b){return A9s(this,b);}],T1,0,Bm,[],0,0,0,["X",function(b){return A0y(this,b);}],T2,0,Bm,[],0,0,0,["X",function(b){return A7r(this,b);}],T6,0,Bm,[],0,0,0,["X",function(b){return A5f(this,b);}],T7,0,Bm,[],0,0,0,["X",function(b)
{return ASN(this,b);}],T4,0,Bm,[],0,0,0,["X",function(b){return AWy(this,b);}],T5,0,Bm,[],0,0,0,["X",function(b){return AYg(this,b);}],T9,0,Bm,[],0,0,0,["X",function(b){return A1t(this,b);}]]);
$rt_metadata([T$,0,Bm,[],0,0,0,["X",function(b){return A4W(this,b);}],Pw,0,Bm,[],0,0,0,["X",function(b){return A_W(this,b);}],PK,0,Bm,[],0,0,0,["X",function(b){return AWD(this,b);}],Pu,0,Bm,[],0,0,0,["X",function(b){return AU7(this,b);}],Pv,0,Bm,[],0,0,0,["X",function(b){return A5U(this,b);}],PA,0,Bm,[],0,0,0,["X",function(b){return AXi(this,b);}],Pt,0,Bm,[],0,0,0,["X",function(b){return A$p(this,b);}],Py,0,Bm,[],0,0,0,["X",function(b){return A4i(this,b);}],Pz,0,Bm,[],0,0,0,["X",function(b){return AZK(this,
b);}],OV,0,IC,[],0,0,0,["eI",function(b,c,d){return AV9(this,b,c,d);},"eW",function(b,c,d,e){return A_L(this,b,c,d,e);},"lx",function(){return AUV(this);}],VN,0,IP,[H7],0,0,0,["mQ",function(){return Lo(this);}],Ng,0,Fc,[DM],0,3,0,0,Mt,0,D,[],3,3,0,0,VF,0,D,[Mt],4,3,0,0,Ur,0,D,[Jf],3,3,0,0,Sk,0,D,[Ur],3,3,0,0,S8,0,Fd,[Sk],0,3,0,0,SU,0,D,[LX],3,3,0,0,OX,0,D,[SU],3,3,0,0,AJ3,0,FY,[EV,Db,OX],0,3,0,0,QZ,0,D,[FB],0,0,0,0,VP,"AbstractCharClass$LazyJavaLowerCase$1",5,Bm,[],0,0,0,["X",function(b){return A1A(this,b);
}],Tk,"AbstractCharClass$LazyJavaUpperCase$1",5,Bm,[],0,0,0,["X",function(b){return A37(this,b);}],QP,"AbstractCharClass$LazyJavaWhitespace$1",5,Bm,[],0,0,0,["X",function(b){return ATC(this,b);}],QO,"AbstractCharClass$LazyJavaMirrored$1",5,Bm,[],0,0,0,["X",function(b){return A5N(this,b);}],SD,"AbstractCharClass$LazyJavaDefined$1",5,Bm,[],0,0,0,["X",function(b){return AW9(this,b);}],Uh,"AbstractCharClass$LazyJavaDigit$1",5,Bm,[],0,0,0,["X",function(b){return A$T(this,b);}],Pk,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",
5,Bm,[],0,0,0,["X",function(b){return AZj(this,b);}],U_,"AbstractCharClass$LazyJavaISOControl$1",5,Bm,[],0,0,0,["X",function(b){return A0m(this,b);}],Th,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",5,Bm,[],0,0,0,["X",function(b){return A_A(this,b);}],Tj,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",5,Bm,[],0,0,0,["X",function(b){return AVm(this,b);}],Pb,"AbstractCharClass$LazyJavaLetter$1",5,Bm,[],0,0,0,["X",function(b){return A1N(this,b);}],Ux,"AbstractCharClass$LazyJavaLetterOrDigit$1",5,Bm,[],0,0,
0,["X",function(b){return A7E(this,b);}],UA,"AbstractCharClass$LazyJavaSpaceChar$1",5,Bm,[],0,0,0,["X",function(b){return A87(this,b);}],V7,"AbstractCharClass$LazyJavaTitleCase$1",5,Bm,[],0,0,0,["X",function(b){return A$I(this,b);}],VG,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",5,Bm,[],0,0,0,["X",function(b){return A19(this,b);}],OP,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",5,Bm,[],0,0,0,["X",function(b){return AVd(this,b);}],ME,"UnicodeCategory",5,Bm,[],0,0,0,["X",function(b){return AZk(this,
b);}],Vt,"UnicodeCategoryScope",5,ME,[],0,0,0,["X",function(b){return A97(this,b);}],Nn,0,D,[],0,3,0,0,J0,0,D,[DM],0,3,0,["en",function(b){return A$C(this,b);},"fk",function(){return A7P(this);},"lP",function(b){return TP(this,b);}],Lc,0,D,[],3,3,0,0,V5,0,D,[Lc],0,3,0,0,Qj,0,D,[],3,3,0,0,Xs,0,D,[Qj],0,3,0,0,Sz,0,D,[Lc],0,3,0,0,WB,0,D,[Mt],0,0,0,0,VU,0,D,[],0,3,0,0,Sb,0,D,[],3,3,0,0,AF9,0,Ge,[Sb],0,3,0,0]);
$rt_metadata([AF3,0,D,[],0,3,0,0,N3,0,D,[],4,3,0,0,HQ,0,D,[],1,3,0,0,AMV,0,HQ,[],0,3,0,0,Tt,0,D,[GT],0,3,0,["g$",function(){AGs(this);}],Tc,0,D,[GT],0,3,0,["g$",function(){AFE(this);}],UJ,0,D,[GT],0,3,0,["g$",function(){AOX(this);}],ACU,0,D,[],0,3,0,0,PD,0,HQ,[],0,3,0,0,Ud,0,D,[],0,3,0,0,Vy,0,Fc,[DM],0,3,0,0,Rs,0,D,[DH],0,0,0,["gw",function(){return A7o(this);}],Rt,0,D,[DH],0,0,0,["gw",function(){return A1M(this);}],Er,0,D,[],1,3,0,0,Rk,0,Er,[],0,3,0,0,TK,0,D,[DH],0,0,0,["gw",function(){return A4w(this);}],TH,
0,D,[DH],0,0,0,["gw",function(){return AYp(this);}],Rr,0,D,[DH],0,0,0,["gw",function(){return A8U(this);}],Ru,0,D,[DH],0,0,0,["gw",function(){return A7h(this);}],E4,0,EZ,[],12,3,0,0,Rp,0,D,[DH],0,0,0,["gw",function(){return A5X(this);}],Rq,0,D,[DH],0,0,0,["gw",function(){return A3k(this);}],SS,0,CS,[],0,3,0,["hV",function(){AD8(this);},"pt",function(){ANL(this);},"rA",function(){AYy(this);},"iE",function(b){AHl(this,b);},"o_",function(b,c){AC2(this,b,c);},"hP",function(b,c,d){ABx(this,b,c,d);}],IL,0,EZ,[],12,
3,0,0,MJ,0,D,[J5,Db],0,3,0,0,Le,0,MJ,[],0,0,0,0,AM3,0,Ge,[],0,3,0,["lv",function(){AYz(this);},"gv",function(b,c,d){AX6(this,b,c,d);},"tQ",function(){A4a(this);},"nL",function(b){AXq(this,b);}],WY,0,D,[],0,3,0,0,Oz,0,D,[],0,3,0,0,Oh,"ArrayIndexOutOfBoundsException",9,BM,[],0,3,0,0,ARo,0,Er,[],0,3,0,0,Cf,0,Er,[],0,3,0,0,BQ,0,Er,[],0,3,0,0,Cl,0,Er,[],0,3,0,0,SH,"EntityBubbleFX",12,C1,[],0,3,0,["eo",function(){Ze(this);}],AFs,"EntitySmokeFX",12,C1,[],0,3,0,["kQ",function(b,c,d,e,f,g,h){AJ_(this,b,c,d,e,f,g,h);
},"eo",function(){ALY(this);}],Q8,"EntityExplodeFX",12,C1,[],0,3,0,["kQ",function(b,c,d,e,f,g,h){ASb(this,b,c,d,e,f,g,h);},"eo",function(){AEW(this);}],O8,"EntityFlameFX",12,C1,[],0,3,0,["kQ",function(b,c,d,e,f,g,h){AQM(this,b,c,d,e,f,g,h);},"vi",function(b){return ASy(this,b);},"eo",function(){AAX(this);}],AA8,"EntityLavaFX",12,C1,[],0,3,0,["vi",function(b){return AKa(this,b);},"kQ",function(b,c,d,e,f,g,h){AGX(this,b,c,d,e,f,g,h);},"eo",function(){ALn(this);}],ARG,"EntitySplashFX",12,JR,[],0,3,0,0,AIu,0,D,
[],4,3,0,0,H$,0,D,[],0,0,0,0,Vp,0,D,[],0,3,0,0,ACg,0,D,[],0,3,0,0,U$,"EntityPickupFX",12,C1,[],0,3,0,["kQ",function(b,c,d,e,f,g,h){AMm(this,b,c,d,e,f,g,h);},"eo",function(){AAQ(this);},"xx",function(){return AUA(this);}],Za,0,D,[],0,3,0,0,HV,0,D,[],0,3,0,["en",function(b){return A3V(this,b);},"fk",function(){return AVq(this);}],AJn,0,D,[],0,0,0,0]);
function $rt_array(cls,data){this.cp=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"/level.dat_new","/level.dat_old","Failed to add entity ","All: ","More than "," updates, aborting lighting updates","DOHASDOSHIH!","TickNextTick list out of synch","%%","!!","/char.png","0123456789abcdef","C: ",". F: ",", O: ",", E: ","E: ",". B: ",", I: ","/terrain/sun.png","/terrain/moon.png","/clouds.png","Pre-beta!","As seen on TV!","Awesome!","100% pure!","May contain nuts!","Better than Prey!","More polygons!","Sexy!","Limited edition!","Flashing letters!","Made by Notch!","Coming soon!","Best in class!",
"When it\'s finished!","Absolutely dragon free!","Excitement!","More than 5000 sold!","One of a kind!","700+ hits on YouTube!","Indev!","Spiders everywhere!","Check it out!","Holy cow, man!","It\'s a game!","Made in Sweden!","Uses LWJGL!","Reticulating splines!","Minecraft!","Yaaay!","Alpha version!","Singleplayer!","Keyboard compatible!","Undocumented!","Ingots!","Exploding creepers!","That\'s not a moon!","l33t!","Create!","Survive!","Dungeon!","Exclusive!","The bee\'s knees!","Down with O.P.P.!","Closed source!",
"Classy!","Wow!","Not on steam!","9.95 euro!","Half price!","Oh man!","Awesome community!","Pixels!","Teetsuuuuoooo!","Kaaneeeedaaaa!","Now with difficulty!","Enhanced!","90% bug free!","Pretty!","12 herbs and spices!","Fat free!","Absolutely no memes!","Free dental!","Ask your doctor!","Minors welcome!","Cloud computing!","Legal in Finland!","Hard to label!","Technically good!","Bringing home the bacon!","Indie!","GOTY!","Ceci n\'est pas une title screen!","Euclidian!","Now in 3D!","Inspirational!","Herregud!",
"Complex cellular automata!","Yes, sir!","Played by cowboys!","OpenGL 1.1!","Thousands of colors!","Try it!","Age of Wonders is better!","Try the mushroom stew!","Sensational!","Hot tamale, hot hot tamale!","Play him off, keyboard cat!","Guaranteed!","Macroscopic!","Bring it on!","Random splash!","Call your mother!","Monster infighting!","Loved by millions!","Ultimate edition!","Freaky!","You\'ve got a brand new key!","Water proof!","Uninflammable!","Whoa, dude!","All inclusive!","Tell your friends!","NP is not in P!",
"Notch <3 Ez!","Music by C418!","Single player","Multi player","Play tutorial level","Options...","/gui/logo.png","Copyright Mojang Specifications. Do not distribute.","Free memory: ","% of ","MB","Allocated memory: ","% (","MB)","/particles.png","/gui/gui.png","/gui/icons.png","Minecraft Infdev","Minecraft Infdev (","Used memory: ","MB) of ","Notch","humanoid","http://www.minecraft.net/skin/",".png","Health","HurtTime","DeathTime","AttackTime","Score","Edit sign message:","mousedown","wheel","Slot","Crafting",
"/gui/inventory.png","/glsl/core.glsl","\n#define CC_a_color\n","#define CC_a_texture0\n","#define CC_lighting\n","#define CC_fog\n","#define CC_alphatest\n","#define CC_unit0\n","\n#define CC_VERT\n","\n\n","\n[/glsl/core.glsl][CC_VERT] ","broken shader file","\n#define CC_FRAG\n","\n[/glsl/core.glsl][CC_FRAG] ","a_position","a_texture0","a_color","\n[LINKER] ","matrix_m","matrix_p","matrix_t","colorUniform","normalUniform","light0Pos","light1Pos","fogColor","fogMode","fogStart","fogEnd","fogDensity","fogPremultiply",
"alphaTestF","tex0","texCoordV0","id","Count","Damage","array size does not equal image size","I Understand!","Respawn","Title menu","Game over!","Score: &e","Save and quit to title..","Back to game","Saving level..","Game menu","/armor/","_","chain","iron","diamond","gold","/item/sign.png","> "," <","Pig","/mob/spider_eyes.png","/mob/saddle.png","/mob/sheep_fur.png","/art/kz.png","random.drr","random.pop","/item/arrows.png","/item/cart.png","Wrong location! ","There\'s no such entity to remove: ","Attempted to place a tile entity where there was no entity tile!",
"Malformed input of length ","Unmappable characters of length ","Options","Controls...","Done","Controls","Select world","World","World ","- empty -"," ("," MB)","Delete world...","Cancel","Delete world","\'","\' will be lost forever!","Are you sure you want to delete this world?","Deleting World!","Please Wait...","(please wait)","%i","###","X#X","#X#","# #","##"," X ","#"," # ","X X","A "," B","#  ","## "," recipes","Is","In",", ","XXX","XX","X#"," #"," #X","# X","{",",","}","Lower","Upper","ASCII","Alpha",
"Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","s","d","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks",
"Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement",
"CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B",
"MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA",
"YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn",
"Me","Mc","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","/gui/furnace.png","/gui/crafting.png","/gui/container.png","Kebab","Aztec","Alban","Aztec2","Bomb","Plant","Wasteland","Pool","Courbet","Sea","Sunset","Wanderer","Match","Bust","Stage","Void","SkullAndRoses","Fighters","Pointer","Yes","Arrow","Item","Painting","Mob","Monster","Creeper","Skeleton","Spider","Giant","Zombie","Sheep","PrimedTnt","FallingSand","Minecart","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
"xPos","zPos","The chunk file \'","\' was supposed to be at [","], but the file contained a chunk from [","]. It\'s data will be moved to file \'","\', and a new empty chunk will be created for file \'","\' for [","Corrupt chunk \'","\' was found at: [","The file will be deleted","Failed to serialize chunk at [","] to byte array","LastUpdate","Blocks","SkyLight","BlockLight","HeightMap","TerrainPopulated","Light too large, skipping!","UTF Error","FILE","DIRECTORY","FALSE","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_\'*!\"#%/()=+?[]{}<>",
"Sky","Block","buffer is null","Length out of bounds: ","Offset out of bounds: ","random.explode","OW KNOWS!"]);
B2.prototype.toString=function(){return $rt_ustr(this);};
B2.prototype.valueOf=B2.prototype.toString;D.prototype.toString=function(){return $rt_ustr(AUr(this));};
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
=$rt_mainStarter(AQ9);
(function(){var c;c=YQ.prototype;c.dispatchEvent=c.My;c.addEventListener=c.Yi;c.removeEventListener=c.a0l;c.getLength=c.Vd;c.get=c.Sl;c.addEventListener=c.TB;c.removeEventListener=c.Ok;c=Xb.prototype;c.handleEvent=c.gQ;c=Xh.prototype;c.handleEvent=c.gQ;c=Xi.prototype;c.handleEvent=c.gQ;c=Xf.prototype;c.handleEvent=c.gQ;c=Xg.prototype;c.handleEvent=c.gQ;c=Xd.prototype;c.handleEvent=c.gQ;c=Xe.prototype;c.handleEvent=c.gQ;c=Xc.prototype;c.handleEvent=c.gQ;c=QD.prototype;c.handleEvent=c.gQ;c=QC.prototype;c.handleEvent
=c.gQ;c=Xa.prototype;c.stateChanged=c.a02;c=TO.prototype;c.handleEvent=c.gw;c=TN.prototype;c.handleEvent=c.gw;c=TM.prototype;c.handleEvent=c.gw;c=TL.prototype;c.handleEvent=c.gQ;c=AA4.prototype;c.getLength=c.ZA;c.get=c.Q1;c=QG.prototype;c.handleEvent=c.gQ;c=QF.prototype;c.handleEvent=c.gQ;c=QE.prototype;c.onTimer=c.Gj;c=Tz.prototype;c.onTimer=c.Gj;c=TG.prototype;c.handleEvent=c.gw;c=TF.prototype;c.handleEvent=c.gw;c=Rs.prototype;c.handleEvent=c.gw;c=Rt.prototype;c.handleEvent=c.gw;c=TK.prototype;c.handleEvent
=c.gw;c=TH.prototype;c.handleEvent=c.gw;c=Rr.prototype;c.handleEvent=c.gw;c=Ru.prototype;c.handleEvent=c.gw;c=Rp.prototype;c.handleEvent=c.gw;c=Rq.prototype;c.handleEvent=c.gw;})();
})();

//# sourceMappingURL=app.js.map