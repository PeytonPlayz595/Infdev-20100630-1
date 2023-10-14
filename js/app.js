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
function $rt_cls(cls){return LY(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return AH$(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bw.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return D; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(BcZ());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return ASH();}
function $rt_setThread(t){return Fv(t);}
function $rt_createException(message){return Z0(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var M=$rt_throw;var R=$rt_compare;var Bc0=$rt_nullCheck;var F=$rt_cls;var J=$rt_createArray;var Sl=$rt_isInstance;var C3=$rt_nativeThread;var C=$rt_suspending;var Fd=$rt_resuming;var E$=$rt_invalidPointer;var B=$rt_s;var Bt=$rt_eraseClinit;var Bj=$rt_imul;var Bh=$rt_wrapException;
function D(){this.cp=null;this.$id$=0;}
function Bc1(){var a=new D();WG(a);return a;}
function BaZ(b){var c;if(b.cp===null)Vw(b);if(b.cp.eh===null)b.cp.eh=Bc2;else if(b.cp.eh!==Bc2){c=new D3;Bl(c,B(0));M(c);}b=b.cp;b.fh=b.fh+1|0;}
function BcQ(b){var c,d;if(!HJ(b)&&b.cp.eh===Bc2){c=b.cp;d=c.fh-1|0;c.fh=d;if(!d)b.cp.eh=null;HJ(b);return;}b=new Kk;O(b);M(b);}
function AD1(b){if(b.cp===null)Vw(b);if(b.cp.eh===null)b.cp.eh=Bc2;if(b.cp.eh!==Bc2)AXl(b,1);else{b=b.cp;b.fh=b.fh+1|0;}}
function Vw(b){b.cp=Bat();}
function AXl(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Go=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaD(callback);return thread.suspend(function(){try{Bca(b,c,callback);}catch($e){callback.IV($rt_exception($e));}});}
function Bca(b,c,d){var e,f,g;e=Bc2;if(b.cp===null){Vw(b);Fv(e);b=b.cp;b.fh=b.fh+c|0;CM(d,null);return;}if(b.cp.eh===null){b.cp.eh=e;Fv(e);b=b.cp;b.fh=b.fh+c|0;CM(d,null);return;}f=b.cp;if(f.hl===null)f.hl=AXn();f=f.hl;g=new Q_;g.zE=e;g.zF=b;g.zC=c;g.zD=d;d=g;f.push(d);}
function NU(b){var c;if(!HJ(b)&&b.cp.eh===Bc2){c=b.cp;c.fh=c.fh-1|0;if(c.fh<=0){c.eh=null;if(c.hl!==null&&!JI(c.hl)){c=new SQ;c.Df=b;QZ(c);}else HJ(b);}return;}b=new Kk;O(b);M(b);}
function HJ(a){var b;b=a.cp;if(b===null)return 1;a:{if(b.eh===null&&!(b.hl!==null&&!JI(b.hl))){if(b.rj===null)break a;if(JI(b.rj))break a;}return 0;}a.cp=null;return 1;}
function WG(a){return;}
function Dl(a){return LY(a.constructor);}
function A4V(a){return MM(a);}
function Q3(a,b){return a!==b?0:1;}
function AUk(a){var b,c,d,e,f,g,h,i;b=new S;V(b);b=H(H(b,ID(Dl(a))),B(1));c=MM(a);if(!c)d=B(2);else{e=(((32-Tx(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=I2(c>>>e&15,16);e=e-4|0;h=i;}d=AH$(f);}return T(H(b,d));}
function MM(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AXK(a){var b,c,d;if(!Sl(a,ET)&&a.constructor.$meta.item===null){b=new Sc;O(b);M(b);}b=AS1(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Xe(a){var b,c;if(!(a.cp!==null&&a.cp.eh===Bc2?1:0)){b=new Kk;O(b);M(b);}b=a.cp.rj;if(b===null)return;while(!JI(b)){c=AOS(b);if(!c.a0l())QZ(c);}a.cp.rj=null;}
function Jy(){D.call(this);}
var Bc3=null;var Bc4=null;var Bc5=null;function Bc6(){var a=new Jy();AQX(a);return a;}
function AQX(a){return;}
function AQ2(b){var c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AKb();AGj();AQi();ZY();AP2();AIR();ACM();ASl();AC6();AKO();ARI();Y6();AHB();Zc();AHf();ALU();AFo();AFq();AOH();AQa();AH1();AOp();ABF();AFz();AEr();AHQ();XG();ADC();Z$();AL3();AJ9();AOP();AG5();ASf();AOc();ALJ();AAd();AKs();AO_();AEk();AMJ();AK_();AMH();AIG();AF8();AHv();AK2();AAo();Z1();AP8();AJS();AAR();AIi();ALY();ABk();AM_();AHL();AFt();c
=window.minecraftOpts;if(c===null)d=null;else{d=J(B4,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));Bc3=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){}else if($$je instanceof D9){c=$$je;break a;}else{throw $$e;}}return;}g=A88();h=new Lu;Wd(h,g);h.yf=0;h.mD=g;OC(c,h);return;case 1:b:{c:{d:{try{AAp(c,g);if(C()){break _;}break d;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){}else if($$je instanceof D9)
{c=$$je;break c;}else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Bh($$e);if($$je instanceof D9){c=$$je;}else{throw $$e;}}}g=A88();h=new Lu;Wd(h,g);h.yf=0;h.mD=g;OC(c,h);return;}c=new Io;i=Lr();j=MD();g=new UQ;g.DT=0;g.cX=c;g.vZ=(-1);g.v1=(-1);g.v0=(-1);g.hq=0.0;g.mQ=0.0;g.ol=0.0;g.nf=0;k=new UX;b=J(FS,4);d=b.data;d[0]=F(I7);d[1]=F(Jm);d[2]=F(JW);d[3]=F(Km);RH(k,100,F(DQ),b);k.Gw=g;g.Bd=k;h=new I_;b=J(FS,2);d=b.data;d[0]=F(KG);d[1]=F(IC);RH(h,20,F(GC),b);g.Bz=h;c.cB=g;g=new SC;g.CV=1.0;g.lM=0.0;g.nF=1.0;g.c8
=20.0;g.sR=B$();g.rU=Long_div(EH(),Long_fromInt(1000000));c.bf=g;c.k2=null;c.bs=0;c.D=null;g=new R2;g.n3=B(3);g.l_=B(3);g.kP=B$();g.lP=0;g.fH=c;c.is=g;c.eV=BbN(c);c.bN=0;c.c$=0;c.Hf=null;c.FY=0;c.h8=0;c.Gt=Xs(0.0);c.cf=null;c.C9=Bam();c.BF=BaV();c.gS=1;c.lD=B(3);c.gT=Long_fromInt(-1);c.bp=0;c.co=0;c.cU=0;c.dC=B$();g=new VW;TQ(g,B(4));g.yl=c;g.Ee=1;Tk(g);c.cd=i;c.bA=j;Bc7=c;Bc4=c;c=Bc4;g=new Ml;Bbf();g.ok=B(5);g.F2=B(6);c.k2=g;Bc4.k2.Gy=B(7);Bc5=A_3(Bc4,B(8));Tk(Bc5);return;default:E$();}}C3().s(b,c,d,e,f,g,
h,i,j,k,$p);}
function AKb(){Bc3=null;Bc4=null;Bc5=null;}
function MS(){}
function FS(){var a=this;D.call(a);a.um=null;a.fY=null;a.mm=null;}
var Bc8=0;function LY(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new FS;c.fY=b;d=c;b.classObject=d;}return c;}
function A33(a){return a.fY;}
function Ux(a,b){var c;b=b;c=a.fY;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&VV(b.constructor,c)?1:0;}
function P6(a,b){return VV(b.fY,a.fY);}
function ID(a){if(a.um===null)a.um=$rt_str(a.fY.$meta.name);return a.um;}
function F1(a){return a.fY.$meta.primitive?1:0;}
function AGX(a){return AR0(a.fY)===null?0:1;}
function Kx(a){return LY(AR0(a.fY));}
function A6W(){I7.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jm.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];JW.$meta.methods
=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType
:$rt_voidcls(),callable:null},{name:"setCreeperFlashTime",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_floatcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Km.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntity",modifiers
:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];KG.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType
:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel
:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null}];IC.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers
:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Ju],returnType:$rt_booleancls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jh.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null}];Te.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers
:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable
:null},{name:"writeToNBT",modifiers:4,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null}];WV.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes
:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers
:4,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getCookProgressScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getBurnTimeRemainingScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"isBurning",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"canSmelt",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"smeltItem",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSmeltingResult",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getItemBurnTime",modifiers:0,accessLevel
:1,parameterTypes:[Cd],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Ny.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"anyPlayerInRange",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name
:"updateDelay",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null}];DQ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable
:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null}];EQ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"getTexture",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"getEyeHeight",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_floatcls(),callable:null},{name:"onEntityUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"spawnExplosionParticle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updateRidden",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"setSize",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable
:null},{name:"heal",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable
:null},{name:"knockBack",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"onDeath",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"fall",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"moveEntityWithHeading",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"isOnLadder",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"isEntityAlive",modifiers:0,accessLevel:3,parameterTypes:[],returnType:
$rt_booleancls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"jump",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onEntityDeath",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes
:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null},{name:"kill",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];K_.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null}];IG.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"setDirection",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"getArtSize",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_voidcls(),callable:null},{name:"onValidSurface",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers
:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null}];Js.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,EQ],returnType:$rt_voidcls(),callable:null},{name:"setArrowHeading",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers:0,accessLevel:3,parameterTypes:[Ju],returnType:$rt_voidcls(),callable:null}];E9.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_doublecls(),$rt_doublecls(),
$rt_doublecls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"handleWaterMovement",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"pushOutOfBlocks",modifiers:0,accessLevel:1,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable
:null},{name:"dealFireDamage",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers
:0,accessLevel:3,parameterTypes:[Ju],returnType:$rt_voidcls(),callable:null}];Ms.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:null},{name:"createExplosion",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null}];JK.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[F0,$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes
:[APN],returnType:$rt_voidcls(),callable:null},{name:"getWorld",modifiers:0,accessLevel:3,parameterTypes:[],returnType:F0,callable:null}];Gi.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0],returnType:$rt_voidcls(),callable:null},{name:"getCollisionBox",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:I9,callable:null},{name:"getBoundingBox",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I9,callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_booleancls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F0,$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"getYOffset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_doublecls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable
:null},{name:"setEntityDead",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getPosOffset",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kj,callable:null},{name:"getPos",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kj,callable:null},{name:
"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APN],returnType:$rt_voidcls(),callable:null},{name:"applyEntityCollision",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType
:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Ju],returnType:$rt_booleancls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];}
function ASn(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!F1(a)&&!AGX(a)){if(a.mm===null){if(!Bc8){Bc8=1;A6W();}b=a.fY.$meta.methods;a.mm=J(Kr,b.length);c=0;d=0;while(d<b.length){e=b[d];if(DC($rt_str(e.name),B(9))){f=e.parameterTypes;g=J(FS,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=LY(f[i]);i=i+1|0;}h=a.mm.data;j=c+1|0;k=new Kr;l=$rt_str(e.name);m=e.modifiers;i=e.accessLevel;f=JC(e.callable,"call");k.zS=a;k.HY=l;k.ve=m;k.Dk=i;k.nh=g;k.vL=f;h[c]=k;c=j;}d=d+1|0;}a.mm=Nr(a.mm,c);}return a.mm.oX();}return J(Kr,0);}
function WA(a,b){var c,d,e,f,g,h,i,j,k,l;c=ASn(a).data;d=c.length;e=0;while(true){if(e>=d){f=new UT;O(f);M(f);}g=c[e];if(!(AD_(g)&1)?0:1){a:{h=ABj(g);if(h===b)i=1;else{if(h!==null&&b!==null){j=h.data;h=b.data;k=j.length;if(k==h.length){i=0;while(i<k){f=j[i];l=h[i];if(!(f===l?1:f!==null?Q3(f,l):l!==null?0:1)){i=0;break a;}i=i+1|0;}i=1;break a;}}i=0;}}if(i)break;}e=e+1|0;}return g;}
function JH(a){return LY(a.fY.$meta.superclass);}
function Zo(a){var b;b=a.fY;if(!Bc9){AWX();Bc9=1;}b=A2p(b);if(b!==null)return b;b=new LZ;O(b);M(b);}
function AJ3(){D.call(this);}
function Bc$(){var a=new AJ3();A65(a);return a;}
function A65(a){return;}
function Cu(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function JC(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function T4(){D.call(this);}
var Bc9=0;function Bc_(){var a=new T4();A_o(a);return a;}
function A_o(a){return;}
function AS1(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function VV(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(VV(d[e],c))return 1;e=e+1|0;}return 0;}
function AWX(){var c='$$constructor$$';B4[c]=X6;D[c]=WG;AMb[c]=A1q;I3[c]=AVv;Fg[c]=AUJ;D9[c]=O;AOR[c]=AWM;IQ[c]=AXH;ALC[c]=A3t;B6[c]=ATi;BE[c]=AZI;S[c]=A_d;HN[c]=V;Jy[c]=AQX;ABg[c]=A2Y;AJ3[c]=A65;T4[c]=A_o;Gp[c]=AHz;Bs[c]=VP;W6[c]=A2i;Xa[c]=AZe;Xb[c]=AXd;W$[c]=A44;W_[c]=A_L;W8[c]=A37;W9[c]=AXs;W7[c]=A22;Qy[c]=A1$;Qx[c]=A31;AED[c]=A2P;B1[c]=A3Q;Lh[c]=A6g;V1[c]=AZi;AFa[c]=AV6;ZE[c]=A24;MA[c]=KF;AAS[c]=A$1;AKz[c]=A1C;AQh[c]=A05;ACb[c]=AVr;NT[c]=AD7;UU[c]=AQr;ADr[c]=A$f;DB[c]=A3b;L5[c]=AZB;AJd[c]=AV7;YU[c]=A0k;Cb[c]
=AT8;AI_[c]=A54;EF[c]=AUI;NC[c]=AIk;AE3[c]=AS_;Xc[c]=A3q;SA[c]=ZM;Uj[c]=A28;MT[c]=OP;AA8[c]=AY3;Jh[c]=AZY;D_[c]=ANu;AHE[c]=A1R;B8[c]=AQj;P4[c]=A82;Ok[c]=AZT;L1[c]=ATj;N7[c]=A7u;AGg[c]=A0c;Sc[c]=A6C;IY[c]=A0V;BO[c]=AUu;FG[c]=AW4;PO[c]=A6I;AMm[c]=ATy;Gd[c]=AHD;Hw[c]=A_m;AOo[c]=A2N;Xt[c]=A8K;Kk[c]=A7f;D3[c]=A9S;ZU[c]=A2B;W0[c]=A1g;G0[c]=AVa;E1[c]=A7P;AR$[c]=AXI;OT[c]=Zb;ANv[c]=A8E;CS[c]=DR;Gh[c]=Ne;JR[c]=A5C;Bu[c]=AO3;ACB[c]=AUj;Et[c]=A41;U1[c]=A99;G_[c]=AZN;Qk[c]=A$w;AKU[c]=A4s;ACj[c]=A3l;AG$[c]=A4n;RD[c]=A0J;AJE[c]
=AWa;Qn[c]=ANL;AAD[c]=ASQ;AIF[c]=A5u;Jn[c]=AYd;FV[c]=A6K;Hc[c]=A5R;Gu[c]=A1D;Mn[c]=A91;AAZ[c]=AWb;AFQ[c]=A87;Te[c]=A16;WV[c]=AU_;KS[c]=A2l;Rx[c]=A6M;WB[c]=AFs;Lz[c]=AHp;O4[c]=ALf;HX[c]=AC9;H0[c]=AGt;JZ[c]=A7K;OM[c]=AH9;L_[c]=AVS;Hs[c]=AAj;Nf[c]=ARZ;Qz[c]=A_f;WH[c]=AVk;WF[c]=A5I;Hm[c]=AQG;Ng[c]=AKj;R8[c]=ASL;R$[c]=A95;R9[c]=A9$;R_[c]=A3F;AA2[c]=ATu;Ny[c]=A7_;ARX[c]=AXk;AQg[c]=A4o;PV[c]=AYb;ACG[c]=A93;ARe[c]=AU9;AB8[c]=AZJ;AIl[c]=AWn;HR[c]=A8a;TJ[c]=AZt;AAr[c]=AZz;Rw[c]=AST;AOU[c]=A7e;AQL[c]=AXq;ARx[c]=A$e;V7[c]
=AUa;ABB[c]=AUl;AH4[c]=AUL;AIy[c]=A47;AEV[c]=A3Z;UT[c]=A6J;Gl[c]=A$c;Vc[c]=AO5;AQE[c]=A3$;APN[c]=A8H;P3[c]=A$4;SI[c]=AYL;LZ[c]=A67;S_[c]=A$D;AMh[c]=AS5;NS[c]=AC_;QW[c]=ALy;ALt[c]=A7l;AAb[c]=A8s;N1[c]=AVL;Mx[c]=A4j;MX[c]=A5Y;Lj[c]=A1H;Oa[c]=AZZ;Ph[c]=AZW;Mq[c]=AZA;MH[c]=A_F;OF[c]=A8k;QS[c]=AG3;ARQ[c]=AXA;XX[c]=A$m;XQ[c]=A2a;AEa[c]=A0B;ARP[c]=A6R;AE9[c]=AU7;AR8[c]=A2R;HU[c]=A$k;K1[c]=AXV;CE[c]=A4x;ZL[c]=A2t;H_[c]=AF6;TO[c]=A_A;WX[c]=A4t;ABK[c]=AVg;AJo[c]=A0E;AQ4[c]=AW1;AGf[c]=A8g;EA[c]=A3M;Wv[c]=A34;Ww[c]=AWI;NJ[c]
=AWT;Na[c]=A0R;AEF[c]=AWq;AFi[c]=AXc;AFr[c]=ATR;NF[c]=AUZ;Ma[c]=AWW;AHP[c]=A7Q;OB[c]=AZP;AMN[c]=A0I;ACJ[c]=A9F;AAh[c]=A$Z;AJ8[c]=AT5;AP_[c]=A3W;AHX[c]=AZ5;APn[c]=ATT;AEn[c]=AYp;AFW[c]=AUX;YY[c]=AUs;AIu[c]=AX7;APC[c]=AYC;AE7[c]=A6o;ALa[c]=ATm;ACV[c]=AUB;AG8[c]=AXP;APQ[c]=A76;ABu[c]=AUv;AAH[c]=A9n;AHV[c]=A6i;Lb[c]=AVA;AQC[c]=A6s;AMT[c]=A1y;AAA[c]=A6S;AKN[c]=A11;AKr[c]=AS4;Zr[c]=A72;AL7[c]=A$K;IK[c]=AT2;S2[c]=AAi;AJW[c]=ATS;Nk[c]=ASk;AFX[c]=A0g;NY[c]=ABm;Py[c]=A_C;Re[c]=A6X;WR[c]=AXX;Oc[c]=AVT;ARh[c]=A0S;AIn[c]
=AWP;Y5[c]=AZ$;}
function A2p(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function AZK(b){return setTimeout(function(){$rt_threadStarter(A3X)(b);},0);}
function A3X(b){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.ks();if(C()){break _;}return;default:E$();}}C3().s(b,$p);}
function QZ(b){AFD(b,0);}
function AFD(b,c){return setTimeout(function(){A3X(b);},c);}
function AP0(b){return String.fromCharCode(b);}
function AR0(b){return b.$meta.item;}
function AXn(){return [];}
function Dc(){}
function DM(){}
function KY(){}
function B4(){var a=this;D.call(a);a.bw=null;a.qp=0;}
var Bda=null;function Bdb(){var a=new B4();X6(a);return a;}
function AH$(a){var b=new B4();To(b,a);return b;}
function Lk(a,b,c){var d=new B4();ASA(d,a,b,c);return d;}
function A23(a,b){var c=new B4();Yu(c,a,b);return c;}
function A$x(a,b,c){var d=new B4();Xz(d,a,b,c);return d;}
function X6(a){a.bw=$rt_createCharArray(0);}
function To(a,b){var c,d;b=b.data;c=b.length;a.bw=$rt_createCharArray(c);d=0;while(d<c){a.bw.data[d]=b[d];d=d+1|0;}}
function ASA(a,b,c,d){var e,f;a.bw=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bw.data[e]=f[e+c|0];e=e+1|0;}}
function Yu(a,b,c){c=AN1(c,AMB(b,0,b.data.length));if(AJA(c)&&!c.bk&&c.cy==c.mH)a.bw=APi(c);else{a.bw=$rt_createCharArray(Ct(c));AEP(c,a.bw);}}
function Xz(a,b,c,d){var e,f,g,h,i,j;a.bw=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bw.data;j=e+1|0;g[e]=i&65535;}else{g=a.bw.data;c=e+1|0;g[e]=IE(i);g=a.bw.data;j=c+1|0;g[c]=Ia(i);}f=f+1|0;c=h;e=j;}if(e<a.bw.data.length)a.bw=O6(a.bw,e);}
function Y(a,b){var c;if(b>=0&&b<a.bw.data.length)return a.bw.data[b];c=new IY;O(c);M(c);}
function Bi(a){return a.bw.data.length;}
function Iy(a){return a.bw.data.length?0:1;}
function ARn(a,b){var c,d,e;if(a===b)return 0;c=CB(Bi(a),Bi(b));d=0;while(true){if(d>=c)return Bi(a)-Bi(b)|0;e=Y(a,d)-Y(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AJB(a,b){var c,d,e;if(a===b)return 0;c=CB(Bi(a),Bi(b));d=0;while(true){if(d>=c)return Bi(a)-Bi(b)|0;e=EU(Y(a,d))-EU(Y(b,d))|0;if(e)break;d=d+1|0;}return e;}
function Wb(a,b,c){var d,e,f;if((c+Bi(b)|0)>Bi(a))return 0;d=0;while(d<Bi(b)){e=Y(b,d);f=c+1|0;if(e!=Y(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Iz(a,b){if(a===b)return 1;return Wb(a,b,0);}
function Hk(a,b,c){var d,e,f,g;d=DE(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bw.data.length)return (-1);if(a.bw.data[d]==e)break;d=d+1|0;}return d;}f=IE(b);g=Ia(b);while(true){if(d>=(a.bw.data.length-1|0))return (-1);if(a.bw.data[d]==f&&a.bw.data[d+1|0]==g)break;d=d+1|0;}return d;}
function UC(a,b){return Hk(a,b,0);}
function Ij(a,b,c){var d,e,f,g,h;d=CB(c,Bi(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bw.data[d]==e)break;d=d+(-1)|0;}return d;}f=IE(b);g=Ia(b);while(true){if(d<1)return (-1);if(a.bw.data[d]==g){h=a.bw.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function LH(a,b){return Ij(a,b,Bi(a)-1|0);}
function AKE(a,b,c){var d,e,f;d=DE(0,c);e=Bi(a)-Bi(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=Bi(b))break a;if(Y(a,d+f|0)!=Y(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AAw(a,b,c){var d,e;d=CB(c,Bi(a)-Bi(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=Bi(b))break a;if(Y(a,d+e|0)!=Y(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Ew(a,b,c){var d;if(b<=c)return Lk(a.bw,b,c-b|0);d=new BO;O(d);M(d);}
function Jt(a,b){return Ew(a,b,Bi(a));}
function AVI(a,b,c){return Ew(a,b,c);}
function KJ(a,b,c){var d,e,f,g;d=new S;V(d);e=Bi(a)-Bi(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Bi(b)){FN(d,c);f=f+(Bi(b)-1|0)|0;break a;}if(Y(a,f+g|0)!=Y(b,g))break;g=g+1|0;}Dx(d,Y(a,f));}f=f+1|0;}FN(d,Jt(a,f));return T(d);}
function AUg(a){return a;}
function Nv(a){var b,c,d,e;b=$rt_createCharArray(a.bw.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bw.data[d];d=d+1|0;}return b;}
function Uo(b){return b===null?B(10):b.gl();}
function VS(b){var c;c=new S;V(c);return T(Be(c,b));}
function DC(a,b){var c,d;if(a===b)return 1;if(!(b instanceof B4))return 0;c=b;if(Bi(c)!=Bi(a))return 0;d=0;while(d<Bi(c)){if(Y(a,d)!=Y(c,d))return 0;d=d+1|0;}return 1;}
function A8i(a){var b,c,d,e;a:{if(!a.qp){b=a.bw.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.qp=(31*a.qp|0)+e|0;d=d+1|0;}}}return a.qp;}
function AKh(a){var b,c,d,e,f,g,h;if(Iy(a))return a;b=$rt_createIntArray(a.bw.data.length);c=b.data;d=0;e=0;while(e<a.bw.data.length){a:{if(e!=(a.bw.data.length-1|0)&&Dt(a.bw.data[e])){f=a.bw.data;g=e+1|0;if(DS(f[g])){h=d+1|0;c[d]=GQ(EJ(a.bw.data[e],a.bw.data[g]));e=g;break a;}}h=d+1|0;c[d]=EU(a.bw.data[e]);}e=e+1|0;d=h;}return A$x(b,0,d);}
function AOh(a){var b,c,d,e,f,g,h;if(Iy(a))return a;b=$rt_createIntArray(a.bw.data.length);c=b.data;d=0;e=0;while(e<a.bw.data.length){a:{if(e!=(a.bw.data.length-1|0)&&Dt(a.bw.data[e])){f=a.bw.data;g=e+1|0;if(DS(f[g])){h=d+1|0;c[d]=GP(EJ(a.bw.data[e],a.bw.data[g]));e=g;break a;}}h=d+1|0;c[d]=FF(a.bw.data[e]);}e=e+1|0;d=h;}return A$x(b,0,d);}
function ANk(a,b){var c,d;if(b===null){b=new EF;Bl(b,B(11));M(b);}Bdc=1;c=Bbs();d=new HW;d.h5=1;d.eP=b;d.bF=$rt_createCharArray(Bi(b)+2|0);Di(Nv(b),0,d.bF,0,Bi(b));d.bF.data[d.bF.data.length-1|0]=0;d.bF.data[d.bF.data.length-2|0]=0;d.DU=d.bF.data.length;d.ma=0;GD(d);GD(d);c.n=d;c.fQ=0;c.u2=SW(c,(-1),c.fQ,null);if(!Ep(c.n))M(CN(B(3),c.n.eP,c.n.ih));if(c.zb)c.u2.iY();return AIO(c,a);}
function AVZ(a,b){return ARn(a,b);}
function AGj(){Bda=new V1;}
function D9(){var a=this;D.call(a);a.vz=null;a.jF=null;a.oq=0;a.rQ=0;a.pc=null;a.qO=null;}
function Bdd(){var a=new D9();O(a);return a;}
function Bde(a){var b=new D9();Bl(b,a);return b;}
function Bdf(a){var b=new D9();WS(b,a);return b;}
function O(a){a.oq=1;a.rQ=1;}
function Bl(a,b){a.oq=1;a.rQ=1;a.vz=b;}
function WS(a,b){a.oq=1;a.rQ=1;a.jF=b;}
function A5D(a){return a;}
function A0h(a){return a.vz;}
function AWm(a){return a.lU();}
function Cc(a){SX(a,C$());}
function SX(a,b){var c,d,e,f,g;Kp(b,ID(Dl(a)));c=a.lU();if(c!==null){d=new S;V(d);Kp(b,T(H(H(d,B(12)),c)));}a:{APA(b);if(a.qO!==null){e=a.qO.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Kp(b,B(13));ACi(b,d);g=g+1|0;}}}if(a.jF!==null&&a.jF!==a){Kp(b,B(14));SX(a.jF,b);}}
function OC(a,b){var c,d,e,f,g;Hp(b,ID(Dl(a)));c=a.lU();if(c!==null){d=new S;V(d);Hp(b,T(H(H(d,B(12)),c)));}a:{SN(b);if(a.qO!==null){e=a.qO.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Hp(b,B(15));AAC(b,d);g=g+1|0;}}}if(a.jF!==null&&a.jF!==a){Hp(b,B(14));OC(a.jF,b);}}
function WK(a,b){if(!a.oq)return;a.pc=Nr(a.pc,a.pc.data.length+1|0);a.pc.data[a.pc.data.length-1|0]=b;}
function Fg(){D9.call(this);}
function Bdg(){var a=new Fg();AUJ(a);return a;}
function AUJ(a){O(a);}
function I3(){Fg.call(this);}
function Bdh(){var a=new I3();AVv(a);return a;}
function AVv(a){O(a);}
function AMb(){I3.call(this);}
function Bdi(){var a=new AMb();A1q(a);return a;}
function A1q(a){O(a);}
function HN(){var a=this;D.call(a);a.O=null;a.bY=0;}
function Bdj(){var a=new HN();V(a);return a;}
function BcO(a){var b=new HN();GE(b,a);return b;}
function V(a){GE(a,16);}
function GE(a,b){a.O=$rt_createCharArray(b);}
function Tu(a,b,c){return AMu(a,a.bY,b,c);}
function AMu(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);f=a.O.data;g=b+1|0;f[b]=45;b=g;}a.O.data[b]=I2(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bj(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)e=b;else{f=a.O.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.O.data;b=e+1|0;f[e]=I2(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function ADb(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);g=a.O.data;h=b+1|0;g[b]=45;b=h;}a.O.data[b]=I2(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)i=b;else{g=a.O.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.O.data;b=i+1|0;g[i]=I2(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function AOq(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdk;AOd(c,f);d=f.uy;g=f.uf;h=f.zi;i=1;j=1;if(h){h=1;j=2;}k=9;l=A0P(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=DE(k,i+1|0);g=0;}else if(g<0){d=d/Bdl.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;C2(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.O.data;h=b+
1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.O.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.O.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.O.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.O.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.O.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.O.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AKu(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdm;ABW(c,f);g=f.u3;h=f.t5;i=f.y_;j=1;k=1;if(i)k=2;l=18;d=AZx(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=DE(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,Bdn.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;C2(a,b,b+(k+l|0)|
0);if(!i)i=b;else{e=a.O.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.O.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.O.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.O.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.O.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.O.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.O.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else
{e=a.O.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.O.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function A0P(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AZx(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=Bdo.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,Bdo.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,Bdo.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function Dx(a,b){return a.yi(a.bY,b);}
function K0(a,b,c){C2(a,b,b+1|0);a.O.data[b]=c;return a;}
function MY(a,b){var c;if(a.O.data.length>=b)return;c=a.O.data.length>=1073741823?2147483647:DE(b,DE(a.O.data.length*2|0,5));a.O=O6(a.O,c);}
function T(a){return Lk(a.O,0,a.bY);}
function IX(a,b,c,d){return a.xS(a.bY,b,c,d);}
function J6(a,b,c,d,e){var f,g,h,i;C2(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.O.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hl(a,b){return a.xk(b,0,b.data.length);}
function C2(a,b,c){var d,e;d=a.bY-b|0;a.nB((a.bY+c|0)-b|0);e=d-1|0;while(e>=0){a.O.data[c+e|0]=a.O.data[b+e|0];e=e+(-1)|0;}a.bY=a.bY+(c-b|0)|0;}
function Iu(){}
function S(){HN.call(this);}
function BX(){var a=new S();A_d(a);return a;}
function A_d(a){V(a);}
function H(a,b){Nz(a,a.bY,b);return a;}
function Be(a,b){Tu(a,b,10);return a;}
function C6(a,b){UI(a,a.bY,b);return a;}
function AWz(a,b){WI(a,a.bY,b);return a;}
function AKn(a,b){Qp(a,a.bY,b);return a;}
function ASZ(a,b){Dx(a,b);return a;}
function AU6(a,b,c,d){IX(a,b,c,d);return a;}
function A9T(a,b){Hl(a,b);return a;}
function FN(a,b){Xm(a,a.bY,b);return a;}
function UI(a,b,c){ADb(a,b,c,10);return a;}
function WI(a,b,c){AOq(a,b,c);return a;}
function Qp(a,b,c){AKu(a,b,c);return a;}
function A9b(a,b,c,d,e){J6(a,b,c,d,e);return a;}
function Xm(a,b,c){Nz(a,b,c===null?B(10):c.gl());return a;}
function AYU(a,b,c){K0(a,b,c);return a;}
function AGF(a,b,c){var d,e,f,g,h,i,j;d=R(b,c);if(d<=0&&b<=a.bY){if(d){e=a.bY-c|0;a.bY=a.bY-(c-b|0)|0;d=0;while(d<e){f=a.O.data;g=b+1|0;h=a.O.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new IY;O(j);M(j);}
function Sj(a,b){var c,d,e,f;if(b>=0&&b<a.bY){a.bY=a.bY-1|0;while(b<a.bY){c=a.O.data;d=a.O.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new IY;O(f);M(f);}
function Nz(a,b,c){var d,e,f;if(b>=0&&b<=a.bY){a:{if(c===null)c=B(10);else if(Iy(c))break a;MY(a,a.bY+Bi(c)|0);d=a.bY-1|0;while(d>=b){a.O.data[d+Bi(c)|0]=a.O.data[d];d=d+(-1)|0;}a.bY=a.bY+Bi(c)|0;d=0;while(d<Bi(c)){e=a.O.data;f=b+1|0;e[b]=Y(c,d);d=d+1|0;b=f;}}return a;}c=new IY;O(c);M(c);}
function ANf(a,b){a.bY=b;}
function AAy(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BO;Bl(f,B(16));M(f);}while(b<c){g=d.data;h=e+1|0;i=a.O.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function A6U(a,b,c,d,e){J6(a,b,c,d,e);return a;}
function AVm(a,b,c,d){IX(a,b,c,d);return a;}
function J_(a){return a.bY;}
function BL(a){return T(a);}
function AXJ(a,b){MY(a,b);}
function A7G(a,b,c){return Xm(a,b,c);}
function A7j(a,b,c){K0(a,b,c);return a;}
function A0x(a,b,c){return Qp(a,b,c);}
function A57(a,b,c){return WI(a,b,c);}
function AUH(a,b,c){return UI(a,b,c);}
function A2D(a,b,c){return Nz(a,b,c);}
function Fa(){D.call(this);}
function Gk(){Fa.call(this);this.f7=0;}
var Bdp=null;var Bdq=null;function AQO(a){var b=new Gk();Lq(b,a);return b;}
function Lq(a,b){a.f7=b;}
function Le(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!Iy(b)){a:{d=0;e=0;switch(Y(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==Bi(b)){b=new EA;O(b);M(b);}while(e<Bi(b)){g=e+1|0;h=Ud(Y(b,e));if(h<0){i=new EA;j=new S;V(j);Bl(i,T(H(H(j,B(17)),b)));M(i);}if(h>=c){i=new EA;j=new S;V(j);Bl(i,T(H(H(Be(H(j,B(18)),c),B(12)),b)));M(i);}f=Bj(c,f)+h|0;if(f<0){if(g==Bi(b)&&f==(-2147483648)&&d)return (-2147483648);i=new EA;j=new S;V(j);Bl(i,T(H(H(j,B(19)),b)));M(i);}e=g;}if(d)f= -f;return f;}b
=new EA;Bl(b,B(20));M(b);}i=new EA;b=new S;V(b);Bl(i,T(Be(H(b,B(21)),c)));M(i);}
function CY(b){var c;if(b>=(-128)&&b<=127){a:{if(Bdq===null){Bdq=J(Gk,256);c=0;while(true){if(c>=Bdq.data.length)break a;Bdq.data[c]=AQO(c-128|0);c=c+1|0;}}}return Bdq.data[b+128|0];}return AQO(b);}
function A3P(a){return a.f7;}
function My(a){var b;b=a.f7;return Tu(BcO(20),b,10).gl();}
function A25(a){return a.f7>>>4^a.f7<<28^a.f7<<8^a.f7>>>24;}
function A_l(a,b){if(a===b)return 1;return b instanceof Gk&&b.f7==a.f7?1:0;}
function AAz(a,b){return R(a.f7,b.f7);}
function Tx(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function JD(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Nn(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function A6Y(a,b){return AAz(a,b);}
function AQi(){Bdp=F($rt_intcls());}
function IQ(){I3.call(this);}
function Bdr(){var a=new IQ();AXH(a);return a;}
function Bds(a){var b=new IQ();Qb(b,a);return b;}
function AXH(a){O(a);}
function Qb(a,b){Bl(a,b);}
function AOR(){IQ.call(this);}
function Bdt(){var a=new AOR();AWM(a);return a;}
function Bdu(a){var b=new AOR();AUp(b,a);return b;}
function AWM(a){O(a);}
function AUp(a,b){Qb(a,b);}
function ALC(){IQ.call(this);}
function Bdv(){var a=new ALC();A3t(a);return a;}
function Bdw(a){var b=new ALC();AUK(b,a);return b;}
function A3t(a){O(a);}
function AUK(a,b){Qb(a,b);}
function BE(){D9.call(this);}
function Bdx(){var a=new BE();AZI(a);return a;}
function AZI(a){O(a);}
function B6(){BE.call(this);}
function Bdy(){var a=new B6();ATi(a);return a;}
function Z0(a){var b=new B6();A$S(b,a);return b;}
function ATi(a){O(a);}
function A$S(a,b){Bl(a,b);}
function Da(){}
function Hi(){}
function Up(){}
function Qq(){}
function Vb(){}
function Ri(){}
function Wi(){}
function Px(){}
function Ll(){}
function YJ(){D.call(this);}
function AX4(a,b,c){a.Xj($rt_str(b),JC(c,"handleEvent"));}
function AYg(a,b,c){a.UH($rt_str(b),JC(c,"handleEvent"));}
function ATE(a,b){return a.HG(b);}
function AY9(a,b,c,d){a.KK($rt_str(b),JC(c,"handleEvent"),d?1:0);}
function A1B(a,b){return !!a.Xq(b);}
function AUC(a){return a.I9();}
function ASX(a,b,c,d){a.NC($rt_str(b),JC(c,"handleEvent"),d?1:0);}
function Bs(){D.call(this);}
var Bdz=0;var BdA=null;var BdB=null;var BdC=null;var BdD=null;var BdE=null;var BdF=null;var BdG=null;var BdH=null;var BdI=null;var BdJ=null;var BdK=null;var BdL=null;var BdM=null;var BdN=null;var BdO=null;var BdP=null;var BdQ=null;var BdR=null;var BdS=null;var BdT=0;var BdU=0;var BdV=0.0;var BdW=0.0;var BdX=0;var BdY=0;var BdZ=0;var Bd0=0;var Bd1=0;var Bd2=null;var Bd3=null;var Bd4=null;var Bd5=null;var Bd6=null;var Bd7=0;var Bd8=null;var Bd9=null;var Bd$=null;var Bd_=null;var Bea=null;var Beb=null;var Bec=
Long_ZERO;var Bed=0;var Bee=0;var Bef=0;var Beg=null;var Beh=null;var Bei=null;var Bej=0;var Bek=0;var Bel=0;var Bem=null;var Ben=null;var Beo=null;var Bep=0;var Beq=null;var Ber=null;var Bes=0.0;var Bet=null;var Beu=0;var Bev=null;var Bew=null;var Bex=0;var Bey=null;var Bez=0;function Bd(){Bd=Bt(Bs);ATI();}
function BeA(){var a=new Bs();VP(a);return a;}
function VP(a){Bd();}
function PG(){Bd();return B(22);}
function Kf(b){Bd();if(Iz(b,B(23)))b=Jt(b,1);return CP(BeB,b);}
function AB$(b){var c;Bd();c=Kf(b);if(c===null)return null;return A23(c,X5(B(24)));}
function ALj(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Go=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaD(callback);return thread.suspend(function(){try{A3m(b,callback);}catch($e){callback.IV($rt_exception($e));}});}
function A3m(b,c){var d,e;Bd();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new W5;b.vp=d;b.z_=c;b=Cu(b,"stateChanged");d.onreadystatechange=b;d.send();}
function AAp(b,c){var d,e,f,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();BdB=b;d=$rt_str(BdB.getAttribute("style"));e=BdB;f=new S;V(f);if(d===null)d=B(3);d=T(H(H(f,d),B(25)));e.setAttribute("style",$rt_ustr(d));BdG=window;BdA=BdG.document;BdC=BdA.createElement("canvas");BdX=b.clientWidth;BdY=b.clientHeight;f=BdC;e=BdX;f.width=e;f=BdC;e=BdY;f.height=e;BdD=BdC.getContext("2d");BdC.setAttribute("id","deevis589723589");f=BdC;b.appendChild(f);BdE
=BdA.createElement("canvas");b=BdE;f=BdX;b.width=f;b=BdE;f=BdY;b.height=f;b=BdE;e=AEL();BdF=b.getContext("webgl2",e);if(BdF===null){b=new B6;c=new S;V(c);Bl(b,T(H(H(H(c,B(26)),$rt_str(window.navigator.userAgent)),B(27))));M(b);}X7(BdF);BdF.getExtension("EXT_texture_filter_anisotropic");b=BdG;e=new W6;BdI=e;b.addEventListener("contextmenu",Cu(e,"handleEvent"));b=BdC;e=new Xa;BdJ=e;b.addEventListener("mousedown",Cu(e,"handleEvent"));b=BdC;e=new Xb;BdK=e;b.addEventListener("mouseup",Cu(e,"handleEvent"));b=BdC;e
=new W$;BdL=e;b.addEventListener("mousemove",Cu(e,"handleEvent"));b=BdG;e=new W_;BdM=e;b.addEventListener("keydown",Cu(e,"handleEvent"));b=BdG;e=new W8;BdN=e;b.addEventListener("keyup",Cu(e,"handleEvent"));b=BdG;e=new W9;BdO=e;b.addEventListener("keypress",Cu(e,"handleEvent"));b=BdC;e=new W7;BdP=e;b.addEventListener("wheel",Cu(e,"handleEvent"));b=BdG;e=new Qy;b.addEventListener("blur",Cu(e,"handleEvent"));b=BdG;e=new Qx;b.addEventListener("focus",Cu(e,"handleEvent"));ANU();$p=1;case 1:AJL();if(C()){break _;}$p
=2;case 2:ALj(c);if(C()){break _;}a:{try{AL$(BdH);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B1){f=$$je;}else{throw $$e;}}Cc(f);}Ber=AYo();Ov(BdR);Ov(BdS);return;default:E$();}}C3().s(b,c,d,e,f,$p);}
function K3(b){Bd();BdF.enable(b);}
function J2(b){Bd();BdF.disable(b);}
function AH0(){var b,c;Bd();b=new V0;b.i0=BdF.createProgram();c=Bd1+1|0;Bd1=c;b.xm=c;return b;}
function OE(b){var c;Bd();c=new V4;c.jp=BdF.createShader(b);return c;}
function Sa(b,c){var d;Bd();d=BdF;b=b.i0;c=c.jp;d.attachShader(b,c);}
function UJ(b,c){var d;Bd();d=BdF;b=b.i0;c=c.jp;d.detachShader(b,c);}
function WC(b){var c;Bd();c=BdF;b=b.jp;c.compileShader(b);}
function AAE(b){var c;Bd();c=BdF;b=b.i0;c.linkProgram(b);}
function O0(b,c){var d;Bd();d=BdF;b=b.jp;d.shaderSource(b,$rt_ustr(c));}
function T$(b){var c;Bd();c=BdF;b=b.jp;return $rt_str(c.getShaderInfoLog(b));}
function AHs(b){var c;Bd();c=BdF;b=b.i0;return $rt_str(c.getProgramInfoLog(b));}
function Ve(b){var c;Bd();c=BdF;b=b.jp;return c.getShaderParameter(b,35713)!=1?0:1;}
function AGl(b){var c;Bd();c=BdF;b=b.i0;return c.getProgramParameter(b,35714)!=1?0:1;}
function Tf(b){var c;Bd();c=BdF;b=b.jp;c.deleteShader(b);}
function L8(){var b;Bd();b=new V_;b.DX=BdF.createBuffer();return b;}
function Hh(b,c){var d;Bd();d=BdF;c=c!==null?c.DX:null;d.bindBuffer(b,c);}
function PB(b,c,d){var e;Bd();e=BdF;c=c;e.bufferData(b,c,d);}
function N6(b){Bd();BdF.enableVertexAttribArray(b);}
function Dq(b,c){var d;Bd();d=BdF;b=b.i0;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new Xf;b.kz=d;}return b;}
function LW(b,c,d){var e;Bd();e=BdF;b=b.i0;e.bindAttribLocation(b,c,$rt_ustr(d));}
function Ig(b,c){var d;Bd();if(b!==null){d=BdF;b=b.kz;d.uniform1f(b,c);}}
function Lo(b,c,d,e){var f;Bd();if(b!==null){f=BdF;b=b.kz;f.uniform3f(b,c,d,e);}}
function Ui(b,c,d,e,f){var g,h;Bd();if(b!==null){g=BdF;h=b.kz;g.uniform4f(h,c,d,e,f);}}
function Q$(b,c){var d;Bd();if(b!==null){d=BdF;b=b.kz;d.uniform1i(b,c);}}
function Mh(b,c){var d,e;Bd();Bd6.set(c.data);if(b!==null){d=BdF;e=b.kz;b=Bd6;d.uniformMatrix4fv(e,!!0,b);}}
function VY(b){var c;Bd();if(b!==null&&Bd7!=b.xm){Bd7=b.xm;c=BdF;b=b.i0;c.useProgram(b);}}
function N8(b,c,d,e,f,g){Bd();BdF.vertexAttribPointer(b,c,d,!!e,f,g);}
function O$(){var b;Bd();b=new Sz;b.A0=BdF.createVertexArray();b.vQ=0;return b;}
function RQ(b){var c;Bd();c=BdF;b=b!==null?b.A0:null;c.bindVertexArray(b);}
function AES(b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=AIr(c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(b,c,$p);}
function AIr(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Go=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaD(callback);return thread.suspend(function(){try{AWO(b,callback);}catch($e){callback.IV($rt_exception($e));}});}
function AWO(b,c){var d,e,f;Bd();d=BdA.createElement("img");e=new QB;e.f3=d;e.x_=c;d.addEventListener("load",Cu(e,"handleEvent"));f=new QA;f.Ej=d;f.E1=c;d.addEventListener("error",Cu(f,"handleEvent"));e=$rt_str(ANF(b,"image/png"));if(e===null)CM(c,null);else{b=$rt_ustr(e);d.src=b;}}
function Lr(){var b,c,d;Bd();b=BdB.clientWidth;if(b!=BdX){c=BdC;d=b;c.width=d;c=BdE;d=b;c.width=d;BdX=b;}return b;}
function MD(){var b,c,d;Bd();b=BdB.clientHeight;if(b!=BdY){c=BdC;d=b;c.height=d;c=BdE;d=b;c.height=d;BdY=b;}return b;}
function Kv(){Bd();return Long_fromInt(1073741824);}
function JX(){Bd();return Long_fromInt(1073741824);}
function Kc(){Bd();return Long_ZERO;}
function UF(b){Bd();return b.byteLength;}
function T1(b){Bd();return b<=Bew.data.length&&b>=0?Bew.data[b]:(-1);}
function ACz(b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();d=LH(b,47);if(d>0){e=Ew(b,0,d);$p=2;continue _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeC;d=0;f=f.buffer;$p=1;case 1:AXO(e,b,d,f);if(C()){break _;}return;case 2:AI$(e);if(C()){break _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeC;d=0;f=f.buffer;$p=1;continue _;default:E$();}}C3().s(b,c,d,e,f,$p);}
function ALD(b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=BeC;$p=1;case 1:$z=A_H(c,b);if(C()){break _;}b=$z;if(b===null)d=null;else{d=$rt_createByteArray(b.byteLength);e=d.data;b=new Uint8Array(b);f=0;g=e.length;while(f<g){e[f]=b[f]<<24>>24;f=f+1|0;}}return d;default:E$();}}C3().s(b,c,d,e,f,g,$p);}
function ANl(b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();d=BeC;$p=1;case 1:$z=A_H(d,b);if(C()){break _;}d=$z;e=LH(c,47);if(e<=0){f=BeC;e=0;$p=2;continue _;}f=Ew(c,0,e);$p=4;continue _;case 2:AXO(f,c,e,d);if(C()){break _;}c=BeC;$p=3;case 3:A5t(c,b);if(C()){break _;}return;case 4:AI$(f);if(C()){break _;}f=BeC;e=0;$p=2;continue _;default:E$();}}C3().s(b,c,d,e,f,$p);}
function AL1(b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();c=BeC;$p=1;case 1:A5t(c,b);if(C()){break _;}return;default:E$();}}C3().s(b,c,$p);}
function V6(){Bd();return BdH;}
function RL(){Bd();return Bea;}
function MO(){Bd();return BdR;}
function Mt(){Bd();if(Long_gt(Long_sub(B$(),Bec),Long_fromInt(3000))&&Bee&&!(document.pointerLockElement!=null?1:0)){BdC.requestPointerLock();if(document.pointerLockElement!=null?1:0)Bee=0;}}
function P1(){Bd();return Beb;}
function QC(b){Bd();return b.which;}
function S5(b){Bd();return T1(b);}
function NM(){Bd();return BdS;}
function ST(b){Bd();Bd0=b;return b;}
function Hn(){Bd();return Bd8;}
function JP(){Bd();return Bd9;}
function WE(b){Bd();URL.revokeObjectURL($rt_ustr(b));}
function VN(){Bd();return Bed;}
function MW(b){Bd();Bed=b;return b;}
function PX(){Bd();return Bec;}
function ATI(){var b,c;Bdz=0;BdA=null;BdB=null;BdC=null;BdD=null;BdE=null;BdF=null;BdG=null;BdH=null;BdI=null;BdJ=null;BdK=null;BdL=null;BdM=null;BdN=null;BdO=null;BdP=null;BdQ=J(B4,0);BdR=QV();BdS=QV();BdT=0;BdU=0;BdV=0.0;BdW=0.0;BdX=0;BdY=0;BdZ=0;Bd0=1;Bd1=0;Bd2=$rt_createIntArray(4);Bd3=new Uint8Array(new ArrayBuffer(4194304));Bd4=new Float32Array(4);Bd5=new Float32Array(9);Bd6=new Float32Array(16);Bd7=(-1);Bd8=null;Bd9=null;Bd$=null;Bd_=null;Bea=$rt_createBooleanArray(8);Beb=$rt_createBooleanArray(256);Bec
=Long_ZERO;Bed=0;Bee=0;Bef=0;Beg=Ga();Beh=Ga();Bei=null;Bej=0;Bek=0;Bel=0;Bem=QV();Ben=null;Beo=null;Bep=0;Beq=De();Ber=null;Bes=0.029999999329447746;Bet=De();Beu=0;b=J(B4,256);c=b.data;c[0]=B(28);c[1]=B(29);c[2]=B(30);c[3]=B(31);c[4]=B(32);c[5]=B(33);c[6]=B(34);c[7]=B(35);c[8]=B(36);c[9]=B(37);c[10]=B(38);c[11]=B(2);c[12]=B(39);c[13]=B(40);c[14]=B(41);c[15]=B(42);c[16]=B(43);c[17]=B(44);c[18]=B(45);c[19]=B(46);c[20]=B(47);c[21]=B(48);c[22]=B(49);c[23]=B(50);c[24]=B(51);c[25]=B(52);c[26]=B(53);c[27]=B(54);c[28]
=B(55);c[29]=B(56);c[30]=B(57);c[31]=B(58);c[32]=B(59);c[33]=B(60);c[34]=B(61);c[35]=B(62);c[36]=B(63);c[37]=B(64);c[38]=B(65);c[39]=B(66);c[40]=B(67);c[41]=B(68);c[42]=B(69);c[43]=B(70);c[44]=B(71);c[45]=B(72);c[46]=B(73);c[47]=B(74);c[48]=B(75);c[49]=B(76);c[50]=B(77);c[51]=B(78);c[52]=B(79);c[53]=B(80);c[54]=B(81);c[55]=B(82);c[56]=B(83);c[57]=B(84);c[58]=B(85);c[59]=B(86);c[60]=B(87);c[61]=B(88);c[62]=B(89);c[63]=B(90);c[64]=B(91);c[65]=B(92);c[66]=B(93);c[67]=B(94);c[68]=B(95);c[69]=B(96);c[70]=B(97);c[71]
=B(98);c[72]=B(99);c[73]=B(100);c[74]=B(101);c[75]=B(102);c[76]=B(103);c[77]=B(104);c[78]=B(105);c[79]=B(106);c[80]=B(107);c[81]=B(108);c[82]=B(109);c[83]=B(110);c[84]=B(10);c[85]=B(10);c[86]=B(10);c[87]=B(111);c[88]=B(112);c[89]=B(10);c[90]=B(10);c[91]=B(10);c[92]=B(10);c[93]=B(10);c[94]=B(10);c[95]=B(10);c[96]=B(10);c[97]=B(10);c[98]=B(10);c[99]=B(10);c[100]=B(113);c[101]=B(114);c[102]=B(115);c[103]=B(116);c[104]=B(117);c[105]=B(118);c[106]=B(10);c[107]=B(10);c[108]=B(10);c[109]=B(10);c[110]=B(10);c[111]=
B(10);c[112]=B(119);c[113]=B(120);c[114]=B(10);c[115]=B(10);c[116]=B(10);c[117]=B(10);c[118]=B(10);c[119]=B(10);c[120]=B(10);c[121]=B(121);c[122]=B(10);c[123]=B(122);c[124]=B(10);c[125]=B(123);c[126]=B(10);c[127]=B(10);c[128]=B(10);c[129]=B(10);c[130]=B(10);c[131]=B(10);c[132]=B(10);c[133]=B(10);c[134]=B(10);c[135]=B(10);c[136]=B(10);c[137]=B(10);c[138]=B(10);c[139]=B(10);c[140]=B(10);c[141]=B(124);c[142]=B(10);c[143]=B(10);c[144]=B(125);c[145]=B(126);c[146]=B(127);c[147]=B(128);c[148]=B(129);c[149]=B(130);c[150]
=B(131);c[151]=B(132);c[152]=B(10);c[153]=B(10);c[154]=B(10);c[155]=B(10);c[156]=B(133);c[157]=B(134);c[158]=B(10);c[159]=B(10);c[160]=B(10);c[161]=B(10);c[162]=B(10);c[163]=B(10);c[164]=B(10);c[165]=B(10);c[166]=B(10);c[167]=B(135);c[168]=B(10);c[169]=B(10);c[170]=B(10);c[171]=B(10);c[172]=B(10);c[173]=B(10);c[174]=B(10);c[175]=B(10);c[176]=B(10);c[177]=B(10);c[178]=B(10);c[179]=B(136);c[180]=B(10);c[181]=B(137);c[182]=B(10);c[183]=B(138);c[184]=B(139);c[185]=B(10);c[186]=B(10);c[187]=B(10);c[188]=B(10);c[189]
=B(10);c[190]=B(10);c[191]=B(10);c[192]=B(10);c[193]=B(10);c[194]=B(10);c[195]=B(10);c[196]=B(140);c[197]=B(141);c[198]=B(10);c[199]=B(142);c[200]=B(143);c[201]=B(144);c[202]=B(10);c[203]=B(145);c[204]=B(10);c[205]=B(146);c[206]=B(10);c[207]=B(147);c[208]=B(148);c[209]=B(149);c[210]=B(150);c[211]=B(151);c[212]=B(10);c[213]=B(10);c[214]=B(10);c[215]=B(10);c[216]=B(10);c[217]=B(10);c[218]=B(152);c[219]=B(153);c[220]=B(154);c[221]=B(155);c[222]=B(156);c[223]=B(157);c[224]=B(10);c[225]=B(10);c[226]=B(10);c[227]
=B(10);c[228]=B(10);c[229]=B(10);c[230]=B(10);c[231]=B(10);c[232]=B(10);c[233]=B(10);c[234]=B(10);c[235]=B(10);c[236]=B(10);c[237]=B(10);c[238]=B(10);c[239]=B(10);c[240]=B(10);c[241]=B(10);c[242]=B(10);c[243]=B(10);c[244]=B(10);c[245]=B(10);c[246]=B(10);c[247]=B(10);c[248]=B(10);c[249]=B(10);c[250]=B(10);c[251]=B(10);c[252]=B(10);c[253]=B(10);c[254]=B(10);c[255]=B(10);Bev=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=14;c[9]=15;c[10]
=(-1);c[11]=(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]
=(-1);c[63]=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]=52;c[111]=53;c[112]=(-1);c[113]
=(-1);c[114]=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]=(-1);c[154]=(-1);c[155]=(-1);c[156]
=(-1);c[157]=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]=(-1);c[198]=(-1);c[199]=(-1);c[200]
=(-1);c[201]=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;Bew=b;Bex=0;Bey=new Int32Array(new ArrayBuffer(2100000));Bez=0;}
function X7(b){window.currentContext=b;}
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
function AEL(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function ANF(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function ANz(b){if(b.commit)b.commit();}
function SU(){}
function JB(){}
function NX(){}
function HC(){D.call(this);this.wc=null;}
function BeD(a){var b=new HC();Wd(b,a);return b;}
function Wd(a,b){if(b!==null){a.wc=b;return;}b=new EF;O(b);M(b);}
function ABg(){HC.call(this);this.xZ=null;}
function A88(){var a=new ABg();A2Y(a);return a;}
function A2Y(a){var b;a.wc=a;b=new Lh;GE(b,16);a.xZ=b;a.wc=a.xZ;}
function AK4(a){return;}
function AEw(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;IX(a.xZ,b,c,d);return;}}f=new BO;O(f);M(f);}
function Lu(){var a=this;HC.call(a);a.mD=null;a.FO=0;a.yf=0;}
function AFw(a){var $$je;a:{if(a.mD===null)Ke(a);else{try{AK4(a.mD);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B1){}else{throw $$e;}}Ke(a);}}}
function Hp(a,b){if(b===null)b=Uo(null);Yr(a,b);}
function SN(a){Hp(a,B(158));if(a.yf)AFw(a);}
function AAC(a,b){ABO(a,Uo(b));}
function ABO(a,b){Hp(a,b);SN(a);}
function Ke(a){a.FO=1;}
function ARW(a,b){AAl(a,b,0,b.data.length);}
function AAl(a,b,c,d){var $$je;a:{if(a.mD===null)Ke(a);else{try{AEw(a.mD,b,c,d);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B1){}else{throw $$e;}}Ke(a);}}}
function Yr(a,b){ARW(a,Nv(b));}
function AFa(){D.call(this);}
function BeE(){var a=new AFa();AV6(a);return a;}
function AV6(a){return;}
function AFO(){D.call(this);}
function L0(){}
function Io(){var a=this;D.call(a);a.cB=null;a.cd=0;a.bA=0;a.bf=null;a.B=null;a.dY=null;a.f=null;a.c6=null;a.k2=null;a.bs=0;a.bo=null;a.e$=null;a.D=null;a.is=null;a.eV=null;a.bN=0;a.c$=0;a.Hf=null;a.FY=0;a.nZ=null;a.h8=0;a.Gt=null;a.cf=null;a.o=null;a.yj=null;a.C9=null;a.BF=null;a.gS=0;a.lD=null;a.gT=Long_ZERO;a.bp=0;a.co=0;a.cU=0;a.dC=Long_ZERO;}
var BeF=null;var BeG=0;var Bc7=null;function AIm(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.o=A_7(a);b=new KI;c=a.o;BeH=De();b.zj=De();b.kA=Rf(1);b.he=WN(1048576);b.l2=WN(1048576);b.Cc=Ci();b.sU=0;b.DW=0;b.wI=c;a.bo=b;c=new Wf;d=a.o;b=B(159);e=a.bo;$p=1;case 1:AOG(c,d,b,e);if(C()){break _;}a.e$=c;$p=2;case 2:Yo(a);if(C()){break _;}a.yj=new Qk;Ej(a,B(160));Ba(3553);Bd();BdF.clearDepth((-1.0));Ba(2929);HK(515);Ba(3008);Su(516,
0.10000000149011612);BdF.cullFace(1029);C_(5889);C9();C_(5888);Ej(a,B(161));G9(a.bo,a.BF);G9(a.bo,a.C9);G9(a.bo,Bar());G9(a.bo,Bcz());G9(a.bo,AVE(0));G9(a.bo,AVE(1));a.dY=BaQ(a,a.bo);FP(0,0,a.cd,a.bA);e=Bc7;b=LN();c=B(162);d=B(163);$p=3;case 3:ARV(e,b,c,d);if(C()){break _;}b=new OZ;c=a.B;d=a.bo;b.cD=J(J3,3);b.su=new DB;if(c!==null)b.mX=c;b.jf=d;f=0;while(f<3){b.cD.data[f]=Ci();f=f+1|0;}a.c6=b;Ej(a,B(164));b=new Ns;Ne(b);b.g9=Ci();b.vt=new DB;b.FT=null;b.rV=0;b.IF=1.0;b.b2=a;a.nZ=b;return;default:E$();}}C3().s(a,
b,c,d,e,f,$p);}
function Yo(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=FJ(a.cd,a.bA);c=b.fN;d=b.fJ;D5(16640);C_(5889);C9();Ip(0.0,c,d,0.0,1000.0,3000.0);C_(5888);C9();Bw(0.0,0.0,(-2000.0));FP(0,0,a.cd,a.bA);HB(0.0,0.0,0.0,0.0);Bc(2896);Bc(2912);Ba(3553);BA();e=BeI;f=3553;b=a.bo;g=B(165);$p=1;case 1:$z=AHr(b,g);if(C()){break _;}d=$z;Cp(f,d);BU(1.0,1.0,1.0,1.0);Bz(e);ES(e,4210752);G(e,0.0,a.bA,0.0,0.0,a.bA/32.0
+0.0);G(e,a.cd,a.bA,0.0,a.cd/32.0,a.bA/32.0+0.0);G(e,a.cd,0.0,0.0,a.cd/32.0,0.0);G(e,0.0,0.0,0.0,0.0,0.0);Br(e);Ba(3008);Su(516,0.10000000149011612);Cy(a.e$,B(166),8,(a.bA/2|0)-16|0,(-1));return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADT(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D instanceof Rx)return;if(a.D!==null){c=a.D;$p=1;continue _;}if(b===null&&a.B===null)b=LN();else if(b===null&&a.f.bT<=0){b=new Mn;DR(b);}a.D=b;if(b===null){$p=2;continue _;}W1(a);c=FJ(a.cd,a.bA);d=c.fN;e=c.fJ;$p=3;continue _;case 1:c.pt();if(C()){break _;}if(b===null&&a.B===null)b=LN();else if(b===null&&a.f.bT<=0){b=new Mn;DR(b);}a.D=b;if(b===null){$p=2;continue _;}W1(a);c
=FJ(a.cd,a.bA);d=c.fN;e=c.fJ;$p=3;continue _;case 2:AFh(a);if(C()){break _;}return;case 3:AP6(b,a,d,e);if(C()){break _;}a.h8=0;return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ARV(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=new UG;DR(e);e.qv=Ci();e.Er=b;e.Aw=c;e.Av=d;$p=1;case 1:ADT(a,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Ej(a,b){var c,d,e,f;BW();Bd();c=BdF.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(167);break a;case 1281:d=B(168);break a;case 1282:d=B(169);break a;case 1285:d=B(170);break a;default:d=B(171);break a;}d=B(172);}Cg(Dz(),B(173));e=Dz();f=new S;V(f);Cg(e,T(H(H(f,B(174)),b)));b=Dz();e=new S;V(e);Cg(b,T(H(H(Be(e,c),B(12)),d)));}}
function Yi(a){var b,c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gS=1;$p=1;case 1:AIm(a);if(C()){break _;}b=B$();c=0;if(!a.gS)return;BeJ=0;BeK=0;if(!a.bs)FQ(a.bf);else{d=a.bf.cY;FQ(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i7){a.bN=a.bN+1|0;$p=2;continue _;}Ej(a,B(175));if(a.bs)a.bf.cY=1.0;Ba(3553);if(a.B!==null){f=a.B;$p=3;continue _;}if(!a.h8){GS(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p
=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EH();$p=5;continue _;case 2:AFA(a);if(C()){break _;}e=e+1|0;if(e<a.bf.i7){a.bN=a.bN+1|0;continue _;}Ej(a,B(175));if(a.bs)a.bf.cY=1.0;Ba(3553);if(a.B!==null){f=a.B;$p=3;continue _;}if(!a.h8){GS(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EH();$p=5;continue _;case 3:$z=AIj(f);if(C()){break _;}g=$z;if(g){f=a.B;continue _;}if(!a.h8){GS(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EH();$p=5;continue _;case 4:AFK(f,
d);if(C()){break _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EH();$p=5;case 5:XB();if(C()){break _;}$p=6;case 6:AUT();if(C()){break _;}if(!(Lr()==a.cd&&MD()==a.bA)){a.cd=BdC.width;a.bA=BdC.height;if(a.cd<=0)a.cd=1;if(a.bA<=0)a.bA=1;g=a.cd;h=a.bA;if(g<=0)g=1;if(h<=0)h=1;a.cd=g;a.bA=h;if(a.D!==null){f=FJ(g,h);h=f.fN;g=f.fJ;f=a.D;$p=8;continue _;}}if(a.o.mu){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof E1){f=$$je;}else{throw $$e;}}f.tE();}Ej(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oa()
?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new S;V(f);f=H(Be(f,c),B(177));Tp();a.lD=T(H(Be(f,BeL),B(178)));BeL=0;c=0;b=i;}if(!a.gS)return;BeJ=0;BeK=0;if(!a.bs)FQ(a.bf);else{d=a.bf.cY;FQ(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i7){a.bN=a.bN+1|0;$p=2;continue _;}Ej(a,B(175));if(a.bs)a.bf.cY=1.0;Ba(3553);if(a.B!==null){f=a.B;$p=3;continue _;}if(!a.h8){GS(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EH();$p=5;continue _;case 7:a:{try{AKB(i);if(C())
{break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof E1){f=$$je;}else{throw $$e;}}f.tE();}Ej(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oa()?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new S;V(f);f=H(Be(f,c),B(177));Tp();a.lD=T(H(Be(f,BeL),B(178)));BeL=0;c=0;b=i;}if(!a.gS)return;BeJ=0;BeK=0;if(!a.bs)FQ(a.bf);else{d=a.bf.cY;FQ(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i7){a.bN=a.bN+1|0;$p=2;continue _;}Ej(a,B(175));if(a.bs)a.bf.cY=1.0;Ba(3553);if(a.B!==null){f=a.B;$p=3;continue _;}if
(!a.h8){GS(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EH();$p=5;continue _;case 8:AP6(f,a,h,g);if(C()){break _;}if(a.o.mu){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof E1){f=$$je;}else{throw $$e;}}f.tE();}Ej(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oa()?1:0;while(true){j=B$();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new S;V(f);f=H(Be(f,c),B(177));Tp();a.lD=T(H(Be(f,BeL),B(178)));BeL=0;c=0;b=i;}if(!a.gS)return;BeJ=0;BeK=
0;if(!a.bs)FQ(a.bf);else{d=a.bf.cY;FQ(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i7){a.bN=a.bN+1|0;$p=2;continue _;}Ej(a,B(175));if(a.bs)a.bf.cY=1.0;Ba(3553);if(a.B!==null){f=a.B;$p=3;continue _;}if(!a.h8){GS(a.cB,a.bf.cY);f=a.eV;d=a.bf.cY;$p=4;continue _;}if(BN(33)&&BN(7))FZ(a);else a.gT=EH();$p=5;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function FZ(a){var b,c,d,e,f,g,h,i,j,k,l;if(Long_eq(a.gT,Long_fromInt(-1)))a.gT=EH();b=EH();c=BeF.data;d=BeG;BeG=d+1|0;c[d&(BeF.data.length-1|0)]=Long_sub(b,a.gT);a.gT=b;D5(256);C_(5889);C9();Ip(0.0,a.cd,a.bA,0.0,1000.0,3000.0);C_(5888);C9();Bw(0.0,0.0,(-2000.0));Bc(3553);BA();e=BeI;Gm(e,7);ES(e,538968064);Bf(e,0.0,a.bA-100|0,0.0);Bf(e,0.0,a.bA,0.0);Bf(e,BeF.data.length,a.bA,0.0);Bf(e,BeF.data.length,a.bA-100|0,0.0);Br(e);f=Long_ZERO;d=0;while(d<BeF.data.length){f=Long_add(f,BeF.data[d]);d=d+1|0;}d=Long_div(Long_div(f,
Long_fromInt(200000)),Long_fromInt(BeF.data.length)).lo;Gm(e,7);ES(e,541065216);Bf(e,0.0,a.bA-d|0,0.0);Bf(e,0.0,a.bA,0.0);Bf(e,BeF.data.length,a.bA,0.0);Bf(e,BeF.data.length,a.bA-d|0,0.0);Br(e);Gm(e,1);g=0;while(g<BeF.data.length){h=(((g-BeG|0)&(BeF.data.length-1|0))*255|0)/BeF.data.length|0;i=Bj(h,h)/255|0;d=Bj(i,i)/255|0;j=Bj(d,d)/255|0;ES(e,(((-16777216)+(Bj(j,j)/255|0)|0)+(d*256|0)|0)+(h*4096|0)|0);k=Long_div(BeF.data[g],Long_fromInt(200000));l=g+0.5;Bf(e,l,Long_toNumber(Long_sub(Long_fromInt(a.bA),k))+
0.5,0.0);Bf(e,l,a.bA+0.5,0.0);g=g+1|0;}Br(e);Ba(3553);}
function AFh(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Oh()&&!a.bp){a.bp=1;Yz(a.yj);b=null;$p=1;continue _;}return;case 1:ADT(a,b);if(C()){break _;}a.co=a.bN+10000|0;return;default:E$();}}C3().s(a,b,$p);}
function W1(a){if(a.bp){if(a.f!==null)ARF(a.f);a.bp=0;AFy(a.yj);}}
function AK9(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D!==null)return;b=Bcn();$p=1;case 1:ADT(a,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function AAF(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.cB.DT&&!(!b&&a.c$>0)){if(c&&a.cf!==null&&!a.cf.k$&&!b){d=a.cf.h$;e=a.cf.h_;f=a.cf.ia;g=a.cB;b=a.cf.hL;$p=1;continue _;}ALO(a.cB);}return;case 1:YM(g,d,e,f,b);if(C()){break _;}g=a.c6;b=a.cf.hL;$p=2;case 2:Y1(g,d,e,f,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AB0(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(!b&&a.c$>0)){if(!b)Pk(a.eV.iK);a:{if(a.cf!==null){if(a.cf.k$!=1){if(a.cf.k$)break a;c=a.cf.h$;d=a.cf.h_;e=a.cf.ia;f=a.cf.hL;L();g=BeM.data;h=a.B;$p=1;continue _;}if(!b){h=a.f;i=a.cf.nC;$p=2;continue _;}if(b==1)Vo(a.f,a.cf.nC);}else if(!b&&!(a.cB instanceof Du))a.c$=10;}if
(b==1){h=D$(a.f.K);if(h!==null){d=h.p;i=a.B;j=a.f;$p=5;continue _;}}}return;case 1:$z=ACv(h,c,d,e);if(C()){break _;}k=$z;j=g[k];if(!b){h=a.B;k=a.cf.hL;$p=4;continue _;}l=D$(a.f.K);h=a.B;$p=3;continue _;case 2:ADu(h,i);if(C()){break _;}if(b==1)Vo(a.f,a.cf.nC);if(b==1){h=D$(a.f.K);if(h!==null){d=h.p;i=a.B;j=a.f;$p=5;continue _;}}return;case 3:$z=ACv(h,c,d,e);if(C()){break _;}k=$z;if(k>0){h=BeM.data[k];i=a.B;j=a.f;$p=6;continue _;}if(l===null)return;m=l.p;h=a.f;i=a.B;$p=8;continue _;case 4:ABI(h,c,d,e,k);if(C())
{break _;}if(j===BeN&&a.f.AI<100){if(b==1){h=D$(a.f.K);if(h!==null){d=h.p;i=a.B;j=a.f;$p=5;continue _;}}return;}h=a.cB;$p=7;continue _;case 5:b:{$z=ABe(h,i,j);if(C()){break _;}i=$z;if(i===h){if(i===null)break b;if(i.p==d)break b;}a.f.K.bg.data[a.f.K.bL]=i;AM7(a.eV.iK);if(!i.p)a.f.K.bg.data[a.f.K.bL]=null;}return;case 6:$z=h.lH(i,c,d,e,j);if(C()){break _;}k=$z;if(k)return;if(l===null)return;m=l.p;h=a.f;i=a.B;$p=8;continue _;case 7:AE2(h,c,d,e);if(C()){break _;}if(b==1){h=D$(a.f.K);if(h!==null){d=h.p;i=a.B;j=
a.f;$p=5;continue _;}}return;case 8:$z=AJe(l,h,i,c,d,e,f);if(C()){break _;}c=$z;if(c)Pk(a.eV.iK);if(!l.p)a.f.K.bg.data[a.f.K.bL]=null;else if(l.p!=m)AGI(a.eV.iK);if(b==1){h=D$(a.f.K);if(h!==null){d=h.p;i=a.B;j=a.f;$p=5;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AHJ(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.cf===null)return;b=a.B;c=a.cf.h$;d=a.cf.h_;e=a.cf.ia;$p=1;case 1:$z=ACv(b,c,d,e);if(C()){break _;}c=$z;L();if(c==BeO.b)c=BeP.b;if(c==BeQ.b)c=BeR.b;if(c==BeN.b)c=BeS.b;ARg(a.f.K,c,a.cB instanceof Du);return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AFA(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AKv(a.nZ);if(!a.bs&&a.B!==null){b=a.cB;$p=2;continue _;}c=3553;d=a.bo;b=B(179);$p=1;case 1:$z=AHr(d,b);if(C()){break _;}e=$z;Cp(c,e);if(a.D===null&&a.f!==null&&a.f.bT<=0){b=null;$p=3;continue _;}if(a.D!==null&&!a.D.pR){if(a.D!==null)a.co=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.B!==null){a.B.i3=a.o.jX;if(!a.bs){b=a.eV;$p=7;continue _;}if
(!a.bs)HV(a.dY);if(!a.bs){b=a.B;$p=13;continue _;}if(!a.bs&&!GI(a)){b=a.B;$p=19;continue _;}if(!a.bs){b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dC=B$();return;}a:while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Eu(a.f,Bg(),CU());if(!CU())continue;if
(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bg()==a.o.gk.bI){b=a.f;d=En(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.ga.bI)continue;Eb(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dC),Long_fromInt(200)))continue;c=G3();if(c)F7(a.f.K,c);b:{if(a.D!==null){if(a.D===null)break b;else
{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx())break a;}}$p=16;continue _;case 2:AI0(b);if(C()){break _;}c=3553;d=a.bo;b=B(179);$p=1;continue _;case 3:ADT(a,b);if(C()){break _;}if(a.D!==null&&!a.D.pR){if(a.D!==null)a.co=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.B!==null){a.B.i3=a.o.jX;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs)HV(a.dY);if(!a.bs){b=a.B;$p=13;continue _;}if(!a.bs&&!GI(a)){b=
a.B;$p=19;continue _;}if(!a.bs){b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dC=B$();return;}c:while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Eu(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du)
{Bg();Bg();}if(Bg()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bg()==a.o.gk.bI){b=a.f;d=En(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.ga.bI)continue;Eb(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dC),Long_fromInt(200)))continue;c=G3();if(c)F7(a.f.K,c);d:{if(a.D!==null){if(a.D===null)break d;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CV()&&
Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx())break c;}}$p=16;continue _;case 4:AG4(b);if(C()){break _;}if(a.D!==null)a.D.rB();if(a.B!==null){a.B.i3=a.o.jX;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs)HV(a.dY);if(!a.bs){b=a.B;$p=13;continue _;}if(!a.bs&&!GI(a)){b=a.B;$p=19;continue _;}if(!a.bs){b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dC=B$();return;case 5:Zy(b);if(C()){break _;}while(true){while(true){if(!FA()){if(a.c$
>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Eu(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bg()==a.o.gk.bI){b=a.f;d=En(a.f.K,a.f.K.bL,
1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.ga.bI)continue;Eb(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dC),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}$p=16;continue _;case 6:ASx(b);if(C())
{break _;}while(true){e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()==a.o.ga.bI)Eb(a.o,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Eu(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.o.cC=a.o.cC
?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bg()!=a.o.gk.bI)continue;else{b=a.f;d=En(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}}$p=9;continue _;case 7:AIM(b);if(C()){break _;}if(!a.bs)HV(a.dY);if(!a.bs){b=a.B;$p=13;continue _;}if(!a.bs&&!GI(a)){b=a.B;$p=19;continue _;}if(a.bs){if(a.bs){a.dC=B$();return;}b=a.c6;$p=21;continue _;}b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 8:AFh(a);if(C()){break _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true)
{if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Eu(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bg()==a.o.gk.bI){b=a.f;d=En(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=
0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.ga.bI)continue;Eb(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dC),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}$p=16;continue _;case 9:AK9(a);if(C()){break _;}while(true){if(a.cB instanceof Du)
{Bg();Bg();}if(Bg()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bg()==a.o.gk.bI){b=a.f;d=En(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()==a.o.ga.bI)Eb(a.o,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Eu(a.f,
Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()!=1)continue;else break;}continue _;case 10:AAF(a,c,e);if(C()){break _;}if(a.D!==null)a.co=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.B!==null){a.B.i3=a.o.jX;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs)HV(a.dY);if(!a.bs){b=a.B;$p=13;continue _;}if(!a.bs&&!GI(a)){b=a.B;$p=19;continue _;}if(!a.bs){b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dC=B$();return;case 11:AB0(a,
c);if(C()){break _;}a.co=a.bN;while(true){if(CV()==1&&Cx()){c=1;$p=14;continue _;}if(CV()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Eu(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if
(Bg()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bg()==a.o.gk.bI){b=a.f;d=En(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.ga.bI)continue;Eb(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dC),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(CV())continue;if(!Cx())continue;else
{c=0;continue _;}}$p=8;continue _;case 12:AB0(a,c);if(C()){break _;}a.co=a.bN;if(B9(1)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;case 13:APd(b);if(C()){break _;}if(!a.bs&&!GI(a)){b=a.B;$p=19;continue _;}if(a.bs){if(a.bs){a.dC=B$();return;}b=a.c6;$p=21;continue _;}b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 14:AB0(a,c);if(C()){break _;}a.co=a.bN;while(true){if(CV()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!FA()){if
(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Eu(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bg()==a.o.gk.bI){b=a.f;d=En(a.f.K,a.f.K.bL,
1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.ga.bI)continue;Eb(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dC),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()!=1)continue;if(!Cx())continue;else{c=1;continue _;}}$p=8;continue _;case 15:AB0(a,c);if(C()){break _;}a.co=a.bN;c=0;e=a.D
===null&&B9(0)&&a.bp?1:0;$p=10;continue _;case 16:AHJ(a);if(C()){break _;}while(true){while(true){if(!FA()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Eu(a.f,Bg(),CU());if(!CU())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.o.cC=a.o.cC
?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bg()==a.o.gk.bI){b=a.f;d=En(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()!=a.o.ga.bI)continue;Eb(a.o,4,!BN(42)&&!BN(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B$(),a.dC),Long_fromInt(200)))continue;else break;}c=G3();if(c)F7(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CV()&&Cx()){c=0;$p=11;continue _;}if(CV()
==1&&Cx()){c=1;$p=14;continue _;}if(CV()!=2)continue;if(!Cx())continue;else break;}continue _;case 17:ADT(a,b);if(C()){break _;}while(true){if(Bg()==a.o.gk.bI){b=a.f;d=En(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()==a.o.ga.bI)Eb(a.o,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp
?1:0;$p=10;continue _;}Eu(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()!=a.o.ft.bI)continue;else{b=E6(a.f.K);continue _;}}$p=9;continue _;case 18:AE8(b,c,e,f);if(C()){break _;}if(a.bs){a.dC=B$();return;}b=a.c6;$p=21;continue _;case 19:X4(b);if(C()){break _;}if(a.bs){if(a.bs){a.dC=B$();return;}b=a.c6;$p=21;continue _;}b=a.B;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 20:AQs(b,
d,c);if(C()){break _;}while(true){e=0;while(e<9){if(Bg()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bg()==a.o.ga.bI)Eb(a.o,4,!BN(42)&&!BN(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B9(0)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B9(1)&&(a.bN-a.co|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B9(0)&&a.bp?1:0;$p=10;continue _;}Eu(a.f,Bg(),CU());if(!CU())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bg()==1)break;if(a.cB instanceof Du){Bg();Bg();}if(Bg()==33&&BN(6))
{a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bg()==a.o.ft.bI){b=E6(a.f.K);$p=17;continue _;}if(Bg()!=a.o.gk.bI)continue;else{b=a.f;d=En(a.f.K,a.f.K.bL,1);c=0;continue _;}}$p=9;continue _;case 21:AAW(b);if(C()){break _;}a.dC=B$();return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function GI(a){return 0;}
function AHU(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:ABJ(a,c);if(C()){break _;}c=new F0;d=GB(new DB);$p=2;case 2:QY(c,b,d);if(C()){break _;}if(!c.tF){b=B(180);$p=3;continue _;}b=B(181);$p=4;continue _;case 3:AF1(a,c,b);if(C()){break _;}return;case 4:AF1(a,c,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ABJ(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=B(3);$p=1;case 1:AF1(a,b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AF1(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.B!==null){d=a.B;e=a.is;$p=1;continue _;}a.B=b;if(b===null){a.dC=Long_ZERO;return;}b.C6=a.e$;a.f=null;b.bi=a.f;$p=2;continue _;case 1:AJf(d,e);if(C()){break _;}a.B=b;if(b===null){a.dC=Long_ZERO;return;}b.C6=a.e$;a.f=null;b.bi=a.f;$p=2;case 2:ANZ(a,c);if(C()){break _;}if(a.f===null){a.f=A6F(a,b,a.k2);c=a.f;$p=3;continue _;}a.f.hY=V2(a.o);if(a.dY!==null)Q1(a.dY,
b);if(a.c6!==null)O1(a.c6,b);b.bi=a.f;$p=4;continue _;case 3:AK5(c);if(C()){break _;}Rd(a.cB,a.f);a.f.hY=V2(a.o);if(a.dY!==null)Q1(a.dY,b);if(a.c6!==null)O1(a.c6,b);b.bi=a.f;$p=4;case 4:AGn(b);if(C()){break _;}if(!b.tF){a.dC=Long_ZERO;return;}c=a.is;$p=5;case 5:AJf(b,c);if(C()){break _;}a.dC=Long_ZERO;return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ANZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOZ(a.is,b);b=a.is;c=B(182);$p=1;case 1:AR3(b,c);if(C()){break _;}d=128;e=289;f=(-128);g=f;while(g<=d){h=a.B.fj;i=a.B.fi;if(a.B.bi!==null){h=a.B.bi.d|0;i=a.B.bi.e|0;}j=f;if(j<=d){b=a.is;k=0+1|0;l=(0*100|0)/e|0;$p=4;continue _;}g=g+16|0;}b=a.is;c=B(183);$p=2;case 2:AR3(b,
c);if(C()){break _;}l=2000;BeT=1;d=0;if(d>=l){BeT=0;return;}b=a.B;m=1;$p=3;case 3:ABp(b,m);if(C()){break _;}d=d+1|0;if(d>=l){BeT=0;return;}b=a.B;m=1;continue _;case 4:XH(b,l);if(C()){break _;}b=a.B;l=h+g|0;m=64;n=i+j|0;$p=5;case 5:ACv(b,l,m,n);if(C()){break _;}b=a.B;$p=6;case 6:$z=AIj(b);if(C()){break _;}l=$z;if(l){b=a.B;continue _;}j=j+16|0;m=k;while(true){if(j<=d){b=a.is;k=m+1|0;l=(m*100|0)/e|0;$p=4;continue _;}g=g+16|0;if(g>d)break;h=a.B.fj;i=a.B.fi;if(a.B.bi!==null){h=a.B.bi.d|0;i=a.B.bi.e|0;}j=f;}b=a.is;c
=B(183);$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Mi(a){return ALi(a.dY);}
function Om(a){return X2(a.dY);}
function ML(a){var b;b=new S;V(b);return T(H(H(H(H(b,B(184)),Xx(a.c6)),B(185)),AN8(a.B)));}
function ASu(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.f!==null&&a.B!==null){b=a.f;$p=5;continue _;}b=a.B;$p=1;case 1:AP3(b);if(C()){break _;}a.f=A6F(a,a.B,a.k2);b=a.f;$p=2;case 2:AK5(b);if(C()){break _;}Rd(a.cB,a.f);if(a.B!==null){a.B.bi=a.f;b=a.B;$p=4;continue _;}a.f.hY=V2(a.o);b=B(186);$p=3;case 3:ANZ(a,b);if(C()){break _;}return;case 4:AGn(b);if(C()){break _;}a.f.hY=V2(a.o);b=B(186);$p=3;continue _;case 5:Ca(b);if(C()){break _;}b=a.B;$p=1;continue _;default:
E$();}}C3().s(a,b,$p);}
function AIE(){return Bc7;}
function ZY(){BeF=$rt_createLongArray(512);BeG=0;}
function ZE(){D.call(this);}
function BeU(){var a=new ZE();A24(a);return a;}
function A24(a){return;}
function Oh(){var b,c;Bd();b=document.pointerLockElement!=null?1:0;c=Bef;Bef=b;if(!c&&b){BdV=0.0;BdW=0.0;}a:{b:{if(Bd0){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AUT(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bd();ANz(BdF);b=BdD;c=BdE;d=BdC.width;e=BdC.height;b.drawImage(c,0.0,0.0,d,e);f=BdC.clientWidth;g=BdC.clientHeight;if(!(f==BdX&&g==BdY)){BdX=f;BdY=g;c=BdE;h=f;c.width=h;c=BdE;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof E1){}else{throw $$e;}}return;case 1:a:{try{AKB(i);if
(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof E1){}else{throw $$e;}}}return;default:E$();}}C3().s(b,c,d,e,f,g,h,i,$p);}
function Ml(){var a=this;D.call(a);a.ok=null;a.F2=null;a.Gy=null;}
var BeV=null;function Bbf(){Bbf=Bt(Ml);A_z();}
function A_z(){var b;BeV=Ci();b=BeV;L();U(b,BeS);U(BeV,BeW);U(BeV,BeX);U(BeV,BeP);U(BeV,BeY);U(BeV,BeZ);U(BeV,Be0);U(BeV,Be1);U(BeV,BeR);U(BeV,Be2);U(BeV,Be3);U(BeV,Be4);U(BeV,Be5);U(BeV,Be6);U(BeV,Be7);U(BeV,Be8);U(BeV,Be9);U(BeV,Be$);U(BeV,Be_);U(BeV,Bfa);U(BeV,Bfb);U(BeV,Bfc);U(BeV,Bfd);U(BeV,Bfe);U(BeV,Bff);U(BeV,Bfg);U(BeV,Bfh);U(BeV,Bfi);ABL(Dz(),BeV.s);}
function Gp(){var a=this;D.call(a);a.JE=Long_ZERO;a.Ee=0;a.DM=Long_ZERO;a.w0=0;a.mT=null;a.CR=null;a.FN=null;a.wC=0;a.yB=null;}
var Bfj=null;var Bc2=null;var Bfk=Long_ZERO;var Bfl=0;function Bfm(){var a=new Gp();AHz(a);return a;}
function Bcc(a){var b=new Gp();TQ(b,a);return b;}
function A_3(a,b){var c=new Gp();N4(c,a,b);return c;}
function AHz(a){N4(a,null,null);}
function TQ(a,b){N4(a,null,b);}
function N4(a,b,c){var d;a.mT=new D;a.wC=1;a.FN=c;a.yB=b;d=Bfk;Bfk=Long_add(d,Long_fromInt(1));a.JE=d;}
function Tk(a){var b;b=new Wx;b.zQ=a;AZK(b);}
function Fv(b){if(Bc2!==b)Bc2=b;Bc2.DM=B$();}
function ARk(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.yB===null)return;b=a.yB;$p=1;case 1:Yi(b);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function ASH(){return Bc2;}
function A1i(a,b){a.Ee=b;}
function XB(){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=Bc2;c=b.w0+1|0;b.w0=c;if(c<30)return;Bc2.w0=0;if(Long_ge(Long_add(b.DM,Long_fromInt(100)),B$()))return;$p=1;case 1:ALM(b);if(C()){break _;}return;default:E$();}}C3().s(b,c,$p);}
function ALM(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Go=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaD(callback);return thread.suspend(function(){try{A3T(b,callback);}catch($e){callback.IV($rt_exception($e));}});}
function A3T(b,c){var d;d=new SY;d.B8=b;d.B7=c;QZ(d);}
function AKB(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Go=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaD(callback);return thread.suspend(function(){try{AVo(b,callback);}catch($e){callback.IV($rt_exception($e));}});}
function AVo(b,c){var d,e;d=Bc2;e=new Pg;e.wo=d;e.A6=c;e.Jo=AFD(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.CR=e;}
function Y6(){Bfj=Bcc(B(187));Bc2=Bfj;Bfk=Long_fromInt(1);Bfl=1;}
function DP(){}
function W6(){D.call(this);}
function Bfn(){var a=new W6();A2i(a);return a;}
function A2i(a){return;}
function ASy(a,b){b.preventDefault();b.stopPropagation();}
function ACh(a,b){ASy(a,b);}
function A$T(a,b){ACh(a,b);}
function Xa(){D.call(this);}
function Bfo(){var a=new Xa();AZe(a);return a;}
function AZe(a){return;}
function ARB(a,b){var c,d;c=b.button;d=RL();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;Fx(MO(),b);b.preventDefault();b.stopPropagation();Mt();}
function AIT(a,b){ARB(a,b);}
function AXE(a,b){AIT(a,b);}
function Xb(){D.call(this);}
function Bfp(){var a=new Xb();AXd(a);return a;}
function AXd(a){return;}
function AQo(a,b){var c,d;c=b.button;d=RL();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;Fx(MO(),b);b.preventDefault();b.stopPropagation();}
function ZP(a,b){AQo(a,b);}
function A3y(a,b){ZP(a,b);}
function W$(){D.call(this);}
function Bfq(){var a=new W$();A44(a);return a;}
function A44(a){return;}
function AOD(a,b){var c;Bd();BdT=b.offsetX;BdU=BdC.clientHeight-b.offsetY|0;c=b.movementX;BdV=BdV+c;c= -b.movementY;BdW=BdW+c;b.preventDefault();b.stopPropagation();}
function ADk(a,b){AOD(a,b);}
function ASJ(a,b){ADk(a,b);}
function W_(){D.call(this);}
function Bfr(){var a=new W_();A_L(a);return a;}
function A_L(a){return;}
function AEH(a,b){P1().data[S5(QC(b))]=1;Fx(NM(),b);b.preventDefault();b.stopPropagation();Mt();}
function AQy(a,b){AEH(a,b);}
function A3J(a,b){AQy(a,b);}
function W8(){D.call(this);}
function Bfs(){var a=new W8();A37(a);return a;}
function A37(a){return;}
function ZA(a,b){P1().data[S5(QC(b))]=0;Fx(NM(),b);b.preventDefault();b.stopPropagation();}
function XW(a,b){ZA(a,b);}
function A2g(a,b){XW(a,b);}
function W9(){D.call(this);}
function Bft(){var a=new W9();AXs(a);return a;}
function AXs(a){return;}
function AR7(a,b){Bd();if(BdZ&&(b.repeat?1:0))Fx(NM(),b);b.preventDefault();b.stopPropagation();}
function AKZ(a,b){AR7(a,b);}
function A6u(a,b){AKZ(a,b);}
function W7(){D.call(this);}
function Bfu(){var a=new W7();A22(a);return a;}
function A22(a){return;}
function AFj(a,b){Fx(MO(),b);b.preventDefault();b.stopPropagation();}
function ACw(a,b){AFj(a,b);}
function AUe(a,b){ACw(a,b);}
function Qy(){D.call(this);}
function Bfv(){var a=new Qy();A1$(a);return a;}
function A1$(a){return;}
function AFl(a,b){ST(0);}
function AMp(a,b){AFl(a,b);}
function A66(a,b){AMp(a,b);}
function Qx(){D.call(this);}
function Bfw(){var a=new Qx();A31(a);return a;}
function A31(a){return;}
function AGL(a,b){ST(1);Mt();}
function AMo(a,b){AGL(a,b);}
function AYH(a,b){AMo(a,b);}
function NT(){D.call(this);}
var Bfx=null;var BeC=null;function Bfy(){var a=new NT();AD7(a);return a;}
function AD7(a){return;}
function AJL(){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(188);$p=1;case 1:$z=A3E(b);if(C()){break _;}b=$z;if(b===null){Bfx=B(171);return Bfz;}if(b.E2)return BfA;if(!b.Fd&&b.xT!==null){BeC=b.xT;return BfB;}Bfx=b.uB!==null?b.uB:B(189);return Bfz;default:E$();}}C3().s(b,$p);}
function AI$(b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=BeC;$p=1;case 1:$z=AUq(c,b);if(C()){break _;}c=$z;if(c!==BfC?0:1)return;d=LH(b,47);if(d>0){c=Ew(b,0,d);$p=3;continue _;}c=BeC;d=1;e=new ArrayBuffer(0);$p=2;case 2:AXO(c,b,d,e);if(C()){break _;}return;case 3:AI$(c);if(C()){break _;}c=BeC;d=1;e=new ArrayBuffer(0);$p=2;continue _;default:E$();}}C3().s(b,c,d,e,$p);}
function AHB(){Bfx=B(3);BeC=null;}
function AAU(){D.call(this);}
function AYo(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function UU(){D.call(this);}
var BeB=null;function BfD(){var a=new UU();AQr(a);return a;}
function AQr(a){return;}
function AL$(b){var c,d,e,f,g,h,i,j,k,l,m;c=Ul(b);d=OY(c);e=$rt_createByteArray(8);NQ(d,e);if(!DC(B(190),A23(e,X5(B(24))))){c=new B1;Bl(c,B(191));M(c);}GW(d);f=new P0;d=new WO;g=new Uj;OP(g);g.rT=0;h=R4(g,15,0);if(h){c=new P4;f=new S;V(f);Bl(c,T(H(H(Be(f,h),B(12)),g.b9)));M(c);}R5(d,c);d.qi=0;d.oI=0;d.EA=1;d.Ed=0;d.wF=$rt_createByteArray(1);d.GX=$rt_createByteArray(512);d.g5=g;d.oj=$rt_createByteArray(512);d.EA=1;d.Ed=1;AIs(f,d);g=BaU();while(true){d=GW(f);if(!DC(B(192),d)){if(AKy(f)<=0&&DC(B(193),d))return;c
=new B1;Bl(c,B(191));M(c);}i=GW(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);NQ(f,j);l=H8(f);m=$rt_createByteArray(l);NQ(f,m);if(D0(BeB,i))continue;a:{ADR(g,m,0,l);AL8(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){l=0;while(l<h){if(b[l]!=e[l]){h=0;break a;}l=l+1|0;}h=1;break a;}}h=0;}}if(!h){c=new B1;f=new S;V(f);Bl(c,T(H(H(f,B(194)),i)));M(c);}BR(BeB,i,m);if(!DC(B(195),GW(f)))break;}c=new B1;Bl(c,B(191));M(c);}
function Zc(){BeB=De();}
function B1(){BE.call(this);}
function BfE(){var a=new B1();A3Q(a);return a;}
function A3Q(a){O(a);}
function Lh(){HN.call(this);}
function BfF(){var a=new Lh();A6g(a);return a;}
function A6g(a){V(a);}
function A0L(a,b){Dx(a,b);return a;}
function A18(a,b,c,d){IX(a,b,c,d);return a;}
function AVB(a,b){Hl(a,b);return a;}
function A7A(a,b,c,d,e){J6(a,b,c,d,e);return a;}
function A$P(a,b,c){K0(a,b,c);return a;}
function AVW(a,b,c,d,e){J6(a,b,c,d,e);return a;}
function A4a(a,b,c,d){IX(a,b,c,d);return a;}
function AIb(a,b){var c;if(b>=0&&b<a.bY)return a.O.data[b];c=new BO;O(c);M(c);}
function Ox(a){return a.bY;}
function A4h(a){return T(a);}
function A4r(a,b){MY(a,b);}
function A96(a,b,c){K0(a,b,c);return a;}
function FB(){}
function V1(){D.call(this);}
function BfG(){var a=new V1();AZi(a);return a;}
function AZi(a){return;}
function Fi(){D.call(this);this.l6=0;}
var BfH=null;var BfI=null;var BfJ=null;var BfK=null;var BfL=null;var BfM=null;function A2f(a){var b=new Fi();AAP(b,a);return b;}
function AAP(a,b){a.l6=b;}
function BI(b){var c;if(b>=BfK.data.length)return A2f(b);c=BfK.data[b];if(c===null){c=A2f(b);BfK.data[b]=c;}return c;}
function A$X(a,b){if(a===b)return 1;return b instanceof Fi&&b.l6==a.l6?1:0;}
function A$F(a){return a.l6;}
function SD(b){var c,d;c=new B4;d=$rt_createCharArray(1);d.data[0]=b;To(c,d);return c;}
function Mw(b){return b>=65536&&b<=1114111?1:0;}
function Dt(b){return (b&64512)!=55296?0:1;}
function DS(b){return (b&64512)!=56320?0:1;}
function Or(b){return !Dt(b)&&!DS(b)?0:1;}
function J5(b,c){return Dt(b)&&DS(c)?1:0;}
function EJ(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IE(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ia(b){return (56320|b&1023)&65535;}
function EU(b){return GQ(b)&65535;}
function GQ(b){return AP0(b).toLowerCase().charCodeAt(0);}
function FF(b){return GP(b)&65535;}
function GP(b){return AP0(b).toUpperCase().charCodeAt(0);}
function Wh(b,c){if(c>=2&&c<=36){b=Ud(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Ud(b){var c,d,e,f,g,h,i,j,k;if(BfI===null){if(BfL===null)BfL=AMd();c=(BfL.value!==null?$rt_str(BfL.value):null);d=new RV;d.CB=Nv(c);e=Yl(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=Yl(d);h=h+1|0;}BfI=f;}f=BfI.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=R(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function I2(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Ix(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=IE(b);d[1]=Ia(b);return c;}
function Do(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&Or(b&65535))return 19;if(BfJ===null){if(BfM===null)BfM=AHI();BfJ=A2I((BfM.value!==null?$rt_str(BfM.value):null));}d=BfJ.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.Am)e=f+1|0;else{if(b>=g.xd)return g.C2.data[b-g.xd|0];c=f-1|0;}}return 0;}
function Ld(b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Iv(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Do(b)!=16?0:1;}
function Uu(b){switch(Do(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Qf(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Uu(b);}return 1;}
function ADc(a,b){return a.l6-b.l6|0;}
function A29(a,b){return ADc(a,b);}
function AIR(){BfH=F($rt_charcls());BfK=J(Fi,128);}
function AMd(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function AHI(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function IZ(){var a=this;D.call(a);a.cX=null;a.DT=0;}
function AJ1(a){return 1;}
function A84(a,b){return;}
function UQ(){var a=this;IZ.call(a);a.vZ=0;a.v1=0;a.v0=0;a.hq=0.0;a.mQ=0.0;a.ol=0.0;a.nf=0;a.Bd=null;a.Bz=null;}
function Rd(a,b){b.v=(-180.0);}
function A$l(a){return;}
function AFx(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cX.B;$p=1;case 1:$z=ACv(e,b,c,d);if(C()){break _;}f=$z;e=a.cX.B;$p=2;case 2:$z=AEI(e,b,c,d);if(C()){break _;}g=$z;e=a.cX.c6;$p=3;case 3:AEC(e,b,c,d);if(C()){break _;}e=a.cX.B;L();h=BeM.data;$p=4;case 4:$z=ACv(e,b,c,d);if(C()){break _;}i=$z;j=h[i];$p=5;case 5:$z=AEI(e,b,c,d);if(C()){break _;}i=
$z;k=0;$p=6;case 6:$z=APv(e,b,c,d,k);if(C()){break _;}k=$z;if(j!==null&&k){$p=7;continue _;}e=Kq(a.cX.f);if(e!==null){QG(e,f,b,c,d);if(!e.p)Jz(a.cX.f);}if(k&&M8(a.cX.f,BeM.data[f])){e=BeM.data[f];j=a.cX.B;$p=8;continue _;}return k;case 7:j.ns(e,b,c,d,i);if(C()){break _;}e=Kq(a.cX.f);if(e!==null){QG(e,f,b,c,d);if(!e.p)Jz(a.cX.f);}if(k&&M8(a.cX.f,BeM.data[f])){e=BeM.data[f];j=a.cX.B;$p=8;continue _;}return k;case 8:e.IM(j,b,c,d,g);if(C()){break _;}return k;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AE2(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cX.B;$p=1;case 1:$z=ACv(e,b,c,d);if(C()){break _;}f=$z;if(f>0&&a.hq===0.0){L();e=BeM.data[f];g=a.cX.B;h=a.cX.f;$p=3;continue _;}if(f<=0)return;L();e=BeM.data[f];g=a.cX.f;$p=2;case 2:$z=ABd(e,g);if(C()){break _;}i=$z;if(i<1.0)return;$p=4;continue _;case 3:e.q9(g,b,c,d,h);if(C()){break _;}if(f<=0)return;L();e=BeM.data[f];g
=a.cX.f;$p=2;continue _;case 4:AFx(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALO(a){a.hq=0.0;a.nf=0;}
function YM(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.nf>0)a.nf=a.nf-1|0;else{if(b==a.vZ&&c==a.v1&&d==a.v0){f=a.cX.B;$p=1;continue _;}a.hq=0.0;a.mQ=0.0;a.ol=0.0;a.vZ=b;a.v1=c;a.v0=d;}return;case 1:$z=ACv(f,b,c,d);if(C()){break _;}g=$z;if(!g)return;L();f=BeM.data[g];h=a.hq;i=a.cX.f;$p=2;case 2:$z=ABd(f,i);if(C()){break _;}j=$z;a.hq=h+j;a.ol=a.ol+1.0;if(a.hq<
1.0)return;$p=3;case 3:AFx(a,b,c,d);if(C()){break _;}a.hq=0.0;a.mQ=0.0;a.ol=0.0;a.nf=5;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function GS(a,b){var c;if(a.hq<=0.0){a.cX.nZ.El=0.0;a.cX.dY.tJ=0.0;}else{c=a.mQ+(a.hq-a.mQ)*b;a.cX.nZ.El=c;a.cX.dY.tJ=c;}}
function A1h(a){return 4.0;}
function A49(a,b){return;}
function AI0(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mQ=a.hq;b=a.Bd;c=a.cX.B;$p=1;case 1:ABz(b,c);if(C()){break _;}b=a.Bz;c=a.cX.B;$p=2;case 2:ABz(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function SC(){var a=this;D.call(a);a.c8=0.0;a.CK=0.0;a.i7=0;a.cY=0.0;a.CV=0.0;a.lM=0.0;a.sR=Long_ZERO;a.rU=Long_ZERO;a.nF=0.0;}
function FQ(a){var b,c,d,e,f;b=B$();c=Long_sub(b,a.sR);d=Long_div(EH(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.rU));a.nF=a.nF+(e-a.nF)*0.20000000298023224;a.sR=b;a.rU=d;}if(Long_lt(c,Long_ZERO)){a.sR=b;a.rU=d;}f=Long_toNumber(d)/1000.0;e=(f-a.CK)*a.nF;a.CK=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.lM=a.lM+e*a.CV*a.c8;a.i7=a.lM|0;a.lM=a.lM-a.i7;if(a.i7>10)a.i7=10;a.cY=a.lM;}
function VG(){}
function R2(){var a=this;D.call(a);a.n3=null;a.fH=null;a.l_=null;a.kP=Long_ZERO;a.lP=0;}
function AOZ(a,b){a.lP=0;RR(a,b);}
function YI(a,b){a.lP=1;RR(a,a.l_);}
function RR(a,b){var c,d,e;a:{if(!a.fH.gS){if(a.lP)break a;b=new IK;O(b);M(b);}a.l_=b;c=FJ(a.fH.cd,a.fH.bA);d=c.fN;e=c.fJ;D5(256);C_(5889);C9();Ip(0.0,d,e,0.0,100.0,300.0);C_(5888);C9();Bw(0.0,0.0,(-200.0));}}
function AR3(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fH.gS){if(a.lP)return;b=new IK;O(b);M(b);}a.kP=Long_ZERO;a.n3=b;c=(-1);$p=1;case 1:XH(a,c);if(C()){break _;}a.kP=Long_ZERO;return;default:E$();}}C3().s(a,b,c,$p);}
function AR1(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fH.gS){if(a.lP)return;b=new IK;O(b);M(b);}a.kP=Long_ZERO;a.n3=c;a.l_=b;d=(-1);$p=1;case 1:XH(a,d);if(C()){break _;}a.kP=Long_ZERO;return;default:E$();}}C3().s(a,b,c,d,$p);}
function XH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.fH.gS){if(a.lP)break a;c=new IK;O(c);M(c);}d=B$();if(Long_ge(Long_sub(d,a.kP),Long_fromInt(20))){a.kP=d;c=FJ(a.fH.cd,a.fH.bA);e=c.fN;f=c.fJ;D5(256);C_(5889);C9();g=e;h=f;Ip(0.0,g,h,0.0,100.0,300.0);C_(5888);C9();Bw(0.0,
0.0,(-200.0));D5(16640);BA();i=BeI;c=a.fH.bo;j=B(165);$p=1;continue _;}}return;case 1:$z=AHr(c,j);if(C()){break _;}k=$z;Cp(3553,k);Bz(i);ES(i,4210752);l=f/32.0;G(i,0.0,h,0.0,0.0,l);m=e/32.0;G(i,g,h,0.0,m,l);G(i,g,0.0,0.0,m,0.0);G(i,0.0,0.0,0.0,0.0,0.0);Br(i);if(b>=0){n=(e/2|0)-50|0;o=(f/2|0)+16|0;Bc(3553);Bz(i);ES(i,8421504);g=n;p=o;Bf(i,g,p,0.0);m=o+2|0;Bf(i,g,m,0.0);q=n+100|0;Bf(i,q,m,0.0);Bf(i,q,p,0.0);ES(i,8454016);Bf(i,g,p,0.0);Bf(i,g,m,0.0);q=n+b|0;Bf(i,q,m,0.0);Bf(i,q,p,0.0);Br(i);Ba(3553);}c=a.fH.e$;i
=a.l_;b=(e-Dw(a.fH.e$,a.l_)|0)/2|0;r=(f/2|0)-4|0;Cy(c,i,b,r-16|0,16777215);Cy(a.fH.e$,a.n3,(e-Dw(a.fH.e$,a.n3)|0)/2|0,r+8|0,16777215);$p=2;case 2:AUT();if(C()){break _;}try{$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){}else{throw $$e;}}return;case 3:b:{try{XB();if(C()){break _;}break b;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){}else{throw $$e;}}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AFM(){var a=this;D.call(a);a.u=null;a.qw=0;a.lY=0.0;a.iK=null;a.tL=0;a.p7=null;a.lp=null;a.H9=0;a.H8=0;a.p0=null;a.dI=0.0;a.d6=0.0;a.dW=0.0;a.od=0.0;a.mc=0.0;}
function BbN(a){var b=new AFM();AT6(b,a);return b;}
function AT6(a,b){var c;a.qw=0;a.lY=0.0;a.p7=null;a.lp=new DB;a.H9=0;a.H8=0;a.p0=H3(16);a.u=b;c=new Pa;c.eT=null;c.jb=0.0;c.q_=0.0;c.iz=0;c.jP=0;c.Aa=Ki();c.cP=b;a.iK=c;}
function AIM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.od=a.mc;b=a.u.B;c=K(a.u.f.d);d=K(a.u.f.j);e=K(a.u.f.e);$p=1;case 1:$z=ANg(b,c,d,e);if(C()){break _;}f=$z;g=(3-a.u.o.hi|0)/3.0;h=f*(1.0-g)+g;a.mc=a.mc+(h-a.mc)*0.10000000149011612;a.tL=a.tL+1|0;AI9(a.iK);if(a.u.cU)
{b=a.u.f;i=a.u.B;d=K(b.d);j=K(b.j);k=K(b.e);l=4;m=0;n=63;e=R(64,j+4|0);j=R(64,j-4|0);o=64.0999984741211;if(m<50){p=(d+E(a.lp,9)|0)-l|0;q=(k+E(a.lp,9)|0)-l|0;$p=2;continue _;}}return;case 2:$z=ACv(i,p,n,q);if(C()){break _;}c=$z;if(e<=0&&j>=0){f=N(a.lp);g=N(a.lp);if(c>0){b=a.u.c6;r=new JM;s=p+f;L();TM(r,i,s,o-BeM.data[c].cM,q+g);Em(b,r);}}m=m+1|0;if(m>=50)return;p=(d+E(a.lp,9)|0)-l|0;q=(k+E(a.lp,9)|0)-l|0;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function NG(a,b){var c,d,e,f;c=a.u.f;d=c.bS;e=c.d-c.bS;f=b;return BY(d+e*f,c.cS+(c.j-c.cS)*f,c.bR+(c.e-c.bR)*f);}
function ALS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=c.T+(c.I-c.T)*b;e=c.P+(c.v-c.P)*b;f=NG(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=BC(g);i=Bq(g);g= -d*0.01745329238474369;j= -BC(g);g=Bq(g);k=i*j;l
=h*j;m=4.0;n=k;o=n*m;p=g;q=p*m;r=l;s=Dk(f,o,q,r*m);t=a.u;u=a.u.B;$p=1;case 1:$z=AJj(u,f,s);if(C()){break _;}u=$z;t.cf=u;f=NG(a,b);if(a.u.cf!==null)m=DI(a.u.cf.gy,f);if(a.u.cB instanceof Du)m=32.0;else if(m>3.0)m=3.0;n=n*m;p=p*m;r=r*m;s=Dk(f,n,p,r);a.p7=null;t=a.u.B;u=Je(c.L,n,p,r);$p=2;case 2:$z=ADJ(t,c,u);if(C()){break _;}t=$z;n=0.0;v=0;while(v<t.s){u=Z(t,v);if(u.lw()){w=QR(Dv(u.L,0.10000000149011612,0.10000000149011612,0.10000000149011612),f,s);if(w!==null){p=DI(f,w.gy);if(!(p>=n&&n!==0.0)){a.p7=u;n=p;}}}v
=v+1|0;}if(a.p7!==null&&!(a.u.cB instanceof Du))a.u.cf=A0_(a.p7);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function L6(a,b){var c,d,e;c=a.u.f;d=c.dF-b;if(c.bT<=0)Bv(40.0-8000.0/(c.c2+b+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.EM;b=Bq(b*b*b*b*3.1415927410125732);e=c.kH;Bv( -e,0.0,1.0,0.0);Bv( -b*14.0,0.0,0.0,1.0);Bv(e,0.0,1.0,0.0);}}
function IL(a,b){var c,d,e,f,g;if(!a.u.o.cC){c=a.u.f;d=c.hd-c.tY;e=c.hd+d*b;f=c.qz+(c.kX-c.qz)*b;g=c.k0+(c.jm-c.k0)*b;d=e*3.1415927410125732;Bw(Bq(d)*f*0.5, -HY(BC(d)*f),0.0);Bv(Bq(d)*f*3.0,0.0,0.0,1.0);Bv(HY(BC(d+0.20000000298023224)*f)*5.0,1.0,0.0,0.0);Bv(g,1.0,0.0,0.0);}}
function AH7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=c.bS;e=c.d-c.bS;f=b;g=d+e*f;h=c.cS+(c.j-c.cS)*f;i=c.bR+(c.e-c.bR)*f;if(!a.u.o.cC)Bw(0.0,0.0,(-0.10000000149011612));else{j=4.0;d= -Bq(c.v/180.0*3.1415927410125732)*BC(c.I
/180.0*3.1415927410125732)*j;e=BC(c.v/180.0*3.1415927410125732)*BC(c.I/180.0*3.1415927410125732)*j;f= -Bq(c.I/180.0*3.1415927410125732)*j;k=0;l=g-d;d=h-f;f=i-e;if(k<8){m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.u.B;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);$p=1;continue _;}Bw(0.0,0.0, -j);}Bv(c.T+(c.I-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.v-c.P)*b+180.0,0.0,1.0,0.0);return;case 1:$z=AJj(p,u,v);if(C()){break _;}u
=$z;if(u!==null){q=DI(u.gy,BY(g,h,i));if(q<j)j=q;}k=k+1|0;if(k>=8){Bw(0.0,0.0, -j);Bv(c.T+(c.I-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.v-c.P)*b+180.0,0.0,1.0,0.0);return;}m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.u.B;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AFv(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lY=256>>a.u.o.hi;C_(5889);C9();if(a.u.o.dy)Bw( -((c*2|0)-1|0)*0.07000000029802322,0.0,0.0);d=a.u.f;e=70.0;f=BfN;$p=1;case 1:$z=AGE(d,f);if(C()){break _;}g=$z;if(g)e=60.0;if(d.bT<=0)e=e/((1.0-500.0/(d.c2+b+500.0))*2.0+1.0);h=a.u.cd/a.u.bA;i=a.lY;f=GO();j=e*0.01745329238474369*0.5;k=GG(j)/Gt(j);f.eu
=k/h;f.es=0.0;f.et=0.0;f.er=0.0;f.ex=0.0;f.ey=k;f.ev=0.0;f.ew=0.0;f.eC=0.0;f.eA=0.0;h=i+0.05000000074505806;k=i-0.05000000074505806;f.eB=h/k;f.ez=(-1.0);f.gW=0.0;f.gX=0.0;f.gU=2.0*i*0.05000000074505806/k;f.gV=0.0;C_(5888);C9();if(a.u.o.dy)Bw(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);L6(a,b);if(a.u.o.iv)IL(a,b);$p=2;case 2:AH7(a,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFK(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qw&&!Oh()){c=a.u;$p=1;continue _;}a.qw=Oh();Bd();d=BdV;BdV=0.0;e=d|0;d=BdW;BdW=0.0;f=d|0;g=1;if(a.u.o.m7)g=(-1);if(a.u.bp&&a.u.B!==null)Xk(a.u.f,e,Bj(f,g));if(!a.u.h8){c=FJ(a.u.cd,a.u.bA);f=c.fN;e=c.fJ;h=Bj(BdT,f)/a.u.cd|0;i=(e-(Bj(BdU,e)/a.u.bA|0)|0)-1|0;if(a.u.B!==null){$p=2;continue _;}FP(0,0,a.u.cd,a.u.bA);HB(0.0,
0.0,0.0,0.0);D5(16640);C_(5889);C9();C_(5888);C9();LD(a);if(a.u.D!==null){D5(256);c=a.u.D;$p=3;continue _;}}return;case 1:AK9(c);if(C()){break _;}a.qw=Oh();Bd();d=BdV;BdV=0.0;e=d|0;d=BdW;BdW=0.0;f=d|0;g=1;if(a.u.o.m7)g=(-1);if(a.u.bp&&a.u.B!==null)Xk(a.u.f,e,Bj(f,g));if(!a.u.h8){c=FJ(a.u.cd,a.u.bA);f=c.fN;e=c.fJ;h=Bj(BdT,f)/a.u.cd|0;i=(e-(Bj(BdU,e)/a.u.bA|0)|0)-1|0;if(a.u.B!==null){$p=2;continue _;}FP(0,0,a.u.cd,a.u.bA);HB(0.0,0.0,0.0,0.0);D5(16640);C_(5889);C9();C_(5888);C9();LD(a);if(a.u.D!==null){D5(256);c
=a.u.D;$p=3;continue _;}}return;case 2:AAe(a,b);if(C()){break _;}c=a.u.nZ;g=a.u.D===null?0:1;$p=4;continue _;case 3:c.hP(h,i,b);if(C()){break _;}return;case 4:API(c,b,g,h,i);if(C()){break _;}if(a.u.D===null)return;D5(256);c=a.u.D;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAe(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ALS(a,b);if(C()){break _;}c=a.u.f;d=a.u.dY;e=a.u.c6;f=c.cs;g=c.d-c.cs;h=b;i=f+g*h;f=c.b7+(c.j-c.b7)*h;g=c.ct+(c.e-c.ct)*h;j=0;if(j>=2){DO(1,1,1,0);return;}if(a.u.o.dy){if(j)DO(1,0,0,0);else DO(0,1,1,0);}FP(0,0,a.u.cd,a.u.bA);$p=2;case 2:AD0(a,
b);if(C()){break _;}D5(16640);Ba(2884);$p=3;case 3:AFv(a,b,j);if(C()){break _;}RT();if(a.u.o.hi<2){k=(-1);$p=4;continue _;}if(!a.u.o.du)Ba(2912);k=1;$p=6;continue _;case 4:ASe(a,k);if(C()){break _;}$p=5;case 5:ADa(d,b);if(C()){break _;}if(!a.u.o.du)Ba(2912);k=1;$p=6;case 6:ASe(a,k);if(C()){break _;}l=Bbv();AOj(l,i,f,g);ARH(a.u.dY,l,b);m=a.u.dY;k=0;$p=7;case 7:AIh(m,c,k);if(C()){break _;}k=0;$p=8;case 8:ASe(a,k);if(C()){break _;}if(!a.u.o.du)Ba(2912);k=3553;m=a.u.bo;n=B(179);$p=9;case 9:$z=AHr(m,n);if(C()){break _;}o
=$z;Cp(k,o);DT();Vp(d,c,0,h);Hy();m=NG(a,b);$p=10;case 10:ACA(d,m,l,b);if(C()){break _;}$p=11;case 11:ABU(e,c,b);if(C()){break _;}DT();k=0;$p=12;case 12:ASe(a,k);if(C()){break _;}$p=13;case 13:ABb(e,c,b);if(C()){break _;}if(a.u.cf!==null){l=BfN;$p=16;continue _;}Df(770,771);k=0;$p=14;case 14:ASe(a,k);if(C()){break _;}Ba(3042);Bc(2884);k=3553;l=a.u.bo;m=B(179);$p=15;case 15:$z=AHr(l,m);if(C()){break _;}o=$z;Cp(k,o);Vp(d,c,1,h);Gw(1);Ba(2884);Bc(3042);if(a.u.cf!==null){l=BfN;$p=17;continue _;}Bc(2912);if(a.u.cU)
{$p=20;continue _;}k=0;$p=23;continue _;case 16:$z=AGE(c,l);if(C()){break _;}k=$z;if(!k){Df(770,771);k=0;$p=14;continue _;}Bc(3008);l=a.u.cf;k=0;m=D$(c.K);$p=18;continue _;case 17:$z=AGE(c,l);if(C()){break _;}k=$z;if(!k){Bc(3008);l=a.u.cf;k=0;m=D$(c.K);$p=21;continue _;}Bc(2912);if(a.u.cU){$p=20;continue _;}k=0;$p=23;continue _;case 18:AFF(d,c,l,k,m,b);if(C()){break _;}l=a.u.cf;k=0;m=D$(c.K);$p=19;case 19:AGd(d,c,l,k,m,b);if(C()){break _;}Ba(3008);Df(770,771);k=0;$p=14;continue _;case 20:XS(a,b);if(C()){break _;}k
=0;$p=23;continue _;case 21:AFF(d,c,l,k,m,b);if(C()){break _;}m=a.u.cf;k=0;l=D$(c.K);$p=22;case 22:AGd(d,c,m,k,l,b);if(C()){break _;}Ba(3008);Bc(2912);if(a.u.cU){$p=20;continue _;}k=0;$p=23;case 23:ASe(a,k);if(C()){break _;}if(!a.u.o.du)Ba(2912);$p=24;case 24:YL(d,b);if(C()){break _;}Bc(2912);k=1;$p=25;case 25:ASe(a,k);if(C()){break _;}D5(256);C9();if(a.u.o.dy)Bw(((j*2|0)-1|0)*0.10000000149011612,0.0,0.0);B3();L6(a,b);if(a.u.o.iv)IL(a,b);if(!a.u.o.cC){l=a.iK;$p=26;continue _;}BD();if(!a.u.o.cC){l=a.iK;$p=27;continue _;}if
(a.u.o.iv)IL(a,b);if(!a.u.o.dy)return;j=j+1|0;if(j>=2){DO(1,1,1,0);return;}if(a.u.o.dy){if(j)DO(1,0,0,0);else DO(0,1,1,0);}FP(0,0,a.u.cd,a.u.bA);$p=2;continue _;case 26:ACW(l,b);if(C()){break _;}BD();if(!a.u.o.cC){l=a.iK;$p=27;continue _;}if(a.u.o.iv)IL(a,b);if(!a.u.o.dy)return;j=j+1|0;if(j>=2){DO(1,1,1,0);return;}if(a.u.o.dy){if(j)DO(1,0,0,0);else DO(0,1,1,0);}FP(0,0,a.u.cd,a.u.bA);$p=2;continue _;case 27:AB9(l,b);if(C()){break _;}L6(a,b);if(a.u.o.iv)IL(a,b);if(!a.u.o.dy)return;j=j+1|0;if(j>=2){DO(1,1,1,0);return;}if
(a.u.o.dy){if(j)DO(1,0,0,0);else DO(0,1,1,0);}FP(0,0,a.u.cd,a.u.bA);$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function XS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=K(c.d);e=K(c.j);f=K(c.e);BA();g=BeI;Bc(2884);Cj(0.0,1.0,0.0);Ba(3042);Df(770,
771);h=3553;i=a.u.bo;j=B(196);$p=1;case 1:$z=AHr(i,j);if(C()){break _;}k=$z;Cp(h,k);k=d-5|0;d=d+5|0;h=f-5|0;l=f+5|0;m=e-5|0;n=e+5|0;e=R(m,64);o=R(n,64);while(k<=d){p=h;while(p<=l){q=e<0?64:m;r=o<0?64:n;if(q!=r){s=((((a.tL+(k*3121|0)|0)+Bj(p,418711)|0)%32|0)+b)/32.0;t=k+0.5-c.d;u=p+0.5-c.e;v=Ce(t*t+u*u)/5.0;BU(1.0,1.0,1.0,(1.0-v*v)*0.699999988079071);Bz(g);u=k+0|0;w=q;x=p+0|0;v=q*2.0/8.0;y=s*2.0;z=v+y;G(g,u,w,x,0.0,z);ba=k+1|0;bb=p+1|0;G(g,ba,w,bb,2.0,z);bc=r;bd=r*2.0/8.0+y;G(g,ba,bc,bb,2.0,bd);G(g,u,bc,x,0.0,
bd);G(g,u,w,bb,0.0,z);G(g,ba,w,x,2.0,z);G(g,ba,bc,x,2.0,bd);G(g,u,bc,bb,0.0,bd);Br(g);}p=p+1|0;}k=k+1|0;}Ba(2884);Bc(3042);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function LD(a){var b,c,d;b=FJ(a.u.cd,a.u.bA);c=b.fN;d=b.fJ;D5(256);C_(5889);C9();Ip(0.0,c,d,0.0,1000.0,3000.0);C_(5888);C9();Bw(0.0,0.0,(-2000.0));}
function AD0(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.B;d=a.u.f;e=1.0-A2M(1.0/(4-a.u.o.hi|0),0.25);f=OR(c,b);g=f.x;h=f.z;i=f.w;j=ADq(c,b);a.dI=j.x;a.d6=j.z;a.dW=j.w;a.dI=a.dI+(g-a.dI)*e;a.d6=a.d6+(h-a.d6)*e;a.dW=a.dW+(i-a.dW)*e;c=BfN;$p=1;case 1:$z=AGE(d,c);if(C()){break _;}k=$z;if(k){a.dI=0.019999999552965164;a.d6
=0.019999999552965164;a.dW=0.20000000298023224;e=a.od+(a.mc-a.od)*b;a.dI=a.dI*e;a.d6=a.d6*e;a.dW=a.dW*e;if(a.u.o.dy){l=(a.dI*30.0+a.d6*59.0+a.dW*11.0)/100.0;m=(a.dI*30.0+a.d6*70.0)/100.0;n=(a.dI*30.0+a.dW*70.0)/100.0;a.dI=l;a.d6=m;a.dW=n;}HB(a.dI,a.d6,a.dW,0.0);return;}c=BfO;$p=2;case 2:$z=AGE(d,c);if(C()){break _;}k=$z;if(k){a.dI=0.6000000238418579;a.d6=0.10000000149011612;a.dW=0.0;}e=a.od+(a.mc-a.od)*b;a.dI=a.dI*e;a.d6=a.d6*e;a.dW=a.dW*e;if(a.u.o.dy){l=(a.dI*30.0+a.d6*59.0+a.dW*11.0)/100.0;m=(a.dI*30.0+a.d6
*70.0)/100.0;n=(a.dI*30.0+a.dW*70.0)/100.0;a.dI=l;a.d6=m;a.dW=n;}HB(a.dI,a.d6,a.dW,0.0);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASe(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=a.dI;e=a.d6;f=a.dW;EB(a.p0);CJ(CJ(CJ(CJ(a.p0,d),e),f),1.0);Gx(a.p0);g=a.p0;BW();BfP=Jr(g);BfQ=Jr(g);BfR=Jr(g);BfS=Jr(g);Cj(0.0,(-1.0),0.0);BU(1.0,1.0,1.0,1.0);g=BfN;$p=1;case 1:$z=AGE(c,g);if(C()){break _;}h=$z;if(h){Mb(2917,2048);GN(2914,0.10000000149011612);Ba(2903);return;}g=BfO;$p=2;case 2:$z=AGE(c,g);if(C()){break _;}h
=$z;if(h){Mb(2917,2048);GN(2914,2.0);}else{Mb(2917,9729);GN(2915,a.lY*0.25);GN(2916,a.lY);if(b<0){GN(2915,0.0);GN(2916,a.lY*0.800000011920929);}}Ba(2903);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Ei(){D.call(this);this.xW=0.0;}
function MA(){var a=this;Ei.call(a);a.iZ=null;a.lb=null;a.pg=null;a.d1=null;a.dP=null;a.i_=null;a.hh=null;}
function A$V(){var a=new MA();KF(a);return a;}
function Xs(a){var b=new MA();AIJ(b,a);return b;}
function BfT(a,b){var c=new MA();ARs(c,a,b);return c;}
function KF(a){AIJ(a,0.0);}
function AIJ(a,b){ARs(a,b,0.0);}
function ARs(a,b,c){var d,e;a.iZ=BK(0,0);BG(a.iZ,(-4.0),(-8.0),(-4.0),8,8,8,b);d=a.iZ;e=0.0+c;BJ(d,0.0,e,0.0);a.lb=BK(32,0);BG(a.lb,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BJ(a.lb,0.0,e,0.0);a.pg=BK(16,16);BG(a.pg,(-4.0),0.0,(-2.0),8,12,4,b);BJ(a.pg,0.0,e,0.0);a.d1=BK(40,16);BG(a.d1,(-3.0),(-2.0),(-2.0),4,12,4,b);d=a.d1;e=2.0+c;BJ(d,(-5.0),e,0.0);a.dP=BK(40,16);a.dP.lF=1;BG(a.dP,(-1.0),(-2.0),(-2.0),4,12,4,b);BJ(a.dP,5.0,e,0.0);a.i_=BK(0,16);BG(a.i_,(-2.0),0.0,(-2.0),4,12,4,b);d=a.i_;c=12.0+c;BJ(d,(-2.0),c,0.0);a.hh
=BK(0,16);a.hh.lF=1;BG(a.hh,(-2.0),0.0,(-2.0),4,12,4,b);BJ(a.hh,2.0,c,0.0);}
function A$h(a,b,c,d,e,f,g){a.oi(b,c,d,e,f,g);B_(a.iZ,g);B_(a.pg,g);B_(a.d1,g);B_(a.dP,g);B_(a.i_,g);B_(a.hh,g);B_(a.lb,g);}
function AIQ(a,b,c,d,e,f,g){var h;a.iZ.bX=e/57.2957763671875;a.iZ.b1=f/57.2957763671875;a.lb.bX=a.iZ.bX;a.lb.b1=a.iZ.b1;h=a.d1;e=b*0.6661999821662903;f=e+3.1415927410125732;h.b1=BC(f)*2.0*c;a.d1.bU=(BC(b*0.23119999468326569)+1.0)*1.0*c;a.dP.b1=BC(e)*2.0*c;a.dP.bU=(BC(b*0.28119999170303345)-1.0)*1.0*c;a.i_.b1=BC(e)*1.399999976158142*c;a.hh.b1=BC(f)*1.399999976158142*c;h=a.d1;c=h.bU;b=d*0.09000000357627869;h.bU=c+BC(b)*0.05000000074505806+0.05000000074505806;h=a.dP;h.bU=h.bU-(BC(b)*0.05000000074505806+0.05000000074505806);h
=a.d1;b=h.b1;c=d*0.06700000166893005;h.b1=b+Bq(c)*0.05000000074505806;h=a.dP;h.b1=h.b1-Bq(c)*0.05000000074505806;}
function Ev(){var a=this;D.call(a);a.dE=null;a.IU=0;a.mG=0;a.HR=0;a.wY=0;}
function BfU(a){var b=new Ev();HD(b,a);return b;}
function HD(a,b){a.dE=$rt_createByteArray(1024);a.mG=0;a.HR=0;a.wY=1;a.IU=b;}
function AAS(){var a=this;Ev.call(a);a.pw=null;a.tr=null;a.nY=null;a.rO=null;a.xz=0;}
function Bam(){var a=new AAS();A$1(a);return a;}
function A$1(a){L();HD(a,BfV.bb);a.pw=$rt_createFloatArray(256);a.tr=$rt_createFloatArray(256);a.nY=$rt_createFloatArray(256);a.rO=$rt_createFloatArray(256);a.xz=0;}
function AYA(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;a.xz=a.xz+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.pw.data[f+(g*16|0)|0];e=e+1|0;}h=a.tr.data;i=b+(c*16|0)|0;h[i]=d/3.299999952316284+a.nY.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}c=0;while(c<16){j=0;while(j<16){k=a.nY.data;b=c+(j*16|0)|0;k[b]=k[b]+a.rO.data[b]*0.05000000074505806;if(a.nY.data[b]<0.0)a.nY.data[b]=0.0;k=a.rO.data;k[b]=k[b]-0.10000000149011612;if(BP()<0.05)a.rO.data[b]=0.5;j=j+1|0;}c=c+1|0;}k=a.tr;a.tr
=a.pw;a.pw=k;c=0;while(c<256){d=a.pw.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;l=d*d;i=32.0+l*32.0|0;m=50.0+l*64.0|0;n=255;o=146.0+l*50.0|0;if(a.mG){b=i*30|0;i=((b+(m*59|0)|0)+2805|0)/100|0;m=(b+(m*70|0)|0)/100|0;n=(b+17850|0)/100|0;}k=a.dE.data;j=c*4|0;k[j+0|0]=i<<24>>24;a.dE.data[j+1|0]=m<<24>>24;a.dE.data[j+2|0]=n<<24>>24;a.dE.data[j+3|0]=o<<24>>24;c=c+1|0;}}
function AKz(){var a=this;Ev.call(a);a.pS=null;a.qR=null;a.jw=null;a.sz=null;}
function BaV(){var a=new AKz();A1C(a);return a;}
function A1C(a){L();HD(a,BfW.bb);a.pS=$rt_createFloatArray(256);a.qR=$rt_createFloatArray(256);a.jw=$rt_createFloatArray(256);a.sz=$rt_createFloatArray(256);}
function AYQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){h=(g+e|0)&15;j=(i+f|0)&15;d=d+a.pS.data[h+(j*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.qR.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jw.data;e=(b+0|0)&15;n=((c+0|0)&15)*16|0;o=m[e+n|0];m=a.jw.data;h=h&15;o=o+m[h+n|0];m=a.jw.data;c=c+1|0;n=(c&15)*16|0;k[l]=d+(o+m[h+n
|0]+a.jw.data[e+n|0])/4.0*0.800000011920929;m=a.jw.data;m[l]=m[l]+a.sz.data[l]*0.009999999776482582;if(a.jw.data[l]<0.0)a.jw.data[l]=0.0;m=a.sz.data;m[l]=m[l]-0.05999999865889549;if(BP()<0.005)a.sz.data[l]=1.5;}b=b+1|0;}m=a.qR;a.qR=a.pS;a.pS=m;n=0;while(n<256){d=a.pS.data[n]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;h=d*100.0+155.0|0;o=d*d;j=o*255.0|0;l=o*d*d*128.0|0;if(a.mG){e=h*30|0;h=((e+(j*59|0)|0)+(l*11|0)|0)/100|0;j=(e+(j*70|0)|0)/100|0;l=(e+(l*70|0)|0)/100|0;}m=a.dE.data;b=n*4|0;m[b+0|0]=h<<24>>24;a.dE.data[b
+1|0]=j<<24>>24;a.dE.data[b+2|0]=l<<24>>24;a.dE.data[b+3|0]=(-1);n=n+1|0;}}
function L5(){D.call(this);}
var BfX=null;var BfY=null;function BfZ(){var a=new L5();AZB(a);return a;}
function AZB(a){return;}
function Dz(){if(BfX===null)BfX=AYI(new Xc,0);return BfX;}
function C$(){if(BfY===null)BfY=AYI(new PO,0);return BfY;}
function Di(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=APf(b)&&(e+f|0)<=APf(d)){a:{b:{if(b!==d){g=Kx(Dl(b));h=Kx(Dl(d));if(g!==null&&h!==null){if(g===h)break b;if(!F1(g)&&!F1(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!Ux(h,l[k])){Vj(b,c,d,e,j);b=new JR;O(b);M(b);}j=j+1|0;k=m;}Vj(b,c,d,e,f);return;}if(!F1(g))break a;if(F1(h))break b;else break a;}b=new JR;O(b);M(b);}}Vj(b,c,d,e,f);return;}b=new JR;O(b);M(b);}b=new BO;O(b);M(b);}d=new EF;Bl(d,B(197));M(d);}
function Vj(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function B$(){return Long_fromNumber(new Date().getTime());}
function EH(){return Long_fromNumber(performance.now()*1000000.0);}
function VW(){Gp.call(this);this.yl=null;}
function AJX(a){var b,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(a.yl.gS){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof E1){}else{throw $$e;}}}return;case 1:a:{try{AKB(b);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof E1){}else{throw $$e;}}}while(a.yl.gS){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof E1){}else{throw $$e;}}}return;default:E$();}}C3().s(a,
b,$p);}
function Sm(){}
function Il(){}
function Go(){D.call(this);}
function PW(a){return a.gQ?0:1;}
function Q6(a,b){var c,d;c=a.kY();a:{while(c.qk()){b:{d=c.mU();if(d!==null){if(!d.eo(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function AA6(a){var b,c,d,e,f;b=J(D,IN(a));c=b.data;d=0;e=Ow(a);while(Gb(e)){f=d+1|0;c[d]=Lm(e);d=f;}return b;}
function UD(a,b){var c,d,e,f,g;c=b.data;d=a.s;e=c.length;if(e<d)b=AEG(Kx(Dl(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Jj(a);while(KC(f)){c=b.data;g=e+1|0;c[e]=KT(f);e=g;}return b;}
function DF(a,b){var c,d;c=0;d=b.kY();while(d.qk()){if(!a.sS(d.mU()))continue;c=1;}return c;}
function Gf(a,b){var c,d;c=0;d=Jj(a);while(KC(d)){if(b.rz(KT(d))){AL_(d);c=1;}}return c;}
function J3(){}
function Gg(){Go.call(this);this.d7=0;}
function Fx(a,b){AEO(a,a.gQ,b);return 1;}
function Jj(a){var b;b=new Tv;b.lc=a;b.ym=b.lc.d7;b.ss=b.lc.s;b.nk=(-1);return b;}
function AA_(a,b){var c,d,e;c=a.s;d=0;a:{while(d<c){b:{e=Z(a,d);if(b!==null){if(!b.eo(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function Mu(){Gg.call(this);}
function AEO(a,b,c){if(b>=0){ABr(Wk(a,b),c);return;}c=new BO;O(c);M(c);}
function Tj(a,b){var c,d;if(b>=0){c=Wk(a,b);d=Fm(c);AHd(c);return d;}c=new BO;O(c);M(c);}
function AUr(a){return HZ(a);}
function OD(){}
function Xi(){}
function AED(){var a=this;Mu.call(a);a.pC=null;a.ql=null;a.gQ=0;}
function QV(){var a=new AED();A2P(a);return a;}
function A2P(a){return;}
function A9c(a){return a.gQ;}
function Ov(a){a.pC=null;a.ql=null;a.gQ=0;a.d7=a.d7+1|0;}
function HZ(a){return AJx(a,a.pC,null,0);}
function Wk(a,b){var c,d,e;if(b<0){c=new BO;O(c);M(c);}if(b<=(a.gQ/2|0)){d=a.pC;e=0;while(e<b){d=d.hu;e=e+1|0;}return AJx(a,d,d===null?null:d.iy,b);}if(b>a.gQ){c=new BO;O(c);M(c);}c=a.ql;e=b;while(e<a.gQ){c=c.iy;e=e+1|0;}return AJx(a,c===null?null:c.hu,c,b);}
function AN$(){D.call(this);}
function F$(){D.call(this);}
function ABE(){F$.call(this);}
function AKD(){F$.call(this);}
function Jc(){}
function Fb(){Go.call(this);}
function Fu(a,b){var c,d;c=0;if(IN(a)>=b.lZ()){d=b.kY();while(d.qk()){if(!KW(a,d.mU()))continue;c=1;}}else{d=Ow(a);while(Gb(d)){if(b.rz(Lm(d))){c=1;ADP(d);}}}return c;}
function A5U(a,b){var c,d;if(a===b)return 1;if(!Sl(b,Jc))return 0;c=b;if(IN(a)!=IN(c))return 0;d=Ow(c);while(Gb(d)){if(Wz(a,Lm(d)))continue;else return 0;}return 1;}
function AS0(a){var b,c,d,e,f,g;b=AA6(a);if(b===null)c=0;else{c=(-1515898884);d=0;while(true){e=b.data;if(d>=e.length)break;f=e[d];g=(f!==null?f.fk():0)^528111840;c=Nn(g,4)^(g>>>7|g<<25)^Nn(c,13);d=d+1|0;}}return c;}
function ET(){}
function AQh(){Fb.call(this);this.l$=null;}
function Ga(){var a=new AQh();A05(a);return a;}
function A05(a){a.l$=De();}
function Xg(a,b){return BR(a.l$,b,a)!==null?0:1;}
function Wz(a,b){return D0(a.l$,b);}
function Ow(a){return ACR(AJ_(a.l$));}
function KW(a,b){return Q7(a.l$,b)===null?0:1;}
function IN(a){return a.l$.f$;}
function LU(){}
function FY(){var a=this;D.call(a);a.wX=null;a.w7=null;}
function ACb(){var a=this;FY.call(a);a.f$=0;a.cO=null;a.g_=0;a.E$=0.0;a.uI=0;}
function De(){var a=new ACb();AVr(a);return a;}
function A53(a,b){return J(IF,b);}
function AVr(a){var b;b=AGW(16);a.f$=0;a.cO=J(IF,b);a.E$=0.75;RM(a);}
function AGW(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function U9(a){var b;if(a.f$>0){a.f$=0;b=a.cO;ZD(b,0,b.data.length,null);a.g_=a.g_+1|0;}}
function RM(a){a.uI=a.cO.data.length*a.E$|0;}
function D0(a,b){return VK(a,b)===null?0:1;}
function AEb(a,b){var c,d,e;a:{if(b===null){c=0;b:while(true){if(c>=a.cO.data.length)break a;d=a.cO.data[c];while(d!==null){if(d.e6===null)break b;d=d.eE;}c=c+1|0;}return 1;}c=0;c:while(true){if(c>=a.cO.data.length)break a;d=a.cO.data[c];while(d!==null){e=d.e6;if(b!==e&&!b.eo(e)?0:1)break c;d=d.eE;}c=c+1|0;}return 1;}return 0;}
function CP(a,b){var c;c=VK(a,b);if(c===null)return null;return c.e6;}
function VK(a,b){var c,d;if(b===null)c=QQ(a);else{d=b.fk();c=P5(a,b,d&(a.cO.data.length-1|0),d);}return c;}
function P5(a,b,c,d){var e;e=a.cO.data[c];while(e!==null&&!(e.pU==d&&AI3(b,e.ge))){e=e.eE;}return e;}
function QQ(a){var b;b=a.cO.data[0];while(b!==null&&b.ge!==null){b=b.eE;}return b;}
function AJ_(a){var b;if(a.wX===null){b=new PK;b.Ct=a;a.wX=b;}return a.wX;}
function Rc(a,b,c){return BR(a,b,c);}
function BR(a,b,c){var d,e,f,g;if(b===null){d=QQ(a);if(d===null){a.g_=a.g_+1|0;d=RJ(a,null,0,0);e=a.f$+1|0;a.f$=e;if(e>a.uI)Wp(a);}}else{e=b.fk();f=e&(a.cO.data.length-1|0);d=P5(a,b,f,e);if(d===null){a.g_=a.g_+1|0;d=RJ(a,b,f,e);e=a.f$+1|0;a.f$=e;if(e>a.uI)Wp(a);}}g=d.e6;d.e6=c;return g;}
function RJ(a,b,c,d){var e,f;e=new IF;f=null;e.ge=b;e.e6=f;e.pU=d;e.eE=a.cO.data[c];a.cO.data[c]=e;return e;}
function ALB(a,b){var c,d,e,f,g,h,i;c=AGW(!b?1:b<<1);d=J(IF,c);e=d.data;f=0;c=c-1|0;while(f<a.cO.data.length){g=a.cO.data[f];a.cO.data[f]=null;while(g!==null){h=g.pU&c;i=g.eE;g.eE=e[h];e[h]=g;g=i;}f=f+1|0;}a.cO=d;RM(a);}
function Wp(a){ALB(a,a.cO.data.length);}
function Q7(a,b){var c;c=AEj(a,b);if(c===null)return null;return c.e6;}
function AEj(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cO.data[0];while(e!==null){if(e.ge===null)break a;f=e.eE;d=e;e=f;}}else{g=b.fk();c=g&(a.cO.data.length-1|0);e=a.cO.data[c];while(e!==null&&!(e.pU==g&&AI3(b,e.ge))){f=e.eE;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.eE=e.eE;else a.cO.data[c]=e.eE;a.g_=a.g_+1|0;a.f$=a.f$-1|0;return e;}
function A4G(a){return a.f$;}
function Is(a){var b;if(a.w7===null){b=new PL;b.we=a;a.w7=b;}return a.w7;}
function AI3(b,c){return b!==c&&!b.eo(c)?0:1;}
function AKa(){F$.call(this);}
function YU(){D.call(this);}
function Bf0(){var a=new YU();A0k(a);return a;}
function A0k(a){return;}
function A3E(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Go=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaD(callback);return thread.suspend(function(){try{Bcp(b,callback);}catch($e){callback.IV($rt_exception($e));}});}
function Bcp(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){CM(c,SR(0,0,B(198),null));return;}e=d.open($rt_ustr(b),1);b=new TH;b.AM=c;b=Cu(b,"handleEvent");e.onBlocked=b;b=new TG;b.Eq=c;b.EK=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TF;b.Dw=c;b=Cu(b,"handleEvent");e.onerror=b;b=new TE;b.Bo=e;b=Cu(b,"handleEvent");e.onupgradeneeded=b;}
function A5t(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Go=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaD(callback);return thread.suspend(function(){try{A_X(b,c,callback);}catch($e){callback.IV($rt_exception($e));}});}
function A_X(b,c,d){var e;b=b.transaction("filesystem","readwrite").objectStore("filesystem");c=PT($rt_ustr(c));e=b.delete(c);b=new TD;b.CI=d;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TA;b.Dd=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A_H(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Go=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaD(callback);return thread.suspend(function(){try{Ba6(b,c,callback);}catch($e){callback.IV($rt_exception($e));}});}
function Ba6(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PT($rt_ustr(c));e=b.get(c);b=new Tz;b.Ar=d;b.xc=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Ty;b.Eg=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A5o(b,c,d,e,f){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Go=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaD(callback);return thread.suspend(function(){try{Bb0(b,c,d,e,f,callback);}
catch($e){callback.IV($rt_exception($e));}});}
function Bb0(b,c,d,e,f,g){var h,i;h=(b.transaction("filesystem","readonly").objectStore("filesystem")).openCursor();i=$rt_createIntArray(1);b=new Rm;b.EN=h;b.En=g;b.y1=i;b.vH=c;b.Bk=e;b.C7=d;b.xi=f;b=Cu(b,"handleEvent");h.onsuccess=b;b=new Rn;b.DN=g;b.wM=i;b=Cu(b,"handleEvent");h.onerror=b;}
function AUq(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Go=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaD(callback);return thread.suspend(function(){try{BcW(b,c,callback);}catch($e){callback.IV($rt_exception($e));}});}
function BcW(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=PT($rt_ustr(c));e=b.get(c);b=new Rj;b.CQ=d;b.u_=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Rk;b.Ef=d;b=Cu(b,"handleEvent");e.onerror=b;}
function AXO(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Go=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.IV=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaD(callback);return thread.suspend(function(){try{Bbb(b,c,d,e,callback);}catch($e)
{callback.IV($rt_exception($e));}});}
function Bbb(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(B$(),new Long(596067632, 383)).lo;c=A5L($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Rl;c.Bw=f;b=Cu(c,"handleEvent");h.onsuccess=b;b=new Ro;b.BP=f;b=Cu(b,"handleEvent");h.onerror=b;}
function A8u(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function Uw(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function A0G(b){return typeof b==='undefined'? -1:typeof b.lastModified==='undefined'? -1:b.lastModified;}
function PT(b){return [b];}
function AZR(b){return typeof b==="string"?b:typeof b==="undefined"?null:typeof b[0]==="string"?b[0]:null;}
function A5L(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AE0(){var a=this;D.call(a);a.Fd=0;a.E2=0;a.uB=null;a.xT=null;}
function SR(a,b,c,d){var e=new AE0();AXm(e,a,b,c,d);return e;}
function AXm(a,b,c,d,e){a.Fd=b;a.E2=c;a.uB=d;a.xT=e;}
function EX(){var a=this;D.call(a);a.Hz=null;a.tc=0;}
function Bf1(a,b){var c=new EX();FT(c,a,b);return c;}
function FT(a,b,c){a.Hz=b;a.tc=c;}
function A0H(a){return a.tc;}
function ATr(a,b){return a!==b?0:1;}
function AX1(a){return MM(a);}
function JS(a){var b;b=Dl(a);if(!Q3(JH(b),F(EX)))b=JH(b);return b;}
function XK(a,b){var c,d;if(JS(b)===JS(a))return R(a.tc,b.tc);c=new Cb;d=new S;V(d);Bl(c,T(H(H(H(H(d,B(199)),ID(JS(a))),B(200)),ID(JS(b)))));M(c);}
function AXy(a,b){return XK(a,b);}
function E8(){EX.call(this);}
var BfB=null;var BfA=null;var Bfz=null;var Bf2=null;function AHf(){var b,c,d;b=new E8;FT(b,B(201),0);BfB=b;b=new E8;FT(b,B(202),1);BfA=b;b=new E8;FT(b,B(203),2);Bfz=b;c=J(E8,3);d=c.data;d[0]=BfB;d[1]=BfA;d[2]=Bfz;Bf2=c;}
function Qr(){}
function U8(){D.call(this);this.yC=null;}
function BaD(b){var c;c=new U8;c.yC=b;return c;}
function CM(a,b){a.yC.Go(b);}
function A15(a,b){a.yC.IV(b);}
function AQD(){D.call(this);}
function Xo(){}
function W5(){var a=this;D.call(a);a.vp=null;a.z_=null;}
function ARd(a){var b,c,d;if(a.vp.readyState==4){b=new Uint8Array(a.vp.response);c=$rt_createByteArray(b.byteLength);Bd();BdH=c;d=0;while(d<V6().data.length){V6().data[d]=b[d]<<24>>24;d=d+1|0;}CM(a.z_,B(204));}}
function A1X(a){ARd(a);}
function H2(){D.call(this);}
function AQc(){var a=this;H2.call(a);a.w5=null;a.kn=0;a.F7=0;a.qM=0;}
function Ul(a){var b=new AQc();AT0(b,a);return b;}
function AT0(a,b){var c;c=b.data.length;a.w5=b;a.kn=0;a.F7=0;a.qM=0+c|0;}
function A4D(a){var b,c,d;if(a.kn>=a.qM)b=(-1);else{c=a.w5.data;d=a.kn;a.kn=d+1|0;b=c[d]&255;}return b;}
function A_h(a,b,c,d){var e,f,g,h,i;e=CB(d,a.qM-a.kn|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.w5.data;i=a.kn;a.kn=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function A5p(a){return a.qM-a.kn|0;}
function IT(){H2.call(this);this.kq=null;}
function Bf3(a){var b=new IT();R5(b,a);return b;}
function R5(a,b){a.kq=b;}
function AKy(a){return a.kq.wW();}
function Pl(){}
function P0(){IT.call(this);this.ea=null;}
function OY(a){var b=new P0();AIs(b,a);return b;}
function AIs(a,b){R5(a,b);a.ea=$rt_createByteArray(8);}
function NQ(a,b){var c;c=b.data;return a.kq.ob(b,0,c.length);}
function N0(a){var b,c;b=a.kq.Cs();if(b>=0)return b<<24>>24;c=new FG;O(c);M(c);}
function J8(a,b){var c,d;c=0;while(c<b){d=a.kq.ob(a.ea,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function APj(a){return $rt_longBitsToDouble(Ti(a));}
function AA0(a){return $rt_intBitsToFloat(H8(a));}
function AMS(a,b){QP(a,b,0,b.data.length);}
function QP(a,b,c,d){var e,f;if(d<0){e=new BO;O(e);M(e);}if(!d)return;if(a.kq===null){e=new EF;O(e);M(e);}if(b===null){e=new EF;O(e);M(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.kq.ob(b,c,d);if(f<0){e=new FG;O(e);M(e);}c=c+f|0;d=d-f|0;}return;}e=new BO;O(e);M(e);}
function H8(a){var b;if(J8(a,4)<0){b=new FG;O(b);M(b);}return (a.ea.data[0]&255)<<24|(a.ea.data[1]&255)<<16|(a.ea.data[2]&255)<<8|a.ea.data[3]&255;}
function Ti(a){var b;if(J8(a,8)<0){b=new FG;O(b);M(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.ea.data[0]&255)<<24|(a.ea.data[1]&255)<<16|(a.ea.data[2]&255)<<8|a.ea.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.ea.data[4]&255)<<24|(a.ea.data[5]&255)<<16|(a.ea.data[6]&255)<<8|a.ea.data[7]&255),new Long(4294967295, 0)));}
function XJ(a){var b;if(J8(a,2)<0){b=new FG;O(b);M(b);}return ((a.ea.data[0]&255)<<24>>16|a.ea.data[1]&255)<<16>>16;}
function APD(a){var b;if(J8(a,2)<0){b=new FG;O(b);M(b);}return ((a.ea.data[0]&255)<<8|a.ea.data[1]&255)&65535;}
function GW(a){return ALx(a,APD(a));}
function ALx(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);QP(a,c,0,b);return AWZ(c,d,0,b);}
function AWZ(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Hw;Bl(m,B(205));M(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Hw;Bl(m,B(206));M(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Hw;Bl(m,B(206));M(m);}f=j+1|0;if(f>=e){m=new Hw;Bl(m,B(206));M(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return Lk(c,0,g);}m=new Hw;Bl(m,B(206));M(m);}
function MU(){var a=this;D.call(a);a.wt=null;a.H2=null;}
function RZ(b){var c,d;if(Iy(b))M(ALn(b));if(!APP(Y(b,0)))M(ALn(b));c=1;while(c<Bi(b)){a:{d=Y(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(APP(d))break a;else M(ALn(b));}}c=c+1|0;}}
function APP(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function X5(b){var c;if(b===null){b=new Cb;Bl(b,B(207));M(b);}RZ(b);c=CP(Bf4,AOh(b));if(c!==null)return c;c=new Vd;O(c);c.Is=b;M(c);}
function AN1(a,b){var c,d,$$je;a:{try{b=AJJ(ADH(AQ0(AFu(a),Bf5),Bf5),b);}catch($$e){$$je=Bh($$e);if($$je instanceof G0){c=$$je;break a;}else{throw $$e;}}return b;}d=new W0;d.oq=1;d.rQ=1;d.vz=B(208);d.jF=c;M(d);}
function ABv(a,b){return AJB(a.wt,b.wt);}
function A6t(a,b){return ABv(a,b);}
function WO(){var a=this;IT.call(a);a.g5=null;a.oj=null;a.qi=0;a.oI=0;a.EA=0;a.Ed=0;a.wF=null;a.GX=null;}
function ASY(a){var b;if(a.qi){b=new B1;Bl(b,B(209));M(b);}return ALW(a,a.wF,0,1)==(-1)?(-1):a.wF.data[0]&255;}
function ALW(a,b,c,d){var e,f,g;if(a.qi){e=new B1;Bl(e,B(209));M(e);}if(b===null){e=new EF;O(e);M(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.oI)return (-1);f=0;AAG(a.g5,b,c,d);a:{while(!a.oI){if(!a.g5.N)ABh(a);b:{g=AF2(a.g5,0);f=f+(a.g5.pN-c|0)|0;c=a.g5.pN;switch(g){case -3:e=new B1;Bl(e,a.g5.b9);M(e);case 1:case 2:break;default:break b;}a.oI=1;if(g==2)return (-1);}if(!a.g5.ic)break a;}}return f;}e=new BO;O(e);M(e);}
function A0j(a){var b;if(!a.qi){if(!a.oI)return 1;return 0;}b=new B1;Bl(b,B(209));M(b);}
function ABh(a){var b,c;if(a.qi){b=new B1;Bl(b,B(209));M(b);}a:{c=a.kq.ob(a.oj,0,a.oj.data.length);if(c==(-1)){if(a.g5.jx.d0)break a;if(Yh(a.g5))break a;a.oj.data[0]=0;c=1;}AJ6(a.g5,a.oj,0,c,1);return;}if(Long_ne(a.g5.jx.rS,Long_fromInt(-1))){b=new B1;Bl(b,B(210));M(b);}b=new FG;Bl(b,B(211));M(b);}
function M9(){var a=this;D.call(a);a.h9=null;a.jt=0;a.no=Long_ZERO;}
function Ja(a,b){var c,d;c=a.h9.data;d=a.jt;a.jt=d+1|0;c[d]=b;if(a.jt==a.h9.data.length){S6(a,a.h9,0);a.jt=0;}a.no=Long_add(a.no,Long_fromInt(1));}
function ADR(a,b,c,d){a:{while(a.jt){if(d<=0)break a;Ja(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.h9.data.length){S6(a,b,c);c=c+a.h9.data.length|0;d=d-a.h9.data.length|0;a.no=Long_add(a.no,Long_fromInt(a.h9.data.length));}while(d>0){Ja(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function APh(a){var b;b=Long_shl(a.no,3);Ja(a,(-128));while(a.jt){Ja(a,0);}AKY(a,b);ME(a);}
function ADr(){var a=this;M9.call(a);a.px=0;a.py=0;a.pz=0;a.pA=0;a.pB=0;a.ek=null;a.mW=0;}
function BaU(){var a=new ADr();A$f(a);return a;}
function A$f(a){a.h9=$rt_createByteArray(4);a.jt=0;a.ek=$rt_createIntArray(80);OJ(a);}
function S6(a,b,c){var d,e;d=b.data;b=a.ek.data;e=a.mW;a.mW=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.mW==16)ME(a);}
function HM(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AKY(a,b){if(a.mW>14)ME(a);a.ek.data[14]=b.hi;a.ek.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AL8(a,b,c){APh(a);HM(a,a.px,b,c);HM(a,a.py,b,c+4|0);HM(a,a.pz,b,c+8|0);HM(a,a.pA,b,c+12|0);HM(a,a.pB,b,c+16|0);OJ(a);return 20;}
function OJ(a){var b;a.no=Long_ZERO;a.jt=0;b=0;while(b<a.h9.data.length){a.h9.data[b]=0;b=b+1|0;}a.px=1732584193;a.py=(-271733879);a.pz=(-1732584194);a.pA=271733878;a.pB=(-1009589776);a.mW=0;b=0;while(b!=a.ek.data.length){a.ek.data[b]=0;b=b+1|0;}}
function Vf(a,b,c,d){return b^c^d;}
function Ff(a,b,c){return b<<c|b>>>(32-c|0);}
function ME(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.ek.data[b]=Ff(a,a.ek.data[b-3|0]^a.ek.data[b-8|0]^a.ek.data[b-14|0]^a.ek.data[b-16|0],1);b=b+1|0;}c=a.px;d=a.py;e=a.pz;f=a.pA;g=a.pB;h=0;while(h<=19){i=(((Ff(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.ek.data[h]|0)+1518500249|0;b=Ff(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Ff(a,c,5)+Vf(a,d,e,f)|0)+g|0)+a.ek.data[j]|0)+1859775393|0;b=Ff(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Ff(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.ek.data[h]|0)
+(-1894007588)|0;b=Ff(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Ff(a,c,5)+Vf(a,d,e,f)|0)+g|0)+a.ek.data[j]|0)+(-899497514)|0;b=Ff(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.px=a.px+c|0;a.py=a.py+d|0;a.pz=a.pz+e|0;a.pA=a.pA+f|0;a.pB=a.pB+g|0;a.mW=0;b=0;while(b!=a.ek.data.length){a.ek.data[b]=0;b=b+1|0;}}
function AI_(){D.call(this);}
function Bf6(){var a=new AI_();A54(a);return a;}
function A54(a){return;}
function O6(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Og(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Nr(b,c){var d,e,f,g;d=b.data;e=AEG(Kx(Dl(b)),c);f=CB(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function M0(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new Cb;O(f);M(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZD(b,c,d,e){var f,g;if(c>d){e=new Cb;O(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function PY(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=J(D,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=CB(j,h+f|0);l=h+(2*f|0)|0;m=CB(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qf(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AOr(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new Cb;O(f);M(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function I_(){var a=this;D.call(a);a.Da=0;a.B4=null;a.xh=null;}
function Bf7(a,b,c){var d=new I_();RH(d,a,b,c);return d;}
function RH(a,b,c,d){a.Da=b;a.B4=c;a.xh=d;}
function ABz(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Ys(b,a.B4)<a.Da){c=0;d=null;if(c<10){e=1;f=b.bi;$p=1;continue _;}}return;case 1:AOw(a,b,e,f,d);if(C()){break _;}c=c+1|0;if(c>=10)return;e=1;f=b.bi;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A4_(a,b,c,d){return CO((c+E(b.q,256)|0)-128|0,E(b.q,128),(d+E(b.q,256)|0)-128|0);}
function AOw(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=K(d.d);h=K(d.e);i=E(b.q,a.xh.data.length);j=a.An(b,g,h);k=j.eF;l=j.e0;m=j.eG;$p=1;case 1:$z
=AAB(b,k,l,m);if(C()){break _;}c=$z;if(c)return 0;$p=2;case 2:$z=ABZ(b,k,l,m);if(C()){break _;}e=$z;if(e!==Bf8)return 0;n=0;while(n<3){o=6;p=0;h=k;q=l;r=m;if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;}return f;case 3:$z=AAB(b,h,c,r);if(C()){break _;}c=$z;if(c){$p=4;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;continue _;}n=n+1|0;if(n>=3)break;o
=6;p=0;h=k;q=l;r=m;}return f;case 4:$z=AAB(b,h,q,r);if(C()){break _;}c=$z;if(!c){$p=5;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 5:$z=ABZ(b,h,q,r);if(C()){break _;}e=$z;if(!e.nE()){c=q+1|0;$p=6;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|
0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 6:a:{$z=AAB(b,h,c,r);if(C()){break _;}c=$z;if(!c){b:{s=h+0.5;t=q+1.0;u=r+0.5;if(d===null){v=s-b.fj;w=t-b.pZ;x=u-b.fi;if(v*v+w*w+x*x>=1024.0)break b;break a;}y=s-d.d;z=t-d.j;ba=u-d.e;if(y*y+z*z+ba*ba<1024.0)break a;}c:{try{e=a.xh.data[i];bb=J(FS,1);bb.data[0]=F(F0);e=WA(e,bb);bb=J(D,1);bb.data[0]=b;bc=WD(e,bb);break c;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){}else{throw $$e;}}return f;}y=s;z=t;ba=u;Kt(bc,y,z,ba,N(b.q)*360.0,0.0);$p=7;continue _;}}p=p+
1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 7:$z=bc.uS(y,z,ba);if(C()){break _;}c=$z;if(c){f=f+1|0;$p=8;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 8:AOg(b,bc);if(C()){break _;}p=p+1|0;while(true){if(p<3)
{h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$p);}
function UX(){I_.call(this);this.Gw=null;}
function A1V(a,b,c,d){return CO((c+E(b.q,256)|0)-128|0,E(b.q,E(b.q,E(b.q,112)+8|0)+8|0),(d+E(b.q,256)|0)-128|0);}
function C5(){var a=this;D.call(a);a.mF=0;a.bH=null;a.bC=null;a.l=null;a.bS=0.0;a.cS=0.0;a.bR=0.0;a.d=0.0;a.j=0.0;a.e=0.0;a.g=0.0;a.i=0.0;a.h=0.0;a.v=0.0;a.I=0.0;a.P=0.0;a.T=0.0;a.L=null;a.cx=0;a.jY=0;a.x6=0;a.ll=0;a.cR=0;a.c4=0.0;a.c1=0.0;a.eO=0.0;a.tY=0.0;a.hd=0.0;a.i$=0;a.fI=0.0;a.rf=0;a.cs=0.0;a.b7=0.0;a.ct=0.0;a.el=0.0;a.rq=0.0;a.o4=0;a.n6=0.0;a.I2=0;a.m=null;a.oQ=0;a.nJ=0;a.cV=0;a.n7=0;a.to=0;a.dz=0;a.gc=0;a.oz=0;a.tK=null;a.g8=0.0;a.g0=0.0;}
function Bf9(a){var b=new C5();FC(b,a);return b;}
function FC(a,b){a.mF=0;a.L=Nt(0.0,0.0,0.0,0.0,0.0,0.0);a.cx=0;a.jY=0;a.x6=0;a.ll=1;a.cR=0;a.c4=0.0;a.c1=0.6000000238418579;a.eO=1.7999999523162842;a.tY=0.0;a.hd=0.0;a.i$=1;a.fI=0.0;a.rf=1;a.el=0.0;a.rq=0.0;a.o4=0;a.n6=0.0;a.I2=0;a.m=new DB;a.oQ=0;a.nJ=1;a.cV=0;a.n7=300;a.to=0;a.dz=0;a.gc=300;a.oz=1;a.l=b;CT(a,0.0,0.0,0.0);}
function Ca(a){a.cR=1;}
function D2(a,b,c){a.c1=b;a.eO=c;}
function WQ(a,b,c){a.v=b;a.I=c;}
function CT(a,b,c,d){var e,f,g,h,i,j;a.d=b;a.j=c;a.e=d;e=a.c1/2.0;f=a.eO/2.0;g=a.L;h=e;i=b-h;j=f;M5(g,i,c-j,d-h,b+h,c+j,d+h);}
function AI7(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jb();if(C()){break _;}return;default:E$();}}C3().s(a,$p);}
function AET(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bC!==null&&a.bC.cR)a.bC=null;a.oQ=a.oQ+1|0;a.tY=a.hd;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.T=a.I;a.P=a.v;$p=1;case 1:$z=a.HH();if(C()){break _;}b=$z;if(!b)a.to=0;else{a:{if(!a.to&&!a.oz){c=Ce(a.g*a.g*0.20000000298023224+a.i*a.i+a.h*a.h*0.20000000298023224)*0.20000000298023224;if(c>1.0)c=1.0;Dh(a.l,a,B(212),c,1.0+(N(a.m)-N(a.m))*0.4000000059604645);d
=K(a.L.M);b=0;e=d+1.0;while(b<1.0+a.c1*20.0){f=(N(a.m)*2.0-1.0)*a.c1;g=(N(a.m)*2.0-1.0)*a.c1;BV(a.l,B(213),a.d+f,e,a.e+g,a.g,a.i-N(a.m)*0.20000000298023224,a.h);b=b+1|0;}b=0;while(true){if(b>=1.0+a.c1*20.0)break a;f=(N(a.m)*2.0-1.0)*a.c1;g=(N(a.m)*2.0-1.0)*a.c1;BV(a.l,B(214),a.d+f,e,a.e+g,a.g,a.i,a.h);b=b+1|0;}}}a.fI=0.0;a.to=1;a.cV=0;}if(a.cV>0){if(!(a.cV%20|0)){h=null;b=1;$p=4;continue _;}a.cV=a.cV-1|0;}$p=2;case 2:$z=ACm(a);if(C()){break _;}b=$z;if(b){h=null;b=10;$p=3;continue _;}if(a.j>=(-64.0)){a.oz=0;return;}$p
=5;continue _;case 3:a.fr(h,b);if(C()){break _;}a.cV=600;if(a.j>=(-64.0)){a.oz=0;return;}$p=5;continue _;case 4:a.fr(h,b);if(C()){break _;}a.cV=a.cV-1|0;$p=2;continue _;case 5:a.DP();if(C()){break _;}a.oz=0;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function X0(a){Ca(a);}
function AHc(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Ub(a.L,b,c,d);f=a.l;$p=1;case 1:$z=XT(f,a,e);if(C()){break _;}f=$z;if(f.s>0)return 0;f=a.l;$p=2;case 2:$z=AJh(f,e);if(C()){break _;}g=$z;return g?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ARC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.o4){F2(a.L,b,c,d);a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.el;a.e=(a.L.S+a.L.W)/2.0;return;}e=a.d;f=a.e;g=Qd(a.L);h=a.l;i=Je(a.L,b,c,d);$p=1;case 1:$z
=XT(h,a,i);if(C()){break _;}j=$z;k=0;l=c;while(k<CX(j)){l=V$(Z(j,k),a.L,l);k=k+1|0;}F2(a.L,0.0,l,0.0);if(a.ll){m=d;n=b;}else if(c===l){m=d;n=b;}else{n=0.0;m=n;l=n;}a:{b:{if(!a.cx){if(c===l)break b;if(c>=0.0)break b;}o=1;break a;}o=0;}p=0;while(p<CX(j)){n=Qu(Z(j,p),a.L,n);p=p+1|0;}F2(a.L,n,0.0,0.0);if(!a.ll&&b!==n){n=0.0;m=n;l=n;}k=0;while(k<CX(j)){m=Ue(Z(j,k),a.L,m);k=k+1|0;}F2(a.L,0.0,0.0,m);if(!a.ll&&d!==m){n=0.0;m=n;l=n;}c:{if(a.rq<=0.0){q=n;r=l;s=m;}else if(!o){q=n;r=l;s=m;}else if(a.el>=0.05000000074505806)
{q=n;r=l;s=m;}else{if(b!==n)break c;if(d!==m)break c;q=n;r=l;s=m;}a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.el;a.e=(a.L.S+a.L.W)/2.0;t=R(b,q);a.jY=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.x6=!a.jY&&!k?0:1;if(!a.cx){if(r<0.0)a.fI=a.fI-r;}else if(a.fI>0.0){u=a.fI;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.hd=a.hd+Ce(l*l+m*m)*0.6;if(!a.i$){a.el=a.el*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;}r=a.rq;i=Qd(a.L);Xd(a.L,
g);h=a.l;g=Je(a.L,b,r,d);$p=2;case 2:$z=XT(h,a,g);if(C()){break _;}h=$z;y=0;while(y<CX(h)){r=V$(Z(h,y),a.L,r);y=y+1|0;}F2(a.L,0.0,r,0.0);if(a.ll){s=d;q=b;}else if(c===r){s=d;q=b;}else{q=0.0;s=q;r=q;}k=0;while(k<CX(h)){q=Qu(Z(h,k),a.L,q);k=k+1|0;}F2(a.L,q,0.0,0.0);if(!a.ll&&b!==q){q=0.0;s=q;r=q;}t=0;while(t<CX(h)){s=Ue(Z(h,t),a.L,s);t=t+1|0;}F2(a.L,0.0,0.0,s);if(!a.ll&&d!==s){q=0.0;s=q;r=q;}if(n*n+m*m>=q*q+s*s){Xd(a.L,i);q=n;r=l;s=m;}else a.el=a.el+0.5;a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.el;a.e=(a.L.S+a.L.W)
/2.0;t=R(b,q);a.jY=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.x6=!a.jY&&!k?0:1;if(!a.cx){if(r<0.0)a.fI=a.fI-r;}else if(a.fI>0.0){u=a.fI;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.hd=a.hd+Ce(l*l+m*m)*0.6;if(!a.i$){a.el=a.el*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;case 3:a.DD(u);if(C()){break _;}a.fI=0.0;if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.hd=a.hd+Ce(l*l+m*m)*0.6;if(!a.i$){a.el=a.el
*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;case 4:$z=a.HH();if(C()){break _;}t=$z;i=a.l;h=a.L;$p=5;case 5:$z=AQ9(i,h);if(C()){break _;}k=$z;if(!k){if(a.cV<=0)a.cV= -a.nJ;if(t&&a.cV>0){Dh(a.l,a,B(215),0.699999988079071,1.600000023841858+(N(a.m)-N(a.m))*0.4000000059604645);a.cV= -a.nJ;}return;}k=1;$p=7;continue _;case 6:$z=ACv(i,v,w,x);if(C()){break _;}y=$z;if(a.hd>a.rf&&y>0){a.rf=a.rf+1|0;L();h=BeM.data[y].gK;if(!BeM.data[y].b_.nE())Dh(a.l,a,
Kg(h),AML(h)*0.15000000596046448,Yf(h));i=BeM.data[y];h=a.l;$p=8;continue _;}a.el=a.el*0.4000000059604645;$p=4;continue _;case 7:a.FU(k);if(C()){break _;}if(!t){a.cV=a.cV+1|0;if(!a.cV)a.cV=300;}if(t&&a.cV>0){Dh(a.l,a,B(215),0.699999988079071,1.600000023841858+(N(a.m)-N(a.m))*0.4000000059604645);a.cV= -a.nJ;}return;case 8:i.oH(h,v,w,x,a);if(C()){break _;}a.el=a.el*0.4000000059604645;$p=4;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function A1J(a){return null;}
function AJ2(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:a.fr(c,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function Zi(a,b){return;}
function AE5(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=Dv(a.L,0.0,(-0.4000000059604645),0.0);d=BfN;$p=1;case 1:$z=AAs(b,c,d,a);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AGE(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j+a.rJ();d=K(a.d);e=K4(K(c));f=K(a.e);g=a.l;$p=1;case 1:$z=ACv(g,d,e,f);if(C()){break _;}h=$z;if(h){L();if(BeM.data[h].b_===b){b=a.l;$p=2;continue _;}}return 0;case 2:$z=AEI(b,d,e,f);if(C()){break _;}d=$z;return c>=(e+1|0)-(Jv(d)-0.1111111119389534)?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ACm(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=Dv(a.L,0.0,(-0.4000000059604645),0.0);d=BfO;$p=1;case 1:$z=AOs(b,c,d);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function L4(a,b,c,d){var e,f,g;e=Ea(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;c=c*d;f=Bq(a.v*3.1415927410125732/180.0);g=BC(a.v*3.1415927410125732/180.0);a.g=a.g+b*g-c*f;a.h=a.h+c*g+b*f;}}
function ADG(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(a.d);d=(a.L.U-a.L.M)*0.66;e=K(a.j-a.c4+d);f=K(a.e);g=a.l;$p=1;case 1:$z=ANg(g,c,e,f);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AUz(a,b){a.l=b;}
function Kt(a,b,c,d,e,f){a.d=b;a.bS=b;b=c+a.c4;a.j=b;a.cS=b;a.e=d;a.bR=d;a.v=e;a.I=f;CT(a,a.d,a.j,a.e);}
function AR2(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return Ea(c*c+d*d+e*e);}
function AGJ(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return e*e+f*f+g*g;}
function Sk(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return Ce(e*e+f*f+g*g);}
function LE(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return c*c+d*d+e*e;}
function A6Q(a,b){return;}
function A5A(a,b){var c,d,e,f,g;c=b.d-a.d;d=b.e-a.e;e=c<0.0? -c:c;f=d<0.0? -d:d;if(e>f)f=e;if(f>=0.009999999776482582){e=Ce(f);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;e=f*g;c=c*0.05000000074505806;e=e*0.05000000074505806;c=c*(1.0-a.n6);e=e*(1.0-a.n6);Hr(a, -c,0.0, -e);Hr(b,c,0.0,e);}}
function Hr(a,b,c,d){a.g=a.g+b;a.i=a.i+c;a.h=a.h+d;}
function AJF(a,b,c){return 0;}
function A9I(a){return 0;}
function A7T(a){return 0;}
function A_g(a,b,c){return;}
function Sd(a,b){var c,d,e;c=a.d-b.x;d=a.j-b.z;e=a.e-b.w;return AHb(a,c*c+d*d+e*e);}
function AHb(a,b){var c;c=APU(a.L)*64.0;return b>=c*c?0:1;}
function ALs(a,b){var c,d;c=$rt_createDoubleArray(3);d=c.data;d[0]=a.d;d[1]=a.j;d[2]=a.e;HG(b,B(216),V8(a,c));c=$rt_createDoubleArray(3);d=c.data;d[0]=a.g;d[1]=a.i;d[2]=a.h;HG(b,B(217),V8(a,c));c=$rt_createFloatArray(2);d=c.data;d[0]=a.v;d[1]=a.I;HG(b,B(218),AMy(a,c));AR5(b,B(219),a.fI);Ft(b,B(220),a.cV<<16>>16);Ft(b,B(221),a.gc<<16>>16);SZ(b,B(222),a.cx);ABN(a,b);}
function YS(a,b){var c,d,e,f,g;c=Kh(b,B(216));d=Kh(b,B(217));e=Kh(b,B(218));CT(a,0.0,0.0,0.0);a.g=Fc(d,0).iL;a.i=Fc(d,1).iL;a.h=Fc(d,2).iL;f=Fc(c,0).iL;a.d=f;a.cs=f;a.bS=f;f=Fc(c,1).iL;a.j=f;a.b7=f;a.cS=f;f=Fc(c,2).iL;a.e=f;a.ct=f;a.bR=f;g=Fc(e,0).nn;a.v=g;a.P=g;g=Fc(e,1).nn;a.I=g;a.T=g;a.fI=AME(b,B(219));a.cV=FK(b,B(220));a.gc=FK(b,B(221));a.cx=Ur(b,B(222));CT(a,a.d,a.j,a.e);AOV(a,b);}
function V8(a,b){var c,d,e,f,g;b=b.data;c=L$();d=b.length;e=0;while(e<d){f=b[e];g=new Mq;Cw(g);g.iL=f;Jq(c,g);e=e+1|0;}return c;}
function AMy(a,b){var c,d,e;b=b.data;c=L$();d=b.length;e=0;while(e<d){Jq(c,A6O(b[e]));e=e+1|0;}return c;}
function ABS(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0.0;$p=1;case 1:$z=AGD(a,b,c,d);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AGD(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Hf(a.l,a.d,a.j+d,a.e,Kz(b,c));e.hc=10;f=a.l;$p=1;case 1:AOg(f,e);if(C()){break _;}return e;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AHw(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.j+a.rJ());d=K(a.e);e=a.l;$p=1;case 1:$z=AAB(e,b,c,d);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AWH(a,b){return 0;}
function AWY(a,b){return null;}
function AFb(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bC.cR){a.bC=null;return;}a.g=0.0;a.i=0.0;a.h=0.0;$p=1;case 1:a.ep();if(C()){break _;}CT(a,a.bC.d,a.bC.j+a.c4+a.bC.Ac(),a.bC.e);a.g0=a.g0+a.bC.v-a.bC.P;a.g8=a.g8+a.bC.I-a.bC.T;while(a.g0>=180.0){a.g0=a.g0-360.0;}while(a.g0<(-180.0)){a.g0=a.g0+360.0;}while(a.g8>=180.0){a.g8=a.g8-360.0;}while(a.g8<(-180.0)){a.g8=a.g8+360.0;}b=a.g0*0.5;c=a.g8*0.5;d=10.0;if(b>d)b
=d;e=(-10.0);if(b<e)b=e;if(c<=d)d=c;if(d>=e)e=d;a.g0=a.g0-b;a.g8=a.g8-e;a.v=a.v+b;a.I=a.I+e;return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function A9M(a){return a.eO*0.75;}
function Pi(a,b){a.g8=0.0;a.g0=0.0;if(a.bC===b){a.bC.bH=null;a.bC=null;}else{if(a.bC!==null)a.bC.bH=null;if(b.bH!==null)b.bH.bC=null;a.bC=b;b.bH=a;}}
function Xk(a,b,c){var d,e;d=a.I;e=a.v;a.v=a.v+b*0.15;a.I=a.I-c*0.15;if(a.I<(-90.0))a.I=(-90.0);if(a.I>90.0)a.I=90.0;a.T=a.T+a.I-d;a.P=a.P+a.v-e;}
function EQ(){var a=this;C5.call(a);a.oZ=0;a.JG=0.0;a.G3=0.0;a.In=0.0;a.dH=0.0;a.e9=0.0;a.z0=0.0;a.nj=0.0;a.j3=0.0;a.mh=0.0;a.G5=0;a.yr=null;a.G4=0;a.D3=0.0;a.E0=null;a.Jt=0.0;a.u0=0;a.Ju=0.0;a.bT=0;a.tG=0;a.uY=0;a.dF=0;a.EM=0;a.kH=0.0;a.c2=0;a.dA=0;a.k0=0.0;a.jm=0.0;a.Ck=0;a.Ff=0;a.Jz=0.0;a.jU=0.0;a.ch=0.0;a.go=0.0;a.hn=0;a.iN=0.0;a.gD=0.0;a.kI=0.0;a.hI=0;a.zR=0.0;a.s0=0.0;}
function PM(a){return a.yr;}
function AXr(a){return a.cR?0:1;}
function A1N(a){return a.cR?0:1;}
function AQn(a){return a.eO*0.8500000238418579;}
function ANo(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AET(a);if(C()){break _;}b=E(a.m,1000);c=a.uY;a.uY=c+1|0;if(b<c){a.uY=(-80);d=a.wA();if(d!==null)Dh(a.l,a,d,1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);}if(H7(a)){$p=2;continue _;}if(H7(a)){d=BfN;$p=3;continue _;}a.gc=a.n7;a.k0=a.jm;if(a.dA>0)a.dA=a.dA-1|0;if(a.dF>0)a.dF=a.dF-1|0;if(a.dz
>0)a.dz=a.dz-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mh=a.j3;a.e9=a.dH;a.P=a.v;a.T=a.I;return;case 2:$z=AHw(a);if(C()){break _;}e=$z;if(e){d=null;e=1;$p=4;continue _;}if(H7(a)){d=BfN;$p=3;continue _;}a.gc=a.n7;a.k0=a.jm;if(a.dA>0)a.dA=a.dA-1|0;if(a.dF>0)a.dF=a.dF-1|0;if(a.dz>0)a.dz=a.dz-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mh=a.j3;a.e9=a.dH;a.P=a.v;a.T=a.I;return;case 3:$z=AGE(a,d);if(C()){break _;}e=$z;if(!e)a.gc=a.n7;else{a.gc=a.gc-1|0;if(a.gc==(-20)){a.gc=0;e
=0;while(e<8){f=N(a.m)-N(a.m);g=N(a.m)-N(a.m);h=N(a.m)-N(a.m);BV(a.l,B(213),a.d+f,a.j+g,a.e+h,a.g,a.i,a.h);e=e+1|0;}d=null;e=2;$p=5;continue _;}a.cV=0;}a.k0=a.jm;if(a.dA>0)a.dA=a.dA-1|0;if(a.dF>0)a.dF=a.dF-1|0;if(a.dz>0)a.dz=a.dz-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mh=a.j3;a.e9=a.dH;a.P=a.v;a.T=a.I;return;case 4:a.fr(d,e);if(C()){break _;}if(H7(a)){d=BfN;$p=3;continue _;}a.gc=a.n7;a.k0=a.jm;if(a.dA>0)a.dA=a.dA-1|0;if(a.dF>0)a.dF=a.dF-1|0;if(a.dz>0)a.dz=a.dz-1|0;if(a.bT<=0){a.c2=a.c2
+1|0;if(a.c2>20){$p=6;continue _;}}a.mh=a.j3;a.e9=a.dH;a.P=a.v;a.T=a.I;return;case 5:a.fr(d,e);if(C()){break _;}a.cV=0;a.k0=a.jm;if(a.dA>0)a.dA=a.dA-1|0;if(a.dF>0)a.dF=a.dF-1|0;if(a.dz>0)a.dz=a.dz-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mh=a.j3;a.e9=a.dH;a.P=a.v;a.T=a.I;return;case 6:Ca(a);if(C()){break _;}e=0;while(e<20){i=CZ(a.m)*0.02;j=CZ(a.m)*0.02;k=CZ(a.m)*0.02;BV(a.l,B(223),a.d+N(a.m)*a.c1*2.0-a.c1,a.j+N(a.m)*a.eO,a.e+N(a.m)*a.c1*2.0-a.c1,i,j,k);e=e+1|0;}a.mh=a.j3;a.e9=a.dH;a.P=a.v;a.T
=a.I;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AEQ(a){var b,c,d,e;b=0;while(b<20){c=CZ(a.m)*0.02;d=CZ(a.m)*0.02;e=CZ(a.m)*0.02;BV(a.l,B(223),a.d+N(a.m)*a.c1*2.0-a.c1-c*10.0,a.j+N(a.m)*a.eO-d*10.0,a.e+N(a.m)*a.c1*2.0-a.c1-e*10.0,c,d,e);b=b+1|0;}}
function AKQ(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFb(a);if(C()){break _;}a.z0=a.nj;a.nj=0.0;return;default:E$();}}C3().s(a,$p);}
function AMr(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jb();if(C()){break _;}$p=2;case 2:a.or();if(C()){break _;}b=a.d-a.bS;c=a.e-a.bR;d=Ce(b*b+c*c);e=a.dH;f=0.0;a.z0=a.nj;g=0.0;if(d>0.05000000074505806){g=1.0;f=d*3.0;e=CR(c,b)*180.0/3.1415927410125732-90.0;}if(!a.cx)g=0.0;a.nj=a.nj+(g-a.nj)*0.30000001192092896;h=e-a.dH;while(h<(-180.0)){h=h+360.0;}while
(h>=180.0){h=h-360.0;}a.dH=a.dH+h*0.10000000149011612;i=a.v-a.dH;while(i<(-180.0)){i=i+360.0;}while(i>=180.0){i=i-360.0;}j=i>=(-90.0)&&i<90.0?0:1;if(i<(-75.0))i=(-75.0);if(i>=75.0)i=75.0;a.dH=a.v-i;a.dH=a.dH+i*0.10000000149011612;if(j)f=f*(-1.0);while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}while(a.dH-a.e9<(-180.0)){a.e9=a.e9-360.0;}while(a.dH-a.e9>=180.0){a.e9=a.e9+360.0;}while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}a.j3=a.j3+f;return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function A1d(a,b,c){D2(a,b,c);}
function UO(a,b){if(a.bT>0){a.bT=a.bT+b|0;if(a.bT>20)a.bT=20;a.dz=a.oZ/2|0;}}
function AB1(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hn=0;if(a.bT<=0)return 0;a.ch=1.5;if(a.dz<=a.oZ/2.0){a.tG=a.bT;a.dz=a.oZ;a.bT=a.bT-c|0;a.EM=10;a.dF=10;}else{if((a.tG-c|0)>=a.bT)return 0;a.bT=a.tG-c|0;}a.kH=0.0;if(b===null)a.kH=(BP()*2.0|0)*180|0;else{d=b.d-a.d;e=b.e-a.e;while(d*d+e*e<1.0E-4){d=(BP()-BP())*0.01;e=(BP()-BP())*0.01;}a.kH=CR(e,d)*180.0/3.1415927410125732-a.v;ABx(a,b,c,d,e);}if(a.bT>0){Dh(a.l,a,
a.vb(),1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);return 1;}Dh(a.l,a,a.uM(),1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);$p=1;case 1:a.Fx(b);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,$p);}
function A8p(a){return null;}
function AUx(a){return B(224);}
function AVs(a){return B(224);}
function ABx(a,b,c,d,e){var f,g,h;f=Ce(d*d+e*e);a.g=a.g/2.0;a.i=a.i/2.0;a.h=a.h/2.0;g=a.g;h=f;a.g=g-d/h*0.4000000059604645;a.i=a.i+0.4000000059604645;a.h=a.h-e/h*0.4000000059604645;if(a.i>0.4000000059604645)a.i=0.4000000059604645;}
function AN3(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.u0>0&&b!==null)b.BA(a,a.u0);a.Ck=1;c=a.ml();if(c>0){d=E(a.m,3);e=0;if(e<d){f=1;$p=1;continue _;}}return;case 1:ABS(a,c,f);if(C()){break _;}e=e+1|0;if(e>=d)return;f=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ATB(a){return 0;}
function AP5(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Nc(b-3.0)|0;if(c<=0)return;d=null;$p=1;case 1:a.fr(d,c);if(C()){break _;}d=a.l;c=K(a.d);e=K(a.j-0.20000000298023224-a.c4);f=K(a.e);$p=2;case 2:$z=ACv(d,c,e,f);if(C()){break _;}e=$z;if(e>0){L();d=BeM.data[e].gK;Dh(a.l,a,Kg(d),d.oP*0.5,d.pM*0.75);}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ADt(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE5(a);if(C()){break _;}d=$z;if(!d){$p=2;continue _;}e=a.j;L4(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=3;continue _;case 2:$z=ACm(a);if(C()){break _;}d=$z;if(d){e=a.j;L4(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=4;continue _;}L4(a,b,c,!a.cx?0.019999999552965164:0.10000000149011612);$p=7;continue _;case 3:ARC(a,
f,g,h);if(C()){break _;}a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=a.i-0.02;if(!a.jY){a.jU=a.ch;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ch=a.ch+(i-a.ch)*0.4000000059604645;a.go=a.go+a.ch;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=5;continue _;case 4:ARC(a,f,g,h);if(C()){break _;}a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;a.i=a.i-0.02;if(!a.jY){a.jU=a.ch;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ch=a.ch+(i-a.ch)*0.4000000059604645;a.go
=a.go+a.ch;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=6;continue _;case 5:$z=AHc(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jU=a.ch;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ch=a.ch+(i-a.ch)*0.4000000059604645;a.go=a.go+a.ch;return;case 6:$z=AHc(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jU=a.ch;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ch=a.ch+(i-a.ch)*0.4000000059604645;a.go=a.go+a.ch;return;case 7:$z=AIe(a);if(C()){break _;}d=
$z;if(d){a.fI=0.0;if(a.i<(-0.15))a.i=(-0.15);}e=a.g;f=a.i;g=a.h;$p=8;case 8:ARC(a,e,f,g);if(C()){break _;}if(!a.jY){a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jU=a.ch;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ch=a.ch+(i-a.ch)*0.4000000059604645;a.go=a.go+a.ch;return;}$p=9;case 9:$z=AIe(a);if(C()){break _;}d=$z;if(d)a.i=0.2;a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h
=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jU=a.ch;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ch=a.ch+(i-a.ch)*0.4000000059604645;a.go=a.go+a.ch;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AIe(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.L.M);d=K(a.e);e=a.l;$p=1;case 1:$z=ACv(e,b,c,d);if(C()){break _;}f=$z;L();if(f==Bf$.b)return 1;e=a.l;c=c+1|0;$p=2;case 2:$z=ACv(e,b,c,d);if(C()){break _;}b=$z;return b==Bf$.b?1:0;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function H7(a){return !a.cR&&a.bT>0?1:0;}
function ACo(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hn=a.hn+1|0;b=a.l.bi;if(b!==null){c=b.d-a.d;d=b.j-a.j;e=b.e-a.e;f=c*c+d*d+e*e;if(f>16384.0){$p=2;continue _;}if(a.hn>600&&!E(a.m,800)){if(f>=1024.0){$p=7;continue _;}a.hn=0;}}if(a.bT>0){$p=1;continue _;}a.hI=0;a.iN=0.0;a.gD=0.0;a.kI=0.0;$p=3;continue _;case 1:a.wK();if(C())
{break _;}$p=3;continue _;case 2:Ca(a);if(C()){break _;}if(a.hn>600&&!E(a.m,800)){if(f>=1024.0){$p=7;continue _;}a.hn=0;}if(a.bT>0){$p=1;continue _;}a.hI=0;a.iN=0.0;a.gD=0.0;a.kI=0.0;$p=3;case 3:$z=AE5(a);if(C()){break _;}g=$z;$p=4;case 4:$z=ACm(a);if(C()){break _;}h=$z;if(a.hI){if(g)a.i=a.i+0.03999999910593033;else if(h)a.i=a.i+0.03999999910593033;else if(a.cx)AF5(a);}a.iN=a.iN*0.9800000190734863;a.gD=a.gD*0.9800000190734863;a.kI=a.kI*0.8999999761581421;i=a.iN;j=a.gD;$p=5;case 5:ADt(a,i,j);if(C()){break _;}k
=a.l;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADJ(k,a,l);if(C()){break _;}k=$z;if(k!==null&&k.s>0){m=0;while(true){if(m>=k.s)break a;l=Z(k,m);if(l.rR())l.uZ(a);m=m+1|0;}}}return;case 7:Ca(a);if(C()){break _;}if(a.bT>0){$p=1;continue _;}a.hI=0;a.iN=0.0;a.gD=0.0;a.kI=0.0;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AF5(a){a.i=0.41999998688697815;}
function AQM(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(N(a.m)<0.07000000029802322){a.iN=(N(a.m)-0.5)*a.s0;a.gD=N(a.m)*a.s0;}a.hI=N(a.m)>=0.009999999776482582?0:1;if(N(a.m)<0.03999999910593033)a.kI=(N(a.m)-0.5)*60.0;a.v=a.v+a.kI;a.I=a.zR;$p=1;case 1:$z=AE5(a);if(C()){break _;}b=$z;$p=2;case 2:$z=ACm(a);if(C()){break _;}c=$z;if(!(!b&&!c))a.hI=N(a.m)>=0.800000011920929?0:1;return;default:E$();}}C3().s(a,b,c,$p);}
function A4I(a){return;}
function Zs(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CT(a,b,c+a.eO/2.0,d);e=a.l;f=a.L;$p=1;case 1:$z=AM5(e,f);if(C()){break _;}g=$z;if(!g)return 0;e=a.l;f=a.L;$p=2;case 2:$z=XT(e,a,f);if(C()){break _;}e=$z;if(e.s)return 0;e=a.l;f=a.L;$p=3;case 3:$z=AJh(e,f);if(C()){break _;}g=$z;return g?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABH(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=null;c=4;$p=1;case 1:a.fr(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function IV(){var a=this;EQ.call(a);a.dT=null;a.de=null;a.ho=0;}
function AKd(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.l;d=BY(a.d,a.j+AQn(a),a.e);b=BY(b.d,b.j+b.rJ(),b.e);$p=1;case 1:$z=AJj(c,d,b);if(C()){break _;}b=$z;return b!==null?0:1;default:E$();}}C3().s(a,b,c,d,$p);}
function APL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.ho=0;b=16.0;if(a.de===null){$p=1;continue _;}if(H7(a.de)){c=AR2(a.de,a);d=a.de;$p=2;continue _;}a.de=null;a:{if(!a.ho&&a.de!==null){if(a.dT===null)break a;if
(!E(a.m,20))break a;}if(!(a.dT!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 1:$z=a.x1();if(C()){break _;}d=$z;a.de=d;if(a.de!==null){d=a.l;m=a.de;$p=3;continue _;}b:{if(!a.ho&&a.de!==null){if(a.dT===null)break b;if(!E(a.m,20))break b;}if(!(a.dT!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<
50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 2:$z=AKd(a,d);if(C()){break _;}e=$z;if(e){d=a.de;$p=4;continue _;}b:{if(!a.ho&&a.de!==null){if(a.dT===null)break b;if(!E(a.m,20))break b;}if(!(a.dT!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e
=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 3:$z=ART(d,a,m,b);if(C()){break _;}d=$z;a.dT=d;c:{if(!a.ho&&a.de!==null){if(a.dT===null)break c;if(!E(a.m,20))break c;}if(!(a.dT!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 4:a.nQ(d,c);if(C()){break _;}c:{if(!a.ho&&a.de!==null){if(a.dT===null)break c;if
(!E(a.m,20))break c;}if(!(a.dT!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 5:$z=AE5(a);if(C()){break _;}n=$z;$p=6;case 6:$z=ACm(a);if(C()){break _;}o=$z;if(a.dT!==null&&E(a.m,100)){d=Ss(a.dT,a);p=a.c1*2.0;q=p*p;r=e;while(d!==null&&ABV(d,a.d,a.j,a.e)<q&&d.z<=r){AP1(a.dT);if(!ANm(a.dT)){d=Ss(a.dT,a);continue;}d
=null;a.dT=null;}a.hI=0;if(d!==null){q=d.x-a.d;s=d.w-a.e;t=d.z-r;a.v=CR(s,q)*180.0/3.1415927410125732-90.0;a.gD=a.s0;if(a.ho&&a.de!==null){u=a.de.d-a.d;r=a.de.e-a.e;v=a.v;a.v=CR(r,u)*180.0/3.1415927410125732-90.0;w=(v-a.v+90.0)*3.1415927410125732/180.0;a.iN= -Bq(w)*a.gD*1.0;a.gD=BC(w)*a.gD*1.0;}if(t!==0.0)a.hI=1;}if(N(a.m)<0.800000011920929&&!(!n&&!o))a.hI=1;return;}$p=9;continue _;case 7:$z=ART(d,a,m,b);if(C()){break _;}d=$z;a.dT=d;e=K(a.L.M);$p=5;continue _;case 8:$z=a.sD(j,k,l);if(C()){break _;}x=$z;if(x
>h){h=x;e=j;f=k;g=l;}i=i+1|0;if(i>=50){if(e>0){d=a.l;$p=10;continue _;}e=K(a.L.M);$p=5;continue _;}j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);continue _;case 9:AQM(a);if(C()){break _;}a.dT=null;return;case 10:$z=AJt(d,a,e,f,g,b);if(C()){break _;}d=$z;a.dT=d;e=K(a.L.M);$p=5;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AMA(a,b,c){return;}
function AKX(a){return null;}
function ACO(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Zs(a,b,c,d);if(C()){break _;}e=$z;if(!e)return 0;e=b|0;f=c|0;g=d|0;$p=2;case 2:$z=a.sD(e,f,g);if(C()){break _;}h=$z;return h<0.0?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function DQ(){IV.call(this);this.Fo=0;}
function AC8(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADG(a,b);if(C()){break _;}b=$z;if(b>0.5)a.hn=a.hn+2|0;$p=2;case 2:ACo(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function AK6(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMr(a);if(C()){break _;}if(a.l.i3)return;$p=2;case 2:Ca(a);if(C()){break _;}return;default:E$();}}C3().s(a,$p);}
function AKm(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(LE(a.l.bi,a)>=256.0)return null;b=a.l.bi;$p=1;case 1:$z=AKd(a,b);if(C()){break _;}c=$z;return !c?null:a.l.bi;default:E$();}}C3().s(a,b,c,$p);}
function AAI(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB1(a,b,c);if(C()){break _;}c=$z;if(!c)return 0;if(b!==a)a.de=b;return 1;default:E$();}}C3().s(a,b,c,$p);}
function AQU(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<2.5&&b.L.U>a.L.M&&b.L.M<a.L.U){a.dA=20;d=a.Fo;$p=1;continue _;}return;case 1:b.fr(a,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ABw(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0.5;f=a.l;$p=1;case 1:$z=ANg(f,b,c,d);if(C()){break _;}g=$z;return e-g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yy(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=Xy(e,f,g,h);if(C()){break _;}f=$z;if(f>E(a.m,8))return 0;$p=2;case 2:$z=ACO(a,b,c,d);if(C()){break _;}f=$z;return !f?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function I7(){DQ.call(this);}
function AHZ(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Ry(a.l)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:AC8(a);if(C()){break _;}return;case 2:$z=ADG(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.l;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGc(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.m)*30.0<(b-0.4000000059604645)*2.0)a.cV=300;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AWJ(a){BB();return Bf_.cW;}
function Jm(){DQ.call(this);}
function AIA(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Ry(a.l)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:AC8(a);if(C()){break _;}return;case 2:$z=ADG(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.l;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGc(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.m)*30.0<(b-0.4000000059604645)*2.0)a.cV=300;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AHS(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<10.0){d=b.d-a.d;e=b.e-a.e;if(!a.dA){f=AS9(a.l,a);f.j=f.j+1.399999976158142;g=b.j-0.20000000298023224-f.j;h=Ce(d*d+e*e)*0.20000000298023224;Dh(a.l,a,B(225),1.0,1.0/(N(a.m)*0.4000000059604645+0.800000011920929));b=a.l;$p=1;continue _;}a.v=CR(e,d)*180.0/3.1415927410125732-90.0;a.ho=1;}return;case 1:AOg(b,f);if(C()){break _;}QD(f,
d,g+h,e,0.6000000238418579,12.0);a.dA=30;a.v=CR(e,d)*180.0/3.1415927410125732-90.0;a.ho=1;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYM(a){BB();return Bga.cW;}
function JW(){var a=this;DQ.call(a);a.je=0;a.ut=0;a.Bg=0;a.jV=0;}
function ZO(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.ut=a.je;if(a.je>0&&a.jV<0)a.je=a.je-1|0;if(a.jV>=0)a.jV=2;$p=1;case 1:APL(a);if(C()){break _;}if(a.jV!=1)a.jV=(-1);return;default:E$();}}C3().s(a,$p);}
function AAK(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(a.jV<=0&&c<3.0)){if(a.jV<=0)break a;if(c>=7.0)break a;}if(!a.je)Dh(a.l,a,B(226),1.0,0.5);a.jV=1;a.je=a.je+1|0;if(a.je==a.Bg){b=a.l;d=a.d;e=a.j;f=a.e;c=3.0;$p=1;continue _;}a.ho=1;}return;case 1:X$(b,a,d,e,f,c);if(C()){break _;}$p=2;case 2:Ca(a);if(C()){break _;}a.ho=1;return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function Qm(a,b){return (a.ut+(a.je-a.ut|0)*b)/(a.Bg-2|0);}
function ASS(a){BB();return Bgb.cW;}
function Km(){DQ.call(this);}
function ARo(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADG(a,b);if(C()){break _;}b=$z;if(b<0.5&&LE(a.l.bi,a)<256.0)return a.l.bi;return null;default:E$();}}C3().s(a,b,$p);}
function Zl(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0;$p=1;case 1:a:{$z=ADG(a,d);if(C()){break _;}d=$z;if(d>0.5&&!E(a.m,100))a.de=null;else{if(c<=2.0)break a;if(c>=6.0)break a;if(E(a.m,10))break a;if(a.cx){e=b.d-a.d;f=b.e-a.e;g=Ce(e*e+f*f);a.g=e/g*0.5*0.800000011920929+a.g*0.20000000298023224;a.h=f/g*0.5*0.800000011920929+a.h*0.20000000298023224;a.i=0.4000000059604645;}}return;}$p=2;case 2:AQU(a,
b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZL(a){BB();return Bgc.cW;}
function GC(){IV.call(this);}
function AOy(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=c-1|0;$p=1;case 1:$z=ACv(e,b,f,d);if(C()){break _;}g=$z;L();if(g==BeO.b)return 10.0;e=a.l;$p=2;case 2:$z=ANg(e,b,c,d);if(C()){break _;}h=$z;return h-0.5;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AK3(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=Xy(e,f,g,h);if(C()){break _;}g=$z;if(g<=8)return 0;$p=2;case 2:$z=ACO(a,b,c,d);if(C()){break _;}g=$z;return !g?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function KG(){GC.call(this);this.x5=0;}
function AGS(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.x5&&b instanceof EQ){a.x5=1;d=1+E(a.m,3)|0;e=0;if(e<d){L();f=Bfa.b;g=1;h=1.0;$p=2;continue _;}}$p=1;case 1:$z=AB1(a,b,c);if(C()){break _;}c=$z;return c;case 2:$z=AGD(a,f,g,h);if(C()){break _;}i=$z;i.i=i.i+N(a.m)*0.05000000074505806;i.g=i.g+(N(a.m)-N(a.m))*0.10000000149011612;i.h=i.h+(N(a.m)-N(a.m))*0.10000000149011612;e
=e+1|0;if(e>=d){$p=1;continue _;}L();f=Bfa.b;g=1;h=1.0;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A60(a){return B(227);}
function A4e(a){return B(227);}
function AYk(a){return B(227);}
function IC(){GC.call(this);this.qy=0;}
function ATx(a){return B(228);}
function A9r(a){return B(228);}
function AV4(a){return B(229);}
function AXR(a,b){if(!a.qy)return 0;Pi(b,a);return 1;}
function AWc(a){BB();return Bgd.cW;}
function DB(){var a=this;D.call(a);a.AC=0.0;a.w3=0;}
function Bbi(){var a=new DB();A3b(a);return a;}
function Bbx(a){var b=new DB();AVH(b,a);return b;}
function A3b(a){return;}
function AVH(a,b){return;}
function NK(a,b){return;}
function AF7(a,b){if(b==32)return Cl(a)*4.294967295E9+(-2.147483648E9)|0;return Cl(a)*Long_toNumber(Long_shl(Long_fromInt(1),CB(32,b)))|0;}
function Lp(a){return AF7(a,32);}
function E(a,b){return Cl(a)*b|0;}
function GB(a){return Long_or(Long_shl(Long_fromInt(Lp(a)),32),Long_fromInt(Lp(a)));}
function N(a){return Cl(a);}
function Cl(a){return Math.random();}
function CZ(a){var b,c,d,e;if(a.w3){a.w3=0;return a.AC;}while(true){while(true){b=2.0*Cl(a)-1.0;c=2.0*Cl(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=Ee((-2.0)*A3R(d)/d);a.AC=c*e;a.w3=1;return b*e;}
function NC(){D.call(this);}
var Bge=null;var Bgf=null;function Bgg(){var a=new NC();AIk(a);return a;}
function AIk(a){return;}
function I0(b){var c,d,e,f,g,h;BaZ(F(NC));try{BW();c=Bgh+1|0;d=0;while(d<b){e=Bgh+1|0;Bgh=e;f=Bgi;g=CY(e);h=new Rr;h.Bv=e;h.ri=null;h.o0=null;h.lQ=(-1);h.jL=0;BR(f,g,h);d=d+1|0;}U(Bge,CY(c));U(Bge,CY(b));return c;}finally{BcQ(F(NC));}}
function WT(b){var c,d,e,f,g;BaZ(F(NC));try{c=b.bk;while(c<b.cy){BW();d=Bgj;Bd();e=new Pb;f=BdF.createTexture();e.Ij=(-1);e.Ig=(-1);e.Gj=1;e.Hb=0;e.BN=f;g=S3(d,e);AQZ(b,c,g);U(Bgf,CY(g));c=c+1|0;}}finally{BcQ(F(NC));}}
function WN(b){var c;c=AAq($rt_createByteArray(b));c.kN=Bgk;return c;}
function Rf(b){return ALP($rt_createIntArray(b));}
function H3(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new WM;f=0+d|0;KO(e,d);e.bk=0;e.cy=f;e.yn=0;e.xw=0;e.xp=c;return e;}
function ALU(){Bge=Ci();Bgf=Ci();}
function Pa(){var a=this;D.call(a);a.cP=null;a.eT=null;a.jb=0.0;a.q_=0.0;a.iz=0;a.jP=0;a.Aa=null;}
function ACW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.q_+(a.jb-a.q_)*b;d=a.cP.f;B3();Bv(d.T+(d.I-d.T)*b,1.0,0.0,0.0);Bv(d.P+(d.v-d.P)*b,0.0,1.0,0.0);Hy();BD();e=a.cP.B;f=
K(d.d);g=K(d.j);h=K(d.e);$p=1;case 1:$z=ANg(e,f,g,h);if(C()){break _;}i=$z;BU(i,i,i,1.0);if(a.eT===null){B3();if(a.jP){j=(a.iz+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(Ea(j)*3.1415927410125732)*0.30000001192092896,Bq(Ea(j)*3.1415927410125732*2.0)*0.4000000059604645, -k*0.4000000059604645);}Bw(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Ba(32826);if(a.jP){j=(a.iz+b)/8.0;k=Bq(j*j*3.1415927410125732);Bv(Bq(Ea(j)*3.1415927410125732)*70.0,0.0,1.0,
0.0);Bv( -k*20.0,0.0,0.0,1.0);}f=3553;d=a.cP.bo;e=a.cP.f.tK;l=PM(a.cP.f);$p=2;continue _;}B3();if(a.jP){j=(a.iz+b)/8.0;k=Bq(j*3.1415927410125732);Bw( -Bq(Ea(j)*3.1415927410125732)*0.4000000059604645,Bq(Ea(j)*3.1415927410125732*2.0)*0.20000000298023224, -k*0.20000000298023224);}Bw(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Ba(32826);if(a.jP){j=(a.iz+b)/8.0;k=Bq(j*j*3.1415927410125732);m=Bq(Ea(j)*3.1415927410125732);Bv( -k*20.0,0.0,1.0,0.0);b
= -m;Bv(b*20.0,0.0,0.0,1.0);Bv(b*80.0,1.0,0.0,0.0);}CC(0.4000000059604645,0.4000000059604645,0.4000000059604645);if(a.eT.bB<256){L();if(!BeM.data[a.eT.bB].em()){f=3553;d=a.cP.bo;e=B(179);$p=5;continue _;}}if(a.eT.bB>=256){f=3553;d=a.cP.bo;e=B(230);$p=3;continue _;}f=3553;d=a.cP.bo;e=B(179);$p=4;continue _;case 2:$z=AD2(d,e,l);if(C()){break _;}g=$z;Cp(f,g);Bw((-1.0),3.5999999046325684,3.5);Bv(120.0,0.0,0.0,1.0);Bv(200.0,1.0,0.0,0.0);Bv((-135.0),0.0,1.0,0.0);CC(1.0,1.0,1.0);Bw(5.599999904632568,0.0,0.0);n=Sb(Bgl,
a.cP.f);CC(1.0,1.0,1.0);ALw(n);BD();Bc(32826);DT();return;case 3:$z=AHr(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=BeI;m=(((DK(a.eT)%16|0)*16|0)+0|0)/256.0;o=(((DK(a.eT)%16|0)*16|0)+16|0)/256.0;p=(((DK(a.eT)/16|0)*16|0)+0|0)/256.0;q=(((DK(a.eT)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Dd(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,
1.0,0.0,r,u);Br(e);Bz(e);Dd(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),t,s);G(e,0.0,0.0,(-0.0625),r,s);Br(e);Bz(e);Dd(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Br(e);Bz(e);Dd(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,
(-0.0625),y,s);f=f+1|0;}Br(e);Bz(e);Dd(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Br(e);Bz(e);Dd(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Br(e);Bc(32826);BD();Bc(32826);DT();return;case 4:$z=AHr(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=
BeI;m=(((DK(a.eT)%16|0)*16|0)+0|0)/256.0;o=(((DK(a.eT)%16|0)*16|0)+16|0)/256.0;p=(((DK(a.eT)/16|0)*16|0)+0|0)/256.0;q=(((DK(a.eT)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Dd(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,1.0,0.0,r,u);Br(e);Bz(e);Dd(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),
t,s);G(e,0.0,0.0,(-0.0625),r,s);Br(e);Bz(e);Dd(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Br(e);Bz(e);Dd(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Br(e);Bz(e);Dd(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba
=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Br(e);Bz(e);Dd(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Br(e);Bc(32826);BD();Bc(32826);DT();return;case 5:$z=AHr(d,e);if(C()){break _;}g=$z;Cp(f,g);GY(a.Aa,BeM.data[a.eT.bB]);BD();Bc(32826);DT();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,
$p);}
function AB9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(3008);if(a.cP.f.cV<=0){c=a.cP.B.bi;$p=1;continue _;}c=a.cP.bo;d=B(179);$p=2;continue _;case 1:$z=AHw(c);if(C()){break _;}e=$z;if(!e){d=a.cP.f;c=BfN;$p=3;continue _;}e=K(a.cP.f.d);f=K(a.cP.f.j);g=K(a.cP.f.e);c
=a.cP.bo;d=B(179);$p=4;continue _;case 2:$z=AHr(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeI;BU(1.0,1.0,1.0,0.8999999761581421);Ba(3042);Df(770,771);e=0;while(e<2){B3();L();f=Bgm.bb+(e*16|0)|0;g=(f&15)<<4;f=f&240;h=g;i=h/256.0;h=(h+15.989999771118164)/256.0;j=f;k=j/256.0;j=(j+15.989999771118164)/256.0;f=(e*2|0)-1|0;Bw( -f*0.23999999463558197,(-0.30000001192092896),0.0);Bv(f*10.0,0.0,1.0,0.0);Bz(c);l=h;m=j;G(c,(-0.5),(-0.5),(-0.5),l,m);n=i;G(c,0.5,(-0.5),(-0.5),n,m);m=k;G(c,0.5,0.5,(-0.5),n,m);G(c,(-0.5),
0.5,(-0.5),l,m);Br(c);BD();e=e+1|0;}BU(1.0,1.0,1.0,1.0);Bc(3042);c=a.cP.B.bi;$p=1;continue _;case 3:$z=AGE(d,c);if(C()){break _;}e=$z;if(!e){Ba(3008);return;}c=a.cP.bo;d=B(231);$p=6;continue _;case 4:$z=AHr(c,d);if(C()){break _;}o=$z;Cp(3553,o);c=a.cP.B;$p=5;case 5:$z=ACv(c,e,f,g);if(C()){break _;}p=$z;L();if(BeM.data[p]===null){d=a.cP.f;c=BfN;$p=3;continue _;}e=BeM.data[p].cj(2);BA();c=BeI;d=a.cP.f;$p=8;continue _;case 6:$z=AHr(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeI;d=a.cP.f;$p=7;case 7:$z=ADG(d,
b);if(C()){break _;}h=$z;BU(h,h,h,0.5);Ba(3042);Df(770,771);B3();h= -a.cP.f.v/64.0;i=a.cP.f.I/64.0;Bz(c);q=4.0+h;l=4.0+i;G(c,(-1.0),(-1.0),(-0.5),q,l);r=0.0+h;G(c,1.0,(-1.0),(-0.5),r,l);l=0.0+i;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Br(c);BD();BU(1.0,1.0,1.0,1.0);Bc(3042);Ba(3008);return;case 8:ADG(d,b);if(C()){break _;}BU(0.10000000149011612,0.10000000149011612,0.10000000149011612,0.5);B3();i=e%16|0;j=i/256.0-0.0078125;i=(i+15.989999771118164)/256.0+0.0078125;k=e/16|0;s=k/256.0-0.0078125;h=(k+15.989999771118164)
/256.0+0.0078125;Bz(c);q=i;l=h;G(c,(-1.0),(-1.0),(-0.5),q,l);r=j;G(c,1.0,(-1.0),(-0.5),r,l);l=s;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Br(c);BD();BU(1.0,1.0,1.0,1.0);d=a.cP.f;c=BfN;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AI9(a){var b,c,d,e;a.q_=a.jb;if(a.jP){a.iz=a.iz+1|0;if(a.iz==8){a.iz=0;a.jP=0;}}b=D$(a.cP.f.K);c=0.4000000059604645;d=(b!==a.eT?0.0:1.0)-a.jb;e=(-0.4000000059604645);if(d>=e)e=d;if(e<=c)c=e;a.jb=a.jb+c;if(a.jb<0.10000000149011612)a.eT=b;}
function AGI(a){a.jb=0.0;}
function Pk(a){a.iz=(-1);a.jP=1;}
function AM7(a){a.jb=0.0;}
function P(){var a=this;D.call(a);a.bb=0;a.b=0;a.qe=0.0;a.nR=0.0;a.da=0.0;a.cM=0.0;a.c_=0.0;a.dc=0.0;a.cF=0.0;a.dd=0.0;a.gK=null;a.Ew=0.0;a.b_=null;}
var Bgn=null;var Bgo=null;var Bgp=null;var Bgq=null;var Bgr=null;var Bgs=null;var Bgt=null;var Bgu=null;var Bgv=null;var BeM=null;var Bgw=null;var Bgx=null;var Bgy=null;var Bgz=null;var BgA=null;var BeS=null;var BeO=null;var BeP=null;var BeW=null;var BeY=null;var Be4=null;var BeN=null;var BfV=null;var BgB=null;var BfW=null;var BgC=null;var Be9=null;var Be$=null;var Bfd=null;var Bfc=null;var Bfb=null;var BeZ=null;var Be0=null;var Be_=null;var Be2=null;var BgD=null;var BgE=null;var BgF=null;var BgG=null;var BgH
=null;var BgI=null;var BgJ=null;var BgK=null;var BgL=null;var BgM=null;var BgN=null;var BgO=null;var BgP=null;var BgQ=null;var Bfa=null;var BgR=null;var Be5=null;var Be6=null;var Be7=null;var Be8=null;var Bff=null;var Bfe=null;var BeQ=null;var BeR=null;var BeX=null;var Bfh=null;var Bfg=null;var Be3=null;var Bfi=null;var Be1=null;var Bgm=null;var BgS=null;var BgT=null;var BgU=null;var BgV=null;var BgW=null;var BgX=null;var BgY=null;var BgZ=null;var Bg0=null;var Bg1=null;var Bg2=null;var Bg3=null;var Bg4=null;var Bf$
=null;var Bg5=null;var Bg6=null;function L(){L=Bt(P);AVe();}
function Bg7(a,b){var c=new P();D1(c,a,b);return c;}
function Ky(a,b,c){var d=new P();C8(d,a,b,c);return d;}
function D1(a,b,c){var d,e,f;L();a.gK=Bgn;a.Ew=1.0;if(BeM.data[b]!==null){c=new Cb;d=new S;V(d);Bl(c,T(FN(H(FN(H(Be(H(d,B(232)),b),B(233)),BeM.data[b]),B(234)),a)));M(c);}a.b_=c;BeM.data[b]=a;a.b=b;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);Bgx.data[b]=a.d5();e=Bgy;f=!a.d5()?0:255;e.data[b]=f;Bgz.data[b]=0;}
function C8(a,b,c,d){L();D1(a,b,d);a.bb=c;}
function BM(a,b){a.gK=b;return a;}
function Gy(a,b){Bgy.data[a.b]=b;return a;}
function GL(a,b){BgA.data[a.b]=15.0*b|0;return a;}
function Dn(a,b){a.nR=b*3.0;return a;}
function A8Z(a){return 1;}
function AWC(a){return 0;}
function BH(a,b){var c;a.qe=b;c=a.nR;b=b*5.0;if(c<b)a.nR=b;return a;}
function Fe(a,b){Bgw.data[a.b]=b;}
function Bo(a,b,c,d,e,f,g){a.da=b;a.cM=c;a.c_=d;a.dc=e;a.cF=f;a.dd=g;}
function AE$(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sO(c,d,e);if(C()){break _;}f=$z;return f;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AGs(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!f&&a.cM>0.0)c=1;else if(f==1&&a.cF<1.0)c=1;else if(f==2&&a.c_>0.0)c=1;else if(f==3&&a.dd<1.0)c=1;else if(f==4&&a.da>0.0)c=1;else{if(f!=5)break a;if(a.dc>=1.0)break a;c=1;}return c;}$p=1;case 1:$z=b.lg(c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ABY(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}c=$z;return a.eY(f,c);default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A7d(a,b,c){return a.cj(b);}
function AVC(a,b){return a.bb;}
function K7(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.da;h=d;i=h+a.cM;j=e;return D4(g,i,j+a.c_,f+a.dc,h+a.cF,j+a.dd);}
function ALv(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.hw(b,c,d,e);if(C()){break _;}h=$z;if(h!==null&&L7(f,h))U(g,h);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Nm(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.da;h=d;i=h+a.cM;j=e;return D4(g,i,j+a.c_,f+a.dc,h+a.cF,j+a.dd);}
function A5h(a){return 1;}
function A6q(a,b,c){return a.pf();}
function A3L(a){return 1;}
function AHO(a,b,c,d,e,f){return;}
function APb(a,b,c,d,e,f){return;}
function Z7(a,b,c,d,e,f){return;}
function YO(a,b,c,d,e,f){return;}
function A3V(a){return 10;}
function AA7(a,b,c,d,e){return;}
function Z2(a,b,c,d,e){return;}
function AYn(a,b){return 1;}
function ATO(a,b,c){return a.b;}
function ABd(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qe<0.0)c=0.0;else{if(M8(b,a)){$p=1;continue _;}c=1.0/a.qe/100.0;}return c;case 1:$z=AKP(b,a);if(C()){break _;}c=$z;return c/a.qe/30.0;default:E$();}}C3().s(a,b,c,$p);}
function Yg(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=1.0;$p=1;case 1:a.HP(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEX(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.eH(b.q);i=0;j=0.15000000596046448;k=c;l=d;m=e;while(i<h){if(N(b.q)<=g){n=a.dX(f,b.q);if(n>0){o=Hf(b,k+N(b.q)*0.699999988079071+j,l+N(b.q)*0.699999988079071+j,m+N(b.q)*0.699999988079071+j,Kz(n,1));o.hc=10;$p=1;continue _;}}i=i+1|0;}return;case 1:AOg(b,
o);if(C()){break _;}while(true){i=i+1|0;if(i>=h)break;if(N(b.q)>g)continue;n=a.dX(f,b.q);if(n<=0)continue;else{o=Hf(b,k+N(b.q)*0.699999988079071+j,l+N(b.q)*0.699999988079071+j,m+N(b.q)*0.699999988079071+j,Kz(n,1));o.hc=10;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AZ0(a,b){return a.nR/5.0;}
function Kb(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;h= -c;i= -d;j= -e;b=Dk(f,h,i,j);f=Dk(g,h,i,j);k=KM(b,f,a.da);l=KM(b,f,a.dc);m=JT(b,f,a.cM);n=JT(b,f,a.cF);o=Kw(b,f,a.c_);p=Kw(b,f,a.dd);if(!Rv(a,k))k=null;if(!Rv(a,l))l=null;if(!Xr(a,m))m=null;if(!Xr(a,n))n=null;if(!RN(a,o))o=null;if(!RN(a,p))p=null;q=null;if(k!==null)q=k;if(l!==null&&!(q!==null&&DI(b,l)>=DI(b,q)))q=l;if(m!==null&&!(q!==null&&DI(b,m)>=DI(b,q)))q=m;if(n!==null&&!(q!==null&&DI(b,n)>=DI(b,q)))q=n;if(o!==null&&!(q!==null&&DI(b,o)>=DI(b,q)))q=
o;if(p!==null&&!(q!==null&&DI(b,p)>=DI(b,q)))q=p;if(q===null)return null;r=(-1);if(q===k)r=4;if(q===l)r=5;if(q===m)r=0;if(q===n)r=1;if(q===o)r=2;if(q===p)r=3;return A0z(c,d,e,r,Dk(q,c,d,e));}
function Rv(a,b){return b===null?0:b.z>=a.cM&&b.z<=a.cF&&b.w>=a.c_&&b.w<=a.dd?1:0;}
function Xr(a,b){return b===null?0:b.x>=a.da&&b.x<=a.dc&&b.w>=a.c_&&b.w<=a.dd?1:0;}
function RN(a,b){return b===null?0:b.x>=a.da&&b.x<=a.dc&&b.z>=a.cM&&b.z<=a.cF?1:0;}
function AQY(a,b,c,d,e){return;}
function AVi(a){return 0;}
function AEE(a,b,c,d,e){return 1;}
function AGG(a,b,c,d,e,f){return 0;}
function AJI(a,b,c,d,e,f){return;}
function YG(a,b,c,d,e,f){return;}
function AAc(a,b,c,d,e,f){return;}
function AF4(a,b,c,d,e,f,g){return;}
function APV(a,b,c,d,e){return;}
function A9h(a,b,c,d,e){return 16777215;}
function AVe(){var b,c;Bgn=Ii(B(235),1.0,1.0);Bgo=Ii(B(236),1.0,1.0);Bgp=Ii(B(237),1.0,1.0);Bgq=Ii(B(238),1.0,1.0);Bgr=Ii(B(235),1.0,1.0);Bgs=Ii(B(235),1.0,1.5);Bgt=A_Z(B(235),1.0,1.0);Bgu=Ii(B(239),1.0,1.0);Bgv=Bb9(B(240),1.0,1.0);BeM=J(P,256);Bgw=$rt_createBooleanArray(256);Bgx=$rt_createBooleanArray(256);Bgy=$rt_createIntArray(256);Bgz=$rt_createBooleanArray(256);BgA=$rt_createIntArray(256);BeS=BM(Dn(BH(Bbc(1,1),1.5),10.0),Bgr);BeO=BM(BH(BbF(2),0.6000000238418579),Bgq);BeP=BM(BH(A_4(3,2),0.5),Bgp);BeW=BM(Dn(BH(Ky(4,
16,Bg8),2.0),10.0),Bgr);BeY=BM(Dn(BH(Ky(5,4,Bg9),2.0),5.0),Bgo);Be4=BM(BH(Bcr(6,15),0.0),Bgq);BeN=BM(Dn(BH(Ky(7,17,Bg8),(-1.0)),6000000.0),Bgr);BfV=Gy(BH(AUh(8,BfN),100.0),3);BgB=Gy(BH(AXF(9,BfN),100.0),3);BfW=Gy(GL(BH(AUh(10,BfO),0.0),1.0),255);BgC=Gy(GL(BH(AXF(11,BfO),100.0),1.0),255);Be9=BM(BH(BbA(12,18),0.5),Bgv);Be$=BM(BH(BbJ(13,19),0.6000000238418579),Bgp);Bfd=BM(Dn(BH(SL(14,32),3.0),5.0),Bgr);Bfc=BM(Dn(BH(SL(15,33),3.0),5.0),Bgr);Bfb=BM(Dn(BH(SL(16,34),3.0),5.0),Bgr);BeZ=BM(BH(BcL(17),2.0),Bgo);Be0=BM(Gy(BH(BaF(18,
52),0.20000000298023224),1),Bgq);Be_=BM(BH(Ba7(19),0.6000000238418579),Bgq);Be2=BM(BH(Ba3(20,49,Bg$,0),0.30000001192092896),Bgt);BgD=null;BgE=null;BgF=null;BgG=null;BgH=null;BgI=null;BgJ=null;BgK=null;BgL=null;BgM=null;BgN=null;BgO=null;BgP=null;BgQ=null;Bfa=BM(BH(Ky(35,64,Bg_),0.800000011920929),Bgu);BgR=null;Be5=BM(BH(A3i(37,13),0.0),Bgq);Be6=BM(BH(A3i(38,12),0.0),Bgq);Be7=GL(BM(BH(ATM(39,29),0.0),Bgq),0.125);Be8=BM(BH(ATM(40,28),0.0),Bgq);Bff=BM(Dn(BH(AEA(41,39),3.0),10.0),Bgs);Bfe=BM(Dn(BH(AEA(42,38),5.0),
10.0),Bgs);BeQ=BM(Dn(BH(A9k(43,1),2.0),10.0),Bgr);BeR=BM(Dn(BH(A9k(44,0),2.0),10.0),Bgr);BeX=BM(Dn(BH(Ky(45,7,Bg8),2.0),10.0),Bgr);Bfh=BM(BH(BaG(46,8),0.0),Bgq);Bfg=BM(BH(Bah(47,35),1.5),Bgo);Be3=BM(Dn(BH(Ky(48,36,Bg8),2.0),10.0),Bgr);Bfi=BM(Dn(BH(Bbm(49,37),10.0),20.0),Bgr);Be1=BM(GL(BH(Ba$(50,80),0.0),0.9375),Bgo);Bgm=BM(GL(BH(BcR(51,31),0.0),1.0),Bgo);BgS=BM(BH(BcH(52,65),5.0),Bgs);BgT=A$L(53,BeY);BgU=BM(BH(A_6(54),2.5),Bgo);BgV=BM(BH(BbL(55,62),0.5),Bgs);BgW=BM(Dn(BH(SL(56,50),3.0),5.0),Bgr);BgX=BM(Dn(BH(AEA(57,
40),5.0),10.0),Bgs);BgY=BM(BH(Bbp(58),2.5),Bgo);BgZ=BM(BH(Bcu(59,88),0.0),Bgq);Bg0=BM(BH(BbX(60),0.6000000238418579),Bgp);Bg1=BM(BH(A4J(61,0),3.5),Bgr);Bg2=GL(BM(BH(A4J(62,1),3.5),Bgr),0.875);b=new Vs;BB();AHq(b,63,F(Jh),Bha.cW);Bg3=BM(BH(b,1.0),Bgo);Bg4=BM(BH(Bab(64),3.0),Bgo);Bf$=BM(BH(Bcj(65,83),0.4000000059604645),Bgo);Bg5=BM(BH(BaX(66,128),1.0),Bgs);Bg6=A$L(67,BeW);c=0;while(c<256){if(BeM.data[c]!==null)Bhb.data[c]=A_5(c-256|0);c=c+1|0;}}
function RB(){}
function AJd(){var a=this;Gg.call(a);a.d$=null;a.s=0;}
function Ci(){var a=new AJd();AV7(a);return a;}
function AV7(a){a.d$=J(D,10);}
function Tt(a,b){var c;if(a.d$.data.length<b){c=a.d$.data.length>=1073741823?2147483647:DE(b,DE(a.d$.data.length*2|0,5));a.d$=Nr(a.d$,c);}}
function Z(a,b){K9(a,b);return a.d$.data[b];}
function CX(a){return a.s;}
function Ra(a,b,c){var d;K9(a,b);d=a.d$.data[b];a.d$.data[b]=c;return d;}
function U(a,b){var c,d;Tt(a,a.s+1|0);c=a.d$.data;d=a.s;a.s=d+1|0;c[d]=b;a.d7=a.d7+1|0;return 1;}
function AMI(a,b,c){var d;if(b>=0&&b<=a.s){Tt(a,a.s+1|0);d=a.s;while(d>b){a.d$.data[d]=a.d$.data[d-1|0];d=d+(-1)|0;}a.d$.data[b]=c;a.s=a.s+1|0;a.d7=a.d7+1|0;return;}c=new BO;O(c);M(c);}
function Eo(a,b){var c,d,e,f;K9(a,b);c=a.d$.data[b];a.s=a.s-1|0;while(b<a.s){d=a.d$.data;e=a.d$.data;f=b+1|0;d[b]=e[f];b=f;}a.d$.data[a.s]=null;a.d7=a.d7+1|0;return c;}
function H$(a,b){var c;c=AA_(a,b);if(c<0)return 0;Eo(a,c);return 1;}
function Dy(a){ZD(a.d$,0,a.s,null);a.s=0;}
function K9(a,b){var c;if(b>=0&&b<a.s)return;c=new BO;O(c);M(c);}
function DH(){}
function TH(){D.call(this);this.AM=null;}
function AQA(a){CM(a.AM,SR(0,1,null,null));}
function AWl(a){AQA(a);}
function TG(){var a=this;D.call(a);a.Eq=null;a.EK=null;}
function AQx(a){CM(a.Eq,SR(0,0,null,a.EK.result));}
function AS3(a){AQx(a);}
function TF(){D.call(this);this.Dw=null;}
function ASc(a){CM(a.Dw,SR(1,0,B(241),null));}
function AZk(a){ASc(a);}
function TE(){D.call(this);this.Bo=null;}
function AJ7(a,b){var c,d,e,f,g,h,i;c=a.Bo.result;d=A9W();e=J(B4,1).data;e[0]=B(242);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function ANI(a,b){AJ7(a,b);}
function A6G(a,b){ANI(a,b);}
function SA(){D.call(this);}
var Bf4=null;function Bhc(){var a=new SA();ZM(a);return a;}
function ZM(a){return;}
function AFo(){Bf4=De();BR(Bf4,B(24),A1E());}
function Cb(){B6.call(this);}
function Bhd(){var a=new Cb();AT8(a);return a;}
function AT8(a){O(a);}
function Vd(){Cb.call(this);this.Is=null;}
function EF(){B6.call(this);}
function BcZ(){var a=new EF();AUI(a);return a;}
function AUI(a){O(a);}
function AA8(){D.call(this);}
function Bhe(){var a=new AA8();AY3(a);return a;}
function AY3(a){return;}
function Fk(){var a=this;D.call(a);a.mH=0;a.bk=0;a.cy=0;a.lv=0;}
function Bhf(a){var b=new Fk();KO(b,a);return b;}
function KO(a,b){a.lv=(-1);a.mH=b;a.cy=b;}
function AVy(a){return a.mH;}
function A8o(a){return a.bk;}
function EO(a,b){var c,d;if(b>=0&&b<=a.cy){a.bk=b;if(b<a.lv)a.lv=0;return a;}c=new Cb;d=new S;V(d);Bl(c,T(H(Be(H(Be(H(d,B(243)),b),B(244)),a.cy),B(245))));M(c);}
function A04(a){return a.cy;}
function No(a,b){var c,d;if(b>=0&&b<=a.mH){if(a.lv>b)a.lv=(-1);a.cy=b;if(a.bk>a.cy)a.bk=a.cy;return a;}c=new Cb;d=new S;V(d);Bl(c,T(H(Be(H(Be(H(d,B(246)),b),B(244)),a.mH),B(245))));M(c);}
function EB(a){a.bk=0;a.cy=a.mH;a.lv=(-1);return a;}
function Gx(a){a.cy=a.bk;a.bk=0;a.lv=(-1);return a;}
function Ct(a){return a.cy-a.bk|0;}
function Fl(a){return a.bk>=a.cy?0:1;}
function L9(){Fk.call(this);}
function ADp(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new S;V(i);Bl(h,T(Be(H(Be(H(i,B(247)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gu;O(h);M(h);}if(d<0){h=new BO;i=new S;V(i);Bl(h,T(H(Be(H(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=RF(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;h=new S;V(h);Bl(i,T(H(Be(H(Be(H(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function VJ(a,b){return ADp(a,b,0,b.data.length);}
function LT(a){EB(a);return a;}
function TL(a){Gx(a);return a;}
function Qa(a,b){No(a,b);return a;}
function AE3(){var a=this;D.call(a);a.F=null;a.cz=0;a.fq=0;a.dR=0;}
function A8h(a){var b=new AE3();ATC(b,a);return b;}
function Ki(){var a=new AE3();AS_(a);return a;}
function ATC(a,b){a.cz=(-1);a.fq=0;a.dR=0;a.F=b;}
function AS_(a){a.cz=(-1);a.fq=0;a.dR=0;}
function AMw(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cz=f;$p=1;case 1:AN0(a,b,c,d,e);if(C()){break _;}a.cz=(-1);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AN0(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b.em();g=a.F;$p=1;case 1:b.xL(g,c,d,e);if(C()){break _;}if(!f){$p=2;continue _;}if(f==4){$p=3;continue _;}if(f==1){$p=4;continue _;}if(f==6){$p=5;continue _;}if(f==2){$p=6;continue _;}if(f==3){$p=7;continue _;}if(f==5){$p=8;continue _;}if(f==8){$p=9;continue _;}if(f==7){$p=10;continue _;}if(f==9){$p=11;continue _;}if(f==10){$p=12;continue _;}if
(f!=11)return 0;$p=13;continue _;case 2:$z=ABT(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 3:$z=AB3(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 4:$z=AA9(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 5:$z=ALI(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 6:$z=AN2(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 7:$z=ZR(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 8:$z=ADs(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 9:$z=AJw(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 10:$z=AKA(a,b,c,d,e);if(C())
{break _;}c=$z;return c;case 11:$z=AM8(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 12:$z=AIt(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 13:$z=AFG(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AN2(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.F;$p=1;case 1:$z=f.eI(c,d,e);if(C()){break _;}g=$z;BA();f=BeI;h=a.F;$p=2;case 2:$z=b.Cw(h,c,d,e);if(C()){break _;}i=$z;if(BgA.data[b.b]>0)i=1.0;Cq(f,i,i,i);if(g==1)GJ(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if(g==2)GJ(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,
0.0);else if(g==3)GJ(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(g!=4)GJ(a,b,c,d,e,0.0,0.0);else GJ(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ZR(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:BA();f=BeI;g=b.cj(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cw(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=i+15.989999771118164;p=o/256.0;q=1.399999976158142;b=a.F;g=d-1|0;$p=2;case 2:$z=b.lg(c,g,e);if(C()){break _;}j=$z;if(j){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,
m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,
t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}b=Bgm;h=a.F;$p=3;case 3:$z=AFY(b,h,c,g,e);if(C()){break _;}g=$z;if(g){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,
x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}bi=0.20000000298023224;bj=0.0625;if((((c+d|0)+e|0)&1)!=1){ba=l;bb=m;x=n;z=p;}else{x=(k+16|0)/256.0;z=(o
+16.0)/256.0;ba=l;bb=m;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){r=ba;ba=bb;bb=r;}b=Bgm;h=a.F;g=c-1|0;$p=4;case 4:$z=AFY(b,h,g,d,e);if(C()){break _;}g=$z;if(g){w=c+bi;s=d+q+bj;t=e+1|0;G(f,w,s,t,ba,x);u=c+0|0;v=(d+0|0)+bj;G(f,u,v,t,ba,z);r=e+0|0;G(f,u,v,r,bb,z);G(f,w,s,r,bb,x);G(f,w,s,r,bb,x);G(f,u,v,r,bb,z);G(f,u,v,t,ba,z);G(f,w,s,t,ba,x);}b=Bgm;h=a.F;j=c+1|0;$p=5;case 5:$z=AFY(b,h,j,d,e);if(C()){break _;}g=$z;if(g){r=j-bi;w=d+q+bj;s=e+0|0;G(f,r,w,s,bb,x);t=j-0|0;u=(d+0|0)+bj;G(f,t,u,s,bb,z);v=e+1|0;G(f,t,
u,v,ba,z);G(f,r,w,v,ba,x);G(f,r,w,v,ba,x);G(f,t,u,v,ba,z);G(f,t,u,s,bb,z);G(f,r,w,s,bb,x);}b=Bgm;h=a.F;g=e-1|0;$p=6;case 6:$z=AFY(b,h,c,d,g);if(C()){break _;}g=$z;if(g){r=c+0|0;w=d+q+bj;s=e+bi;G(f,r,w,s,ba,x);t=(d+0|0)+bj;u=e+0|0;G(f,r,t,u,ba,z);v=j;G(f,v,t,u,bb,z);G(f,v,w,s,bb,x);G(f,v,w,s,bb,x);G(f,v,t,u,bb,z);G(f,r,t,u,ba,z);G(f,r,w,s,ba,x);}b=Bgm;h=a.F;bk=e+1|0;$p=7;case 7:$z=AFY(b,h,c,d,bk);if(C()){break _;}g=$z;if(g){t=j;u=d+q+bj;v=bk-bi;G(f,t,u,v,bb,x);r=(d+0|0)+bj;w=bk-0|0;G(f,t,r,w,bb,z);s=c+0|0;G(f,
s,r,w,ba,z);G(f,s,u,v,ba,x);G(f,s,u,v,ba,x);G(f,s,r,w,ba,z);G(f,t,r,w,bb,z);G(f,t,u,v,bb,x);}b=Bgm;h=a.F;d=d+1|0;$p=8;case 8:$z=AFY(b,h,c,d,e);if(C()){break _;}g=$z;if(g){r=c+0.5;t=r+0.5;u=r-0.5;r=e+0.5;w=r+0.5;r=r-0.5;if(((c+d|0)+e|0)&1){s=c+0|0;t=d+(-0.20000000298023224);G(f,s,t,w,m,n);u=d+0|0;G(f,s,u,r,m,p);v=j;G(f,v,u,r,l,p);G(f,v,t,w,l,n);x=(k+16|0)/256.0;z=(o+16.0)/256.0;G(f,v,t,r,m,x);G(f,v,u,w,m,z);G(f,s,u,w,l,z);G(f,s,t,r,l,x);}else{v=d+(-0.20000000298023224);x=e+0|0;G(f,u,v,x,m,n);z=d+0|0;G(f,t,z,
x,m,p);r=bk;G(f,t,z,r,l,p);G(f,u,v,r,l,n);w=(k+16|0)/256.0;s=(o+16.0)/256.0;G(f,t,v,r,m,w);G(f,u,z,r,m,s);G(f,u,z,x,l,s);G(f,t,v,x,l,w);}}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function ADs(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeI;g=b.cj(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cw(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=j+16|0;l=g&240;if((((c+d|0)+e|0)&
1)!=1){g=j;j=k;k=g;}i=j;m=i/256.0;n=(i+15.989999771118164)/256.0;i=l;o=i/256.0;p=(i+15.989999771118164)/256.0;q=k;r=q/256.0;s=(q+15.989999771118164)/256.0;t=0.125;q=0.05000000074505806;b=a.F;k=c-1|0;$p=2;case 2:$z=b.lg(k,d,e);if(C()){break _;}k=$z;if(k){u=c+q;v=(d+1|0)+t;w=(e+1|0)+t;G(f,u,v,w,m,o);x=(d+0|0)-t;G(f,u,x,w,m,p);w=(e+0|0)-t;G(f,u,x,w,n,p);G(f,u,v,w,n,o);}b=a.F;l=c+1|0;$p=3;case 3:$z=b.lg(l,d,e);if(C()){break _;}k=$z;if(k){u=l-q;x=(d+0|0)-t;w=(e+1|0)+t;G(f,u,x,w,n,p);v=(d+1|0)+t;G(f,u,v,w,n,o);w=
(e+0|0)-t;G(f,u,v,w,m,o);G(f,u,x,w,m,p);}b=a.F;k=e-1|0;$p=4;case 4:$z=b.lg(c,d,k);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+0|0)-t;x=e+q;G(f,u,m,x,s,p);w=(d+1|0)+t;G(f,u,w,x,s,o);u=(c+0|0)-t;G(f,u,w,x,r,o);G(f,u,m,x,r,p);}b=a.F;e=e+1|0;$p=5;case 5:$z=b.lg(c,d,e);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+1|0)+t;x=e-q;G(f,u,m,x,r,o);w=(d+0|0)-t;G(f,u,w,x,r,p);u=(c+0|0)-t;G(f,u,w,x,s,p);G(f,u,m,x,s,o);}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AM8(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=
$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeI;g=a.F;$p=1;case 1:$z=g.eI(c,d,e);if(C()){break _;}h=$z;i=b.eY(0,h);if(a.cz>=0)i=a.cz;g=a.F;$p=2;case 2:$z=b.Cw(g,c,d,e);if(C()){break _;}j=$z;Cq(f,j,j,j);k=(i&15)<<4;l=i&240;m=k;n=m/256.0;o=(m+15.989999771118164)/256.0;m=l;p=m/256.0;q=(m+15.989999771118164)/256.0;r=c+1|0;s=c+0|0;t=e+0|0;u=e+1|0;v=d+0.0625;if(h!=1&&h!=2&&h!=3&&h!=7){if(h==8){w=s;x=r;y=r;z=u;m=t;j=t;ba=s;r=x;s=y;bb=u;t=m;u=j;}else if(h!=9){w=r;j=s;z=t;m=u;ba=r;r=j;bb=t;t=m;}else{w=r;ba
=s;j=r;z=u;bb=t;m=t;r=s;s=j;t=u;u=m;}}else{w=s;ba=r;z=t;bb=u;}if(h!=2&&h!=4){if(h!=3&&h!=5){x=v;j=v;y=v;m=v;v=j;}else{j=v+1.0;x=j;y=v;m=v;v=j;}}else{m=v+1.0;x=v;y=m;}bc=ba;bd=y;be=bb;G(f,bc,bd,be,o,p);bf=w;bg=x;bh=u;G(f,bf,bg,bh,o,q);bi=s;bj=v;bk=t;G(f,bi,bj,bk,n,q);bl=r;bm=m;bn=z;G(f,bl,bm,bn,n,p);G(f,bl,bm,bn,n,p);G(f,bi,bj,bk,n,q);G(f,bf,bg,bh,o,q);G(f,bc,bd,be,o,p);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p);}
function AJw(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeI;g=b.cj(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.Cw(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=(i+15.989999771118164)
/256.0;b=a.F;$p=2;case 2:$z=b.eI(c,d,e);if(C()){break _;}p=$z;if(p==5){q=c+0.05000000074505806;r=(d+1|0)+0.0;s=(e+1|0)+0.0;G(f,q,r,s,l,n);t=(d+0|0)-0.0;G(f,q,t,s,l,o);s=(e+0|0)-0.0;G(f,q,t,s,m,o);G(f,q,r,s,m,n);}if(p==4){t=(c+1|0)-0.05000000074505806;q=(d+0|0)-0.0;s=(e+1|0)+0.0;G(f,t,q,s,m,o);r=(d+1|0)+0.0;G(f,t,r,s,m,n);s=(e+0|0)-0.0;G(f,t,r,s,l,n);G(f,t,q,s,l,o);}if(p==3){q=(c+1|0)+0.0;r=(d+0|0)-0.0;s=e+0.05000000074505806;G(f,q,r,s,m,o);t=(d+1|0)+0.0;G(f,q,t,s,m,n);q=(c+0|0)-0.0;G(f,q,t,s,l,n);G(f,q,r,s,
l,o);}if(p==2){r=(c+1|0)+0.0;s=(d+1|0)+0.0;t=(e+1|0)-0.05000000074505806;G(f,r,s,t,l,n);q=(d+0|0)-0.0;G(f,r,q,t,l,o);r=(c+0|0)-0.0;G(f,r,q,t,m,o);G(f,r,s,t,m,n);}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AA9(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeI;g=a.F;$p=1;case 1:$z=b.Cw(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eI(c,d,e);if(C()){break _;}i=$z;Un(a,b,i,c,d,e);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALI(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeI;g=a.F;$p=1;case 1:$z=b.Cw(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eI(c,d,e);if(C()){break _;}i=$z;ON(a,b,i,c,d-0.0625,e);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function GJ(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;BA();h=BeI;i=b.cj(0);if(a.cz>=0)i=a.cz;j=(i&15)<<4;k=i&240;l=j;m=l/256.0;l=(l+15.989999771118164)/256.0;n=k;o=n/256.0;n=(n+15.989999771118164)/256.0;p=m;q=p+0.02734375;r=o;s=r+0.0234375;t=p+0.03515625;u=r+0.03125;c=c+0.5;e=e+0.5;v=c-0.5;w=c+0.5;x=e-0.5;y=e+0.5;z=c+f*0.375;ba=z-0.0625;bb=d+0.625;bc=e+g*0.375;bd=bc-0.0625;G(h,ba,bb,bd,q,s);bc=bc+0.0625;G(h,ba,bb,bc,q,u);q=z+0.0625;G(h,q,bb,bc,t,u);G(h,q,bb,bd,t,s);u=c-0.0625;bc=d
+1.0;G(h,u,bc,x,p,r);q=u+f;d=d+0.0;t=x+g;bd=n;G(h,q,d,t,p,bd);s=y+g;z=l;G(h,q,d,s,z,bd);G(h,u,bc,y,z,r);u=c+0.0625;G(h,u,bc,y,p,r);c=c+f+0.0625;G(h,c,d,s,p,bd);G(h,c,d,t,z,bd);G(h,u,bc,x,z,r);c=e+0.0625;G(h,v,bc,c,p,r);u=v+f;q=c+g;G(h,u,d,q,p,bd);f=w+f;G(h,f,d,q,z,bd);G(h,w,bc,c,z,r);c=e-0.0625;G(h,w,bc,c,p,r);e=c+g;G(h,f,d,e,p,bd);G(h,u,d,e,z,bd);G(h,v,bc,c,z,r);}
function Un(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;BA();g=BeI;h=b.eY(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.44999998807907104;q=d+0.44999998807907104;d=f+0.5;r=d-0.44999998807907104;s=d+0.44999998807907104;d=e+1.0;G(g,p,d,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,q,e,s,m,o);G(g,q,d,s,m,n);G(g,q,d,s,l,n);G(g,q,e,s,l,o);G(g,p,e,r,m,o);G(g,p,d,r,m,n);G(g,p,d,s,l,n);G(g,p,e,s,l,o);G(g,q,e,r,m,o);G(g,q,d,r,m,n);G(g,
q,d,r,l,n);G(g,q,e,r,l,o);G(g,p,e,s,m,o);G(g,p,d,s,m,n);}
function ON(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeI;h=b.eY(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.25;q=d+0.25;f=f+0.5;r=f-0.5;s=f+0.5;t=e+1.0;G(g,p,t,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,p,e,s,m,o);G(g,p,t,s,m,n);G(g,p,t,s,l,n);G(g,p,e,s,l,o);G(g,p,e,r,m,o);G(g,p,t,r,m,n);G(g,q,t,s,l,n);G(g,q,e,s,l,o);G(g,q,e,r,m,o);G(g,q,t,r,m,n);G(g,q,t,r,l,n);G(g,q,e,r,l,o);G(g,q,e,s,m,o);G(g,q,t,s,m,n);p
=d-0.5;d=d+0.5;q=f-0.25;f=f+0.25;G(g,p,t,q,l,n);G(g,p,e,q,l,o);G(g,d,e,q,m,o);G(g,d,t,q,m,n);G(g,d,t,q,l,n);G(g,d,e,q,l,o);G(g,p,e,q,m,o);G(g,p,t,q,m,n);G(g,d,t,f,l,n);G(g,d,e,f,l,o);G(g,p,e,f,m,o);G(g,p,t,f,m,n);G(g,p,t,f,l,n);G(g,p,e,f,l,o);G(g,d,e,f,m,o);G(g,d,t,f,m,n);}
function AB3(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w
=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeI;g=a.F;h=d+1|0;i=1;$p=1;case 1:$z=b.pG(g,c,h,e,i);if(C()){break _;}h=$z;g=a.F;i=d-1|0;j=0;$p=2;case 2:$z=b.pG(g,c,i,e,j);if(C()){break _;}j=$z;k=$rt_createBooleanArray(4).data;l=0;g=a.F;m=e-1|0;n=2;$p=3;case 3:$z=b.pG(g,c,d,m,n);if(C()){break _;}n=$z;k[l]=n;n=1;g
=a.F;o=e+1|0;l=3;$p=4;case 4:$z=b.pG(g,c,d,o,l);if(C()){break _;}l=$z;k[n]=l;n=2;g=a.F;p=c-1|0;l=4;$p=5;case 5:$z=b.pG(g,p,d,e,l);if(C()){break _;}l=$z;k[n]=l;n=3;g=a.F;q=c+1|0;l=5;$p=6;case 6:$z=b.pG(g,q,d,e,l);if(C()){break _;}l=$z;k[n]=l;if(!h&&!j&&!k[0]&&!k[1]&&!k[2]&&!k[3])return 0;r=0;s=0.5;t=1.0;u=0.800000011920929;v=0.6000000238418579;w=0.0;x=1.0;y=b.b_;g=a.F;$p=7;case 7:$z=g.eI(c,d,e);if(C()){break _;}z=$z;$p=8;case 8:$z=APx(a,c,d,e,y);if(C()){break _;}ba=$z;$p=9;case 9:$z=APx(a,c,d,o,y);if(C()){break _;}bb
=$z;$p=10;case 10:$z=APx(a,q,d,o,y);if(C()){break _;}bc=$z;$p=11;case 11:$z=APx(a,q,d,e,y);if(C()){break _;}bd=$z;if(!a.dR&&!h){if(!a.dR&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;a:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dR)break a;if(k[i])break a;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn
=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;}r=1;bx=b.eY(1,z);g=a.F;$p=12;case 12:$z=A6d(g,c,d,e,y);if(C()){break _;}by=$z;bm=by;h=R(bm,(-999.0));if(h>0)bx=b.eY(2,z);n=(bx&15)<<4;l=bx&240;by=(n+8.0)/256.0;bz=(l+8.0)/256.0;if(h<0)bm=0.0;else{by=(n+16|0)/256.0;bz=(l+16|0)/256.0;}bn=Bq(bm)*8.0/256.0;bo=BC(bm)*8.0/256.0;g=a.F;$p=14;continue _;case 13:$z
=b.Cw(g,c,i,e);if(C()){break _;}bp=$z;bm=s*bp;Cq(f,bm,bm,bm);HH(a,b,c,d,e,b.cj(0));r=1;i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;b:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dR)break b;if(k[i])break b;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=
((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;case 14:$z=b.Cw(g,c,d,e);if(C()){break _;}bi=$z;bm=t*bi;Cq(f,bm,bm,bm);bA=c+0|0;bm=d;br=bm+ba;bu=e+0|0;bB=bo;bf=by-bB;bw=bn;bC=bf-bw;bs=bz-bB;G(f,bA,br,bu,bC,bs+bw);bC=bm+bb;bv=o;bf=bf+bw;br=bz+bB;G(f,bA,bC,bv,bf,br+bw);bA=q;bf=bm+bc;by=by+bB;G(f,bA,bf,bv,by+bw,br-bw);G(f,bA,bm+bd,bu,by-bw,bs-bw);if(!a.dR&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;c:{while(i<4){h=!i?m:e;n=R(i,
1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dR)break c;if(k[i])break c;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;case 15:$z
=b.Cw(g,o,d,h);if(C()){break _;}bt=$z;bt=t*(l>=0?bt*v:bt*u);Cq(f,bt,bt,bt);bC=bo;by=be+bm;bA=s;G(f,bC,by,bA,br,bu);by=bp;bu=be+bn;bB=bq;G(f,by,bu,bB,bs,bv);G(f,by,bf,bB,bs,bw);G(f,bC,bf,bA,br,bw);c:{while(true){i=i+1|0;if(i>=4)break;h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dR)break c;if(k[i])break c;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp
=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p);}
function APx(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=0.0;h=0;i=c+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;case 1:$z=l.oK(j,i,k);if(C()){break _;}l=$z;if(l===e)return 1.0;l=a.F;$p=2;case 2:$z=l.oK(j,c,k);if(C()){break _;}l=$z;if(l===e){l=a.F;$p=3;continue _;}if(!l.dw()){g=g+1.0;f=f+1|0;}h=h+1|0;if(h
>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;case 3:$z=l.eI(j,c,k);if(C()){break _;}m=$z;if(!(m<8&&m)){g=g+Jv(m)*10.0;f=f+10|0;}g=g+Jv(m);f=f+1|0;h=h+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0.5;h=1.0;i=0.800000011920929;j=0.6000000238418579;BA();k=BeI;Bz(k);$p=1;case 1:$z=b.Cw(c,d,e,f);if(C()){break _;}l=$z;m=e-1|0;$p=2;case 2:$z=b.Cw(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;n=g*n;Cq(k,n,n,n);HH(a,b,(-0.5),(-0.5),(-0.5),b.cj(0));m=e+1|0;$p=3;case 3:$z
=b.Cw(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;h=h*n;Cq(k,h,h,h);JF(a,b,(-0.5),(-0.5),(-0.5),b.cj(1));m=f-1|0;$p=4;case 4:$z=b.Cw(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);JU(a,b,(-0.5),(-0.5),(-0.5),b.cj(2));m=f+1|0;$p=5;case 5:$z=b.Cw(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);J$(a,b,(-0.5),(-0.5),(-0.5),b.cj(3));m=d-1|0;$p=6;case 6:$z=b.Cw(c,m,e,f);if(C()){break _;}h=$z;if(h<l)h=l;h=j*h;Cq(k,h,h,h);JO(a,b,(-0.5),(-0.5),(-0.5),b.cj(4));d=d+1|0;$p=7;case 7:$z=b.Cw(c,d,e,
f);if(C()){break _;}h=$z;if(h>=l)l=h;h=j*l;Cq(k,h,h,h);KR(a,b,(-0.5),(-0.5),(-0.5),b.cj(5));Br(k);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ABT(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;$p=1;case 1:$z=ALr(a,b,c,d,e,f,f,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ALr(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();i=BeI;j=0;k=0.5*f;l=1.0*f;m=0.800000011920929*f;n=0.6000000238418579*f;o=0.5
*g;p=1.0*g;q=0.800000011920929*g;r=0.6000000238418579*g;s=0.5*h;t=1.0*h;u=0.800000011920929*h;v=0.6000000238418579*h;w=a.F;$p=1;case 1:$z=b.Cw(w,c,d,e);if(C()){break _;}x=$z;if(a.dR){w=a.F;y=d-1|0;$p=2;continue _;}w=a.F;z=d-1|0;y=0;$p=3;continue _;case 2:$z=b.Cw(w,c,y,e);if(C()){break _;}ba=$z;if(BgA.data[b.b]>0)ba=1.0;Cq(i,k*ba,o*ba,s*ba);bb=c;bc=d;bd=e;w=a.F;y=0;$p=4;continue _;case 3:$z=b.pG(w,c,z,e,y);if(C()){break _;}y=$z;if(y){w=a.F;y=d-1|0;$p=2;continue _;}if(a.dR){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y
=d+1|0;z=1;$p=6;continue _;case 4:$z=b.uk(w,c,d,e,y);if(C()){break _;}y=$z;HH(a,b,bb,bc,bd,y);j=1;if(a.dR){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y=d+1|0;z=1;$p=6;continue _;case 5:$z=b.Cw(w,c,y,e);if(C()){break _;}ba=$z;if(b.cF!==1.0&&!b.b_.nE())ba=x;if(BgA.data[b.b]>0)ba=1.0;Cq(i,l*ba,p*ba,t*ba);bb=c;bc=d;bd=e;w=a.F;y=1;$p=9;continue _;case 6:$z=b.pG(w,c,y,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=d+1|0;$p=5;continue _;}if(a.dR){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 7:$z=b.Cw(w,
c,d,y);if(C()){break _;}ba=$z;if(b.c_>0.0)ba=x;if(BgA.data[b.b]>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=2;$p=12;continue _;case 8:$z=b.pG(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e-1|0;$p=7;continue _;}if(a.dR){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 9:$z=b.uk(w,c,d,e,y);if(C()){break _;}y=$z;JF(a,b,bb,bc,bd,y);j=1;if(a.dR){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 10:$z=b.Cw(w,c,d,y);if(C()){break _;}ba=$z;if(b.dd<1.0)ba=x;if(BgA.data[b.b]
>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=3;$p=15;continue _;case 11:$z=b.pG(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e+1|0;$p=10;continue _;}if(a.dR){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 12:$z=b.uk(w,c,d,e,y);if(C()){break _;}y=$z;JU(a,b,bb,bc,bd,y);j=1;if(a.dR){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 13:$z=b.Cw(w,y,d,e);if(C()){break _;}ba=$z;if(b.da>0.0)ba=x;if(BgA.data[b.b]>0)ba=1.0;Cq(i,n*ba,r*ba,v*ba);bb=c;bc=d;bd=e;w
=a.F;y=4;$p=18;continue _;case 14:$z=b.pG(w,y,d,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=c-1|0;$p=13;continue _;}if(a.dR){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 15:$z=b.uk(w,c,d,e,y);if(C()){break _;}y=$z;J$(a,b,bb,bc,bd,y);j=1;if(a.dR){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 16:$z=b.Cw(w,y,d,e);if(C()){break _;}ba=$z;if(b.dc>=1.0)x=ba;if(BgA.data[b.b]>0)x=1.0;Cq(i,n*x,r*x,v*x);bb=c;bc=d;bd=e;i=a.F;y=5;$p=19;continue _;case 17:$z=b.pG(w,y,d,e,
z);if(C()){break _;}y=$z;if(!y)return j;w=a.F;y=c+1|0;$p=16;continue _;case 18:$z=b.uk(w,c,d,e,y);if(C()){break _;}y=$z;JO(a,b,bb,bc,bd,y);j=1;if(a.dR){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 19:$z=b.uk(i,c,d,e,y);if(C()){break _;}c=$z;KR(a,b,bb,bc,bd,c);j=1;return j;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AFG(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;Bo(b,0.375,0.0,0.375,0.625,1.0,0.625);$p=1;case 1:ABT(a,b,c,d,e);if(C()){break _;}g=0;h=0;i=a.F;j=c-1|0;$p=2;case 2:$z=i.ej(j,d,e);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=c+1|0;$p=3;continue _;}g=1;i=a.F;j=e-1|0;$p=4;continue _;case 3:$z=i.ej(j,d,e);if(C()){break _;}j
=$z;if(j==b.b)g=1;i=a.F;j=e-1|0;$p=4;case 4:$z=i.ej(c,d,j);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=e+1|0;$p=5;continue _;}h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 5:$z=i.ej(c,d,j);if(C()){break _;}j=$z;if(j==b.b)h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if
(g){Bo(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 6:ABT(a,b,c,d,e);if(C()){break _;}if(h){Bo(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 7:ABT(a,b,c,d,e);if(C()){break _;}m=0.375;n
=0.5625;if(g){Bo(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 8:ABT(a,b,c,d,e);if(C()){break _;}if(!h){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,k,m,0.0,l,n,1.0);$p=9;case 9:ABT(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AIt(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=a.F;$p=1;case 1:$z=g.eI(c,d,e);if(C()){break _;}h=$z;if(!h){Bo(b,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bo(b,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bo(b,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bo(b,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ABT(a,
b,c,d,e);if(C()){break _;}Bo(b,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ABT(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 4:ABT(a,b,c,d,e);if(C()){break _;}Bo(b,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ABT(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 6:ABT(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ABT(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 8:ABT(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.5,1.0,0.5,1.0);$p
=9;case 9:ABT(a,b,c,d,e);if(C()){break _;}Bo(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKA(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeI;g=b;h=0.5;i=1.0;j=0.800000011920929;k=0.6000000238418579;l=a.F;$p=1;case 1:$z=b.Cw(l,c,d,e);if(C()){break _;}m=$z;l=a.F;n=d-1|0;$p=2;case 2:$z=b.Cw(l,c,n,e);if(C()){break _;}o=$z;if(g.cM>0.0)o=m;if(BgA.data[b.b]
>0)o=1.0;h=h*o;Cq(f,h,h,h);p=c;q=d;r=e;l=a.F;n=0;$p=3;case 3:$z=b.uk(l,c,d,e,n);if(C()){break _;}n=$z;HH(a,b,p,q,r,n);l=a.F;n=d+1|0;$p=4;case 4:$z=b.Cw(l,c,n,e);if(C()){break _;}h=$z;if(g.cF<1.0)h=m;if(BgA.data[b.b]>0)h=1.0;i=i*h;Cq(f,i,i,i);l=a.F;n=1;$p=5;case 5:$z=b.uk(l,c,d,e,n);if(C()){break _;}n=$z;JF(a,b,p,q,r,n);l=a.F;n=e-1|0;$p=6;case 6:$z=b.Cw(l,c,d,n);if(C()){break _;}i=$z;if(g.c_>0.0)i=m;if(BgA.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=2;$p=7;case 7:$z=b.uk(l,c,d,e,n);if(C()){break _;}s=$z;if(s
<0){a.fq=1;s= -s;}JU(a,b,p,q,r,s);a.fq=0;l=a.F;n=e+1|0;$p=8;case 8:$z=b.Cw(l,c,d,n);if(C()){break _;}i=$z;if(g.dd<1.0)i=m;if(BgA.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=3;$p=9;case 9:$z=b.uk(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fq=1;s= -s;}J$(a,b,p,q,r,s);a.fq=0;l=a.F;n=c-1|0;$p=10;case 10:$z=b.Cw(l,n,d,e);if(C()){break _;}i=$z;if(g.da>0.0)i=m;if(BgA.data[b.b]>0)i=1.0;i=k*i;Cq(f,i,i,i);l=a.F;n=4;$p=11;case 11:$z=b.uk(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fq=1;s= -s;}JO(a,b,p,q,r,s);a.fq=0;l=a.F;n
=c+1|0;$p=12;case 12:$z=b.Cw(l,n,d,e);if(C()){break _;}i=$z;if(g.dc>=1.0)m=i;if(BgA.data[b.b]>0)m=1.0;i=k*m;Cq(f,i,i,i);l=a.F;n=5;$p=13;case 13:$z=b.uk(l,c,d,e,n);if(C()){break _;}c=$z;if(c<0){a.fq=1;c= -c;}KR(a,b,p,q,r,c);a.fq=0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function HH(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeI;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.c_*16.0)/256.0;n=(j+b.dd*16.0-0.01)/256.0;if(!(b.da>=0.0&&b.dc<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c_>=0.0&&b.dd<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=c+b.dc;r=d+b.cM;s=e+b.c_;t=e+b.dd;G(g,j,r,t,k,n);G(g,j,r,s,k,m);G(g,q,r,s,l,m);G(g,q,r,t,l,n);}
function JF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeI;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.c_*16.0)/256.0;n=(j+b.dd*16.0-0.01)/256.0;if(!(b.da>=0.0&&b.dc<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c_>=0.0&&b.dd<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=c+b.dc;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,q,r,t,l,n);G(g,q,r,s,l,m);G(g,j,r,s,k,m);G(g,j,r,t,k,n);}
function JU(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeI;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;j=(j+b.dc*16.0-0.01)/256.0;l=i;m=(l+b.cM*16.0)/256.0;n=(l+b.cF*16.0-0.01)/256.0;if(!a.fq){l=j;j=k;k=l;}if(!(b.da>=0.0&&b.dc<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.da;q=c+b.dc;r=d+b.cM;s=d+b.cF;t=e+b.c_;G(g,l,s,t,k,m);G(g,q,s,t,j,m);G(g,q,r,t,j,n);G(g,l,r,t,k,n);}
function J$(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeI;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;j=(j+b.dc*16.0-0.01)/256.0;l=i;m=(l+b.cM*16.0)/256.0;n=(l+b.cF*16.0-0.01)/256.0;if(!a.fq){l=j;j=k;k=l;}if(!(b.da>=0.0&&b.dc<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.da;q=c+b.dc;r=d+b.cM;s=d+b.cF;t=e+b.dd;G(g,l,s,t,j,m);G(g,l,r,t,j,n);G(g,q,r,t,k,n);G(g,q,s,t,k,m);}
function JO(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeI;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.dd*16.0-0.01)/256.0;j=i;m=(j+b.cM*16.0)/256.0;n=(j+b.cF*16.0-0.01)/256.0;if(!a.fq){j=l;l=k;k=j;}if(!(b.c_>=0.0&&b.dd<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=d+b.cM;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,j,r,t,k,m);G(g,j,r,s,l,m);G(g,j,q,s,l,n);G(g,j,q,t,k,n);}
function KR(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeI;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.dd*16.0-0.01)/256.0;j=i;m=(j+b.cM*16.0)/256.0;n=(j+b.cF*16.0-0.01)/256.0;if(!a.fq){j=l;l=k;k=j;}if(!(b.c_>=0.0&&b.dd<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.dc;q=d+b.cM;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,j,q,t,l,n);G(g,j,q,s,k,n);G(g,j,r,s,k,m);G(g,j,r,t,l,m);}
function GY(a,b){var c,d;a:{BA();c=BeI;d=b.em();if(d){if(d==1){Bz(c);Cj(0.0,(-1.0),0.0);Un(a,b,(-1),(-0.5),(-0.5),(-0.5));Br(c);}else if(d==6){Bz(c);Cj(0.0,(-1.0),0.0);ON(a,b,(-1),(-0.5),(-0.5),(-0.5));Br(c);}else{if(d!=2){if(d==3)break a;if(d!=5)break a;else break a;}Bz(c);Cj(0.0,(-1.0),0.0);GJ(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Br(c);}}else{Bw((-0.5),(-0.5),(-0.5));Bz(c);Cj(0.0,(-1.0),0.0);HH(a,b,0.0,0.0,0.0,b.cj(0));Br(c);Bz(c);Cj(0.0,1.0,0.0);JF(a,b,0.0,0.0,0.0,b.cj(1));Br(c);Bz(c);Cj(0.0,0.0,(-1.0));JU(a,
b,0.0,0.0,0.0,b.cj(2));Br(c);Bz(c);Cj(0.0,0.0,1.0);J$(a,b,0.0,0.0,0.0,b.cj(3));Br(c);Bz(c);Cj((-1.0),0.0,0.0);JO(a,b,0.0,0.0,0.0,b.cj(4));Br(c);Bz(c);Cj(1.0,0.0,0.0);KR(a,b,0.0,0.0,0.0,b.cj(5));Br(c);Bw(0.5,0.5,0.5);}}}
function QH(){var a=this;D.call(a);a.jj=null;a.hp=null;a.f2=0;a.f1=0;a.pE=0.0;a.m6=0.0;a.pD=0.0;a.b1=0.0;a.bX=0.0;a.bU=0.0;a.wq=0;a.lX=0;a.lF=0;a.iS=0;a.BW=0;}
function BK(a,b){var c=new QH();A9f(c,a,b);return c;}
function A9f(a,b,c){a.wq=0;a.lX=0;a.lF=0;a.iS=1;a.BW=0;a.f2=b;a.f1=c;}
function BG(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;a.jj=J(ER,8);a.hp=J(Fy,6);i=b+e;j=c+f;k=d+g;l=b-h;m=c-h;n=d-h;d=i+h;j=j+h;h=k+h;if(!a.lF){b=l;l=d;d=b;}a:{o=G5(d,m,n,0.0,0.0);p=G5(l,m,n,0.0,8.0);q=G5(l,j,n,8.0,8.0);r=G5(d,j,n,8.0,0.0);s=G5(d,m,h,0.0,0.0);t=G5(l,m,h,0.0,8.0);u=G5(l,j,h,8.0,8.0);v=G5(d,j,h,8.0,0.0);a.jj.data[0]=o;a.jj.data[1]=p;a.jj.data[2]=q;a.jj.data[3]=r;a.jj.data[4]=s;a.jj.data[5]=t;a.jj.data[6]=u;a.jj.data[7]=v;w=a.hp.data;x=new Fy;y=J(ER,4);z=y.data;z[0]=t;z[1]=p;z[2]
=q;z[3]=u;Hj(x,y,(a.f2+g|0)+e|0,a.f1+g|0,((a.f2+g|0)+e|0)+g|0,(a.f1+g|0)+f|0);w[0]=x;z=a.hp.data;x=new Fy;w=J(ER,4);y=w.data;y[0]=o;y[1]=s;y[2]=v;y[3]=r;Hj(x,w,a.f2+0|0,a.f1+g|0,a.f2+g|0,(a.f1+g|0)+f|0);z[1]=x;z=a.hp.data;x=new Fy;w=J(ER,4);y=w.data;y[0]=t;y[1]=s;y[2]=o;y[3]=p;Hj(x,w,a.f2+g|0,a.f1+0|0,(a.f2+g|0)+e|0,a.f1+g|0);z[2]=x;z=a.hp.data;x=new Fy;w=J(ER,4);y=w.data;y[0]=q;y[1]=r;y[2]=v;y[3]=u;Hj(x,w,(a.f2+g|0)+e|0,a.f1+0|0,((a.f2+g|0)+e|0)+e|0,a.f1+g|0);z[3]=x;w=a.hp.data;x=new Fy;y=J(ER,4);z=y.data;z[0]
=p;z[1]=o;z[2]=r;z[3]=q;Hj(x,y,a.f2+g|0,a.f1+g|0,(a.f2+g|0)+e|0,(a.f1+g|0)+f|0);w[4]=x;z=a.hp.data;r=new Fy;w=J(ER,4);y=w.data;y[0]=s;y[1]=t;y[2]=u;y[3]=v;Hj(r,w,((a.f2+g|0)+e|0)+g|0,a.f1+g|0,(((a.f2+g|0)+e|0)+g|0)+e|0,(a.f1+g|0)+f|0);z[5]=r;if(a.lF){ba=0;while(true){if(ba>=a.hp.data.length)break a;ACU(a.hp.data[ba]);ba=ba+1|0;}}}}
function BJ(a,b,c,d){a.pE=b;a.m6=c;a.pD=d;}
function B_(a,b){var c,d;if(!a.BW&&a.iS){if(!a.wq){a.lX=I0(1);FI(a.lX,4864);BA();c=BeI;d=0;while(d<a.hp.data.length){APB(a.hp.data[d],c,b);d=d+1|0;}Ef();a.wq=1;}if(a.b1===0.0&&a.bX===0.0&&a.bU===0.0){if(a.pE===0.0&&a.m6===0.0&&a.pD===0.0)FU(a.lX);else{Bw(a.pE*b,a.m6*b,a.pD*b);FU(a.lX);Bw( -a.pE*b, -a.m6*b, -a.pD*b);}}else{B3();Bw(a.pE*b,a.m6*b,a.pD*b);if(a.bU!==0.0)Bv(a.bU*57.2957763671875,0.0,0.0,1.0);if(a.bX!==0.0)Bv(a.bX*57.2957763671875,0.0,1.0,0.0);if(a.b1!==0.0)Bv(a.b1*57.2957763671875,1.0,0.0,0.0);FU(a.lX);BD();}}}
function E3(){D.call(this);}
function AOz(a,b){Q8(a,b,0,b.data.length);}
function ATe(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.nN(f[c]);e=e+1|0;c=g;}}
function A8T(a){return;}
function A9H(a){return;}
function Ge(){E3.call(this);this.fn=null;}
function Bhg(a){var b=new Ge();K$(b,a);return b;}
function K$(a,b){a.fn=b;}
function KP(a){var $$je;a:{try{a.fn.ly();break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B1){}else{throw $$e;}}}a.fn.tQ();}
function AA4(){var a=this;Ge.call(a);a.GH=0;a.uL=0;a.hH=null;a.nT=null;a.AT=null;}
function AYI(a,b){var c=new AA4();A$y(c,a,b);return c;}
function A$y(a,b,c){K$(a,b);b=new S;V(b);a.hH=b;a.nT=$rt_createCharArray(32);a.GH=c;a.AT=A1E();}
function VQ(a,b,c,d){var $$je;if(a.fn===null)a.uL=1;if(!(a.uL?0:1))return;a:{try{a.fn.gv(b,c,d);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B1){}else{throw $$e;}}a.uL=1;}}
function TK(a,b,c,d){var e,f,g,h,i;e=b.data;f=AM3(b,c,d-c|0);e=$rt_createByteArray(DE(16,CB(e.length,1024)));g=AAq(e);h=AGT(ACQ(AG1(a.AT),Bf5),Bf5);while(true){i=IS(AJb(h,f,g,1));VQ(a,e,0,g.bk);EB(g);if(!i)break;}while(true){i=IS(XZ(h,g));VQ(a,e,0,g.bk);EB(g);if(!i)break;}}
function AKC(a,b){a.nT.data[0]=b;TK(a,a.nT,0,1);}
function Kp(a,b){H(a.hH,b);J9(a);}
function ABL(a,b){Dx(Be(a.hH,b),10);J9(a);}
function Cg(a,b){Dx(H(a.hH,b),10);J9(a);}
function ACi(a,b){Dx(FN(a.hH,b),10);J9(a);}
function APA(a){AKC(a,10);}
function J9(a){var b;b=a.hH.bY<=a.nT.data.length?a.nT:$rt_createCharArray(a.hH.bY);AAy(a.hH,0,a.hH.bY,b,0);TK(a,b,0,a.hH.bY);ANf(a.hH,0);}
function Xc(){E3.call(this);}
function Bhh(){var a=new Xc();A3q(a);return a;}
function A3q(a){return;}
function AYf(a,b){$rt_putStdout(b);}
function AE_(){Cb.call(this);this.Fs=null;}
function ALn(a){var b=new AE_();A02(b,a);return b;}
function A02(a,b){O(a);a.Fs=b;}
function MT(){var a=this;D.call(a);a.cg=null;a.A=0;a.N=0;a.G=Long_ZERO;a.uX=null;a.pN=0;a.ic=0;a.nt=Long_ZERO;a.b9=null;a.jx=null;a.f_=null;}
function Bhi(){var a=new MT();OP(a);return a;}
function OP(a){a.f_=A9Q();}
function AAG(a,b,c,d){a.uX=b;a.pN=c;a.ic=d;}
function AJ6(a,b,c,d,e){var f;if(d<=0&&e&&a.cg!==null)return;if(a.N>0&&e){f=$rt_createByteArray(a.N+d|0);Di(a.cg,a.A,f,0,a.N);Di(b,c,f,a.N,d);a.cg=f;a.A=0;a.N=a.N+d|0;}else{a.cg=b;a.A=c;a.N=d;}}
function Uj(){MT.call(this);this.rT=0;}
function Bhj(){var a=new Uj();A28(a);return a;}
function A28(a){OP(a);a.rT=0;AAT(a);}
function AAT(a){return ACH(a,15);}
function ACH(a,b){return R4(a,b,0);}
function R4(a,b,c){var d;a.rT=0;d=new LJ;d.rS=Long_fromInt(-1);d.iI=(-1);d.xJ=$rt_createByteArray(4);d.cJ=null;d.fX=null;d.E=a;a.jx=d;d=a.jx;if(c)b= -b;return XA(d,b);}
function AF2(a,b){var c;if(a.jx===null)return (-2);c=AGA(a.jx,b);if(c==1)a.rT=1;return c;}
function Yh(a){return a.jx.bP!=12?0:1;}
function Iq(){var a=this;D.call(a);a.Cn=null;a.oP=0.0;a.pM=0.0;}
function Ii(a,b,c){var d=new Iq();O5(d,a,b,c);return d;}
function O5(a,b,c,d){a.Cn=b;a.oP=c;a.pM=d;}
function AML(a){return a.oP;}
function Yf(a){return a.pM;}
function Kg(a){var b;b=new S;V(b);return T(H(H(b,B(252)),a.Cn));}
function AHl(){Iq.call(this);}
function A_Z(a,b,c){var d=new AHl();AZq(d,a,b,c);return d;}
function AZq(a,b,c,d){O5(a,b,c,d);}
function ACq(){Iq.call(this);}
function Bb9(a,b,c){var d=new ACq();A7J(d,a,b,c);return d;}
function A7J(a,b,c,d){O5(a,b,c,d);}
function LQ(){P.call(this);}
function Bbc(a,b){var c=new LQ();AI5(c,a,b);return c;}
function AI5(a,b,c){C8(a,b,c,Bg8);}
function A8F(a,b,c){L();return BeW.b;}
function Z4(){P.call(this);}
function BbF(a){var b=new Z4();AY1(b,a);return b;}
function AY1(a,b){D1(a,b,Bhk);a.bb=3;Fe(a,1);}
function A7o(a,b){return b==1?0:b?3:2;}
function ADo(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=Xy(b,c,g,e);if(C()){break _;}h=$z;if(h>=4){$p=2;continue _;}$p=3;continue _;case 2:$z=Xy(b,c,g,e);if(C()){break _;}g=$z;if(g<9)return;h=(c+E(f,3)|0)-1|0;g=(d+E(f,5)|0)-3|0;i=(e+E(f,3)|0)-1|0;$p=4;continue _;case 3:$z=ABZ(b,c,g,e);if(C()){break _;}j=$z;if(!j.sk()){$p=2;continue _;}if(E(f,
4))return;L();h=BeP.b;$p=6;continue _;case 4:$z=ACv(b,h,g,i);if(C()){break _;}c=$z;L();if(c!=BeP.b)return;c=g+1|0;$p=5;case 5:$z=Xy(b,h,c,i);if(C()){break _;}d=$z;if(d<4)return;$p=7;continue _;case 6:APv(b,c,d,e,h);if(C()){break _;}return;case 7:$z=ABZ(b,h,c,i);if(C()){break _;}f=$z;if(f.sk())return;c=BeO.b;$p=8;case 8:APv(b,h,g,i,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AZ7(a,b,c){L();return BeP.dX(0,c);}
function AHR(){P.call(this);}
function A_4(a,b){var c=new AHR();AXx(c,a,b);return c;}
function AXx(a,b,c){C8(a,b,c,Bhk);}
function B8(){D.call(this);}
var Bf8=null;var Bhk=null;var Bg9=null;var Bg8=null;var Bhl=null;var BfN=null;var BfO=null;var Bhm=null;var Bhn=null;var Bho=null;var Bg_=null;var Bhp=null;var Bhq=null;var Bhr=null;var Bg$=null;var Bhs=null;var Bht=null;function Bhu(){var a=new B8();AQj(a);return a;}
function AQj(a){return;}
function A8j(a){return 0;}
function A0W(a){return 1;}
function A7O(a){return 1;}
function A5q(a){return 1;}
function AP2(){Bf8=new Ok;Bhk=new B8;Bg9=new B8;Bg8=new B8;Bhl=new B8;BfN=new L1;BfO=new L1;Bhm=new B8;Bhn=new N7;Bho=new B8;Bg_=new B8;Bhp=new Ok;Bhq=new B8;Bhr=new N7;Bg$=new B8;Bhs=new B8;Bht=new B8;}
function F4(){P.call(this);}
function A3i(a,b){var c=new F4();Lx(c,a,b);return c;}
function Lx(a,b,c){D1(a,b,Bhn);a.bb=c;Fe(a,1);Bo(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function ALT(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=ACv(b,c,d,e);if(C()){break _;}c=$z;return a.ro(c);default:E$();}}C3().s(a,b,c,d,e,$p);}
function AYj(a,b){L();return b!=BeO.b&&b!=BeP.b&&b!=Bg0.b?0:1;}
function AID(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJn(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AD9(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJn(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AJn(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.G$(b,c,d,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yg(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APv(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AN6(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Xy(b,c,d,e);if(C()){break _;}f=$z;if(f<8){$p=3;continue _;}d=d-1|0;$p=2;case 2:$z=ACv(b,c,d,e);if(C()){break _;}c=$z;return !a.ro(c)?0:1;case 3:$z=AGc(b,c,d,e);if(C()){break _;}g=$z;if(!g)return 0;d=d-1|0;$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGi(a,b,c,d,e){return null;}
function A6j(a){return 0;}
function ATY(a){return 0;}
function A7t(a){return 1;}
function AMW(){F4.call(this);}
function Bcr(a,b){var c=new AMW();A9B(c,a,b);return c;}
function A9B(a,b,c){Lx(a,b,c);Bo(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function AEg(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJn(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=Xy(b,c,g,e);if(C()){break _;}g=$z;if(g>=9&&!E(f,5)){$p=3;continue _;}return;case 3:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(g>=15){g=0;$p=4;continue _;}g=g+1|0;$p=6;continue _;case 4:ALq(b,c,d,e,g);if(C()){break _;}h=new Re;$p=5;case 5:$z=AEK(h,b,f,c,d,e);if(C()){break _;}g
=$z;if(g)return;g=a.b;$p=7;continue _;case 6:AKt(b,c,d,e,g);if(C()){break _;}return;case 7:ALq(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function HS(){P.call(this);this.qP=0;}
function Bhv(a,b){var c=new HS();P2(c,a,b);return c;}
function P2(a,b,c){C8(a,b,((c!==BfO?12:14)*16|0)+13|0,c);a.qP=1;if(c===BfO)a.qP=2;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);Fe(a,1);}
function Jv(b){if(b>=8)b=0;return (b+1|0)/9.0;}
function AS$(a,b){return b&&b!=1?a.bb+1|0:a.bb;}
function AFe(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABZ(b,c,d,e);if(C()){break _;}f=$z;if(f!==a.b_)return (-1);$p=2;case 2:$z=AEI(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AEc(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oK(c,d,e);if(C()){break _;}f=$z;if(f!==a.b_)return (-1);$p=2;case 2:$z=b.eI(c,d,e);if(C()){break _;}g=$z;if(g>=8)g=0;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function A$8(a){return 0;}
function A$q(a){return 0;}
function A8C(a,b,c){return c&&!b?1:0;}
function ARu(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oK(c,d,e);if(C()){break _;}g=$z;if(g===a.b_)c=0;else{if(f!=1){$p=2;continue _;}c=1;}return c;case 2:$z=AGs(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Ye(a,b,c,d,e){return null;}
function A7W(a){return 4;}
function A3c(a,b,c){return 0;}
function A59(a,b){return 0;}
function AIK(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=BY(0.0,0.0,0.0);$p=1;case 1:$z=AEc(a,b,c,d,e);if(C()){break _;}g=$z;h=0;i=c-1|0;j=e-1|0;k=d-1|0;l=g-8|0;m=d-d|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 2:$z=b.eI(c,d,e);if
(C()){break _;}n=$z;if(n<8)return CD(f);k=0;n=2;$p=3;case 3:$z=ARu(a,b,c,d,j,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=e+1|0;p=3;$p=4;continue _;}k=1;if(!k){n=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 4:$z=ARu(a,b,c,d,n,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n
=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 5:$z=ARu(a,b,i,d,e,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k
=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 6:$z=ARu(a,b,n,d,e,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 7:$z=AEc(a,b,n,d,o);if(C()){break _;}p=$z;if(p<0){$p=8;continue _;}if(p>=0){q=p-g|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1
|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;continue _;case 8:$z=AEc(a,b,n,k,o);if(C()){break _;}p=$z;if(p>=0){q=p-l|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 9:$z=ARu(a,b,c,n,j,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d
=d+1|0;n=5;$p=12;continue _;case 10:$z=ARu(a,b,c,n,p,q);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 11:$z=ARu(a,b,i,n,e,p);if(C()){break _;}n=$z;if(n)k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;case 12:$z=ARu(a,b,c,d,e,n);if(C()){break _;}c=$z;if(c)k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,
m,n,o,p,q,$p);}
function ANb(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIK(a,b,c,d,e);if(C()){break _;}h=$z;g.x=g.x+h.x;g.z=g.z+h.z;g.w=g.w+h.w;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AU2(a){return a.b_===BfN?5:a.b_!==BfO?0:30;}
function AEu(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sO(c,d,e);if(C()){break _;}f=$z;d=d+1|0;$p=2;case 2:$z=b.sO(c,d,e);if(C()){break _;}g=$z;if(f>g)g=f;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQ8(a,b,c,d,e,f){return;}
function A$n(a){return 0;}
function YE(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.b_===BfN&&!E(f,64)){$p=2;continue _;}if(a.b_!==BfO)return;g=d+1|0;$p=1;case 1:$z=ABZ(b,c,g,e);if(C()){break _;}h=$z;if(h!==Bf8)return;$p=3;continue _;case 2:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(g>0&&g<8)Ey(b,c+0.5,d+0.5,e+0.5,B(253),N(f)*0.25+0.75,N(f)*1.0+0.5);if(a.b_!==BfO)return;g=d+1|0;$p=1;continue _;case 3:$z=AAB(b,
c,g,e);if(C()){break _;}g=$z;if(!g&&!E(f,100))BV(b,B(254),c+N(f),d+a.cF,e+N(f),0.0,0.0,0.0);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A6d(b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:g=null;if(f===BfN){L();g=BfV;$p=1;continue _;}if(f!==BfO)return g.x===0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;L();f=BfW;$p=2;continue _;case 1:$z=AIK(g,b,c,d,e);if(C()){break _;}g=$z;if(f!==BfO)return g.x===0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;L();f=BfW;$p=2;case 2:$z=AIK(f,b,c,d,e);if(C()){break _;}g=$z;return g.x===
0.0&&g.w===0.0?(-1000.0):CR(g.w,g.x)-1.5707963267948966;default:E$();}}C3().s(b,c,d,e,f,g,$p);}
function ARO(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO9(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ALd(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO9(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AO9(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACv(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b&&a.b_===BfO){f=0;g=e-1|0;$p=2;continue _;}return;case 2:$z=ABZ(b,c,d,g);if(C()){break _;}h=$z;if(h===BfN)f=1;if(!f){g=e+1|0;$p=3;continue _;}f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 3:$z
=ABZ(b,c,d,g);if(C()){break _;}h=$z;if(h===BfN)f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 4:$z=ABZ(b,g,d,e);if(C()){break _;}h=$z;if(h===BfN)f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 5:$z=ABZ(b,g,d,e);if(C()){break _;}h=$z;if(h===BfN)f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 6:$z=ABZ(b,c,g,e);if(C()){break _;}h
=$z;if(h===BfN)f=1;if(!f)return;$p=7;case 7:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(!g){L();f=Bfi.b;$p=8;continue _;}if(g>4){JQ(a,b,c,d,e);return;}L();f=BeW.b;$p=9;continue _;case 8:APv(b,c,d,e,f);if(C()){break _;}JQ(a,b,c,d,e);return;case 9:APv(b,c,d,e,f);if(C()){break _;}JQ(a,b,c,d,e);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function JQ(a,b,c,d,e){var f,g,h,i;Ey(b,c+0.5,d+0.5,e+0.5,B(215),0.5,2.5999999046325684+(N(b.q)-N(b.q))*0.800000011920929);f=0;g=c;h=d+1.2;i=e;while(f<8){BV(b,B(255),g+BP(),h,i+BP(),0.0,0.0,0.0);f=f+1|0;}}
function AEf(){var a=this;HS.call(a);a.mn=0;a.hj=null;a.cT=null;}
function AUh(a,b){var c=new AEf();AY8(c,a,b);return c;}
function AY8(a,b,c){P2(a,b,c);a.mn=0;a.hj=$rt_createBooleanArray(4);a.cT=$rt_createIntArray(4);}
function AG9(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;g=a.b+1|0;$p=2;case 2:AJk(b,c,d,e,g,f);if(C()){break _;}Jk(b,c,d,e,c,d,e);return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AOO(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFe(a,b,c,d,e);if(C()){break _;}g=$z;h=1;if(g<=0){$p=2;continue _;}i=(-100);a.mn=0;j=c-1|0;$p=3;continue _;case 2:AG9(a,b,c,d,e);if(C()){break _;}j=d-1|0;$p=7;continue _;case 3:$z=AOL(a,b,j,d,e,i);if(C()){break _;}j=$z;k=c+1|0;$p=4;case 4:$z=AOL(a,b,k,d,e,j);if
(C()){break _;}j=$z;k=e-1|0;$p=5;case 5:$z=AOL(a,b,c,d,k,j);if(C()){break _;}j=$z;k=e+1|0;$p=6;case 6:$z=AOL(a,b,c,d,k,j);if(C()){break _;}j=$z;k=j+a.qP|0;if(!(k<8&&j>=0))k=(-1);j=d+1|0;$p=8;continue _;case 7:$z=ALV(a,b,c,j,e);if(C()){break _;}k=$z;if(!k){if(g<0)return;if(!g){$p=12;continue _;}$p=13;continue _;}if(g>=8){d=a.b;$p=10;continue _;}d=a.b;k=g+8|0;$p=9;continue _;case 8:$z=AFe(a,b,c,j,e);if(C()){break _;}l=$z;if(l>=0){$p=11;continue _;}if(a.mn>=2&&a.b_===BfN)k=0;if(a.b_===BfO&&g<8&&k<8&&k>g&&E(f,4))
{h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 9:AIW(b,c,j,e,d,k);if(C()){break _;}return;case 10:AIW(b,c,j,e,d,g);if(C()){break _;}return;case 11:$z=AFe(a,b,c,j,e);if(C()){break _;}k=$z;if(k<8)k=k+8|0;if(a.mn>=2&&a.b_===BfN)k=0;if(a.b_===BfO&&g<8&&k<8&&k>g&&E(f,4)){h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 12:$z=AK1(a,b,c,d,e);if(C()){break _;}m
=$z;l=g+a.qP|0;if(g>=8)l=1;if(l>=8)return;m=m.data;if(m[0]){j=c-1|0;$p=14;continue _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 13:$z=ACn(a,b,c,j,e);if(C()){break _;}j=$z;if(!j)return;$p=12;continue _;case 14:AO$(a,b,j,d,e,l);if(C()){break _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 15:AO$(a,b,j,d,e,l);if(C()){break _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e
=e+1|0;$p=21;continue _;case 16:AO$(a,b,c,d,j,l);if(C()){break _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 17:AG9(a,b,c,d,e);if(C()){break _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 18:AKt(b,c,d,e,k);if(C()){break _;}Fn(b,c,d,e,a.b);j=a.b;$p=19;case 19:AHK(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 20:APv(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 21:AO$(a,b,c,d,e,l);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AO$(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALV(a,b,c,d,e);if(C()){break _;}g=$z;if(!g)return;$p=2;case 2:$z=ACv(b,c,d,e);if(C()){break _;}g=$z;if(g>0){if(a.b_!==BfO){L();h=BeM.data[g];$p=4;continue _;}JQ(a,b,c,d,e);}g=a.b;$p=3;case 3:AIW(b,c,d,e,g,f);if(C()){break _;}return;case 4:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;$p=5;case 5:h.IM(b,c,d,e,g);if(C()){break _;}g
=a.b;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANR(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=1000;i=0;j=R(g,1);k=R(g,3);l=R(g,2);m=c-1|0;n=e-1|0;o=d-1|0;p=R(f,4);q=f+1|0;a:{while(i<4){if(!(!i&&!j)){r=R(i,1);if(!(!r&&!g)){s=R(i,2);if(!(!s&&!k)){t=R(i,3);if(t)break a;if
(l)break a;}}}i=i+1|0;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;case 1:$z=ACn(a,b,u,d,r);if(C()){break _;}t=$z;if(!t){$p=2;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;continue _;case 2:$z=ABZ(b,u,d,r);if(C()){break _;}v=$z;if(v!==a.b_){$p=3;continue _;}$p=4;continue _;case 3:$z=ACn(a,b,u,o,r);if(C()){break _;}t=$z;if(!t)return f;if
(p<0){$p=5;continue _;}c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;case 4:$z=AEI(b,u,d,r);if(C()){break _;}t=$z;if(t){$p=3;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1
|0;$p=1;continue _;case 5:$z=ANR(a,b,u,d,r,q,i);if(C()){break _;}t=$z;if(t<h)h=t;c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AK1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;h=e-1|0;i=d-1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;case 1:$z
=ACn(a,b,l,d,m);if(C()){break _;}j=$z;if(!j){$p=2;continue _;}f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;continue _;case 2:$z=ABZ(b,l,d,m);if(C()){break _;}n=$z;if(n!==a.b_){$p=3;continue _;}$p=4;continue _;case 3:$z=ACn(a,b,l,i,m);if(C()){break _;}j=$z;if(j){k=a.cT.data;j=1;$p=5;continue _;}a.cT.data[f]=0;f=f+1|0;if(f>=
4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 4:$z=AEI(b,l,d,m);if(C()){break _;}j=$z;if(j){$p=3;continue _;}f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f
==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 5:$z=ANR(a,b,l,d,m,j,f);if(C()){break _;}j=$z;k[f]=j;f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hj;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hj;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ACn(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACv(b,c,d,e);if(C()){break _;}f=$z;L();if(f!=Bg4.b&&f!=Bg3.b&&f!=Bf$.b){if(!f)return 0;return BeM.data[f].b_.dw();}return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AOL(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFe(a,b,c,d,e);if(C()){break _;}g=$z;if(g<0)return f;if(!g)a.mn=a.mn+1|0;if(g>=8)g=0;if(f>=0&&g>=f)g=f;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALV(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABZ(b,c,d,e);if(C()){break _;}f=$z;if(f===a.b_)c=0;else{if(f!==BfO){$p=2;continue _;}c=0;}return c;case 2:$z=ACn(a,b,c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AB2(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO9(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACv(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b)Fn(b,c,d,e,a.b);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AII(){HS.call(this);}
function AXF(a,b){var c=new AII();A2q(c,a,b);return c;}
function A2q(a,b,c){P2(a,b,c);Fe(a,0);}
function AGv(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AO9(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACv(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return;$p=3;case 3:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;b.so=1;f=a.b-1|0;$p=4;case 4:AJk(b,c,d,e,f,g);if(C()){break _;}Jk(b,c,d,e,c,d,e);Fn(b,c,d,e,a.b-1|0);b.so=0;return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function I8(){P.call(this);}
var BeT=0;function BbA(a,b){var c=new I8();RC(c,a,b);return c;}
function RC(a,b,c){C8(a,b,c,Bhq);}
function ARM(a,b,c,d,e){Fn(b,c,d,e,a.b);}
function ASb(a,b,c,d,e,f){Fn(b,c,d,e,a.b);}
function APy(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ACv(b,c,g,e);if(C()){break _;}g=$z;if(!g)g=1;else{L();if(g==Bgm.b)g=1;else{f=BeM.data[g].b_;g=f===BfN?1:f!==BfO?0:1;}}if(g&&d>=0){f=new JK;h=c+0.5;i=d+0.5;j=e+0.5;c=a.b;FC(f,b);f.oO=0;f.hU=c;f.mF=1;D2(f,0.9800000190734863,0.9800000190734863);f.c4=f.eO/2.0;k
=h;l=i;m=j;CT(f,k,l,m);f.g=0.0;f.i=0.0;f.h=0.0;f.i$=0;f.bS=k;f.cS=l;f.bR=m;if(!BeT){$p=2;continue _;}if(!f.cR){$p=3;continue _;}}return;case 2:AOg(b,f);if(C()){break _;}return;case 3:AMM(f);if(C()){break _;}if(f.cR)return;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function A3U(a){return 3;}
function ACM(){BeT=0;}
function AG2(){I8.call(this);}
function BbJ(a,b){var c=new AG2();AVX(c,a,b);return c;}
function AVX(a,b,c){RC(a,b,c);}
function A_j(a,b,c){if(E(c,10))b=a.b;else{BB();b=Bhw.cW;}return b;}
function YW(){P.call(this);}
function SL(a,b){var c=new YW();AZw(c,a,b);return c;}
function AZw(a,b,c){C8(a,b,c,Bg8);}
function A4l(a,b,c){b=a.b;L();if(b==Bfb.b){BB();b=Bhx.cW;}else if(a.b!=BgW.b)b=a.b;else{BB();b=Bhy.cW;}return b;}
function AZ6(a,b){return 1;}
function AFf(){P.call(this);}
function BcL(a){var b=new AFf();A_a(b,a);return b;}
function A_a(a,b){D1(a,b,Bg9);a.bb=20;}
function A8U(a,b){return 1;}
function ATc(a,b,c){L();return BeZ.b;}
function AVw(a,b){return b==1?21:b?20:21;}
function LX(){P.call(this);this.r4=0;}
function AQt(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ej(c,d,e);if(C()){break _;}g=$z;if(!a.r4&&g==a.b)return 0;$p=2;case 2:$z=AGs(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACE(){LX.call(this);this.Cp=0;}
function BaF(a,b){var c=new ACE();A0Y(c,a,b);return c;}
function A0Y(a,b,c){C8(a,b,c,Bhm);a.r4=0;a.Cp=c;Fe(a,1);}
function AIw(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ABZ(b,c,g,e);if(C()){break _;}f=$z;if(f.dw())return;h=c-2|0;i=c+2|0;j=d+1|0;k=e-2|0;l=e+2|0;while(h<=i){m=g;while(m<=j){n=k;if(n<=l){$p=5;continue _;}m=m+1|0;}h=h+1|0;}$p=2;case 2:$z=AEI(b,c,d,e);if(C()){break _;}i=$z;$p=3;case 3:Yg(a,
b,c,d,e,i);if(C()){break _;}i=0;$p=4;case 4:APv(b,c,d,e,i);if(C()){break _;}return;case 5:$z=ACv(b,h,m,n);if(C()){break _;}o=$z;L();if(o==BeZ.b)return;n=n+1|0;while(n>l){m=m+1|0;while(m>j){h=h+1|0;if(h>i){$p=2;continue _;}m=g;}n=k;}continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AW3(a,b){return E(b,10)?0:1;}
function A5a(a,b,c){L();return Be4.b;}
function A2O(a){return a.r4?0:1;}
function AKk(a,b){a.r4=b;a.bb=a.Cp+(!b?1:0)|0;}
function ASp(a,b,c,d,e,f){return;}
function ALc(){P.call(this);}
function Ba7(a){var b=new ALc();A8R(b,a);return b;}
function A8R(a,b){D1(a,b,Bho);a.bb=48;}
function AKH(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;if(k<=e){$p=1;continue _;}j=j+1|0;}f=f+1|0;}return;case 1:$z=ABZ(b,f,j,k);if(C()){break _;}l=$z;k=k+1|0;a:while(true){if(k<=e){continue _;}j=j+1|0;while(j>d){f=f+1|0;if(f>g)break a;j=h;}k=i;}return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function ANt(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;if(l<=c){$p=1;continue _;}k=k+1|0;}f=f+1|0;}return;case 1:$z=ACv(b,f,k,l);if(C()){break _;}d=$z;$p=2;case 2:AHK(b,f,k,l,d);if(C()){break _;}l=l+1|0;a:while(true){if(l<=c){$p=1;continue _;}k=k+1|0;while(k>i){f
=f+1|0;if(f>g)break a;k=h;}l=j;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Nb(){P.call(this);this.CA=0;}
function A9_(a){return 0;}
function Yw(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ej(c,d,e);if(C()){break _;}g=$z;if(!a.CA&&g==a.b)return 0;$p=2;case 2:$z=AGs(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQk(){Nb.call(this);}
function Ba3(a,b,c,d){var e=new AQk();A5d(e,a,b,c,d);return e;}
function A5d(a,b,c,d,e){C8(a,b,c,d);a.CA=e;}
function AV5(a,b){return 0;}
function AHa(){F4.call(this);}
function ATM(a,b){var c=new AHa();A$5(c,a,b);return c;}
function A$5(a,b,c){Lx(a,b,c);Bo(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AI4(a,b){L();return Bgx.data[b];}
function ADi(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=Xy(b,c,d,e);if(C()){break _;}f=$z;if(f>13)return 0;d=d-1|0;$p=2;case 2:$z=ACv(b,c,d,e);if(C()){break _;}c=$z;return !AI4(a,c)?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ABt(){P.call(this);}
function AEA(a,b){var c=new ABt();AXU(c,a,b);return c;}
function AXU(a,b,c){D1(a,b,Bhl);a.bb=c;}
function A4y(a,b){return b==1?a.bb-16|0:b?a.bb:a.bb+16|0;}
function Zf(){P.call(this);this.wB=0;}
function A9k(a,b){var c=new Zf();A5_(c,a,b);return c;}
function A5_(a,b,c){C8(a,b,6,Bg8);a.wB=c;if(!c)Bo(a,0.0,0.0,0.0,1.0,0.5,1.0);Gy(a,255);}
function A$I(a,b){return b>1?5:6;}
function A5P(a){return a.wB;}
function ABC(a,b,c,d,e,f){L();}
function ABi(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();f=d-1|0;$p=1;case 1:$z=ACv(b,c,f,e);if(C()){break _;}g=$z;if(g!=BeR.b)return;g=0;$p=2;case 2:APv(b,c,d,e,g);if(C()){break _;}d=BeQ.b;$p=3;case 3:APv(b,c,f,e,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZl(a,b,c){L();return BeR.b;}
function AW5(a){return a.wB;}
function ASB(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();if(a!==BeR){$p=1;continue _;}if(f==1)return 1;$p=2;continue _;case 1:AGs(a,b,c,d,e,f);if(C()){break _;}if(f==1)return 1;$p=2;case 2:$z=AGs(a,b,c,d,e,f);if(C()){break _;}g=$z;if(!g)c=0;else{if(f){$p=3;continue _;}c=1;}return c;case 3:$z=b.ej(c,d,e);if(C()){break _;}c=$z;return c==a.b?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AOf(){P.call(this);}
function BaG(a,b){var c=new AOf();A0p(c,a,b);return c;}
function A0p(a,b,c){C8(a,b,c,Bhs);}
function A40(a,b){return !b?a.bb+2|0:b!=1?a.bb:a.bb+1|0;}
function AU$(a,b){return 0;}
function AGB(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=AWN(b,c+0.5,d+0.5,e+0.5);f.hs=E(b.q,f.hs/4|0)+(f.hs/8|0)|0;$p=1;case 1:AOg(b,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ASj(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=AWN(b,c+0.5,d+0.5,e+0.5);$p=1;case 1:AOg(b,g);if(C()){break _;}Dh(b,g,B(226),1.0,1.0);return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AC$(){P.call(this);}
function Bah(a,b){var c=new AC$();AUb(c,a,b);return c;}
function AUb(a,b,c){C8(a,b,c,Bg9);}
function A$9(a,b){return b>1?a.bb:4;}
function A4A(a,b){return 0;}
function XM(){LQ.call(this);}
function Bbm(a,b){var c=new XM();AZr(c,a,b);return c;}
function AZr(a,b,c){AI5(a,b,c);}
function A27(a,b){return 1;}
function AUU(a,b,c){L();return Bfi.b;}
function AOB(){P.call(this);}
function Ba$(a,b){var c=new AOB();A$W(c,a,b);return c;}
function A$W(a,b,c){C8(a,b,c,Bhr);Fe(a,1);}
function ANj(a,b,c,d,e){return null;}
function A1_(a){return 0;}
function AV$(a){return 0;}
function A0U(a){return 2;}
function AL6(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAB(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;f=e+1|0;$p=4;case 4:$z=AAB(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;d=d-1|0;$p=5;case 5:$z=AAB(b,c,d,e);if(C()){break _;}c=$z;return c;default:
E$();}}C3().s(a,b,c,d,e,f,$p);}
function ANN(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(f==1){h=d-1|0;$p=2;continue _;}if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 2:$z=AAB(b,c,h,e);if(C()){break _;}h=$z;if(h)g=5;if(f==2){h=e+1|0;$p=3;continue _;}if(f==3)
{h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 3:$z=AAB(b,c,d,h);if(C()){break _;}h=$z;if(h)g=4;if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 4:$z=AAB(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 5:$z=AAB(b,h,d,e);if(C()){break _;}h=$z;if(h)g=2;if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 6:$z
=AAB(b,f,d,e);if(C()){break _;}f=$z;if(f)g=1;$p=7;case 7:AKt(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AR_(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(g)return;$p=2;case 2:ABs(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABs(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=c+1|0;$p=2;continue _;}f=1;$p=3;continue _;case 2:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=e-1|0;$p=4;continue _;}f=2;$p=5;continue _;case 3:AKt(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 4:$z=AAB(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=e+1|0;$p=7;continue _;}f=3;$p=8;continue _;case 5:AKt(b,
c,d,e,f);if(C()){break _;}$p=6;case 6:AE6(a,b,c,d,e);if(C()){break _;}return;case 7:$z=AAB(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=d-1|0;$p=9;continue _;}f=4;$p=10;continue _;case 8:AKt(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 9:$z=AAB(b,c,f,e);if(C()){break _;}f=$z;if(!f){$p=6;continue _;}f=5;$p=11;continue _;case 10:AKt(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 11:AKt(b,c,d,e,f);if(C()){break _;}$p=6;continue _;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AJ$(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE6(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;$p=2;case 2:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;h=0;f=c-1|0;$p=3;case 3:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==1)h=1;f=c+1|0;$p=4;case 4:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==2)h=1;f=e-1|0;$p=5;case 5:$z=AAB(b,c,d,f);if(C()){break _;}f=$z;if(!f&&
g==3)h=1;f=e+1|0;$p=6;case 6:$z=AAB(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==4)h=1;f=d-1|0;$p=7;case 7:$z=AAB(b,c,f,e);if(C()){break _;}f=$z;if(!f&&g==5)h=1;if(!h)return;$p=8;case 8:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;$p=9;case 9:Yg(a,b,c,d,e,f);if(C()){break _;}f=0;$p=10;case 10:APv(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AE6(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AL6(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yg(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APv(b,c,d,e,f);if(C()){break _;}return 0;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AKf(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}h=$z;if(h==1)Bo(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)Bo(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)Bo(a,0.3499999940395355,0.20000000298023224,
0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)Bo(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else Bo(a,0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);$p=2;case 2:$z=Kb(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AQm(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;m=j;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l
=i+0.2199999988079071;m=j;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==3){k=h;l=i+0.2199999988079071;m=j-0.27000001072883606;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g!=4){n=h;o=i;p=j;BV(b,B(256),n,o,p,0.0,0.0,0.0);BV(b,B(257),n,o,p,0.0,0.0,0.0);}else{k=h;l=i+0.2199999988079071;m=j+0.27000001072883606;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AO0(){var a=this;P.call(a);a.sB=null;a.t8=null;}
function BcR(a,b){var c=new AO0();A3I(c,a,b);return c;}
function A3I(a,b,c){C8(a,b,c,Bhp);a.sB=$rt_createIntArray(256);a.t8=$rt_createIntArray(256);Hv(a,BeY.b,5,20);Hv(a,BeZ.b,5,5);Hv(a,Be0.b,30,60);Hv(a,Bfg.b,30,20);Hv(a,Bfh.b,15,100);Hv(a,Bfa.b,30,60);Fe(a,1);}
function Hv(a,b,c,d){a.sB.data[b]=c;a.t8.data[b]=d;}
function ARA(a,b,c,d,e){return null;}
function A5W(a){return 0;}
function A8t(a){return 0;}
function AXu(a){return 3;}
function AWD(a,b){return 0;}
function AZ2(a){return 20;}
function XL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;h=R(g,15);if(h>=0){$p=2;continue _;}i=g+1|0;$p=3;continue _;case 2:$z=AMU(a,b,c,d,e);if(C()){break _;}i=$z;if(i){j=d-1|0;$p=4;continue _;}h=d-1|0;$p=5;continue _;case 3:AKt(b,
c,d,e,i);if(C()){break _;}Fn(b,c,d,e,a.b);$p=2;continue _;case 4:$z=AFY(a,b,c,j,e);if(C()){break _;}i=$z;if(!i&&!h&&!E(f,4)){h=0;$p=13;continue _;}if(!(g%5|0)&&g>5){h=c+1|0;i=300;$p=7;continue _;}return;case 5:$z=AAB(b,c,h,e);if(C()){break _;}h=$z;if(h&&g<=3)return;h=0;$p=6;case 6:APv(b,c,d,e,h);if(C()){break _;}return;case 7:YD(a,b,h,d,e,i,f);if(C()){break _;}i=c-1|0;g=300;$p=8;case 8:YD(a,b,i,d,e,g,f);if(C()){break _;}g=100;$p=9;case 9:YD(a,b,c,j,e,g,f);if(C()){break _;}k=d+1|0;g=200;$p=10;case 10:YD(a,b,
c,k,e,g,f);if(C()){break _;}l=e-1|0;g=300;$p=11;case 11:YD(a,b,c,d,l,g,f);if(C()){break _;}m=e+1|0;g=300;$p=12;case 12:YD(a,b,c,d,m,g,f);if(C()){break _;}n=d+4|0;a:{while(i<=h){o=l;while(o<=m){p=j;while(p<=n){if(i!=c)break a;if(p!=d)break a;if(o!=e)break a;p=p+1|0;}o=o+1|0;}i=i+1|0;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 13:APv(b,c,d,e,h);if(C()){break _;}return;case 14:$z=ACv(b,i,p,o);if(C()){break _;}r=$z;if(!r){r=i+1|0;$p=15;continue _;}if(0>0&&E(f,q)<=0){g=a.b;$p=21;continue _;}b:
{c:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break c;o=l;}p=j;}if(i!=c)break b;if(p!=d)break b;if(o==e)continue;else break b;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;continue _;case 15:$z=AGx(a,b,r,p,o,g);if(C()){break _;}g=$z;r=i-1|0;$p=16;case 16:$z=AGx(a,b,r,p,o,g);if(C()){break _;}g=$z;r=p-1|0;$p=17;case 17:$z=AGx(a,b,i,r,o,g);if(C()){break _;}g=$z;r=p+1|0;$p=18;case 18:$z=AGx(a,b,i,r,o,g);if(C()){break _;}g=$z;r=o-1|0;$p=19;case 19:$z=AGx(a,b,i,p,r,g);if(C()){break _;}r=$z;g
=o+1|0;$p=20;case 20:$z=AGx(a,b,i,p,g,r);if(C()){break _;}r=$z;if(r>0&&E(f,q)<=r){g=a.b;$p=21;continue _;}d:{b:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break b;o=l;}p=j;}if(i!=c)break d;if(p!=d)break d;if(o==e)continue;else break d;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 21:APv(b,i,p,o,g);if(C()){break _;}a:{d:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break d;o=l;}p=j;}if(i!=c)break a;if(p!=d)break a;if(o==e)continue;else break a;}return;}q
=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function YD(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.t8.data;$p=1;case 1:$z=ACv(b,c,d,e);if(C()){break _;}i=$z;j=h[i];if(E(g,f)>=j)return;$p=2;case 2:$z=ACv(b,c,d,e);if(C()){break _;}f=$z;L();i=f!=Bfh.b?0:1;if(E(g,2)){f=0;$p=3;continue _;}f=a.b;$p=4;continue _;case 3:APv(b,c,d,e,f);if(C()){break _;}if(!i)return;g=Bfh;f=0;$p=5;continue _;case 4:APv(b,c,d,e,f);if
(C()){break _;}if(!i)return;g=Bfh;f=0;$p=5;case 5:g.ns(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AMU(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;$p=1;case 1:$z=AFY(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c-1|0;$p=2;case 2:$z=AFY(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=d-1|0;$p=3;case 3:$z=AFY(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=d+1|0;$p=4;case 4:$z=AFY(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=5;case 5:$z=AFY(a,b,c,d,f);if(C()){break _;}f=
$z;if(f)return 1;e=e+1|0;$p=6;case 6:$z=AFY(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A3j(a){return 0;}
function AFY(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.sB.data;$p=1;case 1:$z=b.ej(c,d,e);if(C()){break _;}c=$z;return f[c]<=0?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AGx(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.sB.data;$p=1;case 1:$z=ACv(b,c,d,e);if(C()){break _;}c=$z;h=g[c];if(h>f)f=h;return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANq(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAB(b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AMU(a,b,c,d,e);if(C()){break _;}c=$z;return c?1:0;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ABy(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAB(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AMU(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return;f=0;$p=3;case 3:APv(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ACr(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAB(b,c,f,e);if(C()){break _;}f=$z;if(f){Fn(b,c,d,e,a.b);return;}$p=2;case 2:$z=AMU(a,b,c,d,e);if(C()){break _;}f=$z;if(f){Fn(b,c,d,e,a.b);return;}f=0;$p=3;case 3:APv(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ASq(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!E(f,24))Ey(b,c+0.5,d+0.5,e+0.5,B(258),1.0+N(f),N(f)*0.699999988079071+0.30000001192092896);g=d-1|0;$p=1;case 1:$z=AAB(b,c,g,e);if(C()){break _;}h=$z;if(h){g=0;i=c;j=d;k=e;while(g<3){BV(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,
0.0);g=g+1|0;}return;}L();l=Bgm;$p=2;case 2:$z=AFY(l,b,c,g,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;k=e;while(g<3){BV(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,0.0);g=g+1|0;}return;}l=Bgm;g=c-1|0;$p=3;case 3:a:{$z=AFY(l,b,g,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;m=d;n=e;while(true){if(g>=2)break a;j=i+N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BV(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgm;h=c+1|0;$p=4;case 4:a:{$z=AFY(l,b,h,d,e);if(C()){break _;}g=$z;if(g){g=0;i=h;m=d;n=e;while(true){if(g>=2)break a;j
=i-N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BV(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgm;g=e-1|0;$p=5;case 5:a:{$z=AFY(l,b,c,d,g);if(C()){break _;}g=$z;if(g){g=0;i=c;k=d;n=e;while(true){if(g>=2)break a;j=i+N(f);m=k+N(f);o=n+N(f)*0.10000000149011612;BV(b,B(255),j,m,o,0.0,0.0,0.0);g=g+1|0;}}}l=Bgm;g=e+1|0;$p=6;case 6:a:{$z=AFY(l,b,c,d,g);if(C()){break _;}h=$z;if(h){h=0;o=c;p=d;j=g;while(true){if(h>=2)break a;q=o+N(f);i=p+N(f);n=j-N(f)*0.10000000149011612;BV(b,B(255),q,i,n,0.0,0.0,0.0);h=h+1|0;}}}l=Bgm;d=
d+1|0;$p=7;case 7:a:{$z=AFY(l,b,c,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;n=e;while(true){if(g>=2)break a;q=i+N(f);k=j-N(f)*0.10000000149011612;o=n+N(f);BV(b,B(255),q,k,o,0.0,0.0,0.0);g=g+1|0;}}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Eh(){P.call(this);}
function AOE(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.tb();$p=1;case 1:AFR(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ALX(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFJ(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AAa(){Eh.call(this);}
function BcH(a,b){var c=new AAa();AUP(c,a,b);return c;}
function AUP(a,b,c){C8(a,b,c,Bg8);}
function AXg(a){return Bcq();}
function A51(a){return 0;}
function Zx(){P.call(this);this.cG=null;}
function A$L(a,b){var c=new Zx();A68(c,a,b);return c;}
function A68(a,b,c){C8(a,b,c.bb,c.b_);a.cG=c;BH(a,c.qe);Dn(a,c.nR/3.0);a.gK=c.gK;}
function A5E(a){return 0;}
function AV3(a){return 0;}
function AYV(a){return 10;}
function APz(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGs(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AJy(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}h=$z;if(!h){Bo(a,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bo(a,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bo(a,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;}Bo(a,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ALv(a,b,c,d,e,f,
g);if(C()){break _;}Bo(a,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 4:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 6:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 8:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.5,1.0,
0.5,1.0);$p=9;case 9:ALv(a,b,c,d,e,f,g);if(C()){break _;}Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AHA(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=ABZ(b,c,g,e);if(C()){break _;}h=$z;if(!h.dw()){$p=2;continue _;}i=a.cG.b;$p=11;continue _;case 2:AIp(a,b,c,d,e);if(C()){break _;}i=c+1|0;j=d-1|0;$p=3;case 3:AIp(a,b,i,j,e);if(C()){break _;}k=c-1|0;$p=4;case 4:AIp(a,b,k,j,e);if(C()){break _;}l=e-1|0;$p=5;case 5:AIp(a,
b,c,j,l);if(C()){break _;}m=e+1|0;$p=6;case 6:AIp(a,b,c,j,m);if(C()){break _;}$p=7;case 7:AIp(a,b,i,g,e);if(C()){break _;}$p=8;case 8:AIp(a,b,k,g,e);if(C()){break _;}$p=9;case 9:AIp(a,b,c,g,l);if(C()){break _;}$p=10;case 10:AIp(a,b,c,g,m);if(C()){break _;}h=a.cG;$p=12;continue _;case 11:APv(b,c,d,e,i);if(C()){break _;}h=a.cG;$p=12;case 12:h.e1(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIp(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=APK(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;g=(-1);f=c+1|0;h=d+1|0;$p=2;case 2:$z=APK(a,b,f,h,e);if(C()){break _;}i=$z;if(i)g=0;i=c-1|0;$p=3;case 3:$z=APK(a,b,i,h,e);if(C()){break _;}j=$z;if(j)g=1;j=e+1|0;$p=4;case 4:$z=APK(a,b,c,h,j);if(C()){break _;}k=$z;if(k)g=2;k=e-1|0;$p=
5;case 5:$z=APK(a,b,c,h,k);if(C()){break _;}h=$z;if(h)g=3;if(g<0){$p=6;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 6:$z=ADy(a,b,f,d,e);if(C()){break _;}h=$z;if(h){$p=7;continue _;}$p=9;continue _;case 7:$z=ADy(a,b,i,d,e);if(C()){break _;}h=$z;if(!h)g=0;$p=9;continue _;case 8:$z=APK(a,b,i,h,e);if(C()){break _;}i=$z;if(i)g=0;$p=12;continue _;case 9:$z=ADy(a,b,i,d,e);if(C()){break _;}h=$z;if(h){$p=10;continue _;}$p=13;continue _;case 10:$z=ADy(a,b,f,d,e);if(C()){break _;}h=
$z;if(!h)g=1;$p=13;continue _;case 11:AKt(b,c,d,e,g);if(C()){break _;}return;case 12:$z=APK(a,b,f,h,e);if(C()){break _;}f=$z;if(f)g=1;$p=15;continue _;case 13:$z=ADy(a,b,c,d,j);if(C()){break _;}h=$z;if(h){$p=14;continue _;}$p=16;continue _;case 14:$z=ADy(a,b,c,d,k);if(C()){break _;}h=$z;if(!h)g=2;$p=16;continue _;case 15:$z=APK(a,b,c,h,k);if(C()){break _;}f=$z;if(f)g=2;$p=18;continue _;case 16:$z=ADy(a,b,c,d,k);if(C()){break _;}h=$z;if(h){$p=17;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 17:$z
=ADy(a,b,c,d,j);if(C()){break _;}h=$z;if(!h)g=3;if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 18:$z=APK(a,b,c,h,j);if(C()){break _;}f=$z;if(f)g=3;if(g<0)return;$p=11;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ADy(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ABZ(b,c,d,e);if(C()){break _;}b=$z;return b.dw();default:E$();}}C3().s(a,b,c,d,e,$p);}
function APK(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACv(b,c,d,e);if(C()){break _;}f=$z;if(!f)c=0;else{L();c=BeM.data[f].em()!=10?0:1;}return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function APc(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.kS(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABc(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.q9(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADn(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.ns(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AMV(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.Cw(b,c,d,e);if(C()){break _;}g=$z;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function A8V(a,b){return a.cG.yo(b);}
function A79(a){return a.cG.pQ();}
function A4c(a,b,c){return a.cG.dX(b,c);}
function A0t(a,b){return a.cG.eH(b);}
function AXv(a,b,c){return a.cG.eY(b,c);}
function A73(a,b){return a.cG.cj(b);}
function AM6(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:$z=g.uk(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AVG(a){return a.cG.mx();}
function AMf(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.oS(b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ACI(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cG;$p=1;case 1:h.qE(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYB(a){return a.cG.pf();}
function AYO(a,b,c){return a.cG.o6(b,c);}
function AMn(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.fV(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ACD(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:AHA(a,b,c,d,e,f);if(C()){break _;}g=a.cG;$p=2;case 2:g.fE(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function YA(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:f.lB(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AHN(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cG;$p=1;case 1:h.HP(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AMY(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.IM(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQQ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.oH(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQV(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.e8(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGH(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:$z=g.lH(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Y$(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:f.sM(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AFP(){Eh.call(this);this.fm=null;}
function A_6(a){var b=new AFP();A62(b,a);return b;}
function A62(a,b){D1(a,b,Bg9);a.fm=new DB;a.bb=26;}
function AEx(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1)return a.bb-1|0;if(!f)return a.bb-1|0;g=e-1|0;$p=1;case 1:$z=b.ej(c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=b.ej(c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=b.ej(k,d,e);if(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=b.ej(m,
d,e);if(C()){break _;}n=$z;if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;L();if(Bgx.data[h]&&!Bgx.data[j])k=3;if(Bgx.data[j]&&!Bgx.data[h])k=2;if(Bgx.data[l]&&!Bgx.data[n])k=5;if(Bgx.data[n]&&!Bgx.data[l])k=4;return f!=k?a.bb:a.bb+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);c=l!=a.b?m:k;$p=7;continue _;}return a.bb;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);c=h!=a.b?i:g;$p=5;continue _;}return a.bb;case 5:$z=b.ej(k,d,c);if(C()){break _;}p=$z;if(h==a.b)i=g;$p=6;case 6:$z=b.ej(m,d,i);if(C()){break _;}m=$z;if(f==4)o=(-1)-o
|0;i=5;L();if(!(!Bgx.data[l]&&!Bgx.data[p])&&!Bgx.data[n]&&!Bgx.data[m])i=5;if(!(!Bgx.data[n]&&!Bgx.data[m])&&!Bgx.data[l]&&!Bgx.data[p])i=4;return (f!=i?a.bb+32|0:a.bb+16|0)+o|0;case 7:$z=b.ej(c,d,g);if(C()){break _;}g=$z;if(l==a.b)m=k;$p=8;case 8:$z=b.ej(m,d,i);if(C()){break _;}m=$z;if(f==3)o=(-1)-o|0;i=3;L();if(!(!Bgx.data[h]&&!Bgx.data[g])&&!Bgx.data[j]&&!Bgx.data[m])i=3;if(!(!Bgx.data[j]&&!Bgx.data[m])&&!Bgx.data[h]&&!Bgx.data[g])i=2;return (f!=i?a.bb+32|0:a.bb+16|0)+o|0;default:E$();}}C3().s(a,b,c,d,e,
f,g,h,i,j,k,l,m,n,o,p,$p);}
function A86(a,b){return b==1?a.bb-1|0:!b?a.bb-1|0:b!=3?a.bb:a.bb+1|0;}
function AJ0(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;$p=1;case 1:$z=ACv(b,g,d,e);if(C()){break _;}h=$z;if(h==a.b)f=1;h=c+1|0;$p=2;case 2:$z=ACv(b,h,d,e);if(C()){break _;}i=$z;if(i==a.b)f=f+1|0;i=e-1|0;$p=3;case 3:$z=ACv(b,c,d,i);if(C()){break _;}j=$z;if(j==a.b)f=f+1|0;k=e+1|0;$p=4;case 4:$z=ACv(b,c,d,k);if(C()){break _;}l=$z;if
(l==a.b)f=f+1|0;if(f>1)return 0;$p=5;case 5:$z=AIV(a,b,g,d,e);if(C()){break _;}j=$z;if(j)return 0;$p=6;case 6:$z=AIV(a,b,h,d,e);if(C()){break _;}e=$z;if(e)return 0;$p=7;case 7:$z=AIV(a,b,c,d,i);if(C()){break _;}e=$z;if(e)return 0;$p=8;case 8:$z=AIV(a,b,c,d,k);if(C()){break _;}c=$z;return c?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AIV(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACv(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return 0;f=c-1|0;$p=2;case 2:$z=ACv(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=c+1|0;$p=3;case 3:$z=ACv(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=e-1|0;$p=4;case 4:$z=ACv(b,c,d,f);if(C()){break _;}f=$z;if(f==a.b)return 1;e=e+1|0;$p=5;case 5:$z=ACv(b,c,d,e);if(C()){break _;}c
=$z;return c!=a.b?0:1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ASD(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANw(b,c,d,e);if(C()){break _;}f=$z;g=f;h=0;i=27;j=c;k=d;l=e;while(h<i){f=Rb(g,h);if(f!==null){m=N(a.fm)*0.800000011920929+0.10000000149011612;n=N(a.fm)*0.800000011920929+0.10000000149011612;o
=N(a.fm)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;if(f.p>0){s=E(a.fm,21)+10|0;if(s>f.p)s=f.p;f.p=f.p-s|0;t=Hf(b,p,q,r,Op(f.bB,s,f.en));t.g=CZ(a.fm)*0.05000000074505806;t.i=CZ(a.fm)*0.05000000074505806+0.20000000298023224;t.h=CZ(a.fm)*0.05000000074505806;$p=3;continue _;}}h=h+1|0;}$p=2;case 2:ALX(a,b,c,d,e);if(C()){break _;}return;case 3:AOg(b,t);if(C()){break _;}a:while(true){if(f.p>0){s=E(a.fm,21)+10|0;if(s>f.p)s=f.p;f.p=f.p-s|0;t=Hf(b,p,q,r,Op(f.bB,s,f.en));t.g=CZ(a.fm)*0.05000000074505806;t.i
=CZ(a.fm)*0.05000000074505806+0.20000000298023224;t.h=CZ(a.fm)*0.05000000074505806;continue _;}while(true){h=h+1|0;if(h>=i)break a;f=Rb(g,h);if(f===null)continue;else break;}m=N(a.fm)*0.800000011920929+0.10000000149011612;n=N(a.fm)*0.800000011920929+0.10000000149011612;o=N(a.fm)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;}$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AFV(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANw(b,c,d,e);if(C()){break _;}g=$z;h=g;i=d+1|0;$p=2;case 2:$z=AAB(b,c,i,e);if(C()){break _;}j=$z;if(j)return 1;k=c-1|0;$p=3;case 3:$z=ACv(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){$p=5;continue _;}l=c+1|0;$p=4;case 4:$z=ACv(b,l,
d,e);if(C()){break _;}j=$z;if(j==a.b){$p=7;continue _;}m=e-1|0;$p=6;continue _;case 5:$z=AAB(b,k,i,e);if(C()){break _;}j=$z;if(j)return 1;l=c+1|0;$p=4;continue _;case 6:$z=ACv(b,c,d,m);if(C()){break _;}j=$z;if(j==a.b){$p=9;continue _;}n=e+1|0;$p=8;continue _;case 7:$z=AAB(b,l,i,e);if(C()){break _;}j=$z;if(j)return 1;m=e-1|0;$p=6;continue _;case 8:$z=ACv(b,c,d,n);if(C()){break _;}j=$z;if(j!=a.b){$p=10;continue _;}$p=11;continue _;case 9:$z=AAB(b,c,i,m);if(C()){break _;}j=$z;if(j)return 1;n=e+1|0;$p=8;continue _;case 10:$z
=ACv(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){g=new Ih;o=B(259);$p=12;continue _;}g=h;$p=13;continue _;case 11:$z=AAB(b,c,i,n);if(C()){break _;}j=$z;if(j)return 1;$p=10;continue _;case 12:$z=ANw(b,k,d,e);if(C()){break _;}p=$z;K6(g,o,p,h);$p=13;case 13:$z=ACv(b,l,d,e);if(C()){break _;}j=$z;if(j!=a.b){o=g;$p=15;continue _;}o=new Ih;p=B(259);g=g;$p=14;case 14:$z=ANw(b,l,d,e);if(C()){break _;}h=$z;K6(o,p,g,h);$p=15;case 15:$z=ACv(b,c,d,m);if(C()){break _;}e=$z;if(e==a.b){g=new Ih;p=B(259);$p=16;continue _;}g=o;$p
=17;continue _;case 16:$z=ANw(b,c,d,m);if(C()){break _;}h=$z;K6(g,p,h,o);$p=17;case 17:$z=ACv(b,c,d,n);if(C()){break _;}e=$z;if(e==a.b){o=new Ih;p=B(259);g=g;$p=18;continue _;}o=g;b=o;$p=19;continue _;case 18:$z=ANw(b,c,d,n);if(C()){break _;}b=$z;K6(o,p,g,b);b=o;$p=19;case 19:Y0(f,b);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AZC(a){return Bbd();}
function AKG(){P.call(this);}
function BbL(a,b){var c=new AKG();AUS(c,a,b);return c;}
function AUS(a,b,c){C8(a,b,c,Bhr);}
function AEU(a,b,c,d,e){return null;}
function ATV(a){return 0;}
function A5c(a){return 0;}
function A7r(a){return 5;}
function A9O(a,b){return 1;}
function AUA(a){return 0;}
function AHt(){P.call(this);}
function Bbp(a){var b=new AHt();AZh(b,a);return b;}
function AZh(a,b){D1(a,b,Bg9);a.bb=59;}
function AWt(a,b){if(b==1)b=a.bb-16|0;else if(!b){L();b=BeY.cj(0);}else b=b!=2&&b!=4?a.bb:a.bb+1|0;return b;}
function AGO(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANp(f);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AKF(){F4.call(this);}
function Bcu(a,b){var c=new AKF();AZO(c,a,b);return c;}
function AZO(a,b,c){Lx(a,b,c);a.bb=c;Fe(a,1);Bo(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AYF(a,b){L();return b!=Bg0.b?0:1;}
function AJl(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJn(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=Xy(b,c,g,e);if(C()){break _;}h=$z;if(h<9)return;$p=3;case 3:$z=AEI(b,c,d,e);if(C()){break _;}h=$z;if(h>=7)return;$p=4;case 4:$z=Za(a,b,c,d,e);if(C()){break _;}i=$z;if(E(f,100.0/i|0))return;g=h+1|0;$p=5;case 5:AKt(b,c,d,e,g);if(C()){break _;}return;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Za(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;g=e-1|0;$p=1;case 1:$z=ACv(b,c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=ACv(b,c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=ACv(b,k,d,e);if
(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=ACv(b,m,d,e);if(C()){break _;}n=$z;$p=5;case 5:$z=ACv(b,k,d,g);if(C()){break _;}o=$z;$p=6;case 6:$z=ACv(b,m,d,g);if(C()){break _;}p=$z;$p=7;case 7:$z=ACv(b,m,d,i);if(C()){break _;}q=$z;$p=8;case 8:$z=ACv(b,k,d,i);if(C()){break _;}r=$z;s=l!=a.b&&n!=a.b?0:1;t=h!=a.b&&j!=a.b?0:1;u=o!=a.b&&p!=a.b&&q!=a.b&&r!=a.b?0:1;o=d-1|0;while(k<=m){v=g;if(v<=i){$p=9;continue _;}k=k+1|0;}a:{if(!u){if(!s)break a;if(!t)break a;}f=f/2.0;}return f;case 9:$z=ACv(b,k,o,v);if(C()){break _;}w
=$z;x=0.0;L();if(w==Bg0.b){x=1.0;$p=10;continue _;}if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){continue _;}k=k+1|0;if(k>m)break;v=g;}b:{if(!u){if(!s)break b;if(!t)break b;}f=f/2.0;}return f;case 10:$z=AEI(b,k,o,v);if(C()){break _;}d=$z;if(d>0)x=3.0;if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){$p=9;continue _;}k=k+1|0;if(k>m)break;v=g;}c:{if(!u){if(!s)break c;if(!t)break c;}f=f/2.0;}return f;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function A8r(a,b,c){if(c<0)c=7;return a.bb+c|0;}
function A4C(a){return 6;}
function ANy(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;h=c;i=d;j=e;while(g<3){if(E(b.q,15)<=f){k=N(b.q)*0.699999988079071+0.15000000596046448;l=N(b.q)*0.699999988079071+0.15000000596046448;m=N(b.q)*0.699999988079071+0.15000000596046448;n=new E9;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DD(r,
Bhz);He(n,b,o,p,q,r);n.hc=10;$p=1;continue _;}g=g+1|0;}return;case 1:AOg(b,n);if(C()){break _;}while(true){g=g+1|0;if(g>=3)break;if(E(b.q,15)>f)continue;else{k=N(b.q)*0.699999988079071+0.15000000596046448;l=N(b.q)*0.699999988079071+0.15000000596046448;m=N(b.q)*0.699999988079071+0.15000000596046448;n=new E9;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DD(r,Bhz);He(n,b,o,p,q,r);n.hc=10;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A0X(a,b,c){var d;c=Dz();d=new S;V(d);Cg(c,T(Be(H(d,B(260)),b)));if(b!=7)b=(-1);else{BB();b=BhA.cW;}return b;}
function A4T(a,b){return 1;}
function AQN(){P.call(this);}
function BbX(a){var b=new AQN();A2J(b,a);return b;}
function A2J(a,b){D1(a,b,Bhk);a.bb=87;Fe(a,1);Bo(a,0.0,0.0,0.0,1.0,0.9375,1.0);Gy(a,255);}
function AA3(a,b,c,d,e){return D4(c+0|0,d+0|0,e+0|0,c+1|0,d+1|0,e+1|0);}
function AU1(a){return 0;}
function A1z(a){return 0;}
function A_i(a,b,c){b=R(b,1);return !b&&c>0?a.bb-1|0:b?2:a.bb;}
function ANc(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(f,5))return;g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;a:while(true){if(g>h){if(!0){$p=1;continue _;}g=7;$p=2;continue _;}l=d;while(l<=i){m=j;if(m<=k)break a;l=l+1|0;}g=g+1|0;}$p=4;continue _;case 1:$z=AEI(b,c,d,e);if(C()){break _;}h=$z;if(h>0){g=h-1|0;$p=3;continue _;}g
=c-0|0;h=c+0|0;m=e-0|0;j=e+0|0;while(true){if(g>h){if(0)return;L();g=BeP.b;$p=5;continue _;}l=m;if(l<=j)break;g=g+1|0;}$p=6;continue _;case 2:AKt(b,c,d,e,g);if(C()){break _;}return;case 3:AKt(b,c,d,e,g);if(C()){break _;}return;case 4:$z=ABZ(b,g,l,m);if(C()){break _;}f=$z;if(f===BfN)g=1;else{m=m+1|0;b:while(true){if(m<=k){continue _;}l=l+1|0;while(l>i){g=g+1|0;if(g>h)break b;l=d;}m=j;}g=0;}if(!g){$p=1;continue _;}g=7;$p=2;continue _;case 5:APv(b,c,d,e,g);if(C()){break _;}return;case 6:$z=ACv(b,g,i,l);if(C())
{break _;}n=$z;L();if(n==BgZ.b)g=1;else{l=l+1|0;while(true){if(l<=j){continue _;}g=g+1|0;if(g>h)break;l=m;}g=0;}if(g)return;L();g=BeP.b;$p=5;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AKM(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(b.q,4))return;L();g=BeP.b;$p=1;case 1:APv(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function X9(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d+1|0;$p=1;case 1:$z=ABZ(b,c,f,e);if(C()){break _;}g=$z;if(!g.dw())return;L();f=BeP.b;$p=2;case 2:APv(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AW0(a,b,c){L();return BeP.dX(0,c);}
function AF0(){Eh.call(this);this.wz=0;}
function A4J(a,b){var c=new AF0();ATP(c,a,b);return c;}
function ATP(a,b,c){D1(a,b,Bg8);a.wz=c;a.bb=45;}
function ACt(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AOE(a,b,c,d,e);if(C()){break _;}f=e-1|0;$p=2;case 2:$z=ACv(b,c,d,f);if(C()){break _;}g=$z;f=e+1|0;$p=3;case 3:$z=ACv(b,c,d,f);if(C()){break _;}f=$z;h=c-1|0;$p=4;case 4:$z=ACv(b,h,d,e);if(C()){break _;}h=$z;i=c+1|0;$p=5;case 5:$z=ACv(b,i,d,e);if(C()){break _;}i=$z;j=3;L();if(Bgx.data[g]&&!Bgx.data[f])j
=3;if(Bgx.data[f]&&!Bgx.data[g])j=2;if(Bgx.data[h]&&!Bgx.data[i])j=5;if(Bgx.data[i]&&!Bgx.data[h])j=4;$p=6;case 6:AKt(b,c,d,e,j);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AKc(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1){L();return BeS.bb;}if(!f){L();return BeS.bb;}$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}g=$z;return f!=g?a.bb:!a.wz?a.bb-1|0:a.bb+16|0;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEl(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.wz)return;$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.0+N(f)*6.0/16.0;j=e+0.5;k=N(f)*0.6000000238418579-0.30000001192092896;if(g==4){l=h-0.5199999809265137;m=i;n=j+k;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),
l,m,n,0.0,0.0,0.0);}else if(g==5){l=h+0.5199999809265137;m=i;n=j+k;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==2){l=h+k;m=i;n=j-0.5199999809265137;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==3){o=h+k;p=i;q=j+0.5199999809265137;BV(b,B(256),o,p,q,0.0,0.0,0.0);BV(b,B(257),o,p,q,0.0,0.0,0.0);}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AUW(a,b){if(b==1){L();b=BeS.b;}else if(!b){L();b=BeS.b;}else b=b!=3?a.bb:a.bb-1|0;return b;}
function AGR(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANw(b,c,d,e);if(C()){break _;}b=$z;g=b;$p=2;case 2:AO2(f,g);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function A74(a){return Baz();}
function Vs(){var a=this;Eh.call(a);a.C$=null;a.Dr=0;}
function BhB(a,b,c){var d=new Vs();AHq(d,a,b,c);return d;}
function AHq(a,b,c,d){D1(a,b,Bg9);a.bb=4;a.C$=c;Bo(a,0.25,0.0,0.25,0.75,1.625,0.75);a.Dr=d;}
function AYK(a){return (-1);}
function A58(a){return 0;}
function A52(a){return 0;}
function A1K(a){var b,c,$$je;a:{try{b=Zo(a.C$);}catch($$e){$$je=Bh($$e);if($$je instanceof BE){b=$$je;break a;}else{throw $$e;}}return b;}c=new B6;WS(c,b);M(c);}
function AGK(a,b,c,d,e){return 1;}
function A8A(a,b,c){return a.Dr;}
function ZS(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAB(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yg(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APv(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function D_(){var a=this;D.call(a);a.ci=null;a.dL=0;a.dJ=0;a.dS=0;}
var BhC=null;var BhD=null;function BhE(){var a=new D_();ANu(a);return a;}
function ANu(a){return;}
function JY(b,c){var d;if(!D0(BhD,c)){BR(BhC,c,b);BR(BhD,b,c);return;}b=new Cb;d=new S;V(d);Bl(b,T(H(H(d,B(261)),c)));M(b);}
function AFI(a){return;}
function AMe(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ci;c=a.dL;d=a.dJ;e=a.dS;$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ACe(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ci;c=a.dL;d=a.dJ;e=a.dS;$p=1;case 1:AGr(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AK0(a,b,c,d){var e,f,g;e=a.dL+0.5-b;f=a.dJ+0.5-c;g=a.dS+0.5-d;return e*e+f*f+g*g;}
function AFq(){BhC=De();BhD=De();JY(F(WV),B(262));JY(F(Te),B(263));JY(F(Jh),B(264));JY(F(Ny),B(265));}
function Jh(){var a=this;D_.call(a);a.gs=null;a.rC=0;}
function BhF(){var a=new Jh();AZY(a);return a;}
function AZY(a){var b,c;b=J(B4,4);c=b.data;c[0]=B(3);c[1]=B(3);c[2]=B(3);c[3]=B(3);a.gs=b;a.rC=(-1);}
function Bb(){var a=this;D.call(a);a.cW=0;a.eZ=0;a.ff=0;a.td=0;}
var BhG=null;var Bhb=null;var BhH=null;var BhI=null;var BhJ=null;var BhK=null;var BhL=null;var BhM=null;var Bga=null;var Bhx=null;var Bhy=null;var BhN=null;var BhO=null;var BhP=null;var BhQ=null;var BhR=null;var BhS=null;var BhT=null;var BhU=null;var BhV=null;var BhW=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;var Bh1=null;var Bh2=null;var Bh3=null;var Bh4=null;var Bh5=null;var Bh6=null;var Bh7=null;var Bh8=null;var Bgc=null;var Bf_=null;var Bgb=null;var Bh9=null;var Bh$=null;var Bh_=null;var Bia
=null;var Bib=null;var Bhz=null;var BhA=null;var Bic=null;var Bid=null;var Bie=null;var Bif=null;var Big=null;var Bih=null;var Bii=null;var Bij=null;var Bik=null;var Bil=null;var Bim=null;var Bin=null;var Bio=null;var Bip=null;var Biq=null;var Bir=null;var Bis=null;var Bit=null;var Biu=null;var Biv=null;var Biw=null;var Bhw=null;var Bgd=null;var Bix=null;var Biy=null;var Biz=null;var Bha=null;var BiA=null;var BiB=null;var BiC=null;var BiD=null;var BiE=null;var BiF=null;function BB(){BB=Bt(Bb);A7H();}
function EV(a){var b=new Bb();Ds(b,a);return b;}
function Ds(a,b){var c,d,e;BB();a.eZ=64;a.ff=32;c=256+b|0;a.cW=c;if(Bhb.data[c]!==null){d=Dz();e=new S;V(e);Cg(d,T(Be(H(e,B(266)),b)));}Bhb.data[c]=a;}
function Bp(a,b){a.td=b;return a;}
function A5x(a,b){return a.td;}
function AGq(a,b,c,d,e,f,g,h){return 0;}
function A$J(a,b,c){return 1.0;}
function ASh(a,b,c,d){return b;}
function A2w(a){return a.eZ;}
function A7N(a){return a.ff;}
function AV9(a,b,c){return;}
function A46(a,b,c,d,e,f){return;}
function A_p(a,b){return 1;}
function AV0(a,b){return 0;}
function A3G(a,b,c){return;}
function A7H(){var b;BhG=Bbi();Bhb=J(Bb,1024);BhH=Bp(LK(0,2),82);BhI=Bp(Od(1,2),98);BhJ=Bp(NI(2,2),114);BhK=Bp(Ba_(3),5);BhL=Bp(Oz(4,4),10);BhM=Bp(Bag(5),21);Bga=Bp(EV(6),37);Bhx=Bp(EV(7),7);Bhy=Bp(EV(8),55);BhN=Bp(EV(9),23);BhO=Bp(EV(10),39);BhP=Bp(Nx(11,2),66);BhQ=Bp(Nx(12,0),64);BhR=Bp(LK(13,0),80);BhS=Bp(Od(14,0),96);BhT=Bp(NI(15,0),112);BhU=Bp(Nx(16,1),65);BhV=Bp(LK(17,1),81);BhW=Bp(Od(18,1),97);BhX=Bp(NI(19,1),113);BhY=Bp(Nx(20,3),67);BhZ=Bp(LK(21,3),83);Bh0=Bp(Od(22,3),99);Bh1=Bp(NI(23,3),115);Bh2=Bp(EV(24),
53);Bh3=Bp(EV(25),71);Bh4=Bp(BcB(26,10),72);Bh5=Bp(Nx(27,0),68);Bh6=Bp(LK(28,0),84);Bh7=Bp(Od(29,0),100);Bh8=Bp(NI(30,0),116);Bgc=Bp(EV(31),8);Bf_=Bp(EV(32),24);Bgb=Bp(EV(33),40);Bh9=Bp(Nu(34,0),128);Bh$=Bp(Nu(35,1),129);Bh_=Bp(Nu(36,2),130);Bia=Bp(Nu(37,3),131);Bib=Bp(Nu(38,4),132);b=new VU;L();AHG(b,39,BgZ.b);Bhz=Bp(b,9);BhA=Bp(EV(40),25);Bic=Bp(Oz(41,5),41);Bid=Bp(Db(42,0,0,0),0);Bie=Bp(Db(43,0,0,1),16);Bif=Bp(Db(44,0,0,2),32);Big=Bp(Db(45,0,0,3),48);Bih=Bp(Db(46,1,1,0),1);Bii=Bp(Db(47,1,1,1),17);Bij=Bp(Db(48,
1,1,2),33);Bik=Bp(Db(49,1,1,3),49);Bil=Bp(Db(50,2,2,0),2);Bim=Bp(Db(51,2,2,1),18);Bin=Bp(Db(52,2,2,2),34);Bio=Bp(Db(53,2,2,3),50);Bip=Bp(Db(54,3,3,0),3);Biq=Bp(Db(55,3,3,1),19);Bir=Bp(Db(56,3,3,2),35);Bis=Bp(Db(57,3,3,3),51);Bit=Bp(Db(58,1,4,0),4);Biu=Bp(Db(59,1,4,1),20);Biv=Bp(Db(60,1,4,2),36);Biw=Bp(Db(61,1,4,3),52);Bhw=Bp(EV(62),6);Bgd=Bp(Oz(63,3),87);Bix=Bp(Oz(64,8),88);Biy=Bp(Bae(65),26);Biz=Bp(Oz(66,42),11);Bha=Bp(Bcg(67),42);BiA=Bp(A_Q(68),43);BiB=Bp(APX(69,0),74);BiC=Bp(APX(70,BfV.b),75);BiD=Bp(APX(71,
BfW.b),76);BiE=Bp(BbK(72),135);BiF=Bp(BcV(73),104);}
function AIv(){P.call(this);}
function Bab(a){var b=new AIv();A2b(b,a);return b;}
function A2b(a,b){D1(a,b,Bg9);a.bb=97;Bo(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function A$p(a,b,c){var d,e;if(b&&b!=1){d=Pn(a,c);if((d&&d!=2?0:1)^(b>3?0:1))return a.bb;b=((d/2|0)+(b&1^d)|0)+((c&4)/4|0)|0;e=a.bb-((c&8)*2|0)|0;if(b&1)e= -e;return e;}return a.bb;}
function A0Q(a){return 0;}
function AXp(a){return 0;}
function ATL(a){return 7;}
function AGo(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHC(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=K7(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Zz(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHC(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Nm(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AHC(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}c=$z;AO1(a,Pn(a,c));return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AO1(a,b){Bo(a,0.0,0.0,0.0,1.0,2.0,1.0);if(!b)Bo(a,0.0,0.0,0.0,1.0,1.0,0.1875);if(b==1)Bo(a,0.8125,0.0,0.0,1.0,1.0,1.0);if(b==2)Bo(a,0.0,0.0,0.8125,1.0,1.0,1.0);if(b==3)Bo(a,0.0,0.0,0.0,0.1875,1.0,1.0);}
function AJU(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ADS(a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ADS(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(!(g&8)){h=d+1|0;$p=2;continue _;}d=d-1|0;$p=3;continue _;case 2:$z=ACv(b,c,h,e);if(C()){break _;}i=$z;if(i!=a.b){h=g^4;$p=4;continue _;}i=(g^4)+8|0;$p=5;continue _;case 3:$z=ACv(b,c,d,e);if(C()){break _;}h=$z;if(h!=a.b)return 1;$p=6;continue _;case 4:AKt(b,c,d,e,h);if
(C()){break _;}Jk(b,c,d-1|0,e,c,d,e);if(BP()>=0.5)Ey(b,c+0.5,d+0.5,e+0.5,B(267),1.0,N(b.q)*0.10000000149011612+0.8999999761581421);else Ey(b,c+0.5,d+0.5,e+0.5,B(268),1.0,N(b.q)*0.10000000149011612+0.8999999761581421);return 1;case 5:AKt(b,c,h,e,i);if(C()){break _;}h=g^4;$p=4;continue _;case 6:ADS(a,b,c,d,e,f);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ACx(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(g&8){f=d-1|0;$p=3;continue _;}h=0;f=d+1|0;$p=2;case 2:$z=ACv(b,c,f,e);if(C()){break _;}i=$z;if(i!=a.b){i=0;$p=4;continue _;}i=d-1|0;$p=6;continue _;case 3:$z=ACv(b,c,f,e);if(C()){break _;}f=$z;if(f==a.b)return;f=0;$p=5;continue _;case 4:APv(b,c,d,e,i);if(C()){break _;}h
=1;i=d-1|0;$p=6;continue _;case 5:APv(b,c,d,e,f);if(C()){break _;}return;case 6:$z=AAB(b,c,i,e);if(C()){break _;}i=$z;if(!i){i=0;$p=7;continue _;}if(!h)return;$p=10;continue _;case 7:APv(b,c,d,e,i);if(C()){break _;}h=1;$p=8;case 8:$z=ACv(b,c,f,e);if(C()){break _;}i=$z;if(i==a.b){i=0;$p=9;continue _;}if(!h)return;$p=10;continue _;case 9:APv(b,c,f,e,i);if(C()){break _;}if(!h)return;$p=10;case 10:Yg(a,b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A8z(a,b,c){if(b&8)b=0;else{BB();b=BiA.cW;}return b;}
function XE(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHC(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Kb(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Pn(a,b){return b&4?b&3:(b-1|0)&3;}
function AJZ(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=127)return 0;d=d-1|0;$p=1;case 1:$z=AAB(b,c,d,e);if(C()){break _;}c=$z;return !c?0:1;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AC1(){P.call(this);}
function Bcj(a,b){var c=new AC1();AUM(c,a,b);return c;}
function AUM(a,b,c){C8(a,b,c,Bhr);}
function ADe(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bo(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bo(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bo(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bo(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Nm(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AD5(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bo(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bo(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bo(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bo(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=K7(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AWU(a){return 0;}
function A5T(a){return 0;}
function A9x(a){return 8;}
function ANT(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAB(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;e=e+1|0;$p=4;case 4:$z=AAB(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function Yn(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;if(g&&f!=2){if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;continue _;}h=e+1|0;$p=2;case 2:$z=AAB(b,c,d,h);if(C()){break _;}h=$z;if(h)g=2;if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h
=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;case 3:$z=AAB(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;case 4:$z=AAB(b,h,d,e);if(C()){break _;}h=$z;if(h)g=4;if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;case 5:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if(f)g=5;$p=6;case 6:AKt(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKJ(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;h=0;if(g==2){f=e+1|0;$p=2;continue _;}if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 2:$z=AAB(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if
(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 3:$z=AAB(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 4:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 5:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(h)return;$p=6;case 6:Yg(a,b,c,d,e,g);if(C()){break _;}f=0;$p=7;case 7:APv(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function A5r(a,b){return 1;}
function ANW(){P.call(this);}
function BaX(a,b){var c=new ANW();A$6(c,a,b);return c;}
function A$6(a,b,c){C8(a,b,c,Bhr);Bo(a,0.0,0.0,0.0,1.0,0.125,1.0);}
function ACC(a,b,c,d,e){return null;}
function AWv(a){return 0;}
function ALA(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMk(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Kb(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AMk(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}f=$z;if(f>=2&&f<=5)Bo(a,0.0,0.0,0.0,1.0,0.625,1.0);else Bo(a,0.0,0.0,0.0,1.0,0.125,1.0);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A2z(a,b,c){return c<6?a.bb:a.bb-16|0;}
function A3z(a){return 0;}
function A0v(a){return 9;}
function A2G(a,b){return 1;}
function ANV(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=AAB(b,c,d,e);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ANE(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=15;$p=1;case 1:AKt(b,c,d,e,f);if(C()){break _;}g=new H9;$p=2;case 2:YQ(g,a,b,c,d,e);if(C()){break _;}$p=3;case 3:YP(g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AJM(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEI(b,c,d,e);if(C()){break _;}g=$z;h=0;f=d-1|0;$p=2;case 2:$z=AAB(b,c,f,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==2){f=c+1|0;$p=3;continue _;}if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 3:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if
(!f)h=1;if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 4:$z=AAB(b,f,d,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 5:$z=AAB(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 6:$z=AAB(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(!h)return;$p=7;case 7:$z=AEI(b,c,d,e);if(C())
{break _;}f=$z;$p=8;case 8:Yg(a,b,c,d,e,f);if(C()){break _;}f=0;$p=9;case 9:APv(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ASz(){Bb.call(this);this.nU=0;}
function A_5(a){var b=new ASz();A2L(b,a);return b;}
function A2L(a,b){Ds(a,b);b=b+256|0;a.nU=b;L();a.td=BeM.data[b].cj(2);}
function AQl(a,b,c,d,e,f,g,h){var i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;if(!b.p)return 0;i=a.nU;j=0;$p=1;case 1:$z=AH8(d,i,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;L();k=BeM.data[a.nU];j=a.nU;$p=2;case 2:$z=APv(d,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;c=BeM.data[a.nU];$p
=3;case 3:c.vc(d,e,f,g,h);if(C()){break _;}Ey(d,e+0.5,f+0.5,g+0.5,Kg(k.gK),(k.gK.oP+1.0)/2.0,k.gK.pM*0.800000011920929);b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AHE(){MU.call(this);}
function A1E(){var a=new AHE();A1R(a);return a;}
function A1R(a){var b,c,d,e;b=J(B4,0);c=b.data;RZ(B(24));d=c.length;e=0;while(e<d){RZ(c[e]);e=e+1|0;}a.wt=B(24);a.H2=b.oX();}
function AFu(a){var b;b=new Rg;b.li=B(269);b.mY=BiG;b.rA=BiG;b.HV=a;b.BT=0.3333333432674408;b.F6=0.5;return b;}
function AG1(a){var b,c,d,e,f;b=new PQ;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.vv=BiG;b.uP=BiG;e=d.length;if(e&&e>=b.BM){b.Hw=a;b.uC=c.oX();b.Gz=2.0;b.BM=4.0;return b;}f=new Cb;Bl(f,B(270));M(f);}
function M6(){var a=this;Fk.call(a);a.d9=0;a.cq=null;a.kN=null;}
function AMB(b,c,d){return A5y(0,b.data.length,b,c,c+d|0,0,0);}
function AAq(b){return AMB(b,0,b.data.length);}
function AKe(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new S;V(i);Bl(h,T(Be(H(Be(H(i,B(271)),g),B(248)),f)));M(h);}if(Ct(a)<d){i=new Gu;O(i);M(i);}if(d<0){i=new BO;h=new S;V(h);Bl(i,T(H(Be(H(h,B(249)),d),B(250))));M(i);}g=a.bk+a.d9|0;j=0;while(j<d){k=c+1|0;b=a.cq.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;h=new BO;i=new S;V(i);Bl(h,T(H(Be(H(Be(H(i,B(251)),c),B(244)),b.length),B(27))));M(h);}
function WW(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.mR){e=new FV;O(e);M(e);}if(Ct(a)<d){e=new Hc;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BO;i=new S;V(i);Bl(e,T(Be(H(Be(H(i,B(272)),h),B(248)),g)));M(e);}if(d<0){e=new BO;i=new S;V(i);Bl(e,T(H(Be(H(i,B(249)),d),B(250))));M(e);}h=a.bk+a.d9|0;j=0;while(j<d){b=a.cq.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;e=new S;V(e);Bl(i,T(H(Be(H(Be(H(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function UL(a,b){return WW(a,b,0,b.data.length);}
function A9t(a,b){a.kN=b;return a;}
function ATU(a){EB(a);return a;}
function A5m(a,b){No(a,b);return a;}
function A0M(a,b){EO(a,b);return a;}
function Ni(){L9.call(this);}
function Jr(a){var b,c;if(a.bk<a.cy){b=a.bk;a.bk=b+1|0;return RF(a,b);}c=new Gu;O(c);M(c);}
function CJ(a,b){var c,d;if(AKo(a)){c=new FV;O(c);M(c);}if(a.bk<a.cy){d=a.bk;a.bk=d+1|0;ADQ(a,d,b);return a;}c=new Hc;O(c);M(c);}
function AKo(a){return a.xw;}
function WM(){var a=this;Ni.call(a);a.xw=0;a.yn=0;a.xp=null;}
function RF(a,b){return a.xp.data[b+a.yn|0];}
function ADQ(a,b,c){a.xp.data[b+a.yn|0]=c;}
function A8w(a){return a.xw;}
function ARj(){var a=this;M6.call(a);a.Gk=0;a.mR=0;}
function A5y(a,b,c,d,e,f,g){var h=new ARj();ATf(h,a,b,c,d,e,f,g);return h;}
function ATf(a,b,c,d,e,f,g,h){KO(a,c);a.kN=Bgk;a.d9=b;a.cq=d;a.bk=e;a.cy=f;a.Gk=g;a.mR=h;}
function ALL(a){var b,c,d,e;if(a.bk>=a.cy){b=new Gu;O(b);M(b);}c=a.cq.data;d=a.d9;e=a.bk;a.bk=e+1|0;return c[d+e|0];}
function A1n(a){return a.mR;}
function KQ(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.cy){c=a.cq.data[a.d9+b|0]&255;d=a.cq.data[(a.d9+b|0)+1|0]&255;e=a.cq.data[(a.d9+b|0)+2|0]&255;f=a.cq.data[(a.d9+b|0)+3|0]&255;if(a.kN!==Bgk)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BO;h=new S;V(h);Bl(g,T(H(Be(H(Be(H(h,B(273)),b),B(244)),a.cy-3|0),B(27))));M(g);}
function AA5(a,b,c){var d,e;if(a.mR){d=new FV;O(d);M(d);}if(b>=0&&(b+3|0)<a.cy){if(a.kN!==Bgk){a.cq.data[a.d9+b|0]=c<<24>>24;a.cq.data[(a.d9+b|0)+1|0]=c>>8<<24>>24;a.cq.data[(a.d9+b|0)+2|0]=c>>16<<24>>24;a.cq.data[(a.d9+b|0)+3|0]=c>>24<<24>>24;}else{a.cq.data[a.d9+b|0]=c>>24<<24>>24;a.cq.data[(a.d9+b|0)+1|0]=c>>16<<24>>24;a.cq.data[(a.d9+b|0)+2|0]=c>>8<<24>>24;a.cq.data[(a.d9+b|0)+3|0]=c<<24>>24;}return a;}e=new BO;d=new S;V(d);Bl(e,T(H(Be(H(Be(H(d,B(273)),b),B(244)),a.cy-3|0),B(27))));M(e);}
function AHH(a){var b,c;b=Ct(a)/4|0;if(a.kN!==Bgk){c=new Pd;OL(c,a.d9+a.bk|0,b,a,0,b,a.mR);return c;}c=new VL;OL(c,a.d9+a.bk|0,b,a,0,b,a.mR);return c;}
function Vr(){}
function LV(){Fk.call(this);}
function AHj(b){var c,d;if(b>=0)return AZF(0,b,$rt_createCharArray(b),0,b,0);c=new Cb;d=new S;V(d);Bl(c,T(Be(H(d,B(274)),b)));M(c);}
function AM3(b,c,d){return AZF(0,b.data.length,b,c,c+d|0,0);}
function O2(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BO;i=new S;V(i);Bl(h,T(Be(H(Be(H(i,B(275)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gu;O(h);M(h);}if(d<0){h=new BO;i=new S;V(i);Bl(h,T(H(Be(H(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=AON(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;h=new S;V(h);Bl(i,T(H(Be(H(Be(H(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AEP(a,b){return O2(a,b,0,b.data.length);}
function ASo(a,b,c,d){var e,f,g,h,i,j,k;if(Xn(a)){e=new FV;O(e);M(e);}if(Ct(a)<d){e=new Hc;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BO;i=new S;V(i);Bl(e,T(Be(H(Be(H(i,B(276)),h),B(248)),g)));M(e);}if(d<0){e=new BO;i=new S;V(i);Bl(e,T(H(Be(H(i,B(249)),d),B(250))));M(e);}h=a.bk;j=0;while(j<d){k=h+1|0;g=c+1|0;Vu(a,h,f[c]);j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BO;e=new S;V(e);Bl(i,T(H(Be(H(Be(H(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AJc(a,b,c,d){var e,f,g,h,i,j;if(Xn(a)){b=new FV;O(b);M(b);}e=d-c|0;if(Ct(a)<e){b=new Hc;O(b);M(b);}if(c>=0&&c<Bi(b)){if(d>Bi(b)){f=new BO;g=new S;V(g);Bl(f,T(Be(H(Be(H(g,B(276)),d),B(277)),Bi(b))));M(f);}if(c>d){b=new BO;f=new S;V(f);Bl(b,T(Be(H(Be(H(f,B(278)),c),B(279)),d)));M(b);}h=a.bk;while(c<d){i=h+1|0;j=c+1|0;Vu(a,h,Y(b,c));h=i;c=j;}a.bk=a.bk+e|0;return a;}g=new BO;f=new S;V(f);Bl(g,T(H(Be(H(Be(H(f,B(278)),c),B(244)),Bi(b)),B(27))));M(g);}
function Nl(a,b){return AJc(a,b,0,Bi(b));}
function AJA(a){return 1;}
function APi(a){return a.mj;}
function AYx(a){Gx(a);return a;}
function AX2(a,b){EO(a,b);return a;}
function P4(){B1.call(this);}
function BiH(){var a=new P4();A82(a);return a;}
function A82(a){O(a);}
function Ok(){B8.call(this);}
function BiI(){var a=new Ok();AZT(a);return a;}
function AZT(a){return;}
function A4R(a){return 0;}
function A5w(a){return 0;}
function ATk(a){return 0;}
function L1(){B8.call(this);}
function BiJ(){var a=new L1();ATj(a);return a;}
function ATj(a){return;}
function A_D(a){return 1;}
function AY7(a){return 0;}
function N7(){B8.call(this);}
function BiK(){var a=new N7();A7u(a);return a;}
function A7u(a){return;}
function A6V(a){return 0;}
function A94(a){return 0;}
function AU3(a){return 0;}
function Gc(){var a=this;Bb.call(a);a.uV=null;a.yD=0.0;a.AH=0;a.Jw=0;}
function BiL(a,b,c,d){var e=new Gc();Mj(e,a,b,c,d);return e;}
function Mj(a,b,c,d,e){Ds(a,b);a.yD=4.0;a.Jw=d;a.uV=e;a.eZ=1;a.ff=32<<d;if(d==3)a.ff=a.ff*2|0;a.yD=(d+1|0)*2|0;a.AH=c+d|0;}
function A8S(a,b,c){var d;d=0;while(d<a.uV.data.length){if(a.uV.data[d]===c)return a.yD;d=d+1|0;}return 1.0;}
function A64(a,b,c){FL(b,2);}
function AWo(a,b,c,d,e,f){FL(b,1);}
function AW8(a,b){return a.AH;}
function OW(){Gc.call(this);}
var BiM=null;function Bb3(){Bb3=Bt(OW);A8_();}
function LK(a,b){var c=new OW();AFL(c,a,b);return c;}
function AFL(a,b,c){Bb3();Mj(a,b,1,c,BiM);}
function A8_(){var b,c;b=J(P,4);c=b.data;L();c[0]=BeO;c[1]=BeP;c[2]=Be9;c[3]=Be$;BiM=b;}
function Vv(){Gc.call(this);this.nG=0;}
var BiN=null;function Bb6(){Bb6=Bt(Vv);A1L();}
function Od(a,b){var c=new Vv();ANP(c,a,b);return c;}
function ANP(a,b,c){Bb6();Mj(a,b,2,c,BiN);a.nG=c;}
function A5j(a,b){L();return b===Bfi?(a.nG!=3?0:1):b!==BgX&&b!==BgW?(b!==Bff&&b!==Bfd?(b!==Bfe&&b!==Bfc?(b.b_===Bg8?1:b.b_!==Bhl?0:1):a.nG<1?0:1):a.nG<2?0:1):a.nG<2?0:1;}
function A1L(){var b,c;b=J(P,12);c=b.data;L();c[0]=BeW;c[1]=BeQ;c[2]=BeR;c[3]=BeS;c[4]=Be3;c[5]=Bfc;c[6]=Bfe;c[7]=Bfb;c[8]=Bff;c[9]=Bfd;c[10]=BgW;c[11]=BgX;BiN=b;}
function Wq(){Gc.call(this);}
var BiO=null;function BbG(){BbG=Bt(Wq);AT7();}
function NI(a,b){var c=new Wq();AND(c,a,b);return c;}
function AND(a,b,c){BbG();Mj(a,b,3,c,BiO);}
function AT7(){var b,c;b=J(P,4);c=b.data;L();c[0]=BeY;c[1]=Bfg;c[2]=BeZ;c[3]=BgU;BiO=b;}
function AEZ(){Bb.call(this);}
function Ba_(a){var b=new AEZ();AYq(b,a);return b;}
function AYq(a,b){Ds(a,b);a.eZ=1;a.ff=64;}
function AJH(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;$p=1;case 1:$z=ACv(d,e,f,g);if(C()){break _;}i=$z;if(i){FL(b,1);return 1;}j=e+0.5;k=f+0.5;l=g+0.5;BB();Ey(d,j,k,l,B(280),1.0,N(BhG)*0.4000000059604645+0.800000011920929);L();h=Bgm.b;$p
=2;case 2:APv(d,e,f,g,h);if(C()){break _;}FL(b,1);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function LO(){Bb.call(this);this.zW=0;}
function Oz(a,b){var c=new LO();ZW(c,a,b);return c;}
function ZW(a,b,c){Ds(a,b);a.zW=c;a.eZ=1;}
function P8(a,b,c,d){b.p=b.p-1|0;UO(d,a.zW);return b;}
function AOT(){Bb.call(this);}
function Bag(a){var b=new AOT();A2n(b,a);return b;}
function A2n(a,b){Ds(a,b);a.eZ=1;}
function AGy(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.K;BB();if(!AGM(e,Bga.cW))return b;Dh(c,d,B(225),1.0,1.0/(N(BhG)*0.4000000059604645+0.800000011920929));e=AS9(c,d);$p=1;case 1:AOg(c,e);if(C()){break _;}return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AK$(){Bb.call(this);this.z1=0;}
function Nx(a,b){var c=new AK$();A$N(c,a,b);return c;}
function A$N(a,b,c){Ds(a,b);a.eZ=1;a.ff=32<<c;a.z1=4+(c*2|0)|0;}
function A0u(a,b,c){return 1.5;}
function A7R(a,b,c){FL(b,1);}
function AX3(a,b,c,d,e,f){FL(b,2);}
function A2y(a,b){return a.z1;}
function AOb(){LO.call(this);}
function BcB(a,b){var c=new AOb();A20(c,a,b);return c;}
function A20(a,b,c){ZW(a,b,c);}
function APu(a,b,c,d){P8(a,b,c,d);b=new Cd;BB();DD(b,Bh3);return b;}
function ANx(){Bb.call(this);}
function Nu(a,b){var c=new ANx();ATK(c,a,b);return c;}
function ATK(a,b,c){Ds(a,b);a.eZ=1;a.ff=32<<c;}
function AQR(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACv(d,e,f,g);if(C()){break _;}i=$z;h=f+1|0;$p=2;case 2:a:{$z=ABZ(d,e,h,g);if(C()){break _;}j=$z;if(!j.dw()){L();if(i==BeO.b)break a;}L();if(i!=BeP.b)return 0;}L();k=Bg0;l=e;m
=l+0.5;n=f;o=n+0.5;p=g;Ey(d,m,o,p+0.5,Kg(k.gK),(k.gK.oP+1.0)/2.0,k.gK.pM*0.800000011920929);h=k.b;$p=3;case 3:APv(d,e,f,g,h);if(C()){break _;}FL(b,1);if(!E(d.q,8)&&i==BeO.b){q=1;r=0;m=n+1.2000000476837158;if(r<q){s=N(d.q)*0.699999988079071+0.15000000596046448;n=N(d.q)*0.699999988079071+0.15000000596046448;t=new E9;o=l+s;u=p+n;c=new Cd;BB();DD(c,Bhz);He(t,d,o,m,u,c);t.hc=10;$p=4;continue _;}}return 1;case 4:AOg(d,t);if(C()){break _;}r=r+1|0;if(r>=q)return 1;s=N(d.q)*0.699999988079071+0.15000000596046448;n=N(d.q)
*0.699999988079071+0.15000000596046448;t=new E9;o=l+s;u=p+n;c=new Cd;BB();DD(c,Bhz);He(t,d,o,m,u,c);t.hc=10;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function VU(){Bb.call(this);this.zK=0;}
function BiP(a,b){var c=new VU();AHG(c,a,b);return c;}
function AHG(a,b,c){Ds(a,b);a.zK=c;}
function AFk(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;$p=1;case 1:$z=ACv(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bg0.b)return 0;f=f+1|0;h=a.zK;$p=2;case 2:APv(d,e,f,g,h);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function F5(){var a=this;Bb.call(a);a.H5=0;a.zV=0;a.za=0;a.BC=0;}
var BiQ=null;var BiR=null;function Db(a,b,c,d){var e=new F5();ABo(e,a,b,c,d);return e;}
function ABo(a,b,c,d,e){Ds(a,b);a.H5=c;a.zV=e;a.BC=d;a.za=BiQ.data[e];a.ff=(BiR.data[e]*3|0)<<c;a.eZ=1;}
function ARI(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;BiQ=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;BiR=b;}
function XU(){Bb.call(this);}
function Bae(a){var b=new XU();AY$(b,a);return b;}
function AY$(a,b){Ds(a,b);a.ff=64;}
function ACc(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)return 0;if(h==1)return 0;i=0;if(h==4)i=1;if(h==3)i=2;if(h==5)i=3;j=new IG;FC(j,d);j.rv=0;j.dK=0;j.c4=0.0;D2(j,0.5,0.5);j.nr=e;j.Ez=f;j.ny=g;c=Ci();k=BiS.oX().data;e=k.length;f=0;if(f<e){l=k[f];j.dU=l;JN(j,i);$p=1;continue _;}if(c.s>0)j.dU=Z(c,E(j.m,c.s));JN(j,i);$p=2;continue _;case 1:$z
=ZI(j);if(C()){break _;}g=$z;if(g)U(c,l);f=f+1|0;if(f<e){l=k[f];j.dU=l;JN(j,i);continue _;}if(c.s>0)j.dU=Z(c,E(j.m,c.s));JN(j,i);$p=2;case 2:$z=ZI(j);if(C()){break _;}e=$z;if(!e)return 1;$p=3;case 3:AOg(d,j);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AHo(){Bb.call(this);}
function Bcg(a){var b=new AHo();A7E(b,a);return b;}
function A7E(a,b){Ds(a,b);a.ff=64;a.eZ=1;}
function Yd(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bg3;$p=1;case 1:$z=i.fV(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;h=Bg3.b;$p=2;case 2:APv(d,e,f,g,h);if(C()){break _;}h=K((c.v+180.0)*16.0/360.0-0.5)&15;$p=3;case 3:AKt(d,e,f,g,h);if(C()){break _;}b.p=b.p-1|0;$p=4;case 4:$z=ANw(d,e,f,g);if(C()){break _;}b=$z;b=b;$p=5;case 5:AI8(c,b);if
(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AJa(){Bb.call(this);}
function A_Q(a){var b=new AJa();A26(b,a);return b;}
function A26(a,b){Ds(a,b);a.ff=64;a.eZ=1;}
function AD$(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bg4;$p=1;case 1:$z=i.fV(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;j=K((c.v+180.0)*4.0/360.0-0.5)&3;k=0;l=0;if(!j)l=1;if(j==1)k=(-1);if(j==2)l=(-1);if(j==3)k=1;m=e-k|0;n=g-l|0;$p=2;case 2:$z
=AAB(d,m,f,n);if(C()){break _;}h=$z;h=!h?0:1;o=f+1|0;$p=3;case 3:$z=AAB(d,m,o,n);if(C()){break _;}p=$z;p=h+(!p?0:1)|0;h=e+k|0;k=g+l|0;$p=4;case 4:$z=AAB(d,h,f,k);if(C()){break _;}l=$z;l=!l?0:1;$p=5;case 5:$z=AAB(d,h,o,k);if(C()){break _;}q=$z;q=l+(!q?0:1)|0;$p=6;case 6:$z=ACv(d,m,f,n);if(C()){break _;}l=$z;if(l!=Bg4.b){$p=7;continue _;}n=1;$p=8;continue _;case 7:$z=ACv(d,m,o,n);if(C()){break _;}m=$z;n=m==Bg4.b?1:0;$p=8;case 8:$z=ACv(d,h,f,k);if(C()){break _;}l=$z;if(l!=Bg4.b){$p=9;continue _;}r=0;if(n&&!1)r
=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bg4.b;$p=10;continue _;case 9:$z=ACv(d,h,o,k);if(C()){break _;}h=$z;m=h==Bg4.b?1:0;r=0;if(n&&!m)r=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bg4.b;$p=10;case 10:APv(d,e,f,g,h);if(C()){break _;}$p=11;case 11:AKt(d,e,f,g,j);if(C()){break _;}f=Bg4.b;$p=12;case 12:APv(d,e,o,g,f);if(C()){break _;}f=j+8|0;$p=13;case 13:AKt(d,e,o,g,f);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ARK(){Bb.call(this);this.pp=0;}
function APX(a,b){var c=new ARK();A0e(c,a,b);return c;}
function A0e(a,b,c){Ds(a,b);a.eZ=1;a.ff=64;a.pp=c;}
function AHW(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.T+(d.I-d.T)*1.0;f=d.P+(d.v-d.P)*1.0;g=BY(d.bS+(d.d-d.bS)*1.0,d.cS+(d.j-d.cS)*1.0,d.bR+(d.e-d.bR)*1.0);h= -f*0.01745329238474369-3.1415927410125732;i=BC(h);h=Bq(h);j= -e*0.01745329238474369;k= -BC(j);l=Dk(g,h*k*5.0,Bq(j)
*5.0,i*k*5.0);m=a.pp?0:1;$p=1;case 1:$z=AE1(c,g,l,m);if(C()){break _;}n=$z;if(n===null)return b;if(n.k$)return b;m=n.h$;o=n.h_;p=n.ia;if(!a.pp){$p=2;continue _;}if(!n.hL)o=o+(-1)|0;if(n.hL==1)o=o+1|0;if(n.hL==2)p=p+(-1)|0;if(n.hL==3)p=p+1|0;if(n.hL==4)m=m+(-1)|0;if(n.hL==5)m=m+1|0;$p=8;continue _;case 2:$z=ABZ(c,m,o,p);if(C()){break _;}g=$z;if(g!==BfN){$p=3;continue _;}$p=4;continue _;case 3:$z=ABZ(c,m,o,p);if(C()){break _;}d=$z;if(d!==BfO)return b;$p=5;continue _;case 4:$z=AEI(c,m,o,p);if(C()){break _;}q=$z;if
(q){$p=3;continue _;}q=0;$p=6;continue _;case 5:$z=AEI(c,m,o,p);if(C()){break _;}q=$z;if(q)return b;q=0;$p=7;continue _;case 6:APv(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DD(b,BiC);return b;case 7:APv(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DD(b,BiD);return b;case 8:$z=ACv(c,m,o,p);if(C()){break _;}q=$z;if(q){$p=10;continue _;}q=a.pp;r=0;$p=9;case 9:AIW(c,m,o,p,q,r);if(C()){break _;}b=new Cd;BB();DD(b,BiB);return b;case 10:$z=ABZ(c,m,o,p);if(C()){break _;}d=$z;if(d.dw())return b;q=a.pp;r=0;$p=9;continue _;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AO8(){Bb.call(this);}
function BbK(a){var b=new AO8();AW9(b,a);return b;}
function AW9(a,b){Ds(a,b);a.eZ=1;}
function AC7(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACv(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bg5.b)return 0;c=new Gi;j=e+0.5;k=f+0.5;l=g+0.5;FC(c,d);c.Bp=J(Cd,36);c.iT=0;c.kC=0;c.oN=1;c.kO=0;c.mF=1;D2(c,0.9800000190734863,0.699999988079071);c.c4=c.eO/2.0;c.i$=0;CT(c,j,k+c.c4,l);c.g=0.0;c.i=0.0;c.h=0.0;c.bS=j;c.cS=k;c.bR
=l;$p=2;case 2:AOg(d,c);if(C()){break _;}b.p=b.p-1|0;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ARc(){Bb.call(this);}
function BcV(a){var b=new ARc();AWy(b,a);return b;}
function AWy(a,b){Ds(a,b);a.eZ=1;a.ff=64;}
function AGw(a,b,c){var d;if(c instanceof IC){d=c;if(!d.qy){d.qy=1;b.p=b.p-1|0;}}}
function AWk(a,b,c){AGw(a,b,c);}
function N2(){}
function AGg(){var a=this;D.call(a);a.d3=Long_ZERO;a.eU=Long_ZERO;}
function A9Q(){var a=new AGg();A0c(a);return a;}
function A0c(a){a.d3=Long_fromInt(1);a.eU=Long_ZERO;}
function ASV(a,b){a.d3=Long_and(b,Long_fromInt(65535));a.eU=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AZu(a){a.d3=Long_fromInt(1);a.eU=Long_ZERO;}
function AT1(a){return Long_or(Long_shl(a.eU,16),a.d3);}
function A8e(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.d3=Long_add(a.d3,Long_fromInt(b[c]&255));a.eU=Long_add(a.eU,a.d3);a.d3=Long_rem(a.d3,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.d3;d=c+1|0;a.d3=Long_add(j,Long_fromInt(i[c]&255));a.eU=Long_add(a.eU,a.d3);h=e;c=d;}a.d3=Long_rem(a.d3,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.d3;e=c+1|0;a.d3=Long_add(j,Long_fromInt(i[c]&255));a.eU=Long_add(a.eU,a.d3);f=d;c=e;}a.d3=Long_rem(a.d3,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));}
function Sc(){BE.call(this);}
function BiT(){var a=new Sc();A6C(a);return a;}
function A6C(a){O(a);}
function Nq(){D.call(this);this.GD=null;}
var Bgk=null;var BiU=null;function AVz(a){var b=new Nq();AH3(b,a);return b;}
function AH3(a,b){a.GD=b;}
function ASl(){Bgk=AVz(B(281));BiU=AVz(B(282));}
function J1(){}
function LL(){var a=this;D.call(a);a.ge=null;a.e6=null;}
function A4Y(a,b){var c,d;if(a===b)return 1;if(!Sl(b,J1))return 0;a:{b:{c:{c=b;if(a.ge===null){if(c.ge!==null)break c;}else if(!a.ge.eo(c.ge))break c;if(a.e6===null){if(c.e6!==null)break c;break b;}if(a.e6.eo(c.e6))break b;}d=0;break a;}d=1;}return d;}
function AWR(a){return a.ge;}
function A2e(a){return a.e6;}
function A1U(a){return (a.ge===null?0:a.ge.fk())^(a.e6===null?0:a.e6.fk());}
function IF(){var a=this;LL.call(a);a.pU=0;a.eE=null;}
function BO(){B6.call(this);}
function BiV(){var a=new BO();AUu(a);return a;}
function AUu(a){O(a);}
function IY(){BO.call(this);}
function BiW(){var a=new IY();A0V(a);return a;}
function A0V(a){O(a);}
function GH(){}
function Wx(){D.call(this);this.zQ=null;}
function AI1(a){var b,c,d,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.zQ;try{Bfl=Bfl+1|0;Fv(b);$p=1;continue _;}catch($$e){$$je=Bh($$e);c=$$je;}d=b.mT;$p=2;continue _;case 1:a:{try{b.ks();if(C()){break _;}}catch($$e){$$je=Bh($$e);c=$$je;break a;}c=b.mT;$p=3;continue _;}d=b.mT;$p=2;case 2:AD1(d);if(C()){break _;}a:{try{Xe(b.mT);NU(d);break a;}catch($$e){$$je=Bh($$e);b=$$je;}NU(d);M(b);}b.wC=0;Bfl=Bfl-1|0;Fv(Bfj);M(c);case 3:AD1(c);if
(C()){break _;}a:{try{Xe(b.mT);NU(c);break a;}catch($$e){$$je=Bh($$e);b=$$je;}NU(c);M(b);}b.wC=0;Bfl=Bfl-1|0;Fv(Bfj);return;default:E$();}}C3().s(a,b,c,d,$p);}
function FG(){B1.call(this);}
function BiX(){var a=new FG();AW4(a);return a;}
function AW4(a){O(a);}
function ER(){var a=this;D.call(a);a.hS=null;a.vw=0.0;a.vx=0.0;}
function G5(a,b,c,d,e){var f=new ER();ASI(f,a,b,c,d,e);return f;}
function ASI(a,b,c,d,e,f){a.hS=Wr(b,c,d);a.vw=e;a.vx=f;}
function I$(a,b,c){var d;d=new ER;d.hS=a.hS;d.vw=b;d.vx=c;return d;}
function Fy(){var a=this;D.call(a);a.hA=null;a.EY=0;}
function BiY(a,b,c,d,e){var f=new Fy();Hj(f,a,b,c,d,e);return f;}
function Hj(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.EY=0;a.hA=b;a.EY=g.length;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=I$(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=I$(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=I$(h,k,l);g[3]=I$(g[3],i,l);}
function ACU(a){var b,c,d;b=J(ER,a.hA.data.length);c=b.data;d=0;while(d<a.hA.data.length){c[d]=a.hA.data[(a.hA.data.length-d|0)-1|0];d=d+1|0;}a.hA=b;}
function APB(a,b,c){var d,e,f,g;d=P_(a.hA.data[1].hS,a.hA.data[0].hS);e=CD(ABR(P_(a.hA.data[1].hS,a.hA.data[2].hS),d));Bz(b);Cj(e.x,e.z,e.w);f=0;while(f<4){g=a.hA.data[f];G(b,g.hS.x*c,g.hS.z*c,g.hS.w*c,g.vw,g.vx);f=f+1|0;}Br(b);}
function LJ(){var a=this;D.call(a);a.bP=0;a.ou=0;a.rS=Long_ZERO;a.bv=Long_ZERO;a.oE=0;a.d0=0;a.xX=0;a.iC=null;a.E=null;a.eM=0;a.iI=0;a.xJ=null;a.cJ=null;a.fX=null;}
var BiZ=null;function AFH(a){var b;if(a.E===null)return (-2);b=a.E;a.E.nt=Long_ZERO;b.G=Long_ZERO;a.E.b9=null;a.bP=14;a.iI=(-1);JE(a.iC);return 0;}
function AFN(a){if(a.iC!==null)SV(a.iC);return 0;}
function XA(a,b){var c,d,e,f;a.E.b9=null;a.iC=null;a.d0=0;if(b<0)b= -b;else if(b&1073741824){a.d0=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.d0=4;b=b&15;}else{a.d0=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.iC!==null&&a.xX!=b){SV(a.iC);a.iC=null;}a.xX=b;c=new KD;d=a.E;b=1<<b;c.se=$rt_createIntArray(1);c.oD=$rt_createIntArray(1);c.m2=$rt_createIntArray(1);c.m0=$rt_createIntArray(1);c.vM=J($rt_arraycls($rt_intcls()),1);c.vN=J($rt_arraycls($rt_intcls()),1);c.va=$rt_createIntArray(1);c.vh=$rt_createIntArray(1);c.w6
=Baw();c.y=d;e=new LB;f=c.y;e.k5=0;e.bd=f;e.C=c;c.pF=e;c.km=$rt_createIntArray(4320);c.c0=$rt_createByteArray(b);c.cQ=b;c.rk=d.jx.d0?1:0;c.dM=0;JE(c);a.iC=c;AFH(a);return 0;}AFN(a);return (-2);}
function AGA(a,b){var c,d,e,f,g,h,i,$$je;if(a.E!==null&&a.E.cg!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bP){case 6:a.bP=13;a.E.b9=B(283);a.oE=0;return (-2);case 7:d=Zn(a.iC,d);if(d==(-3)){a.bP=13;a.oE=0;continue i;}if(!d)d=c;if(d!=1)break i;a.rS=a.E.f_.yA();JE(a.iC);if(!a.d0){a.bP=12;d=c;continue i;}a.bP=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=F9(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof DZ)
{e=$$je;return e.hJ;}else{throw $$e;}}a.eM=a.bv.lo&65535;if((a.eM&255)!=8){a.E.b9=B(284);a.bP=13;continue i;}if(a.eM&57344){a.E.b9=B(285);a.bP=13;continue i;}if(a.eM&512)Im(a,2,a.bv);a.bP=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.E.N)return d;e=a.E;e.N=e.N
-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cg.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bP=9;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cg.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bP=10;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cg.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bP=11;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cg.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.eM)a.bv=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bv,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bv,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.rS.lo!=
a.bv.lo)a.E.b9=B(286);else if(a.eM&&a.cJ!==null)a.cJ.Hx=a.bv;a.bP=15;d=c;}if(!(a.d0&&a.eM)){if(a.E.b9===null)break f;if(!DC(a.E.b9,B(286)))break f;a.bP=13;a.oE=5;continue i;}try{d=F9(a,4,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof DZ){e=$$je;return e.hJ;}else{throw $$e;}}if(a.E.b9!==null&&DC(a.E.b9,B(286))){a.bP=13;a.oE=5;continue i;}if(Long_eq(a.bv,Long_and(a.E.nt,new Long(4294967295, 0)))){a.E.b9=null;break f;}a.E.b9=B(287);a.bP=13;continue i;}if(!a.d0){a.bP=7;continue i;}try{d=F9(a,2,d,c);}catch($$e)
{$$je=Bh($$e);if($$je instanceof DZ){e=$$je;return e.hJ;}else{throw $$e;}}if(!(a.d0!=4&&!(a.d0&2))&&Long_eq(a.bv,Long_fromInt(35615))){if(a.d0==4)a.d0=2;a.E.f_=AWh();Im(a,2,a.bv);if(a.cJ===null)a.cJ=Bcm();a.bP=23;continue i;}if(a.d0&2){a.bP=13;a.E.b9=B(288);continue i;}a.eM=0;a.ou=a.bv.lo&255;h=Long_shr(a.bv,8).lo&255;if(!(a.d0&1&&!(((a.ou<<8)+h|0)%31|0))&&(a.ou&15)!=8){if(a.d0!=4){a.bP=13;a.E.b9=B(288);continue i;}e=a.E;e.A=e.A-2|0;e=a.E;e.N=e.N+2|0;e=a.E;e.G=Long_sub(e.G,Long_fromInt(2));a.d0=0;a.bP=7;continue i;}if
((a.ou&15)!=8){a.bP=13;a.E.b9=B(284);continue i;}if(a.d0==4)a.d0=1;if(((a.ou>>4)+8|0)>a.xX){a.bP=13;a.E.b9=B(289);continue i;}a.E.f_=A9Q();if(h&32){a.bP=2;break d;}a.bP=7;continue i;}break m;}try{d=F9(a,4,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof DZ){e=$$je;return e.hJ;}else{throw $$e;}}if(a.cJ!==null)a.cJ.HQ=a.bv;if(a.eM&512)Im(a,4,a.bv);a.bP=17;}try{d=F9(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof DZ){e=$$je;return e.hJ;}else{throw $$e;}}if(a.cJ!==null){a.cJ.I3=a.bv.lo&255;a.cJ.A8=a.bv.lo>>
8&255;}if(a.eM&512)Im(a,2,a.bv);a.bP=18;}if(a.eM&1024){try{d=F9(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof DZ){e=$$je;return e.hJ;}else{throw $$e;}}if(a.cJ!==null)a.cJ.pq=$rt_createByteArray(a.bv.lo&65535);if(a.eM&512)Im(a,2,a.bv);}else if(a.cJ!==null)a.cJ.pq=null;a.bP=19;}if(a.eM&1024)x:{try{d=ANO(a,d,c);if(a.cJ===null)break x;f=If(a.fX);i=f.data;a.fX=null;b=i.length;if(b!=a.cJ.pq.data.length){a.E.b9=B(290);a.bP=13;continue i;}Di(f,0,a.cJ.pq,0,b);break x;}catch($$e){$$je=Bh($$e);if($$je instanceof DZ)
{e=$$je;return e.hJ;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.pq=null;a.bP=20;}y:{if(a.eM&2048){z:{try{d=PJ(a,d,c);if(a.cJ===null)break z;a.cJ.yO=If(a.fX);break z;}catch($$e){$$je=Bh($$e);if($$je instanceof DZ){e=$$je;break h;}else{throw $$e;}}}try{a.fX=null;break y;}catch($$e){$$je=Bh($$e);if($$je instanceof DZ){e=$$je;break h;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.yO=null;}a.bP=21;}ba:{if(a.eM&4096){bb:{try{d=PJ(a,d,c);if(a.cJ===null)break bb;a.cJ.Ay=If(a.fX);break bb;}catch($$e){$$je=Bh($$e);if($$je instanceof DZ)
{e=$$je;break g;}else{throw $$e;}}}try{a.fX=null;break ba;}catch($$e){$$je=Bh($$e);if($$je instanceof DZ){e=$$je;break g;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.Ay=null;}a.bP=22;}if(a.eM&512){try{d=F9(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof DZ){e=$$je;return e.hJ;}else{throw $$e;}}if(a.cJ!==null)a.cJ.JQ=Long_and(a.bv,Long_fromInt(65535)).lo;if(Long_ne(a.bv,Long_and(a.E.f_.yA(),Long_fromInt(65535)))){a.bP=13;a.E.b9=B(291);a.oE=5;continue;}}a.E.f_=AWh();a.bP=7;}return d;}return e.hJ;}return e.hJ;}a.bP
=12;}return 1;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cg.data;e=a.E;d=e.A;e.A=d+1|0;a.bv=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bP=3;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cg.data;e=a.E;d=e.A;e.A=d+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bP=4;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cg.data;e
=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bP=5;}if(!a.E.N)return c;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cg.data;e=a.E;b=e.A;e.A=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.E.f_.EZ(a.bv);a.bP=6;return 2;}if(b==4&&a.bP==14)return 0;return (-2);}
function F9(a,b,c,d){var e,f,g,h;if(a.iI==(-1)){a.iI=b;a.bv=Long_ZERO;}while(true){if(a.iI<=0){if(b==2)a.bv=Long_and(a.bv,Long_fromInt(65535));else if(b==4)a.bv=Long_and(a.bv,new Long(4294967295, 0));a.iI=(-1);return c;}if(!a.E.N)break;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.bv;g=a.E.cg.data;e=a.E;h=e.A;e.A=h+1|0;a.bv=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.iI|0)*8|0)));a.iI=a.iI-1|0;c=d;}M(AG6(a,c));}
function PJ(a,b,c){var d,e;if(a.fX===null)a.fX=A7y();while(true){if(!a.E.N)M(AG6(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));e=a.E.cg.data[a.E.A];if(e)Rs(a.fX,a.E.cg,a.E.A,1);a.E.f_.kK(a.E.cg,a.E.A,1);d=a.E;d.A=d.A+1|0;if(!e)break;b=c;}return c;}
function ANO(a,b,c){var d;if(a.fX===null)a.fX=A7y();while(Long_gt(a.bv,Long_ZERO)){if(!a.E.N)M(AG6(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));Rs(a.fX,a.E.cg,a.E.A,1);a.E.f_.kK(a.E.cg,a.E.A,1);d=a.E;d.A=d.A+1|0;a.bv=Long_sub(a.bv,Long_fromInt(1));b=c;}return b;}
function Im(a,b,c){var d;d=0;while(d<b){a.xJ.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.E.f_.kK(a.xJ,0,b);}
function AOH(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);BiZ=b;}
function PO(){E3.call(this);}
function Bi0(){var a=new PO();A6I(a);return a;}
function A6I(a){return;}
function A56(a,b){$rt_putStderr(b);}
function Kj(){var a=this;D.call(a);a.x=0.0;a.z=0.0;a.w=0.0;}
var Bi1=null;var BeK=0;function Wr(b,c,d){var e;e=new Kj;if(b===-0.0)b=0.0;if(c===-0.0)c=0.0;if(d===-0.0)d=0.0;e.x=b;e.z=c;e.w=d;return e;}
function BY(b,c,d){var e,f;if(BeK>=Bi1.s)U(Bi1,Wr(0.0,0.0,0.0));e=Bi1;f=BeK;BeK=f+1|0;e=Z(e,f);e.x=b;e.z=c;e.w=d;return e;}
function P_(a,b){return BY(b.x-a.x,b.z-a.z,b.w-a.w);}
function CD(a){var b;b=Ce(a.x*a.x+a.z*a.z+a.w*a.w);return b<1.0E-4?BY(0.0,0.0,0.0):BY(a.x/b,a.z/b,a.w/b);}
function ABR(a,b){return BY(a.z*b.w-a.w*b.z,a.w*b.x-a.x*b.w,a.x*b.z-a.z*b.x);}
function Dk(a,b,c,d){return BY(a.x+b,a.z+c,a.w+d);}
function DI(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return Ce(c*c+d*d+e*e);}
function Ez(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return c*c+d*d+e*e;}
function ABV(a,b,c,d){var e,f,g;e=b-a.x;f=c-a.z;g=d-a.w;return e*e+f*f+g*g;}
function HQ(a){return Ce(a.x*a.x+a.z*a.z+a.w*a.w);}
function KM(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(d*d<1.0000000116860974E-7)return null;g=(c-a.x)/d;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function JT(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(e*e<1.0000000116860974E-7)return null;g=(c-a.z)/e;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function Kw(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(f*f<1.0000000116860974E-7)return null;g=(c-a.w)/f;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function AQa(){Bi1=Ci();BeK=0;}
function AMm(){D.call(this);}
function Bi2(){var a=new AMm();ATy(a);return a;}
function ATy(a){return;}
function Gt(b){return Math.sin(b);}
function GG(b){return Math.cos(b);}
function Ir(b){return Math.atan(b);}
function A3R(b){return Math.log(b);}
function Ee(b){return Math.sqrt(b);}
function Nc(b){return Math.ceil(b);}
function A2M(b,c){return Math.pow(b,c);}
function CR(b,c){return Math.atan2(b,c);}
function BP(){return A2o();}
function A2o(){return Math.random();}
function CB(b,c){if(b<c)c=b;return c;}
function DE(b,c){if(b>c)c=b;return c;}
function Ie(b){if(b<=0)b= -b;return b;}
function HY(b){if(b<=0.0)b= -b;return b;}
function Jf(){D.call(this);this.GV=null;}
var Bi3=null;var Bf5=null;var BiG=null;function AGN(a){var b=new Jf();APF(b,a);return b;}
function APF(a,b){a.GV=b;}
function AC6(){Bi3=AGN(B(292));Bf5=AGN(B(293));BiG=AGN(B(294));}
function Ls(){LV.call(this);}
function Xn(a){return a.yy;}
function ABM(){var a=this;Ls.call(a);a.yy=0;a.yd=0;a.mj=null;}
function AZF(a,b,c,d,e,f){var g=new ABM();A2C(g,a,b,c,d,e,f);return g;}
function A2C(a,b,c,d,e,f,g){KO(a,c);a.bk=e;a.cy=f;a.yd=b;a.yy=g;a.mj=d;}
function AON(a,b){return a.mj.data[b+a.yd|0];}
function Vu(a,b,c){a.mj.data[b+a.yd|0]=c;}
function AYY(a){return 1;}
function AWe(a){return a.mj;}
function A13(a){return a.yy;}
function LR(){var a=this;D.call(a);a.Hw=null;a.uC=null;a.Gz=0.0;a.BM=0.0;a.vv=null;a.uP=null;a.m5=0;}
function ACQ(a,b){var c;if(b!==null){a.vv=b;return a;}c=new Cb;Bl(c,B(295));M(c);}
function A17(a,b){return;}
function AGT(a,b){var c;if(b!==null){a.uP=b;return a;}c=new Cb;Bl(c,B(295));M(c);}
function A6y(a,b){return;}
function AJb(a,b,c,d){var e,f,g,h,$$je;a:{if(a.m5!=3){if(d)break a;if(a.m5!=2)break a;}b=new D3;O(b);M(b);}a.m5=!d?1:2;while(true){try{e=Y3(a,b,c);}catch($$e){$$je=Bh($$e);if($$je instanceof B6){f=$$je;M(A4Z(f));}else{throw $$e;}}if(JA(e)){if(!d)return e;g=Ct(b);if(g<=0)return e;e=Fh(g);}else if(IS(e))break;h=!Mv(e)?a.vv:a.uP;b:{if(h!==Bf5){if(h===Bi3)break b;else return e;}if(Ct(c)<a.uC.data.length)return Bi4;UL(c,a.uC);}EO(b,b.bk+Ly(e)|0);}return e;}
function XZ(a,b){var c;if(a.m5!=2&&a.m5!=4){b=new D3;O(b);M(b);}c=Bi5;if(c===Bi5)a.m5=3;return c;}
function A7q(a,b){return Bi5;}
function N$(){var a=this;D.call(a);a.nw=0;a.qH=0;}
var Bi5=null;var Bi4=null;function Zg(a,b){var c=new N$();AKg(c,a,b);return c;}
function AKg(a,b,c){a.nw=b;a.qH=c;}
function JA(a){return a.nw?0:1;}
function IS(a){return a.nw!=1?0:1;}
function NA(a){return !Qc(a)&&!Mv(a)?0:1;}
function Qc(a){return a.nw!=2?0:1;}
function Mv(a){return a.nw!=3?0:1;}
function Ly(a){var b;if(NA(a))return a.qH;b=new Jn;O(b);M(b);}
function Fh(b){return Zg(2,b);}
function R6(a){var b,c;switch(a.nw){case 0:b=new P3;O(b);M(b);case 1:b=new SI;O(b);M(b);case 2:b=new RX;c=a.qH;O(b);b.Bu=c;M(b);case 3:b=new PZ;c=a.qH;O(b);b.EL=c;M(b);default:}}
function AKO(){Bi5=Zg(0,0);Bi4=Zg(1,0);}
function Z8(){D.call(this);}
function A9W(){return {};}
function PP(){}
function YC(){D.call(this);}
function KD(){var a=this;D.call(a);a.dM=0;a.pK=0;a.p$=0;a.f4=0;a.fB=null;a.se=null;a.oD=null;a.m2=null;a.m0=null;a.vM=null;a.vN=null;a.va=null;a.vh=null;a.pF=null;a.tq=0;a.bK=0;a.bJ=0;a.km=null;a.c0=null;a.cQ=0;a.bV=0;a.bl=0;a.rk=0;a.w6=null;a.y=null;}
var Bi6=null;var Bi7=null;function JE(a){a.dM=0;a.bK=0;a.bJ=0;a.bl=0;a.bV=0;if(a.rk)a.y.f_.l3();}
function Zn(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.y.A;d=a.y.N;e=a.bJ;f=a.bK;g=a.bl;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.dM){case 2:break f;case 9:a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cg.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.p$=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.fB!==null&&a.fB.data.length>=k))a.fB=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.fB.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.f4=0;a.dM=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,(-2));}while(f<32){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cg.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.dM=9;a.y.b9=B(296);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,(-3));}a.pK=l;f=0;a.dM=a.pK?2:!a.tq?0:7;e=f;continue e;}while(f<3){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cg.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.tq=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.dM=1;break l;case 1:AEi(a.m2,a.m0,a.vM,a.vN,a.y);W4(a.pF,a.m2.data[0],a.m0.data[0],a.vM.data[0],0,a.vN.data[0],0);e=e>>>3;f=f+(-3)|0;a.dM=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.dM=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.dM=9;a.y.b9=B(297);a.bJ=b;a.bK=k;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,(-3));default:}}continue e;}while(a.f4<(4+(a.p$>>>10)|0)){while(f<3){if(!d){a.bJ=e;a.bK
=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cg.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.fB.data;j=Bi7.data;k=a.f4;a.f4=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.f4<19){o=a.fB.data;j=Bi7.data;k=a.f4;a.f4=k+1|0;o[j[k]]=0;}a.se.data[0]=7;k=APZ(a.w6,a.fB,a.se,a.oD,a.km,a.y);if(k){if(k==(-3)){a.fB=null;a.dM=9;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,k);}a.f4=0;a.dM=5;}while(true)
{k=a.p$;if(a.f4>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.se.data[0];while(f<k){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cg.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.km.data[((a.oD.data[0]+(e&Bi6.data[k])|0)*3|0)+1|0];n=a.km.data[((a.oD.data[0]+(e&Bi6.data[k])|0)*3|0)+2|0];l=R(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.fB.data;k=a.f4;a.f4=k+1|0;j[k]=n;}else{p=R(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bJ=e;a.bK=
f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cg.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&Bi6.data[q])|0;e=n>>>q;f=k-q|0;h=a.f4;q=a.p$;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.fB.data[h-1|0];while(true){j=a.fB.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.f4=l;}}a.oD.data[0]=(-1);a.m2.data[0]=9;a.m0.data[0]=6;k=a.p$;k=YF(a.w6,257+(k&31)|0,1+(k>>5&31)|0,a.fB,a.m2,a.m0,a.va,a.vh,a.km,
a.y);if(k){if(k==(-3)){a.fB=null;a.dM=9;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,k);}W4(a.pF,a.m2.data[0],a.m0.data[0],a.km,a.va.data[0],a.km,a.vh.data[0]);a.dM=6;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;b=ABA(a.pF,b);if(b!=1)break e;b=0;AAM(a.pF,a.y);c=a.y.A;d=a.y.N;e=a.bJ;f=a.bK;g=a.bl;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;if(a.tq){a.dM=7;break b;}a.dM=0;continue e;}if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,b);}if(!h){if(g==a.cQ&&a.bV){g=0;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;}if(!h){a.bl=g;b=B5(a,b);g=a.bl;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;if(g==a.cQ&&a.bV){g=0;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;}if(!h){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,b);}}}b=0;k=a.pK;if(k>d)k=d;if(k>h)k=h;Di(a.y.cg,c,a.c0,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.pK-k|0;a.pK=k;if(k)continue;a.dM=!a.tq?0:7;}return B5(a,b);}a.dM=9;a.y.b9
=B(298);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,(-3));}a.fB=null;a.dM=9;a.y.b9=B(299);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,(-3));}a.bl=g;b=B5(a,b);g=a.bl;if(a.bV!=a.bl){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,b);}a.dM=8;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.A|0));a.y.A=c;a.bl=g;return B5(a,1);}
function SV(a){JE(a);a.c0=null;a.km=null;}
function B5(a,b){var c,d,e,f,g;c=a.y.pN;d=a.bV;e=(d>a.bl?a.cQ:a.bl)-d|0;if(e>a.y.ic)e=a.y.ic;if(e&&b==(-5))b=0;f=a.y;f.ic=f.ic-e|0;f=a.y;f.nt=Long_add(f.nt,Long_fromInt(e));if(a.rk&&e>0)a.y.f_.kK(a.c0,d,e);Di(a.c0,d,a.y.uX,c,e);c=c+e|0;g=d+e|0;if(g==a.cQ){if(a.bl==a.cQ)a.bl=0;d=a.bl-0|0;if(d>a.y.ic)d=a.y.ic;if(d&&b==(-5))b=0;f=a.y;f.ic=f.ic-d|0;f=a.y;f.nt=Long_add(f.nt,Long_fromInt(d));if(a.rk&&d>0)a.y.f_.kK(a.c0,0,d);Di(a.c0,0,a.y.uX,c,d);c=c+d|0;g=0+d|0;}a.y.pN=c;a.bV=g;return b;}
function AH1(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bi6=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;Bi7=b;}
function NE(){LR.call(this);}
function Y3(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fl(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);O2(b,d,k,g-k|0);f=0;}if(!Fl(c)){l=!Fl(b)&&f>=g?Bi5:Bi4;break a;}k=CB(Ct(c),i.length);m=new Tw;m.yT=b;m.Dg=c;l=ACy(a,d,f,g,h,0,k,m);f=m.vJ;if(l===null&&0==m.rM)l=Bi5;WW(c,h,0,m.rM);if(l!==null)break;}}EO(b,b.bk-(g-f|0)|0);return l;}
function PQ(){NE.call(this);}
function ACy(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(N9(h,2))break a;i=Bi4;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Or(l)){if((f+3|0)>g){j=j+(-1)|0;if(N9(h,3))break a;i=Bi4;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Dt(l)){i=Fh(1);break a;}if
(j>=d){if(AAx(h))break a;i=Bi5;break a;}c=j+1|0;j=k[j];if(!DS(j)){j=c+(-2)|0;i=Fh(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(N9(h,4))break a;i=Bi4;break a;}k=e.data;n=EJ(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vJ=j;h.rM=f;return i;}
function AOo(){D.call(this);}
function Bi8(){var a=new AOo();A2N(a);return a;}
function A2N(a){return;}
function APf(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Bhd());}return b.data.length;}
function AEG(b,c){if(b===null){b=new EF;O(b);M(b);}if(b===F($rt_voidcls())){b=new Cb;O(b);M(b);}if(c>=0)return A1P(b.fY,c);b=new Xt;O(b);M(b);}
function A1P(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Gd(){var a=this;D.call(a);a.j0=null;a.j8=null;a.eR=null;a.fK=null;a.lm=null;a.io=null;}
var Bi9=null;var Bi$=null;var Bi_=null;var Bja=null;var Bjb=null;var Bjc=null;function Baw(){var a=new Gd();AHD(a);return a;}
function AHD(a){a.j0=null;a.j8=null;a.eR=null;a.fK=null;a.lm=null;a.io=null;}
function NH(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eR.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eR.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eR.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eR.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m=s;while(true){if(m>=t){v=u-a.eR.data[t]|0;if(v<0)return (-3);b=a.eR.data;b[t]
=b[t]+v|0;b=a.io.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.io.data;u=u+a.eR.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.io.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.io.data[t];b=a.io.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.lm.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eR.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c
=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eR.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eR.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.lm.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.io.data[y]=m;a.fK.data[0]=bc<<24>>24;a.fK.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.fK.data;b=a.lm.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;Di(a.fK,0,j,(a.lm.data[q]+c|0)*3|0,3);z=be;}b=a.fK.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.fK.data[0]=192;else{p=l.data;if
(p[w]>=e){i=g.data;o=f.data;a.fK.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.fK.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.fK;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.fK.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){Di(a.fK,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.io.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eR.data[m]|0;if(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function APZ(a,b,c,d,e,f){var g;M1(a,19);a.j0.data[0]=0;g=NH(a,b,0,19,19,null,null,d,c,e,a.j0,a.j8);if(g==(-3))f.b9=B(300);else if(!(g!=(-5)&&c.data[0])){f.b9=B(301);g=(-3);}return g;}
function YF(a,b,c,d,e,f,g,h,i,j){var k;M1(a,288);a.j0.data[0]=0;k=NH(a,d,0,b,257,Bi_,Bja,g,e,i,a.j0,a.j8);if(!k&&e.data[0]){M1(a,288);c=NH(a,d,b,c,0,Bjb,Bjc,h,f,i,a.j0,a.j8);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.b9=B(302);else if(c==(-5)){j.b9=B(303);c=(-3);}else if(c!=(-4)){j.b9=B(304);c=(-3);}return c;}if(k==(-3))j.b9=B(305);else if(k!=(-4)){j.b9=B(306);k=(-3);}return k;}
function AEi(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=Bi9;e[0]=Bi$;return 0;}
function M1(a,b){var c;if(a.j0===null){a.j0=$rt_createIntArray(1);a.j8=$rt_createIntArray(b);a.eR=$rt_createIntArray(16);a.fK=$rt_createIntArray(3);a.lm=$rt_createIntArray(15);a.io=$rt_createIntArray(16);}if(a.j8.data.length<b)a.j8=$rt_createIntArray(b);c=0;while(c<b){a.j8.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eR.data[c]=0;c=c+1|0;}c=0;while(c<3){a.fK.data[c]=0;c=c+1|0;}Di(a.eR,0,a.lm,0,15);Di(a.eR,0,a.io,0,16);}
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
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;Bi9=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;Bi$=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;Bi_=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;Bja=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;Bjb=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;Bjc=b;}
function LB(){var a=this;D.call(a);a.fe=0;a.lW=0;a.fF=null;a.k5=0;a.mf=0;a.y$=0;a.sE=0;a.q2=0;a.uQ=0;a.uz=0;a.yF=null;a.v2=0;a.yg=null;a.v9=0;a.bd=null;a.C=null;}
var Bjd=null;function W4(a,b,c,d,e,f,g){a.fe=0;a.uQ=b<<24>>24;a.uz=c<<24>>24;a.yF=d;a.v2=e;a.yg=f;a.v9=g;a.fF=null;}
function ABA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.bd.A;d=a.bd.N;e=a.C.bJ;f=a.C.bK;g=a.C.bl;h=g>=a.C.bV?a.C.cQ-g|0:(a.C.bV-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.fe){case 0:break f;case 2:i=a.sE;while(f<i){if(!d){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bd.cg.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.lW=a.lW+(e&Bjd.data[i])|0;e=e>>i;f=f-i|0;a.mf=a.uz;a.fF=a.yg;a.k5=a.v9;a.fe=3;break g;case 4:i=a.sE;while
(f<i){if(!d){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bd.cg.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.q2=a.q2+(e&Bjd.data[i])|0;e=e>>i;f=f-i|0;a.fe=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.C.bl=g;b=B5(a.C,b);g=a.C.bl;if(a.C.bV!=a.C.bl){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,b);}a.fe=8;break a;case 9:a.C.bJ=e;a.C.bK
=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,(-2));}}l=a.mf;while(f<l){if(!d){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bd.cg.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.k5+(e&Bjd.data[l])
|0)*3|0;k=a.fF.data;i=m+1|0;e=e>>k[i];f=f-a.fF.data[i]|0;l=a.fF.data[m];if(l&16){a.sE=l&15;a.q2=a.fF.data[m+2|0];a.fe=4;continue b;}if(l&64){a.fe=9;a.bd.b9=B(307);a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,(-3));}a.mf=l;a.k5=(m/3|0)+a.fF.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;b=AM1(a,a.uQ,a.uz,a.yF,a.v2,a.yg,a.v9,a.C,a.bd);c=a.bd.A;d=a.bd.N;e=a.C.bJ;f
=a.C.bK;g=a.C.bl;h=g>=a.C.bV?a.C.cQ-g|0:(a.C.bV-g|0)-1|0;if(b){a.fe=b!=1?9:7;continue b;}}a.mf=a.uQ;a.fF=a.yF;a.k5=a.v2;a.fe=1;}l=a.mf;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.bd.cg.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.k5+(e&Bjd.data[l])|0)*3|0;k=a.fF.data;i=m+1|0;e=e>>>k[i];f=f-a.fF.data[i]|0;n=a.fF.data[m];if(!n){a.y$=a.fF.data[m+2|0];a.fe=6;continue b;}if(n&16){a.sE=n&15;a.lW=a.fF.data[m+2|0];a.fe=2;continue b;}if(!(n&64)){a.mf=n;a.k5=(m/3|0)+a.fF.data[m+2|0]|0;continue b;}if(!(n&32)){a.fe
=9;a.bd.b9=B(308);a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,(-3));}a.fe=7;continue b;}if(h)i=g;else{if(g!=a.C.cQ)i=g;else if(!a.C.bV)i=g;else{i=0;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;}if(!h){a.C.bl=i;b=B5(a.C,b);i=a.C.bl;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;if(i==a.C.cQ&&a.C.bV){i=0;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;}if(!h){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=i;return B5(a.C,
b);}}}b=0;k=a.C.c0.data;g=i+1|0;k[i]=a.y$<<24>>24;h=h+(-1)|0;a.fe=0;continue b;}i=g-a.q2|0;while(i<0){i=i+a.C.cQ|0;}while(a.lW){if(h)l=g;else{if(g!=a.C.cQ)l=g;else if(!a.C.bV)l=g;else{l=0;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;}if(!h){a.C.bl=l;b=B5(a.C,b);l=a.C.bl;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;if(l==a.C.cQ&&a.C.bV){l=0;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;}if(!h){a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=l;return B5(a.C,b);}}}o=a.C.c0.data;g=l
+1|0;k=a.C.c0.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m==a.C.cQ?0:m;a.lW=a.lW-1|0;}a.fe=0;}a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,b);}a.C.bJ=e;a.C.bK=f;a.bd.N=d;j=a.bd;j.G=Long_add(j.G,Long_fromInt(c-a.bd.A|0));a.bd.A=c;a.C.bl=g;return B5(a.C,1);}
function AAM(a,b){return;}
function AM1(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.A;k=i.N;l=h.bJ;m=h.bK;n=h.bl;o=n>=h.bV?h.cQ-n|0:(h.bV-n|0)-1|0;p=Bjd.data[b];q=Bjd.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.cg.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.c0.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&Bjd.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.cg.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.b9=B(307);b=i.N-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bJ=w;h.bK=b;i.N=c;i.G=Long_add(i.G,Long_fromInt(e-i.A|0));i.A=e;h.bl=n;return (-3);}b=(b+r[x+2|0]|0)+(w&Bjd.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.cg.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&Bjd.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.c0.data;b=n+1|0;r=h.c0.data;c=w+1|0;s[n]=r[w];s=h.c0.data;n=b+1|0;r=h.c0.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{Di(h.c0,w,h.c0,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cQ|0;if(w>=0)break;}b=h.cQ-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.c0.data;n=c+1|0;r=h.c0.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{Di(h.c0,w,h.c0,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.c0.data;c=n+1|0;r=h.c0.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}Di(h.c0,w,h.c0,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bJ=l;h.bK=e;i.N=b;i.G=Long_add(i.G,Long_fromInt(c-i.A|0));i.A=c;h.bl=n;return 1;}i.b9=B(308);v=i.N-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bJ=l;h.bK=c;i.N=e;i.G=Long_add(i.G,Long_fromInt(b-i.A|0));i.A=b;h.bl=n;return (-3);}t=(t+s[u+2|0]|0)+(l&Bjd.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.c0.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bJ=l;h.bK=g;i.N=b;i.G=Long_add(i.G,Long_fromInt(e-i.A|0));i.A=e;h.bl=c;return 0;}
function ABF(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bjd=b;}
function Hw(){B1.call(this);}
function Bje(){var a=new Hw();A_m(a);return a;}
function A_m(a){O(a);}
function Xt(){B6.call(this);}
function Bjf(){var a=new Xt();A8K(a);return a;}
function A8K(a){O(a);}
function AAX(){D.call(this);}
function A_x(a,b){return a.HG(b);}
function AUy(a){return a.I9();}
function Kk(){B6.call(this);}
function Bjg(){var a=new Kk();A7f(a);return a;}
function A7f(a){O(a);}
function ZU(){var a=this;D.call(a);a.hl=null;a.rj=null;a.eh=null;a.fh=0;}
function Bat(){var a=new ZU();A2B(a);return a;}
function A2B(a){a.eh=Bc2;}
function D3(){BE.call(this);}
function Bjh(){var a=new D3();A9S(a);return a;}
function A9S(a){O(a);}
function AIx(){D.call(this);}
function JI(b){return b.length?0:1;}
function AOS(b){return b.shift();}
function SQ(){D.call(this);this.Df=null;}
function AQ6(a){var b,c,d;b=a.Df;if(!HJ(b)&&b.cp.eh===null){c=b.cp;if(c.hl!==null&&!JI(c.hl)){b=c.hl;d=AOS(b);if(b===null)c.hl=null;Qo(d);}}}
function Q_(){var a=this;D.call(a);a.zE=null;a.zF=null;a.zC=0;a.zD=null;}
function Qo(a){var b,c,d,e;b=a.zE;c=a.zF;d=a.zC;e=a.zD;Fv(b);c.cp.eh=b;b=c.cp;b.fh=b.fh+d|0;CM(e,null);}
function G0(){B1.call(this);}
function Bji(){var a=new G0();AVa(a);return a;}
function AVa(a){O(a);}
function W0(){Fg.call(this);}
function Bjj(){var a=new W0();A1g(a);return a;}
function A1g(a){O(a);}
function E1(){BE.call(this);}
function Bjk(){var a=new E1();A7P(a);return a;}
function A7P(a){O(a);}
function Oi(){var a=this;D.call(a);a.HV=null;a.BT=0.0;a.F6=0.0;a.li=null;a.mY=null;a.rA=null;a.h3=0;}
function AQ0(a,b){var c;if(b!==null){a.mY=b;return a;}c=new Cb;Bl(c,B(309));M(c);}
function A$C(a,b){return;}
function ADH(a,b){var c;if(b!==null){a.rA=b;return a;}c=new Cb;Bl(c,B(309));M(c);}
function A6b(a,b){return;}
function UH(a,b,c,d){var e,f,$$je;if(!(a.h3==2&&!d)&&a.h3!=3){a.h3=d?2:1;while(true){try{e=AGh(a,b,c);}catch($$e){$$je=Bh($$e);if($$je instanceof B6){f=$$je;M(A4Z(f));}else{throw $$e;}}if(IS(e))return e;if(JA(e)){if(d&&Fl(b)){if(a.mY===BiG)return Fh(Ct(b));if(Ct(c)<=Bi(a.li))return Bi4;EO(b,b.bk+Ct(b)|0);if(a.mY===Bf5)Nl(c,a.li);}return e;}if(Qc(e)){if(a.mY===BiG)return e;if(a.mY===Bf5){if(Ct(c)<Bi(a.li))return Bi4;Nl(c,a.li);}EO(b,b.bk+Ly(e)|0);}else if(Mv(e)){if(a.rA===BiG)break;if(a.rA===Bf5){if(Ct(c)<Bi(a.li))return Bi4;Nl(c,
a.li);}EO(b,b.bk+Ly(e)|0);}}return e;}b=new D3;O(b);M(b);}
function ACd(a,b){if(a.h3!=3&&a.h3!=2){b=new D3;O(b);M(b);}a.h3=3;return Bi5;}
function ARr(a){a.h3=0;return a;}
function AJJ(a,b){var c,d;if(a.h3&&a.h3!=3){b=new D3;O(b);M(b);}if(!Ct(b))return AHj(0);if(a.h3)ARr(a);c=AHj(DE(8,Ct(b)*a.BT|0));while(true){d=UH(a,b,c,0);if(JA(d))break;if(IS(d))c=VA(a,c);if(!NA(d))continue;R6(d);}b=UH(a,b,c,1);if(NA(b))R6(b);while(!JA(ACd(a,c))){c=VA(a,c);}Gx(c);return c;}
function VA(a,b){var c,d,e;c=b.mj;d=O6(c,DE(8,c.data.length*2|0));e=AM3(d,0,d.data.length);EO(e,b.bk);return e;}
function AYD(a,b){return Bi5;}
function A5i(a){return;}
function Sg(){}
function Sq(){}
function Pg(){var a=this;D.call(a);a.wo=null;a.A6=null;a.Iq=0;a.Jo=0;}
function APk(a){if(!a.Iq){a.wo.CR=null;Fv(a.wo);CM(a.A6,null);}}
function LG(){Oi.call(this);}
function AGh(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fl(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);AKe(b,d,k,g-k|0);f=0;}if(!Fl(c)){l=!Fl(b)&&f>=g?Bi5:Bi4;break a;}k=CB(Ct(c),i.length);m=new Ws;m.Al=b;m.Ev=c;l=ARN(a,d,f,g,h,0,k,m);f=m.wb;if(l===null&&0==m.qI)l=Bi5;ASo(c,h,0,m.qI);if(l!==null)break;}}EO(b,b.bk-(g-f|0)|0);return l;}
function Rg(){LG.call(this);}
function ARN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NO(h))break a;i=Bi5;break a;}n=k+1|0;k=j[k];if(!Hq(a,k)){c=n+(-2)|0;i=Fh(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NO(h))break a;i=Bi5;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Hq(a,m))break b;if(!Hq(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(Or(p)){c=k+(-3)|0;i=Fh(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Fh(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NO(h))break a;i=Bi5;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AJm(h,2))break a;i=Bi4;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Hq(a,m))break c;if(!Hq(a,o))break c;if(!Hq(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=IE(q);m=c+1|0;j[c]=Ia(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=Fh(1);break a;}c=k+(-3)|0;i=Fh(1);}h.wb=
c;h.qI=f;return i;}
function Hq(a,b){return (b&192)!=128?0:1;}
function DZ(){var a=this;BE.call(a);a.hJ=0;a.IN=null;}
function AG6(a,b){var c=new DZ();AVb(c,a,b);return c;}
function AVb(a,b,c){a.IN=b;O(a);a.hJ=c;}
function ANv(){var a=this;D.call(a);a.Js=0;a.GM=0;a.HQ=Long_ZERO;a.I3=0;a.A8=0;a.pq=null;a.yO=null;a.Ay=null;a.JQ=0;a.Hx=Long_ZERO;a.GO=0;a.H_=Long_ZERO;}
function Bcm(){var a=new ANv();A8E(a);return a;}
function A8E(a){a.Js=0;a.GM=0;a.A8=255;a.GO=0;a.H_=Long_ZERO;}
function OT(){D.call(this);this.mk=0;}
var Bjl=null;function AWh(){var a=new OT();Zb(a);return a;}
function Zb(a){a.mk=0;}
function A2x(a,b,c,d){var e,f,g,h;e=a.mk^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=Bjl.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.mk=e^(-1);}
function A6p(a){a.mk=0;}
function A9R(a,b){a.mk=Long_and(b,new Long(4294967295, 0)).lo;}
function A7v(a){return Long_and(Long_fromInt(a.mk),new Long(4294967295, 0));}
function AFz(){var b,c,d;Bjl=null;Bjl=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}Bjl.data[b]=d;b=b+1|0;}}
function I9(){var a=this;D.call(a);a.R=0.0;a.M=0.0;a.S=0.0;a.V=0.0;a.U=0.0;a.W=0.0;}
var Bjm=null;var BeJ=0;function Nt(b,c,d,e,f,g){var h;h=new I9;h.R=b;h.M=c;h.S=d;h.V=e;h.U=f;h.W=g;return h;}
function D4(b,c,d,e,f,g){var h,i;if(BeJ>=Bjm.s)U(Bjm,Nt(0.0,0.0,0.0,0.0,0.0,0.0));h=Bjm;i=BeJ;BeJ=i+1|0;return M5(Z(h,i),b,c,d,e,f,g);}
function M5(a,b,c,d,e,f,g){a.R=b;a.M=c;a.S=d;a.V=e;a.U=f;a.W=g;return a;}
function Je(a,b,c,d){var e,f,g,h,i,j,k;e=a.R;f=a.M;g=a.S;h=a.V;i=a.U;j=a.W;k=R(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=R(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=R(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return D4(e,f,g,h,i,j);}
function Dv(a,b,c,d){return D4(a.R-b,a.M-c,a.S-d,a.V+b,a.U+c,a.W+d);}
function Ub(a,b,c,d){return D4(a.R+b,a.M+c,a.S+d,a.V+b,a.U+c,a.W+d);}
function Qu(a,b,c){var d,e;if(b.U>a.M&&b.M<a.U){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.V>a.R)d=c;else{d=a.R-b.V;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.R<a.V)e=d;else{e=a.V-b.R;if(e<=d)e=d;}return e;}return c;}return c;}
function V$(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.U>a.M)d=c;else{d=a.M-b.U;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.M<a.U)e=d;else{e=a.U-b.M;if(e<=d)e=d;}return e;}return c;}return c;}
function Ue(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.U>a.M&&b.M<a.U){if(c<=0.0)d=c;else if(b.W>a.S)d=c;else{d=a.S-b.W;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.S<a.W)e=d;else{e=a.W-b.S;if(e<=d)e=d;}return e;}return c;}return c;}
function L7(a,b){return b.V>a.R&&b.R<a.V?(b.U>a.M&&b.M<a.U?(b.W>a.S&&b.S<a.W?1:0):0):0;}
function F2(a,b,c,d){a.R=a.R+b;a.M=a.M+c;a.S=a.S+d;a.V=a.V+b;a.U=a.U+c;a.W=a.W+d;return a;}
function APU(a){return (a.V-a.R+a.U-a.M+a.W-a.S)/3.0;}
function Qd(a){return D4(a.R,a.M,a.S,a.V,a.U,a.W);}
function QR(a,b,c){var d,e,f,g,h,i,j,k;d=KM(b,c,a.R);e=KM(b,c,a.V);f=JT(b,c,a.M);g=JT(b,c,a.U);h=Kw(b,c,a.S);i=Kw(b,c,a.W);if(!RE(a,d))d=null;if(!RE(a,e))e=null;if(!Ug(a,f))f=null;if(!Ug(a,g))g=null;if(!UZ(a,h))h=null;if(!UZ(a,i))i=null;j=null;if(d!==null)j=d;if(e!==null&&!(j!==null&&Ez(b,e)>=Ez(b,j)))j=e;if(f!==null&&!(j!==null&&Ez(b,f)>=Ez(b,j)))j=f;if(g!==null&&!(j!==null&&Ez(b,g)>=Ez(b,j)))j=g;if(h!==null&&!(j!==null&&Ez(b,h)>=Ez(b,j)))j=h;if(i!==null&&!(j!==null&&Ez(b,i)>=Ez(b,j)))j=i;if(j===null)return null;k
=(-1);if(j===d)k=4;if(j===e)k=5;if(j===f)k=0;if(j===g)k=1;if(j===h)k=2;if(j===i)k=3;return A0z(0,0,0,k,j);}
function RE(a,b){return b===null?0:b.z>=a.M&&b.z<=a.U&&b.w>=a.S&&b.w<=a.W?1:0;}
function Ug(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.w>=a.S&&b.w<=a.W?1:0;}
function UZ(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.z>=a.M&&b.z<=a.U?1:0;}
function Xd(a,b){a.R=b.R;a.M=b.M;a.S=b.S;a.V=b.V;a.U=b.U;a.W=b.W;}
function AEr(){Bjm=Ci();BeJ=0;}
function Qh(){}
function Bu(){Bs.call(this);}
var Bjn=0;var Bgj=null;var Bjo=0;var Bjp=0;var Bjq=0;var Bjr=0.0;var Bjs=0;var Bjt=null;var Bju=0;var Bjv=0;var Bjw=0.0;var Bjx=0.0;var Bjy=0.0;var Bjz=0.0;var BjA=0.0;var BjB=0.0;var BjC=0.0;var BjD=0.0;var BjE=0.0;var BjF=0;var BfP=0.0;var BfQ=0.0;var BfR=0.0;var BfS=0.0;var BjG=0;var BjH=0;var BjI=0;var BjJ=0.0;var BjK=0.0;var BjL=0.0;var BjM=0;var BjN=0;var BjO=0;var BjP=0;var BjQ=null;var BjR=0;var BjS=null;var BjT=0;var BjU=null;var BjV=0;var BjW=null;var BjX=null;var Bgi=null;var BjY=null;var BjZ=null;var Bj0
=null;var Bj1=null;var Bj2=null;var Bj3=null;var Bgh=0;var Bj4=null;var Bj5=null;var Bj6=null;var Bj7=null;var Bj8=null;var Bj9=null;var Bj$=null;var Bj_=null;var Bka=null;var Bkb=null;var Bkc=null;var Bkd=null;var Bke=null;var Bkf=null;var Bkg=Long_ZERO;var Bkh=0;function BW(){BW=Bt(Bu);A1w();}
function Bki(){var a=new Bu();AO3(a);return a;}
function AO3(a){BW();VP(a);}
function Ba(b){BW();a:{switch(b){case 2884:K3(2884);break a;case 2896:Bjp=1;break a;case 2903:BjF=1;break a;case 2912:BjH=1;break a;case 2929:K3(2929);break a;case 3008:Bjq=1;break a;case 3042:K3(3042);break a;case 3553:Bjo=1;break a;case 32823:K3(32823);break a;case 32826:break;default:break a;}}}
function HK(b){var c;BW();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Bd();BdF.depthFunc(c);}
function Su(b,c){BW();Bjr=c;}
function C_(b){BW();BjP=b;}
function GO(){BW();switch(BjP){case 5888:break;case 5889:return BjS.data[BjT];case 5890:return BjU.data[BjV];default:}return BjQ.data[BjR];}
function C9(){BW();Fp(GO());}
function FP(b,c,d,e){BW();Bd();Bd2.data[0]=b;Bd2.data[1]=c;Bd2.data[2]=d;Bd2.data[3]=e;BdF.viewport(b,c,d,e);}
function D5(b){BW();Bd();BdF.clear(b);}
function Ip(b,c,d,e,f,g){var h,i,j,k;BW();h=GO();i=c-b;h.eu=2.0/i;h.es=0.0;h.et=0.0;h.er=0.0;h.ex=0.0;j=e-d;h.ey=2.0/j;h.ev=0.0;h.ew=0.0;h.eC=0.0;h.eA=0.0;k=g-f;h.eB=2.0/k;h.ez=0.0;h.gW= -(c+b)/i;h.gX= -(e+d)/j;h.gU=(g+f)/k;h.gV=1.0;}
function Bw(b,c,d){var e;BW();L3(BjZ,b,c,d);e=GO();U7(e,BjZ,e);if(!Bjs)return;e=new Cb;Bl(e,B(310));M(e);}
function HB(b,c,d,e){BW();Bd();BdF.clearColor(b,c,d,e);}
function Bc(b){BW();a:{switch(b){case 2884:J2(2884);break a;case 2896:Bjp=0;break a;case 2903:BjF=0;break a;case 2912:BjH=0;break a;case 2929:J2(2929);break a;case 3008:Bjq=0;break a;case 3042:J2(3042);break a;case 3553:Bjo=0;break a;case 32823:J2(32823);break a;case 32826:break;default:break a;}}}
function BU(b,c,d,e){BW();Bjw=b;Bjx=c;Bjy=d;Bjz=e;}
function Sy(b,c,d,e,f,g,h,i,j){var k,l,m,n;BW();Bd();if(j===null){k=BdF;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=Ct(j);k=Bd3;n=0;while(n<m){h=(ALL(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(Bd3.buffer,0,m);BdF.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function B3(){BW();a:{switch(BjP){case 5888:break;case 5889:if(BjT>=(BjS.data.length-1|0)){Cg(C$(),B(311));break a;}BjT=BjT+1|0;GR(BjS.data[BjT],BjS.data[BjT-1|0]);break a;case 5890:if(BjV>=(BjU.data.length-1|0)){Cg(C$(),B(312));break a;}BjV=BjV+1|0;GR(BjU.data[BjV],BjU.data[BjV-1|0]);break a;default:}if(BjR>=(BjQ.data.length-1|0))Cg(C$(),B(313));else{BjR=BjR+1|0;GR(BjQ.data[BjR],BjQ.data[BjR-1|0]);}}}
function Bv(b,c,d,e){var f;BW();L3(BjZ,c,d,e);f=GO();WY(f,b*0.01745329238474369,BjZ,f);if(!Bjs)return;f=new Cb;Bl(f,B(310));M(f);}
function BD(){BW();a:{switch(BjP){case 5888:break;case 5889:if(BjT<=0){Cg(C$(),B(314));break a;}BjT=BjT-1|0;break a;case 5890:if(BjV<=0){Cg(C$(),B(315));break a;}BjV=BjV-1|0;break a;default:}if(BjR<=0)Cg(C$(),B(316));else BjR=BjR-1|0;}}
function TP(b,c){BW();a:{switch(b){case 2982:break;case 2983:TR(BjS.data[BjT],c);break a;default:}TR(BjQ.data[BjR],c);}}
function CC(b,c,d){var e;BW();L3(BjZ,b,c,d);ZC(GO(),BjZ);if(!Bjs)return;e=new Cb;Bl(e,B(310));M(e);}
function Df(b,c){BW();BjI=b==1&&c==771?1:0;Bd();BdF.blendFunc(b,c);}
function Gw(b){BW();Bd();BdF.depthMask(!!b);}
function DO(b,c,d,e){BW();Bd();BdF.colorMask(!!b,!!c,!!d,!!e);}
function Cp(b,c){var d,e;BW();d=ANJ(Bgj,c);Bd();e=BdF;d=d!==null?d.BN:null;e.bindTexture(3553,d);}
function Ek(b,c,d){BW();if(!(d!=33071&&d!=10496))d=33071;Bd();BdF.texParameteri(b,c,d);}
function Cj(b,c,d){var e;BW();e=Ee(b*b+c*c+d*d);BjA=b/e;BjB=c/e;BjC=d/e;}
function Of(b){BW();BjX=b;RQ(b);}
function FU(b){var c;BW();if(!Bjs){c=CP(BjY,CY(b));if(c!==null&&c.jL>0){Rq(c.lQ|0|(BjF&&Bjp?8:0)|(!BjH?0:16)|(!Bjq?0:32)|(!Bjo?0:64));Of(c.ri);Pz(0,c.jL);BjN=BjN+((c.jL*6|0)/4|0)|0;BjO=BjO+(c.jL/2|0)|0;}}}
function FI(b,c){BW();if(!Bjs){Bjt=CP(Bgi,CY(b));if(Bjt!==null){Bjt.lQ=(-1);Bjt.jL=0;Bjs=1;}}}
function Ef(){var b,c,d,e;BW();if(Bjs){Bjs=0;Bd();b=Bey.buffer;c=Bex;d=new Int32Array(b,0,c);Bex=0;e=UF(d);if(e>0){if(Bjt.o0===null){BR(BjY,CY(Bjt.Bv),Bjt);Bjt.ri=O$();Bjt.o0=L8();b=O_(Bjt.lQ);Of(Bjt.ri);Hh(34962,Bjt.o0);Rz(b);}Hh(34962,Bjt.o0);PB(34962,d,35044);BjM=BjM+e|0;}}}
function F8(b,c,d){BW();Bjw=b;Bjx=c;Bjy=d;Bjz=1.0;}
function OH(b,c){BW();Bd();BdF.polygonOffset(b,c);}
function WU(b){BW();a:{switch(b){case 32886:break;case 32888:Bjv=1;break a;default:break a;}Bju=1;}}
function Tn(b){BW();a:{switch(b){case 32886:break;case 32888:Bjv=0;break a;default:break a;}Bju=0;}}
function P9(){BW();return 0|(!Bju?0:1)|(!Bjv?0:4);}
function Rq(b){var c;BW();c=O_(b);Bj4=c;AQW(c);if(Bjq)AIS(c,Bjr);ALK(c,Bjw,Bjx,Bjy,Bjz);if(BjH){ALm(c,(!BjI?0:2)+BjG|0);AP9(c,BfP,BfQ,BfR,BfS);AKI(c,BjL);APJ(c,BjJ,BjK);}AMq(c,BjQ.data[BjR]);AM0(c,BjS.data[BjT]);ZV(c,BjU.data[BjV]);if(BjF&&Bjp){AB6(c,BjA,BjB,BjC);ANa(c,Bj2,Bj3);}AOI(c,BjD,BjE);}
function ALp(b,c,d,e){var f;BW();if(Bjs){if(b!=7)Cg(C$(),B(317));else{if(Bjt.lQ==(-1))Bjt.lQ=P9();else if(Bjt.lQ!=P9())Cg(C$(),B(318));f=Bjt;f.jL=f.jL+d|0;Bd();e=e;if((Bex+e.length|0)<Bey.length){f=Bey;b=Bex;f.set(e,b);Bex=Bex+e.length|0;}}}else{BjM=BjM+UF(e)|0;BjN=BjN+d|0;Rq(0|(!Bju?0:1)|(!Bjv?0:4)|(BjF&&Bjp?8:0)|(!BjH?0:16)|(!Bjq?0:32)|(!Bjo?0:64));Of(Bj4.ub);Hh(34962,Bj4.uO);if(!Bj4.xe){Bj4.xe=1;PB(34962,Bj5,35048);}f=BdF;e=e;f.bufferSubData(34962,0,e);if(b==7){Pz(c,d);BjO=BjO+(d/2|0)|0;}else{a:{b:{switch
(b){case 1:break;case 2:case 4:break b;case 3:b=3;BjO=BjO+(d-1|0)|0;break a;case 5:b=5;BjO=BjO+(d-2|0)|0;break a;case 6:b=6;BjO=BjO+(d-2|0)|0;break a;default:break b;}b=1;BjO=BjO+(d/2|0)|0;break a;}b=4;BjO=BjO+(d/3|0)|0;}BdF.drawArrays(b,c,d);}}}
function Pz(b,c){var d,e,f,g,h,i,j;BW();if(BjW===null){if(Bjn)d=ALP($rt_createIntArray(49200));else{e=A5y(0,196800,$rt_createByteArray(196800),0,196800,1,0);e.kN=Bgk;d=AHH(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;h=h<<16;NN(d,g|h);NN(d,j|h);NN(d,i|j<<16);f=f+1|0;}Gx(d);BjW=L8();Hh(34963,BjW);g=Ct(d);e=new Int32Array(Bd3.buffer);h=0;while(h<g){i=AF$(d);e[h]=i;h=h+1|0;}d=Bd3.buffer;g=g*4|0;e=new Uint8Array(d,0,g);BdF.bufferData(34963,e,35044);}if(!BjX.vQ){BjX.vQ=1;Hh(34963,BjW);}g=(c*6|0)/4|0;b=
(b*6|0)/4|0;Bd();BdF.drawElements(4,g,5123,b);}
function Mb(b,c){BW();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}BjG=2;break a;}BjG=1;}}}
function GN(b,c){BW();a:{switch(b){case 2914:break;case 2915:BjJ=c;break a;case 2916:BjK=c;break a;default:break a;}BjL=c;}}
function A1w(){var b,c,d;Bd();Bjn=1;Bgj=A_v(256);Bjo=0;Bjp=0;Bjq=0;Bjr=0.10000000149011612;Bjs=0;Bjt=null;Bju=0;Bjv=0;Bjw=1.0;Bjx=1.0;Bjy=1.0;Bjz=1.0;BjA=1.0;BjB=0.0;BjC=0.0;BjD=0.0;BjE=0.0;BjF=0;BfP=1.0;BfQ=1.0;BfR=1.0;BfS=1.0;BjG=1;BjH=0;BjI=0;BjJ=1.0;BjK=1.0;BjL=1.0;BjM=0;BjN=0;BjO=0;BjP=5888;BjQ=J(Et,32);BjR=0;BjS=J(Et,6);BjT=0;BjU=J(Et,16);BjV=0;b=0;while(b<BjQ.data.length){c=BjQ.data;d=new Et;Fp(d);c[b]=d;b=b+1|0;}b=0;while(b<BjS.data.length){c=BjS.data;d=new Et;Fp(d);c[b]=d;b=b+1|0;}b=0;while(b<BjU.data.length)
{c=BjU.data;d=new Et;Fp(d);c[b]=d;b=b+1|0;}BjW=null;BjX=null;Bgi=De();BjY=De();BjZ=new U1;Bj0=new G_;Bj1=new G_;Bj2=new G_;Bj3=new G_;Bgh=0;Bj4=null;Bj5=new Int32Array(525000);Bj6=null;Bj7=null;Bj8=null;Bj9=null;Bj$=null;Bj_=A_v(256);d=new Et;Fp(d);Bka=Ku(d);Bkb=$rt_createFloatArray(16);Bkc=$rt_createFloatArray(16);d=new Et;Fp(d);Bkd=d;d=new Et;Fp(d);Bke=d;Bkf=new G_;Bkg=Long_ZERO;Bkh=0;}
function ACB(){D.call(this);}
function Bkj(){var a=new ACB();AUj(a);return a;}
function AUj(a){return;}
function DV(){var b,c;Bd();if(!Bez)a:{Bd_=null;if(!PW(BdS)){b=Tj(BdS,0);Bd_=b;if(b!==null){c=1;break a;}}c=0;}else{Ov(BdS);Bd_=null;Beb.data[29]=0;Beb.data[157]=0;Beb.data[28]=0;Beb.data[219]=0;Beb.data[220]=0;Bez=0;c=0;}return c;}
function CU(){Bd();return Bd_===null?0:DC($rt_str(Bd_.type),B(319))?0:1;}
function Bg(){Bd();return Bd_===null?(-1):T1(Bd_.which);}
function APT(b){Bd();BdZ=b;}
function BN(b){Bd();if(Bez){Beb.data[28]=0;Beb.data[29]=0;Beb.data[157]=0;Beb.data[219]=0;Beb.data[220]=0;}return Beb.data[b];}
function ND(){var a=this;D.call(a);a.rt=0;a.tl=0;a.m7=0;a.lt=0;a.hi=0;a.iv=0;a.dy=0;a.mu=0;a.lh=0;a.t3=null;a.tV=null;a.xl=null;a.uw=null;a.yE=null;a.ft=null;a.gk=null;a.BL=null;a.ga=null;a.B9=null;a.De=null;a.ng=null;a.ww=null;a.zO=0;a.jX=0;a.cC=0;a.du=0;a.pO=0;}
var Bkk=null;var Bkl=null;function A_7(a){var b=new ND();APa(b,a);return b;}
function APa(a,b){var c,d;a.rt=1;a.tl=1;a.m7=0;a.lt=0;a.hi=0;a.iv=1;a.dy=0;a.mu=0;a.lh=1;a.t3=E7(B(320),17);a.tV=E7(B(321),30);a.xl=E7(B(322),31);a.uw=E7(B(323),32);a.yE=E7(B(324),57);a.ft=E7(B(325),23);a.gk=E7(B(326),16);a.BL=E7(B(327),20);a.ga=E7(B(328),33);a.B9=E7(B(329),28);a.De=E7(B(330),19);c=J(Vn,11);d=c.data;d[0]=a.t3;d[1]=a.tV;d[2]=a.xl;d[3]=a.uw;d[4]=a.yE;d[5]=a.gk;d[6]=a.ft;d[7]=a.BL;d[8]=a.ga;d[9]=a.B9;d[10]=a.De;a.ng=c;a.zO=12;a.jX=2;a.cC=0;a.du=0;a.pO=0;a.ww=b;}
function K5(a,b){var c;c=new S;V(c);c=H(H(c,a.ng.data[b].Ex),B(12));b=a.ng.data[b].bI;Bd();return T(H(c,b>=0&&b<256?Bev.data[b]:B(10)));}
function X3(a,b,c){a.ng.data[b].bI=c;}
function Eb(a,b,c){if(!b)a.rt=a.rt?0:1;if(b==1)a.tl=a.tl?0:1;if(b==2)a.m7=a.m7?0:1;if(b==3)a.lt=a.lt?0:1;if(b==4)a.hi=(a.hi+c|0)&3;if(b==5)a.iv=a.iv?0:1;if(b==6)a.dy=a.dy?0:1;if(b==7)a.mu=a.mu?0:1;if(b==8)a.jX=(a.jX+c|0)&3;if(b==9){a.lh=a.lh?0:1;Jb(a.ww.dY);}if(b==10){a.du=a.du?0:1;if(a.du){a.hi=2;a.iv=0;a.lh=0;a.dy=0;}Jb(a.ww.dY);}if(b==11)a.pO=a.pO?0:1;}
function QX(a,b){var c;a:{if(!b){c=new S;V(c);c=T(H(H(c,B(331)),!a.rt?B(332):B(333)));break a;}if(b==1){c=new S;V(c);c=T(H(H(c,B(334)),!a.tl?B(332):B(333)));break a;}if(b==2){c=new S;V(c);c=T(H(H(c,B(335)),!a.m7?B(332):B(333)));break a;}if(b==3){c=new S;V(c);c=T(H(H(c,B(336)),!a.lt?B(332):B(333)));break a;}if(b==4){c=new S;V(c);c=T(H(H(c,B(337)),Bkk.data[a.hi]));break a;}if(b==5){c=new S;V(c);c=T(H(H(c,B(338)),!a.iv?B(332):B(333)));break a;}if(b==6){c=new S;V(c);c=T(H(H(c,B(339)),!a.dy?B(332):B(333)));break a;}if
(b==7){c=new S;V(c);c=T(H(H(c,B(340)),!a.mu?B(332):B(333)));break a;}if(b==8){c=new S;V(c);c=T(H(H(c,B(341)),Bkl.data[a.jX]));break a;}if(b==9){c=new S;V(c);c=T(H(H(c,B(342)),!a.lh?B(343):B(344)));break a;}if(b==10){c=new S;V(c);c=T(H(H(c,B(345)),!a.du?B(332):B(333)));break a;}if(b!=11){c=B(3);break a;}c=new S;V(c);c=T(H(H(c,B(346)),!a.pO?B(332):B(333)));}return c;}
function A2r(a){return;}
function A0Z(a){return;}
function AHQ(){var b,c;b=J(B4,4);c=b.data;c[0]=B(347);c[1]=B(348);c[2]=B(349);c[3]=B(350);Bkk=b;b=J(B4,4);c=b.data;c[0]=B(351);c[1]=B(352);c[2]=B(353);c[3]=B(354);Bkl=b;}
function In(){var a=this;D.call(a);a.t4=null;a.pY=0;a.mC=0;a.oL=0;a.oM=0;a.kZ=0;a.k8=0;a.lk=0;a.By=0;a.Em=0;a.Dn=0;a.nW=0;a.o3=0;a.p6=0;a.fw=0;a.g2=null;a.EU=0;a.AZ=0;a.DI=0;a.Hr=0.0;a.i4=0;a.E4=null;a.Ik=0;a.xI=0;a.JL=0;a.on=0;a.kJ=0;a.gm=null;a.ji=null;}
var Bkm=null;var BeL=0;function Tp(){Tp=Bt(In);A_k();}
function Bbt(a,b,c,d,e,f,g){var h=new In();AI6(h,a,b,c,d,e,f,g);return h;}
function AI6(a,b,c,d,e,f,g,h){Tp();a.pY=(-1);a.fw=0;a.g2=$rt_createBooleanArray(2);a.xI=1;a.kJ=0;a.gm=Ci();a.t4=b;a.ji=c;a.lk=g;a.k8=g;a.kZ=g;a.Hr=Ea((Bj(a.kZ,a.kZ)+Bj(a.k8,a.k8)|0)+Bj(a.lk,a.lk)|0)/2.0;a.pY=h;a.mC=(-999);Si(a,d,e,f);a.i4=0;}
function Si(a,b,c,d){var e,f;if(!(b==a.mC&&c==a.oL&&d==a.oM)){PS(a);a.mC=b;a.oL=c;a.oM=d;a.EU=b+(a.kZ/2|0)|0;a.AZ=c+(a.k8/2|0)|0;a.DI=d+(a.lk/2|0)|0;a.nW=b&1023;a.o3=c;a.p6=d&1023;a.By=b-a.nW|0;a.Em=c-a.o3|0;a.Dn=d-a.p6|0;a.E4=Nt(b-2.0,c-2.0,d-2.0,(b+a.kZ|0)+2.0,(c+a.k8|0)+2.0,(d+a.lk|0)+2.0);FI(a.pY+2|0,4864);e=D4(a.nW-2.0,a.o3-2.0,a.p6-2.0,(a.nW+a.kZ|0)+2.0,(a.o3+a.k8|0)+2.0,(a.p6+a.lk|0)+2.0);BA();f=BeI;Bz(f);Bf(f,e.R,e.U,e.S);Bf(f,e.V,e.U,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.R,e.M,e.S);Bf(f,e.R,e.M,e.W);Bf(f,e.V,
e.M,e.W);Bf(f,e.V,e.U,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.R,e.M,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.V,e.M,e.W);Bf(f,e.R,e.M,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.V,e.U,e.W);Bf(f,e.V,e.U,e.S);Bf(f,e.R,e.U,e.S);Bf(f,e.R,e.M,e.W);Bf(f,e.R,e.U,e.W);Bf(f,e.R,e.U,e.S);Bf(f,e.R,e.M,e.S);Bf(f,e.V,e.M,e.S);Bf(f,e.V,e.U,e.S);Bf(f,e.V,e.U,e.W);Bf(f,e.V,e.M,e.W);Br(f);Ef();KV(a);}}
function ADg(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.i4)return;BeL=BeL+1|0;b=a.mC;c=a.oL;d=a.oM;e=a.mC+a.kZ|0;f=a.oL+a.k8|0;g=a.oM+a.lk|0;h=0;while(h<2){a.g2.data[h]=1;h=h+1|0;}Bkn=0;i=Ga();DF(i,a.gm);Dy(a.gm);j=new It;k
=a.t4;l=b-1|0;m=c-1|0;n=d-1|0;o=e+1|0;h=f+1|0;p=g+1|0;$p=1;case 1:AEt(j,k,l,m,n,o,h,p);if(C()){break _;}k=A8h(j);l=0;a:{while(true){if(l>=2)break a;q=0;r=0;s=0;t=c;while(t<f){m=d;while(m<g){n=b;if(n<e){$p=2;continue _;}m=m+1|0;}t=t+1|0;}if(!s)r=0;else{Br(Bkm);Ef();E_(Bkm,0.0,0.0,0.0);}if(r)a.g2.data[l]=0;if(!q)break;l=l+1|0;}}u=Ga();DF(u,a.gm);Fu(u,i);DF(a.ji,u);Fu(i,a.gm);Gf(a.ji,i);a.on=Bkn;a.kJ=1;return;case 2:$z=HA(j,n,t,m);if(C()){break _;}p=$z;if(p>0){if(!s){s=1;FI(a.pY+l|0,4864);Bz(Bkm);E_(Bkm,a.nW-a.mC
|0,a.o3-a.oL|0,a.p6-a.oM|0);}if(!l){L();if(BeM.data[p] instanceof Eh){$p=3;continue _;}}L();v=BeM.data[p];o=R(v.pQ(),l);if(o)q=1;else if(!o){$p=4;continue _;}}n=n+1|0;b:{c:while(true){if(n<e){continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bkm);Ef();E_(Bkm,0.0,0.0,0.0);}if(r)a.g2.data[l]=0;if(!q)break c;l=l+1|0;if(l>=2)break b;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Ga();DF(u,a.gm);Fu(u,i);DF(a.ji,u);Fu(i,a.gm);Gf(a.ji,i);a.on=Bkn;a.kJ=1;return;case 3:$z=AFS(j,n,t,m);if(C()){break _;}w=$z;if(AIf(Bko,
w))U(a.gm,w);L();v=BeM.data[p];o=R(v.pQ(),l);if(o)q=1;else if(!o){$p=4;continue _;}n=n+1|0;d:{e:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bkm);Ef();E_(Bkm,0.0,0.0,0.0);}if(r)a.g2.data[l]=0;if(!q)break e;l=l+1|0;if(l>=2)break d;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Ga();DF(u,a.gm);Fu(u,i);DF(a.ji,u);Fu(i,a.gm);Gf(a.ji,i);a.on=Bkn;a.kJ=1;return;case 4:$z=AN0(k,v,n,t,m);if(C()){break _;}o=$z;r=r|o;n=n+1|0;a:{f:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g)
{t=t+1|0;while(t>=f){if(!s)r=0;else{Br(Bkm);Ef();E_(Bkm,0.0,0.0,0.0);}if(r)a.g2.data[l]=0;if(!q)break f;l=l+1|0;if(l>=2)break a;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Ga();DF(u,a.gm);Fu(u,i);DF(a.ji,u);Fu(i,a.gm);Gf(a.ji,i);a.on=Bkn;a.kJ=1;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function G6(a,b){var c,d,e;c=b.d-a.EU;d=b.j-a.AZ;e=b.e-a.DI;return c*c+d*d+e*e;}
function PS(a){var b;b=0;while(b<2){a.g2.data[b]=1;b=b+1|0;}a.fw=0;a.kJ=0;}
function ARD(a){PS(a);a.t4=null;}
function PI(a,b){return !a.fw?(-1):a.g2.data[b]?(-1):a.pY+b|0;}
function AR9(a,b){a.fw=MI(b,a.E4);}
function AHu(a){return !a.kJ?0:a.g2.data[0]&&a.g2.data[1]?1:0;}
function KV(a){a.i4=1;}
function A_k(){BA();Bkm=BeI;BeL=0;}
function AR$(){var a=this;E3.call(a);a.jr=null;a.lN=0;}
function A7y(){var a=new AR$();AXI(a);return a;}
function A$d(a){var b=new AR$();Y2(b,a);return b;}
function AXI(a){Y2(a,32);}
function Y2(a,b){a.jr=$rt_createByteArray(b);}
function A7M(a,b){var c,d;Ru(a,a.lN+1|0);c=a.jr.data;d=a.lN;a.lN=d+1|0;c[d]=b<<24>>24;}
function Rs(a,b,c,d){var e,f,g,h,i;Ru(a,a.lN+d|0);e=0;while(e<d){f=b.data;g=a.jr.data;h=a.lN;a.lN=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function Ru(a,b){if(a.jr.data.length<b){b=DE(b,(a.jr.data.length*3|0)/2|0);a.jr=Og(a.jr,b);}}
function If(a){return Og(a.jr,a.lN);}
function JR(){B6.call(this);}
function Bkp(){var a=new JR();A5C(a);return a;}
function A5C(a){O(a);}
function Oe(){}
function F0(){var a=this;D.call(a);a.f9=null;a.dZ=null;a.l8=null;a.gL=null;a.kU=null;a.fD=null;a.ee=Long_ZERO;a.sp=Long_ZERO;a.sT=Long_ZERO;a.rr=Long_ZERO;a.gh=0;a.hW=0;a.sd=0;a.so=0;a.bi=null;a.i3=0;a.C6=null;a.q=null;a.fj=0;a.pZ=0;a.fi=0;a.tF=0;a.cv=null;a.kL=null;a.lz=Long_ZERO;a.tj=null;a.wL=Long_ZERO;a.IW=null;a.ne=null;a.qj=null;a.eL=0;}
var Bkq=null;var Bkr=null;var Bks=0;function Bkt(a,b){var c=new F0();QY(c,a,b);return c;}
function ASa(b){var c,d,e,f,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=new S;V(c);c=T(H(H(c,b),B(355)));$p=1;case 1:$z=ALD(c);if(C()){break _;}d=$z;c=Dz();e=new S;V(e);Cg(c,T(H(H(e,b),B(355))));if(d===null)return null;a:{try{e=Mz(MV(OY(Ul(d))),B(356));}catch($$e){$$je=Bh($$e);if($$je instanceof B1){f=$$je;break a;}else{throw $$e;}}return e;}Cc(f);return null;default:E$();}}C3().s(b,c,d,e,f,$p);}
function QY(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.eL=0;a.f9=Ci();a.dZ=Ci();a.l8=Ci();a.gL=BbY();a.kU=Ga();a.fD=Ci();a.ee=Long_ZERO;a.sp=Long_fromInt(8961023);a.sT=Long_fromInt(12638463);a.rr=Long_fromInt(16777215);a.gh=0;a.hW=Lp(new DB);a.sd=1013904223;a.so=0;a.q=new DB;a.tF=0;a.cv=Ci();a.lz=Long_ZERO;a.wL=Long_ZERO;a.ne=Ci();a.qj=Ci();a.IW=b;Bkr=b;b=new S;V(b);b
=T(H(H(b,Bkr),B(355)));$p=1;case 1:$z=ALD(b);if(C()){break _;}d=$z;b=Dz();e=new S;V(e);Cg(b,T(H(H(e,Bkr),B(355))));f=d!==null?1:0;a:{a.tF=f;if(d!==null){try{g=Mz(MV(OY(Ul(d))),B(356));a.lz=Md(g,B(357));a.fj=FW(g,B(358));a.pZ=FW(g,B(359));a.fi=FW(g,B(360));a.ee=Md(g,B(361));a.wL=Md(g,B(362));a.tj=Mz(g,B(5));break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){h=$$je;}else{throw $$e;}}Cc(h);}}f=0;if(Long_eq(a.lz,Long_ZERO)){a.lz=c;f=1;}a.kL=ABl(a,Bkr);if(!f){Q9(a);return;}a.fj=0;a.pZ=64;a.fi=0;f=a.fj;i=a.fi;$p
=2;case 2:$z=AJN(a,f,i);if(C()){break _;}f=$z;L();if(f!=Be9.b?0:1){Q9(a);return;}a.fj=a.fj+(E(a.q,64)-E(a.q,64)|0)|0;a.fi=a.fi+(E(a.q,64)-E(a.q,64)|0)|0;f=a.fj;i=a.fi;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ABl(a,b){var c,d,e;c=new VX;d=new Xl;d.r5=b;e=new St;e.Gd=$rt_createIntMultiArray([32,32]);e.t=a;e.a=new DB;e.yV=Hb(e.a,16);e.yW=Hb(e.a,16);e.yU=Hb(e.a,8);e.tP=Hb(e.a,4);e.yY=Hb(e.a,4);e.yZ=Hb(e.a,10);e.yX=Hb(e.a,16);e.iV=Hb(e.a,8);c.X=J(I5,1024);c.fs=(-999999999);c.fT=(-999999999);c.ls=A9p(a,$rt_createByteArray(32768),0,0);c.ls.Ek=1;c.ls.qb=1;c.lE=a;c.g7=d;c.iU=e;return c;}
function AP3(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fj;c=a.fi;$p=1;case 1:$z=AJN(a,b,c);if(C()){break _;}b=$z;if(b)return;a.fj=a.fj+(E(a.q,8)-E(a.q,8)|0)|0;a.fi=a.fi+(E(a.q,8)-E(a.q,8)|0)|0;b=a.fj;c=a.fi;continue _;default:E$();}}C3().s(a,b,c,$p);}
function AJN(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=63;e=d+1|0;$p=1;case 1:$z=ACv(a,b,e,c);if(C()){break _;}f=$z;if(!f){$p=2;continue _;}d=e;e=d+1|0;continue _;case 2:$z=ACv(a,b,d,c);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AGn(a){var b,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{if(a.tj!==null){YS(a.bi,a.tj);a.tj=null;}b=a.bi;$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){b=$$je;}else{throw $$e;}}Cc(b);return;case 1:a:{try{AOg(a,b);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){b=$$je;}else{throw $$e;}}Cc(b);}return;default:E$();}}C3().s(a,b,$p);}
function ABD(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null)YI(c,B(363));$p=1;case 1:AMK(a);if(C()){break _;}if(c===null){d=a.kL;$p=2;continue _;}d=B(364);$p=3;continue _;case 2:ANY(d,b,c);if(C()){break _;}return;case 3:AR3(c,d);if(C()){break _;}d=a.kL;$p=2;continue _;default:E$();}}C3().s(a,b,c,d,$p);}
function AMK(a){var b,c,d,e,f,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=Ha();Ic(b,B(357),a.lz);GA(b,B(358),a.fj);GA(b,B(359),a.pZ);GA(b,B(360),a.fi);Ic(b,B(361),a.ee);Ic(b,B(362),a.wL);Ic(b,B(365),B$());if(a.bi!==null){c=Ha();ALs(a.bi,c);ANS(b,B(5),c);}c=Ha();HG(c,B(356),b);try{b=BL(H(H(BX(),Bkr),B(366)));$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 1:try
{ALD(b);if(C()){break _;}b=BL(H(H(BX(),Bkr),B(367)));$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 2:try{ALD(b);if(C()){break _;}b=BL(H(H(BX(),Bkr),B(355)));$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 3:try{ALD(b);if(C()){break _;}e=A$d(131072);RY(c,AWg(e));b=BL(H(H(BX(),Bkr),B(366)));f=If(e);$p=4;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 4:try
{ACz(b,f);if(C()){break _;}b=BL(H(H(BX(),Bkr),B(367)));$p=5;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 5:try{$z=ALD(b);if(C()){break _;}f=$z;if(f!==null){b=BL(H(H(BX(),Bkr),B(367)));$p=8;continue _;}b=BL(H(H(BX(),Bkr),B(355)));c=BL(H(H(BX(),Bkr),B(367)));$p=6;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 6:try{ANl(b,c);if(C()){break _;}b=BL(H(H(BX(),Bkr),B(355)));$p=7;continue _;}catch($$e){$$je
=Bh($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 7:try{$z=ALD(b);if(C()){break _;}f=$z;if(f!==null){b=BL(H(H(BX(),Bkr),B(355)));$p=11;continue _;}b=BL(H(H(BX(),Bkr),B(366)));c=BL(H(H(BX(),Bkr),B(355)));$p=9;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 8:try{AL1(b);if(C()){break _;}b=BL(H(H(BX(),Bkr),B(355)));c=BL(H(H(BX(),Bkr),B(367)));$p=6;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 9:try
{ANl(b,c);if(C()){break _;}b=BL(H(H(BX(),Bkr),B(366)));$p=10;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);return;case 10:a:{try{$z=ALD(b);if(C()){break _;}f=$z;if(f===null)break a;b=BL(H(H(BX(),Bkr),B(366)));$p=12;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);}return;case 11:try{AL1(b);if(C()){break _;}b=BL(H(H(BX(),Bkr),B(366)));c=BL(H(H(BX(),Bkr),B(355)));$p=9;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE)
{d=$$je;}else{throw $$e;}}Cc(d);return;case 12:a:{try{AL1(b);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){d=$$je;}else{throw $$e;}}Cc(d);}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AAL(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b){$p=2;continue _;}c=a.kL;b=0;d=null;$p=1;case 1:$z=ANY(c,b,d);if(C()){break _;}b=$z;return b;case 2:AMK(a);if(C()){break _;}c=a.kL;b=0;d=null;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,$p);}
function ACv(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)b=0;else{if(c<128){e=b>>4;f=d>>4;$p=1;continue _;}b=0;}}else b=0;return b;case 1:$z=ZT(a,e,f);if(C()){break _;}g=$z;return FR(g,b&15,c,d&15);default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Mp(a,b,c,d){return c>=0&&c<128?C4(a,b>>4,d>>4):0;}
function G4(a,b,c,d,e,f,g){var h,i;if(f>=0&&c<128){h=b>>4;b=d>>4;c=e>>4;d=g>>4;while(h<=c){i=b;while(i<=d){if(!C4(a,h,i))return 0;i=i+1|0;}h=h+1|0;}return 1;}return 0;}
function C4(a,b,c){return BQ(a.kL,b,c);}
function XV(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b>>4;b=c>>4;$p=1;case 1:$z=ZT(a,d,b);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ZT(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.kL;$p=1;case 1:$z=AOe(d,b,c);if(C()){break _;}d=$z;return d;default:E$();}}C3().s(a,b,c,d,$p);}
function AJk(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;g=b>>4;h=d>>4;$p=1;continue _;}return 0;case 1:$z=ZT(a,g,h);if(C()){break _;}i=$z;b=b&15;d=d&15;$p=2;case 2:$z=ADD(i,b,c,d,e,f);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALq(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=ZT(a,f,g);if(C()){break _;}h=$z;g=b&15;b=d&15;$p=2;case 2:$z=ADA(h,g,c,b,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ABZ(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACv(a,b,c,d);if(C()){break _;}e=$z;if(!e)f=Bf8;else{L();f=BeM.data[e].b_;}return f;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AEI(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;e=b>>4;f=d>>4;$p=1;continue _;}return 0;case 1:$z=ZT(a,e,f);if(C()){break _;}g=$z;return RS(g,b&15,c,d&15);default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACf(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKt(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AKt(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=ZT(a,f,g);if(C()){break _;}h=$z;AAu(h,b&15,c,d&15,e);return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function APv(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALq(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AEM(a,b,c,d,e);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AIW(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AJk(a,b,c,d,e,f);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AEM(a,b,c,d,e);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AEM(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;while(f<a.cv.s){Rp(Z(a.cv,f),b,c,d);f=f+1|0;}$p=1;case 1:AHK(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function APH(a,b,c,d,e){var f;if(d<=e){f=d;d=e;e=f;}Jk(a,b,e,c,b,d,c);}
function Jk(a,b,c,d,e,f,g){var h;h=0;while(h<a.cv.s){AOF(Z(a.cv,h),b,c,d,e,f,g);h=h+1|0;}}
function AHK(a,b,c,d,e){var f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b-1|0;$p=1;case 1:AO4(a,f,c,d,e);if(C()){break _;}f=b+1|0;$p=2;case 2:AO4(a,f,c,d,e);if(C()){break _;}f=c-1|0;$p=3;case 3:AO4(a,b,f,d,e);if(C()){break _;}f=c+1|0;$p=4;case 4:AO4(a,b,f,d,e);if(C()){break _;}f=d-1|0;$p=5;case 5:AO4(a,b,c,f,e);if(C()){break _;}d=d+1|0;$p=6;case 6:AO4(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,
$p);}
function AO4(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.so)return;L();f=BeM.data;$p=1;case 1:$z=ACv(a,b,c,d);if(C()){break _;}g=$z;h=f[g];if(h===null)return;$p=2;case 2:h.e1(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AGc(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZT(a,e,f);if(C()){break _;}g=$z;return Pm(g,b&15,c,d&15);default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Xy(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=1;$p=1;case 1:$z=AQJ(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AQJ(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(e){$p=1;continue _;}if(c<0)return 0;if(c>=128){f=15-a.gh|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}return 15;case 1:$z=ACv(a,b,c,d);if(C()){break _;}f=$z;L();if(f!=BeR.b&&f!=Bg0.b){if(c<0)return 0;if(c>=128){f=15
-a.gh|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}e=c+1|0;g=0;$p=2;case 2:$z=AQJ(a,b,e,d,g);if(C()){break _;}h=$z;e=b+1|0;g=0;$p=3;case 3:$z=AQJ(a,e,c,d,g);if(C()){break _;}g=$z;e=b-1|0;i=0;$p=4;case 4:$z=AQJ(a,e,c,d,i);if(C()){break _;}i=$z;e=d+1|0;j=0;$p=5;case 5:$z=AQJ(a,b,c,e,j);if(C()){break _;}j=$z;d=d-1|0;e=0;$p=6;case 6:$z=AQJ(a,b,c,d,e);if(C()){break _;}k=$z;if(g<=h)g=h;if(i<=g)i=g;if(j<=i)j=i;if(k<=j)k=j;return k;case 7:$z=ZT(a,g,e);if(C()){break _;}l=$z;return VO(l,b&15,c,d&15,a.gh);default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Zw(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 1;e=b>>4;f=d>>4;if(!C4(a,e,f))return 0;$p=1;continue _;}return 0;case 1:$z=ZT(a,e,f);if(C()){break _;}g=$z;return Pm(g,b&15,c,d&15);default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALF(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&c>=(-32000000)&&b<32000000&&c<=32000000){d=b>>4;e=c>>4;if(!C4(a,d,e))return 0;$p=1;continue _;}return 0;case 1:$z=ZT(a,d,e);if(C()){break _;}f=$z;return UK(f,b&15,c&15);default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AP7(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Mp(a,c,d,e))return;if(b===Bku){$p=1;continue _;}if(b===Bkv){$p=2;continue _;}$p=3;continue _;case 1:$z=Zw(a,c,d,e);if(C()){break _;}g=$z;if(g)f=15;$p=3;continue _;case 2:$z=ACv(a,c,d,e);if(C()){break _;}g=$z;L();if(BgA.data[g]>f)f=BgA.data[g];$p=3;case 3:$z=ALh(a,b,c,d,e);if(C()){break _;}g=$z;if(g!=f)DU(a,b,c,d,e,c,d,e);return;default:
E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALh(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=0&&d<128&&c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000){f=c>>4;g=e>>4;if(!C4(a,f,g))return 0;$p=1;continue _;}return b.z$;case 1:$z=ZT(a,f,g);if(C()){break _;}h=$z;return ACk(h,b,c&15,d,e&15);default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AMs(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000&&d>=0&&d<128){g=c>>4;h=e>>4;if(C4(a,g,h)){$p=1;continue _;}}return;case 1:$z=ZT(a,g,h);if(C()){break _;}i=$z;AQK(i,b,c&15,d,e&15,f);g=0;while(g<a.cv.s){Rp(Z(a.cv,g),c,d,e);g=g+1|0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANg(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Bkq.data;$p=1;case 1:$z=Xy(a,b,c,d);if(C()){break _;}b=$z;return e[b];default:E$();}}C3().s(a,b,c,d,e,$p);}
function Ry(a){return a.gh>=4?0:1;}
function AJj(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;$p=1;case 1:$z=AE1(a,b,c,d);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,$p);}
function AE1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(!(isNaN(c.x)?1:0)&&!(isNaN(c.z)?1:0)&&!(isNaN(c.w)?1:0)){e
=K(c.x);f=K(c.z);g=K(c.w);h=K(b.x);i=K(b.z);j=K(b.w);k=20+(-1)|0;if(20<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=
s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;}return null;}return null;case 1:$z=ACv(a,h,i,j);if(C()){break _;}x=$z;$p=2;case 2:$z=AEI(a,h,i,j);if(C()){break _;}y=$z;L();z=BeM.data[x];if(x>0&&z.o6(y,d)){$p=5;continue _;}o=i-1|0;$p=3;case 3:$z=ACv(a,h,o,j);if
(C()){break _;}p=$z;$p=4;case 4:$z=AEI(a,h,o,j);if(C()){break _;}x=$z;w=BeM.data[p];if(p>0&&w.o6(x,d)){$p=6;continue _;}p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)
/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;case 5:$z=z.nI(a,h,i,j,b,c);if(C()){break _;}ba=$z;if(ba!==null)return ba;o=i-1|0;$p=3;continue _;case 6:$z=w.nI(a,h,o,j,b,c);if(C()){break _;}ba
=$z;if(ba!==null)return ba;p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t
*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function Dh(a,b,c,d,e){var f,g,h;f=0;g=R(d,1.0);e=16.0*d;while(f<a.cv.s){h=16.0;if(g>0)h=e;if(LE(a.bi,b)<h*h)Z(a.cv,f);f=f+1|0;}}
function Ey(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$$je;a:{b:{try{h=0;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){i=$$je;break b;}else{throw $$e;}}j=R(f,1.0);k=16.0*f;while(true){try{if(h>=CX(a.cv))break;l=16.0;if(j>0)l=k;m=b-a.bi.d;n=c-a.bi.j;o=d-a.bi.e;if(m*m+n*n+o*o<l*l)AC0(Z(a.cv,h),e,b,c,d,f,g);h=h+1|0;continue;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){i=$$je;break b;}else{throw $$e;}}}break a;}Cc(i);}}
function ATa(a,b,c,d,e,f){return;}
function BV(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.cv.s){AH2(Z(a.cv,i),b,c,d,e,f,g,h);i=i+1|0;}}
function AOg(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d/16.0);d=K(b.e/16.0);if(!C4(a,c,d)){e=Dz();f=new S;V(f);Cg(e,T(FN(H(f,B(368)),b)));return;}$p=1;case 1:$z=ZT(a,c,d);if(C()){break _;}e=$z;VR(e,b);U(a.dZ,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AU4(a,b){Ca(b);}
function ANC(a,b){U(a.cv,b);}
function AKR(a,b){H$(a.cv,b);}
function XT(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dy(a.ne);d=K(c.R);e=K(c.V+1.0);f=K(c.M);g=K(c.U+1.0);h=K(c.S);i=K(c.W+1.0);f=f-1|0;while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeM.data;$p=2;continue _;}j=j+1|0;}d=d+1|0;}c=Dv(c,0.25,0.25,0.25);$p=1;case 1:$z=ADJ(a,b,c);if(C()){break _;}m=$z;n=
0;while(n<m.s){o=Z(m,n).Bt();if(o!==null)U(a.ne,o);c=b.AW(Z(m,n));if(c!==null)U(a.ne,c);n=n+1|0;}return a.ne;case 2:$z=ACv(a,d,j,k);if(C()){break _;}n=$z;p=l[n];if(p!==null){m=a.ne;$p=3;continue _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dv(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeM.data;continue _;case 3:p.FA(a,d,j,k,c,m);if(C()){break _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dv(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=BeM.data;$p=2;continue _;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Oo(a,b){var c;c=1.0-(BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.5);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*11.0|0;}
function OR(a,b){var c,d,e,f;c=BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sp,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sp,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sp,Long_fromInt(255)))/255.0;return BY(d*c,e*c,f*c);}
function Hz(a,b){var c;c=(Long_rem(a.ee,Long_fromInt(24000)).lo+b)/24000.0-0.25;if(c<0.0)c=c+1.0;if(c>1.0)c=c-1.0;return c+(1.0-(GG(c*3.141592653589793)+1.0)/2.0-c)/3.0;}
function S1(a,b){var c,d,e,f;c=BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.rr,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.rr,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.rr,Long_fromInt(255)))/255.0;b=c*0.8999999761581421+0.10000000149011612;return BY(d*b,e*b,f*(c*0.8500000238418579+0.15000000596046448));}
function ADq(a,b){var c,d,e,f;c=BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sT,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sT,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sT,Long_fromInt(255)))/255.0;b=c*0.9399999976158142+0.05999999865889549;return BY(d*b,e*b,f*(c*0.9100000262260437+0.09000000357627869));}
function A8m(a,b,c){return 64;}
function AJp(a,b){var c;c=1.0-(BC(Hz(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*c*0.5;}
function Fn(a,b,c,d,e){var f,g;f=new JV;g=Bkw;Bkw=Long_add(g,Long_fromInt(1));f.oT=g;f.fG=b;f.fp=c;f.fL=d;f.p_=e;if(G4(a,b-8|0,c-8|0,d-8|0,b+8|0,c+8|0,d+8|0)){if(e>0){L();f.jk=Long_add(Long_fromInt(BeM.data[e].mx()),a.ee);}if(!Wz(a.kU,f)){Xg(a.kU,f);Zh(a.gL,f);}}}
function APd(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Gf(a.dZ,a.l8);b=0;while(b<a.cv.s){Z(a.cv,b);c=0;while(c<a.l8.s){Z(a.l8,c);c=c+1|0;}b=b+1|0;}Dy(a.l8);b=0;a:while(true){if(b>=a.dZ.s){b=0;if(b>=a.fD.s)return;d=Z(a.fD,b);$p=1;continue _;}b:{e=Z(a.dZ,b);if(e.bC!==null){if(!e.bC.cR&&e.bC.bH===e)break b;e.bC.bH=null;e.bC=null;}if(!e.cR){$p=2;continue _;}if(e.cR){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,
c,f))break a;d=a.dZ;c=b+(-1)|0;Eo(d,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}b=c;}}b=b+1|0;}$p=3;continue _;case 1:d.tN();if(C()){break _;}b=b+1|0;if(b>=a.fD.s)return;d=Z(a.fD,b);continue _;case 2:Xv(a,e);if(C()){break _;}while(true){if(e.cR){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,c,f)){$p=3;continue _;}d=a.dZ;c=b+(-1)|0;Eo(d,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}b=c;}b:{while(true){b=b+1|0;if(b>=a.dZ.s){b=0;if(b>=a.fD.s)return;d=Z(a.fD,b);$p=1;continue _;}e=Z(a.dZ,b);if(e.bC===null)break b;if(e.bC.cR)break;if
(e.bC.bH!==e)break;}e.bC.bH=null;e.bC=null;}if(e.cR)continue;else break;}continue _;case 3:$z=ZT(a,c,f);if(C()){break _;}d=$z;AMZ(d,e);while(true){d=a.dZ;c=b+(-1)|0;Eo(d,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}b=c;while(true){b=b+1|0;if(b>=a.dZ.s){b=0;if(b>=a.fD.s)return;d=Z(a.fD,b);$p=1;continue _;}e=Z(a.dZ,b);if(e.bC!==null){if(!e.bC.cR&&e.bC.bH===e)continue;e.bC.bH=null;e.bC=null;}if(!e.cR){$p=2;continue _;}if(e.cR)break;}c=K(e.d/16.0);f=K(e.e/16.0);if(!C4(a,c,f))continue;else break;}continue _;default:
E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Xv(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d);K(b.j);d=K(b.e);if(!G4(a,c-16|0,0,d-16|0,c+16|0,128,d+16|0))return;b.cs=b.d;b.b7=b.j;b.ct=b.e;b.P=b.v;b.T=b.I;e=K(b.d/16.0);f=K(b.j/16.0);g=K(b.e/16.0);if(b.bC===null){$p=1;continue _;}$p=2;continue _;case 1:b.ep();if(C()){break _;}h=K(b.d/16.0);i=K(b.j/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g
==j){if(b.bH!==null){if(!b.bH.cR&&b.bH.bC===b){k=b.bH;$p=6;continue _;}b.bH.bC=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 2:b.BJ();if(C()){break _;}h=K(b.d/16.0);i=K(b.j
/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g==j){if(b.bH!==null){if(!b.bH.cR&&b.bH.bC===b){k=b.bH;$p=6;continue _;}b.bH.bC=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 3:$z=ZT(a,
e,g);if(C()){break _;}k=$z;R1(k,b,f);if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 4:b.C4();if(C()){break _;}if(b.bH!==null){if(!b.bH.cR&&b.bH.bC===b){k=b.bH;$p=6;continue _;}b.bH.bC=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;case 5:$z=ZT(a,h,j);if
(C()){break _;}k=$z;VR(k,b);if(b.bH!==null){if(!b.bH.cR&&b.bH.bC===b){k=b.bH;$p=6;continue _;}b.bH.bC=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;case 6:Xv(a,k);if(C()){break _;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)
&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.P;return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AM5(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:$z=ADJ(a,c,b);if(C()){break _;}c=$z;d=0;while(d<c.s){e=Z(c,d);if(!e.cR&&e.mF)return 0;d=d+1|0;}return 1;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AJh(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);if(b.R<0.0)c=c+(-1)|0;if(b.M<0.0)e=e+(-1)|0;if(b.S<0.0)g=g+(-1)|0;while(c<d){i=e;while(i<f){j=g;if(j<h){L();k=BeM.data;$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACv(a,c,i,j);if(C()){break _;}l=$z;m=
k[l];if(m!==null&&m.b_.nE())return 1;j=j+1|0;a:while(true){if(j<h){L();k=BeM.data;continue _;}i=i+1|0;while(i>=f){c=c+1|0;if(c>=d)break a;i=e;}j=g;}return 0;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AQ9(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);while(c<d){i=e;while(i<f){j=g;if(j<h){$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACv(a,c,i,j);if(C()){break _;}k=$z;L();if(k!=Bgm.b&&k!=BfW.b&&k!=BgC.b){j=j+1|0;a:while(true){if(j<h){continue _;}i=i+1|0;while(i>=f){c=c+1|
0;if(c>=d)break a;i=e;}j=g;}return 0;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.R);f=K(b.V+1.0);g=K(b.M);h=K(b.U+1.0);i=K(b.S);j=K(b.W+1.0);k=0;l=BY(0.0,0.0,0.0);m=h;while(e<f){n=g;while(n<h){o=i;if(o<j){L();p=BeM.data;$p=1;continue _;}n=n+1|0;}e=e+1|0;}if(HQ(l)>0.0){b=CD(l);d.g=d.g+
b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 1:$z=ACv(a,e,n,o);if(C()){break _;}q=$z;r=p[q];if(r!==null&&r.b_===c){s=n+1|0;$p=2;continue _;}o=o+1|0;a:while(true){if(o<j){L();p=BeM.data;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break a;n=g;}o=i;}if(HQ(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 2:$z=AEI(a,e,n,o);if(C()){break _;}q=$z;if(m>=s-Jv(q)){k=1;$p=3;continue _;}o=o+1|0;b:while(true){if(o<j){L();p=BeM.data;$p=1;continue _;}n=n+1|0;while(n>=
h){e=e+1|0;if(e>=f)break b;n=g;}o=i;}if(HQ(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 3:r.qE(a,e,n,o,d,l);if(C()){break _;}o=o+1|0;c:while(true){if(o<j){L();p=BeM.data;$p=1;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break c;n=g;}o=i;}if(HQ(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AOs(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K(b.R);e=K(b.V+1.0);f=K(b.M);g=K(b.U+1.0);h=K(b.S);i=K(b.W+1.0);while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=BeM.data;$p=1;continue _;}j=j+1|0;}d=d+1|0;}return 0;case 1:$z=ACv(a,d,j,k);if(C()){break _;}m=$z;n=l[m];if(n!==null&&n.b_===c)return 1;k=k+1|0;a:while(true)
{if(k<i){L();l=BeM.data;continue _;}j=j+1|0;while(j>=g){d=d+1|0;if(d>=e)break a;j=f;}k=h;}return 0;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function X$(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=new WR;$p=1;case 1:AI2(g,a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADz(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0/((c.V-c.R)*2.0+1.0);e=1.0/((c.U-c.M)*2.0+1.0);f=1.0/((c.W-c.S)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){if(0.0<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=0.0;p=BY(k,l,m+n*o);$p=1;continue _;}j=
j+e;}i=i+d;}return g/h;case 1:$z=AJj(a,p,b);if(C()){break _;}p=$z;if(p===null)g=g+1|0;h=h+1|0;q=o+f;a:while(true){if(q<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=q;p=BY(k,l,m+n*o);continue _;}j=j+e;while(j>1.0){i=i+d;if(i>1.0)break a;j=0.0;}q=0.0;}return g/h;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function ABI(a,b,c,d,e){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;$p=1;case 1:$z=ACv(a,b,c,d);if(C()){break _;}e=$z;L();if(e!=Bgm.b)return;Ey(a,b+0.5,c+0.5,d+0.5,B(215),0.5,2.5999999046325684+(N(a.q)-N(a.q))*0.800000011920929);e=0;$p=2;case 2:APv(a,b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AXM(a,b){return null;}
function AN8(a){var b;b=new S;V(b);return T(Be(H(b,B(369)),a.dZ.s));}
function AXW(a){return a.bi;}
function ANw(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZT(a,e,f);if(C()){break _;}g=$z;if(g===null)return null;b=b&15;d=d&15;$p=2;case 2:$z=ANn(g,b,c,d);if(C()){break _;}g=$z;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AFR(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b>>4;g=d>>4;$p=1;case 1:$z=ZT(a,f,g);if(C()){break _;}h=$z;if(h!==null)AJi(h,b&15,c,d&15,e);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFJ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=ZT(a,e,f);if(C()){break _;}g=$z;if(g!==null)ADY(g,b&15,c,d&15);return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAB(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();e=BeM.data;$p=1;case 1:$z=ACv(a,b,c,d);if(C()){break _;}b=$z;f=e[b];return f!==null?f.d5():0;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AJf(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=1;$p=1;case 1:ABD(a,c,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AIj(a){var b,c,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.eL>=50)return 0;a.eL=a.eL+1|0;a:{try{b=500;}catch($$e){$$je=Bh($$e);c=$$je;break a;}b:{try{if(CX(a.f9)>0)break b;}catch($$e){$$je=Bh($$e);c=$$je;break a;}a.eL=a.eL-1|0;return 0;}c:{try{b=b+(-1)|0;if(b>0)break c;}catch($$e){$$je=Bh($$e);c=$$je;break a;}a.eL=a.eL-1|0;return 1;}try{c=Eo(a.f9,CX(a.f9)-1|0);$p=1;continue _;}catch($$e){$$je=Bh($$e);c=$$je;}}a.eL=a.eL-1|0;M(c);case 1:d:
{try{AOm(c,a);if(C()){break _;}}catch($$e){$$je=Bh($$e);c=$$je;break d;}a:{try{if(CX(a.f9)>0)break a;}catch($$e){$$je=Bh($$e);c=$$je;break d;}a.eL=a.eL-1|0;return 0;}b:{try{b=b+(-1)|0;if(b>0)break b;}catch($$e){$$je=Bh($$e);c=$$je;break d;}a.eL=a.eL-1|0;return 1;}try{c=Eo(a.f9,CX(a.f9)-1|0);continue _;}catch($$e){$$je=Bh($$e);c=$$je;}}a.eL=a.eL-1|0;M(c);default:E$();}}C3().s(a,b,c,$p);}
function DU(a,b,c,d,e,f,g,h){AKT(a,b,c,d,e,f,g,h,1);}
function AKT(a,b,c,d,e,f,g,h,i){var j,k,l,m;Bks=Bks+1|0;if(Bks==50){Bks=Bks-1|0;return;}if(!Mp(a,(f+c|0)/2|0,64,(h+e|0)/2|0)){Bks=Bks-1|0;return;}a:{j=a.f9.s;if(i){if(5<=j)j=5;k=0;while(true){if(k>=j)break a;l=Z(a.f9,(a.f9.s-k|0)-1|0);if(l.cl===b&&ALz(l,c,d,e,f,g,h))break;k=k+1|0;}Bks=Bks-1|0;return;}}l=a.f9;m=new VM;m.cl=b;m.iJ=c;m.b8=d;m.eg=e;m.d_=f;m.b0=g;m.dN=h;U(l,m);if(a.f9.s>1000000){b=Dz();l=new S;V(l);Cg(b,T(H(Be(H(l,B(370)),1000000),B(371))));Dy(a.f9);}Bks=Bks-1|0;}
function Q9(a){var b;b=Oo(a,1.0);if(b!=a.gh)a.gh=b;}
function X4(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Q6(a.dZ,a.bi)&&a.bi!==null){Cg(Dz(),B(372));b=a.bi;$p=1;continue _;}a:{c=Oo(a,1.0);if(c!=a.gh){a.gh=c;d=0;while(true){if(d>=a.cv.s)break a;VC(Z(a.cv,d));d=d+1|0;}}}a.ee=Long_add(a.ee,Long_fromInt(1));if(Long_ne(Long_rem(a.ee,Long_fromInt(20)),Long_ZERO)){c=0;$p=
2;continue _;}c=0;b=null;$p=4;continue _;case 1:AOg(a,b);if(C()){break _;}b:{c=Oo(a,1.0);if(c!=a.gh){a.gh=c;d=0;while(true){if(d>=a.cv.s)break b;VC(Z(a.cv,d));d=d+1|0;}}}a.ee=Long_add(a.ee,Long_fromInt(1));if(Long_ne(Long_rem(a.ee,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c=0;b=null;$p=4;continue _;case 2:ABp(a,c);if(C()){break _;}d=K(a.bi.d);e=K(a.bi.e);b=new It;f=d-64|0;g=0;h=e-64|0;c=d+64|0;i=128;j=e+64|0;$p=3;case 3:AEt(b,a,f,g,h,c,i,j);if(C()){break _;}i=0;if(i>=8000)return;a.hW=(a.hW*3|0)+a.sd
|0;f=a.hW>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k=f>>16&127;$p=5;continue _;case 4:ABD(a,c,b);if(C()){break _;}c=0;$p=2;continue _;case 5:$z=HA(b,g,k,h);if(C()){break _;}l=$z;L();if(Bgw.data[l]){m=BeM.data[l];n=a.q;$p=6;continue _;}i=i+1|0;if(i>=8000)return;a.hW=(a.hW*3|0)+a.sd|0;f=a.hW>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k=f>>16&127;continue _;case 6:m.e8(a,g,k,h,n);if(C()){break _;}i=i+1|0;if(i>=8000)return;a.hW=(a.hW*3|0)+a.sd|0;f=a.hW>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k
=f>>16&127;$p=5;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ABp(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Jx(a.gL);if(c!=IN(a.kU)){d=new D3;Bl(d,B(373));M(d);}if(c>500)c=500;e=0;a:{while(true){if(e>=c)break a;f=M2(a.gL);if(!b&&Long_gt(f.jk,a.ee))break;MF(a.gL,f);KW(a.kU,f);if(G4(a,f.fG-8|0,f.fp-8|0,f.fL-8|0,f.fG+8|0,f.fp+8|0,f.fL+8|0)){g=f.fG;h=f.fp;i=f.fL;$p=1;continue _;}e=e+1|0;}}return !Jx(a.gL)?0:1;case 1:$z=ACv(a,g,
h,i);if(C()){break _;}g=$z;if(g==f.p_&&g>0){L();d=BeM.data[g];g=f.fG;h=f.fp;i=f.fL;f=a.q;$p=2;continue _;}b:{while(true){e=e+1|0;if(e>=c)break b;f=M2(a.gL);if(!b&&Long_gt(f.jk,a.ee))break;MF(a.gL,f);KW(a.kU,f);if(!G4(a,f.fG-8|0,f.fp-8|0,f.fL-8|0,f.fG+8|0,f.fp+8|0,f.fL+8|0))continue;else{g=f.fG;h=f.fp;i=f.fL;continue _;}}}return !Jx(a.gL)?0:1;case 2:d.e8(a,g,h,i,f);if(C()){break _;}c:{while(true){e=e+1|0;if(e>=c)break c;f=M2(a.gL);if(!b&&Long_gt(f.jk,a.ee))break;MF(a.gL,f);KW(a.kU,f);if(!G4(a,f.fG-8|0,f.fp-8
|0,f.fL-8|0,f.fG+8|0,f.fp+8|0,f.fL+8|0))continue;else{g=f.fG;h=f.fp;i=f.fL;$p=1;continue _;}}}return !Jx(a.gL)?0:1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AE8(a,b,c,d){var e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=16;f=new DB;g=0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;$p=1;case 1:$z=ACv(a,h,i,j);if(C()){break _;}k=$z;if(k>0){L();l=BeM.data[k];$p=2;continue _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,
e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;continue _;case 2:l.kS(a,h,i,j,f);if(C()){break _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADJ(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dy(a.qj);d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);while(d<=e){h=f;while(h<=g){if(C4(a,d,h)){$p=1;continue _;}h=h+1|0;}d=d+1|0;}return a.qj;case 1:$z=ZT(a,d,h);if(C()){break _;}i=$z;AJY(i,b,c,a.qj);a:while(true){h=h+1|0;while(h>g){d=d+1|0;if(d>e)break a;h=f;}if(!C4(a,d,h))continue;else
{continue _;}}return a.qj;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANd(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);h=Ci();while(d<=e){i=f;while(i<=g){if(C4(a,d,i)){$p=1;continue _;}i=i+1|0;}d=d+1|0;}return h;case 1:$z=ZT(a,d,i);if(C()){break _;}j=$z;AMi(j,b,c,h);a:while(true){i=i+1|0;while(i>g){d=d+1|0;if(d>e)break a;i=f;}if(!C4(a,d,i))continue;else
{continue _;}}return h;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AWG(a){return a.dZ;}
function AGr(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Mp(a,b,c,d))return;$p=1;case 1:$z=XV(a,b,d);if(C()){break _;}e=$z;SK(e);return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Ys(a,b){var c,d;c=0;d=0;while(d<a.dZ.s){if(P6(b,Dl(Z(a.dZ,d))))c=c+1|0;d=d+1|0;}return c;}
function AQb(a,b){var c,d;DF(a.dZ,b);c=0;while(c<a.cv.s){Z(a.cv,c);d=0;while(d<b.s){Z(b,d);d=d+1|0;}c=c+1|0;}}
function AQ1(a,b){DF(a.l8,b);}
function AH8(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACv(a,c,d,e);if(C()){break _;}g=$z;L();h=BeM.data[g];i=BeM.data[b];$p=2;case 2:$z=i.hw(a,c,d,e);if(C()){break _;}j=$z;if(f)j=null;if(!(b>0&&h===null)&&h!==BfV&&h!==BgB&&h!==BfW&&h!==BgC&&h!==Bgm)return 0;if(j===null){$p=3;continue _;}$p=4;continue _;case 3:$z=i.fV(a,c,d,e);if(C()){break _;}b=$z;return !b
?0:1;case 4:$z=AM5(a,j);if(C()){break _;}b=$z;if(!b)return 0;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ART(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.d);f=K(b.j);g=K(b.e);h=d+32.0|0;i=e-h|0;j=f-h|0;k=g-h|0;l=e+h|0;m=f+h|0;n=g+h|0;o=new It;$p=1;case 1:AEt(o,a,i,j,k,l,m,n);if(C()){break _;}return APp(A2E(o),b,c,d);default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AJt(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=K(b.d);h=K(b.j);i=K(b.e);j=f+32.0|0;k=g-j|0;l=h-j|0;m=i-j|0;n=g+j|0;o=h+j|0;p=i+j|0;q=new It;$p=1;case 1:AEt(q,a,k,l,m,n,o,p);if(C()){break _;}return AF9(A2E(q),b,c,d,e,f);default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Fj(a,b,c,d,e){return G4(a,b-e|0,c-e|0,d-e|0,b+e|0,c+e|0,d+e|0);}
function XG(){var b,c;Bkq=$rt_createFloatArray(16);Bks=0;b=0;while(b<=15){c=1.0-b/15.0;Bkq.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}}
function L2(){var a=this;D.call(a);a.uo=null;a.zn=null;a.lr=0;a.Et=0.0;a.Es=0.0;a.ET=0;a.mb=0;a.mz=0;a.nv=0;a.qd=0;a.rP=0;a.zL=0;a.Ah=0.0;a.zN=0.0;a.zk=0.0;a.ow=0;}
var BeI=null;function BA(){BA=Bt(L2);A2m();}
function Br(a){var b,c,d,e,f;if(!a.ow)return 0;a.ow=0;if(a.lr>0){if(a.mz)WU(32888);if(a.mb)WU(32886);b=a.zL;c=a.lr;d=a.uo.buffer;e=a.lr*7|0;ALp(b,0,c,new Int32Array(d,0,e));if(a.mz)Tn(32888);if(a.mb)Tn(32886);}f=a.nv*4|0;Wy(a);return f;}
function Wy(a){a.lr=0;a.nv=0;a.qd=0;}
function Bz(a){Gm(a,7);}
function Gm(a,b){if(a.ow)Br(a);a.ow=1;Wy(a);a.zL=b;a.mb=0;a.mz=0;a.rP=0;}
function AJv(a,b,c){a.mz=1;a.Et=b;a.Es=c;}
function Cq(a,b,c,d){Pc(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function Gz(a,b,c,d,e){Ql(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function Pc(a,b,c,d){Ql(a,b,c,d,255);}
function Ql(a,b,c,d,e){if(!a.rP){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.mb=1;a.ET=e<<24|d<<16|c<<8|b;}}
function G(a,b,c,d,e,f){AJv(a,e,f);Bf(a,b,c,d);}
function Bf(a,b,c,d){var e,f,g,h,i;if(a.qd>65534)return;a.qd=a.qd+1|0;a.lr=a.lr+1|0;e=a.nv;f=a.uo;g=a.zn;h=e+0|0;i=b+a.Ah;g[h]=i;h=e+1|0;i=c+a.zN;g[h]=i;h=e+2|0;i=d+a.zk;g[h]=i;if(a.mz){h=e+3|0;i=a.Et;g[h]=i;h=e+4|0;i=a.Es;g[h]=i;}if(a.mb){h=e+5|0;e=a.ET;f[h]=e;}a.nv=a.nv+7|0;}
function ES(a,b){Pc(a,b>>16&255,b>>8&255,b&255);}
function ADm(a){a.rP=1;}
function Dd(a,b,c,d){Cj(b,c,d);}
function E_(a,b,c,d){a.Ah=b;a.zN=c;a.zk=d;}
function A2m(){var b,c;b=new L2;BA();b.lr=0;b.mb=0;b.mz=0;b.nv=0;b.qd=0;b.rP=0;b.ow=0;c=new ArrayBuffer(2097152);b.uo=new Int32Array(c);b.zn=new Float32Array(c);BeI=b;}
function ANe(){var a=this;D.call(a);a.fN=0;a.fJ=0;}
function FJ(a,b){var c=new ANe();A0a(c,a,b);return c;}
function A0a(a,b,c){var d,e;a.fN=b;a.fJ=c;d=1;while(true){c=a.fN;e=d+1|0;if((c/e|0)<320)break;if((a.fJ/e|0)<240)break;d=e;}a.fN=a.fN/d|0;a.fJ=a.fJ/d|0;}
function AEo(a){return a.fN;}
function Zd(a){return a.fJ;}
function Gh(){D.call(this);this.mV=0.0;}
function Bkx(){var a=new Gh();Ne(a);return a;}
function Ne(a){a.mV=0.0;}
function KL(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>24&255)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>24&255)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;Bc(3553);Ba(3042);Bc(3008);Df(770,771);BA();p=BeI;Bz(p);Gz(p,i,j,k,h);q=d;r=c;Bf(p,q,r,0.0);s=b;Bf(p,s,r,0.0);Gz(p,m,n,o,l);r=e;Bf(p,s,r,0.0);Bf(p,q,r,0.0);Br(p);Bc(3042);Ba(3008);Ba(3553);}
function DG(a,b,c,d,e,f){Cy(b,c,d-(Dw(b,c)/2|0)|0,e,f);}
function Hu(a,b,c,d,e,f){Cy(b,c,d,e,f);}
function CH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;BA();h=BeI;Bz(h);i=b+0|0;j=c+g|0;k=a.mV;l=(d+0|0)*0.00390625;m=(e+g|0)*0.00390625;G(h,i,j,k,l,m);n=b+f|0;o=a.mV;k=(d+f|0)*0.00390625;G(h,n,j,o,k,m);m=c+0|0;o=a.mV;j=(e+0|0)*0.00390625;G(h,n,m,o,k,j);G(h,i,m,a.mV,l,j);Br(h);}
function CS(){var a=this;Gh.call(a);a.J=null;a.bm=0;a.bD=0;a.bG=null;a.pR=0;a.bZ=null;}
function Bky(){var a=new CS();DR(a);return a;}
function DR(a){Ne(a);a.bG=Ci();a.pR=0;}
function AFC(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.bG.s)return;f=Z(a.bG,e);g=a.J;$p=1;case 1:ACS(f,g,b,c);if(C()){break _;}e=e+1|0;if(e>=a.bG.s)return;f=Z(a.bG,e);g=a.J;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function YN(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.J;e=null;$p=1;case 1:ADT(d,e);if(C()){break _;}d=a.J;$p=2;case 2:AFh(d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Zm(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bG.s)break a;f=Z(a.bG,e);if(R3(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.iE(f);if(C()){break _;}while(true){e=e+1|0;if(e>=a.bG.s)break;f=Z(a.bG,e);if(!R3(f,b,c))continue;else{continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A2v(a,b,c,d){return;}
function AMR(a,b){return;}
function AP6(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.J=b;a.bZ=b.e$;a.bm=c;a.bD=d;$p=1;case 1:a.hV();if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AP4(a){return;}
function AG4(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(FA()){$p=1;continue _;}if(!DV())return;$p=2;continue _;case 1:Zy(a);if(C()){break _;}if(FA()){continue _;}if(!DV())return;$p=2;case 2:ASx(a);if(C()){break _;}if(!DV())return;continue _;default:E$();}}C3().s(a,$p);}
function Zy(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cx()){a.Cd(Bj(ARU(),a.bm)/a.J.cd|0,(a.bD-(Bj(XR(),a.bD)/a.J.bA|0)|0)-1|0,CV());return;}b=Bj(ARU(),a.bm)/a.J.cd|0;c=(a.bD-(Bj(XR(),a.bD)/a.J.bA|0)|0)-1|0;d=CV();$p=1;case 1:a.I1(b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ASx(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!CU())return;Bd();if(Bd_===null)b=0;else{c=$rt_str(Bd_.key);b=Bd_===null?32:Bi(c)>1?0:Y(c,0);}d=Bg();$p=1;case 1:a.o_(b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function A3e(a){return;}
function AH6(a){return;}
function ABf(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;$p=1;case 1:AIC(a,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function AIC(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.J.B!==null){KL(a,0,0,a.bm,a.bD,1610941696,(-1607454656));return;}Bc(2896);Bc(2912);BA();c=BeI;d=3553;e=a.J.bo;f=B(165);$p=1;case 1:$z=AHr(e,f);if(C()){break _;}g=$z;Cp(d,g);BU(1.0,1.0,1.0,1.0);Bz(c);ES(c,4210752);h=a.bD;i=a.bD/32.0;j=b;G(c,0.0,h,0.0,0.0,i+j);G(c,a.bm,a.bD,
0.0,a.bm/32.0,a.bD/32.0+j);k=a.bm;l=a.bm/32.0;m=0+b|0;G(c,k,0.0,0.0,l,m);G(c,0.0,0.0,0.0,0.0,m);Br(c);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AVp(a){return 1;}
function AFc(){var a=this;D.call(a);a.la=null;a.jz=0;a.ig=0;a.vG=0;}
function A_v(a){var b=new AFc();A4N(b,a);return b;}
function A4N(a,b){a.la=J(D,b);a.jz=b;a.ig=0;a.vG=0;}
function S3(a,b){var c,d;c=a.ig;while(true){a.ig=a.ig+1|0;if(a.ig>=a.jz)a.ig=0;if(a.ig==c){c=a.jz;a.jz=a.jz+(a.jz/2|0)|0;d=a.la;a.la=J(D,a.jz);Di(d,0,a.la,0,c);return S3(a,b);}if(a.la.data[a.ig]!==null)continue;else break;}a.la.data[a.ig]=b;a.vG=a.vG+1|0;return a.ig;}
function ANJ(a,b){if(b<a.jz&&b>=0)return a.la.data[b];return null;}
function Mm(){D.call(this);}
function Et(){var a=this;Mm.call(a);a.eu=0.0;a.es=0.0;a.et=0.0;a.er=0.0;a.ex=0.0;a.ey=0.0;a.ev=0.0;a.ew=0.0;a.eC=0.0;a.eA=0.0;a.eB=0.0;a.ez=0.0;a.gW=0.0;a.gX=0.0;a.gU=0.0;a.gV=0.0;}
function M7(){var a=new Et();A41(a);return a;}
function A41(a){Fp(a);}
function Fp(a){a.eu=1.0;a.es=0.0;a.et=0.0;a.er=0.0;a.ex=0.0;a.ey=1.0;a.ev=0.0;a.ew=0.0;a.eC=0.0;a.eA=0.0;a.eB=1.0;a.ez=0.0;a.gW=0.0;a.gX=0.0;a.gU=0.0;a.gV=1.0;return a;}
function Ku(a){a.eu=0.0;a.es=0.0;a.et=0.0;a.er=0.0;a.ex=0.0;a.ey=0.0;a.ev=0.0;a.ew=0.0;a.eC=0.0;a.eA=0.0;a.eB=0.0;a.ez=0.0;a.gW=0.0;a.gX=0.0;a.gU=0.0;a.gV=0.0;return a;}
function GR(a,b){a.eu=b.eu;a.es=b.es;a.et=b.et;a.er=b.er;a.ex=b.ex;a.ey=b.ey;a.ev=b.ev;a.ew=b.ew;a.eC=b.eC;a.eA=b.eA;a.eB=b.eB;a.ez=b.ez;a.gW=b.gW;a.gX=b.gX;a.gU=b.gU;a.gV=b.gV;return a;}
function TR(a,b){CJ(b,a.eu);CJ(b,a.es);CJ(b,a.et);CJ(b,a.er);CJ(b,a.ex);CJ(b,a.ey);CJ(b,a.ev);CJ(b,a.ew);CJ(b,a.eC);CJ(b,a.eA);CJ(b,a.eB);CJ(b,a.ez);CJ(b,a.gW);CJ(b,a.gX);CJ(b,a.gU);CJ(b,a.gV);return a;}
function NV(a,b){b=b.data;b[0]=a.eu;b[1]=a.es;b[2]=a.et;b[3]=a.er;b[4]=a.ex;b[5]=a.ey;b[6]=a.ev;b[7]=a.ew;b[8]=a.eC;b[9]=a.eA;b[10]=a.eB;b[11]=a.ez;b[12]=a.gW;b[13]=a.gX;b[14]=a.gU;b[15]=a.gV;return a;}
function A$r(a,b){return U7(a,b,a);}
function ZC(a,b){a.eu=a.eu*b.fy;a.es=a.es*b.fy;a.et=a.et*b.fy;a.er=a.er*b.fy;a.ex=a.ex*b.fA;a.ey=a.ey*b.fA;a.ev=a.ev*b.fA;a.ew=a.ew*b.fA;a.eC=a.eC*b.fz;a.eA=a.eA*b.fz;a.eB=a.eB*b.fz;a.ez=a.ez*b.fz;return a;}
function ATN(a,b,c){return WY(a,b,c,a);}
function WY(a,b,c,d){return A6x(b,c,a,d);}
function A6x(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=M7();f=b;g=GG(f);h=Gt(f);i=1.0-g;j=c.fy*c.fA;k=c.fA*c.fz;l=c.fy*c.fz;m=c.fy*h;n=c.fA*h;o=c.fz*h;p=c.fy*c.fy*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.fA*c.fA*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.fz*c.fz*i+g;z=d.eu*p+d.ex*q+d.eC*s;ba=d.es*p+d.ey*q+d.eA*s;bb=d.et*p+d.ev*q+d.eB*s;bc=d.er*p+d.ew*q+d.ez*s;bd=d.eu*t+d.ex*u+d.eC*v;be=d.es*t+d.ey*u+d.eA*v;bf=d.et*t+d.ev*u+d.eB*v;r=d.er*t+d.ew*u+d.ez*v;e.eC=d.eu*w+d.ex*x+d.eC*
y;e.eA=d.es*w+d.ey*x+d.eA*y;e.eB=d.et*w+d.ev*x+d.eB*y;e.ez=d.er*w+d.ew*x+d.ez*y;e.eu=z;e.es=ba;e.et=bb;e.er=bc;e.ex=bd;e.ey=be;e.ev=bf;e.ew=r;return e;}
function U7(a,b,c){if(c===null)c=M7();c.gW=c.gW+a.eu*b.fy+a.ex*b.fA+a.eC*b.fz;c.gX=c.gX+a.es*b.fy+a.ey*b.fA+a.eA*b.fz;c.gU=c.gU+a.et*b.fy+a.ev*b.fA+a.eB*b.fz;c.gV=c.gV+a.er*b.fy+a.ew*b.fA+a.ez*b.fz;return c;}
function Lt(a,b){var c;a:{if(b instanceof Et){b:{c:{b=b;if(a.eu!==b.eu)break c;if(a.es!==b.es)break c;if(a.et!==b.et)break c;if(a.er!==b.er)break c;if(a.ex!==b.ex)break c;if(a.ey!==b.ey)break c;if(a.ev!==b.ev)break c;if(a.ew!==b.ew)break c;if(a.eC!==b.eC)break c;if(a.eA!==b.eA)break c;if(a.eB!==b.eB)break c;if(a.ez!==b.ez)break c;if(a.gW!==b.gW)break c;if(a.gX!==b.gX)break c;if(a.gU!==b.gU)break c;if(a.gV===b.gV){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function N_(){}
function I4(){D.call(this);}
function Wg(){}
function NZ(){}
function R0(){}
function Me(){}
function U1(){var a=this;I4.call(a);a.fy=0.0;a.fA=0.0;a.fz=0.0;}
function Bkz(){var a=new U1();A99(a);return a;}
function A99(a){return;}
function L3(a,b,c,d){a.fy=b;a.fA=c;a.fz=d;}
function We(){}
function RU(){}
function G_(){var a=this;I4.call(a);a.le=0.0;a.lf=0.0;a.ld=0.0;a.pd=0.0;}
function A2W(){var a=new G_();AZN(a);return a;}
function AZN(a){return;}
function VE(a,b){a.le=b.le;a.lf=b.lf;a.ld=b.ld;a.pd=b.pd;return a;}
function A_s(a){return a.le;}
function ATh(a){return a.lf;}
function AZX(a){return a.ld;}
function A5v(a){return a.pd;}
function S9(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Dl(a)!==Dl(b))return 0;c=b;if(a.le===c.le&&a.lf===c.lf&&a.ld===c.ld&&a.pd===c.pd)return 1;return 0;}
function SY(){var a=this;D.call(a);a.B8=null;a.B7=null;}
function AIz(a){var b,c;b=a.B8;c=a.B7;Fv(b);CM(c,null);}
function AOX(){Fg.call(this);}
function A4Z(a){var b=new AOX();AYw(b,a);return b;}
function AYw(a,b){WS(a,b);}
function H6(){}
function Us(){}
function ACY(){var a=this;D.call(a);a.fP=null;a.iB=null;a.kD=null;a.p5=0;a.re=0;a.ij=null;}
function AJx(a,b,c,d){var e=new ACY();AUi(e,a,b,c,d);return e;}
function AUi(a,b,c,d,e){a.ij=b;a.re=a.ij.d7;a.fP=c;a.iB=d;a.p5=e;}
function Fq(a){return a.fP===null?0:1;}
function Fm(a){var b;Rt(a);if(a.fP===null){b=new JZ;O(b);M(b);}b=a.fP.zm;a.kD=a.fP;a.iB=a.fP;a.fP=a.fP.hu;a.p5=a.p5+1|0;return b;}
function AHd(a){var b,c;if(a.kD===null){b=new D3;O(b);M(b);}b=a.ij;c=a.kD;if(c.iy===null)b.pC=c.hu;else c.iy.hu=c.hu;if(c.hu===null)b.ql=c.iy;else c.hu.iy=c.iy;b.gQ=b.gQ-1|0;b.d7=b.d7+1|0;if(a.kD===a.iB){a.iB=!Fq(a)?null:a.fP.iy;a.p5=a.p5-1|0;}else if(a.kD===a.fP)a.fP=!ZQ(a)?null:a.iB.hu;a.re=a.ij.d7;a.kD=null;}
function ZQ(a){return a.iB===null?0:1;}
function ABr(a,b){var c;Rt(a);c=new RD;c.zm=b;c.iy=a.iB;c.hu=a.fP;if(a.iB!==null)a.iB.hu=c;else a.ij.pC=c;if(a.fP!==null)a.fP.iy=c;else a.ij.ql=c;a.iB=c;b=a.ij;b.gQ=b.gQ+1|0;b=a.ij;b.d7=b.d7+1|0;a.re=a.ij.d7;a.kD=null;}
function Rt(a){var b;if(a.re>=a.ij.d7)return;b=new KS;O(b);M(b);}
function RD(){var a=this;D.call(a);a.zm=null;a.hu=null;a.iy=null;}
function BkA(){var a=new RD();A0J(a);return a;}
function A0J(a){return;}
function KI(){var a=this;D.call(a);a.zj=null;a.kA=null;a.he=null;a.l2=null;a.Cc=null;a.wI=null;a.sU=0;a.DW=0;}
var BkB=0;var BeH=null;function AHr(a,b){var c,d,e,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=CP(BeH,b);if(c!==null)return c.f7;try{AFd(a.kA);WT(a.kA);d=Q0(a.kA,0);if(Iz(b,B(374))){a.sU=1;e=Kf(Jt(b,7));$p=1;continue _;}if(DC(b,B(179))&&AIE().o.pO)BkB=1;e=Kf(b);$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof B1){}else{throw $$e;}}b=new B6;Bl(b,B(375));M(b);case 1:a:{try{$z=Y_(a,e);if(C()){break _;}c=$z;LM(a,c,d);a.sU
=0;Rc(BeH,b,CY(d));}catch($$e){$$je=Bh($$e);if($$je instanceof B1){break a;}else{throw $$e;}}return d;}b=new B6;Bl(b,B(375));M(b);case 2:a:{try{$z=Y_(a,e);if(C()){break _;}c=$z;LM(a,c,d);BkB=0;Rc(BeH,b,CY(d));}catch($$e){$$je=Bh($$e);if($$je instanceof B1){break a;}else{throw $$e;}}return d;}b=new B6;Bl(b,B(375));M(b);default:E$();}}C3().s(a,b,c,d,e,$p);}
function AHy(a,b){var c;EB(a.kA);WT(a.kA);c=Q0(a.kA,0);LM(a,b,c);BR(a.zj,CY(c),b);return c;}
function LM(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;Ec(a,c);if(!BkB){Ek(3553,10241,9728);Ek(3553,10240,9728);}else{Ek(3553,10241,9986);Ek(3553,10240,9728);Ek(3553,33085,4);}if(a.DW){Ek(3553,10241,9729);Ek(3553,10240,9729);}if(!a.sU){Ek(3553,10242,10497);Ek(3553,10243,10497);}else{Ek(3553,10242,10496);Ek(3553,10243,10496);}d=b.xs;e=b.Dp;f=b.t1;g=$rt_createByteArray(Bj(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if
(a.wI!==null&&a.wI.dy){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}a:{EB(a.he);UL(a.he,g);b=a.he;EO(b,0);No(b,h.length);Sy(3553,0,6408,d,e,0,6408,5121,a.he);if(BkB){p=1;while(true){if(p>4)break a;o=d>>(p-1|0);q=d>>p;r=e>>p;EB(a.l2);s=0;while(s<q){t=0;while(t<r){b=a.he;c=s*2|0;i=c+0|0;k=t*2|0;n=Bj(k+0|0,o);u=KQ(b,(i+n|0)*4|0);b=a.he;c=c+1|0;v=KQ(b,(c+n|0)*4|0);b=a.he;k=
Bj(k+1|0,o);w=KQ(b,(c+k|0)*4|0);x=KQ(a.he,(i+k|0)*4|0);y=Lg(a,Lg(a,u,v),Lg(a,w,x));AA5(a.l2,(s+Bj(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}Sy(3553,p,6408,q,r,0,6408,5121,a.l2);z=a.he;a.he=a.l2;a.l2=z;p=p+1|0;}}}}
function AD2(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=B(376);$p=1;case 1:$z=AHr(a,b);if(C()){break _;}d=$z;return d;default:E$();}}C3().s(a,b,c,d,$p);}
function G9(a,b){U(a.Cc,b);b.o$();}
function Lg(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function Y_(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AES(b);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function Ec(a,b){if(b<0)return;Cp(3553,b);}
function ADC(){BkB=0;}
function Wf(){var a=this;D.call(a);a.sb=null;a.xr=0;a.tk=0;}
function BkC(a,b,c){var d=new Wf();AOG(d,a,b,c);return d;}
function AOG(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.sb=$rt_createIntArray(256);a.xr=0;e=Kf(c);$p=1;case 1:$z=AES(e);if(C()){break _;}f
=$z;g=f.xs;e=f.t1;h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+Bj(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.sb.data[h]=k+2|0;h=h+1|0;}a.xr=AHy(d,f);a.tk=I0(288);BA();p=BeI;q=0;while(q<256){FI(a.tk+q|0,4864);Bz(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;G(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;G(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;G(p,7.989999771118164,0.0,0.0,x,y);G(p,0.0,0.0,0.0,u,y);Br(p);Ef();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.dy){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}FI((a.tk+256|0)+l|0,4864);F8(ba/255.0,bb/255.0,bc/255.0);Ef();l=l+1|0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function Cy(a,b,c,d,e){SH(a,b,c+1|0,d+1|0,e,1);EE(a,b,c,d,e);}
function EE(a,b,c,d,e){SH(a,b,c,d,e,0);}
function SH(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Cp(3553,a.xr);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BU(g,h,i,j);B3();Bw(c,d,0.0);k=0;while(k<Bi(b)){c=k;while(true){d=Bi(b);k=c+1|0;if(d<=k)break;if(Y(b,c)!=167)break;l=UC(B(377),Y(AKh(b),k));c=c+2|0;}if(c<Bi(b)){m=Vi(Y(b,c));if(m>=0){FU((a.tk+m|0)+32|0);Bw(a.sb.data[m+32|0],0.0,0.0);}}}BD();}
function Dw(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<Bi(b)){if(Y(b,d)==167)d=d+1|0;else{e=Vi(Y(b,d));if(e>=0)c=c+a.sb.data[e+32|0]|0;}d=d+1|0;}return c;}
function AQz(a,b){var c,d,e,f;c=Ci();d=ANk(b,B(158)).data;e=d.length;f=0;while(f<e){U(c,d[f]);f=f+1|0;}return c;}
function Qk(){var a=this;D.call(a);a.FS=0;a.FR=0;}
function BkD(){var a=new Qk();A$w(a);return a;}
function A$w(a){return;}
function Yz(a){AMF(1);a.FS=0;a.FR=0;}
function AFy(a){Lr();MD();AMF(0);}
function AKU(){var a=this;Ev.call(a);a.o5=null;a.rh=null;a.oA=null;a.sZ=null;a.te=0;}
function Bar(){var a=new AKU();A4s(a);return a;}
function A4s(a){L();HD(a,BfV.bb+1|0);a.o5=$rt_createFloatArray(256);a.rh=$rt_createFloatArray(256);a.oA=$rt_createFloatArray(256);a.sZ=$rt_createFloatArray(256);a.te=0;a.wY=2;}
function AZ9(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.te=a.te+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=c-2|0;while(e<=c){f=b&15;g=e&15;d=d+a.o5.data[f+(g*16|0)|0];e=e+1|0;}h=a.rh.data;i=b+(c*16|0)|0;h[i]=d/3.200000047683716+a.oA.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){j=a.oA.data;i=b+(c*16|0)|0;j[i]=j[i]+a.sZ.data[i]*0.05000000074505806;if(a.oA.data[i]<0.0)a.oA.data[i]=0.0;j=a.sZ.data;j[i]=j[i]-0.30000001192092896;if(BP()<0.2)a.sZ.data[i]=0.5;c=c+1|0;}b=b+1|0;}j=a.rh;a.rh=a.o5;a.o5
=j;c=0;while(c<256){d=a.o5.data[(c-(a.te*16|0)|0)&255];if(d>1.0)d=1.0;if(d<0.0)d=0.0;k=d*d;i=32.0+k*32.0|0;l=50.0+k*64.0|0;m=255;n=146.0+k*50.0|0;if(a.mG){b=i*30|0;i=((b+(l*59|0)|0)+2805|0)/100|0;l=(b+(l*70|0)|0)/100|0;m=(b+17850|0)/100|0;}j=a.dE.data;b=c*4|0;j[b+0|0]=i<<24>>24;a.dE.data[b+1|0]=l<<24>>24;a.dE.data[b+2|0]=m<<24>>24;a.dE.data[b+3|0]=n<<24>>24;c=c+1|0;}}
function ACj(){var a=this;Ev.call(a);a.ox=null;a.rs=null;a.jS=null;a.sQ=null;a.tu=0;}
function Bcz(){var a=new ACj();A3l(a);return a;}
function A3l(a){L();HD(a,BfW.bb+1|0);a.ox=$rt_createFloatArray(256);a.rs=$rt_createFloatArray(256);a.jS=$rt_createFloatArray(256);a.sQ=$rt_createFloatArray(256);a.tu=0;a.wY=2;}
function A8P(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.tu=a.tu+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bq(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bq(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){j=(g+e|0)&15;h=(i+f|0)&15;d=d+a.ox.data[j+(h*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.rs.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jS.data;e=(b+0|0)&15;j=((c+0|0)&15)*16|0;n=m[e+j|0];m=a.jS.data;h=h&15;n=n+m[h+j|0];m=a.jS.data;c=c+1|0;j=(c&15)*16|0;k[l]
=d+(n+m[h+j|0]+a.jS.data[e+j|0])/4.0*0.800000011920929;m=a.jS.data;m[l]=m[l]+a.sQ.data[l]*0.009999999776482582;if(a.jS.data[l]<0.0)a.jS.data[l]=0.0;m=a.sQ.data;m[l]=m[l]-0.05999999865889549;if(BP()<0.005)a.sQ.data[l]=1.5;}b=b+1|0;}m=a.rs;a.rs=a.ox;a.ox=m;c=0;while(c<256){d=a.ox.data[(c-((a.tu/3|0)*16|0)|0)&255]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*100.0+155.0|0;n=d*d;h=n*255.0|0;l=n*d*d*128.0|0;if(a.mG){b=j*30|0;j=((b+(h*59|0)|0)+(l*11|0)|0)/100|0;h=(b+(h*70|0)|0)/100|0;l=(b+(l*70|0)|0)/100|0;}m=a.dE.data;b
=c*4|0;m[b+0|0]=j<<24>>24;a.dE.data[b+1|0]=h<<24>>24;a.dE.data[b+2|0]=l<<24>>24;a.dE.data[b+3|0]=(-1);c=c+1|0;}}
function AR4(){var a=this;Ev.call(a);a.mt=null;a.oJ=null;}
function AVE(a){var b=new AR4();AZo(b,a);return b;}
function AZo(a,b){L();HD(a,Bgm.bb+(b*16|0)|0);a.mt=$rt_createFloatArray(320);a.oJ=$rt_createFloatArray(320);}
function A3s(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<16){c=0;while(c<20){d=18;e=a.mt.data;f=c+1|0;g=e[b+((f%20|0)*16|0)|0]*18.0;h=b-1|0;while(h<=(b+1|0)){i=c;while(i<=f){if(h>=0&&i>=0&&h<16&&i<20)g=g+a.mt.data[h+(i*16|0)|0];d=d+1|0;i=i+1|0;}h=h+1|0;}e=a.oJ.data;j=b+(c*16|0)|0;e[j]=g/(d*1.059999942779541);if(c>=19)a.oJ.data[j]=BP()*BP()*BP()*4.0+BP()*0.10000000149011612+0.20000000298023224;c=f;}b=b+1|0;}e=a.oJ;a.oJ=a.mt;a.mt=e;f=0;while(f<256){k=a.mt.data[f]*1.7999999523162842;if(k>1.0)k=1.0;if(k<0.0)k=
0.0;l=k*155.0+100.0|0;g=k*k;m=g*255.0|0;j=g*k*k*k*k*k*k*k*k*255.0|0;n=255;if(k<0.5)n=0;if(a.mG){c=l*30|0;l=((c+(m*59|0)|0)+(j*11|0)|0)/100|0;m=(c+(m*70|0)|0)/100|0;j=(c+(j*70|0)|0)/100|0;}e=a.dE.data;b=f*4|0;e[b+0|0]=l<<24>>24;a.dE.data[b+1|0]=m<<24>>24;a.dE.data[b+2|0]=j<<24>>24;a.dE.data[b+3|0]=n<<24>>24;f=f+1|0;}}
function Xq(){}
function AAt(){var a=this;D.call(a);a.iH=null;a.bM=null;a.iG=null;a.eK=null;a.gO=null;a.c9=null;a.ds=0;a.dG=0;a.j_=0;a.y0=0;a.bO=null;a.D7=null;a.pv=0;a.op=0;a.xK=0;a.xj=0;a.qq=0;a.qr=0;a.qs=0;a.s_=0;a.s$=0;a.ta=0;a.r$=0;a.s8=0;a.lj=0;a.xq=0;a.Hj=null;a.HS=null;a.sc=0;a.rY=0;a.DQ=0;a.sv=0;a.qA=0;a.oY=null;a.Hd=0;a.GL=0;a.rG=0.0;a.rF=0.0;a.rE=0.0;a.tJ=0.0;a.q8=0;}
function BaQ(a,b){var c=new AAt();A2h(c,a,b);return c;}
function A2h(a,b,c){var d,e,f,g,h,i,j;a.iH=Ci();a.eK=Ci();a.pv=0;a.r$=(-1);a.Hj=$rt_createIntArray(50000);a.HS=Rf(64);a.oY=Ci();a.Hd=0;a.GL=I0(1);a.rG=(-9999.0);a.rF=(-9999.0);a.rE=(-9999.0);a.q8=0;a.bO=b;a.iG=c;a.y0=I0(786432);a.op=I0(3);B3();FI(a.op,4864);Ze(a);Ef();BD();BA();d=BeI;a.xK=a.op+1|0;FI(a.xK,4864);e=(-384);while(e<=384){f=(-384);while(f<=384){Bz(d);g=e+0|0;h=f+0|0;Bf(d,g,16.0,h);i=e+64|0;Bf(d,i,16.0,h);f=f+64|0;h=f;Bf(d,i,16.0,h);Bf(d,g,16.0,h);Br(d);}e=e+64|0;}Ef();a.xj=a.op+2|0;FI(a.xj,4864);Bz(d);f
=(-384);while(f<=384){j=(-384);while(j<=384){g=f+64|0;h=j+0|0;Bf(d,g,(-16.0),h);i=f+0|0;Bf(d,i,(-16.0),h);j=j+64|0;h=j;Bf(d,i,(-16.0),h);Bf(d,g,(-16.0),h);}f=f+64|0;}Br(d);Ef();}
function Ze(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.bO.o.du)return;b=new DB;BA();c=BeI;Bz(c);d=0;while(d<1500){a:{e=N(b)*2.0-1.0;f=N(b)*2.0-1.0;g=N(b)*2.0-1.0;h=0.25+N(b)*0.25;i=e*e+f*f+g*g;if(i<1.0&&i>0.01){i=1.0/Ee(i);j=e*i;f=f*i;g=g*i;k=j*100.0;l=f*100.0;m=g*100.0;n=CR(j,g);o=Gt(n);p=GG(n);q=CR(Ee(j*j+g*g),f);r=Gt(q);s=GG(q);t=Cl(b)*3.141592653589793*2.0;u=Gt(t);v=GG(t);w=0;i=0.0*s;e=0.0*r;while(true){if(w>=4)break a;j=((w&2)-1|0)*h;w=w+1|0;x=((w&2)-1|0)*h;y=j*v-x*u;z=x*
v+j*u;ba=y*r+i;bb=e-y*s;bc=bb*o-z*p;bd=z*o+bb*p;Bf(c,k+bc,l+ba,m+bd);}}}d=d+1|0;}Br(c);}
function Q1(a,b){if(a.bM!==null)AKR(a.bM,a);a.rG=(-9999.0);a.rF=(-9999.0);a.rE=(-9999.0);Bgl.n2=b;a.bM=b;a.D7=A8h(b);if(b!==null){ANC(b,a);Jb(a);}}
function Jb(a){var b,c,d,e,f,g,h,i;a:{L();AKk(Be0,a.bO.o.lh);a.r$=a.bO.o.hi;if(a.c9!==null){b=0;while(true){if(b>=a.c9.data.length)break a;ARD(a.c9.data[b]);b=b+1|0;}}}b=64<<(3-a.r$|0);if(b>400)b=400;b=(b/16|0)+1|0;a.ds=b;a.dG=8;a.j_=b;a.c9=J(In,Bj(Bj(a.ds,a.dG),a.j_));a.gO=J(In,Bj(Bj(a.ds,a.dG),a.j_));c=0;d=0;a.qq=0;a.qr=0;a.qs=0;a.s_=a.ds;a.s$=a.dG;a.ta=a.j_;e=0;while(e<a.eK.s){Z(a.eK,e).i4=0;e=e+1|0;}Dy(a.eK);f=0;while(f<a.ds){g=0;while(g<a.dG){h=0;while(h<a.j_){if(a.c9.data[Bj(Bj(h,a.dG)+g|0,a.ds)+f|0]!==
null)Gf(a.iH,a.c9.data[Bj(Bj(h,a.dG)+g|0,a.ds)+f|0].gm);a.c9.data[Bj(Bj(h,a.dG)+g|0,a.ds)+f|0]=Bbt(a.bM,a.iH,f*16|0,g*16|0,h*16|0,16,a.y0+c|0);a.c9.data[Bj(Bj(h,a.dG)+g|0,a.ds)+f|0].JL=0;a.c9.data[Bj(Bj(h,a.dG)+g|0,a.ds)+f|0].xI=1;a.c9.data[Bj(Bj(h,a.dG)+g|0,a.ds)+f|0].fw=1;i=a.c9.data[Bj(Bj(h,a.dG)+g|0,a.ds)+f|0];b=d+1|0;i.Ik=d;KV(a.c9.data[Bj(Bj(h,a.dG)+g|0,a.ds)+f|0]);a.gO.data[Bj(Bj(h,a.dG)+g|0,a.ds)+f|0]=a.c9.data[Bj(Bj(h,a.dG)+g|0,a.ds)+f|0];U(a.eK,a.c9.data[Bj(Bj(h,a.dG)+g|0,a.ds)+f|0]);c=c+3|0;h=h+1
|0;d=b;}g=g+1|0;}f=f+1|0;}if(a.bM!==null){i=a.bM.bi;Tl(a,K(i.d),K(i.j),K(i.e));PY(a.gO,AYG(i));}}
function ACA(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ARf(Bko,a.bM,a.iG,a.bO.e$,a.bO.f,d);AG_(Bgl,a.bM,a.iG,a.bO.e$,a.bO.f,a.bO.o,d);a.s8=0;a.lj=0;a.xq=0;e=a.bM.bi;f=e.cs;g=e.d-e.cs;h=d;BkE=f+g*h;BkF=e.b7+(e.j-e.b7)*h;BkG=e.ct+(e.e-e.ct)*h;BkH=e.cs+(e.d-e.cs)*h;BkI=e.b7+(e.j-e.b7)*h;BkJ=e.ct+(e.e-e.ct)*h;i=a.bM.dZ;a.s8=i.s;if(a.bO.o.du)Bc(2912);j=0;while
(true){if(j>=i.s){j=0;if(j>=a.iH.s)return;b=Bko;c=Z(a.iH,j);$p=1;continue _;}k=Z(i,j);if(Sd(k,b)&&MI(c,k.L)){if(k!==a.bM.bi)break;if(a.bO.o.cC)break;}j=j+1|0;}a.lj=a.lj+1|0;e=Bgl;$p=2;continue _;case 1:YX(b,c,d);if(C()){break _;}j=j+1|0;if(j>=a.iH.s)return;b=Bko;c=Z(a.iH,j);continue _;case 2:AM9(e,k,d);if(C()){break _;}while(true){j=j+1|0;if(j>=i.s){j=0;if(j>=a.iH.s)return;b=Bko;c=Z(a.iH,j);$p=1;continue _;}k=Z(i,j);if(!Sd(k,b))continue;if(!MI(c,k.L))continue;if(k!==a.bM.bi)break;if(!a.bO.o.cC)continue;else break;}a.lj
=a.lj+1|0;e=Bgl;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ALi(a){var b;b=new S;V(b);return T(Be(H(Be(H(Be(H(Be(H(Be(H(b,B(378)),a.sv),B(23)),a.sc),B(379)),a.rY),B(380)),a.DQ),B(381)),a.qA));}
function X2(a){var b;b=new S;V(b);return T(Be(H(Be(H(Be(H(Be(H(b,B(382)),a.lj),B(23)),a.s8),B(383)),a.xq),B(384)),(a.s8-a.xq|0)-a.lj|0));}
function Tl(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;c=b+(-8)|0;d=d+(-8)|0;a.qq=2147483647;a.qr=2147483647;a.qs=2147483647;a.s_=(-2147483648);a.s$=(-2147483648);a.ta=(-2147483648);e=a.ds*16|0;f=e/2|0;g=0;h=e-1|0;while(g<a.ds){i=g*16|0;j=(i+f|0)-c|0;if(j<0)j=j-h|0;i=i-Bj(j/e|0,e)|0;if(i<a.qq)a.qq=i;if(i>a.s_)a.s_=i;k=0;while(k<a.j_){l=k*16|0;m=(l+f|0)-d|0;if(m<0)m=m-h|0;j=l-Bj(m/e|0,e)|0;if(j<a.qs)a.qs=j;if(j>a.ta)a.ta=j;n=0;while(n<a.dG){o=n*16|0;if(o<a.qr)a.qr=o;if(o>a.s$)a.s$=o;p=a.c9.data[Bj(Bj(k,a.dG)+n|0,
a.ds)+g|0];q=p.i4;Si(p,i,o,j);if(!q&&p.i4)U(a.eK,p);n=n+1|0;}k=k+1|0;}g=g+1|0;}}
function Vp(a,b,c,d){var e,f,g;if(a.bO.o.hi!=a.r$)Jb(a);if(!c){a.sc=0;a.rY=0;a.DQ=0;a.sv=0;a.qA=0;}e=b.d-a.rG;f=b.j-a.rF;g=b.e-a.rE;if(e*e+f*f+g*g>16.0){a.rG=b.d;a.rF=b.j;a.rE=b.e;Tl(a,K(b.d),K(b.j),K(b.e));PY(a.gO,AYG(b));}return 0+YB(a,0,a.gO.data.length,c,d)|0;}
function YB(a,b,c,d,e){var f,g,h,i,j,k,l;Dy(a.oY);f=0;while(b<c){if(!d){a.sc=a.sc+1|0;if(a.gO.data[b].g2.data[d])a.qA=a.qA+1|0;else if(a.gO.data[b].fw)a.sv=a.sv+1|0;else a.rY=a.rY+1|0;}if(!a.gO.data[b].g2.data[d]&&a.gO.data[b].fw&&a.gO.data[b].xI&&PI(a.gO.data[b],d)>=0){U(a.oY,a.gO.data[b]);f=f+1|0;}b=b+1|0;}g=a.bO.f;h=g.cs+(g.d-g.cs)*e;i=g.b7+(g.j-g.b7)*e;j=g.ct+(g.e-g.ct)*e;k=0;while(k<a.oY.s){l=Z(a.oY,k);B3();Bw(l.By-h,l.Em-i,l.Dn-j);FU(PI(l,d));BD();k=k+1|0;}return f;}
function HV(a){if(a.bO.o.du)return;a.pv=a.pv+1|0;}
function ADa(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;Bc(3553);c=OR(a.bM,b);d=c.x;e=c.z;f=c.w;if(a.bO.o.dy){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}F8(d,e,f);BA();h=BeI;Gw(0);if(!a.bO.o.du)Ba(2912);F8(d,e,f);FU(a.xK);Ba(3553);Bc(2912);Bc(3008);Ba(3042);Df(1,1);B3();BU(1.0,1.0,1.0,1.0);Bw(0.0,0.0,0.0);Bv(0.0,
0.0,0.0,1.0);Bv(Hz(a.bM,b)*360.0,1.0,0.0,0.0);i=3553;c=a.iG;j=B(385);$p=1;case 1:$z=AHr(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-30.0),100.0,(-30.0),0.0,0.0);G(h,30.0,100.0,(-30.0),1.0,0.0);G(h,30.0,100.0,30.0,1.0,1.0);G(h,(-30.0),100.0,30.0,0.0,1.0);Br(h);i=3553;c=a.iG;j=B(386);$p=2;case 2:$z=AHr(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-20.0),(-100.0),20.0,1.0,1.0);G(h,20.0,(-100.0),20.0,0.0,1.0);G(h,20.0,(-100.0),(-20.0),0.0,0.0);G(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Br(h);Bc(3553);g=AJp(a.bM,
b);if(g>0.0){BU(g,g,g,g);FU(a.op);}BU(1.0,1.0,1.0,1.0);Bc(3042);Ba(3008);if(!a.bO.o.du)Ba(2912);BD();F8(d*0.20000000298023224+0.03999999910593033,e*0.20000000298023224+0.03999999910593033,f*0.6000000238418579+0.10000000149011612);Bc(3553);FU(a.xj);Ba(3553);Gw(1);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function YL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;if(a.bO.o.lh){$p=2;continue _;}Bc(2884);c=a.bO.f.b7;d=a.bO.f.j-a.bO.f.b7;e=b;f=c+d*e;g=32;BA();h=BeI;i=3553;j=a.iG;k
=B(387);$p=1;case 1:$z=AHr(j,k);if(C()){break _;}l=$z;Cp(i,l);Ba(3042);Df(770,771);j=S1(a.bM,b);m=j.x;n=j.z;o=j.w;if(a.bO.o.dy){p=m*30.0;m=(p+n*59.0+o*11.0)/100.0;n=(p+n*70.0)/100.0;o=(p+o*70.0)/100.0;}d=a.bM.bi.bS+(a.bM.bi.d-a.bM.bi.bS)*e+(a.pv+b)*0.029999999329447746;e=a.bM.bi.bR+(a.bM.bi.e-a.bM.bi.bR)*e;l=K(d/2048.0);q=K(e/2048.0);c=d-(l*2048|0);d=e-(q*2048|0);p=120.0-f+0.33000001311302185;r=c*4.8828125E-4;s=d*4.8828125E-4;Bz(h);Gz(h,m,n,o,0.800000011920929);t=p;u=(-256);while(u<256){v=(-256);while(v<256)
{i=u+0|0;w=i;x=v+g|0;y=x;c=i*4.8828125E-4+r;d=x*4.8828125E-4+s;G(h,w,t,y,c,d);i=u+g|0;e=i;z=i*4.8828125E-4+r;G(h,e,t,y,z,d);i=v+0|0;d=i;y=i*4.8828125E-4+s;G(h,e,t,d,z,y);G(h,w,t,d,c,y);v=x;}u=u+g|0;}Br(h);BU(1.0,1.0,1.0,1.0);Bc(3042);Ba(2884);return;case 2:ABa(a,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function ABa(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:if(a.bO.o.du)return;Bc(2884);c=a.bO.f.b7;d=a.bO.f.j-a.bO.f.b7;e=b;f=c+d*e;BA();g=BeI;h=12.0;c=(a.bM.bi.bS+(a.bM.bi.d-a.bM.bi.bS)*e+(a.pv+b)*0.029999999329447746)/12.0;d=(a.bM.bi.bR+(a.bM.bi.e-a.bM.bi.bR)*e)/12.0+0.33000001311302185;i=108.0-f+0.33000001311302185;j=K(c/2048.0);k=K(d/2048.0);e=c-(j*2048|0);d=d-(k*2048|0);l=3553;m=a.iG;n=B(387);$p=1;case 1:$z=AHr(m,n);if(C()){break _;}o=$z;Cp(l,o);Ba(3042);Df(770,771);m=S1(a.bM,b);p=m.x;q=m.z;r=m.w;if(a.bO.o.dy){b=p*30.0;p=(b+q*59.0+r*11.0)/100.0;q=(b+q
*70.0)/100.0;r=(b+r*70.0)/100.0;}s=K(e)*0.00390625;t=K(d)*0.00390625;u=e-K(e);v=d-K(d);CC(h,1.0,h);o=0;k=R(i,(-5.0));w=i+0.0;x=R(i,5.0);b=i+4.0;d=b-9.765625E-4;y=b;while(o<2){if(o)DO(1,1,1,1);else DO(0,0,0,0);z=(-2);while(z<=3){ba=(-2);while(ba<=3){Bz(g);bb=z*8|0;bc=ba*8|0;bd=bb-u;be=bc-v;if(k>0){Gz(g,p*0.699999988079071,q*0.699999988079071,r*0.699999988079071,0.800000011920929);Dd(g,0.0,(-1.0),0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,w,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625
+s;G(g,bh,w,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);}if(x<=0){Gz(g,p,q,r,0.800000011920929);Dd(g,0.0,1.0,0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,d,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;G(g,bh,d,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,d,e,bi,bg);G(g,c,d,e,bf,bg);}a:{Gz(g,p*0.8999999761581421,q*0.8999999761581421,r*0.8999999761581421,0.800000011920929);if(z>(-1)){Dd(g,(-1.0),0.0,0.0);bj=0;e=be+8.0;bg=(bc+8.0)*0.00390625
+t;bh=be+0.0;bi=(bc+0.0)*0.00390625+t;while(true){if(bj>=8)break a;b=bj;c=bd+b+0.0;bf=(bb+b+0.5)*0.00390625+s;G(g,c,w,e,bf,bg);G(g,c,y,e,bf,bg);G(g,c,y,bh,bf,bi);G(g,c,w,bh,bf,bi);bj=bj+1|0;}}}b:{if(z<=1){Dd(g,1.0,0.0,0.0);bk=0;bf=be+8.0;bh=(bc+8.0)*0.00390625+t;bi=be+0.0;c=(bc+0.0)*0.00390625+t;while(true){if(bk>=8)break b;b=bk;e=bd+b+1.0-9.765625E-4;bg=(bb+b+0.5)*0.00390625+s;G(g,e,w,bf,bg,bh);G(g,e,y,bf,bg,bh);G(g,e,y,bi,bg,c);G(g,e,w,bi,bg,c);bk=bk+1|0;}}}c:{Gz(g,p*0.800000011920929,q*0.800000011920929,
r*0.800000011920929,0.800000011920929);if(ba>(-1)){Dd(g,0.0,0.0,(-1.0));bj=0;c=bd+0.0;bf=(bb+0.0)*0.00390625+s;bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;while(true){if(bj>=8)break c;b=bj;e=be+b+0.0;bg=(bc+b+0.5)*0.00390625+t;G(g,c,y,e,bf,bg);G(g,bh,y,e,bi,bg);G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);bj=bj+1|0;}}}d:{if(ba<=1){Dd(g,0.0,0.0,1.0);bk=0;bi=bd+0.0;e=(bb+0.0)*0.00390625+s;bg=bd+8.0;bh=(bb+8.0)*0.00390625+s;while(true){if(bk>=8)break d;b=bk;c=be+b+1.0-9.765625E-4;bf=(bc+b+0.5)*0.00390625+t;G(g,bi,y,c,e,bf);G(g,bg,
y,c,bh,bf);G(g,bg,w,c,bh,bf);G(g,bi,w,c,e,bf);bk=bk+1|0;}}}Br(g);ba=ba+1|0;}z=z+1|0;}o=o+1|0;}BU(1.0,1.0,1.0,1.0);Bc(3042);Ba(2884);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function AIh(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.eK;e=new V9;e.ye=b;RA(d,e);f=a.eK.s-1|0;g=a.eK.s;h=0;a:{while(h<g){d=Z(a.eK,f-h|0);if(!c){if(G6(d,b)<=1024.0)break a;if(!d.fw){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fw)break a;h=h+1|0;}return a.eK.s?0:1;}$p=1;case 1:ADg(d);if(C()){break _;}H$(a.eK,d);d.i4=0;a:{while(true){h=h+1|0;if(h>=g)break;d=Z(a.eK,f-h|0);if
(!c){if(G6(d,b)<=1024.0)break a;if(!d.fw){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fw)break a;}return a.eK.s?0:1;}continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;a:{BA();g=BeI;Ba(3042);Ba(3008);Df(770,1);BU(1.0,1.0,1.0,(Bq(Long_toNumber(B$())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){if(a.tJ<=0.0)break a;Df(774,768);e=a.iG;h=B(179);$p=2;continue _;}if(e!==null){Df(770,771);i=Bq(Long_toNumber(B$())
/100.0)*0.20000000298023224+0.800000011920929;BU(i,i,i,Bq(Long_toNumber(B$())/200.0)*0.20000000298023224+0.5);b=a.iG;e=B(179);$p=1;continue _;}}Bc(3042);Bc(3008);return;case 1:$z=AHr(b,e);if(C()){break _;}j=$z;Cp(3553,j);Bc(3042);Bc(3008);return;case 2:$z=AHr(e,h);if(C()){break _;}k=$z;Cp(3553,k);BU(1.0,1.0,1.0,0.5);B3();e=a.bM;d=c.h$;k=c.h_;j=c.ia;$p=3;case 3:$z=ACv(e,d,k,j);if(C()){break _;}j=$z;if(j<=0)h=null;else{L();h=BeM.data[j];}Bc(3008);OH((-3.0),(-3.0));Ba(32823);Bz(g);l=b.cs;m=b.d-b.cs;n=f;E_(g, -(l
+m*n), -(b.b7+(b.j-b.b7)*n), -(b.ct+(b.e-b.ct)*n));ADm(g);if(h===null){L();h=BeS;}b=a.D7;d=c.h$;k=c.h_;j=c.ia;o=240+(a.tJ*10.0|0)|0;$p=4;case 4:AMw(b,h,d,k,j,o);if(C()){break _;}Br(g);E_(g,0.0,0.0,0.0);OH(0.0,0.0);Bc(32823);Ba(3008);Gw(1);BD();Bc(3042);Bc(3008);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AGd(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;if(!d&&!c.k$){Ba(3042);Df(770,771);BU(0.0,0.0,0.0,0.4000000059604645);Bc(3553);Gw(0);e=a.bM;d=c.h$;g=c.h_;h=c.ia;$p=1;continue _;}return;case 1:$z=ACv(e,d,g,h);if(C()){break _;}g=$z;if(g<=0){Gw(1);Ba(3553);Bc(3042);return;}i=b.cs;j=b.d-b.cs;k=f;i=i+j*k;j=b.b7+(b.j-b.b7)*k;k=b.ct
+(b.e-b.ct)*k;L();b=BeM.data[g];e=a.bM;d=c.h$;g=c.h_;h=c.ia;$p=2;case 2:$z=b.oS(e,d,g,h);if(C()){break _;}b=$z;b=Ub(Dv(b,0.0020000000949949026,0.0020000000949949026,0.0020000000949949026), -i, -j, -k);if(!a.bO.o.du){BA();c=BeI;Gm(c,3);Bf(c,b.R,b.M,b.S);Bf(c,b.V,b.M,b.S);Bf(c,b.V,b.M,b.W);Bf(c,b.R,b.M,b.W);Bf(c,b.R,b.M,b.S);Br(c);Gm(c,3);Bf(c,b.R,b.U,b.S);Bf(c,b.V,b.U,b.S);Bf(c,b.V,b.U,b.W);Bf(c,b.R,b.U,b.W);Bf(c,b.R,b.U,b.S);Br(c);Gm(c,1);Bf(c,b.R,b.M,b.S);Bf(c,b.R,b.U,b.S);Bf(c,b.V,b.M,b.S);Bf(c,b.V,b.U,b.S);Bf(c,
b.V,b.M,b.W);Bf(c,b.V,b.U,b.W);Bf(c,b.R,b.M,b.W);Bf(c,b.R,b.U,b.W);Br(c);}Gw(1);Ba(3553);Bc(3042);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Tq(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=GM(b,16);i=GM(c,16);j=GM(d,16);k=GM(e,16);l=GM(f,16);m=GM(g,16);while(h<=k){n=h%a.ds|0;if(n<0)n=n+a.ds|0;o=i;while(o<=l){p=o%a.dG|0;if(p<0)p=p+a.dG|0;q=j;while(q<=m){r=q%a.j_|0;if(r<0)r=r+a.j_|0;s=Bj(Bj(r,a.dG)+p|0,a.ds)+n|0;t=a.c9.data[s];if(!t.i4)U(a.eK,t);KV(t);q=q+1|0;}o=o+1|0;}h=h+1|0;}}
function Rp(a,b,c,d){Tq(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AOF(a,b,c,d,e,f,g){Tq(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function ARH(a,b,c){var d;d=0;while(d<a.c9.data.length){if(!AHu(a.c9.data[d])&&!(a.c9.data[d].fw&&(d+a.q8|0)&15))AR9(a.c9.data[d],b);d=d+1|0;}a.q8=a.q8+1|0;}
function AC0(a,b,c,d,e,f,g){return;}
function AH2(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;if(a.bO.o.du)return;i=a.bM.bi.d-c;j=a.bM.bi.j-d;k=a.bM.bi.e-e;if(i*i+j*j+k*k<=256.0){if(b===B(213)){l=a.bO.c6;m=new SB;FD(m,a.bM,c,d,e,f,g,h);m.h0=1.0;m.id=1.0;m.ip=1.0;m.e7=32;D2(m,0.019999999552965164,0.019999999552965164);m.dr=m.dr*(N(m.m)*0.6000000238418579+0.20000000298023224);m.g=f*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.i=g*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.h=h*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.cw
=8.0/(BP()*0.8+0.2)|0;Em(l,m);}else if(b===B(256))Em(a.bO.c6,A77(a.bM,c,d,e,1.0));else if(b===B(223)){b=a.bO.c6;l=new Q2;FD(l,a.bM,c,d,e,f,g,h);l.g=f+(BP()*2.0-1.0)*0.05000000074505806;l.i=g+(BP()*2.0-1.0)*0.05000000074505806;l.h=h+(BP()*2.0-1.0)*0.05000000074505806;n=N(l.m)*0.30000001192092896+0.699999988079071;l.ip=n;l.id=n;l.h0=n;l.dr=N(l.m)*N(l.m)*6.0+1.0;l.cw=(16.0/(N(l.m)*0.8+0.2)|0)+2|0;Em(b,l);}else if(b!==B(257)){if(b===B(254))Em(a.bO.c6,BcF(a.bM,c,d,e));else if(b===B(214))Em(a.bO.c6,Bcs(a.bM,c,d,e,
f,g,h));else if(b===B(255))Em(a.bO.c6,A77(a.bM,c,d,e,2.5));}else{b=a.bO.c6;l=new O3;FD(l,a.bM,c,d,e,f,g,h);l.g=l.g*0.009999999776482582+f;l.i=l.i*0.009999999776482582+g;l.h=l.h*0.009999999776482582+h;N(l.m);N(l.m);N(l.m);N(l.m);N(l.m);N(l.m);l.DO=l.dr;l.ip=1.0;l.id=1.0;l.h0=1.0;l.cw=(8.0/(BP()*0.8+0.2)|0)+4|0;l.o4=1;l.e7=48;Em(b,l);}}}
function A$o(a,b){return;}
function ATp(a,b){return;}
function VC(a){var b;b=0;while(b<a.c9.data.length){if(a.c9.data[b].on){if(!a.c9.data[b].i4)U(a.eK,a.c9.data[b]);KV(a.c9.data[b]);}b=b+1|0;}}
function AG$(){var a=this;CS.call(a);a.vd=0.0;a.yt=null;a.t6=null;}
function LN(){var a=new AG$();A4n(a);return a;}
function A4n(a){var b,c;DR(a);a.vd=0.0;b=J(B4,106);c=b.data;c[0]=B(388);c[1]=B(389);c[2]=B(390);c[3]=B(391);c[4]=B(392);c[5]=B(393);c[6]=B(394);c[7]=B(395);c[8]=B(396);c[9]=B(397);c[10]=B(398);c[11]=B(399);c[12]=B(400);c[13]=B(401);c[14]=B(402);c[15]=B(403);c[16]=B(404);c[17]=B(405);c[18]=B(406);c[19]=B(407);c[20]=B(408);c[21]=B(409);c[22]=B(410);c[23]=B(411);c[24]=B(412);c[25]=B(413);c[26]=B(414);c[27]=B(415);c[28]=B(416);c[29]=B(417);c[30]=B(418);c[31]=B(419);c[32]=B(420);c[33]=B(421);c[34]=B(422);c[35]=B(423);c[36]
=B(424);c[37]=B(425);c[38]=B(426);c[39]=B(427);c[40]=B(428);c[41]=B(429);c[42]=B(430);c[43]=B(431);c[44]=B(432);c[45]=B(433);c[46]=B(434);c[47]=B(435);c[48]=B(436);c[49]=B(437);c[50]=B(409);c[51]=B(438);c[52]=B(439);c[53]=B(440);c[54]=B(441);c[55]=B(442);c[56]=B(443);c[57]=B(444);c[58]=B(445);c[59]=B(446);c[60]=B(447);c[61]=B(448);c[62]=B(449);c[63]=B(450);c[64]=B(451);c[65]=B(452);c[66]=B(453);c[67]=B(454);c[68]=B(455);c[69]=B(456);c[70]=B(457);c[71]=B(458);c[72]=B(459);c[73]=B(460);c[74]=B(461);c[75]=B(462);c[76]
=B(463);c[77]=B(464);c[78]=B(465);c[79]=B(466);c[80]=B(467);c[81]=B(468);c[82]=B(469);c[83]=B(470);c[84]=B(471);c[85]=B(472);c[86]=B(473);c[87]=B(474);c[88]=B(475);c[89]=B(476);c[90]=B(477);c[91]=B(478);c[92]=B(479);c[93]=B(480);c[94]=B(481);c[95]=B(482);c[96]=B(483);c[97]=B(484);c[98]=B(485);c[99]=B(486);c[100]=B(487);c[101]=B(488);c[102]=B(489);c[103]=B(490);c[104]=B(491);c[105]=B(492);a.yt=b;a.t6=a.yt.data[BP()*a.yt.data.length|0];}
function A5n(a){a.vd=a.vd+0.009999999776482582;}
function ANK(a,b,c){return;}
function AIq(a){Dy(a.bG);U(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bD/4|0)+48|0,B(493)));U(a.bG,Dj(2,(a.bm/2|0)-100|0,(a.bD/4|0)+72|0,B(494)));U(a.bG,Dj(3,(a.bm/2|0)-100|0,(a.bD/4|0)+96|0,B(495)));U(a.bG,Dj(0,(a.bm/2|0)-100|0,((a.bD/4|0)+120|0)+12|0,B(496)));Z(a.bG,1).gC=0;Z(a.bG,2).gC=0;if(a.J.k2===null)Z(a.bG,1).gC=0;}
function ACp(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cm){c=a.J;d=AIL(a,a.J.o);$p=1;continue _;}if(b.cm!=1)return;b=a.J;c=A$U(a);$p=2;continue _;case 1:ADT(c,d);if(C()){break _;}if(b.cm!=1)return;b=a.J;c=A$U(a);$p=2;case 2:ADT(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ZB(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABf(a);if(C()){break _;}BA();e=BeI;f=3553;g=a.J.bo;h=B(497);$p=2;case 2:$z=AHr(g,h);if(C()){break _;}i=$z;Cp(f,i);BU(1.0,1.0,1.0,1.0);ES(e,16777215);CH(a,(a.bm-256|0)/2|0,30,0,0,256,49);B3();Bw((a.bm/2|0)+90|0,70.0,0.0);Bv((-20.0),0.0,0.0,1.0);j=Bq(Long_toNumber(Long_rem(B$(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Dw(a.bZ,a.t6)+32|0);CC(k,k,k);DG(a,a.bZ,a.t6,0,(-8),16776960);BD();Cy(a.bZ,B(498),(a.bm-Dw(a.bZ,B(498))|0)-2|0,a.bD-10|0,16777215);l=Kv();m=JX();n=Long_sub(l,Kc());g=new S;V(g);e=T(H(C6(H(C6(H(g,B(499)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(500)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Cy(a.bZ,e,(a.bm-Dw(a.bZ,e)|0)-2|0,2,8421504);g=new S;V(g);e=T(H(C6(H(C6(H(g,
B(502)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(503)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Cy(a.bZ,e,(a.bm-Dw(a.bZ,e)|0)-2|0,12,8421504);$p=3;case 3:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function OZ(){var a=this;D.call(a);a.mX=null;a.cD=null;a.jf=null;a.su=null;}
function Em(a,b){var c;c=b.xx();U(a.cD.data[c],b);}
function AAW(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(b<3){c=0;if(c<a.cD.data[b].s){d=Z(a.cD.data[b],c);$p=1;continue _;}b=b+1|0;}return;case 1:d.ep();if(C()){break _;}if(!d.cR)e=c;else{d=a.cD.data[b];e=c+(-1)|0;Eo(d,c);}c=e+1|0;while(true){if(c<a.cD.data[b].s){d=Z(a.cD.data[b],c);continue _;}b=b+1|0;if(b>=3)break;c=0;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ABb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=BC(b.v*3.1415927410125732/180.0);e=Bq(b.v*3.1415927410125732/180.0);f= -e*Bq(b.I*3.1415927410125732/180.0);g=d*Bq(b.I*3.1415927410125732/180.0);h=BC(b.I*3.1415927410125732/180.0);i=b.cs;j=b.d-b.cs;k=c;BkK=i+j*k;BkL=b.b7+(b.j-b.b7)*k;BkM=b.ct
+(b.e-b.ct)*k;l=0;while(l<2){if(a.cD.data[l].s){if(!l){b=a.jf;m=B(505);$p=1;continue _;}if(l==1){b=a.jf;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeI;Bz(m);n=0;if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);$p=3;continue _;}Br(m);}l=l+1|0;}return;case 1:$z=AHr(b,m);if(C()){break _;}p=$z;a:while(true){if(l==1){b=a.jf;m=B(179);$p=2;continue _;}Cp(3553,p);BA();m=BeI;Bz(m);n=0;if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);$p=3;continue _;}Br(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].s)continue;else break;}p
=0;if(!l){b=a.jf;m=B(505);continue _;}}return;case 2:$z=AHr(b,m);if(C()){break _;}p=$z;a:while(true){Cp(3553,p);BA();m=BeI;Bz(m);n=0;if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);$p=3;continue _;}Br(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].s)continue;else break;}p=0;if(!l){b=a.jf;m=B(505);$p=1;continue _;}if(l==1){b=a.jf;m=B(179);continue _;}}return;case 3:o.kT(m,c,d,h,e,f,g);if(C()){break _;}n=n+1|0;a:while(true){if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);continue _;}Br(m);while(true){l=l+1|0;if(l>=
2)break a;if(!a.cD.data[l].s)continue;else break;}if(!l){b=a.jf;m=B(505);$p=1;continue _;}if(l==1){b=a.jf;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeI;Bz(m);n=0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ABU(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=2;if(a.cD.data[d].s){BA();e=BeI;f=0;if(f<a.cD.data[d].s){g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;$p=1;continue _;}}return;case 1:g.kT(e,c,h,i,j,k,l);if(C()){break _;}f=f+1|0;if(f>=a.cD.data[d].s)return;g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;continue _;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function O1(a,b){var c;a.mX=b;c=0;while(c<3){Dy(a.cD.data[c]);c=c+1|0;}}
function AEC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.mX;$p=1;case 1:a:{$z=ACv(e,b,c,d);if(C()){break _;}f=$z;if(f){L();e=BeM.data[f];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;Em(a,AY2(a.mX,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,e));l
=l+1|0;}k=k+1|0;}g=g+1|0;}}}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function Y1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.mX;$p=1;case 1:$z=ACv(f,b,c,d);if(C()){break _;}g=$z;if(g){L();h=BeM.data[g];i=b;j=i+Cl(a.su)*(h.dc-h.da-0.20000000298023224)+0.10000000149011612+h.da;k=c;l=k+Cl(a.su)*(h.cF-h.cM-0.20000000298023224)+0.10000000149011612+h.cM;m=d;n=m+Cl(a.su)*(h.dd-h.c_-0.20000000298023224)
+0.10000000149011612+h.c_;if(!e)l=k+h.cM-0.10000000149011612;if(e==1)l=k+h.cF+0.10000000149011612;if(e==2)n=m+h.c_-0.10000000149011612;if(e==3)n=m+h.dd+0.10000000149011612;if(e==4)j=i+h.da-0.10000000149011612;if(e==5)j=i+h.dc+0.10000000149011612;Em(a,X_(APq(AY2(a.mX,j,l,n,0.0,0.0,0.0,h),0.20000000298023224),0.6000000238418579));}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Xx(a){var b;b=new S;V(b);return T(Be(H(b,B(3)),(a.cD.data[0].s+a.cD.data[1].s|0)+a.cD.data[2].s|0));}
function Ns(){var a=this;Gh.call(a);a.g9=null;a.vt=null;a.b2=null;a.FT=null;a.rV=0;a.El=0.0;a.IF=0.0;}
var BkN=null;function API(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=FJ(a.b2.cd,a.b2.bA);g=AEo(f);h=Zd(f);i=a.b2.e$;LD(a.b2.eV);Ba(3042);BU(1.0,1.0,1.0,1.0);c=3553;f=a.b2.bo;j
=B(506);$p=1;case 1:$z=AHr(f,j);if(C()){break _;}d=$z;Cp(c,d);k=a.b2.f.K;a.mV=(-90.0);l=g/2|0;m=l-91|0;n=h-22|0;CH(a,m,n,0,0,182,22);CH(a,(m-1|0)+(k.bL*20|0)|0,n-1|0,0,22,24,22);c=3553;f=a.b2.bo;j=B(507);$p=2;case 2:$z=AHr(f,j);if(C()){break _;}d=$z;Cp(c,d);Ba(3042);Df(775,769);CH(a,l-7|0,(h/2|0)-7|0,0,0,16,16);Bc(3042);o=((a.b2.f.dz/3|0)%2|0)!=1?0:1;if(a.b2.f.dz<10)o=0;p=a.b2.f.bT;q=a.b2.f.tG;NK(a.vt,Long_fromInt(Bj(a.rV,312871)));if(!AJ1(a.b2.cB)){Bc(3042);Ba(32826);B3();Bv(180.0,1.0,0.0,0.0);Hy();BD();r=
0;c=l-90|0;m=(h-16|0)-3|0;if(r>=9){DT();Bc(32826);if(!a.b2.o.lt)Cy(i,B(508),2,2,16777215);else{Cy(i,BL(H(H(H(BX(),B(509)),a.b2.lD),B(27))),2,2,16777215);Cy(i,Mi(a.b2),2,12,16777215);Cy(i,Om(a.b2),2,22,16777215);Cy(i,ML(a.b2),2,32,16777215);s=Kv();t=JX();u=Long_sub(t,Kc());j=BL(H(C6(H(C6(H(C6(H(BX(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hu(a,i,j,(g-Dw(i,
j)|0)-2|0,2,14737632);f=BL(H(C6(H(C6(H(BX(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hu(a,i,f,(g-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CX(a.g9)&&m<10){if(Z(a.g9,m).oB<200)Cy(i,Z(a.g9,m).yz,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;}r=ACZ(a.b2.f);n=0;v=h-32|0;w=l+91|0;d=R(p,4);while(n<10){if(r>0){x=(w-(n*8|0)|0)-9|0;c=R((n*2|0)+1|0,r);if(c<0)CH(a,x,v,34,9,9,9);if(!c)CH(a,
x,v,25,9,9,9);if(c>0)CH(a,x,v,16,9,9,9);}y=0;if(o)y=1;z=m+(n*8|0)|0;c=d>0?v:v+E(a.vt,2)|0;CH(a,z,c,16+(y*9|0)|0,0,9,9);if(o){e=R((n*2|0)+1|0,q);if(e<0)CH(a,z,c,70,0,9,9);if(!e)CH(a,z,c,79,0,9,9);}e=R((n*2|0)+1|0,p);if(e<0)CH(a,z,c,52,0,9,9);if(!e)CH(a,z,c,61,0,9,9);n=n+1|0;}f=a.b2.f;j=BfN;$p=4;continue _;case 3:AEv(a,r,n,m,b);if(C()){break _;}r=r+1|0;if(r>=9){DT();Bc(32826);if(!a.b2.o.lt)Cy(i,B(508),2,2,16777215);else{Cy(i,BL(H(H(H(BX(),B(509)),a.b2.lD),B(27))),2,2,16777215);Cy(i,Mi(a.b2),2,12,16777215);Cy(i,
Om(a.b2),2,22,16777215);Cy(i,ML(a.b2),2,32,16777215);s=Kv();t=JX();u=Long_sub(t,Kc());j=BL(H(C6(H(C6(H(C6(H(BX(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hu(a,i,j,(g-Dw(i,j)|0)-2|0,2,14737632);f=BL(H(C6(H(C6(H(BX(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hu(a,i,f,(g
-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CX(a.g9)&&m<10){if(Z(a.g9,m).oB<200)Cy(i,Z(a.g9,m).yz,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;continue _;case 4:a:{$z=AGE(f,j);if(C()){break _;}c=$z;if(c){c=Nc((a.b2.f.gc-2|0)*10.0/300.0)|0;ba=(Nc(a.b2.f.gc*10.0/300.0)|0)-c|0;x=0;d=c+ba|0;p=v-9|0;while(true){if(x>=d)break a;if(x>=c)CH(a,m+(x*8|0)|0,p,25,18,9,9);else CH(a,m+(x*8|0)|0,p,16,18,9,9);x=x+1|0;}}}Bc(3042);Ba(32826);B3();Bv(180.0,1.0,0.0,0.0);Hy();BD();r=0;c=l-90|0;m=(h-
16|0)-3|0;if(r>=9){DT();Bc(32826);if(!a.b2.o.lt)Cy(i,B(508),2,2,16777215);else{Cy(i,BL(H(H(H(BX(),B(509)),a.b2.lD),B(27))),2,2,16777215);Cy(i,Mi(a.b2),2,12,16777215);Cy(i,Om(a.b2),2,22,16777215);Cy(i,ML(a.b2),2,32,16777215);s=Kv();t=JX();u=Long_sub(t,Kc());j=BL(H(C6(H(C6(H(C6(H(BX(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hu(a,i,j,(g-Dw(i,j)|0)-2|0,2,14737632);f
=BL(H(C6(H(C6(H(BX(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hu(a,i,f,(g-Dw(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CX(a.g9)&&m<10){if(Z(a.g9,m).oB<200)Cy(i,Z(a.g9,m).yz,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function AEv(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.b2.f.K.bg.data[b];if(f===null)return;g=f.mM-e;b=R(g,0.0);if(b>0){B3();h=1.0+g/5.0;i=c+8|0;g=i;j=d+12|0;Bw(g,j,0.0);CC(1.0/h,(h+1.0)/2.0,1.0);Bw( -i, -j,0.0);}k=BkN;l=a.b2.e$;m=a.b2.bo;$p=1;case 1:AGe(k,l,m,f,c,d);if(C()){break _;}if(b>0)BD();Ln(BkN,a.b2.e$,a.b2.bo,f,c,d);return;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AKv(a){var b,c;a.rV=a.rV+1|0;b=0;while(b<a.g9.s){c=Z(a.g9,b);c.oB=c.oB+1|0;b=b+1|0;}}
function Z$(){BkN=X1();}
function Ju(){var a=this;EQ.call(a);a.K=null;a.AI=0;a.k6=0;a.qz=0.0;a.kX=0.0;a.CL=null;a.x9=0;}
function AFU(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKQ(a);if(C()){break _;}a.qz=a.kX;a.kX=0.0;return;default:E$();}}C3().s(a,$p);}
function AK5(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.c4=1.6200000047683716;D2(a,0.6000000238418579,1.7999999523162842);if(a.l!==null){if(a.j>0.0){CT(a,a.d,a.j,a.e);b=a.l;c=a.L;$p=1;continue _;}a.h=0.0;a.i=0.0;a.g=0.0;a.I=0.0;}if(a.l!==null)a.l.bi=a;a.bT=20;a.c2=0;return;case 1:$z=XT(b,a,c);if(C()){break _;}b=$z;if(b.s){a.j=a.j+1.0;if(a.j>0.0){CT(a,a.d,a.j,a.e);b=a.l;c=a.L;continue _;}}a.h=0.0;a.i=0.0;a.g=0.0;a.I=0.0;if(a.l!==null)a.l.bi
=a;a.bT=20;a.c2=0;return;default:E$();}}C3().s(a,b,c,$p);}
function Y4(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.l.i3&&a.bT<20&&!((a.oQ%20|0)*4|0))UO(a,1);AEh(a.K);a.qz=a.kX;$p=1;case 1:ACo(a);if(C()){break _;}b=Ce(a.g*a.g+a.h*a.h);c=Ir( -a.i*0.20000000298023224)*15.0;if(b>0.10000000149011612)b=0.10000000149011612;if(!(a.cx&&a.bT>0))b=0.0;if(!(!a.cx&&a.bT>0))c=0.0;a.kX=a.kX+(b-a.kX)*0.4000000059604645;a.jm=a.jm+(c-a.jm)*0.800000011920929;if(a.bT<=0)return;d
=a.l;e=Dv(a.L,1.0,0.0,1.0);$p=2;case 2:a:{$z=ADJ(d,a,e);if(C()){break _;}d=$z;if(d!==null){f=0;while(true){if(f>=d.s)break a;Z(d,f).xG(a);f=f+1|0;}}}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A4v(a){return a.k6;}
function ALb(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D2(a,0.20000000298023224,0.20000000298023224);CT(a,a.d,a.j,a.e);a.i=0.10000000149011612;if(!DC(a.CL,B(512))){c=a.K;$p=1;continue _;}c=new Cd;BB();Gr(c,BhL,1);d=1;$p=2;continue _;case 1:AIX(c);if(C()){break _;}if(b===null){a.h=0.0;a.g=0.0;}else{a.g= -BC((a.kH+a.v)*3.1415927410125732/180.0)*0.10000000149011612;a.h= -Bq((a.kH+a.v)*3.1415927410125732/180.0)*0.10000000149011612;}a.c4
=0.10000000149011612;return;case 2:AQs(a,c,d);if(C()){break _;}c=a.K;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,$p);}
function AZs(a,b,c){a.k6=a.k6+c|0;}
function ALQ(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;$p=1;case 1:AQs(a,b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AQs(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;d=Hf(a.l,a.d,a.j-0.30000001192092896,a.e,b);d.hc=40;if(c){e=N(a.m)*0.5;f=N(a.m)*3.1415927410125732*2.0;d.g= -Bq(f)*e;d.h=BC(f)*e;d.i=0.20000000298023224;}else{d.g= -Bq(a.v/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732)*0.30000001192092896;d.h=BC(a.v/180.0*3.1415927410125732)
*BC(a.I/180.0*3.1415927410125732)*0.30000001192092896;d.i= -Bq(a.I/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=N(a.m)*3.1415927410125732*2.0;g=0.019999999552965164*N(a.m);h=d.g;i=e;j=GG(i);k=g;d.g=h+j*k;d.i=d.i+(N(a.m)-N(a.m))*0.10000000149011612;d.h=d.h+Gt(i)*k;}b=a.l;$p=1;case 1:AOg(b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AKP(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ADv(a.K,b);b=BfN;$p=1;case 1:$z=AGE(a,b);if(C()){break _;}d=$z;if(d)c=c/5.0;if(!a.cx)c=c/5.0;return c;default:E$();}}C3().s(a,b,c,d,$p);}
function M8(a,b){return ADU(a.K,b);}
function A5e(a){return 0.11999999731779099;}
function Yp(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hn=0;if(a.bT<=0)return 0;if(a.dz>a.oZ/2.0)return 0;if(!(!(b instanceof DQ)&&!(b instanceof Js))){if(!a.l.i3)c=0;if(a.l.i3==1)c=(c/3|0)+1|0;if(a.l.i3==3)c=(c*3|0)/2|0;}d=Bj(c,25-TB(a.K)|0)+a.x9|0;ADZ(a.K,c);c=d/25|0;a.x9=d%25|0;if(!c)return 0;$p=1;case 1:$z=AB1(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,d,$p);}
function AGz(){var a=this;Ju.call(a);a.hY=null;a.k7=null;}
function A6F(a,b,c){var d=new AGz();AYW(d,a,b,c);return d;}
function AYW(a,b,c,d){var e;FC(a,c);a.oZ=20;a.dH=0.0;a.e9=0.0;a.G5=1;a.yr=B(376);a.G4=1;a.D3=0.0;a.E0=null;a.Jt=1.0;a.u0=0;a.Ju=0.0;a.bT=10;a.kH=0.0;a.c2=0;a.dA=0;a.Ck=0;a.Ff=(-1);a.Jz=BP()*0.8999999761581421+0.10000000149011612;a.hn=0;a.hI=0;a.zR=0.0;a.s0=0.699999988079071;a.mF=1;a.In=(BP()+1.0)*0.009999999776482582;CT(a,a.d,a.j,a.e);a.JG=BP()*12398.0;a.v=BP()*3.1415927410125732*2.0;a.G3=1.0;a.rq=0.5;e=new VB;e.bg=J(Cd,36);e.ce=J(Cd,4);e.bL=0;e.nD=a;a.K=e;a.AI=0;a.k6=0;a.x9=0;Kt(a,c.fj+0.5,c.pZ,c.fi+0.5,0.0,
0.0);a.c4=1.6200000047683716;a.bT=20;a.E0=B(513);a.D3=180.0;a.nJ=20;a.yr=B(376);a.k7=b;if(c.bi!==null)Ca(c.bi);c.bi=a;if(d!==null&&d.ok!==null&&Bi(d.ok)>0){b=new S;V(b);a.tK=T(H(H(H(b,B(514)),d.ok),B(515)));}a.CL=d.ok;}
function AAO(a){a.iN=a.hY.kE;a.gD=a.hY.kt;a.hI=a.hY.un;}
function ALk(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOA(a.hY,a);$p=1;case 1:Y4(a);if(C()){break _;}return;default:E$();}}C3().s(a,$p);}
function ARF(a){AOY(a.hY);}
function Eu(a,b,c){APr(a.hY,b,c);}
function ABN(a,b){Ft(b,B(516),a.bT<<16>>16);Ft(b,B(517),a.dF<<16>>16);Ft(b,B(518),a.c2<<16>>16);Ft(b,B(519),a.dA<<16>>16);GA(b,B(520),a.k6);HG(b,B(325),AL4(a.K,L$()));}
function AOV(a,b){var c;a.bT=FK(b,B(516));if(!YZ(b,B(516)))a.bT=10;a.dF=FK(b,B(517));a.c2=FK(b,B(518));a.dA=FK(b,B(519));a.k6=FW(b,B(520));c=Kh(b,B(325));ARl(a.K,c);}
function Y0(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k7;d=BbZ(a.K,b);$p=1;case 1:ADT(c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AI8(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k7;d=new SM;DR(d);d.Ab=B(521);d.f5=0;d.fU=b;$p=1;case 1:ADT(c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ANp(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k7;c=new Xj;d=a.K;Id(c);c.ms=A0A(c,3,3);c.uq=A5f();U(c.c7,A3p(c,c.ms,c.uq,0,124,35));e=0;while(e<3){f=0;while(f<3){U(c.c7,D7(c,c.ms,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){U(c.c7,D7(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){U(c.c7,D7(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:ADT(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AO2(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k7;d=new Wj;e=a.K;Id(d);d.sK=b;U(d.c7,D7(d,b,0,56,17));U(d.c7,D7(d,b,1,56,53));U(d.c7,D7(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){U(d.c7,D7(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){U(d.c7,D7(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:ADT(c,d);if(C()){break _;}return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function Kq(a){return D$(a.K);}
function Jz(a){AFB(a.K,a.K.bL,null);}
function ADu(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ARR(a.K,b);if(c<=0)return;$p=1;case 1:b.fr(a,c);if(C()){break _;}d=Kq(a);if(d!==null&&b instanceof EQ){AEY(d,b);if(d.p<=0)Jz(a);}return;default:E$();}}C3().s(a,b,c,d,$p);}
function RW(a,b){var c,d;c=a.k7.c6;d=new U2;FD(d,a.k7.B,b.d,b.j,b.e,b.g,b.i,b.h);d.p9=0;d.rc=0;d.mB=b;d.hR=a;d.rc=3;d.AS=(-0.5);Em(c,d);}
function ACZ(a){return TB(a.K);}
function Vo(a,b){var c;if(!b.uJ(a)){c=Kq(a);if(c!==null&&b instanceof EQ){AEz(c,b);if(c.p<=0)Jz(a);}}}
function AJE(){D.call(this);}
function BkO(){var a=new AJE();AWa(a);return a;}
function AWa(a){return;}
function AMF(b){Bd();Bee=b;if(b){BdV=0.0;BdW=0.0;setTimeout(Cu(new Qz,"onTimer"),200);}else{Bec=B$();if(Bed)clearTimeout(Bed);Bed=0;BdA.exitPointerLock();}}
function FA(){var b,c;a:{Bd();Bd$=null;if(!PW(BdR)){b=Tj(BdR,0);Bd$=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function Cx(){Bd();return Bd$===null?0:DC($rt_str(Bd$.type),B(522));}
function ARU(){Bd();return Bd$===null?(-1):Bd$.clientX;}
function XR(){Bd();return Bd$===null?(-1):BdC.clientHeight-Bd$.clientY|0;}
function CV(){var b;Bd();if(Bd$===null)b=(-1);else{b=Bd$.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function B9(b){Bd();return Bea.data[b];}
function G3(){Bd();return !DC(B(523),$rt_str(Bd$.type))?0:Bd$.deltaY===0.0?0:Bd$.deltaY<=0.0?1:(-1);}
function Qn(){D.call(this);}
var BkP=null;function BkQ(){var a=new Qn();ANL(a);return a;}
function ANL(a){return;}
function Bq(b){return BkP.data[(b*651.8986206054688|0)&4095];}
function BC(b){return BkP.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function Ea(b){return Ee(b);}
function Ce(b){return Ee(b);}
function K4(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function K(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function GM(b,c){return b>=0?b/c|0: -(( -b-1|0)/c|0)-1|0;}
function AL3(){var b,c,d,e;BkP=$rt_createFloatArray(4096);b=0;while(b<4096){BkP.data[b]=Gt((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=BkP.data;e=c;d[(e*11.377778053283691|0)&4095]=Gt(e*0.01745329238474369);c=c+90|0;}}
function Vn(){var a=this;D.call(a);a.Ex=null;a.bI=0;}
function E7(a,b){var c=new Vn();A1S(c,a,b);return c;}
function A1S(a,b,c){a.Ex=b;a.bI=c;}
function FE(){}
function VB(){var a=this;D.call(a);a.bg=null;a.ce=null;a.bL=0;a.nD=null;}
function D$(a){return a.bg.data[a.bL];}
function S0(a,b){var c;c=0;while(true){if(c>=a.bg.data.length)return (-1);if(a.bg.data[c]!==null&&a.bg.data[c].bB==b)break;c=c+1|0;}return c;}
function RG(a){var b;b=0;while(true){if(b>=a.bg.data.length)return (-1);if(a.bg.data[b]===null)break;b=b+1|0;}return b;}
function ARg(a,b,c){var d;d=S0(a,b);if(d>=0&&d<9)a.bL=d;}
function F7(a,b){if(b>0)b=1;if(b<0)b=(-1);a.bL=a.bL-b|0;while(a.bL<0){a.bL=a.bL+9|0;}while(a.bL>=9){a.bL=a.bL-9|0;}}
function AEh(a){var b,c;b=0;while(b<a.bg.data.length){if(a.bg.data[b]!==null&&a.bg.data[b].mM>0){c=a.bg.data[b];c.mM=c.mM-1|0;}b=b+1|0;}}
function AGM(a,b){var c,d;c=S0(a,b);if(c<0)return 0;d=a.bg.data[c];b=d.p-1|0;d.p=b;if(b<=0)a.bg.data[c]=null;return 1;}
function U$(a,b){var c,d,e,f;if(!b.en){c=b.bB;d=b.p;e=0;a:{while(true){if(e>=a.bg.data.length){e=(-1);break a;}if(a.bg.data[e]!==null&&a.bg.data[e].bB==c&&a.bg.data[e].p<EC(a.bg.data[e])&&a.bg.data[e].p<64)break;e=e+1|0;}}if(e<0)e=RG(a);if(e>=0){if(a.bg.data[e]===null)a.bg.data[e]=Kz(c,0);c=d<=(EC(a.bg.data[e])-a.bg.data[e].p|0)?d:EC(a.bg.data[e])-a.bg.data[e].p|0;if(c>(64-a.bg.data[e].p|0))c=64-a.bg.data[e].p|0;if(c){d=d-c|0;f=a.bg.data[e];f.p=f.p+c|0;a.bg.data[e].mM=5;}}b.p=d;if(!b.p)return 1;}c=RG(a);if(c
<0)return 0;a.bg.data[c]=b;a.bg.data[c].mM=5;return 1;}
function En(a,b,c){var d,e,f;d=a.bg;if(b>=a.bg.data.length){d=a.ce;b=b-a.bg.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].p<=c){e=d[b];d[b]=null;return e;}f=EG(d[b],c);if(!d[b].p)d[b]=null;return f;}
function AFB(a,b,c){var d;d=a.bg;if(b>=a.bg.data.length){d=a.ce;b=b-a.bg.data.length|0;}d.data[b]=c;}
function ADv(a,b){var c;c=1.0;if(a.bg.data[a.bL]!==null)c=c*AFg(a.bg.data[a.bL],b);return c;}
function AL4(a,b){var c,d,e;c=0;while(c<a.bg.data.length){if(a.bg.data[c]!==null){d=Ha();JJ(d,B(524),c<<24>>24);QN(a.bg.data[c],d);Jq(b,d);}c=c+1|0;}e=0;while(e<a.ce.data.length){if(a.ce.data[e]!==null){d=Ha();JJ(d,B(524),(e+100|0)<<24>>24);QN(a.ce.data[e],d);Jq(b,d);}e=e+1|0;}return b;}
function ARl(a,b){var c,d,e;a.bg=J(Cd,36);a.ce=J(Cd,4);c=0;while(c<AOt(b)){d=Fc(b,c);e=LC(d,B(524))&255;if(e>=0&&e<a.bg.data.length)a.bg.data[e]=A$7(d);if(e>=100&&e<(a.ce.data.length+100|0))a.ce.data[e-100|0]=A$7(d);c=c+1|0;}}
function Yq(a){return a.bg.data.length+4|0;}
function RO(a,b){var c;c=a.bg;if(b>=a.bg.data.length){c=a.ce;b=b-a.bg.data.length|0;}return c.data[b];}
function ATq(a){return B(325);}
function AZp(a){return 64;}
function ARR(a,b){var c;c=RO(a,a.bL);return c===null?1:AAk(c,b);}
function ADU(a,b){var c;if(b.b_!==Bg8&&b.b_!==Bhl)return 1;c=RO(a,a.bL);return c===null?0:AN9(c,b);}
function AIg(a,b){return a.ce.data[b];}
function TB(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.ce.data.length){if(a.ce.data[e]!==null&&DL(a.ce.data[e]) instanceof F5){f=Kl(a.ce.data[e]);c=c+(f-a.ce.data[e].en|0)|0;d=d+f|0;b=b+DL(a.ce.data[e]).za|0;}e=e+1|0;}if(!d)return 0;return (Bj(b-1|0,c)/d|0)+1|0;}
function ADZ(a,b){var c;c=0;while(c<a.ce.data.length){if(a.ce.data[c]!==null&&DL(a.ce.data[c]) instanceof F5){FL(a.ce.data[c],b);if(!a.ce.data[c].p)a.ce.data[c]=null;}c=c+1|0;}}
function AIX(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(true){if(b>=a.bg.data.length){b=0;while(b<a.ce.data.length){if(a.ce.data[b]!==null){c=a.nD;d=a.ce.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bg.data[b]!==null)break;b=b+1|0;}c=a.nD;d=a.bg.data[b];e=1;$p=1;case 1:AQs(c,d,e);if(C()){break _;}a.bg.data[b]=null;while(true){b=b+1|0;if(b>=a.bg.data.length){b=0;while(b<a.ce.data.length){if(a.ce.data[b]
!==null){c=a.nD;d=a.ce.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bg.data[b]===null)continue;else break;}c=a.nD;d=a.bg.data[b];e=1;continue _;case 2:AQs(c,d,e);if(C()){break _;}a.ce.data[b]=null;while(true){b=b+1|0;if(b>=a.ce.data.length)break;if(a.ce.data[b]===null)continue;else{c=a.nD;d=a.ce.data[b];e=1;continue _;}}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AAn(a){return;}
function Du(){IZ.call(this);}
function Ex(){var a=this;CS.call(a);a.br=null;a.e_=0;a.fl=0;a.c7=null;}
var BkR=null;function BkS(){var a=new Ex();Id(a);return a;}
function Id(a){DR(a);a.br=null;a.e_=176;a.fl=166;a.c7=Ci();}
function ACg(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABf(a);if(C()){break _;}e=(a.bm-a.e_|0)/2|0;f=(a.bD-a.fl|0)/2|0;$p=2;case 2:a.s3(d);if(C()){break _;}B3();Bv(180.0,1.0,0.0,0.0);Hy();BD();B3();Bw(e,f,0.0);BU(1.0,1.0,1.0,1.0);Ba(32826);g=0;if(g>=a.c7.s){if(a.br===null){Bc(32826);DT();Bc(2896);Bc(2929);a.lu();Ba(2896);Ba(2929);BD();return;}Bw(0.0,
0.0,32.0);h=BkR;i=a.bZ;j=a.J.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e3;l=h.lS;m=h.jO;n=h.jQ;i=i.gx(l);if(i===null){l=h.rW();if(l>=0){Bc(2896);i=a.J.bo;j=a.J.bo;k=B(230);$p=5;continue _;}}j=BkR;k=a.bZ;o=a.J.bo;$p=4;continue _;case 3:AGe(h,i,j,k,b,c);if(C()){break _;}Ln(BkR,a.bZ,a.J.bo,a.br,b,c);Bc(32826);DT();Bc(2896);Bc(2929);a.lu();Ba(2896);Ba(2929);BD();return;case 4:AGe(j,k,o,i,m,n);if(C()){break _;}Ln(BkR,a.bZ,a.J.bo,i,m,n);if(M$(h,b,c)){Bc(2896);Bc(2929);l=h.jO;p=h.jQ;KL(a,
l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c7.s){if(a.br===null){Bc(32826);DT();Bc(2896);Bc(2929);a.lu();Ba(2896);Ba(2929);BD();return;}Bw(0.0,0.0,32.0);h=BkR;i=a.bZ;j=a.J.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e3;l=h.lS;m=h.jO;n=h.jQ;i=i.gx(l);if(i===null){l=h.rW();if(l>=0){Bc(2896);i=a.J.bo;j=a.J.bo;k=B(230);$p=5;continue _;}}j=BkR;k=a.bZ;o=a.J.bo;continue _;case 5:$z=AHr(j,k);if(C()){break _;}p=$z;Ec(i,p);CH(a,m,n,(l%16|0)*16|0,(l/16|
0)*16|0,16,16);Ba(2896);if(M$(h,b,c)){Bc(2896);Bc(2929);l=h.jO;p=h.jQ;KL(a,l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c7.s){if(a.br===null){Bc(32826);DT();Bc(2896);Bc(2929);a.lu();Ba(2896);Ba(2929);BD();return;}Bw(0.0,0.0,32.0);h=BkR;i=a.bZ;j=a.J.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e3;l=h.lS;m=h.jO;n=h.jQ;i=i.gx(l);if(i===null){l=h.rW();if(l>=0){Bc(2896);i=a.J.bo;j=a.J.bo;k=B(230);continue _;}}j=BkR;k=a.bZ;o=a.J.bo;$p=4;continue _;default:
E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AQv(a,b,c){var d,e;d=0;while(true){if(d>=a.c7.s)return null;e=Z(a.c7,d);if(M$(e,b,c))break;d=d+1|0;}return e;}
function AN4(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(d&&d!=1)){e=AQv(a,b,c);if(e!==null){$p=1;continue _;}if(a.br!==null){f=(a.bm-a.e_|0)/2|0;g=(a.bD-a.fl|0)/2|0;if(!(b>=f&&c>=g&&b<(f+a.e_|0)&&c<(g+a.e_|0))){h=a.J.f;if(!d){e=a.br;$p=2;continue _;}if(d==1){e=EG(a.br,1);$p=3;continue _;}}}}return;case 1:a:{AKx(e);if(C()){break _;}i=ARt(e);if(!(i===null&&a.br===null)){if
(i!==null&&a.br===null){g=!d?i.p:(i.p+1|0)/2|0;a.br=e.e3.j6(e.lS,g);if(i.p){$p=4;continue _;}h=null;$p=5;continue _;}if(i===null&&a.br!==null&&e.s7(a.br)){g=d?1:a.br.p;if(g>e.e3.f6())g=e.e3.f6();h=EG(a.br,g);$p=7;continue _;}if(i!==null&&a.br!==null){if(!e.s7(a.br)){if(i.bB!=a.br.bB)break a;if(EC(a.br)<=1)break a;g=i.p;if(g<=0)break a;if((g+a.br.p|0)>EC(a.br))break a;h=a.br;h.p=h.p+g|0;EG(i,g);if(i.p){$p=8;continue _;}h=null;$p=9;continue _;}if(i.bB==a.br.bB){if(i.bB==a.br.bB){if(!d){g=a.br.p;if(g>(e.e3.f6()
-i.p|0))g=e.e3.f6()-i.p|0;if(g>(EC(a.br)-i.p|0))g=EC(a.br)-i.p|0;EG(a.br,g);if(!a.br.p)a.br=null;i.p=i.p+g|0;}else if(d==1){g=1;if(g>(e.e3.f6()-i.p|0))g=e.e3.f6()-i.p|0;if(g>(EC(a.br)-i.p|0))g=EC(a.br)-i.p|0;EG(a.br,g);if(!a.br.p)a.br=null;i.p=i.p+g|0;}}}else if(a.br.p<=e.e3.f6()){h=a.br;$p=6;continue _;}}}}return;case 2:ALQ(h,e);if(C()){break _;}a.br=null;if(d!=1)return;e=EG(a.br,1);$p=3;case 3:ALQ(h,e);if(C()){break _;}if(!a.br.p)a.br=null;return;case 4:e.Jk();if(C()){break _;}return;case 5:ALu(e,h);if(C())
{break _;}$p=4;continue _;case 6:ALu(e,h);if(C()){break _;}a.br=i;return;case 7:ALu(e,h);if(C()){break _;}if(!a.br.p)a.br=null;return;case 8:e.Jk();if(C()){break _;}return;case 9:ALu(e,h);if(C()){break _;}$p=8;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A9G(a,b,c,d){return;}
function AAv(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.J.o.ft.bI)return;d=a.J;e=null;$p=1;case 1:ADT(d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AAY(a){var b,c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.br===null)return;b=a.J.f;c=a.br;$p=1;case 1:ALQ(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function A$0(a){return 0;}
function AJ9(){BkR=X1();}
function APM(){var a=this;Ex.call(a);a.j2=null;a.xC=null;a.AB=0.0;a.Ep=0.0;}
function E6(a){var b=new APM();AZM(b,a);return b;}
function AZM(a,b){var c,d,e,f,g;Id(a);a.j2=A0A(a,2,2);a.xC=A5f();a.pR=1;U(a.c7,A3p(a,a.j2,a.xC,0,144,36));c=0;while(c<2){d=0;while(d<2){U(a.c7,D7(a,a.j2,d+(c*2|0)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.c7;f=new QI;UA(f,a,b,(Yq(b)-1|0)-d|0,8,8+(d*18|0)|0);f.HT=a;f.wl=d;U(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){U(a.c7,D7(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){U(a.c7,D7(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function ALH(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAY(a);if(C()){break _;}b=0;while(b<a.j2.l0){c=Gj(a.j2,b);if(c!==null){d=a.J.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALQ(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=a.j2.l0)break;c=Gj(a.j2,b);if(c===null)continue;else{d=a.J.f;continue _;}}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ATQ(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=(-1);if(e<2&&f<2){h=Gj(a.j2,e+(f*2|0)|0);if(h!==null)g=h.bB;}d[e+(f*3|0)|0]=g;f=f+1|0;}e=e+1|0;}Pj(a.xC,0,RK(Wo(),c));}
function AZ4(a){EE(a.bZ,B(525),86,16,4210752);}
function ADX(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACg(a,b,c,d);if(C()){break _;}a.AB=b;a.Ep=c;return;default:E$();}}C3().s(a,b,c,d,$p);}
function X8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(526);$p=1;case 1:$z=AHr(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Ec(a.J.bo,e);f=(a.bm-a.e_|0)/2|0;g=(a.bD-a.fl|0)/2|0;CH(a,f,g,0,0,a.e_,a.fl);Ba(32826);Ba(2903);B3();b=f+51|0;e=g+75|0;Bw(b,e,50.0);CC((-30.0),30.0,30.0);Bv(180.0,
0.0,0.0,1.0);h=a.J.f.dH;i=a.J.f.v;j=a.J.f.I;k=b-a.AB;l=(e-50|0)-a.Ep;Bv(135.0,0.0,1.0,0.0);Hy();Bv((-135.0),0.0,1.0,0.0);m=l/40.0;Bv( -Ir(m)*20.0,1.0,0.0,0.0);d=a.J.f;n=k/40.0;d.dH=Ir(n)*20.0;a.J.f.v=Ir(n)*40.0;a.J.f.I= -Ir(m)*20.0;Bw(0.0,a.J.f.c4,0.0);d=Bgl;c=a.J.f;m=0.0;n=0.0;o=0.0;b=0.0;p=1.0;$p=2;case 2:AQB(d,c,m,n,o,b,p);if(C()){break _;}a.J.f.dH=h;a.J.f.v=i;a.J.f.I=j;BD();DT();Bc(32826);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function I6(){var a=this;D.call(a);a.qW=0;a.sA=0;a.vD=0;a.vI=0;a.xB=0;a.DJ=0;a.cI=null;a.wi=null;a.wj=null;a.wk=null;a.t$=null;a.ui=null;a.vg=null;a.w$=null;a.vE=null;a.uR=null;a.tU=null;a.uv=null;a.uE=null;a.ws=null;a.t7=null;a.yc=null;a.q$=0;a.pW=0;a.oC=0;a.Gr=0;a.G6=0;a.ub=null;a.uO=null;a.xe=0;a.wZ=null;a.vB=null;a.v_=null;a.yk=null;a.yq=null;a.x3=null;a.mr=null;a.mJ=null;a.vy=0;a.r3=0.0;a.r2=0.0;a.r1=0.0;a.r0=0.0;a.sF=0.0;a.ts=0.0;a.rK=0.0;a.sr=0.0;a.qU=0.0;a.qV=0.0;a.ti=0.0;a.th=0.0;a.tg=0.0;a.tf=0.0;a.sY
=0.0;a.sW=0.0;a.sX=0.0;}
var BkT=null;var BkU=null;function Bac(a,b,c,d,e,f,g){var h=new I6();AIc(h,a,b,c,d,e,f,g);return h;}
function O_(b){var c,d,e,f,g,h,i;c=BkT.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=Bac(b,d,e,f,g,h,i);BkT.data[b]=c;}return c;}
function AIc(a,b,c,d,e,f,g,h){var i,j,k;WG(a);a.wi=null;a.wj=null;a.wk=null;a.t$=null;a.ui=null;a.vg=null;a.w$=null;a.vE=null;a.uR=null;a.tU=null;a.uv=null;a.uE=null;a.ws=null;a.t7=null;a.yc=null;a.xe=0;a.wZ=$rt_createFloatArray(16);a.vB=$rt_createFloatArray(16);a.v_=$rt_createFloatArray(16);a.yk=Ku(M7());a.yq=Ku(M7());a.x3=Ku(M7());a.mr=A2W();a.mJ=A2W();a.vy=0;a.r3=0.0;a.r2=0.0;a.r1=0.0;a.r0=0.0;a.sF=0.0;a.ts=0.0;a.rK=0.0;a.sr=0.0;a.qU=0.0;a.qV=0.0;a.ti=0.0;a.th=0.0;a.tg=0.0;a.tf=0.0;a.sY=0.0;a.sW=0.0;a.sX
=0.0;a.qW=c;a.sA=d;a.vD=e;a.vI=f;a.xB=g;a.DJ=h;if(BkU===null)BkU=AB$(B(527));i=B(3);if(a.qW)i=BL(H(H(BX(),i),B(528)));if(a.sA)i=BL(H(H(BX(),i),B(529)));if(a.vD)i=BL(H(H(BX(),i),B(530)));if(a.vI)i=BL(H(H(BX(),i),B(531)));if(a.xB)i=BL(H(H(BX(),i),B(532)));if(a.DJ)i=BL(H(H(BX(),i),B(533)));i=BL(H(H(BX(),i),BkU));j=OE(35633);O0(j,BL(H(H(H(BX(),PG()),B(534)),i)));WC(j);if(!Ve(j)){Cg(C$(),KJ(BL(H(H(BX(),B(535)),T$(j))),B(158),B(536)));M(Z0(B(537)));}k=OE(35632);O0(k,BL(H(H(H(BX(),PG()),B(538)),i)));WC(k);if(!Ve(k))
{Cg(C$(),KJ(BL(H(H(BX(),B(535)),T$(k))),B(158),B(539)));M(Z0(B(537)));}a.cI=AH0();Sa(a.cI,j);Sa(a.cI,k);b=1;a.q$=0;LW(a.cI,a.q$,B(540));if(!a.sA)a.pW=(-1);else{a.pW=b;LW(a.cI,a.pW,B(541));b=2;}if(!a.qW)a.oC=(-1);else{c=b+1|0;a.oC=b;LW(a.cI,a.oC,B(542));b=c;}a.Gr=(-1);a.G6=b;AAE(a.cI);UJ(a.cI,j);UJ(a.cI,k);Tf(j);Tf(k);if(!AGl(a.cI)){Cg(C$(),KJ(BL(H(H(BX(),B(535)),AHs(a.cI))),B(158),B(543)));M(Z0(B(537)));}VY(a.cI);a.wi=Dq(a.cI,B(544));a.wj=Dq(a.cI,B(545));a.wk=Dq(a.cI,B(546));a.tU=Dq(a.cI,B(547));if(a.vD){a.uv
=Dq(a.cI,B(548));a.t7=Dq(a.cI,B(549));a.yc=Dq(a.cI,B(550));}if(a.vI){a.t$=Dq(a.cI,B(551));a.ui=Dq(a.cI,B(552));a.vg=Dq(a.cI,B(553));a.w$=Dq(a.cI,B(554));a.vE=Dq(a.cI,B(555));a.uR=Dq(a.cI,B(556));}if(a.xB)a.uE=Dq(a.cI,B(557));Q$(Dq(a.cI,B(558)),0);a.ws=Dq(a.cI,B(559));a.ub=O$();a.uO=L8();RQ(a.ub);Hh(34962,a.uO);Rz(a);}
function Rz(a){N6(a.q$);N8(a.q$,3,5126,0,28,0);if(a.sA){N6(a.pW);N8(a.pW,2,5126,0,28,12);}if(a.qW){N6(a.oC);N8(a.oC,4,5121,1,28,20);}}
function AQW(a){VY(a.cI);}
function AT_(a){return;}
function AMq(a,b){if(!Lt(b,a.yk)){NV(GR(a.yk,b),a.wZ);Mh(a.wi,a.wZ);}}
function AM0(a,b){if(!Lt(b,a.yq)){NV(GR(a.yq,b),a.vB);Mh(a.wj,a.vB);}}
function ZV(a,b){if(!Lt(b,a.x3)){NV(GR(a.x3,b),a.v_);Mh(a.wk,a.v_);}}
function ANa(a,b,c){if(!(S9(b,a.mr)&&S9(c,a.mJ))){VE(a.mr,b);VE(a.mJ,c);Lo(a.t7,a.mr.le,a.mr.lf,a.mr.ld);Lo(a.yc,a.mJ.le,a.mJ.lf,a.mJ.ld);}}
function ALm(a,b){if(a.vy!=b){a.vy=b;Q$(a.ui,b%2|0);Ig(a.uR,b/2|0);}}
function AP9(a,b,c,d,e){if(!(a.r3===b&&a.r2===c&&a.r1===d&&a.r0===e)){a.r3=b;a.r2=c;a.r1=d;a.r0=e;Ui(a.t$,a.r3,a.r2,a.r1,a.r0);}}
function APJ(a,b,c){if(!(a.sF===b&&a.ts===c)){a.sF=b;a.ts=c;Ig(a.vg,a.sF);Ig(a.w$,a.ts);}}
function AKI(a,b){if(a.rK!==b){a.rK=b;Ig(a.vE,a.rK);}}
function AIS(a,b){if(a.sr!==b){a.sr=b;Ig(a.uE,a.sr);}}
function AOI(a,b,c){var d,e;if(!(a.qU===b&&a.qV===c)){a.qU=b;a.qV=c;d=a.ws;b=a.qU;c=a.qV;Bd();if(d!==null){e=BdF;d=d.kz;e.uniform2f(d,b,c);}}}
function ALK(a,b,c,d,e){if(!(a.ti===b&&a.th===c&&a.tg===d&&a.tf===e)){a.ti=b;a.th=c;a.tg=d;a.tf=e;Ui(a.tU,a.ti,a.th,a.tg,a.tf);}}
function AB6(a,b,c,d){if(!(a.sY===b&&a.sW===c&&a.sX===d)){a.sY=b;a.sW=c;a.sX=d;Lo(a.uv,a.sY,a.sW,a.sX);}}
function AOP(){BkT=J(I6,128);BkU=null;}
function Rr(){var a=this;D.call(a);a.Bv=0;a.ri=null;a.o0=null;a.lQ=0;a.jL=0;}
function Tg(){var a=this;D.call(a);a.t1=null;a.xs=0;a.Dp=0;a.Fe=0;}
function AHm(){var a=this;D.call(a);a.k$=0;a.h$=0;a.h_=0;a.ia=0;a.hL=0;a.gy=null;a.nC=null;}
function A0z(a,b,c,d,e){var f=new AHm();A55(f,a,b,c,d,e);return f;}
function A0_(a){var b=new AHm();A9y(b,a);return b;}
function A55(a,b,c,d,e,f){a.k$=0;a.h$=b;a.h_=c;a.ia=d;a.hL=e;a.gy=BY(f.x,f.z,f.w);}
function A9y(a,b){a.k$=1;a.nC=b;a.gy=BY(b.d,b.j,b.e);}
function Cd(){var a=this;D.call(a);a.p=0;a.mM=0;a.bB=0;a.en=0;}
function AL0(a){var b=new Cd();AHY(b,a);return b;}
function G2(a,b){var c=new Cd();U6(c,a,b);return c;}
function Qj(a){var b=new Cd();DD(b,a);return b;}
function EL(a,b){var c=new Cd();Gr(c,a,b);return c;}
function Kz(a,b){var c=new Cd();MN(c,a,b);return c;}
function Op(a,b,c){var d=new Cd();A0D(d,a,b,c);return d;}
function A$7(a){var b=new Cd();A1s(b,a);return b;}
function AHY(a,b){U6(a,b,1);}
function U6(a,b,c){MN(a,b.b,c);}
function DD(a,b){Gr(a,b,1);}
function Gr(a,b,c){MN(a,b.cW,c);}
function MN(a,b,c){a.p=0;a.bB=b;a.p=c;}
function A0D(a,b,c,d){a.p=0;a.bB=b;a.p=c;a.en=d;}
function A1s(a,b){a.p=0;AD8(a,b);}
function EG(a,b){a.p=a.p-b|0;return Op(a.bB,b,a.en);}
function DL(a){BB();return Bhb.data[a.bB];}
function DK(a){return DL(a).td;}
function AJe(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=DL(a);$p=1;case 1:$z=h.iO(a,b,c,d,e,f,g);if(C()){break _;}d=$z;return d;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFg(a,b){return DL(a).x4(a,b);}
function ABe(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=DL(a);$p=1;case 1:$z=d.n9(a,b,c);if(C()){break _;}b=$z;return b;default:E$();}}C3().s(a,b,c,d,$p);}
function QN(a,b){Ft(b,B(560),a.bB<<16>>16);JJ(b,B(561),a.p<<24>>24);Ft(b,B(562),a.en<<16>>16);return b;}
function AD8(a,b){a.bB=FK(b,B(560));a.p=LC(b,B(561));a.en=FK(b,B(562));}
function EC(a){return DL(a).eZ;}
function Kl(a){BB();return Bhb.data[a.bB].ff;}
function FL(a,b){a.en=a.en+b|0;if(a.en>Kl(a)){a.p=a.p-1|0;if(a.p<0)a.p=0;a.en=0;}}
function AEY(a,b){BB();Bhb.data[a.bB].sg(a,b);}
function QG(a,b,c,d,e){BB();Bhb.data[a.bB].xY(a,b,c,d,e);}
function AAk(a,b){BB();return Bhb.data[a.bB].n1(b);}
function AN9(a,b){BB();return Bhb.data[a.bB].o7(b);}
function A08(a,b){return;}
function AEz(a,b){BB();Bhb.data[a.bB].yG(a,b);}
function ZJ(){var a=this;D.call(a);a.h4=null;a.l0=0;a.sl=null;}
function A0A(a,b,c){var d=new ZJ();AWs(d,a,b,c);return d;}
function AWs(a,b,c,d){a.l0=Bj(c,d);a.h4=J(Cd,a.l0);a.sl=b;}
function A3n(a){return a.l0;}
function Gj(a,b){return a.h4.data[b];}
function AEW(a,b,c){var d,e;if(a.h4.data[b]===null)return null;if(a.h4.data[b].p<=c){d=a.h4.data[b];a.h4.data[b]=null;a.sl.tp(a);return d;}e=EG(a.h4.data[b],c);if(!a.h4.data[b].p)a.h4.data[b]=null;a.sl.tp(a);return e;}
function A3A(a,b,c){a.h4.data[b]=c;a.sl.tp(a);}
function A8X(a){return 64;}
function ADO(a){return;}
function AAD(){D.call(this);this.m$=null;}
function A5f(){var a=new AAD();ASQ(a);return a;}
function ASQ(a){a.m$=J(Cd,1);}
function A43(a,b){return a.m$.data[b];}
function AWA(a,b,c){var d;if(a.m$.data[b]===null)return null;d=a.m$.data[b];a.m$.data[b]=null;return d;}
function Pj(a,b,c){a.m$.data[b]=c;}
function AYT(a){return 64;}
function ANh(a){return;}
function HL(){var a=this;D.call(a);a.lS=0;a.jO=0;a.jQ=0;a.e3=null;a.p2=null;}
function D7(a,b,c,d,e){var f=new HL();UA(f,a,b,c,d,e);return f;}
function UA(a,b,c,d,e,f){a.p2=b;a.e3=c;a.lS=d;a.jO=e;a.jQ=f;}
function M$(a,b,c){var d,e;d=(a.p2.bm-a.p2.e_|0)/2|0;e=(a.p2.bD-a.p2.fl|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.jO-1|0)&&d<((a.jO+16|0)+1|0)&&c>=(a.jQ-1|0)&&c<((a.jQ+16|0)+1|0)?1:0;}
function AK8(a){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKx(a);if(C()){break _;}return;default:E$();}}C3().s(a,$p);}
function AXe(a,b){return 1;}
function ARt(a){return a.e3.gx(a.lS);}
function ALu(a,b){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e3.jD(a.lS,b);$p=1;case 1:AKx(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function A9P(a){return (-1);}
function AKx(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.e3;$p=1;case 1:b.kk();if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function ADd(){HL.call(this);this.qN=null;}
function A3p(a,b,c,d,e,f){var g=new ADd();A4Q(g,a,b,c,d,e,f);return g;}
function A4Q(a,b,c,d,e,f,g){UA(a,b,d,e,f,g);a.qN=c;}
function A0i(a,b){return 0;}
function AN7(a){var b;b=0;while(b<a.qN.l0){if(Gj(a.qN,b)!==null)AEW(a.qN,b,1);b=b+1|0;}}
function QI(){var a=this;HL.call(a);a.wl=0;a.HT=null;}
function A2Q(a,b){return !(DL(b) instanceof F5)?0:DL(b).zV!=a.wl?0:1;}
function AWu(a){return 15+(a.wl*16|0)|0;}
function V_(){D.call(this);this.DX=null;}
function Sz(){var a=this;D.call(a);a.A0=null;a.vQ=0;}
function M4(){Fk.call(this);}
function ALP(b){var c,d;c=b.data.length;d=new US;Uc(d,c,0,0+c|0);d.xV=0;d.Bs=0;d.wQ=b;return d;}
function AFd(a){EB(a);return a;}
function A2A(a){Gx(a);return a;}
function Dg(){var a=this;D.call(a);a.iD=null;a.Hy=null;a.H1=null;a.md=0.0;a.BY=0.0;}
function BkV(){var a=new Dg();EI(a);return a;}
function EI(a){a.Hy=A$V();a.H1=Ki();a.md=0.0;a.BY=1.0;}
function AKp(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.iD.t0;$p=1;case 1:$z=AHr(c,b);if(C()){break _;}d=$z;Ec(c,d);return;default:E$();}}C3().s(a,b,c,d,$p);}
function APo(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iD.t0;$p=1;case 1:$z=AD2(d,b,c);if(C()){break _;}e=$z;Ec(d,e);return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AGY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(2896);L();g=Bgm.bb;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;B3();Bw(c,d,e);n=b.c1*1.399999976158142;CC(n,n,n);o=B(179);$p
=1;case 1:AKp(a,o);if(C()){break _;}BA();o=BeI;p=1.0;q=0.0;r=b.eO/b.c1;Bv( -a.iD.rp,0.0,1.0,0.0);Bw(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BU(1.0,1.0,1.0,1.0);Bz(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;G(o,c,d,0.0,e,s);G(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;G(o,(-0.5),d,0.0,t,u);G(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Bw(0.0,0.0,(-0.03999999910593033));}Br(o);BD();Ba(2896);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function A8n(b,c,d,e){var f;Bc(3553);BA();f=BeI;BU(1.0,1.0,1.0,1.0);Bz(f);E_(f,c,d,e);Cj(0.0,0.0,(-1.0));Bf(f,b.R,b.U,b.S);Bf(f,b.V,b.U,b.S);Bf(f,b.V,b.M,b.S);Bf(f,b.R,b.M,b.S);Cj(0.0,0.0,1.0);Bf(f,b.R,b.M,b.W);Bf(f,b.V,b.M,b.W);Bf(f,b.V,b.U,b.W);Bf(f,b.R,b.U,b.W);Cj(0.0,(-1.0),0.0);Bf(f,b.R,b.M,b.S);Bf(f,b.V,b.M,b.S);Bf(f,b.V,b.M,b.W);Bf(f,b.R,b.M,b.W);Cj(0.0,1.0,0.0);Bf(f,b.R,b.U,b.W);Bf(f,b.V,b.U,b.W);Bf(f,b.V,b.U,b.S);Bf(f,b.R,b.U,b.S);Cj((-1.0),0.0,0.0);Bf(f,b.R,b.M,b.W);Bf(f,b.R,b.U,b.W);Bf(f,b.R,b.U,
b.S);Bf(f,b.R,b.M,b.S);Cj(1.0,0.0,0.0);Bf(f,b.V,b.M,b.S);Bf(f,b.V,b.U,b.S);Bf(f,b.V,b.U,b.W);Bf(f,b.V,b.M,b.W);E_(f,0.0,0.0,0.0);Br(f);Ba(3553);}
function AUE(a,b){a.iD=b;}
function ANi(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJR(a.iD,b.d,b.j,b.e);if(b.cV<=0)return;$p=1;case 1:AGY(a,b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AIF(){var a=this;Dg.call(a);a.wH=null;a.ie=null;}
function X1(){var a=new AIF();A5u(a);return a;}
function A5u(a){EI(a);a.wH=Ki();a.ie=new DB;a.md=0.15000000596046448;a.BY=0.75;}
function APE(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b.ni;B3();i=Bq((b.mN+g)/10.0+b.yu)*0.10000000149011612+0.10000000149011612;j=((b.mN+g)/20.0+b.yu)*57.2957763671875;k=1;if(b.ni.p>1)k=2;if(b.ni.p>5)k=3;if(b.ni.p>20)k=4;Bw(c,d+
i,e);Ba(32826);if(h.bB<256){L();if(!BeM.data[h.bB].em()){Bv(j,0.0,1.0,0.0);b=B(179);$p=3;continue _;}}CC(0.5,0.5,0.5);l=DK(h);if(h.bB>=256){b=B(230);$p=1;continue _;}b=B(179);$p=2;continue _;case 1:AKp(a,b);if(C()){break _;}BA();m=BeI;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.ie)*2.0-1.0)*0.30000001192092896,(N(a.ie)*2.0-1.0)*0.30000001192092896,(N(a.ie)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iD.rp,0.0,
1.0,0.0);Bz(m);Cj(0.0,1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Br(m);BD();s=s+1|0;}Bc(32826);BD();return;case 2:AKp(a,b);if(C()){break _;}BA();m=BeI;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.ie)*2.0-1.0)*0.30000001192092896,(N(a.ie)*2.0-1.0)*0.30000001192092896,(N(a.ie)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iD.rp,0.0,1.0,0.0);Bz(m);Cj(0.0,
1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Br(m);BD();s=s+1|0;}Bc(32826);BD();return;case 3:AKp(a,b);if(C()){break _;}v=0.25;if(!BeM.data[h.bB].gi()&&h.bB!=BeR.b)v=0.5;CC(v,v,v);n=0;while(n<k){B3();if(n>0)Bw((N(a.ie)*2.0-1.0)*0.20000000298023224/v,(N(a.ie)*2.0-1.0)*0.20000000298023224/v,(N(a.ie)*2.0-1.0)*0.20000000298023224/v);GY(a.wH,BeM.data[h.bB]);BD();n=n+1|0;}Bc(32826);BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,$p);}
function AGe(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d!==null){if(d.bB<256){L();if(!BeM.data[d.bB].em()){g=d.bB;b=B(179);$p=1;continue _;}}if(DK(d)>=0){Bc(2896);if(d.bB>=256){b=B(230);$p=2;continue _;}b=B(179);$p=3;continue _;}}return;case 1:$z=AHr(c,b);if(C()){break _;}h=$z;Ec(c,h);i=BeM.data[g];B3();Bw(e-2|0,f+3|0,0.0);CC(10.0,10.0,10.0);Bw(1.0,0.5,8.0);Bv(210.0,1.0,
0.0,0.0);Bv(45.0,0.0,1.0,0.0);BU(1.0,1.0,1.0,1.0);GY(a.wH,i);BD();return;case 2:$z=AHr(c,b);if(C()){break _;}g=$z;Ec(c,g);WZ(a,e,f,(DK(d)%16|0)*16|0,(DK(d)/16|0)*16|0,16,16);Ba(2896);return;case 3:$z=AHr(c,b);if(C()){break _;}g=$z;Ec(c,g);WZ(a,e,f,(DK(d)%16|0)*16|0,(DK(d)/16|0)*16|0,16,16);Ba(2896);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Ln(a,b,c,d,e,f){var g,h,i,j,k,l;if(d!==null){if(d.p>1){c=new S;V(c);g=T(Be(H(c,B(3)),d.p));Bc(2896);Bc(2929);Cy(b,g,((e+19|0)-2|0)-Dw(b,g)|0,(f+6|0)+3|0,16777215);Ba(2896);Ba(2929);}if(d.en>0){h=13-((d.en*13|0)/Kl(d)|0)|0;i=255-((d.en*255|0)/Kl(d)|0)|0;Bc(2896);Bc(2929);Bc(3553);BA();j=BeI;k=255-i|0;l=k<<16|i<<8;k=(k/4|0)<<16|16128;e=e+2|0;f=f+13|0;N3(a,j,e,f,13,2,0);N3(a,j,e,f,12,1,k);N3(a,j,e,f,h,1,l);Ba(3553);Ba(2896);Ba(2929);BU(1.0,1.0,1.0,1.0);}}}
function N3(a,b,c,d,e,f,g){var h,i,j;Bz(b);ES(b,g);h=c+0|0;i=d+0|0;Bf(b,h,i,0.0);j=d+f|0;Bf(b,h,j,0.0);h=c+e|0;Bf(b,h,j,0.0);Bf(b,h,i,0.0);Br(b);}
function WZ(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;BA();h=BeI;Bz(h);i=b+0|0;j=c+g|0;k=(d+0|0)*0.00390625;l=(e+g|0)*0.00390625;G(h,i,j,0.0,k,l);m=b+f|0;n=(d+f|0)*0.00390625;G(h,m,j,0.0,n,l);l=c+0|0;j=(e+0|0)*0.00390625;G(h,m,l,0.0,n,j);G(h,i,l,0.0,k,j);Br(h);}
function AC5(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APE(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Pb(){var a=this;D.call(a);a.BN=null;a.Ij=0;a.Ig=0;a.Gj=0;a.Hb=0;}
function QB(){var a=this;D.call(a);a.f3=null;a.x_=null;}
function Zp(a,b){var c,d,e,f,g,h,i,j,k,l;if(Hn()===null)Bd8=BdA.createElement("canvas");if(Hn().width<a.f3.width){b=Hn();c=a.f3.width;b.width=c;}if(Hn().height<a.f3.height){b=Hn();c=a.f3.height;b.height=c;}if(JP()===null)Bd9=Hn().getContext("2d");b=JP();d=a.f3.width;e=a.f3.height;b.clearRect(0.0,0.0,d,e);b=JP();c=a.f3;d=a.f3.width;e=a.f3.height;b.drawImage(c,0.0,0.0,d,e);b=JP();d=a.f3.width;e=a.f3.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=Bj(f.width,f.height);WE($rt_str(a.f3.src));if(c.byteLength<(g*4
|0)){CM(a.x_,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.x_;c=new Tg;k=f.width;l=f.height;if(g==Bj(k,l)){c.xs=k;c.Dp=l;c.Fe=1;c.t1=h;CM(b,c);return;}b=new Cb;Bl(b,B(563));M(b);}
function A7p(a,b){Zp(a,b);}
function QA(){var a=this;D.call(a);a.Ej=null;a.E1=null;}
function AJD(a,b){WE($rt_str(a.Ej.src));CM(a.E1,null);}
function A7B(a,b){AJD(a,b);}
function Iw(){M4.call(this);}
function BkW(a,b,c){var d=new Iw();Uc(d,a,b,c);return d;}
function Uc(a,b,c,d){KO(a,b);a.bk=c;a.cy=d;}
function AF$(a){var b,c;if(a.bk<a.cy){b=a.bk;a.bk=b+1|0;return a.ys(b);}c=new Gu;O(c);M(c);}
function NN(a,b){var c,d;if(a.m3()){c=new FV;O(c);M(c);}if(a.bk<a.cy){d=a.bk;a.bk=d+1|0;a.u8(d,b);return a;}c=new Hc;O(c);M(c);}
function Q0(a,b){var c,d;if(b>=0&&b<a.cy)return AOJ(a,b);c=new BO;d=new S;V(d);Bl(c,T(H(Be(H(Be(H(d,B(273)),b),B(244)),a.cy),B(27))));M(c);}
function AQZ(a,b,c){var d,e;if(a.m3()){d=new FV;O(d);M(d);}if(b>=0&&b<a.cy){ANH(a,b,c);return a;}e=new BO;d=new S;V(d);Bl(e,T(H(Be(H(Be(H(d,B(273)),b),B(244)),a.cy),B(27))));M(e);}
function AXS(a){return a.m3();}
function US(){var a=this;Iw.call(a);a.Bs=0;a.xV=0;a.wQ=null;}
function AOJ(a,b){return a.wQ.data[b+a.xV|0];}
function ANH(a,b,c){a.wQ.data[b+a.xV|0]=c;}
function ASO(a){return a.Bs;}
function V4(){D.call(this);this.jp=null;}
function V0(){var a=this;D.call(a);a.i0=null;a.xm=0;}
function Xf(){D.call(this);this.kz=null;}
function Jn(){B6.call(this);}
function BkX(){var a=new Jn();AYd(a);return a;}
function AYd(a){O(a);}
function UG(){var a=this;CS.call(a);a.Aw=null;a.Av=null;a.qv=null;a.Er=null;}
function ADf(a){Dy(a.bG);U(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bD/4|0)+72|0,B(564)));Dy(a.qv);DF(a.qv,AQz(a.bZ,a.Av));}
function AOC(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cm)return;b=a.J;c=a.Er;$p=1;case 1:ADT(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AMz(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABf(a);if(C()){break _;}DG(a,a.bZ,a.Aw,a.bm/2|0,70,16777215);e=90;f=Jj(a.qv);while(KC(f)){g=KT(f);DG(a,a.bZ,g,a.bm/2|0,e,16777215);e=e+9|0;}$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function FV(){Jn.call(this);}
function BkY(){var a=new FV();A6K(a);return a;}
function A6K(a){O(a);}
function Hc(){B6.call(this);}
function BkZ(){var a=new Hc();A5R(a);return a;}
function A5R(a){O(a);}
function Gu(){B6.call(this);}
function Bk0(){var a=new Gu();A1D(a);return a;}
function A1D(a){O(a);}
function Tw(){var a=this;D.call(a);a.yT=null;a.Dg=null;a.vJ=0;a.rM=0;}
function AAx(a){return Fl(a.yT);}
function N9(a,b){return Ct(a.Dg)<b?0:1;}
function A5M(a,b){a.vJ=b;}
function A_N(a,b){a.rM=b;}
function ACl(){var a=this;D.call(a);a.yz=null;a.oB=0;}
function Rx(){CS.call(this);}
function Bk1(){var a=new Rx();A6M(a);return a;}
function A6M(a){DR(a);}
function Mn(){CS.call(this);}
function Bk2(){var a=new Mn();A91(a);return a;}
function A91(a){DR(a);}
function AOl(a){Dy(a.bG);U(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bD/4|0)+72|0,B(565)));U(a.bG,Dj(2,(a.bm/2|0)-100|0,(a.bD/4|0)+96|0,B(566)));if(a.J.k2===null)Z(a.bG,1).gC=0;}
function AMj(a,b,c){return;}
function AOv(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cm==1){c=a.J;$p=1;continue _;}if(b.cm!=2)return;b=a.J;c=null;$p=3;continue _;case 1:ASu(c);if(C()){break _;}c=a.J;d=null;$p=2;case 2:ADT(c,d);if(C()){break _;}if(b.cm!=2)return;b=a.J;c=null;$p=3;case 3:ABJ(b,c);if(C()){break _;}b=a.J;c=LN();$p=4;case 4:ADT(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function APm(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:KL(a,0,0,a.bm,a.bD,1615855616,(-1602211792));B3();CC(2.0,2.0,2.0);DG(a,a.bZ,B(567),(a.bm/2|0)/2|0,30,16777215);BD();e=a.bZ;f=new S;V(f);DG(a,e,T(Be(H(f,B(568)),a.J.f.k6)),a.bm/2|0,100,16777215);$p=1;case 1:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A6N(a){return 0;}
function C1(){var a=this;C5.call(a);a.e7=0;a.Bl=0.0;a.Bm=0.0;a.dq=0;a.cw=0;a.dr=0.0;a.m9=0.0;a.h0=0.0;a.id=0.0;a.ip=0.0;}
var BkK=0.0;var BkL=0.0;var BkM=0.0;function Bk3(a,b,c,d,e,f,g){var h=new C1();FD(h,a,b,c,d,e,f,g);return h;}
function FD(a,b,c,d,e,f,g,h){var i,j;FC(a,b);a.dq=0;a.cw=0;D2(a,0.20000000298023224,0.20000000298023224);a.c4=a.eO/2.0;CT(a,c,d,e);a.ip=1.0;a.id=1.0;a.h0=1.0;a.g=f+(BP()*2.0-1.0)*0.4000000059604645;a.i=g+(BP()*2.0-1.0)*0.4000000059604645;a.h=h+(BP()*2.0-1.0)*0.4000000059604645;i=(BP()+BP()+1.0)*0.15000000596046448;j=Ce(a.g*a.g+a.i*a.i+a.h*a.h);c=a.g;d=j;c=c/d;e=i;a.g=c*e*0.4000000059604645;a.i=a.i/d*e*0.4000000059604645+0.10000000149011612;a.h=a.h/d*e*0.4000000059604645;a.Bl=N(a.m)*3.0;a.Bm=N(a.m)*3.0;a.dr=
(N(a.m)*0.5+0.5)*2.0;a.cw=4.0/(N(a.m)*0.8999999761581421+0.10000000149011612)|0;a.dq=0;a.i$=0;}
function APq(a,b){var c,d;c=a.g;d=b;a.g=c*d;a.i=(a.i-0.10000000149011612)*d+0.10000000149011612;a.h=a.h*d;return a;}
function X_(a,b){var c;c=0.20000000298023224*b;D2(a,c,c);a.dr=a.dr*b;return a;}
function ALl(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.i=a.i-0.04*a.m9;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARC(a,c,d,e);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}a.i=a.i-0.04*a.m9;c=a.g;d=a.i;e=
a.h;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ANs(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.e7%16|0)/16.0;j=i+0.062437500804662704;k=(a.e7/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.dr;n=a.bS;o=a.d-a.bS;p
=c;q=n+o*p-BkK;r=a.cS+(a.j-a.cS)*p-BkL;s=a.bR+(a.e-a.bR)*p-BkM;$p=1;case 1:$z=a.vi(c);if(C()){break _;}t=$z;Cq(b,a.h0*t,a.id*t,a.ip*t);u=d*m;t=q-u;v=g*m;n=t-v;c=e*m;o=r-c;d=f*m;e=s-d;f=h*m;w=e-f;p=i;x=l;G(b,n,o,w,p,x);n=t+v;w=r+c;y=e+f;z=k;G(b,n,w,y,p,z);c=q+u;n=c+v;d=s+d;p=d+f;y=j;G(b,n,w,p,y,z);G(b,c-v,o,d-f,y,x);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function A7Y(a){return 0;}
function AAZ(){var a=this;CS.call(a);a.tx=0;a.og=0;}
function Bcn(){var a=new AAZ();AWb(a);return a;}
function AWb(a){DR(a);a.tx=0;a.og=0;}
function ARa(a){a.tx=0;Dy(a.bG);U(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bD/4|0)+48|0,B(569)));U(a.bG,Dj(4,(a.bm/2|0)-100|0,(a.bD/4|0)+24|0,B(570)));U(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bD/4|0)+96|0,B(496)));}
function ADl(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cm){c=a.J;d=AIL(a,a.J.o);$p=1;continue _;}if(b.cm==1){c=a.J;d=null;$p=2;continue _;}if(b.cm!=4)return;b=a.J;c=null;$p=4;continue _;case 1:ADT(c,d);if(C()){break _;}if(b.cm==1){c=a.J;d=null;$p=2;continue _;}if(b.cm!=4)return;b=a.J;c=null;$p=4;continue _;case 2:ABJ(c,d);if(C()){break _;}c=a.J;d=LN();$p=3;case 3:ADT(c,d);if(C()){break _;}if(b.cm!=4)return;b=a.J;c=null;$p
=4;case 4:ADT(b,c);if(C()){break _;}b=a.J;$p=5;case 5:AFh(b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function A2d(a){a.og=a.og+1|0;}
function ADK(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABf(a);if(C()){break _;}e=a.J.B;f=a.tx;a.tx=f+1|0;$p=2;case 2:$z=AAL(e,f);if(C()){break _;}f=$z;f=f?0:1;if(!(!f&&a.og>=20)){g=255.0*(Bq(((a.og%10|0)+d)/10.0*3.1415927410125732*2.0)*0.20000000298023224+0.800000011920929)|0;Cy(a.bZ,B(571),8,a.bD-16|0,g<<16|g<<8|g);}DG(a,a.bZ,B(572),a.bm/2|0,40,16777215);$p=3;case 3:AFC(a,b,c,d);if
(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Lz(){var a=this;D.call(a);a.be=null;a.ba=null;a.Z=null;a.bc=null;}
function Bk4(){var a=new Lz();AHp(a);return a;}
function AHp(a){a.be=$rt_createFloatMultiArray([16,16]);a.ba=$rt_createFloatArray(16);a.Z=$rt_createFloatArray(16);a.bc=$rt_createFloatArray(16);}
function ARL(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.be.data[h].data[0]*b+a.be.data[h].data[1]*c+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*c+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*b+a.be.data[h].data[1]*f+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*f+a.be.data[h].data[2]*d+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*b+a.be.data[h].data[1]*c+a.be.data[h].data[2]*g+a.be.data[h].data[3]
<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*c+a.be.data[h].data[2]*g+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*b+a.be.data[h].data[1]*f+a.be.data[h].data[2]*g+a.be.data[h].data[3]<=0.0&&a.be.data[h].data[0]*e+a.be.data[h].data[1]*f+a.be.data[h].data[2]*g+a.be.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function WB(){var a=this;Lz.call(a);a.oU=null;a.n4=null;a.zx=null;}
var Bk5=null;function BaO(){var a=new WB();AFs(a);return a;}
function AFs(a){AHp(a);a.oU=H3(16);a.n4=H3(16);a.zx=H3(16);}
function RT(){AJO(Bk5);return Bk5;}
function GX(a,b,c){var d,e;b=b.data;d=Ea(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AJO(a){LT(a.oU);LT(a.n4);LT(a.zx);TP(2983,a.oU);TP(2982,a.n4);Qa(TL(a.oU),16);VJ(a.oU,a.ba);Qa(TL(a.n4),16);VJ(a.n4,a.Z);a.bc.data[0]=a.Z.data[0]*a.ba.data[0]+a.Z.data[1]*a.ba.data[4]+a.Z.data[2]*a.ba.data[8]+a.Z.data[3]*a.ba.data[12];a.bc.data[1]=a.Z.data[0]*a.ba.data[1]+a.Z.data[1]*a.ba.data[5]+a.Z.data[2]*a.ba.data[9]+a.Z.data[3]*a.ba.data[13];a.bc.data[2]=a.Z.data[0]*a.ba.data[2]+a.Z.data[1]*a.ba.data[6]+a.Z.data[2]*a.ba.data[10]+a.Z.data[3]*a.ba.data[14];a.bc.data[3]=a.Z.data[0]*a.ba.data[3]+a.Z.data[1]
*a.ba.data[7]+a.Z.data[2]*a.ba.data[11]+a.Z.data[3]*a.ba.data[15];a.bc.data[4]=a.Z.data[4]*a.ba.data[0]+a.Z.data[5]*a.ba.data[4]+a.Z.data[6]*a.ba.data[8]+a.Z.data[7]*a.ba.data[12];a.bc.data[5]=a.Z.data[4]*a.ba.data[1]+a.Z.data[5]*a.ba.data[5]+a.Z.data[6]*a.ba.data[9]+a.Z.data[7]*a.ba.data[13];a.bc.data[6]=a.Z.data[4]*a.ba.data[2]+a.Z.data[5]*a.ba.data[6]+a.Z.data[6]*a.ba.data[10]+a.Z.data[7]*a.ba.data[14];a.bc.data[7]=a.Z.data[4]*a.ba.data[3]+a.Z.data[5]*a.ba.data[7]+a.Z.data[6]*a.ba.data[11]+a.Z.data[7]*a.ba.data[15];a.bc.data[8]
=a.Z.data[8]*a.ba.data[0]+a.Z.data[9]*a.ba.data[4]+a.Z.data[10]*a.ba.data[8]+a.Z.data[11]*a.ba.data[12];a.bc.data[9]=a.Z.data[8]*a.ba.data[1]+a.Z.data[9]*a.ba.data[5]+a.Z.data[10]*a.ba.data[9]+a.Z.data[11]*a.ba.data[13];a.bc.data[10]=a.Z.data[8]*a.ba.data[2]+a.Z.data[9]*a.ba.data[6]+a.Z.data[10]*a.ba.data[10]+a.Z.data[11]*a.ba.data[14];a.bc.data[11]=a.Z.data[8]*a.ba.data[3]+a.Z.data[9]*a.ba.data[7]+a.Z.data[10]*a.ba.data[11]+a.Z.data[11]*a.ba.data[15];a.bc.data[12]=a.Z.data[12]*a.ba.data[0]+a.Z.data[13]*a.ba.data[4]
+a.Z.data[14]*a.ba.data[8]+a.Z.data[15]*a.ba.data[12];a.bc.data[13]=a.Z.data[12]*a.ba.data[1]+a.Z.data[13]*a.ba.data[5]+a.Z.data[14]*a.ba.data[9]+a.Z.data[15]*a.ba.data[13];a.bc.data[14]=a.Z.data[12]*a.ba.data[2]+a.Z.data[13]*a.ba.data[6]+a.Z.data[14]*a.ba.data[10]+a.Z.data[15]*a.ba.data[14];a.bc.data[15]=a.Z.data[12]*a.ba.data[3]+a.Z.data[13]*a.ba.data[7]+a.Z.data[14]*a.ba.data[11]+a.Z.data[15]*a.ba.data[15];a.be.data[0].data[0]=a.bc.data[3]-a.bc.data[0];a.be.data[0].data[1]=a.bc.data[7]-a.bc.data[4];a.be.data[0].data[2]
=a.bc.data[11]-a.bc.data[8];a.be.data[0].data[3]=a.bc.data[15]-a.bc.data[12];GX(a,a.be,0);a.be.data[1].data[0]=a.bc.data[3]+a.bc.data[0];a.be.data[1].data[1]=a.bc.data[7]+a.bc.data[4];a.be.data[1].data[2]=a.bc.data[11]+a.bc.data[8];a.be.data[1].data[3]=a.bc.data[15]+a.bc.data[12];GX(a,a.be,1);a.be.data[2].data[0]=a.bc.data[3]+a.bc.data[1];a.be.data[2].data[1]=a.bc.data[7]+a.bc.data[5];a.be.data[2].data[2]=a.bc.data[11]+a.bc.data[9];a.be.data[2].data[3]=a.bc.data[15]+a.bc.data[13];GX(a,a.be,2);a.be.data[3].data[0]
=a.bc.data[3]-a.bc.data[1];a.be.data[3].data[1]=a.bc.data[7]-a.bc.data[5];a.be.data[3].data[2]=a.bc.data[11]-a.bc.data[9];a.be.data[3].data[3]=a.bc.data[15]-a.bc.data[13];GX(a,a.be,3);a.be.data[4].data[0]=a.bc.data[3]-a.bc.data[2];a.be.data[4].data[1]=a.bc.data[7]-a.bc.data[6];a.be.data[4].data[2]=a.bc.data[11]-a.bc.data[10];a.be.data[4].data[3]=a.bc.data[15]-a.bc.data[14];GX(a,a.be,4);a.be.data[5].data[0]=a.bc.data[3]+a.bc.data[2];a.be.data[5].data[1]=a.bc.data[7]+a.bc.data[6];a.be.data[5].data[2]=a.bc.data[11]
+a.bc.data[10];a.be.data[5].data[3]=a.bc.data[15]+a.bc.data[14];GX(a,a.be,5);}
function AG5(){Bk5=BaO();}
function Q4(){}
function AFQ(){var a=this;D.call(a);a.C5=null;a.vA=0.0;a.v3=0.0;a.wh=0.0;}
function Bbv(){var a=new AFQ();A87(a);return a;}
function A87(a){a.C5=RT();}
function AOj(a,b,c,d){a.vA=b;a.v3=c;a.wh=d;}
function AAg(a,b,c,d,e,f,g){var h,i;h=b-a.vA;i=c-a.v3;b=d-a.wh;d=e-a.vA;e=f-a.v3;c=g-a.wh;return ARL(a.C5,h,i,b,d,e,c);}
function MI(a,b){return AAg(a,b.R,b.M,b.S,b.V,b.U,b.W);}
function O4(){D.call(this);}
var Bk6=null;function Bk7(){var a=new O4();ALf(a);return a;}
function ALf(a){return;}
function DT(){Bc(2896);Bc(16384);Bc(16385);Bc(2903);}
function Hy(){var b;Ba(2896);Ba(16384);Ba(16385);Ba(2903);b=CD(BY(0.699999988079071,1.0,(-0.20000000298023224)));RI(b.x,b.z,b.w,0.0);Fr(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fr(0.0,0.0,0.0,1.0);Fr(0.0,0.0,0.0,1.0);b=CD(BY((-0.699999988079071),1.0,0.20000000298023224));RI(b.x,b.z,b.w,0.0);Fr(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fr(0.0,0.0,0.0,1.0);Fr(0.0,0.0,0.0,1.0);Fr(0.4000000059604645,0.4000000059604645,0.4000000059604645,1.0);}
function RI(b,c,d,e){return Fr(b,c,d,e);}
function Fr(b,c,d,e){EB(Bk6);CJ(CJ(CJ(CJ(Bk6,b),c),d),e);Gx(Bk6);return Bk6;}
function ASf(){Bk6=H3(16);}
function Ih(){var a=this;D.call(a);a.z3=null;a.gp=null;a.nA=null;}
function Bk8(a,b,c){var d=new Ih();K6(d,a,b,c);return d;}
function K6(a,b,c,d){a.z3=b;a.gp=c;a.nA=d;}
function A6r(a){return a.gp.gn()+a.nA.gn()|0;}
function A6e(a){return a.z3;}
function AS7(a,b){return b<a.gp.gn()?a.gp.gx(b):a.nA.gx(b-a.gp.gn()|0);}
function A3f(a,b,c){return b<a.gp.gn()?a.gp.j6(b,c):a.nA.j6(b-a.gp.gn()|0,c);}
function AWQ(a,b,c){if(b<a.gp.gn())a.gp.jD(b,c);else a.nA.jD(b-a.gp.gn()|0,c);}
function A97(a){return a.gp.f6();}
function Yx(a){var b,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gp;$p=1;case 1:b.kk();if(C()){break _;}b=a.nA;$p=2;case 2:b.kk();if(C()){break _;}return;default:E$();}}C3().s(a,b,$p);}
function ZF(){C1.call(this);}
function AY2(a,b,c,d,e,f,g,h){var i=new ZF();A1a(i,a,b,c,d,e,f,g,h);return i;}
function A1a(a,b,c,d,e,f,g,h,i){FD(a,b,c,d,e,f,g,h);a.e7=i.bb;a.m9=i.Ew;a.ip=0.6000000238418579;a.id=0.6000000238418579;a.h0=0.6000000238418579;a.dr=a.dr/2.0;}
function ATD(a){return 1;}
function YK(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=((a.e7%16|0)+a.Bl/4.0)/16.0;j=i+0.015609375201165676;k=((a.e7/16|0)+a.Bm/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.dr;n
=a.bS;o=a.d-a.bS;p=c;q=n+o*p-BkK;r=a.cS+(a.j-a.cS)*p-BkL;s=a.bR+(a.e-a.bR)*p-BkM;$p=1;case 1:$z=ADG(a,c);if(C()){break _;}t=$z;Cq(b,t*a.h0,t*a.id,t*a.ip);t=d*m;u=q-t;g=g*m;v=u-g;w=e*m;o=r-w;c=f*m;d=s-c;e=h*m;n=d-e;x=i;p=l;G(b,v,o,n,x,p);n=u+g;v=r+w;y=d+e;z=k;G(b,n,v,y,x,z);d=q+t;n=d+g;c=s+c;x=c+e;y=j;G(b,n,v,x,y,z);G(b,d-g,o,c-e,y,p);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function KS(){B6.call(this);}
function Bk9(){var a=new KS();A2l(a);return a;}
function A2l(a){O(a);}
function JM(){C1.call(this);}
function Bk$(a,b,c,d){var e=new JM();TM(e,a,b,c,d);return e;}
function TM(a,b,c,d,e){FD(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.30000001192092896;a.i=BP()*0.20000000298023224+0.10000000149011612;a.h=a.h*0.30000001192092896;a.h0=1.0;a.id=1.0;a.ip=1.0;a.e7=16;D2(a,0.009999999776482582,0.009999999776482582);a.m9=0.05999999865889549;a.cw=8.0/(BP()*0.8+0.2)|0;}
function AKK(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANs(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AOx(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-a.m9;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARC(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=a.cw;a.cw=e-1|0;if(e<=0){$p=2;continue _;}if(a.cx){if(BP()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.l;e
=K(a.d);g=K(a.j);h=K(a.e);$p=3;continue _;case 2:Ca(a);if(C()){break _;}if(a.cx){if(BP()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.l;e=K(a.d);g=K(a.j);h=K(a.e);$p=3;case 3:$z=ABZ(f,e,g,h);if(C()){break _;}f=$z;if(!f.nE()&&!f.dw())return;i=K(a.j)+1|0;f=a.l;e=K(a.d);g=K(a.j);h=K(a.e);$p=4;case 4:$z=AEI(f,e,g,h);if(C()){break _;}e=$z;b=i-Jv(e);if(a.j>=b)return;$p=6;continue _;case 5:Ca(a);if(C()){break _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;f=a.l;e=K(a.d);g=
K(a.j);h=K(a.e);$p=3;continue _;case 6:Ca(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function IO(){var a=this;Iw.call(a);a.eq=null;a.Ag=0;a.ef=0;}
function Bk_(a,b,c,d,e,f){var g=new IO();OL(g,a,b,c,d,e,f);return g;}
function OL(a,b,c,d,e,f,g){Uc(a,c,e,f);a.ef=b;a.eq=d;a.Ag=g;}
function AXL(a){return a.Ag;}
function Pd(){IO.call(this);}
function AV_(a,b){var c,d;c=a.eq.cq.data;d=a.ef;b=b*4|0;return c[d+b|0]&255|(a.eq.cq.data[(a.ef+b|0)+1|0]&255)<<8|(a.eq.cq.data[(a.ef+b|0)+2|0]&255)<<16|(a.eq.cq.data[(a.ef+b|0)+3|0]&255)<<24;}
function ASN(a,b,c){var d,e;d=a.eq.cq.data;e=a.ef;b=b*4|0;d[e+b|0]=c<<24>>24;a.eq.cq.data[(a.ef+b|0)+1|0]=c>>8<<24>>24;a.eq.cq.data[(a.ef+b|0)+2|0]=c>>16<<24>>24;a.eq.cq.data[(a.ef+b|0)+3|0]=c>>24<<24>>24;}
function VL(){IO.call(this);}
function A0O(a,b){var c,d;c=a.eq.cq.data;d=a.ef;b=b*4|0;return (c[d+b|0]&255)<<24|(a.eq.cq.data[(a.ef+b|0)+1|0]&255)<<16|(a.eq.cq.data[(a.ef+b|0)+2|0]&255)<<8|a.eq.cq.data[(a.ef+b|0)+3|0]&255;}
function ATG(a,b,c){var d,e;d=a.eq.cq.data;e=a.ef;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.eq.cq.data[(a.ef+b|0)+1|0]=c>>16<<24>>24;a.eq.cq.data[(a.ef+b|0)+2|0]=c>>8<<24>>24;a.eq.cq.data[(a.ef+b|0)+3|0]=c<<24>>24;}
function AKS(){D.call(this);this.wa=null;}
function AYG(a){var b=new AKS();A7V(b,a);return b;}
function A7V(a,b){a.wa=b;}
function ZK(a,b,c){return G6(b,a.wa)>=G6(c,a.wa)?1:(-1);}
function A07(a,b,c){return ZK(a,b,c);}
function V9(){D.call(this);this.ye=null;}
function APG(a,b,c){var d,e;d=b.fw;e=c.fw;return d&&!e?1:e&&!d?(-1):G6(b,a.ye)>=G6(c,a.ye)?(-1):1;}
function A9D(a,b,c){return APG(a,b,c);}
function Hs(){D.call(this);}
var Bla=null;var Blb=null;var Blc=null;var Bld=null;var Ble=null;function Blf(){var a=new Hs();AAj(a);return a;}
function AAj(a){return;}
function RA(b,c){var d,e,f;if(c===null)c=Bld;d=J(D,b.s);UD(b,d);PY(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;Ra(b,e,f[e]);e=e+1|0;}}
function AOc(){Bla=new R$;Blb=new R9;Blc=new R_;Bld=new WH;Ble=new WF;}
function HX(){var a=this;D.call(a);a.mP=null;a.yh=null;a.Dh=null;a.Cv=null;a.HJ=null;a.Gv=0.0;a.FP=0.0;a.E9=0.0;a.E8=0.0;a.E7=0.0;}
var Bko=null;var BkH=0.0;var BkI=0.0;var BkJ=0.0;function BbW(){var a=new HX();AC9(a);return a;}
function AC9(a){var b;a.mP=De();BR(a.mP,F(Jh),Bci());BR(a.mP,F(Ny),Bbw());b=Nh(Is(a.mP));while(Gb(b)){Mf(b).rb=a;}}
function Vt(a,b){var c;c=CP(a.mP,b);if(c===null&&b!==F(D_)){c=Vt(a,JH(b));BR(a.mP,b,c);}return c;}
function AIf(a,b){return Wn(a,b)===null?0:1;}
function Wn(a,b){return Vt(a,Dl(b));}
function ARf(a,b,c,d,e,f){var g,h,i;a.Cv=b;a.Dh=c;a.HJ=e;a.yh=d;a.Gv=e.P+(e.v-e.P)*f;a.FP=e.T+(e.I-e.T)*f;g=e.cs;h=e.d-e.cs;i=f;a.E9=g+h*i;a.E8=e.b7+(e.j-e.b7)*i;a.E7=e.ct+(e.e-e.ct)*i;}
function YX(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(AK0(b,a.E9,a.E8,a.E7)>=4096.0)return;d=a.Cv;e=b.dL;f=b.dJ;g=b.dS;$p=1;case 1:$z=ANg(d,e,f,g);if(C()){break _;}h=$z;F8(h,h,h);i=b.dL-BkH;j=b.dJ-BkI;k=b.dS-BkJ;$p=2;case 2:AFm(a,b,i,j,k,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFm(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=Wn(a,b);if(g===null)return;$p=1;case 1:g.CS(b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function A_O(a){return a.yh;}
function ALJ(){Bko=BbW();}
function H0(){var a=this;D.call(a);a.dV=null;a.FC=null;a.t0=null;a.n2=null;a.HW=null;a.rp=0.0;a.GK=0.0;a.FL=null;a.D6=0.0;a.D5=0.0;a.D4=0.0;}
var Bgl=null;var BkE=0.0;var BkF=0.0;var BkG=0.0;function Baf(){var a=new H0();AGt(a);return a;}
function AGt(a){var b,c,d,e,f;a.dV=De();BR(a.dV,F(Km),A_V());b=a.dV;c=new T6;d=BcK();e=new PV;KX(e,6,0.5);Gs(c,d,0.699999988079071);c.kj=e;BR(b,F(IC),c);d=a.dV;f=new TC;c=Bch();e=BbS();Gs(f,c,0.699999988079071);f.kj=e;BR(d,F(KG),f);BR(a.dV,F(JW),Bb8());BR(a.dV,F(Jm),AYe(Bcv(),0.5));d=a.dV;f=new DJ;c=new HR;KF(c);Gs(f,c,0.5);BR(d,F(I7),f);BR(a.dV,F(Ju),Bbh());d=a.dV;f=new T_;c=new HR;KF(c);Gs(f,c,3.0);f.tw=6.0;BR(d,F(K_),f);BR(a.dV,F(EQ),AYe(A$V(),0.5));d=a.dV;f=new TJ;EI(f);BR(d,F(C5),f);BR(a.dV,F(IG),BbQ());d
=a.dV;f=new Rw;EI(f);BR(d,F(Js),f);BR(a.dV,F(E9),X1());BR(a.dV,F(Ms),Bal());BR(a.dV,F(JK),Bad());BR(a.dV,F(Gi),Bb4());d=Nh(Is(a.dV));while(Gb(d)){Mf(d).iD=a;}}
function W2(a,b){var c;c=CP(a.dV,b);if(c===null&&b!==F(C5)){c=W2(a,JH(b));BR(a.dV,b,c);}return c;}
function Sb(a,b){return W2(a,Dl(b));}
function AG_(a,b,c,d,e,f,g){var h,i,j;a.n2=b;a.t0=c;a.FL=f;a.HW=e;a.FC=d;a.rp=e.P+(e.v-e.P)*g;a.GK=e.T+(e.I-e.T)*g;h=e.cs;i=e.d-e.cs;j=g;a.D6=h+i*j;a.D5=e.b7+(e.j-e.b7)*j;a.D4=e.ct+(e.e-e.ct)*j;}
function AM9(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.cs;e=b.d-b.cs;f=c;e=d+e*f;d=b.b7+(b.j-b.b7)*f;g=b.ct+(b.e-b.ct)*f;h=b.P+(b.v-b.P)*c;$p=1;case 1:$z=b.vi(c);if(C()){break _;}i=$z;F8(i,i,i);e=e-BkE;d=d-BkF;f=g-BkG;$p=2;case 2:AQB(a,b,e,d,f,h,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AQB(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Sb(a,b);if(h===null)return;$p=1;case 1:h.iQ(b,c,d,e,f,g);if(C()){break _;}$p=2;case 2:ANi(h,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A70(a,b){a.n2=b;}
function AJR(a,b,c,d){var e,f,g;e=b-a.D6;f=c-a.D5;g=d-a.D4;return e*e+f*f+g*g;}
function AKs(){Bgl=Baf();}
function Nf(){D.call(this);}
var Blg=null;var Blh=null;function Bli(){var a=new Nf();ARZ(a);return a;}
function ARZ(a){return;}
function Vi(b){var c;c=0;while(true){if(c>=Blg.data.length)return (-1);if(b==Blg.data[c])break;c=c+1|0;}return c;}
function AO_(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;Blg=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;Blh=b;}
function JZ(){B6.call(this);}
function Blj(){var a=new JZ();A7K(a);return a;}
function A7K(a){O(a);}
function VT(){var a=this;D.call(a);a.eF=0;a.e0=0;a.eG=0;}
function CO(a,b,c){var d=new VT();AWE(d,a,b,c);return d;}
function AWE(a,b,c,d){a.eF=b;a.e0=c;a.eG=d;}
function A6m(a,b){var c;if(!(b instanceof VT))return 0;c=b;return c.eF==a.eF&&c.e0==a.e0&&c.eG==a.eG?1:0;}
function A1p(a){return (Bj(a.eF,8976890)+Bj(a.e0,981131)|0)+a.eG|0;}
function Ot(){Fa.call(this);}
var Blk=0.0;var Bll=null;function AEk(){Blk=NaN;Bll=F($rt_floatcls());}
function Hm(){D.call(this);}
var Bdl=null;var Bdn=null;var Bdo=null;var Bdm=null;var Bdk=null;function Blm(){var a=new Hm();AQG(a);return a;}
function AQG(a){return;}
function AMJ(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;Bdl=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);Bdn=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);Bdo=b;Bdm=new V7;Bdk=new R8;}
function Ng(){D.call(this);}
var Bln=null;var Blo=null;function Blp(){var a=new Ng();AKj(a);return a;}
function AKj(a){return;}
function AOd(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.zi=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.uy=0;c.uf=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AOr(Blo,f);if(h<0)h= -h-2|0;i=9+(f-Blo.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(Bln.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-Blo.data[h]|0)|0;k=Long_shru(Long_mul(j,Long_fromInt(Bln.data[h])),
32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?Bln.data[h]>>>g:Bln.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=R(o,p);e=e>0?Bj(k/o|0,o):e<0?Bj(k/p|0,p)+p|0:Bj((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.uy=e;c.uf=h-50|0;}
function AK_(){var b,c,d,e,f,g,h,i;Bln=$rt_createIntArray(100);Blo=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=Bln.data;g=d+50|0;f[g]=$rt_udiv(e,20);Blo.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=Bln.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);Blo.data[i]=c;d=d+1|0;}}
function R8(){var a=this;D.call(a);a.uy=0;a.uf=0;a.zi=0;}
function Blq(){var a=new R8();ASL(a);return a;}
function ASL(a){return;}
function DJ(){var a=this;Dg.call(a);a.mI=null;a.kj=null;}
function AYe(a,b){var c=new DJ();Gs(c,a,b);return c;}
function Gs(a,b,c){EI(a);a.mI=b;a.md=c;}
function A$s(a,b){a.kj=b;}
function Z_(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bc(2884);try{h=b.e9+(b.dH-b.e9)*g;i=b.P+(b.v-b.P)*g;j=b.T+(b.I-b.T)*g;Bw(c,d,e);k=b.oQ+g;Bv(180.0-h,0.0,1.0,0.0);if(b.c2>0){f=Ea((b.c2+
g-1.0)/20.0*1.600000023841858);if(f>1.0)f=1.0;Bv(f*a.CE(b),0.0,0.0,1.0);}l=0.0625;Ba(32826);CC((-1.0),(-1.0),1.0);a.xg(b,g);Bw(0.0,(-1.5078125),0.0);m=b.jU+(b.ch-b.jU)*g;n=b.go-b.ch*(1.0-g);if(m>1.0)m=1.0;o=b.tK;p=PM(b);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);Ba(2884);BD();return;case 1:try{APo(a,o,p);if(C()){break _;}Ba(3008);o=a.mI;f=i-h;o.hK(n,m,k,f,j,l);q=0;if(q>=4){$p=2;continue _;}$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){o=$$je;}
else{throw $$e;}}Cc(o);Ba(2884);BD();return;case 2:a:{try{$z=ADG(b,g);if(C()){break _;}r=$z;s=a.CH(b,r,g);q=s>>24&255;if(!(q<=0&&b.dF<=0&&b.c2<=0)){Bc(3553);Bc(3008);Ba(3042);Df(770,771);HK(514);if(!(b.dF<=0&&b.c2<=0)){BU(r,0.0,0.0,0.4000000059604645);a.mI.hK(n,m,k,f,j,l);t=0;if(t<4){$p=4;continue _;}}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BU(u,v,w,x);a.mI.hK(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HK(515);Bc(3042);Ba(3008);Ba(3553);}Bc(32826);break a;}catch($$e){$$je=Bh($$e);if
($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);}Ba(2884);BD();return;case 3:try{$z=a.k9(b,q);if(C()){break _;}s=$z;if(s){a.kj.hK(n,m,k,f,j,l);Bc(3042);Ba(3008);}q=q+1|0;if(q>=4){$p=2;continue _;}continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);Ba(2884);BD();return;case 4:a:{try{$z=a.k9(b,t);if(C()){break _;}y=$z;if(y){BU(r,0.0,0.0,0.4000000059604645);a.kj.hK(n,m,k,f,j,l);}t=t+1|0;if(t<4){continue _;}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x
=q/255.0;BU(u,v,w,x);a.mI.hK(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HK(515);Bc(3042);Ba(3008);Ba(3553);Bc(32826);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);}Ba(2884);BD();return;case 5:a:{try{$z=a.k9(b,y);if(C()){break _;}s=$z;if(s){BU(u,v,w,x);a.kj.hK(n,m,k,f,j,l);}y=y+1|0;if(y>=4){HK(515);Bc(3042);Ba(3008);Ba(3553);Bc(32826);break a;}continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){o=$$je;}else{throw $$e;}}Cc(o);}Ba(2884);BD();return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function APR(a,b,c){return 0;}
function A5g(a,b){return 90.0;}
function A6v(a,b,c,d){return 0;}
function A8$(a,b,c){return;}
function AOW(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.H3(b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function OM(){var a=this;DJ.call(a);a.AY=null;a.z9=null;a.Cr=null;}
var Blr=null;function Bbh(){var a=new OM();AH9(a);return a;}
function AH9(a){Gs(a,Xs(0.0),0.5);a.AY=a.mI;a.z9=Xs(1.0);a.Cr=Xs(0.5);}
function ARv(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=AIg(b.K,3-c|0);if(d!==null){e=DL(d);if(e instanceof F5){f=e;b=new S;V(b);b=H(H(H(b,B(573)),Blr.data[f.BC]),B(574));g=R(c,2);b=T(H(Be(b,g?1:2),B(515)));$p=1;continue _;}}return 0;case 1:AKp(a,b);if(C()){break _;}h=g?a.z9:a.Cr;h.iZ.iS=c?0:1;h.lb.iS=c?0:1;b=h.pg;i=R(c,1);b.iS=i&&g?0:1;h.d1.iS=i?0:1;h.dP.iS=i?0:1;h.i_.iS
=g&&c!=3?0:1;h.hh.iS=g&&c!=3?0:1;a.kj=h;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ADL(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-b.c4;$p=1;case 1:Z_(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALw(a){B_(a.AY.d1,0.0625);}
function Y8(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ARv(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function AL2(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADL(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACK(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADL(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAd(){var b,c;b=J(B4,5);c=b.data;c[0]=B(239);c[1]=B(575);c[2]=B(576);c[3]=B(577);c[4]=B(578);Blr=b;}
function LA(){var a=this;Gh.call(a);a.hC=0;a.i6=0;a.hT=0;a.h7=0;a.ko=null;a.cm=0;a.gC=0;a.yS=0;}
function Dj(a,b,c,d){var e=new LA();A3g(e,a,b,c,d);return e;}
function Bls(a,b,c,d,e,f){var g=new LA();SF(g,a,b,c,d,e,f);return g;}
function A3g(a,b,c,d,e){SF(a,b,c,d,200,20,e);}
function SF(a,b,c,d,e,f,g){Ne(a);a.hC=200;a.i6=20;a.gC=1;a.yS=1;a.cm=b;a.hT=c;a.h7=d;a.hC=e;a.i6=f;a.ko=g;}
function ACS(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.yS)return;e=b.e$;f=3553;g=b.bo;b=B(506);$p=1;case 1:$z=AHr(g,b);if(C()){break _;}h=$z;Cp(f,h);BU(1.0,1.0,1.0,1.0);h=1;f=c>=a.hT&&d>=a.h7&&c<(a.hT+a.hC|0)&&d<(a.h7+a.i6|0)?1:0;if(!a.gC)h=0;else if(f)h=2;i=a.hT;j=a.h7;h=46+(h*20|0)|0;CH(a,i,j,0,h,a.hC/2|0,a.i6);CH(a,a.hT+(a.hC/2|0)|0,a.h7,200-(a.hC/2|0)|
0,h,a.hC/2|0,a.i6);if(!a.gC)DG(a,e,a.ko,a.hT+(a.hC/2|0)|0,a.h7+((a.i6-8|0)/2|0)|0,(-6250336));else if(!f)DG(a,e,a.ko,a.hT+(a.hC/2|0)|0,a.h7+((a.i6-8|0)/2|0)|0,14737632);else DG(a,e,a.ko,a.hT+(a.hC/2|0)|0,a.h7+((a.i6-8|0)/2|0)|0,16777120);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function R3(a,b,c){return a.gC&&b>=a.hT&&c>=a.h7&&b<(a.hT+a.hC|0)&&c<(a.h7+a.i6|0)?1:0;}
function L_(){D.call(this);}
function Blt(){var a=new L_();AVS(a);return a;}
function AVS(a){return;}
function Qs(){}
function Kr(){var a=this;L_.call(a);a.zS=null;a.HY=null;a.ve=0;a.Dk=0;a.nh=null;a.vL=null;}
function AD_(a){var b,c,d;a:{b=a.ve;c=a.Dk;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6;return d|c&8|b<<2&16|c&32|b>>>8&64|b>>>5&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function ABj(a){return a.nh.oX();}
function WD(a,b){var c,d,e,f,g;if(a.ve&1){c=new LZ;O(c);M(c);}if(a.vL===null){c=new S_;O(c);M(c);}d=b.data;e=d.length;if(e!=a.nh.data.length){c=new Cb;O(c);M(c);}f=0;while(true){if(f>=e){c=b.data;g=new a.zS.fY();a.vL.call(g,c);return g;}if(!F1(a.nh.data[f])&&d[f]!==null&&!Ux(a.nh.data[f],d[f])){c=new Cb;O(c);M(c);}if(F1(a.nh.data[f])&&d[f]===null)break;f=f+1|0;}c=new Cb;O(c);M(c);}
function Os(){}
function Qz(){D.call(this);}
function Blu(){var a=new Qz();A_f(a);return a;}
function A_f(a){return;}
function AJs(a){var b,c,d;Bd();BdC.requestPointerLock();b=B$();if(VN())clearTimeout(VN());MW(0);if(Long_lt(Long_sub(b,PX()),Long_fromInt(3000))){c=new Ts;c.Ji=a;d=3000-Long_sub(b,PX()).lo|0;MW(setTimeout(Cu(c,"onTimer"),d));}}
function A1A(a){AJs(a);}
function WH(){D.call(this);}
function Blv(){var a=new WH();AVk(a);return a;}
function AVk(a){return;}
function A4O(a,b,c){return b!==null?b.lT(c): -c.lT(b);}
function WF(){D.call(this);}
function Blw(){var a=new WF();A5I(a);return a;}
function A5I(a){return;}
function R$(){Fb.call(this);}
function Blx(){var a=new R$();A95(a);return a;}
function A95(a){return;}
function R9(){FY.call(this);}
function Bly(){var a=new R9();A9$(a);return a;}
function A9$(a){return;}
function R_(){Gg.call(this);}
function Blz(){var a=new R_();A3F(a);return a;}
function A3F(a){return;}
function IB(){D.call(this);this.rb=null;}
function AKw(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.rb.Dh;$p=1;case 1:$z=AHr(c,b);if(C()){break _;}d=$z;Ec(c,d);return;default:E$();}}C3().s(a,b,c,d,$p);}
function A0N(a,b){a.rb=b;}
function ANA(a){return a.rb.yh;}
function AA2(){IB.call(this);this.ED=null;}
function Bci(){var a=new AA2();ATu(a);return a;}
function ATu(a){a.ED=BbO();}
function ARm(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d+0.75,e+0.5);$p=1;case 1:$z=AMe(b);if(C()){break _;}g=$z;Bv( -((g*360|0)/16.0),0.0,1.0,0.0);h=B(579);$p=2;case 2:AKw(a,h);if(C()){break _;}B3();CC(1.0,(-1.0),(-1.0));AM$(a.ED);BD();Bw(0.0,0.5,0.09000000357627869);CC(0.01666666753590107,(-0.01666666753590107),0.01666666753590107);Cj(0.0,
0.0,(-0.01666666753590107));h=ANA(a);i=0;while(i<b.gs.data.length){j=b.gs.data[i];if(i!=b.rC)EE(h,j, -Dw(h,j)/2|0,(i*10|0)-(b.gs.data.length*5|0)|0,0);else{k=new S;V(k);j=T(H(H(H(k,B(580)),j),B(581)));EE(h,j, -Dw(h,j)/2|0,(i*10|0)-(b.gs.data.length*5|0)|0,0);}i=i+1|0;}BU(1.0,1.0,1.0,1.0);BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function XC(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ARm(a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function Ny(){var a=this;D_.call(a);a.jZ=0;a.jN=null;a.lO=0.0;a.mw=0.0;}
function Bcq(){var a=new Ny();A7_(a);return a;}
function A7_(a){a.jZ=(-1);a.jN=B(582);a.mw=0.0;a.jZ=20;}
function ZG(a){return AGJ(a.ci.bi,a.dL,a.dJ,a.dS)>256.0?0:1;}
function AC2(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mw=a.lO;if(ZG(a)){b=a.dL+N(a.ci.q);c=a.dJ+N(a.ci.q);d=a.dS+N(a.ci.q);BV(a.ci,B(256),b,c,d,0.0,0.0,0.0);BV(a.ci,B(257),b,c,d,0.0,0.0,0.0);a.lO=a.lO+1000.0/(a.jZ+200.0);while(a.lO>360.0){a.lO=a.lO-360.0;a.mw=a.mw-360.0;}if(a.jZ==(-1))NW(a);if(a.jZ>0)a.jZ
=a.jZ-1|0;else{e=4;f=0;if(f<e){g=Jl(a.jN,a.ci);if(g===null)return;h=a.ci;i=Dl(g);j=Dv(D4(a.dL,a.dJ,a.dS,a.dL+1|0,a.dJ+1|0,a.dS+1|0),8.0,4.0,8.0);$p=1;continue _;}}}return;case 1:$z=ANd(h,i,j);if(C()){break _;}h=$z;if(h.s>=6){NW(a);return;}k=a.dL+(Cl(a.ci.q)-Cl(a.ci.q))*4.0;l=(a.dJ+E(a.ci.q,3)|0)-1|0;m=a.dS+(Cl(a.ci.q)-Cl(a.ci.q))*4.0;Kt(g,k,l,m,N(a.ci.q)*360.0,0.0);$p=2;case 2:$z=g.uS(k,l,m);if(C()){break _;}n=$z;if(n){h=a.ci;$p=3;continue _;}f=f+1|0;if(f>=e)return;g=Jl(a.jN,a.ci);if(g===null)return;h=a.ci;i
=Dl(g);j=Dv(D4(a.dL,a.dJ,a.dS,a.dL+1|0,a.dJ+1|0,a.dS+1|0),8.0,4.0,8.0);$p=1;continue _;case 3:AOg(h,g);if(C()){break _;}o=0;while(o<20){c=a.dL+0.5+(N(a.ci.q)-0.5)*2.0;d=a.dJ+0.5+(N(a.ci.q)-0.5)*2.0;k=a.dS+0.5+(N(a.ci.q)-0.5)*2.0;BV(a.ci,B(256),c,d,k,0.0,0.0,0.0);BV(a.ci,B(257),c,d,k,0.0,0.0,0.0);o=o+1|0;}AEQ(g);NW(a);f=f+1|0;if(f>=e)return;g=Jl(a.jN,a.ci);if(g===null)return;h=a.ci;i=Dl(g);j=Dv(D4(a.dL,a.dJ,a.dS,a.dL+1|0,a.dJ+1|0,a.dS+1|0),8.0,4.0,8.0);$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,$p);}
function NW(a){a.jZ=200+E(a.ci.q,600)|0;}
function ARX(){IB.call(this);this.wJ=null;}
function Bbw(){var a=new ARX();AXk(a);return a;}
function AXk(a){a.wJ=De();}
function ZZ(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d,e+0.5);g=CP(a.wJ,b.jN);if(g===null){g=Jl(b.jN,null);BR(a.wJ,b.jN,g);}if(g===null){BD();return;}g.l=b.ci;Bw(0.0,0.4000000059604645,0.0);Bv((b.mw+(b.lO-b.mw)*f)*10.0,0.0,1.0,0.0);Bv((-30.0),1.0,0.0,0.0);Bw(0.0,(-0.4000000059604645),0.0);CC(0.4375,0.4375,0.4375);b=Bgl;c=0.0;d=0.0;e=0.0;h=0.0;$p=1;case 1:AQB(b,g,c,d,e,
h,f);if(C()){break _;}BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ARb(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ZZ(a,b,c,d,e,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AQg(){DJ.call(this);}
function A_V(){var a=new AQg();A4o(a);return a;}
function A4o(a){Gs(a,A5k(),1.0);a.kj=A5k();}
function A6l(a,b){return 180.0;}
function XY(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c)return 0;if(c)return 0;d=B(583);$p=1;case 1:AKp(a,d);if(C()){break _;}e=1.0;f=1.0;$p=2;case 2:$z=ADG(b,f);if(C()){break _;}f=$z;f=(e-f)*0.5;Ba(3042);Bc(3008);Df(770,771);BU(1.0,1.0,1.0,f);return 1;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function A6h(a,b){return 180.0;}
function Yb(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=XY(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function T6(){DJ.call(this);}
function AGb(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(584);$p=1;case 1:AKp(a,d);if(C()){break _;}return !c&&b.qy?1:0;default:E$();}}C3().s(a,b,c,d,$p);}
function AMa(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AGb(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function F3(){var a=this;Ei.call(a);a.hg=null;a.hD=null;a.jJ=null;a.jI=null;a.jH=null;a.jK=null;}
function BlA(a,b){var c=new F3();KX(c,a,b);return c;}
function KX(a,b,c){var d,e;a.hg=BK(0,0);BG(a.hg,(-4.0),(-4.0),(-8.0),8,8,8,c);BJ(a.hg,0.0,18-b|0,(-6.0));a.hD=BK(28,8);BG(a.hD,(-5.0),(-10.0),(-7.0),10,16,8,c);BJ(a.hD,0.0,17-b|0,2.0);a.jJ=BK(0,16);BG(a.jJ,(-2.0),0.0,(-2.0),4,b,4,c);d=a.jJ;e=24-b|0;BJ(d,(-3.0),e,7.0);a.jI=BK(0,16);BG(a.jI,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jI,3.0,e,7.0);a.jH=BK(0,16);BG(a.jH,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jH,(-3.0),e,(-5.0));a.jK=BK(0,16);BG(a.jK,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jK,3.0,e,(-5.0));}
function A9X(a,b,c,d,e,f,g){AJQ(a,b,c,d,e,f,g);B_(a.hg,g);B_(a.hD,g);B_(a.jJ,g);B_(a.jI,g);B_(a.jH,g);B_(a.jK,g);}
function AJQ(a,b,c,d,e,f,g){var h;a.hg.bX=e/57.2957763671875;a.hD.b1=1.5707963705062866;h=a.jJ;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.jI;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.jH.b1=BC(d)*1.399999976158142*c;a.jK.b1=BC(b)*1.399999976158142*c;}
function PV(){F3.call(this);}
function BcK(){var a=new PV();AYb(a);return a;}
function AYb(a){KX(a,6,0.0);}
function TC(){DJ.call(this);}
function AM2(a,b,c){var d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(585);$p=1;case 1:AKp(a,d);if(C()){break _;}return !c&&!b.x5?1:0;default:E$();}}C3().s(a,b,c,d,$p);}
function ARp(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AM2(a,b,c);if(C()){break _;}c=$z;return c;default:E$();}}C3().s(a,b,c,$p);}
function ACG(){F3.call(this);}
function Bch(){var a=new ACG();A93(a);return a;}
function A93(a){KX(a,12,0.0);a.hg=BK(0,0);BG(a.hg,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BJ(a.hg,0.0,6.0,(-8.0));a.hD=BK(28,8);BG(a.hD,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BJ(a.hD,0.0,5.0,2.0);}
function ARe(){F3.call(this);}
function BbS(){var a=new ARe();AU9(a);return a;}
function AU9(a){KX(a,12,0.0);a.hg=BK(0,0);BG(a.hg,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BJ(a.hg,0.0,6.0,(-8.0));a.hD=BK(28,8);BG(a.hD,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BJ(a.hD,0.0,5.0,2.0);a.jJ=BK(0,16);BG(a.jJ,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jJ,(-3.0),12.0,7.0);a.jI=BK(0,16);BG(a.jI,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jI,3.0,12.0,7.0);a.jH=BK(0,16);BG(a.jH,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jH,(-3.0),12.0,(-5.0));a.jK=BK(0,16);BG(a.jK,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jK,3.0,12.0,(-5.0));}
function AB8(){DJ.call(this);}
function Bb8(){var a=new AB8();AZJ(a);return a;}
function AZJ(a){Gs(a,BaS(),0.5);}
function ADB(a,b,c){var d,e,f;d=Qm(b,c);e=1.0+Bq(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;c=d*d;c=c*c;f=(1.0+c*0.4000000059604645)*e;CC(f,(1.0+c*0.10000000149011612)/e,f);}
function Ya(a,b,c,d){var e,f;e=Qm(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function A7U(a,b,c){ADB(a,b,c);}
function AZV(a,b,c,d){return Ya(a,b,c,d);}
function HR(){MA.call(this);}
function BlB(){var a=new HR();A8a(a);return a;}
function A8a(a){KF(a);}
function A2H(a,b,c,d,e,f,g){var h,i,j;AIQ(a,b,c,d,e,f,g);h=Bq(a.xW*3.1415927410125732);i=Bq((1.0-(1.0-a.xW)*(1.0-a.xW))*3.1415927410125732);a.d1.bU=0.0;a.dP.bU=0.0;j=a.d1;b=0.10000000149011612-h*0.6000000238418579;j.bX= -b;a.dP.bX=b;a.d1.b1=(-1.5707963705062866);a.dP.b1=(-1.5707963705062866);j=a.d1;b=j.b1;c=h*1.2000000476837158-i*0.4000000059604645;j.b1=b-c;j=a.dP;j.b1=j.b1-c;j=a.d1;b=j.bU;c=d*0.09000000357627869;j.bU=b+BC(c)*0.05000000074505806+0.05000000074505806;j=a.dP;j.bU=j.bU-(BC(c)*0.05000000074505806
+0.05000000074505806);j=a.d1;b=j.b1;c=d*0.06700000166893005;j.b1=b+Bq(c)*0.05000000074505806;j=a.dP;j.b1=j.b1-Bq(c)*0.05000000074505806;}
function AIl(){HR.call(this);}
function Bcv(){var a=new AIl();AWn(a);return a;}
function AWn(a){KF(a);a.d1=BK(40,16);BG(a.d1,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.d1,(-5.0),2.0,0.0);a.dP=BK(40,16);a.dP.lF=1;BG(a.dP,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.dP,5.0,2.0,0.0);a.i_=BK(0,16);BG(a.i_,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.i_,(-2.0),12.0,0.0);a.hh=BK(0,16);a.hh.lF=1;BG(a.hh,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.hh,2.0,12.0,0.0);}
function K_(){DQ.call(this);}
function AO7(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;$p=1;case 1:$z=ANg(e,b,c,d);if(C()){break _;}f=$z;return f-0.5;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function T_(){DJ.call(this);this.tw=0.0;}
function Zt(a,b,c){CC(a.tw,a.tw,a.tw);}
function A$Y(a,b,c){Zt(a,b,c);}
function TJ(){Dg.call(this);}
function BlC(){var a=new TJ();AZt(a);return a;}
function AZt(a){EI(a);}
function AJq(a,b,c,d,e,f,g){B3();A8n(b.L,c-b.cs,d-b.b7,e-b.ct);BD();}
function IG(){var a=this;C5.call(a);a.rv=0;a.dK=0;a.nr=0;a.Ez=0;a.ny=0;a.dU=null;}
function JN(a,b){var c,d,e,f,g,h,i,j,k,l;a.dK=b;c=b*90|0;a.v=c;a.P=c;c=a.dU.gg;d=a.dU.m8;e=a.dU.gg;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;d=d/32.0;f=e/32.0;g=a.nr+0.5;h=a.Ez+0.5;i=a.ny+0.5;if(!b)i=i-0.5625;j=R(b,1);if(!j)g=g-0.5625;k=R(b,2);if(!k)i=i+0.5625;l=R(b,3);if(!l)g=g+0.5625;if(!b)g=g-HO(a,a.dU.gg);if(!j)i=i+HO(a,a.dU.gg);if(!k)g=g+HO(a,a.dU.gg);if(!l)i=i-HO(a,a.dU.gg);e=h+HO(a,a.dU.m8);CT(a,g,e,i);M5(a.L,g-c+0.0062500000931322575,e-d+0.0062500000931322575,i-f+0.0062500000931322575,g+c+(-0.0062500000931322575),
e+d+(-0.0062500000931322575),i+f+(-0.0062500000931322575));}
function HO(a,b){return b==32?0.5:b!=64?0.0:0.5;}
function ADj(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.rv;a.rv=b+1|0;if(b!=100)return;$p=1;case 1:$z=ZI(a);if(C()){break _;}c=$z;if(c)return;a.rv=0;$p=2;case 2:Ca(a);if(C()){break _;}d=a.l;e=new E9;f=a.l;g=a.d;h=a.j;i=a.e;j=new Cd;BB();DD(j,Biy);He(e,f,g,h,i,j);$p=3;case 3:AOg(d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ZI(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=a.L;$p=1;case 1:$z=XT(b,a,c);if(C()){break _;}b=$z;if(b.s>0)return 0;d=a.dU.gg/16|0;e=a.dU.m8/16|0;f=a.nr;g=a.ny;if(!a.dK)f=K(a.d-a.dU.gg/32.0);if(a.dK==1)g=K(a.e-a.dU.gg/32.0);if(a.dK==2)f=K(a.d-a.dU.gg/32.0);if(a.dK==3)g=K(a.e-a.dU.gg/32.0);h=K(a.j-a.dU.m8/32.0);i=0;while
(i<d){j=0;if(j<e){if(a.dK&&a.dK!=2){b=a.l;k=a.nr;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.ny;$p=3;continue _;}i=i+1|0;}b=a.l;c=a.L;$p=2;case 2:$z=ADJ(b,a,c);if(C()){break _;}c=$z;k=0;while(k<c.s){if(Z(c,k) instanceof IG)return 0;k=k+1|0;}return 1;case 3:$z=ABZ(b,k,l,m);if(C()){break _;}b=$z;if(!b.dw())return 0;j=j+1|0;while(true){if(j<e){if(a.dK&&a.dK!=2){b=a.l;k=a.nr;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.ny;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.l;c=a.L;$p=2;continue _;case 4:$z
=ABZ(b,k,l,m);if(C()){break _;}b=$z;if(!b.dw())return 0;j=j+1|0;while(true){if(j<e){if(a.dK&&a.dK!=2){b=a.l;k=a.nr;l=h+j|0;m=g+i|0;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.ny;$p=3;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.l;c=a.L;$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AXN(a){return 1;}
function AEp(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Ca(a);if(C()){break _;}d=a.l;b=new E9;e=a.l;f=a.d;g=a.j;h=a.e;i=new Cd;BB();DD(i,Biy);He(b,e,f,g,h,i);$p=2;case 2:AOg(d,b);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAr(){Dg.call(this);this.H$=null;}
function BbQ(){var a=new AAr();AZz(a);return a;}
function AZz(a){EI(a);a.H$=new DB;}
function AP$(a,b,c,d,e,f,g){var h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);Bv(f,0.0,1.0,0.0);Ba(32826);h=B(586);$p=1;case 1:AKp(a,h);if(C()){break _;}h=b.dU;CC(0.0625,0.0625,0.0625);i=h.gg;j=h.m8;k=h.zI;l=h.zH;$p=2;case 2:ACT(a,b,i,j,k,l);if(C()){break _;}Bc(32826);BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ACT(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g= -c/2.0;h= -d/
2.0;i=0;j=c/16|0;k=d/16|0;l=e+c|0;m=f+d|0;while(i<j){if(0<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=0+1|0;f=q*16|0;r=h+f;s=0*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dK)w=K(b.d+u/16.0);if(b.dK==1)y=K(b.e-u/16.0);if(b.dK==2)w=K(b.d-u/16.0);if(b.dK==3)y=K(b.e+u/16.0);z=a.iD.n2;$p=1;continue _;}i=i+1|0;}return;case 1:$z=ANg(z,w,x,y);if(C()){break _;}ba=$z;F8(ba,ba,ba);ba=(l-o|0)/256.0;u=(l-c|0)/256.0;v=(m-s|0)/256.0;bb=(m-f|0)/256.0;BA();z=BeI;Bz(z);Cj(0.0,0.0,(-1.0));bc=n;bd=t;be
=u;bf=v;G(z,bc,bd,(-0.5),be,bf);bg=p;bh=ba;G(z,bg,bd,(-0.5),bh,bf);bf=r;bi=bb;G(z,bg,bf,(-0.5),bh,bi);G(z,bc,bf,(-0.5),be,bi);Cj(0.0,0.0,1.0);G(z,bc,bf,0.5,0.75,0.0);G(z,bg,bf,0.5,0.8125,0.0);G(z,bg,bd,0.5,0.8125,0.0625);G(z,bc,bd,0.5,0.75,0.0625);Cj(0.0,(-1.0),0.0);G(z,bc,bf,(-0.5),0.75,0.001953125);G(z,bg,bf,(-0.5),0.8125,0.001953125);G(z,bg,bf,0.5,0.8125,0.001953125);G(z,bc,bf,0.5,0.75,0.001953125);Cj(0.0,1.0,0.0);G(z,bc,bd,0.5,0.75,0.001953125);G(z,bg,bd,0.5,0.8125,0.001953125);G(z,bg,bd,(-0.5),0.8125,0.001953125);G(z,
bc,bd,(-0.5),0.75,0.001953125);Cj((-1.0),0.0,0.0);G(z,bc,bf,0.5,0.751953125,0.0);G(z,bc,bd,0.5,0.751953125,0.0625);G(z,bc,bd,(-0.5),0.751953125,0.0625);G(z,bc,bf,(-0.5),0.751953125,0.0);Cj(1.0,0.0,0.0);G(z,bg,bf,(-0.5),0.751953125,0.0);G(z,bg,bd,(-0.5),0.751953125,0.0625);G(z,bg,bd,0.5,0.751953125,0.0625);G(z,bg,bf,0.5,0.751953125,0.0);Br(z);s=q;while(true){if(s<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=s+1|0;f=q*16|0;r=h+f;s=s*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dK)w=K(b.d
+u/16.0);if(b.dK==1)y=K(b.e-u/16.0);if(b.dK==2)w=K(b.d-u/16.0);if(b.dK==3)y=K(b.e+u/16.0);z=a.iD.n2;continue _;}i=i+1|0;if(i>=j)break;s=0;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AOQ(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AP$(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Js(){var a=this;C5.call(a);a.sy=0;a.s4=0;a.rH=0;a.vS=0;a.pi=0;a.lq=0;a.sn=null;a.p1=0;a.m_=0;}
function AS9(a,b){var c=new Js();AY_(c,a,b);return c;}
function AY_(a,b,c){FC(a,b);a.sy=(-1);a.s4=(-1);a.rH=(-1);a.vS=0;a.pi=0;a.lq=0;a.m_=0;a.sn=c;D2(a,0.5,0.5);Kt(a,c.d,c.j,c.e,c.v,c.I);a.d=a.d-BC(a.v/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.e=a.e-Bq(a.v/180.0*3.1415927410125732)*0.1599999964237213;CT(a,a.d,a.j,a.e);a.c4=0.0;a.g= -Bq(a.v/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732);a.h=BC(a.v/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732);a.i= -Bq(a.I/180.0*3.1415927410125732);QD(a,a.g,a.i,a.h,1.5,1.0);}
function QD(a,b,c,d,e,f){var g,h,i;g=Ce(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;g=CZ(a.m)*0.007499999832361937;h=f;b=b+g*h;c=c+CZ(a.m)*0.007499999832361937*h;d=d+CZ(a.m)*0.007499999832361937*h;g=e;b=b*g;c=c*g;d=d*g;a.g=b;a.i=c;a.h=d;i=Ce(b*b+d*d);e=CR(b,d)*180.0/3.1415927410125732;a.v=e;a.P=e;e=CR(c,i)*180.0/3.1415927410125732;a.I=e;a.T=e;a.p1=0;}
function APs(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AI7(a);if(C()){break _;}if(a.lq>0)a.lq=a.lq-1|0;if(a.pi){b=a.l;c=a.sy;d=a.s4;e=a.rH;$p=2;continue _;}a.m_=a.m_+1|0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.l;$p=3;continue _;case 2:$z=ACv(b,c,d,e);if(C()){break _;}c=$z;if
(c==a.vS){a.p1=a.p1+1|0;if(a.p1!=1200)return;$p=4;continue _;}a.pi=0;a.g=a.g*N(a.m)*0.20000000298023224;a.i=a.i*N(a.m)*0.20000000298023224;a.h=a.h*N(a.m)*0.20000000298023224;a.p1=0;a.m_=0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.l;$p=3;case 3:$z=AJj(g,b,f);if(C()){break _;}g=$z;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);if(g!==null)f=BY(g.gy.x,g.gy.z,g.gy.w);h=null;i=a.l;j=Dv(Je(a.L,a.g,a.i,a.h),1.0,1.0,1.0);$p=5;continue _;case 4:Ca(a);if(C()){break _;}return;case 5:$z=ADJ(i,a,j);if(C()){break _;}i
=$z;k=0.0;d=0;while(d<CX(i)){j=Z(i,d);if(j.lw()&&!(j===a.sn&&a.m_<5)){l=QR(Dv(j.L,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,f);if(l!==null){m=DI(b,l.gy);if(!(m>=k&&k!==0.0)){h=j;k=m;}}}d=d+1|0;}if(h!==null)g=A0_(h);if(g!==null){if(g.nC!==null){b=g.nC;f=a.sn;c=4;$p=7;continue _;}a.sy=g.h$;a.s4=g.h_;a.rH=g.ia;b=a.l;c=a.sy;d=a.s4;e=a.rH;$p=6;continue _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while
(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.v=a.P+(a.v-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 6:$z=ACv(b,c,d,e);if(C()){break _;}c=$z;a.vS=c;a.g=g.gy.x-a.d;a.i=g.gy.z-a.j;a.h=g.gy.w-a.e;n=Ce(a.g*a.g+a.i*a.i+a.h*a.h);k=a.d;m=a.g;p=n;a.d=k-m/p*0.05000000074505806;a.j=a.j-a.i/p*0.05000000074505806;a.e=a.e-a.h/p*0.05000000074505806;Dh(a.l,a,B(587),
1.0,1.2000000476837158/(N(a.m)*0.20000000298023224+0.8999999761581421));a.pi=1;a.lq=7;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.v=a.P+(a.v-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 7:$z=b.fr(f,c);if(C())
{break _;}c=$z;if(c){Dh(a.l,a,B(587),1.0,1.2000000476837158/(N(a.m)*0.20000000298023224+0.8999999761581421));$p=8;continue _;}a.g=a.g*(-0.10000000149011612);a.i=a.i*(-0.10000000149011612);a.h=a.h*(-0.10000000149011612);a.v=a.v+180.0;a.P=a.P+180.0;a.m_=0;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while
(a.v-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.v=a.P+(a.v-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 8:Ca(a);if(C()){break _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.v=CR(a.g,a.h)*180.0/3.1415927410125732;a.I=CR(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.v-a.P<(-180.0)){a.P=a.P-360.0;}while(a.v-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.v=a.P+(a.v
-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;case 9:$z=AE5(a);if(C()){break _;}c=$z;if(c){e=0;while(e<4){BV(a.l,B(213),a.d-a.g*0.25,a.j-a.i*0.25,a.e-a.h*0.25,a.g,a.i,a.h);e=e+1|0;}o=0.800000011920929;}k=a.g;m=o;a.g=k*m;a.i=a.i*m;a.h=a.h*m;a.i=a.i-0.029999999329447746;CT(a,a.d,a.j,a.e);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function A7z(a,b){var c,d;if(a.pi&&a.sn===b&&a.lq<=0){c=b.K;d=new Cd;BB();MN(d,Bga.cW,1);if(U$(c,d)){Dh(a.l,a,B(588),0.20000000298023224,((N(a.m)-N(a.m))*0.699999988079071+1.0)*2.0);RW(b,a);Ca(a);}}}
function Rw(){Dg.call(this);}
function BlD(){var a=new Rw();AST(a);return a;}
function AST(a){EI(a);}
function AJT(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=B(589);$p=1;case 1:AKp(a,h);if(C()){break _;}B3();Bw(c,d,e);Bv(b.P+(b.v-b.P)*g-90.0,0.0,1.0,0.0);Bv(b.T+(b.I-b.T)*g,0.0,0.0,1.0);BA();h=BeI;Ba(32826);i=b.lq-g;if(i>0.0)Bv( -Bq(i*3.0)*i,0.0,0.0,1.0);Bv(45.0,1.0,0.0,0.0);CC(0.05624999850988388,0.05624999850988388,0.05624999850988388);Bw((-4.0),0.0,0.0);Cj(0.05624999850988388,
0.0,0.0);Bz(h);G(h,(-7.0),(-2.0),(-2.0),0.0,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.3125);G(h,(-7.0),2.0,(-2.0),0.0,0.3125);Br(h);Cj((-0.05624999850988388),0.0,0.0);Bz(h);G(h,(-7.0),2.0,(-2.0),0.0,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.3125);G(h,(-7.0),(-2.0),(-2.0),0.0,0.3125);Br(h);j=0;while(j<4){Bv(90.0,1.0,0.0,0.0);Cj(0.0,0.0,0.05624999850988388);Bz(h);G(h,(-8.0),(-2.0),0.0,0.0,0.0);G(h,8.0,(-2.0),0.0,0.5,0.0);G(h,8.0,2.0,0.0,0.5,
0.15625);G(h,(-8.0),2.0,0.0,0.0,0.15625);Br(h);j=j+1|0;}Bc(32826);BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ADh(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJT(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function E9(){var a=this;C5.call(a);a.ni=null;a.zo=0;a.mN=0;a.hc=0;a.q3=0;a.yu=0.0;}
function Hf(a,b,c,d,e){var f=new E9();He(f,a,b,c,d,e);return f;}
function He(a,b,c,d,e,f){FC(a,b);a.mN=0;a.q3=5;a.yu=BP()*3.141592653589793*2.0;D2(a,0.25,0.25);a.c4=a.eO/2.0;CT(a,c,d,e);a.ni=f;a.v=BP()*360.0;a.g=BP()*0.20000000298023224-0.10000000149011612;a.i=0.20000000298023224;a.h=BP()*0.20000000298023224-0.10000000149011612;a.i$=0;}
function AJC(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jb();if(C()){break _;}if(a.hc>0)a.hc=a.hc-1|0;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-0.03999999910593033;b=a.l;c=K(a.d);d=K(a.j);e=K(a.e);$p=2;case 2:$z=ABZ(b,c,d,e);if(C()){break _;}b=$z;if(b===BfO){a.i=0.20000000298023224;a.g=(N(a.m)-N(a.m))*0.20000000298023224;a.h=(N(a.m)-N(a.m))*0.20000000298023224;Dh(a.l,a,B(215),0.4000000059604645,
2.0+N(a.m)*0.4000000059604645);}f=a.d;g=a.j;h=a.e;$p=3;case 3:ACF(a,f,g,h);if(C()){break _;}$p=4;case 4:AEd(a);if(C()){break _;}f=a.g;g=a.i;h=a.h;$p=5;case 5:ARC(a,f,g,h);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}a.zo=a.zo+1|0;a.mN=a.mN+1|0;if(a.mN<6000)return;$p=6;case 6:Ca(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AEd(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=a.L;d=BfN;$p=1;case 1:$z=AAs(b,c,d,a);if(C()){break _;}e=$z;return e;default:E$();}}C3().s(a,b,c,d,e,$p);}
function ACF(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=b-e;i=c-f;j=d-g;L();k=Bgx.data;l=a.l;$p=1;case 1:$z=ACv(l,e,f,g);if(C()){break _;}m=$z;if(!k[m])return 0;k=Bgx.data;l=a.l;m=e-1|0;$p=2;case 2:$z=ACv(l,m,f,g);if(C())
{break _;}m=$z;n=k[m]?0:1;k=Bgx.data;l=a.l;m=e+1|0;$p=3;case 3:$z=ACv(l,m,f,g);if(C()){break _;}m=$z;o=k[m]?0:1;k=Bgx.data;l=a.l;m=f-1|0;$p=4;case 4:$z=ACv(l,e,m,g);if(C()){break _;}m=$z;p=k[m]?0:1;k=Bgx.data;l=a.l;m=f+1|0;$p=5;case 5:$z=ACv(l,e,m,g);if(C()){break _;}m=$z;q=k[m]?0:1;k=Bgx.data;l=a.l;m=g-1|0;$p=6;case 6:$z=ACv(l,e,f,m);if(C()){break _;}m=$z;m=k[m]?0:1;k=Bgx.data;l=a.l;r=g+1|0;$p=7;case 7:$z=ACv(l,e,f,r);if(C()){break _;}e=$z;r=k[e]?0:1;s=(-1);t=9999.0;if(n&&h<t){s=0;t=h;}if(!o)b=t;else{b=1.0
-h;if(b<t)s=1;else b=t;}if(p&&i<b){s=2;b=i;}if(!q)c=b;else{c=1.0-i;if(c<b)s=3;else c=b;}if(m&&j<c){s=4;c=j;}if(r&&1.0-j<c)s=5;u=N(a.m)*0.20000000298023224+0.10000000149011612;if(!s)a.g= -u;if(s==1)a.g=u;if(s==2)a.i= -u;if(s==3)a.i=u;if(s==4)a.h= -u;if(s==5)a.h=u;return 0;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AMt(a,b){Vg(a,null,b);}
function Vg(a,b,c){a.q3=a.q3-c|0;if(a.q3<=0)Ca(a);return 0;}
function A_b(a,b){if(!a.hc&&U$(b.K,a.ni)){Dh(a.l,a,B(588),0.20000000298023224,((N(a.m)-N(a.m))*0.699999988079071+1.0)*2.0);RW(b,a);Ca(a);}}
function Ms(){C5.call(this);this.hs=0;}
function AWN(a,b,c,d){var e=new Ms();A6w(e,a,b,c,d);return e;}
function A6w(a,b,c,d,e){var f,g,h;FC(a,b);a.hs=0;a.mF=1;D2(a,0.9800000190734863,0.9800000190734863);a.c4=a.eO/2.0;f=c;g=d;h=e;CT(a,f,g,h);e=BP()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.g= -Bq(e)*0.019999999552965164;a.i=0.20000000298023224;a.h= -BC(e)*0.019999999552965164;a.i$=0;a.hs=80;a.bS=f;a.cS=g;a.bR=h;}
function A$b(a){return a.cR?0:1;}
function XI(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARC(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}e=a.hs;a.hs=e-1|0;if(e>0){BV(a.l,B(256),a.d,a.j+0.5,a.e,0.0,
0.0,0.0);return;}$p=2;case 2:Ca(a);if(C()){break _;}f=4.0;g=a.l;h=null;b=a.d;c=a.j;d=a.e;$p=3;case 3:X$(g,h,b,c,d,f);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AOU(){Dg.call(this);this.wf=null;}
function Bal(){var a=new AOU();A7e(a);return a;}
function A7e(a){EI(a);a.wf=Ki();a.md=0.5;}
function APw(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);if(b.hs-g+1.0<10.0){h=1.0-(b.hs-g+1.0)/10.0;if(h<0.0)h=0.0;if(h>1.0)h=1.0;f=h*h;i=1.0+f*f*0.30000001192092896;CC(i,i,i);}h=(1.0-(b.hs-g+1.0)/100.0)*0.800000011920929;j=B(179);$p=1;case 1:AKp(a,j);if(C()){break _;}j=a.wf;L();GY(j,Bfh);if(!((b.hs/5|0)%2|0)){Bc(3553);Bc(2896);Ba(3042);Df(770,772);BU(1.0,
1.0,1.0,h);GY(a.wf,Bfh);BU(1.0,1.0,1.0,1.0);Bc(3042);Ba(2896);Ba(3553);}BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AL5(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APw(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function JK(){var a=this;C5.call(a);a.hU=0;a.oO=0;}
function AYh(a){return a.cR?0:1;}
function AMM(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.hU){$p=3;continue _;}a.bS=a.d;a.cS=a.j;a.bR=a.e;a.oO=a.oO+1|0;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARC(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=K(a.d);f=K(a.j);g=K(a.e);h=a.l;$p=2;case 2:$z=ACv(h,e,f,g);if(C()){break _;}i
=$z;if(i==a.hU){h=a.l;i=0;$p=4;continue _;}if(!a.cx){if(a.oO<=100)return;e=a.hU;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;continue _;case 3:Ca(a);if(C()){break _;}return;case 4:APv(h,e,f,g,i);if(C()){break _;}if(!a.cx){if(a.oO<=100)return;e=a.hU;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;case 5:Ca(a);if(C()){break _;}h=a.l;i=a.hU;j=1;$p=6;case 6:$z=AH8(h,i,e,f,g,j);if(C()){break _;}i=$z;if(!i){e=a.hU;f=1;$p=
9;continue _;}h=a.l;i=a.hU;$p=10;continue _;case 7:ABS(a,e,f);if(C()){break _;}$p=8;case 8:Ca(a);if(C()){break _;}return;case 9:ABS(a,e,f);if(C()){break _;}return;case 10:$z=APv(h,e,f,g,i);if(C()){break _;}e=$z;if(e)return;e=a.hU;f=1;$p=9;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AXY(a){return a.l;}
function AQL(){Dg.call(this);this.Dy=null;}
function Bad(){var a=new AQL();AXq(a);return a;}
function AXq(a){EI(a);a.Dy=Ki();a.md=0.5;}
function AQf(a,b,c,d,e,f,g){var h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);h=B(179);$p=1;case 1:AKp(a,h);if(C()){break _;}L();h=BeM.data[b.hU];i=b.l;Bc(2896);j=a.Dy;k=K(b.d);l=K(b.j);m=K(b.e);$p=2;case 2:AIY(j,h,i,k,l,m);if(C()){break _;}Ba(2896);BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARi(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQf(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Gi(){var a=this;C5.call(a);a.Bp=null;a.iT=0;a.kC=0;a.oN=0;a.kO=0;}
var BlE=null;function ASP(a,b){return b.L;}
function AZ1(a){return a.L;}
function A7C(a){return 1;}
function AVM(a){return a.eO*0.2;}
function ALe(a,b,c){var d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oN= -a.oN;a.kC=10;a.iT=a.iT+(c*10|0)|0;if(a.iT<=40)return 1;BB();c=BiE.cW;d=1;e=0.0;$p=1;case 1:AGD(a,c,d,e);if(C()){break _;}$p=2;case 2:APe(a);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,$p);}
function A9J(a){return a.cR?0:1;}
function APe(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=27;while(b<c){d=TS(a,b);if(d!==null){e=N(a.m)*0.800000011920929+0.10000000149011612;f=N(a.m)*0.800000011920929+0.10000000149011612;g=N(a.m)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;if(d.p>0){k=E(a.m,21)+10|0;if(k>d.p)k=d.p;d.p=d.p-k|0;l=Hf(a.l,a.d+h,a.j+i,a.e+j,
Op(d.bB,k,d.en));l.g=CZ(a.m)*0.05000000074505806;l.i=CZ(a.m)*0.05000000074505806+0.20000000298023224;l.h=CZ(a.m)*0.05000000074505806;m=a.l;$p=2;continue _;}}b=b+1|0;}$p=1;case 1:Ca(a);if(C()){break _;}return;case 2:AOg(m,l);if(C()){break _;}a:while(true){if(d.p>0){k=E(a.m,21)+10|0;if(k>d.p)k=d.p;d.p=d.p-k|0;l=Hf(a.l,a.d+h,a.j+i,a.e+j,Op(d.bB,k,d.en));l.g=CZ(a.m)*0.05000000074505806;l.i=CZ(a.m)*0.05000000074505806+0.20000000298023224;l.h=CZ(a.m)*0.05000000074505806;m=a.l;continue _;}while(true){b=b+1|0;if(b>=
c)break a;d=TS(a,b);if(d===null)continue;else break;}e=N(a.m)*0.800000011920929+0.10000000149011612;f=N(a.m)*0.800000011920929+0.10000000149011612;g=N(a.m)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;}$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ASE(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kC>0)a.kC=a.kC-1|0;if(a.iT>0)a.iT=a.iT-1|0;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i
-0.03999999910593033;b=K(a.d);c=K(a.j);d=K(a.e);e=a.l;f=c-1|0;$p=1;case 1:$z=ACv(e,b,f,d);if(C()){break _;}f=$z;L();if(f==Bg5.b)c=c+(-1)|0;g=0.4;h=0.0078125;e=a.l;$p=2;case 2:$z=ACv(e,b,c,d);if(C()){break _;}f=$z;if(f==Bg5.b){i=a.d;j=a.j;k=a.e;$p=3;continue _;}if(a.g<(-0.4))a.g=(-0.4);if(a.g>g)a.g=g;if(a.h<(-0.4))a.h=(-0.4);if(a.h>g)a.h=g;if(a.cx){a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;}i=a.g;j=a.i;k=a.h;$p=5;continue _;case 3:$z=ASi(a,i,j,k);if(C()){break _;}l=$z;e=a.l;$p=4;case 4:$z=AEI(e,b,c,d);if(C()){break _;}m
=$z;a.j=c;n=R(m,2);if(n>=0&&m<=5)a.j=c+1|0;if(!n)a.g=a.g-h;if(m==3)a.g=a.g+h;if(m==4)a.h=a.h+h;if(m==5)a.h=a.h-h;o=BlE.data[m].data;p=o[1].data[0]-o[0].data[0]|0;q=o[1].data[2]-o[0].data[2]|0;r=Ee(p*p+q*q);if(a.g*p+a.h*q<0.0){p= -p;q= -q;}s=Ee(a.g*a.g+a.h*a.h);a.g=s*p/r;a.h=s*q/r;t=b;u=t+0.5;v=u+o[0].data[0]*0.5;w=d;p=w+0.5;i=p+o[0].data[2]*0.5;j=u+o[1].data[0]*0.5;k=p+o[1].data[2]*0.5;j=j-v;k=k-i;if(j===0.0){a.d=u;u=a.e-w;}else if(k===0.0){a.e=p;u=a.d-t;}else u=((a.d-v)*j+(a.e-i)*k)*2.0;a.d=v+j*u;a.e=i+k*u;CT(a,
a.d,a.j+a.c4,a.e);x=a.g;t=a.h;if(a.bH!==null){x=x*0.75;t=t*0.75;}i=(-0.4);if(x<i)x=i;if(x>g)x=g;if(t>=i)i=t;if(i<=g)g=i;i=0.0;$p=7;continue _;case 5:ARC(a,i,j,k);if(C()){break _;}if(!a.cx){a.g=a.g*0.949999988079071;a.i=a.i*0.949999988079071;a.h=a.h*0.949999988079071;}a.I=0.0;y=a.bS-a.d;z=a.bR-a.e;if(y*y+z*z>0.001){a.v=CR(z,y)*180.0/3.141592653589793;if(a.kO)a.v=a.v+180.0;}ba=a.v-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.v=a.v+180.0;a.kO=a.kO?0:1;}WQ(a,
a.v,a.I);e=a.l;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADJ(e,a,l);if(C()){break _;}bb=$z;if(bb!==null&&CX(bb)>0){bc=0;while(true){if(bc>=CX(bb))break a;bd=Z(bb,bc);if(bd!==a.bH&&bd.rR()&&bd instanceof Gi)bd.uZ(a);bc=bc+1|0;}}}if(a.bH!==null&&a.bH.cR)a.bH=null;return;case 7:ARC(a,x,i,g);if(C()){break _;}if(o[0].data[1]&&(K(a.d)-b|0)==o[0].data[0]&&(K(a.e)-d|0)==o[0].data[2])CT(a,a.d,a.j+o[0].data[1],a.e);else if(o[1].data[1]&&(K(a.d)-b|0)==o[1].data[0]&&(K(a.e)-d|0)==o[1].data[2])CT(a,
a.d,a.j+o[1].data[1],a.e);if(a.bH===null){a.g=a.g*0.9599999785423279;a.i=a.i*0.0;a.h=a.h*0.9599999785423279;}else{a.g=a.g*0.996999979019165;a.i=a.i*0.0;a.h=a.h*0.996999979019165;}i=a.d;j=a.j;k=a.e;$p=8;case 8:$z=ASi(a,i,j,k);if(C()){break _;}e=$z;if(e!==null&&l!==null){w=(l.z-e.z)*0.05;i=Ee(a.g*a.g+a.h*a.h);if(i>0.0){j=a.g/i;k=i+w;a.g=j*k;a.h=a.h/i*k;}CT(a,a.d,e.z,a.e);}f=K(a.d);n=K(a.e);if(!(f==b&&n==d)){i=Ee(a.g*a.g+a.h*a.h);a.g=i*(f-b|0);a.h=i*(n-d|0);}a.I=0.0;y=a.bS-a.d;z=a.bR-a.e;if(y*y+z*z>0.001){a.v=
CR(z,y)*180.0/3.141592653589793;if(a.kO)a.v=a.v+180.0;}ba=a.v-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.v=a.v+180.0;a.kO=a.kO?0:1;}WQ(a,a.v,a.I);e=a.l;l=Dv(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AJV(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=K(b);g=K(c);h=K(d);i=a.l;j=g-1|0;$p=1;case 1:$z=ACv(i,f,j,h);if(C()){break _;}j=$z;L();if(j==Bg5.b)g=g+(-1)|0;i=a.l;$p=2;case 2:$z=ACv(i,f,g,h);if(C()){break _;}j=$z;if(j!=Bg5.b)return null;i=a.l;$p=3;case 3:$z=AEI(i,f,g,h);if(C()){break _;}j=$z;c=g;if(j>=2&&j<=5)c
=g+1|0;k=BlE.data[j].data;l=k[1].data[0]-k[0].data[0]|0;m=k[1].data[2]-k[0].data[2]|0;n=Ee(l*l+m*m);l=l/n;m=m/n;l=b+l*e;d=d+m*e;if(k[0].data[1]&&(K(l)-f|0)==k[0].data[0]&&(K(d)-h|0)==k[0].data[2])c=c+k[0].data[1];else if(k[1].data[1]&&(K(l)-f|0)==k[1].data[0]&&(K(d)-h|0)==k[1].data[2])c=c+k[1].data[1];$p=4;case 4:$z=ASi(a,l,c,d);if(C()){break _;}i=$z;return i;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASi(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=a.l;i=f-1|0;$p=1;case 1:$z=ACv(h,e,i,g);if(C()){break _;}i=$z;L();if(i==Bg5.b)f=f+(-1)|0;h=a.l;$p=2;case 2:$z=ACv(h,e,f,g);if(C()){break _;}i=$z;if(i!=Bg5.b)return null;h
=a.l;$p=3;case 3:$z=AEI(h,e,f,g);if(C()){break _;}j=$z;c=f;k=BlE.data[j].data;l=e;m=l+0.5;n=m+k[0].data[0]*0.5;o=c+0.5;p=o+k[0].data[1]*0.5;q=g;r=q+0.5;s=r+k[0].data[2]*0.5;m=m+k[1].data[0]*0.5;t=o+k[1].data[1]*0.5;o=r+k[1].data[2]*0.5;r=m-n;u=(t-p)*2.0;v=o-s;l=r===0.0?d-q:v===0.0?b-l:((b-n)*r+(d-s)*v)*2.0;b=n+r*l;c=p+u*l;d=s+v*l;i=R(u,0.0);if(i<0)c=c+1.0;if(i>0)c=c+0.5;return BY(b,c,d);default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function A3N(a,b){var c,d,e,f,g,h;if(b!==a.bH){c=b.d-a.d;d=b.e-a.e;e=c*c+d*d;if(e>=9.999999747378752E-5){e=Ce(e);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;d=f*g;c=c*0.10000000149011612;d=d*0.10000000149011612;c=c*(1.0-a.n6);d=d*(1.0-a.n6);c=c*0.5;d=d*0.5;if(!(b instanceof Gi)){Hr(a, -c,0.0, -d);Hr(b,c/4.0,0.0,d/4.0);}else{f=(b.g+a.g)/2.0;h=(b.h+a.h)/2.0;a.h=0.0;a.g=0.0;Hr(a,f-c,0.0,h-d);b.h=0.0;b.g=0.0;Hr(b,f+c,0.0,h+d);}}}}
function A06(a){return 27;}
function TS(a,b){return a.Bp.data[b];}
function A8M(a,b){Pi(b,a);return 1;}
function AMH(){var b,c,d,e,f,g;b=J($rt_arraycls($rt_arraycls($rt_intcls())),10);c=b.data;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[0]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[1]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]
=(-1);g[1]=(-1);g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[2]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=(-1);g[2]=0;e[1]=f;c[3]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=(-1);g[2]=1;e[1]=f;c[4]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=(-1);g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[5]=d;g=J($rt_arraycls($rt_intcls()),2);e=g.data;d=$rt_createIntArray(3);f=d.data;f[0]=0;f[1]=0;f[2]=1;e[0]=d;d=$rt_createIntArray(3);f=d.data;f[0]=1;f[1]=0;f[2]=0;e[1]=d;c[6]=g;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[7]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[8]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[9]=d;BlE=b;}
function ARx(){Dg.call(this);this.C0=null;}
function Bb4(){var a=new ARx();A$e(a);return a;}
function A$e(a){EI(a);a.md=0.5;a.C0=BcY();}
function AQe(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();h=b.cs;i=b.d-b.cs;j=g;k=h+i*j;l=b.b7+(b.j-b.b7)*j;i=b.ct+(b.e-b.ct)*j;h=0.30000001192092896;$p=1;case 1:$z=ASi(b,k,l,i);if(C()){break _;}m=$z;n=b.T+(b.I-b.T)*g;if(m!==null){$p=2;continue _;}Bw(c,d,e);Bv(180.0
-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.kC-g;p=b.iT-g;if(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oN,1.0,0.0,0.0);b=B(179);$p=4;continue _;case 2:$z=AJV(b,k,l,i,h);if(C()){break _;}q=$z;h=(-0.30000001192092896);$p=3;case 3:$z=AJV(b,k,l,i,h);if(C()){break _;}r=$z;if(q===null)q=m;if(r===null)r=m;c=c+m.x-k;d=d+(q.z+r.z)/2.0-l;e=e+m.w-i;s=Dk(r, -q.x, -q.z, -q.w);if(HQ(s)!==0.0){s=CD(s);f=CR(s.w,s.x)*180.0/3.141592653589793;n=Ir(s.z)*73.0;}Bw(c,d,e);Bv(180.0-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.kC-g;p=b.iT-g;if
(p<0.0)p=0.0;if(o>0.0)Bv(Bq(o)*o*p/10.0*b.oN,1.0,0.0,0.0);b=B(179);$p=4;case 4:AKp(a,b);if(C()){break _;}CC(0.75,0.75,0.75);b=Ki();L();GY(b,BgU);CC(1.3333333730697632,1.3333333730697632,1.3333333730697632);b=B(590);$p=5;case 5:AKp(a,b);if(C()){break _;}CC((-1.0),(-1.0),1.0);AKq(a.C0,0.0,0.0,(-0.10000000149011612),0.0,0.0,0.0625);BD();return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AQd(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQe(a,b,c,d,e,f,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function V7(){var a=this;D.call(a);a.u3=Long_ZERO;a.t5=0;a.y_=0;}
function BlF(){var a=new V7();AUa(a);return a;}
function AUa(a){return;}
function ABB(){var a=this;D.call(a);a.wm=null;a.wE=null;}
function BbO(){var a=new ABB();AUl(a);return a;}
function AUl(a){a.wm=BK(0,0);BG(a.wm,(-12.0),(-14.0),(-1.0),24,12,2,0.0);a.wE=BK(0,14);BG(a.wE,(-1.0),(-2.0),(-1.0),2,14,2,0.0);}
function AM$(a){B_(a.wm,0.0625);B_(a.wE,0.0625);}
function AH4(){var a=this;Ei.call(a);a.l1=null;a.qS=null;a.rD=null;a.kb=null;a.ka=null;a.kd=null;a.kc=null;a.kf=null;a.ke=null;a.kh=null;a.kg=null;}
function A5k(){var a=new AH4();AUL(a);return a;}
function AUL(a){a.l1=BK(32,4);BG(a.l1,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BJ(a.l1,0.0,15.0,(-3.0));a.qS=BK(0,0);BG(a.qS,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BJ(a.qS,0.0,15.0,0.0);a.rD=BK(0,12);BG(a.rD,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BJ(a.rD,0.0,15.0,9.0);a.kb=BK(18,0);BG(a.kb,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kb,(-4.0),15.0,2.0);a.ka=BK(18,0);BG(a.ka,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.ka,4.0,15.0,2.0);a.kd=BK(18,0);BG(a.kd,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kd,(-4.0),15.0,1.0);a.kc=BK(18,0);BG(a.kc,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BJ(a.kc,4.0,15.0,1.0);a.kf=BK(18,0);BG(a.kf,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kf,(-4.0),15.0,0.0);a.ke=BK(18,0);BG(a.ke,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.ke,4.0,15.0,0.0);a.kh=BK(18,0);BG(a.kh,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kh,(-4.0),15.0,(-1.0));a.kg=BK(18,0);BG(a.kg,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kg,4.0,15.0,(-1.0));}
function AX$(a,b,c,d,e,f,g){Yt(a,b,c,d,e,f,g);B_(a.l1,g);B_(a.qS,g);B_(a.rD,g);B_(a.kb,g);B_(a.ka,g);B_(a.kd,g);B_(a.kc,g);B_(a.kf,g);B_(a.ke,g);B_(a.kh,g);B_(a.kg,g);}
function Yt(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.l1.bX=e/57.2957763671875;a.l1.b1=f/57.2957763671875;a.kb.bU=(-0.7853981852531433);a.ka.bU=0.7853981852531433;a.kd.bU=(-0.5811946392059326);a.kc.bU=0.5811946392059326;a.kf.bU=(-0.5811946392059326);a.ke.bU=0.5811946392059326;a.kh.bU=(-0.7853981852531433);a.kg.bU=0.7853981852531433;a.kb.bX=0.7853981852531433;a.ka.bX=(-0.7853981852531433);a.kd.bX=0.39269909262657166;a.kc.bX=(-0.39269909262657166);a.kf.bX=(-0.39269909262657166);a.ke.bX=0.39269909262657166;a.kh.bX
=(-0.7853981852531433);a.kg.bX=0.7853981852531433;b=b*0.6661999821662903;f=b*2.0;h= -(BC(f+0.0)*0.4000000059604645)*c;i= -(BC(f+3.1415927410125732)*0.4000000059604645)*c;j= -(BC(f+1.5707963705062866)*0.4000000059604645)*c;k= -(BC(f+4.71238899230957)*0.4000000059604645)*c;l=HY(Bq(b+0.0)*0.4000000059604645)*c;m=HY(Bq(b+3.1415927410125732)*0.4000000059604645)*c;n=HY(Bq(b+1.5707963705062866)*0.4000000059604645)*c;o=HY(Bq(b+4.71238899230957)*0.4000000059604645)*c;p=a.kb;p.bX=p.bX+h;p=a.ka;p.bX=p.bX+ -h;p=a.kd;p.bX
=p.bX+i;p=a.kc;p.bX=p.bX+ -i;p=a.kf;p.bX=p.bX+j;p=a.ke;p.bX=p.bX+ -j;p=a.kh;p.bX=p.bX+k;p=a.kg;p.bX=p.bX+ -k;p=a.kb;p.bU=p.bU+l;p=a.ka;p.bU=p.bU+ -l;p=a.kd;p.bU=p.bU+m;p=a.kc;p.bU=p.bU+ -m;p=a.kf;p.bU=p.bU+n;p=a.ke;p.bU=p.bU+ -n;p=a.kh;p.bU=p.bU+o;p=a.kg;p.bU=p.bU+ -o;}
function AIy(){var a=this;Ei.call(a);a.l7=null;a.vu=null;a.sV=null;a.po=null;a.pn=null;a.pm=null;a.pl=null;}
function BaS(){var a=new AIy();A47(a);return a;}
function A47(a){a.l7=BK(0,0);BG(a.l7,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BJ(a.l7,0.0,4.0,0.0);a.vu=BK(32,0);BG(a.vu,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BJ(a.vu,0.0,4.0,0.0);a.sV=BK(16,16);BG(a.sV,(-4.0),0.0,(-2.0),8,12,4,0.0);BJ(a.sV,0.0,4.0,0.0);a.po=BK(0,16);BG(a.po,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.po,(-2.0),16.0,4.0);a.pn=BK(0,16);BG(a.pn,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pn,2.0,16.0,4.0);a.pm=BK(0,16);BG(a.pm,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pm,(-2.0),16.0,(-4.0));a.pl=BK(0,16);BG(a.pl,(-2.0),0.0,(-2.0),4,6,4,
0.0);BJ(a.pl,2.0,16.0,(-4.0));}
function A21(a,b,c,d,e,f,g){Zq(a,b,c,d,e,f,g);B_(a.l7,g);B_(a.sV,g);B_(a.po,g);B_(a.pn,g);B_(a.pm,g);B_(a.pl,g);}
function Zq(a,b,c,d,e,f,g){var h;a.l7.bX=e/57.2957763671875;a.l7.b1=f/57.2957763671875;h=a.po;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.pn;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.pm.b1=BC(d)*1.399999976158142*c;a.pl.b1=BC(b)*1.399999976158142*c;}
function AEV(){Ei.call(this);this.cZ=null;}
function BcY(){var a=new AEV();A3Z(a);return a;}
function A3Z(a){a.cZ=J(QH,7);a.cZ.data[0]=BK(0,10);a.cZ.data[1]=BK(0,0);a.cZ.data[2]=BK(0,0);a.cZ.data[3]=BK(0,0);a.cZ.data[4]=BK(0,0);a.cZ.data[5]=BK(44,10);BG(a.cZ.data[0],(-10.0),(-8.0),(-1.0),20,16,2,0.0);BJ(a.cZ.data[0],0.0,4.0,0.0);BG(a.cZ.data[5],(-9.0),(-7.0),(-1.0),18,14,1,0.0);BJ(a.cZ.data[5],0.0,4.0,0.0);BG(a.cZ.data[1],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cZ.data[1],(-9.0),4.0,0.0);BG(a.cZ.data[2],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cZ.data[2],9.0,4.0,0.0);BG(a.cZ.data[3],(-8.0),(-9.0),(-1.0),
16,8,2,0.0);BJ(a.cZ.data[3],0.0,4.0,(-7.0));BG(a.cZ.data[4],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cZ.data[4],0.0,4.0,7.0);a.cZ.data[0].b1=1.5707963705062866;a.cZ.data[1].bX=4.71238899230957;a.cZ.data[2].bX=1.5707963705062866;a.cZ.data[3].bX=3.1415927410125732;a.cZ.data[5].b1=(-1.5707963705062866);}
function AKq(a,b,c,d,e,f,g){var h;a.cZ.data[5].m6=4.0-d;h=0;while(h<6){B_(a.cZ.data[h],g);h=h+1|0;}}
function Tv(){var a=this;D.call(a);a.lL=0;a.ym=0;a.ss=0;a.nk=0;a.lc=null;}
function KC(a){return a.lL>=a.ss?0:1;}
function KT(a){var b,c;PH(a);a.nk=a.lL;b=a.lc;c=a.lL;a.lL=c+1|0;return Z(b,c);}
function AL_(a){var b;if(a.nk<0){b=new D3;O(b);M(b);}PH(a);Eo(a.lc,a.nk);a.ym=a.lc.d7;if(a.nk<a.lL)a.lL=a.lL-1|0;a.ss=a.ss-1|0;a.nk=(-1);}
function PH(a){var b;if(a.ym>=a.lc.d7)return;b=new KS;O(b);M(b);}
function I5(){var a=this;D.call(a);a.g4=null;a.tv=0;a.cE=null;a.gj=null;a.hF=null;a.jy=null;a.fv=null;a.q1=0;a.fZ=0;a.fW=0;a.iX=null;a.dO=null;a.gz=0;a.f0=0;a.qb=0;a.Ek=0;a.sa=0;a.s6=Long_ZERO;}
var Bkn=0;function BaI(a,b,c){var d=new I5();AQ$(d,a,b,c);return d;}
function A9p(a,b,c,d){var e=new I5();A1v(e,a,b,c,d);return e;}
function AQ$(a,b,c,d){var e;a.iX=De();a.dO=J(J3,8);a.gz=0;a.f0=0;a.Ek=0;a.sa=0;a.s6=Long_ZERO;a.cE=b;a.fZ=c;a.fW=d;a.fv=$rt_createByteArray(256);e=0;while(e<a.dO.data.length){a.dO.data[e]=Ci();e=e+1|0;}}
function A1v(a,b,c,d,e){var f;f=c.data;AQ$(a,b,d,e);a.g4=c;b=new T8;d=f.length;AJz(b,d);a.gj=b;a.hF=Lv(d);a.jy=Lv(d);}
function ARE(a,b,c){return b==a.fZ&&c==a.fW?1:0;}
function UK(a,b,c){return a.fv.data[c<<4|b]&255;}
function A5F(a){return;}
function ALE(a,b,c){var d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=UK(a,b,c);e=(a.fZ*16|0)+b|0;f=(a.fW*16|0)+c|0;b=e-1|0;$p=1;case 1:AJG(a,b,f,d);if(C()){break _;}b=e+1|0;$p=2;case 2:AJG(a,b,f,d);if(C()){break _;}b=f-1|0;$p=3;case 3:AJG(a,e,b,d);if(C()){break _;}b=f+1|0;$p=4;case 4:AJG(a,e,b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function Sf(a){var b,c,d,e,f;b=127;c=0;while(c<16){d=0;while(d<16){e=127;f=c<<11|d<<7;while(e>0){L();if(Bgy.data[a.g4.data[(f+e|0)-1|0]])break;e=e+(-1)|0;}a.fv.data[d<<4|c]=e<<24>>24;if(e<b)b=e;d=d+1|0;}c=c+1|0;}a.q1=b;a.f0=1;}
function AJG(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cE;$p=1;case 1:$z=ALF(e,b,c);if(C()){break _;}f=$z;g=R(f,d);if(g>0)DU(a.cE,Bku,b,d,c,b,f,c);else if(g<0)DU(a.cE,Bku,b,f,c,b,d,c);a.f0=1;return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function Fs(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.fv.data;f=d<<4|b;g=e[f]&255;if(c<=g)c=g;while(c>0){L();if(Bgy.data[FR(a,b,c-1|0,d)])break;c=c+(-1)|0;}h=R(c,g);if(h){APH(a.cE,b,d,c,g);a.fv.data[f]=c<<24>>24;if(c<a.q1)a.q1=c;else{f=127;i=0;while(i<16){j=0;while(j<16){e=a.fv.data;k=j<<4|i;if((e[k]&255)<f)f=a.fv.data[k]&255;j=j+1|0;}i=i+1|0;}a.q1=f;}a:{f=(a.fZ*16|0)+b|0;i=(a.fW*16|0)+d|0;if(h<0){j=c;while(true){if(j>=g)break a;El(a.hF,b,j,d,15);j=j+1|0;}}DU(a.cE,Bku,f,g,i,f,c,i);while(true){if(g>=c)break a;El(a.hF,
b,g,d,0);g=g+1|0;}}j=15;k=c;b:{while(k>0){if(j<=0)break b;k=k+(-1)|0;L();l=Bgy.data[FR(a,b,k,d)];if(!l)l=1;j=j-l|0;if(j<0)j=0;El(a.hF,b,k,d,j);}}while(k>0){L();if(Bgy.data[FR(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k!=c)DU(a.cE,Bku,f-1|0,k,i-1|0,f+1|0,c,i+1|0);a.f0=1;}}
function FR(a,b,c,d){return a.g4.data[b<<11|d<<7|c];}
function ADD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e<<24>>24;h=a.fv.data[d<<4|b]&255;i=a.g4.data;j=b<<11|d<<7|c;k=i[j]&255;if(k==e&&G7(a.gj,b,c,d)==f)return 0;l=(a.fZ*16|0)+b|0;m=(a.fW*16|0)+d|0;a.g4.data[j]=g;if(k){L();n=BeM.data[k];o=a.cE;$p=1;continue _;}El(a.gj,b,c,d,f);L();if(!Bgy.data[g]){if(c==(h
-1|0))Fs(a,b,c,d);}else if(c>=h)Fs(a,b,c+1|0,d);DU(a.cE,Bku,l,c,m,l,c,m);DU(a.cE,Bkv,l,c,m,l,c,m);$p=2;continue _;case 1:n.lB(o,l,c,m);if(C()){break _;}El(a.gj,b,c,d,f);L();if(!Bgy.data[g]){if(c==(h-1|0))Fs(a,b,c,d);}else if(c>=h)Fs(a,b,c+1|0,d);DU(a.cE,Bku,l,c,m,l,c,m);DU(a.cE,Bkv,l,c,m,l,c,m);$p=2;case 2:ALE(a,b,d);if(C()){break _;}El(a.gj,b,c,d,f);if(!e){a.f0=1;return 1;}n=BeM.data[e];o=a.cE;$p=3;case 3:n.fE(o,l,c,m);if(C()){break _;}a.f0=1;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ADA(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=e<<24>>24;g=a.fv.data[d<<4|b]&255;h=a.g4.data;i=b<<11|d<<7|c;j=h[i]&255;if(j==e)return 0;k=(a.fZ*16|0)+b|0;l=(a.fW*16|0)+d|0;a.g4.data[i]=f;if(j){L();m=BeM.data[j];n=a.cE;$p=1;continue _;}El(a.gj,b,c,d,0);L();if(!Bgy.data[f]){if(c==(g-1|0))Fs(a,b,c,d);}else if(c>=
g)Fs(a,b,c+1|0,d);DU(a.cE,Bku,k,c,l,k,c,l);DU(a.cE,Bkv,k,c,l,k,c,l);$p=2;continue _;case 1:m.lB(n,k,c,l);if(C()){break _;}El(a.gj,b,c,d,0);L();if(!Bgy.data[f]){if(c==(g-1|0))Fs(a,b,c,d);}else if(c>=g)Fs(a,b,c+1|0,d);DU(a.cE,Bku,k,c,l,k,c,l);DU(a.cE,Bkv,k,c,l,k,c,l);$p=2;case 2:ALE(a,b,d);if(C()){break _;}if(!e){a.f0=1;return 1;}m=BeM.data[e];n=a.cE;$p=3;case 3:m.fE(n,k,c,l);if(C()){break _;}a.f0=1;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function RS(a,b,c,d){return G7(a.gj,b,c,d);}
function AAu(a,b,c,d,e){a.f0=1;El(a.gj,b,c,d,e);}
function ACk(a,b,c,d,e){return b===Bku?G7(a.hF,c,d,e):b!==Bkv?0:G7(a.jy,c,d,e);}
function AQK(a,b,c,d,e,f){a.f0=1;if(b===Bku)El(a.hF,c,d,e,f);else{if(b!==Bkv)return;El(a.jy,c,d,e,f);}}
function VO(a,b,c,d,e){var f,g;f=G7(a.hF,b,c,d);if(f>0)Bkn=1;e=f-e|0;g=G7(a.jy,b,c,d);if(g<=e)g=e;return g;}
function VR(a,b){var c,d,e,f,g;a.sa=1;c=K(b.d/16.0);d=K(b.e/16.0);if(!(c==a.fZ&&d==a.fW)){e=Dz();f=new S;V(f);Cg(e,T(FN(H(f,B(591)),b)));}g=K(b.j/16.0);if(g<0)g=0;if(g>=a.dO.data.length)g=a.dO.data.length-1|0;U(a.dO.data[g],b);}
function AMZ(a,b){R1(a,b,K(b.j/16.0));}
function R1(a,b,c){var d,e;if(c<0)c=0;if(c>=a.dO.data.length)c=a.dO.data.length-1|0;if(!Q6(a.dO.data[c],b)){d=Dz();e=new S;V(e);Cg(d,T(FN(H(e,B(592)),b)));}H$(a.dO.data[c],b);}
function Pm(a,b,c,d){return c<(a.fv.data[d<<4|b]&255)?0:1;}
function ANn(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;f=CP(a.iX,CY(e));if(f!==null)return f;g=FR(a,b,c,d);L();h=BeM.data[g];f=a.cE;b=(a.fZ*16|0)+b|0;d=(a.fW*16|0)+d|0;$p=1;case 1:h.fE(f,b,c,d);if(C()){break _;}return CP(a.iX,CY(e));default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AJi(a,b,c,d,e){var f;a:{f=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;e.ci=a.cE;e.dL=(a.fZ*16|0)+b|0;e.dJ=c;e.dS=(a.fW*16|0)+d|0;if(FR(a,b,c,d)){L();if(BeM.data[FR(a,b,c,d)] instanceof Eh){if(a.tv){if(CP(a.iX,CY(f))!==null)H$(a.cE.fD,CP(a.iX,CY(f)));U(a.cE.fD,e);}BR(a.iX,CY(f),e);break a;}}Cg(Dz(),B(593));}}
function ADY(a,b,c,d){var e;e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;if(a.tv)H$(a.cE.fD,Q7(a.iX,CY(e)));}
function J0(a){var b;a.tv=1;DF(a.cE.fD,Is(a.iX));b=0;while(b<a.dO.data.length){AQb(a.cE,a.dO.data[b]);b=b+1|0;}}
function AOM(a){var b;a.tv=0;Gf(a.cE.fD,Is(a.iX));b=0;while(b<a.dO.data.length){AQ1(a.cE,a.dO.data[b]);b=b+1|0;}}
function SK(a){a.f0=1;}
function AJY(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dO.data.length)f=a.dO.data.length-1|0;while(e<=f){g=a.dO.data[e];h=0;while(h<g.s){i=Z(g,h);if(i!==b&&L7(i.L,c))U(d,i);h=h+1|0;}e=e+1|0;}}
function AMi(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dO.data.length)f=a.dO.data.length-1|0;while(e<=f){g=a.dO.data[e];h=0;while(h<g.s){i=Z(g,h);if(P6(b,Dl(i))&&L7(i.L,c))U(d,i);h=h+1|0;}e=e+1|0;}}
function Kn(a,b){return a.qb?0:a.sa&&Long_ne(a.cE.ee,a.s6)?1:a.f0;}
function It(){var a=this;D.call(a);a.jn=0;a.iw=0;a.ky=null;a.x0=null;}
function BlG(a,b,c,d,e,f,g){var h=new It();AEt(h,a,b,c,d,e,f,g);return h;}
function AEt(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.x0=b;a.jn=c>>4;a.iw=e>>4;i=f>>4;j=h>>4;a.ky=$rt_createMultiArray($rt_arraycls($rt_arraycls(I5)),[(j-a.iw|0)+1|0,(i-a.jn|0)+1|0]);k=a.jn;while(k<=i){l=a.iw;if(l<=j){m=a.ky.data[k-a.jn|0].data;c=l-a.iw|0;$p=1;continue _;}k=k+1|0;}return;case 1:$z=ZT(b,k,l);if(C()){break _;}n
=$z;m[c]=n;l=l+1|0;while(true){if(l<=j){m=a.ky.data[k-a.jn|0].data;c=l-a.iw|0;continue _;}k=k+1|0;if(k>i)break;l=a.iw;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function HA(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jn|0;f=(d>>4)-a.iw|0;return FR(a.ky.data[e].data[f],b&15,c,d&15);}
function AFS(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b>>4)-a.jn|0;f=(d>>4)-a.iw|0;g=a.ky.data[e].data[f];e=b&15;b=d&15;$p=1;case 1:$z=ANn(g,e,c,b);if(C()){break _;}g=$z;return g;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAN(a,b,c,d){return Bkq.data[Z5(a,b,c,d)];}
function Z5(a,b,c,d){return GU(a,b,c,d,1);}
function GU(a,b,c,d,e){var f,g,h,i,j,k;if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){a:{if(e){f=HA(a,b,c,d);L();if(f==BeR.b)break a;if(f==Bg0.b)break a;}if(c<0)return 0;if(c>=128){f=15-a.x0.gh|0;if(f<0)f=0;return f;}f=(b>>4)-a.jn|0;g=(d>>4)-a.iw|0;return VO(a.ky.data[f].data[g],b&15,c,d&15,a.x0.gh);}g=GU(a,b,c+1|0,d,0);h=GU(a,b+1|0,c,d,0);i=GU(a,b-1|0,c,d,0);j=GU(a,b,c,d+1|0,0);k=GU(a,b,c,d-1|0,0);if(h<=g)h=g;if(i<=h)i=h;if(j<=i)j=i;if(k<=j)k=j;return k;}return 15;}
function AC4(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jn|0;f=(d>>4)-a.iw|0;return RS(a.ky.data[e].data[f],b&15,c,d&15);}
function N5(a,b,c,d){var e,f;e=HA(a,b,c,d);if(!e)f=Bf8;else{L();f=BeM.data[e].b_;}return f;}
function AB5(a,b,c,d){var e;L();e=BeM.data[HA(a,b,c,d)];return e!==null?e.d5():0;}
function Gl(){BE.call(this);}
function BlH(){var a=new Gl();A$c(a);return a;}
function A$c(a){O(a);}
function UT(){Gl.call(this);}
function BlI(){var a=new UT();A6J(a);return a;}
function A6J(a){O(a);}
function Vc(){D.call(this);}
var BlJ=null;function BlK(){var a=new Vc();AO5(a);return a;}
function AO5(a){return;}
function AIG(){var b,c;b=$rt_createIntArray(12);c=b.data;c[0]=1;c[1]=4;c[2]=2;c[3]=1024;c[4]=8;c[5]=16;c[6]=128;c[7]=64;c[8]=32;c[9]=256;c[10]=2048;c[11]=512;BlJ=b;}
function PL(){Go.call(this);this.we=null;}
function A0n(a,b){return AEb(a.we,b);}
function Nh(a){var b;b=new U_;Vz(b,a.we);return b;}
function Ts(){D.call(this);this.Ji=null;}
function AOu(a){Bd();BdC.requestPointerLock();MW(0);}
function A_u(a){AOu(a);}
function AQE(){D.call(this);}
function BlL(){var a=new AQE();A3$(a);return a;}
function A3$(a){return;}
function WV(){var a=this;D_.call(a);a.cu=null;a.gZ=0;a.pT=0;a.kW=0;}
function Baz(){var a=new WV();AU_(a);return a;}
function AU_(a){a.cu=J(Cd,3);a.gZ=0;a.pT=0;a.kW=0;}
function A9m(a,b){return a.cu.data[b];}
function A8f(a,b,c){var d;if(a.cu.data[b]===null)return null;if(a.cu.data[b].p<=c){d=a.cu.data[b];a.cu.data[b]=null;return d;}d=EG(a.cu.data[b],c);if(!a.cu.data[b].p)a.cu.data[b]=null;return d;}
function AVq(a,b,c){a.cu.data[b]=c;if(c!==null&&c.p>64)c.p=64;}
function AT4(a){return 64;}
function AOK(a,b){return Bj(a.kW,b)/200|0;}
function ADI(a,b){if(!a.pT)a.pT=200;return Bj(a.gZ,b)/a.pT|0;}
function WL(a){return a.gZ<=0?0:1;}
function AGC(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gZ<=0?0:1;c=0;if(a.gZ>0){a.gZ=a.gZ-1|0;c=1;}if(!a.gZ&&Oj(a)){d=a.cu.data[1];if(d===null)e=0;else a:{f=DL(d).cW;if(f<256){L();if(BeM.data[f].b_===Bg9){e=300;break a;}}BB();e=f==Bh2.cW?100:f!=Bhx.cW?0:1600;}a.gZ=e;a.pT=e;if(a.gZ>0){c=1;if(a.cu.data[1]!==null){d=a.cu.data[1];d.p=d.p-1|0;if(!a.cu.data[1].p)a.cu.data[1]
=null;}}}if(WL(a)&&Oj(a)){a.kW=a.kW+1|0;if(a.kW==200){a.kW=0;ADw(a);c=1;}}else a.kW=0;if(b==(a.gZ<=0?0:1)){if(!c)return;d=a.ci;e=a.dL;b=a.dJ;c=a.dS;$p=1;continue _;}c=1;b=a.gZ<=0?0:1;g=a.ci;f=a.dL;h=a.dJ;i=a.dS;$p=2;continue _;case 1:AGr(d,e,b,c);if(C()){break _;}return;case 2:$z=AEI(g,f,h,i);if(C()){break _;}e=$z;$p=3;case 3:$z=ANw(g,f,h,i);if(C()){break _;}j=$z;if(!b){L();b=Bg1.b;$p=4;continue _;}L();b=Bg2.b;$p=5;continue _;case 4:APv(g,f,h,i,b);if(C()){break _;}$p=6;continue _;case 5:APv(g,f,h,i,b);if(C())
{break _;}$p=6;case 6:AKt(g,f,h,i,e);if(C()){break _;}$p=7;case 7:AFR(g,f,h,i,j);if(C()){break _;}if(!c)return;d=a.ci;e=a.dL;b=a.dJ;c=a.dS;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Oj(a){var b,c;if(a.cu.data[0]===null)return 0;b=UW(a,DL(a.cu.data[0]).cW);if(b<0)b=0;else if(a.cu.data[2]===null)b=1;else if(a.cu.data[2].bB!=b)b=0;else if(a.cu.data[2].p<64&&a.cu.data[2].p<EC(a.cu.data[2]))b=1;else{c=a.cu.data[2].p;BB();b=c>=Bhb.data[b].eZ?0:1;}return b;}
function ADw(a){var b,c;if(Oj(a)){b=UW(a,DL(a.cu.data[0]).cW);if(a.cu.data[2]===null)a.cu.data[2]=Kz(b,1);else if(a.cu.data[2].bB==b){c=a.cu.data[2];c.p=c.p+1|0;}c=a.cu.data[0];c.p=c.p-1|0;if(a.cu.data[0].p<=0)a.cu.data[0]=null;}}
function UW(a,b){L();if(b==Bfc.b){BB();b=BhN.cW;}else if(b==Bfd.b){BB();b=BhO.cW;}else if(b==BgW.b){BB();b=Bhy.cW;}else if(b==Be9.b)b=Be2.b;else{BB();b=b==Bgd.cW?Bix.cW:b!=BeW.b?(-1):BeS.b;}return b;}
function Z3(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ci;c=a.dL;d=a.dJ;e=a.dS;$p=1;case 1:AGr(b,c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Te(){D_.call(this);this.hZ=null;}
function Bbd(){var a=new Te();A16(a);return a;}
function A16(a){a.hZ=J(Cd,36);}
function AVK(a){return 27;}
function Rb(a,b){return a.hZ.data[b];}
function A1Q(a,b,c){var d;if(a.hZ.data[b]===null)return null;if(a.hZ.data[b].p<=c){d=a.hZ.data[b];a.hZ.data[b]=null;return d;}d=EG(a.hZ.data[b],c);if(!a.hZ.data[b].p)a.hZ.data[b]=null;return d;}
function AHx(a,b,c){a.hZ.data[b]=c;if(c!==null&&c.p>64)c.p=64;}
function A8y(a){return B(263);}
function A7i(a){return 64;}
function CQ(){D.call(this);this.gq=null;}
function BlM(){var a=new CQ();Cw(a);return a;}
function Cw(a){a.gq=null;}
function VI(a){return a.gq!==null?a.gq:B(3);}
function AXC(a,b){a.gq=b;return a;}
function MV(b){var c,d;c=N0(b);if(!c){b=new N1;Cw(b);return b;}d=AE4(c);d.gq=GW(b);d.gF(b);return d;}
function RY(b,c){KK(c,b.fc());if(b.fc()){Xp(c,VI(b));b.gN(c);}}
function AE4(b){var c;switch(b){case 0:c=new N1;Cw(c);return c;case 1:c=new Mx;Cw(c);return c;case 2:c=new MX;Cw(c);return c;case 3:c=new Lj;Cw(c);return c;case 4:c=new Oa;Cw(c);return c;case 5:c=new Ph;Cw(c);return c;case 6:c=new Mq;Cw(c);return c;case 7:c=new MH;Cw(c);return c;case 8:c=new OF;Cw(c);return c;case 9:return L$();case 10:return Ha();default:}return null;}
function APN(){CQ.call(this);this.cL=null;}
function Ha(){var a=new APN();A8H(a);return a;}
function A8H(a){Cw(a);a.cL=De();}
function A6_(a,b){var c;c=Nh(Is(a.cL));while(Gb(c)){RY(Mf(c),b);}KK(b,0);}
function A9g(a,b){var c;U9(a.cL);while(true){c=MV(b);if(!c.fc())break;BR(a.cL,VI(c),c);}}
function A69(a){return 10;}
function HG(a,b,c){var d;d=a.cL;c.gq=b;BR(d,b,c);}
function JJ(a,b,c){var d,e;d=a.cL;e=new Mx;Cw(e);e.tt=c;e.gq=b;BR(d,b,e);}
function Ft(a,b,c){var d,e;d=a.cL;e=new MX;Cw(e);e.tn=c;e.gq=b;BR(d,b,e);}
function GA(a,b,c){var d,e;d=a.cL;e=new Lj;Cw(e);e.r7=c;e.gq=b;BR(d,b,e);}
function Ic(a,b,c){var d,e;d=a.cL;e=new Oa;Cw(e);e.s1=c;e.gq=b;BR(d,b,e);}
function AR5(a,b,c){var d,e;d=a.cL;e=A6O(c);e.gq=b;BR(d,b,e);}
function IP(a,b,c){var d,e;d=a.cL;e=new MH;Cw(e);e.mp=c;e.gq=b;BR(d,b,e);}
function ANS(a,b,c){var d;d=a.cL;c.gq=b;BR(d,b,c);}
function SZ(a,b,c){JJ(a,b,(!c?0:1)<<24>>24);}
function YZ(a,b){return D0(a.cL,b);}
function LC(a,b){return !D0(a.cL,b)?0:CP(a.cL,b).tt;}
function FK(a,b){return !D0(a.cL,b)?0:CP(a.cL,b).tn;}
function FW(a,b){return !D0(a.cL,b)?0:CP(a.cL,b).r7;}
function Md(a,b){return !D0(a.cL,b)?Long_ZERO:CP(a.cL,b).s1;}
function AME(a,b){return !D0(a.cL,b)?0.0:CP(a.cL,b).nn;}
function IH(a,b){return !D0(a.cL,b)?$rt_createByteArray(0):CP(a.cL,b).mp;}
function Mz(a,b){return !D0(a.cL,b)?Ha():CP(a.cL,b);}
function Kh(a,b){return !D0(a.cL,b)?L$():CP(a.cL,b);}
function Ur(a,b){return !LC(a,b)?0:1;}
function P3(){B6.call(this);}
function BlN(){var a=new P3();A$4(a);return a;}
function A$4(a){O(a);}
function SI(){B6.call(this);}
function BlO(){var a=new SI();AYL(a);return a;}
function AYL(a){O(a);}
function RX(){G0.call(this);this.Bu=0;}
function AVO(a){var b;b=new S;V(b);return T(Be(H(b,B(594)),a.Bu));}
function PZ(){G0.call(this);this.EL=0;}
function AVh(a){var b;b=new S;V(b);return T(Be(H(b,B(595)),a.EL));}
function IM(){var a=this;D.call(a);a.l9=0;a.rl=0;a.lG=null;a.hm=null;a.sq=null;a.iu=null;}
function BlP(a){var b=new IM();Vz(b,a);return b;}
function Vz(a,b){a.iu=b;a.rl=b.g_;a.lG=null;}
function Gb(a){if(a.lG!==null)return 1;while(a.l9<a.iu.cO.data.length){if(a.iu.cO.data[a.l9]!==null)return 1;a.l9=a.l9+1|0;}return 0;}
function Uv(a){var b;if(a.rl==a.iu.g_)return;b=new KS;O(b);M(b);}
function Wa(a){var b,c,d;Uv(a);if(!Gb(a)){b=new JZ;O(b);M(b);}if(a.lG===null){c=a.iu.cO.data;d=a.l9;a.l9=d+1|0;a.hm=c[d];a.lG=a.hm.eE;a.sq=null;}else{if(a.hm!==null)a.sq=a.hm;a.hm=a.lG;a.lG=a.lG.eE;}}
function ADP(a){var b,c;Uv(a);if(a.hm===null){b=new D3;O(b);M(b);}if(a.sq!==null)a.sq.eE=a.hm.eE;else{c=a.hm.pU&(a.iu.cO.data.length-1|0);a.iu.cO.data[c]=a.iu.cO.data[c].eE;}a.hm=null;a.rl=a.rl+1|0;b=a.iu;b.g_=b.g_+1|0;b=a.iu;b.f$=b.f$-1|0;}
function U_(){IM.call(this);}
function Mf(a){Wa(a);return a.hm.e6;}
function Ws(){var a=this;D.call(a);a.Al=null;a.Ev=null;a.wb=0;a.qI=0;}
function NO(a){return Fl(a.Al);}
function AJm(a,b){return Ct(a.Ev)<b?0:1;}
function A$z(a,b){a.wb=b;}
function A9e(a,b){a.qI=b;}
function AEy(){var a=this;CS.call(a);a.o9=null;a.yH=null;a.lR=null;}
function AIL(a,b){var c=new AEy();A1x(c,a,b);return c;}
function A1x(a,b,c){DR(a);a.yH=B(596);a.o9=b;a.lR=c;}
function ARY(a){var b,c,d;b=0;while(b<a.lR.zO){c=a.bG;d=Sh(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bD/6|0)+(24*(b>>1)|0)|0,QX(a.lR,b));U(c,d);if(a.J.o.du&&!(b!=5&&b!=6&&b!=9))d.gC=0;b=b+1|0;}U(a.bG,Dj(100,(a.bm/2|0)-100|0,((a.bD/6|0)+120|0)+22|0,B(597)));U(a.bG,Dj(200,(a.bm/2|0)-100|0,(a.bD/6|0)+168|0,B(598)));}
function ADV(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC){if(b.cm<100){Eb(a.lR,b.cm,1);b.ko=QX(a.lR,b.cm);if(b.cm==10){c=a.J;d=AIL(a.o9,a.J.o);$p=2;continue _;}}if(b.cm==100){c=a.J;d=new NP;e=a.lR;DR(d);d.ug=B(599);d.jv=(-1);d.uD=a;d.iP=e;$p=1;continue _;}if(b.cm==200){b=a.J;c=a.o9;$p=3;continue _;}}return;case 1:ADT(c,d);if(C()){break _;}if(b.cm!=200)return;b=a.J;c=a.o9;$p=3;continue _;case 2:ADT(c,d);if(C())
{break _;}if(b.cm!=100){if(b.cm!=200)return;b=a.J;c=a.o9;$p=3;continue _;}c=a.J;d=new NP;e=a.lR;DR(d);d.ug=B(599);d.jv=(-1);d.uD=a;d.iP=e;$p=1;continue _;case 3:ADT(b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AF_(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABf(a);if(C()){break _;}DG(a,a.bZ,a.yH,a.bm/2|0,20,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function Oy(){var a=this;CS.call(a);a.ry=null;a.yv=null;a.xE=0;}
function A$U(a){var b=new Oy();AEe(b,a);return b;}
function AEe(a,b){DR(a);a.yv=B(600);a.xE=0;a.ry=b;}
function APt(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=5){a.s9();return;}c=new S;V(c);c=H(c,B(601));d=b+1|0;c=T(Be(c,d));$p=1;case 1:$z=ASa(c);if(C()){break _;}c=$z;if(c!==null){c=new S;V(c);e=T(Be(H(c,B(602)),d));c=new S;V(c);f=T(H(Be(H(c,B(601)),d),B(355)));Bd();c=BeC;$p=2;continue _;}U(a.bG,Dj(b,(a.bm/2|0)-100|0,(a.bD/6|0)+(24*b|0)|0,B(603)));b=d;if(b>=5){a.s9();return;}c=new S;V(c);c
=H(c,B(601));d=b+1|0;c=T(Be(c,d));continue _;case 2:$z=A_H(c,f);if(C()){break _;}c=$z;g=c===null?(-1):c.byteLength;c=new S;V(c);f=T(H(AKn(H(H(c,e),B(604)),g/100.0),B(605)));U(a.bG,Dj(b,(a.bm/2|0)-100|0,(a.bD/6|0)+(24*b|0)|0,f));b=d;if(b>=5){a.s9();return;}c=new S;V(c);c=H(c,B(601));d=b+1|0;c=T(Be(c,d));$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function ANr(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=new S;V(c);c=T(Be(H(c,B(601)),b));$p=1;case 1:$z=ASa(c);if(C()){break _;}c=$z;if(c===null)c=null;else{c=new S;V(c);c=T(Be(H(c,B(601)),b));}return c;default:E$();}}C3().s(a,b,c,$p);}
function AXz(a){U(a.bG,Dj(5,(a.bm/2|0)-100|0,((a.bD/6|0)+120|0)+12|0,B(606)));U(a.bG,Dj(6,(a.bm/2|0)-100|0,(a.bD/6|0)+168|0,B(607)));}
function ASv(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC){if(b.cm<5){c=b.cm+1|0;$p=1;continue _;}if(b.cm==5){b=a.J;d=new UY;AEe(d,a);d.yv=B(608);$p=2;continue _;}if(b.cm==6){b=a.J;d=a.ry;$p=3;continue _;}}return;case 1:a.IP(c);if(C()){break _;}return;case 2:ADT(b,d);if(C()){break _;}return;case 3:ADT(b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AKL(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J;d=null;$p=1;case 1:ADT(c,d);if(C()){break _;}if(a.xE)return;a.xE=1;d=a.J;c=new S;V(c);c=T(Be(H(c,B(601)),b));$p=2;case 2:AHU(d,c);if(C()){break _;}d=a.J;c=null;$p=3;case 3:ADT(d,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AEB(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABf(a);if(C()){break _;}DG(a,a.bZ,a.yv,a.bm/2|0,20,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function LZ(){Gl.call(this);}
function BlQ(){var a=new LZ();A67(a);return a;}
function A67(a){O(a);}
function S_(){Gl.call(this);}
function BlR(){var a=new S_();A$D(a);return a;}
function A$D(a){O(a);}
function ALt(){D.call(this);}
function BlS(){var a=new ALt();A7l(a);return a;}
function A7l(a){return;}
function AAb(){D.call(this);}
function BlT(){var a=new AAb();A8s(a);return a;}
function A8s(a){return;}
function AMh(){var a=this;D.call(a);a.n=null;a.fQ=0;a.ua=null;a.zb=0;a.it=0;a.kl=0;a.dp=0;a.u2=null;}
function Bbs(){var a=new AMh();AS5(a);return a;}
function ALG(a,b){var c,d,e,f,g,h,i,j;c=new Vx;c.qT=(-1);c.sj=(-1);c.Fz=a;c.EC=a.u2;c.pI=b;c.qT=0;c.sj=Bi(c.pI);d=new Wt;e=c.qT;f=c.sj;g=a.it;h=AQT(a);i=AD4(a);d.k3=(-1);j=g+1|0;d.zz=j;d.gG=$rt_createIntArray(j*2|0);d.oR=$rt_createIntArray(i);M0(d.oR,(-1));if(h>0)d.xu=$rt_createIntArray(h);M0(d.gG,(-1));Xh(d,b,e,f);c.dD=d;return c;}
function AIP(a,b,c){var d,e,f,g,h,i;d=Ci();e=ALG(a,b);f=0;g=0;if(!Bi(b)){h=J(B4,1);h.data[0]=B(3);return h;}while(AA$(e)){i=f+1|0;if(i>=c&&c>0)break;U(d,Ew(b,g,AG7(e)));g=AKV(e);f=i;}a:{U(d,Ew(b,g,Bi(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(Bi(Z(d,f)))break a;Eo(d,f);}}if(f<0)f=0;return UD(d,J(B4,f));}
function AIO(a,b){return AIP(a,b,0);}
function M_(a){return a.n.eP;}
function SW(a,b,c,d){var e,f,g,h,i;e=Ci();f=a.fQ;g=0;if(c!=a.fQ)a.fQ=c;a:{switch(b){case -1073741784:h=new QF;c=a.dp+1|0;a.dp=c;Hd(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PU;c=a.dp+1|0;a.dp=c;Hd(h,c);break a;case -33554392:h=new Q5;c=a.dp+1|0;a.dp=c;Hd(h,c);break a;default:a.it=a.it+1|0;if(d!==null)h=Bcw(a.it);else{h=Bb2();g=1;}if(a.it<=(-1))break a;if(a.it>=10)break a;a.ua.data[a.it]=h;break a;}h=Bbr();}while(true){if(F_(a.n)&&a.n.H==(-536870788)){d=A$E(C0(a,
2),C0(a,64));while(!Ep(a.n)&&F_(a.n)&&!(a.n.H&&a.n.H!=(-536870788)&&a.n.H!=(-536870871))){Dp(d,BF(a.n));if(a.n.cH!=(-536870788))continue;BF(a.n);}i=LP(a,d);i.cb(h);}else if(a.n.cH==(-536870788)){i=II(h);BF(a.n);}else{i=Uh(a,h);if(a.n.cH==(-536870788))BF(a.n);}if(i!==null)U(e,i);if(Ep(a.n))break;if(a.n.cH==(-536870871))break;}if(a.n.qX==(-536870788))U(e,II(h));if(a.fQ!=f&&!g){a.fQ=f;AJu(a.n,a.fQ);}switch(b){case -1073741784:break;case -536870872:d=new Tb;GT(d,e,h);return d;case -268435416:d=new WJ;GT(d,e,h);return d;case -134217688:d
=new Va;GT(d,e,h);return d;case -67108824:d=new Rh;GT(d,e,h);return d;case -33554392:d=new EW;GT(d,e,h);return d;default:switch(e.s){case 0:break;case 1:return Bco(Z(e,0),h);default:return BaC(e,h);}return II(h);}d=new K1;GT(d,e,h);return d;}
function APY(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!Ep(a.n)&&F_(a.n)){e=b.data;c=BF(a.n);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.n.cH;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;BF(a.n);f=a.n.cH;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;BF(a.n);return A$t(e,3);}return A$t(e,2);}if(!C0(a,2))return AAf(b[0]);if(C0(a,64))return A89(b[0]);return A4w(b[0]);}e=b.data;c=1;while(c<4&&!Ep(a.n)&&F_(a.n)){f=c+1|0;e[c]=BF(a.n);c=f;}if(c==1){f=e[0];if(!(BlU.A5(f)
==BlV?0:1))return SP(a,e[0]);}if(!C0(a,2))return BcX(b,c);if(C0(a,64)){g=new SJ;Pe(g,b,c);return g;}g=new V3;Pe(g,b,c);return g;}
function Uh(a,b){var c,d,e,f;if(F_(a.n)&&!Li(a.n)&&Np(a.n.H)){if(C0(a,128)){c=APY(a);if(!Ep(a.n)&&!(a.n.cH==(-536870871)&&!(b instanceof HU))&&a.n.cH!=(-536870788)&&!F_(a.n))c=MB(a,b,c);}else if(!TN(a.n)&&!Wu(a.n)){d=new Lh;V(d);while(!Ep(a.n)&&F_(a.n)&&!TN(a.n)&&!Wu(a.n)&&!(!(!Li(a.n)&&!a.n.H)&&!(!Li(a.n)&&Np(a.n.H))&&a.n.H!=(-536870871)&&(a.n.H&(-2147418113))!=(-2147483608)&&a.n.H!=(-536870788)&&a.n.H!=(-536870876))){e=BF(a.n);if(!Mw(e))Dx(d,e&65535);else Hl(d,Ix(e));}if(!C0(a,2))c=Bas(d);else if(C0(a,64))c
=BcU(d);else{c=new OX;EN(c);c.pJ=T(d);c.dl=Ox(d);}}else c=MB(a,b,W3(a,b));}else if(a.n.cH!=(-536870871))c=MB(a,b,W3(a,b));else{if(b instanceof HU)M(CN(B(3),a.n.eP,a.n.ih));c=II(b);}if(!Ep(a.n)&&!(a.n.cH==(-536870871)&&!(b instanceof HU))&&a.n.cH!=(-536870788)){f=Uh(a,b);if(c instanceof D8&&!(c instanceof GF)&&!(c instanceof DX)&&!(c instanceof FX)){b=c;if(!f.d4(b.bQ)){c=new Sr;F6(c,b.bQ,b.r,b.p3);c.bQ.cb(c);}}if((f.oF()&65535)!=43)c.cb(f);else c.cb(f.bQ);}else{if(c===null)return null;c.cb(b);}if((c.oF()&65535)
!=43)return c;return c.bQ;}
function MB(a,b,c){var d,e,f,g;d=a.n.cH;if(c!==null&&!(c instanceof CI)){switch(d){case -2147483606:BF(a.n);e=new S4;Eg(e,c,b,d);c.cb(BlW);return e;case -2147483605:BF(a.n);e=new Uy;Eg(e,c,b,(-2147483606));c.cb(BlW);return e;case -2147483585:BF(a.n);e=new PN;Eg(e,c,b,(-536870849));c.cb(BlW);return e;case -2147483525:e=new OU;f=G8(a.n);d=a.kl+1|0;a.kl=d;MP(e,f,c,b,(-536870849),d);c.cb(BlW);return e;case -1073741782:case -1073741781:BF(a.n);f=new Qv;Eg(f,c,b,d);c.cb(f);return f;case -1073741761:BF(a.n);f=new UR;Eg(f,
c,b,(-536870849));c.cb(b);return f;case -1073741701:f=new RP;e=G8(a.n);g=a.kl+1|0;a.kl=g;MP(f,e,c,b,(-536870849),g);c.cb(f);return f;case -536870870:case -536870869:BF(a.n);if(c.oF()!=(-2147483602)){f=new DX;Eg(f,c,b,d);}else if(C0(a,32)){f=new Qw;Eg(f,c,b,d);}else{f=new TT;e=Um(a.fQ);Eg(f,c,b,d);f.uu=e;}c.cb(f);return f;case -536870849:BF(a.n);f=new Hx;Eg(f,c,b,(-536870849));c.cb(b);return f;case -536870789:f=new G$;e=G8(a.n);g=a.kl+1|0;a.kl=g;MP(f,e,c,b,(-536870849),g);c.cb(f);return f;default:}return c;}e
=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:BF(a.n);f=new Xu;F6(f,e,b,d);e.r=f;return f;case -2147483585:BF(a.n);c=new Sn;F6(c,e,b,(-2147483585));return c;case -2147483525:c=new Uf;QO(c,G8(a.n),e,b,(-2147483525));return c;case -1073741782:case -1073741781:BF(a.n);f=new UP;F6(f,e,b,d);e.r=f;return f;case -1073741761:BF(a.n);c=new V5;F6(c,e,b,(-1073741761));return c;case -1073741701:c=new Qg;QO(c,G8(a.n),e,b,(-1073741701));return c;case -536870870:case -536870869:BF(a.n);f=BaT(e,b,d);e.r
=f;return f;case -536870849:BF(a.n);c=new FX;F6(c,e,b,(-536870849));return c;case -536870789:return BbU(G8(a.n),e,b,(-536870789));default:}return c;}
function W3(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof HU;while(true){a:{e=Ks(a.n);if((e&(-2147418113))==(-2147483608)){BF(a.n);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.fQ=f;else{if(e!=(-1073741784))f=a.fQ;c=SW(a,e,f,b);if(Ks(a.n)!=(-536870871))M(CN(B(3),ED(a.n),HE(a.n)));BF(a.n);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.it<g)M(CN(B(3),
ED(a.n),HE(a.n)));BF(a.n);a.dp=a.dp+1|0;c=!C0(a,2)?Bbz(g,a.dp):C0(a,64)?Bap(g,a.dp):BcT(g,a.dp);a.ua.data[g].wS=1;a.zb=1;break a;case -2147483583:break;case -2147483582:BF(a.n);c=A$g(0);break a;case -2147483577:BF(a.n);c=Bai();break a;case -2147483558:BF(a.n);c=new SG;g=a.dp+1|0;a.dp=g;AQw(c,g);break a;case -2147483550:BF(a.n);c=A$g(1);break a;case -2147483526:BF(a.n);c=Bba();break a;case -536870876:break c;case -536870866:BF(a.n);if(C0(a,32)){c=Bbk();break a;}c=BaW(Um(a.fQ));break a;case -536870821:BF(a.n);h
=0;if(Ks(a.n)==(-536870818)){h=1;BF(a.n);}c=ADF(a,h,b);if(Ks(a.n)!=(-536870819))M(CN(B(3),ED(a.n),HE(a.n)));T7(a.n,1);BF(a.n);break a;case -536870818:BF(a.n);a.dp=a.dp+1|0;if(!C0(a,8)){c=A1c();break a;}c=BcG(Um(a.fQ));break a;case 0:i=PR(a.n);if(i!==null)c=LP(a,i);else{if(Ep(a.n)){c=II(b);break a;}c=AAf(e&65535);}BF(a.n);break a;default:break b;}BF(a.n);c=A1c();break a;}BF(a.n);a.dp=a.dp+1|0;if(C0(a,8)){if(C0(a,1)){c=Baq(a.dp);break a;}c=A_Y(a.dp);break a;}if(C0(a,1)){c=BaH(a.dp);break a;}c=Ba4(a.dp);break a;}if
(e>=0&&!H4(a.n)){c=SP(a,e);BF(a.n);}else if(e==(-536870788))c=II(b);else{if(e!=(-536870871))M(CN(!H4(a.n)?SD(e&65535):PR(a.n).gl(),ED(a.n),HE(a.n)));if(d)M(CN(B(3),ED(a.n),HE(a.n)));c=II(b);}}}if(e!=(-16777176))break;}return c;}
function ADF(a,b,c){var d;d=LP(a,Ik(a,b));d.cb(c);return d;}
function Ik(a,b){var c,d,e,f,g,h,i,j,$$je;c=A$E(C0(a,2),C0(a,64));Fz(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Ep(a.n))break a;f=a.n.cH==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.n.cH){case -536870874:if(d>=0)Dp(c,d);d=BF(a.n);if(a.n.cH!=(-536870874)){d=38;break d;}if(a.n.H==(-536870821)){BF(a.n);e=1;d=(-1);break d;}BF(a.n);if(g){c=Ik(a,0);break d;}if(a.n.cH==(-536870819))break d;Sw(c,Ik(a,0));break d;case -536870867:if(!g&&a.n.H!=(-536870819)&&a.n.H!=(-536870821)&&d>=0){BF(a.n);h=a.n.cH;if(H4(a.n))break c;if
(h<0&&a.n.H!=(-536870819)&&a.n.H!=(-536870821)&&d>=0)break c;e:{try{if(Np(h))break e;h=h&65535;break e;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){break b;}else{throw $$e;}}}try{CG(c,d,h);}catch($$e){$$je=Bh($$e);if($$je instanceof BE){break b;}else{throw $$e;}}BF(a.n);d=(-1);break d;}if(d>=0)Dp(c,d);d=45;BF(a.n);break d;case -536870821:if(d>=0){Dp(c,d);d=(-1);}BF(a.n);i=0;if(a.n.cH==(-536870818)){BF(a.n);i=1;}if(!e)AIa(c,Ik(a,i));else Sw(c,Ik(a,i));e=0;BF(a.n);break d;case -536870819:if(d>=0)Dp(c,d);d=
93;BF(a.n);break d;case -536870818:if(d>=0)Dp(c,d);d=94;BF(a.n);break d;case 0:if(d>=0)Dp(c,d);j=a.n.k4;if(j===null)d=0;else{ASs(c,j);d=(-1);}BF(a.n);break d;default:}if(d>=0)Dp(c,d);d=BF(a.n);}g=0;}M(CN(B(3),M_(a),a.n.ih));}M(CN(B(3),M_(a),a.n.ih));}if(!f){if(d>=0)Dp(c,d);return c;}M(CN(B(3),M_(a),a.n.ih-1|0));}
function SP(a,b){var c,d,e;c=Mw(b);if(C0(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A4w(b&65535);}if(C0(a,64)&&b>128){if(c){d=new S$;EN(d);d.dl=2;d.z8=GQ(GP(b));return d;}if(PD(b))return AYS(b&65535);if(!QU(b))return A89(b&65535);return A6A(b&65535);}}if(!c){if(PD(b))return AYS(b&65535);if(!QU(b))return AAf(b&65535);return A6A(b&65535);}d=new EY;EN(d);d.dl=2;d.kB=b;e=Ix(b).data;d.tB=e[0];d.sf=e[1];return d;}
function LP(a,b){var c,d,e;if(!ANX(b)){if(!b.ca){if(b.nS())return AWF(b);return A09(b);}if(!b.nS())return A6P(b);c=new MQ;Wc(c,b);return c;}c=YV(b);d=new OI;Cz(d);d.zP=c;d.Hn=c.ck;if(!b.ca){if(b.nS())return AEm(AWF(Ka(b)),d);return AEm(A09(Ka(b)),d);}if(!b.nS())return AEm(A6P(Ka(b)),d);c=new P7;e=new MQ;Wc(e,Ka(b));AHg(c,e,d);return c;}
function A3u(a){return a.it;}
function AQT(a){return a.kl+1|0;}
function AD4(a){return a.dp+1|0;}
function Kd(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function C0(a,b){return (a.fQ&b)!=b?0:1;}
function AS5(a){a.ua=J(DW,10);a.it=(-1);a.kl=(-1);a.dp=(-1);}
function ABX(){LA.call(this);}
function Sh(a,b,c,d){var e=new ABX();A6D(e,a,b,c,d);return e;}
function A6D(a,b,c,d,e){SF(a,b,c,d,150,20,e);}
function NP(){var a=this;CS.call(a);a.uD=null;a.ug=null;a.iP=null;a.jv=0;}
function AJr(a){var b;b=0;while(b<a.iP.ng.data.length){U(a.bG,Sh(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bD/6|0)+(24*(b>>1)|0)|0,K5(a.iP,b)));b=b+1|0;}U(a.bG,Dj(200,(a.bm/2|0)-100|0,(a.bD/6|0)+168|0,B(598)));}
function AId(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.iP.ng.data.length){Z(a.bG,c).ko=K5(a.iP,c);c=c+1|0;}if(b.cm!=200){a.jv=b.cm;d=new S;V(d);b.ko=T(H(H(H(d,B(580)),K5(a.iP,b.cm)),B(581)));return;}b=a.J;d=a.uD;$p=1;case 1:ADT(b,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function ALN(a,b,c){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jv>=0){X3(a.iP,a.jv,c);Z(a.bG,a.jv).ko=K5(a.iP,a.jv);a.jv=(-1);return;}$p=1;case 1:YN(a,b,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function AGu(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABf(a);if(C()){break _;}DG(a,a.bZ,a.ug,a.bm/2|0,20,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function UY(){Oy.call(this);}
function A1O(a){U(a.bG,Dj(6,(a.bm/2|0)-100|0,(a.bD/6|0)+168|0,B(607)));}
function AL9(a,b){var c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANr(a,b);if(C()){break _;}c=$z;if(c===null)return;d=a.J;e=new U4;f=new S;V(f);f=T(H(H(H(f,B(609)),c),B(610)));DR(e);e.B3=a;e.BS=B(611);e.BU=f;e.yP=b;$p=2;case 2:ADT(d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function AQ3(a,b,c){var d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b){$p=2;continue _;}d=a.J;e=a.ry;$p=1;case 1:ADT(d,e);if(C()){break _;}return;case 2:$z=ANr(a,c);if(C()){break _;}d=$z;e=new S;V(e);f=T(H(H(e,d),B(23)));e=B(612);d=B(613);g=Bc7.is;h=B(614);$p=3;case 3:AR1(g,e,h);if(C()){break _;}b=1;c=1;Bd();i=QV();h=BeC;$p=4;case 4:A5o(h,
f,b,c,i);if(C()){break _;}j=0;k=0;l=HZ(i);while(true){if(!Fq(l)){e=HZ(i);while(Fq(e)){d=Fm(e);if(d.j9){d=d.jB;$p=9;continue _;}}$p=6;continue _;}h=Fm(l);if(!h.j9)break;}h=h.jB;$p=5;case 5:AL1(h);if(C()){break _;}c=j+1|0;if((c-k|0)>=10){b=Nc(c/i.gQ*100.0)|0;m=new S;V(m);h=KJ(d,B(615),T(Be(H(m,B(3)),c)));$p=7;continue _;}j=c;while(true){if(!Fq(l)){e=HZ(i);while(Fq(e)){d=Fm(e);if(d.j9){d=d.jB;$p=9;continue _;}}$p=6;continue _;}h=Fm(l);if(!h.j9)break;}h=h.jB;continue _;case 6:AL1(f);if(C()){break _;}d=a.J;e=a.ry;$p
=1;continue _;case 7:AR1(g,e,h);if(C()){break _;}$p=8;case 8:XH(g,b);if(C()){break _;}j=c;k=c;while(true){if(!Fq(l)){e=HZ(i);while(Fq(e)){d=Fm(e);if(d.j9){d=d.jB;$p=9;continue _;}}$p=6;continue _;}h=Fm(l);if(!h.j9)break;}h=h.jB;$p=5;continue _;case 9:AL1(d);if(C()){break _;}while(Fq(e)){d=Fm(e);if(!d.j9)continue;else{d=d.jB;continue _;}}$p=6;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function NS(){var a=this;D.call(a);a.kE=0.0;a.kt=0.0;a.HL=0;a.un=0;}
function BlX(){var a=new NS();AC_(a);return a;}
function AC_(a){a.kE=0.0;a.kt=0.0;a.HL=0;a.un=0;}
function Ym(){var a=this;NS.call(a);a.j5=null;a.nq=null;}
function V2(a){var b=new Ym();AZU(b,a);return b;}
function AZU(a,b){AC_(a);a.j5=$rt_createBooleanArray(10);a.nq=b;}
function APr(a,b,c){var d;d=(-1);if(b==a.nq.t3.bI)d=0;if(b==a.nq.xl.bI)d=1;if(b==a.nq.tV.bI)d=2;if(b==a.nq.uw.bI)d=3;if(b==a.nq.yE.bI)d=4;if(d>=0)a.j5.data[d]=c;}
function AOY(a){var b;b=0;while(b<10){a.j5.data[b]=0;b=b+1|0;}}
function AOA(a,b){a.kE=0.0;a.kt=0.0;if(a.j5.data[0])a.kt=a.kt+1.0;if(a.j5.data[1])a.kt=a.kt-1.0;if(a.j5.data[2])a.kE=a.kE+1.0;if(a.j5.data[3])a.kE=a.kE-1.0;a.un=a.j5.data[4];}
function QW(){D.call(this);this.na=null;}
var BlY=null;function AYX(){AYX=Bt(QW);A36();}
function A_0(){var a=new QW();ALy(a);return a;}
function Wo(){AYX();return BlY;}
function ALy(a){var b,c,d,e;AYX();WG(a);a.na=Ci();AHi(Bbu(),a);Xw(A_9(),a);ADW(Bbq(),a);AJP(Ba8(),a);Yc(Ban(),a);ASC(BaY(),a);b=new Cd;L();U6(b,Bfa,1);c=J(D,5);d=c.data;d[0]=B(616);d[1]=B(616);d[2]=B(616);d[3]=BI(35);BB();d[4]=Bgc;Ck(a,b,c);e=G2(Bfh,1);c=J(D,7);d=c.data;d[0]=B(617);d[1]=B(618);d[2]=B(617);d[3]=BI(88);d[4]=Bgb;d[5]=BI(35);d[6]=Be9;Ck(a,e,c);e=G2(BeR,3);c=J(D,3);d=c.data;d[0]=B(616);d[1]=BI(35);d[2]=BeW;Ck(a,e,c);e=G2(Bf$,1);c=J(D,5);d=c.data;d[0]=B(619);d[1]=B(616);d[2]=B(619);d[3]=BI(35);d[4]
=Bh2;Ck(a,e,c);e=EL(BiA,1);c=J(D,5);d=c.data;d[0]=B(620);d[1]=B(620);d[2]=B(620);d[3]=BI(35);d[4]=BeY;Ck(a,e,c);e=EL(Bha,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(616);d[2]=B(621);d[3]=BI(35);d[4]=BeY;d[5]=BI(88);d[6]=Bh2;Ck(a,e,c);e=G2(BeY,4);c=J(D,3);d=c.data;d[0]=B(622);d[1]=BI(35);d[2]=BeZ;Ck(a,e,c);e=EL(Bh2,4);c=J(D,4);d=c.data;d[0]=B(622);d[1]=B(622);d[2]=BI(35);d[3]=BeY;Ck(a,e,c);e=G2(Be1,4);c=J(D,6);d=c.data;d[0]=B(72);d[1]=B(622);d[2]=BI(88);d[3]=Bhx;d[4]=BI(35);d[5]=Bh2;Ck(a,e,c);e=EL(Bh3,4);c=J(D,4);d
=c.data;d[0]=B(619);d[1]=B(623);d[2]=BI(35);d[3]=BeY;Ck(a,e,c);e=G2(Bg5,16);c=J(D,7);d=c.data;d[0]=B(624);d[1]=B(617);d[2]=B(624);d[3]=BI(88);d[4]=BhN;d[5]=BI(35);d[6]=Bh2;Ck(a,e,c);e=EL(BiE,1);c=J(D,4);d=c.data;d[0]=B(619);d[1]=B(616);d[2]=BI(35);d[3]=BhN;Ck(a,e,c);e=EL(BiB,1);c=J(D,4);d=c.data;d[0]=B(619);d[1]=B(623);d[2]=BI(35);d[3]=BhN;Ck(a,e,c);e=EL(BhK,1);c=J(D,6);d=c.data;d[0]=B(625);d[1]=B(626);d[2]=BI(65);d[3]=BhN;d[4]=BI(66);d[5]=Bhw;Ck(a,e,c);e=EL(Bic,1);c=J(D,3);d=c.data;d[0]=B(616);d[1]=BI(35);d[2]
=BhA;Ck(a,e,c);e=G2(BgT,4);c=J(D,5);d=c.data;d[0]=B(627);d[1]=B(628);d[2]=B(616);d[3]=BI(35);d[4]=BeY;Ck(a,e,c);e=G2(Bg6,4);c=J(D,5);d=c.data;d[0]=B(627);d[1]=B(628);d[2]=B(616);d[3]=BI(35);d[4]=BeW;Ck(a,e,c);e=EL(Biy,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(618);d[2]=B(616);d[3]=BI(35);d[4]=Bh2;d[5]=BI(88);d[6]=Bfa;Ck(a,e,c);e=EL(Biz,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(618);d[2]=B(616);d[3]=BI(35);d[4]=Bff;d[5]=BI(88);d[6]=BhL;Ck(a,e,c);RA(a.na,BaB(a));Cg(Dz(),BL(H(Be(BX(),CX(a.na)),B(629))));}
function Ck(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=c.data;e=B(3);f=0;g=0;h=0;if(!Sl(d[f],$rt_arraycls(B4))){while(d[f] instanceof B4){i=f+1|0;j=d[f];h=h+1|0;g=Bi(j);k=new S;V(k);e=T(H(H(k,e),j));f=i;}i=f;}else{i=1;l=d[f];m=0;while(true){c=l.data;if(m>=c.length)break;k=c[m];h=h+1|0;g=Bi(k);j=new S;V(j);e=T(H(H(j,e),k));m=m+1|0;}}n=De();while(i<d.length){o=d[i];p=0;m=i+1|0;if(d[m] instanceof Bb)p=d[m].cW;else if(d[m] instanceof P)p=d[m].b;BR(n,o,CY(p));i=i+2|0;}i=Bj(g,h);d=$rt_createIntArray(i);c=d.data;p=0;while
(p<i){q=Y(e,p);if(!D0(n,BI(q)))c[p]=(-1);else c[p]=CP(n,BI(q)).f7;p=p+1|0;}e=a.na;j=new UM;j.HX=b.bB;j.kR=g;j.q0=h;j.xO=d;j.xU=b;U(e,j);}
function RK(a,b){var c,d;c=0;while(c<a.na.s){d=Z(a.na,c);if(ALo(d,b))return AHh(d,b);c=c+1|0;}return null;}
function A36(){BlY=A_0();}
function Co(){var a=this;D.call(a);a.r=null;a.eQ=0;a.CO=null;a.p3=0;}
var Bdc=0;function BlZ(){var a=new Co();Cz(a);return a;}
function Bl0(a){var b=new Co();NB(b,a);return b;}
function Cz(a){var b,c;b=new Gk;c=Bdc;Bdc=c+1|0;Lq(b,c);a.CO=My(b);}
function NB(a,b){var c,d;c=new Gk;d=Bdc;Bdc=d+1|0;Lq(c,d);a.CO=My(c);a.r=b;}
function Jd(a,b,c,d){var e;e=d.by;while(true){if(b>e)return (-1);if(a.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function Jo(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A4L(a,b){a.p3=b;}
function A4m(a){return a.p3;}
function A0y(a){return a.r;}
function A1j(a,b){a.r=b;}
function A$u(a,b){return 1;}
function A_c(a){return null;}
function K8(a){var b;a.eQ=1;if(a.r!==null){if(!a.r.eQ){b=a.r.lA();if(b!==null){a.r.eQ=1;a.r=b;}a.r.iY();}else if(a.r instanceof IA&&a.r.f8.wS)a.r=a.r.r;}}
function AHv(){Bdc=1;}
function N1(){CQ.call(this);}
function Bl1(){var a=new N1();AVL(a);return a;}
function AVL(a){Cw(a);}
function A9d(a,b){return;}
function A0l(a,b){return;}
function AUF(a){return 0;}
function DW(){var a=this;Co.call(a);a.wS=0;a.ii=0;}
var BlW=null;function Bcw(a){var b=new DW();Hd(b,a);return b;}
function Hd(a,b){Cz(a);a.ii=b;}
function ATH(a,b,c,d){var e,f;e=JG(d,a.ii);MZ(d,a.ii,b);f=a.r.k(b,c,d);if(f<0)MZ(d,a.ii,e);return f;}
function A7w(a){return a.ii;}
function AT3(a,b){return 0;}
function AK2(){var b;b=new TO;Cz(b);BlW=b;}
function HW(){var a=this;D.call(a);a.bF=null;a.ma=0;a.h5=0;a.Bf=0;a.qX=0;a.cH=0;a.H=0;a.DU=0;a.k4=null;a.jE=null;a.bh=0;a.qg=0;a.ih=0;a.pH=0;a.eP=null;}
var Bl2=null;var BlU=null;var BlV=0;function Ks(a){return a.cH;}
function T7(a,b){if(b>0&&b<3)a.h5=b;if(b==1){a.H=a.cH;a.jE=a.k4;a.bh=a.pH;a.pH=a.ih;GD(a);}}
function AJu(a,b){a.ma=b;a.H=a.cH;a.jE=a.k4;a.bh=a.ih+1|0;a.pH=a.ih;GD(a);}
function PR(a){return a.k4;}
function H4(a){return a.k4===null?0:1;}
function Li(a){return a.jE===null?0:1;}
function BF(a){GD(a);return a.qX;}
function G8(a){var b;b=a.k4;GD(a);return b;}
function A3S(a){return a.H;}
function AVQ(a){return a.qX;}
function GD(a){var b,c,d,e,f,$$je;a.qX=a.cH;a.cH=a.H;a.k4=a.jE;a.ih=a.pH;a.pH=a.bh;while(true){b=0;a.H=a.bh>=a.bF.data.length?0:Mg(a);a.jE=null;if(a.h5==4){if(a.H!=92)return;a.H=a.bh>=a.bF.data.length?0:a.bF.data[CF(a)];switch(a.H){case 69:break;default:a.H=92;a.bh=a.qg;return;}a.h5=a.Bf;a.H=a.bh>(a.bF.data.length-2|0)?0:Mg(a);}a:{if(a.H!=92){if(a.h5==1)switch(a.H){case 36:a.H=(-536870876);break a;case 40:if(a.bF.data[a.bh]!=63){a.H=(-2147483608);break a;}CF(a);c=a.bF.data[a.bh];d=0;while(true){b:{if(d){d=0;switch
(c){case 33:break;case 61:a.H=(-134217688);CF(a);break b;default:M(CN(B(3),ED(a),a.bh));}a.H=(-67108824);CF(a);}else{switch(c){case 33:break;case 60:CF(a);c=a.bF.data[a.bh];d=1;break b;case 61:a.H=(-536870872);CF(a);break b;case 62:a.H=(-33554392);CF(a);break b;default:a.H=ASg(a);if(a.H<256){a.ma=a.H;a.H=a.H<<16;a.H=(-1073741784)|a.H;break b;}a.H=a.H&255;a.ma=a.H;a.H=a.H<<16;a.H=(-16777176)|a.H;break b;}a.H=(-268435416);CF(a);}}if(!d)break;}break a;case 41:a.H=(-536870871);break a;case 42:case 43:case 63:switch
(a.bh>=a.bF.data.length?42:a.bF.data[a.bh]){case 43:a.H=a.H|(-2147483648);CF(a);break a;case 63:a.H=a.H|(-1073741824);CF(a);break a;default:}a.H=a.H|(-536870912);break a;case 46:a.H=(-536870866);break a;case 91:a.H=(-536870821);T7(a,2);break a;case 93:if(a.h5!=2)break a;a.H=(-536870819);break a;case 94:a.H=(-536870818);break a;case 123:a.jE=AGp(a,a.H);break a;case 124:a.H=(-536870788);break a;default:}else if(a.h5==2)switch(a.H){case 38:a.H=(-536870874);break a;case 45:a.H=(-536870867);break a;case 91:a.H=(-536870821);break a;case 93:a.H
=(-536870819);break a;case 94:a.H=(-536870818);break a;default:}}else{c=a.bh>=(a.bF.data.length-2|0)?(-1):Mg(a);c:{a.H=c;switch(a.H){case -1:M(CN(B(3),ED(a),a.bh));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.H
=ADM(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.h5!=1)break a;a.H=(-2147483648)|a.H;break a;case 65:a.H=(-2147483583);break a;case 66:a.H=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:M(CN(B(3),ED(a),a.bh));case 68:case 83:case 87:case 100:case 115:case 119:a.jE=QM(Lk(a.bF,
a.qg,1),0);a.H=0;break a;case 71:a.H=(-2147483577);break a;case 80:case 112:break c;case 81:a.Bf=a.h5;a.h5=4;b=1;break a;case 90:a.H=(-2147483558);break a;case 97:a.H=7;break a;case 98:a.H=(-2147483550);break a;case 99:if(a.bh>=(a.bF.data.length-2|0))M(CN(B(3),ED(a),a.bh));a.H=a.bF.data[CF(a)]&31;break a;case 101:a.H=27;break a;case 102:a.H=12;break a;case 110:a.H=10;break a;case 114:a.H=13;break a;case 116:a.H=9;break a;case 117:a.H=Uz(a,4);break a;case 120:a.H=Uz(a,2);break a;case 122:a.H=(-2147483526);break a;default:}break a;}e
=AOn(a);f=0;if(a.H==80)f=1;try{a.jE=QM(e,f);}catch($$e){$$je=Bh($$e);if($$je instanceof MR){M(CN(B(3),ED(a),a.bh));}else{throw $$e;}}a.H=0;}}if(b)continue;else break;}}
function AOn(a){var b,c,d;b=new S;GE(b,10);if(a.bh<(a.bF.data.length-2|0)){if(a.bF.data[a.bh]!=123){b=new S;V(b);return T(H(H(b,B(630)),Lk(a.bF,CF(a),1)));}CF(a);c=0;a:{while(a.bh<(a.bF.data.length-2|0)){c=a.bF.data[CF(a)];if(c==125)break a;Dx(b,c);}}if(c!=125)M(CN(B(3),a.eP,a.bh));}if(!J_(b))M(CN(B(3),a.eP,a.bh));d=T(b);if(Bi(d)==1){b=new S;V(b);return T(H(H(b,B(630)),d));}b:{c:{if(Bi(d)>3){if(Iz(d,B(630)))break c;if(Iz(d,B(631)))break c;}break b;}d=Jt(d,2);}return d;}
function AGp(a,b){var c,d,e,f,$$je;c=new S;GE(c,4);d=(-1);e=2147483647;a:{while(true){if(a.bh>=a.bF.data.length)break a;b=a.bF.data[CF(a)];if(b==125)break a;if(b==44&&d<0)try{d=Le(BL(c),10);AGF(c,0,J_(c));continue;}catch($$e){$$je=Bh($$e);if($$je instanceof EA){break;}else{throw $$e;}}Dx(c,b&65535);}M(CN(B(3),a.eP,a.bh));}if(b!=125)M(CN(B(3),a.eP,a.bh));if(J_(c)>0)b:{try{e=Le(BL(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bh($$e);if($$je instanceof EA){}else{throw $$e;}}M(CN(B(3),a.eP,a.bh));}else if
(d<0)M(CN(B(3),a.eP,a.bh));if((d|e|(e-d|0))<0)M(CN(B(3),a.eP,a.bh));f=a.bh>=a.bF.data.length?42:a.bF.data[a.bh];c:{switch(f){case 43:a.H=(-2147483525);CF(a);break c;case 63:a.H=(-1073741701);CF(a);break c;default:}a.H=(-536870789);}c=new Tm;c.jg=d;c.iq=e;return c;}
function ED(a){return a.eP;}
function Ep(a){return !a.cH&&!a.H&&a.bh==a.DU&&!H4(a)?1:0;}
function Np(b){return b<0?0:1;}
function F_(a){return !Ep(a)&&!H4(a)&&Np(a.cH)?1:0;}
function TN(a){return a.cH<=56319&&a.cH>=55296?1:0;}
function Wu(a){return a.cH<=57343&&a.cH>=56320?1:0;}
function QU(b){return b<=56319&&b>=55296?1:0;}
function PD(b){return b<=57343&&b>=56320?1:0;}
function Uz(a,b){var c,d,e,f,$$je;c=new S;GE(c,b);d=a.bF.data.length-2|0;e=0;while(true){f=R(e,b);if(f>=0)break;if(a.bh>=d)break;Dx(c,a.bF.data[CF(a)]);e=e+1|0;}if(!f)a:{try{b=Le(BL(c),16);}catch($$e){$$je=Bh($$e);if($$je instanceof EA){break a;}else{throw $$e;}}return b;}M(CN(B(3),a.eP,a.bh));}
function ADM(a){var b,c,d,e,f;b=3;c=1;d=a.bF.data.length-2|0;e=Wh(a.bF.data[a.bh],8);switch(e){case -1:break;default:if(e>3)b=2;CF(a);a:{while(true){if(c>=b)break a;if(a.bh>=d)break a;f=Wh(a.bF.data[a.bh],8);if(f<0)break;e=(e*8|0)+f|0;CF(a);c=c+1|0;}}return e;}M(CN(B(3),a.eP,a.bh));}
function ASg(a){var b,c;b=1;c=a.ma;a:while(true){if(a.bh>=a.bF.data.length)M(CN(B(3),a.eP,a.bh));b:{c:{switch(a.bF.data[a.bh]){case 41:CF(a);return c|256;case 45:if(!b)M(CN(B(3),a.eP,a.bh));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}CF(a);}CF(a);return c;}
function CF(a){var b,c;a.qg=a.bh;if(!(a.ma&4))a.bh=a.bh+1|0;else{b=a.bF.data.length-2|0;a.bh=a.bh+1|0;a:while(true){if(a.bh<b&&Qf(a.bF.data[a.bh])){a.bh=a.bh+1|0;continue;}if(a.bh>=b)break;if(a.bF.data[a.bh]!=35)break;a.bh=a.bh+1|0;while(true){if(a.bh>=b)continue a;c=a.bF.data[a.bh];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.bh=a.bh+1|0;}}}return a.qg;}
function AQP(b){return Bl2.Ne(b);}
function Mg(a){var b,c,d;b=a.bF.data[CF(a)];if(Dt(b)){c=a.qg+1|0;if(c<a.bF.data.length){d=a.bF.data[c];if(DS(d)){CF(a);return EJ(b,d);}}}return b;}
function HE(a){return a.ih;}
function AQ_(){var a=this;Cb.call(a);a.AN=null;a.rd=null;a.n8=0;}
function CN(a,b,c){var d=new AQ_();A3D(d,a,b,c);return d;}
function A3D(a,b,c,d){O(a);a.n8=(-1);a.AN=b;a.rd=c;a.n8=d;}
function A$$(a){var b,c,d,e,f,g,h,i;b=B(3);if(a.n8>=1){c=$rt_createCharArray(a.n8);d=c.data;e=0;f=d.length;if(e>f){b=new Cb;O(b);M(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=AH$(c);}h=new S;V(h);h=H(h,a.AN);if(a.rd!==null&&Bi(a.rd)){i=new S;V(i);b=T(H(H(H(H(Be(i,a.n8),B(632)),a.rd),B(632)),b));}else b=B(3);return T(H(h,b));}
function Mx(){CQ.call(this);this.tt=0;}
function Bl3(){var a=new Mx();A4j(a);return a;}
function A4j(a){Cw(a);}
function A8B(a,b){KK(b,a.tt);}
function A75(a,b){a.tt=N0(b);}
function A6H(a){return 1;}
function MX(){CQ.call(this);this.tn=0;}
function Bl4(){var a=new MX();A5Y(a);return a;}
function A5Y(a){Cw(a);}
function AWi(a,b){Z9(b,a.tn);}
function AZy(a,b){a.tn=XJ(b);}
function A5J(a){return 2;}
function Lj(){CQ.call(this);this.r7=0;}
function Bl5(){var a=new Lj();A1H(a);return a;}
function A1H(a){Cw(a);}
function A14(a,b){JL(b,a.r7);}
function AY5(a,b){a.r7=H8(b);}
function AVl(a){return 3;}
function Oa(){CQ.call(this);this.s1=Long_ZERO;}
function Bl6(){var a=new Oa();AZZ(a);return a;}
function AZZ(a){Cw(a);}
function ATd(a,b){UE(b,a.s1);}
function A_n(a,b){a.s1=Ti(b);}
function A2F(a){return 4;}
function Ph(){CQ.call(this);this.nn=0.0;}
function Bl7(){var a=new Ph();AZW(a);return a;}
function A6O(a){var b=new Ph();AVR(b,a);return b;}
function AZW(a){Cw(a);}
function AVR(a,b){Cw(a);a.nn=b;}
function AS6(a,b){APg(b,a.nn);}
function A7X(a,b){a.nn=AA0(b);}
function ASK(a){return 5;}
function Mq(){CQ.call(this);this.iL=0.0;}
function Bl8(){var a=new Mq();AZA(a);return a;}
function AZA(a){Cw(a);}
function A6Z(a,b){APl(b,a.iL);}
function AU5(a,b){a.iL=APj(b);}
function A0T(a){return 6;}
function MH(){CQ.call(this);this.mp=null;}
function Bl9(){var a=new MH();A_F(a);return a;}
function A_F(a){Cw(a);}
function A48(a,b){JL(b,a.mp.data.length);AOz(b,a.mp);}
function A7g(a,b){a.mp=$rt_createByteArray(H8(b));AMS(b,a.mp);}
function A9A(a){return 7;}
function OF(){CQ.call(this);this.Au=null;}
function Bl$(){var a=new OF();A8k(a);return a;}
function A8k(a){Cw(a);}
function A$R(a,b){Xp(b,a.Au);}
function AY6(a,b){a.Au=GW(b);}
function ATo(a){return 8;}
function QS(){var a=this;CQ.call(a);a.hf=null;a.mZ=0;}
function L$(){var a=new QS();AG3(a);return a;}
function AG3(a){Cw(a);a.hf=Ci();}
function A9v(a,b){var c;if(a.hf.s<=0)a.mZ=1;else a.mZ=Z(a.hf,0).fc();KK(b,a.mZ);JL(b,a.hf.s);c=0;while(c<a.hf.s){Z(a.hf,c).gN(b);c=c+1|0;}}
function AYZ(a,b){var c,d,e;a.mZ=N0(b);c=H8(b);a.hf=Ci();d=0;while(d<c){e=AE4(a.mZ);e.gF(b);U(a.hf,e);d=d+1|0;}}
function AYz(a){return 9;}
function Jq(a,b){a.mZ=b.fc();U(a.hf,b);}
function Fc(a,b){return Z(a.hf,b);}
function AOt(a){return a.hf.s;}
function Tz(){var a=this;D.call(a);a.Ar=null;a.xc=null;}
function ARG(a){CM(a.Ar,(Uw(a.xc.result)?1:0)?null:A8u(a.xc.result));}
function AUo(a){ARG(a);}
function Ty(){D.call(this);this.Eg=null;}
function XD(a){CM(a.Eg,null);}
function AXo(a){XD(a);}
function ARQ(){var a=this;D.call(a);a.ES=null;a.qh=null;}
function Bbu(){var a=new ARQ();AXA(a);return a;}
function AXA(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,3);e=d.data;e[0]=B(633);e[1]=B(623);e[2]=B(623);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(622);e[2]=B(622);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(634);e[1]=B(635);e[2]=B(636);c[2]=d;d=J(B4,3);e=d.data;e[0]=B(634);e[1]=B(636);e[2]=B(636);c[3]=d;a.ES=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=BeY;e[1]=BeW;BB();e[2]=BhN;e[3]=Bhy;e[4]=BhO;c[0]=d;d=J(D,5);e=d.data;e[0]=BhS;e[1]=BhW;e[2]=BhI;e[3]=Bh0;e[4]=Bh7;c[1]=d;d=J(D,5);e=d.data;e[0]
=BhR;e[1]=BhV;e[2]=BhH;e[3]=BhZ;e[4]=Bh6;c[2]=d;d=J(D,5);e=d.data;e[0]=BhT;e[1]=BhX;e[2]=BhJ;e[3]=Bh1;e[4]=Bh8;c[3]=d;d=J(D,5);e=d.data;e[0]=Bh9;e[1]=Bh$;e[2]=Bh_;e[3]=Bia;e[4]=Bib;c[4]=d;a.qh=b;}
function AHi(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.qh.data[0].data.length){d=a.qh.data[0].data[c];e=0;while(e<(a.qh.data.length-1|0)){f=a.qh.data;g=e+1|0;h=f[g].data[c];i=Qj(h);f=J(D,5);j=f.data;j[0]=a.ES.data[e];j[1]=BI(35);BB();j[2]=Bh2;j[3]=BI(88);j[4]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function XX(){var a=this;D.call(a);a.Bh=null;a.pu=null;}
function A_9(){var a=new XX();A$m(a);return a;}
function A$m(a){var b,c,d,e;b=J($rt_arraycls(B4),1);c=b.data;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(72);e[2]=B(622);c[0]=d;a.Bh=b;b=J($rt_arraycls(D),2);c=b.data;d=J(D,5);e=d.data;L();e[0]=BeY;e[1]=BeW;BB();e[2]=BhN;e[3]=Bhy;e[4]=BhO;c[0]=d;d=J(D,5);e=d.data;e[0]=BhQ;e[1]=BhU;e[2]=BhP;e[3]=BhY;e[4]=Bh5;c[1]=d;a.pu=b;}
function Xw(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.pu.data[0].data.length){d=a.pu.data[0].data[c];e=0;while(e<(a.pu.data.length-1|0)){f=a.pu.data;g=e+1|0;h=f[g].data[c];i=Qj(h);j=J(D,5);k=j.data;k[0]=a.Bh.data[e];k[1]=BI(35);BB();k[2]=Bh2;k[3]=BI(88);k[4]=d;Ck(b,i,j);e=g;}c=c+1|0;}h=new Cd;BB();Gr(h,BhM,1);f=J(D,7);k=f.data;k[0]=B(637);k[1]=B(638);k[2]=B(637);k[3]=BI(88);k[4]=Bgc;k[5]=BI(35);k[6]=Bh2;Ck(b,h,f);d=EL(Bga,4);f=J(D,9);k=f.data;k[0]=B(72);k[1]=B(622);k[2]=B(48);k[3]=BI(89);k[4]=Bf_;k[5]=BI(88);k[6]
=BhN;k[7]=BI(35);k[8]=Bh2;Ck(b,d,f);}
function XQ(){D.call(this);this.st=null;}
function Bbq(){var a=new XQ();A2a(a);return a;}
function A2a(a){var b,c,d,e;b=J($rt_arraycls(D),3);c=b.data;d=J(D,2);e=d.data;L();e[0]=Bff;BB();e[1]=BhO;c[0]=d;d=J(D,2);e=d.data;e[0]=Bfe;e[1]=BhN;c[1]=d;d=J(D,2);e=d.data;e[0]=BgX;e[1]=Bhy;c[2]=d;a.st=b;}
function ADW(a,b){var c,d,e,f,g,h;c=0;while(c<a.st.data.length){d=a.st.data[c].data[0];e=a.st.data[c].data[1];f=AL0(d);g=J(D,5);h=g.data;h[0]=B(616);h[1]=B(616);h[2]=B(616);h[3]=BI(35);h[4]=e;Ck(b,f,g);f=EL(e,9);g=J(D,3);h=g.data;h[0]=B(622);h[1]=BI(35);h[2]=d;Ck(b,f,g);c=c+1|0;}}
function AEa(){D.call(this);}
function Ba8(){var a=new AEa();A0B(a);return a;}
function A0B(a){return;}
function AJP(a,b){var c,d,e;c=new Cd;BB();DD(c,Bh4);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(622);e[3]=BI(88);L();e[4]=Be7;e[5]=BI(89);e[6]=Be8;e[7]=BI(35);e[8]=Bh3;Ck(b,c,d);c=Qj(Bh4);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(622);e[3]=BI(88);e[4]=Be8;e[5]=BI(89);e[6]=Be7;e[7]=BI(35);e[8]=Bh3;Ck(b,c,d);}
function ARP(){D.call(this);}
function Ban(){var a=new ARP();A6R(a);return a;}
function A6R(a){return;}
function Yc(a,b){var c,d,e;c=new Cd;L();AHY(c,BgU);d=J(D,5);e=d.data;e[0]=B(616);e[1]=B(619);e[2]=B(616);e[3]=BI(35);e[4]=BeY;Ck(b,c,d);c=AL0(Bg1);d=J(D,5);e=d.data;e[0]=B(616);e[1]=B(619);e[2]=B(616);e[3]=BI(35);e[4]=BeW;Ck(b,c,d);c=AL0(BgY);d=J(D,4);e=d.data;e[0]=B(620);e[1]=B(620);e[2]=BI(35);e[3]=BeY;Ck(b,c,d);}
function AE9(){var a=this;D.call(a);a.zG=null;a.n5=null;}
function BaY(){var a=new AE9();AU7(a);return a;}
function AU7(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,2);e=d.data;e[0]=B(633);e[1]=B(624);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(624);e[1]=B(633);e[2]=B(633);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(633);e[1]=B(624);e[2]=B(624);c[2]=d;d=J(B4,2);e=d.data;e[0]=B(624);e[1]=B(624);c[3]=d;a.zG=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Bfa;e[1]=Bgm;BB();e[2]=BhN;e[3]=Bhy;e[4]=BhO;c[0]=d;d=J(D,5);e=d.data;e[0]=Bid;e[1]=Bih;e[2]=Bil;e[3]=Bip;e[4]=Bit;c[1]=d;d=J(D,5);e=d.data;e[0]=Bie;e[1]=Bii;e[2]
=Bim;e[3]=Biq;e[4]=Biu;c[2]=d;d=J(D,5);e=d.data;e[0]=Bif;e[1]=Bij;e[2]=Bin;e[3]=Bir;e[4]=Biv;c[3]=d;d=J(D,5);e=d.data;e[0]=Big;e[1]=Bik;e[2]=Bio;e[3]=Bis;e[4]=Biw;c[4]=d;a.n5=b;}
function ASC(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.n5.data[0].data.length){d=a.n5.data[0].data[c];e=0;while(e<(a.n5.data.length-1|0)){f=a.n5.data;g=e+1|0;h=f[g].data[c];i=Qj(h);f=J(D,3);j=f.data;j[0]=a.zG.data[e];j[1]=BI(88);j[2]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function Yj(){D.call(this);this.IR=null;}
function BaB(a){var b=new Yj();AYu(b,a);return b;}
function AYu(a,b){a.IR=b;}
function AMD(a,b,c){return Ko(c)<Ko(b)?(-1):Ko(c)<=Ko(b)?0:1;}
function AZv(a,b,c){return AMD(a,b,c);}
function QF(){DW.call(this);}
function A3v(a,b,c,d){var e;e=a.ii;Cv(d,e,b-Eq(d,e)|0);return a.r.k(b,c,d);}
function A9w(a,b){return 0;}
function AR8(){DW.call(this);}
function Bbr(){var a=new AR8();A2R(a);return a;}
function A2R(a){Hd(a,(-1));}
function A4K(a,b,c,d){return b;}
function PU(){DW.call(this);}
function AT9(a,b,c,d){if(Eq(d,a.ii)!=b)b=(-1);return b;}
function Q5(){DW.call(this);this.wG=0;}
function A3x(a,b,c,d){var e;e=a.ii;Cv(d,e,b-Eq(d,e)|0);a.wG=b;return b;}
function AUc(a){return a.wG;}
function A8L(a,b){return 0;}
function HU(){DW.call(this);}
function Bb2(){var a=new HU();A$k(a);return a;}
function A$k(a){Hd(a,0);}
function A1u(a,b,c,d){if(d.nu!=1&&b!=d.by)return (-1);ARw(d);MZ(d,0,b);return b;}
function CI(){Co.call(this);this.dl=0;}
function Bl_(){var a=new CI();EN(a);return a;}
function EN(a){Cz(a);a.dl=1;}
function A_w(a,b,c,d){var e;if((b+a.eb()|0)>d.by){d.hr=1;return (-1);}e=a.dn(b,c);if(e<0)return (-1);return a.r.k(b+e|0,c,d);}
function A98(a){return a.dl;}
function AW6(a,b){return 1;}
function AFT(){CI.call(this);}
function II(a){var b=new AFT();A7D(b,a);return b;}
function A7D(a,b){NB(a,b);a.dl=1;a.p3=1;a.dl=0;}
function A9K(a,b,c){return 0;}
function A5z(a,b,c,d){var e,f,g;e=d.by;f=d.fg;while(true){g=R(b,e);if(g>0)return (-1);if(g<0&&DS(Y(c,b))&&b>f&&Dt(Y(c,b-1|0))){b=b+1|0;continue;}if(a.r.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function A4B(a,b,c,d,e){var f,g;f=e.by;g=e.fg;while(true){if(c<b)return (-1);if(c<f&&DS(Y(d,c))&&c>g&&Dt(Y(d,c-1|0))){c=c+(-1)|0;continue;}if(a.r.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A3w(a,b){return 0;}
function CE(){var a=this;Co.call(a);a.dm=null;a.f8=null;a.cK=0;}
function Bma(){var a=new CE();A4x(a);return a;}
function BaC(a,b){var c=new CE();GT(c,a,b);return c;}
function A4x(a){Cz(a);}
function GT(a,b,c){Cz(a);a.dm=b;a.f8=c;a.cK=c.ii;}
function AWp(a,b,c,d){var e,f,g,h;if(a.dm===null)return (-1);e=Ho(d,a.cK);EM(d,a.cK,b);f=a.dm.s;g=0;while(true){if(g>=f){EM(d,a.cK,e);return (-1);}h=Z(a.dm,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AZj(a,b){a.f8.r=b;}
function A7c(a,b){var c;a:{if(a.dm!==null){c=Jj(a.dm);while(true){if(!KC(c))break a;if(!KT(c).d4(b))continue;else return 1;}}}return 0;}
function AZQ(a,b){return JG(b,a.cK)>=0&&Ho(b,a.cK)==JG(b,a.cK)?0:1;}
function AUG(a){var b,c,d,e;a.eQ=1;if(a.f8!==null&&!a.f8.eQ)K8(a.f8);a:{if(a.dm!==null){b=a.dm.s;c=0;while(true){if(c>=b)break a;d=Z(a.dm,c);e=d.lA();if(e===null)e=d;else{d.eQ=1;Eo(a.dm,c);AMI(a.dm,c,e);}if(!e.eQ)e.iY();c=c+1|0;}}}if(a.r!==null)K8(a);}
function K1(){CE.call(this);}
function Bmb(){var a=new K1();AXV(a);return a;}
function AXV(a){Cz(a);}
function AZb(a,b,c,d){var e,f,g,h;e=Eq(d,a.cK);Cv(d,a.cK,b);f=a.dm.s;g=0;while(true){if(g>=f){Cv(d,a.cK,e);return (-1);}h=Z(a.dm,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A9i(a,b){return !Eq(b,a.cK)?0:1;}
function EW(){K1.call(this);}
function A42(a,b,c,d){var e,f,g;e=Eq(d,a.cK);Cv(d,a.cK,b);f=a.dm.s;g=0;while(g<f){if(Z(a.dm,g).k(b,c,d)>=0)return a.r.k(a.f8.wG,c,d);g=g+1|0;}Cv(d,a.cK,e);return (-1);}
function A83(a,b){a.r=b;}
function Tb(){EW.call(this);}
function AZf(a,b,c,d){var e,f;e=a.dm.s;f=0;while(f<e){if(Z(a.dm,f).k(b,c,d)>=0)return a.r.k(b,c,d);f=f+1|0;}return (-1);}
function A1l(a,b){return 0;}
function WJ(){EW.call(this);}
function ATW(a,b,c,d){var e,f;e=a.dm.s;f=0;while(true){if(f>=e)return a.r.k(b,c,d);if(Z(a.dm,f).k(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A$a(a,b){return 0;}
function Va(){EW.call(this);}
function AUD(a,b,c,d){var e,f,g,h;e=a.dm.s;f=d.of?0:d.fg;a:{g=a.r.k(b,c,d);if(g>=0){Cv(d,a.cK,b);h=0;while(true){if(h>=e)break a;if(Z(a.dm,h).eW(f,b,c,d)>=0){Cv(d,a.cK,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_K(a,b){return 0;}
function Rh(){EW.call(this);}
function A2$(a,b,c,d){var e,f;e=a.dm.s;Cv(d,a.cK,b);f=0;while(true){if(f>=e)return a.r.k(b,c,d);if(Z(a.dm,f).eW(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A9o(a,b){return 0;}
function IA(){CE.call(this);this.fo=null;}
function Bco(a,b){var c=new IA();ZX(c,a,b);return c;}
function ZX(a,b,c){Cz(a);a.fo=b;a.f8=c;a.cK=c.ii;}
function ATb(a,b,c,d){var e,f;e=Ho(d,a.cK);EM(d,a.cK,b);f=a.fo.k(b,c,d);if(f>=0)return f;EM(d,a.cK,e);return (-1);}
function AX8(a,b,c,d){var e;e=a.fo.eJ(b,c,d);if(e>=0)EM(d,a.cK,e);return e;}
function A9z(a,b,c,d,e){var f;f=a.fo.eW(b,c,d,e);if(f>=0)EM(e,a.cK,f);return f;}
function A6$(a,b){return a.fo.d4(b);}
function A8J(a){var b;b=new OQ;ZX(b,a.fo,a.f8);a.r=b;return b;}
function A10(a){var b;a.eQ=1;if(a.f8!==null&&!a.f8.eQ)K8(a.f8);if(a.fo!==null&&!a.fo.eQ){b=a.fo.lA();if(b!==null){a.fo.eQ=1;a.fo=b;}a.fo.iY();}}
function H1(){D.call(this);}
function Bm(){var a=this;H1.call(a);a.ck=0;a.dQ=0;a.b$=null;a.qa=null;a.qF=null;a.ca=0;}
var Bmc=null;function Bmd(){var a=new Bm();B0(a);return a;}
function B0(a){var b;b=new WX;b.bx=$rt_createIntArray(64);a.b$=b;}
function A3_(a){return null;}
function A3H(a){return a.b$;}
function ANX(a){return !a.dQ?(I1(a.b$,0)>=2048?0:1):AEq(a.b$,0)>=2048?0:1;}
function A5$(a){return a.ca;}
function A92(a){return a;}
function YV(a){var b,c;if(a.qF===null){b=a.kp();c=new Sp;c.Jm=a;c.Co=b;B0(c);a.qF=c;Fz(a.qF,a.dQ);}return a.qF;}
function Ka(a){var b,c;if(a.qa===null){b=a.kp();c=new So;c.GI=a;c.Eu=b;c.Bi=a;B0(c);a.qa=c;Fz(a.qa,a.ck);a.qa.ca=a.ca;}return a.qa;}
function A$_(a){return 0;}
function Fz(a,b){if(a.ck^b){a.ck=a.ck?0:1;a.dQ=a.dQ?0:1;}if(!a.ca)a.ca=1;return a;}
function AVU(a){return a.ck;}
function KE(b,c){if(b.hE()!==null&&c.hE()!==null)return AD6(b.hE(),c.hE());return 1;}
function QM(b,c){return APO(ARq(Bmc,b),c);}
function Z1(){Bmc=new H_;}
function ZL(){var a=this;Bm.call(a);a.xH=0;a.y6=0;a.np=0;a.uN=0;a.ix=0;a.ln=0;a.b6=null;a.c5=null;}
function Er(){var a=new ZL();A2t(a);return a;}
function A$E(a,b){var c=new ZL();AUV(c,a,b);return c;}
function A2t(a){B0(a);a.b6=A_M();}
function AUV(a,b,c){B0(a);a.b6=A_M();a.xH=b;a.y6=c;}
function Dp(a,b){a:{if(a.xH){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ix){OA(a.b6,Kd(b&65535));break a;}Mc(a.b6,Kd(b&65535));break a;}if(a.y6&&b>128){a.np=1;b=GQ(GP(b));}}}if(!(!QU(b)&&!PD(b))){if(a.uN)OA(a.b$,b-55296|0);else Mc(a.b$,b-55296|0);}if(a.ix)OA(a.b6,b);else Mc(a.b6,b);if(!a.ca&&Mw(b))a.ca=1;return a;}
function ASs(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(a.uN){if(!b.dQ)G1(a.b$,b.kp());else Ed(a.b$,b.kp());}else if(!b.dQ)Ht(a.b$,b.kp());else{Hg(a.b$,b.kp());Ed(a.b$,b.kp());a.dQ=a.dQ?0:1;a.uN=1;}if(!a.ln&&b.hE()!==null){if(a.ix){if(!b.ck)G1(a.b6,b.hE());else Ed(a.b6,b.hE());}else if(!b.ck)Ht(a.b6,b.hE());else{Hg(a.b6,b.hE());Ed(a.b6,b.hE());a.ck=a.ck?0:1;a.ix=1;}}else{c=a.ck;if(a.c5!==null){d=a.c5;if(!c){e=new TZ;e.HE=a;e.EW=c;e.Bc=d;e.A7=b;B0(e);a.c5=e;}else{e=new T0;e.JK=a;e.Af=c;e.Dv=d;e.Dc=b;B0(e);a.c5=
e;}}else{if(c&&!a.ix&&Oq(a.b6)){d=new TW;d.Ix=a;d.DA=b;B0(d);a.c5=d;}else if(!c){d=new TU;d.xf=a;d.wu=c;d.CJ=b;B0(d);a.c5=d;}else{d=new TV;d.vj=a;d.tS=c;d.A$=b;B0(d);a.c5=d;}a.ln=1;}}return a;}
function CG(a,b,c){var d;if(b>c){d=new Cb;O(d);M(d);}a:{b:{if(!a.xH){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Dp(a,b);b=b+1|0;}}if(a.ix)AIB(a.b6,b,c+1|0);else Jp(a.b6,b,c+1|0);}return a;}
function AIa(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(b.np)a.np=1;if(!(a.dQ^b.dQ)){if(!a.dQ)Ht(a.b$,b.b$);else Ed(a.b$,b.b$);}else if(a.dQ)G1(a.b$,b.b$);else{Hg(a.b$,b.b$);Ed(a.b$,b.b$);a.dQ=1;}if(!a.ln&&DY(b)!==null){if(!(a.ck^b.ck)){if(!a.ck)Ht(a.b6,DY(b));else Ed(a.b6,DY(b));}else if(a.ck)G1(a.b6,DY(b));else{Hg(a.b6,DY(b));Ed(a.b6,DY(b));a.ck=1;}}else{c=a.ck;if(a.c5!==null){d=a.c5;if(!c){e=new Pr;e.Fp=a;e.AQ=c;e.EB=d;e.Bq=b;B0(e);a.c5=e;}else{e=new PF;e.FE=a;e.EP=c;e.y2=d;e.y8=b;B0(e);a.c5=e;}}else{if(!a.ix
&&Oq(a.b6)){if(!c){d=new TX;d.JM=a;d.zT=b;B0(d);a.c5=d;}else{d=new TY;d.HO=a;d.EG=b;B0(d);a.c5=d;}}else if(!c){d=new T2;d.AU=a;d.Ai=b;d.Dx=c;B0(d);a.c5=d;}else{d=new T3;d.At=a;d.AA=b;d.D0=c;B0(d);a.c5=d;}a.ln=1;}}}
function Sw(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(b.np)a.np=1;if(!(a.dQ^b.dQ)){if(!a.dQ)Ed(a.b$,b.b$);else Ht(a.b$,b.b$);}else if(!a.dQ)G1(a.b$,b.b$);else{Hg(a.b$,b.b$);Ed(a.b$,b.b$);a.dQ=0;}if(!a.ln&&DY(b)!==null){if(!(a.ck^b.ck)){if(!a.ck)Ed(a.b6,DY(b));else Ht(a.b6,DY(b));}else if(!a.ck)G1(a.b6,DY(b));else{Hg(a.b6,DY(b));Ed(a.b6,DY(b));a.ck=0;}}else{c=a.ck;if(a.c5!==null){d=a.c5;if(!c){e=new Pt;e.HD=a;e.Ei=c;e.Cm=d;e.Ae=b;B0(e);a.c5=e;}else{e=new Pu;e.HU=a;e.D9=c;e.B1=d;e.Eh=b;B0(e);a.c5=e;}}else{if(!a.ix
&&Oq(a.b6)){if(!c){d=new Pp;d.FH=a;d.CX=b;B0(d);a.c5=d;}else{d=new Pq;d.JH=a;d.zM=b;B0(d);a.c5=d;}}else if(!c){d=new Pv;d.Fc=a;d.EV=b;d.Az=c;B0(d);a.c5=d;}else{d=new Po;d.Ax=a;d.Eb=b;d.DE=c;B0(d);a.c5=d;}a.ln=1;}}}
function D6(a,b){if(a.c5!==null)return a.ck^a.c5.Y(b);return a.ck^EK(a.b6,b);}
function DY(a){if(!a.ln)return a.b6;return null;}
function A5s(a){return a.b$;}
function A1b(a){var b,c;if(a.c5!==null)return a;b=DY(a);c=new Ps;c.Ho=a;c.sh=b;B0(c);return Fz(c,a.ck);}
function A7Z(a){var b,c;b=new S;V(b);c=I1(a.b6,0);while(c>=0){Hl(b,Ix(c));Dx(b,124);c=I1(a.b6,c+1|0);}if(b.bY>0)Sj(b,b.bY-1|0);return T(b);}
function AVV(a){return a.np;}
function MR(){var a=this;B6.call(a);a.G8=null;a.Jq=null;}
function E4(){Co.call(this);this.bQ=null;}
function Bme(a,b,c){var d=new E4();Eg(d,a,b,c);return d;}
function Eg(a,b,c,d){NB(a,c);a.bQ=b;a.p3=d;}
function A_B(a){return a.bQ;}
function A0o(a,b){return !a.bQ.d4(b)&&!a.r.d4(b)?0:1;}
function A$G(a,b){return 1;}
function AYt(a){var b;a.eQ=1;if(a.r!==null&&!a.r.eQ){b=a.r.lA();if(b!==null){a.r.eQ=1;a.r=b;}a.r.iY();}if(a.bQ!==null){if(!a.bQ.eQ){b=a.bQ.lA();if(b!==null){a.bQ.eQ=1;a.bQ=b;}a.bQ.iY();}else if(a.bQ instanceof IA&&a.bQ.f8.wS)a.bQ=a.bQ.r;}}
function D8(){E4.call(this);this.cN=null;}
function BaT(a,b,c){var d=new D8();F6(d,a,b,c);return d;}
function F6(a,b,c,d){Eg(a,b,c,d);a.cN=b;}
function A2_(a,b,c,d){var e,f;e=0;a:{while((b+a.cN.eb()|0)<=d.by){f=a.cN.dn(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.r.k(b,c,d);if(f>=0)break;b=b-a.cN.eb()|0;e=e+(-1)|0;}return f;}
function GF(){D8.call(this);this.k1=null;}
function BbU(a,b,c,d){var e=new GF();QO(e,a,b,c,d);return e;}
function QO(a,b,c,d,e){F6(a,c,d,e);a.k1=b;}
function A3Y(a,b,c,d){var e,f,g,h;e=a.k1.jg;f=a.k1.iq;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.cN.eb()|0)>d.by)break a;h=a.cN.dn(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.r.k(b,c,d);if(h>=0)break;b=b-a.cN.eb()|0;g=g+(-1)|0;}return h;}if((b+a.cN.eb()|0)>d.by){d.hr=1;return (-1);}h=a.cN.dn(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function DX(){E4.call(this);}
function A3o(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.bQ.k(b,c,d);if(e>=0)return e;return a.r.k(b,c,d);}
function FX(){D8.call(this);}
function A7m(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<0)e=a.r.k(b,c,d);return e;}
function A2K(a,b){a.r=b;a.bQ.cb(b);}
function Sr(){D8.call(this);}
function A_r(a,b,c,d){while((b+a.cN.eb()|0)<=d.by&&a.cN.dn(b,c)>0){b=b+a.cN.eb()|0;}return a.r.k(b,c,d);}
function AYJ(a,b,c,d){var e,f,g;e=a.r.eJ(b,c,d);if(e<0)return (-1);f=e-a.cN.eb()|0;while(f>=b&&a.cN.dn(f,c)>0){g=f-a.cN.eb()|0;e=f;f=g;}return e;}
function EA(){Cb.call(this);}
function Bmf(){var a=new EA();A3M(a);return a;}
function A3M(a){O(a);}
function Tm(){var a=this;H1.call(a);a.jg=0;a.iq=0;}
function A5Z(a){return a.jg;}
function A$A(a){return a.iq;}
function A78(a){var b;b=new S;V(b);return T(H(H(H(Be(H(b,B(639)),a.jg),B(640)),a.iq==2147483647?B(3):My(AQO(a.iq))),B(641)));}
function TO(){Co.call(this);}
function Bmg(){var a=new TO();A_A(a);return a;}
function A_A(a){Cz(a);}
function AXt(a,b,c,d){return b;}
function A8I(a,b){return 0;}
function WX(){var a=this;D.call(a);a.bx=null;a.cn=0;}
function A_M(){var a=new WX();A4t(a);return a;}
function A4t(a){a.bx=$rt_createIntArray(0);}
function Mc(a,b){var c,d;c=b/32|0;if(b>=a.cn){KH(a,c+1|0);a.cn=b+1|0;}d=a.bx.data;d[c]=d[c]|1<<(b%32|0);}
function Jp(a,b,c){var d,e,f,g,h;if(b>c){d=new BO;O(d);M(d);}e=b/32|0;f=c/32|0;if(c>a.cn){KH(a,f+1|0);a.cn=c;}if(e==f){g=a.bx.data;g[e]=g[e]|Ji(a,b)&KB(a,c);}else{g=a.bx.data;g[e]=g[e]|Ji(a,b);h=e+1|0;while(h<f){a.bx.data[h]=(-1);h=h+1|0;}g=a.bx.data;g[f]=g[f]|KB(a,c);}}
function Ji(a,b){return (-1)<<(b%32|0);}
function KB(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function OA(a,b){var c,d;c=b/32|0;if(c<a.bx.data.length){d=a.bx.data;d[c]=d[c]&Nn((-2),b%32|0);if(b==(a.cn-1|0))Ib(a);}}
function AIB(a,b,c){var d,e,f,g,h;if(b>c){d=new BO;O(d);M(d);}if(b>=a.cn)return;c=CB(a.cn,c);e=b/32|0;f=c/32|0;if(e==f){g=a.bx.data;g[e]=g[e]&(KB(a,b)|Ji(a,c));}else{g=a.bx.data;g[e]=g[e]&KB(a,b);h=e+1|0;while(h<f){a.bx.data[h]=0;h=h+1|0;}g=a.bx.data;g[f]=g[f]&Ji(a,c);}Ib(a);}
function EK(a,b){var c;c=b/32|0;return c<a.bx.data.length&&a.bx.data[c]&1<<(b%32|0)?1:0;}
function I1(a,b){var c,d,e;if(b>=a.cn)return (-1);c=b/32|0;d=a.bx.data[c]>>>(b%32|0);if(d)return JD(d)+b|0;d=(a.cn+31|0)/32|0;e=c+1|0;while(e<d){if(a.bx.data[e])return (e*32|0)+JD(a.bx.data[e])|0;e=e+1|0;}return (-1);}
function AEq(a,b){var c,d,e;if(b>=a.cn)return b;c=b/32|0;d=(a.bx.data[c]^(-1))>>>(b%32|0);if(d)return JD(d)+b|0;d=(a.cn+31|0)/32|0;e=c+1|0;while(e<d){if(a.bx.data[e]!=(-1))return (e*32|0)+JD(a.bx.data[e]^(-1))|0;e=e+1|0;}return a.cn;}
function KH(a,b){var c,d,e,f;if(a.bx.data.length>=b)return;c=DE((b*3|0)/2|0,(a.bx.data.length*2|0)+1|0);d=a.bx.data;e=$rt_createIntArray(c);f=e.data;b=CB(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.bx=e;}
function Ib(a){var b,c,d;b=(a.cn+31|0)/32|0;a.cn=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Tx(a.bx.data[c]);if(d<32)break;c=c+(-1)|0;a.cn=a.cn-32|0;}a.cn=a.cn-d|0;}}
function AD6(a,b){var c,d;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){if(a.bx.data[d]&b.bx.data[d])return 1;d=d+1|0;}return 0;}
function Ed(a,b){var c,d,e;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){e=a.bx.data;e[d]=e[d]&b.bx.data[d];d=d+1|0;}while(c<a.bx.data.length){a.bx.data[c]=0;c=c+1|0;}a.cn=CB(a.cn,b.cn);Ib(a);}
function G1(a,b){var c,d,e;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){e=a.bx.data;e[d]=e[d]&(b.bx.data[d]^(-1));d=d+1|0;}Ib(a);}
function Ht(a,b){var c,d,e;a.cn=DE(a.cn,b.cn);KH(a,(a.cn+31|0)/32|0);c=CB(a.bx.data.length,b.cn);d=0;while(d<c){e=a.bx.data;e[d]=e[d]|b.bx.data[d];d=d+1|0;}}
function Hg(a,b){var c,d,e;a.cn=DE(a.cn,b.cn);KH(a,(a.cn+31|0)/32|0);c=CB(a.bx.data.length,b.cn);d=0;while(d<c){e=a.bx.data;e[d]=e[d]^b.bx.data[d];d=d+1|0;}Ib(a);}
function Oq(a){return a.cn?0:1;}
function OI(){var a=this;CE.call(a);a.zP=null;a.Hn=0;}
function A5B(a,b){a.r=b;}
function ABG(a,b,c,d){var e,f,g,h,i;e=d.fg;f=d.by;g=b+1|0;h=R(g,f);if(h>0){d.hr=1;return (-1);}i=Y(c,b);if(!a.zP.Y(i))return (-1);if(Dt(i)){if(h<0&&DS(Y(c,g)))return (-1);}else if(DS(i)&&b>e&&Dt(Y(c,b-1|0)))return (-1);return a.r.k(g,c,d);}
function P7(){var a=this;CE.call(a);a.vO=null;a.xR=null;}
function AEm(a,b){var c=new P7();AHg(c,a,b);return c;}
function AHg(a,b,c){Cz(a);a.vO=b;a.xR=c;}
function ATF(a,b,c,d){var e;e=a.vO.k(b,c,d);if(e<0)e=ABG(a.xR,b,c,d);if(e>=0)return e;return (-1);}
function A8v(a,b){a.r=b;a.xR.r=b;a.vO.cb(b);}
function AUd(a,b){return 1;}
function ATZ(a,b){return 1;}
function EP(){var a=this;CE.call(a);a.h1=null;a.Gb=0;}
function A6P(a){var b=new EP();Wc(b,a);return b;}
function Wc(a,b){Cz(a);a.h1=b.sP();a.Gb=b.ck;}
function A5l(a,b,c,d){var e,f,g;e=d.by;if(b<e){f=b+1|0;g=Y(c,b);if(a.Y(g)){b=a.r.k(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=Y(c,f);if(J5(g,f)&&a.Y(EJ(g,f)))return a.r.k(b,c,d);}}return (-1);}
function AV8(a,b){return a.h1.Y(b);}
function ATA(a,b){if(b instanceof EY)return a.h1.Y(b.kB);if(b instanceof Fw)return a.h1.Y(b.gu);if(b instanceof EP)return KE(a.h1,b.h1);if(!(b instanceof Fo))return 1;return KE(a.h1,b.j4);}
function AXh(a){return a.h1;}
function A9Y(a,b){a.r=b;}
function AVP(a,b){return 1;}
function MQ(){EP.call(this);}
function AW7(a,b){return a.h1.Y(GQ(GP(b)));}
function Zv(){var a=this;CI.call(a);a.Di=null;a.FZ=0;}
function AWF(a){var b=new Zv();AYP(b,a);return b;}
function AYP(a,b){EN(a);a.Di=b.sP();a.FZ=b.ck;}
function A6T(a,b,c){return !a.Di.Y(EU(FF(Y(c,b))))?(-1):1;}
function Fo(){var a=this;CI.call(a);a.j4=null;a.Gu=0;}
function A09(a){var b=new Fo();AZE(b,a);return b;}
function AZE(a,b){EN(a);a.j4=b.sP();a.Gu=b.ck;}
function S7(a,b,c){return !a.j4.Y(Y(c,b))?(-1):1;}
function AZm(a,b){if(b instanceof Fw)return a.j4.Y(b.gu);if(b instanceof Fo)return KE(a.j4,b.j4);if(!(b instanceof EP)){if(!(b instanceof EY))return 1;return 0;}return KE(a.j4,b.h1);}
function A8x(a){return a.j4;}
function T5(){var a=this;CE.call(a);a.jW=null;a.x8=null;a.oy=0;}
function A$t(a,b){var c=new T5();A3r(c,a,b);return c;}
function A3r(a,b,c){Cz(a);a.jW=b;a.oy=c;}
function AYa(a,b){a.r=b;}
function P$(a){if(a.x8===null)a.x8=AH$(a.jW);return a.x8;}
function ASR(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.by;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Y(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.oy)return (-1);while(true){if(l>=a.oy)return a.r.k(i,c,d);if(m[l]!=a.jW.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Y(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Y(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.oy==3&&f[0]==a.jW.data[0]&&f[1]==a.jW.data[1]&&f[2]==a.jW.data[2]?a.r.k(b,c,d):(-1);}return a.oy==2&&f[0]==a.jW.data[0]&&f[1]==a.jW.data[1]?a.r.k(k,c,d):(-1);}return (-1);}return (-1);}
function A4f(a,b){return b instanceof T5&&!DC(P$(b),P$(a))?0:1;}
function A1e(a,b){return 1;}
function Fw(){CI.call(this);this.gu=0;}
function AAf(a){var b=new Fw();AZG(b,a);return b;}
function AZG(a,b){EN(a);a.gu=b;}
function A6L(a){return 1;}
function AWB(a,b,c){return a.gu!=Y(c,b)?(-1):1;}
function AVD(a,b,c,d){var e,f,g,h;if(!(c instanceof B4))return Jd(a,b,c,d);e=c;f=d.by;while(true){if(b>=f)return (-1);g=Hk(e,a.gu,b);if(g<0)return (-1);h=a.r;b=g+1|0;if(h.k(b,c,d)>=0)break;}return g;}
function AXi(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jo(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=Ij(f,a.gu,c);if(g<0)break a;if(g<b)break a;if(a.r.k(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ATX(a){return a.gu;}
function A0$(a,b){if(b instanceof Fw)return b.gu!=a.gu?0:1;if(!(b instanceof Fo)){if(b instanceof EP)return b.Y(a.gu);if(!(b instanceof EY))return 1;return 0;}return S7(b,0,SD(a.gu))<=0?0:1;}
function AGP(){CI.call(this);this.BR=0;}
function A89(a){var b=new AGP();A7S(b,a);return b;}
function A7S(a,b){EN(a);a.BR=EU(FF(b));}
function A2T(a,b,c){return a.BR!=EU(FF(Y(c,b)))?(-1):1;}
function XO(){var a=this;CI.call(a);a.Br=0;a.Ce=0;}
function A4w(a){var b=new XO();A0d(b,a);return b;}
function A0d(a,b){EN(a);a.Br=b;a.Ce=Kd(b);}
function AS8(a,b,c){return a.Br!=Y(c,b)&&a.Ce!=Y(c,b)?(-1):1;}
function GK(){var a=this;CE.call(a);a.pV=0;a.ul=null;a.tO=null;a.tM=0;}
function BcX(a,b){var c=new GK();Pe(c,a,b);return c;}
function Pe(a,b,c){Cz(a);a.pV=1;a.tO=b;a.tM=c;}
function A_e(a,b){a.r=b;}
function AZa(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.by;if(b>=f)return (-1);g=LI(a,b,c,f);h=b+a.pV|0;i=AQP(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Di(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LI(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=AQP(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.pV|0;if(h>=f){b=k;break a;}g=LI(a,h,c,f);b=k;}}}if(b!=a.tM)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.r.k(h,c,d);if(i[g]!=a.tO.data[g])break;g=g+1|0;}return (-1);}
function Sv(a){var b,c;if(a.ul===null){b=new S;V(b);c=0;while(c<a.tM){Hl(b,Ix(a.tO.data[c]));c=c+1|0;}a.ul=T(b);}return a.ul;}
function LI(a,b,c,d){var e,f,g;a.pV=1;if(b>=(d-1|0))e=Y(c,b);else{d=b+1|0;e=Y(c,b);f=Y(c,d);if(J5(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Dt(g[0])&&DS(g[1])?EJ(g[0],g[1]):g[0];a.pV=2;}}return e;}
function AXw(a,b){return b instanceof GK&&!DC(Sv(b),Sv(a))?0:1;}
function A85(a,b){return 1;}
function SJ(){GK.call(this);}
function V3(){GK.call(this);}
function S4(){DX.call(this);}
function A4M(a,b,c,d){var e;while(true){e=a.bQ.k(b,c,d);if(e<=0)break;b=e;}return a.r.k(b,c,d);}
function Uy(){DX.call(this);}
function A7L(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bQ.k(e,c,d);if(b<=e)break;e=b;}b=e;}return a.r.k(b,c,d);}
function Hx(){DX.call(this);}
function A9V(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.bQ.k(b,c,d);if(e>=0)return e;return a.r.k(b,c,d);}
function A$O(a,b){a.r=b;a.bQ.cb(b);}
function PN(){Hx.call(this);}
function AXf(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<=0)e=b;return a.r.k(e,c,d);}
function A7$(a,b){a.r=b;}
function G$(){var a=this;DX.call(a);a.kF=null;a.hx=0;}
function Bmh(a,b,c,d,e){var f=new G$();MP(f,a,b,c,d,e);return f;}
function MP(a,b,c,d,e,f){Eg(a,c,d,e);a.kF=b;a.hx=f;}
function A_G(a,b,c,d){var e,f;e=Th(d,a.hx);if(!a.bQ.b4(d))return a.r.k(b,c,d);if(e>=a.kF.iq)return a.r.k(b,c,d);f=a.hx;e=e+1|0;FH(d,f,e);f=a.bQ.k(b,c,d);if(f>=0){FH(d,a.hx,0);return f;}f=a.hx;e=e+(-1)|0;FH(d,f,e);if(e>=a.kF.jg)return a.r.k(b,c,d);FH(d,a.hx,0);return (-1);}
function OU(){G$.call(this);}
function AWS(a,b,c,d){var e,f,g;e=0;f=a.kF.iq;a:{while(true){g=a.bQ.k(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.kF.jg)return (-1);return a.r.k(b,c,d);}
function Qv(){DX.call(this);}
function A19(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.r.k(b,c,d);if(e>=0)return e;return a.bQ.k(b,c,d);}
function UR(){Hx.call(this);}
function AUf(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.r.k(b,c,d);if(e<0)e=a.bQ.k(b,c,d);return e;}
function RP(){G$.call(this);}
function A3B(a,b,c,d){var e,f;e=Th(d,a.hx);if(!a.bQ.b4(d))return a.r.k(b,c,d);if(e>=a.kF.iq){FH(d,a.hx,0);return a.r.k(b,c,d);}if(e<a.kF.jg){FH(d,a.hx,e+1|0);f=a.bQ.k(b,c,d);}else{f=a.r.k(b,c,d);if(f>=0){FH(d,a.hx,0);return f;}FH(d,a.hx,e+1|0);f=a.bQ.k(b,c,d);}return f;}
function Qw(){E4.call(this);}
function A_y(a,b,c,d){var e;e=d.by;if(e>b)return a.r.eW(b,e,c,d);return a.r.k(b,c,d);}
function A0K(a,b,c,d){var e;e=d.by;if(a.r.eW(b,e,c,d)>=0)return b;return (-1);}
function TT(){E4.call(this);this.uu=null;}
function AZn(a,b,c,d){var e,f;e=d.by;f=Wm(a,b,e,c);if(f>=0)e=f;if(e>b)return a.r.eW(b,e,c,d);return a.r.k(b,c,d);}
function ASU(a,b,c,d){var e,f,g,h;e=d.by;f=a.r.eJ(b,c,d);if(f<0)return (-1);g=Wm(a,f,e,c);if(g>=0)e=g;g=a.r.eW(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.uu.ov(Y(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function Wm(a,b,c,d){while(true){if(b>=c)return (-1);if(a.uu.ov(Y(d,b)))break;b=b+1|0;}return b;}
function Gn(){D.call(this);}
var Bmi=null;var Bmj=null;function Um(b){if(!(b&1)){if(Bmj!==null)return Bmj;Bmj=new Ww;return Bmj;}if(Bmi!==null)return Bmi;Bmi=new Wv;return Bmi;}
function Xu(){D8.call(this);}
function ATs(a,b,c,d){var e;a:{while(true){if((b+a.cN.eb()|0)>d.by)break a;e=a.cN.dn(b,c);if(e<1)break;b=b+e|0;}}return a.r.k(b,c,d);}
function Sn(){FX.call(this);}
function AYy(a,b,c,d){var e;if((b+a.cN.eb()|0)<=d.by){e=a.cN.dn(b,c);if(e>=1)b=b+e|0;}return a.r.k(b,c,d);}
function Uf(){GF.call(this);}
function A9C(a,b,c,d){var e,f,g,h,i;e=a.k1.jg;f=a.k1.iq;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.cN.eb()|0)>d.by)break a;h=a.cN.dn(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.r.k(b,c,d);}if((b+a.cN.eb()|0)>d.by){d.hr=1;return (-1);}i=a.cN.dn(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function UP(){D8.call(this);}
function AZg(a,b,c,d){var e;while(true){e=a.r.k(b,c,d);if(e>=0)break;if((b+a.cN.eb()|0)<=d.by){e=a.cN.dn(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function V5(){FX.call(this);}
function ATw(a,b,c,d){var e;e=a.r.k(b,c,d);if(e>=0)return e;return a.bQ.k(b,c,d);}
function Qg(){GF.call(this);}
function A9L(a,b,c,d){var e,f,g,h,i;e=a.k1.jg;f=a.k1.iq;g=0;while(true){if(g>=e){a:{while(true){h=a.r.k(b,c,d);if(h>=0)break;if((b+a.cN.eb()|0)<=d.by){h=a.cN.dn(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.cN.eb()|0)>d.by){d.hr=1;return (-1);}i=a.cN.dn(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function ABK(){Co.call(this);}
function A1c(){var a=new ABK();AVg(a);return a;}
function AVg(a){Cz(a);}
function A7b(a,b,c,d){if(b&&!(d.lo&&b==d.fg))return (-1);return a.r.k(b,c,d);}
function A6E(a,b){return 0;}
function AAm(){Co.call(this);this.Be=0;}
function A$g(a){var b=new AAm();AXa(b,a);return b;}
function AXa(a,b){Cz(a);a.Be=b;}
function A39(a,b,c,d){var e,f,g;e=b<d.by?Y(c,b):32;f=!b?32:Y(c,b-1|0);g=d.of?0:d.fg;return (e!=32&&!UV(a,e,b,g,c)?0:1)^(f!=32&&!UV(a,f,b-1|0,g,c)?0:1)^a.Be?(-1):a.r.k(b,c,d);}
function A4d(a,b){return 0;}
function UV(a,b,c,d,e){var f;if(!Ld(b)&&b!=95){a:{if(Do(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Y(e,c);if(Ld(f))return 0;if(Do(f)!=6)return 1;}}return 1;}return 0;}
function AJo(){Co.call(this);}
function Bai(){var a=new AJo();A0E(a);return a;}
function A0E(a){Cz(a);}
function AW_(a,b,c,d){if(b!=d.k3)return (-1);return a.r.k(b,c,d);}
function A2u(a,b){return 0;}
function SG(){Co.call(this);this.me=0;}
function Ba4(a){var b=new SG();AQw(b,a);return b;}
function AQw(a,b){Cz(a);a.me=b;}
function A8W(a,b,c,d){var e,f,g;e=!d.lo?Bi(c):d.by;if(b>=e){Cv(d,a.me,0);return a.r.k(b,c,d);}f=e-b|0;if(f==2&&Y(c,b)==13&&Y(c,b+1|0)==10){Cv(d,a.me,0);return a.r.k(b,c,d);}a:{if(f==1){g=Y(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Cv(d,a.me,0);return a.r.k(b,c,d);}
function A4E(a,b){var c;c=!Eq(b,a.me)?0:1;Cv(b,a.me,(-1));return c;}
function AQ4(){Co.call(this);}
function Bba(){var a=new AQ4();AW1(a);return a;}
function AW1(a){Cz(a);}
function A8q(a,b,c,d){if(b<(d.of?Bi(c):d.by))return (-1);d.hr=1;d.Jg=1;return a.r.k(b,c,d);}
function A2S(a,b){return 0;}
function AIN(){Co.call(this);this.DK=null;}
function BcG(a){var b=new AIN();A8Y(b,a);return b;}
function A8Y(a,b){Cz(a);a.DK=b;}
function A4z(a,b,c,d){a:{if(b!=d.by){if(!b)break a;if(d.lo&&b==d.fg)break a;if(a.DK.D_(Y(c,b-1|0),Y(c,b)))break a;}return (-1);}return a.r.k(b,c,d);}
function AWj(a,b){return 0;}
function AGf(){CE.call(this);}
function Bbk(){var a=new AGf();A8g(a);return a;}
function A8g(a){Cz(a);}
function A2c(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;if(f>e){d.hr=1;return (-1);}g=Y(c,b);if(Dt(g)){h=b+2|0;if(h<=e&&J5(g,Y(c,f)))return a.r.k(h,c,d);}return a.r.k(f,c,d);}
function A4i(a,b){a.r=b;}
function A8d(a){return (-2147483602);}
function A4g(a,b){return 1;}
function ZH(){CE.call(this);this.uT=null;}
function BaW(a){var b=new ZH();AUN(b,a);return b;}
function AUN(a,b){Cz(a);a.uT=b;}
function A8l(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;if(f>e){d.hr=1;return (-1);}g=Y(c,b);if(Dt(g)){b=b+2|0;if(b<=e){h=Y(c,f);if(J5(g,h))return a.uT.ov(EJ(g,h))?(-1):a.r.k(b,c,d);}}return a.uT.ov(g)?(-1):a.r.k(f,c,d);}
function A9s(a,b){a.r=b;}
function ASF(a){return (-2147483602);}
function A2j(a,b){return 1;}
function AQH(){Co.call(this);this.pL=0;}
function BaH(a){var b=new AQH();A5S(b,a);return b;}
function A5S(a,b){Cz(a);a.pL=b;}
function AXD(a,b,c,d){var e;e=!d.lo?Bi(c):d.by;if(b>=e){Cv(d,a.pL,0);return a.r.k(b,c,d);}if((e-b|0)==1&&Y(c,b)==10){Cv(d,a.pL,1);return a.r.k(b+1|0,c,d);}return (-1);}
function A5O(a,b){var c;c=!Eq(b,a.pL)?0:1;Cv(b,a.pL,(-1));return c;}
function AN5(){Co.call(this);this.om=0;}
function Baq(a){var b=new AN5();A6a(b,a);return b;}
function A6a(a,b){Cz(a);a.om=b;}
function AY4(a,b,c,d){if((!d.lo?Bi(c)-b|0:d.by-b|0)<=0){Cv(d,a.om,0);return a.r.k(b,c,d);}if(Y(c,b)!=10)return (-1);Cv(d,a.om,1);return a.r.k(b+1|0,c,d);}
function A5K(a,b){var c;c=!Eq(b,a.om)?0:1;Cv(b,a.om,(-1));return c;}
function AH_(){Co.call(this);this.lJ=0;}
function A_Y(a){var b=new AH_();A_I(b,a);return b;}
function A_I(a,b){Cz(a);a.lJ=b;}
function A6z(a,b,c,d){var e,f,g;e=!d.lo?Bi(c)-b|0:d.fg-b|0;if(!e){Cv(d,a.lJ,0);return a.r.k(b,c,d);}if(e<2){f=Y(c,b);g=97;}else{f=Y(c,b);g=Y(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Cv(d,a.lJ,0);return a.r.k(b,c,d);case 13:if(g!=10){Cv(d,a.lJ,0);return a.r.k(b,c,d);}Cv(d,a.lJ,0);return a.r.k(b,c,d);default:}return (-1);}
function AUR(a,b){var c;c=!Eq(b,a.lJ)?0:1;Cv(b,a.lJ,(-1));return c;}
function IR(){var a=this;CE.call(a);a.y4=0;a.mK=0;}
function BcT(a,b){var c=new IR();PC(c,a,b);return c;}
function PC(a,b,c){Cz(a);a.y4=b;a.mK=c;}
function ATt(a,b,c,d){var e,f,g,h;e=HI(a,d);if(e!==null&&(b+Bi(e)|0)<=d.by){f=0;while(true){if(f>=Bi(e)){Cv(d,a.mK,Bi(e));return a.r.k(b+Bi(e)|0,c,d);}g=Y(e,f);h=b+f|0;if(g!=Y(c,h)&&Kd(Y(e,f))!=Y(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A81(a,b){a.r=b;}
function HI(a,b){return AM4(b,a.y4);}
function AZ_(a,b){var c;c=!Eq(b,a.mK)?0:1;Cv(b,a.mK,(-1));return c;}
function AQS(){IR.call(this);}
function Bbz(a,b){var c=new AQS();A$H(c,a,b);return c;}
function A$H(a,b,c){PC(a,b,c);}
function AUY(a,b,c,d){var e,f;e=HI(a,d);if(e!==null&&(b+Bi(e)|0)<=d.by){f=!Wb(c,e,b)?(-1):Bi(e);if(f<0)return (-1);Cv(d,a.mK,f);return a.r.k(b+f|0,c,d);}return (-1);}
function A1k(a,b,c,d){var e,f,g;e=HI(a,d);f=d.fg;if(e!==null&&(b+Bi(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=AKE(g,e,b);if(b<0)return (-1);if(a.r.k(b+Bi(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ATl(a,b,c,d,e){var f,g,h;f=HI(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=AAw(g,f,c);if(h<0)break a;if(h<b)break a;if(a.r.k(h+Bi(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A7F(a,b){return 1;}
function AMc(){IR.call(this);}
function Bap(a,b){var c=new AMc();AWd(c,a,b);return c;}
function AWd(a,b,c){PC(a,b,c);}
function AX6(a,b,c,d){var e,f;e=HI(a,d);if(e!==null&&(b+Bi(e)|0)<=d.by){f=0;while(true){if(f>=Bi(e)){Cv(d,a.mK,Bi(e));return a.r.k(b+Bi(e)|0,c,d);}if(EU(FF(Y(e,f)))!=EU(FF(Y(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AMQ(){var a=this;CI.call(a);a.e4=null;a.w4=null;a.u5=null;}
function Bas(a){var b=new AMQ();A4X(b,a);return b;}
function A4X(a,b){var c;EN(a);a.e4=T(b);a.dl=Ox(b);a.w4=A8c(a.dl);a.u5=A8c(a.dl);c=0;while(c<(a.dl-1|0)){Qi(a.w4,Y(a.e4,c),(a.dl-c|0)-1|0);Qi(a.u5,Y(a.e4,(a.dl-c|0)-1|0),(a.dl-c|0)-1|0);c=c+1|0;}}
function AVc(a,b,c){return !LF(a,c,b)?(-1):a.dl;}
function A38(a,b,c,d){var e,f;e=d.by;while(true){if(b>e)return (-1);f=AQ7(a,c,b,e);if(f<0)return (-1);if(a.r.k(f+a.dl|0,c,d)>=0)break;b=f+1|0;}return f;}
function A5V(a,b,c,d,e){while(true){if(c<b)return (-1);c=AQu(a,d,b,c);if(c<0)return (-1);if(a.r.k(c+a.dl|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWL(a,b){var c;if(b instanceof Fw)return b.gu!=Y(a.e4,0)?0:1;if(b instanceof Fo)return S7(b,0,Ew(a.e4,0,1))<=0?0:1;if(!(b instanceof EP)){if(!(b instanceof EY))return 1;return Bi(a.e4)>1&&b.kB==EJ(Y(a.e4,0),Y(a.e4,1))?1:0;}a:{b:{b=b;if(!b.Y(Y(a.e4,0))){if(Bi(a.e4)<=1)break b;if(!b.Y(EJ(Y(a.e4,0),Y(a.e4,1))))break b;}c=1;break a;}c=0;}return c;}
function AQ7(a,b,c,d){var e,f;e=Y(a.e4,a.dl-1|0);while(true){if(c>(d-a.dl|0))return (-1);f=Y(b,(c+a.dl|0)-1|0);if(f==e&&LF(a,b,c))break;c=c+VD(a.w4,f)|0;}return c;}
function AQu(a,b,c,d){var e,f,g;e=Y(a.e4,0);f=(Bi(b)-d|0)-a.dl|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=Y(b,d);if(g==e&&LF(a,b,d))break;d=d-VD(a.u5,g)|0;}return d;}
function LF(a,b,c){var d;d=0;while(d<a.dl){if(Y(b,d+c|0)!=Y(a.e4,d))return 0;d=d+1|0;}return 1;}
function XF(){CI.call(this);this.sL=null;}
function BcU(a){var b=new XF();A$j(b,a);return b;}
function A$j(a,b){var c,d;EN(a);c=new S;V(c);d=0;while(d<Ox(b)){Dx(c,EU(FF(AIb(b,d))));d=d+1|0;}a.sL=T(c);a.dl=J_(c);}
function AX9(a,b,c){var d;d=0;while(true){if(d>=Bi(a.sL))return Bi(a.sL);if(Y(a.sL,d)!=EU(FF(Y(c,b+d|0))))break;d=d+1|0;}return (-1);}
function OX(){CI.call(this);this.pJ=null;}
function A9E(a,b,c){var d,e,f;d=0;while(true){if(d>=Bi(a.pJ))return Bi(a.pJ);e=Y(a.pJ,d);f=b+d|0;if(e!=Y(c,f)&&Kd(Y(a.pJ,d))!=Y(c,f))break;d=d+1|0;}return (-1);}
function H_(){D.call(this);}
var Bmk=null;var Bml=null;var Bmm=null;function Bmn(){var a=new H_();AF6(a);return a;}
function AF6(a){return;}
function ARq(a,b){var c,d,e;c=0;while(true){if(c>=Bmm.data.length){d=new MR;Bl(d,B(3));d.G8=B(3);d.Jq=b;M(d);}e=Bmm.data[c].data;if(DC(b,e[0]))break;c=c+1|0;}return e[1];}
function AAo(){var b,c,d,e;Bmk=Ba9();Bml=Bb_();b=J($rt_arraycls(D),194);c=b.data;d=J(D,2);e=d.data;e[0]=B(642);e[1]=Bbn();c[0]=d;d=J(D,2);e=d.data;e[0]=B(643);e[1]=A_U();c[1]=d;d=J(D,2);e=d.data;e[0]=B(644);e[1]=BcE();c[2]=d;d=J(D,2);e=d.data;e[0]=B(645);e[1]=BcM();c[3]=d;d=J(D,2);e=d.data;e[0]=B(646);e[1]=Bml;c[4]=d;d=J(D,2);e=d.data;e[0]=B(647);e[1]=Bcf();c[5]=d;d=J(D,2);e=d.data;e[0]=B(648);e[1]=Bav();c[6]=d;d=J(D,2);e=d.data;e[0]=B(649);e[1]=BbB();c[7]=d;d=J(D,2);e=d.data;e[0]=B(650);e[1]=Bby();c[8]=d;d
=J(D,2);e=d.data;e[0]=B(651);e[1]=A_8();c[9]=d;d=J(D,2);e=d.data;e[0]=B(652);e[1]=Bak();c[10]=d;d=J(D,2);e=d.data;e[0]=B(653);e[1]=BbD();c[11]=d;d=J(D,2);e=d.data;e[0]=B(654);e[1]=BaR();c[12]=d;d=J(D,2);e=d.data;e[0]=B(655);e[1]=A_S();c[13]=d;d=J(D,2);e=d.data;e[0]=B(656);e[1]=BcI();c[14]=d;d=J(D,2);e=d.data;e[0]=B(657);e[1]=Baj();c[15]=d;d=J(D,2);e=d.data;e[0]=B(658);e[1]=Bcd();c[16]=d;d=J(D,2);e=d.data;e[0]=B(659);e[1]=BbT();c[17]=d;d=J(D,2);e=d.data;e[0]=B(660);e[1]=Bce();c[18]=d;d=J(D,2);e=d.data;e[0]=B(661);e[1]
=A__();c[19]=d;d=J(D,2);e=d.data;e[0]=B(662);e[1]=BcN();c[20]=d;d=J(D,2);e=d.data;e[0]=B(663);e[1]=BbP();c[21]=d;d=J(D,2);e=d.data;e[0]=B(664);e[1]=BaJ();c[22]=d;d=J(D,2);e=d.data;e[0]=B(665);e[1]=BcD();c[23]=d;d=J(D,2);e=d.data;e[0]=B(666);e[1]=BcA();c[24]=d;d=J(D,2);e=d.data;e[0]=B(667);e[1]=Bbj();c[25]=d;d=J(D,2);e=d.data;e[0]=B(668);e[1]=A_$();c[26]=d;d=J(D,2);e=d.data;e[0]=B(669);e[1]=Bct();c[27]=d;d=J(D,2);e=d.data;e[0]=B(670);e[1]=Bmk;c[28]=d;d=J(D,2);e=d.data;e[0]=B(671);e[1]=BaL();c[29]=d;d=J(D,2);e
=d.data;e[0]=B(44);e[1]=BbC();c[30]=d;d=J(D,2);e=d.data;e[0]=B(672);e[1]=Bmk;c[31]=d;d=J(D,2);e=d.data;e[0]=B(58);e[1]=A_R();c[32]=d;d=J(D,2);e=d.data;e[0]=B(673);e[1]=Bml;c[33]=d;d=J(D,2);e=d.data;e[0]=B(59);e[1]=Bao();c[34]=d;d=J(D,2);e=d.data;e[0]=B(674);e[1]=W(0,127);c[35]=d;d=J(D,2);e=d.data;e[0]=B(675);e[1]=W(128,255);c[36]=d;d=J(D,2);e=d.data;e[0]=B(676);e[1]=W(256,383);c[37]=d;d=J(D,2);e=d.data;e[0]=B(677);e[1]=W(384,591);c[38]=d;d=J(D,2);e=d.data;e[0]=B(678);e[1]=W(592,687);c[39]=d;d=J(D,2);e=d.data;e[0]
=B(679);e[1]=W(688,767);c[40]=d;d=J(D,2);e=d.data;e[0]=B(680);e[1]=W(768,879);c[41]=d;d=J(D,2);e=d.data;e[0]=B(681);e[1]=W(880,1023);c[42]=d;d=J(D,2);e=d.data;e[0]=B(682);e[1]=W(1024,1279);c[43]=d;d=J(D,2);e=d.data;e[0]=B(683);e[1]=W(1280,1327);c[44]=d;d=J(D,2);e=d.data;e[0]=B(684);e[1]=W(1328,1423);c[45]=d;d=J(D,2);e=d.data;e[0]=B(685);e[1]=W(1424,1535);c[46]=d;d=J(D,2);e=d.data;e[0]=B(686);e[1]=W(1536,1791);c[47]=d;d=J(D,2);e=d.data;e[0]=B(687);e[1]=W(1792,1871);c[48]=d;d=J(D,2);e=d.data;e[0]=B(688);e[1]=
W(1872,1919);c[49]=d;d=J(D,2);e=d.data;e[0]=B(689);e[1]=W(1920,1983);c[50]=d;d=J(D,2);e=d.data;e[0]=B(690);e[1]=W(2304,2431);c[51]=d;d=J(D,2);e=d.data;e[0]=B(691);e[1]=W(2432,2559);c[52]=d;d=J(D,2);e=d.data;e[0]=B(692);e[1]=W(2560,2687);c[53]=d;d=J(D,2);e=d.data;e[0]=B(693);e[1]=W(2688,2815);c[54]=d;d=J(D,2);e=d.data;e[0]=B(694);e[1]=W(2816,2943);c[55]=d;d=J(D,2);e=d.data;e[0]=B(695);e[1]=W(2944,3071);c[56]=d;d=J(D,2);e=d.data;e[0]=B(696);e[1]=W(3072,3199);c[57]=d;d=J(D,2);e=d.data;e[0]=B(697);e[1]=W(3200,3327);c[58]
=d;d=J(D,2);e=d.data;e[0]=B(698);e[1]=W(3328,3455);c[59]=d;d=J(D,2);e=d.data;e[0]=B(699);e[1]=W(3456,3583);c[60]=d;d=J(D,2);e=d.data;e[0]=B(700);e[1]=W(3584,3711);c[61]=d;d=J(D,2);e=d.data;e[0]=B(701);e[1]=W(3712,3839);c[62]=d;d=J(D,2);e=d.data;e[0]=B(702);e[1]=W(3840,4095);c[63]=d;d=J(D,2);e=d.data;e[0]=B(703);e[1]=W(4096,4255);c[64]=d;d=J(D,2);e=d.data;e[0]=B(704);e[1]=W(4256,4351);c[65]=d;d=J(D,2);e=d.data;e[0]=B(705);e[1]=W(4352,4607);c[66]=d;d=J(D,2);e=d.data;e[0]=B(706);e[1]=W(4608,4991);c[67]=d;d=J(D,
2);e=d.data;e[0]=B(707);e[1]=W(4992,5023);c[68]=d;d=J(D,2);e=d.data;e[0]=B(708);e[1]=W(5024,5119);c[69]=d;d=J(D,2);e=d.data;e[0]=B(709);e[1]=W(5120,5759);c[70]=d;d=J(D,2);e=d.data;e[0]=B(710);e[1]=W(5760,5791);c[71]=d;d=J(D,2);e=d.data;e[0]=B(711);e[1]=W(5792,5887);c[72]=d;d=J(D,2);e=d.data;e[0]=B(712);e[1]=W(5888,5919);c[73]=d;d=J(D,2);e=d.data;e[0]=B(713);e[1]=W(5920,5951);c[74]=d;d=J(D,2);e=d.data;e[0]=B(714);e[1]=W(5952,5983);c[75]=d;d=J(D,2);e=d.data;e[0]=B(715);e[1]=W(5984,6015);c[76]=d;d=J(D,2);e=d.data;e[0]
=B(716);e[1]=W(6016,6143);c[77]=d;d=J(D,2);e=d.data;e[0]=B(717);e[1]=W(6144,6319);c[78]=d;d=J(D,2);e=d.data;e[0]=B(718);e[1]=W(6400,6479);c[79]=d;d=J(D,2);e=d.data;e[0]=B(719);e[1]=W(6480,6527);c[80]=d;d=J(D,2);e=d.data;e[0]=B(720);e[1]=W(6528,6623);c[81]=d;d=J(D,2);e=d.data;e[0]=B(721);e[1]=W(6624,6655);c[82]=d;d=J(D,2);e=d.data;e[0]=B(722);e[1]=W(6656,6687);c[83]=d;d=J(D,2);e=d.data;e[0]=B(723);e[1]=W(7424,7551);c[84]=d;d=J(D,2);e=d.data;e[0]=B(724);e[1]=W(7552,7615);c[85]=d;d=J(D,2);e=d.data;e[0]=B(725);e[1]
=W(7616,7679);c[86]=d;d=J(D,2);e=d.data;e[0]=B(726);e[1]=W(7680,7935);c[87]=d;d=J(D,2);e=d.data;e[0]=B(727);e[1]=W(7936,8191);c[88]=d;d=J(D,2);e=d.data;e[0]=B(728);e[1]=W(8192,8303);c[89]=d;d=J(D,2);e=d.data;e[0]=B(729);e[1]=W(8304,8351);c[90]=d;d=J(D,2);e=d.data;e[0]=B(730);e[1]=W(8352,8399);c[91]=d;d=J(D,2);e=d.data;e[0]=B(731);e[1]=W(8400,8447);c[92]=d;d=J(D,2);e=d.data;e[0]=B(732);e[1]=W(8448,8527);c[93]=d;d=J(D,2);e=d.data;e[0]=B(733);e[1]=W(8528,8591);c[94]=d;d=J(D,2);e=d.data;e[0]=B(734);e[1]=W(8592,
8703);c[95]=d;d=J(D,2);e=d.data;e[0]=B(735);e[1]=W(8704,8959);c[96]=d;d=J(D,2);e=d.data;e[0]=B(736);e[1]=W(8960,9215);c[97]=d;d=J(D,2);e=d.data;e[0]=B(737);e[1]=W(9216,9279);c[98]=d;d=J(D,2);e=d.data;e[0]=B(738);e[1]=W(9280,9311);c[99]=d;d=J(D,2);e=d.data;e[0]=B(739);e[1]=W(9312,9471);c[100]=d;d=J(D,2);e=d.data;e[0]=B(740);e[1]=W(9472,9599);c[101]=d;d=J(D,2);e=d.data;e[0]=B(741);e[1]=W(9600,9631);c[102]=d;d=J(D,2);e=d.data;e[0]=B(742);e[1]=W(9632,9727);c[103]=d;d=J(D,2);e=d.data;e[0]=B(743);e[1]=W(9728,9983);c[104]
=d;d=J(D,2);e=d.data;e[0]=B(744);e[1]=W(9984,10175);c[105]=d;d=J(D,2);e=d.data;e[0]=B(745);e[1]=W(10176,10223);c[106]=d;d=J(D,2);e=d.data;e[0]=B(746);e[1]=W(10224,10239);c[107]=d;d=J(D,2);e=d.data;e[0]=B(747);e[1]=W(10240,10495);c[108]=d;d=J(D,2);e=d.data;e[0]=B(748);e[1]=W(10496,10623);c[109]=d;d=J(D,2);e=d.data;e[0]=B(749);e[1]=W(10624,10751);c[110]=d;d=J(D,2);e=d.data;e[0]=B(750);e[1]=W(10752,11007);c[111]=d;d=J(D,2);e=d.data;e[0]=B(751);e[1]=W(11008,11263);c[112]=d;d=J(D,2);e=d.data;e[0]=B(752);e[1]=W(11264,
11359);c[113]=d;d=J(D,2);e=d.data;e[0]=B(753);e[1]=W(11392,11519);c[114]=d;d=J(D,2);e=d.data;e[0]=B(754);e[1]=W(11520,11567);c[115]=d;d=J(D,2);e=d.data;e[0]=B(755);e[1]=W(11568,11647);c[116]=d;d=J(D,2);e=d.data;e[0]=B(756);e[1]=W(11648,11743);c[117]=d;d=J(D,2);e=d.data;e[0]=B(757);e[1]=W(11776,11903);c[118]=d;d=J(D,2);e=d.data;e[0]=B(758);e[1]=W(11904,12031);c[119]=d;d=J(D,2);e=d.data;e[0]=B(759);e[1]=W(12032,12255);c[120]=d;d=J(D,2);e=d.data;e[0]=B(760);e[1]=W(12272,12287);c[121]=d;d=J(D,2);e=d.data;e[0]=B(761);e[1]
=W(12288,12351);c[122]=d;d=J(D,2);e=d.data;e[0]=B(762);e[1]=W(12352,12447);c[123]=d;d=J(D,2);e=d.data;e[0]=B(763);e[1]=W(12448,12543);c[124]=d;d=J(D,2);e=d.data;e[0]=B(764);e[1]=W(12544,12591);c[125]=d;d=J(D,2);e=d.data;e[0]=B(765);e[1]=W(12592,12687);c[126]=d;d=J(D,2);e=d.data;e[0]=B(766);e[1]=W(12688,12703);c[127]=d;d=J(D,2);e=d.data;e[0]=B(767);e[1]=W(12704,12735);c[128]=d;d=J(D,2);e=d.data;e[0]=B(768);e[1]=W(12736,12783);c[129]=d;d=J(D,2);e=d.data;e[0]=B(769);e[1]=W(12784,12799);c[130]=d;d=J(D,2);e=d.data;e[0]
=B(770);e[1]=W(12800,13055);c[131]=d;d=J(D,2);e=d.data;e[0]=B(771);e[1]=W(13056,13311);c[132]=d;d=J(D,2);e=d.data;e[0]=B(772);e[1]=W(13312,19893);c[133]=d;d=J(D,2);e=d.data;e[0]=B(773);e[1]=W(19904,19967);c[134]=d;d=J(D,2);e=d.data;e[0]=B(774);e[1]=W(19968,40959);c[135]=d;d=J(D,2);e=d.data;e[0]=B(775);e[1]=W(40960,42127);c[136]=d;d=J(D,2);e=d.data;e[0]=B(776);e[1]=W(42128,42191);c[137]=d;d=J(D,2);e=d.data;e[0]=B(777);e[1]=W(42752,42783);c[138]=d;d=J(D,2);e=d.data;e[0]=B(778);e[1]=W(43008,43055);c[139]=d;d=J(D,
2);e=d.data;e[0]=B(779);e[1]=W(44032,55203);c[140]=d;d=J(D,2);e=d.data;e[0]=B(780);e[1]=W(55296,56191);c[141]=d;d=J(D,2);e=d.data;e[0]=B(781);e[1]=W(56192,56319);c[142]=d;d=J(D,2);e=d.data;e[0]=B(782);e[1]=W(56320,57343);c[143]=d;d=J(D,2);e=d.data;e[0]=B(783);e[1]=W(57344,63743);c[144]=d;d=J(D,2);e=d.data;e[0]=B(784);e[1]=W(63744,64255);c[145]=d;d=J(D,2);e=d.data;e[0]=B(785);e[1]=W(64256,64335);c[146]=d;d=J(D,2);e=d.data;e[0]=B(786);e[1]=W(64336,65023);c[147]=d;d=J(D,2);e=d.data;e[0]=B(787);e[1]=W(65024,65039);c[148]
=d;d=J(D,2);e=d.data;e[0]=B(788);e[1]=W(65040,65055);c[149]=d;d=J(D,2);e=d.data;e[0]=B(789);e[1]=W(65056,65071);c[150]=d;d=J(D,2);e=d.data;e[0]=B(790);e[1]=W(65072,65103);c[151]=d;d=J(D,2);e=d.data;e[0]=B(791);e[1]=W(65104,65135);c[152]=d;d=J(D,2);e=d.data;e[0]=B(792);e[1]=W(65136,65279);c[153]=d;d=J(D,2);e=d.data;e[0]=B(793);e[1]=W(65280,65519);c[154]=d;d=J(D,2);e=d.data;e[0]=B(794);e[1]=W(0,1114111);c[155]=d;d=J(D,2);e=d.data;e[0]=B(795);e[1]=BbE();c[156]=d;d=J(D,2);e=d.data;e[0]=B(796);e[1]=CA(0,1);c[157]
=d;d=J(D,2);e=d.data;e[0]=B(797);e[1]=KU(62,1);c[158]=d;d=J(D,2);e=d.data;e[0]=B(798);e[1]=CA(1,1);c[159]=d;d=J(D,2);e=d.data;e[0]=B(799);e[1]=CA(2,1);c[160]=d;d=J(D,2);e=d.data;e[0]=B(800);e[1]=CA(3,0);c[161]=d;d=J(D,2);e=d.data;e[0]=B(801);e[1]=CA(4,0);c[162]=d;d=J(D,2);e=d.data;e[0]=B(802);e[1]=CA(5,1);c[163]=d;d=J(D,2);e=d.data;e[0]=B(803);e[1]=KU(448,1);c[164]=d;d=J(D,2);e=d.data;e[0]=B(804);e[1]=CA(6,1);c[165]=d;d=J(D,2);e=d.data;e[0]=B(805);e[1]=CA(7,0);c[166]=d;d=J(D,2);e=d.data;e[0]=B(806);e[1]=CA(8,
1);c[167]=d;d=J(D,2);e=d.data;e[0]=B(76);e[1]=KU(3584,1);c[168]=d;d=J(D,2);e=d.data;e[0]=B(807);e[1]=CA(9,1);c[169]=d;d=J(D,2);e=d.data;e[0]=B(808);e[1]=CA(10,1);c[170]=d;d=J(D,2);e=d.data;e[0]=B(809);e[1]=CA(11,1);c[171]=d;d=J(D,2);e=d.data;e[0]=B(810);e[1]=KU(28672,0);c[172]=d;d=J(D,2);e=d.data;e[0]=B(811);e[1]=CA(12,0);c[173]=d;d=J(D,2);e=d.data;e[0]=B(812);e[1]=CA(13,0);c[174]=d;d=J(D,2);e=d.data;e[0]=B(813);e[1]=CA(14,0);c[175]=d;d=J(D,2);e=d.data;e[0]=B(814);e[1]=Bb5(983040,1,1);c[176]=d;d=J(D,2);e=d.data;e[0]
=B(815);e[1]=CA(15,0);c[177]=d;d=J(D,2);e=d.data;e[0]=B(816);e[1]=CA(16,1);c[178]=d;d=J(D,2);e=d.data;e[0]=B(817);e[1]=CA(18,1);c[179]=d;d=J(D,2);e=d.data;e[0]=B(818);e[1]=BaE(19,0,1);c[180]=d;d=J(D,2);e=d.data;e[0]=B(819);e[1]=KU(1643118592,1);c[181]=d;d=J(D,2);e=d.data;e[0]=B(820);e[1]=CA(20,0);c[182]=d;d=J(D,2);e=d.data;e[0]=B(821);e[1]=CA(21,0);c[183]=d;d=J(D,2);e=d.data;e[0]=B(822);e[1]=CA(22,0);c[184]=d;d=J(D,2);e=d.data;e[0]=B(823);e[1]=CA(23,0);c[185]=d;d=J(D,2);e=d.data;e[0]=B(824);e[1]=CA(24,1);c[186]
=d;d=J(D,2);e=d.data;e[0]=B(825);e[1]=KU(2113929216,1);c[187]=d;d=J(D,2);e=d.data;e[0]=B(826);e[1]=CA(25,1);c[188]=d;d=J(D,2);e=d.data;e[0]=B(827);e[1]=CA(26,0);c[189]=d;d=J(D,2);e=d.data;e[0]=B(828);e[1]=CA(27,0);c[190]=d;d=J(D,2);e=d.data;e[0]=B(829);e[1]=CA(28,1);c[191]=d;d=J(D,2);e=d.data;e[0]=B(830);e[1]=CA(29,0);c[192]=d;d=J(D,2);e=d.data;e[0]=B(831);e[1]=CA(30,0);c[193]=d;Bmm=b;}
function By(){var a=this;D.call(a);a.vq=null;a.ux=null;}
function APO(a,b){if(!b&&a.vq===null)a.vq=a.bW();else if(b&&a.ux===null)a.ux=Fz(a.bW(),1);if(b)return a.ux;return a.vq;}
function S$(){CI.call(this);this.z8=0;}
function A0s(a,b,c){var d,e;d=b+1|0;e=Y(c,b);d=Y(c,d);return a.z8!=GQ(GP(EJ(e,d)))?(-1):2;}
function NL(){CE.call(this);this.mv=0;}
function AYS(a){var b=new NL();AUm(b,a);return b;}
function AUm(a,b){Cz(a);a.mv=b;}
function A8D(a,b){a.r=b;}
function A4F(a,b,c,d){var e,f;e=b+1|0;if(e>d.by){d.hr=1;return (-1);}f=Y(c,b);if(b>d.fg&&Dt(Y(c,b-1|0)))return (-1);if(a.mv!=f)return (-1);return a.r.k(e,c,d);}
function AWK(a,b,c,d){var e,f,g,h,i;if(!(c instanceof B4))return Jd(a,b,c,d);e=c;f=d.fg;g=d.by;while(true){if(b>=g)return (-1);h=Hk(e,a.mv,b);if(h<0)return (-1);if(h>f&&Dt(Y(e,h-1|0))){b=h+1|0;continue;}i=a.r;b=h+1|0;if(i.k(b,c,d)>=0)break;}return h;}
function A45(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jo(a,b,c,d,e);f=e.fg;g=d;a:{while(true){if(c<b)return (-1);c=Ij(g,a.mv,c);if(c<0)break a;if(c<b)break a;if(c>f&&Dt(Y(g,c-1|0))){c=c+(-2)|0;continue;}if(a.r.k(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ATg(a,b){if(b instanceof Fw)return 0;if(b instanceof Fo)return 0;if(b instanceof EP)return 0;if(b instanceof EY)return 0;if(b instanceof NR)return 0;if(!(b instanceof NL))return 1;return b.mv!=a.mv?0:1;}
function A01(a,b){return 1;}
function NR(){CE.call(this);this.l5=0;}
function A6A(a){var b=new NR();AY0(b,a);return b;}
function AY0(a,b){Cz(a);a.l5=b;}
function A4q(a,b){a.r=b;}
function ASW(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;g=R(f,e);if(g>0){d.hr=1;return (-1);}h=Y(c,b);if(g<0&&DS(Y(c,f)))return (-1);if(a.l5!=h)return (-1);return a.r.k(f,c,d);}
function A8O(a,b,c,d){var e,f,g;if(!(c instanceof B4))return Jd(a,b,c,d);e=c;f=d.by;while(true){if(b>=f)return (-1);g=Hk(e,a.l5,b);if(g<0)return (-1);b=g+1|0;if(b<f&&DS(Y(e,b))){b=g+2|0;continue;}if(a.r.k(b,c,d)>=0)break;}return g;}
function A0q(a,b,c,d,e){var f,g,h;if(!(d instanceof B4))return Jo(a,b,c,d,e);f=d;g=e.by;a:{while(true){if(c<b)return (-1);c=Ij(f,a.l5,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&DS(Y(f,h))){c=c+(-1)|0;continue;}if(a.r.k(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AVd(a,b){if(b instanceof Fw)return 0;if(b instanceof Fo)return 0;if(b instanceof EP)return 0;if(b instanceof EY)return 0;if(b instanceof NL)return 0;if(!(b instanceof NR))return 1;return b.l5!=a.l5?0:1;}
function A8Q(a,b){return 1;}
function EY(){var a=this;CI.call(a);a.tB=0;a.sf=0;a.kB=0;}
function A9j(a,b,c){var d,e;d=b+1|0;e=Y(c,b);d=Y(c,d);return a.tB==e&&a.sf==d?2:(-1);}
function A71(a,b,c,d){var e,f,g;if(!(c instanceof B4))return Jd(a,b,c,d);e=c;f=d.by;while(b<f){b=Hk(e,a.tB,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=Y(e,b);if(a.sf==g&&a.r.k(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AUn(a,b,c,d,e){var f;if(!(d instanceof B4))return Jo(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=Ij(f,a.sf,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.tB==Y(f,c)&&a.r.k(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function A3a(a){return a.kB;}
function A9a(a,b){if(b instanceof EY)return b.kB!=a.kB?0:1;if(b instanceof EP)return b.Y(a.kB);if(b instanceof Fw)return 0;if(!(b instanceof Fo))return 1;return 0;}
function Wv(){Gn.call(this);}
function Bmo(){var a=new Wv();A34(a);return a;}
function A34(a){return;}
function AUw(a,b){return b!=10?0:1;}
function AZ8(a,b,c){return b!=10?0:1;}
function Ww(){Gn.call(this);}
function Bmp(){var a=new Ww();AWI(a);return a;}
function AWI(a){return;}
function A9N(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function A1Y(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AEN(){var a=this;D.call(a);a.oW=null;a.tR=null;a.gb=0;a.BB=0;}
function A8c(a){var b=new AEN();AW$(b,a);return b;}
function AW$(a,b){while(b>=a.gb){a.gb=a.gb<<1|1;}a.gb=a.gb<<1|1;a.oW=$rt_createIntArray(a.gb+1|0);a.tR=$rt_createIntArray(a.gb+1|0);a.BB=b;}
function Qi(a,b,c){var d,e;d=0;e=b&a.gb;while(a.oW.data[e]&&a.oW.data[e]!=b){d=(d+1|0)&a.gb;e=(e+d|0)&a.gb;}a.oW.data[e]=b;a.tR.data[e]=c;}
function VD(a,b){var c,d,e;c=b&a.gb;d=0;while(true){e=a.oW.data[c];if(!e)break;if(e==b)return a.tR.data[c];d=(d+1|0)&a.gb;c=(c+d|0)&a.gb;}return a.BB;}
function Yv(){D.call(this);}
function NJ(){By.call(this);}
function Ba9(){var a=new NJ();AWT(a);return a;}
function AWT(a){return;}
function AMl(a){return Dp(CG(Er(),9,13),32);}
function Na(){By.call(this);}
function Bb_(){var a=new Na();A0R(a);return a;}
function A0R(a){return;}
function ANM(a){return CG(Er(),48,57);}
function AEF(){By.call(this);}
function Bbn(){var a=new AEF();AWq(a);return a;}
function AWq(a){return;}
function A9u(a){return CG(Er(),97,122);}
function AFi(){By.call(this);}
function A_U(){var a=new AFi();AXc(a);return a;}
function AXc(a){return;}
function A03(a){return CG(Er(),65,90);}
function AFr(){By.call(this);}
function BcE(){var a=new AFr();ATR(a);return a;}
function ATR(a){return;}
function AVF(a){return CG(Er(),0,127);}
function NF(){By.call(this);}
function BcM(){var a=new NF();AUZ(a);return a;}
function AUZ(a){return;}
function ZN(a){return CG(CG(Er(),97,122),65,90);}
function Ma(){NF.call(this);}
function Bcf(){var a=new Ma();AWW(a);return a;}
function AWW(a){return;}
function AAV(a){return CG(ZN(a),48,57);}
function AHP(){By.call(this);}
function Bav(){var a=new AHP();A7Q(a);return a;}
function A7Q(a){return;}
function A6c(a){return CG(CG(CG(Er(),33,64),91,96),123,126);}
function OB(){Ma.call(this);}
function BbB(){var a=new OB();AZP(a);return a;}
function AZP(a){return;}
function AH5(a){return CG(CG(CG(AAV(a),33,64),91,96),123,126);}
function AMN(){OB.call(this);}
function Bby(){var a=new AMN();A0I(a);return a;}
function A0I(a){return;}
function AYv(a){return Dp(AH5(a),32);}
function ACJ(){By.call(this);}
function A_8(){var a=new ACJ();A9F(a);return a;}
function A9F(a){return;}
function A4W(a){return Dp(Dp(Er(),32),9);}
function AAh(){By.call(this);}
function Bak(){var a=new AAh();A$Z(a);return a;}
function A$Z(a){return;}
function AYm(a){return Dp(CG(Er(),0,31),127);}
function AJ8(){By.call(this);}
function BbD(){var a=new AJ8();AT5(a);return a;}
function AT5(a){return;}
function A1Z(a){return CG(CG(CG(Er(),48,57),97,102),65,70);}
function AP_(){By.call(this);}
function BaR(){var a=new AP_();A3W(a);return a;}
function A3W(a){return;}
function A8b(a){var b;b=new VH;b.Ir=a;B0(b);b.ca=1;return b;}
function AHX(){By.call(this);}
function A_S(){var a=new AHX();AZ5(a);return a;}
function AZ5(a){return;}
function A2Z(a){var b;b=new Td;b.IA=a;B0(b);b.ca=1;return b;}
function APn(){By.call(this);}
function BcI(){var a=new APn();ATT(a);return a;}
function ATT(a){return;}
function AWV(a){var b;b=new QK;b.H4=a;B0(b);return b;}
function AEn(){By.call(this);}
function Baj(){var a=new AEn();AYp(a);return a;}
function AYp(a){return;}
function A0b(a){var b;b=new QJ;b.FJ=a;B0(b);return b;}
function AFW(){By.call(this);}
function Bcd(){var a=new AFW();AUX(a);return a;}
function AUX(a){return;}
function A4U(a){var b;b=new Sx;b.GU=a;B0(b);Jp(b.b$,0,2048);b.ca=1;return b;}
function YY(){By.call(this);}
function BbT(){var a=new YY();AUs(a);return a;}
function AUs(a){return;}
function AVn(a){var b;b=new Ua;b.IQ=a;B0(b);b.ca=1;return b;}
function AIu(){By.call(this);}
function Bce(){var a=new AIu();AX7(a);return a;}
function AX7(a){return;}
function A$3(a){var b;b=new Pf;b.G_=a;B0(b);b.ca=1;return b;}
function APC(){By.call(this);}
function A__(){var a=new APC();AYC(a);return a;}
function AYC(a){return;}
function A2U(a){var b;b=new U3;b.Gc=a;B0(b);return b;}
function AE7(){By.call(this);}
function BcN(){var a=new AE7();A6o(a);return a;}
function A6o(a){return;}
function AXG(a){var b;b=new Ta;b.Fg=a;B0(b);b.ca=1;return b;}
function ALa(){By.call(this);}
function BbP(){var a=new ALa();ATm(a);return a;}
function ATm(a){return;}
function AVt(a){var b;b=new Tc;b.GA=a;B0(b);b.ca=1;return b;}
function ACV(){By.call(this);}
function BaJ(){var a=new ACV();AUB(a);return a;}
function AUB(a){return;}
function A5X(a){var b;b=new O8;b.GS=a;B0(b);b.ca=1;return b;}
function AG8(){By.call(this);}
function BcD(){var a=new AG8();AXP(a);return a;}
function AXP(a){return;}
function A61(a){var b;b=new Uq;b.Jv=a;B0(b);b.ca=1;return b;}
function APQ(){By.call(this);}
function BcA(){var a=new APQ();A76(a);return a;}
function A76(a){return;}
function A1f(a){var b;b=new Ut;b.FX=a;B0(b);return b;}
function ABu(){By.call(this);}
function Bbj(){var a=new ABu();AUv(a);return a;}
function AUv(a){return;}
function AZH(a){var b;b=new VZ;b.I0=a;B0(b);return b;}
function AAH(){By.call(this);}
function A_$(){var a=new AAH();A9n(a);return a;}
function A9n(a){return;}
function AYN(a){var b;b=new Vy;b.Fk=a;B0(b);b.ca=1;return b;}
function AHV(){By.call(this);}
function Bct(){var a=new AHV();A6i(a);return a;}
function A6i(a){return;}
function A9q(a){var b;b=new OK;b.JN=a;B0(b);b.ca=1;return b;}
function Lb(){By.call(this);}
function BaL(){var a=new Lb();AVA(a);return a;}
function AVA(a){return;}
function ACL(a){return Dp(CG(CG(CG(Er(),97,122),65,90),48,57),95);}
function AQC(){Lb.call(this);}
function BbC(){var a=new AQC();A6s(a);return a;}
function A6s(a){return;}
function AYE(a){var b;b=Fz(ACL(a),1);b.ca=1;return b;}
function AMT(){NJ.call(this);}
function A_R(){var a=new AMT();A1y(a);return a;}
function A1y(a){return;}
function A32(a){var b;b=Fz(AMl(a),1);b.ca=1;return b;}
function AAA(){Na.call(this);}
function Bao(){var a=new AAA();A6S(a);return a;}
function A6S(a){return;}
function AWx(a){var b;b=Fz(ANM(a),1);b.ca=1;return b;}
function AKi(){var a=this;By.call(a);a.z6=0;a.DG=0;}
function W(a,b){var c=new AKi();A$2(c,a,b);return c;}
function A$2(a,b,c){a.z6=b;a.DG=c;}
function AXT(a){return CG(Er(),a.z6,a.DG);}
function AKN(){By.call(this);}
function BbE(){var a=new AKN();A11(a);return a;}
function A11(a){return;}
function A1M(a){return CG(CG(Er(),65279,65279),65520,65533);}
function AMx(){var a=this;By.call(a);a.ya=0;a.wr=0;a.CP=0;}
function CA(a,b){var c=new AMx();AUQ(c,a,b);return c;}
function BaE(a,b,c){var d=new AMx();A1T(d,a,b,c);return d;}
function AUQ(a,b,c){a.wr=c;a.ya=b;}
function A1T(a,b,c,d){a.CP=d;a.wr=c;a.ya=b;}
function A5H(a){var b;b=Bbl(a.ya);if(a.CP)Jp(b.b$,0,2048);b.ca=a.wr;return b;}
function AMO(){var a=this;By.call(a);a.vF=0;a.tT=0;a.y7=0;}
function KU(a,b){var c=new AMO();AVu(c,a,b);return c;}
function Bb5(a,b,c){var d=new AMO();A2V(d,a,b,c);return d;}
function AVu(a,b,c){a.tT=c;a.vF=b;}
function A2V(a,b,c,d){a.y7=d;a.tT=c;a.vF=b;}
function ASM(a){var b;b=new Vl;ADN(b,a.vF);if(a.y7)Jp(b.b$,0,2048);b.ca=a.tT;return b;}
function AKr(){D.call(this);}
function Bmq(){var a=new AKr();AS4(a);return a;}
function AS4(a){return;}
function Zr(){D.call(this);}
function Bmr(){var a=new Zr();A72(a);return a;}
function A72(a){return;}
function Nw(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function A2I(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=J(Tr,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<Bi(b)){k=Nw(Y(b,j));if(k==64){j=j+1|0;k=Nw(Y(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|Bj(m,Nw(Y(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=Nw(Y(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=AVY(i,i+g|0,Og(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=AVY(i,i+g|0,Og(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return Nr(c,h);}
function Tr(){var a=this;D.call(a);a.xd=0;a.Am=0;a.C2=null;}
function AVY(a,b,c){var d=new Tr();A0F(d,a,b,c);return d;}
function A0F(a,b,c,d){a.xd=b;a.Am=c;a.C2=d;}
function RV(){var a=this;D.call(a);a.CB=null;a.Dq=0;}
function AL7(){D.call(this);}
function Bms(){var a=new AL7();A$K(a);return a;}
function A$K(a){return;}
function Yl(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.CB.data;f=b.Dq;b.Dq=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+Bj(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function Wj(){Ex.call(this);this.sK=null;}
function A3C(a){EE(a.bZ,B(262),60,6,4210752);EE(a.bZ,B(325),8,(a.fl-96|0)+2|0,4210752);}
function AOi(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(832);$p=1;case 1:$z=AHr(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Ec(a.J.bo,e);f=(a.bm-a.e_|0)/2|0;g=(a.bD-a.fl|0)/2|0;CH(a,f,g,0,0,a.e_,a.fl);if(WL(a.sK)){h=ADI(a.sK,12);CH(a,f+56|0,((g+36|0)+12|0)-h|0,176,12-h|0,14,h+2|0);}i=AOK(a.sK,24);CH(a,f+79|0,g+34|0,176,14,i+1|0,16);return;default:E$();}}C3().s(a,
b,c,d,e,f,g,h,i,$p);}
function Xj(){var a=this;Ex.call(a);a.ms=null;a.uq=null;}
function Y7(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAY(a);if(C()){break _;}b=0;while(b<9){c=Gj(a.ms,b);if(c!==null){d=a.J.f;$p=2;continue _;}b=b+1|0;}return;case 2:ALQ(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=9)break;c=Gj(a.ms,b);if(c===null)continue;else{d=a.J.f;continue _;}}return;default:E$();}}C3().s(a,b,c,d,$p);}
function A6B(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=e+(f*3|0)|0;h=Gj(a.ms,g);if(h!==null)d[g]=h.bB;else d[g]=(-1);f=f+1|0;}e=e+1|0;}Pj(a.uq,0,RK(Wo(),c));}
function A1W(a){EE(a.bZ,B(525),28,6,4210752);EE(a.bZ,B(325),8,(a.fl-96|0)+2|0,4210752);}
function AKl(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(833);$p=1;case 1:$z=AHr(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Ec(a.J.bo,e);CH(a,(a.bm-a.e_|0)/2|0,(a.bD-a.fl|0)/2|0,0,0,a.e_,a.fl);return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function AMC(){var a=this;Ex.call(a);a.Fm=null;a.AG=null;a.kx=0;}
function BbZ(a,b){var c=new AMC();A2k(c,a,b);return c;}
function A2k(a,b,c){var d,e,f,g;Id(a);a.kx=0;a.Fm=b;a.AG=c;a.pR=0;a.kx=c.gn()/9|0;a.fl=114+(a.kx*18|0)|0;d=(a.kx-4|0)*18|0;e=0;while(e<a.kx){f=0;while(f<9){U(a.c7,D7(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){U(a.c7,D7(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=161+d|0;while(e<9){U(a.c7,D7(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function A9Z(a){EE(a.bZ,a.AG.w8(),8,6,4210752);EE(a.bZ,B(325),8,(a.fl-96|0)+2|0,4210752);}
function ANQ(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(834);$p=1;case 1:$z=AHr(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Ec(a.J.bo,e);f=(a.bm-a.e_|0)/2|0;g=(a.bD-a.fl|0)/2|0;CH(a,f,g,0,0,a.e_,(a.kx*18|0)+17|0);CH(a,f,(g+(a.kx*18|0)|0)+17|0,0,126,a.e_,96);return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function CW(){var a=this;EX.call(a);a.Ip=null;a.gg=0;a.m8=0;a.zI=0;a.zH=0;}
var Bmt=null;var Bmu=null;var Bmv=null;var Bmw=null;var Bmx=null;var Bmy=null;var Bmz=null;var BmA=null;var BmB=null;var BmC=null;var BmD=null;var BmE=null;var BmF=null;var BmG=null;var BmH=null;var BmI=null;var BmJ=null;var BmK=null;var BmL=null;var BiS=null;function Dm(a,b,c,d,e,f,g){var h=new CW();AEs(h,a,b,c,d,e,f,g);return h;}
function AEs(a,b,c,d,e,f,g,h){FT(a,b,c);a.Ip=d;a.gg=e;a.m8=f;a.zI=g;a.zH=h;}
function AP8(){var b,c;Bmt=Dm(B(835),0,B(835),16,16,0,0);Bmu=Dm(B(836),1,B(836),16,16,16,0);Bmv=Dm(B(837),2,B(837),16,16,32,0);Bmw=Dm(B(838),3,B(838),16,16,48,0);Bmx=Dm(B(839),4,B(839),16,16,64,0);Bmy=Dm(B(840),5,B(840),16,16,80,0);Bmz=Dm(B(841),6,B(841),16,16,96,0);BmA=Dm(B(842),7,B(842),32,16,0,32);BmB=Dm(B(843),8,B(843),32,16,32,32);BmC=Dm(B(844),9,B(844),32,16,64,32);BmD=Dm(B(845),10,B(845),32,16,96,32);BmE=Dm(B(846),11,B(846),16,32,0,64);BmF=Dm(B(847),12,B(847),32,32,0,128);BmG=Dm(B(848),13,B(848),32,32,
32,128);BmH=Dm(B(849),14,B(849),32,32,64,128);BmI=Dm(B(850),15,B(850),32,32,96,128);BmJ=Dm(B(851),16,B(851),32,32,128,128);BmK=Dm(B(852),17,B(852),64,32,0,96);BmL=Dm(B(853),18,B(853),64,64,0,192);b=J(CW,19);c=b.data;c[0]=Bmt;c[1]=Bmu;c[2]=Bmv;c[3]=Bmw;c[4]=Bmx;c[5]=Bmy;c[6]=Bmz;c[7]=BmA;c[8]=BmB;c[9]=BmC;c[10]=BmD;c[11]=BmE;c[12]=BmF;c[13]=BmG;c[14]=BmH;c[15]=BmI;c[16]=BmJ;c[17]=BmK;c[18]=BmL;BiS=b;}
function PK(){Fb.call(this);this.Ct=null;}
function ACR(a){var b;b=new VF;Vz(b,a.Ct);return b;}
function U4(){var a=this;CS.call(a);a.B3=null;a.BS=null;a.BU=null;a.yP=0;}
function AGk(a){U(a.bG,Sh(0,((a.bm/2|0)-155|0)+0|0,(a.bD/6|0)+96|0,B(854)));U(a.bG,Sh(1,((a.bm/2|0)-155|0)+160|0,(a.bD/6|0)+96|0,B(809)));}
function AQp(a,b){var c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B3;d=b.cm?0:1;e=a.yP;$p=1;case 1:AQ3(c,d,e);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,$p);}
function YR(a,b,c,d){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABf(a);if(C()){break _;}DG(a,a.bZ,a.BS,a.bm/2|0,70,16777215);DG(a,a.bZ,a.BU,a.bm/2|0,90,16777215);$p=2;case 2:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,$p);}
function IK(){Fg.call(this);}
function BmM(){var a=new IK();AT2(a);return a;}
function AT2(a){O(a);}
function UM(){var a=this;D.call(a);a.kR=0;a.q0=0;a.xO=null;a.xU=null;a.HX=0;}
function ALo(a,b){var c,d;c=0;while(c<=(3-a.kR|0)){d=0;while(d<=(3-a.q0|0)){if(Vm(a,b,c,d,1))return 1;if(Vm(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Vm(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.kR&&i<a.q0)j=!e?a.xO.data[h+Bj(i,a.kR)|0]:a.xO.data[((a.kR-h|0)-1|0)+Bj(i,a.kR)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function AHh(a,b){return Kz(a.xU.bB,a.xU.p);}
function Ko(a){return Bj(a.kR,a.q0);}
function Sp(){var a=this;Bm.call(a);a.Co=null;a.Jm=null;}
function AVJ(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.dQ^EK(a.Co,c):0;}
function So(){var a=this;Bm.call(a);a.Eu=null;a.Bi=null;a.GI=null;}
function A3k(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.dQ^EK(a.Eu,c):0;return a.Bi.Y(b)&&!d?1:0;}
function Ps(){var a=this;Bm.call(a);a.sh=null;a.Ho=null;}
function AXQ(a,b){return a.ck^EK(a.sh,b);}
function A50(a){var b,c;b=new S;V(b);c=I1(a.sh,0);while(c>=0){Hl(b,Ix(c));Dx(b,124);c=I1(a.sh,c+1|0);}if(b.bY>0)Sj(b,b.bY-1|0);return T(b);}
function TW(){var a=this;Bm.call(a);a.DA=null;a.Ix=null;}
function A9l(a,b){return a.DA.Y(b);}
function TU(){var a=this;Bm.call(a);a.wu=0;a.CJ=null;a.xf=null;}
function A0r(a,b){return !(a.wu^EK(a.xf.b6,b))&&!(a.wu^a.xf.ix^a.CJ.Y(b))?0:1;}
function TV(){var a=this;Bm.call(a);a.tS=0;a.A$=null;a.vj=null;}
function A7k(a,b){return !(a.tS^EK(a.vj.b6,b))&&!(a.tS^a.vj.ix^a.A$.Y(b))?1:0;}
function TZ(){var a=this;Bm.call(a);a.EW=0;a.Bc=null;a.A7=null;a.HE=null;}
function A4$(a,b){return a.EW^(!a.Bc.Y(b)&&!a.A7.Y(b)?0:1);}
function T0(){var a=this;Bm.call(a);a.Af=0;a.Dv=null;a.Dc=null;a.JK=null;}
function ASG(a,b){return a.Af^(!a.Dv.Y(b)&&!a.Dc.Y(b)?0:1)?0:1;}
function TX(){var a=this;Bm.call(a);a.zT=null;a.JM=null;}
function AWr(a,b){return D6(a.zT,b);}
function TY(){var a=this;Bm.call(a);a.EG=null;a.HO=null;}
function AX_(a,b){return D6(a.EG,b)?0:1;}
function T2(){var a=this;Bm.call(a);a.Ai=null;a.Dx=0;a.AU=null;}
function A1m(a,b){return !D6(a.Ai,b)&&!(a.Dx^EK(a.AU.b6,b))?0:1;}
function T3(){var a=this;Bm.call(a);a.AA=null;a.D0=0;a.At=null;}
function A4P(a,b){return !D6(a.AA,b)&&!(a.D0^EK(a.At.b6,b))?1:0;}
function Pr(){var a=this;Bm.call(a);a.AQ=0;a.EB=null;a.Bq=null;a.Fp=null;}
function A_P(a,b){return !(a.AQ^a.EB.Y(b))&&!D6(a.Bq,b)?0:1;}
function PF(){var a=this;Bm.call(a);a.EP=0;a.y2=null;a.y8=null;a.FE=null;}
function AWw(a,b){return !(a.EP^a.y2.Y(b))&&!D6(a.y8,b)?1:0;}
function Pp(){var a=this;Bm.call(a);a.CX=null;a.FH=null;}
function AU0(a,b){return D6(a.CX,b);}
function Pq(){var a=this;Bm.call(a);a.zM=null;a.JH=null;}
function A5N(a,b){return D6(a.zM,b)?0:1;}
function Pv(){var a=this;Bm.call(a);a.EV=null;a.Az=0;a.Fc=null;}
function AXb(a,b){return D6(a.EV,b)&&a.Az^EK(a.Fc.b6,b)?1:0;}
function Po(){var a=this;Bm.call(a);a.Eb=null;a.DE=0;a.Ax=null;}
function A$i(a,b){return D6(a.Eb,b)&&a.DE^EK(a.Ax.b6,b)?0:1;}
function Pt(){var a=this;Bm.call(a);a.Ei=0;a.Cm=null;a.Ae=null;a.HD=null;}
function A4b(a,b){return a.Ei^a.Cm.Y(b)&&D6(a.Ae,b)?1:0;}
function Pu(){var a=this;Bm.call(a);a.D9=0;a.B1=null;a.Eh=null;a.HU=null;}
function AZD(a,b){return a.D9^a.B1.Y(b)&&D6(a.Eh,b)?0:1;}
function OQ(){IA.call(this);}
function AV2(a,b,c,d){var e,f,g;e=0;f=d.by;a:{while(true){if(b>f){b=e;break a;}g=Ho(d,a.cK);EM(d,a.cK,b);e=a.fo.k(b,c,d);if(e>=0)break;EM(d,a.cK,g);b=b+1|0;}}return b;}
function A_E(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Ho(e,a.cK);EM(e,a.cK,c);f=a.fo.k(c,d,e);if(f>=0)break;EM(e,a.cK,g);c=c+(-1)|0;}}return c;}
function AUO(a){return null;}
function VF(){IM.call(this);}
function Lm(a){Wa(a);return a.hm.ge;}
function Nd(){Fa.call(this);}
var BmN=0.0;var BmO=null;function AJS(){BmN=NaN;BmO=F($rt_doublecls());}
function Mr(){}
function Vx(){var a=this;D.call(a);a.Fz=null;a.EC=null;a.pI=null;a.dD=null;a.qT=0;a.sj=0;}
function OG(a,b){var c,d;c=Bi(a.pI);if(b>=0&&b<=c){Z6(a.dD);a.dD.nu=1;APW(a.dD,b);b=a.EC.eJ(b,a.pI,a.dD);if(b==(-1))a.dD.hr=1;if(b>=0&&a.dD.oc){AC3(a.dD);return 1;}a.dD.hy=(-1);return 0;}d=new BO;Bl(d,VS(b));M(d);}
function AA$(a){var b,c;b=Bi(a.pI);if(!YH(a))b=a.sj;if(a.dD.hy>=0&&a.dD.nu==1){a.dD.hy=MJ(a.dD);if(MJ(a.dD)==AEJ(a.dD)){c=a.dD;c.hy=c.hy+1|0;}return a.dD.hy<=b&&OG(a,a.dD.hy)?1:0;}return OG(a,a.qT);}
function AHM(a,b){return PE(a.dD,b);}
function Yk(a,b){return QL(a.dD,b);}
function AG7(a){return AHM(a,0);}
function AKV(a){return Yk(a,0);}
function YH(a){return a.dD.of;}
function Uk(){}
function Se(){}
function S2(){Fb.call(this);this.n_=null;}
var BmP=null;function BbY(){var a=new S2();AAi(a);return a;}
function AAi(a){a.n_=Bcx();}
function Jx(a){return AIo(a.n_);}
function Zh(a,b){return ASw(a.n_,b,b)===BmP?0:1;}
function MF(a,b){return AGm(a.n_,b)!==BmP?0:1;}
function M2(a){return ADx(a.n_);}
function AAR(){BmP=new D;}
function SO(){}
function OS(){}
function AJW(){var a=this;FY.call(a);a.kr=null;a.tA=null;a.GT=null;a.tH=0;}
function Bcx(){var a=new AJW();ATS(a);return a;}
function ATS(a){var b;b=null;a.GT=b;if(b===null){b=new QT;b.I$=a;}a.tA=b;}
function ASw(a,b,c){var d,e;a.kr=Ol(a,a.kr,b);d=Wl(a,b);e=S8(d,c);S8(d,c);a.tH=a.tH+1|0;return e;}
function AGm(a,b){var c;c=Wl(a,b);if(c===null)return null;a.kr=Lw(a,a.kr,b);a.tH=a.tH+1|0;return c.nX;}
function Wl(a,b){var c,d;c=a.kr;while(true){if(c===null)return null;d=On(a.tA,b,c.nl);if(!d)break;c=d>=0?c.dk:c.db;}return c;}
function Ol(a,b,c){var d,e;if(b===null){b=new Lc;d=null;b.nl=c;b.nX=d;b.lI=1;b.jo=1;return b;}e=On(a.tA,c,b.nl);if(!e)return b;if(e>=0)b.dk=Ol(a,b.dk,c);else b.db=Ol(a,b.db,c);FO(b);return M3(b);}
function Lw(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=On(a.tA,c,b.nl);if(d<0)b.db=Lw(a,b.db,c);else if(d>0)b.dk=Lw(a,b.dk,c);else{if(b.dk===null)return b.db;e=b.db;b=b.dk;f=J(Lc,b.lI);g=0;while(b.db!==null){h=f.data;i=g+1|0;h[g]=b;b=b.db;g=i;}c=b.dk;while(g>0){h=f.data;g=g+(-1)|0;j=h[g];j.db=c;FO(j);c=M3(j);}b.dk=c;b.db=e;FO(b);}FO(b);return M3(b);}
function ADx(a){var b,c,d;b=a.kr;c=null;while(b!==null){d=AOk(b,0);c=b;b=d;}if(c!==null)return c.nl;b=new JZ;O(b);M(b);}
function AIo(a){return a.kr===null?0:a.kr.jo;}
function QT(){D.call(this);this.I$=null;}
function On(a,b,c){return b===null?TI(c,b):TI(b,c);}
function VH(){Bm.call(this);this.Ir=null;}
function A1t(a,b){return Do(b)!=2?0:1;}
function Td(){Bm.call(this);this.IA=null;}
function A30(a,b){return Do(b)!=1?0:1;}
function QK(){Bm.call(this);this.H4=null;}
function ATv(a,b){return Qf(b);}
function QJ(){Bm.call(this);this.FJ=null;}
function A5G(a,b){return 0;}
function Sx(){Bm.call(this);this.GU=null;}
function AW2(a,b){return !Do(b)?0:1;}
function Ua(){Bm.call(this);this.IQ=null;}
function A$M(a,b){return Do(b)!=9?0:1;}
function Pf(){Bm.call(this);this.G_=null;}
function AZc(a,b){return Iv(b);}
function U3(){Bm.call(this);this.Gc=null;}
function A0f(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Ta(){Bm.call(this);this.Fg=null;}
function A_t(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Iv(b);}return b;}
function Tc(){Bm.call(this);this.GA=null;}
function AVf(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Iv(b);}return b;}
function O8(){Bm.call(this);this.GS=null;}
function A1G(a,b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Uq(){Bm.call(this);this.Jv=null;}
function A7x(a,b){return Ld(b);}
function Ut(){Bm.call(this);this.FX=null;}
function A80(a,b){return Uu(b);}
function VZ(){Bm.call(this);this.I0=null;}
function A$B(a,b){return Do(b)!=3?0:1;}
function Vy(){Bm.call(this);this.Fk=null;}
function A12(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Iv(b);}return b;}
function OK(){Bm.call(this);this.JN=null;}
function AU8(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Iv(b);}return b;}
function MC(){Bm.call(this);this.u9=0;}
function Bbl(a){var b=new MC();ADN(b,a);return b;}
function ADN(a,b){B0(a);a.u9=b;}
function AZd(a,b){return a.ck^(a.u9!=Do(b&65535)?0:1);}
function Vl(){MC.call(this);}
function A90(a,b){return a.ck^(!(a.u9>>Do(b&65535)&1)?0:1);}
function Nk(){D.call(this);}
var BmQ=null;var BmR=null;function BmS(){var a=new Nk();ASk(a);return a;}
function ASk(a){return;}
function DA(b,c){BR(BmQ,c,b);BR(BmR,b,c);}
function Jl(b,c){var d,e,f,g,h,$$je;d=null;a:{try{e=d;f=CP(BmQ,b);if(f!==null){e=d;g=J(FS,1);g.data[0]=F(F0);b=WA(f,g);g=J(D,1);g.data[0]=c;d=WD(b,g);e=d;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){h=$$je;}else{throw $$e;}}Cc(h);d=e;}return d;}
function AIi(){BmQ=De();BmR=De();DA(F(Js),B(855));DA(F(E9),B(856));DA(F(IG),B(857));DA(F(EQ),B(858));DA(F(DQ),B(859));DA(F(JW),B(860));DA(F(Jm),B(861));DA(F(Km),B(862));DA(F(K_),B(863));DA(F(I7),B(864));DA(F(IC),B(582));DA(F(KG),B(865));DA(F(Ms),B(866));DA(F(JK),B(867));DA(F(Gi),B(868));}
function JV(){var a=this;D.call(a);a.fG=0;a.fp=0;a.fL=0;a.p_=0;a.jk=Long_ZERO;a.oT=Long_ZERO;}
var Bkw=Long_ZERO;function A$v(a,b){var c;if(!(b instanceof JV))return 0;c=b;return a.fG==c.fG&&a.fp==c.fp&&a.fL==c.fL&&a.p_==c.p_?1:0;}
function A7I(a){return (((((a.fG*128|0)*1024|0)+(a.fL*128|0)|0)+a.fp|0)*256|0)+a.p_|0;}
function A0m(a,b){a.jk=b;return a;}
function ANB(a,b){return Long_lt(a.jk,b.jk)?(-1):Long_gt(a.jk,b.jk)?1:Long_lt(a.oT,b.oT)?(-1):Long_le(a.oT,b.oT)?0:1;}
function TI(a,b){return ANB(a,b);}
function AF8(){Bkw=Long_ZERO;}
function La(){}
function VX(){var a=this;D.call(a);a.ls=null;a.iU=null;a.g7=null;a.X=null;a.lE=null;a.fs=0;a.fT=0;a.fM=null;}
function BQ(a,b,c){var d;if(b==a.fs&&c==a.fT&&a.fM!==null)return 1;a:{b:{d=(b&31)+((c&31)*32|0)|0;if(a.X.data[d]!==null){if(a.X.data[d]===a.ls)break b;if(ARE(a.X.data[d],b,c))break b;}b=0;break a;}b=1;}return b;}
function AOe(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b==a.fs&&c==a.fT&&a.fM!==null)return a.fM;d=(b&31)+((c&31)*32|0)|0;if(!BQ(a,b,c)){BeT=1;if(a.X.data[d]!==null){AOM(a.X.data[d]);e=a.X.data[d];$p=1;continue _;}if(a.g7===null)f=null;else{try{e=a.g7;f=a.lE;$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){e=$$je;}else{throw $$e;}}Cc(e);f=null;}if(f===
null){if(a.iU!==null){e=a.iU;$p=3;continue _;}f=a.ls;}a.X.data[d]=f;if(a.X.data[d]!==null)J0(a.X.data[d]);if(!a.X.data[d].gz){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(BQ(a,g,h)){$p=6;continue _;}BeT=0;}a.fs=b;a.fT=c;a.fM=a.X.data[d];return a.X.data[d];case 1:AB4(a,e);if(C()){break _;}J7(a,a.X.data[d]);if(a.g7===null)f=null;else{try{e=a.g7;f=a.lE;$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BE)
{e=$$je;}else{throw $$e;}}Cc(e);f=null;}if(f===null){if(a.iU!==null){e=a.iU;$p=3;continue _;}f=a.ls;}a.X.data[d]=f;if(a.X.data[d]!==null)J0(a.X.data[d]);if(!a.X.data[d].gz){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeT=0;a.fs=b;a.fT=c;a.fM=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 2:a:{try{$z=AGU(e,f,b,c);if(C()){break _;}f=$z;if(f!==null)f.s6=a.lE.ee;break a;}catch($$e){$$je=Bh($$e);if
($$je instanceof BE){e=$$je;}else{throw $$e;}}Cc(e);f=null;}if(f===null){if(a.iU!==null){e=a.iU;$p=3;continue _;}f=a.ls;}a.X.data[d]=f;if(a.X.data[d]!==null)J0(a.X.data[d]);if(!a.X.data[d].gz){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeT=0;a.fs=b;a.fT=c;a.fM=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 3:$z=T9(e,b,c);if(C()){break _;}f=$z;a.X.data[d]=f;if(a.X.data[d]!==null)J0(a.X.data[d]);if
(!a.X.data[d].gz){g=b+1|0;h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeT=0;a.fs=b;a.fT=c;a.fM=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 4:$z=AOe(a,g,c);if(C()){break _;}e=$z;if(!e.gz){h=c+1|0;if(BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=8;continue _;}}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeT=0;a.fs=b;a.fT=c;a.fM=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 5:$z=AOe(a,
b,h);if(C()){break _;}e=$z;if(!e.gz){i=b+1|0;if(BQ(a,i,h)&&BQ(a,b,h)&&BQ(a,i,c)){$p=9;continue _;}}if(!BQ(a,g,h)){BeT=0;a.fs=b;a.fT=c;a.fM=a.X.data[d];return a.X.data[d];}$p=6;case 6:$z=AOe(a,g,h);if(C()){break _;}e=$z;if(!e.gz&&BQ(a,g,h)&&BQ(a,b,h)&&BQ(a,g,c)){$p=10;continue _;}BeT=0;a.fs=b;a.fT=c;a.fM=a.X.data[d];return a.X.data[d];case 7:AFp(a,a,b,c);if(C()){break _;}g=b-1|0;if(BQ(a,g,c)){$p=4;continue _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeT=0;a.fs=b;a.fT=c;a.fM=a.X.data[d];return a.X.data[d];}$p
=6;continue _;case 8:AFp(a,a,g,c);if(C()){break _;}h=c-1|0;if(BQ(a,b,h)){$p=5;continue _;}if(!BQ(a,g,h)){BeT=0;a.fs=b;a.fT=c;a.fM=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 9:AFp(a,a,b,h);if(C()){break _;}if(!BQ(a,g,h)){BeT=0;a.fs=b;a.fT=c;a.fM=a.X.data[d];return a.X.data[d];}$p=6;continue _;case 10:AFp(a,a,g,h);if(C()){break _;}BeT=0;a.fs=b;a.fT=c;a.fM=a.X.data[d];return a.X.data[d];default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function J7(a,b){var c,$$je;a:{if(a.g7!==null){try{AHn(a.g7,a.lE,b);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BE){c=$$je;}else{throw $$e;}}c.tE();}}}
function AB4(a,b){var c,d,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.g7!==null){try{b.s6=a.lE.ee;c=a.g7;d=a.lE;$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof B1){c=$$je;}else{throw $$e;}}Cc(c);}return;case 1:a:{try{YT(c,d,b);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B1){c=$$je;}else{throw $$e;}}Cc(c);}return;default:E$();}}C3().s(a,b,c,d,$p);}
function AFp(a,b,c,d){var e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AOe(a,c,d);if(C()){break _;}e=$z;if(!e.gz){e.gz=1;if(a.iU!==null){f=a.iU;$p=2;continue _;}}return;case 2:AHT(f,b,c,d);if(C()){break _;}SK(e);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ANY(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;e=0;if(c!==null){f=0;while(f<a.X.data.length){if(a.X.data[f]!==null&&Kn(a.X.data[f],b))e=e+1|0;f=f+1|0;}}g=0;h=0;while(h<a.X.data.length){if(a.X.data[h]!==null){if(b&&!a.X.data[h].qb)J7(a,a.X.data[h]);if(Kn(a.X.data[h],b)){i=a.X.data[h];$p=1;continue _;}}h=h+1|0;}if(b&&a.g7===null)return 1;return 1;case 1:AB4(a,i);if
(C()){break _;}a.X.data[h].f0=0;d=d+1|0;if(d==2&&!b)return 0;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}while(true){h=h+1|0;if(h>=a.X.data.length)break;if(a.X.data[h]===null)continue;if(b&&!a.X.data[h].qb)J7(a,a.X.data[h]);if(Kn(a.X.data[h],b)){i=a.X.data[h];continue _;}}if(b&&a.g7===null)return 1;return 1;case 2:XH(c,f);if(C()){break _;}while(true){h=h+1|0;if(h>=a.X.data.length)break;if(a.X.data[h]===null)continue;if(b&&!a.X.data[h].qb)J7(a,a.X.data[h]);if(Kn(a.X.data[h],b)){i=a.X.data[h];$p
=1;continue _;}}if(b&&a.g7===null)return 1;return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A_q(a){return 1;}
function Qe(){}
function Xl(){D.call(this);this.r5=null;}
function Ob(a,b,c){var d,e,f,g,h;d=b+30233088|0;e=c+30233088|0;f=Bi(B(869));g=new S;GE(g,10);h=0;while(h<5){Dx(g,Y(B(869),d%f|0));d=d/f|0;Dx(g,Y(B(869),e%f|0));e=e/f|0;h=h+1|0;}return T(g);}
function AGU(a,b,c,d){var e,f,g,h,i,j,k,l,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Ob(a,c,d);f=new S;V(f);g=T(H(H(H(f,a.r5),B(23)),e));$p=1;case 1:$z=ALD(g);if(C()){break _;}h=$z;if(h===null)return null;a:{b:{try{f=MV(OY(Ul(h)));i=FW(f,B(870));j=FW(f,B(871));if(c!=i)break b;if(d!=j)break b;b=A2X(b,f);}catch($$e){$$je=Bh($$e);if($$je instanceof B1){k=$$je;break a;}
else{throw $$e;}}return b;}try{l=Ob(a,i,j);Cg(C$(),BL(H(Be(H(Be(H(H(H(H(H(Be(H(Be(H(Be(H(Be(H(H(H(BX(),B(872)),e),B(873)),c),B(632)),d),B(874)),i),B(632)),j),B(875)),l),B(876)),e),B(877)),c),B(632)),d),B(245))));b=BL(H(H(H(BX(),a.r5),B(23)),l));$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof B1){k=$$je;}else{throw $$e;}}}b=C$();f=new S;V(f);Cg(b,T(H(Be(H(Be(H(H(H(f,B(878)),e),B(879)),c),B(632)),d),B(245))));Cg(C$(),B(880));$p=2;case 2:AL1(g);if(C()){break _;}Cc(k);return null;case 3:c:{try{ANl(g,
b);if(C()){break _;}b=null;}catch($$e){$$je=Bh($$e);if($$je instanceof B1){k=$$je;break c;}else{throw $$e;}}return b;}b=C$();f=new S;V(f);Cg(b,T(H(Be(H(Be(H(H(H(f,B(878)),e),B(879)),c),B(632)),d),B(245))));Cg(C$(),B(880));$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function YT(a,b,c){var d,e,f,g,h,$$je,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Ha();AFZ(a,c,b,d);e=A$d(98304);try{f=AWg(BbI(e));try{RY(d,f);AHF(f);g=If(e);b=BL(H(H(H(BX(),a.r5),B(23)),Ob(a,c.fZ,c.fW)));$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof D9){b=$$je;}else{throw $$e;}}a:{try{KP(f);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof D9){d=$$je;}else{throw $$e;}}WK(b,d);}M(b);}catch
($$e){$$je=Bh($$e);if($$je instanceof B1){h=$$je;}else{throw $$e;}}b=C$();d=new S;V(d);Cg(b,T(H(Be(H(Be(H(d,B(881)),c.fZ),B(632)),c.fW),B(882))));Cc(h);return;case 1:b:{a:{try{try{ACz(b,g);if(C()){break _;}}catch($$e){$$je=Bh($$e);if($$je instanceof D9){b=$$je;break a;}else{throw $$e;}}KP(f);}catch($$e){$$je=Bh($$e);if($$je instanceof B1){h=$$je;break b;}else{throw $$e;}}return;}try{c:{try{KP(f);break c;}catch($$e){$$je=Bh($$e);if($$je instanceof D9){d=$$je;}else{throw $$e;}}WK(b,d);}M(b);}catch($$e){$$je=Bh($$e);if
($$je instanceof B1){h=$$je;}else{throw $$e;}}}b=C$();d=new S;V(d);Cg(b,T(H(Be(H(Be(H(d,B(881)),c.fZ),B(632)),c.fW),B(882))));Cc(h);return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFZ(a,b,c,d){GA(d,B(870),b.fZ);GA(d,B(871),b.fW);Ic(d,B(883),c.ee);IP(d,B(884),b.g4);IP(d,B(356),b.gj.gB);IP(d,B(885),b.hF.gB);IP(d,B(886),b.jy.gB);IP(d,B(887),b.fv);SZ(d,B(888),b.gz);b.sa=0;AG3(new QS);}
function A2X(b,c){var d;d=BaI(b,FW(c,B(870)),FW(c,B(871)));d.g4=IH(c,B(884));d.gj=AIH(IH(c,B(356)));d.hF=AIH(IH(c,B(885)));d.jy=AIH(IH(c,B(886)));d.fv=IH(c,B(887));d.gz=Ur(c,B(888));if(!Mk(d.gj))d.gj=Lv(d.g4.data.length);if(!(d.fv!==null&&Mk(d.hF))){d.fv=$rt_createByteArray(256);d.hF=Lv(d.g4.data.length);Sf(d);}if(!Mk(d.jy))d.jy=Lv(d.g4.data.length);return d;}
function A4S(a){return;}
function AHn(a,b,c){return;}
function St(){var a=this;D.call(a);a.a=null;a.yV=null;a.yW=null;a.yU=null;a.tP=null;a.yY=null;a.yZ=null;a.yX=null;a.iV=null;a.t=null;a.h2=null;a.vV=null;a.vT=null;a.vU=null;a.vW=null;a.vX=null;a.Gd=null;}
function Zu(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;a.h2=Zj(a,a.h2,b*4|0,0,c*4|0,5,17,5);e=0;while(e<4){f=0;while(f<4){g=0;while(g<16){h=a.h2.data;c=((e+0|0)*5|0)+f|0;i=((c+0|0)*17|0)+g|0;j=h[i+0|0];h=a.h2.data;b=((c+1|0)*17|0)+g|0;k=h[b+0|0];h=a.h2.data;l=((e+1|0)*5|0)+f|0;m=((l+0|0)*17|0)+g|0;n=h[m+0|0];h=a.h2.data;c=((l+1|0)*17|0)+g|0;o=h[c+0|0];p=(a.h2.data[i+1|0]-j)*0.125;q=(a.h2.data[b+1|0]-k)*0.125;r=(a.h2.data[m+1|0]-n)*0.125;s=(a.h2.data[c+1|0]-o)*0.125;t=0;while(t<8){u=(n-j)
*0.25;v=(o-k)*0.25;w=0;x=j;y=k;while(w<4){b=(w+(e*4|0)|0)<<11|(0+(f*4|0)|0)<<7;c=(g*8|0)+t|0;m=b|c;z=(y-x)*0.25;ba=0;c=R(c,64);bb=x;while(ba<4){i=0;if(c<0){L();i=BgB.b;}if(bb>0.0){L();i=BeS.b;}d.data[m]=i<<24>>24;m=m+128|0;bb=bb+z;ba=ba+1|0;}x=x+u;y=y+v;w=w+1|0;}j=j+p;k=k+q;n=n+r;o=o+s;t=t+1|0;}g=g+1|0;}f=f+1|0;}e=e+1|0;}}
function ACu(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=0;f=b*16|0;c=c*16|0;while(e<16){g=0;while(g<16){h=f+e|0;i=c+g|0;j=a.tP;k=h*0.03125;l=i*0.03125;m=U5(j,k,l,0.0)+Cl(a.a)*0.2<=0.0?0:1;n=U5(a.tP,l,109.0134,k)+Cl(a.a)*0.2<=3.0?0:1;o=EZ(a.yY,k*2.0,l*2.0)/3.0+3.0+Cl(a.a)*0.25|0;p=(-1);L();q=BeO.b;r=BeP.b;s=(((e*16|0)+g|0)*128|0)+128|0;t=127;while(t>=0){s=s+(-1)|0;if(t<=((0+E(a.a,6)|0)-1|0))d.data[s]=BeN.b<<24>>24;else{u=d.data;if(!u[s])p=(-1);else if(u[s]==BeS.b){if(p==(-1)){if(o<=0){q=0;r=BeS.b<<24>>
24;}else if(t>=60&&t<=65){q=BeO.b;r=BeP.b;if(n)q=0;if(n)r=Be$.b;if(m)q=Be9.b;if(m)r=Be9.b;}if(t<64&&!q)q=BgB.b;if(t<63){u[s]=r<<24>>24;p=o;}else{u[s]=q<<24>>24;p=o;}}else if(p>0){p=p+(-1)|0;u[s]=r<<24>>24;}}}t=t+(-1)|0;}g=g+1|0;}e=e+1|0;}}
function T9(a,b,c){var d,e;d=$rt_createByteArray(32768);e=A9p(a.t,d,b,c);Zu(a,b,c,d);ACu(a,b,c,d);ARS(a,b,c,d);Sf(e);return e;}
function APS(a,b,c,d,e,f,g){Jg(a,b,c,d,e,f,g,1.0+N(a.a)*6.0,0.0,0.0,(-1),(-1),0.5);}
function Jg(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD;n=b*16|0;o=n+8|0;p=c*16|0;q=p+8|0;r=0.0;s=0.0;t=Bbx(GB(a.a));if(l<=0)l=112-E(t,28)|0;u=0;if(k==(-1)){k=l/2|0;u=1;}v=E(t,l/2|0)+(l/4|0)|0;w=E(t,6)?0:1;x=R(h,1.0);y=h+2.0+16.0;y=y*y;z=o-16.0;ba=q-16.0;bb=o+16.0;bc=q+16.0;a:{while(true){if(k>=l)break a;bd=1.5+Bq(k*3.1415927410125732/l)*h*1.0;be=bd*m;bf=BC(j);bg=Bq(j);e=e+BC(i)*bf;f=f+bg;g=g+Bq(i)*bf;j=(!w
?j*0.699999988079071:j*0.9200000166893005)+s*0.10000000149011612;i=i+r*0.10000000149011612;bh=s*0.8999999761581421;bf=r*0.75;s=bh+(N(t)-N(t))*N(t)*2.0;r=bf+(N(t)-N(t))*N(t)*4.0;if(!u&&k==v&&x>0){h=N(t)*0.5+0.5;bh=i-1.5707963705062866;j=j/3.0;Jg(a,b,c,d,e,f,g,h,bh,j,k,l,1.0);Jg(a,b,c,d,e,f,g,N(t)*0.5+0.5,i+1.5707963705062866,j,k,l,1.0);return;}if(!(!u&&!E(t,4))){bi=e-o;bj=g-q;bk=l-k|0;if(bi*bi+bj*bj-bk*bk>y)break;bl=bd*2.0;if(e>=z-bl&&g>=ba-bl&&e<=bb+bl&&g<=bc+bl){bm=(K(e-bd)-n|0)-1|0;bn=(K(e+bd)-n|0)+1|0;bo
=K(f-be)-1|0;bp=K(f+be)+1|0;bq=(K(g-bd)-p|0)-1|0;br=(K(g+bd)-p|0)+1|0;if(bm<0)bm=0;if(bn>16)bn=16;if(bo<1)bo=1;if(bp>120)bp=120;if(bq<0)bq=0;if(br>16)br=16;bs=0;bt=bm;while(!bs&&bt<bn){bu=bq;while(!bs&&bu<br){bv=bp+1|0;while(!bs){bw=R(bv,bo-1|0);if(bw<0)break;bx=(((bt*16|0)+bu|0)*128|0)+bv|0;if(bv>=0&&bv<128){by=d.data;bz=by[bx];L();if(!(bz!=BfV.b&&by[bx]!=BgB.b))bs=1;if(bw&&bt!=bm&&bt!=(bn-1|0)&&bu!=bq&&bu!=(br-1|0))bv=bo;}bv=bv+(-1)|0;}bu=bu+1|0;}bt=bt+1|0;}if(!bs){while(bm<bn){bA=((bm+n|0)+0.5-e)/bd;bi=bA
*bA;bx=bq;while(bx<br){bB=((bx+p|0)+0.5-g)/bd;bC=(((bm*16|0)+bx|0)*128|0)+bp|0;bw=0;bD=bp-1|0;bB=bB*bB;while(bD>=bo){bl=(bD+0.5-f)/be;if(bl>(-0.7)&&bi+bl*bl+bB<1.0){by=d.data;bz=by[bC];L();if(bz==BeO.b)bw=1;if(!(bz!=BeS.b&&bz!=BeP.b&&bz!=BeO.b)){if(bD<10)by[bC]=BfW.b<<24>>24;else{by[bC]=0;if(bw){bz=bC-1|0;if(by[bz]==BeP.b)by[bz]=BeO.b<<24>>24;}}}}bC=bC+(-1)|0;bD=bD+(-1)|0;}bx=bx+1|0;}bm=bm+1|0;}if(u)break a;}}}k=k+1|0;}return;}}
function ARS(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;GB(a.a);GB(a.a);e=b-8|0;f=b+8|0;g=c-8|0;h=c+8|0;while(e<=f){i=g;while(i<=h){j=E(a.a,E(a.a,E(a.a,40)+1|0)+1|0);if(E(a.a,15))j=0;k=0;while(k<j){l=(e*16|0)+E(a.a,16)|0;m=E(a.a,E(a.a,120)+8|0);n=(i*16|0)+E(a.a,16)|0;o=1;if(!E(a.a,4)){APS(a,b,c,d,l,m,n);o=o+E(a.a,4)|0;}p=0;while(p<o){q=N(a.a)*3.1415927410125732*2.0;r=(N(a.a)-0.5)*2.0/8.0;Jg(a,b,c,d,l,m,n,N(a.a)*2.0+N(a.a),q,r,0,0,1.0);p=p+1|0;}k=k+1|0;}i=i+1|0;}e=e+1|0;}}
function Zj(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));a.vW=H5(a.yZ,a.vW,c,d,e,f,1,h,1.0,0.0,1.0);a.vX=H5(a.yX,a.vX,c,d,e,f,1,h,100.0,0.0,100.0);a.vV=H5(a.yU,a.vV,c,d,e,f,g,h,8.555150000000001,4.277575000000001,8.555150000000001);a.vT=H5(a.yV,a.vT,c,d,e,f,g,h,684.412,684.412,684.412);a.vU=H5(a.yW,a.vU,c,d,e,f,g,h,684.412,684.412,684.412);i=0;j=0;k=0;l=g;d=g-4|0;m=l/2.0;while(k<f){n=0;while(n<h){o=(a.vW.data[j]+256.0)/512.0;if(o>1.0)o=1.0;p=a.vX.data[j]
/8000.0;if(p<0.0)p= -p;q=p*3.0-3.0;if(q>=0.0){if(q>1.0)q=1.0;q=q/6.0;}else{o=q/2.0;if(o<(-1.0))o=(-1.0);q=o/1.4/2.0;o=0.0;}r=o+0.5;s=m+q*l/16.0*4.0;j=j+1|0;t=0;while(t<g){p=t;u=(p-s)*12.0/r;if(u<0.0)u=u*4.0;v=a.vT.data[i]/512.0;q=a.vU.data[i]/512.0;w=(a.vV.data[i]/10.0+1.0)/2.0;if(w>=0.0)v=w>1.0?q:v+(q-v)*w;o=v-u;if(t>d){x=(t-d|0)/3.0;o=o*(1.0-x)+(-10.0)*x;}if(p<0.0){x=(0.0-p)/4.0;if(x<0.0)x=0.0;if(x>1.0)x=1.0;o=o*(1.0-x)+(-10.0)*x;}b.data[i]=o;i=i+1|0;t=t+1|0;}n=n+1|0;}k=k+1|0;}return b;}
function AHT(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=c*16|0;f=d*16|0;NK(a.a,a.t.lz);g=Long_add(Long_mul(Long_div(GB(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));h=Long_add(Long_mul(Long_div(GB(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));NK(a.a,Long_xor(Long_add(Long_mul(Long_fromInt(c),
g),Long_mul(Long_fromInt(d),h)),a.t.lz));i=0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYl();m=a.t;n=a.a;$p=1;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeP.b,32);m=a.t;n=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be$.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,
16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfc.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgW.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c
=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be5.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50)
{l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=15;continue _;case 1:XN(b,m,n,j,k,l);if(C()){break _;}i=i+1|0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYl();m=a.t;n=a.a;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeP.b,32);m=a.t;n
=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be$.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfc.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,
16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgW.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be5.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=11;continue _;}if
(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=
a.t;n=a.a;$p=15;continue _;case 2:ABQ(b,m,n,j,k,l);if(C()){break _;}o=o+1|0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BeP.b,32);m=a.t;n=a.a;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be$.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfc.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgW.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,
Be5.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=15;continue _;case 3:ABQ(b,m,n,o,k,l);if(C()){break _;}j=j+1|0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be$.b,32);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,Bfc.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgW.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)
|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be5.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p
=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=15;continue _;case 4:ABQ(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfb.b,16);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfc.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgW.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,
Be5.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=15;continue _;case 5:ABQ(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfc.b,8);m=a.t;n=a.a;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfd.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,BgW.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be5.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,
4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p
=15;continue _;case 6:ABQ(b,m,n,c,j,k);if(C()){break _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,BgW.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be5.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e
+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=15;continue _;case 7:ABQ(b,m,n,c,j,k);if(C()){break _;}c=(EZ(a.iV,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be5.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c
=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=15;continue _;case 8:$z=ALF(q,l,p);if(C()){break _;}d=$z;$p=9;case 9:AEK(m,b,n,l,d,p);if(C()){break _;}k=k+1|0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E5(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be5.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+
E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=15;continue _;case 10:ACN(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be5.b);m=a.t;n=a.a;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be6.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=12;continue _;}if
(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=15;continue _;case 11:ACN(b,m,n,c,l,p);if(C()){break _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,
16)|0)+8|0;b=new BS;L();BT(b,Be7.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=15;continue _;case 12:ACN(b,m,n,c,l,p);if(C())
{break _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BS;L();BT(b,Be8.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=15;continue _;case 13:ACN(b,m,n,c,l,p);if(C()){break _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfV.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=15;continue _;case 14:ALZ(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfV.b);m=a.t;n=a.a;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8
|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;$p=15;case 15:ALZ(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,BfW.b);m=a.t;n=a.a;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function Wt(){var a=this;D.call(a);a.gG=null;a.oR=null;a.xu=null;a.uW=null;a.zz=0;a.oc=0;a.fg=0;a.by=0;a.hy=0;a.of=0;a.lo=0;a.hr=0;a.Jg=0;a.k3=0;a.nu=0;}
function Cv(a,b,c){a.oR.data[b]=c;}
function Eq(a,b){return a.oR.data[b];}
function MJ(a){return QL(a,0);}
function QL(a,b){Vk(a,b);return a.gG.data[(b*2|0)+1|0];}
function EM(a,b,c){a.gG.data[b*2|0]=c;}
function MZ(a,b,c){a.gG.data[(b*2|0)+1|0]=c;}
function Ho(a,b){return a.gG.data[b*2|0];}
function JG(a,b){return a.gG.data[(b*2|0)+1|0];}
function AM4(a,b){var c,d;c=Ho(a,b);d=JG(a,b);if((d|c|(d-c|0))>=0&&d<=Bi(a.uW))return Ew(a.uW,c,d);return null;}
function AEJ(a){return PE(a,0);}
function PE(a,b){Vk(a,b);return a.gG.data[b*2|0];}
function AC3(a){if(a.gG.data[0]==(-1)){a.gG.data[0]=a.hy;a.gG.data[1]=a.hy;}a.k3=MJ(a);}
function Th(a,b){return a.xu.data[b];}
function FH(a,b,c){a.xu.data[b]=c;}
function Vk(a,b){var c;if(!a.oc){c=new D3;O(c);M(c);}if(b>=0&&b<a.zz)return;c=new BO;Bl(c,VS(b));M(c);}
function ARw(a){a.oc=1;}
function A$Q(a){return a.oc;}
function Xh(a,b,c,d){a.oc=0;a.nu=2;M0(a.gG,(-1));M0(a.oR,(-1));if(b!==null)a.uW=b;if(c>=0){a.fg=c;a.by=d;}a.hy=a.fg;}
function Z6(a){Xh(a,null,(-1),(-1));}
function APW(a,b){a.hy=b;if(a.k3>=0)b=a.k3;a.k3=b;}
function A4k(a){return a.fg;}
function A7n(a){return a.by;}
function A5b(a,b){a.nu=b;}
function AWf(a){return a.nu;}
function A6f(a){return a.lo;}
function A3h(a){return a.of;}
function A3K(a){return a.k3;}
function VM(){var a=this;D.call(a);a.cl=null;a.iJ=0;a.b8=0;a.eg=0;a.d_=0;a.b0=0;a.dN=0;}
function AOm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Bj(Bj((a.d_-a.iJ|0)+1|0,(a.b0-a.b8|0)+1|0),(a.dN-a.eg|0)+1|0)>32768){Cg(Dz(),B(889));return;}c=a.iJ;while(c<=a.d_){d=a.eg;while(d<=a.dN){e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g){if(a.b8<0)a.b8
=0;if(a.b0>=128)a.b0=127;h=a.b8;if(h<=a.b0){i=a.cl;$p=2;continue _;}}d=d+1|0;}c=c+1|0;}return;case 1:ZT(b,e,f);if(C()){break _;}a:while(true){if(g){if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;if(h<=a.b0){i=a.cl;$p=2;continue _;}}d=d+1|0;while(d>a.dN){c=c+1|0;if(c>a.d_)break a;d=a.eg;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(!g)continue;else{continue _;}}return;case 2:$z=ALh(b,i,c,h,d);if(C()){break _;}j=$z;$p=3;case 3:$z=ACv(b,c,h,d);if(C()){break _;}k=$z;L();l=Bgy.data[k];if(!l)l=1;m=0;if(a.cl===Bku){$p=4;continue _;}if
(a.cl===Bkv)m=BgA.data[k];if(l>=15&&!m){m=0;if(j!=m){i=a.cl;$p=11;continue _;}h=h+1|0;b:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dN){c=c+1|0;if(c>a.d_)break b;d=a.eg;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;}i=a.cl;g=c-1|0;$p=5;continue _;case 4:$z=Zw(b,c,h,d);if(C()){break _;}g=$z;if(g)m=15;if(l>=15&&!m){m=0;if(j!=m){i=a.cl;$p=11;continue _;}h=h+1|0;c:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while
(true){d=d+1|0;while(d>a.dN){c=c+1|0;if(c>a.d_)break c;d=a.eg;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;}i=a.cl;g=c-1|0;$p=5;case 5:$z=ALh(b,i,g,h,d);if(C()){break _;}n=$z;i=a.cl;g=c+1|0;$p=6;case 6:$z=ALh(b,i,g,h,d);if(C()){break _;}o=$z;i=a.cl;g=h-1|0;$p=7;case 7:$z=ALh(b,i,c,g,d);if(C()){break _;}p=$z;i=a.cl;g=h+1|0;$p=8;case 8:$z=ALh(b,i,c,g,d);if(C()){break _;}q=$z;i=a.cl;g=d-1|0;$p=9;case 9:$z=ALh(b,i,c,h,g);if(C()){break _;}g
=$z;i=a.cl;r=d+1|0;$p=10;case 10:$z=ALh(b,i,c,h,r);if(C()){break _;}r=$z;if(o<=n)o=n;if(p<=o)p=o;if(q<=p)q=p;if(g<=q)g=q;if(r<=g)r=g;g=r-l|0;if(g<0)g=0;if(m<=g)m=g;if(j!=m){i=a.cl;$p=11;continue _;}h=h+1|0;d:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dN){c=c+1|0;if(c>a.d_)break d;d=a.eg;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 11:AMs(b,i,c,h,d,m);if(C()){break _;}s=m-1|0;if(s<0)s=0;i=a.cl;g
=c-1|0;$p=12;case 12:AP7(b,i,g,h,d,s);if(C()){break _;}i=a.cl;g=h-1|0;$p=13;case 13:AP7(b,i,c,g,d,s);if(C()){break _;}i=a.cl;g=d-1|0;$p=14;case 14:AP7(b,i,c,h,g,s);if(C()){break _;}g=c+1|0;if(g>=a.d_){i=a.cl;$p=15;continue _;}g=h+1|0;if(g>=a.b0){i=a.cl;$p=16;continue _;}g=d+1|0;if(g>=a.dN){i=a.cl;$p=17;continue _;}h=h+1|0;e:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dN){c=c+1|0;if(c>a.d_)break e;d=a.eg;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8
<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 15:AP7(b,i,g,h,d,s);if(C()){break _;}g=h+1|0;if(g>=a.b0){i=a.cl;$p=16;continue _;}g=d+1|0;if(g>=a.dN){i=a.cl;$p=17;continue _;}h=h+1|0;f:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dN){c=c+1|0;if(c>a.d_)break f;d=a.eg;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 16:AP7(b,i,c,g,d,s);if(C()){break _;}g=d+1|0;if(g>=a.dN){i=a.cl;$p=17;continue _;}h
=h+1|0;g:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dN){c=c+1|0;if(c>a.d_)break g;d=a.eg;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 17:AP7(b,i,c,h,g,s);if(C()){break _;}h=h+1|0;a:while(true){if(h<=a.b0){i=a.cl;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dN){c=c+1|0;if(c>a.d_)break a;d=a.eg;}e=c>>4;f=d>>4;g=Fj(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=
127;h=a.b8;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function ALz(a,b,c,d,e,f,g){var h,i,j;if(b>=a.iJ&&c>=a.b8&&d>=a.eg&&e<=a.d_&&f<=a.b0&&g<=a.dN)return 1;if(b>=(a.iJ-1|0)&&c>=(a.b8-1|0)&&d>=(a.eg-1|0)&&e<=(a.d_+1|0)&&f<=(a.b0+1|0)&&g<=(a.dN+1|0)){h=a.d_-a.iJ|0;i=a.b0-a.b8|0;j=a.dN-a.eg|0;if(b>a.iJ)b=a.iJ;if(c>a.b8)c=a.b8;if(d>a.eg)d=a.eg;if(e<a.d_)e=a.d_;if(f<a.b0)f=a.b0;if(g<a.dN)g=a.dN;if((Bj(Bj(e-b|0,f-c|0),g-d|0)-Bj(Bj(h,i),j)|0)<=2){a.iJ=b;a.b8=c;a.eg=d;a.d_=e;a.b0=f;a.dN=g;return 1;}}return 0;}
function R7(){}
function AF3(){var a=this;Ge.call(a);a.il=0;a.ec=null;}
function AWg(a){var b=new AF3();A63(b,a);return b;}
function A63(a,b){K$(a,b);a.ec=$rt_createByteArray(8);}
function AHF(a){a.fn.ly();}
function Q8(a,b,c,d){var e;if(b!==null){a.fn.gv(b,c,d);a.il=a.il+d|0;return;}e=new EF;O(e);M(e);}
function KK(a,b){a.fn.nN(b);a.il=a.il+1|0;}
function APl(a,b){UE(a,$rt_doubleToLongBits(b));}
function APg(a,b){JL(a,$rt_floatToIntBits(b));}
function JL(a,b){a.ec.data[0]=b>>24<<24>>24;a.ec.data[1]=b>>16<<24>>24;a.ec.data[2]=b>>8<<24>>24;a.ec.data[3]=b<<24>>24;a.fn.gv(a.ec,0,4);a.il=a.il+4|0;}
function UE(a,b){a.ec.data[0]=Long_shr(b,56).lo<<24>>24;a.ec.data[1]=Long_shr(b,48).lo<<24>>24;a.ec.data[2]=Long_shr(b,40).lo<<24>>24;a.ec.data[3]=b.hi<<24>>24;a.ec.data[4]=Long_shr(b,24).lo<<24>>24;a.ec.data[5]=Long_shr(b,16).lo<<24>>24;a.ec.data[6]=Long_shr(b,8).lo<<24>>24;a.ec.data[7]=b.lo<<24>>24;a.fn.gv(a.ec,0,8);a.il=a.il+8|0;}
function Z9(a,b){a.ec.data[0]=b>>8<<24>>24;a.ec.data[1]=b<<24>>24;a.fn.gv(a.ec,0,2);a.il=a.il+2|0;}
function AOa(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function Xp(a,b){var c,d,e;c=AGa(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new B1;Bl(b,B(890));M(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Q8(a,e,0,AO6(a,b,e,AOa(a,d,e,0)));}
function AGa(a,b){var c,d,e,f;c=0;d=Bi(b);e=0;while(e<d){f=Y(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function AO6(a,b,c,d){var e,f,g,h,i,j,k;e=Bi(b);f=0;while(f<e){g=Y(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function AFX(){D.call(this);}
function BmT(){var a=new AFX();A0g(a);return a;}
function A0g(a){return;}
function NY(){D.call(this);}
var BmU=null;var BmV=null;function BmW(){var a=new NY();ABm(a);return a;}
function ABm(a){return;}
function ABW(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.y_=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.u3=Long_ZERO;c.t5=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=AOr(BmV,f);if(h<0)h= -h-2|0;i=12+(f-BmV.data[h]|0)|0;j=Qt(e,BmU.data[h],i);if(Long_ge(j,
new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-BmV.data[h]|0)|0;j=Qt(e,BmU.data[h],i);}k=Long_shru(BmU.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,o)),Long_div(l,Long_fromInt(2))))o
=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.u3=e;c.t5=h-330|0;}
function Qt(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function ABk(){var b,c,d,e,f,g,h,i,j,k;BmU=$rt_createLongArray(660);BmV=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=BmU.data;g=d+330|0;f[g]=Mo(e,Long_fromInt(80));BmV.data[g]=c;e=Mo(e,Long_fromInt(10));h=AIU(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=BmU.data;g=(330-i|0)-1|0;f[g]=Mo(b,Long_fromInt(80));BmV.data[g]=d;i=i+1|0;}}
function HP(){D.call(this);}
function AMP(){var a=this;HP.call(a);a.nK=null;a.rL=0;}
function Hb(a,b){var c=new AMP();AT$(c,a,b);return c;}
function AT$(a,b,c){var d;a.rL=c;a.nK=J(Py,c);d=0;while(d<c){a.nK.data[d]=BbH(b);d=d+1|0;}}
function EZ(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.rL){d=d+AGV(a.nK.data[f],b*e,c*e)/e;e=e/2.0;f=f+1|0;}return d;}
function U5(a,b,c,d){var e,f,g;e=0.0;f=1.0;g=0;while(g<a.rL){e=e+Lf(a.nK.data[g],b*f,c*f,d*f)/f;f=f/2.0;g=g+1|0;}return e;}
function H5(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));else{l=0;while(true){m=b.data;if(l>=m.length)break;m[l]=0.0;l=l+1|0;}}n=1.0;o=0;while(o<a.rL){AQq(a.nK.data[o],b,c,d,e,f,g,h,i*n,j*n,k*n,n);n=n/2.0;o=o+1|0;}return b;}
function ACP(){var a=this;D.call(a);a.jB=null;a.j9=0;a.FF=Long_ZERO;}
function ATn(a,b,c){var d=new ACP();A1r(d,a,b,c);return d;}
function A1r(a,b,c,d){a.jB=b;a.j9=c;a.FF=d;}
function Py(){var a=this;HP.call(a);a.b5=null;a.vf=0.0;a.yb=0.0;a.wv=0.0;}
function BmX(){var a=new Py();A_C(a);return a;}
function BbH(a){var b=new Py();Zk(b,a);return b;}
function A_C(a){Zk(a,new DB);}
function Zk(a,b){var c,d,e,f,g;a.b5=$rt_createIntArray(512);a.vf=Cl(b)*256.0;a.yb=Cl(b)*256.0;a.wv=Cl(b)*256.0;c=0;while(c<256){d=a.b5.data;e=c+1|0;d[c]=c;c=e;}c=0;while(c<256){f=E(b,256-c|0)+c|0;g=a.b5.data[c];a.b5.data[c]=a.b5.data[f];a.b5.data[f]=g;a.b5.data[c+256|0]=a.b5.data[c];c=c+1|0;}}
function Lf(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;e=b+a.vf;f=c+a.yb;g=d+a.wv;h=e|0;i=f|0;j=g|0;if(e<h)h=h+(-1)|0;if(f<i)i=i+(-1)|0;if(g<j)j=j+(-1)|0;k=h&255;l=i&255;m=j&255;c=e-h;d=f-i;n=g-j;o=c*c*c*(c*(c*6.0-15.0)+10.0);p=d*d*d*(d*(d*6.0-15.0)+10.0);q=n*n*n*(n*(n*6.0-15.0)+10.0);r=a.b5.data[k]+l|0;s=a.b5.data[r]+m|0;t=a.b5.data[r+1|0]+m|0;u=a.b5.data[k+1|0]+l|0;v=a.b5.data[u]+m|0;w=a.b5.data[u+1|0]+m|0;e=Dr(a,a.b5.data[s],c,d,n);k=a.b5.data[v];x=c-1.0;b=DN(a,o,e,Dr(a,k,x,d,n));k=a.b5.data[t];e
=d-1.0;b=DN(a,p,b,DN(a,o,Dr(a,k,c,e,n),Dr(a,a.b5.data[w],x,e,n)));k=a.b5.data[s+1|0];f=n-1.0;return DN(a,q,b,DN(a,p,DN(a,o,Dr(a,k,c,d,f),Dr(a,a.b5.data[v+1|0],x,d,f)),DN(a,o,Dr(a,a.b5.data[t+1|0],c,e,f),Dr(a,a.b5.data[w+1|0],x,e,f))));}
function DN(a,b,c,d){return c+b*(d-c);}
function Dr(a,b,c,d,e){var f,g;f=b&15;g=f>=8?d:c;if(f>=4)d=f!=12&&f!=14?e:c;if(f&1)g= -g;if(f&2)d= -d;return g+d;}
function AGV(a,b,c){return Lf(a,b,c,0.0);}
function A4H(a,b,c,d){return Lf(a,b,c,d);}
function AQq(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;m=0;n=1.0/l;o=(-1);p=0.0;q=0.0;r=0.0;s=0.0;t=0;while(t<f){u=(c+t|0)*i+a.vf;v=u|0;if(u<v)v=v+(-1)|0;w=v&255;u=u-v;x=u*u*u*(u*(u*6.0-15.0)+10.0);y=0;v=w+1|0;z=u-1.0;while(y<h){ba=(e+y|0)*k+a.wv;bb=ba|0;if(ba<bb)bb=bb+(-1)|0;bc=bb&255;bd=ba-bb;be=bd*bd*bd*(bd*(bd*6.0-15.0)+10.0);bf=0;ba=bd-1.0;while(bf<g){bg=(d+bf|0)*j+a.yb;bh=bg|0;if(bg<bh)bh=bh+(-1)|0;bi=bh&255;l=bg-bh;bj=l*l*l*(l*(l
*6.0-15.0)+10.0);if(bf&&bi==o)bi=o;else{bk=a.b5.data[w]+bi|0;bl=a.b5.data[bk]+bc|0;bm=a.b5.data[bk+1|0]+bc|0;bn=a.b5.data[v]+bi|0;bo=a.b5.data[bn]+bc|0;bp=a.b5.data[bn+1|0]+bc|0;p=DN(a,x,Dr(a,a.b5.data[bl],u,l,bd),Dr(a,a.b5.data[bo],z,l,bd));bn=a.b5.data[bm];bq=l-1.0;q=DN(a,x,Dr(a,bn,u,bq,bd),Dr(a,a.b5.data[bp],z,bq,bd));r=DN(a,x,Dr(a,a.b5.data[bl+1|0],u,l,ba),Dr(a,a.b5.data[bo+1|0],z,l,ba));s=DN(a,x,Dr(a,a.b5.data[bm+1|0],u,bq,ba),Dr(a,a.b5.data[bp+1|0],z,bq,ba));}br=b.data;bs=DN(a,be,DN(a,bj,p,q),DN(a,bj,
r,s));bn=m+1|0;br[m]=br[m]+bs*n;bf=bf+1|0;m=bn;o=bi;}y=y+1|0;}t=t+1|0;}}
function T8(){D.call(this);this.gB=null;}
function Lv(a){var b=new T8();AJz(b,a);return b;}
function AIH(a){var b=new T8();A0C(b,a);return b;}
function AJz(a,b){a.gB=$rt_createByteArray(b>>1);}
function A0C(a,b){a.gB=b;}
function G7(a,b,c,d){var e,f;e=b<<11|d<<7|c;f=e>>1;return !(e&1)?a.gB.data[f]&15:a.gB.data[f]>>4&15;}
function El(a,b,c,d,e){var f,g;f=b<<11|d<<7|c;g=f>>1;if(!(f&1))a.gB.data[g]=(a.gB.data[g]&240|e&15)<<24>>24;else a.gB.data[g]=(a.gB.data[g]&15|(e&15)<<4)<<24>>24;}
function Mk(a){return a.gB===null?0:1;}
function Vq(){Fa.call(this);}
var BmY=null;function Mo(b,c){return Long_udiv(b, c);}
function AIU(b,c){return Long_urem(b, c);}
function ALY(){BmY=F($rt_longcls());}
function TD(){D.call(this);this.CI=null;}
function ASm(a){CM(a.CI,K2(1));}
function A4p(a){ASm(a);}
function TA(){D.call(this);this.Dd=null;}
function ASt(a){CM(a.Dd,K2(0));}
function AYi(a){ASt(a);}
function Rl(){D.call(this);this.Bw=null;}
function XP(a){CM(a.Bw,K2(1));}
function A8N(a){XP(a);}
function Ro(){D.call(this);this.BP=null;}
function ASd(a){CM(a.BP,K2(0));}
function A7a(a){ASd(a);}
function E2(){EX.call(this);}
var BmZ=null;var BfC=null;var Bm0=null;var Bm1=null;function AM_(){var b,c,d;b=new E2;FT(b,B(891),0);BmZ=b;b=new E2;FT(b,B(892),1);BfC=b;b=new E2;FT(b,B(893),2);Bm0=b;c=J(E2,3);d=c.data;d[0]=BmZ;d[1]=BfC;d[2]=Bm0;Bm1=c;}
function Rm(){var a=this;D.call(a);a.EN=null;a.En=null;a.y1=null;a.vH=null;a.Bk=0;a.C7=0;a.xi=null;}
function AMG(a){var b,c;b=a.EN.result;if(b!==null&&b.key!==null&&b.value!==null){c=$rt_str(AZR(b.key));if(c!==null&&Iz(c,a.vH)&&!(!a.Bk&&Hk(c,47,Bi(a.vH)+1|0)!=(-1))){if(!(Uw(b.value)?1:0))Fx(a.xi,ATn(c,0,Long_add(new Long(596067632, 383),Long_fromInt(A0G(b.value)))));else if(a.C7)Fx(a.xi,ATn(c,1,Long_fromInt(-1)));}b.continue();return;}CM(a.En,CY(a.y1.data[0]));}
function A7h(a){AMG(a);}
function Rn(){var a=this;D.call(a);a.DN=null;a.wM=null;}
function AK7(a){CM(a.DN,CY(a.wM.data[0]<=0?(-1):a.wM.data[0]));}
function A1F(a){AK7(a);}
function Rj(){var a=this;D.call(a);a.CQ=null;a.u_=null;}
function ACs(a){CM(a.CQ,a.u_.result===null?Bm0:!(Uw(a.u_.result)?1:0)?BmZ:BfC);}
function A5Q(a){ACs(a);}
function Rk(){D.call(this);this.Ef=null;}
function AB7(a){CM(a.Ef,Bm0);}
function A3d(a){AB7(a);}
function Es(){D.call(this);}
function E5(a,b,c,d){return;}
function Re(){Es.call(this);}
function GZ(){var a=new Re();A6X(a);return a;}
function A6X(a){return;}
function AEK(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,3)+4|0;h=1;if(e>=1){i=e+g|0;if((i+1|0)<=128){j=(e+1|0)+g|0;k=j-2|0;l=e;a:while(true){if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;while(o<=(d+n
|0)&&h){p=f-n|0;while(p<=(f+n|0)&&h){if(l>=0&&l<128)break a;h=0;p=p+1|0;}o=o+1|0;}l=l+1|0;}$p=7;continue _;}}return 0;case 1:$z=ACv(b,d,m,f);if(C()){break _;}k=$z;L();if(!(k!=BeO.b&&k!=BeP.b)&&e<((128-g|0)-1|0)){k=BeP.b;$p=2;continue _;}return 0;case 2:ALq(b,d,m,f,k);if(C()){break _;}k=(e-3|0)+g|0;b:while(true){if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;while(r<=l){j=r-d|0;s=m;while(s<=h){t=s-f|0;if(Ie(j)!=q)break b;if(Ie(t)!=q)break b;if(E(c,
2)&&o)break b;s=s+1|0;}r=r+1|0;}k=k+1|0;}u=Bgx.data;$p=5;continue _;case 3:$z=ACv(b,d,o,f);if(C()){break _;}m=$z;if(m&&m!=Be0.b){k=k+1|0;if(k>=g)return 1;o=e+k|0;continue _;}m=BeZ.b;$p=4;case 4:ALq(b,d,o,f,m);if(C()){break _;}k=k+1|0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;case 5:$z=ACv(b,r,k,s);if(C()){break _;}t=$z;if(!u[t]){t=Be0.b;$p=6;continue _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h
=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(Ie(j)!=q)break;if(Ie(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=Bgx.data;continue _;case 6:ALq(b,r,k,s,t);if(C()){break _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(Ie(j)!=q)break;if(Ie(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=Bgx.data;$p=5;continue _;case 7:$z=ACv(b,o,l,p);if(C()){break _;}r
=$z;if(r){L();if(r!=Be0.b)h=0;}while(true){p=p+1|0;while(!(p<=(f+n|0)&&h)){o=o+1|0;while(!(o<=(d+n|0)&&h)){l=l+1|0;if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;}p=f-n|0;}if(l>=0&&l<128)break;h=0;}continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function Ou(){D.call(this);this.Jx=0;}
var Bm2=null;var Bm3=null;function AX0(a){var b=new Ou();AN_(b,a);return b;}
function AN_(a,b){a.Jx=b;}
function K2(b){return !b?Bm3:Bm2;}
function AHL(){Bm2=AX0(1);Bm3=AX0(0);}
function SM(){var a=this;CS.call(a);a.Ab=null;a.fU=null;a.xA=0;a.f5=0;}
function AD3(a){Dy(a.bG);APT(1);U(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bD/4|0)+120|0,B(598)));}
function ANG(a){APT(0);}
function AYr(a){a.xA=a.xA+1|0;}
function AHe(a,b){var c,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC&&!b.cm){b=a.fU;$p=1;continue _;}return;case 1:ACe(b);if(C()){break _;}c=a.J;b=null;$p=2;case 2:ADT(c,b);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,$p);}
function ACX(a,b,c){var d,e;if(c==200)a.f5=(a.f5-1|0)&3;if(!(c!=208&&c!=28))a.f5=(a.f5+1|0)&3;if(c==14&&Bi(a.fU.gs.data[a.f5])>0)a.fU.gs.data[a.f5]=Ew(a.fU.gs.data[a.f5],0,Bi(a.fU.gs.data[a.f5])-1|0);if(UC(B(894),b)>=0&&Bi(a.fU.gs.data[a.f5])<15){d=a.fU.gs.data;c=a.f5;e=new S;V(e);e=H(e,a.fU.gs.data[a.f5]);Dx(e,b);d[c]=T(e);}}
function ABq(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABf(a);if(C()){break _;}DG(a,a.bZ,a.Ab,a.bm/2|0,40,16777215);B3();Bw(a.bm/2|0,a.bD/2|0,50.0);CC((-60.0),(-60.0),(-60.0));Bv(180.0,0.0,1.0,0.0);if(!((a.xA/6|0)%2|0))a.fU.rC=a.f5;e=a.fU;$p=2;case 2:$z=AMe(e);if(C()){break _;}f=$z;Bv((f*360|0)/16.0,0.0,1.0,0.0);e=Bko;g=a.fU;h=(-0.5);i=(-0.75);j
=(-0.5);k=0.0;$p=3;case 3:AFm(e,g,h,i,j,k);if(C()){break _;}a.fU.rC=(-1);BD();$p=4;case 4:AFC(a,b,c,d);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function IJ(){EX.call(this);this.z$=0;}
var Bku=null;var Bkv=null;var Bm4=null;function A_J(a,b,c){var d=new IJ();AG0(d,a,b,c);return d;}
function AG0(a,b,c,d){FT(a,b,c);a.z$=d;}
function AFt(){var b,c;Bku=A_J(B(895),0,15);Bkv=A_J(B(896),1,0);b=J(IJ,2);c=b.data;c[0]=Bku;c[1]=Bkv;Bm4=b;}
function MG(){var a=this;D.call(a);a.nl=null;a.nX=null;}
function AZ3(a){return a.nX;}
function S8(a,b){var c;c=a.nX;a.nX=b;return c;}
function AXB(a){return a.nl;}
function Lc(){var a=this;MG.call(a);a.db=null;a.dk=null;a.lI=0;a.jo=0;}
function M3(a){var b;b=LS(a);if(b==2){if(LS(a.dk)<0)a.dk=OV(a.dk);return PA(a);}if(b!=(-2))return a;if(LS(a.db)>0)a.db=PA(a.db);return OV(a);}
function LS(a){return (a.dk===null?0:a.dk.lI)-(a.db===null?0:a.db.lI)|0;}
function OV(a){var b;b=a.db;a.db=b.dk;b.dk=a;FO(a);FO(b);return b;}
function PA(a){var b;b=a.dk;a.dk=b.db;b.db=a;FO(a);FO(b);return b;}
function FO(a){var b,c;b=a.dk===null?0:a.dk.lI;c=a.db===null?0:a.db.lI;a.lI=DE(b,c)+1|0;a.jo=1;if(a.db!==null)a.jo=a.jo+a.db.jo|0;if(a.dk!==null)a.jo=a.jo+a.dk.jo|0;}
function AOk(a,b){return b?a.dk:a.db;}
function AMX(){var a=this;Ge.call(a);a.ku=null;a.g6=0;}
function BbI(a){var b=new AMX();A6k(b,a);return b;}
function A6k(a,b){K$(a,b);a.ku=$rt_createByteArray(8192);}
function AYs(a){MK(a);a.fn.ly();}
function AXZ(a,b,c,d){var e,f,g;e=a.ku;if(e!==null&&d>=e.data.length){MK(a);a.fn.gv(b,c,d);return;}if(b===null){f=new EF;Bl(f,B(897));M(f);}if(c>=0&&c<=(b.data.length-d|0)){if(d<0){g=new Oc;f=new S;V(f);Bl(g,T(Be(H(f,B(898)),d)));M(g);}if(e===null){f=new B1;O(f);M(f);}if(d>=(e.data.length-a.g6|0))MK(a);Di(b,c,e,a.g6,d);a.g6=a.g6+d|0;return;}g=new Oc;f=new S;V(f);Bl(g,T(Be(H(f,B(899)),c)));M(g);}
function A35(a){var b,$$je;if(a.ku===null)return;a:{try{KP(a);}catch($$e){$$je=Bh($$e);b=$$je;break a;}a.ku=null;return;}a.ku=null;M(b);}
function AXj(a,b){var c,d,e,f;c=a.ku;if(c===null){d=new B1;O(d);M(d);}e=c.data;if(a.g6==e.length){a.fn.gv(c,0,a.g6);a.g6=0;}f=a.g6;a.g6=f+1|0;e[f]=b<<24>>24;}
function MK(a){if(a.g6>0){a.fn.gv(a.ku,0,a.g6);a.g6=0;}}
function WR(){D.call(this);}
function Bm5(){var a=new WR();AXX(a);return a;}
function AXX(a){return;}
function AI2(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p
=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ey(b,d,e,f,B(900),4.0,(1.0+(N(b.q)-N(b.q))*0.20000000298023224)*0.699999988079071);h=Ga();i=16;j=0;k=15.0;a:while(true){if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D4(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;while(n<i){o=0;while(o<i){if(!(j&&j!=15&&n&&n!=15&&o&&o!=15)){r=j/k*2.0-1.0;s=n/k*2.0-1.0;t
=o/k*2.0-1.0;u=Ee(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.q)*0.6000000238418579);y=0.30000001192092896;z=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;if(x>0.0)break a;}o=o+1|0;}n=n+1|0;}j=j+1|0;}bc=K(l);bd=K(v);be=K(w);$p=9;continue _;case 1:$z=ADJ(b,c,q);if(C()){break _;}q=$z;bf=BY(d,e,f);bg=0;while(true){if(bg>=CX(q)){bh=Ci();DF(bh,h);bi=CX(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;$p=4;continue _;}bn=
Z(q,bg);bj=Sk(bn,d,e,f)/l;if(bj<=1.0)break;bg=bg+1|0;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;case 2:$z=ADz(b,bf,bh);if(C()){break _;}x=$z;bs=x;bt=(1.0-bj)*bs;m=(bt*bt+bt)/2.0*8.0*l+1.0|0;$p=3;case 3:bn.fr(c,m);if(C()){break _;}bn.g=bn.g+v*bt;bn.i=bn.i+w*bt;bn.h=bn.h+z*bt;while(true){bg=bg+1|0;if(bg>=CX(q)){bh=Ci();DF(bh,h);bi=CX(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;$p=4;continue _;}bn=Z(q,bg);bj=Sk(bn,d,
e,f)/l;if(bj>1.0)continue;else break;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;continue _;case 4:$z=ACv(b,m,bl,bm);if(C()){break _;}bu=$z;bv=0;y=m;bw=bl;x=bm;while(bv<1){bq=y+N(b.q);l=bw+N(b.q);v=x+N(b.q);w=bq-d;z=l-e;ba=v-f;bb=Ce(w*w+z*z+ba*ba);w=w/bb;z=z/bb;ba=ba/bb;bb=0.5/(bb/r+0.1)*(N(b.q)*N(b.q)+0.30000001192092896);w=w*bb;z=z*bb;ba=ba*bb;BV(b,B(223),(bq+s)/2.0,(l+u)/2.0,(v+bj)/2.0,w,z,ba);BV(b,B(256),bq,l,v,w,z,ba);bv=bv+1|0;}if(bu>0){L();c=BeM.data[bu];$p
=5;continue _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;continue _;case 5:$z=AEI(b,m,bl,bm);if(C()){break _;}bv=$z;g=0.30000001192092896;$p=6;case 6:c.HP(b,m,bl,bm,bv,g);if(C()){break _;}bv=0;$p=7;case 7:APv(b,m,bl,bm,bv);if(C()){break _;}c=BeM.data[bu];$p=8;case 8:c.sM(b,m,bl,bm);if(C()){break _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;$p=4;continue _;case 9:$z=ACv(b,bc,bd,be);if(C()){break _;}bx=$z;if(bx>0){L();x=x-(BeM.data[bx].yo(c)+0.30000001192092896)
*y;}if(x>0.0)Xg(h,CO(bc,bd,be));l=l+z;v=v+ba;w=w+bb;x=x-0.22500000894069672;while(x<=0.0){while(true){o=o+1|0;while(o>=i){n=n+1|0;while(n>=i){j=j+1|0;if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D4(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;}o=0;}if(!j)break;if(j==15)break;if(!n)break;if(n==15)break;if(!o)break;if(o!=15)continue;else break;}r=j/k*2.0-1.0;s=n/k*2.0-1.0;t=o/k*2.0-1.0;u=Ee(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.q)*0.6000000238418579);y=0.30000001192092896;z
=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;}bc=K(l);bd=K(v);be=K(w);continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p);}
function Oc(){BO.call(this);}
function Bm6(){var a=new Oc();AVT(a);return a;}
function AVT(a){O(a);}
function ARh(){Es.call(this);}
function AYl(){var a=new ARh();A0S(a);return a;}
function A0S(a){return;}
function XN(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,2)+2|0;h=E(c,2)+2|0;i=0;j=(d-g|0)-1|0;k=(d+g|0)+1|0;l=e-1|0;m=e+3|0;n=m+1|0;o=(f-h|0)-1|0;p=(f+h|0)+1|0;q=j;a:while(true){r=R(q,
k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgS.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;while(true){t=R(s,n);if(t>0)break;v=o;w=R(v,p);if(w<=0)break a;s=s+1|0;}q=q+1|0;}$p=1;case 1:$z
=ABZ(b,q,s,v);if(C()){break _;}x=$z;if(s==l&&!x.dw())return 0;if(!t&&!x.dw())return 0;if(!(q!=j&&r&&v!=o&&w)&&s==e){$p=5;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;c:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgS.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break c;t
=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}continue _;case 2:APv(b,d,e,f,k);if(C()){break _;}$p=3;case 3:$z=ANw(b,d,e,f);if(C()){break _;}b=$z;b.jN=ADE(a,c);return 1;case 4:$z=ACv(b,o,e,j);if(C()){break _;}r=$z;if(!r){u=0;r=o-1|0;$p=6;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=BgS.b;$p=2;continue _;case 5:$z=ACv(b,q,s,v);if(C()){break _;}u
=$z;if(!u){u=s+1|0;$p=7;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgS.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q
=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 6:$z=ABZ(b,r,e,j);if(C()){break _;}x=$z;if(x.dw())u=1;r=o+1|0;$p=10;continue _;case 7:$z=ACv(b,q,u,v);if(C()){break _;}u=$z;if(!u)i=i+1|0;v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;d:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgS.b;$p=2;continue _;}t
=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break d;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 8:$z=ABZ(b,r,t,v);if(C()){break _;}x=$z;if(x.dw()){if(!u&&E(c,4)){L();q=Be3.b;$p=14;continue _;}L();q=BeW.b;$p=12;continue _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while
(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgS.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){continue _;}q=t-1|0;$p=9;case 9:$z=ABZ(b,r,q,v);if(C()){break _;}x=$z;if(x.dw()){$p=8;continue _;}q=0;$p=11;continue _;case 10:$z=ABZ(b,r,e,j);if(C()){break _;}x=$z;if(x.dw())u=u+1|0;r=j-1|0;$p=13;continue _;case 11:APv(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r
=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgS.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 12:APv(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)
|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgS.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 13:$z=ABZ(b,o,e,r);if(C()){break _;}x=$z;if(x.dw())u=u+1|0;r=j+1|0;$p=16;continue _;case 14:APv(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g
|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgS.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 15:APv(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=BgS.b;$p=2;continue _;}t=m;}v=o;}if(r!=j
&&u&&v!=o&&s&&t!=n&&i){q=0;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 16:$z=ABZ(b,o,e,r);if(C()){break _;}x=$z;if(x.dw())u=u+1|0;if(u==1){L();r=BgU.b;$p=17;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=BgS.b;$p=2;continue _;case 17:APv(b,o,e,j,r);if(C()){break _;}$p=18;case 18:$z=ANw(b,o,e,j);if(C()){break _;}x=$z;y=x;n=0;while(n<8){z=AHk(a,c);if(z!==null)AHx(y,E(c,k),z);n=n+1|0;}while(true){q=q+1|0;if(q
>=2)break;l=0;if(l>=3)continue;else{o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}}L();k=BgS.b;$p=2;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AHk(a,b){var c,d;a:{c=E(b,10);if(!c){d=new Cd;BB();DD(d,BiF);break a;}if(c==1){d=new Cd;BB();Gr(d,BhN,E(b,4)+1|0);break a;}if(c==2){d=new Cd;BB();DD(d,Bic);break a;}if(c==3){d=new Cd;BB();Gr(d,BhA,E(b,4)+1|0);break a;}if(c==4){d=new Cd;BB();Gr(d,Bgb,E(b,4)+1|0);break a;}if(c==5){d=new Cd;BB();Gr(d,Bgc,E(b,4)+1|0);break a;}if(c==6){d=new Cd;BB();DD(d,BiB);break a;}if(c==7&&!E(b,100)){d=new Cd;BB();DD(d,Biz);break a;}d=null;}return d;}
function ADE(a,b){var c;c=E(b,4);return !c?B(861):c==1?B(864):c==2?B(864):c!=3?B(3):B(862);}
function Ch(){var a=this;Es.call(a);a.zU=0;a.c3=0;}
function Bm7(a,b){var c=new Ch();Cm(c,a,b);return c;}
function Cm(a,b,c){a.zU=b;a.c3=c;}
function ABQ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=N(c)*3.1415927410125732;h=d+8|0;i=h+Bq(g)*a.c3/8.0;j=
h-Bq(g)*a.c3/8.0;h=f+8|0;k=h+BC(g)*a.c3/8.0;l=h-BC(g)*a.c3/8.0;m=(e+E(c,3)|0)+2|0;n=(e+E(c,3)|0)+2|0;o=0;j=j-i;n=n-m;p=l-k;while(o<=a.c3){q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c3)+1.0)*q+1.0;v=(Bq(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;while(w<=e){ba=f;while(ba<=x){bb=y;while(bb<=z){bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be<1.0){$p=1;continue _;}bb=bb+1|0;}ba=ba+1|0;}w=w+1|0;}o=o+1|0;}return 1;case 1:$z
=ACv(b,w,ba,bb);if(C()){break _;}bf=$z;L();if(bf==BeS.b){d=a.zU;$p=2;continue _;}a:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c3)break a;q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c3)+1.0)*q+1.0;v=(Bq(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{continue _;}}return 1;case 2:ALq(b,
w,ba,bb,d);if(C()){break _;}b:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c3)break b;q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bq(h/a.c3)+1.0)*q+1.0;v=(Bq(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{$p=1;continue _;}}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p);}
function BS(){Es.call(this);this.ue=0;}
function Bm8(a){var b=new BS();BT(b,a);return b;}
function BT(a,b){a.ue=b;}
function ACN(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;case 1:$z=ACv(b,h,i,j);if(C()){break _;}k=$z;if(!k){L();l=BeM.data[a.ue];$p=2;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;continue _;case 2:$z
=l.G$(b,h,i,j);if(C()){break _;}k=$z;if(k){k=a.ue;$p=3;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;case 3:ALq(b,h,i,j,k);if(C()){break _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Cn(){Es.call(this);this.ER=0;}
function Bm9(a){var b=new Cn();Cs(b,a);return b;}
function Cs(a,b){a.ER=b;}
function ALZ(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e+1|0;$p=1;case 1:$z=ACv(b,d,g,f);if(C()){break _;}g=$z;L();if(g!=BeS.b)return 0;g=e-1|0;$p=2;case 2:$z=ACv(b,d,g,f);if(C()){break _;}h=$z;if(h!=BeS.b)return 0;$p=3;case 3:$z=ACv(b,d,e,f);if(C()){break _;}g=$z;if(g){$p=5;continue _;}g=0;h=d-1|0;$p=4;case 4:$z=ACv(b,h,e,f);if(C()){break _;}i
=$z;if(i==BeS.b)g=1;i=d+1|0;$p=6;continue _;case 5:$z=ACv(b,d,e,f);if(C()){break _;}g=$z;if(g!=BeS.b)return 0;g=0;h=d-1|0;$p=4;continue _;case 6:$z=ACv(b,i,e,f);if(C()){break _;}j=$z;if(j==BeS.b)g=g+1|0;k=f-1|0;$p=7;case 7:$z=ACv(b,d,e,k);if(C()){break _;}j=$z;if(j==BeS.b)g=g+1|0;j=f+1|0;$p=8;case 8:$z=ACv(b,d,e,j);if(C()){break _;}l=$z;if(l==BeS.b)g=g+1|0;l=0;$p=9;case 9:$z=ACv(b,h,e,f);if(C()){break _;}h=$z;if(!h)l=1;$p=10;case 10:$z=ACv(b,i,e,f);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=11;case 11:$z=ACv(b,
d,e,k);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=12;case 12:$z=ACv(b,d,e,j);if(C()){break _;}h=$z;if(!h)l=l+1|0;if(g==3&&l==1){g=a.ER;$p=13;continue _;}return 1;case 13:APv(b,d,e,f,g);if(C()){break _;}return 1;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function SB(){C1.call(this);}
function Y9(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i+0.002;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARC(a,b,c,d);if(C()){break _;}a.g=a.g*0.8500000238418579;a.i=a.i*0.8500000238418579;a.h=a.h*0.8500000238418579;e=a.l;f=K(a.d);g=K(a.j);h=K(a.e);$p=2;case 2:$z=ABZ(e,f,g,h);if(C()){break _;}e=$z;if(e!==BfN){$p=3;continue _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;continue _;case 3:Ca(a);if
(C()){break _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;case 4:Ca(a);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFn(){C1.call(this);this.Cq=0.0;}
function A77(a,b,c,d,e){var f=new AFn();AV1(f,a,b,c,d,e);return f;}
function AV1(a,b,c,d,e,f){var g;FD(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.10000000149011612;a.i=a.i*0.10000000149011612;a.h=a.h*0.10000000149011612;g=BP()*0.30000001192092896;a.ip=g;a.id=g;a.h0=g;a.dr=a.dr*0.75;a.dr=a.dr*f;a.Cq=a.dr;a.cw=8.0/(BP()*0.8+0.2)|0;a.cw=a.cw*f|0;a.o4=0;}
function AJ4(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.dr=a.Cq*i;$p=1;case 1:ANs(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALR(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e7=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARC(a,c,d,e);if(C()){break _;}if(a.j===a.cS){a.g=a.g*1.1;a.h=a.h*1.1;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if
(C()){break _;}a.e7=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,$p);}
function Q2(){C1.call(this);}
function AR6(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANs(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AER(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e7=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARC(a,c,d,e);if(C()){break _;}a.g=a.g*0.8999999761581421;a.i=a.i*0.8999999761581421;a.h=a.h*0.8999999761581421;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}a.e7=7-
((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E$();}}C3().s(a,b,c,d,e,$p);}
function O3(){C1.call(this);this.DO=0.0;}
function AQF(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw;a.dr=a.DO*(1.0-i*i*0.5);$p=1;case 1:ANs(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ASr(a,b){var c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=(a.dq+b)/a.cw;if(c<0.0)c=0.0;if(c>1.0)c=1.0;$p=1;case 1:$z=ADG(a,b);if(C()){break _;}d=$z;return d*c+1.0-c;default:E$();}}C3().s(a,b,c,d,$p);}
function AAQ(a){var b,c,d,e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}c=a.g;d=a.i;e=a.h;$p=1;case 1:ARC(a,c,d,e);if(C()){break _;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Ca(a);if(C()){break _;}c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E$();}}C3().s(a,
b,c,d,e,$p);}
function AA1(){C1.call(this);this.yR=0.0;}
function BcF(a,b,c,d){var e=new AA1();A1I(e,a,b,c,d);return e;}
function A1I(a,b,c,d,e){FD(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=N(a.m)*0.4000000059604645+0.05000000074505806;a.ip=1.0;a.id=1.0;a.h0=1.0;a.dr=a.dr*(N(a.m)*2.0+0.20000000298023224);a.yR=a.dr;a.cw=16.0/(BP()*0.8+0.2)|0;a.o4=0;a.e7=49;}
function AJ5(a,b){return 1.0;}
function AGQ(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw;a.dr=a.yR*(1.0-i*i);$p=1;case 1:ANs(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALg(a){var b,c,d,e,f,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=1;continue _;}c=a.dq/a.cw;if(N(a.m)>c)BV(a.l,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;continue _;case 1:Ca(a);if(C()){break _;}c=a.dq/a.cw;if(N(a.m)>c)BV(a.l,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;case 2:ARC(a,d,e,f);if(C()){break _;}a.g
=a.g*0.9990000128746033;a.i=a.i*0.9990000128746033;a.h=a.h*0.9990000128746033;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function ARz(){JM.call(this);}
function Bcs(a,b,c,d,e,f,g){var h=new ARz();AVN(h,a,b,c,d,e,f,g);return h;}
function AVN(a,b,c,d,e,f,g,h){TM(a,b,c,d,e);a.m9=0.03999999910593033;a.e7=a.e7+1|0;if(g===0.0&&!(f===0.0&&h===0.0)){a.g=f;a.i=g+0.1;a.h=h;}}
function AIn(){D.call(this);}
function Bm$(){var a=new AIn();AWP(a);return a;}
function AWP(a){return;}
function H9(){var a=this;D.call(a);a.dj=null;a.bu=0;a.bq=0;a.bt=0;a.fS=0;a.bE=null;a.e5=null;}
function Bm_(a,b,c,d,e){var f=new H9();YQ(f,a,b,c,d,e);return f;}
function YQ(a,b,c,d,e,f){var $p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e5=b;a.bE=Ci();a.dj=c;a.bu=d;a.bq=e;a.bt=f;$p=1;case 1:$z=AEI(c,d,e,f);if(C()){break _;}d=$z;a.fS=d;KZ(a);return;default:E$();}}C3().s(a,b,c,d,e,f,$p);}
function KZ(a){a:{Dy(a.bE);if(!a.fS){U(a.bE,CO(a.bu,a.bq,a.bt-1|0));U(a.bE,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fS==1){U(a.bE,CO(a.bu-1|0,a.bq,a.bt));U(a.bE,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fS==2){U(a.bE,CO(a.bu-1|0,a.bq,a.bt));U(a.bE,CO(a.bu+1|0,a.bq+1|0,a.bt));break a;}if(a.fS==3){U(a.bE,CO(a.bu-1|0,a.bq+1|0,a.bt));U(a.bE,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fS==4){U(a.bE,CO(a.bu,a.bq+1|0,a.bt-1|0));U(a.bE,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fS==5){U(a.bE,CO(a.bu,a.bq,a.bt-1|0));U(a.bE,CO(a.bu,a.bq
+1|0,a.bt+1|0));break a;}if(a.fS==6){U(a.bE,CO(a.bu+1|0,a.bq,a.bt));U(a.bE,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fS==7){U(a.bE,CO(a.bu-1|0,a.bq,a.bt));U(a.bE,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fS==8){U(a.bE,CO(a.bu-1|0,a.bq,a.bt));U(a.bE,CO(a.bu,a.bq,a.bt-1|0));break a;}if(a.fS!=9)break a;U(a.bE,CO(a.bu+1|0,a.bq,a.bt));U(a.bE,CO(a.bu,a.bq,a.bt-1|0));}}
function AFE(a){var b,c,d,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=a.bE.s)return;c=Z(a.bE,b);$p=1;case 1:$z=AQ5(a,c);if(C()){break _;}c=$z;if(c!==null&&SS(c,a)){Ra(a.bE,b,CO(c.bu,c.bq,c.bt));d=b;}else{c=a.bE;d=b+(-1)|0;Eo(c,b);}b=d+1|0;if(b>=a.bE.s)return;c=Z(a.bE,b);continue _;default:E$();}}C3().s(a,b,c,d,$p);}
function AQ5(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.dj;d=b.eF;e=b.e0;f=b.eG;$p=1;case 1:$z=ACv(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=a.dj;d=b.eF;e=b.e0+1|0;f=b.eG;$p=2;continue _;}c=new H9;g=a.e5;h=a.dj;d=b.eF;e=b.e0;f=b.eG;$p=3;continue _;case 2:$z=ACv(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=a.dj;d=b.eF;e=b.e0-1|0;f=b.eG;$p=4;continue _;}c=new H9;g=a.e5;h=a.dj;d
=b.eF;e=b.e0+1|0;f=b.eG;$p=5;continue _;case 3:YQ(c,g,h,d,e,f);if(C()){break _;}return c;case 4:$z=ACv(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=null;return c;}c=new H9;g=a.e5;h=a.dj;e=b.eF;d=b.e0-1|0;f=b.eG;$p=6;continue _;case 5:YQ(c,g,h,d,e,f);if(C()){break _;}return c;case 6:YQ(c,g,h,e,d,f);if(C()){break _;}return c;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function SS(a,b){var c,d;c=0;while(c<a.bE.s){d=Z(a.bE,c);if(d.eF==b.bu&&d.eG==b.bt)return 1;c=c+1|0;}return 0;}
function KN(a,b,c,d){var e,f;e=0;while(e<a.bE.s){f=Z(a.bE,e);if(f.eF==b&&f.eG==d)return 1;e=e+1|0;}return 0;}
function O7(a,b){var c;if(SS(a,b))return 1;if(a.bE.s==2)return 0;if(!a.bE.s)return 1;c=Z(a.bE,0);return b.bq==a.bq&&c.e0==a.bq?1:1;}
function ARJ(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:U(a.bE,CO(b.bu,b.bq,b.bt));c=KN(a,a.bu,a.bq,a.bt-1|0);d=KN(a,a.bu,a.bq,a.bt+1|0);e=KN(a,a.bu-1|0,a.bq,a.bt);f=KN(a,a.bu+1|0,a.bq,a.bt);g=(-1);if(!(!c&&!d))g=0;if(!(!e&&!f))g=1;if(d&&f&&!c&&!e)g=6;if(d&&e&&!c&&!f)g=7;if(c&&e&&!d&&!f)g=8;if(c&&f&&!d&&!e)g=9;if(!g){b=a.dj;c=a.bu;d=a.bq+1|0;e=a.bt-1|0;$p=1;continue _;}if(g==1){b=a.dj;c=a.bu+1|0;d
=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 1:$z=ACv(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=4;b=a.dj;c=a.bu;d=a.bq+1|0;e=a.bt+1|0;$p=3;continue _;case 2:$z=ACv(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=2;b=a.dj;c=a.bu-1|0;d=a.bq+1|0;e=a.bt;$p=4;continue _;case 3:$z=ACv(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=5;if(g==1){b=a.dj;c=a.bu+1|0;d=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 4:$z=ACv(b,
c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=3;if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;case 5:AKt(b,c,d,e,g);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,$p);}
function AIZ(a,b,c,d){var e,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=CO(b,c,d);$p=1;case 1:$z=AQ5(a,e);if(C()){break _;}e=$z;if(e===null)return 0;$p=2;case 2:AFE(e);if(C()){break _;}return O7(e,a);default:E$();}}C3().s(a,b,c,d,e,$p);}
function YP(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bu;c=a.bq;d=a.bt-1|0;$p=1;case 1:$z=AIZ(a,b,c,d);if(C()){break _;}d=$z;b=a.bu;c=a.bq;e=a.bt+1|0;$p=2;case 2:$z=AIZ(a,b,c,e);if(C()){break _;}b=$z;c=a.bu-1|0;e=a.bq;f=a.bt;$p=3;case 3:$z=AIZ(a,c,e,f);if(C()){break _;}c=$z;e=a.bu+1|0;f=a.bq;g=a.bt;$p=4;case 4:$z=AIZ(a,e,f,g);if(C()){break _;}e=$z;f=(-1);if(!(!d&&!b))f=0;if(!(!c&&
!e))f=1;if(b&&e&&!d&&!c)f=6;if(b&&c&&!d&&!e)f=7;if(d&&c&&!b&&!e)f=8;if(d&&e&&!b&&!c)f=9;if(!f){h=a.dj;d=a.bu;b=a.bq+1|0;c=a.bt-1|0;$p=5;continue _;}if(f==1){h=a.dj;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fS=f;KZ(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 5:$z=ACv(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=4;h=a.dj;d=a.bu;b=a.bq+1|0;c=a.bt+1|0;$p=7;continue _;case 6:$z=ACv(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=2;h=a.dj;d=a.bu-1|0;b=a.bq+1|0;c=a.bt;$p=8;continue _;case 7:$z
=ACv(h,d,b,c);if(C()){break _;}b=$z;if(b==a.e5.b)f=5;if(f==1){h=a.dj;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fS=f;KZ(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 8:$z=ACv(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=3;if(f<0)f=0;a.fS=f;KZ(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;case 9:AKt(h,d,b,c,f);if(C()){break _;}g=0;if(g>=a.bE.s)return;h=Z(a.bE,g);$p=10;case 10:$z=AQ5(a,h);if(C()){break _;}h=$z;if(h!==null){$p=11;continue _;}g=g+1|0;if(g>=a.bE.s)return;h=Z(a.bE,g);continue _;case 11:AFE(h);if
(C()){break _;}if(O7(h,a)){$p=12;continue _;}g=g+1|0;if(g>=a.bE.s)return;h=Z(a.bE,g);$p=10;continue _;case 12:ARJ(h,a);if(C()){break _;}g=g+1|0;if(g>=a.bE.s)return;h=Z(a.bE,g);$p=10;continue _;default:E$();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Vh(){var a=this;D.call(a);a.pb=null;a.F0=0;a.mi=0;}
function AP1(a){a.mi=a.mi+1|0;}
function ANm(a){return a.mi<a.pb.data.length?0:1;}
function Ss(a,b){return BY(a.pb.data[a.mi].ib+(b.c1+1.0|0)*0.5,a.pb.data[a.mi].hX,a.pb.data[a.mi].im+(b.c1+1.0|0)*0.5);}
function ACa(){var a=this;D.call(a);a.x7=null;a.j$=null;a.q5=null;a.mg=null;}
function A2E(a){var b=new ACa();A6n(b,a);return b;}
function A6n(a,b){a.j$=Bb7();a.q5=De();a.mg=J(HT,32);a.x7=b;}
function APp(a,b,c,d){return O9(a,b,c.d,c.L.M,c.e,d);}
function AF9(a,b,c,d,e,f){return O9(a,b,c+0.5,d+0.5,e+0.5,f);}
function O9(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;UB(a.j$);U9(a.q5);g=IW(a,K(b.L.R),K(b.L.M),K(b.L.S));h=IW(a,K(c-b.c1/2.0),K(d),K(e-b.c1/2.0));i=A0w(K4(b.c1+1.0),K4(b.eO+1.0),K4(b.c1+1.0));g.mE=0.0;g.ph=E0(g,h);g.i5=g.ph;UB(a.j$);WP(a.j$,g);j=g;a:{while(true){if(AB_(a.j$)){if(j!==g){k=UN(a,g,j);break a;}k=null;break a;}l=ARy(a.j$);if(l.m1==h.m1)break;if(E0(l,h)<E0(j,h))j=l;l.nz=1;m=AJK(a,b,l,i,h,f);n=0;while(n<m){k=a.mg.data[n];o=l.mE+E0(l,k);if(!(Pw(k)&&o>=k.mE)){k.o2=l;k.mE=o;k.ph=E0(k,h);if(Pw(k))ABn(a.j$,
k,k.mE+k.ph);else{k.i5=k.mE+k.ph;WP(a.j$,k);}}n=n+1|0;}}k=UN(a,g,h);}return k;}
function AJK(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;if(J4(a,b,c.ib,c.hX+1|0,c.im,d)>0)g=1;h=KA(a,b,c.ib,c.hX,c.im+1|0,d,g);i=KA(a,b,c.ib-1|0,c.hX,c.im,d,g);j=KA(a,b,c.ib+1|0,c.hX,c.im,d,g);k=KA(a,b,c.ib,c.hX,c.im-1|0,d,g);if(h===null)l=0;else if(h.nz)l=0;else if(E0(h,e)>=f)l=0;else{m=a.mg.data;l=1;m[0]=h;}if(i===null)n=l;else if(i.nz)n=l;else if(E0(i,e)>=f)n=l;else{m=a.mg.data;n=l+1|0;m[l]=i;}if(j===null)o=n;else if(j.nz)o=n;else if(E0(j,e)>=f)o=n;else{m=a.mg.data;o=n+1|0;m[n]=j;}if(k===null)n=o;else if(k.nz)n
=o;else if(E0(k,e)>=f)n=o;else{m=a.mg.data;n=o+1|0;m[o]=k;}return n;}
function KA(a,b,c,d,e,f,g){var h,i,j,k;h=null;if(J4(a,b,c,d,e,f)>0)h=IW(a,c,d,e);if(h===null){g=d+g|0;if(J4(a,b,c,g,e,f)>0)h=IW(a,c,g,e);}if(h!==null){i=0;a:{while(true){if(d<=0)break a;j=J4(a,b,c,d-1|0,e,f);if(j<=0)break a;if(j<0)return null;i=i+1|0;if(i>=4)break;d=d+(-1)|0;}return null;}if(d>0)h=IW(a,c,d,e);k=N5(a.x7,c,d-1|0,e);if(!(k!==BfN&&k!==BfO))return null;}return h;}
function IW(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=CP(a.q5,CY(e));if(f===null){f=A0w(b,c,d);BR(a.q5,CY(e),f);}return f;}
function J4(a,b,c,d,e,f){var g,h,i,j;g=c;a:{while(g<(c+f.ib|0)){h=d;while(h<(d+f.hX|0)){i=e;while(i<(e+f.im|0)){j=N5(a.x7,c,d,e);if(j.uh())return 0;if(j===BfN)break a;if(j===BfO)break a;i=i+1|0;}h=h+1|0;}g=g+1|0;}return 1;}return (-1);}
function UN(a,b,c){var d,e,f,g;d=1;e=c;while(e.o2!==null){d=d+1|0;e=e.o2;}f=J(HT,d);g=f.data;d=d+(-1)|0;g[d]=c;while(c.o2!==null){c=c.o2;d=d+(-1)|0;g[d]=c;}b=new Vh;b.pb=f;b.F0=g.length;return b;}
function U2(){var a=this;C1.call(a);a.mB=null;a.hR=null;a.p9=0;a.rc=0;a.AS=0.0;}
function AMg(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fd()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.p9+c)/a.rc;d=i*i;j=a.mB.d;k=a.mB.j;l=a.mB.e;m=a.hR.cs;n=a.hR.d-a.hR.cs;o=c;n=m+n*o;m=a.hR.b7+(a.hR.j-a.hR.b7)*o+a.AS;o=a.hR.ct+(a.hR.e-a.hR.ct)*o;n=n-j;p=d;q=j+n
*p;r=k+(m-k)*p;p=l+(o-l)*p;s=K(q);t=K(r+a.c4/2.0);u=K(p);b=a.l;$p=1;case 1:$z=ANg(b,s,t,u);if(C()){break _;}v=$z;o=q-BkK;n=r-BkL;m=p-BkM;BU(v,v,v,1.0);b=Bgl;w=a.mB;o=o;n=n;m=m;d=a.mB.v;$p=2;case 2:AQB(b,w,o,n,m,d,c);if(C()){break _;}return;default:E$();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function AAJ(a){a.p9=a.p9+1|0;if(a.p9==a.rc)Ca(a);}
function AUt(a){return 2;}
function Y5(){var a=this;D.call(a);a.d2=null;a.eX=0;}
function Bb7(){var a=new Y5();AZ$(a);return a;}
function AZ$(a){a.d2=J(HT,1024);a.eX=0;}
function WP(a,b){var c,d;if(b.gA>=0){b=new D3;Bl(b,B(901));M(b);}if(a.eX==a.d2.data.length){c=J(HT,a.eX<<1);Di(a.d2,0,c,0,a.eX);a.d2=c;}a.d2.data[a.eX]=b;b.gA=a.eX;d=a.eX;a.eX=d+1|0;U0(a,d);return b;}
function UB(a){a.eX=0;}
function ARy(a){var b,c,d,e;b=a.d2.data[0];c=a.d2.data;d=a.d2.data;e=a.eX-1|0;a.eX=e;c[0]=d[e];a.d2.data[a.eX]=null;if(a.eX>0)OO(a,0);b.gA=(-1);return b;}
function ABn(a,b,c){var d;d=b.i5;b.i5=c;if(c>=d)OO(a,b.gA);else U0(a,b.gA);}
function U0(a,b){var c,d,e,f;c=a.d2.data[b];d=c.i5;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.d2.data[e];if(d>=f.i5)break;a.d2.data[b]=f;f.gA=b;b=e;}}a.d2.data[b]=c;c.gA=b;}
function OO(a,b){var c,d,e,f,g,h,i,j;c=a.d2.data[b];d=c.i5;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.eX)break;g=a.d2.data[e];h=g.i5;if(f>=a.eX){i=null;j=Infinity;}else{i=a.d2.data[f];j=i.i5;}if(h<j){if(h>=d)break a;a.d2.data[b]=g;g.gA=b;}else{if(j>=d)break a;a.d2.data[b]=i;i.gA=b;e=f;}b=e;}}a.d2.data[b]=c;c.gA=b;}
function AB_(a){return a.eX?0:1;}
function HT(){var a=this;D.call(a);a.ib=0;a.hX=0;a.im=0;a.m1=0;a.gA=0;a.mE=0.0;a.ph=0.0;a.i5=0.0;a.o2=null;a.nz=0;}
function A0w(a,b,c){var d=new HT();A8G(d,a,b,c);return d;}
function A8G(a,b,c,d){a.gA=(-1);a.nz=0;a.ib=b;a.hX=c;a.im=d;a.m1=b|c<<10|d<<20;}
function E0(a,b){var c,d,e;c=b.ib-a.ib|0;d=b.hX-a.hX|0;e=b.im-a.im|0;return Ea(c*c+d*d+e*e);}
function A3O(a,b){return b.m1!=a.m1?0:1;}
function AVj(a){return a.m1;}
function Pw(a){return a.gA<0?0:1;}
function AJg(){D.call(this);}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",4,"regex",3,"nio",6,"charset",3,"io",3,"lang",-1,"net",10,"minecraft",11,"src"]);
$rt_metadata([D,"Object",9,0,[],0,3,0,["fk",function(){return A4V(this);},"eo",function(b){return Q3(this,b);},"gl",function(){return AUk(this);}],Jy,0,D,[],0,3,0,0,MS,0,D,[],3,3,0,0,FS,0,D,[MS],0,3,0,0,AJ3,0,D,[],4,0,0,0,T4,0,D,[],4,3,0,0,Dc,0,D,[],3,3,0,0,DM,0,D,[],3,3,0,0,KY,0,D,[],3,3,0,0,B4,"String",9,D,[Dc,DM,KY],0,3,0,["gl",function(){return AUg(this);},"eo",function(b){return DC(this,b);},"fk",function(){return A8i(this);},"lT",function(b){return AVZ(this,b);}],D9,0,D,[],0,3,0,["lU",function(){return A0h(this);
}],Fg,0,D9,[],0,3,0,0,I3,0,Fg,[],0,3,0,0,AMb,0,I3,[],0,3,0,0,HN,0,D,[Dc,KY],0,0,0,["nB",function(b){MY(this,b);},"gl",function(){return T(this);}],Iu,0,D,[],3,3,0,0,S,0,HN,[Iu],0,3,0,["xS",function(b,c,d,e){return A6U(this,b,c,d,e);},"xk",function(b,c,d){return AVm(this,b,c,d);},"gl",function(){return BL(this);},"nB",function(b){AXJ(this,b);},"yi",function(b,c){return A7j(this,b,c);}],Fa,0,D,[Dc],1,3,0,0,Gk,0,Fa,[DM],0,3,0,["fk",function(){return A25(this);},"eo",function(b){return A_l(this,b);},"lT",function(b)
{return A6Y(this,b);}],IQ,0,I3,[],0,3,0,0,AOR,0,IQ,[],0,3,0,0,ALC,0,IQ,[],0,3,0,0,BE,0,D9,[],0,3,0,0,B6,"RuntimeException",9,BE,[],0,3,0,0,Da,0,D,[],3,3,0,0,Hi,0,D,[Da],3,3,0,0,Up,0,D,[Hi],3,3,0,0,Qq,0,D,[Hi],3,3,0,0,Vb,0,D,[Hi],3,3,0,0,Ri,0,D,[Hi],3,3,0,0,Wi,0,D,[Hi,Up,Qq,Vb,Ri],3,3,0,0,Px,0,D,[],3,3,0,0,Ll,0,D,[Da],3,3,0,0,YJ,0,D,[Da,Wi,Px,Ll],1,3,0,["Yc",function(b,c){return AX4(this,b,c);},"a0f",function(b,c){return AYg(this,b,c);},"Sf",function(b){return ATE(this,b);},"Oe",function(b,c,d){return AY9(this,
b,c,d);},"Ms",function(b){return A1B(this,b);},"U9",function(){return AUC(this);},"Tv",function(b,c,d){return ASX(this,b,c,d);}],Bs,0,D,[],0,3,Bd,0,SU,0,D,[],3,3,0,0,JB,0,D,[SU],3,3,0,0,NX,0,D,[],3,3,0,0,HC,0,D,[Iu,JB,NX],1,3,0,0,ABg,0,HC,[],0,3,0,0,Lu,0,HC,[],0,3,0,0,AFa,0,D,[],4,3,0,0,AFO,0,D,[Da],1,3,0,0,L0,0,D,[],3,3,0,0,Io,0,D,[L0],0,3,0,0,ZE,0,D,[],0,3,0,0,Ml,0,D,[],0,3,Bbf,0,Gp,0,D,[L0],0,3,0,["ks",function(){ARk(this);}],DP,0,D,[Da],3,3,0,0,W6,0,D,[DP],0,0,0,["gR",function(b){return A$T(this,b);}]]);
$rt_metadata([Xa,0,D,[DP],0,0,0,["gR",function(b){return AXE(this,b);}],Xb,0,D,[DP],0,0,0,["gR",function(b){return A3y(this,b);}],W$,0,D,[DP],0,0,0,["gR",function(b){return ASJ(this,b);}],W_,0,D,[DP],0,0,0,["gR",function(b){return A3J(this,b);}],W8,0,D,[DP],0,0,0,["gR",function(b){return A2g(this,b);}],W9,0,D,[DP],0,0,0,["gR",function(b){return A6u(this,b);}],W7,0,D,[DP],0,0,0,["gR",function(b){return AUe(this,b);}],Qy,0,D,[DP],0,0,0,["gR",function(b){return A66(this,b);}],Qx,0,D,[DP],0,0,0,["gR",function(b)
{return AYH(this,b);}],NT,0,D,[],0,3,0,0,AAU,0,D,[Da],1,3,0,0,UU,0,D,[],0,3,0,0,B1,"IOException",8,BE,[],0,3,0,0,Lh,0,HN,[Iu],0,3,0,["xS",function(b,c,d,e){return AVW(this,b,c,d,e);},"xk",function(b,c,d){return A4a(this,b,c,d);},"nB",function(b){A4r(this,b);},"yi",function(b,c){return A96(this,b,c);}],FB,0,D,[],3,3,0,0,V1,0,D,[FB],0,3,0,0,Fi,0,D,[DM],0,3,0,["eo",function(b){return A$X(this,b);},"fk",function(){return A$F(this);},"lT",function(b){return A29(this,b);}],IZ,0,D,[],0,3,0,0,UQ,0,IZ,[],0,3,0,0,SC,
0,D,[],0,3,0,0,VG,0,D,[],3,3,0,0,R2,0,D,[VG],0,3,0,0,AFM,0,D,[],0,3,0,0,Ei,0,D,[],1,3,0,0,MA,0,Ei,[],0,3,0,["hK",function(b,c,d,e,f,g){A$h(this,b,c,d,e,f,g);},"oi",function(b,c,d,e,f,g){AIQ(this,b,c,d,e,f,g);}],Ev,0,D,[],0,3,0,0,AAS,0,Ev,[],0,3,0,["o$",function(){AYA(this);}],AKz,0,Ev,[],0,3,0,["o$",function(){AYQ(this);}],L5,0,D,[],4,3,0,0,VW,0,Gp,[],0,0,0,["ks",function(){AJX(this);}],Sm,0,D,[],3,3,0,0,Il,0,D,[Sm],3,3,0,0,Go,0,D,[Il],1,3,0,["rz",function(b){return Q6(this,b);}],J3,0,D,[Il],3,3,0,0,Gg,0,Go,
[J3],1,3,0,["kY",function(){return Jj(this);}],Mu,0,Gg,[],1,3,0,0,OD,0,D,[Il],3,3,0,0,Xi,0,D,[OD],3,3,0,0,AED,0,Mu,[Xi],0,3,0,0,AN$,0,D,[Da],1,3,0,0,F$,0,D,[Da],1,3,0,0,ABE,0,F$,[],1,3,0,0,AKD,0,F$,[],1,3,0,0,Jc,0,D,[Il],3,3,0,0,Fb,0,Go,[Jc],1,3,0,["eo",function(b){return A5U(this,b);},"fk",function(){return AS0(this);}],ET,0,D,[],3,3,0,0,AQh,0,Fb,[ET,Dc],0,3,0,["sS",function(b){return Xg(this,b);},"rz",function(b){return Wz(this,b);},"kY",function(){return Ow(this);},"lZ",function(){return IN(this);}],LU,0,
D,[],3,3,0,0,FY,0,D,[LU],1,3,0,0,ACb,0,FY,[ET,Dc],0,3,0,0]);
$rt_metadata([AKa,0,F$,[],1,3,0,0,YU,0,D,[],0,3,0,0,AE0,0,D,[],0,3,0,0,EX,"Enum",9,D,[DM,Dc],1,3,0,["eo",function(b){return ATr(this,b);},"fk",function(){return AX1(this);},"lT",function(b){return AXy(this,b);}],E8,0,EX,[],12,3,0,0,Qr,0,D,[],3,3,0,0,U8,0,D,[Qr],0,0,0,["Go",function(b){CM(this,b);},"IV",function(b){A15(this,b);}],AQD,0,D,[Da],1,3,0,0,Xo,0,D,[Da],3,3,0,0,W5,0,D,[Xo],0,0,0,["a0W",function(){return A1X(this);}],H2,0,D,[JB],1,3,0,0,AQc,0,H2,[],0,3,0,["Cs",function(){return A4D(this);},"ob",function(b,
c,d){return A_h(this,b,c,d);},"wW",function(){return A5p(this);}],IT,0,H2,[],0,3,0,0,Pl,0,D,[],3,3,0,0,P0,0,IT,[Pl],0,3,0,0,MU,0,D,[DM],1,3,0,["lT",function(b){return A6t(this,b);}],WO,0,IT,[],0,3,0,["Cs",function(){return ASY(this);},"ob",function(b,c,d){return ALW(this,b,c,d);},"wW",function(){return A0j(this);}],M9,0,D,[],1,3,0,0,ADr,0,M9,[],0,3,0,0,AI_,0,D,[],0,3,0,0,I_,0,D,[],0,3,0,["An",function(b,c,d){return A4_(this,b,c,d);}],UX,0,I_,[],0,0,0,["An",function(b,c,d){return A1V(this,b,c,d);}],C5,"Entity",
12,D,[],1,3,0,["C4",function(){Ca(this);},"Jb",function(){AET(this);},"DP",function(){X0(this);},"Bt",function(){return A1J(this);},"FU",function(b){AJ2(this,b);},"DD",function(b){Zi(this,b);},"HH",function(){return AE5(this);},"vi",function(b){return ADG(this,b);},"xG",function(b){A6Q(this,b);},"uZ",function(b){A5A(this,b);},"fr",function(b,c){return AJF(this,b,c);},"lw",function(){return A9I(this);},"rR",function(){return A7T(this);},"BA",function(b,c){A_g(this,b,c);},"uJ",function(b){return AWH(this,b);},
"AW",function(b){return AWY(this,b);},"BJ",function(){AFb(this);},"Ac",function(){return A9M(this);}],EQ,"EntityLiving",12,C5,[],0,3,0,["lw",function(){return AXr(this);},"rR",function(){return A1N(this);},"rJ",function(){return AQn(this);},"Jb",function(){ANo(this);},"BJ",function(){AKQ(this);},"ep",function(){AMr(this);},"fr",function(b,c){return AB1(this,b,c);},"wA",function(){return A8p(this);},"vb",function(){return AUx(this);},"uM",function(){return AVs(this);},"Fx",function(b){AN3(this,b);},"ml",function()
{return ATB(this);},"DD",function(b){AP5(this,b);},"or",function(){ACo(this);},"wK",function(){AQM(this);},"uS",function(b,c,d){return Zs(this,b,c,d);},"DP",function(){ABH(this);}],IV,"EntityCreature",12,EQ,[],0,3,0,["wK",function(){APL(this);},"nQ",function(b,c){AMA(this,b,c);},"x1",function(){return AKX(this);}],DQ,"EntityMonster",12,IV,[],0,3,0,["or",function(){AC8(this);},"ep",function(){AK6(this);},"x1",function(){return AKm(this);},"fr",function(b,c){return AAI(this,b,c);},"nQ",function(b,c){AQU(this,
b,c);},"sD",function(b,c,d){return ABw(this,b,c,d);},"uS",function(b,c,d){return Yy(this,b,c,d);}],I7,"EntityZombie",12,DQ,[],0,3,0,["or",function(){AHZ(this);},"ml",function(){return AWJ(this);}],Jm,"EntitySkeleton",12,DQ,[],0,3,0,["or",function(){AIA(this);},"nQ",function(b,c){AHS(this,b,c);},"ml",function(){return AYM(this);}],JW,"EntityCreeper",12,DQ,[],0,3,0,["wK",function(){ZO(this);},"nQ",function(b,c){AAK(this,b,c);},"ml",function(){return ASS(this);}],Km,"EntitySpider",12,DQ,[],0,3,0,["x1",function()
{return ARo(this);},"nQ",function(b,c){Zl(this,b,c);},"ml",function(){return AZL(this);}],GC,"EntityAnimal",12,IV,[],1,3,0,["sD",function(b,c,d){return AOy(this,b,c,d);},"uS",function(b,c,d){return AK3(this,b,c,d);}],KG,"EntitySheep",12,GC,[],0,3,0,["fr",function(b,c){return AGS(this,b,c);},"wA",function(){return A60(this);},"vb",function(){return A4e(this);},"uM",function(){return AYk(this);}],IC,"EntityPig",12,GC,[],0,3,0,["wA",function(){return ATx(this);},"vb",function(){return A9r(this);},"uM",function()
{return AV4(this);},"uJ",function(b){return AXR(this,b);},"ml",function(){return AWc(this);}],DB,0,D,[Dc],0,3,0,0,NC,0,D,[],0,3,0,0,Pa,0,D,[],0,3,0,0,P,"Block",12,D,[],0,3,L,["gi",function(){return A8Z(this);},"em",function(){return AWC(this);},"Cw",function(b,c,d,e){return AE$(this,b,c,d,e);},"pG",function(b,c,d,e,f){return AGs(this,b,c,d,e,f);},"uk",function(b,c,d,e,f){return ABY(this,b,c,d,e,f);},"eY",function(b,c){return A7d(this,b,c);},"cj",function(b){return AVC(this,b);},"oS",function(b,c,d,e){return K7(this,
b,c,d,e);},"FA",function(b,c,d,e,f,g){ALv(this,b,c,d,e,f,g);},"hw",function(b,c,d,e){return Nm(this,b,c,d,e);},"d5",function(){return A5h(this);},"o6",function(b,c){return A6q(this,b,c);},"pf",function(){return A3L(this);},"e8",function(b,c,d,e,f){AHO(this,b,c,d,e,f);},"kS",function(b,c,d,e,f){APb(this,b,c,d,e,f);},"ns",function(b,c,d,e,f){Z7(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){YO(this,b,c,d,e,f);},"mx",function(){return A3V(this);},"fE",function(b,c,d,e){AA7(this,b,c,d,e);},"lB",function(b,c,d,e){Z2(this,
b,c,d,e);},"eH",function(b){return AYn(this,b);},"dX",function(b,c){return ATO(this,b,c);},"IM",function(b,c,d,e,f){Yg(this,b,c,d,e,f);},"HP",function(b,c,d,e,f,g){AEX(this,b,c,d,e,f,g);},"yo",function(b){return AZ0(this,b);},"nI",function(b,c,d,e,f,g){return Kb(this,b,c,d,e,f,g);},"sM",function(b,c,d,e){AQY(this,b,c,d,e);},"pQ",function(){return AVi(this);},"fV",function(b,c,d,e){return AEE(this,b,c,d,e);},"lH",function(b,c,d,e,f){return AGG(this,b,c,d,e,f);},"oH",function(b,c,d,e,f){AJI(this,b,c,d,e,f);},
"vc",function(b,c,d,e,f){YG(this,b,c,d,e,f);},"q9",function(b,c,d,e,f){AAc(this,b,c,d,e,f);},"qE",function(b,c,d,e,f,g){AF4(this,b,c,d,e,f,g);},"xL",function(b,c,d,e){APV(this,b,c,d,e);}],RB,0,D,[],3,3,0,0,AJd,0,Gg,[ET,Dc,RB],0,3,0,["lZ",function(){return CX(this);},"sS",function(b){return U(this,b);}],DH,0,D,[Da],3,3,0,0,TH,0,D,[DH],0,0,0,["gw",function(){return AWl(this);}],TG,0,D,[DH],0,0,0,["gw",function(){return AS3(this);}],TF,0,D,[DH],0,0,0,["gw",function(){return AZk(this);}],TE,0,D,[DP],0,0,0,["gR",
function(b){return A6G(this,b);}],SA,0,D,[],0,0,0,0,Cb,"IllegalArgumentException",9,B6,[],0,3,0,0,Vd,"UnsupportedCharsetException",7,Cb,[],0,3,0,0,EF,"NullPointerException",9,B6,[],0,3,0,0,AA8,0,D,[Da],4,3,0,0,Fk,0,D,[],1,3,0,0]);
$rt_metadata([L9,0,Fk,[DM],1,3,0,0,AE3,0,D,[],0,3,0,0,QH,0,D,[],0,3,0,0,E3,0,D,[JB,NX],1,3,0,["gv",function(b,c,d){ATe(this,b,c,d);},"tQ",function(){A8T(this);},"ly",function(){A9H(this);}],Ge,0,E3,[],0,3,0,0,AA4,0,Ge,[],0,3,0,0,Xc,0,E3,[],0,0,0,["nN",function(b){AYf(this,b);}],AE_,"IllegalCharsetNameException",7,Cb,[],0,3,0,0,MT,0,D,[],128,3,0,0,Uj,0,MT,[],4,3,0,0,Iq,0,D,[],0,3,0,0,AHl,0,Iq,[],4,0,0,0,ACq,0,Iq,[],4,0,0,0,LQ,"BlockStone",12,P,[],0,3,0,["dX",function(b,c){return A8F(this,b,c);}],Z4,"BlockGrass",
12,P,[],0,3,0,["cj",function(b){return A7o(this,b);},"e8",function(b,c,d,e,f){ADo(this,b,c,d,e,f);},"dX",function(b,c){return AZ7(this,b,c);}],AHR,"BlockDirt",12,P,[],0,3,0,0,B8,0,D,[],0,3,0,["nE",function(){return A8j(this);},"dw",function(){return A0W(this);},"sk",function(){return A7O(this);},"uh",function(){return A5q(this);}],F4,"BlockFlower",12,P,[],0,3,0,["fV",function(b,c,d,e){return ALT(this,b,c,d,e);},"ro",function(b){return AYj(this,b);},"e1",function(b,c,d,e,f){AID(this,b,c,d,e,f);},"e8",function(b,
c,d,e,f){AD9(this,b,c,d,e,f);},"G$",function(b,c,d,e){return AN6(this,b,c,d,e);},"hw",function(b,c,d,e){return AGi(this,b,c,d,e);},"d5",function(){return A6j(this);},"gi",function(){return ATY(this);},"em",function(){return A7t(this);}],AMW,"BlockSapling",12,F4,[],0,3,0,["e8",function(b,c,d,e,f){AEg(this,b,c,d,e,f);}],HS,0,P,[],1,3,0,["cj",function(b){return AS$(this,b);},"gi",function(){return A$8(this);},"d5",function(){return A$q(this);},"o6",function(b,c){return A8C(this,b,c);},"pG",function(b,c,d,e,f){
return ARu(this,b,c,d,e,f);},"hw",function(b,c,d,e){return Ye(this,b,c,d,e);},"em",function(){return A7W(this);},"dX",function(b,c){return A3c(this,b,c);},"eH",function(b){return A59(this,b);},"qE",function(b,c,d,e,f,g){ANb(this,b,c,d,e,f,g);},"mx",function(){return AU2(this);},"Cw",function(b,c,d,e){return AEu(this,b,c,d,e);},"e8",function(b,c,d,e,f){AQ8(this,b,c,d,e,f);},"pQ",function(){return A$n(this);},"kS",function(b,c,d,e,f){YE(this,b,c,d,e,f);},"fE",function(b,c,d,e){ARO(this,b,c,d,e);},"e1",function(b,
c,d,e,f){ALd(this,b,c,d,e,f);}],AEf,"BlockFlowing",12,HS,[],0,3,0,["e8",function(b,c,d,e,f){AOO(this,b,c,d,e,f);},"fE",function(b,c,d,e){AB2(this,b,c,d,e);}],AII,"BlockStationary",12,HS,[],0,3,0,["e1",function(b,c,d,e,f){AGv(this,b,c,d,e,f);}],I8,"BlockSand",12,P,[],0,3,0,["fE",function(b,c,d,e){ARM(this,b,c,d,e);},"e1",function(b,c,d,e,f){ASb(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){APy(this,b,c,d,e,f);},"mx",function(){return A3U(this);}],AG2,"BlockGravel",12,I8,[],0,3,0,["dX",function(b,c){return A_j(this,
b,c);}],YW,"BlockOre",12,P,[],0,3,0,["dX",function(b,c){return A4l(this,b,c);},"eH",function(b){return AZ6(this,b);}],AFf,"BlockLog",12,P,[],0,3,0,["eH",function(b){return A8U(this,b);},"dX",function(b,c){return ATc(this,b,c);},"cj",function(b){return AVw(this,b);}],LX,0,P,[],0,3,0,["pG",function(b,c,d,e,f){return AQt(this,b,c,d,e,f);}],ACE,"BlockLeaves",12,LX,[],0,3,0,["e8",function(b,c,d,e,f){AIw(this,b,c,d,e,f);},"eH",function(b){return AW3(this,b);},"dX",function(b,c){return A5a(this,b,c);},"d5",function()
{return A2O(this);},"oH",function(b,c,d,e,f){ASp(this,b,c,d,e,f);}],ALc,"BlockSponge",12,P,[],0,3,0,["fE",function(b,c,d,e){AKH(this,b,c,d,e);},"lB",function(b,c,d,e){ANt(this,b,c,d,e);}],Nb,0,P,[],0,3,0,["d5",function(){return A9_(this);},"pG",function(b,c,d,e,f){return Yw(this,b,c,d,e,f);}],AQk,"BlockGlass",12,Nb,[],0,3,0,["eH",function(b){return AV5(this,b);}],AHa,"BlockMushroom",12,F4,[],0,3,0,["ro",function(b){return AI4(this,b);},"G$",function(b,c,d,e){return ADi(this,b,c,d,e);}],ABt,"BlockOreBlock",12,
P,[],0,3,0,["cj",function(b){return A4y(this,b);}],Zf,"BlockStep",12,P,[],0,3,0,["cj",function(b){return A$I(this,b);},"d5",function(){return A5P(this);},"e1",function(b,c,d,e,f){ABC(this,b,c,d,e,f);},"fE",function(b,c,d,e){ABi(this,b,c,d,e);},"dX",function(b,c){return AZl(this,b,c);},"gi",function(){return AW5(this);},"pG",function(b,c,d,e,f){return ASB(this,b,c,d,e,f);}],AOf,"BlockTNT",12,P,[],0,3,0,["cj",function(b){return A40(this,b);},"eH",function(b){return AU$(this,b);},"sM",function(b,c,d,e){AGB(this,
b,c,d,e);},"ns",function(b,c,d,e,f){ASj(this,b,c,d,e,f);}],AC$,"BlockBookshelf",12,P,[],0,3,0,["cj",function(b){return A$9(this,b);},"eH",function(b){return A4A(this,b);}],XM,"BlockObsidian",12,LQ,[],0,3,0,["eH",function(b){return A27(this,b);},"dX",function(b,c){return AUU(this,b,c);}],AOB,"BlockTorch",12,P,[],0,3,0,["hw",function(b,c,d,e){return ANj(this,b,c,d,e);},"d5",function(){return A1_(this);},"gi",function(){return AV$(this);},"em",function(){return A0U(this);},"fV",function(b,c,d,e){return AL6(this,
b,c,d,e);},"vc",function(b,c,d,e,f){ANN(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){AR_(this,b,c,d,e,f);},"fE",function(b,c,d,e){ABs(this,b,c,d,e);},"e1",function(b,c,d,e,f){AJ$(this,b,c,d,e,f);},"nI",function(b,c,d,e,f,g){return AKf(this,b,c,d,e,f,g);},"kS",function(b,c,d,e,f){AQm(this,b,c,d,e,f);}],AO0,"BlockFire",12,P,[],0,3,0,["hw",function(b,c,d,e){return ARA(this,b,c,d,e);},"d5",function(){return A5W(this);},"gi",function(){return A8t(this);},"em",function(){return AXu(this);},"eH",function(b){return AWD(this,
b);},"mx",function(){return AZ2(this);},"e8",function(b,c,d,e,f){XL(this,b,c,d,e,f);},"pf",function(){return A3j(this);},"fV",function(b,c,d,e){return ANq(this,b,c,d,e);},"e1",function(b,c,d,e,f){ABy(this,b,c,d,e,f);},"fE",function(b,c,d,e){ACr(this,b,c,d,e);},"kS",function(b,c,d,e,f){ASq(this,b,c,d,e,f);}],Eh,0,P,[],1,3,0,["fE",function(b,c,d,e){AOE(this,b,c,d,e);},"lB",function(b,c,d,e){ALX(this,b,c,d,e);}],AAa,"BlockMobSpawner",12,Eh,[],0,3,0,["tb",function(){return AXg(this);},"d5",function(){return A51(this);
}],Zx,"BlockStairs",12,P,[],0,3,0,["d5",function(){return A5E(this);},"gi",function(){return AV3(this);},"em",function(){return AYV(this);},"pG",function(b,c,d,e,f){return APz(this,b,c,d,e,f);},"FA",function(b,c,d,e,f,g){AJy(this,b,c,d,e,f,g);},"e1",function(b,c,d,e,f){AHA(this,b,c,d,e,f);},"kS",function(b,c,d,e,f){APc(this,b,c,d,e,f);},"q9",function(b,c,d,e,f){ABc(this,b,c,d,e,f);},"ns",function(b,c,d,e,f){ADn(this,b,c,d,e,f);},"Cw",function(b,c,d,e){return AMV(this,b,c,d,e);},"yo",function(b){return A8V(this,
b);},"pQ",function(){return A79(this);},"dX",function(b,c){return A4c(this,b,c);},"eH",function(b){return A0t(this,b);},"eY",function(b,c){return AXv(this,b,c);},"cj",function(b){return A73(this,b);},"uk",function(b,c,d,e,f){return AM6(this,b,c,d,e,f);},"mx",function(){return AVG(this);},"oS",function(b,c,d,e){return AMf(this,b,c,d,e);},"qE",function(b,c,d,e,f,g){ACI(this,b,c,d,e,f,g);},"pf",function(){return AYB(this);},"o6",function(b,c){return AYO(this,b,c);},"fV",function(b,c,d,e){return AMn(this,b,c,d,
e);},"fE",function(b,c,d,e){ACD(this,b,c,d,e);},"lB",function(b,c,d,e){YA(this,b,c,d,e);},"HP",function(b,c,d,e,f,g){AHN(this,b,c,d,e,f,g);},"IM",function(b,c,d,e,f){AMY(this,b,c,d,e,f);},"oH",function(b,c,d,e,f){AQQ(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){AQV(this,b,c,d,e,f);},"lH",function(b,c,d,e,f){return AGH(this,b,c,d,e,f);},"sM",function(b,c,d,e){Y$(this,b,c,d,e);}],AFP,"BlockChest",12,Eh,[],0,3,0,["uk",function(b,c,d,e,f){return AEx(this,b,c,d,e,f);},"cj",function(b){return A86(this,b);},"fV",function(b,
c,d,e){return AJ0(this,b,c,d,e);},"lB",function(b,c,d,e){ASD(this,b,c,d,e);},"lH",function(b,c,d,e,f){return AFV(this,b,c,d,e,f);},"tb",function(){return AZC(this);}],AKG,"BlockGears",12,P,[],0,3,0,["hw",function(b,c,d,e){return AEU(this,b,c,d,e);},"d5",function(){return ATV(this);},"gi",function(){return A5c(this);},"em",function(){return A7r(this);},"eH",function(b){return A9O(this,b);},"pf",function(){return AUA(this);}],AHt,"BlockWorkbench",12,P,[],0,3,0,["cj",function(b){return AWt(this,b);},"lH",function(b,
c,d,e,f){return AGO(this,b,c,d,e,f);}],AKF,"BlockCrops",12,F4,[],0,3,0,["ro",function(b){return AYF(this,b);},"e8",function(b,c,d,e,f){AJl(this,b,c,d,e,f);},"eY",function(b,c){return A8r(this,b,c);},"em",function(){return A4C(this);},"ns",function(b,c,d,e,f){ANy(this,b,c,d,e,f);},"dX",function(b,c){return A0X(this,b,c);},"eH",function(b){return A4T(this,b);}],AQN,"BlockFarmland",12,P,[],0,3,0,["hw",function(b,c,d,e){return AA3(this,b,c,d,e);},"d5",function(){return AU1(this);},"gi",function(){return A1z(this);
},"eY",function(b,c){return A_i(this,b,c);},"e8",function(b,c,d,e,f){ANc(this,b,c,d,e,f);},"oH",function(b,c,d,e,f){AKM(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){X9(this,b,c,d,e,f);},"dX",function(b,c){return AW0(this,b,c);}],AF0,"BlockFurnace",12,Eh,[],0,3,0,["fE",function(b,c,d,e){ACt(this,b,c,d,e);},"uk",function(b,c,d,e,f){return AKc(this,b,c,d,e,f);},"kS",function(b,c,d,e,f){AEl(this,b,c,d,e,f);},"cj",function(b){return AUW(this,b);},"lH",function(b,c,d,e,f){return AGR(this,b,c,d,e,f);},"tb",function()
{return A74(this);}],Vs,"BlockSign",12,Eh,[],0,3,0,["em",function(){return AYK(this);},"gi",function(){return A58(this);},"d5",function(){return A52(this);},"tb",function(){return A1K(this);},"fV",function(b,c,d,e){return AGK(this,b,c,d,e);},"dX",function(b,c){return A8A(this,b,c);},"e1",function(b,c,d,e,f){ZS(this,b,c,d,e,f);}],D_,"TileEntity",12,D,[],0,3,0,["tN",function(){AFI(this);},"kk",function(){ACe(this);}]]);
$rt_metadata([Jh,0,D_,[],0,3,0,0,Bb,0,D,[],0,3,BB,["iO",function(b,c,d,e,f,g,h){return AGq(this,b,c,d,e,f,g,h);},"x4",function(b,c){return A$J(this,b,c);},"n9",function(b,c,d){return ASh(this,b,c,d);},"sg",function(b,c){AV9(this,b,c);},"xY",function(b,c,d,e,f){A46(this,b,c,d,e,f);},"n1",function(b){return A_p(this,b);},"o7",function(b){return AV0(this,b);},"yG",function(b,c){A3G(this,b,c);}],AIv,"BlockDoor",12,P,[],0,3,0,["eY",function(b,c){return A$p(this,b,c);},"d5",function(){return A0Q(this);},"gi",function()
{return AXp(this);},"em",function(){return ATL(this);},"oS",function(b,c,d,e){return AGo(this,b,c,d,e);},"hw",function(b,c,d,e){return Zz(this,b,c,d,e);},"xL",function(b,c,d,e){AHC(this,b,c,d,e);},"q9",function(b,c,d,e,f){AJU(this,b,c,d,e,f);},"lH",function(b,c,d,e,f){return ADS(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){ACx(this,b,c,d,e,f);},"dX",function(b,c){return A8z(this,b,c);},"nI",function(b,c,d,e,f,g){return XE(this,b,c,d,e,f,g);},"fV",function(b,c,d,e){return AJZ(this,b,c,d,e);}],AC1,"BlockLadder",
12,P,[],0,3,0,["hw",function(b,c,d,e){return ADe(this,b,c,d,e);},"oS",function(b,c,d,e){return AD5(this,b,c,d,e);},"d5",function(){return AWU(this);},"gi",function(){return A5T(this);},"em",function(){return A9x(this);},"fV",function(b,c,d,e){return ANT(this,b,c,d,e);},"vc",function(b,c,d,e,f){Yn(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){AKJ(this,b,c,d,e,f);},"eH",function(b){return A5r(this,b);}],ANW,"BlockMinecartTrack",12,P,[],0,3,0,["hw",function(b,c,d,e){return ACC(this,b,c,d,e);},"d5",function(){return AWv(this);
},"nI",function(b,c,d,e,f,g){return ALA(this,b,c,d,e,f,g);},"xL",function(b,c,d,e){AMk(this,b,c,d,e);},"eY",function(b,c){return A2z(this,b,c);},"gi",function(){return A3z(this);},"em",function(){return A0v(this);},"eH",function(b){return A2G(this,b);},"fV",function(b,c,d,e){return ANV(this,b,c,d,e);},"fE",function(b,c,d,e){ANE(this,b,c,d,e);},"e1",function(b,c,d,e,f){AJM(this,b,c,d,e,f);}],ASz,0,Bb,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AQl(this,b,c,d,e,f,g,h);}],AHE,0,MU,[],0,3,0,0,M6,0,Fk,[DM],1,3,
0,0,Ni,0,L9,[],1,0,0,0,WM,0,Ni,[],0,0,0,0,ARj,0,M6,[],0,0,0,0,Vr,0,D,[],3,3,0,0,LV,0,Fk,[DM,Iu,KY,Vr],1,3,0,0,P4,"GZIPException",2,B1,[],0,3,0,0,Ok,0,B8,[],0,3,0,["dw",function(){return A4R(this);},"sk",function(){return A5w(this);},"uh",function(){return ATk(this);}],L1,0,B8,[],0,3,0,["nE",function(){return A_D(this);},"dw",function(){return AY7(this);}],N7,0,B8,[],0,3,0,["dw",function(){return A6V(this);},"sk",function(){return A94(this);},"uh",function(){return AU3(this);}],Gc,0,Bb,[],0,3,0,["x4",function(b,
c){return A8S(this,b,c);},"sg",function(b,c){A64(this,b,c);},"xY",function(b,c,d,e,f){AWo(this,b,c,d,e,f);},"n1",function(b){return AW8(this,b);}],OW,0,Gc,[],0,3,Bb3,0,Vv,0,Gc,[],0,3,Bb6,["o7",function(b){return A5j(this,b);}],Wq,0,Gc,[],0,3,BbG,0,AEZ,0,Bb,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AJH(this,b,c,d,e,f,g,h);}],LO,0,Bb,[],0,3,0,["n9",function(b,c,d){return P8(this,b,c,d);}],AOT,0,Bb,[],0,3,0,["n9",function(b,c,d){return AGy(this,b,c,d);}],AK$,0,Bb,[],0,3,0,["x4",function(b,c){return A0u(this,
b,c);},"sg",function(b,c){A7R(this,b,c);},"xY",function(b,c,d,e,f){AX3(this,b,c,d,e,f);},"n1",function(b){return A2y(this,b);}],AOb,0,LO,[],0,3,0,["n9",function(b,c,d){return APu(this,b,c,d);}],ANx,0,Bb,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AQR(this,b,c,d,e,f,g,h);}],VU,0,Bb,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AFk(this,b,c,d,e,f,g,h);}],F5,0,Bb,[],0,3,0,0,XU,0,Bb,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return ACc(this,b,c,d,e,f,g,h);}],AHo,0,Bb,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return Yd(this,
b,c,d,e,f,g,h);}],AJa,0,Bb,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AD$(this,b,c,d,e,f,g,h);}],ARK,0,Bb,[],0,3,0,["n9",function(b,c,d){return AHW(this,b,c,d);}],AO8,0,Bb,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AC7(this,b,c,d,e,f,g,h);}],ARc,0,Bb,[],0,3,0,["yG",function(b,c){AGw(this,b,c);},"sg",function(b,c){AWk(this,b,c);}],N2,0,D,[],3,0,0,0,AGg,0,D,[N2],4,3,0,["EZ",function(b){ASV(this,b);},"l3",function(){AZu(this);},"yA",function(){return AT1(this);},"kK",function(b,c,d){A8e(this,b,c,d);}],Sc,
"CloneNotSupportedException",9,BE,[],0,3,0,0,Nq,0,D,[],4,3,0,0,J1,0,D,[],3,3,0,0,LL,0,D,[J1,ET],0,0,0,["eo",function(b){return A4Y(this,b);},"fk",function(){return A1U(this);}],IF,0,LL,[],0,0,0,0,BO,"IndexOutOfBoundsException",9,B6,[],0,3,0,0,IY,"StringIndexOutOfBoundsException",9,BO,[],0,3,0,0,GH,0,D,[],3,3,0,0,Wx,0,D,[GH],0,3,0,["ks",function(){AI1(this);}],FG,"EOFException",8,B1,[],0,3,0,0,ER,0,D,[],0,3,0,0,Fy,0,D,[],0,3,0,0,LJ,0,D,[],4,0,0,0]);
$rt_metadata([PO,0,E3,[],0,0,0,["nN",function(b){A56(this,b);}],Kj,0,D,[],0,3,0,0,AMm,0,D,[],4,3,0,0,Jf,0,D,[],0,3,0,0,Ls,0,LV,[],1,0,0,0,ABM,0,Ls,[],0,0,0,0,LR,0,D,[],1,3,0,0,N$,0,D,[],0,3,0,0,Z8,0,D,[Da],1,3,0,0,PP,0,D,[Da],3,3,0,0,YC,0,D,[Da,PP],1,3,0,0,KD,0,D,[],4,0,0,0,NE,0,LR,[],1,3,0,0,PQ,0,NE,[],0,3,0,0,AOo,0,D,[],4,3,0,0,Gd,0,D,[],4,0,0,0,LB,0,D,[],4,0,0,0,Hw,"UTFDataFormatException",8,B1,[],0,3,0,0,Xt,"NegativeArraySizeException",9,B6,[],0,3,0,0,AAX,0,D,[Ll],1,3,0,["QV",function(b){return A_x(this,
b);},"Zu",function(){return AUy(this);}],Kk,"IllegalMonitorStateException",9,B6,[],0,3,0,0,ZU,0,D,[],0,0,0,0,D3,"IllegalStateException",9,BE,[],0,3,0,0,AIx,0,D,[Da],1,3,0,0,SQ,0,D,[GH],0,3,0,["ks",function(){AQ6(this);}],Q_,0,D,[GH],0,3,0,0,G0,0,B1,[],0,3,0,0,W0,"AssertionError",9,Fg,[],0,3,0,0,E1,0,BE,[],0,3,0,0,Oi,0,D,[],1,3,0,0,Sg,0,D,[],3,3,0,0,Sq,0,D,[],3,3,0,0,Pg,0,D,[GH,Sg,Sq],0,0,0,["ks",function(){APk(this);}],LG,0,Oi,[],1,3,0,0,Rg,0,LG,[],0,3,0,0,DZ,"Inflate$Return",2,BE,[],0,0,0,0,ANv,0,D,[ET],0,
3,0,0,OT,0,D,[N2],4,3,0,["kK",function(b,c,d){A2x(this,b,c,d);},"l3",function(){A6p(this);},"EZ",function(b){A9R(this,b);},"yA",function(){return A7v(this);}],I9,0,D,[],0,3,0,0,Qh,0,D,[],3,3,0,0,Bu,0,Bs,[Qh],0,3,BW,0,ACB,0,D,[],0,3,0,0,ND,0,D,[],0,3,0,0,In,0,D,[],0,3,Tp,0,AR$,0,E3,[],0,3,0,["nN",function(b){A7M(this,b);},"gv",function(b,c,d){Rs(this,b,c,d);}],JR,"ArrayStoreException",9,B6,[],0,3,0,0,Oe,0,D,[],3,3,0,0,F0,0,D,[Oe],0,3,0,["ej",function(b,c,d){return ACv(this,b,c,d);},"oK",function(b,c,d){return ABZ(this,
b,c,d);},"eI",function(b,c,d){return AEI(this,b,c,d);},"sO",function(b,c,d){return ANg(this,b,c,d);},"lg",function(b,c,d){return AAB(this,b,c,d);}],L2,0,D,[],0,3,BA,0,ANe,0,D,[],0,3,0,0]);
$rt_metadata([Gh,0,D,[],0,3,0,0,CS,0,Gh,[],0,3,0,["o_",function(b,c){YN(this,b,c);},"I1",function(b,c,d){Zm(this,b,c,d);},"Cd",function(b,c,d){A2v(this,b,c,d);},"iE",function(b){AMR(this,b);},"hV",function(){AP4(this);},"rB",function(){A3e(this);},"pt",function(){AH6(this);},"oa",function(){return AVp(this);}],AFc,0,D,[],0,3,0,0,Mm,0,D,[Dc],1,3,0,0,Et,0,Mm,[Dc],0,3,0,0,N_,0,D,[],3,3,0,0,I4,0,D,[Dc,N_],1,3,0,0,Wg,0,D,[N_],3,3,0,0,NZ,0,D,[Wg],3,3,0,0,R0,0,D,[],3,3,0,0,Me,0,D,[R0],3,3,0,0,U1,0,I4,[Dc,NZ,Me],0,
3,0,0,We,0,D,[NZ],3,3,0,0,RU,0,D,[Me],3,3,0,0,G_,0,I4,[Dc,We,RU],0,3,0,0,SY,0,D,[GH],0,3,0,["ks",function(){AIz(this);}],AOX,"CoderMalfunctionError",7,Fg,[],0,3,0,0,H6,0,D,[],3,3,0,0,Us,0,D,[H6],3,3,0,0,ACY,0,D,[Us],0,0,0,0,RD,0,D,[],0,0,0,0,KI,0,D,[],0,3,0,0,Wf,0,D,[],0,3,0,0,Qk,0,D,[],0,3,0,0,AKU,0,Ev,[],0,3,0,["o$",function(){AZ9(this);}],ACj,0,Ev,[],0,3,0,["o$",function(){A8P(this);}],AR4,0,Ev,[],0,3,0,["o$",function(){A3s(this);}],Xq,0,D,[],3,3,0,0,AAt,0,D,[Xq],0,3,0,0,AG$,0,CS,[],0,3,0,["rB",function()
{A5n(this);},"o_",function(b,c){ANK(this,b,c);},"hV",function(){AIq(this);},"iE",function(b){ACp(this,b);},"hP",function(b,c,d){ZB(this,b,c,d);}],OZ,0,D,[],0,3,0,0,Ns,0,Gh,[],0,3,0,0,Ju,"EntityPlayer",12,EQ,[],0,3,0,["BJ",function(){AFU(this);},"Fx",function(b){ALb(this,b);},"BA",function(b,c){AZs(this,b,c);},"rJ",function(){return A5e(this);},"fr",function(b,c){return Yp(this,b,c);}],AGz,"EntityPlayerSP",12,Ju,[],0,3,0,["wK",function(){AAO(this);},"or",function(){ALk(this);}],AJE,0,D,[],0,3,0,0,Qn,0,D,[],0,
3,0,0,Vn,0,D,[],0,3,0,0,FE,0,D,[],3,3,0,0,VB,0,D,[FE],0,3,0,["j6",function(b,c){return En(this,b,c);},"jD",function(b,c){AFB(this,b,c);},"gx",function(b){return RO(this,b);},"f6",function(){return AZp(this);},"kk",function(){AAn(this);}],Du,0,IZ,[],0,3,0,0,Ex,0,CS,[],1,3,0,["hP",function(b,c,d){ACg(this,b,c,d);},"I1",function(b,c,d){AN4(this,b,c,d);},"Cd",function(b,c,d){A9G(this,b,c,d);},"o_",function(b,c){AAv(this,b,c);},"pt",function(){AAY(this);},"oa",function(){return A$0(this);}],APM,0,Ex,[],0,3,0,["pt",
function(){ALH(this);},"tp",function(b){ATQ(this,b);},"lu",function(){AZ4(this);},"hP",function(b,c,d){ADX(this,b,c,d);},"s3",function(b){X8(this,b);}],I6,0,D,[],0,3,0,0,Rr,0,D,[],0,0,0,0,Tg,0,D,[],0,3,0,0,AHm,0,D,[],0,3,0,0,Cd,0,D,[],4,3,0,0,ZJ,0,D,[FE],0,3,0,["gx",function(b){return Gj(this,b);},"j6",function(b,c){return AEW(this,b,c);},"jD",function(b,c){A3A(this,b,c);},"f6",function(){return A8X(this);},"kk",function(){ADO(this);}],AAD,0,D,[FE],0,3,0,["gx",function(b){return A43(this,b);},"j6",function(b,
c){return AWA(this,b,c);},"jD",function(b,c){Pj(this,b,c);},"f6",function(){return AYT(this);},"kk",function(){ANh(this);}],HL,0,D,[],0,3,0,["Jk",function(){AK8(this);},"s7",function(b){return AXe(this,b);},"rW",function(){return A9P(this);}]]);
$rt_metadata([ADd,0,HL,[],0,0,0,["s7",function(b){return A0i(this,b);},"Jk",function(){AN7(this);}],QI,0,HL,[],0,0,0,["s7",function(b){return A2Q(this,b);},"rW",function(){return AWu(this);}],V_,0,D,[],4,3,0,0,Sz,0,D,[],4,3,0,0,M4,0,Fk,[DM],1,3,0,0,Dg,0,D,[],1,3,0,0,AIF,0,Dg,[],0,3,0,["iQ",function(b,c,d,e,f,g){AC5(this,b,c,d,e,f,g);}],Pb,0,D,[],4,3,0,0,QB,0,D,[DP],0,0,0,["gR",function(b){return A7p(this,b);}],QA,0,D,[DP],0,0,0,["gR",function(b){return A7B(this,b);}],Iw,0,M4,[],1,0,0,0,US,0,Iw,[],0,0,0,["ys",
function(b){return AOJ(this,b);},"u8",function(b,c){ANH(this,b,c);},"m3",function(){return ASO(this);}],V4,0,D,[],4,3,0,0,V0,0,D,[],4,3,0,0,Xf,0,D,[],4,3,0,0,Jn,"UnsupportedOperationException",9,B6,[],0,3,0,0,UG,0,CS,[],0,3,0,["hV",function(){ADf(this);},"iE",function(b){AOC(this,b);},"hP",function(b,c,d){AMz(this,b,c,d);}],FV,"ReadOnlyBufferException",6,Jn,[],0,3,0,0,Hc,"BufferOverflowException",6,B6,[],0,3,0,0,Gu,"BufferUnderflowException",6,B6,[],0,3,0,0,Tw,0,D,[],0,3,0,0,ACl,0,D,[],0,3,0,0,Rx,0,CS,[],0,
3,0,0,Mn,0,CS,[],0,3,0,["hV",function(){AOl(this);},"o_",function(b,c){AMj(this,b,c);},"iE",function(b){AOv(this,b);},"hP",function(b,c,d){APm(this,b,c,d);},"oa",function(){return A6N(this);}],C1,"EntityFX",12,C5,[],0,3,0,["ep",function(){ALl(this);},"kT",function(b,c,d,e,f,g,h){ANs(this,b,c,d,e,f,g,h);},"xx",function(){return A7Y(this);}],AAZ,0,CS,[],0,3,0,["hV",function(){ARa(this);},"iE",function(b){ADl(this,b);},"rB",function(){A2d(this);},"hP",function(b,c,d){ADK(this,b,c,d);}],Lz,0,D,[],0,3,0,0,WB,0,Lz,
[],0,3,0,0,Q4,0,D,[],3,3,0,0,AFQ,0,D,[Q4],0,3,0,0,O4,0,D,[],0,3,0,0,Ih,0,D,[FE],0,3,0,["gn",function(){return A6r(this);},"w8",function(){return A6e(this);},"gx",function(b){return AS7(this,b);},"j6",function(b,c){return A3f(this,b,c);},"jD",function(b,c){AWQ(this,b,c);},"f6",function(){return A97(this);},"kk",function(){Yx(this);}],ZF,"EntityDiggingFX",12,C1,[],0,3,0,["xx",function(){return ATD(this);},"kT",function(b,c,d,e,f,g,h){YK(this,b,c,d,e,f,g,h);}],KS,"ConcurrentModificationException",4,B6,[],0,3,0,
0,JM,"EntityRainFX",12,C1,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AKK(this,b,c,d,e,f,g,h);},"ep",function(){AOx(this);}],IO,0,Iw,[],1,0,0,["m3",function(){return AXL(this);}],Pd,0,IO,[],0,0,0,["ys",function(b){return AV_(this,b);},"u8",function(b,c){ASN(this,b,c);}],VL,0,IO,[],0,0,0,["ys",function(b){return A0O(this,b);},"u8",function(b,c){ATG(this,b,c);}],AKS,0,D,[FB],0,3,0,["qf",function(b,c){return A07(this,b,c);}],V9,0,D,[FB],0,3,0,["qf",function(b,c){return A9D(this,b,c);}],Hs,0,D,[],0,3,0,0,HX,0,D,[],0,
3,0,0,H0,0,D,[],0,3,0,0,Nf,0,D,[],0,3,0,0,JZ,"NoSuchElementException",4,B6,[],0,3,0,0,VT,0,D,[],0,3,0,["eo",function(b){return A6m(this,b);},"fk",function(){return A1p(this);}],Ot,0,Fa,[DM],0,3,0,0,Hm,0,D,[],0,0,0,0,Ng,0,D,[],4,3,0,0,R8,0,D,[],0,3,0,0]);
$rt_metadata([DJ,0,Dg,[],0,3,0,["H3",function(b,c,d,e,f,g){Z_(this,b,c,d,e,f,g);},"k9",function(b,c){return APR(this,b,c);},"CE",function(b){return A5g(this,b);},"CH",function(b,c,d){return A6v(this,b,c,d);},"xg",function(b,c){A8$(this,b,c);},"iQ",function(b,c,d,e,f,g){AOW(this,b,c,d,e,f,g);}],OM,0,DJ,[],0,3,0,["k9",function(b,c){return Y8(this,b,c);},"H3",function(b,c,d,e,f,g){AL2(this,b,c,d,e,f,g);},"iQ",function(b,c,d,e,f,g){ACK(this,b,c,d,e,f,g);}],LA,0,Gh,[],0,3,0,0,L_,0,D,[MS],0,3,0,0,Qs,0,D,[],3,3,0,
0,Kr,0,L_,[Qs],0,3,0,0,Os,0,D,[Da],3,3,0,0,Qz,0,D,[Os],0,0,0,["Ge",function(){return A1A(this);}],WH,0,D,[FB],0,3,0,["qf",function(b,c){return A4O(this,b,c);}],WF,0,D,[FB],0,3,0,0,R$,0,Fb,[],4,0,0,0,R9,0,FY,[],4,0,0,0,R_,0,Gg,[],4,0,0,0,IB,0,D,[],1,3,0,0,AA2,0,IB,[],0,3,0,["CS",function(b,c,d,e,f){XC(this,b,c,d,e,f);}],Ny,0,D_,[],0,3,0,["tN",function(){AC2(this);}],ARX,0,IB,[],0,3,0,["CS",function(b,c,d,e,f){ARb(this,b,c,d,e,f);}],AQg,0,DJ,[],0,3,0,["CE",function(b){return A6h(this,b);},"k9",function(b,c){return Yb(this,
b,c);}],T6,0,DJ,[],0,3,0,["k9",function(b,c){return AMa(this,b,c);}],F3,0,Ei,[],0,3,0,["hK",function(b,c,d,e,f,g){A9X(this,b,c,d,e,f,g);}],PV,0,F3,[],0,3,0,0,TC,0,DJ,[],0,3,0,["k9",function(b,c){return ARp(this,b,c);}],ACG,0,F3,[],0,3,0,0,ARe,0,F3,[],0,3,0,0,AB8,0,DJ,[],0,3,0,["xg",function(b,c){A7U(this,b,c);},"CH",function(b,c,d){return AZV(this,b,c,d);}],HR,0,MA,[],0,3,0,["oi",function(b,c,d,e,f,g){A2H(this,b,c,d,e,f,g);}],AIl,0,HR,[],0,3,0,0,K_,"EntityGiant",12,DQ,[],0,3,0,["sD",function(b,c,d){return AO7(this,
b,c,d);}],T_,0,DJ,[],0,3,0,["xg",function(b,c){A$Y(this,b,c);}],TJ,0,Dg,[],0,3,0,["iQ",function(b,c,d,e,f,g){AJq(this,b,c,d,e,f,g);}],IG,"EntityPainting",12,C5,[],0,3,0,["ep",function(){ADj(this);},"lw",function(){return AXN(this);},"fr",function(b,c){return AEp(this,b,c);}],AAr,0,Dg,[],0,3,0,["iQ",function(b,c,d,e,f,g){AOQ(this,b,c,d,e,f,g);}],Js,"EntityArrow",12,C5,[],0,3,0,["ep",function(){APs(this);},"xG",function(b){A7z(this,b);}],Rw,0,Dg,[],0,3,0,["iQ",function(b,c,d,e,f,g){ADh(this,b,c,d,e,f,g);}],E9,
"EntityItem",12,C5,[],0,3,0,["ep",function(){AJC(this);},"HH",function(){return AEd(this);},"FU",function(b){AMt(this,b);},"fr",function(b,c){return Vg(this,b,c);},"xG",function(b){A_b(this,b);}],Ms,"EntityTNTPrimed",12,C5,[],0,3,0,["lw",function(){return A$b(this);},"ep",function(){XI(this);}],AOU,0,Dg,[],0,3,0,["iQ",function(b,c,d,e,f,g){AL5(this,b,c,d,e,f,g);}],JK,"EntityFallingSand",12,C5,[],0,3,0,["lw",function(){return AYh(this);},"ep",function(){AMM(this);}],AQL,0,Dg,[],0,3,0,["iQ",function(b,c,d,e,f,
g){ARi(this,b,c,d,e,f,g);}],Gi,"EntityMinecart",12,C5,[FE],0,3,0,["AW",function(b){return ASP(this,b);},"Bt",function(){return AZ1(this);},"rR",function(){return A7C(this);},"Ac",function(){return AVM(this);},"fr",function(b,c){return ALe(this,b,c);},"lw",function(){return A9J(this);},"C4",function(){APe(this);},"ep",function(){ASE(this);},"uZ",function(b){A3N(this,b);},"uJ",function(b){return A8M(this,b);}],ARx,0,Dg,[],0,3,0,["iQ",function(b,c,d,e,f,g){AQd(this,b,c,d,e,f,g);}],V7,0,D,[],0,3,0,0,ABB,0,D,[],
0,3,0,0,AH4,0,Ei,[],0,3,0,["hK",function(b,c,d,e,f,g){AX$(this,b,c,d,e,f,g);}],AIy,0,Ei,[],0,3,0,["hK",function(b,c,d,e,f,g){A21(this,b,c,d,e,f,g);}],AEV,0,Ei,[],0,3,0,0,Tv,0,D,[H6],0,0,0,["qk",function(){return KC(this);},"mU",function(){return KT(this);}],I5,0,D,[],0,3,0,0,It,0,D,[Oe],0,3,0,["ej",function(b,c,d){return HA(this,b,c,d);},"sO",function(b,c,d){return AAN(this,b,c,d);},"eI",function(b,c,d){return AC4(this,b,c,d);},"oK",function(b,c,d){return N5(this,b,c,d);},"lg",function(b,c,d){return AB5(this,
b,c,d);}],Gl,0,BE,[],0,3,0,0]);
$rt_metadata([UT,"NoSuchMethodException",9,Gl,[],0,3,0,0,Vc,0,D,[],0,3,0,0,PL,0,Go,[],0,0,0,["rz",function(b){return A0n(this,b);},"kY",function(){return Nh(this);}],Ts,0,D,[Os],0,0,0,["Ge",function(){return A_u(this);}],AQE,0,D,[],4,3,0,0,WV,0,D_,[FE],0,3,0,["gx",function(b){return A9m(this,b);},"j6",function(b,c){return A8f(this,b,c);},"jD",function(b,c){AVq(this,b,c);},"f6",function(){return AT4(this);},"tN",function(){AGC(this);},"kk",function(){Z3(this);}],Te,0,D_,[FE],0,3,0,["gn",function(){return AVK(this);
},"gx",function(b){return Rb(this,b);},"j6",function(b,c){return A1Q(this,b,c);},"jD",function(b,c){AHx(this,b,c);},"w8",function(){return A8y(this);},"f6",function(){return A7i(this);}],CQ,0,D,[],1,3,0,0,APN,0,CQ,[],0,3,0,["gN",function(b){A6_(this,b);},"gF",function(b){A9g(this,b);},"fc",function(){return A69(this);}],P3,"BufferUnderflowException",7,B6,[],0,3,0,0,SI,"BufferOverflowException",7,B6,[],0,3,0,0,RX,"MalformedInputException",7,G0,[],0,3,0,["lU",function(){return AVO(this);}],PZ,"UnmappableCharacterException",
7,G0,[],0,3,0,["lU",function(){return AVh(this);}],IM,0,D,[],0,0,0,["qk",function(){return Gb(this);}],U_,0,IM,[H6],0,0,0,["mU",function(){return Mf(this);}],Ws,0,D,[],0,3,0,0,AEy,0,CS,[],0,3,0,["hV",function(){ARY(this);},"iE",function(b){ADV(this,b);},"hP",function(b,c,d){AF_(this,b,c,d);}],Oy,0,CS,[],0,3,0,["hV",function(){APt(this);},"s9",function(){AXz(this);},"iE",function(b){ASv(this,b);},"IP",function(b){AKL(this,b);},"hP",function(b,c,d){AEB(this,b,c,d);}],LZ,"InstantiationException",9,Gl,[],0,3,0,
0,S_,"IllegalAccessException",9,Gl,[],0,3,0,0,ALt,0,D,[],4,3,0,0,AAb,0,D,[],4,3,0,0,AMh,0,D,[Dc],4,3,0,0,ABX,0,LA,[],0,3,0,0,NP,0,CS,[],0,3,0,["hV",function(){AJr(this);},"iE",function(b){AId(this,b);},"o_",function(b,c){ALN(this,b,c);},"hP",function(b,c,d){AGu(this,b,c,d);}],UY,0,Oy,[],0,3,0,["s9",function(){A1O(this);},"IP",function(b){AL9(this,b);}],NS,0,D,[],0,3,0,0,Ym,0,NS,[],0,3,0,0,QW,0,D,[],0,3,AYX,0,Co,0,D,[],1,0,0,["eJ",function(b,c,d){return Jd(this,b,c,d);},"eW",function(b,c,d,e){return Jo(this,
b,c,d,e);},"oF",function(){return A4m(this);},"cb",function(b){A1j(this,b);},"d4",function(b){return A$u(this,b);},"lA",function(){return A_c(this);},"iY",function(){K8(this);}],N1,0,CQ,[],0,3,0,["gF",function(b){A9d(this,b);},"gN",function(b){A0l(this,b);},"fc",function(){return AUF(this);}],DW,0,Co,[],0,0,0,["k",function(b,c,d){return ATH(this,b,c,d);},"b4",function(b){return AT3(this,b);}],HW,0,D,[],0,0,0,0,AQ_,"PatternSyntaxException",5,Cb,[],0,3,0,["lU",function(){return A$$(this);}],Mx,0,CQ,[],0,3,0,["gN",
function(b){A8B(this,b);},"gF",function(b){A75(this,b);},"fc",function(){return A6H(this);}],MX,0,CQ,[],0,3,0,["gN",function(b){AWi(this,b);},"gF",function(b){AZy(this,b);},"fc",function(){return A5J(this);}],Lj,0,CQ,[],0,3,0,["gN",function(b){A14(this,b);},"gF",function(b){AY5(this,b);},"fc",function(){return AVl(this);}],Oa,0,CQ,[],0,3,0,["gN",function(b){ATd(this,b);},"gF",function(b){A_n(this,b);},"fc",function(){return A2F(this);}],Ph,0,CQ,[],0,3,0,["gN",function(b){AS6(this,b);},"gF",function(b){A7X(this,
b);},"fc",function(){return ASK(this);}],Mq,0,CQ,[],0,3,0,["gN",function(b){A6Z(this,b);},"gF",function(b){AU5(this,b);},"fc",function(){return A0T(this);}],MH,0,CQ,[],0,3,0,["gN",function(b){A48(this,b);},"gF",function(b){A7g(this,b);},"fc",function(){return A9A(this);}],OF,0,CQ,[],0,3,0,["gN",function(b){A$R(this,b);},"gF",function(b){AY6(this,b);},"fc",function(){return ATo(this);}],QS,0,CQ,[],0,3,0,["gN",function(b){A9v(this,b);},"gF",function(b){AYZ(this,b);},"fc",function(){return AYz(this);}],Tz,0,D,
[DH],0,0,0,["gw",function(){return AUo(this);}],Ty,0,D,[DH],0,0,0,["gw",function(){return AXo(this);}],ARQ,0,D,[],0,3,0,0,XX,0,D,[],0,3,0,0,XQ,0,D,[],0,3,0,0,AEa,0,D,[],0,3,0,0,ARP,0,D,[],0,3,0,0]);
$rt_metadata([AE9,0,D,[],0,3,0,0,Yj,0,D,[FB],0,0,0,["qf",function(b,c){return AZv(this,b,c);}],QF,0,DW,[],0,0,0,["k",function(b,c,d){return A3v(this,b,c,d);},"b4",function(b){return A9w(this,b);}],AR8,0,DW,[],0,0,0,["k",function(b,c,d){return A4K(this,b,c,d);}],PU,0,DW,[],0,0,0,["k",function(b,c,d){return AT9(this,b,c,d);}],Q5,0,DW,[],0,0,0,["k",function(b,c,d){return A3x(this,b,c,d);},"b4",function(b){return A8L(this,b);}],HU,0,DW,[],0,0,0,["k",function(b,c,d){return A1u(this,b,c,d);}],CI,0,Co,[],1,0,0,["k",
function(b,c,d){return A_w(this,b,c,d);},"eb",function(){return A98(this);},"b4",function(b){return AW6(this,b);}],AFT,0,CI,[],0,0,0,["dn",function(b,c){return A9K(this,b,c);},"eJ",function(b,c,d){return A5z(this,b,c,d);},"eW",function(b,c,d,e){return A4B(this,b,c,d,e);},"b4",function(b){return A3w(this,b);}],CE,0,Co,[],0,0,0,["k",function(b,c,d){return AWp(this,b,c,d);},"cb",function(b){AZj(this,b);},"d4",function(b){return A7c(this,b);},"b4",function(b){return AZQ(this,b);},"iY",function(){AUG(this);}],K1,
0,CE,[],0,0,0,["k",function(b,c,d){return AZb(this,b,c,d);},"b4",function(b){return A9i(this,b);}],EW,0,K1,[],0,0,0,["k",function(b,c,d){return A42(this,b,c,d);},"cb",function(b){A83(this,b);}],Tb,0,EW,[],0,0,0,["k",function(b,c,d){return AZf(this,b,c,d);},"b4",function(b){return A1l(this,b);}],WJ,0,EW,[],0,0,0,["k",function(b,c,d){return ATW(this,b,c,d);},"b4",function(b){return A$a(this,b);}],Va,0,EW,[],0,0,0,["k",function(b,c,d){return AUD(this,b,c,d);},"b4",function(b){return A_K(this,b);}],Rh,0,EW,[],0,
0,0,["k",function(b,c,d){return A2$(this,b,c,d);},"b4",function(b){return A9o(this,b);}],IA,0,CE,[],0,0,0,["k",function(b,c,d){return ATb(this,b,c,d);},"eJ",function(b,c,d){return AX8(this,b,c,d);},"eW",function(b,c,d,e){return A9z(this,b,c,d,e);},"d4",function(b){return A6$(this,b);},"lA",function(){return A8J(this);},"iY",function(){A10(this);}],H1,0,D,[],1,0,0,0,Bm,0,H1,[],1,0,0,["hE",function(){return A3_(this);},"kp",function(){return A3H(this);},"sP",function(){return A92(this);},"nS",function(){return A$_(this);
}],ZL,"CharClass",5,Bm,[],0,0,0,["Y",function(b){return D6(this,b);},"hE",function(){return DY(this);},"kp",function(){return A5s(this);},"sP",function(){return A1b(this);},"gl",function(){return A7Z(this);},"nS",function(){return AVV(this);}],MR,"MissingResourceException",4,B6,[],0,3,0,0,E4,0,Co,[],1,0,0,["d4",function(b){return A0o(this,b);},"b4",function(b){return A$G(this,b);},"iY",function(){AYt(this);}],D8,0,E4,[],0,0,0,["k",function(b,c,d){return A2_(this,b,c,d);}],GF,0,D8,[],0,0,0,["k",function(b,c,
d){return A3Y(this,b,c,d);}],DX,0,E4,[],0,0,0,["k",function(b,c,d){return A3o(this,b,c,d);}],FX,0,D8,[],0,0,0,["k",function(b,c,d){return A7m(this,b,c,d);},"cb",function(b){A2K(this,b);}],Sr,0,D8,[],0,0,0,["k",function(b,c,d){return A_r(this,b,c,d);},"eJ",function(b,c,d){return AYJ(this,b,c,d);}],EA,"NumberFormatException",9,Cb,[],0,3,0,0,Tm,"Quantifier",5,H1,[ET],0,0,0,["gl",function(){return A78(this);}],TO,0,Co,[],0,0,0,["k",function(b,c,d){return AXt(this,b,c,d);},"b4",function(b){return A8I(this,b);}],WX,
0,D,[ET,Dc],0,3,0,0,OI,0,CE,[],0,0,0,0,P7,0,CE,[],0,0,0,["k",function(b,c,d){return ATF(this,b,c,d);},"cb",function(b){A8v(this,b);},"b4",function(b){return AUd(this,b);},"d4",function(b){return ATZ(this,b);}],EP,0,CE,[],0,0,0,["k",function(b,c,d){return A5l(this,b,c,d);},"Y",function(b){return AV8(this,b);},"d4",function(b){return ATA(this,b);},"cb",function(b){A9Y(this,b);},"b4",function(b){return AVP(this,b);}],MQ,0,EP,[],0,0,0,["Y",function(b){return AW7(this,b);}],Zv,0,CI,[],0,0,0,["dn",function(b,c){return A6T(this,
b,c);}],Fo,0,CI,[],0,0,0,["dn",function(b,c){return S7(this,b,c);},"d4",function(b){return AZm(this,b);}],T5,0,CE,[],0,0,0,["cb",function(b){AYa(this,b);},"k",function(b,c,d){return ASR(this,b,c,d);},"d4",function(b){return A4f(this,b);},"b4",function(b){return A1e(this,b);}],Fw,0,CI,[],0,0,0,["eb",function(){return A6L(this);},"dn",function(b,c){return AWB(this,b,c);},"eJ",function(b,c,d){return AVD(this,b,c,d);},"eW",function(b,c,d,e){return AXi(this,b,c,d,e);},"d4",function(b){return A0$(this,b);}],AGP,0,
CI,[],0,0,0,["dn",function(b,c){return A2T(this,b,c);}],XO,0,CI,[],0,0,0,["dn",function(b,c){return AS8(this,b,c);}],GK,0,CE,[],0,0,0,["cb",function(b){A_e(this,b);},"k",function(b,c,d){return AZa(this,b,c,d);},"d4",function(b){return AXw(this,b);},"b4",function(b){return A85(this,b);}],SJ,0,GK,[],0,0,0,0,V3,0,GK,[],0,0,0,0,S4,0,DX,[],0,0,0,["k",function(b,c,d){return A4M(this,b,c,d);}],Uy,0,DX,[],0,0,0,["k",function(b,c,d){return A7L(this,b,c,d);}],Hx,0,DX,[],0,0,0,["k",function(b,c,d){return A9V(this,b,c,
d);},"cb",function(b){A$O(this,b);}],PN,0,Hx,[],0,0,0,["k",function(b,c,d){return AXf(this,b,c,d);},"cb",function(b){A7$(this,b);}],G$,0,DX,[],0,0,0,["k",function(b,c,d){return A_G(this,b,c,d);}],OU,0,G$,[],0,0,0,["k",function(b,c,d){return AWS(this,b,c,d);}]]);
$rt_metadata([Qv,0,DX,[],0,0,0,["k",function(b,c,d){return A19(this,b,c,d);}],UR,0,Hx,[],0,0,0,["k",function(b,c,d){return AUf(this,b,c,d);}],RP,0,G$,[],0,0,0,["k",function(b,c,d){return A3B(this,b,c,d);}],Qw,0,E4,[],0,0,0,["k",function(b,c,d){return A_y(this,b,c,d);},"eJ",function(b,c,d){return A0K(this,b,c,d);}],TT,0,E4,[],0,0,0,["k",function(b,c,d){return AZn(this,b,c,d);},"eJ",function(b,c,d){return ASU(this,b,c,d);}],Gn,0,D,[],1,0,0,0,Xu,0,D8,[],0,0,0,["k",function(b,c,d){return ATs(this,b,c,d);}],Sn,0,
FX,[],0,0,0,["k",function(b,c,d){return AYy(this,b,c,d);}],Uf,0,GF,[],0,0,0,["k",function(b,c,d){return A9C(this,b,c,d);}],UP,0,D8,[],0,0,0,["k",function(b,c,d){return AZg(this,b,c,d);}],V5,0,FX,[],0,0,0,["k",function(b,c,d){return ATw(this,b,c,d);}],Qg,0,GF,[],0,0,0,["k",function(b,c,d){return A9L(this,b,c,d);}],ABK,0,Co,[],4,0,0,["k",function(b,c,d){return A7b(this,b,c,d);},"b4",function(b){return A6E(this,b);}],AAm,0,Co,[],0,0,0,["k",function(b,c,d){return A39(this,b,c,d);},"b4",function(b){return A4d(this,
b);}],AJo,0,Co,[],0,0,0,["k",function(b,c,d){return AW_(this,b,c,d);},"b4",function(b){return A2u(this,b);}],SG,0,Co,[],4,0,0,["k",function(b,c,d){return A8W(this,b,c,d);},"b4",function(b){return A4E(this,b);}],AQ4,0,Co,[],0,0,0,["k",function(b,c,d){return A8q(this,b,c,d);},"b4",function(b){return A2S(this,b);}],AIN,0,Co,[],0,0,0,["k",function(b,c,d){return A4z(this,b,c,d);},"b4",function(b){return AWj(this,b);}],AGf,0,CE,[],0,0,0,["k",function(b,c,d){return A2c(this,b,c,d);},"cb",function(b){A4i(this,b);},
"oF",function(){return A8d(this);},"b4",function(b){return A4g(this,b);}],ZH,0,CE,[],4,0,0,["k",function(b,c,d){return A8l(this,b,c,d);},"cb",function(b){A9s(this,b);},"oF",function(){return ASF(this);},"b4",function(b){return A2j(this,b);}],AQH,0,Co,[],4,0,0,["k",function(b,c,d){return AXD(this,b,c,d);},"b4",function(b){return A5O(this,b);}],AN5,0,Co,[],0,0,0,["k",function(b,c,d){return AY4(this,b,c,d);},"b4",function(b){return A5K(this,b);}],AH_,0,Co,[],0,0,0,["k",function(b,c,d){return A6z(this,b,c,d);},
"b4",function(b){return AUR(this,b);}],IR,0,CE,[],0,0,0,["k",function(b,c,d){return ATt(this,b,c,d);},"cb",function(b){A81(this,b);},"b4",function(b){return AZ_(this,b);}],AQS,0,IR,[],0,0,0,["k",function(b,c,d){return AUY(this,b,c,d);},"eJ",function(b,c,d){return A1k(this,b,c,d);},"eW",function(b,c,d,e){return ATl(this,b,c,d,e);},"d4",function(b){return A7F(this,b);}],AMc,0,IR,[],0,0,0,["k",function(b,c,d){return AX6(this,b,c,d);}],AMQ,0,CI,[],0,0,0,["dn",function(b,c){return AVc(this,b,c);},"eJ",function(b,
c,d){return A38(this,b,c,d);},"eW",function(b,c,d,e){return A5V(this,b,c,d,e);},"d4",function(b){return AWL(this,b);}],XF,0,CI,[],0,0,0,["dn",function(b,c){return AX9(this,b,c);}],OX,0,CI,[],0,0,0,["dn",function(b,c){return A9E(this,b,c);}],H_,0,D,[],4,0,0,0,By,0,D,[],1,0,0,0,S$,0,CI,[],0,0,0,["dn",function(b,c){return A0s(this,b,c);}],NL,0,CE,[],0,0,0,["cb",function(b){A8D(this,b);},"k",function(b,c,d){return A4F(this,b,c,d);},"eJ",function(b,c,d){return AWK(this,b,c,d);},"eW",function(b,c,d,e){return A45(this,
b,c,d,e);},"d4",function(b){return ATg(this,b);},"b4",function(b){return A01(this,b);}],NR,0,CE,[],0,0,0,["cb",function(b){A4q(this,b);},"k",function(b,c,d){return ASW(this,b,c,d);},"eJ",function(b,c,d){return A8O(this,b,c,d);},"eW",function(b,c,d,e){return A0q(this,b,c,d,e);},"d4",function(b){return AVd(this,b);},"b4",function(b){return A8Q(this,b);}],EY,0,CI,[],0,0,0,["dn",function(b,c){return A9j(this,b,c);},"eJ",function(b,c,d){return A71(this,b,c,d);},"eW",function(b,c,d,e){return AUn(this,b,c,d,e);},"d4",
function(b){return A9a(this,b);}],Wv,0,Gn,[],4,0,0,["ov",function(b){return AUw(this,b);},"D_",function(b,c){return AZ8(this,b,c);}],Ww,0,Gn,[],4,0,0,["ov",function(b){return A9N(this,b);},"D_",function(b,c){return A1Y(this,b,c);}],AEN,0,D,[],0,0,0,0,Yv,0,D,[],0,0,0,0,NJ,0,By,[],0,0,0,["bW",function(){return AMl(this);}],Na,0,By,[],0,0,0,["bW",function(){return ANM(this);}],AEF,0,By,[],0,0,0,["bW",function(){return A9u(this);}],AFi,0,By,[],0,0,0,["bW",function(){return A03(this);}],AFr,0,By,[],0,0,0,["bW",function()
{return AVF(this);}],NF,0,By,[],0,0,0,["bW",function(){return ZN(this);}],Ma,0,NF,[],0,0,0,["bW",function(){return AAV(this);}],AHP,0,By,[],0,0,0,["bW",function(){return A6c(this);}],OB,0,Ma,[],0,0,0,["bW",function(){return AH5(this);}],AMN,0,OB,[],0,0,0,["bW",function(){return AYv(this);}],ACJ,0,By,[],0,0,0,["bW",function(){return A4W(this);}]]);
$rt_metadata([AAh,0,By,[],0,0,0,["bW",function(){return AYm(this);}],AJ8,0,By,[],0,0,0,["bW",function(){return A1Z(this);}],AP_,0,By,[],0,0,0,["bW",function(){return A8b(this);}],AHX,0,By,[],0,0,0,["bW",function(){return A2Z(this);}],APn,0,By,[],0,0,0,["bW",function(){return AWV(this);}],AEn,0,By,[],0,0,0,["bW",function(){return A0b(this);}],AFW,0,By,[],0,0,0,["bW",function(){return A4U(this);}],YY,0,By,[],0,0,0,["bW",function(){return AVn(this);}],AIu,0,By,[],0,0,0,["bW",function(){return A$3(this);}],APC,
0,By,[],0,0,0,["bW",function(){return A2U(this);}],AE7,0,By,[],0,0,0,["bW",function(){return AXG(this);}],ALa,0,By,[],0,0,0,["bW",function(){return AVt(this);}],ACV,0,By,[],0,0,0,["bW",function(){return A5X(this);}],AG8,0,By,[],0,0,0,["bW",function(){return A61(this);}],APQ,0,By,[],0,0,0,["bW",function(){return A1f(this);}],ABu,0,By,[],0,0,0,["bW",function(){return AZH(this);}],AAH,0,By,[],0,0,0,["bW",function(){return AYN(this);}],AHV,0,By,[],0,0,0,["bW",function(){return A9q(this);}],Lb,0,By,[],0,0,0,["bW",
function(){return ACL(this);}],AQC,0,Lb,[],0,0,0,["bW",function(){return AYE(this);}],AMT,0,NJ,[],0,0,0,["bW",function(){return A32(this);}],AAA,0,Na,[],0,0,0,["bW",function(){return AWx(this);}],AKi,0,By,[],0,0,0,["bW",function(){return AXT(this);}],AKN,0,By,[],0,0,0,["bW",function(){return A1M(this);}],AMx,0,By,[],0,0,0,["bW",function(){return A5H(this);}],AMO,0,By,[],0,0,0,["bW",function(){return ASM(this);}],AKr,0,D,[],4,0,0,0,Zr,0,D,[],4,3,0,0,Tr,0,D,[],0,3,0,0,RV,0,D,[],0,3,0,0,AL7,0,D,[],4,3,0,0,Wj,0,
Ex,[],0,3,0,["lu",function(){A3C(this);},"s3",function(b){AOi(this,b);}],Xj,0,Ex,[],0,3,0,["pt",function(){Y7(this);},"tp",function(b){A6B(this,b);},"lu",function(){A1W(this);},"s3",function(b){AKl(this,b);}],AMC,0,Ex,[],0,3,0,["lu",function(){A9Z(this);},"s3",function(b){ANQ(this,b);}],CW,"EnumArt",12,EX,[],12,3,0,0,PK,0,Fb,[],0,0,0,0,U4,0,CS,[],0,3,0,["hV",function(){AGk(this);},"iE",function(b){AQp(this,b);},"hP",function(b,c,d){YR(this,b,c,d);}],IK,"MinecraftError",12,Fg,[],0,3,0,0,UM,0,D,[],0,3,0,0,Sp,
"AbstractCharClass$1",5,Bm,[],0,0,0,["Y",function(b){return AVJ(this,b);}],So,"AbstractCharClass$2",5,Bm,[],0,0,0,["Y",function(b){return A3k(this,b);}],Ps,"CharClass$18",5,Bm,[],0,0,0,["Y",function(b){return AXQ(this,b);},"gl",function(){return A50(this);}],TW,0,Bm,[],0,0,0,["Y",function(b){return A9l(this,b);}],TU,0,Bm,[],0,0,0,["Y",function(b){return A0r(this,b);}],TV,0,Bm,[],0,0,0,["Y",function(b){return A7k(this,b);}],TZ,0,Bm,[],0,0,0,["Y",function(b){return A4$(this,b);}],T0,0,Bm,[],0,0,0,["Y",function(b)
{return ASG(this,b);}],TX,0,Bm,[],0,0,0,["Y",function(b){return AWr(this,b);}],TY,0,Bm,[],0,0,0,["Y",function(b){return AX_(this,b);}],T2,0,Bm,[],0,0,0,["Y",function(b){return A1m(this,b);}]]);
$rt_metadata([T3,0,Bm,[],0,0,0,["Y",function(b){return A4P(this,b);}],Pr,0,Bm,[],0,0,0,["Y",function(b){return A_P(this,b);}],PF,0,Bm,[],0,0,0,["Y",function(b){return AWw(this,b);}],Pp,0,Bm,[],0,0,0,["Y",function(b){return AU0(this,b);}],Pq,0,Bm,[],0,0,0,["Y",function(b){return A5N(this,b);}],Pv,0,Bm,[],0,0,0,["Y",function(b){return AXb(this,b);}],Po,0,Bm,[],0,0,0,["Y",function(b){return A$i(this,b);}],Pt,0,Bm,[],0,0,0,["Y",function(b){return A4b(this,b);}],Pu,0,Bm,[],0,0,0,["Y",function(b){return AZD(this,
b);}],OQ,0,IA,[],0,0,0,["eJ",function(b,c,d){return AV2(this,b,c,d);},"eW",function(b,c,d,e){return A_E(this,b,c,d,e);},"lA",function(){return AUO(this);}],VF,0,IM,[H6],0,0,0,["mU",function(){return Lm(this);}],Nd,0,Fa,[DM],0,3,0,0,Mr,0,D,[],3,3,0,0,Vx,0,D,[Mr],4,3,0,0,Uk,0,D,[Jc],3,3,0,0,Se,0,D,[Uk],3,3,0,0,S2,0,Fb,[Se],0,3,0,0,SO,0,D,[LU],3,3,0,0,OS,0,D,[SO],3,3,0,0,AJW,0,FY,[ET,Dc,OS],0,3,0,0,QT,0,D,[FB],0,0,0,0,VH,"AbstractCharClass$LazyJavaLowerCase$1",5,Bm,[],0,0,0,["Y",function(b){return A1t(this,b);
}],Td,"AbstractCharClass$LazyJavaUpperCase$1",5,Bm,[],0,0,0,["Y",function(b){return A30(this,b);}],QK,"AbstractCharClass$LazyJavaWhitespace$1",5,Bm,[],0,0,0,["Y",function(b){return ATv(this,b);}],QJ,"AbstractCharClass$LazyJavaMirrored$1",5,Bm,[],0,0,0,["Y",function(b){return A5G(this,b);}],Sx,"AbstractCharClass$LazyJavaDefined$1",5,Bm,[],0,0,0,["Y",function(b){return AW2(this,b);}],Ua,"AbstractCharClass$LazyJavaDigit$1",5,Bm,[],0,0,0,["Y",function(b){return A$M(this,b);}],Pf,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",
5,Bm,[],0,0,0,["Y",function(b){return AZc(this,b);}],U3,"AbstractCharClass$LazyJavaISOControl$1",5,Bm,[],0,0,0,["Y",function(b){return A0f(this,b);}],Ta,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",5,Bm,[],0,0,0,["Y",function(b){return A_t(this,b);}],Tc,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",5,Bm,[],0,0,0,["Y",function(b){return AVf(this,b);}],O8,"AbstractCharClass$LazyJavaLetter$1",5,Bm,[],0,0,0,["Y",function(b){return A1G(this,b);}],Uq,"AbstractCharClass$LazyJavaLetterOrDigit$1",5,Bm,[],0,0,
0,["Y",function(b){return A7x(this,b);}],Ut,"AbstractCharClass$LazyJavaSpaceChar$1",5,Bm,[],0,0,0,["Y",function(b){return A80(this,b);}],VZ,"AbstractCharClass$LazyJavaTitleCase$1",5,Bm,[],0,0,0,["Y",function(b){return A$B(this,b);}],Vy,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",5,Bm,[],0,0,0,["Y",function(b){return A12(this,b);}],OK,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",5,Bm,[],0,0,0,["Y",function(b){return AU8(this,b);}],MC,"UnicodeCategory",5,Bm,[],0,0,0,["Y",function(b){return AZd(this,
b);}],Vl,"UnicodeCategoryScope",5,MC,[],0,0,0,["Y",function(b){return A90(this,b);}],Nk,0,D,[],0,3,0,0,JV,0,D,[DM],0,3,0,["eo",function(b){return A$v(this,b);},"fk",function(){return A7I(this);},"lT",function(b){return TI(this,b);}],La,0,D,[],3,3,0,0,VX,0,D,[La],0,3,0,0,Qe,0,D,[],3,3,0,0,Xl,0,D,[Qe],0,3,0,0,St,0,D,[La],0,3,0,0,Wt,0,D,[Mr],0,0,0,0,VM,0,D,[],0,3,0,0,R7,0,D,[],3,3,0,0,AF3,0,Ge,[R7],0,3,0,0]);
$rt_metadata([AFX,0,D,[],0,3,0,0,NY,0,D,[],4,3,0,0,HP,0,D,[],1,3,0,0,AMP,0,HP,[],0,3,0,0,ACP,0,D,[],0,3,0,0,Py,0,HP,[],0,3,0,0,T8,0,D,[],0,3,0,0,Vq,0,Fa,[DM],0,3,0,0,TD,0,D,[DH],0,0,0,["gw",function(){return A4p(this);}],TA,0,D,[DH],0,0,0,["gw",function(){return AYi(this);}],Rl,0,D,[DH],0,0,0,["gw",function(){return A8N(this);}],Ro,0,D,[DH],0,0,0,["gw",function(){return A7a(this);}],E2,0,EX,[],12,3,0,0,Rm,0,D,[DH],0,0,0,["gw",function(){return A7h(this);}],Rn,0,D,[DH],0,0,0,["gw",function(){return A1F(this);
}],Rj,0,D,[DH],0,0,0,["gw",function(){return A5Q(this);}],Rk,0,D,[DH],0,0,0,["gw",function(){return A3d(this);}],Es,0,D,[],1,3,0,0,Re,0,Es,[],0,3,0,0,Ou,0,D,[],0,3,0,0,SM,0,CS,[],0,3,0,["hV",function(){AD3(this);},"pt",function(){ANG(this);},"rB",function(){AYr(this);},"iE",function(b){AHe(this,b);},"o_",function(b,c){ACX(this,b,c);},"hP",function(b,c,d){ABq(this,b,c,d);}],IJ,0,EX,[],12,3,0,0,MG,0,D,[J1,Dc],0,3,0,0,Lc,0,MG,[],0,0,0,0,AMX,0,Ge,[],0,3,0,["ly",function(){AYs(this);},"gv",function(b,c,d){AXZ(this,
b,c,d);},"tQ",function(){A35(this);},"nN",function(b){AXj(this,b);}],WR,0,D,[],0,3,0,0,Oc,"ArrayIndexOutOfBoundsException",9,BO,[],0,3,0,0,ARh,0,Es,[],0,3,0,0,Ch,0,Es,[],0,3,0,0,BS,0,Es,[],0,3,0,0,Cn,0,Es,[],0,3,0,0,SB,"EntityBubbleFX",12,C1,[],0,3,0,["ep",function(){Y9(this);}],AFn,"EntitySmokeFX",12,C1,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AJ4(this,b,c,d,e,f,g,h);},"ep",function(){ALR(this);}],Q2,"EntityExplodeFX",12,C1,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AR6(this,b,c,d,e,f,g,h);},"ep",function(){AER(this);
}],O3,"EntityFlameFX",12,C1,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AQF(this,b,c,d,e,f,g,h);},"vi",function(b){return ASr(this,b);},"ep",function(){AAQ(this);}],AA1,"EntityLavaFX",12,C1,[],0,3,0,["vi",function(b){return AJ5(this,b);},"kT",function(b,c,d,e,f,g,h){AGQ(this,b,c,d,e,f,g,h);},"ep",function(){ALg(this);}],ARz,"EntitySplashFX",12,JM,[],0,3,0,0,AIn,0,D,[],4,3,0,0,H9,0,D,[],0,0,0,0,Vh,0,D,[],0,3,0,0,ACa,0,D,[],0,3,0,0,U2,"EntityPickupFX",12,C1,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AMg(this,b,c,d,e,f,
g,h);},"ep",function(){AAJ(this);},"xx",function(){return AUt(this);}],Y5,0,D,[],0,3,0,0,HT,0,D,[],0,3,0,["eo",function(b){return A3O(this,b);},"fk",function(){return AVj(this);}],AJg,0,D,[],0,0,0,0]);
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
=$rt_mainStarter(AQ2);
(function(){var c;c=YJ.prototype;c.dispatchEvent=c.Ms;c.addEventListener=c.Yc;c.removeEventListener=c.a0f;c.getLength=c.U9;c.get=c.Sf;c.addEventListener=c.Tv;c.removeEventListener=c.Oe;c=W6.prototype;c.handleEvent=c.gR;c=Xa.prototype;c.handleEvent=c.gR;c=Xb.prototype;c.handleEvent=c.gR;c=W$.prototype;c.handleEvent=c.gR;c=W_.prototype;c.handleEvent=c.gR;c=W8.prototype;c.handleEvent=c.gR;c=W9.prototype;c.handleEvent=c.gR;c=W7.prototype;c.handleEvent=c.gR;c=Qy.prototype;c.handleEvent=c.gR;c=Qx.prototype;c.handleEvent
=c.gR;c=W5.prototype;c.stateChanged=c.a0W;c=TH.prototype;c.handleEvent=c.gw;c=TG.prototype;c.handleEvent=c.gw;c=TF.prototype;c.handleEvent=c.gw;c=TE.prototype;c.handleEvent=c.gR;c=AAX.prototype;c.getLength=c.Zu;c.get=c.QV;c=QB.prototype;c.handleEvent=c.gR;c=QA.prototype;c.handleEvent=c.gR;c=Qz.prototype;c.onTimer=c.Ge;c=Ts.prototype;c.onTimer=c.Ge;c=Tz.prototype;c.handleEvent=c.gw;c=Ty.prototype;c.handleEvent=c.gw;c=TD.prototype;c.handleEvent=c.gw;c=TA.prototype;c.handleEvent=c.gw;c=Rl.prototype;c.handleEvent
=c.gw;c=Ro.prototype;c.handleEvent=c.gw;c=Rm.prototype;c.handleEvent=c.gw;c=Rn.prototype;c.handleEvent=c.gw;c=Rj.prototype;c.handleEvent=c.gw;c=Rk.prototype;c.handleEvent=c.gw;})();
})();

//# sourceMappingURL=app.js.map