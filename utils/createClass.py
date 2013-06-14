import os

INCLUDES = [
#'sinon-1.3.1.js'
]
FILES = [
'intro.js',
'Onsetsu.js',
'core\Object.js',
'outro.js',
]

def merge(files, includes):

	buffer = []

	for filename in includes:
		with open(os.path.join('..', 'libs', filename), 'r') as f:
			buffer.append(f.read())
	for filename in files:
		with open(os.path.join('..', 'src', filename), 'r') as f:
			buffer.append(f.read())

	return "".join(buffer)

def output(text, filename):
	with open(os.path.join('..', 'build', filename), 'w') as f:
		f.write(text)

def buildLibrary(files, includes, filename):
	text = merge(files, includes)
	filename = filename + '.js'
	output(text, filename)

def main(argv=None):
	buildLibrary(FILES, INCLUDES, "Onsetsu3D")

if __name__ == "__main__":
	main()
