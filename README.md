npm i -g grpc-tools

protoc \
--js_out=import_style=commonjs,binary:. \
--ts_out=import_style=commonjs,binary:. \
--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
./proto/query.proto
