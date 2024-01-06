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
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.oZ=f;}
function $rt_cls(cls){return L1(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Tl(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bw.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return D; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Bda());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return AST();}
function $rt_setThread(t){return Fw(t);}
function $rt_createException(message){return Z8(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var M=$rt_throw;var S=$rt_compare;var Bdb=$rt_nullCheck;var F=$rt_cls;var J=$rt_createArray;var Sw=$rt_isInstance;var C4=$rt_nativeThread;var C=$rt_suspending;var Fe=$rt_resuming;var Fa=$rt_invalidPointer;var B=$rt_s;var Bs=$rt_eraseClinit;var Bj=$rt_imul;var Q=$rt_wrapException;
function D(){this.co=null;this.$id$=0;}
function Bdc(){var a=new D();WR(a);return a;}
function Bbd(b){var c;if(b.co===null)VI(b);if(b.co.ej===null)b.co.ej=Bdd;else if(b.co.ej!==Bdd){c=new D3;Bo(c,B(0));M(c);}b=b.co;b.fj=b.fj+1|0;}
function Bc4(b){var c,d;if(!HN(b)&&b.co.ej===Bdd){c=b.co;d=c.fj-1|0;c.fj=d;if(!d)b.co.ej=null;HN(b);return;}b=new Ks;P(b);M(b);}
function AD9(b){if(b.co===null)VI(b);if(b.co.ej===null)b.co.ej=Bdd;if(b.co.ej!==Bdd)AXw(b,1);else{b=b.co;b.fj=b.fj+1|0;}}
function VI(b){b.co=BaJ();}
function AXw(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gw=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaT(callback);return thread.suspend(function(){try{Bco(b,c,callback);}catch($e){callback.I4($rt_exception($e));}});}
function Bco(b,c,d){var e,f,g;e=Bdd;if(b.co===null){VI(b);Fw(e);b=b.co;b.fj=b.fj+c|0;CM(d,null);return;}if(b.co.ej===null){b.co.ej=e;Fw(e);b=b.co;b.fj=b.fj+c|0;CM(d,null);return;}f=b.co;if(f.hj===null)f.hj=AXy();f=f.hj;g=new Rg;g.zJ=e;g.zK=b;g.zH=c;g.zI=d;d=g;f.push(d);}
function NZ(b){var c;if(!HN(b)&&b.co.ej===Bdd){c=b.co;c.fj=c.fj-1|0;if(c.fj<=0){c.ej=null;if(c.hj!==null&&!JS(c.hj)){c=new S1;c.Dk=b;Q6(c);}else HN(b);}return;}b=new Ks;P(b);M(b);}
function HN(a){var b;b=a.co;if(b===null)return 1;a:{if(b.ej===null&&!(b.hj!==null&&!JS(b.hj))){if(b.rn===null)break a;if(JS(b.rn))break a;}return 0;}a.co=null;return 1;}
function WR(a){return;}
function Dl(a){return L1(a.constructor);}
function A48(a){return MQ(a);}
function Q$(a,b){return a!==b?0:1;}
function AUw(a){var b,c,d,e,f,g,h,i;b=new V;X(b);b=I(I(b,IJ(Dl(a))),B(1));c=MQ(a);if(!c)d=B(2);else{e=(((32-TJ(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=I$(c>>>e&15,16);e=e-4|0;h=i;}d=Tl(f);}return W(I(b,d));}
function MQ(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AXV(a){var b,c,d;if(!Sw(a,ET)&&a.constructor.$meta.item===null){b=new Sm;P(b);M(b);}b=ATb(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Xo(a){var b,c;if(!(a.co!==null&&a.co.ej===Bdd?1:0)){b=new Ks;P(b);M(b);}b=a.co.rn;if(b===null)return;while(!JS(b)){c=AO0(b);if(!c.a0r())Q6(c);}a.co.rn=null;}
function JH(){D.call(this);}
var Bde=null;var Bdf=null;var Bdg=null;function Bdh(){var a=new JH();AQ7(a);return a;}
function AQ7(a){return;}
function ARa(b){var c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AKl();AGq();AQs();Z6();AP_();AI0();ACU();ASx();ADc();AKY();ART();Zc();AHJ();Zk();AHo();AL4();AFv();AFx();AOP();AQk();AH8();AOw();ABP();AFG();AEz();AHX();XP();ADK();AAg();AMb();AKh();AOX();AHb();ASr();AOj();ALT();AAl();AKC();APi();AEs();AMT();ALj();AMR();AIP();AGd();AHD();ALa();AAw();Z9();AQg();AJ2();AAZ();AIp();AOO();AL8();ABt();ANi();AHS();AFA();c
=window.minecraftOpts;if(c===null)d=null;else{d=J(B4,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));Bde=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){}else if($$je instanceof CP){c=$$je;break a;}else{throw $$e;}}return;}g=A9i();h=new Ly;Wn(h,g);h.yk=0;h.mE=g;OJ(c,h);return;case 1:b:{c:{d:{try{AAx(c,g);if(C()){break _;}break d;}catch($$e){$$je=Q($$e);if($$je instanceof BD){}else if($$je instanceof CP)
{c=$$je;break c;}else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Q($$e);if($$je instanceof CP){c=$$je;}else{throw $$e;}}}g=A9i();h=new Ly;Wn(h,g);h.yk=0;h.mE=g;OJ(c,h);return;}c=new It;i=Lv();j=MH();g=new U2;g.DZ=0;g.cX=c;g.v2=(-1);g.v4=(-1);g.v3=(-1);g.ho=0.0;g.mR=0.0;g.on=0.0;g.nf=0;k=new U9;b=J(FT,4);d=b.data;d[0]=F(Jd);d[1]=F(Ju);d[2]=F(J6);d[3]=F(Ku);RP(k,100,F(DP),b);k.GE=g;g.Bj=k;h=new Jh;b=J(FT,2);d=b.data;d[0]=F(KO);d[1]=F(II);RP(h,20,F(GB),b);g.BE=h;c.cB=g;g=new SN;g.C0=1.0;g.lL=0.0;g.nH=1.0;g.c8
=20.0;g.sT=B_();g.rX=Long_div(EH(),Long_fromInt(1000000));c.bf=g;c.k2=null;c.bs=0;c.D=null;g=new Sa;g.n4=B(3);g.ma=B(3);g.kP=B_();g.lO=0;g.fH=c;c.ir=g;c.eX=Bb0(c);c.bN=0;c.c$=0;c.Ho=null;c.F6=0;c.h7=0;c.GB=XB(0.0);c.ce=null;c.Dc=BaB();c.BK=Ba_();c.gS=1;c.lD=B(3);c.gT=Long_fromInt(-1);c.bp=0;c.cn=0;c.cU=0;c.dB=B_();g=new V8;T2(g,B(4));g.yq=c;g.Ek=1;Tw(g);c.cq=i;c.bF=j;Bdi=c;Bdf=c;c=Bdf;g=new Mo;Bbv();g.om=B(5);g.F$=B(6);c.k2=g;Bdf.k2.GG=B(7);Bdg=Bae(Bdf,B(8));Tw(Bdg);return;default:Fa();}}C4().s(b,c,d,e,f,g,
h,i,j,k,$p);}
function AKl(){Bde=null;Bdf=null;Bdg=null;}
function MW(){}
function FT(){var a=this;D.call(a);a.uo=null;a.fX=null;a.mn=null;}
var Bdj=0;function L1(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new FT;c.fX=b;d=c;b.classObject=d;}return c;}
function A4e(a){return a.fX;}
function UJ(a,b){var c;b=b;c=a.fX;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&V7(b.constructor,c)?1:0;}
function Qc(a,b){return V7(b.fX,a.fX);}
function IJ(a){if(a.uo===null)a.uo=$rt_str(a.fX.$meta.name);return a.uo;}
function F2(a){return a.fX.$meta.primitive?1:0;}
function AG5(a){return ASa(a.fX)===null?0:1;}
function KF(a){return L1(ASa(a.fX));}
function A68(){Jd.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Ju.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C6,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];J6.$meta.methods
=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C6,$rt_floatcls()],returnType
:$rt_voidcls(),callable:null},{name:"setCreeperFlashTime",modifiers:0,accessLevel:3,parameterTypes:[$rt_floatcls()],returnType:$rt_floatcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Ku.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C6,callable:null},{name:"attackEntity",modifiers
:0,accessLevel:2,parameterTypes:[C6,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];KO.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType
:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel
:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null}];II.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"getLivingSound",modifiers
:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[JD],returnType:$rt_booleancls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null}];Jp.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null}];Tq.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers
:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable
:null},{name:"writeToNBT",modifiers:4,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null}];W5.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes
:[$rt_intcls()],returnType:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"readFromNBT",modifiers:4,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers
:4,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getCookProgressScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getBurnTimeRemainingScaled",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"isBurning",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"canSmelt",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"smeltItem",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getSmeltingResult",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_intcls(),callable:null},{name:"getItemBurnTime",modifiers:0,accessLevel
:1,parameterTypes:[Cd],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];NC.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"anyPlayerInRange",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"updateEntity",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name
:"updateDelay",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"readFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"writeToNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null}];DP.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable
:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"findPlayerToAttack",modifiers:0,accessLevel:2,parameterTypes:[],returnType:C6,callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"attackEntity",modifiers:0,accessLevel:2,parameterTypes:[C6,$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes
:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null}];EQ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"getTexture",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"getEyeHeight",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_floatcls(),callable:null},{name:"onEntityUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"spawnExplosionParticle",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updateRidden",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"setSize",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable
:null},{name:"heal",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"getLivingSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getHurtSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable:null},{name:"getDeathSound",modifiers:0,accessLevel:2,parameterTypes:[],returnType:B4,callable
:null},{name:"knockBack",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"onDeath",modifiers:0,accessLevel:3,parameterTypes:[C6],returnType:$rt_voidcls(),callable:null},{name:"getDropItemId",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"fall",modifiers:0,accessLevel:2,parameterTypes:[$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"moveEntityWithHeading",modifiers
:0,accessLevel:3,parameterTypes:[$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"isOnLadder",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"isEntityAlive",modifiers:0,accessLevel:3,parameterTypes:[],returnType:
$rt_booleancls(),callable:null},{name:"onLivingUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"jump",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"updatePlayerActionState",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onEntityDeath",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getCanSpawnHere",modifiers:0,accessLevel:3,parameterTypes
:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable:null},{name:"kill",modifiers:0,accessLevel:2,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];Ld.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"getBlockPathWeight",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_floatcls(),callable:null}];IM.$meta.methods=[{name:"<init>",modifiers:0,accessLevel
:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1,$rt_intcls(),$rt_intcls(),$rt_intcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"setDirection",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"getArtSize",modifiers:0,accessLevel:1,parameterTypes:[$rt_intcls()],returnType:$rt_floatcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType
:$rt_voidcls(),callable:null},{name:"onValidSurface",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers
:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null}];JB.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1,EQ],returnType:$rt_voidcls(),callable:null},{name:"setArrowHeading",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers:0,accessLevel:3,parameterTypes:[JD],returnType:$rt_voidcls(),callable:null}];E_.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1,$rt_doublecls(),$rt_doublecls(),
$rt_doublecls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"handleWaterMovement",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"pushOutOfBlocks",modifiers:0,accessLevel:1,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_booleancls(),callable
:null},{name:"dealFireDamage",modifiers:0,accessLevel:2,parameterTypes:[$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:3,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"onCollideWithPlayer",modifiers
:0,accessLevel:3,parameterTypes:[JD],returnType:$rt_voidcls(),callable:null}];Mv.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1,$rt_floatcls(),$rt_floatcls(),$rt_floatcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_voidcls(),callable:null},{name:"createExplosion",modifiers:0,accessLevel:1,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null}];JU.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"<init>",modifiers
:0,accessLevel:3,parameterTypes:[F1,$rt_floatcls(),$rt_floatcls(),$rt_floatcls(),$rt_intcls()],returnType:$rt_voidcls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes
:[APW],returnType:$rt_voidcls(),callable:null},{name:"getWorld",modifiers:0,accessLevel:3,parameterTypes:[],returnType:F1,callable:null}];Gh.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1],returnType:$rt_voidcls(),callable:null},{name:"getCollisionBox",modifiers:0,accessLevel:3,parameterTypes:[C6],returnType:Jf,callable:null},{name:"getBoundingBox",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Jf,callable:null},{name:"canBePushed",modifiers:0,accessLevel:3,parameterTypes
:[],returnType:$rt_booleancls(),callable:null},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[F1,$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:$rt_voidcls(),callable:null},{name:"getYOffset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_doublecls(),callable:null},{name:"attackEntityFrom",modifiers:0,accessLevel:3,parameterTypes:[C6,$rt_intcls()],returnType:$rt_booleancls(),callable:null},{name:"canBeCollidedWith",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_booleancls(),callable
:null},{name:"setEntityDead",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"onUpdate",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"getPosOffset",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kr,callable:null},{name:"getPos",modifiers:0,accessLevel:3,parameterTypes:[$rt_doublecls(),$rt_doublecls(),$rt_doublecls()],returnType:Kr,callable:null},{name:
"writeEntityToNBT",modifiers:0,accessLevel:2,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"readEntityFromNBT",modifiers:0,accessLevel:2,parameterTypes:[APW],returnType:$rt_voidcls(),callable:null},{name:"applyEntityCollision",modifiers:0,accessLevel:3,parameterTypes:[C6],returnType:$rt_voidcls(),callable:null},{name:"getSizeInventory",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"getStackInSlot",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls()],returnType
:Cd,callable:null},{name:"decrStackSize",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),$rt_intcls()],returnType:Cd,callable:null},{name:"setInventorySlotContents",modifiers:0,accessLevel:3,parameterTypes:[$rt_intcls(),Cd],returnType:$rt_voidcls(),callable:null},{name:"getInvName",modifiers:0,accessLevel:3,parameterTypes:[],returnType:B4,callable:null},{name:"getInventoryStackLimit",modifiers:0,accessLevel:3,parameterTypes:[],returnType:$rt_intcls(),callable:null},{name:"onInventoryChanged",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:$rt_voidcls(),callable:null},{name:"interact",modifiers:0,accessLevel:3,parameterTypes:[JD],returnType:$rt_booleancls(),callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:$rt_voidcls(),callable:null}];}
function ASz(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!F2(a)&&!AG5(a)){if(a.mn===null){if(!Bdj){Bdj=1;A68();}b=a.fX.$meta.methods;a.mn=J(Kz,b.length);c=0;d=0;while(d<b.length){e=b[d];if(DC($rt_str(e.name),B(9))){f=e.parameterTypes;g=J(FT,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=L1(f[i]);i=i+1|0;}h=a.mn.data;j=c+1|0;k=new Kz;l=$rt_str(e.name);m=e.modifiers;i=e.accessLevel;f=JM(e.callable,"call");k.zY=a;k.H7=l;k.vg=m;k.Dp=i;k.nh=g;k.vO=f;h[c]=k;c=j;}d=d+1|0;}a.mn=Nv(a.mn,c);}return a.mn.oZ();}return J(Kz,0);}
function WL(a,b){var c,d,e,f,g,h,i,j,k,l;c=ASz(a).data;d=c.length;e=0;while(true){if(e>=d){f=new U5;P(f);M(f);}g=c[e];if(!(AEh(g)&1)?0:1){a:{h=ABs(g);if(h===b)i=1;else{if(h!==null&&b!==null){j=h.data;h=b.data;k=j.length;if(k==h.length){i=0;while(i<k){f=j[i];l=h[i];if(!(f===l?1:f!==null?Q$(f,l):l!==null?0:1)){i=0;break a;}i=i+1|0;}i=1;break a;}}i=0;}}if(i)break;}e=e+1|0;}return g;}
function JR(a){return L1(a.fX.$meta.superclass);}
function Zw(a){var b;b=a.fX;if(!Bdk){AW9();Bdk=1;}b=A2C(b);if(b!==null)return b;b=new L2;P(b);M(b);}
function AKb(){D.call(this);}
function Bdl(){var a=new AKb();A7f(a);return a;}
function A7f(a){return;}
function Cu(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function JM(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function Ue(){D.call(this);}
var Bdk=0;function Bdm(){var a=new Ue();A_B(a);return a;}
function A_B(a){return;}
function ATb(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function V7(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(V7(d[e],c))return 1;e=e+1|0;}return 0;}
function AW9(){var c='$$constructor$$';B4[c]=Yd;D[c]=WR;AMl[c]=A1D;I_[c]=AVH;Fh[c]=AUV;CP[c]=P;AOZ[c]=AWX;IY[c]=AXS;ALM[c]=A3F;B6[c]=ATu;BD[c]=AZU;V[c]=A_p;HR[c]=X;JH[c]=AQ7;ABp[c]=A2$;AKb[c]=A7f;Ue[c]=A_B;Go[c]=AHH;Bq[c]=V1;Xe[c]=A2v;Xk[c]=AZp;Xl[c]=AXp;Xi[c]=A5f;Xj[c]=A_Y;Xg[c]=A4h;Xh[c]=AXD;Xf[c]=A3c;QF[c]=A2l;QE[c]=A4c;AEL[c]=A22;BL[c]=A33;Ll[c]=A6t;Wa[c]=AZt;AFh[c]=AWe;ZM[c]=A3e;MD[c]=KN;AA0[c]=A_a;AKJ[c]=A1P;AQr[c]=A1g;ACk[c]=AVD;NY[c]=AEd;U6[c]=AQB;ADz[c]=A$q;DB[c]=A3n;L8[c]=AZN;AJm[c]=AWf;Y2[c]=A0w;Cc[c]
=AUi;AJi[c]=A6f;E5[c]=AUU;NG[c]=AIr;AE$[c]=ATl;Xm[c]=A3C;SL[c]=ZU;Uv[c]=A3i;MX[c]=OX;ABe[c]=AZb;Jp[c]=AZ$;D$[c]=AND;AHM[c]=A14;B8[c]=AQt;Qa[c]=A9c;Oq[c]=AZ5;L4[c]=ATv;Oc[c]=A7G;AGn[c]=A0o;Sm[c]=A6O;I6[c]=A08;BT[c]=AUG;FI[c]=AXe;PW[c]=A6U;AMw[c]=ATK;Gd[c]=AHL;Hy[c]=A_z;AOv[c]=A20;XC[c]=A8X;Ks[c]=A7r;D3[c]=A93;Z2[c]=A2O;W$[c]=A1t;G0[c]=AVm;E2[c]=A71;ASk[c]=AXT;O1[c]=Zj;ANF[c]=A8R;CT[c]=DR;Gg[c]=Nj;J1[c]=A5P;Bu[c]=APa;ACJ[c]=AUv;Eu[c]=A5c;Vb[c]=A$i;G_[c]=AZZ;N3[c]=AIz;Qr[c]=A$H;AK4[c]=A4F;ACs[c]=A3x;AHh[c]=A4A;RL[c]
=A0W;Qu[c]=ANT;AJO[c]=AWk;AAL[c]=AS2;AIO[c]=A5H;Jv[c]=AYo;FW[c]=A6W;Hc[c]=A54;Gu[c]=A1Q;Mq[c]=A$a;AA7[c]=AWl;AFX[c]=A9h;Tq[c]=A2h;W5[c]=AVl;KY[c]=A2y;RE[c]=A6Y;WM[c]=AFz;LD[c]=AHx;Pa[c]=ALp;H1[c]=ADf;H4[c]=AGB;J9[c]=A7W;OT[c]=AIe;Mc[c]=AV3;Hu[c]=AAr;Nk[c]=AR_;QG[c]=A_r;WS[c]=AVw;WQ[c]=A5V;Hn[c]=AQQ;Nl[c]=AKt;Sg[c]=ASX;Si[c]=A$e;Sh[c]=A$j;Sj[c]=A3S;AA$[c]=ATG;NC[c]=A8l;AR9[c]=AXv;AQq[c]=A4B;P3[c]=AYm;ACO[c]=A$c;ARo[c]=AVj;ACf[c]=AZV;AIs[c]=AWy;HV[c]=A8m;TV[c]=AZF;AAz[c]=AZL;RD[c]=AS5;AO2[c]=A7q;AQV[c]=AXB;ARH[c]
=A$p;Wg[c]=AUm;ABL[c]=AUx;AH_[c]=AUX;AIH[c]=A5i;AE2[c]=A4a;U5[c]=A6V;Gk[c]=A$n;Vo[c]=APc;AQO[c]=A4l;APW[c]=A8U;P_[c]=A_d;ST[c]=AYV;L2[c]=A7h;Tk[c]=A$O;AMr[c]=ATf;NX[c]=ADh;Q3[c]=ALI;ALD[c]=A7x;AAj[c]=A8F;N8[c]=AVW;MA[c]=A4w;M2[c]=A5_;Ln[c]=A1U;Oh[c]=AZ_;Pp[c]=AZ8;Mt[c]=AZM;MM[c]=A_S;OM[c]=A8x;QZ[c]=AG_;AR1[c]=AXL;X6[c]=A$x;XZ[c]=A2n;AEi[c]=A0O;AR0[c]=A63;AFe[c]=AVh;ASi[c]=A24;HY[c]=A$v;K7[c]=AX6;CE[c]=A4K;ZT[c]=A2G;Ic[c]=AGb;T0[c]=A_N;W7[c]=A4G;ABU[c]=AVs;AJy[c]=A0R;ARc[c]=AXb;AGm[c]=A8t;EB[c]=A3Z;WG[c]=A4f;WH[c]
=AWT;NO[c]=AW5;Nf[c]=A04;AEN[c]=AWB;AFp[c]=AXo;AFy[c]=AT3;NJ[c]=AU_;Md[c]=AW8;AHW[c]=A72;OI[c]=AZ1;AMX[c]=A0V;ACR[c]=A9R;AAp[c]=A$$;AKg[c]=AUf;AQj[c]=A39;AH4[c]=A0f;APw[c]=AT5;AEv[c]=AYA;AF3[c]=AU9;Y6[c]=AUE;AID[c]=AYf;APL[c]=AYM;AFc[c]=A6A;ALk[c]=ATy;AC3[c]=AUN;AHf[c]=AX0;APZ[c]=A8g;ABE[c]=AUH;AAP[c]=A9z;AH2[c]=A6v;Lf[c]=AVL;AQM[c]=A6E;AM3[c]=A1L;AAI[c]=A64;AKX[c]=A2c;AKB[c]=ATe;Zz[c]=A8c;AMf[c]=A$V;IS[c]=AUc;Tb[c]=AAq;AJ6[c]=AT4;Np[c]=ASw;AF4[c]=A0s;N5[c]=ABv;PG[c]=A_P;Rl[c]=A69;W1[c]=AX8;ARr[c]=A05;AIu[c]
=AW1;Zb[c]=A0k;}
function A2C(b){if($rt_resuming()){var $r = $rt_nativeThread().pop();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}if(!b.hasOwnProperty('$$constructor$$')){return null;}var $r=new b();b.$$constructor$$($r);if($rt_suspending()){return $rt_nativeThread().push($r);}return $r;}
function AZW(b){return setTimeout(function(){$rt_threadStarter(A3$)(b);},0);}
function A3$(b){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.kt();if(C()){break _;}return;default:Fa();}}C4().s(b,$p);}
function Q6(b){AFK(b,0);}
function AFK(b,c){return setTimeout(function(){A3$(b);},c);}
function AP9(b){return String.fromCharCode(b);}
function ASa(b){return b.$meta.item;}
function AXy(){return [];}
function De(){}
function DM(){}
function K4(){}
function B4(){var a=this;D.call(a);a.bw=null;a.qr=0;}
var Bdn=null;function Bdo(){var a=new B4();Yd(a);return a;}
function Tl(a){var b=new B4();TA(b,a);return b;}
function Lo(a,b,c){var d=new B4();ASM(d,a,b,c);return d;}
function A3d(a,b){var c=new B4();YC(c,a,b);return c;}
function A$I(a,b,c){var d=new B4();XI(d,a,b,c);return d;}
function Yd(a){a.bw=$rt_createCharArray(0);}
function TA(a,b){var c,d;b=b.data;c=b.length;a.bw=$rt_createCharArray(c);d=0;while(d<c){a.bw.data[d]=b[d];d=d+1|0;}}
function ASM(a,b,c,d){var e,f;a.bw=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bw.data[e]=f[e+c|0];e=e+1|0;}}
function YC(a,b,c){c=AN8(c,AML(b,0,b.data.length));if(AJK(c)&&!c.bk&&c.cy==c.mI)a.bw=APr(c);else{a.bw=$rt_createCharArray(Ct(c));AEW(c,a.bw);}}
function XI(a,b,c,d){var e,f,g,h,i,j;a.bw=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bw.data;j=e+1|0;g[e]=i&65535;}else{g=a.bw.data;c=e+1|0;g[e]=IK(i);g=a.bw.data;j=c+1|0;g[c]=Id(i);}f=f+1|0;c=h;e=j;}if(e<a.bw.data.length)a.bw=Pc(a.bw,e);}
function Ba(a,b){var c;if(b>=0&&b<a.bw.data.length)return a.bw.data[b];c=new I6;P(c);M(c);}
function Bi(a){return a.bw.data.length;}
function IE(a){return a.bw.data.length?0:1;}
function ARx(a,b){var c,d,e;if(a===b)return 0;c=CB(Bi(a),Bi(b));d=0;while(true){if(d>=c)return Bi(a)-Bi(b)|0;e=Ba(a,d)-Ba(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AJL(a,b){var c,d,e;if(a===b)return 0;c=CB(Bi(a),Bi(b));d=0;while(true){if(d>=c)return Bi(a)-Bi(b)|0;e=EU(Ba(a,d))-EU(Ba(b,d))|0;if(e)break;d=d+1|0;}return e;}
function Wl(a,b,c){var d,e,f;if((c+Bi(b)|0)>Bi(a))return 0;d=0;while(d<Bi(b)){e=Ba(b,d);f=c+1|0;if(e!=Ba(a,c))return 0;d=d+1|0;c=f;}return 1;}
function IF(a,b){if(a===b)return 1;return Wl(a,b,0);}
function Hl(a,b,c){var d,e,f,g;d=DE(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bw.data.length)return (-1);if(a.bw.data[d]==e)break;d=d+1|0;}return d;}f=IK(b);g=Id(b);while(true){if(d>=(a.bw.data.length-1|0))return (-1);if(a.bw.data[d]==f&&a.bw.data[d+1|0]==g)break;d=d+1|0;}return d;}
function UO(a,b){return Hl(a,b,0);}
function Io(a,b,c){var d,e,f,g,h;d=CB(c,Bi(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bw.data[d]==e)break;d=d+(-1)|0;}return d;}f=IK(b);g=Id(b);while(true){if(d<1)return (-1);if(a.bw.data[d]==g){h=a.bw.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function LL(a,b){return Io(a,b,Bi(a)-1|0);}
function AKO(a,b,c){var d,e,f;d=DE(0,c);e=Bi(a)-Bi(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=Bi(b))break a;if(Ba(a,d+f|0)!=Ba(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AAE(a,b,c){var d,e;d=CB(c,Bi(a)-Bi(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=Bi(b))break a;if(Ba(a,d+e|0)!=Ba(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Ex(a,b,c){var d;if(b<=c)return Lo(a.bw,b,c-b|0);d=new BT;P(d);M(d);}
function JC(a,b){return Ex(a,b,Bi(a));}
function AVT(a,b,c){return Ex(a,b,c);}
function KQ(a,b,c){var d,e,f,g;d=new V;X(d);e=Bi(a)-Bi(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Bi(b)){FP(d,c);f=f+(Bi(b)-1|0)|0;break a;}if(Ba(a,f+g|0)!=Ba(b,g))break;g=g+1|0;}DQ(d,Ba(a,f));}f=f+1|0;}FP(d,JC(a,f));return W(d);}
function AUs(a){return a;}
function Nz(a){var b,c,d,e;b=$rt_createCharArray(a.bw.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bw.data[d];d=d+1|0;}return b;}
function UA(b){return b===null?B(10):b.gk();}
function V4(b){var c;c=new V;X(c);return W(Bf(c,b));}
function DC(a,b){var c,d;if(a===b)return 1;if(!(b instanceof B4))return 0;c=b;if(Bi(c)!=Bi(a))return 0;d=0;while(d<Bi(c)){if(Ba(a,d)!=Ba(c,d))return 0;d=d+1|0;}return 1;}
function A8v(a){var b,c,d,e;a:{if(!a.qr){b=a.bw.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.qr=(31*a.qr|0)+e|0;d=d+1|0;}}}return a.qr;}
function AKr(a){var b,c,d,e,f,g,h;if(IE(a))return a;b=$rt_createIntArray(a.bw.data.length);c=b.data;d=0;e=0;while(e<a.bw.data.length){a:{if(e!=(a.bw.data.length-1|0)&&Du(a.bw.data[e])){f=a.bw.data;g=e+1|0;if(DS(f[g])){h=d+1|0;c[d]=GP(EJ(a.bw.data[e],a.bw.data[g]));e=g;break a;}}h=d+1|0;c[d]=EU(a.bw.data[e]);}e=e+1|0;d=h;}return A$I(b,0,d);}
function AOo(a){var b,c,d,e,f,g,h;if(IE(a))return a;b=$rt_createIntArray(a.bw.data.length);c=b.data;d=0;e=0;while(e<a.bw.data.length){a:{if(e!=(a.bw.data.length-1|0)&&Du(a.bw.data[e])){f=a.bw.data;g=e+1|0;if(DS(f[g])){h=d+1|0;c[d]=GN(EJ(a.bw.data[e],a.bw.data[g]));e=g;break a;}}h=d+1|0;c[d]=FG(a.bw.data[e]);}e=e+1|0;d=h;}return A$I(b,0,d);}
function ANt(a,b){var c,d;if(b===null){b=new E5;Bo(b,B(11));M(b);}Bdp=1;c=BbH();d=new H0;d.h4=1;d.eQ=b;d.bE=$rt_createCharArray(Bi(b)+2|0);Ds(Nz(b),0,d.bE,0,Bi(b));d.bE.data[d.bE.data.length-1|0]=0;d.bE.data[d.bE.data.length-2|0]=0;d.D0=d.bE.data.length;d.mb=0;GC(d);GC(d);c.n=d;c.fP=0;c.u4=S7(c,(-1),c.fP,null);if(!Eq(c.n))M(CN(B(3),c.n.eQ,c.n.ig));if(c.zg)c.u4.iX();return AIX(c,a);}
function AV9(a,b){return ARx(a,b);}
function AGq(){Bdn=new Wa;}
function CP(){var a=this;D.call(a);a.vB=null;a.jG=null;a.os=0;a.rU=0;a.pf=null;a.qR=null;}
function Bdq(){var a=new CP();P(a);return a;}
function Bdr(a){var b=new CP();Bo(b,a);return b;}
function Bds(a){var b=new CP();W2(b,a);return b;}
function P(a){a.os=1;a.rU=1;}
function Bo(a,b){a.os=1;a.rU=1;a.vB=b;}
function W2(a,b){a.os=1;a.rU=1;a.jG=b;}
function A5Q(a){return a;}
function A0t(a){return a.vB;}
function AWw(a){return a.lU();}
function B9(a){S8(a,Da());}
function S8(a,b){var c,d,e,f,g;Kx(b,IJ(Dl(a)));c=a.lU();if(c!==null){d=new V;X(d);Kx(b,W(I(I(d,B(12)),c)));}a:{APJ(b);if(a.qR!==null){e=a.qR.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Kx(b,B(13));ACr(b,d);g=g+1|0;}}}if(a.jG!==null&&a.jG!==a){Kx(b,B(14));S8(a.jG,b);}}
function OJ(a,b){var c,d,e,f,g;Hq(b,IJ(Dl(a)));c=a.lU();if(c!==null){d=new V;X(d);Hq(b,W(I(I(d,B(12)),c)));}a:{SY(b);if(a.qR!==null){e=a.qR.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Hq(b,B(15));AAK(b,d);g=g+1|0;}}}if(a.jG!==null&&a.jG!==a){Hq(b,B(14));OJ(a.jG,b);}}
function Hs(a,b){if(!a.os)return;a.pf=Nv(a.pf,a.pf.data.length+1|0);a.pf.data[a.pf.data.length-1|0]=b;}
function Fh(){CP.call(this);}
function Bdt(){var a=new Fh();AUV(a);return a;}
function AUV(a){P(a);}
function I_(){Fh.call(this);}
function Bdu(){var a=new I_();AVH(a);return a;}
function AVH(a){P(a);}
function AMl(){I_.call(this);}
function Bdv(){var a=new AMl();A1D(a);return a;}
function A1D(a){P(a);}
function HR(){var a=this;D.call(a);a.O=null;a.bY=0;}
function Bdw(){var a=new HR();X(a);return a;}
function Bc3(a){var b=new HR();HF(b,a);return b;}
function X(a){HF(a,16);}
function HF(a,b){a.O=$rt_createCharArray(b);}
function TG(a,b,c){return AME(a,a.bY,b,c);}
function AME(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)C3(a,b,b+1|0);else{C3(a,b,b+2|0);f=a.O.data;g=b+1|0;f[b]=45;b=g;}a.O.data[b]=I$(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Bj(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;C3(a,b,b+i|0);if(e)e=b;else{f=a.O.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.O.data;b=e+1|0;f[e]=I$(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function ADj(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)C3(a,b,b+1|0);else{C3(a,b,b+2|0);g=a.O.data;h=b+1|0;g[b]=45;b=h;}a.O.data[b]=I$(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;C3(a,b,b+i|0);if(e)i=b;else{g=a.O.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.O.data;b=i+1|0;g[i]=I$(Long_div(c,j).lo,d);c=Long_rem(c,j);j=Long_div(j,
f);i=b;}}}return a;}
function AOx(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=S(c,0.0);if(!d){C3(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C3(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C3(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C3(a,b,b+8|0);d=b;}else{C3(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdx;AOk(c,f);d=f.uA;g=f.uh;h=f.zn;i=1;j=1;if(h){h=1;j=2;}k=9;l=A02(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=DE(k,i+1|0);g=0;}else if(g<0){d=d/Bdy.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;C3(a,b,b+(j+k|0)|0);if(!h)h=b;else{e=a.O.data;h=b+
1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.O.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.O.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.O.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.O.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.O.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.O.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AKE(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=S(c,0.0);if(!d){C3(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=48;e=a.O.data;b=d+1|0;e[d]=46;a.O.data[b]=48;return a;}if(!d){C3(a,b,b+4|0);e=a.O.data;d=b+1|0;e[b]=45;e=a.O.data;b=d+1|0;e[d]=48;e=a.O.data;d=b+1|0;e[b]=46;a.O.data[d]=48;return a;}if(isNaN(c)?1:0){C3(a,b,b+3|0);e=a.O.data;d=b+1|0;e[b]=78;e=a.O.data;b=d+1|0;e[d]=97;a.O.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){C3(a,b,b+8|0);d=b;}else{C3(a,b,b+9|0);e=a.O.data;d=b+1|0;e[b]=45;}e=a.O.data;b=d+1|0;e[d]
=73;e=a.O.data;d=b+1|0;e[b]=110;e=a.O.data;b=d+1|0;e[d]=102;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=110;e=a.O.data;d=b+1|0;e[b]=105;e=a.O.data;b=d+1|0;e[d]=116;a.O.data[b]=121;return a;}f=Bdz;AB6(c,f);g=f.u5;h=f.t5;i=f.ze;j=1;k=1;if(i)k=2;l=18;d=AZJ(g);if(d>0)l=l-d|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=DE(l,j+1|0);h=0;}else if(h<0){g=Long_div(g,BdA.data[ -h]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;C3(a,b,b+(k+l|0)|
0);if(!i)i=b;else{e=a.O.data;i=b+1|0;e[b]=45;}m=new Long(1569325056, 23283064);n=0;while(n<l){if(Long_le(m,Long_ZERO))o=0;else{o=Long_div(g,m).lo;g=Long_rem(g,m);}e=a.O.data;b=i+1|0;e[i]=(48+o|0)&65535;j=j+(-1)|0;if(j)i=b;else{e=a.O.data;i=b+1|0;e[b]=46;}m=Long_div(m,Long_fromInt(10));n=n+1|0;}if(h){e=a.O.data;b=i+1|0;e[i]=69;if(h>=0)d=b;else{h= -h;e=a.O.data;d=b+1|0;e[b]=45;}if(h>=100){e=a.O.data;b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;e=a.O.data;j=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)j=d;else
{e=a.O.data;j=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}a.O.data[j]=(48+(h%10|0)|0)&65535;}return a;}
function A02(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AZJ(b){var c,d,e,f;c=Long_fromInt(1);d=0;e=16;f=BdB.data.length-1|0;while(f>=0){if(Long_eq(Long_rem(b,Long_mul(c,BdB.data[f])),Long_ZERO)){d=d|e;c=Long_mul(c,BdB.data[f]);}e=e>>>1;f=f+(-1)|0;}return d;}
function DQ(a,b){return a.yn(a.bY,b);}
function K6(a,b,c){C3(a,b,b+1|0);a.O.data[b]=c;return a;}
function M3(a,b){var c;if(a.O.data.length>=b)return;c=a.O.data.length>=1073741823?2147483647:DE(b,DE(a.O.data.length*2|0,5));a.O=Pc(a.O,c);}
function W(a){return Lo(a.O,0,a.bY);}
function I5(a,b,c,d){return a.xV(a.bY,b,c,d);}
function Kd(a,b,c,d,e){var f,g,h,i;C3(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.O.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Hm(a,b){return a.xn(b,0,b.data.length);}
function C3(a,b,c){var d,e;d=a.bY-b|0;a.nC((a.bY+c|0)-b|0);e=d-1|0;while(e>=0){a.O.data[c+e|0]=a.O.data[b+e|0];e=e+(-1)|0;}a.bY=a.bY+(c-b|0)|0;}
function IA(){}
function V(){HR.call(this);}
function BX(){var a=new V();A_p(a);return a;}
function A_p(a){X(a);}
function I(a,b){ND(a,a.bY,b);return a;}
function Bf(a,b){TG(a,b,10);return a;}
function C7(a,b){UU(a,a.bY,b);return a;}
function AWK(a,b){WT(a,a.bY,b);return a;}
function AKx(a,b){Qw(a,a.bY,b);return a;}
function AS_(a,b){DQ(a,b);return a;}
function AVg(a,b,c,d){I5(a,b,c,d);return a;}
function A94(a,b){Hm(a,b);return a;}
function FP(a,b){Xv(a,a.bY,b);return a;}
function UU(a,b,c){ADj(a,b,c,10);return a;}
function WT(a,b,c){AOx(a,b,c);return a;}
function Qw(a,b,c){AKE(a,b,c);return a;}
function A9n(a,b,c,d,e){Kd(a,b,c,d,e);return a;}
function Xv(a,b,c){ND(a,b,c===null?B(10):c.gk());return a;}
function AY4(a,b,c){K6(a,b,c);return a;}
function AGN(a,b,c){var d,e,f,g,h,i,j;d=S(b,c);if(d<=0&&b<=a.bY){if(d){e=a.bY-c|0;a.bY=a.bY-(c-b|0)|0;d=0;while(d<e){f=a.O.data;g=b+1|0;h=a.O.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new I6;P(j);M(j);}
function Su(a,b){var c,d,e,f;if(b>=0&&b<a.bY){a.bY=a.bY-1|0;while(b<a.bY){c=a.O.data;d=a.O.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new I6;P(f);M(f);}
function ND(a,b,c){var d,e,f;if(b>=0&&b<=a.bY){a:{if(c===null)c=B(10);else if(IE(c))break a;M3(a,a.bY+Bi(c)|0);d=a.bY-1|0;while(d>=b){a.O.data[d+Bi(c)|0]=a.O.data[d];d=d+(-1)|0;}a.bY=a.bY+Bi(c)|0;d=0;while(d<Bi(c)){e=a.O.data;f=b+1|0;e[b]=Ba(c,d);d=d+1|0;b=f;}}return a;}c=new I6;P(c);M(c);}
function ANo(a,b){a.bY=b;}
function AAG(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BT;Bo(f,B(16));M(f);}while(b<c){g=d.data;h=e+1|0;i=a.O.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function A66(a,b,c,d,e){Kd(a,b,c,d,e);return a;}
function AVy(a,b,c,d){I5(a,b,c,d);return a;}
function Kh(a){return a.bY;}
function BM(a){return W(a);}
function AXU(a,b){M3(a,b);}
function A7S(a,b,c){return Xv(a,b,c);}
function A7v(a,b,c){K6(a,b,c);return a;}
function A0K(a,b,c){return Qw(a,b,c);}
function A6i(a,b,c){return WT(a,b,c);}
function AUT(a,b,c){return UU(a,b,c);}
function A2Q(a,b,c){return ND(a,b,c);}
function Fc(){D.call(this);}
function Gj(){Fc.call(this);this.f5=0;}
var BdC=null;var BdD=null;function AQY(a){var b=new Gj();Lu(b,a);return b;}
function Lu(a,b){a.f5=b;}
function Li(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!IE(b)){a:{d=0;e=0;switch(Ba(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==Bi(b)){b=new EB;P(b);M(b);}while(e<Bi(b)){g=e+1|0;h=Up(Ba(b,e));if(h<0){i=new EB;j=new V;X(j);Bo(i,W(I(I(j,B(17)),b)));M(i);}if(h>=c){i=new EB;j=new V;X(j);Bo(i,W(I(I(Bf(I(j,B(18)),c),B(12)),b)));M(i);}f=Bj(c,f)+h|0;if(f<0){if(g==Bi(b)&&f==(-2147483648)&&d)return (-2147483648);i=new EB;j=new V;X(j);Bo(i,W(I(I(j,B(19)),b)));M(i);}e=g;}if(d)f= -f;return f;}b
=new EB;Bo(b,B(20));M(b);}i=new EB;b=new V;X(b);Bo(i,W(Bf(I(b,B(21)),c)));M(i);}
function CZ(b){var c;if(b>=(-128)&&b<=127){a:{if(BdD===null){BdD=J(Gj,256);c=0;while(true){if(c>=BdD.data.length)break a;BdD.data[c]=AQY(c-128|0);c=c+1|0;}}}return BdD.data[b+128|0];}return AQY(b);}
function A32(a){return a.f5;}
function MB(a){var b;b=a.f5;return TG(Bc3(20),b,10).gk();}
function A3f(a){return a.f5>>>4^a.f5<<28^a.f5<<8^a.f5>>>24;}
function A_y(a,b){if(a===b)return 1;return b instanceof Gj&&b.f5==a.f5?1:0;}
function AAH(a,b){return S(a.f5,b.f5);}
function TJ(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function JN(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function Ns(b,c){var d;d=c&31;return b<<d|b>>>(32-d|0);}
function A6$(a,b){return AAH(a,b);}
function AQs(){BdC=F($rt_intcls());}
function IY(){I_.call(this);}
function BdE(){var a=new IY();AXS(a);return a;}
function BdF(a){var b=new IY();Qi(b,a);return b;}
function AXS(a){P(a);}
function Qi(a,b){Bo(a,b);}
function AOZ(){IY.call(this);}
function BdG(){var a=new AOZ();AWX(a);return a;}
function BdH(a){var b=new AOZ();AUB(b,a);return b;}
function AWX(a){P(a);}
function AUB(a,b){Qi(a,b);}
function ALM(){IY.call(this);}
function BdI(){var a=new ALM();A3F(a);return a;}
function BdJ(a){var b=new ALM();AUW(b,a);return b;}
function A3F(a){P(a);}
function AUW(a,b){Qi(a,b);}
function BD(){CP.call(this);}
function BdK(){var a=new BD();AZU(a);return a;}
function AZU(a){P(a);}
function B6(){BD.call(this);}
function BdL(){var a=new B6();ATu(a);return a;}
function Z8(a){var b=new B6();A$3(b,a);return b;}
function ATu(a){P(a);}
function A$3(a,b){Bo(a,b);}
function Dc(){}
function Hi(){}
function UB(){}
function Qx(){}
function Vn(){}
function Rp(){}
function Ws(){}
function PF(){}
function Lp(){}
function YR(){D.call(this);}
function AYc(a,b,c){a.Xp($rt_str(b),JM(c,"handleEvent"));}
function AYr(a,b,c){a.UO($rt_str(b),JM(c,"handleEvent"));}
function ATQ(a,b){return a.HP(b);}
function AZh(a,b,c,d){a.KR($rt_str(b),JM(c,"handleEvent"),d?1:0);}
function A1O(a,b){return !!a.Xw(b);}
function AUO(a){return a.Jg();}
function AS9(a,b,c,d){a.NK($rt_str(b),JM(c,"handleEvent"),d?1:0);}
function Bq(){D.call(this);}
var BdM=0;var BdN=null;var BdO=null;var BdP=null;var BdQ=null;var BdR=null;var BdS=null;var BdT=null;var BdU=null;var BdV=null;var BdW=null;var BdX=null;var BdY=null;var BdZ=null;var Bd0=null;var Bd1=null;var Bd2=null;var Bd3=null;var Bd4=null;var Bd5=null;var Bd6=0;var Bd7=0;var Bd8=0.0;var Bd9=0.0;var Bd$=0;var Bd_=0;var Bea=0;var Beb=0;var Bec=0;var Bed=null;var Bee=null;var Bef=null;var Beg=null;var Beh=null;var Bei=0;var Bej=null;var Bek=null;var Bel=null;var Bem=null;var Ben=null;var Beo=null;var Bep=
Long_ZERO;var Beq=0;var Ber=0;var Bes=0;var Bet=null;var Beu=null;var Bev=null;var Bew=0;var Bex=0;var Bey=0;var Bez=null;var BeA=null;var BeB=null;var BeC=0;var BeD=null;var BeE=null;var BeF=0.0;var BeG=null;var BeH=0;var BeI=null;var BeJ=null;var BeK=0;var BeL=null;var BeM=0;var BeN=null;var BeO=0;function Be(){Be=Bs(Bq);ATU();}
function BeP(){var a=new Bq();V1(a);return a;}
function V1(a){Be();}
function PO(){Be();return B(22);}
function Kn(b){Be();if(IF(b,B(23)))b=JC(b,1);return CQ(BeQ,b);}
function ACh(b){var c;Be();c=Kn(b);if(c===null)return null;return A3d(c,Yc(B(24)));}
function ALt(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gw=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaT(callback);return thread.suspend(function(){try{A3y(b,callback);}catch($e){callback.I4($rt_exception($e));}});}
function A3y(b,c){var d,e;Be();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new Xd;b.vr=d;b.Af=c;b=Cu(b,"stateChanged");d.onreadystatechange=b;d.send();}
function AAx(b,c){var d,e,f,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();BdO=b;d=$rt_str(BdO.getAttribute("style"));e=BdO;f=new V;X(f);if(d===null)d=B(3);d=W(I(I(f,d),B(25)));e.setAttribute("style",$rt_ustr(d));BdT=window;BdN=BdT.document;BdP=BdN.createElement("canvas");Bd$=b.clientWidth;Bd_=b.clientHeight;f=BdP;e=Bd$;f.width=e;f=BdP;e=Bd_;f.height=e;BdQ=BdP.getContext("2d");BdP.setAttribute("id","deevis589723589");f=BdP;b.appendChild(f);BdR
=BdN.createElement("canvas");b=BdR;f=Bd$;b.width=f;b=BdR;f=Bd_;b.height=f;b=BdR;e=AR2();BdS=b.getContext("webgl2",e);if(BdS===null){b=new B6;c=new V;X(c);Bo(b,W(I(I(I(c,B(26)),$rt_str(window.navigator.userAgent)),B(27))));M(b);}AO3(BdS);BdS.getExtension("EXT_texture_filter_anisotropic");b=BdT;e=new Xe;BdV=e;b.addEventListener("contextmenu",Cu(e,"handleEvent"));b=BdP;e=new Xk;BdW=e;b.addEventListener("mousedown",Cu(e,"handleEvent"));b=BdP;e=new Xl;BdX=e;b.addEventListener("mouseup",Cu(e,"handleEvent"));b=BdP;e
=new Xi;BdY=e;b.addEventListener("mousemove",Cu(e,"handleEvent"));b=BdT;e=new Xj;BdZ=e;b.addEventListener("keydown",Cu(e,"handleEvent"));b=BdT;e=new Xg;Bd0=e;b.addEventListener("keyup",Cu(e,"handleEvent"));b=BdT;e=new Xh;Bd1=e;b.addEventListener("keypress",Cu(e,"handleEvent"));b=BdP;e=new Xf;Bd2=e;b.addEventListener("wheel",Cu(e,"handleEvent"));b=BdT;e=new QF;b.addEventListener("blur",Cu(e,"handleEvent"));b=BdT;e=new QE;b.addEventListener("focus",Cu(e,"handleEvent"));AFn();$p=1;case 1:AJV();if(C()){break _;}$p
=2;case 2:ALt(c);if(C()){break _;}a:{try{AMi(BdU);break a;}catch($$e){$$je=Q($$e);if($$je instanceof BL){f=$$je;}else{throw $$e;}}B9(f);}BeE=AYz();OB(Bd4);OB(Bd5);return;default:Fa();}}C4().s(b,c,d,e,f,$p);}
function K9(b){Be();BdS.enable(b);}
function J_(b){Be();BdS.disable(b);}
function AH7(){var b,c;Be();b=new V_;b.iZ=BdS.createProgram();c=Bec+1|0;Bec=c;b.xp=c;return b;}
function OL(b){var c;Be();c=new Wd;c.jq=BdS.createShader(b);return c;}
function Sk(b,c){var d;Be();d=BdS;b=b.iZ;c=c.jq;d.attachShader(b,c);}
function UV(b,c){var d;Be();d=BdS;b=b.iZ;c=c.jq;d.detachShader(b,c);}
function WN(b){var c;Be();c=BdS;b=b.jq;c.compileShader(b);}
function AAM(b){var c;Be();c=BdS;b=b.iZ;c.linkProgram(b);}
function O8(b,c){var d;Be();d=BdS;b=b.jq;d.shaderSource(b,$rt_ustr(c));}
function Uk(b){var c;Be();c=BdS;b=b.jq;return $rt_str(c.getShaderInfoLog(b));}
function AHA(b){var c;Be();c=BdS;b=b.iZ;return $rt_str(c.getProgramInfoLog(b));}
function Vq(b){var c;Be();c=BdS;b=b.jq;return c.getShaderParameter(b,35713)!=1?0:1;}
function AGs(b){var c;Be();c=BdS;b=b.iZ;return c.getProgramParameter(b,35714)!=1?0:1;}
function Tr(b){var c;Be();c=BdS;b=b.jq;c.deleteShader(b);}
function L_(){var b;Be();b=new Wk;b.D3=BdS.createBuffer();return b;}
function Hh(b,c){var d;Be();d=BdS;c=c!==null?c.D3:null;d.bindBuffer(b,c);}
function PJ(b,c,d){var e;Be();e=BdS;c=c;e.bufferData(b,c,d);}
function Ob(b){Be();BdS.enableVertexAttribArray(b);}
function Dq(b,c){var d;Be();d=BdS;b=b.iZ;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new Xp;b.kz=d;}return b;}
function LZ(b,c,d){var e;Be();e=BdS;b=b.iZ;e.bindAttribLocation(b,c,$rt_ustr(d));}
function Ik(b,c){var d;Be();if(b!==null){d=BdS;b=b.kz;d.uniform1f(b,c);}}
function Ls(b,c,d,e){var f;Be();if(b!==null){f=BdS;b=b.kz;f.uniform3f(b,c,d,e);}}
function Uu(b,c,d,e,f){var g,h;Be();if(b!==null){g=BdS;h=b.kz;g.uniform4f(h,c,d,e,f);}}
function Rf(b,c){var d;Be();if(b!==null){d=BdS;b=b.kz;d.uniform1i(b,c);}}
function Mk(b,c){var d,e;Be();Beh.set(c.data);if(b!==null){d=BdS;e=b.kz;b=Beh;d.uniformMatrix4fv(e,!!0,b);}}
function V9(b){var c;Be();if(b!==null&&Bei!=b.xp){Bei=b.xp;c=BdS;b=b.iZ;c.useProgram(b);}}
function Od(b,c,d,e,f,g){Be();BdS.vertexAttribPointer(b,c,d,!!e,f,g);}
function Pg(){var b;Be();b=new SK;b.A6=BdS.createVertexArray();b.vT=0;return b;}
function R0(b){var c;Be();c=BdS;b=b!==null?b.A6:null;c.bindVertexArray(b);}
function AEZ(b){var c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=AIA(c);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(b,c,$p);}
function AIA(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gw=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaT(callback);return thread.suspend(function(){try{AW0(b,callback);}catch($e){callback.I4($rt_exception($e));}});}
function AW0(b,c){var d,e,f;Be();d=BdN.createElement("img");e=new QI;e.f1=d;e.yd=c;d.addEventListener("load",Cu(e,"handleEvent"));f=new QH;f.Ep=d;f.E7=c;d.addEventListener("error",Cu(f,"handleEvent"));e=$rt_str(ANE(b,"image/png"));if(e===null)CM(c,null);else{b=$rt_ustr(e);d.src=b;}}
function Lv(){var b,c,d;Be();b=BdO.clientWidth;if(b!=Bd$){c=BdP;d=b;c.width=d;c=BdR;d=b;c.width=d;Bd$=b;}return b;}
function MH(){var b,c,d;Be();b=BdO.clientHeight;if(b!=Bd_){c=BdP;d=b;c.height=d;c=BdR;d=b;c.height=d;Bd_=b;}return b;}
function KD(){Be();return Long_fromInt(1073741824);}
function J7(){Be();return Long_fromInt(1073741824);}
function Kk(){Be();return Long_ZERO;}
function UR(b){Be();return b.byteLength;}
function Ub(b){Be();return b<=BeJ.data.length&&b>=0?BeJ.data[b]:(-1);}
function AJp(b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();if(d){$p=1;continue _;}BQ(BeN,b,c);BeO=BeO+1|0;if(!(BeO<5&&!d&&Bdi.f!==null)){b=TW(WC(BeN));if(EL(b)){e=JJ(b);f=e.eS;g=e.d9;$p=2;continue _;}BeO=0;}return;case 1:ABm(b,c);if(C()){break _;}if(!(BeO<5&&!d&&Bdi.f!==null)){b=TW(WC(BeN));if(EL(b)){e=JJ(b);f=e.eS;g=e.d9;$p=2;continue _;}BeO=0;}return;case 2:ABm(f,g);if(C()){break _;}if(!EL(b)){BeO=0;return;}e
=JJ(b);f=e.eS;g=e.d9;continue _;default:Fa();}}C4().s(b,c,d,e,f,g,$p);}
function ALN(b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();c=BeR;$p=1;case 1:$z=A_U(c,b);if(C()){break _;}b=$z;if(b===null)d=null;else{d=$rt_createByteArray(b.byteLength);e=d.data;b=new Uint8Array(b);f=0;g=e.length;while(f<g){e[f]=b[f]<<24>>24;f=f+1|0;}}return d;default:Fa();}}C4().s(b,c,d,e,f,g,$p);}
function ANu(b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();d=BeR;$p=1;case 1:$z=A_U(d,b);if(C()){break _;}d=$z;e=LL(c,47);if(e<=0){f=BeR;e=0;$p=2;continue _;}f=Ex(c,0,e);$p=4;continue _;case 2:AXZ(f,c,e,d);if(C()){break _;}c=BeR;$p=3;case 3:A5G(c,b);if(C()){break _;}return;case 4:AJh(f);if(C()){break _;}f=BeR;e=0;$p=2;continue _;default:Fa();}}C4().s(b,c,d,e,f,$p);}
function AL_(b){var c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();c=BeR;$p=1;case 1:A5G(c,b);if(C()){break _;}return;default:Fa();}}C4().s(b,c,$p);}
function Wf(){Be();return BdU;}
function RU(){Be();return Ben;}
function MS(){Be();return Bd4;}
function Mw(){Be();if(Long_gt(Long_sub(B_(),Bep),Long_fromInt(3000))&&Ber&&!(document.pointerLockElement!=null?1:0)){BdP.requestPointerLock();if(document.pointerLockElement!=null?1:0)Ber=0;}}
function P9(){Be();return Beo;}
function QJ(b){Be();return b.which;}
function Te(b){Be();return Ub(b);}
function NR(){Be();return Bd5;}
function S4(b){Be();Beb=b;return b;}
function Ho(){Be();return Bej;}
function JZ(){Be();return Bek;}
function WP(b){Be();URL.revokeObjectURL($rt_ustr(b));}
function VZ(){Be();return Beq;}
function M1(b){Be();Beq=b;return b;}
function P5(){Be();return Bep;}
function ATU(){var b,c;BdM=0;BdN=null;BdO=null;BdP=null;BdQ=null;BdR=null;BdS=null;BdT=null;BdU=null;BdV=null;BdW=null;BdX=null;BdY=null;BdZ=null;Bd0=null;Bd1=null;Bd2=null;Bd3=J(B4,0);Bd4=Q2();Bd5=Q2();Bd6=0;Bd7=0;Bd8=0.0;Bd9=0.0;Bd$=0;Bd_=0;Bea=0;Beb=1;Bec=0;Bed=$rt_createIntArray(4);Bee=new Uint8Array(new ArrayBuffer(4194304));Bef=new Float32Array(4);Beg=new Float32Array(9);Beh=new Float32Array(16);Bei=(-1);Bej=null;Bek=null;Bel=null;Bem=null;Ben=$rt_createBooleanArray(8);Beo=$rt_createBooleanArray(256);Bep
=Long_ZERO;Beq=0;Ber=0;Bes=0;Bet=Gb();Beu=Gb();Bev=null;Bew=0;Bex=0;Bey=0;Bez=Q2();BeA=null;BeB=null;BeC=0;BeD=C8();BeE=null;BeF=0.029999999329447746;BeG=C8();BeH=0;b=J(B4,256);c=b.data;c[0]=B(28);c[1]=B(29);c[2]=B(30);c[3]=B(31);c[4]=B(32);c[5]=B(33);c[6]=B(34);c[7]=B(35);c[8]=B(36);c[9]=B(37);c[10]=B(38);c[11]=B(2);c[12]=B(39);c[13]=B(40);c[14]=B(41);c[15]=B(42);c[16]=B(43);c[17]=B(44);c[18]=B(45);c[19]=B(46);c[20]=B(47);c[21]=B(48);c[22]=B(49);c[23]=B(50);c[24]=B(51);c[25]=B(52);c[26]=B(53);c[27]=B(54);c[28]
=B(55);c[29]=B(56);c[30]=B(57);c[31]=B(58);c[32]=B(59);c[33]=B(60);c[34]=B(61);c[35]=B(62);c[36]=B(63);c[37]=B(64);c[38]=B(65);c[39]=B(66);c[40]=B(67);c[41]=B(68);c[42]=B(69);c[43]=B(70);c[44]=B(71);c[45]=B(72);c[46]=B(73);c[47]=B(74);c[48]=B(75);c[49]=B(76);c[50]=B(77);c[51]=B(78);c[52]=B(79);c[53]=B(80);c[54]=B(81);c[55]=B(82);c[56]=B(83);c[57]=B(84);c[58]=B(85);c[59]=B(86);c[60]=B(87);c[61]=B(88);c[62]=B(89);c[63]=B(90);c[64]=B(91);c[65]=B(92);c[66]=B(93);c[67]=B(94);c[68]=B(95);c[69]=B(96);c[70]=B(97);c[71]
=B(98);c[72]=B(99);c[73]=B(100);c[74]=B(101);c[75]=B(102);c[76]=B(103);c[77]=B(104);c[78]=B(105);c[79]=B(106);c[80]=B(107);c[81]=B(108);c[82]=B(109);c[83]=B(110);c[84]=B(10);c[85]=B(10);c[86]=B(10);c[87]=B(111);c[88]=B(112);c[89]=B(10);c[90]=B(10);c[91]=B(10);c[92]=B(10);c[93]=B(10);c[94]=B(10);c[95]=B(10);c[96]=B(10);c[97]=B(10);c[98]=B(10);c[99]=B(10);c[100]=B(113);c[101]=B(114);c[102]=B(115);c[103]=B(116);c[104]=B(117);c[105]=B(118);c[106]=B(10);c[107]=B(10);c[108]=B(10);c[109]=B(10);c[110]=B(10);c[111]=
B(10);c[112]=B(119);c[113]=B(120);c[114]=B(10);c[115]=B(10);c[116]=B(10);c[117]=B(10);c[118]=B(10);c[119]=B(10);c[120]=B(10);c[121]=B(121);c[122]=B(10);c[123]=B(122);c[124]=B(10);c[125]=B(123);c[126]=B(10);c[127]=B(10);c[128]=B(10);c[129]=B(10);c[130]=B(10);c[131]=B(10);c[132]=B(10);c[133]=B(10);c[134]=B(10);c[135]=B(10);c[136]=B(10);c[137]=B(10);c[138]=B(10);c[139]=B(10);c[140]=B(10);c[141]=B(124);c[142]=B(10);c[143]=B(10);c[144]=B(125);c[145]=B(126);c[146]=B(127);c[147]=B(128);c[148]=B(129);c[149]=B(130);c[150]
=B(131);c[151]=B(132);c[152]=B(10);c[153]=B(10);c[154]=B(10);c[155]=B(10);c[156]=B(133);c[157]=B(134);c[158]=B(10);c[159]=B(10);c[160]=B(10);c[161]=B(10);c[162]=B(10);c[163]=B(10);c[164]=B(10);c[165]=B(10);c[166]=B(10);c[167]=B(135);c[168]=B(10);c[169]=B(10);c[170]=B(10);c[171]=B(10);c[172]=B(10);c[173]=B(10);c[174]=B(10);c[175]=B(10);c[176]=B(10);c[177]=B(10);c[178]=B(10);c[179]=B(136);c[180]=B(10);c[181]=B(137);c[182]=B(10);c[183]=B(138);c[184]=B(139);c[185]=B(10);c[186]=B(10);c[187]=B(10);c[188]=B(10);c[189]
=B(10);c[190]=B(10);c[191]=B(10);c[192]=B(10);c[193]=B(10);c[194]=B(10);c[195]=B(10);c[196]=B(140);c[197]=B(141);c[198]=B(10);c[199]=B(142);c[200]=B(143);c[201]=B(144);c[202]=B(10);c[203]=B(145);c[204]=B(10);c[205]=B(146);c[206]=B(10);c[207]=B(147);c[208]=B(148);c[209]=B(149);c[210]=B(150);c[211]=B(151);c[212]=B(10);c[213]=B(10);c[214]=B(10);c[215]=B(10);c[216]=B(10);c[217]=B(10);c[218]=B(152);c[219]=B(153);c[220]=B(154);c[221]=B(155);c[222]=B(156);c[223]=B(157);c[224]=B(10);c[225]=B(10);c[226]=B(10);c[227]
=B(10);c[228]=B(10);c[229]=B(10);c[230]=B(10);c[231]=B(10);c[232]=B(10);c[233]=B(10);c[234]=B(10);c[235]=B(10);c[236]=B(10);c[237]=B(10);c[238]=B(10);c[239]=B(10);c[240]=B(10);c[241]=B(10);c[242]=B(10);c[243]=B(10);c[244]=B(10);c[245]=B(10);c[246]=B(10);c[247]=B(10);c[248]=B(10);c[249]=B(10);c[250]=B(10);c[251]=B(10);c[252]=B(10);c[253]=B(10);c[254]=B(10);c[255]=B(10);BeI=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=14;c[9]=15;c[10]
=(-1);c[11]=(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]
=(-1);c[63]=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]=52;c[111]=53;c[112]=(-1);c[113]
=(-1);c[114]=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]=(-1);c[154]=(-1);c[155]=(-1);c[156]
=(-1);c[157]=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]=(-1);c[198]=(-1);c[199]=(-1);c[200]
=(-1);c[201]=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;BeJ=b;BeK=0;BeL=new Int32Array(new ArrayBuffer(2100000));BeM=0;BeN=C8();}
function AO3(b){window.currentContext=b;}
function AFn(){if (!AFn.$native){
AFn.$native=function(){return (function(){window.eagsFileChooser = {
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
};})();};AFn=AFn.$native;}return AFn();}
function AR2(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function ANE(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function AB4(b){if(b.commit)b.commit();}
function S5(){}
function JL(){}
function N4(){}
function HG(){D.call(this);this.wf=null;}
function BeS(a){var b=new HG();Wn(b,a);return b;}
function Wn(a,b){if(b!==null){a.wf=b;return;}b=new E5;P(b);M(b);}
function ABp(){HG.call(this);this.x3=null;}
function A9i(){var a=new ABp();A2$(a);return a;}
function A2$(a){var b;a.wf=a;b=new Ll;HF(b,16);a.x3=b;a.wf=a.x3;}
function ALc(a){return;}
function AEE(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;I5(a.x3,b,c,d);return;}}f=new BT;P(f);M(f);}
function Ly(){var a=this;HG.call(a);a.mE=null;a.FW=0;a.yk=0;}
function AFD(a){var $$je;a:{if(a.mE===null)Km(a);else{try{ALc(a.mE);break a;}catch($$e){$$je=Q($$e);if($$je instanceof BL){}else{throw $$e;}}Km(a);}}}
function Hq(a,b){if(b===null)b=UA(null);Yz(a,b);}
function SY(a){Hq(a,B(158));if(a.yk)AFD(a);}
function AAK(a,b){ABY(a,UA(b));}
function ABY(a,b){Hq(a,b);SY(a);}
function Km(a){a.FW=1;}
function AR8(a,b){AAt(a,b,0,b.data.length);}
function AAt(a,b,c,d){var $$je;a:{if(a.mE===null)Km(a);else{try{AEE(a.mE,b,c,d);break a;}catch($$e){$$je=Q($$e);if($$je instanceof BL){}else{throw $$e;}}Km(a);}}}
function Yz(a,b){AR8(a,Nz(b));}
function AFh(){D.call(this);}
function BeT(){var a=new AFh();AWe(a);return a;}
function AWe(a){return;}
function AFV(){D.call(this);}
function L3(){}
function It(){var a=this;D.call(a);a.cB=null;a.cq=0;a.bF=0;a.bf=null;a.A=null;a.dY=null;a.f=null;a.c6=null;a.k2=null;a.bs=0;a.bo=null;a.fa=null;a.D=null;a.ir=null;a.eX=null;a.bN=0;a.c$=0;a.Ho=null;a.F6=0;a.n0=null;a.h7=0;a.GB=null;a.ce=null;a.o=null;a.yo=null;a.Dc=null;a.BK=null;a.gS=0;a.lD=null;a.gT=Long_ZERO;a.bp=0;a.cn=0;a.cU=0;a.dB=Long_ZERO;}
var BeU=null;var BeV=0;var Bdi=null;function AIt(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.o=Baj(a);a.bo=Bah();b=new Wp;c=a.o;d=B(159);e=a.bo;$p=1;case 1:AON(b,c,d,e);if(C()){break _;}a.fa=b;$p=2;case 2:Yw(a);if(C()){break _;}a.yo=new Qr;Ei(a,B(160));Bb(3553);Be();BdS.clearDepth((-1.0));Bb(2929);HO(515);Bb(3008);SF(516,0.10000000149011612);BdS.cullFace(1029);Db(5889);C_();Db(5888);Ei(a,B(161));G9(a.bo,a.BK);G9(a.bo,
a.Dc);G9(a.bo,BaH());G9(a.bo,BcO());G9(a.bo,AVP(0));G9(a.bo,AVP(1));a.dY=Ba6(a,a.bo);Hk(0,0,a.cq,a.bF);e=Bdi;d=LR();b=B(162);c=B(163);$p=3;case 3:AR7(e,d,b,c);if(C()){break _;}d=new O7;b=a.A;c=a.bo;d.cD=J(Ka,3);d.sw=new DB;if(b!==null)d.mX=b;d.je=c;f=0;while(f<3){d.cD.data[f]=Ci();f=f+1|0;}a.c6=d;Ei(a,B(164));d=new Nw;Nj(d);d.g6=Ci();d.vv=new DB;d.F1=null;d.rY=0;d.IO=1.0;d.b2=a;a.n0=d;return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function Yw(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=FL(a.cq,a.bF);c=b.fM;d=b.fJ;D5(16640);Db(5889);C_();Iu(0.0,c,d,0.0,1000.0,3000.0);Db(5888);C_();Bw(0.0,0.0,(-2000.0));Hk(0,0,a.cq,a.bF);HE(0.0,0.0,0.0,0.0);Bd(2896);Bd(2912);Bb(3553);BA();e=BeW;f=3553;b=a.bo;g=B(165);$p=1;case 1:$z=AHz(b,g);if(C()){break _;}d=$z;Cp(f,d);BU(1.0,1.0,1.0,1.0);Bz(e);ES(e,4210752);G(e,0.0,a.bF,0.0,0.0,a.bF/32.0
+0.0);G(e,a.cq,a.bF,0.0,a.cq/32.0,a.bF/32.0+0.0);G(e,a.cq,0.0,0.0,a.cq/32.0,0.0);G(e,0.0,0.0,0.0,0.0,0.0);Bt(e);Bb(3008);SF(516,0.10000000149011612);Cy(a.fa,B(166),8,(a.bF/2|0)-16|0,(-1));return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AD1(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D instanceof RE)return;if(a.D!==null){c=a.D;$p=1;continue _;}if(b===null&&a.A===null)b=LR();else if(b===null&&a.f.bT<=0){b=new Mq;DR(b);}a.D=b;if(b===null){$p=2;continue _;}W_(a);c=FL(a.cq,a.bF);d=c.fM;e=c.fJ;$p=3;continue _;case 1:c.pw();if(C()){break _;}if(b===null&&a.A===null)b=LR();else if(b===null&&a.f.bT<=0){b=new Mq;DR(b);}a.D=b;if(b===null){$p=2;continue _;}W_(a);c
=FL(a.cq,a.bF);d=c.fM;e=c.fJ;$p=3;continue _;case 2:AFo(a);if(C()){break _;}return;case 3:AQe(b,a,d,e);if(C()){break _;}a.h7=0;return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AR7(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=new US;DR(e);e.qx=Ci();e.Ex=b;e.AC=c;e.AB=d;$p=1;case 1:AD1(a,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function Ei(a,b){var c,d,e,f;BW();Be();c=BdS.getError();if(c==(-144))c=(-144);if(c){a:{switch(c){case -144:break;case 1280:d=B(167);break a;case 1281:d=B(168);break a;case 1282:d=B(169);break a;case 1285:d=B(170);break a;default:d=B(171);break a;}d=B(172);}Cg(Dz(),B(173));e=Dz();f=new V;X(f);Cg(e,W(I(I(f,B(174)),b)));b=Dz();e=new V;X(e);Cg(b,W(I(I(Bf(e,c),B(12)),d)));}}
function Yq(a){var b,c,d,e,f,g,h,i,j,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.gS=1;$p=1;case 1:AIt(a);if(C()){break _;}b=B_();c=0;if(!a.gS)return;BeX=0;BeY=0;if(!a.bs)FR(a.bf);else{d=a.bf.cY;FR(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i6){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Bb(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GR(a.cB,a.bf.cY);f=a.eX;d=a.bf.cY;$p
=4;continue _;}if(BO(33)&&BO(7))F0(a);else a.gT=EH();$p=5;continue _;case 2:AFH(a);if(C()){break _;}e=e+1|0;if(e<a.bf.i6){a.bN=a.bN+1|0;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Bb(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GR(a.cB,a.bf.cY);f=a.eX;d=a.bf.cY;$p=4;continue _;}if(BO(33)&&BO(7))F0(a);else a.gT=EH();$p=5;continue _;case 3:$z=AIq(f);if(C()){break _;}g=$z;if(g){f=a.A;continue _;}if(!a.h7){GR(a.cB,a.bf.cY);f=a.eX;d=a.bf.cY;$p=4;continue _;}if(BO(33)&&BO(7))F0(a);else a.gT=EH();$p=5;continue _;case 4:AFS(f,
d);if(C()){break _;}if(BO(33)&&BO(7))F0(a);else a.gT=EH();$p=5;case 5:XK();if(C()){break _;}$p=6;case 6:AU5();if(C()){break _;}if(!(Lv()==a.cq&&MH()==a.bF)){a.cq=BdP.width;a.bF=BdP.height;if(a.cq<=0)a.cq=1;if(a.bF<=0)a.bF=1;g=a.cq;h=a.bF;if(g<=0)g=1;if(h<=0)h=1;a.cq=g;a.bF=h;if(a.D!==null){f=FL(g,h);h=f.fM;g=f.fJ;f=a.D;$p=8;continue _;}}if(a.o.mv){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof E2){f=$$je;}else{throw $$e;}}f.nD();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oc()
?1:0;while(true){j=B_();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new V;X(f);f=I(Bf(f,c),B(177));TB();a.lD=W(I(Bf(f,BeZ),B(178)));BeZ=0;c=0;b=i;}if(!a.gS)return;BeX=0;BeY=0;if(!a.bs)FR(a.bf);else{d=a.bf.cY;FR(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i6){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Bb(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GR(a.cB,a.bf.cY);f=a.eX;d=a.bf.cY;$p=4;continue _;}if(BO(33)&&BO(7))F0(a);else a.gT=EH();$p=5;continue _;case 7:a:{try{AKL(i);if(C())
{break _;}break a;}catch($$e){$$je=Q($$e);if($$je instanceof E2){f=$$je;}else{throw $$e;}}f.nD();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oc()?1:0;while(true){j=B_();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new V;X(f);f=I(Bf(f,c),B(177));TB();a.lD=W(I(Bf(f,BeZ),B(178)));BeZ=0;c=0;b=i;}if(!a.gS)return;BeX=0;BeY=0;if(!a.bs)FR(a.bf);else{d=a.bf.cY;FR(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i6){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Bb(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if
(!a.h7){GR(a.cB,a.bf.cY);f=a.eX;d=a.bf.cY;$p=4;continue _;}if(BO(33)&&BO(7))F0(a);else a.gT=EH();$p=5;continue _;case 8:AQe(f,a,h,g);if(C()){break _;}if(a.o.mv){try{i=Long_fromInt(5);$p=7;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof E2){f=$$je;}else{throw $$e;}}f.nD();}Ei(a,B(176));c=c+1|0;a.bs=a.D!==null&&a.D.oc()?1:0;while(true){j=B_();i=Long_add(b,Long_fromInt(1000));if(Long_lt(j,i))break;f=new V;X(f);f=I(Bf(f,c),B(177));TB();a.lD=W(I(Bf(f,BeZ),B(178)));BeZ=0;c=0;b=i;}if(!a.gS)return;BeX=0;BeY=0;if
(!a.bs)FR(a.bf);else{d=a.bf.cY;FR(a.bf);a.bf.cY=d;}e=0;if(e<a.bf.i6){a.bN=a.bN+1|0;$p=2;continue _;}Ei(a,B(175));if(a.bs)a.bf.cY=1.0;Bb(3553);if(a.A!==null){f=a.A;$p=3;continue _;}if(!a.h7){GR(a.cB,a.bf.cY);f=a.eX;d=a.bf.cY;$p=4;continue _;}if(BO(33)&&BO(7))F0(a);else a.gT=EH();$p=5;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function F0(a){var b,c,d,e,f,g,h,i,j,k,l;if(Long_eq(a.gT,Long_fromInt(-1)))a.gT=EH();b=EH();c=BeU.data;d=BeV;BeV=d+1|0;c[d&(BeU.data.length-1|0)]=Long_sub(b,a.gT);a.gT=b;D5(256);Db(5889);C_();Iu(0.0,a.cq,a.bF,0.0,1000.0,3000.0);Db(5888);C_();Bw(0.0,0.0,(-2000.0));Bd(3553);BA();e=BeW;Gl(e,7);ES(e,538968064);Bg(e,0.0,a.bF-100|0,0.0);Bg(e,0.0,a.bF,0.0);Bg(e,BeU.data.length,a.bF,0.0);Bg(e,BeU.data.length,a.bF-100|0,0.0);Bt(e);f=Long_ZERO;d=0;while(d<BeU.data.length){f=Long_add(f,BeU.data[d]);d=d+1|0;}d=Long_div(Long_div(f,
Long_fromInt(200000)),Long_fromInt(BeU.data.length)).lo;Gl(e,7);ES(e,541065216);Bg(e,0.0,a.bF-d|0,0.0);Bg(e,0.0,a.bF,0.0);Bg(e,BeU.data.length,a.bF,0.0);Bg(e,BeU.data.length,a.bF-d|0,0.0);Bt(e);Gl(e,1);g=0;while(g<BeU.data.length){h=(((g-BeV|0)&(BeU.data.length-1|0))*255|0)/BeU.data.length|0;i=Bj(h,h)/255|0;d=Bj(i,i)/255|0;j=Bj(d,d)/255|0;ES(e,(((-16777216)+(Bj(j,j)/255|0)|0)+(d*256|0)|0)+(h*4096|0)|0);k=Long_div(BeU.data[g],Long_fromInt(200000));l=g+0.5;Bg(e,l,Long_toNumber(Long_sub(Long_fromInt(a.bF),k))+
0.5,0.0);Bg(e,l,a.bF+0.5,0.0);g=g+1|0;}Bt(e);Bb(3553);}
function AFo(a){var b,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(On()&&!a.bp){a.bp=1;YH(a.yo);b=null;$p=1;continue _;}return;case 1:AD1(a,b);if(C()){break _;}a.cn=a.bN+10000|0;return;default:Fa();}}C4().s(a,b,$p);}
function W_(a){if(a.bp){if(a.f!==null)ARP(a.f);a.bp=0;AFF(a.yo);}}
function ALh(a){var b,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.D!==null)return;b=BcC();$p=1;case 1:AD1(a,b);if(C()){break _;}return;default:Fa();}}C4().s(a,b,$p);}
function AAN(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.cB.DZ&&!(!b&&a.c$>0)){if(c&&a.ce!==null&&!a.ce.k$&&!b){d=a.ce.h9;e=a.ce.h$;f=a.ce.h_;g=a.cB;b=a.ce.hJ;$p=1;continue _;}ALY(a.cB);}return;case 1:YU(g,d,e,f,b);if(C()){break _;}g=a.c6;b=a.ce.hJ;$p=2;case 2:Y9(g,d,e,f,b);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AB$(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(!b&&a.c$>0)){if(!b)Ps(a.eX.iK);a:{if(a.ce!==null){if(a.ce.k$!=1){if(a.ce.k$)break a;c=a.ce.h9;d=a.ce.h$;e=a.ce.h_;f=a.ce.hJ;L();g=Be0.data;h=a.A;$p=1;continue _;}if(!b){h=a.f;i=a.ce.nE;$p=2;continue _;}if(b==1)VA(a.f,a.ce.nE);}else if(!b&&!(a.cB instanceof Dv))a.c$=10;}if
(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=a.f;$p=5;continue _;}}}return;case 1:$z=ACE(h,c,d,e);if(C()){break _;}k=$z;j=g[k];if(!b){h=a.A;k=a.ce.hJ;$p=4;continue _;}l=D9(a.f.K);h=a.A;$p=3;continue _;case 2:ADC(h,i);if(C()){break _;}if(b==1)VA(a.f,a.ce.nE);if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=a.f;$p=5;continue _;}}return;case 3:$z=ACE(h,c,d,e);if(C()){break _;}k=$z;if(k>0){h=Be0.data[k];i=a.A;j=a.f;$p=6;continue _;}if(l===null)return;m=l.p;h=a.f;i=a.A;$p=8;continue _;case 4:ABS(h,c,d,e,k);if(C())
{break _;}if(j===Be1&&a.f.AO<100){if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=a.f;$p=5;continue _;}}return;}h=a.cB;$p=7;continue _;case 5:b:{$z=ABn(h,i,j);if(C()){break _;}i=$z;if(i===h){if(i===null)break b;if(i.p==d)break b;}a.f.K.bh.data[a.f.K.bL]=i;ANe(a.eX.iK);if(!i.p)a.f.K.bh.data[a.f.K.bL]=null;}return;case 6:$z=h.lG(i,c,d,e,j);if(C()){break _;}k=$z;if(k)return;if(l===null)return;m=l.p;h=a.f;i=a.A;$p=8;continue _;case 7:AE9(h,c,d,e);if(C()){break _;}if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=
a.f;$p=5;continue _;}}return;case 8:$z=AJn(l,h,i,c,d,e,f);if(C()){break _;}c=$z;if(c)Ps(a.eX.iK);if(!l.p)a.f.K.bh.data[a.f.K.bL]=null;else if(l.p!=m)AGQ(a.eX.iK);if(b==1){h=D9(a.f.K);if(h!==null){d=h.p;i=a.A;j=a.f;$p=5;continue _;}}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AHQ(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ce===null)return;b=a.A;c=a.ce.h9;d=a.ce.h$;e=a.ce.h_;$p=1;case 1:$z=ACE(b,c,d,e);if(C()){break _;}c=$z;L();if(c==Be2.b)c=Be3.b;if(c==Be4.b)c=Be5.b;if(c==Be1.b)c=Be6.b;ARq(a.f.K,c,a.cB instanceof Dv);return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AFH(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AKF(a.n0);if(a.f!==null&&a.A!==null){b=ABy(a.A);if(b instanceof IN)MZ(b,EY(a.f.d|0)>>4,EY(a.f.e|0)>>4);}if(!a.bs&&a.A!==null){b=a.cB;$p=2;continue _;}c=3553;d=a.bo;b=B(179);$p=1;case 1:$z=AHz(d,b);if(C()){break _;}e=$z;Cp(c,e);if(a.D===null&&a.f!==null&&a.f.bT<=0){b=null;$p=3;continue _;}if(a.D!==null&&!a.D.pU){if(a.D!==null)a.cn=a.bN+10000|0;if(a.D!==
null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i2=a.o.jZ;if(!a.bs){b=a.eX;$p=7;continue _;}if(!a.bs)HZ(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B_();return;}a:while(true){if(!FB()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c
=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Ev(a.f,Bh(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BO(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E8(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BO(42)&&!BO(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),
Long_fromInt(200)))continue;c=G3();if(c)F8(a.f.K,c);b:{if(a.D!==null){if(a.D===null)break b;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CW()&&Cx()){c=0;$p=11;continue _;}if(CW()==1&&Cx()){c=1;$p=14;continue _;}if(CW()==2&&Cx())break a;}}$p=16;continue _;case 2:AI9(b);if(C()){break _;}c=3553;d=a.bo;b=B(179);$p=1;continue _;case 3:AD1(a,b);if(C()){break _;}if(a.D!==null&&!a.D.pU){if(a.D!==null)a.cn=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i2=a.o.jZ;if(!a.bs){b
=a.eX;$p=7;continue _;}if(!a.bs)HZ(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B_();return;}c:while(true){if(!FB()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Ev(a.f,
Bh(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BO(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E8(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BO(42)&&!BO(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;c=G3();if(c)F8(a.f.K,c);d:{if
(a.D!==null){if(a.D===null)break d;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CW()&&Cx()){c=0;$p=11;continue _;}if(CW()==1&&Cx()){c=1;$p=14;continue _;}if(CW()==2&&Cx())break c;}}$p=16;continue _;case 4:AHa(b);if(C()){break _;}if(a.D!==null)a.D.rF();if(a.A!==null){a.A.i2=a.o.jZ;if(!a.bs){b=a.eX;$p=7;continue _;}if(!a.bs)HZ(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p
=21;continue _;}}a.dB=B_();return;case 5:ZG(b);if(C()){break _;}while(true){while(true){if(!FB()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Ev(a.f,Bh(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BO(6)){a.o.cC=a.o.cC?0:1;a.cU=
a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E8(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BO(42)&&!BO(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F8(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CW()&&Cx()){c=0;$p=11;continue _;}if(CW()==1&&Cx()){c=1;$p
=14;continue _;}if(CW()!=2)continue;if(!Cx())continue;else break;}$p=16;continue _;case 6:ASJ(b);if(C()){break _;}while(true){e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()==a.o.f$.bI)Ea(a.o,4,!BO(42)&&!BO(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Ev(a.f,Bh(),CV());if(!CV())continue;else break;}if(a.D!==null)
{b=a.D;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BO(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E8(a.f.K);$p=17;continue _;}if(Bh()!=a.o.gi.bI)continue;else{b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}}$p=9;continue _;case 7:AIV(b);if(C()){break _;}if(!a.bs)HZ(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(a.bs){if(a.bs){a.dB=B_();return;}b=a.c6;$p=21;continue _;}b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 8:AFo(a);if
(C()){break _;}while(true){while(true){if(!FB()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Ev(a.f,Bh(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BO(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E8(a.f.K);$p=17;continue _;}if
(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BO(42)&&!BO(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F8(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){continue _;}if(!CW()&&Cx()){c=0;$p=11;continue _;}if(CW()==1&&Cx()){c=1;$p=14;continue _;}if(CW()!=2)continue;if(!Cx())continue;else break;}$p
=16;continue _;case 9:ALh(a);if(C()){break _;}while(true){if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BO(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E8(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()==a.o.f$.bI)Ea(a.o,4,!BO(42)&&!BO(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&
a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Ev(a.f,Bh(),CV());if(!CV())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()!=1)continue;else break;}continue _;case 10:AAN(a,c,e);if(C()){break _;}if(a.D!==null)a.cn=a.bN+10000|0;if(a.D!==null){b=a.D;$p=4;continue _;}if(a.A!==null){a.A.i2=a.o.jZ;if(!a.bs){b=a.eX;$p=7;continue _;}if(!a.bs)HZ(a.dY);if(!a.bs){b=a.A;$p=13;continue _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(!a.bs){b=a.A;c=K(a.f.d);e=K(a.f.j);f
=K(a.f.e);$p=18;continue _;}if(!a.bs){b=a.c6;$p=21;continue _;}}a.dB=B_();return;case 11:AB$(a,c);if(C()){break _;}a.cn=a.bN;while(true){if(CW()==1&&Cx()){c=1;$p=14;continue _;}if(CW()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!FB()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Ev(a.f,Bh(),CV());if
(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BO(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E8(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BO(42)&&!BO(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F8(a.f.K,c);if(a.D
===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(CW())continue;if(!Cx())continue;else{c=0;continue _;}}$p=8;continue _;case 12:AB$(a,c);if(C()){break _;}a.cn=a.bN;if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;case 13:APm(b);if(C()){break _;}if(!a.bs&&!GG(a)){b=a.A;$p=19;continue _;}if(a.bs){if(a.bs){a.dB=B_();return;}b=a.c6;$p=21;continue _;}b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 14:AB$(a,
c);if(C()){break _;}a.cn=a.bN;while(true){if(CW()==2&&Cx()){$p=16;continue _;}while(true){while(true){if(!FB()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Ev(a.f,Bh(),CV());if(!CV())continue;if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BO(6)){a.o.cC=a.o.cC
?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E8(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BO(42)&&!BO(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F8(a.f.K,c);if(a.D===null)break;if(a.D===null)continue;else{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx())break;if(!CW()&&Cx()){c=0;$p=11;continue _;}if(CW()!=1)continue;if
(!Cx())continue;else{c=1;continue _;}}$p=8;continue _;case 15:AB$(a,c);if(C()){break _;}a.cn=a.bN;c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;case 16:AHQ(a);if(C()){break _;}while(true){while(true){if(!FB()){if(a.c$>0)a.c$=a.c$-1|0;while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Ev(a.f,Bh(),CV());if(!CV())continue;if(a.D!==null){b
=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BO(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E8(a.f.K);$p=17;continue _;}if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()!=a.o.f$.bI)continue;Ea(a.o,4,!BO(42)&&!BO(54)?1:(-1));}$p=9;continue _;}if(Long_gt(Long_sub(B_(),a.dB),Long_fromInt(200)))continue;else break;}c=G3();if(c)F8(a.f.K,c);if(a.D!==null){if(a.D===null)continue;else
{b=a.D;$p=5;continue _;}}if(!a.bp&&Cx()){$p=8;continue _;}if(!CW()&&Cx()){c=0;$p=11;continue _;}if(CW()==1&&Cx()){c=1;$p=14;continue _;}if(CW()!=2)continue;if(!Cx())continue;else break;}continue _;case 17:AD1(a,b);if(C()){break _;}while(true){if(Bh()==a.o.gi.bI){b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;$p=20;continue _;}e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()==a.o.f$.bI)Ea(a.o,4,!BO(42)&&!BO(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if
(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Ev(a.f,Bh(),CV());if(!CV())continue;else break;}if(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BO(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()!=a.o.ft.bI)continue;else{b=E8(a.f.K);continue _;}}$p=9;continue _;case 18:AFd(b,c,e,f);if(C()){break _;}if(a.bs){a.dB=B_();return;}b=a.c6;$p=21;continue _;case 19:Yb(b);if(C()){break _;}if(a.bs){if
(a.bs){a.dB=B_();return;}b=a.c6;$p=21;continue _;}b=a.A;c=K(a.f.d);e=K(a.f.j);f=K(a.f.e);$p=18;continue _;case 20:AQC(b,d,c);if(C()){break _;}while(true){e=0;while(e<9){if(Bh()==(2+e|0))a.f.K.bL=e;e=e+1|0;}if(Bh()==a.o.f$.bI)Ea(a.o,4,!BO(42)&&!BO(54)?1:(-1));while(true){if(!DV()){if(a.D===null){if(B$(0)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=0;$p=12;continue _;}if(B$(1)&&(a.bN-a.cn|0)>=a.bf.c8/4.0&&a.bp){c=1;$p=15;continue _;}}c=0;e=a.D===null&&B$(0)&&a.bp?1:0;$p=10;continue _;}Ev(a.f,Bh(),CV());if(!CV())continue;else break;}if
(a.D!==null){b=a.D;$p=6;continue _;}if(Bh()==1)break;if(a.cB instanceof Dv){Bh();Bh();}if(Bh()==33&&BO(6)){a.o.cC=a.o.cC?0:1;a.cU=a.cU?0:1;}if(Bh()==a.o.ft.bI){b=E8(a.f.K);$p=17;continue _;}if(Bh()!=a.o.gi.bI)continue;else{b=a.f;d=Em(a.f.K,a.f.K.bL,1);c=0;continue _;}}$p=9;continue _;case 21:AA4(b);if(C()){break _;}a.dB=B_();return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function GG(a){return 0;}
function AH1(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:ABT(a,c);if(C()){break _;}c=new F1;d=GA(new DB);$p=2;case 2:Q5(c,b,d);if(C()){break _;}if(!c.tG){b=B(180);$p=3;continue _;}b=B(181);$p=4;continue _;case 3:AF8(a,c,b);if(C()){break _;}return;case 4:AF8(a,c,b);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function ABT(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=B(3);$p=1;case 1:AF8(a,b,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,$p);}
function AF8(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.A!==null){d=a.A;e=a.ir;$p=1;continue _;}a.A=b;if(b===null){a.dB=Long_ZERO;return;}b.C_=a.fa;a.f=null;b.bg=a.f;$p=2;continue _;case 1:AJo(d,e);if(C()){break _;}a.A=b;if(b===null){a.dB=Long_ZERO;return;}b.C_=a.fa;a.f=null;b.bg=a.f;$p=2;case 2:AN6(a,c);if(C()){break _;}if(a.f===null){a.f=A6R(a,b,a.k2);c=a.f;$p=3;continue _;}a.f.hW=Wb(a.o);if(a.dY!==null)Q8(a.dY,
b);if(a.c6!==null)O9(a.c6,b);b.bg=a.f;$p=4;continue _;case 3:ALd(c);if(C()){break _;}Rk(a.cB,a.f);a.f.hW=Wb(a.o);if(a.dY!==null)Q8(a.dY,b);if(a.c6!==null)O9(a.c6,b);b.bg=a.f;$p=4;case 4:AGu(b);if(C()){break _;}if(!b.tG){a.dB=Long_ZERO;return;}c=a.ir;$p=5;case 5:AJo(b,c);if(C()){break _;}a.dB=Long_ZERO;return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AN6(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AO8(a.ir,b);b=a.ir;c=B(182);$p=1;case 1:ASd(b,c);if(C()){break _;}d=128;e=289;f=(-128);g=f;while(g<=d){h=a.A.fl;i=a.A.fk;if(a.A.bg!==null){h=a.A.bg.d|0;i=a.A.bg.e|0;}j=f;if(j<=d){b=a.ir;k=0+1|0;l=(0*100|0)/e|0;$p=4;continue _;}g=g+16|0;}b=a.ir;c=B(183);$p=2;case 2:ASd(b,
c);if(C()){break _;}l=2000;Be7=1;d=0;if(d>=l){Be7=0;return;}b=a.A;m=1;$p=3;case 3:ABz(b,m);if(C()){break _;}d=d+1|0;if(d>=l){Be7=0;return;}b=a.A;m=1;continue _;case 4:XQ(b,l);if(C()){break _;}b=a.A;l=h+g|0;m=64;n=i+j|0;$p=5;case 5:ACE(b,l,m,n);if(C()){break _;}b=a.A;$p=6;case 6:$z=AIq(b);if(C()){break _;}l=$z;if(l){b=a.A;continue _;}j=j+16|0;m=k;while(true){if(j<=d){b=a.ir;k=m+1|0;l=(m*100|0)/e|0;$p=4;continue _;}g=g+16|0;if(g>d)break;h=a.A.fl;i=a.A.fk;if(a.A.bg!==null){h=a.A.bg.d|0;i=a.A.bg.e|0;}j=f;}b=a.ir;c
=B(183);$p=2;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Ml(a){return ALs(a.dY);}
function Os(a){return X_(a.dY);}
function MP(a){var b;b=new V;X(b);return W(I(I(I(I(b,B(184)),XG(a.c6)),B(185)),AOd(a.A)));}
function ASG(a){var b,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.f!==null&&a.A!==null){b=a.f;$p=5;continue _;}b=a.A;$p=1;case 1:AQa(b);if(C()){break _;}a.f=A6R(a,a.A,a.k2);b=a.f;$p=2;case 2:ALd(b);if(C()){break _;}Rk(a.cB,a.f);if(a.A!==null){a.A.bg=a.f;b=a.A;$p=4;continue _;}a.f.hW=Wb(a.o);b=B(186);$p=3;case 3:AN6(a,b);if(C()){break _;}return;case 4:AGu(b);if(C()){break _;}a.f.hW=Wb(a.o);b=B(186);$p=3;continue _;case 5:Cb(b);if(C()){break _;}b=a.A;$p=1;continue _;default:
Fa();}}C4().s(a,b,$p);}
function AIN(){return Bdi;}
function Z6(){BeU=$rt_createLongArray(512);BeV=0;}
function ZM(){D.call(this);}
function Be8(){var a=new ZM();A3e(a);return a;}
function A3e(a){return;}
function On(){var b,c;Be();b=document.pointerLockElement!=null?1:0;c=Bes;Bes=b;if(!c&&b){Bd8=0.0;Bd9=0.0;}a:{b:{if(Beb){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function AU5(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();AB4(BdS);b=BdQ;c=BdR;d=BdP.width;e=BdP.height;b.drawImage(c,0.0,0.0,d,e);f=BdP.clientWidth;g=BdP.clientHeight;if(!(f==Bd$&&g==Bd_)){Bd$=f;Bd_=g;c=BdR;h=f;c.width=h;c=BdR;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof E2){}else{throw $$e;}}return;case 1:a:{try{AKL(i);if(C())
{break _;}break a;}catch($$e){$$je=Q($$e);if($$je instanceof E2){}else{throw $$e;}}}return;default:Fa();}}C4().s(b,c,d,e,f,g,h,i,$p);}
function Mo(){var a=this;D.call(a);a.om=null;a.F$=null;a.GG=null;}
var Be9=null;function Bbv(){Bbv=Bs(Mo);A_M();}
function A_M(){var b;Be9=Ci();b=Be9;L();T(b,Be6);T(Be9,Be$);T(Be9,Be_);T(Be9,Be3);T(Be9,Bfa);T(Be9,Bfb);T(Be9,Bfc);T(Be9,Bfd);T(Be9,Be5);T(Be9,Bfe);T(Be9,Bff);T(Be9,Bfg);T(Be9,Bfh);T(Be9,Bfi);T(Be9,Bfj);T(Be9,Bfk);T(Be9,Bfl);T(Be9,Bfm);T(Be9,Bfn);T(Be9,Bfo);T(Be9,Bfp);T(Be9,Bfq);T(Be9,Bfr);T(Be9,Bfs);T(Be9,Bft);T(Be9,Bfu);T(Be9,Bfv);T(Be9,Bfw);ABV(Dz(),Be9.s);}
function Go(){var a=this;D.call(a);a.JM=Long_ZERO;a.Ek=0;a.DS=Long_ZERO;a.w3=0;a.mU=null;a.CW=null;a.FV=null;a.wF=0;a.yG=null;}
var Bfx=null;var Bdd=null;var Bfy=Long_ZERO;var Bfz=0;function BfA(){var a=new Go();AHH(a);return a;}
function Bcq(a){var b=new Go();T2(b,a);return b;}
function Bae(a,b){var c=new Go();N_(c,a,b);return c;}
function AHH(a){N_(a,null,null);}
function T2(a,b){N_(a,null,b);}
function N_(a,b,c){var d;a.mU=new D;a.wF=1;a.FV=c;a.yG=b;d=Bfy;Bfy=Long_add(d,Long_fromInt(1));a.JM=d;}
function Tw(a){var b;b=new WI;b.zW=a;AZW(b);}
function Fw(b){if(Bdd!==b)Bdd=b;Bdd.DS=B_();}
function ARu(a){var b,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.yG===null)return;b=a.yG;$p=1;case 1:Yq(b);if(C()){break _;}return;default:Fa();}}C4().s(a,b,$p);}
function AST(){return Bdd;}
function A1v(a,b){a.Ek=b;}
function XK(){var b,c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=Bdd;c=b.w3+1|0;b.w3=c;if(c<30)return;Bdd.w3=0;if(Long_ge(Long_add(b.DS,Long_fromInt(100)),B_()))return;$p=1;case 1:ALW(b);if(C()){break _;}return;default:Fa();}}C4().s(b,c,$p);}
function ALW(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gw=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaT(callback);return thread.suspend(function(){try{A36(b,callback);}catch($e){callback.I4($rt_exception($e));}});}
function A36(b,c){var d;d=new S9;d.Cb=b;d.Ca=c;Q6(d);}
function AKL(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gw=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaT(callback);return thread.suspend(function(){try{AVA(b,callback);}catch($e){callback.I4($rt_exception($e));}});}
function AVA(b,c){var d,e;d=Bdd;e=new Po;e.wr=d;e.Ba=c;e.Jw=AFK(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.CW=e;}
function Zc(){Bfx=Bcq(B(187));Bdd=Bfx;Bfy=Long_fromInt(1);Bfz=1;}
function DO(){}
function Xe(){D.call(this);}
function BfB(){var a=new Xe();A2v(a);return a;}
function A2v(a){return;}
function ASK(a,b){b.preventDefault();b.stopPropagation();}
function ACq(a,b){ASK(a,b);}
function A$4(a,b){ACq(a,b);}
function Xk(){D.call(this);}
function BfC(){var a=new Xk();AZp(a);return a;}
function AZp(a){return;}
function ARL(a,b){var c,d;c=b.button;d=RU();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;Fy(MS(),b);b.preventDefault();b.stopPropagation();Mw();}
function AI2(a,b){ARL(a,b);}
function AXP(a,b){AI2(a,b);}
function Xl(){D.call(this);}
function BfD(){var a=new Xl();AXp(a);return a;}
function AXp(a){return;}
function AQy(a,b){var c,d;c=b.button;d=RU();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;Fy(MS(),b);b.preventDefault();b.stopPropagation();}
function ZX(a,b){AQy(a,b);}
function A3L(a,b){ZX(a,b);}
function Xi(){D.call(this);}
function BfE(){var a=new Xi();A5f(a);return a;}
function A5f(a){return;}
function AOK(a,b){Be();Bd6=b.offsetX;Bd7=BdP.clientHeight-b.offsetY|0;Bd8=Bd8+b.movementX;Bd9=Bd9+ -b.movementY;b.preventDefault();b.stopPropagation();}
function ADs(a,b){AOK(a,b);}
function ASV(a,b){ADs(a,b);}
function Xj(){D.call(this);}
function BfF(){var a=new Xj();A_Y(a);return a;}
function A_Y(a){return;}
function AEP(a,b){P9().data[Te(QJ(b))]=1;Fy(NR(),b);b.preventDefault();b.stopPropagation();Mw();}
function AQI(a,b){AEP(a,b);}
function A3W(a,b){AQI(a,b);}
function Xg(){D.call(this);}
function BfG(){var a=new Xg();A4h(a);return a;}
function A4h(a){return;}
function ZI(a,b){P9().data[Te(QJ(b))]=0;Fy(NR(),b);b.preventDefault();b.stopPropagation();}
function X5(a,b){ZI(a,b);}
function A2t(a,b){X5(a,b);}
function Xh(){D.call(this);}
function BfH(){var a=new Xh();AXD(a);return a;}
function AXD(a){return;}
function ASh(a,b){Be();if(Bea&&(b.repeat?1:0))Fy(NR(),b);b.preventDefault();b.stopPropagation();}
function AK9(a,b){ASh(a,b);}
function A6G(a,b){AK9(a,b);}
function Xf(){D.call(this);}
function BfI(){var a=new Xf();A3c(a);return a;}
function A3c(a){return;}
function AFq(a,b){Fy(MS(),b);b.preventDefault();b.stopPropagation();}
function ACF(a,b){AFq(a,b);}
function AUq(a,b){ACF(a,b);}
function QF(){D.call(this);}
function BfJ(){var a=new QF();A2l(a);return a;}
function A2l(a){return;}
function AFs(a,b){S4(0);}
function AMz(a,b){AFs(a,b);}
function A7g(a,b){AMz(a,b);}
function QE(){D.call(this);}
function BfK(){var a=new QE();A4c(a);return a;}
function A4c(a){return;}
function AGT(a,b){S4(1);Mw();}
function AMy(a,b){AGT(a,b);}
function AYR(a,b){AMy(a,b);}
function NY(){D.call(this);}
var BfL=null;var BeR=null;function BfM(){var a=new NY();AEd(a);return a;}
function AEd(a){return;}
function AJV(){var b,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(188);$p=1;case 1:$z=A3R(b);if(C()){break _;}b=$z;if(b===null){BfL=B(171);return BfN;}if(b.E8)return BfO;if(!b.Fk&&b.xW!==null){BeR=b.xW;return BfP;}BfL=b.uD!==null?b.uD:B(189);return BfN;default:Fa();}}C4().s(b,$p);}
function AJh(b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=BeR;$p=1;case 1:$z=AUC(c,b);if(C()){break _;}c=$z;if(c!==BfQ?0:1)return;d=LL(b,47);if(d>0){c=Ex(b,0,d);$p=3;continue _;}c=BeR;d=1;e=new ArrayBuffer(0);$p=2;case 2:AXZ(c,b,d,e);if(C()){break _;}return;case 3:AJh(c);if(C()){break _;}c=BeR;d=1;e=new ArrayBuffer(0);$p=2;continue _;default:Fa();}}C4().s(b,c,d,e,$p);}
function ABm(b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:d=LL(b,47);if(d>0){e=Ex(b,0,d);$p=2;continue _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeR;d=0;f=f.buffer;$p=1;case 1:AXZ(e,b,d,f);if(C()){break _;}return;case 2:AJh(e);if(C()){break _;}f=new Uint8Array(c.data.length);f.set(c.data);e=BeR;d=0;f=f.buffer;$p=1;continue _;default:Fa();}}C4().s(b,c,d,e,f,$p);}
function AHJ(){BfL=B(3);BeR=null;}
function AA2(){D.call(this);}
function AYz(){var Context=window.AudioContext||window.webkitAudioContext;return new Context();}
function U6(){D.call(this);}
var BeQ=null;function BfR(){var a=new U6();AQB(a);return a;}
function AQB(a){return;}
function AMi(b){var c,d,e,f,g,h,i,j,k,l,m;c=Ux(b);d=O6(c);e=$rt_createByteArray(8);NV(d,e);if(!DC(B(190),A3d(e,Yc(B(24))))){c=new BL;Bo(c,B(191));M(c);}GV(d);f=new P8;d=new WY;g=new Uv;OX(g);g.o3=0;h=Sc(g,15,0);if(h){c=new Qa;f=new V;X(f);Bo(c,W(I(I(Bf(f,h),B(12)),g.b9)));M(c);}Sd(d,c);d.lQ=0;d.oK=0;d.yg=1;d.x0=0;d.wI=$rt_createByteArray(1);d.G5=$rt_createByteArray(512);d.gj=g;d.ol=$rt_createByteArray(512);d.yg=1;d.x0=1;AIB(f,d);g=Ba$();while(true){d=GV(f);if(!DC(B(192),d)){if(AKI(f)<=0&&DC(B(193),d))return;c
=new BL;Bo(c,B(191));M(c);}i=GV(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);NV(f,j);l=H_(f);m=$rt_createByteArray(l);NV(f,m);if(D0(BeQ,i))continue;a:{ADZ(g,m,0,l);AMg(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){l=0;while(l<h){if(b[l]!=e[l]){h=0;break a;}l=l+1|0;}h=1;break a;}}h=0;}}if(!h){c=new BL;f=new V;X(f);Bo(c,W(I(I(f,B(194)),i)));M(c);}BQ(BeQ,i,m);if(!DC(B(195),GV(f)))break;}c=new BL;Bo(c,B(191));M(c);}
function Zk(){BeQ=C8();}
function BL(){BD.call(this);}
function BfS(){var a=new BL();A33(a);return a;}
function A33(a){P(a);}
function Ll(){HR.call(this);}
function BfT(){var a=new Ll();A6t(a);return a;}
function A6t(a){X(a);}
function A0Y(a,b){DQ(a,b);return a;}
function A2j(a,b,c,d){I5(a,b,c,d);return a;}
function AVM(a,b){Hm(a,b);return a;}
function A7M(a,b,c,d,e){Kd(a,b,c,d,e);return a;}
function A$0(a,b,c){K6(a,b,c);return a;}
function AV6(a,b,c,d,e){Kd(a,b,c,d,e);return a;}
function A4n(a,b,c,d){I5(a,b,c,d);return a;}
function AIi(a,b){var c;if(b>=0&&b<a.bY)return a.O.data[b];c=new BT;P(c);M(c);}
function OE(a){return a.bY;}
function A4u(a){return W(a);}
function A4E(a,b){M3(a,b);}
function A$f(a,b,c){K6(a,b,c);return a;}
function FC(){}
function Wa(){D.call(this);}
function BfU(){var a=new Wa();AZt(a);return a;}
function AZt(a){return;}
function Fj(){D.call(this);this.l7=0;}
var BfV=null;var BfW=null;var BfX=null;var BfY=null;var BfZ=null;var Bf0=null;function A2s(a){var b=new Fj();AAX(b,a);return b;}
function AAX(a,b){a.l7=b;}
function BI(b){var c;if(b>=BfY.data.length)return A2s(b);c=BfY.data[b];if(c===null){c=A2s(b);BfY.data[b]=c;}return c;}
function A$8(a,b){if(a===b)return 1;return b instanceof Fj&&b.l7==a.l7?1:0;}
function A$Q(a){return a.l7;}
function SO(b){var c,d;c=new B4;d=$rt_createCharArray(1);d.data[0]=b;TA(c,d);return c;}
function Mz(b){return b>=65536&&b<=1114111?1:0;}
function Du(b){return (b&64512)!=55296?0:1;}
function DS(b){return (b&64512)!=56320?0:1;}
function Ox(b){return !Du(b)&&!DS(b)?0:1;}
function Kc(b,c){return Du(b)&&DS(c)?1:0;}
function EJ(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IK(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Id(b){return (56320|b&1023)&65535;}
function EU(b){return GP(b)&65535;}
function GP(b){return AP9(b).toLowerCase().charCodeAt(0);}
function FG(b){return GN(b)&65535;}
function GN(b){return AP9(b).toUpperCase().charCodeAt(0);}
function Wr(b,c){if(c>=2&&c<=36){b=Up(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Up(b){var c,d,e,f,g,h,i,j,k;if(BfW===null){if(BfZ===null)BfZ=AMn();c=(BfZ.value!==null?$rt_str(BfZ.value):null);d=new R5;d.CG=Nz(c);e=Yt(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=Yt(d);h=h+1|0;}BfW=f;}f=BfW.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=S(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function I$(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function ID(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=IK(b);d[1]=Id(b);return c;}
function Do(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&Ox(b&65535))return 19;if(BfX===null){if(Bf0===null)Bf0=AHP();BfX=A2V((Bf0.value!==null?$rt_str(Bf0.value):null));}d=BfX.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.As)e=f+1|0;else{if(b>=g.xg)return g.C7.data[b-g.xg|0];c=f-1|0;}}return 0;}
function Lh(b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function IB(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Do(b)!=16?0:1;}
function UG(b){switch(Do(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Qm(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return UG(b);}return 1;}
function ADk(a,b){return a.l7-b.l7|0;}
function A3j(a,b){return ADk(a,b);}
function AI0(){BfV=F($rt_charcls());BfY=J(Fj,128);}
function AMn(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
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
function I7(){var a=this;D.call(a);a.cX=null;a.DZ=0;}
function AJ_(a){return 1;}
function A9e(a,b){return;}
function U2(){var a=this;I7.call(a);a.v2=0;a.v4=0;a.v3=0;a.ho=0.0;a.mR=0.0;a.on=0.0;a.nf=0;a.Bj=null;a.BE=null;}
function Rk(a,b){b.u=(-180.0);}
function A$w(a){return;}
function AFE(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cX.A;$p=1;case 1:$z=ACE(e,b,c,d);if(C()){break _;}f=$z;e=a.cX.A;$p=2;case 2:$z=AEQ(e,b,c,d);if(C()){break _;}g=$z;e=a.cX.c6;$p=3;case 3:AEK(e,b,c,d);if(C()){break _;}e=a.cX.A;L();h=Be0.data;$p=4;case 4:$z=ACE(e,b,c,d);if(C()){break _;}i=$z;j=h[i];$p=5;case 5:$z=AEQ(e,b,c,d);if(C()){break _;}i=
$z;k=0;$p=6;case 6:$z=APE(e,b,c,d,k);if(C()){break _;}k=$z;if(j!==null&&k){$p=7;continue _;}e=Ky(a.cX.f);if(e!==null){QN(e,f,b,c,d);if(!e.p)JI(a.cX.f);}if(k&&Nb(a.cX.f,Be0.data[f])){e=Be0.data[f];j=a.cX.A;$p=8;continue _;}return k;case 7:j.nt(e,b,c,d,i);if(C()){break _;}e=Ky(a.cX.f);if(e!==null){QN(e,f,b,c,d);if(!e.p)JI(a.cX.f);}if(k&&Nb(a.cX.f,Be0.data[f])){e=Be0.data[f];j=a.cX.A;$p=8;continue _;}return k;case 8:e.IV(j,b,c,d,g);if(C()){break _;}return k;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AE9(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cX.A;$p=1;case 1:$z=ACE(e,b,c,d);if(C()){break _;}f=$z;if(f>0&&a.ho===0.0){L();e=Be0.data[f];g=a.cX.A;h=a.cX.f;$p=3;continue _;}if(f<=0)return;L();e=Be0.data[f];g=a.cX.f;$p=2;case 2:$z=ABl(e,g);if(C()){break _;}i=$z;if(i<1.0)return;$p=4;continue _;case 3:e.ra(g,b,c,d,h);if(C()){break _;}if(f<=0)return;L();e=Be0.data[f];g
=a.cX.f;$p=2;continue _;case 4:AFE(a,b,c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ALY(a){a.ho=0.0;a.nf=0;}
function YU(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.nf>0)a.nf=a.nf-1|0;else{if(b==a.v2&&c==a.v4&&d==a.v3){f=a.cX.A;$p=1;continue _;}a.ho=0.0;a.mR=0.0;a.on=0.0;a.v2=b;a.v4=c;a.v3=d;}return;case 1:$z=ACE(f,b,c,d);if(C()){break _;}g=$z;if(!g)return;L();f=Be0.data[g];h=a.ho;i=a.cX.f;$p=2;case 2:$z=ABl(f,i);if(C()){break _;}j=$z;a.ho=h+j;a.on=a.on+1.0;if(a.ho<
1.0)return;$p=3;case 3:AFE(a,b,c,d);if(C()){break _;}a.ho=0.0;a.mR=0.0;a.on=0.0;a.nf=5;return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function GR(a,b){var c;if(a.ho<=0.0){a.cX.n0.Er=0.0;a.cX.dY.tK=0.0;}else{c=a.mR+(a.ho-a.mR)*b;a.cX.n0.Er=c;a.cX.dY.tK=c;}}
function A1u(a){return 4.0;}
function A5k(a,b){return;}
function AI9(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mR=a.ho;b=a.Bj;c=a.cX.A;$p=1;case 1:ABJ(b,c);if(C()){break _;}b=a.BE;c=a.cX.A;$p=2;case 2:ABJ(b,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,$p);}
function SN(){var a=this;D.call(a);a.c8=0.0;a.CP=0.0;a.i6=0;a.cY=0.0;a.C0=0.0;a.lL=0.0;a.sT=Long_ZERO;a.rX=Long_ZERO;a.nH=0.0;}
function FR(a){var b,c,d,e,f;b=B_();c=Long_sub(b,a.sT);d=Long_div(EH(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.rX));a.nH=a.nH+(e-a.nH)*0.20000000298023224;a.sT=b;a.rX=d;}if(Long_lt(c,Long_ZERO)){a.sT=b;a.rX=d;}f=Long_toNumber(d)/1000.0;e=(f-a.CP)*a.nH;a.CP=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.lL=a.lL+e*a.C0*a.c8;a.i6=a.lL|0;a.lL=a.lL-a.i6;if(a.i6>10)a.i6=10;a.cY=a.lL;}
function VR(){}
function Sa(){var a=this;D.call(a);a.n4=null;a.fH=null;a.ma=null;a.kP=Long_ZERO;a.lO=0;}
function AO8(a,b){a.lO=0;R1(a,b);}
function YQ(a,b){a.lO=1;R1(a,a.ma);}
function R1(a,b){var c,d,e;a:{if(!a.fH.gS){if(a.lO)break a;b=new IS;P(b);M(b);}a.ma=b;c=FL(a.fH.cq,a.fH.bF);d=c.fM;e=c.fJ;D5(256);Db(5889);C_();Iu(0.0,d,e,0.0,100.0,300.0);Db(5888);C_();Bw(0.0,0.0,(-200.0));}}
function ASd(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fH.gS){if(a.lO)return;b=new IS;P(b);M(b);}a.kP=Long_ZERO;a.n4=b;c=(-1);$p=1;case 1:XQ(a,c);if(C()){break _;}a.kP=Long_ZERO;return;default:Fa();}}C4().s(a,b,c,$p);}
function ASb(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fH.gS){if(a.lO)return;b=new IS;P(b);M(b);}a.kP=Long_ZERO;a.n4=c;a.ma=b;d=(-1);$p=1;case 1:XQ(a,d);if(C()){break _;}a.kP=Long_ZERO;return;default:Fa();}}C4().s(a,b,c,d,$p);}
function XQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.fH.gS){if(a.lO)break a;c=new IS;P(c);M(c);}d=B_();if(Long_ge(Long_sub(d,a.kP),Long_fromInt(20))){a.kP=d;c=FL(a.fH.cq,a.fH.bF);e=c.fM;f=c.fJ;D5(256);Db(5889);C_();g=e;h=f;Iu(0.0,g,h,0.0,100.0,300.0);Db(5888);C_();Bw(0.0,
0.0,(-200.0));D5(16640);BA();i=BeW;c=a.fH.bo;j=B(165);$p=1;continue _;}}return;case 1:$z=AHz(c,j);if(C()){break _;}k=$z;Cp(3553,k);Bz(i);ES(i,4210752);l=f/32.0;G(i,0.0,h,0.0,0.0,l);m=e/32.0;G(i,g,h,0.0,m,l);G(i,g,0.0,0.0,m,0.0);G(i,0.0,0.0,0.0,0.0,0.0);Bt(i);if(b>=0){n=(e/2|0)-50|0;o=(f/2|0)+16|0;Bd(3553);Bz(i);ES(i,8421504);g=n;p=o;Bg(i,g,p,0.0);m=o+2|0;Bg(i,g,m,0.0);q=n+100|0;Bg(i,q,m,0.0);Bg(i,q,p,0.0);ES(i,8454016);Bg(i,g,p,0.0);Bg(i,g,m,0.0);q=n+b|0;Bg(i,q,m,0.0);Bg(i,q,p,0.0);Bt(i);Bb(3553);}c=a.fH.fa;i
=a.ma;b=(e-Dx(a.fH.fa,a.ma)|0)/2|0;r=(f/2|0)-4|0;Cy(c,i,b,r-16|0,16777215);Cy(a.fH.fa,a.n4,(e-Dx(a.fH.fa,a.n4)|0)/2|0,r+8|0,16777215);$p=2;case 2:AU5();if(C()){break _;}try{$p=3;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){}else{throw $$e;}}return;case 3:b:{try{XK();if(C()){break _;}break b;}catch($$e){$$je=Q($$e);if($$je instanceof BD){}else{throw $$e;}}}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function AFU(){var a=this;D.call(a);a.v=null;a.qy=0;a.lZ=0.0;a.iK=null;a.tM=0;a.p$=null;a.lr=null;a.Ig=0;a.If=0;a.p3=null;a.dH=0.0;a.d6=0.0;a.dW=0.0;a.of=0.0;a.md=0.0;}
function Bb0(a){var b=new AFU();AUg(b,a);return b;}
function AUg(a,b){var c;a.qy=0;a.lZ=0.0;a.p$=null;a.lr=new DB;a.Ig=0;a.If=0;a.p3=H7(16);a.v=b;c=new Pi;c.eV=null;c.ja=0.0;c.rd=0.0;c.iy=0;c.jR=0;c.Ag=Kq();c.cP=b;a.iK=c;}
function AIV(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.of=a.md;b=a.v.A;c=K(a.v.f.d);d=K(a.v.f.j);e=K(a.v.f.e);$p=1;case 1:$z=ANp(b,c,d,e);if(C()){break _;}f=$z;g=(3-a.v.o.hg|0)/3.0;h=f*(1.0-g)+g;a.md=a.md+(h-a.md)*0.10000000149011612;a.tM=a.tM+1|0;AJg(a.iK);if(a.v.cU)
{b=a.v.f;i=a.v.A;d=K(b.d);j=K(b.j);k=K(b.e);l=4;m=0;n=63;e=S(64,j+4|0);j=S(64,j-4|0);o=64.0999984741211;if(m<50){p=(d+E(a.lr,9)|0)-l|0;q=(k+E(a.lr,9)|0)-l|0;$p=2;continue _;}}return;case 2:$z=ACE(i,p,n,q);if(C()){break _;}c=$z;if(e<=0&&j>=0){f=N(a.lr);g=N(a.lr);if(c>0){b=a.v.c6;r=new JW;s=p+f;L();TY(r,i,s,o-Be0.data[c].cM,q+g);El(b,r);}}m=m+1|0;if(m>=50)return;p=(d+E(a.lr,9)|0)-l|0;q=(k+E(a.lr,9)|0)-l|0;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function NK(a,b){var c,d,e,f;c=a.v.f;d=c.bS;e=c.d-c.bS;f=b;return BY(d+e*f,c.cS+(c.j-c.cS)*f,c.bR+(c.e-c.bR)*f);}
function AL2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.f;d=c.T+(c.I-c.T)*b;e=c.P+(c.u-c.P)*b;f=NK(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=BC(g);i=Br(g);g= -d*0.01745329238474369;j= -BC(g);g=Br(g);k=i*j;l
=h*j;m=4.0;n=k;o=n*m;p=g;q=p*m;r=l;s=Dk(f,o,q,r*m);t=a.v;u=a.v.A;$p=1;case 1:$z=AJt(u,f,s);if(C()){break _;}u=$z;t.ce=u;f=NK(a,b);if(a.v.ce!==null)m=DI(a.v.ce.gy,f);if(a.v.cB instanceof Dv)m=32.0;else if(m>3.0)m=3.0;n=n*m;p=p*m;r=r*m;s=Dk(f,n,p,r);a.p$=null;t=a.v.A;u=Jm(c.L,n,p,r);$p=2;case 2:$z=ADR(t,c,u);if(C()){break _;}t=$z;n=0.0;v=0;while(v<t.s){u=Z(t,v);if(u.lx()){w=QY(Dw(u.L,0.10000000149011612,0.10000000149011612,0.10000000149011612),f,s);if(w!==null){p=DI(f,w.gy);if(!(p>=n&&n!==0.0)){a.p$=u;n=p;}}}v
=v+1|0;}if(a.p$!==null&&!(a.v.cB instanceof Dv))a.v.ce=A1m(a.p$);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function L9(a,b){var c,d,e;c=a.v.f;d=c.dE-b;if(c.bT<=0)Bv(40.0-8000.0/(c.c2+b+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.ES;b=Br(b*b*b*b*3.1415927410125732);e=c.kI;Bv( -e,0.0,1.0,0.0);Bv( -b*14.0,0.0,0.0,1.0);Bv(e,0.0,1.0,0.0);}}
function IT(a,b){var c,d,e,f,g;if(!a.v.o.cC){c=a.v.f;d=c.ha-c.tY;e=c.ha+d*b;f=c.qB+(c.kY-c.qB)*b;g=c.k0+(c.jm-c.k0)*b;d=e*3.1415927410125732;Bw(Br(d)*f*0.5, -H2(BC(d)*f),0.0);Bv(Br(d)*f*3.0,0.0,0.0,1.0);Bv(H2(BC(d+0.20000000298023224)*f)*5.0,1.0,0.0,0.0);Bv(g,1.0,0.0,0.0);}}
function AIc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.f;d=c.bS;e=c.d-c.bS;f=b;g=d+e*f;h=c.cS+(c.j-c.cS)*f;i=c.bR+(c.e-c.bR)*f;if(!a.v.o.cC)Bw(0.0,0.0,(-0.10000000149011612));else{j=4.0;d= -Br(c.u/180.0*3.1415927410125732)*BC(c.I
/180.0*3.1415927410125732)*j;e=BC(c.u/180.0*3.1415927410125732)*BC(c.I/180.0*3.1415927410125732)*j;f= -Br(c.I/180.0*3.1415927410125732)*j;k=0;l=g-d;d=h-f;f=i-e;if(k<8){m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.v.A;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);$p=1;continue _;}Bw(0.0,0.0, -j);}Bv(c.T+(c.I-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.u-c.P)*b+180.0,0.0,1.0,0.0);return;case 1:$z=AJt(p,u,v);if(C()){break _;}u
=$z;if(u!==null){q=DI(u.gy,BY(g,h,i));if(q<j)j=q;}k=k+1|0;if(k>=8){Bw(0.0,0.0, -j);Bv(c.T+(c.I-c.T)*b,1.0,0.0,0.0);Bv(c.P+(c.u-c.P)*b+180.0,0.0,1.0,0.0);return;}m=((k&1)*2|0)-1|0;n=((k>>1&1)*2|0)-1|0;o=((k>>2&1)*2|0)-1|0;m=m*0.10000000149011612;n=n*0.10000000149011612;o=o*0.10000000149011612;p=a.v.A;e=m;q=g+e;r=n;s=h+r;t=o;u=BY(q,s,i+t);v=BY(l+e+t,d+r,f+t);continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AFC(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lZ=256>>a.v.o.hg;Db(5889);C_();if(a.v.o.ef)Bw( -((c*2|0)-1|0)*0.07000000029802322,0.0,0.0);d=a.v.f;e=70.0;f=Bf1;$p=1;case 1:$z=AGM(d,f);if(C()){break _;}g=$z;if(g)e=60.0;if(d.bT<=0)e=e/((1.0-500.0/(d.c2+b+500.0))*2.0+1.0);h=a.v.cq/a.v.bF;i=a.lZ;f=GM();j=e*0.01745329238474369*0.5;k=GE(j)/Gt(j);f.ev
=k/h;f.et=0.0;f.eu=0.0;f.es=0.0;f.ey=0.0;f.ez=k;f.ew=0.0;f.ex=0.0;f.eD=0.0;f.eB=0.0;h=i+0.05000000074505806;k=i-0.05000000074505806;f.eC=h/k;f.eA=(-1.0);f.gW=0.0;f.gX=0.0;f.gU=2.0*i*0.05000000074505806/k;f.gV=0.0;Db(5888);C_();if(a.v.o.ef)Bw(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);L9(a,b);if(a.v.o.iu)IT(a,b);$p=2;case 2:AIc(a,b);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFN(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:C_();if(a.v.o.ef)Bw(((c*2|0)-1|0)*0.10000000149011612,0.0,0.0);B3();L9(a,b);if(a.v.o.iu)IT(a,b);if(!a.v.o.cC){d=a.iK;$p=1;continue _;}BE();if(a.v.o.cC){if(a.v.o.iu)IT(a,b);return;}d=a.iK;$p=2;continue _;case 1:AC4(d,b);if(C()){break _;}BE();if(a.v.o.cC){if(a.v.o.iu)IT(a,b);return;}d=a.iK;$p=2;case 2:ACg(d,b);if(C()){break _;}L9(a,b);if(a.v.o.iu)IT(a,b);return;default:Fa();}}C4().s(a,
b,c,d,$p);}
function AFS(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qy&&!On()){c=a.v;$p=1;continue _;}a.qy=On();Be();d=Bd8;Bd8=0.0;e=d|0;d=Bd9;Bd9=0.0;f=d|0;g=1;if(a.v.o.m7)g=(-1);if(a.v.bp&&a.v.A!==null)Xu(a.v.f,e,Bj(f,g));if(!a.v.h7){c=FL(a.v.cq,a.v.bF);f=c.fM;e=c.fJ;h=Bj(Bd6,f)/a.v.cq|0;i=(e-(Bj(Bd7,e)/a.v.bF|0)|0)-1|0;if(a.v.A!==null){$p=2;continue _;}Hk(0,0,a.v.cq,a.v.bF);HE(0.0,
0.0,0.0,0.0);D5(16640);Db(5889);C_();Db(5888);C_();LH(a);if(a.v.D!==null){D5(256);c=a.v.D;$p=3;continue _;}}return;case 1:ALh(c);if(C()){break _;}a.qy=On();Be();d=Bd8;Bd8=0.0;e=d|0;d=Bd9;Bd9=0.0;f=d|0;g=1;if(a.v.o.m7)g=(-1);if(a.v.bp&&a.v.A!==null)Xu(a.v.f,e,Bj(f,g));if(!a.v.h7){c=FL(a.v.cq,a.v.bF);f=c.fM;e=c.fJ;h=Bj(Bd6,f)/a.v.cq|0;i=(e-(Bj(Bd7,e)/a.v.bF|0)|0)-1|0;if(a.v.A!==null){$p=2;continue _;}Hk(0,0,a.v.cq,a.v.bF);HE(0.0,0.0,0.0,0.0);D5(16640);Db(5889);C_();Db(5888);C_();LH(a);if(a.v.D!==null){D5(256);c
=a.v.D;$p=3;continue _;}}return;case 2:AAm(a,b);if(C()){break _;}c=a.v.n0;g=a.v.D===null?0:1;$p=4;continue _;case 3:c.hN(h,i,b);if(C()){break _;}return;case 4:APR(c,b,g,h,i);if(C()){break _;}if(a.v.D===null)return;D5(256);c=a.v.D;$p=3;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AAm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AL2(a,b);if(C()){break _;}c=a.v.f;d=a.v.dY;e=a.v.c6;f=c.cs;g=c.d-c.cs;h=b;i=f+g*h;f=c.b7+(c.j-c.b7)*h;g=c.ct+(c.e-c.ct)*h;j=a.v.A.hl;if(j instanceof IN)MZ(j,EY(i|0)>>4,EY(f|0)>>4);k=0;if(k>=2){FH(1,1,1,0);return;}if(a.v.o.ef){if(k)FH(1,0,0,0);else FH(0,
1,1,0);}Hk(0,0,a.v.cq,a.v.bF);$p=2;case 2:AD8(a,b);if(C()){break _;}D5(16640);Bb(2884);$p=3;case 3:AFC(a,b,k);if(C()){break _;}R3();if(a.v.o.hg<2){l=(-1);$p=4;continue _;}if(!a.v.o.du)Bb(2912);l=1;$p=6;continue _;case 4:ASq(a,l);if(C()){break _;}$p=5;case 5:ADi(d,b);if(C()){break _;}if(!a.v.o.du)Bb(2912);l=1;$p=6;case 6:ASq(a,l);if(C()){break _;}m=BbK();AOq(m,i,f,g);ARS(a.v.dY,m,b);n=a.v.dY;l=0;$p=7;case 7:AIo(n,c,l);if(C()){break _;}l=0;$p=8;case 8:ASq(a,l);if(C()){break _;}if(!a.v.o.du)Bb(2912);l=3553;n=a.v.bo;j
=B(179);$p=9;case 9:$z=AHz(n,j);if(C()){break _;}o=$z;Cp(l,o);DT();VB(d,c,0,h);HB();n=NK(a,b);$p=10;case 10:ACI(d,n,m,b);if(C()){break _;}$p=11;case 11:AB3(e,c,b);if(C()){break _;}DT();l=0;$p=12;case 12:ASq(a,l);if(C()){break _;}$p=13;case 13:ABj(e,c,b);if(C()){break _;}if(a.v.ce!==null){m=Bf1;$p=16;continue _;}Dg(770,771);l=0;$p=14;case 14:ASq(a,l);if(C()){break _;}Bb(3042);Bd(2884);l=3553;m=a.v.bo;n=B(179);$p=15;case 15:$z=AHz(m,n);if(C()){break _;}o=$z;Cp(l,o);VB(d,c,1,h);Gw(1);Bb(2884);Bd(3042);if(a.v.ce
!==null){m=Bf1;$p=17;continue _;}Bd(2912);if(a.v.cU){$p=20;continue _;}l=0;$p=23;continue _;case 16:$z=AGM(c,m);if(C()){break _;}l=$z;if(!l){Dg(770,771);l=0;$p=14;continue _;}Bd(3008);m=a.v.ce;l=0;n=D9(c.K);$p=18;continue _;case 17:$z=AGM(c,m);if(C()){break _;}l=$z;if(!l){Bd(3008);n=a.v.ce;l=0;m=D9(c.K);$p=21;continue _;}Bd(2912);if(a.v.cU){$p=20;continue _;}l=0;$p=23;continue _;case 18:AFM(d,c,m,l,n,b);if(C()){break _;}m=a.v.ce;l=0;n=D9(c.K);$p=19;case 19:AGk(d,c,m,l,n,b);if(C()){break _;}Bb(3008);Dg(770,771);l
=0;$p=14;continue _;case 20:X1(a,b);if(C()){break _;}l=0;$p=23;continue _;case 21:AFM(d,c,n,l,m,b);if(C()){break _;}m=a.v.ce;l=0;n=D9(c.K);$p=22;case 22:AGk(d,c,m,l,n,b);if(C()){break _;}Bb(3008);Bd(2912);if(a.v.cU){$p=20;continue _;}l=0;$p=23;case 23:ASq(a,l);if(C()){break _;}if(!a.v.o.du)Bb(2912);$p=24;case 24:YT(d,b);if(C()){break _;}Bd(2912);l=1;$p=25;case 25:ASq(a,l);if(C()){break _;}D5(256);$p=26;case 26:AFN(a,b,k);if(C()){break _;}if(!a.v.o.ef)return;k=k+1|0;if(k>=2){FH(1,1,1,0);return;}if(a.v.o.ef){if
(k)FH(1,0,0,0);else FH(0,1,1,0);}Hk(0,0,a.v.cq,a.v.bF);$p=2;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function X1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.f;d=K(c.d);e=K(c.j);f=K(c.e);BA();g=BeW;Bd(2884);Cj(0.0,1.0,0.0);Bb(3042);Dg(770,
771);h=3553;i=a.v.bo;j=B(196);$p=1;case 1:$z=AHz(i,j);if(C()){break _;}k=$z;Cp(h,k);k=d-5|0;d=d+5|0;h=f-5|0;l=f+5|0;m=e-5|0;n=e+5|0;e=S(m,64);o=S(n,64);while(k<=d){p=h;while(p<=l){q=e<0?64:m;r=o<0?64:n;if(q!=r){s=((((a.tM+(k*3121|0)|0)+Bj(p,418711)|0)%32|0)+b)/32.0;t=k+0.5-c.d;u=p+0.5-c.e;v=Ce(t*t+u*u)/5.0;BU(1.0,1.0,1.0,(1.0-v*v)*0.699999988079071);Bz(g);u=k+0|0;w=q;x=p+0|0;v=q*2.0/8.0;y=s*2.0;z=v+y;G(g,u,w,x,0.0,z);ba=k+1|0;bb=p+1|0;G(g,ba,w,bb,2.0,z);bc=r;bd=r*2.0/8.0+y;G(g,ba,bc,bb,2.0,bd);G(g,u,bc,x,0.0,
bd);G(g,u,w,bb,0.0,z);G(g,ba,w,x,2.0,z);G(g,ba,bc,x,2.0,bd);G(g,u,bc,bb,0.0,bd);Bt(g);}p=p+1|0;}k=k+1|0;}Bb(2884);Bd(3042);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function LH(a){var b,c,d;b=FL(a.v.cq,a.v.bF);c=b.fM;d=b.fJ;D5(256);Db(5889);C_();Iu(0.0,c,d,0.0,1000.0,3000.0);Db(5888);C_();Bw(0.0,0.0,(-2000.0));}
function AD8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.A;d=a.v.f;e=1.0-A2Z(1.0/(4-a.v.o.hg|0),0.25);f=OZ(c,b);g=f.x;h=f.z;i=f.w;j=ADy(c,b);a.dH=j.x;a.d6=j.z;a.dW=j.w;a.dH=a.dH+(g-a.dH)*e;a.d6=a.d6+(h-a.d6)*e;a.dW=a.dW+(i-a.dW)*e;c=Bf1;$p=1;case 1:$z=AGM(d,c);if(C()){break _;}k=$z;if(k){a.dH=0.019999999552965164;a.d6
=0.019999999552965164;a.dW=0.20000000298023224;e=a.of+(a.md-a.of)*b;a.dH=a.dH*e;a.d6=a.d6*e;a.dW=a.dW*e;if(a.v.o.ef){l=(a.dH*30.0+a.d6*59.0+a.dW*11.0)/100.0;m=(a.dH*30.0+a.d6*70.0)/100.0;n=(a.dH*30.0+a.dW*70.0)/100.0;a.dH=l;a.d6=m;a.dW=n;}HE(a.dH,a.d6,a.dW,0.0);return;}c=Bf2;$p=2;case 2:$z=AGM(d,c);if(C()){break _;}k=$z;if(k){a.dH=0.6000000238418579;a.d6=0.10000000149011612;a.dW=0.0;}e=a.of+(a.md-a.of)*b;a.dH=a.dH*e;a.d6=a.d6*e;a.dW=a.dW*e;if(a.v.o.ef){l=(a.dH*30.0+a.d6*59.0+a.dW*11.0)/100.0;m=(a.dH*30.0+a.d6
*70.0)/100.0;n=(a.dH*30.0+a.dW*70.0)/100.0;a.dH=l;a.d6=m;a.dW=n;}HE(a.dH,a.d6,a.dW,0.0);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASq(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.v.f;d=a.dH;e=a.d6;f=a.dW;Ig(a.p3);CJ(CJ(CJ(CJ(a.p3,d),e),f),1.0);Jx(a.p3);g=a.p3;BW();Bf3=JA(g);Bf4=JA(g);Bf5=JA(g);Bf6=JA(g);Cj(0.0,(-1.0),0.0);BU(1.0,1.0,1.0,1.0);g=Bf1;$p=1;case 1:$z=AGM(c,g);if(C()){break _;}h=$z;if(h){Me(2917,2048);GL(2914,0.10000000149011612);Bb(2903);return;}g=Bf2;$p=2;case 2:$z=AGM(c,g);if(C()){break _;}h
=$z;if(h){Me(2917,2048);GL(2914,2.0);}else{Me(2917,9729);GL(2915,a.lZ*0.25);GL(2916,a.lZ);if(b<0){GL(2915,0.0);GL(2916,a.lZ*0.800000011920929);}}Bb(2903);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function Eh(){D.call(this);this.xZ=0.0;}
function MD(){var a=this;Eh.call(a);a.iY=null;a.lc=null;a.pj=null;a.d1=null;a.dO=null;a.i$=null;a.he=null;}
function A$6(){var a=new MD();KN(a);return a;}
function XB(a){var b=new MD();AIS(b,a);return b;}
function Bf7(a,b){var c=new MD();ARC(c,a,b);return c;}
function KN(a){AIS(a,0.0);}
function AIS(a,b){ARC(a,b,0.0);}
function ARC(a,b,c){var d,e;a.iY=BK(0,0);BG(a.iY,(-4.0),(-8.0),(-4.0),8,8,8,b);d=a.iY;e=0.0+c;BJ(d,0.0,e,0.0);a.lc=BK(32,0);BG(a.lc,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BJ(a.lc,0.0,e,0.0);a.pj=BK(16,16);BG(a.pj,(-4.0),0.0,(-2.0),8,12,4,b);BJ(a.pj,0.0,e,0.0);a.d1=BK(40,16);BG(a.d1,(-3.0),(-2.0),(-2.0),4,12,4,b);d=a.d1;e=2.0+c;BJ(d,(-5.0),e,0.0);a.dO=BK(40,16);a.dO.lE=1;BG(a.dO,(-1.0),(-2.0),(-2.0),4,12,4,b);BJ(a.dO,5.0,e,0.0);a.i$=BK(0,16);BG(a.i$,(-2.0),0.0,(-2.0),4,12,4,b);d=a.i$;c=12.0+c;BJ(d,(-2.0),c,0.0);a.he
=BK(0,16);a.he.lE=1;BG(a.he,(-2.0),0.0,(-2.0),4,12,4,b);BJ(a.he,2.0,c,0.0);}
function A$s(a,b,c,d,e,f,g){a.ok(b,c,d,e,f,g);Ca(a.iY,g);Ca(a.pj,g);Ca(a.d1,g);Ca(a.dO,g);Ca(a.i$,g);Ca(a.he,g);Ca(a.lc,g);}
function AIZ(a,b,c,d,e,f,g){var h;a.iY.bX=e/57.2957763671875;a.iY.b1=f/57.2957763671875;a.lc.bX=a.iY.bX;a.lc.b1=a.iY.b1;h=a.d1;e=b*0.6661999821662903;f=e+3.1415927410125732;h.b1=BC(f)*2.0*c;a.d1.bU=(BC(b*0.23119999468326569)+1.0)*1.0*c;a.dO.b1=BC(e)*2.0*c;a.dO.bU=(BC(b*0.28119999170303345)-1.0)*1.0*c;a.i$.b1=BC(e)*1.399999976158142*c;a.he.b1=BC(f)*1.399999976158142*c;h=a.d1;c=h.bU;b=d*0.09000000357627869;h.bU=c+BC(b)*0.05000000074505806+0.05000000074505806;h=a.dO;h.bU=h.bU-(BC(b)*0.05000000074505806+0.05000000074505806);h
=a.d1;b=h.b1;c=d*0.06700000166893005;h.b1=b+Br(c)*0.05000000074505806;h=a.dO;h.b1=h.b1-Br(c)*0.05000000074505806;}
function Ew(){var a=this;D.call(a);a.dD=null;a.I3=0;a.mH=0;a.H0=0;a.w1=0;}
function Bf8(a){var b=new Ew();HH(b,a);return b;}
function HH(a,b){a.dD=$rt_createByteArray(1024);a.mH=0;a.H0=0;a.w1=1;a.I3=b;}
function AA0(){var a=this;Ew.call(a);a.pz=null;a.ts=null;a.nZ=null;a.rS=null;a.xC=0;}
function BaB(){var a=new AA0();A_a(a);return a;}
function A_a(a){L();HH(a,Bf9.ba);a.pz=$rt_createFloatArray(256);a.ts=$rt_createFloatArray(256);a.nZ=$rt_createFloatArray(256);a.rS=$rt_createFloatArray(256);a.xC=0;}
function AYK(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;a.xC=a.xC+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=b-1|0;while(e<=(b+1|0)){f=e&15;g=c&15;d=d+a.pz.data[f+(g*16|0)|0];e=e+1|0;}h=a.ts.data;i=b+(c*16|0)|0;h[i]=d/3.299999952316284+a.nZ.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}c=0;while(c<16){j=0;while(j<16){k=a.nZ.data;b=c+(j*16|0)|0;k[b]=k[b]+a.rS.data[b]*0.05000000074505806;if(a.nZ.data[b]<0.0)a.nZ.data[b]=0.0;k=a.rS.data;k[b]=k[b]-0.10000000149011612;if(BP()<0.05)a.rS.data[b]=0.5;j=j+1|0;}c=c+1|0;}k=a.ts;a.ts
=a.pz;a.pz=k;c=0;while(c<256){d=a.pz.data[c];if(d>1.0)d=1.0;if(d<0.0)d=0.0;l=d*d;i=32.0+l*32.0|0;m=50.0+l*64.0|0;n=255;o=146.0+l*50.0|0;if(a.mH){b=i*30|0;i=((b+(m*59|0)|0)+2805|0)/100|0;m=(b+(m*70|0)|0)/100|0;n=(b+17850|0)/100|0;}k=a.dD.data;j=c*4|0;k[j+0|0]=i<<24>>24;a.dD.data[j+1|0]=m<<24>>24;a.dD.data[j+2|0]=n<<24>>24;a.dD.data[j+3|0]=o<<24>>24;c=c+1|0;}}
function AKJ(){var a=this;Ew.call(a);a.pV=null;a.qU=null;a.jy=null;a.sB=null;}
function Ba_(){var a=new AKJ();A1P(a);return a;}
function A1P(a){L();HH(a,Bf$.ba);a.pV=$rt_createFloatArray(256);a.qU=$rt_createFloatArray(256);a.jy=$rt_createFloatArray(256);a.sB=$rt_createFloatArray(256);}
function AY0(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Br(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Br(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){h=(g+e|0)&15;j=(i+f|0)&15;d=d+a.pV.data[h+(j*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.qU.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jy.data;e=(b+0|0)&15;n=((c+0|0)&15)*16|0;o=m[e+n|0];m=a.jy.data;h=h&15;o=o+m[h+n|0];m=a.jy.data;c=c+1|0;n=(c&15)*16|0;k[l]=d+(o+m[h+n
|0]+a.jy.data[e+n|0])/4.0*0.800000011920929;m=a.jy.data;m[l]=m[l]+a.sB.data[l]*0.009999999776482582;if(a.jy.data[l]<0.0)a.jy.data[l]=0.0;m=a.sB.data;m[l]=m[l]-0.05999999865889549;if(BP()<0.005)a.sB.data[l]=1.5;}b=b+1|0;}m=a.qU;a.qU=a.pV;a.pV=m;n=0;while(n<256){d=a.pV.data[n]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;h=d*100.0+155.0|0;o=d*d;j=o*255.0|0;l=o*d*d*128.0|0;if(a.mH){e=h*30|0;h=((e+(j*59|0)|0)+(l*11|0)|0)/100|0;j=(e+(j*70|0)|0)/100|0;l=(e+(l*70|0)|0)/100|0;}m=a.dD.data;b=n*4|0;m[b+0|0]=h<<24>>24;a.dD.data[b
+1|0]=j<<24>>24;a.dD.data[b+2|0]=l<<24>>24;a.dD.data[b+3|0]=(-1);n=n+1|0;}}
function L8(){D.call(this);}
var Bf_=null;var Bga=null;function Bgb(){var a=new L8();AZN(a);return a;}
function AZN(a){return;}
function Dz(){if(Bf_===null)Bf_=AYS(new Xm,0);return Bf_;}
function Da(){if(Bga===null)Bga=AYS(new PW,0);return Bga;}
function Ds(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=APo(b)&&(e+f|0)<=APo(d)){a:{b:{if(b!==d){g=KF(Dl(b));h=KF(Dl(d));if(g!==null&&h!==null){if(g===h)break b;if(!F2(g)&&!F2(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!UJ(h,l[k])){Vv(b,c,d,e,j);b=new J1;P(b);M(b);}j=j+1|0;k=m;}Vv(b,c,d,e,f);return;}if(!F2(g))break a;if(F2(h))break b;else break a;}b=new J1;P(b);M(b);}}Vv(b,c,d,e,f);return;}b=new J1;P(b);M(b);}b=new BT;P(b);M(b);}d=new E5;Bo(d,B(197));M(d);}
function Vv(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function B_(){return Long_fromNumber(new Date().getTime());}
function EH(){return Long_fromNumber(performance.now()*1000000.0);}
function V8(){Go.call(this);this.yq=null;}
function AJ7(a){var b,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(a.yq.gS){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof E2){}else{throw $$e;}}}return;case 1:a:{try{AKL(b);if(C()){break _;}break a;}catch($$e){$$je=Q($$e);if($$je instanceof E2){}else{throw $$e;}}}while(a.yq.gS){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Q($$e);if($$je instanceof E2){}else{throw $$e;}}}return;default:Fa();}}C4().s(a,
b,$p);}
function Sx(){}
function Iq(){}
function Gn(){D.call(this);}
function P4(a){return a.gQ?0:1;}
function Rb(a,b){var c,d;c=a.jP();a:{while(c.qm()){b:{d=c.ld();if(d!==null){if(!d.ep(b))break b;else break a;}if(b===null)break a;}}return 0;}return 1;}
function ABc(a){var b,c,d,e,f;b=J(D,IU(a));c=b.data;d=0;e=OD(a);while(EL(e)){f=d+1|0;c[d]=Lq(e);d=f;}return b;}
function UP(a,b){var c,d,e,f,g;c=b.data;d=a.s;e=c.length;if(e<d)b=AEO(KF(Dl(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Jr(a);while(KK(f)){c=b.data;g=e+1|0;c[e]=KZ(f);e=g;}return b;}
function DF(a,b){var c,d;c=0;d=b.jP();while(d.qm()){if(!a.sU(d.ld()))continue;c=1;}return c;}
function Ge(a,b){var c,d;c=0;d=Jr(a);while(KK(d)){if(b.rD(KZ(d))){AMj(d);c=1;}}return c;}
function Ka(){}
function Gf(){Gn.call(this);this.d7=0;}
function Fy(a,b){AEV(a,a.gQ,b);return 1;}
function Jr(a){var b;b=new TH;b.le=a;b.yr=b.le.d7;b.su=b.le.s;b.nk=(-1);return b;}
function ABh(a,b){var c,d,e;c=a.s;d=0;a:{while(d<c){b:{e=Z(a,d);if(b!==null){if(!b.ep(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function Mx(){Gf.call(this);}
function AEV(a,b,c){if(b>=0){ABB(Wu(a,b),c);return;}c=new BT;P(c);M(c);}
function Tv(a,b){var c,d;if(b>=0){c=Wu(a,b);d=Fn(c);AHm(c);return d;}c=new BT;P(c);M(c);}
function AUD(a){return H3(a);}
function OK(){}
function Xs(){}
function AEL(){var a=this;Mx.call(a);a.pF=null;a.qn=null;a.gQ=0;}
function Q2(){var a=new AEL();A22(a);return a;}
function A22(a){return;}
function A9o(a){return a.gQ;}
function OB(a){a.pF=null;a.qn=null;a.gQ=0;a.d7=a.d7+1|0;}
function H3(a){return AJH(a,a.pF,null,0);}
function Wu(a,b){var c,d,e;if(b<0){c=new BT;P(c);M(c);}if(b<=(a.gQ/2|0)){d=a.pF;e=0;while(e<b){d=d.hs;e=e+1|0;}return AJH(a,d,d===null?null:d.ix,b);}if(b>a.gQ){c=new BT;P(c);M(c);}c=a.qn;e=b;while(e<a.gQ){c=c.ix;e=e+1|0;}return AJH(a,c===null?null:c.hs,c,b);}
function AOf(){D.call(this);}
function F_(){D.call(this);}
function ABO(){F_.call(this);}
function AKN(){F_.call(this);}
function Jk(){}
function Eo(){Gn.call(this);}
function Fv(a,b){var c,d;c=0;if(IU(a)>=b.l0()){d=b.jP();while(d.qm()){if(!K2(a,d.ld()))continue;c=1;}}else{d=OD(a);while(EL(d)){if(b.rD(Lq(d))){c=1;ADX(d);}}}return c;}
function A57(a,b){var c,d;if(a===b)return 1;if(!Sw(b,Jk))return 0;c=b;if(IU(a)!=IU(c))return 0;d=OD(c);while(EL(d)){if(WK(a,Lq(d)))continue;else return 0;}return 1;}
function ATa(a){var b,c,d,e,f,g;b=ABc(a);if(b===null)c=0;else{c=(-1515898884);d=0;while(true){e=b.data;if(d>=e.length)break;f=e[d];g=(f!==null?f.fm():0)^528111840;c=Ns(g,4)^(g>>>7|g<<25)^Ns(c,13);d=d+1|0;}}return c;}
function ET(){}
function AQr(){Eo.call(this);this.l_=null;}
function Gb(){var a=new AQr();A1g(a);return a;}
function A1g(a){a.l_=C8();}
function Xq(a,b){return BQ(a.l_,b,a)!==null?0:1;}
function WK(a,b){return D0(a.l_,b);}
function OD(a){return ACZ(AKj(a.l_));}
function K2(a,b){return Rc(a.l_,b)===null?0:1;}
function IU(a){return a.l_.f8;}
function LX(){}
function FZ(){var a=this;D.call(a);a.w0=null;a.w$=null;}
function ACk(){var a=this;FZ.call(a);a.f8=0;a.cO=null;a.g8=0;a.Ff=0.0;a.uK=0;}
function C8(){var a=new ACk();AVD(a);return a;}
function A6e(a,b){return J(IL,b);}
function AVD(a){var b;b=AG4(16);a.f8=0;a.cO=J(IL,b);a.Ff=0.75;RV(a);}
function AG4(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vj(a){var b;if(a.f8>0){a.f8=0;b=a.cO;ZL(b,0,b.data.length,null);a.g8=a.g8+1|0;}}
function RV(a){a.uK=a.cO.data.length*a.Ff|0;}
function D0(a,b){return VV(a,b)===null?0:1;}
function AEj(a,b){var c,d,e;a:{if(b===null){c=0;b:while(true){if(c>=a.cO.data.length)break a;d=a.cO.data[c];while(d!==null){if(d.d9===null)break b;d=d.eF;}c=c+1|0;}return 1;}c=0;c:while(true){if(c>=a.cO.data.length)break a;d=a.cO.data[c];while(d!==null){e=d.d9;if(b!==e&&!b.ep(e)?0:1)break c;d=d.eF;}c=c+1|0;}return 1;}return 0;}
function WC(a){var b;b=new RW;b.DH=a;return b;}
function CQ(a,b){var c;c=VV(a,b);if(c===null)return null;return c.d9;}
function VV(a,b){var c,d;if(b===null)c=QX(a);else{d=b.fm();c=Qb(a,b,d&(a.cO.data.length-1|0),d);}return c;}
function Qb(a,b,c,d){var e;e=a.cO.data[c];while(e!==null&&!(e.pX==d&&AJa(b,e.eS))){e=e.eF;}return e;}
function QX(a){var b;b=a.cO.data[0];while(b!==null&&b.eS!==null){b=b.eF;}return b;}
function AKj(a){var b;if(a.w0===null){b=new PS;b.Cy=a;a.w0=b;}return a.w0;}
function Rj(a,b,c){return BQ(a,b,c);}
function BQ(a,b,c){var d,e,f,g;if(b===null){d=QX(a);if(d===null){a.g8=a.g8+1|0;d=RS(a,null,0,0);e=a.f8+1|0;a.f8=e;if(e>a.uK)Wz(a);}}else{e=b.fm();f=e&(a.cO.data.length-1|0);d=Qb(a,b,f,e);if(d===null){a.g8=a.g8+1|0;d=RS(a,b,f,e);e=a.f8+1|0;a.f8=e;if(e>a.uK)Wz(a);}}g=d.d9;d.d9=c;return g;}
function RS(a,b,c,d){var e,f;e=new IL;f=null;e.eS=b;e.d9=f;e.pX=d;e.eF=a.cO.data[c];a.cO.data[c]=e;return e;}
function ALL(a,b){var c,d,e,f,g,h,i;c=AG4(!b?1:b<<1);d=J(IL,c);e=d.data;f=0;c=c-1|0;while(f<a.cO.data.length){g=a.cO.data[f];a.cO.data[f]=null;while(g!==null){h=g.pX&c;i=g.eF;g.eF=e[h];e[h]=g;g=i;}f=f+1|0;}a.cO=d;RV(a);}
function Wz(a){ALL(a,a.cO.data.length);}
function Rc(a,b){var c;c=AEr(a,b);if(c===null)return null;return c.d9;}
function AEr(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cO.data[0];while(e!==null){if(e.eS===null)break a;f=e.eF;d=e;e=f;}}else{g=b.fm();c=g&(a.cO.data.length-1|0);e=a.cO.data[c];while(e!==null&&!(e.pX==g&&AJa(b,e.eS))){f=e.eF;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.eF=e.eF;else a.cO.data[c]=e.eF;a.g8=a.g8+1|0;a.f8=a.f8-1|0;return e;}
function A4T(a){return a.f8;}
function Iy(a){var b;if(a.w$===null){b=new PT;b.wh=a;a.w$=b;}return a.w$;}
function AJa(b,c){return b!==c&&!b.ep(c)?0:1;}
function AKk(){F_.call(this);}
function Y2(){D.call(this);}
function Bgc(){var a=new Y2();A0w(a);return a;}
function A0w(a){return;}
function A3R(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gw=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaT(callback);return thread.suspend(function(){try{BcE(b,callback);}catch($e){callback.I4($rt_exception($e));}});}
function BcE(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){CM(c,S2(0,0,B(198),null));return;}e=d.open($rt_ustr(b),1);b=new TT;b.AS=c;b=Cu(b,"handleEvent");e.onBlocked=b;b=new TS;b.Ew=c;b.EQ=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TR;b.DB=c;b=Cu(b,"handleEvent");e.onerror=b;b=new TQ;b.Bt=e;b=Cu(b,"handleEvent");e.onupgradeneeded=b;}
function A5G(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gw=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaT(callback);return thread.suspend(function(){try{A_$(b,c,callback);}catch($e){callback.I4($rt_exception($e));}});}
function A_$(b,c,d){var e;b=b.transaction("filesystem","readwrite").objectStore("filesystem");c=P1($rt_ustr(c));e=b.delete(c);b=new TP;b.CN=d;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TM;b.Di=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A_U(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gw=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaT(callback);return thread.suspend(function(){try{Bbk(b,c,callback);}catch($e){callback.I4($rt_exception($e));}});}
function Bbk(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=P1($rt_ustr(c));e=b.get(c);b=new TL;b.Ax=d;b.xf=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new TK;b.Em=d;b=Cu(b,"handleEvent");e.onerror=b;}
function A5B(b,c,d,e,f){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gw=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaT(callback);return thread.suspend(function(){try{Bcb(b,c,d,e,f,callback);}
catch($e){callback.I4($rt_exception($e));}});}
function Bcb(b,c,d,e,f,g){var h,i;h=(b.transaction("filesystem","readonly").objectStore("filesystem")).openCursor();i=$rt_createIntArray(1);b=new Rt;b.ET=h;b.Et=g;b.y6=i;b.vJ=c;b.Bp=e;b.Da=d;b.xl=f;b=Cu(b,"handleEvent");h.onsuccess=b;b=new Ru;b.DT=g;b.wO=i;b=Cu(b,"handleEvent");h.onerror=b;}
function AUC(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gw=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaT(callback);return thread.suspend(function(){try{Bc9(b,c,callback);}catch($e){callback.I4($rt_exception($e));}});}
function Bc9(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=P1($rt_ustr(c));e=b.get(c);b=new Rq;b.CV=d;b.vb=e;b=Cu(b,"handleEvent");e.onsuccess=b;b=new Rr;b.El=d;b=Cu(b,"handleEvent");e.onerror=b;}
function AXZ(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Gw=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.I4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=BaT(callback);return thread.suspend(function(){try{Bbr(b,c,d,e,callback);}catch($e)
{callback.I4($rt_exception($e));}});}
function Bbr(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(B_(),new Long(596067632, 383)).lo;c=A5Y($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Rs;c.BB=f;b=Cu(c,"handleEvent");h.onsuccess=b;b=new Rv;b.BU=f;b=Cu(b,"handleEvent");h.onerror=b;}
function A8H(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function UI(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function A0T(b){return typeof b==='undefined'? -1:typeof b.lastModified==='undefined'? -1:b.lastModified;}
function P1(b){return [b];}
function AZ3(b){return typeof b==="string"?b:typeof b==="undefined"?null:typeof b[0]==="string"?b[0]:null;}
function A5Y(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AE7(){var a=this;D.call(a);a.Fk=0;a.E8=0;a.uD=null;a.xW=null;}
function S2(a,b,c,d){var e=new AE7();AXx(e,a,b,c,d);return e;}
function AXx(a,b,c,d,e){a.Fk=b;a.E8=c;a.uD=d;a.xW=e;}
function EX(){var a=this;D.call(a);a.HI=null;a.td=0;}
function Bgd(a,b){var c=new EX();FU(c,a,b);return c;}
function FU(a,b,c){a.HI=b;a.td=c;}
function A0U(a){return a.td;}
function ATD(a,b){return a!==b?0:1;}
function AX_(a){return MQ(a);}
function J2(a){var b;b=Dl(a);if(!Q$(JR(b),F(EX)))b=JR(b);return b;}
function XT(a,b){var c,d;if(J2(b)===J2(a))return S(a.td,b.td);c=new Cc;d=new V;X(d);Bo(c,W(I(I(I(I(d,B(199)),IJ(J2(a))),B(200)),IJ(J2(b)))));M(c);}
function AXJ(a,b){return XT(a,b);}
function E$(){EX.call(this);}
var BfP=null;var BfO=null;var BfN=null;var Bge=null;function AHo(){var b,c,d;b=new E$;FU(b,B(201),0);BfP=b;b=new E$;FU(b,B(202),1);BfO=b;b=new E$;FU(b,B(203),2);BfN=b;c=J(E$,3);d=c.data;d[0]=BfP;d[1]=BfO;d[2]=BfN;Bge=c;}
function Qy(){}
function Vi(){D.call(this);this.yH=null;}
function BaT(b){var c;c=new Vi;c.yH=b;return c;}
function CM(a,b){a.yH.Gw(b);}
function A2g(a,b){a.yH.I4(b);}
function AQN(){D.call(this);}
function Xx(){}
function Xd(){var a=this;D.call(a);a.vr=null;a.Af=null;}
function ARn(a){var b,c,d;if(a.vr.readyState==4){b=new Uint8Array(a.vr.response);c=$rt_createByteArray(b.byteLength);Be();BdU=c;d=0;while(d<Wf().data.length){Wf().data[d]=b[d]<<24>>24;d=d+1|0;}CM(a.Af,B(204));}}
function A1$(a){ARn(a);}
function H6(){D.call(this);}
function AQm(){var a=this;H6.call(a);a.w8=null;a.kp=0;a.Gd=0;a.qP=0;}
function Ux(a){var b=new AQm();AUa(b,a);return b;}
function AUa(a,b){var c;c=b.data.length;a.w8=b;a.kp=0;a.Gd=0;a.qP=0+c|0;}
function A4Q(a){var b,c,d;if(a.kp>=a.qP)b=(-1);else{c=a.w8.data;d=a.kp;a.kp=d+1|0;b=c[d]&255;}return b;}
function A_u(a,b,c,d){var e,f,g,h,i;e=CB(d,a.qP-a.kp|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.w8.data;i=a.kp;a.kp=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function A5C(a){return a.qP-a.kp|0;}
function AWY(a){return;}
function I1(){H6.call(this);this.iA=null;}
function Bgf(a){var b=new I1();Sd(b,a);return b;}
function Sd(a,b){a.iA=b;}
function AKI(a){return a.iA.wZ();}
function GO(a){a.iA.lV();}
function Pt(){}
function P8(){I1.call(this);this.eb=null;}
function O6(a){var b=new P8();AIB(b,a);return b;}
function AIB(a,b){Sd(a,b);a.eb=$rt_createByteArray(8);}
function NV(a,b){var c;c=b.data;return a.iA.od(b,0,c.length);}
function N7(a){var b,c;b=a.iA.Cx();if(b>=0)return b<<24>>24;c=new FI;P(c);M(c);}
function Ke(a,b){var c,d;c=0;while(c<b){d=a.iA.od(a.eb,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function APs(a){return $rt_longBitsToDouble(Tu(a));}
function AA8(a){return $rt_intBitsToFloat(H_(a));}
function AM2(a,b){QW(a,b,0,b.data.length);}
function QW(a,b,c,d){var e,f;if(d<0){e=new BT;P(e);M(e);}if(!d)return;if(a.iA===null){e=new E5;P(e);M(e);}if(b===null){e=new E5;P(e);M(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.iA.od(b,c,d);if(f<0){e=new FI;P(e);M(e);}c=c+f|0;d=d-f|0;}return;}e=new BT;P(e);M(e);}
function H_(a){var b;if(Ke(a,4)<0){b=new FI;P(b);M(b);}return (a.eb.data[0]&255)<<24|(a.eb.data[1]&255)<<16|(a.eb.data[2]&255)<<8|a.eb.data[3]&255;}
function Tu(a){var b;if(Ke(a,8)<0){b=new FI;P(b);M(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.eb.data[0]&255)<<24|(a.eb.data[1]&255)<<16|(a.eb.data[2]&255)<<8|a.eb.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.eb.data[4]&255)<<24|(a.eb.data[5]&255)<<16|(a.eb.data[6]&255)<<8|a.eb.data[7]&255),new Long(4294967295, 0)));}
function XS(a){var b;if(Ke(a,2)<0){b=new FI;P(b);M(b);}return ((a.eb.data[0]&255)<<24>>16|a.eb.data[1]&255)<<16>>16;}
function APM(a){var b;if(Ke(a,2)<0){b=new FI;P(b);M(b);}return ((a.eb.data[0]&255)<<8|a.eb.data[1]&255)&65535;}
function GV(a){return ALH(a,APM(a));}
function ALH(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);QW(a,c,0,b);return AW_(c,d,0,b);}
function AW_(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Hy;Bo(m,B(205));M(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Hy;Bo(m,B(206));M(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Hy;Bo(m,B(206));M(m);}f=j+1|0;if(f>=e){m=new Hy;Bo(m,B(206));M(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return Lo(c,0,g);}m=new Hy;Bo(m,B(206));M(m);}
function MY(){var a=this;D.call(a);a.ww=null;a.H_=null;}
function R9(b){var c,d;if(IE(b))M(ALx(b));if(!APY(Ba(b,0)))M(ALx(b));c=1;while(c<Bi(b)){a:{d=Ba(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(APY(d))break a;else M(ALx(b));}}c=c+1|0;}}
function APY(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function Yc(b){var c;if(b===null){b=new Cc;Bo(b,B(207));M(b);}R9(b);c=CQ(Bgg,AOo(b));if(c!==null)return c;c=new Vp;P(c);c.IB=b;M(c);}
function AN8(a,b){var c,d,$$je;a:{try{b=AJT(ADP(AQ$(AFB(a),Bgh),Bgh),b);}catch($$e){$$je=Q($$e);if($$je instanceof G0){c=$$je;break a;}else{throw $$e;}}return b;}d=new W$;d.os=1;d.rU=1;d.vB=B(208);d.jG=c;M(d);}
function ABF(a,b){return AJL(a.ww,b.ww);}
function A6F(a,b){return ABF(a,b);}
function WY(){var a=this;I1.call(a);a.gj=null;a.ol=null;a.lQ=0;a.oK=0;a.yg=0;a.x0=0;a.wI=null;a.G5=null;}
function AS$(a){var b;if(a.lQ){b=new BL;Bo(b,B(209));M(b);}return AL6(a,a.wI,0,1)==(-1)?(-1):a.wI.data[0]&255;}
function AL6(a,b,c,d){var e,f,g;if(a.lQ){e=new BL;Bo(e,B(209));M(e);}if(b===null){e=new E5;P(e);M(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.oK)return (-1);f=0;AAO(a.gj,b,c,d);a:{while(!a.oK){if(!a.gj.N)ABq(a);b:{g=AF9(a.gj,0);f=f+(a.gj.pQ-c|0)|0;c=a.gj.pQ;switch(g){case -3:e=new BL;Bo(e,a.gj.b9);M(e);case 1:case 2:break;default:break b;}a.oK=1;if(g==2)return (-1);}if(!a.gj.ib)break a;}}return f;}e=new BT;P(e);M(e);}
function A0v(a){var b;if(!a.lQ){if(!a.oK)return 1;return 0;}b=new BL;Bo(b,B(209));M(b);}
function A8r(a){if(!a.lQ){if(a.x0)AHd(a.gj);if(a.yg)a.iA.lV();a.lQ=1;}}
function ABq(a){var b,c;if(a.lQ){b=new BL;Bo(b,B(209));M(b);}a:{c=a.iA.od(a.ol,0,a.ol.data.length);if(c==(-1)){if(a.gj.hZ.d0)break a;if(Yp(a.gj))break a;a.ol.data[0]=0;c=1;}AKe(a.gj,a.ol,0,c,1);return;}if(Long_ne(a.gj.hZ.rW,Long_fromInt(-1))){b=new BL;Bo(b,B(210));M(b);}b=new FI;Bo(b,B(211));M(b);}
function Nc(){var a=this;D.call(a);a.h8=null;a.ju=0;a.no=Long_ZERO;}
function Ji(a,b){var c,d;c=a.h8.data;d=a.ju;a.ju=d+1|0;c[d]=b;if(a.ju==a.h8.data.length){Tf(a,a.h8,0);a.ju=0;}a.no=Long_add(a.no,Long_fromInt(1));}
function ADZ(a,b,c,d){a:{while(a.ju){if(d<=0)break a;Ji(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.h8.data.length){Tf(a,b,c);c=c+a.h8.data.length|0;d=d-a.h8.data.length|0;a.no=Long_add(a.no,Long_fromInt(a.h8.data.length));}while(d>0){Ji(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function APq(a){var b;b=Long_shl(a.no,3);Ji(a,(-128));while(a.ju){Ji(a,0);}AK8(a,b);MI(a);}
function ADz(){var a=this;Nc.call(a);a.pA=0;a.pB=0;a.pC=0;a.pD=0;a.pE=0;a.el=null;a.mW=0;}
function Ba$(){var a=new ADz();A$q(a);return a;}
function A$q(a){a.h8=$rt_createByteArray(4);a.ju=0;a.el=$rt_createIntArray(80);OQ(a);}
function Tf(a,b,c){var d,e;d=b.data;b=a.el.data;e=a.mW;a.mW=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.mW==16)MI(a);}
function HQ(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AK8(a,b){if(a.mW>14)MI(a);a.el.data[14]=b.hi;a.el.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AMg(a,b,c){APq(a);HQ(a,a.pA,b,c);HQ(a,a.pB,b,c+4|0);HQ(a,a.pC,b,c+8|0);HQ(a,a.pD,b,c+12|0);HQ(a,a.pE,b,c+16|0);OQ(a);return 20;}
function OQ(a){var b;a.no=Long_ZERO;a.ju=0;b=0;while(b<a.h8.data.length){a.h8.data[b]=0;b=b+1|0;}a.pA=1732584193;a.pB=(-271733879);a.pC=(-1732584194);a.pD=271733878;a.pE=(-1009589776);a.mW=0;b=0;while(b!=a.el.data.length){a.el.data[b]=0;b=b+1|0;}}
function Vr(a,b,c,d){return b^c^d;}
function Fg(a,b,c){return b<<c|b>>>(32-c|0);}
function MI(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.el.data[b]=Fg(a,a.el.data[b-3|0]^a.el.data[b-8|0]^a.el.data[b-14|0]^a.el.data[b-16|0],1);b=b+1|0;}c=a.pA;d=a.pB;e=a.pC;f=a.pD;g=a.pE;h=0;while(h<=19){i=(((Fg(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.el.data[h]|0)+1518500249|0;b=Fg(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Fg(a,c,5)+Vr(a,d,e,f)|0)+g|0)+a.el.data[j]|0)+1859775393|0;b=Fg(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Fg(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.el.data[h]|0)
+(-1894007588)|0;b=Fg(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Fg(a,c,5)+Vr(a,d,e,f)|0)+g|0)+a.el.data[j]|0)+(-899497514)|0;b=Fg(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.pA=a.pA+c|0;a.pB=a.pB+d|0;a.pC=a.pC+e|0;a.pD=a.pD+f|0;a.pE=a.pE+g|0;a.mW=0;b=0;while(b!=a.el.data.length){a.el.data[b]=0;b=b+1|0;}}
function AJi(){D.call(this);}
function Bgi(){var a=new AJi();A6f(a);return a;}
function A6f(a){return;}
function Pc(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Om(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=CB(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Nv(b,c){var d,e,f,g;d=b.data;e=AEO(KF(Dl(b)),c);f=CB(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function M5(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new Cc;P(f);M(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZL(b,c,d,e){var f,g;if(c>d){e=new Cc;P(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function P6(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=J(D,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=CB(j,h+f|0);l=h+(2*f|0)|0;m=CB(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qi(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AOy(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new Cc;P(f);M(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=b[e];if(h==c)break;if(c>=h){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function Jh(){var a=this;D.call(a);a.Df=0;a.B9=null;a.xk=null;}
function Bgj(a,b,c){var d=new Jh();RP(d,a,b,c);return d;}
function RP(a,b,c,d){a.Df=b;a.B9=c;a.xk=d;}
function ABJ(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(YA(b,a.B9)<a.Df){c=0;d=null;if(c<10){e=1;f=b.bg;$p=1;continue _;}}return;case 1:AOD(a,b,e,f,d);if(C()){break _;}c=c+1|0;if(c>=10)return;e=1;f=b.bg;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function A5m(a,b,c,d){return CO((c+E(b.q,256)|0)-128|0,E(b.q,128),(d+E(b.q,256)|0)-128|0);}
function AOD(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=K(d.d);h=K(d.e);i=E(b.q,a.xk.data.length);j=a.At(b,g,h);k=j.eG;l=j.e2;m=j.eH;$p=1;case 1:$z
=AAJ(b,k,l,m);if(C()){break _;}c=$z;if(c)return 0;$p=2;case 2:$z=AB9(b,k,l,m);if(C()){break _;}e=$z;if(e!==Bgk)return 0;n=0;while(n<3){o=6;p=0;h=k;q=l;r=m;if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;}return f;case 3:$z=AAJ(b,h,c,r);if(C()){break _;}c=$z;if(c){$p=4;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;continue _;}n=n+1|0;if(n>=3)break;o
=6;p=0;h=k;q=l;r=m;}return f;case 4:$z=AAJ(b,h,q,r);if(C()){break _;}c=$z;if(!c){$p=5;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 5:$z=AB9(b,h,q,r);if(C()){break _;}e=$z;if(!e.nG()){c=q+1|0;$p=6;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|
0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 6:a:{$z=AAJ(b,h,c,r);if(C()){break _;}c=$z;if(!c){b:{s=h+0.5;t=q+1.0;u=r+0.5;if(d===null){v=s-b.fl;w=t-b.p2;x=u-b.fk;if(v*v+w*w+x*x>=1024.0)break b;break a;}y=s-d.d;z=t-d.j;ba=u-d.e;if(y*y+z*z+ba*ba<1024.0)break a;}c:{try{e=a.xk.data[i];bb=J(FT,1);bb.data[0]=F(F1);e=WL(e,bb);bb=J(D,1);bb.data[0]=b;bc=WO(e,bb);break c;}catch($$e){$$je=Q($$e);if($$je instanceof BD){}else{throw $$e;}}return f;}y=s;z=t;ba=u;KB(bc,y,z,ba,N(b.q)*360.0,0.0);$p=7;continue _;}}p=p+1
|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 7:$z=bc.uU(y,z,ba);if(C()){break _;}c=$z;if(c){f=f+1|0;$p=8;continue _;}p=p+1|0;while(true){if(p<3){h=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;case 8:AOn(b,bc);if(C()){break _;}p=p+1|0;while(true){if(p<3){h
=h+(E(b.q,o)-E(b.q,o)|0)|0;q=q+(E(b.q,1)-E(b.q,1)|0)|0;r=r+(E(b.q,o)-E(b.q,o)|0)|0;c=q-1|0;$p=3;continue _;}n=n+1|0;if(n>=3)break;o=6;p=0;h=k;q=l;r=m;}return f;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,$p);}
function U9(){Jh.call(this);this.GE=null;}
function A18(a,b,c,d){return CO((c+E(b.q,256)|0)-128|0,E(b.q,E(b.q,E(b.q,112)+8|0)+8|0),(d+E(b.q,256)|0)-128|0);}
function C6(){var a=this;D.call(a);a.mG=0;a.bH=null;a.bB=null;a.l=null;a.bS=0.0;a.cS=0.0;a.bR=0.0;a.d=0.0;a.j=0.0;a.e=0.0;a.g=0.0;a.i=0.0;a.h=0.0;a.u=0.0;a.I=0.0;a.P=0.0;a.T=0.0;a.L=null;a.cx=0;a.j0=0;a.x$=0;a.ln=0;a.cR=0;a.c4=0.0;a.c1=0.0;a.eP=0.0;a.tY=0.0;a.ha=0.0;a.i9=0;a.fI=0.0;a.rj=0;a.cs=0.0;a.b7=0.0;a.ct=0.0;a.em=0.0;a.ru=0.0;a.o7=0;a.n7=0.0;a.I_=0;a.m=null;a.oS=0;a.nL=0;a.cV=0;a.n8=0;a.tp=0;a.dy=0;a.ga=0;a.oB=0;a.tL=null;a.g5=0.0;a.g0=0.0;}
function Bgl(a){var b=new C6();FD(b,a);return b;}
function FD(a,b){a.mG=0;a.L=Nx(0.0,0.0,0.0,0.0,0.0,0.0);a.cx=0;a.j0=0;a.x$=0;a.ln=1;a.cR=0;a.c4=0.0;a.c1=0.6000000238418579;a.eP=1.7999999523162842;a.tY=0.0;a.ha=0.0;a.i9=1;a.fI=0.0;a.rj=1;a.em=0.0;a.ru=0.0;a.o7=0;a.n7=0.0;a.I_=0;a.m=new DB;a.oS=0;a.nL=1;a.cV=0;a.n8=300;a.tp=0;a.dy=0;a.ga=300;a.oB=1;a.l=b;CU(a,0.0,0.0,0.0);}
function Cb(a){a.cR=1;}
function D2(a,b,c){a.c1=b;a.eP=c;}
function W0(a,b,c){a.u=b;a.I=c;}
function CU(a,b,c,d){var e,f,g,h,i,j;a.d=b;a.j=c;a.e=d;e=a.c1/2.0;f=a.eP/2.0;g=a.L;h=e;i=b-h;j=f;M$(g,i,c-j,d-h,b+h,c+j,d+h);}
function AJe(a){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jk();if(C()){break _;}return;default:Fa();}}C4().s(a,$p);}
function AE0(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bB!==null&&a.bB.cR)a.bB=null;a.oS=a.oS+1|0;a.tY=a.ha;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.T=a.I;a.P=a.u;$p=1;case 1:$z=a.HQ();if(C()){break _;}b=$z;if(!b)a.tp=0;else{a:{if(!a.tp&&!a.oB){c=Ce(a.g*a.g*0.20000000298023224+a.i*a.i+a.h*a.h*0.20000000298023224)*0.20000000298023224;if(c>1.0)c=1.0;Di(a.l,a,B(212),c,1.0+(N(a.m)-N(a.m))*0.4000000059604645);d
=K(a.L.M);b=0;e=d+1.0;while(b<1.0+a.c1*20.0){f=(N(a.m)*2.0-1.0)*a.c1;g=(N(a.m)*2.0-1.0)*a.c1;BV(a.l,B(213),a.d+f,e,a.e+g,a.g,a.i-N(a.m)*0.20000000298023224,a.h);b=b+1|0;}b=0;while(true){if(b>=1.0+a.c1*20.0)break a;f=(N(a.m)*2.0-1.0)*a.c1;g=(N(a.m)*2.0-1.0)*a.c1;BV(a.l,B(214),a.d+f,e,a.e+g,a.g,a.i,a.h);b=b+1|0;}}}a.fI=0.0;a.tp=1;a.cV=0;}if(a.cV>0){if(!(a.cV%20|0)){h=null;b=1;$p=4;continue _;}a.cV=a.cV-1|0;}$p=2;case 2:$z=ACv(a);if(C()){break _;}b=$z;if(b){h=null;b=10;$p=3;continue _;}if(a.j>=(-64.0)){a.oB=0;return;}$p
=5;continue _;case 3:a.fs(h,b);if(C()){break _;}a.cV=600;if(a.j>=(-64.0)){a.oB=0;return;}$p=5;continue _;case 4:a.fs(h,b);if(C()){break _;}a.cV=a.cV-1|0;$p=2;continue _;case 5:a.DV();if(C()){break _;}a.oB=0;return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function X9(a){Cb(a);}
function AHl(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Un(a.L,b,c,d);f=a.l;$p=1;case 1:$z=X2(f,a,e);if(C()){break _;}f=$z;if(f.s>0)return 0;f=a.l;$p=2;case 2:$z=AJr(f,e);if(C()){break _;}g=$z;return g?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ARM(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.o7){F3(a.L,b,c,d);a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.em;a.e=(a.L.S+a.L.W)/2.0;return;}e=a.d;f=a.e;g=Qk(a.L);h=a.l;i=Jm(a.L,b,c,d);$p=1;case 1:$z
=X2(h,a,i);if(C()){break _;}j=$z;k=0;l=c;while(k<CY(j)){l=Wj(Z(j,k),a.L,l);k=k+1|0;}F3(a.L,0.0,l,0.0);if(a.ln){m=d;n=b;}else if(c===l){m=d;n=b;}else{n=0.0;m=n;l=n;}a:{b:{if(!a.cx){if(c===l)break b;if(c>=0.0)break b;}o=1;break a;}o=0;}p=0;while(p<CY(j)){n=QB(Z(j,p),a.L,n);p=p+1|0;}F3(a.L,n,0.0,0.0);if(!a.ln&&b!==n){n=0.0;m=n;l=n;}k=0;while(k<CY(j)){m=Uq(Z(j,k),a.L,m);k=k+1|0;}F3(a.L,0.0,0.0,m);if(!a.ln&&d!==m){n=0.0;m=n;l=n;}c:{if(a.ru<=0.0){q=n;r=l;s=m;}else if(!o){q=n;r=l;s=m;}else if(a.em>=0.05000000074505806)
{q=n;r=l;s=m;}else{if(b!==n)break c;if(d!==m)break c;q=n;r=l;s=m;}a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.em;a.e=(a.L.S+a.L.W)/2.0;t=S(b,q);a.j0=!t&&d===s?0:1;k=S(c,r);a.cx=k&&c<0.0?1:0;a.x$=!a.j0&&!k?0:1;if(!a.cx){if(r<0.0)a.fI=a.fI-r;}else if(a.fI>0.0){u=a.fI;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.ha=a.ha+Ce(l*l+m*m)*0.6;if(!a.i9){a.em=a.em*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;}r=a.ru;i=Qk(a.L);Xn(a.L,
g);h=a.l;g=Jm(a.L,b,r,d);$p=2;case 2:$z=X2(h,a,g);if(C()){break _;}h=$z;y=0;while(y<CY(h)){r=Wj(Z(h,y),a.L,r);y=y+1|0;}F3(a.L,0.0,r,0.0);if(a.ln){s=d;q=b;}else if(c===r){s=d;q=b;}else{q=0.0;s=q;r=q;}k=0;while(k<CY(h)){q=QB(Z(h,k),a.L,q);k=k+1|0;}F3(a.L,q,0.0,0.0);if(!a.ln&&b!==q){q=0.0;s=q;r=q;}t=0;while(t<CY(h)){s=Uq(Z(h,t),a.L,s);t=t+1|0;}F3(a.L,0.0,0.0,s);if(!a.ln&&d!==s){q=0.0;s=q;r=q;}if(n*n+m*m>=q*q+s*s){Xn(a.L,i);q=n;r=l;s=m;}else a.em=a.em+0.5;a.d=(a.L.R+a.L.V)/2.0;a.j=a.L.M+a.c4-a.em;a.e=(a.L.S+a.L.W)
/2.0;t=S(b,q);a.j0=!t&&d===s?0:1;k=S(c,r);a.cx=k&&c<0.0?1:0;a.x$=!a.j0&&!k?0:1;if(!a.cx){if(r<0.0)a.fI=a.fI-r;}else if(a.fI>0.0){u=a.fI;$p=3;continue _;}if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.ha=a.ha+Ce(l*l+m*m)*0.6;if(!a.i9){a.em=a.em*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;case 3:a.DJ(u);if(C()){break _;}a.fI=0.0;if(t)a.g=0.0;if(k)a.i=0.0;if(d!==s)a.h=0.0;l=a.d-e;m=a.e-f;a.ha=a.ha+Ce(l*l+m*m)*0.6;if(!a.i9){a.em=a.em
*0.4000000059604645;$p=4;continue _;}v=K(a.d);w=K(a.j-0.20000000298023224-a.c4);x=K(a.e);i=a.l;$p=6;continue _;case 4:$z=a.HQ();if(C()){break _;}t=$z;i=a.l;h=a.L;$p=5;case 5:$z=ARh(i,h);if(C()){break _;}k=$z;if(!k){if(a.cV<=0)a.cV= -a.nL;if(t&&a.cV>0){Di(a.l,a,B(215),0.699999988079071,1.600000023841858+(N(a.m)-N(a.m))*0.4000000059604645);a.cV= -a.nL;}return;}k=1;$p=7;continue _;case 6:$z=ACE(i,v,w,x);if(C()){break _;}y=$z;if(a.ha>a.rj&&y>0){a.rj=a.rj+1|0;L();h=Be0.data[y].gK;if(!Be0.data[y].b_.nG())Di(a.l,a,
Ko(h),AMV(h)*0.15000000596046448,Yn(h));i=Be0.data[y];h=a.l;$p=8;continue _;}a.em=a.em*0.4000000059604645;$p=4;continue _;case 7:a.F2(k);if(C()){break _;}if(!t){a.cV=a.cV+1|0;if(!a.cV)a.cV=300;}if(t&&a.cV>0){Di(a.l,a,B(215),0.699999988079071,1.600000023841858+(N(a.m)-N(a.m))*0.4000000059604645);a.cV= -a.nL;}return;case 8:i.oJ(h,v,w,x,a);if(C()){break _;}a.em=a.em*0.4000000059604645;$p=4;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function A1W(a){return null;}
function AKa(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:a.fs(c,b);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,$p);}
function Zq(a,b){return;}
function AFa(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=Dw(a.L,0.0,(-0.4000000059604645),0.0);d=Bf1;$p=1;case 1:$z=AAA(b,c,d,a);if(C()){break _;}e=$z;return e;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AGM(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.j+a.rN();d=K(a.d);e=EY(K(c));f=K(a.e);g=a.l;$p=1;case 1:$z=ACE(g,d,e,f);if(C()){break _;}h=$z;if(h){L();if(Be0.data[h].b_===b){b=a.l;$p=2;continue _;}}return 0;case 2:$z=AEQ(b,d,e,f);if(C()){break _;}d=$z;return c>=(e+1|0)-(JE(d)-0.1111111119389534)?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ACv(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=Dw(a.L,0.0,(-0.4000000059604645),0.0);d=Bf2;$p=1;case 1:$z=AOz(b,c,d);if(C()){break _;}e=$z;return e;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function L7(a,b,c,d){var e,f,g;e=D_(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;c=c*d;f=Br(a.u*3.1415927410125732/180.0);g=BC(a.u*3.1415927410125732/180.0);a.g=a.g+b*g-c*f;a.h=a.h+c*g+b*f;}}
function ADO(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(a.d);d=(a.L.U-a.L.M)*0.66;e=K(a.j-a.c4+d);f=K(a.e);g=a.l;$p=1;case 1:$z=ANp(g,c,e,f);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AUL(a,b){a.l=b;}
function KB(a,b,c,d,e,f){a.d=b;a.bS=b;b=c+a.c4;a.j=b;a.cS=b;a.e=d;a.bR=d;a.u=e;a.I=f;CU(a,a.d,a.j,a.e);}
function ASc(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return D_(c*c+d*d+e*e);}
function AGR(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return e*e+f*f+g*g;}
function Sv(a,b,c,d){var e,f,g;e=a.d-b;f=a.j-c;g=a.e-d;return Ce(e*e+f*f+g*g);}
function LI(a,b){var c,d,e;c=a.d-b.d;d=a.j-b.j;e=a.e-b.e;return c*c+d*d+e*e;}
function A62(a,b){return;}
function A5N(a,b){var c,d,e,f,g;c=b.d-a.d;d=b.e-a.e;e=c<0.0? -c:c;f=d<0.0? -d:d;if(e>f)f=e;if(f>=0.009999999776482582){e=Ce(f);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;e=f*g;c=c*0.05000000074505806;e=e*0.05000000074505806;c=c*(1.0-a.n7);e=e*(1.0-a.n7);Ht(a, -c,0.0, -e);Ht(b,c,0.0,e);}}
function Ht(a,b,c,d){a.g=a.g+b;a.i=a.i+c;a.h=a.h+d;}
function AJP(a,b,c){return 0;}
function A9T(a){return 0;}
function A75(a){return 0;}
function A_t(a,b,c){return;}
function Sn(a,b){var c,d,e;c=a.d-b.x;d=a.j-b.z;e=a.e-b.w;return AHk(a,c*c+d*d+e*e);}
function AHk(a,b){var c;c=AP3(a.L)*64.0;return b>=c*c?0:1;}
function ALC(a,b){var c,d;c=$rt_createDoubleArray(3);d=c.data;d[0]=a.d;d[1]=a.j;d[2]=a.e;HK(b,B(216),Wh(a,c));c=$rt_createDoubleArray(3);d=c.data;d[0]=a.g;d[1]=a.i;d[2]=a.h;HK(b,B(217),Wh(a,c));c=$rt_createFloatArray(2);d=c.data;d[0]=a.u;d[1]=a.I;HK(b,B(218),AMI(a,c));ASf(b,B(219),a.fI);Fu(b,B(220),a.cV<<16>>16);Fu(b,B(221),a.ga<<16>>16);S$(b,B(222),a.cx);ABX(a,b);}
function Y0(a,b){var c,d,e,f,g;c=Kp(b,B(216));d=Kp(b,B(217));e=Kp(b,B(218));CU(a,0.0,0.0,0.0);a.g=Fd(d,0).iL;a.i=Fd(d,1).iL;a.h=Fd(d,2).iL;f=Fd(c,0).iL;a.d=f;a.cs=f;a.bS=f;f=Fd(c,1).iL;a.j=f;a.b7=f;a.cS=f;f=Fd(c,2).iL;a.e=f;a.ct=f;a.bR=f;g=Fd(e,0).nn;a.u=g;a.P=g;g=Fd(e,1).nn;a.I=g;a.T=g;a.fI=AMO(b,B(219));a.cV=FM(b,B(220));a.ga=FM(b,B(221));a.cx=UD(b,B(222));CU(a,a.d,a.j,a.e);AO4(a,b);}
function Wh(a,b){var c,d,e,f,g;b=b.data;c=Mb();d=b.length;e=0;while(e<d){f=b[e];g=new Mt;Cw(g);g.iL=f;Jz(c,g);e=e+1|0;}return c;}
function AMI(a,b){var c,d,e;b=b.data;c=Mb();d=b.length;e=0;while(e<d){Jz(c,A60(b[e]));e=e+1|0;}return c;}
function AB1(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0.0;$p=1;case 1:$z=AGL(a,b,c,d);if(C()){break _;}e=$z;return e;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AGL(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Hf(a.l,a.d,a.j+d,a.e,KH(b,c));e.g_=10;f=a.l;$p=1;case 1:AOn(f,e);if(C()){break _;}return e;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AHE(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.j+a.rN());d=K(a.e);e=a.l;$p=1;case 1:$z=AAJ(e,b,c,d);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AWS(a,b){return 0;}
function AW$(a,b){return null;}
function AFi(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bB.cR){a.bB=null;return;}a.g=0.0;a.i=0.0;a.h=0.0;$p=1;case 1:a.eq();if(C()){break _;}CU(a,a.bB.d,a.bB.j+a.c4+a.bB.Ai(),a.bB.e);a.g0=a.g0+a.bB.u-a.bB.P;a.g5=a.g5+a.bB.I-a.bB.T;while(a.g0>=180.0){a.g0=a.g0-360.0;}while(a.g0<(-180.0)){a.g0=a.g0+360.0;}while(a.g5>=180.0){a.g5=a.g5-360.0;}while(a.g5<(-180.0)){a.g5=a.g5+360.0;}b=a.g0*0.5;c=a.g5*0.5;d=10.0;if(b>d)b
=d;e=(-10.0);if(b<e)b=e;if(c<=d)d=c;if(d>=e)e=d;a.g0=a.g0-b;a.g5=a.g5-e;a.u=a.u+b;a.I=a.I+e;return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function A9X(a){return a.eP*0.75;}
function Pq(a,b){a.g5=0.0;a.g0=0.0;if(a.bB===b){a.bB.bH=null;a.bB=null;}else{if(a.bB!==null)a.bB.bH=null;if(b.bH!==null)b.bH.bB=null;a.bB=b;b.bH=a;}}
function Xu(a,b,c){var d,e;d=a.I;e=a.u;a.u=a.u+b*0.15;a.I=a.I-c*0.15;if(a.I<(-90.0))a.I=(-90.0);if(a.I>90.0)a.I=90.0;a.T=a.T+a.I-d;a.P=a.P+a.u-e;}
function EQ(){var a=this;C6.call(a);a.o1=0;a.JO=0.0;a.Ha=0.0;a.Iw=0.0;a.dG=0.0;a.e_=0.0;a.z6=0.0;a.nj=0.0;a.j5=0.0;a.mi=0.0;a.Hc=0;a.yw=null;a.Hb=0;a.D9=0.0;a.E6=null;a.JB=0.0;a.u2=0;a.JC=0.0;a.bT=0;a.tH=0;a.u0=0;a.dE=0;a.ES=0;a.kI=0.0;a.c2=0;a.dz=0;a.k0=0.0;a.jm=0.0;a.Cp=0;a.Fm=0;a.JH=0.0;a.jW=0.0;a.cg=0.0;a.gn=0.0;a.hk=0;a.iN=0.0;a.gD=0.0;a.kJ=0.0;a.hG=0;a.zX=0.0;a.s2=0.0;}
function PU(a){return a.yw;}
function AXC(a){return a.cR?0:1;}
function A10(a){return a.cR?0:1;}
function AQx(a){return a.eP*0.8500000238418579;}
function ANx(a){var b,c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AE0(a);if(C()){break _;}b=E(a.m,1000);c=a.u0;a.u0=c+1|0;if(b<c){a.u0=(-80);d=a.wD();if(d!==null)Di(a.l,a,d,1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);}if(H$(a)){$p=2;continue _;}if(H$(a)){d=Bf1;$p=3;continue _;}a.ga=a.n8;a.k0=a.jm;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy
>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mi=a.j5;a.e_=a.dG;a.P=a.u;a.T=a.I;return;case 2:$z=AHE(a);if(C()){break _;}e=$z;if(e){d=null;e=1;$p=4;continue _;}if(H$(a)){d=Bf1;$p=3;continue _;}a.ga=a.n8;a.k0=a.jm;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mi=a.j5;a.e_=a.dG;a.P=a.u;a.T=a.I;return;case 3:$z=AGM(a,d);if(C()){break _;}e=$z;if(!e)a.ga=a.n8;else{a.ga=a.ga-1|0;if(a.ga==(-20)){a.ga=0;e
=0;while(e<8){f=N(a.m)-N(a.m);g=N(a.m)-N(a.m);h=N(a.m)-N(a.m);BV(a.l,B(213),a.d+f,a.j+g,a.e+h,a.g,a.i,a.h);e=e+1|0;}d=null;e=2;$p=5;continue _;}a.cV=0;}a.k0=a.jm;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mi=a.j5;a.e_=a.dG;a.P=a.u;a.T=a.I;return;case 4:a.fs(d,e);if(C()){break _;}if(H$(a)){d=Bf1;$p=3;continue _;}a.ga=a.n8;a.k0=a.jm;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2
+1|0;if(a.c2>20){$p=6;continue _;}}a.mi=a.j5;a.e_=a.dG;a.P=a.u;a.T=a.I;return;case 5:a.fs(d,e);if(C()){break _;}a.cV=0;a.k0=a.jm;if(a.dz>0)a.dz=a.dz-1|0;if(a.dE>0)a.dE=a.dE-1|0;if(a.dy>0)a.dy=a.dy-1|0;if(a.bT<=0){a.c2=a.c2+1|0;if(a.c2>20){$p=6;continue _;}}a.mi=a.j5;a.e_=a.dG;a.P=a.u;a.T=a.I;return;case 6:Cb(a);if(C()){break _;}e=0;while(e<20){i=C0(a.m)*0.02;j=C0(a.m)*0.02;k=C0(a.m)*0.02;BV(a.l,B(223),a.d+N(a.m)*a.c1*2.0-a.c1,a.j+N(a.m)*a.eP,a.e+N(a.m)*a.c1*2.0-a.c1,i,j,k);e=e+1|0;}a.mi=a.j5;a.e_=a.dG;a.P=a.u;a.T
=a.I;return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AEX(a){var b,c,d,e;b=0;while(b<20){c=C0(a.m)*0.02;d=C0(a.m)*0.02;e=C0(a.m)*0.02;BV(a.l,B(223),a.d+N(a.m)*a.c1*2.0-a.c1-c*10.0,a.j+N(a.m)*a.eP-d*10.0,a.e+N(a.m)*a.c1*2.0-a.c1-e*10.0,c,d,e);b=b+1|0;}}
function AK0(a){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFi(a);if(C()){break _;}a.z6=a.nj;a.nj=0.0;return;default:Fa();}}C4().s(a,$p);}
function AMB(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jk();if(C()){break _;}$p=2;case 2:a.ot();if(C()){break _;}b=a.d-a.bS;c=a.e-a.bR;d=Ce(b*b+c*c);e=a.dG;f=0.0;a.z6=a.nj;g=0.0;if(d>0.05000000074505806){g=1.0;f=d*3.0;e=CS(c,b)*180.0/3.1415927410125732-90.0;}if(!a.cx)g=0.0;a.nj=a.nj+(g-a.nj)*0.30000001192092896;h=e-a.dG;while(h<(-180.0)){h=h+360.0;}while
(h>=180.0){h=h-360.0;}a.dG=a.dG+h*0.10000000149011612;i=a.u-a.dG;while(i<(-180.0)){i=i+360.0;}while(i>=180.0){i=i-360.0;}j=i>=(-90.0)&&i<90.0?0:1;if(i<(-75.0))i=(-75.0);if(i>=75.0)i=75.0;a.dG=a.u-i;a.dG=a.dG+i*0.10000000149011612;if(j)f=f*(-1.0);while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while(a.u-a.P>=180.0){a.P=a.P+360.0;}while(a.dG-a.e_<(-180.0)){a.e_=a.e_-360.0;}while(a.dG-a.e_>=180.0){a.e_=a.e_+360.0;}while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}a.j5=a.j5+f;return;default:Fa();}}C4().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function A1q(a,b,c){D2(a,b,c);}
function U0(a,b){if(a.bT>0){a.bT=a.bT+b|0;if(a.bT>20)a.bT=20;a.dy=a.o1/2|0;}}
function AB_(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hk=0;if(a.bT<=0)return 0;a.cg=1.5;if(a.dy<=a.o1/2.0){a.tH=a.bT;a.dy=a.o1;a.bT=a.bT-c|0;a.ES=10;a.dE=10;}else{if((a.tH-c|0)>=a.bT)return 0;a.bT=a.tH-c|0;}a.kI=0.0;if(b===null)a.kI=(BP()*2.0|0)*180|0;else{d=b.d-a.d;e=b.e-a.e;while(d*d+e*e<1.0E-4){d=(BP()-BP())*0.01;e=(BP()-BP())*0.01;}a.kI=CS(e,d)*180.0/3.1415927410125732-a.u;ABH(a,b,c,d,e);}if(a.bT>0){Di(a.l,a,
a.vd(),1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);return 1;}Di(a.l,a,a.uO(),1.0,(N(a.m)-N(a.m))*0.20000000298023224+1.0);$p=1;case 1:a.FF(b);if(C()){break _;}return 1;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function A8C(a){return null;}
function AUJ(a){return B(224);}
function AVE(a){return B(224);}
function ABH(a,b,c,d,e){var f,g,h;f=Ce(d*d+e*e);a.g=a.g/2.0;a.i=a.i/2.0;a.h=a.h/2.0;g=a.g;h=f;a.g=g-d/h*0.4000000059604645;a.i=a.i+0.4000000059604645;a.h=a.h-e/h*0.4000000059604645;if(a.i>0.4000000059604645)a.i=0.4000000059604645;}
function AN$(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.u2>0&&b!==null)b.BF(a,a.u2);a.Cp=1;c=a.mm();if(c>0){d=E(a.m,3);e=0;if(e<d){f=1;$p=1;continue _;}}return;case 1:AB1(a,c,f);if(C()){break _;}e=e+1|0;if(e>=d)return;f=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ATN(a){return 0;}
function AQd(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Nh(b-3.0)|0;if(c<=0)return;d=null;$p=1;case 1:a.fs(d,c);if(C()){break _;}d=a.l;c=K(a.d);e=K(a.j-0.20000000298023224-a.c4);f=K(a.e);$p=2;case 2:$z=ACE(d,c,e,f);if(C()){break _;}e=$z;if(e>0){L();d=Be0.data[e].gK;Di(a.l,a,Ko(d),d.oR*0.5,d.pP*0.75);}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ADB(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFa(a);if(C()){break _;}d=$z;if(!d){$p=2;continue _;}e=a.j;L7(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=3;continue _;case 2:$z=ACv(a);if(C()){break _;}d=$z;if(d){e=a.j;L7(a,b,c,0.019999999552965164);f=a.g;g=a.i;h=a.h;$p=4;continue _;}L7(a,b,c,!a.cx?0.019999999552965164:0.10000000149011612);$p=7;continue _;case 3:ARM(a,
f,g,h);if(C()){break _;}a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=a.i-0.02;if(!a.j0){a.jW=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=5;continue _;case 4:ARM(a,f,g,h);if(C()){break _;}a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;a.i=a.i-0.02;if(!a.j0){a.jW=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn
=a.gn+a.cg;return;}f=a.g;e=a.i+0.6000000238418579-a.j+e;g=a.h;$p=6;continue _;case 5:$z=AHl(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jW=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;case 6:$z=AHl(a,f,e,g);if(C()){break _;}d=$z;if(d)a.i=0.30000001192092896;a.jW=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;case 7:$z=AIl(a);if(C()){break _;}d=
$z;if(d){a.fI=0.0;if(a.i<(-0.15))a.i=(-0.15);}e=a.g;f=a.i;g=a.h;$p=8;case 8:ARM(a,e,f,g);if(C()){break _;}if(!a.j0){a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jW=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;}$p=9;case 9:$z=AIl(a);if(C()){break _;}d=$z;if(d)a.i=0.2;a.g=a.g*0.9100000262260437;a.i=a.i*0.9800000190734863;a.h
=a.h*0.9100000262260437;a.i=a.i-0.08;if(a.cx){a.g=a.g*0.6000000238418579;a.h=a.h*0.6000000238418579;}a.jW=a.cg;e=a.d-a.bS;f=a.e-a.bR;i=Ce(e*e+f*f)*4.0;if(i>1.0)i=1.0;a.cg=a.cg+(i-a.cg)*0.4000000059604645;a.gn=a.gn+a.cg;return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AIl(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(a.d);c=K(a.L.M);d=K(a.e);e=a.l;$p=1;case 1:$z=ACE(e,b,c,d);if(C()){break _;}f=$z;L();if(f==Bgm.b)return 1;e=a.l;c=c+1|0;$p=2;case 2:$z=ACE(e,b,c,d);if(C()){break _;}b=$z;return b==Bgm.b?1:0;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function H$(a){return !a.cR&&a.bT>0?1:0;}
function ACx(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hk=a.hk+1|0;b=a.l.bg;if(b!==null){c=b.d-a.d;d=b.j-a.j;e=b.e-a.e;f=c*c+d*d+e*e;if(f>16384.0){$p=2;continue _;}if(a.hk>600&&!E(a.m,800)){if(f>=1024.0){$p=7;continue _;}a.hk=0;}}if(a.bT>0){$p=1;continue _;}a.hG=0;a.iN=0.0;a.gD=0.0;a.kJ=0.0;$p=3;continue _;case 1:a.wM();if(C())
{break _;}$p=3;continue _;case 2:Cb(a);if(C()){break _;}if(a.hk>600&&!E(a.m,800)){if(f>=1024.0){$p=7;continue _;}a.hk=0;}if(a.bT>0){$p=1;continue _;}a.hG=0;a.iN=0.0;a.gD=0.0;a.kJ=0.0;$p=3;case 3:$z=AFa(a);if(C()){break _;}g=$z;$p=4;case 4:$z=ACv(a);if(C()){break _;}h=$z;if(a.hG){if(g)a.i=a.i+0.03999999910593033;else if(h)a.i=a.i+0.03999999910593033;else if(a.cx)AGa(a);}a.iN=a.iN*0.9800000190734863;a.gD=a.gD*0.9800000190734863;a.kJ=a.kJ*0.8999999761581421;i=a.iN;j=a.gD;$p=5;case 5:ADB(a,i,j);if(C()){break _;}k
=a.l;l=Dw(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADR(k,a,l);if(C()){break _;}k=$z;if(k!==null&&k.s>0){m=0;while(true){if(m>=k.s)break a;l=Z(k,m);if(l.rV())l.u1(a);m=m+1|0;}}}return;case 7:Cb(a);if(C()){break _;}if(a.bT>0){$p=1;continue _;}a.hG=0;a.iN=0.0;a.gD=0.0;a.kJ=0.0;$p=3;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AGa(a){a.i=0.41999998688697815;}
function AQW(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(N(a.m)<0.07000000029802322){a.iN=(N(a.m)-0.5)*a.s2;a.gD=N(a.m)*a.s2;}a.hG=N(a.m)>=0.009999999776482582?0:1;if(N(a.m)<0.03999999910593033)a.kJ=(N(a.m)-0.5)*60.0;a.u=a.u+a.kJ;a.I=a.zX;$p=1;case 1:$z=AFa(a);if(C()){break _;}b=$z;$p=2;case 2:$z=ACv(a);if(C()){break _;}c=$z;if(!(!b&&!c))a.hG=N(a.m)>=0.800000011920929?0:1;return;default:Fa();}}C4().s(a,b,c,$p);}
function A4V(a){return;}
function ZA(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:CU(a,b,c+a.eP/2.0,d);e=a.l;f=a.L;$p=1;case 1:$z=ANc(e,f);if(C()){break _;}g=$z;if(!g)return 0;e=a.l;f=a.L;$p=2;case 2:$z=X2(e,a,f);if(C()){break _;}e=$z;if(e.s)return 0;e=a.l;f=a.L;$p=3;case 3:$z=AJr(e,f);if(C()){break _;}g=$z;return g?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ABR(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=null;c=4;$p=1;case 1:a.fs(b,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,$p);}
function I3(){var a=this;EQ.call(a);a.dS=null;a.de=null;a.hm=0;}
function AKn(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.l;d=BY(a.d,a.j+AQx(a),a.e);b=BY(b.d,b.j+b.rN(),b.e);$p=1;case 1:$z=AJt(c,d,b);if(C()){break _;}b=$z;return b!==null?0:1;default:Fa();}}C4().s(a,b,c,d,$p);}
function APU(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hm=0;b=16.0;if(a.de===null){$p=1;continue _;}if(H$(a.de)){c=ASc(a.de,a);d=a.de;$p=2;continue _;}a.de=null;a:{if(!a.hm&&a.de!==null){if(a.dS===null)break a;if
(!E(a.m,20))break a;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 1:$z=a.x5();if(C()){break _;}d=$z;a.de=d;if(a.de!==null){d=a.l;m=a.de;$p=3;continue _;}b:{if(!a.hm&&a.de!==null){if(a.dS===null)break b;if(!E(a.m,20))break b;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<
50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 2:$z=AKn(a,d);if(C()){break _;}e=$z;if(e){d=a.de;$p=4;continue _;}b:{if(!a.hm&&a.de!==null){if(a.dS===null)break b;if(!E(a.m,20))break b;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e
=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 3:$z=AR5(d,a,m,b);if(C()){break _;}d=$z;a.dS=d;c:{if(!a.hm&&a.de!==null){if(a.dS===null)break c;if(!E(a.m,20))break c;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 4:a.nR(d,c);if(C()){break _;}c:{if(!a.hm&&a.de!==null){if(a.dS===null)break c;if
(!E(a.m,20))break c;}if(!(a.dS!==null&&E(a.m,100))){e=(-1);f=(-1);g=(-1);h=(-99999.0);i=0;if(i<50){j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);$p=8;continue _;}if(e>0){d=a.l;$p=10;continue _;}}e=K(a.L.M);$p=5;continue _;}d=a.l;m=a.de;$p=7;continue _;case 5:$z=AFa(a);if(C()){break _;}n=$z;$p=6;case 6:$z=ACv(a);if(C()){break _;}o=$z;if(a.dS!==null&&E(a.m,100)){d=SD(a.dS,a);p=a.c1*2.0;q=p*p;r=e;while(d!==null&&AB5(d,a.d,a.j,a.e)<q&&d.z<=r){AP$(a.dS);if(!ANv(a.dS)){d=SD(a.dS,a);continue;}d
=null;a.dS=null;}a.hG=0;if(d!==null){q=d.x-a.d;s=d.w-a.e;t=d.z-r;a.u=CS(s,q)*180.0/3.1415927410125732-90.0;a.gD=a.s2;if(a.hm&&a.de!==null){u=a.de.d-a.d;r=a.de.e-a.e;v=a.u;a.u=CS(r,u)*180.0/3.1415927410125732-90.0;w=(v-a.u+90.0)*3.1415927410125732/180.0;a.iN= -Br(w)*a.gD*1.0;a.gD=BC(w)*a.gD*1.0;}if(t!==0.0)a.hG=1;}if(N(a.m)<0.800000011920929&&!(!n&&!o))a.hG=1;return;}$p=9;continue _;case 7:$z=AR5(d,a,m,b);if(C()){break _;}d=$z;a.dS=d;e=K(a.L.M);$p=5;continue _;case 8:$z=a.sF(j,k,l);if(C()){break _;}x=$z;if(x
>h){h=x;e=j;f=k;g=l;}i=i+1|0;if(i>=50){if(e>0){d=a.l;$p=10;continue _;}e=K(a.L.M);$p=5;continue _;}j=K(a.d+E(a.m,11)-5.0);k=K(a.j+E(a.m,7)-3.0);l=K(a.e+E(a.m,11)-5.0);continue _;case 9:AQW(a);if(C()){break _;}a.dS=null;return;case 10:$z=AJD(d,a,e,f,g,b);if(C()){break _;}d=$z;a.dS=d;e=K(a.L.M);$p=5;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function AMK(a,b,c){return;}
function AK7(a){return null;}
function ACW(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ZA(a,b,c,d);if(C()){break _;}e=$z;if(!e)return 0;e=b|0;f=c|0;g=d|0;$p=2;case 2:$z=a.sF(e,f,g);if(C()){break _;}h=$z;return h<0.0?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function DP(){I3.call(this);this.Fw=0;}
function ADe(a){var b,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADO(a,b);if(C()){break _;}b=$z;if(b>0.5)a.hk=a.hk+2|0;$p=2;case 2:ACx(a);if(C()){break _;}return;default:Fa();}}C4().s(a,b,$p);}
function ALe(a){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMB(a);if(C()){break _;}if(a.l.i2)return;$p=2;case 2:Cb(a);if(C()){break _;}return;default:Fa();}}C4().s(a,$p);}
function AKw(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(LI(a.l.bg,a)>=256.0)return null;b=a.l.bg;$p=1;case 1:$z=AKn(a,b);if(C()){break _;}c=$z;return !c?null:a.l.bg;default:Fa();}}C4().s(a,b,c,$p);}
function AAQ(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB_(a,b,c);if(C()){break _;}c=$z;if(!c)return 0;if(b!==a)a.de=b;return 1;default:Fa();}}C4().s(a,b,c,$p);}
function AQ4(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<2.5&&b.L.U>a.L.M&&b.L.M<a.L.U){a.dz=20;d=a.Fw;$p=1;continue _;}return;case 1:b.fs(a,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function ABG(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0.5;f=a.l;$p=1;case 1:$z=ANp(f,b,c,d);if(C()){break _;}g=$z;return e-g;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function YG(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=XH(e,f,g,h);if(C()){break _;}f=$z;if(f>E(a.m,8))return 0;$p=2;case 2:$z=ACW(a,b,c,d);if(C()){break _;}f=$z;return !f?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function Jd(){DP.call(this);}
function AH6(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!RF(a.l)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:ADe(a);if(C()){break _;}return;case 2:$z=ADO(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.l;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGj(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.m)*30.0<(b-0.4000000059604645)*2.0)a.cV=300;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AWU(a){BB();return Bgn.cW;}
function Ju(){DP.call(this);}
function AIJ(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!RF(a.l)){$p=1;continue _;}b=1.0;$p=2;continue _;case 1:ADe(a);if(C()){break _;}return;case 2:$z=ADO(a,b);if(C()){break _;}b=$z;if(b<=0.5){$p=1;continue _;}c=a.l;d=K(a.d);e=K(a.j);f=K(a.e);$p=3;case 3:$z=AGj(c,d,e,f);if(C()){break _;}d=$z;if(d&&N(a.m)*30.0<(b-0.4000000059604645)*2.0)a.cV=300;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AHZ(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c<10.0){d=b.d-a.d;e=b.e-a.e;if(!a.dz){f=ATj(a.l,a);f.j=f.j+1.399999976158142;g=b.j-0.20000000298023224-f.j;h=Ce(d*d+e*e)*0.20000000298023224;Di(a.l,a,B(225),1.0,1.0/(N(a.m)*0.4000000059604645+0.800000011920929));b=a.l;$p=1;continue _;}a.u=CS(e,d)*180.0/3.1415927410125732-90.0;a.hm=1;}return;case 1:AOn(b,f);if(C()){break _;}QK(f,
d,g+h,e,0.6000000238418579,12.0);a.dz=30;a.u=CS(e,d)*180.0/3.1415927410125732-90.0;a.hm=1;return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AYW(a){BB();return Bgo.cW;}
function J6(){var a=this;DP.call(a);a.jd=0;a.uv=0;a.Bm=0;a.jX=0;}
function ZW(a){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.uv=a.jd;if(a.jd>0&&a.jX<0)a.jd=a.jd-1|0;if(a.jX>=0)a.jX=2;$p=1;case 1:APU(a);if(C()){break _;}if(a.jX!=1)a.jX=(-1);return;default:Fa();}}C4().s(a,$p);}
function AAS(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(a.jX<=0&&c<3.0)){if(a.jX<=0)break a;if(c>=7.0)break a;}if(!a.jd)Di(a.l,a,B(226),1.0,0.5);a.jX=1;a.jd=a.jd+1|0;if(a.jd==a.Bm){b=a.l;d=a.d;e=a.j;f=a.e;c=3.0;$p=1;continue _;}a.hm=1;}return;case 1:Yg(b,a,d,e,f,c);if(C()){break _;}$p=2;case 2:Cb(a);if(C()){break _;}a.hm=1;return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function Qt(a,b){return (a.uv+(a.jd-a.uv|0)*b)/(a.Bm-2|0);}
function AS4(a){BB();return Bgp.cW;}
function Ku(){DP.call(this);}
function ARy(a){var b,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=1.0;$p=1;case 1:$z=ADO(a,b);if(C()){break _;}b=$z;if(b<0.5&&LI(a.l.bg,a)<256.0)return a.l.bg;return null;default:Fa();}}C4().s(a,b,$p);}
function Zt(a,b,c){var d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0;$p=1;case 1:a:{$z=ADO(a,d);if(C()){break _;}d=$z;if(d>0.5&&!E(a.m,100))a.de=null;else{if(c<=2.0)break a;if(c>=6.0)break a;if(E(a.m,10))break a;if(a.cx){e=b.d-a.d;f=b.e-a.e;g=Ce(e*e+f*f);a.g=e/g*0.5*0.800000011920929+a.g*0.20000000298023224;a.h=f/g*0.5*0.800000011920929+a.h*0.20000000298023224;a.i=0.4000000059604645;}}return;}$p=2;case 2:AQ4(a,
b,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AZX(a){BB();return Bgq.cW;}
function GB(){I3.call(this);}
function AOF(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=c-1|0;$p=1;case 1:$z=ACE(e,b,f,d);if(C()){break _;}g=$z;L();if(g==Be2.b)return 10.0;e=a.l;$p=2;case 2:$z=ANp(e,b,c,d);if(C()){break _;}h=$z;return h-0.5;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ALb(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;f=K(b);g=K(c);h=K(d);$p=1;case 1:$z=XH(e,f,g,h);if(C()){break _;}g=$z;if(g<=8)return 0;$p=2;case 2:$z=ACW(a,b,c,d);if(C()){break _;}g=$z;return !g?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function KO(){GB.call(this);this.x9=0;}
function AG0(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.x9&&b instanceof EQ){a.x9=1;d=1+E(a.m,3)|0;e=0;if(e<d){L();f=Bfo.b;g=1;h=1.0;$p=2;continue _;}}$p=1;case 1:$z=AB_(a,b,c);if(C()){break _;}c=$z;return c;case 2:$z=AGL(a,f,g,h);if(C()){break _;}i=$z;i.i=i.i+N(a.m)*0.05000000074505806;i.g=i.g+(N(a.m)-N(a.m))*0.10000000149011612;i.h=i.h+(N(a.m)-N(a.m))*0.10000000149011612;e
=e+1|0;if(e>=d){$p=1;continue _;}L();f=Bfo.b;g=1;h=1.0;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function A7a(a){return B(227);}
function A4r(a){return B(227);}
function AYv(a){return B(227);}
function II(){GB.call(this);this.qA=0;}
function ATJ(a){return B(228);}
function A9D(a){return B(228);}
function AWc(a){return B(229);}
function AX2(a,b){if(!a.qA)return 0;Pq(b,a);return 1;}
function AWm(a){BB();return Bgr.cW;}
function DB(){var a=this;D.call(a);a.AI=0.0;a.w6=0;}
function Bby(){var a=new DB();A3n(a);return a;}
function BbM(a){var b=new DB();AVS(b,a);return b;}
function A3n(a){return;}
function AVS(a,b){return;}
function NP(a,b){return;}
function AGc(a,b){if(b==32)return Cl(a)*4.294967295E9+(-2.147483648E9)|0;return Cl(a)*Long_toNumber(Long_shl(Long_fromInt(1),CB(32,b)))|0;}
function Lt(a){return AGc(a,32);}
function E(a,b){return Cl(a)*b|0;}
function GA(a){return Long_or(Long_shl(Long_fromInt(Lt(a)),32),Long_fromInt(Lt(a)));}
function N(a){return Cl(a);}
function Cl(a){return Math.random();}
function C0(a){var b,c,d,e;if(a.w6){a.w6=0;return a.AI;}while(true){while(true){b=2.0*Cl(a)-1.0;c=2.0*Cl(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=Ed((-2.0)*A34(d)/d);a.AI=c*e;a.w6=1;return b*e;}
function NG(){D.call(this);}
var Bgs=null;var Bgt=null;function Bgu(){var a=new NG();AIr(a);return a;}
function AIr(a){return;}
function I8(b){var c,d,e,f,g,h;Bbd(F(NG));try{BW();c=Bgv+1|0;d=0;while(d<b){e=Bgv+1|0;Bgv=e;f=Bgw;g=CZ(e);h=new Ry;h.BA=e;h.rm=null;h.o2=null;h.lP=(-1);h.jM=0;BQ(f,g,h);d=d+1|0;}T(Bgs,CZ(c));T(Bgs,CZ(b));return c;}finally{Bc4(F(NG));}}
function W3(b){var c,d,e,f,g;Bbd(F(NG));try{c=b.bk;while(c<b.cy){BW();d=Bgx;Be();e=new Pj;f=BdS.createTexture();e.Is=(-1);e.Ip=(-1);e.Gr=1;e.Hk=0;e.BS=f;g=Tc(d,e);AQ9(b,c,g);T(Bgt,CZ(g));c=c+1|0;}}finally{Bc4(F(NG));}}
function WX(b){var c;c=AAy($rt_createByteArray(b));c.kN=Bgy;return c;}
function Rm(b){return ALZ($rt_createIntArray(b));}
function H7(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new WW;f=0+d|0;KV(e,d);e.bk=0;e.cy=f;e.ys=0;e.xz=0;e.xs=c;return e;}
function AL4(){Bgs=Ci();Bgt=Ci();}
function Pi(){var a=this;D.call(a);a.cP=null;a.eV=null;a.ja=0.0;a.rd=0.0;a.iy=0;a.jR=0;a.Ag=null;}
function AC4(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.rd+(a.ja-a.rd)*b;d=a.cP.f;B3();Bv(d.T+(d.I-d.T)*b,1.0,0.0,0.0);Bv(d.P+(d.u-d.P)*b,0.0,1.0,0.0);HB();BE();e=a.cP.A;f=
K(d.d);g=K(d.j);h=K(d.e);$p=1;case 1:$z=ANp(e,f,g,h);if(C()){break _;}i=$z;BU(i,i,i,1.0);if(a.eV===null){B3();if(a.jR){j=(a.iy+b)/8.0;k=Br(j*3.1415927410125732);Bw( -Br(D_(j)*3.1415927410125732)*0.30000001192092896,Br(D_(j)*3.1415927410125732*2.0)*0.4000000059604645, -k*0.4000000059604645);}Bw(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Bb(32826);if(a.jR){j=(a.iy+b)/8.0;k=Br(j*j*3.1415927410125732);Bv(Br(D_(j)*3.1415927410125732)*70.0,0.0,1.0,
0.0);Bv( -k*20.0,0.0,0.0,1.0);}f=3553;d=a.cP.bo;e=a.cP.f.tL;l=PU(a.cP.f);$p=2;continue _;}B3();if(a.jR){j=(a.iy+b)/8.0;k=Br(j*3.1415927410125732);Bw( -Br(D_(j)*3.1415927410125732)*0.4000000059604645,Br(D_(j)*3.1415927410125732*2.0)*0.20000000298023224, -k*0.20000000298023224);}Bw(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bv(45.0,0.0,1.0,0.0);Bb(32826);if(a.jR){j=(a.iy+b)/8.0;k=Br(j*j*3.1415927410125732);m=Br(D_(j)*3.1415927410125732);Bv( -k*20.0,0.0,1.0,0.0);b
= -m;Bv(b*20.0,0.0,0.0,1.0);Bv(b*80.0,1.0,0.0,0.0);}CC(0.4000000059604645,0.4000000059604645,0.4000000059604645);if(a.eV.bA<256){L();if(!Be0.data[a.eV.bA].en()){f=3553;d=a.cP.bo;e=B(179);$p=5;continue _;}}if(a.eV.bA>=256){f=3553;d=a.cP.bo;e=B(230);$p=3;continue _;}f=3553;d=a.cP.bo;e=B(179);$p=4;continue _;case 2:$z=AD$(d,e,l);if(C()){break _;}g=$z;Cp(f,g);Bw((-1.0),3.5999999046325684,3.5);Bv(120.0,0.0,0.0,1.0);Bv(200.0,1.0,0.0,0.0);Bv((-135.0),0.0,1.0,0.0);CC(1.0,1.0,1.0);Bw(5.599999904632568,0.0,0.0);n=Sl(Bgz,
a.cP.f);CC(1.0,1.0,1.0);ALG(n);BE();Bd(32826);DT();return;case 3:$z=AHz(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=BeW;m=(((DK(a.eV)%16|0)*16|0)+0|0)/256.0;o=(((DK(a.eV)%16|0)*16|0)+16|0)/256.0;p=(((DK(a.eV)/16|0)*16|0)+0|0)/256.0;q=(((DK(a.eV)/16|0)*16|0)+16|0)/256.0;Bb(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Df(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,
1.0,0.0,r,u);Bt(e);Bz(e);Df(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),t,s);G(e,0.0,0.0,(-0.0625),r,s);Bt(e);Bz(e);Df(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Bt(e);Bz(e);Df(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,
(-0.0625),y,s);f=f+1|0;}Bt(e);Bz(e);Df(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Bt(e);Bz(e);Df(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Bt(e);Bd(32826);BE();Bd(32826);DT();return;case 4:$z=AHz(d,e);if(C()){break _;}g=$z;Cp(f,g);BA();e=
BeW;m=(((DK(a.eV)%16|0)*16|0)+0|0)/256.0;o=(((DK(a.eV)%16|0)*16|0)+16|0)/256.0;p=(((DK(a.eV)/16|0)*16|0)+0|0)/256.0;q=(((DK(a.eV)/16|0)*16|0)+16|0)/256.0;Bb(32826);Bw(-0.0,(-0.30000001192092896),0.0);CC(1.5,1.5,1.5);Bv(50.0,0.0,1.0,0.0);Bv(335.0,0.0,0.0,1.0);Bw((-0.9375),(-0.0625),0.0);Bz(e);Df(e,0.0,0.0,1.0);r=o;s=q;G(e,0.0,0.0,0.0,r,s);t=m;G(e,1.0,0.0,0.0,t,s);u=p;G(e,1.0,1.0,0.0,t,u);G(e,0.0,1.0,0.0,r,u);Bt(e);Bz(e);Df(e,0.0,0.0,(-1.0));G(e,0.0,1.0,(-0.0625),r,u);G(e,1.0,1.0,(-0.0625),t,u);G(e,1.0,0.0,(-0.0625),
t,s);G(e,0.0,0.0,(-0.0625),r,s);Bt(e);Bz(e);Df(e,(-1.0),0.0,0.0);f=0;j=m-o;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v;y=w;G(e,x,0.0,(-0.0625),y,s);G(e,x,0.0,0.0,y,s);G(e,x,1.0,0.0,y,u);G(e,x,1.0,(-0.0625),y,u);f=f+1|0;}Bt(e);Bz(e);Df(e,1.0,0.0,0.0);f=0;while(f<16){v=f/16.0;w=o+j*v-0.001953125;x=1.0*v+0.0625;y=w;G(e,x,1.0,(-0.0625),y,u);G(e,x,1.0,0.0,y,u);G(e,x,0.0,0.0,y,s);G(e,x,0.0,(-0.0625),y,s);f=f+1|0;}Bt(e);Bz(e);Df(e,0.0,1.0,0.0);g=0;j=p-q;while(g<16){v=g/16.0;w=q+j*v-0.001953125;z=1.0*v+0.0625;ba
=w;G(e,0.0,z,0.0,r,ba);G(e,1.0,z,0.0,t,ba);G(e,1.0,z,(-0.0625),t,ba);G(e,0.0,z,(-0.0625),r,ba);g=g+1|0;}Bt(e);Bz(e);Df(e,0.0,(-1.0),0.0);f=0;while(f<16){v=f/16.0;w=q+j*v-0.001953125;x=1.0*v;y=w;G(e,1.0,x,0.0,t,y);G(e,0.0,x,0.0,r,y);G(e,0.0,x,(-0.0625),r,y);G(e,1.0,x,(-0.0625),t,y);f=f+1|0;}Bt(e);Bd(32826);BE();Bd(32826);DT();return;case 5:$z=AHz(d,e);if(C()){break _;}g=$z;Cp(f,g);GY(a.Ag,Be0.data[a.eV.bA]);BE();Bd(32826);DT();return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,
$p);}
function ACg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bd(3008);if(a.cP.f.cV<=0){c=a.cP.A.bg;$p=1;continue _;}c=a.cP.bo;d=B(179);$p=2;continue _;case 1:$z=AHE(c);if(C()){break _;}e=$z;if(!e){d=a.cP.f;c=Bf1;$p=3;continue _;}e=K(a.cP.f.d);f=K(a.cP.f.j);g=K(a.cP.f.e);c
=a.cP.bo;d=B(179);$p=4;continue _;case 2:$z=AHz(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeW;BU(1.0,1.0,1.0,0.8999999761581421);Bb(3042);Dg(770,771);e=0;while(e<2){B3();L();f=BgA.ba+(e*16|0)|0;g=(f&15)<<4;f=f&240;h=g;i=h/256.0;h=(h+15.989999771118164)/256.0;j=f;k=j/256.0;j=(j+15.989999771118164)/256.0;f=(e*2|0)-1|0;Bw( -f*0.23999999463558197,(-0.30000001192092896),0.0);Bv(f*10.0,0.0,1.0,0.0);Bz(c);l=h;m=j;G(c,(-0.5),(-0.5),(-0.5),l,m);n=i;G(c,0.5,(-0.5),(-0.5),n,m);m=k;G(c,0.5,0.5,(-0.5),n,m);G(c,(-0.5),
0.5,(-0.5),l,m);Bt(c);BE();e=e+1|0;}BU(1.0,1.0,1.0,1.0);Bd(3042);c=a.cP.A.bg;$p=1;continue _;case 3:$z=AGM(d,c);if(C()){break _;}e=$z;if(!e){Bb(3008);return;}c=a.cP.bo;d=B(231);$p=6;continue _;case 4:$z=AHz(c,d);if(C()){break _;}o=$z;Cp(3553,o);c=a.cP.A;$p=5;case 5:$z=ACE(c,e,f,g);if(C()){break _;}p=$z;L();if(Be0.data[p]===null){d=a.cP.f;c=Bf1;$p=3;continue _;}e=Be0.data[p].ci(2);BA();c=BeW;d=a.cP.f;$p=8;continue _;case 6:$z=AHz(c,d);if(C()){break _;}e=$z;Cp(3553,e);BA();c=BeW;d=a.cP.f;$p=7;case 7:$z=ADO(d,
b);if(C()){break _;}h=$z;BU(h,h,h,0.5);Bb(3042);Dg(770,771);B3();h= -a.cP.f.u/64.0;i=a.cP.f.I/64.0;Bz(c);q=4.0+h;l=4.0+i;G(c,(-1.0),(-1.0),(-0.5),q,l);r=0.0+h;G(c,1.0,(-1.0),(-0.5),r,l);l=0.0+i;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Bt(c);BE();BU(1.0,1.0,1.0,1.0);Bd(3042);Bb(3008);return;case 8:ADO(d,b);if(C()){break _;}BU(0.10000000149011612,0.10000000149011612,0.10000000149011612,0.5);B3();i=e%16|0;j=i/256.0-0.0078125;i=(i+15.989999771118164)/256.0+0.0078125;k=e/16|0;s=k/256.0-0.0078125;h=(k+15.989999771118164)
/256.0+0.0078125;Bz(c);q=i;l=h;G(c,(-1.0),(-1.0),(-0.5),q,l);r=j;G(c,1.0,(-1.0),(-0.5),r,l);l=s;G(c,1.0,1.0,(-0.5),r,l);G(c,(-1.0),1.0,(-0.5),q,l);Bt(c);BE();BU(1.0,1.0,1.0,1.0);d=a.cP.f;c=Bf1;$p=3;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AJg(a){var b,c,d,e;a.rd=a.ja;if(a.jR){a.iy=a.iy+1|0;if(a.iy==8){a.iy=0;a.jR=0;}}b=D9(a.cP.f.K);c=0.4000000059604645;d=(b!==a.eV?0.0:1.0)-a.ja;e=(-0.4000000059604645);if(d>=e)e=d;if(e<=c)c=e;a.ja=a.ja+c;if(a.ja<0.10000000149011612)a.eV=b;}
function AGQ(a){a.ja=0.0;}
function Ps(a){a.iy=(-1);a.jR=1;}
function ANe(a){a.ja=0.0;}
function O(){var a=this;D.call(a);a.ba=0;a.b=0;a.qh=0.0;a.nS=0.0;a.da=0.0;a.cM=0.0;a.c_=0.0;a.dc=0.0;a.cF=0.0;a.dd=0.0;a.gK=null;a.EC=0.0;a.b_=null;}
var BgB=null;var BgC=null;var BgD=null;var BgE=null;var BgF=null;var BgG=null;var BgH=null;var BgI=null;var BgJ=null;var Be0=null;var BgK=null;var BgL=null;var BgM=null;var BgN=null;var BgO=null;var Be6=null;var Be2=null;var Be3=null;var Be$=null;var Bfa=null;var Bfg=null;var Be1=null;var Bf9=null;var BgP=null;var Bf$=null;var BgQ=null;var Bfl=null;var Bfm=null;var Bfr=null;var Bfq=null;var Bfp=null;var Bfb=null;var Bfc=null;var Bfn=null;var Bfe=null;var BgR=null;var BgS=null;var BgT=null;var BgU=null;var BgV
=null;var BgW=null;var BgX=null;var BgY=null;var BgZ=null;var Bg0=null;var Bg1=null;var Bg2=null;var Bg3=null;var Bg4=null;var Bfo=null;var Bg5=null;var Bfh=null;var Bfi=null;var Bfj=null;var Bfk=null;var Bft=null;var Bfs=null;var Be4=null;var Be5=null;var Be_=null;var Bfv=null;var Bfu=null;var Bff=null;var Bfw=null;var Bfd=null;var BgA=null;var Bg6=null;var Bg7=null;var Bg8=null;var Bg9=null;var Bg$=null;var Bg_=null;var Bha=null;var Bhb=null;var Bhc=null;var Bhd=null;var Bhe=null;var Bhf=null;var Bhg=null;var Bgm
=null;var Bhh=null;var Bhi=null;function L(){L=Bs(O);AVq();}
function Bhj(a,b){var c=new O();D1(c,a,b);return c;}
function KG(a,b,c){var d=new O();C$(d,a,b,c);return d;}
function D1(a,b,c){var d,e,f;L();a.gK=BgB;a.EC=1.0;if(Be0.data[b]!==null){c=new Cc;d=new V;X(d);Bo(c,W(FP(I(FP(I(Bf(I(d,B(232)),b),B(233)),Be0.data[b]),B(234)),a)));M(c);}a.b_=c;Be0.data[b]=a;a.b=b;Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);BgL.data[b]=a.d5();e=BgM;f=!a.d5()?0:255;e.data[b]=f;BgN.data[b]=0;}
function C$(a,b,c,d){L();D1(a,b,d);a.ba=c;}
function BN(a,b){a.gK=b;return a;}
function Gx(a,b){BgM.data[a.b]=b;return a;}
function GJ(a,b){BgO.data[a.b]=15.0*b|0;return a;}
function Dn(a,b){a.nS=b*3.0;return a;}
function A8_(a){return 1;}
function AWN(a){return 0;}
function BH(a,b){var c;a.qh=b;c=a.nS;b=b*5.0;if(c<b)a.nS=b;return a;}
function Ff(a,b){BgK.data[a.b]=b;}
function Bn(a,b,c,d,e,f,g){a.da=b;a.cM=c;a.c_=d;a.dc=e;a.cF=f;a.dd=g;}
function AFf(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sQ(c,d,e);if(C()){break _;}f=$z;return f;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AGz(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!f&&a.cM>0.0)c=1;else if(f==1&&a.cF<1.0)c=1;else if(f==2&&a.c_>0.0)c=1;else if(f==3&&a.dd<1.0)c=1;else if(f==4&&a.da>0.0)c=1;else{if(f!=5)break a;if(a.dc>=1.0)break a;c=1;}return c;}$p=1;case 1:$z=b.li(c,d,e);if(C()){break _;}c=$z;return c?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AB8(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eJ(c,d,e);if(C()){break _;}c=$z;return a.e0(f,c);default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function A7p(a,b,c){return a.ci(b);}
function AVN(a,b){return a.ba;}
function La(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.da;h=d;i=h+a.cM;j=e;return D4(g,i,j+a.c_,f+a.dc,h+a.cF,j+a.dd);}
function ALF(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.hu(b,c,d,e);if(C()){break _;}h=$z;if(h!==null&&L$(f,h))T(g,h);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function Nr(a,b,c,d,e){var f,g,h,i,j;f=c;g=f+a.da;h=d;i=h+a.cM;j=e;return D4(g,i,j+a.c_,f+a.dc,h+a.cF,j+a.dd);}
function A5u(a){return 1;}
function A6C(a,b,c){return a.pi();}
function A3Y(a){return 1;}
function AHV(a,b,c,d,e,f){return;}
function APk(a,b,c,d,e,f){return;}
function AAd(a,b,c,d,e,f){return;}
function YW(a,b,c,d,e,f){return;}
function A38(a){return 10;}
function ABd(a,b,c,d,e){return;}
function Z$(a,b,c,d,e){return;}
function AYy(a,b){return 1;}
function AT0(a,b,c){return a.b;}
function ABl(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.qh<0.0)c=0.0;else{if(Nb(b,a)){$p=1;continue _;}c=1.0/a.qh/100.0;}return c;case 1:$z=AKZ(b,a);if(C()){break _;}c=$z;return c/a.qh/30.0;default:Fa();}}C4().s(a,b,c,$p);}
function Yo(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=1.0;$p=1;case 1:a.HY(b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AE4(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.eI(b.q);i=0;j=0.15000000596046448;k=c;l=d;m=e;while(i<h){if(N(b.q)<=g){n=a.dX(f,b.q);if(n>0){o=Hf(b,k+N(b.q)*0.699999988079071+j,l+N(b.q)*0.699999988079071+j,m+N(b.q)*0.699999988079071+j,KH(n,1));o.g_=10;$p=1;continue _;}}i=i+1|0;}return;case 1:AOn(b,
o);if(C()){break _;}while(true){i=i+1|0;if(i>=h)break;if(N(b.q)>g)continue;n=a.dX(f,b.q);if(n<=0)continue;else{o=Hf(b,k+N(b.q)*0.699999988079071+j,l+N(b.q)*0.699999988079071+j,m+N(b.q)*0.699999988079071+j,KH(n,1));o.g_=10;continue _;}}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function A0a(a,b){return a.nS/5.0;}
function Kj(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;h= -c;i= -d;j= -e;b=Dk(f,h,i,j);f=Dk(g,h,i,j);k=KT(b,f,a.da);l=KT(b,f,a.dc);m=J3(b,f,a.cM);n=J3(b,f,a.cF);o=KE(b,f,a.c_);p=KE(b,f,a.dd);if(!RC(a,k))k=null;if(!RC(a,l))l=null;if(!XA(a,m))m=null;if(!XA(a,n))n=null;if(!RX(a,o))o=null;if(!RX(a,p))p=null;q=null;if(k!==null)q=k;if(l!==null&&!(q!==null&&DI(b,l)>=DI(b,q)))q=l;if(m!==null&&!(q!==null&&DI(b,m)>=DI(b,q)))q=m;if(n!==null&&!(q!==null&&DI(b,n)>=DI(b,q)))q=n;if(o!==null&&!(q!==null&&DI(b,o)>=DI(b,q)))q=
o;if(p!==null&&!(q!==null&&DI(b,p)>=DI(b,q)))q=p;if(q===null)return null;r=(-1);if(q===k)r=4;if(q===l)r=5;if(q===m)r=0;if(q===n)r=1;if(q===o)r=2;if(q===p)r=3;return A0M(c,d,e,r,Dk(q,c,d,e));}
function RC(a,b){return b===null?0:b.z>=a.cM&&b.z<=a.cF&&b.w>=a.c_&&b.w<=a.dd?1:0;}
function XA(a,b){return b===null?0:b.x>=a.da&&b.x<=a.dc&&b.w>=a.c_&&b.w<=a.dd?1:0;}
function RX(a,b){return b===null?0:b.x>=a.da&&b.x<=a.dc&&b.z>=a.cM&&b.z<=a.cF?1:0;}
function AQ8(a,b,c,d,e){return;}
function AVu(a){return 0;}
function AEM(a,b,c,d,e){return 1;}
function AGO(a,b,c,d,e,f){return 0;}
function AJS(a,b,c,d,e,f){return;}
function YO(a,b,c,d,e,f){return;}
function AAk(a,b,c,d,e,f){return;}
function AF_(a,b,c,d,e,f,g){return;}
function AP4(a,b,c,d,e){return;}
function A9t(a,b,c,d,e){return 16777215;}
function AVq(){var b,c;BgB=In(B(235),1.0,1.0);BgC=In(B(236),1.0,1.0);BgD=In(B(237),1.0,1.0);BgE=In(B(238),1.0,1.0);BgF=In(B(235),1.0,1.0);BgG=In(B(235),1.0,1.5);BgH=Baa(B(235),1.0,1.0);BgI=In(B(239),1.0,1.0);BgJ=Bcl(B(240),1.0,1.0);Be0=J(O,256);BgK=$rt_createBooleanArray(256);BgL=$rt_createBooleanArray(256);BgM=$rt_createIntArray(256);BgN=$rt_createBooleanArray(256);BgO=$rt_createIntArray(256);Be6=BN(Dn(BH(Bbs(1,1),1.5),10.0),BgF);Be2=BN(BH(BbU(2),0.6000000238418579),BgE);Be3=BN(BH(Baf(3,2),0.5),BgD);Be$=BN(Dn(BH(KG(4,
16,Bhk),2.0),10.0),BgF);Bfa=BN(Dn(BH(KG(5,4,Bhl),2.0),5.0),BgC);Bfg=BN(BH(BcG(6,15),0.0),BgE);Be1=BN(Dn(BH(KG(7,17,Bhk),(-1.0)),6000000.0),BgF);Bf9=Gx(BH(AUt(8,Bf1),100.0),3);BgP=Gx(BH(AXQ(9,Bf1),100.0),3);Bf$=Gx(GJ(BH(AUt(10,Bf2),0.0),1.0),255);BgQ=Gx(GJ(BH(AXQ(11,Bf2),100.0),1.0),255);Bfl=BN(BH(BbP(12,18),0.5),BgJ);Bfm=BN(BH(BbX(13,19),0.6000000238418579),BgD);Bfr=BN(Dn(BH(SW(14,32),3.0),5.0),BgF);Bfq=BN(Dn(BH(SW(15,33),3.0),5.0),BgF);Bfp=BN(Dn(BH(SW(16,34),3.0),5.0),BgF);Bfb=BN(BH(Bc0(17),2.0),BgC);Bfc=BN(Gx(BH(BaV(18,
52),0.20000000298023224),1),BgE);Bfn=BN(BH(Bbl(19),0.6000000238418579),BgE);Bfe=BN(BH(Bbh(20,49,Bhm,0),0.30000001192092896),BgH);BgR=null;BgS=null;BgT=null;BgU=null;BgV=null;BgW=null;BgX=null;BgY=null;BgZ=null;Bg0=null;Bg1=null;Bg2=null;Bg3=null;Bg4=null;Bfo=BN(BH(KG(35,64,Bhn),0.800000011920929),BgI);Bg5=null;Bfh=BN(BH(A3u(37,13),0.0),BgE);Bfi=BN(BH(A3u(38,12),0.0),BgE);Bfj=GJ(BN(BH(ATY(39,29),0.0),BgE),0.125);Bfk=BN(BH(ATY(40,28),0.0),BgE);Bft=BN(Dn(BH(AEI(41,39),3.0),10.0),BgG);Bfs=BN(Dn(BH(AEI(42,38),5.0),
10.0),BgG);Be4=BN(Dn(BH(A9w(43,1),2.0),10.0),BgF);Be5=BN(Dn(BH(A9w(44,0),2.0),10.0),BgF);Be_=BN(Dn(BH(KG(45,7,Bhk),2.0),10.0),BgF);Bfv=BN(BH(BaW(46,8),0.0),BgE);Bfu=BN(BH(Bav(47,35),1.5),BgC);Bff=BN(Dn(BH(KG(48,36,Bhk),2.0),10.0),BgF);Bfw=BN(Dn(BH(BbC(49,37),10.0),20.0),BgF);Bfd=BN(GJ(BH(Bbo(50,80),0.0),0.9375),BgC);BgA=BN(GJ(BH(Bc5(51,31),0.0),1.0),BgC);Bg6=BN(BH(BcW(52,65),5.0),BgG);Bg7=A$W(53,Bfa);Bg8=BN(BH(Bai(54),2.5),BgC);Bg9=BN(BH(BbZ(55,62),0.5),BgG);Bg$=BN(Dn(BH(SW(56,50),3.0),5.0),BgF);Bg_=BN(Dn(BH(AEI(57,
40),5.0),10.0),BgG);Bha=BN(BH(BbE(58),2.5),BgC);Bhb=BN(BH(BcJ(59,88),0.0),BgE);Bhc=BN(BH(Bb$(60),0.6000000238418579),BgD);Bhd=BN(BH(A4W(61,0),3.5),BgF);Bhe=GJ(BN(BH(A4W(62,1),3.5),BgF),0.875);b=new VE;BB();AHy(b,63,F(Jp),Bho.cW);Bhf=BN(BH(b,1.0),BgC);Bhg=BN(BH(Bap(64),3.0),BgC);Bgm=BN(BH(Bcy(65,83),0.4000000059604645),BgC);Bhh=BN(BH(Bbb(66,128),1.0),BgG);Bhi=A$W(67,Be$);c=0;while(c<256){if(Be0.data[c]!==null)Bhp.data[c]=Bag(c-256|0);c=c+1|0;}}
function RI(){}
function AJm(){var a=this;Gf.call(a);a.d_=null;a.s=0;}
function Ci(){var a=new AJm();AWf(a);return a;}
function AWf(a){a.d_=J(D,10);}
function TF(a,b){var c;if(a.d_.data.length<b){c=a.d_.data.length>=1073741823?2147483647:DE(b,DE(a.d_.data.length*2|0,5));a.d_=Nv(a.d_,c);}}
function Z(a,b){Lc(a,b);return a.d_.data[b];}
function CY(a){return a.s;}
function Rh(a,b,c){var d;Lc(a,b);d=a.d_.data[b];a.d_.data[b]=c;return d;}
function T(a,b){var c,d;TF(a,a.s+1|0);c=a.d_.data;d=a.s;a.s=d+1|0;c[d]=b;a.d7=a.d7+1|0;return 1;}
function AMS(a,b,c){var d;if(b>=0&&b<=a.s){TF(a,a.s+1|0);d=a.s;while(d>b){a.d_.data[d]=a.d_.data[d-1|0];d=d+(-1)|0;}a.d_.data[b]=c;a.s=a.s+1|0;a.d7=a.d7+1|0;return;}c=new BT;P(c);M(c);}
function En(a,b){var c,d,e,f;Lc(a,b);c=a.d_.data[b];a.s=a.s-1|0;while(b<a.s){d=a.d_.data;e=a.d_.data;f=b+1|0;d[b]=e[f];b=f;}a.d_.data[a.s]=null;a.d7=a.d7+1|0;return c;}
function Ib(a,b){var c;c=ABh(a,b);if(c<0)return 0;En(a,c);return 1;}
function Dy(a){ZL(a.d_,0,a.s,null);a.s=0;}
function Lc(a,b){var c;if(b>=0&&b<a.s)return;c=new BT;P(c);M(c);}
function DH(){}
function TT(){D.call(this);this.AS=null;}
function AQK(a){CM(a.AS,S2(0,1,null,null));}
function AWv(a){AQK(a);}
function TS(){var a=this;D.call(a);a.Ew=null;a.EQ=null;}
function AQH(a){CM(a.Ew,S2(0,0,null,a.EQ.result));}
function ATd(a){AQH(a);}
function TR(){D.call(this);this.DB=null;}
function ASo(a){CM(a.DB,S2(1,0,B(241),null));}
function AZv(a){ASo(a);}
function TQ(){D.call(this);this.Bt=null;}
function AKf(a,b){var c,d,e,f,g,h,i;c=a.Bt.result;d=A97();e=J(B4,1).data;e[0]=B(242);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function ANQ(a,b){AKf(a,b);}
function A6S(a,b){ANQ(a,b);}
function SL(){D.call(this);}
var Bgg=null;function Bhq(){var a=new SL();ZU(a);return a;}
function ZU(a){return;}
function AFv(){Bgg=C8();BQ(Bgg,B(24),A1R());}
function Cc(){B6.call(this);}
function Bhr(){var a=new Cc();AUi(a);return a;}
function AUi(a){P(a);}
function Vp(){Cc.call(this);this.IB=null;}
function E5(){B6.call(this);}
function Bda(){var a=new E5();AUU(a);return a;}
function AUU(a){P(a);}
function ABe(){D.call(this);}
function Bhs(){var a=new ABe();AZb(a);return a;}
function AZb(a){return;}
function Fl(){var a=this;D.call(a);a.mI=0;a.bk=0;a.cy=0;a.lw=0;}
function Bht(a){var b=new Fl();KV(b,a);return b;}
function KV(a,b){a.lw=(-1);a.mI=b;a.cy=b;}
function AVJ(a){return a.mI;}
function A8B(a){return a.bk;}
function Ep(a,b){var c,d;if(b>=0&&b<=a.cy){a.bk=b;if(b<a.lw)a.lw=0;return a;}c=new Cc;d=new V;X(d);Bo(c,W(I(Bf(I(Bf(I(d,B(243)),b),B(244)),a.cy),B(245))));M(c);}
function A1f(a){return a.cy;}
function Iw(a,b){var c,d;if(b>=0&&b<=a.mI){if(a.lw>b)a.lw=(-1);a.cy=b;if(a.bk>a.cy)a.bk=a.cy;return a;}c=new Cc;d=new V;X(d);Bo(c,W(I(Bf(I(Bf(I(d,B(246)),b),B(244)),a.mI),B(245))));M(c);}
function EC(a){a.bk=0;a.cy=a.mI;a.lw=(-1);return a;}
function HA(a){a.cy=a.bk;a.bk=0;a.lw=(-1);return a;}
function Ct(a){return a.cy-a.bk|0;}
function Fm(a){return a.bk>=a.cy?0:1;}
function Ma(){Fl.call(this);}
function ADx(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BT;i=new V;X(i);Bo(h,W(Bf(I(Bf(I(i,B(247)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gu;P(h);M(h);}if(d<0){h=new BT;i=new V;X(i);Bo(h,W(I(Bf(I(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=RN(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BT;h=new V;X(h);Bo(i,W(I(Bf(I(Bf(I(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function VU(a,b){return ADx(a,b,0,b.data.length);}
function AYj(a){EC(a);return a;}
function A4k(a){HA(a);return a;}
function AWx(a,b){Iw(a,b);return a;}
function Jx(a){HA(a);return a;}
function Ig(a){EC(a);return a;}
function RJ(a,b){Iw(a,b);return a;}
function AE$(){var a=this;D.call(a);a.F=null;a.cz=0;a.fr=0;a.dQ=0;}
function A8u(a){var b=new AE$();ATO(b,a);return b;}
function Kq(){var a=new AE$();ATl(a);return a;}
function ATO(a,b){a.cz=(-1);a.fr=0;a.dQ=0;a.F=b;}
function ATl(a){a.cz=(-1);a.fr=0;a.dQ=0;}
function AMG(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.cz=f;$p=1;case 1:AN7(a,b,c,d,e);if(C()){break _;}a.cz=(-1);return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AN7(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b.en();g=a.F;$p=1;case 1:b.xO(g,c,d,e);if(C()){break _;}if(!f){$p=2;continue _;}if(f==4){$p=3;continue _;}if(f==1){$p=4;continue _;}if(f==6){$p=5;continue _;}if(f==2){$p=6;continue _;}if(f==3){$p=7;continue _;}if(f==5){$p=8;continue _;}if(f==8){$p=9;continue _;}if(f==7){$p=10;continue _;}if(f==9){$p=11;continue _;}if(f==10){$p=12;continue _;}if
(f!=11)return 0;$p=13;continue _;case 2:$z=AB2(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 3:$z=ACb(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 4:$z=ABf(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 5:$z=ALS(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 6:$z=AN9(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 7:$z=ZZ(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 8:$z=ADA(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 9:$z=AJG(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 10:$z=AKK(a,b,c,d,e);if(C())
{break _;}c=$z;return c;case 11:$z=ANf(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 12:$z=AIC(a,b,c,d,e);if(C()){break _;}c=$z;return c;case 13:$z=AFO(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AN9(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.F;$p=1;case 1:$z=f.eJ(c,d,e);if(C()){break _;}g=$z;BA();f=BeW;h=a.F;$p=2;case 2:$z=b.CB(h,c,d,e);if(C()){break _;}i=$z;if(BgO.data[b.b]>0)i=1.0;Cq(f,i,i,i);if(g==1)GH(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if(g==2)GH(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,
0.0);else if(g==3)GH(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(g!=4)GH(a,b,c,d,e,0.0,0.0);else GH(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ZZ(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:BA();f=BeW;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.CB(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=i+15.989999771118164;p=o/256.0;q=1.399999976158142;b=a.F;g=d-1|0;$p=2;case 2:$z=b.li(c,g,e);if(C()){break _;}j=$z;if(j){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,
m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,
t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}b=BgA;h=a.F;$p=3;case 3:$z=AF5(b,h,c,g,e);if(C()){break _;}g=$z;if(g){r=c+0.5;s=r+0.2;t=r-0.2;u=e+0.5;v=u+0.2;w=u-0.2;x=r-0.3;y=r+0.3;z=u-0.3;ba=u+0.3;bb=d+q;bc=e+1|0;G(f,x,bb,bc,m,n);bd=d+0|0;G(f,s,bd,bc,m,p);be=e+0|0;G(f,s,bd,be,l,p);G(f,x,bb,be,l,n);G(f,y,bb,be,m,n);G(f,t,bd,be,m,p);G(f,t,bd,bc,l,p);G(f,y,bb,bc,l,n);y=(k+16|0)/256.0;s=(o+16.0)/256.0;t=c+1|0;G(f,t,bb,ba,m,y);G(f,t,bd,w,m,s);x=c+0|0;G(f,x,bd,w,l,s);G(f,x,bb,ba,l,y);G(f,
x,bb,z,m,y);G(f,x,bd,v,m,s);G(f,t,bd,v,l,s);G(f,t,bb,z,l,y);v=r-0.5;z=r+0.5;ba=u-0.5;bf=u+0.5;bg=r-0.4;bh=r+0.4;r=u-0.4;w=u+0.4;G(f,bg,bb,be,l,y);G(f,v,bd,be,l,s);G(f,v,bd,bc,m,s);G(f,bg,bb,bc,m,y);G(f,bh,bb,bc,l,y);G(f,z,bd,bc,l,s);G(f,z,bd,be,m,s);G(f,bh,bb,be,m,y);G(f,x,bb,w,l,n);G(f,x,bd,bf,l,p);G(f,t,bd,bf,m,p);G(f,t,bb,w,m,n);G(f,t,bb,r,l,n);G(f,t,bd,ba,l,p);G(f,x,bd,ba,m,p);G(f,x,bb,r,m,n);return 1;}bi=0.20000000298023224;bj=0.0625;if((((c+d|0)+e|0)&1)!=1){ba=l;bb=m;x=n;z=p;}else{x=(k+16|0)/256.0;z=(o
+16.0)/256.0;ba=l;bb=m;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){r=ba;ba=bb;bb=r;}b=BgA;h=a.F;g=c-1|0;$p=4;case 4:$z=AF5(b,h,g,d,e);if(C()){break _;}g=$z;if(g){w=c+bi;s=d+q+bj;t=e+1|0;G(f,w,s,t,ba,x);u=c+0|0;v=(d+0|0)+bj;G(f,u,v,t,ba,z);r=e+0|0;G(f,u,v,r,bb,z);G(f,w,s,r,bb,x);G(f,w,s,r,bb,x);G(f,u,v,r,bb,z);G(f,u,v,t,ba,z);G(f,w,s,t,ba,x);}b=BgA;h=a.F;j=c+1|0;$p=5;case 5:$z=AF5(b,h,j,d,e);if(C()){break _;}g=$z;if(g){r=j-bi;w=d+q+bj;s=e+0|0;G(f,r,w,s,bb,x);t=j-0|0;u=(d+0|0)+bj;G(f,t,u,s,bb,z);v=e+1|0;G(f,t,
u,v,ba,z);G(f,r,w,v,ba,x);G(f,r,w,v,ba,x);G(f,t,u,v,ba,z);G(f,t,u,s,bb,z);G(f,r,w,s,bb,x);}b=BgA;h=a.F;g=e-1|0;$p=6;case 6:$z=AF5(b,h,c,d,g);if(C()){break _;}g=$z;if(g){r=c+0|0;w=d+q+bj;s=e+bi;G(f,r,w,s,ba,x);t=(d+0|0)+bj;u=e+0|0;G(f,r,t,u,ba,z);v=j;G(f,v,t,u,bb,z);G(f,v,w,s,bb,x);G(f,v,w,s,bb,x);G(f,v,t,u,bb,z);G(f,r,t,u,ba,z);G(f,r,w,s,ba,x);}b=BgA;h=a.F;bk=e+1|0;$p=7;case 7:$z=AF5(b,h,c,d,bk);if(C()){break _;}g=$z;if(g){t=j;u=d+q+bj;v=bk-bi;G(f,t,u,v,bb,x);r=(d+0|0)+bj;w=bk-0|0;G(f,t,r,w,bb,z);s=c+0|0;G(f,
s,r,w,ba,z);G(f,s,u,v,ba,x);G(f,s,u,v,ba,x);G(f,s,r,w,ba,z);G(f,t,r,w,bb,z);G(f,t,u,v,bb,x);}b=BgA;h=a.F;d=d+1|0;$p=8;case 8:$z=AF5(b,h,c,d,e);if(C()){break _;}g=$z;if(g){r=c+0.5;t=r+0.5;u=r-0.5;r=e+0.5;w=r+0.5;r=r-0.5;if(((c+d|0)+e|0)&1){s=c+0|0;t=d+(-0.20000000298023224);G(f,s,t,w,m,n);u=d+0|0;G(f,s,u,r,m,p);v=j;G(f,v,u,r,l,p);G(f,v,t,w,l,n);x=(k+16|0)/256.0;z=(o+16.0)/256.0;G(f,v,t,r,m,x);G(f,v,u,w,m,z);G(f,s,u,w,l,z);G(f,s,t,r,l,x);}else{v=d+(-0.20000000298023224);x=e+0|0;G(f,u,v,x,m,n);z=d+0|0;G(f,t,z,
x,m,p);r=bk;G(f,t,z,r,l,p);G(f,u,v,r,l,n);w=(k+16|0)/256.0;s=(o+16.0)/256.0;G(f,t,v,r,m,w);G(f,u,z,r,m,s);G(f,u,z,x,l,s);G(f,t,v,x,l,w);}}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function ADA(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeW;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.CB(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=j+16|0;l=g&240;if((((c+d|0)+e|0)&
1)!=1){g=j;j=k;k=g;}i=j;m=i/256.0;n=(i+15.989999771118164)/256.0;i=l;o=i/256.0;p=(i+15.989999771118164)/256.0;q=k;r=q/256.0;s=(q+15.989999771118164)/256.0;t=0.125;q=0.05000000074505806;b=a.F;k=c-1|0;$p=2;case 2:$z=b.li(k,d,e);if(C()){break _;}k=$z;if(k){u=c+q;v=(d+1|0)+t;w=(e+1|0)+t;G(f,u,v,w,m,o);x=(d+0|0)-t;G(f,u,x,w,m,p);w=(e+0|0)-t;G(f,u,x,w,n,p);G(f,u,v,w,n,o);}b=a.F;l=c+1|0;$p=3;case 3:$z=b.li(l,d,e);if(C()){break _;}k=$z;if(k){u=l-q;x=(d+0|0)-t;w=(e+1|0)+t;G(f,u,x,w,n,p);v=(d+1|0)+t;G(f,u,v,w,n,o);w=
(e+0|0)-t;G(f,u,v,w,m,o);G(f,u,x,w,m,p);}b=a.F;k=e-1|0;$p=4;case 4:$z=b.li(c,d,k);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+0|0)-t;x=e+q;G(f,u,m,x,s,p);w=(d+1|0)+t;G(f,u,w,x,s,o);u=(c+0|0)-t;G(f,u,w,x,r,o);G(f,u,m,x,r,p);}b=a.F;e=e+1|0;$p=5;case 5:$z=b.li(c,d,e);if(C()){break _;}k=$z;if(k){u=l+t;m=(d+1|0)+t;x=e-q;G(f,u,m,x,r,o);w=(d+0|0)-t;G(f,u,w,x,r,p);u=(c+0|0)-t;G(f,u,w,x,s,p);G(f,u,m,x,s,o);}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function ANf(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=
$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeW;g=a.F;$p=1;case 1:$z=g.eJ(c,d,e);if(C()){break _;}h=$z;i=b.e0(0,h);if(a.cz>=0)i=a.cz;g=a.F;$p=2;case 2:$z=b.CB(g,c,d,e);if(C()){break _;}j=$z;Cq(f,j,j,j);k=(i&15)<<4;l=i&240;m=k;n=m/256.0;o=(m+15.989999771118164)/256.0;m=l;p=m/256.0;q=(m+15.989999771118164)/256.0;r=c+1|0;s=c+0|0;t=e+0|0;u=e+1|0;v=d+0.0625;if(h!=1&&h!=2&&h!=3&&h!=7){if(h==8){w=s;x=r;y=r;z=u;m=t;j=t;ba=s;r=x;s=y;bb=u;t=m;u=j;}else if(h!=9){w=r;j=s;z=t;m=u;ba=r;r=j;bb=t;t=m;}else{w=r;ba
=s;j=r;z=u;bb=t;m=t;r=s;s=j;t=u;u=m;}}else{w=s;ba=r;z=t;bb=u;}if(h!=2&&h!=4){if(h!=3&&h!=5){x=v;j=v;y=v;m=v;v=j;}else{j=v+1.0;x=j;y=v;m=v;v=j;}}else{m=v+1.0;x=v;y=m;}bc=ba;bd=y;be=bb;G(f,bc,bd,be,o,p);bf=w;bg=x;bh=u;G(f,bf,bg,bh,o,q);bi=s;bj=v;bk=t;G(f,bi,bj,bk,n,q);bl=r;bm=m;bn=z;G(f,bl,bm,bn,n,p);G(f,bl,bm,bn,n,p);G(f,bi,bj,bk,n,q);G(f,bf,bg,bh,o,q);G(f,bc,bd,be,o,p);return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,$p);}
function AJG(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeW;g=b.ci(0);if(a.cz>=0)g=a.cz;h=a.F;$p=1;case 1:$z=b.CB(h,c,d,e);if(C()){break _;}i=$z;Cq(f,i,i,i);j=(g&15)<<4;k=g&240;i=j;l=i/256.0;m=(i+15.989999771118164)/256.0;i=k;n=i/256.0;o=(i+15.989999771118164)
/256.0;b=a.F;$p=2;case 2:$z=b.eJ(c,d,e);if(C()){break _;}p=$z;if(p==5){q=c+0.05000000074505806;r=(d+1|0)+0.0;s=(e+1|0)+0.0;G(f,q,r,s,l,n);t=(d+0|0)-0.0;G(f,q,t,s,l,o);s=(e+0|0)-0.0;G(f,q,t,s,m,o);G(f,q,r,s,m,n);}if(p==4){t=(c+1|0)-0.05000000074505806;q=(d+0|0)-0.0;s=(e+1|0)+0.0;G(f,t,q,s,m,o);r=(d+1|0)+0.0;G(f,t,r,s,m,n);s=(e+0|0)-0.0;G(f,t,r,s,l,n);G(f,t,q,s,l,o);}if(p==3){q=(c+1|0)+0.0;r=(d+0|0)-0.0;s=e+0.05000000074505806;G(f,q,r,s,m,o);t=(d+1|0)+0.0;G(f,q,t,s,m,n);q=(c+0|0)-0.0;G(f,q,t,s,l,n);G(f,q,r,s,
l,o);}if(p==2){r=(c+1|0)+0.0;s=(d+1|0)+0.0;t=(e+1|0)-0.05000000074505806;G(f,r,s,t,l,n);q=(d+0|0)-0.0;G(f,r,q,t,l,o);r=(c+0|0)-0.0;G(f,r,q,t,m,o);G(f,r,s,t,m,n);}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function ABf(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeW;g=a.F;$p=1;case 1:$z=b.CB(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eJ(c,d,e);if(C()){break _;}i=$z;Uz(a,b,i,c,d,e);return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ALS(a,b,c,d,e){var f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeW;g=a.F;$p=1;case 1:$z=b.CB(g,c,d,e);if(C()){break _;}h=$z;Cq(f,h,h,h);f=a.F;$p=2;case 2:$z=f.eJ(c,d,e);if(C()){break _;}i=$z;OU(a,b,i,c,d-0.0625,e);return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function GH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;BA();h=BeW;i=b.ci(0);if(a.cz>=0)i=a.cz;j=(i&15)<<4;k=i&240;l=j;m=l/256.0;l=(l+15.989999771118164)/256.0;n=k;o=n/256.0;n=(n+15.989999771118164)/256.0;p=m;q=p+0.02734375;r=o;s=r+0.0234375;t=p+0.03515625;u=r+0.03125;c=c+0.5;e=e+0.5;v=c-0.5;w=c+0.5;x=e-0.5;y=e+0.5;z=c+f*0.375;ba=z-0.0625;bb=d+0.625;bc=e+g*0.375;bd=bc-0.0625;G(h,ba,bb,bd,q,s);bc=bc+0.0625;G(h,ba,bb,bc,q,u);q=z+0.0625;G(h,q,bb,bc,t,u);G(h,q,bb,bd,t,s);u=c-0.0625;bc=d
+1.0;G(h,u,bc,x,p,r);q=u+f;d=d+0.0;t=x+g;bd=n;G(h,q,d,t,p,bd);s=y+g;z=l;G(h,q,d,s,z,bd);G(h,u,bc,y,z,r);u=c+0.0625;G(h,u,bc,y,p,r);c=c+f+0.0625;G(h,c,d,s,p,bd);G(h,c,d,t,z,bd);G(h,u,bc,x,z,r);c=e+0.0625;G(h,v,bc,c,p,r);u=v+f;q=c+g;G(h,u,d,q,p,bd);f=w+f;G(h,f,d,q,z,bd);G(h,w,bc,c,z,r);c=e-0.0625;G(h,w,bc,c,p,r);e=c+g;G(h,f,d,e,p,bd);G(h,u,d,e,z,bd);G(h,v,bc,c,z,r);}
function Uz(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;BA();g=BeW;h=b.e0(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.44999998807907104;q=d+0.44999998807907104;d=f+0.5;r=d-0.44999998807907104;s=d+0.44999998807907104;d=e+1.0;G(g,p,d,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,q,e,s,m,o);G(g,q,d,s,m,n);G(g,q,d,s,l,n);G(g,q,e,s,l,o);G(g,p,e,r,m,o);G(g,p,d,r,m,n);G(g,p,d,s,l,n);G(g,p,e,s,l,o);G(g,q,e,r,m,o);G(g,q,d,r,m,n);G(g,
q,d,r,l,n);G(g,q,e,r,l,o);G(g,p,e,s,m,o);G(g,p,d,s,m,n);}
function OU(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeW;h=b.e0(0,c);if(a.cz>=0)h=a.cz;i=(h&15)<<4;j=h&240;k=i;l=k/256.0;m=(k+15.989999771118164)/256.0;k=j;n=k/256.0;o=(k+15.989999771118164)/256.0;d=d+0.5;p=d-0.25;q=d+0.25;f=f+0.5;r=f-0.5;s=f+0.5;t=e+1.0;G(g,p,t,r,l,n);e=e+0.0;G(g,p,e,r,l,o);G(g,p,e,s,m,o);G(g,p,t,s,m,n);G(g,p,t,s,l,n);G(g,p,e,s,l,o);G(g,p,e,r,m,o);G(g,p,t,r,m,n);G(g,q,t,s,l,n);G(g,q,e,s,l,o);G(g,q,e,r,m,o);G(g,q,t,r,m,n);G(g,q,t,r,l,n);G(g,q,e,r,l,o);G(g,q,e,s,m,o);G(g,q,t,s,m,n);p
=d-0.5;d=d+0.5;q=f-0.25;f=f+0.25;G(g,p,t,q,l,n);G(g,p,e,q,l,o);G(g,d,e,q,m,o);G(g,d,t,q,m,n);G(g,d,t,q,l,n);G(g,d,e,q,l,o);G(g,p,e,q,m,o);G(g,p,t,q,m,n);G(g,d,t,f,l,n);G(g,d,e,f,l,o);G(g,p,e,f,m,o);G(g,p,t,f,m,n);G(g,p,t,f,l,n);G(g,p,e,f,l,o);G(g,d,e,f,m,o);G(g,d,t,f,m,n);}
function ACb(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w
=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeW;g=a.F;h=d+1|0;i=1;$p=1;case 1:$z=b.pJ(g,c,h,e,i);if(C()){break _;}h=$z;g=a.F;i=d-1|0;j=0;$p=2;case 2:$z=b.pJ(g,c,i,e,j);if(C()){break _;}j=$z;k=$rt_createBooleanArray(4).data;l=0;g=a.F;m=e-1|0;n=2;$p=3;case 3:$z=b.pJ(g,c,d,m,n);if(C()){break _;}n=$z;k[l]=n;n=1;g
=a.F;o=e+1|0;l=3;$p=4;case 4:$z=b.pJ(g,c,d,o,l);if(C()){break _;}l=$z;k[n]=l;n=2;g=a.F;p=c-1|0;l=4;$p=5;case 5:$z=b.pJ(g,p,d,e,l);if(C()){break _;}l=$z;k[n]=l;n=3;g=a.F;q=c+1|0;l=5;$p=6;case 6:$z=b.pJ(g,q,d,e,l);if(C()){break _;}l=$z;k[n]=l;if(!h&&!j&&!k[0]&&!k[1]&&!k[2]&&!k[3])return 0;r=0;s=0.5;t=1.0;u=0.800000011920929;v=0.6000000238418579;w=0.0;x=1.0;y=b.b_;g=a.F;$p=7;case 7:$z=g.eJ(c,d,e);if(C()){break _;}z=$z;$p=8;case 8:$z=APG(a,c,d,e,y);if(C()){break _;}ba=$z;$p=9;case 9:$z=APG(a,c,d,o,y);if(C()){break _;}bb
=$z;$p=10;case 10:$z=APG(a,q,d,o,y);if(C()){break _;}bc=$z;$p=11;case 11:$z=APG(a,q,d,e,y);if(C()){break _;}bd=$z;if(!a.dQ&&!h){if(!a.dQ&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;a:{while(i<4){h=!i?m:e;n=S(i,1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.e0(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break a;if(k[i])break a;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn
=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;}r=1;bx=b.e0(1,z);g=a.F;$p=12;case 12:$z=A6q(g,c,d,e,y);if(C()){break _;}by=$z;bm=by;h=S(bm,(-999.0));if(h>0)bx=b.e0(2,z);n=(bx&15)<<4;l=bx&240;by=(n+8.0)/256.0;bz=(l+8.0)/256.0;if(h<0)bm=0.0;else{by=(n+16|0)/256.0;bz=(l+16|0)/256.0;}bn=Br(bm)*8.0/256.0;bo=BC(bm)*8.0/256.0;g=a.F;$p=14;continue _;case 13:$z
=b.CB(g,c,i,e);if(C()){break _;}bp=$z;bm=s*bp;Cq(f,bm,bm,bm);HL(a,b,c,d,e,b.ci(0));r=1;i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;b:{while(i<4){h=!i?m:e;n=S(i,1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.e0(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break b;if(k[i])break b;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=
((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;case 14:$z=b.CB(g,c,d,e);if(C()){break _;}bi=$z;bm=t*bi;Cq(f,bm,bm,bm);bA=c+0|0;bm=d;br=bm+ba;bu=e+0|0;bB=bo;bf=by-bB;bw=bn;bC=bf-bw;bs=bz-bB;G(f,bA,br,bu,bC,bs+bw);bC=bm+bb;bv=o;bf=bf+bw;br=bz+bB;G(f,bA,bC,bv,bf,br+bw);bA=q;bf=bm+bc;by=by+bB;G(f,bA,bf,bv,by+bw,br-bw);G(f,bA,bm+bd,bu,by-bw,bs-bw);if(!a.dQ&&!j){i=0;be=d;bf=d+0|0;bg=c;bh=q;bi=e;bj=o;c:{while(i<4){h=!i?m:e;n=S(i,
1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.e0(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break c;if(k[i])break c;i=i+1|0;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;$p=15;continue _;}g=a.F;$p=13;continue _;case 15:$z
=b.CB(g,o,d,h);if(C()){break _;}bt=$z;bt=t*(l>=0?bt*v:bt*u);Cq(f,bt,bt,bt);bC=bo;by=be+bm;bA=s;G(f,bC,by,bA,br,bu);by=bp;bu=be+bn;bB=bq;G(f,by,bu,bB,bs,bv);G(f,by,bf,bB,bs,bw);G(f,bC,bf,bA,br,bw);c:{while(true){i=i+1|0;if(i>=4)break;h=!i?m:e;n=S(i,1);if(!n)h=h+1|0;l=S(i,2);o=!l?p:c;if(i==3)o=o+1|0;q=b.e0(i+2|0,z);bk=(q&15)<<4;bl=q&240;if(a.dQ)break c;if(k[i])break c;}b.cM=w;b.cF=x;return r;}if(!i){bm=ba;bn=bd;bo=bg;bp=bh;s=bi;bq=bi;}else if(!n){bm=bc;bn=bb;bo=bh;bp=bg;s=bj;bq=bj;}else if(l){bm=bd;bn=bc;bo=bh;bp
=bh;s=bi;bq=bj;}else{bm=bb;bn=ba;bo=bg;bp=bg;s=bj;bq=bi;}r=1;br=(bk+0|0)/256.0;bs=((bk+16|0)-0.01)/256.0;bt=bl;bu=(bt+(1.0-bm)*16.0)/256.0;bv=(bt+(1.0-bn)*16.0)/256.0;bw=((bl+16|0)-0.01)/256.0;g=a.F;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,$p);}
function APG(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=0.0;h=0;i=c+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;case 1:$z=l.oM(j,i,k);if(C()){break _;}l=$z;if(l===e)return 1.0;l=a.F;$p=2;case 2:$z=l.oM(j,c,k);if(C()){break _;}l=$z;if(l===e){l=a.F;$p=3;continue _;}if(!l.dw()){g=g+1.0;f=f+1|0;}h=h+1|0;if(h
>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;case 3:$z=l.eJ(j,c,k);if(C()){break _;}m=$z;if(!(m<8&&m)){g=g+JE(m)*10.0;f=f+10|0;}g=g+JE(m);f=f+1|0;h=h+1|0;if(h>=4)return 1.0-g/f;j=b-(h&1)|0;k=d-(h>>1&1)|0;l=a.F;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AI7(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0.5;h=1.0;i=0.800000011920929;j=0.6000000238418579;BA();k=BeW;Bz(k);$p=1;case 1:$z=b.CB(c,d,e,f);if(C()){break _;}l=$z;m=e-1|0;$p=2;case 2:$z=b.CB(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;n=g*n;Cq(k,n,n,n);HL(a,b,(-0.5),(-0.5),(-0.5),b.ci(0));m=e+1|0;$p=3;case 3:$z
=b.CB(c,d,m,f);if(C()){break _;}n=$z;if(n<l)n=l;h=h*n;Cq(k,h,h,h);JP(a,b,(-0.5),(-0.5),(-0.5),b.ci(1));m=f-1|0;$p=4;case 4:$z=b.CB(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);J4(a,b,(-0.5),(-0.5),(-0.5),b.ci(2));m=f+1|0;$p=5;case 5:$z=b.CB(c,d,e,m);if(C()){break _;}h=$z;if(h<l)h=l;h=i*h;Cq(k,h,h,h);Kg(a,b,(-0.5),(-0.5),(-0.5),b.ci(3));m=d-1|0;$p=6;case 6:$z=b.CB(c,m,e,f);if(C()){break _;}h=$z;if(h<l)h=l;h=j*h;Cq(k,h,h,h);JY(a,b,(-0.5),(-0.5),(-0.5),b.ci(4));d=d+1|0;$p=7;case 7:$z=b.CB(c,d,e,
f);if(C()){break _;}h=$z;if(h>=l)l=h;h=j*l;Cq(k,h,h,h);KX(a,b,(-0.5),(-0.5),(-0.5),b.ci(5));Bt(k);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AB2(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;$p=1;case 1:$z=ALB(a,b,c,d,e,f,f,f);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ALB(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();i=BeW;j=0;k=0.5*f;l=1.0*f;m=0.800000011920929*f;n=0.6000000238418579*f;o=0.5
*g;p=1.0*g;q=0.800000011920929*g;r=0.6000000238418579*g;s=0.5*h;t=1.0*h;u=0.800000011920929*h;v=0.6000000238418579*h;w=a.F;$p=1;case 1:$z=b.CB(w,c,d,e);if(C()){break _;}x=$z;if(a.dQ){w=a.F;y=d-1|0;$p=2;continue _;}w=a.F;z=d-1|0;y=0;$p=3;continue _;case 2:$z=b.CB(w,c,y,e);if(C()){break _;}ba=$z;if(BgO.data[b.b]>0)ba=1.0;Cq(i,k*ba,o*ba,s*ba);bb=c;bc=d;bd=e;w=a.F;y=0;$p=4;continue _;case 3:$z=b.pJ(w,c,z,e,y);if(C()){break _;}y=$z;if(y){w=a.F;y=d-1|0;$p=2;continue _;}if(a.dQ){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y
=d+1|0;z=1;$p=6;continue _;case 4:$z=b.um(w,c,d,e,y);if(C()){break _;}y=$z;HL(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=d+1|0;$p=5;continue _;}w=a.F;y=d+1|0;z=1;$p=6;continue _;case 5:$z=b.CB(w,c,y,e);if(C()){break _;}ba=$z;if(b.cF!==1.0&&!b.b_.nG())ba=x;if(BgO.data[b.b]>0)ba=1.0;Cq(i,l*ba,p*ba,t*ba);bb=c;bc=d;bd=e;w=a.F;y=1;$p=9;continue _;case 6:$z=b.pJ(w,c,y,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=d+1|0;$p=5;continue _;}if(a.dQ){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 7:$z=b.CB(w,
c,d,y);if(C()){break _;}ba=$z;if(b.c_>0.0)ba=x;if(BgO.data[b.b]>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=2;$p=12;continue _;case 8:$z=b.pJ(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e-1|0;$p=7;continue _;}if(a.dQ){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 9:$z=b.um(w,c,d,e,y);if(C()){break _;}y=$z;JP(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=e-1|0;$p=7;continue _;}w=a.F;y=e-1|0;z=2;$p=8;continue _;case 10:$z=b.CB(w,c,d,y);if(C()){break _;}ba=$z;if(b.dd<1.0)ba=x;if(BgO.data[b.b]
>0)ba=1.0;Cq(i,m*ba,q*ba,u*ba);bb=c;bc=d;bd=e;w=a.F;y=3;$p=15;continue _;case 11:$z=b.pJ(w,c,d,y,z);if(C()){break _;}y=$z;if(y){w=a.F;y=e+1|0;$p=10;continue _;}if(a.dQ){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 12:$z=b.um(w,c,d,e,y);if(C()){break _;}y=$z;J4(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=e+1|0;$p=10;continue _;}w=a.F;y=e+1|0;z=3;$p=11;continue _;case 13:$z=b.CB(w,y,d,e);if(C()){break _;}ba=$z;if(b.da>0.0)ba=x;if(BgO.data[b.b]>0)ba=1.0;Cq(i,n*ba,r*ba,v*ba);bb=c;bc=d;bd=e;w
=a.F;y=4;$p=18;continue _;case 14:$z=b.pJ(w,y,d,e,z);if(C()){break _;}y=$z;if(y){w=a.F;y=c-1|0;$p=13;continue _;}if(a.dQ){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 15:$z=b.um(w,c,d,e,y);if(C()){break _;}y=$z;Kg(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=c-1|0;$p=13;continue _;}w=a.F;y=c-1|0;z=4;$p=14;continue _;case 16:$z=b.CB(w,y,d,e);if(C()){break _;}ba=$z;if(b.dc>=1.0)x=ba;if(BgO.data[b.b]>0)x=1.0;Cq(i,n*x,r*x,v*x);bb=c;bc=d;bd=e;i=a.F;y=5;$p=19;continue _;case 17:$z=b.pJ(w,y,d,e,
z);if(C()){break _;}y=$z;if(!y)return j;w=a.F;y=c+1|0;$p=16;continue _;case 18:$z=b.um(w,c,d,e,y);if(C()){break _;}y=$z;JY(a,b,bb,bc,bd,y);j=1;if(a.dQ){w=a.F;y=c+1|0;$p=16;continue _;}w=a.F;y=c+1|0;z=5;$p=17;continue _;case 19:$z=b.um(i,c,d,e,y);if(C()){break _;}c=$z;KX(a,b,bb,bc,bd,c);j=1;return j;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AFO(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;Bn(b,0.375,0.0,0.375,0.625,1.0,0.625);$p=1;case 1:AB2(a,b,c,d,e);if(C()){break _;}g=0;h=0;i=a.F;j=c-1|0;$p=2;case 2:$z=i.ek(j,d,e);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=c+1|0;$p=3;continue _;}g=1;i=a.F;j=e-1|0;$p=4;continue _;case 3:$z=i.ek(j,d,e);if(C()){break _;}j
=$z;if(j==b.b)g=1;i=a.F;j=e-1|0;$p=4;case 4:$z=i.ek(c,d,j);if(C()){break _;}j=$z;if(j!=b.b){i=a.F;j=e+1|0;$p=5;continue _;}h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bn(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 5:$z=i.ek(c,d,j);if(C()){break _;}j=$z;if(j==b.b)h=1;if(!g&&!h)g=1;k=0.4375;l=0.5625;m=0.75;n=0.9375;if
(g){Bn(b,0.0,m,k,1.0,n,l);$p=6;continue _;}if(h){Bn(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 6:AB2(a,b,c,d,e);if(C()){break _;}if(h){Bn(b,k,m,0.0,l,n,1.0);$p=7;continue _;}m=0.375;n=0.5625;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 7:AB2(a,b,c,d,e);if(C()){break _;}m=0.375;n
=0.5625;if(g){Bn(b,0.0,m,k,1.0,n,l);$p=8;continue _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;continue _;case 8:AB2(a,b,c,d,e);if(C()){break _;}if(!h){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,k,m,0.0,l,n,1.0);$p=9;case 9:AB2(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AIC(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=a.F;$p=1;case 1:$z=g.eJ(c,d,e);if(C()){break _;}h=$z;if(!h){Bn(b,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bn(b,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bn(b,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;}Bn(b,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:AB2(a,
b,c,d,e);if(C()){break _;}Bn(b,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:AB2(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 4:AB2(a,b,c,d,e);if(C()){break _;}Bn(b,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:AB2(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 6:AB2(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:AB2(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;case 8:AB2(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.5,1.0,0.5,1.0);$p
=9;case 9:AB2(a,b,c,d,e);if(C()){break _;}Bn(b,0.0,0.0,0.0,1.0,1.0,1.0);return f;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AKK(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BA();f=BeW;g=b;h=0.5;i=1.0;j=0.800000011920929;k=0.6000000238418579;l=a.F;$p=1;case 1:$z=b.CB(l,c,d,e);if(C()){break _;}m=$z;l=a.F;n=d-1|0;$p=2;case 2:$z=b.CB(l,c,n,e);if(C()){break _;}o=$z;if(g.cM>0.0)o=m;if(BgO.data[b.b]
>0)o=1.0;h=h*o;Cq(f,h,h,h);p=c;q=d;r=e;l=a.F;n=0;$p=3;case 3:$z=b.um(l,c,d,e,n);if(C()){break _;}n=$z;HL(a,b,p,q,r,n);l=a.F;n=d+1|0;$p=4;case 4:$z=b.CB(l,c,n,e);if(C()){break _;}h=$z;if(g.cF<1.0)h=m;if(BgO.data[b.b]>0)h=1.0;i=i*h;Cq(f,i,i,i);l=a.F;n=1;$p=5;case 5:$z=b.um(l,c,d,e,n);if(C()){break _;}n=$z;JP(a,b,p,q,r,n);l=a.F;n=e-1|0;$p=6;case 6:$z=b.CB(l,c,d,n);if(C()){break _;}i=$z;if(g.c_>0.0)i=m;if(BgO.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=2;$p=7;case 7:$z=b.um(l,c,d,e,n);if(C()){break _;}s=$z;if(s
<0){a.fr=1;s= -s;}J4(a,b,p,q,r,s);a.fr=0;l=a.F;n=e+1|0;$p=8;case 8:$z=b.CB(l,c,d,n);if(C()){break _;}i=$z;if(g.dd<1.0)i=m;if(BgO.data[b.b]>0)i=1.0;i=j*i;Cq(f,i,i,i);l=a.F;n=3;$p=9;case 9:$z=b.um(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fr=1;s= -s;}Kg(a,b,p,q,r,s);a.fr=0;l=a.F;n=c-1|0;$p=10;case 10:$z=b.CB(l,n,d,e);if(C()){break _;}i=$z;if(g.da>0.0)i=m;if(BgO.data[b.b]>0)i=1.0;i=k*i;Cq(f,i,i,i);l=a.F;n=4;$p=11;case 11:$z=b.um(l,c,d,e,n);if(C()){break _;}s=$z;if(s<0){a.fr=1;s= -s;}JY(a,b,p,q,r,s);a.fr=0;l=a.F;n
=c+1|0;$p=12;case 12:$z=b.CB(l,n,d,e);if(C()){break _;}i=$z;if(g.dc>=1.0)m=i;if(BgO.data[b.b]>0)m=1.0;i=k*m;Cq(f,i,i,i);l=a.F;n=5;$p=13;case 13:$z=b.um(l,c,d,e,n);if(C()){break _;}c=$z;if(c<0){a.fr=1;c= -c;}KX(a,b,p,q,r,c);a.fr=0;return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function HL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeW;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.c_*16.0)/256.0;n=(j+b.dd*16.0-0.01)/256.0;if(!(b.da>=0.0&&b.dc<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c_>=0.0&&b.dd<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=c+b.dc;r=d+b.cM;s=e+b.c_;t=e+b.dd;G(g,j,r,t,k,n);G(g,j,r,s,k,m);G(g,q,r,s,l,m);G(g,q,r,t,l,n);}
function JP(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeW;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;l=(j+b.dc*16.0-0.01)/256.0;j=i;m=(j+b.c_*16.0)/256.0;n=(j+b.dd*16.0-0.01)/256.0;if(!(b.da>=0.0&&b.dc<=1.0)){o=h;k=(o+0.0)/256.0;l=(o+15.989999771118164)/256.0;}if(!(b.c_>=0.0&&b.dd<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=c+b.dc;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,q,r,t,l,n);G(g,q,r,s,l,m);G(g,j,r,s,k,m);G(g,j,r,t,k,n);}
function J4(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeW;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;j=(j+b.dc*16.0-0.01)/256.0;l=i;m=(l+b.cM*16.0)/256.0;n=(l+b.cF*16.0-0.01)/256.0;if(!a.fr){l=j;j=k;k=l;}if(!(b.da>=0.0&&b.dc<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.da;q=c+b.dc;r=d+b.cM;s=d+b.cF;t=e+b.c_;G(g,l,s,t,k,m);G(g,q,s,t,j,m);G(g,q,r,t,j,n);G(g,l,r,t,k,n);}
function Kg(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeW;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.da*16.0)/256.0;j=(j+b.dc*16.0-0.01)/256.0;l=i;m=(l+b.cM*16.0)/256.0;n=(l+b.cF*16.0-0.01)/256.0;if(!a.fr){l=j;j=k;k=l;}if(!(b.da>=0.0&&b.dc<=1.0)){o=h;j=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}l=c+b.da;q=c+b.dc;r=d+b.cM;s=d+b.cF;t=e+b.dd;G(g,l,s,t,j,m);G(g,l,r,t,j,n);G(g,q,r,t,k,n);G(g,q,s,t,k,m);}
function JY(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeW;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.dd*16.0-0.01)/256.0;j=i;m=(j+b.cM*16.0)/256.0;n=(j+b.cF*16.0-0.01)/256.0;if(!a.fr){j=l;l=k;k=j;}if(!(b.c_>=0.0&&b.dd<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.da;q=d+b.cM;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,j,r,t,k,m);G(g,j,r,s,l,m);G(g,j,q,s,l,n);G(g,j,q,t,k,n);}
function KX(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;BA();g=BeW;if(a.cz>=0)f=a.cz;h=(f&15)<<4;i=f&240;j=h;k=(j+b.c_*16.0)/256.0;l=(j+b.dd*16.0-0.01)/256.0;j=i;m=(j+b.cM*16.0)/256.0;n=(j+b.cF*16.0-0.01)/256.0;if(!a.fr){j=l;l=k;k=j;}if(!(b.c_>=0.0&&b.dd<=1.0)){o=h;l=(o+0.0)/256.0;k=(o+15.989999771118164)/256.0;}if(!(b.cM>=0.0&&b.cF<=1.0)){p=i;m=(p+0.0)/256.0;n=(p+15.989999771118164)/256.0;}j=c+b.dc;q=d+b.cM;r=d+b.cF;s=e+b.c_;t=e+b.dd;G(g,j,q,t,l,n);G(g,j,q,s,k,n);G(g,j,r,s,k,m);G(g,j,r,t,l,m);}
function GY(a,b){var c,d;a:{BA();c=BeW;d=b.en();if(d){if(d==1){Bz(c);Cj(0.0,(-1.0),0.0);Uz(a,b,(-1),(-0.5),(-0.5),(-0.5));Bt(c);}else if(d==6){Bz(c);Cj(0.0,(-1.0),0.0);OU(a,b,(-1),(-0.5),(-0.5),(-0.5));Bt(c);}else{if(d!=2){if(d==3)break a;if(d!=5)break a;else break a;}Bz(c);Cj(0.0,(-1.0),0.0);GH(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Bt(c);}}else{Bw((-0.5),(-0.5),(-0.5));Bz(c);Cj(0.0,(-1.0),0.0);HL(a,b,0.0,0.0,0.0,b.ci(0));Bt(c);Bz(c);Cj(0.0,1.0,0.0);JP(a,b,0.0,0.0,0.0,b.ci(1));Bt(c);Bz(c);Cj(0.0,0.0,(-1.0));J4(a,
b,0.0,0.0,0.0,b.ci(2));Bt(c);Bz(c);Cj(0.0,0.0,1.0);Kg(a,b,0.0,0.0,0.0,b.ci(3));Bt(c);Bz(c);Cj((-1.0),0.0,0.0);JY(a,b,0.0,0.0,0.0,b.ci(4));Bt(c);Bz(c);Cj(1.0,0.0,0.0);KX(a,b,0.0,0.0,0.0,b.ci(5));Bt(c);Bw(0.5,0.5,0.5);}}}
function QO(){var a=this;D.call(a);a.jj=null;a.hn=null;a.f0=0;a.fZ=0;a.pH=0.0;a.m6=0.0;a.pG=0.0;a.b1=0.0;a.bX=0.0;a.bU=0.0;a.wt=0;a.lY=0;a.lE=0;a.iS=0;a.B1=0;}
function BK(a,b){var c=new QO();A9r(c,a,b);return c;}
function A9r(a,b,c){a.wt=0;a.lY=0;a.lE=0;a.iS=1;a.B1=0;a.f0=b;a.fZ=c;}
function BG(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;a.jj=J(ER,8);a.hn=J(Fz,6);i=b+e;j=c+f;k=d+g;l=b-h;m=c-h;n=d-h;d=i+h;j=j+h;h=k+h;if(!a.lE){b=l;l=d;d=b;}a:{o=G5(d,m,n,0.0,0.0);p=G5(l,m,n,0.0,8.0);q=G5(l,j,n,8.0,8.0);r=G5(d,j,n,8.0,0.0);s=G5(d,m,h,0.0,0.0);t=G5(l,m,h,0.0,8.0);u=G5(l,j,h,8.0,8.0);v=G5(d,j,h,8.0,0.0);a.jj.data[0]=o;a.jj.data[1]=p;a.jj.data[2]=q;a.jj.data[3]=r;a.jj.data[4]=s;a.jj.data[5]=t;a.jj.data[6]=u;a.jj.data[7]=v;w=a.hn.data;x=new Fz;y=J(ER,4);z=y.data;z[0]=t;z[1]=p;z[2]
=q;z[3]=u;Hj(x,y,(a.f0+g|0)+e|0,a.fZ+g|0,((a.f0+g|0)+e|0)+g|0,(a.fZ+g|0)+f|0);w[0]=x;z=a.hn.data;x=new Fz;w=J(ER,4);y=w.data;y[0]=o;y[1]=s;y[2]=v;y[3]=r;Hj(x,w,a.f0+0|0,a.fZ+g|0,a.f0+g|0,(a.fZ+g|0)+f|0);z[1]=x;z=a.hn.data;x=new Fz;w=J(ER,4);y=w.data;y[0]=t;y[1]=s;y[2]=o;y[3]=p;Hj(x,w,a.f0+g|0,a.fZ+0|0,(a.f0+g|0)+e|0,a.fZ+g|0);z[2]=x;z=a.hn.data;x=new Fz;w=J(ER,4);y=w.data;y[0]=q;y[1]=r;y[2]=v;y[3]=u;Hj(x,w,(a.f0+g|0)+e|0,a.fZ+0|0,((a.f0+g|0)+e|0)+e|0,a.fZ+g|0);z[3]=x;w=a.hn.data;x=new Fz;y=J(ER,4);z=y.data;z[0]
=p;z[1]=o;z[2]=r;z[3]=q;Hj(x,y,a.f0+g|0,a.fZ+g|0,(a.f0+g|0)+e|0,(a.fZ+g|0)+f|0);w[4]=x;z=a.hn.data;r=new Fz;w=J(ER,4);y=w.data;y[0]=s;y[1]=t;y[2]=u;y[3]=v;Hj(r,w,((a.f0+g|0)+e|0)+g|0,a.fZ+g|0,(((a.f0+g|0)+e|0)+g|0)+e|0,(a.fZ+g|0)+f|0);z[5]=r;if(a.lE){ba=0;while(true){if(ba>=a.hn.data.length)break a;AC2(a.hn.data[ba]);ba=ba+1|0;}}}}
function BJ(a,b,c,d){a.pH=b;a.m6=c;a.pG=d;}
function Ca(a,b){var c,d;if(!a.B1&&a.iS){if(!a.wt){a.lY=I8(1);FK(a.lY,4864);BA();c=BeW;d=0;while(d<a.hn.data.length){APK(a.hn.data[d],c,b);d=d+1|0;}Ee();a.wt=1;}if(a.b1===0.0&&a.bX===0.0&&a.bU===0.0){if(a.pH===0.0&&a.m6===0.0&&a.pG===0.0)FV(a.lY);else{Bw(a.pH*b,a.m6*b,a.pG*b);FV(a.lY);Bw( -a.pH*b, -a.m6*b, -a.pG*b);}}else{B3();Bw(a.pH*b,a.m6*b,a.pG*b);if(a.bU!==0.0)Bv(a.bU*57.2957763671875,0.0,0.0,1.0);if(a.bX!==0.0)Bv(a.bX*57.2957763671875,0.0,1.0,0.0);if(a.b1!==0.0)Bv(a.b1*57.2957763671875,1.0,0.0,0.0);FV(a.lY);BE();}}}
function E4(){D.call(this);}
function AOG(a,b){Rd(a,b,0,b.data.length);}
function ATq(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.qF(f[c]);e=e+1|0;c=g;}}
function IR(a){return;}
function AQb(a){return;}
function Im(){E4.call(this);this.jp=null;}
function Bhu(a){var b=new Im();OV(b,a);return b;}
function OV(a,b){a.jp=b;}
function IX(a){var $$je;a:{try{AQb(a.jp);break a;}catch($$e){$$je=Q($$e);if($$je instanceof BL){}else{throw $$e;}}}}
function ABa(){var a=this;Im.call(a);a.GP=0;a.uN=0;a.hF=null;a.nU=null;a.AZ=null;}
function AYS(a,b){var c=new ABa();A$J(c,a,b);return c;}
function A$J(a,b,c){OV(a,b);b=new V;X(b);a.hF=b;a.nU=$rt_createCharArray(32);a.GP=c;a.AZ=A1R();}
function V2(a,b,c,d){var $$je;if(a.jp===null)a.uN=1;if(!(a.uN?0:1))return;a:{try{a.jp.jw(b,c,d);break a;}catch($$e){$$je=Q($$e);if($$je instanceof BL){}else{throw $$e;}}a.uN=1;}}
function TX(a,b,c,d){var e,f,g,h,i;e=b.data;f=ANa(b,c,d-c|0);e=$rt_createByteArray(DE(16,CB(e.length,1024)));g=AAy(e);h=AG1(ACY(AG9(a.AZ),Bgh),Bgh);while(true){i=I0(AJk(h,f,g,1));V2(a,e,0,g.bk);EC(g);if(!i)break;}while(true){i=I0(X8(h,g));V2(a,e,0,g.bk);EC(g);if(!i)break;}}
function AKM(a,b){a.nU.data[0]=b;TX(a,a.nU,0,1);}
function Kx(a,b){I(a.hF,b);Kf(a);}
function ABV(a,b){DQ(Bf(a.hF,b),10);Kf(a);}
function Cg(a,b){DQ(I(a.hF,b),10);Kf(a);}
function ACr(a,b){DQ(FP(a.hF,b),10);Kf(a);}
function APJ(a){AKM(a,10);}
function Kf(a){var b;b=a.hF.bY<=a.nU.data.length?a.nU:$rt_createCharArray(a.hF.bY);AAG(a.hF,0,a.hF.bY,b,0);TX(a,b,0,a.hF.bY);ANo(a.hF,0);}
function Xm(){E4.call(this);}
function Bhv(){var a=new Xm();A3C(a);return a;}
function A3C(a){return;}
function AYq(a,b){$rt_putStdout(b);}
function AFg(){Cc.call(this);this.FA=null;}
function ALx(a){var b=new AFg();A1d(b,a);return b;}
function A1d(a,b){P(a);a.FA=b;}
function MX(){var a=this;D.call(a);a.cf=null;a.B=0;a.N=0;a.G=Long_ZERO;a.uZ=null;a.pQ=0;a.ib=0;a.nu=Long_ZERO;a.b9=null;a.hZ=null;a.f9=null;}
function Bhw(){var a=new MX();OX(a);return a;}
function OX(a){a.f9=A91();}
function AAO(a,b,c,d){a.uZ=b;a.pQ=c;a.ib=d;}
function AKe(a,b,c,d,e){var f;if(d<=0&&e&&a.cf!==null)return;if(a.N>0&&e){f=$rt_createByteArray(a.N+d|0);Ds(a.cf,a.B,f,0,a.N);Ds(b,c,f,a.N,d);a.cf=f;a.B=0;a.N=a.N+d|0;}else{a.cf=b;a.B=c;a.N=d;}}
function Uv(){MX.call(this);this.o3=0;}
function Bhx(){var a=new Uv();A3i(a);return a;}
function A3i(a){OX(a);a.o3=0;AA1(a);}
function AA1(a){return ACP(a,15);}
function ACP(a,b){return Sc(a,b,0);}
function Sc(a,b,c){var d;a.o3=0;d=new LN;d.rW=Long_fromInt(-1);d.iI=(-1);d.xM=$rt_createByteArray(4);d.cJ=null;d.fW=null;d.E=a;a.hZ=d;d=a.hZ;if(c)b= -b;return XJ(d,b);}
function AF9(a,b){var c;if(a.hZ===null)return (-2);c=AGI(a.hZ,b);if(c==1)a.o3=1;return c;}
function AHd(a){a.o3=1;if(a.hZ===null)return (-2);return Sq(a.hZ);}
function Yp(a){return a.hZ.bP!=12?0:1;}
function Iv(){var a=this;D.call(a);a.Cs=null;a.oR=0.0;a.pP=0.0;}
function In(a,b,c){var d=new Iv();Pb(d,a,b,c);return d;}
function Pb(a,b,c,d){a.Cs=b;a.oR=c;a.pP=d;}
function AMV(a){return a.oR;}
function Yn(a){return a.pP;}
function Ko(a){var b;b=new V;X(b);return W(I(I(b,B(252)),a.Cs));}
function AHu(){Iv.call(this);}
function Baa(a,b,c){var d=new AHu();AZC(d,a,b,c);return d;}
function AZC(a,b,c,d){Pb(a,b,c,d);}
function ACz(){Iv.call(this);}
function Bcl(a,b,c){var d=new ACz();A7V(d,a,b,c);return d;}
function A7V(a,b,c,d){Pb(a,b,c,d);}
function LU(){O.call(this);}
function Bbs(a,b){var c=new LU();AJc(c,a,b);return c;}
function AJc(a,b,c){C$(a,b,c,Bhk);}
function A8S(a,b,c){L();return Be$.b;}
function AAa(){O.call(this);}
function BbU(a){var b=new AAa();AY_(b,a);return b;}
function AY_(a,b){D1(a,b,Bhy);a.ba=3;Ff(a,1);}
function A7A(a,b){return b==1?0:b?3:2;}
function ADw(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=XH(b,c,g,e);if(C()){break _;}h=$z;if(h>=4){$p=2;continue _;}$p=3;continue _;case 2:$z=XH(b,c,g,e);if(C()){break _;}g=$z;if(g<9)return;h=(c+E(f,3)|0)-1|0;g=(d+E(f,5)|0)-3|0;i=(e+E(f,3)|0)-1|0;$p=4;continue _;case 3:$z=AB9(b,c,g,e);if(C()){break _;}j=$z;if(!j.sm()){$p=2;continue _;}if(E(f,
4))return;L();h=Be3.b;$p=6;continue _;case 4:$z=ACE(b,h,g,i);if(C()){break _;}c=$z;L();if(c!=Be3.b)return;c=g+1|0;$p=5;case 5:$z=XH(b,h,c,i);if(C()){break _;}d=$z;if(d<4)return;$p=7;continue _;case 6:APE(b,c,d,e,h);if(C()){break _;}return;case 7:$z=AB9(b,h,c,i);if(C()){break _;}f=$z;if(f.sm())return;c=Be2.b;$p=8;case 8:APE(b,h,g,i,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function A0h(a,b,c){L();return Be3.dX(0,c);}
function AHY(){O.call(this);}
function Baf(a,b){var c=new AHY();AXI(c,a,b);return c;}
function AXI(a,b,c){C$(a,b,c,Bhy);}
function B8(){D.call(this);}
var Bgk=null;var Bhy=null;var Bhl=null;var Bhk=null;var Bhz=null;var Bf1=null;var Bf2=null;var BhA=null;var BhB=null;var BhC=null;var Bhn=null;var BhD=null;var BhE=null;var BhF=null;var Bhm=null;var BhG=null;var BhH=null;function BhI(){var a=new B8();AQt(a);return a;}
function AQt(a){return;}
function A8w(a){return 0;}
function A09(a){return 1;}
function A70(a){return 1;}
function A5D(a){return 1;}
function AP_(){Bgk=new Oq;Bhy=new B8;Bhl=new B8;Bhk=new B8;Bhz=new B8;Bf1=new L4;Bf2=new L4;BhA=new B8;BhB=new Oc;BhC=new B8;Bhn=new B8;BhD=new Oq;BhE=new B8;BhF=new Oc;Bhm=new B8;BhG=new B8;BhH=new B8;}
function F5(){O.call(this);}
function A3u(a,b){var c=new F5();LB(c,a,b);return c;}
function LB(a,b,c){D1(a,b,BhB);a.ba=c;Ff(a,1);Bn(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function AL3(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=ACE(b,c,d,e);if(C()){break _;}c=$z;return a.rs(c);default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AYu(a,b){L();return b!=Be2.b&&b!=Be3.b&&b!=Bhc.b?0:1;}
function AIM(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJx(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AEf(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJx(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AJx(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=a.Hh(b,c,d,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEQ(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yo(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APE(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AOb(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XH(b,c,d,e);if(C()){break _;}f=$z;if(f<8){$p=3;continue _;}d=d-1|0;$p=2;case 2:$z=ACE(b,c,d,e);if(C()){break _;}c=$z;return !a.rs(c)?0:1;case 3:$z=AGj(b,c,d,e);if(C()){break _;}g=$z;if(!g)return 0;d=d-1|0;$p=2;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AGp(a,b,c,d,e){return null;}
function A6w(a){return 0;}
function AT$(a){return 0;}
function A7F(a){return 1;}
function AM6(){F5.call(this);}
function BcG(a,b){var c=new AM6();A9N(c,a,b);return c;}
function A9N(a,b,c){LB(a,b,c);Bn(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function AEo(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJx(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=XH(b,c,g,e);if(C()){break _;}g=$z;if(g>=9&&!E(f,5)){$p=3;continue _;}return;case 3:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;if(g>=15){g=0;$p=4;continue _;}g=g+1|0;$p=6;continue _;case 4:ALA(b,c,d,e,g);if(C()){break _;}h=new Rl;$p=5;case 5:$z=AES(h,b,f,c,d,e);if(C()){break _;}g
=$z;if(g)return;g=a.b;$p=7;continue _;case 6:AKD(b,c,d,e,g);if(C()){break _;}return;case 7:ALA(b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function HW(){O.call(this);this.qS=0;}
function BhJ(a,b){var c=new HW();P$(c,a,b);return c;}
function P$(a,b,c){C$(a,b,((c!==Bf2?12:14)*16|0)+13|0,c);a.qS=1;if(c===Bf2)a.qS=2;Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);Ff(a,1);}
function JE(b){if(b>=8)b=0;return (b+1|0)/9.0;}
function ATk(a,b){return b&&b!=1?a.ba+1|0:a.ba;}
function AFk(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB9(b,c,d,e);if(C()){break _;}f=$z;if(f!==a.b_)return (-1);$p=2;case 2:$z=AEQ(b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AEk(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oM(c,d,e);if(C()){break _;}f=$z;if(f!==a.b_)return (-1);$p=2;case 2:$z=b.eJ(c,d,e);if(C()){break _;}g=$z;if(g>=8)g=0;return g;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function A_i(a){return 0;}
function A$B(a){return 0;}
function A8P(a,b,c){return c&&!b?1:0;}
function ARE(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.oM(c,d,e);if(C()){break _;}g=$z;if(g===a.b_)c=0;else{if(f!=1){$p=2;continue _;}c=1;}return c;case 2:$z=AGz(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function Ym(a,b,c,d,e){return null;}
function A78(a){return 4;}
function A3o(a,b,c){return 0;}
function A6k(a,b){return 0;}
function AIT(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=BY(0.0,0.0,0.0);$p=1;case 1:$z=AEk(a,b,c,d,e);if(C()){break _;}g=$z;h=0;i=c-1|0;j=e-1|0;k=d-1|0;l=g-8|0;m=d-d|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 2:$z=b.eJ(c,d,e);if
(C()){break _;}n=$z;if(n<8)return CD(f);k=0;n=2;$p=3;case 3:$z=ARE(a,b,c,d,j,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=e+1|0;p=3;$p=4;continue _;}k=1;if(!k){n=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 4:$z=ARE(a,b,c,d,n,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n
=4;$p=5;continue _;}k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 5:$z=ARE(a,b,i,d,e,n);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=c+1|0;p=5;$p=6;continue _;}k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k
=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 6:$z=ARE(a,b,n,d,e,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=2;$p=9;continue _;}k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 7:$z=AEk(a,b,n,d,o);if(C()){break _;}p=$z;if(p<0){$p=8;continue _;}if(p>=0){q=p-g|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1
|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;continue _;case 8:$z=AEk(a,b,n,k,o);if(C()){break _;}p=$z;if(p>=0){q=p-l|0;f=Dk(f,Bj(n-c|0,q),Bj(m,q),Bj(o-e|0,q));}h=h+1|0;if(h>=4){$p=2;continue _;}n=!h?i:c;o=h==1?j:e;if(h==2)n=n+1|0;if(h==3)o=o+1|0;$p=7;continue _;case 9:$z=ARE(a,b,c,n,j,p);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=e+1|0;q=3;$p=10;continue _;}k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d
=d+1|0;n=5;$p=12;continue _;case 10:$z=ARE(a,b,c,n,p,q);if(C()){break _;}n=$z;if(n)k=1;if(!k){n=d+1|0;p=4;$p=11;continue _;}k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;continue _;case 11:$z=ARE(a,b,i,n,e,p);if(C()){break _;}n=$z;if(n)k=1;if(k){k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);}c=c+1|0;d=d+1|0;n=5;$p=12;case 12:$z=ARE(a,b,c,d,e,n);if(C()){break _;}c=$z;if(c)k=1;if(k)f=Dk(CD(f),0.0,(-6.0),0.0);return CD(f);default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,
m,n,o,p,q,$p);}
function ANk(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AIT(a,b,c,d,e);if(C()){break _;}h=$z;g.x=g.x+h.x;g.z=g.z+h.z;g.w=g.w+h.w;return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AVc(a){return a.b_===Bf1?5:a.b_!==Bf2?0:30;}
function AEC(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.sQ(c,d,e);if(C()){break _;}f=$z;d=d+1|0;$p=2;case 2:$z=b.sQ(c,d,e);if(C()){break _;}g=$z;if(f>g)g=f;return g;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ARg(a,b,c,d,e,f){return;}
function A$y(a){return 0;}
function YM(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.b_===Bf1&&!E(f,64)){$p=2;continue _;}if(a.b_!==Bf2)return;g=d+1|0;$p=1;case 1:$z=AB9(b,c,g,e);if(C()){break _;}h=$z;if(h!==Bgk)return;$p=3;continue _;case 2:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;if(g>0&&g<8)Ez(b,c+0.5,d+0.5,e+0.5,B(253),N(f)*0.25+0.75,N(f)*1.0+0.5);if(a.b_!==Bf2)return;g=d+1|0;$p=1;continue _;case 3:$z=AAJ(b,
c,g,e);if(C()){break _;}g=$z;if(!g&&!E(f,100))BV(b,B(254),c+N(f),d+a.cF,e+N(f),0.0,0.0,0.0);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function A6q(b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:g=null;if(f===Bf1){L();g=Bf9;$p=1;continue _;}if(f!==Bf2)return g.x===0.0&&g.w===0.0?(-1000.0):CS(g.w,g.x)-1.5707963267948966;L();f=Bf$;$p=2;continue _;case 1:$z=AIT(g,b,c,d,e);if(C()){break _;}g=$z;if(f!==Bf2)return g.x===0.0&&g.w===0.0?(-1000.0):CS(g.w,g.x)-1.5707963267948966;L();f=Bf$;$p=2;case 2:$z=AIT(f,b,c,d,e);if(C()){break _;}g=$z;return g.x===
0.0&&g.w===0.0?(-1000.0):CS(g.w,g.x)-1.5707963267948966;default:Fa();}}C4().s(b,c,d,e,f,g,$p);}
function ARZ(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APg(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function ALn(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APg(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function APg(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACE(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b&&a.b_===Bf2){f=0;g=e-1|0;$p=2;continue _;}return;case 2:$z=AB9(b,c,d,g);if(C()){break _;}h=$z;if(h===Bf1)f=1;if(!f){g=e+1|0;$p=3;continue _;}f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 3:$z
=AB9(b,c,d,g);if(C()){break _;}h=$z;if(h===Bf1)f=1;if(!f){g=c-1|0;$p=4;continue _;}f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 4:$z=AB9(b,g,d,e);if(C()){break _;}h=$z;if(h===Bf1)f=1;if(!f){g=c+1|0;$p=5;continue _;}f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 5:$z=AB9(b,g,d,e);if(C()){break _;}h=$z;if(h===Bf1)f=1;if(!f){g=d+1|0;$p=6;continue _;}f=1;if(!f)return;$p=7;continue _;case 6:$z=AB9(b,c,g,e);if(C()){break _;}h
=$z;if(h===Bf1)f=1;if(!f)return;$p=7;case 7:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;if(!g){L();f=Bfw.b;$p=8;continue _;}if(g>4){J0(a,b,c,d,e);return;}L();f=Be$.b;$p=9;continue _;case 8:APE(b,c,d,e,f);if(C()){break _;}J0(a,b,c,d,e);return;case 9:APE(b,c,d,e,f);if(C()){break _;}J0(a,b,c,d,e);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function J0(a,b,c,d,e){var f,g,h,i;Ez(b,c+0.5,d+0.5,e+0.5,B(215),0.5,2.5999999046325684+(N(b.q)-N(b.q))*0.800000011920929);f=0;g=c;h=d+1.2;i=e;while(f<8){BV(b,B(255),g+BP(),h,i+BP(),0.0,0.0,0.0);f=f+1|0;}}
function AEn(){var a=this;HW.call(a);a.mo=0;a.hh=null;a.cT=null;}
function AUt(a,b){var c=new AEn();AZg(c,a,b);return c;}
function AZg(a,b,c){P$(a,b,c);a.mo=0;a.hh=$rt_createBooleanArray(4);a.cT=$rt_createIntArray(4);}
function AHg(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}f=$z;g=a.b+1|0;$p=2;case 2:AJu(b,c,d,e,g,f);if(C()){break _;}Js(b,c,d,e,c,d,e);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AOW(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFk(a,b,c,d,e);if(C()){break _;}g=$z;h=1;if(g<=0){$p=2;continue _;}i=(-100);a.mo=0;j=c-1|0;$p=3;continue _;case 2:AHg(a,b,c,d,e);if(C()){break _;}j=d-1|0;$p=7;continue _;case 3:$z=AOT(a,b,j,d,e,i);if(C()){break _;}j=$z;k=c+1|0;$p=4;case 4:$z=AOT(a,b,k,d,e,j);if
(C()){break _;}j=$z;k=e-1|0;$p=5;case 5:$z=AOT(a,b,c,d,k,j);if(C()){break _;}j=$z;k=e+1|0;$p=6;case 6:$z=AOT(a,b,c,d,k,j);if(C()){break _;}j=$z;k=j+a.qS|0;if(!(k<8&&j>=0))k=(-1);j=d+1|0;$p=8;continue _;case 7:$z=AL5(a,b,c,j,e);if(C()){break _;}k=$z;if(!k){if(g<0)return;if(!g){$p=12;continue _;}$p=13;continue _;}if(g>=8){d=a.b;$p=10;continue _;}d=a.b;k=g+8|0;$p=9;continue _;case 8:$z=AFk(a,b,c,j,e);if(C()){break _;}l=$z;if(l>=0){$p=11;continue _;}if(a.mo>=2&&a.b_===Bf1)k=0;if(a.b_===Bf2&&g<8&&k<8&&k>g&&E(f,4))
{h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 9:AI5(b,c,j,e,d,k);if(C()){break _;}return;case 10:AI5(b,c,j,e,d,g);if(C()){break _;}return;case 11:$z=AFk(a,b,c,j,e);if(C()){break _;}k=$z;if(k<8)k=k+8|0;if(a.mo>=2&&a.b_===Bf1)k=0;if(a.b_===Bf2&&g<8&&k<8&&k>g&&E(f,4)){h=0;k=g;}if(k!=g){if(k>=0){$p=18;continue _;}j=0;$p=20;continue _;}if(h){$p=17;continue _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 12:$z=AK_(a,b,c,d,e);if(C()){break _;}m
=$z;l=g+a.qS|0;if(g>=8)l=1;if(l>=8)return;m=m.data;if(m[0]){j=c-1|0;$p=14;continue _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 13:$z=ACw(a,b,c,j,e);if(C()){break _;}j=$z;if(!j)return;$p=12;continue _;case 14:APh(a,b,j,d,e,l);if(C()){break _;}if(m[1]){j=c+1|0;$p=15;continue _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 15:APh(a,b,j,d,e,l);if(C()){break _;}if(m[2]){j=e-1|0;$p=16;continue _;}if(!m[3])return;e
=e+1|0;$p=21;continue _;case 16:APh(a,b,c,d,j,l);if(C()){break _;}if(!m[3])return;e=e+1|0;$p=21;continue _;case 17:AHg(a,b,c,d,e);if(C()){break _;}k=g;g=k;j=d-1|0;$p=7;continue _;case 18:AKD(b,c,d,e,k);if(C()){break _;}Fo(b,c,d,e,a.b);j=a.b;$p=19;case 19:AHR(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 20:APE(b,c,d,e,j);if(C()){break _;}g=k;j=d-1|0;$p=7;continue _;case 21:APh(a,b,c,d,e,l);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function APh(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AL5(a,b,c,d,e);if(C()){break _;}g=$z;if(!g)return;$p=2;case 2:$z=ACE(b,c,d,e);if(C()){break _;}g=$z;if(g>0){if(a.b_!==Bf2){L();h=Be0.data[g];$p=4;continue _;}J0(a,b,c,d,e);}g=a.b;$p=3;case 3:AI5(b,c,d,e,g,f);if(C()){break _;}return;case 4:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;$p=5;case 5:h.IV(b,c,d,e,g);if(C()){break _;}g
=a.b;$p=3;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ANZ(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=1000;i=0;j=S(g,1);k=S(g,3);l=S(g,2);m=c-1|0;n=e-1|0;o=d-1|0;p=S(f,4);q=f+1|0;a:{while(i<4){if(!(!i&&!j)){r=S(i,1);if(!(!r&&!g)){s=S(i,2);if(!(!s&&!k)){t=S(i,3);if(t)break a;if
(l)break a;}}}i=i+1|0;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;case 1:$z=ACw(a,b,u,d,r);if(C()){break _;}t=$z;if(!t){$p=2;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;continue _;case 2:$z=AB9(b,u,d,r);if(C()){break _;}v=$z;if(v!==a.b_){$p=3;continue _;}$p=4;continue _;case 3:$z=ACw(a,b,u,o,r);if(C()){break _;}t=$z;if(!t)return f;if
(p<0){$p=5;continue _;}c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;case 4:$z=AEQ(b,u,d,r);if(C()){break _;}t=$z;if(t){$p=3;continue _;}b:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break b;if(l)break b;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1
|0;$p=1;continue _;case 5:$z=ANZ(a,b,u,d,r,q,i);if(C()){break _;}t=$z;if(t<h)h=t;c:{while(true){i=i+1|0;if(i>=4)break;if(!i&&!j)continue;r=S(i,1);if(!r&&!g)continue;s=S(i,2);if(!s&&!k)continue;t=S(i,3);if(t)break c;if(l)break c;}return h;}u=!i?m:c;if(!r)u=u+1|0;r=!s?n:e;if(!t)r=r+1|0;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AK_(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;h=e-1|0;i=d-1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hh;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hh;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;case 1:$z
=ACw(a,b,l,d,m);if(C()){break _;}j=$z;if(!j){$p=2;continue _;}f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hh;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hh;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;continue _;case 2:$z=AB9(b,l,d,m);if(C()){break _;}n=$z;if(n!==a.b_){$p=3;continue _;}$p=4;continue _;case 3:$z=ACw(a,b,l,i,m);if(C()){break _;}j=$z;if(j){k=a.cT.data;j=1;$p=5;continue _;}a.cT.data[f]=0;f=f+1|0;if(f>=
4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hh;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hh;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 4:$z=AEQ(b,l,d,m);if(C()){break _;}j=$z;if(j){$p=3;continue _;}f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hh;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hh;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f
==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;case 5:$z=ANZ(a,b,l,d,m,j,f);if(C()){break _;}j=$z;k[f]=j;f=f+1|0;if(f>=4){c=a.cT.data[0];j=1;while(j<4){if(a.cT.data[j]<c)c=a.cT.data[j];j=j+1|0;}d=0;while(d<4){k=a.hh;k.data[d]=a.cT.data[d]!=c?0:1;d=d+1|0;}return a.hh;}a.cT.data[f]=1000;l=!f?g:c;if(f==1)l=l+1|0;m=f==2?h:e;if(f==3)m=m+1|0;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ACw(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACE(b,c,d,e);if(C()){break _;}f=$z;L();if(f!=Bhg.b&&f!=Bhf.b&&f!=Bgm.b){if(!f)return 0;return Be0.data[f].b_.dw();}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AOT(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFk(a,b,c,d,e);if(C()){break _;}g=$z;if(g<0)return f;if(!g)a.mo=a.mo+1|0;if(g>=8)g=0;if(f>=0&&g>=f)g=f;return g;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AL5(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB9(b,c,d,e);if(C()){break _;}f=$z;if(f===a.b_)c=0;else{if(f!==Bf2){$p=2;continue _;}c=0;}return c;case 2:$z=ACw(a,b,c,d,e);if(C()){break _;}c=$z;return c?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ACa(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APg(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACE(b,c,d,e);if(C()){break _;}f=$z;if(f==a.b)Fo(b,c,d,e,a.b);return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AIR(){HW.call(this);}
function AXQ(a,b){var c=new AIR();A2D(c,a,b);return c;}
function A2D(a,b,c){P$(a,b,c);Ff(a,0);}
function AGD(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:APg(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=ACE(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return;$p=3;case 3:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;b.sq=1;f=a.b-1|0;$p=4;case 4:AJu(b,c,d,e,f,g);if(C()){break _;}Js(b,c,d,e,c,d,e);Fo(b,c,d,e,a.b-1|0);b.sq=0;return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function Je(){O.call(this);}
var Be7=0;function BbP(a,b){var c=new Je();RK(c,a,b);return c;}
function RK(a,b,c){C$(a,b,c,BhE);}
function ARX(a,b,c,d,e){Fo(b,c,d,e,a.b);}
function ASn(a,b,c,d,e,f){Fo(b,c,d,e,a.b);}
function APH(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=ACE(b,c,g,e);if(C()){break _;}g=$z;if(!g)g=1;else{L();if(g==BgA.b)g=1;else{f=Be0.data[g].b_;g=f===Bf1?1:f!==Bf2?0:1;}}if(g&&d>=0){f=new JU;h=c+0.5;i=d+0.5;j=e+0.5;c=a.b;FD(f,b);f.oQ=0;f.hS=c;f.mG=1;D2(f,0.9800000190734863,0.9800000190734863);f.c4=f.eP/2.0;k
=h;l=i;m=j;CU(f,k,l,m);f.g=0.0;f.i=0.0;f.h=0.0;f.i9=0;f.bS=k;f.cS=l;f.bR=m;if(!Be7){$p=2;continue _;}if(!f.cR){$p=3;continue _;}}return;case 2:AOn(b,f);if(C()){break _;}return;case 3:AMW(f);if(C()){break _;}if(f.cR)return;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function A37(a){return 3;}
function ACU(){Be7=0;}
function AG$(){Je.call(this);}
function BbX(a,b){var c=new AG$();AV7(c,a,b);return c;}
function AV7(a,b,c){RK(a,b,c);}
function A_w(a,b,c){if(E(c,10))b=a.b;else{BB();b=BhK.cW;}return b;}
function Y4(){O.call(this);}
function SW(a,b){var c=new Y4();AZI(c,a,b);return c;}
function AZI(a,b,c){C$(a,b,c,Bhk);}
function A4y(a,b,c){b=a.b;L();if(b==Bfp.b){BB();b=BhL.cW;}else if(a.b!=Bg$.b)b=a.b;else{BB();b=BhM.cW;}return b;}
function A0g(a,b){return 1;}
function AFl(){O.call(this);}
function Bc0(a){var b=new AFl();A_m(b,a);return b;}
function A_m(a,b){D1(a,b,Bhl);a.ba=20;}
function A86(a,b){return 1;}
function ATo(a,b,c){L();return Bfb.b;}
function AVI(a,b){return b==1?21:b?20:21;}
function L0(){O.call(this);this.r6=0;}
function AQD(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ek(c,d,e);if(C()){break _;}g=$z;if(!a.r6&&g==a.b)return 0;$p=2;case 2:$z=AGz(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ACM(){L0.call(this);this.Cu=0;}
function BaV(a,b){var c=new ACM();A0_(c,a,b);return c;}
function A0_(a,b,c){C$(a,b,c,BhA);a.r6=0;a.Cu=c;Ff(a,1);}
function AIF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d-1|0;$p=1;case 1:$z=AB9(b,c,g,e);if(C()){break _;}f=$z;if(f.dw())return;h=c-2|0;i=c+2|0;j=d+1|0;k=e-2|0;l=e+2|0;while(h<=i){m=g;while(m<=j){n=k;if(n<=l){$p=5;continue _;}m=m+1|0;}h=h+1|0;}$p=2;case 2:$z=AEQ(b,c,d,e);if(C()){break _;}i=$z;$p=3;case 3:Yo(a,
b,c,d,e,i);if(C()){break _;}i=0;$p=4;case 4:APE(b,c,d,e,i);if(C()){break _;}return;case 5:$z=ACE(b,h,m,n);if(C()){break _;}o=$z;L();if(o==Bfb.b)return;n=n+1|0;while(n>l){m=m+1|0;while(m>j){h=h+1|0;if(h>i){$p=2;continue _;}m=g;}n=k;}continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AXd(a,b){return E(b,10)?0:1;}
function A5n(a,b,c){L();return Bfg.b;}
function A21(a){return a.r6?0:1;}
function AKu(a,b){a.r6=b;a.ba=a.Cu+(!b?1:0)|0;}
function ASB(a,b,c,d,e,f){return;}
function ALm(){O.call(this);}
function Bbl(a){var b=new ALm();A84(b,a);return b;}
function A84(a,b){D1(a,b,BhC);a.ba=48;}
function AKR(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;if(k<=e){$p=1;continue _;}j=j+1|0;}f=f+1|0;}return;case 1:$z=AB9(b,f,j,k);if(C()){break _;}l=$z;k=k+1|0;a:while(true){if(k<=e){continue _;}j=j+1|0;while(j>d){f=f+1|0;if(f>g)break a;j=h;}k=i;}return;default:Fa();}}C4().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function ANC(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;if(l<=c){$p=1;continue _;}k=k+1|0;}f=f+1|0;}return;case 1:$z=ACE(b,f,k,l);if(C()){break _;}d=$z;$p=2;case 2:AHR(b,f,k,l,d);if(C()){break _;}l=l+1|0;a:while(true){if(l<=c){$p=1;continue _;}k=k+1|0;while(k>i){f
=f+1|0;if(f>g)break a;k=h;}l=j;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Ng(){O.call(this);this.CF=0;}
function A$k(a){return 0;}
function YE(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.ek(c,d,e);if(C()){break _;}g=$z;if(!a.CF&&g==a.b)return 0;$p=2;case 2:$z=AGz(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AQu(){Ng.call(this);}
function Bbh(a,b,c,d){var e=new AQu();A5q(e,a,b,c,d);return e;}
function A5q(a,b,c,d,e){C$(a,b,c,d);a.CF=e;}
function AWd(a,b){return 0;}
function AHj(){F5.call(this);}
function ATY(a,b){var c=new AHj();A_e(c,a,b);return c;}
function A_e(a,b,c){LB(a,b,c);Bn(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AJb(a,b){L();return BgL.data[b];}
function ADq(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=XH(b,c,d,e);if(C()){break _;}f=$z;if(f>13)return 0;d=d-1|0;$p=2;case 2:$z=ACE(b,c,d,e);if(C()){break _;}c=$z;return !AJb(a,c)?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ABD(){O.call(this);}
function AEI(a,b){var c=new ABD();AX5(c,a,b);return c;}
function AX5(a,b,c){D1(a,b,Bhz);a.ba=c;}
function A4L(a,b){return b==1?a.ba-16|0:b?a.ba:a.ba+16|0;}
function Zn(){O.call(this);this.wE=0;}
function A9w(a,b){var c=new Zn();A6m(c,a,b);return c;}
function A6m(a,b,c){C$(a,b,6,Bhk);a.wE=c;if(!c)Bn(a,0.0,0.0,0.0,1.0,0.5,1.0);Gx(a,255);}
function A$T(a,b){return b>1?5:6;}
function A52(a){return a.wE;}
function ABM(a,b,c,d,e,f){L();}
function ABr(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();f=d-1|0;$p=1;case 1:$z=ACE(b,c,f,e);if(C()){break _;}g=$z;if(g!=Be5.b)return;g=0;$p=2;case 2:APE(b,c,d,e,g);if(C()){break _;}d=Be4.b;$p=3;case 3:APE(b,c,f,e,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AZw(a,b,c){L();return Be5.b;}
function AXf(a){return a.wE;}
function ASN(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();if(a!==Be5){$p=1;continue _;}if(f==1)return 1;$p=2;continue _;case 1:AGz(a,b,c,d,e,f);if(C()){break _;}if(f==1)return 1;$p=2;case 2:$z=AGz(a,b,c,d,e,f);if(C()){break _;}g=$z;if(!g)c=0;else{if(f){$p=3;continue _;}c=1;}return c;case 3:$z=b.ek(c,d,e);if(C()){break _;}c=$z;return c==a.b?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AOm(){O.call(this);}
function BaW(a,b){var c=new AOm();A0C(c,a,b);return c;}
function A0C(a,b,c){C$(a,b,c,BhG);}
function A5b(a,b){return !b?a.ba+2|0:b!=1?a.ba:a.ba+1|0;}
function AVk(a,b){return 0;}
function AGJ(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=AWZ(b,c+0.5,d+0.5,e+0.5);f.hq=E(b.q,f.hq/4|0)+(f.hq/8|0)|0;$p=1;case 1:AOn(b,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ASv(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=AWZ(b,c+0.5,d+0.5,e+0.5);$p=1;case 1:AOn(b,g);if(C()){break _;}Di(b,g,B(226),1.0,1.0);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ADg(){O.call(this);}
function Bav(a,b){var c=new ADg();AUn(c,a,b);return c;}
function AUn(a,b,c){C$(a,b,c,Bhl);}
function A_j(a,b){return b>1?a.ba:4;}
function A4N(a,b){return 0;}
function XV(){LU.call(this);}
function BbC(a,b){var c=new XV();AZD(c,a,b);return c;}
function AZD(a,b,c){AJc(a,b,c);}
function A3h(a,b){return 1;}
function AU6(a,b,c){L();return Bfw.b;}
function AOI(){O.call(this);}
function Bbo(a,b){var c=new AOI();A$7(c,a,b);return c;}
function A$7(a,b,c){C$(a,b,c,BhF);Ff(a,1);}
function ANs(a,b,c,d,e){return null;}
function A2m(a){return 0;}
function AWi(a){return 0;}
function A07(a){return 2;}
function AMe(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAJ(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;f=e+1|0;$p=4;case 4:$z=AAJ(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;d=d-1|0;$p=5;case 5:$z=AAJ(b,c,d,e);if(C()){break _;}c=$z;return c;default:
Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ANV(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;if(f==1){h=d-1|0;$p=2;continue _;}if(f==2){h=e+1|0;$p=3;continue _;}if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 2:$z=AAJ(b,c,h,e);if(C()){break _;}h=$z;if(h)g=5;if(f==2){h=e+1|0;$p=3;continue _;}if(f==3)
{h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 3:$z=AAJ(b,c,d,h);if(C()){break _;}h=$z;if(h)g=4;if(f==3){h=e-1|0;$p=4;continue _;}if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 4:$z=AAJ(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(f==4){h=c+1|0;$p=5;continue _;}if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 5:$z=AAJ(b,h,d,e);if(C()){break _;}h=$z;if(h)g=2;if(f==5){f=c-1|0;$p=6;continue _;}$p=7;continue _;case 6:$z
=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(f)g=1;$p=7;case 7:AKD(b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ASl(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;if(g)return;$p=2;case 2:ABC(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ABC(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=c+1|0;$p=2;continue _;}f=1;$p=3;continue _;case 2:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(!f){f=e-1|0;$p=4;continue _;}f=2;$p=5;continue _;case 3:AKD(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 4:$z=AAJ(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=e+1|0;$p=7;continue _;}f=3;$p=8;continue _;case 5:AKD(b,
c,d,e,f);if(C()){break _;}$p=6;case 6:AFb(a,b,c,d,e);if(C()){break _;}return;case 7:$z=AAJ(b,c,d,f);if(C()){break _;}f=$z;if(!f){f=d-1|0;$p=9;continue _;}f=4;$p=10;continue _;case 8:AKD(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 9:$z=AAJ(b,c,f,e);if(C()){break _;}f=$z;if(!f){$p=6;continue _;}f=5;$p=11;continue _;case 10:AKD(b,c,d,e,f);if(C()){break _;}$p=6;continue _;case 11:AKD(b,c,d,e,f);if(C()){break _;}$p=6;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AKi(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AFb(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;$p=2;case 2:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;h=0;f=c-1|0;$p=3;case 3:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==1)h=1;f=c+1|0;$p=4;case 4:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(!f&&g==2)h=1;f=e-1|0;$p=5;case 5:$z=AAJ(b,c,d,f);if(C()){break _;}f=$z;if(!f&&
g==3)h=1;f=e+1|0;$p=6;case 6:$z=AAJ(b,c,d,f);if(C()){break _;}f=$z;if(!f&&g==4)h=1;f=d-1|0;$p=7;case 7:$z=AAJ(b,c,f,e);if(C()){break _;}f=$z;if(!f&&g==5)h=1;if(!h)return;$p=8;case 8:$z=AEQ(b,c,d,e);if(C()){break _;}f=$z;$p=9;case 9:Yo(a,b,c,d,e,f);if(C()){break _;}f=0;$p=10;case 10:APE(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AFb(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AMe(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AEQ(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yo(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APE(b,c,d,e,f);if(C()){break _;}return 0;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AKp(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}h=$z;if(h==1)Bn(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)Bn(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)Bn(a,0.3499999940395355,0.20000000298023224,
0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)Bn(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else Bn(a,0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);$p=2;case 2:$z=Kj(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AQw(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;m=j;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l
=i+0.2199999988079071;m=j;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g==3){k=h;l=i+0.2199999988079071;m=j-0.27000001072883606;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}else if(g!=4){n=h;o=i;p=j;BV(b,B(256),n,o,p,0.0,0.0,0.0);BV(b,B(257),n,o,p,0.0,0.0,0.0);}else{k=h;l=i+0.2199999988079071;m=j+0.27000001072883606;BV(b,B(256),k,l,m,0.0,0.0,0.0);BV(b,B(257),k,l,m,0.0,0.0,0.0);}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AO9(){var a=this;O.call(a);a.sD=null;a.t8=null;}
function Bc5(a,b){var c=new AO9();A3V(c,a,b);return c;}
function A3V(a,b,c){C$(a,b,c,BhD);a.sD=$rt_createIntArray(256);a.t8=$rt_createIntArray(256);Hx(a,Bfa.b,5,20);Hx(a,Bfb.b,5,5);Hx(a,Bfc.b,30,60);Hx(a,Bfu.b,30,20);Hx(a,Bfv.b,15,100);Hx(a,Bfo.b,30,60);Ff(a,1);}
function Hx(a,b,c,d){a.sD.data[b]=c;a.t8.data[b]=d;}
function ARK(a,b,c,d,e){return null;}
function A59(a){return 0;}
function A8G(a){return 0;}
function AXF(a){return 3;}
function AWO(a,b){return 0;}
function A0c(a){return 20;}
function XU(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;h=S(g,15);if(h>=0){$p=2;continue _;}i=g+1|0;$p=3;continue _;case 2:$z=AM4(a,b,c,d,e);if(C()){break _;}i=$z;if(i){j=d-1|0;$p=4;continue _;}h=d-1|0;$p=5;continue _;case 3:AKD(b,
c,d,e,i);if(C()){break _;}Fo(b,c,d,e,a.b);$p=2;continue _;case 4:$z=AF5(a,b,c,j,e);if(C()){break _;}i=$z;if(!i&&!h&&!E(f,4)){h=0;$p=13;continue _;}if(!(g%5|0)&&g>5){h=c+1|0;i=300;$p=7;continue _;}return;case 5:$z=AAJ(b,c,h,e);if(C()){break _;}h=$z;if(h&&g<=3)return;h=0;$p=6;case 6:APE(b,c,d,e,h);if(C()){break _;}return;case 7:YL(a,b,h,d,e,i,f);if(C()){break _;}i=c-1|0;g=300;$p=8;case 8:YL(a,b,i,d,e,g,f);if(C()){break _;}g=100;$p=9;case 9:YL(a,b,c,j,e,g,f);if(C()){break _;}k=d+1|0;g=200;$p=10;case 10:YL(a,b,
c,k,e,g,f);if(C()){break _;}l=e-1|0;g=300;$p=11;case 11:YL(a,b,c,d,l,g,f);if(C()){break _;}m=e+1|0;g=300;$p=12;case 12:YL(a,b,c,d,m,g,f);if(C()){break _;}n=d+4|0;a:{while(i<=h){o=l;while(o<=m){p=j;while(p<=n){if(i!=c)break a;if(p!=d)break a;if(o!=e)break a;p=p+1|0;}o=o+1|0;}i=i+1|0;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 13:APE(b,c,d,e,h);if(C()){break _;}return;case 14:$z=ACE(b,i,p,o);if(C()){break _;}r=$z;if(!r){r=i+1|0;$p=15;continue _;}if(0>0&&E(f,q)<=0){g=a.b;$p=21;continue _;}b:
{c:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break c;o=l;}p=j;}if(i!=c)break b;if(p!=d)break b;if(o==e)continue;else break b;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;continue _;case 15:$z=AGF(a,b,r,p,o,g);if(C()){break _;}g=$z;r=i-1|0;$p=16;case 16:$z=AGF(a,b,r,p,o,g);if(C()){break _;}g=$z;r=p-1|0;$p=17;case 17:$z=AGF(a,b,i,r,o,g);if(C()){break _;}g=$z;r=p+1|0;$p=18;case 18:$z=AGF(a,b,i,r,o,g);if(C()){break _;}g=$z;r=o-1|0;$p=19;case 19:$z=AGF(a,b,i,p,r,g);if(C()){break _;}r=$z;g
=o+1|0;$p=20;case 20:$z=AGF(a,b,i,p,g,r);if(C()){break _;}r=$z;if(r>0&&E(f,q)<=r){g=a.b;$p=21;continue _;}d:{b:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break b;o=l;}p=j;}if(i!=c)break d;if(p!=d)break d;if(o==e)continue;else break d;}return;}q=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;case 21:APE(b,i,p,o,g);if(C()){break _;}a:{d:while(true){p=p+1|0;while(p>n){o=o+1|0;while(o>m){i=i+1|0;if(i>h)break d;o=l;}p=j;}if(i!=c)break a;if(p!=d)break a;if(o==e)continue;else break a;}return;}q
=100;if(p>k)q=q+((p-k|0)*100|0)|0;g=0;$p=14;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function YL(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.t8.data;$p=1;case 1:$z=ACE(b,c,d,e);if(C()){break _;}i=$z;j=h[i];if(E(g,f)>=j)return;$p=2;case 2:$z=ACE(b,c,d,e);if(C()){break _;}f=$z;L();i=f!=Bfv.b?0:1;if(E(g,2)){f=0;$p=3;continue _;}f=a.b;$p=4;continue _;case 3:APE(b,c,d,e,f);if(C()){break _;}if(!i)return;g=Bfv;f=0;$p=5;continue _;case 4:APE(b,c,d,e,f);if
(C()){break _;}if(!i)return;g=Bfv;f=0;$p=5;case 5:g.nt(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AM4(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c+1|0;$p=1;case 1:$z=AF5(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c-1|0;$p=2;case 2:$z=AF5(a,b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=d-1|0;$p=3;case 3:$z=AF5(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=d+1|0;$p=4;case 4:$z=AF5(a,b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=5;case 5:$z=AF5(a,b,c,d,f);if(C()){break _;}f=
$z;if(f)return 1;e=e+1|0;$p=6;case 6:$z=AF5(a,b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function A3v(a){return 0;}
function AF5(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.sD.data;$p=1;case 1:$z=b.ek(c,d,e);if(C()){break _;}c=$z;return f[c]<=0?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AGF(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.sD.data;$p=1;case 1:$z=ACE(b,c,d,e);if(C()){break _;}c=$z;h=g[c];if(h>f)f=h;return f;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ANz(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAJ(b,c,f,e);if(C()){break _;}f=$z;if(f)return 1;$p=2;case 2:$z=AM4(a,b,c,d,e);if(C()){break _;}c=$z;return c?1:0;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ABI(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAJ(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AM4(a,b,c,d,e);if(C()){break _;}f=$z;if(f)return;f=0;$p=3;case 3:APE(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ACA(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAJ(b,c,f,e);if(C()){break _;}f=$z;if(f){Fo(b,c,d,e,a.b);return;}$p=2;case 2:$z=AM4(a,b,c,d,e);if(C()){break _;}f=$z;if(f){Fo(b,c,d,e,a.b);return;}f=0;$p=3;case 3:APE(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ASC(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!E(f,24))Ez(b,c+0.5,d+0.5,e+0.5,B(258),1.0+N(f),N(f)*0.699999988079071+0.30000001192092896);g=d-1|0;$p=1;case 1:$z=AAJ(b,c,g,e);if(C()){break _;}h=$z;if(h){g=0;i=c;j=d;k=e;while(g<3){BV(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,
0.0);g=g+1|0;}return;}L();l=BgA;$p=2;case 2:$z=AF5(l,b,c,g,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;k=e;while(g<3){BV(b,B(255),i+N(f),j+N(f)*0.5+0.5,k+N(f),0.0,0.0,0.0);g=g+1|0;}return;}l=BgA;g=c-1|0;$p=3;case 3:a:{$z=AF5(l,b,g,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;m=d;n=e;while(true){if(g>=2)break a;j=i+N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BV(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=BgA;h=c+1|0;$p=4;case 4:a:{$z=AF5(l,b,h,d,e);if(C()){break _;}g=$z;if(g){g=0;i=h;m=d;n=e;while(true){if(g>=2)break a;j
=i-N(f)*0.10000000149011612;k=m+N(f);o=n+N(f);BV(b,B(255),j,k,o,0.0,0.0,0.0);g=g+1|0;}}}l=BgA;g=e-1|0;$p=5;case 5:a:{$z=AF5(l,b,c,d,g);if(C()){break _;}g=$z;if(g){g=0;i=c;k=d;n=e;while(true){if(g>=2)break a;j=i+N(f);m=k+N(f);o=n+N(f)*0.10000000149011612;BV(b,B(255),j,m,o,0.0,0.0,0.0);g=g+1|0;}}}l=BgA;g=e+1|0;$p=6;case 6:a:{$z=AF5(l,b,c,d,g);if(C()){break _;}h=$z;if(h){h=0;o=c;p=d;j=g;while(true){if(h>=2)break a;q=o+N(f);i=p+N(f);n=j-N(f)*0.10000000149011612;BV(b,B(255),q,i,n,0.0,0.0,0.0);h=h+1|0;}}}l=BgA;d=
d+1|0;$p=7;case 7:a:{$z=AF5(l,b,c,d,e);if(C()){break _;}g=$z;if(g){g=0;i=c;j=d;n=e;while(true){if(g>=2)break a;q=i+N(f);k=j-N(f)*0.10000000149011612;o=n+N(f);BV(b,B(255),q,k,o,0.0,0.0,0.0);g=g+1|0;}}}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Eg(){O.call(this);}
function AOL(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.tc();$p=1;case 1:AFY(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AL7(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AFR(b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AAi(){Eg.call(this);}
function BcW(a,b){var c=new AAi();AU1(c,a,b);return c;}
function AU1(a,b,c){C$(a,b,c,Bhk);}
function AXs(a){return BcF();}
function A6c(a){return 0;}
function ZF(){O.call(this);this.cG=null;}
function A$W(a,b){var c=new ZF();A7i(c,a,b);return c;}
function A7i(a,b,c){C$(a,b,c.ba,c.b_);a.cG=c;BH(a,c.qh);Dn(a,c.nS/3.0);a.gK=c.gK;}
function A5R(a){return 0;}
function AWb(a){return 0;}
function AY5(a){return 10;}
function API(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AGz(a,b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AJI(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}h=$z;if(!h){Bn(a,0.0,0.0,0.0,0.5,0.5,1.0);$p=2;continue _;}if(h==1){Bn(a,0.0,0.0,0.0,0.5,1.0,1.0);$p=4;continue _;}if(h==2){Bn(a,0.0,0.0,0.0,1.0,0.5,0.5);$p=6;continue _;}if(h!=3){Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;}Bn(a,0.0,0.0,0.0,1.0,1.0,0.5);$p=8;continue _;case 2:ALF(a,b,c,d,e,f,
g);if(C()){break _;}Bn(a,0.5,0.0,0.0,1.0,1.0,1.0);$p=3;case 3:ALF(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 4:ALF(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.5,0.0,0.0,1.0,0.5,1.0);$p=5;case 5:ALF(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 6:ALF(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.5,1.0,1.0,1.0);$p=7;case 7:ALF(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;case 8:ALF(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.5,1.0,
0.5,1.0);$p=9;case 9:ALF(a,b,c,d,e,f,g);if(C()){break _;}Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AHI(a,b,c,d,e,f){var g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=d+1|0;$p=1;case 1:$z=AB9(b,c,g,e);if(C()){break _;}h=$z;if(!h.dw()){$p=2;continue _;}i=a.cG.b;$p=11;continue _;case 2:AIx(a,b,c,d,e);if(C()){break _;}i=c+1|0;j=d-1|0;$p=3;case 3:AIx(a,b,i,j,e);if(C()){break _;}k=c-1|0;$p=4;case 4:AIx(a,b,k,j,e);if(C()){break _;}l=e-1|0;$p=5;case 5:AIx(a,
b,c,j,l);if(C()){break _;}m=e+1|0;$p=6;case 6:AIx(a,b,c,j,m);if(C()){break _;}$p=7;case 7:AIx(a,b,i,g,e);if(C()){break _;}$p=8;case 8:AIx(a,b,k,g,e);if(C()){break _;}$p=9;case 9:AIx(a,b,c,g,l);if(C()){break _;}$p=10;case 10:AIx(a,b,c,g,m);if(C()){break _;}h=a.cG;$p=12;continue _;case 11:APE(b,c,d,e,i);if(C()){break _;}h=a.cG;$p=12;case 12:h.e3(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIx(a,b,c,d,e){var f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=APT(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return;g=(-1);f=c+1|0;h=d+1|0;$p=2;case 2:$z=APT(a,b,f,h,e);if(C()){break _;}i=$z;if(i)g=0;i=c-1|0;$p=3;case 3:$z=APT(a,b,i,h,e);if(C()){break _;}j=$z;if(j)g=1;j=e+1|0;$p=4;case 4:$z=APT(a,b,c,h,j);if(C()){break _;}k=$z;if(k)g=2;k=e-1|0;$p=
5;case 5:$z=APT(a,b,c,h,k);if(C()){break _;}h=$z;if(h)g=3;if(g<0){$p=6;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 6:$z=ADG(a,b,f,d,e);if(C()){break _;}h=$z;if(h){$p=7;continue _;}$p=9;continue _;case 7:$z=ADG(a,b,i,d,e);if(C()){break _;}h=$z;if(!h)g=0;$p=9;continue _;case 8:$z=APT(a,b,i,h,e);if(C()){break _;}i=$z;if(i)g=0;$p=12;continue _;case 9:$z=ADG(a,b,i,d,e);if(C()){break _;}h=$z;if(h){$p=10;continue _;}$p=13;continue _;case 10:$z=ADG(a,b,f,d,e);if(C()){break _;}h=
$z;if(!h)g=1;$p=13;continue _;case 11:AKD(b,c,d,e,g);if(C()){break _;}return;case 12:$z=APT(a,b,f,h,e);if(C()){break _;}f=$z;if(f)g=1;$p=15;continue _;case 13:$z=ADG(a,b,c,d,j);if(C()){break _;}h=$z;if(h){$p=14;continue _;}$p=16;continue _;case 14:$z=ADG(a,b,c,d,k);if(C()){break _;}h=$z;if(!h)g=2;$p=16;continue _;case 15:$z=APT(a,b,c,h,k);if(C()){break _;}f=$z;if(f)g=2;$p=18;continue _;case 16:$z=ADG(a,b,c,d,k);if(C()){break _;}h=$z;if(h){$p=17;continue _;}if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 17:$z
=ADG(a,b,c,d,j);if(C()){break _;}h=$z;if(!h)g=3;if(g<0){h=d-1|0;$p=8;continue _;}if(g<0)return;$p=11;continue _;case 18:$z=APT(a,b,c,h,j);if(C()){break _;}f=$z;if(f)g=3;if(g<0)return;$p=11;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ADG(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB9(b,c,d,e);if(C()){break _;}b=$z;return b.dw();default:Fa();}}C4().s(a,b,c,d,e,$p);}
function APT(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACE(b,c,d,e);if(C()){break _;}f=$z;if(!f)c=0;else{L();c=Be0.data[f].en()!=10?0:1;}return c;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function APl(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.kS(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ABk(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.ra(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ADv(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.nt(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AM5(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.CB(b,c,d,e);if(C()){break _;}g=$z;return g;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function A87(a,b){return a.cG.yt(b);}
function A8j(a){return a.cG.pT();}
function A4p(a,b,c){return a.cG.dX(b,c);}
function A0G(a,b){return a.cG.eI(b);}
function AXG(a,b,c){return a.cG.e0(b,c);}
function A8d(a,b){return a.cG.ci(b);}
function ANd(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:$z=g.um(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AVR(a){return a.cG.my();}
function AMp(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.oU(b,c,d,e);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ACQ(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cG;$p=1;case 1:h.qH(b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AYL(a){return a.cG.pi();}
function AYY(a,b,c){return a.cG.o9(b,c);}
function AMx(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:$z=f.fT(b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ACL(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;$p=1;case 1:AHI(a,b,c,d,e,f);if(C()){break _;}g=a.cG;$p=2;case 2:g.fE(b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function YI(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:f.lB(b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AHU(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=a.cG;$p=1;case 1:h.HY(b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AM7(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.IV(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AQ0(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.oJ(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AQ5(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:g.e9(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AGP(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=a.cG;$p=1;case 1:$z=g.lG(b,c,d,e,f);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function Zg(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.cG;$p=1;case 1:f.sO(b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AFW(){Eg.call(this);this.fo=null;}
function Bai(a){var b=new AFW();A7c(b,a);return b;}
function A7c(a,b){D1(a,b,Bhl);a.fo=new DB;a.ba=26;}
function AEF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1)return a.ba-1|0;if(!f)return a.ba-1|0;g=e-1|0;$p=1;case 1:$z=b.ek(c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=b.ek(c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=b.ek(k,d,e);if(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=b.ek(m,
d,e);if(C()){break _;}n=$z;if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;L();if(BgL.data[h]&&!BgL.data[j])k=3;if(BgL.data[j]&&!BgL.data[h])k=2;if(BgL.data[l]&&!BgL.data[n])k=5;if(BgL.data[n]&&!BgL.data[l])k=4;return f!=k?a.ba:a.ba+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);c=l!=a.b?m:k;$p=7;continue _;}return a.ba;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);c=h!=a.b?i:g;$p=5;continue _;}return a.ba;case 5:$z=b.ek(k,d,c);if(C()){break _;}p=$z;if(h==a.b)i=g;$p=6;case 6:$z=b.ek(m,d,i);if(C()){break _;}m=$z;if(f==4)o=(-1)-o
|0;i=5;L();if(!(!BgL.data[l]&&!BgL.data[p])&&!BgL.data[n]&&!BgL.data[m])i=5;if(!(!BgL.data[n]&&!BgL.data[m])&&!BgL.data[l]&&!BgL.data[p])i=4;return (f!=i?a.ba+32|0:a.ba+16|0)+o|0;case 7:$z=b.ek(c,d,g);if(C()){break _;}g=$z;if(l==a.b)m=k;$p=8;case 8:$z=b.ek(m,d,i);if(C()){break _;}m=$z;if(f==3)o=(-1)-o|0;i=3;L();if(!(!BgL.data[h]&&!BgL.data[g])&&!BgL.data[j]&&!BgL.data[m])i=3;if(!(!BgL.data[j]&&!BgL.data[m])&&!BgL.data[h]&&!BgL.data[g])i=2;return (f!=i?a.ba+32|0:a.ba+16|0)+o|0;default:Fa();}}C4().s(a,b,c,d,e,
f,g,h,i,j,k,l,m,n,o,p,$p);}
function A9g(a,b){return b==1?a.ba-1|0:!b?a.ba-1|0:b!=3?a.ba:a.ba+1|0;}
function AJ$(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;g=c-1|0;$p=1;case 1:$z=ACE(b,g,d,e);if(C()){break _;}h=$z;if(h==a.b)f=1;h=c+1|0;$p=2;case 2:$z=ACE(b,h,d,e);if(C()){break _;}i=$z;if(i==a.b)f=f+1|0;i=e-1|0;$p=3;case 3:$z=ACE(b,c,d,i);if(C()){break _;}j=$z;if(j==a.b)f=f+1|0;k=e+1|0;$p=4;case 4:$z=ACE(b,c,d,k);if(C()){break _;}l=$z;if
(l==a.b)f=f+1|0;if(f>1)return 0;$p=5;case 5:$z=AI4(a,b,g,d,e);if(C()){break _;}j=$z;if(j)return 0;$p=6;case 6:$z=AI4(a,b,h,d,e);if(C()){break _;}e=$z;if(e)return 0;$p=7;case 7:$z=AI4(a,b,c,d,i);if(C()){break _;}e=$z;if(e)return 0;$p=8;case 8:$z=AI4(a,b,c,d,k);if(C()){break _;}c=$z;return c?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AI4(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACE(b,c,d,e);if(C()){break _;}f=$z;if(f!=a.b)return 0;f=c-1|0;$p=2;case 2:$z=ACE(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=c+1|0;$p=3;case 3:$z=ACE(b,f,d,e);if(C()){break _;}f=$z;if(f==a.b)return 1;f=e-1|0;$p=4;case 4:$z=ACE(b,c,d,f);if(C()){break _;}f=$z;if(f==a.b)return 1;e=e+1|0;$p=5;case 5:$z=ACE(b,c,d,e);if(C()){break _;}c
=$z;return c!=a.b?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ASP(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANG(b,c,d,e);if(C()){break _;}f=$z;g=f;h=0;i=27;j=c;k=d;l=e;while(h<i){f=Ri(g,h);if(f!==null){m=N(a.fo)*0.800000011920929+0.10000000149011612;n=N(a.fo)*0.800000011920929+0.10000000149011612;o
=N(a.fo)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;if(f.p>0){s=E(a.fo,21)+10|0;if(s>f.p)s=f.p;f.p=f.p-s|0;t=Hf(b,p,q,r,Ov(f.bA,s,f.eo));t.g=C0(a.fo)*0.05000000074505806;t.i=C0(a.fo)*0.05000000074505806+0.20000000298023224;t.h=C0(a.fo)*0.05000000074505806;$p=3;continue _;}}h=h+1|0;}$p=2;case 2:AL7(a,b,c,d,e);if(C()){break _;}return;case 3:AOn(b,t);if(C()){break _;}a:while(true){if(f.p>0){s=E(a.fo,21)+10|0;if(s>f.p)s=f.p;f.p=f.p-s|0;t=Hf(b,p,q,r,Ov(f.bA,s,f.eo));t.g=C0(a.fo)*0.05000000074505806;t.i
=C0(a.fo)*0.05000000074505806+0.20000000298023224;t.h=C0(a.fo)*0.05000000074505806;continue _;}while(true){h=h+1|0;if(h>=i)break a;f=Ri(g,h);if(f===null)continue;else break;}m=N(a.fo)*0.800000011920929+0.10000000149011612;n=N(a.fo)*0.800000011920929+0.10000000149011612;o=N(a.fo)*0.800000011920929+0.10000000149011612;p=j+m;q=k+n;r=l+o;}$p=2;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$p);}
function AF2(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANG(b,c,d,e);if(C()){break _;}g=$z;h=g;i=d+1|0;$p=2;case 2:$z=AAJ(b,c,i,e);if(C()){break _;}j=$z;if(j)return 1;k=c-1|0;$p=3;case 3:$z=ACE(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){$p=5;continue _;}l=c+1|0;$p=4;case 4:$z=ACE(b,l,
d,e);if(C()){break _;}j=$z;if(j==a.b){$p=7;continue _;}m=e-1|0;$p=6;continue _;case 5:$z=AAJ(b,k,i,e);if(C()){break _;}j=$z;if(j)return 1;l=c+1|0;$p=4;continue _;case 6:$z=ACE(b,c,d,m);if(C()){break _;}j=$z;if(j==a.b){$p=9;continue _;}n=e+1|0;$p=8;continue _;case 7:$z=AAJ(b,l,i,e);if(C()){break _;}j=$z;if(j)return 1;m=e-1|0;$p=6;continue _;case 8:$z=ACE(b,c,d,n);if(C()){break _;}j=$z;if(j!=a.b){$p=10;continue _;}$p=11;continue _;case 9:$z=AAJ(b,c,i,m);if(C()){break _;}j=$z;if(j)return 1;n=e+1|0;$p=8;continue _;case 10:$z
=ACE(b,k,d,e);if(C()){break _;}j=$z;if(j==a.b){g=new Il;o=B(259);$p=12;continue _;}g=h;$p=13;continue _;case 11:$z=AAJ(b,c,i,n);if(C()){break _;}j=$z;if(j)return 1;$p=10;continue _;case 12:$z=ANG(b,k,d,e);if(C()){break _;}p=$z;K_(g,o,p,h);$p=13;case 13:$z=ACE(b,l,d,e);if(C()){break _;}j=$z;if(j!=a.b){o=g;$p=15;continue _;}o=new Il;p=B(259);g=g;$p=14;case 14:$z=ANG(b,l,d,e);if(C()){break _;}h=$z;K_(o,p,g,h);$p=15;case 15:$z=ACE(b,c,d,m);if(C()){break _;}e=$z;if(e==a.b){g=new Il;p=B(259);$p=16;continue _;}g=o;$p
=17;continue _;case 16:$z=ANG(b,c,d,m);if(C()){break _;}h=$z;K_(g,p,h,o);$p=17;case 17:$z=ACE(b,c,d,n);if(C()){break _;}e=$z;if(e==a.b){o=new Il;p=B(259);g=g;$p=18;continue _;}o=g;b=o;$p=19;continue _;case 18:$z=ANG(b,c,d,n);if(C()){break _;}b=$z;K_(o,p,g,b);b=o;$p=19;case 19:Y8(f,b);if(C()){break _;}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AZO(a){return Bbt();}
function AKQ(){O.call(this);}
function BbZ(a,b){var c=new AKQ();AU4(c,a,b);return c;}
function AU4(a,b,c){C$(a,b,c,BhF);}
function AE1(a,b,c,d,e){return null;}
function AT7(a){return 0;}
function A5p(a){return 0;}
function A7D(a){return 5;}
function A9Z(a,b){return 1;}
function AUM(a){return 0;}
function AHB(){O.call(this);}
function BbE(a){var b=new AHB();AZs(b,a);return b;}
function AZs(a,b){D1(a,b,Bhl);a.ba=59;}
function AWE(a,b){if(b==1)b=a.ba-16|0;else if(!b){L();b=Bfa.ci(0);}else b=b!=2&&b!=4?a.ba:a.ba+1|0;return b;}
function AGW(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANy(f);if(C()){break _;}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AKP(){F5.call(this);}
function BcJ(a,b){var c=new AKP();AZ0(c,a,b);return c;}
function AZ0(a,b,c){LB(a,b,c);a.ba=c;Ff(a,1);Bn(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AYP(a,b){L();return b!=Bhc.b?0:1;}
function AJv(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJx(a,b,c,d,e);if(C()){break _;}g=d+1|0;$p=2;case 2:$z=XH(b,c,g,e);if(C()){break _;}h=$z;if(h<9)return;$p=3;case 3:$z=AEQ(b,c,d,e);if(C()){break _;}h=$z;if(h>=7)return;$p=4;case 4:$z=Zi(a,b,c,d,e);if(C()){break _;}i=$z;if(E(f,100.0/i|0))return;g=h+1|0;$p=5;case 5:AKD(b,c,d,e,g);if(C()){break _;}return;default:
Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function Zi(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1.0;g=e-1|0;$p=1;case 1:$z=ACE(b,c,d,g);if(C()){break _;}h=$z;i=e+1|0;$p=2;case 2:$z=ACE(b,c,d,i);if(C()){break _;}j=$z;k=c-1|0;$p=3;case 3:$z=ACE(b,k,d,e);if
(C()){break _;}l=$z;m=c+1|0;$p=4;case 4:$z=ACE(b,m,d,e);if(C()){break _;}n=$z;$p=5;case 5:$z=ACE(b,k,d,g);if(C()){break _;}o=$z;$p=6;case 6:$z=ACE(b,m,d,g);if(C()){break _;}p=$z;$p=7;case 7:$z=ACE(b,m,d,i);if(C()){break _;}q=$z;$p=8;case 8:$z=ACE(b,k,d,i);if(C()){break _;}r=$z;s=l!=a.b&&n!=a.b?0:1;t=h!=a.b&&j!=a.b?0:1;u=o!=a.b&&p!=a.b&&q!=a.b&&r!=a.b?0:1;o=d-1|0;while(k<=m){v=g;if(v<=i){$p=9;continue _;}k=k+1|0;}a:{if(!u){if(!s)break a;if(!t)break a;}f=f/2.0;}return f;case 9:$z=ACE(b,k,o,v);if(C()){break _;}w
=$z;x=0.0;L();if(w==Bhc.b){x=1.0;$p=10;continue _;}if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){continue _;}k=k+1|0;if(k>m)break;v=g;}b:{if(!u){if(!s)break b;if(!t)break b;}f=f/2.0;}return f;case 10:$z=AEQ(b,k,o,v);if(C()){break _;}d=$z;if(d>0)x=3.0;if(!(k==c&&v==e))x=x/4.0;f=f+x;v=v+1|0;while(true){if(v<=i){$p=9;continue _;}k=k+1|0;if(k>m)break;v=g;}c:{if(!u){if(!s)break c;if(!t)break c;}f=f/2.0;}return f;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function A8E(a,b,c){if(c<0)c=7;return a.ba+c|0;}
function A4P(a){return 6;}
function ANI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;h=c;i=d;j=e;while(g<3){if(E(b.q,15)<=f){k=N(b.q)*0.699999988079071+0.15000000596046448;l=N(b.q)*0.699999988079071+0.15000000596046448;m=N(b.q)*0.699999988079071+0.15000000596046448;n=new E_;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DD(r,
BhN);He(n,b,o,p,q,r);n.g_=10;$p=1;continue _;}g=g+1|0;}return;case 1:AOn(b,n);if(C()){break _;}while(true){g=g+1|0;if(g>=3)break;if(E(b.q,15)>f)continue;else{k=N(b.q)*0.699999988079071+0.15000000596046448;l=N(b.q)*0.699999988079071+0.15000000596046448;m=N(b.q)*0.699999988079071+0.15000000596046448;n=new E_;o=h+k;p=i+l;q=j+m;r=new Cd;BB();DD(r,BhN);He(n,b,o,p,q,r);n.g_=10;continue _;}}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function A0$(a,b,c){var d;c=Dz();d=new V;X(d);Cg(c,W(Bf(I(d,B(260)),b)));if(b!=7)b=(-1);else{BB();b=BhO.cW;}return b;}
function A46(a,b){return 1;}
function AQX(){O.call(this);}
function Bb$(a){var b=new AQX();A2W(b,a);return b;}
function A2W(a,b){D1(a,b,Bhy);a.ba=87;Ff(a,1);Bn(a,0.0,0.0,0.0,1.0,0.9375,1.0);Gx(a,255);}
function AA_(a,b,c,d,e){return D4(c+0|0,d+0|0,e+0|0,c+1|0,d+1|0,e+1|0);}
function AVb(a){return 0;}
function A1M(a){return 0;}
function A_v(a,b,c){b=S(b,1);return !b&&c>0?a.ba-1|0:b?2:a.ba;}
function ANl(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(f,5))return;g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;a:while(true){if(g>h){if(!0){$p=1;continue _;}g=7;$p=2;continue _;}l=d;while(l<=i){m=j;if(m<=k)break a;l=l+1|0;}g=g+1|0;}$p=4;continue _;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}h=$z;if(h>0){g=h-1|0;$p=3;continue _;}g
=c-0|0;h=c+0|0;m=e-0|0;j=e+0|0;while(true){if(g>h){if(0)return;L();g=Be3.b;$p=5;continue _;}l=m;if(l<=j)break;g=g+1|0;}$p=6;continue _;case 2:AKD(b,c,d,e,g);if(C()){break _;}return;case 3:AKD(b,c,d,e,g);if(C()){break _;}return;case 4:$z=AB9(b,g,l,m);if(C()){break _;}f=$z;if(f===Bf1)g=1;else{m=m+1|0;b:while(true){if(m<=k){continue _;}l=l+1|0;while(l>i){g=g+1|0;if(g>h)break b;l=d;}m=j;}g=0;}if(!g){$p=1;continue _;}g=7;$p=2;continue _;case 5:APE(b,c,d,e,g);if(C()){break _;}return;case 6:$z=ACE(b,g,i,l);if(C())
{break _;}n=$z;L();if(n==Bhb.b)g=1;else{l=l+1|0;while(true){if(l<=j){continue _;}g=g+1|0;if(g>h)break;l=m;}g=0;}if(g)return;L();g=Be3.b;$p=5;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function AKW(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(E(b.q,4))return;L();g=Be3.b;$p=1;case 1:APE(b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function Yf(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d+1|0;$p=1;case 1:$z=AB9(b,c,f,e);if(C()){break _;}g=$z;if(!g.dw())return;L();f=Be3.b;$p=2;case 2:APE(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AXa(a,b,c){L();return Be3.dX(0,c);}
function AF7(){Eg.call(this);this.wC=0;}
function A4W(a,b){var c=new AF7();AT1(c,a,b);return c;}
function AT1(a,b,c){D1(a,b,Bhk);a.wC=c;a.ba=45;}
function ACC(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AOL(a,b,c,d,e);if(C()){break _;}f=e-1|0;$p=2;case 2:$z=ACE(b,c,d,f);if(C()){break _;}g=$z;f=e+1|0;$p=3;case 3:$z=ACE(b,c,d,f);if(C()){break _;}f=$z;h=c-1|0;$p=4;case 4:$z=ACE(b,h,d,e);if(C()){break _;}h=$z;i=c+1|0;$p=5;case 5:$z=ACE(b,i,d,e);if(C()){break _;}i=$z;j=3;L();if(BgL.data[g]&&!BgL.data[f])j
=3;if(BgL.data[f]&&!BgL.data[g])j=2;if(BgL.data[h]&&!BgL.data[i])j=5;if(BgL.data[i]&&!BgL.data[h])j=4;$p=6;case 6:AKD(b,c,d,e,j);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AKm(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(f==1){L();return Be6.ba;}if(!f){L();return Be6.ba;}$p=1;case 1:$z=b.eJ(c,d,e);if(C()){break _;}g=$z;return f!=g?a.ba:!a.wC?a.ba-1|0:a.ba+16|0;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AEt(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.wC)return;$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;h=c+0.5;i=d+0.0+N(f)*6.0/16.0;j=e+0.5;k=N(f)*0.6000000238418579-0.30000001192092896;if(g==4){l=h-0.5199999809265137;m=i;n=j+k;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),
l,m,n,0.0,0.0,0.0);}else if(g==5){l=h+0.5199999809265137;m=i;n=j+k;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==2){l=h+k;m=i;n=j-0.5199999809265137;BV(b,B(256),l,m,n,0.0,0.0,0.0);BV(b,B(257),l,m,n,0.0,0.0,0.0);}else if(g==3){o=h+k;p=i;q=j+0.5199999809265137;BV(b,B(256),o,p,q,0.0,0.0,0.0);BV(b,B(257),o,p,q,0.0,0.0,0.0);}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AU8(a,b){if(b==1){L();b=Be6.b;}else if(!b){L();b=Be6.b;}else b=b!=3?a.ba:a.ba-1|0;return b;}
function AGZ(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANG(b,c,d,e);if(C()){break _;}b=$z;g=b;$p=2;case 2:AO_(f,g);if(C()){break _;}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function A8e(a){return BaP();}
function VE(){var a=this;Eg.call(a);a.Dd=null;a.Dw=0;}
function BhP(a,b,c){var d=new VE();AHy(d,a,b,c);return d;}
function AHy(a,b,c,d){D1(a,b,Bhl);a.ba=4;a.Dd=c;Bn(a,0.25,0.0,0.25,0.75,1.625,0.75);a.Dw=d;}
function AYU(a){return (-1);}
function A6j(a){return 0;}
function A6d(a){return 0;}
function A1X(a){var b,c,$$je;a:{try{b=Zw(a.Dd);}catch($$e){$$je=Q($$e);if($$je instanceof BD){b=$$je;break a;}else{throw $$e;}}return b;}c=new B6;W2(c,b);M(c);}
function AGS(a,b,c,d,e){return 1;}
function A8N(a,b,c){return a.Dw;}
function Z0(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=d-1|0;$p=1;case 1:$z=AAJ(b,c,f,e);if(C()){break _;}f=$z;if(f)return;$p=2;case 2:$z=AEQ(b,c,d,e);if(C()){break _;}f=$z;$p=3;case 3:Yo(a,b,c,d,e,f);if(C()){break _;}f=0;$p=4;case 4:APE(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function D$(){var a=this;D.call(a);a.ch=null;a.dK=0;a.dI=0;a.dR=0;}
var BhQ=null;var BhR=null;function BhS(){var a=new D$();AND(a);return a;}
function AND(a){return;}
function J8(b,c){var d;if(!D0(BhR,c)){BQ(BhQ,c,b);BQ(BhR,b,c);return;}b=new Cc;d=new V;X(d);Bo(b,W(I(I(d,B(261)),c)));M(b);}
function AFQ(a){return;}
function AMo(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dK;d=a.dI;e=a.dR;$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function ACn(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dK;d=a.dI;e=a.dR;$p=1;case 1:AGy(b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AK$(a,b,c,d){var e,f,g;e=a.dK+0.5-b;f=a.dI+0.5-c;g=a.dR+0.5-d;return e*e+f*f+g*g;}
function AFx(){BhQ=C8();BhR=C8();J8(F(W5),B(262));J8(F(Tq),B(263));J8(F(Jp),B(264));J8(F(NC),B(265));}
function Jp(){var a=this;D$.call(a);a.gt=null;a.rG=0;}
function BhT(){var a=new Jp();AZ$(a);return a;}
function AZ$(a){var b,c;b=J(B4,4);c=b.data;c[0]=B(3);c[1]=B(3);c[2]=B(3);c[3]=B(3);a.gt=b;a.rG=(-1);}
function Bc(){var a=this;D.call(a);a.cW=0;a.e1=0;a.fh=0;a.te=0;}
var BhU=null;var Bhp=null;var BhV=null;var BhW=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;var Bgo=null;var BhL=null;var BhM=null;var Bh1=null;var Bh2=null;var Bh3=null;var Bh4=null;var Bh5=null;var Bh6=null;var Bh7=null;var Bh8=null;var Bh9=null;var Bh$=null;var Bh_=null;var Bia=null;var Bib=null;var Bic=null;var Bid=null;var Bie=null;var Bif=null;var Big=null;var Bih=null;var Bii=null;var Bij=null;var Bik=null;var Bgq=null;var Bgn=null;var Bgp=null;var Bil=null;var Bim=null;var Bin=null;var Bio
=null;var Bip=null;var BhN=null;var BhO=null;var Biq=null;var Bir=null;var Bis=null;var Bit=null;var Biu=null;var Biv=null;var Biw=null;var Bix=null;var Biy=null;var Biz=null;var BiA=null;var BiB=null;var BiC=null;var BiD=null;var BiE=null;var BiF=null;var BiG=null;var BiH=null;var BiI=null;var BiJ=null;var BiK=null;var BhK=null;var Bgr=null;var BiL=null;var BiM=null;var BiN=null;var Bho=null;var BiO=null;var BiP=null;var BiQ=null;var BiR=null;var BiS=null;var BiT=null;function BB(){BB=Bs(Bc);A7T();}
function EV(a){var b=new Bc();Dt(b,a);return b;}
function Dt(a,b){var c,d,e;BB();a.e1=64;a.fh=32;c=256+b|0;a.cW=c;if(Bhp.data[c]!==null){d=Dz();e=new V;X(e);Cg(d,W(Bf(I(e,B(266)),b)));}Bhp.data[c]=a;}
function Bp(a,b){a.te=b;return a;}
function A5K(a,b){return a.te;}
function AGx(a,b,c,d,e,f,g,h){return 0;}
function A$U(a,b,c){return 1.0;}
function ASt(a,b,c,d){return b;}
function A2J(a){return a.e1;}
function A7Z(a){return a.fh;}
function AWh(a,b,c){return;}
function A5h(a,b,c,d,e,f){return;}
function A_C(a,b){return 1;}
function AV$(a,b){return 0;}
function A3T(a,b,c){return;}
function A7T(){var b;BhU=Bby();Bhp=J(Bc,1024);BhV=Bp(LO(0,2),82);BhW=Bp(Oj(1,2),98);BhX=Bp(NM(2,2),114);BhY=Bp(Bbp(3),5);BhZ=Bp(OG(4,4),10);Bh0=Bp(Bau(5),21);Bgo=Bp(EV(6),37);BhL=Bp(EV(7),7);BhM=Bp(EV(8),55);Bh1=Bp(EV(9),23);Bh2=Bp(EV(10),39);Bh3=Bp(NB(11,2),66);Bh4=Bp(NB(12,0),64);Bh5=Bp(LO(13,0),80);Bh6=Bp(Oj(14,0),96);Bh7=Bp(NM(15,0),112);Bh8=Bp(NB(16,1),65);Bh9=Bp(LO(17,1),81);Bh$=Bp(Oj(18,1),97);Bh_=Bp(NM(19,1),113);Bia=Bp(NB(20,3),67);Bib=Bp(LO(21,3),83);Bic=Bp(Oj(22,3),99);Bid=Bp(NM(23,3),115);Bie=Bp(EV(24),
53);Bif=Bp(EV(25),71);Big=Bp(BcQ(26,10),72);Bih=Bp(NB(27,0),68);Bii=Bp(LO(28,0),84);Bij=Bp(Oj(29,0),100);Bik=Bp(NM(30,0),116);Bgq=Bp(EV(31),8);Bgn=Bp(EV(32),24);Bgp=Bp(EV(33),40);Bil=Bp(Ny(34,0),128);Bim=Bp(Ny(35,1),129);Bin=Bp(Ny(36,2),130);Bio=Bp(Ny(37,3),131);Bip=Bp(Ny(38,4),132);b=new V6;L();AHN(b,39,Bhb.b);BhN=Bp(b,9);BhO=Bp(EV(40),25);Biq=Bp(OG(41,5),41);Bir=Bp(Dd(42,0,0,0),0);Bis=Bp(Dd(43,0,0,1),16);Bit=Bp(Dd(44,0,0,2),32);Biu=Bp(Dd(45,0,0,3),48);Biv=Bp(Dd(46,1,1,0),1);Biw=Bp(Dd(47,1,1,1),17);Bix=Bp(Dd(48,
1,1,2),33);Biy=Bp(Dd(49,1,1,3),49);Biz=Bp(Dd(50,2,2,0),2);BiA=Bp(Dd(51,2,2,1),18);BiB=Bp(Dd(52,2,2,2),34);BiC=Bp(Dd(53,2,2,3),50);BiD=Bp(Dd(54,3,3,0),3);BiE=Bp(Dd(55,3,3,1),19);BiF=Bp(Dd(56,3,3,2),35);BiG=Bp(Dd(57,3,3,3),51);BiH=Bp(Dd(58,1,4,0),4);BiI=Bp(Dd(59,1,4,1),20);BiJ=Bp(Dd(60,1,4,2),36);BiK=Bp(Dd(61,1,4,3),52);BhK=Bp(EV(62),6);Bgr=Bp(OG(63,3),87);BiL=Bp(OG(64,8),88);BiM=Bp(Bas(65),26);BiN=Bp(OG(66,42),11);Bho=Bp(Bcu(67),42);BiO=Bp(A_3(68),43);BiP=Bp(AP6(69,0),74);BiQ=Bp(AP6(70,Bf9.b),75);BiR=Bp(AP6(71,
Bf$.b),76);BiS=Bp(BbY(72),135);BiT=Bp(Bc8(73),104);}
function AIE(){O.call(this);}
function Bap(a){var b=new AIE();A2o(b,a);return b;}
function A2o(a,b){D1(a,b,Bhl);a.ba=97;Bn(a,0.0,0.0,0.0,1.0,1.0,1.0);}
function A$A(a,b,c){var d,e;if(b&&b!=1){d=Pv(a,c);if((d&&d!=2?0:1)^(b>3?0:1))return a.ba;b=((d/2|0)+(b&1^d)|0)+((c&4)/4|0)|0;e=a.ba-((c&8)*2|0)|0;if(b&1)e= -e;return e;}return a.ba;}
function A03(a){return 0;}
function AXA(a){return 0;}
function ATX(a){return 7;}
function AGv(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHK(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=La(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function ZH(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHK(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Nr(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AHK(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eJ(c,d,e);if(C()){break _;}c=$z;AO$(a,Pv(a,c));return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AO$(a,b){Bn(a,0.0,0.0,0.0,1.0,2.0,1.0);if(!b)Bn(a,0.0,0.0,0.0,1.0,1.0,0.1875);if(b==1)Bn(a,0.8125,0.0,0.0,1.0,1.0,1.0);if(b==2)Bn(a,0.0,0.0,0.8125,1.0,1.0,1.0);if(b==3)Bn(a,0.0,0.0,0.0,0.1875,1.0,1.0);}
function AJ4(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AD0(a,b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AD0(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;if(!(g&8)){h=d+1|0;$p=2;continue _;}d=d-1|0;$p=3;continue _;case 2:$z=ACE(b,c,h,e);if(C()){break _;}i=$z;if(i!=a.b){h=g^4;$p=4;continue _;}i=(g^4)+8|0;$p=5;continue _;case 3:$z=ACE(b,c,d,e);if(C()){break _;}h=$z;if(h!=a.b)return 1;$p=6;continue _;case 4:AKD(b,c,d,e,h);if
(C()){break _;}Js(b,c,d-1|0,e,c,d,e);if(BP()>=0.5)Ez(b,c+0.5,d+0.5,e+0.5,B(267),1.0,N(b.q)*0.10000000149011612+0.8999999761581421);else Ez(b,c+0.5,d+0.5,e+0.5,B(268),1.0,N(b.q)*0.10000000149011612+0.8999999761581421);return 1;case 5:AKD(b,c,h,e,i);if(C()){break _;}h=g^4;$p=4;continue _;case 6:AD0(a,b,c,d,e,f);if(C()){break _;}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ACG(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;if(g&8){f=d-1|0;$p=3;continue _;}h=0;f=d+1|0;$p=2;case 2:$z=ACE(b,c,f,e);if(C()){break _;}i=$z;if(i!=a.b){i=0;$p=4;continue _;}i=d-1|0;$p=6;continue _;case 3:$z=ACE(b,c,f,e);if(C()){break _;}f=$z;if(f==a.b)return;f=0;$p=5;continue _;case 4:APE(b,c,d,e,i);if(C()){break _;}h
=1;i=d-1|0;$p=6;continue _;case 5:APE(b,c,d,e,f);if(C()){break _;}return;case 6:$z=AAJ(b,c,i,e);if(C()){break _;}i=$z;if(!i){i=0;$p=7;continue _;}if(!h)return;$p=10;continue _;case 7:APE(b,c,d,e,i);if(C()){break _;}h=1;$p=8;case 8:$z=ACE(b,c,f,e);if(C()){break _;}i=$z;if(i==a.b){i=0;$p=9;continue _;}if(!h)return;$p=10;continue _;case 9:APE(b,c,f,e,i);if(C()){break _;}if(!h)return;$p=10;case 10:Yo(a,b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function A8M(a,b,c){if(b&8)b=0;else{BB();b=BiO.cW;}return b;}
function XN(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHK(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Kj(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function Pv(a,b){return b&4?b&3:(b-1|0)&3;}
function AJ9(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=127)return 0;d=d-1|0;$p=1;case 1:$z=AAJ(b,c,d,e);if(C()){break _;}c=$z;return !c?0:1;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AC9(){O.call(this);}
function Bcy(a,b){var c=new AC9();AUY(c,a,b);return c;}
function AUY(a,b,c){C$(a,b,c,BhF);}
function ADm(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bn(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bn(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bn(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bn(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=Nr(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AEb(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}f=$z;if(f==2)Bn(a,0.0,0.0,0.875,1.0,1.0,1.0);if(f==3)Bn(a,0.0,0.0,0.0,1.0,1.0,0.125);if(f==4)Bn(a,0.875,0.0,0.0,1.0,1.0,1.0);if(f==5)Bn(a,0.0,0.0,0.0,0.125,1.0,1.0);$p=2;case 2:$z=La(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AW6(a){return 0;}
function A56(a){return 0;}
function A9J(a){return 8;}
function AN1(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=c-1|0;$p=1;case 1:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=c+1|0;$p=2;case 2:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(f)return 1;f=e-1|0;$p=3;case 3:$z=AAJ(b,c,d,f);if(C()){break _;}f=$z;if(f)return 1;e=e+1|0;$p=4;case 4:$z=AAJ(b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function Yv(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;if(g&&f!=2){if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;continue _;}h=e+1|0;$p=2;case 2:$z=AAJ(b,c,d,h);if(C()){break _;}h=$z;if(h)g=2;if(g&&f!=3){if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h
=c+1|0;$p=4;continue _;}h=e-1|0;$p=3;case 3:$z=AAJ(b,c,d,h);if(C()){break _;}h=$z;if(h)g=3;if(g&&f!=4){if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;continue _;}h=c+1|0;$p=4;case 4:$z=AAJ(b,h,d,e);if(C()){break _;}h=$z;if(h)g=4;if(g&&f!=5){$p=6;continue _;}f=c-1|0;$p=5;case 5:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(f)g=5;$p=6;case 6:AKD(b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AKT(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;h=0;if(g==2){f=e+1|0;$p=2;continue _;}if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 2:$z=AAJ(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==3){f=e-1|0;$p=3;continue _;}if(g==4){f=c+1|0;$p=4;continue _;}if
(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 3:$z=AAJ(b,c,d,f);if(C()){break _;}f=$z;if(f)h=1;if(g==4){f=c+1|0;$p=4;continue _;}if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 4:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(g==5){f=c-1|0;$p=5;continue _;}if(h)return;$p=6;continue _;case 5:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(f)h=1;if(h)return;$p=6;case 6:Yo(a,b,c,d,e,g);if(C()){break _;}f=0;$p=7;case 7:APE(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,
b,c,d,e,f,g,h,$p);}
function A5E(a,b){return 1;}
function AN3(){O.call(this);}
function Bbb(a,b){var c=new AN3();A_f(c,a,b);return c;}
function A_f(a,b,c){C$(a,b,c,BhF);Bn(a,0.0,0.0,0.0,1.0,0.125,1.0);}
function ACK(a,b,c,d,e){return null;}
function AWG(a){return 0;}
function ALK(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AMu(a,b,c,d,e);if(C()){break _;}$p=2;case 2:$z=Kj(a,b,c,d,e,f,g);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AMu(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=b.eJ(c,d,e);if(C()){break _;}f=$z;if(f>=2&&f<=5)Bn(a,0.0,0.0,0.0,1.0,0.625,1.0);else Bn(a,0.0,0.0,0.0,1.0,0.125,1.0);return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function A2M(a,b,c){return c<6?a.ba:a.ba-16|0;}
function A3M(a){return 0;}
function A0I(a){return 9;}
function A2T(a,b){return 1;}
function AN2(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-1|0;$p=1;case 1:$z=AAJ(b,c,d,e);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function ANN(a,b,c,d,e){var f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=15;$p=1;case 1:AKD(b,c,d,e,f);if(C()){break _;}g=new Ia;$p=2;case 2:YY(g,a,b,c,d,e);if(C()){break _;}$p=3;case 3:YX(g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AJW(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEQ(b,c,d,e);if(C()){break _;}g=$z;h=0;f=d-1|0;$p=2;case 2:$z=AAJ(b,c,f,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==2){f=c+1|0;$p=3;continue _;}if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 3:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if
(!f)h=1;if(g==3){f=c-1|0;$p=4;continue _;}if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 4:$z=AAJ(b,f,d,e);if(C()){break _;}f=$z;if(!f)h=1;if(g==4){f=e-1|0;$p=5;continue _;}if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 5:$z=AAJ(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(g==5){f=e+1|0;$p=6;continue _;}if(!h)return;$p=7;continue _;case 6:$z=AAJ(b,c,d,f);if(C()){break _;}f=$z;if(!f)h=1;if(!h)return;$p=7;case 7:$z=AEQ(b,c,d,e);if(C())
{break _;}f=$z;$p=8;case 8:Yo(a,b,c,d,e,f);if(C()){break _;}f=0;$p=9;case 9:APE(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ASL(){Bc.call(this);this.nV=0;}
function Bag(a){var b=new ASL();A2Y(b,a);return b;}
function A2Y(a,b){Dt(a,b);b=b+256|0;a.nV=b;L();a.te=Be0.data[b].ci(2);}
function AQv(a,b,c,d,e,f,g,h){var i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;if(!b.p)return 0;i=a.nV;j=0;$p=1;case 1:$z=AId(d,i,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;L();k=Be0.data[a.nV];j=a.nV;$p=2;case 2:$z=APE(d,e,f,g,j);if(C()){break _;}j=$z;if(!j)return 1;c=Be0.data[a.nV];$p
=3;case 3:c.ve(d,e,f,g,h);if(C()){break _;}Ez(d,e+0.5,f+0.5,g+0.5,Ko(k.gK),(k.gK.oR+1.0)/2.0,k.gK.pP*0.800000011920929);b.p=b.p-1|0;return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AHM(){MY.call(this);}
function A1R(){var a=new AHM();A14(a);return a;}
function A14(a){var b,c,d,e;b=J(B4,0);c=b.data;R9(B(24));d=c.length;e=0;while(e<d){R9(c[e]);e=e+1|0;}a.ww=B(24);a.H_=b.oZ();}
function AFB(a){var b;b=new Rn;b.lk=B(269);b.mY=BiU;b.rE=BiU;b.H4=a;b.BY=0.3333333432674408;b.Gc=0.5;return b;}
function AG9(a){var b,c,d,e,f;b=new PY;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.vx=BiU;b.uR=BiU;e=d.length;if(e&&e>=b.BR){b.HF=a;b.uE=c.oZ();b.GH=2.0;b.BR=4.0;return b;}f=new Cc;Bo(f,B(270));M(f);}
function M_(){var a=this;Fl.call(a);a.d$=0;a.cp=null;a.kN=null;}
function AML(b,c,d){return A5L(0,b.data.length,b,c,c+d|0,0,0);}
function AAy(b){return AML(b,0,b.data.length);}
function AKo(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BT;i=new V;X(i);Bo(h,W(Bf(I(Bf(I(i,B(271)),g),B(248)),f)));M(h);}if(Ct(a)<d){i=new Gu;P(i);M(i);}if(d<0){i=new BT;h=new V;X(h);Bo(i,W(I(Bf(I(h,B(249)),d),B(250))));M(i);}g=a.bk+a.d$|0;j=0;while(j<d){k=c+1|0;b=a.cp.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;h=new BT;i=new V;X(i);Bo(h,W(I(Bf(I(Bf(I(i,B(251)),c),B(244)),b.length),B(27))));M(h);}
function W6(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.mS){e=new FW;P(e);M(e);}if(Ct(a)<d){e=new Hc;P(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BT;i=new V;X(i);Bo(e,W(Bf(I(Bf(I(i,B(272)),h),B(248)),g)));M(e);}if(d<0){e=new BT;i=new V;X(i);Bo(e,W(I(Bf(I(i,B(249)),d),B(250))));M(e);}h=a.bk+a.d$|0;j=0;while(j<d){b=a.cp.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BT;e=new V;X(e);Bo(i,W(I(Bf(I(Bf(I(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function UX(a,b){return W6(a,b,0,b.data.length);}
function A9F(a,b){a.kN=b;return a;}
function AT6(a){EC(a);return a;}
function A5z(a,b){Iw(a,b);return a;}
function A0Z(a,b){Ep(a,b);return a;}
function A_g(a){EC(a);return a;}
function AZB(a,b){Iw(a,b);return a;}
function A3I(a,b){Ep(a,b);return a;}
function Nn(){Ma.call(this);}
function JA(a){var b,c;if(a.bk<a.cy){b=a.bk;a.bk=b+1|0;return RN(a,b);}c=new Gu;P(c);M(c);}
function CJ(a,b){var c,d;if(AKy(a)){c=new FW;P(c);M(c);}if(a.bk<a.cy){d=a.bk;a.bk=d+1|0;ADY(a,d,b);return a;}c=new Hc;P(c);M(c);}
function AKy(a){return a.xz;}
function WW(){var a=this;Nn.call(a);a.xz=0;a.ys=0;a.xs=null;}
function RN(a,b){return a.xs.data[b+a.ys|0];}
function ADY(a,b,c){a.xs.data[b+a.ys|0]=c;}
function A8J(a){return a.xz;}
function ARt(){var a=this;M_.call(a);a.Gs=0;a.mS=0;}
function A5L(a,b,c,d,e,f,g){var h=new ARt();ATr(h,a,b,c,d,e,f,g);return h;}
function ATr(a,b,c,d,e,f,g,h){KV(a,c);a.kN=Bgy;a.d$=b;a.cp=d;a.bk=e;a.cy=f;a.Gs=g;a.mS=h;}
function ALV(a){var b,c,d,e;if(a.bk>=a.cy){b=new Gu;P(b);M(b);}c=a.cp.data;d=a.d$;e=a.bk;a.bk=e+1|0;return c[d+e|0];}
function A1A(a){return a.mS;}
function KW(a,b){var c,d,e,f,g,h;if(b>=0&&(b+3|0)<a.cy){c=a.cp.data[a.d$+b|0]&255;d=a.cp.data[(a.d$+b|0)+1|0]&255;e=a.cp.data[(a.d$+b|0)+2|0]&255;f=a.cp.data[(a.d$+b|0)+3|0]&255;if(a.kN!==Bgy)return f<<24|e<<16|d<<8|c;return c<<24|d<<16|e<<8|f;}g=new BT;h=new V;X(h);Bo(g,W(I(Bf(I(Bf(I(h,B(273)),b),B(244)),a.cy-3|0),B(27))));M(g);}
function ABb(a,b,c){var d,e;if(a.mS){d=new FW;P(d);M(d);}if(b>=0&&(b+3|0)<a.cy){if(a.kN!==Bgy){a.cp.data[a.d$+b|0]=c<<24>>24;a.cp.data[(a.d$+b|0)+1|0]=c>>8<<24>>24;a.cp.data[(a.d$+b|0)+2|0]=c>>16<<24>>24;a.cp.data[(a.d$+b|0)+3|0]=c>>24<<24>>24;}else{a.cp.data[a.d$+b|0]=c>>24<<24>>24;a.cp.data[(a.d$+b|0)+1|0]=c>>16<<24>>24;a.cp.data[(a.d$+b|0)+2|0]=c>>8<<24>>24;a.cp.data[(a.d$+b|0)+3|0]=c<<24>>24;}return a;}e=new BT;d=new V;X(d);Bo(e,W(I(Bf(I(Bf(I(d,B(273)),b),B(244)),a.cy-3|0),B(27))));M(e);}
function AHO(a){var b,c;b=Ct(a)/4|0;if(a.kN!==Bgy){c=new Pl;OS(c,a.d$+a.bk|0,b,a,0,b,a.mS);return c;}c=new VW;OS(c,a.d$+a.bk|0,b,a,0,b,a.mS);return c;}
function VD(){}
function LY(){Fl.call(this);}
function AHs(b){var c,d;if(b>=0)return AZR(0,b,$rt_createCharArray(b),0,b,0);c=new Cc;d=new V;X(d);Bo(c,W(Bf(I(d,B(274)),b)));M(c);}
function ANa(b,c,d){return AZR(0,b.data.length,b,c,c+d|0,0);}
function O$(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BT;i=new V;X(i);Bo(h,W(Bf(I(Bf(I(i,B(275)),g),B(248)),f)));M(h);}if(Ct(a)<d){h=new Gu;P(h);M(h);}if(d<0){h=new BT;i=new V;X(i);Bo(h,W(I(Bf(I(i,B(249)),d),B(250))));M(h);}g=a.bk;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=AOV(a,g);j=j+1|0;c=k;g=f;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BT;h=new V;X(h);Bo(i,W(I(Bf(I(Bf(I(h,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AEW(a,b){return O$(a,b,0,b.data.length);}
function ASA(a,b,c,d){var e,f,g,h,i,j,k;if(Xw(a)){e=new FW;P(e);M(e);}if(Ct(a)<d){e=new Hc;P(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BT;i=new V;X(i);Bo(e,W(Bf(I(Bf(I(i,B(276)),h),B(248)),g)));M(e);}if(d<0){e=new BT;i=new V;X(i);Bo(e,W(I(Bf(I(i,B(249)),d),B(250))));M(e);}h=a.bk;j=0;while(j<d){k=h+1|0;g=c+1|0;VG(a,h,f[c]);j=j+1|0;h=k;c=g;}a.bk=a.bk+d|0;return a;}}b=b.data;i=new BT;e=new V;X(e);Bo(i,W(I(Bf(I(Bf(I(e,B(251)),c),B(244)),b.length),B(27))));M(i);}
function AJl(a,b,c,d){var e,f,g,h,i,j;if(Xw(a)){b=new FW;P(b);M(b);}e=d-c|0;if(Ct(a)<e){b=new Hc;P(b);M(b);}if(c>=0&&c<Bi(b)){if(d>Bi(b)){f=new BT;g=new V;X(g);Bo(f,W(Bf(I(Bf(I(g,B(276)),d),B(277)),Bi(b))));M(f);}if(c>d){b=new BT;f=new V;X(f);Bo(b,W(Bf(I(Bf(I(f,B(278)),c),B(279)),d)));M(b);}h=a.bk;while(c<d){i=h+1|0;j=c+1|0;VG(a,h,Ba(b,c));h=i;c=j;}a.bk=a.bk+e|0;return a;}g=new BT;f=new V;X(f);Bo(g,W(I(Bf(I(Bf(I(f,B(278)),c),B(244)),Bi(b)),B(27))));M(g);}
function Nq(a,b){return AJl(a,b,0,Bi(b));}
function AJK(a){return 1;}
function APr(a){return a.mk;}
function AYH(a){HA(a);return a;}
function AYa(a,b){Ep(a,b);return a;}
function Qa(){BL.call(this);}
function BiV(){var a=new Qa();A9c(a);return a;}
function A9c(a){P(a);}
function Oq(){B8.call(this);}
function BiW(){var a=new Oq();AZ5(a);return a;}
function AZ5(a){return;}
function A44(a){return 0;}
function A5J(a){return 0;}
function ATw(a){return 0;}
function L4(){B8.call(this);}
function BiX(){var a=new L4();ATv(a);return a;}
function ATv(a){return;}
function A_Q(a){return 1;}
function AZf(a){return 0;}
function Oc(){B8.call(this);}
function BiY(){var a=new Oc();A7G(a);return a;}
function A7G(a){return;}
function A67(a){return 0;}
function A$d(a){return 0;}
function AVd(a){return 0;}
function Gc(){var a=this;Bc.call(a);a.uX=null;a.yI=0.0;a.AN=0;a.JE=0;}
function BiZ(a,b,c,d){var e=new Gc();Mm(e,a,b,c,d);return e;}
function Mm(a,b,c,d,e){Dt(a,b);a.yI=4.0;a.JE=d;a.uX=e;a.e1=1;a.fh=32<<d;if(d==3)a.fh=a.fh*2|0;a.yI=(d+1|0)*2|0;a.AN=c+d|0;}
function A85(a,b,c){var d;d=0;while(d<a.uX.data.length){if(a.uX.data[d]===c)return a.yI;d=d+1|0;}return 1.0;}
function A7e(a,b,c){FN(b,2);}
function AWz(a,b,c,d,e,f){FN(b,1);}
function AXi(a,b){return a.AN;}
function O4(){Gc.call(this);}
var Bi0=null;function Bce(){Bce=Bs(O4);A9l();}
function LO(a,b){var c=new O4();AFT(c,a,b);return c;}
function AFT(a,b,c){Bce();Mm(a,b,1,c,Bi0);}
function A9l(){var b,c;b=J(O,4);c=b.data;L();c[0]=Be2;c[1]=Be3;c[2]=Bfl;c[3]=Bfm;Bi0=b;}
function VH(){Gc.call(this);this.nI=0;}
var Bi1=null;function Bci(){Bci=Bs(VH);A1Y();}
function Oj(a,b){var c=new VH();ANX(c,a,b);return c;}
function ANX(a,b,c){Bci();Mm(a,b,2,c,Bi1);a.nI=c;}
function A5w(a,b){L();return b===Bfw?(a.nI!=3?0:1):b!==Bg_&&b!==Bg$?(b!==Bft&&b!==Bfr?(b!==Bfs&&b!==Bfq?(b.b_===Bhk?1:b.b_!==Bhz?0:1):a.nI<1?0:1):a.nI<2?0:1):a.nI<2?0:1;}
function A1Y(){var b,c;b=J(O,12);c=b.data;L();c[0]=Be$;c[1]=Be4;c[2]=Be5;c[3]=Be6;c[4]=Bff;c[5]=Bfq;c[6]=Bfs;c[7]=Bfp;c[8]=Bft;c[9]=Bfr;c[10]=Bg$;c[11]=Bg_;Bi1=b;}
function WA(){Gc.call(this);}
var Bi2=null;function BbV(){BbV=Bs(WA);AUh();}
function NM(a,b){var c=new WA();ANM(c,a,b);return c;}
function ANM(a,b,c){BbV();Mm(a,b,3,c,Bi2);}
function AUh(){var b,c;b=J(O,4);c=b.data;L();c[0]=Bfa;c[1]=Bfu;c[2]=Bfb;c[3]=Bg8;Bi2=b;}
function AE6(){Bc.call(this);}
function Bbp(a){var b=new AE6();AYB(b,a);return b;}
function AYB(a,b){Dt(a,b);a.e1=1;a.fh=64;}
function AJR(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)f=f+(-1)|0;if(h==1)f=f+1|0;if(h==2)g=g+(-1)|0;if(h==3)g=g+1|0;if(h==4)e=e+(-1)|0;if(h==5)e=e+1|0;$p=1;case 1:$z=ACE(d,e,f,g);if(C()){break _;}i=$z;if(i){FN(b,1);return 1;}j=e+0.5;k=f+0.5;l=g+0.5;BB();Ez(d,j,k,l,B(280),1.0,N(BhU)*0.4000000059604645+0.800000011920929);L();h=BgA.b;$p
=2;case 2:APE(d,e,f,g,h);if(C()){break _;}FN(b,1);return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function LS(){Bc.call(this);this.z2=0;}
function OG(a,b){var c=new LS();Z4(c,a,b);return c;}
function Z4(a,b,c){Dt(a,b);a.z2=c;a.e1=1;}
function Qe(a,b,c,d){b.p=b.p-1|0;U0(d,a.z2);return b;}
function AO1(){Bc.call(this);}
function Bau(a){var b=new AO1();A2A(b,a);return b;}
function A2A(a,b){Dt(a,b);a.e1=1;}
function AGG(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.K;BB();if(!AGU(e,Bgo.cW))return b;Di(c,d,B(225),1.0,1.0/(N(BhU)*0.4000000059604645+0.800000011920929));e=ATj(c,d);$p=1;case 1:AOn(c,e);if(C()){break _;}return b;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function ALi(){Bc.call(this);this.z7=0;}
function NB(a,b){var c=new ALi();A$Y(c,a,b);return c;}
function A$Y(a,b,c){Dt(a,b);a.e1=1;a.fh=32<<c;a.z7=4+(c*2|0)|0;}
function A0H(a,b,c){return 1.5;}
function A73(a,b,c){FN(b,1);}
function AYb(a,b,c,d,e,f){FN(b,2);}
function A2L(a,b){return a.z7;}
function AOi(){LS.call(this);}
function BcQ(a,b){var c=new AOi();A3a(c,a,b);return c;}
function A3a(a,b,c){Z4(a,b,c);}
function APD(a,b,c,d){Qe(a,b,c,d);b=new Cd;BB();DD(b,Bif);return b;}
function ANH(){Bc.call(this);}
function Ny(a,b){var c=new ANH();ATW(c,a,b);return c;}
function ATW(a,b,c){Dt(a,b);a.e1=1;a.fh=32<<c;}
function AQ1(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACE(d,e,f,g);if(C()){break _;}i=$z;h=f+1|0;$p=2;case 2:a:{$z=AB9(d,e,h,g);if(C()){break _;}j=$z;if(!j.dw()){L();if(i==Be2.b)break a;}L();if(i!=Be3.b)return 0;}L();k=Bhc;l=e;m
=l+0.5;n=f;o=n+0.5;p=g;Ez(d,m,o,p+0.5,Ko(k.gK),(k.gK.oR+1.0)/2.0,k.gK.pP*0.800000011920929);h=k.b;$p=3;case 3:APE(d,e,f,g,h);if(C()){break _;}FN(b,1);if(!E(d.q,8)&&i==Be2.b){q=1;r=0;m=n+1.2000000476837158;if(r<q){s=N(d.q)*0.699999988079071+0.15000000596046448;n=N(d.q)*0.699999988079071+0.15000000596046448;t=new E_;o=l+s;u=p+n;c=new Cd;BB();DD(c,BhN);He(t,d,o,m,u,c);t.g_=10;$p=4;continue _;}}return 1;case 4:AOn(d,t);if(C()){break _;}r=r+1|0;if(r>=q)return 1;s=N(d.q)*0.699999988079071+0.15000000596046448;n=N(d.q)
*0.699999988079071+0.15000000596046448;t=new E_;o=l+s;u=p+n;c=new Cd;BB();DD(c,BhN);He(t,d,o,m,u,c);t.g_=10;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function V6(){Bc.call(this);this.zP=0;}
function Bi3(a,b){var c=new V6();AHN(c,a,b);return c;}
function AHN(a,b,c){Dt(a,b);a.zP=c;}
function AFr(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;$p=1;case 1:$z=ACE(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bhc.b)return 0;f=f+1|0;h=a.zP;$p=2;case 2:APE(d,e,f,g,h);if(C()){break _;}b.p=b.p-1|0;return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function F6(){var a=this;Bc.call(a);a.Ic=0;a.z1=0;a.zf=0;a.BH=0;}
var Bi4=null;var Bi5=null;function Dd(a,b,c,d){var e=new F6();ABx(e,a,b,c,d);return e;}
function ABx(a,b,c,d,e){Dt(a,b);a.Ic=c;a.z1=e;a.BH=d;a.zf=Bi4.data[e];a.fh=(Bi5.data[e]*3|0)<<c;a.e1=1;}
function ART(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;Bi4=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;Bi5=b;}
function X3(){Bc.call(this);}
function Bas(a){var b=new X3();AZi(b,a);return b;}
function AZi(a,b){Dt(a,b);a.fh=64;}
function ACl(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!h)return 0;if(h==1)return 0;i=0;if(h==4)i=1;if(h==3)i=2;if(h==5)i=3;j=new IM;FD(j,d);j.rz=0;j.dJ=0;j.c4=0.0;D2(j,0.5,0.5);j.ns=e;j.EF=f;j.nz=g;c=Ci();k=Bi6.oZ().data;e=k.length;f=0;if(f<e){l=k[f];j.dT=l;JX(j,i);$p=1;continue _;}if(c.s>0)j.dT=Z(c,E(j.m,c.s));JX(j,i);$p=2;continue _;case 1:$z
=ZQ(j);if(C()){break _;}g=$z;if(g)T(c,l);f=f+1|0;if(f<e){l=k[f];j.dT=l;JX(j,i);continue _;}if(c.s>0)j.dT=Z(c,E(j.m,c.s));JX(j,i);$p=2;case 2:$z=ZQ(j);if(C()){break _;}e=$z;if(!e)return 1;$p=3;case 3:AOn(d,j);if(C()){break _;}b.p=b.p-1|0;return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AHw(){Bc.call(this);}
function Bcu(a){var b=new AHw();A7Q(b,a);return b;}
function A7Q(a,b){Dt(a,b);a.fh=64;a.e1=1;}
function Yl(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bhf;$p=1;case 1:$z=i.fT(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;h=Bhf.b;$p=2;case 2:APE(d,e,f,g,h);if(C()){break _;}h=K((c.u+180.0)*16.0/360.0-0.5)&15;$p=3;case 3:AKD(d,e,f,g,h);if(C()){break _;}b.p=b.p-1|0;$p=4;case 4:$z=ANG(d,e,f,g);if(C()){break _;}b=$z;b=b;$p=5;case 5:AJf(c,b);if
(C()){break _;}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AJj(){Bc.call(this);}
function A_3(a){var b=new AJj();A3g(b,a);return b;}
function A3g(a,b){Dt(a,b);a.fh=64;a.e1=1;}
function AEg(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(h!=1)return 0;f=f+1|0;L();i=Bhg;$p=1;case 1:$z=i.fT(d,e,f,g);if(C()){break _;}h=$z;if(!h)return 0;j=K((c.u+180.0)*4.0/360.0-0.5)&3;k=0;l=0;if(!j)l=1;if(j==1)k=(-1);if(j==2)l=(-1);if(j==3)k=1;m=e-k|0;n=g-l|0;$p=2;case 2:$z
=AAJ(d,m,f,n);if(C()){break _;}h=$z;h=!h?0:1;o=f+1|0;$p=3;case 3:$z=AAJ(d,m,o,n);if(C()){break _;}p=$z;p=h+(!p?0:1)|0;h=e+k|0;k=g+l|0;$p=4;case 4:$z=AAJ(d,h,f,k);if(C()){break _;}l=$z;l=!l?0:1;$p=5;case 5:$z=AAJ(d,h,o,k);if(C()){break _;}q=$z;q=l+(!q?0:1)|0;$p=6;case 6:$z=ACE(d,m,f,n);if(C()){break _;}l=$z;if(l!=Bhg.b){$p=7;continue _;}n=1;$p=8;continue _;case 7:$z=ACE(d,m,o,n);if(C()){break _;}m=$z;n=m==Bhg.b?1:0;$p=8;case 8:$z=ACE(d,h,f,k);if(C()){break _;}l=$z;if(l!=Bhg.b){$p=9;continue _;}r=0;if(n&&!1)r
=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bhg.b;$p=10;continue _;case 9:$z=ACE(d,h,o,k);if(C()){break _;}h=$z;m=h==Bhg.b?1:0;r=0;if(n&&!m)r=1;else if(q>p)r=1;if(r)j=((j-1|0)&3)+4|0;h=Bhg.b;$p=10;case 10:APE(d,e,f,g,h);if(C()){break _;}$p=11;case 11:AKD(d,e,f,g,j);if(C()){break _;}f=Bhg.b;$p=12;case 12:APE(d,e,o,g,f);if(C()){break _;}f=j+8|0;$p=13;case 13:AKD(d,e,o,g,f);if(C()){break _;}b.p=b.p-1|0;return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ARV(){Bc.call(this);this.ps=0;}
function AP6(a,b){var c=new ARV();A0q(c,a,b);return c;}
function A0q(a,b,c){Dt(a,b);a.e1=1;a.fh=64;a.ps=c;}
function AH3(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=d.T+(d.I-d.T)*1.0;f=d.P+(d.u-d.P)*1.0;g=BY(d.bS+(d.d-d.bS)*1.0,d.cS+(d.j-d.cS)*1.0,d.bR+(d.e-d.bR)*1.0);h= -f*0.01745329238474369-3.1415927410125732;i=BC(h);h=Br(h);j= -e*0.01745329238474369;k= -BC(j);l=Dk(g,h*k*5.0,Br(j)
*5.0,i*k*5.0);m=a.ps?0:1;$p=1;case 1:$z=AE8(c,g,l,m);if(C()){break _;}n=$z;if(n===null)return b;if(n.k$)return b;m=n.h9;o=n.h$;p=n.h_;if(!a.ps){$p=2;continue _;}if(!n.hJ)o=o+(-1)|0;if(n.hJ==1)o=o+1|0;if(n.hJ==2)p=p+(-1)|0;if(n.hJ==3)p=p+1|0;if(n.hJ==4)m=m+(-1)|0;if(n.hJ==5)m=m+1|0;$p=8;continue _;case 2:$z=AB9(c,m,o,p);if(C()){break _;}g=$z;if(g!==Bf1){$p=3;continue _;}$p=4;continue _;case 3:$z=AB9(c,m,o,p);if(C()){break _;}d=$z;if(d!==Bf2)return b;$p=5;continue _;case 4:$z=AEQ(c,m,o,p);if(C()){break _;}q=$z;if
(q){$p=3;continue _;}q=0;$p=6;continue _;case 5:$z=AEQ(c,m,o,p);if(C()){break _;}q=$z;if(q)return b;q=0;$p=7;continue _;case 6:APE(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DD(b,BiQ);return b;case 7:APE(c,m,o,p,q);if(C()){break _;}b=new Cd;BB();DD(b,BiR);return b;case 8:$z=ACE(c,m,o,p);if(C()){break _;}q=$z;if(q){$p=10;continue _;}q=a.ps;r=0;$p=9;case 9:AI5(c,m,o,p,q,r);if(C()){break _;}b=new Cd;BB();DD(b,BiP);return b;case 10:$z=AB9(c,m,o,p);if(C()){break _;}d=$z;if(d.dw())return b;q=a.ps;r=0;$p=9;continue _;default:
Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function APf(){Bc.call(this);}
function BbY(a){var b=new APf();AXj(b,a);return b;}
function AXj(a,b){Dt(a,b);a.e1=1;}
function ADd(a,b,c,d,e,f,g,h){var i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACE(d,e,f,g);if(C()){break _;}i=$z;L();if(i!=Bhh.b)return 0;c=new Gh;j=e+0.5;k=f+0.5;l=g+0.5;FD(c,d);c.Bu=J(Cd,36);c.iT=0;c.kC=0;c.oP=1;c.kO=0;c.mG=1;D2(c,0.9800000190734863,0.699999988079071);c.c4=c.eP/2.0;c.i9=0;CU(c,j,k+c.c4,l);c.g=0.0;c.i=0.0;c.h=0.0;c.bS=j;c.cS=k;c.bR
=l;$p=2;case 2:AOn(d,c);if(C()){break _;}b.p=b.p-1|0;return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ARm(){Bc.call(this);}
function Bc8(a){var b=new ARm();AWJ(b,a);return b;}
function AWJ(a,b){Dt(a,b);a.e1=1;a.fh=64;}
function AGE(a,b,c){var d;if(c instanceof II){d=c;if(!d.qA){d.qA=1;b.p=b.p-1|0;}}}
function AWu(a,b,c){AGE(a,b,c);}
function N9(){}
function AGn(){var a=this;D.call(a);a.d3=Long_ZERO;a.eW=Long_ZERO;}
function A91(){var a=new AGn();A0o(a);return a;}
function A0o(a){a.d3=Long_fromInt(1);a.eW=Long_ZERO;}
function AS7(a,b){a.d3=Long_and(b,Long_fromInt(65535));a.eW=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AZG(a){a.d3=Long_fromInt(1);a.eW=Long_ZERO;}
function AUb(a){return Long_or(Long_shl(a.eW,16),a.d3);}
function A8q(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.d3=Long_add(a.d3,Long_fromInt(b[c]&255));a.eW=Long_add(a.eW,a.d3);a.d3=Long_rem(a.d3,Long_fromInt(65521));a.eW=Long_rem(a.eW,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.d3;d=c+1|0;a.d3=Long_add(j,Long_fromInt(i[c]&255));a.eW=Long_add(a.eW,a.d3);h=e;c=d;}a.d3=Long_rem(a.d3,Long_fromInt(65521));a.eW=Long_rem(a.eW,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.d3;e=c+1|0;a.d3=Long_add(j,Long_fromInt(i[c]&255));a.eW=Long_add(a.eW,a.d3);f=d;c=e;}a.d3=Long_rem(a.d3,Long_fromInt(65521));a.eW=Long_rem(a.eW,Long_fromInt(65521));}
function Sm(){BD.call(this);}
function Bi7(){var a=new Sm();A6O(a);return a;}
function A6O(a){P(a);}
function Nu(){D.call(this);this.GL=null;}
var Bgy=null;var Bi8=null;function AVK(a){var b=new Nu();AH$(b,a);return b;}
function AH$(a,b){a.GL=b;}
function ASx(){Bgy=AVK(B(281));Bi8=AVK(B(282));}
function J$(){}
function LP(){var a=this;D.call(a);a.eS=null;a.d9=null;}
function A4_(a,b){var c,d;if(a===b)return 1;if(!Sw(b,J$))return 0;a:{b:{c:{c=b;if(a.eS===null){if(c.eS!==null)break c;}else if(!a.eS.ep(c.eS))break c;if(a.d9===null){if(c.d9!==null)break c;break b;}if(a.d9.ep(c.d9))break b;}d=0;break a;}d=1;}return d;}
function AW3(a){return a.eS;}
function A2r(a){return a.d9;}
function A17(a){return (a.eS===null?0:a.eS.fm())^(a.d9===null?0:a.d9.fm());}
function IL(){var a=this;LP.call(a);a.pX=0;a.eF=null;}
function BT(){B6.call(this);}
function Bi9(){var a=new BT();AUG(a);return a;}
function AUG(a){P(a);}
function I6(){BT.call(this);}
function Bi$(){var a=new I6();A08(a);return a;}
function A08(a){P(a);}
function GF(){}
function WI(){D.call(this);this.zW=null;}
function AI$(a){var b,c,d,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.zW;try{Bfz=Bfz+1|0;Fw(b);$p=1;continue _;}catch($$e){$$je=Q($$e);c=$$je;}d=b.mU;$p=2;continue _;case 1:a:{try{b.kt();if(C()){break _;}}catch($$e){$$je=Q($$e);c=$$je;break a;}c=b.mU;$p=3;continue _;}d=b.mU;$p=2;case 2:AD9(d);if(C()){break _;}a:{try{Xo(b.mU);NZ(d);break a;}catch($$e){$$je=Q($$e);b=$$je;}NZ(d);M(b);}b.wF=0;Bfz=Bfz-1|0;Fw(Bfx);M(c);case 3:AD9(c);if(C())
{break _;}a:{try{Xo(b.mU);NZ(c);break a;}catch($$e){$$je=Q($$e);b=$$je;}NZ(c);M(b);}b.wF=0;Bfz=Bfz-1|0;Fw(Bfx);return;default:Fa();}}C4().s(a,b,c,d,$p);}
function FI(){BL.call(this);}
function Bi_(){var a=new FI();AXe(a);return a;}
function AXe(a){P(a);}
function ER(){var a=this;D.call(a);a.hQ=null;a.vy=0.0;a.vz=0.0;}
function G5(a,b,c,d,e){var f=new ER();ASU(f,a,b,c,d,e);return f;}
function ASU(a,b,c,d,e,f){a.hQ=WB(b,c,d);a.vy=e;a.vz=f;}
function Jg(a,b,c){var d;d=new ER;d.hQ=a.hQ;d.vy=b;d.vz=c;return d;}
function Fz(){var a=this;D.call(a);a.hy=null;a.E4=0;}
function Bja(a,b,c,d,e){var f=new Fz();Hj(f,a,b,c,d,e);return f;}
function Hj(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.E4=0;a.hy=b;a.E4=g.length;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=Jg(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=Jg(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=Jg(h,k,l);g[3]=Jg(g[3],i,l);}
function AC2(a){var b,c,d;b=J(ER,a.hy.data.length);c=b.data;d=0;while(d<a.hy.data.length){c[d]=a.hy.data[(a.hy.data.length-d|0)-1|0];d=d+1|0;}a.hy=b;}
function APK(a,b,c){var d,e,f,g;d=Qh(a.hy.data[1].hQ,a.hy.data[0].hQ);e=CD(AB0(Qh(a.hy.data[1].hQ,a.hy.data[2].hQ),d));Bz(b);Cj(e.x,e.z,e.w);f=0;while(f<4){g=a.hy.data[f];G(b,g.hQ.x*c,g.hQ.z*c,g.hQ.w*c,g.vy,g.vz);f=f+1|0;}Bt(b);}
function LN(){var a=this;D.call(a);a.bP=0;a.ow=0;a.rW=Long_ZERO;a.bv=Long_ZERO;a.oG=0;a.d0=0;a.x1=0;a.iC=null;a.E=null;a.eN=0;a.iI=0;a.xM=null;a.cJ=null;a.fW=null;}
var Bjb=null;function AFP(a){var b;if(a.E===null)return (-2);b=a.E;a.E.nu=Long_ZERO;b.G=Long_ZERO;a.E.b9=null;a.bP=14;a.iI=(-1);JO(a.iC);return 0;}
function Sq(a){if(a.iC!==null)S6(a.iC);return 0;}
function XJ(a,b){var c,d,e,f;a.E.b9=null;a.iC=null;a.d0=0;if(b<0)b= -b;else if(b&1073741824){a.d0=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.d0=4;b=b&15;}else{a.d0=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.iC!==null&&a.x1!=b){S6(a.iC);a.iC=null;}a.x1=b;c=new KL;d=a.E;b=1<<b;c.sg=$rt_createIntArray(1);c.oF=$rt_createIntArray(1);c.m2=$rt_createIntArray(1);c.m0=$rt_createIntArray(1);c.vP=J($rt_arraycls($rt_intcls()),1);c.vQ=J($rt_arraycls($rt_intcls()),1);c.vc=$rt_createIntArray(1);c.vj=$rt_createIntArray(1);c.w9
=BaM();c.y=d;e=new LF;f=c.y;e.k5=0;e.bc=f;e.C=c;c.pI=e;c.ko=$rt_createIntArray(4320);c.c0=$rt_createByteArray(b);c.cQ=b;c.ro=d.hZ.d0?1:0;c.dL=0;JO(c);a.iC=c;AFP(a);return 0;}Sq(a);return (-2);}
function AGI(a,b){var c,d,e,f,g,h,i,$$je;if(a.E!==null&&a.E.cf!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bP){case 6:a.bP=13;a.E.b9=B(283);a.oG=0;return (-2);case 7:d=Zv(a.iC,d);if(d==(-3)){a.bP=13;a.oG=0;continue i;}if(!d)d=c;if(d!=1)break i;a.rW=a.E.f9.yF();JO(a.iC);if(!a.d0){a.bP=12;d=c;continue i;}a.bP=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=F$(a,2,d,c);}catch($$e){$$je=Q($$e);if($$je instanceof DZ)
{e=$$je;return e.hH;}else{throw $$e;}}a.eN=a.bv.lo&65535;if((a.eN&255)!=8){a.E.b9=B(284);a.bP=13;continue i;}if(a.eN&57344){a.E.b9=B(285);a.bP=13;continue i;}if(a.eN&512)Ir(a,2,a.bv);a.bP=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.E.N)return d;e=a.E;e.N=e.N
-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bP=9;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bP=10;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bP=11;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.eN)a.bv=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bv,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bv,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bv,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.rW.lo!=
a.bv.lo)a.E.b9=B(286);else if(a.eN&&a.cJ!==null)a.cJ.HG=a.bv;a.bP=15;d=c;}if(!(a.d0&&a.eN)){if(a.E.b9===null)break f;if(!DC(a.E.b9,B(286)))break f;a.bP=13;a.oG=5;continue i;}try{d=F$(a,4,d,c);}catch($$e){$$je=Q($$e);if($$je instanceof DZ){e=$$je;return e.hH;}else{throw $$e;}}if(a.E.b9!==null&&DC(a.E.b9,B(286))){a.bP=13;a.oG=5;continue i;}if(Long_eq(a.bv,Long_and(a.E.nu,new Long(4294967295, 0)))){a.E.b9=null;break f;}a.E.b9=B(287);a.bP=13;continue i;}if(!a.d0){a.bP=7;continue i;}try{d=F$(a,2,d,c);}catch($$e)
{$$je=Q($$e);if($$je instanceof DZ){e=$$je;return e.hH;}else{throw $$e;}}if(!(a.d0!=4&&!(a.d0&2))&&Long_eq(a.bv,Long_fromInt(35615))){if(a.d0==4)a.d0=2;a.E.f9=AWr();Ir(a,2,a.bv);if(a.cJ===null)a.cJ=BcB();a.bP=23;continue i;}if(a.d0&2){a.bP=13;a.E.b9=B(288);continue i;}a.eN=0;a.ow=a.bv.lo&255;h=Long_shr(a.bv,8).lo&255;if(!(a.d0&1&&!(((a.ow<<8)+h|0)%31|0))&&(a.ow&15)!=8){if(a.d0!=4){a.bP=13;a.E.b9=B(288);continue i;}e=a.E;e.B=e.B-2|0;e=a.E;e.N=e.N+2|0;e=a.E;e.G=Long_sub(e.G,Long_fromInt(2));a.d0=0;a.bP=7;continue i;}if
((a.ow&15)!=8){a.bP=13;a.E.b9=B(284);continue i;}if(a.d0==4)a.d0=1;if(((a.ow>>4)+8|0)>a.x1){a.bP=13;a.E.b9=B(289);continue i;}a.E.f9=A91();if(h&32){a.bP=2;break d;}a.bP=7;continue i;}break m;}try{d=F$(a,4,d,c);}catch($$e){$$je=Q($$e);if($$je instanceof DZ){e=$$je;return e.hH;}else{throw $$e;}}if(a.cJ!==null)a.cJ.HZ=a.bv;if(a.eN&512)Ir(a,4,a.bv);a.bP=17;}try{d=F$(a,2,d,c);}catch($$e){$$je=Q($$e);if($$je instanceof DZ){e=$$je;return e.hH;}else{throw $$e;}}if(a.cJ!==null){a.cJ.Ja=a.bv.lo&255;a.cJ.Bc=a.bv.lo>>8
&255;}if(a.eN&512)Ir(a,2,a.bv);a.bP=18;}if(a.eN&1024){try{d=F$(a,2,d,c);}catch($$e){$$je=Q($$e);if($$je instanceof DZ){e=$$je;return e.hH;}else{throw $$e;}}if(a.cJ!==null)a.cJ.pt=$rt_createByteArray(a.bv.lo&65535);if(a.eN&512)Ir(a,2,a.bv);}else if(a.cJ!==null)a.cJ.pt=null;a.bP=19;}if(a.eN&1024)x:{try{d=ANW(a,d,c);if(a.cJ===null)break x;f=Ij(a.fW);i=f.data;a.fW=null;b=i.length;if(b!=a.cJ.pt.data.length){a.E.b9=B(290);a.bP=13;continue i;}Ds(f,0,a.cJ.pt,0,b);break x;}catch($$e){$$je=Q($$e);if($$je instanceof DZ)
{e=$$je;return e.hH;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.pt=null;a.bP=20;}y:{if(a.eN&2048){z:{try{d=PR(a,d,c);if(a.cJ===null)break z;a.cJ.yT=Ij(a.fW);break z;}catch($$e){$$je=Q($$e);if($$je instanceof DZ){e=$$je;break h;}else{throw $$e;}}}try{a.fW=null;break y;}catch($$e){$$je=Q($$e);if($$je instanceof DZ){e=$$je;break h;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.yT=null;}a.bP=21;}ba:{if(a.eN&4096){bb:{try{d=PR(a,d,c);if(a.cJ===null)break bb;a.cJ.AE=Ij(a.fW);break bb;}catch($$e){$$je=Q($$e);if($$je instanceof DZ)
{e=$$je;break g;}else{throw $$e;}}}try{a.fW=null;break ba;}catch($$e){$$je=Q($$e);if($$je instanceof DZ){e=$$je;break g;}else{throw $$e;}}}else if(a.cJ!==null)a.cJ.AE=null;}a.bP=22;}if(a.eN&512){try{d=F$(a,2,d,c);}catch($$e){$$je=Q($$e);if($$je instanceof DZ){e=$$je;return e.hH;}else{throw $$e;}}if(a.cJ!==null)a.cJ.JY=Long_and(a.bv,Long_fromInt(65535)).lo;if(Long_ne(a.bv,Long_and(a.E.f9.yF(),Long_fromInt(65535)))){a.bP=13;a.E.b9=B(291);a.oG=5;continue;}}a.E.f9=AWr();a.bP=7;}return d;}return e.hH;}return e.hH;}a.bP
=12;}return 1;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.E.cf.data;e=a.E;d=e.B;e.B=d+1|0;a.bv=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bP=3;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;d=e.B;e.B=d+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bP=4;d=c;}if(!a.E.N)return d;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e
=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bP=5;}if(!a.E.N)return c;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));g=a.bv;f=a.E.cf.data;e=a.E;b=e.B;e.B=b+1|0;a.bv=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.E.f9.E5(a.bv);a.bP=6;return 2;}if(b==4&&a.bP==14)return 0;return (-2);}
function F$(a,b,c,d){var e,f,g,h;if(a.iI==(-1)){a.iI=b;a.bv=Long_ZERO;}while(true){if(a.iI<=0){if(b==2)a.bv=Long_and(a.bv,Long_fromInt(65535));else if(b==4)a.bv=Long_and(a.bv,new Long(4294967295, 0));a.iI=(-1);return c;}if(!a.E.N)break;e=a.E;e.N=e.N-1|0;e=a.E;e.G=Long_add(e.G,Long_fromInt(1));f=a.bv;g=a.E.cf.data;e=a.E;h=e.B;e.B=h+1|0;a.bv=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.iI|0)*8|0)));a.iI=a.iI-1|0;c=d;}M(AHc(a,c));}
function PR(a,b,c){var d,e;if(a.fW===null)a.fW=A7K();while(true){if(!a.E.N)M(AHc(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));e=a.E.cf.data[a.E.B];if(e)Rz(a.fW,a.E.cf,a.E.B,1);a.E.f9.kL(a.E.cf,a.E.B,1);d=a.E;d.B=d.B+1|0;if(!e)break;b=c;}return c;}
function ANW(a,b,c){var d;if(a.fW===null)a.fW=A7K();while(Long_gt(a.bv,Long_ZERO)){if(!a.E.N)M(AHc(a,b));d=a.E;d.N=d.N-1|0;d=a.E;d.G=Long_add(d.G,Long_fromInt(1));Rz(a.fW,a.E.cf,a.E.B,1);a.E.f9.kL(a.E.cf,a.E.B,1);d=a.E;d.B=d.B+1|0;a.bv=Long_sub(a.bv,Long_fromInt(1));b=c;}return b;}
function Ir(a,b,c){var d;d=0;while(d<b){a.xM.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.E.f9.kL(a.xM,0,b);}
function AOP(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);Bjb=b;}
function PW(){E4.call(this);}
function Bjc(){var a=new PW();A6U(a);return a;}
function A6U(a){return;}
function A6h(a,b){$rt_putStderr(b);}
function Kr(){var a=this;D.call(a);a.x=0.0;a.z=0.0;a.w=0.0;}
var Bjd=null;var BeY=0;function WB(b,c,d){var e;e=new Kr;if(b===-0.0)b=0.0;if(c===-0.0)c=0.0;if(d===-0.0)d=0.0;e.x=b;e.z=c;e.w=d;return e;}
function BY(b,c,d){var e,f;if(BeY>=Bjd.s)T(Bjd,WB(0.0,0.0,0.0));e=Bjd;f=BeY;BeY=f+1|0;e=Z(e,f);e.x=b;e.z=c;e.w=d;return e;}
function Qh(a,b){return BY(b.x-a.x,b.z-a.z,b.w-a.w);}
function CD(a){var b;b=Ce(a.x*a.x+a.z*a.z+a.w*a.w);return b<1.0E-4?BY(0.0,0.0,0.0):BY(a.x/b,a.z/b,a.w/b);}
function AB0(a,b){return BY(a.z*b.w-a.w*b.z,a.w*b.x-a.x*b.w,a.x*b.z-a.z*b.x);}
function Dk(a,b,c,d){return BY(a.x+b,a.z+c,a.w+d);}
function DI(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return Ce(c*c+d*d+e*e);}
function EA(a,b){var c,d,e;c=b.x-a.x;d=b.z-a.z;e=b.w-a.w;return c*c+d*d+e*e;}
function AB5(a,b,c,d){var e,f,g;e=b-a.x;f=c-a.z;g=d-a.w;return e*e+f*f+g*g;}
function HU(a){return Ce(a.x*a.x+a.z*a.z+a.w*a.w);}
function KT(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(d*d<1.0000000116860974E-7)return null;g=(c-a.x)/d;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function J3(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(e*e<1.0000000116860974E-7)return null;g=(c-a.z)/e;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function KE(a,b,c){var d,e,f,g;d=b.x-a.x;e=b.z-a.z;f=b.w-a.w;if(f*f<1.0000000116860974E-7)return null;g=(c-a.w)/f;return g>=0.0&&g<=1.0?BY(a.x+d*g,a.z+e*g,a.w+f*g):null;}
function AQk(){Bjd=Ci();BeY=0;}
function AMw(){D.call(this);}
function Bje(){var a=new AMw();ATK(a);return a;}
function ATK(a){return;}
function Gt(b){return Math.sin(b);}
function GE(b){return Math.cos(b);}
function Ix(b){return Math.atan(b);}
function A34(b){return Math.log(b);}
function Ed(b){return Math.sqrt(b);}
function Nh(b){return Math.ceil(b);}
function A2Z(b,c){return Math.pow(b,c);}
function CS(b,c){return Math.atan2(b,c);}
function BP(){return A2B();}
function A2B(){return Math.random();}
function CB(b,c){if(b<c)c=b;return c;}
function DE(b,c){if(b>c)c=b;return c;}
function Ii(b){if(b<=0)b= -b;return b;}
function H2(b){if(b<=0.0)b= -b;return b;}
function Jn(){D.call(this);this.G3=null;}
var Bjf=null;var Bgh=null;var BiU=null;function AGV(a){var b=new Jn();APO(b,a);return b;}
function APO(a,b){a.G3=b;}
function ADc(){Bjf=AGV(B(292));Bgh=AGV(B(293));BiU=AGV(B(294));}
function Lw(){LY.call(this);}
function Xw(a){return a.yD;}
function ABW(){var a=this;Lw.call(a);a.yD=0;a.yi=0;a.mk=null;}
function AZR(a,b,c,d,e,f){var g=new ABW();A2P(g,a,b,c,d,e,f);return g;}
function A2P(a,b,c,d,e,f,g){KV(a,c);a.bk=e;a.cy=f;a.yi=b;a.yD=g;a.mk=d;}
function AOV(a,b){return a.mk.data[b+a.yi|0];}
function VG(a,b,c){a.mk.data[b+a.yi|0]=c;}
function AY8(a){return 1;}
function AWo(a){return a.mk;}
function A2e(a){return a.yD;}
function LV(){var a=this;D.call(a);a.HF=null;a.uE=null;a.GH=0.0;a.BR=0.0;a.vx=null;a.uR=null;a.m5=0;}
function ACY(a,b){var c;if(b!==null){a.vx=b;return a;}c=new Cc;Bo(c,B(295));M(c);}
function A2i(a,b){return;}
function AG1(a,b){var c;if(b!==null){a.uR=b;return a;}c=new Cc;Bo(c,B(295));M(c);}
function A6K(a,b){return;}
function AJk(a,b,c,d){var e,f,g,h,$$je;a:{if(a.m5!=3){if(d)break a;if(a.m5!=2)break a;}b=new D3;P(b);M(b);}a.m5=!d?1:2;while(true){try{e=Y_(a,b,c);}catch($$e){$$je=Q($$e);if($$je instanceof B6){f=$$je;M(A5a(f));}else{throw $$e;}}if(JK(e)){if(!d)return e;g=Ct(b);if(g<=0)return e;e=Fi(g);}else if(I0(e))break;h=!My(e)?a.vx:a.uR;b:{if(h!==Bgh){if(h===Bjf)break b;else return e;}if(Ct(c)<a.uE.data.length)return Bjg;UX(c,a.uE);}Ep(b,b.bk+LC(e)|0);}return e;}
function X8(a,b){var c;if(a.m5!=2&&a.m5!=4){b=new D3;P(b);M(b);}c=Bjh;if(c===Bjh)a.m5=3;return c;}
function A7C(a,b){return Bjh;}
function Of(){var a=this;D.call(a);a.nx=0;a.qK=0;}
var Bjh=null;var Bjg=null;function Zo(a,b){var c=new Of();AKq(c,a,b);return c;}
function AKq(a,b,c){a.nx=b;a.qK=c;}
function JK(a){return a.nx?0:1;}
function I0(a){return a.nx!=1?0:1;}
function NE(a){return !Qj(a)&&!My(a)?0:1;}
function Qj(a){return a.nx!=2?0:1;}
function My(a){return a.nx!=3?0:1;}
function LC(a){var b;if(NE(a))return a.qK;b=new Jv;P(b);M(b);}
function Fi(b){return Zo(2,b);}
function Se(a){var b,c;switch(a.nx){case 0:b=new P_;P(b);M(b);case 1:b=new ST;P(b);M(b);case 2:b=new R7;c=a.qK;P(b);b.Bz=c;M(b);case 3:b=new P7;c=a.qK;P(b);b.ER=c;M(b);default:}}
function AKY(){Bjh=Zo(0,0);Bjg=Zo(1,0);}
function AAe(){D.call(this);}
function A97(){return {};}
function PX(){}
function YK(){D.call(this);}
function KL(){var a=this;D.call(a);a.dL=0;a.pN=0;a.qb=0;a.f2=0;a.fB=null;a.sg=null;a.oF=null;a.m2=null;a.m0=null;a.vP=null;a.vQ=null;a.vc=null;a.vj=null;a.pI=null;a.tr=0;a.bK=0;a.bJ=0;a.ko=null;a.c0=null;a.cQ=0;a.bV=0;a.bl=0;a.ro=0;a.w9=null;a.y=null;}
var Bji=null;var Bjj=null;function JO(a){a.dL=0;a.bK=0;a.bJ=0;a.bl=0;a.bV=0;if(a.ro)a.y.f9.l4();}
function Zv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.y.B;d=a.y.N;e=a.bJ;f=a.bK;g=a.bl;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.dL){case 2:break f;case 9:a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.qb=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.fB!==null&&a.fB.data.length>=k))a.fB=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.fB.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.f2=0;a.dL=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-2));}while(f<32){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.dL=9;a.y.b9=B(296);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.pN=l;f=0;a.dL=a.pN?2:!a.tr?0:7;e=f;continue e;}while(f<3){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.tr=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.dL=1;break l;case 1:AEq(a.m2,a.m0,a.vP,a.vQ,a.y);Xc(a.pI,a.m2.data[0],a.m0.data[0],a.vP.data[0],0,a.vQ.data[0],0);e=e>>>3;f=f+(-3)|0;a.dL=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.dL=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.dL=9;a.y.b9=B(297);a.bJ=b;a.bK=k;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));default:}}continue e;}while(a.f2<(4+(a.qb>>>10)|0)){while(f<3){if(!d){a.bJ=e;a.bK
=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.fB.data;j=Bjj.data;k=a.f2;a.f2=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.f2<19){o=a.fB.data;j=Bjj.data;k=a.f2;a.f2=k+1|0;o[j[k]]=0;}a.sg.data[0]=7;k=AP8(a.w9,a.fB,a.sg,a.oF,a.ko,a.y);if(k){if(k==(-3)){a.fB=null;a.dL=9;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,k);}a.f2=0;a.dL=5;}while(true)
{k=a.qb;if(a.f2>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.sg.data[0];while(f<k){if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.ko.data[((a.oF.data[0]+(e&Bji.data[k])|0)*3|0)+1|0];n=a.ko.data[((a.oF.data[0]+(e&Bji.data[k])|0)*3|0)+2|0];l=S(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.fB.data;k=a.f2;a.f2=k+1|0;j[k]=n;}else{p=S(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bJ=e;a.bK=
f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}b=0;d=d+(-1)|0;j=a.y.cf.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&Bji.data[q])|0;e=n>>>q;f=k-q|0;h=a.f2;q=a.qb;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.fB.data[h-1|0];while(true){j=a.fB.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.f2=l;}}a.oF.data[0]=(-1);a.m2.data[0]=9;a.m0.data[0]=6;k=a.qb;k=YN(a.w9,257+(k&31)|0,1+(k>>5&31)|0,a.fB,a.m2,a.m0,a.vc,a.vj,a.ko,
a.y);if(k){if(k==(-3)){a.fB=null;a.dL=9;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,k);}Xc(a.pI,a.m2.data[0],a.m0.data[0],a.ko,a.vc.data[0],a.ko,a.vj.data[0]);a.dL=6;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;b=ABK(a.pI,b);if(b!=1)break e;b=0;AAU(a.pI,a.y);c=a.y.B;d=a.y.N;e=a.bJ;f=a.bK;g=a.bl;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;if(a.tr){a.dL=7;break b;}a.dL=0;continue e;}if(!d){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,
Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}if(!h){if(g==a.cQ&&a.bV){g=0;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;}if(!h){a.bl=g;b=B5(a,b);g=a.bl;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;if(g==a.cQ&&a.bV){g=0;h=g>=a.bV?a.cQ-g|0:(a.bV-g|0)-1|0;}if(!h){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}}}b=0;k=a.pN;if(k>d)k=d;if(k>h)k=h;Ds(a.y.cf,c,a.c0,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.pN-k|0;a.pN=k;if(k)continue;a.dL=!a.tr?0:7;}return B5(a,b);}a.dL=9;a.y.b9
=B(298);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.fB=null;a.dL=9;a.y.b9=B(299);a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,(-3));}a.bl=g;b=B5(a,b);g=a.bl;if(a.bV!=a.bl){a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,b);}a.dL=8;}a.bJ=e;a.bK=f;a.y.N=d;i=a.y;i.G=Long_add(i.G,Long_fromInt(c-a.y.B|0));a.y.B=c;a.bl=g;return B5(a,1);}
function S6(a){JO(a);a.c0=null;a.ko=null;}
function B5(a,b){var c,d,e,f,g;c=a.y.pQ;d=a.bV;e=(d>a.bl?a.cQ:a.bl)-d|0;if(e>a.y.ib)e=a.y.ib;if(e&&b==(-5))b=0;f=a.y;f.ib=f.ib-e|0;f=a.y;f.nu=Long_add(f.nu,Long_fromInt(e));if(a.ro&&e>0)a.y.f9.kL(a.c0,d,e);Ds(a.c0,d,a.y.uZ,c,e);c=c+e|0;g=d+e|0;if(g==a.cQ){if(a.bl==a.cQ)a.bl=0;d=a.bl-0|0;if(d>a.y.ib)d=a.y.ib;if(d&&b==(-5))b=0;f=a.y;f.ib=f.ib-d|0;f=a.y;f.nu=Long_add(f.nu,Long_fromInt(d));if(a.ro&&d>0)a.y.f9.kL(a.c0,0,d);Ds(a.c0,0,a.y.uZ,c,d);c=c+d|0;g=0+d|0;}a.y.pQ=c;a.bV=g;return b;}
function AH8(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bji=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;Bjj=b;}
function NI(){LV.call(this);}
function Y_(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fm(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);O$(b,d,k,g-k|0);f=0;}if(!Fm(c)){l=!Fm(b)&&f>=g?Bjh:Bjg;break a;}k=CB(Ct(c),i.length);m=new TI;m.yY=b;m.Dl=c;l=ACH(a,d,f,g,h,0,k,m);f=m.vM;if(l===null&&0==m.rQ)l=Bjh;W6(c,h,0,m.rQ);if(l!==null)break;}}Ep(b,b.bk-(g-f|0)|0);return l;}
function PY(){NI.call(this);}
function ACH(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Oe(h,2))break a;i=Bjg;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ox(l)){if((f+3|0)>g){j=j+(-1)|0;if(Oe(h,3))break a;i=Bjg;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Du(l)){i=Fi(1);break a;}if
(j>=d){if(AAF(h))break a;i=Bjh;break a;}c=j+1|0;j=k[j];if(!DS(j)){j=c+(-2)|0;i=Fi(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Oe(h,4))break a;i=Bjg;break a;}k=e.data;n=EJ(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vM=j;h.rQ=f;return i;}
function AOv(){D.call(this);}
function Bjk(){var a=new AOv();A20(a);return a;}
function A20(a){return;}
function APo(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Bhr());}return b.data.length;}
function AEO(b,c){if(b===null){b=new E5;P(b);M(b);}if(b===F($rt_voidcls())){b=new Cc;P(b);M(b);}if(c>=0)return A12(b.fX,c);b=new XC;P(b);M(b);}
function A12(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Gd(){var a=this;D.call(a);a.j2=null;a.j$=null;a.eT=null;a.fK=null;a.lo=null;a.im=null;}
var Bjl=null;var Bjm=null;var Bjn=null;var Bjo=null;var Bjp=null;var Bjq=null;function BaM(){var a=new Gd();AHL(a);return a;}
function AHL(a){a.j2=null;a.j$=null;a.eT=null;a.fK=null;a.lo=null;a.im=null;}
function NL(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eT.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eT.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eT.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eT.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m=s;while(true){if(m>=t){v=u-a.eT.data[t]|0;if(v<0)return (-3);b=a.eT.data;b[t]
=b[t]+v|0;b=a.im.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.im.data;u=u+a.eT.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.im.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.im.data[t];b=a.im.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.lo.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eT.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c
=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eT.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eT.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.lo.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.im.data[y]=m;a.fK.data[0]=bc<<24>>24;a.fK.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.fK.data;b=a.lo.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;Ds(a.fK,0,j,(a.lo.data[q]+c|0)*3|0,3);z=be;}b=a.fK.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.fK.data[0]=192;else{p=l.data;if
(p[w]>=e){i=g.data;o=f.data;a.fK.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.fK.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.fK;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.fK.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){Ds(a.fK,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.im.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eT.data[m]|0;if(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function AP8(a,b,c,d,e,f){var g;M6(a,19);a.j2.data[0]=0;g=NL(a,b,0,19,19,null,null,d,c,e,a.j2,a.j$);if(g==(-3))f.b9=B(300);else if(!(g!=(-5)&&c.data[0])){f.b9=B(301);g=(-3);}return g;}
function YN(a,b,c,d,e,f,g,h,i,j){var k;M6(a,288);a.j2.data[0]=0;k=NL(a,d,0,b,257,Bjn,Bjo,g,e,i,a.j2,a.j$);if(!k&&e.data[0]){M6(a,288);c=NL(a,d,b,c,0,Bjp,Bjq,h,f,i,a.j2,a.j$);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.b9=B(302);else if(c==(-5)){j.b9=B(303);c=(-3);}else if(c!=(-4)){j.b9=B(304);c=(-3);}return c;}if(k==(-3))j.b9=B(305);else if(k!=(-4)){j.b9=B(306);k=(-3);}return k;}
function AEq(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=Bjl;e[0]=Bjm;return 0;}
function M6(a,b){var c;if(a.j2===null){a.j2=$rt_createIntArray(1);a.j$=$rt_createIntArray(b);a.eT=$rt_createIntArray(16);a.fK=$rt_createIntArray(3);a.lo=$rt_createIntArray(15);a.im=$rt_createIntArray(16);}if(a.j$.data.length<b)a.j$=$rt_createIntArray(b);c=0;while(c<b){a.j$.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eT.data[c]=0;c=c+1|0;}c=0;while(c<3){a.fK.data[c]=0;c=c+1|0;}Ds(a.eT,0,a.lo,0,15);Ds(a.eT,0,a.im,0,16);}
function AOw(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
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
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;Bjl=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;Bjm=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;Bjn=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;Bjo=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;Bjp=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;Bjq=b;}
function LF(){var a=this;D.call(a);a.fg=0;a.lX=0;a.fF=null;a.k5=0;a.mg=0;a.zd=0;a.sG=0;a.q5=0;a.uS=0;a.uB=0;a.yK=null;a.v5=0;a.yl=null;a.wa=0;a.bc=null;a.C=null;}
var Bjr=null;function Xc(a,b,c,d,e,f,g){a.fg=0;a.uS=b<<24>>24;a.uB=c<<24>>24;a.yK=d;a.v5=e;a.yl=f;a.wa=g;a.fF=null;}
function ABK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.bc.B;d=a.bc.N;e=a.C.bJ;f=a.C.bK;g=a.C.bl;h=g>=a.C.bV?a.C.cQ-g|0:(a.C.bV-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.fg){case 0:break f;case 2:i=a.sG;while(f<i){if(!d){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bc.cf.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.lX=a.lX+(e&Bjr.data[i])|0;e=e>>i;f=f-i|0;a.mg=a.uB;a.fF=a.yl;a.k5=a.wa;a.fg=3;break g;case 4:i=a.sG;while
(f<i){if(!d){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bc.cf.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.q5=a.q5+(e&Bjr.data[i])|0;e=e>>i;f=f-i|0;a.fg=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.C.bl=g;b=B5(a.C,b);g=a.C.bl;if(a.C.bV!=a.C.bl){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}a.fg=8;break a;case 9:a.C.bJ=e;a.C.bK
=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,(-2));}}l=a.mg;while(f<l){if(!d){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}b=0;d=d+(-1)|0;k=a.bc.cf.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.k5+(e&Bjr.data[l])
|0)*3|0;k=a.fF.data;i=m+1|0;e=e>>k[i];f=f-a.fF.data[i]|0;l=a.fF.data[m];if(l&16){a.sG=l&15;a.q5=a.fF.data[m+2|0];a.fg=4;continue b;}if(l&64){a.fg=9;a.bc.b9=B(307);a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,(-3));}a.mg=l;a.k5=(m/3|0)+a.fF.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;b=AM$(a,a.uS,a.uB,a.yK,a.v5,a.yl,a.wa,a.C,a.bc);c=a.bc.B;d=a.bc.N;e=a.C.bJ;f
=a.C.bK;g=a.C.bl;h=g>=a.C.bV?a.C.cQ-g|0:(a.C.bV-g|0)-1|0;if(b){a.fg=b!=1?9:7;continue b;}}a.mg=a.uS;a.fF=a.yK;a.k5=a.v5;a.fg=1;}l=a.mg;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.bc.cf.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.k5+(e&Bjr.data[l])|0)*3|0;k=a.fF.data;i=m+1|0;e=e>>>k[i];f=f-a.fF.data[i]|0;n=a.fF.data[m];if(!n){a.zd=a.fF.data[m+2|0];a.fg=6;continue b;}if(n&16){a.sG=n&15;a.lX=a.fF.data[m+2|0];a.fg=2;continue b;}if(!(n&64)){a.mg=n;a.k5=(m/3|0)+a.fF.data[m+2|0]|0;continue b;}if(!(n&32)){a.fg
=9;a.bc.b9=B(308);a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,(-3));}a.fg=7;continue b;}if(h)i=g;else{if(g!=a.C.cQ)i=g;else if(!a.C.bV)i=g;else{i=0;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;}if(!h){a.C.bl=i;b=B5(a.C,b);i=a.C.bl;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;if(i==a.C.cQ&&a.C.bV){i=0;h=i>=a.C.bV?a.C.cQ-i|0:(a.C.bV-i|0)-1|0;}if(!h){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=i;return B5(a.C,
b);}}}b=0;k=a.C.c0.data;g=i+1|0;k[i]=a.zd<<24>>24;h=h+(-1)|0;a.fg=0;continue b;}i=g-a.q5|0;while(i<0){i=i+a.C.cQ|0;}while(a.lX){if(h)l=g;else{if(g!=a.C.cQ)l=g;else if(!a.C.bV)l=g;else{l=0;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;}if(!h){a.C.bl=l;b=B5(a.C,b);l=a.C.bl;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;if(l==a.C.cQ&&a.C.bV){l=0;h=l>=a.C.bV?a.C.cQ-l|0:(a.C.bV-l|0)-1|0;}if(!h){a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=l;return B5(a.C,b);}}}o=a.C.c0.data;g=l
+1|0;k=a.C.c0.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m==a.C.cQ?0:m;a.lX=a.lX-1|0;}a.fg=0;}a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,b);}a.C.bJ=e;a.C.bK=f;a.bc.N=d;j=a.bc;j.G=Long_add(j.G,Long_fromInt(c-a.bc.B|0));a.bc.B=c;a.C.bl=g;return B5(a.C,1);}
function AAU(a,b){return;}
function AM$(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.B;k=i.N;l=h.bJ;m=h.bK;n=h.bl;o=n>=h.bV?h.cQ-n|0:(h.bV-n|0)-1|0;p=Bjr.data[b];q=Bjr.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.cf.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.c0.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&Bjr.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.cf.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.b9=B(307);b=i.N-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bJ=w;h.bK=b;i.N=c;i.G=Long_add(i.G,Long_fromInt(e-i.B|0));i.B=e;h.bl=n;return (-3);}b=(b+r[x+2|0]|0)+(w&Bjr.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.cf.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&Bjr.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.c0.data;b=n+1|0;r=h.c0.data;c=w+1|0;s[n]=r[w];s=h.c0.data;n=b+1|0;r=h.c0.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{Ds(h.c0,w,h.c0,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cQ|0;if(w>=0)break;}b=h.cQ-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.c0.data;n=c+1|0;r=h.c0.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{Ds(h.c0,w,h.c0,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.c0.data;c=n+1|0;r=h.c0.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}Ds(h.c0,w,h.c0,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bJ=l;h.bK=e;i.N=b;i.G=Long_add(i.G,Long_fromInt(c-i.B|0));i.B=c;h.bl=n;return 1;}i.b9=B(308);v=i.N-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bJ=l;h.bK=c;i.N=e;i.G=Long_add(i.G,Long_fromInt(b-i.B|0));i.B=b;h.bl=n;return (-3);}t=(t+s[u+2|0]|0)+(l&Bjr.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.c0.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.N-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bJ=l;h.bK=g;i.N=b;i.G=Long_add(i.G,Long_fromInt(e-i.B|0));i.B=e;h.bl=c;return 0;}
function ABP(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bjr=b;}
function Hy(){BL.call(this);}
function Bjs(){var a=new Hy();A_z(a);return a;}
function A_z(a){P(a);}
function XC(){B6.call(this);}
function Bjt(){var a=new XC();A8X(a);return a;}
function A8X(a){P(a);}
function AA5(){D.call(this);}
function A_K(a,b){return a.HP(b);}
function AUK(a){return a.Jg();}
function Ks(){B6.call(this);}
function Bju(){var a=new Ks();A7r(a);return a;}
function A7r(a){P(a);}
function Z2(){var a=this;D.call(a);a.hj=null;a.rn=null;a.ej=null;a.fj=0;}
function BaJ(){var a=new Z2();A2O(a);return a;}
function A2O(a){a.ej=Bdd;}
function D3(){BD.call(this);}
function Bjv(){var a=new D3();A93(a);return a;}
function A93(a){P(a);}
function AIG(){D.call(this);}
function JS(b){return b.length?0:1;}
function AO0(b){return b.shift();}
function S1(){D.call(this);this.Dk=null;}
function ARe(a){var b,c,d;b=a.Dk;if(!HN(b)&&b.co.ej===null){c=b.co;if(c.hj!==null&&!JS(c.hj)){b=c.hj;d=AO0(b);if(b===null)c.hj=null;Qv(d);}}}
function Rg(){var a=this;D.call(a);a.zJ=null;a.zK=null;a.zH=0;a.zI=null;}
function Qv(a){var b,c,d,e;b=a.zJ;c=a.zK;d=a.zH;e=a.zI;Fw(b);c.co.ej=b;b=c.co;b.fj=b.fj+d|0;CM(e,null);}
function G0(){BL.call(this);}
function Bjw(){var a=new G0();AVm(a);return a;}
function AVm(a){P(a);}
function W$(){Fh.call(this);}
function Bjx(){var a=new W$();A1t(a);return a;}
function A1t(a){P(a);}
function E2(){BD.call(this);}
function Bjy(){var a=new E2();A71(a);return a;}
function A71(a){P(a);}
function Oo(){var a=this;D.call(a);a.H4=null;a.BY=0.0;a.Gc=0.0;a.lk=null;a.mY=null;a.rE=null;a.h2=0;}
function AQ$(a,b){var c;if(b!==null){a.mY=b;return a;}c=new Cc;Bo(c,B(309));M(c);}
function A$N(a,b){return;}
function ADP(a,b){var c;if(b!==null){a.rE=b;return a;}c=new Cc;Bo(c,B(309));M(c);}
function A6o(a,b){return;}
function UT(a,b,c,d){var e,f,$$je;if(!(a.h2==2&&!d)&&a.h2!=3){a.h2=d?2:1;while(true){try{e=AGo(a,b,c);}catch($$e){$$je=Q($$e);if($$je instanceof B6){f=$$je;M(A5a(f));}else{throw $$e;}}if(I0(e))return e;if(JK(e)){if(d&&Fm(b)){if(a.mY===BiU)return Fi(Ct(b));if(Ct(c)<=Bi(a.lk))return Bjg;Ep(b,b.bk+Ct(b)|0);if(a.mY===Bgh)Nq(c,a.lk);}return e;}if(Qj(e)){if(a.mY===BiU)return e;if(a.mY===Bgh){if(Ct(c)<Bi(a.lk))return Bjg;Nq(c,a.lk);}Ep(b,b.bk+LC(e)|0);}else if(My(e)){if(a.rE===BiU)break;if(a.rE===Bgh){if(Ct(c)<Bi(a.lk))return Bjg;Nq(c,
a.lk);}Ep(b,b.bk+LC(e)|0);}}return e;}b=new D3;P(b);M(b);}
function ACm(a,b){if(a.h2!=3&&a.h2!=2){b=new D3;P(b);M(b);}a.h2=3;return Bjh;}
function ARB(a){a.h2=0;return a;}
function AJT(a,b){var c,d;if(a.h2&&a.h2!=3){b=new D3;P(b);M(b);}if(!Ct(b))return AHs(0);if(a.h2)ARB(a);c=AHs(DE(8,Ct(b)*a.BY|0));while(true){d=UT(a,b,c,0);if(JK(d))break;if(I0(d))c=VL(a,c);if(!NE(d))continue;Se(d);}b=UT(a,b,c,1);if(NE(b))Se(b);while(!JK(ACm(a,c))){c=VL(a,c);}HA(c);return c;}
function VL(a,b){var c,d,e;c=b.mk;d=Pc(c,DE(8,c.data.length*2|0));e=ANa(d,0,d.data.length);Ep(e,b.bk);return e;}
function AYN(a,b){return Bjh;}
function A5v(a){return;}
function Sr(){}
function SB(){}
function Po(){var a=this;D.call(a);a.wr=null;a.Ba=null;a.Iz=0;a.Jw=0;}
function APt(a){if(!a.Iz){a.wr.CW=null;Fw(a.wr);CM(a.Ba,null);}}
function LK(){Oo.call(this);}
function AGo(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(CB(Ct(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(CB(Ct(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&Fm(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=CB(Ct(b)+k|0,e.length);AKo(b,d,k,g-k|0);f=0;}if(!Fm(c)){l=!Fm(b)&&f>=g?Bjh:Bjg;break a;}k=CB(Ct(c),i.length);m=new WD;m.Ar=b;m.EB=c;l=ARY(a,d,f,g,h,0,k,m);f=m.we;if(l===null&&0==m.qL)l=Bjh;ASA(c,h,0,m.qL);if(l!==null)break;}}Ep(b,b.bk-(g-f|0)|0);return l;}
function Rn(){LK.call(this);}
function ARY(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NT(h))break a;i=Bjh;break a;}n=k+1|0;k=j[k];if(!Hr(a,k)){c=n+(-2)|0;i=Fi(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NT(h))break a;i=Bjh;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Hr(a,m))break b;if(!Hr(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(Ox(p)){c=k+(-3)|0;i=Fi(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Fi(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NT(h))break a;i=Bjh;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AJw(h,2))break a;i=Bjg;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Hr(a,m))break c;if(!Hr(a,o))break c;if(!Hr(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=IK(q);m=c+1|0;j[c]=Id(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=Fi(1);break a;}c=k+(-3)|0;i=Fi(1);}h.we=
c;h.qL=f;return i;}
function Hr(a,b){return (b&192)!=128?0:1;}
function DZ(){var a=this;BD.call(a);a.hH=0;a.IW=null;}
function AHc(a,b){var c=new DZ();AVn(c,a,b);return c;}
function AVn(a,b,c){a.IW=b;P(a);a.hH=c;}
function ANF(){var a=this;D.call(a);a.JA=0;a.GU=0;a.HZ=Long_ZERO;a.Ja=0;a.Bc=0;a.pt=null;a.yT=null;a.AE=null;a.JY=0;a.HG=Long_ZERO;a.GW=0;a.Ii=Long_ZERO;}
function BcB(){var a=new ANF();A8R(a);return a;}
function A8R(a){a.JA=0;a.GU=0;a.Bc=255;a.GW=0;a.Ii=Long_ZERO;}
function O1(){D.call(this);this.ml=0;}
var Bjz=null;function AWr(){var a=new O1();Zj(a);return a;}
function Zj(a){a.ml=0;}
function A2K(a,b,c,d){var e,f,g,h;e=a.ml^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=Bjz.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.ml=e^(-1);}
function A6B(a){a.ml=0;}
function A92(a,b){a.ml=Long_and(b,new Long(4294967295, 0)).lo;}
function A7H(a){return Long_and(Long_fromInt(a.ml),new Long(4294967295, 0));}
function AFG(){var b,c,d;Bjz=null;Bjz=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}Bjz.data[b]=d;b=b+1|0;}}
function Jf(){var a=this;D.call(a);a.R=0.0;a.M=0.0;a.S=0.0;a.V=0.0;a.U=0.0;a.W=0.0;}
var BjA=null;var BeX=0;function Nx(b,c,d,e,f,g){var h;h=new Jf;h.R=b;h.M=c;h.S=d;h.V=e;h.U=f;h.W=g;return h;}
function D4(b,c,d,e,f,g){var h,i;if(BeX>=BjA.s)T(BjA,Nx(0.0,0.0,0.0,0.0,0.0,0.0));h=BjA;i=BeX;BeX=i+1|0;return M$(Z(h,i),b,c,d,e,f,g);}
function M$(a,b,c,d,e,f,g){a.R=b;a.M=c;a.S=d;a.V=e;a.U=f;a.W=g;return a;}
function Jm(a,b,c,d){var e,f,g,h,i,j,k;e=a.R;f=a.M;g=a.S;h=a.V;i=a.U;j=a.W;k=S(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=S(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=S(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return D4(e,f,g,h,i,j);}
function Dw(a,b,c,d){return D4(a.R-b,a.M-c,a.S-d,a.V+b,a.U+c,a.W+d);}
function Un(a,b,c,d){return D4(a.R+b,a.M+c,a.S+d,a.V+b,a.U+c,a.W+d);}
function QB(a,b,c){var d,e;if(b.U>a.M&&b.M<a.U){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.V>a.R)d=c;else{d=a.R-b.V;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.R<a.V)e=d;else{e=a.V-b.R;if(e<=d)e=d;}return e;}return c;}return c;}
function Wj(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.W>a.S&&b.S<a.W){if(c<=0.0)d=c;else if(b.U>a.M)d=c;else{d=a.M-b.U;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.M<a.U)e=d;else{e=a.U-b.M;if(e<=d)e=d;}return e;}return c;}return c;}
function Uq(a,b,c){var d,e;if(b.V>a.R&&b.R<a.V){if(b.U>a.M&&b.M<a.U){if(c<=0.0)d=c;else if(b.W>a.S)d=c;else{d=a.S-b.W;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.S<a.W)e=d;else{e=a.W-b.S;if(e<=d)e=d;}return e;}return c;}return c;}
function L$(a,b){return b.V>a.R&&b.R<a.V?(b.U>a.M&&b.M<a.U?(b.W>a.S&&b.S<a.W?1:0):0):0;}
function F3(a,b,c,d){a.R=a.R+b;a.M=a.M+c;a.S=a.S+d;a.V=a.V+b;a.U=a.U+c;a.W=a.W+d;return a;}
function AP3(a){return (a.V-a.R+a.U-a.M+a.W-a.S)/3.0;}
function Qk(a){return D4(a.R,a.M,a.S,a.V,a.U,a.W);}
function QY(a,b,c){var d,e,f,g,h,i,j,k;d=KT(b,c,a.R);e=KT(b,c,a.V);f=J3(b,c,a.M);g=J3(b,c,a.U);h=KE(b,c,a.S);i=KE(b,c,a.W);if(!RM(a,d))d=null;if(!RM(a,e))e=null;if(!Us(a,f))f=null;if(!Us(a,g))g=null;if(!U_(a,h))h=null;if(!U_(a,i))i=null;j=null;if(d!==null)j=d;if(e!==null&&!(j!==null&&EA(b,e)>=EA(b,j)))j=e;if(f!==null&&!(j!==null&&EA(b,f)>=EA(b,j)))j=f;if(g!==null&&!(j!==null&&EA(b,g)>=EA(b,j)))j=g;if(h!==null&&!(j!==null&&EA(b,h)>=EA(b,j)))j=h;if(i!==null&&!(j!==null&&EA(b,i)>=EA(b,j)))j=i;if(j===null)return null;k
=(-1);if(j===d)k=4;if(j===e)k=5;if(j===f)k=0;if(j===g)k=1;if(j===h)k=2;if(j===i)k=3;return A0M(0,0,0,k,j);}
function RM(a,b){return b===null?0:b.z>=a.M&&b.z<=a.U&&b.w>=a.S&&b.w<=a.W?1:0;}
function Us(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.w>=a.S&&b.w<=a.W?1:0;}
function U_(a,b){return b===null?0:b.x>=a.R&&b.x<=a.V&&b.z>=a.M&&b.z<=a.U?1:0;}
function Xn(a,b){a.R=b.R;a.M=b.M;a.S=b.S;a.V=b.V;a.U=b.U;a.W=b.W;}
function AEz(){BjA=Ci();BeX=0;}
function Qo(){}
function Bu(){Bq.call(this);}
var BjB=0;var Bgx=null;var BjC=0;var BjD=0;var BjE=0;var BjF=0.0;var BjG=0;var BjH=null;var BjI=0;var BjJ=0;var BjK=0.0;var BjL=0.0;var BjM=0.0;var BjN=0.0;var BjO=0.0;var BjP=0.0;var BjQ=0.0;var BjR=0.0;var BjS=0.0;var BjT=0;var Bf3=0.0;var Bf4=0.0;var Bf5=0.0;var Bf6=0.0;var BjU=0;var BjV=0;var BjW=0;var BjX=0.0;var BjY=0.0;var BjZ=0.0;var Bj0=0;var Bj1=0;var Bj2=0;var Bj3=0;var Bj4=null;var Bj5=0;var Bj6=null;var Bj7=0;var Bj8=null;var Bj9=0;var Bj$=null;var Bj_=null;var Bgw=null;var Bka=null;var Bkb=null;var Bkc
=null;var Bkd=null;var Bke=null;var Bkf=null;var Bgv=0;var Bkg=null;var Bkh=null;var Bki=null;var Bkj=null;var Bkk=null;var Bkl=null;var Bkm=null;var Bkn=null;var Bko=null;var Bkp=null;var Bkq=null;var Bkr=null;var Bks=null;var Bkt=null;var Bku=Long_ZERO;var Bkv=0;function BW(){BW=Bs(Bu);A1J();}
function Bkw(){var a=new Bu();APa(a);return a;}
function APa(a){BW();V1(a);}
function Bb(b){BW();a:{switch(b){case 2884:K9(2884);break a;case 2896:BjD=1;break a;case 2903:BjT=1;break a;case 2912:BjV=1;break a;case 2929:K9(2929);break a;case 3008:BjE=1;break a;case 3042:K9(3042);break a;case 3553:BjC=1;break a;case 32823:K9(32823);break a;case 32826:break;default:break a;}}}
function HO(b){var c;BW();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Be();BdS.depthFunc(c);}
function SF(b,c){BW();BjF=c;}
function Db(b){BW();Bj3=b;}
function GM(){BW();switch(Bj3){case 5888:break;case 5889:return Bj6.data[Bj7];case 5890:return Bj8.data[Bj9];default:}return Bj4.data[Bj5];}
function C_(){BW();Fq(GM());}
function Hk(b,c,d,e){BW();Be();Bed.data[0]=b;Bed.data[1]=c;Bed.data[2]=d;Bed.data[3]=e;BdS.viewport(b,c,d,e);}
function D5(b){BW();Be();BdS.clear(b);}
function Iu(b,c,d,e,f,g){var h,i,j,k;BW();h=GM();i=c-b;h.ev=2.0/i;h.et=0.0;h.eu=0.0;h.es=0.0;h.ey=0.0;j=e-d;h.ez=2.0/j;h.ew=0.0;h.ex=0.0;h.eD=0.0;h.eB=0.0;k=g-f;h.eC=2.0/k;h.eA=0.0;h.gW= -(c+b)/i;h.gX= -(e+d)/j;h.gU=(g+f)/k;h.gV=1.0;}
function Bw(b,c,d){var e;BW();L6(Bkb,b,c,d);e=GM();Vh(e,Bkb,e);if(!BjG)return;e=new Cc;Bo(e,B(310));M(e);}
function HE(b,c,d,e){BW();Be();BdS.clearColor(b,c,d,e);}
function Bd(b){BW();a:{switch(b){case 2884:J_(2884);break a;case 2896:BjD=0;break a;case 2903:BjT=0;break a;case 2912:BjV=0;break a;case 2929:J_(2929);break a;case 3008:BjE=0;break a;case 3042:J_(3042);break a;case 3553:BjC=0;break a;case 32823:J_(32823);break a;case 32826:break;default:break a;}}}
function BU(b,c,d,e){BW();BjK=b;BjL=c;BjM=d;BjN=e;}
function SJ(b,c,d,e,f,g,h,i,j){var k,l,m,n;BW();Be();if(j===null){k=BdS;l=null;k.texImage2D(3553,c,32856,e,f,g,6408,5121,l);}else{m=Ct(j);k=Bee;n=0;while(n<m){h=(ALV(j)&255)<<16>>16;k[n]=h;n=n+1|0;}j=new Uint8Array(Bee.buffer,0,m);BdS.texImage2D(3553,c,32856,e,f,g,6408,5121,j);}}
function B3(){BW();a:{switch(Bj3){case 5888:break;case 5889:if(Bj7>=(Bj6.data.length-1|0)){Cg(Da(),B(311));break a;}Bj7=Bj7+1|0;GQ(Bj6.data[Bj7],Bj6.data[Bj7-1|0]);break a;case 5890:if(Bj9>=(Bj8.data.length-1|0)){Cg(Da(),B(312));break a;}Bj9=Bj9+1|0;GQ(Bj8.data[Bj9],Bj8.data[Bj9-1|0]);break a;default:}if(Bj5>=(Bj4.data.length-1|0))Cg(Da(),B(313));else{Bj5=Bj5+1|0;GQ(Bj4.data[Bj5],Bj4.data[Bj5-1|0]);}}}
function Bv(b,c,d,e){var f;BW();L6(Bkb,c,d,e);f=GM();W8(f,b*0.01745329238474369,Bkb,f);if(!BjG)return;f=new Cc;Bo(f,B(310));M(f);}
function BE(){BW();a:{switch(Bj3){case 5888:break;case 5889:if(Bj7<=0){Cg(Da(),B(314));break a;}Bj7=Bj7-1|0;break a;case 5890:if(Bj9<=0){Cg(Da(),B(315));break a;}Bj9=Bj9-1|0;break a;default:}if(Bj5<=0)Cg(Da(),B(316));else Bj5=Bj5-1|0;}}
function T1(b,c){BW();a:{switch(b){case 2982:break;case 2983:T3(Bj6.data[Bj7],c);break a;default:}T3(Bj4.data[Bj5],c);}}
function CC(b,c,d){var e;BW();L6(Bkb,b,c,d);ZK(GM(),Bkb);if(!BjG)return;e=new Cc;Bo(e,B(310));M(e);}
function Dg(b,c){BW();BjW=b==1&&c==771?1:0;Be();BdS.blendFunc(b,c);}
function Gw(b){BW();Be();BdS.depthMask(!!b);}
function FH(b,c,d,e){BW();Be();BdS.colorMask(!!b,!!c,!!d,!!e);}
function Cp(b,c){var d,e;BW();d=ANR(Bgx,c);Be();e=BdS;d=d!==null?d.BS:null;e.bindTexture(3553,d);}
function Ej(b,c,d){BW();if(!(d!=33071&&d!=10496))d=33071;Be();BdS.texParameteri(b,c,d);}
function Cj(b,c,d){var e;BW();e=Ed(b*b+c*c+d*d);BjO=b/e;BjP=c/e;BjQ=d/e;}
function Ol(b){BW();Bj_=b;R0(b);}
function FV(b){var c;BW();if(!BjG){c=CQ(Bka,CZ(b));if(c!==null&&c.jM>0){Rx(c.lP|0|(BjT&&BjD?8:0)|(!BjV?0:16)|(!BjE?0:32)|(!BjC?0:64));Ol(c.rm);PH(0,c.jM);Bj1=Bj1+((c.jM*6|0)/4|0)|0;Bj2=Bj2+(c.jM/2|0)|0;}}}
function FK(b,c){BW();if(!BjG){BjH=CQ(Bgw,CZ(b));if(BjH!==null){BjH.lP=(-1);BjH.jM=0;BjG=1;}}}
function Ee(){var b,c,d,e;BW();if(BjG){BjG=0;Be();b=BeL.buffer;c=BeK;d=new Int32Array(b,0,c);BeK=0;e=UR(d);if(e>0){if(BjH.o2===null){BQ(Bka,CZ(BjH.BA),BjH);BjH.rm=Pg();BjH.o2=L_();b=Ph(BjH.lP);Ol(BjH.rm);Hh(34962,BjH.o2);RG(b);}Hh(34962,BjH.o2);PJ(34962,d,35044);Bj0=Bj0+e|0;}}}
function F9(b,c,d){BW();BjK=b;BjL=c;BjM=d;BjN=1.0;}
function OO(b,c){BW();Be();BdS.polygonOffset(b,c);}
function W4(b){BW();a:{switch(b){case 32886:break;case 32888:BjJ=1;break a;default:break a;}BjI=1;}}
function Tz(b){BW();a:{switch(b){case 32886:break;case 32888:BjJ=0;break a;default:break a;}BjI=0;}}
function Qf(){BW();return 0|(!BjI?0:1)|(!BjJ?0:4);}
function Rx(b){var c;BW();c=Ph(b);Bkg=c;AQ6(c);if(BjE)AI1(c,BjF);ALU(c,BjK,BjL,BjM,BjN);if(BjV){ALw(c,(!BjW?0:2)+BjU|0);AQh(c,Bf3,Bf4,Bf5,Bf6);AKS(c,BjZ);APS(c,BjX,BjY);}AMA(c,Bj4.data[Bj5]);AM9(c,Bj6.data[Bj7]);Z3(c,Bj8.data[Bj9]);if(BjT&&BjD){ACd(c,BjO,BjP,BjQ);ANj(c,Bke,Bkf);}AOQ(c,BjR,BjS);}
function ALz(b,c,d,e){var f;BW();if(BjG){if(b!=7)Cg(Da(),B(317));else{if(BjH.lP==(-1))BjH.lP=Qf();else if(BjH.lP!=Qf())Cg(Da(),B(318));f=BjH;f.jM=f.jM+d|0;Be();e=e;if((BeK+e.length|0)<BeL.length){f=BeL;b=BeK;f.set(e,b);BeK=BeK+e.length|0;}}}else{Bj0=Bj0+UR(e)|0;Bj1=Bj1+d|0;Rx(0|(!BjI?0:1)|(!BjJ?0:4)|(BjT&&BjD?8:0)|(!BjV?0:16)|(!BjE?0:32)|(!BjC?0:64));Ol(Bkg.uc);Hh(34962,Bkg.uQ);if(!Bkg.xh){Bkg.xh=1;PJ(34962,Bkh,35048);}f=BdS;e=e;f.bufferSubData(34962,0,e);if(b==7){PH(c,d);Bj2=Bj2+(d/2|0)|0;}else{a:{b:{switch
(b){case 1:break;case 2:case 4:break b;case 3:b=3;Bj2=Bj2+(d-1|0)|0;break a;case 5:b=5;Bj2=Bj2+(d-2|0)|0;break a;case 6:b=6;Bj2=Bj2+(d-2|0)|0;break a;default:break b;}b=1;Bj2=Bj2+(d/2|0)|0;break a;}b=4;Bj2=Bj2+(d/3|0)|0;}BdS.drawArrays(b,c,d);}}}
function PH(b,c){var d,e,f,g,h,i,j;BW();if(Bj$===null){if(BjB)d=ALZ($rt_createIntArray(49200));else{e=A5L(0,196800,$rt_createByteArray(196800),0,196800,1,0);e.kN=Bgy;d=AHO(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;h=h<<16;NS(d,g|h);NS(d,j|h);NS(d,i|j<<16);f=f+1|0;}AIw(d);Bj$=L_();Hh(34963,Bj$);g=Ct(d);e=new Int32Array(Bee.buffer);h=0;while(h<g){i=AGf(d);e[h]=i;h=h+1|0;}d=Bee.buffer;g=g*4|0;e=new Uint8Array(d,0,g);BdS.bufferData(34963,e,35044);}if(!Bj_.vT){Bj_.vT=1;Hh(34963,Bj$);}g=(c*6|0)/4|0;b
=(b*6|0)/4|0;Be();BdS.drawElements(4,g,5123,b);}
function Me(b,c){BW();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}BjU=2;break a;}BjU=1;}}}
function GL(b,c){BW();a:{switch(b){case 2914:break;case 2915:BjX=c;break a;case 2916:BjY=c;break a;default:break a;}BjZ=c;}}
function A1J(){var b,c,d;Be();BjB=1;Bgx=A_I(256);BjC=0;BjD=0;BjE=0;BjF=0.10000000149011612;BjG=0;BjH=null;BjI=0;BjJ=0;BjK=1.0;BjL=1.0;BjM=1.0;BjN=1.0;BjO=1.0;BjP=0.0;BjQ=0.0;BjR=0.0;BjS=0.0;BjT=0;Bf3=1.0;Bf4=1.0;Bf5=1.0;Bf6=1.0;BjU=1;BjV=0;BjW=0;BjX=1.0;BjY=1.0;BjZ=1.0;Bj0=0;Bj1=0;Bj2=0;Bj3=5888;Bj4=J(Eu,32);Bj5=0;Bj6=J(Eu,6);Bj7=0;Bj8=J(Eu,16);Bj9=0;b=0;while(b<Bj4.data.length){c=Bj4.data;d=new Eu;Fq(d);c[b]=d;b=b+1|0;}b=0;while(b<Bj6.data.length){c=Bj6.data;d=new Eu;Fq(d);c[b]=d;b=b+1|0;}b=0;while(b<Bj8.data.length)
{c=Bj8.data;d=new Eu;Fq(d);c[b]=d;b=b+1|0;}Bj$=null;Bj_=null;Bgw=C8();Bka=C8();Bkb=new Vb;Bkc=new G_;Bkd=new G_;Bke=new G_;Bkf=new G_;Bgv=0;Bkg=null;Bkh=new Int32Array(525000);Bki=null;Bkj=null;Bkk=null;Bkl=null;Bkm=null;Bkn=A_I(256);d=new Eu;Fq(d);Bko=KC(d);Bkp=$rt_createFloatArray(16);Bkq=$rt_createFloatArray(16);d=new Eu;Fq(d);Bkr=d;d=new Eu;Fq(d);Bks=d;Bkt=new G_;Bku=Long_ZERO;Bkv=0;}
function ACJ(){D.call(this);}
function Bkx(){var a=new ACJ();AUv(a);return a;}
function AUv(a){return;}
function DV(){var b,c;Be();if(!BeM)a:{Bem=null;if(!P4(Bd5)){b=Tv(Bd5,0);Bem=b;if(b!==null){c=1;break a;}}c=0;}else{OB(Bd5);Bem=null;Beo.data[29]=0;Beo.data[157]=0;Beo.data[28]=0;Beo.data[219]=0;Beo.data[220]=0;BeM=0;c=0;}return c;}
function CV(){Be();return Bem===null?0:DC($rt_str(Bem.type),B(319))?0:1;}
function Bh(){Be();return Bem===null?(-1):Ub(Bem.which);}
function AP2(b){Be();Bea=b;}
function BO(b){Be();if(BeM){Beo.data[28]=0;Beo.data[29]=0;Beo.data[157]=0;Beo.data[219]=0;Beo.data[220]=0;}return Beo.data[b];}
function NH(){var a=this;D.call(a);a.rx=0;a.tm=0;a.m7=0;a.lu=0;a.hg=0;a.iu=0;a.ef=0;a.mv=0;a.lj=0;a.t3=null;a.tV=null;a.xo=null;a.uy=null;a.yJ=null;a.ft=null;a.gi=null;a.BQ=null;a.f$=null;a.Cc=null;a.Dj=null;a.ng=null;a.wz=null;a.zU=0;a.jZ=0;a.cC=0;a.du=0;a.pR=0;}
var Bky=null;var Bkz=null;function Baj(a){var b=new NH();APj(b,a);return b;}
function APj(a,b){var c,d;a.rx=1;a.tm=1;a.m7=0;a.lu=0;a.hg=0;a.iu=1;a.ef=0;a.mv=0;a.lj=1;a.t3=E9(B(320),17);a.tV=E9(B(321),30);a.xo=E9(B(322),31);a.uy=E9(B(323),32);a.yJ=E9(B(324),57);a.ft=E9(B(325),23);a.gi=E9(B(326),16);a.BQ=E9(B(327),20);a.f$=E9(B(328),33);a.Cc=E9(B(329),28);a.Dj=E9(B(330),19);c=J(Vz,11);d=c.data;d[0]=a.t3;d[1]=a.tV;d[2]=a.xo;d[3]=a.uy;d[4]=a.yJ;d[5]=a.gi;d[6]=a.ft;d[7]=a.BQ;d[8]=a.f$;d[9]=a.Cc;d[10]=a.Dj;a.ng=c;a.zU=12;a.jZ=2;a.cC=0;a.du=0;a.pR=0;a.wz=b;}
function K$(a,b){var c;c=new V;X(c);c=I(I(c,a.ng.data[b].ED),B(12));b=a.ng.data[b].bI;Be();return W(I(c,b>=0&&b<256?BeI.data[b]:B(10)));}
function Ya(a,b,c){a.ng.data[b].bI=c;}
function Ea(a,b,c){if(!b)a.rx=a.rx?0:1;if(b==1)a.tm=a.tm?0:1;if(b==2)a.m7=a.m7?0:1;if(b==3)a.lu=a.lu?0:1;if(b==4)a.hg=(a.hg+c|0)&3;if(b==5)a.iu=a.iu?0:1;if(b==6)a.ef=a.ef?0:1;if(b==7)a.mv=a.mv?0:1;if(b==8)a.jZ=(a.jZ+c|0)&3;if(b==9){a.lj=a.lj?0:1;Jj(a.wz.dY);}if(b==10){a.du=a.du?0:1;if(a.du){a.hg=2;a.iu=0;a.lj=0;a.ef=0;}Jj(a.wz.dY);}if(b==11)a.pR=a.pR?0:1;}
function Q4(a,b){var c;a:{if(!b){c=new V;X(c);c=W(I(I(c,B(331)),!a.rx?B(332):B(333)));break a;}if(b==1){c=new V;X(c);c=W(I(I(c,B(334)),!a.tm?B(332):B(333)));break a;}if(b==2){c=new V;X(c);c=W(I(I(c,B(335)),!a.m7?B(332):B(333)));break a;}if(b==3){c=new V;X(c);c=W(I(I(c,B(336)),!a.lu?B(332):B(333)));break a;}if(b==4){c=new V;X(c);c=W(I(I(c,B(337)),Bky.data[a.hg]));break a;}if(b==5){c=new V;X(c);c=W(I(I(c,B(338)),!a.iu?B(332):B(333)));break a;}if(b==6){c=new V;X(c);c=W(I(I(c,B(339)),!a.ef?B(332):B(333)));break a;}if
(b==7){c=new V;X(c);c=W(I(I(c,B(340)),!a.mv?B(332):B(333)));break a;}if(b==8){c=new V;X(c);c=W(I(I(c,B(341)),Bkz.data[a.jZ]));break a;}if(b==9){c=new V;X(c);c=W(I(I(c,B(342)),!a.lj?B(343):B(344)));break a;}if(b==10){c=new V;X(c);c=W(I(I(c,B(345)),!a.du?B(332):B(333)));break a;}if(b!=11){c=B(3);break a;}c=new V;X(c);c=W(I(I(c,B(346)),!a.pR?B(332):B(333)));}return c;}
function A2E(a){return;}
function A1a(a){return;}
function AHX(){var b,c;b=J(B4,4);c=b.data;c[0]=B(347);c[1]=B(348);c[2]=B(349);c[3]=B(350);Bky=b;b=J(B4,4);c=b.data;c[0]=B(351);c[1]=B(352);c[2]=B(353);c[3]=B(354);Bkz=b;}
function Is(){var a=this;D.call(a);a.t4=null;a.p1=0;a.mD=0;a.oN=0;a.oO=0;a.kZ=0;a.k8=0;a.lm=0;a.BD=0;a.Es=0;a.Ds=0;a.nX=0;a.o6=0;a.p9=0;a.fw=0;a.g2=null;a.E0=0;a.A5=0;a.DO=0;a.HA=0.0;a.i3=0;a.E_=null;a.It=0;a.xL=0;a.JT=0;a.op=0;a.kK=0;a.gl=null;a.jh=null;}
var BkA=null;var BeZ=0;function TB(){TB=Bs(Is);A_x();}
function BbI(a,b,c,d,e,f,g){var h=new Is();AJd(h,a,b,c,d,e,f,g);return h;}
function AJd(a,b,c,d,e,f,g,h){TB();a.p1=(-1);a.fw=0;a.g2=$rt_createBooleanArray(2);a.xL=1;a.kK=0;a.gl=Ci();a.t4=b;a.jh=c;a.lm=g;a.k8=g;a.kZ=g;a.HA=D_((Bj(a.kZ,a.kZ)+Bj(a.k8,a.k8)|0)+Bj(a.lm,a.lm)|0)/2.0;a.p1=h;a.mD=(-999);St(a,d,e,f);a.i3=0;}
function St(a,b,c,d){var e,f;if(!(b==a.mD&&c==a.oN&&d==a.oO)){P0(a);a.mD=b;a.oN=c;a.oO=d;a.E0=b+(a.kZ/2|0)|0;a.A5=c+(a.k8/2|0)|0;a.DO=d+(a.lm/2|0)|0;a.nX=b&1023;a.o6=c;a.p9=d&1023;a.BD=b-a.nX|0;a.Es=c-a.o6|0;a.Ds=d-a.p9|0;a.E_=Nx(b-2.0,c-2.0,d-2.0,(b+a.kZ|0)+2.0,(c+a.k8|0)+2.0,(d+a.lm|0)+2.0);FK(a.p1+2|0,4864);e=D4(a.nX-2.0,a.o6-2.0,a.p9-2.0,(a.nX+a.kZ|0)+2.0,(a.o6+a.k8|0)+2.0,(a.p9+a.lm|0)+2.0);BA();f=BeW;Bz(f);Bg(f,e.R,e.U,e.S);Bg(f,e.V,e.U,e.S);Bg(f,e.V,e.M,e.S);Bg(f,e.R,e.M,e.S);Bg(f,e.R,e.M,e.W);Bg(f,e.V,
e.M,e.W);Bg(f,e.V,e.U,e.W);Bg(f,e.R,e.U,e.W);Bg(f,e.R,e.M,e.S);Bg(f,e.V,e.M,e.S);Bg(f,e.V,e.M,e.W);Bg(f,e.R,e.M,e.W);Bg(f,e.R,e.U,e.W);Bg(f,e.V,e.U,e.W);Bg(f,e.V,e.U,e.S);Bg(f,e.R,e.U,e.S);Bg(f,e.R,e.M,e.W);Bg(f,e.R,e.U,e.W);Bg(f,e.R,e.U,e.S);Bg(f,e.R,e.M,e.S);Bg(f,e.V,e.M,e.S);Bg(f,e.V,e.U,e.S);Bg(f,e.V,e.U,e.W);Bg(f,e.V,e.M,e.W);Bt(f);Ee();K1(a);}}
function ADo(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.i3)return;BeZ=BeZ+1|0;b=a.mD;c=a.oN;d=a.oO;e=a.mD+a.kZ|0;f=a.oN+a.k8|0;g=a.oO+a.lm|0;h=0;while(h<2){a.g2.data[h]=1;h=h+1|0;}BkB=0;i=Gb();DF(i,a.gl);Dy(a.gl);j=new Iz;k
=a.t4;l=b-1|0;m=c-1|0;n=d-1|0;o=e+1|0;h=f+1|0;p=g+1|0;$p=1;case 1:AEB(j,k,l,m,n,o,h,p);if(C()){break _;}k=A8u(j);l=0;a:{while(true){if(l>=2)break a;q=0;r=0;s=0;t=c;while(t<f){m=d;while(m<g){n=b;if(n<e){$p=2;continue _;}m=m+1|0;}t=t+1|0;}if(!s)r=0;else{Bt(BkA);Ee();Fb(BkA,0.0,0.0,0.0);}if(r)a.g2.data[l]=0;if(!q)break;l=l+1|0;}}u=Gb();DF(u,a.gl);Fv(u,i);DF(a.jh,u);Fv(i,a.gl);Ge(a.jh,i);a.op=BkB;a.kK=1;return;case 2:$z=HD(j,n,t,m);if(C()){break _;}p=$z;if(p>0){if(!s){s=1;FK(a.p1+l|0,4864);Bz(BkA);Fb(BkA,a.nX-a.mD
|0,a.o6-a.oN|0,a.p9-a.oO|0);}if(!l){L();if(Be0.data[p] instanceof Eg){$p=3;continue _;}}L();v=Be0.data[p];o=S(v.pT(),l);if(o)q=1;else if(!o){$p=4;continue _;}}n=n+1|0;b:{c:while(true){if(n<e){continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Bt(BkA);Ee();Fb(BkA,0.0,0.0,0.0);}if(r)a.g2.data[l]=0;if(!q)break c;l=l+1|0;if(l>=2)break b;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Gb();DF(u,a.gl);Fv(u,i);DF(a.jh,u);Fv(i,a.gl);Ge(a.jh,i);a.op=BkB;a.kK=1;return;case 3:$z=AFZ(j,n,t,m);if(C()){break _;}w=$z;if(AIm(BkC,
w))T(a.gl,w);L();v=Be0.data[p];o=S(v.pT(),l);if(o)q=1;else if(!o){$p=4;continue _;}n=n+1|0;d:{e:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g){t=t+1|0;while(t>=f){if(!s)r=0;else{Bt(BkA);Ee();Fb(BkA,0.0,0.0,0.0);}if(r)a.g2.data[l]=0;if(!q)break e;l=l+1|0;if(l>=2)break d;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Gb();DF(u,a.gl);Fv(u,i);DF(a.jh,u);Fv(i,a.gl);Ge(a.jh,i);a.op=BkB;a.kK=1;return;case 4:$z=AN7(k,v,n,t,m);if(C()){break _;}o=$z;r=r|o;n=n+1|0;a:{f:while(true){if(n<e){$p=2;continue _;}m=m+1|0;while(m>=g)
{t=t+1|0;while(t>=f){if(!s)r=0;else{Bt(BkA);Ee();Fb(BkA,0.0,0.0,0.0);}if(r)a.g2.data[l]=0;if(!q)break f;l=l+1|0;if(l>=2)break a;q=0;r=0;s=0;t=c;}m=d;}n=b;}}u=Gb();DF(u,a.gl);Fv(u,i);DF(a.jh,u);Fv(i,a.gl);Ge(a.jh,i);a.op=BkB;a.kK=1;return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function G6(a,b){var c,d,e;c=b.d-a.E0;d=b.j-a.A5;e=b.e-a.DO;return c*c+d*d+e*e;}
function P0(a){var b;b=0;while(b<2){a.g2.data[b]=1;b=b+1|0;}a.fw=0;a.kK=0;}
function ARN(a){P0(a);a.t4=null;}
function PQ(a,b){return !a.fw?(-1):a.g2.data[b]?(-1):a.p1+b|0;}
function ASj(a,b){a.fw=MN(b,a.E_);}
function AHC(a){return !a.kK?0:a.g2.data[0]&&a.g2.data[1]?1:0;}
function K1(a){a.i3=1;}
function A_x(){BA();BkA=BeW;BeZ=0;}
function ASk(){var a=this;E4.call(a);a.js=null;a.lM=0;}
function A7K(){var a=new ASk();AXT(a);return a;}
function A$o(a){var b=new ASk();Y$(b,a);return b;}
function AXT(a){Y$(a,32);}
function Y$(a,b){a.js=$rt_createByteArray(b);}
function A7Y(a,b){var c,d;RB(a,a.lM+1|0);c=a.js.data;d=a.lM;a.lM=d+1|0;c[d]=b<<24>>24;}
function Rz(a,b,c,d){var e,f,g,h,i;RB(a,a.lM+d|0);e=0;while(e<d){f=b.data;g=a.js.data;h=a.lM;a.lM=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function RB(a,b){if(a.js.data.length<b){b=DE(b,(a.js.data.length*3|0)/2|0);a.js=Om(a.js,b);}}
function Ij(a){return Om(a.js,a.lM);}
function J1(){B6.call(this);}
function BkD(){var a=new J1();A5P(a);return a;}
function A5P(a){P(a);}
function Ok(){}
function F1(){var a=this;D.call(a);a.f7=null;a.dZ=null;a.l9=null;a.gL=null;a.kV=null;a.fD=null;a.dU=Long_ZERO;a.sr=Long_ZERO;a.sV=Long_ZERO;a.rv=Long_ZERO;a.ge=0;a.hU=0;a.sf=0;a.sq=0;a.bg=null;a.i2=0;a.C_=null;a.q=null;a.fl=0;a.p2=0;a.fk=0;a.tG=0;a.cv=null;a.hl=null;a.lz=Long_ZERO;a.tk=null;a.wN=Long_ZERO;a.I5=null;a.ne=null;a.ql=null;a.eM=0;a.ud=0;}
var BkE=null;var BkF=null;var BkG=0;function BkH(a,b){var c=new F1();Q5(c,a,b);return c;}
function ASm(b){var c,d,e,f,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=new V;X(c);c=W(I(I(c,b),B(355)));$p=1;case 1:$z=ALN(c);if(C()){break _;}d=$z;c=Dz();e=new V;X(e);Cg(c,W(I(I(e,b),B(355))));if(d===null)return null;a:{try{e=MC(M0(O6(Ux(d))),B(356));}catch($$e){$$je=Q($$e);if($$je instanceof BL){f=$$je;break a;}else{throw $$e;}}return e;}B9(f);return null;default:Fa();}}C4().s(b,c,d,e,f,$p);}
function Q5(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.eM=0;a.f7=Ci();a.dZ=Ci();a.l9=Ci();a.gL=Bb_();a.kV=Gb();a.fD=Ci();a.dU=Long_ZERO;a.sr=Long_fromInt(8961023);a.sV=Long_fromInt(12638463);a.rv=Long_fromInt(16777215);a.ge=0;a.hU=Lt(new DB);a.sf=1013904223;a.sq=0;a.q=new DB;a.tG=0;a.cv=Ci();a.lz=Long_ZERO;a.wN=Long_ZERO;a.ne=Ci();a.ql=Ci();a.I5=b;BkF=b;b=new V;X(b);b
=W(I(I(b,BkF),B(355)));$p=1;case 1:$z=ALN(b);if(C()){break _;}d=$z;b=Dz();e=new V;X(e);Cg(b,W(I(I(e,BkF),B(355))));f=d!==null?1:0;a:{a.tG=f;if(d!==null){try{g=MC(M0(O6(Ux(d))),B(356));a.lz=Mg(g,B(357));a.fl=FX(g,B(358));a.p2=FX(g,B(359));a.fk=FX(g,B(360));a.dU=Mg(g,B(361));a.wN=Mg(g,B(362));a.tk=MC(g,B(5));break a;}catch($$e){$$je=Q($$e);if($$je instanceof BD){h=$$je;}else{throw $$e;}}B9(h);}}f=0;if(Long_eq(a.lz,Long_ZERO)){a.lz=c;f=1;}a.hl=ABu(a,BkF);if(!f){Re(a);return;}a.ud=1;a.fl=0;a.p2=64;a.fk=0;f=a.fl;i
=a.fk;$p=2;case 2:$z=AJX(a,f,i);if(C()){break _;}f=$z;L();if(f!=Bfl.b?0:1){a.ud=0;Re(a);return;}a.fl=a.fl+(E(a.q,64)-E(a.q,64)|0)|0;a.fk=a.fk+(E(a.q,64)-E(a.q,64)|0)|0;f=a.fl;i=a.fk;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ABy(a){return a.hl;}
function ABu(a,b){var c,d,e;c=new IN;d=new OC;d.r7=b;e=new SE;e.Gl=$rt_createIntMultiArray([32,32]);e.t=a;e.a=new DB;e.y0=Hb(e.a,16);e.y1=Hb(e.a,16);e.yZ=Hb(e.a,8);e.tQ=Hb(e.a,4);e.y3=Hb(e.a,4);e.y4=Hb(e.a,10);e.y2=Hb(e.a,16);e.iU=Hb(e.a,8);c.be=J(Jb,1024);c.fU=(-999999999);c.gr=(-999999999);c.ji=A9B(a,$rt_createByteArray(32768),0,0);c.ji.Eq=1;c.ji.qe=1;c.gp=a;c.eg=d;c.kU=e;return c;}
function AQa(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.fl;c=a.fk;$p=1;case 1:$z=AJX(a,b,c);if(C()){break _;}b=$z;if(b)return;a.fl=a.fl+(E(a.q,8)-E(a.q,8)|0)|0;a.fk=a.fk+(E(a.q,8)-E(a.q,8)|0)|0;b=a.fl;c=a.fk;continue _;default:Fa();}}C4().s(a,b,c,$p);}
function AJX(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=63;e=d+1|0;$p=1;case 1:$z=ACE(a,b,e,c);if(C()){break _;}f=$z;if(!f){$p=2;continue _;}d=e;e=d+1|0;continue _;case 2:$z=ACE(a,b,d,c);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AGu(a){var b,c,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{if(a.tk!==null){Y0(a.bg,a.tk);a.tk=null;}if(a.hl instanceof IN)MZ(a.hl,EY(a.bg.d|0)>>4,EY(a.bg.e|0)>>4);b=a.bg;$p=1;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){c=$$je;}else{throw $$e;}}B9(c);return;case 1:a:{try{AOn(a,b);if(C()){break _;}break a;}catch($$e){$$je=Q($$e);if($$je instanceof BD){c=$$je;}else{throw $$e;}}B9(c);}return;default:Fa();}}C4().s(a,b,c,$p);}
function ABN(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null)YQ(c,B(363));$p=1;case 1:AMU(a);if(C()){break _;}if(c===null){d=a.hl;$p=2;continue _;}d=B(364);$p=3;continue _;case 2:AN5(d,b,c);if(C()){break _;}return;case 3:ASd(c,d);if(C()){break _;}d=a.hl;$p=2;continue _;default:Fa();}}C4().s(a,b,c,d,$p);}
function AMU(a){var b,c,d,e,f,g,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=Ha();If(b,B(357),a.lz);Gz(b,B(358),a.fl);Gz(b,B(359),a.p2);Gz(b,B(360),a.fk);If(b,B(361),a.dU);If(b,B(362),a.wN);If(b,B(365),B_());if(a.bg!==null){c=Ha();ALC(a.bg,c);AN0(b,B(5),c);}c=Ha();HK(c,B(356),b);try{b=BM(I(I(BX(),BkF),B(366)));$p=1;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 1:try
{ALN(b);if(C()){break _;}b=BM(I(I(BX(),BkF),B(367)));$p=2;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 2:try{ALN(b);if(C()){break _;}b=BM(I(I(BX(),BkF),B(355)));$p=3;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 3:try{ALN(b);if(C()){break _;}e=A$o(131072);R8(c,AWq(e));b=BM(I(I(BX(),BkF),B(366)));f=Ij(e);g=1;$p=4;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 4:try
{AJp(b,f,g);if(C()){break _;}b=BM(I(I(BX(),BkF),B(367)));$p=5;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 5:try{$z=ALN(b);if(C()){break _;}f=$z;if(f!==null){b=BM(I(I(BX(),BkF),B(367)));$p=8;continue _;}b=BM(I(I(BX(),BkF),B(355)));c=BM(I(I(BX(),BkF),B(367)));$p=6;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 6:try{ANu(b,c);if(C()){break _;}b=BM(I(I(BX(),BkF),B(355)));$p=7;continue _;}catch($$e){$$je
=Q($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 7:try{$z=ALN(b);if(C()){break _;}f=$z;if(f!==null){b=BM(I(I(BX(),BkF),B(355)));$p=11;continue _;}b=BM(I(I(BX(),BkF),B(366)));c=BM(I(I(BX(),BkF),B(355)));$p=9;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 8:try{AL_(b);if(C()){break _;}b=BM(I(I(BX(),BkF),B(355)));c=BM(I(I(BX(),BkF),B(367)));$p=6;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 9:try
{ANu(b,c);if(C()){break _;}b=BM(I(I(BX(),BkF),B(366)));$p=10;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);return;case 10:a:{try{$z=ALN(b);if(C()){break _;}f=$z;if(f===null)break a;b=BM(I(I(BX(),BkF),B(366)));$p=12;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);}return;case 11:try{AL_(b);if(C()){break _;}b=BM(I(I(BX(),BkF),B(366)));c=BM(I(I(BX(),BkF),B(355)));$p=9;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){d=
$$je;}else{throw $$e;}}B9(d);return;case 12:a:{try{AL_(b);if(C()){break _;}break a;}catch($$e){$$je=Q($$e);if($$je instanceof BD){d=$$je;}else{throw $$e;}}B9(d);}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AAT(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b){$p=2;continue _;}c=a.hl;b=0;d=null;$p=1;case 1:$z=AN5(c,b,d);if(C()){break _;}b=$z;return b;case 2:AMU(a);if(C()){break _;}c=a.hl;b=0;d=null;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,$p);}
function ACE(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)b=0;else{if(c<128){e=b>>4;f=d>>4;$p=1;continue _;}b=0;}}else b=0;return b;case 1:$z=Z1(a,e,f);if(C()){break _;}g=$z;return FS(g,b&15,c,d&15);default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function Ms(a,b,c,d){return c>=0&&c<128?C5(a,b>>4,d>>4):0;}
function G4(a,b,c,d,e,f,g){var h,i;if(f>=0&&c<128){h=b>>4;b=d>>4;c=e>>4;d=g>>4;while(h<=c){i=b;while(i<=d){if(!C5(a,h,i))return 0;i=i+1|0;}h=h+1|0;}return 1;}return 0;}
function C5(a,b,c){return B2(a.hl,b,c);}
function X4(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b>>4;b=c>>4;$p=1;case 1:$z=Z1(a,d,b);if(C()){break _;}e=$z;return e;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function Z1(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.hl;$p=1;case 1:$z=AOl(d,b,c);if(C()){break _;}d=$z;return d;default:Fa();}}C4().s(a,b,c,d,$p);}
function AJu(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;g=b>>4;h=d>>4;$p=1;continue _;}return 0;case 1:$z=Z1(a,g,h);if(C()){break _;}i=$z;b=b&15;d=d&15;$p=2;case 2:$z=ADL(i,b,c,d,e,f);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ALA(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=Z1(a,f,g);if(C()){break _;}h=$z;g=b&15;b=d&15;$p=2;case 2:$z=ADI(h,g,c,b,e);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AB9(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACE(a,b,c,d);if(C()){break _;}e=$z;if(!e)f=Bgk;else{L();f=Be0.data[e].b_;}return f;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AEQ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;e=b>>4;f=d>>4;$p=1;continue _;}return 0;case 1:$z=Z1(a,e,f);if(C()){break _;}g=$z;return R2(g,b&15,c,d&15);default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ACo(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKD(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AKD(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 0;f=b>>4;g=d>>4;$p=1;continue _;}return 0;case 1:$z=Z1(a,f,g);if(C()){break _;}h=$z;AAC(h,b&15,c,d&15,e);return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function APE(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ALA(a,b,c,d,e);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AET(a,b,c,d,e);if(C()){break _;}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AI5(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AJu(a,b,c,d,e,f);if(C()){break _;}f=$z;if(!f)return 0;$p=2;case 2:AET(a,b,c,d,e);if(C()){break _;}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AET(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=0;while(f<a.cv.s){Rw(Z(a.cv,f),b,c,d);f=f+1|0;}$p=1;case 1:AHR(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function APQ(a,b,c,d,e){var f;if(d<=e){f=d;d=e;e=f;}Js(a,b,e,c,b,d,c);}
function Js(a,b,c,d,e,f,g){var h;h=0;while(h<a.cv.s){AOM(Z(a.cv,h),b,c,d,e,f,g);h=h+1|0;}}
function AHR(a,b,c,d,e){var f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b-1|0;$p=1;case 1:APb(a,f,c,d,e);if(C()){break _;}f=b+1|0;$p=2;case 2:APb(a,f,c,d,e);if(C()){break _;}f=c-1|0;$p=3;case 3:APb(a,b,f,d,e);if(C()){break _;}f=c+1|0;$p=4;case 4:APb(a,b,f,d,e);if(C()){break _;}f=d-1|0;$p=5;case 5:APb(a,b,c,f,e);if(C()){break _;}d=d+1|0;$p=6;case 6:APb(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,
$p);}
function APb(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sq)return;L();f=Be0.data;$p=1;case 1:$z=ACE(a,b,c,d);if(C()){break _;}g=$z;h=f[g];if(h===null)return;$p=2;case 2:h.e3(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AGj(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=Z1(a,e,f);if(C()){break _;}g=$z;return Pu(g,b&15,c,d&15);default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function XH(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=1;$p=1;case 1:$z=AQT(a,b,c,d,e);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AQT(a,b,c,d,e){var f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(e){$p=1;continue _;}if(c<0)return 0;if(c>=128){f=15-a.ge|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}return 15;case 1:$z=ACE(a,b,c,d);if(C()){break _;}f=$z;L();if(f!=Be5.b&&f!=Bhc.b){if(c<0)return 0;if(c>=128){f=15
-a.ge|0;if(f<0)f=0;return f;}g=b>>4;e=d>>4;$p=7;continue _;}e=c+1|0;g=0;$p=2;case 2:$z=AQT(a,b,e,d,g);if(C()){break _;}h=$z;e=b+1|0;g=0;$p=3;case 3:$z=AQT(a,e,c,d,g);if(C()){break _;}g=$z;e=b-1|0;i=0;$p=4;case 4:$z=AQT(a,e,c,d,i);if(C()){break _;}i=$z;e=d+1|0;j=0;$p=5;case 5:$z=AQT(a,b,c,e,j);if(C()){break _;}j=$z;d=d-1|0;e=0;$p=6;case 6:$z=AQT(a,b,c,d,e);if(C()){break _;}k=$z;if(g<=h)g=h;if(i<=g)i=g;if(j<=i)j=i;if(k<=j)k=j;return k;case 7:$z=Z1(a,g,e);if(C()){break _;}l=$z;return V0(l,b&15,c,d&15,a.ge);default:
Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ZE(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){if(c<0)return 0;if(c>=128)return 1;e=b>>4;f=d>>4;if(!C5(a,e,f))return 0;$p=1;continue _;}return 0;case 1:$z=Z1(a,e,f);if(C()){break _;}g=$z;return Pu(g,b&15,c,d&15);default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ALP(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b>=(-32000000)&&c>=(-32000000)&&b<32000000&&c<=32000000){d=b>>4;e=c>>4;if(!C5(a,d,e))return 0;$p=1;continue _;}return 0;case 1:$z=Z1(a,d,e);if(C()){break _;}f=$z;return UW(f,b&15,c&15);default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AQf(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Ms(a,c,d,e))return;if(b===BkI){$p=1;continue _;}if(b===BkJ){$p=2;continue _;}$p=3;continue _;case 1:$z=ZE(a,c,d,e);if(C()){break _;}g=$z;if(g)f=15;$p=3;continue _;case 2:$z=ACE(a,c,d,e);if(C()){break _;}g=$z;L();if(BgO.data[g]>f)f=BgO.data[g];$p=3;case 3:$z=ALr(a,b,c,d,e);if(C()){break _;}g=$z;if(g!=f)DU(a,b,c,d,e,c,d,e);return;default:
Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ALr(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d>=0&&d<128&&c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000){f=c>>4;g=e>>4;if(!C5(a,f,g))return 0;$p=1;continue _;}return b.Ae;case 1:$z=Z1(a,f,g);if(C()){break _;}h=$z;return ACt(h,b,c&15,d,e&15);default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AMC(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c>=(-32000000)&&e>=(-32000000)&&c<32000000&&e<=32000000&&d>=0&&d<128){g=c>>4;h=e>>4;if(C5(a,g,h)){$p=1;continue _;}}return;case 1:$z=Z1(a,g,h);if(C()){break _;}i=$z;AQU(i,b,c&15,d,e&15,f);g=0;while(g<a.cv.s){Rw(Z(a.cv,g),c,d,e);g=g+1|0;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ANp(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=BkE.data;$p=1;case 1:$z=XH(a,b,c,d);if(C()){break _;}b=$z;return e[b];default:Fa();}}C4().s(a,b,c,d,e,$p);}
function RF(a){return a.ge>=4?0:1;}
function AJt(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;$p=1;case 1:$z=AE8(a,b,c,d);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,$p);}
function AE8(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(!(isNaN(c.x)?1:0)&&!(isNaN(c.z)?1:0)&&!(isNaN(c.w)?1:0)){e
=K(c.x);f=K(c.z);g=K(c.w);h=K(b.x);i=K(b.z);j=K(b.w);k=20+(-1)|0;if(20<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=S(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=S(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=S(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=
s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;}return null;}return null;case 1:$z=ACE(a,h,i,j);if(C()){break _;}x=$z;$p=2;case 2:$z=AEQ(a,h,i,j);if(C()){break _;}y=$z;L();z=Be0.data[x];if(x>0&&z.o9(y,d)){$p=5;continue _;}o=i-1|0;$p=3;case 3:$z=ACE(a,h,o,j);if
(C()){break _;}p=$z;$p=4;case 4:$z=AEQ(a,h,o,j);if(C()){break _;}x=$z;w=Be0.data[p];if(p>0&&w.o9(x,d)){$p=6;continue _;}p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=S(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=S(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=S(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)
/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;case 5:$z=z.nK(a,h,i,j,b,c);if(C()){break _;}ba=$z;if(ba!==null)return ba;o=i-1|0;$p=3;continue _;case 6:$z=w.nK(a,h,o,j,b,c);if(C()){break _;}ba
=$z;if(ba!==null)return ba;p=k;k=p+(-1)|0;if(p<0)return null;if(!(isNaN(b.x)?1:0)&&!(isNaN(b.z)?1:0)&&!(isNaN(b.w)?1:0)){if(h==e&&i==f&&j==g)return null;l=999.0;m=999.0;n=999.0;o=S(e,h);if(o>0)l=h+1.0;if(o<0)l=h+0.0;p=S(f,i);if(p>0)m=i+1.0;if(p<0)m=i+0.0;i=S(g,j);if(i>0)n=j+1.0;if(i<0)n=j+0.0;q=999.0;r=999.0;s=999.0;t=c.x-b.x;u=c.z-b.z;v=c.w-b.w;if(l!==999.0)q=(l-b.x)/t;if(m!==999.0)r=(m-b.z)/u;if(n!==999.0)s=(n-b.w)/v;if(q<r&&q<s){o=o<=0?5:4;b.x=l;b.z=b.z+u*q;b.w=b.w+v*q;}else if(r>=s){o=i<=0?3:2;b.x=b.x+t
*s;b.z=b.z+u*s;b.w=n;}else{o=p<=0?1:0;b.x=b.x+t*r;b.z=m;b.w=b.w+v*r;}w=BY(b.x,b.z,b.w);v=K(b.x);w.x=v;h=v|0;if(o==5){h=h+(-1)|0;w.x=w.x+1.0;}v=K(b.z);w.z=v;i=v|0;if(o==1){i=i+(-1)|0;w.z=w.z+1.0;}v=K(b.w);w.w=v;j=v|0;if(o==3){j=j+(-1)|0;w.w=w.w+1.0;}$p=1;continue _;}return null;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function Di(a,b,c,d,e){var f,g,h;f=0;g=S(d,1.0);e=16.0*d;while(f<a.cv.s){h=16.0;if(g>0)h=e;if(LI(a.bg,b)<h*h)Z(a.cv,f);f=f+1|0;}}
function Ez(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,$$je;a:{b:{try{h=0;}catch($$e){$$je=Q($$e);if($$je instanceof BD){i=$$je;break b;}else{throw $$e;}}j=S(f,1.0);k=16.0*f;while(true){try{if(h>=CY(a.cv))break;l=16.0;if(j>0)l=k;m=b-a.bg.d;n=c-a.bg.j;o=d-a.bg.e;if(m*m+n*n+o*o<l*l)AC8(Z(a.cv,h),e,b,c,d,f,g);h=h+1|0;continue;}catch($$e){$$je=Q($$e);if($$je instanceof BD){i=$$je;break b;}else{throw $$e;}}}break a;}B9(i);}}
function ATm(a,b,c,d,e,f){return;}
function BV(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.cv.s){AH9(Z(a.cv,i),b,c,d,e,f,g,h);i=i+1|0;}}
function AOn(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d/16.0);d=K(b.e/16.0);if(!C5(a,c,d)){e=Dz();f=new V;X(f);Cg(e,W(FP(I(f,B(368)),b)));return;}$p=1;case 1:$z=Z1(a,c,d);if(C()){break _;}e=$z;V3(e,b);T(a.dZ,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AVe(a,b){Cb(b);}
function ANL(a,b){T(a.cv,b);}
function AK1(a,b){Ib(a.cv,b);}
function X2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dy(a.ne);d=K(c.R);e=K(c.V+1.0);f=K(c.M);g=K(c.U+1.0);h=K(c.S);i=K(c.W+1.0);f=f-1|0;while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=Be0.data;$p=2;continue _;}j=j+1|0;}d=d+1|0;}c=Dw(c,0.25,0.25,0.25);$p=1;case 1:$z=ADR(a,b,c);if(C()){break _;}m=$z;n=
0;while(n<m.s){o=Z(m,n).By();if(o!==null)T(a.ne,o);c=b.A2(Z(m,n));if(c!==null)T(a.ne,c);n=n+1|0;}return a.ne;case 2:$z=ACE(a,d,j,k);if(C()){break _;}n=$z;p=l[n];if(p!==null){m=a.ne;$p=3;continue _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dw(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=Be0.data;continue _;case 3:p.FI(a,d,j,k,c,m);if(C()){break _;}k=k+1|0;while(k>=i){j=j+1|0;while(j>=g){d=d+1|0;if(d>=e){c=Dw(c,0.25,0.25,0.25);$p=1;continue _;}j=f;}k=h;}L();l=Be0.data;$p=2;continue _;default:
Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Ou(a,b){var c;c=1.0-(BC(HC(a,b)*3.1415927410125732*2.0)*2.0+0.5);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*11.0|0;}
function OZ(a,b){var c,d,e,f;c=BC(HC(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sr,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sr,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sr,Long_fromInt(255)))/255.0;return BY(d*c,e*c,f*c);}
function HC(a,b){var c;c=(Long_rem(a.dU,Long_fromInt(24000)).lo+b)/24000.0-0.25;if(c<0.0)c=c+1.0;if(c>1.0)c=c-1.0;return c+(1.0-(GE(c*3.141592653589793)+1.0)/2.0-c)/3.0;}
function Ta(a,b){var c,d,e,f;c=BC(HC(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.rv,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.rv,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.rv,Long_fromInt(255)))/255.0;b=c*0.8999999761581421+0.10000000149011612;return BY(d*b,e*b,f*(c*0.8500000238418579+0.15000000596046448));}
function ADy(a,b){var c,d,e,f;c=BC(HC(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(c<0.0)c=0.0;if(c>1.0)c=1.0;d=Long_toNumber(Long_and(Long_shr(a.sV,16),Long_fromInt(255)))/255.0;e=Long_toNumber(Long_and(Long_shr(a.sV,8),Long_fromInt(255)))/255.0;f=Long_toNumber(Long_and(a.sV,Long_fromInt(255)))/255.0;b=c*0.9399999976158142+0.05999999865889549;return BY(d*b,e*b,f*(c*0.9100000262260437+0.09000000357627869));}
function A8z(a,b,c){return 64;}
function AJz(a,b){var c;c=1.0-(BC(HC(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(c<0.0)c=0.0;if(c>1.0)c=1.0;return c*c*0.5;}
function Fo(a,b,c,d,e){var f,g;f=new J5;g=BkK;BkK=Long_add(g,Long_fromInt(1));f.oV=g;f.fG=b;f.fq=c;f.fL=d;f.qc=e;if(G4(a,b-8|0,c-8|0,d-8|0,b+8|0,c+8|0,d+8|0)){if(e>0){L();f.jk=Long_add(Long_fromInt(Be0.data[e].my()),a.dU);}if(!WK(a.kV,f)){Xq(a.kV,f);Zp(a.gL,f);}}}
function APm(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ge(a.dZ,a.l9);b=0;while(b<a.cv.s){Z(a.cv,b);c=0;while(c<a.l9.s){Z(a.l9,c);c=c+1|0;}b=b+1|0;}Dy(a.l9);b=0;a:while(true){if(b>=a.dZ.s){b=0;if(b>=a.fD.s)return;d=Z(a.fD,b);$p=1;continue _;}b:{e=Z(a.dZ,b);if(e.bB!==null){if(!e.bB.cR&&e.bB.bH===e)break b;e.bB.bH=null;e.bB=null;}if(!e.cR){$p=2;continue _;}if(e.cR){c=K(e.d/16.0);f=K(e.e/16.0);if(C5(a,
c,f))break a;d=a.dZ;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}b=c;}}b=b+1|0;}$p=3;continue _;case 1:d.tO();if(C()){break _;}b=b+1|0;if(b>=a.fD.s)return;d=Z(a.fD,b);continue _;case 2:XE(a,e);if(C()){break _;}while(true){if(e.cR){c=K(e.d/16.0);f=K(e.e/16.0);if(C5(a,c,f)){$p=3;continue _;}d=a.dZ;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}b=c;}b:{while(true){b=b+1|0;if(b>=a.dZ.s){b=0;if(b>=a.fD.s)return;d=Z(a.fD,b);$p=1;continue _;}e=Z(a.dZ,b);if(e.bB===null)break b;if(e.bB.cR)break;if
(e.bB.bH!==e)break;}e.bB.bH=null;e.bB=null;}if(e.cR)continue;else break;}continue _;case 3:$z=Z1(a,c,f);if(C()){break _;}d=$z;AM8(d,e);while(true){d=a.dZ;c=b+(-1)|0;En(d,b);g=0;while(g<a.cv.s){Z(a.cv,g);g=g+1|0;}b=c;while(true){b=b+1|0;if(b>=a.dZ.s){b=0;if(b>=a.fD.s)return;d=Z(a.fD,b);$p=1;continue _;}e=Z(a.dZ,b);if(e.bB!==null){if(!e.bB.cR&&e.bB.bH===e)continue;e.bB.bH=null;e.bB=null;}if(!e.cR){$p=2;continue _;}if(e.cR)break;}c=K(e.d/16.0);f=K(e.e/16.0);if(!C5(a,c,f))continue;else break;}continue _;default:
Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function XE(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.d);K(b.j);d=K(b.e);if(!G4(a,c-16|0,0,d-16|0,c+16|0,128,d+16|0))return;b.cs=b.d;b.b7=b.j;b.ct=b.e;b.P=b.u;b.T=b.I;e=K(b.d/16.0);f=K(b.j/16.0);g=K(b.e/16.0);if(b.bB===null){$p=1;continue _;}$p=2;continue _;case 1:b.eq();if(C()){break _;}h=K(b.d/16.0);i=K(b.j/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g
==j){if(b.bH!==null){if(!b.bH.cR&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;}if(C5(a,e,g)){$p=3;continue _;}if(!C5(a,h,j)){$p=4;continue _;}$p=5;continue _;case 2:b.BO();if(C()){break _;}h=K(b.d/16.0);i=K(b.j
/16.0);j=K(b.e/16.0);if(e==h&&f==i&&g==j){if(b.bH!==null){if(!b.bH.cR&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;}if(C5(a,e,g)){$p=3;continue _;}if(!C5(a,h,j)){$p=4;continue _;}$p=5;continue _;case 3:$z=Z1(a,
e,g);if(C()){break _;}k=$z;R_(k,b,f);if(!C5(a,h,j)){$p=4;continue _;}$p=5;continue _;case 4:b.C9();if(C()){break _;}if(b.bH!==null){if(!b.bH.cR&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;case 5:$z=Z1(a,h,j);if
(C()){break _;}k=$z;V3(k,b);if(b.bH!==null){if(!b.bH.cR&&b.bH.bB===b){k=b.bH;$p=6;continue _;}b.bH.bB=null;b.bH=null;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;case 6:XE(a,k);if(C()){break _;}if(!(!(isNaN(b.d)?1:0)&&!(!isFinite(b.d)?1:0)))b.d=b.cs;if(!(!(isNaN(b.j)?1:0)
&&!(!isFinite(b.j)?1:0)))b.j=b.b7;if(!(!(isNaN(b.e)?1:0)&&!(!isFinite(b.e)?1:0)))b.e=b.ct;if(!(!(isNaN(b.I)?1:0)&&!(!isFinite(b.I)?1:0)))b.I=b.T;if(!(!(isNaN(b.u)?1:0)&&!(!isFinite(b.u)?1:0)))b.u=b.P;return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ANc(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=null;$p=1;case 1:$z=ADR(a,c,b);if(C()){break _;}c=$z;d=0;while(d<c.s){e=Z(c,d);if(!e.cR&&e.mG)return 0;d=d+1|0;}return 1;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AJr(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);if(b.R<0.0)c=c+(-1)|0;if(b.M<0.0)e=e+(-1)|0;if(b.S<0.0)g=g+(-1)|0;while(c<d){i=e;while(i<f){j=g;if(j<h){L();k=Be0.data;$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACE(a,c,i,j);if(C()){break _;}l=$z;m=
k[l];if(m!==null&&m.b_.nG())return 1;j=j+1|0;a:while(true){if(j<h){L();k=Be0.data;continue _;}i=i+1|0;while(i>=f){c=c+1|0;if(c>=d)break a;i=e;}j=g;}return 0;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARh(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(b.R);d=K(b.V+1.0);e=K(b.M);f=K(b.U+1.0);g=K(b.S);h=K(b.W+1.0);while(c<d){i=e;while(i<f){j=g;if(j<h){$p=1;continue _;}i=i+1|0;}c=c+1|0;}return 0;case 1:$z=ACE(a,c,i,j);if(C()){break _;}k=$z;L();if(k!=BgA.b&&k!=Bf$.b&&k!=BgQ.b){j=j+1|0;a:while(true){if(j<h){continue _;}i=i+1|0;while(i>=f){c=c+1|
0;if(c>=d)break a;i=e;}j=g;}return 0;}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AAA(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.R);f=K(b.V+1.0);g=K(b.M);h=K(b.U+1.0);i=K(b.S);j=K(b.W+1.0);k=0;l=BY(0.0,0.0,0.0);m=h;while(e<f){n=g;while(n<h){o=i;if(o<j){L();p=Be0.data;$p=1;continue _;}n=n+1|0;}e=e+1|0;}if(HU(l)>0.0){b=CD(l);d.g=d.g+
b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 1:$z=ACE(a,e,n,o);if(C()){break _;}q=$z;r=p[q];if(r!==null&&r.b_===c){s=n+1|0;$p=2;continue _;}o=o+1|0;a:while(true){if(o<j){L();p=Be0.data;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break a;n=g;}o=i;}if(HU(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 2:$z=AEQ(a,e,n,o);if(C()){break _;}q=$z;if(m>=s-JE(q)){k=1;$p=3;continue _;}o=o+1|0;b:while(true){if(o<j){L();p=Be0.data;$p=1;continue _;}n=n+1|0;while(n>=
h){e=e+1|0;if(e>=f)break b;n=g;}o=i;}if(HU(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;case 3:r.qH(a,e,n,o,d,l);if(C()){break _;}o=o+1|0;c:while(true){if(o<j){L();p=Be0.data;$p=1;continue _;}n=n+1|0;while(n>=h){e=e+1|0;if(e>=f)break c;n=g;}o=i;}if(HU(l)>0.0){b=CD(l);d.g=d.g+b.x*0.004;d.i=d.i+b.z*0.004;d.h=d.h+b.w*0.004;}return k;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AOz(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K(b.R);e=K(b.V+1.0);f=K(b.M);g=K(b.U+1.0);h=K(b.S);i=K(b.W+1.0);while(d<e){j=f;while(j<g){k=h;if(k<i){L();l=Be0.data;$p=1;continue _;}j=j+1|0;}d=d+1|0;}return 0;case 1:$z=ACE(a,d,j,k);if(C()){break _;}m=$z;n=l[m];if(n!==null&&n.b_===c)return 1;k=k+1|0;a:while(true)
{if(k<i){L();l=Be0.data;continue _;}j=j+1|0;while(j>=g){d=d+1|0;if(d>=e)break a;j=f;}k=h;}return 0;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function Yg(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=new W1;$p=1;case 1:AI_(g,a,b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ADH(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=1.0/((c.V-c.R)*2.0+1.0);e=1.0/((c.U-c.M)*2.0+1.0);f=1.0/((c.W-c.S)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){if(0.0<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=0.0;p=BY(k,l,m+n*o);$p=1;continue _;}j=
j+e;}i=i+d;}return g/h;case 1:$z=AJt(a,p,b);if(C()){break _;}p=$z;if(p===null)g=g+1|0;h=h+1|0;q=o+f;a:while(true){if(q<=1.0){k=c.R+(c.V-c.R)*i;l=c.M+(c.U-c.M)*j;m=c.S;n=c.W-c.S;o=q;p=BY(k,l,m+n*o);continue _;}j=j+e;while(j>1.0){i=i+d;if(i>1.0)break a;j=0.0;}q=0.0;}return g/h;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function ABS(a,b,c,d,e){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;$p=1;case 1:$z=ACE(a,b,c,d);if(C()){break _;}e=$z;L();if(e!=BgA.b)return;Ez(a,b+0.5,c+0.5,d+0.5,B(215),0.5,2.5999999046325684+(N(a.q)-N(a.q))*0.800000011920929);e=0;$p=2;case 2:APE(a,b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AXX(a,b){return null;}
function AOd(a){var b;b=new V;X(b);return W(Bf(I(b,B(369)),a.dZ.s));}
function AX7(a){return a.bg;}
function ANG(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=Z1(a,e,f);if(C()){break _;}g=$z;if(g===null)return null;b=b&15;d=d&15;$p=2;case 2:$z=ANw(g,b,c,d);if(C()){break _;}g=$z;return g;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AFY(a,b,c,d,e){var f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=b>>4;g=d>>4;$p=1;case 1:$z=Z1(a,f,g);if(C()){break _;}h=$z;if(h!==null)AJs(h,b&15,c,d&15,e);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AFR(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=b>>4;f=d>>4;$p=1;case 1:$z=Z1(a,e,f);if(C()){break _;}g=$z;if(g!==null)AD6(g,b&15,c,d&15);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AAJ(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();e=Be0.data;$p=1;case 1:$z=ACE(a,b,c,d);if(C()){break _;}b=$z;f=e[b];return f!==null?f.d5():0;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AJo(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=1;$p=1;case 1:ABN(a,c,b);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,$p);}
function AIq(a){var b,c,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.eM>=50)return 0;a.eM=a.eM+1|0;a:{try{b=500;}catch($$e){$$je=Q($$e);c=$$je;break a;}b:{try{if(CY(a.f7)>0)break b;}catch($$e){$$je=Q($$e);c=$$je;break a;}a.eM=a.eM-1|0;return 0;}c:{try{b=b+(-1)|0;if(b>0)break c;}catch($$e){$$je=Q($$e);c=$$je;break a;}a.eM=a.eM-1|0;return 1;}try{c=En(a.f7,CY(a.f7)-1|0);$p=1;continue _;}catch($$e){$$je=Q($$e);c=$$je;}}a.eM=a.eM-1|0;M(c);case 1:d:
{try{AOt(c,a);if(C()){break _;}}catch($$e){$$je=Q($$e);c=$$je;break d;}a:{try{if(CY(a.f7)>0)break a;}catch($$e){$$je=Q($$e);c=$$je;break d;}a.eM=a.eM-1|0;return 0;}b:{try{b=b+(-1)|0;if(b>0)break b;}catch($$e){$$je=Q($$e);c=$$je;break d;}a.eM=a.eM-1|0;return 1;}try{c=En(a.f7,CY(a.f7)-1|0);continue _;}catch($$e){$$je=Q($$e);c=$$je;}}a.eM=a.eM-1|0;M(c);default:Fa();}}C4().s(a,b,c,$p);}
function DU(a,b,c,d,e,f,g,h){AK3(a,b,c,d,e,f,g,h,1);}
function AK3(a,b,c,d,e,f,g,h,i){var j,k,l,m;BkG=BkG+1|0;if(BkG==50){BkG=BkG-1|0;return;}if(!Ms(a,(f+c|0)/2|0,64,(h+e|0)/2|0)){BkG=BkG-1|0;return;}a:{j=a.f7.s;if(i){if(5<=j)j=5;k=0;while(true){if(k>=j)break a;l=Z(a.f7,(a.f7.s-k|0)-1|0);if(l.ck===b&&ALJ(l,c,d,e,f,g,h))break;k=k+1|0;}BkG=BkG-1|0;return;}}l=a.f7;m=new VY;m.ck=b;m.iJ=c;m.b8=d;m.ei=e;m.ea=f;m.b0=g;m.dM=h;T(l,m);if(a.f7.s>1000000){b=Dz();l=new V;X(l);Cg(b,W(I(Bf(I(l,B(370)),1000000),B(371))));Dy(a.f7);}BkG=BkG-1|0;}
function Re(a){var b;b=Ou(a,1.0);if(b!=a.ge)a.ge=b;}
function Yb(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Rb(a.dZ,a.bg)&&a.bg!==null){Cg(Dz(),B(372));b=a.bg;$p=1;continue _;}a:{c=Ou(a,1.0);if(c!=a.ge){a.ge=c;d=0;while(true){if(d>=a.cv.s)break a;VN(Z(a.cv,d));d=d+1|0;}}}a.dU=Long_add(a.dU,Long_fromInt(1));if(Long_ne(Long_rem(a.dU,Long_fromInt(20)),Long_ZERO)){c=0;$p=
2;continue _;}c=0;b=null;$p=4;continue _;case 1:AOn(a,b);if(C()){break _;}b:{c=Ou(a,1.0);if(c!=a.ge){a.ge=c;d=0;while(true){if(d>=a.cv.s)break b;VN(Z(a.cv,d));d=d+1|0;}}}a.dU=Long_add(a.dU,Long_fromInt(1));if(Long_ne(Long_rem(a.dU,Long_fromInt(20)),Long_ZERO)){c=0;$p=2;continue _;}c=0;b=null;$p=4;continue _;case 2:ABz(a,c);if(C()){break _;}d=K(a.bg.d);e=K(a.bg.e);b=new Iz;f=d-64|0;g=0;h=e-64|0;c=d+64|0;i=128;j=e+64|0;$p=3;case 3:AEB(b,a,f,g,h,c,i,j);if(C()){break _;}i=0;if(i>=8000)return;a.hU=(a.hU*3|0)+a.sf
|0;f=a.hU>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k=f>>16&127;$p=5;continue _;case 4:ABN(a,c,b);if(C()){break _;}c=0;$p=2;continue _;case 5:$z=HD(b,g,k,h);if(C()){break _;}l=$z;L();if(BgK.data[l]){m=Be0.data[l];n=a.q;$p=6;continue _;}i=i+1|0;if(i>=8000)return;a.hU=(a.hU*3|0)+a.sf|0;f=a.hU>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k=f>>16&127;continue _;case 6:m.e9(a,g,k,h,n);if(C()){break _;}i=i+1|0;if(i>=8000)return;a.hU=(a.hU*3|0)+a.sf|0;f=a.hU>>2;g=((f&127)-64|0)+d|0;h=((f>>8&127)-64|0)+e|0;k
=f>>16&127;$p=5;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ABz(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=JG(a.gL);if(c!=IU(a.kV)){d=new D3;Bo(d,B(373));M(d);}if(c>500)c=500;e=0;a:{while(true){if(e>=c)break a;f=M7(a.gL);if(!b&&Long_gt(f.jk,a.dU))break;MK(a.gL,f);K2(a.kV,f);if(G4(a,f.fG-8|0,f.fq-8|0,f.fL-8|0,f.fG+8|0,f.fq+8|0,f.fL+8|0)){g=f.fG;h=f.fq;i=f.fL;$p=1;continue _;}e=e+1|0;}}return !JG(a.gL)?0:1;case 1:$z=ACE(a,g,
h,i);if(C()){break _;}g=$z;if(g==f.qc&&g>0){L();d=Be0.data[g];g=f.fG;h=f.fq;i=f.fL;f=a.q;$p=2;continue _;}b:{while(true){e=e+1|0;if(e>=c)break b;f=M7(a.gL);if(!b&&Long_gt(f.jk,a.dU))break;MK(a.gL,f);K2(a.kV,f);if(!G4(a,f.fG-8|0,f.fq-8|0,f.fL-8|0,f.fG+8|0,f.fq+8|0,f.fL+8|0))continue;else{g=f.fG;h=f.fq;i=f.fL;continue _;}}}return !JG(a.gL)?0:1;case 2:d.e9(a,g,h,i,f);if(C()){break _;}c:{while(true){e=e+1|0;if(e>=c)break c;f=M7(a.gL);if(!b&&Long_gt(f.jk,a.dU))break;MK(a.gL,f);K2(a.kV,f);if(!G4(a,f.fG-8|0,f.fq-8
|0,f.fL-8|0,f.fG+8|0,f.fq+8|0,f.fL+8|0))continue;else{g=f.fG;h=f.fq;i=f.fL;$p=1;continue _;}}}return !JG(a.gL)?0:1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AFd(a,b,c,d){var e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=16;f=new DB;g=0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;$p=1;case 1:$z=ACE(a,h,i,j);if(C()){break _;}k=$z;if(k>0){L();l=Be0.data[k];$p=2;continue _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,
e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;continue _;case 2:l.kS(a,h,i,j,f);if(C()){break _;}g=g+1|0;if(g>=1000)return;h=(b+E(a.q,e)|0)-E(a.q,e)|0;i=(c+E(a.q,e)|0)-E(a.q,e)|0;j=(d+E(a.q,e)|0)-E(a.q,e)|0;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function ADR(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Dy(a.ql);d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);while(d<=e){h=f;while(h<=g){if(C5(a,d,h)){$p=1;continue _;}h=h+1|0;}d=d+1|0;}return a.ql;case 1:$z=Z1(a,d,h);if(C()){break _;}i=$z;AJ8(i,b,c,a.ql);a:while(true){h=h+1|0;while(h>g){d=d+1|0;if(d>e)break a;h=f;}if(!C5(a,d,h))continue;else
{continue _;}}return a.ql;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ANm(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=K((c.R-2.0)/16.0);e=K((c.V+2.0)/16.0);f=K((c.S-2.0)/16.0);g=K((c.W+2.0)/16.0);h=Ci();while(d<=e){i=f;while(i<=g){if(C5(a,d,i)){$p=1;continue _;}i=i+1|0;}d=d+1|0;}return h;case 1:$z=Z1(a,d,i);if(C()){break _;}j=$z;AMs(j,b,c,h);a:while(true){i=i+1|0;while(i>g){d=d+1|0;if(d>e)break a;i=f;}if(!C5(a,d,i))continue;else
{continue _;}}return h;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AWR(a){return a.dZ;}
function AGy(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Ms(a,b,c,d))return;$p=1;case 1:$z=X4(a,b,d);if(C()){break _;}e=$z;SV(e);return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function YA(a,b){var c,d;c=0;d=0;while(d<a.dZ.s){if(Qc(b,Dl(Z(a.dZ,d))))c=c+1|0;d=d+1|0;}return c;}
function AQl(a,b){var c,d;DF(a.dZ,b);c=0;while(c<a.cv.s){Z(a.cv,c);d=0;while(d<b.s){Z(b,d);d=d+1|0;}c=c+1|0;}}
function AQ_(a,b){DF(a.l9,b);}
function AId(a,b,c,d,e,f){var g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ACE(a,c,d,e);if(C()){break _;}g=$z;L();h=Be0.data[g];i=Be0.data[b];$p=2;case 2:$z=i.hu(a,c,d,e);if(C()){break _;}j=$z;if(f)j=null;if(!(b>0&&h===null)&&h!==Bf9&&h!==BgP&&h!==Bf$&&h!==BgQ&&h!==BgA)return 0;if(j===null){$p=3;continue _;}$p=4;continue _;case 3:$z=i.fT(a,c,d,e);if(C()){break _;}b=$z;return !b
?0:1;case 4:$z=ANc(a,j);if(C()){break _;}b=$z;if(!b)return 0;$p=3;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AR5(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b.d);f=K(b.j);g=K(b.e);h=d+32.0|0;i=e-h|0;j=f-h|0;k=g-h|0;l=e+h|0;m=f+h|0;n=g+h|0;o=new Iz;$p=1;case 1:AEB(o,a,i,j,k,l,m,n);if(C()){break _;}return APy(A2R(o),b,c,d);default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AJD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=K(b.d);h=K(b.j);i=K(b.e);j=f+32.0|0;k=g-j|0;l=h-j|0;m=i-j|0;n=g+j|0;o=h+j|0;p=i+j|0;q=new Iz;$p=1;case 1:AEB(q,a,k,l,m,n,o,p);if(C()){break _;}return AGe(A2R(q),b,c,d,e,f);default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Fk(a,b,c,d,e){return G4(a,b-e|0,c-e|0,d-e|0,b+e|0,c+e|0,d+e|0);}
function XP(){var b,c;BkE=$rt_createFloatArray(16);BkG=0;b=0;while(b<=15){c=1.0-b/15.0;BkE.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}}
function L5(){var a=this;D.call(a);a.uq=null;a.zs=null;a.lt=0;a.Ez=0.0;a.Ey=0.0;a.EZ=0;a.mc=0;a.mA=0;a.nw=0;a.qg=0;a.rT=0;a.zQ=0;a.An=0.0;a.zT=0.0;a.zp=0.0;a.oy=0;}
var BeW=null;function BA(){BA=Bs(L5);A2z();}
function Bt(a){var b,c,d,e,f;if(!a.oy)return 0;a.oy=0;if(a.lt>0){if(a.mA)W4(32888);if(a.mc)W4(32886);b=a.zQ;c=a.lt;d=a.uq.buffer;e=a.lt*7|0;ALz(b,0,c,new Int32Array(d,0,e));if(a.mA)Tz(32888);if(a.mc)Tz(32886);}f=a.nw*4|0;WJ(a);return f;}
function WJ(a){a.lt=0;a.nw=0;a.qg=0;}
function Bz(a){Gl(a,7);}
function Gl(a,b){if(a.oy)Bt(a);a.oy=1;WJ(a);a.zQ=b;a.mc=0;a.mA=0;a.rT=0;}
function AJF(a,b,c){a.mA=1;a.Ez=b;a.Ey=c;}
function Cq(a,b,c,d){Pk(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function Gy(a,b,c,d,e){Qs(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function Pk(a,b,c,d){Qs(a,b,c,d,255);}
function Qs(a,b,c,d,e){if(!a.rT){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.mc=1;a.EZ=e<<24|d<<16|c<<8|b;}}
function G(a,b,c,d,e,f){AJF(a,e,f);Bg(a,b,c,d);}
function Bg(a,b,c,d){var e,f,g,h,i;if(a.qg>65534)return;a.qg=a.qg+1|0;a.lt=a.lt+1|0;e=a.nw;f=a.uq;g=a.zs;h=e+0|0;i=b+a.An;g[h]=i;h=e+1|0;i=c+a.zT;g[h]=i;h=e+2|0;i=d+a.zp;g[h]=i;if(a.mA){h=e+3|0;i=a.Ez;g[h]=i;h=e+4|0;i=a.Ey;g[h]=i;}if(a.mc){h=e+5|0;e=a.EZ;f[h]=e;}a.nw=a.nw+7|0;}
function ES(a,b){Pk(a,b>>16&255,b>>8&255,b&255);}
function ADu(a){a.rT=1;}
function Df(a,b,c,d){Cj(b,c,d);}
function Fb(a,b,c,d){a.An=b;a.zT=c;a.zp=d;}
function A2z(){var b,c;b=new L5;BA();b.lt=0;b.mc=0;b.mA=0;b.nw=0;b.qg=0;b.rT=0;b.oy=0;c=new ArrayBuffer(2097152);b.uq=new Int32Array(c);b.zs=new Float32Array(c);BeW=b;}
function ANn(){var a=this;D.call(a);a.fM=0;a.fJ=0;}
function FL(a,b){var c=new ANn();A0m(c,a,b);return c;}
function A0m(a,b,c){var d,e;a.fM=b;a.fJ=c;d=1;while(true){c=a.fM;e=d+1|0;if((c/e|0)<320)break;if((a.fJ/e|0)<240)break;d=e;}a.fM=a.fM/d|0;a.fJ=a.fJ/d|0;}
function AEw(a){return a.fM;}
function Zl(a){return a.fJ;}
function Gg(){D.call(this);this.mV=0.0;}
function BkL(){var a=new Gg();Nj(a);return a;}
function Nj(a){a.mV=0.0;}
function KS(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>24&255)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>24&255)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;Bd(3553);Bb(3042);Bd(3008);Dg(770,771);BA();p=BeW;Bz(p);Gy(p,i,j,k,h);q=d;r=c;Bg(p,q,r,0.0);s=b;Bg(p,s,r,0.0);Gy(p,m,n,o,l);r=e;Bg(p,s,r,0.0);Bg(p,q,r,0.0);Bt(p);Bd(3042);Bb(3008);Bb(3553);}
function DG(a,b,c,d,e,f){Cy(b,c,d-(Dx(b,c)/2|0)|0,e,f);}
function Hw(a,b,c,d,e,f){Cy(b,c,d,e,f);}
function CH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;BA();h=BeW;Bz(h);i=b+0|0;j=c+g|0;k=a.mV;l=(d+0|0)*0.00390625;m=(e+g|0)*0.00390625;G(h,i,j,k,l,m);n=b+f|0;o=a.mV;k=(d+f|0)*0.00390625;G(h,n,j,o,k,m);m=c+0|0;o=a.mV;j=(e+0|0)*0.00390625;G(h,n,m,o,k,j);G(h,i,m,a.mV,l,j);Bt(h);}
function CT(){var a=this;Gg.call(a);a.J=null;a.bm=0;a.bC=0;a.bG=null;a.pU=0;a.bZ=null;}
function BkM(){var a=new CT();DR(a);return a;}
function DR(a){Nj(a);a.bG=Ci();a.pU=0;}
function AFJ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.bG.s)return;f=Z(a.bG,e);g=a.J;$p=1;case 1:AC0(f,g,b,c);if(C()){break _;}e=e+1|0;if(e>=a.bG.s)return;f=Z(a.bG,e);g=a.J;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function YV(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.J;e=null;$p=1;case 1:AD1(d,e);if(C()){break _;}d=a.J;$p=2;case 2:AFo(d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function Zu(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.bG.s)break a;f=Z(a.bG,e);if(Sb(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.iE(f);if(C()){break _;}while(true){e=e+1|0;if(e>=a.bG.s)break;f=Z(a.bG,e);if(!Sb(f,b,c))continue;else{continue _;}}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function A2I(a,b,c,d){return;}
function AM1(a,b){return;}
function AQe(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.J=b;a.bZ=b.fa;a.bm=c;a.bC=d;$p=1;case 1:a.hT();if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function AQc(a){return;}
function AHa(a){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(FB()){$p=1;continue _;}if(!DV())return;$p=2;continue _;case 1:ZG(a);if(C()){break _;}if(FB()){continue _;}if(!DV())return;$p=2;case 2:ASJ(a);if(C()){break _;}if(!DV())return;continue _;default:Fa();}}C4().s(a,$p);}
function ZG(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cx()){a.Ci(Bj(AR6(),a.bm)/a.J.cq|0,(a.bC-(Bj(X0(),a.bC)/a.J.bF|0)|0)-1|0,CW());return;}b=Bj(AR6(),a.bm)/a.J.cq|0;c=(a.bC-(Bj(X0(),a.bC)/a.J.bF|0)|0)-1|0;d=CW();$p=1;case 1:a.I$(b,c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function ASJ(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!CV())return;Be();if(Bem===null)b=0;else{c=$rt_str(Bem.key);b=Bem===null?32:Bi(c)>1?0:Ba(c,0);}d=Bh();$p=1;case 1:a.pc(b,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function A3q(a){return;}
function AIb(a){return;}
function ABo(a){var b,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;$p=1;case 1:AIL(a,b);if(C()){break _;}return;default:Fa();}}C4().s(a,b,$p);}
function AIL(a,b){var c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.J.A!==null){KS(a,0,0,a.bm,a.bC,1610941696,(-1607454656));return;}Bd(2896);Bd(2912);BA();c=BeW;d=3553;e=a.J.bo;f=B(165);$p=1;case 1:$z=AHz(e,f);if(C()){break _;}g=$z;Cp(d,g);BU(1.0,1.0,1.0,1.0);Bz(c);ES(c,4210752);h=a.bC;i=a.bC/32.0;j=b;G(c,0.0,h,0.0,0.0,i+j);G(c,a.bm,a.bC,
0.0,a.bm/32.0,a.bC/32.0+j);k=a.bm;l=a.bm/32.0;m=0+b|0;G(c,k,0.0,0.0,l,m);G(c,0.0,0.0,0.0,0.0,m);Bt(c);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AVB(a){return 1;}
function AFj(){var a=this;D.call(a);a.lb=null;a.jA=0;a.ie=0;a.vI=0;}
function A_I(a){var b=new AFj();A40(b,a);return b;}
function A40(a,b){a.lb=J(D,b);a.jA=b;a.ie=0;a.vI=0;}
function Tc(a,b){var c,d;c=a.ie;while(true){a.ie=a.ie+1|0;if(a.ie>=a.jA)a.ie=0;if(a.ie==c){c=a.jA;a.jA=a.jA+(a.jA/2|0)|0;d=a.lb;a.lb=J(D,a.jA);Ds(d,0,a.lb,0,c);return Tc(a,b);}if(a.lb.data[a.ie]!==null)continue;else break;}a.lb.data[a.ie]=b;a.vI=a.vI+1|0;return a.ie;}
function ANR(a,b){if(b<a.jA&&b>=0)return a.lb.data[b];return null;}
function Mp(){D.call(this);}
function Eu(){var a=this;Mp.call(a);a.ev=0.0;a.et=0.0;a.eu=0.0;a.es=0.0;a.ey=0.0;a.ez=0.0;a.ew=0.0;a.ex=0.0;a.eD=0.0;a.eB=0.0;a.eC=0.0;a.eA=0.0;a.gW=0.0;a.gX=0.0;a.gU=0.0;a.gV=0.0;}
function Na(){var a=new Eu();A5c(a);return a;}
function A5c(a){Fq(a);}
function Fq(a){a.ev=1.0;a.et=0.0;a.eu=0.0;a.es=0.0;a.ey=0.0;a.ez=1.0;a.ew=0.0;a.ex=0.0;a.eD=0.0;a.eB=0.0;a.eC=1.0;a.eA=0.0;a.gW=0.0;a.gX=0.0;a.gU=0.0;a.gV=1.0;return a;}
function KC(a){a.ev=0.0;a.et=0.0;a.eu=0.0;a.es=0.0;a.ey=0.0;a.ez=0.0;a.ew=0.0;a.ex=0.0;a.eD=0.0;a.eB=0.0;a.eC=0.0;a.eA=0.0;a.gW=0.0;a.gX=0.0;a.gU=0.0;a.gV=0.0;return a;}
function GQ(a,b){a.ev=b.ev;a.et=b.et;a.eu=b.eu;a.es=b.es;a.ey=b.ey;a.ez=b.ez;a.ew=b.ew;a.ex=b.ex;a.eD=b.eD;a.eB=b.eB;a.eC=b.eC;a.eA=b.eA;a.gW=b.gW;a.gX=b.gX;a.gU=b.gU;a.gV=b.gV;return a;}
function T3(a,b){CJ(b,a.ev);CJ(b,a.et);CJ(b,a.eu);CJ(b,a.es);CJ(b,a.ey);CJ(b,a.ez);CJ(b,a.ew);CJ(b,a.ex);CJ(b,a.eD);CJ(b,a.eB);CJ(b,a.eC);CJ(b,a.eA);CJ(b,a.gW);CJ(b,a.gX);CJ(b,a.gU);CJ(b,a.gV);return a;}
function N0(a,b){b=b.data;b[0]=a.ev;b[1]=a.et;b[2]=a.eu;b[3]=a.es;b[4]=a.ey;b[5]=a.ez;b[6]=a.ew;b[7]=a.ex;b[8]=a.eD;b[9]=a.eB;b[10]=a.eC;b[11]=a.eA;b[12]=a.gW;b[13]=a.gX;b[14]=a.gU;b[15]=a.gV;return a;}
function A$C(a,b){return Vh(a,b,a);}
function ZK(a,b){a.ev=a.ev*b.fy;a.et=a.et*b.fy;a.eu=a.eu*b.fy;a.es=a.es*b.fy;a.ey=a.ey*b.fA;a.ez=a.ez*b.fA;a.ew=a.ew*b.fA;a.ex=a.ex*b.fA;a.eD=a.eD*b.fz;a.eB=a.eB*b.fz;a.eC=a.eC*b.fz;a.eA=a.eA*b.fz;return a;}
function ATZ(a,b,c){return W8(a,b,c,a);}
function W8(a,b,c,d){return A6J(b,c,a,d);}
function A6J(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=Na();f=b;g=GE(f);h=Gt(f);i=1.0-g;j=c.fy*c.fA;k=c.fA*c.fz;l=c.fy*c.fz;m=c.fy*h;n=c.fA*h;o=c.fz*h;p=c.fy*c.fy*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.fA*c.fA*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.fz*c.fz*i+g;z=d.ev*p+d.ey*q+d.eD*s;ba=d.et*p+d.ez*q+d.eB*s;bb=d.eu*p+d.ew*q+d.eC*s;bc=d.es*p+d.ex*q+d.eA*s;bd=d.ev*t+d.ey*u+d.eD*v;be=d.et*t+d.ez*u+d.eB*v;bf=d.eu*t+d.ew*u+d.eC*v;r=d.es*t+d.ex*u+d.eA*v;e.eD=d.ev*w+d.ey*x+d.eD*
y;e.eB=d.et*w+d.ez*x+d.eB*y;e.eC=d.eu*w+d.ew*x+d.eC*y;e.eA=d.es*w+d.ex*x+d.eA*y;e.ev=z;e.et=ba;e.eu=bb;e.es=bc;e.ey=bd;e.ez=be;e.ew=bf;e.ex=r;return e;}
function Vh(a,b,c){if(c===null)c=Na();c.gW=c.gW+a.ev*b.fy+a.ey*b.fA+a.eD*b.fz;c.gX=c.gX+a.et*b.fy+a.ez*b.fA+a.eB*b.fz;c.gU=c.gU+a.eu*b.fy+a.ew*b.fA+a.eC*b.fz;c.gV=c.gV+a.es*b.fy+a.ex*b.fA+a.eA*b.fz;return c;}
function Lx(a,b){var c;a:{if(b instanceof Eu){b:{c:{b=b;if(a.ev!==b.ev)break c;if(a.et!==b.et)break c;if(a.eu!==b.eu)break c;if(a.es!==b.es)break c;if(a.ey!==b.ey)break c;if(a.ez!==b.ez)break c;if(a.ew!==b.ew)break c;if(a.ex!==b.ex)break c;if(a.eD!==b.eD)break c;if(a.eB!==b.eB)break c;if(a.eC!==b.eC)break c;if(a.eA!==b.eA)break c;if(a.gW!==b.gW)break c;if(a.gX!==b.gX)break c;if(a.gU!==b.gU)break c;if(a.gV===b.gV){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function Og(){}
function Ja(){D.call(this);}
function Wq(){}
function N6(){}
function R$(){}
function Mh(){}
function Vb(){var a=this;Ja.call(a);a.fy=0.0;a.fA=0.0;a.fz=0.0;}
function BkN(){var a=new Vb();A$i(a);return a;}
function A$i(a){return;}
function L6(a,b,c,d){a.fy=b;a.fA=c;a.fz=d;}
function Wo(){}
function R4(){}
function G_(){var a=this;Ja.call(a);a.lg=0.0;a.lh=0.0;a.lf=0.0;a.pg=0.0;}
function A29(){var a=new G_();AZZ(a);return a;}
function AZZ(a){return;}
function VP(a,b){a.lg=b.lg;a.lh=b.lh;a.lf=b.lf;a.pg=b.pg;return a;}
function A_F(a){return a.lg;}
function ATt(a){return a.lh;}
function AZ9(a){return a.lf;}
function A5I(a){return a.pg;}
function Ti(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(Dl(a)!==Dl(b))return 0;c=b;if(a.lg===c.lg&&a.lh===c.lh&&a.lf===c.lf&&a.pg===c.pg)return 1;return 0;}
function S9(){var a=this;D.call(a);a.Cb=null;a.Ca=null;}
function AII(a){var b,c;b=a.Cb;c=a.Ca;Fw(b);CM(c,null);}
function AO6(){Fh.call(this);}
function A5a(a){var b=new AO6();AYG(b,a);return b;}
function AYG(a,b){W2(a,b);}
function GX(){}
function UE(){}
function AC6(){var a=this;D.call(a);a.fO=null;a.iB=null;a.kD=null;a.p8=0;a.ri=0;a.ii=null;}
function AJH(a,b,c,d){var e=new AC6();AUu(e,a,b,c,d);return e;}
function AUu(a,b,c,d,e){a.ii=b;a.ri=a.ii.d7;a.fO=c;a.iB=d;a.p8=e;}
function Fr(a){return a.fO===null?0:1;}
function Fn(a){var b;RA(a);if(a.fO===null){b=new J9;P(b);M(b);}b=a.fO.zr;a.kD=a.fO;a.iB=a.fO;a.fO=a.fO.hs;a.p8=a.p8+1|0;return b;}
function AHm(a){var b,c;if(a.kD===null){b=new D3;P(b);M(b);}b=a.ii;c=a.kD;if(c.ix===null)b.pF=c.hs;else c.ix.hs=c.hs;if(c.hs===null)b.qn=c.ix;else c.hs.ix=c.ix;b.gQ=b.gQ-1|0;b.d7=b.d7+1|0;if(a.kD===a.iB){a.iB=!Fr(a)?null:a.fO.ix;a.p8=a.p8-1|0;}else if(a.kD===a.fO)a.fO=!ZY(a)?null:a.iB.hs;a.ri=a.ii.d7;a.kD=null;}
function ZY(a){return a.iB===null?0:1;}
function ABB(a,b){var c;RA(a);c=new RL;c.zr=b;c.ix=a.iB;c.hs=a.fO;if(a.iB!==null)a.iB.hs=c;else a.ii.pF=c;if(a.fO!==null)a.fO.ix=c;else a.ii.qn=c;a.iB=c;b=a.ii;b.gQ=b.gQ+1|0;b=a.ii;b.d7=b.d7+1|0;a.ri=a.ii.d7;a.kD=null;}
function RA(a){var b;if(a.ri>=a.ii.d7)return;b=new KY;P(b);M(b);}
function RL(){var a=this;D.call(a);a.zr=null;a.hs=null;a.ix=null;}
function BkO(){var a=new RL();A0W(a);return a;}
function A0W(a){return;}
function N3(){var a=this;D.call(a);a.zo=null;a.kA=null;a.hb=null;a.l3=null;a.Ch=null;a.sW=0;a.D2=0;}
var BkP=0;var BkQ=null;function Bah(){var a=new N3();AIz(a);return a;}
function AIz(a){a.zo=C8();a.kA=Rm(1);a.hb=WX(1048576);a.l3=WX(1048576);a.Ch=Ci();a.sW=0;a.D2=0;}
function AHz(a,b){var c,d,e,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=CQ(BkQ,b);if(c!==null)return c.f5;try{VX(a.kA);W3(a.kA);d=Q7(a.kA,0);if(IF(b,B(374))){a.sW=1;e=Kn(JC(b,7));$p=1;continue _;}if(DC(b,B(179))&&AIN().o.pR)BkP=1;e=Kn(b);$p=2;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BL){}else{throw $$e;}}b=new B6;Bo(b,B(375));M(b);case 1:a:{try{$z=Zh(a,e);if(C()){break _;}c=$z;LQ(a,c,d);a.sW=0;Rj(BkQ,b,CZ(d));}catch
($$e){$$je=Q($$e);if($$je instanceof BL){break a;}else{throw $$e;}}return d;}b=new B6;Bo(b,B(375));M(b);case 2:a:{try{$z=Zh(a,e);if(C()){break _;}c=$z;LQ(a,c,d);BkP=0;Rj(BkQ,b,CZ(d));}catch($$e){$$je=Q($$e);if($$je instanceof BL){break a;}else{throw $$e;}}return d;}b=new B6;Bo(b,B(375));M(b);default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AHG(a,b){var c;VX(a.kA);W3(a.kA);c=Q7(a.kA,0);LQ(a,b,c);BQ(a.zo,CZ(c),b);return c;}
function LQ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;Eb(a,c);if(!BkP){Ej(3553,10241,9728);Ej(3553,10240,9728);}else{Ej(3553,10241,9986);Ej(3553,10240,9728);Ej(3553,33085,4);}if(a.D2){Ej(3553,10241,9729);Ej(3553,10240,9729);}if(!a.sW){Ej(3553,10242,10497);Ej(3553,10243,10497);}else{Ej(3553,10242,10496);Ej(3553,10243,10496);}d=b.xv;e=b.Du;f=b.t1;g=$rt_createByteArray(Bj(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if
(Bdi.o.ef){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}a:{EC(a.hb);UX(a.hb,g);b=a.hb;Ep(b,0);Iw(b,h.length);SJ(3553,0,6408,d,e,0,6408,5121,a.hb);if(BkP){p=1;while(true){if(p>4)break a;o=d>>(p-1|0);q=d>>p;r=e>>p;EC(a.l3);s=0;while(s<q){t=0;while(t<r){b=a.hb;c=s*2|0;i=c+0|0;k=t*2|0;n=Bj(k+0|0,o);u=KW(b,(i+n|0)*4|0);b=a.hb;c=c+1|0;v=KW(b,(c+n|0)*4|0);b=a.hb;k=Bj(k+1|0,o);w
=KW(b,(c+k|0)*4|0);x=KW(a.hb,(i+k|0)*4|0);y=Lk(a,Lk(a,u,v),Lk(a,w,x));ABb(a.l3,(s+Bj(t,q)|0)*4|0,y);t=t+1|0;}s=s+1|0;}SJ(3553,p,6408,q,r,0,6408,5121,a.l3);z=a.hb;a.hb=a.l3;a.l3=z;p=p+1|0;}}}}
function AD$(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=B(376);$p=1;case 1:$z=AHz(a,b);if(C()){break _;}d=$z;return d;default:Fa();}}C4().s(a,b,c,d,$p);}
function G9(a,b){T(a.Ch,b);b.pb();}
function Lk(a,b,c){return ((((b&(-16777216))>>24&255)+((c&(-16777216))>>24&255)|0)>>1<<24)+(((b&16711422)+(c&16711422)|0)>>1)|0;}
function Zh(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AEZ(b);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,$p);}
function Eb(a,b){if(b<0)return;Cp(3553,b);}
function ADK(){BkP=0;BkQ=C8();}
function Wp(){var a=this;D.call(a);a.sd=null;a.xu=0;a.tl=0;}
function BkR(a,b,c){var d=new Wp();AON(d,a,b,c);return d;}
function AON(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.sd=$rt_createIntArray(256);a.xu=0;e=Kn(c);$p=1;case 1:$z=AEZ(e);if(C()){break _;}f
=$z;g=f.xv;e=f.t1;h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+Bj(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.sd.data[h]=k+2|0;h=h+1|0;}a.xu=AHG(d,f);a.tl=I8(288);BA();p=BeW;q=0;while(q<256){FK(a.tl+q|0,4864);Bz(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;G(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;G(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;G(p,7.989999771118164,0.0,0.0,x,y);G(p,0.0,0.0,0.0,u,y);Bt(p);Ee();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.ef){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}FK((a.tl+256|0)+l|0,4864);F9(ba/255.0,bb/255.0,bc/255.0);Ee();l=l+1|0;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function Cy(a,b,c,d,e){SS(a,b,c+1|0,d+1|0,e,1);EF(a,b,c,d,e);}
function EF(a,b,c,d,e){SS(a,b,c,d,e,0);}
function SS(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Cp(3553,a.xu);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BU(g,h,i,j);B3();Bw(c,d,0.0);k=0;while(k<Bi(b)){c=k;while(true){d=Bi(b);k=c+1|0;if(d<=k)break;if(Ba(b,c)!=167)break;l=UO(B(377),Ba(AKr(b),k));c=c+2|0;}if(c<Bi(b)){m=Vu(Ba(b,c));if(m>=0){FV((a.tl+m|0)+32|0);Bw(a.sd.data[m+32|0],0.0,0.0);}}}BE();}
function Dx(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<Bi(b)){if(Ba(b,d)==167)d=d+1|0;else{e=Vu(Ba(b,d));if(e>=0)c=c+a.sd.data[e+32|0]|0;}d=d+1|0;}return c;}
function AQJ(a,b){var c,d,e,f;c=Ci();d=ANt(b,B(158)).data;e=d.length;f=0;while(f<e){T(c,d[f]);f=f+1|0;}return c;}
function Qr(){var a=this;D.call(a);a.F0=0;a.FZ=0;}
function BkS(){var a=new Qr();A$H(a);return a;}
function A$H(a){return;}
function YH(a){AMP(1);a.F0=0;a.FZ=0;}
function AFF(a){Lv();MH();AMP(0);}
function AK4(){var a=this;Ew.call(a);a.o8=null;a.rl=null;a.oC=null;a.s1=null;a.tf=0;}
function BaH(){var a=new AK4();A4F(a);return a;}
function A4F(a){L();HH(a,Bf9.ba+1|0);a.o8=$rt_createFloatArray(256);a.rl=$rt_createFloatArray(256);a.oC=$rt_createFloatArray(256);a.s1=$rt_createFloatArray(256);a.tf=0;a.w1=2;}
function A0j(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.tf=a.tf+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=c-2|0;while(e<=c){f=b&15;g=e&15;d=d+a.o8.data[f+(g*16|0)|0];e=e+1|0;}h=a.rl.data;i=b+(c*16|0)|0;h[i]=d/3.200000047683716+a.oC.data[i]*0.800000011920929;c=c+1|0;}b=b+1|0;}b=0;while(b<16){c=0;while(c<16){j=a.oC.data;i=b+(c*16|0)|0;j[i]=j[i]+a.s1.data[i]*0.05000000074505806;if(a.oC.data[i]<0.0)a.oC.data[i]=0.0;j=a.s1.data;j[i]=j[i]-0.30000001192092896;if(BP()<0.2)a.s1.data[i]=0.5;c=c+1|0;}b=b+1|0;}j=a.rl;a.rl=a.o8;a.o8
=j;c=0;while(c<256){d=a.o8.data[(c-(a.tf*16|0)|0)&255];if(d>1.0)d=1.0;if(d<0.0)d=0.0;k=d*d;i=32.0+k*32.0|0;l=50.0+k*64.0|0;m=255;n=146.0+k*50.0|0;if(a.mH){b=i*30|0;i=((b+(l*59|0)|0)+2805|0)/100|0;l=(b+(l*70|0)|0)/100|0;m=(b+17850|0)/100|0;}j=a.dD.data;b=c*4|0;j[b+0|0]=i<<24>>24;a.dD.data[b+1|0]=l<<24>>24;a.dD.data[b+2|0]=m<<24>>24;a.dD.data[b+3|0]=n<<24>>24;c=c+1|0;}}
function ACs(){var a=this;Ew.call(a);a.oz=null;a.rw=null;a.jU=null;a.sS=null;a.tv=0;}
function BcO(){var a=new ACs();A3x(a);return a;}
function A3x(a){L();HH(a,Bf$.ba+1|0);a.oz=$rt_createFloatArray(256);a.rw=$rt_createFloatArray(256);a.jU=$rt_createFloatArray(256);a.sS=$rt_createFloatArray(256);a.tv=0;a.w1=2;}
function A82(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a.tv=a.tv+1|0;b=0;while(b<16){c=0;while(c<16){d=0.0;e=Br(c*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;f=Br(b*3.1415927410125732*2.0/16.0)*1.2000000476837158|0;g=b-1|0;while(true){h=b+1|0;if(g>h)break;i=c-1|0;while(i<=(c+1|0)){j=(g+e|0)&15;h=(i+f|0)&15;d=d+a.oz.data[j+(h*16|0)|0];i=i+1|0;}g=g+1|0;}k=a.rw.data;l=b+(c*16|0)|0;d=d/10.0;m=a.jU.data;e=(b+0|0)&15;j=((c+0|0)&15)*16|0;n=m[e+j|0];m=a.jU.data;h=h&15;n=n+m[h+j|0];m=a.jU.data;c=c+1|0;j=(c&15)*16|0;k[l]
=d+(n+m[h+j|0]+a.jU.data[e+j|0])/4.0*0.800000011920929;m=a.jU.data;m[l]=m[l]+a.sS.data[l]*0.009999999776482582;if(a.jU.data[l]<0.0)a.jU.data[l]=0.0;m=a.sS.data;m[l]=m[l]-0.05999999865889549;if(BP()<0.005)a.sS.data[l]=1.5;}b=b+1|0;}m=a.rw;a.rw=a.oz;a.oz=m;c=0;while(c<256){d=a.oz.data[(c-((a.tv/3|0)*16|0)|0)&255]*2.0;if(d>1.0)d=1.0;if(d<0.0)d=0.0;j=d*100.0+155.0|0;n=d*d;h=n*255.0|0;l=n*d*d*128.0|0;if(a.mH){b=j*30|0;j=((b+(h*59|0)|0)+(l*11|0)|0)/100|0;h=(b+(h*70|0)|0)/100|0;l=(b+(l*70|0)|0)/100|0;}m=a.dD.data;b
=c*4|0;m[b+0|0]=j<<24>>24;a.dD.data[b+1|0]=h<<24>>24;a.dD.data[b+2|0]=l<<24>>24;a.dD.data[b+3|0]=(-1);c=c+1|0;}}
function ASe(){var a=this;Ew.call(a);a.mu=null;a.oL=null;}
function AVP(a){var b=new ASe();AZz(b,a);return b;}
function AZz(a,b){L();HH(a,BgA.ba+(b*16|0)|0);a.mu=$rt_createFloatArray(320);a.oL=$rt_createFloatArray(320);}
function A3E(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=0;while(b<16){c=0;while(c<20){d=18;e=a.mu.data;f=c+1|0;g=e[b+((f%20|0)*16|0)|0]*18.0;h=b-1|0;while(h<=(b+1|0)){i=c;while(i<=f){if(h>=0&&i>=0&&h<16&&i<20)g=g+a.mu.data[h+(i*16|0)|0];d=d+1|0;i=i+1|0;}h=h+1|0;}e=a.oL.data;j=b+(c*16|0)|0;e[j]=g/(d*1.059999942779541);if(c>=19)a.oL.data[j]=BP()*BP()*BP()*4.0+BP()*0.10000000149011612+0.20000000298023224;c=f;}b=b+1|0;}e=a.oL;a.oL=a.mu;a.mu=e;f=0;while(f<256){k=a.mu.data[f]*1.7999999523162842;if(k>1.0)k=1.0;if(k<0.0)k=
0.0;l=k*155.0+100.0|0;g=k*k;m=g*255.0|0;j=g*k*k*k*k*k*k*k*k*255.0|0;n=255;if(k<0.5)n=0;if(a.mH){c=l*30|0;l=((c+(m*59|0)|0)+(j*11|0)|0)/100|0;m=(c+(m*70|0)|0)/100|0;j=(c+(j*70|0)|0)/100|0;}e=a.dD.data;b=f*4|0;e[b+0|0]=l<<24>>24;a.dD.data[b+1|0]=m<<24>>24;a.dD.data[b+2|0]=j<<24>>24;a.dD.data[b+3|0]=n<<24>>24;f=f+1|0;}}
function Xz(){}
function AAB(){var a=this;D.call(a);a.iH=null;a.bM=null;a.iG=null;a.eL=null;a.gO=null;a.c9=null;a.ds=0;a.dF=0;a.kb=0;a.y5=0;a.bO=null;a.Ec=null;a.py=0;a.or=0;a.xN=0;a.xm=0;a.qs=0;a.qt=0;a.qu=0;a.ta=0;a.s_=0;a.tb=0;a.sa=0;a.s9=0;a.ll=0;a.xt=0;a.Hs=null;a.H1=null;a.se=0;a.r0=0;a.DW=0;a.sx=0;a.qC=0;a.o0=null;a.Hm=0;a.GT=0;a.rK=0.0;a.rJ=0.0;a.rI=0.0;a.tK=0.0;a.q_=0;}
function Ba6(a,b){var c=new AAB();A2u(c,a,b);return c;}
function A2u(a,b,c){var d,e,f,g,h,i,j;a.iH=Ci();a.eL=Ci();a.py=0;a.sa=(-1);a.Hs=$rt_createIntArray(50000);a.H1=Rm(64);a.o0=Ci();a.Hm=0;a.GT=I8(1);a.rK=(-9999.0);a.rJ=(-9999.0);a.rI=(-9999.0);a.q_=0;a.bO=b;a.iG=c;a.y5=I8(786432);a.or=I8(3);B3();FK(a.or,4864);Zm(a);Ee();BE();BA();d=BeW;a.xN=a.or+1|0;FK(a.xN,4864);e=(-384);while(e<=384){f=(-384);while(f<=384){Bz(d);g=e+0|0;h=f+0|0;Bg(d,g,16.0,h);i=e+64|0;Bg(d,i,16.0,h);f=f+64|0;h=f;Bg(d,i,16.0,h);Bg(d,g,16.0,h);Bt(d);}e=e+64|0;}Ee();a.xm=a.or+2|0;FK(a.xm,4864);Bz(d);f
=(-384);while(f<=384){j=(-384);while(j<=384){g=f+64|0;h=j+0|0;Bg(d,g,(-16.0),h);i=f+0|0;Bg(d,i,(-16.0),h);j=j+64|0;h=j;Bg(d,i,(-16.0),h);Bg(d,g,(-16.0),h);}f=f+64|0;}Bt(d);Ee();}
function Zm(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;if(a.bO.o.du)return;b=new DB;BA();c=BeW;Bz(c);d=0;while(d<1500){a:{e=N(b)*2.0-1.0;f=N(b)*2.0-1.0;g=N(b)*2.0-1.0;h=0.25+N(b)*0.25;i=e*e+f*f+g*g;if(i<1.0&&i>0.01){i=1.0/Ed(i);j=e*i;f=f*i;g=g*i;k=j*100.0;l=f*100.0;m=g*100.0;n=CS(j,g);o=Gt(n);p=GE(n);q=CS(Ed(j*j+g*g),f);r=Gt(q);s=GE(q);t=Cl(b)*3.141592653589793*2.0;u=Gt(t);v=GE(t);w=0;i=0.0*s;e=0.0*r;while(true){if(w>=4)break a;j=((w&2)-1|0)*h;w=w+1|0;x=((w&2)-1|0)*h;y=j*v-x*u;z=x*
v+j*u;ba=y*r+i;bb=e-y*s;bc=bb*o-z*p;bd=z*o+bb*p;Bg(c,k+bc,l+ba,m+bd);}}}d=d+1|0;}Bt(c);}
function Q8(a,b){if(a.bM!==null)AK1(a.bM,a);a.rK=(-9999.0);a.rJ=(-9999.0);a.rI=(-9999.0);Bgz.n3=b;a.bM=b;a.Ec=A8u(b);if(b!==null){ANL(b,a);Jj(a);}}
function Jj(a){var b,c,d,e,f,g,h,i;a:{L();AKu(Bfc,a.bO.o.lj);a.sa=a.bO.o.hg;if(a.c9!==null){b=0;while(true){if(b>=a.c9.data.length)break a;ARN(a.c9.data[b]);b=b+1|0;}}}b=64<<(3-a.sa|0);if(b>400)b=400;b=(b/16|0)+1|0;a.ds=b;a.dF=8;a.kb=b;a.c9=J(Is,Bj(Bj(a.ds,a.dF),a.kb));a.gO=J(Is,Bj(Bj(a.ds,a.dF),a.kb));c=0;d=0;a.qs=0;a.qt=0;a.qu=0;a.ta=a.ds;a.s_=a.dF;a.tb=a.kb;e=0;while(e<a.eL.s){Z(a.eL,e).i3=0;e=e+1|0;}Dy(a.eL);f=0;while(f<a.ds){g=0;while(g<a.dF){h=0;while(h<a.kb){if(a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]!==
null)Ge(a.iH,a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0].gl);a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]=BbI(a.bM,a.iH,f*16|0,g*16|0,h*16|0,16,a.y5+c|0);a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0].JT=0;a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0].xL=1;a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0].fw=1;i=a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0];b=d+1|0;i.It=d;K1(a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]);a.gO.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]=a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0];T(a.eL,a.c9.data[Bj(Bj(h,a.dF)+g|0,a.ds)+f|0]);c=c+3|0;h=h+1
|0;d=b;}g=g+1|0;}f=f+1|0;}if(a.bM!==null){i=a.bM.bg;Tx(a,K(i.d),K(i.j),K(i.e));P6(a.gO,AYQ(i));}}
function ACI(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:ARp(BkC,a.bM,a.iG,a.bO.fa,a.bO.f,d);AHi(Bgz,a.bM,a.iG,a.bO.fa,a.bO.f,a.bO.o,d);a.s9=0;a.ll=0;a.xt=0;e=a.bM.bg;f=e.cs;g=e.d-e.cs;h=d;BkT=f+g*h;BkU=e.b7+(e.j-e.b7)*h;BkV=e.ct+(e.e-e.ct)*h;BkW=e.cs+(e.d-e.cs)*h;BkX=e.b7+(e.j-e.b7)*h;BkY=e.ct+(e.e-e.ct)*h;i=a.bM.dZ;a.s9=i.s;if(a.bO.o.du)Bd(2912);j=0;while
(true){if(j>=i.s){j=0;if(j>=a.iH.s)return;b=BkC;c=Z(a.iH,j);$p=1;continue _;}k=Z(i,j);if(Sn(k,b)&&MN(c,k.L)){if(k!==a.bM.bg)break;if(a.bO.o.cC)break;}j=j+1|0;}a.ll=a.ll+1|0;e=Bgz;$p=2;continue _;case 1:Y5(b,c,d);if(C()){break _;}j=j+1|0;if(j>=a.iH.s)return;b=BkC;c=Z(a.iH,j);continue _;case 2:ANg(e,k,d);if(C()){break _;}while(true){j=j+1|0;if(j>=i.s){j=0;if(j>=a.iH.s)return;b=BkC;c=Z(a.iH,j);$p=1;continue _;}k=Z(i,j);if(!Sn(k,b))continue;if(!MN(c,k.L))continue;if(k!==a.bM.bg)break;if(!a.bO.o.cC)continue;else break;}a.ll
=a.ll+1|0;e=Bgz;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function ALs(a){var b;b=new V;X(b);return W(Bf(I(Bf(I(Bf(I(Bf(I(Bf(I(b,B(378)),a.sx),B(23)),a.se),B(379)),a.r0),B(380)),a.DW),B(381)),a.qC));}
function X_(a){var b;b=new V;X(b);return W(Bf(I(Bf(I(Bf(I(Bf(I(b,B(382)),a.ll),B(23)),a.s9),B(383)),a.xt),B(384)),(a.s9-a.xt|0)-a.ll|0));}
function Tx(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;c=b+(-8)|0;d=d+(-8)|0;a.qs=2147483647;a.qt=2147483647;a.qu=2147483647;a.ta=(-2147483648);a.s_=(-2147483648);a.tb=(-2147483648);e=a.ds*16|0;f=e/2|0;g=0;h=e-1|0;while(g<a.ds){i=g*16|0;j=(i+f|0)-c|0;if(j<0)j=j-h|0;i=i-Bj(j/e|0,e)|0;if(i<a.qs)a.qs=i;if(i>a.ta)a.ta=i;k=0;while(k<a.kb){l=k*16|0;m=(l+f|0)-d|0;if(m<0)m=m-h|0;j=l-Bj(m/e|0,e)|0;if(j<a.qu)a.qu=j;if(j>a.tb)a.tb=j;n=0;while(n<a.dF){o=n*16|0;if(o<a.qt)a.qt=o;if(o>a.s_)a.s_=o;p=a.c9.data[Bj(Bj(k,a.dF)+n|0,
a.ds)+g|0];q=p.i3;St(p,i,o,j);if(!q&&p.i3)T(a.eL,p);n=n+1|0;}k=k+1|0;}g=g+1|0;}}
function VB(a,b,c,d){var e,f,g;if(a.bO.o.hg!=a.sa)Jj(a);if(!c){a.se=0;a.r0=0;a.DW=0;a.sx=0;a.qC=0;}e=b.d-a.rK;f=b.j-a.rJ;g=b.e-a.rI;if(e*e+f*f+g*g>16.0){a.rK=b.d;a.rJ=b.j;a.rI=b.e;Tx(a,K(b.d),K(b.j),K(b.e));P6(a.gO,AYQ(b));}return 0+YJ(a,0,a.gO.data.length,c,d)|0;}
function YJ(a,b,c,d,e){var f,g,h,i,j,k,l;Dy(a.o0);f=0;while(b<c){if(!d){a.se=a.se+1|0;if(a.gO.data[b].g2.data[d])a.qC=a.qC+1|0;else if(a.gO.data[b].fw)a.sx=a.sx+1|0;else a.r0=a.r0+1|0;}if(!a.gO.data[b].g2.data[d]&&a.gO.data[b].fw&&a.gO.data[b].xL&&PQ(a.gO.data[b],d)>=0){T(a.o0,a.gO.data[b]);f=f+1|0;}b=b+1|0;}g=a.bO.f;h=g.cs+(g.d-g.cs)*e;i=g.b7+(g.j-g.b7)*e;j=g.ct+(g.e-g.ct)*e;k=0;while(k<a.o0.s){l=Z(a.o0,k);B3();Bw(l.BD-h,l.Es-i,l.Ds-j);FV(PQ(l,d));BE();k=k+1|0;}return f;}
function HZ(a){if(a.bO.o.du)return;a.py=a.py+1|0;}
function ADi(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;Bd(3553);c=OZ(a.bM,b);d=c.x;e=c.z;f=c.w;if(a.bO.o.ef){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}F9(d,e,f);BA();h=BeW;Gw(0);if(!a.bO.o.du)Bb(2912);F9(d,e,f);FV(a.xN);Bb(3553);Bd(2912);Bd(3008);Bb(3042);Dg(1,1);B3();BU(1.0,1.0,1.0,1.0);Bw(0.0,0.0,0.0);Bv(0.0,
0.0,0.0,1.0);Bv(HC(a.bM,b)*360.0,1.0,0.0,0.0);i=3553;c=a.iG;j=B(385);$p=1;case 1:$z=AHz(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-30.0),100.0,(-30.0),0.0,0.0);G(h,30.0,100.0,(-30.0),1.0,0.0);G(h,30.0,100.0,30.0,1.0,1.0);G(h,(-30.0),100.0,30.0,0.0,1.0);Bt(h);i=3553;c=a.iG;j=B(386);$p=2;case 2:$z=AHz(c,j);if(C()){break _;}k=$z;Cp(i,k);Bz(h);G(h,(-20.0),(-100.0),20.0,1.0,1.0);G(h,20.0,(-100.0),20.0,0.0,1.0);G(h,20.0,(-100.0),(-20.0),0.0,0.0);G(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Bt(h);Bd(3553);g=AJz(a.bM,
b);if(g>0.0){BU(g,g,g,g);FV(a.or);}BU(1.0,1.0,1.0,1.0);Bd(3042);Bb(3008);if(!a.bO.o.du)Bb(2912);BE();F9(d*0.20000000298023224+0.03999999910593033,e*0.20000000298023224+0.03999999910593033,f*0.6000000238418579+0.10000000149011612);Bd(3553);FV(a.xm);Bb(3553);Gw(1);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function YT(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;if(a.bO.o.lj){$p=2;continue _;}Bd(2884);c=a.bO.f.b7;d=a.bO.f.j-a.bO.f.b7;e=b;f=c+d*e;g=32;BA();h=BeW;i=3553;j=a.iG;k
=B(387);$p=1;case 1:$z=AHz(j,k);if(C()){break _;}l=$z;Cp(i,l);Bb(3042);Dg(770,771);j=Ta(a.bM,b);m=j.x;n=j.z;o=j.w;if(a.bO.o.ef){p=m*30.0;m=(p+n*59.0+o*11.0)/100.0;n=(p+n*70.0)/100.0;o=(p+o*70.0)/100.0;}d=a.bM.bg.bS+(a.bM.bg.d-a.bM.bg.bS)*e+(a.py+b)*0.029999999329447746;e=a.bM.bg.bR+(a.bM.bg.e-a.bM.bg.bR)*e;l=K(d/2048.0);q=K(e/2048.0);c=d-(l*2048|0);d=e-(q*2048|0);p=120.0-f+0.33000001311302185;r=c*4.8828125E-4;s=d*4.8828125E-4;Bz(h);Gy(h,m,n,o,0.800000011920929);t=p;u=(-256);while(u<256){v=(-256);while(v<256)
{i=u+0|0;w=i;x=v+g|0;y=x;c=i*4.8828125E-4+r;d=x*4.8828125E-4+s;G(h,w,t,y,c,d);i=u+g|0;e=i;z=i*4.8828125E-4+r;G(h,e,t,y,z,d);i=v+0|0;d=i;y=i*4.8828125E-4+s;G(h,e,t,d,z,y);G(h,w,t,d,c,y);v=x;}u=u+g|0;}Bt(h);BU(1.0,1.0,1.0,1.0);Bd(3042);Bb(2884);return;case 2:ABi(a,b);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function ABi(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:if(a.bO.o.du)return;Bd(2884);c=a.bO.f.b7;d=a.bO.f.j-a.bO.f.b7;e=b;f=c+d*e;BA();g=BeW;h=12.0;c=(a.bM.bg.bS+(a.bM.bg.d-a.bM.bg.bS)*e+(a.py+b)*0.029999999329447746)/12.0;d=(a.bM.bg.bR+(a.bM.bg.e-a.bM.bg.bR)*e)/12.0+0.33000001311302185;i=108.0-f+0.33000001311302185;j=K(c/2048.0);k=K(d/2048.0);e=c-(j*2048|0);d=d-(k*2048|0);l=3553;m=a.iG;n=B(387);$p=1;case 1:$z=AHz(m,n);if(C()){break _;}o=$z;Cp(l,o);Bb(3042);Dg(770,771);m=Ta(a.bM,b);p=m.x;q=m.z;r=m.w;if(a.bO.o.ef){b=p*30.0;p=(b+q*59.0+r*11.0)/100.0;q=(b+q
*70.0)/100.0;r=(b+r*70.0)/100.0;}s=K(e)*0.00390625;t=K(d)*0.00390625;u=e-K(e);v=d-K(d);CC(h,1.0,h);o=0;k=S(i,(-5.0));w=i+0.0;x=S(i,5.0);b=i+4.0;d=b-9.765625E-4;y=b;while(o<2){if(o)FH(1,1,1,1);else FH(0,0,0,0);z=(-2);while(z<=3){ba=(-2);while(ba<=3){Bz(g);bb=z*8|0;bc=ba*8|0;bd=bb-u;be=bc-v;if(k>0){Gy(g,p*0.699999988079071,q*0.699999988079071,r*0.699999988079071,0.800000011920929);Df(g,0.0,(-1.0),0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,w,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625
+s;G(g,bh,w,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);}if(x<=0){Gy(g,p,q,r,0.800000011920929);Df(g,0.0,1.0,0.0);c=bd+0.0;e=be+8.0;bf=(bb+0.0)*0.00390625+s;bg=(bc+8.0)*0.00390625+t;G(g,c,d,e,bf,bg);bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;G(g,bh,d,e,bi,bg);e=be+0.0;bg=(bc+0.0)*0.00390625+t;G(g,bh,d,e,bi,bg);G(g,c,d,e,bf,bg);}a:{Gy(g,p*0.8999999761581421,q*0.8999999761581421,r*0.8999999761581421,0.800000011920929);if(z>(-1)){Df(g,(-1.0),0.0,0.0);bj=0;e=be+8.0;bg=(bc+8.0)*0.00390625
+t;bh=be+0.0;bi=(bc+0.0)*0.00390625+t;while(true){if(bj>=8)break a;b=bj;c=bd+b+0.0;bf=(bb+b+0.5)*0.00390625+s;G(g,c,w,e,bf,bg);G(g,c,y,e,bf,bg);G(g,c,y,bh,bf,bi);G(g,c,w,bh,bf,bi);bj=bj+1|0;}}}b:{if(z<=1){Df(g,1.0,0.0,0.0);bk=0;bf=be+8.0;bh=(bc+8.0)*0.00390625+t;bi=be+0.0;c=(bc+0.0)*0.00390625+t;while(true){if(bk>=8)break b;b=bk;e=bd+b+1.0-9.765625E-4;bg=(bb+b+0.5)*0.00390625+s;G(g,e,w,bf,bg,bh);G(g,e,y,bf,bg,bh);G(g,e,y,bi,bg,c);G(g,e,w,bi,bg,c);bk=bk+1|0;}}}c:{Gy(g,p*0.800000011920929,q*0.800000011920929,
r*0.800000011920929,0.800000011920929);if(ba>(-1)){Df(g,0.0,0.0,(-1.0));bj=0;c=bd+0.0;bf=(bb+0.0)*0.00390625+s;bh=bd+8.0;bi=(bb+8.0)*0.00390625+s;while(true){if(bj>=8)break c;b=bj;e=be+b+0.0;bg=(bc+b+0.5)*0.00390625+t;G(g,c,y,e,bf,bg);G(g,bh,y,e,bi,bg);G(g,bh,w,e,bi,bg);G(g,c,w,e,bf,bg);bj=bj+1|0;}}}d:{if(ba<=1){Df(g,0.0,0.0,1.0);bk=0;bi=bd+0.0;e=(bb+0.0)*0.00390625+s;bg=bd+8.0;bh=(bb+8.0)*0.00390625+s;while(true){if(bk>=8)break d;b=bk;c=be+b+1.0-9.765625E-4;bf=(bc+b+0.5)*0.00390625+t;G(g,bi,y,c,e,bf);G(g,bg,
y,c,bh,bf);G(g,bg,w,c,bh,bf);G(g,bi,w,c,e,bf);bk=bk+1|0;}}}Bt(g);ba=ba+1|0;}z=z+1|0;}o=o+1|0;}BU(1.0,1.0,1.0,1.0);Bd(3042);Bb(2884);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function AIo(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.eL;e=new Wi;e.yj=b;RH(d,e);f=a.eL.s-1|0;g=a.eL.s;h=0;a:{while(h<g){d=Z(a.eL,f-h|0);if(!c){if(G6(d,b)<=1024.0)break a;if(!d.fw){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fw)break a;h=h+1|0;}return a.eL.s?0:1;}$p=1;case 1:ADo(d);if(C()){break _;}Ib(a.eL,d);d.i3=0;a:{while(true){h=h+1|0;if(h>=g)break;d=Z(a.eL,f-h|0);if
(!c){if(G6(d,b)<=1024.0)break a;if(!d.fw){if(h<1)break a;return 0;}if(h<3)break a;return 0;}if(d.fw)break a;}return a.eL.s?0:1;}continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AFM(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;a:{BA();g=BeW;Bb(3042);Bb(3008);Dg(770,1);BU(1.0,1.0,1.0,(Br(Long_toNumber(B_())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(!d){if(a.tK<=0.0)break a;Dg(774,768);e=a.iG;h=B(179);$p=2;continue _;}if(e!==null){Dg(770,771);i=Br(Long_toNumber(B_())
/100.0)*0.20000000298023224+0.800000011920929;BU(i,i,i,Br(Long_toNumber(B_())/200.0)*0.20000000298023224+0.5);b=a.iG;e=B(179);$p=1;continue _;}}Bd(3042);Bd(3008);return;case 1:$z=AHz(b,e);if(C()){break _;}j=$z;Cp(3553,j);Bd(3042);Bd(3008);return;case 2:$z=AHz(e,h);if(C()){break _;}k=$z;Cp(3553,k);BU(1.0,1.0,1.0,0.5);B3();e=a.bM;d=c.h9;k=c.h$;j=c.h_;$p=3;case 3:$z=ACE(e,d,k,j);if(C()){break _;}j=$z;if(j<=0)h=null;else{L();h=Be0.data[j];}Bd(3008);OO((-3.0),(-3.0));Bb(32823);Bz(g);l=b.cs;m=b.d-b.cs;n=f;Fb(g, -(l
+m*n), -(b.b7+(b.j-b.b7)*n), -(b.ct+(b.e-b.ct)*n));ADu(g);if(h===null){L();h=Be6;}b=a.Ec;d=c.h9;k=c.h$;j=c.h_;o=240+(a.tK*10.0|0)|0;$p=4;case 4:AMG(b,h,d,k,j,o);if(C()){break _;}Bt(g);Fb(g,0.0,0.0,0.0);OO(0.0,0.0);Bd(32823);Bb(3008);Gw(1);BE();Bd(3042);Bd(3008);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AGk(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.bO.o.du)return;if(!d&&!c.k$){Bb(3042);Dg(770,771);BU(0.0,0.0,0.0,0.4000000059604645);Bd(3553);Gw(0);e=a.bM;d=c.h9;g=c.h$;h=c.h_;$p=1;continue _;}return;case 1:$z=ACE(e,d,g,h);if(C()){break _;}g=$z;if(g<=0){Gw(1);Bb(3553);Bd(3042);return;}i=b.cs;j=b.d-b.cs;k=f;i=i+j*k;j=b.b7+(b.j-b.b7)*k;k=b.ct
+(b.e-b.ct)*k;L();b=Be0.data[g];e=a.bM;d=c.h9;g=c.h$;h=c.h_;$p=2;case 2:$z=b.oU(e,d,g,h);if(C()){break _;}b=$z;b=Un(Dw(b,0.0020000000949949026,0.0020000000949949026,0.0020000000949949026), -i, -j, -k);if(!a.bO.o.du){BA();c=BeW;Gl(c,3);Bg(c,b.R,b.M,b.S);Bg(c,b.V,b.M,b.S);Bg(c,b.V,b.M,b.W);Bg(c,b.R,b.M,b.W);Bg(c,b.R,b.M,b.S);Bt(c);Gl(c,3);Bg(c,b.R,b.U,b.S);Bg(c,b.V,b.U,b.S);Bg(c,b.V,b.U,b.W);Bg(c,b.R,b.U,b.W);Bg(c,b.R,b.U,b.S);Bt(c);Gl(c,1);Bg(c,b.R,b.M,b.S);Bg(c,b.R,b.U,b.S);Bg(c,b.V,b.M,b.S);Bg(c,b.V,b.U,b.S);Bg(c,
b.V,b.M,b.W);Bg(c,b.V,b.U,b.W);Bg(c,b.R,b.M,b.W);Bg(c,b.R,b.U,b.W);Bt(c);}Gw(1);Bb(3553);Bd(3042);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function TC(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=GK(b,16);i=GK(c,16);j=GK(d,16);k=GK(e,16);l=GK(f,16);m=GK(g,16);while(h<=k){n=h%a.ds|0;if(n<0)n=n+a.ds|0;o=i;while(o<=l){p=o%a.dF|0;if(p<0)p=p+a.dF|0;q=j;while(q<=m){r=q%a.kb|0;if(r<0)r=r+a.kb|0;s=Bj(Bj(r,a.dF)+p|0,a.ds)+n|0;t=a.c9.data[s];if(!t.i3)T(a.eL,t);K1(t);q=q+1|0;}o=o+1|0;}h=h+1|0;}}
function Rw(a,b,c,d){TC(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AOM(a,b,c,d,e,f,g){TC(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function ARS(a,b,c){var d;d=0;while(d<a.c9.data.length){if(!AHC(a.c9.data[d])&&!(a.c9.data[d].fw&&(d+a.q_|0)&15))ASj(a.c9.data[d],b);d=d+1|0;}a.q_=a.q_+1|0;}
function AC8(a,b,c,d,e,f,g){return;}
function AH9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;if(a.bO.o.du)return;i=a.bM.bg.d-c;j=a.bM.bg.j-d;k=a.bM.bg.e-e;if(i*i+j*j+k*k<=256.0){if(b===B(213)){l=a.bO.c6;m=new SM;FE(m,a.bM,c,d,e,f,g,h);m.hY=1.0;m.ic=1.0;m.io=1.0;m.e8=32;D2(m,0.019999999552965164,0.019999999552965164);m.dr=m.dr*(N(m.m)*0.6000000238418579+0.20000000298023224);m.g=f*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.i=g*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.h=h*0.20000000298023224+(BP()*2.0-1.0)*0.019999999552965164;m.cw
=8.0/(BP()*0.8+0.2)|0;El(l,m);}else if(b===B(256))El(a.bO.c6,A8h(a.bM,c,d,e,1.0));else if(b===B(223)){b=a.bO.c6;l=new Q9;FE(l,a.bM,c,d,e,f,g,h);l.g=f+(BP()*2.0-1.0)*0.05000000074505806;l.i=g+(BP()*2.0-1.0)*0.05000000074505806;l.h=h+(BP()*2.0-1.0)*0.05000000074505806;n=N(l.m)*0.30000001192092896+0.699999988079071;l.io=n;l.ic=n;l.hY=n;l.dr=N(l.m)*N(l.m)*6.0+1.0;l.cw=(16.0/(N(l.m)*0.8+0.2)|0)+2|0;El(b,l);}else if(b!==B(257)){if(b===B(254))El(a.bO.c6,BcU(a.bM,c,d,e));else if(b===B(214))El(a.bO.c6,BcH(a.bM,c,d,e,
f,g,h));else if(b===B(255))El(a.bO.c6,A8h(a.bM,c,d,e,2.5));}else{b=a.bO.c6;l=new O_;FE(l,a.bM,c,d,e,f,g,h);l.g=l.g*0.009999999776482582+f;l.i=l.i*0.009999999776482582+g;l.h=l.h*0.009999999776482582+h;N(l.m);N(l.m);N(l.m);N(l.m);N(l.m);N(l.m);l.DU=l.dr;l.io=1.0;l.ic=1.0;l.hY=1.0;l.cw=(8.0/(BP()*0.8+0.2)|0)+4|0;l.o7=1;l.e8=48;El(b,l);}}}
function A$z(a,b){return;}
function ATB(a,b){return;}
function VN(a){var b;b=0;while(b<a.c9.data.length){if(a.c9.data[b].op){if(!a.c9.data[b].i3)T(a.eL,a.c9.data[b]);K1(a.c9.data[b]);}b=b+1|0;}}
function AHh(){var a=this;CT.call(a);a.vf=0.0;a.yy=null;a.t6=null;}
function LR(){var a=new AHh();A4A(a);return a;}
function A4A(a){var b,c;DR(a);a.vf=0.0;b=J(B4,106);c=b.data;c[0]=B(388);c[1]=B(389);c[2]=B(390);c[3]=B(391);c[4]=B(392);c[5]=B(393);c[6]=B(394);c[7]=B(395);c[8]=B(396);c[9]=B(397);c[10]=B(398);c[11]=B(399);c[12]=B(400);c[13]=B(401);c[14]=B(402);c[15]=B(403);c[16]=B(404);c[17]=B(405);c[18]=B(406);c[19]=B(407);c[20]=B(408);c[21]=B(409);c[22]=B(410);c[23]=B(411);c[24]=B(412);c[25]=B(413);c[26]=B(414);c[27]=B(415);c[28]=B(416);c[29]=B(417);c[30]=B(418);c[31]=B(419);c[32]=B(420);c[33]=B(421);c[34]=B(422);c[35]=B(423);c[36]
=B(424);c[37]=B(425);c[38]=B(426);c[39]=B(427);c[40]=B(428);c[41]=B(429);c[42]=B(430);c[43]=B(431);c[44]=B(432);c[45]=B(433);c[46]=B(434);c[47]=B(435);c[48]=B(436);c[49]=B(437);c[50]=B(409);c[51]=B(438);c[52]=B(439);c[53]=B(440);c[54]=B(441);c[55]=B(442);c[56]=B(443);c[57]=B(444);c[58]=B(445);c[59]=B(446);c[60]=B(447);c[61]=B(448);c[62]=B(449);c[63]=B(450);c[64]=B(451);c[65]=B(452);c[66]=B(453);c[67]=B(454);c[68]=B(455);c[69]=B(456);c[70]=B(457);c[71]=B(458);c[72]=B(459);c[73]=B(460);c[74]=B(461);c[75]=B(462);c[76]
=B(463);c[77]=B(464);c[78]=B(465);c[79]=B(466);c[80]=B(467);c[81]=B(468);c[82]=B(469);c[83]=B(470);c[84]=B(471);c[85]=B(472);c[86]=B(473);c[87]=B(474);c[88]=B(475);c[89]=B(476);c[90]=B(477);c[91]=B(478);c[92]=B(479);c[93]=B(480);c[94]=B(481);c[95]=B(482);c[96]=B(483);c[97]=B(484);c[98]=B(485);c[99]=B(486);c[100]=B(487);c[101]=B(488);c[102]=B(489);c[103]=B(490);c[104]=B(491);c[105]=B(492);a.yy=b;a.t6=a.yy.data[BP()*a.yy.data.length|0];}
function A5A(a){a.vf=a.vf+0.009999999776482582;}
function ANS(a,b,c){return;}
function AIy(a){Dy(a.bG);T(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bC/4|0)+48|0,B(493)));T(a.bG,Dj(2,(a.bm/2|0)-100|0,(a.bC/4|0)+72|0,B(494)));T(a.bG,Dj(3,(a.bm/2|0)-100|0,(a.bC/4|0)+96|0,B(495)));T(a.bG,Dj(0,(a.bm/2|0)-100|0,((a.bC/4|0)+120|0)+12|0,B(496)));Z(a.bG,1).gC=0;Z(a.bG,2).gC=0;if(a.J.k2===null)Z(a.bG,1).gC=0;}
function ACy(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cl){c=a.J;d=AIU(a,a.J.o);$p=1;continue _;}if(b.cl!=1)return;b=a.J;c=A$5(a);$p=2;continue _;case 1:AD1(c,d);if(C()){break _;}if(b.cl!=1)return;b=a.J;c=A$5(a);$p=2;case 2:AD1(b,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function ZJ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABo(a);if(C()){break _;}BA();e=BeW;f=3553;g=a.J.bo;h=B(497);$p=2;case 2:$z=AHz(g,h);if(C()){break _;}i=$z;Cp(f,i);BU(1.0,1.0,1.0,1.0);ES(e,16777215);CH(a,(a.bm-256|0)/2|0,30,0,0,256,49);B3();Bw((a.bm/2|0)+90|0,70.0,0.0);Bv((-20.0),0.0,0.0,1.0);j=Br(Long_toNumber(Long_rem(B_(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Dx(a.bZ,a.t6)+32|0);CC(k,k,k);DG(a,a.bZ,a.t6,0,(-8),16776960);BE();Cy(a.bZ,B(498),(a.bm-Dx(a.bZ,B(498))|0)-2|0,a.bC-10|0,16777215);l=KD();m=J7();n=Long_sub(l,Kk());g=new V;X(g);e=W(I(C7(I(C7(I(g,B(499)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(500)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Cy(a.bZ,e,(a.bm-Dx(a.bZ,e)|0)-2|0,2,8421504);g=new V;X(g);e=W(I(C7(I(C7(I(g,
B(502)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(503)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Cy(a.bZ,e,(a.bm-Dx(a.bZ,e)|0)-2|0,12,8421504);$p=3;case 3:AFJ(a,b,c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function O7(){var a=this;D.call(a);a.mX=null;a.cD=null;a.je=null;a.sw=null;}
function El(a,b){var c;c=b.xA();T(a.cD.data[c],b);}
function AA4(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(b<3){c=0;if(c<a.cD.data[b].s){d=Z(a.cD.data[b],c);$p=1;continue _;}b=b+1|0;}return;case 1:d.eq();if(C()){break _;}if(!d.cR)e=c;else{d=a.cD.data[b];e=c+(-1)|0;En(d,c);}c=e+1|0;while(true){if(c<a.cD.data[b].s){d=Z(a.cD.data[b],c);continue _;}b=b+1|0;if(b>=3)break;c=0;}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function ABj(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=BC(b.u*3.1415927410125732/180.0);e=Br(b.u*3.1415927410125732/180.0);f= -e*Br(b.I*3.1415927410125732/180.0);g=d*Br(b.I*3.1415927410125732/180.0);h=BC(b.I*3.1415927410125732/180.0);i=b.cs;j=b.d-b.cs;k=c;BkZ=i+j*k;Bk0=b.b7+(b.j-b.b7)*k;Bk1=b.ct
+(b.e-b.ct)*k;l=0;while(l<2){if(a.cD.data[l].s){if(!l){b=a.je;m=B(505);$p=1;continue _;}if(l==1){b=a.je;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeW;Bz(m);n=0;if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);$p=3;continue _;}Bt(m);}l=l+1|0;}return;case 1:$z=AHz(b,m);if(C()){break _;}p=$z;a:while(true){if(l==1){b=a.je;m=B(179);$p=2;continue _;}Cp(3553,p);BA();m=BeW;Bz(m);n=0;if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);$p=3;continue _;}Bt(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].s)continue;else break;}p
=0;if(!l){b=a.je;m=B(505);continue _;}}return;case 2:$z=AHz(b,m);if(C()){break _;}p=$z;a:while(true){Cp(3553,p);BA();m=BeW;Bz(m);n=0;if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);$p=3;continue _;}Bt(m);while(true){l=l+1|0;if(l>=2)break a;if(!a.cD.data[l].s)continue;else break;}p=0;if(!l){b=a.je;m=B(505);$p=1;continue _;}if(l==1){b=a.je;m=B(179);continue _;}}return;case 3:o.kT(m,c,d,h,e,f,g);if(C()){break _;}n=n+1|0;a:while(true){if(n<a.cD.data[l].s){o=Z(a.cD.data[l],n);continue _;}Bt(m);while(true){l=l+1|0;if(l>=
2)break a;if(!a.cD.data[l].s)continue;else break;}if(!l){b=a.je;m=B(505);$p=1;continue _;}if(l==1){b=a.je;m=B(179);$p=2;continue _;}Cp(3553,0);BA();m=BeW;Bz(m);n=0;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AB3(a,b,c){var d,e,f,g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=2;if(a.cD.data[d].s){BA();e=BeW;f=0;if(f<a.cD.data[d].s){g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;$p=1;continue _;}}return;case 1:g.kT(e,c,h,i,j,k,l);if(C()){break _;}f=f+1|0;if(f>=a.cD.data[d].s)return;g=Z(a.cD.data[d],f);h=0.0;i=0.0;j=0.0;k=0.0;l=0.0;continue _;default:Fa();}}C4().s(a,
b,c,d,e,f,g,h,i,j,k,l,$p);}
function O9(a,b){var c;a.mX=b;c=0;while(c<3){Dy(a.cD.data[c]);c=c+1|0;}}
function AEK(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.mX;$p=1;case 1:a:{$z=ACE(e,b,c,d);if(C()){break _;}f=$z;if(f){L();e=Be0.data[f];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;El(a,AZa(a.mX,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,e));l
=l+1|0;}k=k+1|0;}g=g+1|0;}}}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function Y9(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.mX;$p=1;case 1:$z=ACE(f,b,c,d);if(C()){break _;}g=$z;if(g){L();h=Be0.data[g];i=b;j=i+Cl(a.sw)*(h.dc-h.da-0.20000000298023224)+0.10000000149011612+h.da;k=c;l=k+Cl(a.sw)*(h.cF-h.cM-0.20000000298023224)+0.10000000149011612+h.cM;m=d;n=m+Cl(a.sw)*(h.dd-h.c_-0.20000000298023224)
+0.10000000149011612+h.c_;if(!e)l=k+h.cM-0.10000000149011612;if(e==1)l=k+h.cF+0.10000000149011612;if(e==2)n=m+h.c_-0.10000000149011612;if(e==3)n=m+h.dd+0.10000000149011612;if(e==4)j=i+h.da-0.10000000149011612;if(e==5)j=i+h.dc+0.10000000149011612;El(a,Yh(APz(AZa(a.mX,j,l,n,0.0,0.0,0.0,h),0.20000000298023224),0.6000000238418579));}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function XG(a){var b;b=new V;X(b);return W(Bf(I(b,B(3)),(a.cD.data[0].s+a.cD.data[1].s|0)+a.cD.data[2].s|0));}
function Nw(){var a=this;Gg.call(a);a.g6=null;a.vv=null;a.b2=null;a.F1=null;a.rY=0;a.Er=0.0;a.IO=0.0;}
var Bk2=null;function APR(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=FL(a.b2.cq,a.b2.bF);g=AEw(f);h=Zl(f);i=a.b2.fa;LH(a.b2.eX);Bb(3042);BU(1.0,1.0,1.0,1.0);c=3553;f=a.b2.bo;j
=B(506);$p=1;case 1:$z=AHz(f,j);if(C()){break _;}d=$z;Cp(c,d);k=a.b2.f.K;a.mV=(-90.0);l=g/2|0;m=l-91|0;n=h-22|0;CH(a,m,n,0,0,182,22);CH(a,(m-1|0)+(k.bL*20|0)|0,n-1|0,0,22,24,22);c=3553;f=a.b2.bo;j=B(507);$p=2;case 2:$z=AHz(f,j);if(C()){break _;}d=$z;Cp(c,d);Bb(3042);Dg(775,769);CH(a,l-7|0,(h/2|0)-7|0,0,0,16,16);Bd(3042);o=((a.b2.f.dy/3|0)%2|0)!=1?0:1;if(a.b2.f.dy<10)o=0;p=a.b2.f.bT;q=a.b2.f.tH;NP(a.vv,Long_fromInt(Bj(a.rY,312871)));if(!AJ_(a.b2.cB)){Bd(3042);Bb(32826);B3();Bv(180.0,1.0,0.0,0.0);HB();BE();r=
0;c=l-90|0;m=(h-16|0)-3|0;if(r>=9){DT();Bd(32826);if(!a.b2.o.lu)Cy(i,B(508),2,2,16777215);else{Cy(i,BM(I(I(I(BX(),B(509)),a.b2.lD),B(27))),2,2,16777215);Cy(i,Ml(a.b2),2,12,16777215);Cy(i,Os(a.b2),2,22,16777215);Cy(i,MP(a.b2),2,32,16777215);s=KD();t=J7();u=Long_sub(t,Kk());j=BM(I(C7(I(C7(I(C7(I(BX(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hw(a,i,j,(g-Dx(i,
j)|0)-2|0,2,14737632);f=BM(I(C7(I(C7(I(BX(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hw(a,i,f,(g-Dx(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CY(a.g6)&&m<10){if(Z(a.g6,m).oD<200)Cy(i,Z(a.g6,m).yE,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;}r=AC7(a.b2.f);n=0;v=h-32|0;w=l+91|0;d=S(p,4);while(n<10){if(r>0){x=(w-(n*8|0)|0)-9|0;c=S((n*2|0)+1|0,r);if(c<0)CH(a,x,v,34,9,9,9);if(!c)CH(a,
x,v,25,9,9,9);if(c>0)CH(a,x,v,16,9,9,9);}y=0;if(o)y=1;z=m+(n*8|0)|0;c=d>0?v:v+E(a.vv,2)|0;CH(a,z,c,16+(y*9|0)|0,0,9,9);if(o){e=S((n*2|0)+1|0,q);if(e<0)CH(a,z,c,70,0,9,9);if(!e)CH(a,z,c,79,0,9,9);}e=S((n*2|0)+1|0,p);if(e<0)CH(a,z,c,52,0,9,9);if(!e)CH(a,z,c,61,0,9,9);n=n+1|0;}f=a.b2.f;j=Bf1;$p=4;continue _;case 3:AED(a,r,n,m,b);if(C()){break _;}r=r+1|0;if(r>=9){DT();Bd(32826);if(!a.b2.o.lu)Cy(i,B(508),2,2,16777215);else{Cy(i,BM(I(I(I(BX(),B(509)),a.b2.lD),B(27))),2,2,16777215);Cy(i,Ml(a.b2),2,12,16777215);Cy(i,
Os(a.b2),2,22,16777215);Cy(i,MP(a.b2),2,32,16777215);s=KD();t=J7();u=Long_sub(t,Kk());j=BM(I(C7(I(C7(I(C7(I(BX(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hw(a,i,j,(g-Dx(i,j)|0)-2|0,2,14737632);f=BM(I(C7(I(C7(I(BX(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hw(a,i,f,(g
-Dx(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CY(a.g6)&&m<10){if(Z(a.g6,m).oD<200)Cy(i,Z(a.g6,m).yE,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;continue _;case 4:a:{$z=AGM(f,j);if(C()){break _;}c=$z;if(c){c=Nh((a.b2.f.ga-2|0)*10.0/300.0)|0;ba=(Nh(a.b2.f.ga*10.0/300.0)|0)-c|0;x=0;d=c+ba|0;p=v-9|0;while(true){if(x>=d)break a;if(x>=c)CH(a,m+(x*8|0)|0,p,25,18,9,9);else CH(a,m+(x*8|0)|0,p,16,18,9,9);x=x+1|0;}}}Bd(3042);Bb(32826);B3();Bv(180.0,1.0,0.0,0.0);HB();BE();r=0;c=l-90|0;m=(h-
16|0)-3|0;if(r>=9){DT();Bd(32826);if(!a.b2.o.lu)Cy(i,B(508),2,2,16777215);else{Cy(i,BM(I(I(I(BX(),B(509)),a.b2.lD),B(27))),2,2,16777215);Cy(i,Ml(a.b2),2,12,16777215);Cy(i,Os(a.b2),2,22,16777215);Cy(i,MP(a.b2),2,32,16777215);s=KD();t=J7();u=Long_sub(t,Kk());j=BM(I(C7(I(C7(I(C7(I(BX(),B(510)),Long_div(Long_mul(u,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(u,Long_fromInt(1024)),Long_fromInt(1024))),B(511)),Long_div(Long_div(s,Long_fromInt(1024)),Long_fromInt(1024))),B(501)));Hw(a,i,j,(g-Dx(i,j)|0)-2|0,2,14737632);f
=BM(I(C7(I(C7(I(BX(),B(502)),Long_div(Long_mul(t,Long_fromInt(100)),s)),B(503)),Long_div(Long_div(t,Long_fromInt(1024)),Long_fromInt(1024))),B(504)));Hw(a,i,f,(g-Dx(i,f)|0)-2|0,12,14737632);}m=0;e=h-8|0;while(m<CY(a.g6)&&m<10){if(Z(a.g6,m).oD<200)Cy(i,Z(a.g6,m).yE,2,(e-(m*9|0)|0)-20|0,16777215);m=m+1|0;}return;}n=(c+(r*20|0)|0)+2|0;$p=3;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,$p);}
function AED(a,b,c,d,e){var f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=a.b2.f.K.bh.data[b];if(f===null)return;g=f.mN-e;b=S(g,0.0);if(b>0){B3();h=1.0+g/5.0;i=c+8|0;g=i;j=d+12|0;Bw(g,j,0.0);CC(1.0/h,(h+1.0)/2.0,1.0);Bw( -i, -j,0.0);}k=Bk2;l=a.b2.fa;m=a.b2.bo;$p=1;case 1:AGl(k,l,m,f,c,d);if(C()){break _;}if(b>0)BE();Lr(Bk2,a.b2.fa,a.b2.bo,f,c,d);return;default:
Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AKF(a){var b,c;a.rY=a.rY+1|0;b=0;while(b<a.g6.s){c=Z(a.g6,b);c.oD=c.oD+1|0;b=b+1|0;}}
function AAg(){Bk2=X$();}
function Le(){}
function IN(){var a=this;D.call(a);a.ji=null;a.kU=null;a.eg=null;a.be=null;a.gp=null;a.fU=0;a.gr=0;a.gg=null;a.vK=0;a.wS=0;}
function B2(a,b,c){var d;if(b==a.fU&&c==a.gr&&a.gg!==null)return 1;a:{b:{d=(b&31)+((c&31)*32|0)|0;if(a.be.data[d]!==null){if(a.be.data[d]===a.ji)break b;if(ARO(a.be.data[d],b,c))break b;}b=0;break a;}b=1;}return b;}
function AOl(a,b,c){var d,e,f,g,h,i,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b==a.fU&&c==a.gr&&a.gg!==null)return a.gg;if(!a.gp.ud&&!AGA(a,b,c))return a.ji;d=(b&31)+((c&31)*32|0)|0;if(!B2(a,b,c)){if(a.be.data[d]!==null)AOU(a.be.data[d]);if(a.eg===null)e=null;else{try{f=a.eg;e=a.gp;$p=1;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){f=$$je;}else{throw $$e;}}B9(f);e=a.ji;}if(e===
null){if(a.kU!==null){f=a.kU;$p=2;continue _;}e=a.ji;}a.be.data[d]=e;if(a.be.data[d]!==null)MJ(a.be.data[d]);if(!a.be.data[d].hf){g=b+1|0;h=c+1|0;if(B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=6;continue _;}}g=b-1|0;if(B2(a,g,c)){$p=3;continue _;}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(B2(a,g,h)){$p=5;continue _;}}a.fU=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];case 1:a:{try{$z=AG2(f,e,b,c);if(C()){break _;}e=$z;if(e!==null)e.nr=a.gp.dU;break a;}catch($$e){$$je=Q($$e);if($$je instanceof BD){f=$$je;}else{throw $$e;}}B9(f);e
=a.ji;}if(e===null){if(a.kU!==null){f=a.kU;$p=2;continue _;}e=a.ji;}a.be.data[d]=e;if(a.be.data[d]!==null)MJ(a.be.data[d]);if(!a.be.data[d].hf){g=b+1|0;h=c+1|0;if(B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=6;continue _;}}g=b-1|0;if(B2(a,g,c)){$p=3;continue _;}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 2:$z=Uj(f,b,c);if(C()){break _;}e=$z;a.be.data[d]=e;if(a.be.data[d]!==null)MJ(a.be.data[d]);if(!a.be.data[d].hf){g=b+1|0;h=c+1|0;if
(B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=6;continue _;}}g=b-1|0;if(B2(a,g,c)){$p=3;continue _;}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 3:$z=AOl(a,g,c);if(C()){break _;}f=$z;if(!f.hf){h=c+1|0;if(B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=7;continue _;}}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 4:$z=AOl(a,b,h);if(C()){break _;}f=$z;if(!f.hf){i=b+1|0;if
(B2(a,i,h)&&B2(a,b,h)&&B2(a,i,c)){$p=8;continue _;}}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;case 5:$z=AOl(a,g,h);if(C()){break _;}f=$z;if(!f.hf&&B2(a,g,h)&&B2(a,b,h)&&B2(a,g,c)){$p=9;continue _;}a.fU=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];case 6:AFw(a,a,b,c);if(C()){break _;}g=b-1|0;if(B2(a,g,c)){$p=3;continue _;}h=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 7:AFw(a,a,g,c);if(C()){break _;}h
=c-1|0;if(B2(a,b,h)){$p=4;continue _;}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 8:AFw(a,a,b,h);if(C()){break _;}if(!B2(a,g,h)){a.fU=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];}$p=5;continue _;case 9:AFw(a,a,g,h);if(C()){break _;}a.fU=b;a.gr=c;a.gg=a.be.data[d];return a.be.data[d];default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AFw(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AOl(a,c,d);if(C()){break _;}e=$z;if(!e.hf){e.hf=1;if(a.kU!==null){f=a.kU;$p=2;continue _;}}return;case 2:AH0(f,b,c,d);if(C()){break _;}SV(e);return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AN5(a,b,c){var d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=0;e=0;if(c!==null){f=0;while(f<a.be.data.length){if(a.be.data[f]!==null&&Kv(a.be.data[f],b))e=e+1|0;f=f+1|0;}}g=0;h=0;while(true){if(h>=a.be.data.length){if(b&&a.eg===null)return 1;return 1;}if(a.be.data[h]!==null){if(b&&!a.be.data[h].qe)a:{i=a.be.data[h];if(a.eg!==null){try{MG(a.eg,a.gp,i);break a;}
catch($$e){$$je=Q($$e);if($$je instanceof BD){i=$$je;}else{throw $$e;}}i.nD();}}if(Kv(a.be.data[h],b)){i=a.be.data[h];if(a.eg!==null){try{i.nr=a.gp.dU;j=a.eg;k=a.gp;$p=1;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BL){i=$$je;}else{throw $$e;}}B9(i);}a.be.data[h].e$=0;d=d+1|0;if(d==2&&!b)break;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}}}h=h+1|0;}return 0;case 1:b:{try{Y1(j,k,i);if(C()){break _;}break b;}catch($$e){$$je=Q($$e);if($$je instanceof BL){i=$$je;}else{throw $$e;}}B9(i);}while
(true){a.be.data[h].e$=0;d=d+1|0;if(d==2&&!b)break;if(c!==null){g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;$p=2;continue _;}}while(true){h=h+1|0;if(h>=a.be.data.length){if(b&&a.eg===null)return 1;return 1;}if(a.be.data[h]===null)continue;if(b&&!a.be.data[h].qe)c:{i=a.be.data[h];if(a.eg!==null){try{MG(a.eg,a.gp,i);break c;}catch($$e){$$je=Q($$e);if($$je instanceof BD){i=$$je;}else{throw $$e;}}i.nD();}}if(Kv(a.be.data[h],b))break;}i=a.be.data[h];if(a.eg===null)continue;try{i.nr=a.gp.dU;j=a.eg;k=a.gp;continue _;}catch
($$e){$$je=Q($$e);if($$je instanceof BL){i=$$je;}else{throw $$e;}}B9(i);}return 0;case 2:XQ(c,f);if(C()){break _;}while(true){h=h+1|0;if(h>=a.be.data.length){if(b&&a.eg===null)return 1;return 1;}if(a.be.data[h]===null)continue;if(b&&!a.be.data[h].qe)d:{i=a.be.data[h];if(a.eg!==null){try{MG(a.eg,a.gp,i);break d;}catch($$e){$$je=Q($$e);if($$je instanceof BD){i=$$je;}else{throw $$e;}}i.nD();}}if(!Kv(a.be.data[h],b))continue;i=a.be.data[h];if(a.eg!==null){try{i.nr=a.gp.dU;j=a.eg;k=a.gp;$p=1;continue _;}catch($$e)
{$$je=Q($$e);if($$je instanceof BL){i=$$je;}else{throw $$e;}}B9(i);}a.be.data[h].e$=0;d=d+1|0;if(d==2&&!b)break;if(c===null)continue;g=g+1|0;if(!(g%10|0)){f=(g*100|0)/e|0;continue _;}}return 0;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function MZ(a,b,c){a.vK=b;a.wS=c;}
function AGA(a,b,c){return b>=(a.vK-15|0)&&c>=(a.wS-15|0)&&b<=(a.vK+15|0)&&c<=(a.wS+15|0)?1:0;}
function A_D(a){return 1;}
function JD(){var a=this;EQ.call(a);a.K=null;a.AO=0;a.k6=0;a.qB=0.0;a.kY=0.0;a.CQ=null;a.yb=0;}
function AF1(a){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AK0(a);if(C()){break _;}a.qB=a.kY;a.kY=0.0;return;default:Fa();}}C4().s(a,$p);}
function ALd(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.c4=1.6200000047683716;D2(a,0.6000000238418579,1.7999999523162842);if(a.l!==null){if(a.j>0.0){CU(a,a.d,a.j,a.e);b=a.l;c=a.L;$p=1;continue _;}a.h=0.0;a.i=0.0;a.g=0.0;a.I=0.0;}if(a.l!==null)a.l.bg=a;a.bT=20;a.c2=0;return;case 1:$z=X2(b,a,c);if(C()){break _;}b=$z;if(b.s){a.j=a.j+1.0;if(a.j>0.0){CU(a,a.d,a.j,a.e);b=a.l;c=a.L;continue _;}}a.h=0.0;a.i=0.0;a.g=0.0;a.I=0.0;if(a.l!==null)a.l.bg
=a;a.bT=20;a.c2=0;return;default:Fa();}}C4().s(a,b,c,$p);}
function Za(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.l.i2&&a.bT<20&&!((a.oS%20|0)*4|0))U0(a,1);AEp(a.K);a.qB=a.kY;$p=1;case 1:ACx(a);if(C()){break _;}b=Ce(a.g*a.g+a.h*a.h);c=Ix( -a.i*0.20000000298023224)*15.0;if(b>0.10000000149011612)b=0.10000000149011612;if(!(a.cx&&a.bT>0))b=0.0;if(!(!a.cx&&a.bT>0))c=0.0;a.kY=a.kY+(b-a.kY)*0.4000000059604645;a.jm=a.jm+(c-a.jm)*0.800000011920929;if(a.bT<=0)return;d
=a.l;e=Dw(a.L,1.0,0.0,1.0);$p=2;case 2:a:{$z=ADR(d,a,e);if(C()){break _;}d=$z;if(d!==null){f=0;while(true){if(f>=d.s)break a;Z(d,f).xJ(a);f=f+1|0;}}}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function A4I(a){return a.k6;}
function ALl(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:D2(a,0.20000000298023224,0.20000000298023224);CU(a,a.d,a.j,a.e);a.i=0.10000000149011612;if(!DC(a.CQ,B(512))){c=a.K;$p=1;continue _;}c=new Cd;BB();Gq(c,BhZ,1);d=1;$p=2;continue _;case 1:AI6(c);if(C()){break _;}if(b===null){a.h=0.0;a.g=0.0;}else{a.g= -BC((a.kI+a.u)*3.1415927410125732/180.0)*0.10000000149011612;a.h= -Br((a.kI+a.u)*3.1415927410125732/180.0)*0.10000000149011612;}a.c4
=0.10000000149011612;return;case 2:AQC(a,c,d);if(C()){break _;}c=a.K;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,$p);}
function AZE(a,b,c){a.k6=a.k6+c|0;}
function AL0(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;$p=1;case 1:AQC(a,b,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,$p);}
function AQC(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b===null)return;d=Hf(a.l,a.d,a.j-0.30000001192092896,a.e,b);d.g_=40;if(c){e=N(a.m)*0.5;f=N(a.m)*3.1415927410125732*2.0;d.g= -Br(f)*e;d.h=BC(f)*e;d.i=0.20000000298023224;}else{d.g= -Br(a.u/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732)*0.30000001192092896;d.h=BC(a.u/180.0*3.1415927410125732)
*BC(a.I/180.0*3.1415927410125732)*0.30000001192092896;d.i= -Br(a.I/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=N(a.m)*3.1415927410125732*2.0;g=0.019999999552965164*N(a.m);h=d.g;i=e;j=GE(i);k=g;d.g=h+j*k;d.i=d.i+(N(a.m)-N(a.m))*0.10000000149011612;d.h=d.h+Gt(i)*k;}b=a.l;$p=1;case 1:AOn(b,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AKZ(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=ADD(a.K,b);b=Bf1;$p=1;case 1:$z=AGM(a,b);if(C()){break _;}d=$z;if(d)c=c/5.0;if(!a.cx)c=c/5.0;return c;default:Fa();}}C4().s(a,b,c,d,$p);}
function Nb(a,b){return AD2(a.K,b);}
function A5r(a){return 0.11999999731779099;}
function Yx(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.hk=0;if(a.bT<=0)return 0;if(a.dy>a.o1/2.0)return 0;if(!(!(b instanceof DP)&&!(b instanceof JB))){if(!a.l.i2)c=0;if(a.l.i2==1)c=(c/3|0)+1|0;if(a.l.i2==3)c=(c*3|0)/2|0;}d=Bj(c,25-TN(a.K)|0)+a.yb|0;AD7(a.K,c);c=d/25|0;a.yb=d%25|0;if(!c)return 0;$p=1;case 1:$z=AB_(a,b,c);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,d,$p);}
function AGH(){var a=this;JD.call(a);a.hW=null;a.k7=null;}
function A6R(a,b,c){var d=new AGH();AY6(d,a,b,c);return d;}
function AY6(a,b,c,d){var e;FD(a,c);a.o1=20;a.dG=0.0;a.e_=0.0;a.Hc=1;a.yw=B(376);a.Hb=1;a.D9=0.0;a.E6=null;a.JB=1.0;a.u2=0;a.JC=0.0;a.bT=10;a.kI=0.0;a.c2=0;a.dz=0;a.Cp=0;a.Fm=(-1);a.JH=BP()*0.8999999761581421+0.10000000149011612;a.hk=0;a.hG=0;a.zX=0.0;a.s2=0.699999988079071;a.mG=1;a.Iw=(BP()+1.0)*0.009999999776482582;CU(a,a.d,a.j,a.e);a.JO=BP()*12398.0;a.u=BP()*3.1415927410125732*2.0;a.Ha=1.0;a.ru=0.5;e=new VM;e.bh=J(Cd,36);e.cd=J(Cd,4);e.bL=0;e.nF=a;a.K=e;a.AO=0;a.k6=0;a.yb=0;KB(a,c.fl+0.5,c.p2,c.fk+0.5,0.0,
0.0);a.c4=1.6200000047683716;a.bT=20;a.E6=B(513);a.D9=180.0;a.nL=20;a.yw=B(376);a.k7=b;if(c.bg!==null)Cb(c.bg);c.bg=a;if(d!==null&&d.om!==null&&Bi(d.om)>0){b=new V;X(b);a.tL=W(I(I(I(b,B(514)),d.om),B(515)));}a.CQ=d.om;}
function AAW(a){a.iN=a.hW.kE;a.gD=a.hW.ku;a.hG=a.hW.up;}
function ALu(a){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOH(a.hW,a);$p=1;case 1:Za(a);if(C()){break _;}return;default:Fa();}}C4().s(a,$p);}
function ARP(a){AO7(a.hW);}
function Ev(a,b,c){APA(a.hW,b,c);}
function ABX(a,b){Fu(b,B(516),a.bT<<16>>16);Fu(b,B(517),a.dE<<16>>16);Fu(b,B(518),a.c2<<16>>16);Fu(b,B(519),a.dz<<16>>16);Gz(b,B(520),a.k6);HK(b,B(325),AMc(a.K,Mb()));}
function AO4(a,b){var c;a.bT=FM(b,B(516));if(!Y7(b,B(516)))a.bT=10;a.dE=FM(b,B(517));a.c2=FM(b,B(518));a.dz=FM(b,B(519));a.k6=FX(b,B(520));c=Kp(b,B(325));ARv(a.K,c);}
function Y8(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k7;d=Bca(a.K,b);$p=1;case 1:AD1(c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function AJf(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k7;d=new SX;DR(d);d.Ah=B(521);d.f3=0;d.fS=b;$p=1;case 1:AD1(c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function ANy(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.k7;c=new Xt;d=a.K;Ih(c);c.mt=A0N(c,3,3);c.us=A5s();T(c.c7,A3B(c,c.mt,c.us,0,124,35));e=0;while(e<3){f=0;while(f<3){T(c.c7,D7(c,c.mt,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){T(c.c7,D7(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){T(c.c7,D7(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:AD1(b,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AO_(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.k7;d=new Wt;e=a.K;Ih(d);d.sM=b;T(d.c7,D7(d,b,0,56,17));T(d.c7,D7(d,b,1,56,53));T(d.c7,D7(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){T(d.c7,D7(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){T(d.c7,D7(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:AD1(c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,
b,c,d,e,f,g,h,$p);}
function Ky(a){return D9(a.K);}
function JI(a){AFI(a.K,a.K.bL,null);}
function ADC(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=AR3(a.K,b);if(c<=0)return;$p=1;case 1:b.fs(a,c);if(C()){break _;}d=Ky(a);if(d!==null&&b instanceof EQ){AE5(d,b);if(d.p<=0)JI(a);}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function R6(a,b){var c,d;c=a.k7.c6;d=new Vc;FE(d,a.k7.A,b.d,b.j,b.e,b.g,b.i,b.h);d.qa=0;d.rg=0;d.mC=b;d.hP=a;d.rg=3;d.AY=(-0.5);El(c,d);}
function AC7(a){return TN(a.K);}
function VA(a,b){var c;if(!b.uL(a)){c=Ky(a);if(c!==null&&b instanceof EQ){AEH(c,b);if(c.p<=0)JI(a);}}}
function Qu(){D.call(this);}
var Bk3=null;function Bk4(){var a=new Qu();ANT(a);return a;}
function ANT(a){return;}
function Br(b){return Bk3.data[(b*651.8986206054688|0)&4095];}
function BC(b){return Bk3.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function D_(b){return Ed(b);}
function Ce(b){return Ed(b);}
function EY(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function K(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function GK(b,c){return b>=0?b/c|0: -(( -b-1|0)/c|0)-1|0;}
function AMb(){var b,c,d,e;Bk3=$rt_createFloatArray(4096);b=0;while(b<4096){Bk3.data[b]=Gt((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=Bk3.data;e=c;d[(e*11.377778053283691|0)&4095]=Gt(e*0.01745329238474369);c=c+90|0;}}
function AJO(){D.call(this);}
function Bk5(){var a=new AJO();AWk(a);return a;}
function AWk(a){return;}
function AMP(b){Be();Ber=b;if(b){Bd8=0.0;Bd9=0.0;setTimeout(Cu(new QG,"onTimer"),200);}else{Bep=B_();if(Beq)clearTimeout(Beq);Beq=0;BdN.exitPointerLock();}}
function FB(){var b,c;a:{Be();Bel=null;if(!P4(Bd4)){b=Tv(Bd4,0);Bel=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function Cx(){Be();return Bel===null?0:DC($rt_str(Bel.type),B(522));}
function AR6(){Be();return Bel===null?(-1):Bel.clientX;}
function X0(){Be();return Bel===null?(-1):BdP.clientHeight-Bel.clientY|0;}
function CW(){var b;Be();if(Bel===null)b=(-1);else{b=Bel.button;if(b==1)b=2;else if(b==2)b=1;}return b;}
function B$(b){Be();return Ben.data[b];}
function G3(){Be();return !DC(B(523),$rt_str(Bel.type))?0:Bel.deltaY===0.0?0:Bel.deltaY<=0.0?1:(-1);}
function Vz(){var a=this;D.call(a);a.ED=null;a.bI=0;}
function E9(a,b){var c=new Vz();A15(c,a,b);return c;}
function A15(a,b,c){a.ED=b;a.bI=c;}
function FF(){}
function VM(){var a=this;D.call(a);a.bh=null;a.cd=null;a.bL=0;a.nF=null;}
function D9(a){return a.bh.data[a.bL];}
function S_(a,b){var c;c=0;while(true){if(c>=a.bh.data.length)return (-1);if(a.bh.data[c]!==null&&a.bh.data[c].bA==b)break;c=c+1|0;}return c;}
function RO(a){var b;b=0;while(true){if(b>=a.bh.data.length)return (-1);if(a.bh.data[b]===null)break;b=b+1|0;}return b;}
function ARq(a,b,c){var d;d=S_(a,b);if(d>=0&&d<9)a.bL=d;}
function F8(a,b){if(b>0)b=1;if(b<0)b=(-1);a.bL=a.bL-b|0;while(a.bL<0){a.bL=a.bL+9|0;}while(a.bL>=9){a.bL=a.bL-9|0;}}
function AEp(a){var b,c;b=0;while(b<a.bh.data.length){if(a.bh.data[b]!==null&&a.bh.data[b].mN>0){c=a.bh.data[b];c.mN=c.mN-1|0;}b=b+1|0;}}
function AGU(a,b){var c,d;c=S_(a,b);if(c<0)return 0;d=a.bh.data[c];b=d.p-1|0;d.p=b;if(b<=0)a.bh.data[c]=null;return 1;}
function Vk(a,b){var c,d,e,f;if(!b.eo){c=b.bA;d=b.p;e=0;a:{while(true){if(e>=a.bh.data.length){e=(-1);break a;}if(a.bh.data[e]!==null&&a.bh.data[e].bA==c&&a.bh.data[e].p<ED(a.bh.data[e])&&a.bh.data[e].p<64)break;e=e+1|0;}}if(e<0)e=RO(a);if(e>=0){if(a.bh.data[e]===null)a.bh.data[e]=KH(c,0);c=d<=(ED(a.bh.data[e])-a.bh.data[e].p|0)?d:ED(a.bh.data[e])-a.bh.data[e].p|0;if(c>(64-a.bh.data[e].p|0))c=64-a.bh.data[e].p|0;if(c){d=d-c|0;f=a.bh.data[e];f.p=f.p+c|0;a.bh.data[e].mN=5;}}b.p=d;if(!b.p)return 1;}c=RO(a);if(c
<0)return 0;a.bh.data[c]=b;a.bh.data[c].mN=5;return 1;}
function Em(a,b,c){var d,e,f;d=a.bh;if(b>=a.bh.data.length){d=a.cd;b=b-a.bh.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].p<=c){e=d[b];d[b]=null;return e;}f=EG(d[b],c);if(!d[b].p)d[b]=null;return f;}
function AFI(a,b,c){var d;d=a.bh;if(b>=a.bh.data.length){d=a.cd;b=b-a.bh.data.length|0;}d.data[b]=c;}
function ADD(a,b){var c;c=1.0;if(a.bh.data[a.bL]!==null)c=c*AFm(a.bh.data[a.bL],b);return c;}
function AMc(a,b){var c,d,e;c=0;while(c<a.bh.data.length){if(a.bh.data[c]!==null){d=Ha();JT(d,B(524),c<<24>>24);QU(a.bh.data[c],d);Jz(b,d);}c=c+1|0;}e=0;while(e<a.cd.data.length){if(a.cd.data[e]!==null){d=Ha();JT(d,B(524),(e+100|0)<<24>>24);QU(a.cd.data[e],d);Jz(b,d);}e=e+1|0;}return b;}
function ARv(a,b){var c,d,e;a.bh=J(Cd,36);a.cd=J(Cd,4);c=0;while(c<AOA(b)){d=Fd(b,c);e=LG(d,B(524))&255;if(e>=0&&e<a.bh.data.length)a.bh.data[e]=A_h(d);if(e>=100&&e<(a.cd.data.length+100|0))a.cd.data[e-100|0]=A_h(d);c=c+1|0;}}
function Yy(a){return a.bh.data.length+4|0;}
function RY(a,b){var c;c=a.bh;if(b>=a.bh.data.length){c=a.cd;b=b-a.bh.data.length|0;}return c.data[b];}
function ATC(a){return B(325);}
function AZA(a){return 64;}
function AR3(a,b){var c;c=RY(a,a.bL);return c===null?1:AAs(c,b);}
function AD2(a,b){var c;if(b.b_!==Bhk&&b.b_!==Bhz)return 1;c=RY(a,a.bL);return c===null?0:AOe(c,b);}
function AIn(a,b){return a.cd.data[b];}
function TN(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.cd.data.length){if(a.cd.data[e]!==null&&DL(a.cd.data[e]) instanceof F6){f=Kt(a.cd.data[e]);c=c+(f-a.cd.data[e].eo|0)|0;d=d+f|0;b=b+DL(a.cd.data[e]).zf|0;}e=e+1|0;}if(!d)return 0;return (Bj(b-1|0,c)/d|0)+1|0;}
function AD7(a,b){var c;c=0;while(c<a.cd.data.length){if(a.cd.data[c]!==null&&DL(a.cd.data[c]) instanceof F6){FN(a.cd.data[c],b);if(!a.cd.data[c].p)a.cd.data[c]=null;}c=c+1|0;}}
function AI6(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;while(true){if(b>=a.bh.data.length){b=0;while(b<a.cd.data.length){if(a.cd.data[b]!==null){c=a.nF;d=a.cd.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bh.data[b]!==null)break;b=b+1|0;}c=a.nF;d=a.bh.data[b];e=1;$p=1;case 1:AQC(c,d,e);if(C()){break _;}a.bh.data[b]=null;while(true){b=b+1|0;if(b>=a.bh.data.length){b=0;while(b<a.cd.data.length){if(a.cd.data[b]
!==null){c=a.nF;d=a.cd.data[b];e=1;$p=2;continue _;}b=b+1|0;}return;}if(a.bh.data[b]===null)continue;else break;}c=a.nF;d=a.bh.data[b];e=1;continue _;case 2:AQC(c,d,e);if(C()){break _;}a.cd.data[b]=null;while(true){b=b+1|0;if(b>=a.cd.data.length)break;if(a.cd.data[b]===null)continue;else{c=a.nF;d=a.cd.data[b];e=1;continue _;}}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AAv(a){return;}
function Dv(){I7.call(this);}
function Ey(){var a=this;CT.call(a);a.br=null;a.fb=0;a.fn=0;a.c7=null;}
var Bk6=null;function Bk7(){var a=new Ey();Ih(a);return a;}
function Ih(a){DR(a);a.br=null;a.fb=176;a.fn=166;a.c7=Ci();}
function ACp(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABo(a);if(C()){break _;}e=(a.bm-a.fb|0)/2|0;f=(a.bC-a.fn|0)/2|0;$p=2;case 2:a.s5(d);if(C()){break _;}B3();Bv(180.0,1.0,0.0,0.0);HB();BE();B3();Bw(e,f,0.0);BU(1.0,1.0,1.0,1.0);Bb(32826);g=0;if(g>=a.c7.s){if(a.br===null){Bd(32826);DT();Bd(2896);Bd(2929);a.lv();Bb(2896);Bb(2929);BE();return;}Bw(0.0,
0.0,32.0);h=Bk6;i=a.bZ;j=a.J.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e5;l=h.lS;m=h.jQ;n=h.jS;i=i.gx(l);if(i===null){l=h.rZ();if(l>=0){Bd(2896);i=a.J.bo;j=a.J.bo;k=B(230);$p=5;continue _;}}j=Bk6;k=a.bZ;o=a.J.bo;$p=4;continue _;case 3:AGl(h,i,j,k,b,c);if(C()){break _;}Lr(Bk6,a.bZ,a.J.bo,a.br,b,c);Bd(32826);DT();Bd(2896);Bd(2929);a.lv();Bb(2896);Bb(2929);BE();return;case 4:AGl(j,k,o,i,m,n);if(C()){break _;}Lr(Bk6,a.bZ,a.J.bo,i,m,n);if(Nd(h,b,c)){Bd(2896);Bd(2929);l=h.jQ;p=h.jS;KS(a,
l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Bb(2896);Bb(2929);}g=g+1|0;if(g>=a.c7.s){if(a.br===null){Bd(32826);DT();Bd(2896);Bd(2929);a.lv();Bb(2896);Bb(2929);BE();return;}Bw(0.0,0.0,32.0);h=Bk6;i=a.bZ;j=a.J.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e5;l=h.lS;m=h.jQ;n=h.jS;i=i.gx(l);if(i===null){l=h.rZ();if(l>=0){Bd(2896);i=a.J.bo;j=a.J.bo;k=B(230);$p=5;continue _;}}j=Bk6;k=a.bZ;o=a.J.bo;continue _;case 5:$z=AHz(j,k);if(C()){break _;}p=$z;Eb(i,p);CH(a,m,n,(l%16|0)*16|0,(l/16|
0)*16|0,16,16);Bb(2896);if(Nd(h,b,c)){Bd(2896);Bd(2929);l=h.jQ;p=h.jS;KS(a,l,p,l+16|0,p+16|0,(-2130706433),(-2130706433));Bb(2896);Bb(2929);}g=g+1|0;if(g>=a.c7.s){if(a.br===null){Bd(32826);DT();Bd(2896);Bd(2929);a.lv();Bb(2896);Bb(2929);BE();return;}Bw(0.0,0.0,32.0);h=Bk6;i=a.bZ;j=a.J.bo;k=a.br;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;}h=Z(a.c7,g);i=h.e5;l=h.lS;m=h.jQ;n=h.jS;i=i.gx(l);if(i===null){l=h.rZ();if(l>=0){Bd(2896);i=a.J.bo;j=a.J.bo;k=B(230);continue _;}}j=Bk6;k=a.bZ;o=a.J.bo;$p=4;continue _;default:
Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AQF(a,b,c){var d,e;d=0;while(true){if(d>=a.c7.s)return null;e=Z(a.c7,d);if(Nd(e,b,c))break;d=d+1|0;}return e;}
function AN_(a,b,c,d){var e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(d&&d!=1)){e=AQF(a,b,c);if(e!==null){$p=1;continue _;}if(a.br!==null){f=(a.bm-a.fb|0)/2|0;g=(a.bC-a.fn|0)/2|0;if(!(b>=f&&c>=g&&b<(f+a.fb|0)&&c<(g+a.fb|0))){h=a.J.f;if(!d){e=a.br;$p=2;continue _;}if(d==1){e=EG(a.br,1);$p=3;continue _;}}}}return;case 1:a:{AKH(e);if(C()){break _;}i=ARD(e);if(!(i===null&&a.br===null)){if
(i!==null&&a.br===null){g=!d?i.p:(i.p+1|0)/2|0;a.br=e.e5.j8(e.lS,g);if(i.p){$p=4;continue _;}h=null;$p=5;continue _;}if(i===null&&a.br!==null&&e.s8(a.br)){g=d?1:a.br.p;if(g>e.e5.f4())g=e.e5.f4();h=EG(a.br,g);$p=7;continue _;}if(i!==null&&a.br!==null){if(!e.s8(a.br)){if(i.bA!=a.br.bA)break a;if(ED(a.br)<=1)break a;g=i.p;if(g<=0)break a;if((g+a.br.p|0)>ED(a.br))break a;h=a.br;h.p=h.p+g|0;EG(i,g);if(i.p){$p=8;continue _;}h=null;$p=9;continue _;}if(i.bA==a.br.bA){if(i.bA==a.br.bA){if(!d){g=a.br.p;if(g>(e.e5.f4()
-i.p|0))g=e.e5.f4()-i.p|0;if(g>(ED(a.br)-i.p|0))g=ED(a.br)-i.p|0;EG(a.br,g);if(!a.br.p)a.br=null;i.p=i.p+g|0;}else if(d==1){g=1;if(g>(e.e5.f4()-i.p|0))g=e.e5.f4()-i.p|0;if(g>(ED(a.br)-i.p|0))g=ED(a.br)-i.p|0;EG(a.br,g);if(!a.br.p)a.br=null;i.p=i.p+g|0;}}}else if(a.br.p<=e.e5.f4()){h=a.br;$p=6;continue _;}}}}return;case 2:AL0(h,e);if(C()){break _;}a.br=null;if(d!=1)return;e=EG(a.br,1);$p=3;case 3:AL0(h,e);if(C()){break _;}if(!a.br.p)a.br=null;return;case 4:e.Js();if(C()){break _;}return;case 5:ALE(e,h);if(C())
{break _;}$p=4;continue _;case 6:ALE(e,h);if(C()){break _;}a.br=i;return;case 7:ALE(e,h);if(C()){break _;}if(!a.br.p)a.br=null;return;case 8:e.Js();if(C()){break _;}return;case 9:ALE(e,h);if(C()){break _;}$p=8;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function A9S(a,b,c,d){return;}
function AAD(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.J.o.ft.bI)return;d=a.J;e=null;$p=1;case 1:AD1(d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AA6(a){var b,c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.br===null)return;b=a.J.f;c=a.br;$p=1;case 1:AL0(b,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,$p);}
function A$_(a){return 0;}
function AKh(){Bk6=X$();}
function APV(){var a=this;Ey.call(a);a.j4=null;a.xF=null;a.AH=0.0;a.Ev=0.0;}
function E8(a){var b=new APV();AZY(b,a);return b;}
function AZY(a,b){var c,d,e,f,g;Ih(a);a.j4=A0N(a,2,2);a.xF=A5s();a.pU=1;T(a.c7,A3B(a,a.j4,a.xF,0,144,36));c=0;while(c<2){d=0;while(d<2){T(a.c7,D7(a,a.j4,d+(c*2|0)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.c7;f=new QP;UM(f,a,b,(Yy(b)-1|0)-d|0,8,8+(d*18|0)|0);f.H2=a;f.wo=d;T(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){T(a.c7,D7(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){T(a.c7,D7(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function ALR(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA6(a);if(C()){break _;}b=0;while(b<a.j4.l1){c=Gi(a.j4,b);if(c!==null){d=a.J.f;$p=2;continue _;}b=b+1|0;}return;case 2:AL0(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=a.j4.l1)break;c=Gi(a.j4,b);if(c===null)continue;else{d=a.J.f;continue _;}}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function AT2(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=(-1);if(e<2&&f<2){h=Gi(a.j4,e+(f*2|0)|0);if(h!==null)g=h.bA;}d[e+(f*3|0)|0]=g;f=f+1|0;}e=e+1|0;}Pr(a.xF,0,RT(Wy(),c));}
function A0e(a){EF(a.bZ,B(525),86,16,4210752);}
function AD5(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ACp(a,b,c,d);if(C()){break _;}a.AH=b;a.Ev=c;return;default:Fa();}}C4().s(a,b,c,d,$p);}
function Ye(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(526);$p=1;case 1:$z=AHz(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.J.bo,e);f=(a.bm-a.fb|0)/2|0;g=(a.bC-a.fn|0)/2|0;CH(a,f,g,0,0,a.fb,a.fn);Bb(32826);Bb(2903);B3();b=f+51|0;e=g+75|0;Bw(b,e,50.0);CC((-30.0),30.0,30.0);Bv(180.0,
0.0,0.0,1.0);h=a.J.f.dG;i=a.J.f.u;j=a.J.f.I;k=b-a.AH;l=(e-50|0)-a.Ev;Bv(135.0,0.0,1.0,0.0);HB();Bv((-135.0),0.0,1.0,0.0);m=l/40.0;Bv( -Ix(m)*20.0,1.0,0.0,0.0);d=a.J.f;n=k/40.0;d.dG=Ix(n)*20.0;a.J.f.u=Ix(n)*40.0;a.J.f.I= -Ix(m)*20.0;Bw(0.0,a.J.f.c4,0.0);d=Bgz;c=a.J.f;m=0.0;n=0.0;o=0.0;b=0.0;p=1.0;$p=2;case 2:AQL(d,c,m,n,o,b,p);if(C()){break _;}a.J.f.dG=h;a.J.f.u=i;a.J.f.I=j;BE();DT();Bd(32826);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function Jc(){var a=this;D.call(a);a.qZ=0;a.sC=0;a.vF=0;a.vL=0;a.xE=0;a.DP=0;a.cI=null;a.wl=null;a.wm=null;a.wn=null;a.t$=null;a.uk=null;a.vi=null;a.xb=null;a.vG=null;a.uT=null;a.tU=null;a.ux=null;a.uG=null;a.wv=null;a.t7=null;a.yh=null;a.rc=0;a.pZ=0;a.oE=0;a.Gz=0;a.Hd=0;a.uc=null;a.uQ=null;a.xh=0;a.w2=null;a.vD=null;a.wc=null;a.yp=null;a.yv=null;a.x7=null;a.ms=null;a.mK=null;a.vA=0;a.r5=0.0;a.r4=0.0;a.r3=0.0;a.r2=0.0;a.sH=0.0;a.tt=0.0;a.rO=0.0;a.st=0.0;a.qX=0.0;a.qY=0.0;a.tj=0.0;a.ti=0.0;a.th=0.0;a.tg=0.0;a.s0
=0.0;a.sY=0.0;a.sZ=0.0;}
var Bk8=null;var Bk9=null;function Baq(a,b,c,d,e,f,g){var h=new Jc();AIj(h,a,b,c,d,e,f,g);return h;}
function Ph(b){var c,d,e,f,g,h,i;c=Bk8.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;if((b&1)==1)d=1;if((b&4)==4)e=1;if((b&8)==8)f=1;if((b&16)==16)g=1;if((b&32)==32)h=1;if((b&64)==64)i=1;c=Baq(b,d,e,f,g,h,i);Bk8.data[b]=c;}return c;}
function AIj(a,b,c,d,e,f,g,h){var i,j,k;WR(a);a.wl=null;a.wm=null;a.wn=null;a.t$=null;a.uk=null;a.vi=null;a.xb=null;a.vG=null;a.uT=null;a.tU=null;a.ux=null;a.uG=null;a.wv=null;a.t7=null;a.yh=null;a.xh=0;a.w2=$rt_createFloatArray(16);a.vD=$rt_createFloatArray(16);a.wc=$rt_createFloatArray(16);a.yp=KC(Na());a.yv=KC(Na());a.x7=KC(Na());a.ms=A29();a.mK=A29();a.vA=0;a.r5=0.0;a.r4=0.0;a.r3=0.0;a.r2=0.0;a.sH=0.0;a.tt=0.0;a.rO=0.0;a.st=0.0;a.qX=0.0;a.qY=0.0;a.tj=0.0;a.ti=0.0;a.th=0.0;a.tg=0.0;a.s0=0.0;a.sY=0.0;a.sZ
=0.0;a.qZ=c;a.sC=d;a.vF=e;a.vL=f;a.xE=g;a.DP=h;if(Bk9===null)Bk9=ACh(B(527));i=B(3);if(a.qZ)i=BM(I(I(BX(),i),B(528)));if(a.sC)i=BM(I(I(BX(),i),B(529)));if(a.vF)i=BM(I(I(BX(),i),B(530)));if(a.vL)i=BM(I(I(BX(),i),B(531)));if(a.xE)i=BM(I(I(BX(),i),B(532)));if(a.DP)i=BM(I(I(BX(),i),B(533)));i=BM(I(I(BX(),i),Bk9));j=OL(35633);O8(j,BM(I(I(I(BX(),PO()),B(534)),i)));WN(j);if(!Vq(j)){Cg(Da(),KQ(BM(I(I(BX(),B(535)),Uk(j))),B(158),B(536)));M(Z8(B(537)));}k=OL(35632);O8(k,BM(I(I(I(BX(),PO()),B(538)),i)));WN(k);if(!Vq(k))
{Cg(Da(),KQ(BM(I(I(BX(),B(535)),Uk(k))),B(158),B(539)));M(Z8(B(537)));}a.cI=AH7();Sk(a.cI,j);Sk(a.cI,k);b=1;a.rc=0;LZ(a.cI,a.rc,B(540));if(!a.sC)a.pZ=(-1);else{a.pZ=b;LZ(a.cI,a.pZ,B(541));b=2;}if(!a.qZ)a.oE=(-1);else{c=b+1|0;a.oE=b;LZ(a.cI,a.oE,B(542));b=c;}a.Gz=(-1);a.Hd=b;AAM(a.cI);UV(a.cI,j);UV(a.cI,k);Tr(j);Tr(k);if(!AGs(a.cI)){Cg(Da(),KQ(BM(I(I(BX(),B(535)),AHA(a.cI))),B(158),B(543)));M(Z8(B(537)));}V9(a.cI);a.wl=Dq(a.cI,B(544));a.wm=Dq(a.cI,B(545));a.wn=Dq(a.cI,B(546));a.tU=Dq(a.cI,B(547));if(a.vF){a.ux
=Dq(a.cI,B(548));a.t7=Dq(a.cI,B(549));a.yh=Dq(a.cI,B(550));}if(a.vL){a.t$=Dq(a.cI,B(551));a.uk=Dq(a.cI,B(552));a.vi=Dq(a.cI,B(553));a.xb=Dq(a.cI,B(554));a.vG=Dq(a.cI,B(555));a.uT=Dq(a.cI,B(556));}if(a.xE)a.uG=Dq(a.cI,B(557));Rf(Dq(a.cI,B(558)),0);a.wv=Dq(a.cI,B(559));a.uc=Pg();a.uQ=L_();R0(a.uc);Hh(34962,a.uQ);RG(a);}
function RG(a){Ob(a.rc);Od(a.rc,3,5126,0,28,0);if(a.sC){Ob(a.pZ);Od(a.pZ,2,5126,0,28,12);}if(a.qZ){Ob(a.oE);Od(a.oE,4,5121,1,28,20);}}
function AQ6(a){V9(a.cI);}
function AUl(a){return;}
function AMA(a,b){if(!Lx(b,a.yp)){N0(GQ(a.yp,b),a.w2);Mk(a.wl,a.w2);}}
function AM9(a,b){if(!Lx(b,a.yv)){N0(GQ(a.yv,b),a.vD);Mk(a.wm,a.vD);}}
function Z3(a,b){if(!Lx(b,a.x7)){N0(GQ(a.x7,b),a.wc);Mk(a.wn,a.wc);}}
function ANj(a,b,c){if(!(Ti(b,a.ms)&&Ti(c,a.mK))){VP(a.ms,b);VP(a.mK,c);Ls(a.t7,a.ms.lg,a.ms.lh,a.ms.lf);Ls(a.yh,a.mK.lg,a.mK.lh,a.mK.lf);}}
function ALw(a,b){if(a.vA!=b){a.vA=b;Rf(a.uk,b%2|0);Ik(a.uT,b/2|0);}}
function AQh(a,b,c,d,e){if(!(a.r5===b&&a.r4===c&&a.r3===d&&a.r2===e)){a.r5=b;a.r4=c;a.r3=d;a.r2=e;Uu(a.t$,a.r5,a.r4,a.r3,a.r2);}}
function APS(a,b,c){if(!(a.sH===b&&a.tt===c)){a.sH=b;a.tt=c;Ik(a.vi,a.sH);Ik(a.xb,a.tt);}}
function AKS(a,b){if(a.rO!==b){a.rO=b;Ik(a.vG,a.rO);}}
function AI1(a,b){if(a.st!==b){a.st=b;Ik(a.uG,a.st);}}
function AOQ(a,b,c){var d,e;if(!(a.qX===b&&a.qY===c)){a.qX=b;a.qY=c;d=a.wv;b=a.qX;c=a.qY;Be();if(d!==null){e=BdS;d=d.kz;e.uniform2f(d,b,c);}}}
function ALU(a,b,c,d,e){if(!(a.tj===b&&a.ti===c&&a.th===d&&a.tg===e)){a.tj=b;a.ti=c;a.th=d;a.tg=e;Uu(a.tU,a.tj,a.ti,a.th,a.tg);}}
function ACd(a,b,c,d){if(!(a.s0===b&&a.sY===c&&a.sZ===d)){a.s0=b;a.sY=c;a.sZ=d;Ls(a.ux,a.s0,a.sY,a.sZ);}}
function AOX(){Bk8=J(Jc,128);Bk9=null;}
function Ry(){var a=this;D.call(a);a.BA=0;a.rm=null;a.o2=null;a.lP=0;a.jM=0;}
function Ts(){var a=this;D.call(a);a.t1=null;a.xv=0;a.Du=0;a.Fl=0;}
function AHv(){var a=this;D.call(a);a.k$=0;a.h9=0;a.h$=0;a.h_=0;a.hJ=0;a.gy=null;a.nE=null;}
function A0M(a,b,c,d,e){var f=new AHv();A6g(f,a,b,c,d,e);return f;}
function A1m(a){var b=new AHv();A9K(b,a);return b;}
function A6g(a,b,c,d,e,f){a.k$=0;a.h9=b;a.h$=c;a.h_=d;a.hJ=e;a.gy=BY(f.x,f.z,f.w);}
function A9K(a,b){a.k$=1;a.nE=b;a.gy=BY(b.d,b.j,b.e);}
function Cd(){var a=this;D.call(a);a.p=0;a.mN=0;a.bA=0;a.eo=0;}
function AL$(a){var b=new Cd();AH5(b,a);return b;}
function G2(a,b){var c=new Cd();Vg(c,a,b);return c;}
function Qq(a){var b=new Cd();DD(b,a);return b;}
function EM(a,b){var c=new Cd();Gq(c,a,b);return c;}
function KH(a,b){var c=new Cd();MR(c,a,b);return c;}
function Ov(a,b,c){var d=new Cd();A0Q(d,a,b,c);return d;}
function A_h(a){var b=new Cd();A1F(b,a);return b;}
function AH5(a,b){Vg(a,b,1);}
function Vg(a,b,c){MR(a,b.b,c);}
function DD(a,b){Gq(a,b,1);}
function Gq(a,b,c){MR(a,b.cW,c);}
function MR(a,b,c){a.p=0;a.bA=b;a.p=c;}
function A0Q(a,b,c,d){a.p=0;a.bA=b;a.p=c;a.eo=d;}
function A1F(a,b){a.p=0;AEe(a,b);}
function EG(a,b){a.p=a.p-b|0;return Ov(a.bA,b,a.eo);}
function DL(a){BB();return Bhp.data[a.bA];}
function DK(a){return DL(a).te;}
function AJn(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=DL(a);$p=1;case 1:$z=h.iO(a,b,c,d,e,f,g);if(C()){break _;}d=$z;return d;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AFm(a,b){return DL(a).x8(a,b);}
function ABn(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=DL(a);$p=1;case 1:$z=d.n_(a,b,c);if(C()){break _;}b=$z;return b;default:Fa();}}C4().s(a,b,c,d,$p);}
function QU(a,b){Fu(b,B(560),a.bA<<16>>16);JT(b,B(561),a.p<<24>>24);Fu(b,B(562),a.eo<<16>>16);return b;}
function AEe(a,b){a.bA=FM(b,B(560));a.p=LG(b,B(561));a.eo=FM(b,B(562));}
function ED(a){return DL(a).e1;}
function Kt(a){BB();return Bhp.data[a.bA].fh;}
function FN(a,b){a.eo=a.eo+b|0;if(a.eo>Kt(a)){a.p=a.p-1|0;if(a.p<0)a.p=0;a.eo=0;}}
function AE5(a,b){BB();Bhp.data[a.bA].si(a,b);}
function QN(a,b,c,d,e){BB();Bhp.data[a.bA].x2(a,b,c,d,e);}
function AAs(a,b){BB();return Bhp.data[a.bA].n2(b);}
function AOe(a,b){BB();return Bhp.data[a.bA].o$(b);}
function A1j(a,b){return;}
function AEH(a,b){BB();Bhp.data[a.bA].yL(a,b);}
function ZR(){var a=this;D.call(a);a.h3=null;a.l1=0;a.sn=null;}
function A0N(a,b,c){var d=new ZR();AWD(d,a,b,c);return d;}
function AWD(a,b,c,d){a.l1=Bj(c,d);a.h3=J(Cd,a.l1);a.sn=b;}
function A3z(a){return a.l1;}
function Gi(a,b){return a.h3.data[b];}
function AE3(a,b,c){var d,e;if(a.h3.data[b]===null)return null;if(a.h3.data[b].p<=c){d=a.h3.data[b];a.h3.data[b]=null;a.sn.tq(a);return d;}e=EG(a.h3.data[b],c);if(!a.h3.data[b].p)a.h3.data[b]=null;a.sn.tq(a);return e;}
function A3N(a,b,c){a.h3.data[b]=c;a.sn.tq(a);}
function A89(a){return 64;}
function ADW(a){return;}
function AAL(){D.call(this);this.m$=null;}
function A5s(){var a=new AAL();AS2(a);return a;}
function AS2(a){a.m$=J(Cd,1);}
function A5e(a,b){return a.m$.data[b];}
function AWL(a,b,c){var d;if(a.m$.data[b]===null)return null;d=a.m$.data[b];a.m$.data[b]=null;return d;}
function Pr(a,b,c){a.m$.data[b]=c;}
function AY3(a){return 64;}
function ANq(a){return;}
function HP(){var a=this;D.call(a);a.lS=0;a.jQ=0;a.jS=0;a.e5=null;a.p5=null;}
function D7(a,b,c,d,e){var f=new HP();UM(f,a,b,c,d,e);return f;}
function UM(a,b,c,d,e,f){a.p5=b;a.e5=c;a.lS=d;a.jQ=e;a.jS=f;}
function Nd(a,b,c){var d,e;d=(a.p5.bm-a.p5.fb|0)/2|0;e=(a.p5.bC-a.p5.fn|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.jQ-1|0)&&d<((a.jQ+16|0)+1|0)&&c>=(a.jS-1|0)&&c<((a.jS+16|0)+1|0)?1:0;}
function ALg(a){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AKH(a);if(C()){break _;}return;default:Fa();}}C4().s(a,$p);}
function AXq(a,b){return 1;}
function ARD(a){return a.e5.gx(a.lS);}
function ALE(a,b){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e5.jE(a.lS,b);$p=1;case 1:AKH(a);if(C()){break _;}return;default:Fa();}}C4().s(a,b,$p);}
function A90(a){return (-1);}
function AKH(a){var b,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.e5;$p=1;case 1:b.km();if(C()){break _;}return;default:Fa();}}C4().s(a,b,$p);}
function ADl(){HP.call(this);this.qQ=null;}
function A3B(a,b,c,d,e,f){var g=new ADl();A43(g,a,b,c,d,e,f);return g;}
function A43(a,b,c,d,e,f,g){UM(a,b,d,e,f,g);a.qQ=c;}
function A0u(a,b){return 0;}
function AOc(a){var b;b=0;while(b<a.qQ.l1){if(Gi(a.qQ,b)!==null)AE3(a.qQ,b,1);b=b+1|0;}}
function QP(){var a=this;HP.call(a);a.wo=0;a.H2=null;}
function A23(a,b){return !(DL(b) instanceof F6)?0:DL(b).z1!=a.wo?0:1;}
function AWF(a){return 15+(a.wo*16|0)|0;}
function Wk(){D.call(this);this.D3=null;}
function SK(){var a=this;D.call(a);a.A6=null;a.vT=0;}
function M9(){Fl.call(this);}
function ALZ(b){var c,d;c=b.data.length;d=new U4;Uo(d,c,0,0+c|0);d.xY=0;d.Bx=0;d.wT=b;return d;}
function A0x(a){EC(a);return a;}
function A2N(a){HA(a);return a;}
function AIw(a){HA(a);return a;}
function VX(a){EC(a);return a;}
function Dh(){var a=this;D.call(a);a.iD=null;a.HH=null;a.H$=null;a.me=0.0;a.B3=0.0;}
function Bk$(){var a=new Dh();EI(a);return a;}
function EI(a){a.HH=A$6();a.H$=Kq();a.me=0.0;a.B3=1.0;}
function AKz(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.iD.t0;$p=1;case 1:$z=AHz(c,b);if(C()){break _;}d=$z;Eb(c,d);return;default:Fa();}}C4().s(a,b,c,d,$p);}
function APx(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=a.iD.t0;$p=1;case 1:$z=AD$(d,b,c);if(C()){break _;}e=$z;Eb(d,e);return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AG6(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bd(2896);L();g=BgA.ba;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;B3();Bw(c,d,e);n=b.c1*1.399999976158142;CC(n,n,n);o=B(179);$p
=1;case 1:AKz(a,o);if(C()){break _;}BA();o=BeW;p=1.0;q=0.0;r=b.eP/b.c1;Bv( -a.iD.rt,0.0,1.0,0.0);Bw(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BU(1.0,1.0,1.0,1.0);Bz(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;G(o,c,d,0.0,e,s);G(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;G(o,(-0.5),d,0.0,t,u);G(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Bw(0.0,0.0,(-0.03999999910593033));}Bt(o);BE();Bb(2896);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function A8A(b,c,d,e){var f;Bd(3553);BA();f=BeW;BU(1.0,1.0,1.0,1.0);Bz(f);Fb(f,c,d,e);Cj(0.0,0.0,(-1.0));Bg(f,b.R,b.U,b.S);Bg(f,b.V,b.U,b.S);Bg(f,b.V,b.M,b.S);Bg(f,b.R,b.M,b.S);Cj(0.0,0.0,1.0);Bg(f,b.R,b.M,b.W);Bg(f,b.V,b.M,b.W);Bg(f,b.V,b.U,b.W);Bg(f,b.R,b.U,b.W);Cj(0.0,(-1.0),0.0);Bg(f,b.R,b.M,b.S);Bg(f,b.V,b.M,b.S);Bg(f,b.V,b.M,b.W);Bg(f,b.R,b.M,b.W);Cj(0.0,1.0,0.0);Bg(f,b.R,b.U,b.W);Bg(f,b.V,b.U,b.W);Bg(f,b.V,b.U,b.S);Bg(f,b.R,b.U,b.S);Cj((-1.0),0.0,0.0);Bg(f,b.R,b.M,b.W);Bg(f,b.R,b.U,b.W);Bg(f,b.R,b.U,
b.S);Bg(f,b.R,b.M,b.S);Cj(1.0,0.0,0.0);Bg(f,b.V,b.M,b.S);Bg(f,b.V,b.U,b.S);Bg(f,b.V,b.U,b.W);Bg(f,b.V,b.M,b.W);Fb(f,0.0,0.0,0.0);Bt(f);Bb(3553);}
function AUQ(a,b){a.iD=b;}
function ANr(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AJ1(a.iD,b.d,b.j,b.e);if(b.cV<=0)return;$p=1;case 1:AG6(a,b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AIO(){var a=this;Dh.call(a);a.wK=null;a.id=null;}
function X$(){var a=new AIO();A5H(a);return a;}
function A5H(a){EI(a);a.wK=Kq();a.id=new DB;a.me=0.15000000596046448;a.B3=0.75;}
function APN(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b.ni;B3();i=Br((b.mO+g)/10.0+b.yz)*0.10000000149011612+0.10000000149011612;j=((b.mO+g)/20.0+b.yz)*57.2957763671875;k=1;if(b.ni.p>1)k=2;if(b.ni.p>5)k=3;if(b.ni.p>20)k=4;Bw(c,d+
i,e);Bb(32826);if(h.bA<256){L();if(!Be0.data[h.bA].en()){Bv(j,0.0,1.0,0.0);b=B(179);$p=3;continue _;}}CC(0.5,0.5,0.5);l=DK(h);if(h.bA>=256){b=B(230);$p=1;continue _;}b=B(179);$p=2;continue _;case 1:AKz(a,b);if(C()){break _;}BA();m=BeW;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iD.rt,0.0,
1.0,0.0);Bz(m);Cj(0.0,1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Bt(m);BE();s=s+1|0;}Bd(32826);BE();return;case 2:AKz(a,b);if(C()){break _;}BA();m=BeW;n=(l%16|0)*16|0;o=(n+0|0)/256.0;p=(n+16|0)/256.0;l=(l/16|0)*16|0;q=(l+0|0)/256.0;r=(l+16|0)/256.0;s=0;d=o;e=r;t=p;u=q;while(s<k){B3();if(s>0)Bw((N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896,(N(a.id)*2.0-1.0)*0.30000001192092896);Bv(180.0-a.iD.rt,0.0,1.0,0.0);Bz(m);Cj(0.0,
1.0,0.0);G(m,(-0.5),(-0.25),0.0,d,e);G(m,0.5,(-0.25),0.0,t,e);G(m,0.5,0.75,0.0,t,u);G(m,(-0.5),0.75,0.0,d,u);Bt(m);BE();s=s+1|0;}Bd(32826);BE();return;case 3:AKz(a,b);if(C()){break _;}v=0.25;if(!Be0.data[h.bA].gf()&&h.bA!=Be5.b)v=0.5;CC(v,v,v);n=0;while(n<k){B3();if(n>0)Bw((N(a.id)*2.0-1.0)*0.20000000298023224/v,(N(a.id)*2.0-1.0)*0.20000000298023224/v,(N(a.id)*2.0-1.0)*0.20000000298023224/v);GY(a.wK,Be0.data[h.bA]);BE();n=n+1|0;}Bd(32826);BE();return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,$p);}
function AGl(a,b,c,d,e,f){var g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(d!==null){if(d.bA<256){L();if(!Be0.data[d.bA].en()){g=d.bA;b=B(179);$p=1;continue _;}}if(DK(d)>=0){Bd(2896);if(d.bA>=256){b=B(230);$p=2;continue _;}b=B(179);$p=3;continue _;}}return;case 1:$z=AHz(c,b);if(C()){break _;}h=$z;Eb(c,h);i=Be0.data[g];B3();Bw(e-2|0,f+3|0,0.0);CC(10.0,10.0,10.0);Bw(1.0,0.5,8.0);Bv(210.0,1.0,
0.0,0.0);Bv(45.0,0.0,1.0,0.0);BU(1.0,1.0,1.0,1.0);GY(a.wK,i);BE();return;case 2:$z=AHz(c,b);if(C()){break _;}g=$z;Eb(c,g);W9(a,e,f,(DK(d)%16|0)*16|0,(DK(d)/16|0)*16|0,16,16);Bb(2896);return;case 3:$z=AHz(c,b);if(C()){break _;}g=$z;Eb(c,g);W9(a,e,f,(DK(d)%16|0)*16|0,(DK(d)/16|0)*16|0,16,16);Bb(2896);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function Lr(a,b,c,d,e,f){var g,h,i,j,k,l;if(d!==null){if(d.p>1){c=new V;X(c);g=W(Bf(I(c,B(3)),d.p));Bd(2896);Bd(2929);Cy(b,g,((e+19|0)-2|0)-Dx(b,g)|0,(f+6|0)+3|0,16777215);Bb(2896);Bb(2929);}if(d.eo>0){h=13-((d.eo*13|0)/Kt(d)|0)|0;i=255-((d.eo*255|0)/Kt(d)|0)|0;Bd(2896);Bd(2929);Bd(3553);BA();j=BeW;k=255-i|0;l=k<<16|i<<8;k=(k/4|0)<<16|16128;e=e+2|0;f=f+13|0;N$(a,j,e,f,13,2,0);N$(a,j,e,f,12,1,k);N$(a,j,e,f,h,1,l);Bb(3553);Bb(2896);Bb(2929);BU(1.0,1.0,1.0,1.0);}}}
function N$(a,b,c,d,e,f,g){var h,i,j;Bz(b);ES(b,g);h=c+0|0;i=d+0|0;Bg(b,h,i,0.0);j=d+f|0;Bg(b,h,j,0.0);h=c+e|0;Bg(b,h,j,0.0);Bg(b,h,i,0.0);Bt(b);}
function W9(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;BA();h=BeW;Bz(h);i=b+0|0;j=c+g|0;k=(d+0|0)*0.00390625;l=(e+g|0)*0.00390625;G(h,i,j,0.0,k,l);m=b+f|0;n=(d+f|0)*0.00390625;G(h,m,j,0.0,n,l);l=c+0|0;j=(e+0|0)*0.00390625;G(h,m,l,0.0,n,j);G(h,i,l,0.0,k,j);Bt(h);}
function ADb(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APN(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function Pj(){var a=this;D.call(a);a.BS=null;a.Is=0;a.Ip=0;a.Gr=0;a.Hk=0;}
function QI(){var a=this;D.call(a);a.f1=null;a.yd=null;}
function Zx(a,b){var c,d,e,f,g,h,i,j,k,l;if(Ho()===null)Bej=BdN.createElement("canvas");if(Ho().width<a.f1.width){b=Ho();c=a.f1.width;b.width=c;}if(Ho().height<a.f1.height){b=Ho();c=a.f1.height;b.height=c;}if(JZ()===null)Bek=Ho().getContext("2d");b=JZ();d=a.f1.width;e=a.f1.height;b.clearRect(0.0,0.0,d,e);b=JZ();c=a.f1;d=a.f1.width;e=a.f1.height;b.drawImage(c,0.0,0.0,d,e);b=JZ();d=a.f1.width;e=a.f1.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=Bj(f.width,f.height);WP($rt_str(a.f1.src));if(c.byteLength<(g*4
|0)){CM(a.yd,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.yd;c=new Ts;k=f.width;l=f.height;if(g==Bj(k,l)){c.xv=k;c.Du=l;c.Fl=1;c.t1=h;CM(b,c);return;}b=new Cc;Bo(b,B(563));M(b);}
function A7B(a,b){Zx(a,b);}
function QH(){var a=this;D.call(a);a.Ep=null;a.E7=null;}
function AJN(a,b){WP($rt_str(a.Ep.src));CM(a.E7,null);}
function A7N(a,b){AJN(a,b);}
function IC(){M9.call(this);}
function Bk_(a,b,c){var d=new IC();Uo(d,a,b,c);return d;}
function Uo(a,b,c,d){KV(a,b);a.bk=c;a.cy=d;}
function AGf(a){var b,c;if(a.bk<a.cy){b=a.bk;a.bk=b+1|0;return a.yx(b);}c=new Gu;P(c);M(c);}
function NS(a,b){var c,d;if(a.m3()){c=new FW;P(c);M(c);}if(a.bk<a.cy){d=a.bk;a.bk=d+1|0;a.u$(d,b);return a;}c=new Hc;P(c);M(c);}
function Q7(a,b){var c,d;if(b>=0&&b<a.cy)return AOR(a,b);c=new BT;d=new V;X(d);Bo(c,W(I(Bf(I(Bf(I(d,B(273)),b),B(244)),a.cy),B(27))));M(c);}
function AQ9(a,b,c){var d,e;if(a.m3()){d=new FW;P(d);M(d);}if(b>=0&&b<a.cy){ANP(a,b,c);return a;}e=new BT;d=new V;X(d);Bo(e,W(I(Bf(I(Bf(I(d,B(273)),b),B(244)),a.cy),B(27))));M(e);}
function AX3(a){return a.m3();}
function U4(){var a=this;IC.call(a);a.Bx=0;a.xY=0;a.wT=null;}
function AOR(a,b){return a.wT.data[b+a.xY|0];}
function ANP(a,b,c){a.wT.data[b+a.xY|0]=c;}
function AS0(a){return a.Bx;}
function Wd(){D.call(this);this.jq=null;}
function V_(){var a=this;D.call(a);a.iZ=null;a.xp=0;}
function Xp(){D.call(this);this.kz=null;}
function Jv(){B6.call(this);}
function Bla(){var a=new Jv();AYo(a);return a;}
function AYo(a){P(a);}
function US(){var a=this;CT.call(a);a.AC=null;a.AB=null;a.qx=null;a.Ex=null;}
function ADn(a){Dy(a.bG);T(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bC/4|0)+72|0,B(564)));Dy(a.qx);DF(a.qx,AQJ(a.bZ,a.AB));}
function AOJ(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cl)return;b=a.J;c=a.Ex;$p=1;case 1:AD1(b,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,$p);}
function AMJ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABo(a);if(C()){break _;}DG(a,a.bZ,a.AC,a.bm/2|0,70,16777215);e=90;f=Jr(a.qx);while(KK(f)){g=KZ(f);DG(a,a.bZ,g,a.bm/2|0,e,16777215);e=e+9|0;}$p=2;case 2:AFJ(a,b,c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function FW(){Jv.call(this);}
function Blb(){var a=new FW();A6W(a);return a;}
function A6W(a){P(a);}
function Hc(){B6.call(this);}
function Blc(){var a=new Hc();A54(a);return a;}
function A54(a){P(a);}
function Gu(){B6.call(this);}
function Bld(){var a=new Gu();A1Q(a);return a;}
function A1Q(a){P(a);}
function TI(){var a=this;D.call(a);a.yY=null;a.Dl=null;a.vM=0;a.rQ=0;}
function AAF(a){return Fm(a.yY);}
function Oe(a,b){return Ct(a.Dl)<b?0:1;}
function A5Z(a,b){a.vM=b;}
function A_0(a,b){a.rQ=b;}
function ACu(){var a=this;D.call(a);a.yE=null;a.oD=0;}
function RE(){CT.call(this);}
function Ble(){var a=new RE();A6Y(a);return a;}
function A6Y(a){DR(a);}
function Mq(){CT.call(this);}
function Blf(){var a=new Mq();A$a(a);return a;}
function A$a(a){DR(a);}
function AOs(a){Dy(a.bG);T(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bC/4|0)+72|0,B(565)));T(a.bG,Dj(2,(a.bm/2|0)-100|0,(a.bC/4|0)+96|0,B(566)));if(a.J.k2===null)Z(a.bG,1).gC=0;}
function AMt(a,b,c){return;}
function AOC(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.cl==1){c=a.J;$p=1;continue _;}if(b.cl!=2)return;b=a.J;c=null;$p=3;continue _;case 1:ASG(c);if(C()){break _;}c=a.J;d=null;$p=2;case 2:AD1(c,d);if(C()){break _;}if(b.cl!=2)return;b=a.J;c=null;$p=3;case 3:ABT(b,c);if(C()){break _;}b=a.J;c=LR();$p=4;case 4:AD1(b,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function APv(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:KS(a,0,0,a.bm,a.bC,1615855616,(-1602211792));B3();CC(2.0,2.0,2.0);DG(a,a.bZ,B(567),(a.bm/2|0)/2|0,30,16777215);BE();e=a.bZ;f=new V;X(f);DG(a,e,W(Bf(I(f,B(568)),a.J.f.k6)),a.bm/2|0,100,16777215);$p=1;case 1:AFJ(a,b,c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function A6Z(a){return 0;}
function C2(){var a=this;C6.call(a);a.e8=0;a.Bq=0.0;a.Br=0.0;a.dq=0;a.cw=0;a.dr=0.0;a.m9=0.0;a.hY=0.0;a.ic=0.0;a.io=0.0;}
var BkZ=0.0;var Bk0=0.0;var Bk1=0.0;function Blg(a,b,c,d,e,f,g){var h=new C2();FE(h,a,b,c,d,e,f,g);return h;}
function FE(a,b,c,d,e,f,g,h){var i,j;FD(a,b);a.dq=0;a.cw=0;D2(a,0.20000000298023224,0.20000000298023224);a.c4=a.eP/2.0;CU(a,c,d,e);a.io=1.0;a.ic=1.0;a.hY=1.0;a.g=f+(BP()*2.0-1.0)*0.4000000059604645;a.i=g+(BP()*2.0-1.0)*0.4000000059604645;a.h=h+(BP()*2.0-1.0)*0.4000000059604645;i=(BP()+BP()+1.0)*0.15000000596046448;j=Ce(a.g*a.g+a.i*a.i+a.h*a.h);c=a.g;d=j;c=c/d;e=i;a.g=c*e*0.4000000059604645;a.i=a.i/d*e*0.4000000059604645+0.10000000149011612;a.h=a.h/d*e*0.4000000059604645;a.Bq=N(a.m)*3.0;a.Br=N(a.m)*3.0;a.dr=
(N(a.m)*0.5+0.5)*2.0;a.cw=4.0/(N(a.m)*0.8999999761581421+0.10000000149011612)|0;a.dq=0;a.i9=0;}
function APz(a,b){var c,d;c=a.g;d=b;a.g=c*d;a.i=(a.i-0.10000000149011612)*d+0.10000000149011612;a.h=a.h*d;return a;}
function Yh(a,b){var c;c=0.20000000298023224*b;D2(a,c,c);a.dr=a.dr*b;return a;}
function ALv(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.i=a.i-0.04*a.m9;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARM(a,c,d,e);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cb(a);if(C()){break _;}a.i=a.i-0.04*a.m9;c=a.g;d=a.i;e=
a.h;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function ANB(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.e8%16|0)/16.0;j=i+0.062437500804662704;k=(a.e8/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.dr;n=a.bS;o=a.d-a.bS;p
=c;q=n+o*p-BkZ;r=a.cS+(a.j-a.cS)*p-Bk0;s=a.bR+(a.e-a.bR)*p-Bk1;$p=1;case 1:$z=a.vk(c);if(C()){break _;}t=$z;Cq(b,a.hY*t,a.ic*t,a.io*t);u=d*m;t=q-u;v=g*m;n=t-v;c=e*m;o=r-c;d=f*m;e=s-d;f=h*m;w=e-f;p=i;x=l;G(b,n,o,w,p,x);n=t+v;w=r+c;y=e+f;z=k;G(b,n,w,y,p,z);c=q+u;n=c+v;d=s+d;p=d+f;y=j;G(b,n,w,p,y,z);G(b,c-v,o,d-f,y,x);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function A7$(a){return 0;}
function AA7(){var a=this;CT.call(a);a.ty=0;a.oi=0;}
function BcC(){var a=new AA7();AWl(a);return a;}
function AWl(a){DR(a);a.ty=0;a.oi=0;}
function ARk(a){a.ty=0;Dy(a.bG);T(a.bG,Dj(1,(a.bm/2|0)-100|0,(a.bC/4|0)+48|0,B(569)));T(a.bG,Dj(4,(a.bm/2|0)-100|0,(a.bC/4|0)+24|0,B(570)));T(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bC/4|0)+96|0,B(496)));}
function ADt(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.cl){c=a.J;d=AIU(a,a.J.o);$p=1;continue _;}if(b.cl==1){c=a.J;d=null;$p=2;continue _;}if(b.cl!=4)return;b=a.J;c=null;$p=4;continue _;case 1:AD1(c,d);if(C()){break _;}if(b.cl==1){c=a.J;d=null;$p=2;continue _;}if(b.cl!=4)return;b=a.J;c=null;$p=4;continue _;case 2:ABT(c,d);if(C()){break _;}c=a.J;d=LR();$p=3;case 3:AD1(c,d);if(C()){break _;}if(b.cl!=4)return;b=a.J;c=null;$p
=4;case 4:AD1(b,c);if(C()){break _;}b=a.J;$p=5;case 5:AFo(b);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function A2q(a){a.oi=a.oi+1|0;}
function ADS(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABo(a);if(C()){break _;}e=a.J.A;f=a.ty;a.ty=f+1|0;$p=2;case 2:$z=AAT(e,f);if(C()){break _;}f=$z;f=f?0:1;if(!(!f&&a.oi>=20)){g=255.0*(Br(((a.oi%10|0)+d)/10.0*3.1415927410125732*2.0)*0.20000000298023224+0.800000011920929)|0;Cy(a.bZ,B(571),8,a.bC-16|0,g<<16|g<<8|g);}DG(a,a.bZ,B(572),a.bm/2|0,40,16777215);$p=3;case 3:AFJ(a,b,c,d);if
(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function LD(){var a=this;D.call(a);a.bd=null;a.Z=null;a.Y=null;a.bb=null;}
function Blh(){var a=new LD();AHx(a);return a;}
function AHx(a){a.bd=$rt_createFloatMultiArray([16,16]);a.Z=$rt_createFloatArray(16);a.Y=$rt_createFloatArray(16);a.bb=$rt_createFloatArray(16);}
function ARW(a,b,c,d,e,f,g){var h;h=0;while(h<6){if(a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*d+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]
<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*c+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*b+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]<=0.0&&a.bd.data[h].data[0]*e+a.bd.data[h].data[1]*f+a.bd.data[h].data[2]*g+a.bd.data[h].data[3]<=0.0)return 0;h=h+1|0;}return 1;}
function WM(){var a=this;LD.call(a);a.oW=null;a.n5=null;a.zC=null;}
var Bli=null;function Ba4(){var a=new WM();AFz(a);return a;}
function AFz(a){AHx(a);a.oW=H7(16);a.n5=H7(16);a.zC=H7(16);}
function R3(){AJY(Bli);return Bli;}
function GW(a,b,c){var d,e;b=b.data;d=D_(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AJY(a){Ig(a.oW);Ig(a.n5);Ig(a.zC);T1(2983,a.oW);T1(2982,a.n5);RJ(Jx(a.oW),16);VU(a.oW,a.Z);RJ(Jx(a.n5),16);VU(a.n5,a.Y);a.bb.data[0]=a.Y.data[0]*a.Z.data[0]+a.Y.data[1]*a.Z.data[4]+a.Y.data[2]*a.Z.data[8]+a.Y.data[3]*a.Z.data[12];a.bb.data[1]=a.Y.data[0]*a.Z.data[1]+a.Y.data[1]*a.Z.data[5]+a.Y.data[2]*a.Z.data[9]+a.Y.data[3]*a.Z.data[13];a.bb.data[2]=a.Y.data[0]*a.Z.data[2]+a.Y.data[1]*a.Z.data[6]+a.Y.data[2]*a.Z.data[10]+a.Y.data[3]*a.Z.data[14];a.bb.data[3]=a.Y.data[0]*a.Z.data[3]+a.Y.data[1]*a.Z.data[7]
+a.Y.data[2]*a.Z.data[11]+a.Y.data[3]*a.Z.data[15];a.bb.data[4]=a.Y.data[4]*a.Z.data[0]+a.Y.data[5]*a.Z.data[4]+a.Y.data[6]*a.Z.data[8]+a.Y.data[7]*a.Z.data[12];a.bb.data[5]=a.Y.data[4]*a.Z.data[1]+a.Y.data[5]*a.Z.data[5]+a.Y.data[6]*a.Z.data[9]+a.Y.data[7]*a.Z.data[13];a.bb.data[6]=a.Y.data[4]*a.Z.data[2]+a.Y.data[5]*a.Z.data[6]+a.Y.data[6]*a.Z.data[10]+a.Y.data[7]*a.Z.data[14];a.bb.data[7]=a.Y.data[4]*a.Z.data[3]+a.Y.data[5]*a.Z.data[7]+a.Y.data[6]*a.Z.data[11]+a.Y.data[7]*a.Z.data[15];a.bb.data[8]=a.Y.data[8]
*a.Z.data[0]+a.Y.data[9]*a.Z.data[4]+a.Y.data[10]*a.Z.data[8]+a.Y.data[11]*a.Z.data[12];a.bb.data[9]=a.Y.data[8]*a.Z.data[1]+a.Y.data[9]*a.Z.data[5]+a.Y.data[10]*a.Z.data[9]+a.Y.data[11]*a.Z.data[13];a.bb.data[10]=a.Y.data[8]*a.Z.data[2]+a.Y.data[9]*a.Z.data[6]+a.Y.data[10]*a.Z.data[10]+a.Y.data[11]*a.Z.data[14];a.bb.data[11]=a.Y.data[8]*a.Z.data[3]+a.Y.data[9]*a.Z.data[7]+a.Y.data[10]*a.Z.data[11]+a.Y.data[11]*a.Z.data[15];a.bb.data[12]=a.Y.data[12]*a.Z.data[0]+a.Y.data[13]*a.Z.data[4]+a.Y.data[14]*a.Z.data[8]
+a.Y.data[15]*a.Z.data[12];a.bb.data[13]=a.Y.data[12]*a.Z.data[1]+a.Y.data[13]*a.Z.data[5]+a.Y.data[14]*a.Z.data[9]+a.Y.data[15]*a.Z.data[13];a.bb.data[14]=a.Y.data[12]*a.Z.data[2]+a.Y.data[13]*a.Z.data[6]+a.Y.data[14]*a.Z.data[10]+a.Y.data[15]*a.Z.data[14];a.bb.data[15]=a.Y.data[12]*a.Z.data[3]+a.Y.data[13]*a.Z.data[7]+a.Y.data[14]*a.Z.data[11]+a.Y.data[15]*a.Z.data[15];a.bd.data[0].data[0]=a.bb.data[3]-a.bb.data[0];a.bd.data[0].data[1]=a.bb.data[7]-a.bb.data[4];a.bd.data[0].data[2]=a.bb.data[11]-a.bb.data[8];a.bd.data[0].data[3]
=a.bb.data[15]-a.bb.data[12];GW(a,a.bd,0);a.bd.data[1].data[0]=a.bb.data[3]+a.bb.data[0];a.bd.data[1].data[1]=a.bb.data[7]+a.bb.data[4];a.bd.data[1].data[2]=a.bb.data[11]+a.bb.data[8];a.bd.data[1].data[3]=a.bb.data[15]+a.bb.data[12];GW(a,a.bd,1);a.bd.data[2].data[0]=a.bb.data[3]+a.bb.data[1];a.bd.data[2].data[1]=a.bb.data[7]+a.bb.data[5];a.bd.data[2].data[2]=a.bb.data[11]+a.bb.data[9];a.bd.data[2].data[3]=a.bb.data[15]+a.bb.data[13];GW(a,a.bd,2);a.bd.data[3].data[0]=a.bb.data[3]-a.bb.data[1];a.bd.data[3].data[1]
=a.bb.data[7]-a.bb.data[5];a.bd.data[3].data[2]=a.bb.data[11]-a.bb.data[9];a.bd.data[3].data[3]=a.bb.data[15]-a.bb.data[13];GW(a,a.bd,3);a.bd.data[4].data[0]=a.bb.data[3]-a.bb.data[2];a.bd.data[4].data[1]=a.bb.data[7]-a.bb.data[6];a.bd.data[4].data[2]=a.bb.data[11]-a.bb.data[10];a.bd.data[4].data[3]=a.bb.data[15]-a.bb.data[14];GW(a,a.bd,4);a.bd.data[5].data[0]=a.bb.data[3]+a.bb.data[2];a.bd.data[5].data[1]=a.bb.data[7]+a.bb.data[6];a.bd.data[5].data[2]=a.bb.data[11]+a.bb.data[10];a.bd.data[5].data[3]=a.bb.data[15]
+a.bb.data[14];GW(a,a.bd,5);}
function AHb(){Bli=Ba4();}
function Q_(){}
function AFX(){var a=this;D.call(a);a.C$=null;a.vC=0.0;a.v6=0.0;a.wk=0.0;}
function BbK(){var a=new AFX();A9h(a);return a;}
function A9h(a){a.C$=R3();}
function AOq(a,b,c,d){a.vC=b;a.v6=c;a.wk=d;}
function AAo(a,b,c,d,e,f,g){var h,i;h=b-a.vC;i=c-a.v6;b=d-a.wk;d=e-a.vC;e=f-a.v6;c=g-a.wk;return ARW(a.C$,h,i,b,d,e,c);}
function MN(a,b){return AAo(a,b.R,b.M,b.S,b.V,b.U,b.W);}
function Pa(){D.call(this);}
var Blj=null;function Blk(){var a=new Pa();ALp(a);return a;}
function ALp(a){return;}
function DT(){Bd(2896);Bd(16384);Bd(16385);Bd(2903);}
function HB(){var b;Bb(2896);Bb(16384);Bb(16385);Bb(2903);b=CD(BY(0.699999988079071,1.0,(-0.20000000298023224)));RR(b.x,b.z,b.w,0.0);Fs(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fs(0.0,0.0,0.0,1.0);Fs(0.0,0.0,0.0,1.0);b=CD(BY((-0.699999988079071),1.0,0.20000000298023224));RR(b.x,b.z,b.w,0.0);Fs(0.6000000238418579,0.6000000238418579,0.6000000238418579,1.0);Fs(0.0,0.0,0.0,1.0);Fs(0.0,0.0,0.0,1.0);Fs(0.4000000059604645,0.4000000059604645,0.4000000059604645,1.0);}
function RR(b,c,d,e){return Fs(b,c,d,e);}
function Fs(b,c,d,e){Ig(Blj);CJ(CJ(CJ(CJ(Blj,b),c),d),e);Jx(Blj);return Blj;}
function ASr(){Blj=H7(16);}
function Il(){var a=this;D.call(a);a.z9=null;a.go=null;a.nB=null;}
function Bll(a,b,c){var d=new Il();K_(d,a,b,c);return d;}
function K_(a,b,c,d){a.z9=b;a.go=c;a.nB=d;}
function A6D(a){return a.go.gm()+a.nB.gm()|0;}
function A6r(a){return a.z9;}
function ATh(a,b){return b<a.go.gm()?a.go.gx(b):a.nB.gx(b-a.go.gm()|0);}
function A3r(a,b,c){return b<a.go.gm()?a.go.j8(b,c):a.nB.j8(b-a.go.gm()|0,c);}
function AW2(a,b,c){if(b<a.go.gm())a.go.jE(b,c);else a.nB.jE(b-a.go.gm()|0,c);}
function A$g(a){return a.go.f4();}
function YF(a){var b,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.go;$p=1;case 1:b.km();if(C()){break _;}b=a.nB;$p=2;case 2:b.km();if(C()){break _;}return;default:Fa();}}C4().s(a,b,$p);}
function ZN(){C2.call(this);}
function AZa(a,b,c,d,e,f,g,h){var i=new ZN();A1n(i,a,b,c,d,e,f,g,h);return i;}
function A1n(a,b,c,d,e,f,g,h,i){FE(a,b,c,d,e,f,g,h);a.e8=i.ba;a.m9=i.EC;a.io=0.6000000238418579;a.ic=0.6000000238418579;a.hY=0.6000000238418579;a.dr=a.dr/2.0;}
function ATP(a){return 1;}
function YS(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=((a.e8%16|0)+a.Bq/4.0)/16.0;j=i+0.015609375201165676;k=((a.e8/16|0)+a.Br/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.dr;n
=a.bS;o=a.d-a.bS;p=c;q=n+o*p-BkZ;r=a.cS+(a.j-a.cS)*p-Bk0;s=a.bR+(a.e-a.bR)*p-Bk1;$p=1;case 1:$z=ADO(a,c);if(C()){break _;}t=$z;Cq(b,t*a.hY,t*a.ic,t*a.io);t=d*m;u=q-t;g=g*m;v=u-g;w=e*m;o=r-w;c=f*m;d=s-c;e=h*m;n=d-e;x=i;p=l;G(b,v,o,n,x,p);n=u+g;v=r+w;y=d+e;z=k;G(b,n,v,y,x,z);d=q+t;n=d+g;c=s+c;x=c+e;y=j;G(b,n,v,x,y,z);G(b,d-g,o,c-e,y,p);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function KY(){B6.call(this);}
function Blm(){var a=new KY();A2y(a);return a;}
function A2y(a){P(a);}
function JW(){C2.call(this);}
function Bln(a,b,c,d){var e=new JW();TY(e,a,b,c,d);return e;}
function TY(a,b,c,d,e){FE(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.30000001192092896;a.i=BP()*0.20000000298023224+0.10000000149011612;a.h=a.h*0.30000001192092896;a.hY=1.0;a.ic=1.0;a.io=1.0;a.e8=16;D2(a,0.009999999776482582,0.009999999776482582);a.m9=0.05999999865889549;a.cw=8.0/(BP()*0.8+0.2)|0;}
function AKU(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANB(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AOE(a){var b,c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-a.m9;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARM(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=a.cw;a.cw=e-1|0;if(e<=0){$p=2;continue _;}if(a.cx){if(BP()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.l;e
=K(a.d);g=K(a.j);h=K(a.e);$p=3;continue _;case 2:Cb(a);if(C()){break _;}if(a.cx){if(BP()<0.5){$p=5;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}f=a.l;e=K(a.d);g=K(a.j);h=K(a.e);$p=3;case 3:$z=AB9(f,e,g,h);if(C()){break _;}f=$z;if(!f.nG()&&!f.dw())return;i=K(a.j)+1|0;f=a.l;e=K(a.d);g=K(a.j);h=K(a.e);$p=4;case 4:$z=AEQ(f,e,g,h);if(C()){break _;}e=$z;b=i-JE(e);if(a.j>=b)return;$p=6;continue _;case 5:Cb(a);if(C()){break _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;f=a.l;e=K(a.d);g=
K(a.j);h=K(a.e);$p=3;continue _;case 6:Cb(a);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function IV(){var a=this;IC.call(a);a.er=null;a.Am=0;a.eh=0;}
function Blo(a,b,c,d,e,f){var g=new IV();OS(g,a,b,c,d,e,f);return g;}
function OS(a,b,c,d,e,f,g){Uo(a,c,e,f);a.eh=b;a.er=d;a.Am=g;}
function AXW(a){return a.Am;}
function Pl(){IV.call(this);}
function AWj(a,b){var c,d;c=a.er.cp.data;d=a.eh;b=b*4|0;return c[d+b|0]&255|(a.er.cp.data[(a.eh+b|0)+1|0]&255)<<8|(a.er.cp.data[(a.eh+b|0)+2|0]&255)<<16|(a.er.cp.data[(a.eh+b|0)+3|0]&255)<<24;}
function ASZ(a,b,c){var d,e;d=a.er.cp.data;e=a.eh;b=b*4|0;d[e+b|0]=c<<24>>24;a.er.cp.data[(a.eh+b|0)+1|0]=c>>8<<24>>24;a.er.cp.data[(a.eh+b|0)+2|0]=c>>16<<24>>24;a.er.cp.data[(a.eh+b|0)+3|0]=c>>24<<24>>24;}
function VW(){IV.call(this);}
function A01(a,b){var c,d;c=a.er.cp.data;d=a.eh;b=b*4|0;return (c[d+b|0]&255)<<24|(a.er.cp.data[(a.eh+b|0)+1|0]&255)<<16|(a.er.cp.data[(a.eh+b|0)+2|0]&255)<<8|a.er.cp.data[(a.eh+b|0)+3|0]&255;}
function ATS(a,b,c){var d,e;d=a.er.cp.data;e=a.eh;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.er.cp.data[(a.eh+b|0)+1|0]=c>>16<<24>>24;a.er.cp.data[(a.eh+b|0)+2|0]=c>>8<<24>>24;a.er.cp.data[(a.eh+b|0)+3|0]=c<<24>>24;}
function AK2(){D.call(this);this.wd=null;}
function AYQ(a){var b=new AK2();A77(b,a);return b;}
function A77(a,b){a.wd=b;}
function ZS(a,b,c){return G6(b,a.wd)>=G6(c,a.wd)?1:(-1);}
function A1i(a,b,c){return ZS(a,b,c);}
function Wi(){D.call(this);this.yj=null;}
function APP(a,b,c){var d,e;d=b.fw;e=c.fw;return d&&!e?1:e&&!d?(-1):G6(b,a.yj)>=G6(c,a.yj)?(-1):1;}
function A9P(a,b,c){return APP(a,b,c);}
function Hu(){D.call(this);}
var Blp=null;var Blq=null;var Blr=null;var Bls=null;var Blt=null;function Blu(){var a=new Hu();AAr(a);return a;}
function AAr(a){return;}
function RH(b,c){var d,e,f;if(c===null)c=Bls;d=J(D,b.s);UP(b,d);P6(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;Rh(b,e,f[e]);e=e+1|0;}}
function AOj(){Blp=new Si;Blq=new Sh;Blr=new Sj;Bls=new WS;Blt=new WQ;}
function H1(){var a=this;D.call(a);a.mQ=null;a.ym=null;a.Dm=null;a.CA=null;a.HS=null;a.GD=0.0;a.FX=0.0;a.Fe=0.0;a.Fd=0.0;a.Fc=0.0;}
var BkC=null;var BkW=0.0;var BkX=0.0;var BkY=0.0;function Bb9(){var a=new H1();ADf(a);return a;}
function ADf(a){var b;a.mQ=C8();BQ(a.mQ,F(Jp),Bcx());BQ(a.mQ,F(NC),BbL());b=Nm(Iy(a.mQ));while(EL(b)){Mi(b).rf=a;}}
function VF(a,b){var c;c=CQ(a.mQ,b);if(c===null&&b!==F(D$)){c=VF(a,JR(b));BQ(a.mQ,b,c);}return c;}
function AIm(a,b){return Wx(a,b)===null?0:1;}
function Wx(a,b){return VF(a,Dl(b));}
function ARp(a,b,c,d,e,f){var g,h,i;a.CA=b;a.Dm=c;a.HS=e;a.ym=d;a.GD=e.P+(e.u-e.P)*f;a.FX=e.T+(e.I-e.T)*f;g=e.cs;h=e.d-e.cs;i=f;a.Fe=g+h*i;a.Fd=e.b7+(e.j-e.b7)*i;a.Fc=e.ct+(e.e-e.ct)*i;}
function Y5(a,b,c){var d,e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(AK$(b,a.Fe,a.Fd,a.Fc)>=4096.0)return;d=a.CA;e=b.dK;f=b.dI;g=b.dR;$p=1;case 1:$z=ANp(d,e,f,g);if(C()){break _;}h=$z;F9(h,h,h);i=b.dK-BkW;j=b.dI-BkX;k=b.dR-BkY;$p=2;case 2:AFt(a,b,i,j,k,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AFt(a,b,c,d,e,f){var g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=Wx(a,b);if(g===null)return;$p=1;case 1:g.CX(b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function A_1(a){return a.ym;}
function ALT(){BkC=Bb9();}
function H4(){var a=this;D.call(a);a.dV=null;a.FK=null;a.t0=null;a.n3=null;a.H5=null;a.rt=0.0;a.GS=0.0;a.FT=null;a.Eb=0.0;a.Ea=0.0;a.D_=0.0;}
var Bgz=null;var BkT=0.0;var BkU=0.0;var BkV=0.0;function Bat(){var a=new H4();AGB(a);return a;}
function AGB(a){var b,c,d,e,f;a.dV=C8();BQ(a.dV,F(Ku),A_8());b=a.dV;c=new Ug;d=BcZ();e=new P3;K3(e,6,0.5);Gs(c,d,0.699999988079071);c.kl=e;BQ(b,F(II),c);d=a.dV;f=new TO;c=Bcv();e=Bb5();Gs(f,c,0.699999988079071);f.kl=e;BQ(d,F(KO),f);BQ(a.dV,F(J6),Bck());BQ(a.dV,F(Ju),AYp(BcK(),0.5));d=a.dV;f=new DJ;c=new HV;KN(c);Gs(f,c,0.5);BQ(d,F(Jd),f);BQ(a.dV,F(JD),Bbx());d=a.dV;f=new Ul;c=new HV;KN(c);Gs(f,c,3.0);f.tx=6.0;BQ(d,F(Ld),f);BQ(a.dV,F(EQ),AYp(A$6(),0.5));d=a.dV;f=new TV;EI(f);BQ(d,F(C6),f);BQ(a.dV,F(IM),Bb3());d
=a.dV;f=new RD;EI(f);BQ(d,F(JB),f);BQ(a.dV,F(E_),X$());BQ(a.dV,F(Mv),BaA());BQ(a.dV,F(JU),Bar());BQ(a.dV,F(Gh),Bcf());d=Nm(Iy(a.dV));while(EL(d)){Mi(d).iD=a;}}
function Xa(a,b){var c;c=CQ(a.dV,b);if(c===null&&b!==F(C6)){c=Xa(a,JR(b));BQ(a.dV,b,c);}return c;}
function Sl(a,b){return Xa(a,Dl(b));}
function AHi(a,b,c,d,e,f,g){var h,i,j;a.n3=b;a.t0=c;a.FT=f;a.H5=e;a.FK=d;a.rt=e.P+(e.u-e.P)*g;a.GS=e.T+(e.I-e.T)*g;h=e.cs;i=e.d-e.cs;j=g;a.Eb=h+i*j;a.Ea=e.b7+(e.j-e.b7)*j;a.D_=e.ct+(e.e-e.ct)*j;}
function ANg(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.cs;e=b.d-b.cs;f=c;e=d+e*f;d=b.b7+(b.j-b.b7)*f;g=b.ct+(b.e-b.ct)*f;h=b.P+(b.u-b.P)*c;$p=1;case 1:$z=b.vk(c);if(C()){break _;}i=$z;F9(i,i,i);e=e-BkT;d=d-BkU;f=g-BkV;$p=2;case 2:AQL(a,b,e,d,f,h,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AQL(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Sl(a,b);if(h===null)return;$p=1;case 1:h.iQ(b,c,d,e,f,g);if(C()){break _;}$p=2;case 2:ANr(h,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function A8a(a,b){a.n3=b;}
function AJ1(a,b,c,d){var e,f,g;e=b-a.Eb;f=c-a.Ea;g=d-a.D_;return e*e+f*f+g*g;}
function AKC(){Bgz=Bat();}
function Nk(){D.call(this);}
var Blv=null;var Blw=null;function Blx(){var a=new Nk();AR_(a);return a;}
function AR_(a){return;}
function Vu(b){var c;c=0;while(true){if(c>=Blv.data.length)return (-1);if(b==Blv.data[c])break;c=c+1|0;}return c;}
function APi(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;Blv=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;Blw=b;}
function J9(){B6.call(this);}
function Bly(){var a=new J9();A7W(a);return a;}
function A7W(a){P(a);}
function V5(){var a=this;D.call(a);a.eG=0;a.e2=0;a.eH=0;}
function CO(a,b,c){var d=new V5();AWP(d,a,b,c);return d;}
function AWP(a,b,c,d){a.eG=b;a.e2=c;a.eH=d;}
function A6y(a,b){var c;if(!(b instanceof V5))return 0;c=b;return c.eG==a.eG&&c.e2==a.e2&&c.eH==a.eH?1:0;}
function A1C(a){return (Bj(a.eG,8976890)+Bj(a.e2,981131)|0)+a.eH|0;}
function Oz(){Fc.call(this);}
var Blz=0.0;var BlA=null;function AEs(){Blz=NaN;BlA=F($rt_floatcls());}
function Hn(){D.call(this);}
var Bdy=null;var BdA=null;var BdB=null;var Bdz=null;var Bdx=null;function BlB(){var a=new Hn();AQQ(a);return a;}
function AQQ(a){return;}
function AMT(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;Bdy=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]
=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);BdA=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);BdB=b;Bdz=new Wg;Bdx=new Sg;}
function Nl(){D.call(this);}
var BlC=null;var BlD=null;function BlE(){var a=new Nl();AKt(a);return a;}
function AKt(a){return;}
function AOk(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=$rt_floatToIntBits(b);c.zn=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.uA=0;c.uh=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=AOy(BlD,f);if(h<0)h= -h-2|0;i=9+(f-BlD.data[h]|0)|0;j=Long_fromInt(e);k=Long_shru(Long_mul(j,Long_fromInt(BlC.data[h])),32-i|0).lo;if(k>=1000000000){h=h+1|0;i=9+(f-BlD.data[h]|0)|0;k=Long_shru(Long_mul(j,Long_fromInt(BlC.data[h])),
32-i|0).lo;}g=(31-i|0)-g|0;l=g>=0?BlC.data[h]>>>g:BlC.data[h]<< -g;m=(l+1|0)>>1;n=l>>1;if(e==4194304)n=n>>2;o=10;while(o<=n){o=o*10|0;}if((k%o|0)>=(n/2|0))o=o/10|0;p=10;while(p<=m){p=p*10|0;}if((p-(k%p|0)|0)>(m/2|0))p=p/10|0;e=S(o,p);e=e>0?Bj(k/o|0,o):e<0?Bj(k/p|0,p)+p|0:Bj((k+(p/2|0)|0)/p|0,p);if(e>=1000000000){h=h+1|0;e=e/10|0;}else if(e<100000000){h=h+(-1)|0;e=e*10|0;}c.uA=e;c.uh=h-50|0;}
function ALj(){var b,c,d,e,f,g,h,i;BlC=$rt_createIntArray(100);BlD=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=BlC.data;g=d+50|0;f[g]=$rt_udiv(e,20);BlD.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=BlC.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);BlD.data[i]=c;d=d+1|0;}}
function Sg(){var a=this;D.call(a);a.uA=0;a.uh=0;a.zn=0;}
function BlF(){var a=new Sg();ASX(a);return a;}
function ASX(a){return;}
function DJ(){var a=this;Dh.call(a);a.mJ=null;a.kl=null;}
function AYp(a,b){var c=new DJ();Gs(c,a,b);return c;}
function Gs(a,b,c){EI(a);a.mJ=b;a.me=c;}
function A$D(a,b){a.kl=b;}
function AAh(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bd(2884);try{h=b.e_+(b.dG-b.e_)*g;i=b.P+(b.u-b.P)*g;j=b.T+(b.I-b.T)*g;Bw(c,d,e);k=b.oS+g;Bv(180.0-h,0.0,1.0,0.0);if(b.c2>0){f=D_((b.c2
+g-1.0)/20.0*1.600000023841858);if(f>1.0)f=1.0;Bv(f*a.CJ(b),0.0,0.0,1.0);}l=0.0625;Bb(32826);CC((-1.0),(-1.0),1.0);a.xj(b,g);Bw(0.0,(-1.5078125),0.0);m=b.jW+(b.cg-b.jW)*g;n=b.gn-b.cg*(1.0-g);if(m>1.0)m=1.0;o=b.tL;p=PU(b);$p=1;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);Bb(2884);BE();return;case 1:try{APx(a,o,p);if(C()){break _;}Bb(3008);o=a.mJ;f=i-h;o.hI(n,m,k,f,j,l);q=0;if(q>=4){$p=2;continue _;}$p=3;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){o=$$je;}
else{throw $$e;}}B9(o);Bb(2884);BE();return;case 2:a:{try{$z=ADO(b,g);if(C()){break _;}r=$z;s=a.CM(b,r,g);q=s>>24&255;if(!(q<=0&&b.dE<=0&&b.c2<=0)){Bd(3553);Bd(3008);Bb(3042);Dg(770,771);HO(514);if(!(b.dE<=0&&b.c2<=0)){BU(r,0.0,0.0,0.4000000059604645);a.mJ.hI(n,m,k,f,j,l);t=0;if(t<4){$p=4;continue _;}}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x=q/255.0;BU(u,v,w,x);a.mJ.hI(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HO(515);Bd(3042);Bb(3008);Bb(3553);}Bd(32826);break a;}catch($$e){$$je=Q($$e);if
($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);}Bb(2884);BE();return;case 3:try{$z=a.k9(b,q);if(C()){break _;}s=$z;if(s){a.kl.hI(n,m,k,f,j,l);Bd(3042);Bb(3008);}q=q+1|0;if(q>=4){$p=2;continue _;}continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);Bb(2884);BE();return;case 4:a:{try{$z=a.k9(b,t);if(C()){break _;}y=$z;if(y){BU(r,0.0,0.0,0.4000000059604645);a.kl.hI(n,m,k,f,j,l);}t=t+1|0;if(t<4){continue _;}if(q>0){u=(s>>16&255)/255.0;v=(s>>8&255)/255.0;w=(s&255)/255.0;x
=q/255.0;BU(u,v,w,x);a.mJ.hI(n,m,k,f,j,l);y=0;if(y<4){$p=5;continue _;}}HO(515);Bd(3042);Bb(3008);Bb(3553);Bd(32826);break a;}catch($$e){$$je=Q($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);}Bb(2884);BE();return;case 5:a:{try{$z=a.k9(b,y);if(C()){break _;}s=$z;if(s){BU(u,v,w,x);a.kl.hI(n,m,k,f,j,l);}y=y+1|0;if(y>=4){HO(515);Bd(3042);Bb(3008);Bb(3553);Bd(32826);break a;}continue _;}catch($$e){$$je=Q($$e);if($$je instanceof BD){o=$$je;}else{throw $$e;}}B9(o);}Bb(2884);BE();return;default:Fa();}}C4().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function AP0(a,b,c){return 0;}
function A5t(a,b){return 90.0;}
function A6H(a,b,c,d){return 0;}
function A9k(a,b,c){return;}
function AO5(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.Ia(b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function OT(){var a=this;DJ.call(a);a.A4=null;a.Ad=null;a.Cw=null;}
var BlG=null;function Bbx(){var a=new OT();AIe(a);return a;}
function AIe(a){Gs(a,XB(0.0),0.5);a.A4=a.mJ;a.Ad=XB(1.0);a.Cw=XB(0.5);}
function ARF(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=AIn(b.K,3-c|0);if(d!==null){e=DL(d);if(e instanceof F6){f=e;b=new V;X(b);b=I(I(I(b,B(573)),BlG.data[f.BH]),B(574));g=S(c,2);b=W(I(Bf(b,g?1:2),B(515)));$p=1;continue _;}}return 0;case 1:AKz(a,b);if(C()){break _;}h=g?a.Ad:a.Cw;h.iY.iS=c?0:1;h.lc.iS=c?0:1;b=h.pj;i=S(c,1);b.iS=i&&g?0:1;h.d1.iS=i?0:1;h.dO.iS=i?0:1;h.i$.iS
=g&&c!=3?0:1;h.he.iS=g&&c!=3?0:1;a.kl=h;return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ADT(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=d-b.c4;$p=1;case 1:AAh(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ALG(a){Ca(a.A4.d1,0.0625);}
function Ze(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=ARF(a,b,c);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,$p);}
function AMa(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADT(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ACS(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ADT(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AAl(){var b,c;b=J(B4,5);c=b.data;c[0]=B(239);c[1]=B(575);c[2]=B(576);c[3]=B(577);c[4]=B(578);BlG=b;}
function LE(){var a=this;Gg.call(a);a.hA=0;a.i5=0;a.hR=0;a.h6=0;a.kq=null;a.cl=0;a.gC=0;a.yX=0;}
function Dj(a,b,c,d){var e=new LE();A3s(e,a,b,c,d);return e;}
function BlH(a,b,c,d,e,f){var g=new LE();SQ(g,a,b,c,d,e,f);return g;}
function A3s(a,b,c,d,e){SQ(a,b,c,d,200,20,e);}
function SQ(a,b,c,d,e,f,g){Nj(a);a.hA=200;a.i5=20;a.gC=1;a.yX=1;a.cl=b;a.hR=c;a.h6=d;a.hA=e;a.i5=f;a.kq=g;}
function AC0(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.yX)return;e=b.fa;f=3553;g=b.bo;b=B(506);$p=1;case 1:$z=AHz(g,b);if(C()){break _;}h=$z;Cp(f,h);BU(1.0,1.0,1.0,1.0);h=1;f=c>=a.hR&&d>=a.h6&&c<(a.hR+a.hA|0)&&d<(a.h6+a.i5|0)?1:0;if(!a.gC)h=0;else if(f)h=2;i=a.hR;j=a.h6;h=46+(h*20|0)|0;CH(a,i,j,0,h,a.hA/2|0,a.i5);CH(a,a.hR+(a.hA/2|0)|0,a.h6,200-(a.hA/2|0)|
0,h,a.hA/2|0,a.i5);if(!a.gC)DG(a,e,a.kq,a.hR+(a.hA/2|0)|0,a.h6+((a.i5-8|0)/2|0)|0,(-6250336));else if(!f)DG(a,e,a.kq,a.hR+(a.hA/2|0)|0,a.h6+((a.i5-8|0)/2|0)|0,14737632);else DG(a,e,a.kq,a.hR+(a.hA/2|0)|0,a.h6+((a.i5-8|0)/2|0)|0,16777120);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Sb(a,b,c){return a.gC&&b>=a.hR&&c>=a.h6&&b<(a.hR+a.hA|0)&&c<(a.h6+a.i5|0)?1:0;}
function Mc(){D.call(this);}
function BlI(){var a=new Mc();AV3(a);return a;}
function AV3(a){return;}
function Qz(){}
function Kz(){var a=this;Mc.call(a);a.zY=null;a.H7=null;a.vg=0;a.Dp=0;a.nh=null;a.vO=null;}
function AEh(a){var b,c,d;a:{b=a.vg;c=a.Dp;d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6;return d|c&8|b<<2&16|c&32|b>>>8&64|b>>>5&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function ABs(a){return a.nh.oZ();}
function WO(a,b){var c,d,e,f,g;if(a.vg&1){c=new L2;P(c);M(c);}if(a.vO===null){c=new Tk;P(c);M(c);}d=b.data;e=d.length;if(e!=a.nh.data.length){c=new Cc;P(c);M(c);}f=0;while(true){if(f>=e){c=b.data;g=new a.zY.fX();a.vO.call(g,c);return g;}if(!F2(a.nh.data[f])&&d[f]!==null&&!UJ(a.nh.data[f],d[f])){c=new Cc;P(c);M(c);}if(F2(a.nh.data[f])&&d[f]===null)break;f=f+1|0;}c=new Cc;P(c);M(c);}
function Oy(){}
function QG(){D.call(this);}
function BlJ(){var a=new QG();A_r(a);return a;}
function A_r(a){return;}
function AJC(a){var b,c,d;Be();BdP.requestPointerLock();b=B_();if(VZ())clearTimeout(VZ());M1(0);if(Long_lt(Long_sub(b,P5()),Long_fromInt(3000))){c=new TE;c.Jq=a;d=3000-Long_sub(b,P5()).lo|0;M1(setTimeout(Cu(c,"onTimer"),d));}}
function A1N(a){AJC(a);}
function WS(){D.call(this);}
function BlK(){var a=new WS();AVw(a);return a;}
function AVw(a){return;}
function A41(a,b,c){return b!==null?b.lT(c): -c.lT(b);}
function WQ(){D.call(this);}
function BlL(){var a=new WQ();A5V(a);return a;}
function A5V(a){return;}
function Si(){Eo.call(this);}
function BlM(){var a=new Si();A$e(a);return a;}
function A$e(a){return;}
function Sh(){FZ.call(this);}
function BlN(){var a=new Sh();A$j(a);return a;}
function A$j(a){return;}
function Sj(){Gf.call(this);}
function BlO(){var a=new Sj();A3S(a);return a;}
function A3S(a){return;}
function IH(){D.call(this);this.rf=null;}
function AKG(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.rf.Dm;$p=1;case 1:$z=AHz(c,b);if(C()){break _;}d=$z;Eb(c,d);return;default:Fa();}}C4().s(a,b,c,d,$p);}
function A00(a,b){a.rf=b;}
function ANJ(a){return a.rf.ym;}
function AA$(){IH.call(this);this.EJ=null;}
function Bcx(){var a=new AA$();ATG(a);return a;}
function ATG(a){a.EJ=Bb1();}
function ARw(a,b,c,d,e,f){var g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d+0.75,e+0.5);$p=1;case 1:$z=AMo(b);if(C()){break _;}g=$z;Bv( -((g*360|0)/16.0),0.0,1.0,0.0);h=B(579);$p=2;case 2:AKG(a,h);if(C()){break _;}B3();CC(1.0,(-1.0),(-1.0));ANh(a.EJ);BE();Bw(0.0,0.5,0.09000000357627869);CC(0.01666666753590107,(-0.01666666753590107),0.01666666753590107);Cj(0.0,
0.0,(-0.01666666753590107));h=ANJ(a);i=0;while(i<b.gt.data.length){j=b.gt.data[i];if(i!=b.rG)EF(h,j, -Dx(h,j)/2|0,(i*10|0)-(b.gt.data.length*5|0)|0,0);else{k=new V;X(k);j=W(I(I(I(k,B(580)),j),B(581)));EF(h,j, -Dx(h,j)/2|0,(i*10|0)-(b.gt.data.length*5|0)|0,0);}i=i+1|0;}BU(1.0,1.0,1.0,1.0);BE();return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function XL(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:ARw(a,b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function NC(){var a=this;D$.call(a);a.j1=0;a.jO=null;a.lN=0.0;a.mx=0.0;}
function BcF(){var a=new NC();A8l(a);return a;}
function A8l(a){a.j1=(-1);a.jO=B(582);a.mx=0.0;a.j1=20;}
function ZO(a){return AGR(a.ch.bg,a.dK,a.dI,a.dR)>256.0?0:1;}
function AC$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.mx=a.lN;if(ZO(a)){b=a.dK+N(a.ch.q);c=a.dI+N(a.ch.q);d=a.dR+N(a.ch.q);BV(a.ch,B(256),b,c,d,0.0,0.0,0.0);BV(a.ch,B(257),b,c,d,0.0,0.0,0.0);a.lN=a.lN+1000.0/(a.j1+200.0);while(a.lN>360.0){a.lN=a.lN-360.0;a.mx=a.mx-360.0;}if(a.j1==(-1))N2(a);if(a.j1>0)a.j1
=a.j1-1|0;else{e=4;f=0;if(f<e){g=Jt(a.jO,a.ch);if(g===null)return;h=a.ch;i=Dl(g);j=Dw(D4(a.dK,a.dI,a.dR,a.dK+1|0,a.dI+1|0,a.dR+1|0),8.0,4.0,8.0);$p=1;continue _;}}}return;case 1:$z=ANm(h,i,j);if(C()){break _;}h=$z;if(h.s>=6){N2(a);return;}k=a.dK+(Cl(a.ch.q)-Cl(a.ch.q))*4.0;l=(a.dI+E(a.ch.q,3)|0)-1|0;m=a.dR+(Cl(a.ch.q)-Cl(a.ch.q))*4.0;KB(g,k,l,m,N(a.ch.q)*360.0,0.0);$p=2;case 2:$z=g.uU(k,l,m);if(C()){break _;}n=$z;if(n){h=a.ch;$p=3;continue _;}f=f+1|0;if(f>=e)return;g=Jt(a.jO,a.ch);if(g===null)return;h=a.ch;i
=Dl(g);j=Dw(D4(a.dK,a.dI,a.dR,a.dK+1|0,a.dI+1|0,a.dR+1|0),8.0,4.0,8.0);$p=1;continue _;case 3:AOn(h,g);if(C()){break _;}o=0;while(o<20){c=a.dK+0.5+(N(a.ch.q)-0.5)*2.0;d=a.dI+0.5+(N(a.ch.q)-0.5)*2.0;k=a.dR+0.5+(N(a.ch.q)-0.5)*2.0;BV(a.ch,B(256),c,d,k,0.0,0.0,0.0);BV(a.ch,B(257),c,d,k,0.0,0.0,0.0);o=o+1|0;}AEX(g);N2(a);f=f+1|0;if(f>=e)return;g=Jt(a.jO,a.ch);if(g===null)return;h=a.ch;i=Dl(g);j=Dw(D4(a.dK,a.dI,a.dR,a.dK+1|0,a.dI+1|0,a.dR+1|0),8.0,4.0,8.0);$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,
j,k,l,m,n,o,$p);}
function N2(a){a.j1=200+E(a.ch.q,600)|0;}
function AR9(){IH.call(this);this.wL=null;}
function BbL(){var a=new AR9();AXv(a);return a;}
function AXv(a){a.wL=C8();}
function Z7(a,b,c,d,e,f){var g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c+0.5,d,e+0.5);g=CQ(a.wL,b.jO);if(g===null){g=Jt(b.jO,null);BQ(a.wL,b.jO,g);}if(g===null){BE();return;}g.l=b.ch;Bw(0.0,0.4000000059604645,0.0);Bv((b.mx+(b.lN-b.mx)*f)*10.0,0.0,1.0,0.0);Bv((-30.0),1.0,0.0,0.0);Bw(0.0,(-0.4000000059604645),0.0);CC(0.4375,0.4375,0.4375);b=Bgz;c=0.0;d=0.0;e=0.0;h=0.0;$p=1;case 1:AQL(b,g,c,d,e,
h,f);if(C()){break _;}BE();return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function ARl(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:Z7(a,b,c,d,e,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function AQq(){DJ.call(this);}
function A_8(){var a=new AQq();A4B(a);return a;}
function A4B(a){Gs(a,A5x(),1.0);a.kl=A5x();}
function A6x(a,b){return 180.0;}
function X7(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c)return 0;if(c)return 0;d=B(583);$p=1;case 1:AKz(a,d);if(C()){break _;}e=1.0;f=1.0;$p=2;case 2:$z=ADO(b,f);if(C()){break _;}f=$z;f=(e-f)*0.5;Bb(3042);Bd(3008);Dg(770,771);BU(1.0,1.0,1.0,f);return 1;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function A6u(a,b){return 180.0;}
function Yj(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=X7(a,b,c);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,$p);}
function Ug(){DJ.call(this);}
function AGi(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(584);$p=1;case 1:AKz(a,d);if(C()){break _;}return !c&&b.qA?1:0;default:Fa();}}C4().s(a,b,c,d,$p);}
function AMk(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AGi(a,b,c);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,$p);}
function F4(){var a=this;Eh.call(a);a.hd=null;a.hB=null;a.jK=null;a.jJ=null;a.jI=null;a.jL=null;}
function BlP(a,b){var c=new F4();K3(c,a,b);return c;}
function K3(a,b,c){var d,e;a.hd=BK(0,0);BG(a.hd,(-4.0),(-4.0),(-8.0),8,8,8,c);BJ(a.hd,0.0,18-b|0,(-6.0));a.hB=BK(28,8);BG(a.hB,(-5.0),(-10.0),(-7.0),10,16,8,c);BJ(a.hB,0.0,17-b|0,2.0);a.jK=BK(0,16);BG(a.jK,(-2.0),0.0,(-2.0),4,b,4,c);d=a.jK;e=24-b|0;BJ(d,(-3.0),e,7.0);a.jJ=BK(0,16);BG(a.jJ,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jJ,3.0,e,7.0);a.jI=BK(0,16);BG(a.jI,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jI,(-3.0),e,(-5.0));a.jL=BK(0,16);BG(a.jL,(-2.0),0.0,(-2.0),4,b,4,c);BJ(a.jL,3.0,e,(-5.0));}
function A98(a,b,c,d,e,f,g){AJ0(a,b,c,d,e,f,g);Ca(a.hd,g);Ca(a.hB,g);Ca(a.jK,g);Ca(a.jJ,g);Ca(a.jI,g);Ca(a.jL,g);}
function AJ0(a,b,c,d,e,f,g){var h;a.hd.bX=e/57.2957763671875;a.hB.b1=1.5707963705062866;h=a.jK;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.jJ;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.jI.b1=BC(d)*1.399999976158142*c;a.jL.b1=BC(b)*1.399999976158142*c;}
function P3(){F4.call(this);}
function BcZ(){var a=new P3();AYm(a);return a;}
function AYm(a){K3(a,6,0.0);}
function TO(){DJ.call(this);}
function AM_(a,b,c){var d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=B(585);$p=1;case 1:AKz(a,d);if(C()){break _;}return !c&&!b.x9?1:0;default:Fa();}}C4().s(a,b,c,d,$p);}
function ARz(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:$z=AM_(a,b,c);if(C()){break _;}c=$z;return c;default:Fa();}}C4().s(a,b,c,$p);}
function ACO(){F4.call(this);}
function Bcv(){var a=new ACO();A$c(a);return a;}
function A$c(a){K3(a,12,0.0);a.hd=BK(0,0);BG(a.hd,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BJ(a.hd,0.0,6.0,(-8.0));a.hB=BK(28,8);BG(a.hB,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BJ(a.hB,0.0,5.0,2.0);}
function ARo(){F4.call(this);}
function Bb5(){var a=new ARo();AVj(a);return a;}
function AVj(a){K3(a,12,0.0);a.hd=BK(0,0);BG(a.hd,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BJ(a.hd,0.0,6.0,(-8.0));a.hB=BK(28,8);BG(a.hB,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BJ(a.hB,0.0,5.0,2.0);a.jK=BK(0,16);BG(a.jK,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jK,(-3.0),12.0,7.0);a.jJ=BK(0,16);BG(a.jJ,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jJ,3.0,12.0,7.0);a.jI=BK(0,16);BG(a.jI,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jI,(-3.0),12.0,(-5.0));a.jL=BK(0,16);BG(a.jL,(-2.0),0.0,(-2.0),4,6,4,0.5);BJ(a.jL,3.0,12.0,(-5.0));}
function ACf(){DJ.call(this);}
function Bck(){var a=new ACf();AZV(a);return a;}
function AZV(a){Gs(a,Ba8(),0.5);}
function ADJ(a,b,c){var d,e,f;d=Qt(b,c);e=1.0+Br(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;c=d*d;c=c*c;f=(1.0+c*0.4000000059604645)*e;CC(f,(1.0+c*0.10000000149011612)/e,f);}
function Yi(a,b,c,d){var e,f;e=Qt(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function A76(a,b,c){ADJ(a,b,c);}
function AZ7(a,b,c,d){return Yi(a,b,c,d);}
function HV(){MD.call(this);}
function BlQ(){var a=new HV();A8m(a);return a;}
function A8m(a){KN(a);}
function A2U(a,b,c,d,e,f,g){var h,i,j;AIZ(a,b,c,d,e,f,g);h=Br(a.xZ*3.1415927410125732);i=Br((1.0-(1.0-a.xZ)*(1.0-a.xZ))*3.1415927410125732);a.d1.bU=0.0;a.dO.bU=0.0;j=a.d1;b=0.10000000149011612-h*0.6000000238418579;j.bX= -b;a.dO.bX=b;a.d1.b1=(-1.5707963705062866);a.dO.b1=(-1.5707963705062866);j=a.d1;b=j.b1;c=h*1.2000000476837158-i*0.4000000059604645;j.b1=b-c;j=a.dO;j.b1=j.b1-c;j=a.d1;b=j.bU;c=d*0.09000000357627869;j.bU=b+BC(c)*0.05000000074505806+0.05000000074505806;j=a.dO;j.bU=j.bU-(BC(c)*0.05000000074505806
+0.05000000074505806);j=a.d1;b=j.b1;c=d*0.06700000166893005;j.b1=b+Br(c)*0.05000000074505806;j=a.dO;j.b1=j.b1-Br(c)*0.05000000074505806;}
function AIs(){HV.call(this);}
function BcK(){var a=new AIs();AWy(a);return a;}
function AWy(a){KN(a);a.d1=BK(40,16);BG(a.d1,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.d1,(-5.0),2.0,0.0);a.dO=BK(40,16);a.dO.lE=1;BG(a.dO,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BJ(a.dO,5.0,2.0,0.0);a.i$=BK(0,16);BG(a.i$,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.i$,(-2.0),12.0,0.0);a.he=BK(0,16);a.he.lE=1;BG(a.he,(-1.0),0.0,(-1.0),2,12,2,0.0);BJ(a.he,2.0,12.0,0.0);}
function Ld(){DP.call(this);}
function APe(a,b,c,d){var e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.l;$p=1;case 1:$z=ANp(e,b,c,d);if(C()){break _;}f=$z;return f-0.5;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function Ul(){DJ.call(this);this.tx=0.0;}
function ZB(a,b,c){CC(a.tx,a.tx,a.tx);}
function A$9(a,b,c){ZB(a,b,c);}
function TV(){Dh.call(this);}
function BlR(){var a=new TV();AZF(a);return a;}
function AZF(a){EI(a);}
function AJA(a,b,c,d,e,f,g){B3();A8A(b.L,c-b.cs,d-b.b7,e-b.ct);BE();}
function IM(){var a=this;C6.call(a);a.rz=0;a.dJ=0;a.ns=0;a.EF=0;a.nz=0;a.dT=null;}
function JX(a,b){var c,d,e,f,g,h,i,j,k,l;a.dJ=b;c=b*90|0;a.u=c;a.P=c;c=a.dT.gd;d=a.dT.m8;e=a.dT.gd;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;d=d/32.0;f=e/32.0;g=a.ns+0.5;h=a.EF+0.5;i=a.nz+0.5;if(!b)i=i-0.5625;j=S(b,1);if(!j)g=g-0.5625;k=S(b,2);if(!k)i=i+0.5625;l=S(b,3);if(!l)g=g+0.5625;if(!b)g=g-HS(a,a.dT.gd);if(!j)i=i+HS(a,a.dT.gd);if(!k)g=g+HS(a,a.dT.gd);if(!l)i=i-HS(a,a.dT.gd);e=h+HS(a,a.dT.m8);CU(a,g,e,i);M$(a.L,g-c+0.0062500000931322575,e-d+0.0062500000931322575,i-f+0.0062500000931322575,g+c+(-0.0062500000931322575),
e+d+(-0.0062500000931322575),i+f+(-0.0062500000931322575));}
function HS(a,b){return b==32?0.5:b!=64?0.0:0.5;}
function ADr(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.rz;a.rz=b+1|0;if(b!=100)return;$p=1;case 1:$z=ZQ(a);if(C()){break _;}c=$z;if(c)return;a.rz=0;$p=2;case 2:Cb(a);if(C()){break _;}d=a.l;e=new E_;f=a.l;g=a.d;h=a.j;i=a.e;j=new Cd;BB();DD(j,BiM);He(e,f,g,h,i,j);$p=3;case 3:AOn(d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ZQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=a.L;$p=1;case 1:$z=X2(b,a,c);if(C()){break _;}b=$z;if(b.s>0)return 0;d=a.dT.gd/16|0;e=a.dT.m8/16|0;f=a.ns;g=a.nz;if(!a.dJ)f=K(a.d-a.dT.gd/32.0);if(a.dJ==1)g=K(a.e-a.dT.gd/32.0);if(a.dJ==2)f=K(a.d-a.dT.gd/32.0);if(a.dJ==3)g=K(a.e-a.dT.gd/32.0);h=K(a.j-a.dT.m8/32.0);i=0;while
(i<d){j=0;if(j<e){if(a.dJ&&a.dJ!=2){b=a.l;k=a.ns;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.nz;$p=3;continue _;}i=i+1|0;}b=a.l;c=a.L;$p=2;case 2:$z=ADR(b,a,c);if(C()){break _;}c=$z;k=0;while(k<c.s){if(Z(c,k) instanceof IM)return 0;k=k+1|0;}return 1;case 3:$z=AB9(b,k,l,m);if(C()){break _;}b=$z;if(!b.dw())return 0;j=j+1|0;while(true){if(j<e){if(a.dJ&&a.dJ!=2){b=a.l;k=a.ns;l=h+j|0;m=g+i|0;$p=4;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.nz;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.l;c=a.L;$p=2;continue _;case 4:$z
=AB9(b,k,l,m);if(C()){break _;}b=$z;if(!b.dw())return 0;j=j+1|0;while(true){if(j<e){if(a.dJ&&a.dJ!=2){b=a.l;k=a.ns;l=h+j|0;m=g+i|0;continue _;}b=a.l;k=f+i|0;l=h+j|0;m=a.nz;$p=3;continue _;}i=i+1|0;if(i>=d)break;j=0;}b=a.l;c=a.L;$p=2;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AXY(a){return 1;}
function AEx(a,b,c){var d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Cb(a);if(C()){break _;}d=a.l;b=new E_;e=a.l;f=a.d;g=a.j;h=a.e;i=new Cd;BB();DD(i,BiM);He(b,e,f,g,h,i);$p=2;case 2:AOn(d,b);if(C()){break _;}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AAz(){Dh.call(this);this.Ih=null;}
function Bb3(){var a=new AAz();AZL(a);return a;}
function AZL(a){EI(a);a.Ih=new DB;}
function AQi(a,b,c,d,e,f,g){var h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);Bv(f,0.0,1.0,0.0);Bb(32826);h=B(586);$p=1;case 1:AKz(a,h);if(C()){break _;}h=b.dT;CC(0.0625,0.0625,0.0625);i=h.gd;j=h.m8;k=h.zN;l=h.zM;$p=2;case 2:AC1(a,b,i,j,k,l);if(C()){break _;}Bd(32826);BE();return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function AC1(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g= -c/2.0;h= -d/
2.0;i=0;j=c/16|0;k=d/16|0;l=e+c|0;m=f+d|0;while(i<j){if(0<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=0+1|0;f=q*16|0;r=h+f;s=0*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dJ)w=K(b.d+u/16.0);if(b.dJ==1)y=K(b.e-u/16.0);if(b.dJ==2)w=K(b.d-u/16.0);if(b.dJ==3)y=K(b.e+u/16.0);z=a.iD.n3;$p=1;continue _;}i=i+1|0;}return;case 1:$z=ANp(z,w,x,y);if(C()){break _;}ba=$z;F9(ba,ba,ba);ba=(l-o|0)/256.0;u=(l-c|0)/256.0;v=(m-s|0)/256.0;bb=(m-f|0)/256.0;BA();z=BeW;Bz(z);Cj(0.0,0.0,(-1.0));bc=n;bd=t;be
=u;bf=v;G(z,bc,bd,(-0.5),be,bf);bg=p;bh=ba;G(z,bg,bd,(-0.5),bh,bf);bf=r;bi=bb;G(z,bg,bf,(-0.5),bh,bi);G(z,bc,bf,(-0.5),be,bi);Cj(0.0,0.0,1.0);G(z,bc,bf,0.5,0.75,0.0);G(z,bg,bf,0.5,0.8125,0.0);G(z,bg,bd,0.5,0.8125,0.0625);G(z,bc,bd,0.5,0.75,0.0625);Cj(0.0,(-1.0),0.0);G(z,bc,bf,(-0.5),0.75,0.001953125);G(z,bg,bf,(-0.5),0.8125,0.001953125);G(z,bg,bf,0.5,0.8125,0.001953125);G(z,bc,bf,0.5,0.75,0.001953125);Cj(0.0,1.0,0.0);G(z,bc,bd,0.5,0.75,0.001953125);G(z,bg,bd,0.5,0.8125,0.001953125);G(z,bg,bd,(-0.5),0.8125,0.001953125);G(z,
bc,bd,(-0.5),0.75,0.001953125);Cj((-1.0),0.0,0.0);G(z,bc,bf,0.5,0.751953125,0.0);G(z,bc,bd,0.5,0.751953125,0.0625);G(z,bc,bd,(-0.5),0.751953125,0.0625);G(z,bc,bf,(-0.5),0.751953125,0.0);Cj(1.0,0.0,0.0);G(z,bg,bf,(-0.5),0.751953125,0.0);G(z,bg,bd,(-0.5),0.751953125,0.0625);G(z,bg,bd,0.5,0.751953125,0.0625);G(z,bg,bf,0.5,0.751953125,0.0);Bt(z);s=q;while(true){if(s<k){c=(i+1|0)*16|0;n=g+c;o=i*16|0;p=g+o;q=s+1|0;f=q*16|0;r=h+f;s=s*16|0;t=h+s;u=(n+p)/2.0;v=(r+t)/2.0;w=K(b.d);x=K(b.j+v/16.0);y=K(b.e);if(!b.dJ)w=K(b.d
+u/16.0);if(b.dJ==1)y=K(b.e-u/16.0);if(b.dJ==2)w=K(b.d-u/16.0);if(b.dJ==3)y=K(b.e+u/16.0);z=a.iD.n3;continue _;}i=i+1|0;if(i>=j)break;s=0;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$p);}
function AOY(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQi(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function JB(){var a=this;C6.call(a);a.sA=0;a.s6=0;a.rL=0;a.vV=0;a.pl=0;a.ls=0;a.sp=null;a.p4=0;a.m_=0;}
function ATj(a,b){var c=new JB();AZj(c,a,b);return c;}
function AZj(a,b,c){FD(a,b);a.sA=(-1);a.s6=(-1);a.rL=(-1);a.vV=0;a.pl=0;a.ls=0;a.m_=0;a.sp=c;D2(a,0.5,0.5);KB(a,c.d,c.j,c.e,c.u,c.I);a.d=a.d-BC(a.u/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.e=a.e-Br(a.u/180.0*3.1415927410125732)*0.1599999964237213;CU(a,a.d,a.j,a.e);a.c4=0.0;a.g= -Br(a.u/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732);a.h=BC(a.u/180.0*3.1415927410125732)*BC(a.I/180.0*3.1415927410125732);a.i= -Br(a.I/180.0*3.1415927410125732);QK(a,a.g,a.i,a.h,1.5,1.0);}
function QK(a,b,c,d,e,f){var g,h,i;g=Ce(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;g=C0(a.m)*0.007499999832361937;h=f;b=b+g*h;c=c+C0(a.m)*0.007499999832361937*h;d=d+C0(a.m)*0.007499999832361937*h;g=e;b=b*g;c=c*g;d=d*g;a.g=b;a.i=c;a.h=d;i=Ce(b*b+d*d);e=CS(b,d)*180.0/3.1415927410125732;a.u=e;a.P=e;e=CS(c,i)*180.0/3.1415927410125732;a.I=e;a.T=e;a.p4=0;}
function APB(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJe(a);if(C()){break _;}if(a.ls>0)a.ls=a.ls-1|0;if(a.pl){b=a.l;c=a.sA;d=a.s6;e=a.rL;$p=2;continue _;}a.m_=a.m_+1|0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.l;$p=3;continue _;case 2:$z=ACE(b,c,d,e);if(C()){break _;}c=$z;if
(c==a.vV){a.p4=a.p4+1|0;if(a.p4!=1200)return;$p=4;continue _;}a.pl=0;a.g=a.g*N(a.m)*0.20000000298023224;a.i=a.i*N(a.m)*0.20000000298023224;a.h=a.h*N(a.m)*0.20000000298023224;a.p4=0;a.m_=0;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);g=a.l;$p=3;case 3:$z=AJt(g,b,f);if(C()){break _;}g=$z;b=BY(a.d,a.j,a.e);f=BY(a.d+a.g,a.j+a.i,a.e+a.h);if(g!==null)f=BY(g.gy.x,g.gy.z,g.gy.w);h=null;i=a.l;j=Dw(Jm(a.L,a.g,a.i,a.h),1.0,1.0,1.0);$p=5;continue _;case 4:Cb(a);if(C()){break _;}return;case 5:$z=ADR(i,a,j);if(C()){break _;}i
=$z;k=0.0;d=0;while(d<CY(i)){j=Z(i,d);if(j.lx()&&!(j===a.sp&&a.m_<5)){l=QY(Dw(j.L,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,f);if(l!==null){m=DI(b,l.gy);if(!(m>=k&&k!==0.0)){h=j;k=m;}}}d=d+1|0;}if(h!==null)g=A1m(h);if(g!==null){if(g.nE!==null){b=g.nE;f=a.sp;c=4;$p=7;continue _;}a.sA=g.h9;a.s6=g.h$;a.rL=g.h_;b=a.l;c=a.sA;d=a.s6;e=a.rL;$p=6;continue _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.u=CS(a.g,a.h)*180.0/3.1415927410125732;a.I=CS(a.i,n)*180.0/3.1415927410125732;while
(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while(a.u-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.u=a.P+(a.u-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 6:$z=ACE(b,c,d,e);if(C()){break _;}c=$z;a.vV=c;a.g=g.gy.x-a.d;a.i=g.gy.z-a.j;a.h=g.gy.w-a.e;n=Ce(a.g*a.g+a.i*a.i+a.h*a.h);k=a.d;m=a.g;p=n;a.d=k-m/p*0.05000000074505806;a.j=a.j-a.i/p*0.05000000074505806;a.e=a.e-a.h/p*0.05000000074505806;Di(a.l,a,B(587),
1.0,1.2000000476837158/(N(a.m)*0.20000000298023224+0.8999999761581421));a.pl=1;a.ls=7;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.u=CS(a.g,a.h)*180.0/3.1415927410125732;a.I=CS(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while(a.u-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.u=a.P+(a.u-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 7:$z=b.fs(f,c);if(C())
{break _;}c=$z;if(c){Di(a.l,a,B(587),1.0,1.2000000476837158/(N(a.m)*0.20000000298023224+0.8999999761581421));$p=8;continue _;}a.g=a.g*(-0.10000000149011612);a.i=a.i*(-0.10000000149011612);a.h=a.h*(-0.10000000149011612);a.u=a.u+180.0;a.P=a.P+180.0;a.m_=0;a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.u=CS(a.g,a.h)*180.0/3.1415927410125732;a.I=CS(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while
(a.u-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.u=a.P+(a.u-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;continue _;case 8:Cb(a);if(C()){break _;}a.d=a.d+a.g;a.j=a.j+a.i;a.e=a.e+a.h;n=Ce(a.g*a.g+a.h*a.h);a.u=CS(a.g,a.h)*180.0/3.1415927410125732;a.I=CS(a.i,n)*180.0/3.1415927410125732;while(a.I-a.T<(-180.0)){a.T=a.T-360.0;}while(a.I-a.T>=180.0){a.T=a.T+360.0;}while(a.u-a.P<(-180.0)){a.P=a.P-360.0;}while(a.u-a.P>=180.0){a.P=a.P+360.0;}a.I=a.T+(a.I-a.T)*0.20000000298023224;a.u=a.P+(a.u
-a.P)*0.20000000298023224;o=0.9900000095367432;$p=9;case 9:$z=AFa(a);if(C()){break _;}c=$z;if(c){e=0;while(e<4){BV(a.l,B(213),a.d-a.g*0.25,a.j-a.i*0.25,a.e-a.h*0.25,a.g,a.i,a.h);e=e+1|0;}o=0.800000011920929;}k=a.g;m=o;a.g=k*m;a.i=a.i*m;a.h=a.h*m;a.i=a.i-0.029999999329447746;CU(a,a.d,a.j,a.e);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function A7L(a,b){var c,d;if(a.pl&&a.sp===b&&a.ls<=0){c=b.K;d=new Cd;BB();MR(d,Bgo.cW,1);if(Vk(c,d)){Di(a.l,a,B(588),0.20000000298023224,((N(a.m)-N(a.m))*0.699999988079071+1.0)*2.0);R6(b,a);Cb(a);}}}
function RD(){Dh.call(this);}
function BlS(){var a=new RD();AS5(a);return a;}
function AS5(a){EI(a);}
function AJ3(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=B(589);$p=1;case 1:AKz(a,h);if(C()){break _;}B3();Bw(c,d,e);Bv(b.P+(b.u-b.P)*g-90.0,0.0,1.0,0.0);Bv(b.T+(b.I-b.T)*g,0.0,0.0,1.0);BA();h=BeW;Bb(32826);i=b.ls-g;if(i>0.0)Bv( -Br(i*3.0)*i,0.0,0.0,1.0);Bv(45.0,1.0,0.0,0.0);CC(0.05624999850988388,0.05624999850988388,0.05624999850988388);Bw((-4.0),0.0,0.0);Cj(0.05624999850988388,
0.0,0.0);Bz(h);G(h,(-7.0),(-2.0),(-2.0),0.0,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.3125);G(h,(-7.0),2.0,(-2.0),0.0,0.3125);Bt(h);Cj((-0.05624999850988388),0.0,0.0);Bz(h);G(h,(-7.0),2.0,(-2.0),0.0,0.15625);G(h,(-7.0),2.0,2.0,0.15625,0.15625);G(h,(-7.0),(-2.0),2.0,0.15625,0.3125);G(h,(-7.0),(-2.0),(-2.0),0.0,0.3125);Bt(h);j=0;while(j<4){Bv(90.0,1.0,0.0,0.0);Cj(0.0,0.0,0.05624999850988388);Bz(h);G(h,(-8.0),(-2.0),0.0,0.0,0.0);G(h,8.0,(-2.0),0.0,0.5,0.0);G(h,8.0,2.0,0.0,0.5,
0.15625);G(h,(-8.0),2.0,0.0,0.0,0.15625);Bt(h);j=j+1|0;}Bd(32826);BE();return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ADp(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AJ3(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function E_(){var a=this;C6.call(a);a.ni=null;a.zt=0;a.mO=0;a.g_=0;a.q6=0;a.yz=0.0;}
function Hf(a,b,c,d,e){var f=new E_();He(f,a,b,c,d,e);return f;}
function He(a,b,c,d,e,f){FD(a,b);a.mO=0;a.q6=5;a.yz=BP()*3.141592653589793*2.0;D2(a,0.25,0.25);a.c4=a.eP/2.0;CU(a,c,d,e);a.ni=f;a.u=BP()*360.0;a.g=BP()*0.20000000298023224-0.10000000149011612;a.i=0.20000000298023224;a.h=BP()*0.20000000298023224-0.10000000149011612;a.i9=0;}
function AJM(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:a.Jk();if(C()){break _;}if(a.g_>0)a.g_=a.g_-1|0;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-0.03999999910593033;b=a.l;c=K(a.d);d=K(a.j);e=K(a.e);$p=2;case 2:$z=AB9(b,c,d,e);if(C()){break _;}b=$z;if(b===Bf2){a.i=0.20000000298023224;a.g=(N(a.m)-N(a.m))*0.20000000298023224;a.h=(N(a.m)-N(a.m))*0.20000000298023224;Di(a.l,a,B(215),0.4000000059604645,
2.0+N(a.m)*0.4000000059604645);}f=a.d;g=a.j;h=a.e;$p=3;case 3:ACN(a,f,g,h);if(C()){break _;}$p=4;case 4:AEl(a);if(C()){break _;}f=a.g;g=a.i;h=a.h;$p=5;case 5:ARM(a,f,g,h);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}a.zt=a.zt+1|0;a.mO=a.mO+1|0;if(a.mO<6000)return;$p=6;case 6:Cb(a);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AEl(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.l;c=a.L;d=Bf1;$p=1;case 1:$z=AAA(b,c,d,a);if(C()){break _;}e=$z;return e;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function ACN(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=b-e;i=c-f;j=d-g;L();k=BgL.data;l=a.l;$p=1;case 1:$z=ACE(l,e,f,g);if(C()){break _;}m=$z;if(!k[m])return 0;k=BgL.data;l=a.l;m=e-1|0;$p=2;case 2:$z=ACE(l,m,f,g);if(C())
{break _;}m=$z;n=k[m]?0:1;k=BgL.data;l=a.l;m=e+1|0;$p=3;case 3:$z=ACE(l,m,f,g);if(C()){break _;}m=$z;o=k[m]?0:1;k=BgL.data;l=a.l;m=f-1|0;$p=4;case 4:$z=ACE(l,e,m,g);if(C()){break _;}m=$z;p=k[m]?0:1;k=BgL.data;l=a.l;m=f+1|0;$p=5;case 5:$z=ACE(l,e,m,g);if(C()){break _;}m=$z;q=k[m]?0:1;k=BgL.data;l=a.l;m=g-1|0;$p=6;case 6:$z=ACE(l,e,f,m);if(C()){break _;}m=$z;m=k[m]?0:1;k=BgL.data;l=a.l;r=g+1|0;$p=7;case 7:$z=ACE(l,e,f,r);if(C()){break _;}e=$z;r=k[e]?0:1;s=(-1);t=9999.0;if(n&&h<t){s=0;t=h;}if(!o)b=t;else{b=1.0
-h;if(b<t)s=1;else b=t;}if(p&&i<b){s=2;b=i;}if(!q)c=b;else{c=1.0-i;if(c<b)s=3;else c=b;}if(m&&j<c){s=4;c=j;}if(r&&1.0-j<c)s=5;u=N(a.m)*0.20000000298023224+0.10000000149011612;if(!s)a.g= -u;if(s==1)a.g=u;if(s==2)a.i= -u;if(s==3)a.i=u;if(s==4)a.h= -u;if(s==5)a.h=u;return 0;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AMD(a,b){Vs(a,null,b);}
function Vs(a,b,c){a.q6=a.q6-c|0;if(a.q6<=0)Cb(a);return 0;}
function A_n(a,b){if(!a.g_&&Vk(b.K,a.ni)){Di(a.l,a,B(588),0.20000000298023224,((N(a.m)-N(a.m))*0.699999988079071+1.0)*2.0);R6(b,a);Cb(a);}}
function Mv(){C6.call(this);this.hq=0;}
function AWZ(a,b,c,d){var e=new Mv();A6I(e,a,b,c,d);return e;}
function A6I(a,b,c,d,e){var f,g,h;FD(a,b);a.hq=0;a.mG=1;D2(a,0.9800000190734863,0.9800000190734863);a.c4=a.eP/2.0;f=c;g=d;h=e;CU(a,f,g,h);e=BP()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.g= -Br(e)*0.019999999552965164;a.i=0.20000000298023224;a.h= -BC(e)*0.019999999552965164;a.i9=0;a.hq=80;a.bS=f;a.cS=g;a.bR=h;}
function A$m(a){return a.cR?0:1;}
function XR(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARM(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);}e=a.hq;a.hq=e-1|0;if(e>0){BV(a.l,B(256),a.d,a.j+0.5,a.e,0.0,
0.0,0.0);return;}$p=2;case 2:Cb(a);if(C()){break _;}f=4.0;g=a.l;h=null;b=a.d;c=a.j;d=a.e;$p=3;case 3:Yg(g,h,b,c,d,f);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AO2(){Dh.call(this);this.wi=null;}
function BaA(){var a=new AO2();A7q(a);return a;}
function A7q(a){EI(a);a.wi=Kq();a.me=0.5;}
function APF(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);if(b.hq-g+1.0<10.0){h=1.0-(b.hq-g+1.0)/10.0;if(h<0.0)h=0.0;if(h>1.0)h=1.0;f=h*h;i=1.0+f*f*0.30000001192092896;CC(i,i,i);}h=(1.0-(b.hq-g+1.0)/100.0)*0.800000011920929;j=B(179);$p=1;case 1:AKz(a,j);if(C()){break _;}j=a.wi;L();GY(j,Bfv);if(!((b.hq/5|0)%2|0)){Bd(3553);Bd(2896);Bb(3042);Dg(770,772);BU(1.0,
1.0,1.0,h);GY(a.wi,Bfv);BU(1.0,1.0,1.0,1.0);Bd(3042);Bb(2896);Bb(3553);}BE();return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AMd(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:APF(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function JU(){var a=this;C6.call(a);a.hS=0;a.oQ=0;}
function AYs(a){return a.cR?0:1;}
function AMW(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.hS){$p=3;continue _;}a.bS=a.d;a.cS=a.j;a.bR=a.e;a.oQ=a.oQ+1|0;a.i=a.i-0.03999999910593033;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARM(a,b,c,d);if(C()){break _;}a.g=a.g*0.9800000190734863;a.i=a.i*0.9800000190734863;a.h=a.h*0.9800000190734863;e=K(a.d);f=K(a.j);g=K(a.e);h=a.l;$p=2;case 2:$z=ACE(h,e,f,g);if(C()){break _;}i
=$z;if(i==a.hS){h=a.l;i=0;$p=4;continue _;}if(!a.cx){if(a.oQ<=100)return;e=a.hS;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;continue _;case 3:Cb(a);if(C()){break _;}return;case 4:APE(h,e,f,g,i);if(C()){break _;}if(!a.cx){if(a.oQ<=100)return;e=a.hS;f=1;$p=7;continue _;}a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;a.i=a.i*(-0.5);$p=5;case 5:Cb(a);if(C()){break _;}h=a.l;i=a.hS;j=1;$p=6;case 6:$z=AId(h,i,e,f,g,j);if(C()){break _;}i=$z;if(!i){e=a.hS;f=1;$p=
9;continue _;}h=a.l;i=a.hS;$p=10;continue _;case 7:AB1(a,e,f);if(C()){break _;}$p=8;case 8:Cb(a);if(C()){break _;}return;case 9:AB1(a,e,f);if(C()){break _;}return;case 10:$z=APE(h,e,f,g,i);if(C()){break _;}e=$z;if(e)return;e=a.hS;f=1;$p=9;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AX9(a){return a.l;}
function AQV(){Dh.call(this);this.DD=null;}
function Bar(){var a=new AQV();AXB(a);return a;}
function AXB(a){EI(a);a.DD=Kq();a.me=0.5;}
function AQp(a,b,c,d,e,f,g){var h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();Bw(c,d,e);h=B(179);$p=1;case 1:AKz(a,h);if(C()){break _;}L();h=Be0.data[b.hS];i=b.l;Bd(2896);j=a.DD;k=K(b.d);l=K(b.j);m=K(b.e);$p=2;case 2:AI7(j,h,i,k,l,m);if(C()){break _;}Bb(2896);BE();return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ARs(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQp(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function Gh(){var a=this;C6.call(a);a.Bu=null;a.iT=0;a.kC=0;a.oP=0;a.kO=0;}
var BlT=null;function AS1(a,b){return b.L;}
function A0b(a){return a.L;}
function A7O(a){return 1;}
function AVX(a){return a.eP*0.2;}
function ALo(a,b,c){var d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.oP= -a.oP;a.kC=10;a.iT=a.iT+(c*10|0)|0;if(a.iT<=40)return 1;BB();c=BiS.cW;d=1;e=0.0;$p=1;case 1:AGL(a,c,d,e);if(C()){break _;}$p=2;case 2:APn(a);if(C()){break _;}return 1;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function A9U(a){return a.cR?0:1;}
function APn(a){var b,c,d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;c=27;while(b<c){d=T4(a,b);if(d!==null){e=N(a.m)*0.800000011920929+0.10000000149011612;f=N(a.m)*0.800000011920929+0.10000000149011612;g=N(a.m)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;if(d.p>0){k=E(a.m,21)+10|0;if(k>d.p)k=d.p;d.p=d.p-k|0;l=Hf(a.l,a.d+h,a.j+i,a.e+j,
Ov(d.bA,k,d.eo));l.g=C0(a.m)*0.05000000074505806;l.i=C0(a.m)*0.05000000074505806+0.20000000298023224;l.h=C0(a.m)*0.05000000074505806;m=a.l;$p=2;continue _;}}b=b+1|0;}$p=1;case 1:Cb(a);if(C()){break _;}return;case 2:AOn(m,l);if(C()){break _;}a:while(true){if(d.p>0){k=E(a.m,21)+10|0;if(k>d.p)k=d.p;d.p=d.p-k|0;l=Hf(a.l,a.d+h,a.j+i,a.e+j,Ov(d.bA,k,d.eo));l.g=C0(a.m)*0.05000000074505806;l.i=C0(a.m)*0.05000000074505806+0.20000000298023224;l.h=C0(a.m)*0.05000000074505806;m=a.l;continue _;}while(true){b=b+1|0;if(b>=
c)break a;d=T4(a,b);if(d===null)continue;else break;}e=N(a.m)*0.800000011920929+0.10000000149011612;f=N(a.m)*0.800000011920929+0.10000000149011612;g=N(a.m)*0.800000011920929+0.10000000149011612;h=e;i=f;j=g;}$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function ASQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kC>0)a.kC=a.kC-1|0;if(a.iT>0)a.iT=a.iT-1|0;a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i
-0.03999999910593033;b=K(a.d);c=K(a.j);d=K(a.e);e=a.l;f=c-1|0;$p=1;case 1:$z=ACE(e,b,f,d);if(C()){break _;}f=$z;L();if(f==Bhh.b)c=c+(-1)|0;g=0.4;h=0.0078125;e=a.l;$p=2;case 2:$z=ACE(e,b,c,d);if(C()){break _;}f=$z;if(f==Bhh.b){i=a.d;j=a.j;k=a.e;$p=3;continue _;}if(a.g<(-0.4))a.g=(-0.4);if(a.g>g)a.g=g;if(a.h<(-0.4))a.h=(-0.4);if(a.h>g)a.h=g;if(a.cx){a.g=a.g*0.5;a.i=a.i*0.5;a.h=a.h*0.5;}i=a.g;j=a.i;k=a.h;$p=5;continue _;case 3:$z=ASu(a,i,j,k);if(C()){break _;}l=$z;e=a.l;$p=4;case 4:$z=AEQ(e,b,c,d);if(C()){break _;}m
=$z;a.j=c;n=S(m,2);if(n>=0&&m<=5)a.j=c+1|0;if(!n)a.g=a.g-h;if(m==3)a.g=a.g+h;if(m==4)a.h=a.h+h;if(m==5)a.h=a.h-h;o=BlT.data[m].data;p=o[1].data[0]-o[0].data[0]|0;q=o[1].data[2]-o[0].data[2]|0;r=Ed(p*p+q*q);if(a.g*p+a.h*q<0.0){p= -p;q= -q;}s=Ed(a.g*a.g+a.h*a.h);a.g=s*p/r;a.h=s*q/r;t=b;u=t+0.5;v=u+o[0].data[0]*0.5;w=d;p=w+0.5;i=p+o[0].data[2]*0.5;j=u+o[1].data[0]*0.5;k=p+o[1].data[2]*0.5;j=j-v;k=k-i;if(j===0.0){a.d=u;u=a.e-w;}else if(k===0.0){a.e=p;u=a.d-t;}else u=((a.d-v)*j+(a.e-i)*k)*2.0;a.d=v+j*u;a.e=i+k*u;CU(a,
a.d,a.j+a.c4,a.e);x=a.g;t=a.h;if(a.bH!==null){x=x*0.75;t=t*0.75;}i=(-0.4);if(x<i)x=i;if(x>g)x=g;if(t>=i)i=t;if(i<=g)g=i;i=0.0;$p=7;continue _;case 5:ARM(a,i,j,k);if(C()){break _;}if(!a.cx){a.g=a.g*0.949999988079071;a.i=a.i*0.949999988079071;a.h=a.h*0.949999988079071;}a.I=0.0;y=a.bS-a.d;z=a.bR-a.e;if(y*y+z*z>0.001){a.u=CS(z,y)*180.0/3.141592653589793;if(a.kO)a.u=a.u+180.0;}ba=a.u-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.u=a.u+180.0;a.kO=a.kO?0:1;}W0(a,
a.u,a.I);e=a.l;l=Dw(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;case 6:a:{$z=ADR(e,a,l);if(C()){break _;}bb=$z;if(bb!==null&&CY(bb)>0){bc=0;while(true){if(bc>=CY(bb))break a;bd=Z(bb,bc);if(bd!==a.bH&&bd.rV()&&bd instanceof Gh)bd.u1(a);bc=bc+1|0;}}}if(a.bH!==null&&a.bH.cR)a.bH=null;return;case 7:ARM(a,x,i,g);if(C()){break _;}if(o[0].data[1]&&(K(a.d)-b|0)==o[0].data[0]&&(K(a.e)-d|0)==o[0].data[2])CU(a,a.d,a.j+o[0].data[1],a.e);else if(o[1].data[1]&&(K(a.d)-b|0)==o[1].data[0]&&(K(a.e)-d|0)==o[1].data[2])CU(a,
a.d,a.j+o[1].data[1],a.e);if(a.bH===null){a.g=a.g*0.9599999785423279;a.i=a.i*0.0;a.h=a.h*0.9599999785423279;}else{a.g=a.g*0.996999979019165;a.i=a.i*0.0;a.h=a.h*0.996999979019165;}i=a.d;j=a.j;k=a.e;$p=8;case 8:$z=ASu(a,i,j,k);if(C()){break _;}e=$z;if(e!==null&&l!==null){w=(l.z-e.z)*0.05;i=Ed(a.g*a.g+a.h*a.h);if(i>0.0){j=a.g/i;k=i+w;a.g=j*k;a.h=a.h/i*k;}CU(a,a.d,e.z,a.e);}f=K(a.d);n=K(a.e);if(!(f==b&&n==d)){i=Ed(a.g*a.g+a.h*a.h);a.g=i*(f-b|0);a.h=i*(n-d|0);}a.I=0.0;y=a.bS-a.d;z=a.bR-a.e;if(y*y+z*z>0.001){a.u=
CS(z,y)*180.0/3.141592653589793;if(a.kO)a.u=a.u+180.0;}ba=a.u-a.P;while(ba>=180.0){ba=ba-360.0;}while(ba<(-180.0)){ba=ba+360.0;}if(!(ba>=(-170.0)&&ba<170.0)){a.u=a.u+180.0;a.kO=a.kO?0:1;}W0(a,a.u,a.I);e=a.l;l=Dw(a.L,0.20000000298023224,0.0,0.20000000298023224);$p=6;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function AJ5(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=K(b);g=K(c);h=K(d);i=a.l;j=g-1|0;$p=1;case 1:$z=ACE(i,f,j,h);if(C()){break _;}j=$z;L();if(j==Bhh.b)g=g+(-1)|0;i=a.l;$p=2;case 2:$z=ACE(i,f,g,h);if(C()){break _;}j=$z;if(j!=Bhh.b)return null;i=a.l;$p=3;case 3:$z=AEQ(i,f,g,h);if(C()){break _;}j=$z;c=g;if(j>=2&&j<=5)c
=g+1|0;k=BlT.data[j].data;l=k[1].data[0]-k[0].data[0]|0;m=k[1].data[2]-k[0].data[2]|0;n=Ed(l*l+m*m);l=l/n;m=m/n;l=b+l*e;d=d+m*e;if(k[0].data[1]&&(K(l)-f|0)==k[0].data[0]&&(K(d)-h|0)==k[0].data[2])c=c+k[0].data[1];else if(k[1].data[1]&&(K(l)-f|0)==k[1].data[0]&&(K(d)-h|0)==k[1].data[2])c=c+k[1].data[1];$p=4;case 4:$z=ASu(a,l,c,d);if(C()){break _;}i=$z;return i;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ASu(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=K(b);f=K(c);g=K(d);h=a.l;i=f-1|0;$p=1;case 1:$z=ACE(h,e,i,g);if(C()){break _;}i=$z;L();if(i==Bhh.b)f=f+(-1)|0;h=a.l;$p=2;case 2:$z=ACE(h,e,f,g);if(C()){break _;}i=$z;if(i!=Bhh.b)return null;h
=a.l;$p=3;case 3:$z=AEQ(h,e,f,g);if(C()){break _;}j=$z;c=f;k=BlT.data[j].data;l=e;m=l+0.5;n=m+k[0].data[0]*0.5;o=c+0.5;p=o+k[0].data[1]*0.5;q=g;r=q+0.5;s=r+k[0].data[2]*0.5;m=m+k[1].data[0]*0.5;t=o+k[1].data[1]*0.5;o=r+k[1].data[2]*0.5;r=m-n;u=(t-p)*2.0;v=o-s;l=r===0.0?d-q:v===0.0?b-l:((b-n)*r+(d-s)*v)*2.0;b=n+r*l;c=p+u*l;d=s+v*l;i=S(u,0.0);if(i<0)c=c+1.0;if(i>0)c=c+0.5;return BY(b,c,d);default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function A30(a,b){var c,d,e,f,g,h;if(b!==a.bH){c=b.d-a.d;d=b.e-a.e;e=c*c+d*d;if(e>=9.999999747378752E-5){e=Ce(e);c=c/e;f=d/e;g=1.0/e;if(g>1.0)g=1.0;c=c*g;d=f*g;c=c*0.10000000149011612;d=d*0.10000000149011612;c=c*(1.0-a.n7);d=d*(1.0-a.n7);c=c*0.5;d=d*0.5;if(!(b instanceof Gh)){Ht(a, -c,0.0, -d);Ht(b,c/4.0,0.0,d/4.0);}else{f=(b.g+a.g)/2.0;h=(b.h+a.h)/2.0;a.h=0.0;a.g=0.0;Ht(a,f-c,0.0,h-d);b.h=0.0;b.g=0.0;Ht(b,f+c,0.0,h+d);}}}}
function A1h(a){return 27;}
function T4(a,b){return a.Bu.data[b];}
function A8Z(a,b){Pq(b,a);return 1;}
function AMR(){var b,c,d,e,f,g;b=J($rt_arraycls($rt_arraycls($rt_intcls())),10);c=b.data;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[0]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[1]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]
=(-1);g[1]=(-1);g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[2]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=(-1);g[2]=0;e[1]=f;c[3]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=(-1);g[2]=1;e[1]=f;c[4]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=(-1);g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[1]=f;c[5]=d;g=J($rt_arraycls($rt_intcls()),2);e=g.data;d=$rt_createIntArray(3);f=d.data;f[0]=0;f[1]=0;f[2]=1;e[0]=d;d=$rt_createIntArray(3);f=d.data;f[0]=1;f[1]=0;f[2]=0;e[1]=d;c[6]=g;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=1;e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[7]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g
=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=(-1);g[1]=0;g[2]=0;e[1]=f;c[8]=d;d=J($rt_arraycls($rt_intcls()),2);e=d.data;f=$rt_createIntArray(3);g=f.data;g[0]=0;g[1]=0;g[2]=(-1);e[0]=f;f=$rt_createIntArray(3);g=f.data;g[0]=1;g[1]=0;g[2]=0;e[1]=f;c[9]=d;BlT=b;}
function ARH(){Dh.call(this);this.C5=null;}
function Bcf(){var a=new ARH();A$p(a);return a;}
function A$p(a){EI(a);a.me=0.5;a.C5=Bc_();}
function AQo(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:B3();h=b.cs;i=b.d-b.cs;j=g;k=h+i*j;l=b.b7+(b.j-b.b7)*j;i=b.ct+(b.e-b.ct)*j;h=0.30000001192092896;$p=1;case 1:$z=ASu(b,k,l,i);if(C()){break _;}m=$z;n=b.T+(b.I-b.T)*g;if(m!==null){$p=2;continue _;}Bw(c,d,e);Bv(180.0
-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.kC-g;p=b.iT-g;if(p<0.0)p=0.0;if(o>0.0)Bv(Br(o)*o*p/10.0*b.oP,1.0,0.0,0.0);b=B(179);$p=4;continue _;case 2:$z=AJ5(b,k,l,i,h);if(C()){break _;}q=$z;h=(-0.30000001192092896);$p=3;case 3:$z=AJ5(b,k,l,i,h);if(C()){break _;}r=$z;if(q===null)q=m;if(r===null)r=m;c=c+m.x-k;d=d+(q.z+r.z)/2.0-l;e=e+m.w-i;s=Dk(r, -q.x, -q.z, -q.w);if(HU(s)!==0.0){s=CD(s);f=CS(s.w,s.x)*180.0/3.141592653589793;n=Ix(s.z)*73.0;}Bw(c,d,e);Bv(180.0-f,0.0,1.0,0.0);Bv( -n,0.0,0.0,1.0);o=b.kC-g;p=b.iT-g;if
(p<0.0)p=0.0;if(o>0.0)Bv(Br(o)*o*p/10.0*b.oP,1.0,0.0,0.0);b=B(179);$p=4;case 4:AKz(a,b);if(C()){break _;}CC(0.75,0.75,0.75);b=Kq();L();GY(b,Bg8);CC(1.3333333730697632,1.3333333730697632,1.3333333730697632);b=B(590);$p=5;case 5:AKz(a,b);if(C()){break _;}CC((-1.0),(-1.0),1.0);AKA(a.C5,0.0,0.0,(-0.10000000149011612),0.0,0.0,0.0625);BE();return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function AQn(a,b,c,d,e,f,g){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AQo(a,b,c,d,e,f,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function Wg(){var a=this;D.call(a);a.u5=Long_ZERO;a.t5=0;a.ze=0;}
function BlU(){var a=new Wg();AUm(a);return a;}
function AUm(a){return;}
function ABL(){var a=this;D.call(a);a.wp=null;a.wH=null;}
function Bb1(){var a=new ABL();AUx(a);return a;}
function AUx(a){a.wp=BK(0,0);BG(a.wp,(-12.0),(-14.0),(-1.0),24,12,2,0.0);a.wH=BK(0,14);BG(a.wH,(-1.0),(-2.0),(-1.0),2,14,2,0.0);}
function ANh(a){Ca(a.wp,0.0625);Ca(a.wH,0.0625);}
function AH_(){var a=this;Eh.call(a);a.l2=null;a.qV=null;a.rH=null;a.kd=null;a.kc=null;a.kf=null;a.ke=null;a.kh=null;a.kg=null;a.kj=null;a.ki=null;}
function A5x(){var a=new AH_();AUX(a);return a;}
function AUX(a){a.l2=BK(32,4);BG(a.l2,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BJ(a.l2,0.0,15.0,(-3.0));a.qV=BK(0,0);BG(a.qV,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BJ(a.qV,0.0,15.0,0.0);a.rH=BK(0,12);BG(a.rH,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BJ(a.rH,0.0,15.0,9.0);a.kd=BK(18,0);BG(a.kd,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kd,(-4.0),15.0,2.0);a.kc=BK(18,0);BG(a.kc,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kc,4.0,15.0,2.0);a.kf=BK(18,0);BG(a.kf,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kf,(-4.0),15.0,1.0);a.ke=BK(18,0);BG(a.ke,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BJ(a.ke,4.0,15.0,1.0);a.kh=BK(18,0);BG(a.kh,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kh,(-4.0),15.0,0.0);a.kg=BK(18,0);BG(a.kg,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kg,4.0,15.0,0.0);a.kj=BK(18,0);BG(a.kj,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.kj,(-4.0),15.0,(-1.0));a.ki=BK(18,0);BG(a.ki,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BJ(a.ki,4.0,15.0,(-1.0));}
function AYi(a,b,c,d,e,f,g){YB(a,b,c,d,e,f,g);Ca(a.l2,g);Ca(a.qV,g);Ca(a.rH,g);Ca(a.kd,g);Ca(a.kc,g);Ca(a.kf,g);Ca(a.ke,g);Ca(a.kh,g);Ca(a.kg,g);Ca(a.kj,g);Ca(a.ki,g);}
function YB(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a.l2.bX=e/57.2957763671875;a.l2.b1=f/57.2957763671875;a.kd.bU=(-0.7853981852531433);a.kc.bU=0.7853981852531433;a.kf.bU=(-0.5811946392059326);a.ke.bU=0.5811946392059326;a.kh.bU=(-0.5811946392059326);a.kg.bU=0.5811946392059326;a.kj.bU=(-0.7853981852531433);a.ki.bU=0.7853981852531433;a.kd.bX=0.7853981852531433;a.kc.bX=(-0.7853981852531433);a.kf.bX=0.39269909262657166;a.ke.bX=(-0.39269909262657166);a.kh.bX=(-0.39269909262657166);a.kg.bX=0.39269909262657166;a.kj.bX
=(-0.7853981852531433);a.ki.bX=0.7853981852531433;b=b*0.6661999821662903;f=b*2.0;h= -(BC(f+0.0)*0.4000000059604645)*c;i= -(BC(f+3.1415927410125732)*0.4000000059604645)*c;j= -(BC(f+1.5707963705062866)*0.4000000059604645)*c;k= -(BC(f+4.71238899230957)*0.4000000059604645)*c;l=H2(Br(b+0.0)*0.4000000059604645)*c;m=H2(Br(b+3.1415927410125732)*0.4000000059604645)*c;n=H2(Br(b+1.5707963705062866)*0.4000000059604645)*c;o=H2(Br(b+4.71238899230957)*0.4000000059604645)*c;p=a.kd;p.bX=p.bX+h;p=a.kc;p.bX=p.bX+ -h;p=a.kf;p.bX
=p.bX+i;p=a.ke;p.bX=p.bX+ -i;p=a.kh;p.bX=p.bX+j;p=a.kg;p.bX=p.bX+ -j;p=a.kj;p.bX=p.bX+k;p=a.ki;p.bX=p.bX+ -k;p=a.kd;p.bU=p.bU+l;p=a.kc;p.bU=p.bU+ -l;p=a.kf;p.bU=p.bU+m;p=a.ke;p.bU=p.bU+ -m;p=a.kh;p.bU=p.bU+n;p=a.kg;p.bU=p.bU+ -n;p=a.kj;p.bU=p.bU+o;p=a.ki;p.bU=p.bU+ -o;}
function AIH(){var a=this;Eh.call(a);a.l8=null;a.vw=null;a.sX=null;a.pr=null;a.pq=null;a.pp=null;a.po=null;}
function Ba8(){var a=new AIH();A5i(a);return a;}
function A5i(a){a.l8=BK(0,0);BG(a.l8,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BJ(a.l8,0.0,4.0,0.0);a.vw=BK(32,0);BG(a.vw,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BJ(a.vw,0.0,4.0,0.0);a.sX=BK(16,16);BG(a.sX,(-4.0),0.0,(-2.0),8,12,4,0.0);BJ(a.sX,0.0,4.0,0.0);a.pr=BK(0,16);BG(a.pr,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pr,(-2.0),16.0,4.0);a.pq=BK(0,16);BG(a.pq,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pq,2.0,16.0,4.0);a.pp=BK(0,16);BG(a.pp,(-2.0),0.0,(-2.0),4,6,4,0.0);BJ(a.pp,(-2.0),16.0,(-4.0));a.po=BK(0,16);BG(a.po,(-2.0),0.0,(-2.0),4,6,4,
0.0);BJ(a.po,2.0,16.0,(-4.0));}
function A3b(a,b,c,d,e,f,g){Zy(a,b,c,d,e,f,g);Ca(a.l8,g);Ca(a.sX,g);Ca(a.pr,g);Ca(a.pq,g);Ca(a.pp,g);Ca(a.po,g);}
function Zy(a,b,c,d,e,f,g){var h;a.l8.bX=e/57.2957763671875;a.l8.b1=f/57.2957763671875;h=a.pr;b=b*0.6661999821662903;h.b1=BC(b)*1.399999976158142*c;h=a.pq;d=b+3.1415927410125732;h.b1=BC(d)*1.399999976158142*c;a.pp.b1=BC(d)*1.399999976158142*c;a.po.b1=BC(b)*1.399999976158142*c;}
function AE2(){Eh.call(this);this.cZ=null;}
function Bc_(){var a=new AE2();A4a(a);return a;}
function A4a(a){a.cZ=J(QO,7);a.cZ.data[0]=BK(0,10);a.cZ.data[1]=BK(0,0);a.cZ.data[2]=BK(0,0);a.cZ.data[3]=BK(0,0);a.cZ.data[4]=BK(0,0);a.cZ.data[5]=BK(44,10);BG(a.cZ.data[0],(-10.0),(-8.0),(-1.0),20,16,2,0.0);BJ(a.cZ.data[0],0.0,4.0,0.0);BG(a.cZ.data[5],(-9.0),(-7.0),(-1.0),18,14,1,0.0);BJ(a.cZ.data[5],0.0,4.0,0.0);BG(a.cZ.data[1],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cZ.data[1],(-9.0),4.0,0.0);BG(a.cZ.data[2],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cZ.data[2],9.0,4.0,0.0);BG(a.cZ.data[3],(-8.0),(-9.0),(-1.0),
16,8,2,0.0);BJ(a.cZ.data[3],0.0,4.0,(-7.0));BG(a.cZ.data[4],(-8.0),(-9.0),(-1.0),16,8,2,0.0);BJ(a.cZ.data[4],0.0,4.0,7.0);a.cZ.data[0].b1=1.5707963705062866;a.cZ.data[1].bX=4.71238899230957;a.cZ.data[2].bX=1.5707963705062866;a.cZ.data[3].bX=3.1415927410125732;a.cZ.data[5].b1=(-1.5707963705062866);}
function AKA(a,b,c,d,e,f,g){var h;a.cZ.data[5].m6=4.0-d;h=0;while(h<6){Ca(a.cZ.data[h],g);h=h+1|0;}}
function TH(){var a=this;D.call(a);a.lK=0;a.yr=0;a.su=0;a.nk=0;a.le=null;}
function KK(a){return a.lK>=a.su?0:1;}
function KZ(a){var b,c;PP(a);a.nk=a.lK;b=a.le;c=a.lK;a.lK=c+1|0;return Z(b,c);}
function AMj(a){var b;if(a.nk<0){b=new D3;P(b);M(b);}PP(a);En(a.le,a.nk);a.yr=a.le.d7;if(a.nk<a.lK)a.lK=a.lK-1|0;a.su=a.su-1|0;a.nk=(-1);}
function PP(a){var b;if(a.yr>=a.le.d7)return;b=new KY;P(b);M(b);}
function Jb(){var a=this;D.call(a);a.g4=null;a.tw=0;a.cE=null;a.gh=null;a.hD=null;a.jz=null;a.fv=null;a.q4=0;a.fY=0;a.fV=0;a.iW=null;a.dN=null;a.hf=0;a.e$=0;a.qe=0;a.Eq=0;a.sc=0;a.nr=Long_ZERO;}
var BkB=0;function BaY(a,b,c){var d=new Jb();ARi(d,a,b,c);return d;}
function A9B(a,b,c,d){var e=new Jb();A1I(e,a,b,c,d);return e;}
function ARi(a,b,c,d){var e;a.iW=C8();a.dN=J(Ka,8);a.hf=0;a.e$=0;a.Eq=0;a.sc=0;a.nr=Long_ZERO;a.cE=b;a.fY=c;a.fV=d;a.fv=$rt_createByteArray(256);e=0;while(e<a.dN.data.length){a.dN.data[e]=Ci();e=e+1|0;}}
function A1I(a,b,c,d,e){var f;f=c.data;ARi(a,b,d,e);a.g4=c;b=new Ui;d=f.length;AJJ(b,d);a.gh=b;a.hD=Lz(d);a.jz=Lz(d);}
function ARO(a,b,c){return b==a.fY&&c==a.fV?1:0;}
function UW(a,b,c){return a.fv.data[c<<4|b]&255;}
function A5S(a){return;}
function ALO(a,b,c){var d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=UW(a,b,c);e=(a.fY*16|0)+b|0;f=(a.fV*16|0)+c|0;b=e-1|0;$p=1;case 1:AJQ(a,b,f,d);if(C()){break _;}b=e+1|0;$p=2;case 2:AJQ(a,b,f,d);if(C()){break _;}b=f-1|0;$p=3;case 3:AJQ(a,e,b,d);if(C()){break _;}b=f+1|0;$p=4;case 4:AJQ(a,e,b,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function Sp(a){var b,c,d,e,f;b=127;c=0;while(c<16){d=0;while(d<16){e=127;f=c<<11|d<<7;while(e>0){L();if(BgM.data[a.g4.data[(f+e|0)-1|0]])break;e=e+(-1)|0;}a.fv.data[d<<4|c]=e<<24>>24;if(e<b)b=e;d=d+1|0;}c=c+1|0;}a.q4=b;a.e$=1;}
function AJQ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.cE;$p=1;case 1:$z=ALP(e,b,c);if(C()){break _;}f=$z;g=S(f,d);if(g>0)DU(a.cE,BkI,b,d,c,b,f,c);else if(g<0)DU(a.cE,BkI,b,f,c,b,d,c);a.e$=1;return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function Ft(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.fv.data;f=d<<4|b;g=e[f]&255;if(c<=g)c=g;while(c>0){L();if(BgM.data[FS(a,b,c-1|0,d)])break;c=c+(-1)|0;}h=S(c,g);if(h){APQ(a.cE,b,d,c,g);a.fv.data[f]=c<<24>>24;if(c<a.q4)a.q4=c;else{f=127;i=0;while(i<16){j=0;while(j<16){e=a.fv.data;k=j<<4|i;if((e[k]&255)<f)f=a.fv.data[k]&255;j=j+1|0;}i=i+1|0;}a.q4=f;}a:{f=(a.fY*16|0)+b|0;i=(a.fV*16|0)+d|0;if(h<0){j=c;while(true){if(j>=g)break a;Ek(a.hD,b,j,d,15);j=j+1|0;}}DU(a.cE,BkI,f,g,i,f,c,i);while(true){if(g>=c)break a;Ek(a.hD,
b,g,d,0);g=g+1|0;}}j=15;k=c;b:{while(k>0){if(j<=0)break b;k=k+(-1)|0;L();l=BgM.data[FS(a,b,k,d)];if(!l)l=1;j=j-l|0;if(j<0)j=0;Ek(a.hD,b,k,d,j);}}while(k>0){L();if(BgM.data[FS(a,b,k-1|0,d)])break;k=k+(-1)|0;}if(k!=c)DU(a.cE,BkI,f-1|0,k,i-1|0,f+1|0,c,i+1|0);a.e$=1;}}
function FS(a,b,c,d){return a.g4.data[b<<11|d<<7|c];}
function ADL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e<<24>>24;h=a.fv.data[d<<4|b]&255;i=a.g4.data;j=b<<11|d<<7|c;k=i[j]&255;if(k==e&&G7(a.gh,b,c,d)==f)return 0;l=(a.fY*16|0)+b|0;m=(a.fV*16|0)+d|0;a.g4.data[j]=g;if(k){L();n=Be0.data[k];o=a.cE;$p=1;continue _;}Ek(a.gh,b,c,d,f);L();if(!BgM.data[g]){if(c==(h
-1|0))Ft(a,b,c,d);}else if(c>=h)Ft(a,b,c+1|0,d);DU(a.cE,BkI,l,c,m,l,c,m);DU(a.cE,BkJ,l,c,m,l,c,m);$p=2;continue _;case 1:n.lB(o,l,c,m);if(C()){break _;}Ek(a.gh,b,c,d,f);L();if(!BgM.data[g]){if(c==(h-1|0))Ft(a,b,c,d);}else if(c>=h)Ft(a,b,c+1|0,d);DU(a.cE,BkI,l,c,m,l,c,m);DU(a.cE,BkJ,l,c,m,l,c,m);$p=2;case 2:ALO(a,b,d);if(C()){break _;}Ek(a.gh,b,c,d,f);if(!e){a.e$=1;return 1;}n=Be0.data[e];o=a.cE;$p=3;case 3:n.fE(o,l,c,m);if(C()){break _;}a.e$=1;return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function ADI(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=e<<24>>24;g=a.fv.data[d<<4|b]&255;h=a.g4.data;i=b<<11|d<<7|c;j=h[i]&255;if(j==e)return 0;k=(a.fY*16|0)+b|0;l=(a.fV*16|0)+d|0;a.g4.data[i]=f;if(j){L();m=Be0.data[j];n=a.cE;$p=1;continue _;}Ek(a.gh,b,c,d,0);L();if(!BgM.data[f]){if(c==(g-1|0))Ft(a,b,c,d);}else if(c>=
g)Ft(a,b,c+1|0,d);DU(a.cE,BkI,k,c,l,k,c,l);DU(a.cE,BkJ,k,c,l,k,c,l);$p=2;continue _;case 1:m.lB(n,k,c,l);if(C()){break _;}Ek(a.gh,b,c,d,0);L();if(!BgM.data[f]){if(c==(g-1|0))Ft(a,b,c,d);}else if(c>=g)Ft(a,b,c+1|0,d);DU(a.cE,BkI,k,c,l,k,c,l);DU(a.cE,BkJ,k,c,l,k,c,l);$p=2;case 2:ALO(a,b,d);if(C()){break _;}if(!e){a.e$=1;return 1;}m=Be0.data[e];n=a.cE;$p=3;case 3:m.fE(n,k,c,l);if(C()){break _;}a.e$=1;return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function R2(a,b,c,d){return G7(a.gh,b,c,d);}
function AAC(a,b,c,d,e){a.e$=1;Ek(a.gh,b,c,d,e);}
function ACt(a,b,c,d,e){return b===BkI?G7(a.hD,c,d,e):b!==BkJ?0:G7(a.jz,c,d,e);}
function AQU(a,b,c,d,e,f){a.e$=1;if(b===BkI)Ek(a.hD,c,d,e,f);else{if(b!==BkJ)return;Ek(a.jz,c,d,e,f);}}
function V0(a,b,c,d,e){var f,g;f=G7(a.hD,b,c,d);if(f>0)BkB=1;e=f-e|0;g=G7(a.jz,b,c,d);if(g<=e)g=e;return g;}
function V3(a,b){var c,d,e,f,g;a.sc=1;c=K(b.d/16.0);d=K(b.e/16.0);if(!(c==a.fY&&d==a.fV)){e=Dz();f=new V;X(f);Cg(e,W(FP(I(f,B(591)),b)));}g=K(b.j/16.0);if(g<0)g=0;if(g>=a.dN.data.length)g=a.dN.data.length-1|0;T(a.dN.data[g],b);}
function AM8(a,b){R_(a,b,K(b.j/16.0));}
function R_(a,b,c){var d,e;if(c<0)c=0;if(c>=a.dN.data.length)c=a.dN.data.length-1|0;if(!Rb(a.dN.data[c],b)){d=Dz();e=new V;X(e);Cg(d,W(FP(I(e,B(592)),b)));}Ib(a.dN.data[c],b);}
function Pu(a,b,c,d){return c<(a.fv.data[d<<4|b]&255)?0:1;}
function ANw(a,b,c,d){var e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;f=CQ(a.iW,CZ(e));if(f!==null)return f;g=FS(a,b,c,d);L();h=Be0.data[g];f=a.cE;b=(a.fY*16|0)+b|0;d=(a.fV*16|0)+d|0;$p=1;case 1:h.fE(f,b,c,d);if(C()){break _;}return CQ(a.iW,CZ(e));default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AJs(a,b,c,d,e){var f;a:{f=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;e.ch=a.cE;e.dK=(a.fY*16|0)+b|0;e.dI=c;e.dR=(a.fV*16|0)+d|0;if(FS(a,b,c,d)){L();if(Be0.data[FS(a,b,c,d)] instanceof Eg){if(a.tw){if(CQ(a.iW,CZ(f))!==null)Ib(a.cE.fD,CQ(a.iW,CZ(f)));T(a.cE.fD,e);}BQ(a.iW,CZ(f),e);break a;}}Cg(Dz(),B(593));}}
function AD6(a,b,c,d){var e;e=(b+(c*1024|0)|0)+((d*1024|0)*1024|0)|0;if(a.tw)Ib(a.cE.fD,Rc(a.iW,CZ(e)));}
function MJ(a){var b;a.tw=1;DF(a.cE.fD,Iy(a.iW));b=0;while(b<a.dN.data.length){AQl(a.cE,a.dN.data[b]);b=b+1|0;}}
function AOU(a){var b;a.tw=0;Ge(a.cE.fD,Iy(a.iW));b=0;while(b<a.dN.data.length){AQ_(a.cE,a.dN.data[b]);b=b+1|0;}}
function SV(a){a.e$=1;}
function AJ8(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dN.data.length)f=a.dN.data.length-1|0;while(e<=f){g=a.dN.data[e];h=0;while(h<g.s){i=Z(g,h);if(i!==b&&L$(i.L,c))T(d,i);h=h+1|0;}e=e+1|0;}}
function AMs(a,b,c,d){var e,f,g,h,i;e=K((c.M-2.0)/16.0);f=K((c.U+2.0)/16.0);if(e<0)e=0;if(f>=a.dN.data.length)f=a.dN.data.length-1|0;while(e<=f){g=a.dN.data[e];h=0;while(h<g.s){i=Z(g,h);if(Qc(b,Dl(i))&&L$(i.L,c))T(d,i);h=h+1|0;}e=e+1|0;}}
function Kv(a,b){return a.qe?0:a.sc&&Long_ne(a.cE.dU,a.nr)?1:a.e$;}
function Iz(){var a=this;D.call(a);a.jn=0;a.iv=0;a.ky=null;a.x4=null;}
function BlV(a,b,c,d,e,f,g){var h=new Iz();AEB(h,a,b,c,d,e,f,g);return h;}
function AEB(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.x4=b;a.jn=c>>4;a.iv=e>>4;i=f>>4;j=h>>4;a.ky=$rt_createMultiArray($rt_arraycls($rt_arraycls(Jb)),[(j-a.iv|0)+1|0,(i-a.jn|0)+1|0]);k=a.jn;while(k<=i){l=a.iv;if(l<=j){m=a.ky.data[k-a.jn|0].data;c=l-a.iv|0;$p=1;continue _;}k=k+1|0;}return;case 1:$z=Z1(b,k,l);if(C()){break _;}n
=$z;m[c]=n;l=l+1|0;while(true){if(l<=j){m=a.ky.data[k-a.jn|0].data;c=l-a.iv|0;continue _;}k=k+1|0;if(k>i)break;l=a.iv;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function HD(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jn|0;f=(d>>4)-a.iv|0;return FS(a.ky.data[e].data[f],b&15,c,d&15);}
function AFZ(a,b,c,d){var e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=(b>>4)-a.jn|0;f=(d>>4)-a.iv|0;g=a.ky.data[e].data[f];e=b&15;b=d&15;$p=1;case 1:$z=ANw(g,e,c,b);if(C()){break _;}g=$z;return g;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AAV(a,b,c,d){return BkE.data[AAb(a,b,c,d)];}
function AAb(a,b,c,d){return GT(a,b,c,d,1);}
function GT(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;if(b>=(-32000000)&&d>=(-32000000)&&b<32000000&&d<=32000000){a:{if(e){f=HD(a,b,c,d);L();if(f==Be5.b)break a;if(f==Bhc.b)break a;}if(c<0)return 0;if(c>=128){g=15-a.x4.ge|0;if(g<0)g=0;return g;}h=(b>>4)-a.jn|0;i=(d>>4)-a.iv|0;return V0(a.ky.data[h].data[i],b&15,c,d&15,a.x4.ge);}j=GT(a,b,c+1|0,d,0);k=GT(a,b+1|0,c,d,0);l=GT(a,b-1|0,c,d,0);m=GT(a,b,c,d+1|0,0);n=GT(a,b,c,d-1|0,0);if(k<=j)k=j;if(l<=k)l=k;if(m<=l)m=l;if(n<=m)n=m;return n;}return 15;}
function ADa(a,b,c,d){var e,f;if(c<0)return 0;if(c>=128)return 0;e=(b>>4)-a.jn|0;f=(d>>4)-a.iv|0;return R2(a.ky.data[e].data[f],b&15,c,d&15);}
function Oa(a,b,c,d){var e,f;e=HD(a,b,c,d);if(!e)f=Bgk;else{L();f=Be0.data[e].b_;}return f;}
function ACc(a,b,c,d){var e;L();e=Be0.data[HD(a,b,c,d)];return e!==null?e.d5():0;}
function Gk(){BD.call(this);}
function BlW(){var a=new Gk();A$n(a);return a;}
function A$n(a){P(a);}
function U5(){Gk.call(this);}
function BlX(){var a=new U5();A6V(a);return a;}
function A6V(a){P(a);}
function Vo(){D.call(this);}
var BlY=null;function BlZ(){var a=new Vo();APc(a);return a;}
function APc(a){return;}
function AIP(){var b,c;b=$rt_createIntArray(12);c=b.data;c[0]=1;c[1]=4;c[2]=2;c[3]=1024;c[4]=8;c[5]=16;c[6]=128;c[7]=64;c[8]=32;c[9]=256;c[10]=2048;c[11]=512;BlY=b;}
function PT(){Gn.call(this);this.wh=null;}
function A0A(a,b){return AEj(a.wh,b);}
function Nm(a){var b;b=new Vl;NN(b,a.wh);return b;}
function TE(){D.call(this);this.Jq=null;}
function AOB(a){Be();BdP.requestPointerLock();M1(0);}
function A_H(a){AOB(a);}
function AQO(){D.call(this);}
function Bl0(){var a=new AQO();A4l(a);return a;}
function A4l(a){return;}
function W5(){var a=this;D$.call(a);a.cu=null;a.gZ=0;a.pW=0;a.kX=0;}
function BaP(){var a=new W5();AVl(a);return a;}
function AVl(a){a.cu=J(Cd,3);a.gZ=0;a.pW=0;a.kX=0;}
function A9y(a,b){return a.cu.data[b];}
function A8s(a,b,c){var d;if(a.cu.data[b]===null)return null;if(a.cu.data[b].p<=c){d=a.cu.data[b];a.cu.data[b]=null;return d;}d=EG(a.cu.data[b],c);if(!a.cu.data[b].p)a.cu.data[b]=null;return d;}
function AVC(a,b,c){a.cu.data[b]=c;if(c!==null&&c.p>64)c.p=64;}
function AUe(a){return 64;}
function AOS(a,b){return Bj(a.kX,b)/200|0;}
function ADQ(a,b){if(!a.pW)a.pW=200;return Bj(a.gZ,b)/a.pW|0;}
function WV(a){return a.gZ<=0?0:1;}
function AGK(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.gZ<=0?0:1;c=0;if(a.gZ>0){a.gZ=a.gZ-1|0;c=1;}if(!a.gZ&&Op(a)){d=a.cu.data[1];if(d===null)e=0;else a:{f=DL(d).cW;if(f<256){L();if(Be0.data[f].b_===Bhl){e=300;break a;}}BB();e=f==Bie.cW?100:f!=BhL.cW?0:1600;}a.gZ=e;a.pW=e;if(a.gZ>0){c=1;if(a.cu.data[1]!==null){d=a.cu.data[1];d.p=d.p-1|0;if(!a.cu.data[1].p)a.cu.data[1]
=null;}}}if(WV(a)&&Op(a)){a.kX=a.kX+1|0;if(a.kX==200){a.kX=0;ADE(a);c=1;}}else a.kX=0;if(b==(a.gZ<=0?0:1)){if(!c)return;d=a.ch;e=a.dK;b=a.dI;c=a.dR;$p=1;continue _;}c=1;b=a.gZ<=0?0:1;g=a.ch;f=a.dK;h=a.dI;i=a.dR;$p=2;continue _;case 1:AGy(d,e,b,c);if(C()){break _;}return;case 2:$z=AEQ(g,f,h,i);if(C()){break _;}e=$z;$p=3;case 3:$z=ANG(g,f,h,i);if(C()){break _;}j=$z;if(!b){L();b=Bhd.b;$p=4;continue _;}L();b=Bhe.b;$p=5;continue _;case 4:APE(g,f,h,i,b);if(C()){break _;}$p=6;continue _;case 5:APE(g,f,h,i,b);if(C())
{break _;}$p=6;case 6:AKD(g,f,h,i,e);if(C()){break _;}$p=7;case 7:AFY(g,f,h,i,j);if(C()){break _;}if(!c)return;d=a.ch;e=a.dK;b=a.dI;c=a.dR;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Op(a){var b,c;if(a.cu.data[0]===null)return 0;b=U8(a,DL(a.cu.data[0]).cW);if(b<0)b=0;else if(a.cu.data[2]===null)b=1;else if(a.cu.data[2].bA!=b)b=0;else if(a.cu.data[2].p<64&&a.cu.data[2].p<ED(a.cu.data[2]))b=1;else{c=a.cu.data[2].p;BB();b=c>=Bhp.data[b].e1?0:1;}return b;}
function ADE(a){var b,c;if(Op(a)){b=U8(a,DL(a.cu.data[0]).cW);if(a.cu.data[2]===null)a.cu.data[2]=KH(b,1);else if(a.cu.data[2].bA==b){c=a.cu.data[2];c.p=c.p+1|0;}c=a.cu.data[0];c.p=c.p-1|0;if(a.cu.data[0].p<=0)a.cu.data[0]=null;}}
function U8(a,b){L();if(b==Bfq.b){BB();b=Bh1.cW;}else if(b==Bfr.b){BB();b=Bh2.cW;}else if(b==Bg$.b){BB();b=BhM.cW;}else if(b==Bfl.b)b=Bfe.b;else{BB();b=b==Bgr.cW?BiL.cW:b!=Be$.b?(-1):Be6.b;}return b;}
function Z_(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.ch;c=a.dK;d=a.dI;e=a.dR;$p=1;case 1:AGy(b,c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function Tq(){D$.call(this);this.hX=null;}
function Bbt(){var a=new Tq();A2h(a);return a;}
function A2h(a){a.hX=J(Cd,36);}
function AVV(a){return 27;}
function Ri(a,b){return a.hX.data[b];}
function A13(a,b,c){var d;if(a.hX.data[b]===null)return null;if(a.hX.data[b].p<=c){d=a.hX.data[b];a.hX.data[b]=null;return d;}d=EG(a.hX.data[b],c);if(!a.hX.data[b].p)a.hX.data[b]=null;return d;}
function AHF(a,b,c){a.hX.data[b]=c;if(c!==null&&c.p>64)c.p=64;}
function A8L(a){return B(263);}
function A7u(a){return 64;}
function CR(){D.call(this);this.gq=null;}
function Bl1(){var a=new CR();Cw(a);return a;}
function Cw(a){a.gq=null;}
function VT(a){return a.gq!==null?a.gq:B(3);}
function AXN(a,b){a.gq=b;return a;}
function M0(b){var c,d;c=N7(b);if(!c){b=new N8;Cw(b);return b;}d=AE_(c);d.gq=GV(b);d.gF(b);return d;}
function R8(b,c){KR(c,b.fe());if(b.fe()){Xy(c,VT(b));b.gN(c);}}
function AE_(b){var c;switch(b){case 0:c=new N8;Cw(c);return c;case 1:c=new MA;Cw(c);return c;case 2:c=new M2;Cw(c);return c;case 3:c=new Ln;Cw(c);return c;case 4:c=new Oh;Cw(c);return c;case 5:c=new Pp;Cw(c);return c;case 6:c=new Mt;Cw(c);return c;case 7:c=new MM;Cw(c);return c;case 8:c=new OM;Cw(c);return c;case 9:return Mb();case 10:return Ha();default:}return null;}
function APW(){CR.call(this);this.cL=null;}
function Ha(){var a=new APW();A8U(a);return a;}
function A8U(a){Cw(a);a.cL=C8();}
function A7l(a,b){var c;c=Nm(Iy(a.cL));while(EL(c)){R8(Mi(c),b);}KR(b,0);}
function A9s(a,b){var c;Vj(a.cL);while(true){c=M0(b);if(!c.fe())break;BQ(a.cL,VT(c),c);}}
function A7j(a){return 10;}
function HK(a,b,c){var d;d=a.cL;c.gq=b;BQ(d,b,c);}
function JT(a,b,c){var d,e;d=a.cL;e=new MA;Cw(e);e.tu=c;e.gq=b;BQ(d,b,e);}
function Fu(a,b,c){var d,e;d=a.cL;e=new M2;Cw(e);e.to=c;e.gq=b;BQ(d,b,e);}
function Gz(a,b,c){var d,e;d=a.cL;e=new Ln;Cw(e);e.r9=c;e.gq=b;BQ(d,b,e);}
function If(a,b,c){var d,e;d=a.cL;e=new Oh;Cw(e);e.s3=c;e.gq=b;BQ(d,b,e);}
function ASf(a,b,c){var d,e;d=a.cL;e=A60(c);e.gq=b;BQ(d,b,e);}
function IW(a,b,c){var d,e;d=a.cL;e=new MM;Cw(e);e.mq=c;e.gq=b;BQ(d,b,e);}
function AN0(a,b,c){var d;d=a.cL;c.gq=b;BQ(d,b,c);}
function S$(a,b,c){JT(a,b,(!c?0:1)<<24>>24);}
function Y7(a,b){return D0(a.cL,b);}
function LG(a,b){return !D0(a.cL,b)?0:CQ(a.cL,b).tu;}
function FM(a,b){return !D0(a.cL,b)?0:CQ(a.cL,b).to;}
function FX(a,b){return !D0(a.cL,b)?0:CQ(a.cL,b).r9;}
function Mg(a,b){return !D0(a.cL,b)?Long_ZERO:CQ(a.cL,b).s3;}
function AMO(a,b){return !D0(a.cL,b)?0.0:CQ(a.cL,b).nn;}
function IO(a,b){return !D0(a.cL,b)?$rt_createByteArray(0):CQ(a.cL,b).mq;}
function MC(a,b){return !D0(a.cL,b)?Ha():CQ(a.cL,b);}
function Kp(a,b){return !D0(a.cL,b)?Mb():CQ(a.cL,b);}
function UD(a,b){return !LG(a,b)?0:1;}
function P_(){B6.call(this);}
function Bl2(){var a=new P_();A_d(a);return a;}
function A_d(a){P(a);}
function ST(){B6.call(this);}
function Bl3(){var a=new ST();AYV(a);return a;}
function AYV(a){P(a);}
function R7(){G0.call(this);this.Bz=0;}
function AVZ(a){var b;b=new V;X(b);return W(Bf(I(b,B(594)),a.Bz));}
function P7(){G0.call(this);this.ER=0;}
function AVt(a){var b;b=new V;X(b);return W(Bf(I(b,B(595)),a.ER));}
function Gr(){var a=this;D.call(a);a.l$=0;a.rp=0;a.lF=null;a.gA=null;a.ss=null;a.it=null;}
function Bl4(a){var b=new Gr();NN(b,a);return b;}
function NN(a,b){a.it=b;a.rp=b.g8;a.lF=null;}
function EL(a){if(a.lF!==null)return 1;while(a.l$<a.it.cO.data.length){if(a.it.cO.data[a.l$]!==null)return 1;a.l$=a.l$+1|0;}return 0;}
function UH(a){var b;if(a.rp==a.it.g8)return;b=new KY;P(b);M(b);}
function N1(a){var b,c,d;UH(a);if(!EL(a)){b=new J9;P(b);M(b);}if(a.lF===null){c=a.it.cO.data;d=a.l$;a.l$=d+1|0;a.gA=c[d];a.lF=a.gA.eF;a.ss=null;}else{if(a.gA!==null)a.ss=a.gA;a.gA=a.lF;a.lF=a.lF.eF;}}
function ADX(a){var b,c;UH(a);if(a.gA===null){b=new D3;P(b);M(b);}if(a.ss!==null)a.ss.eF=a.gA.eF;else{c=a.gA.pX&(a.it.cO.data.length-1|0);a.it.cO.data[c]=a.it.cO.data[c].eF;}a.gA=null;a.rp=a.rp+1|0;b=a.it;b.g8=b.g8+1|0;b=a.it;b.f8=b.f8-1|0;}
function Vl(){Gr.call(this);}
function Mi(a){N1(a);return a.gA.d9;}
function WD(){var a=this;D.call(a);a.Ar=null;a.EB=null;a.we=0;a.qL=0;}
function NT(a){return Fm(a.Ar);}
function AJw(a,b){return Ct(a.EB)<b?0:1;}
function A$K(a,b){a.we=b;}
function A9q(a,b){a.qL=b;}
function AEG(){var a=this;CT.call(a);a.pa=null;a.yM=null;a.lR=null;}
function AIU(a,b){var c=new AEG();A1K(c,a,b);return c;}
function A1K(a,b,c){DR(a);a.yM=B(596);a.pa=b;a.lR=c;}
function AR$(a){var b,c,d;b=0;while(b<a.lR.zU){c=a.bG;d=Ss(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bC/6|0)+(24*(b>>1)|0)|0,Q4(a.lR,b));T(c,d);if(a.J.o.du&&!(b!=5&&b!=6&&b!=9))d.gC=0;b=b+1|0;}T(a.bG,Dj(100,(a.bm/2|0)-100|0,((a.bC/6|0)+120|0)+22|0,B(597)));T(a.bG,Dj(200,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(598)));}
function AD3(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC){if(b.cl<100){Ea(a.lR,b.cl,1);b.kq=Q4(a.lR,b.cl);if(b.cl==10){c=a.J;d=AIU(a.pa,a.J.o);$p=2;continue _;}}if(b.cl==100){c=a.J;d=new NU;e=a.lR;DR(d);d.ui=B(599);d.jx=(-1);d.uF=a;d.iP=e;$p=1;continue _;}if(b.cl==200){b=a.J;c=a.pa;$p=3;continue _;}}return;case 1:AD1(c,d);if(C()){break _;}if(b.cl!=200)return;b=a.J;c=a.pa;$p=3;continue _;case 2:AD1(c,d);if(C())
{break _;}if(b.cl!=100){if(b.cl!=200)return;b=a.J;c=a.pa;$p=3;continue _;}c=a.J;d=new NU;e=a.lR;DR(d);d.ui=B(599);d.jx=(-1);d.uF=a;d.iP=e;$p=1;continue _;case 3:AD1(b,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AGg(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABo(a);if(C()){break _;}DG(a,a.bZ,a.yM,a.bm/2|0,20,16777215);$p=2;case 2:AFJ(a,b,c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function OF(){var a=this;CT.call(a);a.rC=null;a.yA=null;a.xH=0;}
function A$5(a){var b=new OF();AEm(b,a);return b;}
function AEm(a,b){DR(a);a.yA=B(600);a.xH=0;a.rC=b;}
function APC(a){var b,c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=5){a.s$();return;}c=new V;X(c);c=I(c,B(601));d=b+1|0;c=W(Bf(c,d));$p=1;case 1:$z=ASm(c);if(C()){break _;}c=$z;if(c!==null){c=new V;X(c);e=W(Bf(I(c,B(602)),d));c=new V;X(c);f=W(I(Bf(I(c,B(601)),d),B(355)));Be();c=BeR;$p=2;continue _;}T(a.bG,Dj(b,(a.bm/2|0)-100|0,(a.bC/6|0)+(24*b|0)|0,B(603)));b=d;if(b>=5){a.s$();return;}c=new V;X(c);c
=I(c,B(601));d=b+1|0;c=W(Bf(c,d));continue _;case 2:$z=A_U(c,f);if(C()){break _;}c=$z;g=c===null?(-1):c.byteLength;c=new V;X(c);f=W(I(AKx(I(I(c,e),B(604)),g/100.0),B(605)));T(a.bG,Dj(b,(a.bm/2|0)-100|0,(a.bC/6|0)+(24*b|0)|0,f));b=d;if(b>=5){a.s$();return;}c=new V;X(c);c=I(c,B(601));d=b+1|0;c=W(Bf(c,d));$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function ANA(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=new V;X(c);c=W(Bf(I(c,B(601)),b));$p=1;case 1:$z=ASm(c);if(C()){break _;}c=$z;if(c===null)c=null;else{c=new V;X(c);c=W(Bf(I(c,B(601)),b));}return c;default:Fa();}}C4().s(a,b,c,$p);}
function AXK(a){T(a.bG,Dj(5,(a.bm/2|0)-100|0,((a.bC/6|0)+120|0)+12|0,B(606)));T(a.bG,Dj(6,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(607)));}
function ASH(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC){if(b.cl<5){c=b.cl+1|0;$p=1;continue _;}if(b.cl==5){b=a.J;d=new U$;AEm(d,a);d.yA=B(608);$p=2;continue _;}if(b.cl==6){b=a.J;d=a.rC;$p=3;continue _;}}return;case 1:a.IY(c);if(C()){break _;}return;case 2:AD1(b,d);if(C()){break _;}return;case 3:AD1(b,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function AKV(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J;d=null;$p=1;case 1:AD1(c,d);if(C()){break _;}if(a.xH)return;a.xH=1;d=a.J;c=new V;X(c);c=W(Bf(I(c,B(601)),b));$p=2;case 2:AH1(d,c);if(C()){break _;}d=a.J;c=null;$p=3;case 3:AD1(d,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function AEJ(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABo(a);if(C()){break _;}DG(a,a.bZ,a.yA,a.bm/2|0,20,16777215);$p=2;case 2:AFJ(a,b,c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function L2(){Gk.call(this);}
function Bl5(){var a=new L2();A7h(a);return a;}
function A7h(a){P(a);}
function Tk(){Gk.call(this);}
function Bl6(){var a=new Tk();A$O(a);return a;}
function A$O(a){P(a);}
function ALD(){D.call(this);}
function Bl7(){var a=new ALD();A7x(a);return a;}
function A7x(a){return;}
function AAj(){D.call(this);}
function Bl8(){var a=new AAj();A8F(a);return a;}
function A8F(a){return;}
function AMr(){var a=this;D.call(a);a.n=null;a.fP=0;a.ub=null;a.zg=0;a.is=0;a.kn=0;a.dp=0;a.u4=null;}
function BbH(){var a=new AMr();ATf(a);return a;}
function ALQ(a,b){var c,d,e,f,g,h,i,j;c=new VJ;c.qW=(-1);c.sl=(-1);c.FH=a;c.EI=a.u4;c.pL=b;c.qW=0;c.sl=Bi(c.pL);d=new WE;e=c.qW;f=c.sl;g=a.is;h=AQ3(a);i=AEa(a);d.k3=(-1);j=g+1|0;d.zE=j;d.gG=$rt_createIntArray(j*2|0);d.oT=$rt_createIntArray(i);M5(d.oT,(-1));if(h>0)d.xx=$rt_createIntArray(h);M5(d.gG,(-1));Xr(d,b,e,f);c.dC=d;return c;}
function AIY(a,b,c){var d,e,f,g,h,i;d=Ci();e=ALQ(a,b);f=0;g=0;if(!Bi(b)){h=J(B4,1);h.data[0]=B(3);return h;}while(ABg(e)){i=f+1|0;if(i>=c&&c>0)break;T(d,Ex(b,g,AHe(e)));g=AK5(e);f=i;}a:{T(d,Ex(b,g,Bi(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(Bi(Z(d,f)))break a;En(d,f);}}if(f<0)f=0;return UP(d,J(B4,f));}
function AIX(a,b){return AIY(a,b,0);}
function Ne(a){return a.n.eQ;}
function S7(a,b,c,d){var e,f,g,h,i;e=Ci();f=a.fP;g=0;if(c!=a.fP)a.fP=c;a:{switch(b){case -1073741784:h=new QM;c=a.dp+1|0;a.dp=c;Hd(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new P2;c=a.dp+1|0;a.dp=c;Hd(h,c);break a;case -33554392:h=new Ra;c=a.dp+1|0;a.dp=c;Hd(h,c);break a;default:a.is=a.is+1|0;if(d!==null)h=BcL(a.is);else{h=Bcd();g=1;}if(a.is<=(-1))break a;if(a.is>=10)break a;a.ub.data[a.is]=h;break a;}h=BbG();}while(true){if(Ga(a.n)&&a.n.H==(-536870788)){d=A$P(C1(a,
2),C1(a,64));while(!Eq(a.n)&&Ga(a.n)&&!(a.n.H&&a.n.H!=(-536870788)&&a.n.H!=(-536870871))){Dp(d,BF(a.n));if(a.n.cH!=(-536870788))continue;BF(a.n);}i=LT(a,d);i.cb(h);}else if(a.n.cH==(-536870788)){i=IP(h);BF(a.n);}else{i=Ut(a,h);if(a.n.cH==(-536870788))BF(a.n);}if(i!==null)T(e,i);if(Eq(a.n))break;if(a.n.cH==(-536870871))break;}if(a.n.q0==(-536870788))T(e,IP(h));if(a.fP!=f&&!g){a.fP=f;AJE(a.n,a.fP);}switch(b){case -1073741784:break;case -536870872:d=new Tn;GS(d,e,h);return d;case -268435416:d=new WU;GS(d,e,h);return d;case -134217688:d
=new Vm;GS(d,e,h);return d;case -67108824:d=new Ro;GS(d,e,h);return d;case -33554392:d=new EW;GS(d,e,h);return d;default:switch(e.s){case 0:break;case 1:return BcD(Z(e,0),h);default:return BaS(e,h);}return IP(h);}d=new K7;GS(d,e,h);return d;}
function AP7(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!Eq(a.n)&&Ga(a.n)){e=b.data;c=BF(a.n);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.n.cH;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;BF(a.n);f=a.n.cH;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;BF(a.n);return A$E(e,3);}return A$E(e,2);}if(!C1(a,2))return AAn(b[0]);if(C1(a,64))return A9j(b[0]);return A4J(b[0]);}e=b.data;c=1;while(c<4&&!Eq(a.n)&&Ga(a.n)){f=c+1|0;e[c]=BF(a.n);c=f;}if(c==1){f=e[0];if(!(Bl9.A_(f)
==Bl$?0:1))return S0(a,e[0]);}if(!C1(a,2))return Bc$(b,c);if(C1(a,64)){g=new SU;Pm(g,b,c);return g;}g=new Wc;Pm(g,b,c);return g;}
function Ut(a,b){var c,d,e,f;if(Ga(a.n)&&!Lm(a.n)&&Nt(a.n.H)){if(C1(a,128)){c=AP7(a);if(!Eq(a.n)&&!(a.n.cH==(-536870871)&&!(b instanceof HY))&&a.n.cH!=(-536870788)&&!Ga(a.n))c=ME(a,b,c);}else if(!TZ(a.n)&&!WF(a.n)){d=new Ll;X(d);while(!Eq(a.n)&&Ga(a.n)&&!TZ(a.n)&&!WF(a.n)&&!(!(!Lm(a.n)&&!a.n.H)&&!(!Lm(a.n)&&Nt(a.n.H))&&a.n.H!=(-536870871)&&(a.n.H&(-2147418113))!=(-2147483608)&&a.n.H!=(-536870788)&&a.n.H!=(-536870876))){e=BF(a.n);if(!Mz(e))DQ(d,e&65535);else Hm(d,ID(e));}if(!C1(a,2))c=BaI(d);else if(C1(a,64))c
=Bc7(d);else{c=new O5;EO(c);c.pM=W(d);c.dl=OE(d);}}else c=ME(a,b,Xb(a,b));}else if(a.n.cH!=(-536870871))c=ME(a,b,Xb(a,b));else{if(b instanceof HY)M(CN(B(3),a.n.eQ,a.n.ig));c=IP(b);}if(!Eq(a.n)&&!(a.n.cH==(-536870871)&&!(b instanceof HY))&&a.n.cH!=(-536870788)){f=Ut(a,b);if(c instanceof D8&&!(c instanceof GD)&&!(c instanceof DX)&&!(c instanceof FY)){b=c;if(!f.d4(b.bQ)){c=new SC;F7(c,b.bQ,b.r,b.p6);c.bQ.cb(c);}}if((f.oH()&65535)!=43)c.cb(f);else c.cb(f.bQ);}else{if(c===null)return null;c.cb(b);}if((c.oH()&65535)
!=43)return c;return c.bQ;}
function ME(a,b,c){var d,e,f,g;d=a.n.cH;if(c!==null&&!(c instanceof CI)){switch(d){case -2147483606:BF(a.n);e=new Td;Ef(e,c,b,d);c.cb(Bl_);return e;case -2147483605:BF(a.n);e=new UK;Ef(e,c,b,(-2147483606));c.cb(Bl_);return e;case -2147483585:BF(a.n);e=new PV;Ef(e,c,b,(-536870849));c.cb(Bl_);return e;case -2147483525:e=new O2;f=G8(a.n);d=a.kn+1|0;a.kn=d;MT(e,f,c,b,(-536870849),d);c.cb(Bl_);return e;case -1073741782:case -1073741781:BF(a.n);f=new QC;Ef(f,c,b,d);c.cb(f);return f;case -1073741761:BF(a.n);f=new U3;Ef(f,
c,b,(-536870849));c.cb(b);return f;case -1073741701:f=new RZ;e=G8(a.n);g=a.kn+1|0;a.kn=g;MT(f,e,c,b,(-536870849),g);c.cb(f);return f;case -536870870:case -536870869:BF(a.n);if(c.oH()!=(-2147483602)){f=new DX;Ef(f,c,b,d);}else if(C1(a,32)){f=new QD;Ef(f,c,b,d);}else{f=new T5;e=Uy(a.fP);Ef(f,c,b,d);f.uw=e;}c.cb(f);return f;case -536870849:BF(a.n);f=new Hz;Ef(f,c,b,(-536870849));c.cb(b);return f;case -536870789:f=new G$;e=G8(a.n);g=a.kn+1|0;a.kn=g;MT(f,e,c,b,(-536870849),g);c.cb(f);return f;default:}return c;}e
=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:BF(a.n);f=new XD;F7(f,e,b,d);e.r=f;return f;case -2147483585:BF(a.n);c=new Sy;F7(c,e,b,(-2147483585));return c;case -2147483525:c=new Ur;QV(c,G8(a.n),e,b,(-2147483525));return c;case -1073741782:case -1073741781:BF(a.n);f=new U1;F7(f,e,b,d);e.r=f;return f;case -1073741761:BF(a.n);c=new We;F7(c,e,b,(-1073741761));return c;case -1073741701:c=new Qn;QV(c,G8(a.n),e,b,(-1073741701));return c;case -536870870:case -536870869:BF(a.n);f=Ba9(e,b,d);e.r
=f;return f;case -536870849:BF(a.n);c=new FY;F7(c,e,b,(-536870849));return c;case -536870789:return Bb7(G8(a.n),e,b,(-536870789));default:}return c;}
function Xb(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof HY;while(true){a:{e=KA(a.n);if((e&(-2147418113))==(-2147483608)){BF(a.n);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.fP=f;else{if(e!=(-1073741784))f=a.fP;c=S7(a,e,f,b);if(KA(a.n)!=(-536870871))M(CN(B(3),EE(a.n),HI(a.n)));BF(a.n);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.is<g)M(CN(B(3),
EE(a.n),HI(a.n)));BF(a.n);a.dp=a.dp+1|0;c=!C1(a,2)?BbO(g,a.dp):C1(a,64)?BaF(g,a.dp):Bc6(g,a.dp);a.ub.data[g].wV=1;a.zg=1;break a;case -2147483583:break;case -2147483582:BF(a.n);c=A$r(0);break a;case -2147483577:BF(a.n);c=Baw();break a;case -2147483558:BF(a.n);c=new SR;g=a.dp+1|0;a.dp=g;AQG(c,g);break a;case -2147483550:BF(a.n);c=A$r(1);break a;case -2147483526:BF(a.n);c=Bbq();break a;case -536870876:break c;case -536870866:BF(a.n);if(C1(a,32)){c=BbA();break a;}c=Bba(Uy(a.fP));break a;case -536870821:BF(a.n);h
=0;if(KA(a.n)==(-536870818)){h=1;BF(a.n);}c=ADN(a,h,b);if(KA(a.n)!=(-536870819))M(CN(B(3),EE(a.n),HI(a.n)));Uh(a.n,1);BF(a.n);break a;case -536870818:BF(a.n);a.dp=a.dp+1|0;if(!C1(a,8)){c=A1p();break a;}c=BcV(Uy(a.fP));break a;case 0:i=PZ(a.n);if(i!==null)c=LT(a,i);else{if(Eq(a.n)){c=IP(b);break a;}c=AAn(e&65535);}BF(a.n);break a;default:break b;}BF(a.n);c=A1p();break a;}BF(a.n);a.dp=a.dp+1|0;if(C1(a,8)){if(C1(a,1)){c=BaG(a.dp);break a;}c=A__(a.dp);break a;}if(C1(a,1)){c=BaX(a.dp);break a;}c=Bbi(a.dp);break a;}if
(e>=0&&!H8(a.n)){c=S0(a,e);BF(a.n);}else if(e==(-536870788))c=IP(b);else{if(e!=(-536870871))M(CN(!H8(a.n)?SO(e&65535):PZ(a.n).gk(),EE(a.n),HI(a.n)));if(d)M(CN(B(3),EE(a.n),HI(a.n)));c=IP(b);}}}if(e!=(-16777176))break;}return c;}
function ADN(a,b,c){var d;d=LT(a,Ip(a,b));d.cb(c);return d;}
function Ip(a,b){var c,d,e,f,g,h,i,j,$$je;c=A$P(C1(a,2),C1(a,64));FA(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Eq(a.n))break a;f=a.n.cH==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.n.cH){case -536870874:if(d>=0)Dp(c,d);d=BF(a.n);if(a.n.cH!=(-536870874)){d=38;break d;}if(a.n.H==(-536870821)){BF(a.n);e=1;d=(-1);break d;}BF(a.n);if(g){c=Ip(a,0);break d;}if(a.n.cH==(-536870819))break d;SH(c,Ip(a,0));break d;case -536870867:if(!g&&a.n.H!=(-536870819)&&a.n.H!=(-536870821)&&d>=0){BF(a.n);h=a.n.cH;if(H8(a.n))break c;if
(h<0&&a.n.H!=(-536870819)&&a.n.H!=(-536870821)&&d>=0)break c;e:{try{if(Nt(h))break e;h=h&65535;break e;}catch($$e){$$je=Q($$e);if($$je instanceof BD){break b;}else{throw $$e;}}}try{CG(c,d,h);}catch($$e){$$je=Q($$e);if($$je instanceof BD){break b;}else{throw $$e;}}BF(a.n);d=(-1);break d;}if(d>=0)Dp(c,d);d=45;BF(a.n);break d;case -536870821:if(d>=0){Dp(c,d);d=(-1);}BF(a.n);i=0;if(a.n.cH==(-536870818)){BF(a.n);i=1;}if(!e)AIh(c,Ip(a,i));else SH(c,Ip(a,i));e=0;BF(a.n);break d;case -536870819:if(d>=0)Dp(c,d);d=93;BF(a.n);break d;case -536870818:if
(d>=0)Dp(c,d);d=94;BF(a.n);break d;case 0:if(d>=0)Dp(c,d);j=a.n.k4;if(j===null)d=0;else{ASE(c,j);d=(-1);}BF(a.n);break d;default:}if(d>=0)Dp(c,d);d=BF(a.n);}g=0;}M(CN(B(3),Ne(a),a.n.ig));}M(CN(B(3),Ne(a),a.n.ig));}if(!f){if(d>=0)Dp(c,d);return c;}M(CN(B(3),Ne(a),a.n.ig-1|0));}
function S0(a,b){var c,d,e;c=Mz(b);if(C1(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A4J(b&65535);}if(C1(a,64)&&b>128){if(c){d=new Tj;EO(d);d.dl=2;d.Ac=GP(GN(b));return d;}if(PL(b))return AY2(b&65535);if(!Q1(b))return A9j(b&65535);return A6M(b&65535);}}if(!c){if(PL(b))return AY2(b&65535);if(!Q1(b))return AAn(b&65535);return A6M(b&65535);}d=new EZ;EO(d);d.dl=2;d.kB=b;e=ID(b).data;d.tD=e[0];d.sh=e[1];return d;}
function LT(a,b){var c,d,e;if(!AN4(b)){if(!b.ca){if(b.nT())return AWQ(b);return A1k(b);}if(!b.nT())return A61(b);c=new MU;Wm(c,b);return c;}c=Y3(b);d=new OP;Cz(d);d.zV=c;d.Hw=c.cj;if(!b.ca){if(b.nT())return AEu(AWQ(Ki(b)),d);return AEu(A1k(Ki(b)),d);}if(!b.nT())return AEu(A61(Ki(b)),d);c=new Qd;e=new MU;Wm(e,Ki(b));AHp(c,e,d);return c;}
function A3G(a){return a.is;}
function AQ3(a){return a.kn+1|0;}
function AEa(a){return a.dp+1|0;}
function Kl(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function C1(a,b){return (a.fP&b)!=b?0:1;}
function ATf(a){a.ub=J(DW,10);a.is=(-1);a.kn=(-1);a.dp=(-1);}
function AB7(){LE.call(this);}
function Ss(a,b,c,d){var e=new AB7();A6P(e,a,b,c,d);return e;}
function A6P(a,b,c,d,e){SQ(a,b,c,d,150,20,e);}
function NU(){var a=this;CT.call(a);a.uF=null;a.ui=null;a.iP=null;a.jx=0;}
function AJB(a){var b;b=0;while(b<a.iP.ng.data.length){T(a.bG,Ss(b,((a.bm/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bC/6|0)+(24*(b>>1)|0)|0,K$(a.iP,b)));b=b+1|0;}T(a.bG,Dj(200,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(598)));}
function AIk(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.iP.ng.data.length){Z(a.bG,c).kq=K$(a.iP,c);c=c+1|0;}if(b.cl!=200){a.jx=b.cl;d=new V;X(d);b.kq=W(I(I(I(d,B(580)),K$(a.iP,b.cl)),B(581)));return;}b=a.J;d=a.uF;$p=1;case 1:AD1(b,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function ALX(a,b,c){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.jx>=0){Ya(a.iP,a.jx,c);Z(a.bG,a.jx).kq=K$(a.iP,a.jx);a.jx=(-1);return;}$p=1;case 1:YV(a,b,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,$p);}
function AGC(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABo(a);if(C()){break _;}DG(a,a.bZ,a.ui,a.bm/2|0,20,16777215);$p=2;case 2:AFJ(a,b,c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function U$(){OF.call(this);}
function A11(a){T(a.bG,Dj(6,(a.bm/2|0)-100|0,(a.bC/6|0)+168|0,B(607)));}
function AMh(a,b){var c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=ANA(a,b);if(C()){break _;}c=$z;if(c===null)return;d=a.J;e=new Ve;f=new V;X(f);f=W(I(I(I(f,B(609)),c),B(610)));DR(e);e.B8=a;e.BX=B(611);e.BZ=f;e.yU=b;$p=2;case 2:AD1(d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ARb(a,b,c){var d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b){$p=2;continue _;}d=a.J;e=a.rC;$p=1;case 1:AD1(d,e);if(C()){break _;}return;case 2:$z=ANA(a,c);if(C()){break _;}d=$z;e=new V;X(e);f=W(I(I(e,d),B(23)));e=B(612);d=B(613);g=Bdi.ir;h=B(614);$p=3;case 3:ASb(g,e,h);if(C()){break _;}b=1;c=1;Be();i=Q2();h=BeR;$p=4;case 4:A5B(h,
f,b,c,i);if(C()){break _;}j=0;k=0;l=H3(i);while(true){if(!Fr(l)){e=H3(i);while(Fr(e)){d=Fn(e);if(d.j_){d=d.jC;$p=9;continue _;}}$p=6;continue _;}h=Fn(l);if(!h.j_)break;}h=h.jC;$p=5;case 5:AL_(h);if(C()){break _;}c=j+1|0;if((c-k|0)>=10){b=Nh(c/i.gQ*100.0)|0;m=new V;X(m);h=KQ(d,B(615),W(Bf(I(m,B(3)),c)));$p=7;continue _;}j=c;while(true){if(!Fr(l)){e=H3(i);while(Fr(e)){d=Fn(e);if(d.j_){d=d.jC;$p=9;continue _;}}$p=6;continue _;}h=Fn(l);if(!h.j_)break;}h=h.jC;continue _;case 6:AL_(f);if(C()){break _;}d=a.J;e=a.rC;$p
=1;continue _;case 7:ASb(g,e,h);if(C()){break _;}$p=8;case 8:XQ(g,b);if(C()){break _;}j=c;k=c;while(true){if(!Fr(l)){e=H3(i);while(Fr(e)){d=Fn(e);if(d.j_){d=d.jC;$p=9;continue _;}}$p=6;continue _;}h=Fn(l);if(!h.j_)break;}h=h.jC;$p=5;continue _;case 9:AL_(d);if(C()){break _;}while(Fr(e)){d=Fn(e);if(!d.j_)continue;else{d=d.jC;continue _;}}$p=6;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function NX(){var a=this;D.call(a);a.kE=0.0;a.ku=0.0;a.HU=0;a.up=0;}
function Bma(){var a=new NX();ADh(a);return a;}
function ADh(a){a.kE=0.0;a.ku=0.0;a.HU=0;a.up=0;}
function Yu(){var a=this;NX.call(a);a.j7=null;a.nq=null;}
function Wb(a){var b=new Yu();AZ6(b,a);return b;}
function AZ6(a,b){ADh(a);a.j7=$rt_createBooleanArray(10);a.nq=b;}
function APA(a,b,c){var d;d=(-1);if(b==a.nq.t3.bI)d=0;if(b==a.nq.xo.bI)d=1;if(b==a.nq.tV.bI)d=2;if(b==a.nq.uy.bI)d=3;if(b==a.nq.yJ.bI)d=4;if(d>=0)a.j7.data[d]=c;}
function AO7(a){var b;b=0;while(b<10){a.j7.data[b]=0;b=b+1|0;}}
function AOH(a,b){a.kE=0.0;a.ku=0.0;if(a.j7.data[0])a.ku=a.ku+1.0;if(a.j7.data[1])a.ku=a.ku-1.0;if(a.j7.data[2])a.kE=a.kE+1.0;if(a.j7.data[3])a.kE=a.kE-1.0;a.up=a.j7.data[4];}
function Q3(){D.call(this);this.na=null;}
var Bmb=null;function AY7(){AY7=Bs(Q3);A4g();}
function Bab(){var a=new Q3();ALI(a);return a;}
function Wy(){AY7();return Bmb;}
function ALI(a){var b,c,d,e;AY7();WR(a);a.na=Ci();AHr(BbJ(),a);XF(Bal(),a);AD4(BbF(),a);AJZ(Bbm(),a);Yk(BaC(),a);ASO(Bbc(),a);b=new Cd;L();Vg(b,Bfo,1);c=J(D,5);d=c.data;d[0]=B(616);d[1]=B(616);d[2]=B(616);d[3]=BI(35);BB();d[4]=Bgq;Ck(a,b,c);e=G2(Bfv,1);c=J(D,7);d=c.data;d[0]=B(617);d[1]=B(618);d[2]=B(617);d[3]=BI(88);d[4]=Bgp;d[5]=BI(35);d[6]=Bfl;Ck(a,e,c);e=G2(Be5,3);c=J(D,3);d=c.data;d[0]=B(616);d[1]=BI(35);d[2]=Be$;Ck(a,e,c);e=G2(Bgm,1);c=J(D,5);d=c.data;d[0]=B(619);d[1]=B(616);d[2]=B(619);d[3]=BI(35);d[4]
=Bie;Ck(a,e,c);e=EM(BiO,1);c=J(D,5);d=c.data;d[0]=B(620);d[1]=B(620);d[2]=B(620);d[3]=BI(35);d[4]=Bfa;Ck(a,e,c);e=EM(Bho,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(616);d[2]=B(621);d[3]=BI(35);d[4]=Bfa;d[5]=BI(88);d[6]=Bie;Ck(a,e,c);e=G2(Bfa,4);c=J(D,3);d=c.data;d[0]=B(622);d[1]=BI(35);d[2]=Bfb;Ck(a,e,c);e=EM(Bie,4);c=J(D,4);d=c.data;d[0]=B(622);d[1]=B(622);d[2]=BI(35);d[3]=Bfa;Ck(a,e,c);e=G2(Bfd,4);c=J(D,6);d=c.data;d[0]=B(72);d[1]=B(622);d[2]=BI(88);d[3]=BhL;d[4]=BI(35);d[5]=Bie;Ck(a,e,c);e=EM(Bif,4);c=J(D,4);d
=c.data;d[0]=B(619);d[1]=B(623);d[2]=BI(35);d[3]=Bfa;Ck(a,e,c);e=G2(Bhh,16);c=J(D,7);d=c.data;d[0]=B(624);d[1]=B(617);d[2]=B(624);d[3]=BI(88);d[4]=Bh1;d[5]=BI(35);d[6]=Bie;Ck(a,e,c);e=EM(BiS,1);c=J(D,4);d=c.data;d[0]=B(619);d[1]=B(616);d[2]=BI(35);d[3]=Bh1;Ck(a,e,c);e=EM(BiP,1);c=J(D,4);d=c.data;d[0]=B(619);d[1]=B(623);d[2]=BI(35);d[3]=Bh1;Ck(a,e,c);e=EM(BhY,1);c=J(D,6);d=c.data;d[0]=B(625);d[1]=B(626);d[2]=BI(65);d[3]=Bh1;d[4]=BI(66);d[5]=BhK;Ck(a,e,c);e=EM(Biq,1);c=J(D,3);d=c.data;d[0]=B(616);d[1]=BI(35);d[2]
=BhO;Ck(a,e,c);e=G2(Bg7,4);c=J(D,5);d=c.data;d[0]=B(627);d[1]=B(628);d[2]=B(616);d[3]=BI(35);d[4]=Bfa;Ck(a,e,c);e=G2(Bhi,4);c=J(D,5);d=c.data;d[0]=B(627);d[1]=B(628);d[2]=B(616);d[3]=BI(35);d[4]=Be$;Ck(a,e,c);e=EM(BiM,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(618);d[2]=B(616);d[3]=BI(35);d[4]=Bie;d[5]=BI(88);d[6]=Bfo;Ck(a,e,c);e=EM(BiN,1);c=J(D,7);d=c.data;d[0]=B(616);d[1]=B(618);d[2]=B(616);d[3]=BI(35);d[4]=Bft;d[5]=BI(88);d[6]=BhZ;Ck(a,e,c);RH(a.na,BaR(a));Cg(Dz(),BM(I(Bf(BX(),CY(a.na)),B(629))));}
function Ck(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=c.data;e=B(3);f=0;g=0;h=0;if(!Sw(d[f],$rt_arraycls(B4))){while(d[f] instanceof B4){i=f+1|0;j=d[f];h=h+1|0;g=Bi(j);k=new V;X(k);e=W(I(I(k,e),j));f=i;}i=f;}else{i=1;l=d[f];m=0;while(true){c=l.data;if(m>=c.length)break;k=c[m];h=h+1|0;g=Bi(k);j=new V;X(j);e=W(I(I(j,e),k));m=m+1|0;}}n=C8();while(i<d.length){o=d[i];p=0;f=i+1|0;if(d[f] instanceof Bc)p=d[f].cW;else if(d[f] instanceof O)p=d[f].b;BQ(n,o,CZ(p));i=i+2|0;}m=Bj(g,h);d=$rt_createIntArray(m);c=d.data;p=0;while
(p<m){i=Ba(e,p);if(!D0(n,BI(i)))c[p]=(-1);else c[p]=CQ(n,BI(i)).f5;p=p+1|0;}e=a.na;j=new UY;j.H6=b.bA;j.kR=g;j.q3=h;j.xR=d;j.xX=b;T(e,j);}
function RT(a,b){var c,d;c=0;while(c<a.na.s){d=Z(a.na,c);if(ALy(d,b))return AHq(d,b);c=c+1|0;}return null;}
function A4g(){Bmb=Bab();}
function Co(){var a=this;D.call(a);a.r=null;a.eR=0;a.CT=null;a.p6=0;}
var Bdp=0;function Bmc(){var a=new Co();Cz(a);return a;}
function Bmd(a){var b=new Co();NF(b,a);return b;}
function Cz(a){var b,c;b=new Gj;c=Bdp;Bdp=c+1|0;Lu(b,c);a.CT=MB(b);}
function NF(a,b){var c,d;c=new Gj;d=Bdp;Bdp=d+1|0;Lu(c,d);a.CT=MB(c);a.r=b;}
function Jl(a,b,c,d){var e;e=d.by;while(true){if(b>e)return (-1);if(a.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function Jw(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A4Y(a,b){a.p6=b;}
function A4z(a){return a.p6;}
function A0L(a){return a.r;}
function A1w(a,b){a.r=b;}
function A$F(a,b){return 1;}
function A_o(a){return null;}
function Lb(a){var b;a.eR=1;if(a.r!==null){if(!a.r.eR){b=a.r.lA();if(b!==null){a.r.eR=1;a.r=b;}a.r.iX();}else if(a.r instanceof IG&&a.r.f6.wV)a.r=a.r.r;}}
function AHD(){Bdp=1;}
function N8(){CR.call(this);}
function Bme(){var a=new N8();AVW(a);return a;}
function AVW(a){Cw(a);}
function A9p(a,b){return;}
function A0y(a,b){return;}
function AUR(a){return 0;}
function DW(){var a=this;Co.call(a);a.wV=0;a.ih=0;}
var Bl_=null;function BcL(a){var b=new DW();Hd(b,a);return b;}
function Hd(a,b){Cz(a);a.ih=b;}
function ATT(a,b,c,d){var e,f;e=JQ(d,a.ih);M4(d,a.ih,b);f=a.r.k(b,c,d);if(f<0)M4(d,a.ih,e);return f;}
function A7I(a){return a.ih;}
function AUd(a,b){return 0;}
function ALa(){var b;b=new T0;Cz(b);Bl_=b;}
function H0(){var a=this;D.call(a);a.bE=null;a.mb=0;a.h4=0;a.Bl=0;a.q0=0;a.cH=0;a.H=0;a.D0=0;a.k4=null;a.jF=null;a.bi=0;a.qj=0;a.ig=0;a.pK=0;a.eQ=null;}
var Bmf=null;var Bl9=null;var Bl$=0;function KA(a){return a.cH;}
function Uh(a,b){if(b>0&&b<3)a.h4=b;if(b==1){a.H=a.cH;a.jF=a.k4;a.bi=a.pK;a.pK=a.ig;GC(a);}}
function AJE(a,b){a.mb=b;a.H=a.cH;a.jF=a.k4;a.bi=a.ig+1|0;a.pK=a.ig;GC(a);}
function PZ(a){return a.k4;}
function H8(a){return a.k4===null?0:1;}
function Lm(a){return a.jF===null?0:1;}
function BF(a){GC(a);return a.q0;}
function G8(a){var b;b=a.k4;GC(a);return b;}
function A35(a){return a.H;}
function AV1(a){return a.q0;}
function GC(a){var b,c,d,e,f,$$je;a.q0=a.cH;a.cH=a.H;a.k4=a.jF;a.ig=a.pK;a.pK=a.bi;while(true){b=0;a.H=a.bi>=a.bE.data.length?0:Mj(a);a.jF=null;if(a.h4==4){if(a.H!=92)return;a.H=a.bi>=a.bE.data.length?0:a.bE.data[CF(a)];switch(a.H){case 69:break;default:a.H=92;a.bi=a.qj;return;}a.h4=a.Bl;a.H=a.bi>(a.bE.data.length-2|0)?0:Mj(a);}a:{if(a.H!=92){if(a.h4==1)switch(a.H){case 36:a.H=(-536870876);break a;case 40:if(a.bE.data[a.bi]!=63){a.H=(-2147483608);break a;}CF(a);c=a.bE.data[a.bi];d=0;while(true){b:{if(d){d=0;switch
(c){case 33:break;case 61:a.H=(-134217688);CF(a);break b;default:M(CN(B(3),EE(a),a.bi));}a.H=(-67108824);CF(a);}else{switch(c){case 33:break;case 60:CF(a);c=a.bE.data[a.bi];d=1;break b;case 61:a.H=(-536870872);CF(a);break b;case 62:a.H=(-33554392);CF(a);break b;default:a.H=ASs(a);if(a.H<256){a.mb=a.H;a.H=a.H<<16;a.H=(-1073741784)|a.H;break b;}a.H=a.H&255;a.mb=a.H;a.H=a.H<<16;a.H=(-16777176)|a.H;break b;}a.H=(-268435416);CF(a);}}if(!d)break;}break a;case 41:a.H=(-536870871);break a;case 42:case 43:case 63:switch
(a.bi>=a.bE.data.length?42:a.bE.data[a.bi]){case 43:a.H=a.H|(-2147483648);CF(a);break a;case 63:a.H=a.H|(-1073741824);CF(a);break a;default:}a.H=a.H|(-536870912);break a;case 46:a.H=(-536870866);break a;case 91:a.H=(-536870821);Uh(a,2);break a;case 93:if(a.h4!=2)break a;a.H=(-536870819);break a;case 94:a.H=(-536870818);break a;case 123:a.jF=AGw(a,a.H);break a;case 124:a.H=(-536870788);break a;default:}else if(a.h4==2)switch(a.H){case 38:a.H=(-536870874);break a;case 45:a.H=(-536870867);break a;case 91:a.H=(-536870821);break a;case 93:a.H
=(-536870819);break a;case 94:a.H=(-536870818);break a;default:}}else{c=a.bi>=(a.bE.data.length-2|0)?(-1):Mj(a);c:{a.H=c;switch(a.H){case -1:M(CN(B(3),EE(a),a.bi));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.H
=ADU(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.h4!=1)break a;a.H=(-2147483648)|a.H;break a;case 65:a.H=(-2147483583);break a;case 66:a.H=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:M(CN(B(3),EE(a),a.bi));case 68:case 83:case 87:case 100:case 115:case 119:a.jF=QT(Lo(a.bE,
a.qj,1),0);a.H=0;break a;case 71:a.H=(-2147483577);break a;case 80:case 112:break c;case 81:a.Bl=a.h4;a.h4=4;b=1;break a;case 90:a.H=(-2147483558);break a;case 97:a.H=7;break a;case 98:a.H=(-2147483550);break a;case 99:if(a.bi>=(a.bE.data.length-2|0))M(CN(B(3),EE(a),a.bi));a.H=a.bE.data[CF(a)]&31;break a;case 101:a.H=27;break a;case 102:a.H=12;break a;case 110:a.H=10;break a;case 114:a.H=13;break a;case 116:a.H=9;break a;case 117:a.H=UL(a,4);break a;case 120:a.H=UL(a,2);break a;case 122:a.H=(-2147483526);break a;default:}break a;}e
=AOu(a);f=0;if(a.H==80)f=1;try{a.jF=QT(e,f);}catch($$e){$$je=Q($$e);if($$je instanceof MV){M(CN(B(3),EE(a),a.bi));}else{throw $$e;}}a.H=0;}}if(b)continue;else break;}}
function AOu(a){var b,c,d;b=new V;HF(b,10);if(a.bi<(a.bE.data.length-2|0)){if(a.bE.data[a.bi]!=123){b=new V;X(b);return W(I(I(b,B(630)),Lo(a.bE,CF(a),1)));}CF(a);c=0;a:{while(a.bi<(a.bE.data.length-2|0)){c=a.bE.data[CF(a)];if(c==125)break a;DQ(b,c);}}if(c!=125)M(CN(B(3),a.eQ,a.bi));}if(!Kh(b))M(CN(B(3),a.eQ,a.bi));d=W(b);if(Bi(d)==1){b=new V;X(b);return W(I(I(b,B(630)),d));}b:{c:{if(Bi(d)>3){if(IF(d,B(630)))break c;if(IF(d,B(631)))break c;}break b;}d=JC(d,2);}return d;}
function AGw(a,b){var c,d,e,f,$$je;c=new V;HF(c,4);d=(-1);e=2147483647;a:{while(true){if(a.bi>=a.bE.data.length)break a;b=a.bE.data[CF(a)];if(b==125)break a;if(b==44&&d<0)try{d=Li(BM(c),10);AGN(c,0,Kh(c));continue;}catch($$e){$$je=Q($$e);if($$je instanceof EB){break;}else{throw $$e;}}DQ(c,b&65535);}M(CN(B(3),a.eQ,a.bi));}if(b!=125)M(CN(B(3),a.eQ,a.bi));if(Kh(c)>0)b:{try{e=Li(BM(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Q($$e);if($$je instanceof EB){}else{throw $$e;}}M(CN(B(3),a.eQ,a.bi));}else if(d
<0)M(CN(B(3),a.eQ,a.bi));if((d|e|(e-d|0))<0)M(CN(B(3),a.eQ,a.bi));f=a.bi>=a.bE.data.length?42:a.bE.data[a.bi];c:{switch(f){case 43:a.H=(-2147483525);CF(a);break c;case 63:a.H=(-1073741701);CF(a);break c;default:}a.H=(-536870789);}c=new Ty;c.jf=d;c.ip=e;return c;}
function EE(a){return a.eQ;}
function Eq(a){return !a.cH&&!a.H&&a.bi==a.D0&&!H8(a)?1:0;}
function Nt(b){return b<0?0:1;}
function Ga(a){return !Eq(a)&&!H8(a)&&Nt(a.cH)?1:0;}
function TZ(a){return a.cH<=56319&&a.cH>=55296?1:0;}
function WF(a){return a.cH<=57343&&a.cH>=56320?1:0;}
function Q1(b){return b<=56319&&b>=55296?1:0;}
function PL(b){return b<=57343&&b>=56320?1:0;}
function UL(a,b){var c,d,e,f,$$je;c=new V;HF(c,b);d=a.bE.data.length-2|0;e=0;while(true){f=S(e,b);if(f>=0)break;if(a.bi>=d)break;DQ(c,a.bE.data[CF(a)]);e=e+1|0;}if(!f)a:{try{b=Li(BM(c),16);}catch($$e){$$je=Q($$e);if($$je instanceof EB){break a;}else{throw $$e;}}return b;}M(CN(B(3),a.eQ,a.bi));}
function ADU(a){var b,c,d,e,f;b=3;c=1;d=a.bE.data.length-2|0;e=Wr(a.bE.data[a.bi],8);switch(e){case -1:break;default:if(e>3)b=2;CF(a);a:{while(true){if(c>=b)break a;if(a.bi>=d)break a;f=Wr(a.bE.data[a.bi],8);if(f<0)break;e=(e*8|0)+f|0;CF(a);c=c+1|0;}}return e;}M(CN(B(3),a.eQ,a.bi));}
function ASs(a){var b,c;b=1;c=a.mb;a:while(true){if(a.bi>=a.bE.data.length)M(CN(B(3),a.eQ,a.bi));b:{c:{switch(a.bE.data[a.bi]){case 41:CF(a);return c|256;case 45:if(!b)M(CN(B(3),a.eQ,a.bi));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}CF(a);}CF(a);return c;}
function CF(a){var b,c;a.qj=a.bi;if(!(a.mb&4))a.bi=a.bi+1|0;else{b=a.bE.data.length-2|0;a.bi=a.bi+1|0;a:while(true){if(a.bi<b&&Qm(a.bE.data[a.bi])){a.bi=a.bi+1|0;continue;}if(a.bi>=b)break;if(a.bE.data[a.bi]!=35)break;a.bi=a.bi+1|0;while(true){if(a.bi>=b)continue a;c=a.bE.data[a.bi];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.bi=a.bi+1|0;}}}return a.qj;}
function AQZ(b){return Bmf.Nm(b);}
function Mj(a){var b,c,d;b=a.bE.data[CF(a)];if(Du(b)){c=a.qj+1|0;if(c<a.bE.data.length){d=a.bE.data[c];if(DS(d)){CF(a);return EJ(b,d);}}}return b;}
function HI(a){return a.ig;}
function ARj(){var a=this;Cc.call(a);a.AT=null;a.rh=null;a.n9=0;}
function CN(a,b,c){var d=new ARj();A3Q(d,a,b,c);return d;}
function A3Q(a,b,c,d){P(a);a.n9=(-1);a.AT=b;a.rh=c;a.n9=d;}
function A_k(a){var b,c,d,e,f,g,h,i;b=B(3);if(a.n9>=1){c=$rt_createCharArray(a.n9);d=c.data;e=0;f=d.length;if(e>f){b=new Cc;P(b);M(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=Tl(c);}h=new V;X(h);h=I(h,a.AT);if(a.rh!==null&&Bi(a.rh)){i=new V;X(i);b=W(I(I(I(I(Bf(i,a.n9),B(632)),a.rh),B(632)),b));}else b=B(3);return W(I(h,b));}
function MA(){CR.call(this);this.tu=0;}
function Bmg(){var a=new MA();A4w(a);return a;}
function A4w(a){Cw(a);}
function A8O(a,b){KR(b,a.tu);}
function A8f(a,b){a.tu=N7(b);}
function A6T(a){return 1;}
function M2(){CR.call(this);this.to=0;}
function Bmh(){var a=new M2();A5_(a);return a;}
function A5_(a){Cw(a);}
function AWs(a,b){AAf(b,a.to);}
function AZK(a,b){a.to=XS(b);}
function A5W(a){return 2;}
function Ln(){CR.call(this);this.r9=0;}
function Bmi(){var a=new Ln();A1U(a);return a;}
function A1U(a){Cw(a);}
function A2f(a,b){JV(b,a.r9);}
function AZd(a,b){a.r9=H_(b);}
function AVx(a){return 3;}
function Oh(){CR.call(this);this.s3=Long_ZERO;}
function Bmj(){var a=new Oh();AZ_(a);return a;}
function AZ_(a){Cw(a);}
function ATp(a,b){UQ(b,a.s3);}
function A_A(a,b){a.s3=Tu(b);}
function A2S(a){return 4;}
function Pp(){CR.call(this);this.nn=0.0;}
function Bmk(){var a=new Pp();AZ8(a);return a;}
function A60(a){var b=new Pp();AV2(b,a);return b;}
function AZ8(a){Cw(a);}
function AV2(a,b){Cw(a);a.nn=b;}
function ATg(a,b){APp(b,a.nn);}
function A79(a,b){a.nn=AA8(b);}
function ASW(a){return 5;}
function Mt(){CR.call(this);this.iL=0.0;}
function Bml(){var a=new Mt();AZM(a);return a;}
function AZM(a){Cw(a);}
function A6_(a,b){APu(b,a.iL);}
function AVf(a,b){a.iL=APs(b);}
function A06(a){return 6;}
function MM(){CR.call(this);this.mq=null;}
function Bmm(){var a=new MM();A_S(a);return a;}
function A_S(a){Cw(a);}
function A5j(a,b){JV(b,a.mq.data.length);AOG(b,a.mq);}
function A7s(a,b){a.mq=$rt_createByteArray(H_(b));AM2(b,a.mq);}
function A9M(a){return 7;}
function OM(){CR.call(this);this.AA=null;}
function Bmn(){var a=new OM();A8x(a);return a;}
function A8x(a){Cw(a);}
function A$2(a,b){Xy(b,a.AA);}
function AZe(a,b){a.AA=GV(b);}
function ATA(a){return 8;}
function QZ(){var a=this;CR.call(a);a.hc=null;a.mZ=0;}
function Mb(){var a=new QZ();AG_(a);return a;}
function AG_(a){Cw(a);a.hc=Ci();}
function A9H(a,b){var c;if(a.hc.s<=0)a.mZ=1;else a.mZ=Z(a.hc,0).fe();KR(b,a.mZ);JV(b,a.hc.s);c=0;while(c<a.hc.s){Z(a.hc,c).gN(b);c=c+1|0;}}
function AY9(a,b){var c,d,e;a.mZ=N7(b);c=H_(b);a.hc=Ci();d=0;while(d<c){e=AE_(a.mZ);e.gF(b);T(a.hc,e);d=d+1|0;}}
function AYJ(a){return 9;}
function Jz(a,b){a.mZ=b.fe();T(a.hc,b);}
function Fd(a,b){return Z(a.hc,b);}
function AOA(a){return a.hc.s;}
function TL(){var a=this;D.call(a);a.Ax=null;a.xf=null;}
function ARR(a){CM(a.Ax,(UI(a.xf.result)?1:0)?null:A8H(a.xf.result));}
function AUA(a){ARR(a);}
function TK(){D.call(this);this.Em=null;}
function XM(a){CM(a.Em,null);}
function AXz(a){XM(a);}
function AR1(){var a=this;D.call(a);a.EY=null;a.qk=null;}
function BbJ(){var a=new AR1();AXL(a);return a;}
function AXL(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,3);e=d.data;e[0]=B(633);e[1]=B(623);e[2]=B(623);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(622);e[2]=B(622);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(634);e[1]=B(635);e[2]=B(636);c[2]=d;d=J(B4,3);e=d.data;e[0]=B(634);e[1]=B(636);e[2]=B(636);c[3]=d;a.EY=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Bfa;e[1]=Be$;BB();e[2]=Bh1;e[3]=BhM;e[4]=Bh2;c[0]=d;d=J(D,5);e=d.data;e[0]=Bh6;e[1]=Bh$;e[2]=BhW;e[3]=Bic;e[4]=Bij;c[1]=d;d=J(D,5);e=d.data;e[0]
=Bh5;e[1]=Bh9;e[2]=BhV;e[3]=Bib;e[4]=Bii;c[2]=d;d=J(D,5);e=d.data;e[0]=Bh7;e[1]=Bh_;e[2]=BhX;e[3]=Bid;e[4]=Bik;c[3]=d;d=J(D,5);e=d.data;e[0]=Bil;e[1]=Bim;e[2]=Bin;e[3]=Bio;e[4]=Bip;c[4]=d;a.qk=b;}
function AHr(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.qk.data[0].data.length){d=a.qk.data[0].data[c];e=0;while(e<(a.qk.data.length-1|0)){f=a.qk.data;g=e+1|0;h=f[g].data[c];i=Qq(h);f=J(D,5);j=f.data;j[0]=a.EY.data[e];j[1]=BI(35);BB();j[2]=Bie;j[3]=BI(88);j[4]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function X6(){var a=this;D.call(a);a.Bn=null;a.px=null;}
function Bal(){var a=new X6();A$x(a);return a;}
function A$x(a){var b,c,d,e;b=J($rt_arraycls(B4),1);c=b.data;d=J(B4,3);e=d.data;e[0]=B(72);e[1]=B(72);e[2]=B(622);c[0]=d;a.Bn=b;b=J($rt_arraycls(D),2);c=b.data;d=J(D,5);e=d.data;L();e[0]=Bfa;e[1]=Be$;BB();e[2]=Bh1;e[3]=BhM;e[4]=Bh2;c[0]=d;d=J(D,5);e=d.data;e[0]=Bh4;e[1]=Bh8;e[2]=Bh3;e[3]=Bia;e[4]=Bih;c[1]=d;a.px=b;}
function XF(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.px.data[0].data.length){d=a.px.data[0].data[c];e=0;while(e<(a.px.data.length-1|0)){f=a.px.data;g=e+1|0;h=f[g].data[c];i=Qq(h);j=J(D,5);k=j.data;k[0]=a.Bn.data[e];k[1]=BI(35);BB();k[2]=Bie;k[3]=BI(88);k[4]=d;Ck(b,i,j);e=g;}c=c+1|0;}h=new Cd;BB();Gq(h,Bh0,1);f=J(D,7);k=f.data;k[0]=B(637);k[1]=B(638);k[2]=B(637);k[3]=BI(88);k[4]=Bgq;k[5]=BI(35);k[6]=Bie;Ck(b,h,f);d=EM(Bgo,4);f=J(D,9);k=f.data;k[0]=B(72);k[1]=B(622);k[2]=B(48);k[3]=BI(89);k[4]=Bgn;k[5]=BI(88);k[6]
=Bh1;k[7]=BI(35);k[8]=Bie;Ck(b,d,f);}
function XZ(){D.call(this);this.sv=null;}
function BbF(){var a=new XZ();A2n(a);return a;}
function A2n(a){var b,c,d,e;b=J($rt_arraycls(D),3);c=b.data;d=J(D,2);e=d.data;L();e[0]=Bft;BB();e[1]=Bh2;c[0]=d;d=J(D,2);e=d.data;e[0]=Bfs;e[1]=Bh1;c[1]=d;d=J(D,2);e=d.data;e[0]=Bg_;e[1]=BhM;c[2]=d;a.sv=b;}
function AD4(a,b){var c,d,e,f,g,h;c=0;while(c<a.sv.data.length){d=a.sv.data[c].data[0];e=a.sv.data[c].data[1];f=AL$(d);g=J(D,5);h=g.data;h[0]=B(616);h[1]=B(616);h[2]=B(616);h[3]=BI(35);h[4]=e;Ck(b,f,g);f=EM(e,9);g=J(D,3);h=g.data;h[0]=B(622);h[1]=BI(35);h[2]=d;Ck(b,f,g);c=c+1|0;}}
function AEi(){D.call(this);}
function Bbm(){var a=new AEi();A0O(a);return a;}
function A0O(a){return;}
function AJZ(a,b){var c,d,e;c=new Cd;BB();DD(c,Big);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(622);e[3]=BI(88);L();e[4]=Bfj;e[5]=BI(89);e[6]=Bfk;e[7]=BI(35);e[8]=Bif;Ck(b,c,d);c=Qq(Big);d=J(D,9);e=d.data;e[0]=B(48);e[1]=B(72);e[2]=B(622);e[3]=BI(88);e[4]=Bfk;e[5]=BI(89);e[6]=Bfj;e[7]=BI(35);e[8]=Bif;Ck(b,c,d);}
function AR0(){D.call(this);}
function BaC(){var a=new AR0();A63(a);return a;}
function A63(a){return;}
function Yk(a,b){var c,d,e;c=new Cd;L();AH5(c,Bg8);d=J(D,5);e=d.data;e[0]=B(616);e[1]=B(619);e[2]=B(616);e[3]=BI(35);e[4]=Bfa;Ck(b,c,d);c=AL$(Bhd);d=J(D,5);e=d.data;e[0]=B(616);e[1]=B(619);e[2]=B(616);e[3]=BI(35);e[4]=Be$;Ck(b,c,d);c=AL$(Bha);d=J(D,4);e=d.data;e[0]=B(620);e[1]=B(620);e[2]=BI(35);e[3]=Bfa;Ck(b,c,d);}
function AFe(){var a=this;D.call(a);a.zL=null;a.n6=null;}
function Bbc(){var a=new AFe();AVh(a);return a;}
function AVh(a){var b,c,d,e;b=J($rt_arraycls(B4),4);c=b.data;d=J(B4,2);e=d.data;e[0]=B(633);e[1]=B(624);c[0]=d;d=J(B4,3);e=d.data;e[0]=B(624);e[1]=B(633);e[2]=B(633);c[1]=d;d=J(B4,3);e=d.data;e[0]=B(633);e[1]=B(624);e[2]=B(624);c[2]=d;d=J(B4,2);e=d.data;e[0]=B(624);e[1]=B(624);c[3]=d;a.zL=b;b=J($rt_arraycls(D),5);c=b.data;d=J(D,5);e=d.data;L();e[0]=Bfo;e[1]=BgA;BB();e[2]=Bh1;e[3]=BhM;e[4]=Bh2;c[0]=d;d=J(D,5);e=d.data;e[0]=Bir;e[1]=Biv;e[2]=Biz;e[3]=BiD;e[4]=BiH;c[1]=d;d=J(D,5);e=d.data;e[0]=Bis;e[1]=Biw;e[2]
=BiA;e[3]=BiE;e[4]=BiI;c[2]=d;d=J(D,5);e=d.data;e[0]=Bit;e[1]=Bix;e[2]=BiB;e[3]=BiF;e[4]=BiJ;c[3]=d;d=J(D,5);e=d.data;e[0]=Biu;e[1]=Biy;e[2]=BiC;e[3]=BiG;e[4]=BiK;c[4]=d;a.n6=b;}
function ASO(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.n6.data[0].data.length){d=a.n6.data[0].data[c];e=0;while(e<(a.n6.data.length-1|0)){f=a.n6.data;g=e+1|0;h=f[g].data[c];i=Qq(h);f=J(D,3);j=f.data;j[0]=a.zL.data[e];j[1]=BI(88);j[2]=d;Ck(b,i,f);e=g;}c=c+1|0;}}
function Yr(){D.call(this);this.I0=null;}
function BaR(a){var b=new Yr();AYE(b,a);return b;}
function AYE(a,b){a.I0=b;}
function AMN(a,b,c){return Kw(c)<Kw(b)?(-1):Kw(c)<=Kw(b)?0:1;}
function AZH(a,b,c){return AMN(a,b,c);}
function QM(){DW.call(this);}
function A3H(a,b,c,d){var e;e=a.ih;Cv(d,e,b-Er(d,e)|0);return a.r.k(b,c,d);}
function A9I(a,b){return 0;}
function ASi(){DW.call(this);}
function BbG(){var a=new ASi();A24(a);return a;}
function A24(a){Hd(a,(-1));}
function A4X(a,b,c,d){return b;}
function P2(){DW.call(this);}
function AUj(a,b,c,d){if(Er(d,a.ih)!=b)b=(-1);return b;}
function Ra(){DW.call(this);this.wJ=0;}
function A3K(a,b,c,d){var e;e=a.ih;Cv(d,e,b-Er(d,e)|0);a.wJ=b;return b;}
function AUo(a){return a.wJ;}
function A8Y(a,b){return 0;}
function HY(){DW.call(this);}
function Bcd(){var a=new HY();A$v(a);return a;}
function A$v(a){Hd(a,0);}
function A1H(a,b,c,d){if(d.nv!=1&&b!=d.by)return (-1);ARG(d);M4(d,0,b);return b;}
function CI(){Co.call(this);this.dl=0;}
function Bmo(){var a=new CI();EO(a);return a;}
function EO(a){Cz(a);a.dl=1;}
function A_J(a,b,c,d){var e;if((b+a.ec()|0)>d.by){d.hp=1;return (-1);}e=a.dn(b,c);if(e<0)return (-1);return a.r.k(b+e|0,c,d);}
function A$h(a){return a.dl;}
function AXg(a,b){return 1;}
function AF0(){CI.call(this);}
function IP(a){var b=new AF0();A7P(b,a);return b;}
function A7P(a,b){NF(a,b);a.dl=1;a.p6=1;a.dl=0;}
function A9V(a,b,c){return 0;}
function A5M(a,b,c,d){var e,f,g;e=d.by;f=d.fi;while(true){g=S(b,e);if(g>0)return (-1);if(g<0&&DS(Ba(c,b))&&b>f&&Du(Ba(c,b-1|0))){b=b+1|0;continue;}if(a.r.k(b,c,d)>=0)break;b=b+1|0;}return b;}
function A4O(a,b,c,d,e){var f,g;f=e.by;g=e.fi;while(true){if(c<b)return (-1);if(c<f&&DS(Ba(d,c))&&c>g&&Du(Ba(d,c-1|0))){c=c+(-1)|0;continue;}if(a.r.k(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A3J(a,b){return 0;}
function CE(){var a=this;Co.call(a);a.dm=null;a.f6=null;a.cK=0;}
function Bmp(){var a=new CE();A4K(a);return a;}
function BaS(a,b){var c=new CE();GS(c,a,b);return c;}
function A4K(a){Cz(a);}
function GS(a,b,c){Cz(a);a.dm=b;a.f6=c;a.cK=c.ih;}
function AWA(a,b,c,d){var e,f,g,h;if(a.dm===null)return (-1);e=Hp(d,a.cK);EN(d,a.cK,b);f=a.dm.s;g=0;while(true){if(g>=f){EN(d,a.cK,e);return (-1);}h=Z(a.dm,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AZu(a,b){a.f6.r=b;}
function A7o(a,b){var c;a:{if(a.dm!==null){c=Jr(a.dm);while(true){if(!KK(c))break a;if(!KZ(c).d4(b))continue;else return 1;}}}return 0;}
function AZ2(a,b){return JQ(b,a.cK)>=0&&Hp(b,a.cK)==JQ(b,a.cK)?0:1;}
function AUS(a){var b,c,d,e;a.eR=1;if(a.f6!==null&&!a.f6.eR)Lb(a.f6);a:{if(a.dm!==null){b=a.dm.s;c=0;while(true){if(c>=b)break a;d=Z(a.dm,c);e=d.lA();if(e===null)e=d;else{d.eR=1;En(a.dm,c);AMS(a.dm,c,e);}if(!e.eR)e.iX();c=c+1|0;}}}if(a.r!==null)Lb(a);}
function K7(){CE.call(this);}
function Bmq(){var a=new K7();AX6(a);return a;}
function AX6(a){Cz(a);}
function AZl(a,b,c,d){var e,f,g,h;e=Er(d,a.cK);Cv(d,a.cK,b);f=a.dm.s;g=0;while(true){if(g>=f){Cv(d,a.cK,e);return (-1);}h=Z(a.dm,g).k(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A9u(a,b){return !Er(b,a.cK)?0:1;}
function EW(){K7.call(this);}
function A5d(a,b,c,d){var e,f,g;e=Er(d,a.cK);Cv(d,a.cK,b);f=a.dm.s;g=0;while(g<f){if(Z(a.dm,g).k(b,c,d)>=0)return a.r.k(a.f6.wJ,c,d);g=g+1|0;}Cv(d,a.cK,e);return (-1);}
function A9d(a,b){a.r=b;}
function Tn(){EW.call(this);}
function AZq(a,b,c,d){var e,f;e=a.dm.s;f=0;while(f<e){if(Z(a.dm,f).k(b,c,d)>=0)return a.r.k(b,c,d);f=f+1|0;}return (-1);}
function A1y(a,b){return 0;}
function WU(){EW.call(this);}
function AT8(a,b,c,d){var e,f;e=a.dm.s;f=0;while(true){if(f>=e)return a.r.k(b,c,d);if(Z(a.dm,f).k(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A$l(a,b){return 0;}
function Vm(){EW.call(this);}
function AUP(a,b,c,d){var e,f,g,h;e=a.dm.s;f=d.oh?0:d.fi;a:{g=a.r.k(b,c,d);if(g>=0){Cv(d,a.cK,b);h=0;while(true){if(h>=e)break a;if(Z(a.dm,h).eY(f,b,c,d)>=0){Cv(d,a.cK,(-1));return g;}h=h+1|0;}}}return (-1);}
function A_X(a,b){return 0;}
function Ro(){EW.call(this);}
function A3k(a,b,c,d){var e,f;e=a.dm.s;Cv(d,a.cK,b);f=0;while(true){if(f>=e)return a.r.k(b,c,d);if(Z(a.dm,f).eY(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A9A(a,b){return 0;}
function IG(){CE.call(this);this.fp=null;}
function BcD(a,b){var c=new IG();Z5(c,a,b);return c;}
function Z5(a,b,c){Cz(a);a.fp=b;a.f6=c;a.cK=c.ih;}
function ATn(a,b,c,d){var e,f;e=Hp(d,a.cK);EN(d,a.cK,b);f=a.fp.k(b,c,d);if(f>=0)return f;EN(d,a.cK,e);return (-1);}
function AYg(a,b,c,d){var e;e=a.fp.eK(b,c,d);if(e>=0)EN(d,a.cK,e);return e;}
function A9L(a,b,c,d,e){var f;f=a.fp.eY(b,c,d,e);if(f>=0)EN(e,a.cK,f);return f;}
function A7k(a,b){return a.fp.d4(b);}
function A8W(a){var b;b=new OY;Z5(b,a.fp,a.f6);a.r=b;return b;}
function A2b(a){var b;a.eR=1;if(a.f6!==null&&!a.f6.eR)Lb(a.f6);if(a.fp!==null&&!a.fp.eR){b=a.fp.lA();if(b!==null){a.fp.eR=1;a.fp=b;}a.fp.iX();}}
function H5(){D.call(this);}
function Bl(){var a=this;H5.call(a);a.cj=0;a.dP=0;a.b$=null;a.qd=null;a.qI=null;a.ca=0;}
var Bmr=null;function Bms(){var a=new Bl();B0(a);return a;}
function B0(a){var b;b=new W7;b.bx=$rt_createIntArray(64);a.b$=b;}
function A4m(a){return null;}
function A3U(a){return a.b$;}
function AN4(a){return !a.dP?(I9(a.b$,0)>=2048?0:1):AEy(a.b$,0)>=2048?0:1;}
function A6l(a){return a.ca;}
function A$b(a){return a;}
function Y3(a){var b,c;if(a.qI===null){b=a.kr();c=new SA;c.Ju=a;c.Ct=b;B0(c);a.qI=c;FA(a.qI,a.dP);}return a.qI;}
function Ki(a){var b,c;if(a.qd===null){b=a.kr();c=new Sz;c.GQ=a;c.EA=b;c.Bo=a;B0(c);a.qd=c;FA(a.qd,a.cj);a.qd.ca=a.ca;}return a.qd;}
function A_l(a){return 0;}
function FA(a,b){if(a.cj^b){a.cj=a.cj?0:1;a.dP=a.dP?0:1;}if(!a.ca)a.ca=1;return a;}
function AV4(a){return a.cj;}
function KM(b,c){if(b.hC()!==null&&c.hC()!==null)return AEc(b.hC(),c.hC());return 1;}
function QT(b,c){return APX(ARA(Bmr,b),c);}
function Z9(){Bmr=new Ic;}
function ZT(){var a=this;Bl.call(a);a.xK=0;a.y_=0;a.np=0;a.uP=0;a.iw=0;a.lp=0;a.b6=null;a.c5=null;}
function Es(){var a=new ZT();A2G(a);return a;}
function A$P(a,b){var c=new ZT();AU7(c,a,b);return c;}
function A2G(a){B0(a);a.b6=A_Z();}
function AU7(a,b,c){B0(a);a.b6=A_Z();a.xK=b;a.y_=c;}
function Dp(a,b){a:{if(a.xK){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.iw){OH(a.b6,Kl(b&65535));break a;}Mf(a.b6,Kl(b&65535));break a;}if(a.y_&&b>128){a.np=1;b=GP(GN(b));}}}if(!(!Q1(b)&&!PL(b))){if(a.uP)OH(a.b$,b-55296|0);else Mf(a.b$,b-55296|0);}if(a.iw)OH(a.b6,b);else Mf(a.b6,b);if(!a.ca&&Mz(b))a.ca=1;return a;}
function ASE(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(a.uP){if(!b.dP)G1(a.b$,b.kr());else Ec(a.b$,b.kr());}else if(!b.dP)Hv(a.b$,b.kr());else{Hg(a.b$,b.kr());Ec(a.b$,b.kr());a.dP=a.dP?0:1;a.uP=1;}if(!a.lp&&b.hC()!==null){if(a.iw){if(!b.cj)G1(a.b6,b.hC());else Ec(a.b6,b.hC());}else if(!b.cj)Hv(a.b6,b.hC());else{Hg(a.b6,b.hC());Ec(a.b6,b.hC());a.cj=a.cj?0:1;a.iw=1;}}else{c=a.cj;if(a.c5!==null){d=a.c5;if(!c){e=new T_;e.HN=a;e.E2=c;e.Bi=d;e.Bb=b;B0(e);a.c5=e;}else{e=new Ua;e.JS=a;e.Al=c;e.DA=d;e.Dh=b;B0(e);a.c5=
e;}}else{if(c&&!a.iw&&Ow(a.b6)){d=new T8;d.IG=a;d.DF=b;B0(d);a.c5=d;}else if(!c){d=new T6;d.xi=a;d.wx=c;d.CO=b;B0(d);a.c5=d;}else{d=new T7;d.vl=a;d.tS=c;d.Be=b;B0(d);a.c5=d;}a.lp=1;}}return a;}
function CG(a,b,c){var d;if(b>c){d=new Cc;P(d);M(d);}a:{b:{if(!a.xK){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Dp(a,b);b=b+1|0;}}if(a.iw)AIK(a.b6,b,c+1|0);else Jy(a.b6,b,c+1|0);}return a;}
function AIh(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(b.np)a.np=1;if(!(a.dP^b.dP)){if(!a.dP)Hv(a.b$,b.b$);else Ec(a.b$,b.b$);}else if(a.dP)G1(a.b$,b.b$);else{Hg(a.b$,b.b$);Ec(a.b$,b.b$);a.dP=1;}if(!a.lp&&DY(b)!==null){if(!(a.cj^b.cj)){if(!a.cj)Hv(a.b6,DY(b));else Ec(a.b6,DY(b));}else if(a.cj)G1(a.b6,DY(b));else{Hg(a.b6,DY(b));Ec(a.b6,DY(b));a.cj=1;}}else{c=a.cj;if(a.c5!==null){d=a.c5;if(!c){e=new Pz;e.Fx=a;e.AW=c;e.EH=d;e.Bv=b;B0(e);a.c5=e;}else{e=new PN;e.FM=a;e.EV=c;e.y7=d;e.zb=b;B0(e);a.c5=e;}}else{if(!a.iw
&&Ow(a.b6)){if(!c){d=new T9;d.JU=a;d.zZ=b;B0(d);a.c5=d;}else{d=new T$;d.HX=a;d.EM=b;B0(d);a.c5=d;}}else if(!c){d=new Uc;d.A0=a;d.Ao=b;d.DC=c;B0(d);a.c5=d;}else{d=new Ud;d.Az=a;d.AG=b;d.D6=c;B0(d);a.c5=d;}a.lp=1;}}}
function SH(a,b){var c,d,e;if(!a.ca&&b.ca)a.ca=1;if(b.np)a.np=1;if(!(a.dP^b.dP)){if(!a.dP)Ec(a.b$,b.b$);else Hv(a.b$,b.b$);}else if(!a.dP)G1(a.b$,b.b$);else{Hg(a.b$,b.b$);Ec(a.b$,b.b$);a.dP=0;}if(!a.lp&&DY(b)!==null){if(!(a.cj^b.cj)){if(!a.cj)Ec(a.b6,DY(b));else Hv(a.b6,DY(b));}else if(!a.cj)G1(a.b6,DY(b));else{Hg(a.b6,DY(b));Ec(a.b6,DY(b));a.cj=0;}}else{c=a.cj;if(a.c5!==null){d=a.c5;if(!c){e=new PB;e.HM=a;e.Eo=c;e.Cr=d;e.Ak=b;B0(e);a.c5=e;}else{e=new PC;e.H3=a;e.Ee=c;e.B6=d;e.En=b;B0(e);a.c5=e;}}else{if(!a.iw
&&Ow(a.b6)){if(!c){d=new Px;d.FP=a;d.C2=b;B0(d);a.c5=d;}else{d=new Py;d.JP=a;d.zR=b;B0(d);a.c5=d;}}else if(!c){d=new PD;d.Fj=a;d.E1=b;d.AF=c;B0(d);a.c5=d;}else{d=new Pw;d.AD=a;d.Ei=b;d.DK=c;B0(d);a.c5=d;}a.lp=1;}}}
function D6(a,b){if(a.c5!==null)return a.cj^a.c5.X(b);return a.cj^EK(a.b6,b);}
function DY(a){if(!a.lp)return a.b6;return null;}
function A5F(a){return a.b$;}
function A1o(a){var b,c;if(a.c5!==null)return a;b=DY(a);c=new PA;c.Hx=a;c.sj=b;B0(c);return FA(c,a.cj);}
function A7_(a){var b,c;b=new V;X(b);c=I9(a.b6,0);while(c>=0){Hm(b,ID(c));DQ(b,124);c=I9(a.b6,c+1|0);}if(b.bY>0)Su(b,b.bY-1|0);return W(b);}
function AV5(a){return a.np;}
function MV(){var a=this;B6.call(a);a.Hf=null;a.Jy=null;}
function E6(){Co.call(this);this.bQ=null;}
function Bmt(a,b,c){var d=new E6();Ef(d,a,b,c);return d;}
function Ef(a,b,c,d){NF(a,c);a.bQ=b;a.p6=d;}
function A_O(a){return a.bQ;}
function A0B(a,b){return !a.bQ.d4(b)&&!a.r.d4(b)?0:1;}
function A$R(a,b){return 1;}
function AYD(a){var b;a.eR=1;if(a.r!==null&&!a.r.eR){b=a.r.lA();if(b!==null){a.r.eR=1;a.r=b;}a.r.iX();}if(a.bQ!==null){if(!a.bQ.eR){b=a.bQ.lA();if(b!==null){a.bQ.eR=1;a.bQ=b;}a.bQ.iX();}else if(a.bQ instanceof IG&&a.bQ.f6.wV)a.bQ=a.bQ.r;}}
function D8(){E6.call(this);this.cN=null;}
function Ba9(a,b,c){var d=new D8();F7(d,a,b,c);return d;}
function F7(a,b,c,d){Ef(a,b,c,d);a.cN=b;}
function A3l(a,b,c,d){var e,f;e=0;a:{while((b+a.cN.ec()|0)<=d.by){f=a.cN.dn(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.r.k(b,c,d);if(f>=0)break;b=b-a.cN.ec()|0;e=e+(-1)|0;}return f;}
function GD(){D8.call(this);this.k1=null;}
function Bb7(a,b,c,d){var e=new GD();QV(e,a,b,c,d);return e;}
function QV(a,b,c,d,e){F7(a,c,d,e);a.k1=b;}
function A3_(a,b,c,d){var e,f,g,h;e=a.k1.jf;f=a.k1.ip;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.cN.ec()|0)>d.by)break a;h=a.cN.dn(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.r.k(b,c,d);if(h>=0)break;b=b-a.cN.ec()|0;g=g+(-1)|0;}return h;}if((b+a.cN.ec()|0)>d.by){d.hp=1;return (-1);}h=a.cN.dn(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function DX(){E6.call(this);}
function A3A(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.bQ.k(b,c,d);if(e>=0)return e;return a.r.k(b,c,d);}
function FY(){D8.call(this);}
function A7y(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<0)e=a.r.k(b,c,d);return e;}
function A2X(a,b){a.r=b;a.bQ.cb(b);}
function SC(){D8.call(this);}
function A_E(a,b,c,d){while((b+a.cN.ec()|0)<=d.by&&a.cN.dn(b,c)>0){b=b+a.cN.ec()|0;}return a.r.k(b,c,d);}
function AYT(a,b,c,d){var e,f,g;e=a.r.eK(b,c,d);if(e<0)return (-1);f=e-a.cN.ec()|0;while(f>=b&&a.cN.dn(f,c)>0){g=f-a.cN.ec()|0;e=f;f=g;}return e;}
function EB(){Cc.call(this);}
function Bmu(){var a=new EB();A3Z(a);return a;}
function A3Z(a){P(a);}
function Ty(){var a=this;H5.call(a);a.jf=0;a.ip=0;}
function A6a(a){return a.jf;}
function A$L(a){return a.ip;}
function A8i(a){var b;b=new V;X(b);return W(I(I(I(Bf(I(b,B(639)),a.jf),B(640)),a.ip==2147483647?B(3):MB(AQY(a.ip))),B(641)));}
function T0(){Co.call(this);}
function Bmv(){var a=new T0();A_N(a);return a;}
function A_N(a){Cz(a);}
function AXE(a,b,c,d){return b;}
function A8V(a,b){return 0;}
function W7(){var a=this;D.call(a);a.bx=null;a.cm=0;}
function A_Z(){var a=new W7();A4G(a);return a;}
function A4G(a){a.bx=$rt_createIntArray(0);}
function Mf(a,b){var c,d;c=b/32|0;if(b>=a.cm){KP(a,c+1|0);a.cm=b+1|0;}d=a.bx.data;d[c]=d[c]|1<<(b%32|0);}
function Jy(a,b,c){var d,e,f,g,h;if(b>c){d=new BT;P(d);M(d);}e=b/32|0;f=c/32|0;if(c>a.cm){KP(a,f+1|0);a.cm=c;}if(e==f){g=a.bx.data;g[e]=g[e]|Jq(a,b)&KJ(a,c);}else{g=a.bx.data;g[e]=g[e]|Jq(a,b);h=e+1|0;while(h<f){a.bx.data[h]=(-1);h=h+1|0;}g=a.bx.data;g[f]=g[f]|KJ(a,c);}}
function Jq(a,b){return (-1)<<(b%32|0);}
function KJ(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function OH(a,b){var c,d;c=b/32|0;if(c<a.bx.data.length){d=a.bx.data;d[c]=d[c]&Ns((-2),b%32|0);if(b==(a.cm-1|0))Ie(a);}}
function AIK(a,b,c){var d,e,f,g,h;if(b>c){d=new BT;P(d);M(d);}if(b>=a.cm)return;c=CB(a.cm,c);e=b/32|0;f=c/32|0;if(e==f){g=a.bx.data;g[e]=g[e]&(KJ(a,b)|Jq(a,c));}else{g=a.bx.data;g[e]=g[e]&KJ(a,b);h=e+1|0;while(h<f){a.bx.data[h]=0;h=h+1|0;}g=a.bx.data;g[f]=g[f]&Jq(a,c);}Ie(a);}
function EK(a,b){var c;c=b/32|0;return c<a.bx.data.length&&a.bx.data[c]&1<<(b%32|0)?1:0;}
function I9(a,b){var c,d,e;if(b>=a.cm)return (-1);c=b/32|0;d=a.bx.data[c]>>>(b%32|0);if(d)return JN(d)+b|0;d=(a.cm+31|0)/32|0;e=c+1|0;while(e<d){if(a.bx.data[e])return (e*32|0)+JN(a.bx.data[e])|0;e=e+1|0;}return (-1);}
function AEy(a,b){var c,d,e;if(b>=a.cm)return b;c=b/32|0;d=(a.bx.data[c]^(-1))>>>(b%32|0);if(d)return JN(d)+b|0;d=(a.cm+31|0)/32|0;e=c+1|0;while(e<d){if(a.bx.data[e]!=(-1))return (e*32|0)+JN(a.bx.data[e]^(-1))|0;e=e+1|0;}return a.cm;}
function KP(a,b){var c,d,e,f;if(a.bx.data.length>=b)return;c=DE((b*3|0)/2|0,(a.bx.data.length*2|0)+1|0);d=a.bx.data;e=$rt_createIntArray(c);f=e.data;b=CB(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.bx=e;}
function Ie(a){var b,c,d;b=(a.cm+31|0)/32|0;a.cm=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=TJ(a.bx.data[c]);if(d<32)break;c=c+(-1)|0;a.cm=a.cm-32|0;}a.cm=a.cm-d|0;}}
function AEc(a,b){var c,d;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){if(a.bx.data[d]&b.bx.data[d])return 1;d=d+1|0;}return 0;}
function Ec(a,b){var c,d,e;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){e=a.bx.data;e[d]=e[d]&b.bx.data[d];d=d+1|0;}while(c<a.bx.data.length){a.bx.data[c]=0;c=c+1|0;}a.cm=CB(a.cm,b.cm);Ie(a);}
function G1(a,b){var c,d,e;c=CB(a.bx.data.length,b.bx.data.length);d=0;while(d<c){e=a.bx.data;e[d]=e[d]&(b.bx.data[d]^(-1));d=d+1|0;}Ie(a);}
function Hv(a,b){var c,d,e;a.cm=DE(a.cm,b.cm);KP(a,(a.cm+31|0)/32|0);c=CB(a.bx.data.length,b.cm);d=0;while(d<c){e=a.bx.data;e[d]=e[d]|b.bx.data[d];d=d+1|0;}}
function Hg(a,b){var c,d,e;a.cm=DE(a.cm,b.cm);KP(a,(a.cm+31|0)/32|0);c=CB(a.bx.data.length,b.cm);d=0;while(d<c){e=a.bx.data;e[d]=e[d]^b.bx.data[d];d=d+1|0;}Ie(a);}
function Ow(a){return a.cm?0:1;}
function OP(){var a=this;CE.call(a);a.zV=null;a.Hw=0;}
function A5O(a,b){a.r=b;}
function ABQ(a,b,c,d){var e,f,g,h,i;e=d.fi;f=d.by;g=b+1|0;h=S(g,f);if(h>0){d.hp=1;return (-1);}i=Ba(c,b);if(!a.zV.X(i))return (-1);if(Du(i)){if(h<0&&DS(Ba(c,g)))return (-1);}else if(DS(i)&&b>e&&Du(Ba(c,b-1|0)))return (-1);return a.r.k(g,c,d);}
function Qd(){var a=this;CE.call(a);a.vR=null;a.xU=null;}
function AEu(a,b){var c=new Qd();AHp(c,a,b);return c;}
function AHp(a,b,c){Cz(a);a.vR=b;a.xU=c;}
function ATR(a,b,c,d){var e;e=a.vR.k(b,c,d);if(e<0)e=ABQ(a.xU,b,c,d);if(e>=0)return e;return (-1);}
function A8I(a,b){a.r=b;a.xU.r=b;a.vR.cb(b);}
function AUp(a,b){return 1;}
function AT_(a,b){return 1;}
function EP(){var a=this;CE.call(a);a.h0=null;a.Gj=0;}
function A61(a){var b=new EP();Wm(b,a);return b;}
function Wm(a,b){Cz(a);a.h0=b.sR();a.Gj=b.cj;}
function A5y(a,b,c,d){var e,f,g;e=d.by;if(b<e){f=b+1|0;g=Ba(c,b);if(a.X(g)){b=a.r.k(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=Ba(c,f);if(Kc(g,f)&&a.X(EJ(g,f)))return a.r.k(b,c,d);}}return (-1);}
function AWg(a,b){return a.h0.X(b);}
function ATM(a,b){if(b instanceof EZ)return a.h0.X(b.kB);if(b instanceof Fx)return a.h0.X(b.gv);if(b instanceof EP)return KM(a.h0,b.h0);if(!(b instanceof Fp))return 1;return KM(a.h0,b.j6);}
function AXt(a){return a.h0;}
function A99(a,b){a.r=b;}
function AV0(a,b){return 1;}
function MU(){EP.call(this);}
function AXh(a,b){return a.h0.X(GP(GN(b)));}
function ZD(){var a=this;CI.call(a);a.Dn=null;a.F7=0;}
function AWQ(a){var b=new ZD();AYZ(b,a);return b;}
function AYZ(a,b){EO(a);a.Dn=b.sR();a.F7=b.cj;}
function A65(a,b,c){return !a.Dn.X(EU(FG(Ba(c,b))))?(-1):1;}
function Fp(){var a=this;CI.call(a);a.j6=null;a.GC=0;}
function A1k(a){var b=new Fp();AZQ(b,a);return b;}
function AZQ(a,b){EO(a);a.j6=b.sR();a.GC=b.cj;}
function Tg(a,b,c){return !a.j6.X(Ba(c,b))?(-1):1;}
function AZx(a,b){if(b instanceof Fx)return a.j6.X(b.gv);if(b instanceof Fp)return KM(a.j6,b.j6);if(!(b instanceof EP)){if(!(b instanceof EZ))return 1;return 0;}return KM(a.j6,b.h0);}
function A8K(a){return a.j6;}
function Uf(){var a=this;CE.call(a);a.jY=null;a.ya=null;a.oA=0;}
function A$E(a,b){var c=new Uf();A3D(c,a,b);return c;}
function A3D(a,b,c){Cz(a);a.jY=b;a.oA=c;}
function AYl(a,b){a.r=b;}
function Qg(a){if(a.ya===null)a.ya=Tl(a.jY);return a.ya;}
function AS3(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.by;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Ba(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.oA)return (-1);while(true){if(l>=a.oA)return a.r.k(i,c,d);if(m[l]!=a.jY.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Ba(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Ba(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.oA==3&&f[0]==a.jY.data[0]&&f[1]==a.jY.data[1]&&f[2]==a.jY.data[2]?a.r.k(b,c,d):(-1);}return a.oA==2&&f[0]==a.jY.data[0]&&f[1]==a.jY.data[1]?a.r.k(k,c,d):(-1);}return (-1);}return (-1);}
function A4s(a,b){return b instanceof Uf&&!DC(Qg(b),Qg(a))?0:1;}
function A1r(a,b){return 1;}
function Fx(){CI.call(this);this.gv=0;}
function AAn(a){var b=new Fx();AZS(b,a);return b;}
function AZS(a,b){EO(a);a.gv=b;}
function A6X(a){return 1;}
function AWM(a,b,c){return a.gv!=Ba(c,b)?(-1):1;}
function AVO(a,b,c,d){var e,f,g,h;if(!(c instanceof B4))return Jl(a,b,c,d);e=c;f=d.by;while(true){if(b>=f)return (-1);g=Hl(e,a.gv,b);if(g<0)return (-1);h=a.r;b=g+1|0;if(h.k(b,c,d)>=0)break;}return g;}
function AXu(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jw(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=Io(f,a.gv,c);if(g<0)break a;if(g<b)break a;if(a.r.k(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AT9(a){return a.gv;}
function A1l(a,b){if(b instanceof Fx)return b.gv!=a.gv?0:1;if(!(b instanceof Fp)){if(b instanceof EP)return b.X(a.gv);if(!(b instanceof EZ))return 1;return 0;}return Tg(b,0,SO(a.gv))<=0?0:1;}
function AGX(){CI.call(this);this.BW=0;}
function A9j(a){var b=new AGX();A74(b,a);return b;}
function A74(a,b){EO(a);a.BW=EU(FG(b));}
function A26(a,b,c){return a.BW!=EU(FG(Ba(c,b)))?(-1):1;}
function XX(){var a=this;CI.call(a);a.Bw=0;a.Cj=0;}
function A4J(a){var b=new XX();A0p(b,a);return b;}
function A0p(a,b){EO(a);a.Bw=b;a.Cj=Kl(b);}
function ATi(a,b,c){return a.Bw!=Ba(c,b)&&a.Cj!=Ba(c,b)?(-1):1;}
function GI(){var a=this;CE.call(a);a.pY=0;a.un=null;a.tP=null;a.tN=0;}
function Bc$(a,b){var c=new GI();Pm(c,a,b);return c;}
function Pm(a,b,c){Cz(a);a.pY=1;a.tP=b;a.tN=c;}
function A_q(a,b){a.r=b;}
function AZk(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.by;if(b>=f)return (-1);g=LM(a,b,c,f);h=b+a.pY|0;i=AQZ(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Ds(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LM(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=AQZ(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.pY|0;if(h>=f){b=k;break a;}g=LM(a,h,c,f);b=k;}}}if(b!=a.tN)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.r.k(h,c,d);if(i[g]!=a.tP.data[g])break;g=g+1|0;}return (-1);}
function SG(a){var b,c;if(a.un===null){b=new V;X(b);c=0;while(c<a.tN){Hm(b,ID(a.tP.data[c]));c=c+1|0;}a.un=W(b);}return a.un;}
function LM(a,b,c,d){var e,f,g;a.pY=1;if(b>=(d-1|0))e=Ba(c,b);else{d=b+1|0;e=Ba(c,b);f=Ba(c,d);if(Kc(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Du(g[0])&&DS(g[1])?EJ(g[0],g[1]):g[0];a.pY=2;}}return e;}
function AXH(a,b){return b instanceof GI&&!DC(SG(b),SG(a))?0:1;}
function A9f(a,b){return 1;}
function SU(){GI.call(this);}
function Wc(){GI.call(this);}
function Td(){DX.call(this);}
function A4Z(a,b,c,d){var e;while(true){e=a.bQ.k(b,c,d);if(e<=0)break;b=e;}return a.r.k(b,c,d);}
function UK(){DX.call(this);}
function A7X(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bQ.k(e,c,d);if(b<=e)break;e=b;}b=e;}return a.r.k(b,c,d);}
function Hz(){DX.call(this);}
function A96(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.bQ.k(b,c,d);if(e>=0)return e;return a.r.k(b,c,d);}
function A$Z(a,b){a.r=b;a.bQ.cb(b);}
function PV(){Hz.call(this);}
function AXr(a,b,c,d){var e;e=a.bQ.k(b,c,d);if(e<=0)e=b;return a.r.k(e,c,d);}
function A8k(a,b){a.r=b;}
function G$(){var a=this;DX.call(a);a.kG=null;a.hv=0;}
function Bmw(a,b,c,d,e){var f=new G$();MT(f,a,b,c,d,e);return f;}
function MT(a,b,c,d,e,f){Ef(a,c,d,e);a.kG=b;a.hv=f;}
function A_T(a,b,c,d){var e,f;e=Tt(d,a.hv);if(!a.bQ.b4(d))return a.r.k(b,c,d);if(e>=a.kG.ip)return a.r.k(b,c,d);f=a.hv;e=e+1|0;FJ(d,f,e);f=a.bQ.k(b,c,d);if(f>=0){FJ(d,a.hv,0);return f;}f=a.hv;e=e+(-1)|0;FJ(d,f,e);if(e>=a.kG.jf)return a.r.k(b,c,d);FJ(d,a.hv,0);return (-1);}
function O2(){G$.call(this);}
function AW4(a,b,c,d){var e,f,g;e=0;f=a.kG.ip;a:{while(true){g=a.bQ.k(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.kG.jf)return (-1);return a.r.k(b,c,d);}
function QC(){DX.call(this);}
function A2k(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.r.k(b,c,d);if(e>=0)return e;return a.bQ.k(b,c,d);}
function U3(){Hz.call(this);}
function AUr(a,b,c,d){var e;if(!a.bQ.b4(d))return a.r.k(b,c,d);e=a.r.k(b,c,d);if(e<0)e=a.bQ.k(b,c,d);return e;}
function RZ(){G$.call(this);}
function A3O(a,b,c,d){var e,f;e=Tt(d,a.hv);if(!a.bQ.b4(d))return a.r.k(b,c,d);if(e>=a.kG.ip){FJ(d,a.hv,0);return a.r.k(b,c,d);}if(e<a.kG.jf){FJ(d,a.hv,e+1|0);f=a.bQ.k(b,c,d);}else{f=a.r.k(b,c,d);if(f>=0){FJ(d,a.hv,0);return f;}FJ(d,a.hv,e+1|0);f=a.bQ.k(b,c,d);}return f;}
function QD(){E6.call(this);}
function A_L(a,b,c,d){var e;e=d.by;if(e>b)return a.r.eY(b,e,c,d);return a.r.k(b,c,d);}
function A0X(a,b,c,d){var e;e=d.by;if(a.r.eY(b,e,c,d)>=0)return b;return (-1);}
function T5(){E6.call(this);this.uw=null;}
function AZy(a,b,c,d){var e,f;e=d.by;f=Ww(a,b,e,c);if(f>=0)e=f;if(e>b)return a.r.eY(b,e,c,d);return a.r.k(b,c,d);}
function AS6(a,b,c,d){var e,f,g,h;e=d.by;f=a.r.eK(b,c,d);if(f<0)return (-1);g=Ww(a,f,e,c);if(g>=0)e=g;g=a.r.eY(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.uw.ox(Ba(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function Ww(a,b,c,d){while(true){if(b>=c)return (-1);if(a.uw.ox(Ba(d,b)))break;b=b+1|0;}return b;}
function Gm(){D.call(this);}
var Bmx=null;var Bmy=null;function Uy(b){if(!(b&1)){if(Bmy!==null)return Bmy;Bmy=new WH;return Bmy;}if(Bmx!==null)return Bmx;Bmx=new WG;return Bmx;}
function XD(){D8.call(this);}
function ATE(a,b,c,d){var e;a:{while(true){if((b+a.cN.ec()|0)>d.by)break a;e=a.cN.dn(b,c);if(e<1)break;b=b+e|0;}}return a.r.k(b,c,d);}
function Sy(){FY.call(this);}
function AYI(a,b,c,d){var e;if((b+a.cN.ec()|0)<=d.by){e=a.cN.dn(b,c);if(e>=1)b=b+e|0;}return a.r.k(b,c,d);}
function Ur(){GD.call(this);}
function A9O(a,b,c,d){var e,f,g,h,i;e=a.k1.jf;f=a.k1.ip;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.cN.ec()|0)>d.by)break a;h=a.cN.dn(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.r.k(b,c,d);}if((b+a.cN.ec()|0)>d.by){d.hp=1;return (-1);}i=a.cN.dn(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function U1(){D8.call(this);}
function AZr(a,b,c,d){var e;while(true){e=a.r.k(b,c,d);if(e>=0)break;if((b+a.cN.ec()|0)<=d.by){e=a.cN.dn(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function We(){FY.call(this);}
function ATI(a,b,c,d){var e;e=a.r.k(b,c,d);if(e>=0)return e;return a.bQ.k(b,c,d);}
function Qn(){GD.call(this);}
function A9W(a,b,c,d){var e,f,g,h,i;e=a.k1.jf;f=a.k1.ip;g=0;while(true){if(g>=e){a:{while(true){h=a.r.k(b,c,d);if(h>=0)break;if((b+a.cN.ec()|0)<=d.by){h=a.cN.dn(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.cN.ec()|0)>d.by){d.hp=1;return (-1);}i=a.cN.dn(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function ABU(){Co.call(this);}
function A1p(){var a=new ABU();AVs(a);return a;}
function AVs(a){Cz(a);}
function A7n(a,b,c,d){if(b&&!(d.lq&&b==d.fi))return (-1);return a.r.k(b,c,d);}
function A6Q(a,b){return 0;}
function AAu(){Co.call(this);this.Bk=0;}
function A$r(a){var b=new AAu();AXm(b,a);return b;}
function AXm(a,b){Cz(a);a.Bk=b;}
function A4j(a,b,c,d){var e,f,g;e=b<d.by?Ba(c,b):32;f=!b?32:Ba(c,b-1|0);g=d.oh?0:d.fi;return (e!=32&&!U7(a,e,b,g,c)?0:1)^(f!=32&&!U7(a,f,b-1|0,g,c)?0:1)^a.Bk?(-1):a.r.k(b,c,d);}
function A4q(a,b){return 0;}
function U7(a,b,c,d,e){var f;if(!Lh(b)&&b!=95){a:{if(Do(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Ba(e,c);if(Lh(f))return 0;if(Do(f)!=6)return 1;}}return 1;}return 0;}
function AJy(){Co.call(this);}
function Baw(){var a=new AJy();A0R(a);return a;}
function A0R(a){Cz(a);}
function AXl(a,b,c,d){if(b!=d.k3)return (-1);return a.r.k(b,c,d);}
function A2H(a,b){return 0;}
function SR(){Co.call(this);this.mf=0;}
function Bbi(a){var b=new SR();AQG(b,a);return b;}
function AQG(a,b){Cz(a);a.mf=b;}
function A88(a,b,c,d){var e,f,g;e=!d.lq?Bi(c):d.by;if(b>=e){Cv(d,a.mf,0);return a.r.k(b,c,d);}f=e-b|0;if(f==2&&Ba(c,b)==13&&Ba(c,b+1|0)==10){Cv(d,a.mf,0);return a.r.k(b,c,d);}a:{if(f==1){g=Ba(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Cv(d,a.mf,0);return a.r.k(b,c,d);}
function A4R(a,b){var c;c=!Er(b,a.mf)?0:1;Cv(b,a.mf,(-1));return c;}
function ARc(){Co.call(this);}
function Bbq(){var a=new ARc();AXb(a);return a;}
function AXb(a){Cz(a);}
function A8D(a,b,c,d){if(b<(d.oh?Bi(c):d.by))return (-1);d.hp=1;d.Jp=1;return a.r.k(b,c,d);}
function A25(a,b){return 0;}
function AIW(){Co.call(this);this.DQ=null;}
function BcV(a){var b=new AIW();A8$(b,a);return b;}
function A8$(a,b){Cz(a);a.DQ=b;}
function A4M(a,b,c,d){a:{if(b!=d.by){if(!b)break a;if(d.lq&&b==d.fi)break a;if(a.DQ.Eg(Ba(c,b-1|0),Ba(c,b)))break a;}return (-1);}return a.r.k(b,c,d);}
function AWt(a,b){return 0;}
function AGm(){CE.call(this);}
function BbA(){var a=new AGm();A8t(a);return a;}
function A8t(a){Cz(a);}
function A2p(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;if(f>e){d.hp=1;return (-1);}g=Ba(c,b);if(Du(g)){h=b+2|0;if(h<=e&&Kc(g,Ba(c,f)))return a.r.k(h,c,d);}return a.r.k(f,c,d);}
function A4v(a,b){a.r=b;}
function A8p(a){return (-2147483602);}
function A4t(a,b){return 1;}
function ZP(){CE.call(this);this.uV=null;}
function Bba(a){var b=new ZP();AUZ(b,a);return b;}
function AUZ(a,b){Cz(a);a.uV=b;}
function A8y(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;if(f>e){d.hp=1;return (-1);}g=Ba(c,b);if(Du(g)){b=b+2|0;if(b<=e){h=Ba(c,f);if(Kc(g,h))return a.uV.ox(EJ(g,h))?(-1):a.r.k(b,c,d);}}return a.uV.ox(g)?(-1):a.r.k(f,c,d);}
function A9E(a,b){a.r=b;}
function ASR(a){return (-2147483602);}
function A2w(a,b){return 1;}
function AQR(){Co.call(this);this.pO=0;}
function BaX(a){var b=new AQR();A55(b,a);return b;}
function A55(a,b){Cz(a);a.pO=b;}
function AXO(a,b,c,d){var e;e=!d.lq?Bi(c):d.by;if(b>=e){Cv(d,a.pO,0);return a.r.k(b,c,d);}if((e-b|0)==1&&Ba(c,b)==10){Cv(d,a.pO,1);return a.r.k(b+1|0,c,d);}return (-1);}
function A51(a,b){var c;c=!Er(b,a.pO)?0:1;Cv(b,a.pO,(-1));return c;}
function AOa(){Co.call(this);this.oo=0;}
function BaG(a){var b=new AOa();A6n(b,a);return b;}
function A6n(a,b){Cz(a);a.oo=b;}
function AZc(a,b,c,d){if((!d.lq?Bi(c)-b|0:d.by-b|0)<=0){Cv(d,a.oo,0);return a.r.k(b,c,d);}if(Ba(c,b)!=10)return (-1);Cv(d,a.oo,1);return a.r.k(b+1|0,c,d);}
function A5X(a,b){var c;c=!Er(b,a.oo)?0:1;Cv(b,a.oo,(-1));return c;}
function AIg(){Co.call(this);this.lI=0;}
function A__(a){var b=new AIg();A_V(b,a);return b;}
function A_V(a,b){Cz(a);a.lI=b;}
function A6L(a,b,c,d){var e,f,g;e=!d.lq?Bi(c)-b|0:d.fi-b|0;if(!e){Cv(d,a.lI,0);return a.r.k(b,c,d);}if(e<2){f=Ba(c,b);g=97;}else{f=Ba(c,b);g=Ba(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Cv(d,a.lI,0);return a.r.k(b,c,d);case 13:if(g!=10){Cv(d,a.lI,0);return a.r.k(b,c,d);}Cv(d,a.lI,0);return a.r.k(b,c,d);default:}return (-1);}
function AU3(a,b){var c;c=!Er(b,a.lI)?0:1;Cv(b,a.lI,(-1));return c;}
function IZ(){var a=this;CE.call(a);a.y9=0;a.mL=0;}
function Bc6(a,b){var c=new IZ();PK(c,a,b);return c;}
function PK(a,b,c){Cz(a);a.y9=b;a.mL=c;}
function ATF(a,b,c,d){var e,f,g,h;e=HM(a,d);if(e!==null&&(b+Bi(e)|0)<=d.by){f=0;while(true){if(f>=Bi(e)){Cv(d,a.mL,Bi(e));return a.r.k(b+Bi(e)|0,c,d);}g=Ba(e,f);h=b+f|0;if(g!=Ba(c,h)&&Kl(Ba(e,f))!=Ba(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A9b(a,b){a.r=b;}
function HM(a,b){return ANb(b,a.y9);}
function A0l(a,b){var c;c=!Er(b,a.mL)?0:1;Cv(b,a.mL,(-1));return c;}
function AQ2(){IZ.call(this);}
function BbO(a,b){var c=new AQ2();A$S(c,a,b);return c;}
function A$S(a,b,c){PK(a,b,c);}
function AU$(a,b,c,d){var e,f;e=HM(a,d);if(e!==null&&(b+Bi(e)|0)<=d.by){f=!Wl(c,e,b)?(-1):Bi(e);if(f<0)return (-1);Cv(d,a.mL,f);return a.r.k(b+f|0,c,d);}return (-1);}
function A1x(a,b,c,d){var e,f,g;e=HM(a,d);f=d.fi;if(e!==null&&(b+Bi(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=AKO(g,e,b);if(b<0)return (-1);if(a.r.k(b+Bi(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ATx(a,b,c,d,e){var f,g,h;f=HM(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=AAE(g,f,c);if(h<0)break a;if(h<b)break a;if(a.r.k(h+Bi(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A7R(a,b){return 1;}
function AMm(){IZ.call(this);}
function BaF(a,b){var c=new AMm();AWn(c,a,b);return c;}
function AWn(a,b,c){PK(a,b,c);}
function AYe(a,b,c,d){var e,f;e=HM(a,d);if(e!==null&&(b+Bi(e)|0)<=d.by){f=0;while(true){if(f>=Bi(e)){Cv(d,a.mL,Bi(e));return a.r.k(b+Bi(e)|0,c,d);}if(EU(FG(Ba(e,f)))!=EU(FG(Ba(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AM0(){var a=this;CI.call(a);a.e6=null;a.w7=null;a.u7=null;}
function BaI(a){var b=new AM0();A4$(b,a);return b;}
function A4$(a,b){var c;EO(a);a.e6=W(b);a.dl=OE(b);a.w7=A8o(a.dl);a.u7=A8o(a.dl);c=0;while(c<(a.dl-1|0)){Qp(a.w7,Ba(a.e6,c),(a.dl-c|0)-1|0);Qp(a.u7,Ba(a.e6,(a.dl-c|0)-1|0),(a.dl-c|0)-1|0);c=c+1|0;}}
function AVo(a,b,c){return !LJ(a,c,b)?(-1):a.dl;}
function A4i(a,b,c,d){var e,f;e=d.by;while(true){if(b>e)return (-1);f=ARf(a,c,b,e);if(f<0)return (-1);if(a.r.k(f+a.dl|0,c,d)>=0)break;b=f+1|0;}return f;}
function A58(a,b,c,d,e){while(true){if(c<b)return (-1);c=AQE(a,d,b,c);if(c<0)return (-1);if(a.r.k(c+a.dl|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWW(a,b){var c;if(b instanceof Fx)return b.gv!=Ba(a.e6,0)?0:1;if(b instanceof Fp)return Tg(b,0,Ex(a.e6,0,1))<=0?0:1;if(!(b instanceof EP)){if(!(b instanceof EZ))return 1;return Bi(a.e6)>1&&b.kB==EJ(Ba(a.e6,0),Ba(a.e6,1))?1:0;}a:{b:{b=b;if(!b.X(Ba(a.e6,0))){if(Bi(a.e6)<=1)break b;if(!b.X(EJ(Ba(a.e6,0),Ba(a.e6,1))))break b;}c=1;break a;}c=0;}return c;}
function ARf(a,b,c,d){var e,f;e=Ba(a.e6,a.dl-1|0);while(true){if(c>(d-a.dl|0))return (-1);f=Ba(b,(c+a.dl|0)-1|0);if(f==e&&LJ(a,b,c))break;c=c+VO(a.w7,f)|0;}return c;}
function AQE(a,b,c,d){var e,f,g;e=Ba(a.e6,0);f=(Bi(b)-d|0)-a.dl|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=Ba(b,d);if(g==e&&LJ(a,b,d))break;d=d-VO(a.u7,g)|0;}return d;}
function LJ(a,b,c){var d;d=0;while(d<a.dl){if(Ba(b,d+c|0)!=Ba(a.e6,d))return 0;d=d+1|0;}return 1;}
function XO(){CI.call(this);this.sN=null;}
function Bc7(a){var b=new XO();A$u(b,a);return b;}
function A$u(a,b){var c,d;EO(a);c=new V;X(c);d=0;while(d<OE(b)){DQ(c,EU(FG(AIi(b,d))));d=d+1|0;}a.sN=W(c);a.dl=Kh(c);}
function AYh(a,b,c){var d;d=0;while(true){if(d>=Bi(a.sN))return Bi(a.sN);if(Ba(a.sN,d)!=EU(FG(Ba(c,b+d|0))))break;d=d+1|0;}return (-1);}
function O5(){CI.call(this);this.pM=null;}
function A9Q(a,b,c){var d,e,f;d=0;while(true){if(d>=Bi(a.pM))return Bi(a.pM);e=Ba(a.pM,d);f=b+d|0;if(e!=Ba(c,f)&&Kl(Ba(a.pM,d))!=Ba(c,f))break;d=d+1|0;}return (-1);}
function Ic(){D.call(this);}
var Bmz=null;var BmA=null;var BmB=null;function BmC(){var a=new Ic();AGb(a);return a;}
function AGb(a){return;}
function ARA(a,b){var c,d,e;c=0;while(true){if(c>=BmB.data.length){d=new MV;Bo(d,B(3));d.Hf=B(3);d.Jy=b;M(d);}e=BmB.data[c].data;if(DC(b,e[0]))break;c=c+1|0;}return e[1];}
function AAw(){var b,c,d,e;Bmz=Bbn();BmA=Bcn();b=J($rt_arraycls(D),194);c=b.data;d=J(D,2);e=d.data;e[0]=B(642);e[1]=BbD();c[0]=d;d=J(D,2);e=d.data;e[0]=B(643);e[1]=A_7();c[1]=d;d=J(D,2);e=d.data;e[0]=B(644);e[1]=BcT();c[2]=d;d=J(D,2);e=d.data;e[0]=B(645);e[1]=Bc1();c[3]=d;d=J(D,2);e=d.data;e[0]=B(646);e[1]=BmA;c[4]=d;d=J(D,2);e=d.data;e[0]=B(647);e[1]=Bct();c[5]=d;d=J(D,2);e=d.data;e[0]=B(648);e[1]=BaL();c[6]=d;d=J(D,2);e=d.data;e[0]=B(649);e[1]=BbQ();c[7]=d;d=J(D,2);e=d.data;e[0]=B(650);e[1]=BbN();c[8]=d;d
=J(D,2);e=d.data;e[0]=B(651);e[1]=Bak();c[9]=d;d=J(D,2);e=d.data;e[0]=B(652);e[1]=Bay();c[10]=d;d=J(D,2);e=d.data;e[0]=B(653);e[1]=BbS();c[11]=d;d=J(D,2);e=d.data;e[0]=B(654);e[1]=Ba7();c[12]=d;d=J(D,2);e=d.data;e[0]=B(655);e[1]=A_5();c[13]=d;d=J(D,2);e=d.data;e[0]=B(656);e[1]=BcX();c[14]=d;d=J(D,2);e=d.data;e[0]=B(657);e[1]=Bax();c[15]=d;d=J(D,2);e=d.data;e[0]=B(658);e[1]=Bcr();c[16]=d;d=J(D,2);e=d.data;e[0]=B(659);e[1]=Bb6();c[17]=d;d=J(D,2);e=d.data;e[0]=B(660);e[1]=Bcs();c[18]=d;d=J(D,2);e=d.data;e[0]=B(661);e[1]
=Ban();c[19]=d;d=J(D,2);e=d.data;e[0]=B(662);e[1]=Bc2();c[20]=d;d=J(D,2);e=d.data;e[0]=B(663);e[1]=Bb2();c[21]=d;d=J(D,2);e=d.data;e[0]=B(664);e[1]=BaZ();c[22]=d;d=J(D,2);e=d.data;e[0]=B(665);e[1]=BcS();c[23]=d;d=J(D,2);e=d.data;e[0]=B(666);e[1]=BcP();c[24]=d;d=J(D,2);e=d.data;e[0]=B(667);e[1]=Bbz();c[25]=d;d=J(D,2);e=d.data;e[0]=B(668);e[1]=Bam();c[26]=d;d=J(D,2);e=d.data;e[0]=B(669);e[1]=BcI();c[27]=d;d=J(D,2);e=d.data;e[0]=B(670);e[1]=Bmz;c[28]=d;d=J(D,2);e=d.data;e[0]=B(671);e[1]=Ba1();c[29]=d;d=J(D,2);e
=d.data;e[0]=B(44);e[1]=BbR();c[30]=d;d=J(D,2);e=d.data;e[0]=B(672);e[1]=Bmz;c[31]=d;d=J(D,2);e=d.data;e[0]=B(58);e[1]=A_4();c[32]=d;d=J(D,2);e=d.data;e[0]=B(673);e[1]=BmA;c[33]=d;d=J(D,2);e=d.data;e[0]=B(59);e[1]=BaE();c[34]=d;d=J(D,2);e=d.data;e[0]=B(674);e[1]=U(0,127);c[35]=d;d=J(D,2);e=d.data;e[0]=B(675);e[1]=U(128,255);c[36]=d;d=J(D,2);e=d.data;e[0]=B(676);e[1]=U(256,383);c[37]=d;d=J(D,2);e=d.data;e[0]=B(677);e[1]=U(384,591);c[38]=d;d=J(D,2);e=d.data;e[0]=B(678);e[1]=U(592,687);c[39]=d;d=J(D,2);e=d.data;e[0]
=B(679);e[1]=U(688,767);c[40]=d;d=J(D,2);e=d.data;e[0]=B(680);e[1]=U(768,879);c[41]=d;d=J(D,2);e=d.data;e[0]=B(681);e[1]=U(880,1023);c[42]=d;d=J(D,2);e=d.data;e[0]=B(682);e[1]=U(1024,1279);c[43]=d;d=J(D,2);e=d.data;e[0]=B(683);e[1]=U(1280,1327);c[44]=d;d=J(D,2);e=d.data;e[0]=B(684);e[1]=U(1328,1423);c[45]=d;d=J(D,2);e=d.data;e[0]=B(685);e[1]=U(1424,1535);c[46]=d;d=J(D,2);e=d.data;e[0]=B(686);e[1]=U(1536,1791);c[47]=d;d=J(D,2);e=d.data;e[0]=B(687);e[1]=U(1792,1871);c[48]=d;d=J(D,2);e=d.data;e[0]=B(688);e[1]=
U(1872,1919);c[49]=d;d=J(D,2);e=d.data;e[0]=B(689);e[1]=U(1920,1983);c[50]=d;d=J(D,2);e=d.data;e[0]=B(690);e[1]=U(2304,2431);c[51]=d;d=J(D,2);e=d.data;e[0]=B(691);e[1]=U(2432,2559);c[52]=d;d=J(D,2);e=d.data;e[0]=B(692);e[1]=U(2560,2687);c[53]=d;d=J(D,2);e=d.data;e[0]=B(693);e[1]=U(2688,2815);c[54]=d;d=J(D,2);e=d.data;e[0]=B(694);e[1]=U(2816,2943);c[55]=d;d=J(D,2);e=d.data;e[0]=B(695);e[1]=U(2944,3071);c[56]=d;d=J(D,2);e=d.data;e[0]=B(696);e[1]=U(3072,3199);c[57]=d;d=J(D,2);e=d.data;e[0]=B(697);e[1]=U(3200,3327);c[58]
=d;d=J(D,2);e=d.data;e[0]=B(698);e[1]=U(3328,3455);c[59]=d;d=J(D,2);e=d.data;e[0]=B(699);e[1]=U(3456,3583);c[60]=d;d=J(D,2);e=d.data;e[0]=B(700);e[1]=U(3584,3711);c[61]=d;d=J(D,2);e=d.data;e[0]=B(701);e[1]=U(3712,3839);c[62]=d;d=J(D,2);e=d.data;e[0]=B(702);e[1]=U(3840,4095);c[63]=d;d=J(D,2);e=d.data;e[0]=B(703);e[1]=U(4096,4255);c[64]=d;d=J(D,2);e=d.data;e[0]=B(704);e[1]=U(4256,4351);c[65]=d;d=J(D,2);e=d.data;e[0]=B(705);e[1]=U(4352,4607);c[66]=d;d=J(D,2);e=d.data;e[0]=B(706);e[1]=U(4608,4991);c[67]=d;d=J(D,
2);e=d.data;e[0]=B(707);e[1]=U(4992,5023);c[68]=d;d=J(D,2);e=d.data;e[0]=B(708);e[1]=U(5024,5119);c[69]=d;d=J(D,2);e=d.data;e[0]=B(709);e[1]=U(5120,5759);c[70]=d;d=J(D,2);e=d.data;e[0]=B(710);e[1]=U(5760,5791);c[71]=d;d=J(D,2);e=d.data;e[0]=B(711);e[1]=U(5792,5887);c[72]=d;d=J(D,2);e=d.data;e[0]=B(712);e[1]=U(5888,5919);c[73]=d;d=J(D,2);e=d.data;e[0]=B(713);e[1]=U(5920,5951);c[74]=d;d=J(D,2);e=d.data;e[0]=B(714);e[1]=U(5952,5983);c[75]=d;d=J(D,2);e=d.data;e[0]=B(715);e[1]=U(5984,6015);c[76]=d;d=J(D,2);e=d.data;e[0]
=B(716);e[1]=U(6016,6143);c[77]=d;d=J(D,2);e=d.data;e[0]=B(717);e[1]=U(6144,6319);c[78]=d;d=J(D,2);e=d.data;e[0]=B(718);e[1]=U(6400,6479);c[79]=d;d=J(D,2);e=d.data;e[0]=B(719);e[1]=U(6480,6527);c[80]=d;d=J(D,2);e=d.data;e[0]=B(720);e[1]=U(6528,6623);c[81]=d;d=J(D,2);e=d.data;e[0]=B(721);e[1]=U(6624,6655);c[82]=d;d=J(D,2);e=d.data;e[0]=B(722);e[1]=U(6656,6687);c[83]=d;d=J(D,2);e=d.data;e[0]=B(723);e[1]=U(7424,7551);c[84]=d;d=J(D,2);e=d.data;e[0]=B(724);e[1]=U(7552,7615);c[85]=d;d=J(D,2);e=d.data;e[0]=B(725);e[1]
=U(7616,7679);c[86]=d;d=J(D,2);e=d.data;e[0]=B(726);e[1]=U(7680,7935);c[87]=d;d=J(D,2);e=d.data;e[0]=B(727);e[1]=U(7936,8191);c[88]=d;d=J(D,2);e=d.data;e[0]=B(728);e[1]=U(8192,8303);c[89]=d;d=J(D,2);e=d.data;e[0]=B(729);e[1]=U(8304,8351);c[90]=d;d=J(D,2);e=d.data;e[0]=B(730);e[1]=U(8352,8399);c[91]=d;d=J(D,2);e=d.data;e[0]=B(731);e[1]=U(8400,8447);c[92]=d;d=J(D,2);e=d.data;e[0]=B(732);e[1]=U(8448,8527);c[93]=d;d=J(D,2);e=d.data;e[0]=B(733);e[1]=U(8528,8591);c[94]=d;d=J(D,2);e=d.data;e[0]=B(734);e[1]=U(8592,
8703);c[95]=d;d=J(D,2);e=d.data;e[0]=B(735);e[1]=U(8704,8959);c[96]=d;d=J(D,2);e=d.data;e[0]=B(736);e[1]=U(8960,9215);c[97]=d;d=J(D,2);e=d.data;e[0]=B(737);e[1]=U(9216,9279);c[98]=d;d=J(D,2);e=d.data;e[0]=B(738);e[1]=U(9280,9311);c[99]=d;d=J(D,2);e=d.data;e[0]=B(739);e[1]=U(9312,9471);c[100]=d;d=J(D,2);e=d.data;e[0]=B(740);e[1]=U(9472,9599);c[101]=d;d=J(D,2);e=d.data;e[0]=B(741);e[1]=U(9600,9631);c[102]=d;d=J(D,2);e=d.data;e[0]=B(742);e[1]=U(9632,9727);c[103]=d;d=J(D,2);e=d.data;e[0]=B(743);e[1]=U(9728,9983);c[104]
=d;d=J(D,2);e=d.data;e[0]=B(744);e[1]=U(9984,10175);c[105]=d;d=J(D,2);e=d.data;e[0]=B(745);e[1]=U(10176,10223);c[106]=d;d=J(D,2);e=d.data;e[0]=B(746);e[1]=U(10224,10239);c[107]=d;d=J(D,2);e=d.data;e[0]=B(747);e[1]=U(10240,10495);c[108]=d;d=J(D,2);e=d.data;e[0]=B(748);e[1]=U(10496,10623);c[109]=d;d=J(D,2);e=d.data;e[0]=B(749);e[1]=U(10624,10751);c[110]=d;d=J(D,2);e=d.data;e[0]=B(750);e[1]=U(10752,11007);c[111]=d;d=J(D,2);e=d.data;e[0]=B(751);e[1]=U(11008,11263);c[112]=d;d=J(D,2);e=d.data;e[0]=B(752);e[1]=U(11264,
11359);c[113]=d;d=J(D,2);e=d.data;e[0]=B(753);e[1]=U(11392,11519);c[114]=d;d=J(D,2);e=d.data;e[0]=B(754);e[1]=U(11520,11567);c[115]=d;d=J(D,2);e=d.data;e[0]=B(755);e[1]=U(11568,11647);c[116]=d;d=J(D,2);e=d.data;e[0]=B(756);e[1]=U(11648,11743);c[117]=d;d=J(D,2);e=d.data;e[0]=B(757);e[1]=U(11776,11903);c[118]=d;d=J(D,2);e=d.data;e[0]=B(758);e[1]=U(11904,12031);c[119]=d;d=J(D,2);e=d.data;e[0]=B(759);e[1]=U(12032,12255);c[120]=d;d=J(D,2);e=d.data;e[0]=B(760);e[1]=U(12272,12287);c[121]=d;d=J(D,2);e=d.data;e[0]=B(761);e[1]
=U(12288,12351);c[122]=d;d=J(D,2);e=d.data;e[0]=B(762);e[1]=U(12352,12447);c[123]=d;d=J(D,2);e=d.data;e[0]=B(763);e[1]=U(12448,12543);c[124]=d;d=J(D,2);e=d.data;e[0]=B(764);e[1]=U(12544,12591);c[125]=d;d=J(D,2);e=d.data;e[0]=B(765);e[1]=U(12592,12687);c[126]=d;d=J(D,2);e=d.data;e[0]=B(766);e[1]=U(12688,12703);c[127]=d;d=J(D,2);e=d.data;e[0]=B(767);e[1]=U(12704,12735);c[128]=d;d=J(D,2);e=d.data;e[0]=B(768);e[1]=U(12736,12783);c[129]=d;d=J(D,2);e=d.data;e[0]=B(769);e[1]=U(12784,12799);c[130]=d;d=J(D,2);e=d.data;e[0]
=B(770);e[1]=U(12800,13055);c[131]=d;d=J(D,2);e=d.data;e[0]=B(771);e[1]=U(13056,13311);c[132]=d;d=J(D,2);e=d.data;e[0]=B(772);e[1]=U(13312,19893);c[133]=d;d=J(D,2);e=d.data;e[0]=B(773);e[1]=U(19904,19967);c[134]=d;d=J(D,2);e=d.data;e[0]=B(774);e[1]=U(19968,40959);c[135]=d;d=J(D,2);e=d.data;e[0]=B(775);e[1]=U(40960,42127);c[136]=d;d=J(D,2);e=d.data;e[0]=B(776);e[1]=U(42128,42191);c[137]=d;d=J(D,2);e=d.data;e[0]=B(777);e[1]=U(42752,42783);c[138]=d;d=J(D,2);e=d.data;e[0]=B(778);e[1]=U(43008,43055);c[139]=d;d=J(D,
2);e=d.data;e[0]=B(779);e[1]=U(44032,55203);c[140]=d;d=J(D,2);e=d.data;e[0]=B(780);e[1]=U(55296,56191);c[141]=d;d=J(D,2);e=d.data;e[0]=B(781);e[1]=U(56192,56319);c[142]=d;d=J(D,2);e=d.data;e[0]=B(782);e[1]=U(56320,57343);c[143]=d;d=J(D,2);e=d.data;e[0]=B(783);e[1]=U(57344,63743);c[144]=d;d=J(D,2);e=d.data;e[0]=B(784);e[1]=U(63744,64255);c[145]=d;d=J(D,2);e=d.data;e[0]=B(785);e[1]=U(64256,64335);c[146]=d;d=J(D,2);e=d.data;e[0]=B(786);e[1]=U(64336,65023);c[147]=d;d=J(D,2);e=d.data;e[0]=B(787);e[1]=U(65024,65039);c[148]
=d;d=J(D,2);e=d.data;e[0]=B(788);e[1]=U(65040,65055);c[149]=d;d=J(D,2);e=d.data;e[0]=B(789);e[1]=U(65056,65071);c[150]=d;d=J(D,2);e=d.data;e[0]=B(790);e[1]=U(65072,65103);c[151]=d;d=J(D,2);e=d.data;e[0]=B(791);e[1]=U(65104,65135);c[152]=d;d=J(D,2);e=d.data;e[0]=B(792);e[1]=U(65136,65279);c[153]=d;d=J(D,2);e=d.data;e[0]=B(793);e[1]=U(65280,65519);c[154]=d;d=J(D,2);e=d.data;e[0]=B(794);e[1]=U(0,1114111);c[155]=d;d=J(D,2);e=d.data;e[0]=B(795);e[1]=BbT();c[156]=d;d=J(D,2);e=d.data;e[0]=B(796);e[1]=CA(0,1);c[157]
=d;d=J(D,2);e=d.data;e[0]=B(797);e[1]=K0(62,1);c[158]=d;d=J(D,2);e=d.data;e[0]=B(798);e[1]=CA(1,1);c[159]=d;d=J(D,2);e=d.data;e[0]=B(799);e[1]=CA(2,1);c[160]=d;d=J(D,2);e=d.data;e[0]=B(800);e[1]=CA(3,0);c[161]=d;d=J(D,2);e=d.data;e[0]=B(801);e[1]=CA(4,0);c[162]=d;d=J(D,2);e=d.data;e[0]=B(802);e[1]=CA(5,1);c[163]=d;d=J(D,2);e=d.data;e[0]=B(803);e[1]=K0(448,1);c[164]=d;d=J(D,2);e=d.data;e[0]=B(804);e[1]=CA(6,1);c[165]=d;d=J(D,2);e=d.data;e[0]=B(805);e[1]=CA(7,0);c[166]=d;d=J(D,2);e=d.data;e[0]=B(806);e[1]=CA(8,
1);c[167]=d;d=J(D,2);e=d.data;e[0]=B(76);e[1]=K0(3584,1);c[168]=d;d=J(D,2);e=d.data;e[0]=B(807);e[1]=CA(9,1);c[169]=d;d=J(D,2);e=d.data;e[0]=B(808);e[1]=CA(10,1);c[170]=d;d=J(D,2);e=d.data;e[0]=B(809);e[1]=CA(11,1);c[171]=d;d=J(D,2);e=d.data;e[0]=B(810);e[1]=K0(28672,0);c[172]=d;d=J(D,2);e=d.data;e[0]=B(811);e[1]=CA(12,0);c[173]=d;d=J(D,2);e=d.data;e[0]=B(812);e[1]=CA(13,0);c[174]=d;d=J(D,2);e=d.data;e[0]=B(813);e[1]=CA(14,0);c[175]=d;d=J(D,2);e=d.data;e[0]=B(814);e[1]=Bch(983040,1,1);c[176]=d;d=J(D,2);e=d.data;e[0]
=B(815);e[1]=CA(15,0);c[177]=d;d=J(D,2);e=d.data;e[0]=B(816);e[1]=CA(16,1);c[178]=d;d=J(D,2);e=d.data;e[0]=B(817);e[1]=CA(18,1);c[179]=d;d=J(D,2);e=d.data;e[0]=B(818);e[1]=BaU(19,0,1);c[180]=d;d=J(D,2);e=d.data;e[0]=B(819);e[1]=K0(1643118592,1);c[181]=d;d=J(D,2);e=d.data;e[0]=B(820);e[1]=CA(20,0);c[182]=d;d=J(D,2);e=d.data;e[0]=B(821);e[1]=CA(21,0);c[183]=d;d=J(D,2);e=d.data;e[0]=B(822);e[1]=CA(22,0);c[184]=d;d=J(D,2);e=d.data;e[0]=B(823);e[1]=CA(23,0);c[185]=d;d=J(D,2);e=d.data;e[0]=B(824);e[1]=CA(24,1);c[186]
=d;d=J(D,2);e=d.data;e[0]=B(825);e[1]=K0(2113929216,1);c[187]=d;d=J(D,2);e=d.data;e[0]=B(826);e[1]=CA(25,1);c[188]=d;d=J(D,2);e=d.data;e[0]=B(827);e[1]=CA(26,0);c[189]=d;d=J(D,2);e=d.data;e[0]=B(828);e[1]=CA(27,0);c[190]=d;d=J(D,2);e=d.data;e[0]=B(829);e[1]=CA(28,1);c[191]=d;d=J(D,2);e=d.data;e[0]=B(830);e[1]=CA(29,0);c[192]=d;d=J(D,2);e=d.data;e[0]=B(831);e[1]=CA(30,0);c[193]=d;BmB=b;}
function By(){var a=this;D.call(a);a.vs=null;a.uz=null;}
function APX(a,b){if(!b&&a.vs===null)a.vs=a.bW();else if(b&&a.uz===null)a.uz=FA(a.bW(),1);if(b)return a.uz;return a.vs;}
function Tj(){CI.call(this);this.Ac=0;}
function A0F(a,b,c){var d,e;d=b+1|0;e=Ba(c,b);d=Ba(c,d);return a.Ac!=GP(GN(EJ(e,d)))?(-1):2;}
function NQ(){CE.call(this);this.mw=0;}
function AY2(a){var b=new NQ();AUy(b,a);return b;}
function AUy(a,b){Cz(a);a.mw=b;}
function A8Q(a,b){a.r=b;}
function A4S(a,b,c,d){var e,f;e=b+1|0;if(e>d.by){d.hp=1;return (-1);}f=Ba(c,b);if(b>d.fi&&Du(Ba(c,b-1|0)))return (-1);if(a.mw!=f)return (-1);return a.r.k(e,c,d);}
function AWV(a,b,c,d){var e,f,g,h,i;if(!(c instanceof B4))return Jl(a,b,c,d);e=c;f=d.fi;g=d.by;while(true){if(b>=g)return (-1);h=Hl(e,a.mw,b);if(h<0)return (-1);if(h>f&&Du(Ba(e,h-1|0))){b=h+1|0;continue;}i=a.r;b=h+1|0;if(i.k(b,c,d)>=0)break;}return h;}
function A5g(a,b,c,d,e){var f,g;if(!(d instanceof B4))return Jw(a,b,c,d,e);f=e.fi;g=d;a:{while(true){if(c<b)return (-1);c=Io(g,a.mw,c);if(c<0)break a;if(c<b)break a;if(c>f&&Du(Ba(g,c-1|0))){c=c+(-2)|0;continue;}if(a.r.k(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ATs(a,b){if(b instanceof Fx)return 0;if(b instanceof Fp)return 0;if(b instanceof EP)return 0;if(b instanceof EZ)return 0;if(b instanceof NW)return 0;if(!(b instanceof NQ))return 1;return b.mw!=a.mw?0:1;}
function A1c(a,b){return 1;}
function NW(){CE.call(this);this.l6=0;}
function A6M(a){var b=new NW();AY$(b,a);return b;}
function AY$(a,b){Cz(a);a.l6=b;}
function A4D(a,b){a.r=b;}
function AS8(a,b,c,d){var e,f,g,h;e=d.by;f=b+1|0;g=S(f,e);if(g>0){d.hp=1;return (-1);}h=Ba(c,b);if(g<0&&DS(Ba(c,f)))return (-1);if(a.l6!=h)return (-1);return a.r.k(f,c,d);}
function A81(a,b,c,d){var e,f,g;if(!(c instanceof B4))return Jl(a,b,c,d);e=c;f=d.by;while(true){if(b>=f)return (-1);g=Hl(e,a.l6,b);if(g<0)return (-1);b=g+1|0;if(b<f&&DS(Ba(e,b))){b=g+2|0;continue;}if(a.r.k(b,c,d)>=0)break;}return g;}
function A0D(a,b,c,d,e){var f,g,h;if(!(d instanceof B4))return Jw(a,b,c,d,e);f=d;g=e.by;a:{while(true){if(c<b)return (-1);c=Io(f,a.l6,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&DS(Ba(f,h))){c=c+(-1)|0;continue;}if(a.r.k(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AVp(a,b){if(b instanceof Fx)return 0;if(b instanceof Fp)return 0;if(b instanceof EP)return 0;if(b instanceof EZ)return 0;if(b instanceof NQ)return 0;if(!(b instanceof NW))return 1;return b.l6!=a.l6?0:1;}
function A83(a,b){return 1;}
function EZ(){var a=this;CI.call(a);a.tD=0;a.sh=0;a.kB=0;}
function A9v(a,b,c){var d,e;d=b+1|0;e=Ba(c,b);d=Ba(c,d);return a.tD==e&&a.sh==d?2:(-1);}
function A8b(a,b,c,d){var e,f,g;if(!(c instanceof B4))return Jl(a,b,c,d);e=c;f=d.by;while(b<f){b=Hl(e,a.tD,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=Ba(e,b);if(a.sh==g&&a.r.k(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AUz(a,b,c,d,e){var f;if(!(d instanceof B4))return Jw(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=Io(f,a.sh,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.tD==Ba(f,c)&&a.r.k(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function A3m(a){return a.kB;}
function A9m(a,b){if(b instanceof EZ)return b.kB!=a.kB?0:1;if(b instanceof EP)return b.X(a.kB);if(b instanceof Fx)return 0;if(!(b instanceof Fp))return 1;return 0;}
function WG(){Gm.call(this);}
function BmD(){var a=new WG();A4f(a);return a;}
function A4f(a){return;}
function AUI(a,b){return b!=10?0:1;}
function A0i(a,b,c){return b!=10?0:1;}
function WH(){Gm.call(this);}
function BmE(){var a=new WH();AWT(a);return a;}
function AWT(a){return;}
function A9Y(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function A1_(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AEU(){var a=this;D.call(a);a.oY=null;a.tR=null;a.f_=0;a.BG=0;}
function A8o(a){var b=new AEU();AXk(b,a);return b;}
function AXk(a,b){while(b>=a.f_){a.f_=a.f_<<1|1;}a.f_=a.f_<<1|1;a.oY=$rt_createIntArray(a.f_+1|0);a.tR=$rt_createIntArray(a.f_+1|0);a.BG=b;}
function Qp(a,b,c){var d,e;d=0;e=b&a.f_;while(a.oY.data[e]&&a.oY.data[e]!=b){d=(d+1|0)&a.f_;e=(e+d|0)&a.f_;}a.oY.data[e]=b;a.tR.data[e]=c;}
function VO(a,b){var c,d,e;c=b&a.f_;d=0;while(true){e=a.oY.data[c];if(!e)break;if(e==b)return a.tR.data[c];d=(d+1|0)&a.f_;c=(c+d|0)&a.f_;}return a.BG;}
function YD(){D.call(this);}
function NO(){By.call(this);}
function Bbn(){var a=new NO();AW5(a);return a;}
function AW5(a){return;}
function AMv(a){return Dp(CG(Es(),9,13),32);}
function Nf(){By.call(this);}
function Bcn(){var a=new Nf();A04(a);return a;}
function A04(a){return;}
function ANU(a){return CG(Es(),48,57);}
function AEN(){By.call(this);}
function BbD(){var a=new AEN();AWB(a);return a;}
function AWB(a){return;}
function A9G(a){return CG(Es(),97,122);}
function AFp(){By.call(this);}
function A_7(){var a=new AFp();AXo(a);return a;}
function AXo(a){return;}
function A1e(a){return CG(Es(),65,90);}
function AFy(){By.call(this);}
function BcT(){var a=new AFy();AT3(a);return a;}
function AT3(a){return;}
function AVQ(a){return CG(Es(),0,127);}
function NJ(){By.call(this);}
function Bc1(){var a=new NJ();AU_(a);return a;}
function AU_(a){return;}
function ZV(a){return CG(CG(Es(),97,122),65,90);}
function Md(){NJ.call(this);}
function Bct(){var a=new Md();AW8(a);return a;}
function AW8(a){return;}
function AA3(a){return CG(ZV(a),48,57);}
function AHW(){By.call(this);}
function BaL(){var a=new AHW();A72(a);return a;}
function A72(a){return;}
function A6p(a){return CG(CG(CG(Es(),33,64),91,96),123,126);}
function OI(){Md.call(this);}
function BbQ(){var a=new OI();AZ1(a);return a;}
function AZ1(a){return;}
function AIa(a){return CG(CG(CG(AA3(a),33,64),91,96),123,126);}
function AMX(){OI.call(this);}
function BbN(){var a=new AMX();A0V(a);return a;}
function A0V(a){return;}
function AYF(a){return Dp(AIa(a),32);}
function ACR(){By.call(this);}
function Bak(){var a=new ACR();A9R(a);return a;}
function A9R(a){return;}
function A49(a){return Dp(Dp(Es(),32),9);}
function AAp(){By.call(this);}
function Bay(){var a=new AAp();A$$(a);return a;}
function A$$(a){return;}
function AYx(a){return Dp(CG(Es(),0,31),127);}
function AKg(){By.call(this);}
function BbS(){var a=new AKg();AUf(a);return a;}
function AUf(a){return;}
function A2a(a){return CG(CG(CG(Es(),48,57),97,102),65,70);}
function AQj(){By.call(this);}
function Ba7(){var a=new AQj();A39(a);return a;}
function A39(a){return;}
function A8n(a){var b;b=new VS;b.IA=a;B0(b);b.ca=1;return b;}
function AH4(){By.call(this);}
function A_5(){var a=new AH4();A0f(a);return a;}
function A0f(a){return;}
function A2_(a){var b;b=new Tp;b.IJ=a;B0(b);b.ca=1;return b;}
function APw(){By.call(this);}
function BcX(){var a=new APw();AT5(a);return a;}
function AT5(a){return;}
function AW7(a){var b;b=new QR;b.Ib=a;B0(b);return b;}
function AEv(){By.call(this);}
function Bax(){var a=new AEv();AYA(a);return a;}
function AYA(a){return;}
function A0n(a){var b;b=new QQ;b.FR=a;B0(b);return b;}
function AF3(){By.call(this);}
function Bcr(){var a=new AF3();AU9(a);return a;}
function AU9(a){return;}
function A47(a){var b;b=new SI;b.G2=a;B0(b);Jy(b.b$,0,2048);b.ca=1;return b;}
function Y6(){By.call(this);}
function Bb6(){var a=new Y6();AUE(a);return a;}
function AUE(a){return;}
function AVz(a){var b;b=new Um;b.IZ=a;B0(b);b.ca=1;return b;}
function AID(){By.call(this);}
function Bcs(){var a=new AID();AYf(a);return a;}
function AYf(a){return;}
function A_c(a){var b;b=new Pn;b.Hi=a;B0(b);b.ca=1;return b;}
function APL(){By.call(this);}
function Ban(){var a=new APL();AYM(a);return a;}
function AYM(a){return;}
function A27(a){var b;b=new Vd;b.Gk=a;B0(b);return b;}
function AFc(){By.call(this);}
function Bc2(){var a=new AFc();A6A(a);return a;}
function A6A(a){return;}
function AXR(a){var b;b=new Tm;b.Fn=a;B0(b);b.ca=1;return b;}
function ALk(){By.call(this);}
function Bb2(){var a=new ALk();ATy(a);return a;}
function ATy(a){return;}
function AVF(a){var b;b=new To;b.GI=a;B0(b);b.ca=1;return b;}
function AC3(){By.call(this);}
function BaZ(){var a=new AC3();AUN(a);return a;}
function AUN(a){return;}
function A5$(a){var b;b=new Pe;b.G0=a;B0(b);b.ca=1;return b;}
function AHf(){By.call(this);}
function BcS(){var a=new AHf();AX0(a);return a;}
function AX0(a){return;}
function A7b(a){var b;b=new UC;b.JD=a;B0(b);b.ca=1;return b;}
function APZ(){By.call(this);}
function BcP(){var a=new APZ();A8g(a);return a;}
function A8g(a){return;}
function A1s(a){var b;b=new UF;b.F5=a;B0(b);return b;}
function ABE(){By.call(this);}
function Bbz(){var a=new ABE();AUH(a);return a;}
function AUH(a){return;}
function AZT(a){var b;b=new V$;b.I9=a;B0(b);return b;}
function AAP(){By.call(this);}
function Bam(){var a=new AAP();A9z(a);return a;}
function A9z(a){return;}
function AYX(a){var b;b=new VK;b.Fs=a;B0(b);b.ca=1;return b;}
function AH2(){By.call(this);}
function BcI(){var a=new AH2();A6v(a);return a;}
function A6v(a){return;}
function A9C(a){var b;b=new OR;b.JV=a;B0(b);b.ca=1;return b;}
function Lf(){By.call(this);}
function Ba1(){var a=new Lf();AVL(a);return a;}
function AVL(a){return;}
function ACT(a){return Dp(CG(CG(CG(Es(),97,122),65,90),48,57),95);}
function AQM(){Lf.call(this);}
function BbR(){var a=new AQM();A6E(a);return a;}
function A6E(a){return;}
function AYO(a){var b;b=FA(ACT(a),1);b.ca=1;return b;}
function AM3(){NO.call(this);}
function A_4(){var a=new AM3();A1L(a);return a;}
function A1L(a){return;}
function A4d(a){var b;b=FA(AMv(a),1);b.ca=1;return b;}
function AAI(){Nf.call(this);}
function BaE(){var a=new AAI();A64(a);return a;}
function A64(a){return;}
function AWI(a){var b;b=FA(ANU(a),1);b.ca=1;return b;}
function AKs(){var a=this;By.call(a);a.Aa=0;a.DM=0;}
function U(a,b){var c=new AKs();A_b(c,a,b);return c;}
function A_b(a,b,c){a.Aa=b;a.DM=c;}
function AX4(a){return CG(Es(),a.Aa,a.DM);}
function AKX(){By.call(this);}
function BbT(){var a=new AKX();A2c(a);return a;}
function A2c(a){return;}
function A1Z(a){return CG(CG(Es(),65279,65279),65520,65533);}
function AMH(){var a=this;By.call(a);a.ye=0;a.wu=0;a.CU=0;}
function CA(a,b){var c=new AMH();AU2(c,a,b);return c;}
function BaU(a,b,c){var d=new AMH();A16(d,a,b,c);return d;}
function AU2(a,b,c){a.wu=c;a.ye=b;}
function A16(a,b,c,d){a.CU=d;a.wu=c;a.ye=b;}
function A5U(a){var b;b=BbB(a.ye);if(a.CU)Jy(b.b$,0,2048);b.ca=a.wu;return b;}
function AMY(){var a=this;By.call(a);a.vH=0;a.tT=0;a.za=0;}
function K0(a,b){var c=new AMY();AVG(c,a,b);return c;}
function Bch(a,b,c){var d=new AMY();A28(d,a,b,c);return d;}
function AVG(a,b,c){a.tT=c;a.vH=b;}
function A28(a,b,c,d){a.za=d;a.tT=c;a.vH=b;}
function ASY(a){var b;b=new Vx;ADV(b,a.vH);if(a.za)Jy(b.b$,0,2048);b.ca=a.tT;return b;}
function AKB(){D.call(this);}
function BmF(){var a=new AKB();ATe(a);return a;}
function ATe(a){return;}
function Zz(){D.call(this);}
function BmG(){var a=new Zz();A8c(a);return a;}
function A8c(a){return;}
function NA(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function A2V(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=J(TD,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<Bi(b)){k=NA(Ba(b,j));if(k==64){j=j+1|0;k=NA(Ba(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|Bj(m,NA(Ba(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=NA(Ba(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=AV8(i,i+g|0,Om(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=AV8(i,i+g|0,Om(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=
0)break;o=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return Nv(c,h);}
function TD(){var a=this;D.call(a);a.xg=0;a.As=0;a.C7=null;}
function AV8(a,b,c){var d=new TD();A0S(d,a,b,c);return d;}
function A0S(a,b,c,d){a.xg=b;a.As=c;a.C7=d;}
function R5(){var a=this;D.call(a);a.CG=null;a.Dv=0;}
function AMf(){D.call(this);}
function BmH(){var a=new AMf();A$V(a);return a;}
function A$V(a){return;}
function Yt(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.CG.data;f=b.Dv;b.Dv=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+Bj(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function Wt(){Ey.call(this);this.sM=null;}
function A3P(a){EF(a.bZ,B(262),60,6,4210752);EF(a.bZ,B(325),8,(a.fn-96|0)+2|0,4210752);}
function AOp(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(832);$p=1;case 1:$z=AHz(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.J.bo,e);f=(a.bm-a.fb|0)/2|0;g=(a.bC-a.fn|0)/2|0;CH(a,f,g,0,0,a.fb,a.fn);if(WV(a.sM)){h=ADQ(a.sM,12);CH(a,f+56|0,((g+36|0)+12|0)-h|0,176,12-h|0,14,h+2|0);}i=AOS(a.sM,24);CH(a,f+79|0,g+34|0,176,14,i+1|0,16);return;default:Fa();}}C4().s(a,
b,c,d,e,f,g,h,i,$p);}
function Xt(){var a=this;Ey.call(a);a.mt=null;a.us=null;}
function Zd(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AA6(a);if(C()){break _;}b=0;while(b<9){c=Gi(a.mt,b);if(c!==null){d=a.J.f;$p=2;continue _;}b=b+1|0;}return;case 2:AL0(d,c);if(C()){break _;}while(true){b=b+1|0;if(b>=9)break;c=Gi(a.mt,b);if(c===null)continue;else{d=a.J.f;continue _;}}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function A6N(a,b){var c,d,e,f,g,h;c=$rt_createIntArray(9);d=c.data;e=0;while(e<3){f=0;while(f<3){g=e+(f*3|0)|0;h=Gi(a.mt,g);if(h!==null)d[g]=h.bA;else d[g]=(-1);f=f+1|0;}e=e+1|0;}Pr(a.us,0,RT(Wy(),c));}
function A19(a){EF(a.bZ,B(525),28,6,4210752);EF(a.bZ,B(325),8,(a.fn-96|0)+2|0,4210752);}
function AKv(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(833);$p=1;case 1:$z=AHz(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.J.bo,e);CH(a,(a.bm-a.fb|0)/2|0,(a.bC-a.fn|0)/2|0,0,0,a.fb,a.fn);return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function AMM(){var a=this;Ey.call(a);a.Fu=null;a.AM=null;a.kx=0;}
function Bca(a,b){var c=new AMM();A2x(c,a,b);return c;}
function A2x(a,b,c){var d,e,f,g;Ih(a);a.kx=0;a.Fu=b;a.AM=c;a.pU=0;a.kx=c.gm()/9|0;a.fn=114+(a.kx*18|0)|0;d=(a.kx-4|0)*18|0;e=0;while(e<a.kx){f=0;while(f<9){T(a.c7,D7(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){T(a.c7,D7(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=161+d|0;while(e<9){T(a.c7,D7(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function A9$(a){EF(a.bZ,a.AM.w_(),8,6,4210752);EF(a.bZ,B(325),8,(a.fn-96|0)+2|0,4210752);}
function ANY(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.J.bo;d=B(834);$p=1;case 1:$z=AHz(c,d);if(C()){break _;}e=$z;BU(1.0,1.0,1.0,1.0);Eb(a.J.bo,e);f=(a.bm-a.fb|0)/2|0;g=(a.bC-a.fn|0)/2|0;CH(a,f,g,0,0,a.fb,(a.kx*18|0)+17|0);CH(a,f,(g+(a.kx*18|0)|0)+17|0,0,126,a.fb,96);return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function CX(){var a=this;EX.call(a);a.Iy=null;a.gd=0;a.m8=0;a.zN=0;a.zM=0;}
var BmI=null;var BmJ=null;var BmK=null;var BmL=null;var BmM=null;var BmN=null;var BmO=null;var BmP=null;var BmQ=null;var BmR=null;var BmS=null;var BmT=null;var BmU=null;var BmV=null;var BmW=null;var BmX=null;var BmY=null;var BmZ=null;var Bm0=null;var Bi6=null;function Dm(a,b,c,d,e,f,g){var h=new CX();AEA(h,a,b,c,d,e,f,g);return h;}
function AEA(a,b,c,d,e,f,g,h){FU(a,b,c);a.Iy=d;a.gd=e;a.m8=f;a.zN=g;a.zM=h;}
function AQg(){var b,c;BmI=Dm(B(835),0,B(835),16,16,0,0);BmJ=Dm(B(836),1,B(836),16,16,16,0);BmK=Dm(B(837),2,B(837),16,16,32,0);BmL=Dm(B(838),3,B(838),16,16,48,0);BmM=Dm(B(839),4,B(839),16,16,64,0);BmN=Dm(B(840),5,B(840),16,16,80,0);BmO=Dm(B(841),6,B(841),16,16,96,0);BmP=Dm(B(842),7,B(842),32,16,0,32);BmQ=Dm(B(843),8,B(843),32,16,32,32);BmR=Dm(B(844),9,B(844),32,16,64,32);BmS=Dm(B(845),10,B(845),32,16,96,32);BmT=Dm(B(846),11,B(846),16,32,0,64);BmU=Dm(B(847),12,B(847),32,32,0,128);BmV=Dm(B(848),13,B(848),32,32,
32,128);BmW=Dm(B(849),14,B(849),32,32,64,128);BmX=Dm(B(850),15,B(850),32,32,96,128);BmY=Dm(B(851),16,B(851),32,32,128,128);BmZ=Dm(B(852),17,B(852),64,32,0,96);Bm0=Dm(B(853),18,B(853),64,64,0,192);b=J(CX,19);c=b.data;c[0]=BmI;c[1]=BmJ;c[2]=BmK;c[3]=BmL;c[4]=BmM;c[5]=BmN;c[6]=BmO;c[7]=BmP;c[8]=BmQ;c[9]=BmR;c[10]=BmS;c[11]=BmT;c[12]=BmU;c[13]=BmV;c[14]=BmW;c[15]=BmX;c[16]=BmY;c[17]=BmZ;c[18]=Bm0;Bi6=b;}
function PS(){Eo.call(this);this.Cy=null;}
function ACZ(a){var b;b=new VQ;NN(b,a.Cy);return b;}
function Ve(){var a=this;CT.call(a);a.B8=null;a.BX=null;a.BZ=null;a.yU=0;}
function AGr(a){T(a.bG,Ss(0,((a.bm/2|0)-155|0)+0|0,(a.bC/6|0)+96|0,B(854)));T(a.bG,Ss(1,((a.bm/2|0)-155|0)+160|0,(a.bC/6|0)+96|0,B(809)));}
function AQz(a,b){var c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.B8;d=b.cl?0:1;e=a.yU;$p=1;case 1:ARb(c,d,e);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function YZ(a,b,c,d){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABo(a);if(C()){break _;}DG(a,a.bZ,a.BX,a.bm/2|0,70,16777215);DG(a,a.bZ,a.BZ,a.bm/2|0,90,16777215);$p=2;case 2:AFJ(a,b,c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,$p);}
function IS(){Fh.call(this);}
function Bm1(){var a=new IS();AUc(a);return a;}
function AUc(a){P(a);}
function UY(){var a=this;D.call(a);a.kR=0;a.q3=0;a.xR=null;a.xX=null;a.H6=0;}
function ALy(a,b){var c,d;c=0;while(c<=(3-a.kR|0)){d=0;while(d<=(3-a.q3|0)){if(Vy(a,b,c,d,1))return 1;if(Vy(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Vy(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.kR&&i<a.q3)j=!e?a.xR.data[h+Bj(i,a.kR)|0]:a.xR.data[((a.kR-h|0)-1|0)+Bj(i,a.kR)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function AHq(a,b){return KH(a.xX.bA,a.xX.p);}
function Kw(a){return Bj(a.kR,a.q3);}
function SA(){var a=this;Bl.call(a);a.Ct=null;a.Ju=null;}
function AVU(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.dP^EK(a.Ct,c):0;}
function Sz(){var a=this;Bl.call(a);a.EA=null;a.Bo=null;a.GQ=null;}
function A3w(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.dP^EK(a.EA,c):0;return a.Bo.X(b)&&!d?1:0;}
function PA(){var a=this;Bl.call(a);a.sj=null;a.Hx=null;}
function AX1(a,b){return a.cj^EK(a.sj,b);}
function A6b(a){var b,c;b=new V;X(b);c=I9(a.sj,0);while(c>=0){Hm(b,ID(c));DQ(b,124);c=I9(a.sj,c+1|0);}if(b.bY>0)Su(b,b.bY-1|0);return W(b);}
function T8(){var a=this;Bl.call(a);a.DF=null;a.IG=null;}
function A9x(a,b){return a.DF.X(b);}
function T6(){var a=this;Bl.call(a);a.wx=0;a.CO=null;a.xi=null;}
function A0E(a,b){return !(a.wx^EK(a.xi.b6,b))&&!(a.wx^a.xi.iw^a.CO.X(b))?0:1;}
function T7(){var a=this;Bl.call(a);a.tS=0;a.Be=null;a.vl=null;}
function A7w(a,b){return !(a.tS^EK(a.vl.b6,b))&&!(a.tS^a.vl.iw^a.Be.X(b))?1:0;}
function T_(){var a=this;Bl.call(a);a.E2=0;a.Bi=null;a.Bb=null;a.HN=null;}
function A5l(a,b){return a.E2^(!a.Bi.X(b)&&!a.Bb.X(b)?0:1);}
function Ua(){var a=this;Bl.call(a);a.Al=0;a.DA=null;a.Dh=null;a.JS=null;}
function ASS(a,b){return a.Al^(!a.DA.X(b)&&!a.Dh.X(b)?0:1)?0:1;}
function T9(){var a=this;Bl.call(a);a.zZ=null;a.JU=null;}
function AWC(a,b){return D6(a.zZ,b);}
function T$(){var a=this;Bl.call(a);a.EM=null;a.HX=null;}
function AYk(a,b){return D6(a.EM,b)?0:1;}
function Uc(){var a=this;Bl.call(a);a.Ao=null;a.DC=0;a.A0=null;}
function A1z(a,b){return !D6(a.Ao,b)&&!(a.DC^EK(a.A0.b6,b))?0:1;}
function Ud(){var a=this;Bl.call(a);a.AG=null;a.D6=0;a.Az=null;}
function A42(a,b){return !D6(a.AG,b)&&!(a.D6^EK(a.Az.b6,b))?1:0;}
function Pz(){var a=this;Bl.call(a);a.AW=0;a.EH=null;a.Bv=null;a.Fx=null;}
function A_2(a,b){return !(a.AW^a.EH.X(b))&&!D6(a.Bv,b)?0:1;}
function PN(){var a=this;Bl.call(a);a.EV=0;a.y7=null;a.zb=null;a.FM=null;}
function AWH(a,b){return !(a.EV^a.y7.X(b))&&!D6(a.zb,b)?1:0;}
function Px(){var a=this;Bl.call(a);a.C2=null;a.FP=null;}
function AVa(a,b){return D6(a.C2,b);}
function Py(){var a=this;Bl.call(a);a.zR=null;a.JP=null;}
function A50(a,b){return D6(a.zR,b)?0:1;}
function PD(){var a=this;Bl.call(a);a.E1=null;a.AF=0;a.Fj=null;}
function AXn(a,b){return D6(a.E1,b)&&a.AF^EK(a.Fj.b6,b)?1:0;}
function Pw(){var a=this;Bl.call(a);a.Ei=null;a.DK=0;a.AD=null;}
function A$t(a,b){return D6(a.Ei,b)&&a.DK^EK(a.AD.b6,b)?0:1;}
function PB(){var a=this;Bl.call(a);a.Eo=0;a.Cr=null;a.Ak=null;a.HM=null;}
function A4o(a,b){return a.Eo^a.Cr.X(b)&&D6(a.Ak,b)?1:0;}
function PC(){var a=this;Bl.call(a);a.Ee=0;a.B6=null;a.En=null;a.H3=null;}
function AZP(a,b){return a.Ee^a.B6.X(b)&&D6(a.En,b)?0:1;}
function OY(){IG.call(this);}
function AWa(a,b,c,d){var e,f,g;e=0;f=d.by;a:{while(true){if(b>f){b=e;break a;}g=Hp(d,a.cK);EN(d,a.cK,b);e=a.fp.k(b,c,d);if(e>=0)break;EN(d,a.cK,g);b=b+1|0;}}return b;}
function A_R(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Hp(e,a.cK);EN(e,a.cK,c);f=a.fp.k(c,d,e);if(f>=0)break;EN(e,a.cK,g);c=c+(-1)|0;}}return c;}
function AU0(a){return null;}
function VQ(){Gr.call(this);}
function Lq(a){N1(a);return a.gA.eS;}
function Ni(){Fc.call(this);}
var Bm2=0.0;var Bm3=null;function AJ2(){Bm2=NaN;Bm3=F($rt_doublecls());}
function Mu(){}
function VJ(){var a=this;D.call(a);a.FH=null;a.EI=null;a.pL=null;a.dC=null;a.qW=0;a.sl=0;}
function ON(a,b){var c,d;c=Bi(a.pL);if(b>=0&&b<=c){AAc(a.dC);a.dC.nv=1;AP5(a.dC,b);b=a.EI.eK(b,a.pL,a.dC);if(b==(-1))a.dC.hp=1;if(b>=0&&a.dC.oe){AC_(a.dC);return 1;}a.dC.hw=(-1);return 0;}d=new BT;Bo(d,V4(b));M(d);}
function ABg(a){var b,c;b=Bi(a.pL);if(!YP(a))b=a.sl;if(a.dC.hw>=0&&a.dC.nv==1){a.dC.hw=MO(a.dC);if(MO(a.dC)==AER(a.dC)){c=a.dC;c.hw=c.hw+1|0;}return a.dC.hw<=b&&ON(a,a.dC.hw)?1:0;}return ON(a,a.qW);}
function AHT(a,b){return PM(a.dC,b);}
function Ys(a,b){return QS(a.dC,b);}
function AHe(a){return AHT(a,0);}
function AK5(a){return Ys(a,0);}
function YP(a){return a.dC.oh;}
function Uw(){}
function So(){}
function Tb(){Eo.call(this);this.ob=null;}
var Bm4=null;function Bb_(){var a=new Tb();AAq(a);return a;}
function AAq(a){a.ob=BcM();}
function JG(a){return AIv(a.ob);}
function Zp(a,b){return ASI(a.ob,b,b)===Bm4?0:1;}
function MK(a,b){return AGt(a.ob,b)!==Bm4?0:1;}
function M7(a){return ADF(a.ob);}
function AAZ(){Bm4=new D;}
function SZ(){}
function O0(){}
function AJ6(){var a=this;FZ.call(a);a.ks=null;a.tC=null;a.G1=null;a.tI=0;}
function BcM(){var a=new AJ6();AT4(a);return a;}
function AT4(a){var b;b=null;a.G1=b;if(b===null){b=new Q0;b.Jh=a;}a.tC=b;}
function ASI(a,b,c){var d,e;a.ks=Or(a,a.ks,b);d=Wv(a,b);e=Th(d,c);Th(d,c);a.tI=a.tI+1|0;return e;}
function AGt(a,b){var c;c=Wv(a,b);if(c===null)return null;a.ks=LA(a,a.ks,b);a.tI=a.tI+1|0;return c.nY;}
function Wv(a,b){var c,d;c=a.ks;while(true){if(c===null)return null;d=Ot(a.tC,b,c.nl);if(!d)break;c=d>=0?c.dk:c.db;}return c;}
function Or(a,b,c){var d,e;if(b===null){b=new Lg;d=null;b.nl=c;b.nY=d;b.lH=1;b.jo=1;return b;}e=Ot(a.tC,c,b.nl);if(!e)return b;if(e>=0)b.dk=Or(a,b.dk,c);else b.db=Or(a,b.db,c);FQ(b);return M8(b);}
function LA(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Ot(a.tC,c,b.nl);if(d<0)b.db=LA(a,b.db,c);else if(d>0)b.dk=LA(a,b.dk,c);else{if(b.dk===null)return b.db;e=b.db;b=b.dk;f=J(Lg,b.lH);g=0;while(b.db!==null){h=f.data;i=g+1|0;h[g]=b;b=b.db;g=i;}c=b.dk;while(g>0){h=f.data;g=g+(-1)|0;j=h[g];j.db=c;FQ(j);c=M8(j);}b.dk=c;b.db=e;FQ(b);}FQ(b);return M8(b);}
function ADF(a){var b,c,d;b=a.ks;c=null;while(b!==null){d=AOr(b,0);c=b;b=d;}if(c!==null)return c.nl;b=new J9;P(b);M(b);}
function AIv(a){return a.ks===null?0:a.ks.jo;}
function Q0(){D.call(this);this.Jh=null;}
function Ot(a,b,c){return b===null?TU(c,b):TU(b,c);}
function VS(){Bl.call(this);this.IA=null;}
function A1G(a,b){return Do(b)!=2?0:1;}
function Tp(){Bl.call(this);this.IJ=null;}
function A4b(a,b){return Do(b)!=1?0:1;}
function QR(){Bl.call(this);this.Ib=null;}
function ATH(a,b){return Qm(b);}
function QQ(){Bl.call(this);this.FR=null;}
function A5T(a,b){return 0;}
function SI(){Bl.call(this);this.G2=null;}
function AXc(a,b){return !Do(b)?0:1;}
function Um(){Bl.call(this);this.IZ=null;}
function A$X(a,b){return Do(b)!=9?0:1;}
function Pn(){Bl.call(this);this.Hi=null;}
function AZm(a,b){return IB(b);}
function Vd(){Bl.call(this);this.Gk=null;}
function A0r(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Tm(){Bl.call(this);this.Fn=null;}
function A_G(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=IB(b);}return b;}
function To(){Bl.call(this);this.GI=null;}
function AVr(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=IB(b);}return b;}
function Pe(){Bl.call(this);this.G0=null;}
function A1T(a,b){a:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function UC(){Bl.call(this);this.JD=null;}
function A7J(a,b){return Lh(b);}
function UF(){Bl.call(this);this.F5=null;}
function A9a(a,b){return UG(b);}
function V$(){Bl.call(this);this.I9=null;}
function A$M(a,b){return Do(b)!=3?0:1;}
function VK(){Bl.call(this);this.Fs=null;}
function A2d(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=IB(b);}return b;}
function OR(){Bl.call(this);this.JV=null;}
function AVi(a,b){a:{b:{switch(Do(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=IB(b);}return b;}
function MF(){Bl.call(this);this.u_=0;}
function BbB(a){var b=new MF();ADV(b,a);return b;}
function ADV(a,b){B0(a);a.u_=b;}
function AZo(a,b){return a.cj^(a.u_!=Do(b&65535)?0:1);}
function Vx(){MF.call(this);}
function A9_(a,b){return a.cj^(!(a.u_>>Do(b&65535)&1)?0:1);}
function Np(){D.call(this);}
var Bm5=null;var Bm6=null;function Bm7(){var a=new Np();ASw(a);return a;}
function ASw(a){return;}
function DA(b,c){BQ(Bm5,c,b);BQ(Bm6,b,c);}
function Jt(b,c){var d,e,f,g,h,$$je;d=null;a:{try{e=d;f=CQ(Bm5,b);if(f!==null){e=d;g=J(FT,1);g.data[0]=F(F1);b=WL(f,g);g=J(D,1);g.data[0]=c;d=WO(b,g);e=d;}break a;}catch($$e){$$je=Q($$e);if($$je instanceof BD){h=$$je;}else{throw $$e;}}B9(h);d=e;}return d;}
function AIp(){Bm5=C8();Bm6=C8();DA(F(JB),B(855));DA(F(E_),B(856));DA(F(IM),B(857));DA(F(EQ),B(858));DA(F(DP),B(859));DA(F(J6),B(860));DA(F(Ju),B(861));DA(F(Ku),B(862));DA(F(Ld),B(863));DA(F(Jd),B(864));DA(F(II),B(582));DA(F(KO),B(865));DA(F(Mv),B(866));DA(F(JU),B(867));DA(F(Gh),B(868));}
function J5(){var a=this;D.call(a);a.fG=0;a.fq=0;a.fL=0;a.qc=0;a.jk=Long_ZERO;a.oV=Long_ZERO;}
var BkK=Long_ZERO;function A$G(a,b){var c;if(!(b instanceof J5))return 0;c=b;return a.fG==c.fG&&a.fq==c.fq&&a.fL==c.fL&&a.qc==c.qc?1:0;}
function A7U(a){return (((((a.fG*128|0)*1024|0)+(a.fL*128|0)|0)+a.fq|0)*256|0)+a.qc|0;}
function A0z(a,b){a.jk=b;return a;}
function ANK(a,b){return Long_lt(a.jk,b.jk)?(-1):Long_gt(a.jk,b.jk)?1:Long_lt(a.oV,b.oV)?(-1):Long_le(a.oV,b.oV)?0:1;}
function TU(a,b){return ANK(a,b);}
function AGd(){BkK=Long_ZERO;}
function Ql(){}
function OC(){D.call(this);this.r7=null;}
var Bm8=null;function Oi(b,c){var d,e,f,g,h,i;d=b+30233088|0;e=c+30233088|0;f=Bm8.data.length;g=$rt_createCharArray(10);h=g.data;i=0;while(i<5){b=i*2|0;h[b]=Bm8.data[d%f|0];d=d/f|0;h[b+1|0]=Bm8.data[e%f|0];e=e/f|0;i=i+1|0;}return Tl(g);}
function AG2(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=Oi(c,d);f=new V;X(f);g=W(I(I(I(f,a.r7),B(23)),e));$p=1;case 1:$z=ALN(g);if(C()){break _;}h=$z;if(h===null)return null;a:{try{i=O6(Ux(h));j=null;}catch($$e){$$je=Q($$e);if($$je instanceof BL){k=$$je;break a;}else{throw $$e;}}b:{c:{d:{try{try{l=j;m=
M0(i);n=FX(m,B(869));o=FX(m,B(870));if(c!=n)break d;l=j;if(d!=o)break d;l=j;b=AIf(b,m);}catch($$e){$$je=Q($$e);if($$je instanceof CP){b=$$je;break c;}else{b=$$je;break b;}}GO(i);}catch($$e){$$je=Q($$e);if($$je instanceof BL){k=$$je;break a;}else{throw $$e;}}return b;}try{l=j;f=Oi(n,o);Cg(Da(),BM(I(Bf(I(Bf(I(I(I(I(I(Bf(I(Bf(I(Bf(I(Bf(I(I(I(BX(),B(871)),e),B(872)),c),B(632)),d),B(873)),n),B(632)),o),B(874)),f),B(875)),e),B(876)),c),B(632)),d),B(245))));b=BM(I(I(I(BX(),a.r7),B(23)),f));$p=3;continue _;}catch($$e)
{$$je=Q($$e);if($$je instanceof CP){b=$$je;}else{b=$$je;break b;}}}try{l=b;l=j;M(b);}catch($$e){$$je=Q($$e);b=$$je;}}try{e:{if(l===null)GO(i);else{try{GO(i);break e;}catch($$e){$$je=Q($$e);if($$je instanceof CP){f=$$je;}else{throw $$e;}}Hs(l,f);}}M(b);}catch($$e){$$je=Q($$e);if($$je instanceof BL){k=$$je;}else{throw $$e;}}}b=Da();f=new V;X(f);Cg(b,W(I(Bf(I(Bf(I(I(I(f,B(877)),e),B(878)),c),B(632)),d),B(245))));Cg(Da(),B(879));$p=2;case 2:AL_(g);if(C()){break _;}B9(k);return null;case 3:f:{a:{b:{try{try{ANu(g,
b);if(C()){break _;}b=null;}catch($$e){$$je=Q($$e);if($$je instanceof CP){b=$$je;break b;}else{b=$$je;break a;}}GO(i);}catch($$e){$$je=Q($$e);if($$je instanceof BL){k=$$je;break f;}else{throw $$e;}}return b;}try{l=b;l=j;M(b);}catch($$e){$$je=Q($$e);b=$$je;}}try{c:{if(l===null)GO(i);else{try{GO(i);break c;}catch($$e){$$je=Q($$e);if($$je instanceof CP){f=$$je;}else{throw $$e;}}Hs(l,f);}}M(b);}catch($$e){$$je=Q($$e);if($$je instanceof BL){k=$$je;}else{throw $$e;}}}b=Da();f=new V;X(f);Cg(b,W(I(Bf(I(Bf(I(I(I(f,B(877)),
e),B(878)),c),B(632)),d),B(245))));Cg(Da(),B(879));$p=2;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function Y1(a,b,c){var d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Ha();AF6(a,c,b,d);try{e=A$o(131072);b=null;try{try{f=b;g=AWq(e);h=null;try{try{i=h;f=b;R8(d,g);d=BM(I(I(I(BX(),a.r7),B(23)),Oi(c.fY,c.fV)));j=Ij(e);k=0;$p=1;continue _;}catch($$e){$$je=Q($$e);if($$je instanceof CP){d=$$je;}else{throw $$e;}}i=d;i=h;f=b;M(d);}catch($$e){$$je=Q($$e);d=$$je;}f=b;f
=b;a:{f=b;if(i===null){f=b;IX(g);}else{try{f=b;IX(g);f=b;break a;}catch($$e){$$je=Q($$e);if($$je instanceof CP){g=$$je;}else{throw $$e;}}f=b;Hs(i,g);}}f=b;M(d);}catch($$e){$$je=Q($$e);if($$je instanceof CP){d=$$je;}else{throw $$e;}}f=d;f=b;M(d);}catch($$e){$$je=Q($$e);b=$$je;}b:{if(f===null)IR(e);else{try{IR(e);break b;}catch($$e){$$je=Q($$e);if($$je instanceof CP){d=$$je;}else{throw $$e;}}Hs(f,d);}}M(b);}catch($$e){$$je=Q($$e);if($$je instanceof BL){i=$$je;}else{throw $$e;}}b=Da();d=new V;X(d);Cg(b,W(I(Bf(I(Bf(I(d,
B(880)),c.fY),B(632)),c.fV),B(881))));B9(i);return;case 1:c:{d:{e:{f:{a:{try{try{try{AJp(d,j,k);if(C()){break _;}f=b;f=b;}catch($$e){$$je=Q($$e);if($$je instanceof CP){d=$$je;break a;}else{d=$$je;break f;}}f=b;IX(g);}catch($$e){$$je=Q($$e);if($$je instanceof CP){d=$$je;break e;}else{b=$$je;break d;}}IR(e);}catch($$e){$$je=Q($$e);if($$je instanceof BL){i=$$je;break c;}else{throw $$e;}}return;}try{i=d;i=h;f=b;M(d);}catch($$e){$$je=Q($$e);d=$$je;}}try{f=b;f=b;g:{f=b;if(i===null){f=b;IX(g);}else{try{f=b;IX(g);f
=b;break g;}catch($$e){$$je=Q($$e);if($$je instanceof CP){g=$$je;}else{throw $$e;}}f=b;Hs(i,g);}}f=b;M(d);}catch($$e){$$je=Q($$e);if($$je instanceof CP){d=$$je;}else{b=$$je;break d;}}}try{f=d;f=b;M(d);}catch($$e){$$je=Q($$e);b=$$je;}}try{h:{if(f===null)IR(e);else{try{IR(e);break h;}catch($$e){$$je=Q($$e);if($$je instanceof CP){d=$$je;}else{throw $$e;}}Hs(f,d);}}M(b);}catch($$e){$$je=Q($$e);if($$je instanceof BL){i=$$je;}else{throw $$e;}}}b=Da();d=new V;X(d);Cg(b,W(I(Bf(I(Bf(I(d,B(880)),c.fY),B(632)),c.fV),B(881))));B9(i);return;default:
Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AF6(a,b,c,d){Gz(d,B(869),b.fY);Gz(d,B(870),b.fV);If(d,B(882),c.dU);IW(d,B(883),b.g4);IW(d,B(356),b.gh.gB);IW(d,B(884),b.hD.gB);IW(d,B(885),b.jz.gB);IW(d,B(886),b.fv);S$(d,B(887),b.hf);b.sc=0;AG_(new QZ);}
function AIf(b,c){var d;d=BaY(b,FX(c,B(869)),FX(c,B(870)));d.g4=IO(c,B(883));d.gh=AIQ(IO(c,B(356)));d.hD=AIQ(IO(c,B(884)));d.jz=AIQ(IO(c,B(885)));d.fv=IO(c,B(886));d.hf=UD(c,B(887));if(!Mn(d.gh))d.gh=Lz(d.g4.data.length);if(!(d.fv!==null&&Mn(d.hD))){d.fv=$rt_createByteArray(256);d.hD=Lz(d.g4.data.length);Sp(d);}if(!Mn(d.jz))d.jz=Lz(d.g4.data.length);return d;}
function A45(a){return;}
function MG(a,b,c){return;}
function AOO(){var b,c;b=$rt_createCharArray(36);c=b.data;c[0]=48;c[1]=49;c[2]=50;c[3]=51;c[4]=52;c[5]=53;c[6]=54;c[7]=55;c[8]=56;c[9]=57;c[10]=65;c[11]=66;c[12]=67;c[13]=68;c[14]=69;c[15]=70;c[16]=71;c[17]=72;c[18]=73;c[19]=74;c[20]=75;c[21]=76;c[22]=77;c[23]=78;c[24]=79;c[25]=80;c[26]=81;c[27]=82;c[28]=83;c[29]=84;c[30]=85;c[31]=86;c[32]=87;c[33]=88;c[34]=89;c[35]=90;Bm8=b;}
function SE(){var a=this;D.call(a);a.a=null;a.y0=null;a.y1=null;a.yZ=null;a.tQ=null;a.y3=null;a.y4=null;a.y2=null;a.iU=null;a.t=null;a.h1=null;a.vY=null;a.vW=null;a.vX=null;a.vZ=null;a.v0=null;a.Gl=null;}
function ZC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;a.h1=Zr(a,a.h1,b*4|0,0,c*4|0,5,17,5);e=0;while(e<4){f=0;while(f<4){g=0;while(g<16){h=a.h1.data;c=((e+0|0)*5|0)+f|0;i=((c+0|0)*17|0)+g|0;j=h[i+0|0];h=a.h1.data;b=((c+1|0)*17|0)+g|0;k=h[b+0|0];h=a.h1.data;l=((e+1|0)*5|0)+f|0;m=((l+0|0)*17|0)+g|0;n=h[m+0|0];h=a.h1.data;c=((l+1|0)*17|0)+g|0;o=h[c+0|0];p=(a.h1.data[i+1|0]-j)*0.125;q=(a.h1.data[b+1|0]-k)*0.125;r=(a.h1.data[m+1|0]-n)*0.125;s=(a.h1.data[c+1|0]-o)*0.125;t=0;while(t<8){u=(n-j)
*0.25;v=(o-k)*0.25;w=0;x=j;y=k;while(w<4){b=(w+(e*4|0)|0)<<11|(0+(f*4|0)|0)<<7;c=(g*8|0)+t|0;m=b|c;z=(y-x)*0.25;ba=0;c=S(c,64);bb=x;while(ba<4){i=0;if(c<0){L();i=BgP.b;}if(bb>0.0){L();i=Be6.b;}d.data[m]=i<<24>>24;m=m+128|0;bb=bb+z;ba=ba+1|0;}x=x+u;y=y+v;w=w+1|0;}j=j+p;k=k+q;n=n+r;o=o+s;t=t+1|0;}g=g+1|0;}f=f+1|0;}e=e+1|0;}}
function ACD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=0;f=b*16|0;c=c*16|0;while(e<16){g=0;while(g<16){h=f+e|0;i=c+g|0;j=a.tQ;k=h*0.03125;l=i*0.03125;m=Vf(j,k,l,0.0)+Cl(a.a)*0.2<=0.0?0:1;n=Vf(a.tQ,l,109.0134,k)+Cl(a.a)*0.2<=3.0?0:1;o=E0(a.y3,k*2.0,l*2.0)/3.0+3.0+Cl(a.a)*0.25|0;p=(-1);L();q=Be2.b;r=Be3.b;s=(((e*16|0)+g|0)*128|0)+128|0;t=127;while(t>=0){s=s+(-1)|0;if(t<=((0+E(a.a,6)|0)-1|0))d.data[s]=Be1.b<<24>>24;else{u=d.data;if(!u[s])p=(-1);else if(u[s]==Be6.b){if(p==(-1)){if(o<=0){q=0;r=Be6.b<<24>>
24;}else if(t>=60&&t<=65){q=Be2.b;r=Be3.b;if(n)q=0;if(n)r=Bfm.b;if(m)q=Bfl.b;if(m)r=Bfl.b;}if(t<64&&!q)q=BgP.b;if(t<63){u[s]=r<<24>>24;p=o;}else{u[s]=q<<24>>24;p=o;}}else if(p>0){p=p+(-1)|0;u[s]=r<<24>>24;}}}t=t+(-1)|0;}g=g+1|0;}e=e+1|0;}}
function Uj(a,b,c){var d,e;d=$rt_createByteArray(32768);e=A9B(a.t,d,b,c);ZC(a,b,c,d);ACD(a,b,c,d);AR4(a,b,c,d);Sp(e);return e;}
function AP1(a,b,c,d,e,f,g){Jo(a,b,c,d,e,f,g,1.0+N(a.a)*6.0,0.0,0.0,(-1),(-1),0.5);}
function Jo(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD;n=b*16|0;o=n+8|0;p=c*16|0;q=p+8|0;r=0.0;s=0.0;t=BbM(GA(a.a));if(l<=0)l=112-E(t,28)|0;u=0;if(k==(-1)){k=l/2|0;u=1;}v=E(t,l/2|0)+(l/4|0)|0;w=E(t,6)?0:1;x=S(h,1.0);y=h+2.0+16.0;y=y*y;z=o-16.0;ba=q-16.0;bb=o+16.0;bc=q+16.0;a:{while(true){if(k>=l)break a;bd=1.5+Br(k*3.1415927410125732/l)*h*1.0;be=bd*m;bf=BC(j);bg=Br(j);e=e+BC(i)*bf;f=f+bg;g=g+Br(i)*bf;j=(!w
?j*0.699999988079071:j*0.9200000166893005)+s*0.10000000149011612;i=i+r*0.10000000149011612;bh=s*0.8999999761581421;bf=r*0.75;s=bh+(N(t)-N(t))*N(t)*2.0;r=bf+(N(t)-N(t))*N(t)*4.0;if(!u&&k==v&&x>0){h=N(t)*0.5+0.5;bh=i-1.5707963705062866;j=j/3.0;Jo(a,b,c,d,e,f,g,h,bh,j,k,l,1.0);Jo(a,b,c,d,e,f,g,N(t)*0.5+0.5,i+1.5707963705062866,j,k,l,1.0);return;}if(!(!u&&!E(t,4))){bi=e-o;bj=g-q;bk=l-k|0;if(bi*bi+bj*bj-bk*bk>y)break;bl=bd*2.0;if(e>=z-bl&&g>=ba-bl&&e<=bb+bl&&g<=bc+bl){bm=(K(e-bd)-n|0)-1|0;bn=(K(e+bd)-n|0)+1|0;bo
=K(f-be)-1|0;bp=K(f+be)+1|0;bq=(K(g-bd)-p|0)-1|0;br=(K(g+bd)-p|0)+1|0;if(bm<0)bm=0;if(bn>16)bn=16;if(bo<1)bo=1;if(bp>120)bp=120;if(bq<0)bq=0;if(br>16)br=16;bs=0;bt=bm;while(!bs&&bt<bn){bu=bq;while(!bs&&bu<br){bv=bp+1|0;while(!bs){bw=S(bv,bo-1|0);if(bw<0)break;bx=(((bt*16|0)+bu|0)*128|0)+bv|0;if(bv>=0&&bv<128){by=d.data;bz=by[bx];L();if(!(bz!=Bf9.b&&by[bx]!=BgP.b))bs=1;if(bw&&bt!=bm&&bt!=(bn-1|0)&&bu!=bq&&bu!=(br-1|0))bv=bo;}bv=bv+(-1)|0;}bu=bu+1|0;}bt=bt+1|0;}if(!bs){while(bm<bn){bA=((bm+n|0)+0.5-e)/bd;bi=bA
*bA;bx=bq;while(bx<br){bB=((bx+p|0)+0.5-g)/bd;bC=(((bm*16|0)+bx|0)*128|0)+bp|0;bw=0;bD=bp-1|0;bB=bB*bB;while(bD>=bo){bl=(bD+0.5-f)/be;if(bl>(-0.7)&&bi+bl*bl+bB<1.0){by=d.data;bz=by[bC];L();if(bz==Be2.b)bw=1;if(!(bz!=Be6.b&&bz!=Be3.b&&bz!=Be2.b)){if(bD<10)by[bC]=Bf$.b<<24>>24;else{by[bC]=0;if(bw){bz=bC-1|0;if(by[bz]==Be3.b)by[bz]=Be2.b<<24>>24;}}}}bC=bC+(-1)|0;bD=bD+(-1)|0;}bx=bx+1|0;}bm=bm+1|0;}if(u)break a;}}}k=k+1|0;}return;}}
function AR4(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;GA(a.a);GA(a.a);e=b-8|0;f=b+8|0;g=c-8|0;h=c+8|0;while(e<=f){i=g;while(i<=h){j=E(a.a,E(a.a,E(a.a,40)+1|0)+1|0);if(E(a.a,15))j=0;k=0;while(k<j){l=(e*16|0)+E(a.a,16)|0;m=E(a.a,E(a.a,120)+8|0);n=(i*16|0)+E(a.a,16)|0;o=1;if(!E(a.a,4)){AP1(a,b,c,d,l,m,n);o=o+E(a.a,4)|0;}p=0;while(p<o){q=N(a.a)*3.1415927410125732*2.0;r=(N(a.a)-0.5)*2.0/8.0;Jo(a,b,c,d,l,m,n,N(a.a)*2.0+N(a.a),q,r,0,0,1.0);p=p+1|0;}k=k+1|0;}i=i+1|0;}e=e+1|0;}}
function Zr(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));a.vZ=H9(a.y4,a.vZ,c,d,e,f,1,h,1.0,0.0,1.0);a.v0=H9(a.y2,a.v0,c,d,e,f,1,h,100.0,0.0,100.0);a.vY=H9(a.yZ,a.vY,c,d,e,f,g,h,8.555150000000001,4.277575000000001,8.555150000000001);a.vW=H9(a.y0,a.vW,c,d,e,f,g,h,684.412,684.412,684.412);a.vX=H9(a.y1,a.vX,c,d,e,f,g,h,684.412,684.412,684.412);i=0;j=0;k=0;l=g;d=g-4|0;m=l/2.0;while(k<f){n=0;while(n<h){o=(a.vZ.data[j]+256.0)/512.0;if(o>1.0)o=1.0;p=a.v0.data[j]
/8000.0;if(p<0.0)p= -p;q=p*3.0-3.0;if(q>=0.0){if(q>1.0)q=1.0;q=q/6.0;}else{o=q/2.0;if(o<(-1.0))o=(-1.0);q=o/1.4/2.0;o=0.0;}r=o+0.5;s=m+q*l/16.0*4.0;j=j+1|0;t=0;while(t<g){p=t;u=(p-s)*12.0/r;if(u<0.0)u=u*4.0;v=a.vW.data[i]/512.0;q=a.vX.data[i]/512.0;w=(a.vY.data[i]/10.0+1.0)/2.0;if(w>=0.0)v=w>1.0?q:v+(q-v)*w;o=v-u;if(t>d){x=(t-d|0)/3.0;o=o*(1.0-x)+(-10.0)*x;}if(p<0.0){x=(0.0-p)/4.0;if(x<0.0)x=0.0;if(x>1.0)x=1.0;o=o*(1.0-x)+(-10.0)*x;}b.data[i]=o;i=i+1|0;t=t+1|0;}n=n+1|0;}k=k+1|0;}return b;}
function AH0(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=c*16|0;f=d*16|0;NP(a.a,a.t.lz);g=Long_add(Long_mul(Long_div(GA(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));h=Long_add(Long_mul(Long_div(GA(a.a),Long_fromInt(2)),Long_fromInt(2)),Long_fromInt(1));NP(a.a,Long_xor(Long_add(Long_mul(Long_fromInt(c),
g),Long_mul(Long_fromInt(d),h)),a.t.lz));i=0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYw();m=a.t;n=a.a;$p=1;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be3.b,32);m=a.t;n=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfm.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfp.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,
16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfq.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfr.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bg$.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c
=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfh.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfi.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfj.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfk.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50)
{l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p=15;continue _;case 1:XW(b,m,n,j,k,l);if(C()){break _;}i=i+1|0;if(i<4){j=(e+E(a.a,16)|0)+8|0;k=E(a.a,128);l=(f+E(a.a,16)|0)+8|0;b=AYw();m=a.t;n=a.a;continue _;}o=0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be3.b,32);m=a.t;n
=a.a;$p=2;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfm.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfp.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfq.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfr.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,
16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bg$.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfh.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfi.b);m=a.t;n=a.a;$p=11;continue _;}if
(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfj.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfk.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=
a.t;n=a.a;$p=15;continue _;case 2:ABZ(b,m,n,j,k,l);if(C()){break _;}o=o+1|0;if(o<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Be3.b,32);m=a.t;n=a.a;continue _;}j=0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfm.b,32);m=a.t;n=a.a;$p=3;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfp.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfq.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfr.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bg$.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,
Bfh.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfi.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfj.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfk.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p=15;continue _;case 3:ABZ(b,m,n,o,k,l);if(C()){break _;}j=j+1|0;if(j<10){o=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfm.b,32);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfp.b,16);m=a.t;n=a.a;$p=4;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,Bfq.b,8);m=a.t;n=a.a;$p=5;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfr.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bg$.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)
|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfh.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfi.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfj.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfk.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p
=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p=15;continue _;case 4:ABZ(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,128);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfp.b,16);m=a.t;n=a.a;continue _;}c=0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfq.b,8);m=a.t;n=a.a;$p=5;continue _;}if
(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfr.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bg$.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,
Bfh.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfi.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfj.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfk.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,
Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p=15;continue _;case 5:ABZ(b,m,n,j,k,l);if(C()){break _;}c=c+1|0;if(c<20){j=e+E(a.a,16)|0;k=E(a.a,64);l=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfq.b,8);m=a.t;n=a.a;continue _;}if(!E(a.a,1)){c=e+E(a.a,16)|0;j=E(a.a,32);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bfr.b,8);m=a.t;n=a.a;$p=6;continue _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)
|0;b=new Ch;L();Cm(b,Bg$.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfh.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfi.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,
4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfj.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfk.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p
=15;continue _;case 6:ABZ(b,m,n,c,j,k);if(C()){break _;}if(!E(a.a,4)){c=e+E(a.a,16)|0;j=E(a.a,16);k=f+E(a.a,16)|0;b=new Ch;L();Cm(b,Bg$.b,8);m=a.t;n=a.a;$p=7;continue _;}c=(E0(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfh.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e
+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfi.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfj.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfk.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p=15;continue _;case 7:ABZ(b,m,n,c,j,k);if(C()){break _;}c=(E0(a.iU,e*0.5,f*0.5)/8.0+Cl(a.a)*4.0+4.0)/3.0|0;if(c<0)c=0;m=GZ();if(!E(a.a,10))c=c+1|0;k=0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfh.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c
=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfi.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfj.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfk.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l
=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p=15;continue _;case 8:$z=ALP(q,l,p);if(C()){break _;}d=$z;$p=9;case 9:AES(m,b,n,l,d,p);if(C()){break _;}k=k+1|0;if(k<c){l=(e+E(a.a,16)|0)+8|0;p=(f+E(a.a,16)|0)+8|0;E7(m,1.0,1.0,1.0);b=a.t;n=a.a;q=a.t;$p=8;continue _;}c=0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfh.b);m=a.t;n=a.a;$p=10;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+
E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfi.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfj.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfk.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p=15;continue _;case 10:ACV(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<2){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,128);r=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfh.b);m=a.t;n=a.a;continue _;}if(!E(a.a,2)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfi.b);m=a.t;n=a.a;$p=11;continue _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfj.b);m=a.t;n=a.a;$p=12;continue _;}if
(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfk.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p=15;continue _;case 11:ACV(b,m,n,c,l,p);if(C()){break _;}if(!E(a.a,4)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,
16)|0)+8|0;b=new BR;L();BS(b,Bfj.b);m=a.t;n=a.a;$p=12;continue _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfk.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p=15;continue _;case 12:ACV(b,m,n,c,l,p);if(C())
{break _;}if(!E(a.a,8)){c=(e+E(a.a,16)|0)+8|0;l=E(a.a,128);p=(f+E(a.a,16)|0)+8|0;b=new BR;L();BS(b,Bfk.b);m=a.t;n=a.a;$p=13;continue _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p=15;continue _;case 13:ACV(b,m,n,c,l,p);if(C()){break _;}c=0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,
120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf9.b);m=a.t;n=a.a;$p=14;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p=15;continue _;case 14:AL9(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c<50){l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,120)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf9.b);m=a.t;n=a.a;continue _;}c=0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8
|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;$p=15;case 15:AL9(b,m,n,l,p,r);if(C()){break _;}c=c+1|0;if(c>=20)return;l=(e+E(a.a,16)|0)+8|0;p=E(a.a,E(a.a,E(a.a,112)+8|0)+8|0);r=(f+E(a.a,16)|0)+8|0;b=new Cn;L();Cs(b,Bf$.b);m=a.t;n=a.a;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function WE(){var a=this;D.call(a);a.gG=null;a.oT=null;a.xx=null;a.uY=null;a.zE=0;a.oe=0;a.fi=0;a.by=0;a.hw=0;a.oh=0;a.lq=0;a.hp=0;a.Jp=0;a.k3=0;a.nv=0;}
function Cv(a,b,c){a.oT.data[b]=c;}
function Er(a,b){return a.oT.data[b];}
function MO(a){return QS(a,0);}
function QS(a,b){Vw(a,b);return a.gG.data[(b*2|0)+1|0];}
function EN(a,b,c){a.gG.data[b*2|0]=c;}
function M4(a,b,c){a.gG.data[(b*2|0)+1|0]=c;}
function Hp(a,b){return a.gG.data[b*2|0];}
function JQ(a,b){return a.gG.data[(b*2|0)+1|0];}
function ANb(a,b){var c,d;c=Hp(a,b);d=JQ(a,b);if((d|c|(d-c|0))>=0&&d<=Bi(a.uY))return Ex(a.uY,c,d);return null;}
function AER(a){return PM(a,0);}
function PM(a,b){Vw(a,b);return a.gG.data[b*2|0];}
function AC_(a){if(a.gG.data[0]==(-1)){a.gG.data[0]=a.hw;a.gG.data[1]=a.hw;}a.k3=MO(a);}
function Tt(a,b){return a.xx.data[b];}
function FJ(a,b,c){a.xx.data[b]=c;}
function Vw(a,b){var c;if(!a.oe){c=new D3;P(c);M(c);}if(b>=0&&b<a.zE)return;c=new BT;Bo(c,V4(b));M(c);}
function ARG(a){a.oe=1;}
function A$1(a){return a.oe;}
function Xr(a,b,c,d){a.oe=0;a.nv=2;M5(a.gG,(-1));M5(a.oT,(-1));if(b!==null)a.uY=b;if(c>=0){a.fi=c;a.by=d;}a.hw=a.fi;}
function AAc(a){Xr(a,null,(-1),(-1));}
function AP5(a,b){a.hw=b;if(a.k3>=0)b=a.k3;a.k3=b;}
function A4x(a){return a.fi;}
function A7z(a){return a.by;}
function A5o(a,b){a.nv=b;}
function AWp(a){return a.nv;}
function A6s(a){return a.lq;}
function A3t(a){return a.oh;}
function A3X(a){return a.k3;}
function VY(){var a=this;D.call(a);a.ck=null;a.iJ=0;a.b8=0;a.ei=0;a.ea=0;a.b0=0;a.dM=0;}
function AOt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Bj(Bj((a.ea-a.iJ|0)+1|0,(a.b0-a.b8|0)+1|0),(a.dM-a.ei|0)+1|0)>32768){Cg(Dz(),B(888));return;}c=a.iJ;while(c<=a.ea){d=a.ei;while(d<=a.dM){e=c>>4;f=d>>4;g=Fk(b,c,0,d,1);if(g){$p=1;continue _;}if(g){if(a.b8<0)a.b8
=0;if(a.b0>=128)a.b0=127;h=a.b8;if(h<=a.b0){i=a.ck;$p=2;continue _;}}d=d+1|0;}c=c+1|0;}return;case 1:Z1(b,e,f);if(C()){break _;}a:while(true){if(g){if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;if(h<=a.b0){i=a.ck;$p=2;continue _;}}d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.ea)break a;d=a.ei;}e=c>>4;f=d>>4;g=Fk(b,c,0,d,1);if(!g)continue;else{continue _;}}return;case 2:$z=ALr(b,i,c,h,d);if(C()){break _;}j=$z;$p=3;case 3:$z=ACE(b,c,h,d);if(C()){break _;}k=$z;L();l=BgM.data[k];if(!l)l=1;m=0;if(a.ck===BkI){$p=4;continue _;}if
(a.ck===BkJ)m=BgO.data[k];if(l>=15&&!m){m=0;if(j!=m){i=a.ck;$p=11;continue _;}h=h+1|0;b:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.ea)break b;d=a.ei;}e=c>>4;f=d>>4;g=Fk(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;}i=a.ck;g=c-1|0;$p=5;continue _;case 4:$z=ZE(b,c,h,d);if(C()){break _;}g=$z;if(g)m=15;if(l>=15&&!m){m=0;if(j!=m){i=a.ck;$p=11;continue _;}h=h+1|0;c:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while
(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.ea)break c;d=a.ei;}e=c>>4;f=d>>4;g=Fk(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;}i=a.ck;g=c-1|0;$p=5;case 5:$z=ALr(b,i,g,h,d);if(C()){break _;}n=$z;i=a.ck;g=c+1|0;$p=6;case 6:$z=ALr(b,i,g,h,d);if(C()){break _;}o=$z;i=a.ck;g=h-1|0;$p=7;case 7:$z=ALr(b,i,c,g,d);if(C()){break _;}p=$z;i=a.ck;g=h+1|0;$p=8;case 8:$z=ALr(b,i,c,g,d);if(C()){break _;}q=$z;i=a.ck;g=d-1|0;$p=9;case 9:$z=ALr(b,i,c,h,g);if(C()){break _;}g
=$z;i=a.ck;r=d+1|0;$p=10;case 10:$z=ALr(b,i,c,h,r);if(C()){break _;}r=$z;if(o<=n)o=n;if(p<=o)p=o;if(q<=p)q=p;if(g<=q)g=q;if(r<=g)r=g;g=r-l|0;if(g<0)g=0;if(m<=g)m=g;if(j!=m){i=a.ck;$p=11;continue _;}h=h+1|0;d:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.ea)break d;d=a.ei;}e=c>>4;f=d>>4;g=Fk(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 11:AMC(b,i,c,h,d,m);if(C()){break _;}s=m-1|0;if(s<0)s=0;i=a.ck;g
=c-1|0;$p=12;case 12:AQf(b,i,g,h,d,s);if(C()){break _;}i=a.ck;g=h-1|0;$p=13;case 13:AQf(b,i,c,g,d,s);if(C()){break _;}i=a.ck;g=d-1|0;$p=14;case 14:AQf(b,i,c,h,g,s);if(C()){break _;}g=c+1|0;if(g>=a.ea){i=a.ck;$p=15;continue _;}g=h+1|0;if(g>=a.b0){i=a.ck;$p=16;continue _;}g=d+1|0;if(g>=a.dM){i=a.ck;$p=17;continue _;}h=h+1|0;e:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.ea)break e;d=a.ei;}e=c>>4;f=d>>4;g=Fk(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8
<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 15:AQf(b,i,g,h,d,s);if(C()){break _;}g=h+1|0;if(g>=a.b0){i=a.ck;$p=16;continue _;}g=d+1|0;if(g>=a.dM){i=a.ck;$p=17;continue _;}h=h+1|0;f:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.ea)break f;d=a.ei;}e=c>>4;f=d>>4;g=Fk(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 16:AQf(b,i,c,g,d,s);if(C()){break _;}g=d+1|0;if(g>=a.dM){i=a.ck;$p=17;continue _;}h
=h+1|0;g:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.ea)break g;d=a.ei;}e=c>>4;f=d>>4;g=Fk(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=127;h=a.b8;}return;case 17:AQf(b,i,c,h,g,s);if(C()){break _;}h=h+1|0;a:while(true){if(h<=a.b0){i=a.ck;$p=2;continue _;}while(true){d=d+1|0;while(d>a.dM){c=c+1|0;if(c>a.ea)break a;d=a.ei;}e=c>>4;f=d>>4;g=Fk(b,c,0,d,1);if(g){$p=1;continue _;}if(g)break;}if(a.b8<0)a.b8=0;if(a.b0>=128)a.b0=
127;h=a.b8;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function ALJ(a,b,c,d,e,f,g){var h,i,j;if(b>=a.iJ&&c>=a.b8&&d>=a.ei&&e<=a.ea&&f<=a.b0&&g<=a.dM)return 1;if(b>=(a.iJ-1|0)&&c>=(a.b8-1|0)&&d>=(a.ei-1|0)&&e<=(a.ea+1|0)&&f<=(a.b0+1|0)&&g<=(a.dM+1|0)){h=a.ea-a.iJ|0;i=a.b0-a.b8|0;j=a.dM-a.ei|0;if(b>a.iJ)b=a.iJ;if(c>a.b8)c=a.b8;if(d>a.ei)d=a.ei;if(e<a.ea)e=a.ea;if(f<a.b0)f=a.b0;if(g<a.dM)g=a.dM;if((Bj(Bj(e-b|0,f-c|0),g-d|0)-Bj(Bj(h,i),j)|0)<=2){a.iJ=b;a.b8=c;a.ei=d;a.ea=e;a.b0=f;a.dM=g;return 1;}}return 0;}
function Sf(){}
function AF$(){var a=this;Im.call(a);a.ik=0;a.ed=null;}
function AWq(a){var b=new AF$();A7d(b,a);return b;}
function A7d(a,b){OV(a,b);a.ed=$rt_createByteArray(8);}
function Rd(a,b,c,d){var e;if(b!==null){a.jp.jw(b,c,d);a.ik=a.ik+d|0;return;}e=new E5;P(e);M(e);}
function KR(a,b){a.jp.qF(b);a.ik=a.ik+1|0;}
function APu(a,b){UQ(a,$rt_doubleToLongBits(b));}
function APp(a,b){JV(a,$rt_floatToIntBits(b));}
function JV(a,b){a.ed.data[0]=b>>24<<24>>24;a.ed.data[1]=b>>16<<24>>24;a.ed.data[2]=b>>8<<24>>24;a.ed.data[3]=b<<24>>24;a.jp.jw(a.ed,0,4);a.ik=a.ik+4|0;}
function UQ(a,b){a.ed.data[0]=Long_shr(b,56).lo<<24>>24;a.ed.data[1]=Long_shr(b,48).lo<<24>>24;a.ed.data[2]=Long_shr(b,40).lo<<24>>24;a.ed.data[3]=b.hi<<24>>24;a.ed.data[4]=Long_shr(b,24).lo<<24>>24;a.ed.data[5]=Long_shr(b,16).lo<<24>>24;a.ed.data[6]=Long_shr(b,8).lo<<24>>24;a.ed.data[7]=b.lo<<24>>24;a.jp.jw(a.ed,0,8);a.ik=a.ik+8|0;}
function AAf(a,b){a.ed.data[0]=b>>8<<24>>24;a.ed.data[1]=b<<24>>24;a.jp.jw(a.ed,0,2);a.ik=a.ik+2|0;}
function AOh(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function Xy(a,b){var c,d,e;c=AGh(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new BL;Bo(b,B(889));M(b);}d=c.lo;e=$rt_createByteArray(d+2|0);Rd(a,e,0,APd(a,b,e,AOh(a,d,e,0)));}
function AGh(a,b){var c,d,e,f;c=0;d=Bi(b);e=0;while(e<d){f=Ba(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function APd(a,b,c,d){var e,f,g,h,i,j,k;e=Bi(b);f=0;while(f<e){g=Ba(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function AF4(){D.call(this);}
function Bm9(){var a=new AF4();A0s(a);return a;}
function A0s(a){return;}
function N5(){D.call(this);}
var Bm$=null;var Bm_=null;function Bna(){var a=new N5();ABv(a);return a;}
function ABv(a){return;}
function AB6(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=$rt_doubleToLongBits(b);c.ze=Long_eq(Long_and(d,new Long(0, 2147483648)),Long_ZERO)?0:1;e=Long_and(d,new Long(4294967295, 1048575));f=Long_shr(d,52).lo&2047;if(Long_eq(e,Long_ZERO)&&!f){c.u5=Long_ZERO;c.t5=0;return;}g=0;if(f)e=Long_or(e,new Long(0, 1048576));else{e=Long_shl(e,1);while(Long_eq(Long_and(e,new Long(0, 1048576)),Long_ZERO)){e=Long_shl(e,1);f=f+(-1)|0;g=g+1|0;}}h=AOy(Bm_,f);if(h<0)h= -h-2|0;i=12+(f-Bm_.data[h]|0)|0;j=QA(e,Bm$.data[h],i);if(Long_ge(j,
new Long(2808348672, 232830643))){h=h+1|0;i=12+(f-Bm_.data[h]|0)|0;j=QA(e,Bm$.data[h],i);}k=Long_shru(Bm$.data[h],(63-i|0)-g|0);l=Long_shr(Long_add(k,Long_fromInt(1)),1);m=Long_shr(k,1);if(Long_eq(e,new Long(0, 1048576)))m=Long_shr(m,2);n=Long_fromInt(10);while(Long_le(n,m)){n=Long_mul(n,Long_fromInt(10));}if(Long_ge(Long_rem(j,n),Long_div(m,Long_fromInt(2))))n=Long_div(n,Long_fromInt(10));o=Long_fromInt(1);while(Long_le(o,l)){o=Long_mul(o,Long_fromInt(10));}if(Long_gt(Long_sub(o,Long_rem(j,o)),Long_div(l,Long_fromInt(2))))o
=Long_div(o,Long_fromInt(10));f=Long_compare(n,o);e=f>0?Long_mul(Long_div(j,n),n):f<0?Long_add(Long_mul(Long_div(j,o),o),o):Long_mul(Long_div(Long_add(j,Long_div(o,Long_fromInt(2))),o),o);if(Long_ge(e,new Long(2808348672, 232830643))){h=h+1|0;e=Long_div(e,Long_fromInt(10));}else if(Long_lt(e,new Long(1569325056, 23283064))){h=h+(-1)|0;e=Long_mul(e,Long_fromInt(10));}c.u5=e;c.t5=h-330|0;}
function QA(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_and(b,Long_fromInt(65535));f=Long_and(Long_shru(b,16),Long_fromInt(65535));g=Long_and(Long_shru(b,32),Long_fromInt(65535));h=Long_and(Long_shru(b,48),Long_fromInt(65535));i=Long_and(c,Long_fromInt(65535));j=Long_and(Long_shru(c,16),Long_fromInt(65535));k=Long_and(Long_shru(c,32),Long_fromInt(65535));l=Long_and(Long_shru(c,48),Long_fromInt(65535));m=Long_add(Long_add(Long_mul(k,e),Long_mul(j,f)),Long_mul(i,g));n=Long_add(Long_add(Long_add(Long_mul(l,e),Long_mul(k,
f)),Long_mul(j,g)),Long_mul(i,h));o=Long_add(Long_add(Long_shl(Long_mul(l,h),32+d|0),Long_shl(Long_add(Long_mul(l,g),Long_mul(k,h)),16+d|0)),Long_shl(Long_add(Long_add(Long_mul(l,f),Long_mul(k,g)),Long_mul(j,h)),d));return Long_add(d>16?Long_add(o,Long_shl(n,d-16|0)):Long_add(o,Long_shru(n,16-d|0)),Long_shru(m,32-d|0));}
function ABt(){var b,c,d,e,f,g,h,i,j,k;Bm$=$rt_createLongArray(660);Bm_=$rt_createIntArray(660);b=new Long(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=Bm$.data;g=d+330|0;f[g]=Mr(e,Long_fromInt(80));Bm_.data[g]=c;e=Mr(e,Long_fromInt(10));h=AI3(e,Long_fromInt(10));while(Long_le(e,b)&&Long_eq(Long_and(e,new Long(0, 2147483648)),Long_ZERO)){e=Long_shl(e,1);c=c+1|0;h=Long_shl(h,1);}e=Long_add(e,Long_div(h,Long_fromInt(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Long_gt(e,new Long(3435973836, 214748364)))
{e=Long_shr(e,1);j=j+1|0;d=d+(-1)|0;}k=Long_mul(e,Long_fromInt(10));b=j<=0?k:Long_add(k,Long_shr(Long_mul(Long_and(b,Long_fromInt((1<<j)-1|0)),Long_fromInt(10)),j));f=Bm$.data;g=(330-i|0)-1|0;f[g]=Mr(b,Long_fromInt(80));Bm_.data[g]=d;i=i+1|0;}}
function HT(){D.call(this);}
function AMZ(){var a=this;HT.call(a);a.nM=null;a.rP=0;}
function Hb(a,b){var c=new AMZ();AUk(c,a,b);return c;}
function AUk(a,b,c){var d;a.rP=c;a.nM=J(PG,c);d=0;while(d<c){a.nM.data[d]=BbW(b);d=d+1|0;}}
function E0(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.rP){d=d+AG3(a.nM.data[f],b*e,c*e)/e;e=e/2.0;f=f+1|0;}return d;}
function Vf(a,b,c,d){var e,f,g;e=0.0;f=1.0;g=0;while(g<a.rP){e=e+Lj(a.nM.data[g],b*f,c*f,d*f)/f;f=f/2.0;g=g+1|0;}return e;}
function H9(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o;if(b===null)b=$rt_createDoubleArray(Bj(Bj(f,g),h));else{l=0;while(true){m=b.data;if(l>=m.length)break;m[l]=0.0;l=l+1|0;}}n=1.0;o=0;while(o<a.rP){AQA(a.nM.data[o],b,c,d,e,f,g,h,i*n,j*n,k*n,n);n=n/2.0;o=o+1|0;}return b;}
function ACX(){var a=this;D.call(a);a.jC=null;a.j_=0;a.FN=Long_ZERO;}
function ATz(a,b,c){var d=new ACX();A1E(d,a,b,c);return d;}
function A1E(a,b,c,d){a.jC=b;a.j_=c;a.FN=d;}
function PG(){var a=this;HT.call(a);a.b5=null;a.vh=0.0;a.yf=0.0;a.wy=0.0;}
function Bnb(){var a=new PG();A_P(a);return a;}
function BbW(a){var b=new PG();Zs(b,a);return b;}
function A_P(a){Zs(a,new DB);}
function Zs(a,b){var c,d,e,f,g;a.b5=$rt_createIntArray(512);a.vh=Cl(b)*256.0;a.yf=Cl(b)*256.0;a.wy=Cl(b)*256.0;c=0;while(c<256){d=a.b5.data;e=c+1|0;d[c]=c;c=e;}c=0;while(c<256){f=E(b,256-c|0)+c|0;g=a.b5.data[c];a.b5.data[c]=a.b5.data[f];a.b5.data[f]=g;a.b5.data[c+256|0]=a.b5.data[c];c=c+1|0;}}
function Lj(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;e=b+a.vh;f=c+a.yf;g=d+a.wy;h=e|0;i=f|0;j=g|0;if(e<h)h=h+(-1)|0;if(f<i)i=i+(-1)|0;if(g<j)j=j+(-1)|0;k=h&255;l=i&255;m=j&255;c=e-h;d=f-i;n=g-j;o=c*c*c*(c*(c*6.0-15.0)+10.0);p=d*d*d*(d*(d*6.0-15.0)+10.0);q=n*n*n*(n*(n*6.0-15.0)+10.0);r=a.b5.data[k]+l|0;s=a.b5.data[r]+m|0;t=a.b5.data[r+1|0]+m|0;u=a.b5.data[k+1|0]+l|0;v=a.b5.data[u]+m|0;w=a.b5.data[u+1|0]+m|0;e=Dr(a,a.b5.data[s],c,d,n);k=a.b5.data[v];x=c-1.0;b=DN(a,o,e,Dr(a,k,x,d,n));k=a.b5.data[t];e
=d-1.0;b=DN(a,p,b,DN(a,o,Dr(a,k,c,e,n),Dr(a,a.b5.data[w],x,e,n)));k=a.b5.data[s+1|0];f=n-1.0;return DN(a,q,b,DN(a,p,DN(a,o,Dr(a,k,c,d,f),Dr(a,a.b5.data[v+1|0],x,d,f)),DN(a,o,Dr(a,a.b5.data[t+1|0],c,e,f),Dr(a,a.b5.data[w+1|0],x,e,f))));}
function DN(a,b,c,d){return c+b*(d-c);}
function Dr(a,b,c,d,e){var f,g;f=b&15;g=f>=8?d:c;if(f>=4)d=f!=12&&f!=14?e:c;if(f&1)g= -g;if(f&2)d= -d;return g+d;}
function AG3(a,b,c){return Lj(a,b,c,0.0);}
function A4U(a,b,c,d){return Lj(a,b,c,d);}
function AQA(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;m=0;n=1.0/l;o=(-1);p=0.0;q=0.0;r=0.0;s=0.0;t=0;while(t<f){u=(c+t|0)*i+a.vh;v=u|0;if(u<v)v=v+(-1)|0;w=v&255;u=u-v;x=u*u*u*(u*(u*6.0-15.0)+10.0);y=0;v=w+1|0;z=u-1.0;while(y<h){ba=(e+y|0)*k+a.wy;bb=ba|0;if(ba<bb)bb=bb+(-1)|0;bc=bb&255;bd=ba-bb;be=bd*bd*bd*(bd*(bd*6.0-15.0)+10.0);bf=0;ba=bd-1.0;while(bf<g){bg=(d+bf|0)*j+a.yf;bh=bg|0;if(bg<bh)bh=bh+(-1)|0;bi=bh&255;l=bg-bh;bj=l*l*l*(l*(l
*6.0-15.0)+10.0);if(bf&&bi==o)bi=o;else{bk=a.b5.data[w]+bi|0;bl=a.b5.data[bk]+bc|0;bm=a.b5.data[bk+1|0]+bc|0;bn=a.b5.data[v]+bi|0;bo=a.b5.data[bn]+bc|0;bp=a.b5.data[bn+1|0]+bc|0;p=DN(a,x,Dr(a,a.b5.data[bl],u,l,bd),Dr(a,a.b5.data[bo],z,l,bd));bn=a.b5.data[bm];bq=l-1.0;q=DN(a,x,Dr(a,bn,u,bq,bd),Dr(a,a.b5.data[bp],z,bq,bd));r=DN(a,x,Dr(a,a.b5.data[bl+1|0],u,l,ba),Dr(a,a.b5.data[bo+1|0],z,l,ba));s=DN(a,x,Dr(a,a.b5.data[bm+1|0],u,bq,ba),Dr(a,a.b5.data[bp+1|0],z,bq,ba));}br=b.data;bs=DN(a,be,DN(a,bj,p,q),DN(a,bj,
r,s));bn=m+1|0;br[m]=br[m]+bs*n;bf=bf+1|0;m=bn;o=bi;}y=y+1|0;}t=t+1|0;}}
function Ui(){D.call(this);this.gB=null;}
function Lz(a){var b=new Ui();AJJ(b,a);return b;}
function AIQ(a){var b=new Ui();A0P(b,a);return b;}
function AJJ(a,b){a.gB=$rt_createByteArray(b>>1);}
function A0P(a,b){a.gB=b;}
function G7(a,b,c,d){var e,f;e=b<<11|d<<7|c;f=e>>1;return !(e&1)?a.gB.data[f]&15:a.gB.data[f]>>4&15;}
function Ek(a,b,c,d,e){var f,g;f=b<<11|d<<7|c;g=f>>1;if(!(f&1))a.gB.data[g]=(a.gB.data[g]&240|e&15)<<24>>24;else a.gB.data[g]=(a.gB.data[g]&15|(e&15)<<4)<<24>>24;}
function Mn(a){return a.gB===null?0:1;}
function VC(){Fc.call(this);}
var Bnc=null;function Mr(b,c){return Long_udiv(b, c);}
function AI3(b,c){return Long_urem(b, c);}
function AL8(){Bnc=F($rt_longcls());}
function TP(){D.call(this);this.CN=null;}
function ASy(a){CM(a.CN,K8(1));}
function A4C(a){ASy(a);}
function TM(){D.call(this);this.Di=null;}
function ASF(a){CM(a.Di,K8(0));}
function AYt(a){ASF(a);}
function Rs(){D.call(this);this.BB=null;}
function XY(a){CM(a.BB,K8(1));}
function A80(a){XY(a);}
function Rv(){D.call(this);this.BU=null;}
function ASp(a){CM(a.BU,K8(0));}
function A7m(a){ASp(a);}
function E3(){EX.call(this);}
var Bnd=null;var BfQ=null;var Bne=null;var Bnf=null;function ANi(){var b,c,d;b=new E3;FU(b,B(890),0);Bnd=b;b=new E3;FU(b,B(891),1);BfQ=b;b=new E3;FU(b,B(892),2);Bne=b;c=J(E3,3);d=c.data;d[0]=Bnd;d[1]=BfQ;d[2]=Bne;Bnf=c;}
function Rt(){var a=this;D.call(a);a.ET=null;a.Et=null;a.y6=null;a.vJ=null;a.Bp=0;a.Da=0;a.xl=null;}
function AMQ(a){var b,c;b=a.ET.result;if(b!==null&&b.key!==null&&b.value!==null){c=$rt_str(AZ3(b.key));if(c!==null&&IF(c,a.vJ)&&!(!a.Bp&&Hl(c,47,Bi(a.vJ)+1|0)!=(-1))){if(!(UI(b.value)?1:0))Fy(a.xl,ATz(c,0,Long_add(new Long(596067632, 383),Long_fromInt(A0T(b.value)))));else if(a.Da)Fy(a.xl,ATz(c,1,Long_fromInt(-1)));}b.continue();return;}CM(a.Et,CZ(a.y6.data[0]));}
function A7t(a){AMQ(a);}
function Ru(){var a=this;D.call(a);a.DT=null;a.wO=null;}
function ALf(a){CM(a.DT,CZ(a.wO.data[0]<=0?(-1):a.wO.data[0]));}
function A1S(a){ALf(a);}
function Rq(){var a=this;D.call(a);a.CV=null;a.vb=null;}
function ACB(a){CM(a.CV,a.vb.result===null?Bne:!(UI(a.vb.result)?1:0)?Bnd:BfQ);}
function A53(a){ACB(a);}
function Rr(){D.call(this);this.El=null;}
function ACe(a){CM(a.El,Bne);}
function A3p(a){ACe(a);}
function Et(){D.call(this);}
function E7(a,b,c,d){return;}
function Rl(){Et.call(this);}
function GZ(){var a=new Rl();A69(a);return a;}
function A69(a){return;}
function AES(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,3)+4|0;h=1;if(e>=1){i=e+g|0;if((i+1|0)<=128){j=(e+1|0)+g|0;k=j-2|0;l=e;a:while(true){if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;while(o<=(d+n
|0)&&h){p=f-n|0;while(p<=(f+n|0)&&h){if(l>=0&&l<128)break a;h=0;p=p+1|0;}o=o+1|0;}l=l+1|0;}$p=7;continue _;}}return 0;case 1:$z=ACE(b,d,m,f);if(C()){break _;}k=$z;L();if(!(k!=Be2.b&&k!=Be3.b)&&e<((128-g|0)-1|0)){k=Be3.b;$p=2;continue _;}return 0;case 2:ALA(b,d,m,f,k);if(C()){break _;}k=(e-3|0)+g|0;b:while(true){if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;while(r<=l){j=r-d|0;s=m;while(s<=h){t=s-f|0;if(Ii(j)!=q)break b;if(Ii(t)!=q)break b;if(E(c,
2)&&o)break b;s=s+1|0;}r=r+1|0;}k=k+1|0;}u=BgL.data;$p=5;continue _;case 3:$z=ACE(b,d,o,f);if(C()){break _;}m=$z;if(m&&m!=Bfc.b){k=k+1|0;if(k>=g)return 1;o=e+k|0;continue _;}m=Bfb.b;$p=4;case 4:ALA(b,d,o,f,m);if(C()){break _;}k=k+1|0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;case 5:$z=ACE(b,r,k,s);if(C()){break _;}t=$z;if(!u[t]){t=Bfc.b;$p=6;continue _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h
=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(Ii(j)!=q)break;if(Ii(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=BgL.data;continue _;case 6:ALA(b,r,k,s,t);if(C()){break _;}while(true){s=s+1|0;while(s>h){r=r+1|0;while(r>l){k=k+1|0;if(k>i){k=0;if(k>=g)return 1;o=e+k|0;$p=3;continue _;}o=k-i|0;q=1-(o/2|0)|0;r=d-q|0;l=d+q|0;m=f-q|0;h=f+q|0;}j=r-d|0;s=m;}t=s-f|0;if(Ii(j)!=q)break;if(Ii(t)!=q)break;if(!E(c,2))continue;if(!o)continue;else break;}u=BgL.data;$p=5;continue _;case 7:$z=ACE(b,o,l,p);if(C()){break _;}r
=$z;if(r){L();if(r!=Bfc.b)h=0;}while(true){p=p+1|0;while(!(p<=(f+n|0)&&h)){o=o+1|0;while(!(o<=(d+n|0)&&h)){l=l+1|0;if(l>j){if(!h)return 0;m=e-1|0;$p=1;continue _;}n=1;if(l==e)n=0;if(l>=k)n=2;o=d-n|0;}p=f-n|0;}if(l>=0&&l<128)break;h=0;}continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function RW(){Eo.call(this);this.DH=null;}
function TW(a){var b;b=new RQ;NN(b,a.DH);return b;}
function OA(){D.call(this);this.JF=0;}
var Bng=null;var Bnh=null;function AX$(a){var b=new OA();AOg(b,a);return b;}
function AOg(a,b){a.JF=b;}
function K8(b){return !b?Bnh:Bng;}
function AHS(){Bng=AX$(1);Bnh=AX$(0);}
function RQ(){Gr.call(this);}
function JJ(a){N1(a);return a.gA;}
function A_s(a){return JJ(a);}
function SX(){var a=this;CT.call(a);a.Ah=null;a.fS=null;a.xD=0;a.f3=0;}
function AD_(a){Dy(a.bG);AP2(1);T(a.bG,Dj(0,(a.bm/2|0)-100|0,(a.bC/4|0)+120|0,B(598)));}
function ANO(a){AP2(0);}
function AYC(a){a.xD=a.xD+1|0;}
function AHn(a,b){var c,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.gC&&!b.cl){b=a.fS;$p=1;continue _;}return;case 1:ACn(b);if(C()){break _;}c=a.J;b=null;$p=2;case 2:AD1(c,b);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,$p);}
function AC5(a,b,c){var d,e;if(c==200)a.f3=(a.f3-1|0)&3;if(!(c!=208&&c!=28))a.f3=(a.f3+1|0)&3;if(c==14&&Bi(a.fS.gt.data[a.f3])>0)a.fS.gt.data[a.f3]=Ex(a.fS.gt.data[a.f3],0,Bi(a.fS.gt.data[a.f3])-1|0);if(UO(B(893),b)>=0&&Bi(a.fS.gt.data[a.f3])<15){d=a.fS.gt.data;c=a.f3;e=new V;X(e);e=I(e,a.fS.gt.data[a.f3]);DQ(e,b);d[c]=W(e);}}
function ABA(a,b,c,d){var e,f,g,h,i,j,k,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABo(a);if(C()){break _;}DG(a,a.bZ,a.Ah,a.bm/2|0,40,16777215);B3();Bw(a.bm/2|0,a.bC/2|0,50.0);CC((-60.0),(-60.0),(-60.0));Bv(180.0,0.0,1.0,0.0);if(!((a.xD/6|0)%2|0))a.fS.rG=a.f3;e=a.fS;$p=2;case 2:$z=AMo(e);if(C()){break _;}f=$z;Bv((f*360|0)/16.0,0.0,1.0,0.0);e=BkC;g=a.fS;h=(-0.5);i=(-0.75);j
=(-0.5);k=0.0;$p=3;case 3:AFt(e,g,h,i,j,k);if(C()){break _;}a.fS.rG=(-1);BE();$p=4;case 4:AFJ(a,b,c,d);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function IQ(){EX.call(this);this.Ae=0;}
var BkI=null;var BkJ=null;var Bni=null;function A_W(a,b,c){var d=new IQ();AG8(d,a,b,c);return d;}
function AG8(a,b,c,d){FU(a,b,c);a.Ae=d;}
function AFA(){var b,c;BkI=A_W(B(894),0,15);BkJ=A_W(B(895),1,0);b=J(IQ,2);c=b.data;c[0]=BkI;c[1]=BkJ;Bni=b;}
function ML(){var a=this;D.call(a);a.nl=null;a.nY=null;}
function A0d(a){return a.nY;}
function Th(a,b){var c;c=a.nY;a.nY=b;return c;}
function AXM(a){return a.nl;}
function Lg(){var a=this;ML.call(a);a.db=null;a.dk=null;a.lH=0;a.jo=0;}
function M8(a){var b;b=LW(a);if(b==2){if(LW(a.dk)<0)a.dk=O3(a.dk);return PI(a);}if(b!=(-2))return a;if(LW(a.db)>0)a.db=PI(a.db);return O3(a);}
function LW(a){return (a.dk===null?0:a.dk.lH)-(a.db===null?0:a.db.lH)|0;}
function O3(a){var b;b=a.db;a.db=b.dk;b.dk=a;FQ(a);FQ(b);return b;}
function PI(a){var b;b=a.dk;a.dk=b.db;b.db=a;FQ(a);FQ(b);return b;}
function FQ(a){var b,c;b=a.dk===null?0:a.dk.lH;c=a.db===null?0:a.db.lH;a.lH=DE(b,c)+1|0;a.jo=1;if(a.db!==null)a.jo=a.jo+a.db.jo|0;if(a.dk!==null)a.jo=a.jo+a.dk.jo|0;}
function AOr(a,b){return b?a.dk:a.db;}
function W1(){D.call(this);}
function Bnj(){var a=new W1();AX8(a);return a;}
function AX8(a){return;}
function AI_(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p
=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ez(b,d,e,f,B(896),4.0,(1.0+(N(b.q)-N(b.q))*0.20000000298023224)*0.699999988079071);h=Gb();i=16;j=0;k=15.0;a:while(true){if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D4(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;while(n<i){o=0;while(o<i){if(!(j&&j!=15&&n&&n!=15&&o&&o!=15)){r=j/k*2.0-1.0;s=n/k*2.0-1.0;t
=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.q)*0.6000000238418579);y=0.30000001192092896;z=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;if(x>0.0)break a;}o=o+1|0;}n=n+1|0;}j=j+1|0;}bc=K(l);bd=K(v);be=K(w);$p=9;continue _;case 1:$z=ADR(b,c,q);if(C()){break _;}q=$z;bf=BY(d,e,f);bg=0;while(true){if(bg>=CY(q)){bh=Ci();DF(bh,h);bi=CY(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eG;bl=bk.e2;bm=bk.eH;$p=4;continue _;}bn=
Z(q,bg);bj=Sv(bn,d,e,f)/l;if(bj<=1.0)break;bg=bg+1|0;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;case 2:$z=ADH(b,bf,bh);if(C()){break _;}x=$z;bs=x;bt=(1.0-bj)*bs;m=(bt*bt+bt)/2.0*8.0*l+1.0|0;$p=3;case 3:bn.fs(c,m);if(C()){break _;}bn.g=bn.g+v*bt;bn.i=bn.i+w*bt;bn.h=bn.h+z*bt;while(true){bg=bg+1|0;if(bg>=CY(q)){bh=Ci();DF(bh,h);bi=CY(bh)-1|0;r=g;s=d*1.0;u=e*1.0;bj=f*1.0;if(bi<0)return;bk=Z(bh,bi);m=bk.eG;bl=bk.e2;bm=bk.eH;$p=4;continue _;}bn=Z(q,bg);bj=Sv(bn,d,
e,f)/l;if(bj>1.0)continue;else break;}bo=bn.d-d;bp=bn.j-e;bq=bn.e-f;br=Ce(bo*bo+bp*bp+bq*bq);v=bo/br;w=bp/br;z=bq/br;bh=bn.L;$p=2;continue _;case 4:$z=ACE(b,m,bl,bm);if(C()){break _;}bu=$z;bv=0;y=m;bw=bl;x=bm;while(bv<1){bq=y+N(b.q);l=bw+N(b.q);v=x+N(b.q);w=bq-d;z=l-e;ba=v-f;bb=Ce(w*w+z*z+ba*ba);w=w/bb;z=z/bb;ba=ba/bb;bb=0.5/(bb/r+0.1)*(N(b.q)*N(b.q)+0.30000001192092896);w=w*bb;z=z*bb;ba=ba*bb;BV(b,B(223),(bq+s)/2.0,(l+u)/2.0,(v+bj)/2.0,w,z,ba);BV(b,B(256),bq,l,v,w,z,ba);bv=bv+1|0;}if(bu>0){L();c=Be0.data[bu];$p
=5;continue _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eG;bl=bk.e2;bm=bk.eH;continue _;case 5:$z=AEQ(b,m,bl,bm);if(C()){break _;}bv=$z;g=0.30000001192092896;$p=6;case 6:c.HY(b,m,bl,bm,bv,g);if(C()){break _;}bv=0;$p=7;case 7:APE(b,m,bl,bm,bv);if(C()){break _;}c=Be0.data[bu];$p=8;case 8:c.sO(b,m,bl,bm);if(C()){break _;}bi=bi+(-1)|0;if(bi<0)return;bk=Z(bh,bi);m=bk.eG;bl=bk.e2;bm=bk.eH;$p=4;continue _;case 9:$z=ACE(b,bc,bd,be);if(C()){break _;}bx=$z;if(bx>0){L();x=x-(Be0.data[bx].yt(c)+0.30000001192092896)
*y;}if(x>0.0)Xq(h,CO(bc,bd,be));l=l+z;v=v+ba;w=w+bb;x=x-0.22500000894069672;while(x<=0.0){while(true){o=o+1|0;while(o>=i){n=n+1|0;while(n>=i){j=j+1|0;if(j>=i){l=g*2.0;m=K(d-l-1.0);n=K(d+l+1.0);o=K(e-l-1.0);p=K(e+l+1.0);q=D4(m,o,K(f-l-1.0),n,p,K(f+l+1.0));$p=1;continue _;}n=0;}o=0;}if(!j)break;if(j==15)break;if(!n)break;if(n==15)break;if(!o)break;if(o!=15)continue;else break;}r=j/k*2.0-1.0;s=n/k*2.0-1.0;t=o/k*2.0-1.0;u=Ed(r*r+s*s+t*t);l=r/u;v=s/u;w=t/u;x=g*(0.699999988079071+N(b.q)*0.6000000238418579);y=0.30000001192092896;z
=l*0.30000001192092896;ba=v*0.30000001192092896;bb=w*0.30000001192092896;l=d;v=e;w=f;}bc=K(l);bd=K(v);be=K(w);continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,$p);}
function ARr(){Et.call(this);}
function AYw(){var a=new ARr();A05(a);return a;}
function A05(a){return;}
function XW(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=E(c,2)+2|0;h=E(c,2)+2|0;i=0;j=(d-g|0)-1|0;k=(d+g|0)+1|0;l=e-1|0;m=e+3|0;n=m+1|0;o=(f-h|0)-1|0;p=(f+h|0)+1|0;q=j;a:while(true){r=S(q,
k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg6.b;$p=2;continue _;}t=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;while(true){t=S(s,n);if(t>0)break;v=o;w=S(v,p);if(w<=0)break a;s=s+1|0;}q=q+1|0;}$p=1;case 1:$z
=AB9(b,q,s,v);if(C()){break _;}x=$z;if(s==l&&!x.dw())return 0;if(!t&&!x.dw())return 0;if(!(q!=j&&r&&v!=o&&w)&&s==e){$p=5;continue _;}v=v+1|0;while(true){w=S(v,p);if(w<=0)break;s=s+1|0;while(true){t=S(s,n);if(t<=0)break;q=q+1|0;r=S(q,k);if(r>0){if(i>=1&&i<=5){r=j;c:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg6.b;$p=2;continue _;}t=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break c;t
=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}continue _;case 2:APE(b,d,e,f,k);if(C()){break _;}$p=3;case 3:$z=ANG(b,d,e,f);if(C()){break _;}b=$z;b.jO=ADM(a,c);return 1;case 4:$z=ACE(b,o,e,j);if(C()){break _;}r=$z;if(!r){u=0;r=o-1|0;$p=6;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=Bg6.b;$p=2;continue _;case 5:$z=ACE(b,q,s,v);if(C()){break _;}u
=$z;if(!u){u=s+1|0;$p=7;continue _;}v=v+1|0;while(true){w=S(v,p);if(w<=0)break;s=s+1|0;while(true){t=S(s,n);if(t<=0)break;q=q+1|0;r=S(q,k);if(r>0){if(i>=1&&i<=5){r=j;b:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg6.b;$p=2;continue _;}t=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break b;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q
=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 6:$z=AB9(b,r,e,j);if(C()){break _;}x=$z;if(x.dw())u=1;r=o+1|0;$p=10;continue _;case 7:$z=ACE(b,q,u,v);if(C()){break _;}u=$z;if(!u)i=i+1|0;v=v+1|0;while(true){w=S(v,p);if(w<=0)break;s=s+1|0;while(true){t=S(s,n);if(t<=0)break;q=q+1|0;r=S(q,k);if(r>0){if(i>=1&&i<=5){r=j;d:while(true){s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg6.b;$p=2;continue _;}t
=m;while(true){u=S(t,l);if(u<0)break;v=o;i=S(v,p);if(i<=0)break d;t=t+(-1)|0;}r=r+1|0;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;}return 0;}s=l;}v=o;}$p=1;continue _;case 8:$z=AB9(b,r,t,v);if(C()){break _;}x=$z;if(x.dw()){if(!u&&E(c,4)){L();q=Bff.b;$p=14;continue _;}L();q=Be$.b;$p=12;continue _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while
(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg6.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){continue _;}q=t-1|0;$p=9;case 9:$z=AB9(b,r,q,v);if(C()){break _;}x=$z;if(x.dw()){$p=8;continue _;}q=0;$p=11;continue _;case 10:$z=AB9(b,r,e,j);if(C()){break _;}x=$z;if(x.dw())u=u+1|0;r=j-1|0;$p=13;continue _;case 11:APE(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r
=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg6.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 12:APE(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)
|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg6.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 13:$z=AB9(b,o,e,r);if(C()){break _;}x=$z;if(x.dw())u=u+1|0;r=j+1|0;$p=16;continue _;case 14:APE(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g
|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg6.b;$p=2;continue _;}t=m;}v=o;}if(r!=j&&u&&v!=o&&s&&t!=n&&i){q=0;$p=15;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 15:APE(b,r,t,v,q);if(C()){break _;}v=v+1|0;while(true){i=S(v,p);if(i<=0)break;t=t+(-1)|0;while(true){u=S(t,l);if(u>=0)break;r=r+1|0;s=S(r,k);if(s>0){q=0;m=(g*2|0)+1|0;k=27;p=(h*2|0)+1|0;while(q<2){l=0;if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;}L();k=Bg6.b;$p=2;continue _;}t=m;}v=o;}if(r!=j
&&u&&v!=o&&s&&t!=n&&i){q=0;continue _;}if(t<0){$p=8;continue _;}q=t-1|0;$p=9;continue _;case 16:$z=AB9(b,o,e,r);if(C()){break _;}x=$z;if(x.dw())u=u+1|0;if(u==1){L();r=Bg8.b;$p=17;continue _;}l=l+1|0;while(true){if(l<3){o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}q=q+1|0;if(q>=2)break;l=0;}L();k=Bg6.b;$p=2;continue _;case 17:APE(b,o,e,j,r);if(C()){break _;}$p=18;case 18:$z=ANG(b,o,e,j);if(C()){break _;}x=$z;y=x;n=0;while(n<8){z=AHt(a,c);if(z!==null)AHF(y,E(c,k),z);n=n+1|0;}while(true){q=q+1|0;if(q
>=2)break;l=0;if(l>=3)continue;else{o=(d+E(c,m)|0)-g|0;j=(f+E(c,p)|0)-h|0;$p=4;continue _;}}L();k=Bg6.b;$p=2;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$p);}
function AHt(a,b){var c,d;a:{c=E(b,10);if(!c){d=new Cd;BB();DD(d,BiT);break a;}if(c==1){d=new Cd;BB();Gq(d,Bh1,E(b,4)+1|0);break a;}if(c==2){d=new Cd;BB();DD(d,Biq);break a;}if(c==3){d=new Cd;BB();Gq(d,BhO,E(b,4)+1|0);break a;}if(c==4){d=new Cd;BB();Gq(d,Bgp,E(b,4)+1|0);break a;}if(c==5){d=new Cd;BB();Gq(d,Bgq,E(b,4)+1|0);break a;}if(c==6){d=new Cd;BB();DD(d,BiP);break a;}if(c==7&&!E(b,100)){d=new Cd;BB();DD(d,BiN);break a;}d=null;}return d;}
function ADM(a,b){var c;c=E(b,4);return !c?B(861):c==1?B(864):c==2?B(864):c!=3?B(3):B(862);}
function Ch(){var a=this;Et.call(a);a.z0=0;a.c3=0;}
function Bnk(a,b){var c=new Ch();Cm(c,a,b);return c;}
function Cm(a,b,c){a.z0=b;a.c3=c;}
function ABZ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=N(c)*3.1415927410125732;h=d+8|0;i=h+Br(g)*a.c3/8.0;j=
h-Br(g)*a.c3/8.0;h=f+8|0;k=h+BC(g)*a.c3/8.0;l=h-BC(g)*a.c3/8.0;m=(e+E(c,3)|0)+2|0;n=(e+E(c,3)|0)+2|0;o=0;j=j-i;n=n-m;p=l-k;while(o<=a.c3){q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Br(h/a.c3)+1.0)*q+1.0;v=(Br(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;while(w<=e){ba=f;while(ba<=x){bb=y;while(bb<=z){bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be<1.0){$p=1;continue _;}bb=bb+1|0;}ba=ba+1|0;}w=w+1|0;}o=o+1|0;}return 1;case 1:$z
=ACE(b,w,ba,bb);if(C()){break _;}bf=$z;L();if(bf==Be6.b){d=a.z0;$p=2;continue _;}a:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c3)break a;q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Br(h/a.c3)+1.0)*q+1.0;v=(Br(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{continue _;}}return 1;case 2:ALA(b,
w,ba,bb,d);if(C()){break _;}b:while(true){bb=bb+1|0;while(bb>z){ba=ba+1|0;while(ba>x){w=w+1|0;while(w>e){o=o+1|0;if(o>a.c3)break b;q=o;r=i+j*q/a.c3;s=m+n*q/a.c3;t=k+p*q/a.c3;q=Cl(c)*a.c3/16.0;h=o*3.1415927410125732;u=(Br(h/a.c3)+1.0)*q+1.0;v=(Br(h/a.c3)+1.0)*q+1.0;q=u/2.0;w=r-q|0;e=r+q|0;l=v/2.0;f=s-l|0;x=s+l|0;y=t-q|0;z=t+q|0;}ba=f;}bb=y;}bc=(w+0.5-r)/q;bd=(ba+0.5-s)/l;be=(bb+0.5-t)/q;if(bc*bc+bd*bd+be*be>=1.0)continue;else{$p=1;continue _;}}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,
r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,$p);}
function BR(){Et.call(this);this.ug=0;}
function Bnl(a){var b=new BR();BS(b,a);return b;}
function BS(a,b){a.ug=b;}
function ACV(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;case 1:$z=ACE(b,h,i,j);if(C()){break _;}k=$z;if(!k){L();l=Be0.data[a.ug];$p=2;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;continue _;case 2:$z
=l.Hh(b,h,i,j);if(C()){break _;}k=$z;if(k){k=a.ug;$p=3;continue _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;case 3:ALA(b,h,i,j,k);if(C()){break _;}g=g+1|0;if(g>=64)return 1;h=(d+E(c,8)|0)-E(c,8)|0;i=(e+E(c,4)|0)-E(c,4)|0;j=(f+E(c,8)|0)-E(c,8)|0;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function Cn(){Et.call(this);this.EX=0;}
function Bnm(a){var b=new Cn();Cs(b,a);return b;}
function Cs(a,b){a.EX=b;}
function AL9(a,b,c,d,e,f){var g,h,i,j,k,l,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=e+1|0;$p=1;case 1:$z=ACE(b,d,g,f);if(C()){break _;}g=$z;L();if(g!=Be6.b)return 0;g=e-1|0;$p=2;case 2:$z=ACE(b,d,g,f);if(C()){break _;}h=$z;if(h!=Be6.b)return 0;$p=3;case 3:$z=ACE(b,d,e,f);if(C()){break _;}g=$z;if(g){$p=5;continue _;}g=0;h=d-1|0;$p=4;case 4:$z=ACE(b,h,e,f);if(C()){break _;}i
=$z;if(i==Be6.b)g=1;i=d+1|0;$p=6;continue _;case 5:$z=ACE(b,d,e,f);if(C()){break _;}g=$z;if(g!=Be6.b)return 0;g=0;h=d-1|0;$p=4;continue _;case 6:$z=ACE(b,i,e,f);if(C()){break _;}j=$z;if(j==Be6.b)g=g+1|0;k=f-1|0;$p=7;case 7:$z=ACE(b,d,e,k);if(C()){break _;}j=$z;if(j==Be6.b)g=g+1|0;j=f+1|0;$p=8;case 8:$z=ACE(b,d,e,j);if(C()){break _;}l=$z;if(l==Be6.b)g=g+1|0;l=0;$p=9;case 9:$z=ACE(b,h,e,f);if(C()){break _;}h=$z;if(!h)l=1;$p=10;case 10:$z=ACE(b,i,e,f);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=11;case 11:$z=ACE(b,
d,e,k);if(C()){break _;}h=$z;if(!h)l=l+1|0;$p=12;case 12:$z=ACE(b,d,e,j);if(C()){break _;}h=$z;if(!h)l=l+1|0;if(g==3&&l==1){g=a.EX;$p=13;continue _;}return 1;case 13:APE(b,d,e,f,g);if(C()){break _;}return 1;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,$p);}
function SM(){C2.call(this);}
function Zf(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;a.i=a.i+0.002;b=a.g;c=a.i;d=a.h;$p=1;case 1:ARM(a,b,c,d);if(C()){break _;}a.g=a.g*0.8500000238418579;a.i=a.i*0.8500000238418579;a.h=a.h*0.8500000238418579;e=a.l;f=K(a.d);g=K(a.j);h=K(a.e);$p=2;case 2:$z=AB9(e,f,g,h);if(C()){break _;}e=$z;if(e!==Bf1){$p=3;continue _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;continue _;case 3:Cb(a);if
(C()){break _;}f=a.cw;a.cw=f-1|0;if(f>0)return;$p=4;case 4:Cb(a);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AFu(){C2.call(this);this.Cv=0.0;}
function A8h(a,b,c,d,e){var f=new AFu();AV_(f,a,b,c,d,e);return f;}
function AV_(a,b,c,d,e,f){var g;FE(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.10000000149011612;a.i=a.i*0.10000000149011612;a.h=a.h*0.10000000149011612;g=BP()*0.30000001192092896;a.io=g;a.ic=g;a.hY=g;a.dr=a.dr*0.75;a.dr=a.dr*f;a.Cv=a.dr;a.cw=8.0/(BP()*0.8+0.2)|0;a.cw=a.cw*f|0;a.o7=0;}
function AKc(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.dr=a.Cv*i;$p=1;case 1:ANB(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function AL1(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e8=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARM(a,c,d,e);if(C()){break _;}if(a.j===a.cS){a.g=a.g*1.1;a.h=a.h*1.1;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cb(a);if
(C()){break _;}a.e8=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function Q9(){C2.call(this);}
function ASg(a,b,c,d,e,f,g,h){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANB(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function AEY(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}a.e8=7-((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;case 1:ARM(a,c,d,e);if(C()){break _;}a.g=a.g*0.8999999761581421;a.i=a.i*0.8999999761581421;a.h=a.h*0.8999999761581421;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cb(a);if(C()){break _;}a.e8=7-
((a.dq*8|0)/a.cw|0)|0;a.i=a.i+0.004;c=a.g;d=a.i;e=a.h;$p=1;continue _;default:Fa();}}C4().s(a,b,c,d,e,$p);}
function O_(){C2.call(this);this.DU=0.0;}
function AQP(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw;a.dr=a.DU*(1.0-i*i*0.5);$p=1;case 1:ANB(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ASD(a,b){var c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=(a.dq+b)/a.cw;if(c<0.0)c=0.0;if(c>1.0)c=1.0;$p=1;case 1:$z=ADO(a,b);if(C()){break _;}d=$z;return d*c+1.0-c;default:Fa();}}C4().s(a,b,c,d,$p);}
function AAY(a){var b,c,d,e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=2;continue _;}c=a.g;d=a.i;e=a.h;$p=1;case 1:ARM(a,c,d,e);if(C()){break _;}a.g=a.g*0.9599999785423279;a.i=a.i*0.9599999785423279;a.h=a.h*0.9599999785423279;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;case 2:Cb(a);if(C()){break _;}c=a.g;d=a.i;e=a.h;$p=1;continue _;default:Fa();}}C4().s(a,
b,c,d,e,$p);}
function AA9(){C2.call(this);this.yW=0.0;}
function BcU(a,b,c,d){var e=new AA9();A1V(e,a,b,c,d);return e;}
function A1V(a,b,c,d,e){FE(a,b,c,d,e,0.0,0.0,0.0);a.g=a.g*0.800000011920929;a.i=a.i*0.800000011920929;a.h=a.h*0.800000011920929;a.i=N(a.m)*0.4000000059604645+0.05000000074505806;a.io=1.0;a.ic=1.0;a.hY=1.0;a.dr=a.dr*(N(a.m)*2.0+0.20000000298023224);a.yW=a.dr;a.cw=16.0/(BP()*0.8+0.2)|0;a.o7=0;a.e8=49;}
function AKd(a,b){return 1.0;}
function AGY(a,b,c,d,e,f,g,h){var i,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.dq+c)/a.cw;a.dr=a.yW*(1.0-i*i);$p=1;case 1:ANB(a,b,c,d,e,f,g,h);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,$p);}
function ALq(a){var b,c,d,e,f,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.bS=a.d;a.cS=a.j;a.bR=a.e;b=a.dq;a.dq=b+1|0;if(b>=a.cw){$p=1;continue _;}c=a.dq/a.cw;if(N(a.m)>c)BV(a.l,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;continue _;case 1:Cb(a);if(C()){break _;}c=a.dq/a.cw;if(N(a.m)>c)BV(a.l,B(256),a.d,a.j,a.e,a.g,a.i,a.h);a.i=a.i-0.03;d=a.g;e=a.i;f=a.h;$p=2;case 2:ARM(a,d,e,f);if(C()){break _;}a.g
=a.g*0.9990000128746033;a.i=a.i*0.9990000128746033;a.h=a.h*0.9990000128746033;if(a.cx){a.g=a.g*0.699999988079071;a.h=a.h*0.699999988079071;}return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function ARJ(){JW.call(this);}
function BcH(a,b,c,d,e,f,g){var h=new ARJ();AVY(h,a,b,c,d,e,f,g);return h;}
function AVY(a,b,c,d,e,f,g,h){TY(a,b,c,d,e);a.m9=0.03999999910593033;a.e8=a.e8+1|0;if(g===0.0&&!(f===0.0&&h===0.0)){a.g=f;a.i=g+0.1;a.h=h;}}
function AIu(){D.call(this);}
function Bnn(){var a=new AIu();AW1(a);return a;}
function AW1(a){return;}
function Ia(){var a=this;D.call(a);a.dj=null;a.bu=0;a.bq=0;a.bt=0;a.fR=0;a.bD=null;a.e7=null;}
function Bno(a,b,c,d,e){var f=new Ia();YY(f,a,b,c,d,e);return f;}
function YY(a,b,c,d,e,f){var $p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.e7=b;a.bD=Ci();a.dj=c;a.bu=d;a.bq=e;a.bt=f;$p=1;case 1:$z=AEQ(c,d,e,f);if(C()){break _;}d=$z;a.fR=d;K5(a);return;default:Fa();}}C4().s(a,b,c,d,e,f,$p);}
function K5(a){a:{Dy(a.bD);if(!a.fR){T(a.bD,CO(a.bu,a.bq,a.bt-1|0));T(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fR==1){T(a.bD,CO(a.bu-1|0,a.bq,a.bt));T(a.bD,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fR==2){T(a.bD,CO(a.bu-1|0,a.bq,a.bt));T(a.bD,CO(a.bu+1|0,a.bq+1|0,a.bt));break a;}if(a.fR==3){T(a.bD,CO(a.bu-1|0,a.bq+1|0,a.bt));T(a.bD,CO(a.bu+1|0,a.bq,a.bt));break a;}if(a.fR==4){T(a.bD,CO(a.bu,a.bq+1|0,a.bt-1|0));T(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fR==5){T(a.bD,CO(a.bu,a.bq,a.bt-1|0));T(a.bD,CO(a.bu,a.bq
+1|0,a.bt+1|0));break a;}if(a.fR==6){T(a.bD,CO(a.bu+1|0,a.bq,a.bt));T(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fR==7){T(a.bD,CO(a.bu-1|0,a.bq,a.bt));T(a.bD,CO(a.bu,a.bq,a.bt+1|0));break a;}if(a.fR==8){T(a.bD,CO(a.bu-1|0,a.bq,a.bt));T(a.bD,CO(a.bu,a.bq,a.bt-1|0));break a;}if(a.fR!=9)break a;T(a.bD,CO(a.bu+1|0,a.bq,a.bt));T(a.bD,CO(a.bu,a.bq,a.bt-1|0));}}
function AFL(a){var b,c,d,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=0;if(b>=a.bD.s)return;c=Z(a.bD,b);$p=1;case 1:$z=ARd(a,c);if(C()){break _;}c=$z;if(c!==null&&S3(c,a)){Rh(a.bD,b,CO(c.bu,c.bq,c.bt));d=b;}else{c=a.bD;d=b+(-1)|0;En(c,b);}b=d+1|0;if(b>=a.bD.s)return;c=Z(a.bD,b);continue _;default:Fa();}}C4().s(a,b,c,d,$p);}
function ARd(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.dj;d=b.eG;e=b.e2;f=b.eH;$p=1;case 1:$z=ACE(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e7.b){c=a.dj;d=b.eG;e=b.e2+1|0;f=b.eH;$p=2;continue _;}c=new Ia;g=a.e7;h=a.dj;d=b.eG;e=b.e2;f=b.eH;$p=3;continue _;case 2:$z=ACE(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e7.b){c=a.dj;d=b.eG;e=b.e2-1|0;f=b.eH;$p=4;continue _;}c=new Ia;g=a.e7;h=a.dj;d
=b.eG;e=b.e2+1|0;f=b.eH;$p=5;continue _;case 3:YY(c,g,h,d,e,f);if(C()){break _;}return c;case 4:$z=ACE(c,d,e,f);if(C()){break _;}d=$z;if(d!=a.e7.b){c=null;return c;}c=new Ia;g=a.e7;h=a.dj;e=b.eG;d=b.e2-1|0;f=b.eH;$p=6;continue _;case 5:YY(c,g,h,d,e,f);if(C()){break _;}return c;case 6:YY(c,g,h,e,d,f);if(C()){break _;}return c;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function S3(a,b){var c,d;c=0;while(c<a.bD.s){d=Z(a.bD,c);if(d.eG==b.bu&&d.eH==b.bt)return 1;c=c+1|0;}return 0;}
function KU(a,b,c,d){var e,f;e=0;while(e<a.bD.s){f=Z(a.bD,e);if(f.eG==b&&f.eH==d)return 1;e=e+1|0;}return 0;}
function Pd(a,b){var c;if(S3(a,b))return 1;if(a.bD.s==2)return 0;if(!a.bD.s)return 1;c=Z(a.bD,0);return b.bq==a.bq&&c.e2==a.bq?1:1;}
function ARU(a,b){var c,d,e,f,g,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:T(a.bD,CO(b.bu,b.bq,b.bt));c=KU(a,a.bu,a.bq,a.bt-1|0);d=KU(a,a.bu,a.bq,a.bt+1|0);e=KU(a,a.bu-1|0,a.bq,a.bt);f=KU(a,a.bu+1|0,a.bq,a.bt);g=(-1);if(!(!c&&!d))g=0;if(!(!e&&!f))g=1;if(d&&f&&!c&&!e)g=6;if(d&&e&&!c&&!f)g=7;if(c&&e&&!d&&!f)g=8;if(c&&f&&!d&&!e)g=9;if(!g){b=a.dj;c=a.bu;d=a.bq+1|0;e=a.bt-1|0;$p=1;continue _;}if(g==1){b=a.dj;c=a.bu+1|0;d
=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 1:$z=ACE(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e7.b)g=4;b=a.dj;c=a.bu;d=a.bq+1|0;e=a.bt+1|0;$p=3;continue _;case 2:$z=ACE(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e7.b)g=2;b=a.dj;c=a.bu-1|0;d=a.bq+1|0;e=a.bt;$p=4;continue _;case 3:$z=ACE(b,c,d,e);if(C()){break _;}c=$z;if(c==a.e7.b)g=5;if(g==1){b=a.dj;c=a.bu+1|0;d=a.bq+1|0;e=a.bt;$p=2;continue _;}if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;continue _;case 4:$z=ACE(b,
c,d,e);if(C()){break _;}c=$z;if(c==a.e7.b)g=3;if(g<0)g=0;b=a.dj;c=a.bu;d=a.bq;e=a.bt;$p=5;case 5:AKD(b,c,d,e,g);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,$p);}
function AI8(a,b,c,d){var e,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=CO(b,c,d);$p=1;case 1:$z=ARd(a,e);if(C()){break _;}e=$z;if(e===null)return 0;$p=2;case 2:AFL(e);if(C()){break _;}return Pd(e,a);default:Fa();}}C4().s(a,b,c,d,e,$p);}
function YX(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.bu;c=a.bq;d=a.bt-1|0;$p=1;case 1:$z=AI8(a,b,c,d);if(C()){break _;}d=$z;b=a.bu;c=a.bq;e=a.bt+1|0;$p=2;case 2:$z=AI8(a,b,c,e);if(C()){break _;}b=$z;c=a.bu-1|0;e=a.bq;f=a.bt;$p=3;case 3:$z=AI8(a,c,e,f);if(C()){break _;}c=$z;e=a.bu+1|0;f=a.bq;g=a.bt;$p=4;case 4:$z=AI8(a,e,f,g);if(C()){break _;}e=$z;f=(-1);if(!(!d&&!b))f=0;if(!(!c&&
!e))f=1;if(b&&e&&!d&&!c)f=6;if(b&&c&&!d&&!e)f=7;if(d&&c&&!b&&!e)f=8;if(d&&e&&!b&&!c)f=9;if(!f){h=a.dj;d=a.bu;b=a.bq+1|0;c=a.bt-1|0;$p=5;continue _;}if(f==1){h=a.dj;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fR=f;K5(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 5:$z=ACE(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e7.b)f=4;h=a.dj;d=a.bu;b=a.bq+1|0;c=a.bt+1|0;$p=7;continue _;case 6:$z=ACE(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e7.b)f=2;h=a.dj;d=a.bu-1|0;b=a.bq+1|0;c=a.bt;$p=8;continue _;case 7:$z
=ACE(h,d,b,c);if(C()){break _;}b=$z;if(b==a.e7.b)f=5;if(f==1){h=a.dj;d=a.bu+1|0;b=a.bq+1|0;c=a.bt;$p=6;continue _;}if(f<0)f=0;a.fR=f;K5(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;continue _;case 8:$z=ACE(h,d,b,c);if(C()){break _;}d=$z;if(d==a.e7.b)f=3;if(f<0)f=0;a.fR=f;K5(a);h=a.dj;d=a.bu;b=a.bq;c=a.bt;$p=9;case 9:AKD(h,d,b,c,f);if(C()){break _;}g=0;if(g>=a.bD.s)return;h=Z(a.bD,g);$p=10;case 10:$z=ARd(a,h);if(C()){break _;}h=$z;if(h!==null){$p=11;continue _;}g=g+1|0;if(g>=a.bD.s)return;h=Z(a.bD,g);continue _;case 11:AFL(h);if
(C()){break _;}if(Pd(h,a)){$p=12;continue _;}g=g+1|0;if(g>=a.bD.s)return;h=Z(a.bD,g);$p=10;continue _;case 12:ARU(h,a);if(C()){break _;}g=g+1|0;if(g>=a.bD.s)return;h=Z(a.bD,g);$p=10;continue _;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,$p);}
function Vt(){var a=this;D.call(a);a.pe=null;a.F8=0;a.mj=0;}
function AP$(a){a.mj=a.mj+1|0;}
function ANv(a){return a.mj<a.pe.data.length?0:1;}
function SD(a,b){return BY(a.pe.data[a.mj].ia+(b.c1+1.0|0)*0.5,a.pe.data[a.mj].hV,a.pe.data[a.mj].il+(b.c1+1.0|0)*0.5);}
function ACj(){var a=this;D.call(a);a.x_=null;a.ka=null;a.q8=null;a.mh=null;}
function A2R(a){var b=new ACj();A6z(b,a);return b;}
function A6z(a,b){a.ka=Bcj();a.q8=C8();a.mh=J(HX,32);a.x_=b;}
function APy(a,b,c,d){return Pf(a,b,c.d,c.L.M,c.e,d);}
function AGe(a,b,c,d,e,f){return Pf(a,b,c+0.5,d+0.5,e+0.5,f);}
function Pf(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;UN(a.ka);Vj(a.q8);g=I4(a,K(b.L.R),K(b.L.M),K(b.L.S));h=I4(a,K(c-b.c1/2.0),K(d),K(e-b.c1/2.0));i=A0J(EY(b.c1+1.0),EY(b.eP+1.0),EY(b.c1+1.0));g.mF=0.0;g.pk=E1(g,h);g.i4=g.pk;UN(a.ka);WZ(a.ka,g);j=g;a:{while(true){if(ACi(a.ka)){if(j!==g){k=UZ(a,g,j);break a;}k=null;break a;}l=ARI(a.ka);if(l.m1==h.m1)break;if(E1(l,h)<E1(j,h))j=l;l.nA=1;m=AJU(a,b,l,i,h,f);n=0;while(n<m){k=a.mh.data[n];o=l.mF+E1(l,k);if(!(PE(k)&&o>=k.mF)){k.o5=l;k.mF=o;k.pk=E1(k,h);if(PE(k))ABw(a.ka,
k,k.mF+k.pk);else{k.i4=k.mF+k.pk;WZ(a.ka,k);}}n=n+1|0;}}k=UZ(a,g,h);}return k;}
function AJU(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;if(Kb(a,b,c.ia,c.hV+1|0,c.il,d)>0)g=1;h=KI(a,b,c.ia,c.hV,c.il+1|0,d,g);i=KI(a,b,c.ia-1|0,c.hV,c.il,d,g);j=KI(a,b,c.ia+1|0,c.hV,c.il,d,g);k=KI(a,b,c.ia,c.hV,c.il-1|0,d,g);if(h===null)l=0;else if(h.nA)l=0;else if(E1(h,e)>=f)l=0;else{m=a.mh.data;l=1;m[0]=h;}if(i===null)n=l;else if(i.nA)n=l;else if(E1(i,e)>=f)n=l;else{m=a.mh.data;n=l+1|0;m[l]=i;}if(j===null)o=n;else if(j.nA)o=n;else if(E1(j,e)>=f)o=n;else{m=a.mh.data;o=n+1|0;m[n]=j;}if(k===null)n=o;else if(k.nA)n
=o;else if(E1(k,e)>=f)n=o;else{m=a.mh.data;n=o+1|0;m[o]=k;}return n;}
function KI(a,b,c,d,e,f,g){var h,i,j,k;h=null;if(Kb(a,b,c,d,e,f)>0)h=I4(a,c,d,e);if(h===null){g=d+g|0;if(Kb(a,b,c,g,e,f)>0)h=I4(a,c,g,e);}if(h!==null){i=0;a:{while(true){if(d<=0)break a;j=Kb(a,b,c,d-1|0,e,f);if(j<=0)break a;if(j<0)return null;i=i+1|0;if(i>=4)break;d=d+(-1)|0;}return null;}if(d>0)h=I4(a,c,d,e);k=Oa(a.x_,c,d-1|0,e);if(!(k!==Bf1&&k!==Bf2))return null;}return h;}
function I4(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=CQ(a.q8,CZ(e));if(f===null){f=A0J(b,c,d);BQ(a.q8,CZ(e),f);}return f;}
function Kb(a,b,c,d,e,f){var g,h,i,j;g=c;a:{while(g<(c+f.ia|0)){h=d;while(h<(d+f.hV|0)){i=e;while(i<(e+f.il|0)){j=Oa(a.x_,c,d,e);if(j.uj())return 0;if(j===Bf1)break a;if(j===Bf2)break a;i=i+1|0;}h=h+1|0;}g=g+1|0;}return 1;}return (-1);}
function UZ(a,b,c){var d,e,f,g;d=1;e=c;while(e.o5!==null){d=d+1|0;e=e.o5;}f=J(HX,d);g=f.data;d=d+(-1)|0;g[d]=c;while(c.o5!==null){c=c.o5;d=d+(-1)|0;g[d]=c;}b=new Vt;b.pe=f;b.F8=g.length;return b;}
function Vc(){var a=this;C2.call(a);a.mC=null;a.hP=null;a.qa=0;a.rg=0;a.AY=0.0;}
function AMq(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p,$z;$p=0;if(Fe()){var $T=C4();$p=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.qa+c)/a.rg;d=i*i;j=a.mC.d;k=a.mC.j;l=a.mC.e;m=a.hP.cs;n=a.hP.d-a.hP.cs;o=c;n=m+n*o;m=a.hP.b7+(a.hP.j-a.hP.b7)*o+a.AY;o=a.hP.ct+(a.hP.e-a.hP.ct)*o;n=n-j;p=d;q=j+n
*p;r=k+(m-k)*p;p=l+(o-l)*p;s=K(q);t=K(r+a.c4/2.0);u=K(p);b=a.l;$p=1;case 1:$z=ANp(b,s,t,u);if(C()){break _;}v=$z;o=q-BkZ;n=r-Bk0;m=p-Bk1;BU(v,v,v,1.0);b=Bgz;w=a.mC;o=o;n=n;m=m;d=a.mC.u;$p=2;case 2:AQL(b,w,o,n,m,d,c);if(C()){break _;}return;default:Fa();}}C4().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,$p);}
function AAR(a){a.qa=a.qa+1|0;if(a.qa==a.rg)Cb(a);}
function AUF(a){return 2;}
function Zb(){var a=this;D.call(a);a.d2=null;a.eZ=0;}
function Bcj(){var a=new Zb();A0k(a);return a;}
function A0k(a){a.d2=J(HX,1024);a.eZ=0;}
function WZ(a,b){var c,d;if(b.gz>=0){b=new D3;Bo(b,B(897));M(b);}if(a.eZ==a.d2.data.length){c=J(HX,a.eZ<<1);Ds(a.d2,0,c,0,a.eZ);a.d2=c;}a.d2.data[a.eZ]=b;b.gz=a.eZ;d=a.eZ;a.eZ=d+1|0;Va(a,d);return b;}
function UN(a){a.eZ=0;}
function ARI(a){var b,c,d,e;b=a.d2.data[0];c=a.d2.data;d=a.d2.data;e=a.eZ-1|0;a.eZ=e;c[0]=d[e];a.d2.data[a.eZ]=null;if(a.eZ>0)OW(a,0);b.gz=(-1);return b;}
function ABw(a,b,c){var d;d=b.i4;b.i4=c;if(c>=d)OW(a,b.gz);else Va(a,b.gz);}
function Va(a,b){var c,d,e,f;c=a.d2.data[b];d=c.i4;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.d2.data[e];if(d>=f.i4)break;a.d2.data[b]=f;f.gz=b;b=e;}}a.d2.data[b]=c;c.gz=b;}
function OW(a,b){var c,d,e,f,g,h,i,j;c=a.d2.data[b];d=c.i4;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.eZ)break;g=a.d2.data[e];h=g.i4;if(f>=a.eZ){i=null;j=Infinity;}else{i=a.d2.data[f];j=i.i4;}if(h<j){if(h>=d)break a;a.d2.data[b]=g;g.gz=b;}else{if(j>=d)break a;a.d2.data[b]=i;i.gz=b;e=f;}b=e;}}a.d2.data[b]=c;c.gz=b;}
function ACi(a){return a.eZ?0:1;}
function HX(){var a=this;D.call(a);a.ia=0;a.hV=0;a.il=0;a.m1=0;a.gz=0;a.mF=0.0;a.pk=0.0;a.i4=0.0;a.o5=null;a.nA=0;}
function A0J(a,b,c){var d=new HX();A8T(d,a,b,c);return d;}
function A8T(a,b,c,d){a.gz=(-1);a.nA=0;a.ia=b;a.hV=c;a.il=d;a.m1=b|c<<10|d<<20;}
function E1(a,b){var c,d,e;c=b.ia-a.ia|0;d=b.hV-a.hV|0;e=b.il-a.il|0;return D_(c*c+d*d+e*e);}
function A31(a,b){return b.m1!=a.m1?0:1;}
function AVv(a){return a.m1;}
function PE(a){return a.gz<0?0:1;}
function AJq(){D.call(this);}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",4,"regex",3,"nio",6,"charset",3,"io",3,"lang",-1,"net",10,"minecraft",11,"src"]);
$rt_metadata([D,"Object",9,0,[],0,3,0,["fm",function(){return A48(this);},"ep",function(b){return Q$(this,b);},"gk",function(){return AUw(this);}],JH,0,D,[],0,3,0,0,MW,0,D,[],3,3,0,0,FT,0,D,[MW],0,3,0,0,AKb,0,D,[],4,0,0,0,Ue,0,D,[],4,3,0,0,De,0,D,[],3,3,0,0,DM,0,D,[],3,3,0,0,K4,0,D,[],3,3,0,0,B4,"String",9,D,[De,DM,K4],0,3,0,["gk",function(){return AUs(this);},"ep",function(b){return DC(this,b);},"fm",function(){return A8v(this);},"lT",function(b){return AV9(this,b);}],CP,0,D,[],0,3,0,["lU",function(){return A0t(this);
}],Fh,0,CP,[],0,3,0,0,I_,0,Fh,[],0,3,0,0,AMl,0,I_,[],0,3,0,0,HR,0,D,[De,K4],0,0,0,["nC",function(b){M3(this,b);},"gk",function(){return W(this);}],IA,0,D,[],3,3,0,0,V,0,HR,[IA],0,3,0,["xV",function(b,c,d,e){return A66(this,b,c,d,e);},"xn",function(b,c,d){return AVy(this,b,c,d);},"gk",function(){return BM(this);},"nC",function(b){AXU(this,b);},"yn",function(b,c){return A7v(this,b,c);}],Fc,0,D,[De],1,3,0,0,Gj,0,Fc,[DM],0,3,0,["fm",function(){return A3f(this);},"ep",function(b){return A_y(this,b);},"lT",function(b)
{return A6$(this,b);}],IY,0,I_,[],0,3,0,0,AOZ,0,IY,[],0,3,0,0,ALM,0,IY,[],0,3,0,0,BD,0,CP,[],0,3,0,0,B6,"RuntimeException",9,BD,[],0,3,0,0,Dc,0,D,[],3,3,0,0,Hi,0,D,[Dc],3,3,0,0,UB,0,D,[Hi],3,3,0,0,Qx,0,D,[Hi],3,3,0,0,Vn,0,D,[Hi],3,3,0,0,Rp,0,D,[Hi],3,3,0,0,Ws,0,D,[Hi,UB,Qx,Vn,Rp],3,3,0,0,PF,0,D,[],3,3,0,0,Lp,0,D,[Dc],3,3,0,0,YR,0,D,[Dc,Ws,PF,Lp],1,3,0,["Yi",function(b,c){return AYc(this,b,c);},"a0l",function(b,c){return AYr(this,b,c);},"So",function(b){return ATQ(this,b);},"On",function(b,c,d){return AZh(this,
b,c,d);},"My",function(b){return A1O(this,b);},"Ve",function(){return AUO(this);},"TD",function(b,c,d){return AS9(this,b,c,d);}],Bq,0,D,[],0,3,Be,0,S5,0,D,[],3,3,0,0,JL,0,D,[S5],3,3,0,0,N4,0,D,[],3,3,0,0,HG,0,D,[IA,JL,N4],1,3,0,0,ABp,0,HG,[],0,3,0,0,Ly,0,HG,[],0,3,0,0,AFh,0,D,[],4,3,0,0,AFV,0,D,[Dc],1,3,0,0,L3,0,D,[],3,3,0,0,It,0,D,[L3],0,3,0,0,ZM,0,D,[],0,3,0,0,Mo,0,D,[],0,3,Bbv,0,Go,0,D,[L3],0,3,0,["kt",function(){ARu(this);}],DO,0,D,[Dc],3,3,0,0,Xe,0,D,[DO],4,0,0,["gR",function(b){return A$4(this,b);}]]);
$rt_metadata([Xk,0,D,[DO],4,0,0,["gR",function(b){return AXP(this,b);}],Xl,0,D,[DO],4,0,0,["gR",function(b){return A3L(this,b);}],Xi,0,D,[DO],4,0,0,["gR",function(b){return ASV(this,b);}],Xj,0,D,[DO],4,0,0,["gR",function(b){return A3W(this,b);}],Xg,0,D,[DO],4,0,0,["gR",function(b){return A2t(this,b);}],Xh,0,D,[DO],4,0,0,["gR",function(b){return A6G(this,b);}],Xf,0,D,[DO],4,0,0,["gR",function(b){return AUq(this,b);}],QF,0,D,[DO],4,0,0,["gR",function(b){return A7g(this,b);}],QE,0,D,[DO],4,0,0,["gR",function(b)
{return AYR(this,b);}],NY,0,D,[],0,3,0,0,AA2,0,D,[Dc],1,3,0,0,U6,0,D,[],0,3,0,0,BL,"IOException",8,BD,[],0,3,0,0,Ll,0,HR,[IA],0,3,0,["xV",function(b,c,d,e){return AV6(this,b,c,d,e);},"xn",function(b,c,d){return A4n(this,b,c,d);},"nC",function(b){A4E(this,b);},"yn",function(b,c){return A$f(this,b,c);}],FC,0,D,[],3,3,0,0,Wa,0,D,[FC],0,3,0,0,Fj,0,D,[DM],0,3,0,["ep",function(b){return A$8(this,b);},"fm",function(){return A$Q(this);},"lT",function(b){return A3j(this,b);}],I7,0,D,[],0,3,0,0,U2,0,I7,[],0,3,0,0,SN,
0,D,[],0,3,0,0,VR,0,D,[],3,3,0,0,Sa,0,D,[VR],0,3,0,0,AFU,0,D,[],0,3,0,0,Eh,0,D,[],1,3,0,0,MD,0,Eh,[],0,3,0,["hI",function(b,c,d,e,f,g){A$s(this,b,c,d,e,f,g);},"ok",function(b,c,d,e,f,g){AIZ(this,b,c,d,e,f,g);}],Ew,0,D,[],0,3,0,0,AA0,0,Ew,[],0,3,0,["pb",function(){AYK(this);}],AKJ,0,Ew,[],0,3,0,["pb",function(){AY0(this);}],L8,0,D,[],4,3,0,0,V8,0,Go,[],0,0,0,["kt",function(){AJ7(this);}],Sx,0,D,[],3,3,0,0,Iq,0,D,[Sx],3,3,0,0,Gn,0,D,[Iq],1,3,0,["rD",function(b){return Rb(this,b);}],Ka,0,D,[Iq],3,3,0,0,Gf,0,Gn,
[Ka],1,3,0,["jP",function(){return Jr(this);}],Mx,0,Gf,[],1,3,0,0,OK,0,D,[Iq],3,3,0,0,Xs,0,D,[OK],3,3,0,0,AEL,0,Mx,[Xs],0,3,0,0,AOf,0,D,[Dc],1,3,0,0,F_,0,D,[Dc],1,3,0,0,ABO,0,F_,[],1,3,0,0,AKN,0,F_,[],1,3,0,0,Jk,0,D,[Iq],3,3,0,0,Eo,0,Gn,[Jk],1,3,0,["ep",function(b){return A57(this,b);},"fm",function(){return ATa(this);}],ET,0,D,[],3,3,0,0,AQr,0,Eo,[ET,De],0,3,0,["sU",function(b){return Xq(this,b);},"rD",function(b){return WK(this,b);},"jP",function(){return OD(this);},"l0",function(){return IU(this);}],LX,0,
D,[],3,3,0,0,FZ,0,D,[LX],1,3,0,0,ACk,0,FZ,[ET,De],0,3,0,0]);
$rt_metadata([AKk,0,F_,[],1,3,0,0,Y2,0,D,[],0,3,0,0,AE7,0,D,[],0,3,0,0,EX,"Enum",9,D,[DM,De],1,3,0,["ep",function(b){return ATD(this,b);},"fm",function(){return AX_(this);},"lT",function(b){return AXJ(this,b);}],E$,0,EX,[],12,3,0,0,Qy,0,D,[],3,3,0,0,Vi,0,D,[Qy],0,0,0,["Gw",function(b){CM(this,b);},"I4",function(b){A2g(this,b);}],AQN,0,D,[Dc],1,3,0,0,Xx,0,D,[Dc],3,3,0,0,Xd,0,D,[Xx],4,0,0,["a02",function(){return A1$(this);}],H6,0,D,[JL],1,3,0,0,AQm,0,H6,[],0,3,0,["Cx",function(){return A4Q(this);},"od",function(b,
c,d){return A_u(this,b,c,d);},"wZ",function(){return A5C(this);},"lV",function(){AWY(this);}],I1,0,H6,[],0,3,0,0,Pt,0,D,[],3,3,0,0,P8,0,I1,[Pt],0,3,0,0,MY,0,D,[DM],1,3,0,["lT",function(b){return A6F(this,b);}],WY,0,I1,[],0,3,0,["Cx",function(){return AS$(this);},"od",function(b,c,d){return AL6(this,b,c,d);},"wZ",function(){return A0v(this);},"lV",function(){A8r(this);}],Nc,0,D,[],1,3,0,0,ADz,0,Nc,[],0,3,0,0,AJi,0,D,[],0,3,0,0,Jh,0,D,[],0,3,0,["At",function(b,c,d){return A5m(this,b,c,d);}],U9,0,Jh,[],0,0,0,["At",
function(b,c,d){return A18(this,b,c,d);}],C6,"Entity",12,D,[],1,3,0,["C9",function(){Cb(this);},"Jk",function(){AE0(this);},"DV",function(){X9(this);},"By",function(){return A1W(this);},"F2",function(b){AKa(this,b);},"DJ",function(b){Zq(this,b);},"HQ",function(){return AFa(this);},"vk",function(b){return ADO(this,b);},"xJ",function(b){A62(this,b);},"u1",function(b){A5N(this,b);},"fs",function(b,c){return AJP(this,b,c);},"lx",function(){return A9T(this);},"rV",function(){return A75(this);},"BF",function(b,c)
{A_t(this,b,c);},"uL",function(b){return AWS(this,b);},"A2",function(b){return AW$(this,b);},"BO",function(){AFi(this);},"Ai",function(){return A9X(this);}],EQ,"EntityLiving",12,C6,[],0,3,0,["lx",function(){return AXC(this);},"rV",function(){return A10(this);},"rN",function(){return AQx(this);},"Jk",function(){ANx(this);},"BO",function(){AK0(this);},"eq",function(){AMB(this);},"fs",function(b,c){return AB_(this,b,c);},"wD",function(){return A8C(this);},"vd",function(){return AUJ(this);},"uO",function(){return AVE(this);
},"FF",function(b){AN$(this,b);},"mm",function(){return ATN(this);},"DJ",function(b){AQd(this,b);},"ot",function(){ACx(this);},"wM",function(){AQW(this);},"uU",function(b,c,d){return ZA(this,b,c,d);},"DV",function(){ABR(this);}],I3,"EntityCreature",12,EQ,[],0,3,0,["wM",function(){APU(this);},"nR",function(b,c){AMK(this,b,c);},"x5",function(){return AK7(this);}],DP,"EntityMonster",12,I3,[],0,3,0,["ot",function(){ADe(this);},"eq",function(){ALe(this);},"x5",function(){return AKw(this);},"fs",function(b,c){return AAQ(this,
b,c);},"nR",function(b,c){AQ4(this,b,c);},"sF",function(b,c,d){return ABG(this,b,c,d);},"uU",function(b,c,d){return YG(this,b,c,d);}],Jd,"EntityZombie",12,DP,[],0,3,0,["ot",function(){AH6(this);},"mm",function(){return AWU(this);}],Ju,"EntitySkeleton",12,DP,[],0,3,0,["ot",function(){AIJ(this);},"nR",function(b,c){AHZ(this,b,c);},"mm",function(){return AYW(this);}],J6,"EntityCreeper",12,DP,[],0,3,0,["wM",function(){ZW(this);},"nR",function(b,c){AAS(this,b,c);},"mm",function(){return AS4(this);}],Ku,"EntitySpider",
12,DP,[],0,3,0,["x5",function(){return ARy(this);},"nR",function(b,c){Zt(this,b,c);},"mm",function(){return AZX(this);}],GB,"EntityAnimal",12,I3,[],1,3,0,["sF",function(b,c,d){return AOF(this,b,c,d);},"uU",function(b,c,d){return ALb(this,b,c,d);}],KO,"EntitySheep",12,GB,[],0,3,0,["fs",function(b,c){return AG0(this,b,c);},"wD",function(){return A7a(this);},"vd",function(){return A4r(this);},"uO",function(){return AYv(this);}],II,"EntityPig",12,GB,[],0,3,0,["wD",function(){return ATJ(this);},"vd",function(){return A9D(this);
},"uO",function(){return AWc(this);},"uL",function(b){return AX2(this,b);},"mm",function(){return AWm(this);}],DB,0,D,[De],0,3,0,0,NG,0,D,[],0,3,0,0,Pi,0,D,[],0,3,0,0,O,"Block",12,D,[],0,3,L,["gf",function(){return A8_(this);},"en",function(){return AWN(this);},"CB",function(b,c,d,e){return AFf(this,b,c,d,e);},"pJ",function(b,c,d,e,f){return AGz(this,b,c,d,e,f);},"um",function(b,c,d,e,f){return AB8(this,b,c,d,e,f);},"e0",function(b,c){return A7p(this,b,c);},"ci",function(b){return AVN(this,b);},"oU",function(b,
c,d,e){return La(this,b,c,d,e);},"FI",function(b,c,d,e,f,g){ALF(this,b,c,d,e,f,g);},"hu",function(b,c,d,e){return Nr(this,b,c,d,e);},"d5",function(){return A5u(this);},"o9",function(b,c){return A6C(this,b,c);},"pi",function(){return A3Y(this);},"e9",function(b,c,d,e,f){AHV(this,b,c,d,e,f);},"kS",function(b,c,d,e,f){APk(this,b,c,d,e,f);},"nt",function(b,c,d,e,f){AAd(this,b,c,d,e,f);},"e3",function(b,c,d,e,f){YW(this,b,c,d,e,f);},"my",function(){return A38(this);},"fE",function(b,c,d,e){ABd(this,b,c,d,e);},"lB",
function(b,c,d,e){Z$(this,b,c,d,e);},"eI",function(b){return AYy(this,b);},"dX",function(b,c){return AT0(this,b,c);},"IV",function(b,c,d,e,f){Yo(this,b,c,d,e,f);},"HY",function(b,c,d,e,f,g){AE4(this,b,c,d,e,f,g);},"yt",function(b){return A0a(this,b);},"nK",function(b,c,d,e,f,g){return Kj(this,b,c,d,e,f,g);},"sO",function(b,c,d,e){AQ8(this,b,c,d,e);},"pT",function(){return AVu(this);},"fT",function(b,c,d,e){return AEM(this,b,c,d,e);},"lG",function(b,c,d,e,f){return AGO(this,b,c,d,e,f);},"oJ",function(b,c,d,e,
f){AJS(this,b,c,d,e,f);},"ve",function(b,c,d,e,f){YO(this,b,c,d,e,f);},"ra",function(b,c,d,e,f){AAk(this,b,c,d,e,f);},"qH",function(b,c,d,e,f,g){AF_(this,b,c,d,e,f,g);},"xO",function(b,c,d,e){AP4(this,b,c,d,e);}],RI,0,D,[],3,3,0,0,AJm,0,Gf,[ET,De,RI],0,3,0,["l0",function(){return CY(this);},"sU",function(b){return T(this,b);}],DH,0,D,[Dc],3,3,0,0,TT,0,D,[DH],4,0,0,["gw",function(){return AWv(this);}],TS,0,D,[DH],4,0,0,["gw",function(){return ATd(this);}],TR,0,D,[DH],4,0,0,["gw",function(){return AZv(this);}],TQ,
0,D,[DO],4,0,0,["gR",function(b){return A6S(this,b);}],SL,0,D,[],0,0,0,0,Cc,"IllegalArgumentException",9,B6,[],0,3,0,0,Vp,"UnsupportedCharsetException",7,Cc,[],0,3,0,0,E5,"NullPointerException",9,B6,[],0,3,0,0,ABe,0,D,[Dc],4,3,0,0,Fl,0,D,[],1,3,0,0]);
$rt_metadata([Ma,0,Fl,[DM],1,3,0,0,AE$,0,D,[],0,3,0,0,QO,0,D,[],0,3,0,0,E4,0,D,[JL,N4],1,3,0,["jw",function(b,c,d){ATq(this,b,c,d);}],Im,0,E4,[],0,3,0,0,ABa,0,Im,[],0,3,0,0,Xm,0,E4,[],0,0,0,["qF",function(b){AYq(this,b);}],AFg,"IllegalCharsetNameException",7,Cc,[],0,3,0,0,MX,0,D,[],128,3,0,0,Uv,0,MX,[],4,3,0,0,Iv,0,D,[],0,3,0,0,AHu,0,Iv,[],4,0,0,0,ACz,0,Iv,[],4,0,0,0,LU,"BlockStone",12,O,[],0,3,0,["dX",function(b,c){return A8S(this,b,c);}],AAa,"BlockGrass",12,O,[],0,3,0,["ci",function(b){return A7A(this,b);
},"e9",function(b,c,d,e,f){ADw(this,b,c,d,e,f);},"dX",function(b,c){return A0h(this,b,c);}],AHY,"BlockDirt",12,O,[],0,3,0,0,B8,0,D,[],0,3,0,["nG",function(){return A8w(this);},"dw",function(){return A09(this);},"sm",function(){return A70(this);},"uj",function(){return A5D(this);}],F5,"BlockFlower",12,O,[],0,3,0,["fT",function(b,c,d,e){return AL3(this,b,c,d,e);},"rs",function(b){return AYu(this,b);},"e3",function(b,c,d,e,f){AIM(this,b,c,d,e,f);},"e9",function(b,c,d,e,f){AEf(this,b,c,d,e,f);},"Hh",function(b,
c,d,e){return AOb(this,b,c,d,e);},"hu",function(b,c,d,e){return AGp(this,b,c,d,e);},"d5",function(){return A6w(this);},"gf",function(){return AT$(this);},"en",function(){return A7F(this);}],AM6,"BlockSapling",12,F5,[],0,3,0,["e9",function(b,c,d,e,f){AEo(this,b,c,d,e,f);}],HW,0,O,[],1,3,0,["ci",function(b){return ATk(this,b);},"gf",function(){return A_i(this);},"d5",function(){return A$B(this);},"o9",function(b,c){return A8P(this,b,c);},"pJ",function(b,c,d,e,f){return ARE(this,b,c,d,e,f);},"hu",function(b,c,
d,e){return Ym(this,b,c,d,e);},"en",function(){return A78(this);},"dX",function(b,c){return A3o(this,b,c);},"eI",function(b){return A6k(this,b);},"qH",function(b,c,d,e,f,g){ANk(this,b,c,d,e,f,g);},"my",function(){return AVc(this);},"CB",function(b,c,d,e){return AEC(this,b,c,d,e);},"e9",function(b,c,d,e,f){ARg(this,b,c,d,e,f);},"pT",function(){return A$y(this);},"kS",function(b,c,d,e,f){YM(this,b,c,d,e,f);},"fE",function(b,c,d,e){ARZ(this,b,c,d,e);},"e3",function(b,c,d,e,f){ALn(this,b,c,d,e,f);}],AEn,"BlockFlowing",
12,HW,[],0,3,0,["e9",function(b,c,d,e,f){AOW(this,b,c,d,e,f);},"fE",function(b,c,d,e){ACa(this,b,c,d,e);}],AIR,"BlockStationary",12,HW,[],0,3,0,["e3",function(b,c,d,e,f){AGD(this,b,c,d,e,f);}],Je,"BlockSand",12,O,[],0,3,0,["fE",function(b,c,d,e){ARX(this,b,c,d,e);},"e3",function(b,c,d,e,f){ASn(this,b,c,d,e,f);},"e9",function(b,c,d,e,f){APH(this,b,c,d,e,f);},"my",function(){return A37(this);}],AG$,"BlockGravel",12,Je,[],0,3,0,["dX",function(b,c){return A_w(this,b,c);}],Y4,"BlockOre",12,O,[],0,3,0,["dX",function(b,
c){return A4y(this,b,c);},"eI",function(b){return A0g(this,b);}],AFl,"BlockLog",12,O,[],0,3,0,["eI",function(b){return A86(this,b);},"dX",function(b,c){return ATo(this,b,c);},"ci",function(b){return AVI(this,b);}],L0,0,O,[],0,3,0,["pJ",function(b,c,d,e,f){return AQD(this,b,c,d,e,f);}],ACM,"BlockLeaves",12,L0,[],0,3,0,["e9",function(b,c,d,e,f){AIF(this,b,c,d,e,f);},"eI",function(b){return AXd(this,b);},"dX",function(b,c){return A5n(this,b,c);},"d5",function(){return A21(this);},"oJ",function(b,c,d,e,f){ASB(this,
b,c,d,e,f);}],ALm,"BlockSponge",12,O,[],0,3,0,["fE",function(b,c,d,e){AKR(this,b,c,d,e);},"lB",function(b,c,d,e){ANC(this,b,c,d,e);}],Ng,0,O,[],0,3,0,["d5",function(){return A$k(this);},"pJ",function(b,c,d,e,f){return YE(this,b,c,d,e,f);}],AQu,"BlockGlass",12,Ng,[],0,3,0,["eI",function(b){return AWd(this,b);}],AHj,"BlockMushroom",12,F5,[],0,3,0,["rs",function(b){return AJb(this,b);},"Hh",function(b,c,d,e){return ADq(this,b,c,d,e);}],ABD,"BlockOreBlock",12,O,[],0,3,0,["ci",function(b){return A4L(this,b);}],Zn,
"BlockStep",12,O,[],0,3,0,["ci",function(b){return A$T(this,b);},"d5",function(){return A52(this);},"e3",function(b,c,d,e,f){ABM(this,b,c,d,e,f);},"fE",function(b,c,d,e){ABr(this,b,c,d,e);},"dX",function(b,c){return AZw(this,b,c);},"gf",function(){return AXf(this);},"pJ",function(b,c,d,e,f){return ASN(this,b,c,d,e,f);}],AOm,"BlockTNT",12,O,[],0,3,0,["ci",function(b){return A5b(this,b);},"eI",function(b){return AVk(this,b);},"sO",function(b,c,d,e){AGJ(this,b,c,d,e);},"nt",function(b,c,d,e,f){ASv(this,b,c,d,e,
f);}],ADg,"BlockBookshelf",12,O,[],0,3,0,["ci",function(b){return A_j(this,b);},"eI",function(b){return A4N(this,b);}],XV,"BlockObsidian",12,LU,[],0,3,0,["eI",function(b){return A3h(this,b);},"dX",function(b,c){return AU6(this,b,c);}],AOI,"BlockTorch",12,O,[],0,3,0,["hu",function(b,c,d,e){return ANs(this,b,c,d,e);},"d5",function(){return A2m(this);},"gf",function(){return AWi(this);},"en",function(){return A07(this);},"fT",function(b,c,d,e){return AMe(this,b,c,d,e);},"ve",function(b,c,d,e,f){ANV(this,b,c,d,
e,f);},"e9",function(b,c,d,e,f){ASl(this,b,c,d,e,f);},"fE",function(b,c,d,e){ABC(this,b,c,d,e);},"e3",function(b,c,d,e,f){AKi(this,b,c,d,e,f);},"nK",function(b,c,d,e,f,g){return AKp(this,b,c,d,e,f,g);},"kS",function(b,c,d,e,f){AQw(this,b,c,d,e,f);}],AO9,"BlockFire",12,O,[],0,3,0,["hu",function(b,c,d,e){return ARK(this,b,c,d,e);},"d5",function(){return A59(this);},"gf",function(){return A8G(this);},"en",function(){return AXF(this);},"eI",function(b){return AWO(this,b);},"my",function(){return A0c(this);},"e9",
function(b,c,d,e,f){XU(this,b,c,d,e,f);},"pi",function(){return A3v(this);},"fT",function(b,c,d,e){return ANz(this,b,c,d,e);},"e3",function(b,c,d,e,f){ABI(this,b,c,d,e,f);},"fE",function(b,c,d,e){ACA(this,b,c,d,e);},"kS",function(b,c,d,e,f){ASC(this,b,c,d,e,f);}],Eg,0,O,[],1,3,0,["fE",function(b,c,d,e){AOL(this,b,c,d,e);},"lB",function(b,c,d,e){AL7(this,b,c,d,e);}],AAi,"BlockMobSpawner",12,Eg,[],0,3,0,["tc",function(){return AXs(this);},"d5",function(){return A6c(this);}],ZF,"BlockStairs",12,O,[],0,3,0,["d5",
function(){return A5R(this);},"gf",function(){return AWb(this);},"en",function(){return AY5(this);},"pJ",function(b,c,d,e,f){return API(this,b,c,d,e,f);},"FI",function(b,c,d,e,f,g){AJI(this,b,c,d,e,f,g);},"e3",function(b,c,d,e,f){AHI(this,b,c,d,e,f);},"kS",function(b,c,d,e,f){APl(this,b,c,d,e,f);},"ra",function(b,c,d,e,f){ABk(this,b,c,d,e,f);},"nt",function(b,c,d,e,f){ADv(this,b,c,d,e,f);},"CB",function(b,c,d,e){return AM5(this,b,c,d,e);},"yt",function(b){return A87(this,b);},"pT",function(){return A8j(this);
},"dX",function(b,c){return A4p(this,b,c);},"eI",function(b){return A0G(this,b);},"e0",function(b,c){return AXG(this,b,c);},"ci",function(b){return A8d(this,b);},"um",function(b,c,d,e,f){return ANd(this,b,c,d,e,f);},"my",function(){return AVR(this);},"oU",function(b,c,d,e){return AMp(this,b,c,d,e);},"qH",function(b,c,d,e,f,g){ACQ(this,b,c,d,e,f,g);},"pi",function(){return AYL(this);},"o9",function(b,c){return AYY(this,b,c);},"fT",function(b,c,d,e){return AMx(this,b,c,d,e);},"fE",function(b,c,d,e){ACL(this,b,
c,d,e);},"lB",function(b,c,d,e){YI(this,b,c,d,e);},"HY",function(b,c,d,e,f,g){AHU(this,b,c,d,e,f,g);},"IV",function(b,c,d,e,f){AM7(this,b,c,d,e,f);},"oJ",function(b,c,d,e,f){AQ0(this,b,c,d,e,f);},"e9",function(b,c,d,e,f){AQ5(this,b,c,d,e,f);},"lG",function(b,c,d,e,f){return AGP(this,b,c,d,e,f);},"sO",function(b,c,d,e){Zg(this,b,c,d,e);}],AFW,"BlockChest",12,Eg,[],0,3,0,["um",function(b,c,d,e,f){return AEF(this,b,c,d,e,f);},"ci",function(b){return A9g(this,b);},"fT",function(b,c,d,e){return AJ$(this,b,c,d,e);
},"lB",function(b,c,d,e){ASP(this,b,c,d,e);},"lG",function(b,c,d,e,f){return AF2(this,b,c,d,e,f);},"tc",function(){return AZO(this);}],AKQ,"BlockGears",12,O,[],0,3,0,["hu",function(b,c,d,e){return AE1(this,b,c,d,e);},"d5",function(){return AT7(this);},"gf",function(){return A5p(this);},"en",function(){return A7D(this);},"eI",function(b){return A9Z(this,b);},"pi",function(){return AUM(this);}],AHB,"BlockWorkbench",12,O,[],0,3,0,["ci",function(b){return AWE(this,b);},"lG",function(b,c,d,e,f){return AGW(this,b,
c,d,e,f);}],AKP,"BlockCrops",12,F5,[],0,3,0,["rs",function(b){return AYP(this,b);},"e9",function(b,c,d,e,f){AJv(this,b,c,d,e,f);},"e0",function(b,c){return A8E(this,b,c);},"en",function(){return A4P(this);},"nt",function(b,c,d,e,f){ANI(this,b,c,d,e,f);},"dX",function(b,c){return A0$(this,b,c);},"eI",function(b){return A46(this,b);}],AQX,"BlockFarmland",12,O,[],0,3,0,["hu",function(b,c,d,e){return AA_(this,b,c,d,e);},"d5",function(){return AVb(this);},"gf",function(){return A1M(this);},"e0",function(b,c){return A_v(this,
b,c);},"e9",function(b,c,d,e,f){ANl(this,b,c,d,e,f);},"oJ",function(b,c,d,e,f){AKW(this,b,c,d,e,f);},"e3",function(b,c,d,e,f){Yf(this,b,c,d,e,f);},"dX",function(b,c){return AXa(this,b,c);}],AF7,"BlockFurnace",12,Eg,[],0,3,0,["fE",function(b,c,d,e){ACC(this,b,c,d,e);},"um",function(b,c,d,e,f){return AKm(this,b,c,d,e,f);},"kS",function(b,c,d,e,f){AEt(this,b,c,d,e,f);},"ci",function(b){return AU8(this,b);},"lG",function(b,c,d,e,f){return AGZ(this,b,c,d,e,f);},"tc",function(){return A8e(this);}],VE,"BlockSign",
12,Eg,[],0,3,0,["en",function(){return AYU(this);},"gf",function(){return A6j(this);},"d5",function(){return A6d(this);},"tc",function(){return A1X(this);},"fT",function(b,c,d,e){return AGS(this,b,c,d,e);},"dX",function(b,c){return A8N(this,b,c);},"e3",function(b,c,d,e,f){Z0(this,b,c,d,e,f);}],D$,"TileEntity",12,D,[],0,3,0,["tO",function(){AFQ(this);},"km",function(){ACn(this);}]]);
$rt_metadata([Jp,0,D$,[],0,3,0,0,Bc,0,D,[],0,3,BB,["iO",function(b,c,d,e,f,g,h){return AGx(this,b,c,d,e,f,g,h);},"x8",function(b,c){return A$U(this,b,c);},"n_",function(b,c,d){return ASt(this,b,c,d);},"si",function(b,c){AWh(this,b,c);},"x2",function(b,c,d,e,f){A5h(this,b,c,d,e,f);},"n2",function(b){return A_C(this,b);},"o$",function(b){return AV$(this,b);},"yL",function(b,c){A3T(this,b,c);}],AIE,"BlockDoor",12,O,[],0,3,0,["e0",function(b,c){return A$A(this,b,c);},"d5",function(){return A03(this);},"gf",function()
{return AXA(this);},"en",function(){return ATX(this);},"oU",function(b,c,d,e){return AGv(this,b,c,d,e);},"hu",function(b,c,d,e){return ZH(this,b,c,d,e);},"xO",function(b,c,d,e){AHK(this,b,c,d,e);},"ra",function(b,c,d,e,f){AJ4(this,b,c,d,e,f);},"lG",function(b,c,d,e,f){return AD0(this,b,c,d,e,f);},"e3",function(b,c,d,e,f){ACG(this,b,c,d,e,f);},"dX",function(b,c){return A8M(this,b,c);},"nK",function(b,c,d,e,f,g){return XN(this,b,c,d,e,f,g);},"fT",function(b,c,d,e){return AJ9(this,b,c,d,e);}],AC9,"BlockLadder",
12,O,[],0,3,0,["hu",function(b,c,d,e){return ADm(this,b,c,d,e);},"oU",function(b,c,d,e){return AEb(this,b,c,d,e);},"d5",function(){return AW6(this);},"gf",function(){return A56(this);},"en",function(){return A9J(this);},"fT",function(b,c,d,e){return AN1(this,b,c,d,e);},"ve",function(b,c,d,e,f){Yv(this,b,c,d,e,f);},"e3",function(b,c,d,e,f){AKT(this,b,c,d,e,f);},"eI",function(b){return A5E(this,b);}],AN3,"BlockMinecartTrack",12,O,[],0,3,0,["hu",function(b,c,d,e){return ACK(this,b,c,d,e);},"d5",function(){return AWG(this);
},"nK",function(b,c,d,e,f,g){return ALK(this,b,c,d,e,f,g);},"xO",function(b,c,d,e){AMu(this,b,c,d,e);},"e0",function(b,c){return A2M(this,b,c);},"gf",function(){return A3M(this);},"en",function(){return A0I(this);},"eI",function(b){return A2T(this,b);},"fT",function(b,c,d,e){return AN2(this,b,c,d,e);},"fE",function(b,c,d,e){ANN(this,b,c,d,e);},"e3",function(b,c,d,e,f){AJW(this,b,c,d,e,f);}],ASL,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AQv(this,b,c,d,e,f,g,h);}],AHM,0,MY,[],0,3,0,0,M_,0,Fl,[DM],1,3,
0,0,Nn,0,Ma,[],1,0,0,0,WW,0,Nn,[],0,0,0,0,ARt,0,M_,[],0,0,0,0,VD,0,D,[],3,3,0,0,LY,0,Fl,[DM,IA,K4,VD],1,3,0,0,Qa,"GZIPException",2,BL,[],0,3,0,0,Oq,0,B8,[],0,3,0,["dw",function(){return A44(this);},"sm",function(){return A5J(this);},"uj",function(){return ATw(this);}],L4,0,B8,[],0,3,0,["nG",function(){return A_Q(this);},"dw",function(){return AZf(this);}],Oc,0,B8,[],0,3,0,["dw",function(){return A67(this);},"sm",function(){return A$d(this);},"uj",function(){return AVd(this);}],Gc,0,Bc,[],0,3,0,["x8",function(b,
c){return A85(this,b,c);},"si",function(b,c){A7e(this,b,c);},"x2",function(b,c,d,e,f){AWz(this,b,c,d,e,f);},"n2",function(b){return AXi(this,b);}],O4,0,Gc,[],0,3,Bce,0,VH,0,Gc,[],0,3,Bci,["o$",function(b){return A5w(this,b);}],WA,0,Gc,[],0,3,BbV,0,AE6,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AJR(this,b,c,d,e,f,g,h);}],LS,0,Bc,[],0,3,0,["n_",function(b,c,d){return Qe(this,b,c,d);}],AO1,0,Bc,[],0,3,0,["n_",function(b,c,d){return AGG(this,b,c,d);}],ALi,0,Bc,[],0,3,0,["x8",function(b,c){return A0H(this,
b,c);},"si",function(b,c){A73(this,b,c);},"x2",function(b,c,d,e,f){AYb(this,b,c,d,e,f);},"n2",function(b){return A2L(this,b);}],AOi,0,LS,[],0,3,0,["n_",function(b,c,d){return APD(this,b,c,d);}],ANH,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AQ1(this,b,c,d,e,f,g,h);}],V6,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AFr(this,b,c,d,e,f,g,h);}],F6,0,Bc,[],0,3,0,0,X3,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return ACl(this,b,c,d,e,f,g,h);}],AHw,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return Yl(this,
b,c,d,e,f,g,h);}],AJj,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return AEg(this,b,c,d,e,f,g,h);}],ARV,0,Bc,[],0,3,0,["n_",function(b,c,d){return AH3(this,b,c,d);}],APf,0,Bc,[],0,3,0,["iO",function(b,c,d,e,f,g,h){return ADd(this,b,c,d,e,f,g,h);}],ARm,0,Bc,[],0,3,0,["yL",function(b,c){AGE(this,b,c);},"si",function(b,c){AWu(this,b,c);}],N9,0,D,[],3,0,0,0,AGn,0,D,[N9],4,3,0,["E5",function(b){AS7(this,b);},"l4",function(){AZG(this);},"yF",function(){return AUb(this);},"kL",function(b,c,d){A8q(this,b,c,d);}],Sm,
"CloneNotSupportedException",9,BD,[],0,3,0,0,Nu,0,D,[],4,3,0,0,J$,0,D,[],3,3,0,0,LP,0,D,[J$,ET],0,0,0,["ep",function(b){return A4_(this,b);},"fm",function(){return A17(this);}],IL,0,LP,[],0,0,0,0,BT,"IndexOutOfBoundsException",9,B6,[],0,3,0,0,I6,"StringIndexOutOfBoundsException",9,BT,[],0,3,0,0,GF,0,D,[],3,3,0,0,WI,0,D,[GF],0,3,0,["kt",function(){AI$(this);}],FI,"EOFException",8,BL,[],0,3,0,0,ER,0,D,[],0,3,0,0,Fz,0,D,[],0,3,0,0,LN,0,D,[],4,0,0,0]);
$rt_metadata([PW,0,E4,[],0,0,0,["qF",function(b){A6h(this,b);}],Kr,0,D,[],0,3,0,0,AMw,0,D,[],4,3,0,0,Jn,0,D,[],0,3,0,0,Lw,0,LY,[],1,0,0,0,ABW,0,Lw,[],0,0,0,0,LV,0,D,[],1,3,0,0,Of,0,D,[],0,3,0,0,AAe,0,D,[Dc],1,3,0,0,PX,0,D,[Dc],3,3,0,0,YK,0,D,[Dc,PX],1,3,0,0,KL,0,D,[],4,0,0,0,NI,0,LV,[],1,3,0,0,PY,0,NI,[],0,3,0,0,AOv,0,D,[],4,3,0,0,Gd,0,D,[],4,0,0,0,LF,0,D,[],4,0,0,0,Hy,"UTFDataFormatException",8,BL,[],0,3,0,0,XC,"NegativeArraySizeException",9,B6,[],0,3,0,0,AA5,0,D,[Lp],1,3,0,["Q4",function(b){return A_K(this,
b);},"ZA",function(){return AUK(this);}],Ks,"IllegalMonitorStateException",9,B6,[],0,3,0,0,Z2,0,D,[],0,0,0,0,D3,"IllegalStateException",9,BD,[],0,3,0,0,AIG,0,D,[Dc],1,3,0,0,S1,0,D,[GF],0,3,0,["kt",function(){ARe(this);}],Rg,0,D,[GF],0,3,0,0,G0,0,BL,[],0,3,0,0,W$,"AssertionError",9,Fh,[],0,3,0,0,E2,0,BD,[],0,3,0,0,Oo,0,D,[],1,3,0,0,Sr,0,D,[],3,3,0,0,SB,0,D,[],3,3,0,0,Po,0,D,[GF,Sr,SB],0,0,0,["kt",function(){APt(this);}],LK,0,Oo,[],1,3,0,0,Rn,0,LK,[],0,3,0,0,DZ,"Inflate$Return",2,BD,[],0,0,0,0,ANF,0,D,[ET],0,
3,0,0,O1,0,D,[N9],4,3,0,["kL",function(b,c,d){A2K(this,b,c,d);},"l4",function(){A6B(this);},"E5",function(b){A92(this,b);},"yF",function(){return A7H(this);}],Jf,0,D,[],0,3,0,0,Qo,0,D,[],3,3,0,0,Bu,0,Bq,[Qo],0,3,BW,0,ACJ,0,D,[],0,3,0,0,NH,0,D,[],0,3,0,0,Is,0,D,[],0,3,TB,0,ASk,0,E4,[],0,3,0,["qF",function(b){A7Y(this,b);},"jw",function(b,c,d){Rz(this,b,c,d);}],J1,"ArrayStoreException",9,B6,[],0,3,0,0,Ok,0,D,[],3,3,0,0,F1,0,D,[Ok],0,3,0,["ek",function(b,c,d){return ACE(this,b,c,d);},"oM",function(b,c,d){return AB9(this,
b,c,d);},"eJ",function(b,c,d){return AEQ(this,b,c,d);},"sQ",function(b,c,d){return ANp(this,b,c,d);},"li",function(b,c,d){return AAJ(this,b,c,d);}],L5,0,D,[],0,3,BA,0,ANn,0,D,[],0,3,0,0]);
$rt_metadata([Gg,0,D,[],0,3,0,0,CT,0,Gg,[],0,3,0,["pc",function(b,c){YV(this,b,c);},"I$",function(b,c,d){Zu(this,b,c,d);},"Ci",function(b,c,d){A2I(this,b,c,d);},"iE",function(b){AM1(this,b);},"hT",function(){AQc(this);},"rF",function(){A3q(this);},"pw",function(){AIb(this);},"oc",function(){return AVB(this);}],AFj,0,D,[],0,3,0,0,Mp,0,D,[De],1,3,0,0,Eu,0,Mp,[De],0,3,0,0,Og,0,D,[],3,3,0,0,Ja,0,D,[De,Og],1,3,0,0,Wq,0,D,[Og],3,3,0,0,N6,0,D,[Wq],3,3,0,0,R$,0,D,[],3,3,0,0,Mh,0,D,[R$],3,3,0,0,Vb,0,Ja,[De,N6,Mh],0,
3,0,0,Wo,0,D,[N6],3,3,0,0,R4,0,D,[Mh],3,3,0,0,G_,0,Ja,[De,Wo,R4],0,3,0,0,S9,0,D,[GF],0,3,0,["kt",function(){AII(this);}],AO6,"CoderMalfunctionError",7,Fh,[],0,3,0,0,GX,0,D,[],3,3,0,0,UE,0,D,[GX],3,3,0,0,AC6,0,D,[UE],0,0,0,0,RL,0,D,[],0,0,0,0,N3,0,D,[],0,3,0,0,Wp,0,D,[],0,3,0,0,Qr,0,D,[],0,3,0,0,AK4,0,Ew,[],0,3,0,["pb",function(){A0j(this);}],ACs,0,Ew,[],0,3,0,["pb",function(){A82(this);}],ASe,0,Ew,[],0,3,0,["pb",function(){A3E(this);}],Xz,0,D,[],3,3,0,0,AAB,0,D,[Xz],0,3,0,0,AHh,0,CT,[],0,3,0,["rF",function()
{A5A(this);},"pc",function(b,c){ANS(this,b,c);},"hT",function(){AIy(this);},"iE",function(b){ACy(this,b);},"hN",function(b,c,d){ZJ(this,b,c,d);}],O7,0,D,[],0,3,0,0,Nw,0,Gg,[],0,3,0,0,Le,0,D,[],3,3,0,0,IN,0,D,[Le],0,3,0,0,JD,"EntityPlayer",12,EQ,[],0,3,0,["BO",function(){AF1(this);},"FF",function(b){ALl(this,b);},"BF",function(b,c){AZE(this,b,c);},"rN",function(){return A5r(this);},"fs",function(b,c){return Yx(this,b,c);}],AGH,"EntityPlayerSP",12,JD,[],0,3,0,["wM",function(){AAW(this);},"ot",function(){ALu(this);
}],Qu,0,D,[],0,3,0,0,AJO,0,D,[],0,3,0,0,Vz,0,D,[],0,3,0,0,FF,0,D,[],3,3,0,0,VM,0,D,[FF],0,3,0,["j8",function(b,c){return Em(this,b,c);},"jE",function(b,c){AFI(this,b,c);},"gx",function(b){return RY(this,b);},"f4",function(){return AZA(this);},"km",function(){AAv(this);}],Dv,0,I7,[],0,3,0,0,Ey,0,CT,[],1,3,0,["hN",function(b,c,d){ACp(this,b,c,d);},"I$",function(b,c,d){AN_(this,b,c,d);},"Ci",function(b,c,d){A9S(this,b,c,d);},"pc",function(b,c){AAD(this,b,c);},"pw",function(){AA6(this);},"oc",function(){return A$_(this);
}],APV,0,Ey,[],0,3,0,["pw",function(){ALR(this);},"tq",function(b){AT2(this,b);},"lv",function(){A0e(this);},"hN",function(b,c,d){AD5(this,b,c,d);},"s5",function(b){Ye(this,b);}],Jc,0,D,[],0,3,0,0,Ry,0,D,[],0,0,0,0,Ts,0,D,[],0,3,0,0,AHv,0,D,[],0,3,0,0,Cd,0,D,[],4,3,0,0,ZR,0,D,[FF],0,3,0,["gx",function(b){return Gi(this,b);},"j8",function(b,c){return AE3(this,b,c);},"jE",function(b,c){A3N(this,b,c);},"f4",function(){return A89(this);},"km",function(){ADW(this);}]]);
$rt_metadata([AAL,0,D,[FF],0,3,0,["gx",function(b){return A5e(this,b);},"j8",function(b,c){return AWL(this,b,c);},"jE",function(b,c){Pr(this,b,c);},"f4",function(){return AY3(this);},"km",function(){ANq(this);}],HP,0,D,[],0,3,0,["Js",function(){ALg(this);},"s8",function(b){return AXq(this,b);},"rZ",function(){return A90(this);}],ADl,0,HP,[],0,0,0,["s8",function(b){return A0u(this,b);},"Js",function(){AOc(this);}],QP,0,HP,[],0,0,0,["s8",function(b){return A23(this,b);},"rZ",function(){return AWF(this);}],Wk,
0,D,[],4,3,0,0,SK,0,D,[],4,3,0,0,M9,0,Fl,[DM],1,3,0,0,Dh,0,D,[],1,3,0,0,AIO,0,Dh,[],0,3,0,["iQ",function(b,c,d,e,f,g){ADb(this,b,c,d,e,f,g);}],Pj,0,D,[],4,3,0,0,QI,0,D,[DO],4,0,0,["gR",function(b){return A7B(this,b);}],QH,0,D,[DO],4,0,0,["gR",function(b){return A7N(this,b);}],IC,0,M9,[],1,0,0,0,U4,0,IC,[],0,0,0,["yx",function(b){return AOR(this,b);},"u$",function(b,c){ANP(this,b,c);},"m3",function(){return AS0(this);}],Wd,0,D,[],4,3,0,0,V_,0,D,[],4,3,0,0,Xp,0,D,[],4,3,0,0,Jv,"UnsupportedOperationException",
9,B6,[],0,3,0,0,US,0,CT,[],0,3,0,["hT",function(){ADn(this);},"iE",function(b){AOJ(this,b);},"hN",function(b,c,d){AMJ(this,b,c,d);}],FW,"ReadOnlyBufferException",6,Jv,[],0,3,0,0,Hc,"BufferOverflowException",6,B6,[],0,3,0,0,Gu,"BufferUnderflowException",6,B6,[],0,3,0,0,TI,0,D,[],0,3,0,0,ACu,0,D,[],0,3,0,0,RE,0,CT,[],0,3,0,0,Mq,0,CT,[],0,3,0,["hT",function(){AOs(this);},"pc",function(b,c){AMt(this,b,c);},"iE",function(b){AOC(this,b);},"hN",function(b,c,d){APv(this,b,c,d);},"oc",function(){return A6Z(this);}],C2,
"EntityFX",12,C6,[],0,3,0,["eq",function(){ALv(this);},"kT",function(b,c,d,e,f,g,h){ANB(this,b,c,d,e,f,g,h);},"xA",function(){return A7$(this);}],AA7,0,CT,[],0,3,0,["hT",function(){ARk(this);},"iE",function(b){ADt(this,b);},"rF",function(){A2q(this);},"hN",function(b,c,d){ADS(this,b,c,d);}],LD,0,D,[],0,3,0,0,WM,0,LD,[],0,3,0,0,Q_,0,D,[],3,3,0,0,AFX,0,D,[Q_],0,3,0,0,Pa,0,D,[],0,3,0,0,Il,0,D,[FF],0,3,0,["gm",function(){return A6D(this);},"w_",function(){return A6r(this);},"gx",function(b){return ATh(this,b);},
"j8",function(b,c){return A3r(this,b,c);},"jE",function(b,c){AW2(this,b,c);},"f4",function(){return A$g(this);},"km",function(){YF(this);}],ZN,"EntityDiggingFX",12,C2,[],0,3,0,["xA",function(){return ATP(this);},"kT",function(b,c,d,e,f,g,h){YS(this,b,c,d,e,f,g,h);}],KY,"ConcurrentModificationException",4,B6,[],0,3,0,0,JW,"EntityRainFX",12,C2,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AKU(this,b,c,d,e,f,g,h);},"eq",function(){AOE(this);}],IV,0,IC,[],1,0,0,["m3",function(){return AXW(this);}],Pl,0,IV,[],0,0,0,["yx",
function(b){return AWj(this,b);},"u$",function(b,c){ASZ(this,b,c);}],VW,0,IV,[],0,0,0,["yx",function(b){return A01(this,b);},"u$",function(b,c){ATS(this,b,c);}],AK2,0,D,[FC],0,3,0,["qi",function(b,c){return A1i(this,b,c);}],Wi,0,D,[FC],0,3,0,["qi",function(b,c){return A9P(this,b,c);}],Hu,0,D,[],0,3,0,0,H1,0,D,[],0,3,0,0,H4,0,D,[],0,3,0,0,Nk,0,D,[],0,3,0,0,J9,"NoSuchElementException",4,B6,[],0,3,0,0,V5,0,D,[],0,3,0,["ep",function(b){return A6y(this,b);},"fm",function(){return A1C(this);}],Oz,0,Fc,[DM],0,3,0,
0,Hn,0,D,[],0,0,0,0]);
$rt_metadata([Nl,0,D,[],4,3,0,0,Sg,0,D,[],0,3,0,0,DJ,0,Dh,[],0,3,0,["Ia",function(b,c,d,e,f,g){AAh(this,b,c,d,e,f,g);},"k9",function(b,c){return AP0(this,b,c);},"CJ",function(b){return A5t(this,b);},"CM",function(b,c,d){return A6H(this,b,c,d);},"xj",function(b,c){A9k(this,b,c);},"iQ",function(b,c,d,e,f,g){AO5(this,b,c,d,e,f,g);}],OT,0,DJ,[],0,3,0,["k9",function(b,c){return Ze(this,b,c);},"Ia",function(b,c,d,e,f,g){AMa(this,b,c,d,e,f,g);},"iQ",function(b,c,d,e,f,g){ACS(this,b,c,d,e,f,g);}],LE,0,Gg,[],0,3,0,0,Mc,
0,D,[MW],0,3,0,0,Qz,0,D,[],3,3,0,0,Kz,0,Mc,[Qz],0,3,0,0,Oy,0,D,[Dc],3,3,0,0,QG,0,D,[Oy],4,0,0,["Gm",function(){return A1N(this);}],WS,0,D,[FC],0,3,0,["qi",function(b,c){return A41(this,b,c);}],WQ,0,D,[FC],0,3,0,0,Si,0,Eo,[],4,0,0,0,Sh,0,FZ,[],4,0,0,0,Sj,0,Gf,[],4,0,0,0,IH,0,D,[],1,3,0,0,AA$,0,IH,[],0,3,0,["CX",function(b,c,d,e,f){XL(this,b,c,d,e,f);}],NC,0,D$,[],0,3,0,["tO",function(){AC$(this);}],AR9,0,IH,[],0,3,0,["CX",function(b,c,d,e,f){ARl(this,b,c,d,e,f);}],AQq,0,DJ,[],0,3,0,["CJ",function(b){return A6u(this,
b);},"k9",function(b,c){return Yj(this,b,c);}],Ug,0,DJ,[],0,3,0,["k9",function(b,c){return AMk(this,b,c);}],F4,0,Eh,[],0,3,0,["hI",function(b,c,d,e,f,g){A98(this,b,c,d,e,f,g);}],P3,0,F4,[],0,3,0,0,TO,0,DJ,[],0,3,0,["k9",function(b,c){return ARz(this,b,c);}],ACO,0,F4,[],0,3,0,0,ARo,0,F4,[],0,3,0,0,ACf,0,DJ,[],0,3,0,["xj",function(b,c){A76(this,b,c);},"CM",function(b,c,d){return AZ7(this,b,c,d);}],HV,0,MD,[],0,3,0,["ok",function(b,c,d,e,f,g){A2U(this,b,c,d,e,f,g);}],AIs,0,HV,[],0,3,0,0,Ld,"EntityGiant",12,DP,
[],0,3,0,["sF",function(b,c,d){return APe(this,b,c,d);}],Ul,0,DJ,[],0,3,0,["xj",function(b,c){A$9(this,b,c);}],TV,0,Dh,[],0,3,0,["iQ",function(b,c,d,e,f,g){AJA(this,b,c,d,e,f,g);}],IM,"EntityPainting",12,C6,[],0,3,0,["eq",function(){ADr(this);},"lx",function(){return AXY(this);},"fs",function(b,c){return AEx(this,b,c);}],AAz,0,Dh,[],0,3,0,["iQ",function(b,c,d,e,f,g){AOY(this,b,c,d,e,f,g);}],JB,"EntityArrow",12,C6,[],0,3,0,["eq",function(){APB(this);},"xJ",function(b){A7L(this,b);}],RD,0,Dh,[],0,3,0,["iQ",function(b,
c,d,e,f,g){ADp(this,b,c,d,e,f,g);}],E_,"EntityItem",12,C6,[],0,3,0,["eq",function(){AJM(this);},"HQ",function(){return AEl(this);},"F2",function(b){AMD(this,b);},"fs",function(b,c){return Vs(this,b,c);},"xJ",function(b){A_n(this,b);}],Mv,"EntityTNTPrimed",12,C6,[],0,3,0,["lx",function(){return A$m(this);},"eq",function(){XR(this);}],AO2,0,Dh,[],0,3,0,["iQ",function(b,c,d,e,f,g){AMd(this,b,c,d,e,f,g);}],JU,"EntityFallingSand",12,C6,[],0,3,0,["lx",function(){return AYs(this);},"eq",function(){AMW(this);}],AQV,
0,Dh,[],0,3,0,["iQ",function(b,c,d,e,f,g){ARs(this,b,c,d,e,f,g);}],Gh,"EntityMinecart",12,C6,[FF],0,3,0,["A2",function(b){return AS1(this,b);},"By",function(){return A0b(this);},"rV",function(){return A7O(this);},"Ai",function(){return AVX(this);},"fs",function(b,c){return ALo(this,b,c);},"lx",function(){return A9U(this);},"C9",function(){APn(this);},"eq",function(){ASQ(this);},"u1",function(b){A30(this,b);},"uL",function(b){return A8Z(this,b);}],ARH,0,Dh,[],0,3,0,["iQ",function(b,c,d,e,f,g){AQn(this,b,c,d,
e,f,g);}],Wg,0,D,[],0,3,0,0,ABL,0,D,[],0,3,0,0,AH_,0,Eh,[],0,3,0,["hI",function(b,c,d,e,f,g){AYi(this,b,c,d,e,f,g);}],AIH,0,Eh,[],0,3,0,["hI",function(b,c,d,e,f,g){A3b(this,b,c,d,e,f,g);}],AE2,0,Eh,[],0,3,0,0,TH,0,D,[GX],0,0,0,["qm",function(){return KK(this);},"ld",function(){return KZ(this);}],Jb,0,D,[],0,3,0,0]);
$rt_metadata([Iz,0,D,[Ok],0,3,0,["ek",function(b,c,d){return HD(this,b,c,d);},"sQ",function(b,c,d){return AAV(this,b,c,d);},"eJ",function(b,c,d){return ADa(this,b,c,d);},"oM",function(b,c,d){return Oa(this,b,c,d);},"li",function(b,c,d){return ACc(this,b,c,d);}],Gk,0,BD,[],0,3,0,0,U5,"NoSuchMethodException",9,Gk,[],0,3,0,0,Vo,0,D,[],0,3,0,0,PT,0,Gn,[],0,0,0,["rD",function(b){return A0A(this,b);},"jP",function(){return Nm(this);}],TE,0,D,[Oy],0,0,0,["Gm",function(){return A_H(this);}],AQO,0,D,[],4,3,0,0,W5,0,
D$,[FF],0,3,0,["gx",function(b){return A9y(this,b);},"j8",function(b,c){return A8s(this,b,c);},"jE",function(b,c){AVC(this,b,c);},"f4",function(){return AUe(this);},"tO",function(){AGK(this);},"km",function(){Z_(this);}],Tq,0,D$,[FF],0,3,0,["gm",function(){return AVV(this);},"gx",function(b){return Ri(this,b);},"j8",function(b,c){return A13(this,b,c);},"jE",function(b,c){AHF(this,b,c);},"w_",function(){return A8L(this);},"f4",function(){return A7u(this);}],CR,0,D,[],1,3,0,0,APW,0,CR,[],0,3,0,["gN",function(b)
{A7l(this,b);},"gF",function(b){A9s(this,b);},"fe",function(){return A7j(this);}],P_,"BufferUnderflowException",7,B6,[],0,3,0,0,ST,"BufferOverflowException",7,B6,[],0,3,0,0,R7,"MalformedInputException",7,G0,[],0,3,0,["lU",function(){return AVZ(this);}],P7,"UnmappableCharacterException",7,G0,[],0,3,0,["lU",function(){return AVt(this);}],Gr,0,D,[],0,0,0,["qm",function(){return EL(this);}],Vl,0,Gr,[GX],0,0,0,["ld",function(){return Mi(this);}],WD,0,D,[],0,3,0,0,AEG,0,CT,[],0,3,0,["hT",function(){AR$(this);},"iE",
function(b){AD3(this,b);},"hN",function(b,c,d){AGg(this,b,c,d);}],OF,0,CT,[],0,3,0,["hT",function(){APC(this);},"s$",function(){AXK(this);},"iE",function(b){ASH(this,b);},"IY",function(b){AKV(this,b);},"hN",function(b,c,d){AEJ(this,b,c,d);}],L2,"InstantiationException",9,Gk,[],0,3,0,0,Tk,"IllegalAccessException",9,Gk,[],0,3,0,0,ALD,0,D,[],4,3,0,0,AAj,0,D,[],4,3,0,0,AMr,0,D,[De],4,3,0,0,AB7,0,LE,[],0,3,0,0,NU,0,CT,[],0,3,0,["hT",function(){AJB(this);},"iE",function(b){AIk(this,b);},"pc",function(b,c){ALX(this,
b,c);},"hN",function(b,c,d){AGC(this,b,c,d);}],U$,0,OF,[],0,3,0,["s$",function(){A11(this);},"IY",function(b){AMh(this,b);}],NX,0,D,[],0,3,0,0,Yu,0,NX,[],0,3,0,0,Q3,0,D,[],0,3,AY7,0,Co,0,D,[],1,0,0,["eK",function(b,c,d){return Jl(this,b,c,d);},"eY",function(b,c,d,e){return Jw(this,b,c,d,e);},"oH",function(){return A4z(this);},"cb",function(b){A1w(this,b);},"d4",function(b){return A$F(this,b);},"lA",function(){return A_o(this);},"iX",function(){Lb(this);}],N8,0,CR,[],0,3,0,["gF",function(b){A9p(this,b);},"gN",
function(b){A0y(this,b);},"fe",function(){return AUR(this);}],DW,0,Co,[],0,0,0,["k",function(b,c,d){return ATT(this,b,c,d);},"b4",function(b){return AUd(this,b);}],H0,0,D,[],0,0,0,0,ARj,"PatternSyntaxException",5,Cc,[],0,3,0,["lU",function(){return A_k(this);}],MA,0,CR,[],0,3,0,["gN",function(b){A8O(this,b);},"gF",function(b){A8f(this,b);},"fe",function(){return A6T(this);}],M2,0,CR,[],0,3,0,["gN",function(b){AWs(this,b);},"gF",function(b){AZK(this,b);},"fe",function(){return A5W(this);}],Ln,0,CR,[],0,3,0,["gN",
function(b){A2f(this,b);},"gF",function(b){AZd(this,b);},"fe",function(){return AVx(this);}],Oh,0,CR,[],0,3,0,["gN",function(b){ATp(this,b);},"gF",function(b){A_A(this,b);},"fe",function(){return A2S(this);}],Pp,0,CR,[],0,3,0,["gN",function(b){ATg(this,b);},"gF",function(b){A79(this,b);},"fe",function(){return ASW(this);}],Mt,0,CR,[],0,3,0,["gN",function(b){A6_(this,b);},"gF",function(b){AVf(this,b);},"fe",function(){return A06(this);}],MM,0,CR,[],0,3,0,["gN",function(b){A5j(this,b);},"gF",function(b){A7s(this,
b);},"fe",function(){return A9M(this);}],OM,0,CR,[],0,3,0,["gN",function(b){A$2(this,b);},"gF",function(b){AZe(this,b);},"fe",function(){return ATA(this);}],QZ,0,CR,[],0,3,0,["gN",function(b){A9H(this,b);},"gF",function(b){AY9(this,b);},"fe",function(){return AYJ(this);}],TL,0,D,[DH],4,0,0,["gw",function(){return AUA(this);}],TK,0,D,[DH],4,0,0,["gw",function(){return AXz(this);}],AR1,0,D,[],0,3,0,0,X6,0,D,[],0,3,0,0,XZ,0,D,[],0,3,0,0]);
$rt_metadata([AEi,0,D,[],0,3,0,0,AR0,0,D,[],0,3,0,0,AFe,0,D,[],0,3,0,0,Yr,0,D,[FC],0,0,0,["qi",function(b,c){return AZH(this,b,c);}],QM,0,DW,[],0,0,0,["k",function(b,c,d){return A3H(this,b,c,d);},"b4",function(b){return A9I(this,b);}],ASi,0,DW,[],0,0,0,["k",function(b,c,d){return A4X(this,b,c,d);}],P2,0,DW,[],0,0,0,["k",function(b,c,d){return AUj(this,b,c,d);}],Ra,0,DW,[],0,0,0,["k",function(b,c,d){return A3K(this,b,c,d);},"b4",function(b){return A8Y(this,b);}],HY,0,DW,[],0,0,0,["k",function(b,c,d){return A1H(this,
b,c,d);}],CI,0,Co,[],1,0,0,["k",function(b,c,d){return A_J(this,b,c,d);},"ec",function(){return A$h(this);},"b4",function(b){return AXg(this,b);}],AF0,0,CI,[],0,0,0,["dn",function(b,c){return A9V(this,b,c);},"eK",function(b,c,d){return A5M(this,b,c,d);},"eY",function(b,c,d,e){return A4O(this,b,c,d,e);},"b4",function(b){return A3J(this,b);}],CE,0,Co,[],0,0,0,["k",function(b,c,d){return AWA(this,b,c,d);},"cb",function(b){AZu(this,b);},"d4",function(b){return A7o(this,b);},"b4",function(b){return AZ2(this,b);},
"iX",function(){AUS(this);}],K7,0,CE,[],0,0,0,["k",function(b,c,d){return AZl(this,b,c,d);},"b4",function(b){return A9u(this,b);}],EW,0,K7,[],0,0,0,["k",function(b,c,d){return A5d(this,b,c,d);},"cb",function(b){A9d(this,b);}],Tn,0,EW,[],0,0,0,["k",function(b,c,d){return AZq(this,b,c,d);},"b4",function(b){return A1y(this,b);}],WU,0,EW,[],0,0,0,["k",function(b,c,d){return AT8(this,b,c,d);},"b4",function(b){return A$l(this,b);}],Vm,0,EW,[],0,0,0,["k",function(b,c,d){return AUP(this,b,c,d);},"b4",function(b){return A_X(this,
b);}],Ro,0,EW,[],0,0,0,["k",function(b,c,d){return A3k(this,b,c,d);},"b4",function(b){return A9A(this,b);}],IG,0,CE,[],0,0,0,["k",function(b,c,d){return ATn(this,b,c,d);},"eK",function(b,c,d){return AYg(this,b,c,d);},"eY",function(b,c,d,e){return A9L(this,b,c,d,e);},"d4",function(b){return A7k(this,b);},"lA",function(){return A8W(this);},"iX",function(){A2b(this);}],H5,0,D,[],1,0,0,0,Bl,0,H5,[],1,0,0,["hC",function(){return A4m(this);},"kr",function(){return A3U(this);},"sR",function(){return A$b(this);},"nT",
function(){return A_l(this);}],ZT,"CharClass",5,Bl,[],0,0,0,["X",function(b){return D6(this,b);},"hC",function(){return DY(this);},"kr",function(){return A5F(this);},"sR",function(){return A1o(this);},"gk",function(){return A7_(this);},"nT",function(){return AV5(this);}],MV,"MissingResourceException",4,B6,[],0,3,0,0,E6,0,Co,[],1,0,0,["d4",function(b){return A0B(this,b);},"b4",function(b){return A$R(this,b);},"iX",function(){AYD(this);}],D8,0,E6,[],0,0,0,["k",function(b,c,d){return A3l(this,b,c,d);}],GD,0,D8,
[],0,0,0,["k",function(b,c,d){return A3_(this,b,c,d);}],DX,0,E6,[],0,0,0,["k",function(b,c,d){return A3A(this,b,c,d);}],FY,0,D8,[],0,0,0,["k",function(b,c,d){return A7y(this,b,c,d);},"cb",function(b){A2X(this,b);}],SC,0,D8,[],0,0,0,["k",function(b,c,d){return A_E(this,b,c,d);},"eK",function(b,c,d){return AYT(this,b,c,d);}],EB,"NumberFormatException",9,Cc,[],0,3,0,0,Ty,"Quantifier",5,H5,[ET],0,0,0,["gk",function(){return A8i(this);}],T0,0,Co,[],0,0,0,["k",function(b,c,d){return AXE(this,b,c,d);},"b4",function(b)
{return A8V(this,b);}],W7,0,D,[ET,De],0,3,0,0,OP,0,CE,[],0,0,0,0,Qd,0,CE,[],0,0,0,["k",function(b,c,d){return ATR(this,b,c,d);},"cb",function(b){A8I(this,b);},"b4",function(b){return AUp(this,b);},"d4",function(b){return AT_(this,b);}],EP,0,CE,[],0,0,0,["k",function(b,c,d){return A5y(this,b,c,d);},"X",function(b){return AWg(this,b);},"d4",function(b){return ATM(this,b);},"cb",function(b){A99(this,b);},"b4",function(b){return AV0(this,b);}],MU,0,EP,[],0,0,0,["X",function(b){return AXh(this,b);}],ZD,0,CI,[],0,
0,0,["dn",function(b,c){return A65(this,b,c);}],Fp,0,CI,[],0,0,0,["dn",function(b,c){return Tg(this,b,c);},"d4",function(b){return AZx(this,b);}],Uf,0,CE,[],0,0,0,["cb",function(b){AYl(this,b);},"k",function(b,c,d){return AS3(this,b,c,d);},"d4",function(b){return A4s(this,b);},"b4",function(b){return A1r(this,b);}],Fx,0,CI,[],0,0,0,["ec",function(){return A6X(this);},"dn",function(b,c){return AWM(this,b,c);},"eK",function(b,c,d){return AVO(this,b,c,d);},"eY",function(b,c,d,e){return AXu(this,b,c,d,e);},"d4",
function(b){return A1l(this,b);}],AGX,0,CI,[],0,0,0,["dn",function(b,c){return A26(this,b,c);}],XX,0,CI,[],0,0,0,["dn",function(b,c){return ATi(this,b,c);}],GI,0,CE,[],0,0,0,["cb",function(b){A_q(this,b);},"k",function(b,c,d){return AZk(this,b,c,d);},"d4",function(b){return AXH(this,b);},"b4",function(b){return A9f(this,b);}],SU,0,GI,[],0,0,0,0,Wc,0,GI,[],0,0,0,0,Td,0,DX,[],0,0,0,["k",function(b,c,d){return A4Z(this,b,c,d);}],UK,0,DX,[],0,0,0,["k",function(b,c,d){return A7X(this,b,c,d);}],Hz,0,DX,[],0,0,0,["k",
function(b,c,d){return A96(this,b,c,d);},"cb",function(b){A$Z(this,b);}],PV,0,Hz,[],0,0,0,["k",function(b,c,d){return AXr(this,b,c,d);},"cb",function(b){A8k(this,b);}]]);
$rt_metadata([G$,0,DX,[],0,0,0,["k",function(b,c,d){return A_T(this,b,c,d);}],O2,0,G$,[],0,0,0,["k",function(b,c,d){return AW4(this,b,c,d);}],QC,0,DX,[],0,0,0,["k",function(b,c,d){return A2k(this,b,c,d);}],U3,0,Hz,[],0,0,0,["k",function(b,c,d){return AUr(this,b,c,d);}],RZ,0,G$,[],0,0,0,["k",function(b,c,d){return A3O(this,b,c,d);}],QD,0,E6,[],0,0,0,["k",function(b,c,d){return A_L(this,b,c,d);},"eK",function(b,c,d){return A0X(this,b,c,d);}],T5,0,E6,[],0,0,0,["k",function(b,c,d){return AZy(this,b,c,d);},"eK",
function(b,c,d){return AS6(this,b,c,d);}],Gm,0,D,[],1,0,0,0,XD,0,D8,[],0,0,0,["k",function(b,c,d){return ATE(this,b,c,d);}],Sy,0,FY,[],0,0,0,["k",function(b,c,d){return AYI(this,b,c,d);}],Ur,0,GD,[],0,0,0,["k",function(b,c,d){return A9O(this,b,c,d);}],U1,0,D8,[],0,0,0,["k",function(b,c,d){return AZr(this,b,c,d);}],We,0,FY,[],0,0,0,["k",function(b,c,d){return ATI(this,b,c,d);}],Qn,0,GD,[],0,0,0,["k",function(b,c,d){return A9W(this,b,c,d);}],ABU,0,Co,[],4,0,0,["k",function(b,c,d){return A7n(this,b,c,d);},"b4",
function(b){return A6Q(this,b);}],AAu,0,Co,[],0,0,0,["k",function(b,c,d){return A4j(this,b,c,d);},"b4",function(b){return A4q(this,b);}],AJy,0,Co,[],0,0,0,["k",function(b,c,d){return AXl(this,b,c,d);},"b4",function(b){return A2H(this,b);}],SR,0,Co,[],4,0,0,["k",function(b,c,d){return A88(this,b,c,d);},"b4",function(b){return A4R(this,b);}],ARc,0,Co,[],0,0,0,["k",function(b,c,d){return A8D(this,b,c,d);},"b4",function(b){return A25(this,b);}],AIW,0,Co,[],0,0,0,["k",function(b,c,d){return A4M(this,b,c,d);},"b4",
function(b){return AWt(this,b);}],AGm,0,CE,[],0,0,0,["k",function(b,c,d){return A2p(this,b,c,d);},"cb",function(b){A4v(this,b);},"oH",function(){return A8p(this);},"b4",function(b){return A4t(this,b);}],ZP,0,CE,[],4,0,0,["k",function(b,c,d){return A8y(this,b,c,d);},"cb",function(b){A9E(this,b);},"oH",function(){return ASR(this);},"b4",function(b){return A2w(this,b);}],AQR,0,Co,[],4,0,0,["k",function(b,c,d){return AXO(this,b,c,d);},"b4",function(b){return A51(this,b);}],AOa,0,Co,[],0,0,0,["k",function(b,c,d)
{return AZc(this,b,c,d);},"b4",function(b){return A5X(this,b);}],AIg,0,Co,[],0,0,0,["k",function(b,c,d){return A6L(this,b,c,d);},"b4",function(b){return AU3(this,b);}],IZ,0,CE,[],0,0,0,["k",function(b,c,d){return ATF(this,b,c,d);},"cb",function(b){A9b(this,b);},"b4",function(b){return A0l(this,b);}],AQ2,0,IZ,[],0,0,0,["k",function(b,c,d){return AU$(this,b,c,d);},"eK",function(b,c,d){return A1x(this,b,c,d);},"eY",function(b,c,d,e){return ATx(this,b,c,d,e);},"d4",function(b){return A7R(this,b);}],AMm,0,IZ,[],
0,0,0,["k",function(b,c,d){return AYe(this,b,c,d);}],AM0,0,CI,[],0,0,0,["dn",function(b,c){return AVo(this,b,c);},"eK",function(b,c,d){return A4i(this,b,c,d);},"eY",function(b,c,d,e){return A58(this,b,c,d,e);},"d4",function(b){return AWW(this,b);}],XO,0,CI,[],0,0,0,["dn",function(b,c){return AYh(this,b,c);}],O5,0,CI,[],0,0,0,["dn",function(b,c){return A9Q(this,b,c);}],Ic,0,D,[],4,0,0,0,By,0,D,[],1,0,0,0,Tj,0,CI,[],0,0,0,["dn",function(b,c){return A0F(this,b,c);}],NQ,0,CE,[],0,0,0,["cb",function(b){A8Q(this,
b);},"k",function(b,c,d){return A4S(this,b,c,d);},"eK",function(b,c,d){return AWV(this,b,c,d);},"eY",function(b,c,d,e){return A5g(this,b,c,d,e);},"d4",function(b){return ATs(this,b);},"b4",function(b){return A1c(this,b);}],NW,0,CE,[],0,0,0,["cb",function(b){A4D(this,b);},"k",function(b,c,d){return AS8(this,b,c,d);},"eK",function(b,c,d){return A81(this,b,c,d);},"eY",function(b,c,d,e){return A0D(this,b,c,d,e);},"d4",function(b){return AVp(this,b);},"b4",function(b){return A83(this,b);}],EZ,0,CI,[],0,0,0,["dn",
function(b,c){return A9v(this,b,c);},"eK",function(b,c,d){return A8b(this,b,c,d);},"eY",function(b,c,d,e){return AUz(this,b,c,d,e);},"d4",function(b){return A9m(this,b);}],WG,0,Gm,[],4,0,0,["ox",function(b){return AUI(this,b);},"Eg",function(b,c){return A0i(this,b,c);}],WH,0,Gm,[],4,0,0,["ox",function(b){return A9Y(this,b);},"Eg",function(b,c){return A1_(this,b,c);}],AEU,0,D,[],0,0,0,0,YD,0,D,[],0,0,0,0,NO,0,By,[],0,0,0,["bW",function(){return AMv(this);}],Nf,0,By,[],0,0,0,["bW",function(){return ANU(this);
}],AEN,0,By,[],0,0,0,["bW",function(){return A9G(this);}],AFp,0,By,[],0,0,0,["bW",function(){return A1e(this);}],AFy,0,By,[],0,0,0,["bW",function(){return AVQ(this);}],NJ,0,By,[],0,0,0,["bW",function(){return ZV(this);}],Md,0,NJ,[],0,0,0,["bW",function(){return AA3(this);}],AHW,0,By,[],0,0,0,["bW",function(){return A6p(this);}],OI,0,Md,[],0,0,0,["bW",function(){return AIa(this);}]]);
$rt_metadata([AMX,0,OI,[],0,0,0,["bW",function(){return AYF(this);}],ACR,0,By,[],0,0,0,["bW",function(){return A49(this);}],AAp,0,By,[],0,0,0,["bW",function(){return AYx(this);}],AKg,0,By,[],0,0,0,["bW",function(){return A2a(this);}],AQj,0,By,[],0,0,0,["bW",function(){return A8n(this);}],AH4,0,By,[],0,0,0,["bW",function(){return A2_(this);}],APw,0,By,[],0,0,0,["bW",function(){return AW7(this);}],AEv,0,By,[],0,0,0,["bW",function(){return A0n(this);}],AF3,0,By,[],0,0,0,["bW",function(){return A47(this);}],Y6,
0,By,[],0,0,0,["bW",function(){return AVz(this);}],AID,0,By,[],0,0,0,["bW",function(){return A_c(this);}],APL,0,By,[],0,0,0,["bW",function(){return A27(this);}],AFc,0,By,[],0,0,0,["bW",function(){return AXR(this);}],ALk,0,By,[],0,0,0,["bW",function(){return AVF(this);}],AC3,0,By,[],0,0,0,["bW",function(){return A5$(this);}],AHf,0,By,[],0,0,0,["bW",function(){return A7b(this);}],APZ,0,By,[],0,0,0,["bW",function(){return A1s(this);}],ABE,0,By,[],0,0,0,["bW",function(){return AZT(this);}],AAP,0,By,[],0,0,0,["bW",
function(){return AYX(this);}],AH2,0,By,[],0,0,0,["bW",function(){return A9C(this);}],Lf,0,By,[],0,0,0,["bW",function(){return ACT(this);}],AQM,0,Lf,[],0,0,0,["bW",function(){return AYO(this);}],AM3,0,NO,[],0,0,0,["bW",function(){return A4d(this);}],AAI,0,Nf,[],0,0,0,["bW",function(){return AWI(this);}],AKs,0,By,[],0,0,0,["bW",function(){return AX4(this);}],AKX,0,By,[],0,0,0,["bW",function(){return A1Z(this);}],AMH,0,By,[],0,0,0,["bW",function(){return A5U(this);}],AMY,0,By,[],0,0,0,["bW",function(){return ASY(this);
}],AKB,0,D,[],4,0,0,0,Zz,0,D,[],4,3,0,0,TD,0,D,[],0,3,0,0,R5,0,D,[],0,3,0,0,AMf,0,D,[],4,3,0,0,Wt,0,Ey,[],0,3,0,["lv",function(){A3P(this);},"s5",function(b){AOp(this,b);}],Xt,0,Ey,[],0,3,0,["pw",function(){Zd(this);},"tq",function(b){A6N(this,b);},"lv",function(){A19(this);},"s5",function(b){AKv(this,b);}],AMM,0,Ey,[],0,3,0,["lv",function(){A9$(this);},"s5",function(b){ANY(this,b);}],CX,"EnumArt",12,EX,[],12,3,0,0,PS,0,Eo,[],0,0,0,0,Ve,0,CT,[],0,3,0,["hT",function(){AGr(this);},"iE",function(b){AQz(this,b);
},"hN",function(b,c,d){YZ(this,b,c,d);}],IS,"MinecraftError",12,Fh,[],0,3,0,0,UY,0,D,[],0,3,0,0,SA,"AbstractCharClass$1",5,Bl,[],0,0,0,["X",function(b){return AVU(this,b);}],Sz,"AbstractCharClass$2",5,Bl,[],0,0,0,["X",function(b){return A3w(this,b);}],PA,"CharClass$18",5,Bl,[],0,0,0,["X",function(b){return AX1(this,b);},"gk",function(){return A6b(this);}],T8,0,Bl,[],0,0,0,["X",function(b){return A9x(this,b);}],T6,0,Bl,[],0,0,0,["X",function(b){return A0E(this,b);}],T7,0,Bl,[],0,0,0,["X",function(b){return A7w(this,
b);}],T_,0,Bl,[],0,0,0,["X",function(b){return A5l(this,b);}],Ua,0,Bl,[],0,0,0,["X",function(b){return ASS(this,b);}],T9,0,Bl,[],0,0,0,["X",function(b){return AWC(this,b);}]]);
$rt_metadata([T$,0,Bl,[],0,0,0,["X",function(b){return AYk(this,b);}],Uc,0,Bl,[],0,0,0,["X",function(b){return A1z(this,b);}],Ud,0,Bl,[],0,0,0,["X",function(b){return A42(this,b);}],Pz,0,Bl,[],0,0,0,["X",function(b){return A_2(this,b);}],PN,0,Bl,[],0,0,0,["X",function(b){return AWH(this,b);}],Px,0,Bl,[],0,0,0,["X",function(b){return AVa(this,b);}],Py,0,Bl,[],0,0,0,["X",function(b){return A50(this,b);}],PD,0,Bl,[],0,0,0,["X",function(b){return AXn(this,b);}],Pw,0,Bl,[],0,0,0,["X",function(b){return A$t(this,
b);}],PB,0,Bl,[],0,0,0,["X",function(b){return A4o(this,b);}],PC,0,Bl,[],0,0,0,["X",function(b){return AZP(this,b);}],OY,0,IG,[],0,0,0,["eK",function(b,c,d){return AWa(this,b,c,d);},"eY",function(b,c,d,e){return A_R(this,b,c,d,e);},"lA",function(){return AU0(this);}],VQ,0,Gr,[GX],0,0,0,["ld",function(){return Lq(this);}],Ni,0,Fc,[DM],0,3,0,0,Mu,0,D,[],3,3,0,0,VJ,0,D,[Mu],4,3,0,0,Uw,0,D,[Jk],3,3,0,0,So,0,D,[Uw],3,3,0,0,Tb,0,Eo,[So],0,3,0,0,SZ,0,D,[LX],3,3,0,0,O0,0,D,[SZ],3,3,0,0,AJ6,0,FZ,[ET,De,O0],0,3,0,0,Q0,
0,D,[FC],0,0,0,0,VS,"AbstractCharClass$LazyJavaLowerCase$1",5,Bl,[],0,0,0,["X",function(b){return A1G(this,b);}],Tp,"AbstractCharClass$LazyJavaUpperCase$1",5,Bl,[],0,0,0,["X",function(b){return A4b(this,b);}],QR,"AbstractCharClass$LazyJavaWhitespace$1",5,Bl,[],0,0,0,["X",function(b){return ATH(this,b);}],QQ,"AbstractCharClass$LazyJavaMirrored$1",5,Bl,[],0,0,0,["X",function(b){return A5T(this,b);}],SI,"AbstractCharClass$LazyJavaDefined$1",5,Bl,[],0,0,0,["X",function(b){return AXc(this,b);}],Um,"AbstractCharClass$LazyJavaDigit$1",
5,Bl,[],0,0,0,["X",function(b){return A$X(this,b);}],Pn,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",5,Bl,[],0,0,0,["X",function(b){return AZm(this,b);}],Vd,"AbstractCharClass$LazyJavaISOControl$1",5,Bl,[],0,0,0,["X",function(b){return A0r(this,b);}],Tm,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",5,Bl,[],0,0,0,["X",function(b){return A_G(this,b);}],To,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",5,Bl,[],0,0,0,["X",function(b){return AVr(this,b);}],Pe,"AbstractCharClass$LazyJavaLetter$1",5,Bl,
[],0,0,0,["X",function(b){return A1T(this,b);}],UC,"AbstractCharClass$LazyJavaLetterOrDigit$1",5,Bl,[],0,0,0,["X",function(b){return A7J(this,b);}],UF,"AbstractCharClass$LazyJavaSpaceChar$1",5,Bl,[],0,0,0,["X",function(b){return A9a(this,b);}],V$,"AbstractCharClass$LazyJavaTitleCase$1",5,Bl,[],0,0,0,["X",function(b){return A$M(this,b);}],VK,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",5,Bl,[],0,0,0,["X",function(b){return A2d(this,b);}],OR,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",5,Bl,[],
0,0,0,["X",function(b){return AVi(this,b);}],MF,"UnicodeCategory",5,Bl,[],0,0,0,["X",function(b){return AZo(this,b);}],Vx,"UnicodeCategoryScope",5,MF,[],0,0,0,["X",function(b){return A9_(this,b);}],Np,0,D,[],0,3,0,0,J5,0,D,[DM],0,3,0,["ep",function(b){return A$G(this,b);},"fm",function(){return A7U(this);},"lT",function(b){return TU(this,b);}],Ql,0,D,[],3,3,0,0,OC,0,D,[Ql],0,3,0,0,SE,0,D,[Le],0,3,0,0,WE,0,D,[Mu],0,0,0,0,VY,0,D,[],0,3,0,0,Sf,0,D,[],3,3,0,0,AF$,0,Im,[Sf],0,3,0,0]);
$rt_metadata([AF4,0,D,[],0,3,0,0,N5,0,D,[],4,3,0,0,HT,0,D,[],1,3,0,0,AMZ,0,HT,[],0,3,0,0,ACX,0,D,[],0,3,0,0,PG,0,HT,[],0,3,0,0,Ui,0,D,[],0,3,0,0,VC,0,Fc,[DM],0,3,0,0,TP,0,D,[DH],4,0,0,["gw",function(){return A4C(this);}],TM,0,D,[DH],4,0,0,["gw",function(){return AYt(this);}],Rs,0,D,[DH],4,0,0,["gw",function(){return A80(this);}],Rv,0,D,[DH],4,0,0,["gw",function(){return A7m(this);}],E3,0,EX,[],12,3,0,0,Rt,0,D,[DH],4,0,0,["gw",function(){return A7t(this);}],Ru,0,D,[DH],4,0,0,["gw",function(){return A1S(this);
}],Rq,0,D,[DH],4,0,0,["gw",function(){return A53(this);}],Rr,0,D,[DH],4,0,0,["gw",function(){return A3p(this);}],Et,0,D,[],1,3,0,0,Rl,0,Et,[],0,3,0,0,RW,0,Eo,[],0,0,0,0,OA,0,D,[],0,3,0,0,RQ,0,Gr,[GX],0,0,0,0,SX,0,CT,[],0,3,0,["hT",function(){AD_(this);},"pw",function(){ANO(this);},"rF",function(){AYC(this);},"iE",function(b){AHn(this,b);},"pc",function(b,c){AC5(this,b,c);},"hN",function(b,c,d){ABA(this,b,c,d);}],IQ,0,EX,[],12,3,0,0,ML,0,D,[J$,De],0,3,0,0,Lg,0,ML,[],0,0,0,0,W1,0,D,[],0,3,0,0,ARr,0,Et,[],0,3,
0,0,Ch,0,Et,[],0,3,0,0,BR,0,Et,[],0,3,0,0,Cn,0,Et,[],0,3,0,0,SM,"EntityBubbleFX",12,C2,[],0,3,0,["eq",function(){Zf(this);}],AFu,"EntitySmokeFX",12,C2,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AKc(this,b,c,d,e,f,g,h);},"eq",function(){AL1(this);}],Q9,"EntityExplodeFX",12,C2,[],0,3,0,["kT",function(b,c,d,e,f,g,h){ASg(this,b,c,d,e,f,g,h);},"eq",function(){AEY(this);}],O_,"EntityFlameFX",12,C2,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AQP(this,b,c,d,e,f,g,h);},"vk",function(b){return ASD(this,b);},"eq",function(){AAY(this);
}],AA9,"EntityLavaFX",12,C2,[],0,3,0,["vk",function(b){return AKd(this,b);},"kT",function(b,c,d,e,f,g,h){AGY(this,b,c,d,e,f,g,h);},"eq",function(){ALq(this);}],ARJ,"EntitySplashFX",12,JW,[],0,3,0,0,AIu,0,D,[],4,3,0,0,Ia,0,D,[],0,0,0,0,Vt,0,D,[],0,3,0,0,ACj,0,D,[],0,3,0,0,Vc,"EntityPickupFX",12,C2,[],0,3,0,["kT",function(b,c,d,e,f,g,h){AMq(this,b,c,d,e,f,g,h);},"eq",function(){AAR(this);},"xA",function(){return AUF(this);}],Zb,0,D,[],0,3,0,0,HX,0,D,[],0,3,0,["ep",function(b){return A31(this,b);},"fm",function()
{return AVv(this);}],AJq,0,D,[],0,0,0,0]);
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
"Me","Mc","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","/gui/furnace.png","/gui/crafting.png","/gui/container.png","Kebab","Aztec","Alban","Aztec2","Bomb","Plant","Wasteland","Pool","Courbet","Sea","Sunset","Wanderer","Match","Bust","Stage","Void","SkullAndRoses","Fighters","Pointer","Yes","Arrow","Item","Painting","Mob","Monster","Creeper","Skeleton","Spider","Giant","Zombie","Sheep","PrimedTnt","FallingSand","Minecart","xPos",
"zPos","The chunk file \'","\' was supposed to be at [","], but the file contained a chunk from [","]. It\'s data will be moved to file \'","\', and a new empty chunk will be created for file \'","\' for [","Corrupt chunk \'","\' was found at: [","The file will be deleted","Failed to serialize chunk at [","] to byte array","LastUpdate","Blocks","SkyLight","BlockLight","HeightMap","TerrainPopulated","Light too large, skipping!","UTF Error","FILE","DIRECTORY","FALSE","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_\'*!\"#%/()=+?[]{}<>",
"Sky","Block","random.explode","OW KNOWS!"]);
B4.prototype.toString=function(){return $rt_ustr(this);};
B4.prototype.valueOf=B4.prototype.toString;D.prototype.toString=function(){return $rt_ustr(AUw(this));};
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
=$rt_mainStarter(ARa);
(function(){var c;c=YR.prototype;c.dispatchEvent=c.My;c.addEventListener=c.Yi;c.removeEventListener=c.a0l;c.getLength=c.Ve;c.get=c.So;c.addEventListener=c.TD;c.removeEventListener=c.On;c=Xe.prototype;c.handleEvent=c.gR;c=Xk.prototype;c.handleEvent=c.gR;c=Xl.prototype;c.handleEvent=c.gR;c=Xi.prototype;c.handleEvent=c.gR;c=Xj.prototype;c.handleEvent=c.gR;c=Xg.prototype;c.handleEvent=c.gR;c=Xh.prototype;c.handleEvent=c.gR;c=Xf.prototype;c.handleEvent=c.gR;c=QF.prototype;c.handleEvent=c.gR;c=QE.prototype;c.handleEvent
=c.gR;c=Xd.prototype;c.stateChanged=c.a02;c=TT.prototype;c.handleEvent=c.gw;c=TS.prototype;c.handleEvent=c.gw;c=TR.prototype;c.handleEvent=c.gw;c=TQ.prototype;c.handleEvent=c.gR;c=AA5.prototype;c.getLength=c.ZA;c.get=c.Q4;c=QI.prototype;c.handleEvent=c.gR;c=QH.prototype;c.handleEvent=c.gR;c=QG.prototype;c.onTimer=c.Gm;c=TE.prototype;c.onTimer=c.Gm;c=TL.prototype;c.handleEvent=c.gw;c=TK.prototype;c.handleEvent=c.gw;c=TP.prototype;c.handleEvent=c.gw;c=TM.prototype;c.handleEvent=c.gw;c=Rs.prototype;c.handleEvent
=c.gw;c=Rv.prototype;c.handleEvent=c.gw;c=Rt.prototype;c.handleEvent=c.gw;c=Ru.prototype;c.handleEvent=c.gw;c=Rq.prototype;c.handleEvent=c.gw;c=Rr.prototype;c.handleEvent=c.gw;})();
})();

//# sourceMappingURL=app.js.map