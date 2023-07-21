all:

chain-types:
	rm -rf chain && mkdir chain
	mv ../fluxd/ts/* chain/
	echo "👉 Replace fluxd/chain with sdk-ts/chain"
