# [Grabacion](https://drive.google.com/file/d/1-nPFnyJoE8d_N6cUJVtd3D1y6TMaebKq/view?usp=sharing)

## https://linkerd.io/2.11/getting-started/

-------------

# Linkerd
```
curl -fsL https://run.linkerd.io/install | sh
```

## Path

Exportar la ruta que les indique. Ej.
```
export PATH=$PATH:$HOME/.linkerd2/bin
```

```
linkerd check --pre
```
Si al ejecutar el comando genera un error del auth plugin seguir los sigientes pasos, en caso contrario seguir desde la sección de credenciales.

----------

## Error gke-gcloud-auth-plugin
### https://cloud.google.com/blog/products/containers-kubernetes/kubectl-auth-changes-in-gke

### Instalar gke-gcloud-auth-plugin
```
gcloud components install gke-gcloud-auth-plugin

sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin

gke-gcloud-auth-plugin --version
```
### Configurarlo para uso en el cluster
```
export USE_GKE_GCLOUD_AUTH_PLUGIN=True

source ~/.bashrc

gcloud components update

gcloud container clusters get-credentials <CLUSTER_NAME>
```
Para confirmar que funciona realizar el linkerd check.

--------

## Credenciales
```
linkerd install --crds | kubectl apply -f -

linkerd install | kubectl apply -f -
```

## Instalar Dashboard
```
linkerd viz install | kubectl apply -f -
```

## Inyectar Deployments

```
kubectl -n <my_namespace> get deploy -o yaml | linkerd inject - | kubectl apply -f -
```

## Ingresar al Dashboard
```
linkerd viz dashboard
```
