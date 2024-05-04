all:

chain-types:
	rm -rf chain && mkdir chain
	mv ../fluxd/ts/* chain/ && rm -r ../fluxd/ts
	mv ../fluxd/codec_type_map.json chain/
