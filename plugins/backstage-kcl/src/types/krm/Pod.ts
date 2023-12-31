/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { KubernetesKeyValueObject } from './KubernetesResource';

export type PodTemplateSpec = {
  metadata: PodMetadata;
  spec: PodSpec;
};

export type PodMetadata = {
  name: string;
  namespace?: string;
  labels?: KubernetesKeyValueObject;
  annotations?: KubernetesKeyValueObject;
};

export type PodSpec = {
  serviceAccountName?: string;
  volumes?: Volume[];
  containers: Container[];
  securityContext?: PodSecurityContext;
  restartPolicy?: string;
  terminationGracePeriodSeconds?: number;
};

export type Volume = {
  name: string;
  persistentVolumeClaim?: PersistentVolumeClaimVolumeSource;
  configMap?: ConfigMapVolumeSource;
  emptyDir?: EmptyDirVolumeSource;
  secret?: SecretVolumeSource;
};

export type PersistentVolumeClaimVolumeSource = {
  claimName: string;
  readOnly?: boolean;
};

export type ConfigMapVolumeSource = {
  name: string;
  items?: KeyToPath[];
  optional?: boolean;
};

export type EmptyDirVolumeSource = {};

export type SecretVolumeSource = {
  secretName?: string;
  items?: KeyToPath[];
  optional?: boolean;
};

export type Container = {
  name: string;
  image?: string;
  command?: string[];
  args?: string[];
  ports?: ContainerPort[];
  volumeMounts?: VolumeMount[];
  env?: EnvVar[];
  envFrom?: EnvFromSource[];
  resources?: ResourceRequirements;
  startupProbe?: Probe;
  livenessProbe?: Probe;
  readinessProbe?: Probe;
  imagePullPolicy?: string;
  imagePullSecrets?: string[];
  securityContext?: SecurityContext;
};

export type ContainerPort = {
  name: string;
  containerPort: number;
  protocol?: string;
};

export type VolumeMount = {
  name: string;
  mountPath: string;
  readOnly?: boolean;
};

export type EnvVar = {
  name: string;
  value?: string;
  valueFrom?: EnvVarSource;
};

export type EnvVarSource = {
  configMapKeyRef?: ConfigMapKeySelector;
  fieldRef?: ObjectFieldSelector;
  resourceFieldRef?: ResourceFieldSelector;
  secretKeyRef?: SecretKeySelector;
};

export type KeyToPath = {
  key: string;
  path: string;
};

export type ConfigMapKeySelector = {
  name: string;
  key: string;
  optional?: boolean;
};

export type ObjectFieldSelector = {
  apiVersion?: string;
  fieldPath: string;
};

export type ResourceFieldSelector = {
  containerName?: string;
  resource: string;
  divisor?: string;
};

export type SecretKeySelector = {
  name: string;
  key: string;
  optional?: boolean;
};

export type EnvFromSource = {
  prefix?: string;
  configMapRef?: ConfigMapEnvSource;
  secretRef?: SecretEnvSource;
};

export type ConfigMapEnvSource = {
  name?: string;
  optional?: boolean;
};

export type SecretEnvSource = {
  name?: string;
  optional?: boolean;
};

export type ResourceRequirements = {
  requests?: KubernetesKeyValueObject;
  limits?: KubernetesKeyValueObject;
};

export type Probe = {
  exec?: ExecAction;
  httpGet?: HTTPGetAction;
  tcpSocket?: TCPSocketAction;
  initialDelaySeconds?: number;
  timeoutSeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  failureThreshold?: number;
};

export type HTTPGetAction = {
  path?: string;
  port: string | number;
};

export type TCPSocketAction = {
  port: string | number;
};

export type ExecAction = {
  command?: string[];
};

export type PodSecurityContext = {
  runAsUser?: number;
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  fsGroup?: number;
};

export type SecurityContext = {
  capabilities?: Capabilities;
  privileged?: boolean;
  runAsUser?: number;
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  readOnlyRootFilesystem?: boolean;
  allowPrivilegeEscalation?: boolean;
};

export type Capabilities = {
  add?: string[];
  drop?: string[];
};
