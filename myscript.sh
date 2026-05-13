#!/bin/bash

echo "=== Server Health Check ==="
echo "Date: $(date)"
echo "User: $(whoami)"
echo "Directory: $(pwd)"
echo ""
echo "=== Running Processes ==="
ps aux | grep bash
echo ""
echo "=== Disk Space ==="
df -h
echo ""
echo "=== Check Complete ==="