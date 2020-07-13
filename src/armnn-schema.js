const $root = flatbuffers.get('armnn');

$root.armnnSerializer = $root.armnnSerializer || {};

$root.armnnSerializer.ActivationFunction = {
    Sigmoid: 0,
    TanH: 1,
    Linear: 2,
    ReLu: 3,
    BoundedReLu: 4,
    SoftReLu: 5,
    LeakyReLu: 6,
    Abs: 7,
    Sqrt: 8,
    Square: 9,
    Elu: 10,
    HardSwish: 11
};

$root.armnnSerializer.ArgMinMaxFunction = {
    Min: 0,
    Max: 1
};

$root.armnnSerializer.DataType = {
    Float16: 0,
    Float32: 1,
    QuantisedAsymm8: 2,
    Signed32: 3,
    Boolean: 4,
    QuantisedSymm16: 5,
    QAsymmU8: 6,
    QSymmS16: 7,
    QAsymmS8: 8,
    QSymmS8: 9
};

$root.armnnSerializer.DataLayout = {
    NHWC: 0,
    NCHW: 1
};

$root.armnnSerializer.ResizeMethod = {
    NearestNeighbor: 0,
    Bilinear: 1
};

$root.armnnSerializer.TensorInfo = class TensorInfo {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dimensions() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get dataType() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get quantizationScale() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.float32(this._offset + offset) : 1;
    }

    get quantizationOffset() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get quantizationScales() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }

    get quantizationDim() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get dimensionality() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.uint32(this._offset + offset) : 1;
    }
};

$root.armnnSerializer.Connection = class Connection {
    // TODO
};

$root.armnnSerializer.ByteData = class ByteData {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get data() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.ShortData = class ShortData {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get data() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.IntData = class IntData {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get data() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.LongData = class LongData {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get data() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.ConstTensor = class ConstTensor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get info() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get data() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.InputSlot = class InputSlot {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get index() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get connection() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.OutputSlot = class OutputSlot {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get index() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get tensorInfo() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.LayerType = {
    Addition: 0,
    Input: 1,
    Multiplication: 2,
    Output: 3,
    Pooling2d: 4,
    Reshape: 5,
    Softmax: 6,
    Convolution2d: 7,
    DepthwiseConvolution2d: 8,
    Activation: 9,
    Permute: 10,
    FullyConnected: 11,
    Constant: 12,
    SpaceToBatchNd: 13,
    BatchToSpaceNd: 14,
    Division: 15,
    Minimum: 16,
    Equal: 17,
    Maximum: 18,
    Normalization: 19,
    Pad: 20,
    Rsqrt: 21,
    Floor: 22,
    BatchNormalization: 23,
    Greater: 24,
    ResizeBilinear: 25,
    Subtraction: 26,
    StridedSlice: 27,
    Gather: 28,
    Mean: 29,
    Merger: 30,
    L2Normalization: 31,
    Splitter: 32,
    DetectionPostProcess: 33,
    Lstm: 34,
    Quantize: 35,
    Dequantize: 36,
    Merge: 37,
    Switch: 38,
    Concat: 39,
    SpaceToDepth: 40,
    Prelu: 41,
    TransposeConvolution2d: 42,
    Resize: 43,
    Stack: 44,
    QuantizedLstm: 45,
    Abs: 46,
    ArgMinMax: 47,
    Slice: 48,
    DepthToSpace: 49,
    InstanceNormalization: 50,
    LogSoftmax: 51,
    Comparison: 52,
    StandIn: 53,
    ElementwiseUnary: 54,
    Transpose: 55,
    QLstm: 56,
    Fill: 57,
    Rank: 58
};

$root.armnnSerializer.LayerBase = class LayerBase {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get index() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get layerName() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.string(this._offset + offset) : null;
    }

    get layerType() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get inputSlots() {
        const offset = this._reader.offset(this._offset, 10);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.armnnSerializer.InputSlot(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }

    get outputSlots() {
        const offset = this._reader.offset(this._offset, 12);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.armnnSerializer.OutputSlot(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }
};

$root.armnnSerializer.BindableLayerBase = class BindableLayerBase {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get layerBindingId() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.AbsLayer = class AbsLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.ActivationLayer = class ActivationLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.ActivationDescriptor = class ActivationDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get activationFunction() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get a() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get b() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.AdditionLayer = class AdditionLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.ArgMinMaxLayer = class ArgMinMaxLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.ArgMinMaxDescriptor = class ArgMinMaxDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get argMinMaxFunction() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.ComparisonOperation = {
    Equal: 0,
    Greater: 1,
    GreaterOrEqual: 2,
    Less: 3,
    LessOrEqual: 4,
    NotEqual: 5
};

$root.armnnSerializer.ComparisonDescriptor = class ComparisonDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get operation() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.ComparisonLayer = class ComparisonLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.ConstantLayer = class ConstantLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get input() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.Convolution2dLayer = class Convolution2dLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get weights() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get biases() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.Convolution2dDescriptor = class Convolution2dDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get padLeft() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get padRight() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get padTop() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get padBottom() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get strideX() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get strideY() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get dilationX() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.uint32(this._offset + offset) : 1;
    }

    get dilationY() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.uint32(this._offset + offset) : 1;
    }

    get biasEnabled() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.int8(this._offset + offset) : 1;
    }
};

$root.armnnSerializer.DepthToSpaceLayer = class DepthToSpaceLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.DepthToSpaceDescriptor = class DepthToSpaceDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get blockSize() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.DivisionLayer = class DivisionLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.UnaryOperation = {
    Abs: 0,
    Rsqrt: 1,
    Sqrt: 2,
    Exp: 3,
    Neg: 4
};

$root.armnnSerializer.ElementwiseUnaryDescriptor = class ElementwiseUnaryDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get operation() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.ElementwiseUnaryLayer = class ElementwiseUnaryLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.EqualLayer = class EqualLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.FillLayer = class FillLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.FillDescriptor = class FillDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get value() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.FloorLayer = class FloorLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.FullyConnectedLayer = class FullyConnectedLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get weights() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get biases() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.FullyConnectedDescriptor = class FullyConnectedDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get biasEnabled() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get transposeWeightsMatrix() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }
};

$root.armnnSerializer.GatherLayer = class GatherLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.GatherDescriptor = class GatherDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.GreaterLayer = class GreaterLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.InputLayer = class InputLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.InstanceNormalizationLayer = class InstanceNormalizationLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.InstanceNormalizationDescriptor = class InstanceNormalizationDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get gamma() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get beta() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get eps() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.LogSoftmaxLayer = class LogSoftmaxLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.LogSoftmaxDescriptor = class LogSoftmaxDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get beta() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 1;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int32(this._offset + offset) : -1;
    }
};

$root.armnnSerializer.L2NormalizationLayer = class L2NormalizationLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.L2NormalizationDescriptor = class L2NormalizationDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 1;
    }

    get eps() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.float32(this._offset + offset) : 1e-12;
    }
};

$root.armnnSerializer.MinimumLayer = class MinimumLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.MaximumLayer = class MaximumLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.MultiplicationLayer = class MultiplicationLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.Pooling2dLayer = class Pooling2dLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.PoolingAlgorithm = {
    Max: 0,
    Average: 1,
    L2: 2
};

$root.armnnSerializer.OutputShapeRounding = {
    Floor: 0,
    Ceiling: 1
};

$root.armnnSerializer.PaddingMethod = {
    IgnoreValue: 0,
    Exclude: 1
};

$root.armnnSerializer.Pooling2dDescriptor = class Pooling2dDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get poolType() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get padLeft() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get padRight() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get padTop() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get padBottom() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get poolWidth() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get poolHeight() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get strideX() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get strideY() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get outputShapeRounding() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get paddingMethod() {
        const offset = this._reader.offset(this._offset, 24);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 26);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.QuantizeLayer = class QuantizeLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.SoftmaxLayer = class SoftmaxLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.SoftmaxDescriptor = class SoftmaxDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get beta() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.DepthwiseConvolution2dLayer = class DepthwiseConvolution2dLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get weights() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get biases() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.DepthwiseConvolution2dDescriptor = class DepthwiseConvolution2dDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get padLeft() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get padRight() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get padTop() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get padBottom() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get strideX() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get strideY() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get dilationX() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.uint32(this._offset + offset) : 1;
    }

    get dilationY() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.uint32(this._offset + offset) : 1;
    }

    get biasEnabled() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.int8(this._offset + offset) : 1;
    }
};

$root.armnnSerializer.OutputLayer = class OutputLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.ReshapeLayer = class ReshapeLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.ReshapeDescriptor = class ReshapeDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get targetShape() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.PermuteLayer = class PermuteLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.PermuteDescriptor = class PermuteDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dimMappings() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.SpaceToBatchNdLayer = class SpaceToBatchNdLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.SpaceToBatchNdDescriptor = class SpaceToBatchNdDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get blockShape() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get padList() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.SpaceToDepthLayer = class SpaceToDepthLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.SpaceToDepthDescriptor = class SpaceToDepthDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get blockSize() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.SubtractionLayer = class SubtractionLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.BatchToSpaceNdLayer = class BatchToSpaceNdLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.BatchToSpaceNdDescriptor = class BatchToSpaceNdDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get blockShape() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get crops() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.NormalizationAlgorithmChannel = {
    Across: 0,
    Within: 1
};

$root.armnnSerializer.NormalizationAlgorithmMethod = {
    LocalBrightness: 0,
    LocalContrast: 1
};

$root.armnnSerializer.NormalizationLayer = class NormalizationLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.NormalizationDescriptor = class NormalizationDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get normChannelType() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get normMethodType() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get normSize() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get alpha() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get beta() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get k() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int8(this._offset + offset) : 1;
    }
};

$root.armnnSerializer.MeanLayer = class MeanLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.MeanDescriptor = class MeanDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get keepDims() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }
};

$root.armnnSerializer.PadLayer = class PadLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.PadDescriptor = class PadDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get padList() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get padValue() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.RsqrtLayer = class RsqrtLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.BatchNormalizationLayer = class BatchNormalizationLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get mean() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get variance() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get beta() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }

    get gamma() {
        const offset = this._reader.offset(this._offset, 14);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.BatchNormalizationDescriptor = class BatchNormalizationDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get eps() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.ResizeBilinearLayer = class ResizeBilinearLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.ResizeBilinearDescriptor = class ResizeBilinearDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get targetWidth() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get targetHeight() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get alignCorners() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get halfPixelCenters() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }
};

$root.armnnSerializer.SliceLayer = class SliceLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.SliceDescriptor = class SliceDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get begin() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get size() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.StridedSliceLayer = class StridedSliceLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.StridedSliceDescriptor = class StridedSliceDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get begin() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get end() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get stride() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get beginMask() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get endMask() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get shrinkAxisMask() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get ellipsisMask() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get newAxisMask() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.ConcatLayer = class ConcatLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.MergerLayer = class MergerLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.UintVector = class UintVector {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get data() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.OriginsDescriptor = class OriginsDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get concatAxis() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get numViews() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get numDimensions() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get viewOrigins() {
        const offset = this._reader.offset(this._offset, 10);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.armnnSerializer.UintVector(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }
};

$root.armnnSerializer.ViewsDescriptor = class ViewsDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get origins() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get viewSizes() {
        const offset = this._reader.offset(this._offset, 6);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.armnnSerializer.UintVector(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }
};

$root.armnnSerializer.SplitterLayer = class SplitterLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.DetectionPostProcessLayer = class DetectionPostProcessLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get anchors() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.DetectionPostProcessDescriptor = class DetectionPostProcessDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get maxDetections() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get maxClassesPerDetection() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get detectionsPerClass() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get nmsScoreThreshold() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get nmsIouThreshold() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get numClasses() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get useRegularNms() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get scaleX() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get scaleY() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get scaleW() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get scaleH() {
        const offset = this._reader.offset(this._offset, 24);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.LstmInputParams = class LstmInputParams {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get inputToForgetWeights() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get inputToCellWeights() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get inputToOutputWeights() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get recurrentToForgetWeights() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get recurrentToCellWeights() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }

    get recurrentToOutputWeights() {
        const offset = this._reader.offset(this._offset, 14);
        // TODO
        return undefined;
    }

    get forgetGateBias() {
        const offset = this._reader.offset(this._offset, 16);
        // TODO
        return undefined;
    }

    get cellBias() {
        const offset = this._reader.offset(this._offset, 18);
        // TODO
        return undefined;
    }

    get outputGateBias() {
        const offset = this._reader.offset(this._offset, 20);
        // TODO
        return undefined;
    }

    get inputToInputWeights() {
        const offset = this._reader.offset(this._offset, 22);
        // TODO
        return undefined;
    }

    get recurrentToInputWeights() {
        const offset = this._reader.offset(this._offset, 24);
        // TODO
        return undefined;
    }

    get cellToInputWeights() {
        const offset = this._reader.offset(this._offset, 26);
        // TODO
        return undefined;
    }

    get inputGateBias() {
        const offset = this._reader.offset(this._offset, 28);
        // TODO
        return undefined;
    }

    get projectionWeights() {
        const offset = this._reader.offset(this._offset, 30);
        // TODO
        return undefined;
    }

    get projectionBias() {
        const offset = this._reader.offset(this._offset, 32);
        // TODO
        return undefined;
    }

    get cellToForgetWeights() {
        const offset = this._reader.offset(this._offset, 34);
        // TODO
        return undefined;
    }

    get cellToOutputWeights() {
        const offset = this._reader.offset(this._offset, 36);
        // TODO
        return undefined;
    }

    get inputLayerNormWeights() {
        const offset = this._reader.offset(this._offset, 38);
        // TODO
        return undefined;
    }

    get forgetLayerNormWeights() {
        const offset = this._reader.offset(this._offset, 40);
        // TODO
        return undefined;
    }

    get cellLayerNormWeights() {
        const offset = this._reader.offset(this._offset, 42);
        // TODO
        return undefined;
    }

    get outputLayerNormWeights() {
        const offset = this._reader.offset(this._offset, 44);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.LstmDescriptor = class LstmDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get activationFunc() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get clippingThresCell() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get clippingThresProj() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get cifgEnabled() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.bool(this._offset + offset) : true;
    }

    get peepholeEnabled() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get projectionEnabled() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get layerNormEnabled() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }
};

$root.armnnSerializer.LstmLayer = class LstmLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get inputParams() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.QLstmInputParams = class QLstmInputParams {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get inputToForgetWeights() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get inputToCellWeights() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get inputToOutputWeights() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get recurrentToForgetWeights() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get recurrentToCellWeights() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }

    get recurrentToOutputWeights() {
        const offset = this._reader.offset(this._offset, 14);
        // TODO
        return undefined;
    }

    get forgetGateBias() {
        const offset = this._reader.offset(this._offset, 16);
        // TODO
        return undefined;
    }

    get cellBias() {
        const offset = this._reader.offset(this._offset, 18);
        // TODO
        return undefined;
    }

    get outputGateBias() {
        const offset = this._reader.offset(this._offset, 20);
        // TODO
        return undefined;
    }

    get inputToInputWeights() {
        const offset = this._reader.offset(this._offset, 22);
        // TODO
        return undefined;
    }

    get recurrentToInputWeights() {
        const offset = this._reader.offset(this._offset, 24);
        // TODO
        return undefined;
    }

    get inputGateBias() {
        const offset = this._reader.offset(this._offset, 26);
        // TODO
        return undefined;
    }

    get projectionWeights() {
        const offset = this._reader.offset(this._offset, 28);
        // TODO
        return undefined;
    }

    get projectionBias() {
        const offset = this._reader.offset(this._offset, 30);
        // TODO
        return undefined;
    }

    get cellToInputWeights() {
        const offset = this._reader.offset(this._offset, 32);
        // TODO
        return undefined;
    }

    get cellToForgetWeights() {
        const offset = this._reader.offset(this._offset, 34);
        // TODO
        return undefined;
    }

    get cellToOutputWeights() {
        const offset = this._reader.offset(this._offset, 36);
        // TODO
        return undefined;
    }

    get inputLayerNormWeights() {
        const offset = this._reader.offset(this._offset, 38);
        // TODO
        return undefined;
    }

    get forgetLayerNormWeights() {
        const offset = this._reader.offset(this._offset, 40);
        // TODO
        return undefined;
    }

    get cellLayerNormWeights() {
        const offset = this._reader.offset(this._offset, 42);
        // TODO
        return undefined;
    }

    get outputLayerNormWeights() {
        const offset = this._reader.offset(this._offset, 44);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.QLstmDescriptor = class QLstmDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get cifgEnabled() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.bool(this._offset + offset) : true;
    }

    get peepholeEnabled() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get projectionEnabled() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get layerNormEnabled() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get cellClip() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get projectionClip() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get inputIntermediateScale() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get forgetIntermediateScale() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get cellIntermediateScale() {
        const offset = this._reader.offset(this._offset, 20);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get outputIntermediateScale() {
        const offset = this._reader.offset(this._offset, 22);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }

    get hiddenStateZeroPoint() {
        const offset = this._reader.offset(this._offset, 24);
        return offset ? this._reader.int32(this._offset + offset) : 0;
    }

    get hiddenStateScale() {
        const offset = this._reader.offset(this._offset, 26);
        return offset ? this._reader.float32(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.QLstmLayer = class QLstmLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get inputParams() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.QuantizedLstmInputParams = class QuantizedLstmInputParams {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get inputToInputWeights() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get inputToForgetWeights() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get inputToCellWeights() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get inputToOutputWeights() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }

    get recurrentToInputWeights() {
        const offset = this._reader.offset(this._offset, 12);
        // TODO
        return undefined;
    }

    get recurrentToForgetWeights() {
        const offset = this._reader.offset(this._offset, 14);
        // TODO
        return undefined;
    }

    get recurrentToCellWeights() {
        const offset = this._reader.offset(this._offset, 16);
        // TODO
        return undefined;
    }

    get recurrentToOutputWeights() {
        const offset = this._reader.offset(this._offset, 18);
        // TODO
        return undefined;
    }

    get inputGateBias() {
        const offset = this._reader.offset(this._offset, 20);
        // TODO
        return undefined;
    }

    get forgetGateBias() {
        const offset = this._reader.offset(this._offset, 22);
        // TODO
        return undefined;
    }

    get cellBias() {
        const offset = this._reader.offset(this._offset, 24);
        // TODO
        return undefined;
    }

    get outputGateBias() {
        const offset = this._reader.offset(this._offset, 26);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.QuantizedLstmLayer = class QuantizedLstmLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get inputParams() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.DequantizeLayer = class DequantizeLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.MergeLayer = class MergeLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.SwitchLayer = class SwitchLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.PreluLayer = class PreluLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.TransposeConvolution2dLayer = class TransposeConvolution2dLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get weights() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get biases() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.TransposeConvolution2dDescriptor = class TransposeConvolution2dDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get padLeft() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get padRight() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get padTop() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get padBottom() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get strideX() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get strideY() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get biasEnabled() {
        const offset = this._reader.offset(this._offset, 16);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 18);
        return offset ? this._reader.int8(this._offset + offset) : 1;
    }
};

$root.armnnSerializer.TransposeLayer = class TransposeLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.TransposeDescriptor = class TransposeDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get dimMappings() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.ResizeLayer = class ResizeLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.ResizeDescriptor = class ResizeDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get targetHeight() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get targetWidth() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get method() {
        const offset = this._reader.offset(this._offset, 8);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get dataLayout() {
        const offset = this._reader.offset(this._offset, 10);
        return offset ? this._reader.int8(this._offset + offset) : 0;
    }

    get alignCorners() {
        const offset = this._reader.offset(this._offset, 12);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }

    get halfPixelCenters() {
        const offset = this._reader.offset(this._offset, 14);
        return offset ? this._reader.bool(this._offset + offset) : false;
    }
};

$root.armnnSerializer.StackLayer = class StackLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.StackDescriptor = class StackDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get axis() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get numInputs() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get inputShape() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.StandInDescriptor = class StandInDescriptor {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get numInputs() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }

    get numOutputs() {
        const offset = this._reader.offset(this._offset, 6);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.StandInLayer = class StandInLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }

    get descriptor() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.RankLayer = class RankLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get base() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.AnyLayer = class AnyLayer {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get layer() {
        const offset = this._reader.offset(this._offset, 4);
        // TODO
        return undefined;
    }
};

$root.armnnSerializer.FeatureCompatibilityVersions = class FeatureCompatibilityVersions {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    get bindingIdsScheme() {
        const offset = this._reader.offset(this._offset, 4);
        return offset ? this._reader.uint32(this._offset + offset) : 0;
    }
};

$root.armnnSerializer.SerializedGraph = class SerializedGraph {

    constructor(reader, offset) {
        this._reader = reader;
        this._offset = offset;
    }

    static create(reader) {
        return new $root.armnnSerializer.SerializedGraph(reader, reader.int32(reader.position) + reader.position);
    }

    static identifier(reader) {
        return reader.identifier('ARMN');
    }

    get layers() {
        const offset = this._reader.offset(this._offset, 4);
        const length = offset ? this._reader.length(this._offset + offset) : 0;
        const vector = [];
        for (let i = 0; i < length; i++) {
            vector.push(new $root.armnnSerializer.AnyLayer(this._reader, this._reader.indirect(this._reader.vector(this._offset + offset) + i * 4)));
        }
        return vector;
    }

    get inputIds() {
        const offset = this._reader.offset(this._offset, 6);
        // TODO
        return undefined;
    }

    get outputIds() {
        const offset = this._reader.offset(this._offset, 8);
        // TODO
        return undefined;
    }

    get featureVersions() {
        const offset = this._reader.offset(this._offset, 10);
        // TODO
        return undefined;
    }
};
