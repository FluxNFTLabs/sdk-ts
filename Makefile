all:

chain-types:
	mv ../fluxd/ts/* chain/
	echo "👉 Replace fluxd/chain with sdk-ts/chain"
