#!/bin/bash -e

mkdir -p openshift
cd openshift

# Install dependencies
# sudo yum -y update
sudo yum -y install jq python3 socat wget podman

# Prepare kubernetes repos

cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-\$basearch
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
exclude=kubelet kubeadm kubectl
EOF

# Install kubectl

sudo yum install -y kubectl --disableexcludes=kubernetes

# Download and install HELM 

wget https://get.helm.sh/helm-v3.8.0-linux-amd64.tar.gz

if [ $? -eq  0 ]
then
  echo "Helm 3.8 downloaded, moving to install Helm"
else
  echo "Helm 3.8 download failed - check URL and connectivity"
fi

# Unzip downloaded Helm and install

tar xvf helm-v3.8.0-linux-amd64.tar.gz
sudo mv linux-amd64/helm /usr/local/bin

# Print HELM version
which helm

if [ $? -eq  0 ]
then
  echo "Helm is of $(helm version)"
else
  echo "Helm 3.8 install failed - check URL and connectivity"
fi

# Disable selinux
#sudo setenforce 0
#sudo sed -i.bkp -r 's/(SELINUX=)enforcing/\1disabled/g;s/^SELINUXTYPE=targeted/#&/g' /etc/selinux/config

# Download Openshift installer
curl -o openshift-install-linux.tar.gz http://@@{PROVISIONING_VM}@@:8080/openshift/openshift-install-linux.tar.gz
tar xzf openshift-install-linux.tar.gz
sudo install -m 755 -o root openshift-install /sbin/

# Download Openshift client
curl -o openshift-client-linux.tar.gz http://@@{PROVISIONING_VM}@@:8080/openshift/openshift-client-linux.tar.gz
tar xzf openshift-client-linux.tar.gz
sudo install -m 755 -o root oc /sbin/
