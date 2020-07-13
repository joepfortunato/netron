const $root = flatbuffers.get('tflite');

$root.tflite = $root.tflite || {};

$root.tflite.TensorType = {
    FLOAT32: 0,
    FLOAT16: 1,
    INT32: 2,
    UINT8: 3,
    INT64: 4,
    STRING: 5,
    BOOL: 6,
    INT16: 7,
    COMPLEX64: 8,
    INT8: 9,
    FLOAT64: 10,
    COMPLEX128: 11
};

$root.tflite.CustomQuantization = class CustomQuantization {

    static decode(reader, position) {
        const $ = new $root.tflite.CustomQuantization();
        $.custom = reader.array(position, 4, Uint8Array);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.CustomQuantization();
        $.custom = json.custom;
        return $;
    }
};

$root.tflite.QuantizationDetails = class {

    static decode(reader, position, type) {
        switch (type) {
            case 1: return $root.tflite.CustomQuantization.decode(reader, position);
        }
        return undefined;
    }

    static decodeText(json, type) {
        switch (type) {
            case 'CustomQuantization': return $root.tflite.CustomQuantization.decodeText(json);
        }
        return undefined;
    }
};

$root.tflite.QuantizationParameters = class QuantizationParameters {

    static decode(reader, position) {
        const $ = new $root.tflite.QuantizationParameters();
        $.min = reader.array(position, 4, Float32Array);
        $.max = reader.array(position, 6, Float32Array);
        $.scale = reader.array(position, 8, Float32Array);
        // TODO [int64]
        $.zero_point= undefined;
        $.details = reader.union_(position, 12, $root.tflite.QuantizationDetails.decode);
        $.quantized_dimension = reader.int32_(position, 16, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.QuantizationParameters();
        $.min = json.min;
        $.max = json.max;
        $.scale = json.scale;
        $.zero_point = json.zero_point;
        $.details = $root.tflite.QuantizationDetails.decodeText(json.details, json.details_type);
        $.quantized_dimension = json.quantized_dimension;
        return $;
    }
};

$root.tflite.DimensionType = {
    DENSE: 0,
    SPARSE_CSR: 1
};

$root.tflite.Int32Vector = class Int32Vector {

    static decode(reader, position) {
        const $ = new $root.tflite.Int32Vector();
        $.values = reader.array(position, 4, Int32Array);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.Int32Vector();
        $.values = json.values;
        return $;
    }
};

$root.tflite.Uint16Vector = class Uint16Vector {

    static decode(reader, position) {
        const $ = new $root.tflite.Uint16Vector();
        $.values = reader.array(position, 4, Uint16Array);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.Uint16Vector();
        $.values = json.values;
        return $;
    }
};

$root.tflite.Uint8Vector = class Uint8Vector {

    static decode(reader, position) {
        const $ = new $root.tflite.Uint8Vector();
        $.values = reader.array(position, 4, Uint8Array);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.Uint8Vector();
        $.values = json.values;
        return $;
    }
};

$root.tflite.SparseIndexVector = class {

    static decode(reader, position, type) {
        switch (type) {
            case 1: return $root.tflite.Int32Vector.decode(reader, position);
            case 2: return $root.tflite.Uint16Vector.decode(reader, position);
            case 3: return $root.tflite.Uint8Vector.decode(reader, position);
        }
        return undefined;
    }

    static decodeText(json, type) {
        switch (type) {
            case 'Int32Vector': return $root.tflite.Int32Vector.decodeText(json);
            case 'Uint16Vector': return $root.tflite.Uint16Vector.decodeText(json);
            case 'Uint8Vector': return $root.tflite.Uint8Vector.decodeText(json);
        }
        return undefined;
    }
};

$root.tflite.DimensionMetadata = class DimensionMetadata {

    static decode(reader, position) {
        const $ = new $root.tflite.DimensionMetadata();
        $.format = reader.int8_(position, 4, 0);
        $.dense_size = reader.int32_(position, 6, 0);
        $.array_segments = reader.union_(position, 8, $root.tflite.SparseIndexVector.decode);
        $.array_indices = reader.union_(position, 12, $root.tflite.SparseIndexVector.decode);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.DimensionMetadata();
        $.format = $root.tflite.DimensionType[json.format];
        $.dense_size = json.dense_size;
        $.array_segments = $root.tflite.SparseIndexVector.decodeText(json.array_segments, json.array_segments_type);
        $.array_indices = $root.tflite.SparseIndexVector.decodeText(json.array_indices, json.array_indices_type);
        return $;
    }
};

$root.tflite.SparsityParameters = class SparsityParameters {

    static decode(reader, position) {
        const $ = new $root.tflite.SparsityParameters();
        $.traversal_order = reader.array(position, 4, Int32Array);
        $.block_map = reader.array(position, 6, Int32Array);
        $.dim_metadata = reader.array_(position, 8, $root.tflite.DimensionMetadata.decode);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SparsityParameters();
        $.traversal_order = json.traversal_order;
        $.block_map = json.block_map;
        $.dim_metadata = Array.isArray(json.dim_metadata) ? json.dim_metadata.map((obj) => $root.tflite.DimensionMetadata.decodeText(obj)) : [];
        return $;
    }
};

$root.tflite.Tensor = class Tensor {

    static decode(reader, position) {
        const $ = new $root.tflite.Tensor();
        $.shape = reader.array(position, 4, Int32Array);
        $.type = reader.int8_(position, 6, 0);
        $.buffer = reader.uint32_(position, 8, 0);
        $.name = reader.string_(position, 10, null);
        // TODO Table
        $.quantization= undefined;
        $.is_variable = reader.bool_(position, 14, false);
        // TODO Table
        $.sparsity= undefined;
        $.shape_signature = reader.array(position, 18, Int32Array);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.Tensor();
        $.shape = json.shape;
        $.type = $root.tflite.TensorType[json.type];
        $.buffer = json.buffer;
        $.name = json.name;
        $.quantization = undefined;
        $.is_variable = json.is_variable;
        $.sparsity = undefined;
        $.shape_signature = json.shape_signature;
        return $;
    }
};

$root.tflite.BuiltinOperator = {
    ADD: 0,
    AVERAGE_POOL_2D: 1,
    CONCATENATION: 2,
    CONV_2D: 3,
    DEPTHWISE_CONV_2D: 4,
    DEPTH_TO_SPACE: 5,
    DEQUANTIZE: 6,
    EMBEDDING_LOOKUP: 7,
    FLOOR: 8,
    FULLY_CONNECTED: 9,
    HASHTABLE_LOOKUP: 10,
    L2_NORMALIZATION: 11,
    L2_POOL_2D: 12,
    LOCAL_RESPONSE_NORMALIZATION: 13,
    LOGISTIC: 14,
    LSH_PROJECTION: 15,
    LSTM: 16,
    MAX_POOL_2D: 17,
    MUL: 18,
    RELU: 19,
    RELU_N1_TO_1: 20,
    RELU6: 21,
    RESHAPE: 22,
    RESIZE_BILINEAR: 23,
    RNN: 24,
    SOFTMAX: 25,
    SPACE_TO_DEPTH: 26,
    SVDF: 27,
    TANH: 28,
    CONCAT_EMBEDDINGS: 29,
    SKIP_GRAM: 30,
    CALL: 31,
    CUSTOM: 32,
    EMBEDDING_LOOKUP_SPARSE: 33,
    PAD: 34,
    UNIDIRECTIONAL_SEQUENCE_RNN: 35,
    GATHER: 36,
    BATCH_TO_SPACE_ND: 37,
    SPACE_TO_BATCH_ND: 38,
    TRANSPOSE: 39,
    MEAN: 40,
    SUB: 41,
    DIV: 42,
    SQUEEZE: 43,
    UNIDIRECTIONAL_SEQUENCE_LSTM: 44,
    STRIDED_SLICE: 45,
    BIDIRECTIONAL_SEQUENCE_RNN: 46,
    EXP: 47,
    TOPK_V2: 48,
    SPLIT: 49,
    LOG_SOFTMAX: 50,
    DELEGATE: 51,
    BIDIRECTIONAL_SEQUENCE_LSTM: 52,
    CAST: 53,
    PRELU: 54,
    MAXIMUM: 55,
    ARG_MAX: 56,
    MINIMUM: 57,
    LESS: 58,
    NEG: 59,
    PADV2: 60,
    GREATER: 61,
    GREATER_EQUAL: 62,
    LESS_EQUAL: 63,
    SELECT: 64,
    SLICE: 65,
    SIN: 66,
    TRANSPOSE_CONV: 67,
    SPARSE_TO_DENSE: 68,
    TILE: 69,
    EXPAND_DIMS: 70,
    EQUAL: 71,
    NOT_EQUAL: 72,
    LOG: 73,
    SUM: 74,
    SQRT: 75,
    RSQRT: 76,
    SHAPE: 77,
    POW: 78,
    ARG_MIN: 79,
    FAKE_QUANT: 80,
    REDUCE_PROD: 81,
    REDUCE_MAX: 82,
    PACK: 83,
    LOGICAL_OR: 84,
    ONE_HOT: 85,
    LOGICAL_AND: 86,
    LOGICAL_NOT: 87,
    UNPACK: 88,
    REDUCE_MIN: 89,
    FLOOR_DIV: 90,
    REDUCE_ANY: 91,
    SQUARE: 92,
    ZEROS_LIKE: 93,
    FILL: 94,
    FLOOR_MOD: 95,
    RANGE: 96,
    RESIZE_NEAREST_NEIGHBOR: 97,
    LEAKY_RELU: 98,
    SQUARED_DIFFERENCE: 99,
    MIRROR_PAD: 100,
    ABS: 101,
    SPLIT_V: 102,
    UNIQUE: 103,
    CEIL: 104,
    REVERSE_V2: 105,
    ADD_N: 106,
    GATHER_ND: 107,
    COS: 108,
    WHERE: 109,
    RANK: 110,
    ELU: 111,
    REVERSE_SEQUENCE: 112,
    MATRIX_DIAG: 113,
    QUANTIZE: 114,
    MATRIX_SET_DIAG: 115,
    ROUND: 116,
    HARD_SWISH: 117,
    IF: 118,
    WHILE: 119,
    NON_MAX_SUPPRESSION_V4: 120,
    NON_MAX_SUPPRESSION_V5: 121,
    SCATTER_ND: 122,
    SELECT_V2: 123,
    DENSIFY: 124,
    SEGMENT_SUM: 125,
    BATCH_MATMUL: 126
};

$root.tflite.BuiltinOptions = class {

    static decode(reader, position, type) {
        switch (type) {
            case 1: return $root.tflite.Conv2DOptions.decode(reader, position);
            case 2: return $root.tflite.DepthwiseConv2DOptions.decode(reader, position);
            case 3: return $root.tflite.ConcatEmbeddingsOptions.decode(reader, position);
            case 4: return $root.tflite.LSHProjectionOptions.decode(reader, position);
            case 5: return $root.tflite.Pool2DOptions.decode(reader, position);
            case 6: return $root.tflite.SVDFOptions.decode(reader, position);
            case 7: return $root.tflite.RNNOptions.decode(reader, position);
            case 8: return $root.tflite.FullyConnectedOptions.decode(reader, position);
            case 9: return $root.tflite.SoftmaxOptions.decode(reader, position);
            case 10: return $root.tflite.ConcatenationOptions.decode(reader, position);
            case 11: return $root.tflite.AddOptions.decode(reader, position);
            case 12: return $root.tflite.L2NormOptions.decode(reader, position);
            case 13: return $root.tflite.LocalResponseNormalizationOptions.decode(reader, position);
            case 14: return $root.tflite.LSTMOptions.decode(reader, position);
            case 15: return $root.tflite.ResizeBilinearOptions.decode(reader, position);
            case 16: return $root.tflite.CallOptions.decode(reader, position);
            case 17: return $root.tflite.ReshapeOptions.decode(reader, position);
            case 18: return $root.tflite.SkipGramOptions.decode(reader, position);
            case 19: return $root.tflite.SpaceToDepthOptions.decode(reader, position);
            case 20: return $root.tflite.EmbeddingLookupSparseOptions.decode(reader, position);
            case 21: return $root.tflite.MulOptions.decode(reader, position);
            case 22: return $root.tflite.PadOptions.decode(reader, position);
            case 23: return $root.tflite.GatherOptions.decode(reader, position);
            case 24: return $root.tflite.BatchToSpaceNDOptions.decode(reader, position);
            case 25: return $root.tflite.SpaceToBatchNDOptions.decode(reader, position);
            case 26: return $root.tflite.TransposeOptions.decode(reader, position);
            case 27: return $root.tflite.ReducerOptions.decode(reader, position);
            case 28: return $root.tflite.SubOptions.decode(reader, position);
            case 29: return $root.tflite.DivOptions.decode(reader, position);
            case 30: return $root.tflite.SqueezeOptions.decode(reader, position);
            case 31: return $root.tflite.SequenceRNNOptions.decode(reader, position);
            case 32: return $root.tflite.StridedSliceOptions.decode(reader, position);
            case 33: return $root.tflite.ExpOptions.decode(reader, position);
            case 34: return $root.tflite.TopKV2Options.decode(reader, position);
            case 35: return $root.tflite.SplitOptions.decode(reader, position);
            case 36: return $root.tflite.LogSoftmaxOptions.decode(reader, position);
            case 37: return $root.tflite.CastOptions.decode(reader, position);
            case 38: return $root.tflite.DequantizeOptions.decode(reader, position);
            case 39: return $root.tflite.MaximumMinimumOptions.decode(reader, position);
            case 40: return $root.tflite.ArgMaxOptions.decode(reader, position);
            case 41: return $root.tflite.LessOptions.decode(reader, position);
            case 42: return $root.tflite.NegOptions.decode(reader, position);
            case 43: return $root.tflite.PadV2Options.decode(reader, position);
            case 44: return $root.tflite.GreaterOptions.decode(reader, position);
            case 45: return $root.tflite.GreaterEqualOptions.decode(reader, position);
            case 46: return $root.tflite.LessEqualOptions.decode(reader, position);
            case 47: return $root.tflite.SelectOptions.decode(reader, position);
            case 48: return $root.tflite.SliceOptions.decode(reader, position);
            case 49: return $root.tflite.TransposeConvOptions.decode(reader, position);
            case 50: return $root.tflite.SparseToDenseOptions.decode(reader, position);
            case 51: return $root.tflite.TileOptions.decode(reader, position);
            case 52: return $root.tflite.ExpandDimsOptions.decode(reader, position);
            case 53: return $root.tflite.EqualOptions.decode(reader, position);
            case 54: return $root.tflite.NotEqualOptions.decode(reader, position);
            case 55: return $root.tflite.ShapeOptions.decode(reader, position);
            case 56: return $root.tflite.PowOptions.decode(reader, position);
            case 57: return $root.tflite.ArgMinOptions.decode(reader, position);
            case 58: return $root.tflite.FakeQuantOptions.decode(reader, position);
            case 59: return $root.tflite.PackOptions.decode(reader, position);
            case 60: return $root.tflite.LogicalOrOptions.decode(reader, position);
            case 61: return $root.tflite.OneHotOptions.decode(reader, position);
            case 62: return $root.tflite.LogicalAndOptions.decode(reader, position);
            case 63: return $root.tflite.LogicalNotOptions.decode(reader, position);
            case 64: return $root.tflite.UnpackOptions.decode(reader, position);
            case 65: return $root.tflite.FloorDivOptions.decode(reader, position);
            case 66: return $root.tflite.SquareOptions.decode(reader, position);
            case 67: return $root.tflite.ZerosLikeOptions.decode(reader, position);
            case 68: return $root.tflite.FillOptions.decode(reader, position);
            case 69: return $root.tflite.BidirectionalSequenceLSTMOptions.decode(reader, position);
            case 70: return $root.tflite.BidirectionalSequenceRNNOptions.decode(reader, position);
            case 71: return $root.tflite.UnidirectionalSequenceLSTMOptions.decode(reader, position);
            case 72: return $root.tflite.FloorModOptions.decode(reader, position);
            case 73: return $root.tflite.RangeOptions.decode(reader, position);
            case 74: return $root.tflite.ResizeNearestNeighborOptions.decode(reader, position);
            case 75: return $root.tflite.LeakyReluOptions.decode(reader, position);
            case 76: return $root.tflite.SquaredDifferenceOptions.decode(reader, position);
            case 77: return $root.tflite.MirrorPadOptions.decode(reader, position);
            case 78: return $root.tflite.AbsOptions.decode(reader, position);
            case 79: return $root.tflite.SplitVOptions.decode(reader, position);
            case 80: return $root.tflite.UniqueOptions.decode(reader, position);
            case 81: return $root.tflite.ReverseV2Options.decode(reader, position);
            case 82: return $root.tflite.AddNOptions.decode(reader, position);
            case 83: return $root.tflite.GatherNdOptions.decode(reader, position);
            case 84: return $root.tflite.CosOptions.decode(reader, position);
            case 85: return $root.tflite.WhereOptions.decode(reader, position);
            case 86: return $root.tflite.RankOptions.decode(reader, position);
            case 87: return $root.tflite.ReverseSequenceOptions.decode(reader, position);
            case 88: return $root.tflite.MatrixDiagOptions.decode(reader, position);
            case 89: return $root.tflite.QuantizeOptions.decode(reader, position);
            case 90: return $root.tflite.MatrixSetDiagOptions.decode(reader, position);
            case 91: return $root.tflite.HardSwishOptions.decode(reader, position);
            case 92: return $root.tflite.IfOptions.decode(reader, position);
            case 93: return $root.tflite.WhileOptions.decode(reader, position);
            case 94: return $root.tflite.DepthToSpaceOptions.decode(reader, position);
            case 95: return $root.tflite.NonMaxSuppressionV4Options.decode(reader, position);
            case 96: return $root.tflite.NonMaxSuppressionV5Options.decode(reader, position);
            case 97: return $root.tflite.ScatterNdOptions.decode(reader, position);
            case 98: return $root.tflite.SelectV2Options.decode(reader, position);
            case 99: return $root.tflite.DensifyOptions.decode(reader, position);
            case 100: return $root.tflite.SegmentSumOptions.decode(reader, position);
            case 101: return $root.tflite.BatchMatMulOptions.decode(reader, position);
        }
        return undefined;
    }

    static decodeText(json, type) {
        switch (type) {
            case 'Conv2DOptions': return $root.tflite.Conv2DOptions.decodeText(json);
            case 'DepthwiseConv2DOptions': return $root.tflite.DepthwiseConv2DOptions.decodeText(json);
            case 'ConcatEmbeddingsOptions': return $root.tflite.ConcatEmbeddingsOptions.decodeText(json);
            case 'LSHProjectionOptions': return $root.tflite.LSHProjectionOptions.decodeText(json);
            case 'Pool2DOptions': return $root.tflite.Pool2DOptions.decodeText(json);
            case 'SVDFOptions': return $root.tflite.SVDFOptions.decodeText(json);
            case 'RNNOptions': return $root.tflite.RNNOptions.decodeText(json);
            case 'FullyConnectedOptions': return $root.tflite.FullyConnectedOptions.decodeText(json);
            case 'SoftmaxOptions': return $root.tflite.SoftmaxOptions.decodeText(json);
            case 'ConcatenationOptions': return $root.tflite.ConcatenationOptions.decodeText(json);
            case 'AddOptions': return $root.tflite.AddOptions.decodeText(json);
            case 'L2NormOptions': return $root.tflite.L2NormOptions.decodeText(json);
            case 'LocalResponseNormalizationOptions': return $root.tflite.LocalResponseNormalizationOptions.decodeText(json);
            case 'LSTMOptions': return $root.tflite.LSTMOptions.decodeText(json);
            case 'ResizeBilinearOptions': return $root.tflite.ResizeBilinearOptions.decodeText(json);
            case 'CallOptions': return $root.tflite.CallOptions.decodeText(json);
            case 'ReshapeOptions': return $root.tflite.ReshapeOptions.decodeText(json);
            case 'SkipGramOptions': return $root.tflite.SkipGramOptions.decodeText(json);
            case 'SpaceToDepthOptions': return $root.tflite.SpaceToDepthOptions.decodeText(json);
            case 'EmbeddingLookupSparseOptions': return $root.tflite.EmbeddingLookupSparseOptions.decodeText(json);
            case 'MulOptions': return $root.tflite.MulOptions.decodeText(json);
            case 'PadOptions': return $root.tflite.PadOptions.decodeText(json);
            case 'GatherOptions': return $root.tflite.GatherOptions.decodeText(json);
            case 'BatchToSpaceNDOptions': return $root.tflite.BatchToSpaceNDOptions.decodeText(json);
            case 'SpaceToBatchNDOptions': return $root.tflite.SpaceToBatchNDOptions.decodeText(json);
            case 'TransposeOptions': return $root.tflite.TransposeOptions.decodeText(json);
            case 'ReducerOptions': return $root.tflite.ReducerOptions.decodeText(json);
            case 'SubOptions': return $root.tflite.SubOptions.decodeText(json);
            case 'DivOptions': return $root.tflite.DivOptions.decodeText(json);
            case 'SqueezeOptions': return $root.tflite.SqueezeOptions.decodeText(json);
            case 'SequenceRNNOptions': return $root.tflite.SequenceRNNOptions.decodeText(json);
            case 'StridedSliceOptions': return $root.tflite.StridedSliceOptions.decodeText(json);
            case 'ExpOptions': return $root.tflite.ExpOptions.decodeText(json);
            case 'TopKV2Options': return $root.tflite.TopKV2Options.decodeText(json);
            case 'SplitOptions': return $root.tflite.SplitOptions.decodeText(json);
            case 'LogSoftmaxOptions': return $root.tflite.LogSoftmaxOptions.decodeText(json);
            case 'CastOptions': return $root.tflite.CastOptions.decodeText(json);
            case 'DequantizeOptions': return $root.tflite.DequantizeOptions.decodeText(json);
            case 'MaximumMinimumOptions': return $root.tflite.MaximumMinimumOptions.decodeText(json);
            case 'ArgMaxOptions': return $root.tflite.ArgMaxOptions.decodeText(json);
            case 'LessOptions': return $root.tflite.LessOptions.decodeText(json);
            case 'NegOptions': return $root.tflite.NegOptions.decodeText(json);
            case 'PadV2Options': return $root.tflite.PadV2Options.decodeText(json);
            case 'GreaterOptions': return $root.tflite.GreaterOptions.decodeText(json);
            case 'GreaterEqualOptions': return $root.tflite.GreaterEqualOptions.decodeText(json);
            case 'LessEqualOptions': return $root.tflite.LessEqualOptions.decodeText(json);
            case 'SelectOptions': return $root.tflite.SelectOptions.decodeText(json);
            case 'SliceOptions': return $root.tflite.SliceOptions.decodeText(json);
            case 'TransposeConvOptions': return $root.tflite.TransposeConvOptions.decodeText(json);
            case 'SparseToDenseOptions': return $root.tflite.SparseToDenseOptions.decodeText(json);
            case 'TileOptions': return $root.tflite.TileOptions.decodeText(json);
            case 'ExpandDimsOptions': return $root.tflite.ExpandDimsOptions.decodeText(json);
            case 'EqualOptions': return $root.tflite.EqualOptions.decodeText(json);
            case 'NotEqualOptions': return $root.tflite.NotEqualOptions.decodeText(json);
            case 'ShapeOptions': return $root.tflite.ShapeOptions.decodeText(json);
            case 'PowOptions': return $root.tflite.PowOptions.decodeText(json);
            case 'ArgMinOptions': return $root.tflite.ArgMinOptions.decodeText(json);
            case 'FakeQuantOptions': return $root.tflite.FakeQuantOptions.decodeText(json);
            case 'PackOptions': return $root.tflite.PackOptions.decodeText(json);
            case 'LogicalOrOptions': return $root.tflite.LogicalOrOptions.decodeText(json);
            case 'OneHotOptions': return $root.tflite.OneHotOptions.decodeText(json);
            case 'LogicalAndOptions': return $root.tflite.LogicalAndOptions.decodeText(json);
            case 'LogicalNotOptions': return $root.tflite.LogicalNotOptions.decodeText(json);
            case 'UnpackOptions': return $root.tflite.UnpackOptions.decodeText(json);
            case 'FloorDivOptions': return $root.tflite.FloorDivOptions.decodeText(json);
            case 'SquareOptions': return $root.tflite.SquareOptions.decodeText(json);
            case 'ZerosLikeOptions': return $root.tflite.ZerosLikeOptions.decodeText(json);
            case 'FillOptions': return $root.tflite.FillOptions.decodeText(json);
            case 'BidirectionalSequenceLSTMOptions': return $root.tflite.BidirectionalSequenceLSTMOptions.decodeText(json);
            case 'BidirectionalSequenceRNNOptions': return $root.tflite.BidirectionalSequenceRNNOptions.decodeText(json);
            case 'UnidirectionalSequenceLSTMOptions': return $root.tflite.UnidirectionalSequenceLSTMOptions.decodeText(json);
            case 'FloorModOptions': return $root.tflite.FloorModOptions.decodeText(json);
            case 'RangeOptions': return $root.tflite.RangeOptions.decodeText(json);
            case 'ResizeNearestNeighborOptions': return $root.tflite.ResizeNearestNeighborOptions.decodeText(json);
            case 'LeakyReluOptions': return $root.tflite.LeakyReluOptions.decodeText(json);
            case 'SquaredDifferenceOptions': return $root.tflite.SquaredDifferenceOptions.decodeText(json);
            case 'MirrorPadOptions': return $root.tflite.MirrorPadOptions.decodeText(json);
            case 'AbsOptions': return $root.tflite.AbsOptions.decodeText(json);
            case 'SplitVOptions': return $root.tflite.SplitVOptions.decodeText(json);
            case 'UniqueOptions': return $root.tflite.UniqueOptions.decodeText(json);
            case 'ReverseV2Options': return $root.tflite.ReverseV2Options.decodeText(json);
            case 'AddNOptions': return $root.tflite.AddNOptions.decodeText(json);
            case 'GatherNdOptions': return $root.tflite.GatherNdOptions.decodeText(json);
            case 'CosOptions': return $root.tflite.CosOptions.decodeText(json);
            case 'WhereOptions': return $root.tflite.WhereOptions.decodeText(json);
            case 'RankOptions': return $root.tflite.RankOptions.decodeText(json);
            case 'ReverseSequenceOptions': return $root.tflite.ReverseSequenceOptions.decodeText(json);
            case 'MatrixDiagOptions': return $root.tflite.MatrixDiagOptions.decodeText(json);
            case 'QuantizeOptions': return $root.tflite.QuantizeOptions.decodeText(json);
            case 'MatrixSetDiagOptions': return $root.tflite.MatrixSetDiagOptions.decodeText(json);
            case 'HardSwishOptions': return $root.tflite.HardSwishOptions.decodeText(json);
            case 'IfOptions': return $root.tflite.IfOptions.decodeText(json);
            case 'WhileOptions': return $root.tflite.WhileOptions.decodeText(json);
            case 'DepthToSpaceOptions': return $root.tflite.DepthToSpaceOptions.decodeText(json);
            case 'NonMaxSuppressionV4Options': return $root.tflite.NonMaxSuppressionV4Options.decodeText(json);
            case 'NonMaxSuppressionV5Options': return $root.tflite.NonMaxSuppressionV5Options.decodeText(json);
            case 'ScatterNdOptions': return $root.tflite.ScatterNdOptions.decodeText(json);
            case 'SelectV2Options': return $root.tflite.SelectV2Options.decodeText(json);
            case 'DensifyOptions': return $root.tflite.DensifyOptions.decodeText(json);
            case 'SegmentSumOptions': return $root.tflite.SegmentSumOptions.decodeText(json);
            case 'BatchMatMulOptions': return $root.tflite.BatchMatMulOptions.decodeText(json);
        }
        return undefined;
    }
};

$root.tflite.Padding = {
    SAME: 0,
    VALID: 1
};

$root.tflite.ActivationFunctionType = {
    NONE: 0,
    RELU: 1,
    RELU_N1_TO_1: 2,
    RELU6: 3,
    TANH: 4,
    SIGN_BIT: 5
};

$root.tflite.Conv2DOptions = class Conv2DOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.Conv2DOptions();
        $.padding = reader.int8_(position, 4, 0);
        $.stride_w = reader.int32_(position, 6, 0);
        $.stride_h = reader.int32_(position, 8, 0);
        $.fused_activation_function = reader.int8_(position, 10, 0);
        $.dilation_w_factor = reader.int32_(position, 12, 1);
        $.dilation_h_factor = reader.int32_(position, 14, 1);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.Conv2DOptions();
        $.padding = $root.tflite.Padding[json.padding];
        $.stride_w = json.stride_w;
        $.stride_h = json.stride_h;
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        $.dilation_w_factor = json.dilation_w_factor;
        $.dilation_h_factor = json.dilation_h_factor;
        return $;
    }
};

$root.tflite.Pool2DOptions = class Pool2DOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.Pool2DOptions();
        $.padding = reader.int8_(position, 4, 0);
        $.stride_w = reader.int32_(position, 6, 0);
        $.stride_h = reader.int32_(position, 8, 0);
        $.filter_width = reader.int32_(position, 10, 0);
        $.filter_height = reader.int32_(position, 12, 0);
        $.fused_activation_function = reader.int8_(position, 14, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.Pool2DOptions();
        $.padding = $root.tflite.Padding[json.padding];
        $.stride_w = json.stride_w;
        $.stride_h = json.stride_h;
        $.filter_width = json.filter_width;
        $.filter_height = json.filter_height;
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        return $;
    }
};

$root.tflite.DepthwiseConv2DOptions = class DepthwiseConv2DOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.DepthwiseConv2DOptions();
        $.padding = reader.int8_(position, 4, 0);
        $.stride_w = reader.int32_(position, 6, 0);
        $.stride_h = reader.int32_(position, 8, 0);
        $.depth_multiplier = reader.int32_(position, 10, 0);
        $.fused_activation_function = reader.int8_(position, 12, 0);
        $.dilation_w_factor = reader.int32_(position, 14, 1);
        $.dilation_h_factor = reader.int32_(position, 16, 1);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.DepthwiseConv2DOptions();
        $.padding = $root.tflite.Padding[json.padding];
        $.stride_w = json.stride_w;
        $.stride_h = json.stride_h;
        $.depth_multiplier = json.depth_multiplier;
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        $.dilation_w_factor = json.dilation_w_factor;
        $.dilation_h_factor = json.dilation_h_factor;
        return $;
    }
};

$root.tflite.ConcatEmbeddingsOptions = class ConcatEmbeddingsOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ConcatEmbeddingsOptions();
        $.num_channels = reader.int32_(position, 4, 0);
        $.num_columns_per_channel = reader.array(position, 6, Int32Array);
        $.embedding_dim_per_channel = reader.array(position, 8, Int32Array);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ConcatEmbeddingsOptions();
        $.num_channels = json.num_channels;
        $.num_columns_per_channel = json.num_columns_per_channel;
        $.embedding_dim_per_channel = json.embedding_dim_per_channel;
        return $;
    }
};

$root.tflite.LSHProjectionType = {
    UNKNOWN: 0,
    SPARSE: 1,
    DENSE: 2
};

$root.tflite.LSHProjectionOptions = class LSHProjectionOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.LSHProjectionOptions();
        $.type = reader.int8_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.LSHProjectionOptions();
        $.type = $root.tflite.LSHProjectionType[json.type];
        return $;
    }
};

$root.tflite.SVDFOptions = class SVDFOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SVDFOptions();
        $.rank = reader.int32_(position, 4, 0);
        $.fused_activation_function = reader.int8_(position, 6, 0);
        $.asymmetric_quantize_inputs = reader.bool_(position, 8, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SVDFOptions();
        $.rank = json.rank;
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        $.asymmetric_quantize_inputs = json.asymmetric_quantize_inputs;
        return $;
    }
};

$root.tflite.RNNOptions = class RNNOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.RNNOptions();
        $.fused_activation_function = reader.int8_(position, 4, 0);
        $.asymmetric_quantize_inputs = reader.bool_(position, 6, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.RNNOptions();
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        $.asymmetric_quantize_inputs = json.asymmetric_quantize_inputs;
        return $;
    }
};

$root.tflite.SequenceRNNOptions = class SequenceRNNOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SequenceRNNOptions();
        $.time_major = reader.bool_(position, 4, false);
        $.fused_activation_function = reader.int8_(position, 6, 0);
        $.asymmetric_quantize_inputs = reader.bool_(position, 8, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SequenceRNNOptions();
        $.time_major = json.time_major;
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        $.asymmetric_quantize_inputs = json.asymmetric_quantize_inputs;
        return $;
    }
};

$root.tflite.BidirectionalSequenceRNNOptions = class BidirectionalSequenceRNNOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.BidirectionalSequenceRNNOptions();
        $.time_major = reader.bool_(position, 4, false);
        $.fused_activation_function = reader.int8_(position, 6, 0);
        $.merge_outputs = reader.bool_(position, 8, false);
        $.asymmetric_quantize_inputs = reader.bool_(position, 10, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.BidirectionalSequenceRNNOptions();
        $.time_major = json.time_major;
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        $.merge_outputs = json.merge_outputs;
        $.asymmetric_quantize_inputs = json.asymmetric_quantize_inputs;
        return $;
    }
};

$root.tflite.FullyConnectedOptionsWeightsFormat = {
    DEFAULT: 0,
    SHUFFLED4x16INT8: 1
};

$root.tflite.FullyConnectedOptions = class FullyConnectedOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.FullyConnectedOptions();
        $.fused_activation_function = reader.int8_(position, 4, 0);
        $.weights_format = reader.int8_(position, 6, 0);
        $.keep_num_dims = reader.bool_(position, 8, false);
        $.asymmetric_quantize_inputs = reader.bool_(position, 10, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.FullyConnectedOptions();
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        $.weights_format = $root.tflite.FullyConnectedOptionsWeightsFormat[json.weights_format];
        $.keep_num_dims = json.keep_num_dims;
        $.asymmetric_quantize_inputs = json.asymmetric_quantize_inputs;
        return $;
    }
};

$root.tflite.SoftmaxOptions = class SoftmaxOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SoftmaxOptions();
        $.beta = reader.float32_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SoftmaxOptions();
        $.beta = json.beta;
        return $;
    }
};

$root.tflite.ConcatenationOptions = class ConcatenationOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ConcatenationOptions();
        $.axis = reader.int32_(position, 4, 0);
        $.fused_activation_function = reader.int8_(position, 6, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ConcatenationOptions();
        $.axis = json.axis;
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        return $;
    }
};

$root.tflite.AddOptions = class AddOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.AddOptions();
        $.fused_activation_function = reader.int8_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.AddOptions();
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        return $;
    }
};

$root.tflite.MulOptions = class MulOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.MulOptions();
        $.fused_activation_function = reader.int8_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.MulOptions();
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        return $;
    }
};

$root.tflite.L2NormOptions = class L2NormOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.L2NormOptions();
        $.fused_activation_function = reader.int8_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.L2NormOptions();
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        return $;
    }
};

$root.tflite.LocalResponseNormalizationOptions = class LocalResponseNormalizationOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.LocalResponseNormalizationOptions();
        $.radius = reader.int32_(position, 4, 0);
        $.bias = reader.float32_(position, 6, 0);
        $.alpha = reader.float32_(position, 8, 0);
        $.beta = reader.float32_(position, 10, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.LocalResponseNormalizationOptions();
        $.radius = json.radius;
        $.bias = json.bias;
        $.alpha = json.alpha;
        $.beta = json.beta;
        return $;
    }
};

$root.tflite.LSTMKernelType = {
    FULL: 0,
    BASIC: 1
};

$root.tflite.LSTMOptions = class LSTMOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.LSTMOptions();
        $.fused_activation_function = reader.int8_(position, 4, 0);
        $.cell_clip = reader.float32_(position, 6, 0);
        $.proj_clip = reader.float32_(position, 8, 0);
        $.kernel_type = reader.int8_(position, 10, 0);
        $.asymmetric_quantize_inputs = reader.bool_(position, 12, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.LSTMOptions();
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        $.cell_clip = json.cell_clip;
        $.proj_clip = json.proj_clip;
        $.kernel_type = $root.tflite.LSTMKernelType[json.kernel_type];
        $.asymmetric_quantize_inputs = json.asymmetric_quantize_inputs;
        return $;
    }
};

$root.tflite.UnidirectionalSequenceLSTMOptions = class UnidirectionalSequenceLSTMOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.UnidirectionalSequenceLSTMOptions();
        $.fused_activation_function = reader.int8_(position, 4, 0);
        $.cell_clip = reader.float32_(position, 6, 0);
        $.proj_clip = reader.float32_(position, 8, 0);
        $.time_major = reader.bool_(position, 10, false);
        $.asymmetric_quantize_inputs = reader.bool_(position, 12, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.UnidirectionalSequenceLSTMOptions();
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        $.cell_clip = json.cell_clip;
        $.proj_clip = json.proj_clip;
        $.time_major = json.time_major;
        $.asymmetric_quantize_inputs = json.asymmetric_quantize_inputs;
        return $;
    }
};

$root.tflite.BidirectionalSequenceLSTMOptions = class BidirectionalSequenceLSTMOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.BidirectionalSequenceLSTMOptions();
        $.fused_activation_function = reader.int8_(position, 4, 0);
        $.cell_clip = reader.float32_(position, 6, 0);
        $.proj_clip = reader.float32_(position, 8, 0);
        $.merge_outputs = reader.bool_(position, 10, false);
        $.time_major = reader.bool_(position, 12, true);
        $.asymmetric_quantize_inputs = reader.bool_(position, 14, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.BidirectionalSequenceLSTMOptions();
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        $.cell_clip = json.cell_clip;
        $.proj_clip = json.proj_clip;
        $.merge_outputs = json.merge_outputs;
        $.time_major = json.time_major;
        $.asymmetric_quantize_inputs = json.asymmetric_quantize_inputs;
        return $;
    }
};

$root.tflite.ResizeBilinearOptions = class ResizeBilinearOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ResizeBilinearOptions();
        $.new_height = reader.int32_(position, 4, 0);
        $.new_width = reader.int32_(position, 6, 0);
        $.align_corners = reader.bool_(position, 8, false);
        $.half_pixel_centers = reader.bool_(position, 10, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ResizeBilinearOptions();
        $.new_height = json.new_height;
        $.new_width = json.new_width;
        $.align_corners = json.align_corners;
        $.half_pixel_centers = json.half_pixel_centers;
        return $;
    }
};

$root.tflite.ResizeNearestNeighborOptions = class ResizeNearestNeighborOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ResizeNearestNeighborOptions();
        $.align_corners = reader.bool_(position, 4, false);
        $.half_pixel_centers = reader.bool_(position, 6, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ResizeNearestNeighborOptions();
        $.align_corners = json.align_corners;
        $.half_pixel_centers = json.half_pixel_centers;
        return $;
    }
};

$root.tflite.CallOptions = class CallOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.CallOptions();
        $.subgraph = reader.uint32_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.CallOptions();
        $.subgraph = json.subgraph;
        return $;
    }
};

$root.tflite.PadOptions = class PadOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.PadOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.PadOptions();
        return $;
    }
};

$root.tflite.PadV2Options = class PadV2Options {

    static decode(reader, position) {
        const $ = new $root.tflite.PadV2Options();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.PadV2Options();
        return $;
    }
};

$root.tflite.ReshapeOptions = class ReshapeOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ReshapeOptions();
        $.new_shape = reader.array(position, 4, Int32Array);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ReshapeOptions();
        $.new_shape = json.new_shape;
        return $;
    }
};

$root.tflite.SpaceToBatchNDOptions = class SpaceToBatchNDOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SpaceToBatchNDOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SpaceToBatchNDOptions();
        return $;
    }
};

$root.tflite.BatchToSpaceNDOptions = class BatchToSpaceNDOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.BatchToSpaceNDOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.BatchToSpaceNDOptions();
        return $;
    }
};

$root.tflite.SkipGramOptions = class SkipGramOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SkipGramOptions();
        $.ngram_size = reader.int32_(position, 4, 0);
        $.max_skip_size = reader.int32_(position, 6, 0);
        $.include_all_ngrams = reader.bool_(position, 8, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SkipGramOptions();
        $.ngram_size = json.ngram_size;
        $.max_skip_size = json.max_skip_size;
        $.include_all_ngrams = json.include_all_ngrams;
        return $;
    }
};

$root.tflite.SpaceToDepthOptions = class SpaceToDepthOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SpaceToDepthOptions();
        $.block_size = reader.int32_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SpaceToDepthOptions();
        $.block_size = json.block_size;
        return $;
    }
};

$root.tflite.DepthToSpaceOptions = class DepthToSpaceOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.DepthToSpaceOptions();
        $.block_size = reader.int32_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.DepthToSpaceOptions();
        $.block_size = json.block_size;
        return $;
    }
};

$root.tflite.SubOptions = class SubOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SubOptions();
        $.fused_activation_function = reader.int8_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SubOptions();
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        return $;
    }
};

$root.tflite.DivOptions = class DivOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.DivOptions();
        $.fused_activation_function = reader.int8_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.DivOptions();
        $.fused_activation_function = $root.tflite.ActivationFunctionType[json.fused_activation_function];
        return $;
    }
};

$root.tflite.TopKV2Options = class TopKV2Options {

    static decode(reader, position) {
        const $ = new $root.tflite.TopKV2Options();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.TopKV2Options();
        return $;
    }
};

$root.tflite.CombinerType = {
    SUM: 0,
    MEAN: 1,
    SQRTN: 2
};

$root.tflite.EmbeddingLookupSparseOptions = class EmbeddingLookupSparseOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.EmbeddingLookupSparseOptions();
        $.combiner = reader.int8_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.EmbeddingLookupSparseOptions();
        $.combiner = $root.tflite.CombinerType[json.combiner];
        return $;
    }
};

$root.tflite.GatherOptions = class GatherOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.GatherOptions();
        $.axis = reader.int32_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.GatherOptions();
        $.axis = json.axis;
        return $;
    }
};

$root.tflite.TransposeOptions = class TransposeOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.TransposeOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.TransposeOptions();
        return $;
    }
};

$root.tflite.ExpOptions = class ExpOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ExpOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ExpOptions();
        return $;
    }
};

$root.tflite.CosOptions = class CosOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.CosOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.CosOptions();
        return $;
    }
};

$root.tflite.ReducerOptions = class ReducerOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ReducerOptions();
        $.keep_dims = reader.bool_(position, 4, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ReducerOptions();
        $.keep_dims = json.keep_dims;
        return $;
    }
};

$root.tflite.SqueezeOptions = class SqueezeOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SqueezeOptions();
        $.squeeze_dims = reader.array(position, 4, Int32Array);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SqueezeOptions();
        $.squeeze_dims = json.squeeze_dims;
        return $;
    }
};

$root.tflite.SplitOptions = class SplitOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SplitOptions();
        $.num_splits = reader.int32_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SplitOptions();
        $.num_splits = json.num_splits;
        return $;
    }
};

$root.tflite.SplitVOptions = class SplitVOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SplitVOptions();
        $.num_splits = reader.int32_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SplitVOptions();
        $.num_splits = json.num_splits;
        return $;
    }
};

$root.tflite.StridedSliceOptions = class StridedSliceOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.StridedSliceOptions();
        $.begin_mask = reader.int32_(position, 4, 0);
        $.end_mask = reader.int32_(position, 6, 0);
        $.ellipsis_mask = reader.int32_(position, 8, 0);
        $.new_axis_mask = reader.int32_(position, 10, 0);
        $.shrink_axis_mask = reader.int32_(position, 12, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.StridedSliceOptions();
        $.begin_mask = json.begin_mask;
        $.end_mask = json.end_mask;
        $.ellipsis_mask = json.ellipsis_mask;
        $.new_axis_mask = json.new_axis_mask;
        $.shrink_axis_mask = json.shrink_axis_mask;
        return $;
    }
};

$root.tflite.LogSoftmaxOptions = class LogSoftmaxOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.LogSoftmaxOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.LogSoftmaxOptions();
        return $;
    }
};

$root.tflite.CastOptions = class CastOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.CastOptions();
        $.in_data_type = reader.int8_(position, 4, 0);
        $.out_data_type = reader.int8_(position, 6, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.CastOptions();
        $.in_data_type = $root.tflite.TensorType[json.in_data_type];
        $.out_data_type = $root.tflite.TensorType[json.out_data_type];
        return $;
    }
};

$root.tflite.DequantizeOptions = class DequantizeOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.DequantizeOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.DequantizeOptions();
        return $;
    }
};

$root.tflite.MaximumMinimumOptions = class MaximumMinimumOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.MaximumMinimumOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.MaximumMinimumOptions();
        return $;
    }
};

$root.tflite.TileOptions = class TileOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.TileOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.TileOptions();
        return $;
    }
};

$root.tflite.ArgMaxOptions = class ArgMaxOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ArgMaxOptions();
        $.output_type = reader.int8_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ArgMaxOptions();
        $.output_type = $root.tflite.TensorType[json.output_type];
        return $;
    }
};

$root.tflite.ArgMinOptions = class ArgMinOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ArgMinOptions();
        $.output_type = reader.int8_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ArgMinOptions();
        $.output_type = $root.tflite.TensorType[json.output_type];
        return $;
    }
};

$root.tflite.GreaterOptions = class GreaterOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.GreaterOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.GreaterOptions();
        return $;
    }
};

$root.tflite.GreaterEqualOptions = class GreaterEqualOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.GreaterEqualOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.GreaterEqualOptions();
        return $;
    }
};

$root.tflite.LessOptions = class LessOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.LessOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.LessOptions();
        return $;
    }
};

$root.tflite.LessEqualOptions = class LessEqualOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.LessEqualOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.LessEqualOptions();
        return $;
    }
};

$root.tflite.NegOptions = class NegOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.NegOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.NegOptions();
        return $;
    }
};

$root.tflite.SelectOptions = class SelectOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SelectOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SelectOptions();
        return $;
    }
};

$root.tflite.SliceOptions = class SliceOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SliceOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SliceOptions();
        return $;
    }
};

$root.tflite.TransposeConvOptions = class TransposeConvOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.TransposeConvOptions();
        $.padding = reader.int8_(position, 4, 0);
        $.stride_w = reader.int32_(position, 6, 0);
        $.stride_h = reader.int32_(position, 8, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.TransposeConvOptions();
        $.padding = $root.tflite.Padding[json.padding];
        $.stride_w = json.stride_w;
        $.stride_h = json.stride_h;
        return $;
    }
};

$root.tflite.ExpandDimsOptions = class ExpandDimsOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ExpandDimsOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ExpandDimsOptions();
        return $;
    }
};

$root.tflite.SparseToDenseOptions = class SparseToDenseOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SparseToDenseOptions();
        $.validate_indices = reader.bool_(position, 4, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SparseToDenseOptions();
        $.validate_indices = json.validate_indices;
        return $;
    }
};

$root.tflite.EqualOptions = class EqualOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.EqualOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.EqualOptions();
        return $;
    }
};

$root.tflite.NotEqualOptions = class NotEqualOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.NotEqualOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.NotEqualOptions();
        return $;
    }
};

$root.tflite.ShapeOptions = class ShapeOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ShapeOptions();
        $.out_type = reader.int8_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ShapeOptions();
        $.out_type = $root.tflite.TensorType[json.out_type];
        return $;
    }
};

$root.tflite.RankOptions = class RankOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.RankOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.RankOptions();
        return $;
    }
};

$root.tflite.PowOptions = class PowOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.PowOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.PowOptions();
        return $;
    }
};

$root.tflite.FakeQuantOptions = class FakeQuantOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.FakeQuantOptions();
        $.min = reader.float32_(position, 4, 0);
        $.max = reader.float32_(position, 6, 0);
        $.num_bits = reader.int32_(position, 8, 0);
        $.narrow_range = reader.bool_(position, 10, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.FakeQuantOptions();
        $.min = json.min;
        $.max = json.max;
        $.num_bits = json.num_bits;
        $.narrow_range = json.narrow_range;
        return $;
    }
};

$root.tflite.PackOptions = class PackOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.PackOptions();
        $.values_count = reader.int32_(position, 4, 0);
        $.axis = reader.int32_(position, 6, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.PackOptions();
        $.values_count = json.values_count;
        $.axis = json.axis;
        return $;
    }
};

$root.tflite.LogicalOrOptions = class LogicalOrOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.LogicalOrOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.LogicalOrOptions();
        return $;
    }
};

$root.tflite.OneHotOptions = class OneHotOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.OneHotOptions();
        $.axis = reader.int32_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.OneHotOptions();
        $.axis = json.axis;
        return $;
    }
};

$root.tflite.AbsOptions = class AbsOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.AbsOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.AbsOptions();
        return $;
    }
};

$root.tflite.HardSwishOptions = class HardSwishOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.HardSwishOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.HardSwishOptions();
        return $;
    }
};

$root.tflite.LogicalAndOptions = class LogicalAndOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.LogicalAndOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.LogicalAndOptions();
        return $;
    }
};

$root.tflite.LogicalNotOptions = class LogicalNotOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.LogicalNotOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.LogicalNotOptions();
        return $;
    }
};

$root.tflite.UnpackOptions = class UnpackOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.UnpackOptions();
        $.num = reader.int32_(position, 4, 0);
        $.axis = reader.int32_(position, 6, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.UnpackOptions();
        $.num = json.num;
        $.axis = json.axis;
        return $;
    }
};

$root.tflite.FloorDivOptions = class FloorDivOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.FloorDivOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.FloorDivOptions();
        return $;
    }
};

$root.tflite.SquareOptions = class SquareOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SquareOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SquareOptions();
        return $;
    }
};

$root.tflite.ZerosLikeOptions = class ZerosLikeOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ZerosLikeOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ZerosLikeOptions();
        return $;
    }
};

$root.tflite.FillOptions = class FillOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.FillOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.FillOptions();
        return $;
    }
};

$root.tflite.FloorModOptions = class FloorModOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.FloorModOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.FloorModOptions();
        return $;
    }
};

$root.tflite.RangeOptions = class RangeOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.RangeOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.RangeOptions();
        return $;
    }
};

$root.tflite.LeakyReluOptions = class LeakyReluOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.LeakyReluOptions();
        $.alpha = reader.float32_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.LeakyReluOptions();
        $.alpha = json.alpha;
        return $;
    }
};

$root.tflite.SquaredDifferenceOptions = class SquaredDifferenceOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SquaredDifferenceOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SquaredDifferenceOptions();
        return $;
    }
};

$root.tflite.MirrorPadMode = {
    REFLECT: 0,
    SYMMETRIC: 1
};

$root.tflite.MirrorPadOptions = class MirrorPadOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.MirrorPadOptions();
        $.mode = reader.int8_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.MirrorPadOptions();
        $.mode = $root.tflite.MirrorPadMode[json.mode];
        return $;
    }
};

$root.tflite.UniqueOptions = class UniqueOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.UniqueOptions();
        $.idx_out_type = reader.int8_(position, 4, 2);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.UniqueOptions();
        $.idx_out_type = $root.tflite.TensorType[json.idx_out_type];
        return $;
    }
};

$root.tflite.ReverseV2Options = class ReverseV2Options {

    static decode(reader, position) {
        const $ = new $root.tflite.ReverseV2Options();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ReverseV2Options();
        return $;
    }
};

$root.tflite.AddNOptions = class AddNOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.AddNOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.AddNOptions();
        return $;
    }
};

$root.tflite.GatherNdOptions = class GatherNdOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.GatherNdOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.GatherNdOptions();
        return $;
    }
};

$root.tflite.WhereOptions = class WhereOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.WhereOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.WhereOptions();
        return $;
    }
};

$root.tflite.ReverseSequenceOptions = class ReverseSequenceOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ReverseSequenceOptions();
        $.seq_dim = reader.int32_(position, 4, 0);
        $.batch_dim = reader.int32_(position, 6, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ReverseSequenceOptions();
        $.seq_dim = json.seq_dim;
        $.batch_dim = json.batch_dim;
        return $;
    }
};

$root.tflite.MatrixDiagOptions = class MatrixDiagOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.MatrixDiagOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.MatrixDiagOptions();
        return $;
    }
};

$root.tflite.QuantizeOptions = class QuantizeOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.QuantizeOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.QuantizeOptions();
        return $;
    }
};

$root.tflite.MatrixSetDiagOptions = class MatrixSetDiagOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.MatrixSetDiagOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.MatrixSetDiagOptions();
        return $;
    }
};

$root.tflite.IfOptions = class IfOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.IfOptions();
        $.then_subgraph_index = reader.int32_(position, 4, 0);
        $.else_subgraph_index = reader.int32_(position, 6, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.IfOptions();
        $.then_subgraph_index = json.then_subgraph_index;
        $.else_subgraph_index = json.else_subgraph_index;
        return $;
    }
};

$root.tflite.WhileOptions = class WhileOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.WhileOptions();
        $.cond_subgraph_index = reader.int32_(position, 4, 0);
        $.body_subgraph_index = reader.int32_(position, 6, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.WhileOptions();
        $.cond_subgraph_index = json.cond_subgraph_index;
        $.body_subgraph_index = json.body_subgraph_index;
        return $;
    }
};

$root.tflite.NonMaxSuppressionV4Options = class NonMaxSuppressionV4Options {

    static decode(reader, position) {
        const $ = new $root.tflite.NonMaxSuppressionV4Options();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.NonMaxSuppressionV4Options();
        return $;
    }
};

$root.tflite.NonMaxSuppressionV5Options = class NonMaxSuppressionV5Options {

    static decode(reader, position) {
        const $ = new $root.tflite.NonMaxSuppressionV5Options();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.NonMaxSuppressionV5Options();
        return $;
    }
};

$root.tflite.ScatterNdOptions = class ScatterNdOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ScatterNdOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ScatterNdOptions();
        return $;
    }
};

$root.tflite.SelectV2Options = class SelectV2Options {

    static decode(reader, position) {
        const $ = new $root.tflite.SelectV2Options();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SelectV2Options();
        return $;
    }
};

$root.tflite.DensifyOptions = class DensifyOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.DensifyOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.DensifyOptions();
        return $;
    }
};

$root.tflite.SegmentSumOptions = class SegmentSumOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SegmentSumOptions();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SegmentSumOptions();
        return $;
    }
};

$root.tflite.BatchMatMulOptions = class BatchMatMulOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.BatchMatMulOptions();
        $.adj_x = reader.bool_(position, 4, false);
        $.adj_y = reader.bool_(position, 6, false);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.BatchMatMulOptions();
        $.adj_x = json.adj_x;
        $.adj_y = json.adj_y;
        return $;
    }
};

$root.tflite.OperatorCode = class OperatorCode {

    static decode(reader, position) {
        const $ = new $root.tflite.OperatorCode();
        $.builtin_code = reader.int8_(position, 4, 0);
        $.custom_code = reader.string_(position, 6, null);
        $.version = reader.int32_(position, 8, 1);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.OperatorCode();
        $.builtin_code = $root.tflite.BuiltinOperator[json.builtin_code];
        $.custom_code = json.custom_code;
        $.version = json.version;
        return $;
    }
};

$root.tflite.CustomOptionsFormat = {
    FLEXBUFFERS: 0
};

$root.tflite.Operator = class Operator {

    static decode(reader, position) {
        const $ = new $root.tflite.Operator();
        $.opcode_index = reader.uint32_(position, 4, 0);
        $.inputs = reader.array(position, 6, Int32Array);
        $.outputs = reader.array(position, 8, Int32Array);
        $.builtin_options = reader.union_(position, 10, $root.tflite.BuiltinOptions.decode);
        $.custom_options = reader.array(position, 14, Uint8Array);
        $.custom_options_format = reader.int8_(position, 16, 0);
        // TODO [bool]
        $.mutating_variable_inputs= undefined;
        $.intermediates = reader.array(position, 20, Int32Array);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.Operator();
        $.opcode_index = json.opcode_index;
        $.inputs = json.inputs;
        $.outputs = json.outputs;
        $.builtin_options = $root.tflite.BuiltinOptions.decodeText(json.builtin_options, json.builtin_options_type);
        $.custom_options = json.custom_options;
        $.custom_options_format = $root.tflite.CustomOptionsFormat[json.custom_options_format];
        $.mutating_variable_inputs = json.mutating_variable_inputs;
        $.intermediates = json.intermediates;
        return $;
    }
};

$root.tflite.SubGraph = class SubGraph {

    static decode(reader, position) {
        const $ = new $root.tflite.SubGraph();
        $.tensors = reader.array_(position, 4, $root.tflite.Tensor.decode);
        $.inputs = reader.array(position, 6, Int32Array);
        $.outputs = reader.array(position, 8, Int32Array);
        $.operators = reader.array_(position, 10, $root.tflite.Operator.decode);
        $.name = reader.string_(position, 12, null);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SubGraph();
        $.tensors = Array.isArray(json.tensors) ? json.tensors.map((obj) => $root.tflite.Tensor.decodeText(obj)) : [];
        $.inputs = json.inputs;
        $.outputs = json.outputs;
        $.operators = Array.isArray(json.operators) ? json.operators.map((obj) => $root.tflite.Operator.decodeText(obj)) : [];
        $.name = json.name;
        return $;
    }
};

$root.tflite.Buffer = class Buffer {

    static decode(reader, position) {
        const $ = new $root.tflite.Buffer();
        $.data = reader.array(position, 4, Uint8Array);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.Buffer();
        $.data = json.data;
        return $;
    }
};

$root.tflite.Metadata = class Metadata {

    static decode(reader, position) {
        const $ = new $root.tflite.Metadata();
        $.name = reader.string_(position, 4, null);
        $.buffer = reader.uint32_(position, 6, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.Metadata();
        $.name = json.name;
        $.buffer = json.buffer;
        return $;
    }
};

$root.tflite.Model = class Model {

    static identifier(reader) {
        return reader.identifier('TFL3');
    }

    static create(reader) {
        return $root.tflite.Model.decode(reader, reader.int32(reader.position) + reader.position);
    }

    static createText(json) {
        return $root.tflite.Model.decodeText(json);
    }

    static decode(reader, position) {
        const $ = new $root.tflite.Model();
        $.version = reader.uint32_(position, 4, 0);
        $.operator_codes = reader.array_(position, 6, $root.tflite.OperatorCode.decode);
        $.subgraphs = reader.array_(position, 8, $root.tflite.SubGraph.decode);
        $.description = reader.string_(position, 10, null);
        $.buffers = reader.array_(position, 12, $root.tflite.Buffer.decode);
        $.metadata_buffer = reader.array(position, 14, Int32Array);
        $.metadata = reader.array_(position, 16, $root.tflite.Metadata.decode);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.Model();
        $.version = json.version;
        $.operator_codes = Array.isArray(json.operator_codes) ? json.operator_codes.map((obj) => $root.tflite.OperatorCode.decodeText(obj)) : [];
        $.subgraphs = Array.isArray(json.subgraphs) ? json.subgraphs.map((obj) => $root.tflite.SubGraph.decodeText(obj)) : [];
        $.description = json.description;
        $.buffers = Array.isArray(json.buffers) ? json.buffers.map((obj) => $root.tflite.Buffer.decodeText(obj)) : [];
        $.metadata_buffer = json.metadata_buffer;
        $.metadata = Array.isArray(json.metadata) ? json.metadata.map((obj) => $root.tflite.Metadata.decodeText(obj)) : [];
        return $;
    }
};


$root.tflite = $root.tflite || {};

$root.tflite.AssociatedFileType = {
    UNKNOWN: 0,
    DESCRIPTIONS: 1,
    TENSOR_AXIS_LABELS: 2,
    TENSOR_VALUE_LABELS: 3,
    TENSOR_AXIS_SCORE_CALIBRATION: 4,
    VOCABULARY: 5
};

$root.tflite.AssociatedFile = class AssociatedFile {

    static decode(reader, position) {
        const $ = new $root.tflite.AssociatedFile();
        $.name = reader.string_(position, 4, null);
        $.description = reader.string_(position, 6, null);
        $.type = reader.int8_(position, 8, 0);
        $.locale = reader.string_(position, 10, null);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.AssociatedFile();
        $.name = json.name;
        $.description = json.description;
        $.type = $root.tflite.AssociatedFileType[json.type];
        $.locale = json.locale;
        return $;
    }
};

$root.tflite.FeatureProperties = class FeatureProperties {

    static decode(reader, position) {
        const $ = new $root.tflite.FeatureProperties();
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.FeatureProperties();
        return $;
    }
};

$root.tflite.ColorSpaceType = {
    UNKNOWN: 0,
    RGB: 1,
    GRAYSCALE: 2
};

$root.tflite.ImageSize = class ImageSize {

    static decode(reader, position) {
        const $ = new $root.tflite.ImageSize();
        $.width = reader.uint32_(position, 4, 0);
        $.height = reader.uint32_(position, 6, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ImageSize();
        $.width = json.width;
        $.height = json.height;
        return $;
    }
};

$root.tflite.ImageProperties = class ImageProperties {

    static decode(reader, position) {
        const $ = new $root.tflite.ImageProperties();
        $.color_space = reader.int8_(position, 4, 0);
        // TODO Table
        $.default_size= undefined;
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ImageProperties();
        $.color_space = $root.tflite.ColorSpaceType[json.color_space];
        $.default_size = undefined;
        return $;
    }
};

$root.tflite.BoundingBoxType = {
    UNKNOWN: 0,
    BOUNDARIES: 1,
    UPPER_LEFT: 2,
    CENTER: 3
};

$root.tflite.CoordinateType = {
    RATIO: 0,
    PIXEL: 1
};

$root.tflite.BoundingBoxProperties = class BoundingBoxProperties {

    static decode(reader, position) {
        const $ = new $root.tflite.BoundingBoxProperties();
        $.index = reader.array(position, 4, Uint32Array);
        $.type = reader.int8_(position, 6, 0);
        $.coordinate_type = reader.int8_(position, 8, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.BoundingBoxProperties();
        $.index = json.index;
        $.type = $root.tflite.BoundingBoxType[json.type];
        $.coordinate_type = $root.tflite.CoordinateType[json.coordinate_type];
        return $;
    }
};

$root.tflite.ContentProperties = class {

    static decode(reader, position, type) {
        switch (type) {
            case 1: return $root.tflite.FeatureProperties.decode(reader, position);
            case 2: return $root.tflite.ImageProperties.decode(reader, position);
            case 3: return $root.tflite.BoundingBoxProperties.decode(reader, position);
        }
        return undefined;
    }

    static decodeText(json, type) {
        switch (type) {
            case 'FeatureProperties': return $root.tflite.FeatureProperties.decodeText(json);
            case 'ImageProperties': return $root.tflite.ImageProperties.decodeText(json);
            case 'BoundingBoxProperties': return $root.tflite.BoundingBoxProperties.decodeText(json);
        }
        return undefined;
    }
};

$root.tflite.ValueRange = class ValueRange {

    static decode(reader, position) {
        const $ = new $root.tflite.ValueRange();
        $.min = reader.int32_(position, 4, 0);
        $.max = reader.int32_(position, 6, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ValueRange();
        $.min = json.min;
        $.max = json.max;
        return $;
    }
};

$root.tflite.Content = class Content {

    static decode(reader, position) {
        const $ = new $root.tflite.Content();
        $.content_properties = reader.union_(position, 4, $root.tflite.ContentProperties.decode);
        // TODO Table
        $.range= undefined;
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.Content();
        $.content_properties = $root.tflite.ContentProperties.decodeText(json.content_properties, json.content_properties_type);
        $.range = undefined;
        return $;
    }
};

$root.tflite.NormalizationOptions = class NormalizationOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.NormalizationOptions();
        $.mean = reader.array(position, 4, Float32Array);
        $.std = reader.array(position, 6, Float32Array);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.NormalizationOptions();
        $.mean = json.mean;
        $.std = json.std;
        return $;
    }
};

$root.tflite.ScoreTransformationType = {
    IDENTITY: 0,
    LOG: 1,
    INVERSE_LOGISTIC: 2
};

$root.tflite.ScoreCalibrationOptions = class ScoreCalibrationOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ScoreCalibrationOptions();
        $.score_transformation = reader.int8_(position, 4, 0);
        $.default_score = reader.float32_(position, 6, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ScoreCalibrationOptions();
        $.score_transformation = $root.tflite.ScoreTransformationType[json.score_transformation];
        $.default_score = json.default_score;
        return $;
    }
};

$root.tflite.ScoreThresholdingOptions = class ScoreThresholdingOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.ScoreThresholdingOptions();
        $.global_score_threshold = reader.float32_(position, 4, 0);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ScoreThresholdingOptions();
        $.global_score_threshold = json.global_score_threshold;
        return $;
    }
};

$root.tflite.BertTokenizerOptions = class BertTokenizerOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.BertTokenizerOptions();
        $.vocab_file = reader.array_(position, 4, $root.tflite.AssociatedFile.decode);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.BertTokenizerOptions();
        $.vocab_file = Array.isArray(json.vocab_file) ? json.vocab_file.map((obj) => $root.tflite.AssociatedFile.decodeText(obj)) : [];
        return $;
    }
};

$root.tflite.SentencePieceTokenizerOptions = class SentencePieceTokenizerOptions {

    static decode(reader, position) {
        const $ = new $root.tflite.SentencePieceTokenizerOptions();
        $.sentencePiece_model = reader.array_(position, 4, $root.tflite.AssociatedFile.decode);
        $.vocab_file = reader.array_(position, 6, $root.tflite.AssociatedFile.decode);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SentencePieceTokenizerOptions();
        $.sentencePiece_model = Array.isArray(json.sentencePiece_model) ? json.sentencePiece_model.map((obj) => $root.tflite.AssociatedFile.decodeText(obj)) : [];
        $.vocab_file = Array.isArray(json.vocab_file) ? json.vocab_file.map((obj) => $root.tflite.AssociatedFile.decodeText(obj)) : [];
        return $;
    }
};

$root.tflite.ProcessUnitOptions = class {

    static decode(reader, position, type) {
        switch (type) {
            case 1: return $root.tflite.NormalizationOptions.decode(reader, position);
            case 2: return $root.tflite.ScoreCalibrationOptions.decode(reader, position);
            case 3: return $root.tflite.ScoreThresholdingOptions.decode(reader, position);
            case 4: return $root.tflite.BertTokenizerOptions.decode(reader, position);
            case 5: return $root.tflite.SentencePieceTokenizerOptions.decode(reader, position);
        }
        return undefined;
    }

    static decodeText(json, type) {
        switch (type) {
            case 'NormalizationOptions': return $root.tflite.NormalizationOptions.decodeText(json);
            case 'ScoreCalibrationOptions': return $root.tflite.ScoreCalibrationOptions.decodeText(json);
            case 'ScoreThresholdingOptions': return $root.tflite.ScoreThresholdingOptions.decodeText(json);
            case 'BertTokenizerOptions': return $root.tflite.BertTokenizerOptions.decodeText(json);
            case 'SentencePieceTokenizerOptions': return $root.tflite.SentencePieceTokenizerOptions.decodeText(json);
        }
        return undefined;
    }
};

$root.tflite.ProcessUnit = class ProcessUnit {

    static decode(reader, position) {
        const $ = new $root.tflite.ProcessUnit();
        $.options = reader.union_(position, 4, $root.tflite.ProcessUnitOptions.decode);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ProcessUnit();
        $.options = $root.tflite.ProcessUnitOptions.decodeText(json.options, json.options_type);
        return $;
    }
};

$root.tflite.Stats = class Stats {

    static decode(reader, position) {
        const $ = new $root.tflite.Stats();
        $.max = reader.array(position, 4, Float32Array);
        $.min = reader.array(position, 6, Float32Array);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.Stats();
        $.max = json.max;
        $.min = json.min;
        return $;
    }
};

$root.tflite.TensorGroup = class TensorGroup {

    static decode(reader, position) {
        const $ = new $root.tflite.TensorGroup();
        $.name = reader.string_(position, 4, null);
        // TODO [string]
        $.tensor_names= undefined;
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.TensorGroup();
        $.name = json.name;
        $.tensor_names = json.tensor_names;
        return $;
    }
};

$root.tflite.TensorMetadata = class TensorMetadata {

    static decode(reader, position) {
        const $ = new $root.tflite.TensorMetadata();
        $.name = reader.string_(position, 4, null);
        $.description = reader.string_(position, 6, null);
        // TODO [string]
        $.dimension_names= undefined;
        // TODO Table
        $.content= undefined;
        $.process_units = reader.array_(position, 12, $root.tflite.ProcessUnit.decode);
        // TODO Table
        $.stats= undefined;
        $.associated_files = reader.array_(position, 16, $root.tflite.AssociatedFile.decode);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.TensorMetadata();
        $.name = json.name;
        $.description = json.description;
        $.dimension_names = json.dimension_names;
        $.content = undefined;
        $.process_units = Array.isArray(json.process_units) ? json.process_units.map((obj) => $root.tflite.ProcessUnit.decodeText(obj)) : [];
        $.stats = undefined;
        $.associated_files = Array.isArray(json.associated_files) ? json.associated_files.map((obj) => $root.tflite.AssociatedFile.decodeText(obj)) : [];
        return $;
    }
};

$root.tflite.SubGraphMetadata = class SubGraphMetadata {

    static decode(reader, position) {
        const $ = new $root.tflite.SubGraphMetadata();
        $.name = reader.string_(position, 4, null);
        $.description = reader.string_(position, 6, null);
        $.input_tensor_metadata = reader.array_(position, 8, $root.tflite.TensorMetadata.decode);
        $.output_tensor_metadata = reader.array_(position, 10, $root.tflite.TensorMetadata.decode);
        $.associated_files = reader.array_(position, 12, $root.tflite.AssociatedFile.decode);
        $.input_process_units = reader.array_(position, 14, $root.tflite.ProcessUnit.decode);
        $.output_process_units = reader.array_(position, 16, $root.tflite.ProcessUnit.decode);
        $.input_tensor_groups = reader.array_(position, 18, $root.tflite.TensorGroup.decode);
        $.output_tensor_groups = reader.array_(position, 20, $root.tflite.TensorGroup.decode);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.SubGraphMetadata();
        $.name = json.name;
        $.description = json.description;
        $.input_tensor_metadata = Array.isArray(json.input_tensor_metadata) ? json.input_tensor_metadata.map((obj) => $root.tflite.TensorMetadata.decodeText(obj)) : [];
        $.output_tensor_metadata = Array.isArray(json.output_tensor_metadata) ? json.output_tensor_metadata.map((obj) => $root.tflite.TensorMetadata.decodeText(obj)) : [];
        $.associated_files = Array.isArray(json.associated_files) ? json.associated_files.map((obj) => $root.tflite.AssociatedFile.decodeText(obj)) : [];
        $.input_process_units = Array.isArray(json.input_process_units) ? json.input_process_units.map((obj) => $root.tflite.ProcessUnit.decodeText(obj)) : [];
        $.output_process_units = Array.isArray(json.output_process_units) ? json.output_process_units.map((obj) => $root.tflite.ProcessUnit.decodeText(obj)) : [];
        $.input_tensor_groups = Array.isArray(json.input_tensor_groups) ? json.input_tensor_groups.map((obj) => $root.tflite.TensorGroup.decodeText(obj)) : [];
        $.output_tensor_groups = Array.isArray(json.output_tensor_groups) ? json.output_tensor_groups.map((obj) => $root.tflite.TensorGroup.decodeText(obj)) : [];
        return $;
    }
};

$root.tflite.ModelMetadata = class ModelMetadata {

    static identifier(reader) {
        return reader.identifier('M001');
    }

    static create(reader) {
        return $root.tflite.ModelMetadata.decode(reader, reader.int32(reader.position) + reader.position);
    }

    static decode(reader, position) {
        const $ = new $root.tflite.ModelMetadata();
        $.name = reader.string_(position, 4, null);
        $.description = reader.string_(position, 6, null);
        $.version = reader.string_(position, 8, null);
        $.subgraph_metadata = reader.array_(position, 10, $root.tflite.SubGraphMetadata.decode);
        $.author = reader.string_(position, 12, null);
        $.license = reader.string_(position, 14, null);
        $.associated_files = reader.array_(position, 16, $root.tflite.AssociatedFile.decode);
        $.min_parser_version = reader.string_(position, 18, null);
        return $;
    }

    static decodeText(json) {
        const $ = new $root.tflite.ModelMetadata();
        $.name = json.name;
        $.description = json.description;
        $.version = json.version;
        $.subgraph_metadata = Array.isArray(json.subgraph_metadata) ? json.subgraph_metadata.map((obj) => $root.tflite.SubGraphMetadata.decodeText(obj)) : [];
        $.author = json.author;
        $.license = json.license;
        $.associated_files = Array.isArray(json.associated_files) ? json.associated_files.map((obj) => $root.tflite.AssociatedFile.decodeText(obj)) : [];
        $.min_parser_version = json.min_parser_version;
        return $;
    }
};
