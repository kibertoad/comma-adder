# comma-adder
Splits list of ids from a file using commas

On Unix-based systems you can do the same by running
```bash
cat source.txt | sed 's/$/,/' > target.txt
```

```bash
node lib/comma_adder.js --source=source.txt [--target=target.txt]
```
