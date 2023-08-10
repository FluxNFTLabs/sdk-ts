all:

chain-types:
	rm -rf chain && mkdir chain
	mv ../fluxd/ts/* chain/
	mv ../fluxd/codec_type_map.json chain/
	echo "👉 Replace fluxd/chain with sdk-ts/chain"
