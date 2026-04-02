import os
import sys

files = ['vite.config.ts', 'index.html']
for f in files:
    try:
        if os.path.exists(f):
            os.remove(f)
            print(f'Successfully deleted {f}')
        else:
            print(f'{f} does not exist')
    except Exception as e:
        print(f'Error deleting {f}: {e}')
