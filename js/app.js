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
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.o1=f;}
function $rt_cls(cls){return Mf(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return AIp(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bx.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return D; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Bdd());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return AS0();}
function $rt_setThread(t){return Ft(t);}
function $rt_createException(message){return AAc(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var M=$rt_throw;var R=$rt_compare;var Bde=$rt_nullCheck;var F=$rt_cls;var J=$rt_createArray;var Ss=$rt_isInstance;var C3=$rt_nativeThread;var C=$rt_suspending;var Fe=$rt_resuming;var E_=$rt_invalidPointer;var B=$rt_s;var Br=$rt_eraseClinit;var Bx=$rt_imul;var Bh=$rt_wrapException;
function D(){this.cq=null;this.$id$=0;}
function Bdf(){var a=new D();WQ(a);return a;}
function Bbe(b){var c;if(b.cq===null)VF(b);if(b.cq.ee===null)b.cq.ee=Bdg;else if(b.cq.ee!==Bdg){c=new D2;Bj(c,B(0));M(c);}b=b.cq;b.fi=b.fi+1|0;}
function Bc6(b){var c,d;if(!HH(b)&&b.cq.ee===Bdg){c=b.cq;d=c.fi-1|0;c.fi=d;if(!d)b.cq.ee=null;HH(b);return;}b=new Kw;O(b);M(b);}
function AEe(b){if(b.cq===null)VF(b);if(b.cq.ee===null)b.cq.ee=Bdg;if(b.cq.ee!==Bdg)AXE(b,1);else{b=b.cq;b.fi=b.fi+1|0;}}
function VF(b){b.cq=BaK();}
function AXE(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.GF=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaU(callback);return thread.suspend(function(){try{Bcq(b,c,callback);}catch($e){callback.I6($rt_exception($e));}});}
function Bcq(b,c,d){var e,f,g;e=Bdg;if(b.cq===null){VF(b);Ft(e);b=b.cq;b.fi=b.fi+c|0;CM(d,null);return;}if(b.cq.ee===null){b.cq.ee=e;Ft(e);b=b.cq;b.fi=b.fi+c|0;CM(d,null);return;}f=b.cq;if(f.hk===null)f.hk=AXG();f=f.hk;g=new Rj;g.zX=e;g.zY=b;g.zV=c;g.zW=d;d=g;f.push(d);}
function N9(b){var c;if(!HH(b)&&b.cq.ee===Bdg){c=b.cq;c.fi=c.fi-1|0;if(c.fi<=0){c.ee=null;if(c.hk!==null&&!JP(c.hk)){c=new SY;c.Dy=b;Q$(c);}else HH(b);}return;}b=new Kw;O(b);M(b);}
function HH(a){var b;b=a.cq;if(b===null)return 1;a:{if(b.ee===null&&!(b.hk!==null&&!JP(b.hk))){if(b.rm===null)break a;if(JP(b.rm))break a;}return 0;}a.cq=null;return 1;}
function WQ(a){return;}
function Dm(a){return Mf(a.constructor);}
function A5c(a){return M3(a);}
function Rc(a,b){return a!==b?0:1;}
function AUD(a){var b,c,d,e,f,g,h,i;b=new T;V(b);b=H(H(b,IC(Dm(a))),B(1));c=M3(a);if(!c)d=B(2);else{e=(((32-TH(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=I1(c>>>e&15,16);e=e-4|0;h=i;}d=AIp(f);}return U(H(b,d));}
function M3(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AX3(a){var b,c,d;if(!Ss(a,EU)&&a.constructor.$meta.item===null){b=new Sk;O(b);M(b);}b=ATi(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Xo(a){var b,c;if(!(a.cq!==null&&a.cq.ee===Bdg?1:0)){b=new Kw;O(b);M(b);}b=a.cq.rm;if(b===null)return;while(!JP(b)){c=AO7(b);if(!c.a0t())Q$(c);}a.cq.rm=null;}
function JC(){D.call(this);}
var Bdh=null;var Bdi=null;var Bdj=null;function Bdk(){var a=new JC();ARc(a);return a;}
function ARc(a){return;}
function ARh(b){var c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AKs();AGC();AQz();AAa();AQh();AI8();AC0();ASE();ADj();AK5();AR0();Zg();AHS();Zq();AHy();AL8();AFF();AFH();AOW();AQr();AIg();AOD();ABS();AFQ();AEG();AH8();XQ();ADR();AAm();AMf();AKo();AO4();AHl();ASy();AOp();ALY();AAr();AKJ();APo();AEz();AMX();ALp();AMV();AIX();AGp();AHM();ALg();AAC();AAd();AQn();AJ9();AA4();AIz();AMa();ABx();ANn();AH2();AFK();c
=window.minecraftOpts;if(c===null)d=null;else{d=J(B4,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));Bdh=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){}else if($$je instanceof D8){c=$$je;break a;}else{throw $$e;}}return;}g=A9o();h=new LN;Wm(h,g);h.yw=0;h.mE=g;OO(c,h);return;case 1:b:{c:{d:{try{AAD(c,g);if(C()){break _;}break d;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){}else if($$je instanceof D8)
{c=$$je;break c;}else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Bh($$e);if($$je instanceof D8){c=$$je;}else{throw $$e;}}}g=A9o();h=new LN;Wm(h,g);h.yw=0;h.mE=g;OO(c,h);return;}c=new In;i=LL();j=MS();g=new U0;g.D_=0;g.cX=c;g.wa=(-1);g.wc=(-1);g.wb=(-1);g.hp=0.0;g.mR=0.0;g.oq=0.0;g.nh=0;k=new U7;b=J(FP,4);d=b.data;d[0]=F(I7);d[1]=F(Jq);d[2]=F(J5);d[3]=F(Ky);RR(k,100,F(DP),b);k.GN=g;g.Bw=k;h=new Ja;b=J(FP,2);d=b.data;d[0]=F(KW);d[1]=F(IB);RR(h,20,F(Gz),b);g.BS=h;c.cB=g;g=new SK;g.Dc=1.0;g.lL=0.0;g.nJ=1.0;g.c8
=20.0;g.sW=B9();g.rY=Long_div(EG(),Long_fromInt(1000000));c.bc=g;c.k2=null;c.bs=0;c.D=null;g=new R_;g.q8=B(3);g.n5=B(3);g.ol=B9();g.nF=0;g.ge=c;c.jn=g;c.eV=Bb3(c);c.bO=0;c.c9=0;c.Hw=null;c.Ge=0;c.ia=0;c.GK=XC(0.0);c.cg=null;c.Dq=BaD();c.BY=Bba();c.hA=1;c.lD=B(3);c.gV=Long_fromInt(-1);c.bp=0;c.cp=0;c.cU=0;c.dz=B9();g=new V5;T0(g,B(4));g.yC=c;g.Ew=1;Tt(g);c.cc=i;c.bB=j;Bdl=c;Bdi=c;c=Bdi;g=new MB;Bbw();g.op=B(5);g.Gi=B(6);c.k2=g;Bdi.k2.GP=B(7);Bdj=Bai(Bdi,B(8));Tt(Bdj);return;default:E_();}}C3().s(b,c,d,e,f,g,
h,i,j,k,$p);}
function AKs(){Bdh=null;Bdi=null;Bdj=null;}
function M9(){}
function FP(){var a=this;D.call(a);a.ut=null;a.f2=null;a.mm=null;}
var Bdm=0;function Mf(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new FP;c.f2=b;d=c;b.classObject=d;}return c;}
function A4j(a){return a.f2;}
function UG(a,b){var c;b=b;c=a.f2;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&V4(b.constructor,c)?1:0;}
function Qe(a,b){return V4(b.f2,a.f2);}
function IC(a){if(a.ut===null)a.ut=$rt_str(a.f2.$meta.name);return a.ut;}
function FX(a){return a.f2.$meta.primitive?1:0;}
function AHd(a){return ASi(a.f2)===null?0:1;}
function KL(a){return Mf(ASi(a.f2));}
function A7c(){I7.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jq.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];J5.$meta.methods
=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType
:$rt_voidcls(),callable:null},{name:"setCreeperFlashTime",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_floatcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Ky.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntity",modifiers
:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];KW.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType
:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel
:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null}];IB.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers
:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jy],returnType:$rt_booleancls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jj.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null}];To.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers
:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Cf,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cf,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cf],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable
:null},{name:"writeToNBT",modifiers:4,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null}];W5.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes
:[$rt_intcls()],returnType:Cf,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cf,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cf],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers
:4,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getCookProgressScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getBurnTimeRemainingScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"isBurning",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"canSmelt",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"smeltItem",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSmeltingResult",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getItemBurnTime",modifiers:0,accessLevel
:1,parameterTypes:[Cf],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];NO.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"anyPlayerInRange",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name
:"updateDelay",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null}];DP.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable
:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C5,callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C5,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null}];EQ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"getTexture",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"getEyeHeight",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_floatcls(),callable:null},{name:"onEntityUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"spawnExplosionParticle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updateRidden",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"setSize",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable
:null},{name:"heal",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable
:null},{name:"knockBack",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"onDeath",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"fall",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"moveEntityWithHeading",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"isOnLadder",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"isEntityAlive",modifiers:0,accessLevel:3,parameterTypes:[],returnType:
$rt_booleancls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"jump",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onEntityDeath",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes
:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null},{name:"kill",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Ls.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null}];IF.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI,$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"setDirection",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"getArtSize",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_voidcls(),callable:null},{name:"onValidSurface",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers
:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null}];Jw.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI,EQ],returnType:$rt_voidcls(),callable:null},{name:"setArrowHeading",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers:0,accessLevel:3,parameterTypes:[Jy],returnType:$rt_voidcls(),callable:null}];E$.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI,$rt_doublecls(),$rt_doublecls(),
$rt_doublecls(),Cf],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"handleWaterMovement",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"pushOutOfBlocks",modifiers:0,accessLevel:1,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable
:null},{name:"dealFireDamage",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers
:0,accessLevel:3,parameterTypes:[Jy],returnType:$rt_voidcls(),callable:null}];MH.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI,$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:null},{name:"createExplosion",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null}];JT.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[GI,$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes
:[AP2],returnType:$rt_voidcls(),callable:null},{name:"getWorld",modifiers:0,accessLevel:3,parameterTypes:[],returnType:GI,callable:null}];Gf.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI],returnType:$rt_voidcls(),callable:null},{name:"getCollisionBox",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:I$,callable:null},{name:"getBoundingBox",modifiers:0,accessLevel:3,parameterTypes:[],returnType:I$,callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_booleancls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[GI,$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"getYOffset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_doublecls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C5,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable
:null},{name:"setEntityDead",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getPosOffset",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kv,callable:null},{name:"getPos",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kv,callable:null},{name:
"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[AP2],returnType:$rt_voidcls(),callable:null},{name:"applyEntityCollision",modifiers:0,accessLevel:3,parameterTypes:[C5],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType
:Cf,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cf,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cf],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[Jy],returnType:$rt_booleancls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];}
function ASG(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!FX(a)&&!AHd(a)){if(a.mm===null){if(!Bdm){Bdm=1;A7c();}b=a.f2.$meta.methods;a.mm=J(KE,b.length);c=0;d=0;while(d<b.length){e=b[d];if(DB($rt_str(e.name),B(9))){f=e.parameterTypes;g=J(FP,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=Mf(f[i]);i=i+1|0;}h=a.mm.data;j=c+1|0;k=new KE;l=$rt_str(e.name);m=e.modifiers;i=e.accessLevel;f=JG(e.callable,"call");k.z_=a;k.Ic=l;k.vp=m;k.DD=i;k.nj=g;k.vY=f;h[c]=k;c=j;}d=d+1|0;}a.mm=NH(a.mm,c);}return a.mm.o1();}return J(KE,0);}
function WL(a,b){var c,d,e,f,g,h,i,j,k,l;c=ASG(a).data;d=c.length;e=0;while(true){if(e>=d){f=new U3;O(f);M(f);}g=c[e];if(!(AEo(g)&1)?0:1){a:{h=ABw(g);if(h===b)i=1;else{if(h!==null&&b!==null){j=h.data;h=b.data;k=j.length;if(k==h.length){i=0;while(i<k){f=j[i];l=h[i];if(!(f===l?1:f!==null?Rc(f,l):l!==null?0:1)){i=0;break a;}i=i+1|0;}i=1;break a;}}i=0;}}if(i)break;}e=e+1|0;}return g;}
function JO(a){return Mf(a.f2.$meta.superclass);}
function ZC(a){var b;b=a.f2;if(!Bdn){AXe();Bdn=1;}b=A2J(b);if(b!==null)return b;b=new Mg;O(b);M(b);}
function AKi(){D.call(this);}
function Bdo(){var a=new AKi();A7l(a);return a;}
function A7l(a){return;}
function Cu(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function JG(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function Uc(){D.call(this);}
var Bdn=0;function Bdp(){var a=new Uc();A_F(a);return a;}
function A_F(a){return;}
function ATi(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function V4(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(V4(d[e],c))return 1;e=e+1|0;}return 0;}
function AXe(){var c='$$constructor$$';B4[c]=Ye;D[c]=WQ;AMp[c]=A1K;I2[c]=AVO;Fh[c]=AU2;D8[c]=O;AO6[c]=AW5;IP[c]=AX0;ALS[c]=A3L;B8[c]=ATB;BF[c]=AZ1;T[c]=A_u;HL[c]=V;JC[c]=ARc;ABt[c]=A3e;AKi[c]=A7l;Uc[c]=A_F;Gn[c]=AHQ;Bq[c]=VY;Xe[c]=A2C;Xk[c]=AZx;Xl[c]=AXw;Xi[c]=A5l;Xj[c]=A_2;Xg[c]=A4n;Xh[c]=AXL;Xf[c]=A3i;QI[c]=A2s;QH[c]=A4h;AES[c]=A27;B2[c]=A38;LB[c]=A6y;V9[c]=AZB;AFr[c]=AWn;ZS[c]=A3k;MP[c]=KV;AA5[c]=A_g;AKQ[c]=A1W;AQy[c]=A1n;ACn[c]=AVK;N8[c]=AEk;U4[c]=AQI;ADG[c]=A$w;DA[c]=A3t;Mm[c]=AZU;AJt[c]=AWo;Y5[c]=A0E;Ca[c]
=AUp;AJp[c]=A6k;EE[c]=AU1;NS[c]=AIB;AFi[c]=ATs;Xm[c]=A3I;SI[c]=Z0;Ur[c]=A3o;M$[c]=O0;ABj[c]=AZk;Jj[c]=A0f;D$[c]=ANI;AHV[c]=A1_;B_[c]=AQA;Qc[c]=A9i;Ow[c]=A0a;Mi[c]=ATC;Oi[c]=A7M;AGz[c]=A0v;Sk[c]=A6U;IX[c]=A1d;BQ[c]=AUN;FE[c]=AXl;PX[c]=A60;AMA[c]=ATR;Ga[c]=AHU;Hu[c]=A_D;AOC[c]=A25;XD[c]=A82;Kw[c]=A7x;D2[c]=A99;Z8[c]=A2T;W$[c]=A1A;GZ[c]=AVt;E2[c]=A77;ASr[c]=AX1;O4[c]=Zp;ANJ[c]=A8W;CT[c]=DQ;Ge[c]=Nu;J0[c]=A5U;Bs[c]=APg;ACO[c]=AUC;Es[c]=A5i;Va[c]=A$o;G9[c]=AZ6;Qu[c]=A$N;AK$[c]=A4K;ACv[c]=A3D;AHq[c]=A4F;RN[c]=A03;AJU[c]
=AWt;Qx[c]=ANY;AAR[c]=AS9;AIW[c]=A5M;Jr[c]=AYw;FS[c]=A62;Ha[c]=A59;Gs[c]=A1X;MD[c]=A$g;ABa[c]=AWu;AF8[c]=A9n;To[c]=A2o;W5[c]=AVs;K_[c]=A2F;RH[c]=A64;WM[c]=AFJ;LR[c]=AHI;Pd[c]=ALv;HV[c]=ADm;HX[c]=AGL;J8[c]=A72;OX[c]=AIo;Mr[c]=AV_;Hq[c]=AAx;Nv[c]=ASh;QK[c]=A_w;WR[c]=AVD;WP[c]=A50;Hj[c]=AQX;Nw[c]=AKA;Sf[c]=AS4;Sh[c]=A$k;Sg[c]=A$p;Si[c]=A3X;ABd[c]=ATN;NO[c]=A8r;ASf[c]=AXD;AQx[c]=A4G;P4[c]=AYu;ACU[c]=A$i;ARv[c]=AVq;ACj[c]=AZ2;AIC[c]=AWG;HP[c]=A8s;TT[c]=AZM;AAF[c]=AZS;RG[c]=ATa;AO9[c]=A7w;AQ2[c]=AXJ;ARP[c]=A$v;Wd[c]
=AUt;ABO[c]=AUE;AIj[c]=AU4;AIP[c]=A5o;AE$[c]=A4f;U3[c]=A61;Gi[c]=A$t;Vn[c]=APi;AQV[c]=A4q;AP2[c]=A8Z;Qb[c]=A_j;SQ[c]=AY4;Mg[c]=A7n;Tj[c]=A$U;AMv[c]=ATm;N7[c]=ADo;Q7[c]=ALO;ALJ[c]=A7D;AAp[c]=A8K;Od[c]=AV4;MM[c]=A4B;Nc[c]=A6e;LD[c]=A11;Om[c]=A0g;Pr[c]=A0d;MF[c]=AZT;MY[c]=A_W;OQ[c]=A8C;Q3[c]=AHj;AR8[c]=AXT;X7[c]=A$D;X0[c]=A2u;AEp[c]=A0V;AR7[c]=A69;AFo[c]=AVo;ASp[c]=A29;HS[c]=A$B;Li[c]=AYc;CE[c]=A4P;ZZ[c]=A2M;H9[c]=AGn;TY[c]=A_R;W7[c]=A4L;ABX[c]=AVz;AJE[c]=A0Y;ARj[c]=AXi;AGy[c]=A8y;Ez[c]=A34;WF[c]=A4k;WG[c]=AW1;NZ[c]
=AXa;Nr[c]=A0_;AEU[c]=AWJ;AFz[c]=AXv;AFI[c]=AT$;NV[c]=AVg;Ms[c]=AXd;AH7[c]=A78;ON[c]=AZ8;AM1[c]=A02;ACX[c]=A9W;AAv[c]=A_e;AKn[c]=AUm;AQq[c]=A4c;AId[c]=A0m;APC[c]=AUa;AEC[c]=AYI;AGd[c]=AVe;Y9[c]=AUL;AIL[c]=AYo;APR[c]=AYV;AFm[c]=A6G;ALq[c]=ATF;AC9[c]=AUU;AHo[c]=AX8;AP5[c]=A8m;ABH[c]=AUO;AAU[c]=A9F;AIb[c]=A6A;Lu[c]=AVT;AQT[c]=A6K;AM7[c]=A1S;AAO[c]=A6$;AK4[c]=A2j;AKI[c]=ATl;ZF[c]=A8i;AMj[c]=A$1;KZ[c]=AUj;Ta[c]=AAw;AKb[c]=AT_;NA[c]=ASD;AGe[c]=A0A;Oa[c]=ABz;PI[c]=A_T;Ro[c]=A7d;W1[c]=AYe;Oo[c]=AWa;ARz[c]=A1a;AIE[c]
=AW8;Zf[c]=A0r;}
function A2J(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function AZ3(b){return setTimeout(function(){$rt_threadStarter(A4d)(b);},0);}
function A4d(b){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.kw();if(C()){break _;}return;default:E_();}}C3().s(b,$p);}
function Q$(b){AFU(b,0);}
function AFU(b,c){return setTimeout(function(){A4d(b);},c);}
function AQe(b){return String.fromCharCode(b);}
function ASi(b){return b.$meta.item;}
function AXG(){return [];}
function Dc(){}
function DM(){}
function Lf(){}
function B4(){var a=this;D.call(a);a.bx=null;a.qs=0;}
var Bdq=null;function Bdr(){var a=new B4();Ye(a);return a;}
function AIp(a){var b=new B4();Tx(b,a);return b;}
function LE(a,b,c){var d=new B4();AST(d,a,b,c);return d;}
function A3j(a,b){var c=new B4();YF(c,a,b);return c;}
function A$O(a,b,c){var d=new B4();XJ(d,a,b,c);return d;}
function Ye(a){a.bx=$rt_createCharArray(0);}
function Tx(a,b){var c,d;b=b.data;c=b.length;a.bx=$rt_createCharArray(c);d=0;while(d<c){a.bx.data[d]=b[d];d=d+1|0;}}
function AST(a,b,c,d){var e,f;a.bx=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bx.data[e]=f[e+c|0];e=e+1|0;}}
function YF(a,b,c){c=AOc(c,AMP(b,0,b.data.length));if(AJQ(c)&&!c.bh&&c.cy==c.mI)a.bx=APx(c);else{a.bx=$rt_createCharArray(Ct(c));AE4(c,a.bx);}}
function XJ(a,b,c,d){var e,f,g,h,i,j;a.bx=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bx.data;j=e+1|0;g[e]=i&65535;}else{g=a.bx.data;c=e+1|0;g[e]=ID(i);g=a.bx.data;j=c+1|0;g[c]=H$(i);}f=f+1|0;c=h;e=j;}if(e<a.bx.data.length)a.bx=Pf(a.bx,e);}
function Y(a,b){var c;if(b>=0&&b<a.bx.data.length)return a.bx.data[b];c=new IX;O(c);M(c);}
function Bg(a){return a.bx.data.length;}
function Ix(a){return a.bx.data.length?0:1;}
function ARF(a,b){var c,d,e;if(a===b)return 0;c=CC(Bg(a),Bg(b));d=0;while(true){if(d>=c)return Bg(a)-Bg(b)|0;e=Y(a,d)-Y(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AJR(a,b){var c,d,e;if(a===b)return 0;c=CC(Bg(a),Bg(b));d=0;while(true){if(d>=c)return Bg(a)-Bg(b)|0;e=EV(Y(a,d))-EV(Y(b,d))|0;if(e)break;d=d+1|0;}return e;}
function Wj(a,b,c){var d,e,f;if((c+Bg(b)|0)>Bg(a))return 0;d=0;while(d<Bg(b)){e=Y(b,d);f=c+1|0;if(e!=Y(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Iy(a,b){if(a===b)return 1;return Wj(a,b,0);}
function Hh(a,b,c){var d,e,f,g;d=DD(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bx.data.length)return (-1);if(a.bx.data[d]==e)break;d=d+1|0;}return d;}f=ID(b);g=H$(b);while(true){if(d>=(a.bx.data.length-1|0))return (-1);if(a.bx.data[d]==f&&a.bx.data[d+1|0]==g)break;d=d+1|0;}return d;}
function UM(a,b){return Hh(a,b,0);}
function Ii(a,b,c){var d,e,f,g,h;d=CC(c,Bg(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bx.data[d]==e)break;d=d+(-1)|0;}return d;}f=ID(b);g=H$(b);while(true){if(d<1)return (-1);if(a.bx.data[d]==g){h=a.bx.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function LZ(a,b){return Ii(a,b,Bg(a)-1|0);}
function AKV(a,b,c){var d,e,f;d=DD(0,c);e=Bg(a)-Bg(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=Bg(b))break a;if(Y(a,d+f|0)!=Y(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AAK(a,b,c){var d,e;d=CC(c,Bg(a)-Bg(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=Bg(b))break a;if(Y(a,d+e|0)!=Y(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Ev(a,b,c){var d;if(b<=c)return LE(a.bx,b,c-b|0);d=new BQ;O(d);M(d);}
function Jx(a,b){return Ev(a,b,Bg(a));}
function AV1(a,b,c){return Ev(a,b,c);}
function Hm(a,b,c){var d,e,f,g;d=new T;V(d);e=Bg(a)-Bg(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Bg(b)){FL(d,c);f=f+(Bg(b)-1|0)|0;break a;}if(Y(a,f+g|0)!=Y(b,g))break;g=g+1|0;}Dy(d,Y(a,f));}f=f+1|0;}FL(d,Jx(a,f));return U(d);}
function AUz(a){return a;}
function NL(a){var b,c,d,e;b=$rt_createCharArray(a.bx.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bx.data[d];d=d+1|0;}return b;}
function Uw(b){return b===null?B(10):b.gs();}
function V1(b){var c;c=new T;V(c);return U(Be(c,b));}
function DB(a,b){var c,d;if(a===b)return 1;if(!(b instanceof B4))return 0;c=b;if(Bg(c)!=Bg(a))return 0;d=0;while(d<Bg(c)){if(Y(a,d)!=Y(c,d))return 0;d=d+1|0;}return 1;}
function A8A(a){var b,c,d,e;a:{if(!a.qs){b=a.bx.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.qs=(31*a.qs|0)+e|0;d=d+1|0;}}}return a.qs;}
function AKy(a){var b,c,d,e,f,g,h;if(Ix(a))return a;b=$rt_createIntArray(a.bx.data.length);c=b.data;d=0;e=0;while(e<a.bx.data.length){a:{if(e!=(a.bx.data.length-1|0)&&Dt(a.bx.data[e])){f=a.bx.data;g=e+1|0;if(DR(f[g])){h=d+1|0;c[d]=GQ(EJ(a.bx.data[e],a.bx.data[g]));e=g;break a;}}h=d+1|0;c[d]=EV(a.bx.data[e]);}e=e+1|0;d=h;}return A$O(b,0,d);}
function AOu(a){var b,c,d,e,f,g,h;if(Ix(a))return a;b=$rt_createIntArray(a.bx.data.length);c=b.data;d=0;e=0;while(e<a.bx.data.length){a:{if(e!=(a.bx.data.length-1|0)&&Dt(a.bx.data[e])){f=a.bx.data;g=e+1|0;if(DR(f[g])){h=d+1|0;c[d]=GP(EJ(a.bx.data[e],a.bx.data[g]));e=g;break a;}}h=d+1|0;c[d]=FD(a.bx.data[e]);}e=e+1|0;d=h;}return A$O(b,0,d);}
function ANy(a,b){var c,d;if(b===null){b=new EE;Bj(b,B(11));M(b);}Bds=1;c=BbJ();d=new HU;d.h9=1;d.eO=b;d.bG=$rt_createCharArray(Bg(b)+2|0);Dj(NL(b),0,d.bG,0,Bg(b));d.bG.data[d.bG.data.length-1|0]=0;d.bG.data[d.bG.data.length-2|0]=0;d.Ea=d.bG.data.length;d.l_=0;GA(d);GA(d);c.o=d;c.fS=0;c.va=S5(c,(-1),c.fS,null);if(!Eo(c.o))M(CN(B(3),c.o.eO,c.o.il));if(c.zv)c.va.i1();return AI5(c,a);}
function AWg(a,b){return ARF(a,b);}
function AGC(){Bdq=new V9;}
function D8(){var a=this;D.call(a);a.vL=null;a.jH=null;a.ov=0;a.rU=0;a.pf=null;a.qR=null;}
function Bdt(){var a=new D8();O(a);return a;}
function Bdu(a){var b=new D8();Bj(b,a);return b;}
function Bdv(a){var b=new D8();W2(b,a);return b;}
function O(a){a.ov=1;a.rU=1;}
function Bj(a,b){a.ov=1;a.rU=1;a.vL=b;}
function W2(a,b){a.ov=1;a.rU=1;a.jH=b;}
function A5V(a){return a;}
function A0B(a){return a.vL;}
function AWF(a){return a.lS();}
function Ce(a){S6(a,CP());}
function S6(a,b){var c,d,e,f,g;KC(b,IC(Dm(a)));c=a.lS();if(c!==null){d=new T;V(d);KC(b,U(H(H(d,B(12)),c)));}a:{APP(b);if(a.qR!==null){e=a.qR.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];KC(b,B(13));ACu(b,d);g=g+1|0;}}}if(a.jH!==null&&a.jH!==a){KC(b,B(14));S6(a.jH,b);}}
function OO(a,b){var c,d,e,f,g;Hn(b,IC(Dm(a)));c=a.lS();if(c!==null){d=new T;V(d);Hn(b,U(H(H(d,B(12)),c)));}a:{SV(b);if(a.qR!==null){e=a.qR.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Hn(b,B(15));AAQ(b,d);g=g+1|0;}}}if(a.jH!==null&&a.jH!==a){Hn(b,B(14));OO(a.jH,b);}}
function WU(a,b){if(!a.ov)return;a.pf=NH(a.pf,a.pf.data.length+1|0);a.pf.data[a.pf.data.length-1|0]=b;}
function Fh(){D8.call(this);}
function Bdw(){var a=new Fh();AU2(a);return a;}
function AU2(a){O(a);}
function I2(){Fh.call(this);}
function Bdx(){var a=new I2();AVO(a);return a;}
function AVO(a){O(a);}
function AMp(){I2.call(this);}
function Bdy(){var a=new AMp();A1K(a);return a;}
function A1K(a){O(a);}
function HL(){var a=this;D.call(a);a.N=null;a.bZ=0;}
function Bdz(){var a=new HL();V(a);return a;}
function Bc4(a){var b=new HL();GB(b,a);return b;}
function V(a){GB(a,16);}
function GB(a,b){a.N=$rt_createCharArray(b);}
function TE(a,b,c){return AMI(a,a.bZ,b,c);}
function AMI(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);f=a.N.data;g=b+1|0;f[b]=45;b=g;}a.N.data[b]=I1(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bx(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)e=b;else{f=a.N.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.N.data;b=e+1|0;f[e]=I1(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function ADq(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)C2(a,b,b+1|0);else{C2(a,b,b+2|0);g=a.N.data;h=b+1|0;g[b]=45;b=h;}a.N.data[b]=I1(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;C2(a,b,b+i|0);if(e)i=b;else{g=a.N.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.N.data;b=i+1|0;g[i]=I1(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function AOE(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.N.data;d=b+1|0;e[b]=48;e=a.N.data;b=d+1|0;e[d]=46;a.N.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.N.data;d=b+1|0;e[b]=45;e=a.N.data;b=d+1|0;e[d]=48;e=a.N.data;d=b+1|0;e[b]=46;a.N.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.N.data;d=b+1|0;e[b]=78;e=a.N.data;b=d+1|0;e[d]=97;a.N.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.N.data;d=b+1|0;e[b]=45;}e=a.N.data;b=d+1|0;e[d]
=73;e=a.N.data;d=b+1|0;e[b]=110;e=a.N.data;b=d+1|0;e[d]=102;e=a.N.data;d=b+1|0;e[b]=105;e=a.N.data;b=d+1|0;e[d]=110;e=a.N.data;d=b+1|0;e[b]=105;e=a.N.data;b=d+1|0;e[d]=116;a.N.data[b]=121;return a;}f=BdA;AOq(c,f);d=f.uH;g=f.um;h=f.zC;i=1;j=1;if(h){h=1;j=2;}k=9;l=A09(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=DD(k,i+1|0);g=0;}else if(g<0){d=d/BdB.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;C2(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.N.data;h=b+
1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.N.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.N.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.N.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.N.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.N.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.N.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AKL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=R(c,0.0);if(!d){C2(a,b,b+3|0);e=a.N.data;d=b+1|0;e[b]=48;e=a.N.data;b=d+1|0;e[d]=46;a.N.data[b]=48;return a;}if(!d){C2(a,b,b+4|0);e=a.N.data;d=b+1|0;e[b]=45;e=a.N.data;b=d+1|0;e[d]=48;e=a.N.data;d=b+1|0;e[b]=46;a.N.data[d]=48;return a;}if(isNaN(c)?1:0){C2(a,b,b+3|0);e=a.N.data;d=b+1|0;e[b]=78;e=a.N.data;b=d+1|0;e[d]=97;a.N.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C2(a,b,b+8|0);d=b;}else{C2(a,b,b+9|0);e=a.N.data;d=b+1|0;e[b]=45;}e=a.N.data;b=d+1|0;e[d]
=73;e=a.N.data;d=b+1|0;e[b]=110;e=a.N.data;b=d+1|0;e[d]=102;e=a.N.data;d=b+1|0;e[b]=105;e=a.N.data;b=d+1|0;e[d]=110;e=a.N.data;d=b+1|0;e[b]=105;e=a.N.data;b=d+1|0;e[d]=116;a.N.data[b]=121;return a;}f=BdC;AB9(c,f);g=f.vb;h=f.t$;i=f.zt;j=1;k=1;if(i)k=2;l=18;d=AZQ(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=DD(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,BdD.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;C2(a,b,b+(k+l|0)|
0);if(!i)i=b;else{e=a.N.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.N.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.N.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.N.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.N.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.N.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.N.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else
{e=a.N.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.N.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function A09(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AZQ(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=BdE.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,BdE.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,BdE.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function Dy(a,b){return a.yz(a.bZ,b);}
function Lh(a,b,c){C2(a,b,b+1|0);a.N.data[b]=c;return a;}
function Nd(a,b){var c;if(a.N.data.length>=b)return;c=a.N.data.length>=1073741823?2147483647:DD(b,DD(a.N.data.length*2|0,5));a.N=Pf(a.N,c);}
function U(a){return LE(a.N,0,a.bZ);}
function IW(a,b,c,d){return a.x8(a.bZ,b,c,d);}
function Ke(a,b,c,d,e){var f,g,h,i;C2(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.N.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hi(a,b){return a.xy(b,0,b.data.length);}
function C2(a,b,c){var d,e;d=a.bZ-b|0;a.nE((a.bZ+c|0)-b|0);e=d-1|0;while(e>=0){a.N.data[c+e|0]=a.N.data[b+e|0];e=e+(-1)|0;}a.bZ=a.bZ+(c-b|0)|0;}
function It(){}
function T(){HL.call(this);}
function BN(){var a=new T();A_u(a);return a;}
function A_u(a){V(a);}
function H(a,b){NP(a,a.bZ,b);return a;}
function Be(a,b){TE(a,b,10);return a;}
function C6(a,b){UT(a,a.bZ,b);return a;}
function AWS(a,b){WS(a,a.bZ,b);return a;}
function AKE(a,b){Qz(a,a.bZ,b);return a;}
function ATg(a,b){Dy(a,b);return a;}
function AVn(a,b,c,d){IW(a,b,c,d);return a;}
function A9$(a,b){Hi(a,b);return a;}
function FL(a,b){Xw(a,a.bZ,b);return a;}
function UT(a,b,c){ADq(a,b,c,10);return a;}
function WS(a,b,c){AOE(a,b,c);return a;}
function Qz(a,b,c){AKL(a,b,c);return a;}
function A9t(a,b,c,d,e){Ke(a,b,c,d,e);return a;}
function Xw(a,b,c){NP(a,b,c===null?B(10):c.gs());return a;}
function AZb(a,b,c){Lh(a,b,c);return a;}
function AGX(a,b,c){var d,e,f,g,h,i,j;d=R(b,c);if(d<=0&&b<=a.bZ){if(d){e=a.bZ-c|0;a.bZ=a.bZ-(c-b|0)|0;d=0;while(d<e){f=a.N.data;g=b+1|0;h=a.N.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new IX;O(j);M(j);}
function Sq(a,b){var c,d,e,f;if(b>=0&&b<a.bZ){a.bZ=a.bZ-1|0;while(b<a.bZ){c=a.N.data;d=a.N.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new IX;O(f);M(f);}
function NP(a,b,c){var d,e,f;if(b>=0&&b<=a.bZ){a:{if(c===null)c=B(10);else if(Ix(c))break a;Nd(a,a.bZ+Bg(c)|0);d=a.bZ-1|0;while(d>=b){a.N.data[d+Bg(c)|0]=a.N.data[d];d=d+(-1)|0;}a.bZ=a.bZ+Bg(c)|0;d=0;while(d<Bg(c)){e=a.N.data;f=b+1|0;e[b]=Y(c,d);d=d+1|0;b=f;}}return a;}c=new IX;O(c);M(c);}
function ANt(a,b){a.bZ=b;}
function AAM(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BQ;Bj(f,B(16));M(f);}while(b<c){g=d.data;h=e+1|0;i=a.N.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function A7a(a,b,c,d,e){Ke(a,b,c,d,e);return a;}
function AVF(a,b,c,d){IW(a,b,c,d);return a;}
function Kj(a){return a.bZ;}
function BD(a){return U(a);}
function AX2(a,b){Nd(a,b);}
function A7Y(a,b,c){return Xw(a,b,c);}
function A7B(a,b,c){Lh(a,b,c);return a;}
function A0R(a,b,c){return Qz(a,b,c);}
function A6n(a,b,c){return WS(a,b,c);}
function AU0(a,b,c){return UT(a,b,c);}
function A2V(a,b,c){return NP(a,b,c);}
function Fb(){D.call(this);}
function Gh(){Fb.call(this);this.f$=0;}
var BdF=null;var BdG=null;function AQ5(a){var b=new Gh();LK(b,a);return b;}
function LK(a,b){a.f$=b;}
function Lx(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!Ix(b)){a:{d=0;e=0;switch(Y(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==Bg(b)){b=new Ez;O(b);M(b);}while(e<Bg(b)){g=e+1|0;h=Ul(Y(b,e));if(h<0){i=new Ez;j=new T;V(j);Bj(i,U(H(H(j,B(17)),b)));M(i);}if(h>=c){i=new Ez;j=new T;V(j);Bj(i,U(H(H(Be(H(j,B(18)),c),B(12)),b)));M(i);}f=Bx(c,f)+h|0;if(f<0){if(g==Bg(b)&&f==(-2147483648)&&d)return (-2147483648);i=new Ez;j=new T;V(j);Bj(i,U(H(H(j,B(19)),b)));M(i);}e=g;}if(d)f= -f;return f;}b
=new Ez;Bj(b,B(20));M(b);}i=new Ez;b=new T;V(b);Bj(i,U(Be(H(b,B(21)),c)));M(i);}
function CY(b){var c;if(b>=(-128)&&b<=127){a:{if(BdG===null){BdG=J(Gh,256);c=0;while(true){if(c>=BdG.data.length)break a;BdG.data[c]=AQ5(c-128|0);c=c+1|0;}}}return BdG.data[b+128|0];}return AQ5(b);}
function A37(a){return a.f$;}
function MN(a){var b;b=a.f$;return TE(Bc4(20),b,10).gs();}
function A3l(a){return a.f$>>>4^a.f$<<28^a.f$<<8^a.f$>>>24;}
function A_C(a,b){if(a===b)return 1;return b instanceof Gh&&b.f$==a.f$?1:0;}
function AAN(a,b){return R(a.f$,b.f$);}
function TH(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function JH(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function ND(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function A7e(a,b){return AAN(a,b);}
function AQz(){BdF=F($rt_intcls());}
function IP(){I2.call(this);}
function BdH(){var a=new IP();AX0(a);return a;}
function BdI(a){var b=new IP();Ql(b,a);return b;}
function AX0(a){O(a);}
function Ql(a,b){Bj(a,b);}
function AO6(){IP.call(this);}
function BdJ(){var a=new AO6();AW5(a);return a;}
function BdK(a){var b=new AO6();AUI(b,a);return b;}
function AW5(a){O(a);}
function AUI(a,b){Ql(a,b);}
function ALS(){IP.call(this);}
function BdL(){var a=new ALS();A3L(a);return a;}
function BdM(a){var b=new ALS();AU3(b,a);return b;}
function A3L(a){O(a);}
function AU3(a,b){Ql(a,b);}
function BF(){D8.call(this);}
function BdN(){var a=new BF();AZ1(a);return a;}
function AZ1(a){O(a);}
function B8(){BF.call(this);}
function BdO(){var a=new B8();ATB(a);return a;}
function AAc(a){var b=new B8();A$9(b,a);return b;}
function ATB(a){O(a);}
function A$9(a,b){Bj(a,b);}
function Da(){}
function Hf(){}
function Ux(){}
function QA(){}
function Vm(){}
function Rs(){}
function Wr(){}
function PH(){}
function LF(){}
function YU(){D.call(this);}
function AYl(a,b,c){a.Xq($rt_str(b),JG(c,"handleEvent"));}
function AYz(a,b,c){a.UP($rt_str(b),JG(c,"handleEvent"));}
function ATX(a,b){return a.HW(b);}
function AZq(a,b,c,d){a.KW($rt_str(b),JG(c,"handleEvent"),d?1:0);}
function A1V(a,b){return !!a.Xx(b);}
function AUV(a){return a.Ji();}
function ATe(a,b,c,d){a.NO($rt_str(b),JG(c,"handleEvent"),d?1:0);}
function Bq(){D.call(this);}
var BdP=0;var BdQ=null;var BdR=null;var BdS=null;var BdT=null;var BdU=null;var BdV=null;var BdW=null;var BdX=null;var BdY=null;var BdZ=null;var Bd0=null;var Bd1=null;var Bd2=null;var Bd3=null;var Bd4=null;var Bd5=null;var Bd6=null;var Bd7=null;var Bd8=null;var Bd9=0;var Bd$=0;var Bd_=0.0;var Bea=0.0;var Beb=0;var Bec=0;var Bed=0;var Bee=0;var Bef=0;var Beg=null;var Beh=null;var Bei=null;var Bej=null;var Bek=null;var Bel=0;var Bem=null;var Ben=null;var Beo=null;var Bep=null;var Beq=null;var Ber=null;var Bes=
Long_ZERO;var Bet=0;var Beu=0;var Bev=0;var Bew=null;var Bex=null;var Bey=null;var Bez=0;var BeA=0;var BeB=0;var BeC=null;var BeD=null;var BeE=null;var BeF=0;var BeG=null;var BeH=null;var BeI=0.0;var BeJ=null;var BeK=0;var BeL=null;var BeM=null;var BeN=0;var BeO=null;var BeP=0;function Bb(){Bb=Br(Bq);AT1();}
function BeQ(){var a=new Bq();VY(a);return a;}
function VY(a){Bb();}
function Je(){Bb();return B(22);}
function Kq(b){Bb();if(Iy(b,B(23)))b=Jx(b,1);return CQ(BeR,b);}
function QJ(b){var c;Bb();c=Kq(b);if(c===null)return null;return A3j(c,Yd(B(24)));}
function ALz(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.GF=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaU(callback);return thread.suspend(function(){try{A3E(b,callback);}catch($e){callback.I6($rt_exception($e));}});}
function A3E(b,c){var d,e;Bb();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new Xd;b.vB=d;b.As=c;b=Cu(b,"stateChanged");d.onreadystatechange=b;d.send();}
function AAD(b,c){var d,e,f,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bb();BdR=b;d=$rt_str(BdR.getAttribute("style"));e=BdR;f=new T;V(f);if(d===null)d=B(3);d=U(H(H(f,d),B(25)));e.setAttribute("style",$rt_ustr(d));BdW=window;BdQ=BdW.document;BdS=BdQ.createElement("canvas");Beb=b.clientWidth;Bec=b.clientHeight;f=BdS;e=Beb;f.width=e;f=BdS;e=Bec;f.height=e;BdT=BdS.getContext("2d");BdS.setAttribute("id","deevis589723589");f=BdS;b.appendChild(f);BdU
=BdQ.createElement("canvas");b=BdU;f=Beb;b.width=f;b=BdU;f=Bec;b.height=f;b=BdU;e=AE0();BdV=b.getContext("webgl2",e);if(BdV===null){b=new B8;c=new T;V(c);Bj(b,U(H(H(H(c,B(26)),$rt_str(window.navigator.userAgent)),B(27))));M(b);}Yf(BdV);BdV.getExtension("EXT_texture_filter_anisotropic");b=BdW;e=new Xe;BdY=e;b.addEventListener("contextmenu",Cu(e,"handleEvent"));b=BdS;e=new Xk;BdZ=e;b.addEventListener("mousedown",Cu(e,"handleEvent"));b=BdS;e=new Xl;Bd0=e;b.addEventListener("mouseup",Cu(e,"handleEvent"));b=BdS;e
=new Xi;Bd1=e;b.addEventListener("mousemove",Cu(e,"handleEvent"));b=BdW;e=new Xj;Bd2=e;b.addEventListener("keydown",Cu(e,"handleEvent"));b=BdW;e=new Xg;Bd3=e;b.addEventListener("keyup",Cu(e,"handleEvent"));b=BdW;e=new Xh;Bd4=e;b.addEventListener("keypress",Cu(e,"handleEvent"));b=BdS;e=new Xf;Bd5=e;b.addEventListener("wheel",Cu(e,"handleEvent"));b=BdW;e=new QI;b.addEventListener("blur",Cu(e,"handleEvent"));b=BdW;e=new QH;b.addEventListener("focus",Cu(e,"handleEvent"));AN7();$p=1;case 1:AJ2();if(C()){break _;}$p
=2;case 2:ALz(c);if(C()){break _;}a:{try{AMm(BdX);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B2){f=$$je;}else{throw $$e;}}Ce(f);}BeH=AYH();OH(Bd7);OH(Bd8);return;default:E_();}}C3().s(b,c,d,e,f,$p);}
function Lk(b){Bb();BdV.enable(b);}
function Ka(b){Bb();BdV.disable(b);}
function WI(b,c,d){Bb();BdV.drawArrays(b,c,d);}
function Tf(){var b,c;Bb();b=new V8;b.i3=BdV.createProgram();c=Bef+1|0;Bef=c;b.xA=c;return b;}
function I5(b){var c;Bb();c=new Wa;c.js=BdV.createShader(b);return c;}
function JS(b,c){var d;Bb();d=BdV;b=b.i3;c=c.js;d.attachShader(b,c);}
function Kr(b,c){var d;Bb();d=BdV;b=b.i3;c=c.js;d.detachShader(b,c);}
function K6(b){var c;Bb();c=BdV;b=b.js;c.compileShader(b);}
function P8(b){var c;Bb();c=BdV;b=b.i3;c.linkProgram(b);}
function I9(b,c){var d;Bb();d=BdV;b=b.js;d.shaderSource(b,$rt_ustr(c));}
function Ko(b){var c;Bb();c=BdV;b=b.js;return $rt_str(c.getShaderInfoLog(b));}
function S0(b){var c;Bb();c=BdV;b=b.i3;return $rt_str(c.getProgramInfoLog(b));}
function KB(b){var c;Bb();c=BdV;b=b.js;return c.getShaderParameter(b,35713)!=1?0:1;}
function SC(b){var c;Bb();c=BdV;b=b.i3;return c.getProgramParameter(b,35714)!=1?0:1;}
function J_(b){var c;Bb();c=BdV;b=b.js;c.deleteShader(b);}
function JK(){var b;Bb();b=new Wh;b.Ed=BdV.createBuffer();return b;}
function Gm(b,c){var d;Bb();d=BdV;c=c!==null?c.Ed:null;d.bindBuffer(b,c);}
function Sm(b,c,d){var e,f,g,h,i;Bb();e=Ct(c);f=new Int32Array(Beh.buffer);g=0;while(g<e){h=AGr(c);f[g]=h;g=g+1|0;}c=Beh.buffer;e=e*4|0;i=new Uint8Array(c,0,e);BdV.bufferData(b,i,d);}
function PL(b,c,d){var e;Bb();e=BdV;c=c;e.bufferData(b,c,d);}
function K2(b){Bb();BdV.enableVertexAttribArray(b);}
function C7(b,c){var d;Bb();d=BdV;b=b.i3;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new Xp;b.kD=d;}return b;}
function Md(b,c,d){var e;Bb();e=BdV;b=b.i3;e.bindAttribLocation(b,c,$rt_ustr(d));}
function Ie(b,c){var d;Bb();if(b!==null){d=BdV;b=b.kD;d.uniform1f(b,c);}}
function LI(b,c,d,e){var f;Bb();if(b!==null){f=BdV;b=b.kD;f.uniform3f(b,c,d,e);}}
function Uq(b,c,d,e,f){var g,h;Bb();if(b!==null){g=BdV;h=b.kD;g.uniform4f(h,c,d,e,f);}}
function Ri(b,c){var d;Bb();if(b!==null){d=BdV;b=b.kD;d.uniform1i(b,c);}}
function H5(b,c){var d,e;Bb();Bek.set(c.data);if(b!==null){d=BdV;e=b.kD;b=Bek;d.uniformMatrix4fv(e,!!0,b);}}
function KU(b){var c;Bb();if(b!==null&&Bel!=b.xA){Bel=b.xA;c=BdV;b=b.i3;c.useProgram(b);}}
function K5(b,c,d,e,f,g){Bb();BdV.vertexAttribPointer(b,c,d,!!e,f,g);}
function UO(b,c){var d;Bb();d=BdV;b=b.vg;return d.getQueryParameter(b,c);}
function Ly(){var b;Bb();b=new SH;b.Bh=BdV.createVertexArray();b.v3=0;return b;}
function JN(b){var c;Bb();c=BdV;b=b!==null?b.Bh:null;c.bindVertexArray(b);}
function AE7(b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bb();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=AII(c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(b,c,$p);}
function AII(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.GF=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaU(callback);return thread.suspend(function(){try{AW7(b,callback);}catch($e){callback.I6($rt_exception($e));}});}
function AW7(b,c){var d,e,f;Bb();d=BdQ.createElement("img");e=new QM;e.f6=d;e.yq=c;d.addEventListener("load",Cu(e,"handleEvent"));f=new QL;f.EB=d;f.Fi=c;d.addEventListener("error",Cu(f,"handleEvent"));e=$rt_str(ANT(b,"image/png"));if(e===null)CM(c,null);else{b=$rt_ustr(e);d.src=b;}}
function LL(){var b,c,d;Bb();b=BdR.clientWidth;if(b!=Beb){c=BdS;d=b;c.width=d;c=BdU;d=b;c.width=d;Beb=b;}return b;}
function MS(){var b,c,d;Bb();b=BdR.clientHeight;if(b!=Bec){c=BdS;d=b;c.height=d;c=BdU;d=b;c.height=d;Bec=b;}return b;}
function KI(){Bb();return Long_fromInt(1073741824);}
function J6(){Bb();return Long_fromInt(1073741824);}
function Km(){Bb();return Long_ZERO;}
function UQ(b){Bb();return b.byteLength;}
function T_(b){Bb();return b<=BeM.data.length&&b>=0?BeM.data[b]:(-1);}
function ACM(b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bb();d=LZ(b,47);if(d>0){e=Ev(b,0,d);$p=2;continue _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeS;d=0;f=f.buffer;$p=1;case 1:AX7(e,b,d,f);if(C()){break _;}return;case 2:AJo(e);if(C()){break _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeS;d=0;f=f.buffer;$p=1;continue _;default:E_();}}C3().s(b,c,d,e,f,$p);}
function ALT(b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bb();c=BeS;$p=1;case 1:$z=A_Y(c,b);if(C()){break _;}b=$z;if(b===null)d=null;else{d=$rt_createByteArray(b.byteLength);e=d.data;b=new Uint8Array(b);f=0;g=e.length;while(f<g){e[f]=b[f]<<24>>24;f=f+1|0;}}return d;default:E_();}}C3().s(b,c,d,e,f,g,$p);}
function ANz(b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bb();d=BeS;$p=1;case 1:$z=A_Y(d,b);if(C()){break _;}d=$z;e=LZ(c,47);if(e<=0){f=BeS;e=0;$p=2;continue _;}f=Ev(c,0,e);$p=4;continue _;case 2:AX7(f,c,e,d);if(C()){break _;}c=BeS;$p=3;case 3:A5L(c,b);if(C()){break _;}return;case 4:AJo(f);if(C()){break _;}f=BeS;e=0;$p=2;continue _;default:E_();}}C3().s(b,c,d,e,f,$p);}
function AMd(b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bb();c=BeS;$p=1;case 1:A5L(c,b);if(C()){break _;}return;default:E_();}}C3().s(b,c,$p);}
function Wc(){Bb();return BdX;}
function RV(){Bb();return Beq;}
function M5(){Bb();return Bd7;}
function MI(){Bb();if(Long_gt(Long_sub(B9(),Bes),Long_fromInt(3000))&&Beu&&!(document.pointerLockElement!=null?1:0)){BdS.requestPointerLock();if(document.pointerLockElement!=null?1:0)Beu=0;}}
function P_(){Bb();return Ber;}
function QN(b){Bb();return b.which;}
function Tc(b){Bb();return T_(b);}
function N2(){Bb();return Bd8;}
function S2(b){Bb();Bee=b;return b;}
function Hk(){Bb();return Bem;}
function JY(){Bb();return Ben;}
function WO(b){Bb();URL.revokeObjectURL($rt_ustr(b));}
function VW(){Bb();return Bet;}
function Nb(b){Bb();Bet=b;return b;}
function P6(){Bb();return Bes;}
function AT1(){var b,c;BdP=0;BdQ=null;BdR=null;BdS=null;BdT=null;BdU=null;BdV=null;BdW=null;BdX=null;BdY=null;BdZ=null;Bd0=null;Bd1=null;Bd2=null;Bd3=null;Bd4=null;Bd5=null;Bd6=J(B4,0);Bd7=Q6();Bd8=Q6();Bd9=0;Bd$=0;Bd_=0.0;Bea=0.0;Beb=0;Bec=0;Bed=0;Bee=1;Bef=0;Beg=$rt_createIntArray(4);Beh=new Uint8Array(new ArrayBuffer(4194304));Bei=new Float32Array(4);Bej=new Float32Array(9);Bek=new Float32Array(16);Bel=(-1);Bem=null;Ben=null;Beo=null;Bep=null;Beq=$rt_createBooleanArray(8);Ber=$rt_createBooleanArray(256);Bes
=Long_ZERO;Bet=0;Beu=0;Bev=0;Bew=F9();Bex=F9();Bey=null;Bez=0;BeA=0;BeB=0;BeC=Q6();BeD=null;BeE=null;BeF=0;BeG=De();BeH=null;BeI=0.029999999329447746;BeJ=De();BeK=0;b=J(B4,256);c=b.data;c[0]=B(28);c[1]=B(29);c[2]=B(30);c[3]=B(31);c[4]=B(32);c[5]=B(33);c[6]=B(34);c[7]=B(35);c[8]=B(36);c[9]=B(37);c[10]=B(38);c[11]=B(2);c[12]=B(39);c[13]=B(40);c[14]=B(41);c[15]=B(42);c[16]=B(43);c[17]=B(44);c[18]=B(45);c[19]=B(46);c[20]=B(47);c[21]=B(48);c[22]=B(49);c[23]=B(50);c[24]=B(51);c[25]=B(52);c[26]=B(53);c[27]=B(54);c[28]
=B(55);c[29]=B(56);c[30]=B(57);c[31]=B(58);c[32]=B(59);c[33]=B(60);c[34]=B(61);c[35]=B(62);c[36]=B(63);c[37]=B(64);c[38]=B(65);c[39]=B(66);c[40]=B(67);c[41]=B(68);c[42]=B(69);c[43]=B(70);c[44]=B(71);c[45]=B(72);c[46]=B(73);c[47]=B(74);c[48]=B(75);c[49]=B(76);c[50]=B(77);c[51]=B(78);c[52]=B(79);c[53]=B(80);c[54]=B(81);c[55]=B(82);c[56]=B(83);c[57]=B(84);c[58]=B(85);c[59]=B(86);c[60]=B(87);c[61]=B(88);c[62]=B(89);c[63]=B(90);c[64]=B(91);c[65]=B(92);c[66]=B(93);c[67]=B(94);c[68]=B(95);c[69]=B(96);c[70]=B(97);c[71]
=B(98);c[72]=B(99);c[73]=B(100);c[74]=B(101);c[75]=B(102);c[76]=B(103);c[77]=B(104);c[78]=B(105);c[79]=B(106);c[80]=B(107);c[81]=B(108);c[82]=B(109);c[83]=B(110);c[84]=B(10);c[85]=B(10);c[86]=B(10);c[87]=B(111);c[88]=B(112);c[89]=B(10);c[90]=B(10);c[91]=B(10);c[92]=B(10);c[93]=B(10);c[94]=B(10);c[95]=B(10);c[96]=B(10);c[97]=B(10);c[98]=B(10);c[99]=B(10);c[100]=B(113);c[101]=B(114);c[102]=B(115);c[103]=B(116);c[104]=B(117);c[105]=B(118);c[106]=B(10);c[107]=B(10);c[108]=B(10);c[109]=B(10);c[110]=B(10);c[111]=
B(10);c[112]=B(119);c[113]=B(120);c[114]=B(10);c[115]=B(10);c[116]=B(10);c[117]=B(10);c[118]=B(10);c[119]=B(10);c[120]=B(10);c[121]=B(121);c[122]=B(10);c[123]=B(122);c[124]=B(10);c[125]=B(123);c[126]=B(10);c[127]=B(10);c[128]=B(10);c[129]=B(10);c[130]=B(10);c[131]=B(10);c[132]=B(10);c[133]=B(10);c[134]=B(10);c[135]=B(10);c[136]=B(10);c[137]=B(10);c[138]=B(10);c[139]=B(10);c[140]=B(10);c[141]=B(124);c[142]=B(10);c[143]=B(10);c[144]=B(125);c[145]=B(126);c[146]=B(127);c[147]=B(128);c[148]=B(129);c[149]=B(130);c[150]
=B(131);c[151]=B(132);c[152]=B(10);c[153]=B(10);c[154]=B(10);c[155]=B(10);c[156]=B(133);c[157]=B(134);c[158]=B(10);c[159]=B(10);c[160]=B(10);c[161]=B(10);c[162]=B(10);c[163]=B(10);c[164]=B(10);c[165]=B(10);c[166]=B(10);c[167]=B(135);c[168]=B(10);c[169]=B(10);c[170]=B(10);c[171]=B(10);c[172]=B(10);c[173]=B(10);c[174]=B(10);c[175]=B(10);c[176]=B(10);c[177]=B(10);c[178]=B(10);c[179]=B(136);c[180]=B(10);c[181]=B(137);c[182]=B(10);c[183]=B(138);c[184]=B(139);c[185]=B(10);c[186]=B(10);c[187]=B(10);c[188]=B(10);c[189]
=B(10);c[190]=B(10);c[191]=B(10);c[192]=B(10);c[193]=B(10);c[194]=B(10);c[195]=B(10);c[196]=B(140);c[197]=B(141);c[198]=B(10);c[199]=B(142);c[200]=B(143);c[201]=B(144);c[202]=B(10);c[203]=B(145);c[204]=B(10);c[205]=B(146);c[206]=B(10);c[207]=B(147);c[208]=B(148);c[209]=B(149);c[210]=B(150);c[211]=B(151);c[212]=B(10);c[213]=B(10);c[214]=B(10);c[215]=B(10);c[216]=B(10);c[217]=B(10);c[218]=B(152);c[219]=B(153);c[220]=B(154);c[221]=B(155);c[222]=B(156);c[223]=B(157);c[224]=B(10);c[225]=B(10);c[226]=B(10);c[227]
=B(10);c[228]=B(10);c[229]=B(10);c[230]=B(10);c[231]=B(10);c[232]=B(10);c[233]=B(10);c[234]=B(10);c[235]=B(10);c[236]=B(10);c[237]=B(10);c[238]=B(10);c[239]=B(10);c[240]=B(10);c[241]=B(10);c[242]=B(10);c[243]=B(10);c[244]=B(10);c[245]=B(10);c[246]=B(10);c[247]=B(10);c[248]=B(10);c[249]=B(10);c[250]=B(10);c[251]=B(10);c[252]=B(10);c[253]=B(10);c[254]=B(10);c[255]=B(10);BeL=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=14;c[9]=15;c[10]
=(-1);c[11]=(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]
=(-1);c[63]=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]=52;c[111]=53;c[112]=(-1);c[113]
=(-1);c[114]=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]=(-1);c[154]=(-1);c[155]=(-1);c[156]
=(-1);c[157]=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]=(-1);c[198]=(-1);c[199]=(-1);c[200]
=(-1);c[201]=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;BeM=b;BeN=0;BeO=new Int32Array(new ArrayBuffer(2100000));BeP=0;}
function Yf(b){window.currentContext=b;}
function AN7(){if (!AN7.$native){
AN7.$native=function(){return (function(){window.eagsFileChooser = {
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
};})();};AN7=AN7.$native;}return AN7();}
function AE0(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function ANT(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function ANN(b){if(b.commit)b.commit();}
function S3(){}
function JF(){}
function N_(){}
function HA(){D.call(this);this.wp=null;}
function BeT(a){var b=new HA();Wm(b,a);return b;}
function Wm(a,b){if(b!==null){a.wp=b;return;}b=new EE;O(b);M(b);}
function ABt(){HA.call(this);this.yd=null;}
function A9o(){var a=new ABt();A3e(a);return a;}
function A3e(a){var b;a.wp=a;b=new LB;GB(b,16);a.yd=b;a.wp=a.yd;}
function ALi(a){return;}
function AEL(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;IW(a.yd,b,c,d);return;}}f=new BQ;O(f);M(f);}
function LN(){var a=this;HA.call(a);a.mE=null;a.F6=0;a.yw=0;}
function AFN(a){var $$je;a:{if(a.mE===null)Kp(a);else{try{ALi(a.mE);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B2){}else{throw $$e;}}Kp(a);}}}
function Hn(a,b){if(b===null)b=Uw(null);YC(a,b);}
function SV(a){Hn(a,B(158));if(a.yw)AFN(a);}
function AAQ(a,b){AB1(a,Uw(b));}
function AB1(a,b){Hn(a,b);SV(a);}
function Kp(a){a.F6=1;}
function ASe(a,b){AAz(a,b,0,b.data.length);}
function AAz(a,b,c,d){var $$je;a:{if(a.mE===null)Kp(a);else{try{AEL(a.mE,b,c,d);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B2){}else{throw $$e;}}Kp(a);}}}
function YC(a,b){ASe(a,NL(b));}
function AFr(){D.call(this);}
function BeU(){var a=new AFr();AWn(a);return a;}
function AWn(a){return;}
function AF6(){D.call(this);}
function Mh(){}
function In(){var a=this;D.call(a);a.cB=null;a.cc=0;a.bB=0;a.bc=null;a.A=null;a.dU=null;a.f=null;a.c6=null;a.k2=null;a.bs=0;a.bo=null;a.e$=null;a.D=null;a.jn=null;a.eV=null;a.bO=0;a.c9=0;a.Hw=null;a.Ge=0;a.n2=null;a.ia=0;a.GK=null;a.cg=null;a.k=null;a.yA=null;a.Dq=null;a.BY=null;a.hA=0;a.lD=null;a.gV=Long_ZERO;a.bp=0;a.cp=0;a.cU=0;a.dz=Long_ZERO;}
var BeV=null;var BeW=0;var Bdl=null;function AID(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.k=Bam(a);b=new KY;c=a.k;BeX=De();b.zD=De();b.kE=Rp(1);b.hd=WX(1048576);b.l1=WX(1048576);b.Cv=Ch();b.sZ=0;b.Ec=0;b.wW=c;a.bo=b;c=new Wo;d=a.k;b=B(159);e=a.bo;$p=1;case 1:AOU(c,d,b,e);if(C()){break _;}a.e$=c;$p=2;case 2:Yz(a);if(C()){break _;}a.yA=new Qu;Ei(a,B(160));Ba(3553);Bb();BdV.clearDepth((-1.0));Ba(2929);HI(515);Ba(3008);SB(516,
0.10000000149011612);BdV.cullFace(1029);C_(5889);C$();C_(5888);Ei(a,B(161));G7(a.bo,a.BY);G7(a.bo,a.Dq);G7(a.bo,BaI());G7(a.bo,BcP());G7(a.bo,AVX(0));G7(a.bo,AVX(1));a.dU=Ba7(a,a.bo);FN(0,0,a.cc,a.bB);e=Bdl;b=L5();c=B(162);d=B(163);$p=3;case 3:ASd(e,b,c,d);if(C()){break _;}b=new O$;c=a.A;d=a.bo;b.cD=J(Kb,3);b.sy=new DA;if(c!==null)b.mY=c;b.jh=d;f=0;while(f<3){b.cD.data[f]=Ch();f=f+1|0;}a.c6=b;Ei(a,B(164));b=new NI;Nu(b);b.g9=Ch();b.vF=new DA;b.F_=null;b.rZ=0;b.IR=1.0;b.b3=a;a.n2=b;return;default:E_();}}C3().s(a,
b,c,d,e,f,$p);}
function Yz(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=FH(a.cc,a.bB);c=b.fO;d=b.fK;D3(16640);C_(5889);C$();Io(0.0,c,d,0.0,1000.0,3000.0);C_(5888);C$();Bu(0.0,0.0,(-2000.0));FN(0,0,a.cc,a.bB);Hz(0.0,0.0,0.0,0.0);Bc(2896);Bc(2912);Ba(3553);BA();e=BeY;f=3553;b=a.bo;g=B(165);$p=1;case 1:$z=AHK(b,g);if(C()){break _;}d=$z;Cq(f,d);BW(1.0,1.0,1.0,1.0);Bz(e);ES(e,4210752);G(e,0.0,a.bB,0.0,0.0,a.bB/32.0
+0.0);G(e,a.cc,a.bB,0.0,a.cc/32.0,a.bB/32.0+0.0);G(e,a.cc,0.0,0.0,a.cc/32.0,0.0);G(e,0.0,0.0,0.0,0.0,0.0);Bt(e);Ba(3008);SB(516,0.10000000149011612);Cz(a.e$,B(166),8,(a.bB/2|0)-16|0,(-1));return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AD8(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D instanceof RH)return;if(a.D!==null){c=a.D;$p=1;continue _;}if(b===null&&a.A===null)b=L5();else if(b===null&&a.f.bU<=0){b=new MD;DQ(b);}a.D=b;if(b===null){$p=2;continue _;}W_(a);c=FH(a.cc,a.bB);d=c.fO;e=c.fK;$p=3;continue _;case 1:c.pw();if(C()){break _;}if(b===null&&a.A===null)b=L5();else if(b===null&&a.f.bU<=0){b=new MD;DQ(b);}a.D=b;if(b===null){$p=2;continue _;}W_(a);c
=FH(a.cc,a.bB);d=c.fO;e=c.fK;$p=3;continue _;case 2:AFy(a);if(C()){break _;}return;case 3:AQl(b,a,d,e);if(C()){break _;}a.ia=0;return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ASd(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=new UR;DQ(e);e.qy=Ch();e.EJ=b;e.AP=c;e.AO=d;$p=1;case 1:AD8(a,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Ei(a,b){var c,d,e,f;BJ();Bb();c=BdV.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(167);break a;case 1281:d=B(168);break a;case 1282:d=B(169);break a;case 1285:d=B(170);break a;default:d=B(171);break a;}d=B(172);}B7(DT(),B(173));e=DT();f=new T;V(f);B7(e,U(H(H(f,B(174)),b)));b=DT();e=new T;V(e);B7(b,U(H(H(Be(e,c),B(12)),d)));}}
function Yt(a){var b,c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hA=1;$p=1;case 1:AID(a);if(C()){break _;}b=B9();c=0;if(!a.hA)return;BeZ=0;Be0=0;if(!a.bs)FO(a.bc);else{d=a.bc.cY;FO(a.bc);a.bc.cY=d;}e=0;if(e<a.bc.i9){a.bO=a.bO+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bc.cY=1.0;Ba(3553);if(a.A!==null&&!a.k.bw){f=a.A;$p=4;continue _;}if(!a.ia){GR(a.cB,a.bc.cY);f=a.eV;d
=a.bc.cY;$p=3;continue _;}if(BP(33)&&BP(7))FW(a);else a.gV=EG();$p=5;continue _;case 2:AFR(a);if(C()){break _;}e=e+1|0;if(e<a.bc.i9){a.bO=a.bO+1|0;continue _;}Ei(a,B(175));if(a.bs)a.bc.cY=1.0;Ba(3553);if(a.A!==null&&!a.k.bw){f=a.A;$p=4;continue _;}if(!a.ia){GR(a.cB,a.bc.cY);f=a.eV;d=a.bc.cY;$p=3;continue _;}if(BP(33)&&BP(7))FW(a);else a.gV=EG();$p=5;continue _;case 3:AF2(f,d);if(C()){break _;}if(BP(33)&&BP(7))FW(a);else a.gV=EG();$p=5;continue _;case 4:$z=AIA(f);if(C()){break _;}g=$z;if(g){f=a.A;continue _;}if
(!a.ia){GR(a.cB,a.bc.cY);f=a.eV;d=a.bc.cY;$p=3;continue _;}if(BP(33)&&BP(7))FW(a);else a.gV=EG();$p=5;case 5:XL();if(C()){break _;}$p=6;case 6:AVa();if(C()){break _;}if(!(LL()==a.cc&&MS()==a.bB)){a.cc=BdS.width;a.bB=BdS.height;if(a.cc<=0)a.cc=1;if(a.bB<=0)a.bB=1;g=a.cc;h=a.bB;if(g<=0)g=1;if(h<=0)h=1;a.cc=g;a.bB=h;if(a.D!==null){f=FH(g,h);h=f.fO;g=f.fK;f=a.D;$p=8;continue _;}}if(a.k.mu){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof E2){f=$$je;}else{throw $$e;}}f.tJ();}Ei(a,
B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oe()?1:0;while(true){j=B9();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new T;V(f);f=H(Be(f,c),B(177));Ty();a.lD=U(H(Be(f,Be1),B(178)));Be1=0;c=0;b=i;}if(!a.hA)return;BeZ=0;Be0=0;if(!a.bs)FO(a.bc);else{d=a.bc.cY;FO(a.bc);a.bc.cY=d;}e=0;if(e<a.bc.i9){a.bO=a.bO+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bc.cY=1.0;Ba(3553);if(a.A!==null&&!a.k.bw){f=a.A;$p=4;continue _;}if(!a.ia){GR(a.cB,a.bc.cY);f=a.eV;d=a.bc.cY;$p=3;continue _;}if(BP(33)&&BP(7))FW(a);else a.gV
=EG();$p=5;continue _;case 7:a:{try{AKS(i);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof E2){f=$$je;}else{throw $$e;}}f.tJ();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oe()?1:0;while(true){j=B9();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new T;V(f);f=H(Be(f,c),B(177));Ty();a.lD=U(H(Be(f,Be1),B(178)));Be1=0;c=0;b=i;}if(!a.hA)return;BeZ=0;Be0=0;if(!a.bs)FO(a.bc);else{d=a.bc.cY;FO(a.bc);a.bc.cY=d;}e=0;if(e<a.bc.i9){a.bO=a.bO+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bc.cY
=1.0;Ba(3553);if(a.A!==null&&!a.k.bw){f=a.A;$p=4;continue _;}if(!a.ia){GR(a.cB,a.bc.cY);f=a.eV;d=a.bc.cY;$p=3;continue _;}if(BP(33)&&BP(7))FW(a);else a.gV=EG();$p=5;continue _;case 8:AQl(f,a,h,g);if(C()){break _;}if(a.k.mu){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof E2){f=$$je;}else{throw $$e;}}f.tJ();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oe()?1:0;while(true){j=B9();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new T;V(f);f=H(Be(f,c),B(177));Ty();a.lD=U(H(Be(f,
Be1),B(178)));Be1=0;c=0;b=i;}if(!a.hA)return;BeZ=0;Be0=0;if(!a.bs)FO(a.bc);else{d=a.bc.cY;FO(a.bc);a.bc.cY=d;}e=0;if(e<a.bc.i9){a.bO=a.bO+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bc.cY=1.0;Ba(3553);if(a.A!==null&&!a.k.bw){f=a.A;$p=4;continue _;}if(!a.ia){GR(a.cB,a.bc.cY);f=a.eV;d=a.bc.cY;$p=3;continue _;}if(BP(33)&&BP(7))FW(a);else a.gV=EG();$p=5;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function FW(a){var b,c,d,e,f,g,h,i,j,k,l;if(Long_eq(a.gV,Long_fromInt(-1)))a.gV=EG();b=EG();c=BeV.data;d=BeW;BeW=d+1|0;c[d&(BeV.data.length-1|0)]=Long_sub(b,a.gV);a.gV=b;D3(256);C_(5889);C$();Io(0.0,a.cc,a.bB,0.0,1000.0,3000.0);C_(5888);C$();Bu(0.0,0.0,(-2000.0));Bc(3553);BA();e=BeY;Gj(e,7);ES(e,538968064);Bl(e,0.0,a.bB-100|0,0.0);Bl(e,0.0,a.bB,0.0);Bl(e,BeV.data.length,a.bB,0.0);Bl(e,BeV.data.length,a.bB-100|0,0.0);Bt(e);f=Long_ZERO;d=0;while(d<BeV.data.length){f=Long_add(f,BeV.data[d]);d=d+1|0;}d=Long_div(Long_div(f,
Long_fromInt(200000)),Long_fromInt(BeV.data.length)).lo;Gj(e,7);ES(e,541065216);Bl(e,0.0,a.bB-d|0,0.0);Bl(e,0.0,a.bB,0.0);Bl(e,BeV.data.length,a.bB,0.0);Bl(e,BeV.data.length,a.bB-d|0,0.0);Bt(e);Gj(e,1);g=0;while(g<BeV.data.length){h=(((g-BeW|0)&(BeV.data.length-1|0))*255|0)/BeV.data.length|0;i=Bx(h,h)/255|0;d=Bx(i,i)/255|0;j=Bx(d,d)/255|0;ES(e,(((-16777216)+(Bx(j,j)/255|0)|0)+(d*256|0)|0)+(h*4096|0)|0);k=Long_div(BeV.data[g],Long_fromInt(200000));l=g+0.5;Bl(e,l,Long_toNumber(Long_sub(Long_fromInt(a.bB),k))+
0.5,0.0);Bl(e,l,a.bB+0.5,0.0);g=g+1|0;}Bt(e);Ba(3553);}
function AFy(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Ot()&&!a.bp){a.bp=1;YK(a.yA);b=null;$p=1;continue _;}return;case 1:AD8(a,b);if(C()){break _;}a.cp=a.bO+10000|0;return;default:E_();}}C3().s(a,b,$p);}
function W_(a){if(a.bp){if(a.f!==null)ARX(a.f);a.bp=0;AFP(a.yA);}}
function ALn(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D!==null)return;b=BcD();$p=1;case 1:AD8(a,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function AAS(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.cB.D_&&!(!b&&a.c9>0)){if(c&&a.cg!==null&&!a.cg.k$&&!b){d=a.cg.ic;e=a.cg.id;f=a.cg.ie;g=a.cB;b=a.cg.hM;$p=1;continue _;}AL3(a.cB);}return;case 1:YX(g,d,e,f,b);if(C()){break _;}g=a.c6;b=a.cg.hM;$p=2;case 2:Za(g,d,e,f,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACb(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(!b&&a.c9>0)){if(!b)Pu(a.eV.iL);a:{if(a.cg!==null){if(a.cg.k$!=1){if(a.cg.k$)break a;c=a.cg.ic;d=a.cg.id;e=a.cg.ie;f=a.cg.hM;L();g=Be2.data;h=a.A;$p=1;continue _;}if(!b){h=a.f;i=a.cg.nG;$p=2;continue _;}if(b==1)Vy(a.f,a.cg.nG);}else if(!b&&!(a.cB instanceof Du))a.c9=10;}if
(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=a.f;$p=5;continue _;}}}return;case 1:$z=ACH(h,c,d,e);if(C()){break _;}k=$z;j=g[k];if(!b){h=a.A;k=a.cg.hM;$p=4;continue _;}l=D9(a.f.K);h=a.A;$p=3;continue _;case 2:ADJ(h,i);if(C()){break _;}if(b==1)Vy(a.f,a.cg.nG);if(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=a.f;$p=5;continue _;}}return;case 3:$z=ACH(h,c,d,e);if(C()){break _;}k=$z;if(k>0){h=Be2.data[k];i=a.A;j=a.f;$p=6;continue _;}if(l===null)return;m=l.q;h=a.f;i=a.A;$p=8;continue _;case 4:ABV(h,c,d,e,k);if(C())
{break _;}if(j===Be3&&a.f.A1<100){if(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=a.f;$p=5;continue _;}}return;}h=a.cB;$p=7;continue _;case 5:b:{$z=ABr(h,i,j);if(C()){break _;}i=$z;if(i===h){if(i===null)break b;if(i.q==d)break b;}a.f.K.bd.data[a.f.K.bM]=i;ANj(a.eV.iL);if(!i.q)a.f.K.bd.data[a.f.K.bM]=null;}return;case 6:$z=h.lH(i,c,d,e,j);if(C()){break _;}k=$z;if(k)return;if(l===null)return;m=l.q;h=a.f;i=a.A;$p=8;continue _;case 7:AFh(h,c,d,e);if(C()){break _;}if(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=
a.f;$p=5;continue _;}}return;case 8:$z=AJu(l,h,i,c,d,e,f);if(C()){break _;}c=$z;if(c)Pu(a.eV.iL);if(!l.q)a.f.K.bd.data[a.f.K.bM]=null;else if(l.q!=m)AG0(a.eV.iL);if(b==1){h=D9(a.f.K);if(h!==null){d=h.q;i=a.A;j=a.f;$p=5;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AH0(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.cg===null)return;b=a.A;c=a.cg.ic;d=a.cg.id;e=a.cg.ie;$p=1;case 1:$z=ACH(b,c,d,e);if(C()){break _;}c=$z;L();if(c==Be4.b)c=Be5.b;if(c==Be6.b)c=Be7.b;if(c==Be3.b)c=Be8.b;ARx(a.f.K,c,a.cB instanceof Du);return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AFR(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AKM(a.n2);if(!a.bs&&a.A!==null){b=a.cB;$p=2;continue _;}c=3553;d=a.bo;b=B(179);$p=1;case 1:$z=AHK(d,b);if(C()){break _;}e=$z;Cq(c,e);if(a.D===null&&a.f!==null&&a.f.bU<=0){b=null;$p=3;continue _;}if(a.D!==null&&!a.D.pU){if(a.D!==null)a.cp=a.bO+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i6=a.k.j0;if(!a.bs){b=a.eV;$p=7;continue _;}if
(!a.bs&&!a.k.bw)HT(a.dU);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dz=B9();return;}a:while(true){if(!Fy()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(Cb(0)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(Cb(1)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bf(),CV());if
(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bf()==1)break;if(a.cB instanceof Du){Bf();Bf();}if(Bf()==33&&BP(6)){a.k.cC=a.k.cC?0:1;a.cU=a.cU?0:1;}if(Bf()==a.k.fv.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bf()==a.k.gr.bJ){b=a.f;d=El(a.f.K,a.f.K.bM,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bf()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bf()!=a.k.gc.bJ)continue;D_(a.k,4,!BP(42)&&!BP(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B9(),a.dz),Long_fromInt(200)))continue;c=G2();if(c)F4(a.f.K,c);b:{if(a.D!==null){if
(a.D===null)break b;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cy()){$p=8;continue _;}if(!CW()&&Cy()){c=0;$p=11;continue _;}if(CW()==1&&Cy()){c=1;$p=14;continue _;}if(CW()==2&&Cy())break a;}}$p=16;continue _;case 2:AJf(b);if(C()){break _;}c=3553;d=a.bo;b=B(179);$p=1;continue _;case 3:AD8(a,b);if(C()){break _;}if(a.D!==null&&!a.D.pU){if(a.D!==null)a.cp=a.bO+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i6=a.k.j0;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs&&!a.k.bw)HT(a.dU);if(!a.bs){b=a.A;$p=13;continue _;}if
(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dz=B9();return;}c:while(true){if(!Fy()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(Cb(0)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(Cb(1)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bf(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bf()
==1)break;if(a.cB instanceof Du){Bf();Bf();}if(Bf()==33&&BP(6)){a.k.cC=a.k.cC?0:1;a.cU=a.cU?0:1;}if(Bf()==a.k.fv.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bf()==a.k.gr.bJ){b=a.f;d=El(a.f.K,a.f.K.bM,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bf()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bf()!=a.k.gc.bJ)continue;D_(a.k,4,!BP(42)&&!BP(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B9(),a.dz),Long_fromInt(200)))continue;c=G2();if(c)F4(a.f.K,c);d:{if(a.D!==null){if(a.D===null)break d;else{b=a.D;$p=5;continue _;}}if(!a.bp&&
Cy()){$p=8;continue _;}if(!CW()&&Cy()){c=0;$p=11;continue _;}if(CW()==1&&Cy()){c=1;$p=14;continue _;}if(CW()==2&&Cy())break c;}}$p=16;continue _;case 4:AHk(b);if(C()){break _;}if(a.D!==null)a.D.rE();if(a.A!==null){a.A.i6=a.k.j0;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs&&!a.k.bw)HT(a.dU);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dz=B9();return;case 5:ZM(b);if(C()){break _;}while
(true){while(true){if(!Fy()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(Cb(0)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(Cb(1)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bf(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bf()==1)break;if(a.cB instanceof Du){Bf();Bf();}if(Bf()==33&&BP(6)){a.k.cC=a.k.cC?0:1;a.cU=a.cU?0:1;}if(Bf()==a.k.fv.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bf()==
a.k.gr.bJ){b=a.f;d=El(a.f.K,a.f.K.bM,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bf()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bf()!=a.k.gc.bJ)continue;D_(a.k,4,!BP(42)&&!BP(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B9(),a.dz),Long_fromInt(200)))continue;else break;}c=G2();if(c)F4(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;continue _;}}if(!a.bp&&Cy()){$p=8;continue _;}if(!CW()&&Cy()){c=0;$p=11;continue _;}if(CW()==1&&Cy()){c=1;$p=14;continue _;}if(CW()!=2)continue;if(!Cy())continue;else break;}$p
=16;continue _;case 6:ASQ(b);if(C()){break _;}while(true){e=0;while(e<9){if(Bf()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bf()==a.k.gc.bJ)D_(a.k,4,!BP(42)&&!BP(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(Cb(0)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(Cb(1)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bf(),CV());if(!CV())continue;else break;}if(a.D!==null){b=a.D;continue _;}if(Bf()==1)break;if(a.cB instanceof Du){Bf();Bf();}if
(Bf()==33&&BP(6)){a.k.cC=a.k.cC?0:1;a.cU=a.cU?0:1;}if(Bf()==a.k.fv.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bf()!=a.k.gr.bJ)continue;else{b=a.f;d=El(a.f.K,a.f.K.bM,1);c=0;$p=20;continue _;}}$p=9;continue _;case 7:AI3(b);if(C()){break _;}if(!a.bs&&!a.k.bw)HT(a.dU);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(a.bs){if(a.bs){a.dz=B9();return;}b=a.c6;$p=21;continue _;}b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 8:AFy(a);if(C()){break _;}while(true){while(true){if(!Fy())
{if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(Cb(0)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(Cb(1)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bf(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bf()==1)break;if(a.cB instanceof Du){Bf();Bf();}if(Bf()==33&&BP(6)){a.k.cC=a.k.cC?0:1;a.cU=a.cU?0:1;}if(Bf()==a.k.fv.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bf()==a.k.gr.bJ){b=a.f;d=El(a.f.K,
a.f.K.bM,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bf()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bf()!=a.k.gc.bJ)continue;D_(a.k,4,!BP(42)&&!BP(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B9(),a.dz),Long_fromInt(200)))continue;else break;}c=G2();if(c)F4(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cy()){continue _;}if(!CW()&&Cy()){c=0;$p=11;continue _;}if(CW()==1&&Cy()){c=1;$p=14;continue _;}if(CW()!=2)continue;if(!Cy())continue;else break;}$p=16;continue _;case 9:ALn(a);if
(C()){break _;}while(true){if(a.cB instanceof Du){Bf();Bf();}if(Bf()==33&&BP(6)){a.k.cC=a.k.cC?0:1;a.cU=a.cU?0:1;}if(Bf()==a.k.fv.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bf()==a.k.gr.bJ){b=a.f;d=El(a.f.K,a.f.K.bM,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bf()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bf()==a.k.gc.bJ)D_(a.k,4,!BP(42)&&!BP(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(Cb(0)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(Cb(1)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=
0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bf(),CV());if(!CV())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bf()!=1)continue;else break;}continue _;case 10:AAS(a,c,e);if(C()){break _;}if(a.D!==null)a.cp=a.bO+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i6=a.k.j0;if(!a.bs){b=a.eV;$p=7;continue _;}if(!a.bs&&!a.k.bw)HT(a.dU);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if
(!a.bs){b=a.c6;$p=21;continue _;}}a.dz=B9();return;case 11:ACb(a,c);if(C()){break _;}a.cp=a.bO;while(true){if(CW()==1&&Cy()){c=1;$p=14;continue _;}if(CW()==2&&Cy()){$p=16;continue _;}while(true){while(true){if(!Fy()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(Cb(0)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(Cb(1)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bf(),CV());if(!CV())continue;if(a.D!==null)
{b=a.D;$p=6;continue _;}if(Bf()==1)break;if(a.cB instanceof Du){Bf();Bf();}if(Bf()==33&&BP(6)){a.k.cC=a.k.cC?0:1;a.cU=a.cU?0:1;}if(Bf()==a.k.fv.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bf()==a.k.gr.bJ){b=a.f;d=El(a.f.K,a.f.K.bM,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bf()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bf()!=a.k.gc.bJ)continue;D_(a.k,4,!BP(42)&&!BP(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B9(),a.dz),Long_fromInt(200)))continue;else break;}c=G2();if(c)F4(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else
{b=a.D;$p=5;continue _;}}if(!a.bp&&Cy())break;if(CW())continue;if(!Cy())continue;else{c=0;continue _;}}$p=8;continue _;case 12:ACb(a,c);if(C()){break _;}a.cp=a.bO;if(Cb(1)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=1;$p=15;continue _;}c=0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;case 13:APs(b);if(C()){break _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(a.bs){if(a.bs){a.dz=B9();return;}b=a.c6;$p=21;continue _;}b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 14:ACb(a,c);if(C()){break _;}a.cp=a.bO;while
(true){if(CW()==2&&Cy()){$p=16;continue _;}while(true){while(true){if(!Fy()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(Cb(0)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(Cb(1)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bf(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bf()==1)break;if(a.cB instanceof Du){Bf();Bf();}if(Bf()==33&&BP(6)){a.k.cC=a.k.cC?0:1;a.cU=a.cU?0:1;}if(Bf()==a.k.fv.bJ)
{b=E7(a.f.K);$p=17;continue _;}if(Bf()==a.k.gr.bJ){b=a.f;d=El(a.f.K,a.f.K.bM,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bf()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bf()!=a.k.gc.bJ)continue;D_(a.k,4,!BP(42)&&!BP(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B9(),a.dz),Long_fromInt(200)))continue;else break;}c=G2();if(c)F4(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cy())break;if(!CW()&&Cy()){c=0;$p=11;continue _;}if(CW()!=1)continue;if(!Cy())continue;else{c=1;continue _;}}$p
=8;continue _;case 15:ACb(a,c);if(C()){break _;}a.cp=a.bO;c=0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;case 16:AH0(a);if(C()){break _;}while(true){while(true){if(!Fy()){if(a.c9>0)a.c9=a.c9-1|0;while(true){if(!DU()){if(a.D===null){if(Cb(0)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(Cb(1)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bf(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bf()==1)break;if
(a.cB instanceof Du){Bf();Bf();}if(Bf()==33&&BP(6)){a.k.cC=a.k.cC?0:1;a.cU=a.cU?0:1;}if(Bf()==a.k.fv.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bf()==a.k.gr.bJ){b=a.f;d=El(a.f.K,a.f.K.bM,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bf()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bf()!=a.k.gc.bJ)continue;D_(a.k,4,!BP(42)&&!BP(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B9(),a.dz),Long_fromInt(200)))continue;else break;}c=G2();if(c)F4(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cy())
{$p=8;continue _;}if(!CW()&&Cy()){c=0;$p=11;continue _;}if(CW()==1&&Cy()){c=1;$p=14;continue _;}if(CW()!=2)continue;if(!Cy())continue;else break;}continue _;case 17:AD8(a,b);if(C()){break _;}while(true){if(Bf()==a.k.gr.bJ){b=a.f;d=El(a.f.K,a.f.K.bM,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bf()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bf()==a.k.gc.bJ)D_(a.k,4,!BP(42)&&!BP(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(Cb(0)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(Cb(1)&&(a.bO-a.cp|0)>=a.bc.c8
/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bf(),CV());if(!CV())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bf()==1)break;if(a.cB instanceof Du){Bf();Bf();}if(Bf()==33&&BP(6)){a.k.cC=a.k.cC?0:1;a.cU=a.cU?0:1;}if(Bf()!=a.k.fv.bJ)continue;else{b=E7(a.f.K);continue _;}}$p=9;continue _;case 18:AFn(b,c,e,f);if(C()){break _;}if(a.bs){a.dz=B9();return;}b=a.c6;$p=21;continue _;case 19:Yc(b);if(C()){break _;}if(a.bs){if(a.bs){a.dz=B9();return;}b=a.c6;$p
=21;continue _;}b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 20:AQJ(b,d,c);if(C()){break _;}while(true){e=0;while(e<9){if(Bf()==(2+e|0))a.f.K.bM=e;e=e+1|0;}if(Bf()==a.k.gc.bJ)D_(a.k,4,!BP(42)&&!BP(54)?1:(-1));while(true){if(!DU()){if(a.D===null){if(Cb(0)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(Cb(1)&&(a.bO-a.cp|0)>=a.bc.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&Cb(0)&&a.bp?1:0;$p=10;continue _;}Et(a.f,Bf(),CV());if(!CV())continue;else break;}if(a.D!==null){b=
a.D;$p=6;continue _;}if(Bf()==1)break;if(a.cB instanceof Du){Bf();Bf();}if(Bf()==33&&BP(6)){a.k.cC=a.k.cC?0:1;a.cU=a.cU?0:1;}if(Bf()==a.k.fv.bJ){b=E7(a.f.K);$p=17;continue _;}if(Bf()!=a.k.gr.bJ)continue;else{b=a.f;d=El(a.f.K,a.f.K.bM,1);c=0;continue _;}}$p=9;continue _;case 21:AA9(b);if(C()){break _;}a.dz=B9();return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function GG(a){return 0;}
function AIa(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:ABW(a,c);if(C()){break _;}c=new GI;d=Gy(new DA);$p=2;case 2:Q9(c,b,d);if(C()){break _;}if(!c.tK){b=B(180);$p=3;continue _;}b=B(181);$p=4;continue _;case 3:AGi(a,c,b);if(C()){break _;}return;case 4:AGi(a,c,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ABW(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=B(3);$p=1;case 1:AGi(a,b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AGi(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.A!==null){d=a.A;e=a.jn;$p=1;continue _;}a.A=b;if(b===null){a.dz=Long_ZERO;return;}b.Dn=a.e$;a.f=null;b.bg=a.f;$p=2;continue _;case 1:AJv(d,e);if(C()){break _;}a.A=b;if(b===null){a.dz=Long_ZERO;return;}b.Dn=a.e$;a.f=null;b.bg=a.f;$p=2;case 2:AOa(a,c);if(C()){break _;}if(a.f===null){a.f=A6X(a,b,a.k2);c=a.f;$p=3;continue _;}a.f.h1=V$(a.k);if(a.dU!==null)Ra(a.dU,
b);if(a.c6!==null)O_(a.c6,b);b.bg=a.f;$p=4;continue _;case 3:ALj(c);if(C()){break _;}Rn(a.cB,a.f);a.f.h1=V$(a.k);if(a.dU!==null)Ra(a.dU,b);if(a.c6!==null)O_(a.c6,b);b.bg=a.f;$p=4;case 4:AGF(b);if(C()){break _;}if(!b.tK){a.dz=Long_ZERO;return;}c=a.jn;$p=5;case 5:AJv(b,c);if(C()){break _;}a.dz=Long_ZERO;return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AOa(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:APc(a.jn,b);b=a.jn;c=B(182);$p=1;case 1:ASk(b,c);if(C()){break _;}d=128;e=289;f=(-128);g=f;while(g<=d){h=a.A.fk;i=a.A.fj;if(a.A.bg!==null){h=a.A.bg.d|0;i=a.A.bg.e|0;}j=f;if(j<=d){b=a.jn;k=0+1|0;l=(0*100|0)/e|0;$p=4;continue _;}g=g+16|0;}b=a.jn;c=B(183);$p=2;case 2:ASk(b,
c);if(C()){break _;}l=2000;Be9=1;d=0;if(d>=l){Wl(a.A);Be9=0;return;}b=a.A;m=1;$p=3;case 3:ABC(b,m);if(C()){break _;}d=d+1|0;if(d>=l){Wl(a.A);Be9=0;return;}b=a.A;m=1;continue _;case 4:XR(b,l);if(C()){break _;}b=a.A;l=h+g|0;m=64;n=i+j|0;$p=5;case 5:ACH(b,l,m,n);if(C()){break _;}b=a.A;$p=6;case 6:$z=AIA(b);if(C()){break _;}l=$z;if(l){b=a.A;continue _;}j=j+16|0;m=k;while(true){if(j<=d){b=a.jn;k=m+1|0;l=(m*100|0)/e|0;$p=4;continue _;}g=g+16|0;if(g>d)break;h=a.A.fk;i=a.A.fj;if(a.A.bg!==null){h=a.A.bg.d|0;i=a.A.bg.e
|0;}j=f;}b=a.jn;c=B(183);$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Mz(a){return ALy(a.dU);}
function Oy(a){return Ya(a.dU);}
function M2(a){var b;b=new T;V(b);return U(H(H(H(H(b,B(184)),XH(a.c6)),B(185)),AOj(a.A)));}
function ASN(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.f!==null&&a.A!==null){b=a.f;$p=5;continue _;}b=a.A;$p=1;case 1:AQi(b);if(C()){break _;}a.f=A6X(a,a.A,a.k2);b=a.f;$p=2;case 2:ALj(b);if(C()){break _;}Rn(a.cB,a.f);if(a.A!==null){a.A.bg=a.f;b=a.A;$p=4;continue _;}a.f.h1=V$(a.k);b=B(186);$p=3;case 3:AOa(a,b);if(C()){break _;}return;case 4:AGF(b);if(C()){break _;}a.f.h1=V$(a.k);b=B(186);$p=3;continue _;case 5:Cd(b);if(C()){break _;}b=a.A;$p=1;continue _;default:
E_();}}C3().s(a,b,$p);}
function AIV(){return Bdl;}
function AAa(){BeV=$rt_createLongArray(512);BeW=0;}
function ZS(){D.call(this);}
function Be$(){var a=new ZS();A3k(a);return a;}
function A3k(a){return;}
function Ot(){var b,c;Bb();b=document.pointerLockElement!=null?1:0;c=Bev;Bev=b;if(!c&&b){Bd_=0.0;Bea=0.0;}a:{b:{if(Bee){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AVa(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Bb();ANN(BdV);b=BdT;c=BdU;d=BdS.width;e=BdS.height;b.drawImage(c,0.0,0.0,d,e);f=BdS.clientWidth;g=BdS.clientHeight;if(!(f==Beb&&g==Bec)){Beb=f;Bec=g;c=BdU;h=f;c.width=h;c=BdU;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof E2){}else{throw $$e;}}return;case 1:a:{try{AKS(i);if
(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof E2){}else{throw $$e;}}}return;default:E_();}}C3().s(b,c,d,e,f,g,h,i,$p);}
function MB(){var a=this;D.call(a);a.op=null;a.Gi=null;a.GP=null;}
var Be_=null;function Bbw(){Bbw=Br(MB);A_Q();}
function A_Q(){var b;Be_=Ch();b=Be_;L();S(b,Be8);S(Be_,Bfa);S(Be_,Bfb);S(Be_,Be5);S(Be_,Bfc);S(Be_,Bfd);S(Be_,Bfe);S(Be_,Bff);S(Be_,Be7);S(Be_,Bfg);S(Be_,Bfh);S(Be_,Bfi);S(Be_,Bfj);S(Be_,Bfk);S(Be_,Bfl);S(Be_,Bfm);S(Be_,Bfn);S(Be_,Bfo);S(Be_,Bfp);S(Be_,Bfq);S(Be_,Bfr);S(Be_,Bfs);S(Be_,Bft);S(Be_,Bfu);S(Be_,Bfv);S(Be_,Bfw);S(Be_,Bfx);S(Be_,Bfy);ABY(DT(),Be_.p);}
function Gn(){var a=this;D.call(a);a.JP=Long_ZERO;a.Ew=0;a.D5=Long_ZERO;a.xc=0;a.mU=null;a.C$=null;a.F5=null;a.wQ=0;a.yS=null;}
var Bfz=null;var Bdg=null;var BfA=Long_ZERO;var BfB=0;function BfC(){var a=new Gn();AHQ(a);return a;}
function Bcs(a){var b=new Gn();T0(b,a);return b;}
function Bai(a,b){var c=new Gn();Og(c,a,b);return c;}
function AHQ(a){Og(a,null,null);}
function T0(a,b){Og(a,null,b);}
function Og(a,b,c){var d;a.mU=new D;a.wQ=1;a.F5=c;a.yS=b;d=BfA;BfA=Long_add(d,Long_fromInt(1));a.JP=d;}
function Tt(a){var b;b=new WH;b.z9=a;AZ3(b);}
function Ft(b){if(Bdg!==b)Bdg=b;Bdg.D5=B9();}
function ARC(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.yS===null)return;b=a.yS;$p=1;case 1:Yt(b);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function AS0(){return Bdg;}
function A1C(a,b){a.Ew=b;}
function XL(){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=Bdg;c=b.xc+1|0;b.xc=c;if(c<30)return;Bdg.xc=0;if(Long_ge(Long_add(b.D5,Long_fromInt(100)),B9()))return;$p=1;case 1:AL1(b);if(C()){break _;}return;default:E_();}}C3().s(b,c,$p);}
function AL1(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.GF=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaU(callback);return thread.suspend(function(){try{A3_(b,callback);}catch($e){callback.I6($rt_exception($e));}});}
function A3_(b,c){var d;d=new S7;d.Cp=b;d.Co=c;Q$(d);}
function AKS(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.GF=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaU(callback);return thread.suspend(function(){try{AVH(b,callback);}catch($e){callback.I6($rt_exception($e));}});}
function AVH(b,c){var d,e;d=Bdg;e=new Pq;e.wB=d;e.Bn=c;e.Jz=AFU(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.C$=e;}
function Zg(){Bfz=Bcs(B(187));Bdg=Bfz;BfA=Long_fromInt(1);BfB=1;}
function DO(){}
function Xe(){D.call(this);}
function BfD(){var a=new Xe();A2C(a);return a;}
function A2C(a){return;}
function ASR(a,b){b.preventDefault();b.stopPropagation();}
function ACt(a,b){ASR(a,b);}
function A$$(a,b){ACt(a,b);}
function Xk(){D.call(this);}
function BfE(){var a=new Xk();AZx(a);return a;}
function AZx(a){return;}
function ART(a,b){var c,d;c=b.button;d=RV();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;Fv(M5(),b);b.preventDefault();b.stopPropagation();MI();}
function AI$(a,b){ART(a,b);}
function AXX(a,b){AI$(a,b);}
function Xl(){D.call(this);}
function BfF(){var a=new Xl();AXw(a);return a;}
function AXw(a){return;}
function AQF(a,b){var c,d;c=b.button;d=RV();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;Fv(M5(),b);b.preventDefault();b.stopPropagation();}
function Z3(a,b){AQF(a,b);}
function A3Q(a,b){Z3(a,b);}
function Xi(){D.call(this);}
function BfG(){var a=new Xi();A5l(a);return a;}
function A5l(a){return;}
function AOR(a,b){var c;Bb();Bd9=b.offsetX;Bd$=BdS.clientHeight-b.offsetY|0;c=b.movementX;Bd_=Bd_+c;c= -b.movementY;Bea=Bea+c;b.preventDefault();b.stopPropagation();}
function ADz(a,b){AOR(a,b);}
function AS2(a,b){ADz(a,b);}
function Xj(){D.call(this);}
function BfH(){var a=new Xj();A_2(a);return a;}
function A_2(a){return;}
function AEW(a,b){P_().data[Tc(QN(b))]=1;Fv(N2(),b);b.preventDefault();b.stopPropagation();MI();}
function AQP(a,b){AEW(a,b);}
function A31(a,b){AQP(a,b);}
function Xg(){D.call(this);}
function BfI(){var a=new Xg();A4n(a);return a;}
function A4n(a){return;}
function ZO(a,b){P_().data[Tc(QN(b))]=0;Fv(N2(),b);b.preventDefault();b.stopPropagation();}
function X6(a,b){ZO(a,b);}
function A2A(a,b){X6(a,b);}
function Xh(){D.call(this);}
function BfJ(){var a=new Xh();AXL(a);return a;}
function AXL(a){return;}
function ASo(a,b){Bb();if(Bed&&(b.repeat?1:0))Fv(N2(),b);b.preventDefault();b.stopPropagation();}
function ALd(a,b){ASo(a,b);}
function A6M(a,b){ALd(a,b);}
function Xf(){D.call(this);}
function BfK(){var a=new Xf();A3i(a);return a;}
function A3i(a){return;}
function AFA(a,b){Fv(M5(),b);b.preventDefault();b.stopPropagation();}
function ACI(a,b){AFA(a,b);}
function AUx(a,b){ACI(a,b);}
function QI(){D.call(this);}
function BfL(){var a=new QI();A2s(a);return a;}
function A2s(a){return;}
function AFC(a,b){S2(0);}
function AMD(a,b){AFC(a,b);}
function A7m(a,b){AMD(a,b);}
function QH(){D.call(this);}
function BfM(){var a=new QH();A4h(a);return a;}
function A4h(a){return;}
function AG3(a,b){S2(1);MI();}
function AMC(a,b){AG3(a,b);}
function AY0(a,b){AMC(a,b);}
function N8(){D.call(this);}
var BfN=null;var BeS=null;function BfO(){var a=new N8();AEk(a);return a;}
function AEk(a){return;}
function AJ2(){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(188);$p=1;case 1:$z=A3W(b);if(C()){break _;}b=$z;if(b===null){BfN=B(171);return BfP;}if(b.Fj)return BfQ;if(!b.Fw&&b.x9!==null){BeS=b.x9;return BfR;}BfN=b.uK!==null?b.uK:B(189);return BfP;default:E_();}}C3().s(b,$p);}
function AQf(b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=BeS;$p=1;case 1:$z=AUJ(c,b);if(C()){break _;}b=$z;return b!==BfS?0:1;default:E_();}}C3().s(b,c,$p);}
function AJo(b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AQf(b);if(C()){break _;}c=$z;if(c)return;c=LZ(b,47);if(c>0){d=Ev(b,0,c);$p=3;continue _;}d=BeS;c=1;e=new ArrayBuffer(0);$p=2;case 2:AX7(d,b,c,e);if(C()){break _;}return;case 3:AJo(d);if(C()){break _;}d=BeS;c=1;e=new ArrayBuffer(0);$p=2;continue _;default:E_();}}C3().s(b,c,d,e,$p);}
function AHS(){BfN=B(3);BeS=null;}
function AA7(){D.call(this);}
function AYH(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function U4(){D.call(this);}
var BeR=null;function BfT(){var a=new U4();AQI(a);return a;}
function AQI(a){return;}
function AMm(b){var c,d,e,f,g,h,i,j,k,l,m;c=Ut(b);d=O9(c);e=$rt_createByteArray(8);N5(d,e);if(!DB(B(190),A3j(e,Yd(B(24))))){c=new B2;Bj(c,B(191));M(c);}GV(d);f=new P$;d=new WY;g=new Ur;O0(g);g.rX=0;h=Sb(g,15,0);if(h){c=new Qc;f=new T;V(f);Bj(c,U(H(H(Be(f,h),B(12)),g.b8)));M(c);}Sc(d,c);d.qk=0;d.oO=0;d.ET=1;d.Ev=0;d.wT=$rt_createByteArray(1);d.Hc=$rt_createByteArray(512);d.g5=g;d.oo=$rt_createByteArray(512);d.ET=1;d.Ev=1;AIJ(f,d);g=Ba_();while(true){d=GV(f);if(!DB(B(192),d)){if(AKP(f)<=0&&DB(B(193),d))return;c
=new B2;Bj(c,B(191));M(c);}i=GV(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);N5(f,j);l=H6(f);m=$rt_createByteArray(l);N5(f,m);if(DZ(BeR,i))continue;a:{AD6(g,m,0,l);AMk(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){l=0;while(l<h){if(b[l]!=e[l]){h=0;break a;}l=l+1|0;}h=1;break a;}}h=0;}}if(!h){c=new B2;f=new T;V(f);Bj(c,U(H(H(f,B(194)),i)));M(c);}BT(BeR,i,m);if(!DB(B(195),GV(f)))break;}c=new B2;Bj(c,B(191));M(c);}
function Zq(){BeR=De();}
function B2(){BF.call(this);}
function BfU(){var a=new B2();A38(a);return a;}
function A38(a){O(a);}
function LB(){HL.call(this);}
function BfV(){var a=new LB();A6y(a);return a;}
function A6y(a){V(a);}
function A05(a,b){Dy(a,b);return a;}
function A2q(a,b,c,d){IW(a,b,c,d);return a;}
function AVU(a,b){Hi(a,b);return a;}
function A7S(a,b,c,d,e){Ke(a,b,c,d,e);return a;}
function A$6(a,b,c){Lh(a,b,c);return a;}
function AWd(a,b,c,d,e){Ke(a,b,c,d,e);return a;}
function A4s(a,b,c,d){IW(a,b,c,d);return a;}
function AIs(a,b){var c;if(b>=0&&b<a.bZ)return a.N.data[b];c=new BQ;O(c);M(c);}
function OJ(a){return a.bZ;}
function A4z(a){return U(a);}
function A4J(a,b){Nd(a,b);}
function A$l(a,b,c){Lh(a,b,c);return a;}
function Fz(){}
function V9(){D.call(this);}
function BfW(){var a=new V9();AZB(a);return a;}
function AZB(a){return;}
function Fj(){D.call(this);this.l5=0;}
var BfX=null;var BfY=null;var BfZ=null;var Bf0=null;var Bf1=null;var Bf2=null;function A2z(a){var b=new Fj();AA2(b,a);return b;}
function AA2(a,b){a.l5=b;}
function BK(b){var c;if(b>=Bf0.data.length)return A2z(b);c=Bf0.data[b];if(c===null){c=A2z(b);Bf0.data[b]=c;}return c;}
function A_c(a,b){if(a===b)return 1;return b instanceof Fj&&b.l5==a.l5?1:0;}
function A$W(a){return a.l5;}
function SL(b){var c,d;c=new B4;d=$rt_createCharArray(1);d.data[0]=b;Tx(c,d);return c;}
function ML(b){return b>=65536&&b<=1114111?1:0;}
function Dt(b){return (b&64512)!=55296?0:1;}
function DR(b){return (b&64512)!=56320?0:1;}
function OD(b){return !Dt(b)&&!DR(b)?0:1;}
function Kd(b,c){return Dt(b)&&DR(c)?1:0;}
function EJ(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function ID(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function H$(b){return (56320|b&1023)&65535;}
function EV(b){return GQ(b)&65535;}
function GQ(b){return AQe(b).toLowerCase().charCodeAt(0);}
function FD(b){return GP(b)&65535;}
function GP(b){return AQe(b).toUpperCase().charCodeAt(0);}
function Wq(b,c){if(c>=2&&c<=36){b=Ul(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Ul(b){var c,d,e,f,g,h,i,j,k;if(BfY===null){if(Bf1===null)Bf1=AMr();c=(Bf1.value!==null?$rt_str(Bf1.value):null);d=new R4;d.CU=NL(c);e=Yw(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=Yw(d);h=h+1|0;}BfY=f;}f=BfY.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=R(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function I1(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Iw(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=ID(b);d[1]=H$(b);return c;}
function Dp(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&OD(b&65535))return 19;if(BfZ===null){if(Bf2===null)Bf2=AHZ();BfZ=A20((Bf2.value!==null?$rt_str(Bf2.value):null));}d=BfZ.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.AF)e=f+1|0;else{if(b>=g.xr)return g.Dj.data[b-g.xr|0];c=f-1|0;}}return 0;}
function Lw(b){a:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Iu(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Dp(b)!=16?0:1;}
function UD(b){switch(Dp(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Qp(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return UD(b);}return 1;}
function ADr(a,b){return a.l5-b.l5|0;}
function A3p(a,b){return ADr(a,b);}
function AI8(){BfX=F($rt_charcls());Bf0=J(Fj,128);}
function AMr(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function AHZ(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
function IY(){var a=this;D.call(a);a.cX=null;a.D_=0;}
function AKg(a){return 1;}
function A9k(a,b){return;}
function U0(){var a=this;IY.call(a);a.wa=0;a.wc=0;a.wb=0;a.hp=0.0;a.mR=0.0;a.oq=0.0;a.nh=0;a.Bw=null;a.BS=null;}
function Rn(a,b){b.v=(-180.0);}
function A$C(a){return;}
function AFO(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cX.A;$p=1;case 1:$z=ACH(e,b,c,d);if(C()){break _;}f=$z;e=a.cX.A;$p=2;case 2:$z=AEX(e,b,c,d);if(C()){break _;}g=$z;e=a.cX.c6;$p=3;case 3:AER(e,b,c,d);if(C()){break _;}e=a.cX.A;L();h=Be2.data;$p=4;case 4:$z=ACH(e,b,c,d);if(C()){break _;}i=$z;j=h[i];$p=5;case 5:$z=AEX(e,b,c,d);if(C()){break _;}i=
$z;k=0;$p=6;case 6:$z=APK(e,b,c,d,k);if(C()){break _;}k=$z;if(j!==null&&k){$p=7;continue _;}e=KD(a.cX.f);if(e!==null){QR(e,f,b,c,d);if(!e.q)JD(a.cX.f);}if(k&&Nn(a.cX.f,Be2.data[f])){e=Be2.data[f];j=a.cX.A;$p=8;continue _;}return k;case 7:j.nv(e,b,c,d,i);if(C()){break _;}e=KD(a.cX.f);if(e!==null){QR(e,f,b,c,d);if(!e.q)JD(a.cX.f);}if(k&&Nn(a.cX.f,Be2.data[f])){e=Be2.data[f];j=a.cX.A;$p=8;continue _;}return k;case 8:e.IX(j,b,c,d,g);if(C()){break _;}return k;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFh(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cX.A;$p=1;case 1:$z=ACH(e,b,c,d);if(C()){break _;}f=$z;if(f>0&&a.hp===0.0){L();e=Be2.data[f];g=a.cX.A;h=a.cX.f;$p=3;continue _;}if(f<=0)return;L();e=Be2.data[f];g=a.cX.f;$p=2;case 2:$z=ABq(e,g);if(C()){break _;}i=$z;if(i<1.0)return;$p=4;continue _;case 3:e.ra(g,b,c,d,h);if(C()){break _;}if(f<=0)return;L();e=Be2.data[f];g
=a.cX.f;$p=2;continue _;case 4:AFO(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AL3(a){a.hp=0.0;a.nh=0;}
function YX(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.nh>0)a.nh=a.nh-1|0;else{if(b==a.wa&&c==a.wc&&d==a.wb){f=a.cX.A;$p=1;continue _;}a.hp=0.0;a.mR=0.0;a.oq=0.0;a.wa=b;a.wc=c;a.wb=d;}return;case 1:$z=ACH(f,b,c,d);if(C()){break _;}g=$z;if(!g)return;L();f=Be2.data[g];h=a.hp;i=a.cX.f;$p=2;case 2:$z=ABq(f,i);if(C()){break _;}j=$z;a.hp=h+j;a.oq=a.oq+1.0;if(a.hp<
1.0)return;$p=3;case 3:AFO(a,b,c,d);if(C()){break _;}a.hp=0.0;a.mR=0.0;a.oq=0.0;a.nh=5;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function GR(a,b){var c;if(a.hp<=0.0){a.cX.n2.ED=0.0;a.cX.dU.tO=0.0;}else{c=a.mR+(a.hp-a.mR)*b;a.cX.n2.ED=c;a.cX.dU.tO=c;}}
function A1B(a){return 4.0;}
function A5q(a,b){return;}
function AJf(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mR=a.hp;b=a.Bw;c=a.cX.A;$p=1;case 1:ABM(b,c);if(C()){break _;}b=a.BS;c=a.cX.A;$p=2;case 2:ABM(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function SK(){var a=this;D.call(a);a.c8=0.0;a.C3=0.0;a.i9=0;a.cY=0.0;a.Dc=0.0;a.lL=0.0;a.sW=Long_ZERO;a.rY=Long_ZERO;a.nJ=0.0;}
function FO(a){var b,c,d,e,f;b=B9();c=Long_sub(b,a.sW);d=Long_div(EG(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.rY));a.nJ=a.nJ+(e-a.nJ)*0.20000000298023224;a.sW=b;a.rY=d;}if(Long_lt(c,Long_ZERO)){a.sW=b;a.rY=d;}f=Long_toNumber(d)/1000.0;e=(f-a.C3)*a.nJ;a.C3=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.lL=a.lL+e*a.Dc*a.c8;a.i9=a.lL|0;a.lL=a.lL-a.i9;if(a.i9>10)a.i9=10;a.cY=a.lL;}
function VP(){}
function R_(){var a=this;D.call(a);a.q8=null;a.ge=null;a.n5=null;a.ol=Long_ZERO;a.nF=0;}
function APc(a,b){a.nF=0;R0(a,b);}
function YT(a,b){a.nF=1;R0(a,a.n5);}
function R0(a,b){var c,d,e;a:{if(!a.ge.hA){if(a.nF)break a;b=new KZ;O(b);M(b);}a.n5=b;c=FH(a.ge.cc,a.ge.bB);d=c.fO;e=c.fK;D3(256);C_(5889);C$();Io(0.0,d,e,0.0,100.0,300.0);C_(5888);C$();Bu(0.0,0.0,(-200.0));}}
function ASk(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.ge.hA){if(a.nF)return;b=new KZ;O(b);M(b);}a.ol=Long_ZERO;a.q8=b;c=(-1);$p=1;case 1:XR(a,c);if(C()){break _;}a.ol=Long_ZERO;return;default:E_();}}C3().s(a,b,c,$p);}
function XR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.ge.hA){if(a.nF)break a;c=new KZ;O(c);M(c);}d=B9();if(Long_ge(Long_sub(d,a.ol),Long_fromInt(20))){a.ol=d;c=FH(a.ge.cc,a.ge.bB);e=c.fO;f=c.fK;D3(256);C_(5889);C$();g=e;h=f;Io(0.0,g,h,0.0,100.0,300.0);C_(5888);C$();Bu(0.0,
0.0,(-200.0));D3(16640);BA();i=BeY;c=a.ge.bo;j=B(165);$p=1;continue _;}}return;case 1:$z=AHK(c,j);if(C()){break _;}k=$z;Cq(3553,k);Bz(i);ES(i,4210752);l=f/32.0;G(i,0.0,h,0.0,0.0,l);m=e/32.0;G(i,g,h,0.0,m,l);G(i,g,0.0,0.0,m,0.0);G(i,0.0,0.0,0.0,0.0,0.0);Bt(i);if(b>=0){n=(e/2|0)-50|0;o=(f/2|0)+16|0;Bc(3553);Bz(i);ES(i,8421504);g=n;p=o;Bl(i,g,p,0.0);m=o+2|0;Bl(i,g,m,0.0);q=n+100|0;Bl(i,q,m,0.0);Bl(i,q,p,0.0);ES(i,8454016);Bl(i,g,p,0.0);Bl(i,g,m,0.0);q=n+b|0;Bl(i,q,m,0.0);Bl(i,q,p,0.0);Bt(i);Ba(3553);}c=a.ge.e$;i
=a.n5;b=(e-Dx(a.ge.e$,a.n5)|0)/2|0;r=(f/2|0)-4|0;Cz(c,i,b,r-16|0,16777215);Cz(a.ge.e$,a.q8,(e-Dx(a.ge.e$,a.q8)|0)/2|0,r+8|0,16777215);$p=2;case 2:AVa();if(C()){break _;}try{$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){}else{throw $$e;}}return;case 3:b:{try{XL();if(C()){break _;}break b;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){}else{throw $$e;}}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AF4(){var a=this;D.call(a);a.u=null;a.qz=0;a.lX=0.0;a.iL=null;a.tQ=0;a.p9=null;a.lp=null;a.In=0;a.Im=0;a.p3=null;a.dE=0.0;a.d3=0.0;a.dS=0.0;a.oh=0.0;a.mb=0.0;}
function Bb3(a){var b=new AF4();AUn(b,a);return b;}
function AUn(a,b){var c;a.qz=0;a.lX=0.0;a.p9=null;a.lp=new DA;a.In=0;a.Im=0;a.p3=H0(16);a.u=b;c=new Pk;c.eT=null;c.jd=0.0;c.rc=0.0;c.iD=0;c.jS=0;c.At=Ku();c.cO=b;a.iL=c;}
function AI3(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oh=a.mb;b=a.u.A;c=K(a.u.f.d);d=K(a.u.f.j);e=K(a.u.f.e);$p=1;case 1:$z=ANu(b,c,d,e);if(C()){break _;}f=$z;g=(3-a.u.k.hh|0)/3.0;h=f*(1.0-g)+g;a.mb=a.mb+(h-a.mb)*0.10000000149011612;a.tQ=a.tQ+1|0;AJn(a.iL);if(a.u.cU)
{b=a.u.f;i=a.u.A;d=K(b.d);j=K(b.j);k=K(b.e);l=4;m=0;n=63;e=R(64,j+4|0);j=R(64,j-4|0);o=64.0999984741211;if(m<50){p=(d+E(a.lp,9)|0)-l|0;q=(k+E(a.lp,9)|0)-l|0;$p=2;continue _;}}return;case 2:$z=ACH(i,p,n,q);if(C()){break _;}c=$z;if(e<=0&&j>=0){f=N(a.lp);g=N(a.lp);if(c>0){b=a.u.c6;r=new JV;s=p+f;L();TW(r,i,s,o-Be2.data[c].cL,q+g);Ek(b,r);}}m=m+1|0;if(m>=50)return;p=(d+E(a.lp,9)|0)-l|0;q=(k+E(a.lp,9)|0)-l|0;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function NW(a,b){var c,d,e,f;c=a.u.f;d=c.bT;e=c.d-c.bT;f=b;return BY(d+e*f,c.cS+(c.j-c.cS)*f,c.bS+(c.e-c.bS)*f);}
function AL6(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=c.R+(c.J-c.R)*b;e=c.O+(c.v-c.O)*b;f=NW(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=BC(g);i=Bp(g);g= -d*0.01745329238474369;j= -BC(g);g=Bp(g);k=i*j;l
=h*j;m=4.0;n=k;o=n*m;p=g;q=p*m;r=l;s=Dl(f,o,q,r*m);t=a.u;u=a.u.A;$p=1;case 1:$z=AJz(u,f,s);if(C()){break _;}u=$z;t.cg=u;f=NW(a,b);if(a.u.cg!==null)m=DI(a.u.cg.gE,f);if(a.u.cB instanceof Du)m=32.0;else if(m>3.0)m=3.0;n=n*m;p=p*m;r=r*m;s=Dl(f,n,p,r);a.p9=null;t=a.u.A;u=Jg(c.L,n,p,r);$p=2;case 2:$z=ADY(t,c,u);if(C()){break _;}t=$z;n=0.0;v=0;while(v<t.p){u=Z(t,v);if(u.lw()){w=Q2(Dw(u.L,0.10000000149011612,0.10000000149011612,0.10000000149011612),f,s);if(w!==null){p=DI(f,w.gE);if(!(p>=n&&n!==0.0)){a.p9=u;n=p;}}}v
=v+1|0;}if(a.p9!==null&&!(a.u.cB instanceof Du))a.u.cg=A1t(a.p9);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function Mn(a,b){var c,d,e;c=a.u.f;d=c.dC-b;if(c.bU<=0)Bw(40.0-8000.0/(c.c2+b+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.E5;b=Bp(b*b*b*b*3.1415927410125732);e=c.kL;Bw( -e,0.0,1.0,0.0);Bw( -b*14.0,0.0,0.0,1.0);Bw(e,0.0,1.0,0.0);}}
function IK(a,b){var c,d,e,f,g;if(!a.u.k.cC){c=a.u.f;d=c.hc-c.t3;e=c.hc+d*b;f=c.qC+(c.kY-c.qC)*b;g=c.k0+(c.jp-c.k0)*b;d=e*3.1415927410125732;Bu(Bp(d)*f*0.5, -HW(BC(d)*f),0.0);Bw(Bp(d)*f*3.0,0.0,0.0,1.0);Bw(HW(BC(d+0.20000000298023224)*f)*5.0,1.0,0.0,0.0);Bw(g,1.0,0.0,0.0);}}
function AIm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=c.bT;e=c.d-c.bT;f=b;g=d+e*f;h=c.cS+(c.j-c.cS)*f;i=c.bS+(c.e-c.bS)*f;if(!a.u.k.cC)Bu(0.0,0.0,(-0.10000000149011612));else{j=4.0;d= -Bp(c.v/180.0*3.1415927410125732)*BC(c.J
/180.0*3.1415927410125732)*j;e=BC(c.v/180.0*3.1415927410125732)*BC(c.J/180.0*3.1415927410125732)*j;f= -Bp(c.J/180.0*3.1415927410125732)*j;k=0;l=g-d;d=h-f;f=i-e;if(k<8){m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.u.A;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);$p=1;continue _;}Bu(0.0,0.0, -j);}Bw(c.R+(c.J-c.R)*b,1.0,0.0,0.0);Bw(c.O+(c.v-c.O)*b+180.0,0.0,1.0,0.0);return;case 1:$z=AJz(p,u,v);if(C()){break _;}u
=$z;if(u!==null){q=DI(u.gE,BY(g,h,i));if(q<j)j=q;}k=k+1|0;if(k>=8){Bu(0.0,0.0, -j);Bw(c.R+(c.J-c.R)*b,1.0,0.0,0.0);Bw(c.O+(c.v-c.O)*b+180.0,0.0,1.0,0.0);return;}m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.u.A;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AFM(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lX=256>>a.u.k.hh;C_(5889);C$();if(a.u.k.dv)Bu( -((c*2|0)-1|0)*0.07000000029802322,0.0,0.0);d=a.u.f;e=70.0;f=Bf3;$p=1;case 1:$z=AGW(d,f);if(C()){break _;}g=$z;if(g)e=60.0;if(d.bU<=0)e=e/((1.0-500.0/(d.c2+b+500.0))*2.0+1.0);h=a.u.cc/a.u.bB;i=a.lX;f=GO();j=e*0.01745329238474369*0.5;k=GD(j)/Gr(j);f.eu
=k/h;f.es=0.0;f.et=0.0;f.er=0.0;f.ex=0.0;f.ey=k;f.ev=0.0;f.ew=0.0;f.eC=0.0;f.eA=0.0;h=i+0.05000000074505806;k=i-0.05000000074505806;f.eB=h/k;f.ez=(-1.0);f.gY=0.0;f.gZ=0.0;f.gW=2.0*i*0.05000000074505806/k;f.gX=0.0;C_(5888);C$();if(a.u.k.dv)Bu(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);Mn(a,b);if(a.u.k.iz)IK(a,b);$p=2;case 2:AIm(a,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AF2(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qz&&!Ot()){c=a.u;$p=1;continue _;}a.qz=Ot();Bb();d=Bd_;Bd_=0.0;e=d|0;d=Bea;Bea=0.0;f=d|0;g=1;if(a.u.k.m9)g=(-1);if(a.u.bp&&a.u.A!==null)Xu(a.u.f,e,Bx(f,g));if(!a.u.ia){c=FH(a.u.cc,a.u.bB);f=c.fO;e=c.fK;h=Bx(Bd9,f)/a.u.cc|0;i=(e-(Bx(Bd$,e)/a.u.bB|0)|0)-1|0;if(a.u.A!==null){$p=2;continue _;}FN(0,0,a.u.cc,a.u.bB);Hz(0.0,
0.0,0.0,0.0);D3(16640);C_(5889);C$();C_(5888);C$();LV(a);if(a.u.D!==null){D3(256);c=a.u.D;$p=3;continue _;}}return;case 1:ALn(c);if(C()){break _;}a.qz=Ot();Bb();d=Bd_;Bd_=0.0;e=d|0;d=Bea;Bea=0.0;f=d|0;g=1;if(a.u.k.m9)g=(-1);if(a.u.bp&&a.u.A!==null)Xu(a.u.f,e,Bx(f,g));if(!a.u.ia){c=FH(a.u.cc,a.u.bB);f=c.fO;e=c.fK;h=Bx(Bd9,f)/a.u.cc|0;i=(e-(Bx(Bd$,e)/a.u.bB|0)|0)-1|0;if(a.u.A!==null){$p=2;continue _;}FN(0,0,a.u.cc,a.u.bB);Hz(0.0,0.0,0.0,0.0);D3(16640);C_(5889);C$();C_(5888);C$();LV(a);if(a.u.D!==null){D3(256);c
=a.u.D;$p=3;continue _;}}return;case 2:AAs(a,b);if(C()){break _;}c=a.u.n2;g=a.u.D===null?0:1;$p=4;continue _;case 3:c.hR(h,i,b);if(C()){break _;}return;case 4:APX(c,b,g,h,i);if(C()){break _;}if(a.u.D===null)return;D3(256);c=a.u.D;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAs(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AL6(a,b);if(C()){break _;}c=a.u.f;d=a.u.dU;e=a.u.c6;f=c.cd;g=c.d-c.cd;h=b;i=f+g*h;f=c.b0+(c.j-c.b0)*h;g=c.ce+(c.e-c.ce)*h;j=0;if(j>=2){Dv(1,1,1,0);return;}if(a.u.k.dv){if(j)Dv(1,0,0,0);else Dv(0,1,1,0);}FN(0,0,a.u.cc,a.u.bB);$p=2;case 2:AEd(a,
b);if(C()){break _;}D3(16640);Ba(2884);$p=3;case 3:AFM(a,b,j);if(C()){break _;}R2();if(a.u.k.hh<2){k=(-1);$p=4;continue _;}if(!a.u.k.bw)Ba(2912);k=1;$p=6;continue _;case 4:ASx(a,k);if(C()){break _;}$p=5;case 5:ADp(d,b);if(C()){break _;}if(!a.u.k.bw)Ba(2912);k=1;$p=6;case 6:ASx(a,k);if(C()){break _;}l=BbL();AOw(l,i,f,g);ARZ(a.u.dU,l,b);m=a.u.dU;k=0;$p=7;case 7:AIy(m,c,k);if(C()){break _;}k=0;$p=8;case 8:ASx(a,k);if(C()){break _;}if(!a.u.k.bw)Ba(2912);k=3553;m=a.u.bo;n=B(179);$p=9;case 9:$z=AHK(m,n);if(C()){break _;}o
=$z;Cq(k,o);DS();Wu(d,c,0,h);Hw();m=NW(a,b);$p=10;case 10:ACN(d,m,l,b);if(C()){break _;}$p=11;case 11:AB7(e,c,b);if(C()){break _;}DS();k=0;$p=12;case 12:ASx(a,k);if(C()){break _;}$p=13;case 13:ABo(e,c,b);if(C()){break _;}if(a.u.cg!==null){l=Bf3;$p=16;continue _;}Dg(770,771);k=0;$p=14;case 14:ASx(a,k);if(C()){break _;}Ba(3042);Bc(2884);k=3553;l=a.u.bo;m=B(179);$p=15;case 15:$z=AHK(l,m);if(C()){break _;}o=$z;Cq(k,o);Wu(d,c,1,h);Fm(1);Ba(2884);Bc(3042);if(a.u.cg!==null){l=Bf3;$p=17;continue _;}Bc(2912);if(a.u.cU)
{$p=20;continue _;}k=0;$p=23;continue _;case 16:$z=AGW(c,l);if(C()){break _;}k=$z;if(!k){Dg(770,771);k=0;$p=14;continue _;}Bc(3008);l=a.u.cg;k=0;m=D9(c.K);$p=18;continue _;case 17:$z=AGW(c,l);if(C()){break _;}k=$z;if(!k){Bc(3008);l=a.u.cg;k=0;m=D9(c.K);$p=21;continue _;}Bc(2912);if(a.u.cU){$p=20;continue _;}k=0;$p=23;continue _;case 18:AFW(d,c,l,k,m,b);if(C()){break _;}l=a.u.cg;k=0;m=D9(c.K);$p=19;case 19:AGw(d,c,l,k,m,b);if(C()){break _;}Ba(3008);Dg(770,771);k=0;$p=14;continue _;case 20:X2(a,b);if(C()){break _;}k
=0;$p=23;continue _;case 21:AFW(d,c,l,k,m,b);if(C()){break _;}m=a.u.cg;k=0;l=D9(c.K);$p=22;case 22:AGw(d,c,m,k,l,b);if(C()){break _;}Ba(3008);Bc(2912);if(a.u.cU){$p=20;continue _;}k=0;$p=23;case 23:ASx(a,k);if(C()){break _;}if(!a.u.k.bw)Ba(2912);$p=24;case 24:YW(d,b);if(C()){break _;}Bc(2912);k=1;$p=25;case 25:ASx(a,k);if(C()){break _;}D3(256);C$();if(a.u.k.dv)Bu(((j*2|0)-1|0)*0.10000000149011612,0.0,0.0);B1();Mn(a,b);if(a.u.k.iz)IK(a,b);if(!a.u.k.cC){l=a.iL;$p=26;continue _;}BE();if(!a.u.k.cC){l=a.iL;$p=27;continue _;}if
(a.u.k.iz)IK(a,b);if(!a.u.k.dv)return;j=j+1|0;if(j>=2){Dv(1,1,1,0);return;}if(a.u.k.dv){if(j)Dv(1,0,0,0);else Dv(0,1,1,0);}FN(0,0,a.u.cc,a.u.bB);$p=2;continue _;case 26:AC$(l,b);if(C()){break _;}BE();if(!a.u.k.cC){l=a.iL;$p=27;continue _;}if(a.u.k.iz)IK(a,b);if(!a.u.k.dv)return;j=j+1|0;if(j>=2){Dv(1,1,1,0);return;}if(a.u.k.dv){if(j)Dv(1,0,0,0);else Dv(0,1,1,0);}FN(0,0,a.u.cc,a.u.bB);$p=2;continue _;case 27:ACk(l,b);if(C()){break _;}Mn(a,b);if(a.u.k.iz)IK(a,b);if(!a.u.k.dv)return;j=j+1|0;if(j>=2){Dv(1,1,1,0);return;}if
(a.u.k.dv){if(j)Dv(1,0,0,0);else Dv(0,1,1,0);}FN(0,0,a.u.cc,a.u.bB);$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function X2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=K(c.d);e=K(c.j);f=K(c.e);BA();g=BeY;Bc(2884);Cj(0.0,1.0,0.0);Ba(3042);Dg(770,
771);h=3553;i=a.u.bo;j=B(196);$p=1;case 1:$z=AHK(i,j);if(C()){break _;}k=$z;Cq(h,k);k=d-5|0;d=d+5|0;h=f-5|0;l=f+5|0;m=e-5|0;n=e+5|0;e=R(m,64);o=R(n,64);while(k<=d){p=h;while(p<=l){q=e<0?64:m;r=o<0?64:n;if(q!=r){s=((((a.tQ+(k*3121|0)|0)+Bx(p,418711)|0)%32|0)+b)/32.0;t=k+0.5-c.d;u=p+0.5-c.e;v=Cg(t*t+u*u)/5.0;BW(1.0,1.0,1.0,(1.0-v*v)*0.699999988079071);Bz(g);u=k+0|0;w=q;x=p+0|0;v=q*2.0/8.0;y=s*2.0;z=v+y;G(g,u,w,x,0.0,z);ba=k+1|0;bb=p+1|0;G(g,ba,w,bb,2.0,z);bc=r;bd=r*2.0/8.0+y;G(g,ba,bc,bb,2.0,bd);G(g,u,bc,x,0.0,
bd);G(g,u,w,bb,0.0,z);G(g,ba,w,x,2.0,z);G(g,ba,bc,x,2.0,bd);G(g,u,bc,bb,0.0,bd);Bt(g);}p=p+1|0;}k=k+1|0;}Ba(2884);Bc(3042);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function LV(a){var b,c,d;b=FH(a.u.cc,a.u.bB);c=b.fO;d=b.fK;D3(256);C_(5889);C$();Io(0.0,c,d,0.0,1000.0,3000.0);C_(5888);C$();Bu(0.0,0.0,(-2000.0));}
function AEd(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.A;d=a.u.f;e=1.0-A24(1.0/(4-a.u.k.hh|0),0.25);f=O2(c,b);g=f.x;h=f.z;i=f.w;j=ADF(c,b);a.dE=j.x;a.d3=j.z;a.dS=j.w;a.dE=a.dE+(g-a.dE)*e;a.d3=a.d3+(h-a.d3)*e;a.dS=a.dS+(i-a.dS)*e;c=Bf3;$p=1;case 1:$z=AGW(d,c);if(C()){break _;}k=$z;if(k){a.dE=0.019999999552965164;a.d3
=0.019999999552965164;a.dS=0.20000000298023224;e=a.oh+(a.mb-a.oh)*b;a.dE=a.dE*e;a.d3=a.d3*e;a.dS=a.dS*e;if(a.u.k.dv){l=(a.dE*30.0+a.d3*59.0+a.dS*11.0)/100.0;m=(a.dE*30.0+a.d3*70.0)/100.0;n=(a.dE*30.0+a.dS*70.0)/100.0;a.dE=l;a.d3=m;a.dS=n;}Hz(a.dE,a.d3,a.dS,0.0);return;}c=Bf4;$p=2;case 2:$z=AGW(d,c);if(C()){break _;}k=$z;if(k){a.dE=0.6000000238418579;a.d3=0.10000000149011612;a.dS=0.0;}e=a.oh+(a.mb-a.oh)*b;a.dE=a.dE*e;a.d3=a.d3*e;a.dS=a.dS*e;if(a.u.k.dv){l=(a.dE*30.0+a.d3*59.0+a.dS*11.0)/100.0;m=(a.dE*30.0+a.d3
*70.0)/100.0;n=(a.dE*30.0+a.dS*70.0)/100.0;a.dE=l;a.d3=m;a.dS=n;}Hz(a.dE,a.d3,a.dS,0.0);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASx(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.u.f;d=a.dE;e=a.d3;f=a.dS;EA(a.p3);CK(CK(CK(CK(a.p3,d),e),f),1.0);Gu(a.p3);g=a.p3;BJ();Bf5=Jv(g);Bf6=Jv(g);Bf7=Jv(g);Bf8=Jv(g);Cj(0.0,(-1.0),0.0);BW(1.0,1.0,1.0,1.0);g=Bf3;$p=1;case 1:$z=AGW(c,g);if(C()){break _;}h=$z;if(h){Mt(2917,2048);GN(2914,0.10000000149011612);Ba(2903);return;}g=Bf4;$p=2;case 2:$z=AGW(c,g);if(C()){break _;}h
=$z;if(h){Mt(2917,2048);GN(2914,2.0);}else{Mt(2917,9729);GN(2915,a.lX*0.25);GN(2916,a.lX);if(b<0){GN(2915,0.0);GN(2916,a.lX*0.800000011920929);}}Ba(2903);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Eh(){D.call(this);this.ya=0.0;}
function MP(){var a=this;Eh.call(a);a.i2=null;a.lb=null;a.pj=null;a.dY=null;a.dL=null;a.jb=null;a.hg=null;}
function A_a(){var a=new MP();KV(a);return a;}
function XC(a){var b=new MP();AI0(b,a);return b;}
function Bf9(a,b){var c=new MP();ARK(c,a,b);return c;}
function KV(a){AI0(a,0.0);}
function AI0(a,b){ARK(a,b,0.0);}
function ARK(a,b,c){var d,e;a.i2=BM(0,0);BH(a.i2,(-4.0),(-8.0),(-4.0),8,8,8,b);d=a.i2;e=0.0+c;BL(d,0.0,e,0.0);a.lb=BM(32,0);BH(a.lb,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BL(a.lb,0.0,e,0.0);a.pj=BM(16,16);BH(a.pj,(-4.0),0.0,(-2.0),8,12,4,b);BL(a.pj,0.0,e,0.0);a.dY=BM(40,16);BH(a.dY,(-3.0),(-2.0),(-2.0),4,12,4,b);d=a.dY;e=2.0+c;BL(d,(-5.0),e,0.0);a.dL=BM(40,16);a.dL.lF=1;BH(a.dL,(-1.0),(-2.0),(-2.0),4,12,4,b);BL(a.dL,5.0,e,0.0);a.jb=BM(0,16);BH(a.jb,(-2.0),0.0,(-2.0),4,12,4,b);d=a.jb;c=12.0+c;BL(d,(-2.0),c,0.0);a.hg
=BM(0,16);a.hg.lF=1;BH(a.hg,(-2.0),0.0,(-2.0),4,12,4,b);BL(a.hg,2.0,c,0.0);}
function A$y(a,b,c,d,e,f,g){a.on(b,c,d,e,f,g);Cc(a.i2,g);Cc(a.pj,g);Cc(a.dY,g);Cc(a.dL,g);Cc(a.jb,g);Cc(a.hg,g);Cc(a.lb,g);}
function AI7(a,b,c,d,e,f,g){var h;a.i2.bY=e/57.2957763671875;a.i2.b2=f/57.2957763671875;a.lb.bY=a.i2.bY;a.lb.b2=a.i2.b2;h=a.dY;e=b*0.6661999821662903;f=e+3.1415927410125732;h.b2=BC(f)*2.0*c;a.dY.bV=(BC(b*0.23119999468326569)+1.0)*1.0*c;a.dL.b2=BC(e)*2.0*c;a.dL.bV=(BC(b*0.28119999170303345)-1.0)*1.0*c;a.jb.b2=BC(e)*1.399999976158142*c;a.hg.b2=BC(f)*1.399999976158142*c;h=a.dY;c=h.bV;b=d*0.09000000357627869;h.bV=c+BC(b)*0.05000000074505806+0.05000000074505806;h=a.dL;h.bV=h.bV-(BC(b)*0.05000000074505806+0.05000000074505806);h
=a.dY;b=h.b2;c=d*0.06700000166893005;h.b2=b+Bp(c)*0.05000000074505806;h=a.dL;h.b2=h.b2-Bp(c)*0.05000000074505806;}
function Eu(){var a=this;D.call(a);a.dB=null;a.I5=0;a.mH=0;a.H7=0;a.xa=0;}
function Bf$(a){var b=new Eu();HB(b,a);return b;}
function HB(a,b){a.dB=$rt_createByteArray(1024);a.mH=0;a.H7=0;a.xa=1;a.I5=b;}
function AA5(){var a=this;Eu.call(a);a.pz=null;a.tw=null;a.n1=null;a.rR=null;a.xN=0;}
function BaD(){var a=new AA5();A_g(a);return a;}
function A_g(a){L();HB(a,Bf_.W);a.pz=$rt_createFloatArray(256);a.tw=$rt_createFloatArray(256);a.n1=$rt_createFloatArray(256);a.rR=$rt_createFloatArray(256);a.xN=0;}
function AYT(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;a.xN=a.xN+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.pz.data[f+(g*16|0)|0];e=e+1|0;}h=a.tw.data;i=b+(c*16|0)|0;h[i]=d/3.299999952316284+a.n1.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}c=0;while(c<16){j=0;while(j<16){k=a.n1.data;b=c+(j*16|0)|0;k[b]=k[b]+a.rR.data[b]*0.05000000074505806;if(a.n1.data[b]<0.0)a.n1.data[b]=0.0;k=a.rR.data;k[b]=k[b]-0.10000000149011612;if(BR()<0.05)a.rR.data[b]=0.5;j=j+1|0;}c=c+1|0;}k=a.tw;a.tw
=a.pz;a.pz=k;c=0;while(c<256){d=a.pz.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;l=d*d;i=32.0+l*32.0|0;m=50.0+l*64.0|0;n=255;o=146.0+l*50.0|0;if(a.mH){b=i*30|0;i=((b+(m*59|0)|0)+2805|0)/100|0;m=(b+(m*70|0)|0)/100|0;n=(b+17850|0)/100|0;}k=a.dB.data;j=c*4|0;k[j+0|0]=i<<24>>24;a.dB.data[j+1|0]=m<<24>>24;a.dB.data[j+2|0]=n<<24>>24;a.dB.data[j+3|0]=o<<24>>24;c=c+1|0;}}
function AKQ(){var a=this;Eu.call(a);a.pW=null;a.qU=null;a.jz=null;a.sD=null;}
function Bba(){var a=new AKQ();A1W(a);return a;}
function A1W(a){L();HB(a,Bga.W);a.pW=$rt_createFloatArray(256);a.qU=$rt_createFloatArray(256);a.jz=$rt_createFloatArray(256);a.sD=$rt_createFloatArray(256);}
function AY9(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bp(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bp(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){h=(g+e|0)&15;j=(i+f|0)&15;d=d+a.pW.data[h+(j*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.qU.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jz.data;e=(b+0|0)&15;n=((c+0|0)&15)*16|0;o=m[e+n|0];m=a.jz.data;h=h&15;o=o+m[h+n|0];m=a.jz.data;c=c+1|0;n=(c&15)*16|0;k[l]=d+(o+m[h+n
|0]+a.jz.data[e+n|0])/4.0*0.800000011920929;m=a.jz.data;m[l]=m[l]+a.sD.data[l]*0.009999999776482582;if(a.jz.data[l]<0.0)a.jz.data[l]=0.0;m=a.sD.data;m[l]=m[l]-0.05999999865889549;if(BR()<0.005)a.sD.data[l]=1.5;}b=b+1|0;}m=a.qU;a.qU=a.pW;a.pW=m;n=0;while(n<256){d=a.pW.data[n]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;h=d*100.0+155.0|0;o=d*d;j=o*255.0|0;l=o*d*d*128.0|0;if(a.mH){e=h*30|0;h=((e+(j*59|0)|0)+(l*11|0)|0)/100|0;j=(e+(j*70|0)|0)/100|0;l=(e+(l*70|0)|0)/100|0;}m=a.dB.data;b=n*4|0;m[b+0|0]=h<<24>>24;a.dB.data[b
+1|0]=j<<24>>24;a.dB.data[b+2|0]=l<<24>>24;a.dB.data[b+3|0]=(-1);n=n+1|0;}}
function Mm(){D.call(this);}
var Bgb=null;var Bgc=null;function Bgd(){var a=new Mm();AZU(a);return a;}
function AZU(a){return;}
function DT(){if(Bgb===null)Bgb=AY1(new Xm,0);return Bgb;}
function CP(){if(Bgc===null)Bgc=AY1(new PX,0);return Bgc;}
function Dj(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=APu(b)&&(e+f|0)<=APu(d)){a:{b:{if(b!==d){g=KL(Dm(b));h=KL(Dm(d));if(g!==null&&h!==null){if(g===h)break b;if(!FX(g)&&!FX(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!UG(h,l[k])){Vt(b,c,d,e,j);b=new J0;O(b);M(b);}j=j+1|0;k=m;}Vt(b,c,d,e,f);return;}if(!FX(g))break a;if(FX(h))break b;else break a;}b=new J0;O(b);M(b);}}Vt(b,c,d,e,f);return;}b=new J0;O(b);M(b);}b=new BQ;O(b);M(b);}d=new EE;Bj(d,B(197));M(d);}
function Vt(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function B9(){return Long_fromNumber(new Date().getTime());}
function EG(){return Long_fromNumber(performance.now()*1000000.0);}
function V5(){Gn.call(this);this.yC=null;}
function AKc(a){var b,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(a.yC.hA){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof E2){}else{throw $$e;}}}return;case 1:a:{try{AKS(b);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof E2){}else{throw $$e;}}}while(a.yC.hA){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof E2){}else{throw $$e;}}}return;default:E_();}}C3().s(a,
b,$p);}
function St(){}
function Ik(){}
function Gl(){D.call(this);}
function P5(a){return a.hz?0:1;}
function Ma(a,b){var c,d;c=a.kZ();a:{while(c.qn()){b:{d=c.mV();if(d!==null){if(!d.eo(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function ABh(a){var b,c,d,e,f;b=J(D,IM(a));c=b.data;d=0;e=OI(a);while(F$(e)){f=d+1|0;c[d]=LG(e);d=f;}return b;}
function UN(a,b){var c,d,e,f,g;c=b.data;d=a.p;e=c.length;if(e<d)b=AEV(KL(Dm(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Jn(a);while(KR(f)){c=b.data;g=e+1|0;c[e]=La(f);e=g;}return b;}
function DE(a,b){var c,d;c=0;d=b.kZ();while(d.qn()){if(!a.sX(d.mV()))continue;c=1;}return c;}
function Gc(a,b){var c,d;c=0;d=Jn(a);while(KR(d)){if(b.rC(La(d))){AMn(d);c=1;}}return c;}
function Kb(){}
function Gd(){Gl.call(this);this.d4=0;}
function Fv(a,b){AE3(a,a.hz,b);return 1;}
function Jn(a){var b;b=new TF;b.lc=a;b.yD=b.lc.d4;b.sw=b.lc.p;b.nm=(-1);return b;}
function ABm(a,b){var c,d,e;c=a.p;d=0;a:{while(d<c){b:{e=Z(a,d);if(b!==null){if(!b.eo(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function MJ(){Gd.call(this);}
function AE3(a,b,c){if(b>=0){ABE(Wt(a,b),c);return;}c=new BQ;O(c);M(c);}
function Ts(a,b){var c,d;if(b>=0){c=Wt(a,b);d=GE(c);AHw(c);return d;}c=new BQ;O(c);M(c);}
function AUK(a){return JI(a);}
function OP(){}
function Xs(){}
function AES(){var a=this;MJ.call(a);a.pF=null;a.qo=null;a.hz=0;}
function Q6(){var a=new AES();A27(a);return a;}
function A27(a){return;}
function A9u(a){return a.hz;}
function OH(a){a.pF=null;a.qo=null;a.hz=0;a.d4=a.d4+1|0;}
function JI(a){return AJN(a,a.pF,null,0);}
function Wt(a,b){var c,d,e;if(b<0){c=new BQ;O(c);M(c);}if(b<=(a.hz/2|0)){d=a.pF;e=0;while(e<b){d=d.ht;e=e+1|0;}return AJN(a,d,d===null?null:d.iC,b);}if(b>a.hz){c=new BQ;O(c);M(c);}c=a.qo;e=b;while(e<a.hz){c=c.iC;e=e+1|0;}return AJN(a,c===null?null:c.ht,c,b);}
function AOl(){D.call(this);}
function F7(){D.call(this);}
function ABR(){F7.call(this);}
function AKU(){F7.call(this);}
function Jd(){}
function Fc(){Gl.call(this);}
function Fs(a,b){var c,d;c=0;if(IM(a)>=b.lY()){d=b.kZ();while(d.qn()){if(!Ld(a,d.mV()))continue;c=1;}}else{d=OI(a);while(F$(d)){if(b.rC(LG(d))){c=1;AD4(d);}}}return c;}
function A6a(a,b){var c,d;if(a===b)return 1;if(!Ss(b,Jd))return 0;c=b;if(IM(a)!=IM(c))return 0;d=OI(c);while(F$(d)){if(WK(a,LG(d)))continue;else return 0;}return 1;}
function ATh(a){var b,c,d,e,f,g;b=ABh(a);if(b===null)c=0;else{c=(-1515898884);d=0;while(true){e=b.data;if(d>=e.length)break;f=e[d];g=(f!==null?f.fl():0)^528111840;c=ND(g,4)^(g>>>7|g<<25)^ND(c,13);d=d+1|0;}}return c;}
function EU(){}
function AQy(){Fc.call(this);this.l$=null;}
function F9(){var a=new AQy();A1n(a);return a;}
function A1n(a){a.l$=De();}
function Xq(a,b){return BT(a.l$,b,a)!==null?0:1;}
function WK(a,b){return DZ(a.l$,b);}
function OI(a){return AC5(AKq(a.l$));}
function Ld(a,b){return Rf(a.l$,b)===null?0:1;}
function IM(a){return a.l$.ga;}
function Mb(){}
function FV(){var a=this;D.call(a);a.w_=null;a.xj=null;}
function ACn(){var a=this;FV.call(a);a.ga=0;a.cN=null;a.g_=0;a.Fr=0.0;a.uR=0;}
function De(){var a=new ACn();AVK(a);return a;}
function A6j(a,b){return J(IE,b);}
function AVK(a){var b;b=AHc(16);a.ga=0;a.cN=J(IE,b);a.Fr=0.75;RW(a);}
function AHc(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vi(a){var b;if(a.ga>0){a.ga=0;b=a.cN;ZR(b,0,b.data.length,null);a.g_=a.g_+1|0;}}
function RW(a){a.uR=a.cN.data.length*a.Fr|0;}
function DZ(a,b){return VT(a,b)===null?0:1;}
function AEq(a,b){var c,d,e;a:{if(b===null){c=0;b:while(true){if(c>=a.cN.data.length)break a;d=a.cN.data[c];while(d!==null){if(d.e6===null)break b;d=d.eE;}c=c+1|0;}return 1;}c=0;c:while(true){if(c>=a.cN.data.length)break a;d=a.cN.data[c];while(d!==null){e=d.e6;if(b!==e&&!b.eo(e)?0:1)break c;d=d.eE;}c=c+1|0;}return 1;}return 0;}
function CQ(a,b){var c;c=VT(a,b);if(c===null)return null;return c.e6;}
function VT(a,b){var c,d;if(b===null)c=Q1(a);else{d=b.fl();c=Qd(a,b,d&(a.cN.data.length-1|0),d);}return c;}
function Qd(a,b,c,d){var e;e=a.cN.data[c];while(e!==null&&!(e.pY==d&&AJi(b,e.gk))){e=e.eE;}return e;}
function Q1(a){var b;b=a.cN.data[0];while(b!==null&&b.gk!==null){b=b.eE;}return b;}
function AKq(a){var b;if(a.w_===null){b=new PT;b.CM=a;a.w_=b;}return a.w_;}
function Rm(a,b,c){return BT(a,b,c);}
function BT(a,b,c){var d,e,f,g;if(b===null){d=Q1(a);if(d===null){a.g_=a.g_+1|0;d=RT(a,null,0,0);e=a.ga+1|0;a.ga=e;if(e>a.uR)Wz(a);}}else{e=b.fl();f=e&(a.cN.data.length-1|0);d=Qd(a,b,f,e);if(d===null){a.g_=a.g_+1|0;d=RT(a,b,f,e);e=a.ga+1|0;a.ga=e;if(e>a.uR)Wz(a);}}g=d.e6;d.e6=c;return g;}
function RT(a,b,c,d){var e,f;e=new IE;f=null;e.gk=b;e.e6=f;e.pY=d;e.eE=a.cN.data[c];a.cN.data[c]=e;return e;}
function ALR(a,b){var c,d,e,f,g,h,i;c=AHc(!b?1:b<<1);d=J(IE,c);e=d.data;f=0;c=c-1|0;while(f<a.cN.data.length){g=a.cN.data[f];a.cN.data[f]=null;while(g!==null){h=g.pY&c;i=g.eE;g.eE=e[h];e[h]=g;g=i;}f=f+1|0;}a.cN=d;RW(a);}
function Wz(a){ALR(a,a.cN.data.length);}
function Rf(a,b){var c;c=AEy(a,b);if(c===null)return null;return c.e6;}
function AEy(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cN.data[0];while(e!==null){if(e.gk===null)break a;f=e.eE;d=e;e=f;}}else{g=b.fl();c=g&(a.cN.data.length-1|0);e=a.cN.data[c];while(e!==null&&!(e.pY==g&&AJi(b,e.gk))){f=e.eE;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.eE=e.eE;else a.cN.data[c]=e.eE;a.g_=a.g_+1|0;a.ga=a.ga-1|0;return e;}
function A4Z(a){return a.ga;}
function Ir(a){var b;if(a.xj===null){b=new PU;b.wr=a;a.xj=b;}return a.xj;}
function AJi(b,c){return b!==c&&!b.eo(c)?0:1;}
function AKr(){F7.call(this);}
function Y5(){D.call(this);}
function Bge(){var a=new Y5();A0E(a);return a;}
function A0E(a){return;}
function A3W(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.GF=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaU(callback);return thread.suspend(function(){try{BcF(b,callback);}catch($e){callback.I6($rt_exception($e));}});}
function BcF(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){CM(c,SZ(0,0,B(198),null));return;}e=d.open($rt_ustr(b),1);b=new TR;b.A5=c;b=Cu(b,"handleEvent");e.onBlocked=b;b=new TQ;b.EI=c;b.E3=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TP;b.DP=c;b=Cu(b,"handleEvent");e.onerror=b;b=new TO;b.BH=e;b=Cu(b,"handleEvent");e.onupgradeneeded=b;}
function A5L(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.GF=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaU(callback);return thread.suspend(function(){try{Bac(b,c,callback);}catch($e){callback.I6($rt_exception($e));}});}
function Bac(b,c,d){var e;b=b.transaction("filesystem","readwrite").objectStore("filesystem");c=P2($rt_ustr(c));e=b.delete(c);b=new TN;b.C1=d;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TK;b.Dw=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A_Y(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.GF=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaU(callback);return thread.suspend(function(){try{Bbl(b,c,callback);}catch($e){callback.I6($rt_exception($e));}});}
function Bbl(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=P2($rt_ustr(c));e=b.get(c);b=new TJ;b.AK=d;b.xq=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TI;b.Ey=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A5G(b,c,d,e,f){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.GF=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaU(callback);return thread.suspend(function(){try{Bce(b,c,d,e,f,callback);}
catch($e){callback.I6($rt_exception($e));}});}
function Bce(b,c,d,e,f,g){var h,i;h=(b.transaction("filesystem","readonly").objectStore("filesystem")).openCursor();i=$rt_createIntArray(1);b=new Rw;b.E6=h;b.EF=g;b.zj=i;b.vU=c;b.BD=e;b.Do=d;b.xw=f;b=Cu(b,"handleEvent");h.onsuccess=b;b=new Rx;b.D6=g;b.w0=i;b=Cu(b,"handleEvent");h.onerror=b;}
function AUJ(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.GF=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaU(callback);return thread.suspend(function(){try{Bda(b,c,callback);}catch($e){callback.I6($rt_exception($e));}});}
function Bda(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=P2($rt_ustr(c));e=b.get(c);b=new Rt;b.C9=d;b.vk=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Ru;b.Ex=d;b=Cu(b,"handleEvent");e.onerror=b;}
function AX7(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.GF=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I6=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaU(callback);return thread.suspend(function(){try{Bbs(b,c,d,e,callback);}catch($e)
{callback.I6($rt_exception($e));}});}
function Bbs(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(B9(),new Long(596067632, 383)).lo;c=A53($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Rv;c.BP=f;b=Cu(c,"handleEvent");h.onsuccess=b;b=new Ry;b.B8=f;b=Cu(b,"handleEvent");h.onerror=b;}
function A8M(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function UF(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function A00(b){return typeof b==='undefined'? -1:typeof b.lastModified==='undefined'? -1:b.lastModified;}
function P2(b){return [b];}
function AZ$(b){return typeof b==="string"?b:typeof b==="undefined"?null:typeof b[0]==="string"?b[0]:null;}
function A53(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AFf(){var a=this;D.call(a);a.Fw=0;a.Fj=0;a.uK=null;a.x9=null;}
function SZ(a,b,c,d){var e=new AFf();AXF(e,a,b,c,d);return e;}
function AXF(a,b,c,d,e){a.Fw=b;a.Fj=c;a.uK=d;a.x9=e;}
function EY(){var a=this;D.call(a);a.HP=null;a.th=0;}
function Bgf(a,b){var c=new EY();FQ(c,a,b);return c;}
function FQ(a,b,c){a.HP=b;a.th=c;}
function A01(a){return a.th;}
function ATK(a,b){return a!==b?0:1;}
function AYi(a){return M3(a);}
function J1(a){var b;b=Dm(a);if(!Rc(JO(b),F(EY)))b=JO(b);return b;}
function XU(a,b){var c,d;if(J1(b)===J1(a))return R(a.th,b.th);c=new Ca;d=new T;V(d);Bj(c,U(H(H(H(H(d,B(199)),IC(J1(a))),B(200)),IC(J1(b)))));M(c);}
function AXR(a,b){return XU(a,b);}
function E9(){EY.call(this);}
var BfR=null;var BfQ=null;var BfP=null;var Bgg=null;function AHy(){var b,c,d;b=new E9;FQ(b,B(201),0);BfR=b;b=new E9;FQ(b,B(202),1);BfQ=b;b=new E9;FQ(b,B(203),2);BfP=b;c=J(E9,3);d=c.data;d[0]=BfR;d[1]=BfQ;d[2]=BfP;Bgg=c;}
function QB(){}
function Vh(){D.call(this);this.yW=null;}
function BaU(b){var c;c=new Vh;c.yW=b;return c;}
function CM(a,b){a.yW.GF(b);}
function A2n(a,b){a.yW.I6(b);}
function AQU(){D.call(this);}
function Xy(){}
function Xd(){var a=this;D.call(a);a.vB=null;a.As=null;}
function ARu(a){var b,c,d;if(a.vB.readyState==4){b=new Uint8Array(a.vB.response);c=$rt_createByteArray(b.byteLength);Bb();BdX=c;d=0;while(d<Wc().data.length){Wc().data[d]=b[d]<<24>>24;d=d+1|0;}CM(a.As,B(204));}}
function A2f(a){ARu(a);}
function HZ(){D.call(this);}
function AQt(){var a=this;HZ.call(a);a.xh=null;a.kp=0;a.Gn=0;a.qP=0;}
function Ut(a){var b=new AQt();AUh(b,a);return b;}
function AUh(a,b){var c;c=b.data.length;a.xh=b;a.kp=0;a.Gn=0;a.qP=0+c|0;}
function A4W(a){var b,c,d;if(a.kp>=a.qP)b=(-1);else{c=a.xh.data;d=a.kp;a.kp=d+1|0;b=c[d]&255;}return b;}
function A_y(a,b,c,d){var e,f,g,h,i;e=CC(d,a.qP-a.kp|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.xh.data;i=a.kp;a.kp=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function A5H(a){return a.qP-a.kp|0;}
function IS(){HZ.call(this);this.kt=null;}
function Bgh(a){var b=new IS();Sc(b,a);return b;}
function Sc(a,b){a.kt=b;}
function AKP(a){return a.kt.w$();}
function Pv(){}
function P$(){IS.call(this);this.d$=null;}
function O9(a){var b=new P$();AIJ(b,a);return b;}
function AIJ(a,b){Sc(a,b);a.d$=$rt_createByteArray(8);}
function N5(a,b){var c;c=b.data;return a.kt.of(b,0,c.length);}
function Oc(a){var b,c;b=a.kt.CL();if(b>=0)return b<<24>>24;c=new FE;O(c);M(c);}
function Kg(a,b){var c,d;c=0;while(c<b){d=a.kt.of(a.d$,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function APy(a){return $rt_longBitsToDouble(Tr(a));}
function ABb(a){return $rt_intBitsToFloat(H6(a));}
function AM6(a,b){Q0(a,b,0,b.data.length);}
function Q0(a,b,c,d){var e,f;if(d<0){e=new BQ;O(e);M(e);}if(!d)return;if(a.kt===null){e=new EE;O(e);M(e);}if(b===null){e=new EE;O(e);M(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.kt.of(b,c,d);if(f<0){e=new FE;O(e);M(e);}c=c+f|0;d=d-f|0;}return;}e=new BQ;O(e);M(e);}
function H6(a){var b;if(Kg(a,4)<0){b=new FE;O(b);M(b);}return (a.d$.data[0]&255)<<24|(a.d$.data[1]&255)<<16|(a.d$.data[2]&255)<<8|a.d$.data[3]&255;}
function Tr(a){var b;if(Kg(a,8)<0){b=new FE;O(b);M(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.d$.data[0]&255)<<24|(a.d$.data[1]&255)<<16|(a.d$.data[2]&255)<<8|a.d$.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.d$.data[4]&255)<<24|(a.d$.data[5]&255)<<16|(a.d$.data[6]&255)<<8|a.d$.data[7]&255),new Long(4294967295, 0)));}
function XT(a){var b;if(Kg(a,2)<0){b=new FE;O(b);M(b);}return ((a.d$.data[0]&255)<<24>>16|a.d$.data[1]&255)<<16>>16;}
function APS(a){var b;if(Kg(a,2)<0){b=new FE;O(b);M(b);}return ((a.d$.data[0]&255)<<8|a.d$.data[1]&255)&65535;}
function GV(a){return ALN(a,APS(a));}
function ALN(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);Q0(a,c,0,b);return AXg(c,d,0,b);}
function AXg(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Hu;Bj(m,B(205));M(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Hu;Bj(m,B(206));M(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Hu;Bj(m,B(206));M(m);}f=j+1|0;if(f>=e){m=new Hu;Bj(m,B(206));M(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return LE(c,0,g);}m=new Hu;Bj(m,B(206));M(m);}
function M_(){var a=this;D.call(a);a.wG=null;a.Ig=null;}
function R8(b){var c,d;if(Ix(b))M(ALD(b));if(!AP4(Y(b,0)))M(ALD(b));c=1;while(c<Bg(b)){a:{d=Y(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AP4(d))break a;else M(ALD(b));}}c=c+1|0;}}
function AP4(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function Yd(b){var c;if(b===null){b=new Ca;Bj(b,B(207));M(b);}R8(b);c=CQ(Bgi,AOu(b));if(c!==null)return c;c=new Vo;O(c);c.IH=b;M(c);}
function AOc(a,b){var c,d,$$je;a:{try{b=AJZ(ADW(ARf(AFL(a),Bgj),Bgj),b);}catch($$e){$$je=Bh($$e);if($$je instanceof GZ){c=$$je;break a;}else{throw $$e;}}return b;}d=new W$;d.ov=1;d.rU=1;d.vL=B(208);d.jH=c;M(d);}
function ABI(a,b){return AJR(a.wG,b.wG);}
function A6L(a,b){return ABI(a,b);}
function WY(){var a=this;IS.call(a);a.g5=null;a.oo=null;a.qk=0;a.oO=0;a.ET=0;a.Ev=0;a.wT=null;a.Hc=null;}
function ATf(a){var b;if(a.qk){b=new B2;Bj(b,B(209));M(b);}return AL$(a,a.wT,0,1)==(-1)?(-1):a.wT.data[0]&255;}
function AL$(a,b,c,d){var e,f,g;if(a.qk){e=new B2;Bj(e,B(209));M(e);}if(b===null){e=new EE;O(e);M(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.oO)return (-1);f=0;AAT(a.g5,b,c,d);a:{while(!a.oO){if(!a.g5.M)ABu(a);b:{g=AGj(a.g5,0);f=f+(a.g5.pQ-c|0)|0;c=a.g5.pQ;switch(g){case -3:e=new B2;Bj(e,a.g5.b8);M(e);case 1:case 2:break;default:break b;}a.oO=1;if(g==2)return (-1);}if(!a.g5.ih)break a;}}return f;}e=new BQ;O(e);M(e);}
function A0D(a){var b;if(!a.qk){if(!a.oO)return 1;return 0;}b=new B2;Bj(b,B(209));M(b);}
function ABu(a){var b,c;if(a.qk){b=new B2;Bj(b,B(209));M(b);}a:{c=a.kt.of(a.oo,0,a.oo.data.length);if(c==(-1)){if(a.g5.jA.dX)break a;if(Ys(a.g5))break a;a.oo.data[0]=0;c=1;}AKl(a.g5,a.oo,0,c,1);return;}if(Long_ne(a.g5.jA.rW,Long_fromInt(-1))){b=new B2;Bj(b,B(210));M(b);}b=new FE;Bj(b,B(211));M(b);}
function No(){var a=this;D.call(a);a.ib=null;a.jw=0;a.nq=Long_ZERO;}
function Jb(a,b){var c,d;c=a.ib.data;d=a.jw;a.jw=d+1|0;c[d]=b;if(a.jw==a.ib.data.length){Td(a,a.ib,0);a.jw=0;}a.nq=Long_add(a.nq,Long_fromInt(1));}
function AD6(a,b,c,d){a:{while(a.jw){if(d<=0)break a;Jb(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.ib.data.length){Td(a,b,c);c=c+a.ib.data.length|0;d=d-a.ib.data.length|0;a.nq=Long_add(a.nq,Long_fromInt(a.ib.data.length));}while(d>0){Jb(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function APw(a){var b;b=Long_shl(a.nq,3);Jb(a,(-128));while(a.jw){Jb(a,0);}ALc(a,b);MU(a);}
function ADG(){var a=this;No.call(a);a.pA=0;a.pB=0;a.pC=0;a.pD=0;a.pE=0;a.ei=null;a.mX=0;}
function Ba_(){var a=new ADG();A$w(a);return a;}
function A$w(a){a.ib=$rt_createByteArray(4);a.jw=0;a.ei=$rt_createIntArray(80);OU(a);}
function Td(a,b,c){var d,e;d=b.data;b=a.ei.data;e=a.mX;a.mX=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.mX==16)MU(a);}
function HK(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function ALc(a,b){if(a.mX>14)MU(a);a.ei.data[14]=b.hi;a.ei.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AMk(a,b,c){APw(a);HK(a,a.pA,b,c);HK(a,a.pB,b,c+4|0);HK(a,a.pC,b,c+8|0);HK(a,a.pD,b,c+12|0);HK(a,a.pE,b,c+16|0);OU(a);return 20;}
function OU(a){var b;a.nq=Long_ZERO;a.jw=0;b=0;while(b<a.ib.data.length){a.ib.data[b]=0;b=b+1|0;}a.pA=1732584193;a.pB=(-271733879);a.pC=(-1732584194);a.pD=271733878;a.pE=(-1009589776);a.mX=0;b=0;while(b!=a.ei.data.length){a.ei.data[b]=0;b=b+1|0;}}
function Vp(a,b,c,d){return b^c^d;}
function Fg(a,b,c){return b<<c|b>>>(32-c|0);}
function MU(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.ei.data[b]=Fg(a,a.ei.data[b-3|0]^a.ei.data[b-8|0]^a.ei.data[b-14|0]^a.ei.data[b-16|0],1);b=b+1|0;}c=a.pA;d=a.pB;e=a.pC;f=a.pD;g=a.pE;h=0;while(h<=19){i=(((Fg(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.ei.data[h]|0)+1518500249|0;b=Fg(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Fg(a,c,5)+Vp(a,d,e,f)|0)+g|0)+a.ei.data[j]|0)+1859775393|0;b=Fg(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Fg(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.ei.data[h]|0)
+(-1894007588)|0;b=Fg(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Fg(a,c,5)+Vp(a,d,e,f)|0)+g|0)+a.ei.data[j]|0)+(-899497514)|0;b=Fg(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.pA=a.pA+c|0;a.pB=a.pB+d|0;a.pC=a.pC+e|0;a.pD=a.pD+f|0;a.pE=a.pE+g|0;a.mX=0;b=0;while(b!=a.ei.data.length){a.ei.data[b]=0;b=b+1|0;}}
function AJp(){D.call(this);}
function Bgk(){var a=new AJp();A6k(a);return a;}
function A6k(a){return;}
function Pf(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=CC(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Os(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=CC(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function NH(b,c){var d,e,f,g;d=b.data;e=AEV(KL(Dm(b)),c);f=CC(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Nf(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new Ca;O(f);M(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZR(b,c,d,e){var f,g;if(c>d){e=new Ca;O(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function P7(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=J(D,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=CC(j,h+f|0);l=h+(2*f|0)|0;m=CC(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qh(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AOF(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new Ca;O(f);M(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function Ja(){var a=this;D.call(a);a.Dt=0;a.Cl=null;a.xv=null;}
function Bgl(a,b,c){var d=new Ja();RR(d,a,b,c);return d;}
function RR(a,b,c,d){a.Dt=b;a.Cl=c;a.xv=d;}
function ABM(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(YD(b,a.Cl)<a.Dt){c=0;d=null;if(c<10){e=1;f=b.bg;$p=1;continue _;}}return;case 1:AOK(a,b,e,f,d);if(C()){break _;}c=c+1|0;if(c>=10)return;e=1;f=b.bg;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A5s(a,b,c,d){return CO((c+E(b.r,256)|0)-128|0,E(b.r,128),(d+E(b.r,256)|0)-128|0);}
function AOK(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=K(d.d);h=K(d.e);i=E(b.r,a.xv.data.length);j=a.AG(b,g,h);k=j.eF;l=j.e0;m=j.eG;$p=1;case 1:$z
=AAP(b,k,l,m);if(C()){break _;}c=$z;if(c)return 0;$p=2;case 2:$z=ACa(b,k,l,m);if(C()){break _;}e=$z;if(e!==Bgm)return 0;n=0;while(n<3){o=6;p=0;h=k;q=l;r=m;if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;}return f;case 3:$z=AAP(b,h,c,r);if(C()){break _;}c=$z;if(c){$p=4;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;continue _;}n=n+1|0;if(n>=3)break;o
=6;p=0;h=k;q=l;r=m;}return f;case 4:$z=AAP(b,h,q,r);if(C()){break _;}c=$z;if(!c){$p=5;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 5:$z=ACa(b,h,q,r);if(C()){break _;}e=$z;if(!e.nI()){c=q+1|0;$p=6;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|
0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 6:a:{$z=AAP(b,h,c,r);if(C()){break _;}c=$z;if(!c){b:{s=h+0.5;t=q+1.0;u=r+0.5;if(d===null){v=s-b.fk;w=t-b.p2;x=u-b.fj;if(v*v+w*w+x*x>=1024.0)break b;break a;}y=s-d.d;z=t-d.j;ba=u-d.e;if(y*y+z*z+ba*ba<1024.0)break a;}c:{try{e=a.xv.data[i];bb=J(FP,1);bb.data[0]=F(GI);e=WL(e,bb);bb=J(D,1);bb.data[0]=b;bc=WN(e,bb);break c;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){}else{throw $$e;}}return f;}y=s;z=t;ba=u;KG(bc,y,z,ba,N(b.r)*360.0,0.0);$p=7;continue _;}}p=p+
1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 7:$z=bc.u1(y,z,ba);if(C()){break _;}c=$z;if(c){f=f+1|0;$p=8;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 8:AOt(b,bc);if(C()){break _;}p=p+1|0;while(true){if(p<3)
{h=h+(E(b.r,o)-E(b.r,o)|0)|0;q=q+(E(b.r,1)-E(b.r,1)|0)|0;r=r+(E(b.r,o)-E(b.r,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$p);}
function U7(){Ja.call(this);this.GN=null;}
function A2d(a,b,c,d){return CO((c+E(b.r,256)|0)-128|0,E(b.r,E(b.r,E(b.r,112)+8|0)+8|0),(d+E(b.r,256)|0)-128|0);}
function C5(){var a=this;D.call(a);a.mG=0;a.bI=null;a.bD=null;a.m=null;a.bT=0.0;a.cS=0.0;a.bS=0.0;a.d=0.0;a.j=0.0;a.e=0.0;a.g=0.0;a.i=0.0;a.h=0.0;a.v=0.0;a.J=0.0;a.O=0.0;a.R=0.0;a.L=null;a.cx=0;a.j1=0;a.yl=0;a.ll=0;a.cR=0;a.c4=0.0;a.c1=0.0;a.eN=0.0;a.t3=0.0;a.hc=0.0;a.ja=0;a.fJ=0.0;a.ri=0;a.cd=0.0;a.b0=0.0;a.ce=0.0;a.ej=0.0;a.rt=0.0;a.o7=0;a.n$=0.0;a.Jb=0;a.n=null;a.oU=0;a.nN=0;a.cV=0;a.n_=0;a.tt=0;a.dw=0;a.gf=0;a.oF=0;a.tP=null;a.g8=0.0;a.g1=0.0;}
function Bgn(a){var b=new C5();FA(b,a);return b;}
function FA(a,b){a.mG=0;a.L=NJ(0.0,0.0,0.0,0.0,0.0,0.0);a.cx=0;a.j1=0;a.yl=0;a.ll=1;a.cR=0;a.c4=0.0;a.c1=0.6000000238418579;a.eN=1.7999999523162842;a.t3=0.0;a.hc=0.0;a.ja=1;a.fJ=0.0;a.ri=1;a.ej=0.0;a.rt=0.0;a.o7=0;a.n$=0.0;a.Jb=0;a.n=new DA;a.oU=0;a.nN=1;a.cV=0;a.n_=300;a.tt=0;a.dw=0;a.gf=300;a.oF=1;a.m=b;CU(a,0.0,0.0,0.0);}
function Cd(a){a.cR=1;}
function D1(a,b,c){a.c1=b;a.eN=c;}
function W0(a,b,c){a.v=b;a.J=c;}
function CU(a,b,c,d){var e,f,g,h,i,j;a.d=b;a.j=c;a.e=d;e=a.c1/2.0;f=a.eN/2.0;g=a.L;h=e;i=b-h;j=f;Nk(g,i,c-j,d-h,b+h,c+j,d+h);}
function AJl(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jm();if(C()){break _;}return;default:E_();}}C3().s(a,$p);}
function AE8(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bD!==null&&a.bD.cR)a.bD=null;a.oU=a.oU+1|0;a.t3=a.hc;a.bT=a.d;a.cS=a.j;a.bS=a.e;a.R=a.J;a.O=a.v;$p=1;case 1:$z=a.HY();if(C()){break _;}b=$z;if(!b)a.tt=0;else{a:{if(!a.tt&&!a.oF){c=Cg(a.g*a.g*0.20000000298023224+a.i*a.i+a.h*a.h*0.20000000298023224)*0.20000000298023224;if(c>1.0)c=1.0;Di(a.m,a,B(212),c,1.0+(N(a.n)-N(a.n))*0.4000000059604645);d
=K(a.L.Q);b=0;e=d+1.0;while(b<1.0+a.c1*20.0){f=(N(a.n)*2.0-1.0)*a.c1;g=(N(a.n)*2.0-1.0)*a.c1;BX(a.m,B(213),a.d+f,e,a.e+g,a.g,a.i-N(a.n)*0.20000000298023224,a.h);b=b+1|0;}b=0;while(true){if(b>=1.0+a.c1*20.0)break a;f=(N(a.n)*2.0-1.0)*a.c1;g=(N(a.n)*2.0-1.0)*a.c1;BX(a.m,B(214),a.d+f,e,a.e+g,a.g,a.i,a.h);b=b+1|0;}}}a.fJ=0.0;a.tt=1;a.cV=0;}if(a.cV>0){if(!(a.cV%20|0)){h=null;b=1;$p=4;continue _;}a.cV=a.cV-1|0;}$p=2;case 2:$z=ACy(a);if(C()){break _;}b=$z;if(b){h=null;b=10;$p=3;continue _;}if(a.j>=(-64.0)){a.oF=0;return;}$p
=5;continue _;case 3:a.ft(h,b);if(C()){break _;}a.cV=600;if(a.j>=(-64.0)){a.oF=0;return;}$p=5;continue _;case 4:a.ft(h,b);if(C()){break _;}a.cV=a.cV-1|0;$p=2;continue _;case 5:a.D8();if(C()){break _;}a.oF=0;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function X$(a){Cd(a);}
function AHv(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Uj(a.L,b,c,d);f=a.m;$p=1;case 1:$z=X3(f,a,e);if(C()){break _;}f=$z;if(f.p>0)return 0;f=a.m;$p=2;case 2:$z=AJx(f,e);if(C()){break _;}g=$z;return g?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ARU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.o7){FY(a.L,b,c,d);a.d=(a.L.Y+a.L.bl)/2.0;a.j=a.L.Q+a.c4-a.ej;a.e=(a.L.Z+a.L.bm)/2.0;return;}e=a.d;f=a.e;g=Qn(a.L);h=a.m;i=Jg(a.L,b,c,d);$p=
1;case 1:$z=X3(h,a,i);if(C()){break _;}j=$z;k=0;l=c;while(k<Df(j)){l=Wg(Z(j,k),a.L,l);k=k+1|0;}FY(a.L,0.0,l,0.0);if(a.ll){m=d;n=b;}else if(c===l){m=d;n=b;}else{n=0.0;m=n;l=n;}a:{b:{if(!a.cx){if(c===l)break b;if(c>=0.0)break b;}o=1;break a;}o=0;}p=0;while(p<Df(j)){n=QE(Z(j,p),a.L,n);p=p+1|0;}FY(a.L,n,0.0,0.0);if(!a.ll&&b!==n){n=0.0;m=n;l=n;}k=0;while(k<Df(j)){m=Um(Z(j,k),a.L,m);k=k+1|0;}FY(a.L,0.0,0.0,m);if(!a.ll&&d!==m){n=0.0;m=n;l=n;}c:{if(a.rt<=0.0){q=n;r=l;s=m;}else if(!o){q=n;r=l;s=m;}else if(a.ej>=0.05000000074505806)
{q=n;r=l;s=m;}else{if(b!==n)break c;if(d!==m)break c;q=n;r=l;s=m;}a.d=(a.L.Y+a.L.bl)/2.0;a.j=a.L.Q+a.c4-a.ej;a.e=(a.L.Z+a.L.bm)/2.0;t=R(b,q);a.j1=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.yl=!a.j1&&!k?0:1;if(!a.cx){if(r<0.0)a.fJ=a.fJ-r;}else if(a.fJ>0.0){u=a.fJ;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.hc=a.hc+Cg(l*l+m*m)*0.6;if(!a.ja){a.ej=a.ej*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.m;$p=6;continue _;}r=a.rt;i=Qn(a.L);Xn(a.L,
g);h=a.m;g=Jg(a.L,b,r,d);$p=2;case 2:$z=X3(h,a,g);if(C()){break _;}h=$z;y=0;while(y<Df(h)){r=Wg(Z(h,y),a.L,r);y=y+1|0;}FY(a.L,0.0,r,0.0);if(a.ll){s=d;q=b;}else if(c===r){s=d;q=b;}else{q=0.0;s=q;r=q;}k=0;while(k<Df(h)){q=QE(Z(h,k),a.L,q);k=k+1|0;}FY(a.L,q,0.0,0.0);if(!a.ll&&b!==q){q=0.0;s=q;r=q;}t=0;while(t<Df(h)){s=Um(Z(h,t),a.L,s);t=t+1|0;}FY(a.L,0.0,0.0,s);if(!a.ll&&d!==s){q=0.0;s=q;r=q;}if(n*n+m*m>=q*q+s*s){Xn(a.L,i);q=n;r=l;s=m;}else a.ej=a.ej+0.5;a.d=(a.L.Y+a.L.bl)/2.0;a.j=a.L.Q+a.c4-a.ej;a.e=(a.L.Z+a.L.bm)
/2.0;t=R(b,q);a.j1=!t&&d===s?0:1;k=R(c,r);a.cx=k&&c<0.0?1:0;a.yl=!a.j1&&!k?0:1;if(!a.cx){if(r<0.0)a.fJ=a.fJ-r;}else if(a.fJ>0.0){u=a.fJ;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.hc=a.hc+Cg(l*l+m*m)*0.6;if(!a.ja){a.ej=a.ej*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.m;$p=6;continue _;case 3:a.DW(u);if(C()){break _;}a.fJ=0.0;if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.hc=a.hc+Cg(l*l+m*m)*0.6;if(!a.ja){a.ej=a.ej
*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.m;$p=6;continue _;case 4:$z=a.HY();if(C()){break _;}t=$z;i=a.m;h=a.L;$p=5;case 5:$z=ARo(i,h);if(C()){break _;}k=$z;if(!k){if(a.cV<=0)a.cV= -a.nN;if(t&&a.cV>0){Di(a.m,a,B(215),0.699999988079071,1.600000023841858+(N(a.n)-N(a.n))*0.4000000059604645);a.cV= -a.nN;}return;}k=1;$p=7;continue _;case 6:$z=ACH(i,v,w,x);if(C()){break _;}y=$z;if(a.hc>a.ri&&y>0){a.ri=a.ri+1|0;L();h=Be2.data[y].gP;if(!Be2.data[y].b$.nI())Di(a.m,a,
Ks(h),AMZ(h)*0.15000000596046448,Yq(h));i=Be2.data[y];h=a.m;$p=8;continue _;}a.ej=a.ej*0.4000000059604645;$p=4;continue _;case 7:a.Ga(k);if(C()){break _;}if(!t){a.cV=a.cV+1|0;if(!a.cV)a.cV=300;}if(t&&a.cV>0){Di(a.m,a,B(215),0.699999988079071,1.600000023841858+(N(a.n)-N(a.n))*0.4000000059604645);a.cV= -a.nN;}return;case 8:i.oN(h,v,w,x,a);if(C()){break _;}a.ej=a.ej*0.4000000059604645;$p=4;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function A13(a){return null;}
function AKh(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:a.ft(c,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function Zw(a,b){return;}
function AFk(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.m;c=Dw(a.L,0.0,(-0.4000000059604645),0.0);d=Bf3;$p=1;case 1:$z=AAG(b,c,d,a);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AGW(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j+a.rM();d=K(a.d);e=Ll(K(c));f=K(a.e);g=a.m;$p=1;case 1:$z=ACH(g,d,e,f);if(C()){break _;}h=$z;if(h){L();if(Be2.data[h].b$===b){b=a.m;$p=2;continue _;}}return 0;case 2:$z=AEX(b,d,e,f);if(C()){break _;}d=$z;return c>=(e+1|0)-(Jz(d)-0.1111111119389534)?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ACy(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.m;c=Dw(a.L,0.0,(-0.4000000059604645),0.0);d=Bf4;$p=1;case 1:$z=AOG(b,c,d);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Ml(a,b,c,d){var e,f,g;e=En(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;c=c*d;f=Bp(a.v*3.1415927410125732/180.0);g=BC(a.v*3.1415927410125732/180.0);a.g=a.g+b*g-c*f;a.h=a.h+c*g+b*f;}}
function ADV(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(a.d);d=(a.L.bj-a.L.Q)*0.66;e=K(a.j-a.c4+d);f=K(a.e);g=a.m;$p=1;case 1:$z=ANu(g,c,e,f);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AUS(a,b){a.m=b;}
function KG(a,b,c,d,e,f){a.d=b;a.bT=b;b=c+a.c4;a.j=b;a.cS=b;a.e=d;a.bS=d;a.v=e;a.J=f;CU(a,a.d,a.j,a.e);}
function ASj(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return En(c*c+d*d+e*e);}
function AG1(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return e*e+f*f+g*g;}
function Sr(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return Cg(e*e+f*f+g*g);}
function LW(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return c*c+d*d+e*e;}
function A68(a,b){return;}
function A5S(a,b){var c,d,e,f,g;c=b.d-a.d;d=b.e-a.e;e=c<0.0? -c:c;f=d<0.0? -d:d;if(e>f)f=e;if(f>=0.009999999776482582){e=Cg(f);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;e=f*g;c=c*0.05000000074505806;e=e*0.05000000074505806;c=c*(1.0-a.n$);e=e*(1.0-a.n$);Hp(a, -c,0.0, -e);Hp(b,c,0.0,e);}}
function Hp(a,b,c,d){a.g=a.g+b;a.i=a.i+c;a.h=a.h+d;}
function AJV(a,b,c){return 0;}
function A9Z(a){return 0;}
function A7_(a){return 0;}
function A_x(a,b,c){return;}
function Sl(a,b){var c,d,e;c=a.d-b.x;d=a.j-b.z;e=a.e-b.w;return AHt(a,c*c+d*d+e*e);}
function AHt(a,b){var c;c=AP9(a.L)*64.0;return b>=c*c?0:1;}
function ALI(a,b){var c,d;c=$rt_createDoubleArray(3);d=c.data;d[0]=a.d;d[1]=a.j;d[2]=a.e;HE(b,B(216),We(a,c));c=$rt_createDoubleArray(3);d=c.data;d[0]=a.g;d[1]=a.i;d[2]=a.h;HE(b,B(217),We(a,c));c=$rt_createFloatArray(2);d=c.data;d[0]=a.v;d[1]=a.J;HE(b,B(218),AMM(a,c));ASm(b,B(219),a.fJ);Fr(b,B(220),a.cV<<16>>16);Fr(b,B(221),a.gf<<16>>16);S8(b,B(222),a.cx);AB0(a,b);}
function Y3(a,b){var c,d,e,f,g;c=Kt(b,B(216));d=Kt(b,B(217));e=Kt(b,B(218));CU(a,0.0,0.0,0.0);a.g=Fd(d,0).iM;a.i=Fd(d,1).iM;a.h=Fd(d,2).iM;f=Fd(c,0).iM;a.d=f;a.cd=f;a.bT=f;f=Fd(c,1).iM;a.j=f;a.b0=f;a.cS=f;f=Fd(c,2).iM;a.e=f;a.ce=f;a.bS=f;g=Fd(e,0).np;a.v=g;a.O=g;g=Fd(e,1).np;a.J=g;a.R=g;a.fJ=AMS(b,B(219));a.cV=FI(b,B(220));a.gf=FI(b,B(221));a.cx=Uz(b,B(222));CU(a,a.d,a.j,a.e);AO$(a,b);}
function We(a,b){var c,d,e,f,g;b=b.data;c=Mq();d=b.length;e=0;while(e<d){f=b[e];g=new MF;Cx(g);g.iM=f;Ju(c,g);e=e+1|0;}return c;}
function AMM(a,b){var c,d,e;b=b.data;c=Mq();d=b.length;e=0;while(e<d){Ju(c,A66(b[e]));e=e+1|0;}return c;}
function AB5(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0.0;$p=1;case 1:$z=AGV(a,b,c,d);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AGV(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Hd(a.m,a.d,a.j+d,a.e,KN(b,c));e.hb=10;f=a.m;$p=1;case 1:AOt(f,e);if(C()){break _;}return e;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AHN(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.j+a.rM());d=K(a.e);e=a.m;$p=1;case 1:$z=AAP(e,b,c,d);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AW0(a,b){return 0;}
function AXf(a,b){return null;}
function AFs(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bD.cR){a.bD=null;return;}a.g=0.0;a.i=0.0;a.h=0.0;$p=1;case 1:a.ep();if(C()){break _;}CU(a,a.bD.d,a.bD.j+a.c4+a.bD.Av(),a.bD.e);a.g1=a.g1+a.bD.v-a.bD.O;a.g8=a.g8+a.bD.J-a.bD.R;while(a.g1>=180.0){a.g1=a.g1-360.0;}while(a.g1<(-180.0)){a.g1=a.g1+360.0;}while(a.g8>=180.0){a.g8=a.g8-360.0;}while(a.g8<(-180.0)){a.g8=a.g8+360.0;}b=a.g1*0.5;c=a.g8*0.5;d=10.0;if(b>d)b
=d;e=(-10.0);if(b<e)b=e;if(c<=d)d=c;if(d>=e)e=d;a.g1=a.g1-b;a.g8=a.g8-e;a.v=a.v+b;a.J=a.J+e;return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function A93(a){return a.eN*0.75;}
function Ps(a,b){a.g8=0.0;a.g1=0.0;if(a.bD===b){a.bD.bI=null;a.bD=null;}else{if(a.bD!==null)a.bD.bI=null;if(b.bI!==null)b.bI.bD=null;a.bD=b;b.bI=a;}}
function Xu(a,b,c){var d,e;d=a.J;e=a.v;a.v=a.v+b*0.15;a.J=a.J-c*0.15;if(a.J<(-90.0))a.J=(-90.0);if(a.J>90.0)a.J=90.0;a.R=a.R+a.J-d;a.O=a.O+a.v-e;}
function EQ(){var a=this;C5.call(a);a.o3=0;a.JR=0.0;a.Hi=0.0;a.IC=0.0;a.dD=0.0;a.e9=0.0;a.Ah=0.0;a.nl=0.0;a.j6=0.0;a.mg=0.0;a.Hk=0;a.yI=null;a.Hj=0;a.Ej=0.0;a.Fh=null;a.JE=0.0;a.u$=0;a.JF=0.0;a.bU=0;a.tL=0;a.u8=0;a.dC=0;a.E5=0;a.kL=0.0;a.c2=0;a.dx=0;a.k0=0.0;a.jp=0.0;a.CD=0;a.Fy=0;a.JK=0.0;a.jX=0.0;a.ci=0.0;a.gu=0.0;a.hm=0;a.iO=0.0;a.gJ=0.0;a.kM=0.0;a.hI=0;a.z$=0.0;a.s5=0.0;}
function PV(a){return a.yI;}
function AXK(a){return a.cR?0:1;}
function A17(a){return a.cR?0:1;}
function AQE(a){return a.eN*0.8500000238418579;}
function ANC(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AE8(a);if(C()){break _;}b=E(a.n,1000);c=a.u8;a.u8=c+1|0;if(b<c){a.u8=(-80);d=a.wO();if(d!==null)Di(a.m,a,d,1.0,(N(a.n)-N(a.n))*0.20000000298023224+1.0);}if(H4(a)){$p=2;continue _;}if(H4(a)){d=Bf3;$p=3;continue _;}a.gf=a.n_;a.k0=a.jp;if(a.dx>0)a.dx=a.dx-1|0;if(a.dC>0)a.dC=a.dC-1|0;if(a.dw
>0)a.dw=a.dw-1|0;if(a.bU<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mg=a.j6;a.e9=a.dD;a.O=a.v;a.R=a.J;return;case 2:$z=AHN(a);if(C()){break _;}e=$z;if(e){d=null;e=1;$p=4;continue _;}if(H4(a)){d=Bf3;$p=3;continue _;}a.gf=a.n_;a.k0=a.jp;if(a.dx>0)a.dx=a.dx-1|0;if(a.dC>0)a.dC=a.dC-1|0;if(a.dw>0)a.dw=a.dw-1|0;if(a.bU<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mg=a.j6;a.e9=a.dD;a.O=a.v;a.R=a.J;return;case 3:$z=AGW(a,d);if(C()){break _;}e=$z;if(!e)a.gf=a.n_;else{a.gf=a.gf-1|0;if(a.gf==(-20)){a.gf=0;e
=0;while(e<8){f=N(a.n)-N(a.n);g=N(a.n)-N(a.n);h=N(a.n)-N(a.n);BX(a.m,B(213),a.d+f,a.j+g,a.e+h,a.g,a.i,a.h);e=e+1|0;}d=null;e=2;$p=5;continue _;}a.cV=0;}a.k0=a.jp;if(a.dx>0)a.dx=a.dx-1|0;if(a.dC>0)a.dC=a.dC-1|0;if(a.dw>0)a.dw=a.dw-1|0;if(a.bU<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mg=a.j6;a.e9=a.dD;a.O=a.v;a.R=a.J;return;case 4:a.ft(d,e);if(C()){break _;}if(H4(a)){d=Bf3;$p=3;continue _;}a.gf=a.n_;a.k0=a.jp;if(a.dx>0)a.dx=a.dx-1|0;if(a.dC>0)a.dC=a.dC-1|0;if(a.dw>0)a.dw=a.dw-1|0;if(a.bU<=0){a.c2=a.c2
+1|0;if(a.c2>20){$p=6;continue _;}}a.mg=a.j6;a.e9=a.dD;a.O=a.v;a.R=a.J;return;case 5:a.ft(d,e);if(C()){break _;}a.cV=0;a.k0=a.jp;if(a.dx>0)a.dx=a.dx-1|0;if(a.dC>0)a.dC=a.dC-1|0;if(a.dw>0)a.dw=a.dw-1|0;if(a.bU<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mg=a.j6;a.e9=a.dD;a.O=a.v;a.R=a.J;return;case 6:Cd(a);if(C()){break _;}e=0;while(e<20){i=CZ(a.n)*0.02;j=CZ(a.n)*0.02;k=CZ(a.n)*0.02;BX(a.m,B(223),a.d+N(a.n)*a.c1*2.0-a.c1,a.j+N(a.n)*a.eN,a.e+N(a.n)*a.c1*2.0-a.c1,i,j,k);e=e+1|0;}a.mg=a.j6;a.e9=a.dD;a.O=a.v;a.R
=a.J;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AE5(a){var b,c,d,e;b=0;while(b<20){c=CZ(a.n)*0.02;d=CZ(a.n)*0.02;e=CZ(a.n)*0.02;BX(a.m,B(223),a.d+N(a.n)*a.c1*2.0-a.c1-c*10.0,a.j+N(a.n)*a.eN-d*10.0,a.e+N(a.n)*a.c1*2.0-a.c1-e*10.0,c,d,e);b=b+1|0;}}
function AK7(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFs(a);if(C()){break _;}a.Ah=a.nl;a.nl=0.0;return;default:E_();}}C3().s(a,$p);}
function AMF(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jm();if(C()){break _;}$p=2;case 2:a.ow();if(C()){break _;}b=a.d-a.bT;c=a.e-a.bS;d=Cg(b*b+c*c);e=a.dD;f=0.0;a.Ah=a.nl;g=0.0;if(d>0.05000000074505806){g=1.0;f=d*3.0;e=CS(c,b)*180.0/3.1415927410125732-90.0;}if(!a.cx)g=0.0;a.nl=a.nl+(g-a.nl)*0.30000001192092896;h=e-a.dD;while(h<(-180.0)){h=h+360.0;}while
(h>=180.0){h=h-360.0;}a.dD=a.dD+h*0.10000000149011612;i=a.v-a.dD;while(i<(-180.0)){i=i+360.0;}while(i>=180.0){i=i-360.0;}j=i>=(-90.0)&&i<90.0?0:1;if(i<(-75.0))i=(-75.0);if(i>=75.0)i=75.0;a.dD=a.v-i;a.dD=a.dD+i*0.10000000149011612;if(j)f=f*(-1.0);while(a.v-a.O<(-180.0)){a.O=a.O-360.0;}while(a.v-a.O>=180.0){a.O=a.O+360.0;}while(a.dD-a.e9<(-180.0)){a.e9=a.e9-360.0;}while(a.dD-a.e9>=180.0){a.e9=a.e9+360.0;}while(a.J-a.R<(-180.0)){a.R=a.R-360.0;}while(a.J-a.R>=180.0){a.R=a.R+360.0;}a.j6=a.j6+f;return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function A1x(a,b,c){D1(a,b,c);}
function UY(a,b){if(a.bU>0){a.bU=a.bU+b|0;if(a.bU>20)a.bU=20;a.dw=a.o3/2|0;}}
function ACc(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hm=0;if(a.bU<=0)return 0;a.ci=1.5;if(a.dw<=a.o3/2.0){a.tL=a.bU;a.dw=a.o3;a.bU=a.bU-c|0;a.E5=10;a.dC=10;}else{if((a.tL-c|0)>=a.bU)return 0;a.bU=a.tL-c|0;}a.kL=0.0;if(b===null)a.kL=(BR()*2.0|0)*180|0;else{d=b.d-a.d;e=b.e-a.e;while(d*d+e*e<1.0E-4){d=(BR()-BR())*0.01;e=(BR()-BR())*0.01;}a.kL=CS(e,d)*180.0/3.1415927410125732-a.v;ABK(a,b,c,d,e);}if(a.bU>0){Di(a.m,a,
a.vm(),1.0,(N(a.n)-N(a.n))*0.20000000298023224+1.0);return 1;}Di(a.m,a,a.uV(),1.0,(N(a.n)-N(a.n))*0.20000000298023224+1.0);$p=1;case 1:a.FP(b);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,$p);}
function A8H(a){return null;}
function AUQ(a){return B(224);}
function AVL(a){return B(224);}
function ABK(a,b,c,d,e){var f,g,h;f=Cg(d*d+e*e);a.g=a.g/2.0;a.i=a.i/2.0;a.h=a.h/2.0;g=a.g;h=f;a.g=g-d/h*0.4000000059604645;a.i=a.i+0.4000000059604645;a.h=a.h-e/h*0.4000000059604645;if(a.i>0.4000000059604645)a.i=0.4000000059604645;}
function AOe(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.u$>0&&b!==null)b.BT(a,a.u$);a.CD=1;c=a.ml();if(c>0){d=E(a.n,3);e=0;if(e<d){f=1;$p=1;continue _;}}return;case 1:AB5(a,c,f);if(C()){break _;}e=e+1|0;if(e>=d)return;f=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ATU(a){return 0;}
function AQk(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=UB(b-3.0)|0;if(c<=0)return;d=null;$p=1;case 1:a.ft(d,c);if(C()){break _;}d=a.m;c=K(a.d);e=K(a.j-0.20000000298023224-a.c4);f=K(a.e);$p=2;case 2:$z=ACH(d,c,e,f);if(C()){break _;}e=$z;if(e>0){L();d=Be2.data[e].gP;Di(a.m,a,Ks(d),d.oT*0.5,d.pP*0.75);}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ADI(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFk(a);if(C()){break _;}d=$z;if(!d){$p=2;continue _;}e=a.j;Ml(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=3;continue _;case 2:$z=ACy(a);if(C()){break _;}d=$z;if(d){e=a.j;Ml(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=4;continue _;}Ml(a,b,c,!a.cx?0.019999999552965164:0.10000000149011612);$p=7;continue _;case 3:ARU(a,
f,g,h);if(C()){break _;}a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=a.i-0.02;if(!a.j1){a.jX=a.ci;e=a.d-a.bT;f=a.e-a.bS;i=Cg(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ci=a.ci+(i-a.ci)*0.4000000059604645;a.gu=a.gu+a.ci;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=5;continue _;case 4:ARU(a,f,g,h);if(C()){break _;}a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;a.i=a.i-0.02;if(!a.j1){a.jX=a.ci;e=a.d-a.bT;f=a.e-a.bS;i=Cg(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ci=a.ci+(i-a.ci)*0.4000000059604645;a.gu
=a.gu+a.ci;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=6;continue _;case 5:$z=AHv(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jX=a.ci;e=a.d-a.bT;f=a.e-a.bS;i=Cg(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ci=a.ci+(i-a.ci)*0.4000000059604645;a.gu=a.gu+a.ci;return;case 6:$z=AHv(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jX=a.ci;e=a.d-a.bT;f=a.e-a.bS;i=Cg(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ci=a.ci+(i-a.ci)*0.4000000059604645;a.gu=a.gu+a.ci;return;case 7:$z=AIv(a);if(C()){break _;}d=
$z;if(d){a.fJ=0.0;if(a.i<(-0.15))a.i=(-0.15);}e=a.g;f=a.i;g=a.h;$p=8;case 8:ARU(a,e,f,g);if(C()){break _;}if(!a.j1){a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jX=a.ci;e=a.d-a.bT;f=a.e-a.bS;i=Cg(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ci=a.ci+(i-a.ci)*0.4000000059604645;a.gu=a.gu+a.ci;return;}$p=9;case 9:$z=AIv(a);if(C()){break _;}d=$z;if(d)a.i=0.2;a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h
=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jX=a.ci;e=a.d-a.bT;f=a.e-a.bS;i=Cg(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.ci=a.ci+(i-a.ci)*0.4000000059604645;a.gu=a.gu+a.ci;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AIv(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.L.Q);d=K(a.e);e=a.m;$p=1;case 1:$z=ACH(e,b,c,d);if(C()){break _;}f=$z;L();if(f==Bgo.b)return 1;e=a.m;c=c+1|0;$p=2;case 2:$z=ACH(e,b,c,d);if(C()){break _;}b=$z;return b==Bgo.b?1:0;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function H4(a){return !a.cR&&a.bU>0?1:0;}
function ACA(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hm=a.hm+1|0;b=a.m.bg;if(b!==null){c=b.d-a.d;d=b.j-a.j;e=b.e-a.e;f=c*c+d*d+e*e;if(f>16384.0){$p=2;continue _;}if(a.hm>600&&!E(a.n,800)){if(f>=1024.0){$p=7;continue _;}a.hm=0;}}if(a.bU>0){$p=1;continue _;}a.hI=0;a.iO=0.0;a.gJ=0.0;a.kM=0.0;$p=3;continue _;case 1:a.wY();if(C())
{break _;}$p=3;continue _;case 2:Cd(a);if(C()){break _;}if(a.hm>600&&!E(a.n,800)){if(f>=1024.0){$p=7;continue _;}a.hm=0;}if(a.bU>0){$p=1;continue _;}a.hI=0;a.iO=0.0;a.gJ=0.0;a.kM=0.0;$p=3;case 3:$z=AFk(a);if(C()){break _;}g=$z;$p=4;case 4:$z=ACy(a);if(C()){break _;}h=$z;if(a.hI){if(g)a.i=a.i+0.03999999910593033;else if(h)a.i=a.i+0.03999999910593033;else if(a.cx)AGm(a);}a.iO=a.iO*0.9800000190734863;a.gJ=a.gJ*0.9800000190734863;a.kM=a.kM*0.8999999761581421;i=a.iO;j=a.gJ;$p=5;case 5:ADI(a,i,j);if(C()){break _;}k
=a.m;l=Dw(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADY(k,a,l);if(C()){break _;}k=$z;if(k!==null&&k.p>0){m=0;while(true){if(m>=k.p)break a;l=Z(k,m);if(l.rV())l.u9(a);m=m+1|0;}}}return;case 7:Cd(a);if(C()){break _;}if(a.bU>0){$p=1;continue _;}a.hI=0;a.iO=0.0;a.gJ=0.0;a.kM=0.0;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AGm(a){a.i=0.41999998688697815;}
function AQ3(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(N(a.n)<0.07000000029802322){a.iO=(N(a.n)-0.5)*a.s5;a.gJ=N(a.n)*a.s5;}a.hI=N(a.n)>=0.009999999776482582?0:1;if(N(a.n)<0.03999999910593033)a.kM=(N(a.n)-0.5)*60.0;a.v=a.v+a.kM;a.J=a.z$;$p=1;case 1:$z=AFk(a);if(C()){break _;}b=$z;$p=2;case 2:$z=ACy(a);if(C()){break _;}c=$z;if(!(!b&&!c))a.hI=N(a.n)>=0.800000011920929?0:1;return;default:E_();}}C3().s(a,b,c,$p);}
function A41(a){return;}
function ZG(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CU(a,b,c+a.eN/2.0,d);e=a.m;f=a.L;$p=1;case 1:$z=ANh(e,f);if(C()){break _;}g=$z;if(!g)return 0;e=a.m;f=a.L;$p=2;case 2:$z=X3(e,a,f);if(C()){break _;}e=$z;if(e.p)return 0;e=a.m;f=a.L;$p=3;case 3:$z=AJx(e,f);if(C()){break _;}g=$z;return g?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABU(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=null;c=4;$p=1;case 1:a.ft(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function IU(){var a=this;EQ.call(a);a.dP=null;a.dd=null;a.hn=0;}
function AKu(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.m;d=BY(a.d,a.j+AQE(a),a.e);b=BY(b.d,b.j+b.rM(),b.e);$p=1;case 1:$z=AJz(c,d,b);if(C()){break _;}b=$z;return b!==null?0:1;default:E_();}}C3().s(a,b,c,d,$p);}
function AP0(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hn=0;b=16.0;if(a.dd===null){$p=1;continue _;}if(H4(a.dd)){c=ASj(a.dd,a);d=a.dd;$p=2;continue _;}a.dd=null;a:{if(!a.hn&&a.dd!==null){if(a.dP===null)break a;if
(!E(a.n,20))break a;}if(!(a.dP!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e=K(a.L.Q);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 1:$z=a.yf();if(C()){break _;}d=$z;a.dd=d;if(a.dd!==null){d=a.m;m=a.dd;$p=3;continue _;}b:{if(!a.hn&&a.dd!==null){if(a.dP===null)break b;if(!E(a.n,20))break b;}if(!(a.dP!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<
50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e=K(a.L.Q);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 2:$z=AKu(a,d);if(C()){break _;}e=$z;if(e){d=a.dd;$p=4;continue _;}b:{if(!a.hn&&a.dd!==null){if(a.dP===null)break b;if(!E(a.n,20))break b;}if(!(a.dP!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e
=K(a.L.Q);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 3:$z=ASb(d,a,m,b);if(C()){break _;}d=$z;a.dP=d;c:{if(!a.hn&&a.dd!==null){if(a.dP===null)break c;if(!E(a.n,20))break c;}if(!(a.dP!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e=K(a.L.Q);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 4:a.nU(d,c);if(C()){break _;}c:{if(!a.hn&&a.dd!==null){if(a.dP===null)break c;if
(!E(a.n,20))break c;}if(!(a.dP!==null&&E(a.n,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);$p=8;continue _;}if(e>0){d=a.m;$p=10;continue _;}}e=K(a.L.Q);$p=5;continue _;}d=a.m;m=a.dd;$p=7;continue _;case 5:$z=AFk(a);if(C()){break _;}n=$z;$p=6;case 6:$z=ACy(a);if(C()){break _;}o=$z;if(a.dP!==null&&E(a.n,100)){d=Sz(a.dP,a);p=a.c1*2.0;q=p*p;r=e;while(d!==null&&AB8(d,a.d,a.j,a.e)<q&&d.z<=r){AQg(a.dP);if(!ANA(a.dP)){d=Sz(a.dP,a);continue;}d
=null;a.dP=null;}a.hI=0;if(d!==null){q=d.x-a.d;s=d.w-a.e;t=d.z-r;a.v=CS(s,q)*180.0/3.1415927410125732-90.0;a.gJ=a.s5;if(a.hn&&a.dd!==null){u=a.dd.d-a.d;r=a.dd.e-a.e;v=a.v;a.v=CS(r,u)*180.0/3.1415927410125732-90.0;w=(v-a.v+90.0)*3.1415927410125732/180.0;a.iO= -Bp(w)*a.gJ*1.0;a.gJ=BC(w)*a.gJ*1.0;}if(t!==0.0)a.hI=1;}if(N(a.n)<0.800000011920929&&!(!n&&!o))a.hI=1;return;}$p=9;continue _;case 7:$z=ASb(d,a,m,b);if(C()){break _;}d=$z;a.dP=d;e=K(a.L.Q);$p=5;continue _;case 8:$z=a.sH(j,k,l);if(C()){break _;}x=$z;if(x
>h){h=x;e=j;f=k;g=l;}i=i+1|0;if(i>=50){if(e>0){d=a.m;$p=10;continue _;}e=K(a.L.Q);$p=5;continue _;}j=K(a.d+E(a.n,11)-5.0);k=K(a.j+E(a.n,7)-3.0);l=K(a.e+E(a.n,11)-5.0);continue _;case 9:AQ3(a);if(C()){break _;}a.dP=null;return;case 10:$z=AJJ(d,a,e,f,g,b);if(C()){break _;}d=$z;a.dP=d;e=K(a.L.Q);$p=5;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AMO(a,b,c){return;}
function ALb(a){return null;}
function AC2(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ZG(a,b,c,d);if(C()){break _;}e=$z;if(!e)return 0;e=b|0;f=c|0;g=d|0;$p=2;case 2:$z=a.sH(e,f,g);if(C()){break _;}h=$z;return h<0.0?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function DP(){IU.call(this);this.FH=0;}
function ADl(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADV(a,b);if(C()){break _;}b=$z;if(b>0.5)a.hm=a.hm+2|0;$p=2;case 2:ACA(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function ALk(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMF(a);if(C()){break _;}if(a.m.i6)return;$p=2;case 2:Cd(a);if(C()){break _;}return;default:E_();}}C3().s(a,$p);}
function AKD(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(LW(a.m.bg,a)>=256.0)return null;b=a.m.bg;$p=1;case 1:$z=AKu(a,b);if(C()){break _;}c=$z;return !c?null:a.m.bg;default:E_();}}C3().s(a,b,c,$p);}
function AAV(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACc(a,b,c);if(C()){break _;}c=$z;if(!c)return 0;if(b!==a)a.dd=b;return 1;default:E_();}}C3().s(a,b,c,$p);}
function AQ_(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<2.5&&b.L.bj>a.L.Q&&b.L.Q<a.L.bj){a.dx=20;d=a.FH;$p=1;continue _;}return;case 1:b.ft(a,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ABJ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0.5;f=a.m;$p=1;case 1:$z=ANu(f,b,c,d);if(C()){break _;}g=$z;return e-g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function YJ(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.m;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=XI(e,f,g,h);if(C()){break _;}f=$z;if(f>E(a.n,8))return 0;$p=2;case 2:$z=AC2(a,b,c,d);if(C()){break _;}f=$z;return !f?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function I7(){DP.call(this);}
function AIf(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!RI(a.m)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:ADl(a);if(C()){break _;}return;case 2:$z=ADV(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.m;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGv(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.n)*30.0<(b-0.4000000059604645)*2.0)a.cV=300;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AW2(a){BB();return Bgp.cW;}
function Jq(){DP.call(this);}
function AIR(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!RI(a.m)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:ADl(a);if(C()){break _;}return;case 2:$z=ADV(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.m;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGv(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.n)*30.0<(b-0.4000000059604645)*2.0)a.cV=300;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AH$(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<10.0){d=b.d-a.d;e=b.e-a.e;if(!a.dx){f=ATq(a.m,a);f.j=f.j+1.399999976158142;g=b.j-0.20000000298023224-f.j;h=Cg(d*d+e*e)*0.20000000298023224;Di(a.m,a,B(225),1.0,1.0/(N(a.n)*0.4000000059604645+0.800000011920929));b=a.m;$p=1;continue _;}a.v=CS(e,d)*180.0/3.1415927410125732-90.0;a.hn=1;}return;case 1:AOt(b,f);if(C()){break _;}QO(f,
d,g+h,e,0.6000000238418579,12.0);a.dx=30;a.v=CS(e,d)*180.0/3.1415927410125732-90.0;a.hn=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AY5(a){BB();return Bgq.cW;}
function J5(){var a=this;DP.call(a);a.jg=0;a.uB=0;a.Bz=0;a.jY=0;}
function Z2(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.uB=a.jg;if(a.jg>0&&a.jY<0)a.jg=a.jg-1|0;if(a.jY>=0)a.jY=2;$p=1;case 1:AP0(a);if(C()){break _;}if(a.jY!=1)a.jY=(-1);return;default:E_();}}C3().s(a,$p);}
function AAX(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(a.jY<=0&&c<3.0)){if(a.jY<=0)break a;if(c>=7.0)break a;}if(!a.jg)Di(a.m,a,B(226),1.0,0.5);a.jY=1;a.jg=a.jg+1|0;if(a.jg==a.Bz){b=a.m;d=a.d;e=a.j;f=a.e;c=3.0;$p=1;continue _;}a.hn=1;}return;case 1:Yi(b,a,d,e,f,c);if(C()){break _;}$p=2;case 2:Cd(a);if(C()){break _;}a.hn=1;return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function Qw(a,b){return (a.uB+(a.jg-a.uB|0)*b)/(a.Bz-2|0);}
function AS_(a){BB();return Bgr.cW;}
function Ky(){DP.call(this);}
function ARG(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADV(a,b);if(C()){break _;}b=$z;if(b<0.5&&LW(a.m.bg,a)<256.0)return a.m.bg;return null;default:E_();}}C3().s(a,b,$p);}
function Zz(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0;$p=1;case 1:a:{$z=ADV(a,d);if(C()){break _;}d=$z;if(d>0.5&&!E(a.n,100))a.dd=null;else{if(c<=2.0)break a;if(c>=6.0)break a;if(E(a.n,10))break a;if(a.cx){e=b.d-a.d;f=b.e-a.e;g=Cg(e*e+f*f);a.g=e/g*0.5*0.800000011920929+a.g*0.20000000298023224;a.h=f/g*0.5*0.800000011920929+a.h*0.20000000298023224;a.i=0.4000000059604645;}}return;}$p=2;case 2:AQ_(a,
b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZ4(a){BB();return Bgs.cW;}
function Gz(){IU.call(this);}
function AOM(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.m;f=c-1|0;$p=1;case 1:$z=ACH(e,b,f,d);if(C()){break _;}g=$z;L();if(g==Be4.b)return 10.0;e=a.m;$p=2;case 2:$z=ANu(e,b,c,d);if(C()){break _;}h=$z;return h-0.5;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ALh(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.m;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=XI(e,f,g,h);if(C()){break _;}g=$z;if(g<=8)return 0;$p=2;case 2:$z=AC2(a,b,c,d);if(C()){break _;}g=$z;return !g?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function KW(){Gz.call(this);this.yk=0;}
function AG$(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.yk&&b instanceof EQ){a.yk=1;d=1+E(a.n,3)|0;e=0;if(e<d){L();f=Bfq.b;g=1;h=1.0;$p=2;continue _;}}$p=1;case 1:$z=ACc(a,b,c);if(C()){break _;}c=$z;return c;case 2:$z=AGV(a,f,g,h);if(C()){break _;}i=$z;i.i=i.i+N(a.n)*0.05000000074505806;i.g=i.g+(N(a.n)-N(a.n))*0.10000000149011612;i.h=i.h+(N(a.n)-N(a.n))*0.10000000149011612;e
=e+1|0;if(e>=d){$p=1;continue _;}L();f=Bfq.b;g=1;h=1.0;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A7g(a){return B(227);}
function A4w(a){return B(227);}
function AYD(a){return B(227);}
function IB(){Gz.call(this);this.qB=0;}
function ATQ(a){return B(228);}
function A9J(a){return B(228);}
function AWl(a){return B(229);}
function AX$(a,b){if(!a.qB)return 0;Ps(b,a);return 1;}
function AWv(a){BB();return Bgt.cW;}
function DA(){var a=this;D.call(a);a.AV=0.0;a.xf=0;}
function Bbz(){var a=new DA();A3t(a);return a;}
function BbN(a){var b=new DA();AV0(b,a);return b;}
function A3t(a){return;}
function AV0(a,b){return;}
function N0(a,b){return;}
function AGo(a,b){if(b==32)return Cl(a)*4.294967295E9+(-2.147483648E9)|0;return Cl(a)*Long_toNumber(Long_shl(Long_fromInt(1),CC(32,b)))|0;}
function LJ(a){return AGo(a,32);}
function E(a,b){return Cl(a)*b|0;}
function Gy(a){return Long_or(Long_shl(Long_fromInt(LJ(a)),32),Long_fromInt(LJ(a)));}
function N(a){return Cl(a);}
function Cl(a){return Math.random();}
function CZ(a){var b,c,d,e;if(a.xf){a.xf=0;return a.AV;}while(true){while(true){b=2.0*Cl(a)-1.0;c=2.0*Cl(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=Ed((-2.0)*A39(d)/d);a.AV=c*e;a.xf=1;return b*e;}
function NS(){D.call(this);}
var Bgu=null;var Bgv=null;function Bgw(){var a=new NS();AIB(a);return a;}
function AIB(a){return;}
function IZ(b){var c,d,e,f,g,h;Bbe(F(NS));try{BJ();c=Bgx+1|0;d=0;while(d<b){e=Bgx+1|0;Bgx=e;f=Bgy;g=CY(e);h=new RB;h.BO=e;h.rl=null;h.o4=null;h.lO=(-1);h.jN=0;BT(f,g,h);d=d+1|0;}S(Bgu,CY(c));S(Bgu,CY(b));return c;}finally{Bc6(F(NS));}}
function W3(b){var c,d,e,f,g;Bbe(F(NS));try{c=b.bh;while(c<b.cy){BJ();d=Bgz;Bb();e=new Pl;f=BdV.createTexture();e.Iz=(-1);e.Iw=(-1);e.GA=1;e.Hs=0;e.B6=f;g=MX(d,e);ARe(b,c,g);S(Bgv,CY(g));c=c+1|0;}}finally{Bc6(F(NS));}}
function WX(b){var c;c=AAE($rt_createByteArray(b));c.kP=BgA;return c;}
function Rp(b){return U8($rt_createIntArray(b));}
function H0(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new WW;f=0+d|0;K7(e,d);e.bh=0;e.cy=f;e.yE=0;e.xK=0;e.xD=c;return e;}
function AL8(){Bgu=Ch();Bgv=Ch();}
function Pk(){var a=this;D.call(a);a.cO=null;a.eT=null;a.jd=0.0;a.rc=0.0;a.iD=0;a.jS=0;a.At=null;}
function AC$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.rc+(a.jd-a.rc)*b;d=a.cO.f;B1();Bw(d.R+(d.J-d.R)*b,1.0,0.0,0.0);Bw(d.O+(d.v-d.O)*b,0.0,1.0,0.0);Hw();BE();e=a.cO.A;f=
K(d.d);g=K(d.j);h=K(d.e);$p=1;case 1:$z=ANu(e,f,g,h);if(C()){break _;}i=$z;BW(i,i,i,1.0);if(a.eT===null){B1();if(a.jS){j=(a.iD+b)/8.0;k=Bp(j*3.1415927410125732);Bu( -Bp(En(j)*3.1415927410125732)*0.30000001192092896,Bp(En(j)*3.1415927410125732*2.0)*0.4000000059604645, -k*0.4000000059604645);}Bu(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bw(45.0,0.0,1.0,0.0);Ba(32826);if(a.jS){j=(a.iD+b)/8.0;k=Bp(j*j*3.1415927410125732);Bw(Bp(En(j)*3.1415927410125732)*70.0,0.0,1.0,
0.0);Bw( -k*20.0,0.0,0.0,1.0);}f=3553;d=a.cO.bo;e=a.cO.f.tP;l=PV(a.cO.f);$p=2;continue _;}B1();if(a.jS){j=(a.iD+b)/8.0;k=Bp(j*3.1415927410125732);Bu( -Bp(En(j)*3.1415927410125732)*0.4000000059604645,Bp(En(j)*3.1415927410125732*2.0)*0.20000000298023224, -k*0.20000000298023224);}Bu(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bw(45.0,0.0,1.0,0.0);Ba(32826);if(a.jS){j=(a.iD+b)/8.0;k=Bp(j*j*3.1415927410125732);m=Bp(En(j)*3.1415927410125732);Bw( -k*20.0,0.0,1.0,0.0);b
= -m;Bw(b*20.0,0.0,0.0,1.0);Bw(b*80.0,1.0,0.0,0.0);}Cw(0.4000000059604645,0.4000000059604645,0.4000000059604645);if(a.eT.bC<256){L();if(!Be2.data[a.eT.bC].em()){f=3553;d=a.cO.bo;e=B(179);$p=5;continue _;}}if(a.eT.bC>=256){f=3553;d=a.cO.bo;e=B(230);$p=3;continue _;}f=3553;d=a.cO.bo;e=B(179);$p=4;continue _;case 2:$z=AEf(d,e,l);if(C()){break _;}g=$z;Cq(f,g);Bu((-1.0),3.5999999046325684,3.5);Bw(120.0,0.0,0.0,1.0);Bw(200.0,1.0,0.0,0.0);Bw((-135.0),0.0,1.0,0.0);Cw(1.0,1.0,1.0);Bu(5.599999904632568,0.0,0.0);n=Sj(BgB,
a.cO.f);Cw(1.0,1.0,1.0);ALM(n);BE();Bc(32826);DS();return;case 3:$z=AHK(d,e);if(C()){break _;}g=$z;Cq(f,g);BA();e=BeY;m=(((DK(a.eT)%16|0)*16|0)+0|0)/256.0;o=(((DK(a.eT)%16|0)*16|0)+16|0)/256.0;p=(((DK(a.eT)/16|0)*16|0)+0|0)/256.0;q=(((DK(a.eT)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bu(-0.0,(-0.30000001192092896),0.0);Cw(1.5,1.5,1.5);Bw(50.0,0.0,1.0,0.0);Bw(335.0,0.0,0.0,1.0);Bu((-0.9375),(-0.0625),0.0);Bz(e);Dd(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,
1.0,0.0,r,u);Bt(e);Bz(e);Dd(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),t,s);G(e,0.0,0.0,(-0.0625),r,s);Bt(e);Bz(e);Dd(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Bt(e);Bz(e);Dd(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,
(-0.0625),y,s);f=f+1|0;}Bt(e);Bz(e);Dd(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Bt(e);Bz(e);Dd(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Bt(e);Bc(32826);BE();Bc(32826);DS();return;case 4:$z=AHK(d,e);if(C()){break _;}g=$z;Cq(f,g);BA();e=
BeY;m=(((DK(a.eT)%16|0)*16|0)+0|0)/256.0;o=(((DK(a.eT)%16|0)*16|0)+16|0)/256.0;p=(((DK(a.eT)/16|0)*16|0)+0|0)/256.0;q=(((DK(a.eT)/16|0)*16|0)+16|0)/256.0;Ba(32826);Bu(-0.0,(-0.30000001192092896),0.0);Cw(1.5,1.5,1.5);Bw(50.0,0.0,1.0,0.0);Bw(335.0,0.0,0.0,1.0);Bu((-0.9375),(-0.0625),0.0);Bz(e);Dd(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,1.0,0.0,r,u);Bt(e);Bz(e);Dd(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),
t,s);G(e,0.0,0.0,(-0.0625),r,s);Bt(e);Bz(e);Dd(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Bt(e);Bz(e);Dd(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Bt(e);Bz(e);Dd(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba
=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Bt(e);Bz(e);Dd(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Bt(e);Bc(32826);BE();Bc(32826);DS();return;case 5:$z=AHK(d,e);if(C()){break _;}g=$z;Cq(f,g);GX(a.At,Be2.data[a.eT.bC]);BE();Bc(32826);DS();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,
$p);}
function ACk(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(3008);if(a.cO.f.cV<=0){c=a.cO.A.bg;$p=1;continue _;}c=a.cO.bo;d=B(179);$p=2;continue _;case 1:$z=AHN(c);if(C()){break _;}e=$z;if(!e){d=a.cO.f;c=Bf3;$p=3;continue _;}e=K(a.cO.f.d);f=K(a.cO.f.j);g=K(a.cO.f.e);c
=a.cO.bo;d=B(179);$p=4;continue _;case 2:$z=AHK(c,d);if(C()){break _;}e=$z;Cq(3553,e);BA();c=BeY;BW(1.0,1.0,1.0,0.8999999761581421);Ba(3042);Dg(770,771);e=0;while(e<2){B1();L();f=BgC.W+(e*16|0)|0;g=(f&15)<<4;f=f&240;h=g;i=h/256.0;h=(h+15.989999771118164)/256.0;j=f;k=j/256.0;j=(j+15.989999771118164)/256.0;f=(e*2|0)-1|0;Bu( -f*0.23999999463558197,(-0.30000001192092896),0.0);Bw(f*10.0,0.0,1.0,0.0);Bz(c);l=h;m=j;G(c,(-0.5),(-0.5),(-0.5),l,m);n=i;G(c,0.5,(-0.5),(-0.5),n,m);m=k;G(c,0.5,0.5,(-0.5),n,m);G(c,(-0.5),
0.5,(-0.5),l,m);Bt(c);BE();e=e+1|0;}BW(1.0,1.0,1.0,1.0);Bc(3042);c=a.cO.A.bg;$p=1;continue _;case 3:$z=AGW(d,c);if(C()){break _;}e=$z;if(!e){Ba(3008);return;}c=a.cO.bo;d=B(231);$p=6;continue _;case 4:$z=AHK(c,d);if(C()){break _;}o=$z;Cq(3553,o);c=a.cO.A;$p=5;case 5:$z=ACH(c,e,f,g);if(C()){break _;}p=$z;L();if(Be2.data[p]===null){d=a.cO.f;c=Bf3;$p=3;continue _;}e=Be2.data[p].ck(2);BA();c=BeY;d=a.cO.f;$p=8;continue _;case 6:$z=AHK(c,d);if(C()){break _;}e=$z;Cq(3553,e);BA();c=BeY;d=a.cO.f;$p=7;case 7:$z=ADV(d,
b);if(C()){break _;}h=$z;BW(h,h,h,0.5);Ba(3042);Dg(770,771);B1();h= -a.cO.f.v/64.0;i=a.cO.f.J/64.0;Bz(c);q=4.0+h;l=4.0+i;G(c,(-1.0),(-1.0),(-0.5),q,l);r=0.0+h;G(c,1.0,(-1.0),(-0.5),r,l);l=0.0+i;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Bt(c);BE();BW(1.0,1.0,1.0,1.0);Bc(3042);Ba(3008);return;case 8:ADV(d,b);if(C()){break _;}BW(0.10000000149011612,0.10000000149011612,0.10000000149011612,0.5);B1();i=e%16|0;j=i/256.0-0.0078125;i=(i+15.989999771118164)/256.0+0.0078125;k=e/16|0;s=k/256.0-0.0078125;h=(k+15.989999771118164)
/256.0+0.0078125;Bz(c);q=i;l=h;G(c,(-1.0),(-1.0),(-0.5),q,l);r=j;G(c,1.0,(-1.0),(-0.5),r,l);l=s;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Bt(c);BE();BW(1.0,1.0,1.0,1.0);d=a.cO.f;c=Bf3;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AJn(a){var b,c,d,e;a.rc=a.jd;if(a.jS){a.iD=a.iD+1|0;if(a.iD==8){a.iD=0;a.jS=0;}}b=D9(a.cO.f.K);c=0.4000000059604645;d=(b!==a.eT?0.0:1.0)-a.jd;e=(-0.4000000059604645);if(d>=e)e=d;if(e<=c)c=e;a.jd=a.jd+c;if(a.jd<0.10000000149011612)a.eT=b;}
function AG0(a){a.jd=0.0;}
function Pu(a){a.iD=(-1);a.jS=1;}
function ANj(a){a.jd=0.0;}
function P(){var a=this;D.call(a);a.W=0;a.b=0;a.qg=0.0;a.nV=0.0;a.c_=0.0;a.cL=0.0;a.c$=0.0;a.db=0.0;a.cE=0.0;a.dc=0.0;a.gP=null;a.EO=0.0;a.b$=null;}
var BgD=null;var BgE=null;var BgF=null;var BgG=null;var BgH=null;var BgI=null;var BgJ=null;var BgK=null;var BgL=null;var Be2=null;var BgM=null;var BgN=null;var BgO=null;var BgP=null;var BgQ=null;var Be8=null;var Be4=null;var Be5=null;var Bfa=null;var Bfc=null;var Bfi=null;var Be3=null;var Bf_=null;var BgR=null;var Bga=null;var BgS=null;var Bfn=null;var Bfo=null;var Bft=null;var Bfs=null;var Bfr=null;var Bfd=null;var Bfe=null;var Bfp=null;var Bfg=null;var BgT=null;var BgU=null;var BgV=null;var BgW=null;var BgX
=null;var BgY=null;var BgZ=null;var Bg0=null;var Bg1=null;var Bg2=null;var Bg3=null;var Bg4=null;var Bg5=null;var Bg6=null;var Bfq=null;var Bg7=null;var Bfj=null;var Bfk=null;var Bfl=null;var Bfm=null;var Bfv=null;var Bfu=null;var Be6=null;var Be7=null;var Bfb=null;var Bfx=null;var Bfw=null;var Bfh=null;var Bfy=null;var Bff=null;var BgC=null;var Bg8=null;var Bg9=null;var Bg$=null;var Bg_=null;var Bha=null;var Bhb=null;var Bhc=null;var Bhd=null;var Bhe=null;var Bhf=null;var Bhg=null;var Bhh=null;var Bhi=null;var Bgo
=null;var Bhj=null;var Bhk=null;function L(){L=Br(P);AVx();}
function Bhl(a,b){var c=new P();D0(c,a,b);return c;}
function KM(a,b,c){var d=new P();C9(d,a,b,c);return d;}
function D0(a,b,c){var d,e,f;L();a.gP=BgD;a.EO=1.0;if(Be2.data[b]!==null){c=new Ca;d=new T;V(d);Bj(c,U(FL(H(FL(H(Be(H(d,B(232)),b),B(233)),Be2.data[b]),B(234)),a)));M(c);}a.b$=c;Be2.data[b]=a;a.b=b;Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);BgN.data[b]=a.d2();e=BgO;f=!a.d2()?0:255;e.data[b]=f;BgP.data[b]=0;}
function C9(a,b,c,d){L();D0(a,b,d);a.W=c;}
function BO(a,b){a.gP=b;return a;}
function Gv(a,b){BgO.data[a.b]=b;return a;}
function GK(a,b){BgQ.data[a.b]=15.0*b|0;return a;}
function Do(a,b){a.nV=b*3.0;return a;}
function A9f(a){return 1;}
function AWV(a){return 0;}
function BI(a,b){var c;a.qg=b;c=a.nV;b=b*5.0;if(c<b)a.nV=b;return a;}
function Ff(a,b){BgM.data[a.b]=b;}
function Bn(a,b,c,d,e,f,g){a.c_=b;a.cL=c;a.c$=d;a.db=e;a.cE=f;a.dc=g;}
function AFp(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sT(c,d,e);if(C()){break _;}f=$z;return f;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AGK(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!f&&a.cL>0.0)c=1;else if(f==1&&a.cE<1.0)c=1;else if(f==2&&a.c$>0.0)c=1;else if(f==3&&a.dc<1.0)c=1;else if(f==4&&a.c_>0.0)c=1;else{if(f!=5)break a;if(a.db>=1.0)break a;c=1;}return c;}$p=1;case 1:$z=b.lg(c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AB_(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}c=$z;return a.eY(f,c);default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A7v(a,b,c){return a.ck(b);}
function AVV(a,b){return a.W;}
function Lo(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.c_;h=d;i=h+a.cL;j=e;return Eb(g,i,j+a.c$,f+a.db,h+a.cE,j+a.dc);}
function ALL(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.hv(b,c,d,e);if(C()){break _;}h=$z;if(h!==null&&Mo(f,h))S(g,h);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function NC(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.c_;h=d;i=h+a.cL;j=e;return Eb(g,i,j+a.c$,f+a.db,h+a.cE,j+a.dc);}
function A5z(a){return 1;}
function A6I(a,b,c){return a.pi();}
function A33(a){return 1;}
function AH6(a,b,c,d,e,f){return;}
function APq(a,b,c,d,e,f){return;}
function AAj(a,b,c,d,e,f){return;}
function YZ(a,b,c,d,e,f){return;}
function A4b(a){return 10;}
function ABi(a,b,c,d,e){return;}
function AAe(a,b,c,d,e){return;}
function AYG(a,b){return 1;}
function AT7(a,b,c){return a.b;}
function ABq(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qg<0.0)c=0.0;else{if(Nn(b,a)){$p=1;continue _;}c=1.0/a.qg/100.0;}return c;case 1:$z=AK6(b,a);if(C()){break _;}c=$z;return c/a.qg/30.0;default:E_();}}C3().s(a,b,c,$p);}
function Yr(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=1.0;$p=1;case 1:a.H5(b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AFc(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.eH(b.r);i=0;j=0.15000000596046448;k=c;l=d;m=e;while(i<h){if(N(b.r)<=g){n=a.dT(f,b.r);if(n>0){o=Hd(b,k+N(b.r)*0.699999988079071+j,l+N(b.r)*0.699999988079071+j,m+N(b.r)*0.699999988079071+j,KN(n,1));o.hb=10;$p=1;continue _;}}i=i+1|0;}return;case 1:AOt(b,
o);if(C()){break _;}while(true){i=i+1|0;if(i>=h)break;if(N(b.r)>g)continue;n=a.dT(f,b.r);if(n<=0)continue;else{o=Hd(b,k+N(b.r)*0.699999988079071+j,l+N(b.r)*0.699999988079071+j,m+N(b.r)*0.699999988079071+j,KN(n,1));o.hb=10;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function A0h(a,b){return a.nV/5.0;}
function Kl(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;h= -c;i= -d;j= -e;b=Dl(f,h,i,j);f=Dl(g,h,i,j);k=K3(b,f,a.c_);l=K3(b,f,a.db);m=J2(b,f,a.cL);n=J2(b,f,a.cE);o=KJ(b,f,a.c$);p=KJ(b,f,a.dc);if(!RF(a,k))k=null;if(!RF(a,l))l=null;if(!XB(a,m))m=null;if(!XB(a,n))n=null;if(!RX(a,o))o=null;if(!RX(a,p))p=null;q=null;if(k!==null)q=k;if(l!==null&&!(q!==null&&DI(b,l)>=DI(b,q)))q=l;if(m!==null&&!(q!==null&&DI(b,m)>=DI(b,q)))q=m;if(n!==null&&!(q!==null&&DI(b,n)>=DI(b,q)))q=n;if(o!==null&&!(q!==null&&DI(b,o)>=DI(b,q)))q=
o;if(p!==null&&!(q!==null&&DI(b,p)>=DI(b,q)))q=p;if(q===null)return null;r=(-1);if(q===k)r=4;if(q===l)r=5;if(q===m)r=0;if(q===n)r=1;if(q===o)r=2;if(q===p)r=3;return A0T(c,d,e,r,Dl(q,c,d,e));}
function RF(a,b){return b===null?0:b.z>=a.cL&&b.z<=a.cE&&b.w>=a.c$&&b.w<=a.dc?1:0;}
function XB(a,b){return b===null?0:b.x>=a.c_&&b.x<=a.db&&b.w>=a.c$&&b.w<=a.dc?1:0;}
function RX(a,b){return b===null?0:b.x>=a.c_&&b.x<=a.db&&b.z>=a.cL&&b.z<=a.cE?1:0;}
function ARd(a,b,c,d,e){return;}
function AVB(a){return 0;}
function AET(a,b,c,d,e){return 1;}
function AGY(a,b,c,d,e,f){return 0;}
function AJY(a,b,c,d,e,f){return;}
function YR(a,b,c,d,e,f){return;}
function AAq(a,b,c,d,e,f){return;}
function AGl(a,b,c,d,e,f,g){return;}
function AP$(a,b,c,d,e){return;}
function A9z(a,b,c,d,e){return 16777215;}
function AVx(){var b,c;BgD=Ih(B(235),1.0,1.0);BgE=Ih(B(236),1.0,1.0);BgF=Ih(B(237),1.0,1.0);BgG=Ih(B(238),1.0,1.0);BgH=Ih(B(235),1.0,1.0);BgI=Ih(B(235),1.0,1.5);BgJ=Bae(B(235),1.0,1.0);BgK=Ih(B(239),1.0,1.0);BgL=Bcn(B(240),1.0,1.0);Be2=J(P,256);BgM=$rt_createBooleanArray(256);BgN=$rt_createBooleanArray(256);BgO=$rt_createIntArray(256);BgP=$rt_createBooleanArray(256);BgQ=$rt_createIntArray(256);Be8=BO(Do(BI(Bbt(1,1),1.5),10.0),BgH);Be4=BO(BI(BbV(2),0.6000000238418579),BgG);Be5=BO(BI(Baj(3,2),0.5),BgF);Bfa=BO(Do(BI(KM(4,
16,Bhm),2.0),10.0),BgH);Bfc=BO(Do(BI(KM(5,4,Bhn),2.0),5.0),BgE);Bfi=BO(BI(BcH(6,15),0.0),BgG);Be3=BO(Do(BI(KM(7,17,Bhm),(-1.0)),6000000.0),BgH);Bf_=Gv(BI(AUA(8,Bf3),100.0),3);BgR=Gv(BI(AXY(9,Bf3),100.0),3);Bga=Gv(GK(BI(AUA(10,Bf4),0.0),1.0),255);BgS=Gv(GK(BI(AXY(11,Bf4),100.0),1.0),255);Bfn=BO(BI(BbQ(12,18),0.5),BgL);Bfo=BO(BI(BbZ(13,19),0.6000000238418579),BgF);Bft=BO(Do(BI(ST(14,32),3.0),5.0),BgH);Bfs=BO(Do(BI(ST(15,33),3.0),5.0),BgH);Bfr=BO(Do(BI(ST(16,34),3.0),5.0),BgH);Bfd=BO(BI(Bc1(17),2.0),BgE);Bfe=BO(Gv(BI(BaW(18,
52),0.20000000298023224),1),BgG);Bfp=BO(BI(Bbm(19),0.6000000238418579),BgG);Bfg=BO(BI(Bbi(20,49,Bho,0),0.30000001192092896),BgJ);BgT=null;BgU=null;BgV=null;BgW=null;BgX=null;BgY=null;BgZ=null;Bg0=null;Bg1=null;Bg2=null;Bg3=null;Bg4=null;Bg5=null;Bg6=null;Bfq=BO(BI(KM(35,64,Bhp),0.800000011920929),BgK);Bg7=null;Bfj=BO(BI(A3A(37,13),0.0),BgG);Bfk=BO(BI(A3A(38,12),0.0),BgG);Bfl=GK(BO(BI(AT5(39,29),0.0),BgG),0.125);Bfm=BO(BI(AT5(40,28),0.0),BgG);Bfv=BO(Do(BI(AEP(41,39),3.0),10.0),BgI);Bfu=BO(Do(BI(AEP(42,38),5.0),
10.0),BgI);Be6=BO(Do(BI(A9C(43,1),2.0),10.0),BgH);Be7=BO(Do(BI(A9C(44,0),2.0),10.0),BgH);Bfb=BO(Do(BI(KM(45,7,Bhm),2.0),10.0),BgH);Bfx=BO(BI(BaX(46,8),0.0),BgG);Bfw=BO(BI(Bay(47,35),1.5),BgE);Bfh=BO(Do(BI(KM(48,36,Bhm),2.0),10.0),BgH);Bfy=BO(Do(BI(BbD(49,37),10.0),20.0),BgH);Bff=BO(GK(BI(Bbp(50,80),0.0),0.9375),BgE);BgC=BO(GK(BI(Bc7(51,31),0.0),1.0),BgE);Bg8=BO(BI(BcX(52,65),5.0),BgI);Bg9=A$2(53,Bfc);Bg$=BO(BI(Bal(54),2.5),BgE);Bg_=BO(BI(Bb1(55,62),0.5),BgI);Bha=BO(Do(BI(ST(56,50),3.0),5.0),BgH);Bhb=BO(Do(BI(AEP(57,
40),5.0),10.0),BgI);Bhc=BO(BI(BbG(58),2.5),BgE);Bhd=BO(BI(BcK(59,88),0.0),BgG);Bhe=BO(BI(Bcb(60),0.6000000238418579),BgF);Bhf=BO(BI(A42(61,0),3.5),BgH);Bhg=GK(BO(BI(A42(62,1),3.5),BgH),0.875);b=new VB;BB();AHJ(b,63,F(Jj),Bhq.cW);Bhh=BO(BI(b,1.0),BgE);Bhi=BO(BI(Bas(64),3.0),BgE);Bgo=BO(BI(Bcz(65,83),0.4000000059604645),BgE);Bhj=BO(BI(Bbc(66,128),1.0),BgI);Bhk=A$2(67,Bfa);c=0;while(c<256){if(Be2.data[c]!==null)Bhr.data[c]=Bak(c-256|0);c=c+1|0;}}
function RL(){}
function AJt(){var a=this;Gd.call(a);a.d7=null;a.p=0;}
function Ch(){var a=new AJt();AWo(a);return a;}
function AWo(a){a.d7=J(D,10);}
function TC(a,b){var c;if(a.d7.data.length<b){c=a.d7.data.length>=1073741823?2147483647:DD(b,DD(a.d7.data.length*2|0,5));a.d7=NH(a.d7,c);}}
function Z(a,b){Lq(a,b);return a.d7.data[b];}
function Df(a){return a.p;}
function Rk(a,b,c){var d;Lq(a,b);d=a.d7.data[b];a.d7.data[b]=c;return d;}
function S(a,b){var c,d;TC(a,a.p+1|0);c=a.d7.data;d=a.p;a.p=d+1|0;c[d]=b;a.d4=a.d4+1|0;return 1;}
function AMW(a,b,c){var d;if(b>=0&&b<=a.p){TC(a,a.p+1|0);d=a.p;while(d>b){a.d7.data[d]=a.d7.data[d-1|0];d=d+(-1)|0;}a.d7.data[b]=c;a.p=a.p+1|0;a.d4=a.d4+1|0;return;}c=new BQ;O(c);M(c);}
function Em(a,b){var c,d,e,f;Lq(a,b);c=a.d7.data[b];a.p=a.p-1|0;while(b<a.p){d=a.d7.data;e=a.d7.data;f=b+1|0;d[b]=e[f];b=f;}a.d7.data[a.p]=null;a.d4=a.d4+1|0;return c;}
function H8(a,b){var c;c=ABm(a,b);if(c<0)return 0;Em(a,c);return 1;}
function DH(a){ZR(a.d7,0,a.p,null);a.p=0;}
function Lq(a,b){var c;if(b>=0&&b<a.p)return;c=new BQ;O(c);M(c);}
function DG(){}
function TR(){D.call(this);this.A5=null;}
function AQR(a){CM(a.A5,SZ(0,1,null,null));}
function AWE(a){AQR(a);}
function TQ(){var a=this;D.call(a);a.EI=null;a.E3=null;}
function AQO(a){CM(a.EI,SZ(0,0,null,a.E3.result));}
function ATk(a){AQO(a);}
function TP(){D.call(this);this.DP=null;}
function ASv(a){CM(a.DP,SZ(1,0,B(241),null));}
function AZD(a){ASv(a);}
function TO(){D.call(this);this.BH=null;}
function AKm(a,b){var c,d,e,f,g,h,i;c=a.BH.result;d=A$b();e=J(B4,1).data;e[0]=B(242);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function ANW(a,b){AKm(a,b);}
function A6Y(a,b){ANW(a,b);}
function SI(){D.call(this);}
var Bgi=null;function Bhs(){var a=new SI();Z0(a);return a;}
function Z0(a){return;}
function AFF(){Bgi=De();BT(Bgi,B(24),A1Y());}
function Ca(){B8.call(this);}
function Bht(){var a=new Ca();AUp(a);return a;}
function AUp(a){O(a);}
function Vo(){Ca.call(this);this.IH=null;}
function EE(){B8.call(this);}
function Bdd(){var a=new EE();AU1(a);return a;}
function AU1(a){O(a);}
function ABj(){D.call(this);}
function Bhu(){var a=new ABj();AZk(a);return a;}
function AZk(a){return;}
function Fk(){var a=this;D.call(a);a.mI=0;a.bh=0;a.cy=0;a.lv=0;}
function Bhv(a){var b=new Fk();K7(b,a);return b;}
function K7(a,b){a.lv=(-1);a.mI=b;a.cy=b;}
function AVR(a){return a.mI;}
function A8G(a){return a.bh;}
function EO(a,b){var c,d;if(b>=0&&b<=a.cy){a.bh=b;if(b<a.lv)a.lv=0;return a;}c=new Ca;d=new T;V(d);Bj(c,U(H(Be(H(Be(H(d,B(243)),b),B(244)),a.cy),B(245))));M(c);}
function A1m(a){return a.cy;}
function NE(a,b){var c,d;if(b>=0&&b<=a.mI){if(a.lv>b)a.lv=(-1);a.cy=b;if(a.bh>a.cy)a.bh=a.cy;return a;}c=new Ca;d=new T;V(d);Bj(c,U(H(Be(H(Be(H(d,B(246)),b),B(244)),a.mI),B(245))));M(c);}
function EA(a){a.bh=0;a.cy=a.mI;a.lv=(-1);return a;}
function Gu(a){a.cy=a.bh;a.bh=0;a.lv=(-1);return a;}
function Ct(a){return a.cy-a.bh|0;}
function Fl(a){return a.bh>=a.cy?0:1;}
function Mp(){Fk.call(this);}
function ADE(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BQ;i=new T;V(i);Bj(h,U(Be(H(Be(H(i,B(247)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gs;O(h);M(h);}if(d<0){h=new BQ;i=new T;V(i);Bj(h,U(H(Be(H(i,B(249)),d),B(250))));M(h);}g=a.bh;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=RP(a,g);j=j+1|0;c=k;g=f;}a.bh=a.bh+d|0;return a;}}b=b.data;i=new BQ;h=new T;V(h);Bj(i,U(H(Be(H(Be(H(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function VS(a,b){return ADE(a,b,0,b.data.length);}
function L_(a){EA(a);return a;}
function TV(a){Gu(a);return a;}
function Qk(a,b){NE(a,b);return a;}
function AFi(){var a=this;D.call(a);a.F=null;a.cz=0;a.fs=0;a.dN=0;}
function A8z(a){var b=new AFi();ATV(b,a);return b;}
function Ku(){var a=new AFi();ATs(a);return a;}
function ATV(a,b){a.cz=(-1);a.fs=0;a.dN=0;a.F=b;}
function ATs(a){a.cz=(-1);a.fs=0;a.dN=0;}
function AMK(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cz=f;$p=1;case 1:AOb(a,b,c,d,e);if(C()){break _;}a.cz=(-1);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AOb(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b.em();g=a.F;$p=1;case 1:b.x1(g,c,d,e);if(C()){break _;}if(!f){$p=2;continue _;}if(f==4){$p=3;continue _;}if(f==1){$p=4;continue _;}if(f==6){$p=5;continue _;}if(f==2){$p=6;continue _;}if(f==3){$p=7;continue _;}if(f==5){$p=8;continue _;}if(f==8){$p=9;continue _;}if(f==7){$p=10;continue _;}if(f==9){$p=11;continue _;}if(f==10){$p=12;continue _;}if
(f!=11)return 0;$p=13;continue _;case 2:$z=AB6(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 3:$z=ACe(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 4:$z=ABk(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 5:$z=ALX(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 6:$z=AOd(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 7:$z=Z5(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 8:$z=ADH(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 9:$z=AJM(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 10:$z=AKR(a,b,c,d,e);if(C())
{break _;}c=$z;return c;case 11:$z=ANk(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 12:$z=AIK(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 13:$z=AFX(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AOd(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.F;$p=1;case 1:$z=f.eI(c,d,e);if(C()){break _;}g=$z;BA();f=BeY;h=a.F;$p=2;case 2:$z=b.CP(h,c,d,e);if(C()){break _;}i=$z;if(BgQ.data[b.b]>0)i=1.0;Cr(f,i,i,i);if(g==1)GH(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if(g==2)GH(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,
0.0);else if(g==3)GH(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(g!=4)GH(a,b,c,d,e,0.0,0.0);else GH(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Z5(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:BA();f=BeY;g=b.ck(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.CP(h,c,d,e);if(C()){break _;}i=$z;Cr(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=i+15.989999771118164;p=o/256.0;q=1.399999976158142;b=a.F;g=d-1|0;$p=2;case 2:$z=b.lg(c,g,e);if(C()){break _;}j=$z;if(j){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,
m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,
t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}b=BgC;h=a.F;$p=3;case 3:$z=AGf(b,h,c,g,e);if(C()){break _;}g=$z;if(g){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,
x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}bi=0.20000000298023224;bj=0.0625;if((((c+d|0)+e|0)&1)!=1){ba=l;bb=m;x=n;z=p;}else{x=(k+16|0)/256.0;z=(o
+16.0)/256.0;ba=l;bb=m;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){r=ba;ba=bb;bb=r;}b=BgC;h=a.F;g=c-1|0;$p=4;case 4:$z=AGf(b,h,g,d,e);if(C()){break _;}g=$z;if(g){w=c+bi;s=d+q+bj;t=e+1|0;G(f,w,s,t,ba,x);u=c+0|0;v=(d+0|0)+bj;G(f,u,v,t,ba,z);r=e+0|0;G(f,u,v,r,bb,z);G(f,w,s,r,bb,x);G(f,w,s,r,bb,x);G(f,u,v,r,bb,z);G(f,u,v,t,ba,z);G(f,w,s,t,ba,x);}b=BgC;h=a.F;j=c+1|0;$p=5;case 5:$z=AGf(b,h,j,d,e);if(C()){break _;}g=$z;if(g){r=j-bi;w=d+q+bj;s=e+0|0;G(f,r,w,s,bb,x);t=j-0|0;u=(d+0|0)+bj;G(f,t,u,s,bb,z);v=e+1|0;G(f,t,
u,v,ba,z);G(f,r,w,v,ba,x);G(f,r,w,v,ba,x);G(f,t,u,v,ba,z);G(f,t,u,s,bb,z);G(f,r,w,s,bb,x);}b=BgC;h=a.F;g=e-1|0;$p=6;case 6:$z=AGf(b,h,c,d,g);if(C()){break _;}g=$z;if(g){r=c+0|0;w=d+q+bj;s=e+bi;G(f,r,w,s,ba,x);t=(d+0|0)+bj;u=e+0|0;G(f,r,t,u,ba,z);v=j;G(f,v,t,u,bb,z);G(f,v,w,s,bb,x);G(f,v,w,s,bb,x);G(f,v,t,u,bb,z);G(f,r,t,u,ba,z);G(f,r,w,s,ba,x);}b=BgC;h=a.F;bk=e+1|0;$p=7;case 7:$z=AGf(b,h,c,d,bk);if(C()){break _;}g=$z;if(g){t=j;u=d+q+bj;v=bk-bi;G(f,t,u,v,bb,x);r=(d+0|0)+bj;w=bk-0|0;G(f,t,r,w,bb,z);s=c+0|0;G(f,
s,r,w,ba,z);G(f,s,u,v,ba,x);G(f,s,u,v,ba,x);G(f,s,r,w,ba,z);G(f,t,r,w,bb,z);G(f,t,u,v,bb,x);}b=BgC;h=a.F;d=d+1|0;$p=8;case 8:$z=AGf(b,h,c,d,e);if(C()){break _;}g=$z;if(g){r=c+0.5;t=r+0.5;u=r-0.5;r=e+0.5;w=r+0.5;r=r-0.5;if(((c+d|0)+e|0)&1){s=c+0|0;t=d+(-0.20000000298023224);G(f,s,t,w,m,n);u=d+0|0;G(f,s,u,r,m,p);v=j;G(f,v,u,r,l,p);G(f,v,t,w,l,n);x=(k+16|0)/256.0;z=(o+16.0)/256.0;G(f,v,t,r,m,x);G(f,v,u,w,m,z);G(f,s,u,w,l,z);G(f,s,t,r,l,x);}else{v=d+(-0.20000000298023224);x=e+0|0;G(f,u,v,x,m,n);z=d+0|0;G(f,t,z,
x,m,p);r=bk;G(f,t,z,r,l,p);G(f,u,v,r,l,n);w=(k+16|0)/256.0;s=(o+16.0)/256.0;G(f,t,v,r,m,w);G(f,u,z,r,m,s);G(f,u,z,x,l,s);G(f,t,v,x,l,w);}}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function ADH(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeY;g=b.ck(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.CP(h,c,d,e);if(C()){break _;}i=$z;Cr(f,i,i,i);j=(g&15)<<4;k=j+16|0;l=g&240;if((((c+d|0)+e|0)&
1)!=1){g=j;j=k;k=g;}i=j;m=i/256.0;n=(i+15.989999771118164)/256.0;i=l;o=i/256.0;p=(i+15.989999771118164)/256.0;q=k;r=q/256.0;s=(q+15.989999771118164)/256.0;t=0.125;q=0.05000000074505806;b=a.F;k=c-1|0;$p=2;case 2:$z=b.lg(k,d,e);if(C()){break _;}k=$z;if(k){u=c+q;v=(d+1|0)+t;w=(e+1|0)+t;G(f,u,v,w,m,o);x=(d+0|0)-t;G(f,u,x,w,m,p);w=(e+0|0)-t;G(f,u,x,w,n,p);G(f,u,v,w,n,o);}b=a.F;l=c+1|0;$p=3;case 3:$z=b.lg(l,d,e);if(C()){break _;}k=$z;if(k){u=l-q;x=(d+0|0)-t;w=(e+1|0)+t;G(f,u,x,w,n,p);v=(d+1|0)+t;G(f,u,v,w,n,o);w=
(e+0|0)-t;G(f,u,v,w,m,o);G(f,u,x,w,m,p);}b=a.F;k=e-1|0;$p=4;case 4:$z=b.lg(c,d,k);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+0|0)-t;x=e+q;G(f,u,m,x,s,p);w=(d+1|0)+t;G(f,u,w,x,s,o);u=(c+0|0)-t;G(f,u,w,x,r,o);G(f,u,m,x,r,p);}b=a.F;e=e+1|0;$p=5;case 5:$z=b.lg(c,d,e);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+1|0)+t;x=e-q;G(f,u,m,x,r,o);w=(d+0|0)-t;G(f,u,w,x,r,p);u=(c+0|0)-t;G(f,u,w,x,s,p);G(f,u,m,x,s,o);}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function ANk(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=
$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeY;g=a.F;$p=1;case 1:$z=g.eI(c,d,e);if(C()){break _;}h=$z;i=b.eY(0,h);if(a.cz>=0)i=a.cz;g=a.F;$p=2;case 2:$z=b.CP(g,c,d,e);if(C()){break _;}j=$z;Cr(f,j,j,j);k=(i&15)<<4;l=i&240;m=k;n=m/256.0;o=(m+15.989999771118164)/256.0;m=l;p=m/256.0;q=(m+15.989999771118164)/256.0;r=c+1|0;s=c+0|0;t=e+0|0;u=e+1|0;v=d+0.0625;if(h!=1&&h!=2&&h!=3&&h!=7){if(h==8){w=s;x=r;y=r;z=u;m=t;j=t;ba=s;r=x;s=y;bb=u;t=m;u=j;}else if(h!=9){w=r;j=s;z=t;m=u;ba=r;r=j;bb=t;t=m;}else{w=r;ba
=s;j=r;z=u;bb=t;m=t;r=s;s=j;t=u;u=m;}}else{w=s;ba=r;z=t;bb=u;}if(h!=2&&h!=4){if(h!=3&&h!=5){x=v;j=v;y=v;m=v;v=j;}else{j=v+1.0;x=j;y=v;m=v;v=j;}}else{m=v+1.0;x=v;y=m;}bc=ba;bd=y;be=bb;G(f,bc,bd,be,o,p);bf=w;bg=x;bh=u;G(f,bf,bg,bh,o,q);bi=s;bj=v;bk=t;G(f,bi,bj,bk,n,q);bl=r;bm=m;bn=z;G(f,bl,bm,bn,n,p);G(f,bl,bm,bn,n,p);G(f,bi,bj,bk,n,q);G(f,bf,bg,bh,o,q);G(f,bc,bd,be,o,p);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p);}
function AJM(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeY;g=b.ck(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.CP(h,c,d,e);if(C()){break _;}i=$z;Cr(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=(i+15.989999771118164)
/256.0;b=a.F;$p=2;case 2:$z=b.eI(c,d,e);if(C()){break _;}p=$z;if(p==5){q=c+0.05000000074505806;r=(d+1|0)+0.0;s=(e+1|0)+0.0;G(f,q,r,s,l,n);t=(d+0|0)-0.0;G(f,q,t,s,l,o);s=(e+0|0)-0.0;G(f,q,t,s,m,o);G(f,q,r,s,m,n);}if(p==4){t=(c+1|0)-0.05000000074505806;q=(d+0|0)-0.0;s=(e+1|0)+0.0;G(f,t,q,s,m,o);r=(d+1|0)+0.0;G(f,t,r,s,m,n);s=(e+0|0)-0.0;G(f,t,r,s,l,n);G(f,t,q,s,l,o);}if(p==3){q=(c+1|0)+0.0;r=(d+0|0)-0.0;s=e+0.05000000074505806;G(f,q,r,s,m,o);t=(d+1|0)+0.0;G(f,q,t,s,m,n);q=(c+0|0)-0.0;G(f,q,t,s,l,n);G(f,q,r,s,
l,o);}if(p==2){r=(c+1|0)+0.0;s=(d+1|0)+0.0;t=(e+1|0)-0.05000000074505806;G(f,r,s,t,l,n);q=(d+0|0)-0.0;G(f,r,q,t,l,o);r=(c+0|0)-0.0;G(f,r,q,t,m,o);G(f,r,s,t,m,n);}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function ABk(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeY;g=a.F;$p=1;case 1:$z=b.CP(g,c,d,e);if(C()){break _;}h=$z;Cr(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eI(c,d,e);if(C()){break _;}i=$z;Uv(a,b,i,c,d,e);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALX(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeY;g=a.F;$p=1;case 1:$z=b.CP(g,c,d,e);if(C()){break _;}h=$z;Cr(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eI(c,d,e);if(C()){break _;}i=$z;OY(a,b,i,c,d-0.0625,e);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function GH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;BA();h=BeY;i=b.ck(0);if(a.cz>=0)i=a.cz;j=(i&15)<<4;k=i&240;l=j;m=l/256.0;l=(l+15.989999771118164)/256.0;n=k;o=n/256.0;n=(n+15.989999771118164)/256.0;p=m;q=p+0.02734375;r=o;s=r+0.0234375;t=p+0.03515625;u=r+0.03125;c=c+0.5;e=e+0.5;v=c-0.5;w=c+0.5;x=e-0.5;y=e+0.5;z=c+f*0.375;ba=z-0.0625;bb=d+0.625;bc=e+g*0.375;bd=bc-0.0625;G(h,ba,bb,bd,q,s);bc=bc+0.0625;G(h,ba,bb,bc,q,u);q=z+0.0625;G(h,q,bb,bc,t,u);G(h,q,bb,bd,t,s);u=c-0.0625;bc=d
+1.0;G(h,u,bc,x,p,r);q=u+f;d=d+0.0;t=x+g;bd=n;G(h,q,d,t,p,bd);s=y+g;z=l;G(h,q,d,s,z,bd);G(h,u,bc,y,z,r);u=c+0.0625;G(h,u,bc,y,p,r);c=c+f+0.0625;G(h,c,d,s,p,bd);G(h,c,d,t,z,bd);G(h,u,bc,x,z,r);c=e+0.0625;G(h,v,bc,c,p,r);u=v+f;q=c+g;G(h,u,d,q,p,bd);f=w+f;G(h,f,d,q,z,bd);G(h,w,bc,c,z,r);c=e-0.0625;G(h,w,bc,c,p,r);e=c+g;G(h,f,d,e,p,bd);G(h,u,d,e,z,bd);G(h,v,bc,c,z,r);}
function Uv(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;BA();g=BeY;h=b.eY(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.44999998807907104;q=d+0.44999998807907104;d=f+0.5;r=d-0.44999998807907104;s=d+0.44999998807907104;d=e+1.0;G(g,p,d,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,q,e,s,m,o);G(g,q,d,s,m,n);G(g,q,d,s,l,n);G(g,q,e,s,l,o);G(g,p,e,r,m,o);G(g,p,d,r,m,n);G(g,p,d,s,l,n);G(g,p,e,s,l,o);G(g,q,e,r,m,o);G(g,q,d,r,m,n);G(g,
q,d,r,l,n);G(g,q,e,r,l,o);G(g,p,e,s,m,o);G(g,p,d,s,m,n);}
function OY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeY;h=b.eY(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.25;q=d+0.25;f=f+0.5;r=f-0.5;s=f+0.5;t=e+1.0;G(g,p,t,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,p,e,s,m,o);G(g,p,t,s,m,n);G(g,p,t,s,l,n);G(g,p,e,s,l,o);G(g,p,e,r,m,o);G(g,p,t,r,m,n);G(g,q,t,s,l,n);G(g,q,e,s,l,o);G(g,q,e,r,m,o);G(g,q,t,r,m,n);G(g,q,t,r,l,n);G(g,q,e,r,l,o);G(g,q,e,s,m,o);G(g,q,t,s,m,n);p
=d-0.5;d=d+0.5;q=f-0.25;f=f+0.25;G(g,p,t,q,l,n);G(g,p,e,q,l,o);G(g,d,e,q,m,o);G(g,d,t,q,m,n);G(g,d,t,q,l,n);G(g,d,e,q,l,o);G(g,p,e,q,m,o);G(g,p,t,q,m,n);G(g,d,t,f,l,n);G(g,d,e,f,l,o);G(g,p,e,f,m,o);G(g,p,t,f,m,n);G(g,p,t,f,l,n);G(g,p,e,f,l,o);G(g,d,e,f,m,o);G(g,d,t,f,m,n);}
function ACe(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w
=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeY;g=a.F;h=d+1|0;i=1;$p=1;case 1:$z=b.pJ(g,c,h,e,i);if(C()){break _;}h=$z;g=a.F;i=d-1|0;j=0;$p=2;case 2:$z=b.pJ(g,c,i,e,j);if(C()){break _;}j=$z;k=$rt_createBooleanArray(4).data;l=0;g=a.F;m=e-1|0;n=2;$p=3;case 3:$z=b.pJ(g,c,d,m,n);if(C()){break _;}n=$z;k[l]=n;n=1;g
=a.F;o=e+1|0;l=3;$p=4;case 4:$z=b.pJ(g,c,d,o,l);if(C()){break _;}l=$z;k[n]=l;n=2;g=a.F;p=c-1|0;l=4;$p=5;case 5:$z=b.pJ(g,p,d,e,l);if(C()){break _;}l=$z;k[n]=l;n=3;g=a.F;q=c+1|0;l=5;$p=6;case 6:$z=b.pJ(g,q,d,e,l);if(C()){break _;}l=$z;k[n]=l;if(!h&&!j&&!k[0]&&!k[1]&&!k[2]&&!k[3])return 0;r=0;s=0.5;t=1.0;u=0.800000011920929;v=0.6000000238418579;w=0.0;x=1.0;y=b.b$;g=a.F;$p=7;case 7:$z=g.eI(c,d,e);if(C()){break _;}z=$z;$p=8;case 8:$z=APM(a,c,d,e,y);if(C()){break _;}ba=$z;$p=9;case 9:$z=APM(a,c,d,o,y);if(C()){break _;}bb
=$z;$p=10;case 10:$z=APM(a,q,d,o,y);if(C()){break _;}bc=$z;$p=11;case 11:$z=APM(a,q,d,e,y);if(C()){break _;}bd=$z;if(!a.dN&&!h){if(!a.dN&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;a:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dN)break a;if(k[i])break a;i=i+1|0;}b.cL=w;b.cE=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn
=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;}r=1;bx=b.eY(1,z);g=a.F;$p=12;case 12:$z=A6v(g,c,d,e,y);if(C()){break _;}by=$z;bm=by;h=R(bm,(-999.0));if(h>0)bx=b.eY(2,z);n=(bx&15)<<4;l=bx&240;by=(n+8.0)/256.0;bz=(l+8.0)/256.0;if(h<0)bm=0.0;else{by=(n+16|0)/256.0;bz=(l+16|0)/256.0;}bn=Bp(bm)*8.0/256.0;bo=BC(bm)*8.0/256.0;g=a.F;$p=14;continue _;case 13:$z
=b.CP(g,c,i,e);if(C()){break _;}bp=$z;bm=s*bp;Cr(f,bm,bm,bm);HF(a,b,c,d,e,b.ck(0));r=1;i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;b:{while(i<4){h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dN)break b;if(k[i])break b;i=i+1|0;}b.cL=w;b.cE=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=
((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;case 14:$z=b.CP(g,c,d,e);if(C()){break _;}bi=$z;bm=t*bi;Cr(f,bm,bm,bm);bA=c+0|0;bm=d;br=bm+ba;bu=e+0|0;bB=bo;bf=by-bB;bw=bn;bC=bf-bw;bs=bz-bB;G(f,bA,br,bu,bC,bs+bw);bC=bm+bb;bv=o;bf=bf+bw;br=bz+bB;G(f,bA,bC,bv,bf,br+bw);bA=q;bf=bm+bc;by=by+bB;G(f,bA,bf,bv,by+bw,br-bw);G(f,bA,bm+bd,bu,by-bw,bs-bw);if(!a.dN&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;c:{while(i<4){h=!i?m:e;n=R(i,
1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dN)break c;if(k[i])break c;i=i+1|0;}b.cL=w;b.cE=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;case 15:$z
=b.CP(g,o,d,h);if(C()){break _;}bt=$z;bt=t*(l>=0?bt*v:bt*u);Cr(f,bt,bt,bt);bC=bo;by=be+bm;bA=s;G(f,bC,by,bA,br,bu);by=bp;bu=be+bn;bB=bq;G(f,by,bu,bB,bs,bv);G(f,by,bf,bB,bs,bw);G(f,bC,bf,bA,br,bw);c:{while(true){i=i+1|0;if(i>=4)break;h=!i?m:e;n=R(i,1);if(!n)h=h+1|0;l=R(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.eY(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dN)break c;if(k[i])break c;}b.cL=w;b.cE=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp
=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p);}
function APM(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=0.0;h=0;i=c+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;case 1:$z=l.oQ(j,i,k);if(C()){break _;}l=$z;if(l===e)return 1.0;l=a.F;$p=2;case 2:$z=l.oQ(j,c,k);if(C()){break _;}l=$z;if(l===e){l=a.F;$p=3;continue _;}if(!l.dt()){g=g+1.0;f=f+1|0;}h=h+1|0;if(h
>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;case 3:$z=l.eI(j,c,k);if(C()){break _;}m=$z;if(!(m<8&&m)){g=g+Jz(m)*10.0;f=f+10|0;}g=g+Jz(m);f=f+1|0;h=h+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AJd(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0.5;h=1.0;i=0.800000011920929;j=0.6000000238418579;BA();k=BeY;Bz(k);$p=1;case 1:$z=b.CP(c,d,e,f);if(C()){break _;}l=$z;m=e-1|0;$p=2;case 2:$z=b.CP(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;n=g*n;Cr(k,n,n,n);HF(a,b,(-0.5),(-0.5),(-0.5),b.ck(0));m=e+1|0;$p=3;case 3:$z
=b.CP(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;h=h*n;Cr(k,h,h,h);JL(a,b,(-0.5),(-0.5),(-0.5),b.ck(1));m=f-1|0;$p=4;case 4:$z=b.CP(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cr(k,h,h,h);J3(a,b,(-0.5),(-0.5),(-0.5),b.ck(2));m=f+1|0;$p=5;case 5:$z=b.CP(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cr(k,h,h,h);Ki(a,b,(-0.5),(-0.5),(-0.5),b.ck(3));m=d-1|0;$p=6;case 6:$z=b.CP(c,m,e,f);if(C()){break _;}h=$z;if(h<l)h=l;h=j*h;Cr(k,h,h,h);JX(a,b,(-0.5),(-0.5),(-0.5),b.ck(4));d=d+1|0;$p=7;case 7:$z=b.CP(c,d,e,
f);if(C()){break _;}h=$z;if(h>=l)l=h;h=j*l;Cr(k,h,h,h);K$(a,b,(-0.5),(-0.5),(-0.5),b.ck(5));Bt(k);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AB6(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;$p=1;case 1:$z=ALH(a,b,c,d,e,f,f,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ALH(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();i=BeY;j=0;k=0.5*f;l=1.0*f;m=0.800000011920929*f;n=0.6000000238418579*f;o=0.5
*g;p=1.0*g;q=0.800000011920929*g;r=0.6000000238418579*g;s=0.5*h;t=1.0*h;u=0.800000011920929*h;v=0.6000000238418579*h;w=a.F;$p=1;case 1:$z=b.CP(w,c,d,e);if(C()){break _;}x=$z;if(a.dN){w=a.F;y=d-1|0;$p=2;continue _;}w=a.F;z=d-1|0;y=0;$p=3;continue _;case 2:$z=b.CP(w,c,y,e);if(C()){break _;}ba=$z;if(BgQ.data[b.b]>0)ba=1.0;Cr(i,k*ba,o*ba,s*ba);bb=c;bc=d;bd=e;w=a.F;y=0;$p=4;continue _;case 3:$z=b.pJ(w,c,z,e,y);if(C()){break _;}y=$z;if(y){w=a.F;y=d-1|0;$p=2;continue _;}if(a.dN){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y
=d+1|0;z=1;$p=6;continue _;case 4:$z=b.ur(w,c,d,e,y);if(C()){break _;}y=$z;HF(a,b,bb,bc,bd,y);j=1;if(a.dN){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y=d+1|0;z=1;$p=6;continue _;case 5:$z=b.CP(w,c,y,e);if(C()){break _;}ba=$z;if(b.cE!==1.0&&!b.b$.nI())ba=x;if(BgQ.data[b.b]>0)ba=1.0;Cr(i,l*ba,p*ba,t*ba);bb=c;bc=d;bd=e;w=a.F;y=1;$p=9;continue _;case 6:$z=b.pJ(w,c,y,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=d+1|0;$p=5;continue _;}if(a.dN){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 7:$z=b.CP(w,
c,d,y);if(C()){break _;}ba=$z;if(b.c$>0.0)ba=x;if(BgQ.data[b.b]>0)ba=1.0;Cr(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=2;$p=12;continue _;case 8:$z=b.pJ(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e-1|0;$p=7;continue _;}if(a.dN){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 9:$z=b.ur(w,c,d,e,y);if(C()){break _;}y=$z;JL(a,b,bb,bc,bd,y);j=1;if(a.dN){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 10:$z=b.CP(w,c,d,y);if(C()){break _;}ba=$z;if(b.dc<1.0)ba=x;if(BgQ.data[b.b]
>0)ba=1.0;Cr(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=3;$p=15;continue _;case 11:$z=b.pJ(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e+1|0;$p=10;continue _;}if(a.dN){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 12:$z=b.ur(w,c,d,e,y);if(C()){break _;}y=$z;J3(a,b,bb,bc,bd,y);j=1;if(a.dN){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 13:$z=b.CP(w,y,d,e);if(C()){break _;}ba=$z;if(b.c_>0.0)ba=x;if(BgQ.data[b.b]>0)ba=1.0;Cr(i,n*ba,r*ba,v*ba);bb=c;bc=d;bd=e;w
=a.F;y=4;$p=18;continue _;case 14:$z=b.pJ(w,y,d,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=c-1|0;$p=13;continue _;}if(a.dN){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 15:$z=b.ur(w,c,d,e,y);if(C()){break _;}y=$z;Ki(a,b,bb,bc,bd,y);j=1;if(a.dN){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 16:$z=b.CP(w,y,d,e);if(C()){break _;}ba=$z;if(b.db>=1.0)x=ba;if(BgQ.data[b.b]>0)x=1.0;Cr(i,n*x,r*x,v*x);bb=c;bc=d;bd=e;i=a.F;y=5;$p=19;continue _;case 17:$z=b.pJ(w,y,d,e,
z);if(C()){break _;}y=$z;if(!y)return j;w=a.F;y=c+1|0;$p=16;continue _;case 18:$z=b.ur(w,c,d,e,y);if(C()){break _;}y=$z;JX(a,b,bb,bc,bd,y);j=1;if(a.dN){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 19:$z=b.ur(i,c,d,e,y);if(C()){break _;}c=$z;K$(a,b,bb,bc,bd,c);j=1;return j;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AFX(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;Bn(b,0.375,0.0,0.375,0.625,1.0,0.625);$p=1;case 1:AB6(a,b,c,d,e);if(C()){break _;}g=0;h=0;i=a.F;j=c-1|0;$p=2;case 2:$z=i.eh(j,d,e);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=c+1|0;$p=3;continue _;}g=1;i=a.F;j=e-1|0;$p=4;continue _;case 3:$z=i.eh(j,d,e);if(C()){break _;}j
=$z;if(j==b.b)g=1;i=a.F;j=e-1|0;$p=4;case 4:$z=i.eh(c,d,j);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=e+1|0;$p=5;continue _;}h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bn(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 5:$z=i.eh(c,d,j);if(C()){break _;}j=$z;if(j==b.b)h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if
(g){Bn(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bn(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 6:AB6(a,b,c,d,e);if(C()){break _;}if(h){Bn(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 7:AB6(a,b,c,d,e);if(C()){break _;}m=0.375;n
=0.5625;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 8:AB6(a,b,c,d,e);if(C()){break _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;case 9:AB6(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AIK(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=a.F;$p=1;case 1:$z=g.eI(c,d,e);if(C()){break _;}h=$z;if(!h){Bn(b,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bn(b,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bn(b,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:AB6(a,
b,c,d,e);if(C()){break _;}Bn(b,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:AB6(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 4:AB6(a,b,c,d,e);if(C()){break _;}Bn(b,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:AB6(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 6:AB6(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:AB6(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 8:AB6(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.5,1.0,0.5,1.0);$p
=9;case 9:AB6(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AKR(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeY;g=b;h=0.5;i=1.0;j=0.800000011920929;k=0.6000000238418579;l=a.F;$p=1;case 1:$z=b.CP(l,c,d,e);if(C()){break _;}m=$z;l=a.F;n=d-1|0;$p=2;case 2:$z=b.CP(l,c,n,e);if(C()){break _;}o=$z;if(g.cL>0.0)o=m;if(BgQ.data[b.b]
>0)o=1.0;h=h*o;Cr(f,h,h,h);p=c;q=d;r=e;l=a.F;n=0;$p=3;case 3:$z=b.ur(l,c,d,e,n);if(C()){break _;}n=$z;HF(a,b,p,q,r,n);l=a.F;n=d+1|0;$p=4;case 4:$z=b.CP(l,c,n,e);if(C()){break _;}h=$z;if(g.cE<1.0)h=m;if(BgQ.data[b.b]>0)h=1.0;i=i*h;Cr(f,i,i,i);l=a.F;n=1;$p=5;case 5:$z=b.ur(l,c,d,e,n);if(C()){break _;}n=$z;JL(a,b,p,q,r,n);l=a.F;n=e-1|0;$p=6;case 6:$z=b.CP(l,c,d,n);if(C()){break _;}i=$z;if(g.c$>0.0)i=m;if(BgQ.data[b.b]>0)i=1.0;i=j*i;Cr(f,i,i,i);l=a.F;n=2;$p=7;case 7:$z=b.ur(l,c,d,e,n);if(C()){break _;}s=$z;if(s
<0){a.fs=1;s= -s;}J3(a,b,p,q,r,s);a.fs=0;l=a.F;n=e+1|0;$p=8;case 8:$z=b.CP(l,c,d,n);if(C()){break _;}i=$z;if(g.dc<1.0)i=m;if(BgQ.data[b.b]>0)i=1.0;i=j*i;Cr(f,i,i,i);l=a.F;n=3;$p=9;case 9:$z=b.ur(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fs=1;s= -s;}Ki(a,b,p,q,r,s);a.fs=0;l=a.F;n=c-1|0;$p=10;case 10:$z=b.CP(l,n,d,e);if(C()){break _;}i=$z;if(g.c_>0.0)i=m;if(BgQ.data[b.b]>0)i=1.0;i=k*i;Cr(f,i,i,i);l=a.F;n=4;$p=11;case 11:$z=b.ur(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fs=1;s= -s;}JX(a,b,p,q,r,s);a.fs=0;l=a.F;n
=c+1|0;$p=12;case 12:$z=b.CP(l,n,d,e);if(C()){break _;}i=$z;if(g.db>=1.0)m=i;if(BgQ.data[b.b]>0)m=1.0;i=k*m;Cr(f,i,i,i);l=a.F;n=5;$p=13;case 13:$z=b.ur(l,c,d,e,n);if(C()){break _;}c=$z;if(c<0){a.fs=1;c= -c;}K$(a,b,p,q,r,c);a.fs=0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function HF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeY;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.db*16.0-0.01)/256.0;j=i;m=(j+b.c$*16.0)/256.0;n=(j+b.dc*16.0-0.01)/256.0;if(!(b.c_>=0.0&&b.db<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c$>=0.0&&b.dc<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.c_;q=c+b.db;r=d+b.cL;s=e+b.c$;t=e+b.dc;G(g,j,r,t,k,n);G(g,j,r,s,k,m);G(g,q,r,s,l,m);G(g,q,r,t,l,n);}
function JL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeY;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.db*16.0-0.01)/256.0;j=i;m=(j+b.c$*16.0)/256.0;n=(j+b.dc*16.0-0.01)/256.0;if(!(b.c_>=0.0&&b.db<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c$>=0.0&&b.dc<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.c_;q=c+b.db;r=d+b.cE;s=e+b.c$;t=e+b.dc;G(g,q,r,t,l,n);G(g,q,r,s,l,m);G(g,j,r,s,k,m);G(g,j,r,t,k,n);}
function J3(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeY;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;j=(j+b.db*16.0-0.01)/256.0;l=i;m=(l+b.cL*16.0)/256.0;n=(l+b.cE*16.0-0.01)/256.0;if(!a.fs){l=j;j=k;k=l;}if(!(b.c_>=0.0&&b.db<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cE<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.c_;q=c+b.db;r=d+b.cL;s=d+b.cE;t=e+b.c$;G(g,l,s,t,k,m);G(g,q,s,t,j,m);G(g,q,r,t,j,n);G(g,l,r,t,k,n);}
function Ki(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeY;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;j=(j+b.db*16.0-0.01)/256.0;l=i;m=(l+b.cL*16.0)/256.0;n=(l+b.cE*16.0-0.01)/256.0;if(!a.fs){l=j;j=k;k=l;}if(!(b.c_>=0.0&&b.db<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cE<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.c_;q=c+b.db;r=d+b.cL;s=d+b.cE;t=e+b.dc;G(g,l,s,t,j,m);G(g,l,r,t,j,n);G(g,q,r,t,k,n);G(g,q,s,t,k,m);}
function JX(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeY;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c$*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.cL*16.0)/256.0;n=(j+b.cE*16.0-0.01)/256.0;if(!a.fs){j=l;l=k;k=j;}if(!(b.c$>=0.0&&b.dc<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cE<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.c_;q=d+b.cL;r=d+b.cE;s=e+b.c$;t=e+b.dc;G(g,j,r,t,k,m);G(g,j,r,s,l,m);G(g,j,q,s,l,n);G(g,j,q,t,k,n);}
function K$(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeY;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c$*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.cL*16.0)/256.0;n=(j+b.cE*16.0-0.01)/256.0;if(!a.fs){j=l;l=k;k=j;}if(!(b.c$>=0.0&&b.dc<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cL>=0.0&&b.cE<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.db;q=d+b.cL;r=d+b.cE;s=e+b.c$;t=e+b.dc;G(g,j,q,t,l,n);G(g,j,q,s,k,n);G(g,j,r,s,k,m);G(g,j,r,t,l,m);}
function GX(a,b){var c,d;a:{BA();c=BeY;d=b.em();if(d){if(d==1){Bz(c);Cj(0.0,(-1.0),0.0);Uv(a,b,(-1),(-0.5),(-0.5),(-0.5));Bt(c);}else if(d==6){Bz(c);Cj(0.0,(-1.0),0.0);OY(a,b,(-1),(-0.5),(-0.5),(-0.5));Bt(c);}else{if(d!=2){if(d==3)break a;if(d!=5)break a;else break a;}Bz(c);Cj(0.0,(-1.0),0.0);GH(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Bt(c);}}else{Bu((-0.5),(-0.5),(-0.5));Bz(c);Cj(0.0,(-1.0),0.0);HF(a,b,0.0,0.0,0.0,b.ck(0));Bt(c);Bz(c);Cj(0.0,1.0,0.0);JL(a,b,0.0,0.0,0.0,b.ck(1));Bt(c);Bz(c);Cj(0.0,0.0,(-1.0));J3(a,
b,0.0,0.0,0.0,b.ck(2));Bt(c);Bz(c);Cj(0.0,0.0,1.0);Ki(a,b,0.0,0.0,0.0,b.ck(3));Bt(c);Bz(c);Cj((-1.0),0.0,0.0);JX(a,b,0.0,0.0,0.0,b.ck(4));Bt(c);Bz(c);Cj(1.0,0.0,0.0);K$(a,b,0.0,0.0,0.0,b.ck(5));Bt(c);Bu(0.5,0.5,0.5);}}}
function QS(){var a=this;D.call(a);a.jl=null;a.ho=null;a.f5=0;a.f4=0;a.pH=0.0;a.m7=0.0;a.pG=0.0;a.b2=0.0;a.bY=0.0;a.bV=0.0;a.wD=0;a.lW=0;a.lF=0;a.iV=0;a.Cd=0;}
function BM(a,b){var c=new QS();A9x(c,a,b);return c;}
function A9x(a,b,c){a.wD=0;a.lW=0;a.lF=0;a.iV=1;a.Cd=0;a.f5=b;a.f4=c;}
function BH(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;a.jl=J(ER,8);a.ho=J(Fw,6);i=b+e;j=c+f;k=d+g;l=b-h;m=c-h;n=d-h;d=i+h;j=j+h;h=k+h;if(!a.lF){b=l;l=d;d=b;}a:{o=G3(d,m,n,0.0,0.0);p=G3(l,m,n,0.0,8.0);q=G3(l,j,n,8.0,8.0);r=G3(d,j,n,8.0,0.0);s=G3(d,m,h,0.0,0.0);t=G3(l,m,h,0.0,8.0);u=G3(l,j,h,8.0,8.0);v=G3(d,j,h,8.0,0.0);a.jl.data[0]=o;a.jl.data[1]=p;a.jl.data[2]=q;a.jl.data[3]=r;a.jl.data[4]=s;a.jl.data[5]=t;a.jl.data[6]=u;a.jl.data[7]=v;w=a.ho.data;x=new Fw;y=J(ER,4);z=y.data;z[0]=t;z[1]=p;z[2]
=q;z[3]=u;Hg(x,y,(a.f5+g|0)+e|0,a.f4+g|0,((a.f5+g|0)+e|0)+g|0,(a.f4+g|0)+f|0);w[0]=x;z=a.ho.data;x=new Fw;w=J(ER,4);y=w.data;y[0]=o;y[1]=s;y[2]=v;y[3]=r;Hg(x,w,a.f5+0|0,a.f4+g|0,a.f5+g|0,(a.f4+g|0)+f|0);z[1]=x;z=a.ho.data;x=new Fw;w=J(ER,4);y=w.data;y[0]=t;y[1]=s;y[2]=o;y[3]=p;Hg(x,w,a.f5+g|0,a.f4+0|0,(a.f5+g|0)+e|0,a.f4+g|0);z[2]=x;z=a.ho.data;x=new Fw;w=J(ER,4);y=w.data;y[0]=q;y[1]=r;y[2]=v;y[3]=u;Hg(x,w,(a.f5+g|0)+e|0,a.f4+0|0,((a.f5+g|0)+e|0)+e|0,a.f4+g|0);z[3]=x;w=a.ho.data;x=new Fw;y=J(ER,4);z=y.data;z[0]
=p;z[1]=o;z[2]=r;z[3]=q;Hg(x,y,a.f5+g|0,a.f4+g|0,(a.f5+g|0)+e|0,(a.f4+g|0)+f|0);w[4]=x;z=a.ho.data;r=new Fw;w=J(ER,4);y=w.data;y[0]=s;y[1]=t;y[2]=u;y[3]=v;Hg(r,w,((a.f5+g|0)+e|0)+g|0,a.f4+g|0,(((a.f5+g|0)+e|0)+g|0)+e|0,(a.f4+g|0)+f|0);z[5]=r;if(a.lF){ba=0;while(true){if(ba>=a.ho.data.length)break a;AC8(a.ho.data[ba]);ba=ba+1|0;}}}}
function BL(a,b,c,d){a.pH=b;a.m7=c;a.pG=d;}
function Cc(a,b){var c,d;if(!a.Cd&&a.iV){if(!a.wD){a.lW=IZ(1);FG(a.lW,4864);BA();c=BeY;d=0;while(d<a.ho.data.length){APQ(a.ho.data[d],c,b);d=d+1|0;}Ee();a.wD=1;}if(a.b2===0.0&&a.bY===0.0&&a.bV===0.0){if(a.pH===0.0&&a.m7===0.0&&a.pG===0.0)FR(a.lW);else{Bu(a.pH*b,a.m7*b,a.pG*b);FR(a.lW);Bu( -a.pH*b, -a.m7*b, -a.pG*b);}}else{B1();Bu(a.pH*b,a.m7*b,a.pG*b);if(a.bV!==0.0)Bw(a.bV*57.2957763671875,0.0,0.0,1.0);if(a.bY!==0.0)Bw(a.bY*57.2957763671875,0.0,1.0,0.0);if(a.b2!==0.0)Bw(a.b2*57.2957763671875,1.0,0.0,0.0);FR(a.lW);BE();}}}
function E4(){D.call(this);}
function AON(a,b){Rg(a,b,0,b.data.length);}
function ATx(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.nR(f[c]);e=e+1|0;c=g;}}
function A8_(a){return;}
function A9Y(a){return;}
function Gb(){E4.call(this);this.fo=null;}
function Bhw(a){var b=new Gb();Lr(b,a);return b;}
function Lr(a,b){a.fo=b;}
function K8(a){var $$je;a:{try{a.fo.ly();break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B2){}else{throw $$e;}}}a.fo.tV();}
function ABf(){var a=this;Gb.call(a);a.GY=0;a.uU=0;a.hH=null;a.nX=null;a.Ba=null;}
function AY1(a,b){var c=new ABf();A$P(c,a,b);return c;}
function A$P(a,b,c){Lr(a,b);b=new T;V(b);a.hH=b;a.nX=$rt_createCharArray(32);a.GY=c;a.Ba=A1Y();}
function VZ(a,b,c,d){var $$je;if(a.fo===null)a.uU=1;if(!(a.uU?0:1))return;a:{try{a.fo.gB(b,c,d);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B2){}else{throw $$e;}}a.uU=1;}}
function TU(a,b,c,d){var e,f,g,h,i;e=b.data;f=ANf(b,c,d-c|0);e=$rt_createByteArray(DD(16,CC(e.length,1024)));g=AAE(e);h=AG_(AC4(AHh(a.Ba),Bgj),Bgj);while(true){i=IR(AJr(h,f,g,1));VZ(a,e,0,g.bh);EA(g);if(!i)break;}while(true){i=IR(X9(h,g));VZ(a,e,0,g.bh);EA(g);if(!i)break;}}
function AKT(a,b){a.nX.data[0]=b;TU(a,a.nX,0,1);}
function KC(a,b){H(a.hH,b);Kh(a);}
function ABY(a,b){Dy(Be(a.hH,b),10);Kh(a);}
function B7(a,b){Dy(H(a.hH,b),10);Kh(a);}
function ACu(a,b){Dy(FL(a.hH,b),10);Kh(a);}
function APP(a){AKT(a,10);}
function Kh(a){var b;b=a.hH.bZ<=a.nX.data.length?a.nX:$rt_createCharArray(a.hH.bZ);AAM(a.hH,0,a.hH.bZ,b,0);TU(a,b,0,a.hH.bZ);ANt(a.hH,0);}
function Xm(){E4.call(this);}
function Bhx(){var a=new Xm();A3I(a);return a;}
function A3I(a){return;}
function AYy(a,b){$rt_putStdout(b);}
function AFq(){Ca.call(this);this.FL=null;}
function ALD(a){var b=new AFq();A1k(b,a);return b;}
function A1k(a,b){O(a);a.FL=b;}
function M$(){var a=this;D.call(a);a.ch=null;a.B=0;a.M=0;a.G=Long_ZERO;a.u7=null;a.pQ=0;a.ih=0;a.nw=Long_ZERO;a.b8=null;a.jA=null;a.gb=null;}
function Bhy(){var a=new M$();O0(a);return a;}
function O0(a){a.gb=A97();}
function AAT(a,b,c,d){a.u7=b;a.pQ=c;a.ih=d;}
function AKl(a,b,c,d,e){var f;if(d<=0&&e&&a.ch!==null)return;if(a.M>0&&e){f=$rt_createByteArray(a.M+d|0);Dj(a.ch,a.B,f,0,a.M);Dj(b,c,f,a.M,d);a.ch=f;a.B=0;a.M=a.M+d|0;}else{a.ch=b;a.B=c;a.M=d;}}
function Ur(){M$.call(this);this.rX=0;}
function Bhz(){var a=new Ur();A3o(a);return a;}
function A3o(a){O0(a);a.rX=0;AA6(a);}
function AA6(a){return ACV(a,15);}
function ACV(a,b){return Sb(a,b,0);}
function Sb(a,b,c){var d;a.rX=0;d=new L1;d.rW=Long_fromInt(-1);d.iK=(-1);d.xZ=$rt_createByteArray(4);d.cI=null;d.f1=null;d.E=a;a.jA=d;d=a.jA;if(c)b= -b;return XK(d,b);}
function AGj(a,b){var c;if(a.jA===null)return (-2);c=AGS(a.jA,b);if(c==1)a.rX=1;return c;}
function Ys(a){return a.jA.bQ!=12?0:1;}
function Ip(){var a=this;D.call(a);a.CG=null;a.oT=0.0;a.pP=0.0;}
function Ih(a,b,c){var d=new Ip();Pe(d,a,b,c);return d;}
function Pe(a,b,c,d){a.CG=b;a.oT=c;a.pP=d;}
function AMZ(a){return a.oT;}
function Yq(a){return a.pP;}
function Ks(a){var b;b=new T;V(b);return U(H(H(b,B(252)),a.CG));}
function AHE(){Ip.call(this);}
function Bae(a,b,c){var d=new AHE();AZJ(d,a,b,c);return d;}
function AZJ(a,b,c,d){Pe(a,b,c,d);}
function ACC(){Ip.call(this);}
function Bcn(a,b,c){var d=new ACC();A71(d,a,b,c);return d;}
function A71(a,b,c,d){Pe(a,b,c,d);}
function L8(){P.call(this);}
function Bbt(a,b){var c=new L8();AJk(c,a,b);return c;}
function AJk(a,b,c){C9(a,b,c,Bhm);}
function A8X(a,b,c){L();return Bfa.b;}
function AAg(){P.call(this);}
function BbV(a){var b=new AAg();AZi(b,a);return b;}
function AZi(a,b){D0(a,b,BhA);a.W=3;Ff(a,1);}
function A7G(a,b){return b==1?0:b?3:2;}
function ADD(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=XI(b,c,g,e);if(C()){break _;}h=$z;if(h>=4){$p=2;continue _;}$p=3;continue _;case 2:$z=XI(b,c,g,e);if(C()){break _;}g=$z;if(g<9)return;h=(c+E(f,3)|0)-1|0;g=(d+E(f,5)|0)-3|0;i=(e+E(f,3)|0)-1|0;$p=4;continue _;case 3:$z=ACa(b,c,g,e);if(C()){break _;}j=$z;if(!j.sn()){$p=2;continue _;}if(E(f,
4))return;L();h=Be5.b;$p=6;continue _;case 4:$z=ACH(b,h,g,i);if(C()){break _;}c=$z;L();if(c!=Be5.b)return;c=g+1|0;$p=5;case 5:$z=XI(b,h,c,i);if(C()){break _;}d=$z;if(d<4)return;$p=7;continue _;case 6:APK(b,c,d,e,h);if(C()){break _;}return;case 7:$z=ACa(b,h,c,i);if(C()){break _;}f=$z;if(f.sn())return;c=Be4.b;$p=8;case 8:APK(b,h,g,i,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function A0o(a,b,c){L();return Be5.dT(0,c);}
function AH9(){P.call(this);}
function Baj(a,b){var c=new AH9();AXQ(c,a,b);return c;}
function AXQ(a,b,c){C9(a,b,c,BhA);}
function B_(){D.call(this);}
var Bgm=null;var BhA=null;var Bhn=null;var Bhm=null;var BhB=null;var Bf3=null;var Bf4=null;var BhC=null;var BhD=null;var BhE=null;var Bhp=null;var BhF=null;var BhG=null;var BhH=null;var Bho=null;var BhI=null;var BhJ=null;function BhK(){var a=new B_();AQA(a);return a;}
function AQA(a){return;}
function A8B(a){return 0;}
function A1e(a){return 1;}
function A76(a){return 1;}
function A5I(a){return 1;}
function AQh(){Bgm=new Ow;BhA=new B_;Bhn=new B_;Bhm=new B_;BhB=new B_;Bf3=new Mi;Bf4=new Mi;BhC=new B_;BhD=new Oi;BhE=new B_;Bhp=new B_;BhF=new Ow;BhG=new B_;BhH=new Oi;Bho=new B_;BhI=new B_;BhJ=new B_;}
function F0(){P.call(this);}
function A3A(a,b){var c=new F0();LP(c,a,b);return c;}
function LP(a,b,c){D0(a,b,BhD);a.W=c;Ff(a,1);Bn(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function AL7(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=ACH(b,c,d,e);if(C()){break _;}c=$z;return a.rr(c);default:E_();}}C3().s(a,b,c,d,e,$p);}
function AYC(a,b){L();return b!=Be4.b&&b!=Be5.b&&b!=Bhe.b?0:1;}
function AIU(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJD(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AEm(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJD(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJD(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.Hp(b,c,d,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEX(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yr(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APK(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AOh(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XI(b,c,d,e);if(C()){break _;}f=$z;if(f<8){$p=3;continue _;}d=d-1|0;$p=2;case 2:$z=ACH(b,c,d,e);if(C()){break _;}c=$z;return !a.rr(c)?0:1;case 3:$z=AGv(b,c,d,e);if(C()){break _;}g=$z;if(!g)return 0;d=d-1|0;$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGB(a,b,c,d,e){return null;}
function A6B(a){return 0;}
function AUf(a){return 0;}
function A7L(a){return 1;}
function AM$(){F0.call(this);}
function BcH(a,b){var c=new AM$();A9S(c,a,b);return c;}
function A9S(a,b,c){LP(a,b,c);Bn(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function AEv(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJD(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=XI(b,c,g,e);if(C()){break _;}g=$z;if(g>=9&&!E(f,5)){$p=3;continue _;}return;case 3:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;if(g>=15){g=0;$p=4;continue _;}g=g+1|0;$p=6;continue _;case 4:ALG(b,c,d,e,g);if(C()){break _;}h=new Ro;$p=5;case 5:$z=AEZ(h,b,f,c,d,e);if(C()){break _;}g
=$z;if(g)return;g=a.b;$p=7;continue _;case 6:AKK(b,c,d,e,g);if(C()){break _;}return;case 7:ALG(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function HQ(){P.call(this);this.qS=0;}
function BhL(a,b){var c=new HQ();Qa(c,a,b);return c;}
function Qa(a,b,c){C9(a,b,((c!==Bf4?12:14)*16|0)+13|0,c);a.qS=1;if(c===Bf4)a.qS=2;Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);Ff(a,1);}
function Jz(b){if(b>=8)b=0;return (b+1|0)/9.0;}
function ATr(a,b){return b&&b!=1?a.W+1|0:a.W;}
function AFv(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACa(b,c,d,e);if(C()){break _;}f=$z;if(f!==a.b$)return (-1);$p=2;case 2:$z=AEX(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AEr(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oQ(c,d,e);if(C()){break _;}f=$z;if(f!==a.b$)return (-1);$p=2;case 2:$z=b.eI(c,d,e);if(C()){break _;}g=$z;if(g>=8)g=0;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function A_n(a){return 0;}
function A$H(a){return 0;}
function A8U(a,b,c){return c&&!b?1:0;}
function ARM(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oQ(c,d,e);if(C()){break _;}g=$z;if(g===a.b$)c=0;else{if(f!=1){$p=2;continue _;}c=1;}return c;case 2:$z=AGK(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yp(a,b,c,d,e){return null;}
function A8c(a){return 4;}
function A3u(a,b,c){return 0;}
function A6p(a,b){return 0;}
function AI1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=BY(0.0,0.0,0.0);$p=1;case 1:$z=AEr(a,b,c,d,e);if(C()){break _;}g=$z;h=0;i=c-1|0;j=e-1|0;k=d-1|0;l=g-8|0;m=d-d|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 2:$z=b.eI(c,d,e);if
(C()){break _;}n=$z;if(n<8)return CD(f);k=0;n=2;$p=3;case 3:$z=ARM(a,b,c,d,j,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=e+1|0;p=3;$p=4;continue _;}k=1;if(!k){n=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dl(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 4:$z=ARM(a,b,c,d,n,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n
=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dl(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 5:$z=ARM(a,b,i,d,e,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k
=1;if(k){k=1;if(k)f=Dl(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 6:$z=ARM(a,b,n,d,e,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dl(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 7:$z=AEr(a,b,n,d,o);if(C()){break _;}p=$z;if(p<0){$p=8;continue _;}if(p>=0){q=p-g|0;f=Dl(f,Bx(n-c|0,q),Bx(m,q),Bx(o-e|0,q));}h=h+1
|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;continue _;case 8:$z=AEr(a,b,n,k,o);if(C()){break _;}p=$z;if(p>=0){q=p-l|0;f=Dl(f,Bx(n-c|0,q),Bx(m,q),Bx(o-e|0,q));}h=h+1|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 9:$z=ARM(a,b,c,n,j,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dl(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d
=d+1|0;n=5;$p=12;continue _;case 10:$z=ARM(a,b,c,n,p,q);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dl(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 11:$z=ARM(a,b,i,n,e,p);if(C()){break _;}n=$z;if(n)k=1;if(k){k=1;if(k)f=Dl(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;case 12:$z=ARM(a,b,c,d,e,n);if(C()){break _;}c=$z;if(c)k=1;if(k)f=Dl(CD(f),0.0,(-6.0),0.0);return CD(f);default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,
m,n,o,p,q,$p);}
function ANp(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AI1(a,b,c,d,e);if(C()){break _;}h=$z;g.x=g.x+h.x;g.z=g.z+h.z;g.w=g.w+h.w;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AVj(a){return a.b$===Bf3?5:a.b$!==Bf4?0:30;}
function AEJ(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sT(c,d,e);if(C()){break _;}f=$z;d=d+1|0;$p=2;case 2:$z=b.sT(c,d,e);if(C()){break _;}g=$z;if(f>g)g=f;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ARn(a,b,c,d,e,f){return;}
function A$E(a){return 0;}
function YP(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.b$===Bf3&&!E(f,64)){$p=2;continue _;}if(a.b$!==Bf4)return;g=d+1|0;$p=1;case 1:$z=ACa(b,c,g,e);if(C()){break _;}h=$z;if(h!==Bgm)return;$p=3;continue _;case 2:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;if(g>0&&g<8)Ex(b,c+0.5,d+0.5,e+0.5,B(253),N(f)*0.25+0.75,N(f)*1.0+0.5);if(a.b$!==Bf4)return;g=d+1|0;$p=1;continue _;case 3:$z=AAP(b,
c,g,e);if(C()){break _;}g=$z;if(!g&&!E(f,100))BX(b,B(254),c+N(f),d+a.cE,e+N(f),0.0,0.0,0.0);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A6v(b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:g=null;if(f===Bf3){L();g=Bf_;$p=1;continue _;}if(f!==Bf4)return g.x===0.0&&g.w===0.0?(-1000.0):CS(g.w,g.x)-1.5707963267948966;L();f=Bga;$p=2;continue _;case 1:$z=AI1(g,b,c,d,e);if(C()){break _;}g=$z;if(f!==Bf4)return g.x===0.0&&g.w===0.0?(-1000.0):CS(g.w,g.x)-1.5707963267948966;L();f=Bga;$p=2;case 2:$z=AI1(f,b,c,d,e);if(C()){break _;}g=$z;return g.x===
0.0&&g.w===0.0?(-1000.0):CS(g.w,g.x)-1.5707963267948966;default:E_();}}C3().s(b,c,d,e,f,g,$p);}
function AR6(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APm(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ALt(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APm(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function APm(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACH(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b&&a.b$===Bf4){f=0;g=e-1|0;$p=2;continue _;}return;case 2:$z=ACa(b,c,d,g);if(C()){break _;}h=$z;if(h===Bf3)f=1;if(!f){g=e+1|0;$p=3;continue _;}f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 3:$z
=ACa(b,c,d,g);if(C()){break _;}h=$z;if(h===Bf3)f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 4:$z=ACa(b,g,d,e);if(C()){break _;}h=$z;if(h===Bf3)f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 5:$z=ACa(b,g,d,e);if(C()){break _;}h=$z;if(h===Bf3)f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 6:$z=ACa(b,c,g,e);if(C()){break _;}h
=$z;if(h===Bf3)f=1;if(!f)return;$p=7;case 7:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;if(!g){L();f=Bfy.b;$p=8;continue _;}if(g>4){JZ(a,b,c,d,e);return;}L();f=Bfa.b;$p=9;continue _;case 8:APK(b,c,d,e,f);if(C()){break _;}JZ(a,b,c,d,e);return;case 9:APK(b,c,d,e,f);if(C()){break _;}JZ(a,b,c,d,e);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function JZ(a,b,c,d,e){var f,g,h,i;Ex(b,c+0.5,d+0.5,e+0.5,B(215),0.5,2.5999999046325684+(N(b.r)-N(b.r))*0.800000011920929);f=0;g=c;h=d+1.2;i=e;while(f<8){BX(b,B(255),g+BR(),h,i+BR(),0.0,0.0,0.0);f=f+1|0;}}
function AEu(){var a=this;HQ.call(a);a.mn=0;a.hi=null;a.cT=null;}
function AUA(a,b){var c=new AEu();AZp(c,a,b);return c;}
function AZp(a,b,c){Qa(a,b,c);a.mn=0;a.hi=$rt_createBooleanArray(4);a.cT=$rt_createIntArray(4);}
function AHp(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}f=$z;g=a.b+1|0;$p=2;case 2:AJA(b,c,d,e,g,f);if(C()){break _;}Jo(b,c,d,e,c,d,e);return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AO3(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFv(a,b,c,d,e);if(C()){break _;}g=$z;h=1;if(g<=0){$p=2;continue _;}i=(-100);a.mn=0;j=c-1|0;$p=3;continue _;case 2:AHp(a,b,c,d,e);if(C()){break _;}j=d-1|0;$p=7;continue _;case 3:$z=AO0(a,b,j,d,e,i);if(C()){break _;}j=$z;k=c+1|0;$p=4;case 4:$z=AO0(a,b,k,d,e,j);if
(C()){break _;}j=$z;k=e-1|0;$p=5;case 5:$z=AO0(a,b,c,d,k,j);if(C()){break _;}j=$z;k=e+1|0;$p=6;case 6:$z=AO0(a,b,c,d,k,j);if(C()){break _;}j=$z;k=j+a.qS|0;if(!(k<8&&j>=0))k=(-1);j=d+1|0;$p=8;continue _;case 7:$z=AL9(a,b,c,j,e);if(C()){break _;}k=$z;if(!k){if(g<0)return;if(!g){$p=12;continue _;}$p=13;continue _;}if(g>=8){d=a.b;$p=10;continue _;}d=a.b;k=g+8|0;$p=9;continue _;case 8:$z=AFv(a,b,c,j,e);if(C()){break _;}l=$z;if(l>=0){$p=11;continue _;}if(a.mn>=2&&a.b$===Bf3)k=0;if(a.b$===Bf4&&g<8&&k<8&&k>g&&E(f,4))
{h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 9:AJb(b,c,j,e,d,k);if(C()){break _;}return;case 10:AJb(b,c,j,e,d,g);if(C()){break _;}return;case 11:$z=AFv(a,b,c,j,e);if(C()){break _;}k=$z;if(k<8)k=k+8|0;if(a.mn>=2&&a.b$===Bf3)k=0;if(a.b$===Bf4&&g<8&&k<8&&k>g&&E(f,4)){h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 12:$z=ALf(a,b,c,d,e);if(C()){break _;}m
=$z;l=g+a.qS|0;if(g>=8)l=1;if(l>=8)return;m=m.data;if(m[0]){j=c-1|0;$p=14;continue _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 13:$z=ACz(a,b,c,j,e);if(C()){break _;}j=$z;if(!j)return;$p=12;continue _;case 14:APn(a,b,j,d,e,l);if(C()){break _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 15:APn(a,b,j,d,e,l);if(C()){break _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e
=e+1|0;$p=21;continue _;case 16:APn(a,b,c,d,j,l);if(C()){break _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 17:AHp(a,b,c,d,e);if(C()){break _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 18:AKK(b,c,d,e,k);if(C()){break _;}Fn(b,c,d,e,a.b);j=a.b;$p=19;case 19:AH1(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 20:APK(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 21:APn(a,b,c,d,e,l);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function APn(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AL9(a,b,c,d,e);if(C()){break _;}g=$z;if(!g)return;$p=2;case 2:$z=ACH(b,c,d,e);if(C()){break _;}g=$z;if(g>0){if(a.b$!==Bf4){L();h=Be2.data[g];$p=4;continue _;}JZ(a,b,c,d,e);}g=a.b;$p=3;case 3:AJb(b,c,d,e,g,f);if(C()){break _;}return;case 4:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;$p=5;case 5:h.IX(b,c,d,e,g);if(C()){break _;}g
=a.b;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AN4(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=1000;i=0;j=R(g,1);k=R(g,3);l=R(g,2);m=c-1|0;n=e-1|0;o=d-1|0;p=R(f,4);q=f+1|0;a:{while(i<4){if(!(!i&&!j)){r=R(i,1);if(!(!r&&!g)){s=R(i,2);if(!(!s&&!k)){t=R(i,3);if(t)break a;if
(l)break a;}}}i=i+1|0;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;case 1:$z=ACz(a,b,u,d,r);if(C()){break _;}t=$z;if(!t){$p=2;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;continue _;case 2:$z=ACa(b,u,d,r);if(C()){break _;}v=$z;if(v!==a.b$){$p=3;continue _;}$p=4;continue _;case 3:$z=ACz(a,b,u,o,r);if(C()){break _;}t=$z;if(!t)return f;if
(p<0){$p=5;continue _;}c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;case 4:$z=AEX(b,u,d,r);if(C()){break _;}t=$z;if(t){$p=3;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1
|0;$p=1;continue _;case 5:$z=AN4(a,b,u,d,r,q,i);if(C()){break _;}t=$z;if(t<h)h=t;c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=R(i,1);if(!r&&!g)continue;s=R(i,2);if(!s&&!k)continue;t=R(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function ALf(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;h=e-1|0;i=d-1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hi;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hi;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;case 1:$z
=ACz(a,b,l,d,m);if(C()){break _;}j=$z;if(!j){$p=2;continue _;}f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hi;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hi;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;continue _;case 2:$z=ACa(b,l,d,m);if(C()){break _;}n=$z;if(n!==a.b$){$p=3;continue _;}$p=4;continue _;case 3:$z=ACz(a,b,l,i,m);if(C()){break _;}j=$z;if(j){k=a.cT.data;j=1;$p=5;continue _;}a.cT.data[f]=0;f=f+1|0;if(f>=
4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hi;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hi;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 4:$z=AEX(b,l,d,m);if(C()){break _;}j=$z;if(j){$p=3;continue _;}f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hi;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hi;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f
==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 5:$z=AN4(a,b,l,d,m,j,f);if(C()){break _;}j=$z;k[f]=j;f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hi;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hi;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ACz(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACH(b,c,d,e);if(C()){break _;}f=$z;L();if(f!=Bhi.b&&f!=Bhh.b&&f!=Bgo.b){if(!f)return 0;return Be2.data[f].b$.dt();}return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AO0(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFv(a,b,c,d,e);if(C()){break _;}g=$z;if(g<0)return f;if(!g)a.mn=a.mn+1|0;if(g>=8)g=0;if(f>=0&&g>=f)g=f;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AL9(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACa(b,c,d,e);if(C()){break _;}f=$z;if(f===a.b$)c=0;else{if(f!==Bf4){$p=2;continue _;}c=0;}return c;case 2:$z=ACz(a,b,c,d,e);if(C()){break _;}c=$z;return c?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ACd(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APm(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACH(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b)Fn(b,c,d,e,a.b);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AIZ(){HQ.call(this);}
function AXY(a,b){var c=new AIZ();A2K(c,a,b);return c;}
function A2K(a,b,c){Qa(a,b,c);Ff(a,0);}
function AGN(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APm(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACH(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return;$p=3;case 3:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;b.sr=1;f=a.b-1|0;$p=4;case 4:AJA(b,c,d,e,f,g);if(C()){break _;}Jo(b,c,d,e,c,d,e);Fn(b,c,d,e,a.b-1|0);b.sr=0;return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function I8(){P.call(this);}
var Be9=0;function BbQ(a,b){var c=new I8();RM(c,a,b);return c;}
function RM(a,b,c){C9(a,b,c,BhG);}
function AR4(a,b,c,d,e){Fn(b,c,d,e,a.b);}
function ASu(a,b,c,d,e,f){Fn(b,c,d,e,a.b);}
function APN(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ACH(b,c,g,e);if(C()){break _;}g=$z;if(!g)g=1;else{L();if(g==BgC.b)g=1;else{f=Be2.data[g].b$;g=f===Bf3?1:f!==Bf4?0:1;}}if(g&&d>=0){f=new JT;h=c+0.5;i=d+0.5;j=e+0.5;c=a.b;FA(f,b);f.oS=0;f.hX=c;f.mG=1;D1(f,0.9800000190734863,0.9800000190734863);f.c4=f.eN/2.0;k
=h;l=i;m=j;CU(f,k,l,m);f.g=0.0;f.i=0.0;f.h=0.0;f.ja=0;f.bT=k;f.cS=l;f.bS=m;if(!Be9){$p=2;continue _;}if(!f.cR){$p=3;continue _;}}return;case 2:AOt(b,f);if(C()){break _;}return;case 3:AM0(f);if(C()){break _;}if(f.cR)return;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function A4a(a){return 3;}
function AC0(){Be9=0;}
function AHi(){I8.call(this);}
function BbZ(a,b){var c=new AHi();AWe(c,a,b);return c;}
function AWe(a,b,c){RM(a,b,c);}
function A_A(a,b,c){if(E(c,10))b=a.b;else{BB();b=BhM.cW;}return b;}
function Y7(){P.call(this);}
function ST(a,b){var c=new Y7();AZP(c,a,b);return c;}
function AZP(a,b,c){C9(a,b,c,Bhm);}
function A4D(a,b,c){b=a.b;L();if(b==Bfr.b){BB();b=BhN.cW;}else if(a.b!=Bha.b)b=a.b;else{BB();b=BhO.cW;}return b;}
function A0n(a,b){return 1;}
function AFw(){P.call(this);}
function Bc1(a){var b=new AFw();A_r(b,a);return b;}
function A_r(a,b){D0(a,b,Bhn);a.W=20;}
function A9a(a,b){return 1;}
function ATv(a,b,c){L();return Bfd.b;}
function AVP(a,b){return b==1?21:b?20:21;}
function Me(){P.call(this);this.r7=0;}
function AQK(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eh(c,d,e);if(C()){break _;}g=$z;if(!a.r7&&g==a.b)return 0;$p=2;case 2:$z=AGK(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACR(){Me.call(this);this.CI=0;}
function BaW(a,b){var c=new ACR();A1g(c,a,b);return c;}
function A1g(a,b,c){C9(a,b,c,BhC);a.r7=0;a.CI=c;Ff(a,1);}
function AIN(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ACa(b,c,g,e);if(C()){break _;}f=$z;if(f.dt())return;h=c-2|0;i=c+2|0;j=d+1|0;k=e-2|0;l=e+2|0;while(h<=i){m=g;while(m<=j){n=k;if(n<=l){$p=5;continue _;}m=m+1|0;}h=h+1|0;}$p=2;case 2:$z=AEX(b,c,d,e);if(C()){break _;}i=$z;$p=3;case 3:Yr(a,
b,c,d,e,i);if(C()){break _;}i=0;$p=4;case 4:APK(b,c,d,e,i);if(C()){break _;}return;case 5:$z=ACH(b,h,m,n);if(C()){break _;}o=$z;L();if(o==Bfd.b)return;n=n+1|0;while(n>l){m=m+1|0;while(m>j){h=h+1|0;if(h>i){$p=2;continue _;}m=g;}n=k;}continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AXk(a,b){return E(b,10)?0:1;}
function A5t(a,b,c){L();return Bfi.b;}
function A26(a){return a.r7?0:1;}
function AKB(a,b){a.r7=b;a.W=a.CI+(!b?1:0)|0;}
function ASI(a,b,c,d,e,f){return;}
function ALs(){P.call(this);}
function Bbm(a){var b=new ALs();A89(b,a);return b;}
function A89(a,b){D0(a,b,BhE);a.W=48;}
function AKY(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;if(k<=e){$p=1;continue _;}j=j+1|0;}f=f+1|0;}return;case 1:$z=ACa(b,f,j,k);if(C()){break _;}l=$z;k=k+1|0;a:while(true){if(k<=e){continue _;}j=j+1|0;while(j>d){f=f+1|0;if(f>g)break a;j=h;}k=i;}return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function ANH(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;if(l<=c){$p=1;continue _;}k=k+1|0;}f=f+1|0;}return;case 1:$z=ACH(b,f,k,l);if(C()){break _;}d=$z;$p=2;case 2:AH1(b,f,k,l,d);if(C()){break _;}l=l+1|0;a:while(true){if(l<=c){$p=1;continue _;}k=k+1|0;while(k>i){f
=f+1|0;if(f>g)break a;k=h;}l=j;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Ns(){P.call(this);this.CT=0;}
function A$q(a){return 0;}
function YH(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eh(c,d,e);if(C()){break _;}g=$z;if(!a.CT&&g==a.b)return 0;$p=2;case 2:$z=AGK(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQB(){Ns.call(this);}
function Bbi(a,b,c,d){var e=new AQB();A5w(e,a,b,c,d);return e;}
function A5w(a,b,c,d,e){C9(a,b,c,d);a.CT=e;}
function AWm(a,b){return 0;}
function AHs(){F0.call(this);}
function AT5(a,b){var c=new AHs();A_k(c,a,b);return c;}
function A_k(a,b,c){LP(a,b,c);Bn(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AJj(a,b){L();return BgN.data[b];}
function ADx(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XI(b,c,d,e);if(C()){break _;}f=$z;if(f>13)return 0;d=d-1|0;$p=2;case 2:$z=ACH(b,c,d,e);if(C()){break _;}c=$z;return !AJj(a,c)?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ABG(){P.call(this);}
function AEP(a,b){var c=new ABG();AYb(c,a,b);return c;}
function AYb(a,b,c){D0(a,b,BhB);a.W=c;}
function A4Q(a,b){return b==1?a.W-16|0:b?a.W:a.W+16|0;}
function Zt(){P.call(this);this.wP=0;}
function A9C(a,b){var c=new Zt();A6r(c,a,b);return c;}
function A6r(a,b,c){C9(a,b,6,Bhm);a.wP=c;if(!c)Bn(a,0.0,0.0,0.0,1.0,0.5,1.0);Gv(a,255);}
function A$Z(a,b){return b>1?5:6;}
function A57(a){return a.wP;}
function ABP(a,b,c,d,e,f){L();}
function ABv(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();f=d-1|0;$p=1;case 1:$z=ACH(b,c,f,e);if(C()){break _;}g=$z;if(g!=Be7.b)return;g=0;$p=2;case 2:APK(b,c,d,e,g);if(C()){break _;}d=Be6.b;$p=3;case 3:APK(b,c,f,e,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AZE(a,b,c){L();return Be7.b;}
function AXm(a){return a.wP;}
function ASU(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();if(a!==Be7){$p=1;continue _;}if(f==1)return 1;$p=2;continue _;case 1:AGK(a,b,c,d,e,f);if(C()){break _;}if(f==1)return 1;$p=2;case 2:$z=AGK(a,b,c,d,e,f);if(C()){break _;}g=$z;if(!g)c=0;else{if(f){$p=3;continue _;}c=1;}return c;case 3:$z=b.eh(c,d,e);if(C()){break _;}c=$z;return c==a.b?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AOs(){P.call(this);}
function BaX(a,b){var c=new AOs();A0J(c,a,b);return c;}
function A0J(a,b,c){C9(a,b,c,BhI);}
function A5h(a,b){return !b?a.W+2|0:b!=1?a.W:a.W+1|0;}
function AVr(a,b){return 0;}
function AGT(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=AW6(b,c+0.5,d+0.5,e+0.5);f.hr=E(b.r,f.hr/4|0)+(f.hr/8|0)|0;$p=1;case 1:AOt(b,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ASC(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=AW6(b,c+0.5,d+0.5,e+0.5);$p=1;case 1:AOt(b,g);if(C()){break _;}Di(b,g,B(226),1.0,1.0);return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADn(){P.call(this);}
function Bay(a,b){var c=new ADn();AUu(c,a,b);return c;}
function AUu(a,b,c){C9(a,b,c,Bhn);}
function A_o(a,b){return b>1?a.W:4;}
function A4S(a,b){return 0;}
function XW(){L8.call(this);}
function BbD(a,b){var c=new XW();AZK(c,a,b);return c;}
function AZK(a,b,c){AJk(a,b,c);}
function A3n(a,b){return 1;}
function AVb(a,b,c){L();return Bfy.b;}
function AOP(){P.call(this);}
function Bbp(a,b){var c=new AOP();A_b(c,a,b);return c;}
function A_b(a,b,c){C9(a,b,c,BhH);Ff(a,1);}
function ANx(a,b,c,d,e){return null;}
function A2t(a){return 0;}
function AWr(a){return 0;}
function A1c(a){return 2;}
function AMi(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAP(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;f=e+1|0;$p=4;case 4:$z=AAP(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;d=d-1|0;$p=5;case 5:$z=AAP(b,c,d,e);if(C()){break _;}c=$z;return c;default:
E_();}}C3().s(a,b,c,d,e,f,$p);}
function AN0(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;if(f==1){h=d-1|0;$p=2;continue _;}if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 2:$z=AAP(b,c,h,e);if(C()){break _;}h=$z;if(h)g=5;if(f==2){h=e+1|0;$p=3;continue _;}if(f==3)
{h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 3:$z=AAP(b,c,d,h);if(C()){break _;}h=$z;if(h)g=4;if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 4:$z=AAP(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 5:$z=AAP(b,h,d,e);if(C()){break _;}h=$z;if(h)g=2;if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 6:$z
=AAP(b,f,d,e);if(C()){break _;}f=$z;if(f)g=1;$p=7;case 7:AKK(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ASs(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;if(g)return;$p=2;case 2:ABF(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABF(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=c+1|0;$p=2;continue _;}f=1;$p=3;continue _;case 2:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=e-1|0;$p=4;continue _;}f=2;$p=5;continue _;case 3:AKK(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 4:$z=AAP(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=e+1|0;$p=7;continue _;}f=3;$p=8;continue _;case 5:AKK(b,
c,d,e,f);if(C()){break _;}$p=6;case 6:AFl(a,b,c,d,e);if(C()){break _;}return;case 7:$z=AAP(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=d-1|0;$p=9;continue _;}f=4;$p=10;continue _;case 8:AKK(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 9:$z=AAP(b,c,f,e);if(C()){break _;}f=$z;if(!f){$p=6;continue _;}f=5;$p=11;continue _;case 10:AKK(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 11:AKK(b,c,d,e,f);if(C()){break _;}$p=6;continue _;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AKp(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFl(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;$p=2;case 2:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;h=0;f=c-1|0;$p=3;case 3:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==1)h=1;f=c+1|0;$p=4;case 4:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==2)h=1;f=e-1|0;$p=5;case 5:$z=AAP(b,c,d,f);if(C()){break _;}f=$z;if(!f&&
g==3)h=1;f=e+1|0;$p=6;case 6:$z=AAP(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==4)h=1;f=d-1|0;$p=7;case 7:$z=AAP(b,c,f,e);if(C()){break _;}f=$z;if(!f&&g==5)h=1;if(!h)return;$p=8;case 8:$z=AEX(b,c,d,e);if(C()){break _;}f=$z;$p=9;case 9:Yr(a,b,c,d,e,f);if(C()){break _;}f=0;$p=10;case 10:APK(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFl(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AMi(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AEX(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yr(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APK(b,c,d,e,f);if(C()){break _;}return 0;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AKw(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}h=$z;if(h==1)Bn(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)Bn(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)Bn(a,0.3499999940395355,0.20000000298023224,
0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)Bn(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else Bn(a,0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);$p=2;case 2:$z=Kl(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AQD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;m=j;BX(b,B(256),k,l,m,0.0,0.0,0.0);BX(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l
=i+0.2199999988079071;m=j;BX(b,B(256),k,l,m,0.0,0.0,0.0);BX(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==3){k=h;l=i+0.2199999988079071;m=j-0.27000001072883606;BX(b,B(256),k,l,m,0.0,0.0,0.0);BX(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g!=4){n=h;o=i;p=j;BX(b,B(256),n,o,p,0.0,0.0,0.0);BX(b,B(257),n,o,p,0.0,0.0,0.0);}else{k=h;l=i+0.2199999988079071;m=j+0.27000001072883606;BX(b,B(256),k,l,m,0.0,0.0,0.0);BX(b,B(257),k,l,m,0.0,0.0,0.0);}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function APd(){var a=this;P.call(a);a.sF=null;a.uc=null;}
function Bc7(a,b){var c=new APd();A30(c,a,b);return c;}
function A30(a,b,c){C9(a,b,c,BhF);a.sF=$rt_createIntArray(256);a.uc=$rt_createIntArray(256);Ht(a,Bfc.b,5,20);Ht(a,Bfd.b,5,5);Ht(a,Bfe.b,30,60);Ht(a,Bfw.b,30,20);Ht(a,Bfx.b,15,100);Ht(a,Bfq.b,30,60);Ff(a,1);}
function Ht(a,b,c,d){a.sF.data[b]=c;a.uc.data[b]=d;}
function ARS(a,b,c,d,e){return null;}
function A6c(a){return 0;}
function A8L(a){return 0;}
function AXN(a){return 3;}
function AWW(a,b){return 0;}
function A0j(a){return 20;}
function XV(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;h=R(g,15);if(h>=0){$p=2;continue _;}i=g+1|0;$p=3;continue _;case 2:$z=AM8(a,b,c,d,e);if(C()){break _;}i=$z;if(i){j=d-1|0;$p=4;continue _;}h=d-1|0;$p=5;continue _;case 3:AKK(b,
c,d,e,i);if(C()){break _;}Fn(b,c,d,e,a.b);$p=2;continue _;case 4:$z=AGf(a,b,c,j,e);if(C()){break _;}i=$z;if(!i&&!h&&!E(f,4)){h=0;$p=13;continue _;}if(!(g%5|0)&&g>5){h=c+1|0;i=300;$p=7;continue _;}return;case 5:$z=AAP(b,c,h,e);if(C()){break _;}h=$z;if(h&&g<=3)return;h=0;$p=6;case 6:APK(b,c,d,e,h);if(C()){break _;}return;case 7:YO(a,b,h,d,e,i,f);if(C()){break _;}i=c-1|0;g=300;$p=8;case 8:YO(a,b,i,d,e,g,f);if(C()){break _;}g=100;$p=9;case 9:YO(a,b,c,j,e,g,f);if(C()){break _;}k=d+1|0;g=200;$p=10;case 10:YO(a,b,
c,k,e,g,f);if(C()){break _;}l=e-1|0;g=300;$p=11;case 11:YO(a,b,c,d,l,g,f);if(C()){break _;}m=e+1|0;g=300;$p=12;case 12:YO(a,b,c,d,m,g,f);if(C()){break _;}n=d+4|0;a:{while(i<=h){o=l;while(o<=m){p=j;while(p<=n){if(i!=c)break a;if(p!=d)break a;if(o!=e)break a;p=p+1|0;}o=o+1|0;}i=i+1|0;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 13:APK(b,c,d,e,h);if(C()){break _;}return;case 14:$z=ACH(b,i,p,o);if(C()){break _;}r=$z;if(!r){r=i+1|0;$p=15;continue _;}if(0>0&&E(f,q)<=0){g=a.b;$p=21;continue _;}b:
{c:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break c;o=l;}p=j;}if(i!=c)break b;if(p!=d)break b;if(o==e)continue;else break b;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;continue _;case 15:$z=AGP(a,b,r,p,o,g);if(C()){break _;}g=$z;r=i-1|0;$p=16;case 16:$z=AGP(a,b,r,p,o,g);if(C()){break _;}g=$z;r=p-1|0;$p=17;case 17:$z=AGP(a,b,i,r,o,g);if(C()){break _;}g=$z;r=p+1|0;$p=18;case 18:$z=AGP(a,b,i,r,o,g);if(C()){break _;}g=$z;r=o-1|0;$p=19;case 19:$z=AGP(a,b,i,p,r,g);if(C()){break _;}r=$z;g
=o+1|0;$p=20;case 20:$z=AGP(a,b,i,p,g,r);if(C()){break _;}r=$z;if(r>0&&E(f,q)<=r){g=a.b;$p=21;continue _;}d:{b:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break b;o=l;}p=j;}if(i!=c)break d;if(p!=d)break d;if(o==e)continue;else break d;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 21:APK(b,i,p,o,g);if(C()){break _;}a:{d:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break d;o=l;}p=j;}if(i!=c)break a;if(p!=d)break a;if(o==e)continue;else break a;}return;}q
=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function YO(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.uc.data;$p=1;case 1:$z=ACH(b,c,d,e);if(C()){break _;}i=$z;j=h[i];if(E(g,f)>=j)return;$p=2;case 2:$z=ACH(b,c,d,e);if(C()){break _;}f=$z;L();i=f!=Bfx.b?0:1;if(E(g,2)){f=0;$p=3;continue _;}f=a.b;$p=4;continue _;case 3:APK(b,c,d,e,f);if(C()){break _;}if(!i)return;g=Bfx;f=0;$p=5;continue _;case 4:APK(b,c,d,e,f);if
(C()){break _;}if(!i)return;g=Bfx;f=0;$p=5;case 5:g.nv(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AM8(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;$p=1;case 1:$z=AGf(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c-1|0;$p=2;case 2:$z=AGf(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=d-1|0;$p=3;case 3:$z=AGf(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=d+1|0;$p=4;case 4:$z=AGf(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=5;case 5:$z=AGf(a,b,c,d,f);if(C()){break _;}f=
$z;if(f)return 1;e=e+1|0;$p=6;case 6:$z=AGf(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A3B(a){return 0;}
function AGf(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.sF.data;$p=1;case 1:$z=b.eh(c,d,e);if(C()){break _;}c=$z;return f[c]<=0?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AGP(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.sF.data;$p=1;case 1:$z=ACH(b,c,d,e);if(C()){break _;}c=$z;h=g[c];if(h>f)f=h;return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANE(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAP(b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AM8(a,b,c,d,e);if(C()){break _;}c=$z;return c?1:0;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ABL(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAP(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AM8(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return;f=0;$p=3;case 3:APK(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ACD(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAP(b,c,f,e);if(C()){break _;}f=$z;if(f){Fn(b,c,d,e,a.b);return;}$p=2;case 2:$z=AM8(a,b,c,d,e);if(C()){break _;}f=$z;if(f){Fn(b,c,d,e,a.b);return;}f=0;$p=3;case 3:APK(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ASJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!E(f,24))Ex(b,c+0.5,d+0.5,e+0.5,B(258),1.0+N(f),N(f)*0.699999988079071+0.30000001192092896);g=d-1|0;$p=1;case 1:$z=AAP(b,c,g,e);if(C()){break _;}h=$z;if(h){g=0;i=c;j=d;k=e;while(g<3){BX(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,
0.0);g=g+1|0;}return;}L();l=BgC;$p=2;case 2:$z=AGf(l,b,c,g,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;k=e;while(g<3){BX(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,0.0);g=g+1|0;}return;}l=BgC;g=c-1|0;$p=3;case 3:a:{$z=AGf(l,b,g,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;m=d;n=e;while(true){if(g>=2)break a;j=i+N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BX(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=BgC;h=c+1|0;$p=4;case 4:a:{$z=AGf(l,b,h,d,e);if(C()){break _;}g=$z;if(g){g=0;i=h;m=d;n=e;while(true){if(g>=2)break a;j
=i-N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BX(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=BgC;g=e-1|0;$p=5;case 5:a:{$z=AGf(l,b,c,d,g);if(C()){break _;}g=$z;if(g){g=0;i=c;k=d;n=e;while(true){if(g>=2)break a;j=i+N(f);m=k+N(f);o=n+N(f)*0.10000000149011612;BX(b,B(255),j,m,o,0.0,0.0,0.0);g=g+1|0;}}}l=BgC;g=e+1|0;$p=6;case 6:a:{$z=AGf(l,b,c,d,g);if(C()){break _;}h=$z;if(h){h=0;o=c;p=d;j=g;while(true){if(h>=2)break a;q=o+N(f);i=p+N(f);n=j-N(f)*0.10000000149011612;BX(b,B(255),q,i,n,0.0,0.0,0.0);h=h+1|0;}}}l=BgC;d=
d+1|0;$p=7;case 7:a:{$z=AGf(l,b,c,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;n=e;while(true){if(g>=2)break a;q=i+N(f);k=j-N(f)*0.10000000149011612;o=n+N(f);BX(b,B(255),q,k,o,0.0,0.0,0.0);g=g+1|0;}}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Eg(){P.call(this);}
function AOS(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.tg();$p=1;case 1:AF9(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AL_(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AF0(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AAo(){Eg.call(this);}
function BcX(a,b){var c=new AAo();AU8(c,a,b);return c;}
function AU8(a,b,c){C9(a,b,c,Bhm);}
function AXz(a){return BcG();}
function A6h(a){return 0;}
function ZL(){P.call(this);this.cF=null;}
function A$2(a,b){var c=new ZL();A7o(c,a,b);return c;}
function A7o(a,b,c){C9(a,b,c.W,c.b$);a.cF=c;BI(a,c.qg);Do(a,c.nV/3.0);a.gP=c.gP;}
function A5W(a){return 0;}
function AWk(a){return 0;}
function AZc(a){return 10;}
function APO(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGK(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJO(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}h=$z;if(!h){Bn(a,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bn(a,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bn(a,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;}Bn(a,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ALL(a,b,c,d,e,f,
g);if(C()){break _;}Bn(a,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ALL(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 4:ALL(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ALL(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 6:ALL(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ALL(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 8:ALL(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.5,1.0,
0.5,1.0);$p=9;case 9:ALL(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AHR(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=ACa(b,c,g,e);if(C()){break _;}h=$z;if(!h.dt()){$p=2;continue _;}i=a.cF.b;$p=11;continue _;case 2:AIG(a,b,c,d,e);if(C()){break _;}i=c+1|0;j=d-1|0;$p=3;case 3:AIG(a,b,i,j,e);if(C()){break _;}k=c-1|0;$p=4;case 4:AIG(a,b,k,j,e);if(C()){break _;}l=e-1|0;$p=5;case 5:AIG(a,
b,c,j,l);if(C()){break _;}m=e+1|0;$p=6;case 6:AIG(a,b,c,j,m);if(C()){break _;}$p=7;case 7:AIG(a,b,i,g,e);if(C()){break _;}$p=8;case 8:AIG(a,b,k,g,e);if(C()){break _;}$p=9;case 9:AIG(a,b,c,g,l);if(C()){break _;}$p=10;case 10:AIG(a,b,c,g,m);if(C()){break _;}h=a.cF;$p=12;continue _;case 11:APK(b,c,d,e,i);if(C()){break _;}h=a.cF;$p=12;case 12:h.e1(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIG(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=APZ(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;g=(-1);f=c+1|0;h=d+1|0;$p=2;case 2:$z=APZ(a,b,f,h,e);if(C()){break _;}i=$z;if(i)g=0;i=c-1|0;$p=3;case 3:$z=APZ(a,b,i,h,e);if(C()){break _;}j=$z;if(j)g=1;j=e+1|0;$p=4;case 4:$z=APZ(a,b,c,h,j);if(C()){break _;}k=$z;if(k)g=2;k=e-1|0;$p=
5;case 5:$z=APZ(a,b,c,h,k);if(C()){break _;}h=$z;if(h)g=3;if(g<0){$p=6;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 6:$z=ADN(a,b,f,d,e);if(C()){break _;}h=$z;if(h){$p=7;continue _;}$p=9;continue _;case 7:$z=ADN(a,b,i,d,e);if(C()){break _;}h=$z;if(!h)g=0;$p=9;continue _;case 8:$z=APZ(a,b,i,h,e);if(C()){break _;}i=$z;if(i)g=0;$p=12;continue _;case 9:$z=ADN(a,b,i,d,e);if(C()){break _;}h=$z;if(h){$p=10;continue _;}$p=13;continue _;case 10:$z=ADN(a,b,f,d,e);if(C()){break _;}h=
$z;if(!h)g=1;$p=13;continue _;case 11:AKK(b,c,d,e,g);if(C()){break _;}return;case 12:$z=APZ(a,b,f,h,e);if(C()){break _;}f=$z;if(f)g=1;$p=15;continue _;case 13:$z=ADN(a,b,c,d,j);if(C()){break _;}h=$z;if(h){$p=14;continue _;}$p=16;continue _;case 14:$z=ADN(a,b,c,d,k);if(C()){break _;}h=$z;if(!h)g=2;$p=16;continue _;case 15:$z=APZ(a,b,c,h,k);if(C()){break _;}f=$z;if(f)g=2;$p=18;continue _;case 16:$z=ADN(a,b,c,d,k);if(C()){break _;}h=$z;if(h){$p=17;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 17:$z
=ADN(a,b,c,d,j);if(C()){break _;}h=$z;if(!h)g=3;if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 18:$z=APZ(a,b,c,h,j);if(C()){break _;}f=$z;if(f)g=3;if(g<0)return;$p=11;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ADN(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACa(b,c,d,e);if(C()){break _;}b=$z;return b.dt();default:E_();}}C3().s(a,b,c,d,e,$p);}
function APZ(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACH(b,c,d,e);if(C()){break _;}f=$z;if(!f)c=0;else{L();c=Be2.data[f].em()!=10?0:1;}return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function APr(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.kT(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ABp(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.ra(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADC(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.nv(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AM9(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:$z=f.CP(b,c,d,e);if(C()){break _;}g=$z;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function A9b(a,b){return a.cF.yF(b);}
function A8p(a){return a.cF.pT();}
function A4u(a,b,c){return a.cF.dT(b,c);}
function A0N(a,b){return a.cF.eH(b);}
function AXO(a,b,c){return a.cF.eY(b,c);}
function A8j(a,b){return a.cF.ck(b);}
function ANi(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:$z=g.ur(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AVZ(a){return a.cF.mx();}
function AMt(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:$z=f.oW(b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ACW(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cF;$p=1;case 1:h.qH(b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AYU(a){return a.cF.pi();}
function AY7(a,b,c){return a.cF.o9(b,c);}
function AMB(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:$z=f.fX(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ACQ(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:AHR(a,b,c,d,e,f);if(C()){break _;}g=a.cF;$p=2;case 2:g.fE(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function YL(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:f.lB(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AH5(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cF;$p=1;case 1:h.H5(b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ANa(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.IX(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AQ7(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.oN(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ARa(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:g.e8(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AGZ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cF;$p=1;case 1:$z=g.lH(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Zm(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cF;$p=1;case 1:f.sR(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AF7(){Eg.call(this);this.fn=null;}
function Bal(a){var b=new AF7();A7i(b,a);return b;}
function A7i(a,b){D0(a,b,Bhn);a.fn=new DA;a.W=26;}
function AEM(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1)return a.W-1|0;if(!f)return a.W-1|0;g=e-1|0;$p=1;case 1:$z=b.eh(c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=b.eh(c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=b.eh(k,d,e);if(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=b.eh(m,
d,e);if(C()){break _;}n=$z;if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;L();if(BgN.data[h]&&!BgN.data[j])k=3;if(BgN.data[j]&&!BgN.data[h])k=2;if(BgN.data[l]&&!BgN.data[n])k=5;if(BgN.data[n]&&!BgN.data[l])k=4;return f!=k?a.W:a.W+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);c=l!=a.b?m:k;$p=7;continue _;}return a.W;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);c=h!=a.b?i:g;$p=5;continue _;}return a.W;case 5:$z=b.eh(k,d,c);if(C()){break _;}p=$z;if(h==a.b)i=g;$p=6;case 6:$z=b.eh(m,d,i);if(C()){break _;}m=$z;if(f==4)o=(-1)-o|0;i
=5;L();if(!(!BgN.data[l]&&!BgN.data[p])&&!BgN.data[n]&&!BgN.data[m])i=5;if(!(!BgN.data[n]&&!BgN.data[m])&&!BgN.data[l]&&!BgN.data[p])i=4;return (f!=i?a.W+32|0:a.W+16|0)+o|0;case 7:$z=b.eh(c,d,g);if(C()){break _;}g=$z;if(l==a.b)m=k;$p=8;case 8:$z=b.eh(m,d,i);if(C()){break _;}m=$z;if(f==3)o=(-1)-o|0;i=3;L();if(!(!BgN.data[h]&&!BgN.data[g])&&!BgN.data[j]&&!BgN.data[m])i=3;if(!(!BgN.data[j]&&!BgN.data[m])&&!BgN.data[h]&&!BgN.data[g])i=2;return (f!=i?a.W+32|0:a.W+16|0)+o|0;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,p,$p);}
function A9m(a,b){return b==1?a.W-1|0:!b?a.W-1|0:b!=3?a.W:a.W+1|0;}
function AKf(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;$p=1;case 1:$z=ACH(b,g,d,e);if(C()){break _;}h=$z;if(h==a.b)f=1;h=c+1|0;$p=2;case 2:$z=ACH(b,h,d,e);if(C()){break _;}i=$z;if(i==a.b)f=f+1|0;i=e-1|0;$p=3;case 3:$z=ACH(b,c,d,i);if(C()){break _;}j=$z;if(j==a.b)f=f+1|0;k=e+1|0;$p=4;case 4:$z=ACH(b,c,d,k);if(C()){break _;}l=$z;if
(l==a.b)f=f+1|0;if(f>1)return 0;$p=5;case 5:$z=AJa(a,b,g,d,e);if(C()){break _;}j=$z;if(j)return 0;$p=6;case 6:$z=AJa(a,b,h,d,e);if(C()){break _;}e=$z;if(e)return 0;$p=7;case 7:$z=AJa(a,b,c,d,i);if(C()){break _;}e=$z;if(e)return 0;$p=8;case 8:$z=AJa(a,b,c,d,k);if(C()){break _;}c=$z;return c?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AJa(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACH(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return 0;f=c-1|0;$p=2;case 2:$z=ACH(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=c+1|0;$p=3;case 3:$z=ACH(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=e-1|0;$p=4;case 4:$z=ACH(b,c,d,f);if(C()){break _;}f=$z;if(f==a.b)return 1;e=e+1|0;$p=5;case 5:$z=ACH(b,c,d,e);if(C()){break _;}c
=$z;return c!=a.b?0:1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ASW(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANK(b,c,d,e);if(C()){break _;}f=$z;g=f;h=0;i=27;j=c;k=d;l=e;while(h<i){f=Rl(g,h);if(f!==null){m=N(a.fn)*0.800000011920929+0.10000000149011612;n=N(a.fn)*0.800000011920929+0.10000000149011612;o
=N(a.fn)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;if(f.q>0){s=E(a.fn,21)+10|0;if(s>f.q)s=f.q;f.q=f.q-s|0;t=Hd(b,p,q,r,OB(f.bC,s,f.en));t.g=CZ(a.fn)*0.05000000074505806;t.i=CZ(a.fn)*0.05000000074505806+0.20000000298023224;t.h=CZ(a.fn)*0.05000000074505806;$p=3;continue _;}}h=h+1|0;}$p=2;case 2:AL_(a,b,c,d,e);if(C()){break _;}return;case 3:AOt(b,t);if(C()){break _;}a:while(true){if(f.q>0){s=E(a.fn,21)+10|0;if(s>f.q)s=f.q;f.q=f.q-s|0;t=Hd(b,p,q,r,OB(f.bC,s,f.en));t.g=CZ(a.fn)*0.05000000074505806;t.i
=CZ(a.fn)*0.05000000074505806+0.20000000298023224;t.h=CZ(a.fn)*0.05000000074505806;continue _;}while(true){h=h+1|0;if(h>=i)break a;f=Rl(g,h);if(f===null)continue;else break;}m=N(a.fn)*0.800000011920929+0.10000000149011612;n=N(a.fn)*0.800000011920929+0.10000000149011612;o=N(a.fn)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;}$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AGc(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANK(b,c,d,e);if(C()){break _;}g=$z;h=g;i=d+1|0;$p=2;case 2:$z=AAP(b,c,i,e);if(C()){break _;}j=$z;if(j)return 1;k=c-1|0;$p=3;case 3:$z=ACH(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){$p=5;continue _;}l=c+1|0;$p=4;case 4:$z=ACH(b,l,
d,e);if(C()){break _;}j=$z;if(j==a.b){$p=7;continue _;}m=e-1|0;$p=6;continue _;case 5:$z=AAP(b,k,i,e);if(C()){break _;}j=$z;if(j)return 1;l=c+1|0;$p=4;continue _;case 6:$z=ACH(b,c,d,m);if(C()){break _;}j=$z;if(j==a.b){$p=9;continue _;}n=e+1|0;$p=8;continue _;case 7:$z=AAP(b,l,i,e);if(C()){break _;}j=$z;if(j)return 1;m=e-1|0;$p=6;continue _;case 8:$z=ACH(b,c,d,n);if(C()){break _;}j=$z;if(j!=a.b){$p=10;continue _;}$p=11;continue _;case 9:$z=AAP(b,c,i,m);if(C()){break _;}j=$z;if(j)return 1;n=e+1|0;$p=8;continue _;case 10:$z
=ACH(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){g=new Ig;o=B(259);$p=12;continue _;}g=h;$p=13;continue _;case 11:$z=AAP(b,c,i,n);if(C()){break _;}j=$z;if(j)return 1;$p=10;continue _;case 12:$z=ANK(b,k,d,e);if(C()){break _;}p=$z;Ln(g,o,p,h);$p=13;case 13:$z=ACH(b,l,d,e);if(C()){break _;}j=$z;if(j!=a.b){o=g;$p=15;continue _;}o=new Ig;p=B(259);g=g;$p=14;case 14:$z=ANK(b,l,d,e);if(C()){break _;}h=$z;Ln(o,p,g,h);$p=15;case 15:$z=ACH(b,c,d,m);if(C()){break _;}e=$z;if(e==a.b){g=new Ig;p=B(259);$p=16;continue _;}g=o;$p
=17;continue _;case 16:$z=ANK(b,c,d,m);if(C()){break _;}h=$z;Ln(g,p,h,o);$p=17;case 17:$z=ACH(b,c,d,n);if(C()){break _;}e=$z;if(e==a.b){o=new Ig;p=B(259);g=g;$p=18;continue _;}o=g;b=o;$p=19;continue _;case 18:$z=ANK(b,c,d,n);if(C()){break _;}b=$z;Ln(o,p,g,b);b=o;$p=19;case 19:Y_(f,b);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AZV(a){return Bbu();}
function AKX(){P.call(this);}
function Bb1(a,b){var c=new AKX();AU_(c,a,b);return c;}
function AU_(a,b,c){C9(a,b,c,BhH);}
function AE9(a,b,c,d,e){return null;}
function AUc(a){return 0;}
function A5v(a){return 0;}
function A7J(a){return 5;}
function A95(a,b){return 1;}
function AUT(a){return 0;}
function AHL(){P.call(this);}
function BbG(a){var b=new AHL();AZA(b,a);return b;}
function AZA(a,b){D0(a,b,Bhn);a.W=59;}
function AWM(a,b){if(b==1)b=a.W-16|0;else if(!b){L();b=Bfc.ck(0);}else b=b!=2&&b!=4?a.W:a.W+1|0;return b;}
function AG6(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AND(f);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AKW(){F0.call(this);}
function BcK(a,b){var c=new AKW();AZ7(c,a,b);return c;}
function AZ7(a,b,c){LP(a,b,c);a.W=c;Ff(a,1);Bn(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AYY(a,b){L();return b!=Bhe.b?0:1;}
function AJB(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJD(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=XI(b,c,g,e);if(C()){break _;}h=$z;if(h<9)return;$p=3;case 3:$z=AEX(b,c,d,e);if(C()){break _;}h=$z;if(h>=7)return;$p=4;case 4:$z=Zo(a,b,c,d,e);if(C()){break _;}i=$z;if(E(f,100.0/i|0))return;g=h+1|0;$p=5;case 5:AKK(b,c,d,e,g);if(C()){break _;}return;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Zo(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;g=e-1|0;$p=1;case 1:$z=ACH(b,c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=ACH(b,c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=ACH(b,k,d,e);if
(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=ACH(b,m,d,e);if(C()){break _;}n=$z;$p=5;case 5:$z=ACH(b,k,d,g);if(C()){break _;}o=$z;$p=6;case 6:$z=ACH(b,m,d,g);if(C()){break _;}p=$z;$p=7;case 7:$z=ACH(b,m,d,i);if(C()){break _;}q=$z;$p=8;case 8:$z=ACH(b,k,d,i);if(C()){break _;}r=$z;s=l!=a.b&&n!=a.b?0:1;t=h!=a.b&&j!=a.b?0:1;u=o!=a.b&&p!=a.b&&q!=a.b&&r!=a.b?0:1;o=d-1|0;while(k<=m){v=g;if(v<=i){$p=9;continue _;}k=k+1|0;}a:{if(!u){if(!s)break a;if(!t)break a;}f=f/2.0;}return f;case 9:$z=ACH(b,k,o,v);if(C()){break _;}w
=$z;x=0.0;L();if(w==Bhe.b){x=1.0;$p=10;continue _;}if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){continue _;}k=k+1|0;if(k>m)break;v=g;}b:{if(!u){if(!s)break b;if(!t)break b;}f=f/2.0;}return f;case 10:$z=AEX(b,k,o,v);if(C()){break _;}d=$z;if(d>0)x=3.0;if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){$p=9;continue _;}k=k+1|0;if(k>m)break;v=g;}c:{if(!u){if(!s)break c;if(!t)break c;}f=f/2.0;}return f;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function A8J(a,b,c){if(c<0)c=7;return a.W+c|0;}
function A4V(a){return 6;}
function ANM(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;h=c;i=d;j=e;while(g<3){if(E(b.r,15)<=f){k=N(b.r)*0.699999988079071+0.15000000596046448;l=N(b.r)*0.699999988079071+0.15000000596046448;m=N(b.r)*0.699999988079071+0.15000000596046448;n=new E$;o=h+k;p=i+l;q=j+m;r=new Cf;BB();DC(r,
BhP);Hc(n,b,o,p,q,r);n.hb=10;$p=1;continue _;}g=g+1|0;}return;case 1:AOt(b,n);if(C()){break _;}while(true){g=g+1|0;if(g>=3)break;if(E(b.r,15)>f)continue;else{k=N(b.r)*0.699999988079071+0.15000000596046448;l=N(b.r)*0.699999988079071+0.15000000596046448;m=N(b.r)*0.699999988079071+0.15000000596046448;n=new E$;o=h+k;p=i+l;q=j+m;r=new Cf;BB();DC(r,BhP);Hc(n,b,o,p,q,r);n.hb=10;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A1f(a,b,c){var d;c=DT();d=new T;V(d);B7(c,U(Be(H(d,B(260)),b)));if(b!=7)b=(-1);else{BB();b=BhQ.cW;}return b;}
function A5a(a,b){return 1;}
function AQ4(){P.call(this);}
function Bcb(a){var b=new AQ4();A21(b,a);return b;}
function A21(a,b){D0(a,b,BhA);a.W=87;Ff(a,1);Bn(a,0.0,0.0,0.0,1.0,0.9375,1.0);Gv(a,255);}
function ABe(a,b,c,d,e){return Eb(c+0|0,d+0|0,e+0|0,c+1|0,d+1|0,e+1|0);}
function AVi(a){return 0;}
function A1T(a){return 0;}
function A_z(a,b,c){b=R(b,1);return !b&&c>0?a.W-1|0:b?2:a.W;}
function ANq(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(f,5))return;g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;a:while(true){if(g>h){if(!0){$p=1;continue _;}g=7;$p=2;continue _;}l=d;while(l<=i){m=j;if(m<=k)break a;l=l+1|0;}g=g+1|0;}$p=4;continue _;case 1:$z=AEX(b,c,d,e);if(C()){break _;}h=$z;if(h>0){g=h-1|0;$p=3;continue _;}g
=c-0|0;h=c+0|0;m=e-0|0;j=e+0|0;while(true){if(g>h){if(0)return;L();g=Be5.b;$p=5;continue _;}l=m;if(l<=j)break;g=g+1|0;}$p=6;continue _;case 2:AKK(b,c,d,e,g);if(C()){break _;}return;case 3:AKK(b,c,d,e,g);if(C()){break _;}return;case 4:$z=ACa(b,g,l,m);if(C()){break _;}f=$z;if(f===Bf3)g=1;else{m=m+1|0;b:while(true){if(m<=k){continue _;}l=l+1|0;while(l>i){g=g+1|0;if(g>h)break b;l=d;}m=j;}g=0;}if(!g){$p=1;continue _;}g=7;$p=2;continue _;case 5:APK(b,c,d,e,g);if(C()){break _;}return;case 6:$z=ACH(b,g,i,l);if(C())
{break _;}n=$z;L();if(n==Bhd.b)g=1;else{l=l+1|0;while(true){if(l<=j){continue _;}g=g+1|0;if(g>h)break;l=m;}g=0;}if(g)return;L();g=Be5.b;$p=5;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AK3(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(b.r,4))return;L();g=Be5.b;$p=1;case 1:APK(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Yh(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d+1|0;$p=1;case 1:$z=ACa(b,c,f,e);if(C()){break _;}g=$z;if(!g.dt())return;L();f=Be5.b;$p=2;case 2:APK(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AXh(a,b,c){L();return Be5.dT(0,c);}
function AGh(){Eg.call(this);this.wN=0;}
function A42(a,b){var c=new AGh();AT8(c,a,b);return c;}
function AT8(a,b,c){D0(a,b,Bhm);a.wN=c;a.W=45;}
function ACF(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AOS(a,b,c,d,e);if(C()){break _;}f=e-1|0;$p=2;case 2:$z=ACH(b,c,d,f);if(C()){break _;}g=$z;f=e+1|0;$p=3;case 3:$z=ACH(b,c,d,f);if(C()){break _;}f=$z;h=c-1|0;$p=4;case 4:$z=ACH(b,h,d,e);if(C()){break _;}h=$z;i=c+1|0;$p=5;case 5:$z=ACH(b,i,d,e);if(C()){break _;}i=$z;j=3;L();if(BgN.data[g]&&!BgN.data[f])j
=3;if(BgN.data[f]&&!BgN.data[g])j=2;if(BgN.data[h]&&!BgN.data[i])j=5;if(BgN.data[i]&&!BgN.data[h])j=4;$p=6;case 6:AKK(b,c,d,e,j);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AKt(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1){L();return Be8.W;}if(!f){L();return Be8.W;}$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}g=$z;return f!=g?a.W:!a.wN?a.W-1|0:a.W+16|0;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AEA(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.wN)return;$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.0+N(f)*6.0/16.0;j=e+0.5;k=N(f)*0.6000000238418579-0.30000001192092896;if(g==4){l=h-0.5199999809265137;m=i;n=j+k;BX(b,B(256),l,m,n,0.0,0.0,0.0);BX(b,B(257),
l,m,n,0.0,0.0,0.0);}else if(g==5){l=h+0.5199999809265137;m=i;n=j+k;BX(b,B(256),l,m,n,0.0,0.0,0.0);BX(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==2){l=h+k;m=i;n=j-0.5199999809265137;BX(b,B(256),l,m,n,0.0,0.0,0.0);BX(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==3){o=h+k;p=i;q=j+0.5199999809265137;BX(b,B(256),o,p,q,0.0,0.0,0.0);BX(b,B(257),o,p,q,0.0,0.0,0.0);}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AVd(a,b){if(b==1){L();b=Be8.b;}else if(!b){L();b=Be8.b;}else b=b!=3?a.W:a.W-1|0;return b;}
function AG9(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANK(b,c,d,e);if(C()){break _;}b=$z;g=b;$p=2;case 2:APf(f,g);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function A8k(a){return BaQ();}
function VB(){var a=this;Eg.call(a);a.Dr=null;a.DK=0;}
function BhR(a,b,c){var d=new VB();AHJ(d,a,b,c);return d;}
function AHJ(a,b,c,d){D0(a,b,Bhn);a.W=4;a.Dr=c;Bn(a,0.25,0.0,0.25,0.75,1.625,0.75);a.DK=d;}
function AY3(a){return (-1);}
function A6o(a){return 0;}
function A6i(a){return 0;}
function A14(a){var b,c,$$je;a:{try{b=ZC(a.Dr);}catch($$e){$$je=Bh($$e);if($$je instanceof BF){b=$$je;break a;}else{throw $$e;}}return b;}c=new B8;W2(c,b);M(c);}
function AG2(a,b,c,d,e){return 1;}
function A8S(a,b,c){return a.DK;}
function Z6(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAP(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEX(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yr(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APK(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function D$(){var a=this;D.call(a);a.cj=null;a.dI=0;a.dF=0;a.dO=0;}
var BhS=null;var BhT=null;function BhU(){var a=new D$();ANI(a);return a;}
function ANI(a){return;}
function J7(b,c){var d;if(!DZ(BhT,c)){BT(BhS,c,b);BT(BhT,b,c);return;}b=new Ca;d=new T;V(d);Bj(b,U(H(H(d,B(261)),c)));M(b);}
function AFZ(a){return;}
function AMs(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.cj;c=a.dI;d=a.dF;e=a.dO;$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ACq(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.cj;c=a.dI;d=a.dF;e=a.dO;$p=1;case 1:AGJ(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ALe(a,b,c,d){var e,f,g;e=a.dI+0.5-b;f=a.dF+0.5-c;g=a.dO+0.5-d;return e*e+f*f+g*g;}
function AFH(){BhS=De();BhT=De();J7(F(W5),B(262));J7(F(To),B(263));J7(F(Jj),B(264));J7(F(NO),B(265));}
function Jj(){var a=this;D$.call(a);a.gz=null;a.rF=0;}
function BhV(){var a=new Jj();A0f(a);return a;}
function A0f(a){var b,c;b=J(B4,4);c=b.data;c[0]=B(3);c[1]=B(3);c[2]=B(3);c[3]=B(3);a.gz=b;a.rF=(-1);}
function Bd(){var a=this;D.call(a);a.cW=0;a.eZ=0;a.fg=0;a.ti=0;}
var BhW=null;var Bhr=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;var Bh1=null;var Bh2=null;var Bgq=null;var BhN=null;var BhO=null;var Bh3=null;var Bh4=null;var Bh5=null;var Bh6=null;var Bh7=null;var Bh8=null;var Bh9=null;var Bh$=null;var Bh_=null;var Bia=null;var Bib=null;var Bic=null;var Bid=null;var Bie=null;var Bif=null;var Big=null;var Bih=null;var Bii=null;var Bij=null;var Bik=null;var Bil=null;var Bim=null;var Bgs=null;var Bgp=null;var Bgr=null;var Bin=null;var Bio=null;var Bip=null;var Biq
=null;var Bir=null;var BhP=null;var BhQ=null;var Bis=null;var Bit=null;var Biu=null;var Biv=null;var Biw=null;var Bix=null;var Biy=null;var Biz=null;var BiA=null;var BiB=null;var BiC=null;var BiD=null;var BiE=null;var BiF=null;var BiG=null;var BiH=null;var BiI=null;var BiJ=null;var BiK=null;var BiL=null;var BiM=null;var BhM=null;var Bgt=null;var BiN=null;var BiO=null;var BiP=null;var Bhq=null;var BiQ=null;var BiR=null;var BiS=null;var BiT=null;var BiU=null;var BiV=null;function BB(){BB=Br(Bd);A7Z();}
function EW(a){var b=new Bd();Ds(b,a);return b;}
function Ds(a,b){var c,d,e;BB();a.eZ=64;a.fg=32;c=256+b|0;a.cW=c;if(Bhr.data[c]!==null){d=DT();e=new T;V(e);B7(d,U(Be(H(e,B(266)),b)));}Bhr.data[c]=a;}
function Bo(a,b){a.ti=b;return a;}
function A5P(a,b){return a.ti;}
function AGI(a,b,c,d,e,f,g,h){return 0;}
function A$0(a,b,c){return 1.0;}
function ASA(a,b,c,d){return b;}
function A2P(a){return a.eZ;}
function A75(a){return a.fg;}
function AWq(a,b,c){return;}
function A5n(a,b,c,d,e,f){return;}
function A_G(a,b){return 1;}
function AWh(a,b){return 0;}
function A3Y(a,b,c){return;}
function A7Z(){var b;BhW=Bbz();Bhr=J(Bd,1024);BhX=Bo(L2(0,2),82);BhY=Bo(Op(1,2),98);BhZ=Bo(NY(2,2),114);Bh0=Bo(Bbq(3),5);Bh1=Bo(OL(4,4),10);Bh2=Bo(Bax(5),21);Bgq=Bo(EW(6),37);BhN=Bo(EW(7),7);BhO=Bo(EW(8),55);Bh3=Bo(EW(9),23);Bh4=Bo(EW(10),39);Bh5=Bo(NN(11,2),66);Bh6=Bo(NN(12,0),64);Bh7=Bo(L2(13,0),80);Bh8=Bo(Op(14,0),96);Bh9=Bo(NY(15,0),112);Bh$=Bo(NN(16,1),65);Bh_=Bo(L2(17,1),81);Bia=Bo(Op(18,1),97);Bib=Bo(NY(19,1),113);Bic=Bo(NN(20,3),67);Bid=Bo(L2(21,3),83);Bie=Bo(Op(22,3),99);Bif=Bo(NY(23,3),115);Big=Bo(EW(24),
53);Bih=Bo(EW(25),71);Bii=Bo(BcR(26,10),72);Bij=Bo(NN(27,0),68);Bik=Bo(L2(28,0),84);Bil=Bo(Op(29,0),100);Bim=Bo(NY(30,0),116);Bgs=Bo(EW(31),8);Bgp=Bo(EW(32),24);Bgr=Bo(EW(33),40);Bin=Bo(NK(34,0),128);Bio=Bo(NK(35,1),129);Bip=Bo(NK(36,2),130);Biq=Bo(NK(37,3),131);Bir=Bo(NK(38,4),132);b=new V3;L();AHX(b,39,Bhd.b);BhP=Bo(b,9);BhQ=Bo(EW(40),25);Bis=Bo(OL(41,5),41);Bit=Bo(Db(42,0,0,0),0);Biu=Bo(Db(43,0,0,1),16);Biv=Bo(Db(44,0,0,2),32);Biw=Bo(Db(45,0,0,3),48);Bix=Bo(Db(46,1,1,0),1);Biy=Bo(Db(47,1,1,1),17);Biz=Bo(Db(48,
1,1,2),33);BiA=Bo(Db(49,1,1,3),49);BiB=Bo(Db(50,2,2,0),2);BiC=Bo(Db(51,2,2,1),18);BiD=Bo(Db(52,2,2,2),34);BiE=Bo(Db(53,2,2,3),50);BiF=Bo(Db(54,3,3,0),3);BiG=Bo(Db(55,3,3,1),19);BiH=Bo(Db(56,3,3,2),35);BiI=Bo(Db(57,3,3,3),51);BiJ=Bo(Db(58,1,4,0),4);BiK=Bo(Db(59,1,4,1),20);BiL=Bo(Db(60,1,4,2),36);BiM=Bo(Db(61,1,4,3),52);BhM=Bo(EW(62),6);Bgt=Bo(OL(63,3),87);BiN=Bo(OL(64,8),88);BiO=Bo(Bav(65),26);BiP=Bo(OL(66,42),11);Bhq=Bo(Bcw(67),42);BiQ=Bo(A_7(68),43);BiR=Bo(AQb(69,0),74);BiS=Bo(AQb(70,Bf_.b),75);BiT=Bo(AQb(71,
Bga.b),76);BiU=Bo(Bb0(72),135);BiV=Bo(Bc_(73),104);}
function AIM(){P.call(this);}
function Bas(a){var b=new AIM();A2v(b,a);return b;}
function A2v(a,b){D0(a,b,Bhn);a.W=97;Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function A$G(a,b,c){var d,e;if(b&&b!=1){d=Px(a,c);if((d&&d!=2?0:1)^(b>3?0:1))return a.W;b=((d/2|0)+(b&1^d)|0)+((c&4)/4|0)|0;e=a.W-((c&8)*2|0)|0;if(b&1)e= -e;return e;}return a.W;}
function A0$(a){return 0;}
function AXI(a){return 0;}
function AT4(a){return 7;}
function AGG(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHT(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Lo(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ZN(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHT(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=NC(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AHT(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}c=$z;APe(a,Px(a,c));return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function APe(a,b){Bn(a,0.0,0.0,0.0,1.0,2.0,1.0);if(!b)Bn(a,0.0,0.0,0.0,1.0,1.0,0.1875);if(b==1)Bn(a,0.8125,0.0,0.0,1.0,1.0,1.0);if(b==2)Bn(a,0.0,0.0,0.8125,1.0,1.0,1.0);if(b==3)Bn(a,0.0,0.0,0.0,0.1875,1.0,1.0);}
function AJ_(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AD7(a,b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AD7(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;if(!(g&8)){h=d+1|0;$p=2;continue _;}d=d-1|0;$p=3;continue _;case 2:$z=ACH(b,c,h,e);if(C()){break _;}i=$z;if(i!=a.b){h=g^4;$p=4;continue _;}i=(g^4)+8|0;$p=5;continue _;case 3:$z=ACH(b,c,d,e);if(C()){break _;}h=$z;if(h!=a.b)return 1;$p=6;continue _;case 4:AKK(b,c,d,e,h);if
(C()){break _;}Jo(b,c,d-1|0,e,c,d,e);if(BR()>=0.5)Ex(b,c+0.5,d+0.5,e+0.5,B(267),1.0,N(b.r)*0.10000000149011612+0.8999999761581421);else Ex(b,c+0.5,d+0.5,e+0.5,B(268),1.0,N(b.r)*0.10000000149011612+0.8999999761581421);return 1;case 5:AKK(b,c,h,e,i);if(C()){break _;}h=g^4;$p=4;continue _;case 6:AD7(a,b,c,d,e,f);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ACJ(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;if(g&8){f=d-1|0;$p=3;continue _;}h=0;f=d+1|0;$p=2;case 2:$z=ACH(b,c,f,e);if(C()){break _;}i=$z;if(i!=a.b){i=0;$p=4;continue _;}i=d-1|0;$p=6;continue _;case 3:$z=ACH(b,c,f,e);if(C()){break _;}f=$z;if(f==a.b)return;f=0;$p=5;continue _;case 4:APK(b,c,d,e,i);if(C()){break _;}h
=1;i=d-1|0;$p=6;continue _;case 5:APK(b,c,d,e,f);if(C()){break _;}return;case 6:$z=AAP(b,c,i,e);if(C()){break _;}i=$z;if(!i){i=0;$p=7;continue _;}if(!h)return;$p=10;continue _;case 7:APK(b,c,d,e,i);if(C()){break _;}h=1;$p=8;case 8:$z=ACH(b,c,f,e);if(C()){break _;}i=$z;if(i==a.b){i=0;$p=9;continue _;}if(!h)return;$p=10;continue _;case 9:APK(b,c,f,e,i);if(C()){break _;}if(!h)return;$p=10;case 10:Yr(a,b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A8R(a,b,c){if(b&8)b=0;else{BB();b=BiQ.cW;}return b;}
function XO(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHT(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Kl(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Px(a,b){return b&4?b&3:(b-1|0)&3;}
function AKe(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=127)return 0;d=d-1|0;$p=1;case 1:$z=AAP(b,c,d,e);if(C()){break _;}c=$z;return !c?0:1;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ADe(){P.call(this);}
function Bcz(a,b){var c=new ADe();AU5(c,a,b);return c;}
function AU5(a,b,c){C9(a,b,c,BhH);}
function ADt(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bn(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bn(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bn(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bn(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=NC(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AEi(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bn(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bn(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bn(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bn(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Lo(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AXb(a){return 0;}
function A5_(a){return 0;}
function A9O(a){return 8;}
function AN6(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAP(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;e=e+1|0;$p=4;case 4:$z=AAP(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function Yy(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;if(g&&f!=2){if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;continue _;}h=e+1|0;$p=2;case 2:$z=AAP(b,c,d,h);if(C()){break _;}h=$z;if(h)g=2;if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h
=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;case 3:$z=AAP(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;case 4:$z=AAP(b,h,d,e);if(C()){break _;}h=$z;if(h)g=4;if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;case 5:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if(f)g=5;$p=6;case 6:AKK(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AK0(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;h=0;if(g==2){f=e+1|0;$p=2;continue _;}if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 2:$z=AAP(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if
(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 3:$z=AAP(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 4:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 5:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(h)return;$p=6;case 6:Yr(a,b,c,d,e,g);if(C()){break _;}f=0;$p=7;case 7:APK(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function A5J(a,b){return 1;}
function AN9(){P.call(this);}
function Bbc(a,b){var c=new AN9();A_l(c,a,b);return c;}
function A_l(a,b,c){C9(a,b,c,BhH);Bn(a,0.0,0.0,0.0,1.0,0.125,1.0);}
function ACP(a,b,c,d,e){return null;}
function AWO(a){return 0;}
function ALQ(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMy(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Kl(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AMy(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eI(c,d,e);if(C()){break _;}f=$z;if(f>=2&&f<=5)Bn(a,0.0,0.0,0.0,1.0,0.625,1.0);else Bn(a,0.0,0.0,0.0,1.0,0.125,1.0);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A2S(a,b,c){return c<6?a.W:a.W-16|0;}
function A3R(a){return 0;}
function A0P(a){return 9;}
function A2Y(a,b){return 1;}
function AN8(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=AAP(b,c,d,e);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ANS(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=15;$p=1;case 1:AKK(b,c,d,e,f);if(C()){break _;}g=new H7;$p=2;case 2:Y1(g,a,b,c,d,e);if(C()){break _;}$p=3;case 3:Y0(g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AJ3(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEX(b,c,d,e);if(C()){break _;}g=$z;h=0;f=d-1|0;$p=2;case 2:$z=AAP(b,c,f,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==2){f=c+1|0;$p=3;continue _;}if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 3:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if
(!f)h=1;if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 4:$z=AAP(b,f,d,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 5:$z=AAP(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 6:$z=AAP(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(!h)return;$p=7;case 7:$z=AEX(b,c,d,e);if(C())
{break _;}f=$z;$p=8;case 8:Yr(a,b,c,d,e,f);if(C()){break _;}f=0;$p=9;case 9:APK(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ASS(){Bd.call(this);this.nY=0;}
function Bak(a){var b=new ASS();A23(b,a);return b;}
function A23(a,b){Ds(a,b);b=b+256|0;a.nY=b;L();a.ti=Be2.data[b].ck(2);}
function AQC(a,b,c,d,e,f,g,h){var i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;if(!b.q)return 0;i=a.nY;j=0;$p=1;case 1:$z=AIn(d,i,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;L();k=Be2.data[a.nY];j=a.nY;$p=2;case 2:$z=APK(d,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;c=Be2.data[a.nY];$p
=3;case 3:c.vn(d,e,f,g,h);if(C()){break _;}Ex(d,e+0.5,f+0.5,g+0.5,Ks(k.gP),(k.gP.oT+1.0)/2.0,k.gP.pP*0.800000011920929);b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AHV(){M_.call(this);}
function A1Y(){var a=new AHV();A1_(a);return a;}
function A1_(a){var b,c,d,e;b=J(B4,0);c=b.data;R8(B(24));d=c.length;e=0;while(e<d){R8(c[e]);e=e+1|0;}a.wG=B(24);a.Ig=b.o1();}
function AFL(a){var b;b=new Rq;b.li=B(269);b.mZ=BiW;b.rD=BiW;b.H_=a;b.Ca=0.3333333432674408;b.Gm=0.5;return b;}
function AHh(a){var b,c,d,e,f;b=new PZ;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.vH=BiW;b.uY=BiW;e=d.length;if(e&&e>=b.B5){b.HM=a;b.uL=c.o1();b.GQ=2.0;b.B5=4.0;return b;}f=new Ca;Bj(f,B(270));M(f);}
function Nl(){var a=this;Fk.call(a);a.d6=0;a.cr=null;a.kP=null;}
function Zd(b){var c,d;if(b>=0)return A5Q(0,b,$rt_createByteArray(b),0,b,1,0);c=new Ca;d=new T;V(d);Bj(c,U(Be(H(d,B(271)),b)));M(c);}
function AMP(b,c,d){return A5Q(0,b.data.length,b,c,c+d|0,0,0);}
function AAE(b){return AMP(b,0,b.data.length);}
function AKv(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BQ;i=new T;V(i);Bj(h,U(Be(H(Be(H(i,B(272)),g),B(248)),f)));M(h);}if(Ct(a)<d){i=new Gs;O(i);M(i);}if(d<0){i=new BQ;h=new T;V(h);Bj(i,U(H(Be(H(h,B(249)),d),B(250))));M(i);}g=a.bh+a.d6|0;j=0;while(j<d){k=c+1|0;b=a.cr.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.bh=a.bh+d|0;return a;}}b=b.data;h=new BQ;i=new T;V(i);Bj(h,U(H(Be(H(Be(H(i,B(251)),c),B(244)),b.length),B(27))));M(h);}
function W6(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.mS){e=new FS;O(e);M(e);}if(Ct(a)<d){e=new Ha;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BQ;i=new T;V(i);Bj(e,U(Be(H(Be(H(i,B(273)),h),B(248)),g)));M(e);}if(d<0){e=new BQ;i=new T;V(i);Bj(e,U(H(Be(H(i,B(249)),d),B(250))));M(e);}h=a.bh+a.d6|0;j=0;while(j<d){b=a.cr.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.bh=a.bh+d|0;return a;}}b=b.data;i=new BQ;e=new T;V(e);Bj(i,U(H(Be(H(Be(H(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function UV(a,b){return W6(a,b,0,b.data.length);}
function AQa(a,b){a.kP=b;return a;}
function AUb(a){EA(a);return a;}
function A5E(a,b){NE(a,b);return a;}
function A06(a,b){EO(a,b);return a;}
function Ny(){Mp.call(this);}
function Jv(a){var b,c;if(a.bh<a.cy){b=a.bh;a.bh=b+1|0;return RP(a,b);}c=new Gs;O(c);M(c);}
function CK(a,b){var c,d;if(AKF(a)){c=new FS;O(c);M(c);}if(a.bh<a.cy){d=a.bh;a.bh=d+1|0;AD5(a,d,b);return a;}c=new Ha;O(c);M(c);}
function AKF(a){return a.xK;}
function WW(){var a=this;Ny.call(a);a.xK=0;a.yE=0;a.xD=null;}
function RP(a,b){return a.xD.data[b+a.yE|0];}
function AD5(a,b,c){a.xD.data[b+a.yE|0]=c;}
function A8O(a){return a.xK;}
function ARB(){var a=this;Nl.call(a);a.GB=0;a.mS=0;}
function A5Q(a,b,c,d,e,f,g){var h=new ARB();ATy(h,a,b,c,d,e,f,g);return h;}
function ATy(a,b,c,d,e,f,g,h){K7(a,c);a.kP=BgA;a.d6=b;a.cr=d;a.bh=e;a.cy=f;a.GB=g;a.mS=h;}
function AL0(a){var b,c,d,e;if(a.bh>=a.cy){b=new Gs;O(b);M(b);}c=a.cr.data;d=a.d6;e=a.bh;a.bh=e+1|0;return c[d+e|0];}
function A1H(a){return a.mS;}
function K9(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.cy){c=a.cr.data[a.d6+b|0]&255;d=a.cr.data[(a.d6+b|0)+1|0]&255;e=a.cr.data[(a.d6+b|0)+2|0]&255;f=a.cr.data[(a.d6+b|0)+3|0]&255;if(a.kP!==BgA)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BQ;h=new T;V(h);Bj(g,U(H(Be(H(Be(H(h,B(274)),b),B(244)),a.cy-3|0),B(27))));M(g);}
function ABg(a,b,c){var d,e;if(a.mS){d=new FS;O(d);M(d);}if(b>=0&&(b+3|0)<a.cy){if(a.kP!==BgA){a.cr.data[a.d6+b|0]=c<<24>>24;a.cr.data[(a.d6+b|0)+1|0]=c>>8<<24>>24;a.cr.data[(a.d6+b|0)+2|0]=c>>16<<24>>24;a.cr.data[(a.d6+b|0)+3|0]=c>>24<<24>>24;}else{a.cr.data[a.d6+b|0]=c>>24<<24>>24;a.cr.data[(a.d6+b|0)+1|0]=c>>16<<24>>24;a.cr.data[(a.d6+b|0)+2|0]=c>>8<<24>>24;a.cr.data[(a.d6+b|0)+3|0]=c<<24>>24;}return a;}e=new BQ;d=new T;V(d);Bj(e,U(H(Be(H(Be(H(d,B(274)),b),B(244)),a.cy-3|0),B(27))));M(e);}
function S_(a){var b,c;b=Ct(a)/4|0;if(a.kP!==BgA){c=new Pn;OW(c,a.d6+a.bh|0,b,a,0,b,a.mS);return c;}c=new VU;OW(c,a.d6+a.bh|0,b,a,0,b,a.mS);return c;}
function VA(){}
function Mc(){Fk.call(this);}
function AHC(b){var c,d;if(b>=0)return AZY(0,b,$rt_createCharArray(b),0,b,0);c=new Ca;d=new T;V(d);Bj(c,U(Be(H(d,B(271)),b)));M(c);}
function ANf(b,c,d){return AZY(0,b.data.length,b,c,c+d|0,0);}
function Pb(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BQ;i=new T;V(i);Bj(h,U(Be(H(Be(H(i,B(275)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gs;O(h);M(h);}if(d<0){h=new BQ;i=new T;V(i);Bj(h,U(H(Be(H(i,B(249)),d),B(250))));M(h);}g=a.bh;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=AO2(a,g);j=j+1|0;c=k;g=f;}a.bh=a.bh+d|0;return a;}}b=b.data;i=new BQ;h=new T;V(h);Bj(i,U(H(Be(H(Be(H(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AE4(a,b){return Pb(a,b,0,b.data.length);}
function ASH(a,b,c,d){var e,f,g,h,i,j,k;if(Xx(a)){e=new FS;O(e);M(e);}if(Ct(a)<d){e=new Ha;O(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BQ;i=new T;V(i);Bj(e,U(Be(H(Be(H(i,B(276)),h),B(248)),g)));M(e);}if(d<0){e=new BQ;i=new T;V(i);Bj(e,U(H(Be(H(i,B(249)),d),B(250))));M(e);}h=a.bh;j=0;while(j<d){k=h+1|0;g=c+1|0;VD(a,h,f[c]);j=j+1|0;h=k;c=g;}a.bh=a.bh+d|0;return a;}}b=b.data;i=new BQ;e=new T;V(e);Bj(i,U(H(Be(H(Be(H(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AJs(a,b,c,d){var e,f,g,h,i,j;if(Xx(a)){b=new FS;O(b);M(b);}e=d-c|0;if(Ct(a)<e){b=new Ha;O(b);M(b);}if(c>=0&&c<Bg(b)){if(d>Bg(b)){f=new BQ;g=new T;V(g);Bj(f,U(Be(H(Be(H(g,B(276)),d),B(277)),Bg(b))));M(f);}if(c>d){b=new BQ;f=new T;V(f);Bj(b,U(Be(H(Be(H(f,B(278)),c),B(279)),d)));M(b);}h=a.bh;while(c<d){i=h+1|0;j=c+1|0;VD(a,h,Y(b,c));h=i;c=j;}a.bh=a.bh+e|0;return a;}g=new BQ;f=new T;V(f);Bj(g,U(H(Be(H(Be(H(f,B(278)),c),B(244)),Bg(b)),B(27))));M(g);}
function NB(a,b){return AJs(a,b,0,Bg(b));}
function AJQ(a){return 1;}
function APx(a){return a.mj;}
function AYQ(a){Gu(a);return a;}
function AYj(a,b){EO(a,b);return a;}
function Qc(){B2.call(this);}
function BiX(){var a=new Qc();A9i(a);return a;}
function A9i(a){O(a);}
function Ow(){B_.call(this);}
function BiY(){var a=new Ow();A0a(a);return a;}
function A0a(a){return;}
function A4$(a){return 0;}
function A5O(a){return 0;}
function ATD(a){return 0;}
function Mi(){B_.call(this);}
function BiZ(){var a=new Mi();ATC(a);return a;}
function ATC(a){return;}
function A_U(a){return 1;}
function AZo(a){return 0;}
function Oi(){B_.call(this);}
function Bi0(){var a=new Oi();A7M(a);return a;}
function A7M(a){return;}
function A7b(a){return 0;}
function A$j(a){return 0;}
function AVk(a){return 0;}
function F_(){var a=this;Bd.call(a);a.u4=null;a.yX=0.0;a.A0=0;a.JH=0;}
function Bi1(a,b,c,d){var e=new F_();MA(e,a,b,c,d);return e;}
function MA(a,b,c,d,e){Ds(a,b);a.yX=4.0;a.JH=d;a.u4=e;a.eZ=1;a.fg=32<<d;if(d==3)a.fg=a.fg*2|0;a.yX=(d+1|0)*2|0;a.A0=c+d|0;}
function A8$(a,b,c){var d;d=0;while(d<a.u4.data.length){if(a.u4.data[d]===c)return a.yX;d=d+1|0;}return 1.0;}
function A7k(a,b,c){FJ(b,2);}
function AWH(a,b,c,d,e,f){FJ(b,1);}
function AXp(a,b){return a.A0;}
function O7(){F_.call(this);}
var Bi2=null;function Bch(){Bch=Br(O7);A9r();}
function L2(a,b){var c=new O7();AF3(c,a,b);return c;}
function AF3(a,b,c){Bch();MA(a,b,1,c,Bi2);}
function A9r(){var b,c;b=J(P,4);c=b.data;L();c[0]=Be4;c[1]=Be5;c[2]=Bfn;c[3]=Bfo;Bi2=b;}
function VE(){F_.call(this);this.nK=0;}
var Bi3=null;function Bck(){Bck=Br(VE);A15();}
function Op(a,b){var c=new VE();AN2(c,a,b);return c;}
function AN2(a,b,c){Bck();MA(a,b,2,c,Bi3);a.nK=c;}
function A5B(a,b){L();return b===Bfy?(a.nK!=3?0:1):b!==Bhb&&b!==Bha?(b!==Bfv&&b!==Bft?(b!==Bfu&&b!==Bfs?(b.b$===Bhm?1:b.b$!==BhB?0:1):a.nK<1?0:1):a.nK<2?0:1):a.nK<2?0:1;}
function A15(){var b,c;b=J(P,12);c=b.data;L();c[0]=Bfa;c[1]=Be6;c[2]=Be7;c[3]=Be8;c[4]=Bfh;c[5]=Bfs;c[6]=Bfu;c[7]=Bfr;c[8]=Bfv;c[9]=Bft;c[10]=Bha;c[11]=Bhb;Bi3=b;}
function WA(){F_.call(this);}
var Bi4=null;function BbW(){BbW=Br(WA);AUo();}
function NY(a,b){var c=new WA();ANR(c,a,b);return c;}
function ANR(a,b,c){BbW();MA(a,b,3,c,Bi4);}
function AUo(){var b,c;b=J(P,4);c=b.data;L();c[0]=Bfc;c[1]=Bfw;c[2]=Bfd;c[3]=Bg$;Bi4=b;}
function AFe(){Bd.call(this);}
function Bbq(a){var b=new AFe();AYJ(b,a);return b;}
function AYJ(a,b){Ds(a,b);a.eZ=1;a.fg=64;}
function AJX(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;$p=1;case 1:$z=ACH(d,e,f,g);if(C()){break _;}i=$z;if(i){FJ(b,1);return 1;}j=e+0.5;k=f+0.5;l=g+0.5;BB();Ex(d,j,k,l,B(280),1.0,N(BhW)*0.4000000059604645+0.800000011920929);L();h=BgC.b;$p
=2;case 2:APK(d,e,f,g,h);if(C()){break _;}FJ(b,1);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function L6(){Bd.call(this);this.Ad=0;}
function OL(a,b){var c=new L6();Z$(c,a,b);return c;}
function Z$(a,b,c){Ds(a,b);a.Ad=c;a.eZ=1;}
function Qg(a,b,c,d){b.q=b.q-1|0;UY(d,a.Ad);return b;}
function AO8(){Bd.call(this);}
function Bax(a){var b=new AO8();A2H(b,a);return b;}
function A2H(a,b){Ds(a,b);a.eZ=1;}
function AGQ(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.K;BB();if(!AG4(e,Bgq.cW))return b;Di(c,d,B(225),1.0,1.0/(N(BhW)*0.4000000059604645+0.800000011920929));e=ATq(c,d);$p=1;case 1:AOt(c,e);if(C()){break _;}return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ALo(){Bd.call(this);this.Ai=0;}
function NN(a,b){var c=new ALo();A$4(c,a,b);return c;}
function A$4(a,b,c){Ds(a,b);a.eZ=1;a.fg=32<<c;a.Ai=4+(c*2|0)|0;}
function A0O(a,b,c){return 1.5;}
function A79(a,b,c){FJ(b,1);}
function AYk(a,b,c,d,e,f){FJ(b,2);}
function A2R(a,b){return a.Ai;}
function AOo(){L6.call(this);}
function BcR(a,b){var c=new AOo();A3g(c,a,b);return c;}
function A3g(a,b,c){Z$(a,b,c);}
function APJ(a,b,c,d){Qg(a,b,c,d);b=new Cf;BB();DC(b,Bih);return b;}
function ANL(){Bd.call(this);}
function NK(a,b){var c=new ANL();AT3(c,a,b);return c;}
function AT3(a,b,c){Ds(a,b);a.eZ=1;a.fg=32<<c;}
function AQ8(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACH(d,e,f,g);if(C()){break _;}i=$z;h=f+1|0;$p=2;case 2:a:{$z=ACa(d,e,h,g);if(C()){break _;}j=$z;if(!j.dt()){L();if(i==Be4.b)break a;}L();if(i!=Be5.b)return 0;}L();k=Bhe;l=e;m
=l+0.5;n=f;o=n+0.5;p=g;Ex(d,m,o,p+0.5,Ks(k.gP),(k.gP.oT+1.0)/2.0,k.gP.pP*0.800000011920929);h=k.b;$p=3;case 3:APK(d,e,f,g,h);if(C()){break _;}FJ(b,1);if(!E(d.r,8)&&i==Be4.b){q=1;r=0;m=n+1.2000000476837158;if(r<q){s=N(d.r)*0.699999988079071+0.15000000596046448;n=N(d.r)*0.699999988079071+0.15000000596046448;t=new E$;o=l+s;u=p+n;c=new Cf;BB();DC(c,BhP);Hc(t,d,o,m,u,c);t.hb=10;$p=4;continue _;}}return 1;case 4:AOt(d,t);if(C()){break _;}r=r+1|0;if(r>=q)return 1;s=N(d.r)*0.699999988079071+0.15000000596046448;n=N(d.r)
*0.699999988079071+0.15000000596046448;t=new E$;o=l+s;u=p+n;c=new Cf;BB();DC(c,BhP);Hc(t,d,o,m,u,c);t.hb=10;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function V3(){Bd.call(this);this.z3=0;}
function Bi5(a,b){var c=new V3();AHX(c,a,b);return c;}
function AHX(a,b,c){Ds(a,b);a.z3=c;}
function AFB(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;$p=1;case 1:$z=ACH(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bhe.b)return 0;f=f+1|0;h=a.z3;$p=2;case 2:APK(d,e,f,g,h);if(C()){break _;}b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function F2(){var a=this;Bd.call(a);a.Ij=0;a.Ac=0;a.zu=0;a.BV=0;}
var Bi6=null;var Bi7=null;function Db(a,b,c,d){var e=new F2();ABB(e,a,b,c,d);return e;}
function ABB(a,b,c,d,e){Ds(a,b);a.Ij=c;a.Ac=e;a.BV=d;a.zu=Bi6.data[e];a.fg=(Bi7.data[e]*3|0)<<c;a.eZ=1;}
function AR0(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;Bi6=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;Bi7=b;}
function X4(){Bd.call(this);}
function Bav(a){var b=new X4();AZr(b,a);return b;}
function AZr(a,b){Ds(a,b);a.fg=64;}
function ACo(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)return 0;if(h==1)return 0;i=0;if(h==4)i=1;if(h==3)i=2;if(h==5)i=3;j=new IF;FA(j,d);j.ry=0;j.dG=0;j.c4=0.0;D1(j,0.5,0.5);j.nu=e;j.ES=f;j.nB=g;c=Ch();k=Bi8.o1().data;e=k.length;f=0;if(f<e){l=k[f];j.dQ=l;JW(j,i);$p=1;continue _;}if(c.p>0)j.dQ=Z(c,E(j.n,c.p));JW(j,i);$p=2;continue _;case 1:$z
=ZW(j);if(C()){break _;}g=$z;if(g)S(c,l);f=f+1|0;if(f<e){l=k[f];j.dQ=l;JW(j,i);continue _;}if(c.p>0)j.dQ=Z(c,E(j.n,c.p));JW(j,i);$p=2;case 2:$z=ZW(j);if(C()){break _;}e=$z;if(!e)return 1;$p=3;case 3:AOt(d,j);if(C()){break _;}b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AHH(){Bd.call(this);}
function Bcw(a){var b=new AHH();A7W(b,a);return b;}
function A7W(a,b){Ds(a,b);a.fg=64;a.eZ=1;}
function Yo(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bhh;$p=1;case 1:$z=i.fX(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;h=Bhh.b;$p=2;case 2:APK(d,e,f,g,h);if(C()){break _;}h=K((c.v+180.0)*16.0/360.0-0.5)&15;$p=3;case 3:AKK(d,e,f,g,h);if(C()){break _;}b.q=b.q-1|0;$p=4;case 4:$z=ANK(d,e,f,g);if(C()){break _;}b=$z;b=b;$p=5;case 5:AJm(c,b);if
(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AJq(){Bd.call(this);}
function A_7(a){var b=new AJq();A3m(b,a);return b;}
function A3m(a,b){Ds(a,b);a.fg=64;a.eZ=1;}
function AEn(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bhi;$p=1;case 1:$z=i.fX(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;j=K((c.v+180.0)*4.0/360.0-0.5)&3;k=0;l=0;if(!j)l=1;if(j==1)k=(-1);if(j==2)l=(-1);if(j==3)k=1;m=e-k|0;n=g-l|0;$p=2;case 2:$z
=AAP(d,m,f,n);if(C()){break _;}h=$z;h=!h?0:1;o=f+1|0;$p=3;case 3:$z=AAP(d,m,o,n);if(C()){break _;}p=$z;p=h+(!p?0:1)|0;h=e+k|0;k=g+l|0;$p=4;case 4:$z=AAP(d,h,f,k);if(C()){break _;}l=$z;l=!l?0:1;$p=5;case 5:$z=AAP(d,h,o,k);if(C()){break _;}q=$z;q=l+(!q?0:1)|0;$p=6;case 6:$z=ACH(d,m,f,n);if(C()){break _;}l=$z;if(l!=Bhi.b){$p=7;continue _;}n=1;$p=8;continue _;case 7:$z=ACH(d,m,o,n);if(C()){break _;}m=$z;n=m==Bhi.b?1:0;$p=8;case 8:$z=ACH(d,h,f,k);if(C()){break _;}l=$z;if(l!=Bhi.b){$p=9;continue _;}r=0;if(n&&!1)r
=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bhi.b;$p=10;continue _;case 9:$z=ACH(d,h,o,k);if(C()){break _;}h=$z;m=h==Bhi.b?1:0;r=0;if(n&&!m)r=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bhi.b;$p=10;case 10:APK(d,e,f,g,h);if(C()){break _;}$p=11;case 11:AKK(d,e,f,g,j);if(C()){break _;}f=Bhi.b;$p=12;case 12:APK(d,e,o,g,f);if(C()){break _;}f=j+8|0;$p=13;case 13:AKK(d,e,o,g,f);if(C()){break _;}b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AR2(){Bd.call(this);this.ps=0;}
function AQb(a,b){var c=new AR2();A0x(c,a,b);return c;}
function A0x(a,b,c){Ds(a,b);a.eZ=1;a.fg=64;a.ps=c;}
function AIc(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.R+(d.J-d.R)*1.0;f=d.O+(d.v-d.O)*1.0;g=BY(d.bT+(d.d-d.bT)*1.0,d.cS+(d.j-d.cS)*1.0,d.bS+(d.e-d.bS)*1.0);h= -f*0.01745329238474369-3.1415927410125732;i=BC(h);h=Bp(h);j= -e*0.01745329238474369;k= -BC(j);l=Dl(g,h*k*5.0,Bp(j)
*5.0,i*k*5.0);m=a.ps?0:1;$p=1;case 1:$z=AFg(c,g,l,m);if(C()){break _;}n=$z;if(n===null)return b;if(n.k$)return b;m=n.ic;o=n.id;p=n.ie;if(!a.ps){$p=2;continue _;}if(!n.hM)o=o+(-1)|0;if(n.hM==1)o=o+1|0;if(n.hM==2)p=p+(-1)|0;if(n.hM==3)p=p+1|0;if(n.hM==4)m=m+(-1)|0;if(n.hM==5)m=m+1|0;$p=8;continue _;case 2:$z=ACa(c,m,o,p);if(C()){break _;}g=$z;if(g!==Bf3){$p=3;continue _;}$p=4;continue _;case 3:$z=ACa(c,m,o,p);if(C()){break _;}d=$z;if(d!==Bf4)return b;$p=5;continue _;case 4:$z=AEX(c,m,o,p);if(C()){break _;}q=$z;if
(q){$p=3;continue _;}q=0;$p=6;continue _;case 5:$z=AEX(c,m,o,p);if(C()){break _;}q=$z;if(q)return b;q=0;$p=7;continue _;case 6:APK(c,m,o,p,q);if(C()){break _;}b=new Cf;BB();DC(b,BiS);return b;case 7:APK(c,m,o,p,q);if(C()){break _;}b=new Cf;BB();DC(b,BiT);return b;case 8:$z=ACH(c,m,o,p);if(C()){break _;}q=$z;if(q){$p=10;continue _;}q=a.ps;r=0;$p=9;case 9:AJb(c,m,o,p,q,r);if(C()){break _;}b=new Cf;BB();DC(b,BiR);return b;case 10:$z=ACa(c,m,o,p);if(C()){break _;}d=$z;if(d.dt())return b;q=a.ps;r=0;$p=9;continue _;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function APl(){Bd.call(this);}
function Bb0(a){var b=new APl();AXq(b,a);return b;}
function AXq(a,b){Ds(a,b);a.eZ=1;}
function ADk(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACH(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bhj.b)return 0;c=new Gf;j=e+0.5;k=f+0.5;l=g+0.5;FA(c,d);c.BI=J(Cf,36);c.iW=0;c.kG=0;c.oR=1;c.kQ=0;c.mG=1;D1(c,0.9800000190734863,0.699999988079071);c.c4=c.eN/2.0;c.ja=0;CU(c,j,k+c.c4,l);c.g=0.0;c.i=0.0;c.h=0.0;c.bT=j;c.cS=k;c.bS
=l;$p=2;case 2:AOt(d,c);if(C()){break _;}b.q=b.q-1|0;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ARt(){Bd.call(this);}
function Bc_(a){var b=new ARt();AWR(b,a);return b;}
function AWR(a,b){Ds(a,b);a.eZ=1;a.fg=64;}
function AGO(a,b,c){var d;if(c instanceof IB){d=c;if(!d.qB){d.qB=1;b.q=b.q-1|0;}}}
function AWD(a,b,c){AGO(a,b,c);}
function Oe(){}
function AGz(){var a=this;D.call(a);a.d0=Long_ZERO;a.eU=Long_ZERO;}
function A97(){var a=new AGz();A0v(a);return a;}
function A0v(a){a.d0=Long_fromInt(1);a.eU=Long_ZERO;}
function ATc(a,b){a.d0=Long_and(b,Long_fromInt(65535));a.eU=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AZN(a){a.d0=Long_fromInt(1);a.eU=Long_ZERO;}
function AUi(a){return Long_or(Long_shl(a.eU,16),a.d0);}
function A8w(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.d0=Long_add(a.d0,Long_fromInt(b[c]&255));a.eU=Long_add(a.eU,a.d0);a.d0=Long_rem(a.d0,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.d0;d=c+1|0;a.d0=Long_add(j,Long_fromInt(i[c]&255));a.eU=Long_add(a.eU,a.d0);h=e;c=d;}a.d0=Long_rem(a.d0,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.d0;e=c+1|0;a.d0=Long_add(j,Long_fromInt(i[c]&255));a.eU=Long_add(a.eU,a.d0);f=d;c=e;}a.d0=Long_rem(a.d0,Long_fromInt(65521));a.eU=Long_rem(a.eU,Long_fromInt(65521));}
function Sk(){BF.call(this);}
function Bi9(){var a=new Sk();A6U(a);return a;}
function A6U(a){O(a);}
function NG(){D.call(this);this.GU=null;}
var BgA=null;var Bi$=null;function AVS(a){var b=new NG();AIi(b,a);return b;}
function AIi(a,b){a.GU=b;}
function ACS(){return BgA;}
function ASE(){BgA=AVS(B(281));Bi$=AVS(B(282));}
function J$(){}
function L3(){var a=this;D.call(a);a.gk=null;a.e6=null;}
function A5f(a,b){var c,d;if(a===b)return 1;if(!Ss(b,J$))return 0;a:{b:{c:{c=b;if(a.gk===null){if(c.gk!==null)break c;}else if(!a.gk.eo(c.gk))break c;if(a.e6===null){if(c.e6!==null)break c;break b;}if(a.e6.eo(c.e6))break b;}d=0;break a;}d=1;}return d;}
function AW$(a){return a.gk;}
function A2y(a){return a.e6;}
function A2c(a){return (a.gk===null?0:a.gk.fl())^(a.e6===null?0:a.e6.fl());}
function IE(){var a=this;L3.call(a);a.pY=0;a.eE=null;}
function BQ(){B8.call(this);}
function Bi_(){var a=new BQ();AUN(a);return a;}
function AUN(a){O(a);}
function IX(){BQ.call(this);}
function Bja(){var a=new IX();A1d(a);return a;}
function A1d(a){O(a);}
function GF(){}
function WH(){D.call(this);this.z9=null;}
function AJg(a){var b,c,d,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.z9;try{BfB=BfB+1|0;Ft(b);$p=1;continue _;}catch($$e){$$je=Bh($$e);c=$$je;}d=b.mU;$p=2;continue _;case 1:a:{try{b.kw();if(C()){break _;}}catch($$e){$$je=Bh($$e);c=$$je;break a;}c=b.mU;$p=3;continue _;}d=b.mU;$p=2;case 2:AEe(d);if(C()){break _;}a:{try{Xo(b.mU);N9(d);break a;}catch($$e){$$je=Bh($$e);b=$$je;}N9(d);M(b);}b.wQ=0;BfB=BfB-1|0;Ft(Bfz);M(c);case 3:AEe(c);if
(C()){break _;}a:{try{Xo(b.mU);N9(c);break a;}catch($$e){$$je=Bh($$e);b=$$je;}N9(c);M(b);}b.wQ=0;BfB=BfB-1|0;Ft(Bfz);return;default:E_();}}C3().s(a,b,c,d,$p);}
function FE(){B2.call(this);}
function Bjb(){var a=new FE();AXl(a);return a;}
function AXl(a){O(a);}
function ER(){var a=this;D.call(a);a.hV=null;a.vI=0.0;a.vJ=0.0;}
function G3(a,b,c,d,e){var f=new ER();AS1(f,a,b,c,d,e);return f;}
function AS1(a,b,c,d,e,f){a.hV=WB(b,c,d);a.vI=e;a.vJ=f;}
function I_(a,b,c){var d;d=new ER;d.hV=a.hV;d.vI=b;d.vJ=c;return d;}
function Fw(){var a=this;D.call(a);a.hB=null;a.Ff=0;}
function Bjc(a,b,c,d,e){var f=new Fw();Hg(f,a,b,c,d,e);return f;}
function Hg(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.Ff=0;a.hB=b;a.Ff=g.length;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=I_(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=I_(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=I_(h,k,l);g[3]=I_(g[3],i,l);}
function AC8(a){var b,c,d;b=J(ER,a.hB.data.length);c=b.data;d=0;while(d<a.hB.data.length){c[d]=a.hB.data[(a.hB.data.length-d|0)-1|0];d=d+1|0;}a.hB=b;}
function APQ(a,b,c){var d,e,f,g;d=Qj(a.hB.data[1].hV,a.hB.data[0].hV);e=CD(AB4(Qj(a.hB.data[1].hV,a.hB.data[2].hV),d));Bz(b);Cj(e.x,e.z,e.w);f=0;while(f<4){g=a.hB.data[f];G(b,g.hV.x*c,g.hV.z*c,g.hV.w*c,g.vI,g.vJ);f=f+1|0;}Bt(b);}
function L1(){var a=this;D.call(a);a.bQ=0;a.oz=0;a.rW=Long_ZERO;a.bv=Long_ZERO;a.oK=0;a.dX=0;a.yb=0;a.iF=null;a.E=null;a.eK=0;a.iK=0;a.xZ=null;a.cI=null;a.f1=null;}
var Bjd=null;function AFY(a){var b;if(a.E===null)return (-2);b=a.E;a.E.nw=Long_ZERO;b.G=Long_ZERO;a.E.b8=null;a.bQ=14;a.iK=(-1);JJ(a.iF);return 0;}
function AF5(a){if(a.iF!==null)S4(a.iF);return 0;}
function XK(a,b){var c,d,e,f;a.E.b8=null;a.iF=null;a.dX=0;if(b<0)b= -b;else if(b&1073741824){a.dX=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.dX=4;b=b&15;}else{a.dX=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.iF!==null&&a.yb!=b){S4(a.iF);a.iF=null;}a.yb=b;c=new KS;d=a.E;b=1<<b;c.sh=$rt_createIntArray(1);c.oJ=$rt_createIntArray(1);c.m3=$rt_createIntArray(1);c.m1=$rt_createIntArray(1);c.vZ=J($rt_arraycls($rt_intcls()),1);c.v0=J($rt_arraycls($rt_intcls()),1);c.vl=$rt_createIntArray(1);c.vt=$rt_createIntArray(1);c.xi
=BaN();c.y=d;e=new LT;f=c.y;e.k6=0;e.ba=f;e.C=c;c.pI=e;c.ko=$rt_createIntArray(4320);c.c0=$rt_createByteArray(b);c.cP=b;c.rn=d.jA.dX?1:0;c.dJ=0;JJ(c);a.iF=c;AFY(a);return 0;}AF5(a);return (-2);}
function AGS(a,b){var c,d,e,f,g,h,i,$$je;if(a.E!==null&&a.E.ch!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bQ){case 6:a.bQ=13;a.E.b8=B(283);a.oK=0;return (-2);case 7:d=ZB(a.iF,d);if(d==(-3)){a.bQ=13;a.oK=0;continue i;}if(!d)d=c;if(d!=1)break i;a.rW=a.E.gb.yR();JJ(a.iF);if(!a.dX){a.bQ=12;d=c;continue i;}a.bQ=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=F6(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof DY)
{e=$$je;return e.hJ;}else{throw $$e;}}a.eK=a.bv.lo&65535;if((a.eK&255)!=8){a.E.b8=B(284);a.bQ=13;continue i;}if(a.eK&57344){a.E.b8=B(285);a.bQ=13;continue i;}if(a.eK&512)Il(a,2,a.bv);a.bQ=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.E.M)return d;e=a.E;e.M=e.M
-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.ch.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bQ=9;d=c;}if(!a.E.M)return d;e=a.E;e.M=e.M-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.ch.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bQ=10;d=c;}if(!a.E.M)return d;e=a.E;e.M=e.M-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.ch.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bQ=11;d=c;}if(!a.E.M)return d;e=a.E;e.M=e.M-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.ch.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.eK)a.bv=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bv,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bv,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.rW.lo!=
a.bv.lo)a.E.b8=B(286);else if(a.eK&&a.cI!==null)a.cI.HN=a.bv;a.bQ=15;d=c;}if(!(a.dX&&a.eK)){if(a.E.b8===null)break f;if(!DB(a.E.b8,B(286)))break f;a.bQ=13;a.oK=5;continue i;}try{d=F6(a,4,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof DY){e=$$je;return e.hJ;}else{throw $$e;}}if(a.E.b8!==null&&DB(a.E.b8,B(286))){a.bQ=13;a.oK=5;continue i;}if(Long_eq(a.bv,Long_and(a.E.nw,new Long(4294967295, 0)))){a.E.b8=null;break f;}a.E.b8=B(287);a.bQ=13;continue i;}if(!a.dX){a.bQ=7;continue i;}try{d=F6(a,2,d,c);}catch($$e)
{$$je=Bh($$e);if($$je instanceof DY){e=$$je;return e.hJ;}else{throw $$e;}}if(!(a.dX!=4&&!(a.dX&2))&&Long_eq(a.bv,Long_fromInt(35615))){if(a.dX==4)a.dX=2;a.E.gb=AWA();Il(a,2,a.bv);if(a.cI===null)a.cI=BcC();a.bQ=23;continue i;}if(a.dX&2){a.bQ=13;a.E.b8=B(288);continue i;}a.eK=0;a.oz=a.bv.lo&255;h=Long_shr(a.bv,8).lo&255;if(!(a.dX&1&&!(((a.oz<<8)+h|0)%31|0))&&(a.oz&15)!=8){if(a.dX!=4){a.bQ=13;a.E.b8=B(288);continue i;}e=a.E;e.B=e.B-2|0;e=a.E;e.M=e.M+2|0;e=a.E;e.G=Long_sub(e.G,Long_fromInt(2));a.dX=0;a.bQ=7;continue i;}if
((a.oz&15)!=8){a.bQ=13;a.E.b8=B(284);continue i;}if(a.dX==4)a.dX=1;if(((a.oz>>4)+8|0)>a.yb){a.bQ=13;a.E.b8=B(289);continue i;}a.E.gb=A97();if(h&32){a.bQ=2;break d;}a.bQ=7;continue i;}break m;}try{d=F6(a,4,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof DY){e=$$je;return e.hJ;}else{throw $$e;}}if(a.cI!==null)a.cI.H6=a.bv;if(a.eK&512)Il(a,4,a.bv);a.bQ=17;}try{d=F6(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof DY){e=$$je;return e.hJ;}else{throw $$e;}}if(a.cI!==null){a.cI.Jc=a.bv.lo&255;a.cI.Bp=a.bv.lo>>
8&255;}if(a.eK&512)Il(a,2,a.bv);a.bQ=18;}if(a.eK&1024){try{d=F6(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof DY){e=$$je;return e.hJ;}else{throw $$e;}}if(a.cI!==null)a.cI.pt=$rt_createByteArray(a.bv.lo&65535);if(a.eK&512)Il(a,2,a.bv);}else if(a.cI!==null)a.cI.pt=null;a.bQ=19;}if(a.eK&1024)x:{try{d=AN1(a,d,c);if(a.cI===null)break x;f=Id(a.f1);i=f.data;a.f1=null;b=i.length;if(b!=a.cI.pt.data.length){a.E.b8=B(290);a.bQ=13;continue i;}Dj(f,0,a.cI.pt,0,b);break x;}catch($$e){$$je=Bh($$e);if($$je instanceof DY)
{e=$$je;return e.hJ;}else{throw $$e;}}}else if(a.cI!==null)a.cI.pt=null;a.bQ=20;}y:{if(a.eK&2048){z:{try{d=PS(a,d,c);if(a.cI===null)break z;a.cI.y8=Id(a.f1);break z;}catch($$e){$$je=Bh($$e);if($$je instanceof DY){e=$$je;break h;}else{throw $$e;}}}try{a.f1=null;break y;}catch($$e){$$je=Bh($$e);if($$je instanceof DY){e=$$je;break h;}else{throw $$e;}}}else if(a.cI!==null)a.cI.y8=null;}a.bQ=21;}ba:{if(a.eK&4096){bb:{try{d=PS(a,d,c);if(a.cI===null)break bb;a.cI.AR=Id(a.f1);break bb;}catch($$e){$$je=Bh($$e);if($$je instanceof DY)
{e=$$je;break g;}else{throw $$e;}}}try{a.f1=null;break ba;}catch($$e){$$je=Bh($$e);if($$je instanceof DY){e=$$je;break g;}else{throw $$e;}}}else if(a.cI!==null)a.cI.AR=null;}a.bQ=22;}if(a.eK&512){try{d=F6(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof DY){e=$$je;return e.hJ;}else{throw $$e;}}if(a.cI!==null)a.cI.J0=Long_and(a.bv,Long_fromInt(65535)).lo;if(Long_ne(a.bv,Long_and(a.E.gb.yR(),Long_fromInt(65535)))){a.bQ=13;a.E.b8=B(291);a.oK=5;continue;}}a.E.gb=AWA();a.bQ=7;}return d;}return e.hJ;}return e.hJ;}a.bQ
=12;}return 1;}if(!a.E.M)return d;e=a.E;e.M=e.M-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.ch.data;e=a.E;d=e.B;e.B=d+1|0;a.bv=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bQ=3;d=c;}if(!a.E.M)return d;e=a.E;e.M=e.M-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.ch.data;e=a.E;d=e.B;e.B=d+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bQ=4;d=c;}if(!a.E.M)return d;e=a.E;e.M=e.M-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.ch.data;e
=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bQ=5;}if(!a.E.M)return c;e=a.E;e.M=e.M-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.ch.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.E.gb.Fg(a.bv);a.bQ=6;return 2;}if(b==4&&a.bQ==14)return 0;return (-2);}
function F6(a,b,c,d){var e,f,g,h;if(a.iK==(-1)){a.iK=b;a.bv=Long_ZERO;}while(true){if(a.iK<=0){if(b==2)a.bv=Long_and(a.bv,Long_fromInt(65535));else if(b==4)a.bv=Long_and(a.bv,new Long(4294967295, 0));a.iK=(-1);return c;}if(!a.E.M)break;e=a.E;e.M=e.M-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.bv;g=a.E.ch.data;e=a.E;h=e.B;e.B=h+1|0;a.bv=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.iK|0)*8|0)));a.iK=a.iK-1|0;c=d;}M(AHm(a,c));}
function PS(a,b,c){var d,e;if(a.f1===null)a.f1=A7Q();while(true){if(!a.E.M)M(AHm(a,b));d=a.E;d.M=d.M-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));e=a.E.ch.data[a.E.B];if(e)RC(a.f1,a.E.ch,a.E.B,1);a.E.gb.kN(a.E.ch,a.E.B,1);d=a.E;d.B=d.B+1|0;if(!e)break;b=c;}return c;}
function AN1(a,b,c){var d;if(a.f1===null)a.f1=A7Q();while(Long_gt(a.bv,Long_ZERO)){if(!a.E.M)M(AHm(a,b));d=a.E;d.M=d.M-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));RC(a.f1,a.E.ch,a.E.B,1);a.E.gb.kN(a.E.ch,a.E.B,1);d=a.E;d.B=d.B+1|0;a.bv=Long_sub(a.bv,Long_fromInt(1));b=c;}return b;}
function Il(a,b,c){var d;d=0;while(d<b){a.xZ.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.E.gb.kN(a.xZ,0,b);}
function AOW(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);Bjd=b;}
function PX(){E4.call(this);}
function Bje(){var a=new PX();A60(a);return a;}
function A60(a){return;}
function A6m(a,b){$rt_putStderr(b);}
function Kv(){var a=this;D.call(a);a.x=0.0;a.z=0.0;a.w=0.0;}
var Bjf=null;var Be0=0;function WB(b,c,d){var e;e=new Kv;if(b===-0.0)b=0.0;if(c===-0.0)c=0.0;if(d===-0.0)d=0.0;e.x=b;e.z=c;e.w=d;return e;}
function BY(b,c,d){var e,f;if(Be0>=Bjf.p)S(Bjf,WB(0.0,0.0,0.0));e=Bjf;f=Be0;Be0=f+1|0;e=Z(e,f);e.x=b;e.z=c;e.w=d;return e;}
function Qj(a,b){return BY(b.x-a.x,b.z-a.z,b.w-a.w);}
function CD(a){var b;b=Cg(a.x*a.x+a.z*a.z+a.w*a.w);return b<1.0E-4?BY(0.0,0.0,0.0):BY(a.x/b,a.z/b,a.w/b);}
function AB4(a,b){return BY(a.z*b.w-a.w*b.z,a.w*b.x-a.x*b.w,a.x*b.z-a.z*b.x);}
function Dl(a,b,c,d){return BY(a.x+b,a.z+c,a.w+d);}
function DI(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return Cg(c*c+d*d+e*e);}
function Ey(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return c*c+d*d+e*e;}
function AB8(a,b,c,d){var e,f,g;e=b-a.x;f=c-a.z;g=d-a.w;return e*e+f*f+g*g;}
function HO(a){return Cg(a.x*a.x+a.z*a.z+a.w*a.w);}
function K3(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(d*d<1.0000000116860974E-7)return null;g=(c-a.x)/d;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function J2(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(e*e<1.0000000116860974E-7)return null;g=(c-a.z)/e;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function KJ(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(f*f<1.0000000116860974E-7)return null;g=(c-a.w)/f;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function AQr(){Bjf=Ch();Be0=0;}
function AMA(){D.call(this);}
function Bjg(){var a=new AMA();ATR(a);return a;}
function ATR(a){return;}
function Gr(b){return Math.sin(b);}
function GD(b){return Math.cos(b);}
function Iq(b){return Math.atan(b);}
function A39(b){return Math.log(b);}
function Ed(b){return Math.sqrt(b);}
function UB(b){return Math.ceil(b);}
function A24(b,c){return Math.pow(b,c);}
function CS(b,c){return Math.atan2(b,c);}
function BR(){return A2I();}
function A2I(){return Math.random();}
function CC(b,c){if(b<c)c=b;return c;}
function DD(b,c){if(b>c)c=b;return c;}
function Ic(b){if(b<=0)b= -b;return b;}
function HW(b){if(b<=0.0)b= -b;return b;}
function Jh(){D.call(this);this.Ha=null;}
var Bjh=null;var Bgj=null;var BiW=null;function AG5(a){var b=new Jh();APU(b,a);return b;}
function APU(a,b){a.Ha=b;}
function ADj(){Bjh=AG5(B(292));Bgj=AG5(B(293));BiW=AG5(B(294));}
function LM(){Mc.call(this);}
function Xx(a){return a.yP;}
function ABZ(){var a=this;LM.call(a);a.yP=0;a.yu=0;a.mj=null;}
function AZY(a,b,c,d,e,f){var g=new ABZ();A2U(g,a,b,c,d,e,f);return g;}
function A2U(a,b,c,d,e,f,g){K7(a,c);a.bh=e;a.cy=f;a.yu=b;a.yP=g;a.mj=d;}
function AO2(a,b){return a.mj.data[b+a.yu|0];}
function VD(a,b,c){a.mj.data[b+a.yu|0]=c;}
function AZf(a){return 1;}
function AWx(a){return a.mj;}
function A2l(a){return a.yP;}
function L9(){var a=this;D.call(a);a.HM=null;a.uL=null;a.GQ=0.0;a.B5=0.0;a.vH=null;a.uY=null;a.m6=0;}
function AC4(a,b){var c;if(b!==null){a.vH=b;return a;}c=new Ca;Bj(c,B(295));M(c);}
function A2p(a,b){return;}
function AG_(a,b){var c;if(b!==null){a.uY=b;return a;}c=new Ca;Bj(c,B(295));M(c);}
function A6Q(a,b){return;}
function AJr(a,b,c,d){var e,f,g,h,$$je;a:{if(a.m6!=3){if(d)break a;if(a.m6!=2)break a;}b=new D2;O(b);M(b);}a.m6=!d?1:2;while(true){try{e=Zc(a,b,c);}catch($$e){$$je=Bh($$e);if($$je instanceof B8){f=$$je;M(A5g(f));}else{throw $$e;}}if(JE(e)){if(!d)return e;g=Ct(b);if(g<=0)return e;e=Fi(g);}else if(IR(e))break;h=!MK(e)?a.vH:a.uY;b:{if(h!==Bgj){if(h===Bjh)break b;else return e;}if(Ct(c)<a.uL.data.length)return Bji;UV(c,a.uL);}EO(b,b.bh+LQ(e)|0);}return e;}
function X9(a,b){var c;if(a.m6!=2&&a.m6!=4){b=new D2;O(b);M(b);}c=Bjj;if(c===Bjj)a.m6=3;return c;}
function A7I(a,b){return Bjj;}
function Ok(){var a=this;D.call(a);a.nz=0;a.qK=0;}
var Bjj=null;var Bji=null;function Zu(a,b){var c=new Ok();AKx(c,a,b);return c;}
function AKx(a,b,c){a.nz=b;a.qK=c;}
function JE(a){return a.nz?0:1;}
function IR(a){return a.nz!=1?0:1;}
function NQ(a){return !Qm(a)&&!MK(a)?0:1;}
function Qm(a){return a.nz!=2?0:1;}
function MK(a){return a.nz!=3?0:1;}
function LQ(a){var b;if(NQ(a))return a.qK;b=new Jr;O(b);M(b);}
function Fi(b){return Zu(2,b);}
function Sd(a){var b,c;switch(a.nz){case 0:b=new Qb;O(b);M(b);case 1:b=new SQ;O(b);M(b);case 2:b=new R6;c=a.qK;O(b);b.BN=c;M(b);case 3:b=new P9;c=a.qK;O(b);b.E4=c;M(b);default:}}
function AK5(){Bjj=Zu(0,0);Bji=Zu(1,0);}
function AAk(){D.call(this);}
function A$b(){return {};}
function PY(){}
function YN(){D.call(this);}
function KS(){var a=this;D.call(a);a.dJ=0;a.pN=0;a.qa=0;a.f7=0;a.fC=null;a.sh=null;a.oJ=null;a.m3=null;a.m1=null;a.vZ=null;a.v0=null;a.vl=null;a.vt=null;a.pI=null;a.tv=0;a.bL=0;a.bK=0;a.ko=null;a.c0=null;a.cP=0;a.bW=0;a.bi=0;a.rn=0;a.xi=null;a.y=null;}
var Bjk=null;var Bjl=null;function JJ(a){a.dJ=0;a.bL=0;a.bK=0;a.bi=0;a.bW=0;if(a.rn)a.y.gb.l2();}
function ZB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.y.B;d=a.y.M;e=a.bK;f=a.bL;g=a.bi;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.dJ){case 2:break f;case 9:a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.ch.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.qa=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.fC!==null&&a.fC.data.length>=k))a.fC=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.fC.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.f7=0;a.dJ=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,(-2));}while(f<32){if(!d){a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.ch.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.dJ=9;a.y.b8=B(296);a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,(-3));}a.pN=l;f=0;a.dJ=a.pN?2:!a.tv?0:7;e=f;continue e;}while(f<3){if(!d){a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.ch.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.tv=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.dJ=1;break l;case 1:AEx(a.m3,a.m1,a.vZ,a.v0,a.y);Xc(a.pI,a.m3.data[0],a.m1.data[0],a.vZ.data[0],0,a.v0.data[0],0);e=e>>>3;f=f+(-3)|0;a.dJ=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.dJ=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.dJ=9;a.y.b8=B(297);a.bK=b;a.bL=k;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,(-3));default:}}continue e;}while(a.f7<(4+(a.qa>>>10)|0)){while(f<3){if(!d){a.bK=e;a.bL
=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.ch.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.fC.data;j=Bjl.data;k=a.f7;a.f7=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.f7<19){o=a.fC.data;j=Bjl.data;k=a.f7;a.f7=k+1|0;o[j[k]]=0;}a.sh.data[0]=7;k=AQd(a.xi,a.fC,a.sh,a.oJ,a.ko,a.y);if(k){if(k==(-3)){a.fC=null;a.dJ=9;}a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,k);}a.f7=0;a.dJ=5;}while(true)
{k=a.qa;if(a.f7>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.sh.data[0];while(f<k){if(!d){a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.ch.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.ko.data[((a.oJ.data[0]+(e&Bjk.data[k])|0)*3|0)+1|0];n=a.ko.data[((a.oJ.data[0]+(e&Bjk.data[k])|0)*3|0)+2|0];l=R(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.fC.data;k=a.f7;a.f7=k+1|0;j[k]=n;}else{p=R(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bK=e;a.bL=
f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.ch.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&Bjk.data[q])|0;e=n>>>q;f=k-q|0;h=a.f7;q=a.qa;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.fC.data[h-1|0];while(true){j=a.fC.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.f7=l;}}a.oJ.data[0]=(-1);a.m3.data[0]=9;a.m1.data[0]=6;k=a.qa;k=YQ(a.xi,257+(k&31)|0,1+(k>>5&31)|0,a.fC,a.m3,a.m1,a.vl,a.vt,a.ko,
a.y);if(k){if(k==(-3)){a.fC=null;a.dJ=9;}a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,k);}Xc(a.pI,a.m3.data[0],a.m1.data[0],a.ko,a.vl.data[0],a.ko,a.vt.data[0]);a.dJ=6;}a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;b=ABN(a.pI,b);if(b!=1)break e;b=0;AAZ(a.pI,a.y);c=a.y.B;d=a.y.M;e=a.bK;f=a.bL;g=a.bi;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;if(a.tv){a.dJ=7;break b;}a.dJ=0;continue e;}if(!d){a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,b);}if(!h){if(g==a.cP&&a.bW){g=0;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;}if(!h){a.bi=g;b=B5(a,b);g=a.bi;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;if(g==a.cP&&a.bW){g=0;h=g>=a.bW?a.cP-g|0:(a.bW-g|0)-1|0;}if(!h){a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,b);}}}b=0;k=a.pN;if(k>d)k=d;if(k>h)k=h;Dj(a.y.ch,c,a.c0,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.pN-k|0;a.pN=k;if(k)continue;a.dJ=!a.tv?0:7;}return B5(a,b);}a.dJ=9;a.y.b8
=B(298);a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,(-3));}a.fC=null;a.dJ=9;a.y.b8=B(299);a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,(-3));}a.bi=g;b=B5(a,b);g=a.bi;if(a.bW!=a.bi){a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,b);}a.dJ=8;}a.bK=e;a.bL=f;a.y.M=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bi=g;return B5(a,1);}
function S4(a){JJ(a);a.c0=null;a.ko=null;}
function B5(a,b){var c,d,e,f,g;c=a.y.pQ;d=a.bW;e=(d>a.bi?a.cP:a.bi)-d|0;if(e>a.y.ih)e=a.y.ih;if(e&&b==(-5))b=0;f=a.y;f.ih=f.ih-e|0;f=a.y;f.nw=Long_add(f.nw,Long_fromInt(e));if(a.rn&&e>0)a.y.gb.kN(a.c0,d,e);Dj(a.c0,d,a.y.u7,c,e);c=c+e|0;g=d+e|0;if(g==a.cP){if(a.bi==a.cP)a.bi=0;d=a.bi-0|0;if(d>a.y.ih)d=a.y.ih;if(d&&b==(-5))b=0;f=a.y;f.ih=f.ih-d|0;f=a.y;f.nw=Long_add(f.nw,Long_fromInt(d));if(a.rn&&d>0)a.y.gb.kN(a.c0,0,d);Dj(a.c0,0,a.y.u7,c,d);c=c+d|0;g=0+d|0;}a.y.pQ=c;a.bW=g;return b;}
function AIg(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bjk=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;Bjl=b;}
function NU(){L9.call(this);}
function Zc(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(CC(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(CC(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fl(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CC(Ct(b)+k|0,e.length);Pb(b,d,k,g-k|0);f=0;}if(!Fl(c)){l=!Fl(b)&&f>=g?Bjj:Bji;break a;}k=CC(Ct(c),i.length);m=new TG;m.zb=b;m.Dz=c;l=ACK(a,d,f,g,h,0,k,m);f=m.vW;if(l===null&&0==m.rP)l=Bjj;W6(c,h,0,m.rP);if(l!==null)break;}}EO(b,b.bh-(g-f|0)|0);return l;}
function PZ(){NU.call(this);}
function ACK(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Oj(h,2))break a;i=Bji;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!OD(l)){if((f+3|0)>g){j=j+(-1)|0;if(Oj(h,3))break a;i=Bji;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Dt(l)){i=Fi(1);break a;}if
(j>=d){if(AAL(h))break a;i=Bjj;break a;}c=j+1|0;j=k[j];if(!DR(j)){j=c+(-2)|0;i=Fi(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Oj(h,4))break a;i=Bji;break a;}k=e.data;n=EJ(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vW=j;h.rP=f;return i;}
function AOC(){D.call(this);}
function Bjm(){var a=new AOC();A25(a);return a;}
function A25(a){return;}
function APu(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Bht());}return b.data.length;}
function AEV(b,c){if(b===null){b=new EE;O(b);M(b);}if(b===F($rt_voidcls())){b=new Ca;O(b);M(b);}if(c>=0)return A19(b.f2,c);b=new XD;O(b);M(b);}
function A19(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Ga(){var a=this;D.call(a);a.j3=null;a.j_=null;a.eQ=null;a.fL=null;a.lm=null;a.it=null;}
var Bjn=null;var Bjo=null;var Bjp=null;var Bjq=null;var Bjr=null;var Bjs=null;function BaN(){var a=new Ga();AHU(a);return a;}
function AHU(a){a.j3=null;a.j_=null;a.eQ=null;a.fL=null;a.lm=null;a.it=null;}
function NX(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eQ.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eQ.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eQ.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eQ.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m=s;while(true){if(m>=t){v=u-a.eQ.data[t]|0;if(v<0)return (-3);b=a.eQ.data;b[t]
=b[t]+v|0;b=a.it.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.it.data;u=u+a.eQ.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.it.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.it.data[t];b=a.it.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.lm.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eQ.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c
=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eQ.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eQ.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.lm.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.it.data[y]=m;a.fL.data[0]=bc<<24>>24;a.fL.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.fL.data;b=a.lm.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;Dj(a.fL,0,j,(a.lm.data[q]+c|0)*3|0,3);z=be;}b=a.fL.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.fL.data[0]=192;else{p=l.data;if
(p[w]>=e){i=g.data;o=f.data;a.fL.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.fL.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.fL;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.fL.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){Dj(a.fL,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.it.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eQ.data[m]|0;if(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function AQd(a,b,c,d,e,f){var g;Ng(a,19);a.j3.data[0]=0;g=NX(a,b,0,19,19,null,null,d,c,e,a.j3,a.j_);if(g==(-3))f.b8=B(300);else if(!(g!=(-5)&&c.data[0])){f.b8=B(301);g=(-3);}return g;}
function YQ(a,b,c,d,e,f,g,h,i,j){var k;Ng(a,288);a.j3.data[0]=0;k=NX(a,d,0,b,257,Bjp,Bjq,g,e,i,a.j3,a.j_);if(!k&&e.data[0]){Ng(a,288);c=NX(a,d,b,c,0,Bjr,Bjs,h,f,i,a.j3,a.j_);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.b8=B(302);else if(c==(-5)){j.b8=B(303);c=(-3);}else if(c!=(-4)){j.b8=B(304);c=(-3);}return c;}if(k==(-3))j.b8=B(305);else if(k!=(-4)){j.b8=B(306);k=(-3);}return k;}
function AEx(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=Bjn;e[0]=Bjo;return 0;}
function Ng(a,b){var c;if(a.j3===null){a.j3=$rt_createIntArray(1);a.j_=$rt_createIntArray(b);a.eQ=$rt_createIntArray(16);a.fL=$rt_createIntArray(3);a.lm=$rt_createIntArray(15);a.it=$rt_createIntArray(16);}if(a.j_.data.length<b)a.j_=$rt_createIntArray(b);c=0;while(c<b){a.j_.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eQ.data[c]=0;c=c+1|0;}c=0;while(c<3){a.fL.data[c]=0;c=c+1|0;}Dj(a.eQ,0,a.lm,0,15);Dj(a.eQ,0,a.it,0,16);}
function AOD(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
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
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;Bjn=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;Bjo=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;Bjp=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;Bjq=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;Bjr=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;Bjs=b;}
function LT(){var a=this;D.call(a);a.ff=0;a.lV=0;a.fH=null;a.k6=0;a.me=0;a.zs=0;a.sI=0;a.q4=0;a.uZ=0;a.uI=0;a.yZ=null;a.wd=0;a.yx=null;a.wk=0;a.ba=null;a.C=null;}
var Bjt=null;function Xc(a,b,c,d,e,f,g){a.ff=0;a.uZ=b<<24>>24;a.uI=c<<24>>24;a.yZ=d;a.wd=e;a.yx=f;a.wk=g;a.fH=null;}
function ABN(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.ba.B;d=a.ba.M;e=a.C.bK;f=a.C.bL;g=a.C.bi;h=g>=a.C.bW?a.C.cP-g|0:(a.C.bW-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.ff){case 0:break f;case 2:i=a.sI;while(f<i){if(!d){a.C.bK=e;a.C.bL=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.ba.ch.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.lV=a.lV+(e&Bjt.data[i])|0;e=e>>i;f=f-i|0;a.me=a.uI;a.fH=a.yx;a.k6=a.wk;a.ff=3;break g;case 4:i=a.sI;while
(f<i){if(!d){a.C.bK=e;a.C.bL=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.ba.ch.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.q4=a.q4+(e&Bjt.data[i])|0;e=e>>i;f=f-i|0;a.ff=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.C.bi=g;b=B5(a.C,b);g=a.C.bi;if(a.C.bW!=a.C.bi){a.C.bK=e;a.C.bL=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=g;return B5(a.C,b);}a.ff=8;break a;case 9:a.C.bK=e;a.C.bL
=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=g;return B5(a.C,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.C.bK=e;a.C.bL=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=g;return B5(a.C,(-2));}}l=a.me;while(f<l){if(!d){a.C.bK=e;a.C.bL=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.ba.ch.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.k6+(e&Bjt.data[l])
|0)*3|0;k=a.fH.data;i=m+1|0;e=e>>k[i];f=f-a.fH.data[i]|0;l=a.fH.data[m];if(l&16){a.sI=l&15;a.q4=a.fH.data[m+2|0];a.ff=4;continue b;}if(l&64){a.ff=9;a.ba.b8=B(307);a.C.bK=e;a.C.bL=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=g;return B5(a.C,(-3));}a.me=l;a.k6=(m/3|0)+a.fH.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.C.bK=e;a.C.bL=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=g;b=ANd(a,a.uZ,a.uI,a.yZ,a.wd,a.yx,a.wk,a.C,a.ba);c=a.ba.B;d=a.ba.M;e=a.C.bK;f
=a.C.bL;g=a.C.bi;h=g>=a.C.bW?a.C.cP-g|0:(a.C.bW-g|0)-1|0;if(b){a.ff=b!=1?9:7;continue b;}}a.me=a.uZ;a.fH=a.yZ;a.k6=a.wd;a.ff=1;}l=a.me;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.ba.ch.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.k6+(e&Bjt.data[l])|0)*3|0;k=a.fH.data;i=m+1|0;e=e>>>k[i];f=f-a.fH.data[i]|0;n=a.fH.data[m];if(!n){a.zs=a.fH.data[m+2|0];a.ff=6;continue b;}if(n&16){a.sI=n&15;a.lV=a.fH.data[m+2|0];a.ff=2;continue b;}if(!(n&64)){a.me=n;a.k6=(m/3|0)+a.fH.data[m+2|0]|0;continue b;}if(!(n&32)){a.ff
=9;a.ba.b8=B(308);a.C.bK=e;a.C.bL=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=g;return B5(a.C,(-3));}a.ff=7;continue b;}if(h)i=g;else{if(g!=a.C.cP)i=g;else if(!a.C.bW)i=g;else{i=0;h=i>=a.C.bW?a.C.cP-i|0:(a.C.bW-i|0)-1|0;}if(!h){a.C.bi=i;b=B5(a.C,b);i=a.C.bi;h=i>=a.C.bW?a.C.cP-i|0:(a.C.bW-i|0)-1|0;if(i==a.C.cP&&a.C.bW){i=0;h=i>=a.C.bW?a.C.cP-i|0:(a.C.bW-i|0)-1|0;}if(!h){a.C.bK=e;a.C.bL=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=i;return B5(a.C,
b);}}}b=0;k=a.C.c0.data;g=i+1|0;k[i]=a.zs<<24>>24;h=h+(-1)|0;a.ff=0;continue b;}i=g-a.q4|0;while(i<0){i=i+a.C.cP|0;}while(a.lV){if(h)l=g;else{if(g!=a.C.cP)l=g;else if(!a.C.bW)l=g;else{l=0;h=l>=a.C.bW?a.C.cP-l|0:(a.C.bW-l|0)-1|0;}if(!h){a.C.bi=l;b=B5(a.C,b);l=a.C.bi;h=l>=a.C.bW?a.C.cP-l|0:(a.C.bW-l|0)-1|0;if(l==a.C.cP&&a.C.bW){l=0;h=l>=a.C.bW?a.C.cP-l|0:(a.C.bW-l|0)-1|0;}if(!h){a.C.bK=e;a.C.bL=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=l;return B5(a.C,b);}}}o=a.C.c0.data;g=l
+1|0;k=a.C.c0.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m==a.C.cP?0:m;a.lV=a.lV-1|0;}a.ff=0;}a.C.bK=e;a.C.bL=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=g;return B5(a.C,b);}a.C.bK=e;a.C.bL=f;a.ba.M=d;j=a.ba;j.G=Long_add(j.G,Long_fromInt(c-a.ba.B|0));a.ba.B=c;a.C.bi=g;return B5(a.C,1);}
function AAZ(a,b){return;}
function ANd(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.B;k=i.M;l=h.bK;m=h.bL;n=h.bi;o=n>=h.bW?h.cP-n|0:(h.bW-n|0)-1|0;p=Bjt.data[b];q=Bjt.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.ch.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.c0.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&Bjt.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.ch.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.b8=B(307);b=i.M-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bK=w;h.bL=b;i.M=c;i.G=Long_add(i.G,Long_fromInt(e-i.B|0));i.B=e;h.bi=n;return (-3);}b=(b+r[x+2|0]|0)+(w&Bjt.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.ch.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&Bjt.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.c0.data;b=n+1|0;r=h.c0.data;c=w+1|0;s[n]=r[w];s=h.c0.data;n=b+1|0;r=h.c0.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{Dj(h.c0,w,h.c0,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cP|0;if(w>=0)break;}b=h.cP-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.c0.data;n=c+1|0;r=h.c0.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{Dj(h.c0,w,h.c0,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.c0.data;c=n+1|0;r=h.c0.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}Dj(h.c0,w,h.c0,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.M-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bK=l;h.bL=e;i.M=b;i.G=Long_add(i.G,Long_fromInt(c-i.B|0));i.B=c;h.bi=n;return 1;}i.b8=B(308);v=i.M-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bK=l;h.bL=c;i.M=e;i.G=Long_add(i.G,Long_fromInt(b-i.B|0));i.B=b;h.bi=n;return (-3);}t=(t+s[u+2|0]|0)+(l&Bjt.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.c0.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.M-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bK=l;h.bL=g;i.M=b;i.G=Long_add(i.G,Long_fromInt(e-i.B|0));i.B=e;h.bi=c;return 0;}
function ABS(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bjt=b;}
function Hu(){B2.call(this);}
function Bju(){var a=new Hu();A_D(a);return a;}
function A_D(a){O(a);}
function XD(){B8.call(this);}
function Bjv(){var a=new XD();A82(a);return a;}
function A82(a){O(a);}
function AA$(){D.call(this);}
function A_O(a,b){return a.HW(b);}
function AUR(a){return a.Ji();}
function Kw(){B8.call(this);}
function Bjw(){var a=new Kw();A7x(a);return a;}
function A7x(a){O(a);}
function Z8(){var a=this;D.call(a);a.hk=null;a.rm=null;a.ee=null;a.fi=0;}
function BaK(){var a=new Z8();A2T(a);return a;}
function A2T(a){a.ee=Bdg;}
function D2(){BF.call(this);}
function Bjx(){var a=new D2();A99(a);return a;}
function A99(a){O(a);}
function AIO(){D.call(this);}
function JP(b){return b.length?0:1;}
function AO7(b){return b.shift();}
function SY(){D.call(this);this.Dy=null;}
function ARl(a){var b,c,d;b=a.Dy;if(!HH(b)&&b.cq.ee===null){c=b.cq;if(c.hk!==null&&!JP(c.hk)){b=c.hk;d=AO7(b);if(b===null)c.hk=null;Qy(d);}}}
function Rj(){var a=this;D.call(a);a.zX=null;a.zY=null;a.zV=0;a.zW=null;}
function Qy(a){var b,c,d,e;b=a.zX;c=a.zY;d=a.zV;e=a.zW;Ft(b);c.cq.ee=b;b=c.cq;b.fi=b.fi+d|0;CM(e,null);}
function GZ(){B2.call(this);}
function Bjy(){var a=new GZ();AVt(a);return a;}
function AVt(a){O(a);}
function W$(){Fh.call(this);}
function Bjz(){var a=new W$();A1A(a);return a;}
function A1A(a){O(a);}
function E2(){BF.call(this);}
function BjA(){var a=new E2();A77(a);return a;}
function A77(a){O(a);}
function Ou(){var a=this;D.call(a);a.H_=null;a.Ca=0.0;a.Gm=0.0;a.li=null;a.mZ=null;a.rD=null;a.h7=0;}
function ARf(a,b){var c;if(b!==null){a.mZ=b;return a;}c=new Ca;Bj(c,B(309));M(c);}
function A$T(a,b){return;}
function ADW(a,b){var c;if(b!==null){a.rD=b;return a;}c=new Ca;Bj(c,B(309));M(c);}
function A6t(a,b){return;}
function US(a,b,c,d){var e,f,$$je;if(!(a.h7==2&&!d)&&a.h7!=3){a.h7=d?2:1;while(true){try{e=AGA(a,b,c);}catch($$e){$$je=Bh($$e);if($$je instanceof B8){f=$$je;M(A5g(f));}else{throw $$e;}}if(IR(e))return e;if(JE(e)){if(d&&Fl(b)){if(a.mZ===BiW)return Fi(Ct(b));if(Ct(c)<=Bg(a.li))return Bji;EO(b,b.bh+Ct(b)|0);if(a.mZ===Bgj)NB(c,a.li);}return e;}if(Qm(e)){if(a.mZ===BiW)return e;if(a.mZ===Bgj){if(Ct(c)<Bg(a.li))return Bji;NB(c,a.li);}EO(b,b.bh+LQ(e)|0);}else if(MK(e)){if(a.rD===BiW)break;if(a.rD===Bgj){if(Ct(c)<Bg(a.li))return Bji;NB(c,
a.li);}EO(b,b.bh+LQ(e)|0);}}return e;}b=new D2;O(b);M(b);}
function ACp(a,b){if(a.h7!=3&&a.h7!=2){b=new D2;O(b);M(b);}a.h7=3;return Bjj;}
function ARJ(a){a.h7=0;return a;}
function AJZ(a,b){var c,d;if(a.h7&&a.h7!=3){b=new D2;O(b);M(b);}if(!Ct(b))return AHC(0);if(a.h7)ARJ(a);c=AHC(DD(8,Ct(b)*a.Ca|0));while(true){d=US(a,b,c,0);if(JE(d))break;if(IR(d))c=VJ(a,c);if(!NQ(d))continue;Sd(d);}b=US(a,b,c,1);if(NQ(b))Sd(b);while(!JE(ACp(a,c))){c=VJ(a,c);}Gu(c);return c;}
function VJ(a,b){var c,d,e;c=b.mj;d=Pf(c,DD(8,c.data.length*2|0));e=ANf(d,0,d.data.length);EO(e,b.bh);return e;}
function AYW(a,b){return Bjj;}
function A5A(a){return;}
function So(){}
function Sx(){}
function Pq(){var a=this;D.call(a);a.wB=null;a.Bn=null;a.IF=0;a.Jz=0;}
function APz(a){if(!a.IF){a.wB.C$=null;Ft(a.wB);CM(a.Bn,null);}}
function LY(){Ou.call(this);}
function AGA(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(CC(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(CC(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fl(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CC(Ct(b)+k|0,e.length);AKv(b,d,k,g-k|0);f=0;}if(!Fl(c)){l=!Fl(b)&&f>=g?Bjj:Bji;break a;}k=CC(Ct(c),i.length);m=new WC;m.AE=b;m.EN=c;l=AR5(a,d,f,g,h,0,k,m);f=m.wo;if(l===null&&0==m.qL)l=Bjj;ASH(c,h,0,m.qL);if(l!==null)break;}}EO(b,b.bh-(g-f|0)|0);return l;}
function Rq(){LY.call(this);}
function AR5(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(N3(h))break a;i=Bjj;break a;}n=k+1|0;k=j[k];if(!Ho(a,k)){c=n+(-2)|0;i=Fi(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(N3(h))break a;i=Bjj;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Ho(a,m))break b;if(!Ho(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(OD(p)){c=k+(-3)|0;i=Fi(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Fi(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(N3(h))break a;i=Bjj;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AJC(h,2))break a;i=Bji;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Ho(a,m))break c;if(!Ho(a,o))break c;if(!Ho(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=ID(q);m=c+1|0;j[c]=H$(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=Fi(1);break a;}c=k+(-3)|0;i=Fi(1);}h.wo=
c;h.qL=f;return i;}
function Ho(a,b){return (b&192)!=128?0:1;}
function DY(){var a=this;BF.call(a);a.hJ=0;a.IY=null;}
function AHm(a,b){var c=new DY();AVu(c,a,b);return c;}
function AVu(a,b,c){a.IY=b;O(a);a.hJ=c;}
function ANJ(){var a=this;D.call(a);a.JD=0;a.G3=0;a.H6=Long_ZERO;a.Jc=0;a.Bp=0;a.pt=null;a.y8=null;a.AR=null;a.J0=0;a.HN=Long_ZERO;a.G5=0;a.Ip=Long_ZERO;}
function BcC(){var a=new ANJ();A8W(a);return a;}
function A8W(a){a.JD=0;a.G3=0;a.Bp=255;a.G5=0;a.Ip=Long_ZERO;}
function O4(){D.call(this);this.mk=0;}
var BjB=null;function AWA(){var a=new O4();Zp(a);return a;}
function Zp(a){a.mk=0;}
function A2Q(a,b,c,d){var e,f,g,h;e=a.mk^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=BjB.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.mk=e^(-1);}
function A6H(a){a.mk=0;}
function A98(a,b){a.mk=Long_and(b,new Long(4294967295, 0)).lo;}
function A7N(a){return Long_and(Long_fromInt(a.mk),new Long(4294967295, 0));}
function AFQ(){var b,c,d;BjB=null;BjB=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}BjB.data[b]=d;b=b+1|0;}}
function I$(){var a=this;D.call(a);a.Y=0.0;a.Q=0.0;a.Z=0.0;a.bl=0.0;a.bj=0.0;a.bm=0.0;}
var BjC=null;var BeZ=0;function NJ(b,c,d,e,f,g){var h;h=new I$;h.Y=b;h.Q=c;h.Z=d;h.bl=e;h.bj=f;h.bm=g;return h;}
function Eb(b,c,d,e,f,g){var h,i;if(BeZ>=BjC.p)S(BjC,NJ(0.0,0.0,0.0,0.0,0.0,0.0));h=BjC;i=BeZ;BeZ=i+1|0;return Nk(Z(h,i),b,c,d,e,f,g);}
function Nk(a,b,c,d,e,f,g){a.Y=b;a.Q=c;a.Z=d;a.bl=e;a.bj=f;a.bm=g;return a;}
function Jg(a,b,c,d){var e,f,g,h,i,j,k;e=a.Y;f=a.Q;g=a.Z;h=a.bl;i=a.bj;j=a.bm;k=R(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=R(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=R(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return Eb(e,f,g,h,i,j);}
function Dw(a,b,c,d){return Eb(a.Y-b,a.Q-c,a.Z-d,a.bl+b,a.bj+c,a.bm+d);}
function Uj(a,b,c,d){return Eb(a.Y+b,a.Q+c,a.Z+d,a.bl+b,a.bj+c,a.bm+d);}
function QE(a,b,c){var d,e;if(b.bj>a.Q&&b.Q<a.bj){if(b.bm>a.Z&&b.Z<a.bm){if(c<=0.0)d=c;else if(b.bl>a.Y)d=c;else{d=a.Y-b.bl;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.Y<a.bl)e=d;else{e=a.bl-b.Y;if(e<=d)e=d;}return e;}return c;}return c;}
function Wg(a,b,c){var d,e;if(b.bl>a.Y&&b.Y<a.bl){if(b.bm>a.Z&&b.Z<a.bm){if(c<=0.0)d=c;else if(b.bj>a.Q)d=c;else{d=a.Q-b.bj;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.Q<a.bj)e=d;else{e=a.bj-b.Q;if(e<=d)e=d;}return e;}return c;}return c;}
function Um(a,b,c){var d,e;if(b.bl>a.Y&&b.Y<a.bl){if(b.bj>a.Q&&b.Q<a.bj){if(c<=0.0)d=c;else if(b.bm>a.Z)d=c;else{d=a.Z-b.bm;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.Z<a.bm)e=d;else{e=a.bm-b.Z;if(e<=d)e=d;}return e;}return c;}return c;}
function Mo(a,b){return b.bl>a.Y&&b.Y<a.bl?(b.bj>a.Q&&b.Q<a.bj?(b.bm>a.Z&&b.Z<a.bm?1:0):0):0;}
function FY(a,b,c,d){a.Y=a.Y+b;a.Q=a.Q+c;a.Z=a.Z+d;a.bl=a.bl+b;a.bj=a.bj+c;a.bm=a.bm+d;return a;}
function AP9(a){return (a.bl-a.Y+a.bj-a.Q+a.bm-a.Z)/3.0;}
function Qn(a){return Eb(a.Y,a.Q,a.Z,a.bl,a.bj,a.bm);}
function Q2(a,b,c){var d,e,f,g,h,i,j,k;d=K3(b,c,a.Y);e=K3(b,c,a.bl);f=J2(b,c,a.Q);g=J2(b,c,a.bj);h=KJ(b,c,a.Z);i=KJ(b,c,a.bm);if(!RO(a,d))d=null;if(!RO(a,e))e=null;if(!Uo(a,f))f=null;if(!Uo(a,g))g=null;if(!U$(a,h))h=null;if(!U$(a,i))i=null;j=null;if(d!==null)j=d;if(e!==null&&!(j!==null&&Ey(b,e)>=Ey(b,j)))j=e;if(f!==null&&!(j!==null&&Ey(b,f)>=Ey(b,j)))j=f;if(g!==null&&!(j!==null&&Ey(b,g)>=Ey(b,j)))j=g;if(h!==null&&!(j!==null&&Ey(b,h)>=Ey(b,j)))j=h;if(i!==null&&!(j!==null&&Ey(b,i)>=Ey(b,j)))j=i;if(j===null)return null;k
=(-1);if(j===d)k=4;if(j===e)k=5;if(j===f)k=0;if(j===g)k=1;if(j===h)k=2;if(j===i)k=3;return A0T(0,0,0,k,j);}
function RO(a,b){return b===null?0:b.z>=a.Q&&b.z<=a.bj&&b.w>=a.Z&&b.w<=a.bm?1:0;}
function Uo(a,b){return b===null?0:b.x>=a.Y&&b.x<=a.bl&&b.w>=a.Z&&b.w<=a.bm?1:0;}
function U$(a,b){return b===null?0:b.x>=a.Y&&b.x<=a.bl&&b.z>=a.Q&&b.z<=a.bj?1:0;}
function Xn(a,b){a.Y=b.Y;a.Q=b.Q;a.Z=b.Z;a.bl=b.bl;a.bj=b.bj;a.bm=b.bm;}
function AEG(){BjC=Ch();BeZ=0;}
function Qr(){}
function Bs(){Bq.call(this);}
var BjD=0;var Bgz=null;var BjE=0;var BjF=0;var BjG=0;var BjH=0.0;var BjI=0;var BjJ=null;var BjK=0;var BjL=0;var BjM=0.0;var BjN=0.0;var BjO=0.0;var BjP=0.0;var BjQ=0.0;var BjR=0.0;var BjS=0.0;var BjT=0.0;var BjU=0.0;var BjV=0;var Bf5=0.0;var Bf6=0.0;var Bf7=0.0;var Bf8=0.0;var BjW=0;var BjX=0;var BjY=0;var BjZ=0.0;var Bj0=0.0;var Bj1=0.0;var Bj2=0;var Bj3=0;var Bj4=0;var Bj5=0;var Bj6=null;var Bj7=0;var Bj8=null;var Bj9=0;var Bj$=null;var Bj_=0;var Bka=null;var Bkb=null;var Bgy=null;var Bkc=null;var Bkd=null;var Bke
=null;var Bkf=null;var Bkg=null;var Bkh=null;var Bgx=0;var Bki=null;var Bkj=null;var Bkk=null;var Bkl=null;var Bkm=null;var Bkn=null;var Bko=null;var Bkp=null;var Bkq=null;var Bkr=null;var Bks=null;var Bkt=null;var Bku=null;var Bkv=null;var Bkw=Long_ZERO;var Bkx=0;function BJ(){BJ=Br(Bs);A1Q();}
function Bky(){var a=new Bs();APg(a);return a;}
function APg(a){BJ();VY(a);}
function Ba(b){BJ();a:{switch(b){case 2884:Lk(2884);break a;case 2896:BjF=1;break a;case 2903:BjV=1;break a;case 2912:BjX=1;break a;case 2929:Lk(2929);break a;case 3008:BjG=1;break a;case 3042:Lk(3042);break a;case 3553:BjE=1;break a;case 32823:Lk(32823);break a;case 32826:break;default:break a;}}}
function HI(b){var c;BJ();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Bb();BdV.depthFunc(c);}
function SB(b,c){BJ();BjH=c;}
function C_(b){BJ();Bj5=b;}
function GO(){BJ();switch(Bj5){case 5888:break;case 5889:return Bj8.data[Bj9];case 5890:return Bj$.data[Bj_];default:}return Bj6.data[Bj7];}
function C$(){BJ();Fp(GO());}
function FN(b,c,d,e){BJ();Bb();Beg.data[0]=b;Beg.data[1]=c;Beg.data[2]=d;Beg.data[3]=e;BdV.viewport(b,c,d,e);}
function D3(b){BJ();Bb();BdV.clear(b);}
function Io(b,c,d,e,f,g){var h,i,j,k;BJ();h=GO();i=c-b;h.eu=2.0/i;h.es=0.0;h.et=0.0;h.er=0.0;h.ex=0.0;j=e-d;h.ey=2.0/j;h.ev=0.0;h.ew=0.0;h.eC=0.0;h.eA=0.0;k=g-f;h.eB=2.0/k;h.ez=0.0;h.gY= -(c+b)/i;h.gZ= -(e+d)/j;h.gW=(g+f)/k;h.gX=1.0;}
function Bu(b,c,d){var e;BJ();Mk(Bkd,b,c,d);e=GO();Vg(e,Bkd,e);if(!BjI)return;e=new Ca;Bj(e,B(310));M(e);}
function Hz(b,c,d,e){BJ();Bb();BdV.clearColor(b,c,d,e);}
function Bc(b){BJ();a:{switch(b){case 2884:Ka(2884);break a;case 2896:BjF=0;break a;case 2903:BjV=0;break a;case 2912:BjX=0;break a;case 2929:Ka(2929);break a;case 3008:BjG=0;break a;case 3042:Ka(3042);break a;case 3553:BjE=0;break a;case 32823:Ka(32823);break a;case 32826:break;default:break a;}}}
function BW(b,c,d,e){BJ();BjM=b;BjN=c;BjO=d;BjP=e;}
function SG(b,c,d,e,f,g,h,i,j){var k,l,m,n;BJ();Bb();if(j===null){k=BdV;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=Ct(j);k=Beh;n=0;while(n<m){h=(AL0(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(Beh.buffer,0,m);BdV.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function B1(){BJ();a:{switch(Bj5){case 5888:break;case 5889:if(Bj9>=(Bj8.data.length-1|0)){B7(CP(),B(311));break a;}Bj9=Bj9+1|0;F1(Bj8.data[Bj9],Bj8.data[Bj9-1|0]);break a;case 5890:if(Bj_>=(Bj$.data.length-1|0)){B7(CP(),B(312));break a;}Bj_=Bj_+1|0;F1(Bj$.data[Bj_],Bj$.data[Bj_-1|0]);break a;default:}if(Bj7>=(Bj6.data.length-1|0))B7(CP(),B(313));else{Bj7=Bj7+1|0;F1(Bj6.data[Bj7],Bj6.data[Bj7-1|0]);}}}
function Bw(b,c,d,e){var f;BJ();Mk(Bkd,c,d,e);f=GO();W8(f,b*0.01745329238474369,Bkd,f);if(!BjI)return;f=new Ca;Bj(f,B(310));M(f);}
function BE(){BJ();a:{switch(Bj5){case 5888:break;case 5889:if(Bj9<=0){B7(CP(),B(314));break a;}Bj9=Bj9-1|0;break a;case 5890:if(Bj_<=0){B7(CP(),B(315));break a;}Bj_=Bj_-1|0;break a;default:}if(Bj7<=0)B7(CP(),B(316));else Bj7=Bj7-1|0;}}
function TZ(b,c){BJ();a:{switch(b){case 2982:break;case 2983:T1(Bj8.data[Bj9],c);break a;default:}T1(Bj6.data[Bj7],c);}}
function Cw(b,c,d){var e;BJ();Mk(Bkd,b,c,d);ZQ(GO(),Bkd);if(!BjI)return;e=new Ca;Bj(e,B(310));M(e);}
function Dg(b,c){BJ();BjY=b==1&&c==771?1:0;Bb();BdV.blendFunc(b,c);}
function Fm(b){BJ();Bb();BdV.depthMask(!!b);}
function Dv(b,c,d,e){BJ();Bb();BdV.colorMask(!!b,!!c,!!d,!!e);}
function Cq(b,c){var d,e;BJ();d=KK(Bgz,c);Bb();e=BdV;d=d!==null?d.B6:null;e.bindTexture(3553,d);}
function Ej(b,c,d){BJ();if(!(d!=33071&&d!=10496))d=33071;Bb();BdV.texParameteri(b,c,d);}
function Cj(b,c,d){var e;BJ();e=Ed(b*b+c*c+d*d);BjQ=b/e;BjR=c/e;BjS=d/e;}
function Or(b){BJ();Bkb=b;JN(b);}
function FR(b){var c;BJ();if(!BjI){c=CQ(Bkc,CY(b));if(c!==null&&c.jN>0){RA(c.lO|0|(BjV&&BjF?8:0)|(!BjX?0:16)|(!BjG?0:32)|(!BjE?0:64));Or(c.rl);PJ(0,c.jN);Bj3=Bj3+((c.jN*6|0)/4|0)|0;Bj4=Bj4+(c.jN/2|0)|0;}}}
function FG(b,c){BJ();if(!BjI){BjJ=CQ(Bgy,CY(b));if(BjJ!==null){BjJ.lO=(-1);BjJ.jN=0;BjI=1;}}}
function Ee(){var b,c,d,e;BJ();if(BjI){BjI=0;Bb();b=BeO.buffer;c=BeN;d=new Int32Array(b,0,c);BeN=0;e=UQ(d);if(e>0){if(BjJ.o4===null){BT(Bkc,CY(BjJ.BO),BjJ);BjJ.rl=Ly();BjJ.o4=JK();b=Pj(BjJ.lO);Or(BjJ.rl);Gm(34962,BjJ.o4);RJ(b);}Gm(34962,BjJ.o4);PL(34962,d,35044);Bj2=Bj2+e|0;}}}
function F5(b,c,d){BJ();BjM=b;BjN=c;BjO=d;BjP=1.0;}
function OS(b,c){BJ();Bb();BdV.polygonOffset(b,c);}
function W4(b){BJ();a:{switch(b){case 32886:break;case 32888:BjL=1;break a;default:break a;}BjK=1;}}
function Tw(b){BJ();a:{switch(b){case 32886:break;case 32888:BjL=0;break a;default:break a;}BjK=0;}}
function Qh(){BJ();return 0|(!BjK?0:1)|(!BjL?0:4);}
function RA(b){var c;BJ();c=Pj(b);Bki=c;ARb(c);if(BjG)AI9(c,BjH);ALZ(c,BjM,BjN,BjO,BjP);if(BjX){ALC(c,(!BjY?0:2)+BjW|0);AQo(c,Bf5,Bf6,Bf7,Bf8);AKZ(c,Bj1);APY(c,BjZ,Bj0);}AME(c,Bj6.data[Bj7]);ANc(c,Bj8.data[Bj9]);Z9(c,Bj$.data[Bj_]);if(BjV&&BjF){ACh(c,BjQ,BjR,BjS);ANo(c,Bkg,Bkh);}AOX(c,BjT,BjU);}
function ALF(b,c,d,e){var f;BJ();if(BjI){if(b!=7)B7(CP(),B(317));else{if(BjJ.lO==(-1))BjJ.lO=Qh();else if(BjJ.lO!=Qh())B7(CP(),B(318));f=BjJ;f.jN=f.jN+d|0;Bb();e=e;if((BeN+e.length|0)<BeO.length){f=BeO;b=BeN;f.set(e,b);BeN=BeN+e.length|0;}}}else{Bj2=Bj2+UQ(e)|0;Bj3=Bj3+d|0;RA(0|(!BjK?0:1)|(!BjL?0:4)|(BjV&&BjF?8:0)|(!BjX?0:16)|(!BjG?0:32)|(!BjE?0:64));Or(Bki.ui);Gm(34962,Bki.uX);if(!Bki.xs){Bki.xs=1;PL(34962,Bkj,35048);}f=BdV;e=e;f.bufferSubData(34962,0,e);if(b==7){PJ(c,d);Bj4=Bj4+(d/2|0)|0;}else{a:{b:{switch
(b){case 1:break;case 2:case 4:break b;case 3:b=3;Bj4=Bj4+(d-1|0)|0;break a;case 5:b=5;Bj4=Bj4+(d-2|0)|0;break a;case 6:b=6;Bj4=Bj4+(d-2|0)|0;break a;default:break b;}b=1;Bj4=Bj4+(d/2|0)|0;break a;}b=4;Bj4=Bj4+(d/3|0)|0;}WI(b,c,d);}}}
function PJ(b,c){var d,e,f,g,h,i,j;BJ();if(Bka===null){if(BjD)d=U8($rt_createIntArray(49200));else{d=Zd(196800);d.kP=BgA;d=S_(d);}e=0;while(e<16384){f=e*4|0;g=f+1|0;h=f+2|0;i=f+3|0;j=g<<16;KQ(d,f|j);KQ(d,i|j);KQ(d,h|i<<16);e=e+1|0;}Gu(d);Bka=JK();Gm(34963,Bka);Sm(34963,d,35044);}if(!Bkb.v3){Bkb.v3=1;Gm(34963,Bka);}i=(c*6|0)/4|0;b=(b*6|0)/4|0;Bb();BdV.drawElements(4,i,5123,b);}
function Yj(){var b,c,d,e,f,g;BJ();Bkk=Ly();Bkl=JK();b=BjD?U8($rt_createIntArray(108)):S_(AQa(Zd(432),ACS()));c=$rt_createFloatArray(108).data;c[0]=0.0;c[1]=0.0;c[2]=0.0;c[3]=0.0;c[4]=0.0;c[5]=1.0;c[6]=0.0;c[7]=1.0;c[8]=1.0;c[9]=1.0;c[10]=1.0;c[11]=0.0;c[12]=0.0;c[13]=0.0;c[14]=0.0;c[15]=0.0;c[16]=1.0;c[17]=0.0;c[18]=1.0;c[19]=0.0;c[20]=1.0;c[21]=0.0;c[22]=0.0;c[23]=0.0;c[24]=1.0;c[25]=0.0;c[26]=0.0;c[27]=1.0;c[28]=1.0;c[29]=0.0;c[30]=1.0;c[31]=0.0;c[32]=0.0;c[33]=0.0;c[34]=0.0;c[35]=0.0;c[36]=0.0;c[37]=0.0;c[38]
=0.0;c[39]=0.0;c[40]=1.0;c[41]=1.0;c[42]=0.0;c[43]=1.0;c[44]=0.0;c[45]=1.0;c[46]=0.0;c[47]=1.0;c[48]=0.0;c[49]=0.0;c[50]=1.0;c[51]=0.0;c[52]=0.0;c[53]=0.0;c[54]=0.0;c[55]=1.0;c[56]=1.0;c[57]=0.0;c[58]=0.0;c[59]=1.0;c[60]=1.0;c[61]=0.0;c[62]=1.0;c[63]=1.0;c[64]=1.0;c[65]=1.0;c[66]=1.0;c[67]=0.0;c[68]=0.0;c[69]=1.0;c[70]=1.0;c[71]=0.0;c[72]=1.0;c[73]=0.0;c[74]=0.0;c[75]=1.0;c[76]=1.0;c[77]=1.0;c[78]=1.0;c[79]=0.0;c[80]=1.0;c[81]=1.0;c[82]=1.0;c[83]=1.0;c[84]=1.0;c[85]=1.0;c[86]=0.0;c[87]=0.0;c[88]=1.0;c[89]=0.0;c[90]
=1.0;c[91]=1.0;c[92]=1.0;c[93]=0.0;c[94]=1.0;c[95]=0.0;c[96]=0.0;c[97]=1.0;c[98]=1.0;c[99]=1.0;c[100]=1.0;c[101]=1.0;c[102]=0.0;c[103]=1.0;c[104]=1.0;c[105]=1.0;c[106]=0.0;c[107]=1.0;d=0;while(d<c.length){KQ(b,ARy(c[d]));d=d+1|0;}AH4(b);JN(Bkk);Gm(34962,Bkl);Sm(34962,b,35044);K2(0);K5(0,3,5126,0,12,0);e=I5(35633);f=I5(35632);g=QJ(B(319));I9(e,BD(H(H(H(BN(),Je()),B(320)),g)));I9(f,BD(H(H(H(BN(),Je()),B(321)),g)));K6(e);if(!KB(e))B7(CP(),BD(H(H(BN(),Hm(BD(H(H(BN(),B(158)),Ko(e))),B(158),B(322))),B(158))));K6(f);if
(!KB(f))B7(CP(),BD(H(H(BN(),Hm(BD(H(H(BN(),B(158)),Ko(f))),B(158),B(323))),B(158))));Bkm=Tf();JS(Bkm,e);JS(Bkm,f);P8(Bkm);Kr(Bkm,e);Kr(Bkm,f);J_(e);J_(f);if(!SC(Bkm))B7(CP(),Hm(BD(H(H(BN(),B(324)),S0(Bkm))),B(158),B(325)));KU(Bkm);Bkn=C7(Bkm,B(326));Bko=C7(Bkm,B(327));}
function AR9(){var b,c;BJ();b=Bkp;Bb();c=new Pa;c.vg=BdV.createQuery();return MX(b,c);}
function AE_(b){var c,d;BJ();c=KK(Bkp,b);Bb();d=BdV;c=c.vg;d.beginQuery(36202,c);}
function AHu(){BJ();if(Bkk===null)Yj();KU(Bkm);JN(Bkk);if(!Jk(Bkq,Bj8.data[Bj9])){F1(Bkq,Bj8.data[Bj9]);IH(Bkq,Bks);H5(Bko,Bks);}}
function Zi(){BJ();}
function ACL(b,c,d,e,f,g){BJ();B1();Bu(b-e*0.009999999776482582,c-f*0.009999999776482582,d-g*0.009999999776482582);Cw(e*1.0199999809265137,f*1.0199999809265137,g*1.0199999809265137);IH(Bj6.data[Bj7],Bkr);H5(Bkn,Bkr);WI(4,0,36);BE();}
function AOV(){BJ();Bb();BdV.endQuery(36202);}
function AOx(b){BJ();return UO(KK(Bkp,b),34918)<=0?0:1;}
function AR_(b){BJ();return UO(KK(Bkp,b),34919)<=0?0:1;}
function Mt(b,c){BJ();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}BjW=2;break a;}BjW=1;}}}
function GN(b,c){BJ();a:{switch(b){case 2914:break;case 2915:BjZ=c;break a;case 2916:Bj0=c;break a;default:break a;}Bj1=c;}}
function A1Q(){var b,c,d;Bb();BjD=1;Bgz=A_M(256);BjE=0;BjF=0;BjG=0;BjH=0.10000000149011612;BjI=0;BjJ=null;BjK=0;BjL=0;BjM=1.0;BjN=1.0;BjO=1.0;BjP=1.0;BjQ=1.0;BjR=0.0;BjS=0.0;BjT=0.0;BjU=0.0;BjV=0;Bf5=1.0;Bf6=1.0;Bf7=1.0;Bf8=1.0;BjW=1;BjX=0;BjY=0;BjZ=1.0;Bj0=1.0;Bj1=1.0;Bj2=0;Bj3=0;Bj4=0;Bj5=5888;Bj6=J(Es,32);Bj7=0;Bj8=J(Es,6);Bj9=0;Bj$=J(Es,16);Bj_=0;b=0;while(b<Bj6.data.length){c=Bj6.data;d=new Es;Fp(d);c[b]=d;b=b+1|0;}b=0;while(b<Bj8.data.length){c=Bj8.data;d=new Es;Fp(d);c[b]=d;b=b+1|0;}b=0;while(b<Bj$.data.length)
{c=Bj$.data;d=new Es;Fp(d);c[b]=d;b=b+1|0;}Bka=null;Bkb=null;Bgy=De();Bkc=De();Bkd=new Va;Bke=new G9;Bkf=new G9;Bkg=new G9;Bkh=new G9;Bgx=0;Bki=null;Bkj=new Int32Array(525000);Bkk=null;Bkl=null;Bkm=null;Bkn=null;Bko=null;Bkp=A_M(256);d=new Es;Fp(d);Bkq=KH(d);Bkr=$rt_createFloatArray(16);Bks=$rt_createFloatArray(16);d=new Es;Fp(d);Bkt=d;d=new Es;Fp(d);Bku=d;Bkv=new G9;Bkw=Long_ZERO;Bkx=0;}
function NT(){var a=this;D.call(a);a.rw=0;a.tq=0;a.m9=0;a.lt=0;a.hh=0;a.iz=0;a.dv=0;a.mu=0;a.lh=0;a.t8=null;a.t0=null;a.xz=null;a.uE=null;a.yY=null;a.fv=null;a.gr=null;a.B4=null;a.gc=null;a.Cq=null;a.Dx=null;a.ni=null;a.wJ=null;a.z7=0;a.j0=0;a.cC=0;a.bw=0;a.pR=0;}
var Bkz=null;var BkA=null;function Bam(a){var b=new NT();APp(b,a);return b;}
function APp(a,b){var c,d;a.rw=1;a.tq=1;a.m9=0;a.lt=0;a.hh=0;a.iz=1;a.dv=0;a.mu=0;a.lh=1;a.t8=E8(B(328),17);a.t0=E8(B(329),30);a.xz=E8(B(330),31);a.uE=E8(B(331),32);a.yY=E8(B(332),57);a.fv=E8(B(333),23);a.gr=E8(B(334),16);a.B4=E8(B(335),20);a.gc=E8(B(336),33);a.Cq=E8(B(337),28);a.Dx=E8(B(338),19);c=J(Vx,11);d=c.data;d[0]=a.t8;d[1]=a.t0;d[2]=a.xz;d[3]=a.uE;d[4]=a.yY;d[5]=a.gr;d[6]=a.fv;d[7]=a.B4;d[8]=a.gc;d[9]=a.Cq;d[10]=a.Dx;a.ni=c;a.z7=12;a.j0=2;a.cC=0;a.bw=0;a.pR=0;a.wJ=b;}
function Lm(a,b){var c;c=new T;V(c);c=H(H(c,a.ni.data[b].EQ),B(12));b=a.ni.data[b].bJ;Bb();return U(H(c,b>=0&&b<256?BeL.data[b]:B(10)));}
function Yb(a,b,c){a.ni.data[b].bJ=c;}
function D_(a,b,c){if(!b)a.rw=a.rw?0:1;if(b==1)a.tq=a.tq?0:1;if(b==2)a.m9=a.m9?0:1;if(b==3)a.lt=a.lt?0:1;if(b==4)a.hh=(a.hh+c|0)&3;if(b==5)a.iz=a.iz?0:1;if(b==6)a.dv=a.dv?0:1;if(b==7)a.mu=a.mu?0:1;if(b==8)a.j0=(a.j0+c|0)&3;if(b==9){a.lh=a.lh?0:1;Jc(a.wJ.dU);}if(b==10){a.bw=a.bw?0:1;if(a.bw){a.hh=2;a.iz=0;a.lh=0;a.dv=0;}Jc(a.wJ.dU);}if(b==11)a.pR=a.pR?0:1;}
function Q8(a,b){var c;a:{if(!b){c=new T;V(c);c=U(H(H(c,B(339)),!a.rw?B(340):B(341)));break a;}if(b==1){c=new T;V(c);c=U(H(H(c,B(342)),!a.tq?B(340):B(341)));break a;}if(b==2){c=new T;V(c);c=U(H(H(c,B(343)),!a.m9?B(340):B(341)));break a;}if(b==3){c=new T;V(c);c=U(H(H(c,B(344)),!a.lt?B(340):B(341)));break a;}if(b==4){c=new T;V(c);c=U(H(H(c,B(345)),Bkz.data[a.hh]));break a;}if(b==5){c=new T;V(c);c=U(H(H(c,B(346)),!a.iz?B(340):B(341)));break a;}if(b==6){c=new T;V(c);c=U(H(H(c,B(347)),!a.dv?B(340):B(341)));break a;}if
(b==7){c=new T;V(c);c=U(H(H(c,B(348)),!a.mu?B(340):B(341)));break a;}if(b==8){c=new T;V(c);c=U(H(H(c,B(349)),BkA.data[a.j0]));break a;}if(b==9){c=new T;V(c);c=U(H(H(c,B(350)),!a.lh?B(351):B(352)));break a;}if(b==10){c=new T;V(c);c=U(H(H(c,B(353)),!a.bw?B(340):B(341)));break a;}if(b!=11){c=B(3);break a;}c=new T;V(c);c=U(H(H(c,B(354)),!a.pR?B(340):B(341)));}return c;}
function A2L(a){return;}
function A1h(a){return;}
function AH8(){var b,c;b=J(B4,4);c=b.data;c[0]=B(355);c[1]=B(356);c[2]=B(357);c[3]=B(358);Bkz=b;b=J(B4,4);c=b.data;c[0]=B(359);c[1]=B(360);c[2]=B(361);c[3]=B(362);BkA=b;}
function ACO(){D.call(this);}
function BkB(){var a=new ACO();AUC(a);return a;}
function AUC(a){return;}
function DU(){var b,c;Bb();if(!BeP)a:{Bep=null;if(!P5(Bd8)){b=Ts(Bd8,0);Bep=b;if(b!==null){c=1;break a;}}c=0;}else{OH(Bd8);Bep=null;Ber.data[29]=0;Ber.data[157]=0;Ber.data[28]=0;Ber.data[219]=0;Ber.data[220]=0;BeP=0;c=0;}return c;}
function CV(){Bb();return Bep===null?0:DB($rt_str(Bep.type),B(363))?0:1;}
function Bf(){Bb();return Bep===null?(-1):T_(Bep.which);}
function AP8(b){Bb();Bed=b;}
function BP(b){Bb();if(BeP){Ber.data[28]=0;Ber.data[29]=0;Ber.data[157]=0;Ber.data[219]=0;Ber.data[220]=0;}return Ber.data[b];}
function G6(){var a=this;D.call(a);a.t9=null;a.nr=0;a.k5=0;a.mC=0;a.mD=0;a.rz=0;a.rT=0;a.su=0;a.BR=0;a.EE=0;a.DG=0;a.ux=0;a.wK=0;a.yj=0;a.ek=0;a.gn=null;a.Fb=0;a.Bg=0;a.D1=0;a.io=0;a.Fl=null;a.eR=0;a.jj=0;a.jQ=0;a.JW=0;a.os=0;a.jC=0;a.fP=null;a.jk=null;a.yT=0;a.yU=0;a.yV=0;}
var BkC=null;var Be1=0;function Ty(){Ty=Br(G6);A_B();}
function AGa(a,b,c,d){if(!(b==a.k5&&c==a.mC&&d==a.mD)){P1(a);a.k5=b;a.mC=c;a.mD=d;a.yT=b>>4;a.yU=c>>4;a.yV=d>>4;a.Fb=b+(a.rz/2|0)|0;a.Bg=c+(a.rT/2|0)|0;a.D1=d+(a.su/2|0)|0;a.ux=b&1023;a.wK=c;a.yj=d&1023;a.BR=b-a.ux|0;a.EE=c-a.wK|0;a.DG=d-a.yj|0;a.Fl=NJ(b-2.0,c-2.0,d-2.0,(b+a.rz|0)+2.0,(c+a.rT|0)+2.0,(d+a.su|0)+2.0);FG(a.nr+2|0,4864);Ee();Lc(a);}}
function ADv(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.io)return;Be1=Be1+1|0;b=a.k5;c=a.mC;d=a.mD;e=a.k5+a.rz|0;f=a.mC+a.rT|0;g=a.mD+a.su|0;h=0;while(h<2){a.gn.data[h]=1;h=h+1|0;}BkD=0;i=F9();DE(i,a.fP);DH(a.fP);j=new Is;k
=a.t9;l=b-1|0;m=c-1|0;n=d-1|0;o=e+1|0;h=f+1|0;p=g+1|0;$p=1;case 1:AEI(j,k,l,m,n,o,h,p);if(C()){break _;}k=A8z(j);l=0;a:{while(true){if(l>=2)break a;q=0;r=0;s=0;t=c;while(t<f){m=d;while(m<g){n=b;if(n<e){$p=2;continue _;}m=m+1|0;}t=t+1|0;}if(!s)r=0;else{Bt(BkC);Ee();Fa(BkC,0.0,0.0,0.0);}if(r)a.gn.data[l]=0;if(!q)break;l=l+1|0;}}u=F9();DE(u,a.fP);Fs(u,i);DE(a.jk,u);Fs(i,a.fP);Gc(a.jk,i);a.os=BkD;a.jC=1;return;case 2:$z=Hy(j,n,t,m);if(C()){break _;}p=$z;if(p>0){if(!s){s=1;FG(a.nr+l|0,4864);Bz(BkC);Fa(BkC,a.ux-a.k5
|0,a.wK-a.mC|0,a.yj-a.mD|0);}if(!l){L();if(Be2.data[p] instanceof Eg){$p=3;continue _;}}L();v=Be2.data[p];o=R(v.pT(),l);if(o)q=1;else if(!o){$p=4;continue _;}}n=n+1|0;b:{c:while(true){if(n<e){continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Bt(BkC);Ee();Fa(BkC,0.0,0.0,0.0);}if(r)a.gn.data[l]=0;if(!q)break c;l=l+1|0;if(l>=2)break b;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=F9();DE(u,a.fP);Fs(u,i);DE(a.jk,u);Fs(i,a.fP);Gc(a.jk,i);a.os=BkD;a.jC=1;return;case 3:$z=AF$(j,n,t,m);if(C()){break _;}w=$z;if(AIw(BkE,
w))S(a.fP,w);L();v=Be2.data[p];o=R(v.pT(),l);if(o)q=1;else if(!o){$p=4;continue _;}n=n+1|0;d:{e:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Bt(BkC);Ee();Fa(BkC,0.0,0.0,0.0);}if(r)a.gn.data[l]=0;if(!q)break e;l=l+1|0;if(l>=2)break d;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=F9();DE(u,a.fP);Fs(u,i);DE(a.jk,u);Fs(i,a.fP);Gc(a.jk,i);a.os=BkD;a.jC=1;return;case 4:$z=AOb(k,v,n,t,m);if(C()){break _;}o=$z;r=r|o;n=n+1|0;a:{f:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g)
{t=t+1|0;while(t>=f){if(!s)r=0;else{Bt(BkC);Ee();Fa(BkC,0.0,0.0,0.0);}if(r)a.gn.data[l]=0;if(!q)break f;l=l+1|0;if(l>=2)break a;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=F9();DE(u,a.fP);Fs(u,i);DE(a.jk,u);Fs(i,a.fP);Gc(a.jk,i);a.os=BkD;a.jC=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function G4(a,b){var c,d,e;c=b.d-a.Fb;d=b.j-a.Bg;e=b.e-a.D1;return c*c+d*d+e*e;}
function P1(a){var b;b=0;while(b<2){a.gn.data[b]=1;b=b+1|0;}a.ek=0;a.jC=0;}
function ARV(a){P1(a);a.t9=null;}
function PR(a,b){return !a.ek?(-1):a.gn.data[b]?(-1):a.nr+b|0;}
function ASq(a,b){a.ek=MZ(b,a.Fl);}
function MT(a){return !a.jC?0:a.gn.data[0]&&a.gn.data[1]?1:0;}
function Lc(a){a.io=1;}
function A_B(){BA();BkC=BeY;Be1=0;}
function ASr(){var a=this;E4.call(a);a.ju=null;a.lM=0;}
function A7Q(){var a=new ASr();AX1(a);return a;}
function A$u(a){var b=new ASr();Zb(b,a);return b;}
function AX1(a){Zb(a,32);}
function Zb(a,b){a.ju=$rt_createByteArray(b);}
function A74(a,b){var c,d;RE(a,a.lM+1|0);c=a.ju.data;d=a.lM;a.lM=d+1|0;c[d]=b<<24>>24;}
function RC(a,b,c,d){var e,f,g,h,i;RE(a,a.lM+d|0);e=0;while(e<d){f=b.data;g=a.ju.data;h=a.lM;a.lM=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function RE(a,b){if(a.ju.data.length<b){b=DD(b,(a.ju.data.length*3|0)/2|0);a.ju=Os(a.ju,b);}}
function Id(a){return Os(a.ju,a.lM);}
function J0(){B8.call(this);}
function BkF(){var a=new J0();A5U(a);return a;}
function A5U(a){O(a);}
function Oq(){}
function GI(){var a=this;D.call(a);a.fF=null;a.dW=null;a.l8=null;a.gQ=null;a.kV=null;a.fD=null;a.ec=Long_ZERO;a.ss=Long_ZERO;a.sY=Long_ZERO;a.ru=Long_ZERO;a.gp=0;a.hZ=0;a.sg=0;a.sr=0;a.bg=null;a.i6=0;a.Dn=null;a.r=null;a.fk=0;a.p2=0;a.fj=0;a.tK=0;a.cv=null;a.iR=null;a.lz=Long_ZERO;a.to=null;a.wZ=Long_ZERO;a.I7=null;a.ng=null;a.ql=null;}
var BkG=null;var BkH=null;function BkI(a,b){var c=new GI();Q9(c,a,b);return c;}
function ASt(b){var c,d,e,f,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=new T;V(c);c=U(H(H(c,b),B(364)));$p=1;case 1:$z=ALT(c);if(C()){break _;}d=$z;c=DT();e=new T;V(e);B7(c,U(H(H(e,b),B(364))));if(d===null)return null;a:{try{e=MO(Na(O9(Ut(d))),B(365));}catch($$e){$$je=Bh($$e);if($$je instanceof B2){f=$$je;break a;}else{throw $$e;}}return e;}Ce(f);return null;default:E_();}}C3().s(b,c,d,e,f,$p);}
function Q9(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.fF=Ch();a.dW=Ch();a.l8=Ch();a.gQ=Bcc();a.kV=F9();a.fD=Ch();a.ec=Long_ZERO;a.ss=Long_fromInt(8961023);a.sY=Long_fromInt(12638463);a.ru=Long_fromInt(16777215);a.gp=0;a.hZ=LJ(new DA);a.sg=1013904223;a.sr=0;a.r=new DA;a.tK=0;a.cv=Ch();a.lz=Long_ZERO;a.wZ=Long_ZERO;a.ng=Ch();a.ql=Ch();a.I7=b;BkH=b;b=new T;V(b);b=U(H(H(b,
BkH),B(364)));$p=1;case 1:$z=ALT(b);if(C()){break _;}d=$z;b=DT();e=new T;V(e);B7(b,U(H(H(e,BkH),B(364))));f=d!==null?1:0;a:{a.tK=f;if(d!==null){try{g=MO(Na(O9(Ut(d))),B(365));a.lz=Mv(g,B(366));a.fk=FT(g,B(367));a.p2=FT(g,B(368));a.fj=FT(g,B(369));a.ec=Mv(g,B(370));a.wZ=Mv(g,B(371));a.to=MO(g,B(5));break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){h=$$je;}else{throw $$e;}}Ce(h);}}f=0;if(Long_eq(a.lz,Long_ZERO)){a.lz=c;f=1;}a.iR=ABy(a,BkH);if(!f){Rh(a);return;}a.fk=0;a.p2=64;a.fj=0;f=a.fk;i=a.fj;$p=2;case 2:$z
=AJ4(a,f,i);if(C()){break _;}f=$z;L();if(f!=Bfn.b?0:1){Rh(a);return;}a.fk=a.fk+(E(a.r,64)-E(a.r,64)|0)|0;a.fj=a.fj+(E(a.r,64)-E(a.r,64)|0)|0;f=a.fk;i=a.fj;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ABy(a,b){var c,d,e;c=new V6;d=new Xv;d.r8=b;e=new SA;e.Gv=$rt_createIntMultiArray([32,32]);e.t=a;e.a=new DA;e.zd=G_(e.a,16);e.ze=G_(e.a,16);e.zc=G_(e.a,8);e.tU=G_(e.a,4);e.zg=G_(e.a,4);e.zh=G_(e.a,10);e.zf=G_(e.a,16);e.iY=G_(e.a,8);c.S=J(I4,1024);c.fu=(-999999999);c.fV=(-999999999);c.ls=A9H(a,$rt_createByteArray(32768),0,0);c.ls.EC=1;c.ls.qd=1;c.lE=a;c.g7=d;c.iX=e;return c;}
function AQi(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fk;c=a.fj;$p=1;case 1:$z=AJ4(a,b,c);if(C()){break _;}b=$z;if(b)return;a.fk=a.fk+(E(a.r,8)-E(a.r,8)|0)|0;a.fj=a.fj+(E(a.r,8)-E(a.r,8)|0)|0;b=a.fk;c=a.fj;continue _;default:E_();}}C3().s(a,b,c,$p);}
function AJ4(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=63;e=d+1|0;$p=1;case 1:$z=ACH(a,b,e,c);if(C()){break _;}f=$z;if(!f){$p=2;continue _;}d=e;e=d+1|0;continue _;case 2:$z=ACH(a,b,d,c);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AGF(a){var b,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{if(a.to!==null){Y3(a.bg,a.to);a.to=null;}b=a.bg;$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){b=$$je;}else{throw $$e;}}Ce(b);return;case 1:a:{try{AOt(a,b);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){b=$$je;}else{throw $$e;}}Ce(b);}return;default:E_();}}C3().s(a,b,$p);}
function ABQ(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null)YT(c,B(372));$p=1;case 1:AMY(a);if(C()){break _;}if(c===null){d=a.iR;$p=2;continue _;}d=B(373);$p=3;continue _;case 2:AN_(d,b,c);if(C()){break _;}return;case 3:ASk(c,d);if(C()){break _;}d=a.iR;$p=2;continue _;default:E_();}}C3().s(a,b,c,d,$p);}
function AMY(a){var b,c,d,e,f,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=G$();Ia(b,B(366),a.lz);Gx(b,B(367),a.fk);Gx(b,B(368),a.p2);Gx(b,B(369),a.fj);Ia(b,B(370),a.ec);Ia(b,B(371),a.wZ);Ia(b,B(374),B9());if(a.bg!==null){c=G$();ALI(a.bg,c);AN5(b,B(5),c);}c=G$();HE(c,B(365),b);try{b=BD(H(H(BN(),BkH),B(375)));$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}Ce(d);return;case 1:try
{ALT(b);if(C()){break _;}b=BD(H(H(BN(),BkH),B(376)));$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}Ce(d);return;case 2:try{ALT(b);if(C()){break _;}b=BD(H(H(BN(),BkH),B(364)));$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}Ce(d);return;case 3:try{ALT(b);if(C()){break _;}e=A$u(131072);R7(c,AWz(e));b=BD(H(H(BN(),BkH),B(375)));f=Id(e);$p=4;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}Ce(d);return;case 4:try
{ACM(b,f);if(C()){break _;}b=BD(H(H(BN(),BkH),B(376)));$p=5;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}Ce(d);return;case 5:try{$z=ALT(b);if(C()){break _;}f=$z;if(f!==null){b=BD(H(H(BN(),BkH),B(376)));$p=8;continue _;}b=BD(H(H(BN(),BkH),B(364)));c=BD(H(H(BN(),BkH),B(376)));$p=6;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}Ce(d);return;case 6:try{ANz(b,c);if(C()){break _;}b=BD(H(H(BN(),BkH),B(364)));$p=7;continue _;}catch($$e){$$je
=Bh($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}Ce(d);return;case 7:try{$z=ALT(b);if(C()){break _;}f=$z;if(f!==null){b=BD(H(H(BN(),BkH),B(364)));$p=11;continue _;}b=BD(H(H(BN(),BkH),B(375)));c=BD(H(H(BN(),BkH),B(364)));$p=9;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}Ce(d);return;case 8:try{AMd(b);if(C()){break _;}b=BD(H(H(BN(),BkH),B(364)));c=BD(H(H(BN(),BkH),B(376)));$p=6;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}Ce(d);return;case 9:try
{ANz(b,c);if(C()){break _;}b=BD(H(H(BN(),BkH),B(375)));$p=10;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}Ce(d);return;case 10:a:{try{$z=ALT(b);if(C()){break _;}f=$z;if(f===null)break a;b=BD(H(H(BN(),BkH),B(375)));$p=12;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}Ce(d);}return;case 11:try{AMd(b);if(C()){break _;}b=BD(H(H(BN(),BkH),B(375)));c=BD(H(H(BN(),BkH),B(364)));$p=9;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF)
{d=$$je;}else{throw $$e;}}Ce(d);return;case 12:a:{try{AMd(b);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){d=$$je;}else{throw $$e;}}Ce(d);}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AAY(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b){$p=2;continue _;}c=a.iR;b=0;d=null;$p=1;case 1:$z=AN_(c,b,d);if(C()){break _;}b=$z;return b;case 2:AMY(a);if(C()){break _;}c=a.iR;b=0;d=null;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,$p);}
function ACH(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)b=0;else{if(c<128){e=b>>4;f=d>>4;$p=1;continue _;}b=0;}}else b=0;return b;case 1:$z=Z7(a,e,f);if(C()){break _;}g=$z;return ET(g,b&15,c,d&15);default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function EI(a,b,c,d){return c>=0&&c<128?C4(a,b>>4,d>>4):0;}
function If(a,b,c,d,e,f,g){var h,i;if(f>=0&&c<128){h=b>>4;b=d>>4;c=e>>4;d=g>>4;while(h<=c){i=b;while(i<=d){if(!C4(a,h,i))return 0;i=i+1|0;}h=h+1|0;}return 1;}return 0;}
function C4(a,b,c){return BS(a.iR,b,c);}
function X5(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b>>4;b=c>>4;$p=1;case 1:$z=Z7(a,d,b);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Z7(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iR;$p=1;case 1:$z=AOr(d,b,c);if(C()){break _;}d=$z;return d;default:E_();}}C3().s(a,b,c,d,$p);}
function AJA(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;g=b>>4;h=d>>4;$p=1;continue _;}return 0;case 1:$z=Z7(a,g,h);if(C()){break _;}i=$z;b=b&15;d=d&15;$p=2;case 2:$z=ADS(i,b,c,d,e,f);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALG(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=Z7(a,f,g);if(C()){break _;}h=$z;g=b&15;b=d&15;$p=2;case 2:$z=ADP(h,g,c,b,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ACa(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACH(a,b,c,d);if(C()){break _;}e=$z;if(!e)f=Bgm;else{L();f=Be2.data[e].b$;}return f;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AEX(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;e=b>>4;f=d>>4;$p=1;continue _;}return 0;case 1:$z=Z7(a,e,f);if(C()){break _;}g=$z;return R1(g,b&15,c,d&15);default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACr(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKK(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AKK(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=Z7(a,f,g);if(C()){break _;}h=$z;AAI(h,b&15,c,d&15,e);return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function APK(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALG(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AE1(a,b,c,d,e);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJb(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AJA(a,b,c,d,e,f);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AE1(a,b,c,d,e);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AE1(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;while(f<a.cv.p){Rz(Z(a.cv,f),b,c,d);f=f+1|0;}$p=1;case 1:AH1(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function APW(a,b,c,d,e){var f;if(d<=e){f=d;d=e;e=f;}Jo(a,b,e,c,b,d,c);}
function Jo(a,b,c,d,e,f,g){var h;h=0;while(h<a.cv.p){AOT(Z(a.cv,h),b,c,d,e,f,g);h=h+1|0;}}
function AH1(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b-1|0;$p=1;case 1:APh(a,f,c,d,e);if(C()){break _;}f=b+1|0;$p=2;case 2:APh(a,f,c,d,e);if(C()){break _;}f=c-1|0;$p=3;case 3:APh(a,b,f,d,e);if(C()){break _;}f=c+1|0;$p=4;case 4:APh(a,b,f,d,e);if(C()){break _;}f=d-1|0;$p=5;case 5:APh(a,b,c,f,e);if(C()){break _;}d=d+1|0;$p=6;case 6:APh(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,
$p);}
function APh(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sr)return;L();f=Be2.data;$p=1;case 1:$z=ACH(a,b,c,d);if(C()){break _;}g=$z;h=f[g];if(h===null)return;$p=2;case 2:h.e1(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AGv(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=Z7(a,e,f);if(C()){break _;}g=$z;return Pw(g,b&15,c,d&15);default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function XI(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=1;$p=1;case 1:$z=AQ0(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AQ0(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(e){$p=1;continue _;}if(c<0)return 0;if(c>=128){f=15-a.gp|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}return 15;case 1:$z=ACH(a,b,c,d);if(C()){break _;}f=$z;L();if(f!=Be7.b&&f!=Bhe.b){if(c<0)return 0;if(c>=128){f=15
-a.gp|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}e=c+1|0;g=0;$p=2;case 2:$z=AQ0(a,b,e,d,g);if(C()){break _;}h=$z;e=b+1|0;g=0;$p=3;case 3:$z=AQ0(a,e,c,d,g);if(C()){break _;}g=$z;e=b-1|0;i=0;$p=4;case 4:$z=AQ0(a,e,c,d,i);if(C()){break _;}i=$z;e=d+1|0;j=0;$p=5;case 5:$z=AQ0(a,b,c,e,j);if(C()){break _;}j=$z;d=d-1|0;e=0;$p=6;case 6:$z=AQ0(a,b,c,d,e);if(C()){break _;}k=$z;if(g<=h)g=h;if(i<=g)i=g;if(j<=i)j=i;if(k<=j)k=j;return k;case 7:$z=Z7(a,g,e);if(C()){break _;}l=$z;return VX(l,b&15,c,d&15,a.gp);default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ZK(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 1;e=b>>4;f=d>>4;if(!C4(a,e,f))return 0;$p=1;continue _;}return 0;case 1:$z=Z7(a,e,f);if(C()){break _;}g=$z;return Pw(g,b&15,c,d&15);default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALU(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&c>=(-32000000)&&b<32000000&&c<=32000000){d=b>>4;e=c>>4;if(!C4(a,d,e))return 0;$p=1;continue _;}return 0;case 1:$z=Z7(a,d,e);if(C()){break _;}f=$z;return UU(f,b&15,c&15);default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AQm(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(EI(a,c,d,e)){if(b===BkJ){$p=1;continue _;}if(b===BkK){$p=2;continue _;}if(!Bdl.k.bw){$p=3;continue _;}}return;case 1:$z=ZK(a,c,d,e);if(C()){break _;}g=$z;if(g)f=15;if(Bdl.k.bw)return;$p=3;continue _;case 2:$z=ACH(a,c,d,e);if(C()){break _;}g=$z;L();if(BgQ.data[g]>f)f=BgQ.data[g];if(Bdl.k.bw)return;$p=3;case 3:$z=ALx(a,b,c,d,e);if(C()){break _;}g
=$z;if(g==f)return;$p=4;case 4:Zj(a,b,c,d,e,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALx(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=0&&d<128&&c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000){f=c>>4;g=e>>4;if(!C4(a,f,g))return 0;$p=1;continue _;}return b.Ar;case 1:$z=Z7(a,f,g);if(C()){break _;}h=$z;return ACw(h,b,c&15,d,e&15);default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AMG(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000&&d>=0&&d<128){g=c>>4;h=e>>4;if(C4(a,g,h)){$p=1;continue _;}}return;case 1:$z=Z7(a,g,h);if(C()){break _;}i=$z;AQ1(i,b,c&15,d,e&15,f);g=0;while(g<a.cv.p){Rz(Z(a.cv,g),c,d,e);g=g+1|0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANu(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=BkG.data;$p=1;case 1:$z=XI(a,b,c,d);if(C()){break _;}b=$z;return e[b];default:E_();}}C3().s(a,b,c,d,e,$p);}
function RI(a){return a.gp>=4?0:1;}
function AJz(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;$p=1;case 1:$z=AFg(a,b,c,d);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,$p);}
function AFg(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(!(isNaN(c.x)?1:0)&&!(isNaN(c.z)?1:0)&&!(isNaN(c.w)?1:0)){e
=K(c.x);f=K(c.z);g=K(c.w);h=K(b.x);i=K(b.z);j=K(b.w);k=20+(-1)|0;if(20<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=
s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;}return null;}return null;case 1:$z=ACH(a,h,i,j);if(C()){break _;}x=$z;$p=2;case 2:$z=AEX(a,h,i,j);if(C()){break _;}y=$z;L();z=Be2.data[x];if(x>0&&z.o9(y,d)){$p=5;continue _;}o=i-1|0;$p=3;case 3:$z=ACH(a,h,o,j);if
(C()){break _;}p=$z;$p=4;case 4:$z=AEX(a,h,o,j);if(C()){break _;}x=$z;w=Be2.data[p];if(p>0&&w.o9(x,d)){$p=6;continue _;}p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)
/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;case 5:$z=z.nM(a,h,i,j,b,c);if(C()){break _;}ba=$z;if(ba!==null)return ba;o=i-1|0;$p=3;continue _;case 6:$z=w.nM(a,h,o,j,b,c);if(C()){break _;}ba
=$z;if(ba!==null)return ba;p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=R(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=R(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=R(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t
*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function Di(a,b,c,d,e){var f,g,h;f=0;g=R(d,1.0);e=16.0*d;while(f<a.cv.p){h=16.0;if(g>0)h=e;if(LW(a.bg,b)<h*h)Z(a.cv,f);f=f+1|0;}}
function Ex(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$$je;a:{b:{try{h=0;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){i=$$je;break b;}else{throw $$e;}}j=R(f,1.0);k=16.0*f;while(true){try{if(h>=Df(a.cv))break;l=16.0;if(j>0)l=k;m=b-a.bg.d;n=c-a.bg.j;o=d-a.bg.e;if(m*m+n*n+o*o<l*l)ADd(Z(a.cv,h),e,b,c,d,f,g);h=h+1|0;continue;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){i=$$je;break b;}else{throw $$e;}}}break a;}Ce(i);}}
function ATt(a,b,c,d,e,f){return;}
function BX(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.cv.p){AIh(Z(a.cv,i),b,c,d,e,f,g,h);i=i+1|0;}}
function AOt(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d/16.0);d=K(b.e/16.0);if(!C4(a,c,d)){e=DT();f=new T;V(f);B7(e,U(FL(H(f,B(377)),b)));return;}$p=1;case 1:$z=Z7(a,c,d);if(C()){break _;}e=$z;V0(e,b);S(a.dW,b);g=0;while(g<a.cv.p){Z(a.cv,g);g=g+1|0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AVl(a,b){Cd(b);}
function ANQ(a,b){S(a.cv,b);}
function AK8(a,b){H8(a.cv,b);}
function X3(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DH(a.ng);d=K(c.Y);e=K(c.bl+1.0);f=K(c.Q);g=K(c.bj+1.0);h=K(c.Z);i=K(c.bm+1.0);f=f-1|0;while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=Be2.data;$p=2;continue _;}j=j+1|0;}d=d+1|0;}c=Dw(c,0.25,0.25,0.25);$p=1;case 1:$z=ADY(a,b,c);if(C()){break _;}m=$z;n
=0;while(n<m.p){o=Z(m,n).BM();if(o!==null)S(a.ng,o);c=b.Bd(Z(m,n));if(c!==null)S(a.ng,c);n=n+1|0;}return a.ng;case 2:$z=ACH(a,d,j,k);if(C()){break _;}n=$z;p=l[n];if(p!==null){m=a.ng;$p=3;continue _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dw(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=Be2.data;continue _;case 3:p.FS(a,d,j,k,c,m);if(C()){break _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dw(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=Be2.data;$p=2;continue _;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function OA(a,b){var c;c=1.0-(BC(Hx(a,b)*3.1415927410125732*2.0)*2.0+0.5);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*11.0|0;}
function O2(a,b){var c,d,e,f;c=BC(Hx(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.ss,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.ss,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.ss,Long_fromInt(255)))/255.0;return BY(d*c,e*c,f*c);}
function Hx(a,b){var c;c=(Long_rem(a.ec,Long_fromInt(24000)).lo+b)/24000.0-0.25;if(c<0.0)c=c+1.0;if(c>1.0)c=c-1.0;return c+(1.0-(GD(c*3.141592653589793)+1.0)/2.0-c)/3.0;}
function S$(a,b){var c,d,e,f;c=BC(Hx(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.ru,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.ru,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.ru,Long_fromInt(255)))/255.0;b=c*0.8999999761581421+0.10000000149011612;return BY(d*b,e*b,f*(c*0.8500000238418579+0.15000000596046448));}
function ADF(a,b){var c,d,e,f;c=BC(Hx(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sY,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sY,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sY,Long_fromInt(255)))/255.0;b=c*0.9399999976158142+0.05999999865889549;return BY(d*b,e*b,f*(c*0.9100000262260437+0.09000000357627869));}
function A8E(a,b,c){return 64;}
function AJF(a,b){var c;c=1.0-(BC(Hx(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*c*0.5;}
function Fn(a,b,c,d,e){var f,g;f=new J4;g=BkL;BkL=Long_add(g,Long_fromInt(1));f.oX=g;f.fI=b;f.fr=c;f.fM=d;f.qb=e;if(If(a,b-8|0,c-8|0,d-8|0,b+8|0,c+8|0,d+8|0)){if(e>0){L();f.jm=Long_add(Long_fromInt(Be2.data[e].mx()),a.ec);}if(!WK(a.kV,f)){Xq(a.kV,f);Zv(a.gQ,f);}}}
function APs(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Gc(a.dW,a.l8);b=0;while(b<a.cv.p){Z(a.cv,b);c=0;while(c<a.l8.p){Z(a.l8,c);c=c+1|0;}b=b+1|0;}DH(a.l8);b=0;a:while(true){if(b>=a.dW.p){b=0;if(b>=a.fD.p)return;d=Z(a.fD,b);$p=1;continue _;}b:{e=Z(a.dW,b);if(e.bD!==null){if(!e.bD.cR&&e.bD.bI===e)break b;e.bD.bI=null;e.bD=null;}if(!e.cR){$p=2;continue _;}if(e.cR){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,
c,f))break a;d=a.dW;c=b+(-1)|0;Em(d,b);g=0;while(g<a.cv.p){Z(a.cv,g);g=g+1|0;}b=c;}}b=b+1|0;}$p=3;continue _;case 1:d.tS();if(C()){break _;}b=b+1|0;if(b>=a.fD.p)return;d=Z(a.fD,b);continue _;case 2:XF(a,e);if(C()){break _;}while(true){if(e.cR){c=K(e.d/16.0);f=K(e.e/16.0);if(C4(a,c,f)){$p=3;continue _;}d=a.dW;c=b+(-1)|0;Em(d,b);g=0;while(g<a.cv.p){Z(a.cv,g);g=g+1|0;}b=c;}b:{while(true){b=b+1|0;if(b>=a.dW.p){b=0;if(b>=a.fD.p)return;d=Z(a.fD,b);$p=1;continue _;}e=Z(a.dW,b);if(e.bD===null)break b;if(e.bD.cR)break;if
(e.bD.bI!==e)break;}e.bD.bI=null;e.bD=null;}if(e.cR)continue;else break;}continue _;case 3:$z=Z7(a,c,f);if(C()){break _;}d=$z;ANb(d,e);while(true){d=a.dW;c=b+(-1)|0;Em(d,b);g=0;while(g<a.cv.p){Z(a.cv,g);g=g+1|0;}b=c;while(true){b=b+1|0;if(b>=a.dW.p){b=0;if(b>=a.fD.p)return;d=Z(a.fD,b);$p=1;continue _;}e=Z(a.dW,b);if(e.bD!==null){if(!e.bD.cR&&e.bD.bI===e)continue;e.bD.bI=null;e.bD=null;}if(!e.cR){$p=2;continue _;}if(e.cR)break;}c=K(e.d/16.0);f=K(e.e/16.0);if(!C4(a,c,f))continue;else break;}continue _;default:
E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function XF(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d);K(b.j);d=K(b.e);if(!If(a,c-16|0,0,d-16|0,c+16|0,128,d+16|0))return;b.cd=b.d;b.b0=b.j;b.ce=b.e;b.O=b.v;b.R=b.J;e=K(b.d/16.0);f=K(b.j/16.0);g=K(b.e/16.0);if(b.bD===null){$p=1;continue _;}$p=2;continue _;case 1:b.ep();if(C()){break _;}h=K(b.d/16.0);i=K(b.j/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g
==j){if(b.bI!==null){if(!b.bI.cR&&b.bI.bD===b){k=b.bI;$p=6;continue _;}b.bI.bD=null;b.bI=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cd;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b0;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ce;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.R;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.O;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 2:b.B2();if(C()){break _;}h=K(b.d/16.0);i=K(b.j
/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g==j){if(b.bI!==null){if(!b.bI.cR&&b.bI.bD===b){k=b.bI;$p=6;continue _;}b.bI.bD=null;b.bI=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cd;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b0;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ce;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.R;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.O;return;}if(C4(a,e,g)){$p=3;continue _;}if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 3:$z=Z7(a,
e,g);if(C()){break _;}k=$z;R$(k,b,f);if(!C4(a,h,j)){$p=4;continue _;}$p=5;continue _;case 4:b.Dl();if(C()){break _;}if(b.bI!==null){if(!b.bI.cR&&b.bI.bD===b){k=b.bI;$p=6;continue _;}b.bI.bD=null;b.bI=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cd;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b0;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ce;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.R;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.O;return;case 5:$z=Z7(a,h,j);if
(C()){break _;}k=$z;V0(k,b);if(b.bI!==null){if(!b.bI.cR&&b.bI.bD===b){k=b.bI;$p=6;continue _;}b.bI.bD=null;b.bI=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cd;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b0;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ce;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.R;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.O;return;case 6:XF(a,k);if(C()){break _;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cd;if(!(!(isNaN(b.j)?1:0)
&&!(!isFinite(b.j)?1:0)))b.j=b.b0;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ce;if(!(!(isNaN(b.J)?1:0)&&!(!isFinite(b.J)?1:0)))b.J=b.R;if(!(!(isNaN(b.v)?1:0)&&!(!isFinite(b.v)?1:0)))b.v=b.O;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ANh(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:$z=ADY(a,c,b);if(C()){break _;}c=$z;d=0;while(d<c.p){e=Z(c,d);if(!e.cR&&e.mG)return 0;d=d+1|0;}return 1;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AJx(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.Y);d=K(b.bl+1.0);e=K(b.Q);f=K(b.bj+1.0);g=K(b.Z);h=K(b.bm+1.0);if(b.Y<0.0)c=c+(-1)|0;if(b.Q<0.0)e=e+(-1)|0;if(b.Z<0.0)g=g+(-1)|0;while(c<d){i=e;while(i<f){j=g;if(j<h){L();k=Be2.data;$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACH(a,c,i,j);if(C()){break _;}l=$z;m
=k[l];if(m!==null&&m.b$.nI())return 1;j=j+1|0;a:while(true){if(j<h){L();k=Be2.data;continue _;}i=i+1|0;while(i>=f){c=c+1|0;if(c>=d)break a;i=e;}j=g;}return 0;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARo(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.Y);d=K(b.bl+1.0);e=K(b.Q);f=K(b.bj+1.0);g=K(b.Z);h=K(b.bm+1.0);while(c<d){i=e;while(i<f){j=g;if(j<h){$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACH(a,c,i,j);if(C()){break _;}k=$z;L();if(k!=BgC.b&&k!=Bga.b&&k!=BgS.b){j=j+1|0;a:while(true){if(j<h){continue _;}i=i+1|0;while(i>=f){c=c
+1|0;if(c>=d)break a;i=e;}j=g;}return 0;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAG(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.Y);f=K(b.bl+1.0);g=K(b.Q);h=K(b.bj+1.0);i=K(b.Z);j=K(b.bm+1.0);k=0;l=BY(0.0,0.0,0.0);m=h;while(e<f){n=g;while(n<h){o=i;if(o<j){L();p=Be2.data;$p=1;continue _;}n=n+1|0;}e=e+1|0;}if(HO(l)>0.0){b=CD(l);d.g=d.g
+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 1:$z=ACH(a,e,n,o);if(C()){break _;}q=$z;r=p[q];if(r!==null&&r.b$===c){s=n+1|0;$p=2;continue _;}o=o+1|0;a:while(true){if(o<j){L();p=Be2.data;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break a;n=g;}o=i;}if(HO(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 2:$z=AEX(a,e,n,o);if(C()){break _;}q=$z;if(m>=s-Jz(q)){k=1;$p=3;continue _;}o=o+1|0;b:while(true){if(o<j){L();p=Be2.data;$p=1;continue _;}n=n+1|0;while(n
>=h){e=e+1|0;if(e>=f)break b;n=g;}o=i;}if(HO(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 3:r.qH(a,e,n,o,d,l);if(C()){break _;}o=o+1|0;c:while(true){if(o<j){L();p=Be2.data;$p=1;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break c;n=g;}o=i;}if(HO(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AOG(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K(b.Y);e=K(b.bl+1.0);f=K(b.Q);g=K(b.bj+1.0);h=K(b.Z);i=K(b.bm+1.0);while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=Be2.data;$p=1;continue _;}j=j+1|0;}d=d+1|0;}return 0;case 1:$z=ACH(a,d,j,k);if(C()){break _;}m=$z;n=l[m];if(n!==null&&n.b$===c)return 1;k=k+1|0;a:while(true)
{if(k<i){L();l=Be2.data;continue _;}j=j+1|0;while(j>=g){d=d+1|0;if(d>=e)break a;j=f;}k=h;}return 0;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Yi(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=new W1;$p=1;case 1:AJh(g,a,b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ADO(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0/((c.bl-c.Y)*2.0+1.0);e=1.0/((c.bj-c.Q)*2.0+1.0);f=1.0/((c.bm-c.Z)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){if(0.0<=1.0){k=c.Y+(c.bl-c.Y)*i;l=c.Q+(c.bj-c.Q)*j;m=c.Z;n=c.bm-c.Z;o=0.0;p=BY(k,l,m+n*o);$p=1;continue _;}j
=j+e;}i=i+d;}return g/h;case 1:$z=AJz(a,p,b);if(C()){break _;}p=$z;if(p===null)g=g+1|0;h=h+1|0;q=o+f;a:while(true){if(q<=1.0){k=c.Y+(c.bl-c.Y)*i;l=c.Q+(c.bj-c.Q)*j;m=c.Z;n=c.bm-c.Z;o=q;p=BY(k,l,m+n*o);continue _;}j=j+e;while(j>1.0){i=i+d;if(i>1.0)break a;j=0.0;}q=0.0;}return g/h;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function ABV(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;$p=1;case 1:$z=ACH(a,b,c,d);if(C()){break _;}e=$z;L();if(e!=BgC.b)return;Ex(a,b+0.5,c+0.5,d+0.5,B(215),0.5,2.5999999046325684+(N(a.r)-N(a.r))*0.800000011920929);e=0;$p=2;case 2:APK(a,b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AX5(a,b){return null;}
function AOj(a){var b;b=new T;V(b);return U(Be(H(b,B(378)),a.dW.p));}
function AYd(a){return a.bg;}
function ANK(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=Z7(a,e,f);if(C()){break _;}g=$z;if(g===null)return null;b=b&15;d=d&15;$p=2;case 2:$z=ANB(g,b,c,d);if(C()){break _;}g=$z;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AF9(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b>>4;g=d>>4;$p=1;case 1:$z=Z7(a,f,g);if(C()){break _;}h=$z;if(h!==null)AJy(h,b&15,c,d&15,e);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AF0(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=Z7(a,e,f);if(C()){break _;}g=$z;if(g!==null)AEb(g,b&15,c,d&15);return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAP(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();e=Be2.data;$p=1;case 1:$z=ACH(a,b,c,d);if(C()){break _;}b=$z;f=e[b];return f!==null?f.d2():0;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJv(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=1;$p=1;case 1:ABQ(a,c,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AIA(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=100000;if(a.fF.p<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=Em(a.fF,a.fF.p-1|0);$p=1;case 1:AOA(c,a);if(C()){break _;}if(a.fF.p<=0)return 0;b=b+(-1)|0;if(b<=0)return 1;c=Em(a.fF,a.fF.p-1|0);continue _;default:E_();}}C3().s(a,b,c,$p);}
function Zj(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=a.fF.p;if(4<=i)i=4;j=0;while(true){if(j>=i){k=a.fF;l=new VV;l.ct=b;l.l6=c;l.fZ=d;l.f0=e;l.fy=f;l.fd=g;l.eL=h;S(k,l);if(a.fF.p>100000&&a.fF.p>50000){$p=1;continue _;}return;}k=Z(a.fF,(a.fF.p-j|0)-1|0);if(k.ct===b&&ALP(k,c,d,e,f,g,h))break;j=j+1|0;}return;case 1:AIA(a);if(C()){break _;}if
(a.fF.p<=50000)return;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Rh(a){var b;b=OA(a,1.0);if(b!=a.gp)a.gp=b;}
function Yc(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:TD(a.iR);if(!Ma(a.dW,a.bg)&&a.bg!==null){B7(DT(),B(379));b=a.bg;$p=1;continue _;}a:{c=OA(a,1.0);if(c!=a.gp){a.gp=c;d=0;while(true){if(d>=a.cv.p)break a;VL(Z(a.cv,d));d=d+1|0;}}}a.ec=Long_add(a.ec,Long_fromInt(1));if(Long_ne(Long_rem(a.ec,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c
=0;b=null;$p=4;continue _;case 1:AOt(a,b);if(C()){break _;}b:{c=OA(a,1.0);if(c!=a.gp){a.gp=c;d=0;while(true){if(d>=a.cv.p)break b;VL(Z(a.cv,d));d=d+1|0;}}}a.ec=Long_add(a.ec,Long_fromInt(1));if(Long_ne(Long_rem(a.ec,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c=0;b=null;$p=4;continue _;case 2:ABC(a,c);if(C()){break _;}d=K(a.bg.d);e=K(a.bg.e);b=new Is;f=d-64|0;g=0;h=e-64|0;i=d+64|0;j=128;c=e+64|0;$p=3;case 3:AEI(b,a,f,g,h,i,j,c);if(C()){break _;}f=0;if(f>=8000)return;a.hZ=(a.hZ*3|0)+a.sg|0;g=a.hZ>>2;h
=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p=5;continue _;case 4:ABQ(a,c,b);if(C()){break _;}c=0;$p=2;continue _;case 5:$z=Hy(b,h,j,i);if(C()){break _;}k=$z;L();if(BgM.data[k]){l=Be2.data[k];m=a.r;$p=6;continue _;}f=f+1|0;if(f>=8000)return;a.hZ=(a.hZ*3|0)+a.sg|0;g=a.hZ>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;continue _;case 6:l.e8(a,h,j,i,m);if(C()){break _;}f=f+1|0;if(f>=8000)return;a.hZ=(a.hZ*3|0)+a.sg|0;g=a.hZ>>2;h=((g&127)-64|0)+d|0;i=((g>>8&127)-64|0)+e|0;j=g>>16&127;$p
=5;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ABC(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=JB(a.gQ);if(c!=IM(a.kV)){d=new D2;Bj(d,B(380));M(d);}if(c>500)c=500;e=0;a:{while(true){if(e>=c)break a;f=Nh(a.gQ);if(!b&&Long_gt(f.jm,a.ec))break;MV(a.gQ,f);Ld(a.kV,f);if(If(a,f.fI-8|0,f.fr-8|0,f.fM-8|0,f.fI+8|0,f.fr+8|0,f.fM+8|0)){g=f.fI;h=f.fr;i=f.fM;$p=1;continue _;}e=e+1|0;}}return !JB(a.gQ)?0:1;case 1:$z=ACH(a,g,
h,i);if(C()){break _;}g=$z;if(g==f.qb&&g>0){L();d=Be2.data[g];g=f.fI;h=f.fr;i=f.fM;f=a.r;$p=2;continue _;}b:{while(true){e=e+1|0;if(e>=c)break b;f=Nh(a.gQ);if(!b&&Long_gt(f.jm,a.ec))break;MV(a.gQ,f);Ld(a.kV,f);if(!If(a,f.fI-8|0,f.fr-8|0,f.fM-8|0,f.fI+8|0,f.fr+8|0,f.fM+8|0))continue;else{g=f.fI;h=f.fr;i=f.fM;continue _;}}}return !JB(a.gQ)?0:1;case 2:d.e8(a,g,h,i,f);if(C()){break _;}c:{while(true){e=e+1|0;if(e>=c)break c;f=Nh(a.gQ);if(!b&&Long_gt(f.jm,a.ec))break;MV(a.gQ,f);Ld(a.kV,f);if(!If(a,f.fI-8|0,f.fr-8
|0,f.fM-8|0,f.fI+8|0,f.fr+8|0,f.fM+8|0))continue;else{g=f.fI;h=f.fr;i=f.fM;$p=1;continue _;}}}return !JB(a.gQ)?0:1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AFn(a,b,c,d){var e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=16;f=new DA;g=0;if(g>=1000)return;h=(b+E(a.r,e)|0)-E(a.r,e)|0;i=(c+E(a.r,e)|0)-E(a.r,e)|0;j=(d+E(a.r,e)|0)-E(a.r,e)|0;$p=1;case 1:$z=ACH(a,h,i,j);if(C()){break _;}k=$z;if(k>0){L();l=Be2.data[k];$p=2;continue _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.r,e)|0)-E(a.r,e)|0;i=(c+E(a.r,e)|0)-E(a.r,
e)|0;j=(d+E(a.r,e)|0)-E(a.r,e)|0;continue _;case 2:l.kT(a,h,i,j,f);if(C()){break _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.r,e)|0)-E(a.r,e)|0;i=(c+E(a.r,e)|0)-E(a.r,e)|0;j=(d+E(a.r,e)|0)-E(a.r,e)|0;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADY(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:DH(a.ql);d=K((c.Y-2.0)/16.0);e=K((c.bl+2.0)/16.0);f=K((c.Z-2.0)/16.0);g=K((c.bm+2.0)/16.0);while(d<=e){h=f;while(h<=g){if(C4(a,d,h)){$p=1;continue _;}h=h+1|0;}d=d+1|0;}return a.ql;case 1:$z=Z7(a,d,h);if(C()){break _;}i=$z;AKd(i,b,c,a.ql);a:while(true){h=h+1|0;while(h>g){d=d+1|0;if(d>e)break a;h=f;}if(!C4(a,d,h))continue;else
{continue _;}}return a.ql;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ANr(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K((c.Y-2.0)/16.0);e=K((c.bl+2.0)/16.0);f=K((c.Z-2.0)/16.0);g=K((c.bm+2.0)/16.0);h=Ch();while(d<=e){i=f;while(i<=g){if(C4(a,d,i)){$p=1;continue _;}i=i+1|0;}d=d+1|0;}return h;case 1:$z=Z7(a,d,i);if(C()){break _;}j=$z;AMw(j,b,c,h);a:while(true){i=i+1|0;while(i>g){d=d+1|0;if(d>e)break a;i=f;}if(!C4(a,d,i))continue;else
{continue _;}}return h;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AWZ(a){return a.dW;}
function AGJ(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!EI(a,b,c,d))return;$p=1;case 1:$z=X5(a,b,d);if(C()){break _;}e=$z;SS(e);return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function YD(a,b){var c,d;c=0;d=0;while(d<a.dW.p){if(Qe(b,Dm(Z(a.dW,d))))c=c+1|0;d=d+1|0;}return c;}
function AQs(a,b){var c,d;DE(a.dW,b);c=0;while(c<a.cv.p){Z(a.cv,c);d=0;while(d<b.p){Z(b,d);d=d+1|0;}c=c+1|0;}}
function ARg(a,b){DE(a.l8,b);}
function Wl(a){while(TD(a.iR)){}}
function AIn(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACH(a,c,d,e);if(C()){break _;}g=$z;L();h=Be2.data[g];i=Be2.data[b];$p=2;case 2:$z=i.hv(a,c,d,e);if(C()){break _;}j=$z;if(f)j=null;if(!(b>0&&h===null)&&h!==Bf_&&h!==BgR&&h!==Bga&&h!==BgS&&h!==BgC)return 0;if(j===null){$p=3;continue _;}$p=4;continue _;case 3:$z=i.fX(a,c,d,e);if(C()){break _;}b=$z;return !b
?0:1;case 4:$z=ANh(a,j);if(C()){break _;}b=$z;if(!b)return 0;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ASb(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.d);f=K(b.j);g=K(b.e);h=d+32.0|0;i=e-h|0;j=f-h|0;k=g-h|0;l=e+h|0;m=f+h|0;n=g+h|0;o=new Is;$p=1;case 1:AEI(o,a,i,j,k,l,m,n);if(C()){break _;}return APE(A2W(o),b,c,d);default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AJJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=K(b.d);h=K(b.j);i=K(b.e);j=f+32.0|0;k=g-j|0;l=h-j|0;m=i-j|0;n=g+j|0;o=h+j|0;p=i+j|0;q=new Is;$p=1;case 1:AEI(q,a,k,l,m,n,o,p);if(C()){break _;}return AGq(A2W(q),b,c,d,e,f);default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function XQ(){var b,c;BkG=$rt_createFloatArray(16);b=0;while(b<=15){c=1.0-b/15.0;BkG.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}}
function Mj(){var a=this;D.call(a);a.uv=null;a.zG=null;a.lr=0;a.EL=0.0;a.EK=0.0;a.Fa=0;a.ma=0;a.mz=0;a.ny=0;a.qf=0;a.rS=0;a.z4=0;a.AA=0.0;a.z6=0.0;a.zE=0.0;a.oB=0;}
var BeY=null;function BA(){BA=Br(Mj);A2G();}
function Bt(a){var b,c,d,e,f;if(!a.oB)return 0;a.oB=0;if(a.lr>0){if(a.mz)W4(32888);if(a.ma)W4(32886);b=a.z4;c=a.lr;d=a.uv.buffer;e=a.lr*7|0;ALF(b,0,c,new Int32Array(d,0,e));if(a.mz)Tw(32888);if(a.ma)Tw(32886);}f=a.ny*4|0;WJ(a);return f;}
function WJ(a){a.lr=0;a.ny=0;a.qf=0;}
function Bz(a){Gj(a,7);}
function Gj(a,b){if(a.oB)Bt(a);a.oB=1;WJ(a);a.z4=b;a.ma=0;a.mz=0;a.rS=0;}
function AJL(a,b,c){a.mz=1;a.EL=b;a.EK=c;}
function Cr(a,b,c,d){Pm(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function Gw(a,b,c,d,e){Qv(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function Pm(a,b,c,d){Qv(a,b,c,d,255);}
function Qv(a,b,c,d,e){if(!a.rS){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.ma=1;a.Fa=e<<24|d<<16|c<<8|b;}}
function G(a,b,c,d,e,f){AJL(a,e,f);Bl(a,b,c,d);}
function Bl(a,b,c,d){var e,f,g,h,i;if(a.qf>65534)return;a.qf=a.qf+1|0;a.lr=a.lr+1|0;e=a.ny;f=a.uv;g=a.zG;h=e+0|0;i=b+a.AA;g[h]=i;h=e+1|0;i=c+a.z6;g[h]=i;h=e+2|0;i=d+a.zE;g[h]=i;if(a.mz){h=e+3|0;i=a.EL;g[h]=i;h=e+4|0;i=a.EK;g[h]=i;}if(a.ma){h=e+5|0;e=a.Fa;f[h]=e;}a.ny=a.ny+7|0;}
function ES(a,b){Pm(a,b>>16&255,b>>8&255,b&255);}
function ADB(a){a.rS=1;}
function Dd(a,b,c,d){Cj(b,c,d);}
function Fa(a,b,c,d){a.AA=b;a.z6=c;a.zE=d;}
function A2G(){var b,c;b=new Mj;BA();b.lr=0;b.ma=0;b.mz=0;b.ny=0;b.qf=0;b.rS=0;b.oB=0;c=new ArrayBuffer(2097152);b.uv=new Int32Array(c);b.zG=new Float32Array(c);BeY=b;}
function ANs(){var a=this;D.call(a);a.fO=0;a.fK=0;}
function FH(a,b){var c=new ANs();A0t(c,a,b);return c;}
function A0t(a,b,c){var d,e;a.fO=b;a.fK=c;d=1;while(true){c=a.fO;e=d+1|0;if((c/e|0)<320)break;if((a.fK/e|0)<240)break;d=e;}a.fO=a.fO/d|0;a.fK=a.fK/d|0;}
function AED(a){return a.fO;}
function Zr(a){return a.fK;}
function Ge(){D.call(this);this.mW=0.0;}
function BkM(){var a=new Ge();Nu(a);return a;}
function Nu(a){a.mW=0.0;}
function K1(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>24&255)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>24&255)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;Bc(3553);Ba(3042);Bc(3008);Dg(770,771);BA();p=BeY;Bz(p);Gw(p,i,j,k,h);q=d;r=c;Bl(p,q,r,0.0);s=b;Bl(p,s,r,0.0);Gw(p,m,n,o,l);r=e;Bl(p,s,r,0.0);Bl(p,q,r,0.0);Bt(p);Bc(3042);Ba(3008);Ba(3553);}
function DF(a,b,c,d,e,f){Cz(b,c,d-(Dx(b,c)/2|0)|0,e,f);}
function Hs(a,b,c,d,e,f){Cz(b,c,d,e,f);}
function CI(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;BA();h=BeY;Bz(h);i=b+0|0;j=c+g|0;k=a.mW;l=(d+0|0)*0.00390625;m=(e+g|0)*0.00390625;G(h,i,j,k,l,m);n=b+f|0;o=a.mW;k=(d+f|0)*0.00390625;G(h,n,j,o,k,m);m=c+0|0;o=a.mW;j=(e+0|0)*0.00390625;G(h,n,m,o,k,j);G(h,i,m,a.mW,l,j);Bt(h);}
function CT(){var a=this;Ge.call(a);a.I=null;a.bn=0;a.bE=0;a.bH=null;a.pU=0;a.b1=null;}
function BkN(){var a=new CT();DQ(a);return a;}
function DQ(a){Nu(a);a.bH=Ch();a.pU=0;}
function AFT(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.bH.p)return;f=Z(a.bH,e);g=a.I;$p=1;case 1:AC6(f,g,b,c);if(C()){break _;}e=e+1|0;if(e>=a.bH.p)return;f=Z(a.bH,e);g=a.I;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function YY(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.I;e=null;$p=1;case 1:AD8(d,e);if(C()){break _;}d=a.I;$p=2;case 2:AFy(d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ZA(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bH.p)break a;f=Z(a.bH,e);if(Sa(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.iH(f);if(C()){break _;}while(true){e=e+1|0;if(e>=a.bH.p)break;f=Z(a.bH,e);if(!Sa(f,b,c))continue;else{continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A2O(a,b,c,d){return;}
function AM5(a,b){return;}
function AQl(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.I=b;a.b1=b.e$;a.bn=c;a.bE=d;$p=1;case 1:a.hY();if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AQj(a){return;}
function AHk(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Fy()){$p=1;continue _;}if(!DU())return;$p=2;continue _;case 1:ZM(a);if(C()){break _;}if(Fy()){continue _;}if(!DU())return;$p=2;case 2:ASQ(a);if(C()){break _;}if(!DU())return;continue _;default:E_();}}C3().s(a,$p);}
function ZM(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cy()){a.Cw(Bx(ASc(),a.bn)/a.I.cc|0,(a.bE-(Bx(X1(),a.bE)/a.I.bB|0)|0)-1|0,CW());return;}b=Bx(ASc(),a.bn)/a.I.cc|0;c=(a.bE-(Bx(X1(),a.bE)/a.I.bB|0)|0)-1|0;d=CW();$p=1;case 1:a.Ja(b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ASQ(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!CV())return;Bb();if(Bep===null)b=0;else{c=$rt_str(Bep.key);b=Bep===null?32:Bg(c)>1?0:Y(c,0);}d=Bf();$p=1;case 1:a.pc(b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function A3w(a){return;}
function AIl(a){return;}
function ABs(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;$p=1;case 1:AIT(a,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function AIT(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.I.A!==null){K1(a,0,0,a.bn,a.bE,1610941696,(-1607454656));return;}Bc(2896);Bc(2912);BA();c=BeY;d=3553;e=a.I.bo;f=B(165);$p=1;case 1:$z=AHK(e,f);if(C()){break _;}g=$z;Cq(d,g);BW(1.0,1.0,1.0,1.0);Bz(c);ES(c,4210752);h=a.bE;i=a.bE/32.0;j=b;G(c,0.0,h,0.0,0.0,i+j);G(c,a.bn,a.bE,
0.0,a.bn/32.0,a.bE/32.0+j);k=a.bn;l=a.bn/32.0;m=0+b|0;G(c,k,0.0,0.0,l,m);G(c,0.0,0.0,0.0,0.0,m);Bt(c);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AVI(a){return 1;}
function AFt(){var a=this;D.call(a);a.la=null;a.jB=0;a.ik=0;a.vT=0;}
function A_M(a){var b=new AFt();A46(b,a);return b;}
function A46(a,b){a.la=J(D,b);a.jB=b;a.ik=0;a.vT=0;}
function MX(a,b){var c,d;c=a.ik;while(true){a.ik=a.ik+1|0;if(a.ik>=a.jB)a.ik=0;if(a.ik==c){c=a.jB;a.jB=a.jB+(a.jB/2|0)|0;d=a.la;a.la=J(D,a.jB);Dj(d,0,a.la,0,c);return MX(a,b);}if(a.la.data[a.ik]!==null)continue;else break;}a.la.data[a.ik]=b;a.vT=a.vT+1|0;return a.ik;}
function KK(a,b){if(b<a.jB&&b>=0)return a.la.data[b];return null;}
function MC(){D.call(this);}
function Es(){var a=this;MC.call(a);a.eu=0.0;a.es=0.0;a.et=0.0;a.er=0.0;a.ex=0.0;a.ey=0.0;a.ev=0.0;a.ew=0.0;a.eC=0.0;a.eA=0.0;a.eB=0.0;a.ez=0.0;a.gY=0.0;a.gZ=0.0;a.gW=0.0;a.gX=0.0;}
function Nm(){var a=new Es();A5i(a);return a;}
function A5i(a){Fp(a);}
function Fp(a){a.eu=1.0;a.es=0.0;a.et=0.0;a.er=0.0;a.ex=0.0;a.ey=1.0;a.ev=0.0;a.ew=0.0;a.eC=0.0;a.eA=0.0;a.eB=1.0;a.ez=0.0;a.gY=0.0;a.gZ=0.0;a.gW=0.0;a.gX=1.0;return a;}
function KH(a){a.eu=0.0;a.es=0.0;a.et=0.0;a.er=0.0;a.ex=0.0;a.ey=0.0;a.ev=0.0;a.ew=0.0;a.eC=0.0;a.eA=0.0;a.eB=0.0;a.ez=0.0;a.gY=0.0;a.gZ=0.0;a.gW=0.0;a.gX=0.0;return a;}
function F1(a,b){a.eu=b.eu;a.es=b.es;a.et=b.et;a.er=b.er;a.ex=b.ex;a.ey=b.ey;a.ev=b.ev;a.ew=b.ew;a.eC=b.eC;a.eA=b.eA;a.eB=b.eB;a.ez=b.ez;a.gY=b.gY;a.gZ=b.gZ;a.gW=b.gW;a.gX=b.gX;return a;}
function T1(a,b){CK(b,a.eu);CK(b,a.es);CK(b,a.et);CK(b,a.er);CK(b,a.ex);CK(b,a.ey);CK(b,a.ev);CK(b,a.ew);CK(b,a.eC);CK(b,a.eA);CK(b,a.eB);CK(b,a.ez);CK(b,a.gY);CK(b,a.gZ);CK(b,a.gW);CK(b,a.gX);return a;}
function IH(a,b){b=b.data;b[0]=a.eu;b[1]=a.es;b[2]=a.et;b[3]=a.er;b[4]=a.ex;b[5]=a.ey;b[6]=a.ev;b[7]=a.ew;b[8]=a.eC;b[9]=a.eA;b[10]=a.eB;b[11]=a.ez;b[12]=a.gY;b[13]=a.gZ;b[14]=a.gW;b[15]=a.gX;return a;}
function A$I(a,b){return Vg(a,b,a);}
function ZQ(a,b){a.eu=a.eu*b.fz;a.es=a.es*b.fz;a.et=a.et*b.fz;a.er=a.er*b.fz;a.ex=a.ex*b.fB;a.ey=a.ey*b.fB;a.ev=a.ev*b.fB;a.ew=a.ew*b.fB;a.eC=a.eC*b.fA;a.eA=a.eA*b.fA;a.eB=a.eB*b.fA;a.ez=a.ez*b.fA;return a;}
function AT6(a,b,c){return W8(a,b,c,a);}
function W8(a,b,c,d){return A6P(b,c,a,d);}
function A6P(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=Nm();f=b;g=GD(f);h=Gr(f);i=1.0-g;j=c.fz*c.fB;k=c.fB*c.fA;l=c.fz*c.fA;m=c.fz*h;n=c.fB*h;o=c.fA*h;p=c.fz*c.fz*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.fB*c.fB*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.fA*c.fA*i+g;z=d.eu*p+d.ex*q+d.eC*s;ba=d.es*p+d.ey*q+d.eA*s;bb=d.et*p+d.ev*q+d.eB*s;bc=d.er*p+d.ew*q+d.ez*s;bd=d.eu*t+d.ex*u+d.eC*v;be=d.es*t+d.ey*u+d.eA*v;bf=d.et*t+d.ev*u+d.eB*v;r=d.er*t+d.ew*u+d.ez*v;e.eC=d.eu*w+d.ex*x+d.eC*
y;e.eA=d.es*w+d.ey*x+d.eA*y;e.eB=d.et*w+d.ev*x+d.eB*y;e.ez=d.er*w+d.ew*x+d.ez*y;e.eu=z;e.es=ba;e.et=bb;e.er=bc;e.ex=bd;e.ey=be;e.ev=bf;e.ew=r;return e;}
function Vg(a,b,c){if(c===null)c=Nm();c.gY=c.gY+a.eu*b.fz+a.ex*b.fB+a.eC*b.fA;c.gZ=c.gZ+a.es*b.fz+a.ey*b.fB+a.eA*b.fA;c.gW=c.gW+a.et*b.fz+a.ev*b.fB+a.eB*b.fA;c.gX=c.gX+a.er*b.fz+a.ew*b.fB+a.ez*b.fA;return c;}
function Jk(a,b){var c;a:{if(b instanceof Es){b:{c:{b=b;if(a.eu!==b.eu)break c;if(a.es!==b.es)break c;if(a.et!==b.et)break c;if(a.er!==b.er)break c;if(a.ex!==b.ex)break c;if(a.ey!==b.ey)break c;if(a.ev!==b.ev)break c;if(a.ew!==b.ew)break c;if(a.eC!==b.eC)break c;if(a.eA!==b.eA)break c;if(a.eB!==b.eB)break c;if(a.ez!==b.ez)break c;if(a.gY!==b.gY)break c;if(a.gZ!==b.gZ)break c;if(a.gW!==b.gW)break c;if(a.gX===b.gX){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function Ol(){}
function I3(){D.call(this);}
function Wp(){}
function Ob(){}
function R9(){}
function Mw(){}
function Va(){var a=this;I3.call(a);a.fz=0.0;a.fB=0.0;a.fA=0.0;}
function BkO(){var a=new Va();A$o(a);return a;}
function A$o(a){return;}
function Mk(a,b,c,d){a.fz=b;a.fB=c;a.fA=d;}
function Wn(){}
function R3(){}
function G9(){var a=this;I3.call(a);a.le=0.0;a.lf=0.0;a.ld=0.0;a.pg=0.0;}
function A3c(){var a=new G9();AZ6(a);return a;}
function AZ6(a){return;}
function VN(a,b){a.le=b.le;a.lf=b.lf;a.ld=b.ld;a.pg=b.pg;return a;}
function A_J(a){return a.le;}
function ATA(a){return a.lf;}
function A0e(a){return a.ld;}
function A5N(a){return a.pg;}
function Th(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Dm(a)!==Dm(b))return 0;c=b;if(a.le===c.le&&a.lf===c.lf&&a.ld===c.ld&&a.pg===c.pg)return 1;return 0;}
function S7(){var a=this;D.call(a);a.Cp=null;a.Co=null;}
function AIQ(a){var b,c;b=a.Cp;c=a.Co;Ft(b);CM(c,null);}
function APa(){Fh.call(this);}
function A5g(a){var b=new APa();AYP(b,a);return b;}
function AYP(a,b){W2(a,b);}
function H3(){}
function UA(){}
function ADa(){var a=this;D.call(a);a.fR=null;a.iE=null;a.kH=null;a.p8=0;a.rh=0;a.ip=null;}
function AJN(a,b,c,d){var e=new ADa();AUB(e,a,b,c,d);return e;}
function AUB(a,b,c,d,e){a.ip=b;a.rh=a.ip.d4;a.fR=c;a.iE=d;a.p8=e;}
function GM(a){return a.fR===null?0:1;}
function GE(a){var b;RD(a);if(a.fR===null){b=new J8;O(b);M(b);}b=a.fR.zF;a.kH=a.fR;a.iE=a.fR;a.fR=a.fR.ht;a.p8=a.p8+1|0;return b;}
function AHw(a){var b,c;if(a.kH===null){b=new D2;O(b);M(b);}b=a.ip;c=a.kH;if(c.iC===null)b.pF=c.ht;else c.iC.ht=c.ht;if(c.ht===null)b.qo=c.iC;else c.ht.iC=c.iC;b.hz=b.hz-1|0;b.d4=b.d4+1|0;if(a.kH===a.iE){a.iE=!GM(a)?null:a.fR.iC;a.p8=a.p8-1|0;}else if(a.kH===a.fR)a.fR=!Z4(a)?null:a.iE.ht;a.rh=a.ip.d4;a.kH=null;}
function Z4(a){return a.iE===null?0:1;}
function ABE(a,b){var c;RD(a);c=new RN;c.zF=b;c.iC=a.iE;c.ht=a.fR;if(a.iE!==null)a.iE.ht=c;else a.ip.pF=c;if(a.fR!==null)a.fR.iC=c;else a.ip.qo=c;a.iE=c;b=a.ip;b.hz=b.hz+1|0;b=a.ip;b.d4=b.d4+1|0;a.rh=a.ip.d4;a.kH=null;}
function RD(a){var b;if(a.rh>=a.ip.d4)return;b=new K_;O(b);M(b);}
function RN(){var a=this;D.call(a);a.zF=null;a.ht=null;a.iC=null;}
function BkP(){var a=new RN();A03(a);return a;}
function A03(a){return;}
function KY(){var a=this;D.call(a);a.zD=null;a.kE=null;a.hd=null;a.l1=null;a.Cv=null;a.wW=null;a.sZ=0;a.Ec=0;}
var BkQ=0;var BeX=null;function AHK(a,b){var c,d,e,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=CQ(BeX,b);if(c!==null)return c.f$;try{AFu(a.kE);W3(a.kE);d=Q_(a.kE,0);if(Iy(b,B(381))){a.sZ=1;e=Kq(Jx(b,7));$p=1;continue _;}if(DB(b,B(179))&&AIV().k.pR)BkQ=1;e=Kq(b);$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof B2){}else{throw $$e;}}b=new B8;Bj(b,B(382));M(b);case 1:a:{try{$z=Zn(a,e);if(C()){break _;}c=$z;L4(a,c,d);a.sZ
=0;Rm(BeX,b,CY(d));}catch($$e){$$je=Bh($$e);if($$je instanceof B2){break a;}else{throw $$e;}}return d;}b=new B8;Bj(b,B(382));M(b);case 2:a:{try{$z=Zn(a,e);if(C()){break _;}c=$z;L4(a,c,d);BkQ=0;Rm(BeX,b,CY(d));}catch($$e){$$je=Bh($$e);if($$je instanceof B2){break a;}else{throw $$e;}}return d;}b=new B8;Bj(b,B(382));M(b);default:E_();}}C3().s(a,b,c,d,e,$p);}
function AHP(a,b){var c;EA(a.kE);W3(a.kE);c=Q_(a.kE,0);L4(a,b,c);BT(a.zD,CY(c),b);return c;}
function L4(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;Ea(a,c);if(!BkQ){Ej(3553,10241,9728);Ej(3553,10240,9728);}else{Ej(3553,10241,9986);Ej(3553,10240,9728);Ej(3553,33085,4);}if(a.Ec){Ej(3553,10241,9729);Ej(3553,10240,9729);}if(!a.sZ){Ej(3553,10242,10497);Ej(3553,10243,10497);}else{Ej(3553,10242,10496);Ej(3553,10243,10496);}d=b.xG;e=b.DI;f=b.t6;g=$rt_createByteArray(Bx(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if
(a.wW!==null&&a.wW.dv){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}a:{EA(a.hd);UV(a.hd,g);b=a.hd;EO(b,0);NE(b,h.length);SG(3553,0,6408,d,e,0,6408,5121,a.hd);if(BkQ){p=1;while(true){if(p>4)break a;o=d>>(p-1|0);q=d>>p;r=e>>p;EA(a.l1);s=0;while(s<q){t=0;while(t<r){b=a.hd;c=s*2|0;i=c+0|0;k=t*2|0;n=Bx(k+0|0,o);u=K9(b,(i+n|0)*4|0);b=a.hd;c=c+1|0;v=K9(b,(c+n|0)*4|0);b=a.hd;k=
Bx(k+1|0,o);w=K9(b,(c+k|0)*4|0);x=K9(a.hd,(i+k|0)*4|0);y=LA(a,LA(a,u,v),LA(a,w,x));ABg(a.l1,(s+Bx(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}SG(3553,p,6408,q,r,0,6408,5121,a.l1);z=a.hd;a.hd=a.l1;a.l1=z;p=p+1|0;}}}}
function AEf(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=B(383);$p=1;case 1:$z=AHK(a,b);if(C()){break _;}d=$z;return d;default:E_();}}C3().s(a,b,c,d,$p);}
function G7(a,b){S(a.Cv,b);b.pb();}
function LA(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function Zn(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AE7(b);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function Ea(a,b){if(b<0)return;Cq(3553,b);}
function ADR(){BkQ=0;}
function Wo(){var a=this;D.call(a);a.se=null;a.xF=0;a.tp=0;}
function BkR(a,b,c){var d=new Wo();AOU(d,a,b,c);return d;}
function AOU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.se=$rt_createIntArray(256);a.xF=0;e=Kq(c);$p=1;case 1:$z=AE7(e);if(C()){break _;}f
=$z;g=f.xG;e=f.t6;h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+Bx(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.se.data[h]=k+2|0;h=h+1|0;}a.xF=AHP(d,f);a.tp=IZ(288);BA();p=BeY;q=0;while(q<256){FG(a.tp+q|0,4864);Bz(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;G(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;G(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;G(p,7.989999771118164,0.0,0.0,x,y);G(p,0.0,0.0,0.0,u,y);Bt(p);Ee();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.dv){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}FG((a.tp+256|0)+l|0,4864);F5(ba/255.0,bb/255.0,bc/255.0);Ee();l=l+1|0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function Cz(a,b,c,d,e){SP(a,b,c+1|0,d+1|0,e,1);ED(a,b,c,d,e);}
function ED(a,b,c,d,e){SP(a,b,c,d,e,0);}
function SP(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Cq(3553,a.xF);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BW(g,h,i,j);B1();Bu(c,d,0.0);k=0;while(k<Bg(b)){c=k;while(true){d=Bg(b);k=c+1|0;if(d<=k)break;if(Y(b,c)!=167)break;l=UM(B(384),Y(AKy(b),k));c=c+2|0;}if(c<Bg(b)){m=Vs(Y(b,c));if(m>=0){FR((a.tp+m|0)+32|0);Bu(a.se.data[m+32|0],0.0,0.0);}}}BE();}
function Dx(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<Bg(b)){if(Y(b,d)==167)d=d+1|0;else{e=Vs(Y(b,d));if(e>=0)c=c+a.se.data[e+32|0]|0;}d=d+1|0;}return c;}
function AQQ(a,b){var c,d,e,f;c=Ch();d=ANy(b,B(158)).data;e=d.length;f=0;while(f<e){S(c,d[f]);f=f+1|0;}return c;}
function Qu(){var a=this;D.call(a);a.F$=0;a.F9=0;}
function BkS(){var a=new Qu();A$N(a);return a;}
function A$N(a){return;}
function YK(a){AMT(1);a.F$=0;a.F9=0;}
function AFP(a){LL();MS();AMT(0);}
function AK$(){var a=this;Eu.call(a);a.o8=null;a.rk=null;a.oG=null;a.s4=null;a.tj=0;}
function BaI(){var a=new AK$();A4K(a);return a;}
function A4K(a){L();HB(a,Bf_.W+1|0);a.o8=$rt_createFloatArray(256);a.rk=$rt_createFloatArray(256);a.oG=$rt_createFloatArray(256);a.s4=$rt_createFloatArray(256);a.tj=0;a.xa=2;}
function A0q(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.tj=a.tj+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=c-2|0;while(e<=c){f=b&15;g=e&15;d=d+a.o8.data[f+(g*16|0)|0];e=e+1|0;}h=a.rk.data;i=b+(c*16|0)|0;h[i]=d/3.200000047683716+a.oG.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){j=a.oG.data;i=b+(c*16|0)|0;j[i]=j[i]+a.s4.data[i]*0.05000000074505806;if(a.oG.data[i]<0.0)a.oG.data[i]=0.0;j=a.s4.data;j[i]=j[i]-0.30000001192092896;if(BR()<0.2)a.s4.data[i]=0.5;c=c+1|0;}b=b+1|0;}j=a.rk;a.rk=a.o8;a.o8
=j;c=0;while(c<256){d=a.o8.data[(c-(a.tj*16|0)|0)&255];if(d>1.0)d=1.0;if(d<0.0)d=0.0;k=d*d;i=32.0+k*32.0|0;l=50.0+k*64.0|0;m=255;n=146.0+k*50.0|0;if(a.mH){b=i*30|0;i=((b+(l*59|0)|0)+2805|0)/100|0;l=(b+(l*70|0)|0)/100|0;m=(b+17850|0)/100|0;}j=a.dB.data;b=c*4|0;j[b+0|0]=i<<24>>24;a.dB.data[b+1|0]=l<<24>>24;a.dB.data[b+2|0]=m<<24>>24;a.dB.data[b+3|0]=n<<24>>24;c=c+1|0;}}
function ACv(){var a=this;Eu.call(a);a.oC=null;a.rv=null;a.jV=null;a.sV=null;a.tz=0;}
function BcP(){var a=new ACv();A3D(a);return a;}
function A3D(a){L();HB(a,Bga.W+1|0);a.oC=$rt_createFloatArray(256);a.rv=$rt_createFloatArray(256);a.jV=$rt_createFloatArray(256);a.sV=$rt_createFloatArray(256);a.tz=0;a.xa=2;}
function A87(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.tz=a.tz+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Bp(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Bp(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){j=(g+e|0)&15;h=(i+f|0)&15;d=d+a.oC.data[j+(h*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.rv.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jV.data;e=(b+0|0)&15;j=((c+0|0)&15)*16|0;n=m[e+j|0];m=a.jV.data;h=h&15;n=n+m[h+j|0];m=a.jV.data;c=c+1|0;j=(c&15)*16|0;k[l]
=d+(n+m[h+j|0]+a.jV.data[e+j|0])/4.0*0.800000011920929;m=a.jV.data;m[l]=m[l]+a.sV.data[l]*0.009999999776482582;if(a.jV.data[l]<0.0)a.jV.data[l]=0.0;m=a.sV.data;m[l]=m[l]-0.05999999865889549;if(BR()<0.005)a.sV.data[l]=1.5;}b=b+1|0;}m=a.rv;a.rv=a.oC;a.oC=m;c=0;while(c<256){d=a.oC.data[(c-((a.tz/3|0)*16|0)|0)&255]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*100.0+155.0|0;n=d*d;h=n*255.0|0;l=n*d*d*128.0|0;if(a.mH){b=j*30|0;j=((b+(h*59|0)|0)+(l*11|0)|0)/100|0;h=(b+(h*70|0)|0)/100|0;l=(b+(l*70|0)|0)/100|0;}m=a.dB.data;b
=c*4|0;m[b+0|0]=j<<24>>24;a.dB.data[b+1|0]=h<<24>>24;a.dB.data[b+2|0]=l<<24>>24;a.dB.data[b+3|0]=(-1);c=c+1|0;}}
function ASl(){var a=this;Eu.call(a);a.mt=null;a.oP=null;}
function AVX(a){var b=new ASl();AZH(b,a);return b;}
function AZH(a,b){L();HB(a,BgC.W+(b*16|0)|0);a.mt=$rt_createFloatArray(320);a.oP=$rt_createFloatArray(320);}
function A3K(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<16){c=0;while(c<20){d=18;e=a.mt.data;f=c+1|0;g=e[b+((f%20|0)*16|0)|0]*18.0;h=b-1|0;while(h<=(b+1|0)){i=c;while(i<=f){if(h>=0&&i>=0&&h<16&&i<20)g=g+a.mt.data[h+(i*16|0)|0];d=d+1|0;i=i+1|0;}h=h+1|0;}e=a.oP.data;j=b+(c*16|0)|0;e[j]=g/(d*1.059999942779541);if(c>=19)a.oP.data[j]=BR()*BR()*BR()*4.0+BR()*0.10000000149011612+0.20000000298023224;c=f;}b=b+1|0;}e=a.oP;a.oP=a.mt;a.mt=e;f=0;while(f<256){k=a.mt.data[f]*1.7999999523162842;if(k>1.0)k=1.0;if(k<0.0)k=
0.0;l=k*155.0+100.0|0;g=k*k;m=g*255.0|0;j=g*k*k*k*k*k*k*k*k*255.0|0;n=255;if(k<0.5)n=0;if(a.mH){c=l*30|0;l=((c+(m*59|0)|0)+(j*11|0)|0)/100|0;m=(c+(m*70|0)|0)/100|0;j=(c+(j*70|0)|0)/100|0;}e=a.dB.data;b=f*4|0;e[b+0|0]=l<<24>>24;a.dB.data[b+1|0]=m<<24>>24;a.dB.data[b+2|0]=j<<24>>24;a.dB.data[b+3|0]=n<<24>>24;f=f+1|0;}}
function XA(){}
function AAH(){var a=this;D.call(a);a.iJ=null;a.bN=null;a.iI=null;a.d8=null;a.el=null;a.cQ=null;a.fG=0;a.gh=0;a.kb=0;a.zi=0;a.bP=null;a.En=null;a.py=0;a.ou=0;a.x0=0;a.xx=0;a.qt=0;a.qu=0;a.qv=0;a.te=0;a.td=0;a.tf=0;a.sb=0;a.tb=0;a.lk=0;a.xE=0;a.HA=null;a.H8=null;a.sf=0;a.r1=0;a.IQ=0;a.sz=0;a.qD=0;a.o2=null;a.Hu=0;a.G2=0;a.rJ=0.0;a.rI=0.0;a.rH=0.0;a.tO=0.0;a.q_=0;a.iP=null;a.vq=0;a.EP=0;a.vS=0;a.uG=Long_ZERO;a.lT=null;a.lj=null;}
function Ba7(a,b){var c=new AAH();A2B(c,a,b);return c;}
function A2B(a,b,c){var d,e,f,g,h,i,j,k;a.iJ=Ch();a.d8=Ch();a.py=0;a.sb=(-1);a.HA=$rt_createIntArray(50000);a.H8=Rp(64);a.o2=Ch();a.Hu=0;a.G2=IZ(1);a.rJ=(-9999.0);a.rI=(-9999.0);a.rH=(-9999.0);a.q_=0;a.uG=Long_ZERO;a.EP=1;a.bP=b;a.iI=c;a.zi=IZ(786432);a.iP=$rt_createIntArray(262144);d=0;while(d<a.iP.data.length){a.iP.data[d]=(-1);d=d+1|0;}a.lT=$rt_createBooleanArray(a.iP.data.length);a.lj=$rt_createLongArray(a.lT.data.length);a.ou=IZ(3);B1();FG(a.ou,4864);Zs(a);Ee();BE();BA();e=BeY;a.x0=a.ou+1|0;FG(a.x0,4864);f
=(-384);while(f<=384){g=(-384);while(g<=384){Bz(e);h=f+0|0;i=g+0|0;Bl(e,h,16.0,i);j=f+64|0;Bl(e,j,16.0,i);g=g+64|0;i=g;Bl(e,j,16.0,i);Bl(e,h,16.0,i);Bt(e);}f=f+64|0;}Ee();a.xx=a.ou+2|0;FG(a.xx,4864);Bz(e);f=(-384);while(f<=384){g=(-384);while(g<=384){i=f+64|0;h=g+0|0;Bl(e,i,(-16.0),h);k=f+0|0;Bl(e,k,(-16.0),h);g=g+64|0;h=g;Bl(e,k,(-16.0),h);Bl(e,i,(-16.0),h);}f=f+64|0;}Bt(e);Ee();}
function Zs(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.bP.k.bw)return;b=new DA;BA();c=BeY;Bz(c);d=0;while(d<1500){a:{e=N(b)*2.0-1.0;f=N(b)*2.0-1.0;g=N(b)*2.0-1.0;h=0.25+N(b)*0.25;i=e*e+f*f+g*g;if(i<1.0&&i>0.01){i=1.0/Ed(i);j=e*i;f=f*i;g=g*i;k=j*100.0;l=f*100.0;m=g*100.0;n=CS(j,g);o=Gr(n);p=GD(n);q=CS(Ed(j*j+g*g),f);r=Gr(q);s=GD(q);t=Cl(b)*3.141592653589793*2.0;u=Gr(t);v=GD(t);w=0;i=0.0*s;e=0.0*r;while(true){if(w>=4)break a;j=((w&2)-1|0)*h;w=w+1|0;x=((w&2)-1|0)*h;y=j*v-x*u;z=x*
v+j*u;ba=y*r+i;bb=e-y*s;bc=bb*o-z*p;bd=z*o+bb*p;Bl(c,k+bc,l+ba,m+bd);}}}d=d+1|0;}Bt(c);}
function Ra(a,b){if(a.bN!==null)AK8(a.bN,a);a.rJ=(-9999.0);a.rI=(-9999.0);a.rH=(-9999.0);BgB.n7=b;a.bN=b;a.En=A8z(b);if(b!==null){ANQ(b,a);Jc(a);}}
function Jc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a:{L();AKB(Bfe,a.bP.k.lh);a.sb=a.bP.k.hh;if(a.cQ!==null){b=0;while(true){if(b>=a.cQ.data.length)break a;ARV(a.cQ.data[b]);b=b+1|0;}}}b=64<<(3-a.sb|0);if(b>400)b=400;b=(b/16|0)+1|0;a.fG=b;a.gh=8;a.kb=b;a.cQ=J(G6,Bx(Bx(a.fG,a.gh),a.kb));a.el=J(G6,Bx(Bx(a.fG,a.gh),a.kb));c=0;d=0;a.qt=0;a.qu=0;a.qv=0;a.te=a.fG;a.td=a.gh;a.tf=a.kb;e=0;while(e<a.d8.p){Z(a.d8,e).io=0;e=e+1|0;}DH(a.d8);e=0;while(e<a.fG){f=0;while(f<a.gh){g=0;while(g<a.kb){if(a.cQ.data[Bx(Bx(g,a.gh)+f|0,a.fG)
+e|0]!==null)Gc(a.iJ,a.cQ.data[Bx(Bx(g,a.gh)+f|0,a.fG)+e|0].fP);h=Bx(Bx(g,a.gh)+f|0,a.fG)+e|0;i=a.cQ.data;j=new G6;k=a.bN;l=a.iJ;m=a.zi+c|0;Ty();j.nr=(-1);j.ek=0;j.gn=$rt_createBooleanArray(2);j.jC=0;j.fP=Ch();j.nr=(-1);j.ek=0;j.gn=$rt_createBooleanArray(2);j.jj=0;j.jQ=1;j.jC=0;j.fP=Ch();j.t9=k;j.jk=l;j.su=16;j.rT=16;j.rz=16;j.nr=m;j.k5=(-999);j.io=0;i[h]=j;a.cQ.data[h].JW=0;a.cQ.data[h].jj=100;a.cQ.data[h].jQ=1;a.cQ.data[h].ek=1;n=a.cQ.data[h];b=d+1|0;n.eR=d;Lc(a.cQ.data[h]);a.el.data[h]=a.cQ.data[h];S(a.d8,
a.cQ.data[h]);c=c+2|0;g=g+1|0;d=b;}f=f+1|0;}e=e+1|0;}if(a.bN!==null){n=a.bN.bg;Tu(a,K(n.d),K(n.j),K(n.e));P7(a.el,AYZ(n));}}
function ACN(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ARw(BkE,a.bN,a.iI,a.bP.e$,a.bP.f,d);AHr(BgB,a.bN,a.iI,a.bP.e$,a.bP.f,a.bP.k,d);a.tb=0;a.lk=0;a.xE=0;e=a.bN.bg;f=e.cd;g=e.d-e.cd;h=d;BkT=f+g*h;BkU=e.b0+(e.j-e.b0)*h;BkV=e.ce+(e.e-e.ce)*h;BkW=e.cd+(e.d-e.cd)*h;BkX=e.b0+(e.j-e.b0)*h;BkY=e.ce+(e.e-e.ce)*h;i=a.bN.dW;a.tb=i.p;if(a.bP.k.bw)Bc(2912);j=0;while
(true){if(j>=i.p){j=0;if(j>=a.iJ.p)return;b=BkE;c=Z(a.iJ,j);$p=1;continue _;}k=Z(i,j);if(Sl(k,b)&&MZ(c,k.L)){if(k!==a.bN.bg)break;if(a.bP.k.cC)break;}j=j+1|0;}a.lk=a.lk+1|0;e=BgB;$p=2;continue _;case 1:Y8(b,c,d);if(C()){break _;}j=j+1|0;if(j>=a.iJ.p)return;b=BkE;c=Z(a.iJ,j);continue _;case 2:ANl(e,k,d);if(C()){break _;}while(true){j=j+1|0;if(j>=i.p){j=0;if(j>=a.iJ.p)return;b=BkE;c=Z(a.iJ,j);$p=1;continue _;}k=Z(i,j);if(!Sl(k,b))continue;if(!MZ(c,k.L))continue;if(k!==a.bN.bg)break;if(!a.bP.k.cC)continue;else break;}a.lk
=a.lk+1|0;e=BgB;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ALy(a){var b;b=new T;V(b);return U(Be(H(Be(H(Be(H(Be(H(Be(H(b,B(385)),a.sz),B(23)),a.sf),B(386)),a.r1),B(387)),a.IQ),B(388)),a.qD));}
function Ya(a){var b;b=new T;V(b);return U(Be(H(Be(H(Be(H(Be(H(b,B(389)),a.lk),B(23)),a.tb),B(390)),a.xE),B(391)),(a.tb-a.xE|0)-a.lk|0));}
function Tu(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;c=b+(-8)|0;d=d+(-8)|0;a.qt=2147483647;a.qu=2147483647;a.qv=2147483647;a.te=(-2147483648);a.td=(-2147483648);a.tf=(-2147483648);e=a.fG*16|0;f=e/2|0;g=0;h=e-1|0;while(g<a.fG){i=g*16|0;j=(i+f|0)-c|0;if(j<0)j=j-h|0;i=i-Bx(j/e|0,e)|0;if(i<a.qt)a.qt=i;if(i>a.te)a.te=i;k=0;while(k<a.kb){l=k*16|0;m=(l+f|0)-d|0;if(m<0)m=m-h|0;j=l-Bx(m/e|0,e)|0;if(j<a.qv)a.qv=j;if(j>a.tf)a.tf=j;n=0;while(n<a.gh){o=n*16|0;if(o<a.qu)a.qu=o;if(o>a.td)a.td=o;p=a.cQ.data[Bx(Bx(k,a.gh)+n|0,
a.fG)+g|0];q=p.io;AGa(p,i,o,j);if(!q&&p.io)S(a.d8,p);n=n+1|0;}k=k+1|0;}g=g+1|0;}}
function Wu(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;e=0;while(e<10){a.vq=(a.vq+1|0)%a.cQ.data.length|0;f=a.cQ.data[a.vq];if(f.io&&!Ma(a.d8,f))S(a.d8,f);e=e+1|0;}if(a.bP.k.hh!=a.sb)Jc(a);if(!c){a.sf=0;a.r1=0;a.vS=0;a.sz=0;a.qD=0;}d=b.cd;g=b.d-b.cd;h=c;i=d+g*h;g=b.b0+(b.j-b.b0)*h;j=b.ce+(b.e-b.ce)*h;k=b.d-a.rJ;l=b.j-a.rI;m=b.e-a.rH;n=K(i);o=K(g);p=K(j);if(k*k+l*l+m*m>16.0){a.rJ=b.d;a.rI=b.j;a.rH=b.e;Tu(a,n,o,p);P7(a.el,AYZ(b));}a:{e=n>>4;q=K(g+UL(b))>>4;r=p>>4;s=B9();if(!c){t=0;while(true)
{if(t>=a.el.data.length)break a;u=a.el.data[t];v=u.yT-e|0;w=u.yU-q|0;x=u.yV-r|0;if(!(!(v<2&&v>(-2)&&w<2&&w>(-2)&&x<2&&x>(-2))&&a.iP.data[u.eR]!=(-1))){u.jQ=1;u.jj=10;}else if(!MT(u)&&u.ek&&a.lT.data[u.eR]){if(AR_(a.iP.data[u.eR])){if(AOx(a.iP.data[u.eR])){u.jQ=1;u.jj=10;}else if(u.jj<=0)u.jQ=0;a.lT.data[u.eR]=0;a.lj.data[u.eR]=Long_ZERO;}else if(Long_ne(a.lj.data[u.eR],Long_ZERO)&&Long_gt(Long_sub(s,a.lj.data[u.eR]),Long_fromInt(50))){u.jQ=1;u.jj=10;}}t=t+1|0;}}}y=YM(a,0,a.el.data.length,c,h);h=g-UL(b);if(!c
&&Long_gt(Long_sub(s,a.uG),Long_fromInt(50))){a.uG=s;Ba(2884);Bc(3042);Dv(0,0,0,0);Fm(0);AHu();t=0;while(t<a.el.data.length){u=a.el.data[t];v=u.yT-e|0;w=u.yU-q|0;x=u.yV-r|0;if(!MT(u)&&u.ek&&!(v<2&&v>(-2)&&w<2&&w>(-2)&&x<2&&x>(-2))){z=0;if(a.lT.data[u.eR]){if(Long_eq(a.lj.data[u.eR],Long_ZERO)){a.lj.data[u.eR]=s;z=1;}else if(Long_lt(Long_sub(s,a.lj.data[u.eR]),Long_fromInt(500)))z=1;}if(!z){a.lT.data[u.eR]=1;ba=a.iP.data[u.eR];if(ba==(-1)){bb=a.iP.data;c=u.eR;ba=AR9();bb[c]=ba;}AE_(ba);ACL(u.k5-i,u.mC-h,u.mD
-j,16.0,16.0,16.0);AOV();}}if(u.jj>0)u.jj=u.jj-1|0;t=t+1|0;}Zi();Dv(1,1,1,1);Fm(1);Ba(2884);}return y;}
function YM(a,b,c,d,e){var f,g,h,i,j,k,l;DH(a.o2);f=0;while(b<c){if(!d){a.sf=a.sf+1|0;if(a.el.data[b].gn.data[d])a.qD=a.qD+1|0;else if(!a.el.data[b].ek)a.r1=a.r1+1|0;if(a.EP&&!a.el.data[b].jQ)a.vS=a.vS+1|0;else a.sz=a.sz+1|0;}if(!a.el.data[b].gn.data[d]&&a.el.data[b].ek&&a.el.data[b].jQ&&PR(a.el.data[b],d)>=0){S(a.o2,a.el.data[b]);f=f+1|0;}b=b+1|0;}g=a.bP.f;h=g.cd+(g.d-g.cd)*e;i=g.b0+(g.j-g.b0)*e;j=g.ce+(g.e-g.ce)*e;k=0;while(k<a.o2.p){l=Z(a.o2,k);B1();Bu(l.BR-h,l.EE-i,l.DG-j);FR(PR(l,d));BE();k=k+1|0;}return f;}
function HT(a){if(a.bP.k.bw)return;a.py=a.py+1|0;}
function ADp(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bP.k.bw)return;Bc(3553);c=O2(a.bN,b);d=c.x;e=c.z;f=c.w;if(a.bP.k.dv){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}F5(d,e,f);BA();h=BeY;Fm(0);if(!a.bP.k.bw)Ba(2912);F5(d,e,f);FR(a.x0);Ba(3553);Bc(2912);Bc(3008);Ba(3042);Dg(1,1);B1();BW(1.0,1.0,1.0,1.0);Bu(0.0,0.0,0.0);Bw(0.0,
0.0,0.0,1.0);Bw(Hx(a.bN,b)*360.0,1.0,0.0,0.0);i=3553;c=a.iI;j=B(392);$p=1;case 1:$z=AHK(c,j);if(C()){break _;}k=$z;Cq(i,k);Bz(h);G(h,(-30.0),100.0,(-30.0),0.0,0.0);G(h,30.0,100.0,(-30.0),1.0,0.0);G(h,30.0,100.0,30.0,1.0,1.0);G(h,(-30.0),100.0,30.0,0.0,1.0);Bt(h);i=3553;c=a.iI;j=B(393);$p=2;case 2:$z=AHK(c,j);if(C()){break _;}k=$z;Cq(i,k);Bz(h);G(h,(-20.0),(-100.0),20.0,1.0,1.0);G(h,20.0,(-100.0),20.0,0.0,1.0);G(h,20.0,(-100.0),(-20.0),0.0,0.0);G(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Bt(h);Bc(3553);g=AJF(a.bN,
b);if(g>0.0){BW(g,g,g,g);FR(a.ou);}BW(1.0,1.0,1.0,1.0);Bc(3042);Ba(3008);if(!a.bP.k.bw)Ba(2912);BE();F5(d*0.20000000298023224+0.03999999910593033,e*0.20000000298023224+0.03999999910593033,f*0.6000000238418579+0.10000000149011612);Bc(3553);FR(a.xx);Ba(3553);Fm(1);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function YW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bP.k.bw)return;if(a.bP.k.lh){$p=2;continue _;}Bc(2884);c=a.bP.f.b0;d=a.bP.f.j-a.bP.f.b0;e=b;f=c+d*e;g=32;BA();h=BeY;i=3553;j=a.iI;k
=B(394);$p=1;case 1:$z=AHK(j,k);if(C()){break _;}l=$z;Cq(i,l);Ba(3042);Dg(770,771);j=S$(a.bN,b);m=j.x;n=j.z;o=j.w;if(a.bP.k.dv){p=m*30.0;m=(p+n*59.0+o*11.0)/100.0;n=(p+n*70.0)/100.0;o=(p+o*70.0)/100.0;}d=a.bN.bg.bT+(a.bN.bg.d-a.bN.bg.bT)*e+(a.py+b)*0.029999999329447746;e=a.bN.bg.bS+(a.bN.bg.e-a.bN.bg.bS)*e;l=K(d/2048.0);q=K(e/2048.0);c=d-(l*2048|0);d=e-(q*2048|0);p=120.0-f+0.33000001311302185;r=c*4.8828125E-4;s=d*4.8828125E-4;Bz(h);Gw(h,m,n,o,0.800000011920929);t=p;u=(-256);while(u<256){v=(-256);while(v<256)
{i=u+0|0;w=i;x=v+g|0;y=x;c=i*4.8828125E-4+r;d=x*4.8828125E-4+s;G(h,w,t,y,c,d);i=u+g|0;e=i;z=i*4.8828125E-4+r;G(h,e,t,y,z,d);i=v+0|0;d=i;y=i*4.8828125E-4+s;G(h,e,t,d,z,y);G(h,w,t,d,c,y);v=x;}u=u+g|0;}Bt(h);BW(1.0,1.0,1.0,1.0);Bc(3042);Ba(2884);return;case 2:ABn(a,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function ABn(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:if(a.bP.k.bw)return;Bc(2884);c=a.bP.f.b0;d=a.bP.f.j-a.bP.f.b0;e=b;f=c+d*e;BA();g=BeY;h=12.0;c=(a.bN.bg.bT+(a.bN.bg.d-a.bN.bg.bT)*e+(a.py+b)*0.029999999329447746)/12.0;d=(a.bN.bg.bS+(a.bN.bg.e-a.bN.bg.bS)*e)/12.0+0.33000001311302185;i=108.0-f+0.33000001311302185;j=K(c/2048.0);k=K(d/2048.0);e=c-(j*2048|0);d=d-(k*2048|0);l=3553;m=a.iI;n=B(394);$p=1;case 1:$z=AHK(m,n);if(C()){break _;}o=$z;Cq(l,o);Ba(3042);Dg(770,771);m=S$(a.bN,b);p=m.x;q=m.z;r=m.w;if(a.bP.k.dv){b=p*30.0;p=(b+q*59.0+r*11.0)/100.0;q=(b+q
*70.0)/100.0;r=(b+r*70.0)/100.0;}s=K(e)*0.00390625;t=K(d)*0.00390625;u=e-K(e);v=d-K(d);Cw(h,1.0,h);o=0;k=R(i,(-5.0));w=i+0.0;x=R(i,5.0);b=i+4.0;d=b-9.765625E-4;y=b;while(o<2){if(o)Dv(1,1,1,1);else Dv(0,0,0,0);z=(-2);while(z<=3){ba=(-2);while(ba<=3){Bz(g);bb=z*8|0;bc=ba*8|0;bd=bb-u;be=bc-v;if(k>0){Gw(g,p*0.699999988079071,q*0.699999988079071,r*0.699999988079071,0.800000011920929);Dd(g,0.0,(-1.0),0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,w,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625
+s;G(g,bh,w,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);}if(x<=0){Gw(g,p,q,r,0.800000011920929);Dd(g,0.0,1.0,0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,d,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;G(g,bh,d,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,d,e,bi,bg);G(g,c,d,e,bf,bg);}a:{Gw(g,p*0.8999999761581421,q*0.8999999761581421,r*0.8999999761581421,0.800000011920929);if(z>(-1)){Dd(g,(-1.0),0.0,0.0);bj=0;e=be+8.0;bg=(bc+8.0)*0.00390625
+t;bh=be+0.0;bi=(bc+0.0)*0.00390625+t;while(true){if(bj>=8)break a;b=bj;c=bd+b+0.0;bf=(bb+b+0.5)*0.00390625+s;G(g,c,w,e,bf,bg);G(g,c,y,e,bf,bg);G(g,c,y,bh,bf,bi);G(g,c,w,bh,bf,bi);bj=bj+1|0;}}}b:{if(z<=1){Dd(g,1.0,0.0,0.0);bk=0;bf=be+8.0;bh=(bc+8.0)*0.00390625+t;bi=be+0.0;c=(bc+0.0)*0.00390625+t;while(true){if(bk>=8)break b;b=bk;e=bd+b+1.0-9.765625E-4;bg=(bb+b+0.5)*0.00390625+s;G(g,e,w,bf,bg,bh);G(g,e,y,bf,bg,bh);G(g,e,y,bi,bg,c);G(g,e,w,bi,bg,c);bk=bk+1|0;}}}c:{Gw(g,p*0.800000011920929,q*0.800000011920929,
r*0.800000011920929,0.800000011920929);if(ba>(-1)){Dd(g,0.0,0.0,(-1.0));bj=0;c=bd+0.0;bf=(bb+0.0)*0.00390625+s;bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;while(true){if(bj>=8)break c;b=bj;e=be+b+0.0;bg=(bc+b+0.5)*0.00390625+t;G(g,c,y,e,bf,bg);G(g,bh,y,e,bi,bg);G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);bj=bj+1|0;}}}d:{if(ba<=1){Dd(g,0.0,0.0,1.0);bk=0;bi=bd+0.0;e=(bb+0.0)*0.00390625+s;bg=bd+8.0;bh=(bb+8.0)*0.00390625+s;while(true){if(bk>=8)break d;b=bk;c=be+b+1.0-9.765625E-4;bf=(bc+b+0.5)*0.00390625+t;G(g,bi,y,c,e,bf);G(g,bg,
y,c,bh,bf);G(g,bg,w,c,bh,bf);G(g,bi,w,c,e,bf);bk=bk+1|0;}}}Bt(g);ba=ba+1|0;}z=z+1|0;}o=o+1|0;}BW(1.0,1.0,1.0,1.0);Bc(3042);Ba(2884);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function AIy(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.d8;e=new Wf;e.yv=b;RK(d,e);f=a.d8.p-1|0;g=a.d8.p;h=0;a:{while(h<g){d=Z(a.d8,f-h|0);if(!c){if(G4(d,b)<=1024.0)break a;if(!d.ek){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.ek)break a;h=h+1|0;}return a.d8.p?0:1;}$p=1;case 1:ADv(d);if(C()){break _;}H8(a.d8,d);d.io=0;a:{while(true){h=h+1|0;if(h>=g)break;d=Z(a.d8,f-h|0);if
(!c){if(G4(d,b)<=1024.0)break a;if(!d.ek){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.ek)break a;}return a.d8.p?0:1;}continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFW(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bP.k.bw)return;a:{BA();g=BeY;Ba(3042);Ba(3008);Dg(770,1);BW(1.0,1.0,1.0,(Bp(Long_toNumber(B9())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){if(a.tO<=0.0)break a;Dg(774,768);e=a.iI;h=B(179);$p=2;continue _;}if(e!==null){Dg(770,771);i=Bp(Long_toNumber(B9())
/100.0)*0.20000000298023224+0.800000011920929;BW(i,i,i,Bp(Long_toNumber(B9())/200.0)*0.20000000298023224+0.5);b=a.iI;e=B(179);$p=1;continue _;}}Bc(3042);Bc(3008);return;case 1:$z=AHK(b,e);if(C()){break _;}j=$z;Cq(3553,j);Bc(3042);Bc(3008);return;case 2:$z=AHK(e,h);if(C()){break _;}k=$z;Cq(3553,k);BW(1.0,1.0,1.0,0.5);B1();e=a.bN;d=c.ic;k=c.id;j=c.ie;$p=3;case 3:$z=ACH(e,d,k,j);if(C()){break _;}j=$z;if(j<=0)h=null;else{L();h=Be2.data[j];}Bc(3008);OS((-3.0),(-3.0));Ba(32823);Bz(g);l=b.cd;m=b.d-b.cd;n=f;Fa(g, -(l
+m*n), -(b.b0+(b.j-b.b0)*n), -(b.ce+(b.e-b.ce)*n));ADB(g);if(h===null){L();h=Be8;}b=a.En;d=c.ic;k=c.id;j=c.ie;o=240+(a.tO*10.0|0)|0;$p=4;case 4:AMK(b,h,d,k,j,o);if(C()){break _;}Bt(g);Fa(g,0.0,0.0,0.0);OS(0.0,0.0);Bc(32823);Ba(3008);Fm(1);BE();Bc(3042);Bc(3008);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AGw(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bP.k.bw)return;if(!d&&!c.k$){Ba(3042);Dg(770,771);BW(0.0,0.0,0.0,0.4000000059604645);Bc(3553);Fm(0);e=a.bN;d=c.ic;g=c.id;h=c.ie;$p=1;continue _;}return;case 1:$z=ACH(e,d,g,h);if(C()){break _;}g=$z;if(g<=0){Fm(1);Ba(3553);Bc(3042);return;}i=b.cd;j=b.d-b.cd;k=f;i=i+j*k;j=b.b0+(b.j-b.b0)*k;k=b.ce
+(b.e-b.ce)*k;L();b=Be2.data[g];e=a.bN;d=c.ic;g=c.id;h=c.ie;$p=2;case 2:$z=b.oW(e,d,g,h);if(C()){break _;}b=$z;b=Uj(Dw(b,0.0020000000949949026,0.0020000000949949026,0.0020000000949949026), -i, -j, -k);if(!a.bP.k.bw){BA();c=BeY;Gj(c,3);Bl(c,b.Y,b.Q,b.Z);Bl(c,b.bl,b.Q,b.Z);Bl(c,b.bl,b.Q,b.bm);Bl(c,b.Y,b.Q,b.bm);Bl(c,b.Y,b.Q,b.Z);Bt(c);Gj(c,3);Bl(c,b.Y,b.bj,b.Z);Bl(c,b.bl,b.bj,b.Z);Bl(c,b.bl,b.bj,b.bm);Bl(c,b.Y,b.bj,b.bm);Bl(c,b.Y,b.bj,b.Z);Bt(c);Gj(c,1);Bl(c,b.Y,b.Q,b.Z);Bl(c,b.Y,b.bj,b.Z);Bl(c,b.bl,b.Q,b.Z);Bl(c,
b.bl,b.bj,b.Z);Bl(c,b.bl,b.Q,b.bm);Bl(c,b.bl,b.bj,b.bm);Bl(c,b.Y,b.Q,b.bm);Bl(c,b.Y,b.bj,b.bm);Bt(c);}Fm(1);Ba(3553);Bc(3042);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function Tz(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=GL(b,16);i=GL(c,16);j=GL(d,16);k=GL(e,16);l=GL(f,16);m=GL(g,16);while(h<=k){n=h%a.fG|0;if(n<0)n=n+a.fG|0;o=i;while(o<=l){p=o%a.gh|0;if(p<0)p=p+a.gh|0;q=j;while(q<=m){r=q%a.kb|0;if(r<0)r=r+a.kb|0;s=Bx(Bx(r,a.gh)+p|0,a.fG)+n|0;t=a.cQ.data[s];if(!t.io)S(a.d8,t);Lc(t);q=q+1|0;}o=o+1|0;}h=h+1|0;}}
function Rz(a,b,c,d){Tz(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AOT(a,b,c,d,e,f,g){Tz(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function ARZ(a,b,c){var d;d=0;while(d<a.cQ.data.length){if(!MT(a.cQ.data[d])&&!(a.cQ.data[d].ek&&(d+a.q_|0)&15))ASq(a.cQ.data[d],b);d=d+1|0;}a.q_=a.q_+1|0;}
function ADd(a,b,c,d,e,f,g){return;}
function AIh(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;if(a.bP.k.bw)return;i=a.bN.bg.d-c;j=a.bN.bg.j-d;k=a.bN.bg.e-e;if(i*i+j*j+k*k<=256.0){if(b===B(213)){l=a.bP.c6;m=new SJ;FB(m,a.bN,c,d,e,f,g,h);m.h3=1.0;m.ii=1.0;m.iu=1.0;m.e7=32;D1(m,0.019999999552965164,0.019999999552965164);m.dq=m.dq*(N(m.n)*0.6000000238418579+0.20000000298023224);m.g=f*0.20000000298023224+(BR()*2.0-1.0)*0.019999999552965164;m.i=g*0.20000000298023224+(BR()*2.0-1.0)*0.019999999552965164;m.h=h*0.20000000298023224+(BR()*2.0-1.0)*0.019999999552965164;m.cw
=8.0/(BR()*0.8+0.2)|0;Ek(l,m);}else if(b===B(256))Ek(a.bP.c6,A8n(a.bN,c,d,e,1.0));else if(b===B(223)){b=a.bP.c6;l=new Rb;FB(l,a.bN,c,d,e,f,g,h);l.g=f+(BR()*2.0-1.0)*0.05000000074505806;l.i=g+(BR()*2.0-1.0)*0.05000000074505806;l.h=h+(BR()*2.0-1.0)*0.05000000074505806;n=N(l.n)*0.30000001192092896+0.699999988079071;l.iu=n;l.ii=n;l.h3=n;l.dq=N(l.n)*N(l.n)*6.0+1.0;l.cw=(16.0/(N(l.n)*0.8+0.2)|0)+2|0;Ek(b,l);}else if(b!==B(257)){if(b===B(254))Ek(a.bP.c6,BcV(a.bN,c,d,e));else if(b===B(214))Ek(a.bP.c6,BcI(a.bN,c,d,e,
f,g,h));else if(b===B(255))Ek(a.bP.c6,A8n(a.bN,c,d,e,2.5));}else{b=a.bP.c6;l=new Pc;FB(l,a.bN,c,d,e,f,g,h);l.g=l.g*0.009999999776482582+f;l.i=l.i*0.009999999776482582+g;l.h=l.h*0.009999999776482582+h;N(l.n);N(l.n);N(l.n);N(l.n);N(l.n);N(l.n);l.D7=l.dq;l.iu=1.0;l.ii=1.0;l.h3=1.0;l.cw=(8.0/(BR()*0.8+0.2)|0)+4|0;l.o7=1;l.e7=48;Ek(b,l);}}}
function A$F(a,b){return;}
function ATI(a,b){return;}
function VL(a){var b;b=0;while(b<a.cQ.data.length){if(a.cQ.data[b].os){if(!a.cQ.data[b].io)S(a.d8,a.cQ.data[b]);Lc(a.cQ.data[b]);}b=b+1|0;}}
function AHq(){var a=this;CT.call(a);a.vo=0.0;a.yK=null;a.t_=null;}
function L5(){var a=new AHq();A4F(a);return a;}
function A4F(a){var b,c;DQ(a);a.vo=0.0;b=J(B4,106);c=b.data;c[0]=B(395);c[1]=B(396);c[2]=B(397);c[3]=B(398);c[4]=B(399);c[5]=B(400);c[6]=B(401);c[7]=B(402);c[8]=B(403);c[9]=B(404);c[10]=B(405);c[11]=B(406);c[12]=B(407);c[13]=B(408);c[14]=B(409);c[15]=B(410);c[16]=B(411);c[17]=B(412);c[18]=B(413);c[19]=B(414);c[20]=B(415);c[21]=B(416);c[22]=B(417);c[23]=B(418);c[24]=B(419);c[25]=B(420);c[26]=B(421);c[27]=B(422);c[28]=B(423);c[29]=B(424);c[30]=B(425);c[31]=B(426);c[32]=B(427);c[33]=B(428);c[34]=B(429);c[35]=B(430);c[36]
=B(431);c[37]=B(432);c[38]=B(433);c[39]=B(434);c[40]=B(435);c[41]=B(436);c[42]=B(437);c[43]=B(438);c[44]=B(439);c[45]=B(440);c[46]=B(441);c[47]=B(442);c[48]=B(443);c[49]=B(444);c[50]=B(416);c[51]=B(445);c[52]=B(446);c[53]=B(447);c[54]=B(448);c[55]=B(449);c[56]=B(450);c[57]=B(451);c[58]=B(452);c[59]=B(453);c[60]=B(454);c[61]=B(455);c[62]=B(456);c[63]=B(457);c[64]=B(458);c[65]=B(459);c[66]=B(460);c[67]=B(461);c[68]=B(462);c[69]=B(463);c[70]=B(464);c[71]=B(465);c[72]=B(466);c[73]=B(467);c[74]=B(468);c[75]=B(469);c[76]
=B(470);c[77]=B(471);c[78]=B(472);c[79]=B(473);c[80]=B(474);c[81]=B(475);c[82]=B(476);c[83]=B(477);c[84]=B(478);c[85]=B(479);c[86]=B(480);c[87]=B(481);c[88]=B(482);c[89]=B(483);c[90]=B(484);c[91]=B(485);c[92]=B(486);c[93]=B(487);c[94]=B(488);c[95]=B(489);c[96]=B(490);c[97]=B(491);c[98]=B(492);c[99]=B(493);c[100]=B(494);c[101]=B(495);c[102]=B(496);c[103]=B(497);c[104]=B(498);c[105]=B(499);a.yK=b;a.t_=a.yK.data[BR()*a.yK.data.length|0];}
function A5F(a){a.vo=a.vo+0.009999999776482582;}
function ANX(a,b,c){return;}
function AIH(a){DH(a.bH);S(a.bH,Dk(1,(a.bn/2|0)-100|0,(a.bE/4|0)+48|0,B(500)));S(a.bH,Dk(2,(a.bn/2|0)-100|0,(a.bE/4|0)+72|0,B(501)));S(a.bH,Dk(3,(a.bn/2|0)-100|0,(a.bE/4|0)+96|0,B(502)));S(a.bH,Dk(0,(a.bn/2|0)-100|0,((a.bE/4|0)+120|0)+12|0,B(503)));Z(a.bH,1).gI=0;Z(a.bH,2).gI=0;if(a.I.k2===null)Z(a.bH,1).gI=0;}
function ACB(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cn){c=a.I;d=AI2(a,a.I.k);$p=1;continue _;}if(b.cn!=1)return;b=a.I;c=A$_(a);$p=2;continue _;case 1:AD8(c,d);if(C()){break _;}if(b.cn!=1)return;b=a.I;c=A$_(a);$p=2;case 2:AD8(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function ZP(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABs(a);if(C()){break _;}BA();e=BeY;f=3553;g=a.I.bo;h=B(504);$p=2;case 2:$z=AHK(g,h);if(C()){break _;}i=$z;Cq(f,i);BW(1.0,1.0,1.0,1.0);ES(e,16777215);CI(a,(a.bn-256|0)/2|0,30,0,0,256,49);B1();Bu((a.bn/2|0)+90|0,70.0,0.0);Bw((-20.0),0.0,0.0,1.0);j=Bp(Long_toNumber(Long_rem(B9(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Dx(a.b1,a.t_)+32|0);Cw(k,k,k);DF(a,a.b1,a.t_,0,(-8),16776960);BE();Cz(a.b1,B(505),(a.bn-Dx(a.b1,B(505))|0)-2|0,a.bE-10|0,16777215);l=KI();m=J6();n=Long_sub(l,Km());g=new T;V(g);e=U(H(C6(H(C6(H(g,B(506)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(507)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(508)));Cz(a.b1,e,(a.bn-Dx(a.b1,e)|0)-2|0,2,8421504);g=new T;V(g);e=U(H(C6(H(C6(H(g,
B(509)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(510)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(511)));Cz(a.b1,e,(a.bn-Dx(a.b1,e)|0)-2|0,12,8421504);$p=3;case 3:AFT(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function O$(){var a=this;D.call(a);a.mY=null;a.cD=null;a.jh=null;a.sy=null;}
function Ek(a,b){var c;c=b.xL();S(a.cD.data[c],b);}
function AA9(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(b<3){c=0;if(c<a.cD.data[b].p){d=Z(a.cD.data[b],c);$p=1;continue _;}b=b+1|0;}return;case 1:d.ep();if(C()){break _;}if(!d.cR)e=c;else{d=a.cD.data[b];e=c+(-1)|0;Em(d,c);}c=e+1|0;while(true){if(c<a.cD.data[b].p){d=Z(a.cD.data[b],c);continue _;}b=b+1|0;if(b>=3)break;c=0;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ABo(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=BC(b.v*3.1415927410125732/180.0);e=Bp(b.v*3.1415927410125732/180.0);f= -e*Bp(b.J*3.1415927410125732/180.0);g=d*Bp(b.J*3.1415927410125732/180.0);h=BC(b.J*3.1415927410125732/180.0);i=b.cd;j=b.d-b.cd;k=c;BkZ=i+j*k;Bk0=b.b0+(b.j-b.b0)*k;Bk1=b.ce
+(b.e-b.ce)*k;l=0;while(l<2){if(a.cD.data[l].p){if(!l){b=a.jh;m=B(512);$p=1;continue _;}if(l==1){b=a.jh;m=B(179);$p=2;continue _;}Cq(3553,0);BA();m=BeY;Bz(m);n=0;if(n<a.cD.data[l].p){o=Z(a.cD.data[l],n);$p=3;continue _;}Bt(m);}l=l+1|0;}return;case 1:$z=AHK(b,m);if(C()){break _;}p=$z;a:while(true){if(l==1){b=a.jh;m=B(179);$p=2;continue _;}Cq(3553,p);BA();m=BeY;Bz(m);n=0;if(n<a.cD.data[l].p){o=Z(a.cD.data[l],n);$p=3;continue _;}Bt(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].p)continue;else break;}p
=0;if(!l){b=a.jh;m=B(512);continue _;}}return;case 2:$z=AHK(b,m);if(C()){break _;}p=$z;a:while(true){Cq(3553,p);BA();m=BeY;Bz(m);n=0;if(n<a.cD.data[l].p){o=Z(a.cD.data[l],n);$p=3;continue _;}Bt(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].p)continue;else break;}p=0;if(!l){b=a.jh;m=B(512);$p=1;continue _;}if(l==1){b=a.jh;m=B(179);continue _;}}return;case 3:o.kU(m,c,d,h,e,f,g);if(C()){break _;}n=n+1|0;a:while(true){if(n<a.cD.data[l].p){o=Z(a.cD.data[l],n);continue _;}Bt(m);while(true){l=l+1|0;if(l>=
2)break a;if(!a.cD.data[l].p)continue;else break;}if(!l){b=a.jh;m=B(512);$p=1;continue _;}if(l==1){b=a.jh;m=B(179);$p=2;continue _;}Cq(3553,0);BA();m=BeY;Bz(m);n=0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AB7(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=2;if(a.cD.data[d].p){BA();e=BeY;f=0;if(f<a.cD.data[d].p){g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;$p=1;continue _;}}return;case 1:g.kU(e,c,h,i,j,k,l);if(C()){break _;}f=f+1|0;if(f>=a.cD.data[d].p)return;g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;continue _;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function O_(a,b){var c;a.mY=b;c=0;while(c<3){DH(a.cD.data[c]);c=c+1|0;}}
function AER(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.mY;$p=1;case 1:a:{$z=ACH(e,b,c,d);if(C()){break _;}f=$z;if(f){L();e=Be2.data[f];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;Ek(a,AZj(a.mY,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,e));l
=l+1|0;}k=k+1|0;}g=g+1|0;}}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function Za(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.mY;$p=1;case 1:$z=ACH(f,b,c,d);if(C()){break _;}g=$z;if(g){L();h=Be2.data[g];i=b;j=i+Cl(a.sy)*(h.db-h.c_-0.20000000298023224)+0.10000000149011612+h.c_;k=c;l=k+Cl(a.sy)*(h.cE-h.cL-0.20000000298023224)+0.10000000149011612+h.cL;m=d;n=m+Cl(a.sy)*(h.dc-h.c$-0.20000000298023224)
+0.10000000149011612+h.c$;if(!e)l=k+h.cL-0.10000000149011612;if(e==1)l=k+h.cE+0.10000000149011612;if(e==2)n=m+h.c$-0.10000000149011612;if(e==3)n=m+h.dc+0.10000000149011612;if(e==4)j=i+h.c_-0.10000000149011612;if(e==5)j=i+h.db+0.10000000149011612;Ek(a,Yk(APF(AZj(a.mY,j,l,n,0.0,0.0,0.0,h),0.20000000298023224),0.6000000238418579));}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function XH(a){var b;b=new T;V(b);return U(Be(H(b,B(3)),(a.cD.data[0].p+a.cD.data[1].p|0)+a.cD.data[2].p|0));}
function NI(){var a=this;Ge.call(a);a.g9=null;a.vF=null;a.b3=null;a.F_=null;a.rZ=0;a.ED=0.0;a.IR=0.0;}
var Bk2=null;function APX(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=FH(a.b3.cc,a.b3.bB);g=AED(f);h=Zr(f);i=a.b3.e$;LV(a.b3.eV);Ba(3042);BW(1.0,1.0,1.0,1.0);c=3553;f=a.b3.bo;j
=B(513);$p=1;case 1:$z=AHK(f,j);if(C()){break _;}d=$z;Cq(c,d);k=a.b3.f.K;a.mW=(-90.0);l=g/2|0;m=l-91|0;n=h-22|0;CI(a,m,n,0,0,182,22);CI(a,(m-1|0)+(k.bM*20|0)|0,n-1|0,0,22,24,22);c=3553;f=a.b3.bo;j=B(514);$p=2;case 2:$z=AHK(f,j);if(C()){break _;}d=$z;Cq(c,d);Ba(3042);Dg(775,769);CI(a,l-7|0,(h/2|0)-7|0,0,0,16,16);Bc(3042);o=((a.b3.f.dw/3|0)%2|0)!=1?0:1;if(a.b3.f.dw<10)o=0;p=a.b3.f.bU;q=a.b3.f.tL;N0(a.vF,Long_fromInt(Bx(a.rZ,312871)));if(!AKg(a.b3.cB)){Bc(3042);Ba(32826);B1();Bw(180.0,1.0,0.0,0.0);Hw();BE();r=
0;c=l-90|0;m=(h-16|0)-3|0;if(r>=9){DS();Bc(32826);if(!a.b3.k.lt)Cz(i,B(515),2,2,16777215);else{Cz(i,BD(H(H(H(BN(),B(516)),a.b3.lD),B(27))),2,2,16777215);Cz(i,Mz(a.b3),2,12,16777215);Cz(i,Oy(a.b3),2,22,16777215);Cz(i,M2(a.b3),2,32,16777215);s=KI();t=J6();u=Long_sub(t,Km());j=BD(H(C6(H(C6(H(C6(H(BN(),B(517)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(510)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(518)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(508)));Hs(a,i,j,(g-Dx(i,
j)|0)-2|0,2,14737632);f=BD(H(C6(H(C6(H(BN(),B(509)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(510)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(511)));Hs(a,i,f,(g-Dx(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<Df(a.g9)&&m<10){if(Z(a.g9,m).oH<200)Cz(i,Z(a.g9,m).yQ,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;}r=ADc(a.b3.f);n=0;v=h-32|0;w=l+91|0;d=R(p,4);while(n<10){if(r>0){x=(w-(n*8|0)|0)-9|0;c=R((n*2|0)+1|0,r);if(c<0)CI(a,x,v,34,9,9,9);if(!c)CI(a,
x,v,25,9,9,9);if(c>0)CI(a,x,v,16,9,9,9);}y=0;if(o)y=1;z=m+(n*8|0)|0;c=d>0?v:v+E(a.vF,2)|0;CI(a,z,c,16+(y*9|0)|0,0,9,9);if(o){e=R((n*2|0)+1|0,q);if(e<0)CI(a,z,c,70,0,9,9);if(!e)CI(a,z,c,79,0,9,9);}e=R((n*2|0)+1|0,p);if(e<0)CI(a,z,c,52,0,9,9);if(!e)CI(a,z,c,61,0,9,9);n=n+1|0;}f=a.b3.f;j=Bf3;$p=4;continue _;case 3:AEK(a,r,n,m,b);if(C()){break _;}r=r+1|0;if(r>=9){DS();Bc(32826);if(!a.b3.k.lt)Cz(i,B(515),2,2,16777215);else{Cz(i,BD(H(H(H(BN(),B(516)),a.b3.lD),B(27))),2,2,16777215);Cz(i,Mz(a.b3),2,12,16777215);Cz(i,
Oy(a.b3),2,22,16777215);Cz(i,M2(a.b3),2,32,16777215);s=KI();t=J6();u=Long_sub(t,Km());j=BD(H(C6(H(C6(H(C6(H(BN(),B(517)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(510)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(518)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(508)));Hs(a,i,j,(g-Dx(i,j)|0)-2|0,2,14737632);f=BD(H(C6(H(C6(H(BN(),B(509)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(510)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(511)));Hs(a,i,f,(g
-Dx(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<Df(a.g9)&&m<10){if(Z(a.g9,m).oH<200)Cz(i,Z(a.g9,m).yQ,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;continue _;case 4:a:{$z=AGW(f,j);if(C()){break _;}c=$z;if(c){c=UB((a.b3.f.gf-2|0)*10.0/300.0)|0;ba=(UB(a.b3.f.gf*10.0/300.0)|0)-c|0;x=0;d=c+ba|0;p=v-9|0;while(true){if(x>=d)break a;if(x>=c)CI(a,m+(x*8|0)|0,p,25,18,9,9);else CI(a,m+(x*8|0)|0,p,16,18,9,9);x=x+1|0;}}}Bc(3042);Ba(32826);B1();Bw(180.0,1.0,0.0,0.0);Hw();BE();r=0;c=l-90|0;m=(h-
16|0)-3|0;if(r>=9){DS();Bc(32826);if(!a.b3.k.lt)Cz(i,B(515),2,2,16777215);else{Cz(i,BD(H(H(H(BN(),B(516)),a.b3.lD),B(27))),2,2,16777215);Cz(i,Mz(a.b3),2,12,16777215);Cz(i,Oy(a.b3),2,22,16777215);Cz(i,M2(a.b3),2,32,16777215);s=KI();t=J6();u=Long_sub(t,Km());j=BD(H(C6(H(C6(H(C6(H(BN(),B(517)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(510)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(518)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(508)));Hs(a,i,j,(g-Dx(i,j)|0)-2|0,2,14737632);f
=BD(H(C6(H(C6(H(BN(),B(509)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(510)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(511)));Hs(a,i,f,(g-Dx(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<Df(a.g9)&&m<10){if(Z(a.g9,m).oH<200)Cz(i,Z(a.g9,m).yQ,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function AEK(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.b3.f.K.bd.data[b];if(f===null)return;g=f.mN-e;b=R(g,0.0);if(b>0){B1();h=1.0+g/5.0;i=c+8|0;g=i;j=d+12|0;Bu(g,j,0.0);Cw(1.0/h,(h+1.0)/2.0,1.0);Bu( -i, -j,0.0);}k=Bk2;l=a.b3.e$;m=a.b3.bo;$p=1;case 1:AGx(k,l,m,f,c,d);if(C()){break _;}if(b>0)BE();LH(Bk2,a.b3.e$,a.b3.bo,f,c,d);return;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AKM(a){var b,c;a.rZ=a.rZ+1|0;b=0;while(b<a.g9.p){c=Z(a.g9,b);c.oH=c.oH+1|0;b=b+1|0;}}
function AAm(){Bk2=X_();}
function Jy(){var a=this;EQ.call(a);a.K=null;a.A1=0;a.k7=0;a.qC=0.0;a.kY=0.0;a.C4=null;a.yo=0;}
function AGb(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AK7(a);if(C()){break _;}a.qC=a.kY;a.kY=0.0;return;default:E_();}}C3().s(a,$p);}
function ALj(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.c4=1.6200000047683716;D1(a,0.6000000238418579,1.7999999523162842);if(a.m!==null){if(a.j>0.0){CU(a,a.d,a.j,a.e);b=a.m;c=a.L;$p=1;continue _;}a.h=0.0;a.i=0.0;a.g=0.0;a.J=0.0;}if(a.m!==null)a.m.bg=a;a.bU=20;a.c2=0;return;case 1:$z=X3(b,a,c);if(C()){break _;}b=$z;if(b.p){a.j=a.j+1.0;if(a.j>0.0){CU(a,a.d,a.j,a.e);b=a.m;c=a.L;continue _;}}a.h=0.0;a.i=0.0;a.g=0.0;a.J=0.0;if(a.m!==null)a.m.bg
=a;a.bU=20;a.c2=0;return;default:E_();}}C3().s(a,b,c,$p);}
function Ze(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.m.i6&&a.bU<20&&!((a.oU%20|0)*4|0))UY(a,1);AEw(a.K);a.qC=a.kY;$p=1;case 1:ACA(a);if(C()){break _;}b=Cg(a.g*a.g+a.h*a.h);c=Iq( -a.i*0.20000000298023224)*15.0;if(b>0.10000000149011612)b=0.10000000149011612;if(!(a.cx&&a.bU>0))b=0.0;if(!(!a.cx&&a.bU>0))c=0.0;a.kY=a.kY+(b-a.kY)*0.4000000059604645;a.jp=a.jp+(c-a.jp)*0.800000011920929;if(a.bU<=0)return;d
=a.m;e=Dw(a.L,1.0,0.0,1.0);$p=2;case 2:a:{$z=ADY(d,a,e);if(C()){break _;}d=$z;if(d!==null){f=0;while(true){if(f>=d.p)break a;Z(d,f).xU(a);f=f+1|0;}}}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A4N(a){return a.k7;}
function ALr(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D1(a,0.20000000298023224,0.20000000298023224);CU(a,a.d,a.j,a.e);a.i=0.10000000149011612;if(!DB(a.C4,B(519))){c=a.K;$p=1;continue _;}c=new Cf;BB();Gp(c,Bh1,1);d=1;$p=2;continue _;case 1:AJc(c);if(C()){break _;}if(b===null){a.h=0.0;a.g=0.0;}else{a.g= -BC((a.kL+a.v)*3.1415927410125732/180.0)*0.10000000149011612;a.h= -Bp((a.kL+a.v)*3.1415927410125732/180.0)*0.10000000149011612;}a.c4
=0.10000000149011612;return;case 2:AQJ(a,c,d);if(C()){break _;}c=a.K;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,$p);}
function AZL(a,b,c){a.k7=a.k7+c|0;}
function AL4(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;$p=1;case 1:AQJ(a,b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AQJ(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;d=Hd(a.m,a.d,a.j-0.30000001192092896,a.e,b);d.hb=40;if(c){e=N(a.n)*0.5;f=N(a.n)*3.1415927410125732*2.0;d.g= -Bp(f)*e;d.h=BC(f)*e;d.i=0.20000000298023224;}else{d.g= -Bp(a.v/180.0*3.1415927410125732)*BC(a.J/180.0*3.1415927410125732)*0.30000001192092896;d.h=BC(a.v/180.0*3.1415927410125732)
*BC(a.J/180.0*3.1415927410125732)*0.30000001192092896;d.i= -Bp(a.J/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=N(a.n)*3.1415927410125732*2.0;g=0.019999999552965164*N(a.n);h=d.g;i=e;j=GD(i);k=g;d.g=h+j*k;d.i=d.i+(N(a.n)-N(a.n))*0.10000000149011612;d.h=d.h+Gr(i)*k;}b=a.m;$p=1;case 1:AOt(b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AK6(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ADK(a.K,b);b=Bf3;$p=1;case 1:$z=AGW(a,b);if(C()){break _;}d=$z;if(d)c=c/5.0;if(!a.cx)c=c/5.0;return c;default:E_();}}C3().s(a,b,c,d,$p);}
function Nn(a,b){return AD9(a.K,b);}
function UL(a){return 0.11999999731779099;}
function YA(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hm=0;if(a.bU<=0)return 0;if(a.dw>a.o3/2.0)return 0;if(!(!(b instanceof DP)&&!(b instanceof Jw))){if(!a.m.i6)c=0;if(a.m.i6==1)c=(c/3|0)+1|0;if(a.m.i6==3)c=(c*3|0)/2|0;}d=Bx(c,25-TL(a.K)|0)+a.yo|0;AEc(a.K,c);c=d/25|0;a.yo=d%25|0;if(!c)return 0;$p=1;case 1:$z=ACc(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,d,$p);}
function AGR(){var a=this;Jy.call(a);a.h1=null;a.k8=null;}
function A6X(a,b,c){var d=new AGR();AZd(d,a,b,c);return d;}
function AZd(a,b,c,d){var e;FA(a,c);a.o3=20;a.dD=0.0;a.e9=0.0;a.Hk=1;a.yI=B(383);a.Hj=1;a.Ej=0.0;a.Fh=null;a.JE=1.0;a.u$=0;a.JF=0.0;a.bU=10;a.kL=0.0;a.c2=0;a.dx=0;a.CD=0;a.Fy=(-1);a.JK=BR()*0.8999999761581421+0.10000000149011612;a.hm=0;a.hI=0;a.z$=0.0;a.s5=0.699999988079071;a.mG=1;a.IC=(BR()+1.0)*0.009999999776482582;CU(a,a.d,a.j,a.e);a.JR=BR()*12398.0;a.v=BR()*3.1415927410125732*2.0;a.Hi=1.0;a.rt=0.5;e=new VK;e.bd=J(Cf,36);e.cf=J(Cf,4);e.bM=0;e.nH=a;a.K=e;a.A1=0;a.k7=0;a.yo=0;KG(a,c.fk+0.5,c.p2,c.fj+0.5,0.0,
0.0);a.c4=1.6200000047683716;a.bU=20;a.Fh=B(520);a.Ej=180.0;a.nN=20;a.yI=B(383);a.k8=b;if(c.bg!==null)Cd(c.bg);c.bg=a;if(d!==null&&d.op!==null&&Bg(d.op)>0){b=new T;V(b);a.tP=U(H(H(H(b,B(521)),d.op),B(522)));}a.C4=d.op;}
function AA1(a){a.iO=a.h1.kI;a.gJ=a.h1.kx;a.hI=a.h1.uu;}
function ALA(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOO(a.h1,a);$p=1;case 1:Ze(a);if(C()){break _;}return;default:E_();}}C3().s(a,$p);}
function ARX(a){APb(a.h1);}
function Et(a,b,c){APG(a.h1,b,c);}
function AB0(a,b){Fr(b,B(523),a.bU<<16>>16);Fr(b,B(524),a.dC<<16>>16);Fr(b,B(525),a.c2<<16>>16);Fr(b,B(526),a.dx<<16>>16);Gx(b,B(527),a.k7);HE(b,B(333),AMg(a.K,Mq()));}
function AO$(a,b){var c;a.bU=FI(b,B(523));if(!Y$(b,B(523)))a.bU=10;a.dC=FI(b,B(524));a.c2=FI(b,B(525));a.dx=FI(b,B(526));a.k7=FT(b,B(527));c=Kt(b,B(333));ARD(a.K,c);}
function Y_(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k8;d=Bcd(a.K,b);$p=1;case 1:AD8(c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AJm(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k8;d=new SU;DQ(d);d.Au=B(528);d.f8=0;d.fW=b;$p=1;case 1:AD8(c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AND(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k8;c=new Xt;d=a.K;Ib(c);c.ms=A0U(c,3,3);c.uy=A5x();S(c.c7,A3H(c,c.ms,c.uy,0,124,35));e=0;while(e<3){f=0;while(f<3){S(c.c7,D5(c,c.ms,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){S(c.c7,D5(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){S(c.c7,D5(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:AD8(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function APf(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k8;d=new Ws;e=a.K;Ib(d);d.sO=b;S(d.c7,D5(d,b,0,56,17));S(d.c7,D5(d,b,1,56,53));S(d.c7,D5(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){S(d.c7,D5(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){S(d.c7,D5(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:AD8(c,d);if(C()){break _;}return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,$p);}
function KD(a){return D9(a.K);}
function JD(a){AFS(a.K,a.K.bM,null);}
function ADJ(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=AR$(a.K,b);if(c<=0)return;$p=1;case 1:b.ft(a,c);if(C()){break _;}d=KD(a);if(d!==null&&b instanceof EQ){AFd(d,b);if(d.q<=0)JD(a);}return;default:E_();}}C3().s(a,b,c,d,$p);}
function R5(a,b){var c,d;c=a.k8.c6;d=new Vb;FB(d,a.k8.A,b.d,b.j,b.e,b.g,b.i,b.h);d.p_=0;d.rf=0;d.mB=b;d.hU=a;d.rf=3;d.A_=(-0.5);Ek(c,d);}
function ADc(a){return TL(a.K);}
function Vy(a,b){var c;if(!b.uS(a)){c=KD(a);if(c!==null&&b instanceof EQ){AEO(c,b);if(c.q<=0)JD(a);}}}
function AJU(){D.call(this);}
function Bk3(){var a=new AJU();AWt(a);return a;}
function AWt(a){return;}
function AMT(b){Bb();Beu=b;if(b){Bd_=0.0;Bea=0.0;setTimeout(Cu(new QK,"onTimer"),200);}else{Bes=B9();if(Bet)clearTimeout(Bet);Bet=0;BdQ.exitPointerLock();}}
function Fy(){var b,c;a:{Bb();Beo=null;if(!P5(Bd7)){b=Ts(Bd7,0);Beo=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function Cy(){Bb();return Beo===null?0:DB($rt_str(Beo.type),B(529));}
function ASc(){Bb();return Beo===null?(-1):Beo.clientX;}
function X1(){Bb();return Beo===null?(-1):BdS.clientHeight-Beo.clientY|0;}
function CW(){var b;Bb();if(Beo===null)b=(-1);else{b=Beo.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function Cb(b){Bb();return Beq.data[b];}
function G2(){Bb();return !DB(B(530),$rt_str(Beo.type))?0:Beo.deltaY===0.0?0:Beo.deltaY<=0.0?1:(-1);}
function Qx(){D.call(this);}
var Bk4=null;function Bk5(){var a=new Qx();ANY(a);return a;}
function ANY(a){return;}
function Bp(b){return Bk4.data[(b*651.8986206054688|0)&4095];}
function BC(b){return Bk4.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function En(b){return Ed(b);}
function Cg(b){return Ed(b);}
function Ll(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function K(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function GL(b,c){return b>=0?b/c|0: -(( -b-1|0)/c|0)-1|0;}
function AMf(){var b,c,d,e;Bk4=$rt_createFloatArray(4096);b=0;while(b<4096){Bk4.data[b]=Gr((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=Bk4.data;e=c;d[(e*11.377778053283691|0)&4095]=Gr(e*0.01745329238474369);c=c+90|0;}}
function Vx(){var a=this;D.call(a);a.EQ=null;a.bJ=0;}
function E8(a,b){var c=new Vx();A2a(c,a,b);return c;}
function A2a(a,b,c){a.EQ=b;a.bJ=c;}
function FC(){}
function VK(){var a=this;D.call(a);a.bd=null;a.cf=null;a.bM=0;a.nH=null;}
function D9(a){return a.bd.data[a.bM];}
function S9(a,b){var c;c=0;while(true){if(c>=a.bd.data.length)return (-1);if(a.bd.data[c]!==null&&a.bd.data[c].bC==b)break;c=c+1|0;}return c;}
function RQ(a){var b;b=0;while(true){if(b>=a.bd.data.length)return (-1);if(a.bd.data[b]===null)break;b=b+1|0;}return b;}
function ARx(a,b,c){var d;d=S9(a,b);if(d>=0&&d<9)a.bM=d;}
function F4(a,b){if(b>0)b=1;if(b<0)b=(-1);a.bM=a.bM-b|0;while(a.bM<0){a.bM=a.bM+9|0;}while(a.bM>=9){a.bM=a.bM-9|0;}}
function AEw(a){var b,c;b=0;while(b<a.bd.data.length){if(a.bd.data[b]!==null&&a.bd.data[b].mN>0){c=a.bd.data[b];c.mN=c.mN-1|0;}b=b+1|0;}}
function AG4(a,b){var c,d;c=S9(a,b);if(c<0)return 0;d=a.bd.data[c];b=d.q-1|0;d.q=b;if(b<=0)a.bd.data[c]=null;return 1;}
function Vj(a,b){var c,d,e,f;if(!b.en){c=b.bC;d=b.q;e=0;a:{while(true){if(e>=a.bd.data.length){e=(-1);break a;}if(a.bd.data[e]!==null&&a.bd.data[e].bC==c&&a.bd.data[e].q<EB(a.bd.data[e])&&a.bd.data[e].q<64)break;e=e+1|0;}}if(e<0)e=RQ(a);if(e>=0){if(a.bd.data[e]===null)a.bd.data[e]=KN(c,0);c=d<=(EB(a.bd.data[e])-a.bd.data[e].q|0)?d:EB(a.bd.data[e])-a.bd.data[e].q|0;if(c>(64-a.bd.data[e].q|0))c=64-a.bd.data[e].q|0;if(c){d=d-c|0;f=a.bd.data[e];f.q=f.q+c|0;a.bd.data[e].mN=5;}}b.q=d;if(!b.q)return 1;}c=RQ(a);if(c
<0)return 0;a.bd.data[c]=b;a.bd.data[c].mN=5;return 1;}
function El(a,b,c){var d,e,f;d=a.bd;if(b>=a.bd.data.length){d=a.cf;b=b-a.bd.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].q<=c){e=d[b];d[b]=null;return e;}f=EF(d[b],c);if(!d[b].q)d[b]=null;return f;}
function AFS(a,b,c){var d;d=a.bd;if(b>=a.bd.data.length){d=a.cf;b=b-a.bd.data.length|0;}d.data[b]=c;}
function ADK(a,b){var c;c=1.0;if(a.bd.data[a.bM]!==null)c=c*AFx(a.bd.data[a.bM],b);return c;}
function AMg(a,b){var c,d,e;c=0;while(c<a.bd.data.length){if(a.bd.data[c]!==null){d=G$();JQ(d,B(531),c<<24>>24);QY(a.bd.data[c],d);Ju(b,d);}c=c+1|0;}e=0;while(e<a.cf.data.length){if(a.cf.data[e]!==null){d=G$();JQ(d,B(531),(e+100|0)<<24>>24);QY(a.cf.data[e],d);Ju(b,d);}e=e+1|0;}return b;}
function ARD(a,b){var c,d,e;a.bd=J(Cf,36);a.cf=J(Cf,4);c=0;while(c<AOH(b)){d=Fd(b,c);e=LU(d,B(531))&255;if(e>=0&&e<a.bd.data.length)a.bd.data[e]=A_m(d);if(e>=100&&e<(a.cf.data.length+100|0))a.cf.data[e-100|0]=A_m(d);c=c+1|0;}}
function YB(a){return a.bd.data.length+4|0;}
function RY(a,b){var c;c=a.bd;if(b>=a.bd.data.length){c=a.cf;b=b-a.bd.data.length|0;}return c.data[b];}
function ATJ(a){return B(333);}
function AZI(a){return 64;}
function AR$(a,b){var c;c=RY(a,a.bM);return c===null?1:AAy(c,b);}
function AD9(a,b){var c;if(b.b$!==Bhm&&b.b$!==BhB)return 1;c=RY(a,a.bM);return c===null?0:AOk(c,b);}
function AIx(a,b){return a.cf.data[b];}
function TL(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.cf.data.length){if(a.cf.data[e]!==null&&DL(a.cf.data[e]) instanceof F2){f=Kx(a.cf.data[e]);c=c+(f-a.cf.data[e].en|0)|0;d=d+f|0;b=b+DL(a.cf.data[e]).zu|0;}e=e+1|0;}if(!d)return 0;return (Bx(b-1|0,c)/d|0)+1|0;}
function AEc(a,b){var c;c=0;while(c<a.cf.data.length){if(a.cf.data[c]!==null&&DL(a.cf.data[c]) instanceof F2){FJ(a.cf.data[c],b);if(!a.cf.data[c].q)a.cf.data[c]=null;}c=c+1|0;}}
function AJc(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(true){if(b>=a.bd.data.length){b=0;while(b<a.cf.data.length){if(a.cf.data[b]!==null){c=a.nH;d=a.cf.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bd.data[b]!==null)break;b=b+1|0;}c=a.nH;d=a.bd.data[b];e=1;$p=1;case 1:AQJ(c,d,e);if(C()){break _;}a.bd.data[b]=null;while(true){b=b+1|0;if(b>=a.bd.data.length){b=0;while(b<a.cf.data.length){if(a.cf.data[b]
!==null){c=a.nH;d=a.cf.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bd.data[b]===null)continue;else break;}c=a.nH;d=a.bd.data[b];e=1;continue _;case 2:AQJ(c,d,e);if(C()){break _;}a.cf.data[b]=null;while(true){b=b+1|0;if(b>=a.cf.data.length)break;if(a.cf.data[b]===null)continue;else{c=a.nH;d=a.cf.data[b];e=1;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AAB(a){return;}
function Du(){IY.call(this);}
function Ew(){var a=this;CT.call(a);a.br=null;a.e_=0;a.fm=0;a.c7=null;}
var Bk6=null;function Bk7(){var a=new Ew();Ib(a);return a;}
function Ib(a){DQ(a);a.br=null;a.e_=176;a.fm=166;a.c7=Ch();}
function ACs(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABs(a);if(C()){break _;}e=(a.bn-a.e_|0)/2|0;f=(a.bE-a.fm|0)/2|0;$p=2;case 2:a.s8(d);if(C()){break _;}B1();Bw(180.0,1.0,0.0,0.0);Hw();BE();B1();Bu(e,f,0.0);BW(1.0,1.0,1.0,1.0);Ba(32826);g=0;if(g>=a.c7.p){if(a.br===null){Bc(32826);DS();Bc(2896);Bc(2929);a.lu();Ba(2896);Ba(2929);BE();return;}Bu(0.0,
0.0,32.0);h=Bk6;i=a.b1;j=a.I.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e3;l=h.lQ;m=h.jR;n=h.jT;i=i.gD(l);if(i===null){l=h.r0();if(l>=0){Bc(2896);i=a.I.bo;j=a.I.bo;k=B(230);$p=5;continue _;}}j=Bk6;k=a.b1;o=a.I.bo;$p=4;continue _;case 3:AGx(h,i,j,k,b,c);if(C()){break _;}LH(Bk6,a.b1,a.I.bo,a.br,b,c);Bc(32826);DS();Bc(2896);Bc(2929);a.lu();Ba(2896);Ba(2929);BE();return;case 4:AGx(j,k,o,i,m,n);if(C()){break _;}LH(Bk6,a.b1,a.I.bo,i,m,n);if(Np(h,b,c)){Bc(2896);Bc(2929);l=h.jR;p=h.jT;K1(a,
l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c7.p){if(a.br===null){Bc(32826);DS();Bc(2896);Bc(2929);a.lu();Ba(2896);Ba(2929);BE();return;}Bu(0.0,0.0,32.0);h=Bk6;i=a.b1;j=a.I.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e3;l=h.lQ;m=h.jR;n=h.jT;i=i.gD(l);if(i===null){l=h.r0();if(l>=0){Bc(2896);i=a.I.bo;j=a.I.bo;k=B(230);$p=5;continue _;}}j=Bk6;k=a.b1;o=a.I.bo;continue _;case 5:$z=AHK(j,k);if(C()){break _;}p=$z;Ea(i,p);CI(a,m,n,(l%16|0)*16|0,(l/16|
0)*16|0,16,16);Ba(2896);if(Np(h,b,c)){Bc(2896);Bc(2929);l=h.jR;p=h.jT;K1(a,l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Ba(2896);Ba(2929);}g=g+1|0;if(g>=a.c7.p){if(a.br===null){Bc(32826);DS();Bc(2896);Bc(2929);a.lu();Ba(2896);Ba(2929);BE();return;}Bu(0.0,0.0,32.0);h=Bk6;i=a.b1;j=a.I.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e3;l=h.lQ;m=h.jR;n=h.jT;i=i.gD(l);if(i===null){l=h.r0();if(l>=0){Bc(2896);i=a.I.bo;j=a.I.bo;k=B(230);continue _;}}j=Bk6;k=a.b1;o=a.I.bo;$p=4;continue _;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AQM(a,b,c){var d,e;d=0;while(true){if(d>=a.c7.p)return null;e=Z(a.c7,d);if(Np(e,b,c))break;d=d+1|0;}return e;}
function AOf(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(d&&d!=1)){e=AQM(a,b,c);if(e!==null){$p=1;continue _;}if(a.br!==null){f=(a.bn-a.e_|0)/2|0;g=(a.bE-a.fm|0)/2|0;if(!(b>=f&&c>=g&&b<(f+a.e_|0)&&c<(g+a.e_|0))){h=a.I.f;if(!d){e=a.br;$p=2;continue _;}if(d==1){e=EF(a.br,1);$p=3;continue _;}}}}return;case 1:a:{AKO(e);if(C()){break _;}i=ARL(e);if(!(i===null&&a.br===null)){if
(i!==null&&a.br===null){g=!d?i.q:(i.q+1|0)/2|0;a.br=e.e3.j9(e.lQ,g);if(i.q){$p=4;continue _;}h=null;$p=5;continue _;}if(i===null&&a.br!==null&&e.ta(a.br)){g=d?1:a.br.q;if(g>e.e3.f9())g=e.e3.f9();h=EF(a.br,g);$p=7;continue _;}if(i!==null&&a.br!==null){if(!e.ta(a.br)){if(i.bC!=a.br.bC)break a;if(EB(a.br)<=1)break a;g=i.q;if(g<=0)break a;if((g+a.br.q|0)>EB(a.br))break a;h=a.br;h.q=h.q+g|0;EF(i,g);if(i.q){$p=8;continue _;}h=null;$p=9;continue _;}if(i.bC==a.br.bC){if(i.bC==a.br.bC){if(!d){g=a.br.q;if(g>(e.e3.f9()
-i.q|0))g=e.e3.f9()-i.q|0;if(g>(EB(a.br)-i.q|0))g=EB(a.br)-i.q|0;EF(a.br,g);if(!a.br.q)a.br=null;i.q=i.q+g|0;}else if(d==1){g=1;if(g>(e.e3.f9()-i.q|0))g=e.e3.f9()-i.q|0;if(g>(EB(a.br)-i.q|0))g=EB(a.br)-i.q|0;EF(a.br,g);if(!a.br.q)a.br=null;i.q=i.q+g|0;}}}else if(a.br.q<=e.e3.f9()){h=a.br;$p=6;continue _;}}}}return;case 2:AL4(h,e);if(C()){break _;}a.br=null;if(d!=1)return;e=EF(a.br,1);$p=3;case 3:AL4(h,e);if(C()){break _;}if(!a.br.q)a.br=null;return;case 4:e.Jv();if(C()){break _;}return;case 5:ALK(e,h);if(C())
{break _;}$p=4;continue _;case 6:ALK(e,h);if(C()){break _;}a.br=i;return;case 7:ALK(e,h);if(C()){break _;}if(!a.br.q)a.br=null;return;case 8:e.Jv();if(C()){break _;}return;case 9:ALK(e,h);if(C()){break _;}$p=8;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function A9X(a,b,c,d){return;}
function AAJ(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.I.k.fv.bJ)return;d=a.I;e=null;$p=1;case 1:AD8(d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AA_(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.br===null)return;b=a.I.f;c=a.br;$p=1;case 1:AL4(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function A_f(a){return 0;}
function AKo(){Bk6=X_();}
function AP1(){var a=this;Ew.call(a);a.j5=null;a.xQ=null;a.AU=0.0;a.EH=0.0;}
function E7(a){var b=new AP1();AZ5(b,a);return b;}
function AZ5(a,b){var c,d,e,f,g;Ib(a);a.j5=A0U(a,2,2);a.xQ=A5x();a.pU=1;S(a.c7,A3H(a,a.j5,a.xQ,0,144,36));c=0;while(c<2){d=0;while(d<2){S(a.c7,D5(a,a.j5,d+(c*2|0)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.c7;f=new QT;UJ(f,a,b,(YB(b)-1|0)-d|0,8,8+(d*18|0)|0);f.H9=a;f.wy=d;S(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){S(a.c7,D5(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){S(a.c7,D5(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function ALW(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA_(a);if(C()){break _;}b=0;while(b<a.j5.lZ){c=Gg(a.j5,b);if(c!==null){d=a.I.f;$p=2;continue _;}b=b+1|0;}return;case 2:AL4(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=a.j5.lZ)break;c=Gg(a.j5,b);if(c===null)continue;else{d=a.I.f;continue _;}}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AT9(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=(-1);if(e<2&&f<2){h=Gg(a.j5,e+(f*2|0)|0);if(h!==null)g=h.bC;}d[e+(f*3|0)|0]=g;f=f+1|0;}e=e+1|0;}Pt(a.xQ,0,RU(Wy(),c));}
function A0l(a){ED(a.b1,B(532),86,16,4210752);}
function AEa(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACs(a,b,c,d);if(C()){break _;}a.AU=b;a.EH=c;return;default:E_();}}C3().s(a,b,c,d,$p);}
function Yg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(533);$p=1;case 1:$z=AHK(c,d);if(C()){break _;}e=$z;BW(1.0,1.0,1.0,1.0);Ea(a.I.bo,e);f=(a.bn-a.e_|0)/2|0;g=(a.bE-a.fm|0)/2|0;CI(a,f,g,0,0,a.e_,a.fm);Ba(32826);Ba(2903);B1();b=f+51|0;e=g+75|0;Bu(b,e,50.0);Cw((-30.0),30.0,30.0);Bw(180.0,
0.0,0.0,1.0);h=a.I.f.dD;i=a.I.f.v;j=a.I.f.J;k=b-a.AU;l=(e-50|0)-a.EH;Bw(135.0,0.0,1.0,0.0);Hw();Bw((-135.0),0.0,1.0,0.0);m=l/40.0;Bw( -Iq(m)*20.0,1.0,0.0,0.0);d=a.I.f;n=k/40.0;d.dD=Iq(n)*20.0;a.I.f.v=Iq(n)*40.0;a.I.f.J= -Iq(m)*20.0;Bu(0.0,a.I.f.c4,0.0);d=BgB;c=a.I.f;m=0.0;n=0.0;o=0.0;b=0.0;p=1.0;$p=2;case 2:AQS(d,c,m,n,o,b,p);if(C()){break _;}a.I.f.dD=h;a.I.f.v=i;a.I.f.J=j;BE();DS();Bc(32826);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function I6(){var a=this;D.call(a);a.qZ=0;a.sE=0;a.vP=0;a.vV=0;a.xP=0;a.D2=0;a.cH=null;a.wv=null;a.ww=null;a.wx=null;a.uf=null;a.up=null;a.vs=null;a.xm=null;a.vQ=null;a.u0=null;a.tZ=null;a.uD=null;a.uN=null;a.wF=null;a.ub=null;a.yt=null;a.rb=0;a.p0=0;a.oI=0;a.GI=0;a.Hl=0;a.ui=null;a.uX=null;a.xs=0;a.xb=null;a.vN=null;a.wm=null;a.yB=null;a.yH=null;a.yh=null;a.mr=null;a.mK=null;a.vK=0;a.r6=0.0;a.r5=0.0;a.r4=0.0;a.r3=0.0;a.sJ=0.0;a.tx=0.0;a.rN=0.0;a.sv=0.0;a.qX=0.0;a.qY=0.0;a.tn=0.0;a.tm=0.0;a.tl=0.0;a.tk=0.0;a.s3
=0.0;a.s1=0.0;a.s2=0.0;}
var Bk8=null;var Bk9=null;function Bat(a,b,c,d,e,f,g){var h=new I6();AIt(h,a,b,c,d,e,f,g);return h;}
function Pj(b){var c,d,e,f,g,h,i;c=Bk8.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=Bat(b,d,e,f,g,h,i);Bk8.data[b]=c;}return c;}
function AIt(a,b,c,d,e,f,g,h){var i,j,k;WQ(a);a.wv=null;a.ww=null;a.wx=null;a.uf=null;a.up=null;a.vs=null;a.xm=null;a.vQ=null;a.u0=null;a.tZ=null;a.uD=null;a.uN=null;a.wF=null;a.ub=null;a.yt=null;a.xs=0;a.xb=$rt_createFloatArray(16);a.vN=$rt_createFloatArray(16);a.wm=$rt_createFloatArray(16);a.yB=KH(Nm());a.yH=KH(Nm());a.yh=KH(Nm());a.mr=A3c();a.mK=A3c();a.vK=0;a.r6=0.0;a.r5=0.0;a.r4=0.0;a.r3=0.0;a.sJ=0.0;a.tx=0.0;a.rN=0.0;a.sv=0.0;a.qX=0.0;a.qY=0.0;a.tn=0.0;a.tm=0.0;a.tl=0.0;a.tk=0.0;a.s3=0.0;a.s1=0.0;a.s2
=0.0;a.qZ=c;a.sE=d;a.vP=e;a.vV=f;a.xP=g;a.D2=h;if(Bk9===null)Bk9=QJ(B(534));i=B(3);if(a.qZ)i=BD(H(H(BN(),i),B(535)));if(a.sE)i=BD(H(H(BN(),i),B(536)));if(a.vP)i=BD(H(H(BN(),i),B(537)));if(a.vV)i=BD(H(H(BN(),i),B(538)));if(a.xP)i=BD(H(H(BN(),i),B(539)));if(a.D2)i=BD(H(H(BN(),i),B(540)));i=BD(H(H(BN(),i),Bk9));j=I5(35633);I9(j,BD(H(H(H(BN(),Je()),B(320)),i)));K6(j);if(!KB(j)){B7(CP(),Hm(BD(H(H(BN(),B(324)),Ko(j))),B(158),B(541)));M(AAc(B(542)));}k=I5(35632);I9(k,BD(H(H(H(BN(),Je()),B(321)),i)));K6(k);if(!KB(k))
{B7(CP(),Hm(BD(H(H(BN(),B(324)),Ko(k))),B(158),B(543)));M(AAc(B(542)));}a.cH=Tf();JS(a.cH,j);JS(a.cH,k);b=1;a.rb=0;Md(a.cH,a.rb,B(544));if(!a.sE)a.p0=(-1);else{a.p0=b;Md(a.cH,a.p0,B(545));b=2;}if(!a.qZ)a.oI=(-1);else{c=b+1|0;a.oI=b;Md(a.cH,a.oI,B(546));b=c;}a.GI=(-1);a.Hl=b;P8(a.cH);Kr(a.cH,j);Kr(a.cH,k);J_(j);J_(k);if(!SC(a.cH)){B7(CP(),Hm(BD(H(H(BN(),B(324)),S0(a.cH))),B(158),B(547)));M(AAc(B(542)));}KU(a.cH);a.wv=C7(a.cH,B(326));a.ww=C7(a.cH,B(327));a.wx=C7(a.cH,B(548));a.tZ=C7(a.cH,B(549));if(a.vP){a.uD
=C7(a.cH,B(550));a.ub=C7(a.cH,B(551));a.yt=C7(a.cH,B(552));}if(a.vV){a.uf=C7(a.cH,B(553));a.up=C7(a.cH,B(554));a.vs=C7(a.cH,B(555));a.xm=C7(a.cH,B(556));a.vQ=C7(a.cH,B(557));a.u0=C7(a.cH,B(558));}if(a.xP)a.uN=C7(a.cH,B(559));Ri(C7(a.cH,B(560)),0);a.wF=C7(a.cH,B(561));a.ui=Ly();a.uX=JK();JN(a.ui);Gm(34962,a.uX);RJ(a);}
function RJ(a){K2(a.rb);K5(a.rb,3,5126,0,28,0);if(a.sE){K2(a.p0);K5(a.p0,2,5126,0,28,12);}if(a.qZ){K2(a.oI);K5(a.oI,4,5121,1,28,20);}}
function ARb(a){KU(a.cH);}
function AUs(a){return;}
function AME(a,b){if(!Jk(b,a.yB)){IH(F1(a.yB,b),a.xb);H5(a.wv,a.xb);}}
function ANc(a,b){if(!Jk(b,a.yH)){IH(F1(a.yH,b),a.vN);H5(a.ww,a.vN);}}
function Z9(a,b){if(!Jk(b,a.yh)){IH(F1(a.yh,b),a.wm);H5(a.wx,a.wm);}}
function ANo(a,b,c){if(!(Th(b,a.mr)&&Th(c,a.mK))){VN(a.mr,b);VN(a.mK,c);LI(a.ub,a.mr.le,a.mr.lf,a.mr.ld);LI(a.yt,a.mK.le,a.mK.lf,a.mK.ld);}}
function ALC(a,b){if(a.vK!=b){a.vK=b;Ri(a.up,b%2|0);Ie(a.u0,b/2|0);}}
function AQo(a,b,c,d,e){if(!(a.r6===b&&a.r5===c&&a.r4===d&&a.r3===e)){a.r6=b;a.r5=c;a.r4=d;a.r3=e;Uq(a.uf,a.r6,a.r5,a.r4,a.r3);}}
function APY(a,b,c){if(!(a.sJ===b&&a.tx===c)){a.sJ=b;a.tx=c;Ie(a.vs,a.sJ);Ie(a.xm,a.tx);}}
function AKZ(a,b){if(a.rN!==b){a.rN=b;Ie(a.vQ,a.rN);}}
function AI9(a,b){if(a.sv!==b){a.sv=b;Ie(a.uN,a.sv);}}
function AOX(a,b,c){var d,e;if(!(a.qX===b&&a.qY===c)){a.qX=b;a.qY=c;d=a.wF;b=a.qX;c=a.qY;Bb();if(d!==null){e=BdV;d=d.kD;e.uniform2f(d,b,c);}}}
function ALZ(a,b,c,d,e){if(!(a.tn===b&&a.tm===c&&a.tl===d&&a.tk===e)){a.tn=b;a.tm=c;a.tl=d;a.tk=e;Uq(a.tZ,a.tn,a.tm,a.tl,a.tk);}}
function ACh(a,b,c,d){if(!(a.s3===b&&a.s1===c&&a.s2===d)){a.s3=b;a.s1=c;a.s2=d;LI(a.uD,a.s3,a.s1,a.s2);}}
function AO4(){Bk8=J(I6,128);Bk9=null;}
function RB(){var a=this;D.call(a);a.BO=0;a.rl=null;a.o4=null;a.lO=0;a.jN=0;}
function Tp(){var a=this;D.call(a);a.t6=null;a.xG=0;a.DI=0;a.Fx=0;}
function AHF(){var a=this;D.call(a);a.k$=0;a.ic=0;a.id=0;a.ie=0;a.hM=0;a.gE=null;a.nG=null;}
function A0T(a,b,c,d,e){var f=new AHF();A6l(f,a,b,c,d,e);return f;}
function A1t(a){var b=new AHF();A9P(b,a);return b;}
function A6l(a,b,c,d,e,f){a.k$=0;a.ic=b;a.id=c;a.ie=d;a.hM=e;a.gE=BY(f.x,f.z,f.w);}
function A9P(a,b){a.k$=1;a.nG=b;a.gE=BY(b.d,b.j,b.e);}
function Cf(){var a=this;D.call(a);a.q=0;a.mN=0;a.bC=0;a.en=0;}
function AMc(a){var b=new Cf();AIe(b,a);return b;}
function G1(a,b){var c=new Cf();Vf(c,a,b);return c;}
function Qt(a){var b=new Cf();DC(b,a);return b;}
function EL(a,b){var c=new Cf();Gp(c,a,b);return c;}
function KN(a,b){var c=new Cf();M4(c,a,b);return c;}
function OB(a,b,c){var d=new Cf();A0X(d,a,b,c);return d;}
function A_m(a){var b=new Cf();A1M(b,a);return b;}
function AIe(a,b){Vf(a,b,1);}
function Vf(a,b,c){M4(a,b.b,c);}
function DC(a,b){Gp(a,b,1);}
function Gp(a,b,c){M4(a,b.cW,c);}
function M4(a,b,c){a.q=0;a.bC=b;a.q=c;}
function A0X(a,b,c,d){a.q=0;a.bC=b;a.q=c;a.en=d;}
function A1M(a,b){a.q=0;AEl(a,b);}
function EF(a,b){a.q=a.q-b|0;return OB(a.bC,b,a.en);}
function DL(a){BB();return Bhr.data[a.bC];}
function DK(a){return DL(a).ti;}
function AJu(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=DL(a);$p=1;case 1:$z=h.iQ(a,b,c,d,e,f,g);if(C()){break _;}d=$z;return d;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFx(a,b){return DL(a).yi(a,b);}
function ABr(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=DL(a);$p=1;case 1:$z=d.ob(a,b,c);if(C()){break _;}b=$z;return b;default:E_();}}C3().s(a,b,c,d,$p);}
function QY(a,b){Fr(b,B(562),a.bC<<16>>16);JQ(b,B(563),a.q<<24>>24);Fr(b,B(564),a.en<<16>>16);return b;}
function AEl(a,b){a.bC=FI(b,B(562));a.q=LU(b,B(563));a.en=FI(b,B(564));}
function EB(a){return DL(a).eZ;}
function Kx(a){BB();return Bhr.data[a.bC].fg;}
function FJ(a,b){a.en=a.en+b|0;if(a.en>Kx(a)){a.q=a.q-1|0;if(a.q<0)a.q=0;a.en=0;}}
function AFd(a,b){BB();Bhr.data[a.bC].sj(a,b);}
function QR(a,b,c,d,e){BB();Bhr.data[a.bC].yc(a,b,c,d,e);}
function AAy(a,b){BB();return Bhr.data[a.bC].n4(b);}
function AOk(a,b){BB();return Bhr.data[a.bC].o$(b);}
function A1q(a,b){return;}
function AEO(a,b){BB();Bhr.data[a.bC].y0(a,b);}
function ZX(){var a=this;D.call(a);a.h8=null;a.lZ=0;a.so=null;}
function A0U(a,b,c){var d=new ZX();AWL(d,a,b,c);return d;}
function AWL(a,b,c,d){a.lZ=Bx(c,d);a.h8=J(Cf,a.lZ);a.so=b;}
function A3F(a){return a.lZ;}
function Gg(a,b){return a.h8.data[b];}
function AFa(a,b,c){var d,e;if(a.h8.data[b]===null)return null;if(a.h8.data[b].q<=c){d=a.h8.data[b];a.h8.data[b]=null;a.so.tu(a);return d;}e=EF(a.h8.data[b],c);if(!a.h8.data[b].q)a.h8.data[b]=null;a.so.tu(a);return e;}
function A3S(a,b,c){a.h8.data[b]=c;a.so.tu(a);}
function A9d(a){return 64;}
function AD3(a){return;}
function AAR(){D.call(this);this.na=null;}
function A5x(){var a=new AAR();AS9(a);return a;}
function AS9(a){a.na=J(Cf,1);}
function A5k(a,b){return a.na.data[b];}
function AWT(a,b,c){var d;if(a.na.data[b]===null)return null;d=a.na.data[b];a.na.data[b]=null;return d;}
function Pt(a,b,c){a.na.data[b]=c;}
function AZa(a){return 64;}
function ANv(a){return;}
function HJ(){var a=this;D.call(a);a.lQ=0;a.jR=0;a.jT=0;a.e3=null;a.p5=null;}
function D5(a,b,c,d,e){var f=new HJ();UJ(f,a,b,c,d,e);return f;}
function UJ(a,b,c,d,e,f){a.p5=b;a.e3=c;a.lQ=d;a.jR=e;a.jT=f;}
function Np(a,b,c){var d,e;d=(a.p5.bn-a.p5.e_|0)/2|0;e=(a.p5.bE-a.p5.fm|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.jR-1|0)&&d<((a.jR+16|0)+1|0)&&c>=(a.jT-1|0)&&c<((a.jT+16|0)+1|0)?1:0;}
function ALm(a){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKO(a);if(C()){break _;}return;default:E_();}}C3().s(a,$p);}
function AXx(a,b){return 1;}
function ARL(a){return a.e3.gD(a.lQ);}
function ALK(a,b){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e3.jF(a.lQ,b);$p=1;case 1:AKO(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function A96(a){return (-1);}
function AKO(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.e3;$p=1;case 1:b.km();if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function ADs(){HJ.call(this);this.qQ=null;}
function A3H(a,b,c,d,e,f){var g=new ADs();A49(g,a,b,c,d,e,f);return g;}
function A49(a,b,c,d,e,f,g){UJ(a,b,d,e,f,g);a.qQ=c;}
function A0C(a,b){return 0;}
function AOi(a){var b;b=0;while(b<a.qQ.lZ){if(Gg(a.qQ,b)!==null)AFa(a.qQ,b,1);b=b+1|0;}}
function QT(){var a=this;HJ.call(a);a.wy=0;a.H9=null;}
function A28(a,b){return !(DL(b) instanceof F2)?0:DL(b).Ac!=a.wy?0:1;}
function AWN(a){return 15+(a.wy*16|0)|0;}
function Wh(){D.call(this);this.Ed=null;}
function SH(){var a=this;D.call(a);a.Bh=null;a.v3=0;}
function Nj(){Fk.call(this);}
function U8(b){var c,d;c=b.data.length;d=new U2;Uk(d,c,0,0+c|0);d.x_=0;d.BL=0;d.w4=b;return d;}
function AFu(a){EA(a);return a;}
function AH4(a){Gu(a);return a;}
function Dh(){var a=this;D.call(a);a.iG=null;a.HO=null;a.If=null;a.mc=0.0;a.Cf=0.0;}
function Bk$(){var a=new Dh();EH(a);return a;}
function EH(a){a.HO=A_a();a.If=Ku();a.mc=0.0;a.Cf=1.0;}
function AKG(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.iG.t5;$p=1;case 1:$z=AHK(c,b);if(C()){break _;}d=$z;Ea(c,d);return;default:E_();}}C3().s(a,b,c,d,$p);}
function APD(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iG.t5;$p=1;case 1:$z=AEf(d,b,c);if(C()){break _;}e=$z;Ea(d,e);return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AHe(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bc(2896);L();g=BgC.W;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;B1();Bu(c,d,e);n=b.c1*1.399999976158142;Cw(n,n,n);o=B(179);$p
=1;case 1:AKG(a,o);if(C()){break _;}BA();o=BeY;p=1.0;q=0.0;r=b.eN/b.c1;Bw( -a.iG.rs,0.0,1.0,0.0);Bu(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BW(1.0,1.0,1.0,1.0);Bz(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;G(o,c,d,0.0,e,s);G(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;G(o,(-0.5),d,0.0,t,u);G(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Bu(0.0,0.0,(-0.03999999910593033));}Bt(o);BE();Ba(2896);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function A8F(b,c,d,e){var f;Bc(3553);BA();f=BeY;BW(1.0,1.0,1.0,1.0);Bz(f);Fa(f,c,d,e);Cj(0.0,0.0,(-1.0));Bl(f,b.Y,b.bj,b.Z);Bl(f,b.bl,b.bj,b.Z);Bl(f,b.bl,b.Q,b.Z);Bl(f,b.Y,b.Q,b.Z);Cj(0.0,0.0,1.0);Bl(f,b.Y,b.Q,b.bm);Bl(f,b.bl,b.Q,b.bm);Bl(f,b.bl,b.bj,b.bm);Bl(f,b.Y,b.bj,b.bm);Cj(0.0,(-1.0),0.0);Bl(f,b.Y,b.Q,b.Z);Bl(f,b.bl,b.Q,b.Z);Bl(f,b.bl,b.Q,b.bm);Bl(f,b.Y,b.Q,b.bm);Cj(0.0,1.0,0.0);Bl(f,b.Y,b.bj,b.bm);Bl(f,b.bl,b.bj,b.bm);Bl(f,b.bl,b.bj,b.Z);Bl(f,b.Y,b.bj,b.Z);Cj((-1.0),0.0,0.0);Bl(f,b.Y,b.Q,b.bm);Bl(f,b.Y,
b.bj,b.bm);Bl(f,b.Y,b.bj,b.Z);Bl(f,b.Y,b.Q,b.Z);Cj(1.0,0.0,0.0);Bl(f,b.bl,b.Q,b.Z);Bl(f,b.bl,b.bj,b.Z);Bl(f,b.bl,b.bj,b.bm);Bl(f,b.bl,b.Q,b.bm);Fa(f,0.0,0.0,0.0);Bt(f);Ba(3553);}
function AUX(a,b){a.iG=b;}
function ANw(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJ8(a.iG,b.d,b.j,b.e);if(b.cV<=0)return;$p=1;case 1:AHe(a,b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AIW(){var a=this;Dh.call(a);a.wV=null;a.ij=null;}
function X_(){var a=new AIW();A5M(a);return a;}
function A5M(a){EH(a);a.wV=Ku();a.ij=new DA;a.mc=0.15000000596046448;a.Cf=0.75;}
function APT(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b.nk;B1();i=Bp((b.mO+g)/10.0+b.yL)*0.10000000149011612+0.10000000149011612;j=((b.mO+g)/20.0+b.yL)*57.2957763671875;k=1;if(b.nk.q>1)k=2;if(b.nk.q>5)k=3;if(b.nk.q>20)k=4;Bu(c,d+
i,e);Ba(32826);if(h.bC<256){L();if(!Be2.data[h.bC].em()){Bw(j,0.0,1.0,0.0);b=B(179);$p=3;continue _;}}Cw(0.5,0.5,0.5);l=DK(h);if(h.bC>=256){b=B(230);$p=1;continue _;}b=B(179);$p=2;continue _;case 1:AKG(a,b);if(C()){break _;}BA();m=BeY;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B1();if(s>0)Bu((N(a.ij)*2.0-1.0)*0.30000001192092896,(N(a.ij)*2.0-1.0)*0.30000001192092896,(N(a.ij)*2.0-1.0)*0.30000001192092896);Bw(180.0-a.iG.rs,0.0,
1.0,0.0);Bz(m);Cj(0.0,1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Bt(m);BE();s=s+1|0;}Bc(32826);BE();return;case 2:AKG(a,b);if(C()){break _;}BA();m=BeY;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B1();if(s>0)Bu((N(a.ij)*2.0-1.0)*0.30000001192092896,(N(a.ij)*2.0-1.0)*0.30000001192092896,(N(a.ij)*2.0-1.0)*0.30000001192092896);Bw(180.0-a.iG.rs,0.0,1.0,0.0);Bz(m);Cj(0.0,
1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Bt(m);BE();s=s+1|0;}Bc(32826);BE();return;case 3:AKG(a,b);if(C()){break _;}v=0.25;if(!Be2.data[h.bC].gq()&&h.bC!=Be7.b)v=0.5;Cw(v,v,v);n=0;while(n<k){B1();if(n>0)Bu((N(a.ij)*2.0-1.0)*0.20000000298023224/v,(N(a.ij)*2.0-1.0)*0.20000000298023224/v,(N(a.ij)*2.0-1.0)*0.20000000298023224/v);GX(a.wV,Be2.data[h.bC]);BE();n=n+1|0;}Bc(32826);BE();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,$p);}
function AGx(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d!==null){if(d.bC<256){L();if(!Be2.data[d.bC].em()){g=d.bC;b=B(179);$p=1;continue _;}}if(DK(d)>=0){Bc(2896);if(d.bC>=256){b=B(230);$p=2;continue _;}b=B(179);$p=3;continue _;}}return;case 1:$z=AHK(c,b);if(C()){break _;}h=$z;Ea(c,h);i=Be2.data[g];B1();Bu(e-2|0,f+3|0,0.0);Cw(10.0,10.0,10.0);Bu(1.0,0.5,8.0);Bw(210.0,1.0,
0.0,0.0);Bw(45.0,0.0,1.0,0.0);BW(1.0,1.0,1.0,1.0);GX(a.wV,i);BE();return;case 2:$z=AHK(c,b);if(C()){break _;}g=$z;Ea(c,g);W9(a,e,f,(DK(d)%16|0)*16|0,(DK(d)/16|0)*16|0,16,16);Ba(2896);return;case 3:$z=AHK(c,b);if(C()){break _;}g=$z;Ea(c,g);W9(a,e,f,(DK(d)%16|0)*16|0,(DK(d)/16|0)*16|0,16,16);Ba(2896);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function LH(a,b,c,d,e,f){var g,h,i,j,k,l;if(d!==null){if(d.q>1){c=new T;V(c);g=U(Be(H(c,B(3)),d.q));Bc(2896);Bc(2929);Cz(b,g,((e+19|0)-2|0)-Dx(b,g)|0,(f+6|0)+3|0,16777215);Ba(2896);Ba(2929);}if(d.en>0){h=13-((d.en*13|0)/Kx(d)|0)|0;i=255-((d.en*255|0)/Kx(d)|0)|0;Bc(2896);Bc(2929);Bc(3553);BA();j=BeY;k=255-i|0;l=k<<16|i<<8;k=(k/4|0)<<16|16128;e=e+2|0;f=f+13|0;Of(a,j,e,f,13,2,0);Of(a,j,e,f,12,1,k);Of(a,j,e,f,h,1,l);Ba(3553);Ba(2896);Ba(2929);BW(1.0,1.0,1.0,1.0);}}}
function Of(a,b,c,d,e,f,g){var h,i,j;Bz(b);ES(b,g);h=c+0|0;i=d+0|0;Bl(b,h,i,0.0);j=d+f|0;Bl(b,h,j,0.0);h=c+e|0;Bl(b,h,j,0.0);Bl(b,h,i,0.0);Bt(b);}
function W9(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;BA();h=BeY;Bz(h);i=b+0|0;j=c+g|0;k=(d+0|0)*0.00390625;l=(e+g|0)*0.00390625;G(h,i,j,0.0,k,l);m=b+f|0;n=(d+f|0)*0.00390625;G(h,m,j,0.0,n,l);l=c+0|0;j=(e+0|0)*0.00390625;G(h,m,l,0.0,n,j);G(h,i,l,0.0,k,j);Bt(h);}
function ADi(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APT(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Pl(){var a=this;D.call(a);a.B6=null;a.Iz=0;a.Iw=0;a.GA=0;a.Hs=0;}
function QM(){var a=this;D.call(a);a.f6=null;a.yq=null;}
function ZD(a,b){var c,d,e,f,g,h,i,j,k,l;if(Hk()===null)Bem=BdQ.createElement("canvas");if(Hk().width<a.f6.width){b=Hk();c=a.f6.width;b.width=c;}if(Hk().height<a.f6.height){b=Hk();c=a.f6.height;b.height=c;}if(JY()===null)Ben=Hk().getContext("2d");b=JY();d=a.f6.width;e=a.f6.height;b.clearRect(0.0,0.0,d,e);b=JY();c=a.f6;d=a.f6.width;e=a.f6.height;b.drawImage(c,0.0,0.0,d,e);b=JY();d=a.f6.width;e=a.f6.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=Bx(f.width,f.height);WO($rt_str(a.f6.src));if(c.byteLength<(g*4
|0)){CM(a.yq,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.yq;c=new Tp;k=f.width;l=f.height;if(g==Bx(k,l)){c.xG=k;c.DI=l;c.Fx=1;c.t6=h;CM(b,c);return;}b=new Ca;Bj(b,B(565));M(b);}
function A7H(a,b){ZD(a,b);}
function QL(){var a=this;D.call(a);a.EB=null;a.Fi=null;}
function AJT(a,b){WO($rt_str(a.EB.src));CM(a.Fi,null);}
function A7T(a,b){AJT(a,b);}
function Iv(){Nj.call(this);}
function Bk_(a,b,c){var d=new Iv();Uk(d,a,b,c);return d;}
function Uk(a,b,c,d){K7(a,b);a.bh=c;a.cy=d;}
function AGr(a){var b,c;if(a.bh<a.cy){b=a.bh;a.bh=b+1|0;return a.yJ(b);}c=new Gs;O(c);M(c);}
function KQ(a,b){var c,d;if(a.m4()){c=new FS;O(c);M(c);}if(a.bh<a.cy){d=a.bh;a.bh=d+1|0;a.vh(d,b);return a;}c=new Ha;O(c);M(c);}
function Q_(a,b){var c,d;if(b>=0&&b<a.cy)return AOY(a,b);c=new BQ;d=new T;V(d);Bj(c,U(H(Be(H(Be(H(d,B(274)),b),B(244)),a.cy),B(27))));M(c);}
function ARe(a,b,c){var d,e;if(a.m4()){d=new FS;O(d);M(d);}if(b>=0&&b<a.cy){ANV(a,b,c);return a;}e=new BQ;d=new T;V(d);Bj(e,U(H(Be(H(Be(H(d,B(274)),b),B(244)),a.cy),B(27))));M(e);}
function AX_(a){return a.m4();}
function U2(){var a=this;Iv.call(a);a.BL=0;a.x_=0;a.w4=null;}
function AOY(a,b){return a.w4.data[b+a.x_|0];}
function ANV(a,b,c){a.w4.data[b+a.x_|0]=c;}
function AS7(a){return a.BL;}
function Wa(){D.call(this);this.js=null;}
function V8(){var a=this;D.call(a);a.i3=null;a.xA=0;}
function Xp(){D.call(this);this.kD=null;}
function Jr(){B8.call(this);}
function Bla(){var a=new Jr();AYw(a);return a;}
function AYw(a){O(a);}
function UR(){var a=this;CT.call(a);a.AP=null;a.AO=null;a.qy=null;a.EJ=null;}
function ADu(a){DH(a.bH);S(a.bH,Dk(0,(a.bn/2|0)-100|0,(a.bE/4|0)+72|0,B(566)));DH(a.qy);DE(a.qy,AQQ(a.b1,a.AO));}
function AOQ(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cn)return;b=a.I;c=a.EJ;$p=1;case 1:AD8(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AMN(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABs(a);if(C()){break _;}DF(a,a.b1,a.AP,a.bn/2|0,70,16777215);e=90;f=Jn(a.qy);while(KR(f)){g=La(f);DF(a,a.b1,g,a.bn/2|0,e,16777215);e=e+9|0;}$p=2;case 2:AFT(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function FS(){Jr.call(this);}
function Blb(){var a=new FS();A62(a);return a;}
function A62(a){O(a);}
function Ha(){B8.call(this);}
function Blc(){var a=new Ha();A59(a);return a;}
function A59(a){O(a);}
function Gs(){B8.call(this);}
function Bld(){var a=new Gs();A1X(a);return a;}
function A1X(a){O(a);}
function TG(){var a=this;D.call(a);a.zb=null;a.Dz=null;a.vW=0;a.rP=0;}
function AAL(a){return Fl(a.zb);}
function Oj(a,b){return Ct(a.Dz)<b?0:1;}
function A54(a,b){a.vW=b;}
function A_4(a,b){a.rP=b;}
function ACx(){var a=this;D.call(a);a.yQ=null;a.oH=0;}
function RH(){CT.call(this);}
function Ble(){var a=new RH();A64(a);return a;}
function A64(a){DQ(a);}
function MD(){CT.call(this);}
function Blf(){var a=new MD();A$g(a);return a;}
function A$g(a){DQ(a);}
function AOz(a){DH(a.bH);S(a.bH,Dk(1,(a.bn/2|0)-100|0,(a.bE/4|0)+72|0,B(567)));S(a.bH,Dk(2,(a.bn/2|0)-100|0,(a.bE/4|0)+96|0,B(568)));if(a.I.k2===null)Z(a.bH,1).gI=0;}
function AMx(a,b,c){return;}
function AOJ(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cn==1){c=a.I;$p=1;continue _;}if(b.cn!=2)return;b=a.I;c=null;$p=3;continue _;case 1:ASN(c);if(C()){break _;}c=a.I;d=null;$p=2;case 2:AD8(c,d);if(C()){break _;}if(b.cn!=2)return;b=a.I;c=null;$p=3;case 3:ABW(b,c);if(C()){break _;}b=a.I;c=L5();$p=4;case 4:AD8(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function APB(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:K1(a,0,0,a.bn,a.bE,1615855616,(-1602211792));B1();Cw(2.0,2.0,2.0);DF(a,a.b1,B(569),(a.bn/2|0)/2|0,30,16777215);BE();e=a.b1;f=new T;V(f);DF(a,e,U(Be(H(f,B(570)),a.I.f.k7)),a.bn/2|0,100,16777215);$p=1;case 1:AFT(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A65(a){return 0;}
function C1(){var a=this;C5.call(a);a.e7=0;a.BE=0.0;a.BF=0.0;a.dp=0;a.cw=0;a.dq=0.0;a.m_=0.0;a.h3=0.0;a.ii=0.0;a.iu=0.0;}
var BkZ=0.0;var Bk0=0.0;var Bk1=0.0;function Blg(a,b,c,d,e,f,g){var h=new C1();FB(h,a,b,c,d,e,f,g);return h;}
function FB(a,b,c,d,e,f,g,h){var i,j;FA(a,b);a.dp=0;a.cw=0;D1(a,0.20000000298023224,0.20000000298023224);a.c4=a.eN/2.0;CU(a,c,d,e);a.iu=1.0;a.ii=1.0;a.h3=1.0;a.g=f+(BR()*2.0-1.0)*0.4000000059604645;a.i=g+(BR()*2.0-1.0)*0.4000000059604645;a.h=h+(BR()*2.0-1.0)*0.4000000059604645;i=(BR()+BR()+1.0)*0.15000000596046448;j=Cg(a.g*a.g+a.i*a.i+a.h*a.h);c=a.g;d=j;c=c/d;e=i;a.g=c*e*0.4000000059604645;a.i=a.i/d*e*0.4000000059604645+0.10000000149011612;a.h=a.h/d*e*0.4000000059604645;a.BE=N(a.n)*3.0;a.BF=N(a.n)*3.0;a.dq=
(N(a.n)*0.5+0.5)*2.0;a.cw=4.0/(N(a.n)*0.8999999761581421+0.10000000149011612)|0;a.dp=0;a.ja=0;}
function APF(a,b){var c,d;c=a.g;d=b;a.g=c*d;a.i=(a.i-0.10000000149011612)*d+0.10000000149011612;a.h=a.h*d;return a;}
function Yk(a,b){var c;c=0.20000000298023224*b;D1(a,c,c);a.dq=a.dq*b;return a;}
function ALB(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cS=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=2;continue _;}a.i=a.i-0.04*a.m_;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARU(a,c,d,e);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cd(a);if(C()){break _;}a.i=a.i-0.04*a.m_;c=a.g;d=a.i;e=
a.h;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ANG(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.e7%16|0)/16.0;j=i+0.062437500804662704;k=(a.e7/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.dq;n=a.bT;o=a.d-a.bT;p
=c;q=n+o*p-BkZ;r=a.cS+(a.j-a.cS)*p-Bk0;s=a.bS+(a.e-a.bS)*p-Bk1;$p=1;case 1:$z=a.vu(c);if(C()){break _;}t=$z;Cr(b,a.h3*t,a.ii*t,a.iu*t);u=d*m;t=q-u;v=g*m;n=t-v;c=e*m;o=r-c;d=f*m;e=s-d;f=h*m;w=e-f;p=i;x=l;G(b,n,o,w,p,x);n=t+v;w=r+c;y=e+f;z=k;G(b,n,w,y,p,z);c=q+u;n=c+v;d=s+d;p=d+f;y=j;G(b,n,w,p,y,z);G(b,c-v,o,d-f,y,x);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function A8e(a){return 0;}
function ABa(){var a=this;CT.call(a);a.tC=0;a.ok=0;}
function BcD(){var a=new ABa();AWu(a);return a;}
function AWu(a){DQ(a);a.tC=0;a.ok=0;}
function ARr(a){a.tC=0;DH(a.bH);S(a.bH,Dk(1,(a.bn/2|0)-100|0,(a.bE/4|0)+48|0,B(571)));S(a.bH,Dk(4,(a.bn/2|0)-100|0,(a.bE/4|0)+24|0,B(572)));S(a.bH,Dk(0,(a.bn/2|0)-100|0,(a.bE/4|0)+96|0,B(503)));}
function ADA(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cn){c=a.I;d=AI2(a,a.I.k);$p=1;continue _;}if(b.cn==1){c=a.I;d=null;$p=2;continue _;}if(b.cn!=4)return;b=a.I;c=null;$p=4;continue _;case 1:AD8(c,d);if(C()){break _;}if(b.cn==1){c=a.I;d=null;$p=2;continue _;}if(b.cn!=4)return;b=a.I;c=null;$p=4;continue _;case 2:ABW(c,d);if(C()){break _;}c=a.I;d=L5();$p=3;case 3:AD8(c,d);if(C()){break _;}if(b.cn!=4)return;b=a.I;c=null;$p
=4;case 4:AD8(b,c);if(C()){break _;}b=a.I;$p=5;case 5:AFy(b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function A2x(a){a.ok=a.ok+1|0;}
function ADZ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABs(a);if(C()){break _;}e=a.I.A;f=a.tC;a.tC=f+1|0;$p=2;case 2:$z=AAY(e,f);if(C()){break _;}f=$z;f=f?0:1;if(!(!f&&a.ok>=20)){g=255.0*(Bp(((a.ok%10|0)+d)/10.0*3.1415927410125732*2.0)*0.20000000298023224+0.800000011920929)|0;Cz(a.b1,B(573),8,a.bE-16|0,g<<16|g<<8|g);}DF(a,a.b1,B(574),a.bn/2|0,40,16777215);$p=3;case 3:AFT(a,b,c,d);if
(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function LR(){var a=this;D.call(a);a.bb=null;a.V=null;a.U=null;a.X=null;}
function Blh(){var a=new LR();AHI(a);return a;}
function AHI(a){a.bb=$rt_createFloatMultiArray([16,16]);a.V=$rt_createFloatArray(16);a.U=$rt_createFloatArray(16);a.X=$rt_createFloatArray(16);}
function AR3(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.bb.data[h].data[0]*b+a.bb.data[h].data[1]*c+a.bb.data[h].data[2]*d+a.bb.data[h].data[3]<=0.0&&a.bb.data[h].data[0]*e+a.bb.data[h].data[1]*c+a.bb.data[h].data[2]*d+a.bb.data[h].data[3]<=0.0&&a.bb.data[h].data[0]*b+a.bb.data[h].data[1]*f+a.bb.data[h].data[2]*d+a.bb.data[h].data[3]<=0.0&&a.bb.data[h].data[0]*e+a.bb.data[h].data[1]*f+a.bb.data[h].data[2]*d+a.bb.data[h].data[3]<=0.0&&a.bb.data[h].data[0]*b+a.bb.data[h].data[1]*c+a.bb.data[h].data[2]*g+a.bb.data[h].data[3]
<=0.0&&a.bb.data[h].data[0]*e+a.bb.data[h].data[1]*c+a.bb.data[h].data[2]*g+a.bb.data[h].data[3]<=0.0&&a.bb.data[h].data[0]*b+a.bb.data[h].data[1]*f+a.bb.data[h].data[2]*g+a.bb.data[h].data[3]<=0.0&&a.bb.data[h].data[0]*e+a.bb.data[h].data[1]*f+a.bb.data[h].data[2]*g+a.bb.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function WM(){var a=this;LR.call(a);a.oY=null;a.n8=null;a.zQ=null;}
var Bli=null;function Ba5(){var a=new WM();AFJ(a);return a;}
function AFJ(a){AHI(a);a.oY=H0(16);a.n8=H0(16);a.zQ=H0(16);}
function R2(){AJ5(Bli);return Bli;}
function GW(a,b,c){var d,e;b=b.data;d=En(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AJ5(a){L_(a.oY);L_(a.n8);L_(a.zQ);TZ(2983,a.oY);TZ(2982,a.n8);Qk(TV(a.oY),16);VS(a.oY,a.V);Qk(TV(a.n8),16);VS(a.n8,a.U);a.X.data[0]=a.U.data[0]*a.V.data[0]+a.U.data[1]*a.V.data[4]+a.U.data[2]*a.V.data[8]+a.U.data[3]*a.V.data[12];a.X.data[1]=a.U.data[0]*a.V.data[1]+a.U.data[1]*a.V.data[5]+a.U.data[2]*a.V.data[9]+a.U.data[3]*a.V.data[13];a.X.data[2]=a.U.data[0]*a.V.data[2]+a.U.data[1]*a.V.data[6]+a.U.data[2]*a.V.data[10]+a.U.data[3]*a.V.data[14];a.X.data[3]=a.U.data[0]*a.V.data[3]+a.U.data[1]*a.V.data[7]
+a.U.data[2]*a.V.data[11]+a.U.data[3]*a.V.data[15];a.X.data[4]=a.U.data[4]*a.V.data[0]+a.U.data[5]*a.V.data[4]+a.U.data[6]*a.V.data[8]+a.U.data[7]*a.V.data[12];a.X.data[5]=a.U.data[4]*a.V.data[1]+a.U.data[5]*a.V.data[5]+a.U.data[6]*a.V.data[9]+a.U.data[7]*a.V.data[13];a.X.data[6]=a.U.data[4]*a.V.data[2]+a.U.data[5]*a.V.data[6]+a.U.data[6]*a.V.data[10]+a.U.data[7]*a.V.data[14];a.X.data[7]=a.U.data[4]*a.V.data[3]+a.U.data[5]*a.V.data[7]+a.U.data[6]*a.V.data[11]+a.U.data[7]*a.V.data[15];a.X.data[8]=a.U.data[8]
*a.V.data[0]+a.U.data[9]*a.V.data[4]+a.U.data[10]*a.V.data[8]+a.U.data[11]*a.V.data[12];a.X.data[9]=a.U.data[8]*a.V.data[1]+a.U.data[9]*a.V.data[5]+a.U.data[10]*a.V.data[9]+a.U.data[11]*a.V.data[13];a.X.data[10]=a.U.data[8]*a.V.data[2]+a.U.data[9]*a.V.data[6]+a.U.data[10]*a.V.data[10]+a.U.data[11]*a.V.data[14];a.X.data[11]=a.U.data[8]*a.V.data[3]+a.U.data[9]*a.V.data[7]+a.U.data[10]*a.V.data[11]+a.U.data[11]*a.V.data[15];a.X.data[12]=a.U.data[12]*a.V.data[0]+a.U.data[13]*a.V.data[4]+a.U.data[14]*a.V.data[8]
+a.U.data[15]*a.V.data[12];a.X.data[13]=a.U.data[12]*a.V.data[1]+a.U.data[13]*a.V.data[5]+a.U.data[14]*a.V.data[9]+a.U.data[15]*a.V.data[13];a.X.data[14]=a.U.data[12]*a.V.data[2]+a.U.data[13]*a.V.data[6]+a.U.data[14]*a.V.data[10]+a.U.data[15]*a.V.data[14];a.X.data[15]=a.U.data[12]*a.V.data[3]+a.U.data[13]*a.V.data[7]+a.U.data[14]*a.V.data[11]+a.U.data[15]*a.V.data[15];a.bb.data[0].data[0]=a.X.data[3]-a.X.data[0];a.bb.data[0].data[1]=a.X.data[7]-a.X.data[4];a.bb.data[0].data[2]=a.X.data[11]-a.X.data[8];a.bb.data[0].data[3]
=a.X.data[15]-a.X.data[12];GW(a,a.bb,0);a.bb.data[1].data[0]=a.X.data[3]+a.X.data[0];a.bb.data[1].data[1]=a.X.data[7]+a.X.data[4];a.bb.data[1].data[2]=a.X.data[11]+a.X.data[8];a.bb.data[1].data[3]=a.X.data[15]+a.X.data[12];GW(a,a.bb,1);a.bb.data[2].data[0]=a.X.data[3]+a.X.data[1];a.bb.data[2].data[1]=a.X.data[7]+a.X.data[5];a.bb.data[2].data[2]=a.X.data[11]+a.X.data[9];a.bb.data[2].data[3]=a.X.data[15]+a.X.data[13];GW(a,a.bb,2);a.bb.data[3].data[0]=a.X.data[3]-a.X.data[1];a.bb.data[3].data[1]=a.X.data[7]-a.X.data[5];a.bb.data[3].data[2]
=a.X.data[11]-a.X.data[9];a.bb.data[3].data[3]=a.X.data[15]-a.X.data[13];GW(a,a.bb,3);a.bb.data[4].data[0]=a.X.data[3]-a.X.data[2];a.bb.data[4].data[1]=a.X.data[7]-a.X.data[6];a.bb.data[4].data[2]=a.X.data[11]-a.X.data[10];a.bb.data[4].data[3]=a.X.data[15]-a.X.data[14];GW(a,a.bb,4);a.bb.data[5].data[0]=a.X.data[3]+a.X.data[2];a.bb.data[5].data[1]=a.X.data[7]+a.X.data[6];a.bb.data[5].data[2]=a.X.data[11]+a.X.data[10];a.bb.data[5].data[3]=a.X.data[15]+a.X.data[14];GW(a,a.bb,5);}
function AHl(){Bli=Ba5();}
function Rd(){}
function AF8(){var a=this;D.call(a);a.Dm=null;a.vM=0.0;a.we=0.0;a.wu=0.0;}
function BbL(){var a=new AF8();A9n(a);return a;}
function A9n(a){a.Dm=R2();}
function AOw(a,b,c,d){a.vM=b;a.we=c;a.wu=d;}
function AAu(a,b,c,d,e,f,g){var h,i;h=b-a.vM;i=c-a.we;b=d-a.wu;d=e-a.vM;e=f-a.we;c=g-a.wu;return AR3(a.Dm,h,i,b,d,e,c);}
function MZ(a,b){return AAu(a,b.Y,b.Q,b.Z,b.bl,b.bj,b.bm);}
function Pd(){D.call(this);}
var Blj=null;function Blk(){var a=new Pd();ALv(a);return a;}
function ALv(a){return;}
function DS(){Bc(2896);Bc(16384);Bc(16385);Bc(2903);}
function Hw(){var b;Ba(2896);Ba(16384);Ba(16385);Ba(2903);b=CD(BY(0.699999988079071,1.0,(-0.20000000298023224)));RS(b.x,b.z,b.w,0.0);Fq(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fq(0.0,0.0,0.0,1.0);Fq(0.0,0.0,0.0,1.0);b=CD(BY((-0.699999988079071),1.0,0.20000000298023224));RS(b.x,b.z,b.w,0.0);Fq(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fq(0.0,0.0,0.0,1.0);Fq(0.0,0.0,0.0,1.0);Fq(0.4000000059604645,0.4000000059604645,0.4000000059604645,1.0);}
function RS(b,c,d,e){return Fq(b,c,d,e);}
function Fq(b,c,d,e){EA(Blj);CK(CK(CK(CK(Blj,b),c),d),e);Gu(Blj);return Blj;}
function ASy(){Blj=H0(16);}
function Ig(){var a=this;D.call(a);a.Ak=null;a.gv=null;a.nD=null;}
function Bll(a,b,c){var d=new Ig();Ln(d,a,b,c);return d;}
function Ln(a,b,c,d){a.Ak=b;a.gv=c;a.nD=d;}
function A6J(a){return a.gv.gt()+a.nD.gt()|0;}
function A6w(a){return a.Ak;}
function ATo(a,b){return b<a.gv.gt()?a.gv.gD(b):a.nD.gD(b-a.gv.gt()|0);}
function A3x(a,b,c){return b<a.gv.gt()?a.gv.j9(b,c):a.nD.j9(b-a.gv.gt()|0,c);}
function AW9(a,b,c){if(b<a.gv.gt())a.gv.jF(b,c);else a.nD.jF(b-a.gv.gt()|0,c);}
function A$m(a){return a.gv.f9();}
function YI(a){var b,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gv;$p=1;case 1:b.km();if(C()){break _;}b=a.nD;$p=2;case 2:b.km();if(C()){break _;}return;default:E_();}}C3().s(a,b,$p);}
function ZT(){C1.call(this);}
function AZj(a,b,c,d,e,f,g,h){var i=new ZT();A1u(i,a,b,c,d,e,f,g,h);return i;}
function A1u(a,b,c,d,e,f,g,h,i){FB(a,b,c,d,e,f,g,h);a.e7=i.W;a.m_=i.EO;a.iu=0.6000000238418579;a.ii=0.6000000238418579;a.h3=0.6000000238418579;a.dq=a.dq/2.0;}
function ATW(a){return 1;}
function YV(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=((a.e7%16|0)+a.BE/4.0)/16.0;j=i+0.015609375201165676;k=((a.e7/16|0)+a.BF/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.dq;n
=a.bT;o=a.d-a.bT;p=c;q=n+o*p-BkZ;r=a.cS+(a.j-a.cS)*p-Bk0;s=a.bS+(a.e-a.bS)*p-Bk1;$p=1;case 1:$z=ADV(a,c);if(C()){break _;}t=$z;Cr(b,t*a.h3,t*a.ii,t*a.iu);t=d*m;u=q-t;g=g*m;v=u-g;w=e*m;o=r-w;c=f*m;d=s-c;e=h*m;n=d-e;x=i;p=l;G(b,v,o,n,x,p);n=u+g;v=r+w;y=d+e;z=k;G(b,n,v,y,x,z);d=q+t;n=d+g;c=s+c;x=c+e;y=j;G(b,n,v,x,y,z);G(b,d-g,o,c-e,y,p);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function K_(){B8.call(this);}
function Blm(){var a=new K_();A2F(a);return a;}
function A2F(a){O(a);}
function JV(){C1.call(this);}
function Bln(a,b,c,d){var e=new JV();TW(e,a,b,c,d);return e;}
function TW(a,b,c,d,e){FB(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.30000001192092896;a.i=BR()*0.20000000298023224+0.10000000149011612;a.h=a.h*0.30000001192092896;a.h3=1.0;a.ii=1.0;a.iu=1.0;a.e7=16;D1(a,0.009999999776482582,0.009999999776482582);a.m_=0.05999999865889549;a.cw=8.0/(BR()*0.8+0.2)|0;}
function AK1(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANG(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AOL(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cS=a.j;a.bS=a.e;a.i=a.i-a.m_;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARU(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=a.cw;a.cw=e-1|0;if(e<=0){$p=2;continue _;}if(a.cx){if(BR()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.m;e
=K(a.d);g=K(a.j);h=K(a.e);$p=3;continue _;case 2:Cd(a);if(C()){break _;}if(a.cx){if(BR()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.m;e=K(a.d);g=K(a.j);h=K(a.e);$p=3;case 3:$z=ACa(f,e,g,h);if(C()){break _;}f=$z;if(!f.nI()&&!f.dt())return;i=K(a.j)+1|0;f=a.m;e=K(a.d);g=K(a.j);h=K(a.e);$p=4;case 4:$z=AEX(f,e,g,h);if(C()){break _;}e=$z;b=i-Jz(e);if(a.j>=b)return;$p=6;continue _;case 5:Cd(a);if(C()){break _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;f=a.m;e=K(a.d);g=
K(a.j);h=K(a.e);$p=3;continue _;case 6:Cd(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function IN(){var a=this;Iv.call(a);a.eq=null;a.Az=0;a.ed=0;}
function Blo(a,b,c,d,e,f){var g=new IN();OW(g,a,b,c,d,e,f);return g;}
function OW(a,b,c,d,e,f,g){Uk(a,c,e,f);a.ed=b;a.eq=d;a.Az=g;}
function AX4(a){return a.Az;}
function Pn(){IN.call(this);}
function AWs(a,b){var c,d;c=a.eq.cr.data;d=a.ed;b=b*4|0;return c[d+b|0]&255|(a.eq.cr.data[(a.ed+b|0)+1|0]&255)<<8|(a.eq.cr.data[(a.ed+b|0)+2|0]&255)<<16|(a.eq.cr.data[(a.ed+b|0)+3|0]&255)<<24;}
function AS6(a,b,c){var d,e;d=a.eq.cr.data;e=a.ed;b=b*4|0;d[e+b|0]=c<<24>>24;a.eq.cr.data[(a.ed+b|0)+1|0]=c>>8<<24>>24;a.eq.cr.data[(a.ed+b|0)+2|0]=c>>16<<24>>24;a.eq.cr.data[(a.ed+b|0)+3|0]=c>>24<<24>>24;}
function VU(){IN.call(this);}
function A08(a,b){var c,d;c=a.eq.cr.data;d=a.ed;b=b*4|0;return (c[d+b|0]&255)<<24|(a.eq.cr.data[(a.ed+b|0)+1|0]&255)<<16|(a.eq.cr.data[(a.ed+b|0)+2|0]&255)<<8|a.eq.cr.data[(a.ed+b|0)+3|0]&255;}
function ATZ(a,b,c){var d,e;d=a.eq.cr.data;e=a.ed;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.eq.cr.data[(a.ed+b|0)+1|0]=c>>16<<24>>24;a.eq.cr.data[(a.ed+b|0)+2|0]=c>>8<<24>>24;a.eq.cr.data[(a.ed+b|0)+3|0]=c<<24>>24;}
function AK9(){D.call(this);this.wn=null;}
function AYZ(a){var b=new AK9();A8b(b,a);return b;}
function A8b(a,b){a.wn=b;}
function ZY(a,b,c){return G4(b,a.wn)>=G4(c,a.wn)?1:(-1);}
function A1p(a,b,c){return ZY(a,b,c);}
function Wf(){D.call(this);this.yv=null;}
function APV(a,b,c){var d,e;d=b.ek;e=c.ek;return d&&!e?1:e&&!d?(-1):G4(b,a.yv)>=G4(c,a.yv)?(-1):1;}
function A9U(a,b,c){return APV(a,b,c);}
function Hq(){D.call(this);}
var Blp=null;var Blq=null;var Blr=null;var Bls=null;var Blt=null;function Blu(){var a=new Hq();AAx(a);return a;}
function AAx(a){return;}
function RK(b,c){var d,e,f;if(c===null)c=Bls;d=J(D,b.p);UN(b,d);P7(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;Rk(b,e,f[e]);e=e+1|0;}}
function AOp(){Blp=new Sh;Blq=new Sg;Blr=new Si;Bls=new WR;Blt=new WP;}
function HV(){var a=this;D.call(a);a.mQ=null;a.yy=null;a.DA=null;a.CO=null;a.HZ=null;a.GM=0.0;a.F7=0.0;a.Fq=0.0;a.Fp=0.0;a.Fo=0.0;}
var BkE=null;var BkW=0.0;var BkX=0.0;var BkY=0.0;function Bca(){var a=new HV();ADm(a);return a;}
function ADm(a){var b;a.mQ=De();BT(a.mQ,F(Jj),Bcy());BT(a.mQ,F(NO),BbM());b=Nx(Ir(a.mQ));while(F$(b)){Mx(b).re=a;}}
function VC(a,b){var c;c=CQ(a.mQ,b);if(c===null&&b!==F(D$)){c=VC(a,JO(b));BT(a.mQ,b,c);}return c;}
function AIw(a,b){return Wx(a,b)===null?0:1;}
function Wx(a,b){return VC(a,Dm(b));}
function ARw(a,b,c,d,e,f){var g,h,i;a.CO=b;a.DA=c;a.HZ=e;a.yy=d;a.GM=e.O+(e.v-e.O)*f;a.F7=e.R+(e.J-e.R)*f;g=e.cd;h=e.d-e.cd;i=f;a.Fq=g+h*i;a.Fp=e.b0+(e.j-e.b0)*i;a.Fo=e.ce+(e.e-e.ce)*i;}
function Y8(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(ALe(b,a.Fq,a.Fp,a.Fo)>=4096.0)return;d=a.CO;e=b.dI;f=b.dF;g=b.dO;$p=1;case 1:$z=ANu(d,e,f,g);if(C()){break _;}h=$z;F5(h,h,h);i=b.dI-BkW;j=b.dF-BkX;k=b.dO-BkY;$p=2;case 2:AFD(a,b,i,j,k,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFD(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=Wx(a,b);if(g===null)return;$p=1;case 1:g.C_(b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function A_5(a){return a.yy;}
function ALY(){BkE=Bca();}
function HX(){var a=this;D.call(a);a.dR=null;a.FU=null;a.t5=null;a.n7=null;a.Ia=null;a.rs=0.0;a.G1=0.0;a.F3=null;a.Em=0.0;a.El=0.0;a.Ek=0.0;}
var BgB=null;var BkT=0.0;var BkU=0.0;var BkV=0.0;function Baw(){var a=new HX();AGL(a);return a;}
function AGL(a){var b,c,d,e,f;a.dR=De();BT(a.dR,F(Ky),Baa());b=a.dR;c=new Ue;d=Bc0();e=new P4;Le(e,6,0.5);Gq(c,d,0.699999988079071);c.kl=e;BT(b,F(IB),c);d=a.dR;f=new TM;c=Bcx();e=Bb8();Gq(f,c,0.699999988079071);f.kl=e;BT(d,F(KW),f);BT(a.dR,F(J5),Bcm());BT(a.dR,F(Jq),AYx(BcL(),0.5));d=a.dR;f=new DJ;c=new HP;KV(c);Gq(f,c,0.5);BT(d,F(I7),f);BT(a.dR,F(Jy),Bby());d=a.dR;f=new Uh;c=new HP;KV(c);Gq(f,c,3.0);f.tB=6.0;BT(d,F(Ls),f);BT(a.dR,F(EQ),AYx(A_a(),0.5));d=a.dR;f=new TT;EH(f);BT(d,F(C5),f);BT(a.dR,F(IF),Bb6());d
=a.dR;f=new RG;EH(f);BT(d,F(Jw),f);BT(a.dR,F(E$),X_());BT(a.dR,F(MH),BaC());BT(a.dR,F(JT),Bau());BT(a.dR,F(Gf),Bci());d=Nx(Ir(a.dR));while(F$(d)){Mx(d).iG=a;}}
function Xa(a,b){var c;c=CQ(a.dR,b);if(c===null&&b!==F(C5)){c=Xa(a,JO(b));BT(a.dR,b,c);}return c;}
function Sj(a,b){return Xa(a,Dm(b));}
function AHr(a,b,c,d,e,f,g){var h,i,j;a.n7=b;a.t5=c;a.F3=f;a.Ia=e;a.FU=d;a.rs=e.O+(e.v-e.O)*g;a.G1=e.R+(e.J-e.R)*g;h=e.cd;i=e.d-e.cd;j=g;a.Em=h+i*j;a.El=e.b0+(e.j-e.b0)*j;a.Ek=e.ce+(e.e-e.ce)*j;}
function ANl(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.cd;e=b.d-b.cd;f=c;e=d+e*f;d=b.b0+(b.j-b.b0)*f;g=b.ce+(b.e-b.ce)*f;h=b.O+(b.v-b.O)*c;$p=1;case 1:$z=b.vu(c);if(C()){break _;}i=$z;F5(i,i,i);e=e-BkT;d=d-BkU;f=g-BkV;$p=2;case 2:AQS(a,b,e,d,f,h,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AQS(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Sj(a,b);if(h===null)return;$p=1;case 1:h.iT(b,c,d,e,f,g);if(C()){break _;}$p=2;case 2:ANw(h,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function A8g(a,b){a.n7=b;}
function AJ8(a,b,c,d){var e,f,g;e=b-a.Em;f=c-a.El;g=d-a.Ek;return e*e+f*f+g*g;}
function AKJ(){BgB=Baw();}
function Nv(){D.call(this);}
var Blv=null;var Blw=null;function Blx(){var a=new Nv();ASh(a);return a;}
function ASh(a){return;}
function Vs(b){var c;c=0;while(true){if(c>=Blv.data.length)return (-1);if(b==Blv.data[c])break;c=c+1|0;}return c;}
function APo(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;Blv=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;Blw=b;}
function J8(){B8.call(this);}
function Bly(){var a=new J8();A72(a);return a;}
function A72(a){O(a);}
function V2(){var a=this;D.call(a);a.eF=0;a.e0=0;a.eG=0;}
function CO(a,b,c){var d=new V2();AWX(d,a,b,c);return d;}
function AWX(a,b,c,d){a.eF=b;a.e0=c;a.eG=d;}
function A6E(a,b){var c;if(!(b instanceof V2))return 0;c=b;return c.eF==a.eF&&c.e0==a.e0&&c.eG==a.eG?1:0;}
function A1J(a){return (Bx(a.eF,8976890)+Bx(a.e0,981131)|0)+a.eG|0;}
function OF(){Fb.call(this);}
var Blz=0.0;var BlA=null;function ARy(b){return $rt_floatToIntBits(b);}
function AEz(){Blz=NaN;BlA=F($rt_floatcls());}
function Hj(){D.call(this);}
var BdB=null;var BdD=null;var BdE=null;var BdC=null;var BdA=null;function BlB(){var a=new Hj();AQX(a);return a;}
function AQX(a){return;}
function AMX(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;BdB=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);BdD=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);BdE=b;BdC=new Wd;BdA=new Sf;}
function Nw(){D.call(this);}
var BlC=null;var BlD=null;function BlE(){var a=new Nw();AKA(a);return a;}
function AKA(a){return;}
function AOq(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.zC=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.uH=0;c.um=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AOF(BlD,f);if(h<0)h= -h-2|0;i=9+(f-BlD.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(BlC.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-BlD.data[h]|0)|0;k=Long_shru(Long_mul(j,Long_fromInt(BlC.data[h])),
32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?BlC.data[h]>>>g:BlC.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=R(o,p);e=e>0?Bx(k/o|0,o):e<0?Bx(k/p|0,p)+p|0:Bx((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.uH=e;c.um=h-50|0;}
function ALp(){var b,c,d,e,f,g,h,i;BlC=$rt_createIntArray(100);BlD=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=BlC.data;g=d+50|0;f[g]=$rt_udiv(e,20);BlD.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=BlC.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);BlD.data[i]=c;d=d+1|0;}}
function Sf(){var a=this;D.call(a);a.uH=0;a.um=0;a.zC=0;}
function BlF(){var a=new Sf();AS4(a);return a;}
function AS4(a){return;}
function DJ(){var a=this;Dh.call(a);a.mJ=null;a.kl=null;}
function AYx(a,b){var c=new DJ();Gq(c,a,b);return c;}
function Gq(a,b,c){EH(a);a.mJ=b;a.mc=c;}
function A$J(a,b){a.kl=b;}
function AAn(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();Bc(2884);try{h=b.e9+(b.dD-b.e9)*g;i=b.O+(b.v-b.O)*g;j=b.R+(b.J-b.R)*g;Bu(c,d,e);k=b.oU+g;Bw(180.0-h,0.0,1.0,0.0);if(b.c2>0){f=En((b.c2
+g-1.0)/20.0*1.600000023841858);if(f>1.0)f=1.0;Bw(f*a.CX(b),0.0,0.0,1.0);}l=0.0625;Ba(32826);Cw((-1.0),(-1.0),1.0);a.xu(b,g);Bu(0.0,(-1.5078125),0.0);m=b.jX+(b.ci-b.jX)*g;n=b.gu-b.ci*(1.0-g);if(m>1.0)m=1.0;o=b.tP;p=PV(b);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){o=$$je;}else{throw $$e;}}Ce(o);Ba(2884);BE();return;case 1:try{APD(a,o,p);if(C()){break _;}Ba(3008);o=a.mJ;f=i-h;o.hK(n,m,k,f,j,l);q=0;if(q>=4){$p=2;continue _;}$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){o=
$$je;}else{throw $$e;}}Ce(o);Ba(2884);BE();return;case 2:a:{try{$z=ADV(b,g);if(C()){break _;}r=$z;s=a.C0(b,r,g);q=s>>24&255;if(!(q<=0&&b.dC<=0&&b.c2<=0)){Bc(3553);Bc(3008);Ba(3042);Dg(770,771);HI(514);if(!(b.dC<=0&&b.c2<=0)){BW(r,0.0,0.0,0.4000000059604645);a.mJ.hK(n,m,k,f,j,l);t=0;if(t<4){$p=4;continue _;}}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BW(u,v,w,x);a.mJ.hK(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HI(515);Bc(3042);Ba(3008);Ba(3553);}Bc(32826);break a;}catch($$e){$$je
=Bh($$e);if($$je instanceof BF){o=$$je;}else{throw $$e;}}Ce(o);}Ba(2884);BE();return;case 3:try{$z=a.k9(b,q);if(C()){break _;}s=$z;if(s){a.kl.hK(n,m,k,f,j,l);Bc(3042);Ba(3008);}q=q+1|0;if(q>=4){$p=2;continue _;}continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){o=$$je;}else{throw $$e;}}Ce(o);Ba(2884);BE();return;case 4:a:{try{$z=a.k9(b,t);if(C()){break _;}y=$z;if(y){BW(r,0.0,0.0,0.4000000059604645);a.kl.hK(n,m,k,f,j,l);}t=t+1|0;if(t<4){continue _;}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&
255)/255.0;x=q/255.0;BW(u,v,w,x);a.mJ.hK(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HI(515);Bc(3042);Ba(3008);Ba(3553);Bc(32826);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){o=$$je;}else{throw $$e;}}Ce(o);}Ba(2884);BE();return;case 5:a:{try{$z=a.k9(b,y);if(C()){break _;}s=$z;if(s){BW(u,v,w,x);a.kl.hK(n,m,k,f,j,l);}y=y+1|0;if(y>=4){HI(515);Bc(3042);Ba(3008);Ba(3553);Bc(32826);break a;}continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){o=$$je;}else{throw $$e;}}Ce(o);}Ba(2884);BE();return;default:
E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function AP6(a,b,c){return 0;}
function A5y(a,b){return 90.0;}
function A6N(a,b,c,d){return 0;}
function A9q(a,b,c){return;}
function AO_(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.Ih(b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function OX(){var a=this;DJ.call(a);a.Bf=null;a.Aq=null;a.CK=null;}
var BlG=null;function Bby(){var a=new OX();AIo(a);return a;}
function AIo(a){Gq(a,XC(0.0),0.5);a.Bf=a.mJ;a.Aq=XC(1.0);a.CK=XC(0.5);}
function ARN(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=AIx(b.K,3-c|0);if(d!==null){e=DL(d);if(e instanceof F2){f=e;b=new T;V(b);b=H(H(H(b,B(575)),BlG.data[f.BV]),B(576));g=R(c,2);b=U(H(Be(b,g?1:2),B(522)));$p=1;continue _;}}return 0;case 1:AKG(a,b);if(C()){break _;}h=g?a.Aq:a.CK;h.i2.iV=c?0:1;h.lb.iV=c?0:1;b=h.pj;i=R(c,1);b.iV=i&&g?0:1;h.dY.iV=i?0:1;h.dL.iV=i?0:1;h.jb.iV
=g&&c!=3?0:1;h.hg.iV=g&&c!=3?0:1;a.kl=h;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AD0(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-b.c4;$p=1;case 1:AAn(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ALM(a){Cc(a.Bf.dY,0.0625);}
function Zk(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ARN(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function AMe(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AD0(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ACY(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AD0(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AAr(){var b,c;b=J(B4,5);c=b.data;c[0]=B(239);c[1]=B(577);c[2]=B(578);c[3]=B(579);c[4]=B(580);BlG=b;}
function LS(){var a=this;Ge.call(a);a.hD=0;a.i8=0;a.hW=0;a.h_=0;a.kq=null;a.cn=0;a.gI=0;a.za=0;}
function Dk(a,b,c,d){var e=new LS();A3y(e,a,b,c,d);return e;}
function BlH(a,b,c,d,e,f){var g=new LS();SN(g,a,b,c,d,e,f);return g;}
function A3y(a,b,c,d,e){SN(a,b,c,d,200,20,e);}
function SN(a,b,c,d,e,f,g){Nu(a);a.hD=200;a.i8=20;a.gI=1;a.za=1;a.cn=b;a.hW=c;a.h_=d;a.hD=e;a.i8=f;a.kq=g;}
function AC6(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.za)return;e=b.e$;f=3553;g=b.bo;b=B(513);$p=1;case 1:$z=AHK(g,b);if(C()){break _;}h=$z;Cq(f,h);BW(1.0,1.0,1.0,1.0);h=1;f=c>=a.hW&&d>=a.h_&&c<(a.hW+a.hD|0)&&d<(a.h_+a.i8|0)?1:0;if(!a.gI)h=0;else if(f)h=2;i=a.hW;j=a.h_;h=46+(h*20|0)|0;CI(a,i,j,0,h,a.hD/2|0,a.i8);CI(a,a.hW+(a.hD/2|0)|0,a.h_,200-(a.hD/2|0)|
0,h,a.hD/2|0,a.i8);if(!a.gI)DF(a,e,a.kq,a.hW+(a.hD/2|0)|0,a.h_+((a.i8-8|0)/2|0)|0,(-6250336));else if(!f)DF(a,e,a.kq,a.hW+(a.hD/2|0)|0,a.h_+((a.i8-8|0)/2|0)|0,14737632);else DF(a,e,a.kq,a.hW+(a.hD/2|0)|0,a.h_+((a.i8-8|0)/2|0)|0,16777120);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Sa(a,b,c){return a.gI&&b>=a.hW&&c>=a.h_&&b<(a.hW+a.hD|0)&&c<(a.h_+a.i8|0)?1:0;}
function Mr(){D.call(this);}
function BlI(){var a=new Mr();AV_(a);return a;}
function AV_(a){return;}
function QC(){}
function KE(){var a=this;Mr.call(a);a.z_=null;a.Ic=null;a.vp=0;a.DD=0;a.nj=null;a.vY=null;}
function AEo(a){var b,c,d;a:{b=a.vp;c=a.DD;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6;return d|c&8|b<<2&16|c&32|b>>>8&64|b>>>5&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function ABw(a){return a.nj.o1();}
function WN(a,b){var c,d,e,f,g;if(a.vp&1){c=new Mg;O(c);M(c);}if(a.vY===null){c=new Tj;O(c);M(c);}d=b.data;e=d.length;if(e!=a.nj.data.length){c=new Ca;O(c);M(c);}f=0;while(true){if(f>=e){c=b.data;g=new a.z_.f2();a.vY.call(g,c);return g;}if(!FX(a.nj.data[f])&&d[f]!==null&&!UG(a.nj.data[f],d[f])){c=new Ca;O(c);M(c);}if(FX(a.nj.data[f])&&d[f]===null)break;f=f+1|0;}c=new Ca;O(c);M(c);}
function OE(){}
function QK(){D.call(this);}
function BlJ(){var a=new QK();A_w(a);return a;}
function A_w(a){return;}
function AJI(a){var b,c,d;Bb();BdS.requestPointerLock();b=B9();if(VW())clearTimeout(VW());Nb(0);if(Long_lt(Long_sub(b,P6()),Long_fromInt(3000))){c=new TB;c.Jt=a;d=3000-Long_sub(b,P6()).lo|0;Nb(setTimeout(Cu(c,"onTimer"),d));}}
function A1U(a){AJI(a);}
function WR(){D.call(this);}
function BlK(){var a=new WR();AVD(a);return a;}
function AVD(a){return;}
function A47(a,b,c){return b!==null?b.lR(c): -c.lR(b);}
function WP(){D.call(this);}
function BlL(){var a=new WP();A50(a);return a;}
function A50(a){return;}
function Pa(){D.call(this);this.vg=null;}
function Sh(){Fc.call(this);}
function BlM(){var a=new Sh();A$k(a);return a;}
function A$k(a){return;}
function Sg(){FV.call(this);}
function BlN(){var a=new Sg();A$p(a);return a;}
function A$p(a){return;}
function Si(){Gd.call(this);}
function BlO(){var a=new Si();A3X(a);return a;}
function A3X(a){return;}
function IA(){D.call(this);this.re=null;}
function AKN(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.re.DA;$p=1;case 1:$z=AHK(c,b);if(C()){break _;}d=$z;Ea(c,d);return;default:E_();}}C3().s(a,b,c,d,$p);}
function A07(a,b){a.re=b;}
function ANO(a){return a.re.yy;}
function ABd(){IA.call(this);this.EW=null;}
function Bcy(){var a=new ABd();ATN(a);return a;}
function ATN(a){a.EW=Bb4();}
function ARE(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();Bu(c+0.5,d+0.75,e+0.5);$p=1;case 1:$z=AMs(b);if(C()){break _;}g=$z;Bw( -((g*360|0)/16.0),0.0,1.0,0.0);h=B(581);$p=2;case 2:AKN(a,h);if(C()){break _;}B1();Cw(1.0,(-1.0),(-1.0));ANm(a.EW);BE();Bu(0.0,0.5,0.09000000357627869);Cw(0.01666666753590107,(-0.01666666753590107),0.01666666753590107);Cj(0.0,
0.0,(-0.01666666753590107));h=ANO(a);i=0;while(i<b.gz.data.length){j=b.gz.data[i];if(i!=b.rF)ED(h,j, -Dx(h,j)/2|0,(i*10|0)-(b.gz.data.length*5|0)|0,0);else{k=new T;V(k);j=U(H(H(H(k,B(582)),j),B(583)));ED(h,j, -Dx(h,j)/2|0,(i*10|0)-(b.gz.data.length*5|0)|0,0);}i=i+1|0;}BW(1.0,1.0,1.0,1.0);BE();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function XM(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ARE(a,b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function NO(){var a=this;D$.call(a);a.j2=0;a.jP=null;a.lN=0.0;a.mw=0.0;}
function BcG(){var a=new NO();A8r(a);return a;}
function A8r(a){a.j2=(-1);a.jP=B(584);a.mw=0.0;a.j2=20;}
function ZU(a){return AG1(a.cj.bg,a.dI,a.dF,a.dO)>256.0?0:1;}
function ADf(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mw=a.lN;if(ZU(a)){b=a.dI+N(a.cj.r);c=a.dF+N(a.cj.r);d=a.dO+N(a.cj.r);BX(a.cj,B(256),b,c,d,0.0,0.0,0.0);BX(a.cj,B(257),b,c,d,0.0,0.0,0.0);a.lN=a.lN+1000.0/(a.j2+200.0);while(a.lN>360.0){a.lN=a.lN-360.0;a.mw=a.mw-360.0;}if(a.j2==(-1))N$(a);if(a.j2>0)a.j2
=a.j2-1|0;else{e=4;f=0;if(f<e){g=Jp(a.jP,a.cj);if(g===null)return;h=a.cj;i=Dm(g);j=Dw(Eb(a.dI,a.dF,a.dO,a.dI+1|0,a.dF+1|0,a.dO+1|0),8.0,4.0,8.0);$p=1;continue _;}}}return;case 1:$z=ANr(h,i,j);if(C()){break _;}h=$z;if(h.p>=6){N$(a);return;}k=a.dI+(Cl(a.cj.r)-Cl(a.cj.r))*4.0;l=(a.dF+E(a.cj.r,3)|0)-1|0;m=a.dO+(Cl(a.cj.r)-Cl(a.cj.r))*4.0;KG(g,k,l,m,N(a.cj.r)*360.0,0.0);$p=2;case 2:$z=g.u1(k,l,m);if(C()){break _;}n=$z;if(n){h=a.cj;$p=3;continue _;}f=f+1|0;if(f>=e)return;g=Jp(a.jP,a.cj);if(g===null)return;h=a.cj;i
=Dm(g);j=Dw(Eb(a.dI,a.dF,a.dO,a.dI+1|0,a.dF+1|0,a.dO+1|0),8.0,4.0,8.0);$p=1;continue _;case 3:AOt(h,g);if(C()){break _;}o=0;while(o<20){c=a.dI+0.5+(N(a.cj.r)-0.5)*2.0;d=a.dF+0.5+(N(a.cj.r)-0.5)*2.0;k=a.dO+0.5+(N(a.cj.r)-0.5)*2.0;BX(a.cj,B(256),c,d,k,0.0,0.0,0.0);BX(a.cj,B(257),c,d,k,0.0,0.0,0.0);o=o+1|0;}AE5(g);N$(a);f=f+1|0;if(f>=e)return;g=Jp(a.jP,a.cj);if(g===null)return;h=a.cj;i=Dm(g);j=Dw(Eb(a.dI,a.dF,a.dO,a.dI+1|0,a.dF+1|0,a.dO+1|0),8.0,4.0,8.0);$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,$p);}
function N$(a){a.j2=200+E(a.cj.r,600)|0;}
function ASf(){IA.call(this);this.wX=null;}
function BbM(){var a=new ASf();AXD(a);return a;}
function AXD(a){a.wX=De();}
function AAb(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();Bu(c+0.5,d,e+0.5);g=CQ(a.wX,b.jP);if(g===null){g=Jp(b.jP,null);BT(a.wX,b.jP,g);}if(g===null){BE();return;}g.m=b.cj;Bu(0.0,0.4000000059604645,0.0);Bw((b.mw+(b.lN-b.mw)*f)*10.0,0.0,1.0,0.0);Bw((-30.0),1.0,0.0,0.0);Bu(0.0,(-0.4000000059604645),0.0);Cw(0.4375,0.4375,0.4375);b=BgB;c=0.0;d=0.0;e=0.0;h=0.0;$p=1;case 1:AQS(b,g,c,d,e,
h,f);if(C()){break _;}BE();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function ARs(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AAb(a,b,c,d,e,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AQx(){DJ.call(this);}
function Baa(){var a=new AQx();A4G(a);return a;}
function A4G(a){Gq(a,A5C(),1.0);a.kl=A5C();}
function A6D(a,b){return 180.0;}
function X8(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c)return 0;if(c)return 0;d=B(585);$p=1;case 1:AKG(a,d);if(C()){break _;}e=1.0;f=1.0;$p=2;case 2:$z=ADV(b,f);if(C()){break _;}f=$z;f=(e-f)*0.5;Ba(3042);Bc(3008);Dg(770,771);BW(1.0,1.0,1.0,f);return 1;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function A6z(a,b){return 180.0;}
function Ym(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=X8(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function Ue(){DJ.call(this);}
function AGu(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(586);$p=1;case 1:AKG(a,d);if(C()){break _;}return !c&&b.qB?1:0;default:E_();}}C3().s(a,b,c,d,$p);}
function AMo(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AGu(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function FZ(){var a=this;Eh.call(a);a.hf=null;a.hE=null;a.jL=null;a.jK=null;a.jJ=null;a.jM=null;}
function BlP(a,b){var c=new FZ();Le(c,a,b);return c;}
function Le(a,b,c){var d,e;a.hf=BM(0,0);BH(a.hf,(-4.0),(-4.0),(-8.0),8,8,8,c);BL(a.hf,0.0,18-b|0,(-6.0));a.hE=BM(28,8);BH(a.hE,(-5.0),(-10.0),(-7.0),10,16,8,c);BL(a.hE,0.0,17-b|0,2.0);a.jL=BM(0,16);BH(a.jL,(-2.0),0.0,(-2.0),4,b,4,c);d=a.jL;e=24-b|0;BL(d,(-3.0),e,7.0);a.jK=BM(0,16);BH(a.jK,(-2.0),0.0,(-2.0),4,b,4,c);BL(a.jK,3.0,e,7.0);a.jJ=BM(0,16);BH(a.jJ,(-2.0),0.0,(-2.0),4,b,4,c);BL(a.jJ,(-3.0),e,(-5.0));a.jM=BM(0,16);BH(a.jM,(-2.0),0.0,(-2.0),4,b,4,c);BL(a.jM,3.0,e,(-5.0));}
function A$c(a,b,c,d,e,f,g){AJ7(a,b,c,d,e,f,g);Cc(a.hf,g);Cc(a.hE,g);Cc(a.jL,g);Cc(a.jK,g);Cc(a.jJ,g);Cc(a.jM,g);}
function AJ7(a,b,c,d,e,f,g){var h;a.hf.bY=e/57.2957763671875;a.hE.b2=1.5707963705062866;h=a.jL;b=b*0.6661999821662903;h.b2=BC(b)*1.399999976158142*c;h=a.jK;d=b+3.1415927410125732;h.b2=BC(d)*1.399999976158142*c;a.jJ.b2=BC(d)*1.399999976158142*c;a.jM.b2=BC(b)*1.399999976158142*c;}
function P4(){FZ.call(this);}
function Bc0(){var a=new P4();AYu(a);return a;}
function AYu(a){Le(a,6,0.0);}
function TM(){DJ.call(this);}
function ANe(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(587);$p=1;case 1:AKG(a,d);if(C()){break _;}return !c&&!b.yk?1:0;default:E_();}}C3().s(a,b,c,d,$p);}
function ARH(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ANe(a,b,c);if(C()){break _;}c=$z;return c;default:E_();}}C3().s(a,b,c,$p);}
function ACU(){FZ.call(this);}
function Bcx(){var a=new ACU();A$i(a);return a;}
function A$i(a){Le(a,12,0.0);a.hf=BM(0,0);BH(a.hf,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BL(a.hf,0.0,6.0,(-8.0));a.hE=BM(28,8);BH(a.hE,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BL(a.hE,0.0,5.0,2.0);}
function ARv(){FZ.call(this);}
function Bb8(){var a=new ARv();AVq(a);return a;}
function AVq(a){Le(a,12,0.0);a.hf=BM(0,0);BH(a.hf,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BL(a.hf,0.0,6.0,(-8.0));a.hE=BM(28,8);BH(a.hE,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BL(a.hE,0.0,5.0,2.0);a.jL=BM(0,16);BH(a.jL,(-2.0),0.0,(-2.0),4,6,4,0.5);BL(a.jL,(-3.0),12.0,7.0);a.jK=BM(0,16);BH(a.jK,(-2.0),0.0,(-2.0),4,6,4,0.5);BL(a.jK,3.0,12.0,7.0);a.jJ=BM(0,16);BH(a.jJ,(-2.0),0.0,(-2.0),4,6,4,0.5);BL(a.jJ,(-3.0),12.0,(-5.0));a.jM=BM(0,16);BH(a.jM,(-2.0),0.0,(-2.0),4,6,4,0.5);BL(a.jM,3.0,12.0,(-5.0));}
function ACj(){DJ.call(this);}
function Bcm(){var a=new ACj();AZ2(a);return a;}
function AZ2(a){Gq(a,Ba9(),0.5);}
function ADQ(a,b,c){var d,e,f;d=Qw(b,c);e=1.0+Bp(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;c=d*d;c=c*c;f=(1.0+c*0.4000000059604645)*e;Cw(f,(1.0+c*0.10000000149011612)/e,f);}
function Yl(a,b,c,d){var e,f;e=Qw(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function A8a(a,b,c){ADQ(a,b,c);}
function A0c(a,b,c,d){return Yl(a,b,c,d);}
function HP(){MP.call(this);}
function BlQ(){var a=new HP();A8s(a);return a;}
function A8s(a){KV(a);}
function A2Z(a,b,c,d,e,f,g){var h,i,j;AI7(a,b,c,d,e,f,g);h=Bp(a.ya*3.1415927410125732);i=Bp((1.0-(1.0-a.ya)*(1.0-a.ya))*3.1415927410125732);a.dY.bV=0.0;a.dL.bV=0.0;j=a.dY;b=0.10000000149011612-h*0.6000000238418579;j.bY= -b;a.dL.bY=b;a.dY.b2=(-1.5707963705062866);a.dL.b2=(-1.5707963705062866);j=a.dY;b=j.b2;c=h*1.2000000476837158-i*0.4000000059604645;j.b2=b-c;j=a.dL;j.b2=j.b2-c;j=a.dY;b=j.bV;c=d*0.09000000357627869;j.bV=b+BC(c)*0.05000000074505806+0.05000000074505806;j=a.dL;j.bV=j.bV-(BC(c)*0.05000000074505806
+0.05000000074505806);j=a.dY;b=j.b2;c=d*0.06700000166893005;j.b2=b+Bp(c)*0.05000000074505806;j=a.dL;j.b2=j.b2-Bp(c)*0.05000000074505806;}
function AIC(){HP.call(this);}
function BcL(){var a=new AIC();AWG(a);return a;}
function AWG(a){KV(a);a.dY=BM(40,16);BH(a.dY,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BL(a.dY,(-5.0),2.0,0.0);a.dL=BM(40,16);a.dL.lF=1;BH(a.dL,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BL(a.dL,5.0,2.0,0.0);a.jb=BM(0,16);BH(a.jb,(-1.0),0.0,(-1.0),2,12,2,0.0);BL(a.jb,(-2.0),12.0,0.0);a.hg=BM(0,16);a.hg.lF=1;BH(a.hg,(-1.0),0.0,(-1.0),2,12,2,0.0);BL(a.hg,2.0,12.0,0.0);}
function Ls(){DP.call(this);}
function APk(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.m;$p=1;case 1:$z=ANu(e,b,c,d);if(C()){break _;}f=$z;return f-0.5;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function Uh(){DJ.call(this);this.tB=0.0;}
function ZH(a,b,c){Cw(a.tB,a.tB,a.tB);}
function A_d(a,b,c){ZH(a,b,c);}
function TT(){Dh.call(this);}
function BlR(){var a=new TT();AZM(a);return a;}
function AZM(a){EH(a);}
function AJG(a,b,c,d,e,f,g){B1();A8F(b.L,c-b.cd,d-b.b0,e-b.ce);BE();}
function IF(){var a=this;C5.call(a);a.ry=0;a.dG=0;a.nu=0;a.ES=0;a.nB=0;a.dQ=null;}
function JW(a,b){var c,d,e,f,g,h,i,j,k,l;a.dG=b;c=b*90|0;a.v=c;a.O=c;c=a.dQ.go;d=a.dQ.m$;e=a.dQ.go;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;d=d/32.0;f=e/32.0;g=a.nu+0.5;h=a.ES+0.5;i=a.nB+0.5;if(!b)i=i-0.5625;j=R(b,1);if(!j)g=g-0.5625;k=R(b,2);if(!k)i=i+0.5625;l=R(b,3);if(!l)g=g+0.5625;if(!b)g=g-HM(a,a.dQ.go);if(!j)i=i+HM(a,a.dQ.go);if(!k)g=g+HM(a,a.dQ.go);if(!l)i=i-HM(a,a.dQ.go);e=h+HM(a,a.dQ.m$);CU(a,g,e,i);Nk(a.L,g-c+0.0062500000931322575,e-d+0.0062500000931322575,i-f+0.0062500000931322575,g+c+(-0.0062500000931322575),
e+d+(-0.0062500000931322575),i+f+(-0.0062500000931322575));}
function HM(a,b){return b==32?0.5:b!=64?0.0:0.5;}
function ADy(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ry;a.ry=b+1|0;if(b!=100)return;$p=1;case 1:$z=ZW(a);if(C()){break _;}c=$z;if(c)return;a.ry=0;$p=2;case 2:Cd(a);if(C()){break _;}d=a.m;e=new E$;f=a.m;g=a.d;h=a.j;i=a.e;j=new Cf;BB();DC(j,BiO);Hc(e,f,g,h,i,j);$p=3;case 3:AOt(d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ZW(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.m;c=a.L;$p=1;case 1:$z=X3(b,a,c);if(C()){break _;}b=$z;if(b.p>0)return 0;d=a.dQ.go/16|0;e=a.dQ.m$/16|0;f=a.nu;g=a.nB;if(!a.dG)f=K(a.d-a.dQ.go/32.0);if(a.dG==1)g=K(a.e-a.dQ.go/32.0);if(a.dG==2)f=K(a.d-a.dQ.go/32.0);if(a.dG==3)g=K(a.e-a.dQ.go/32.0);h=K(a.j-a.dQ.m$/32.0);i=0;while
(i<d){j=0;if(j<e){if(a.dG&&a.dG!=2){b=a.m;k=a.nu;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.m;k=f+i|0;l=h+j|0;m=a.nB;$p=3;continue _;}i=i+1|0;}b=a.m;c=a.L;$p=2;case 2:$z=ADY(b,a,c);if(C()){break _;}c=$z;k=0;while(k<c.p){if(Z(c,k) instanceof IF)return 0;k=k+1|0;}return 1;case 3:$z=ACa(b,k,l,m);if(C()){break _;}b=$z;if(!b.dt())return 0;j=j+1|0;while(true){if(j<e){if(a.dG&&a.dG!=2){b=a.m;k=a.nu;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.m;k=f+i|0;l=h+j|0;m=a.nB;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.m;c=a.L;$p=2;continue _;case 4:$z
=ACa(b,k,l,m);if(C()){break _;}b=$z;if(!b.dt())return 0;j=j+1|0;while(true){if(j<e){if(a.dG&&a.dG!=2){b=a.m;k=a.nu;l=h+j|0;m=g+i|0;continue _;}b=a.m;k=f+i|0;l=h+j|0;m=a.nB;$p=3;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.m;c=a.L;$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AX6(a){return 1;}
function AEE(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Cd(a);if(C()){break _;}d=a.m;b=new E$;e=a.m;f=a.d;g=a.j;h=a.e;i=new Cf;BB();DC(i,BiO);Hc(b,e,f,g,h,i);$p=2;case 2:AOt(d,b);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AAF(){Dh.call(this);this.Io=null;}
function Bb6(){var a=new AAF();AZS(a);return a;}
function AZS(a){EH(a);a.Io=new DA;}
function AQp(a,b,c,d,e,f,g){var h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();Bu(c,d,e);Bw(f,0.0,1.0,0.0);Ba(32826);h=B(588);$p=1;case 1:AKG(a,h);if(C()){break _;}h=b.dQ;Cw(0.0625,0.0625,0.0625);i=h.go;j=h.m$;k=h.z1;l=h.z0;$p=2;case 2:AC7(a,b,i,j,k,l);if(C()){break _;}Bc(32826);BE();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AC7(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g= -c/2.0;h= -d/
2.0;i=0;j=c/16|0;k=d/16|0;l=e+c|0;m=f+d|0;while(i<j){if(0<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=0+1|0;f=q*16|0;r=h+f;s=0*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dG)w=K(b.d+u/16.0);if(b.dG==1)y=K(b.e-u/16.0);if(b.dG==2)w=K(b.d-u/16.0);if(b.dG==3)y=K(b.e+u/16.0);z=a.iG.n7;$p=1;continue _;}i=i+1|0;}return;case 1:$z=ANu(z,w,x,y);if(C()){break _;}ba=$z;F5(ba,ba,ba);ba=(l-o|0)/256.0;u=(l-c|0)/256.0;v=(m-s|0)/256.0;bb=(m-f|0)/256.0;BA();z=BeY;Bz(z);Cj(0.0,0.0,(-1.0));bc=n;bd=t;be
=u;bf=v;G(z,bc,bd,(-0.5),be,bf);bg=p;bh=ba;G(z,bg,bd,(-0.5),bh,bf);bf=r;bi=bb;G(z,bg,bf,(-0.5),bh,bi);G(z,bc,bf,(-0.5),be,bi);Cj(0.0,0.0,1.0);G(z,bc,bf,0.5,0.75,0.0);G(z,bg,bf,0.5,0.8125,0.0);G(z,bg,bd,0.5,0.8125,0.0625);G(z,bc,bd,0.5,0.75,0.0625);Cj(0.0,(-1.0),0.0);G(z,bc,bf,(-0.5),0.75,0.001953125);G(z,bg,bf,(-0.5),0.8125,0.001953125);G(z,bg,bf,0.5,0.8125,0.001953125);G(z,bc,bf,0.5,0.75,0.001953125);Cj(0.0,1.0,0.0);G(z,bc,bd,0.5,0.75,0.001953125);G(z,bg,bd,0.5,0.8125,0.001953125);G(z,bg,bd,(-0.5),0.8125,0.001953125);G(z,
bc,bd,(-0.5),0.75,0.001953125);Cj((-1.0),0.0,0.0);G(z,bc,bf,0.5,0.751953125,0.0);G(z,bc,bd,0.5,0.751953125,0.0625);G(z,bc,bd,(-0.5),0.751953125,0.0625);G(z,bc,bf,(-0.5),0.751953125,0.0);Cj(1.0,0.0,0.0);G(z,bg,bf,(-0.5),0.751953125,0.0);G(z,bg,bd,(-0.5),0.751953125,0.0625);G(z,bg,bd,0.5,0.751953125,0.0625);G(z,bg,bf,0.5,0.751953125,0.0);Bt(z);s=q;while(true){if(s<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=s+1|0;f=q*16|0;r=h+f;s=s*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dG)w=K(b.d
+u/16.0);if(b.dG==1)y=K(b.e-u/16.0);if(b.dG==2)w=K(b.d-u/16.0);if(b.dG==3)y=K(b.e+u/16.0);z=a.iG.n7;continue _;}i=i+1|0;if(i>=j)break;s=0;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AO5(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQp(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Jw(){var a=this;C5.call(a);a.sC=0;a.s9=0;a.rK=0;a.v5=0;a.pl=0;a.lq=0;a.sq=null;a.p4=0;a.nb=0;}
function ATq(a,b){var c=new Jw();AZs(c,a,b);return c;}
function AZs(a,b,c){FA(a,b);a.sC=(-1);a.s9=(-1);a.rK=(-1);a.v5=0;a.pl=0;a.lq=0;a.nb=0;a.sq=c;D1(a,0.5,0.5);KG(a,c.d,c.j,c.e,c.v,c.J);a.d=a.d-BC(a.v/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.e=a.e-Bp(a.v/180.0*3.1415927410125732)*0.1599999964237213;CU(a,a.d,a.j,a.e);a.c4=0.0;a.g= -Bp(a.v/180.0*3.1415927410125732)*BC(a.J/180.0*3.1415927410125732);a.h=BC(a.v/180.0*3.1415927410125732)*BC(a.J/180.0*3.1415927410125732);a.i= -Bp(a.J/180.0*3.1415927410125732);QO(a,a.g,a.i,a.h,1.5,1.0);}
function QO(a,b,c,d,e,f){var g,h,i;g=Cg(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;g=CZ(a.n)*0.007499999832361937;h=f;b=b+g*h;c=c+CZ(a.n)*0.007499999832361937*h;d=d+CZ(a.n)*0.007499999832361937*h;g=e;b=b*g;c=c*g;d=d*g;a.g=b;a.i=c;a.h=d;i=Cg(b*b+d*d);e=CS(b,d)*180.0/3.1415927410125732;a.v=e;a.O=e;e=CS(c,i)*180.0/3.1415927410125732;a.J=e;a.R=e;a.p4=0;}
function APH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJl(a);if(C()){break _;}if(a.lq>0)a.lq=a.lq-1|0;if(a.pl){b=a.m;c=a.sC;d=a.s9;e=a.rK;$p=2;continue _;}a.nb=a.nb+1|0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.m;$p=3;continue _;case 2:$z=ACH(b,c,d,e);if(C()){break _;}c=$z;if
(c==a.v5){a.p4=a.p4+1|0;if(a.p4!=1200)return;$p=4;continue _;}a.pl=0;a.g=a.g*N(a.n)*0.20000000298023224;a.i=a.i*N(a.n)*0.20000000298023224;a.h=a.h*N(a.n)*0.20000000298023224;a.p4=0;a.nb=0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.m;$p=3;case 3:$z=AJz(g,b,f);if(C()){break _;}g=$z;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);if(g!==null)f=BY(g.gE.x,g.gE.z,g.gE.w);h=null;i=a.m;j=Dw(Jg(a.L,a.g,a.i,a.h),1.0,1.0,1.0);$p=5;continue _;case 4:Cd(a);if(C()){break _;}return;case 5:$z=ADY(i,a,j);if(C()){break _;}i
=$z;k=0.0;d=0;while(d<Df(i)){j=Z(i,d);if(j.lw()&&!(j===a.sq&&a.nb<5)){l=Q2(Dw(j.L,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,f);if(l!==null){m=DI(b,l.gE);if(!(m>=k&&k!==0.0)){h=j;k=m;}}}d=d+1|0;}if(h!==null)g=A1t(h);if(g!==null){if(g.nG!==null){b=g.nG;f=a.sq;c=4;$p=7;continue _;}a.sC=g.ic;a.s9=g.id;a.rK=g.ie;b=a.m;c=a.sC;d=a.s9;e=a.rK;$p=6;continue _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Cg(a.g*a.g+a.h*a.h);a.v=CS(a.g,a.h)*180.0/3.1415927410125732;a.J=CS(a.i,n)*180.0/3.1415927410125732;while
(a.J-a.R<(-180.0)){a.R=a.R-360.0;}while(a.J-a.R>=180.0){a.R=a.R+360.0;}while(a.v-a.O<(-180.0)){a.O=a.O-360.0;}while(a.v-a.O>=180.0){a.O=a.O+360.0;}a.J=a.R+(a.J-a.R)*0.20000000298023224;a.v=a.O+(a.v-a.O)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 6:$z=ACH(b,c,d,e);if(C()){break _;}c=$z;a.v5=c;a.g=g.gE.x-a.d;a.i=g.gE.z-a.j;a.h=g.gE.w-a.e;n=Cg(a.g*a.g+a.i*a.i+a.h*a.h);k=a.d;m=a.g;p=n;a.d=k-m/p*0.05000000074505806;a.j=a.j-a.i/p*0.05000000074505806;a.e=a.e-a.h/p*0.05000000074505806;Di(a.m,a,B(589),
1.0,1.2000000476837158/(N(a.n)*0.20000000298023224+0.8999999761581421));a.pl=1;a.lq=7;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Cg(a.g*a.g+a.h*a.h);a.v=CS(a.g,a.h)*180.0/3.1415927410125732;a.J=CS(a.i,n)*180.0/3.1415927410125732;while(a.J-a.R<(-180.0)){a.R=a.R-360.0;}while(a.J-a.R>=180.0){a.R=a.R+360.0;}while(a.v-a.O<(-180.0)){a.O=a.O-360.0;}while(a.v-a.O>=180.0){a.O=a.O+360.0;}a.J=a.R+(a.J-a.R)*0.20000000298023224;a.v=a.O+(a.v-a.O)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 7:$z=b.ft(f,c);if(C())
{break _;}c=$z;if(c){Di(a.m,a,B(589),1.0,1.2000000476837158/(N(a.n)*0.20000000298023224+0.8999999761581421));$p=8;continue _;}a.g=a.g*(-0.10000000149011612);a.i=a.i*(-0.10000000149011612);a.h=a.h*(-0.10000000149011612);a.v=a.v+180.0;a.O=a.O+180.0;a.nb=0;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Cg(a.g*a.g+a.h*a.h);a.v=CS(a.g,a.h)*180.0/3.1415927410125732;a.J=CS(a.i,n)*180.0/3.1415927410125732;while(a.J-a.R<(-180.0)){a.R=a.R-360.0;}while(a.J-a.R>=180.0){a.R=a.R+360.0;}while(a.v-a.O<(-180.0)){a.O=a.O-360.0;}while
(a.v-a.O>=180.0){a.O=a.O+360.0;}a.J=a.R+(a.J-a.R)*0.20000000298023224;a.v=a.O+(a.v-a.O)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 8:Cd(a);if(C()){break _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Cg(a.g*a.g+a.h*a.h);a.v=CS(a.g,a.h)*180.0/3.1415927410125732;a.J=CS(a.i,n)*180.0/3.1415927410125732;while(a.J-a.R<(-180.0)){a.R=a.R-360.0;}while(a.J-a.R>=180.0){a.R=a.R+360.0;}while(a.v-a.O<(-180.0)){a.O=a.O-360.0;}while(a.v-a.O>=180.0){a.O=a.O+360.0;}a.J=a.R+(a.J-a.R)*0.20000000298023224;a.v=a.O+(a.v
-a.O)*0.20000000298023224;o=0.9900000095367432;$p=9;case 9:$z=AFk(a);if(C()){break _;}c=$z;if(c){e=0;while(e<4){BX(a.m,B(213),a.d-a.g*0.25,a.j-a.i*0.25,a.e-a.h*0.25,a.g,a.i,a.h);e=e+1|0;}o=0.800000011920929;}k=a.g;m=o;a.g=k*m;a.i=a.i*m;a.h=a.h*m;a.i=a.i-0.029999999329447746;CU(a,a.d,a.j,a.e);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function A7R(a,b){var c,d;if(a.pl&&a.sq===b&&a.lq<=0){c=b.K;d=new Cf;BB();M4(d,Bgq.cW,1);if(Vj(c,d)){Di(a.m,a,B(590),0.20000000298023224,((N(a.n)-N(a.n))*0.699999988079071+1.0)*2.0);R5(b,a);Cd(a);}}}
function RG(){Dh.call(this);}
function BlS(){var a=new RG();ATa(a);return a;}
function ATa(a){EH(a);}
function AJ$(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=B(591);$p=1;case 1:AKG(a,h);if(C()){break _;}B1();Bu(c,d,e);Bw(b.O+(b.v-b.O)*g-90.0,0.0,1.0,0.0);Bw(b.R+(b.J-b.R)*g,0.0,0.0,1.0);BA();h=BeY;Ba(32826);i=b.lq-g;if(i>0.0)Bw( -Bp(i*3.0)*i,0.0,0.0,1.0);Bw(45.0,1.0,0.0,0.0);Cw(0.05624999850988388,0.05624999850988388,0.05624999850988388);Bu((-4.0),0.0,0.0);Cj(0.05624999850988388,
0.0,0.0);Bz(h);G(h,(-7.0),(-2.0),(-2.0),0.0,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.3125);G(h,(-7.0),2.0,(-2.0),0.0,0.3125);Bt(h);Cj((-0.05624999850988388),0.0,0.0);Bz(h);G(h,(-7.0),2.0,(-2.0),0.0,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.3125);G(h,(-7.0),(-2.0),(-2.0),0.0,0.3125);Bt(h);j=0;while(j<4){Bw(90.0,1.0,0.0,0.0);Cj(0.0,0.0,0.05624999850988388);Bz(h);G(h,(-8.0),(-2.0),0.0,0.0,0.0);G(h,8.0,(-2.0),0.0,0.5,0.0);G(h,8.0,2.0,0.0,0.5,
0.15625);G(h,(-8.0),2.0,0.0,0.0,0.15625);Bt(h);j=j+1|0;}Bc(32826);BE();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ADw(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJ$(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function E$(){var a=this;C5.call(a);a.nk=null;a.zH=0;a.mO=0;a.hb=0;a.q5=0;a.yL=0.0;}
function Hd(a,b,c,d,e){var f=new E$();Hc(f,a,b,c,d,e);return f;}
function Hc(a,b,c,d,e,f){FA(a,b);a.mO=0;a.q5=5;a.yL=BR()*3.141592653589793*2.0;D1(a,0.25,0.25);a.c4=a.eN/2.0;CU(a,c,d,e);a.nk=f;a.v=BR()*360.0;a.g=BR()*0.20000000298023224-0.10000000149011612;a.i=0.20000000298023224;a.h=BR()*0.20000000298023224-0.10000000149011612;a.ja=0;}
function AJS(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jm();if(C()){break _;}if(a.hb>0)a.hb=a.hb-1|0;a.bT=a.d;a.cS=a.j;a.bS=a.e;a.i=a.i-0.03999999910593033;b=a.m;c=K(a.d);d=K(a.j);e=K(a.e);$p=2;case 2:$z=ACa(b,c,d,e);if(C()){break _;}b=$z;if(b===Bf4){a.i=0.20000000298023224;a.g=(N(a.n)-N(a.n))*0.20000000298023224;a.h=(N(a.n)-N(a.n))*0.20000000298023224;Di(a.m,a,B(215),0.4000000059604645,
2.0+N(a.n)*0.4000000059604645);}f=a.d;g=a.j;h=a.e;$p=3;case 3:ACT(a,f,g,h);if(C()){break _;}$p=4;case 4:AEs(a);if(C()){break _;}f=a.g;g=a.i;h=a.h;$p=5;case 5:ARU(a,f,g,h);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}a.zH=a.zH+1|0;a.mO=a.mO+1|0;if(a.mO<6000)return;$p=6;case 6:Cd(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AEs(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.m;c=a.L;d=Bf3;$p=1;case 1:$z=AAG(b,c,d,a);if(C()){break _;}e=$z;return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function ACT(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=b-e;i=c-f;j=d-g;L();k=BgN.data;l=a.m;$p=1;case 1:$z=ACH(l,e,f,g);if(C()){break _;}m=$z;if(!k[m])return 0;k=BgN.data;l=a.m;m=e-1|0;$p=2;case 2:$z=ACH(l,m,f,g);if(C())
{break _;}m=$z;n=k[m]?0:1;k=BgN.data;l=a.m;m=e+1|0;$p=3;case 3:$z=ACH(l,m,f,g);if(C()){break _;}m=$z;o=k[m]?0:1;k=BgN.data;l=a.m;m=f-1|0;$p=4;case 4:$z=ACH(l,e,m,g);if(C()){break _;}m=$z;p=k[m]?0:1;k=BgN.data;l=a.m;m=f+1|0;$p=5;case 5:$z=ACH(l,e,m,g);if(C()){break _;}m=$z;q=k[m]?0:1;k=BgN.data;l=a.m;m=g-1|0;$p=6;case 6:$z=ACH(l,e,f,m);if(C()){break _;}m=$z;m=k[m]?0:1;k=BgN.data;l=a.m;r=g+1|0;$p=7;case 7:$z=ACH(l,e,f,r);if(C()){break _;}e=$z;r=k[e]?0:1;s=(-1);t=9999.0;if(n&&h<t){s=0;t=h;}if(!o)b=t;else{b=1.0
-h;if(b<t)s=1;else b=t;}if(p&&i<b){s=2;b=i;}if(!q)c=b;else{c=1.0-i;if(c<b)s=3;else c=b;}if(m&&j<c){s=4;c=j;}if(r&&1.0-j<c)s=5;u=N(a.n)*0.20000000298023224+0.10000000149011612;if(!s)a.g= -u;if(s==1)a.g=u;if(s==2)a.i= -u;if(s==3)a.i=u;if(s==4)a.h= -u;if(s==5)a.h=u;return 0;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AMH(a,b){Vq(a,null,b);}
function Vq(a,b,c){a.q5=a.q5-c|0;if(a.q5<=0)Cd(a);return 0;}
function A_s(a,b){if(!a.hb&&Vj(b.K,a.nk)){Di(a.m,a,B(590),0.20000000298023224,((N(a.n)-N(a.n))*0.699999988079071+1.0)*2.0);R5(b,a);Cd(a);}}
function MH(){C5.call(this);this.hr=0;}
function AW6(a,b,c,d){var e=new MH();A6O(e,a,b,c,d);return e;}
function A6O(a,b,c,d,e){var f,g,h;FA(a,b);a.hr=0;a.mG=1;D1(a,0.9800000190734863,0.9800000190734863);a.c4=a.eN/2.0;f=c;g=d;h=e;CU(a,f,g,h);e=BR()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.g= -Bp(e)*0.019999999552965164;a.i=0.20000000298023224;a.h= -BC(e)*0.019999999552965164;a.ja=0;a.hr=80;a.bT=f;a.cS=g;a.bS=h;}
function A$s(a){return a.cR?0:1;}
function XS(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cS=a.j;a.bS=a.e;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARU(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}e=a.hr;a.hr=e-1|0;if(e>0){BX(a.m,B(256),a.d,a.j+0.5,a.e,0.0,
0.0,0.0);return;}$p=2;case 2:Cd(a);if(C()){break _;}f=4.0;g=a.m;h=null;b=a.d;c=a.j;d=a.e;$p=3;case 3:Yi(g,h,b,c,d,f);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AO9(){Dh.call(this);this.ws=null;}
function BaC(){var a=new AO9();A7w(a);return a;}
function A7w(a){EH(a);a.ws=Ku();a.mc=0.5;}
function APL(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();Bu(c,d,e);if(b.hr-g+1.0<10.0){h=1.0-(b.hr-g+1.0)/10.0;if(h<0.0)h=0.0;if(h>1.0)h=1.0;f=h*h;i=1.0+f*f*0.30000001192092896;Cw(i,i,i);}h=(1.0-(b.hr-g+1.0)/100.0)*0.800000011920929;j=B(179);$p=1;case 1:AKG(a,j);if(C()){break _;}j=a.ws;L();GX(j,Bfx);if(!((b.hr/5|0)%2|0)){Bc(3553);Bc(2896);Ba(3042);Dg(770,772);BW(1.0,
1.0,1.0,h);GX(a.ws,Bfx);BW(1.0,1.0,1.0,1.0);Bc(3042);Ba(2896);Ba(3553);}BE();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AMh(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APL(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function JT(){var a=this;C5.call(a);a.hX=0;a.oS=0;}
function AYA(a){return a.cR?0:1;}
function AM0(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.hX){$p=3;continue _;}a.bT=a.d;a.cS=a.j;a.bS=a.e;a.oS=a.oS+1|0;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARU(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=K(a.d);f=K(a.j);g=K(a.e);h=a.m;$p=2;case 2:$z=ACH(h,e,f,g);if(C()){break _;}i
=$z;if(i==a.hX){h=a.m;i=0;$p=4;continue _;}if(!a.cx){if(a.oS<=100)return;e=a.hX;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;continue _;case 3:Cd(a);if(C()){break _;}return;case 4:APK(h,e,f,g,i);if(C()){break _;}if(!a.cx){if(a.oS<=100)return;e=a.hX;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;case 5:Cd(a);if(C()){break _;}h=a.m;i=a.hX;j=1;$p=6;case 6:$z=AIn(h,i,e,f,g,j);if(C()){break _;}i=$z;if(!i){e=a.hX;f=1;$p=
9;continue _;}h=a.m;i=a.hX;$p=10;continue _;case 7:AB5(a,e,f);if(C()){break _;}$p=8;case 8:Cd(a);if(C()){break _;}return;case 9:AB5(a,e,f);if(C()){break _;}return;case 10:$z=APK(h,e,f,g,i);if(C()){break _;}e=$z;if(e)return;e=a.hX;f=1;$p=9;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AYf(a){return a.m;}
function AQ2(){Dh.call(this);this.DR=null;}
function Bau(){var a=new AQ2();AXJ(a);return a;}
function AXJ(a){EH(a);a.DR=Ku();a.mc=0.5;}
function AQw(a,b,c,d,e,f,g){var h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();Bu(c,d,e);h=B(179);$p=1;case 1:AKG(a,h);if(C()){break _;}L();h=Be2.data[b.hX];i=b.m;Bc(2896);j=a.DR;k=K(b.d);l=K(b.j);m=K(b.e);$p=2;case 2:AJd(j,h,i,k,l,m);if(C()){break _;}Ba(2896);BE();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARA(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQw(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Gf(){var a=this;C5.call(a);a.BI=null;a.iW=0;a.kG=0;a.oR=0;a.kQ=0;}
var BlT=null;function AS8(a,b){return b.L;}
function A0i(a){return a.L;}
function A7U(a){return 1;}
function AV5(a){return a.eN*0.2;}
function ALu(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oR= -a.oR;a.kG=10;a.iW=a.iW+(c*10|0)|0;if(a.iW<=40)return 1;BB();c=BiU.cW;d=1;e=0.0;$p=1;case 1:AGV(a,c,d,e);if(C()){break _;}$p=2;case 2:APt(a);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,$p);}
function A90(a){return a.cR?0:1;}
function APt(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=27;while(b<c){d=T2(a,b);if(d!==null){e=N(a.n)*0.800000011920929+0.10000000149011612;f=N(a.n)*0.800000011920929+0.10000000149011612;g=N(a.n)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;if(d.q>0){k=E(a.n,21)+10|0;if(k>d.q)k=d.q;d.q=d.q-k|0;l=Hd(a.m,a.d+h,a.j+i,a.e+j,
OB(d.bC,k,d.en));l.g=CZ(a.n)*0.05000000074505806;l.i=CZ(a.n)*0.05000000074505806+0.20000000298023224;l.h=CZ(a.n)*0.05000000074505806;m=a.m;$p=2;continue _;}}b=b+1|0;}$p=1;case 1:Cd(a);if(C()){break _;}return;case 2:AOt(m,l);if(C()){break _;}a:while(true){if(d.q>0){k=E(a.n,21)+10|0;if(k>d.q)k=d.q;d.q=d.q-k|0;l=Hd(a.m,a.d+h,a.j+i,a.e+j,OB(d.bC,k,d.en));l.g=CZ(a.n)*0.05000000074505806;l.i=CZ(a.n)*0.05000000074505806+0.20000000298023224;l.h=CZ(a.n)*0.05000000074505806;m=a.m;continue _;}while(true){b=b+1|0;if(b>=
c)break a;d=T2(a,b);if(d===null)continue;else break;}e=N(a.n)*0.800000011920929+0.10000000149011612;f=N(a.n)*0.800000011920929+0.10000000149011612;g=N(a.n)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;}$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ASX(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kG>0)a.kG=a.kG-1|0;if(a.iW>0)a.iW=a.iW-1|0;a.bT=a.d;a.cS=a.j;a.bS=a.e;a.i=a.i
-0.03999999910593033;b=K(a.d);c=K(a.j);d=K(a.e);e=a.m;f=c-1|0;$p=1;case 1:$z=ACH(e,b,f,d);if(C()){break _;}f=$z;L();if(f==Bhj.b)c=c+(-1)|0;g=0.4;h=0.0078125;e=a.m;$p=2;case 2:$z=ACH(e,b,c,d);if(C()){break _;}f=$z;if(f==Bhj.b){i=a.d;j=a.j;k=a.e;$p=3;continue _;}if(a.g<(-0.4))a.g=(-0.4);if(a.g>g)a.g=g;if(a.h<(-0.4))a.h=(-0.4);if(a.h>g)a.h=g;if(a.cx){a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;}i=a.g;j=a.i;k=a.h;$p=5;continue _;case 3:$z=ASB(a,i,j,k);if(C()){break _;}l=$z;e=a.m;$p=4;case 4:$z=AEX(e,b,c,d);if(C()){break _;}m
=$z;a.j=c;n=R(m,2);if(n>=0&&m<=5)a.j=c+1|0;if(!n)a.g=a.g-h;if(m==3)a.g=a.g+h;if(m==4)a.h=a.h+h;if(m==5)a.h=a.h-h;o=BlT.data[m].data;p=o[1].data[0]-o[0].data[0]|0;q=o[1].data[2]-o[0].data[2]|0;r=Ed(p*p+q*q);if(a.g*p+a.h*q<0.0){p= -p;q= -q;}s=Ed(a.g*a.g+a.h*a.h);a.g=s*p/r;a.h=s*q/r;t=b;u=t+0.5;v=u+o[0].data[0]*0.5;w=d;p=w+0.5;i=p+o[0].data[2]*0.5;j=u+o[1].data[0]*0.5;k=p+o[1].data[2]*0.5;j=j-v;k=k-i;if(j===0.0){a.d=u;u=a.e-w;}else if(k===0.0){a.e=p;u=a.d-t;}else u=((a.d-v)*j+(a.e-i)*k)*2.0;a.d=v+j*u;a.e=i+k*u;CU(a,
a.d,a.j+a.c4,a.e);x=a.g;t=a.h;if(a.bI!==null){x=x*0.75;t=t*0.75;}i=(-0.4);if(x<i)x=i;if(x>g)x=g;if(t>=i)i=t;if(i<=g)g=i;i=0.0;$p=7;continue _;case 5:ARU(a,i,j,k);if(C()){break _;}if(!a.cx){a.g=a.g*0.949999988079071;a.i=a.i*0.949999988079071;a.h=a.h*0.949999988079071;}a.J=0.0;y=a.bT-a.d;z=a.bS-a.e;if(y*y+z*z>0.001){a.v=CS(z,y)*180.0/3.141592653589793;if(a.kQ)a.v=a.v+180.0;}ba=a.v-a.O;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.v=a.v+180.0;a.kQ=a.kQ?0:1;}W0(a,
a.v,a.J);e=a.m;l=Dw(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADY(e,a,l);if(C()){break _;}bb=$z;if(bb!==null&&Df(bb)>0){bc=0;while(true){if(bc>=Df(bb))break a;bd=Z(bb,bc);if(bd!==a.bI&&bd.rV()&&bd instanceof Gf)bd.u9(a);bc=bc+1|0;}}}if(a.bI!==null&&a.bI.cR)a.bI=null;return;case 7:ARU(a,x,i,g);if(C()){break _;}if(o[0].data[1]&&(K(a.d)-b|0)==o[0].data[0]&&(K(a.e)-d|0)==o[0].data[2])CU(a,a.d,a.j+o[0].data[1],a.e);else if(o[1].data[1]&&(K(a.d)-b|0)==o[1].data[0]&&(K(a.e)-d|0)==o[1].data[2])CU(a,
a.d,a.j+o[1].data[1],a.e);if(a.bI===null){a.g=a.g*0.9599999785423279;a.i=a.i*0.0;a.h=a.h*0.9599999785423279;}else{a.g=a.g*0.996999979019165;a.i=a.i*0.0;a.h=a.h*0.996999979019165;}i=a.d;j=a.j;k=a.e;$p=8;case 8:$z=ASB(a,i,j,k);if(C()){break _;}e=$z;if(e!==null&&l!==null){w=(l.z-e.z)*0.05;i=Ed(a.g*a.g+a.h*a.h);if(i>0.0){j=a.g/i;k=i+w;a.g=j*k;a.h=a.h/i*k;}CU(a,a.d,e.z,a.e);}f=K(a.d);n=K(a.e);if(!(f==b&&n==d)){i=Ed(a.g*a.g+a.h*a.h);a.g=i*(f-b|0);a.h=i*(n-d|0);}a.J=0.0;y=a.bT-a.d;z=a.bS-a.e;if(y*y+z*z>0.001){a.v=
CS(z,y)*180.0/3.141592653589793;if(a.kQ)a.v=a.v+180.0;}ba=a.v-a.O;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.v=a.v+180.0;a.kQ=a.kQ?0:1;}W0(a,a.v,a.J);e=a.m;l=Dw(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AKa(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=K(b);g=K(c);h=K(d);i=a.m;j=g-1|0;$p=1;case 1:$z=ACH(i,f,j,h);if(C()){break _;}j=$z;L();if(j==Bhj.b)g=g+(-1)|0;i=a.m;$p=2;case 2:$z=ACH(i,f,g,h);if(C()){break _;}j=$z;if(j!=Bhj.b)return null;i=a.m;$p=3;case 3:$z=AEX(i,f,g,h);if(C()){break _;}j=$z;c=g;if(j>=2&&j<=5)c
=g+1|0;k=BlT.data[j].data;l=k[1].data[0]-k[0].data[0]|0;m=k[1].data[2]-k[0].data[2]|0;n=Ed(l*l+m*m);l=l/n;m=m/n;l=b+l*e;d=d+m*e;if(k[0].data[1]&&(K(l)-f|0)==k[0].data[0]&&(K(d)-h|0)==k[0].data[2])c=c+k[0].data[1];else if(k[1].data[1]&&(K(l)-f|0)==k[1].data[0]&&(K(d)-h|0)==k[1].data[2])c=c+k[1].data[1];$p=4;case 4:$z=ASB(a,l,c,d);if(C()){break _;}i=$z;return i;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASB(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=a.m;i=f-1|0;$p=1;case 1:$z=ACH(h,e,i,g);if(C()){break _;}i=$z;L();if(i==Bhj.b)f=f+(-1)|0;h=a.m;$p=2;case 2:$z=ACH(h,e,f,g);if(C()){break _;}i=$z;if(i!=Bhj.b)return null;h
=a.m;$p=3;case 3:$z=AEX(h,e,f,g);if(C()){break _;}j=$z;c=f;k=BlT.data[j].data;l=e;m=l+0.5;n=m+k[0].data[0]*0.5;o=c+0.5;p=o+k[0].data[1]*0.5;q=g;r=q+0.5;s=r+k[0].data[2]*0.5;m=m+k[1].data[0]*0.5;t=o+k[1].data[1]*0.5;o=r+k[1].data[2]*0.5;r=m-n;u=(t-p)*2.0;v=o-s;l=r===0.0?d-q:v===0.0?b-l:((b-n)*r+(d-s)*v)*2.0;b=n+r*l;c=p+u*l;d=s+v*l;i=R(u,0.0);if(i<0)c=c+1.0;if(i>0)c=c+0.5;return BY(b,c,d);default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function A35(a,b){var c,d,e,f,g,h;if(b!==a.bI){c=b.d-a.d;d=b.e-a.e;e=c*c+d*d;if(e>=9.999999747378752E-5){e=Cg(e);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;d=f*g;c=c*0.10000000149011612;d=d*0.10000000149011612;c=c*(1.0-a.n$);d=d*(1.0-a.n$);c=c*0.5;d=d*0.5;if(!(b instanceof Gf)){Hp(a, -c,0.0, -d);Hp(b,c/4.0,0.0,d/4.0);}else{f=(b.g+a.g)/2.0;h=(b.h+a.h)/2.0;a.h=0.0;a.g=0.0;Hp(a,f-c,0.0,h-d);b.h=0.0;b.g=0.0;Hp(b,f+c,0.0,h+d);}}}}
function A1o(a){return 27;}
function T2(a,b){return a.BI.data[b];}
function A84(a,b){Ps(b,a);return 1;}
function AMV(){var b,c,d,e,f,g;b=J($rt_arraycls($rt_arraycls($rt_intcls())),10);c=b.data;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[0]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[1]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]
=(-1);g[1]=(-1);g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[2]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=(-1);g[2]=0;e[1]=f;c[3]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=(-1);g[2]=1;e[1]=f;c[4]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=(-1);g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[5]=d;g=J($rt_arraycls($rt_intcls()),2);e=g.data;d=$rt_createIntArray(3);f=d.data;f[0]=0;f[1]=0;f[2]=1;e[0]=d;d=$rt_createIntArray(3);f=d.data;f[0]=1;f[1]=0;f[2]=0;e[1]=d;c[6]=g;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[7]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[8]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[9]=d;BlT=b;}
function ARP(){Dh.call(this);this.Dh=null;}
function Bci(){var a=new ARP();A$v(a);return a;}
function A$v(a){EH(a);a.mc=0.5;a.Dh=Bdc();}
function AQv(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B1();h=b.cd;i=b.d-b.cd;j=g;k=h+i*j;l=b.b0+(b.j-b.b0)*j;i=b.ce+(b.e-b.ce)*j;h=0.30000001192092896;$p=1;case 1:$z=ASB(b,k,l,i);if(C()){break _;}m=$z;n=b.R+(b.J-b.R)*g;if(m!==null){$p=2;continue _;}Bu(c,d,e);Bw(180.0
-f,0.0,1.0,0.0);Bw( -n,0.0,0.0,1.0);o=b.kG-g;p=b.iW-g;if(p<0.0)p=0.0;if(o>0.0)Bw(Bp(o)*o*p/10.0*b.oR,1.0,0.0,0.0);b=B(179);$p=4;continue _;case 2:$z=AKa(b,k,l,i,h);if(C()){break _;}q=$z;h=(-0.30000001192092896);$p=3;case 3:$z=AKa(b,k,l,i,h);if(C()){break _;}r=$z;if(q===null)q=m;if(r===null)r=m;c=c+m.x-k;d=d+(q.z+r.z)/2.0-l;e=e+m.w-i;s=Dl(r, -q.x, -q.z, -q.w);if(HO(s)!==0.0){s=CD(s);f=CS(s.w,s.x)*180.0/3.141592653589793;n=Iq(s.z)*73.0;}Bu(c,d,e);Bw(180.0-f,0.0,1.0,0.0);Bw( -n,0.0,0.0,1.0);o=b.kG-g;p=b.iW-g;if
(p<0.0)p=0.0;if(o>0.0)Bw(Bp(o)*o*p/10.0*b.oR,1.0,0.0,0.0);b=B(179);$p=4;case 4:AKG(a,b);if(C()){break _;}Cw(0.75,0.75,0.75);b=Ku();L();GX(b,Bg$);Cw(1.3333333730697632,1.3333333730697632,1.3333333730697632);b=B(592);$p=5;case 5:AKG(a,b);if(C()){break _;}Cw((-1.0),(-1.0),1.0);AKH(a.Dh,0.0,0.0,(-0.10000000149011612),0.0,0.0,0.0625);BE();return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AQu(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQv(a,b,c,d,e,f,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function Wd(){var a=this;D.call(a);a.vb=Long_ZERO;a.t$=0;a.zt=0;}
function BlU(){var a=new Wd();AUt(a);return a;}
function AUt(a){return;}
function ABO(){var a=this;D.call(a);a.wz=null;a.wS=null;}
function Bb4(){var a=new ABO();AUE(a);return a;}
function AUE(a){a.wz=BM(0,0);BH(a.wz,(-12.0),(-14.0),(-1.0),24,12,2,0.0);a.wS=BM(0,14);BH(a.wS,(-1.0),(-2.0),(-1.0),2,14,2,0.0);}
function ANm(a){Cc(a.wz,0.0625);Cc(a.wS,0.0625);}
function AIj(){var a=this;Eh.call(a);a.l0=null;a.qV=null;a.rG=null;a.kd=null;a.kc=null;a.kf=null;a.ke=null;a.kh=null;a.kg=null;a.kj=null;a.ki=null;}
function A5C(){var a=new AIj();AU4(a);return a;}
function AU4(a){a.l0=BM(32,4);BH(a.l0,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BL(a.l0,0.0,15.0,(-3.0));a.qV=BM(0,0);BH(a.qV,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BL(a.qV,0.0,15.0,0.0);a.rG=BM(0,12);BH(a.rG,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BL(a.rG,0.0,15.0,9.0);a.kd=BM(18,0);BH(a.kd,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BL(a.kd,(-4.0),15.0,2.0);a.kc=BM(18,0);BH(a.kc,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BL(a.kc,4.0,15.0,2.0);a.kf=BM(18,0);BH(a.kf,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BL(a.kf,(-4.0),15.0,1.0);a.ke=BM(18,0);BH(a.ke,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BL(a.ke,4.0,15.0,1.0);a.kh=BM(18,0);BH(a.kh,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BL(a.kh,(-4.0),15.0,0.0);a.kg=BM(18,0);BH(a.kg,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BL(a.kg,4.0,15.0,0.0);a.kj=BM(18,0);BH(a.kj,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BL(a.kj,(-4.0),15.0,(-1.0));a.ki=BM(18,0);BH(a.ki,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BL(a.ki,4.0,15.0,(-1.0));}
function AYr(a,b,c,d,e,f,g){YE(a,b,c,d,e,f,g);Cc(a.l0,g);Cc(a.qV,g);Cc(a.rG,g);Cc(a.kd,g);Cc(a.kc,g);Cc(a.kf,g);Cc(a.ke,g);Cc(a.kh,g);Cc(a.kg,g);Cc(a.kj,g);Cc(a.ki,g);}
function YE(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.l0.bY=e/57.2957763671875;a.l0.b2=f/57.2957763671875;a.kd.bV=(-0.7853981852531433);a.kc.bV=0.7853981852531433;a.kf.bV=(-0.5811946392059326);a.ke.bV=0.5811946392059326;a.kh.bV=(-0.5811946392059326);a.kg.bV=0.5811946392059326;a.kj.bV=(-0.7853981852531433);a.ki.bV=0.7853981852531433;a.kd.bY=0.7853981852531433;a.kc.bY=(-0.7853981852531433);a.kf.bY=0.39269909262657166;a.ke.bY=(-0.39269909262657166);a.kh.bY=(-0.39269909262657166);a.kg.bY=0.39269909262657166;a.kj.bY
=(-0.7853981852531433);a.ki.bY=0.7853981852531433;b=b*0.6661999821662903;f=b*2.0;h= -(BC(f+0.0)*0.4000000059604645)*c;i= -(BC(f+3.1415927410125732)*0.4000000059604645)*c;j= -(BC(f+1.5707963705062866)*0.4000000059604645)*c;k= -(BC(f+4.71238899230957)*0.4000000059604645)*c;l=HW(Bp(b+0.0)*0.4000000059604645)*c;m=HW(Bp(b+3.1415927410125732)*0.4000000059604645)*c;n=HW(Bp(b+1.5707963705062866)*0.4000000059604645)*c;o=HW(Bp(b+4.71238899230957)*0.4000000059604645)*c;p=a.kd;p.bY=p.bY+h;p=a.kc;p.bY=p.bY+ -h;p=a.kf;p.bY
=p.bY+i;p=a.ke;p.bY=p.bY+ -i;p=a.kh;p.bY=p.bY+j;p=a.kg;p.bY=p.bY+ -j;p=a.kj;p.bY=p.bY+k;p=a.ki;p.bY=p.bY+ -k;p=a.kd;p.bV=p.bV+l;p=a.kc;p.bV=p.bV+ -l;p=a.kf;p.bV=p.bV+m;p=a.ke;p.bV=p.bV+ -m;p=a.kh;p.bV=p.bV+n;p=a.kg;p.bV=p.bV+ -n;p=a.kj;p.bV=p.bV+o;p=a.ki;p.bV=p.bV+ -o;}
function AIP(){var a=this;Eh.call(a);a.l7=null;a.vG=null;a.s0=null;a.pr=null;a.pq=null;a.pp=null;a.po=null;}
function Ba9(){var a=new AIP();A5o(a);return a;}
function A5o(a){a.l7=BM(0,0);BH(a.l7,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BL(a.l7,0.0,4.0,0.0);a.vG=BM(32,0);BH(a.vG,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BL(a.vG,0.0,4.0,0.0);a.s0=BM(16,16);BH(a.s0,(-4.0),0.0,(-2.0),8,12,4,0.0);BL(a.s0,0.0,4.0,0.0);a.pr=BM(0,16);BH(a.pr,(-2.0),0.0,(-2.0),4,6,4,0.0);BL(a.pr,(-2.0),16.0,4.0);a.pq=BM(0,16);BH(a.pq,(-2.0),0.0,(-2.0),4,6,4,0.0);BL(a.pq,2.0,16.0,4.0);a.pp=BM(0,16);BH(a.pp,(-2.0),0.0,(-2.0),4,6,4,0.0);BL(a.pp,(-2.0),16.0,(-4.0));a.po=BM(0,16);BH(a.po,(-2.0),0.0,(-2.0),4,6,4,
0.0);BL(a.po,2.0,16.0,(-4.0));}
function A3h(a,b,c,d,e,f,g){ZE(a,b,c,d,e,f,g);Cc(a.l7,g);Cc(a.s0,g);Cc(a.pr,g);Cc(a.pq,g);Cc(a.pp,g);Cc(a.po,g);}
function ZE(a,b,c,d,e,f,g){var h;a.l7.bY=e/57.2957763671875;a.l7.b2=f/57.2957763671875;h=a.pr;b=b*0.6661999821662903;h.b2=BC(b)*1.399999976158142*c;h=a.pq;d=b+3.1415927410125732;h.b2=BC(d)*1.399999976158142*c;a.pp.b2=BC(d)*1.399999976158142*c;a.po.b2=BC(b)*1.399999976158142*c;}
function AE$(){Eh.call(this);this.cZ=null;}
function Bdc(){var a=new AE$();A4f(a);return a;}
function A4f(a){a.cZ=J(QS,7);a.cZ.data[0]=BM(0,10);a.cZ.data[1]=BM(0,0);a.cZ.data[2]=BM(0,0);a.cZ.data[3]=BM(0,0);a.cZ.data[4]=BM(0,0);a.cZ.data[5]=BM(44,10);BH(a.cZ.data[0],(-10.0),(-8.0),(-1.0),20,16,2,0.0);BL(a.cZ.data[0],0.0,4.0,0.0);BH(a.cZ.data[5],(-9.0),(-7.0),(-1.0),18,14,1,0.0);BL(a.cZ.data[5],0.0,4.0,0.0);BH(a.cZ.data[1],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BL(a.cZ.data[1],(-9.0),4.0,0.0);BH(a.cZ.data[2],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BL(a.cZ.data[2],9.0,4.0,0.0);BH(a.cZ.data[3],(-8.0),(-9.0),(-1.0),
16,8,2,0.0);BL(a.cZ.data[3],0.0,4.0,(-7.0));BH(a.cZ.data[4],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BL(a.cZ.data[4],0.0,4.0,7.0);a.cZ.data[0].b2=1.5707963705062866;a.cZ.data[1].bY=4.71238899230957;a.cZ.data[2].bY=1.5707963705062866;a.cZ.data[3].bY=3.1415927410125732;a.cZ.data[5].b2=(-1.5707963705062866);}
function AKH(a,b,c,d,e,f,g){var h;a.cZ.data[5].m7=4.0-d;h=0;while(h<6){Cc(a.cZ.data[h],g);h=h+1|0;}}
function TF(){var a=this;D.call(a);a.lK=0;a.yD=0;a.sw=0;a.nm=0;a.lc=null;}
function KR(a){return a.lK>=a.sw?0:1;}
function La(a){var b,c;PQ(a);a.nm=a.lK;b=a.lc;c=a.lK;a.lK=c+1|0;return Z(b,c);}
function AMn(a){var b;if(a.nm<0){b=new D2;O(b);M(b);}PQ(a);Em(a.lc,a.nm);a.yD=a.lc.d4;if(a.nm<a.lK)a.lK=a.lK-1|0;a.sw=a.sw-1|0;a.nm=(-1);}
function PQ(a){var b;if(a.yD>=a.lc.d4)return;b=new K_;O(b);M(b);}
function I4(){var a=this;D.call(a);a.g4=null;a.tA=0;a.cm=null;a.hP=null;a.gm=null;a.h4=null;a.eg=null;a.n6=0;a.f3=0;a.fY=0;a.i0=null;a.dK=null;a.gF=0;a.dH=0;a.qd=0;a.EC=0;a.sd=0;a.s_=Long_ZERO;}
var BkD=0;function BaZ(a,b,c){var d=new I4();ARp(d,a,b,c);return d;}
function A9H(a,b,c,d){var e=new I4();A1P(e,a,b,c,d);return e;}
function ARp(a,b,c,d){var e;a.i0=De();a.dK=J(Kb,8);a.gF=0;a.dH=0;a.EC=0;a.sd=0;a.s_=Long_ZERO;a.cm=b;a.f3=c;a.fY=d;a.eg=$rt_createByteArray(256);e=0;while(e<a.dK.data.length){a.dK.data[e]=Ch();e=e+1|0;}}
function A1P(a,b,c,d,e){var f;f=c.data;ARp(a,b,d,e);a.g4=c;b=new Ug;d=f.length;AJP(b,d);a.hP=b;a.gm=Jm(d);a.h4=Jm(d);}
function ARW(a,b,c){return b==a.f3&&c==a.fY?1:0;}
function UU(a,b,c){return a.eg.data[c<<4|b]&255;}
function A5X(a){return;}
function AF1(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=127;c=0;while(true){if(c>=16){a.n6=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b=b+1|0;}a.dH=1;return;}e=0;if(e<16)break;c=c+1|0;}f=a.eg.data;d=e<<4|c;f[d]=(-128);g=127;$p=1;case 1:ADb(a,c,g,e);if(C()){break _;}if((a.eg.data[d]&255)<b)b=a.eg.data[d]&255;e=e+1|0;while(e>=16){c=c+1|0;if(c>=16){a.n6=b;b=0;while(b<16){d=0;if(d<16){$p=2;continue _;}b
=b+1|0;}a.dH=1;return;}e=0;}f=a.eg.data;d=e<<4|c;f[d]=(-128);g=127;continue _;case 2:AFb(a,b,d);if(C()){break _;}d=d+1|0;while(true){if(d<16){continue _;}b=b+1|0;if(b>=16)break;d=0;}a.dH=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AFb(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=UU(a,b,c);e=(a.f3*16|0)+b|0;f=(a.fY*16|0)+c|0;b=e-1|0;$p=1;case 1:AJW(a,b,f,d);if(C()){break _;}b=e+1|0;$p=2;case 2:AJW(a,b,f,d);if(C()){break _;}b=f-1|0;$p=3;case 3:AJW(a,e,b,d);if(C()){break _;}b=f+1|0;$p=4;case 4:AJW(a,e,b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AJW(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Bdl.k.bw){a.dH=1;return;}e=a.cm;$p=1;case 1:$z=ALU(e,b,c);if(C()){break _;}f=$z;g=R(f,d);if(g>0){e=a.cm;h=BkJ;$p=2;continue _;}if(g>=0){a.dH=1;return;}e=a.cm;h=BkJ;$p=3;continue _;case 2:Zj(e,h,b,d,c,b,f,c);if(C()){break _;}a.dH=1;return;case 3:Zj(e,h,b,f,c,b,d,c);if(C()){break _;}a.dH=1;return;default:E_();}}C3().s(a,b,c,d,e,
f,g,h,$p);}
function ADb(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.eg.data;f=d<<4|b;g=e[f]&255;if(c<=g)c=g;while(c>0){L();if(BgO.data[ET(a,b,c-1|0,d)])break;c=c+(-1)|0;}h=R(c,g);if(h){APW(a.cm,b,d,c,g);a.eg.data[f]=c<<24>>24;if(c<a.n6)a.n6=c;else{i=127;j=0;while(j<16){f=0;while(f<16){e=a.eg.data;k=f<<4|j;if((e[k]&255)
<i)i=a.eg.data[k]&255;f=f+1|0;}j=j+1|0;}a.n6=i;}a:{k=(a.f3*16|0)+b|0;j=(a.fY*16|0)+d|0;if(h<0){f=c;while(true){if(f>=g)break a;D7(a.gm,b,f,d,15);f=f+1|0;}}if(!Bdl.k.bw){l=a.cm;m=BkJ;$p=1;continue _;}while(true){if(g>=c)break a;D7(a.gm,b,g,d,0);g=g+1|0;}}f=15;n=c;b:{while(n>0){if(f<=0)break b;n=n+(-1)|0;L();o=BgO.data[ET(a,b,n,d)];if(!o)o=1;f=f-o|0;if(f<0)f=0;D7(a.gm,b,n,d,f);}}while(n>0){L();if(BgO.data[ET(a,b,n-1|0,d)])break;n=n+(-1)|0;}if(n!=c&&!Bdl.k.bw){l=a.cm;m=BkJ;b=k-1|0;d=j-1|0;k=k+1|0;j=j+1|0;$p=2;continue _;}a.dH
=1;}return;case 1:Zj(l,m,k,g,j,k,c,j);if(C()){break _;}while(g<c){D7(a.gm,b,g,d,0);g=g+1|0;}f=15;n=c;c:{while(n>0){if(f<=0)break c;n=n+(-1)|0;L();o=BgO.data[ET(a,b,n,d)];if(!o)o=1;f=f-o|0;if(f<0)f=0;D7(a.gm,b,n,d,f);}}while(n>0){L();if(BgO.data[ET(a,b,n-1|0,d)])break;n=n+(-1)|0;}if(n!=c&&!Bdl.k.bw){l=a.cm;m=BkJ;b=k-1|0;d=j-1|0;k=k+1|0;j=j+1|0;$p=2;continue _;}a.dH=1;return;case 2:Zj(l,m,b,n,d,k,c,j);if(C()){break _;}a.dH=1;return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ET(a,b,c,d){return a.g4.data[b<<11|d<<7|c];}
function ADS(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e<<24>>24;h=a.eg.data[d<<4|b]&255;i=a.g4.data;j=b<<11|d<<7|c;k=i[j]&255;if(k==e)return 0;l=(a.f3*16|0)+b|0;m=(a.fY*16|0)+d|0;a.g4.data[j]=g;if(k){L();n=Be2.data[k];o=a.cm;$p=1;continue _;}a:{D7(a.hP,b,c,d,f);L();if(!BgO.data[g]){if(c!=(h-1|0))break a;$p
=2;continue _;}if(c>=h){f=c+1|0;$p=3;continue _;}}if(Bdl.k.bw){$p=4;continue _;}n=a.cm;o=BkJ;$p=5;continue _;case 1:n.lB(o,l,c,m);if(C()){break _;}b:{D7(a.hP,b,c,d,f);L();if(!BgO.data[g]){if(c!=(h-1|0))break b;$p=2;continue _;}if(c>=h){f=c+1|0;$p=3;continue _;}}if(Bdl.k.bw){$p=4;continue _;}n=a.cm;o=BkJ;$p=5;continue _;case 2:ADb(a,b,c,d);if(C()){break _;}if(Bdl.k.bw){$p=4;continue _;}n=a.cm;o=BkJ;$p=5;continue _;case 3:ADb(a,b,f,d);if(C()){break _;}if(Bdl.k.bw){$p=4;continue _;}n=a.cm;o=BkJ;$p=5;continue _;case 4:AFb(a,
b,d);if(C()){break _;}if(!e){a.dH=1;return 1;}n=Be2.data[e];o=a.cm;$p=7;continue _;case 5:Zj(n,o,l,c,m,l,c,m);if(C()){break _;}n=a.cm;o=BkK;$p=6;case 6:Zj(n,o,l,c,m,l,c,m);if(C()){break _;}$p=4;continue _;case 7:n.fE(o,l,c,m);if(C()){break _;}a.dH=1;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ADP(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=e<<24>>24;g=a.eg.data[d<<4|b]&255;h=a.g4.data;i=b<<11|d<<7|c;j=h[i]&255;if(j==e)return 0;k=(a.f3*16|0)+b|0;l=(a.fY*16|0)+d|0;a.g4.data[i]=f;if(j){L();m=Be2.data[j];n=a.cm;$p=1;continue _;}a:{D7(a.hP,b,c,d,0);L();if(!BgO.data[f]){if(c!=(g-1|0))break a;$p=2;continue _;}if
(c>=g){i=c+1|0;$p=3;continue _;}}if(Bdl.k.bw){$p=4;continue _;}m=a.cm;n=BkJ;$p=5;continue _;case 1:m.lB(n,k,c,l);if(C()){break _;}b:{D7(a.hP,b,c,d,0);L();if(!BgO.data[f]){if(c!=(g-1|0))break b;$p=2;continue _;}if(c>=g){i=c+1|0;$p=3;continue _;}}if(Bdl.k.bw){$p=4;continue _;}m=a.cm;n=BkJ;$p=5;continue _;case 2:ADb(a,b,c,d);if(C()){break _;}if(Bdl.k.bw){$p=4;continue _;}m=a.cm;n=BkJ;$p=5;continue _;case 3:ADb(a,b,i,d);if(C()){break _;}if(Bdl.k.bw){$p=4;continue _;}m=a.cm;n=BkJ;$p=5;continue _;case 4:AFb(a,b,d);if
(C()){break _;}if(!e){a.dH=1;return 1;}m=Be2.data[e];n=a.cm;$p=7;continue _;case 5:Zj(m,n,k,c,l,k,c,l);if(C()){break _;}m=a.cm;n=BkK;$p=6;case 6:Zj(m,n,k,c,l,k,c,l);if(C()){break _;}$p=4;continue _;case 7:m.fE(n,k,c,l);if(C()){break _;}a.dH=1;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function R1(a,b,c,d){return Im(a.hP,b,c,d);}
function AAI(a,b,c,d,e){a.dH=1;D7(a.hP,b,c,d,e);}
function ACw(a,b,c,d,e){return b===BkJ?Im(a.gm,c,d,e):b!==BkK?0:Im(a.h4,c,d,e);}
function AQ1(a,b,c,d,e,f){a.dH=1;if(b===BkJ)D7(a.gm,c,d,e,f);else{if(b!==BkK)return;D7(a.h4,c,d,e,f);}}
function VX(a,b,c,d,e){var f,g;f=Im(a.gm,b,c,d);if(f>0)BkD=1;e=f-e|0;g=Im(a.h4,b,c,d);if(g<=e)g=e;return g;}
function V0(a,b){var c,d,e,f,g;a.sd=1;c=K(b.d/16.0);d=K(b.e/16.0);if(!(c==a.f3&&d==a.fY)){e=DT();f=new T;V(f);B7(e,U(FL(H(f,B(593)),b)));}g=K(b.j/16.0);if(g<0)g=0;if(g>=a.dK.data.length)g=a.dK.data.length-1|0;S(a.dK.data[g],b);}
function ANb(a,b){R$(a,b,K(b.j/16.0));}
function R$(a,b,c){var d,e;if(c<0)c=0;if(c>=a.dK.data.length)c=a.dK.data.length-1|0;if(!Ma(a.dK.data[c],b)){d=DT();e=new T;V(e);B7(d,U(FL(H(e,B(594)),b)));}H8(a.dK.data[c],b);}
function Pw(a,b,c,d){return c<(a.eg.data[d<<4|b]&255)?0:1;}
function ANB(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;f=CQ(a.i0,CY(e));if(f!==null)return f;g=ET(a,b,c,d);L();h=Be2.data[g];f=a.cm;b=(a.f3*16|0)+b|0;d=(a.fY*16|0)+d|0;$p=1;case 1:h.fE(f,b,c,d);if(C()){break _;}return CQ(a.i0,CY(e));default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AJy(a,b,c,d,e){var f;a:{f=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;e.cj=a.cm;e.dI=(a.f3*16|0)+b|0;e.dF=c;e.dO=(a.fY*16|0)+d|0;if(ET(a,b,c,d)){L();if(Be2.data[ET(a,b,c,d)] instanceof Eg){if(a.tA){if(CQ(a.i0,CY(f))!==null)H8(a.cm.fD,CQ(a.i0,CY(f)));S(a.cm.fD,e);}BT(a.i0,CY(f),e);break a;}}B7(DT(),B(595));}}
function AEb(a,b,c,d){var e;e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;if(a.tA)H8(a.cm.fD,Rf(a.i0,CY(e)));}
function J9(a){var b;a.tA=1;DE(a.cm.fD,Ir(a.i0));b=0;while(b<a.dK.data.length){AQs(a.cm,a.dK.data[b]);b=b+1|0;}}
function AO1(a){var b;a.tA=0;Gc(a.cm.fD,Ir(a.i0));b=0;while(b<a.dK.data.length){ARg(a.cm,a.dK.data[b]);b=b+1|0;}}
function SS(a){a.dH=1;}
function AKd(a,b,c,d){var e,f,g,h,i;e=K((c.Q-2.0)/16.0);f=K((c.bj+2.0)/16.0);if(e<0)e=0;if(f>=a.dK.data.length)f=a.dK.data.length-1|0;while(e<=f){g=a.dK.data[e];h=0;while(h<g.p){i=Z(g,h);if(i!==b&&Mo(i.L,c))S(d,i);h=h+1|0;}e=e+1|0;}}
function AMw(a,b,c,d){var e,f,g,h,i;e=K((c.Q-2.0)/16.0);f=K((c.bj+2.0)/16.0);if(e<0)e=0;if(f>=a.dK.data.length)f=a.dK.data.length-1|0;while(e<=f){g=a.dK.data[e];h=0;while(h<g.p){i=Z(g,h);if(Qe(b,Dm(i))&&Mo(i.L,c))S(d,i);h=h+1|0;}e=e+1|0;}}
function Kz(a,b){return a.qd?0:a.sd&&Long_ne(a.cm.ec,a.s_)?1:a.dH;}
function Is(){var a=this;D.call(a);a.jq=0;a.iA=0;a.kC=null;a.ye=null;}
function BlV(a,b,c,d,e,f,g){var h=new Is();AEI(h,a,b,c,d,e,f,g);return h;}
function AEI(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.ye=b;a.jq=c>>4;a.iA=e>>4;i=f>>4;j=h>>4;a.kC=$rt_createMultiArray($rt_arraycls($rt_arraycls(I4)),[(j-a.iA|0)+1|0,(i-a.jq|0)+1|0]);k=a.jq;while(k<=i){l=a.iA;if(l<=j){m=a.kC.data[k-a.jq|0].data;c=l-a.iA|0;$p=1;continue _;}k=k+1|0;}return;case 1:$z=Z7(b,k,l);if(C()){break _;}n
=$z;m[c]=n;l=l+1|0;while(true){if(l<=j){m=a.kC.data[k-a.jq|0].data;c=l-a.iA|0;continue _;}k=k+1|0;if(k>i)break;l=a.iA;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Hy(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jq|0;f=(d>>4)-a.iA|0;return ET(a.kC.data[e].data[f],b&15,c,d&15);}
function AF$(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b>>4)-a.jq|0;f=(d>>4)-a.iA|0;g=a.kC.data[e].data[f];e=b&15;b=d&15;$p=1;case 1:$z=ANB(g,e,c,b);if(C()){break _;}g=$z;return g;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AA0(a,b,c,d){return BkG.data[AAh(a,b,c,d)];}
function AAh(a,b,c,d){return GT(a,b,c,d,1);}
function GT(a,b,c,d,e){var f,g,h,i,j,k;if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){a:{if(e){f=Hy(a,b,c,d);L();if(f==Be7.b)break a;if(f==Bhe.b)break a;}if(c<0)return 0;if(c>=128){f=15-a.ye.gp|0;if(f<0)f=0;return f;}f=(b>>4)-a.jq|0;g=(d>>4)-a.iA|0;return VX(a.kC.data[f].data[g],b&15,c,d&15,a.ye.gp);}g=GT(a,b,c+1|0,d,0);h=GT(a,b+1|0,c,d,0);i=GT(a,b-1|0,c,d,0);j=GT(a,b,c,d+1|0,0);k=GT(a,b,c,d-1|0,0);if(h<=g)h=g;if(i<=h)i=h;if(j<=i)j=i;if(k<=j)k=j;return k;}return 15;}
function ADh(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jq|0;f=(d>>4)-a.iA|0;return R1(a.kC.data[e].data[f],b&15,c,d&15);}
function Oh(a,b,c,d){var e,f;e=Hy(a,b,c,d);if(!e)f=Bgm;else{L();f=Be2.data[e].b$;}return f;}
function ACg(a,b,c,d){var e;L();e=Be2.data[Hy(a,b,c,d)];return e!==null?e.d2():0;}
function Gi(){BF.call(this);}
function BlW(){var a=new Gi();A$t(a);return a;}
function A$t(a){O(a);}
function U3(){Gi.call(this);}
function BlX(){var a=new U3();A61(a);return a;}
function A61(a){O(a);}
function Vn(){D.call(this);}
var BlY=null;function BlZ(){var a=new Vn();APi(a);return a;}
function APi(a){return;}
function AIX(){var b,c;b=$rt_createIntArray(12);c=b.data;c[0]=1;c[1]=4;c[2]=2;c[3]=1024;c[4]=8;c[5]=16;c[6]=128;c[7]=64;c[8]=32;c[9]=256;c[10]=2048;c[11]=512;BlY=b;}
function PU(){Gl.call(this);this.wr=null;}
function A0H(a,b){return AEq(a.wr,b);}
function Nx(a){var b;b=new Vk;VI(b,a.wr);return b;}
function TB(){D.call(this);this.Jt=null;}
function AOI(a){Bb();BdS.requestPointerLock();Nb(0);}
function A_L(a){AOI(a);}
function AQV(){D.call(this);}
function Bl0(){var a=new AQV();A4q(a);return a;}
function A4q(a){return;}
function W5(){var a=this;D$.call(a);a.cu=null;a.g0=0;a.pX=0;a.kX=0;}
function BaQ(){var a=new W5();AVs(a);return a;}
function AVs(a){a.cu=J(Cf,3);a.g0=0;a.pX=0;a.kX=0;}
function A9E(a,b){return a.cu.data[b];}
function A8x(a,b,c){var d;if(a.cu.data[b]===null)return null;if(a.cu.data[b].q<=c){d=a.cu.data[b];a.cu.data[b]=null;return d;}d=EF(a.cu.data[b],c);if(!a.cu.data[b].q)a.cu.data[b]=null;return d;}
function AVJ(a,b,c){a.cu.data[b]=c;if(c!==null&&c.q>64)c.q=64;}
function AUl(a){return 64;}
function AOZ(a,b){return Bx(a.kX,b)/200|0;}
function ADX(a,b){if(!a.pX)a.pX=200;return Bx(a.g0,b)/a.pX|0;}
function WV(a){return a.g0<=0?0:1;}
function AGU(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.g0<=0?0:1;c=0;if(a.g0>0){a.g0=a.g0-1|0;c=1;}if(!a.g0&&Ov(a)){d=a.cu.data[1];if(d===null)e=0;else a:{f=DL(d).cW;if(f<256){L();if(Be2.data[f].b$===Bhn){e=300;break a;}}BB();e=f==Big.cW?100:f!=BhN.cW?0:1600;}a.g0=e;a.pX=e;if(a.g0>0){c=1;if(a.cu.data[1]!==null){d=a.cu.data[1];d.q=d.q-1|0;if(!a.cu.data[1].q)a.cu.data[1]
=null;}}}if(WV(a)&&Ov(a)){a.kX=a.kX+1|0;if(a.kX==200){a.kX=0;ADL(a);c=1;}}else a.kX=0;if(b==(a.g0<=0?0:1)){if(!c)return;d=a.cj;e=a.dI;b=a.dF;c=a.dO;$p=1;continue _;}c=1;b=a.g0<=0?0:1;g=a.cj;f=a.dI;h=a.dF;i=a.dO;$p=2;continue _;case 1:AGJ(d,e,b,c);if(C()){break _;}return;case 2:$z=AEX(g,f,h,i);if(C()){break _;}e=$z;$p=3;case 3:$z=ANK(g,f,h,i);if(C()){break _;}j=$z;if(!b){L();b=Bhf.b;$p=4;continue _;}L();b=Bhg.b;$p=5;continue _;case 4:APK(g,f,h,i,b);if(C()){break _;}$p=6;continue _;case 5:APK(g,f,h,i,b);if(C())
{break _;}$p=6;case 6:AKK(g,f,h,i,e);if(C()){break _;}$p=7;case 7:AF9(g,f,h,i,j);if(C()){break _;}if(!c)return;d=a.cj;e=a.dI;b=a.dF;c=a.dO;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Ov(a){var b,c;if(a.cu.data[0]===null)return 0;b=U6(a,DL(a.cu.data[0]).cW);if(b<0)b=0;else if(a.cu.data[2]===null)b=1;else if(a.cu.data[2].bC!=b)b=0;else if(a.cu.data[2].q<64&&a.cu.data[2].q<EB(a.cu.data[2]))b=1;else{c=a.cu.data[2].q;BB();b=c>=Bhr.data[b].eZ?0:1;}return b;}
function ADL(a){var b,c;if(Ov(a)){b=U6(a,DL(a.cu.data[0]).cW);if(a.cu.data[2]===null)a.cu.data[2]=KN(b,1);else if(a.cu.data[2].bC==b){c=a.cu.data[2];c.q=c.q+1|0;}c=a.cu.data[0];c.q=c.q-1|0;if(a.cu.data[0].q<=0)a.cu.data[0]=null;}}
function U6(a,b){L();if(b==Bfs.b){BB();b=Bh3.cW;}else if(b==Bft.b){BB();b=Bh4.cW;}else if(b==Bha.b){BB();b=BhO.cW;}else if(b==Bfn.b)b=Bfg.b;else{BB();b=b==Bgt.cW?BiN.cW:b!=Bfa.b?(-1):Be8.b;}return b;}
function AAf(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.cj;c=a.dI;d=a.dF;e=a.dO;$p=1;case 1:AGJ(b,c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function To(){D$.call(this);this.h2=null;}
function Bbu(){var a=new To();A2o(a);return a;}
function A2o(a){a.h2=J(Cf,36);}
function AV3(a){return 27;}
function Rl(a,b){return a.h2.data[b];}
function A1$(a,b,c){var d;if(a.h2.data[b]===null)return null;if(a.h2.data[b].q<=c){d=a.h2.data[b];a.h2.data[b]=null;return d;}d=EF(a.h2.data[b],c);if(!a.h2.data[b].q)a.h2.data[b]=null;return d;}
function AHO(a,b,c){a.h2.data[b]=c;if(c!==null&&c.q>64)c.q=64;}
function A8Q(a){return B(263);}
function A7A(a){return 64;}
function CR(){D.call(this);this.gw=null;}
function Bl1(){var a=new CR();Cx(a);return a;}
function Cx(a){a.gw=null;}
function VR(a){return a.gw!==null?a.gw:B(3);}
function AXV(a,b){a.gw=b;return a;}
function Na(b){var c,d;c=Oc(b);if(!c){b=new Od;Cx(b);return b;}d=AFj(c);d.gw=GV(b);d.gL(b);return d;}
function R7(b,c){K0(c,b.fc());if(b.fc()){Xz(c,VR(b));b.gS(c);}}
function AFj(b){var c;switch(b){case 0:c=new Od;Cx(c);return c;case 1:c=new MM;Cx(c);return c;case 2:c=new Nc;Cx(c);return c;case 3:c=new LD;Cx(c);return c;case 4:c=new Om;Cx(c);return c;case 5:c=new Pr;Cx(c);return c;case 6:c=new MF;Cx(c);return c;case 7:c=new MY;Cx(c);return c;case 8:c=new OQ;Cx(c);return c;case 9:return Mq();case 10:return G$();default:}return null;}
function AP2(){CR.call(this);this.cK=null;}
function G$(){var a=new AP2();A8Z(a);return a;}
function A8Z(a){Cx(a);a.cK=De();}
function A7r(a,b){var c;c=Nx(Ir(a.cK));while(F$(c)){R7(Mx(c),b);}K0(b,0);}
function A9y(a,b){var c;Vi(a.cK);while(true){c=Na(b);if(!c.fc())break;BT(a.cK,VR(c),c);}}
function A7p(a){return 10;}
function HE(a,b,c){var d;d=a.cK;c.gw=b;BT(d,b,c);}
function JQ(a,b,c){var d,e;d=a.cK;e=new MM;Cx(e);e.ty=c;e.gw=b;BT(d,b,e);}
function Fr(a,b,c){var d,e;d=a.cK;e=new Nc;Cx(e);e.ts=c;e.gw=b;BT(d,b,e);}
function Gx(a,b,c){var d,e;d=a.cK;e=new LD;Cx(e);e.r$=c;e.gw=b;BT(d,b,e);}
function Ia(a,b,c){var d,e;d=a.cK;e=new Om;Cx(e);e.s6=c;e.gw=b;BT(d,b,e);}
function ASm(a,b,c){var d,e;d=a.cK;e=A66(c);e.gw=b;BT(d,b,e);}
function IO(a,b,c){var d,e;d=a.cK;e=new MY;Cx(e);e.mp=c;e.gw=b;BT(d,b,e);}
function AN5(a,b,c){var d;d=a.cK;c.gw=b;BT(d,b,c);}
function S8(a,b,c){JQ(a,b,(!c?0:1)<<24>>24);}
function Y$(a,b){return DZ(a.cK,b);}
function LU(a,b){return !DZ(a.cK,b)?0:CQ(a.cK,b).ty;}
function FI(a,b){return !DZ(a.cK,b)?0:CQ(a.cK,b).ts;}
function FT(a,b){return !DZ(a.cK,b)?0:CQ(a.cK,b).r$;}
function Mv(a,b){return !DZ(a.cK,b)?Long_ZERO:CQ(a.cK,b).s6;}
function AMS(a,b){return !DZ(a.cK,b)?0.0:CQ(a.cK,b).np;}
function IG(a,b){return !DZ(a.cK,b)?$rt_createByteArray(0):CQ(a.cK,b).mp;}
function MO(a,b){return !DZ(a.cK,b)?G$():CQ(a.cK,b);}
function Kt(a,b){return !DZ(a.cK,b)?Mq():CQ(a.cK,b);}
function Uz(a,b){return !LU(a,b)?0:1;}
function Qb(){B8.call(this);}
function Bl2(){var a=new Qb();A_j(a);return a;}
function A_j(a){O(a);}
function SQ(){B8.call(this);}
function Bl3(){var a=new SQ();AY4(a);return a;}
function AY4(a){O(a);}
function R6(){GZ.call(this);this.BN=0;}
function AV7(a){var b;b=new T;V(b);return U(Be(H(b,B(596)),a.BN));}
function P9(){GZ.call(this);this.E4=0;}
function AVA(a){var b;b=new T;V(b);return U(Be(H(b,B(597)),a.E4));}
function IL(){var a=this;D.call(a);a.l9=0;a.ro=0;a.lG=null;a.hl=null;a.st=null;a.iy=null;}
function Bl4(a){var b=new IL();VI(b,a);return b;}
function VI(a,b){a.iy=b;a.ro=b.g_;a.lG=null;}
function F$(a){if(a.lG!==null)return 1;while(a.l9<a.iy.cN.data.length){if(a.iy.cN.data[a.l9]!==null)return 1;a.l9=a.l9+1|0;}return 0;}
function UE(a){var b;if(a.ro==a.iy.g_)return;b=new K_;O(b);M(b);}
function Wi(a){var b,c,d;UE(a);if(!F$(a)){b=new J8;O(b);M(b);}if(a.lG===null){c=a.iy.cN.data;d=a.l9;a.l9=d+1|0;a.hl=c[d];a.lG=a.hl.eE;a.st=null;}else{if(a.hl!==null)a.st=a.hl;a.hl=a.lG;a.lG=a.lG.eE;}}
function AD4(a){var b,c;UE(a);if(a.hl===null){b=new D2;O(b);M(b);}if(a.st!==null)a.st.eE=a.hl.eE;else{c=a.hl.pY&(a.iy.cN.data.length-1|0);a.iy.cN.data[c]=a.iy.cN.data[c].eE;}a.hl=null;a.ro=a.ro+1|0;b=a.iy;b.g_=b.g_+1|0;b=a.iy;b.ga=b.ga-1|0;}
function Vk(){IL.call(this);}
function Mx(a){Wi(a);return a.hl.e6;}
function WC(){var a=this;D.call(a);a.AE=null;a.EN=null;a.wo=0;a.qL=0;}
function N3(a){return Fl(a.AE);}
function AJC(a,b){return Ct(a.EN)<b?0:1;}
function A$Q(a,b){a.wo=b;}
function A9w(a,b){a.qL=b;}
function AEN(){var a=this;CT.call(a);a.pa=null;a.y1=null;a.lP=null;}
function AI2(a,b){var c=new AEN();A1R(c,a,b);return c;}
function A1R(a,b,c){DQ(a);a.y1=B(598);a.pa=b;a.lP=c;}
function ASg(a){var b,c,d;b=0;while(b<a.lP.z7){c=a.bH;d=Sp(b,((a.bn/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bE/6|0)+(24*(b>>1)|0)|0,Q8(a.lP,b));S(c,d);if(a.I.k.bw&&!(b!=5&&b!=6&&b!=9))d.gI=0;b=b+1|0;}S(a.bH,Dk(100,(a.bn/2|0)-100|0,((a.bE/6|0)+120|0)+22|0,B(599)));S(a.bH,Dk(200,(a.bn/2|0)-100|0,(a.bE/6|0)+168|0,B(600)));}
function AD$(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gI){if(b.cn<100){D_(a.lP,b.cn,1);b.kq=Q8(a.lP,b.cn);if(b.cn==10){c=a.I;d=AI2(a.pa,a.I.k);$p=2;continue _;}}if(b.cn==100){c=a.I;d=new N4;e=a.lP;DQ(d);d.un=B(601);d.jy=(-1);d.uM=a;d.iS=e;$p=1;continue _;}if(b.cn==200){b=a.I;c=a.pa;$p=3;continue _;}}return;case 1:AD8(c,d);if(C()){break _;}if(b.cn!=200)return;b=a.I;c=a.pa;$p=3;continue _;case 2:AD8(c,d);if(C())
{break _;}if(b.cn!=100){if(b.cn!=200)return;b=a.I;c=a.pa;$p=3;continue _;}c=a.I;d=new N4;e=a.lP;DQ(d);d.un=B(601);d.jy=(-1);d.uM=a;d.iS=e;$p=1;continue _;case 3:AD8(b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AGs(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABs(a);if(C()){break _;}DF(a,a.b1,a.y1,a.bn/2|0,20,16777215);$p=2;case 2:AFT(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function OK(){var a=this;CT.call(a);a.oE=null;a.yM=null;a.xS=0;}
function A$_(a){var b=new OK();AEt(b,a);return b;}
function AEt(a,b){DQ(a);a.yM=B(602);a.xS=0;a.oE=b;}
function API(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=5){a.tc();return;}c=new T;V(c);c=H(c,B(603));d=b+1|0;c=U(Be(c,d));$p=1;case 1:$z=ASt(c);if(C()){break _;}c=$z;if(c!==null){c=new T;V(c);e=U(Be(H(c,B(604)),d));c=new T;V(c);f=U(H(Be(H(c,B(603)),d),B(364)));Bb();c=BeS;$p=2;continue _;}S(a.bH,Dk(b,(a.bn/2|0)-100|0,(a.bE/6|0)+(24*b|0)|0,B(605)));b=d;if(b>=5){a.tc();return;}c=new T;V(c);c
=H(c,B(603));d=b+1|0;c=U(Be(c,d));continue _;case 2:$z=A_Y(c,f);if(C()){break _;}c=$z;g=c===null?(-1):c.byteLength;c=new T;V(c);f=U(H(AKE(H(H(c,e),B(606)),g/100.0),B(607)));S(a.bH,Dk(b,(a.bn/2|0)-100|0,(a.bE/6|0)+(24*b|0)|0,f));b=d;if(b>=5){a.tc();return;}c=new T;V(c);c=H(c,B(603));d=b+1|0;c=U(Be(c,d));$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function ANF(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=new T;V(c);c=U(Be(H(c,B(603)),b));$p=1;case 1:$z=ASt(c);if(C()){break _;}c=$z;if(c===null)c=null;else{c=new T;V(c);c=U(Be(H(c,B(603)),b));}return c;default:E_();}}C3().s(a,b,c,$p);}
function AXS(a){S(a.bH,Dk(5,(a.bn/2|0)-100|0,((a.bE/6|0)+120|0)+12|0,B(608)));S(a.bH,Dk(6,(a.bn/2|0)-100|0,(a.bE/6|0)+168|0,B(609)));}
function ASO(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gI){if(b.cn<5){c=b.cn+1|0;$p=1;continue _;}if(b.cn==5){b=a.I;d=new U9;AEt(d,a);d.yM=B(610);$p=2;continue _;}if(b.cn==6){b=a.I;d=a.oE;$p=3;continue _;}}return;case 1:a.I0(c);if(C()){break _;}return;case 2:AD8(b,d);if(C()){break _;}return;case 3:AD8(b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AK2(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I;d=null;$p=1;case 1:AD8(c,d);if(C()){break _;}if(a.xS)return;a.xS=1;d=a.I;c=new T;V(c);c=U(Be(H(c,B(603)),b));$p=2;case 2:AIa(d,c);if(C()){break _;}d=a.I;c=null;$p=3;case 3:AD8(d,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AEQ(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABs(a);if(C()){break _;}DF(a,a.b1,a.yM,a.bn/2|0,20,16777215);$p=2;case 2:AFT(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function Mg(){Gi.call(this);}
function Bl5(){var a=new Mg();A7n(a);return a;}
function A7n(a){O(a);}
function Tj(){Gi.call(this);}
function Bl6(){var a=new Tj();A$U(a);return a;}
function A$U(a){O(a);}
function ALJ(){D.call(this);}
function Bl7(){var a=new ALJ();A7D(a);return a;}
function A7D(a){return;}
function AAp(){D.call(this);}
function Bl8(){var a=new AAp();A8K(a);return a;}
function A8K(a){return;}
function AMv(){var a=this;D.call(a);a.o=null;a.fS=0;a.uh=null;a.zv=0;a.ix=0;a.kn=0;a.dn=0;a.va=null;}
function BbJ(){var a=new AMv();ATm(a);return a;}
function ALV(a,b){var c,d,e,f,g,h,i,j;c=new VG;c.qW=(-1);c.sm=(-1);c.FR=a;c.EV=a.va;c.pL=b;c.qW=0;c.sm=Bg(c.pL);d=new WD;e=c.qW;f=c.sm;g=a.ix;h=AQ$(a);i=AEh(a);d.k3=(-1);j=g+1|0;d.zS=j;d.gM=$rt_createIntArray(j*2|0);d.oV=$rt_createIntArray(i);Nf(d.oV,(-1));if(h>0)d.xI=$rt_createIntArray(h);Nf(d.gM,(-1));Xr(d,b,e,f);c.dA=d;return c;}
function AI6(a,b,c){var d,e,f,g,h,i;d=Ch();e=ALV(a,b);f=0;g=0;if(!Bg(b)){h=J(B4,1);h.data[0]=B(3);return h;}while(ABl(e)){i=f+1|0;if(i>=c&&c>0)break;S(d,Ev(b,g,AHn(e)));g=AK_(e);f=i;}a:{S(d,Ev(b,g,Bg(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(Bg(Z(d,f)))break a;Em(d,f);}}if(f<0)f=0;return UN(d,J(B4,f));}
function AI5(a,b){return AI6(a,b,0);}
function Nq(a){return a.o.eO;}
function S5(a,b,c,d){var e,f,g,h,i;e=Ch();f=a.fS;g=0;if(c!=a.fS)a.fS=c;a:{switch(b){case -1073741784:h=new QQ;c=a.dn+1|0;a.dn=c;Hb(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new P3;c=a.dn+1|0;a.dn=c;Hb(h,c);break a;case -33554392:h=new Re;c=a.dn+1|0;a.dn=c;Hb(h,c);break a;default:a.ix=a.ix+1|0;if(d!==null)h=BcM(a.ix);else{h=Bcg();g=1;}if(a.ix<=(-1))break a;if(a.ix>=10)break a;a.uh.data[a.ix]=h;break a;}h=BbI();}while(true){if(F8(a.o)&&a.o.H==(-536870788)){d=A$V(C0(a,
2),C0(a,64));while(!Eo(a.o)&&F8(a.o)&&!(a.o.H&&a.o.H!=(-536870788)&&a.o.H!=(-536870871))){Dq(d,BG(a.o));if(a.o.cG!=(-536870788))continue;BG(a.o);}i=L7(a,d);i.ca(h);}else if(a.o.cG==(-536870788)){i=II(h);BG(a.o);}else{i=Up(a,h);if(a.o.cG==(-536870788))BG(a.o);}if(i!==null)S(e,i);if(Eo(a.o))break;if(a.o.cG==(-536870871))break;}if(a.o.q0==(-536870788))S(e,II(h));if(a.fS!=f&&!g){a.fS=f;AJK(a.o,a.fS);}switch(b){case -1073741784:break;case -536870872:d=new Tl;GS(d,e,h);return d;case -268435416:d=new WT;GS(d,e,h);return d;case -134217688:d
=new Vl;GS(d,e,h);return d;case -67108824:d=new Rr;GS(d,e,h);return d;case -33554392:d=new EX;GS(d,e,h);return d;default:switch(e.p){case 0:break;case 1:return BcE(Z(e,0),h);default:return BaT(e,h);}return II(h);}d=new Li;GS(d,e,h);return d;}
function AQc(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!Eo(a.o)&&F8(a.o)){e=b.data;c=BG(a.o);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.o.cG;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;BG(a.o);f=a.o.cG;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;BG(a.o);return A$K(e,3);}return A$K(e,2);}if(!C0(a,2))return AAt(b[0]);if(C0(a,64))return A9p(b[0]);return A4O(b[0]);}e=b.data;c=1;while(c<4&&!Eo(a.o)&&F8(a.o)){f=c+1|0;e[c]=BG(a.o);c=f;}if(c==1){f=e[0];if(!(Bl9.Bm(f)
==Bl$?0:1))return SX(a,e[0]);}if(!C0(a,2))return Bdb(b,c);if(C0(a,64)){g=new SR;Po(g,b,c);return g;}g=new V_;Po(g,b,c);return g;}
function Up(a,b){var c,d,e,f;if(F8(a.o)&&!LC(a.o)&&NF(a.o.H)){if(C0(a,128)){c=AQc(a);if(!Eo(a.o)&&!(a.o.cG==(-536870871)&&!(b instanceof HS))&&a.o.cG!=(-536870788)&&!F8(a.o))c=MQ(a,b,c);}else if(!TX(a.o)&&!WE(a.o)){d=new LB;V(d);while(!Eo(a.o)&&F8(a.o)&&!TX(a.o)&&!WE(a.o)&&!(!(!LC(a.o)&&!a.o.H)&&!(!LC(a.o)&&NF(a.o.H))&&a.o.H!=(-536870871)&&(a.o.H&(-2147418113))!=(-2147483608)&&a.o.H!=(-536870788)&&a.o.H!=(-536870876))){e=BG(a.o);if(!ML(e))Dy(d,e&65535);else Hi(d,Iw(e));}if(!C0(a,2))c=BaJ(d);else if(C0(a,64))c
=Bc$(d);else{c=new O8;EN(c);c.pM=U(d);c.dk=OJ(d);}}else c=MQ(a,b,Xb(a,b));}else if(a.o.cG!=(-536870871))c=MQ(a,b,Xb(a,b));else{if(b instanceof HS)M(CN(B(3),a.o.eO,a.o.il));c=II(b);}if(!Eo(a.o)&&!(a.o.cG==(-536870871)&&!(b instanceof HS))&&a.o.cG!=(-536870788)){f=Up(a,b);if(c instanceof D6&&!(c instanceof GC)&&!(c instanceof DW)&&!(c instanceof FU)){b=c;if(!f.d1(b.bR)){c=new Sy;F3(c,b.bR,b.s,b.p6);c.bR.ca(c);}}if((f.oL()&65535)!=43)c.ca(f);else c.ca(f.bR);}else{if(c===null)return null;c.ca(b);}if((c.oL()&65535)
!=43)return c;return c.bR;}
function MQ(a,b,c){var d,e,f,g;d=a.o.cG;if(c!==null&&!(c instanceof CJ)){switch(d){case -2147483606:BG(a.o);e=new Tb;Ef(e,c,b,d);c.ca(Bl_);return e;case -2147483605:BG(a.o);e=new UH;Ef(e,c,b,(-2147483606));c.ca(Bl_);return e;case -2147483585:BG(a.o);e=new PW;Ef(e,c,b,(-536870849));c.ca(Bl_);return e;case -2147483525:e=new O5;f=G5(a.o);d=a.kn+1|0;a.kn=d;M6(e,f,c,b,(-536870849),d);c.ca(Bl_);return e;case -1073741782:case -1073741781:BG(a.o);f=new QF;Ef(f,c,b,d);c.ca(f);return f;case -1073741761:BG(a.o);f=new U1;Ef(f,
c,b,(-536870849));c.ca(b);return f;case -1073741701:f=new RZ;e=G5(a.o);g=a.kn+1|0;a.kn=g;M6(f,e,c,b,(-536870849),g);c.ca(f);return f;case -536870870:case -536870869:BG(a.o);if(c.oL()!=(-2147483602)){f=new DW;Ef(f,c,b,d);}else if(C0(a,32)){f=new QG;Ef(f,c,b,d);}else{f=new T3;e=Uu(a.fS);Ef(f,c,b,d);f.uC=e;}c.ca(f);return f;case -536870849:BG(a.o);f=new Hv;Ef(f,c,b,(-536870849));c.ca(b);return f;case -536870789:f=new G8;e=G5(a.o);g=a.kn+1|0;a.kn=g;M6(f,e,c,b,(-536870849),g);c.ca(f);return f;default:}return c;}e
=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:BG(a.o);f=new XE;F3(f,e,b,d);e.s=f;return f;case -2147483585:BG(a.o);c=new Su;F3(c,e,b,(-2147483585));return c;case -2147483525:c=new Un;QZ(c,G5(a.o),e,b,(-2147483525));return c;case -1073741782:case -1073741781:BG(a.o);f=new UZ;F3(f,e,b,d);e.s=f;return f;case -1073741761:BG(a.o);c=new Wb;F3(c,e,b,(-1073741761));return c;case -1073741701:c=new Qq;QZ(c,G5(a.o),e,b,(-1073741701));return c;case -536870870:case -536870869:BG(a.o);f=Ba$(e,b,d);e.s
=f;return f;case -536870849:BG(a.o);c=new FU;F3(c,e,b,(-536870849));return c;case -536870789:return Bb$(G5(a.o),e,b,(-536870789));default:}return c;}
function Xb(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof HS;while(true){a:{e=KF(a.o);if((e&(-2147418113))==(-2147483608)){BG(a.o);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.fS=f;else{if(e!=(-1073741784))f=a.fS;c=S5(a,e,f,b);if(KF(a.o)!=(-536870871))M(CN(B(3),EC(a.o),HC(a.o)));BG(a.o);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.ix<g)M(CN(B(3),
EC(a.o),HC(a.o)));BG(a.o);a.dn=a.dn+1|0;c=!C0(a,2)?BbP(g,a.dn):C0(a,64)?BaG(g,a.dn):Bc9(g,a.dn);a.uh.data[g].w6=1;a.zv=1;break a;case -2147483583:break;case -2147483582:BG(a.o);c=A$x(0);break a;case -2147483577:BG(a.o);c=Baz();break a;case -2147483558:BG(a.o);c=new SO;g=a.dn+1|0;a.dn=g;AQN(c,g);break a;case -2147483550:BG(a.o);c=A$x(1);break a;case -2147483526:BG(a.o);c=Bbr();break a;case -536870876:break c;case -536870866:BG(a.o);if(C0(a,32)){c=BbB();break a;}c=Bbb(Uu(a.fS));break a;case -536870821:BG(a.o);h
=0;if(KF(a.o)==(-536870818)){h=1;BG(a.o);}c=ADU(a,h,b);if(KF(a.o)!=(-536870819))M(CN(B(3),EC(a.o),HC(a.o)));Uf(a.o,1);BG(a.o);break a;case -536870818:BG(a.o);a.dn=a.dn+1|0;if(!C0(a,8)){c=A1w();break a;}c=BcW(Uu(a.fS));break a;case 0:i=P0(a.o);if(i!==null)c=L7(a,i);else{if(Eo(a.o)){c=II(b);break a;}c=AAt(e&65535);}BG(a.o);break a;default:break b;}BG(a.o);c=A1w();break a;}BG(a.o);a.dn=a.dn+1|0;if(C0(a,8)){if(C0(a,1)){c=BaH(a.dn);break a;}c=Bad(a.dn);break a;}if(C0(a,1)){c=BaY(a.dn);break a;}c=Bbj(a.dn);break a;}if
(e>=0&&!H1(a.o)){c=SX(a,e);BG(a.o);}else if(e==(-536870788))c=II(b);else{if(e!=(-536870871))M(CN(!H1(a.o)?SL(e&65535):P0(a.o).gs(),EC(a.o),HC(a.o)));if(d)M(CN(B(3),EC(a.o),HC(a.o)));c=II(b);}}}if(e!=(-16777176))break;}return c;}
function ADU(a,b,c){var d;d=L7(a,Ij(a,b));d.ca(c);return d;}
function Ij(a,b){var c,d,e,f,g,h,i,j,$$je;c=A$V(C0(a,2),C0(a,64));Fx(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Eo(a.o))break a;f=a.o.cG==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.o.cG){case -536870874:if(d>=0)Dq(c,d);d=BG(a.o);if(a.o.cG!=(-536870874)){d=38;break d;}if(a.o.H==(-536870821)){BG(a.o);e=1;d=(-1);break d;}BG(a.o);if(g){c=Ij(a,0);break d;}if(a.o.cG==(-536870819))break d;SE(c,Ij(a,0));break d;case -536870867:if(!g&&a.o.H!=(-536870819)&&a.o.H!=(-536870821)&&d>=0){BG(a.o);h=a.o.cG;if(H1(a.o))break c;if
(h<0&&a.o.H!=(-536870819)&&a.o.H!=(-536870821)&&d>=0)break c;e:{try{if(NF(h))break e;h=h&65535;break e;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){break b;}else{throw $$e;}}}try{CH(c,d,h);}catch($$e){$$je=Bh($$e);if($$je instanceof BF){break b;}else{throw $$e;}}BG(a.o);d=(-1);break d;}if(d>=0)Dq(c,d);d=45;BG(a.o);break d;case -536870821:if(d>=0){Dq(c,d);d=(-1);}BG(a.o);i=0;if(a.o.cG==(-536870818)){BG(a.o);i=1;}if(!e)AIr(c,Ij(a,i));else SE(c,Ij(a,i));e=0;BG(a.o);break d;case -536870819:if(d>=0)Dq(c,d);d=
93;BG(a.o);break d;case -536870818:if(d>=0)Dq(c,d);d=94;BG(a.o);break d;case 0:if(d>=0)Dq(c,d);j=a.o.k4;if(j===null)d=0;else{ASL(c,j);d=(-1);}BG(a.o);break d;default:}if(d>=0)Dq(c,d);d=BG(a.o);}g=0;}M(CN(B(3),Nq(a),a.o.il));}M(CN(B(3),Nq(a),a.o.il));}if(!f){if(d>=0)Dq(c,d);return c;}M(CN(B(3),Nq(a),a.o.il-1|0));}
function SX(a,b){var c,d,e;c=ML(b);if(C0(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A4O(b&65535);}if(C0(a,64)&&b>128){if(c){d=new Ti;EN(d);d.dk=2;d.Ap=GQ(GP(b));return d;}if(PN(b))return AY_(b&65535);if(!Q5(b))return A9p(b&65535);return A6S(b&65535);}}if(!c){if(PN(b))return AY_(b&65535);if(!Q5(b))return AAt(b&65535);return A6S(b&65535);}d=new EZ;EN(d);d.dk=2;d.kF=b;e=Iw(b).data;d.tG=e[0];d.si=e[1];return d;}
function L7(a,b){var c,d,e;if(!AN$(b)){if(!b.b_){if(b.nW())return AWY(b);return A1r(b);}if(!b.nW())return A67(b);c=new M7;Wk(c,b);return c;}c=Y6(b);d=new OT;CA(d);d.z8=c;d.HE=c.cl;if(!b.b_){if(b.nW())return AEB(AWY(Kk(b)),d);return AEB(A1r(Kk(b)),d);}if(!b.nW())return AEB(A67(Kk(b)),d);c=new Qf;e=new M7;Wk(e,Kk(b));AHz(c,e,d);return c;}
function A3M(a){return a.ix;}
function AQ$(a){return a.kn+1|0;}
function AEh(a){return a.dn+1|0;}
function Kn(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function C0(a,b){return (a.fS&b)!=b?0:1;}
function ATm(a){a.uh=J(DV,10);a.ix=(-1);a.kn=(-1);a.dn=(-1);}
function AB$(){LS.call(this);}
function Sp(a,b,c,d){var e=new AB$();A6V(e,a,b,c,d);return e;}
function A6V(a,b,c,d,e){SN(a,b,c,d,150,20,e);}
function N4(){var a=this;CT.call(a);a.uM=null;a.un=null;a.iS=null;a.jy=0;}
function AJH(a){var b;b=0;while(b<a.iS.ni.data.length){S(a.bH,Sp(b,((a.bn/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bE/6|0)+(24*(b>>1)|0)|0,Lm(a.iS,b)));b=b+1|0;}S(a.bH,Dk(200,(a.bn/2|0)-100|0,(a.bE/6|0)+168|0,B(600)));}
function AIu(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.iS.ni.data.length){Z(a.bH,c).kq=Lm(a.iS,c);c=c+1|0;}if(b.cn!=200){a.jy=b.cn;d=new T;V(d);b.kq=U(H(H(H(d,B(582)),Lm(a.iS,b.cn)),B(583)));return;}b=a.I;d=a.uM;$p=1;case 1:AD8(b,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AL2(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jy>=0){Yb(a.iS,a.jy,c);Z(a.bH,a.jy).kq=Lm(a.iS,a.jy);a.jy=(-1);return;}$p=1;case 1:YY(a,b,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AGM(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABs(a);if(C()){break _;}DF(a,a.b1,a.un,a.bn/2|0,20,16777215);$p=2;case 2:AFT(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function U9(){OK.call(this);}
function A18(a){S(a.bH,Dk(6,(a.bn/2|0)-100|0,(a.bE/6|0)+168|0,B(609)));}
function AMl(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANF(a,b);if(C()){break _;}c=$z;if(c===null)return;d=a.I;e=new Vd;f=new T;V(f);f=U(H(H(H(f,B(611)),c),B(612)));DQ(e);e.Ck=a;e.B_=B(613);e.Cb=f;e.y9=b;$p=2;case 2:AD8(d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ARi(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b){$p=2;continue _;}d=a.I;e=a.oE;$p=1;case 1:AD8(d,e);if(C()){break _;}return;case 2:$z=ANF(a,c);if(C()){break _;}d=$z;e=new T;V(e);f=U(H(H(e,B(614)),d));Bb();$p=3;case 3:$z=AQf(f);if(C()){break _;}b=$z;if(!b){d=a.I;e=a.oE;$p=1;continue _;}b=1;c=1;g=Q6();d=BeS;$p=4;case 4:A5G(d,f,b,c,g);if(C()){break _;}e=JI(g);while(true){if(!GM(e)){e=JI(g);while
(GM(e)){d=GE(e);if(d.m8){d=d.mh;$p=7;continue _;}}$p=6;continue _;}d=GE(e);if(!d.m8)break;}d=d.mh;$p=5;case 5:AMd(d);if(C()){break _;}while(true){if(!GM(e)){e=JI(g);while(GM(e)){d=GE(e);if(d.m8){d=d.mh;$p=7;continue _;}}$p=6;continue _;}d=GE(e);if(d.m8)continue;else break;}d=d.mh;continue _;case 6:AMd(f);if(C()){break _;}d=a.I;e=a.oE;$p=1;continue _;case 7:AMd(d);if(C()){break _;}while(GM(e)){d=GE(e);if(!d.m8)continue;else{d=d.mh;continue _;}}$p=6;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function N7(){var a=this;D.call(a);a.kI=0.0;a.kx=0.0;a.H1=0;a.uu=0;}
function Bma(){var a=new N7();ADo(a);return a;}
function ADo(a){a.kI=0.0;a.kx=0.0;a.H1=0;a.uu=0;}
function Yx(){var a=this;N7.call(a);a.j8=null;a.nt=null;}
function V$(a){var b=new Yx();A0b(b,a);return b;}
function A0b(a,b){ADo(a);a.j8=$rt_createBooleanArray(10);a.nt=b;}
function APG(a,b,c){var d;d=(-1);if(b==a.nt.t8.bJ)d=0;if(b==a.nt.xz.bJ)d=1;if(b==a.nt.t0.bJ)d=2;if(b==a.nt.uE.bJ)d=3;if(b==a.nt.yY.bJ)d=4;if(d>=0)a.j8.data[d]=c;}
function APb(a){var b;b=0;while(b<10){a.j8.data[b]=0;b=b+1|0;}}
function AOO(a,b){a.kI=0.0;a.kx=0.0;if(a.j8.data[0])a.kx=a.kx+1.0;if(a.j8.data[1])a.kx=a.kx-1.0;if(a.j8.data[2])a.kI=a.kI+1.0;if(a.j8.data[3])a.kI=a.kI-1.0;a.uu=a.j8.data[4];}
function Q7(){D.call(this);this.nc=null;}
var Bmb=null;function AZe(){AZe=Br(Q7);A4m();}
function Baf(){var a=new Q7();ALO(a);return a;}
function Wy(){AZe();return Bmb;}
function ALO(a){var b,c,d,e;AZe();WQ(a);a.nc=Ch();AHB(BbK(),a);XG(Bao(),a);AD_(BbH(),a);AJ6(Bbn(),a);Yn(BaE(),a);ASV(Bbd(),a);b=new Cf;L();Vf(b,Bfq,1);c=J(D,5);d=c.data;d[0]=B(615);d[1]=B(615);d[2]=B(615);d[3]=BK(35);BB();d[4]=Bgs;Ck(a,b,c);e=G1(Bfx,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(617);d[2]=B(616);d[3]=BK(88);d[4]=Bgr;d[5]=BK(35);d[6]=Bfn;Ck(a,e,c);e=G1(Be7,3);c=J(D,3);d=c.data;d[0]=B(615);d[1]=BK(35);d[2]=Bfa;Ck(a,e,c);e=G1(Bgo,1);c=J(D,5);d=c.data;d[0]=B(618);d[1]=B(615);d[2]=B(618);d[3]=BK(35);d[4]
=Big;Ck(a,e,c);e=EL(BiQ,1);c=J(D,5);d=c.data;d[0]=B(619);d[1]=B(619);d[2]=B(619);d[3]=BK(35);d[4]=Bfc;Ck(a,e,c);e=EL(Bhq,1);c=J(D,7);d=c.data;d[0]=B(615);d[1]=B(615);d[2]=B(620);d[3]=BK(35);d[4]=Bfc;d[5]=BK(88);d[6]=Big;Ck(a,e,c);e=G1(Bfc,4);c=J(D,3);d=c.data;d[0]=B(621);d[1]=BK(35);d[2]=Bfd;Ck(a,e,c);e=EL(Big,4);c=J(D,4);d=c.data;d[0]=B(621);d[1]=B(621);d[2]=BK(35);d[3]=Bfc;Ck(a,e,c);e=G1(Bff,4);c=J(D,6);d=c.data;d[0]=B(72);d[1]=B(621);d[2]=BK(88);d[3]=BhN;d[4]=BK(35);d[5]=Big;Ck(a,e,c);e=EL(Bih,4);c=J(D,4);d
=c.data;d[0]=B(618);d[1]=B(622);d[2]=BK(35);d[3]=Bfc;Ck(a,e,c);e=G1(Bhj,16);c=J(D,7);d=c.data;d[0]=B(623);d[1]=B(616);d[2]=B(623);d[3]=BK(88);d[4]=Bh3;d[5]=BK(35);d[6]=Big;Ck(a,e,c);e=EL(BiU,1);c=J(D,4);d=c.data;d[0]=B(618);d[1]=B(615);d[2]=BK(35);d[3]=Bh3;Ck(a,e,c);e=EL(BiR,1);c=J(D,4);d=c.data;d[0]=B(618);d[1]=B(622);d[2]=BK(35);d[3]=Bh3;Ck(a,e,c);e=EL(Bh0,1);c=J(D,6);d=c.data;d[0]=B(624);d[1]=B(625);d[2]=BK(65);d[3]=Bh3;d[4]=BK(66);d[5]=BhM;Ck(a,e,c);e=EL(Bis,1);c=J(D,3);d=c.data;d[0]=B(615);d[1]=BK(35);d[2]
=BhQ;Ck(a,e,c);e=G1(Bg9,4);c=J(D,5);d=c.data;d[0]=B(626);d[1]=B(627);d[2]=B(615);d[3]=BK(35);d[4]=Bfc;Ck(a,e,c);e=G1(Bhk,4);c=J(D,5);d=c.data;d[0]=B(626);d[1]=B(627);d[2]=B(615);d[3]=BK(35);d[4]=Bfa;Ck(a,e,c);e=EL(BiO,1);c=J(D,7);d=c.data;d[0]=B(615);d[1]=B(617);d[2]=B(615);d[3]=BK(35);d[4]=Big;d[5]=BK(88);d[6]=Bfq;Ck(a,e,c);e=EL(BiP,1);c=J(D,7);d=c.data;d[0]=B(615);d[1]=B(617);d[2]=B(615);d[3]=BK(35);d[4]=Bfv;d[5]=BK(88);d[6]=Bh1;Ck(a,e,c);RK(a.nc,BaS(a));B7(DT(),BD(H(Be(BN(),Df(a.nc)),B(628))));}
function Ck(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=c.data;e=B(3);f=0;g=0;h=0;if(!Ss(d[f],$rt_arraycls(B4))){while(d[f] instanceof B4){i=f+1|0;j=d[f];h=h+1|0;g=Bg(j);k=new T;V(k);e=U(H(H(k,e),j));f=i;}i=f;}else{i=1;l=d[f];m=0;while(true){c=l.data;if(m>=c.length)break;k=c[m];h=h+1|0;g=Bg(k);j=new T;V(j);e=U(H(H(j,e),k));m=m+1|0;}}n=De();while(i<d.length){o=d[i];p=0;m=i+1|0;if(d[m] instanceof Bd)p=d[m].cW;else if(d[m] instanceof P)p=d[m].b;BT(n,o,CY(p));i=i+2|0;}i=Bx(g,h);d=$rt_createIntArray(i);c=d.data;p=0;while
(p<i){q=Y(e,p);if(!DZ(n,BK(q)))c[p]=(-1);else c[p]=CQ(n,BK(q)).f$;p=p+1|0;}e=a.nc;j=new UW;j.Ib=b.bC;j.kS=g;j.q3=h;j.x4=d;j.x$=b;S(e,j);}
function RU(a,b){var c,d;c=0;while(c<a.nc.p){d=Z(a.nc,c);if(ALE(d,b))return AHA(d,b);c=c+1|0;}return null;}
function A4m(){Bmb=Baf();}
function PT(){Fc.call(this);this.CM=null;}
function AC5(a){var b;b=new VO;VI(b,a.CM);return b;}
function Cp(){var a=this;D.call(a);a.s=null;a.eP=0;a.C7=null;a.p6=0;}
var Bds=0;function Bmc(){var a=new Cp();CA(a);return a;}
function Bmd(a){var b=new Cp();NR(b,a);return b;}
function CA(a){var b,c;b=new Gh;c=Bds;Bds=c+1|0;LK(b,c);a.C7=MN(b);}
function NR(a,b){var c,d;c=new Gh;d=Bds;Bds=d+1|0;LK(c,d);a.C7=MN(c);a.s=b;}
function Jf(a,b,c,d){var e;e=d.bz;while(true){if(b>e)return (-1);if(a.l(b,c,d)>=0)break;b=b+1|0;}return b;}
function Js(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.l(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A44(a,b){a.p6=b;}
function A4E(a){return a.p6;}
function A0S(a){return a.s;}
function A1D(a,b){a.s=b;}
function A$L(a,b){return 1;}
function A_t(a){return null;}
function Lp(a){var b;a.eP=1;if(a.s!==null){if(!a.s.eP){b=a.s.lA();if(b!==null){a.s.eP=1;a.s=b;}a.s.i1();}else if(a.s instanceof Iz&&a.s.f_.w6)a.s=a.s.s;}}
function AHM(){Bds=1;}
function Od(){CR.call(this);}
function Bme(){var a=new Od();AV4(a);return a;}
function AV4(a){Cx(a);}
function A9v(a,b){return;}
function A0F(a,b){return;}
function AUY(a){return 0;}
function DV(){var a=this;Cp.call(a);a.w6=0;a.im=0;}
var Bl_=null;function BcM(a){var b=new DV();Hb(b,a);return b;}
function Hb(a,b){CA(a);a.im=b;}
function AT0(a,b,c,d){var e,f;e=JM(d,a.im);Ne(d,a.im,b);f=a.s.l(b,c,d);if(f<0)Ne(d,a.im,e);return f;}
function A7O(a){return a.im;}
function AUk(a,b){return 0;}
function ALg(){var b;b=new TY;CA(b);Bl_=b;}
function HU(){var a=this;D.call(a);a.bG=null;a.l_=0;a.h9=0;a.By=0;a.q0=0;a.cG=0;a.H=0;a.Ea=0;a.k4=null;a.jG=null;a.be=0;a.qi=0;a.il=0;a.pK=0;a.eO=null;}
var Bmf=null;var Bl9=null;var Bl$=0;function KF(a){return a.cG;}
function Uf(a,b){if(b>0&&b<3)a.h9=b;if(b==1){a.H=a.cG;a.jG=a.k4;a.be=a.pK;a.pK=a.il;GA(a);}}
function AJK(a,b){a.l_=b;a.H=a.cG;a.jG=a.k4;a.be=a.il+1|0;a.pK=a.il;GA(a);}
function P0(a){return a.k4;}
function H1(a){return a.k4===null?0:1;}
function LC(a){return a.jG===null?0:1;}
function BG(a){GA(a);return a.q0;}
function G5(a){var b;b=a.k4;GA(a);return b;}
function A3$(a){return a.H;}
function AV9(a){return a.q0;}
function GA(a){var b,c,d,e,f,$$je;a.q0=a.cG;a.cG=a.H;a.k4=a.jG;a.il=a.pK;a.pK=a.be;while(true){b=0;a.H=a.be>=a.bG.data.length?0:My(a);a.jG=null;if(a.h9==4){if(a.H!=92)return;a.H=a.be>=a.bG.data.length?0:a.bG.data[CF(a)];switch(a.H){case 69:break;default:a.H=92;a.be=a.qi;return;}a.h9=a.By;a.H=a.be>(a.bG.data.length-2|0)?0:My(a);}a:{if(a.H!=92){if(a.h9==1)switch(a.H){case 36:a.H=(-536870876);break a;case 40:if(a.bG.data[a.be]!=63){a.H=(-2147483608);break a;}CF(a);c=a.bG.data[a.be];d=0;while(true){b:{if(d){d=0;switch
(c){case 33:break;case 61:a.H=(-134217688);CF(a);break b;default:M(CN(B(3),EC(a),a.be));}a.H=(-67108824);CF(a);}else{switch(c){case 33:break;case 60:CF(a);c=a.bG.data[a.be];d=1;break b;case 61:a.H=(-536870872);CF(a);break b;case 62:a.H=(-33554392);CF(a);break b;default:a.H=ASz(a);if(a.H<256){a.l_=a.H;a.H=a.H<<16;a.H=(-1073741784)|a.H;break b;}a.H=a.H&255;a.l_=a.H;a.H=a.H<<16;a.H=(-16777176)|a.H;break b;}a.H=(-268435416);CF(a);}}if(!d)break;}break a;case 41:a.H=(-536870871);break a;case 42:case 43:case 63:switch
(a.be>=a.bG.data.length?42:a.bG.data[a.be]){case 43:a.H=a.H|(-2147483648);CF(a);break a;case 63:a.H=a.H|(-1073741824);CF(a);break a;default:}a.H=a.H|(-536870912);break a;case 46:a.H=(-536870866);break a;case 91:a.H=(-536870821);Uf(a,2);break a;case 93:if(a.h9!=2)break a;a.H=(-536870819);break a;case 94:a.H=(-536870818);break a;case 123:a.jG=AGH(a,a.H);break a;case 124:a.H=(-536870788);break a;default:}else if(a.h9==2)switch(a.H){case 38:a.H=(-536870874);break a;case 45:a.H=(-536870867);break a;case 91:a.H=(-536870821);break a;case 93:a.H
=(-536870819);break a;case 94:a.H=(-536870818);break a;default:}}else{c=a.be>=(a.bG.data.length-2|0)?(-1):My(a);c:{a.H=c;switch(a.H){case -1:M(CN(B(3),EC(a),a.be));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.H
=AD1(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.h9!=1)break a;a.H=(-2147483648)|a.H;break a;case 65:a.H=(-2147483583);break a;case 66:a.H=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:M(CN(B(3),EC(a),a.be));case 68:case 83:case 87:case 100:case 115:case 119:a.jG=QX(LE(a.bG,
a.qi,1),0);a.H=0;break a;case 71:a.H=(-2147483577);break a;case 80:case 112:break c;case 81:a.By=a.h9;a.h9=4;b=1;break a;case 90:a.H=(-2147483558);break a;case 97:a.H=7;break a;case 98:a.H=(-2147483550);break a;case 99:if(a.be>=(a.bG.data.length-2|0))M(CN(B(3),EC(a),a.be));a.H=a.bG.data[CF(a)]&31;break a;case 101:a.H=27;break a;case 102:a.H=12;break a;case 110:a.H=10;break a;case 114:a.H=13;break a;case 116:a.H=9;break a;case 117:a.H=UI(a,4);break a;case 120:a.H=UI(a,2);break a;case 122:a.H=(-2147483526);break a;default:}break a;}e
=AOB(a);f=0;if(a.H==80)f=1;try{a.jG=QX(e,f);}catch($$e){$$je=Bh($$e);if($$je instanceof M8){M(CN(B(3),EC(a),a.be));}else{throw $$e;}}a.H=0;}}if(b)continue;else break;}}
function AOB(a){var b,c,d;b=new T;GB(b,10);if(a.be<(a.bG.data.length-2|0)){if(a.bG.data[a.be]!=123){b=new T;V(b);return U(H(H(b,B(629)),LE(a.bG,CF(a),1)));}CF(a);c=0;a:{while(a.be<(a.bG.data.length-2|0)){c=a.bG.data[CF(a)];if(c==125)break a;Dy(b,c);}}if(c!=125)M(CN(B(3),a.eO,a.be));}if(!Kj(b))M(CN(B(3),a.eO,a.be));d=U(b);if(Bg(d)==1){b=new T;V(b);return U(H(H(b,B(629)),d));}b:{c:{if(Bg(d)>3){if(Iy(d,B(629)))break c;if(Iy(d,B(630)))break c;}break b;}d=Jx(d,2);}return d;}
function AGH(a,b){var c,d,e,f,$$je;c=new T;GB(c,4);d=(-1);e=2147483647;a:{while(true){if(a.be>=a.bG.data.length)break a;b=a.bG.data[CF(a)];if(b==125)break a;if(b==44&&d<0)try{d=Lx(BD(c),10);AGX(c,0,Kj(c));continue;}catch($$e){$$je=Bh($$e);if($$je instanceof Ez){break;}else{throw $$e;}}Dy(c,b&65535);}M(CN(B(3),a.eO,a.be));}if(b!=125)M(CN(B(3),a.eO,a.be));if(Kj(c)>0)b:{try{e=Lx(BD(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bh($$e);if($$je instanceof Ez){}else{throw $$e;}}M(CN(B(3),a.eO,a.be));}else if
(d<0)M(CN(B(3),a.eO,a.be));if((d|e|(e-d|0))<0)M(CN(B(3),a.eO,a.be));f=a.be>=a.bG.data.length?42:a.bG.data[a.be];c:{switch(f){case 43:a.H=(-2147483525);CF(a);break c;case 63:a.H=(-1073741701);CF(a);break c;default:}a.H=(-536870789);}c=new Tv;c.ji=d;c.iv=e;return c;}
function EC(a){return a.eO;}
function Eo(a){return !a.cG&&!a.H&&a.be==a.Ea&&!H1(a)?1:0;}
function NF(b){return b<0?0:1;}
function F8(a){return !Eo(a)&&!H1(a)&&NF(a.cG)?1:0;}
function TX(a){return a.cG<=56319&&a.cG>=55296?1:0;}
function WE(a){return a.cG<=57343&&a.cG>=56320?1:0;}
function Q5(b){return b<=56319&&b>=55296?1:0;}
function PN(b){return b<=57343&&b>=56320?1:0;}
function UI(a,b){var c,d,e,f,$$je;c=new T;GB(c,b);d=a.bG.data.length-2|0;e=0;while(true){f=R(e,b);if(f>=0)break;if(a.be>=d)break;Dy(c,a.bG.data[CF(a)]);e=e+1|0;}if(!f)a:{try{b=Lx(BD(c),16);}catch($$e){$$je=Bh($$e);if($$je instanceof Ez){break a;}else{throw $$e;}}return b;}M(CN(B(3),a.eO,a.be));}
function AD1(a){var b,c,d,e,f;b=3;c=1;d=a.bG.data.length-2|0;e=Wq(a.bG.data[a.be],8);switch(e){case -1:break;default:if(e>3)b=2;CF(a);a:{while(true){if(c>=b)break a;if(a.be>=d)break a;f=Wq(a.bG.data[a.be],8);if(f<0)break;e=(e*8|0)+f|0;CF(a);c=c+1|0;}}return e;}M(CN(B(3),a.eO,a.be));}
function ASz(a){var b,c;b=1;c=a.l_;a:while(true){if(a.be>=a.bG.data.length)M(CN(B(3),a.eO,a.be));b:{c:{switch(a.bG.data[a.be]){case 41:CF(a);return c|256;case 45:if(!b)M(CN(B(3),a.eO,a.be));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}CF(a);}CF(a);return c;}
function CF(a){var b,c;a.qi=a.be;if(!(a.l_&4))a.be=a.be+1|0;else{b=a.bG.data.length-2|0;a.be=a.be+1|0;a:while(true){if(a.be<b&&Qp(a.bG.data[a.be])){a.be=a.be+1|0;continue;}if(a.be>=b)break;if(a.bG.data[a.be]!=35)break;a.be=a.be+1|0;while(true){if(a.be>=b)continue a;c=a.bG.data[a.be];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.be=a.be+1|0;}}}return a.qi;}
function AQ6(b){return Bmf.Nq(b);}
function My(a){var b,c,d;b=a.bG.data[CF(a)];if(Dt(b)){c=a.qi+1|0;if(c<a.bG.data.length){d=a.bG.data[c];if(DR(d)){CF(a);return EJ(b,d);}}}return b;}
function HC(a){return a.il;}
function ARq(){var a=this;Ca.call(a);a.A6=null;a.rg=null;a.oa=0;}
function CN(a,b,c){var d=new ARq();A3V(d,a,b,c);return d;}
function A3V(a,b,c,d){O(a);a.oa=(-1);a.A6=b;a.rg=c;a.oa=d;}
function A_p(a){var b,c,d,e,f,g,h,i;b=B(3);if(a.oa>=1){c=$rt_createCharArray(a.oa);d=c.data;e=0;f=d.length;if(e>f){b=new Ca;O(b);M(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=AIp(c);}h=new T;V(h);h=H(h,a.A6);if(a.rg!==null&&Bg(a.rg)){i=new T;V(i);b=U(H(H(H(H(Be(i,a.oa),B(631)),a.rg),B(631)),b));}else b=B(3);return U(H(h,b));}
function MM(){CR.call(this);this.ty=0;}
function Bmg(){var a=new MM();A4B(a);return a;}
function A4B(a){Cx(a);}
function A8T(a,b){K0(b,a.ty);}
function A8l(a,b){a.ty=Oc(b);}
function A6Z(a){return 1;}
function Nc(){CR.call(this);this.ts=0;}
function Bmh(){var a=new Nc();A6e(a);return a;}
function A6e(a){Cx(a);}
function AWB(a,b){AAl(b,a.ts);}
function AZR(a,b){a.ts=XT(b);}
function A51(a){return 2;}
function LD(){CR.call(this);this.r$=0;}
function Bmi(){var a=new LD();A11(a);return a;}
function A11(a){Cx(a);}
function A2m(a,b){JU(b,a.r$);}
function AZm(a,b){a.r$=H6(b);}
function AVE(a){return 3;}
function Om(){CR.call(this);this.s6=Long_ZERO;}
function Bmj(){var a=new Om();A0g(a);return a;}
function A0g(a){Cx(a);}
function ATw(a,b){UP(b,a.s6);}
function A_E(a,b){a.s6=Tr(b);}
function A2X(a){return 4;}
function Pr(){CR.call(this);this.np=0.0;}
function Bmk(){var a=new Pr();A0d(a);return a;}
function A66(a){var b=new Pr();AV$(b,a);return b;}
function A0d(a){Cx(a);}
function AV$(a,b){Cx(a);a.np=b;}
function ATn(a,b){APv(b,a.np);}
function A8d(a,b){a.np=ABb(b);}
function AS3(a){return 5;}
function MF(){CR.call(this);this.iM=0.0;}
function Bml(){var a=new MF();AZT(a);return a;}
function AZT(a){Cx(a);}
function A7f(a,b){APA(b,a.iM);}
function AVm(a,b){a.iM=APy(b);}
function A1b(a){return 6;}
function MY(){CR.call(this);this.mp=null;}
function Bmm(){var a=new MY();A_W(a);return a;}
function A_W(a){Cx(a);}
function A5p(a,b){JU(b,a.mp.data.length);AON(b,a.mp);}
function A7y(a,b){a.mp=$rt_createByteArray(H6(b));AM6(b,a.mp);}
function A9R(a){return 7;}
function OQ(){CR.call(this);this.AN=null;}
function Bmn(){var a=new OQ();A8C(a);return a;}
function A8C(a){Cx(a);}
function A$8(a,b){Xz(b,a.AN);}
function AZn(a,b){a.AN=GV(b);}
function ATH(a){return 8;}
function Q3(){var a=this;CR.call(a);a.he=null;a.m0=0;}
function Mq(){var a=new Q3();AHj(a);return a;}
function AHj(a){Cx(a);a.he=Ch();}
function A9M(a,b){var c;if(a.he.p<=0)a.m0=1;else a.m0=Z(a.he,0).fc();K0(b,a.m0);JU(b,a.he.p);c=0;while(c<a.he.p){Z(a.he,c).gS(b);c=c+1|0;}}
function AZg(a,b){var c,d,e;a.m0=Oc(b);c=H6(b);a.he=Ch();d=0;while(d<c){e=AFj(a.m0);e.gL(b);S(a.he,e);d=d+1|0;}}
function AYS(a){return 9;}
function Ju(a,b){a.m0=b.fc();S(a.he,b);}
function Fd(a,b){return Z(a.he,b);}
function AOH(a){return a.he.p;}
function TJ(){var a=this;D.call(a);a.AK=null;a.xq=null;}
function ARY(a){CM(a.AK,(UF(a.xq.result)?1:0)?null:A8M(a.xq.result));}
function AUH(a){ARY(a);}
function TI(){D.call(this);this.Ey=null;}
function XN(a){CM(a.Ey,null);}
function AXH(a){XN(a);}
function AR8(){var a=this;D.call(a);a.E_=null;a.qj=null;}
function BbK(){var a=new AR8();AXT(a);return a;}
function AXT(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,3);e=d.data;e[0]=B(632);e[1]=B(622);e[2]=B(622);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(621);e[2]=B(621);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(633);e[1]=B(634);e[2]=B(635);c[2]=d;d=J(B4,3);e=d.data;e[0]=B(633);e[1]=B(635);e[2]=B(635);c[3]=d;a.E_=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Bfc;e[1]=Bfa;BB();e[2]=Bh3;e[3]=BhO;e[4]=Bh4;c[0]=d;d=J(D,5);e=d.data;e[0]=Bh8;e[1]=Bia;e[2]=BhY;e[3]=Bie;e[4]=Bil;c[1]=d;d=J(D,5);e=d.data;e[0]
=Bh7;e[1]=Bh_;e[2]=BhX;e[3]=Bid;e[4]=Bik;c[2]=d;d=J(D,5);e=d.data;e[0]=Bh9;e[1]=Bib;e[2]=BhZ;e[3]=Bif;e[4]=Bim;c[3]=d;d=J(D,5);e=d.data;e[0]=Bin;e[1]=Bio;e[2]=Bip;e[3]=Biq;e[4]=Bir;c[4]=d;a.qj=b;}
function AHB(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.qj.data[0].data.length){d=a.qj.data[0].data[c];e=0;while(e<(a.qj.data.length-1|0)){f=a.qj.data;g=e+1|0;h=f[g].data[c];i=Qt(h);f=J(D,5);j=f.data;j[0]=a.E_.data[e];j[1]=BK(35);BB();j[2]=Big;j[3]=BK(88);j[4]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function X7(){var a=this;D.call(a);a.BA=null;a.px=null;}
function Bao(){var a=new X7();A$D(a);return a;}
function A$D(a){var b,c,d,e;b=J($rt_arraycls(B4),1);c=b.data;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(72);e[2]=B(621);c[0]=d;a.BA=b;b=J($rt_arraycls(D),2);c=b.data;d=J(D,5);e=d.data;L();e[0]=Bfc;e[1]=Bfa;BB();e[2]=Bh3;e[3]=BhO;e[4]=Bh4;c[0]=d;d=J(D,5);e=d.data;e[0]=Bh6;e[1]=Bh$;e[2]=Bh5;e[3]=Bic;e[4]=Bij;c[1]=d;a.px=b;}
function XG(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.px.data[0].data.length){d=a.px.data[0].data[c];e=0;while(e<(a.px.data.length-1|0)){f=a.px.data;g=e+1|0;h=f[g].data[c];i=Qt(h);j=J(D,5);k=j.data;k[0]=a.BA.data[e];k[1]=BK(35);BB();k[2]=Big;k[3]=BK(88);k[4]=d;Ck(b,i,j);e=g;}c=c+1|0;}h=new Cf;BB();Gp(h,Bh2,1);f=J(D,7);k=f.data;k[0]=B(636);k[1]=B(637);k[2]=B(636);k[3]=BK(88);k[4]=Bgs;k[5]=BK(35);k[6]=Big;Ck(b,h,f);d=EL(Bgq,4);f=J(D,9);k=f.data;k[0]=B(72);k[1]=B(621);k[2]=B(48);k[3]=BK(89);k[4]=Bgp;k[5]=BK(88);k[6]
=Bh3;k[7]=BK(35);k[8]=Big;Ck(b,d,f);}
function X0(){D.call(this);this.sx=null;}
function BbH(){var a=new X0();A2u(a);return a;}
function A2u(a){var b,c,d,e;b=J($rt_arraycls(D),3);c=b.data;d=J(D,2);e=d.data;L();e[0]=Bfv;BB();e[1]=Bh4;c[0]=d;d=J(D,2);e=d.data;e[0]=Bfu;e[1]=Bh3;c[1]=d;d=J(D,2);e=d.data;e[0]=Bhb;e[1]=BhO;c[2]=d;a.sx=b;}
function AD_(a,b){var c,d,e,f,g,h;c=0;while(c<a.sx.data.length){d=a.sx.data[c].data[0];e=a.sx.data[c].data[1];f=AMc(d);g=J(D,5);h=g.data;h[0]=B(615);h[1]=B(615);h[2]=B(615);h[3]=BK(35);h[4]=e;Ck(b,f,g);f=EL(e,9);g=J(D,3);h=g.data;h[0]=B(621);h[1]=BK(35);h[2]=d;Ck(b,f,g);c=c+1|0;}}
function AEp(){D.call(this);}
function Bbn(){var a=new AEp();A0V(a);return a;}
function A0V(a){return;}
function AJ6(a,b){var c,d,e;c=new Cf;BB();DC(c,Bii);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(621);e[3]=BK(88);L();e[4]=Bfl;e[5]=BK(89);e[6]=Bfm;e[7]=BK(35);e[8]=Bih;Ck(b,c,d);c=Qt(Bii);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(621);e[3]=BK(88);e[4]=Bfm;e[5]=BK(89);e[6]=Bfl;e[7]=BK(35);e[8]=Bih;Ck(b,c,d);}
function AR7(){D.call(this);}
function BaE(){var a=new AR7();A69(a);return a;}
function A69(a){return;}
function Yn(a,b){var c,d,e;c=new Cf;L();AIe(c,Bg$);d=J(D,5);e=d.data;e[0]=B(615);e[1]=B(618);e[2]=B(615);e[3]=BK(35);e[4]=Bfc;Ck(b,c,d);c=AMc(Bhf);d=J(D,5);e=d.data;e[0]=B(615);e[1]=B(618);e[2]=B(615);e[3]=BK(35);e[4]=Bfa;Ck(b,c,d);c=AMc(Bhc);d=J(D,4);e=d.data;e[0]=B(619);e[1]=B(619);e[2]=BK(35);e[3]=Bfc;Ck(b,c,d);}
function AFo(){var a=this;D.call(a);a.zZ=null;a.n9=null;}
function Bbd(){var a=new AFo();AVo(a);return a;}
function AVo(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,2);e=d.data;e[0]=B(632);e[1]=B(623);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(623);e[1]=B(632);e[2]=B(632);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(632);e[1]=B(623);e[2]=B(623);c[2]=d;d=J(B4,2);e=d.data;e[0]=B(623);e[1]=B(623);c[3]=d;a.zZ=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Bfq;e[1]=BgC;BB();e[2]=Bh3;e[3]=BhO;e[4]=Bh4;c[0]=d;d=J(D,5);e=d.data;e[0]=Bit;e[1]=Bix;e[2]=BiB;e[3]=BiF;e[4]=BiJ;c[1]=d;d=J(D,5);e=d.data;e[0]=Biu;e[1]=Biy;e[2]
=BiC;e[3]=BiG;e[4]=BiK;c[2]=d;d=J(D,5);e=d.data;e[0]=Biv;e[1]=Biz;e[2]=BiD;e[3]=BiH;e[4]=BiL;c[3]=d;d=J(D,5);e=d.data;e[0]=Biw;e[1]=BiA;e[2]=BiE;e[3]=BiI;e[4]=BiM;c[4]=d;a.n9=b;}
function ASV(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.n9.data[0].data.length){d=a.n9.data[0].data[c];e=0;while(e<(a.n9.data.length-1|0)){f=a.n9.data;g=e+1|0;h=f[g].data[c];i=Qt(h);f=J(D,3);j=f.data;j[0]=a.zZ.data[e];j[1]=BK(88);j[2]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function Yu(){D.call(this);this.I2=null;}
function BaS(a){var b=new Yu();AYN(b,a);return b;}
function AYN(a,b){a.I2=b;}
function AMR(a,b,c){return KA(c)<KA(b)?(-1):KA(c)<=KA(b)?0:1;}
function AZO(a,b,c){return AMR(a,b,c);}
function QQ(){DV.call(this);}
function A3N(a,b,c,d){var e;e=a.im;Cv(d,e,b-Ep(d,e)|0);return a.s.l(b,c,d);}
function A9N(a,b){return 0;}
function ASp(){DV.call(this);}
function BbI(){var a=new ASp();A29(a);return a;}
function A29(a){Hb(a,(-1));}
function A43(a,b,c,d){return b;}
function P3(){DV.call(this);}
function AUq(a,b,c,d){if(Ep(d,a.im)!=b)b=(-1);return b;}
function Re(){DV.call(this);this.wU=0;}
function A3P(a,b,c,d){var e;e=a.im;Cv(d,e,b-Ep(d,e)|0);a.wU=b;return b;}
function AUv(a){return a.wU;}
function A83(a,b){return 0;}
function HS(){DV.call(this);}
function Bcg(){var a=new HS();A$B(a);return a;}
function A$B(a){Hb(a,0);}
function A1O(a,b,c,d){if(d.nx!=1&&b!=d.bz)return (-1);ARO(d);Ne(d,0,b);return b;}
function CJ(){Cp.call(this);this.dk=0;}
function Bmo(){var a=new CJ();EN(a);return a;}
function EN(a){CA(a);a.dk=1;}
function A_N(a,b,c,d){var e;if((b+a.d_()|0)>d.bz){d.hq=1;return (-1);}e=a.dm(b,c);if(e<0)return (-1);return a.s.l(b+e|0,c,d);}
function A$n(a){return a.dk;}
function AXn(a,b){return 1;}
function AF_(){CJ.call(this);}
function II(a){var b=new AF_();A7V(b,a);return b;}
function A7V(a,b){NR(a,b);a.dk=1;a.p6=1;a.dk=0;}
function A91(a,b,c){return 0;}
function A5R(a,b,c,d){var e,f,g;e=d.bz;f=d.fh;while(true){g=R(b,e);if(g>0)return (-1);if(g<0&&DR(Y(c,b))&&b>f&&Dt(Y(c,b-1|0))){b=b+1|0;continue;}if(a.s.l(b,c,d)>=0)break;b=b+1|0;}return b;}
function A4T(a,b,c,d,e){var f,g;f=e.bz;g=e.fh;while(true){if(c<b)return (-1);if(c<f&&DR(Y(d,c))&&c>g&&Dt(Y(d,c-1|0))){c=c+(-1)|0;continue;}if(a.s.l(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A3O(a,b){return 0;}
function CE(){var a=this;Cp.call(a);a.dl=null;a.f_=null;a.cJ=0;}
function Bmp(){var a=new CE();A4P(a);return a;}
function BaT(a,b){var c=new CE();GS(c,a,b);return c;}
function A4P(a){CA(a);}
function GS(a,b,c){CA(a);a.dl=b;a.f_=c;a.cJ=c.im;}
function AWI(a,b,c,d){var e,f,g,h;if(a.dl===null)return (-1);e=Hl(d,a.cJ);EM(d,a.cJ,b);f=a.dl.p;g=0;while(true){if(g>=f){EM(d,a.cJ,e);return (-1);}h=Z(a.dl,g).l(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AZC(a,b){a.f_.s=b;}
function A7u(a,b){var c;a:{if(a.dl!==null){c=Jn(a.dl);while(true){if(!KR(c))break a;if(!La(c).d1(b))continue;else return 1;}}}return 0;}
function AZ9(a,b){return JM(b,a.cJ)>=0&&Hl(b,a.cJ)==JM(b,a.cJ)?0:1;}
function AUZ(a){var b,c,d,e;a.eP=1;if(a.f_!==null&&!a.f_.eP)Lp(a.f_);a:{if(a.dl!==null){b=a.dl.p;c=0;while(true){if(c>=b)break a;d=Z(a.dl,c);e=d.lA();if(e===null)e=d;else{d.eP=1;Em(a.dl,c);AMW(a.dl,c,e);}if(!e.eP)e.i1();c=c+1|0;}}}if(a.s!==null)Lp(a);}
function Li(){CE.call(this);}
function Bmq(){var a=new Li();AYc(a);return a;}
function AYc(a){CA(a);}
function AZu(a,b,c,d){var e,f,g,h;e=Ep(d,a.cJ);Cv(d,a.cJ,b);f=a.dl.p;g=0;while(true){if(g>=f){Cv(d,a.cJ,e);return (-1);}h=Z(a.dl,g).l(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A9A(a,b){return !Ep(b,a.cJ)?0:1;}
function EX(){Li.call(this);}
function A5j(a,b,c,d){var e,f,g;e=Ep(d,a.cJ);Cv(d,a.cJ,b);f=a.dl.p;g=0;while(g<f){if(Z(a.dl,g).l(b,c,d)>=0)return a.s.l(a.f_.wU,c,d);g=g+1|0;}Cv(d,a.cJ,e);return (-1);}
function A9j(a,b){a.s=b;}
function Tl(){EX.call(this);}
function AZy(a,b,c,d){var e,f;e=a.dl.p;f=0;while(f<e){if(Z(a.dl,f).l(b,c,d)>=0)return a.s.l(b,c,d);f=f+1|0;}return (-1);}
function A1F(a,b){return 0;}
function WT(){EX.call(this);}
function AUd(a,b,c,d){var e,f;e=a.dl.p;f=0;while(true){if(f>=e)return a.s.l(b,c,d);if(Z(a.dl,f).l(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A$r(a,b){return 0;}
function Vl(){EX.call(this);}
function AUW(a,b,c,d){var e,f,g,h;e=a.dl.p;f=d.oj?0:d.fh;a:{g=a.s.l(b,c,d);if(g>=0){Cv(d,a.cJ,b);h=0;while(true){if(h>=e)break a;if(Z(a.dl,h).eW(f,b,c,d)>=0){Cv(d,a.cJ,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_1(a,b){return 0;}
function Rr(){EX.call(this);}
function A3q(a,b,c,d){var e,f;e=a.dl.p;Cv(d,a.cJ,b);f=0;while(true){if(f>=e)return a.s.l(b,c,d);if(Z(a.dl,f).eW(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A9G(a,b){return 0;}
function Iz(){CE.call(this);this.fp=null;}
function BcE(a,b){var c=new Iz();Z_(c,a,b);return c;}
function Z_(a,b,c){CA(a);a.fp=b;a.f_=c;a.cJ=c.im;}
function ATu(a,b,c,d){var e,f;e=Hl(d,a.cJ);EM(d,a.cJ,b);f=a.fp.l(b,c,d);if(f>=0)return f;EM(d,a.cJ,e);return (-1);}
function AYp(a,b,c,d){var e;e=a.fp.eJ(b,c,d);if(e>=0)EM(d,a.cJ,e);return e;}
function A9Q(a,b,c,d,e){var f;f=a.fp.eW(b,c,d,e);if(f>=0)EM(e,a.cJ,f);return f;}
function A7q(a,b){return a.fp.d1(b);}
function A81(a){var b;b=new O1;Z_(b,a.fp,a.f_);a.s=b;return b;}
function A2i(a){var b;a.eP=1;if(a.f_!==null&&!a.f_.eP)Lp(a.f_);if(a.fp!==null&&!a.fp.eP){b=a.fp.lA();if(b!==null){a.fp.eP=1;a.fp=b;}a.fp.i1();}}
function HY(){D.call(this);}
function Bk(){var a=this;HY.call(a);a.cl=0;a.dM=0;a.b9=null;a.qc=null;a.qI=null;a.b_=0;}
var Bmr=null;function Bms(){var a=new Bk();B0(a);return a;}
function B0(a){var b;b=new W7;b.by=$rt_createIntArray(64);a.b9=b;}
function A4r(a){return null;}
function A3Z(a){return a.b9;}
function AN$(a){return !a.dM?(I0(a.b9,0)>=2048?0:1):AEF(a.b9,0)>=2048?0:1;}
function A6q(a){return a.b_;}
function A$h(a){return a;}
function Y6(a){var b,c;if(a.qI===null){b=a.kr();c=new Sw;c.Jx=a;c.CH=b;B0(c);a.qI=c;Fx(a.qI,a.dM);}return a.qI;}
function Kk(a){var b,c;if(a.qc===null){b=a.kr();c=new Sv;c.GZ=a;c.EM=b;c.BB=a;B0(c);a.qc=c;Fx(a.qc,a.cl);a.qc.b_=a.b_;}return a.qc;}
function A_q(a){return 0;}
function Fx(a,b){if(a.cl^b){a.cl=a.cl?0:1;a.dM=a.dM?0:1;}if(!a.b_)a.b_=1;return a;}
function AWb(a){return a.cl;}
function KT(b,c){if(b.hF()!==null&&c.hF()!==null)return AEj(b.hF(),c.hF());return 1;}
function QX(b,c){return AP3(ARI(Bmr,b),c);}
function AAd(){Bmr=new H9;}
function ZZ(){var a=this;Bk.call(a);a.xY=0;a.zo=0;a.ns=0;a.uW=0;a.iB=0;a.ln=0;a.b7=null;a.c5=null;}
function Eq(){var a=new ZZ();A2M(a);return a;}
function A$V(a,b){var c=new ZZ();AVc(c,a,b);return c;}
function A2M(a){B0(a);a.b7=A_3();}
function AVc(a,b,c){B0(a);a.b7=A_3();a.xY=b;a.zo=c;}
function Dq(a,b){a:{if(a.xY){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.iB){OM(a.b7,Kn(b&65535));break a;}Mu(a.b7,Kn(b&65535));break a;}if(a.zo&&b>128){a.ns=1;b=GQ(GP(b));}}}if(!(!Q5(b)&&!PN(b))){if(a.uW)OM(a.b9,b-55296|0);else Mu(a.b9,b-55296|0);}if(a.iB)OM(a.b7,b);else Mu(a.b7,b);if(!a.b_&&ML(b))a.b_=1;return a;}
function ASL(a,b){var c,d,e;if(!a.b_&&b.b_)a.b_=1;if(a.uW){if(!b.dM)G0(a.b9,b.kr());else Ec(a.b9,b.kr());}else if(!b.dM)Hr(a.b9,b.kr());else{He(a.b9,b.kr());Ec(a.b9,b.kr());a.dM=a.dM?0:1;a.uW=1;}if(!a.ln&&b.hF()!==null){if(a.iB){if(!b.cl)G0(a.b7,b.hF());else Ec(a.b7,b.hF());}else if(!b.cl)Hr(a.b7,b.hF());else{He(a.b7,b.hF());Ec(a.b7,b.hF());a.cl=a.cl?0:1;a.iB=1;}}else{c=a.cl;if(a.c5!==null){d=a.c5;if(!c){e=new T9;e.HU=a;e.Fd=c;e.Bv=d;e.Bo=b;B0(e);a.c5=e;}else{e=new T$;e.JV=a;e.Ay=c;e.DO=d;e.Dv=b;B0(e);a.c5=
e;}}else{if(c&&!a.iB&&OC(a.b7)){d=new T6;d.IL=a;d.DT=b;B0(d);a.c5=d;}else if(!c){d=new T4;d.xt=a;d.wH=c;d.C2=b;B0(d);a.c5=d;}else{d=new T5;d.vv=a;d.tX=c;d.Br=b;B0(d);a.c5=d;}a.ln=1;}}return a;}
function CH(a,b,c){var d;if(b>c){d=new Ca;O(d);M(d);}a:{b:{if(!a.xY){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Dq(a,b);b=b+1|0;}}if(a.iB)AIS(a.b7,b,c+1|0);else Jt(a.b7,b,c+1|0);}return a;}
function AIr(a,b){var c,d,e;if(!a.b_&&b.b_)a.b_=1;if(b.ns)a.ns=1;if(!(a.dM^b.dM)){if(!a.dM)Hr(a.b9,b.b9);else Ec(a.b9,b.b9);}else if(a.dM)G0(a.b9,b.b9);else{He(a.b9,b.b9);Ec(a.b9,b.b9);a.dM=1;}if(!a.ln&&DX(b)!==null){if(!(a.cl^b.cl)){if(!a.cl)Hr(a.b7,DX(b));else Ec(a.b7,DX(b));}else if(a.cl)G0(a.b7,DX(b));else{He(a.b7,DX(b));Ec(a.b7,DX(b));a.cl=1;}}else{c=a.cl;if(a.c5!==null){d=a.c5;if(!c){e=new PB;e.FI=a;e.A9=c;e.EU=d;e.BJ=b;B0(e);a.c5=e;}else{e=new PP;e.FW=a;e.E8=c;e.zk=d;e.zq=b;B0(e);a.c5=e;}}else{if(!a.iB
&&OC(a.b7)){if(!c){d=new T7;d.JX=a;d.Aa=b;B0(d);a.c5=d;}else{d=new T8;d.H4=a;d.EZ=b;B0(d);a.c5=d;}}else if(!c){d=new Ua;d.Bb=a;d.AB=b;d.DQ=c;B0(d);a.c5=d;}else{d=new Ub;d.AM=a;d.AT=b;d.Eg=c;B0(d);a.c5=d;}a.ln=1;}}}
function SE(a,b){var c,d,e;if(!a.b_&&b.b_)a.b_=1;if(b.ns)a.ns=1;if(!(a.dM^b.dM)){if(!a.dM)Ec(a.b9,b.b9);else Hr(a.b9,b.b9);}else if(!a.dM)G0(a.b9,b.b9);else{He(a.b9,b.b9);Ec(a.b9,b.b9);a.dM=0;}if(!a.ln&&DX(b)!==null){if(!(a.cl^b.cl)){if(!a.cl)Ec(a.b7,DX(b));else Hr(a.b7,DX(b));}else if(!a.cl)G0(a.b7,DX(b));else{He(a.b7,DX(b));Ec(a.b7,DX(b));a.cl=0;}}else{c=a.cl;if(a.c5!==null){d=a.c5;if(!c){e=new PD;e.HT=a;e.EA=c;e.CF=d;e.Ax=b;B0(e);a.c5=e;}else{e=new PE;e.H$=a;e.Ep=c;e.Ci=d;e.Ez=b;B0(e);a.c5=e;}}else{if(!a.iB
&&OC(a.b7)){if(!c){d=new Pz;d.FZ=a;d.De=b;B0(d);a.c5=d;}else{d=new PA;d.JS=a;d.z5=b;B0(d);a.c5=d;}}else if(!c){d=new PF;d.Fv=a;d.Fc=b;d.AS=c;B0(d);a.c5=d;}else{d=new Py;d.AQ=a;d.Et=b;d.DX=c;B0(d);a.c5=d;}a.ln=1;}}}
function D4(a,b){if(a.c5!==null)return a.cl^a.c5.T(b);return a.cl^EK(a.b7,b);}
function DX(a){if(!a.ln)return a.b7;return null;}
function A5K(a){return a.b9;}
function A1v(a){var b,c;if(a.c5!==null)return a;b=DX(a);c=new PC;c.HF=a;c.sk=b;B0(c);return Fx(c,a.cl);}
function A8f(a){var b,c;b=new T;V(b);c=I0(a.b7,0);while(c>=0){Hi(b,Iw(c));Dy(b,124);c=I0(a.b7,c+1|0);}if(b.bZ>0)Sq(b,b.bZ-1|0);return U(b);}
function AWc(a){return a.ns;}
function M8(){var a=this;B8.call(a);a.Hn=null;a.JB=null;}
function E5(){Cp.call(this);this.bR=null;}
function Bmt(a,b,c){var d=new E5();Ef(d,a,b,c);return d;}
function Ef(a,b,c,d){NR(a,c);a.bR=b;a.p6=d;}
function A_S(a){return a.bR;}
function A0I(a,b){return !a.bR.d1(b)&&!a.s.d1(b)?0:1;}
function A$X(a,b){return 1;}
function AYM(a){var b;a.eP=1;if(a.s!==null&&!a.s.eP){b=a.s.lA();if(b!==null){a.s.eP=1;a.s=b;}a.s.i1();}if(a.bR!==null){if(!a.bR.eP){b=a.bR.lA();if(b!==null){a.bR.eP=1;a.bR=b;}a.bR.i1();}else if(a.bR instanceof Iz&&a.bR.f_.w6)a.bR=a.bR.s;}}
function D6(){E5.call(this);this.cM=null;}
function Ba$(a,b,c){var d=new D6();F3(d,a,b,c);return d;}
function F3(a,b,c,d){Ef(a,b,c,d);a.cM=b;}
function A3r(a,b,c,d){var e,f;e=0;a:{while((b+a.cM.d_()|0)<=d.bz){f=a.cM.dm(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.s.l(b,c,d);if(f>=0)break;b=b-a.cM.d_()|0;e=e+(-1)|0;}return f;}
function GC(){D6.call(this);this.k1=null;}
function Bb$(a,b,c,d){var e=new GC();QZ(e,a,b,c,d);return e;}
function QZ(a,b,c,d,e){F3(a,c,d,e);a.k1=b;}
function A4e(a,b,c,d){var e,f,g,h;e=a.k1.ji;f=a.k1.iv;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.cM.d_()|0)>d.bz)break a;h=a.cM.dm(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.s.l(b,c,d);if(h>=0)break;b=b-a.cM.d_()|0;g=g+(-1)|0;}return h;}if((b+a.cM.d_()|0)>d.bz){d.hq=1;return (-1);}h=a.cM.dm(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function DW(){E5.call(this);}
function A3G(a,b,c,d){var e;if(!a.bR.b5(d))return a.s.l(b,c,d);e=a.bR.l(b,c,d);if(e>=0)return e;return a.s.l(b,c,d);}
function FU(){D6.call(this);}
function A7E(a,b,c,d){var e;e=a.bR.l(b,c,d);if(e<0)e=a.s.l(b,c,d);return e;}
function A22(a,b){a.s=b;a.bR.ca(b);}
function Sy(){D6.call(this);}
function A_I(a,b,c,d){while((b+a.cM.d_()|0)<=d.bz&&a.cM.dm(b,c)>0){b=b+a.cM.d_()|0;}return a.s.l(b,c,d);}
function AY2(a,b,c,d){var e,f,g;e=a.s.eJ(b,c,d);if(e<0)return (-1);f=e-a.cM.d_()|0;while(f>=b&&a.cM.dm(f,c)>0){g=f-a.cM.d_()|0;e=f;f=g;}return e;}
function Ez(){Ca.call(this);}
function Bmu(){var a=new Ez();A34(a);return a;}
function A34(a){O(a);}
function Tv(){var a=this;HY.call(a);a.ji=0;a.iv=0;}
function A6f(a){return a.ji;}
function A$R(a){return a.iv;}
function A8o(a){var b;b=new T;V(b);return U(H(H(H(Be(H(b,B(638)),a.ji),B(639)),a.iv==2147483647?B(3):MN(AQ5(a.iv))),B(640)));}
function TY(){Cp.call(this);}
function Bmv(){var a=new TY();A_R(a);return a;}
function A_R(a){CA(a);}
function AXM(a,b,c,d){return b;}
function A80(a,b){return 0;}
function W7(){var a=this;D.call(a);a.by=null;a.co=0;}
function A_3(){var a=new W7();A4L(a);return a;}
function A4L(a){a.by=$rt_createIntArray(0);}
function Mu(a,b){var c,d;c=b/32|0;if(b>=a.co){KX(a,c+1|0);a.co=b+1|0;}d=a.by.data;d[c]=d[c]|1<<(b%32|0);}
function Jt(a,b,c){var d,e,f,g,h;if(b>c){d=new BQ;O(d);M(d);}e=b/32|0;f=c/32|0;if(c>a.co){KX(a,f+1|0);a.co=c;}if(e==f){g=a.by.data;g[e]=g[e]|Jl(a,b)&KP(a,c);}else{g=a.by.data;g[e]=g[e]|Jl(a,b);h=e+1|0;while(h<f){a.by.data[h]=(-1);h=h+1|0;}g=a.by.data;g[f]=g[f]|KP(a,c);}}
function Jl(a,b){return (-1)<<(b%32|0);}
function KP(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function OM(a,b){var c,d;c=b/32|0;if(c<a.by.data.length){d=a.by.data;d[c]=d[c]&ND((-2),b%32|0);if(b==(a.co-1|0))H_(a);}}
function AIS(a,b,c){var d,e,f,g,h;if(b>c){d=new BQ;O(d);M(d);}if(b>=a.co)return;c=CC(a.co,c);e=b/32|0;f=c/32|0;if(e==f){g=a.by.data;g[e]=g[e]&(KP(a,b)|Jl(a,c));}else{g=a.by.data;g[e]=g[e]&KP(a,b);h=e+1|0;while(h<f){a.by.data[h]=0;h=h+1|0;}g=a.by.data;g[f]=g[f]&Jl(a,c);}H_(a);}
function EK(a,b){var c;c=b/32|0;return c<a.by.data.length&&a.by.data[c]&1<<(b%32|0)?1:0;}
function I0(a,b){var c,d,e;if(b>=a.co)return (-1);c=b/32|0;d=a.by.data[c]>>>(b%32|0);if(d)return JH(d)+b|0;d=(a.co+31|0)/32|0;e=c+1|0;while(e<d){if(a.by.data[e])return (e*32|0)+JH(a.by.data[e])|0;e=e+1|0;}return (-1);}
function AEF(a,b){var c,d,e;if(b>=a.co)return b;c=b/32|0;d=(a.by.data[c]^(-1))>>>(b%32|0);if(d)return JH(d)+b|0;d=(a.co+31|0)/32|0;e=c+1|0;while(e<d){if(a.by.data[e]!=(-1))return (e*32|0)+JH(a.by.data[e]^(-1))|0;e=e+1|0;}return a.co;}
function KX(a,b){var c,d,e,f;if(a.by.data.length>=b)return;c=DD((b*3|0)/2|0,(a.by.data.length*2|0)+1|0);d=a.by.data;e=$rt_createIntArray(c);f=e.data;b=CC(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.by=e;}
function H_(a){var b,c,d;b=(a.co+31|0)/32|0;a.co=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=TH(a.by.data[c]);if(d<32)break;c=c+(-1)|0;a.co=a.co-32|0;}a.co=a.co-d|0;}}
function AEj(a,b){var c,d;c=CC(a.by.data.length,b.by.data.length);d=0;while(d<c){if(a.by.data[d]&b.by.data[d])return 1;d=d+1|0;}return 0;}
function Ec(a,b){var c,d,e;c=CC(a.by.data.length,b.by.data.length);d=0;while(d<c){e=a.by.data;e[d]=e[d]&b.by.data[d];d=d+1|0;}while(c<a.by.data.length){a.by.data[c]=0;c=c+1|0;}a.co=CC(a.co,b.co);H_(a);}
function G0(a,b){var c,d,e;c=CC(a.by.data.length,b.by.data.length);d=0;while(d<c){e=a.by.data;e[d]=e[d]&(b.by.data[d]^(-1));d=d+1|0;}H_(a);}
function Hr(a,b){var c,d,e;a.co=DD(a.co,b.co);KX(a,(a.co+31|0)/32|0);c=CC(a.by.data.length,b.co);d=0;while(d<c){e=a.by.data;e[d]=e[d]|b.by.data[d];d=d+1|0;}}
function He(a,b){var c,d,e;a.co=DD(a.co,b.co);KX(a,(a.co+31|0)/32|0);c=CC(a.by.data.length,b.co);d=0;while(d<c){e=a.by.data;e[d]=e[d]^b.by.data[d];d=d+1|0;}H_(a);}
function OC(a){return a.co?0:1;}
function OT(){var a=this;CE.call(a);a.z8=null;a.HE=0;}
function A5T(a,b){a.s=b;}
function ABT(a,b,c,d){var e,f,g,h,i;e=d.fh;f=d.bz;g=b+1|0;h=R(g,f);if(h>0){d.hq=1;return (-1);}i=Y(c,b);if(!a.z8.T(i))return (-1);if(Dt(i)){if(h<0&&DR(Y(c,g)))return (-1);}else if(DR(i)&&b>e&&Dt(Y(c,b-1|0)))return (-1);return a.s.l(g,c,d);}
function Qf(){var a=this;CE.call(a);a.v1=null;a.x7=null;}
function AEB(a,b){var c=new Qf();AHz(c,a,b);return c;}
function AHz(a,b,c){CA(a);a.v1=b;a.x7=c;}
function ATY(a,b,c,d){var e;e=a.v1.l(b,c,d);if(e<0)e=ABT(a.x7,b,c,d);if(e>=0)return e;return (-1);}
function A8N(a,b){a.s=b;a.x7.s=b;a.v1.ca(b);}
function AUw(a,b){return 1;}
function AUg(a,b){return 1;}
function EP(){var a=this;CE.call(a);a.h5=null;a.Gt=0;}
function A67(a){var b=new EP();Wk(b,a);return b;}
function Wk(a,b){CA(a);a.h5=b.sU();a.Gt=b.cl;}
function A5D(a,b,c,d){var e,f,g;e=d.bz;if(b<e){f=b+1|0;g=Y(c,b);if(a.T(g)){b=a.s.l(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=Y(c,f);if(Kd(g,f)&&a.T(EJ(g,f)))return a.s.l(b,c,d);}}return (-1);}
function AWp(a,b){return a.h5.T(b);}
function ATT(a,b){if(b instanceof EZ)return a.h5.T(b.kF);if(b instanceof Fu)return a.h5.T(b.gA);if(b instanceof EP)return KT(a.h5,b.h5);if(!(b instanceof Fo))return 1;return KT(a.h5,b.j7);}
function AXA(a){return a.h5;}
function A$d(a,b){a.s=b;}
function AV8(a,b){return 1;}
function M7(){EP.call(this);}
function AXo(a,b){return a.h5.T(GQ(GP(b)));}
function ZJ(){var a=this;CJ.call(a);a.DB=null;a.Gf=0;}
function AWY(a){var b=new ZJ();AY8(b,a);return b;}
function AY8(a,b){EN(a);a.DB=b.sU();a.Gf=b.cl;}
function A6_(a,b,c){return !a.DB.T(EV(FD(Y(c,b))))?(-1):1;}
function Fo(){var a=this;CJ.call(a);a.j7=null;a.GL=0;}
function A1r(a){var b=new Fo();AZX(b,a);return b;}
function AZX(a,b){EN(a);a.j7=b.sU();a.GL=b.cl;}
function Te(a,b,c){return !a.j7.T(Y(c,b))?(-1):1;}
function AZF(a,b){if(b instanceof Fu)return a.j7.T(b.gA);if(b instanceof Fo)return KT(a.j7,b.j7);if(!(b instanceof EP)){if(!(b instanceof EZ))return 1;return 0;}return KT(a.j7,b.h5);}
function A8P(a){return a.j7;}
function Ud(){var a=this;CE.call(a);a.jZ=null;a.yn=null;a.oD=0;}
function A$K(a,b){var c=new Ud();A3J(c,a,b);return c;}
function A3J(a,b,c){CA(a);a.jZ=b;a.oD=c;}
function AYt(a,b){a.s=b;}
function Qi(a){if(a.yn===null)a.yn=AIp(a.jZ);return a.yn;}
function AS$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.bz;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Y(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.oD)return (-1);while(true){if(l>=a.oD)return a.s.l(i,c,d);if(m[l]!=a.jZ.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Y(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Y(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.oD==3&&f[0]==a.jZ.data[0]&&f[1]==a.jZ.data[1]&&f[2]==a.jZ.data[2]?a.s.l(b,c,d):(-1);}return a.oD==2&&f[0]==a.jZ.data[0]&&f[1]==a.jZ.data[1]?a.s.l(k,c,d):(-1);}return (-1);}return (-1);}
function A4x(a,b){return b instanceof Ud&&!DB(Qi(b),Qi(a))?0:1;}
function A1y(a,b){return 1;}
function Fu(){CJ.call(this);this.gA=0;}
function AAt(a){var b=new Fu();AZZ(b,a);return b;}
function AZZ(a,b){EN(a);a.gA=b;}
function A63(a){return 1;}
function AWU(a,b,c){return a.gA!=Y(c,b)?(-1):1;}
function AVW(a,b,c,d){var e,f,g,h;if(!(c instanceof B4))return Jf(a,b,c,d);e=c;f=d.bz;while(true){if(b>=f)return (-1);g=Hh(e,a.gA,b);if(g<0)return (-1);h=a.s;b=g+1|0;if(h.l(b,c,d)>=0)break;}return g;}
function AXB(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Js(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=Ii(f,a.gA,c);if(g<0)break a;if(g<b)break a;if(a.s.l(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AUe(a){return a.gA;}
function A1s(a,b){if(b instanceof Fu)return b.gA!=a.gA?0:1;if(!(b instanceof Fo)){if(b instanceof EP)return b.T(a.gA);if(!(b instanceof EZ))return 1;return 0;}return Te(b,0,SL(a.gA))<=0?0:1;}
function AG7(){CJ.call(this);this.B$=0;}
function A9p(a){var b=new AG7();A7$(b,a);return b;}
function A7$(a,b){EN(a);a.B$=EV(FD(b));}
function A2_(a,b,c){return a.B$!=EV(FD(Y(c,b)))?(-1):1;}
function XY(){var a=this;CJ.call(a);a.BK=0;a.Cx=0;}
function A4O(a){var b=new XY();A0w(b,a);return b;}
function A0w(a,b){EN(a);a.BK=b;a.Cx=Kn(b);}
function ATp(a,b,c){return a.BK!=Y(c,b)&&a.Cx!=Y(c,b)?(-1):1;}
function GJ(){var a=this;CE.call(a);a.pZ=0;a.us=null;a.tT=null;a.tR=0;}
function Bdb(a,b){var c=new GJ();Po(c,a,b);return c;}
function Po(a,b,c){CA(a);a.pZ=1;a.tT=b;a.tR=c;}
function A_v(a,b){a.s=b;}
function AZt(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.bz;if(b>=f)return (-1);g=L0(a,b,c,f);h=b+a.pZ|0;i=AQ6(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dj(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=L0(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=AQ6(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.pZ|0;if(h>=f){b=k;break a;}g=L0(a,h,c,f);b=k;}}}if(b!=a.tR)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.s.l(h,c,d);if(i[g]!=a.tT.data[g])break;g=g+1|0;}return (-1);}
function SD(a){var b,c;if(a.us===null){b=new T;V(b);c=0;while(c<a.tR){Hi(b,Iw(a.tT.data[c]));c=c+1|0;}a.us=U(b);}return a.us;}
function L0(a,b,c,d){var e,f,g;a.pZ=1;if(b>=(d-1|0))e=Y(c,b);else{d=b+1|0;e=Y(c,b);f=Y(c,d);if(Kd(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Dt(g[0])&&DR(g[1])?EJ(g[0],g[1]):g[0];a.pZ=2;}}return e;}
function AXP(a,b){return b instanceof GJ&&!DB(SD(b),SD(a))?0:1;}
function A9l(a,b){return 1;}
function SR(){GJ.call(this);}
function V_(){GJ.call(this);}
function Tb(){DW.call(this);}
function A45(a,b,c,d){var e;while(true){e=a.bR.l(b,c,d);if(e<=0)break;b=e;}return a.s.l(b,c,d);}
function UH(){DW.call(this);}
function A73(a,b,c,d){var e;e=a.bR.l(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bR.l(e,c,d);if(b<=e)break;e=b;}b=e;}return a.s.l(b,c,d);}
function Hv(){DW.call(this);}
function A$a(a,b,c,d){var e;if(!a.bR.b5(d))return a.s.l(b,c,d);e=a.bR.l(b,c,d);if(e>=0)return e;return a.s.l(b,c,d);}
function A$5(a,b){a.s=b;a.bR.ca(b);}
function PW(){Hv.call(this);}
function AXy(a,b,c,d){var e;e=a.bR.l(b,c,d);if(e<=0)e=b;return a.s.l(e,c,d);}
function A8q(a,b){a.s=b;}
function G8(){var a=this;DW.call(a);a.kJ=null;a.hw=0;}
function Bmw(a,b,c,d,e){var f=new G8();M6(f,a,b,c,d,e);return f;}
function M6(a,b,c,d,e,f){Ef(a,c,d,e);a.kJ=b;a.hw=f;}
function A_X(a,b,c,d){var e,f;e=Tq(d,a.hw);if(!a.bR.b5(d))return a.s.l(b,c,d);if(e>=a.kJ.iv)return a.s.l(b,c,d);f=a.hw;e=e+1|0;FF(d,f,e);f=a.bR.l(b,c,d);if(f>=0){FF(d,a.hw,0);return f;}f=a.hw;e=e+(-1)|0;FF(d,f,e);if(e>=a.kJ.ji)return a.s.l(b,c,d);FF(d,a.hw,0);return (-1);}
function O5(){G8.call(this);}
function AW_(a,b,c,d){var e,f,g;e=0;f=a.kJ.iv;a:{while(true){g=a.bR.l(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.kJ.ji)return (-1);return a.s.l(b,c,d);}
function QF(){DW.call(this);}
function A2r(a,b,c,d){var e;if(!a.bR.b5(d))return a.s.l(b,c,d);e=a.s.l(b,c,d);if(e>=0)return e;return a.bR.l(b,c,d);}
function U1(){Hv.call(this);}
function AUy(a,b,c,d){var e;if(!a.bR.b5(d))return a.s.l(b,c,d);e=a.s.l(b,c,d);if(e<0)e=a.bR.l(b,c,d);return e;}
function RZ(){G8.call(this);}
function A3T(a,b,c,d){var e,f;e=Tq(d,a.hw);if(!a.bR.b5(d))return a.s.l(b,c,d);if(e>=a.kJ.iv){FF(d,a.hw,0);return a.s.l(b,c,d);}if(e<a.kJ.ji){FF(d,a.hw,e+1|0);f=a.bR.l(b,c,d);}else{f=a.s.l(b,c,d);if(f>=0){FF(d,a.hw,0);return f;}FF(d,a.hw,e+1|0);f=a.bR.l(b,c,d);}return f;}
function QG(){E5.call(this);}
function A_P(a,b,c,d){var e;e=d.bz;if(e>b)return a.s.eW(b,e,c,d);return a.s.l(b,c,d);}
function A04(a,b,c,d){var e;e=d.bz;if(a.s.eW(b,e,c,d)>=0)return b;return (-1);}
function T3(){E5.call(this);this.uC=null;}
function AZG(a,b,c,d){var e,f;e=d.bz;f=Ww(a,b,e,c);if(f>=0)e=f;if(e>b)return a.s.eW(b,e,c,d);return a.s.l(b,c,d);}
function ATb(a,b,c,d){var e,f,g,h;e=d.bz;f=a.s.eJ(b,c,d);if(f<0)return (-1);g=Ww(a,f,e,c);if(g>=0)e=g;g=a.s.eW(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.uC.oA(Y(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function Ww(a,b,c,d){while(true){if(b>=c)return (-1);if(a.uC.oA(Y(d,b)))break;b=b+1|0;}return b;}
function Gk(){D.call(this);}
var Bmx=null;var Bmy=null;function Uu(b){if(!(b&1)){if(Bmy!==null)return Bmy;Bmy=new WG;return Bmy;}if(Bmx!==null)return Bmx;Bmx=new WF;return Bmx;}
function XE(){D6.call(this);}
function ATL(a,b,c,d){var e;a:{while(true){if((b+a.cM.d_()|0)>d.bz)break a;e=a.cM.dm(b,c);if(e<1)break;b=b+e|0;}}return a.s.l(b,c,d);}
function Su(){FU.call(this);}
function AYR(a,b,c,d){var e;if((b+a.cM.d_()|0)<=d.bz){e=a.cM.dm(b,c);if(e>=1)b=b+e|0;}return a.s.l(b,c,d);}
function Un(){GC.call(this);}
function A9T(a,b,c,d){var e,f,g,h,i;e=a.k1.ji;f=a.k1.iv;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.cM.d_()|0)>d.bz)break a;h=a.cM.dm(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.s.l(b,c,d);}if((b+a.cM.d_()|0)>d.bz){d.hq=1;return (-1);}i=a.cM.dm(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function UZ(){D6.call(this);}
function AZz(a,b,c,d){var e;while(true){e=a.s.l(b,c,d);if(e>=0)break;if((b+a.cM.d_()|0)<=d.bz){e=a.cM.dm(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function Wb(){FU.call(this);}
function ATP(a,b,c,d){var e;e=a.s.l(b,c,d);if(e>=0)return e;return a.bR.l(b,c,d);}
function Qq(){GC.call(this);}
function A92(a,b,c,d){var e,f,g,h,i;e=a.k1.ji;f=a.k1.iv;g=0;while(true){if(g>=e){a:{while(true){h=a.s.l(b,c,d);if(h>=0)break;if((b+a.cM.d_()|0)<=d.bz){h=a.cM.dm(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.cM.d_()|0)>d.bz){d.hq=1;return (-1);}i=a.cM.dm(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function ABX(){Cp.call(this);}
function A1w(){var a=new ABX();AVz(a);return a;}
function AVz(a){CA(a);}
function A7t(a,b,c,d){if(b&&!(d.lo&&b==d.fh))return (-1);return a.s.l(b,c,d);}
function A6W(a,b){return 0;}
function AAA(){Cp.call(this);this.Bx=0;}
function A$x(a){var b=new AAA();AXt(b,a);return b;}
function AXt(a,b){CA(a);a.Bx=b;}
function A4p(a,b,c,d){var e,f,g;e=b<d.bz?Y(c,b):32;f=!b?32:Y(c,b-1|0);g=d.oj?0:d.fh;return (e!=32&&!U5(a,e,b,g,c)?0:1)^(f!=32&&!U5(a,f,b-1|0,g,c)?0:1)^a.Bx?(-1):a.s.l(b,c,d);}
function A4v(a,b){return 0;}
function U5(a,b,c,d,e){var f;if(!Lw(b)&&b!=95){a:{if(Dp(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Y(e,c);if(Lw(f))return 0;if(Dp(f)!=6)return 1;}}return 1;}return 0;}
function AJE(){Cp.call(this);}
function Baz(){var a=new AJE();A0Y(a);return a;}
function A0Y(a){CA(a);}
function AXs(a,b,c,d){if(b!=d.k3)return (-1);return a.s.l(b,c,d);}
function A2N(a,b){return 0;}
function SO(){Cp.call(this);this.md=0;}
function Bbj(a){var b=new SO();AQN(b,a);return b;}
function AQN(a,b){CA(a);a.md=b;}
function A9c(a,b,c,d){var e,f,g;e=!d.lo?Bg(c):d.bz;if(b>=e){Cv(d,a.md,0);return a.s.l(b,c,d);}f=e-b|0;if(f==2&&Y(c,b)==13&&Y(c,b+1|0)==10){Cv(d,a.md,0);return a.s.l(b,c,d);}a:{if(f==1){g=Y(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Cv(d,a.md,0);return a.s.l(b,c,d);}
function A4X(a,b){var c;c=!Ep(b,a.md)?0:1;Cv(b,a.md,(-1));return c;}
function ARj(){Cp.call(this);}
function Bbr(){var a=new ARj();AXi(a);return a;}
function AXi(a){CA(a);}
function A8I(a,b,c,d){if(b<(d.oj?Bg(c):d.bz))return (-1);d.hq=1;d.Jr=1;return a.s.l(b,c,d);}
function A2$(a,b){return 0;}
function AI4(){Cp.call(this);this.D3=null;}
function BcW(a){var b=new AI4();A9e(b,a);return b;}
function A9e(a,b){CA(a);a.D3=b;}
function A4R(a,b,c,d){a:{if(b!=d.bz){if(!b)break a;if(d.lo&&b==d.fh)break a;if(a.D3.Er(Y(c,b-1|0),Y(c,b)))break a;}return (-1);}return a.s.l(b,c,d);}
function AWC(a,b){return 0;}
function AGy(){CE.call(this);}
function BbB(){var a=new AGy();A8y(a);return a;}
function A8y(a){CA(a);}
function A2w(a,b,c,d){var e,f,g,h;e=d.bz;f=b+1|0;if(f>e){d.hq=1;return (-1);}g=Y(c,b);if(Dt(g)){h=b+2|0;if(h<=e&&Kd(g,Y(c,f)))return a.s.l(h,c,d);}return a.s.l(f,c,d);}
function A4A(a,b){a.s=b;}
function A8v(a){return (-2147483602);}
function A4y(a,b){return 1;}
function ZV(){CE.call(this);this.u2=null;}
function Bbb(a){var b=new ZV();AU6(b,a);return b;}
function AU6(a,b){CA(a);a.u2=b;}
function A8D(a,b,c,d){var e,f,g,h;e=d.bz;f=b+1|0;if(f>e){d.hq=1;return (-1);}g=Y(c,b);if(Dt(g)){b=b+2|0;if(b<=e){h=Y(c,f);if(Kd(g,h))return a.u2.oA(EJ(g,h))?(-1):a.s.l(b,c,d);}}return a.u2.oA(g)?(-1):a.s.l(f,c,d);}
function A9K(a,b){a.s=b;}
function ASY(a){return (-2147483602);}
function A2D(a,b){return 1;}
function AQY(){Cp.call(this);this.pO=0;}
function BaY(a){var b=new AQY();A5$(b,a);return b;}
function A5$(a,b){CA(a);a.pO=b;}
function AXW(a,b,c,d){var e;e=!d.lo?Bg(c):d.bz;if(b>=e){Cv(d,a.pO,0);return a.s.l(b,c,d);}if((e-b|0)==1&&Y(c,b)==10){Cv(d,a.pO,1);return a.s.l(b+1|0,c,d);}return (-1);}
function A56(a,b){var c;c=!Ep(b,a.pO)?0:1;Cv(b,a.pO,(-1));return c;}
function AOg(){Cp.call(this);this.or=0;}
function BaH(a){var b=new AOg();A6s(b,a);return b;}
function A6s(a,b){CA(a);a.or=b;}
function AZl(a,b,c,d){if((!d.lo?Bg(c)-b|0:d.bz-b|0)<=0){Cv(d,a.or,0);return a.s.l(b,c,d);}if(Y(c,b)!=10)return (-1);Cv(d,a.or,1);return a.s.l(b+1|0,c,d);}
function A52(a,b){var c;c=!Ep(b,a.or)?0:1;Cv(b,a.or,(-1));return c;}
function AIq(){Cp.call(this);this.lJ=0;}
function Bad(a){var b=new AIq();A_Z(b,a);return b;}
function A_Z(a,b){CA(a);a.lJ=b;}
function A6R(a,b,c,d){var e,f,g;e=!d.lo?Bg(c)-b|0:d.fh-b|0;if(!e){Cv(d,a.lJ,0);return a.s.l(b,c,d);}if(e<2){f=Y(c,b);g=97;}else{f=Y(c,b);g=Y(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Cv(d,a.lJ,0);return a.s.l(b,c,d);case 13:if(g!=10){Cv(d,a.lJ,0);return a.s.l(b,c,d);}Cv(d,a.lJ,0);return a.s.l(b,c,d);default:}return (-1);}
function AU$(a,b){var c;c=!Ep(b,a.lJ)?0:1;Cv(b,a.lJ,(-1));return c;}
function IQ(){var a=this;CE.call(a);a.zm=0;a.mL=0;}
function Bc9(a,b){var c=new IQ();PM(c,a,b);return c;}
function PM(a,b,c){CA(a);a.zm=b;a.mL=c;}
function ATM(a,b,c,d){var e,f,g,h;e=HG(a,d);if(e!==null&&(b+Bg(e)|0)<=d.bz){f=0;while(true){if(f>=Bg(e)){Cv(d,a.mL,Bg(e));return a.s.l(b+Bg(e)|0,c,d);}g=Y(e,f);h=b+f|0;if(g!=Y(c,h)&&Kn(Y(e,f))!=Y(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A9h(a,b){a.s=b;}
function HG(a,b){return ANg(b,a.zm);}
function A0s(a,b){var c;c=!Ep(b,a.mL)?0:1;Cv(b,a.mL,(-1));return c;}
function AQ9(){IQ.call(this);}
function BbP(a,b){var c=new AQ9();A$Y(c,a,b);return c;}
function A$Y(a,b,c){PM(a,b,c);}
function AVf(a,b,c,d){var e,f;e=HG(a,d);if(e!==null&&(b+Bg(e)|0)<=d.bz){f=!Wj(c,e,b)?(-1):Bg(e);if(f<0)return (-1);Cv(d,a.mL,f);return a.s.l(b+f|0,c,d);}return (-1);}
function A1E(a,b,c,d){var e,f,g;e=HG(a,d);f=d.fh;if(e!==null&&(b+Bg(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=AKV(g,e,b);if(b<0)return (-1);if(a.s.l(b+Bg(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ATE(a,b,c,d,e){var f,g,h;f=HG(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=AAK(g,f,c);if(h<0)break a;if(h<b)break a;if(a.s.l(h+Bg(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A7X(a,b){return 1;}
function AMq(){IQ.call(this);}
function BaG(a,b){var c=new AMq();AWw(c,a,b);return c;}
function AWw(a,b,c){PM(a,b,c);}
function AYn(a,b,c,d){var e,f;e=HG(a,d);if(e!==null&&(b+Bg(e)|0)<=d.bz){f=0;while(true){if(f>=Bg(e)){Cv(d,a.mL,Bg(e));return a.s.l(b+Bg(e)|0,c,d);}if(EV(FD(Y(e,f)))!=EV(FD(Y(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AM4(){var a=this;CJ.call(a);a.e4=null;a.xg=null;a.vd=null;}
function BaJ(a){var b=new AM4();A5e(b,a);return b;}
function A5e(a,b){var c;EN(a);a.e4=U(b);a.dk=OJ(b);a.xg=A8u(a.dk);a.vd=A8u(a.dk);c=0;while(c<(a.dk-1|0)){Qs(a.xg,Y(a.e4,c),(a.dk-c|0)-1|0);Qs(a.vd,Y(a.e4,(a.dk-c|0)-1|0),(a.dk-c|0)-1|0);c=c+1|0;}}
function AVv(a,b,c){return !LX(a,c,b)?(-1):a.dk;}
function A4o(a,b,c,d){var e,f;e=d.bz;while(true){if(b>e)return (-1);f=ARm(a,c,b,e);if(f<0)return (-1);if(a.s.l(f+a.dk|0,c,d)>=0)break;b=f+1|0;}return f;}
function A6b(a,b,c,d,e){while(true){if(c<b)return (-1);c=AQL(a,d,b,c);if(c<0)return (-1);if(a.s.l(c+a.dk|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AW4(a,b){var c;if(b instanceof Fu)return b.gA!=Y(a.e4,0)?0:1;if(b instanceof Fo)return Te(b,0,Ev(a.e4,0,1))<=0?0:1;if(!(b instanceof EP)){if(!(b instanceof EZ))return 1;return Bg(a.e4)>1&&b.kF==EJ(Y(a.e4,0),Y(a.e4,1))?1:0;}a:{b:{b=b;if(!b.T(Y(a.e4,0))){if(Bg(a.e4)<=1)break b;if(!b.T(EJ(Y(a.e4,0),Y(a.e4,1))))break b;}c=1;break a;}c=0;}return c;}
function ARm(a,b,c,d){var e,f;e=Y(a.e4,a.dk-1|0);while(true){if(c>(d-a.dk|0))return (-1);f=Y(b,(c+a.dk|0)-1|0);if(f==e&&LX(a,b,c))break;c=c+VM(a.xg,f)|0;}return c;}
function AQL(a,b,c,d){var e,f,g;e=Y(a.e4,0);f=(Bg(b)-d|0)-a.dk|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=Y(b,d);if(g==e&&LX(a,b,d))break;d=d-VM(a.vd,g)|0;}return d;}
function LX(a,b,c){var d;d=0;while(d<a.dk){if(Y(b,d+c|0)!=Y(a.e4,d))return 0;d=d+1|0;}return 1;}
function XP(){CJ.call(this);this.sQ=null;}
function Bc$(a){var b=new XP();A$A(b,a);return b;}
function A$A(a,b){var c,d;EN(a);c=new T;V(c);d=0;while(d<OJ(b)){Dy(c,EV(FD(AIs(b,d))));d=d+1|0;}a.sQ=U(c);a.dk=Kj(c);}
function AYq(a,b,c){var d;d=0;while(true){if(d>=Bg(a.sQ))return Bg(a.sQ);if(Y(a.sQ,d)!=EV(FD(Y(c,b+d|0))))break;d=d+1|0;}return (-1);}
function O8(){CJ.call(this);this.pM=null;}
function A9V(a,b,c){var d,e,f;d=0;while(true){if(d>=Bg(a.pM))return Bg(a.pM);e=Y(a.pM,d);f=b+d|0;if(e!=Y(c,f)&&Kn(Y(a.pM,d))!=Y(c,f))break;d=d+1|0;}return (-1);}
function H9(){D.call(this);}
var Bmz=null;var BmA=null;var BmB=null;function BmC(){var a=new H9();AGn(a);return a;}
function AGn(a){return;}
function ARI(a,b){var c,d,e;c=0;while(true){if(c>=BmB.data.length){d=new M8;Bj(d,B(3));d.Hn=B(3);d.JB=b;M(d);}e=BmB.data[c].data;if(DB(b,e[0]))break;c=c+1|0;}return e[1];}
function AAC(){var b,c,d,e;Bmz=Bbo();BmA=Bcp();b=J($rt_arraycls(D),194);c=b.data;d=J(D,2);e=d.data;e[0]=B(641);e[1]=BbE();c[0]=d;d=J(D,2);e=d.data;e[0]=B(642);e[1]=A__();c[1]=d;d=J(D,2);e=d.data;e[0]=B(643);e[1]=BcU();c[2]=d;d=J(D,2);e=d.data;e[0]=B(644);e[1]=Bc2();c[3]=d;d=J(D,2);e=d.data;e[0]=B(645);e[1]=BmA;c[4]=d;d=J(D,2);e=d.data;e[0]=B(646);e[1]=Bcv();c[5]=d;d=J(D,2);e=d.data;e[0]=B(647);e[1]=BaM();c[6]=d;d=J(D,2);e=d.data;e[0]=B(648);e[1]=BbR();c[7]=d;d=J(D,2);e=d.data;e[0]=B(649);e[1]=BbO();c[8]=d;d
=J(D,2);e=d.data;e[0]=B(650);e[1]=Ban();c[9]=d;d=J(D,2);e=d.data;e[0]=B(651);e[1]=BaB();c[10]=d;d=J(D,2);e=d.data;e[0]=B(652);e[1]=BbT();c[11]=d;d=J(D,2);e=d.data;e[0]=B(653);e[1]=Ba8();c[12]=d;d=J(D,2);e=d.data;e[0]=B(654);e[1]=A_9();c[13]=d;d=J(D,2);e=d.data;e[0]=B(655);e[1]=BcY();c[14]=d;d=J(D,2);e=d.data;e[0]=B(656);e[1]=BaA();c[15]=d;d=J(D,2);e=d.data;e[0]=B(657);e[1]=Bct();c[16]=d;d=J(D,2);e=d.data;e[0]=B(658);e[1]=Bb9();c[17]=d;d=J(D,2);e=d.data;e[0]=B(659);e[1]=Bcu();c[18]=d;d=J(D,2);e=d.data;e[0]=B(660);e[1]
=Baq();c[19]=d;d=J(D,2);e=d.data;e[0]=B(661);e[1]=Bc3();c[20]=d;d=J(D,2);e=d.data;e[0]=B(662);e[1]=Bb5();c[21]=d;d=J(D,2);e=d.data;e[0]=B(663);e[1]=Ba0();c[22]=d;d=J(D,2);e=d.data;e[0]=B(664);e[1]=BcT();c[23]=d;d=J(D,2);e=d.data;e[0]=B(665);e[1]=BcQ();c[24]=d;d=J(D,2);e=d.data;e[0]=B(666);e[1]=BbA();c[25]=d;d=J(D,2);e=d.data;e[0]=B(667);e[1]=Bap();c[26]=d;d=J(D,2);e=d.data;e[0]=B(668);e[1]=BcJ();c[27]=d;d=J(D,2);e=d.data;e[0]=B(669);e[1]=Bmz;c[28]=d;d=J(D,2);e=d.data;e[0]=B(670);e[1]=Ba2();c[29]=d;d=J(D,2);e
=d.data;e[0]=B(44);e[1]=BbS();c[30]=d;d=J(D,2);e=d.data;e[0]=B(671);e[1]=Bmz;c[31]=d;d=J(D,2);e=d.data;e[0]=B(58);e[1]=A_8();c[32]=d;d=J(D,2);e=d.data;e[0]=B(672);e[1]=BmA;c[33]=d;d=J(D,2);e=d.data;e[0]=B(59);e[1]=BaF();c[34]=d;d=J(D,2);e=d.data;e[0]=B(673);e[1]=W(0,127);c[35]=d;d=J(D,2);e=d.data;e[0]=B(674);e[1]=W(128,255);c[36]=d;d=J(D,2);e=d.data;e[0]=B(675);e[1]=W(256,383);c[37]=d;d=J(D,2);e=d.data;e[0]=B(676);e[1]=W(384,591);c[38]=d;d=J(D,2);e=d.data;e[0]=B(677);e[1]=W(592,687);c[39]=d;d=J(D,2);e=d.data;e[0]
=B(678);e[1]=W(688,767);c[40]=d;d=J(D,2);e=d.data;e[0]=B(679);e[1]=W(768,879);c[41]=d;d=J(D,2);e=d.data;e[0]=B(680);e[1]=W(880,1023);c[42]=d;d=J(D,2);e=d.data;e[0]=B(681);e[1]=W(1024,1279);c[43]=d;d=J(D,2);e=d.data;e[0]=B(682);e[1]=W(1280,1327);c[44]=d;d=J(D,2);e=d.data;e[0]=B(683);e[1]=W(1328,1423);c[45]=d;d=J(D,2);e=d.data;e[0]=B(684);e[1]=W(1424,1535);c[46]=d;d=J(D,2);e=d.data;e[0]=B(685);e[1]=W(1536,1791);c[47]=d;d=J(D,2);e=d.data;e[0]=B(686);e[1]=W(1792,1871);c[48]=d;d=J(D,2);e=d.data;e[0]=B(687);e[1]=
W(1872,1919);c[49]=d;d=J(D,2);e=d.data;e[0]=B(688);e[1]=W(1920,1983);c[50]=d;d=J(D,2);e=d.data;e[0]=B(689);e[1]=W(2304,2431);c[51]=d;d=J(D,2);e=d.data;e[0]=B(690);e[1]=W(2432,2559);c[52]=d;d=J(D,2);e=d.data;e[0]=B(691);e[1]=W(2560,2687);c[53]=d;d=J(D,2);e=d.data;e[0]=B(692);e[1]=W(2688,2815);c[54]=d;d=J(D,2);e=d.data;e[0]=B(693);e[1]=W(2816,2943);c[55]=d;d=J(D,2);e=d.data;e[0]=B(694);e[1]=W(2944,3071);c[56]=d;d=J(D,2);e=d.data;e[0]=B(695);e[1]=W(3072,3199);c[57]=d;d=J(D,2);e=d.data;e[0]=B(696);e[1]=W(3200,3327);c[58]
=d;d=J(D,2);e=d.data;e[0]=B(697);e[1]=W(3328,3455);c[59]=d;d=J(D,2);e=d.data;e[0]=B(698);e[1]=W(3456,3583);c[60]=d;d=J(D,2);e=d.data;e[0]=B(699);e[1]=W(3584,3711);c[61]=d;d=J(D,2);e=d.data;e[0]=B(700);e[1]=W(3712,3839);c[62]=d;d=J(D,2);e=d.data;e[0]=B(701);e[1]=W(3840,4095);c[63]=d;d=J(D,2);e=d.data;e[0]=B(702);e[1]=W(4096,4255);c[64]=d;d=J(D,2);e=d.data;e[0]=B(703);e[1]=W(4256,4351);c[65]=d;d=J(D,2);e=d.data;e[0]=B(704);e[1]=W(4352,4607);c[66]=d;d=J(D,2);e=d.data;e[0]=B(705);e[1]=W(4608,4991);c[67]=d;d=J(D,
2);e=d.data;e[0]=B(706);e[1]=W(4992,5023);c[68]=d;d=J(D,2);e=d.data;e[0]=B(707);e[1]=W(5024,5119);c[69]=d;d=J(D,2);e=d.data;e[0]=B(708);e[1]=W(5120,5759);c[70]=d;d=J(D,2);e=d.data;e[0]=B(709);e[1]=W(5760,5791);c[71]=d;d=J(D,2);e=d.data;e[0]=B(710);e[1]=W(5792,5887);c[72]=d;d=J(D,2);e=d.data;e[0]=B(711);e[1]=W(5888,5919);c[73]=d;d=J(D,2);e=d.data;e[0]=B(712);e[1]=W(5920,5951);c[74]=d;d=J(D,2);e=d.data;e[0]=B(713);e[1]=W(5952,5983);c[75]=d;d=J(D,2);e=d.data;e[0]=B(714);e[1]=W(5984,6015);c[76]=d;d=J(D,2);e=d.data;e[0]
=B(715);e[1]=W(6016,6143);c[77]=d;d=J(D,2);e=d.data;e[0]=B(716);e[1]=W(6144,6319);c[78]=d;d=J(D,2);e=d.data;e[0]=B(717);e[1]=W(6400,6479);c[79]=d;d=J(D,2);e=d.data;e[0]=B(718);e[1]=W(6480,6527);c[80]=d;d=J(D,2);e=d.data;e[0]=B(719);e[1]=W(6528,6623);c[81]=d;d=J(D,2);e=d.data;e[0]=B(720);e[1]=W(6624,6655);c[82]=d;d=J(D,2);e=d.data;e[0]=B(721);e[1]=W(6656,6687);c[83]=d;d=J(D,2);e=d.data;e[0]=B(722);e[1]=W(7424,7551);c[84]=d;d=J(D,2);e=d.data;e[0]=B(723);e[1]=W(7552,7615);c[85]=d;d=J(D,2);e=d.data;e[0]=B(724);e[1]
=W(7616,7679);c[86]=d;d=J(D,2);e=d.data;e[0]=B(725);e[1]=W(7680,7935);c[87]=d;d=J(D,2);e=d.data;e[0]=B(726);e[1]=W(7936,8191);c[88]=d;d=J(D,2);e=d.data;e[0]=B(727);e[1]=W(8192,8303);c[89]=d;d=J(D,2);e=d.data;e[0]=B(728);e[1]=W(8304,8351);c[90]=d;d=J(D,2);e=d.data;e[0]=B(729);e[1]=W(8352,8399);c[91]=d;d=J(D,2);e=d.data;e[0]=B(730);e[1]=W(8400,8447);c[92]=d;d=J(D,2);e=d.data;e[0]=B(731);e[1]=W(8448,8527);c[93]=d;d=J(D,2);e=d.data;e[0]=B(732);e[1]=W(8528,8591);c[94]=d;d=J(D,2);e=d.data;e[0]=B(733);e[1]=W(8592,
8703);c[95]=d;d=J(D,2);e=d.data;e[0]=B(734);e[1]=W(8704,8959);c[96]=d;d=J(D,2);e=d.data;e[0]=B(735);e[1]=W(8960,9215);c[97]=d;d=J(D,2);e=d.data;e[0]=B(736);e[1]=W(9216,9279);c[98]=d;d=J(D,2);e=d.data;e[0]=B(737);e[1]=W(9280,9311);c[99]=d;d=J(D,2);e=d.data;e[0]=B(738);e[1]=W(9312,9471);c[100]=d;d=J(D,2);e=d.data;e[0]=B(739);e[1]=W(9472,9599);c[101]=d;d=J(D,2);e=d.data;e[0]=B(740);e[1]=W(9600,9631);c[102]=d;d=J(D,2);e=d.data;e[0]=B(741);e[1]=W(9632,9727);c[103]=d;d=J(D,2);e=d.data;e[0]=B(742);e[1]=W(9728,9983);c[104]
=d;d=J(D,2);e=d.data;e[0]=B(743);e[1]=W(9984,10175);c[105]=d;d=J(D,2);e=d.data;e[0]=B(744);e[1]=W(10176,10223);c[106]=d;d=J(D,2);e=d.data;e[0]=B(745);e[1]=W(10224,10239);c[107]=d;d=J(D,2);e=d.data;e[0]=B(746);e[1]=W(10240,10495);c[108]=d;d=J(D,2);e=d.data;e[0]=B(747);e[1]=W(10496,10623);c[109]=d;d=J(D,2);e=d.data;e[0]=B(748);e[1]=W(10624,10751);c[110]=d;d=J(D,2);e=d.data;e[0]=B(749);e[1]=W(10752,11007);c[111]=d;d=J(D,2);e=d.data;e[0]=B(750);e[1]=W(11008,11263);c[112]=d;d=J(D,2);e=d.data;e[0]=B(751);e[1]=W(11264,
11359);c[113]=d;d=J(D,2);e=d.data;e[0]=B(752);e[1]=W(11392,11519);c[114]=d;d=J(D,2);e=d.data;e[0]=B(753);e[1]=W(11520,11567);c[115]=d;d=J(D,2);e=d.data;e[0]=B(754);e[1]=W(11568,11647);c[116]=d;d=J(D,2);e=d.data;e[0]=B(755);e[1]=W(11648,11743);c[117]=d;d=J(D,2);e=d.data;e[0]=B(756);e[1]=W(11776,11903);c[118]=d;d=J(D,2);e=d.data;e[0]=B(757);e[1]=W(11904,12031);c[119]=d;d=J(D,2);e=d.data;e[0]=B(758);e[1]=W(12032,12255);c[120]=d;d=J(D,2);e=d.data;e[0]=B(759);e[1]=W(12272,12287);c[121]=d;d=J(D,2);e=d.data;e[0]=B(760);e[1]
=W(12288,12351);c[122]=d;d=J(D,2);e=d.data;e[0]=B(761);e[1]=W(12352,12447);c[123]=d;d=J(D,2);e=d.data;e[0]=B(762);e[1]=W(12448,12543);c[124]=d;d=J(D,2);e=d.data;e[0]=B(763);e[1]=W(12544,12591);c[125]=d;d=J(D,2);e=d.data;e[0]=B(764);e[1]=W(12592,12687);c[126]=d;d=J(D,2);e=d.data;e[0]=B(765);e[1]=W(12688,12703);c[127]=d;d=J(D,2);e=d.data;e[0]=B(766);e[1]=W(12704,12735);c[128]=d;d=J(D,2);e=d.data;e[0]=B(767);e[1]=W(12736,12783);c[129]=d;d=J(D,2);e=d.data;e[0]=B(768);e[1]=W(12784,12799);c[130]=d;d=J(D,2);e=d.data;e[0]
=B(769);e[1]=W(12800,13055);c[131]=d;d=J(D,2);e=d.data;e[0]=B(770);e[1]=W(13056,13311);c[132]=d;d=J(D,2);e=d.data;e[0]=B(771);e[1]=W(13312,19893);c[133]=d;d=J(D,2);e=d.data;e[0]=B(772);e[1]=W(19904,19967);c[134]=d;d=J(D,2);e=d.data;e[0]=B(773);e[1]=W(19968,40959);c[135]=d;d=J(D,2);e=d.data;e[0]=B(774);e[1]=W(40960,42127);c[136]=d;d=J(D,2);e=d.data;e[0]=B(775);e[1]=W(42128,42191);c[137]=d;d=J(D,2);e=d.data;e[0]=B(776);e[1]=W(42752,42783);c[138]=d;d=J(D,2);e=d.data;e[0]=B(777);e[1]=W(43008,43055);c[139]=d;d=J(D,
2);e=d.data;e[0]=B(778);e[1]=W(44032,55203);c[140]=d;d=J(D,2);e=d.data;e[0]=B(779);e[1]=W(55296,56191);c[141]=d;d=J(D,2);e=d.data;e[0]=B(780);e[1]=W(56192,56319);c[142]=d;d=J(D,2);e=d.data;e[0]=B(781);e[1]=W(56320,57343);c[143]=d;d=J(D,2);e=d.data;e[0]=B(782);e[1]=W(57344,63743);c[144]=d;d=J(D,2);e=d.data;e[0]=B(783);e[1]=W(63744,64255);c[145]=d;d=J(D,2);e=d.data;e[0]=B(784);e[1]=W(64256,64335);c[146]=d;d=J(D,2);e=d.data;e[0]=B(785);e[1]=W(64336,65023);c[147]=d;d=J(D,2);e=d.data;e[0]=B(786);e[1]=W(65024,65039);c[148]
=d;d=J(D,2);e=d.data;e[0]=B(787);e[1]=W(65040,65055);c[149]=d;d=J(D,2);e=d.data;e[0]=B(788);e[1]=W(65056,65071);c[150]=d;d=J(D,2);e=d.data;e[0]=B(789);e[1]=W(65072,65103);c[151]=d;d=J(D,2);e=d.data;e[0]=B(790);e[1]=W(65104,65135);c[152]=d;d=J(D,2);e=d.data;e[0]=B(791);e[1]=W(65136,65279);c[153]=d;d=J(D,2);e=d.data;e[0]=B(792);e[1]=W(65280,65519);c[154]=d;d=J(D,2);e=d.data;e[0]=B(793);e[1]=W(0,1114111);c[155]=d;d=J(D,2);e=d.data;e[0]=B(794);e[1]=BbU();c[156]=d;d=J(D,2);e=d.data;e[0]=B(795);e[1]=CB(0,1);c[157]
=d;d=J(D,2);e=d.data;e[0]=B(796);e[1]=Lb(62,1);c[158]=d;d=J(D,2);e=d.data;e[0]=B(797);e[1]=CB(1,1);c[159]=d;d=J(D,2);e=d.data;e[0]=B(798);e[1]=CB(2,1);c[160]=d;d=J(D,2);e=d.data;e[0]=B(799);e[1]=CB(3,0);c[161]=d;d=J(D,2);e=d.data;e[0]=B(800);e[1]=CB(4,0);c[162]=d;d=J(D,2);e=d.data;e[0]=B(801);e[1]=CB(5,1);c[163]=d;d=J(D,2);e=d.data;e[0]=B(802);e[1]=Lb(448,1);c[164]=d;d=J(D,2);e=d.data;e[0]=B(803);e[1]=CB(6,1);c[165]=d;d=J(D,2);e=d.data;e[0]=B(804);e[1]=CB(7,0);c[166]=d;d=J(D,2);e=d.data;e[0]=B(805);e[1]=CB(8,
1);c[167]=d;d=J(D,2);e=d.data;e[0]=B(76);e[1]=Lb(3584,1);c[168]=d;d=J(D,2);e=d.data;e[0]=B(806);e[1]=CB(9,1);c[169]=d;d=J(D,2);e=d.data;e[0]=B(807);e[1]=CB(10,1);c[170]=d;d=J(D,2);e=d.data;e[0]=B(808);e[1]=CB(11,1);c[171]=d;d=J(D,2);e=d.data;e[0]=B(809);e[1]=Lb(28672,0);c[172]=d;d=J(D,2);e=d.data;e[0]=B(810);e[1]=CB(12,0);c[173]=d;d=J(D,2);e=d.data;e[0]=B(811);e[1]=CB(13,0);c[174]=d;d=J(D,2);e=d.data;e[0]=B(812);e[1]=CB(14,0);c[175]=d;d=J(D,2);e=d.data;e[0]=B(813);e[1]=Bcj(983040,1,1);c[176]=d;d=J(D,2);e=d.data;e[0]
=B(814);e[1]=CB(15,0);c[177]=d;d=J(D,2);e=d.data;e[0]=B(815);e[1]=CB(16,1);c[178]=d;d=J(D,2);e=d.data;e[0]=B(816);e[1]=CB(18,1);c[179]=d;d=J(D,2);e=d.data;e[0]=B(817);e[1]=BaV(19,0,1);c[180]=d;d=J(D,2);e=d.data;e[0]=B(818);e[1]=Lb(1643118592,1);c[181]=d;d=J(D,2);e=d.data;e[0]=B(819);e[1]=CB(20,0);c[182]=d;d=J(D,2);e=d.data;e[0]=B(820);e[1]=CB(21,0);c[183]=d;d=J(D,2);e=d.data;e[0]=B(821);e[1]=CB(22,0);c[184]=d;d=J(D,2);e=d.data;e[0]=B(822);e[1]=CB(23,0);c[185]=d;d=J(D,2);e=d.data;e[0]=B(823);e[1]=CB(24,1);c[186]
=d;d=J(D,2);e=d.data;e[0]=B(824);e[1]=Lb(2113929216,1);c[187]=d;d=J(D,2);e=d.data;e[0]=B(825);e[1]=CB(25,1);c[188]=d;d=J(D,2);e=d.data;e[0]=B(826);e[1]=CB(26,0);c[189]=d;d=J(D,2);e=d.data;e[0]=B(827);e[1]=CB(27,0);c[190]=d;d=J(D,2);e=d.data;e[0]=B(828);e[1]=CB(28,1);c[191]=d;d=J(D,2);e=d.data;e[0]=B(829);e[1]=CB(29,0);c[192]=d;d=J(D,2);e=d.data;e[0]=B(830);e[1]=CB(30,0);c[193]=d;BmB=b;}
function By(){var a=this;D.call(a);a.vC=null;a.uF=null;}
function AP3(a,b){if(!b&&a.vC===null)a.vC=a.bX();else if(b&&a.uF===null)a.uF=Fx(a.bX(),1);if(b)return a.uF;return a.vC;}
function Ti(){CJ.call(this);this.Ap=0;}
function A0M(a,b,c){var d,e;d=b+1|0;e=Y(c,b);d=Y(c,d);return a.Ap!=GQ(GP(EJ(e,d)))?(-1):2;}
function N1(){CE.call(this);this.mv=0;}
function AY_(a){var b=new N1();AUF(b,a);return b;}
function AUF(a,b){CA(a);a.mv=b;}
function A8V(a,b){a.s=b;}
function A4Y(a,b,c,d){var e,f;e=b+1|0;if(e>d.bz){d.hq=1;return (-1);}f=Y(c,b);if(b>d.fh&&Dt(Y(c,b-1|0)))return (-1);if(a.mv!=f)return (-1);return a.s.l(e,c,d);}
function AW3(a,b,c,d){var e,f,g,h,i;if(!(c instanceof B4))return Jf(a,b,c,d);e=c;f=d.fh;g=d.bz;while(true){if(b>=g)return (-1);h=Hh(e,a.mv,b);if(h<0)return (-1);if(h>f&&Dt(Y(e,h-1|0))){b=h+1|0;continue;}i=a.s;b=h+1|0;if(i.l(b,c,d)>=0)break;}return h;}
function A5m(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Js(a,b,c,d,e);f=e.fh;g=d;a:{while(true){if(c<b)return (-1);c=Ii(g,a.mv,c);if(c<0)break a;if(c<b)break a;if(c>f&&Dt(Y(g,c-1|0))){c=c+(-2)|0;continue;}if(a.s.l(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ATz(a,b){if(b instanceof Fu)return 0;if(b instanceof Fo)return 0;if(b instanceof EP)return 0;if(b instanceof EZ)return 0;if(b instanceof N6)return 0;if(!(b instanceof N1))return 1;return b.mv!=a.mv?0:1;}
function A1j(a,b){return 1;}
function N6(){CE.call(this);this.l4=0;}
function A6S(a){var b=new N6();AZh(b,a);return b;}
function AZh(a,b){CA(a);a.l4=b;}
function A4I(a,b){a.s=b;}
function ATd(a,b,c,d){var e,f,g,h;e=d.bz;f=b+1|0;g=R(f,e);if(g>0){d.hq=1;return (-1);}h=Y(c,b);if(g<0&&DR(Y(c,f)))return (-1);if(a.l4!=h)return (-1);return a.s.l(f,c,d);}
function A86(a,b,c,d){var e,f,g;if(!(c instanceof B4))return Jf(a,b,c,d);e=c;f=d.bz;while(true){if(b>=f)return (-1);g=Hh(e,a.l4,b);if(g<0)return (-1);b=g+1|0;if(b<f&&DR(Y(e,b))){b=g+2|0;continue;}if(a.s.l(b,c,d)>=0)break;}return g;}
function A0K(a,b,c,d,e){var f,g,h;if(!(d instanceof B4))return Js(a,b,c,d,e);f=d;g=e.bz;a:{while(true){if(c<b)return (-1);c=Ii(f,a.l4,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&DR(Y(f,h))){c=c+(-1)|0;continue;}if(a.s.l(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AVw(a,b){if(b instanceof Fu)return 0;if(b instanceof Fo)return 0;if(b instanceof EP)return 0;if(b instanceof EZ)return 0;if(b instanceof N1)return 0;if(!(b instanceof N6))return 1;return b.l4!=a.l4?0:1;}
function A88(a,b){return 1;}
function EZ(){var a=this;CJ.call(a);a.tG=0;a.si=0;a.kF=0;}
function A9B(a,b,c){var d,e;d=b+1|0;e=Y(c,b);d=Y(c,d);return a.tG==e&&a.si==d?2:(-1);}
function A8h(a,b,c,d){var e,f,g;if(!(c instanceof B4))return Jf(a,b,c,d);e=c;f=d.bz;while(b<f){b=Hh(e,a.tG,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=Y(e,b);if(a.si==g&&a.s.l(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AUG(a,b,c,d,e){var f;if(!(d instanceof B4))return Js(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=Ii(f,a.si,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.tG==Y(f,c)&&a.s.l(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function A3s(a){return a.kF;}
function A9s(a,b){if(b instanceof EZ)return b.kF!=a.kF?0:1;if(b instanceof EP)return b.T(a.kF);if(b instanceof Fu)return 0;if(!(b instanceof Fo))return 1;return 0;}
function WF(){Gk.call(this);}
function BmD(){var a=new WF();A4k(a);return a;}
function A4k(a){return;}
function AUP(a,b){return b!=10?0:1;}
function A0p(a,b,c){return b!=10?0:1;}
function WG(){Gk.call(this);}
function BmE(){var a=new WG();AW1(a);return a;}
function AW1(a){return;}
function A94(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function A2g(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AE2(){var a=this;D.call(a);a.o0=null;a.tW=null;a.gd=0;a.BU=0;}
function A8u(a){var b=new AE2();AXr(b,a);return b;}
function AXr(a,b){while(b>=a.gd){a.gd=a.gd<<1|1;}a.gd=a.gd<<1|1;a.o0=$rt_createIntArray(a.gd+1|0);a.tW=$rt_createIntArray(a.gd+1|0);a.BU=b;}
function Qs(a,b,c){var d,e;d=0;e=b&a.gd;while(a.o0.data[e]&&a.o0.data[e]!=b){d=(d+1|0)&a.gd;e=(e+d|0)&a.gd;}a.o0.data[e]=b;a.tW.data[e]=c;}
function VM(a,b){var c,d,e;c=b&a.gd;d=0;while(true){e=a.o0.data[c];if(!e)break;if(e==b)return a.tW.data[c];d=(d+1|0)&a.gd;c=(c+d|0)&a.gd;}return a.BU;}
function YG(){D.call(this);}
function NZ(){By.call(this);}
function Bbo(){var a=new NZ();AXa(a);return a;}
function AXa(a){return;}
function AMz(a){return Dq(CH(Eq(),9,13),32);}
function Nr(){By.call(this);}
function Bcp(){var a=new Nr();A0_(a);return a;}
function A0_(a){return;}
function ANZ(a){return CH(Eq(),48,57);}
function AEU(){By.call(this);}
function BbE(){var a=new AEU();AWJ(a);return a;}
function AWJ(a){return;}
function A9L(a){return CH(Eq(),97,122);}
function AFz(){By.call(this);}
function A__(){var a=new AFz();AXv(a);return a;}
function AXv(a){return;}
function A1l(a){return CH(Eq(),65,90);}
function AFI(){By.call(this);}
function BcU(){var a=new AFI();AT$(a);return a;}
function AT$(a){return;}
function AVY(a){return CH(Eq(),0,127);}
function NV(){By.call(this);}
function Bc2(){var a=new NV();AVg(a);return a;}
function AVg(a){return;}
function Z1(a){return CH(CH(Eq(),97,122),65,90);}
function Ms(){NV.call(this);}
function Bcv(){var a=new Ms();AXd(a);return a;}
function AXd(a){return;}
function AA8(a){return CH(Z1(a),48,57);}
function AH7(){By.call(this);}
function BaM(){var a=new AH7();A78(a);return a;}
function A78(a){return;}
function A6u(a){return CH(CH(CH(Eq(),33,64),91,96),123,126);}
function ON(){Ms.call(this);}
function BbR(){var a=new ON();AZ8(a);return a;}
function AZ8(a){return;}
function AIk(a){return CH(CH(CH(AA8(a),33,64),91,96),123,126);}
function AM1(){ON.call(this);}
function BbO(){var a=new AM1();A02(a);return a;}
function A02(a){return;}
function AYO(a){return Dq(AIk(a),32);}
function ACX(){By.call(this);}
function Ban(){var a=new ACX();A9W(a);return a;}
function A9W(a){return;}
function A5d(a){return Dq(Dq(Eq(),32),9);}
function AAv(){By.call(this);}
function BaB(){var a=new AAv();A_e(a);return a;}
function A_e(a){return;}
function AYF(a){return Dq(CH(Eq(),0,31),127);}
function AKn(){By.call(this);}
function BbT(){var a=new AKn();AUm(a);return a;}
function AUm(a){return;}
function A2h(a){return CH(CH(CH(Eq(),48,57),97,102),65,70);}
function AQq(){By.call(this);}
function Ba8(){var a=new AQq();A4c(a);return a;}
function A4c(a){return;}
function A8t(a){var b;b=new VQ;b.IG=a;B0(b);b.b_=1;return b;}
function AId(){By.call(this);}
function A_9(){var a=new AId();A0m(a);return a;}
function A0m(a){return;}
function A3f(a){var b;b=new Tn;b.IO=a;B0(b);b.b_=1;return b;}
function APC(){By.call(this);}
function BcY(){var a=new APC();AUa(a);return a;}
function AUa(a){return;}
function AXc(a){var b;b=new QV;b.Ii=a;B0(b);return b;}
function AEC(){By.call(this);}
function BaA(){var a=new AEC();AYI(a);return a;}
function AYI(a){return;}
function A0u(a){var b;b=new QU;b.F1=a;B0(b);return b;}
function AGd(){By.call(this);}
function Bct(){var a=new AGd();AVe(a);return a;}
function AVe(a){return;}
function A5b(a){var b;b=new SF;b.G_=a;B0(b);Jt(b.b9,0,2048);b.b_=1;return b;}
function Y9(){By.call(this);}
function Bb9(){var a=new Y9();AUL(a);return a;}
function AUL(a){return;}
function AVG(a){var b;b=new Ui;b.I1=a;B0(b);b.b_=1;return b;}
function AIL(){By.call(this);}
function Bcu(){var a=new AIL();AYo(a);return a;}
function AYo(a){return;}
function A_i(a){var b;b=new Pp;b.Hq=a;B0(b);b.b_=1;return b;}
function APR(){By.call(this);}
function Baq(){var a=new APR();AYV(a);return a;}
function AYV(a){return;}
function A3a(a){var b;b=new Vc;b.Gu=a;B0(b);return b;}
function AFm(){By.call(this);}
function Bc3(){var a=new AFm();A6G(a);return a;}
function A6G(a){return;}
function AXZ(a){var b;b=new Tk;b.Fz=a;B0(b);b.b_=1;return b;}
function ALq(){By.call(this);}
function Bb5(){var a=new ALq();ATF(a);return a;}
function ATF(a){return;}
function AVM(a){var b;b=new Tm;b.GR=a;B0(b);b.b_=1;return b;}
function AC9(){By.call(this);}
function Ba0(){var a=new AC9();AUU(a);return a;}
function AUU(a){return;}
function A6d(a){var b;b=new Ph;b.G9=a;B0(b);b.b_=1;return b;}
function AHo(){By.call(this);}
function BcT(){var a=new AHo();AX8(a);return a;}
function AX8(a){return;}
function A7h(a){var b;b=new Uy;b.JG=a;B0(b);b.b_=1;return b;}
function AP5(){By.call(this);}
function BcQ(){var a=new AP5();A8m(a);return a;}
function A8m(a){return;}
function A1z(a){var b;b=new UC;b.Gd=a;B0(b);return b;}
function ABH(){By.call(this);}
function BbA(){var a=new ABH();AUO(a);return a;}
function AUO(a){return;}
function AZ0(a){var b;b=new V7;b.I_=a;B0(b);return b;}
function AAU(){By.call(this);}
function Bap(){var a=new AAU();A9F(a);return a;}
function A9F(a){return;}
function AY6(a){var b;b=new VH;b.FD=a;B0(b);b.b_=1;return b;}
function AIb(){By.call(this);}
function BcJ(){var a=new AIb();A6A(a);return a;}
function A6A(a){return;}
function A9I(a){var b;b=new OV;b.JY=a;B0(b);b.b_=1;return b;}
function Lu(){By.call(this);}
function Ba2(){var a=new Lu();AVT(a);return a;}
function AVT(a){return;}
function ACZ(a){return Dq(CH(CH(CH(Eq(),97,122),65,90),48,57),95);}
function AQT(){Lu.call(this);}
function BbS(){var a=new AQT();A6K(a);return a;}
function A6K(a){return;}
function AYX(a){var b;b=Fx(ACZ(a),1);b.b_=1;return b;}
function AM7(){NZ.call(this);}
function A_8(){var a=new AM7();A1S(a);return a;}
function A1S(a){return;}
function A4i(a){var b;b=Fx(AMz(a),1);b.b_=1;return b;}
function AAO(){Nr.call(this);}
function BaF(){var a=new AAO();A6$(a);return a;}
function A6$(a){return;}
function AWQ(a){var b;b=Fx(ANZ(a),1);b.b_=1;return b;}
function AKz(){var a=this;By.call(a);a.An=0;a.DZ=0;}
function W(a,b){var c=new AKz();A_h(c,a,b);return c;}
function A_h(a,b,c){a.An=b;a.DZ=c;}
function AYa(a){return CH(Eq(),a.An,a.DZ);}
function AK4(){By.call(this);}
function BbU(){var a=new AK4();A2j(a);return a;}
function A2j(a){return;}
function A16(a){return CH(CH(Eq(),65279,65279),65520,65533);}
function AML(){var a=this;By.call(a);a.yr=0;a.wE=0;a.C8=0;}
function CB(a,b){var c=new AML();AU9(c,a,b);return c;}
function BaV(a,b,c){var d=new AML();A2b(d,a,b,c);return d;}
function AU9(a,b,c){a.wE=c;a.yr=b;}
function A2b(a,b,c,d){a.C8=d;a.wE=c;a.yr=b;}
function A5Z(a){var b;b=BbC(a.yr);if(a.C8)Jt(b.b9,0,2048);b.b_=a.wE;return b;}
function AM2(){var a=this;By.call(a);a.vR=0;a.tY=0;a.zp=0;}
function Lb(a,b){var c=new AM2();AVN(c,a,b);return c;}
function Bcj(a,b,c){var d=new AM2();A3b(d,a,b,c);return d;}
function AVN(a,b,c){a.tY=c;a.vR=b;}
function A3b(a,b,c,d){a.zp=d;a.tY=c;a.vR=b;}
function AS5(a){var b;b=new Vv;AD2(b,a.vR);if(a.zp)Jt(b.b9,0,2048);b.b_=a.tY;return b;}
function AKI(){D.call(this);}
function BmF(){var a=new AKI();ATl(a);return a;}
function ATl(a){return;}
function ZF(){D.call(this);}
function BmG(){var a=new ZF();A8i(a);return a;}
function A8i(a){return;}
function NM(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function A20(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=J(TA,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<Bg(b)){k=NM(Y(b,j));if(k==64){j=j+1|0;k=NM(Y(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|Bx(m,NM(Y(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=NM(Y(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=AWf(i,i+g|0,Os(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=AWf(i,i+g|0,Os(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return NH(c,h);}
function TA(){var a=this;D.call(a);a.xr=0;a.AF=0;a.Dj=null;}
function AWf(a,b,c){var d=new TA();A0Z(d,a,b,c);return d;}
function A0Z(a,b,c,d){a.xr=b;a.AF=c;a.Dj=d;}
function R4(){var a=this;D.call(a);a.CU=null;a.DJ=0;}
function AMj(){D.call(this);}
function BmH(){var a=new AMj();A$1(a);return a;}
function A$1(a){return;}
function Yw(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.CU.data;f=b.DJ;b.DJ=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+Bx(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function Ws(){Ew.call(this);this.sO=null;}
function A3U(a){ED(a.b1,B(262),60,6,4210752);ED(a.b1,B(333),8,(a.fm-96|0)+2|0,4210752);}
function AOv(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(831);$p=1;case 1:$z=AHK(c,d);if(C()){break _;}e=$z;BW(1.0,1.0,1.0,1.0);Ea(a.I.bo,e);f=(a.bn-a.e_|0)/2|0;g=(a.bE-a.fm|0)/2|0;CI(a,f,g,0,0,a.e_,a.fm);if(WV(a.sO)){h=ADX(a.sO,12);CI(a,f+56|0,((g+36|0)+12|0)-h|0,176,12-h|0,14,h+2|0);}i=AOZ(a.sO,24);CI(a,f+79|0,g+34|0,176,14,i+1|0,16);return;default:E_();}}C3().s(a,
b,c,d,e,f,g,h,i,$p);}
function Xt(){var a=this;Ew.call(a);a.ms=null;a.uy=null;}
function Zh(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA_(a);if(C()){break _;}b=0;while(b<9){c=Gg(a.ms,b);if(c!==null){d=a.I.f;$p=2;continue _;}b=b+1|0;}return;case 2:AL4(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=9)break;c=Gg(a.ms,b);if(c===null)continue;else{d=a.I.f;continue _;}}return;default:E_();}}C3().s(a,b,c,d,$p);}
function A6T(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=e+(f*3|0)|0;h=Gg(a.ms,g);if(h!==null)d[g]=h.bC;else d[g]=(-1);f=f+1|0;}e=e+1|0;}Pt(a.uy,0,RU(Wy(),c));}
function A2e(a){ED(a.b1,B(532),28,6,4210752);ED(a.b1,B(333),8,(a.fm-96|0)+2|0,4210752);}
function AKC(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(832);$p=1;case 1:$z=AHK(c,d);if(C()){break _;}e=$z;BW(1.0,1.0,1.0,1.0);Ea(a.I.bo,e);CI(a,(a.bn-a.e_|0)/2|0,(a.bE-a.fm|0)/2|0,0,0,a.e_,a.fm);return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AMQ(){var a=this;Ew.call(a);a.FF=null;a.AZ=null;a.kB=0;}
function Bcd(a,b){var c=new AMQ();A2E(c,a,b);return c;}
function A2E(a,b,c){var d,e,f,g;Ib(a);a.kB=0;a.FF=b;a.AZ=c;a.pU=0;a.kB=c.gt()/9|0;a.fm=114+(a.kB*18|0)|0;d=(a.kB-4|0)*18|0;e=0;while(e<a.kB){f=0;while(f<9){S(a.c7,D5(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){S(a.c7,D5(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=161+d|0;while(e<9){S(a.c7,D5(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function A$e(a){ED(a.b1,a.AZ.xk(),8,6,4210752);ED(a.b1,B(333),8,(a.fm-96|0)+2|0,4210752);}
function AN3(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.I.bo;d=B(833);$p=1;case 1:$z=AHK(c,d);if(C()){break _;}e=$z;BW(1.0,1.0,1.0,1.0);Ea(a.I.bo,e);f=(a.bn-a.e_|0)/2|0;g=(a.bE-a.fm|0)/2|0;CI(a,f,g,0,0,a.e_,(a.kB*18|0)+17|0);CI(a,f,(g+(a.kB*18|0)|0)+17|0,0,126,a.e_,96);return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function VO(){IL.call(this);}
function LG(a){Wi(a);return a.hl.gk;}
function CX(){var a=this;EY.call(a);a.IE=null;a.go=0;a.m$=0;a.z1=0;a.z0=0;}
var BmI=null;var BmJ=null;var BmK=null;var BmL=null;var BmM=null;var BmN=null;var BmO=null;var BmP=null;var BmQ=null;var BmR=null;var BmS=null;var BmT=null;var BmU=null;var BmV=null;var BmW=null;var BmX=null;var BmY=null;var BmZ=null;var Bm0=null;var Bi8=null;function Dn(a,b,c,d,e,f,g){var h=new CX();AEH(h,a,b,c,d,e,f,g);return h;}
function AEH(a,b,c,d,e,f,g,h){FQ(a,b,c);a.IE=d;a.go=e;a.m$=f;a.z1=g;a.z0=h;}
function AQn(){var b,c;BmI=Dn(B(834),0,B(834),16,16,0,0);BmJ=Dn(B(835),1,B(835),16,16,16,0);BmK=Dn(B(836),2,B(836),16,16,32,0);BmL=Dn(B(837),3,B(837),16,16,48,0);BmM=Dn(B(838),4,B(838),16,16,64,0);BmN=Dn(B(839),5,B(839),16,16,80,0);BmO=Dn(B(840),6,B(840),16,16,96,0);BmP=Dn(B(841),7,B(841),32,16,0,32);BmQ=Dn(B(842),8,B(842),32,16,32,32);BmR=Dn(B(843),9,B(843),32,16,64,32);BmS=Dn(B(844),10,B(844),32,16,96,32);BmT=Dn(B(845),11,B(845),16,32,0,64);BmU=Dn(B(846),12,B(846),32,32,0,128);BmV=Dn(B(847),13,B(847),32,32,
32,128);BmW=Dn(B(848),14,B(848),32,32,64,128);BmX=Dn(B(849),15,B(849),32,32,96,128);BmY=Dn(B(850),16,B(850),32,32,128,128);BmZ=Dn(B(851),17,B(851),64,32,0,96);Bm0=Dn(B(852),18,B(852),64,64,0,192);b=J(CX,19);c=b.data;c[0]=BmI;c[1]=BmJ;c[2]=BmK;c[3]=BmL;c[4]=BmM;c[5]=BmN;c[6]=BmO;c[7]=BmP;c[8]=BmQ;c[9]=BmR;c[10]=BmS;c[11]=BmT;c[12]=BmU;c[13]=BmV;c[14]=BmW;c[15]=BmX;c[16]=BmY;c[17]=BmZ;c[18]=Bm0;Bi8=b;}
function Vd(){var a=this;CT.call(a);a.Ck=null;a.B_=null;a.Cb=null;a.y9=0;}
function AGD(a){S(a.bH,Sp(0,((a.bn/2|0)-155|0)+0|0,(a.bE/6|0)+96|0,B(853)));S(a.bH,Sp(1,((a.bn/2|0)-155|0)+160|0,(a.bE/6|0)+96|0,B(808)));}
function AQG(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.Ck;d=b.cn?0:1;e=a.y9;$p=1;case 1:ARi(c,d,e);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Y2(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABs(a);if(C()){break _;}DF(a,a.b1,a.B_,a.bn/2|0,70,16777215);DF(a,a.b1,a.Cb,a.bn/2|0,90,16777215);$p=2;case 2:AFT(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,$p);}
function KZ(){Fh.call(this);}
function Bm1(){var a=new KZ();AUj(a);return a;}
function AUj(a){O(a);}
function UW(){var a=this;D.call(a);a.kS=0;a.q3=0;a.x4=null;a.x$=null;a.Ib=0;}
function ALE(a,b){var c,d;c=0;while(c<=(3-a.kS|0)){d=0;while(d<=(3-a.q3|0)){if(Vw(a,b,c,d,1))return 1;if(Vw(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Vw(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.kS&&i<a.q3)j=!e?a.x4.data[h+Bx(i,a.kS)|0]:a.x4.data[((a.kS-h|0)-1|0)+Bx(i,a.kS)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function AHA(a,b){return KN(a.x$.bC,a.x$.q);}
function KA(a){return Bx(a.kS,a.q3);}
function Sw(){var a=this;Bk.call(a);a.CH=null;a.Jx=null;}
function AV2(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.dM^EK(a.CH,c):0;}
function Sv(){var a=this;Bk.call(a);a.EM=null;a.BB=null;a.GZ=null;}
function A3C(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.dM^EK(a.EM,c):0;return a.BB.T(b)&&!d?1:0;}
function PC(){var a=this;Bk.call(a);a.sk=null;a.HF=null;}
function AX9(a,b){return a.cl^EK(a.sk,b);}
function A6g(a){var b,c;b=new T;V(b);c=I0(a.sk,0);while(c>=0){Hi(b,Iw(c));Dy(b,124);c=I0(a.sk,c+1|0);}if(b.bZ>0)Sq(b,b.bZ-1|0);return U(b);}
function T6(){var a=this;Bk.call(a);a.DT=null;a.IL=null;}
function A9D(a,b){return a.DT.T(b);}
function T4(){var a=this;Bk.call(a);a.wH=0;a.C2=null;a.xt=null;}
function A0L(a,b){return !(a.wH^EK(a.xt.b7,b))&&!(a.wH^a.xt.iB^a.C2.T(b))?0:1;}
function T5(){var a=this;Bk.call(a);a.tX=0;a.Br=null;a.vv=null;}
function A7C(a,b){return !(a.tX^EK(a.vv.b7,b))&&!(a.tX^a.vv.iB^a.Br.T(b))?1:0;}
function T9(){var a=this;Bk.call(a);a.Fd=0;a.Bv=null;a.Bo=null;a.HU=null;}
function A5r(a,b){return a.Fd^(!a.Bv.T(b)&&!a.Bo.T(b)?0:1);}
function T$(){var a=this;Bk.call(a);a.Ay=0;a.DO=null;a.Dv=null;a.JV=null;}
function ASZ(a,b){return a.Ay^(!a.DO.T(b)&&!a.Dv.T(b)?0:1)?0:1;}
function T7(){var a=this;Bk.call(a);a.Aa=null;a.JX=null;}
function AWK(a,b){return D4(a.Aa,b);}
function T8(){var a=this;Bk.call(a);a.EZ=null;a.H4=null;}
function AYs(a,b){return D4(a.EZ,b)?0:1;}
function Ua(){var a=this;Bk.call(a);a.AB=null;a.DQ=0;a.Bb=null;}
function A1G(a,b){return !D4(a.AB,b)&&!(a.DQ^EK(a.Bb.b7,b))?0:1;}
function Ub(){var a=this;Bk.call(a);a.AT=null;a.Eg=0;a.AM=null;}
function A48(a,b){return !D4(a.AT,b)&&!(a.Eg^EK(a.AM.b7,b))?1:0;}
function PB(){var a=this;Bk.call(a);a.A9=0;a.EU=null;a.BJ=null;a.FI=null;}
function A_6(a,b){return !(a.A9^a.EU.T(b))&&!D4(a.BJ,b)?0:1;}
function PP(){var a=this;Bk.call(a);a.E8=0;a.zk=null;a.zq=null;a.FW=null;}
function AWP(a,b){return !(a.E8^a.zk.T(b))&&!D4(a.zq,b)?1:0;}
function Pz(){var a=this;Bk.call(a);a.De=null;a.FZ=null;}
function AVh(a,b){return D4(a.De,b);}
function PA(){var a=this;Bk.call(a);a.z5=null;a.JS=null;}
function A55(a,b){return D4(a.z5,b)?0:1;}
function PF(){var a=this;Bk.call(a);a.Fc=null;a.AS=0;a.Fv=null;}
function AXu(a,b){return D4(a.Fc,b)&&a.AS^EK(a.Fv.b7,b)?1:0;}
function Py(){var a=this;Bk.call(a);a.Et=null;a.DX=0;a.AQ=null;}
function A$z(a,b){return D4(a.Et,b)&&a.DX^EK(a.AQ.b7,b)?0:1;}
function PD(){var a=this;Bk.call(a);a.EA=0;a.CF=null;a.Ax=null;a.HT=null;}
function A4t(a,b){return a.EA^a.CF.T(b)&&D4(a.Ax,b)?1:0;}
function PE(){var a=this;Bk.call(a);a.Ep=0;a.Ci=null;a.Ez=null;a.H$=null;}
function AZW(a,b){return a.Ep^a.Ci.T(b)&&D4(a.Ez,b)?0:1;}
function O1(){Iz.call(this);}
function AWj(a,b,c,d){var e,f,g;e=0;f=d.bz;a:{while(true){if(b>f){b=e;break a;}g=Hl(d,a.cJ);EM(d,a.cJ,b);e=a.fp.l(b,c,d);if(e>=0)break;EM(d,a.cJ,g);b=b+1|0;}}return b;}
function A_V(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Hl(e,a.cJ);EM(e,a.cJ,c);f=a.fp.l(c,d,e);if(f>=0)break;EM(e,a.cJ,g);c=c+(-1)|0;}}return c;}
function AU7(a){return null;}
function Nt(){Fb.call(this);}
var Bm2=0.0;var Bm3=null;function AJ9(){Bm2=NaN;Bm3=F($rt_doublecls());}
function MG(){}
function VG(){var a=this;D.call(a);a.FR=null;a.EV=null;a.pL=null;a.dA=null;a.qW=0;a.sm=0;}
function OR(a,b){var c,d;c=Bg(a.pL);if(b>=0&&b<=c){AAi(a.dA);a.dA.nx=1;AP_(a.dA,b);b=a.EV.eJ(b,a.pL,a.dA);if(b==(-1))a.dA.hq=1;if(b>=0&&a.dA.og){ADg(a.dA);return 1;}a.dA.hx=(-1);return 0;}d=new BQ;Bj(d,V1(b));M(d);}
function ABl(a){var b,c;b=Bg(a.pL);if(!YS(a))b=a.sm;if(a.dA.hx>=0&&a.dA.nx==1){a.dA.hx=M0(a.dA);if(M0(a.dA)==AEY(a.dA)){c=a.dA;c.hx=c.hx+1|0;}return a.dA.hx<=b&&OR(a,a.dA.hx)?1:0;}return OR(a,a.qW);}
function AH3(a,b){return PO(a.dA,b);}
function Yv(a,b){return QW(a.dA,b);}
function AHn(a){return AH3(a,0);}
function AK_(a){return Yv(a,0);}
function YS(a){return a.dA.oj;}
function Us(){}
function Sn(){}
function Ta(){Fc.call(this);this.od=null;}
var Bm4=null;function Bcc(){var a=new Ta();AAw(a);return a;}
function AAw(a){a.od=BcN();}
function JB(a){return AIF(a.od);}
function Zv(a,b){return ASP(a.od,b,b)===Bm4?0:1;}
function MV(a,b){return AGE(a.od,b)!==Bm4?0:1;}
function Nh(a){return ADM(a.od);}
function AA4(){Bm4=new D;}
function SW(){}
function O3(){}
function AKb(){var a=this;FV.call(a);a.kv=null;a.tF=null;a.G$=null;a.tM=0;}
function BcN(){var a=new AKb();AT_(a);return a;}
function AT_(a){var b;b=null;a.G$=b;if(b===null){b=new Q4;b.Jj=a;}a.tF=b;}
function ASP(a,b,c){var d,e;a.kv=Ox(a,a.kv,b);d=Wv(a,b);e=Tg(d,c);Tg(d,c);a.tM=a.tM+1|0;return e;}
function AGE(a,b){var c;c=Wv(a,b);if(c===null)return null;a.kv=LO(a,a.kv,b);a.tM=a.tM+1|0;return c.n0;}
function Wv(a,b){var c,d;c=a.kv;while(true){if(c===null)return null;d=Oz(a.tF,b,c.nn);if(!d)break;c=d>=0?c.dj:c.da;}return c;}
function Ox(a,b,c){var d,e;if(b===null){b=new Lv;d=null;b.nn=c;b.n0=d;b.lI=1;b.jr=1;return b;}e=Oz(a.tF,c,b.nn);if(!e)return b;if(e>=0)b.dj=Ox(a,b.dj,c);else b.da=Ox(a,b.da,c);FM(b);return Ni(b);}
function LO(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Oz(a.tF,c,b.nn);if(d<0)b.da=LO(a,b.da,c);else if(d>0)b.dj=LO(a,b.dj,c);else{if(b.dj===null)return b.da;e=b.da;b=b.dj;f=J(Lv,b.lI);g=0;while(b.da!==null){h=f.data;i=g+1|0;h[g]=b;b=b.da;g=i;}c=b.dj;while(g>0){h=f.data;g=g+(-1)|0;j=h[g];j.da=c;FM(j);c=Ni(j);}b.dj=c;b.da=e;FM(b);}FM(b);return Ni(b);}
function ADM(a){var b,c,d;b=a.kv;c=null;while(b!==null){d=AOy(b,0);c=b;b=d;}if(c!==null)return c.nn;b=new J8;O(b);M(b);}
function AIF(a){return a.kv===null?0:a.kv.jr;}
function Q4(){D.call(this);this.Jj=null;}
function Oz(a,b,c){return b===null?TS(c,b):TS(b,c);}
function VQ(){Bk.call(this);this.IG=null;}
function A1N(a,b){return Dp(b)!=2?0:1;}
function Tn(){Bk.call(this);this.IO=null;}
function A4g(a,b){return Dp(b)!=1?0:1;}
function QV(){Bk.call(this);this.Ii=null;}
function ATO(a,b){return Qp(b);}
function QU(){Bk.call(this);this.F1=null;}
function A5Y(a,b){return 0;}
function SF(){Bk.call(this);this.G_=null;}
function AXj(a,b){return !Dp(b)?0:1;}
function Ui(){Bk.call(this);this.I1=null;}
function A$3(a,b){return Dp(b)!=9?0:1;}
function Pp(){Bk.call(this);this.Hq=null;}
function AZv(a,b){return Iu(b);}
function Vc(){Bk.call(this);this.Gu=null;}
function A0z(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Tk(){Bk.call(this);this.Fz=null;}
function A_K(a,b){a:{b:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Iu(b);}return b;}
function Tm(){Bk.call(this);this.GR=null;}
function AVy(a,b){a:{b:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Iu(b);}return b;}
function Ph(){Bk.call(this);this.G9=null;}
function A10(a,b){a:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Uy(){Bk.call(this);this.JG=null;}
function A7P(a,b){return Lw(b);}
function UC(){Bk.call(this);this.Gd=null;}
function A9g(a,b){return UD(b);}
function V7(){Bk.call(this);this.I_=null;}
function A$S(a,b){return Dp(b)!=3?0:1;}
function VH(){Bk.call(this);this.FD=null;}
function A2k(a,b){a:{b:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Iu(b);}return b;}
function OV(){Bk.call(this);this.JY=null;}
function AVp(a,b){a:{b:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Iu(b);}return b;}
function MR(){Bk.call(this);this.vi=0;}
function BbC(a){var b=new MR();AD2(b,a);return b;}
function AD2(a,b){B0(a);a.vi=b;}
function AZw(a,b){return a.cl^(a.vi!=Dp(b&65535)?0:1);}
function Vv(){MR.call(this);}
function A$f(a,b){return a.cl^(!(a.vi>>Dp(b&65535)&1)?0:1);}
function NA(){D.call(this);}
var Bm5=null;var Bm6=null;function Bm7(){var a=new NA();ASD(a);return a;}
function ASD(a){return;}
function Dz(b,c){BT(Bm5,c,b);BT(Bm6,b,c);}
function Jp(b,c){var d,e,f,g,h,$$je;d=null;a:{try{e=d;f=CQ(Bm5,b);if(f!==null){e=d;g=J(FP,1);g.data[0]=F(GI);b=WL(f,g);g=J(D,1);g.data[0]=c;d=WN(b,g);e=d;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){h=$$je;}else{throw $$e;}}Ce(h);d=e;}return d;}
function AIz(){Bm5=De();Bm6=De();Dz(F(Jw),B(854));Dz(F(E$),B(855));Dz(F(IF),B(856));Dz(F(EQ),B(857));Dz(F(DP),B(858));Dz(F(J5),B(859));Dz(F(Jq),B(860));Dz(F(Ky),B(861));Dz(F(Ls),B(862));Dz(F(I7),B(863));Dz(F(IB),B(584));Dz(F(KW),B(864));Dz(F(MH),B(865));Dz(F(JT),B(866));Dz(F(Gf),B(867));}
function J4(){var a=this;D.call(a);a.fI=0;a.fr=0;a.fM=0;a.qb=0;a.jm=Long_ZERO;a.oX=Long_ZERO;}
var BkL=Long_ZERO;function A$M(a,b){var c;if(!(b instanceof J4))return 0;c=b;return a.fI==c.fI&&a.fr==c.fr&&a.fM==c.fM&&a.qb==c.qb?1:0;}
function A70(a){return (((((a.fI*128|0)*1024|0)+(a.fM*128|0)|0)+a.fr|0)*256|0)+a.qb|0;}
function A0G(a,b){a.jm=b;return a;}
function ANP(a,b){return Long_lt(a.jm,b.jm)?(-1):Long_gt(a.jm,b.jm)?1:Long_lt(a.oX,b.oX)?(-1):Long_le(a.oX,b.oX)?0:1;}
function TS(a,b){return ANP(a,b);}
function AGp(){BkL=Long_ZERO;}
function Lt(){}
function V6(){var a=this;D.call(a);a.ls=null;a.iX=null;a.g7=null;a.S=null;a.lE=null;a.fu=0;a.fV=0;a.fN=null;}
function BS(a,b,c){var d;if(b==a.fu&&c==a.fV&&a.fN!==null)return 1;a:{b:{d=(b&31)+((c&31)*32|0)|0;if(a.S.data[d]!==null){if(a.S.data[d]===a.ls)break b;if(ARW(a.S.data[d],b,c))break b;}b=0;break a;}b=1;}return b;}
function AOr(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b==a.fu&&c==a.fV&&a.fN!==null)return a.fN;d=(b&31)+((c&31)*32|0)|0;if(!BS(a,b,c)){Be9=1;if(a.S.data[d]!==null){AO1(a.S.data[d]);e=a.S.data[d];$p=1;continue _;}if(a.g7===null)f=null;else{try{e=a.g7;f=a.lE;$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){e=$$je;}else{throw $$e;}}Ce(e);f=null;}if(f===
null){if(a.iX!==null){e=a.iX;$p=3;continue _;}f=a.ls;}a.S.data[d]=f;if(a.S.data[d]!==null)J9(a.S.data[d]);if(!a.S.data[d].gF){g=b+1|0;h=c+1|0;if(BS(a,g,h)&&BS(a,b,h)&&BS(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BS(a,g,c)){$p=4;continue _;}h=c-1|0;if(BS(a,b,h)){$p=5;continue _;}if(BS(a,g,h)){$p=6;continue _;}Be9=0;}a.fu=b;a.fV=c;a.fN=a.S.data[d];return a.S.data[d];case 1:ACf(a,e);if(C()){break _;}Kf(a,a.S.data[d]);if(a.g7===null)f=null;else{try{e=a.g7;f=a.lE;$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BF)
{e=$$je;}else{throw $$e;}}Ce(e);f=null;}if(f===null){if(a.iX!==null){e=a.iX;$p=3;continue _;}f=a.ls;}a.S.data[d]=f;if(a.S.data[d]!==null)J9(a.S.data[d]);if(!a.S.data[d].gF){g=b+1|0;h=c+1|0;if(BS(a,g,h)&&BS(a,b,h)&&BS(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BS(a,g,c)){$p=4;continue _;}h=c-1|0;if(BS(a,b,h)){$p=5;continue _;}if(!BS(a,g,h)){Be9=0;a.fu=b;a.fV=c;a.fN=a.S.data[d];return a.S.data[d];}$p=6;continue _;case 2:a:{try{$z=AHa(e,f,b,c);if(C()){break _;}f=$z;if(f!==null)f.s_=a.lE.ec;break a;}catch($$e){$$je=Bh($$e);if
($$je instanceof BF){e=$$je;}else{throw $$e;}}Ce(e);f=null;}if(f===null){if(a.iX!==null){e=a.iX;$p=3;continue _;}f=a.ls;}a.S.data[d]=f;if(a.S.data[d]!==null)J9(a.S.data[d]);if(!a.S.data[d].gF){g=b+1|0;h=c+1|0;if(BS(a,g,h)&&BS(a,b,h)&&BS(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BS(a,g,c)){$p=4;continue _;}h=c-1|0;if(BS(a,b,h)){$p=5;continue _;}if(!BS(a,g,h)){Be9=0;a.fu=b;a.fV=c;a.fN=a.S.data[d];return a.S.data[d];}$p=6;continue _;case 3:$z=AJ0(e,b,c);if(C()){break _;}f=$z;a.S.data[d]=f;if(a.S.data[d]!==null)J9(a.S.data[d]);if
(!a.S.data[d].gF){g=b+1|0;h=c+1|0;if(BS(a,g,h)&&BS(a,b,h)&&BS(a,g,c)){$p=7;continue _;}}g=b-1|0;if(BS(a,g,c)){$p=4;continue _;}h=c-1|0;if(BS(a,b,h)){$p=5;continue _;}if(!BS(a,g,h)){Be9=0;a.fu=b;a.fV=c;a.fN=a.S.data[d];return a.S.data[d];}$p=6;continue _;case 4:$z=AOr(a,g,c);if(C()){break _;}e=$z;if(!e.gF){h=c+1|0;if(BS(a,g,h)&&BS(a,b,h)&&BS(a,g,c)){$p=8;continue _;}}h=c-1|0;if(BS(a,b,h)){$p=5;continue _;}if(!BS(a,g,h)){Be9=0;a.fu=b;a.fV=c;a.fN=a.S.data[d];return a.S.data[d];}$p=6;continue _;case 5:$z=AOr(a,
b,h);if(C()){break _;}e=$z;if(!e.gF){i=b+1|0;if(BS(a,i,h)&&BS(a,b,h)&&BS(a,i,c)){$p=9;continue _;}}if(!BS(a,g,h)){Be9=0;a.fu=b;a.fV=c;a.fN=a.S.data[d];return a.S.data[d];}$p=6;case 6:$z=AOr(a,g,h);if(C()){break _;}e=$z;if(!e.gF&&BS(a,g,h)&&BS(a,b,h)&&BS(a,g,c)){$p=10;continue _;}Be9=0;a.fu=b;a.fV=c;a.fN=a.S.data[d];return a.S.data[d];case 7:AFG(a,a,b,c);if(C()){break _;}g=b-1|0;if(BS(a,g,c)){$p=4;continue _;}h=c-1|0;if(BS(a,b,h)){$p=5;continue _;}if(!BS(a,g,h)){Be9=0;a.fu=b;a.fV=c;a.fN=a.S.data[d];return a.S.data[d];}$p
=6;continue _;case 8:AFG(a,a,g,c);if(C()){break _;}h=c-1|0;if(BS(a,b,h)){$p=5;continue _;}if(!BS(a,g,h)){Be9=0;a.fu=b;a.fV=c;a.fN=a.S.data[d];return a.S.data[d];}$p=6;continue _;case 9:AFG(a,a,b,h);if(C()){break _;}if(!BS(a,g,h)){Be9=0;a.fu=b;a.fV=c;a.fN=a.S.data[d];return a.S.data[d];}$p=6;continue _;case 10:AFG(a,a,g,h);if(C()){break _;}Be9=0;a.fu=b;a.fV=c;a.fN=a.S.data[d];return a.S.data[d];default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function Kf(a,b){var c,$$je;a:{if(a.g7!==null){try{AHG(a.g7,a.lE,b);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BF){c=$$je;}else{throw $$e;}}c.tJ();}}}
function ACf(a,b){var c,d,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.g7!==null){try{b.s_=a.lE.ec;c=a.g7;d=a.lE;$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof B2){c=$$je;}else{throw $$e;}}Ce(c);}return;case 1:a:{try{Y4(c,d,b);if(C()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof B2){c=$$je;}else{throw $$e;}}Ce(c);}return;default:E_();}}C3().s(a,b,c,d,$p);}
function AFG(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AOr(a,c,d);if(C()){break _;}e=$z;if(!e.gF){e.gF=1;if(a.iX!==null){f=a.iX;$p=2;continue _;}}return;case 2:AH_(f,b,c,d);if(C()){break _;}SS(e);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function AN_(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;e=0;if(c!==null){f=0;while(f<a.S.data.length){if(a.S.data[f]!==null&&Kz(a.S.data[f],b))e=e+1|0;f=f+1|0;}}g=0;h=0;while(h<a.S.data.length){if(a.S.data[h]!==null){if(b&&!a.S.data[h].qd)Kf(a,a.S.data[h]);if(Kz(a.S.data[h],b)){i=a.S.data[h];$p=1;continue _;}}h=h+1|0;}if(b&&a.g7===null)return 1;return 1;case 1:ACf(a,i);if
(C()){break _;}a.S.data[h].dH=0;d=d+1|0;if(d==2&&!b)return 0;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}while(true){h=h+1|0;if(h>=a.S.data.length)break;if(a.S.data[h]===null)continue;if(b&&!a.S.data[h].qd)Kf(a,a.S.data[h]);if(Kz(a.S.data[h],b)){i=a.S.data[h];continue _;}}if(b&&a.g7===null)return 1;return 1;case 2:XR(c,f);if(C()){break _;}while(true){h=h+1|0;if(h>=a.S.data.length)break;if(a.S.data[h]===null)continue;if(b&&!a.S.data[h].qd)Kf(a,a.S.data[h]);if(Kz(a.S.data[h],b)){i=a.S.data[h];$p
=1;continue _;}}if(b&&a.g7===null)return 1;return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function TD(a){return 0;}
function A_H(a){return 1;}
function Qo(){}
function Xv(){D.call(this);this.r8=null;}
function On(a,b,c){var d,e,f,g,h;d=b+30233088|0;e=c+30233088|0;f=Bg(B(868));g=new T;GB(g,10);h=0;while(h<5){Dy(g,Y(B(868),d%f|0));d=d/f|0;Dy(g,Y(B(868),e%f|0));e=e/f|0;h=h+1|0;}return U(g);}
function AHa(a,b,c,d){var e,f,g,h,i,j,k,l,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=On(a,c,d);f=new T;V(f);g=U(H(H(H(f,a.r8),B(23)),e));$p=1;case 1:$z=ALT(g);if(C()){break _;}h=$z;if(h===null)return null;try{f=Na(O9(Ut(h)));i=FT(f,B(869));j=FT(f,B(870));if(c==i&&d==j){$p=4;continue _;}k=On(a,i,j);B7(CP(),BD(H(Be(H(Be(H(H(H(H(H(Be(H(Be(H(Be(H(Be(H(H(H(BN(),B(871)),
e),B(872)),c),B(631)),d),B(873)),i),B(631)),j),B(874)),k),B(875)),e),B(876)),c),B(631)),d),B(245))));b=BD(H(H(H(BN(),a.r8),B(23)),k));$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof B2){l=$$je;}else{throw $$e;}}b=CP();f=new T;V(f);B7(b,U(H(Be(H(Be(H(H(H(f,B(877)),e),B(878)),c),B(631)),d),B(245))));B7(CP(),B(879));$p=2;case 2:AMd(g);if(C()){break _;}Ce(l);return null;case 3:a:{try{ANz(g,b);if(C()){break _;}b=null;}catch($$e){$$je=Bh($$e);if($$je instanceof B2){l=$$je;break a;}else{throw $$e;}}return b;}b
=CP();f=new T;V(f);B7(b,U(H(Be(H(Be(H(H(H(f,B(877)),e),B(878)),c),B(631)),d),B(245))));B7(CP(),B(879));$p=2;continue _;case 4:a:{try{$z=A3d(b,f);if(C()){break _;}b=$z;}catch($$e){$$je=Bh($$e);if($$je instanceof B2){l=$$je;break a;}else{throw $$e;}}return b;}b=CP();f=new T;V(f);B7(b,U(H(Be(H(Be(H(H(H(f,B(877)),e),B(878)),c),B(631)),d),B(245))));B7(CP(),B(879));$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Y4(a,b,c){var d,e,f,g,h,$$je,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=G$();AGg(a,c,b,d);e=A$u(98304);try{f=AWz(BbY(e));try{R7(d,f);AHW(f);g=Id(e);b=BD(H(H(H(BN(),a.r8),B(23)),On(a,c.f3,c.fY)));$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof D8){b=$$je;}else{throw $$e;}}a:{try{K8(f);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof D8){d=$$je;}else{throw $$e;}}WU(b,d);}M(b);}catch
($$e){$$je=Bh($$e);if($$je instanceof B2){h=$$je;}else{throw $$e;}}b=CP();d=new T;V(d);B7(b,U(H(Be(H(Be(H(d,B(880)),c.f3),B(631)),c.fY),B(881))));Ce(h);return;case 1:b:{a:{try{try{ACM(b,g);if(C()){break _;}}catch($$e){$$je=Bh($$e);if($$je instanceof D8){b=$$je;break a;}else{throw $$e;}}K8(f);}catch($$e){$$je=Bh($$e);if($$je instanceof B2){h=$$je;break b;}else{throw $$e;}}return;}try{c:{try{K8(f);break c;}catch($$e){$$je=Bh($$e);if($$je instanceof D8){d=$$je;}else{throw $$e;}}WU(b,d);}M(b);}catch($$e){$$je=Bh($$e);if
($$je instanceof B2){h=$$je;}else{throw $$e;}}}b=CP();d=new T;V(d);B7(b,U(H(Be(H(Be(H(d,B(880)),c.f3),B(631)),c.fY),B(881))));Ce(h);return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AGg(a,b,c,d){Gx(d,B(869),b.f3);Gx(d,B(870),b.fY);Ia(d,B(882),c.ec);IO(d,B(883),b.g4);IO(d,B(365),b.hP.gH);IO(d,B(884),b.gm.gH);IO(d,B(885),b.h4.gH);IO(d,B(886),b.eg);S8(d,B(887),b.gF);b.sd=0;AHj(new Q3);}
function A3d(b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:d=BaZ(b,FT(c,B(869)),FT(c,B(870)));d.g4=IG(c,B(883));d.hP=AIY(IG(c,B(365)));d.gm=AIY(IG(c,B(884)));d.h4=AIY(IG(c,B(885)));d.eg=IG(c,B(886));d.gF=Uz(c,B(887));if(!JR(d.hP))d.hP=Jm(d.g4.data.length);if(d.eg!==null&&JR(d.gm)){if(!JR(d.h4))d.h4=Jm(d.g4.data.length);return d;}d.eg=$rt_createByteArray(256);d.gm=Jm(d.g4.data.length);$p=1;case 1:AF1(d);if(C()){break _;}if(!JR(d.h4))d.h4=Jm(d.g4.data.length);return d;default:
E_();}}C3().s(b,c,d,$p);}
function A4U(a){return;}
function A4_(a){return;}
function AHG(a,b,c){return;}
function SA(){var a=this;D.call(a);a.a=null;a.zd=null;a.ze=null;a.zc=null;a.tU=null;a.zg=null;a.zh=null;a.zf=null;a.iY=null;a.t=null;a.h6=null;a.v8=null;a.v6=null;a.v7=null;a.v9=null;a.v$=null;a.Gv=null;}
function ZI(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;a.h6=Zx(a,a.h6,b*4|0,0,c*4|0,5,17,5);e=0;while(e<4){f=0;while(f<4){g=0;while(g<16){h=a.h6.data;c=((e+0|0)*5|0)+f|0;i=((c+0|0)*17|0)+g|0;j=h[i+0|0];h=a.h6.data;b=((c+1|0)*17|0)+g|0;k=h[b+0|0];h=a.h6.data;l=((e+1|0)*5|0)+f|0;m=((l+0|0)*17|0)+g|0;n=h[m+0|0];h=a.h6.data;c=((l+1|0)*17|0)+g|0;o=h[c+0|0];p=(a.h6.data[i+1|0]-j)*0.125;q=(a.h6.data[b+1|0]-k)*0.125;r=(a.h6.data[m+1|0]-n)*0.125;s=(a.h6.data[c+1|0]-o)*0.125;t=0;while(t<8){u=(n-j)
*0.25;v=(o-k)*0.25;w=0;x=j;y=k;while(w<4){b=(w+(e*4|0)|0)<<11|(0+(f*4|0)|0)<<7;c=(g*8|0)+t|0;m=b|c;z=(y-x)*0.25;ba=0;c=R(c,64);bb=x;while(ba<4){i=0;if(c<0){L();i=BgR.b;}if(bb>0.0){L();i=Be8.b;}d.data[m]=i<<24>>24;m=m+128|0;bb=bb+z;ba=ba+1|0;}x=x+u;y=y+v;w=w+1|0;}j=j+p;k=k+q;n=n+r;o=o+s;t=t+1|0;}g=g+1|0;}f=f+1|0;}e=e+1|0;}}
function ACG(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=0;f=b*16|0;c=c*16|0;while(e<16){g=0;while(g<16){h=f+e|0;i=c+g|0;j=a.tU;k=h*0.03125;l=i*0.03125;m=Ve(j,k,l,0.0)+Cl(a.a)*0.2<=0.0?0:1;n=Ve(a.tU,l,109.0134,k)+Cl(a.a)*0.2<=3.0?0:1;o=E0(a.zg,k*2.0,l*2.0)/3.0+3.0+Cl(a.a)*0.25|0;p=(-1);L();q=Be4.b;r=Be5.b;s=(((e*16|0)+g|0)*128|0)+128|0;t=127;while(t>=0){s=s+(-1)|0;if(t<=((0+E(a.a,6)|0)-1|0))d.data[s]=Be3.b<<24>>24;else{u=d.data;if(!u[s])p=(-1);else if(u[s]==Be8.b){if(p==(-1)){if(o<=0){q=0;r=Be8.b<<24>>
24;}else if(t>=60&&t<=65){q=Be4.b;r=Be5.b;if(n)q=0;if(n)r=Bfo.b;if(m)q=Bfn.b;if(m)r=Bfn.b;}if(t<64&&!q)q=BgR.b;if(t<63){u[s]=r<<24>>24;p=o;}else{u[s]=q<<24>>24;p=o;}}else if(p>0){p=p+(-1)|0;u[s]=r<<24>>24;}}}t=t+(-1)|0;}g=g+1|0;}e=e+1|0;}}
function AJ0(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=$rt_createByteArray(32768);e=A9H(a.t,d,b,c);ZI(a,b,c,d);ACG(a,b,c,d);ASa(a,b,c,d);$p=1;case 1:AF1(e);if(C()){break _;}return e;default:E_();}}C3().s(a,b,c,d,e,$p);}
function AP7(a,b,c,d,e,f,g){Ji(a,b,c,d,e,f,g,1.0+N(a.a)*6.0,0.0,0.0,(-1),(-1),0.5);}
function Ji(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD;n=b*16|0;o=n+8|0;p=c*16|0;q=p+8|0;r=0.0;s=0.0;t=BbN(Gy(a.a));if(l<=0)l=112-E(t,28)|0;u=0;if(k==(-1)){k=l/2|0;u=1;}v=E(t,l/2|0)+(l/4|0)|0;w=E(t,6)?0:1;x=R(h,1.0);y=h+2.0+16.0;y=y*y;z=o-16.0;ba=q-16.0;bb=o+16.0;bc=q+16.0;a:{while(true){if(k>=l)break a;bd=1.5+Bp(k*3.1415927410125732/l)*h*1.0;be=bd*m;bf=BC(j);bg=Bp(j);e=e+BC(i)*bf;f=f+bg;g=g+Bp(i)*bf;j=(!w
?j*0.699999988079071:j*0.9200000166893005)+s*0.10000000149011612;i=i+r*0.10000000149011612;bh=s*0.8999999761581421;bf=r*0.75;s=bh+(N(t)-N(t))*N(t)*2.0;r=bf+(N(t)-N(t))*N(t)*4.0;if(!u&&k==v&&x>0){h=N(t)*0.5+0.5;bh=i-1.5707963705062866;j=j/3.0;Ji(a,b,c,d,e,f,g,h,bh,j,k,l,1.0);Ji(a,b,c,d,e,f,g,N(t)*0.5+0.5,i+1.5707963705062866,j,k,l,1.0);return;}if(!(!u&&!E(t,4))){bi=e-o;bj=g-q;bk=l-k|0;if(bi*bi+bj*bj-bk*bk>y)break;bl=bd*2.0;if(e>=z-bl&&g>=ba-bl&&e<=bb+bl&&g<=bc+bl){bm=(K(e-bd)-n|0)-1|0;bn=(K(e+bd)-n|0)+1|0;bo
=K(f-be)-1|0;bp=K(f+be)+1|0;bq=(K(g-bd)-p|0)-1|0;br=(K(g+bd)-p|0)+1|0;if(bm<0)bm=0;if(bn>16)bn=16;if(bo<1)bo=1;if(bp>120)bp=120;if(bq<0)bq=0;if(br>16)br=16;bs=0;bt=bm;while(!bs&&bt<bn){bu=bq;while(!bs&&bu<br){bv=bp+1|0;while(!bs){bw=R(bv,bo-1|0);if(bw<0)break;bx=(((bt*16|0)+bu|0)*128|0)+bv|0;if(bv>=0&&bv<128){by=d.data;bz=by[bx];L();if(!(bz!=Bf_.b&&by[bx]!=BgR.b))bs=1;if(bw&&bt!=bm&&bt!=(bn-1|0)&&bu!=bq&&bu!=(br-1|0))bv=bo;}bv=bv+(-1)|0;}bu=bu+1|0;}bt=bt+1|0;}if(!bs){while(bm<bn){bA=((bm+n|0)+0.5-e)/bd;bi=bA
*bA;bx=bq;while(bx<br){bB=((bx+p|0)+0.5-g)/bd;bC=(((bm*16|0)+bx|0)*128|0)+bp|0;bw=0;bD=bp-1|0;bB=bB*bB;while(bD>=bo){bl=(bD+0.5-f)/be;if(bl>(-0.7)&&bi+bl*bl+bB<1.0){by=d.data;bz=by[bC];L();if(bz==Be4.b)bw=1;if(!(bz!=Be8.b&&bz!=Be5.b&&bz!=Be4.b)){if(bD<10)by[bC]=Bga.b<<24>>24;else{by[bC]=0;if(bw){bz=bC-1|0;if(by[bz]==Be5.b)by[bz]=Be4.b<<24>>24;}}}}bC=bC+(-1)|0;bD=bD+(-1)|0;}bx=bx+1|0;}bm=bm+1|0;}if(u)break a;}}}k=k+1|0;}return;}}
function ASa(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;Gy(a.a);Gy(a.a);e=b-8|0;f=b+8|0;g=c-8|0;h=c+8|0;while(e<=f){i=g;while(i<=h){j=E(a.a,E(a.a,E(a.a,40)+1|0)+1|0);if(E(a.a,15))j=0;k=0;while(k<j){l=(e*16|0)+E(a.a,16)|0;m=E(a.a,E(a.a,120)+8|0);n=(i*16|0)+E(a.a,16)|0;o=1;if(!E(a.a,4)){AP7(a,b,c,d,l,m,n);o=o+E(a.a,4)|0;}p=0;while(p<o){q=N(a.a)*3.1415927410125732*2.0;r=(N(a.a)-0.5)*2.0/8.0;Ji(a,b,c,d,l,m,n,N(a.a)*2.0+N(a.a),q,r,0,0,1.0);p=p+1|0;}k=k+1|0;}i=i+1|0;}e=e+1|0;}}
function Zx(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(b===null)b=$rt_createDoubleArray(Bx(Bx(f,g),h));a.v9=H2(a.zh,a.v9,c,d,e,f,1,h,1.0,0.0,1.0);a.v$=H2(a.zf,a.v$,c,d,e,f,1,h,100.0,0.0,100.0);a.v8=H2(a.zc,a.v8,c,d,e,f,g,h,8.555150000000001,4.277575000000001,8.555150000000001);a.v6=H2(a.zd,a.v6,c,d,e,f,g,h,684.412,684.412,684.412);a.v7=H2(a.ze,a.v7,c,d,e,f,g,h,684.412,684.412,684.412);i=0;j=0;k=0;l=g;d=g-4|0;m=l/2.0;while(k<f){n=0;while(n<h){o=(a.v9.data[j]+256.0)/512.0;if(o>1.0)o=1.0;p=a.v$.data[j]
/8000.0;if(p<0.0)p= -p;q=p*3.0-3.0;if(q>=0.0){if(q>1.0)q=1.0;q=q/6.0;}else{o=q/2.0;if(o<(-1.0))o=(-1.0);q=o/1.4/2.0;o=0.0;}r=o+0.5;s=m+q*l/16.0*4.0;j=j+1|0;t=0;while(t<g){p=t;u=(p-s)*12.0/r;if(u<0.0)u=u*4.0;v=a.v6.data[i]/512.0;q=a.v7.data[i]/512.0;w=(a.v8.data[i]/10.0+1.0)/2.0;if(w>=0.0)v=w>1.0?q:v+(q-v)*w;o=v-u;if(t>d){x=(t-d|0)/3.0;o=o*(1.0-x)+(-10.0)*x;}if(p<0.0){x=(0.0-p)/4.0;if(x<0.0)x=0.0;if(x>1.0)x=1.0;o=o*(1.0-x)+(-10.0)*x;}b.data[i]=o;i=i+1|0;t=t+1|0;}n=n+1|0;}k=k+1|0;}return b;}
function AH_(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=c*16|0;f=d*16|0;N0(a.a,a.t.lz);g=Long_add(Long_mul(Long_div(Gy(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));h=Long_add(Long_mul(Long_div(Gy(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));N0(a.a,Long_xor(Long_add(Long_mul(Long_fromInt(c),
g),Long_mul(Long_fromInt(d),h)),a.t.lz));i=0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYE();m=a.t;n=a.a;$p=1;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Be5.b,32);m=a.t;n=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfo.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfr.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,
16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfs.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bft.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bha.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iY,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GY();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c
=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfj.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfk.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfl.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfm.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50)
{l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p=15;continue _;case 1:XX(b,m,n,j,k,l);if(C()){break _;}i=i+1|0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYE();m=a.t;n=a.a;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Be5.b,32);m=a.t;n
=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfo.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfr.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfs.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bft.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,
16);k=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bha.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iY,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GY();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfj.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfk.b);m=a.t;n=a.a;$p=11;continue _;}if
(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfl.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfm.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=
a.t;n=a.a;$p=15;continue _;case 2:AB3(b,m,n,j,k,l);if(C()){break _;}o=o+1|0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Be5.b,32);m=a.t;n=a.a;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfo.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfr.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfs.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bft.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bha.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iY,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GY();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,
Bfj.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfk.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfl.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfm.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p=15;continue _;case 3:AB3(b,m,n,o,k,l);if(C()){break _;}j=j+1|0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfo.b,32);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfr.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)
|0;b=new Ci;L();Cm(b,Bfs.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bft.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bha.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iY,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GY();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)
|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfj.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfk.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfl.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfm.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p
=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p=15;continue _;case 4:AB3(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfr.b,16);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfs.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bft.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bha.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iY,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GY();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,
Bfj.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfk.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfl.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfm.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p=15;continue _;case 5:AB3(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bfs.b,8);m=a.t;n=a.a;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bft.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)
|0;b=new Ci;L();Cm(b,Bha.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iY,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GY();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfj.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfk.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,
4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfl.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfm.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p
=15;continue _;case 6:AB3(b,m,n,c,j,k);if(C()){break _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ci;L();Cm(b,Bha.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iY,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GY();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfj.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e
+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfk.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfl.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfm.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p=15;continue _;case 7:AB3(b,m,n,c,j,k);if(C()){break _;}c=(E0(a.iY,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GY();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfj.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c
=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfk.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfl.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfm.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p=15;continue _;case 8:$z=ALU(q,l,p);if(C()){break _;}d=$z;$p=9;case 9:AEZ(m,b,n,l,d,p);if(C()){break _;}k=k+1|0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E6(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfj.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+
E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfk.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfl.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfm.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p=15;continue _;case 10:AC1(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfj.b);m=a.t;n=a.a;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfk.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfl.b);m=a.t;n=a.a;$p=12;continue _;}if
(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfm.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p=15;continue _;case 11:AC1(b,m,n,c,l,p);if(C()){break _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,
16)|0)+8|0;b=new BU;L();BV(b,Bfl.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfm.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p=15;continue _;case 12:AC1(b,m,n,c,l,p);if(C())
{break _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BU;L();BV(b,Bfm.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p=15;continue _;case 13:AC1(b,m,n,c,l,p);if(C()){break _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf_.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p=15;continue _;case 14:AMb(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf_.b);m=a.t;n=a.a;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8
|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;$p=15;case 15:AMb(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bga.b);m=a.t;n=a.a;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A0y(a){return 0;}
function WD(){var a=this;D.call(a);a.gM=null;a.oV=null;a.xI=null;a.u5=null;a.zS=0;a.og=0;a.fh=0;a.bz=0;a.hx=0;a.oj=0;a.lo=0;a.hq=0;a.Jr=0;a.k3=0;a.nx=0;}
function Cv(a,b,c){a.oV.data[b]=c;}
function Ep(a,b){return a.oV.data[b];}
function M0(a){return QW(a,0);}
function QW(a,b){Vu(a,b);return a.gM.data[(b*2|0)+1|0];}
function EM(a,b,c){a.gM.data[b*2|0]=c;}
function Ne(a,b,c){a.gM.data[(b*2|0)+1|0]=c;}
function Hl(a,b){return a.gM.data[b*2|0];}
function JM(a,b){return a.gM.data[(b*2|0)+1|0];}
function ANg(a,b){var c,d;c=Hl(a,b);d=JM(a,b);if((d|c|(d-c|0))>=0&&d<=Bg(a.u5))return Ev(a.u5,c,d);return null;}
function AEY(a){return PO(a,0);}
function PO(a,b){Vu(a,b);return a.gM.data[b*2|0];}
function ADg(a){if(a.gM.data[0]==(-1)){a.gM.data[0]=a.hx;a.gM.data[1]=a.hx;}a.k3=M0(a);}
function Tq(a,b){return a.xI.data[b];}
function FF(a,b,c){a.xI.data[b]=c;}
function Vu(a,b){var c;if(!a.og){c=new D2;O(c);M(c);}if(b>=0&&b<a.zS)return;c=new BQ;Bj(c,V1(b));M(c);}
function ARO(a){a.og=1;}
function A$7(a){return a.og;}
function Xr(a,b,c,d){a.og=0;a.nx=2;Nf(a.gM,(-1));Nf(a.oV,(-1));if(b!==null)a.u5=b;if(c>=0){a.fh=c;a.bz=d;}a.hx=a.fh;}
function AAi(a){Xr(a,null,(-1),(-1));}
function AP_(a,b){a.hx=b;if(a.k3>=0)b=a.k3;a.k3=b;}
function A4C(a){return a.fh;}
function A7F(a){return a.bz;}
function A5u(a,b){a.nx=b;}
function AWy(a){return a.nx;}
function A6x(a){return a.lo;}
function A3z(a){return a.oj;}
function A32(a){return a.k3;}
function VV(){var a=this;D.call(a);a.ct=null;a.l6=0;a.fZ=0;a.f0=0;a.fy=0;a.fd=0;a.eL=0;}
function AOA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.l6;while(c<=a.fy){d=a.f0;while(d<=a.eL){a:{if(EI(b,c,0,d)){e=a.fZ;while(true){if(e>a.fd)break a;if(e>=0&&e<128){f=a.ct;$p=1;continue _;}e=e+1|0;}}}d=d+1|0;}c=c+1|0;}return;case 1:$z=ALx(b,f,c,e,d);if(C()){break _;}g=$z;$p=2;case 2:$z=ACH(b,
c,e,d);if(C()){break _;}h=$z;L();i=BgO.data[h];if(!i)i=1;j=0;if(a.ct===BkJ){$p=3;continue _;}if(a.ct===BkK)j=BgQ.data[h];if(i>=15&&!j){j=0;if(g!=j){f=a.ct;$p=10;continue _;}b:while(true){e=e+1|0;while(e>a.fd){while(true){d=d+1|0;while(d>a.eL){c=c+1|0;if(c>a.fy)break b;d=a.f0;}if(!EI(b,c,0,d))continue;else break;}e=a.fZ;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;}f=a.ct;h=c-1|0;$p=4;continue _;case 3:$z=ZK(b,c,e,d);if(C()){break _;}h=$z;if(h)j=15;if(i>=15&&!j){j=0;if(g!=j){f=a.ct;$p
=10;continue _;}c:while(true){e=e+1|0;while(e>a.fd){while(true){d=d+1|0;while(d>a.eL){c=c+1|0;if(c>a.fy)break c;d=a.f0;}if(!EI(b,c,0,d))continue;else break;}e=a.fZ;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;}f=a.ct;h=c-1|0;$p=4;case 4:$z=ALx(b,f,h,e,d);if(C()){break _;}k=$z;f=a.ct;h=c+1|0;$p=5;case 5:$z=ALx(b,f,h,e,d);if(C()){break _;}l=$z;f=a.ct;h=e-1|0;$p=6;case 6:$z=ALx(b,f,c,h,d);if(C()){break _;}m=$z;f=a.ct;h=e+1|0;$p=7;case 7:$z=ALx(b,f,c,h,d);if(C()){break _;}n=$z;f=a.ct;h
=d-1|0;$p=8;case 8:$z=ALx(b,f,c,e,h);if(C()){break _;}o=$z;f=a.ct;h=d+1|0;$p=9;case 9:$z=ALx(b,f,c,e,h);if(C()){break _;}p=$z;if(l<=k)l=k;if(m<=l)m=l;if(n<=m)n=m;if(o<=n)o=n;if(p<=o)p=o;h=p-i|0;if(h<0)h=0;if(j<=h)j=h;if(g!=j){f=a.ct;$p=10;continue _;}d:while(true){e=e+1|0;while(e>a.fd){while(true){d=d+1|0;while(d>a.eL){c=c+1|0;if(c>a.fy)break d;d=a.f0;}if(!EI(b,c,0,d))continue;else break;}e=a.fZ;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;case 10:AMG(b,f,c,e,d,j);if(C()){break _;}k
=j-1|0;if(k<0)k=0;f=a.ct;h=c-1|0;$p=11;case 11:AQm(b,f,h,e,d,k);if(C()){break _;}f=a.ct;h=e-1|0;$p=12;case 12:AQm(b,f,c,h,d,k);if(C()){break _;}f=a.ct;h=d-1|0;$p=13;case 13:AQm(b,f,c,e,h,k);if(C()){break _;}h=c+1|0;if(h>=a.fy){f=a.ct;$p=14;continue _;}h=e+1|0;if(h>=a.fd){f=a.ct;$p=15;continue _;}h=d+1|0;if(h>=a.eL){f=a.ct;$p=16;continue _;}e:while(true){e=e+1|0;while(e>a.fd){while(true){d=d+1|0;while(d>a.eL){c=c+1|0;if(c>a.fy)break e;d=a.f0;}if(!EI(b,c,0,d))continue;else break;}e=a.fZ;}if(e<0)continue;if(e>=
128)continue;else{f=a.ct;$p=1;continue _;}}return;case 14:AQm(b,f,h,e,d,k);if(C()){break _;}h=e+1|0;if(h>=a.fd){f=a.ct;$p=15;continue _;}h=d+1|0;if(h>=a.eL){f=a.ct;$p=16;continue _;}a:while(true){e=e+1|0;while(e>a.fd){while(true){d=d+1|0;while(d>a.eL){c=c+1|0;if(c>a.fy)break a;d=a.f0;}if(!EI(b,c,0,d))continue;else break;}e=a.fZ;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;case 15:AQm(b,f,c,h,d,k);if(C()){break _;}h=d+1|0;if(h>=a.eL){f=a.ct;$p=16;continue _;}f:while(true){e=e+1|0;while
(e>a.fd){while(true){d=d+1|0;while(d>a.eL){c=c+1|0;if(c>a.fy)break f;d=a.f0;}if(!EI(b,c,0,d))continue;else break;}e=a.fZ;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;case 16:AQm(b,f,c,e,h,k);if(C()){break _;}g:while(true){e=e+1|0;while(e>a.fd){while(true){d=d+1|0;while(d>a.eL){c=c+1|0;if(c>a.fy)break g;d=a.f0;}if(!EI(b,c,0,d))continue;else break;}e=a.fZ;}if(e<0)continue;if(e>=128)continue;else{f=a.ct;$p=1;continue _;}}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function ALP(a,b,c,d,e,f,g){if(b>=a.l6&&c>=a.fZ&&d>=a.f0&&e<=a.fy&&f<=a.fd&&g<=a.eL)return 1;if(b>=(a.l6-1|0)&&c>=(a.fZ-1|0)&&d>=(a.f0-1|0)&&e<=(a.fy+1|0)&&f<=(a.fd+1|0)&&g<=(a.eL+1|0)){if(b<a.l6)a.l6=b;if(c<a.fZ)a.fZ=c;if(d<a.f0)a.f0=d;if(e>a.fy)a.fy=e;if(f>a.fd)a.fd=f;if(g>a.eL)a.eL=g;return 1;}return 0;}
function Se(){}
function AGk(){var a=this;Gb.call(a);a.ir=0;a.ea=null;}
function AWz(a){var b=new AGk();A7j(b,a);return b;}
function A7j(a,b){Lr(a,b);a.ea=$rt_createByteArray(8);}
function AHW(a){a.fo.ly();}
function Rg(a,b,c,d){var e;if(b!==null){a.fo.gB(b,c,d);a.ir=a.ir+d|0;return;}e=new EE;O(e);M(e);}
function K0(a,b){a.fo.nR(b);a.ir=a.ir+1|0;}
function APA(a,b){UP(a,$rt_doubleToLongBits(b));}
function APv(a,b){JU(a,$rt_floatToIntBits(b));}
function JU(a,b){a.ea.data[0]=b>>24<<24>>24;a.ea.data[1]=b>>16<<24>>24;a.ea.data[2]=b>>8<<24>>24;a.ea.data[3]=b<<24>>24;a.fo.gB(a.ea,0,4);a.ir=a.ir+4|0;}
function UP(a,b){a.ea.data[0]=Long_shr(b,56).lo<<24>>24;a.ea.data[1]=Long_shr(b,48).lo<<24>>24;a.ea.data[2]=Long_shr(b,40).lo<<24>>24;a.ea.data[3]=b.hi<<24>>24;a.ea.data[4]=Long_shr(b,24).lo<<24>>24;a.ea.data[5]=Long_shr(b,16).lo<<24>>24;a.ea.data[6]=Long_shr(b,8).lo<<24>>24;a.ea.data[7]=b.lo<<24>>24;a.fo.gB(a.ea,0,8);a.ir=a.ir+8|0;}
function AAl(a,b){a.ea.data[0]=b>>8<<24>>24;a.ea.data[1]=b<<24>>24;a.fo.gB(a.ea,0,2);a.ir=a.ir+2|0;}
function AOn(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function Xz(a,b){var c,d,e;c=AGt(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new B2;Bj(b,B(888));M(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Rg(a,e,0,APj(a,b,e,AOn(a,d,e,0)));}
function AGt(a,b){var c,d,e,f;c=0;d=Bg(b);e=0;while(e<d){f=Y(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function APj(a,b,c,d){var e,f,g,h,i,j,k;e=Bg(b);f=0;while(f<e){g=Y(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function AGe(){D.call(this);}
function Bm8(){var a=new AGe();A0A(a);return a;}
function A0A(a){return;}
function Oa(){D.call(this);}
var Bm9=null;var Bm$=null;function Bm_(){var a=new Oa();ABz(a);return a;}
function ABz(a){return;}
function AB9(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.zt=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.vb=Long_ZERO;c.t$=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=AOF(Bm$,f);if(h<0)h= -h-2|0;i=12+(f-Bm$.data[h]|0)|0;j=QD(e,Bm9.data[h],i);if(Long_ge(j,
new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-Bm$.data[h]|0)|0;j=QD(e,Bm9.data[h],i);}k=Long_shru(Bm9.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,o)),Long_div(l,Long_fromInt(2))))o
=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.vb=e;c.t$=h-330|0;}
function QD(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function ABx(){var b,c,d,e,f,g,h,i,j,k;Bm9=$rt_createLongArray(660);Bm$=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=Bm9.data;g=d+330|0;f[g]=ME(e,Long_fromInt(80));Bm$.data[g]=c;e=ME(e,Long_fromInt(10));h=AI_(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=Bm9.data;g=(330-i|0)-1|0;f[g]=ME(b,Long_fromInt(80));Bm$.data[g]=d;i=i+1|0;}}
function HN(){D.call(this);}
function AM3(){var a=this;HN.call(a);a.nO=null;a.rO=0;}
function G_(a,b){var c=new AM3();AUr(c,a,b);return c;}
function AUr(a,b,c){var d;a.rO=c;a.nO=J(PI,c);d=0;while(d<c){a.nO.data[d]=BbX(b);d=d+1|0;}}
function E0(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.rO){d=d+AHb(a.nO.data[f],b*e,c*e)/e;e=e/2.0;f=f+1|0;}return d;}
function Ve(a,b,c,d){var e,f,g;e=0.0;f=1.0;g=0;while(g<a.rO){e=e+Lz(a.nO.data[g],b*f,c*f,d*f)/f;f=f/2.0;g=g+1|0;}return e;}
function H2(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o;if(b===null)b=$rt_createDoubleArray(Bx(Bx(f,g),h));else{l=0;while(true){m=b.data;if(l>=m.length)break;m[l]=0.0;l=l+1|0;}}n=1.0;o=0;while(o<a.rO){AQH(a.nO.data[o],b,c,d,e,f,g,h,i*n,j*n,k*n,n);n=n/2.0;o=o+1|0;}return b;}
function AC3(){var a=this;D.call(a);a.mh=null;a.m8=0;a.FX=Long_ZERO;}
function ATG(a,b,c){var d=new AC3();A1L(d,a,b,c);return d;}
function A1L(a,b,c,d){a.mh=b;a.m8=c;a.FX=d;}
function PI(){var a=this;HN.call(a);a.b6=null;a.vr=0.0;a.ys=0.0;a.wI=0.0;}
function Bna(){var a=new PI();A_T(a);return a;}
function BbX(a){var b=new PI();Zy(b,a);return b;}
function A_T(a){Zy(a,new DA);}
function Zy(a,b){var c,d,e,f,g;a.b6=$rt_createIntArray(512);a.vr=Cl(b)*256.0;a.ys=Cl(b)*256.0;a.wI=Cl(b)*256.0;c=0;while(c<256){d=a.b6.data;e=c+1|0;d[c]=c;c=e;}c=0;while(c<256){f=E(b,256-c|0)+c|0;g=a.b6.data[c];a.b6.data[c]=a.b6.data[f];a.b6.data[f]=g;a.b6.data[c+256|0]=a.b6.data[c];c=c+1|0;}}
function Lz(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;e=b+a.vr;f=c+a.ys;g=d+a.wI;h=e|0;i=f|0;j=g|0;if(e<h)h=h+(-1)|0;if(f<i)i=i+(-1)|0;if(g<j)j=j+(-1)|0;k=h&255;l=i&255;m=j&255;c=e-h;d=f-i;n=g-j;o=c*c*c*(c*(c*6.0-15.0)+10.0);p=d*d*d*(d*(d*6.0-15.0)+10.0);q=n*n*n*(n*(n*6.0-15.0)+10.0);r=a.b6.data[k]+l|0;s=a.b6.data[r]+m|0;t=a.b6.data[r+1|0]+m|0;u=a.b6.data[k+1|0]+l|0;v=a.b6.data[u]+m|0;w=a.b6.data[u+1|0]+m|0;e=Dr(a,a.b6.data[s],c,d,n);k=a.b6.data[v];x=c-1.0;b=DN(a,o,e,Dr(a,k,x,d,n));k=a.b6.data[t];e
=d-1.0;b=DN(a,p,b,DN(a,o,Dr(a,k,c,e,n),Dr(a,a.b6.data[w],x,e,n)));k=a.b6.data[s+1|0];f=n-1.0;return DN(a,q,b,DN(a,p,DN(a,o,Dr(a,k,c,d,f),Dr(a,a.b6.data[v+1|0],x,d,f)),DN(a,o,Dr(a,a.b6.data[t+1|0],c,e,f),Dr(a,a.b6.data[w+1|0],x,e,f))));}
function DN(a,b,c,d){return c+b*(d-c);}
function Dr(a,b,c,d,e){var f,g;f=b&15;g=f>=8?d:c;if(f>=4)d=f!=12&&f!=14?e:c;if(f&1)g= -g;if(f&2)d= -d;return g+d;}
function AHb(a,b,c){return Lz(a,b,c,0.0);}
function A40(a,b,c,d){return Lz(a,b,c,d);}
function AQH(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;m=0;n=1.0/l;o=(-1);p=0.0;q=0.0;r=0.0;s=0.0;t=0;while(t<f){u=(c+t|0)*i+a.vr;v=u|0;if(u<v)v=v+(-1)|0;w=v&255;u=u-v;x=u*u*u*(u*(u*6.0-15.0)+10.0);y=0;v=w+1|0;z=u-1.0;while(y<h){ba=(e+y|0)*k+a.wI;bb=ba|0;if(ba<bb)bb=bb+(-1)|0;bc=bb&255;bd=ba-bb;be=bd*bd*bd*(bd*(bd*6.0-15.0)+10.0);bf=0;ba=bd-1.0;while(bf<g){bg=(d+bf|0)*j+a.ys;bh=bg|0;if(bg<bh)bh=bh+(-1)|0;bi=bh&255;l=bg-bh;bj=l*l*l*(l*(l
*6.0-15.0)+10.0);if(bf&&bi==o)bi=o;else{bk=a.b6.data[w]+bi|0;bl=a.b6.data[bk]+bc|0;bm=a.b6.data[bk+1|0]+bc|0;bn=a.b6.data[v]+bi|0;bo=a.b6.data[bn]+bc|0;bp=a.b6.data[bn+1|0]+bc|0;p=DN(a,x,Dr(a,a.b6.data[bl],u,l,bd),Dr(a,a.b6.data[bo],z,l,bd));bn=a.b6.data[bm];bq=l-1.0;q=DN(a,x,Dr(a,bn,u,bq,bd),Dr(a,a.b6.data[bp],z,bq,bd));r=DN(a,x,Dr(a,a.b6.data[bl+1|0],u,l,ba),Dr(a,a.b6.data[bo+1|0],z,l,ba));s=DN(a,x,Dr(a,a.b6.data[bm+1|0],u,bq,ba),Dr(a,a.b6.data[bp+1|0],z,bq,ba));}br=b.data;bs=DN(a,be,DN(a,bj,p,q),DN(a,bj,
r,s));bn=m+1|0;br[m]=br[m]+bs*n;bf=bf+1|0;m=bn;o=bi;}y=y+1|0;}t=t+1|0;}}
function Ug(){D.call(this);this.gH=null;}
function Jm(a){var b=new Ug();AJP(b,a);return b;}
function AIY(a){var b=new Ug();A0W(b,a);return b;}
function AJP(a,b){a.gH=$rt_createByteArray(b>>1);}
function A0W(a,b){a.gH=b;}
function Im(a,b,c,d){var e,f;e=b<<11|d<<7|c;f=e>>1;return !(e&1)?a.gH.data[f]&15:a.gH.data[f]>>4&15;}
function D7(a,b,c,d,e){var f,g;f=b<<11|d<<7|c;g=f>>1;if(!(f&1))a.gH.data[g]=(a.gH.data[g]&240|e&15)<<24>>24;else a.gH.data[g]=(a.gH.data[g]&15|(e&15)<<4)<<24>>24;}
function JR(a){return a.gH===null?0:1;}
function E3(){EY.call(this);}
var Bnb=null;var BfS=null;var Bnc=null;var Bnd=null;function ANn(){var b,c,d;b=new E3;FQ(b,B(889),0);Bnb=b;b=new E3;FQ(b,B(890),1);BfS=b;b=new E3;FQ(b,B(891),2);Bnc=b;c=J(E3,3);d=c.data;d[0]=Bnb;d[1]=BfS;d[2]=Bnc;Bnd=c;}
function Vz(){Fb.call(this);}
var Bne=null;function ME(b,c){return Long_udiv(b, c);}
function AI_(b,c){return Long_urem(b, c);}
function AMa(){Bne=F($rt_longcls());}
function TN(){D.call(this);this.C1=null;}
function ASF(a){CM(a.C1,Lj(1));}
function A4H(a){ASF(a);}
function TK(){D.call(this);this.Dw=null;}
function ASM(a){CM(a.Dw,Lj(0));}
function AYB(a){ASM(a);}
function Rv(){D.call(this);this.BP=null;}
function XZ(a){CM(a.BP,Lj(1));}
function A85(a){XZ(a);}
function Ry(){D.call(this);this.B8=null;}
function ASw(a){CM(a.B8,Lj(0));}
function A7s(a){ASw(a);}
function Rt(){var a=this;D.call(a);a.C9=null;a.vk=null;}
function ACE(a){CM(a.C9,a.vk.result===null?Bnc:!(UF(a.vk.result)?1:0)?Bnb:BfS);}
function A58(a){ACE(a);}
function Ru(){D.call(this);this.Ex=null;}
function ACi(a){CM(a.Ex,Bnc);}
function A3v(a){ACi(a);}
function Rw(){var a=this;D.call(a);a.E6=null;a.EF=null;a.zj=null;a.vU=null;a.BD=0;a.Do=0;a.xw=null;}
function AMU(a){var b,c;b=a.E6.result;if(b!==null&&b.key!==null&&b.value!==null){c=$rt_str(AZ$(b.key));if(c!==null&&Iy(c,a.vU)&&!(!a.BD&&Hh(c,47,Bg(a.vU)+1|0)!=(-1))){if(!(UF(b.value)?1:0))Fv(a.xw,ATG(c,0,Long_add(new Long(596067632, 383),Long_fromInt(A00(b.value)))));else if(a.Do)Fv(a.xw,ATG(c,1,Long_fromInt(-1)));}b.continue();return;}CM(a.EF,CY(a.zj.data[0]));}
function A7z(a){AMU(a);}
function Rx(){var a=this;D.call(a);a.D6=null;a.w0=null;}
function ALl(a){CM(a.D6,CY(a.w0.data[0]<=0?(-1):a.w0.data[0]));}
function A1Z(a){ALl(a);}
function Er(){D.call(this);}
function E6(a,b,c,d){return;}
function Ro(){Er.call(this);}
function GY(){var a=new Ro();A7d(a);return a;}
function A7d(a){return;}
function AEZ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,3)+4|0;h=1;if(e>=1){i=e+g|0;if((i+1|0)<=128){j=(e+1|0)+g|0;k=j-2|0;l=e;a:while(true){if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;while(o<=(d+n
|0)&&h){p=f-n|0;while(p<=(f+n|0)&&h){if(l>=0&&l<128)break a;h=0;p=p+1|0;}o=o+1|0;}l=l+1|0;}$p=7;continue _;}}return 0;case 1:$z=ACH(b,d,m,f);if(C()){break _;}k=$z;L();if(!(k!=Be4.b&&k!=Be5.b)&&e<((128-g|0)-1|0)){k=Be5.b;$p=2;continue _;}return 0;case 2:ALG(b,d,m,f,k);if(C()){break _;}k=(e-3|0)+g|0;b:while(true){if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;while(r<=l){j=r-d|0;s=m;while(s<=h){t=s-f|0;if(Ic(j)!=q)break b;if(Ic(t)!=q)break b;if(E(c,
2)&&o)break b;s=s+1|0;}r=r+1|0;}k=k+1|0;}u=BgN.data;$p=5;continue _;case 3:$z=ACH(b,d,o,f);if(C()){break _;}m=$z;if(m&&m!=Bfe.b){k=k+1|0;if(k>=g)return 1;o=e+k|0;continue _;}m=Bfd.b;$p=4;case 4:ALG(b,d,o,f,m);if(C()){break _;}k=k+1|0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;case 5:$z=ACH(b,r,k,s);if(C()){break _;}t=$z;if(!u[t]){t=Bfe.b;$p=6;continue _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h
=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(Ic(j)!=q)break;if(Ic(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=BgN.data;continue _;case 6:ALG(b,r,k,s,t);if(C()){break _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(Ic(j)!=q)break;if(Ic(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=BgN.data;$p=5;continue _;case 7:$z=ACH(b,o,l,p);if(C()){break _;}r
=$z;if(r){L();if(r!=Bfe.b)h=0;}while(true){p=p+1|0;while(!(p<=(f+n|0)&&h)){o=o+1|0;while(!(o<=(d+n|0)&&h)){l=l+1|0;if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;}p=f-n|0;}if(l>=0&&l<128)break;h=0;}continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function OG(){D.call(this);this.JI=0;}
var Bnf=null;var Bng=null;function AYh(a){var b=new OG();AOm(b,a);return b;}
function AOm(a,b){a.JI=b;}
function Lj(b){return !b?Bng:Bnf;}
function AH2(){Bnf=AYh(1);Bng=AYh(0);}
function SU(){var a=this;CT.call(a);a.Au=null;a.fW=null;a.xO=0;a.f8=0;}
function AEg(a){DH(a.bH);AP8(1);S(a.bH,Dk(0,(a.bn/2|0)-100|0,(a.bE/4|0)+120|0,B(600)));}
function ANU(a){AP8(0);}
function AYK(a){a.xO=a.xO+1|0;}
function AHx(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gI&&!b.cn){b=a.fW;$p=1;continue _;}return;case 1:ACq(b);if(C()){break _;}c=a.I;b=null;$p=2;case 2:AD8(c,b);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,$p);}
function AC_(a,b,c){var d,e;if(c==200)a.f8=(a.f8-1|0)&3;if(!(c!=208&&c!=28))a.f8=(a.f8+1|0)&3;if(c==14&&Bg(a.fW.gz.data[a.f8])>0)a.fW.gz.data[a.f8]=Ev(a.fW.gz.data[a.f8],0,Bg(a.fW.gz.data[a.f8])-1|0);if(UM(B(892),b)>=0&&Bg(a.fW.gz.data[a.f8])<15){d=a.fW.gz.data;c=a.f8;e=new T;V(e);e=H(e,a.fW.gz.data[a.f8]);Dy(e,b);d[c]=U(e);}}
function ABD(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABs(a);if(C()){break _;}DF(a,a.b1,a.Au,a.bn/2|0,40,16777215);B1();Bu(a.bn/2|0,a.bE/2|0,50.0);Cw((-60.0),(-60.0),(-60.0));Bw(180.0,0.0,1.0,0.0);if(!((a.xO/6|0)%2|0))a.fW.rF=a.f8;e=a.fW;$p=2;case 2:$z=AMs(e);if(C()){break _;}f=$z;Bw((f*360|0)/16.0,0.0,1.0,0.0);e=BkE;g=a.fW;h=(-0.5);i=(-0.75);j
=(-0.5);k=0.0;$p=3;case 3:AFD(e,g,h,i,j,k);if(C()){break _;}a.fW.rF=(-1);BE();$p=4;case 4:AFT(a,b,c,d);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function IJ(){EY.call(this);this.Ar=0;}
var BkJ=null;var BkK=null;var Bnh=null;function A_0(a,b,c){var d=new IJ();AHg(d,a,b,c);return d;}
function AHg(a,b,c,d){FQ(a,b,c);a.Ar=d;}
function AFK(){var b,c;BkJ=A_0(B(893),0,15);BkK=A_0(B(894),1,0);b=J(IJ,2);c=b.data;c[0]=BkJ;c[1]=BkK;Bnh=b;}
function MW(){var a=this;D.call(a);a.nn=null;a.n0=null;}
function A0k(a){return a.n0;}
function Tg(a,b){var c;c=a.n0;a.n0=b;return c;}
function AXU(a){return a.nn;}
function Lv(){var a=this;MW.call(a);a.da=null;a.dj=null;a.lI=0;a.jr=0;}
function Ni(a){var b;b=L$(a);if(b==2){if(L$(a.dj)<0)a.dj=O6(a.dj);return PK(a);}if(b!=(-2))return a;if(L$(a.da)>0)a.da=PK(a.da);return O6(a);}
function L$(a){return (a.dj===null?0:a.dj.lI)-(a.da===null?0:a.da.lI)|0;}
function O6(a){var b;b=a.da;a.da=b.dj;b.dj=a;FM(a);FM(b);return b;}
function PK(a){var b;b=a.dj;a.dj=b.da;b.da=a;FM(a);FM(b);return b;}
function FM(a){var b,c;b=a.dj===null?0:a.dj.lI;c=a.da===null?0:a.da.lI;a.lI=DD(b,c)+1|0;a.jr=1;if(a.da!==null)a.jr=a.jr+a.da.jr|0;if(a.dj!==null)a.jr=a.jr+a.dj.jr|0;}
function AOy(a,b){return b?a.dj:a.da;}
function AM_(){var a=this;Gb.call(a);a.ky=null;a.g6=0;}
function BbY(a){var b=new AM_();A6C(b,a);return b;}
function A6C(a,b){Lr(a,b);a.ky=$rt_createByteArray(8192);}
function AYL(a){M1(a);a.fo.ly();}
function AYg(a,b,c,d){var e,f,g;e=a.ky;if(e!==null&&d>=e.data.length){M1(a);a.fo.gB(b,c,d);return;}if(b===null){f=new EE;Bj(f,B(895));M(f);}if(c>=0&&c<=(b.data.length-d|0)){if(d<0){g=new Oo;f=new T;V(f);Bj(g,U(Be(H(f,B(896)),d)));M(g);}if(e===null){f=new B2;O(f);M(f);}if(d>=(e.data.length-a.g6|0))M1(a);Dj(b,c,e,a.g6,d);a.g6=a.g6+d|0;return;}g=new Oo;f=new T;V(f);Bj(g,U(Be(H(f,B(897)),c)));M(g);}
function A4l(a){var b,$$je;if(a.ky===null)return;a:{try{K8(a);}catch($$e){$$je=Bh($$e);b=$$je;break a;}a.ky=null;return;}a.ky=null;M(b);}
function AXC(a,b){var c,d,e,f;c=a.ky;if(c===null){d=new B2;O(d);M(d);}e=c.data;if(a.g6==e.length){a.fo.gB(c,0,a.g6);a.g6=0;}f=a.g6;a.g6=f+1|0;e[f]=b<<24>>24;}
function M1(a){if(a.g6>0){a.fo.gB(a.ky,0,a.g6);a.g6=0;}}
function W1(){D.call(this);}
function Bni(){var a=new W1();AYe(a);return a;}
function AYe(a){return;}
function AJh(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p
=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ex(b,d,e,f,B(898),4.0,(1.0+(N(b.r)-N(b.r))*0.20000000298023224)*0.699999988079071);h=F9();i=16;j=0;k=15.0;a:while(true){if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=Eb(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;while(n<i){o=0;while(o<i){if(!(j&&j!=15&&n&&n!=15&&o&&o!=15)){r=j/k*2.0-1.0;s=n/k*2.0-1.0;t
=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.r)*0.6000000238418579);y=0.30000001192092896;z=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;if(x>0.0)break a;}o=o+1|0;}n=n+1|0;}j=j+1|0;}bc=K(l);bd=K(v);be=K(w);$p=9;continue _;case 1:$z=ADY(b,c,q);if(C()){break _;}q=$z;bf=BY(d,e,f);bg=0;while(true){if(bg>=Df(q)){bh=Ch();DE(bh,h);bi=Df(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;$p=4;continue _;}bn=
Z(q,bg);bj=Sr(bn,d,e,f)/l;if(bj<=1.0)break;bg=bg+1|0;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Cg(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;case 2:$z=ADO(b,bf,bh);if(C()){break _;}x=$z;bs=x;bt=(1.0-bj)*bs;m=(bt*bt+bt)/2.0*8.0*l+1.0|0;$p=3;case 3:bn.ft(c,m);if(C()){break _;}bn.g=bn.g+v*bt;bn.i=bn.i+w*bt;bn.h=bn.h+z*bt;while(true){bg=bg+1|0;if(bg>=Df(q)){bh=Ch();DE(bh,h);bi=Df(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;$p=4;continue _;}bn=Z(q,bg);bj=Sr(bn,d,
e,f)/l;if(bj>1.0)continue;else break;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Cg(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;continue _;case 4:$z=ACH(b,m,bl,bm);if(C()){break _;}bu=$z;bv=0;y=m;bw=bl;x=bm;while(bv<1){bq=y+N(b.r);l=bw+N(b.r);v=x+N(b.r);w=bq-d;z=l-e;ba=v-f;bb=Cg(w*w+z*z+ba*ba);w=w/bb;z=z/bb;ba=ba/bb;bb=0.5/(bb/r+0.1)*(N(b.r)*N(b.r)+0.30000001192092896);w=w*bb;z=z*bb;ba=ba*bb;BX(b,B(223),(bq+s)/2.0,(l+u)/2.0,(v+bj)/2.0,w,z,ba);BX(b,B(256),bq,l,v,w,z,ba);bv=bv+1|0;}if(bu>0){L();c=Be2.data[bu];$p
=5;continue _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;continue _;case 5:$z=AEX(b,m,bl,bm);if(C()){break _;}bv=$z;g=0.30000001192092896;$p=6;case 6:c.H5(b,m,bl,bm,bv,g);if(C()){break _;}bv=0;$p=7;case 7:APK(b,m,bl,bm,bv);if(C()){break _;}c=Be2.data[bu];$p=8;case 8:c.sR(b,m,bl,bm);if(C()){break _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eF;bl=bk.e0;bm=bk.eG;$p=4;continue _;case 9:$z=ACH(b,bc,bd,be);if(C()){break _;}bx=$z;if(bx>0){L();x=x-(Be2.data[bx].yF(c)+0.30000001192092896)
*y;}if(x>0.0)Xq(h,CO(bc,bd,be));l=l+z;v=v+ba;w=w+bb;x=x-0.22500000894069672;while(x<=0.0){while(true){o=o+1|0;while(o>=i){n=n+1|0;while(n>=i){j=j+1|0;if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=Eb(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;}o=0;}if(!j)break;if(j==15)break;if(!n)break;if(n==15)break;if(!o)break;if(o!=15)continue;else break;}r=j/k*2.0-1.0;s=n/k*2.0-1.0;t=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.r)*0.6000000238418579);y=0.30000001192092896;z
=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;}bc=K(l);bd=K(v);be=K(w);continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p);}
function Oo(){BQ.call(this);}
function Bnj(){var a=new Oo();AWa(a);return a;}
function AWa(a){O(a);}
function ARz(){Er.call(this);}
function AYE(){var a=new ARz();A1a(a);return a;}
function A1a(a){return;}
function XX(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,2)+2|0;h=E(c,2)+2|0;i=0;j=(d-g|0)-1|0;k=(d+g|0)+1|0;l=e-1|0;m=e+3|0;n=m+1|0;o=(f-h|0)-1|0;p=(f+h|0)+1|0;q=j;a:while(true){r=R(q,
k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg8.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;while(true){t=R(s,n);if(t>0)break;v=o;w=R(v,p);if(w<=0)break a;s=s+1|0;}q=q+1|0;}$p=1;case 1:$z
=ACa(b,q,s,v);if(C()){break _;}x=$z;if(s==l&&!x.dt())return 0;if(!t&&!x.dt())return 0;if(!(q!=j&&r&&v!=o&&w)&&s==e){$p=5;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;c:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg8.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break c;t
=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}continue _;case 2:APK(b,d,e,f,k);if(C()){break _;}$p=3;case 3:$z=ANK(b,d,e,f);if(C()){break _;}b=$z;b.jP=ADT(a,c);return 1;case 4:$z=ACH(b,o,e,j);if(C()){break _;}r=$z;if(!r){u=0;r=o-1|0;$p=6;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=Bg8.b;$p=2;continue _;case 5:$z=ACH(b,q,s,v);if(C()){break _;}u
=$z;if(!u){u=s+1|0;$p=7;continue _;}v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg8.b;$p=2;continue _;}t=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q
=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 6:$z=ACa(b,r,e,j);if(C()){break _;}x=$z;if(x.dt())u=1;r=o+1|0;$p=10;continue _;case 7:$z=ACH(b,q,u,v);if(C()){break _;}u=$z;if(!u)i=i+1|0;v=v+1|0;while(true){w=R(v,p);if(w<=0)break;s=s+1|0;while(true){t=R(s,n);if(t<=0)break;q=q+1|0;r=R(q,k);if(r>0){if(i>=1&&i<=5){r=j;d:while(true){s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg8.b;$p=2;continue _;}t
=m;while(true){u=R(t,l);if(u<0)break;v=o;i=R(v,p);if(i<=0)break d;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 8:$z=ACa(b,r,t,v);if(C()){break _;}x=$z;if(x.dt()){if(!u&&E(c,4)){L();q=Bfh.b;$p=14;continue _;}L();q=Bfa.b;$p=12;continue _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while
(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg8.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){continue _;}q=t-1|0;$p=9;case 9:$z=ACa(b,r,q,v);if(C()){break _;}x=$z;if(x.dt()){$p=8;continue _;}q=0;$p=11;continue _;case 10:$z=ACa(b,r,e,j);if(C()){break _;}x=$z;if(x.dt())u=u+1|0;r=j-1|0;$p=13;continue _;case 11:APK(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r
=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg8.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 12:APK(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)
|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg8.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 13:$z=ACa(b,o,e,r);if(C()){break _;}x=$z;if(x.dt())u=u+1|0;r=j+1|0;$p=16;continue _;case 14:APK(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g
|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg8.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 15:APK(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=R(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=R(t,l);if(u>=0)break;r=r+1|0;s=R(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg8.b;$p=2;continue _;}t=m;}v=o;}if(r!=j
&&u&&v!=o&&s&&t!=n&&i){q=0;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 16:$z=ACa(b,o,e,r);if(C()){break _;}x=$z;if(x.dt())u=u+1|0;if(u==1){L();r=Bg$.b;$p=17;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=Bg8.b;$p=2;continue _;case 17:APK(b,o,e,j,r);if(C()){break _;}$p=18;case 18:$z=ANK(b,o,e,j);if(C()){break _;}x=$z;y=x;n=0;while(n<8){z=AHD(a,c);if(z!==null)AHO(y,E(c,k),z);n=n+1|0;}while(true){q=q+1|0;if(q
>=2)break;l=0;if(l>=3)continue;else{o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}}L();k=Bg8.b;$p=2;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AHD(a,b){var c,d;a:{c=E(b,10);if(!c){d=new Cf;BB();DC(d,BiV);break a;}if(c==1){d=new Cf;BB();Gp(d,Bh3,E(b,4)+1|0);break a;}if(c==2){d=new Cf;BB();DC(d,Bis);break a;}if(c==3){d=new Cf;BB();Gp(d,BhQ,E(b,4)+1|0);break a;}if(c==4){d=new Cf;BB();Gp(d,Bgr,E(b,4)+1|0);break a;}if(c==5){d=new Cf;BB();Gp(d,Bgs,E(b,4)+1|0);break a;}if(c==6){d=new Cf;BB();DC(d,BiR);break a;}if(c==7&&!E(b,100)){d=new Cf;BB();DC(d,BiP);break a;}d=null;}return d;}
function ADT(a,b){var c;c=E(b,4);return !c?B(860):c==1?B(863):c==2?B(863):c!=3?B(3):B(861);}
function Ci(){var a=this;Er.call(a);a.Ab=0;a.c3=0;}
function Bnk(a,b){var c=new Ci();Cm(c,a,b);return c;}
function Cm(a,b,c){a.Ab=b;a.c3=c;}
function AB3(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=N(c)*3.1415927410125732;h=d+8|0;i=h+Bp(g)*a.c3/8.0;j=
h-Bp(g)*a.c3/8.0;h=f+8|0;k=h+BC(g)*a.c3/8.0;l=h-BC(g)*a.c3/8.0;m=(e+E(c,3)|0)+2|0;n=(e+E(c,3)|0)+2|0;o=0;j=j-i;n=n-m;p=l-k;while(o<=a.c3){q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bp(h/a.c3)+1.0)*q+1.0;v=(Bp(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;while(w<=e){ba=f;while(ba<=x){bb=y;while(bb<=z){bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be<1.0){$p=1;continue _;}bb=bb+1|0;}ba=ba+1|0;}w=w+1|0;}o=o+1|0;}return 1;case 1:$z
=ACH(b,w,ba,bb);if(C()){break _;}bf=$z;L();if(bf==Be8.b){d=a.Ab;$p=2;continue _;}a:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c3)break a;q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bp(h/a.c3)+1.0)*q+1.0;v=(Bp(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{continue _;}}return 1;case 2:ALG(b,
w,ba,bb,d);if(C()){break _;}b:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c3)break b;q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Bp(h/a.c3)+1.0)*q+1.0;v=(Bp(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{$p=1;continue _;}}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p);}
function BU(){Er.call(this);this.ul=0;}
function Bnl(a){var b=new BU();BV(b,a);return b;}
function BV(a,b){a.ul=b;}
function AC1(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;case 1:$z=ACH(b,h,i,j);if(C()){break _;}k=$z;if(!k){L();l=Be2.data[a.ul];$p=2;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;continue _;case 2:$z
=l.Hp(b,h,i,j);if(C()){break _;}k=$z;if(k){k=a.ul;$p=3;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;case 3:ALG(b,h,i,j,k);if(C()){break _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Cn(){Er.call(this);this.E$=0;}
function Bnm(a){var b=new Cn();Cs(b,a);return b;}
function Cs(a,b){a.E$=b;}
function AMb(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e+1|0;$p=1;case 1:$z=ACH(b,d,g,f);if(C()){break _;}g=$z;L();if(g!=Be8.b)return 0;g=e-1|0;$p=2;case 2:$z=ACH(b,d,g,f);if(C()){break _;}h=$z;if(h!=Be8.b)return 0;$p=3;case 3:$z=ACH(b,d,e,f);if(C()){break _;}g=$z;if(g){$p=5;continue _;}g=0;h=d-1|0;$p=4;case 4:$z=ACH(b,h,e,f);if(C()){break _;}i
=$z;if(i==Be8.b)g=1;i=d+1|0;$p=6;continue _;case 5:$z=ACH(b,d,e,f);if(C()){break _;}g=$z;if(g!=Be8.b)return 0;g=0;h=d-1|0;$p=4;continue _;case 6:$z=ACH(b,i,e,f);if(C()){break _;}j=$z;if(j==Be8.b)g=g+1|0;k=f-1|0;$p=7;case 7:$z=ACH(b,d,e,k);if(C()){break _;}j=$z;if(j==Be8.b)g=g+1|0;j=f+1|0;$p=8;case 8:$z=ACH(b,d,e,j);if(C()){break _;}l=$z;if(l==Be8.b)g=g+1|0;l=0;$p=9;case 9:$z=ACH(b,h,e,f);if(C()){break _;}h=$z;if(!h)l=1;$p=10;case 10:$z=ACH(b,i,e,f);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=11;case 11:$z=ACH(b,
d,e,k);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=12;case 12:$z=ACH(b,d,e,j);if(C()){break _;}h=$z;if(!h)l=l+1|0;if(g==3&&l==1){g=a.E$;$p=13;continue _;}return 1;case 13:APK(b,d,e,f,g);if(C()){break _;}return 1;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function SJ(){C1.call(this);}
function Zl(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cS=a.j;a.bS=a.e;a.i=a.i+0.002;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARU(a,b,c,d);if(C()){break _;}a.g=a.g*0.8500000238418579;a.i=a.i*0.8500000238418579;a.h=a.h*0.8500000238418579;e=a.m;f=K(a.d);g=K(a.j);h=K(a.e);$p=2;case 2:$z=ACa(e,f,g,h);if(C()){break _;}e=$z;if(e!==Bf3){$p=3;continue _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;continue _;case 3:Cd(a);if
(C()){break _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;case 4:Cd(a);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AFE(){C1.call(this);this.CJ=0.0;}
function A8n(a,b,c,d,e){var f=new AFE();AWi(f,a,b,c,d,e);return f;}
function AWi(a,b,c,d,e,f){var g;FB(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.10000000149011612;a.i=a.i*0.10000000149011612;a.h=a.h*0.10000000149011612;g=BR()*0.30000001192092896;a.iu=g;a.ii=g;a.h3=g;a.dq=a.dq*0.75;a.dq=a.dq*f;a.CJ=a.dq;a.cw=8.0/(BR()*0.8+0.2)|0;a.cw=a.cw*f|0;a.o7=0;}
function AKj(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dp+c)/a.cw*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.dq=a.CJ*i;$p=1;case 1:ANG(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function AL5(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cS=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e7=7-((a.dp*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARU(a,c,d,e);if(C()){break _;}if(a.j===a.cS){a.g=a.g*1.1;a.h=a.h*1.1;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cd(a);if
(C()){break _;}a.e7=7-((a.dp*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Rb(){C1.call(this);}
function ASn(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANG(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function AE6(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cS=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e7=7-((a.dp*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARU(a,c,d,e);if(C()){break _;}a.g=a.g*0.8999999761581421;a.i=a.i*0.8999999761581421;a.h=a.h*0.8999999761581421;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cd(a);if(C()){break _;}a.e7=7-
((a.dp*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E_();}}C3().s(a,b,c,d,e,$p);}
function Pc(){C1.call(this);this.D7=0.0;}
function AQW(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dp+c)/a.cw;a.dq=a.D7*(1.0-i*i*0.5);$p=1;case 1:ANG(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ASK(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=(a.dp+b)/a.cw;if(c<0.0)c=0.0;if(c>1.0)c=1.0;$p=1;case 1:$z=ADV(a,b);if(C()){break _;}d=$z;return d*c+1.0-c;default:E_();}}C3().s(a,b,c,d,$p);}
function AA3(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cS=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=2;continue _;}c=a.g;d=a.i;e=a.h;$p=1;case 1:ARU(a,c,d,e);if(C()){break _;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cd(a);if(C()){break _;}c=a.g;d=a.i;e=a.h;$p=1;continue _;default:E_();}}C3().s(a,
b,c,d,e,$p);}
function ABc(){C1.call(this);this.y_=0.0;}
function BcV(a,b,c,d){var e=new ABc();A12(e,a,b,c,d);return e;}
function A12(a,b,c,d,e){FB(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=N(a.n)*0.4000000059604645+0.05000000074505806;a.iu=1.0;a.ii=1.0;a.h3=1.0;a.dq=a.dq*(N(a.n)*2.0+0.20000000298023224);a.y_=a.dq;a.cw=16.0/(BR()*0.8+0.2)|0;a.o7=0;a.e7=49;}
function AKk(a,b){return 1.0;}
function AG8(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dp+c)/a.cw;a.dq=a.y_*(1.0-i*i);$p=1;case 1:ANG(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,$p);}
function ALw(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bT=a.d;a.cS=a.j;a.bS=a.e;b=a.dp;a.dp=b+1|0;if(b>=a.cw){$p=1;continue _;}c=a.dp/a.cw;if(N(a.n)>c)BX(a.m,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;continue _;case 1:Cd(a);if(C()){break _;}c=a.dp/a.cw;if(N(a.n)>c)BX(a.m,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;case 2:ARU(a,d,e,f);if(C()){break _;}a.g
=a.g*0.9990000128746033;a.i=a.i*0.9990000128746033;a.h=a.h*0.9990000128746033;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function ARR(){JV.call(this);}
function BcI(a,b,c,d,e,f,g){var h=new ARR();AV6(h,a,b,c,d,e,f,g);return h;}
function AV6(a,b,c,d,e,f,g,h){TW(a,b,c,d,e);a.m_=0.03999999910593033;a.e7=a.e7+1|0;if(g===0.0&&!(f===0.0&&h===0.0)){a.g=f;a.i=g+0.1;a.h=h;}}
function AIE(){D.call(this);}
function Bnn(){var a=new AIE();AW8(a);return a;}
function AW8(a){return;}
function H7(){var a=this;D.call(a);a.di=null;a.bu=0;a.bq=0;a.bt=0;a.fU=0;a.bF=null;a.e5=null;}
function Bno(a,b,c,d,e){var f=new H7();Y1(f,a,b,c,d,e);return f;}
function Y1(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e5=b;a.bF=Ch();a.di=c;a.bu=d;a.bq=e;a.bt=f;$p=1;case 1:$z=AEX(c,d,e,f);if(C()){break _;}d=$z;a.fU=d;Lg(a);return;default:E_();}}C3().s(a,b,c,d,e,f,$p);}
function Lg(a){a:{DH(a.bF);if(!a.fU){S(a.bF,CO(a.bu,a.bq,a.bt-1|0));S(a.bF,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fU==1){S(a.bF,CO(a.bu-1|0,a.bq,a.bt));S(a.bF,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fU==2){S(a.bF,CO(a.bu-1|0,a.bq,a.bt));S(a.bF,CO(a.bu+1|0,a.bq+1|0,a.bt));break a;}if(a.fU==3){S(a.bF,CO(a.bu-1|0,a.bq+1|0,a.bt));S(a.bF,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fU==4){S(a.bF,CO(a.bu,a.bq+1|0,a.bt-1|0));S(a.bF,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fU==5){S(a.bF,CO(a.bu,a.bq,a.bt-1|0));S(a.bF,CO(a.bu,a.bq
+1|0,a.bt+1|0));break a;}if(a.fU==6){S(a.bF,CO(a.bu+1|0,a.bq,a.bt));S(a.bF,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fU==7){S(a.bF,CO(a.bu-1|0,a.bq,a.bt));S(a.bF,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fU==8){S(a.bF,CO(a.bu-1|0,a.bq,a.bt));S(a.bF,CO(a.bu,a.bq,a.bt-1|0));break a;}if(a.fU!=9)break a;S(a.bF,CO(a.bu+1|0,a.bq,a.bt));S(a.bF,CO(a.bu,a.bq,a.bt-1|0));}}
function AFV(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=a.bF.p)return;c=Z(a.bF,b);$p=1;case 1:$z=ARk(a,c);if(C()){break _;}c=$z;if(c!==null&&S1(c,a)){Rk(a.bF,b,CO(c.bu,c.bq,c.bt));d=b;}else{c=a.bF;d=b+(-1)|0;Em(c,b);}b=d+1|0;if(b>=a.bF.p)return;c=Z(a.bF,b);continue _;default:E_();}}C3().s(a,b,c,d,$p);}
function ARk(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.di;d=b.eF;e=b.e0;f=b.eG;$p=1;case 1:$z=ACH(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=a.di;d=b.eF;e=b.e0+1|0;f=b.eG;$p=2;continue _;}c=new H7;g=a.e5;h=a.di;d=b.eF;e=b.e0;f=b.eG;$p=3;continue _;case 2:$z=ACH(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=a.di;d=b.eF;e=b.e0-1|0;f=b.eG;$p=4;continue _;}c=new H7;g=a.e5;h=a.di;d
=b.eF;e=b.e0+1|0;f=b.eG;$p=5;continue _;case 3:Y1(c,g,h,d,e,f);if(C()){break _;}return c;case 4:$z=ACH(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e5.b){c=null;return c;}c=new H7;g=a.e5;h=a.di;e=b.eF;d=b.e0-1|0;f=b.eG;$p=6;continue _;case 5:Y1(c,g,h,d,e,f);if(C()){break _;}return c;case 6:Y1(c,g,h,e,d,f);if(C()){break _;}return c;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function S1(a,b){var c,d;c=0;while(c<a.bF.p){d=Z(a.bF,c);if(d.eF==b.bu&&d.eG==b.bt)return 1;c=c+1|0;}return 0;}
function K4(a,b,c,d){var e,f;e=0;while(e<a.bF.p){f=Z(a.bF,e);if(f.eF==b&&f.eG==d)return 1;e=e+1|0;}return 0;}
function Pg(a,b){var c;if(S1(a,b))return 1;if(a.bF.p==2)return 0;if(!a.bF.p)return 1;c=Z(a.bF,0);return b.bq==a.bq&&c.e0==a.bq?1:1;}
function AR1(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:S(a.bF,CO(b.bu,b.bq,b.bt));c=K4(a,a.bu,a.bq,a.bt-1|0);d=K4(a,a.bu,a.bq,a.bt+1|0);e=K4(a,a.bu-1|0,a.bq,a.bt);f=K4(a,a.bu+1|0,a.bq,a.bt);g=(-1);if(!(!c&&!d))g=0;if(!(!e&&!f))g=1;if(d&&f&&!c&&!e)g=6;if(d&&e&&!c&&!f)g=7;if(c&&e&&!d&&!f)g=8;if(c&&f&&!d&&!e)g=9;if(!g){b=a.di;c=a.bu;d=a.bq+1|0;e=a.bt-1|0;$p=1;continue _;}if(g==1){b=a.di;c=a.bu+1|0;d
=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.di;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 1:$z=ACH(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=4;b=a.di;c=a.bu;d=a.bq+1|0;e=a.bt+1|0;$p=3;continue _;case 2:$z=ACH(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=2;b=a.di;c=a.bu-1|0;d=a.bq+1|0;e=a.bt;$p=4;continue _;case 3:$z=ACH(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=5;if(g==1){b=a.di;c=a.bu+1|0;d=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.di;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 4:$z=ACH(b,
c,d,e);if(C()){break _;}c=$z;if(c==a.e5.b)g=3;if(g<0)g=0;b=a.di;c=a.bu;d=a.bq;e=a.bt;$p=5;case 5:AKK(b,c,d,e,g);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,$p);}
function AJe(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=CO(b,c,d);$p=1;case 1:$z=ARk(a,e);if(C()){break _;}e=$z;if(e===null)return 0;$p=2;case 2:AFV(e);if(C()){break _;}return Pg(e,a);default:E_();}}C3().s(a,b,c,d,e,$p);}
function Y0(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bu;c=a.bq;d=a.bt-1|0;$p=1;case 1:$z=AJe(a,b,c,d);if(C()){break _;}d=$z;b=a.bu;c=a.bq;e=a.bt+1|0;$p=2;case 2:$z=AJe(a,b,c,e);if(C()){break _;}b=$z;c=a.bu-1|0;e=a.bq;f=a.bt;$p=3;case 3:$z=AJe(a,c,e,f);if(C()){break _;}c=$z;e=a.bu+1|0;f=a.bq;g=a.bt;$p=4;case 4:$z=AJe(a,e,f,g);if(C()){break _;}e=$z;f=(-1);if(!(!d&&!b))f=0;if(!(!c&&
!e))f=1;if(b&&e&&!d&&!c)f=6;if(b&&c&&!d&&!e)f=7;if(d&&c&&!b&&!e)f=8;if(d&&e&&!b&&!c)f=9;if(!f){h=a.di;d=a.bu;b=a.bq+1|0;c=a.bt-1|0;$p=5;continue _;}if(f==1){h=a.di;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fU=f;Lg(a);h=a.di;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 5:$z=ACH(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=4;h=a.di;d=a.bu;b=a.bq+1|0;c=a.bt+1|0;$p=7;continue _;case 6:$z=ACH(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=2;h=a.di;d=a.bu-1|0;b=a.bq+1|0;c=a.bt;$p=8;continue _;case 7:$z
=ACH(h,d,b,c);if(C()){break _;}b=$z;if(b==a.e5.b)f=5;if(f==1){h=a.di;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fU=f;Lg(a);h=a.di;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 8:$z=ACH(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e5.b)f=3;if(f<0)f=0;a.fU=f;Lg(a);h=a.di;d=a.bu;b=a.bq;c=a.bt;$p=9;case 9:AKK(h,d,b,c,f);if(C()){break _;}g=0;if(g>=a.bF.p)return;h=Z(a.bF,g);$p=10;case 10:$z=ARk(a,h);if(C()){break _;}h=$z;if(h!==null){$p=11;continue _;}g=g+1|0;if(g>=a.bF.p)return;h=Z(a.bF,g);continue _;case 11:AFV(h);if
(C()){break _;}if(Pg(h,a)){$p=12;continue _;}g=g+1|0;if(g>=a.bF.p)return;h=Z(a.bF,g);$p=10;continue _;case 12:AR1(h,a);if(C()){break _;}g=g+1|0;if(g>=a.bF.p)return;h=Z(a.bF,g);$p=10;continue _;default:E_();}}C3().s(a,b,c,d,e,f,g,h,$p);}
function Vr(){var a=this;D.call(a);a.pe=null;a.Gg=0;a.mi=0;}
function AQg(a){a.mi=a.mi+1|0;}
function ANA(a){return a.mi<a.pe.data.length?0:1;}
function Sz(a,b){return BY(a.pe.data[a.mi].ig+(b.c1+1.0|0)*0.5,a.pe.data[a.mi].h0,a.pe.data[a.mi].is+(b.c1+1.0|0)*0.5);}
function ACm(){var a=this;D.call(a);a.ym=null;a.ka=null;a.q7=null;a.mf=null;}
function A2W(a){var b=new ACm();A6F(b,a);return b;}
function A6F(a,b){a.ka=Bcl();a.q7=De();a.mf=J(HR,32);a.ym=b;}
function APE(a,b,c,d){return Pi(a,b,c.d,c.L.Q,c.e,d);}
function AGq(a,b,c,d,e,f){return Pi(a,b,c+0.5,d+0.5,e+0.5,f);}
function Pi(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;UK(a.ka);Vi(a.q7);g=IV(a,K(b.L.Y),K(b.L.Q),K(b.L.Z));h=IV(a,K(c-b.c1/2.0),K(d),K(e-b.c1/2.0));i=A0Q(Ll(b.c1+1.0),Ll(b.eN+1.0),Ll(b.c1+1.0));g.mF=0.0;g.pk=E1(g,h);g.i7=g.pk;UK(a.ka);WZ(a.ka,g);j=g;a:{while(true){if(ACl(a.ka)){if(j!==g){k=UX(a,g,j);break a;}k=null;break a;}l=ARQ(a.ka);if(l.m2==h.m2)break;if(E1(l,h)<E1(j,h))j=l;l.nC=1;m=AJ1(a,b,l,i,h,f);n=0;while(n<m){k=a.mf.data[n];o=l.mF+E1(l,k);if(!(PG(k)&&o>=k.mF)){k.o6=l;k.mF=o;k.pk=E1(k,h);if(PG(k))ABA(a.ka,
k,k.mF+k.pk);else{k.i7=k.mF+k.pk;WZ(a.ka,k);}}n=n+1|0;}}k=UX(a,g,h);}return k;}
function AJ1(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;if(Kc(a,b,c.ig,c.h0+1|0,c.is,d)>0)g=1;h=KO(a,b,c.ig,c.h0,c.is+1|0,d,g);i=KO(a,b,c.ig-1|0,c.h0,c.is,d,g);j=KO(a,b,c.ig+1|0,c.h0,c.is,d,g);k=KO(a,b,c.ig,c.h0,c.is-1|0,d,g);if(h===null)l=0;else if(h.nC)l=0;else if(E1(h,e)>=f)l=0;else{m=a.mf.data;l=1;m[0]=h;}if(i===null)n=l;else if(i.nC)n=l;else if(E1(i,e)>=f)n=l;else{m=a.mf.data;n=l+1|0;m[l]=i;}if(j===null)o=n;else if(j.nC)o=n;else if(E1(j,e)>=f)o=n;else{m=a.mf.data;o=n+1|0;m[n]=j;}if(k===null)n=o;else if(k.nC)n
=o;else if(E1(k,e)>=f)n=o;else{m=a.mf.data;n=o+1|0;m[o]=k;}return n;}
function KO(a,b,c,d,e,f,g){var h,i,j,k;h=null;if(Kc(a,b,c,d,e,f)>0)h=IV(a,c,d,e);if(h===null){g=d+g|0;if(Kc(a,b,c,g,e,f)>0)h=IV(a,c,g,e);}if(h!==null){i=0;a:{while(true){if(d<=0)break a;j=Kc(a,b,c,d-1|0,e,f);if(j<=0)break a;if(j<0)return null;i=i+1|0;if(i>=4)break;d=d+(-1)|0;}return null;}if(d>0)h=IV(a,c,d,e);k=Oh(a.ym,c,d-1|0,e);if(!(k!==Bf3&&k!==Bf4))return null;}return h;}
function IV(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=CQ(a.q7,CY(e));if(f===null){f=A0Q(b,c,d);BT(a.q7,CY(e),f);}return f;}
function Kc(a,b,c,d,e,f){var g,h,i,j;g=c;a:{while(g<(c+f.ig|0)){h=d;while(h<(d+f.h0|0)){i=e;while(i<(e+f.is|0)){j=Oh(a.ym,c,d,e);if(j.uo())return 0;if(j===Bf3)break a;if(j===Bf4)break a;i=i+1|0;}h=h+1|0;}g=g+1|0;}return 1;}return (-1);}
function UX(a,b,c){var d,e,f,g;d=1;e=c;while(e.o6!==null){d=d+1|0;e=e.o6;}f=J(HR,d);g=f.data;d=d+(-1)|0;g[d]=c;while(c.o6!==null){c=c.o6;d=d+(-1)|0;g[d]=c;}b=new Vr;b.pe=f;b.Gg=g.length;return b;}
function Vb(){var a=this;C1.call(a);a.mB=null;a.hU=null;a.p_=0;a.rf=0;a.A_=0.0;}
function AMu(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fe()){var $T=C3();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.p_+c)/a.rf;d=i*i;j=a.mB.d;k=a.mB.j;l=a.mB.e;m=a.hU.cd;n=a.hU.d-a.hU.cd;o=c;n=m+n*o;m=a.hU.b0+(a.hU.j-a.hU.b0)*o+a.A_;o=a.hU.ce+(a.hU.e-a.hU.ce)*o;n=n-j;p=d;q=j+n
*p;r=k+(m-k)*p;p=l+(o-l)*p;s=K(q);t=K(r+a.c4/2.0);u=K(p);b=a.m;$p=1;case 1:$z=ANu(b,s,t,u);if(C()){break _;}v=$z;o=q-BkZ;n=r-Bk0;m=p-Bk1;BW(v,v,v,1.0);b=BgB;w=a.mB;o=o;n=n;m=m;d=a.mB.v;$p=2;case 2:AQS(b,w,o,n,m,d,c);if(C()){break _;}return;default:E_();}}C3().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function AAW(a){a.p_=a.p_+1|0;if(a.p_==a.rf)Cd(a);}
function AUM(a){return 2;}
function Zf(){var a=this;D.call(a);a.dZ=null;a.eX=0;}
function Bcl(){var a=new Zf();A0r(a);return a;}
function A0r(a){a.dZ=J(HR,1024);a.eX=0;}
function WZ(a,b){var c,d;if(b.gG>=0){b=new D2;Bj(b,B(899));M(b);}if(a.eX==a.dZ.data.length){c=J(HR,a.eX<<1);Dj(a.dZ,0,c,0,a.eX);a.dZ=c;}a.dZ.data[a.eX]=b;b.gG=a.eX;d=a.eX;a.eX=d+1|0;U_(a,d);return b;}
function UK(a){a.eX=0;}
function ARQ(a){var b,c,d,e;b=a.dZ.data[0];c=a.dZ.data;d=a.dZ.data;e=a.eX-1|0;a.eX=e;c[0]=d[e];a.dZ.data[a.eX]=null;if(a.eX>0)OZ(a,0);b.gG=(-1);return b;}
function ABA(a,b,c){var d;d=b.i7;b.i7=c;if(c>=d)OZ(a,b.gG);else U_(a,b.gG);}
function U_(a,b){var c,d,e,f;c=a.dZ.data[b];d=c.i7;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.dZ.data[e];if(d>=f.i7)break;a.dZ.data[b]=f;f.gG=b;b=e;}}a.dZ.data[b]=c;c.gG=b;}
function OZ(a,b){var c,d,e,f,g,h,i,j;c=a.dZ.data[b];d=c.i7;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.eX)break;g=a.dZ.data[e];h=g.i7;if(f>=a.eX){i=null;j=Infinity;}else{i=a.dZ.data[f];j=i.i7;}if(h<j){if(h>=d)break a;a.dZ.data[b]=g;g.gG=b;}else{if(j>=d)break a;a.dZ.data[b]=i;i.gG=b;e=f;}b=e;}}a.dZ.data[b]=c;c.gG=b;}
function ACl(a){return a.eX?0:1;}
function HR(){var a=this;D.call(a);a.ig=0;a.h0=0;a.is=0;a.m2=0;a.gG=0;a.mF=0.0;a.pk=0.0;a.i7=0.0;a.o6=null;a.nC=0;}
function A0Q(a,b,c){var d=new HR();A8Y(d,a,b,c);return d;}
function A8Y(a,b,c,d){a.gG=(-1);a.nC=0;a.ig=b;a.h0=c;a.is=d;a.m2=b|c<<10|d<<20;}
function E1(a,b){var c,d,e;c=b.ig-a.ig|0;d=b.h0-a.h0|0;e=b.is-a.is|0;return En(c*c+d*d+e*e);}
function A36(a,b){return b.m2!=a.m2?0:1;}
function AVC(a){return a.m2;}
function PG(a){return a.gG<0?0:1;}
function AJw(){D.call(this);}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",4,"regex",3,"nio",6,"charset",3,"io",3,"lang",-1,"net",10,"minecraft",11,"src"]);
$rt_metadata([D,"Object",9,0,[],0,3,0,["fl",function(){return A5c(this);},"eo",function(b){return Rc(this,b);},"gs",function(){return AUD(this);}],JC,0,D,[],0,3,0,0,M9,0,D,[],3,3,0,0,FP,0,D,[M9],0,3,0,0,AKi,0,D,[],4,0,0,0,Uc,0,D,[],4,3,0,0,Dc,0,D,[],3,3,0,0,DM,0,D,[],3,3,0,0,Lf,0,D,[],3,3,0,0,B4,"String",9,D,[Dc,DM,Lf],0,3,0,["gs",function(){return AUz(this);},"eo",function(b){return DB(this,b);},"fl",function(){return A8A(this);},"lR",function(b){return AWg(this,b);}],D8,0,D,[],0,3,0,["lS",function(){return A0B(this);
}],Fh,0,D8,[],0,3,0,0,I2,0,Fh,[],0,3,0,0,AMp,0,I2,[],0,3,0,0,HL,0,D,[Dc,Lf],0,0,0,["nE",function(b){Nd(this,b);},"gs",function(){return U(this);}],It,0,D,[],3,3,0,0,T,0,HL,[It],0,3,0,["x8",function(b,c,d,e){return A7a(this,b,c,d,e);},"xy",function(b,c,d){return AVF(this,b,c,d);},"gs",function(){return BD(this);},"nE",function(b){AX2(this,b);},"yz",function(b,c){return A7B(this,b,c);}],Fb,0,D,[Dc],1,3,0,0,Gh,0,Fb,[DM],0,3,0,["fl",function(){return A3l(this);},"eo",function(b){return A_C(this,b);},"lR",function(b)
{return A7e(this,b);}],IP,0,I2,[],0,3,0,0,AO6,0,IP,[],0,3,0,0,ALS,0,IP,[],0,3,0,0,BF,0,D8,[],0,3,0,0,B8,"RuntimeException",9,BF,[],0,3,0,0,Da,0,D,[],3,3,0,0,Hf,0,D,[Da],3,3,0,0,Ux,0,D,[Hf],3,3,0,0,QA,0,D,[Hf],3,3,0,0,Vm,0,D,[Hf],3,3,0,0,Rs,0,D,[Hf],3,3,0,0,Wr,0,D,[Hf,Ux,QA,Vm,Rs],3,3,0,0,PH,0,D,[],3,3,0,0,LF,0,D,[Da],3,3,0,0,YU,0,D,[Da,Wr,PH,LF],1,3,0,["Yk",function(b,c){return AYl(this,b,c);},"a0n",function(b,c){return AYz(this,b,c);},"So",function(b){return ATX(this,b);},"Oo",function(b,c,d){return AZq(this,
b,c,d);},"ME",function(b){return A1V(this,b);},"Vf",function(){return AUV(this);},"TE",function(b,c,d){return ATe(this,b,c,d);}],Bq,0,D,[],0,3,Bb,0,S3,0,D,[],3,3,0,0,JF,0,D,[S3],3,3,0,0,N_,0,D,[],3,3,0,0,HA,0,D,[It,JF,N_],1,3,0,0,ABt,0,HA,[],0,3,0,0,LN,0,HA,[],0,3,0,0,AFr,0,D,[],4,3,0,0,AF6,0,D,[Da],1,3,0,0,Mh,0,D,[],3,3,0,0,In,0,D,[Mh],0,3,0,0,ZS,0,D,[],0,3,0,0,MB,0,D,[],0,3,Bbw,0,Gn,0,D,[Mh],0,3,0,["kw",function(){ARC(this);}],DO,0,D,[Da],3,3,0,0,Xe,0,D,[DO],0,0,0,["gU",function(b){return A$$(this,b);}]]);
$rt_metadata([Xk,0,D,[DO],0,0,0,["gU",function(b){return AXX(this,b);}],Xl,0,D,[DO],0,0,0,["gU",function(b){return A3Q(this,b);}],Xi,0,D,[DO],0,0,0,["gU",function(b){return AS2(this,b);}],Xj,0,D,[DO],0,0,0,["gU",function(b){return A31(this,b);}],Xg,0,D,[DO],0,0,0,["gU",function(b){return A2A(this,b);}],Xh,0,D,[DO],0,0,0,["gU",function(b){return A6M(this,b);}],Xf,0,D,[DO],0,0,0,["gU",function(b){return AUx(this,b);}],QI,0,D,[DO],0,0,0,["gU",function(b){return A7m(this,b);}],QH,0,D,[DO],0,0,0,["gU",function(b)
{return AY0(this,b);}],N8,0,D,[],0,3,0,0,AA7,0,D,[Da],1,3,0,0,U4,0,D,[],0,3,0,0,B2,"IOException",8,BF,[],0,3,0,0,LB,0,HL,[It],0,3,0,["x8",function(b,c,d,e){return AWd(this,b,c,d,e);},"xy",function(b,c,d){return A4s(this,b,c,d);},"nE",function(b){A4J(this,b);},"yz",function(b,c){return A$l(this,b,c);}],Fz,0,D,[],3,3,0,0,V9,0,D,[Fz],0,3,0,0,Fj,0,D,[DM],0,3,0,["eo",function(b){return A_c(this,b);},"fl",function(){return A$W(this);},"lR",function(b){return A3p(this,b);}],IY,0,D,[],0,3,0,0,U0,0,IY,[],0,3,0,0,SK,
0,D,[],0,3,0,0,VP,0,D,[],3,3,0,0,R_,0,D,[VP],0,3,0,0,AF4,0,D,[],0,3,0,0,Eh,0,D,[],1,3,0,0,MP,0,Eh,[],0,3,0,["hK",function(b,c,d,e,f,g){A$y(this,b,c,d,e,f,g);},"on",function(b,c,d,e,f,g){AI7(this,b,c,d,e,f,g);}],Eu,0,D,[],0,3,0,0,AA5,0,Eu,[],0,3,0,["pb",function(){AYT(this);}],AKQ,0,Eu,[],0,3,0,["pb",function(){AY9(this);}],Mm,0,D,[],4,3,0,0,V5,0,Gn,[],0,0,0,["kw",function(){AKc(this);}],St,0,D,[],3,3,0,0,Ik,0,D,[St],3,3,0,0,Gl,0,D,[Ik],1,3,0,["rC",function(b){return Ma(this,b);}],Kb,0,D,[Ik],3,3,0,0,Gd,0,Gl,
[Kb],1,3,0,["kZ",function(){return Jn(this);}],MJ,0,Gd,[],1,3,0,0,OP,0,D,[Ik],3,3,0,0,Xs,0,D,[OP],3,3,0,0,AES,0,MJ,[Xs],0,3,0,0,AOl,0,D,[Da],1,3,0,0,F7,0,D,[Da],1,3,0,0,ABR,0,F7,[],1,3,0,0,AKU,0,F7,[],1,3,0,0,Jd,0,D,[Ik],3,3,0,0,Fc,0,Gl,[Jd],1,3,0,["eo",function(b){return A6a(this,b);},"fl",function(){return ATh(this);}],EU,0,D,[],3,3,0,0,AQy,0,Fc,[EU,Dc],0,3,0,["sX",function(b){return Xq(this,b);},"rC",function(b){return WK(this,b);},"kZ",function(){return OI(this);},"lY",function(){return IM(this);}],Mb,0,
D,[],3,3,0,0,FV,0,D,[Mb],1,3,0,0,ACn,0,FV,[EU,Dc],0,3,0,0]);
$rt_metadata([AKr,0,F7,[],1,3,0,0,Y5,0,D,[],0,3,0,0,AFf,0,D,[],0,3,0,0,EY,"Enum",9,D,[DM,Dc],1,3,0,["eo",function(b){return ATK(this,b);},"fl",function(){return AYi(this);},"lR",function(b){return AXR(this,b);}],E9,0,EY,[],12,3,0,0,QB,0,D,[],3,3,0,0,Vh,0,D,[QB],0,0,0,["GF",function(b){CM(this,b);},"I6",function(b){A2n(this,b);}],AQU,0,D,[Da],1,3,0,0,Xy,0,D,[Da],3,3,0,0,Xd,0,D,[Xy],0,0,0,["a04",function(){return A2f(this);}],HZ,0,D,[JF],1,3,0,0,AQt,0,HZ,[],0,3,0,["CL",function(){return A4W(this);},"of",function(b,
c,d){return A_y(this,b,c,d);},"w$",function(){return A5H(this);}],IS,0,HZ,[],0,3,0,0,Pv,0,D,[],3,3,0,0,P$,0,IS,[Pv],0,3,0,0,M_,0,D,[DM],1,3,0,["lR",function(b){return A6L(this,b);}],WY,0,IS,[],0,3,0,["CL",function(){return ATf(this);},"of",function(b,c,d){return AL$(this,b,c,d);},"w$",function(){return A0D(this);}],No,0,D,[],1,3,0,0,ADG,0,No,[],0,3,0,0,AJp,0,D,[],0,3,0,0,Ja,0,D,[],0,3,0,["AG",function(b,c,d){return A5s(this,b,c,d);}],U7,0,Ja,[],0,0,0,["AG",function(b,c,d){return A2d(this,b,c,d);}],C5,"Entity",
12,D,[],1,3,0,["Dl",function(){Cd(this);},"Jm",function(){AE8(this);},"D8",function(){X$(this);},"BM",function(){return A13(this);},"Ga",function(b){AKh(this,b);},"DW",function(b){Zw(this,b);},"HY",function(){return AFk(this);},"vu",function(b){return ADV(this,b);},"xU",function(b){A68(this,b);},"u9",function(b){A5S(this,b);},"ft",function(b,c){return AJV(this,b,c);},"lw",function(){return A9Z(this);},"rV",function(){return A7_(this);},"BT",function(b,c){A_x(this,b,c);},"uS",function(b){return AW0(this,b);},
"Bd",function(b){return AXf(this,b);},"B2",function(){AFs(this);},"Av",function(){return A93(this);}],EQ,"EntityLiving",12,C5,[],0,3,0,["lw",function(){return AXK(this);},"rV",function(){return A17(this);},"rM",function(){return AQE(this);},"Jm",function(){ANC(this);},"B2",function(){AK7(this);},"ep",function(){AMF(this);},"ft",function(b,c){return ACc(this,b,c);},"wO",function(){return A8H(this);},"vm",function(){return AUQ(this);},"uV",function(){return AVL(this);},"FP",function(b){AOe(this,b);},"ml",function()
{return ATU(this);},"DW",function(b){AQk(this,b);},"ow",function(){ACA(this);},"wY",function(){AQ3(this);},"u1",function(b,c,d){return ZG(this,b,c,d);},"D8",function(){ABU(this);}],IU,"EntityCreature",12,EQ,[],0,3,0,["wY",function(){AP0(this);},"nU",function(b,c){AMO(this,b,c);},"yf",function(){return ALb(this);}],DP,"EntityMonster",12,IU,[],0,3,0,["ow",function(){ADl(this);},"ep",function(){ALk(this);},"yf",function(){return AKD(this);},"ft",function(b,c){return AAV(this,b,c);},"nU",function(b,c){AQ_(this,
b,c);},"sH",function(b,c,d){return ABJ(this,b,c,d);},"u1",function(b,c,d){return YJ(this,b,c,d);}],I7,"EntityZombie",12,DP,[],0,3,0,["ow",function(){AIf(this);},"ml",function(){return AW2(this);}],Jq,"EntitySkeleton",12,DP,[],0,3,0,["ow",function(){AIR(this);},"nU",function(b,c){AH$(this,b,c);},"ml",function(){return AY5(this);}],J5,"EntityCreeper",12,DP,[],0,3,0,["wY",function(){Z2(this);},"nU",function(b,c){AAX(this,b,c);},"ml",function(){return AS_(this);}],Ky,"EntitySpider",12,DP,[],0,3,0,["yf",function()
{return ARG(this);},"nU",function(b,c){Zz(this,b,c);},"ml",function(){return AZ4(this);}],Gz,"EntityAnimal",12,IU,[],1,3,0,["sH",function(b,c,d){return AOM(this,b,c,d);},"u1",function(b,c,d){return ALh(this,b,c,d);}],KW,"EntitySheep",12,Gz,[],0,3,0,["ft",function(b,c){return AG$(this,b,c);},"wO",function(){return A7g(this);},"vm",function(){return A4w(this);},"uV",function(){return AYD(this);}],IB,"EntityPig",12,Gz,[],0,3,0,["wO",function(){return ATQ(this);},"vm",function(){return A9J(this);},"uV",function()
{return AWl(this);},"uS",function(b){return AX$(this,b);},"ml",function(){return AWv(this);}],DA,0,D,[Dc],0,3,0,0,NS,0,D,[],0,3,0,0,Pk,0,D,[],0,3,0,0,P,"Block",12,D,[],0,3,L,["gq",function(){return A9f(this);},"em",function(){return AWV(this);},"CP",function(b,c,d,e){return AFp(this,b,c,d,e);},"pJ",function(b,c,d,e,f){return AGK(this,b,c,d,e,f);},"ur",function(b,c,d,e,f){return AB_(this,b,c,d,e,f);},"eY",function(b,c){return A7v(this,b,c);},"ck",function(b){return AVV(this,b);},"oW",function(b,c,d,e){return Lo(this,
b,c,d,e);},"FS",function(b,c,d,e,f,g){ALL(this,b,c,d,e,f,g);},"hv",function(b,c,d,e){return NC(this,b,c,d,e);},"d2",function(){return A5z(this);},"o9",function(b,c){return A6I(this,b,c);},"pi",function(){return A33(this);},"e8",function(b,c,d,e,f){AH6(this,b,c,d,e,f);},"kT",function(b,c,d,e,f){APq(this,b,c,d,e,f);},"nv",function(b,c,d,e,f){AAj(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){YZ(this,b,c,d,e,f);},"mx",function(){return A4b(this);},"fE",function(b,c,d,e){ABi(this,b,c,d,e);},"lB",function(b,c,d,e){AAe(this,
b,c,d,e);},"eH",function(b){return AYG(this,b);},"dT",function(b,c){return AT7(this,b,c);},"IX",function(b,c,d,e,f){Yr(this,b,c,d,e,f);},"H5",function(b,c,d,e,f,g){AFc(this,b,c,d,e,f,g);},"yF",function(b){return A0h(this,b);},"nM",function(b,c,d,e,f,g){return Kl(this,b,c,d,e,f,g);},"sR",function(b,c,d,e){ARd(this,b,c,d,e);},"pT",function(){return AVB(this);},"fX",function(b,c,d,e){return AET(this,b,c,d,e);},"lH",function(b,c,d,e,f){return AGY(this,b,c,d,e,f);},"oN",function(b,c,d,e,f){AJY(this,b,c,d,e,f);},
"vn",function(b,c,d,e,f){YR(this,b,c,d,e,f);},"ra",function(b,c,d,e,f){AAq(this,b,c,d,e,f);},"qH",function(b,c,d,e,f,g){AGl(this,b,c,d,e,f,g);},"x1",function(b,c,d,e){AP$(this,b,c,d,e);}],RL,0,D,[],3,3,0,0,AJt,0,Gd,[EU,Dc,RL],0,3,0,["lY",function(){return Df(this);},"sX",function(b){return S(this,b);}],DG,0,D,[Da],3,3,0,0,TR,0,D,[DG],0,0,0,["gC",function(){return AWE(this);}],TQ,0,D,[DG],0,0,0,["gC",function(){return ATk(this);}],TP,0,D,[DG],0,0,0,["gC",function(){return AZD(this);}],TO,0,D,[DO],0,0,0,["gU",
function(b){return A6Y(this,b);}],SI,0,D,[],0,0,0,0,Ca,"IllegalArgumentException",9,B8,[],0,3,0,0,Vo,"UnsupportedCharsetException",7,Ca,[],0,3,0,0,EE,"NullPointerException",9,B8,[],0,3,0,0,ABj,0,D,[Da],4,3,0,0,Fk,0,D,[],1,3,0,0]);
$rt_metadata([Mp,0,Fk,[DM],1,3,0,0,AFi,0,D,[],0,3,0,0,QS,0,D,[],0,3,0,0,E4,0,D,[JF,N_],1,3,0,["gB",function(b,c,d){ATx(this,b,c,d);},"tV",function(){A8_(this);},"ly",function(){A9Y(this);}],Gb,0,E4,[],0,3,0,0,ABf,0,Gb,[],0,3,0,0,Xm,0,E4,[],0,0,0,["nR",function(b){AYy(this,b);}],AFq,"IllegalCharsetNameException",7,Ca,[],0,3,0,0,M$,0,D,[],128,3,0,0,Ur,0,M$,[],4,3,0,0,Ip,0,D,[],0,3,0,0,AHE,0,Ip,[],4,0,0,0,ACC,0,Ip,[],4,0,0,0,L8,"BlockStone",12,P,[],0,3,0,["dT",function(b,c){return A8X(this,b,c);}],AAg,"BlockGrass",
12,P,[],0,3,0,["ck",function(b){return A7G(this,b);},"e8",function(b,c,d,e,f){ADD(this,b,c,d,e,f);},"dT",function(b,c){return A0o(this,b,c);}],AH9,"BlockDirt",12,P,[],0,3,0,0,B_,0,D,[],0,3,0,["nI",function(){return A8B(this);},"dt",function(){return A1e(this);},"sn",function(){return A76(this);},"uo",function(){return A5I(this);}],F0,"BlockFlower",12,P,[],0,3,0,["fX",function(b,c,d,e){return AL7(this,b,c,d,e);},"rr",function(b){return AYC(this,b);},"e1",function(b,c,d,e,f){AIU(this,b,c,d,e,f);},"e8",function(b,
c,d,e,f){AEm(this,b,c,d,e,f);},"Hp",function(b,c,d,e){return AOh(this,b,c,d,e);},"hv",function(b,c,d,e){return AGB(this,b,c,d,e);},"d2",function(){return A6B(this);},"gq",function(){return AUf(this);},"em",function(){return A7L(this);}],AM$,"BlockSapling",12,F0,[],0,3,0,["e8",function(b,c,d,e,f){AEv(this,b,c,d,e,f);}],HQ,0,P,[],1,3,0,["ck",function(b){return ATr(this,b);},"gq",function(){return A_n(this);},"d2",function(){return A$H(this);},"o9",function(b,c){return A8U(this,b,c);},"pJ",function(b,c,d,e,f){
return ARM(this,b,c,d,e,f);},"hv",function(b,c,d,e){return Yp(this,b,c,d,e);},"em",function(){return A8c(this);},"dT",function(b,c){return A3u(this,b,c);},"eH",function(b){return A6p(this,b);},"qH",function(b,c,d,e,f,g){ANp(this,b,c,d,e,f,g);},"mx",function(){return AVj(this);},"CP",function(b,c,d,e){return AEJ(this,b,c,d,e);},"e8",function(b,c,d,e,f){ARn(this,b,c,d,e,f);},"pT",function(){return A$E(this);},"kT",function(b,c,d,e,f){YP(this,b,c,d,e,f);},"fE",function(b,c,d,e){AR6(this,b,c,d,e);},"e1",function(b,
c,d,e,f){ALt(this,b,c,d,e,f);}],AEu,"BlockFlowing",12,HQ,[],0,3,0,["e8",function(b,c,d,e,f){AO3(this,b,c,d,e,f);},"fE",function(b,c,d,e){ACd(this,b,c,d,e);}],AIZ,"BlockStationary",12,HQ,[],0,3,0,["e1",function(b,c,d,e,f){AGN(this,b,c,d,e,f);}],I8,"BlockSand",12,P,[],0,3,0,["fE",function(b,c,d,e){AR4(this,b,c,d,e);},"e1",function(b,c,d,e,f){ASu(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){APN(this,b,c,d,e,f);},"mx",function(){return A4a(this);}],AHi,"BlockGravel",12,I8,[],0,3,0,["dT",function(b,c){return A_A(this,
b,c);}],Y7,"BlockOre",12,P,[],0,3,0,["dT",function(b,c){return A4D(this,b,c);},"eH",function(b){return A0n(this,b);}],AFw,"BlockLog",12,P,[],0,3,0,["eH",function(b){return A9a(this,b);},"dT",function(b,c){return ATv(this,b,c);},"ck",function(b){return AVP(this,b);}],Me,0,P,[],0,3,0,["pJ",function(b,c,d,e,f){return AQK(this,b,c,d,e,f);}],ACR,"BlockLeaves",12,Me,[],0,3,0,["e8",function(b,c,d,e,f){AIN(this,b,c,d,e,f);},"eH",function(b){return AXk(this,b);},"dT",function(b,c){return A5t(this,b,c);},"d2",function()
{return A26(this);},"oN",function(b,c,d,e,f){ASI(this,b,c,d,e,f);}],ALs,"BlockSponge",12,P,[],0,3,0,["fE",function(b,c,d,e){AKY(this,b,c,d,e);},"lB",function(b,c,d,e){ANH(this,b,c,d,e);}],Ns,0,P,[],0,3,0,["d2",function(){return A$q(this);},"pJ",function(b,c,d,e,f){return YH(this,b,c,d,e,f);}],AQB,"BlockGlass",12,Ns,[],0,3,0,["eH",function(b){return AWm(this,b);}],AHs,"BlockMushroom",12,F0,[],0,3,0,["rr",function(b){return AJj(this,b);},"Hp",function(b,c,d,e){return ADx(this,b,c,d,e);}],ABG,"BlockOreBlock",12,
P,[],0,3,0,["ck",function(b){return A4Q(this,b);}],Zt,"BlockStep",12,P,[],0,3,0,["ck",function(b){return A$Z(this,b);},"d2",function(){return A57(this);},"e1",function(b,c,d,e,f){ABP(this,b,c,d,e,f);},"fE",function(b,c,d,e){ABv(this,b,c,d,e);},"dT",function(b,c){return AZE(this,b,c);},"gq",function(){return AXm(this);},"pJ",function(b,c,d,e,f){return ASU(this,b,c,d,e,f);}],AOs,"BlockTNT",12,P,[],0,3,0,["ck",function(b){return A5h(this,b);},"eH",function(b){return AVr(this,b);},"sR",function(b,c,d,e){AGT(this,
b,c,d,e);},"nv",function(b,c,d,e,f){ASC(this,b,c,d,e,f);}],ADn,"BlockBookshelf",12,P,[],0,3,0,["ck",function(b){return A_o(this,b);},"eH",function(b){return A4S(this,b);}],XW,"BlockObsidian",12,L8,[],0,3,0,["eH",function(b){return A3n(this,b);},"dT",function(b,c){return AVb(this,b,c);}],AOP,"BlockTorch",12,P,[],0,3,0,["hv",function(b,c,d,e){return ANx(this,b,c,d,e);},"d2",function(){return A2t(this);},"gq",function(){return AWr(this);},"em",function(){return A1c(this);},"fX",function(b,c,d,e){return AMi(this,
b,c,d,e);},"vn",function(b,c,d,e,f){AN0(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){ASs(this,b,c,d,e,f);},"fE",function(b,c,d,e){ABF(this,b,c,d,e);},"e1",function(b,c,d,e,f){AKp(this,b,c,d,e,f);},"nM",function(b,c,d,e,f,g){return AKw(this,b,c,d,e,f,g);},"kT",function(b,c,d,e,f){AQD(this,b,c,d,e,f);}],APd,"BlockFire",12,P,[],0,3,0,["hv",function(b,c,d,e){return ARS(this,b,c,d,e);},"d2",function(){return A6c(this);},"gq",function(){return A8L(this);},"em",function(){return AXN(this);},"eH",function(b){return AWW(this,
b);},"mx",function(){return A0j(this);},"e8",function(b,c,d,e,f){XV(this,b,c,d,e,f);},"pi",function(){return A3B(this);},"fX",function(b,c,d,e){return ANE(this,b,c,d,e);},"e1",function(b,c,d,e,f){ABL(this,b,c,d,e,f);},"fE",function(b,c,d,e){ACD(this,b,c,d,e);},"kT",function(b,c,d,e,f){ASJ(this,b,c,d,e,f);}],Eg,0,P,[],1,3,0,["fE",function(b,c,d,e){AOS(this,b,c,d,e);},"lB",function(b,c,d,e){AL_(this,b,c,d,e);}],AAo,"BlockMobSpawner",12,Eg,[],0,3,0,["tg",function(){return AXz(this);},"d2",function(){return A6h(this);
}],ZL,"BlockStairs",12,P,[],0,3,0,["d2",function(){return A5W(this);},"gq",function(){return AWk(this);},"em",function(){return AZc(this);},"pJ",function(b,c,d,e,f){return APO(this,b,c,d,e,f);},"FS",function(b,c,d,e,f,g){AJO(this,b,c,d,e,f,g);},"e1",function(b,c,d,e,f){AHR(this,b,c,d,e,f);},"kT",function(b,c,d,e,f){APr(this,b,c,d,e,f);},"ra",function(b,c,d,e,f){ABp(this,b,c,d,e,f);},"nv",function(b,c,d,e,f){ADC(this,b,c,d,e,f);},"CP",function(b,c,d,e){return AM9(this,b,c,d,e);},"yF",function(b){return A9b(this,
b);},"pT",function(){return A8p(this);},"dT",function(b,c){return A4u(this,b,c);},"eH",function(b){return A0N(this,b);},"eY",function(b,c){return AXO(this,b,c);},"ck",function(b){return A8j(this,b);},"ur",function(b,c,d,e,f){return ANi(this,b,c,d,e,f);},"mx",function(){return AVZ(this);},"oW",function(b,c,d,e){return AMt(this,b,c,d,e);},"qH",function(b,c,d,e,f,g){ACW(this,b,c,d,e,f,g);},"pi",function(){return AYU(this);},"o9",function(b,c){return AY7(this,b,c);},"fX",function(b,c,d,e){return AMB(this,b,c,d,
e);},"fE",function(b,c,d,e){ACQ(this,b,c,d,e);},"lB",function(b,c,d,e){YL(this,b,c,d,e);},"H5",function(b,c,d,e,f,g){AH5(this,b,c,d,e,f,g);},"IX",function(b,c,d,e,f){ANa(this,b,c,d,e,f);},"oN",function(b,c,d,e,f){AQ7(this,b,c,d,e,f);},"e8",function(b,c,d,e,f){ARa(this,b,c,d,e,f);},"lH",function(b,c,d,e,f){return AGZ(this,b,c,d,e,f);},"sR",function(b,c,d,e){Zm(this,b,c,d,e);}],AF7,"BlockChest",12,Eg,[],0,3,0,["ur",function(b,c,d,e,f){return AEM(this,b,c,d,e,f);},"ck",function(b){return A9m(this,b);},"fX",function(b,
c,d,e){return AKf(this,b,c,d,e);},"lB",function(b,c,d,e){ASW(this,b,c,d,e);},"lH",function(b,c,d,e,f){return AGc(this,b,c,d,e,f);},"tg",function(){return AZV(this);}],AKX,"BlockGears",12,P,[],0,3,0,["hv",function(b,c,d,e){return AE9(this,b,c,d,e);},"d2",function(){return AUc(this);},"gq",function(){return A5v(this);},"em",function(){return A7J(this);},"eH",function(b){return A95(this,b);},"pi",function(){return AUT(this);}],AHL,"BlockWorkbench",12,P,[],0,3,0,["ck",function(b){return AWM(this,b);},"lH",function(b,
c,d,e,f){return AG6(this,b,c,d,e,f);}],AKW,"BlockCrops",12,F0,[],0,3,0,["rr",function(b){return AYY(this,b);},"e8",function(b,c,d,e,f){AJB(this,b,c,d,e,f);},"eY",function(b,c){return A8J(this,b,c);},"em",function(){return A4V(this);},"nv",function(b,c,d,e,f){ANM(this,b,c,d,e,f);},"dT",function(b,c){return A1f(this,b,c);},"eH",function(b){return A5a(this,b);}],AQ4,"BlockFarmland",12,P,[],0,3,0,["hv",function(b,c,d,e){return ABe(this,b,c,d,e);},"d2",function(){return AVi(this);},"gq",function(){return A1T(this);
},"eY",function(b,c){return A_z(this,b,c);},"e8",function(b,c,d,e,f){ANq(this,b,c,d,e,f);},"oN",function(b,c,d,e,f){AK3(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){Yh(this,b,c,d,e,f);},"dT",function(b,c){return AXh(this,b,c);}],AGh,"BlockFurnace",12,Eg,[],0,3,0,["fE",function(b,c,d,e){ACF(this,b,c,d,e);},"ur",function(b,c,d,e,f){return AKt(this,b,c,d,e,f);},"kT",function(b,c,d,e,f){AEA(this,b,c,d,e,f);},"ck",function(b){return AVd(this,b);},"lH",function(b,c,d,e,f){return AG9(this,b,c,d,e,f);},"tg",function()
{return A8k(this);}],VB,"BlockSign",12,Eg,[],0,3,0,["em",function(){return AY3(this);},"gq",function(){return A6o(this);},"d2",function(){return A6i(this);},"tg",function(){return A14(this);},"fX",function(b,c,d,e){return AG2(this,b,c,d,e);},"dT",function(b,c){return A8S(this,b,c);},"e1",function(b,c,d,e,f){Z6(this,b,c,d,e,f);}],D$,"TileEntity",12,D,[],0,3,0,["tS",function(){AFZ(this);},"km",function(){ACq(this);}]]);
$rt_metadata([Jj,0,D$,[],0,3,0,0,Bd,0,D,[],0,3,BB,["iQ",function(b,c,d,e,f,g,h){return AGI(this,b,c,d,e,f,g,h);},"yi",function(b,c){return A$0(this,b,c);},"ob",function(b,c,d){return ASA(this,b,c,d);},"sj",function(b,c){AWq(this,b,c);},"yc",function(b,c,d,e,f){A5n(this,b,c,d,e,f);},"n4",function(b){return A_G(this,b);},"o$",function(b){return AWh(this,b);},"y0",function(b,c){A3Y(this,b,c);}],AIM,"BlockDoor",12,P,[],0,3,0,["eY",function(b,c){return A$G(this,b,c);},"d2",function(){return A0$(this);},"gq",function()
{return AXI(this);},"em",function(){return AT4(this);},"oW",function(b,c,d,e){return AGG(this,b,c,d,e);},"hv",function(b,c,d,e){return ZN(this,b,c,d,e);},"x1",function(b,c,d,e){AHT(this,b,c,d,e);},"ra",function(b,c,d,e,f){AJ_(this,b,c,d,e,f);},"lH",function(b,c,d,e,f){return AD7(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){ACJ(this,b,c,d,e,f);},"dT",function(b,c){return A8R(this,b,c);},"nM",function(b,c,d,e,f,g){return XO(this,b,c,d,e,f,g);},"fX",function(b,c,d,e){return AKe(this,b,c,d,e);}],ADe,"BlockLadder",
12,P,[],0,3,0,["hv",function(b,c,d,e){return ADt(this,b,c,d,e);},"oW",function(b,c,d,e){return AEi(this,b,c,d,e);},"d2",function(){return AXb(this);},"gq",function(){return A5_(this);},"em",function(){return A9O(this);},"fX",function(b,c,d,e){return AN6(this,b,c,d,e);},"vn",function(b,c,d,e,f){Yy(this,b,c,d,e,f);},"e1",function(b,c,d,e,f){AK0(this,b,c,d,e,f);},"eH",function(b){return A5J(this,b);}],AN9,"BlockMinecartTrack",12,P,[],0,3,0,["hv",function(b,c,d,e){return ACP(this,b,c,d,e);},"d2",function(){return AWO(this);
},"nM",function(b,c,d,e,f,g){return ALQ(this,b,c,d,e,f,g);},"x1",function(b,c,d,e){AMy(this,b,c,d,e);},"eY",function(b,c){return A2S(this,b,c);},"gq",function(){return A3R(this);},"em",function(){return A0P(this);},"eH",function(b){return A2Y(this,b);},"fX",function(b,c,d,e){return AN8(this,b,c,d,e);},"fE",function(b,c,d,e){ANS(this,b,c,d,e);},"e1",function(b,c,d,e,f){AJ3(this,b,c,d,e,f);}],ASS,0,Bd,[],0,3,0,["iQ",function(b,c,d,e,f,g,h){return AQC(this,b,c,d,e,f,g,h);}],AHV,0,M_,[],0,3,0,0,Nl,0,Fk,[DM],1,3,
0,0,Ny,0,Mp,[],1,0,0,0,WW,0,Ny,[],0,0,0,0,ARB,0,Nl,[],0,0,0,0,VA,0,D,[],3,3,0,0,Mc,0,Fk,[DM,It,Lf,VA],1,3,0,0,Qc,"GZIPException",2,B2,[],0,3,0,0,Ow,0,B_,[],0,3,0,["dt",function(){return A4$(this);},"sn",function(){return A5O(this);},"uo",function(){return ATD(this);}],Mi,0,B_,[],0,3,0,["nI",function(){return A_U(this);},"dt",function(){return AZo(this);}],Oi,0,B_,[],0,3,0,["dt",function(){return A7b(this);},"sn",function(){return A$j(this);},"uo",function(){return AVk(this);}],F_,0,Bd,[],0,3,0,["yi",function(b,
c){return A8$(this,b,c);},"sj",function(b,c){A7k(this,b,c);},"yc",function(b,c,d,e,f){AWH(this,b,c,d,e,f);},"n4",function(b){return AXp(this,b);}],O7,0,F_,[],0,3,Bch,0,VE,0,F_,[],0,3,Bck,["o$",function(b){return A5B(this,b);}],WA,0,F_,[],0,3,BbW,0,AFe,0,Bd,[],0,3,0,["iQ",function(b,c,d,e,f,g,h){return AJX(this,b,c,d,e,f,g,h);}],L6,0,Bd,[],0,3,0,["ob",function(b,c,d){return Qg(this,b,c,d);}],AO8,0,Bd,[],0,3,0,["ob",function(b,c,d){return AGQ(this,b,c,d);}],ALo,0,Bd,[],0,3,0,["yi",function(b,c){return A0O(this,
b,c);},"sj",function(b,c){A79(this,b,c);},"yc",function(b,c,d,e,f){AYk(this,b,c,d,e,f);},"n4",function(b){return A2R(this,b);}],AOo,0,L6,[],0,3,0,["ob",function(b,c,d){return APJ(this,b,c,d);}],ANL,0,Bd,[],0,3,0,["iQ",function(b,c,d,e,f,g,h){return AQ8(this,b,c,d,e,f,g,h);}],V3,0,Bd,[],0,3,0,["iQ",function(b,c,d,e,f,g,h){return AFB(this,b,c,d,e,f,g,h);}],F2,0,Bd,[],0,3,0,0,X4,0,Bd,[],0,3,0,["iQ",function(b,c,d,e,f,g,h){return ACo(this,b,c,d,e,f,g,h);}],AHH,0,Bd,[],0,3,0,["iQ",function(b,c,d,e,f,g,h){return Yo(this,
b,c,d,e,f,g,h);}],AJq,0,Bd,[],0,3,0,["iQ",function(b,c,d,e,f,g,h){return AEn(this,b,c,d,e,f,g,h);}],AR2,0,Bd,[],0,3,0,["ob",function(b,c,d){return AIc(this,b,c,d);}],APl,0,Bd,[],0,3,0,["iQ",function(b,c,d,e,f,g,h){return ADk(this,b,c,d,e,f,g,h);}],ARt,0,Bd,[],0,3,0,["y0",function(b,c){AGO(this,b,c);},"sj",function(b,c){AWD(this,b,c);}],Oe,0,D,[],3,0,0,0,AGz,0,D,[Oe],4,3,0,["Fg",function(b){ATc(this,b);},"l2",function(){AZN(this);},"yR",function(){return AUi(this);},"kN",function(b,c,d){A8w(this,b,c,d);}],Sk,
"CloneNotSupportedException",9,BF,[],0,3,0,0,NG,0,D,[],4,3,0,0,J$,0,D,[],3,3,0,0,L3,0,D,[J$,EU],0,0,0,["eo",function(b){return A5f(this,b);},"fl",function(){return A2c(this);}],IE,0,L3,[],0,0,0,0,BQ,"IndexOutOfBoundsException",9,B8,[],0,3,0,0,IX,"StringIndexOutOfBoundsException",9,BQ,[],0,3,0,0,GF,0,D,[],3,3,0,0,WH,0,D,[GF],0,3,0,["kw",function(){AJg(this);}],FE,"EOFException",8,B2,[],0,3,0,0,ER,0,D,[],0,3,0,0,Fw,0,D,[],0,3,0,0,L1,0,D,[],4,0,0,0]);
$rt_metadata([PX,0,E4,[],0,0,0,["nR",function(b){A6m(this,b);}],Kv,0,D,[],0,3,0,0,AMA,0,D,[],4,3,0,0,Jh,0,D,[],0,3,0,0,LM,0,Mc,[],1,0,0,0,ABZ,0,LM,[],0,0,0,0,L9,0,D,[],1,3,0,0,Ok,0,D,[],0,3,0,0,AAk,0,D,[Da],1,3,0,0,PY,0,D,[Da],3,3,0,0,YN,0,D,[Da,PY],1,3,0,0,KS,0,D,[],4,0,0,0,NU,0,L9,[],1,3,0,0,PZ,0,NU,[],0,3,0,0,AOC,0,D,[],4,3,0,0,Ga,0,D,[],4,0,0,0,LT,0,D,[],4,0,0,0,Hu,"UTFDataFormatException",8,B2,[],0,3,0,0,XD,"NegativeArraySizeException",9,B8,[],0,3,0,0,AA$,0,D,[LF],1,3,0,["Q4",function(b){return A_O(this,
b);},"ZC",function(){return AUR(this);}],Kw,"IllegalMonitorStateException",9,B8,[],0,3,0,0,Z8,0,D,[],0,0,0,0,D2,"IllegalStateException",9,BF,[],0,3,0,0,AIO,0,D,[Da],1,3,0,0,SY,0,D,[GF],0,3,0,["kw",function(){ARl(this);}],Rj,0,D,[GF],0,3,0,0,GZ,0,B2,[],0,3,0,0,W$,"AssertionError",9,Fh,[],0,3,0,0,E2,0,BF,[],0,3,0,0,Ou,0,D,[],1,3,0,0,So,0,D,[],3,3,0,0,Sx,0,D,[],3,3,0,0,Pq,0,D,[GF,So,Sx],0,0,0,["kw",function(){APz(this);}],LY,0,Ou,[],1,3,0,0,Rq,0,LY,[],0,3,0,0,DY,"Inflate$Return",2,BF,[],0,0,0,0,ANJ,0,D,[EU],0,
3,0,0,O4,0,D,[Oe],4,3,0,["kN",function(b,c,d){A2Q(this,b,c,d);},"l2",function(){A6H(this);},"Fg",function(b){A98(this,b);},"yR",function(){return A7N(this);}],I$,0,D,[],0,3,0,0,Qr,0,D,[],3,3,0,0,Bs,0,Bq,[Qr],0,3,BJ,0,NT,0,D,[],0,3,0,0,ACO,0,D,[],0,3,0,0,G6,0,D,[],0,3,Ty,0,ASr,0,E4,[],0,3,0,["nR",function(b){A74(this,b);},"gB",function(b,c,d){RC(this,b,c,d);}],J0,"ArrayStoreException",9,B8,[],0,3,0,0,Oq,0,D,[],3,3,0,0,GI,0,D,[Oq],0,3,0,["eh",function(b,c,d){return ACH(this,b,c,d);},"oQ",function(b,c,d){return ACa(this,
b,c,d);},"eI",function(b,c,d){return AEX(this,b,c,d);},"sT",function(b,c,d){return ANu(this,b,c,d);},"lg",function(b,c,d){return AAP(this,b,c,d);}],Mj,0,D,[],0,3,BA,0,ANs,0,D,[],0,3,0,0]);
$rt_metadata([Ge,0,D,[],0,3,0,0,CT,0,Ge,[],0,3,0,["pc",function(b,c){YY(this,b,c);},"Ja",function(b,c,d){ZA(this,b,c,d);},"Cw",function(b,c,d){A2O(this,b,c,d);},"iH",function(b){AM5(this,b);},"hY",function(){AQj(this);},"rE",function(){A3w(this);},"pw",function(){AIl(this);},"oe",function(){return AVI(this);}],AFt,0,D,[],0,3,0,0,MC,0,D,[Dc],1,3,0,0,Es,0,MC,[Dc],0,3,0,0,Ol,0,D,[],3,3,0,0,I3,0,D,[Dc,Ol],1,3,0,0,Wp,0,D,[Ol],3,3,0,0,Ob,0,D,[Wp],3,3,0,0,R9,0,D,[],3,3,0,0,Mw,0,D,[R9],3,3,0,0,Va,0,I3,[Dc,Ob,Mw],0,
3,0,0,Wn,0,D,[Ob],3,3,0,0,R3,0,D,[Mw],3,3,0,0,G9,0,I3,[Dc,Wn,R3],0,3,0,0,S7,0,D,[GF],0,3,0,["kw",function(){AIQ(this);}],APa,"CoderMalfunctionError",7,Fh,[],0,3,0,0,H3,0,D,[],3,3,0,0,UA,0,D,[H3],3,3,0,0,ADa,0,D,[UA],0,0,0,0,RN,0,D,[],0,0,0,0,KY,0,D,[],0,3,0,0,Wo,0,D,[],0,3,0,0,Qu,0,D,[],0,3,0,0,AK$,0,Eu,[],0,3,0,["pb",function(){A0q(this);}],ACv,0,Eu,[],0,3,0,["pb",function(){A87(this);}],ASl,0,Eu,[],0,3,0,["pb",function(){A3K(this);}],XA,0,D,[],3,3,0,0,AAH,0,D,[XA],0,3,0,0,AHq,0,CT,[],0,3,0,["rE",function()
{A5F(this);},"pc",function(b,c){ANX(this,b,c);},"hY",function(){AIH(this);},"iH",function(b){ACB(this,b);},"hR",function(b,c,d){ZP(this,b,c,d);}],O$,0,D,[],0,3,0,0,NI,0,Ge,[],0,3,0,0,Jy,"EntityPlayer",12,EQ,[],0,3,0,["B2",function(){AGb(this);},"FP",function(b){ALr(this,b);},"BT",function(b,c){AZL(this,b,c);},"rM",function(){return UL(this);},"ft",function(b,c){return YA(this,b,c);}],AGR,"EntityPlayerSP",12,Jy,[],0,3,0,["wY",function(){AA1(this);},"ow",function(){ALA(this);}],AJU,0,D,[],0,3,0,0,Qx,0,D,[],0,
3,0,0,Vx,0,D,[],0,3,0,0,FC,0,D,[],3,3,0,0,VK,0,D,[FC],0,3,0,["j9",function(b,c){return El(this,b,c);},"jF",function(b,c){AFS(this,b,c);},"gD",function(b){return RY(this,b);},"f9",function(){return AZI(this);},"km",function(){AAB(this);}],Du,0,IY,[],0,3,0,0,Ew,0,CT,[],1,3,0,["hR",function(b,c,d){ACs(this,b,c,d);},"Ja",function(b,c,d){AOf(this,b,c,d);},"Cw",function(b,c,d){A9X(this,b,c,d);},"pc",function(b,c){AAJ(this,b,c);},"pw",function(){AA_(this);},"oe",function(){return A_f(this);}],AP1,0,Ew,[],0,3,0,["pw",
function(){ALW(this);},"tu",function(b){AT9(this,b);},"lu",function(){A0l(this);},"hR",function(b,c,d){AEa(this,b,c,d);},"s8",function(b){Yg(this,b);}],I6,0,D,[],0,3,0,0,RB,0,D,[],0,0,0,0,Tp,0,D,[],0,3,0,0,AHF,0,D,[],0,3,0,0,Cf,0,D,[],4,3,0,0,ZX,0,D,[FC],0,3,0,["gD",function(b){return Gg(this,b);},"j9",function(b,c){return AFa(this,b,c);},"jF",function(b,c){A3S(this,b,c);},"f9",function(){return A9d(this);},"km",function(){AD3(this);}],AAR,0,D,[FC],0,3,0,["gD",function(b){return A5k(this,b);},"j9",function(b,
c){return AWT(this,b,c);},"jF",function(b,c){Pt(this,b,c);},"f9",function(){return AZa(this);},"km",function(){ANv(this);}],HJ,0,D,[],0,3,0,["Jv",function(){ALm(this);},"ta",function(b){return AXx(this,b);},"r0",function(){return A96(this);}]]);
$rt_metadata([ADs,0,HJ,[],0,0,0,["ta",function(b){return A0C(this,b);},"Jv",function(){AOi(this);}],QT,0,HJ,[],0,0,0,["ta",function(b){return A28(this,b);},"r0",function(){return AWN(this);}],Wh,0,D,[],4,3,0,0,SH,0,D,[],4,3,0,0,Nj,0,Fk,[DM],1,3,0,0,Dh,0,D,[],1,3,0,0,AIW,0,Dh,[],0,3,0,["iT",function(b,c,d,e,f,g){ADi(this,b,c,d,e,f,g);}],Pl,0,D,[],4,3,0,0,QM,0,D,[DO],0,0,0,["gU",function(b){return A7H(this,b);}],QL,0,D,[DO],0,0,0,["gU",function(b){return A7T(this,b);}],Iv,0,Nj,[],1,0,0,0,U2,0,Iv,[],0,0,0,["yJ",
function(b){return AOY(this,b);},"vh",function(b,c){ANV(this,b,c);},"m4",function(){return AS7(this);}],Wa,0,D,[],4,3,0,0,V8,0,D,[],4,3,0,0,Xp,0,D,[],4,3,0,0,Jr,"UnsupportedOperationException",9,B8,[],0,3,0,0,UR,0,CT,[],0,3,0,["hY",function(){ADu(this);},"iH",function(b){AOQ(this,b);},"hR",function(b,c,d){AMN(this,b,c,d);}],FS,"ReadOnlyBufferException",6,Jr,[],0,3,0,0,Ha,"BufferOverflowException",6,B8,[],0,3,0,0,Gs,"BufferUnderflowException",6,B8,[],0,3,0,0,TG,0,D,[],0,3,0,0,ACx,0,D,[],0,3,0,0,RH,0,CT,[],0,
3,0,0,MD,0,CT,[],0,3,0,["hY",function(){AOz(this);},"pc",function(b,c){AMx(this,b,c);},"iH",function(b){AOJ(this,b);},"hR",function(b,c,d){APB(this,b,c,d);},"oe",function(){return A65(this);}],C1,"EntityFX",12,C5,[],0,3,0,["ep",function(){ALB(this);},"kU",function(b,c,d,e,f,g,h){ANG(this,b,c,d,e,f,g,h);},"xL",function(){return A8e(this);}],ABa,0,CT,[],0,3,0,["hY",function(){ARr(this);},"iH",function(b){ADA(this,b);},"rE",function(){A2x(this);},"hR",function(b,c,d){ADZ(this,b,c,d);}],LR,0,D,[],0,3,0,0,WM,0,LR,
[],0,3,0,0,Rd,0,D,[],3,3,0,0,AF8,0,D,[Rd],0,3,0,0,Pd,0,D,[],0,3,0,0,Ig,0,D,[FC],0,3,0,["gt",function(){return A6J(this);},"xk",function(){return A6w(this);},"gD",function(b){return ATo(this,b);},"j9",function(b,c){return A3x(this,b,c);},"jF",function(b,c){AW9(this,b,c);},"f9",function(){return A$m(this);},"km",function(){YI(this);}],ZT,"EntityDiggingFX",12,C1,[],0,3,0,["xL",function(){return ATW(this);},"kU",function(b,c,d,e,f,g,h){YV(this,b,c,d,e,f,g,h);}],K_,"ConcurrentModificationException",4,B8,[],0,3,0,
0,JV,"EntityRainFX",12,C1,[],0,3,0,["kU",function(b,c,d,e,f,g,h){AK1(this,b,c,d,e,f,g,h);},"ep",function(){AOL(this);}],IN,0,Iv,[],1,0,0,["m4",function(){return AX4(this);}],Pn,0,IN,[],0,0,0,["yJ",function(b){return AWs(this,b);},"vh",function(b,c){AS6(this,b,c);}],VU,0,IN,[],0,0,0,["yJ",function(b){return A08(this,b);},"vh",function(b,c){ATZ(this,b,c);}],AK9,0,D,[Fz],0,3,0,["qh",function(b,c){return A1p(this,b,c);}],Wf,0,D,[Fz],0,3,0,["qh",function(b,c){return A9U(this,b,c);}],Hq,0,D,[],0,3,0,0,HV,0,D,[],0,
3,0,0,HX,0,D,[],0,3,0,0,Nv,0,D,[],0,3,0,0,J8,"NoSuchElementException",4,B8,[],0,3,0,0,V2,0,D,[],0,3,0,["eo",function(b){return A6E(this,b);},"fl",function(){return A1J(this);}],OF,0,Fb,[DM],0,3,0,0,Hj,0,D,[],0,0,0,0,Nw,0,D,[],4,3,0,0,Sf,0,D,[],0,3,0,0]);
$rt_metadata([DJ,0,Dh,[],0,3,0,["Ih",function(b,c,d,e,f,g){AAn(this,b,c,d,e,f,g);},"k9",function(b,c){return AP6(this,b,c);},"CX",function(b){return A5y(this,b);},"C0",function(b,c,d){return A6N(this,b,c,d);},"xu",function(b,c){A9q(this,b,c);},"iT",function(b,c,d,e,f,g){AO_(this,b,c,d,e,f,g);}],OX,0,DJ,[],0,3,0,["k9",function(b,c){return Zk(this,b,c);},"Ih",function(b,c,d,e,f,g){AMe(this,b,c,d,e,f,g);},"iT",function(b,c,d,e,f,g){ACY(this,b,c,d,e,f,g);}],LS,0,Ge,[],0,3,0,0,Mr,0,D,[M9],0,3,0,0,QC,0,D,[],3,3,0,
0,KE,0,Mr,[QC],0,3,0,0,OE,0,D,[Da],3,3,0,0,QK,0,D,[OE],0,0,0,["Gw",function(){return A1U(this);}],WR,0,D,[Fz],0,3,0,["qh",function(b,c){return A47(this,b,c);}],WP,0,D,[Fz],0,3,0,0,Pa,0,D,[],4,3,0,0,Sh,0,Fc,[],4,0,0,0,Sg,0,FV,[],4,0,0,0,Si,0,Gd,[],4,0,0,0,IA,0,D,[],1,3,0,0,ABd,0,IA,[],0,3,0,["C_",function(b,c,d,e,f){XM(this,b,c,d,e,f);}],NO,0,D$,[],0,3,0,["tS",function(){ADf(this);}],ASf,0,IA,[],0,3,0,["C_",function(b,c,d,e,f){ARs(this,b,c,d,e,f);}],AQx,0,DJ,[],0,3,0,["CX",function(b){return A6z(this,b);},"k9",
function(b,c){return Ym(this,b,c);}],Ue,0,DJ,[],0,3,0,["k9",function(b,c){return AMo(this,b,c);}],FZ,0,Eh,[],0,3,0,["hK",function(b,c,d,e,f,g){A$c(this,b,c,d,e,f,g);}],P4,0,FZ,[],0,3,0,0,TM,0,DJ,[],0,3,0,["k9",function(b,c){return ARH(this,b,c);}],ACU,0,FZ,[],0,3,0,0,ARv,0,FZ,[],0,3,0,0,ACj,0,DJ,[],0,3,0,["xu",function(b,c){A8a(this,b,c);},"C0",function(b,c,d){return A0c(this,b,c,d);}],HP,0,MP,[],0,3,0,["on",function(b,c,d,e,f,g){A2Z(this,b,c,d,e,f,g);}],AIC,0,HP,[],0,3,0,0,Ls,"EntityGiant",12,DP,[],0,3,0,["sH",
function(b,c,d){return APk(this,b,c,d);}],Uh,0,DJ,[],0,3,0,["xu",function(b,c){A_d(this,b,c);}],TT,0,Dh,[],0,3,0,["iT",function(b,c,d,e,f,g){AJG(this,b,c,d,e,f,g);}],IF,"EntityPainting",12,C5,[],0,3,0,["ep",function(){ADy(this);},"lw",function(){return AX6(this);},"ft",function(b,c){return AEE(this,b,c);}],AAF,0,Dh,[],0,3,0,["iT",function(b,c,d,e,f,g){AO5(this,b,c,d,e,f,g);}],Jw,"EntityArrow",12,C5,[],0,3,0,["ep",function(){APH(this);},"xU",function(b){A7R(this,b);}],RG,0,Dh,[],0,3,0,["iT",function(b,c,d,e,
f,g){ADw(this,b,c,d,e,f,g);}],E$,"EntityItem",12,C5,[],0,3,0,["ep",function(){AJS(this);},"HY",function(){return AEs(this);},"Ga",function(b){AMH(this,b);},"ft",function(b,c){return Vq(this,b,c);},"xU",function(b){A_s(this,b);}],MH,"EntityTNTPrimed",12,C5,[],0,3,0,["lw",function(){return A$s(this);},"ep",function(){XS(this);}],AO9,0,Dh,[],0,3,0,["iT",function(b,c,d,e,f,g){AMh(this,b,c,d,e,f,g);}],JT,"EntityFallingSand",12,C5,[],0,3,0,["lw",function(){return AYA(this);},"ep",function(){AM0(this);}],AQ2,0,Dh,
[],0,3,0,["iT",function(b,c,d,e,f,g){ARA(this,b,c,d,e,f,g);}],Gf,"EntityMinecart",12,C5,[FC],0,3,0,["Bd",function(b){return AS8(this,b);},"BM",function(){return A0i(this);},"rV",function(){return A7U(this);},"Av",function(){return AV5(this);},"ft",function(b,c){return ALu(this,b,c);},"lw",function(){return A90(this);},"Dl",function(){APt(this);},"ep",function(){ASX(this);},"u9",function(b){A35(this,b);},"uS",function(b){return A84(this,b);}],ARP,0,Dh,[],0,3,0,["iT",function(b,c,d,e,f,g){AQu(this,b,c,d,e,f,g);
}],Wd,0,D,[],0,3,0,0,ABO,0,D,[],0,3,0,0,AIj,0,Eh,[],0,3,0,["hK",function(b,c,d,e,f,g){AYr(this,b,c,d,e,f,g);}],AIP,0,Eh,[],0,3,0,["hK",function(b,c,d,e,f,g){A3h(this,b,c,d,e,f,g);}],AE$,0,Eh,[],0,3,0,0,TF,0,D,[H3],0,0,0,["qn",function(){return KR(this);},"mV",function(){return La(this);}],I4,0,D,[],0,3,0,0,Is,0,D,[Oq],0,3,0,["eh",function(b,c,d){return Hy(this,b,c,d);},"sT",function(b,c,d){return AA0(this,b,c,d);},"eI",function(b,c,d){return ADh(this,b,c,d);},"oQ",function(b,c,d){return Oh(this,b,c,d);},"lg",
function(b,c,d){return ACg(this,b,c,d);}]]);
$rt_metadata([Gi,0,BF,[],0,3,0,0,U3,"NoSuchMethodException",9,Gi,[],0,3,0,0,Vn,0,D,[],0,3,0,0,PU,0,Gl,[],0,0,0,["rC",function(b){return A0H(this,b);},"kZ",function(){return Nx(this);}],TB,0,D,[OE],0,0,0,["Gw",function(){return A_L(this);}],AQV,0,D,[],4,3,0,0,W5,0,D$,[FC],0,3,0,["gD",function(b){return A9E(this,b);},"j9",function(b,c){return A8x(this,b,c);},"jF",function(b,c){AVJ(this,b,c);},"f9",function(){return AUl(this);},"tS",function(){AGU(this);},"km",function(){AAf(this);}],To,0,D$,[FC],0,3,0,["gt",function()
{return AV3(this);},"gD",function(b){return Rl(this,b);},"j9",function(b,c){return A1$(this,b,c);},"jF",function(b,c){AHO(this,b,c);},"xk",function(){return A8Q(this);},"f9",function(){return A7A(this);}],CR,0,D,[],1,3,0,0,AP2,0,CR,[],0,3,0,["gS",function(b){A7r(this,b);},"gL",function(b){A9y(this,b);},"fc",function(){return A7p(this);}],Qb,"BufferUnderflowException",7,B8,[],0,3,0,0,SQ,"BufferOverflowException",7,B8,[],0,3,0,0,R6,"MalformedInputException",7,GZ,[],0,3,0,["lS",function(){return AV7(this);}],P9,
"UnmappableCharacterException",7,GZ,[],0,3,0,["lS",function(){return AVA(this);}],IL,0,D,[],0,0,0,["qn",function(){return F$(this);}],Vk,0,IL,[H3],0,0,0,["mV",function(){return Mx(this);}],WC,0,D,[],0,3,0,0,AEN,0,CT,[],0,3,0,["hY",function(){ASg(this);},"iH",function(b){AD$(this,b);},"hR",function(b,c,d){AGs(this,b,c,d);}],OK,0,CT,[],0,3,0,["hY",function(){API(this);},"tc",function(){AXS(this);},"iH",function(b){ASO(this,b);},"I0",function(b){AK2(this,b);},"hR",function(b,c,d){AEQ(this,b,c,d);}],Mg,"InstantiationException",
9,Gi,[],0,3,0,0,Tj,"IllegalAccessException",9,Gi,[],0,3,0,0,ALJ,0,D,[],4,3,0,0,AAp,0,D,[],4,3,0,0,AMv,0,D,[Dc],4,3,0,0,AB$,0,LS,[],0,3,0,0,N4,0,CT,[],0,3,0,["hY",function(){AJH(this);},"iH",function(b){AIu(this,b);},"pc",function(b,c){AL2(this,b,c);},"hR",function(b,c,d){AGM(this,b,c,d);}],U9,0,OK,[],0,3,0,["tc",function(){A18(this);},"I0",function(b){AMl(this,b);}],N7,0,D,[],0,3,0,0,Yx,0,N7,[],0,3,0,0,Q7,0,D,[],0,3,AZe,0,PT,0,Fc,[],0,0,0,0,Cp,0,D,[],1,0,0,["eJ",function(b,c,d){return Jf(this,b,c,d);},"eW",
function(b,c,d,e){return Js(this,b,c,d,e);},"oL",function(){return A4E(this);},"ca",function(b){A1D(this,b);},"d1",function(b){return A$L(this,b);},"lA",function(){return A_t(this);},"i1",function(){Lp(this);}],Od,0,CR,[],0,3,0,["gL",function(b){A9v(this,b);},"gS",function(b){A0F(this,b);},"fc",function(){return AUY(this);}],DV,0,Cp,[],0,0,0,["l",function(b,c,d){return AT0(this,b,c,d);},"b5",function(b){return AUk(this,b);}],HU,0,D,[],0,0,0,0,ARq,"PatternSyntaxException",5,Ca,[],0,3,0,["lS",function(){return A_p(this);
}],MM,0,CR,[],0,3,0,["gS",function(b){A8T(this,b);},"gL",function(b){A8l(this,b);},"fc",function(){return A6Z(this);}],Nc,0,CR,[],0,3,0,["gS",function(b){AWB(this,b);},"gL",function(b){AZR(this,b);},"fc",function(){return A51(this);}],LD,0,CR,[],0,3,0,["gS",function(b){A2m(this,b);},"gL",function(b){AZm(this,b);},"fc",function(){return AVE(this);}],Om,0,CR,[],0,3,0,["gS",function(b){ATw(this,b);},"gL",function(b){A_E(this,b);},"fc",function(){return A2X(this);}],Pr,0,CR,[],0,3,0,["gS",function(b){ATn(this,b);
},"gL",function(b){A8d(this,b);},"fc",function(){return AS3(this);}],MF,0,CR,[],0,3,0,["gS",function(b){A7f(this,b);},"gL",function(b){AVm(this,b);},"fc",function(){return A1b(this);}],MY,0,CR,[],0,3,0,["gS",function(b){A5p(this,b);},"gL",function(b){A7y(this,b);},"fc",function(){return A9R(this);}],OQ,0,CR,[],0,3,0,["gS",function(b){A$8(this,b);},"gL",function(b){AZn(this,b);},"fc",function(){return ATH(this);}],Q3,0,CR,[],0,3,0,["gS",function(b){A9M(this,b);},"gL",function(b){AZg(this,b);},"fc",function()
{return AYS(this);}],TJ,0,D,[DG],0,0,0,["gC",function(){return AUH(this);}],TI,0,D,[DG],0,0,0,["gC",function(){return AXH(this);}],AR8,0,D,[],0,3,0,0,X7,0,D,[],0,3,0,0,X0,0,D,[],0,3,0,0]);
$rt_metadata([AEp,0,D,[],0,3,0,0,AR7,0,D,[],0,3,0,0,AFo,0,D,[],0,3,0,0,Yu,0,D,[Fz],0,0,0,["qh",function(b,c){return AZO(this,b,c);}],QQ,0,DV,[],0,0,0,["l",function(b,c,d){return A3N(this,b,c,d);},"b5",function(b){return A9N(this,b);}],ASp,0,DV,[],0,0,0,["l",function(b,c,d){return A43(this,b,c,d);}],P3,0,DV,[],0,0,0,["l",function(b,c,d){return AUq(this,b,c,d);}],Re,0,DV,[],0,0,0,["l",function(b,c,d){return A3P(this,b,c,d);},"b5",function(b){return A83(this,b);}],HS,0,DV,[],0,0,0,["l",function(b,c,d){return A1O(this,
b,c,d);}],CJ,0,Cp,[],1,0,0,["l",function(b,c,d){return A_N(this,b,c,d);},"d_",function(){return A$n(this);},"b5",function(b){return AXn(this,b);}],AF_,0,CJ,[],0,0,0,["dm",function(b,c){return A91(this,b,c);},"eJ",function(b,c,d){return A5R(this,b,c,d);},"eW",function(b,c,d,e){return A4T(this,b,c,d,e);},"b5",function(b){return A3O(this,b);}],CE,0,Cp,[],0,0,0,["l",function(b,c,d){return AWI(this,b,c,d);},"ca",function(b){AZC(this,b);},"d1",function(b){return A7u(this,b);},"b5",function(b){return AZ9(this,b);},
"i1",function(){AUZ(this);}],Li,0,CE,[],0,0,0,["l",function(b,c,d){return AZu(this,b,c,d);},"b5",function(b){return A9A(this,b);}],EX,0,Li,[],0,0,0,["l",function(b,c,d){return A5j(this,b,c,d);},"ca",function(b){A9j(this,b);}],Tl,0,EX,[],0,0,0,["l",function(b,c,d){return AZy(this,b,c,d);},"b5",function(b){return A1F(this,b);}],WT,0,EX,[],0,0,0,["l",function(b,c,d){return AUd(this,b,c,d);},"b5",function(b){return A$r(this,b);}],Vl,0,EX,[],0,0,0,["l",function(b,c,d){return AUW(this,b,c,d);},"b5",function(b){return A_1(this,
b);}],Rr,0,EX,[],0,0,0,["l",function(b,c,d){return A3q(this,b,c,d);},"b5",function(b){return A9G(this,b);}],Iz,0,CE,[],0,0,0,["l",function(b,c,d){return ATu(this,b,c,d);},"eJ",function(b,c,d){return AYp(this,b,c,d);},"eW",function(b,c,d,e){return A9Q(this,b,c,d,e);},"d1",function(b){return A7q(this,b);},"lA",function(){return A81(this);},"i1",function(){A2i(this);}],HY,0,D,[],1,0,0,0,Bk,0,HY,[],1,0,0,["hF",function(){return A4r(this);},"kr",function(){return A3Z(this);},"sU",function(){return A$h(this);},"nW",
function(){return A_q(this);}],ZZ,"CharClass",5,Bk,[],0,0,0,["T",function(b){return D4(this,b);},"hF",function(){return DX(this);},"kr",function(){return A5K(this);},"sU",function(){return A1v(this);},"gs",function(){return A8f(this);},"nW",function(){return AWc(this);}],M8,"MissingResourceException",4,B8,[],0,3,0,0,E5,0,Cp,[],1,0,0,["d1",function(b){return A0I(this,b);},"b5",function(b){return A$X(this,b);},"i1",function(){AYM(this);}],D6,0,E5,[],0,0,0,["l",function(b,c,d){return A3r(this,b,c,d);}],GC,0,D6,
[],0,0,0,["l",function(b,c,d){return A4e(this,b,c,d);}],DW,0,E5,[],0,0,0,["l",function(b,c,d){return A3G(this,b,c,d);}],FU,0,D6,[],0,0,0,["l",function(b,c,d){return A7E(this,b,c,d);},"ca",function(b){A22(this,b);}],Sy,0,D6,[],0,0,0,["l",function(b,c,d){return A_I(this,b,c,d);},"eJ",function(b,c,d){return AY2(this,b,c,d);}],Ez,"NumberFormatException",9,Ca,[],0,3,0,0,Tv,"Quantifier",5,HY,[EU],0,0,0,["gs",function(){return A8o(this);}],TY,0,Cp,[],0,0,0,["l",function(b,c,d){return AXM(this,b,c,d);},"b5",function(b)
{return A80(this,b);}],W7,0,D,[EU,Dc],0,3,0,0,OT,0,CE,[],0,0,0,0,Qf,0,CE,[],0,0,0,["l",function(b,c,d){return ATY(this,b,c,d);},"ca",function(b){A8N(this,b);},"b5",function(b){return AUw(this,b);},"d1",function(b){return AUg(this,b);}],EP,0,CE,[],0,0,0,["l",function(b,c,d){return A5D(this,b,c,d);},"T",function(b){return AWp(this,b);},"d1",function(b){return ATT(this,b);},"ca",function(b){A$d(this,b);},"b5",function(b){return AV8(this,b);}],M7,0,EP,[],0,0,0,["T",function(b){return AXo(this,b);}],ZJ,0,CJ,[],0,
0,0,["dm",function(b,c){return A6_(this,b,c);}],Fo,0,CJ,[],0,0,0,["dm",function(b,c){return Te(this,b,c);},"d1",function(b){return AZF(this,b);}],Ud,0,CE,[],0,0,0,["ca",function(b){AYt(this,b);},"l",function(b,c,d){return AS$(this,b,c,d);},"d1",function(b){return A4x(this,b);},"b5",function(b){return A1y(this,b);}],Fu,0,CJ,[],0,0,0,["d_",function(){return A63(this);},"dm",function(b,c){return AWU(this,b,c);},"eJ",function(b,c,d){return AVW(this,b,c,d);},"eW",function(b,c,d,e){return AXB(this,b,c,d,e);},"d1",
function(b){return A1s(this,b);}],AG7,0,CJ,[],0,0,0,["dm",function(b,c){return A2_(this,b,c);}],XY,0,CJ,[],0,0,0,["dm",function(b,c){return ATp(this,b,c);}],GJ,0,CE,[],0,0,0,["ca",function(b){A_v(this,b);},"l",function(b,c,d){return AZt(this,b,c,d);},"d1",function(b){return AXP(this,b);},"b5",function(b){return A9l(this,b);}],SR,0,GJ,[],0,0,0,0,V_,0,GJ,[],0,0,0,0,Tb,0,DW,[],0,0,0,["l",function(b,c,d){return A45(this,b,c,d);}],UH,0,DW,[],0,0,0,["l",function(b,c,d){return A73(this,b,c,d);}],Hv,0,DW,[],0,0,0,["l",
function(b,c,d){return A$a(this,b,c,d);},"ca",function(b){A$5(this,b);}],PW,0,Hv,[],0,0,0,["l",function(b,c,d){return AXy(this,b,c,d);},"ca",function(b){A8q(this,b);}]]);
$rt_metadata([G8,0,DW,[],0,0,0,["l",function(b,c,d){return A_X(this,b,c,d);}],O5,0,G8,[],0,0,0,["l",function(b,c,d){return AW_(this,b,c,d);}],QF,0,DW,[],0,0,0,["l",function(b,c,d){return A2r(this,b,c,d);}],U1,0,Hv,[],0,0,0,["l",function(b,c,d){return AUy(this,b,c,d);}],RZ,0,G8,[],0,0,0,["l",function(b,c,d){return A3T(this,b,c,d);}],QG,0,E5,[],0,0,0,["l",function(b,c,d){return A_P(this,b,c,d);},"eJ",function(b,c,d){return A04(this,b,c,d);}],T3,0,E5,[],0,0,0,["l",function(b,c,d){return AZG(this,b,c,d);},"eJ",
function(b,c,d){return ATb(this,b,c,d);}],Gk,0,D,[],1,0,0,0,XE,0,D6,[],0,0,0,["l",function(b,c,d){return ATL(this,b,c,d);}],Su,0,FU,[],0,0,0,["l",function(b,c,d){return AYR(this,b,c,d);}],Un,0,GC,[],0,0,0,["l",function(b,c,d){return A9T(this,b,c,d);}],UZ,0,D6,[],0,0,0,["l",function(b,c,d){return AZz(this,b,c,d);}],Wb,0,FU,[],0,0,0,["l",function(b,c,d){return ATP(this,b,c,d);}],Qq,0,GC,[],0,0,0,["l",function(b,c,d){return A92(this,b,c,d);}],ABX,0,Cp,[],4,0,0,["l",function(b,c,d){return A7t(this,b,c,d);},"b5",
function(b){return A6W(this,b);}],AAA,0,Cp,[],0,0,0,["l",function(b,c,d){return A4p(this,b,c,d);},"b5",function(b){return A4v(this,b);}],AJE,0,Cp,[],0,0,0,["l",function(b,c,d){return AXs(this,b,c,d);},"b5",function(b){return A2N(this,b);}],SO,0,Cp,[],4,0,0,["l",function(b,c,d){return A9c(this,b,c,d);},"b5",function(b){return A4X(this,b);}],ARj,0,Cp,[],0,0,0,["l",function(b,c,d){return A8I(this,b,c,d);},"b5",function(b){return A2$(this,b);}],AI4,0,Cp,[],0,0,0,["l",function(b,c,d){return A4R(this,b,c,d);},"b5",
function(b){return AWC(this,b);}],AGy,0,CE,[],0,0,0,["l",function(b,c,d){return A2w(this,b,c,d);},"ca",function(b){A4A(this,b);},"oL",function(){return A8v(this);},"b5",function(b){return A4y(this,b);}],ZV,0,CE,[],4,0,0,["l",function(b,c,d){return A8D(this,b,c,d);},"ca",function(b){A9K(this,b);},"oL",function(){return ASY(this);},"b5",function(b){return A2D(this,b);}],AQY,0,Cp,[],4,0,0,["l",function(b,c,d){return AXW(this,b,c,d);},"b5",function(b){return A56(this,b);}],AOg,0,Cp,[],0,0,0,["l",function(b,c,d)
{return AZl(this,b,c,d);},"b5",function(b){return A52(this,b);}],AIq,0,Cp,[],0,0,0,["l",function(b,c,d){return A6R(this,b,c,d);},"b5",function(b){return AU$(this,b);}],IQ,0,CE,[],0,0,0,["l",function(b,c,d){return ATM(this,b,c,d);},"ca",function(b){A9h(this,b);},"b5",function(b){return A0s(this,b);}],AQ9,0,IQ,[],0,0,0,["l",function(b,c,d){return AVf(this,b,c,d);},"eJ",function(b,c,d){return A1E(this,b,c,d);},"eW",function(b,c,d,e){return ATE(this,b,c,d,e);},"d1",function(b){return A7X(this,b);}],AMq,0,IQ,[],
0,0,0,["l",function(b,c,d){return AYn(this,b,c,d);}],AM4,0,CJ,[],0,0,0,["dm",function(b,c){return AVv(this,b,c);},"eJ",function(b,c,d){return A4o(this,b,c,d);},"eW",function(b,c,d,e){return A6b(this,b,c,d,e);},"d1",function(b){return AW4(this,b);}],XP,0,CJ,[],0,0,0,["dm",function(b,c){return AYq(this,b,c);}],O8,0,CJ,[],0,0,0,["dm",function(b,c){return A9V(this,b,c);}],H9,0,D,[],4,0,0,0,By,0,D,[],1,0,0,0,Ti,0,CJ,[],0,0,0,["dm",function(b,c){return A0M(this,b,c);}],N1,0,CE,[],0,0,0,["ca",function(b){A8V(this,
b);},"l",function(b,c,d){return A4Y(this,b,c,d);},"eJ",function(b,c,d){return AW3(this,b,c,d);},"eW",function(b,c,d,e){return A5m(this,b,c,d,e);},"d1",function(b){return ATz(this,b);},"b5",function(b){return A1j(this,b);}],N6,0,CE,[],0,0,0,["ca",function(b){A4I(this,b);},"l",function(b,c,d){return ATd(this,b,c,d);},"eJ",function(b,c,d){return A86(this,b,c,d);},"eW",function(b,c,d,e){return A0K(this,b,c,d,e);},"d1",function(b){return AVw(this,b);},"b5",function(b){return A88(this,b);}],EZ,0,CJ,[],0,0,0,["dm",
function(b,c){return A9B(this,b,c);},"eJ",function(b,c,d){return A8h(this,b,c,d);},"eW",function(b,c,d,e){return AUG(this,b,c,d,e);},"d1",function(b){return A9s(this,b);}],WF,0,Gk,[],4,0,0,["oA",function(b){return AUP(this,b);},"Er",function(b,c){return A0p(this,b,c);}],WG,0,Gk,[],4,0,0,["oA",function(b){return A94(this,b);},"Er",function(b,c){return A2g(this,b,c);}],AE2,0,D,[],0,0,0,0,YG,0,D,[],0,0,0,0,NZ,0,By,[],0,0,0,["bX",function(){return AMz(this);}],Nr,0,By,[],0,0,0,["bX",function(){return ANZ(this);
}],AEU,0,By,[],0,0,0,["bX",function(){return A9L(this);}],AFz,0,By,[],0,0,0,["bX",function(){return A1l(this);}],AFI,0,By,[],0,0,0,["bX",function(){return AVY(this);}],NV,0,By,[],0,0,0,["bX",function(){return Z1(this);}],Ms,0,NV,[],0,0,0,["bX",function(){return AA8(this);}],AH7,0,By,[],0,0,0,["bX",function(){return A6u(this);}],ON,0,Ms,[],0,0,0,["bX",function(){return AIk(this);}]]);
$rt_metadata([AM1,0,ON,[],0,0,0,["bX",function(){return AYO(this);}],ACX,0,By,[],0,0,0,["bX",function(){return A5d(this);}],AAv,0,By,[],0,0,0,["bX",function(){return AYF(this);}],AKn,0,By,[],0,0,0,["bX",function(){return A2h(this);}],AQq,0,By,[],0,0,0,["bX",function(){return A8t(this);}],AId,0,By,[],0,0,0,["bX",function(){return A3f(this);}],APC,0,By,[],0,0,0,["bX",function(){return AXc(this);}],AEC,0,By,[],0,0,0,["bX",function(){return A0u(this);}],AGd,0,By,[],0,0,0,["bX",function(){return A5b(this);}],Y9,
0,By,[],0,0,0,["bX",function(){return AVG(this);}],AIL,0,By,[],0,0,0,["bX",function(){return A_i(this);}],APR,0,By,[],0,0,0,["bX",function(){return A3a(this);}],AFm,0,By,[],0,0,0,["bX",function(){return AXZ(this);}],ALq,0,By,[],0,0,0,["bX",function(){return AVM(this);}],AC9,0,By,[],0,0,0,["bX",function(){return A6d(this);}],AHo,0,By,[],0,0,0,["bX",function(){return A7h(this);}],AP5,0,By,[],0,0,0,["bX",function(){return A1z(this);}],ABH,0,By,[],0,0,0,["bX",function(){return AZ0(this);}],AAU,0,By,[],0,0,0,["bX",
function(){return AY6(this);}],AIb,0,By,[],0,0,0,["bX",function(){return A9I(this);}],Lu,0,By,[],0,0,0,["bX",function(){return ACZ(this);}],AQT,0,Lu,[],0,0,0,["bX",function(){return AYX(this);}],AM7,0,NZ,[],0,0,0,["bX",function(){return A4i(this);}],AAO,0,Nr,[],0,0,0,["bX",function(){return AWQ(this);}],AKz,0,By,[],0,0,0,["bX",function(){return AYa(this);}],AK4,0,By,[],0,0,0,["bX",function(){return A16(this);}],AML,0,By,[],0,0,0,["bX",function(){return A5Z(this);}],AM2,0,By,[],0,0,0,["bX",function(){return AS5(this);
}],AKI,0,D,[],4,0,0,0,ZF,0,D,[],4,3,0,0,TA,0,D,[],0,3,0,0,R4,0,D,[],0,3,0,0,AMj,0,D,[],4,3,0,0,Ws,0,Ew,[],0,3,0,["lu",function(){A3U(this);},"s8",function(b){AOv(this,b);}],Xt,0,Ew,[],0,3,0,["pw",function(){Zh(this);},"tu",function(b){A6T(this,b);},"lu",function(){A2e(this);},"s8",function(b){AKC(this,b);}],AMQ,0,Ew,[],0,3,0,["lu",function(){A$e(this);},"s8",function(b){AN3(this,b);}],VO,0,IL,[H3],0,0,0,["mV",function(){return LG(this);}],CX,"EnumArt",12,EY,[],12,3,0,0,Vd,0,CT,[],0,3,0,["hY",function(){AGD(this);
},"iH",function(b){AQG(this,b);},"hR",function(b,c,d){Y2(this,b,c,d);}],KZ,"MinecraftError",12,Fh,[],0,3,0,0,UW,0,D,[],0,3,0,0,Sw,"AbstractCharClass$1",5,Bk,[],0,0,0,["T",function(b){return AV2(this,b);}],Sv,"AbstractCharClass$2",5,Bk,[],0,0,0,["T",function(b){return A3C(this,b);}],PC,"CharClass$18",5,Bk,[],0,0,0,["T",function(b){return AX9(this,b);},"gs",function(){return A6g(this);}],T6,0,Bk,[],0,0,0,["T",function(b){return A9D(this,b);}],T4,0,Bk,[],0,0,0,["T",function(b){return A0L(this,b);}],T5,0,Bk,[],
0,0,0,["T",function(b){return A7C(this,b);}],T9,0,Bk,[],0,0,0,["T",function(b){return A5r(this,b);}],T$,0,Bk,[],0,0,0,["T",function(b){return ASZ(this,b);}],T7,0,Bk,[],0,0,0,["T",function(b){return AWK(this,b);}]]);
$rt_metadata([T8,0,Bk,[],0,0,0,["T",function(b){return AYs(this,b);}],Ua,0,Bk,[],0,0,0,["T",function(b){return A1G(this,b);}],Ub,0,Bk,[],0,0,0,["T",function(b){return A48(this,b);}],PB,0,Bk,[],0,0,0,["T",function(b){return A_6(this,b);}],PP,0,Bk,[],0,0,0,["T",function(b){return AWP(this,b);}],Pz,0,Bk,[],0,0,0,["T",function(b){return AVh(this,b);}],PA,0,Bk,[],0,0,0,["T",function(b){return A55(this,b);}],PF,0,Bk,[],0,0,0,["T",function(b){return AXu(this,b);}],Py,0,Bk,[],0,0,0,["T",function(b){return A$z(this,
b);}],PD,0,Bk,[],0,0,0,["T",function(b){return A4t(this,b);}],PE,0,Bk,[],0,0,0,["T",function(b){return AZW(this,b);}],O1,0,Iz,[],0,0,0,["eJ",function(b,c,d){return AWj(this,b,c,d);},"eW",function(b,c,d,e){return A_V(this,b,c,d,e);},"lA",function(){return AU7(this);}],Nt,0,Fb,[DM],0,3,0,0,MG,0,D,[],3,3,0,0,VG,0,D,[MG],4,3,0,0,Us,0,D,[Jd],3,3,0,0,Sn,0,D,[Us],3,3,0,0,Ta,0,Fc,[Sn],0,3,0,0,SW,0,D,[Mb],3,3,0,0,O3,0,D,[SW],3,3,0,0,AKb,0,FV,[EU,Dc,O3],0,3,0,0,Q4,0,D,[Fz],0,0,0,0,VQ,"AbstractCharClass$LazyJavaLowerCase$1",
5,Bk,[],0,0,0,["T",function(b){return A1N(this,b);}],Tn,"AbstractCharClass$LazyJavaUpperCase$1",5,Bk,[],0,0,0,["T",function(b){return A4g(this,b);}],QV,"AbstractCharClass$LazyJavaWhitespace$1",5,Bk,[],0,0,0,["T",function(b){return ATO(this,b);}],QU,"AbstractCharClass$LazyJavaMirrored$1",5,Bk,[],0,0,0,["T",function(b){return A5Y(this,b);}],SF,"AbstractCharClass$LazyJavaDefined$1",5,Bk,[],0,0,0,["T",function(b){return AXj(this,b);}],Ui,"AbstractCharClass$LazyJavaDigit$1",5,Bk,[],0,0,0,["T",function(b){return A$3(this,
b);}],Pp,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",5,Bk,[],0,0,0,["T",function(b){return AZv(this,b);}],Vc,"AbstractCharClass$LazyJavaISOControl$1",5,Bk,[],0,0,0,["T",function(b){return A0z(this,b);}],Tk,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",5,Bk,[],0,0,0,["T",function(b){return A_K(this,b);}],Tm,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",5,Bk,[],0,0,0,["T",function(b){return AVy(this,b);}],Ph,"AbstractCharClass$LazyJavaLetter$1",5,Bk,[],0,0,0,["T",function(b){return A10(this,b);}],Uy,
"AbstractCharClass$LazyJavaLetterOrDigit$1",5,Bk,[],0,0,0,["T",function(b){return A7P(this,b);}],UC,"AbstractCharClass$LazyJavaSpaceChar$1",5,Bk,[],0,0,0,["T",function(b){return A9g(this,b);}],V7,"AbstractCharClass$LazyJavaTitleCase$1",5,Bk,[],0,0,0,["T",function(b){return A$S(this,b);}],VH,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",5,Bk,[],0,0,0,["T",function(b){return A2k(this,b);}],OV,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",5,Bk,[],0,0,0,["T",function(b){return AVp(this,b);}],MR,"UnicodeCategory",
5,Bk,[],0,0,0,["T",function(b){return AZw(this,b);}],Vv,"UnicodeCategoryScope",5,MR,[],0,0,0,["T",function(b){return A$f(this,b);}],NA,0,D,[],0,3,0,0,J4,0,D,[DM],0,3,0,["eo",function(b){return A$M(this,b);},"fl",function(){return A70(this);},"lR",function(b){return TS(this,b);}],Lt,0,D,[],3,3,0,0,V6,0,D,[Lt],0,3,0,0,Qo,0,D,[],3,3,0,0,Xv,0,D,[Qo],0,3,0,0,SA,0,D,[Lt],0,3,0,0,WD,0,D,[MG],0,0,0,0,VV,0,D,[],0,3,0,0,Se,0,D,[],3,3,0,0]);
$rt_metadata([AGk,0,Gb,[Se],0,3,0,0,AGe,0,D,[],0,3,0,0,Oa,0,D,[],4,3,0,0,HN,0,D,[],1,3,0,0,AM3,0,HN,[],0,3,0,0,AC3,0,D,[],0,3,0,0,PI,0,HN,[],0,3,0,0,Ug,0,D,[],0,3,0,0,E3,0,EY,[],12,3,0,0,Vz,0,Fb,[DM],0,3,0,0,TN,0,D,[DG],0,0,0,["gC",function(){return A4H(this);}],TK,0,D,[DG],0,0,0,["gC",function(){return AYB(this);}],Rv,0,D,[DG],0,0,0,["gC",function(){return A85(this);}],Ry,0,D,[DG],0,0,0,["gC",function(){return A7s(this);}],Rt,0,D,[DG],0,0,0,["gC",function(){return A58(this);}],Ru,0,D,[DG],0,0,0,["gC",function()
{return A3v(this);}],Rw,0,D,[DG],0,0,0,["gC",function(){return A7z(this);}],Rx,0,D,[DG],0,0,0,["gC",function(){return A1Z(this);}],Er,0,D,[],1,3,0,0,Ro,0,Er,[],0,3,0,0,OG,0,D,[],0,3,0,0,SU,0,CT,[],0,3,0,["hY",function(){AEg(this);},"pw",function(){ANU(this);},"rE",function(){AYK(this);},"iH",function(b){AHx(this,b);},"pc",function(b,c){AC_(this,b,c);},"hR",function(b,c,d){ABD(this,b,c,d);}],IJ,0,EY,[],12,3,0,0,MW,0,D,[J$,Dc],0,3,0,0,Lv,0,MW,[],0,0,0,0,AM_,0,Gb,[],0,3,0,["ly",function(){AYL(this);},"gB",function(b,
c,d){AYg(this,b,c,d);},"tV",function(){A4l(this);},"nR",function(b){AXC(this,b);}],W1,0,D,[],0,3,0,0,Oo,"ArrayIndexOutOfBoundsException",9,BQ,[],0,3,0,0,ARz,0,Er,[],0,3,0,0,Ci,0,Er,[],0,3,0,0,BU,0,Er,[],0,3,0,0,Cn,0,Er,[],0,3,0,0,SJ,"EntityBubbleFX",12,C1,[],0,3,0,["ep",function(){Zl(this);}],AFE,"EntitySmokeFX",12,C1,[],0,3,0,["kU",function(b,c,d,e,f,g,h){AKj(this,b,c,d,e,f,g,h);},"ep",function(){AL5(this);}],Rb,"EntityExplodeFX",12,C1,[],0,3,0,["kU",function(b,c,d,e,f,g,h){ASn(this,b,c,d,e,f,g,h);},"ep",function()
{AE6(this);}],Pc,"EntityFlameFX",12,C1,[],0,3,0,["kU",function(b,c,d,e,f,g,h){AQW(this,b,c,d,e,f,g,h);},"vu",function(b){return ASK(this,b);},"ep",function(){AA3(this);}],ABc,"EntityLavaFX",12,C1,[],0,3,0,["vu",function(b){return AKk(this,b);},"kU",function(b,c,d,e,f,g,h){AG8(this,b,c,d,e,f,g,h);},"ep",function(){ALw(this);}],ARR,"EntitySplashFX",12,JV,[],0,3,0,0,AIE,0,D,[],4,3,0,0,H7,0,D,[],0,0,0,0,Vr,0,D,[],0,3,0,0,ACm,0,D,[],0,3,0,0,Vb,"EntityPickupFX",12,C1,[],0,3,0,["kU",function(b,c,d,e,f,g,h){AMu(this,
b,c,d,e,f,g,h);},"ep",function(){AAW(this);},"xL",function(){return AUM(this);}],Zf,0,D,[],0,3,0,0,HR,0,D,[],0,3,0,["eo",function(b){return A36(this,b);},"fl",function(){return AVC(this);}],AJw,0,D,[],0,0,0,0]);
function $rt_array(cls,data){this.cq=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","@","0","","Timer hack thread","Player","fuckmojang123","randpasslol","Minecraft main thread","<init>","null","Patter is null",": ","    at ","Caused by: ","  at ","Index out of bounds","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ",
"#version 300 es","/","UTF-8","overflow-x:hidden;overflow-y:hidden;","WebGL 2.0 is not supported in your browser (",")","NONE","ESCAPE","1","2","3","4","5","6","7","8","9","MINUS","EQUALS","BACK","TAB","Q","W","E","R","T","Y","U","I","O","P","LBRACKET","RBRACKET","RETURN","LCONTROL","A","S","D","F","G","H","J","K","L","SEMICOLON","APOSTROPHE","GRAVE","LSHIFT","BACKSLASH","Z","X","C","V","B","N","M","COMMA","PERIOD","SLASH","RSHIFT","MULTIPLY","LMENU","SPACE","CAPITAL","F1","F2","F3","F4","F5","F6","F7","F8",
"F9","F10","NUMLOCK","SCROLL","NUMPAD7","NUMPAD8","NUMPAD9","SUBTRACT","NUMPAD4","NUMPAD5","NUMPAD6","ADD","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD0","DECIMAL","F11","F12","F13","F14","F15","F16","F17","F18","KANA","F19","CONVERT","NOCONVERT","YEN","NUMPADEQUALS","CIRCUMFLEX","AT","COLON","UNDERLINE","KANJI","STOP","AX","UNLABELED","NUMPADENTER","RCONTROL","SECTION","NUMPADCOMMA","DIVIDE","SYSRQ","RMENU","FUNCTION","PAUSE","HOME","UP","PRIOR","LEFT","RIGHT","END","DOWN","NEXT","INSERT","DELETE","CLEAR","LMETA",
"RMETA","APPS","POWER","SLEEP","\n","/default.png","Pre startup","Startup","EARLY BETA TESTING!","THIS PROJECT IS STILL IN TESTING!\nTHERE WILL BE BUGS!","Post startup","/dirt.png","Loading...","GL_INVALID_ENUM","GL_INVALID_VALUE","GL_INVALID_OPERATION","GL_OUT_OF_MEMORY","Unknown Error","CONTEXT_LOST_WEBGL","########## GL ERROR ##########","@ ","Pre render","Post render"," fps, "," chunk updates","/terrain.png","Loading level","Generating level","Building terrain","Simulating world for a bit","P: ",". T: ",
"Respawning","main","_net_peytonplayz585_minecraft_infdev_IndexedDBFilesystem","Initialization Failed","EAGPKG!!","invalid epk file","<file>"," end","invalid file hash for ","</file>","/rain.png","Either src or dest is null","window.indexedDB was null or undefined","Can\'t compare "," to ","OPENED","LOCKED","ERROR","yee","End of stream reached","Malformed UTF-8 sequence","charsetName is null","Should never been thrown","Stream closed","footer is not found","Unexpected end of ZLIB input stream","random.splash",
"bubble","splash","random.fizz","Pos","Motion","Rotation","FallDistance","Fire","Air","OnGround","explode","random.hurt","random.bow","random.fuse","mob.sheep","mob.pig","mob.pigdeath","/gui/items.png","/water.png","Slot "," is already occupied by "," when adding ","stone","wood","gravel","grass","cloth","sand","open error","path","New position "," is outside of range [0;","]","New limit ","The last float in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","step.","liquid.water",
"lava","largesmoke","smoke","flame","fire.fire","Large chest","Get resource: ","Duplicate id: ","Furnace","Chest","Sign","MobSpawner","CONFLICT @ ","random.door_close","random.door_open","�","Replacement preconditions do not hold","Capacity is negative: ","The last byte in dst ","The last byte in src ","Index ","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","fire.ignite","BIG_ENDIAN","LITTLE_ENDIAN","need dictionary","unknown compression method",
"unknown header flags set","incorrect data check","incorrect length check","incorrect header check","invalid window size","bad extra field length","header crc mismatch","IGNORE","REPLACE","REPORT","Action must be non-null","invalid stored block lengths","invalid block type","too many length or distance symbols","invalid bit length repeat","oversubscribed dynamic bit lengths tree","incomplete dynamic bit lengths tree","oversubscribed distance tree","incomplete distance tree","empty distance tree with lengths",
"oversubscribed literal/length tree","incomplete literal/length tree","invalid distance code","invalid literal/length code","newAction must be non-null","matrix is not supported while recording display list use tessellator class instead","projection matrix stack overflow","texture matrix stack overflow","modelview matrix stack overflow","projection matrix stack underflow","texture matrix stack underflow","modelview matrix stack underflow","only GL_QUADS supported in a display list","vertex format inconsistent in display list",
"/glsl/occl.glsl","\n#define CC_VERT\n","\n#define CC_FRAG\n","\n[/glsl/occl.glsl][VERT] ","\n[/glsl/occl.glsl][FRAG] ","\n\n","\n[/glsl/occl.glsl][LINKER] ","matrix_m","matrix_p","Forward","Left","Back","Right","Jump","Inventory","Drop","Chat","Toggle fog","Save location","Load location","Music: ","OFF","ON","Sound: ","Invert mouse: ","Show FPS: ","Render distance: ","View bobbing: ","3d anaglyph: ","Limit framerate: ","Difficulty: ","Graphics: ","FAST","FANCY","High Performance Mode: ","MipMap: ","FAR","NORMAL",
"SHORT","TINY","Peaceful","Easy","Normal","Hard","keyup","/level.dat","Data","RandomSeed","SpawnX","SpawnY","SpawnZ","Time","SizeOnDisk","Saving level","Saving chunks","LastPlayed","/level.dat_new","/level.dat_old","Failed to add entity ","All: ","DOHASDOSHIH!","TickNextTick list out of synch","%%","!!","/char.png","0123456789abcdef","C: ",". F: ",", O: ",", E: ","E: ",". B: ",", I: ","/terrain/sun.png","/terrain/moon.png","/clouds.png","Pre-beta!","As seen on TV!","Awesome!","100% pure!","May contain nuts!",
"Better than Prey!","More polygons!","Sexy!","Limited edition!","Flashing letters!","Made by Notch!","Coming soon!","Best in class!","When it\'s finished!","Absolutely dragon free!","Excitement!","More than 5000 sold!","One of a kind!","700+ hits on YouTube!","Indev!","Spiders everywhere!","Check it out!","Holy cow, man!","It\'s a game!","Made in Sweden!","Uses LWJGL!","Reticulating splines!","Minecraft!","Yaaay!","Alpha version!","Singleplayer!","Keyboard compatible!","Undocumented!","Ingots!","Exploding creepers!",
"That\'s not a moon!","l33t!","Create!","Survive!","Dungeon!","Exclusive!","The bee\'s knees!","Down with O.P.P.!","Closed source!","Classy!","Wow!","Not on steam!","9.95 euro!","Half price!","Oh man!","Awesome community!","Pixels!","Teetsuuuuoooo!","Kaaneeeedaaaa!","Now with difficulty!","Enhanced!","90% bug free!","Pretty!","12 herbs and spices!","Fat free!","Absolutely no memes!","Free dental!","Ask your doctor!","Minors welcome!","Cloud computing!","Legal in Finland!","Hard to label!","Technically good!",
"Bringing home the bacon!","Indie!","GOTY!","Ceci n\'est pas une title screen!","Euclidian!","Now in 3D!","Inspirational!","Herregud!","Complex cellular automata!","Yes, sir!","Played by cowboys!","OpenGL 1.1!","Thousands of colors!","Try it!","Age of Wonders is better!","Try the mushroom stew!","Sensational!","Hot tamale, hot hot tamale!","Play him off, keyboard cat!","Guaranteed!","Macroscopic!","Bring it on!","Random splash!","Call your mother!","Monster infighting!","Loved by millions!","Ultimate edition!",
"Freaky!","You\'ve got a brand new key!","Water proof!","Uninflammable!","Whoa, dude!","All inclusive!","Tell your friends!","NP is not in P!","Notch <3 Ez!","Music by C418!","Single player","Multi player","Play tutorial level","Options...","/gui/logo.png","Copyright Mojang Specifications. Do not distribute.","Free memory: ","% of ","MB","Allocated memory: ","% (","MB)","/particles.png","/gui/gui.png","/gui/icons.png","Minecraft Infdev","Minecraft Infdev (","Used memory: ","MB) of ","Notch","humanoid","http://www.minecraft.net/skin/",
".png","Health","HurtTime","DeathTime","AttackTime","Score","Edit sign message:","mousedown","wheel","Slot","Crafting","/gui/inventory.png","/glsl/core.glsl","\n#define CC_a_color\n","#define CC_a_texture0\n","#define CC_lighting\n","#define CC_fog\n","#define CC_alphatest\n","#define CC_unit0\n","\n[/glsl/core.glsl][CC_VERT] ","broken shader file","\n[/glsl/core.glsl][CC_FRAG] ","a_position","a_texture0","a_color","\n[LINKER] ","matrix_t","colorUniform","normalUniform","light0Pos","light1Pos","fogColor","fogMode",
"fogStart","fogEnd","fogDensity","fogPremultiply","alphaTestF","tex0","texCoordV0","id","Count","Damage","array size does not equal image size","I Understand!","Respawn","Title menu","Game over!","Score: &e","Save and quit to title..","Back to game","Saving level..","Game menu","/armor/","_","chain","iron","diamond","gold","/item/sign.png","> "," <","Pig","/mob/spider_eyes.png","/mob/saddle.png","/mob/sheep_fur.png","/art/kz.png","random.drr","random.pop","/item/arrows.png","/item/cart.png","Wrong location! ",
"There\'s no such entity to remove: ","Attempted to place a tile entity where there was no entity tile!","Malformed input of length ","Unmappable characters of length ","Options","Controls...","Done","Controls","Select world","World","World ","- empty -"," ("," MB)","Delete world...","Cancel","Delete world","\'","\' will be lost forever!","Are you sure you want to delete this world?","saves/","###","X#X","#X#","# #","##"," X ","#"," # ","X X","A "," B","#  ","## "," recipes","Is","In",", ","XXX","XX","X#"," #",
" #X","# X","{",",","}","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","s","d","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B",
"IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue",
"KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A",
"SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths",
"CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials",
"Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","/gui/furnace.png","/gui/crafting.png","/gui/container.png","Kebab","Aztec","Alban","Aztec2","Bomb","Plant","Wasteland","Pool","Courbet","Sea","Sunset","Wanderer","Match","Bust","Stage","Void","SkullAndRoses","Fighters","Pointer","Yes","Arrow","Item","Painting","Mob","Monster","Creeper","Skeleton","Spider","Giant","Zombie","Sheep",
"PrimedTnt","FallingSand","Minecart","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ","xPos","zPos","The chunk file \'","\' was supposed to be at [","], but the file contained a chunk from [","]. It\'s data will be moved to file \'","\', and a new empty chunk will be created for file \'","\' for [","Corrupt chunk \'","\' was found at: [","The file will be deleted","Failed to serialize chunk at [","] to byte array","LastUpdate","Blocks","SkyLight","BlockLight","HeightMap","TerrainPopulated","UTF Error","FILE","DIRECTORY",
"FALSE","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_\'*!\"#%/()=+?[]{}<>","Sky","Block","buffer is null","Length out of bounds: ","Offset out of bounds: ","random.explode","OW KNOWS!"]);
B4.prototype.toString=function(){return $rt_ustr(this);};
B4.prototype.valueOf=B4.prototype.toString;D.prototype.toString=function(){return $rt_ustr(AUD(this));};
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
=$rt_mainStarter(ARh);
(function(){var c;c=YU.prototype;c.dispatchEvent=c.ME;c.addEventListener=c.Yk;c.removeEventListener=c.a0n;c.getLength=c.Vf;c.get=c.So;c.addEventListener=c.TE;c.removeEventListener=c.Oo;c=Xe.prototype;c.handleEvent=c.gU;c=Xk.prototype;c.handleEvent=c.gU;c=Xl.prototype;c.handleEvent=c.gU;c=Xi.prototype;c.handleEvent=c.gU;c=Xj.prototype;c.handleEvent=c.gU;c=Xg.prototype;c.handleEvent=c.gU;c=Xh.prototype;c.handleEvent=c.gU;c=Xf.prototype;c.handleEvent=c.gU;c=QI.prototype;c.handleEvent=c.gU;c=QH.prototype;c.handleEvent
=c.gU;c=Xd.prototype;c.stateChanged=c.a04;c=TR.prototype;c.handleEvent=c.gC;c=TQ.prototype;c.handleEvent=c.gC;c=TP.prototype;c.handleEvent=c.gC;c=TO.prototype;c.handleEvent=c.gU;c=AA$.prototype;c.getLength=c.ZC;c.get=c.Q4;c=QM.prototype;c.handleEvent=c.gU;c=QL.prototype;c.handleEvent=c.gU;c=QK.prototype;c.onTimer=c.Gw;c=TB.prototype;c.onTimer=c.Gw;c=TJ.prototype;c.handleEvent=c.gC;c=TI.prototype;c.handleEvent=c.gC;c=TN.prototype;c.handleEvent=c.gC;c=TK.prototype;c.handleEvent=c.gC;c=Rv.prototype;c.handleEvent
=c.gC;c=Ry.prototype;c.handleEvent=c.gC;c=Rt.prototype;c.handleEvent=c.gC;c=Ru.prototype;c.handleEvent=c.gC;c=Rw.prototype;c.handleEvent=c.gC;c=Rx.prototype;c.handleEvent=c.gC;})();
})();

//# sourceMappingURL=app.js.map