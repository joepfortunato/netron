const $root = flatbuffers.get('mnn');

$root.MNN = $root.MNN || {};

$root.MNN.OpType = {
    AbsVal: 0,
    QuantizedAdd: 1,
    ArgMax: 2,
    AsString: 3,
    InstanceNorm: 4,
    BatchToSpaceND: 5,
    Bias: 6,
    BinaryOp: 7,
    Bnll: 8,
    Cast: 9,
    Concat: 10,
    Const: 11,
    Convolution: 12,
    ConvolutionDepthwise: 13,
    Crop: 14,
    CropAndResize: 15,
    Cubic: 16,
    Deconvolution: 17,
    DeconvolutionDepthwise: 18,
    Dequantize: 19,
    DetectionOutput: 20,
    Dropout: 21,
    Eltwise: 22,
    ELU: 23,
    Embed: 24,
    Exp: 25,
    ExpandDims: 26,
    Fill: 27,
    Flatten: 28,
    FloorMod: 29,
    Gather: 30,
    GatherV2: 31,
    Im2Seq: 32,
    InnerProduct: 33,
    Input: 34,
    Interp: 35,
    Log: 36,
    LRN: 37,
    LSTM: 38,
    MatMul: 39,
    MVN: 40,
    NonMaxSuppression: 41,
    NonMaxSuppressionV2: 42,
    Normalize: 43,
    Pack: 44,
    Padding: 45,
    Permute: 46,
    Pooling: 47,
    Power: 48,
    PReLU: 49,
    PriorBox: 50,
    Proposal: 51,
    QuantizedAvgPool: 52,
    QuantizedBiasAdd: 53,
    QuantizedConcat: 54,
    QuantizedDepthwiseConv2D: 55,
    QuantizedLogistic: 56,
    QuantizedMatMul: 57,
    QuantizedMaxPool: 58,
    QuantizedRelu: 59,
    QuantizedRelu6: 60,
    QuantizedReshape: 61,
    QuantizedSoftmax: 62,
    QuantizeMaxMin: 63,
    QuantizeV2: 64,
    Range: 65,
    Rank: 66,
    ReduceJoin: 67,
    Reduction: 68,
    ReLU: 69,
    ReLU6: 70,
    RequantizationRange: 71,
    Requantize: 72,
    Reshape: 73,
    Resize: 74,
    RNN: 75,
    ROIPooling: 76,
    Scale: 77,
    Selu: 78,
    Seq2Out: 79,
    Shape: 80,
    Sigmoid: 81,
    Size: 82,
    Slice: 83,
    SliceTf: 84,
    Softmax: 85,
    SpaceToBatchND: 86,
    SpatialProduct: 87,
    Split: 88,
    SPP: 89,
    Squeeze: 90,
    StridedSlice: 91,
    StringJoin: 92,
    StringSplit: 93,
    StringToNumber: 94,
    TanH: 95,
    TfQuantizedConv2D: 96,
    Threshold: 97,
    Tile: 98,
    TopKV2: 99,
    Transpose: 100,
    UnaryOp: 101,
    Unpack: 102,
    Where: 103,
    Moments: 104,
    RNNSequenceGRU: 105,
    BatchMatMul: 106,
    Unsqueeze: 107,
    CosineSimilarity: 108,
    DepthToSpace: 109,
    SpaceToDepth: 110,
    ReverseSequence: 111,
    Pooling3D: 112,
    Convolution3D: 113,
    MatrixBandPart: 114,
    GatherND: 115,
    DetectionPostProcess: 116,
    UnravelIndex: 117,
    ScatterNd: 118,
    OneHot: 119,
    BroadcastTo: 120,
    Dilation2D: 121,
    MaxLayerCount: 128,
    ConvertTensor: 129,
    ArgMin: 130,
    LinSpace: 131,
    Plugin: 256,
    Select: 257,
    ZerosLike: 258,
    Broastcast: 259,
    SetDiff1D: 260,
    ReluGrad: 261,
    Relu6Grad: 262,
    PoolGrad: 263,
    SoftmaxGrad: 264,
    Conv2DBackPropFilter: 265,
    TrainableParam: 266,
    BatchNorm: 267,
    ZeroGrad: 268,
    Extra: 512,
    ConvInt8: 513,
    Int8ToFloat: 514,
    DepthwiseConvInt8: 515,
    PoolInt8: 516,
    FloatToInt8: 517,
    EltwiseInt8: 518
};

$root.MNN.Plugin = class Plugin {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.string(this._offset + offset) : null;
    }

    get attr() {
        const offset = this._reader.offset(this._offset, 6);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.MNN.Attribute(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }
};

$root.MNN.Extra = class Extra {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.string(this._offset + offset) : null;
    }

    get engine() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.string(this._offset + offset) : null;
    }

    get info() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get attr() {
        const offset = this._reader.offset(this._offset, 10);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.MNN.Attribute(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }
};

$root.MNN.Op = class Op {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get inputIndexes() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get main() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get name() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.string(this._offset + offset) : null;
    }

    get outputIndexes() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get defaultDimentionFormat() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int8(this._offset + offset) : undefined;
    }
};

$root.MNN.TensorDescribe = class TensorDescribe {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get blob() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get index() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get name() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.string(this._offset + offset) : null;
    }
};

$root.MNN.ForwardType = {
    CPU: 0,
    METAL: 1,
    OPENCL: 2,
    OPENGLES: 3,
    VULKAN: 4
};

$root.MNN.Usage = {
    INFERENCE: 0,
    TRAIN: 1
};

$root.MNN.Net = class Net {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    static create(reader) {
        return new $root.MNN.Net(reader, reader.int32(reader.position) + reader.position);
    }

    get bizCode() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.string(this._offset + offset) : null;
    }

    get extraTensorDescribe() {
        const offset = this._reader.offset(this._offset, 6);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.MNN.TensorDescribe(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }

    get gpulibrary() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get oplists() {
        const offset = this._reader.offset(this._offset, 10);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.MNN.Op(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }

    get outputName() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }

    get preferForwardType() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get sourceType() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get tensorName() {
        const offset = this._reader.offset(this._offset, 18);
        // TODO
        return undefined;
    }

    get tensorNumber() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get usage() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.MNN.PadMode = {
    CAFFE: 0,
    VALID: 1,
    SAME: 2
};

$root.MNN.Convolution2DCommon = class Convolution2DCommon {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get padX() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get padY() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get kernelX() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }

    get kernelY() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }

    get strideX() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }

    get strideY() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }

    get dilateX() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }

    get dilateY() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }

    get padMode() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get group() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }

    get outputCount() {
        const offset = this._reader.offset(this._offset, 24);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get inputCount() {
        const offset = this._reader.offset(this._offset, 26);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get relu() {
        const offset = this._reader.offset(this._offset, 28);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get relu6() {
        const offset = this._reader.offset(this._offset, 30);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get pads() {
        const offset = this._reader.offset(this._offset, 32);
        // TODO
        return undefined;
    }
};

$root.MNN.Convolution3DCommon = class Convolution3DCommon {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dilates() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get strides() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get kernels() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get pads() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get padMode() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get inputCount() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get outputCount() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get relu() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get relu6() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }
};

$root.MNN.IDSTQuan = class IDSTQuan {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get buffer() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get alpha() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get useInt32() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get quantScale() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get scaleIn() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get scaleOut() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get aMax() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get aMin() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get readType() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get has_scaleInt() {
        const offset = this._reader.offset(this._offset, 24);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }
};

$root.MNN.QuantizeAlgo = {
    DEFAULT: 0,
    OVERFLOW_AWARE: 1
};

$root.MNN.QuantizedFloatParam = class QuantizedFloatParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get weight() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get bias() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get scale() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get tensorScale() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get method() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.MNN.Convolution2D = class Convolution2D {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get common() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get weight() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get bias() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get quanParameter() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get symmetricQuan() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }
};

$root.MNN.Convolution3D = class Convolution3D {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get common() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get weight() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get bias() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }
};

$root.MNN.InnerProduct = class InnerProduct {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get outputCount() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get biasTerm() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get weightSize() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get weight() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get bias() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get transpose() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get quanParameter() {
        const offset = this._reader.offset(this._offset, 18);
        // TODO
        return undefined;
    }
};

$root.MNN.PoolType = {
    MAXPOOL: 0,
    AVEPOOL: 1
};

$root.MNN.PoolPadType = {
    CAFFE: 0,
    VALID: 1,
    SAME: 2
};

$root.MNN.Pool = class Pool {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get padX() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get padY() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get isGlobal() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get kernelX() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get kernelY() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get strideX() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get strideY() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get padType() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get dataType() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }

    get ceilModel() {
        const offset = this._reader.offset(this._offset, 24);
        return offset ? this._reader.bool(this._offset + offset) : true;
    }

    get pads() {
        const offset = this._reader.offset(this._offset, 26);
        // TODO
        return undefined;
    }
};

$root.MNN.Pool3D = class Pool3D {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get strides() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get kernels() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get pads() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get padType() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.MNN.Relu = class Relu {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get slope() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.MNN.Relu6 = class Relu6 {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get minValue() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get maxValue() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.float32(this._offset + offset) : 6;
    }
};

$root.MNN.PRelu = class PRelu {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get slopeCount() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get slope() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.MNN.ELU = class ELU {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get alpha() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.MNN.LRN = class LRN {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get regionType() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get localSize() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get alpha() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get beta() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.MNN.ArgMax = class ArgMax {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get outMaxVal() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get topK() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get softmaxThreshold() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.Axis = class Axis {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.Input = class Input {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dims() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get dtype() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }

    get dformat() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int8(this._offset + offset) : undefined;
    }
};

$root.MNN.LSTM = class LSTM {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get outputCount() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get weightSize() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get clippingThreshold() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get weightI() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get weightH() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }

    get bias() {
        const offset = this._reader.offset(this._offset, 14);
        // TODO
        return undefined;
    }

    get weightIQ() {
        const offset = this._reader.offset(this._offset, 16);
        // TODO
        return undefined;
    }

    get weightIA() {
        const offset = this._reader.offset(this._offset, 18);
        // TODO
        return undefined;
    }

    get quantScale() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.MNN.Slice = class Slice {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get slicePoints() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get sourceType() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.MNN.BatchNorm = class BatchNorm {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get channels() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get slopeData() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get meanData() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get varData() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get biasData() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }

    get Adata() {
        const offset = this._reader.offset(this._offset, 14);
        // TODO
        return undefined;
    }

    get Bdata() {
        const offset = this._reader.offset(this._offset, 16);
        // TODO
        return undefined;
    }

    get epsilon() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.float32(this._offset + offset) : 0.001;
    }
};

$root.MNN.Scale = class Scale {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get channels() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get scaleData() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get biasData() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }
};

$root.MNN.EltwiseType = {
    PROD: 0,
    SUM: 1,
    MAXIMUM: 2,
    SUB: 3
};

$root.MNN.Eltwise = class Eltwise {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get coeff() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.MNN.Flatten = class Flatten {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get endAxis() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.Permute = class Permute {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dims() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.MNN.Reshape = class Reshape {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dims() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get dimType() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : undefined;
    }
};

$root.MNN.DetectionOutput = class DetectionOutput {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get classCount() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get nmsThresholdold() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get nmsTopK() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get keepTopK() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get confidenceThreshold() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get shareLocation() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get backgroundLable() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get varianceEncodedTarget() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get codeType() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get objectnessScore() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.float32(this._offset + offset) : 0.01;
    }
};

$root.MNN.RoiPooling = class RoiPooling {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get pooledWidth() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get pooledHeight() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get spatialScale() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.MNN.Proposal = class Proposal {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get featStride() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get baseSize() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get preNmsTopN() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get afterNmsTopN() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get nmsThreshold() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get minSize() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get ratios() {
        const offset = this._reader.offset(this._offset, 16);
        // TODO
        return undefined;
    }

    get scales() {
        const offset = this._reader.offset(this._offset, 18);
        // TODO
        return undefined;
    }

    get anchors() {
        const offset = this._reader.offset(this._offset, 20);
        // TODO
        return undefined;
    }
};

$root.MNN.Interp = class Interp {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get widthScale() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get heightScale() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get outputWidth() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get outputHeight() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get resizeType() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get alignCorners() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get halfPixelCenters() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }
};

$root.MNN.Resize = class Resize {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get xScale() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get yScale() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.MNN.PriorBox = class PriorBox {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get minSizes() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get maxSizes() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get aspectRatios() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get variances() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get flip() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get clip() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get imageWidth() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get imageHeight() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get stepWidth() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get stepHeight() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get offset() {
        const offset = this._reader.offset(this._offset, 24);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.MNN.Normalize = class Normalize {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get acrossSpatial() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get channelShared() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get eps() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get scale() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }
};

$root.MNN.EltwiseInt8 = class EltwiseInt8 {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get inputQuan0() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get inputQuan1() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get outputQuan() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }
};

$root.MNN.MNN_DATA_FORMAT = {
    NCHW: 0,
    NHWC: 1,
    NC4HW4: 2,
    NHWC4: 3,
    UNKNOWN: 4
};

$root.MNN.Blob = class Blob {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dims() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get dataFormat() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get dataType() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }

    get uint8s() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get int8s() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }

    get int32s() {
        const offset = this._reader.offset(this._offset, 14);
        // TODO
        return undefined;
    }

    get int64s() {
        const offset = this._reader.offset(this._offset, 16);
        // TODO
        return undefined;
    }

    get float32s() {
        const offset = this._reader.offset(this._offset, 18);
        // TODO
        return undefined;
    }

    get strings() {
        const offset = this._reader.offset(this._offset, 20);
        // TODO
        return undefined;
    }
};

$root.MNN.ListValue = class ListValue {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get s() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get i() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get f() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get b() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 12);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.MNN.DataType(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }
};

$root.MNN.Attribute = class Attribute {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get s() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.string(this._offset + offset) : null;
    }

    get i() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get b() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get key() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.string(this._offset + offset) : null;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int32(this._offset + offset) : undefined;
    }

    get f() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get tensor() {
        const offset = this._reader.offset(this._offset, 16);
        // TODO
        return undefined;
    }

    get list() {
        const offset = this._reader.offset(this._offset, 18);
        // TODO
        return undefined;
    }
};

$root.MNN.NetSource = {
    CAFFE: 0,
    TENSORFLOW: 1,
    TFLITE: 2,
    ONNX: 3
};

$root.MNN.DataType = {
    DT_INVALID: 0,
    DT_FLOAT: 1,
    DT_DOUBLE: 2,
    DT_INT32: 3,
    DT_UINT8: 4,
    DT_INT16: 5,
    DT_INT8: 6,
    DT_STRING: 7,
    DT_COMPLEX64: 8,
    DT_INT64: 9,
    DT_BOOL: 10,
    DT_QINT8: 11,
    DT_QUINT8: 12,
    DT_QINT32: 13,
    DT_BFLOAT16: 14,
    DT_QINT16: 15,
    DT_QUINT16: 16,
    DT_UINT16: 17,
    DT_COMPLEX128: 18,
    DT_HALF: 19,
    DT_RESOURCE: 20,
    DT_VARIANT: 21
};

$root.MNN.BinaryOpOperation = {
    ADD: 0,
    SUB: 1,
    MUL: 2,
    DIV: 3,
    MAX_TEMP: 4,
    MIN_TEMP: 5,
    POW: 6,
    REALDIV: 7,
    MINIMUM: 8,
    MAXIMUM: 9,
    GREATER: 10,
    GREATER_EQUAL: 11,
    LESS: 12,
    FLOORDIV: 13,
    SquaredDifference: 14,
    EQUAL: 15,
    LESS_EQUAL: 16,
    FLOORMOD: 17,
    MOD: 19,
    ATAN2: 20,
    LOGICALOR: 21,
    NOTEQUAL: 22
};

$root.MNN.BinaryOp = class BinaryOp {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get opType() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get T() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }
};

$root.MNN.PackParam = class PackParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dataType() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.StridedSliceParam = class StridedSliceParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get Index() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get T() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get beginMask() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get endMask() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get ellipsisMask() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get newAxisMask() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get shrinkAxisMask() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.SqueezeParam = class SqueezeParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get squeezeDims() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.MNN.CastParam = class CastParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get srcT() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get dstT() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.ReductionType = {
    SUM: 0,
    ASUM: 1,
    SUMSQ: 2,
    MEAN: 3,
    MAXIMUM: 4,
    MINIMUM: 5,
    PROD: 6,
    ANY: 7,
    ALL: 8
};

$root.MNN.ReductionParam = class ReductionParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get operation() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get dim() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get coeff() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get keepDims() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get dType() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }
};

$root.MNN.Gather = class Gather {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get Tindices() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get Tparams() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get validateIndices() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.ExpandDims = class ExpandDims {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get T() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get Tdim() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.Selu = class Selu {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get scale() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get alpha() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.MNN.AsString = class AsString {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get T() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get precision() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get scientific() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get shortest() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get width() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get fillString() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.string(this._offset + offset) : null;
    }
};

$root.MNN.ReduceJoin = class ReduceJoin {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get keepDims() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get separator() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.string(this._offset + offset) : null;
    }
};

$root.MNN.UnaryOpOperation = {
    ABS: 0,
    NEG: 1,
    FLOOR: 2,
    CEIL: 3,
    SQUARE: 4,
    SQRT: 5,
    RSQRT: 6,
    EXP: 7,
    LOG: 8,
    SIN: 9,
    COS: 10,
    TAN: 11,
    ASIN: 12,
    ACOS: 13,
    ATAN: 14,
    RECIPROCAL: 15,
    LOG1P: 16,
    BNLL: 17,
    ACOSH: 18,
    SINH: 19,
    ASINH: 20,
    ATANH: 21,
    SIGN: 22,
    ROUND: 23,
    COSH: 24,
    ERF: 25,
    ERFC: 26,
    ERFINV: 27,
    EXPM1: 28
};

$root.MNN.UnaryOp = class UnaryOp {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get opType() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get T() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.TopKV2 = class TopKV2 {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get T() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }

    get sorted() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }
};

$root.MNN.CropAndResizeMethod = {
    BILINEAR: 0,
    NEAREST: 1
};

$root.MNN.CropAndResize = class CropAndResize {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get extrapolationValue() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get method() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.MNN.Fill = class Fill {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }
};

$root.MNN.GatherV2 = class GatherV2 {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get Taxis() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get Tindices() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get Tparams() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.NonMaxSuppressionV2 = class NonMaxSuppressionV2 {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }
};

$root.MNN.Range = class Range {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get Tidx() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.Rank = class Rank {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }
};

$root.MNN.Size = class Size {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get outputDataType() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.Transpose = class Transpose {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get Tperm() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.SliceTf = class SliceTf {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get T() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.QuantizeMaxMin = class QuantizeMaxMin {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get T() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.Crop = class Crop {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 2;
    }

    get offset() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.MNN.SpaceBatch = class SpaceBatch {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get blockShape() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get padding() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.MNN.MatMul = class MatMul {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get T() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get transposeA() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get transposeB() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get weight() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get bias() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }
};

$root.MNN.MomentsParam = class MomentsParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dim() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get keepDims() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.bool(this._offset + offset) : true;
    }

    get dType() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }
};

$root.MNN.RNNParam = class RNNParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get numUnits() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get isBidirectionalRNN() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get keepAllOutputs() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get fwGateWeight() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get fwGateBias() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }

    get fwCandidateWeight() {
        const offset = this._reader.offset(this._offset, 14);
        // TODO
        return undefined;
    }

    get fwCandidateBias() {
        const offset = this._reader.offset(this._offset, 16);
        // TODO
        return undefined;
    }

    get bwGateWeight() {
        const offset = this._reader.offset(this._offset, 18);
        // TODO
        return undefined;
    }

    get bwGateBias() {
        const offset = this._reader.offset(this._offset, 20);
        // TODO
        return undefined;
    }

    get bwCandidateWeight() {
        const offset = this._reader.offset(this._offset, 22);
        // TODO
        return undefined;
    }

    get bwCandidateBias() {
        const offset = this._reader.offset(this._offset, 24);
        // TODO
        return undefined;
    }
};

$root.MNN.BatchMatMulParam = class BatchMatMulParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get adjX() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get adjY() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }
};

$root.MNN.DepthSpaceParam = class DepthSpaceParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get blockSize() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.ReverseSequenceParam = class ReverseSequenceParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get batchDim() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get seqDim() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.DetectionPostProcessParam = class DetectionPostProcessParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get maxDetections() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get maxClassesPerDetection() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get detectionsPerClass() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get nmsScoreThreshold() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get iouThreshold() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get numClasses() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get useRegularNMS() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get centerSizeEncoding() {
        const offset = this._reader.offset(this._offset, 18);
        // TODO
        return undefined;
    }
};

$root.MNN.OneHotParam = class OneHotParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dType() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 1;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : -1;
    }
};

$root.MNN.PadValueMode = {
    CONSTANT: 0,
    REFLECT: 1,
    SYMMETRIC: 2
};

$root.MNN.PadParam = class PadParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get mode() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.MNN.FusedActivation = {
    kTfLiteActNone: 0,
    kTfLiteActRelu: 1,
    kTfLiteActRelu1: 2,
    kTfLiteActRelu6: 3,
    kTfLiteActTanh: 4,
    kTfLiteActSignBit: 5,
    kTfLiteActSigmoid: 6
};

$root.MNN.QuantizedParam = class QuantizedParam {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get zeroPoint() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get scale() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.MNN.QuantizedAdd = class QuantizedAdd {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get activationType() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get input1QuantizedParam() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get input2QuantizedParam() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get outputQuantizedParam() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }
};

$root.MNN.ModeFormat = {
    TENSORFLOW: 0,
    TFLITE: 1
};

$root.MNN.QuantizeMode = {
    MIN_COMBINED: 0,
    MIN_FIRST: 1,
    SCALED: 2
};

$root.MNN.Dequantize = class Dequantize {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get inputQuantizedParam() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get mode() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get modelFormat() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.QuantizedAvgPool = class QuantizedAvgPool {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get kernelX() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get kernelY() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get modelFormat() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get outputActivationMax() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get outputActivationMin() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get padType() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get padX() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get padY() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get strideX() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get strideY() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 24);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.QuantizedBiasAdd = class QuantizedBiasAdd {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get bias() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get inputType() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get max() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get min() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get outputType() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.QuantizedConcat = class QuantizedConcat {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get activationType() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get inputScale() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get inputZeroPoint() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get outputQuantizedParam() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }
};

$root.MNN.QuantizedLogistic = class QuantizedLogistic {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get inputQuantizedParam() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get outputQuantizedParam() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.MNN.QuantizedMatMul = class QuantizedMatMul {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get transposeA() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get transposeB() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }
};

$root.MNN.QuantizedMaxPool = class QuantizedMaxPool {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get kernelX() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get kernelY() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get modelFormat() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get outputActivationMax() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get outputActivationMin() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get padType() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get padX() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get padY() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get strideX() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get strideY() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 24);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.QuantizedRelu = class QuantizedRelu {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.QuantizedRelu6 = class QuantizedRelu6 {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.MNN.QuantizedReshape = class QuantizedReshape {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dims() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get modelFormat() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.MNN.QuantizedSoftmax = class QuantizedSoftmax {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get beta() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get inputScale() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.MNN.QuantizeRoundMode = {
    HALF_AWAY_FROM_ZERO: 0,
    HALF_TO_EVEN: 1
};

$root.MNN.QuantizeV2 = class QuantizeV2 {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get type() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get mode() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get roundMode() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.MNN.RequantizationRange = class RequantizationRange {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }
};

$root.MNN.Requantize = class Requantize {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }
};

$root.MNN.TfQuantizedConv2D = class TfQuantizedConv2D {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get bias() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get biasflag() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get common() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get weight() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get activationType() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get multiplier() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get outMax() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get outMin() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get shift() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get biasQuantizedParam() {
        const offset = this._reader.offset(this._offset, 22);
        // TODO
        return undefined;
    }

    get depthMultiplier() {
        const offset = this._reader.offset(this._offset, 24);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get filterQuantizedParam() {
        const offset = this._reader.offset(this._offset, 26);
        // TODO
        return undefined;
    }

    get inputQuantizedParam() {
        const offset = this._reader.offset(this._offset, 28);
        // TODO
        return undefined;
    }

    get modelFormat() {
        const offset = this._reader.offset(this._offset, 30);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get outputQuantizedParam() {
        const offset = this._reader.offset(this._offset, 32);
        // TODO
        return undefined;
    }
};

$root.MNN.STORAGE_TYPE = {
    BUFFER: 0,
    UNIFORM: 1,
    IMAGE: 2
};

$root.MNN.ACCESS_TYPE = {
    READ_ONLY: 0,
    WRITE_ONLY: 1,
    READ_WRITE: 2
};

$root.MNN.GpuBuffer = class GpuBuffer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get access() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get storage() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get content() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }
};

$root.MNN.GpuPipeline = class GpuPipeline {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get localSize() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get key() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.string(this._offset + offset) : null;
    }

    get metal() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get vulkan() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get openglComputeShader() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.string(this._offset + offset) : null;
    }

    get openclKernel() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.string(this._offset + offset) : null;
    }
};

$root.MNN.GpuStage = class GpuStage {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get pipeline() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.string(this._offset + offset) : null;
    }

    get groupSize() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get inputIndexes() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get outputIndexes() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get middleBuffer() {
        const offset = this._reader.offset(this._offset, 12);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.MNN.GpuBuffer(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }

    get constBuffer() {
        const offset = this._reader.offset(this._offset, 14);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.MNN.GpuBuffer(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }

    get globalSizeIndex() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get globalSizeDivide() {
        const offset = this._reader.offset(this._offset, 18);
        // TODO
        return undefined;
    }

    get requireSize() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }
};

$root.MNN.GpuFunction = class GpuFunction {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get stags() {
        const offset = this._reader.offset(this._offset, 4);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.MNN.GpuStage(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }

    get name() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.string(this._offset + offset) : null;
    }
};

$root.MNN.GpuLibrary = class GpuLibrary {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get functions() {
        const offset = this._reader.offset(this._offset, 4);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.MNN.GpuFunction(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }

    get pipeline() {
        const offset = this._reader.offset(this._offset, 6);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.MNN.GpuPipeline(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }

    get name() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.string(this._offset + offset) : null;
    }
};

$root.MNN.TensorConvertInfo = class TensorConvertInfo {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get source() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get dest() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};
